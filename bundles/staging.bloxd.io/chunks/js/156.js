export const id = 156;
export const ids = [156];
export const modules = {
  8875: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => LD
    });
    var pD = wD(20),
      sD = wD(1200),
      KD = wD(5021),
      rD = wD(1096);

    function LD(DD) {
      let {
        note: zD
      } = DD;
      const {
        t: wD
      } = (0, sD.E)(), {
        clientEscMenuOptions: LD
      } = (0, pD.n)(["clientEscMenuOptions"]);
      return (0, rD.jsx)(KD.b, {
        label: wD("touchSettings:actionButtons"),
        checked: LD.touchActionButtons,
        onClick: DD => {
          pD.e.setClientEscMenuOptions({
            touchActionButtons: DD
          })
        },
        circleInfoText: wD("touchSettings:actionButtonsInfo"),
        note: zD
      })
    }
  },
  8865: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => Ww,
      g: () => lw
    });
    var pD = wD(1200),
      sD = wD(58),
      KD = wD(1981),
      rD = wD(1987),
      LD = wD(1044),
      cD = wD.n(LD),
      gD = wD(1447),
      RD = wD(20),
      AD = wD(103),
      UD = wD(116),
      fD = wD(5021),
      ID = wD(2402),
      BD = wD(287),
      GD = wD(1991),
      hD = wD(1998),
      nD = wD(8870),
      MD = wD(8875),
      OD = wD(338),
      JD = wD(1096);
    const ED = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var QD = wD(8883);
    var XD = wD(1472),
      VD = wD(1355),
      PD = wD(8887),
      CD = wD(1394),
      xD = wD(1057),
      TD = wD(2428);
    const bD = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(TD.z.map((DD => [DD, "menu"])))
      },
      jD = DD => TD.t.filter((zD => bD[zD] === DD)),
      dD = new Set(jD("cluster")),
      SD = ["cluster"],
      iD = [...SD, ...TD.t.filter((DD => !SD.includes(DD) && !bD[DD]))],
      lD = iD.flatMap((DD => [DD, ...jD(DD)])).map((DD => ({
        id: DD,
        label: `hudLayout:${DD}`,
        ...TD.q[DD],
        parent: bD[DD]
      }))),
      WD = Object.fromEntries(lD.map((DD => [DD.id, DD]))),
      ND = "data-hud-el";

    function ZD(DD, zD, wD, pD) {
      const sD = wD(function(DD, zD) {
          return "attack" !== DD || zD ? WD[DD].label : "hudLayout:attackContext"
        }(DD, zD)),
        KD = pD[DD];
      return KD ? wD("hudLayout:slotWithKey", {
        slot: sD,
        key: KD
      }) : sD
    }

    function yD(DD, zD, wD, pD) {
      return DD.map((DD => ZD(DD, zD, wD, pD))).join(", ")
    }

    function kD(DD) {
      let {
        className: zD,
        keepPlace: wD
      } = DD;
      return wD ? (0, JD.jsx)("div", {
        className: cD()(zD, "Placeholder")
      }) : null
    }

    function mD(DD) {
      let {
        id: zD,
        elements: wD,
        actionButtons: sD,
        keyNames: KD,
        className: rD,
        keepPlace: LD,
        onHidden: cD
      } = DD;
      const {
        t: RD
      } = (0, pD.E)();
      if (!WD[zD].hide) return (0, JD.jsx)(kD, {
        className: rD,
        keepPlace: LD
      });
      const AD = (0, TD.o)(wD, zD);
      return (0, JD.jsx)(gD.Y, {
        className: rD,
        ariaLabel: RD(AD ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: ZD(zD, sD, RD, KD)
        }),
        pressed: !AD,
        onClick: () => {
          cD(zD, !AD)
        },
        children: (0, JD.jsx)(xD.e, {
          name: AD ? "eye-slash" : "eye"
        })
      })
    }

    function eD(DD) {
      var zD;
      let {
        id: wD,
        elements: sD,
        actionButtons: KD,
        keyNames: rD,
        className: LD,
        keepPlace: cD,
        onlyWhenMoved: RD,
        locked: AD,
        onReset: UD
      } = DD;
      const {
        t: fD
      } = (0, pD.E)(), ID = WD[wD], BD = (0, TD.I)(null !== (zD = sD[wD]) && void 0 !== zD ? zD : TD.k);
      return !ID.move && !ID.scale || RD && BD ? (0, JD.jsx)(kD, {
        className: LD,
        keepPlace: cD
      }) : (0, JD.jsx)(gD.Y, {
        className: LD,
        disabled: BD || AD,
        ariaLabel: fD("hudLayout:resetElement", {
          name: ZD(wD, KD, fD, rD)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: wD
        },
        onClick: DD => {
          RD && vD(DD.currentTarget), UD(wD)
        },
        children: (0, JD.jsx)(xD.e, {
          name: "rotate-left"
        })
      })
    }

    function oD(DD) {
      let {
        id: zD,
        actionButtons: wD,
        keyNames: sD,
        className: KD,
        keepPlace: rD,
        locked: LD,
        lockable: cD,
        onLocked: RD
      } = DD;
      const {
        t: AD
      } = (0, pD.E)();
      return cD || LD ? (0, JD.jsx)(gD.Y, {
        className: KD,
        ariaLabel: AD(LD ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: ZD(zD, wD, AD, sD)
        }),
        pressed: LD,
        active: LD,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${LD?"unlock":"lock"}:${zD}`
        },
        onClick: () => {
          RD(zD, !LD)
        },
        children: (0, JD.jsx)(xD.e, {
          name: LD ? "lock" : "lock-open"
        })
      }) : (0, JD.jsx)(kD, {
        className: KD,
        keepPlace: rD
      })
    }

    function aD(DD) {
      let {
        className: zD,
        open: wD,
        name: sD,
        onToggle: KD
      } = DD;
      const {
        t: rD
      } = (0, pD.E)();
      return (0, JD.jsx)(gD.Y, {
        className: zD,
        ariaLabel: rD(wD ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: sD
        }),
        pressed: wD,
        analyticsClick: {
          id: "hud_layout.children",
          value: wD ? "close" : "open"
        },
        onClick: () => {
          KD(!wD)
        },
        children: (0, JD.jsx)(xD.e, {
          name: wD ? "angle-up" : "angle-down"
        })
      })
    }

    function uD(DD, zD) {
      var wD;
      DD.contains(document.activeElement) && zD.focus({
        preventScroll: !0
      }), null === (wD = (0, CD.g)()) || void 0 === wD || wD.handOverPadFocus(DD, zD)
    }

    function vD(DD) {
      const zD = DD.closest("[data-hud-row]"),
        wD = null === zD || void 0 === zD ? void 0 : zD.querySelector(".HudElementRowName");
      return !(!zD || !wD) && (uD(zD, wD), !0)
    }
    const tD = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function FD(DD, zD) {
      return "joystick" === DD && !zD
    }

    function YD() {
      const {
        t: DD
      } = (0, pD.E)();
      return (0, JD.jsx)(gD.Y, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: DD => {
          const zD = DD.currentTarget;
          if (!vD(zD)) {
            const DD = function(DD) {
              var zD, wD;
              const pD = [DD.previousElementSibling, DD.nextElementSibling].find((DD => DD instanceof HTMLElement && DD.matches(tD)));
              return null !== (zD = null !== pD && void 0 !== pD ? pD : null === (wD = DD.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === wD ? void 0 : wD.querySelector(`:is(${tD}):not(.HudFixJoystickButton)`)) && void 0 !== zD ? zD : null
            }(zD);
            DD && uD(zD, DD)
          }
          RD.e.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: DD("hudLayout:fixJoystick")
      })
    }
    var HD = wD(79),
      qD = wD(1282),
      Dz = wD(3089),
      zz = wD(2750),
      wz = wD(8894),
      pz = wD(2437),
      sz = wD(2471),
      Kz = wD(3139);
    const rz = ["J", "C", "A", "P", "U", "X", "G"],
      Lz = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: TD.z,
        pinnedIcon: null
      });

    function cz(DD, zD) {
      DD.replaceChildren(...[...zD.childNodes].map((DD => DD.cloneNode(!0))))
    }
    const gz = DD => ({
      [ND]: DD
    });

    function Rz(DD) {
      let {
        id: zD,
        slot: wD,
        icon: pD,
        label: KD,
        hidden: rD,
        className: LD,
        face: gD
      } = DD;
      const RD = (0, sD.useRef)(null);
      return (0, sD.useLayoutEffect)((() => {
        gD && RD.current && cz(RD.current, gD)
      }), [gD]), (0, JD.jsxs)("div", {
        className: cD()("TouchKeyHit", `TouchSlot${wD}`, LD, {
          HudPreviewGhost: rD.has(zD)
        }),
        ...gz(zD),
        children: [gD && (0, JD.jsx)("div", {
          ref: RD,
          className: cD()("TouchKey", {
            Labelled: gD.classList.contains("Labelled")
          })
        }), !gD && (0, JD.jsxs)("div", {
          className: cD()("TouchKey", {
            Labelled: void 0 !== KD
          }),
          children: [pD && (0, JD.jsx)(xD.e, {
            name: pD
          }), void 0 !== KD && (0, JD.jsx)("span", {
            className: "TouchKeyLabel",
            children: KD
          })]
        })]
      })
    }

    function Az(DD) {
      let {
        item: zD,
        selected: wD
      } = DD;
      const pD = (0, sD.useRef)(null);
      return (0, sD.useLayoutEffect)((() => {
        pD.current && cz(pD.current, zD)
      }), [zD]), (0, JD.jsx)("div", {
        ref: pD,
        className: cD()("InvenItem", {
          Selected: wD
        })
      })
    }
    const Uz = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      fz = DD => void 0 === DD ? {} : {
        style: {
          "--parked": DD
        }
      };

    function Iz(DD) {
      let {
        id: zD,
        hidden: wD,
        parked: pD,
        unslotted: sD = !1
      } = DD;
      return (0, JD.jsx)("div", {
        className: cD()("TopRightIcon", sz.m[zD], {
          HudPreviewGhost: wD.has(zD),
          [pz.c]: void 0 !== pD,
          [pz.e]: sD
        }),
        ...fz(pD),
        children: (0, JD.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...gz(zD),
          children: (0, JD.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, JD.jsx)(xD.e, {
              name: Uz[zD]
            })
          })
        })
      })
    }

    function Bz(DD) {
      let {
        portraitPhone: zD,
        icons: wD,
        pinnedIcon: pD,
        hidden: KD,
        moved: rD,
        trayState: LD
      } = DD;
      const gD = zD ? (0, pz.A)(wD) : [],
        RD = wD.filter((DD => "settings" === DD)),
        AD = wD.filter((DD => "settings" !== DD && !gD.includes(DD))).reverse(),
        UD = gD.length > 0 && "gone" === LD,
        fD = [...RD, ...UD ? ["tray"] : [], ...AD].filter((DD => "tray" === DD || KD.has(DD) && !rD.has(DD))),
        ID = DD => {
          const zD = fD.indexOf(DD);
          return zD < 0 ? void 0 : zD
        },
        BD = (DD, zD) => (0, JD.jsx)(Iz, {
          id: DD,
          hidden: KD,
          parked: zD ? ID(DD) : void 0,
          unslotted: zD && KD.has(DD) && rD.has(DD)
        }, DD);
      return (0, JD.jsxs)("div", {
        className: cD()("TopRightIcons TouchInGame", {
          Column: zD
        }),
        children: [RD.map((DD => BD(DD, !0))), gD.length > 0 && (0, JD.jsxs)("div", {
          className: cD()("TopRightIcon TopRightTrayToggle Open", {
            [pz.c]: UD
          }),
          ...fz(ID("tray")),
          children: [(0, JD.jsx)("div", {
            className: cD()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== LD
            }),
            children: (0, JD.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, JD.jsx)(xD.e, {
                name: "ellipsis"
              })
            })
          }), (0, JD.jsx)("div", {
            className: "TopRightTray",
            children: gD.map((DD => BD(DD, !1)))
          })]
        }), AD.map((DD => (0, JD.jsxs)(sD.Fragment, {
          children: ["perspective" === DD && null !== pD && (0, JD.jsx)("div", {
            className: "TopRightIcon",
            children: (0, JD.jsx)("div", {
              className: "UiItemIcon SmallTextBold",
              children: (0, JD.jsx)("div", {
                className: "ScaleOnHover",
                children: (0, JD.jsx)(xD.e, {
                  name: pD
                })
              })
            })
          }), BD(DD, !0)]
        }, DD)))]
      })
    }

    function Gz(DD) {
      let {
        next: zD,
        hidden: wD
      } = DD;
      return (0, JD.jsx)("div", {
        className: cD()("HotBarArrow", zD ? "Next" : "Previous", {
          HudPreviewGhost: wD
        }),
        ...gz("arrows"),
        children: (0, JD.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, JD.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, JD.jsx)(xD.e, {
              name: zD ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function hz() {
      return (0, JD.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, JD.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, JD.jsx)("div", {
            className: "SocialBar",
            children: (0, JD.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, JD.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, JD.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, JD.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, JD.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, JD.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, JD.jsx)(xD.e, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, JD.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, JD.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, JD.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, JD.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, JD.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, JD.jsx)(xD.e, {
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
    const nz = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      Mz = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Oz = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      Jz = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function Ez(DD) {
      let {
        presence: zD,
        portraitPhone: wD,
        hidden: sD,
        actionButtons: KD,
        joystickFixed: rD,
        keysAbove: LD,
        auraBar: gD,
        trayState: RD,
        moved: UD
      } = DD;
      const {
        t: fD
      } = (0, pD.E)(), {
        faces: ID,
        items: BD
      } = zD, GD = DD => ({
        HudPreviewGhost: sD.has(DD)
      });
      return (0, JD.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, JD.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, JD.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, JD.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, JD.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, JD.jsx)("div", {
              className: "InGameHeaderGameName",
              children: fD("hudLayout:previewGameName")
            })]
          })
        }), (0, JD.jsx)("div", {
          className: "TopLeftElements",
          children: (0, JD.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, JD.jsxs)("div", {
              className: "Chat",
              children: [(0, JD.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [fD("hudLayout:previewChatLine"), fD("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), fD("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((DD => (0, JD.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, JD.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, JD.jsx)("div", {
                      className: "IndividualText",
                      children: DD
                    })
                  })
                }, DD)))
              }), (0, JD.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: cD()("ChatIconWrapper SmallTextLight", GD("chat")),
                ...gz("chat"),
                children: (0, JD.jsx)(xD.e, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, JD.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, JD.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, JD.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, JD.jsx)("div", {
                className: "TopRightIconsContainer",
                ...gz("menu"),
                children: (0, JD.jsx)(Bz, {
                  portraitPhone: wD,
                  icons: zD.rowIcons,
                  pinnedIcon: zD.pinnedIcon,
                  hidden: sD,
                  trayState: RD,
                  moved: UD
                })
              })
            }), AD.featureFlags.useSocialFeatures && (0, JD.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, JD.jsx)(hz, {})
            })]
          })
        }), (0, JD.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, JD.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, JD.jsxs)("div", {
            className: "TouchInteractKey",
            ...gz("interact"),
            children: [(0, JD.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, JD.jsx)(xD.e, {
                name: "hand-back-point-up"
              })
            }), (0, JD.jsx)("div", {
              children: fD("hudLayout:previewInteract")
            })]
          })
        }), (0, JD.jsx)("div", {
          className: "BottomCentre",
          children: (0, JD.jsxs)("div", {
            className: "BottomElements",
            children: [(0, JD.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, JD.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, JD.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...gz("hotbar"),
                children: (0, JD.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, JD.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, JD.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, JD.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, JD.jsx)(xD.e, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), gD && (0, JD.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, JD.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, JD.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, Kz.d)("glint"),
                    alt: ""
                  }), (0, JD.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, JD.jsx)("div", {
                  className: "AuraBar",
                  children: (0, JD.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, JD.jsx)("div", {
                className: "HotBarRow",
                children: (0, JD.jsx)("div", {
                  className: cD()("HotBarContainer Touch", {
                    KeysAbove: LD
                  }),
                  children: (0, JD.jsxs)("div", {
                    className: "HotBar",
                    ...gz("hotbar"),
                    children: [(0, JD.jsxs)("div", {
                      className: cD()("TouchInventoryKeys", {
                        NoAuraBar: !gD
                      }),
                      children: [(0, JD.jsx)("div", {
                        className: cD()("TouchInventoryKey ShopKey", GD("inventory"), {
                          Hidden: !zD.shop
                        }),
                        ...gz("inventory"),
                        children: (0, JD.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, JD.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, JD.jsx)(xD.e, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, JD.jsx)("div", {
                        className: cD()("TouchInventoryKey BagKey", GD("inventory"), {
                          Hidden: !zD.bag
                        }),
                        ...gz("inventory"),
                        children: (0, JD.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, JD.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, JD.jsx)(xD.e, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, JD.jsx)(Gz, {
                      next: !1,
                      hidden: sD.has("arrows")
                    }), (0, JD.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== BD && BD.map(((DD, zD) => (0, JD.jsx)(Az, {
                        item: DD,
                        selected: DD.classList.contains("Selected")
                      }, zD))), null === BD && Oz.map((DD => {
                        const zD = Jz[DD];
                        return (0, JD.jsx)("div", {
                          className: cD()("InvenItem", {
                            Selected: 0 === DD
                          }),
                          children: zD && (0, JD.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, JD.jsx)(xD.e, {
                              name: zD
                            })
                          })
                        }, DD)
                      }))]
                    }), (0, JD.jsx)(Gz, {
                      next: !0,
                      hidden: sD.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, JD.jsx)("div", {
              className: "BottomRightElements",
              children: (0, JD.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== ID && rz.map((DD => {
                  const zD = ID[DD];
                  return zD && (0, JD.jsx)(Rz, {
                    id: nz[DD],
                    slot: DD,
                    face: zD,
                    className: Mz[DD],
                    hidden: sD
                  }, DD)
                })), null === ID && (0, JD.jsxs)(JD.Fragment, {
                  children: [(0, JD.jsx)(Rz, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: sD
                  }), (0, JD.jsx)(Rz, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: sD
                  }), KD && (0, JD.jsxs)(JD.Fragment, {
                    children: [(0, JD.jsx)(Rz, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: sD
                    }), (0, JD.jsx)(Rz, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: sD
                    })]
                  }), !KD && (0, JD.jsx)(Rz, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: fD("touchKeys:scope"),
                    hidden: sD
                  }), (0, JD.jsx)(Rz, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: fD("touchKeys:fly"),
                    hidden: sD
                  }), (0, JD.jsx)(Rz, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: sD
                  })]
                })]
              })
            })]
          })
        }), (0, JD.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, JD.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, JD.jsxs)("div", {
              className: cD()("Joystick Resting HudPreviewJoystick", {
                Floating: !rD
              }),
              ...gz("joystick"),
              children: [(0, JD.jsx)("div", {
                className: "JoystickBase"
              }), (0, JD.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function Qz() {
      const [DD, zD] = (0, sD.useState)({}), wD = (0, sD.useCallback)((DD => {
        zD((zD => [...new Set([...Object.keys(zD), ...Object.keys(DD)])].every((wD => zD[wD] === DD[wD])) ? zD : DD))
      }), []);
      return [DD, wD]
    }
    const Xz = .05;

    function Vz(DD) {
      var zD;
      let {
        selected: wD,
        layout: sD,
        actionButtons: KD,
        keyNames: rD,
        overlaps: LD,
        scaleCaps: RD,
        joystickFixed: AD,
        onScale: UD,
        onHidden: fD,
        onReset: ID,
        locked: BD,
        lockable: GD,
        onLocked: hD,
        extra: nD
      } = DD;
      const {
        t: MD
      } = (0, pD.E)(), OD = wD ? WD[wD] : null, ED = null !== wD && BD.has(wD), QD = (wD && sD.hudElements[wD] || TD.k)[2], XD = null !== (zD = wD && RD[wD]) && void 0 !== zD ? zD : TD.h, VD = DD => {
        wD && UD(wD, Math.min(XD, Math.round(100 * (QD + .1 * DD)) / 100))
      };
      return (0, JD.jsxs)(JD.Fragment, {
        children: [(0, JD.jsxs)("div", {
          className: cD()("HudQuickName SmallTextBold", {
            Overlap: LD.length > 0
          }),
          children: [LD.length > 0 && (0, JD.jsx)(xD.e, {
            name: "triangle-exclamation"
          }), OD ? ZD(OD.id, KD, MD, rD) : MD("hudLayout:fullScreenHint"), LD.length > 0 && (0, JD.jsx)("span", {
            className: "HudQuickOverlap",
            children: MD("hudLayout:overlapsShort", {
              names: yD(LD, KD, MD, rD)
            })
          })]
        }), (null === OD || void 0 === OD ? void 0 : OD.scale) && (0, JD.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, JD.jsx)(gD.Y, {
            disabled: ED || QD <= TD.j,
            ariaLabel: MD("hudLayout:smaller"),
            onClick: () => {
              VD(-1)
            },
            children: (0, JD.jsx)(xD.e, {
              name: "minus"
            })
          }), (0, JD.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*QD)}%`
          }), (0, JD.jsx)(gD.Y, {
            disabled: ED || QD >= XD,
            ariaLabel: MD("hudLayout:larger"),
            onClick: () => {
              VD(1)
            },
            children: (0, JD.jsx)(xD.e, {
              name: "plus"
            })
          })]
        }), (OD || nD) && (0, JD.jsxs)("div", {
          className: "HudQuickActions",
          children: [OD && (0, JD.jsxs)(JD.Fragment, {
            children: [(0, JD.jsx)(oD, {
              id: OD.id,
              actionButtons: KD,
              keyNames: rD,
              locked: ED,
              lockable: GD(OD.id),
              onLocked: hD
            }), (0, JD.jsx)(mD, {
              id: OD.id,
              elements: sD.hudElements,
              actionButtons: KD,
              keyNames: rD,
              onHidden: fD
            }), (0, JD.jsx)(eD, {
              id: OD.id,
              elements: sD.hudElements,
              actionButtons: KD,
              keyNames: rD,
              locked: ED,
              onReset: ID
            }), FD(OD.id, AD) && (0, JD.jsx)(YD, {})]
          }), nD]
        })]
      })
    }
    var Pz = wD(1116),
      Cz = wD(4440);
    const xz = "HudPreviewDoc",
      Tz = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      bz = new Set([xz, ...Object.values(Tz)]),
      jz = new Set(TD.t.map(sz.w)),
      dz = new Set(sz.h),
      Sz = 'style, link[rel="stylesheet"]';

    function iz(DD, zD, wD, pD) {
      const sD = new Map,
        KD = new Set,
        rD = new URL(DD.baseURI).origin,
        LD = zD => {
          var wD;
          if ("LINK" !== zD.nodeName) return !0;
          const pD = null === (wD = zD.getAttribute("href")) || void 0 === wD ? void 0 : wD.trim();
          if (!pD) return !1;
          try {
            return new URL(pD, DD.baseURI).origin === rD
          } catch {
            return !1
          }
        };
      let cD = null;
      const gD = () => {
          cD !== (0 === KD.size) && (cD = 0 === KD.size, null === pD || void 0 === pD || pD(cD))
        },
        RD = DD => {
          const zD = DD.cloneNode(!0);
          if ("LINK" === zD.tagName) {
            KD.add(zD);
            const DD = () => {
              KD.delete(zD), gD()
            };
            zD.addEventListener("load", DD), zD.addEventListener("error", DD), wD && zD.addEventListener("load", wD)
          }
          return zD
        },
        AD = () => {
          const pD = function(DD) {
              const zD = [...DD.body.children].filter((DD => DD.matches(Sz)));
              return [...DD.head.querySelectorAll(Sz), ...zD]
            }(DD).filter(LD),
            rD = new Set(pD);
          for (const [DD, zD] of sD) rD.has(DD) || (zD.remove(), sD.delete(DD), KD.delete(zD));
          let cD = null;
          for (let DD = pD.length - 1; DD >= 0; DD--) {
            const KD = pD[DD];
            let rD = sD.get(KD);
            rD ? "STYLE" === KD.tagName && rD.textContent !== KD.textContent && (rD.textContent = KD.textContent, null === wD || void 0 === wD || wD()) : (rD = RD(KD), sD.set(KD, rD), zD.head.insertBefore(rD, cD)), cD = rD
          }
          gD()
        };
      AD();
      const UD = new MutationObserver(AD);
      return UD.observe(DD.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), UD.observe(DD.body, {
        childList: !0
      }), () => {
        UD.disconnect()
      }
    }

    function lz(DD, zD, wD) {
      let {
        keysAbove: pD
      } = wD;
      const sD = [...DD.documentElement.classList].filter((DD => !bz.has(DD) && !dz.has(DD))),
        KD = [...zD.documentElement.classList].filter((DD => dz.has(DD))),
        rD = [xz, Tz.hotbar, Tz.hasShop, Tz.hasBag];
      pD && rD.push(Tz.keysAbove), zD.documentElement.className = [...sD, ...rD, ...KD].join(" ")
    }
    const Wz = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Nz(DD, zD, wD, pD, sD) {
      const KD = (0, TD.w)(wD, pD, "joystick"),
        rD = (0, sz.y)((0, sz.M)(wD, pD, sD), pD),
        LD = rD.classes.filter((DD => !jz.has(DD))),
        cD = zD.documentElement;
      (0, sz.S)({
        ...rD,
        classes: LD
      }, {
        vars: cD,
        safe: cD,
        classes: cD
      });
      const gD = (0, sz.D)(wD.hudLayouts[pD].hudSafe, window.innerWidth, window.innerHeight, Zz(), (0, sz.O)(zD));
      cD.style.setProperty("--preview-joystick-shift-left", `${gD[3]}px`), cD.style.setProperty("--preview-joystick-shift-bottom", `${gD[2]}px`), cD.style.setProperty("--preview-joystick-scale", String(KD[2])), (0, Cz.f)(cD, zD, wD, pD);
      for (const RD of Wz) cD.style.setProperty(RD, DD.documentElement.style.getPropertyValue(RD) || "0px")
    }

    function Zz() {
      return (0, sz.J)(RD.e.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function yz(DD) {
      return (0, sz.t)(Zz(), (0, sz.O)(DD))
    }

    function kz(DD, zD, wD) {
      const pD = DD.documentElement.style,
        sD = (0, sz.G)(zD),
        KD = pD.getPropertyValue(sD);
      try {
        return wD((DD => {
          pD.setProperty(sD, String(DD))
        }))
      } finally {
        "" === KD ? pD.removeProperty(sD) : pD.setProperty(sD, KD)
      }
    }

    function mz(DD, zD) {
      const [wD, pD] = kz(DD, "hotbar", (zD => {
        const wD = wD => {
          var pD, sD;
          return zD(wD), null !== (pD = null === (sD = DD.querySelector(".HotBarGameItemsContainer")) || void 0 === sD ? void 0 : sD.getBoundingClientRect().width) && void 0 !== pD ? pD : 0
        };
        return [wD(1), wD(TD.h)]
      }));
      return wD <= 0 ? TD.h : Math.min(TD.h, Math.max(1, Math.floor(pD / wD / zD + 1e-6) * zD))
    }
    const ez = 3,
      oz = .5,
      az = DD => DD.right - DD.left;
    const uz = (DD, zD) => Math.abs((0, wz.e)(DD).x - (0, wz.e)(zD).x) + Math.abs((0, wz.e)(DD).y - (0, wz.e)(zD).y) + Math.abs(az(DD) - az(zD));

    function vz(DD, zD, wD, pD, sD) {
      let {
        canKeep: KD = () => !0,
        passes: rD = ez,
        before: LD,
        keysAboveOf: cD
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const gD = void 0 !== cD && cD(DD) !== cD(zD),
        RD = zD.hudLayouts[wD].hudLocked.filter((DD => KD(DD) && !(gD && "inventory" === DD))),
        AD = new Set(RD);
      if (0 === AD.size) return zD;
      const UD = [...dD].filter((pD => !RD.includes(pD) && (0, TD.w)(DD, wD, pD).join() === (0, TD.w)(zD, wD, pD).join())),
        fD = DD => {
          const zD = (0, wz.G)(UD.flatMap((zD => DD[zD] ? [DD[zD]] : [])));
          return {
            ...DD,
            cluster: null !== zD && void 0 !== zD ? zD : void 0
          }
        },
        ID = DD => {
          const zD = sD(DD);
          return zD && fD(zD)
        },
        BD = LD ? fD(LD) : ID(DD);
      let GD = BD && ID(zD);
      if (!BD || !GD) return zD;
      let hD = zD;
      for (let nD = 0; nD < rD && AD.size > 0; nD++) {
        const DD = new Map;
        for (const zD of AD) {
          const sD = BD[zD],
            KD = GD[zD],
            rD = sD && KD ? tz(zD, (0, TD.w)(hD, wD, zD), sD, KD, pD) : null;
          rD ? DD.set(zD, rD) : AD.delete(zD)
        }
        if (0 === DD.size) break;
        let sD = hD;
        for (const [zD, pD] of DD) sD = (0, TD.Z)(sD, wD, zD, pD);
        const KD = ID(sD);
        if (!KD) return zD;
        let rD = hD;
        for (const [zD, pD] of DD) {
          const DD = KD[zD];
          DD && uz(BD[zD], DD) < uz(BD[zD], GD[zD]) - oz ? rD = (0, TD.Z)(rD, wD, zD, pD) : AD.delete(zD)
        }
        if (rD === hD) break;
        const LD = [...DD.keys()].every((DD => AD.has(DD)));
        if (hD = rD, GD = LD ? KD : ID(hD), !GD) return zD
      }
      return sD(hD), hD
    }

    function tz(DD, zD, wD, pD, sD) {
      let [KD, rD, LD] = zD;
      const cD = TD.q[DD],
        gD = {};
      cD.scale && az(pD) > 0 && Math.abs(az(wD) - az(pD)) > oz && (gD.scale = Math.max(TD.j, Math.min(TD.h, LD * az(wD) / az(pD))));
      const RD = (0, wz.e)(wD).x - (0, wz.e)(pD).x,
        AD = (0, wz.e)(wD).y - (0, wz.e)(pD).y;
      return cD.move && (Math.abs(RD) > oz || Math.abs(AD) > oz) && (gD.dx = KD + RD / sD.width, gD.dy = rD + AD / sD.height), void 0 === gD.scale && void 0 === gD.dx ? null : gD
    }
    let Fz = 0;

    function Yz() {
      return Fz > 0
    }
    const Hz = DD => 0 === DD.dx && 0 === DD.dy,
      qz = .001,
      Dw = DD => Math.abs(DD.dx) >= 5e-4 || Math.abs(DD.dy) >= 5e-4 ? DD : {
        dx: DD.dx,
        dy: DD.dy < 0 ? -.001 : qz
      };

    function zw(DD) {
      let {
        preview: zD,
        stageRef: wD,
        ringRef: pD,
        centreLineRef: KD,
        snapCentre: rD,
        ready: LD,
        measure: cD,
        k: gD,
        viewport: RD,
        boxes: AD,
        pieces: UD,
        selected: fD,
        insets: ID,
        layout: BD,
        canMove: GD,
        onSelect: hD,
        onMove: nD
      } = DD;
      const MD = (0, sD.useRef)(null),
        OD = (0, sD.useCallback)((() => null !== MD.current), []),
        JD = (DD, zD) => {
          if (!zD) return null;
          const wD = (0, wz.e)(DD.origin),
            pD = (0, wz.e)(zD),
            sD = (DD.to.dx - DD.from.dx) * RD.width,
            KD = (DD.to.dy - DD.from.dy) * RD.height,
            rD = zD.right - zD.left,
            LD = zD.bottom - zD.top;
          return {
            skew: {
              x: pD.x - wD.x - sD,
              y: pD.y - wD.y - KD
            },
            box: {
              left: wD.x - rD / 2,
              top: wD.y - LD / 2,
              right: wD.x + rD / 2,
              bottom: wD.y + LD / 2
            }
          }
        },
        ED = (DD, wD) => {
          var sD;
          const rD = MD.current;
          if (!rD || rD.pointerId !== DD.pointerId) return;
          MD.current = null, null === (sD = KD.current) || void 0 === sD || sD.classList.remove("Shown", "Snapped");
          const LD = pD.current;
          if (LD && null !== rD.ringStyle && LD.setAttribute("style", rD.ringStyle), wD && rD.moved) {
            const DD = Hz(rD.to) ? null : cD(rD.id),
              zD = DD ? (0, wz.C)(DD, (0, wz.B)(RD.width, RD.height, ID)) : {
                x: 0,
                y: 0
              },
              wD = {
                dx: rD.to.dx + zD.x / RD.width,
                dy: rD.to.dy + zD.y / RD.height
              },
              pD = Hz(rD.to) ? wD : Dw(wD);
            nD(rD.id, pD.dx, pD.dy)
          } else zD(rD.id, null), wD && rD.tapPick && hD(rD.tapPick)
        };
      return {
        busy: OD,
        handlers: {
          onPointerDown: DD => {
            var zD;
            if (!LD || MD.current || !DD.target.closest(".HudPreviewHandle")) return;
            const pD = wD.current.getBoundingClientRect(),
              sD = {
                x: (DD.clientX - pD.left) / gD,
                y: (DD.clientY - pD.top) / gD
              },
              KD = (0, wz.x)(sD, UD, 40 / gD),
              rD = "cluster" === fD && void 0 !== AD.cluster && null !== (0, wz.x)(sD, [{
                id: "cluster",
                box: AD.cluster
              }], 40 / gD),
              cD = "menu" === fD && void 0 !== AD.menu && (0, wz.h)(AD.menu, sD) && ("menu" === KD || null !== KD && (0, pz.w)(KD, BD.hudElements[KD])),
              RD = rD ? "cluster" : cD ? "menu" : null,
              ID = null !== RD,
              nD = null !== RD && void 0 !== RD ? RD : KD;
            if (!nD) return;
            if (function(DD) {
                Fz++;
                const zD = wD => {
                  wD.pointerId === DD && (Fz = Math.max(0, Fz - 1), window.removeEventListener("pointerup", zD, !0), window.removeEventListener("pointercancel", zD, !0))
                };
                window.addEventListener("pointerup", zD, !0), window.addEventListener("pointercancel", zD, !0)
              }(DD.pointerId), !GD(nD)) return void hD(ID && KD ? KD : nD);
            hD(nD);
            const [OD, JD] = null !== (zD = BD.hudElements[nD]) && void 0 !== zD ? zD : [0, 0], ED = {
              dx: OD,
              dy: JD
            }, QD = {
              skew: {
                x: 0,
                y: 0
              },
              box: AD[nD]
            };
            MD.current = {
              id: nD,
              pointerId: DD.pointerId,
              startX: DD.clientX,
              startY: DD.clientY,
              origin: AD[nD],
              from: ED,
              to: ED,
              moved: !1,
              home: Hz(ED) ? {
                centre: (0, wz.e)(AD[nD]),
                anchor: QD
              } : null,
              away: Hz(ED) ? null : QD,
              anchor: QD,
              ringStyle: null,
              tapPick: ID ? KD : null
            }, DD.currentTarget.setPointerCapture(DD.pointerId)
          },
          onPointerMove: DD => {
            const wD = MD.current;
            if (!wD || wD.pointerId !== DD.pointerId) return;
            const sD = DD.clientX - wD.startX,
              LD = DD.clientY - wD.startY;
            if (!wD.moved && Math.hypot(sD, LD) < 5) return;
            const AD = !wD.moved;
            var UD, fD;
            (wD.moved = !0, AD) && (wD.ringStyle = null !== (UD = null === (fD = pD.current) || void 0 === fD ? void 0 : fD.getAttribute("style")) && void 0 !== UD ? UD : null);
            const BD = (0, wz.B)(RD.width, RD.height, ID);
            if (!wD.home) {
              var GD;
              wD.to = {
                dx: 0,
                dy: 0
              }, zD(wD.id, wD.to);
              const DD = cD(wD.id),
                pD = null !== (GD = JD(wD, DD)) && void 0 !== GD ? GD : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: wD.origin
                },
                sD = (0, wz.e)(wD.origin);
              wD.home = {
                centre: DD ? (0, wz.e)(DD) : {
                  x: sD.x - wD.from.dx * RD.width,
                  y: sD.y - wD.from.dy * RD.height
                },
                anchor: pD
              }
            }
            const hD = wD.home;
            let nD = !1;
            const OD = DD => {
                nD = !1;
                let pD = (0, wz.m)(DD.box, sD / gD, LD / gD, BD);
                const KD = RD.width / 2;
                if (rD && Math.abs((0, wz.e)(wD.origin).x + pD.x - KD) <= 8 / gD) {
                  const zD = KD - (0, wz.e)(wD.origin).x,
                    sD = (0, wz.m)(DD.box, zD, pD.y, BD);
                  nD = Math.abs(sD.x - zD) < .01, nD && (pD = sD)
                }
                const cD = (0, wz.u)(wD.from, pD.x - DD.skew.x, pD.y - DD.skew.y, RD.width, RD.height);
                wD.to = Dw(cD), wD.anchor = DD, zD(wD.id, wD.to)
              },
              ED = (0, wz.m)(hD.anchor.box, sD / gD, LD / gD, BD),
              QD = KD.current,
              XD = (0, wz.e)(wD.origin),
              VD = ((0, TD.M)(wD.id) ? 20 : 6) / gD;
            if (Math.abs(XD.x + ED.x - hD.centre.x) <= VD && Math.abs(XD.y + ED.y - hD.centre.y) <= VD) wD.to = {
              dx: 0,
              dy: 0
            }, wD.anchor = hD.anchor, nD = rD && Math.abs(hD.centre.x - RD.width / 2) < 1, zD(wD.id, wD.to);
            else if (wD.away) OD(wD.away);
            else {
              var PD;
              OD(hD.anchor), wD.away = null !== (PD = JD(wD, cD(wD.id))) && void 0 !== PD ? PD : hD.anchor, OD(wD.away)
            }
            null === QD || void 0 === QD || QD.classList.add("Shown"), null === QD || void 0 === QD || QD.classList.toggle("Snapped", nD), (DD => {
              const zD = pD.current;
              if (zD) {
                const {
                  skew: wD,
                  box: pD
                } = DD.anchor;
                zD.style.left = pD.left * gD + "px", zD.style.top = pD.top * gD + "px", zD.style.width = (pD.right - pD.left) * gD + "px", zD.style.height = (pD.bottom - pD.top) * gD + "px", zD.style.translate = `${((DD.to.dx-DD.from.dx)*RD.width+wD.x)*gD}px ${((DD.to.dy-DD.from.dy)*RD.height+wD.y)*gD}px`
              }
            })(wD)
          },
          onPointerUp: DD => {
            ED(DD, !0)
          },
          onPointerCancel: DD => {
            ED(DD, !1)
          }
        }
      }
    }

    function ww(DD, zD) {
      return Object.keys(DD).filter((DD => DD !== zD)).map((zD => DD[zD]))
    }

    function pw(DD) {
      const zD = [],
        wD = zD => (0, TD.M)(zD) && !DD.documentElement.classList.contains((0, sz.C)(zD));
      for (const rD of DD.querySelectorAll(`[${ND}]`)) {
        const DD = wD(rD.getAttribute(ND)) ? rD.querySelector(".ScaleOnHover") : null,
          pD = (null !== DD && void 0 !== DD ? DD : rD).getBoundingClientRect();
        (pD.width > 0 || pD.height > 0) && zD.push({
          id: rD.getAttribute(ND),
          box: {
            left: pD.left,
            top: pD.top,
            right: pD.right,
            bottom: pD.bottom
          }
        })
      }
      const pD = DD => (0, wz.G)(zD.filter((zD => {
          let {
            id: wD
          } = zD;
          return DD(wD)
        })).map((DD => {
          let {
            box: zD
          } = DD;
          return zD
        }))),
        sD = {};
      for (const rD of new Set(zD.map((DD => DD.id)))) sD[rD] = pD((DD => DD === rD));
      const KD = pD((DD => dD.has(DD)));
      return KD && (sD.cluster = KD), {
        boxes: sD,
        pieces: zD
      }
    }

    function sw(DD, zD, wD) {
      const pD = zD.right - zD.left,
        sD = zD.bottom - zD.top;
      return kz(DD, "cluster", (zD => {
        const KD = wD => {
            zD(wD);
            const pD = [...DD.querySelectorAll(`[${ND}]:not(.HudPreviewGhost)`)].filter((DD => dD.has(DD.getAttribute(ND)))).map((DD => {
                const zD = DD.getBoundingClientRect();
                return {
                  left: zD.left,
                  top: zD.top,
                  right: zD.right,
                  bottom: zD.bottom
                }
              })),
              sD = (0, wz.G)(pD);
            return sD ? {
              w: sD.right - sD.left,
              h: sD.bottom - sD.top
            } : null
          },
          rD = DD => !DD || DD.w <= pD && DD.h <= sD,
          LD = KD(1),
          cD = KD(TD.h);
        if (!LD || rD(cD)) return TD.h;
        const gD = (DD, zD, wD) => zD > DD ? 1 + (wD - DD) * (TD.h - 1) / (zD - DD) : TD.h;
        let RD = Math.floor(Math.min(TD.h, gD(LD.w, cD.w, pD), gD(LD.h, cD.h, sD)) / wD + 1e-6) * wD;
        for (; RD > 1 && !rD(KD(RD));) RD = Math.round(100 * (RD - wD)) / 100;
        return Math.max(1, RD)
      }))
    }

    function Kw(DD) {
      lz(document, DD, {
        keysAbove: !1
      });
      const zD = parseFloat(getComputedStyle(DD.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        wD = Number.isFinite(zD) && zD < 0;
      return lz(document, DD, {
        keysAbove: wD
      }), wD
    }

    function rw(DD, zD) {
      let {
        layout: wD,
        orientation: pD,
        viewport: KD,
        replicaKey: rD,
        joystickFixed: LD,
        busy: cD
      } = zD;
      const [gD, RD] = (0, sD.useState)(null), [AD, UD] = (0, sD.useState)({
        boxes: {},
        pieces: []
      }), [fD, ID] = (0, sD.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [BD, GD] = (0, sD.useState)(!1), [hD, nD] = (0, sD.useState)(!1), [MD, OD] = (0, sD.useState)(!1), JD = (0, sD.useCallback)((DD => {
        nD(DD), DD && OD(!0)
      }), []), ED = wD.hudLayouts[pD].hudSafe;
      (0, sD.useLayoutEffect)((() => {
        const zD = DD.current.contentDocument;
        zD.open(), zD.write("<!DOCTYPE html><html><head></head><body></body></html>"), zD.close(), RD(zD)
      }), [DD]);
      const QD = (0, sD.useCallback)((() => {
          gD && ((0, pz.x)(gD), UD(pw(gD)), ID(function(DD, zD) {
            const wD = yz(DD),
              [pD, sD, KD, rD] = zD ? (0, sz.v)(zD, window.innerWidth, window.innerHeight, wD) : wD;
            return {
              top: pD,
              right: sD,
              bottom: KD,
              left: rD
            }
          }(gD, ED)))
        }), [gD, ED]),
        XD = (0, sD.useCallback)((() => {
          gD && GD(Kw(gD))
        }), [gD]),
        VD = (0, sD.useRef)((() => {}));
      return VD.current = () => {
        XD(), cD() || QD()
      }, (0, sD.useLayoutEffect)((() => {
        if (gD) return iz(document, gD, (() => {
          VD.current()
        }), JD)
      }), [gD, JD]), (0, sD.useLayoutEffect)(XD, [XD, KD]), (0, sD.useLayoutEffect)((() => {
        gD && (lz(document, gD, {
          keysAbove: BD
        }), Nz(document, gD, wD, pD, LD), XD(), QD())
      }), [gD, wD, pD, BD, rD, LD, KD, QD, XD]), (0, sD.useEffect)((() => {
        var DD;
        if (!gD) return;
        const zD = new ResizeObserver((() => {
          cD() || QD()
        }));
        for (const wD of gD.querySelectorAll(`[${ND}]`)) zD.observe(wD);
        return null === (DD = gD.fonts) || void 0 === DD || DD.ready.then(QD), () => {
          zD.disconnect()
        }
      }), [gD, QD, cD, rD]), {
        doc: gD,
        boxes: AD.boxes,
        pieces: AD.pieces,
        insets: fD,
        keysAbove: BD,
        ready: hD,
        settled: MD
      }
    }
    const Lw = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      gw = (DD, zD, wD) => {
        const pD = DD => (0, pz.w)(DD, wD.hudElements[DD]);
        return "cluster" === DD && dD.has(zD) || "cluster" === zD && dD.has(DD) || "menu" === DD && pD(zD) || "menu" === zD && pD(DD) || Lw.some((pD => {
          let [sD, KD] = pD;
          const rD = wD.hudElements.hotbar,
            LD = "inventory" === KD && wD.hudLocked.includes(KD) && void 0 !== rD && !(0, TD.I)(rD);
          return (DD === sD && zD === KD || DD === KD && zD === sD) && !LD
        }))
      };
    const Rw = ["Above", "Below", "Left", "Right"];

    function Aw(DD, zD, wD, pD, sD) {
      const KD = wD[DD],
        rD = (KD.left + KD.right) / 2,
        LD = (KD.top + KD.bottom) / 2,
        cD = (7.5 * zD.length + 14) / pD,
        gD = 18 / pD,
        RD = {
          Above: {
            left: rD - cD / 2,
            top: KD.top - gD,
            right: rD + cD / 2,
            bottom: KD.top
          },
          Below: {
            left: rD - cD / 2,
            top: KD.bottom,
            right: rD + cD / 2,
            bottom: KD.bottom + gD
          },
          Left: {
            left: KD.left - cD,
            top: LD - gD / 2,
            right: KD.left,
            bottom: LD + gD / 2
          },
          Right: {
            left: KD.right,
            top: LD - gD / 2,
            right: KD.right + cD,
            bottom: LD + gD / 2
          }
        },
        AD = ww(wD, DD),
        UD = {
          left: 0,
          top: 0,
          right: sD.width,
          bottom: sD.height
        };
      return Rw[(0, wz.t)(Rw.map((DD => RD[DD])), AD, {
        bounds: UD
      })]
    }

    function Uw() {
      const [DD, zD] = (0, Dz.d)();
      return (0, sD.useMemo)((() => ({
        width: DD,
        height: zD
      })), [DD, zD])
    }

    function fw(DD) {
      var zD;
      const {
        layout: wD,
        orientation: KD,
        selected: rD,
        onSelect: LD,
        onMove: gD,
        canMove: RD,
        actionButtons: AD,
        joystickFixed: UD,
        presence: fD,
        keyNames: BD,
        maxHeight: GD,
        fill: hD = !1,
        apiRef: nD
      } = DD, {
        t: MD
      } = (0, pD.E)(), OD = Uw(), ED = (null !== (zD = (0, ID.h)("maxAuraLevel")) && void 0 !== zD ? zD : 0) > 0, QD = wD.hudLayouts[KD], XD = (0, sD.useRef)(null), VD = (0, sD.useRef)(null), PD = (0, sD.useRef)(null), CD = (0, sD.useRef)(null), bD = (0, sD.useRef)(null), jD = (0, sD.useRef)(null), SD = (0, zz.d)(XD).width, iD = hD ? 1 : SD > 0 ? (0, wz.z)(SD, OD.width, OD.height, GD) : 0, lD = (0, sD.useRef)((() => !1)), WD = (0, sD.useCallback)((() => lD.current()), []), {
        doc: ND,
        boxes: yD,
        pieces: kD,
        insets: mD,
        keysAbove: eD,
        ready: oD,
        settled: aD
      } = rw(PD, {
        layout: wD,
        orientation: KD,
        viewport: OD,
        replicaKey: `${AD}:${UD}:${ED}`,
        joystickFixed: UD,
        busy: WD
      }), uD = (0, sD.useCallback)((DD => {
        ND && Nz(document, ND, DD, KD, UD)
      }), [ND, KD, UD]), vD = (0, sD.useCallback)((DD => ND && aD ? (uD(DD), Kw(ND), function(DD) {
        let {
          boxes: zD,
          pieces: wD
        } = DD;
        const pD = wD.find((DD => "inventory" === DD.id));
        if (!pD || !zD.inventory) return zD;
        const sD = (0, wz.e)(zD.inventory),
          KD = az(pD.box) / 2,
          rD = (pD.box.bottom - pD.box.top) / 2;
        return {
          ...zD,
          inventory: {
            left: sD.x - KD,
            top: sD.y - rD,
            right: sD.x + KD,
            bottom: sD.y + rD
          }
        }
      }(pw(ND))) : null), [ND, aD, uD]), tD = (0, sD.useCallback)((DD => !!ND && (uD(DD), Kw(ND))), [ND, uD]), FD = (0, sD.useRef)(null), YD = (0, sD.useRef)(null), qD = (0, sD.useRef)(wD);
      qD.current = wD;
      const Dz = (0, sD.useCallback)((() => {
        null !== FD.current && (cancelAnimationFrame(FD.current), FD.current = null)
      }), []);
      (0, sD.useEffect)((() => Dz), [wD, Dz]);
      const {
        lockable: Kz
      } = DD, rz = (0, sD.useCallback)((DD => {
        if (uD(DD), !aD || 0 === wD.hudLayouts[KD].hudLocked.length) return;
        const zD = wD;
        Dz(), FD.current = requestAnimationFrame((() => {
          var wD;
          if (FD.current = null, qD.current !== zD) return;
          const pD = (null === (wD = YD.current) || void 0 === wD ? void 0 : wD.from) === zD ? YD.current.boxes : vD(zD);
          pD && (YD.current = {
            from: zD,
            boxes: pD
          }), uD(pD ? vz(zD, DD, KD, OD, vD, {
            canKeep: Kz,
            passes: 1,
            before: pD,
            keysAboveOf: tD
          }) : DD)
        }))
      }), [uD, aD, wD, KD, OD, vD, tD, Kz, Dz]), Lz = zw({
        preview: (DD, zD) => {
          zD ? rz((0, TD.Z)(wD, KD, DD, zD)) : (Dz(), uD(wD))
        },
        stageRef: VD,
        ringRef: CD,
        centreLineRef: bD,
        snapCentre: wD.hudSnapCentre,
        ready: aD,
        measure: DD => {
          var zD;
          return ND && oD && null !== (zD = pw(ND).boxes[DD]) && void 0 !== zD ? zD : null
        },
        k: iD,
        viewport: OD,
        boxes: yD,
        pieces: kD,
        selected: rD,
        insets: mD,
        layout: QD,
        canMove: RD,
        onSelect: LD,
        onMove: (DD, zD, wD) => {
          Dz(), gD(DD, zD, wD)
        }
      });
      (0, sD.useLayoutEffect)((() => {
        lD.current = Lz.busy
      }), [Lz.busy]);
      const cz = (0, sD.useRef)([]),
        gz = (0, sD.useRef)(QD.hudElements);
      (0, sD.useEffect)((() => {
        for (const sD of Object.keys(QD.hudElements)) {
          var DD, zD, wD, pD;
          (null !== (DD = null === (zD = QD.hudElements[sD]) || void 0 === zD ? void 0 : zD[2]) && void 0 !== DD ? DD : 1) > (null !== (wD = null === (pD = gz.current[sD]) || void 0 === pD ? void 0 : pD[2]) && void 0 !== wD ? wD : 1) && RD(sD) && !(0, pz.w)(sD, QD.hudElements[sD]) && cz.current.push(sD)
        }
        gz.current = QD.hudElements
      }), [QD.hudElements, RD]), (0, sD.useEffect)((() => {
        if (!oD) return;
        const DD = cz.current.shift(),
          zD = DD && yD[DD];
        if (!DD || !zD || Lz.busy()) return;
        const wD = (0, wz.C)(zD, (0, wz.B)(OD.width, OD.height, mD));
        if (0 !== wD.x || 0 !== wD.y) {
          var pD;
          const [zD, sD] = null !== (pD = QD.hudElements[DD]) && void 0 !== pD ? pD : [0, 0];
          gD(DD, zD + wD.x / OD.width, sD + wD.y / OD.height)
        }
      }), [yD, oD]), (0, sD.useImperativeHandle)(nD, (() => ({
        setScale: (DD, zD) => {
          rz((0, TD.Z)(wD, KD, DD, {
            scale: zD
          }))
        },
        setOpacity: DD => {
          uD({
            ...wD,
            hudKeyOpacity: DD
          })
        },
        keepLocks: (DD, zD) => (Dz(), vz(DD, zD, KD, OD, vD, {
          canKeep: Kz,
          keysAboveOf: tD
        })),
        setSafe: DD => {
          rz((0, TD.db)(wD, KD, DD)), jD.current && (jD.current.style.inset = (0, sz.v)(DD, OD.width, OD.height, yz(null !== ND && void 0 !== ND ? ND : document)).map((DD => DD * iD + "px")).join(" "))
        }
      })), [uD, rz, vD, tD, Dz, Kz, ND, wD, KD, OD, iD]);
      const Rz = new Set(Object.keys(QD.hudElements).filter((DD => (0, TD.o)(QD.hudElements, DD)))),
        Az = rD ? yD[rD] : void 0,
        Uz = rD ? ZD(rD, AD, MD, BD) : "",
        fz = (0, Pz.e)(OD.width, OD.height),
        Iz = rD ? function(DD, zD, wD, pD) {
          const sD = DD => (0, TD.o)(wD.hudElements, DD) || (0, pz.u)(DD, wD, pD);
          if (sD(DD)) return [];
          const KD = zD.filter((zD => {
              let {
                id: wD
              } = zD;
              return "cluster" === DD ? dD.has(wD) : wD === DD
            })),
            rD = new Set;
          for (const LD of zD) LD.id === DD || rD.has(LD.id) || gw(DD, LD.id, wD) || sD(LD.id) || void 0 === wD.hudElements[DD] && void 0 === wD.hudElements[LD.id] || KD.some((DD => {
            let {
              id: zD,
              box: wD
            } = DD;
            return zD !== LD.id && (0, wz.j)(wD, LD.box, 2)
          })) && rD.add(LD.id);
          return [...rD]
        }(rD, kD, QD, fz) : [],
        Bz = new Set((0, pz.r)(QD.hudElements)),
        Gz = (0, pz.E)(QD, (0, pz.A)(fD.rowIcons)).state,
        hz = Iz.join(),
        nz = (0, sD.useRef)(DD.onReady);
      nz.current = DD.onReady, (0, sD.useEffect)((() => {
        var DD;
        null === (DD = nz.current) || void 0 === DD || DD.call(nz, aD)
      }), [aD]);
      const Mz = (0, sD.useRef)(DD.onMeasured);
      (0, sD.useLayoutEffect)((() => {
        Mz.current = DD.onMeasured
      })), (0, sD.useEffect)((() => {
        var DD;
        const zD = ND ? {
          hotbar: mz(ND, Xz),
          cluster: sw(ND, (0, wz.B)(OD.width, OD.height, mD), Xz)
        } : {};
        null === (DD = Mz.current) || void 0 === DD || DD.call(Mz, yD, hz ? hz.split(",") : [], zD)
      }), [yD, hz, ND, OD, mD]);
      const Oz = DD => ({
        left: DD.left * iD,
        top: DD.top * iD,
        width: (DD.right - DD.left) * iD,
        height: (DD.bottom - DD.top) * iD
      });
      return (0, JD.jsx)("div", {
        ref: XD,
        className: cD()("HudPreviewBox", {
          Fill: hD
        }),
        style: {
          height: OD.height * iD
        },
        children: (0, JD.jsxs)("div", {
          ref: VD,
          className: "HudPreviewStage",
          style: {
            width: OD.width * iD,
            height: OD.height * iD
          },
          children: [(0, JD.jsx)("iframe", {
            ref: PD,
            className: "HudPreviewFrame",
            title: MD("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: OD.width,
              height: OD.height,
              transform: `scale(${iD})`
            }
          }), ND && (0, HD.createPortal)((0, JD.jsx)(Ez, {
            presence: fD,
            portraitPhone: fz,
            hidden: Rz,
            actionButtons: AD,
            joystickFixed: UD,
            keysAbove: eD,
            auraBar: ED,
            trayState: Gz,
            moved: Bz
          }), ND.body), (0, JD.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...Lz.handlers,
            children: [(0, JD.jsx)("div", {
              ref: jD,
              className: "HudPreviewSafeZone",
              style: {
                top: mD.top * iD,
                right: mD.right * iD,
                bottom: mD.bottom * iD,
                left: mD.left * iD
              }
            }), kD.map(((DD, zD) => {
              let {
                id: wD,
                box: pD
              } = DD;
              return (0, JD.jsx)("div", {
                className: "HudPreviewHandle",
                style: Oz((0, wz.q)(pD, 40 / iD))
              }, `${wD}:${zD}`)
            })), QD.hudLocked.map((DD => {
              const zD = yD[DD];
              return zD && (0, JD.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: zD.right * iD,
                  top: zD.top * iD
                },
                children: (0, JD.jsx)(xD.e, {
                  name: "lock"
                })
              }, DD)
            })), (0, JD.jsx)("div", {
              ref: bD,
              className: "HudPreviewCentreLine",
              style: {
                left: OD.width / 2 * iD
              }
            }), rD && Az && (0, JD.jsx)("div", {
              ref: CD,
              className: cD()("HudPreviewRing", {
                Fixed: !RD(rD),
                Overlap: Iz.length > 0
              }),
              style: Oz(Az),
              children: (0, JD.jsx)("span", {
                className: cD()("HudPreviewRingLabel", Aw(rD, Uz, yD, iD, OD)),
                children: Uz
              })
            })]
          })]
        })
      })
    }

    function Iw(DD, zD) {
      (0, sD.useEffect)((() => {
        var wD;
        null === (wD = DD.current) || void 0 === wD || wD.toggleAttribute("inert", zD)
      }), [DD, zD])
    }
    const Bw = "hudFullScreen";

    function Gw(DD) {
      let {
        onScale: zD,
        onHidden: wD,
        onReset: KD,
        locked: rD,
        lockable: LD,
        onLocked: cD,
        onClose: RD,
        ...AD
      } = DD;
      const {
        t: UD
      } = (0, pD.E)(), fD = (0, sD.useRef)(null);
      (0, qD.u)("popup", fD, RD),
      function(DD) {
        const zD = (0, sD.useRef)(DD);
        zD.current = DD, (0, sD.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Bw]: !0
          }, "");
          let DD = !1;
          const wD = () => {
            DD = !0, zD.current()
          };
          return window.addEventListener("popstate", wD), () => {
            var zD;
            window.removeEventListener("popstate", wD), !DD && null !== (zD = window.history.state) && void 0 !== zD && zD[Bw] && window.history.back()
          }
        }), [])
      }(RD), (0, sD.useEffect)((() => {
        function DD(DD) {
          "Escape" === DD.key && (DD.stopPropagation(), RD())
        }
        return window.addEventListener("keydown", DD, !0), () => {
          window.removeEventListener("keydown", DD, !0)
        }
      }), [RD]);
      const {
        selected: ID
      } = AD, BD = (0, sD.useRef)(null), GD = (0, sD.useRef)(null), [hD, nD] = (0, sD.useState)(!1);
      Iw(GD, !hD);
      const [MD, OD] = (0, sD.useState)(null), [ED, QD] = (0, sD.useState)([]), [XD, VD] = Qz(), PD = (0, sD.useRef)(AD.selected);
      PD.current = AD.selected;
      const CD = (0, sD.useRef)({}),
        xD = (0, sD.useCallback)((() => {
          const DD = BD.current;
          DD && OD(function(DD, zD, wD) {
            var pD;
            const {
              innerWidth: sD,
              innerHeight: KD
            } = window, rD = DD.offsetWidth, LD = DD.offsetHeight, cD = Math.max(Zz()[0], 6), gD = [];
            for (const UD of [cD, .2 * KD, .5 * KD - LD / 2, .33 * KD])
              for (const DD of [.5, .3, .7]) gD.push({
                left: Math.max(0, Math.min(sD - rD - 6, Math.max(6, sD * DD - rD / 2))),
                top: UD
              });
            const RD = gD.map((DD => ({
                left: DD.left - 6,
                top: DD.top - 6,
                right: DD.left + rD + 6,
                bottom: DD.top + LD + 6
              }))),
              AD = ww(zD, wD);
            return gD[(0, wz.t)(RD, AD, {
              avoid: wD && null !== (pD = zD[wD]) && void 0 !== pD ? pD : null
            })]
          }(DD, CD.current, PD.current))
        }), []),
        TD = (0, sD.useCallback)(((DD, zD, wD) => {
          QD(zD), VD(wD), CD.current = DD, xD()
        }), [xD, VD]);
      return (0, sD.useLayoutEffect)(xD, [AD.selected, xD]), (0, HD.createPortal)((0, JD.jsxs)("div", {
        ref: fD,
        className: "HudFullScreenEditor",
        children: [(0, JD.jsx)(fw, {
          ...AD,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: TD,
          onReady: nD,
          lockable: LD
        }), (0, JD.jsxs)("div", {
          ref: BD,
          className: "HudFullScreenToolbar",
          style: null === MD ? void 0 : {
            left: MD.left,
            top: MD.top,
            transform: "none"
          },
          children: [(0, JD.jsx)("div", {
            ref: GD,
            className: "HudFullScreenControls",
            children: (0, JD.jsx)(Vz, {
              selected: ID,
              layout: AD.layout.hudLayouts[AD.orientation],
              actionButtons: AD.actionButtons,
              keyNames: AD.keyNames,
              overlaps: ED,
              scaleCaps: XD,
              onScale: zD,
              onHidden: wD,
              onReset: KD,
              locked: rD,
              lockable: LD,
              onLocked: cD,
              joystickFixed: AD.joystickFixed
            })
          }), (0, JD.jsx)(gD.f, {
            className: "HudFullScreenDone",
            onClick: RD,
            padDefaultFocus: !0,
            children: UD("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const hw = DD => `${Math.round(100*DD)}%`;

    function nw(DD) {
      let {
        info: zD,
        tuple: wD,
        props: sD
      } = DD;
      const {
        t: KD
      } = (0, pD.E)();
      return (0, JD.jsx)(fD.e, {
        name: KD("hudLayout:size"),
        min: TD.j,
        max: TD.h,
        step: Xz,
        initValue: wD[2],
        disabled: sD.locked.has(zD.id),
        selectableMax: sD.scaleCaps[zD.id],
        cappedNote: KD("hudLayout:sizeCapped"),
        format: hw,
        onChange: DD => {
          sD.onScalePreview(zD.id, DD)
        },
        onChangeComplete: DD => {
          sD.onScale(zD.id, DD)
        }
      })
    }

    function Mw(DD) {
      const {
        t: zD
      } = (0, pD.E)(), {
        present: wD,
        elements: KD,
        selected: rD,
        onSelect: LD,
        onHidden: gD,
        onReset: RD,
        note: AD,
        actionButtons: UD,
        keyNames: fD,
        sizeBesidePreview: ID,
        locked: BD,
        lockable: GD,
        onLocked: hD
      } = DD, {
        rowIconsOpen: nD,
        onRowIconsOpen: MD
      } = DD, OD = (0, sD.useRef)(null), ED = null !== rD && (nD || !(0, TD.M)(rD));
      return (0, sD.useEffect)((() => {
        var DD;
        const zD = rD ? null === (DD = OD.current) || void 0 === DD ? void 0 : DD.querySelector(`[data-hud-row="${rD}"]`) : null;
        if (!zD) return;
        const wD = zD.closest(".SettingsMenuRight"),
          pD = performance.now();
        let sD = null;
        const KD = () => {
            clearInterval(cD), null === wD || void 0 === wD || wD.removeEventListener("scroll", LD)
          },
          LD = () => {
            Yz() || KD()
          },
          cD = setInterval((() => {
            const DD = performance.now();
            DD - pD > 1500 ? KD() : Yz() ? sD = null : null === sD ? sD = DD : DD - sD >= 150 && (KD(), function(DD) {
              var zD;
              const wD = DD.closest(".SettingsMenuRight"),
                pD = null === (zD = DD.closest(".HudLayoutSettings")) || void 0 === zD ? void 0 : zD.querySelector(".HudLayoutPreviewBox");
              if (!wD || !pD) return;
              const sD = pD.getBoundingClientRect().bottom + 8,
                KD = wD.getBoundingClientRect().bottom - 8,
                rD = DD.getBoundingClientRect();
              rD.top < sD ? wD.scrollBy({
                top: rD.top - sD,
                behavior: "smooth"
              }) : rD.bottom > KD && wD.scrollBy({
                top: Math.min(rD.bottom - KD, rD.top - sD),
                behavior: "smooth"
              })
            }(zD))
          }), 50);
        return null === wD || void 0 === wD || wD.addEventListener("scroll", LD, {
          passive: !0
        }), KD
      }), [rD, ED]), (0, JD.jsx)("div", {
        ref: OD,
        className: "SettingBoxGroup HudElementList",
        children: lD.filter((DD => wD.has(DD.id) && (nD || !(0, TD.M)(DD.id)))).map((wD => {
          const pD = ((DD, zD) => {
              var wD;
              return null !== (wD = DD[zD]) && void 0 !== wD ? wD : TD.k
            })(KD, wD.id),
            sD = (0, TD.o)(KD, wD.id),
            OD = wD.id === rD,
            ED = wD.scale && !ID,
            QD = AD(wD.id, OD);
          return (0, JD.jsxs)("div", {
            "data-hud-row": wD.id,
            className: cD()("SettingBox HudElementRow", {
              Open: OD,
              Hidden: sD,
              Child: void 0 !== wD.parent
            }),
            children: [(0, JD.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, JD.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": ED ? OD : void 0,
                onClick: () => {
                  LD(wD.id)
                },
                children: [ZD(wD.id, UD, zD, fD), wD.scale && 1 !== pD[2] && !(OD && ED) && (0, JD.jsx)("span", {
                  className: "HudElementRowSize",
                  children: hw(pD[2])
                }), ED && (0, JD.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, JD.jsx)(oD, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: wD.id,
                actionButtons: UD,
                keyNames: fD,
                locked: BD.has(wD.id),
                lockable: GD(wD.id),
                onLocked: hD
              }), "menu" === wD.id && (0, JD.jsx)(aD, {
                className: "HudElementRowIcon",
                open: nD,
                name: ZD(wD.id, UD, zD, fD),
                onToggle: MD
              }), "menu" !== wD.id && (0, JD.jsx)(mD, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: wD.id,
                elements: KD,
                actionButtons: UD,
                keyNames: fD,
                onHidden: gD
              }), (0, JD.jsx)(eD, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: BD.has(wD.id),
                id: wD.id,
                elements: KD,
                actionButtons: UD,
                keyNames: fD,
                onReset: RD
              })]
            }), OD && ED && (0, JD.jsx)(nw, {
              info: wD,
              tuple: pD,
              props: DD
            }), QD && (0, JD.jsx)("div", {
              className: "HudElementNote",
              children: QD
            })]
          }, wD.id)
        }))
      })
    }

    function Ow(DD) {
      let {
        preview: zD,
        quick: wD,
        onFullScreen: KD,
        resting: rD,
        onSidePanel: LD
      } = DD;
      const {
        t: cD
      } = (0, pD.E)(), RD = Uw(), AD = (0, sD.useRef)(null), {
        width: UD
      } = (0, zz.d)(AD), fD = Math.floor(RD.width * Math.min(1, zD.maxHeight / RD.height)), ID = UD - fD - 12, BD = ID >= 130, GD = UD > 0;
      (0, sD.useEffect)((() => {
        GD && LD(BD)
      }), [GD, BD, LD]);
      const hD = (0, wz.z)(BD ? fD : UD, RD.width, RD.height, zD.maxHeight),
        nD = rD ? (0, JD.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: RD.height * hD
          }
        }) : (0, JD.jsx)(fw, {
          ...zD
        }),
        MD = DD => (0, JD.jsxs)(gD.Y, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: cD("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: KD,
          children: [(0, JD.jsx)(xD.e, {
            name: "expand"
          }), DD && (0, JD.jsx)("span", {
            children: cD("hudLayout:fullScreen")
          })]
        });
      return (0, JD.jsxs)("div", {
        ref: AD,
        className: "SettingBox HudLayoutPreviewBox",
        children: [UD > 0 && BD && (0, JD.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, JD.jsx)("div", {
            style: {
              width: fD
            },
            children: nD
          }), (0, JD.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, JD.jsx)(Vz, {
              selected: zD.selected,
              ...wD,
              joystickFixed: zD.joystickFixed,
              extra: MD(!zD.selected || ID >= 278)
            })
          })]
        }), UD > 0 && !BD && (0, JD.jsxs)(JD.Fragment, {
          children: [nD, (0, JD.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: MD(!1)
          })]
        })]
      })
    }
    var Jw = wD(2454),
      Ew = wD(4436),
      Qw = wD(2426),
      Xw = wD(2396);
    const Vw = DD => {
      const zD = sz.o * ("sides" === DD ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(zD / 2))
    };

    function Pw(DD, zD, wD) {
      const [pD, sD, KD, rD] = DD;
      return "sides" === zD ? [pD, wD, KD, wD] : [wD, sD, wD, rD]
    }
    const Cw = [null, null, null, null],
      xw = DD => `${DD}px`;

    function Tw(DD) {
      let {
        safe: zD,
        onPreview: wD,
        onCommit: KD
      } = DD;
      const {
        t: rD
      } = (0, pD.E)(), LD = (0, sz.v)(null !== zD && void 0 !== zD ? zD : Cw, window.innerWidth, window.innerHeight, yz(document).map(Math.round)), cD = (0, sD.useRef)(null !== zD && void 0 !== zD ? zD : Cw);
      cD.current = null !== zD && void 0 !== zD ? zD : Cw;
      const RD = DD => {
        const zD = Math.min(Vw(DD), "sides" === DD ? Math.max(LD[1], LD[3]) : Math.max(LD[0], LD[2]));
        return (0, JD.jsx)(fD.e, {
          name: rD("sides" === DD ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: Vw(DD),
          step: 2,
          initValue: zD,
          format: xw,
          onChange: zD => {
            wD(Pw(cD.current, DD, zD))
          },
          onChangeComplete: pD => {
            if (pD === zD) return void wD(cD.current);
            const sD = Pw(cD.current, DD, pD);
            cD.current = sD, KD(sD), (0, XD.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: DD
            })
          }
        })
      };
      return (0, JD.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, JD.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, JD.jsx)("div", {
            children: rD("hudLayout:safeZone")
          }), (0, JD.jsx)(gD.Y, {
            active: null === zD,
            pressed: null === zD,
            onClick: () => {
              KD(null)
            },
            children: rD("hudLayout:safeZoneAuto")
          })]
        }), RD("sides"), RD("ends")]
      })
    }

    function bw() {
      var DD, zD;
      const {
        t: wD
      } = (0, pD.E)(), KD = (0, TD.Y)(), {
        clientEscMenuOptions: rD
      } = (0, RD.n)(["clientEscMenuOptions"]), LD = (0, Jw.j)(), cD = KD.hudLayouts[LD], [AD, UD] = (0, sD.useState)(null), {
        rowIconsOpen: ID,
        onRowIconsOpen: BD,
        select: GD
      } = function(DD, zD) {
        const [wD, pD] = (0, sD.useState)((() => TD.z.some((zD => void 0 !== DD.hudElements[zD] || DD.hudLocked.includes(zD))))), KD = (0, sD.useCallback)((DD => {
          zD(DD), (0, TD.M)(DD) && pD(!0)
        }), [zD]);
        return {
          rowIconsOpen: wD,
          onRowIconsOpen: pD,
          select: KD
        }
      }(cD, UD), [hD, nD] = (0, sD.useState)([]), [MD, OD] = (0, sD.useState)(null), [ED, QD] = Qz(), PD = (0, sD.useCallback)(((DD, zD, wD) => {
        nD(zD), QD(wD);
        const pD = Object.keys(DD);
        OD((DD => (null === DD || void 0 === DD ? void 0 : DD.size) === pD.length && pD.every((zD => DD.has(zD))) ? DD : new Set(pD)))
      }), [QD]), {
        gameState: CD
      } = (0, RD.n)(["gameState"]), xD = (0, Qw.j)(), bD = null !== (DD = null === (zD = (0, Xw.r)()) || void 0 === zD ? void 0 : zD.icon) && void 0 !== DD ? DD : null, [jD] = (0, sD.useState)((() => "inGame" === CD ? function(DD, zD, wD) {
        const pD = DD.querySelector(".InGameUi .TouchComponentsButtons");
        if (!pD) return Lz;
        const sD = {},
          KD = {};
        for (const RD of rz) {
          const DD = pD.querySelector(`.TouchSlot${RD} > .TouchKey`);
          if (DD) {
            var rD, LD;
            sD[RD] = DD.cloneNode(!0);
            const zD = (null !== (rD = null === (LD = DD.querySelector(".TouchKeyLabel")) || void 0 === LD ? void 0 : LD.textContent) && void 0 !== rD ? rD : "").split(/\s+/).filter((DD => !/[\d\xd7]/.test(DD))).join(" ");
            zD && (KD[RD] = zD)
          }
        }
        const cD = zD => {
            const wD = DD.querySelector(`.InGameUi ${zD}`);
            return null !== wD && !wD.classList.contains("Hidden")
          },
          gD = [...DD.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((DD => DD.cloneNode(!0)));
        return {
          faces: Object.keys(sD).length > 0 ? sD : null,
          names: KD,
          shop: cD(".TouchInventoryKey.ShopKey"),
          bag: cD(".TouchInventoryKey.BagKey"),
          items: gD.length > 0 ? gD : null,
          rowIcons: zD,
          pinnedIcon: wD
        }
      }(document, xD, bD) : Lz)), dD = (0, sD.useRef)(null), SD = (0, sD.useRef)(null), iD = function(DD) {
        const [zD, wD] = (0, sD.useState)((() => .4 * window.innerHeight));
        return (0, sD.useLayoutEffect)((() => {
          var zD;
          const pD = null === (zD = DD.current) || void 0 === zD ? void 0 : zD.closest(".SettingsMenuRight");
          if (!pD) return;
          const sD = () => {
            const DD = pD.clientHeight < jw ? .4 : .5;
            wD(Math.max(80, pD.clientHeight * DD - 24))
          };
          sD();
          const KD = new ResizeObserver(sD);
          return KD.observe(pD), () => {
            KD.disconnect()
          }
        }), [DD]), zD
      }(SD), ND = (0, Ew.o)(rD.joystickMode), ZD = rD.touchActionButtons, kD = (0, sD.useMemo)((() => function(DD, zD) {
        const wD = {},
          pD = [
            ["extra", "X"],
            ["game", "G"]
          ];
        zD || pD.push(["attack", "P"]);
        for (const [sD, KD] of pD) {
          const zD = DD.names[KD];
          zD && (wD[sD] = zD)
        }
        return wD
      }(jD, ZD)), [jD, ZD]);
      (0, sD.useEffect)((() => {
        (0, XD.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [mD, eD] = (0, sD.useState)(!1), [oD, aD] = (0, sD.useState)(!1), uD = (0, sD.useRef)(null);
      Iw(uD, !oD);
      const [vD, tD] = (0, sD.useState)(!1), HD = (0, sD.useCallback)((() => {
        tD(!1)
      }), []), qD = (0, sD.useMemo)((() => new Set(cD.hudLocked)), [cD.hudLocked]), Dz = DD => {
        var zD, wD;
        const pD = (0, TD.n)(),
          sD = DD(pD);
        (0, TD.V)(null !== (zD = null === (wD = dD.current) || void 0 === wD ? void 0 : wD.keepLocks(pD, sD)) && void 0 !== zD ? zD : sD)
      }, zz = (DD, zD) => {
        Dz((wD => (0, TD.Z)(wD, LD, DD, zD)))
      }, wz = (DD, zD, wD) => {
        zz(DD, {
          dx: zD,
          dy: wD
        }), (0, XD.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${DD}`
        })
      }, sz = (DD, zD) => {
        Dz((wD => (0, TD.ab)(wD, LD, DD, zD)))
      }, Kz = DD => {
        const zD = WD[DD];
        return (zD.move || zD.scale) && ("joystick" !== DD || ND) && !(0, pz.w)(DD, cD.hudElements[DD])
      }, cz = DD => WD[DD].move && ("joystick" !== DD || ND) && !qD.has(DD), gz = new Set(lD.map((DD => DD.id)).filter((DD => {
        const zD = (0, TD.M)(DD) && !jD.rowIcons.includes(DD);
        return null === MD || MD.has(DD) || (0, TD.o)(cD.hudElements, DD) && !zD
      }))), Rz = {
        present: gz,
        actionButtons: ZD,
        keyNames: kD,
        scaleCaps: ED,
        sizeBesidePreview: mD,
        elements: cD.hudElements,
        selected: AD,
        onSelect: GD,
        rowIconsOpen: ID,
        onRowIconsOpen: BD,
        onScalePreview: (DD, zD) => {
          var wD;
          null === (wD = dD.current) || void 0 === wD || wD.setScale(DD, zD)
        },
        onScale: (DD, zD) => {
          zz(DD, {
            scale: zD
          }), (0, XD.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${DD}`
          })
        },
        onHidden: (DD, zD) => {
          zz(DD, {
            hidden: zD
          }), (0, XD.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${zD?"hide":"show"}:${DD}`
          })
        },
        onReset: DD => {
          zz(DD, TD.d)
        },
        locked: qD,
        lockable: Kz,
        onLocked: sz,
        note: (DD, zD) => {
          const pD = zD && hD.length > 0 ? wD("hudLayout:overlapsNote", {
            names: yD(hD, ZD, wD, kD)
          }) : null;
          return zD && FD(DD, ND) ? (0, JD.jsxs)(JD.Fragment, {
            children: [pD && (0, JD.jsx)("span", {
              children: pD
            }), (0, JD.jsx)("span", {
              children: wD("hudLayout:floatingJoystickNote")
            }), !mD && (0, JD.jsx)(YD, {})]
          }) : pD || (zD && qD.has(DD) ? wD("hudLayout:lockedNote") : zD && "cluster" === DD ? wD("hudLayout:clusterNote") : zD && "menu" === DD ? wD("hudLayout:menuNote") : zD && (0, pz.w)(DD, cD.hudElements[DD]) && cz(DD) ? wD("hudLayout:rowIconNote") : zD && "arrows" === DD ? wD("hudLayout:arrowsNote") : "inventory" === DD && (0, TD.o)(cD.hudElements, "inventory") ? wD("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, JD.jsxs)("div", {
        ref: SD,
        className: "HudLayoutSettings",
        children: [(0, JD.jsxs)("div", {
          ref: uD,
          className: "HudLayoutBody",
          children: [(0, JD.jsx)("div", {
            className: "HudLayoutOrientation",
            children: wD("landscape" === LD ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, JD.jsx)(Ow, {
            preview: {
              layout: KD,
              orientation: LD,
              selected: AD,
              onSelect: GD,
              onMove: wz,
              canMove: cz,
              actionButtons: ZD,
              joystickFixed: ND,
              presence: jD,
              keyNames: kD,
              maxHeight: iD,
              apiRef: dD,
              onMeasured: PD,
              onReady: aD,
              lockable: Kz
            },
            quick: {
              layout: cD,
              actionButtons: ZD,
              keyNames: kD,
              scaleCaps: ED,
              overlaps: hD,
              onScale: Rz.onScale,
              onHidden: Rz.onHidden,
              onReset: Rz.onReset,
              locked: qD,
              lockable: Kz,
              onLocked: sz
            },
            onFullScreen: () => {
              tD(!0)
            },
            resting: vD,
            onSidePanel: eD
          }), vD && (0, JD.jsx)(Gw, {
            layout: KD,
            orientation: LD,
            selected: AD,
            onSelect: GD,
            onMove: wz,
            canMove: cz,
            actionButtons: ZD,
            joystickFixed: ND,
            presence: jD,
            keyNames: kD,
            onScale: Rz.onScale,
            onHidden: Rz.onHidden,
            onReset: Rz.onReset,
            locked: qD,
            lockable: Kz,
            onLocked: sz,
            apiRef: dD,
            onClose: HD
          }), (0, JD.jsx)(Tw, {
            safe: cD.hudSafe,
            onCommit: DD => {
              Dz((zD => (0, TD.db)(zD, LD, DD)))
            },
            onPreview: DD => {
              var zD;
              null === (zD = dD.current) || void 0 === zD || zD.setSafe(DD)
            }
          }), (0, JD.jsx)(fD.b, {
            label: wD("hudLayout:snapCentre"),
            checked: KD.hudSnapCentre,
            onClick: DD => {
              (0, TD.R)(DD)
            },
            circleInfoText: wD("hudLayout:snapCentreInfo")
          }), (0, JD.jsx)(Mw, {
            ...Rz
          }), (0, JD.jsx)(fD.c, {
            label: wD("hudLayout:shape"),
            options: TD.A.map((DD => ({
              value: DD,
              label: wD(`hudLayout:shape_${DD}`)
            }))),
            value: KD.hudShape,
            onChange: DD => {
              Dz((zD => ({
                ...zD,
                hudShape: DD
              }))), (0, XD.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: DD
              })
            }
          }), (0, JD.jsx)(fD.e, {
            name: wD("hudLayout:opacity"),
            min: TD.e,
            max: 1,
            step: .05,
            initValue: KD.hudKeyOpacity,
            format: DD => `${Math.round(100*DD)}%`,
            circleInfoText: wD("hudLayout:opacityInfo"),
            onChange: DD => {
              var zD;
              null === (zD = dD.current) || void 0 === zD || zD.setOpacity(DD)
            },
            onChangeComplete: DD => {
              (0, TD.P)(DD), (0, XD.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, JD.jsx)(gD.R, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const DD = VD.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await DD.getResult() && (0, TD.N)()
            }()
          },
          children: wD("hudLayout:resetAll")
        })]
      })
    }
    const jw = 350;
    const dw = [function() {
      const {
        t: DD
      } = (0, pD.E)(), [zD, wD] = (0, sD.useState)(!1), KD = (0, sD.useRef)(null);
      return (0, sD.useEffect)((() => {
        var DD;
        zD && (null === (DD = KD.current) || void 0 === DD || DD.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [zD]), (0, JD.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, JD.jsx)(PD.b, {
          ref: KD,
          icon: "arrows-up-down-left-right",
          title: DD("hudLayout:title"),
          sub: DD("hudLayout:entrySub"),
          expanded: zD,
          onClick: () => {
            wD(!zD)
          }
        }), zD && (0, JD.jsx)(bw, {})]
      })
    }, function() {
      const {
        t: DD
      } = (0, pD.E)(), {
        joystickMode: zD,
        touchSpeedCurve: wD,
        autorun: sD,
        jumpLock: KD
      } = (0, RD.n)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, JD.jsxs)(JD.Fragment, {
        children: [(0, JD.jsx)(fD.c, {
          label: DD("settingsMenu:joystick"),
          options: OD.nb.map((zD => ({
            value: zD,
            label: DD(ED[zD])
          }))),
          value: zD,
          onChange: DD => {
            RD.e.setClientEscMenuOptions({
              joystickMode: DD
            })
          },
          circleInfoText: DD("settingsMenu:joystickInfo")
        }), (0, JD.jsx)(fD.b, {
          label: DD("settingsMenu:preciseWalking"),
          checked: wD,
          onClick: DD => {
            RD.e.setClientEscMenuOptions({
              touchSpeedCurve: DD
            })
          },
          circleInfoText: DD("settingsMenu:preciseWalkingInfo")
        }), (0, JD.jsx)(fD.b, {
          label: DD("settingsMenu:autoRun"),
          checked: sD,
          onClick: DD => {
            RD.e.setClientEscMenuOptions({
              autorun: DD
            })
          },
          circleInfoText: DD("settingsMenu:autoRunInfo")
        }), (0, JD.jsx)(fD.b, {
          label: DD("settingsMenu:jumpLock"),
          checked: KD,
          onClick: DD => {
            RD.e.setClientEscMenuOptions({
              jumpLock: DD
            })
          },
          circleInfoText: DD("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, JD.jsx)(MD.e, {})
    }, function() {
      const {
        t: DD
      } = (0, pD.E)(), {
        clientEscMenuOptions: zD
      } = (0, RD.n)(["clientEscMenuOptions"]);
      return (0, QD.c)() ? (0, JD.jsx)(fD.b, {
        label: DD("settingsMenu:vibration"),
        checked: zD.vibration,
        onClick: DD => {
          RD.e.setClientEscMenuOptions({
            vibration: DD
          })
        },
        circleInfoText: DD("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Sw() {
      return (0, JD.jsx)(JD.Fragment, {
        children: dw.map(((DD, zD) => (0, JD.jsx)(DD, {}, zD)))
      })
    }
    var iw = wD(4399);

    function lw() {
      const {
        t: DD
      } = (0, pD.E)(), {
        isTouchScreen: zD,
        clientEscMenuOptions: wD,
        gameState: rD
      } = (0, RD.n)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), LD = (0, ID.h)("ezBridging"), cD = (0, ID.h)("ezTowering"), GD = "inGame" !== rD || !0 === LD, hD = (0, BD.f)() && ("inGame" !== rD || !0 === cD), [, MD] = (0, sD.useReducer)((DD => DD + 1), 0), OD = (0, nD.f)(), [ED, QD] = (0, sD.useState)(iw.d);
      return (0, JD.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [OD && (0, JD.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, JD.jsx)("div", {
            children: DD("controller:settingsControlsNote")
          }), (0, JD.jsx)(gD.Y, {
            onClick: () => {
              RD.e.set({
                openSettingsCategory: "controller"
              })
            },
            children: DD("controller:settingsOpenController")
          })]
        }), (0, AD.isTouchscreen)() && !(0, AD.isMobile)() ? (0, JD.jsx)(JD.Fragment, {
          children: (0, JD.jsx)(fD.b, {
            label: DD("settingsMenu:useTouchControls"),
            checked: ED,
            onClick: DD => {
              (0, iw.b)(DD), QD(DD)
            }
          })
        }) : null, zD && (0, JD.jsx)(Sw, {}), GD && (0, JD.jsx)(fD.b, {
          label: DD("settingsMenu:ezBridging"),
          checked: wD.ezBridging,
          onClick: DD => {
            RD.e.setClientEscMenuOptions({
              ezBridging: DD
            })
          },
          circleInfoText: DD("settingsMenu:ezBridgingInfo")
        }), hD && (0, JD.jsx)(fD.b, {
          label: DD("settingsMenu:ezTowering"),
          checked: wD.ezTowering,
          onClick: DD => {
            RD.e.setClientEscMenuOptions({
              ezTowering: DD
            })
          },
          circleInfoText: DD("settingsMenu:ezToweringInfo")
        }), (0, JD.jsx)(fD.b, {
          label: DD("settingsMenu:crouchToggle"),
          checked: wD.crouchIsToggle,
          onClick: DD => {
            RD.e.setClientEscMenuOptions({
              crouchIsToggle: DD
            })
          },
          circleInfoText: DD("settingsMenu:crouchToggleInfo")
        }), (0, JD.jsx)(fD.b, {
          label: DD("settingsMenu:hideUiToggle"),
          checked: wD.hideUiIsToggle,
          onClick: DD => {
            RD.e.setClientEscMenuOptions({
              hideUiIsToggle: DD
            })
          },
          circleInfoText: DD("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, UD.e)() && (0, JD.jsx)(fD.e, {
          name: DD("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: wD.touchscreenSensitivity,
          onChange: DD => {
            RD.e.setClientEscMenuOptions({
              touchscreenSensitivity: DD
            })
          }
        }), !(0, AD.isMobile)() && (0, JD.jsx)(fD.e, {
          name: DD("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: wD.mouseSensitivity,
          onChange: DD => {
            RD.e.setClientEscMenuOptions({
              mouseSensitivity: DD
            })
          }
        }), !(0, AD.isMobile)() && (0, JD.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, JD.jsx)("div", {
            className: "SliderText",
            children: DD("settingsMenu:keyBindings")
          }), KD.e.map((zD => (0, JD.jsx)(Ww, {
            title: DD(zD.name.translationKey, zD.name.params),
            defaultOpen: KD.h.has(zD.id),
            children: zD.actions.map((DD => (0, JD.jsx)(Nw, {
              noaAction: DD,
              forceUpdate: MD,
              clashesWith: zD.clashesWith,
              showPadGlyph: OD
            }, DD)))
          }, zD.name.translationKey))), (0, JD.jsx)(gD.R, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, KD.B)(), MD()
            },
            children: DD("controls:resetBindings")
          })]
        })]
      })
    }

    function Ww(DD) {
      let {
        title: zD,
        defaultOpen: wD,
        children: pD
      } = DD;
      const [KD, rD] = (0, sD.useState)(wD);
      return (0, JD.jsxs)("div", {
        className: cD()("ControlsSection", {
          Collapsed: !KD
        }),
        children: [(0, JD.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            rD(!KD)
          },
          children: [(0, JD.jsx)("div", {
            className: "ControlsSectionTitle",
            children: zD
          }), (0, JD.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), KD && (0, JD.jsx)("div", {
          className: "ControlsSectionRows",
          children: pD
        })]
      })
    }

    function Nw(DD) {
      let {
        noaAction: zD,
        forceUpdate: wD,
        clashesWith: LD,
        showPadGlyph: RD
      } = DD;
      const {
        t: AD
      } = (0, pD.E)(), UD = (0, hD.c)(zD), [fD, ID] = (0, sD.useState)(!1), [BD, nD] = (0, sD.useState)("controls:clickToEnterNewBinding"), [MD, OD] = (0, sD.useState)(null), [ED, QD] = (0, sD.useState)(null), XD = (0, sD.useRef)(null);
      (0, sD.useEffect)((() => {
        fD && XD.current && XD.current.focus()
      }), [fD]);
      const VD = KD.u[zD].filter((DD => rD.l[DD]));
      let PD = null;
      const CD = [],
        xD = LD.flatMap((DD => {
          var zD, wD;
          return null !== (zD = null === (wD = KD.e.find((zD => zD.id === DD))) || void 0 === wD ? void 0 : wD.actions) && void 0 !== zD ? zD : []
        }));
      for (const pD of xD) {
        if (pD === zD) continue;
        const DD = KD.u[pD];
        for (const zD of DD) VD.includes(zD) && CD.push(AD(KD.v[pD].translationKey, KD.v[pD].params))
      }
      CD.length > 0 && (PD = AD("controls:sharedBindingsWarning") + " ", PD += CD.join(", "));
      const TD = () => {
          ID(!1), OD(null), nD("controls:clickToEnterNewBinding"), QD(null)
        },
        bD = () => "BindingInput_" + zD;
      return (0, JD.jsxs)("div", {
        className: cD()("ControlRow", {
          WarningBorder: null !== PD
        }),
        children: [(0, JD.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, JD.jsxs)("div", {
            className: "ControlName",
            children: [AD(KD.v[zD].translationKey, KD.v[zD].params), RD && UD && (0, JD.jsx)(GD.c, {
              glyph: UD,
              className: "ControlPadGlyph"
            })]
          }), (0, JD.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, JD.jsxs)("div", {
              className: "ControlBindingsList",
              children: [VD.map((DD => (0, JD.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, JD.jsx)("div", {
                  children: (0, KD.m)(DD)
                }), (0, JD.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const pD = (0, KD.w)(zD, DD);
                    pD.isError() ? QD(pD.asError().message) : QD(null), wD()
                  },
                  children: "\xd7"
                })]
              }, DD))), !fD && (0, JD.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  ID(!0), QD(null)
                },
                children: (0, JD.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), fD && (0, JD.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, JD.jsxs)("div", {
                className: "InputContainer",
                children: [(0, JD.jsx)("div", {
                  className: "InputOverlay",
                  children: MD ? (0, KD.m)(MD) : (0, JD.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: AD(BD)
                  })
                }), (0, JD.jsx)("input", {
                  ref: XD,
                  id: bD(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: DD => {
                    if ("Escape" === DD.code) return TD(), DD.preventDefault(), void DD.stopPropagation();
                    const zD = DD.code;
                    rD.d.includes(zD) ? (QD(null), OD(zD)) : (QD("controls:keyIsReserved"), OD(null)), DD.preventDefault(), DD.stopPropagation()
                  },
                  onMouseDown: DD => {
                    const zD = "Mouse" + (DD.button + 1);
                    document.activeElement && document.activeElement.id === bD() ? rD.d.includes(zD) ? (QD(null), OD(zD)) : (QD("controls:keyIsReserved"), OD(null)) : nD("controls:enterNewBinding"), DD.stopPropagation()
                  },
                  onBlur: () => {
                    nD("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, JD.jsx)(gD.f, {
                onPointerDown: DD => {
                  DD.preventDefault()
                },
                onClick: () => {
                  (0, KD.b)(zD, MD), wD(), TD()
                },
                className: "ControlBindingAddButton",
                disabled: null === MD,
                children: AD("general:add")
              }), (0, JD.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  TD()
                },
                children: "\xd7"
              })]
            }), ED && (0, JD.jsx)("div", {
              className: "ControlBindingError",
              children: AD(ED)
            })]
          })]
        }), PD && (0, JD.jsx)("div", {
          className: "ControlRowWarning",
          children: PD
        })]
      })
    }
  },
  8887: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(58),
      sD = wD(1057),
      KD = wD(1096);
    const rD = (0, pD.forwardRef)((function(DD, zD) {
      let {
        icon: wD,
        title: pD,
        sub: rD,
        expanded: LD,
        onClick: cD
      } = DD;
      return (0, KD.jsxs)("button", {
        ref: zD,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": LD,
        onClick: cD,
        children: [(0, KD.jsx)(sD.e, {
          name: wD,
          className: "FeaturedSettingsEntryIcon"
        }), (0, KD.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, KD.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: pD
          }), (0, KD.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: rD
          })]
        }), (0, KD.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  8894: (DD, zD, wD) => {
    function pD(DD) {
      return {
        x: (DD.left + DD.right) / 2,
        y: (DD.top + DD.bottom) / 2
      }
    }

    function sD(DD) {
      return 0 === DD.length ? null : DD.reduce(((DD, zD) => ({
        left: Math.min(DD.left, zD.left),
        top: Math.min(DD.top, zD.top),
        right: Math.max(DD.right, zD.right),
        bottom: Math.max(DD.bottom, zD.bottom)
      })))
    }

    function KD(DD, zD) {
      const wD = Math.max(0, (zD - (DD.right - DD.left)) / 2),
        pD = Math.max(0, (zD - (DD.bottom - DD.top)) / 2);
      return {
        left: DD.left - wD,
        top: DD.top - pD,
        right: DD.right + wD,
        bottom: DD.bottom + pD
      }
    }

    function rD(DD, zD) {
      return zD.x >= DD.left && zD.x <= DD.right && zD.y >= DD.top && zD.y <= DD.bottom
    }

    function LD(DD, zD, wD) {
      let sD = null,
        LD = 1 / 0;
      for (const {
          id: pD,
          box: KD
        }
        of zD) {
        const zD = (KD.right - KD.left) * (KD.bottom - KD.top);
        rD(KD, DD) && zD < LD && (LD = zD, sD = pD)
      }
      if (null !== sD) return sD;
      let cD = 1 / 0;
      for (const {
          id: gD,
          box: RD
        }
        of zD) {
        if (!rD(KD(RD, wD), DD)) continue;
        const zD = pD(RD),
          LD = Math.hypot(DD.x - zD.x, DD.y - zD.y);
        LD < cD && (cD = LD, sD = gD)
      }
      return sD
    }

    function cD(DD, zD, wD) {
      return {
        left: wD.left,
        top: wD.top,
        right: DD - wD.right,
        bottom: zD - wD.bottom
      }
    }

    function gD(DD, zD, wD, pD) {
      const sD = (DD, zD, wD) => Math.max(Math.min(zD, 0), Math.min(Math.max(wD, 0), DD));
      return {
        x: sD(zD, pD.left - DD.left, pD.right - DD.right),
        y: sD(wD, pD.top - DD.top, pD.bottom - DD.bottom)
      }
    }

    function RD(DD, zD, wD, pD, sD) {
      const KD = DD.dx * pD + zD,
        rD = DD.dy * sD + wD,
        LD = DD => Math.max(-1, Math.min(1, DD));
      return {
        dx: LD(KD / pD),
        dy: LD(rD / sD)
      }
    }

    function AD(DD, zD, wD, pD) {
      return zD <= 0 || wD <= 0 ? 1 : Math.max(.05, Math.min(1, DD / zD, pD / wD))
    }

    function UD(DD, zD, wD) {
      return Math.min(DD.right, zD.right) - Math.max(DD.left, zD.left) > wD && Math.min(DD.bottom, zD.bottom) - Math.max(DD.top, zD.top) > wD
    }

    function fD(DD, zD) {
      const wD = (DD, zD, wD, pD) => zD - DD > pD - wD ? wD - DD > zD - pD ? pD - zD : wD - DD : DD < wD ? wD - DD : zD > pD ? pD - zD : 0;
      return {
        x: wD(DD.left, DD.right, zD.left, zD.right),
        y: wD(DD.top, DD.bottom, zD.top, zD.bottom)
      }
    }

    function ID(DD, zD) {
      let {
        avoid: wD = null,
        bounds: pD = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, sD = 0, KD = 1 / 0;
      return DD.forEach(((DD, rD) => {
        const LD = zD.filter((zD => UD(DD, zD, 0))).length,
          cD = null !== pD && (DD.left < pD.left || DD.top < pD.top || DD.right > pD.right || DD.bottom > pD.bottom),
          gD = LD + (wD && UD(DD, wD, 0) ? 1e3 : 0) + (cD ? 1e6 : 0);
        gD < KD && (sD = rD, KD = gD)
      })), sD
    }
    wD.d(zD, {
      B: () => cD,
      C: () => fD,
      G: () => sD,
      e: () => pD,
      h: () => rD,
      j: () => UD,
      m: () => gD,
      q: () => KD,
      t: () => ID,
      u: () => RD,
      x: () => LD,
      z: () => AD
    })
  },
  8679: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD,
      i: () => pD
    });
    const pD = "controllerOpenKeyboard",
      sD = "controllerKeyboardVisible"
  },
  8684: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => hD,
      e: () => GD,
      i: () => RD,
      j: () => nD,
      m: () => MD,
      q: () => UD
    });
    var pD = wD(1681),
      sD = wD(1745);
    const KD = DD => DD >= 56320 && DD <= 57343,
      rD = DD => DD >= 55296 && DD <= 56319,
      LD = (DD, zD) => zD >= 2 && KD(DD.charCodeAt(zD - 1)) && rD(DD.charCodeAt(zD - 2)) ? zD - 2 : Math.max(0, zD - 1),
      cD = (DD, zD) => {
        let wD;
        var pD, sD;
        return wD = DD.start !== DD.end ? zD < 0 ? DD.start : DD.end : zD < 0 ? LD(DD.value, DD.start) : (pD = DD.value, (sD = DD.start) + 1 < pD.length && rD(pD.charCodeAt(sD)) && KD(pD.charCodeAt(sD + 1)) ? sD + 2 : Math.min(pD.length, sD + 1)), {
          value: DD.value,
          start: wD,
          end: wD
        }
      },
      gD = ["text", "search", "url", "email", "tel", "password", "number"],
      RD = DD => !(!(0, sD.c)(DD) || DD.isContentEditable || DD.hasAttribute("data-pad-no-osk")) && (DD instanceof HTMLTextAreaElement || DD instanceof HTMLInputElement && gD.includes(DD.type)),
      AD = DD => null !== DD.selectionStart,
      UD = DD => {
        var zD, wD;
        const {
          value: pD
        } = DD;
        return {
          value: pD,
          start: null !== (zD = DD.selectionStart) && void 0 !== zD ? zD : pD.length,
          end: null !== (wD = DD.selectionEnd) && void 0 !== wD ? wD : pD.length
        }
      },
      fD = (DD, zD, wD) => {
        if (DD.readOnly) return;
        const sD = DD instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(sD, "value").set.call(DD, zD.value), AD(DD) && DD.setSelectionRange(zD.start, zD.end), (0, pD.f)(DD, new InputEvent("input", {
          bubbles: !0,
          inputType: wD
        }))
      };
    let ID = !1;
    const BD = (DD, zD) => !!document.execCommand(DD, !1, zD) || (ID || (ID = !0, console.warn(`execCommand("${DD}") failed; the on-screen keyboard is setting the value directly`)), !1),
      GD = (DD, zD) => {
        BD("insertText", zD) || fD(DD, function(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const pD = DD.value.slice(0, DD.start),
            sD = DD.value.slice(DD.end);
          let KD = wD < 0 ? zD.length : Math.max(0, wD - pD.length - sD.length);
          KD > 0 && KD < zD.length && rD(zD.charCodeAt(KD - 1)) && KD--;
          const LD = zD.slice(0, KD),
            cD = pD.length + LD.length;
          return {
            value: pD + LD + sD,
            start: cD,
            end: cD
          }
        }(UD(DD), zD, DD.maxLength), "insertText")
      },
      hD = DD => {
        BD("delete") || fD(DD, (DD => {
          const zD = DD.start === DD.end ? LD(DD.value, DD.start) : DD.start;
          return {
            value: DD.value.slice(0, zD) + DD.value.slice(DD.end),
            start: zD,
            end: zD
          }
        })(UD(DD)), "deleteContentBackward")
      },
      nD = (DD, zD) => {
        if (!AD(DD)) return;
        const wD = cD(UD(DD), zD);
        DD.setSelectionRange(wD.start, wD.end)
      },
      MD = DD => {
        AD(DD) && 0 === DD.selectionStart && 0 === DD.selectionEnd && DD.setSelectionRange(DD.value.length, DD.value.length)
      }
  },
  8841: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => LD
    });
    var pD = wD(20),
      sD = wD(2116),
      KD = wD(1355),
      rD = wD(1383);
    const LD = async () => {
      if ((0, rD.f)()) {
        if (!0 !== await KD.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== pD.e.get("gameState")) return
      }(0, sD.e)()
    }
  },
  8849: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => cD,
      e: () => KD,
      h: () => rD,
      j: () => sD,
      k: () => LD
    });
    var pD = wD(1962);
    const sD = "controllerPadShopOpen",
      KD = DD => pD.e.includes(DD),
      rD = DD => Object.values(DD).some((DD => !1 !== DD.canBuy && !DD.isRewardedAd)),
      LD = (DD, zD, wD) => {
        var pD, sD, rD, LD;
        const cD = DD.filter((DD => !KD(DD))),
          gD = null !== zD && DD.includes(zD) ? zD : null;
        return null !== gD && !KD(gD) && wD(gD) ? gD : null !== (pD = null !== (sD = null !== (rD = null !== (LD = cD.find(wD)) && void 0 !== LD ? LD : cD[0]) && void 0 !== rD ? rD : gD) && void 0 !== sD ? sD : DD[0]) && void 0 !== pD ? pD : null
      },
      cD = DD => DD.userInput || DD.isRewardedAd || "boolean" === typeof DD.isSelected ? null : JSON.stringify([DD.image, DD.cost, DD.currency, DD.amount, DD.customTitle, DD.buyButtonText, DD.description, DD.canBuy])
  },
  8870: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => gD,
      f: () => RD
    });
    var pD = wD(58),
      sD = wD(1442),
      KD = wD(2e3),
      rD = wD(1394),
      LD = wD(1417),
      cD = wD(1096);
    const gD = () => {
        const DD = (0, rD.m)();
        if ((0, pD.useEffect)((() => {
            (0, rD.i)()
          }), []), !DD) return null;
        const {
          ControllerCategory: zD
        } = DD;
        return (0, cD.jsx)(LD.b, {
          children: (0, cD.jsx)(zD, {})
        })
      },
      RD = () => {
        var DD;
        const zD = (0, rD.m)(),
          [, wD] = (0, pD.useReducer)((DD => DD + 1), 0);
        return (0, sD.g)(KD.c, wD), null !== (DD = null === zD || void 0 === zD ? void 0 : zD.hasActivePad()) && void 0 !== DD && DD
      }
  },
  8692: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      e: () => gD,
      g: () => BD,
      j: () => AD,
      n: () => ID,
      r: () => KD,
      t: () => fD,
      u: () => rD,
      w: () => UD
    });
    const pD = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      sD = (DD, zD) => {
        if ("function" === typeof DD.checkVisibility) return !DD.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: zD,
          checkOpacity: zD
        });
        const {
          visibility: wD
        } = getComputedStyle(DD);
        if ("hidden" === wD || "collapse" === wD) return !0;
        if (!zD) return !1;
        for (let pD = DD; pD; pD = pD.parentElement)
          if ("0" === getComputedStyle(pD).opacity) return !0;
        return !1
      },
      KD = DD => {
        if (!DD.isConnected || sD(DD, !0)) return !1;
        const zD = DD.getBoundingClientRect();
        return zD.width > 0 && zD.height > 0
      },
      rD = DD => !!DD.matches(":disabled, [aria-disabled='true']") || "button" === DD.getAttribute("role") && "-1" === DD.getAttribute("tabindex"),
      LD = DD => {
        var zD;
        if (DD.closest("[data-pad-ignore]")) return !0;
        return !!(null === (zD = DD.parentElement) || void 0 === zD ? void 0 : zD.closest("[data-pad-focusable]"))
      },
      cD = DD => {
        const zD = DD.querySelectorAll(pD);
        return DD.matches(pD) ? [DD, ...zD] : zD
      },
      gD = DD => {
        const zD = [];
        for (const wD of cD(DD)) !LD(wD) && KD(wD) && zD.push(wD);
        return zD
      },
      RD = new WeakMap,
      AD = DD => {
        const zD = RD.get(DD);
        if (zD && UD(zD, DD)) return !0;
        for (const wD of cD(DD))
          if (!LD(wD) && KD(wD)) return RD.set(DD, wD), !0;
        return RD.delete(DD), !1
      },
      UD = (DD, zD) => zD.contains(DD) && DD.matches(pD) && !LD(DD) && KD(DD),
      fD = (DD, zD) => UD(DD, zD) && !rD(DD),
      ID = DD => {
        for (const zD of DD.querySelectorAll("[data-pad-initial-area]"))
          if (!sD(zD, !1)) return !0;
        return !1
      },
      BD = DD => {
        const zD = zD => {
          let wD = 0;
          for (let pD = zD.parentElement; pD && pD !== DD; pD = pD.parentElement) wD++;
          return wD
        };
        return [...DD.querySelectorAll("[data-pad-initial-area]")].filter(KD).sort(((DD, wD) => zD(wD) - zD(DD)))
      }
  },
  8671: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => PD,
      D: () => ED,
      G: () => QD,
      H: () => GD,
      K: () => cD,
      N: () => RD,
      c: () => hD,
      d: () => VD,
      f: () => JD,
      j: () => OD,
      m: () => ID,
      o: () => BD,
      s: () => UD,
      t: () => fD,
      v: () => XD,
      w: () => gD
    });
    var pD = wD(25),
      sD = wD(1681),
      KD = wD(8679),
      rD = wD(8684),
      LD = wD(8692);
    const cD = DD => (0, rD.i)(DD),
      gD = DD => {
        const zD = DD.getBoundingClientRect();
        return {
          x: zD.left + zD.width / 2,
          y: zD.top + zD.height / 2
        }
      },
      RD = (DD, zD, wD) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: DD.x,
        clientY: DD.y,
        screenX: DD.x,
        screenY: DD.y,
        button: zD,
        buttons: wD,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      AD = (DD, zD) => {
        (0, sD.f)(DD, zD)
      },
      UD = function(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const pD = 0 === wD ? 1 : 2;
        AD(DD, new PointerEvent("pointerdown", RD(zD, wD, pD))), AD(DD, new MouseEvent("mousedown", RD(zD, wD, pD)))
      },
      fD = function(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        AD(DD, new PointerEvent("pointerup", RD(zD, wD, 0))), AD(DD, new MouseEvent("mouseup", RD(zD, wD, 0)))
      },
      ID = function(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        UD(DD, zD, wD), fD(DD, zD, wD), AD(DD, 0 === wD ? new MouseEvent("click", RD(zD, 0, 0)) : new MouseEvent("contextmenu", RD(zD, 2, 0)))
      },
      BD = function(DD, zD, wD) {
        let {
          leaveBelow: pD = null,
          enterBelow: sD = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (DD !== zD) {
          if (null !== DD && void 0 !== DD && DD.isConnected) {
            const sD = {
              ...RD(wD, 0, 0),
              relatedTarget: zD
            };
            AD(DD, new PointerEvent("pointerout", sD)), AD(DD, new MouseEvent("mouseout", sD));
            const KD = DD => !!zD && DD.contains(zD) || !!pD && DD.contains(pD);
            for (let zD = DD; zD && !KD(zD); zD = zD.parentElement) AD(zD, new PointerEvent("pointerleave", {
              ...sD,
              bubbles: !1
            })), AD(zD, new MouseEvent("mouseleave", {
              ...sD,
              bubbles: !1
            }))
          }
          if (zD) {
            const pD = {
              ...RD(wD, 0, 0),
              relatedTarget: DD
            };
            AD(zD, new PointerEvent("pointerover", pD)), AD(zD, new MouseEvent("mouseover", pD));
            const KD = [],
              rD = zD => !(null === DD || void 0 === DD || !DD.isConnected) && zD.contains(DD) || !!sD && zD.contains(sD);
            for (let DD = zD; DD && !rD(DD); DD = DD.parentElement) KD.push(DD);
            for (const DD of KD.reverse()) AD(DD, new PointerEvent("pointerenter", {
              ...pD,
              bubbles: !1
            })), AD(DD, new MouseEvent("mouseenter", {
              ...pD,
              bubbles: !1
            }));
            AD(zD, new PointerEvent("pointermove", RD(wD, 0, 0))), AD(zD, new MouseEvent("mousemove", RD(wD, 0, 0)))
          }
        } else zD && (AD(zD, new PointerEvent("pointermove", RD(wD, 0, 0))), AD(zD, new MouseEvent("mousemove", RD(wD, 0, 0))))
      },
      GD = DD => {
        pD.l.KG(KD.i, DD)
      },
      hD = DD => {
        if (cD(DD)) return void GD(DD);
        const zD = DD.hasAttribute("data-pad-focusable") ? DD.querySelector("a[href]") : null,
          wD = null !== zD && void 0 !== zD ? zD : DD;
        ID(wD, gD(wD))
      },
      nD = ".Dropdown-root.is-open",
      MD = DD => {
        const zD = DD.querySelector(".Dropdown-control");
        return hD(zD), zD
      },
      OD = DD => {
        var zD;
        const wD = null !== (zD = DD.closest(nD)) && void 0 !== zD ? zD : DD.querySelector(nD);
        return wD ? MD(wD) : null
      },
      JD = DD => {
        for (const zD of document.querySelectorAll(nD)) zD.contains(DD) || MD(zD)
      },
      ED = DD => null !== DD.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      QD = DD => {
        const zD = DD ? document.elementFromPoint(DD.x, DD.y) : null;
        return !(null === zD || void 0 === zD || !zD.closest("[data-pad-repeat]"))
      },
      XD = DD => {
        var zD;
        return null !== (zD = [...DD.querySelectorAll("[data-pad-back]")].find(LD.r)) && void 0 !== zD ? zD : null
      },
      VD = DD => {
        const zD = XD(DD);
        return !!zD && (hD(zD), !0)
      },
      PD = DD => {
        var zD, wD, pD, sD;
        return null !== (zD = null !== (wD = null !== (pD = DD.getAttribute("data-pad-key")) && void 0 !== pD ? pD : DD.getAttribute("href")) && void 0 !== wD ? wD : null === (sD = DD.querySelector("a[href]")) || void 0 === sD ? void 0 : sD.getAttribute("href")) && void 0 !== zD ? zD : null
      }
  },
  8883: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => cD
    });
    var pD = wD(20),
      sD = wD(1332),
      KD = wD(103);
    const rD = {
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

    function LD() {
      return (0, KD.isMobile)() && "function" === typeof navigator.vibrate
    }
    const cD = new class {
      constructor(DD) {
        this.deps = DD, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(DD, zD) {
        var wD;
        if (!this.deps.enabled()) return;
        const pD = rD[DD],
          sD = null !== zD && void 0 !== zD ? zD : pD.pattern;
        if (null === sD) return void console.warn("No vibration pattern for", DD);
        const KD = this.deps.now();
        KD - this.lastAnyAt < 40 && pD.priority < this.playingPriority || KD - (null !== (wD = this.lastAt.get(DD)) && void 0 !== wD ? wD : -1 / 0) < pD.minGapMs || KD < this.playingUntil && pD.priority < this.playingPriority || (this.lastAt.set(DD, KD), this.lastAnyAt = KD, this.playingUntil = KD + sD.reduce(((DD, zD) => DD + zD), 0), this.playingPriority = pD.priority, this.deps.vibrate(sD))
      }
    }({
      vibrate: DD => {
        navigator.vibrate([...DD])
      },
      now: () => performance.now(),
      enabled: () => LD() && pD.e.get("isTouchScreen") && pD.e.get("clientEscMenuOptions").vibration && !(0, sD.g)()
    })
  },
  8792: (DD, zD, wD) => {
    function pD(DD, zD) {
      return !DD.hidden && (zD || !DD.isRewardedAd)
    }

    function sD(DD) {
      return "object" === typeof DD ? DD.option : DD
    }

    function KD(DD, zD) {
      var wD;
      if ("dropdown" === (null === (wD = DD.userInput) || void 0 === wD ? void 0 : wD.type) && "object" === typeof DD.userInput.dropdownOptions[0]) {
        for (const wD of DD.userInput.dropdownOptions)
          if (sD(wD) === zD) return "object" === typeof wD ? wD.cost : DD.cost;
        console.error("Didn't find matching option for dropdown item. Item:", DD, "input:", zD)
      }
      return DD.cost
    }

    function rD(DD, zD, wD) {
      var pD;
      const sD = null !== (pD = wD.excludedPlayers) && void 0 !== pD ? pD : [zD];
      return DD.filter((DD => !sD.includes(DD)))
    }
    wD.d(zD, {
      d: () => KD,
      h: () => sD,
      l: () => rD,
      o: () => pD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);