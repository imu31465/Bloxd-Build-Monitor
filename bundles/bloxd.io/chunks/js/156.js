export const id = 156;
export const ids = [156];
export const modules = {
  8870: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC
    });
    var QC = ZC(20),
      wC = ZC(1143),
      bC = ZC(4942),
      nC = ZC(1056);

    function fC(CC) {
      let {
        note: zC
      } = CC;
      const {
        t: ZC
      } = (0, wC.y)(), {
        clientEscMenuOptions: fC
      } = (0, QC.k)(["clientEscMenuOptions"]);
      return (0, nC.jsx)(bC.b, {
        label: ZC("touchSettings:actionButtons"),
        checked: fC.touchActionButtons,
        onClick: CC => {
          QC.b.setClientEscMenuOptions({
            touchActionButtons: CC
          })
        },
        circleInfoText: ZC("touchSettings:actionButtonsInfo"),
        note: zC
      })
    }
  },
  8859: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => XZ,
      e: () => lZ
    });
    var QC = ZC(1143),
      wC = ZC(48),
      bC = ZC(1887),
      nC = ZC(1894),
      fC = ZC(1002),
      oC = ZC.n(fC),
      qC = ZC(1388),
      FC = ZC(20),
      WC = ZC(77),
      NC = ZC(91),
      MC = ZC(4942),
      gC = ZC(2369),
      SC = ZC(264),
      pC = ZC(1898),
      PC = ZC(1902),
      GC = ZC(8862),
      RC = ZC(8870),
      AC = ZC(310),
      xC = ZC(1056);
    const JC = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var IC = ZC(8876);
    var iC = ZC(1418),
      vC = ZC(1307),
      eC = ZC(8882),
      hC = ZC(1357),
      KC = ZC(1013),
      YC = ZC(2413);
    const dC = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(YC.F.map((CC => [CC, "menu"])))
      },
      mC = CC => YC.B.filter((zC => dC[zC] === CC)),
      HC = new Set(mC("cluster")),
      EC = ["cluster"],
      lC = [...EC, ...YC.B.filter((CC => !EC.includes(CC) && !dC[CC]))],
      XC = lC.flatMap((CC => [CC, ...mC(CC)])).map((CC => ({
        id: CC,
        label: `hudLayout:${CC}`,
        ...YC.x[CC],
        parent: dC[CC]
      }))),
      cC = Object.fromEntries(XC.map((CC => [CC.id, CC]))),
      uC = "data-hud-el";

    function rC(CC, zC, ZC, QC) {
      const wC = ZC(function(CC, zC) {
          return "attack" !== CC || zC ? cC[CC].label : "hudLayout:attackContext"
        }(CC, zC)),
        bC = QC[CC];
      return bC ? ZC("hudLayout:slotWithKey", {
        slot: wC,
        key: bC
      }) : wC
    }

    function sC(CC, zC, ZC, QC) {
      return CC.map((CC => rC(CC, zC, ZC, QC))).join(", ")
    }

    function TC(CC) {
      let {
        className: zC,
        keepPlace: ZC
      } = CC;
      return ZC ? (0, xC.jsx)("div", {
        className: oC()(zC, "Placeholder")
      }) : null
    }

    function aC(CC) {
      let {
        id: zC,
        elements: ZC,
        actionButtons: wC,
        keyNames: bC,
        className: nC,
        keepPlace: fC,
        onHidden: oC
      } = CC;
      const {
        t: FC
      } = (0, QC.y)();
      if (!cC[zC].hide) return (0, xC.jsx)(TC, {
        className: nC,
        keepPlace: fC
      });
      const WC = (0, YC.u)(ZC, zC);
      return (0, xC.jsx)(qC.O, {
        className: nC,
        ariaLabel: FC(WC ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: rC(zC, wC, FC, bC)
        }),
        pressed: !WC,
        onClick: () => {
          oC(zC, !WC)
        },
        children: (0, xC.jsx)(KC.c, {
          name: WC ? "eye-slash" : "eye"
        })
      })
    }

    function tC(CC) {
      var zC;
      let {
        id: ZC,
        elements: wC,
        actionButtons: bC,
        keyNames: nC,
        className: fC,
        keepPlace: oC,
        onlyWhenMoved: FC,
        locked: WC,
        onReset: NC
      } = CC;
      const {
        t: MC
      } = (0, QC.y)(), gC = cC[ZC], SC = (0, YC.J)(null !== (zC = wC[ZC]) && void 0 !== zC ? zC : YC.p);
      return !gC.move && !gC.scale || FC && SC ? (0, xC.jsx)(TC, {
        className: fC,
        keepPlace: oC
      }) : (0, xC.jsx)(qC.O, {
        className: fC,
        disabled: SC || WC,
        ariaLabel: MC("hudLayout:resetElement", {
          name: rC(ZC, bC, MC, nC)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: ZC
        },
        onClick: CC => {
          FC && LC(CC.currentTarget), NC(ZC)
        },
        children: (0, xC.jsx)(KC.c, {
          name: "rotate-left"
        })
      })
    }

    function DC(CC) {
      let {
        id: zC,
        actionButtons: ZC,
        keyNames: wC,
        className: bC,
        keepPlace: nC,
        locked: fC,
        lockable: oC,
        onLocked: FC
      } = CC;
      const {
        t: WC
      } = (0, QC.y)();
      return oC || fC ? (0, xC.jsx)(qC.O, {
        className: bC,
        ariaLabel: WC(fC ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: rC(zC, ZC, WC, wC)
        }),
        pressed: fC,
        active: fC,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${fC?"unlock":"lock"}:${zC}`
        },
        onClick: () => {
          FC(zC, !fC)
        },
        children: (0, xC.jsx)(KC.c, {
          name: fC ? "lock" : "lock-open"
        })
      }) : (0, xC.jsx)(TC, {
        className: bC,
        keepPlace: nC
      })
    }

    function jC(CC) {
      let {
        className: zC,
        open: ZC,
        name: wC,
        onToggle: bC
      } = CC;
      const {
        t: nC
      } = (0, QC.y)();
      return (0, xC.jsx)(qC.O, {
        className: zC,
        ariaLabel: nC(ZC ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: wC
        }),
        pressed: ZC,
        analyticsClick: {
          id: "hud_layout.children",
          value: ZC ? "close" : "open"
        },
        onClick: () => {
          bC(!ZC)
        },
        children: (0, xC.jsx)(KC.c, {
          name: ZC ? "angle-up" : "angle-down"
        })
      })
    }

    function yC(CC, zC) {
      var ZC;
      CC.contains(document.activeElement) && zC.focus({
        preventScroll: !0
      }), null === (ZC = (0, hC.f)()) || void 0 === ZC || ZC.handOverPadFocus(CC, zC)
    }

    function LC(CC) {
      const zC = CC.closest("[data-hud-row]"),
        ZC = null === zC || void 0 === zC ? void 0 : zC.querySelector(".HudElementRowName");
      return !(!zC || !ZC) && (yC(zC, ZC), !0)
    }
    const UC = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function BC(CC, zC) {
      return "joystick" === CC && !zC
    }

    function OC() {
      const {
        t: CC
      } = (0, QC.y)();
      return (0, xC.jsx)(qC.O, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: CC => {
          const zC = CC.currentTarget;
          if (!LC(zC)) {
            const CC = function(CC) {
              var zC, ZC;
              const QC = [CC.previousElementSibling, CC.nextElementSibling].find((CC => CC instanceof HTMLElement && CC.matches(UC)));
              return null !== (zC = null !== QC && void 0 !== QC ? QC : null === (ZC = CC.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === ZC ? void 0 : ZC.querySelector(`:is(${UC}):not(.HudFixJoystickButton)`)) && void 0 !== zC ? zC : null
            }(zC);
            CC && yC(zC, CC)
          }
          FC.b.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: CC("hudLayout:fixJoystick")
      })
    }
    var kC = ZC(60),
      VC = ZC(1228),
      Cz = ZC(3099),
      zz = ZC(2734),
      Zz = ZC(8890),
      Qz = ZC(2415),
      wz = ZC(2431),
      bz = ZC(3137);
    const nz = ["J", "C", "A", "P", "U", "X", "G"],
      fz = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: YC.F,
        pinnedIcon: null
      });

    function oz(CC, zC) {
      CC.replaceChildren(...[...zC.childNodes].map((CC => CC.cloneNode(!0))))
    }
    const qz = CC => ({
      [uC]: CC
    });

    function Fz(CC) {
      let {
        id: zC,
        slot: ZC,
        icon: QC,
        label: bC,
        hidden: nC,
        className: fC,
        face: qC
      } = CC;
      const FC = (0, wC.useRef)(null);
      return (0, wC.useLayoutEffect)((() => {
        qC && FC.current && oz(FC.current, qC)
      }), [qC]), (0, xC.jsxs)("div", {
        className: oC()("TouchKeyHit", `TouchSlot${ZC}`, fC, {
          HudPreviewGhost: nC.has(zC)
        }),
        ...qz(zC),
        children: [qC && (0, xC.jsx)("div", {
          ref: FC,
          className: oC()("TouchKey", {
            Labelled: qC.classList.contains("Labelled")
          })
        }), !qC && (0, xC.jsxs)("div", {
          className: oC()("TouchKey", {
            Labelled: void 0 !== bC
          }),
          children: [QC && (0, xC.jsx)(KC.c, {
            name: QC
          }), void 0 !== bC && (0, xC.jsx)("span", {
            className: "TouchKeyLabel",
            children: bC
          })]
        })]
      })
    }

    function Wz(CC) {
      let {
        item: zC,
        selected: ZC
      } = CC;
      const QC = (0, wC.useRef)(null);
      return (0, wC.useLayoutEffect)((() => {
        QC.current && oz(QC.current, zC)
      }), [zC]), (0, xC.jsx)("div", {
        ref: QC,
        className: oC()("InvenItem", {
          Selected: ZC
        })
      })
    }
    const Nz = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      Mz = CC => void 0 === CC ? {} : {
        style: {
          "--parked": CC
        }
      };

    function gz(CC) {
      let {
        id: zC,
        hidden: ZC,
        parked: QC,
        unslotted: wC = !1
      } = CC;
      return (0, xC.jsx)("div", {
        className: oC()("TopRightIcon", wz.l[zC], {
          HudPreviewGhost: ZC.has(zC),
          [Qz.e]: void 0 !== QC,
          [Qz.h]: wC
        }),
        ...Mz(QC),
        children: (0, xC.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...qz(zC),
          children: (0, xC.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, xC.jsx)(KC.c, {
              name: Nz[zC]
            })
          })
        })
      })
    }

    function Sz(CC) {
      let {
        portraitPhone: zC,
        icons: ZC,
        pinnedIcon: QC,
        hidden: bC,
        moved: nC,
        trayState: fC
      } = CC;
      const qC = zC ? (0, Qz.K)(ZC) : [],
        FC = ZC.filter((CC => "settings" === CC)),
        WC = ZC.filter((CC => "settings" !== CC && !qC.includes(CC))).reverse(),
        NC = qC.length > 0 && "gone" === fC,
        MC = [...FC, ...NC ? ["tray"] : [], ...WC].filter((CC => "tray" === CC || bC.has(CC) && !nC.has(CC))),
        gC = CC => {
          const zC = MC.indexOf(CC);
          return zC < 0 ? void 0 : zC
        },
        SC = (CC, zC) => (0, xC.jsx)(gz, {
          id: CC,
          hidden: bC,
          parked: zC ? gC(CC) : void 0,
          unslotted: zC && bC.has(CC) && nC.has(CC)
        }, CC);
      return (0, xC.jsxs)("div", {
        className: oC()("TopRightIcons TouchInGame", {
          Column: zC
        }),
        children: [FC.map((CC => SC(CC, !0))), qC.length > 0 && (0, xC.jsxs)("div", {
          className: oC()("TopRightIcon TopRightTrayToggle Open", {
            [Qz.e]: NC
          }),
          ...Mz(gC("tray")),
          children: [(0, xC.jsx)("div", {
            className: oC()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== fC
            }),
            children: (0, xC.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, xC.jsx)(KC.c, {
                name: "ellipsis"
              })
            })
          }), (0, xC.jsx)("div", {
            className: "TopRightTray",
            children: qC.map((CC => SC(CC, !1)))
          })]
        }), WC.map((CC => (0, xC.jsxs)(wC.Fragment, {
          children: ["perspective" === CC && null !== QC && (0, xC.jsx)("div", {
            className: "TopRightIcon",
            children: (0, xC.jsx)("div", {
              className: "UiItemIcon SmallTextBold",
              children: (0, xC.jsx)("div", {
                className: "ScaleOnHover",
                children: (0, xC.jsx)(KC.c, {
                  name: QC
                })
              })
            })
          }), SC(CC, !0)]
        }, CC)))]
      })
    }

    function pz(CC) {
      let {
        next: zC,
        hidden: ZC
      } = CC;
      return (0, xC.jsx)("div", {
        className: oC()("HotBarArrow", zC ? "Next" : "Previous", {
          HudPreviewGhost: ZC
        }),
        ...qz("arrows"),
        children: (0, xC.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, xC.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, xC.jsx)(KC.c, {
              name: zC ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function Pz() {
      return (0, xC.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, xC.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, xC.jsx)("div", {
            className: "SocialBar",
            children: (0, xC.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, xC.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, xC.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, xC.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, xC.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, xC.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, xC.jsx)(KC.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, xC.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, xC.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, xC.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, xC.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, xC.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, xC.jsx)(KC.c, {
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
    const Gz = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      Rz = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Az = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      xz = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function Jz(CC) {
      let {
        presence: zC,
        portraitPhone: ZC,
        hidden: wC,
        actionButtons: bC,
        joystickFixed: nC,
        keysAbove: fC,
        auraBar: qC,
        trayState: FC,
        moved: NC
      } = CC;
      const {
        t: MC
      } = (0, QC.y)(), {
        faces: gC,
        items: SC
      } = zC, pC = CC => ({
        HudPreviewGhost: wC.has(CC)
      });
      return (0, xC.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, xC.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, xC.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, xC.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, xC.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, xC.jsx)("div", {
              className: "InGameHeaderGameName",
              children: MC("hudLayout:previewGameName")
            })]
          })
        }), (0, xC.jsx)("div", {
          className: "TopLeftElements",
          children: (0, xC.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, xC.jsxs)("div", {
              className: "Chat",
              children: [(0, xC.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [MC("hudLayout:previewChatLine"), MC("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), MC("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((CC => (0, xC.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, xC.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, xC.jsx)("div", {
                      className: "IndividualText",
                      children: CC
                    })
                  })
                }, CC)))
              }), (0, xC.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: oC()("ChatIconWrapper SmallTextLight", pC("chat")),
                ...qz("chat"),
                children: (0, xC.jsx)(KC.c, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, xC.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, xC.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, xC.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, xC.jsx)("div", {
                className: "TopRightIconsContainer",
                ...qz("menu"),
                children: (0, xC.jsx)(Sz, {
                  portraitPhone: ZC,
                  icons: zC.rowIcons,
                  pinnedIcon: zC.pinnedIcon,
                  hidden: wC,
                  trayState: FC,
                  moved: NC
                })
              })
            }), WC.featureFlags.useSocialFeatures && (0, xC.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, xC.jsx)(Pz, {})
            })]
          })
        }), (0, xC.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, xC.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, xC.jsxs)("div", {
            className: "TouchInteractKey",
            ...qz("interact"),
            children: [(0, xC.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, xC.jsx)(KC.c, {
                name: "hand-back-point-up"
              })
            }), (0, xC.jsx)("div", {
              children: MC("hudLayout:previewInteract")
            })]
          })
        }), (0, xC.jsx)("div", {
          className: "BottomCentre",
          children: (0, xC.jsxs)("div", {
            className: "BottomElements",
            children: [(0, xC.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, xC.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, xC.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...qz("hotbar"),
                children: (0, xC.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, xC.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, xC.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, xC.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, xC.jsx)(KC.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), qC && (0, xC.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, xC.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, xC.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, bz.d)("glint"),
                    alt: ""
                  }), (0, xC.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, xC.jsx)("div", {
                  className: "AuraBar",
                  children: (0, xC.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, xC.jsx)("div", {
                className: "HotBarRow",
                children: (0, xC.jsx)("div", {
                  className: oC()("HotBarContainer Touch", {
                    KeysAbove: fC
                  }),
                  children: (0, xC.jsxs)("div", {
                    className: "HotBar",
                    ...qz("hotbar"),
                    children: [(0, xC.jsxs)("div", {
                      className: oC()("TouchInventoryKeys", {
                        NoAuraBar: !qC
                      }),
                      children: [(0, xC.jsx)("div", {
                        className: oC()("TouchInventoryKey ShopKey", pC("inventory"), {
                          Hidden: !zC.shop
                        }),
                        ...qz("inventory"),
                        children: (0, xC.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, xC.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, xC.jsx)(KC.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, xC.jsx)("div", {
                        className: oC()("TouchInventoryKey BagKey", pC("inventory"), {
                          Hidden: !zC.bag
                        }),
                        ...qz("inventory"),
                        children: (0, xC.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, xC.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, xC.jsx)(KC.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, xC.jsx)(pz, {
                      next: !1,
                      hidden: wC.has("arrows")
                    }), (0, xC.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== SC && SC.map(((CC, zC) => (0, xC.jsx)(Wz, {
                        item: CC,
                        selected: CC.classList.contains("Selected")
                      }, zC))), null === SC && Az.map((CC => {
                        const zC = xz[CC];
                        return (0, xC.jsx)("div", {
                          className: oC()("InvenItem", {
                            Selected: 0 === CC
                          }),
                          children: zC && (0, xC.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, xC.jsx)(KC.c, {
                              name: zC
                            })
                          })
                        }, CC)
                      }))]
                    }), (0, xC.jsx)(pz, {
                      next: !0,
                      hidden: wC.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, xC.jsx)("div", {
              className: "BottomRightElements",
              children: (0, xC.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== gC && nz.map((CC => {
                  const zC = gC[CC];
                  return zC && (0, xC.jsx)(Fz, {
                    id: Gz[CC],
                    slot: CC,
                    face: zC,
                    className: Rz[CC],
                    hidden: wC
                  }, CC)
                })), null === gC && (0, xC.jsxs)(xC.Fragment, {
                  children: [(0, xC.jsx)(Fz, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: wC
                  }), (0, xC.jsx)(Fz, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: wC
                  }), bC && (0, xC.jsxs)(xC.Fragment, {
                    children: [(0, xC.jsx)(Fz, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: wC
                    }), (0, xC.jsx)(Fz, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: wC
                    })]
                  }), !bC && (0, xC.jsx)(Fz, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: MC("touchKeys:scope"),
                    hidden: wC
                  }), (0, xC.jsx)(Fz, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: MC("touchKeys:fly"),
                    hidden: wC
                  }), (0, xC.jsx)(Fz, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: wC
                  })]
                })]
              })
            })]
          })
        }), (0, xC.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, xC.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, xC.jsxs)("div", {
              className: oC()("Joystick Resting HudPreviewJoystick", {
                Floating: !nC
              }),
              ...qz("joystick"),
              children: [(0, xC.jsx)("div", {
                className: "JoystickBase"
              }), (0, xC.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function Iz() {
      const [CC, zC] = (0, wC.useState)({}), ZC = (0, wC.useCallback)((CC => {
        zC((zC => [...new Set([...Object.keys(zC), ...Object.keys(CC)])].every((ZC => zC[ZC] === CC[ZC])) ? zC : CC))
      }), []);
      return [CC, ZC]
    }
    const iz = .05;

    function vz(CC) {
      var zC;
      let {
        selected: ZC,
        layout: wC,
        actionButtons: bC,
        keyNames: nC,
        overlaps: fC,
        scaleCaps: FC,
        joystickFixed: WC,
        onScale: NC,
        onHidden: MC,
        onReset: gC,
        locked: SC,
        lockable: pC,
        onLocked: PC,
        extra: GC
      } = CC;
      const {
        t: RC
      } = (0, QC.y)(), AC = ZC ? cC[ZC] : null, JC = null !== ZC && SC.has(ZC), IC = (ZC && wC.hudElements[ZC] || YC.p)[2], iC = null !== (zC = ZC && FC[ZC]) && void 0 !== zC ? zC : YC.i, vC = CC => {
        ZC && NC(ZC, Math.min(iC, Math.round(100 * (IC + .1 * CC)) / 100))
      };
      return (0, xC.jsxs)(xC.Fragment, {
        children: [(0, xC.jsxs)("div", {
          className: oC()("HudQuickName SmallTextBold", {
            Overlap: fC.length > 0
          }),
          children: [fC.length > 0 && (0, xC.jsx)(KC.c, {
            name: "triangle-exclamation"
          }), AC ? rC(AC.id, bC, RC, nC) : RC("hudLayout:fullScreenHint"), fC.length > 0 && (0, xC.jsx)("span", {
            className: "HudQuickOverlap",
            children: RC("hudLayout:overlapsShort", {
              names: sC(fC, bC, RC, nC)
            })
          })]
        }), (null === AC || void 0 === AC ? void 0 : AC.scale) && (0, xC.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, xC.jsx)(qC.O, {
            disabled: JC || IC <= YC.l,
            ariaLabel: RC("hudLayout:smaller"),
            onClick: () => {
              vC(-1)
            },
            children: (0, xC.jsx)(KC.c, {
              name: "minus"
            })
          }), (0, xC.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*IC)}%`
          }), (0, xC.jsx)(qC.O, {
            disabled: JC || IC >= iC,
            ariaLabel: RC("hudLayout:larger"),
            onClick: () => {
              vC(1)
            },
            children: (0, xC.jsx)(KC.c, {
              name: "plus"
            })
          })]
        }), (AC || GC) && (0, xC.jsxs)("div", {
          className: "HudQuickActions",
          children: [AC && (0, xC.jsxs)(xC.Fragment, {
            children: [(0, xC.jsx)(DC, {
              id: AC.id,
              actionButtons: bC,
              keyNames: nC,
              locked: JC,
              lockable: pC(AC.id),
              onLocked: PC
            }), (0, xC.jsx)(aC, {
              id: AC.id,
              elements: wC.hudElements,
              actionButtons: bC,
              keyNames: nC,
              onHidden: MC
            }), (0, xC.jsx)(tC, {
              id: AC.id,
              elements: wC.hudElements,
              actionButtons: bC,
              keyNames: nC,
              locked: JC,
              onReset: gC
            }), BC(AC.id, WC) && (0, xC.jsx)(OC, {})]
          }), GC]
        })]
      })
    }
    var ez = ZC(1072),
      hz = ZC(4339);
    const Kz = "HudPreviewDoc",
      Yz = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      dz = new Set([Kz, ...Object.values(Yz)]),
      mz = new Set(YC.B.map(wz.s)),
      Hz = new Set(wz.h),
      Ez = 'style, link[rel="stylesheet"]';

    function lz(CC, zC, ZC, QC) {
      const wC = new Map,
        bC = new Set,
        nC = new URL(CC.baseURI).origin,
        fC = zC => {
          var ZC;
          if ("LINK" !== zC.nodeName) return !0;
          const QC = null === (ZC = zC.getAttribute("href")) || void 0 === ZC ? void 0 : ZC.trim();
          if (!QC) return !1;
          try {
            return new URL(QC, CC.baseURI).origin === nC
          } catch {
            return !1
          }
        };
      let oC = null;
      const qC = () => {
          oC !== (0 === bC.size) && (oC = 0 === bC.size, null === QC || void 0 === QC || QC(oC))
        },
        FC = CC => {
          const zC = CC.cloneNode(!0);
          if ("LINK" === zC.tagName) {
            bC.add(zC);
            const CC = () => {
              bC.delete(zC), qC()
            };
            zC.addEventListener("load", CC), zC.addEventListener("error", CC), ZC && zC.addEventListener("load", ZC)
          }
          return zC
        },
        WC = () => {
          const QC = function(CC) {
              const zC = [...CC.body.children].filter((CC => CC.matches(Ez)));
              return [...CC.head.querySelectorAll(Ez), ...zC]
            }(CC).filter(fC),
            nC = new Set(QC);
          for (const [CC, zC] of wC) nC.has(CC) || (zC.remove(), wC.delete(CC), bC.delete(zC));
          let oC = null;
          for (let CC = QC.length - 1; CC >= 0; CC--) {
            const bC = QC[CC];
            let nC = wC.get(bC);
            nC ? "STYLE" === bC.tagName && nC.textContent !== bC.textContent && (nC.textContent = bC.textContent, null === ZC || void 0 === ZC || ZC()) : (nC = FC(bC), wC.set(bC, nC), zC.head.insertBefore(nC, oC)), oC = nC
          }
          qC()
        };
      WC();
      const NC = new MutationObserver(WC);
      return NC.observe(CC.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), NC.observe(CC.body, {
        childList: !0
      }), () => {
        NC.disconnect()
      }
    }

    function Xz(CC, zC, ZC) {
      let {
        keysAbove: QC
      } = ZC;
      const wC = [...CC.documentElement.classList].filter((CC => !dz.has(CC) && !Hz.has(CC))),
        bC = [...zC.documentElement.classList].filter((CC => Hz.has(CC))),
        nC = [Kz, Yz.hotbar, Yz.hasShop, Yz.hasBag];
      QC && nC.push(Yz.keysAbove), zC.documentElement.className = [...wC, ...nC, ...bC].join(" ")
    }
    const cz = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function uz(CC, zC, ZC, QC, wC) {
      const bC = (0, YC.D)(ZC, QC, "joystick"),
        nC = (0, wz.v)((0, wz.I)(ZC, QC, wC), QC),
        fC = nC.classes.filter((CC => !mz.has(CC))),
        oC = zC.documentElement;
      (0, wz.P)({
        ...nC,
        classes: fC
      }, {
        vars: oC,
        safe: oC,
        classes: oC
      });
      const qC = (0, wz.A)(ZC.hudLayouts[QC].hudSafe, window.innerWidth, window.innerHeight, rz(), (0, wz.L)(zC));
      oC.style.setProperty("--preview-joystick-shift-left", `${qC[3]}px`), oC.style.setProperty("--preview-joystick-shift-bottom", `${qC[2]}px`), oC.style.setProperty("--preview-joystick-scale", String(bC[2])), (0, hz.f)(oC, zC, ZC, QC);
      for (const FC of cz) oC.style.setProperty(FC, CC.documentElement.style.getPropertyValue(FC) || "0px")
    }

    function rz() {
      return (0, wz.G)(FC.b.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function sz(CC) {
      return (0, wz.p)(rz(), (0, wz.L)(CC))
    }

    function Tz(CC, zC, ZC) {
      const QC = CC.documentElement.style,
        wC = (0, wz.C)(zC),
        bC = QC.getPropertyValue(wC);
      try {
        return ZC((CC => {
          QC.setProperty(wC, String(CC))
        }))
      } finally {
        "" === bC ? QC.removeProperty(wC) : QC.setProperty(wC, bC)
      }
    }

    function az(CC, zC) {
      const [ZC, QC] = Tz(CC, "hotbar", (zC => {
        const ZC = ZC => {
          var QC, wC;
          return zC(ZC), null !== (QC = null === (wC = CC.querySelector(".HotBarGameItemsContainer")) || void 0 === wC ? void 0 : wC.getBoundingClientRect().width) && void 0 !== QC ? QC : 0
        };
        return [ZC(1), ZC(YC.i)]
      }));
      return ZC <= 0 ? YC.i : Math.min(YC.i, Math.max(1, Math.floor(QC / ZC / zC + 1e-6) * zC))
    }
    const tz = 3,
      Dz = .5,
      jz = CC => CC.right - CC.left;
    const yz = (CC, zC) => Math.abs((0, Zz.d)(CC).x - (0, Zz.d)(zC).x) + Math.abs((0, Zz.d)(CC).y - (0, Zz.d)(zC).y) + Math.abs(jz(CC) - jz(zC));

    function Lz(CC, zC, ZC, QC, wC) {
      let {
        canKeep: bC = () => !0,
        passes: nC = tz,
        before: fC,
        keysAboveOf: oC
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const qC = void 0 !== oC && oC(CC) !== oC(zC),
        FC = zC.hudLayouts[ZC].hudLocked.filter((CC => bC(CC) && !(qC && "inventory" === CC))),
        WC = new Set(FC);
      if (0 === WC.size) return zC;
      const NC = [...HC].filter((QC => !FC.includes(QC) && (0, YC.D)(CC, ZC, QC).join() === (0, YC.D)(zC, ZC, QC).join())),
        MC = CC => {
          const zC = (0, Zz.D)(NC.flatMap((zC => CC[zC] ? [CC[zC]] : [])));
          return {
            ...CC,
            cluster: null !== zC && void 0 !== zC ? zC : void 0
          }
        },
        gC = CC => {
          const zC = wC(CC);
          return zC && MC(zC)
        },
        SC = fC ? MC(fC) : gC(CC);
      let pC = SC && gC(zC);
      if (!SC || !pC) return zC;
      let PC = zC;
      for (let GC = 0; GC < nC && WC.size > 0; GC++) {
        const CC = new Map;
        for (const zC of WC) {
          const wC = SC[zC],
            bC = pC[zC],
            nC = wC && bC ? Uz(zC, (0, YC.D)(PC, ZC, zC), wC, bC, QC) : null;
          nC ? CC.set(zC, nC) : WC.delete(zC)
        }
        if (0 === CC.size) break;
        let wC = PC;
        for (const [zC, QC] of CC) wC = (0, YC.db)(wC, ZC, zC, QC);
        const bC = gC(wC);
        if (!bC) return zC;
        let nC = PC;
        for (const [zC, QC] of CC) {
          const CC = bC[zC];
          CC && yz(SC[zC], CC) < yz(SC[zC], pC[zC]) - Dz ? nC = (0, YC.db)(nC, ZC, zC, QC) : WC.delete(zC)
        }
        if (nC === PC) break;
        const fC = [...CC.keys()].every((CC => WC.has(CC)));
        if (PC = nC, pC = fC ? bC : gC(PC), !pC) return zC
      }
      return wC(PC), PC
    }

    function Uz(CC, zC, ZC, QC, wC) {
      let [bC, nC, fC] = zC;
      const oC = YC.x[CC],
        qC = {};
      oC.scale && jz(QC) > 0 && Math.abs(jz(ZC) - jz(QC)) > Dz && (qC.scale = Math.max(YC.l, Math.min(YC.i, fC * jz(ZC) / jz(QC))));
      const FC = (0, Zz.d)(ZC).x - (0, Zz.d)(QC).x,
        WC = (0, Zz.d)(ZC).y - (0, Zz.d)(QC).y;
      return oC.move && (Math.abs(FC) > Dz || Math.abs(WC) > Dz) && (qC.dx = bC + FC / wC.width, qC.dy = nC + WC / wC.height), void 0 === qC.scale && void 0 === qC.dx ? null : qC
    }
    let Bz = 0;

    function Oz() {
      return Bz > 0
    }
    const kz = CC => 0 === CC.dx && 0 === CC.dy,
      Vz = .001,
      CZ = CC => Math.abs(CC.dx) >= 5e-4 || Math.abs(CC.dy) >= 5e-4 ? CC : {
        dx: CC.dx,
        dy: CC.dy < 0 ? -.001 : Vz
      };

    function zZ(CC) {
      let {
        preview: zC,
        stageRef: ZC,
        ringRef: QC,
        centreLineRef: bC,
        snapCentre: nC,
        ready: fC,
        measure: oC,
        k: qC,
        viewport: FC,
        boxes: WC,
        pieces: NC,
        selected: MC,
        insets: gC,
        layout: SC,
        canMove: pC,
        onSelect: PC,
        onMove: GC
      } = CC;
      const RC = (0, wC.useRef)(null),
        AC = (0, wC.useCallback)((() => null !== RC.current), []),
        xC = (CC, zC) => {
          if (!zC) return null;
          const ZC = (0, Zz.d)(CC.origin),
            QC = (0, Zz.d)(zC),
            wC = (CC.to.dx - CC.from.dx) * FC.width,
            bC = (CC.to.dy - CC.from.dy) * FC.height,
            nC = zC.right - zC.left,
            fC = zC.bottom - zC.top;
          return {
            skew: {
              x: QC.x - ZC.x - wC,
              y: QC.y - ZC.y - bC
            },
            box: {
              left: ZC.x - nC / 2,
              top: ZC.y - fC / 2,
              right: ZC.x + nC / 2,
              bottom: ZC.y + fC / 2
            }
          }
        },
        JC = (CC, ZC) => {
          var wC;
          const nC = RC.current;
          if (!nC || nC.pointerId !== CC.pointerId) return;
          RC.current = null, null === (wC = bC.current) || void 0 === wC || wC.classList.remove("Shown", "Snapped");
          const fC = QC.current;
          if (fC && null !== nC.ringStyle && fC.setAttribute("style", nC.ringStyle), ZC && nC.moved) {
            const CC = kz(nC.to) ? null : oC(nC.id),
              zC = CC ? (0, Zz.A)(CC, (0, Zz.w)(FC.width, FC.height, gC)) : {
                x: 0,
                y: 0
              },
              ZC = {
                dx: nC.to.dx + zC.x / FC.width,
                dy: nC.to.dy + zC.y / FC.height
              },
              QC = kz(nC.to) ? ZC : CZ(ZC);
            GC(nC.id, QC.dx, QC.dy)
          } else zC(nC.id, null), ZC && nC.tapPick && PC(nC.tapPick)
        };
      return {
        busy: AC,
        handlers: {
          onPointerDown: CC => {
            var zC;
            if (!fC || RC.current || !CC.target.closest(".HudPreviewHandle")) return;
            const QC = ZC.current.getBoundingClientRect(),
              wC = {
                x: (CC.clientX - QC.left) / qC,
                y: (CC.clientY - QC.top) / qC
              },
              bC = (0, Zz.q)(wC, NC, 40 / qC),
              nC = "cluster" === MC && void 0 !== WC.cluster && null !== (0, Zz.q)(wC, [{
                id: "cluster",
                box: WC.cluster
              }], 40 / qC),
              oC = "menu" === MC && void 0 !== WC.menu && (0, Zz.f)(WC.menu, wC) && ("menu" === bC || null !== bC && (0, Qz.B)(bC, SC.hudElements[bC])),
              FC = nC ? "cluster" : oC ? "menu" : null,
              gC = null !== FC,
              GC = null !== FC && void 0 !== FC ? FC : bC;
            if (!GC) return;
            if (function(CC) {
                Bz++;
                const zC = ZC => {
                  ZC.pointerId === CC && (Bz = Math.max(0, Bz - 1), window.removeEventListener("pointerup", zC, !0), window.removeEventListener("pointercancel", zC, !0))
                };
                window.addEventListener("pointerup", zC, !0), window.addEventListener("pointercancel", zC, !0)
              }(CC.pointerId), !pC(GC)) return void PC(gC && bC ? bC : GC);
            PC(GC);
            const [AC, xC] = null !== (zC = SC.hudElements[GC]) && void 0 !== zC ? zC : [0, 0], JC = {
              dx: AC,
              dy: xC
            }, IC = {
              skew: {
                x: 0,
                y: 0
              },
              box: WC[GC]
            };
            RC.current = {
              id: GC,
              pointerId: CC.pointerId,
              startX: CC.clientX,
              startY: CC.clientY,
              origin: WC[GC],
              from: JC,
              to: JC,
              moved: !1,
              home: kz(JC) ? {
                centre: (0, Zz.d)(WC[GC]),
                anchor: IC
              } : null,
              away: kz(JC) ? null : IC,
              anchor: IC,
              ringStyle: null,
              tapPick: gC ? bC : null
            }, CC.currentTarget.setPointerCapture(CC.pointerId)
          },
          onPointerMove: CC => {
            const ZC = RC.current;
            if (!ZC || ZC.pointerId !== CC.pointerId) return;
            const wC = CC.clientX - ZC.startX,
              fC = CC.clientY - ZC.startY;
            if (!ZC.moved && Math.hypot(wC, fC) < 5) return;
            const WC = !ZC.moved;
            var NC, MC;
            (ZC.moved = !0, WC) && (ZC.ringStyle = null !== (NC = null === (MC = QC.current) || void 0 === MC ? void 0 : MC.getAttribute("style")) && void 0 !== NC ? NC : null);
            const SC = (0, Zz.w)(FC.width, FC.height, gC);
            if (!ZC.home) {
              var pC;
              ZC.to = {
                dx: 0,
                dy: 0
              }, zC(ZC.id, ZC.to);
              const CC = oC(ZC.id),
                QC = null !== (pC = xC(ZC, CC)) && void 0 !== pC ? pC : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: ZC.origin
                },
                wC = (0, Zz.d)(ZC.origin);
              ZC.home = {
                centre: CC ? (0, Zz.d)(CC) : {
                  x: wC.x - ZC.from.dx * FC.width,
                  y: wC.y - ZC.from.dy * FC.height
                },
                anchor: QC
              }
            }
            const PC = ZC.home;
            let GC = !1;
            const AC = CC => {
                GC = !1;
                let QC = (0, Zz.h)(CC.box, wC / qC, fC / qC, SC);
                const bC = FC.width / 2;
                if (nC && Math.abs((0, Zz.d)(ZC.origin).x + QC.x - bC) <= 8 / qC) {
                  const zC = bC - (0, Zz.d)(ZC.origin).x,
                    wC = (0, Zz.h)(CC.box, zC, QC.y, SC);
                  GC = Math.abs(wC.x - zC) < .01, GC && (QC = wC)
                }
                const oC = (0, Zz.o)(ZC.from, QC.x - CC.skew.x, QC.y - CC.skew.y, FC.width, FC.height);
                ZC.to = CZ(oC), ZC.anchor = CC, zC(ZC.id, ZC.to)
              },
              JC = (0, Zz.h)(PC.anchor.box, wC / qC, fC / qC, SC),
              IC = bC.current,
              iC = (0, Zz.d)(ZC.origin),
              vC = ((0, YC.N)(ZC.id) ? 20 : 6) / qC;
            if (Math.abs(iC.x + JC.x - PC.centre.x) <= vC && Math.abs(iC.y + JC.y - PC.centre.y) <= vC) ZC.to = {
              dx: 0,
              dy: 0
            }, ZC.anchor = PC.anchor, GC = nC && Math.abs(PC.centre.x - FC.width / 2) < 1, zC(ZC.id, ZC.to);
            else if (ZC.away) AC(ZC.away);
            else {
              var eC;
              AC(PC.anchor), ZC.away = null !== (eC = xC(ZC, oC(ZC.id))) && void 0 !== eC ? eC : PC.anchor, AC(ZC.away)
            }
            null === IC || void 0 === IC || IC.classList.add("Shown"), null === IC || void 0 === IC || IC.classList.toggle("Snapped", GC), (CC => {
              const zC = QC.current;
              if (zC) {
                const {
                  skew: ZC,
                  box: QC
                } = CC.anchor;
                zC.style.left = QC.left * qC + "px", zC.style.top = QC.top * qC + "px", zC.style.width = (QC.right - QC.left) * qC + "px", zC.style.height = (QC.bottom - QC.top) * qC + "px", zC.style.translate = `${((CC.to.dx-CC.from.dx)*FC.width+ZC.x)*qC}px ${((CC.to.dy-CC.from.dy)*FC.height+ZC.y)*qC}px`
              }
            })(ZC)
          },
          onPointerUp: CC => {
            JC(CC, !0)
          },
          onPointerCancel: CC => {
            JC(CC, !1)
          }
        }
      }
    }

    function ZZ(CC, zC) {
      return Object.keys(CC).filter((CC => CC !== zC)).map((zC => CC[zC]))
    }

    function QZ(CC) {
      const zC = [],
        ZC = zC => (0, YC.N)(zC) && !CC.documentElement.classList.contains((0, wz.y)(zC));
      for (const nC of CC.querySelectorAll(`[${uC}]`)) {
        const CC = ZC(nC.getAttribute(uC)) ? nC.querySelector(".ScaleOnHover") : null,
          QC = (null !== CC && void 0 !== CC ? CC : nC).getBoundingClientRect();
        (QC.width > 0 || QC.height > 0) && zC.push({
          id: nC.getAttribute(uC),
          box: {
            left: QC.left,
            top: QC.top,
            right: QC.right,
            bottom: QC.bottom
          }
        })
      }
      const QC = CC => (0, Zz.D)(zC.filter((zC => {
          let {
            id: ZC
          } = zC;
          return CC(ZC)
        })).map((CC => {
          let {
            box: zC
          } = CC;
          return zC
        }))),
        wC = {};
      for (const nC of new Set(zC.map((CC => CC.id)))) wC[nC] = QC((CC => CC === nC));
      const bC = QC((CC => HC.has(CC)));
      return bC && (wC.cluster = bC), {
        boxes: wC,
        pieces: zC
      }
    }

    function wZ(CC, zC, ZC) {
      const QC = zC.right - zC.left,
        wC = zC.bottom - zC.top;
      return Tz(CC, "cluster", (zC => {
        const bC = ZC => {
            zC(ZC);
            const QC = [...CC.querySelectorAll(`[${uC}]:not(.HudPreviewGhost)`)].filter((CC => HC.has(CC.getAttribute(uC)))).map((CC => {
                const zC = CC.getBoundingClientRect();
                return {
                  left: zC.left,
                  top: zC.top,
                  right: zC.right,
                  bottom: zC.bottom
                }
              })),
              wC = (0, Zz.D)(QC);
            return wC ? {
              w: wC.right - wC.left,
              h: wC.bottom - wC.top
            } : null
          },
          nC = CC => !CC || CC.w <= QC && CC.h <= wC,
          fC = bC(1),
          oC = bC(YC.i);
        if (!fC || nC(oC)) return YC.i;
        const qC = (CC, zC, ZC) => zC > CC ? 1 + (ZC - CC) * (YC.i - 1) / (zC - CC) : YC.i;
        let FC = Math.floor(Math.min(YC.i, qC(fC.w, oC.w, QC), qC(fC.h, oC.h, wC)) / ZC + 1e-6) * ZC;
        for (; FC > 1 && !nC(bC(FC));) FC = Math.round(100 * (FC - ZC)) / 100;
        return Math.max(1, FC)
      }))
    }

    function bZ(CC) {
      Xz(document, CC, {
        keysAbove: !1
      });
      const zC = parseFloat(getComputedStyle(CC.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        ZC = Number.isFinite(zC) && zC < 0;
      return Xz(document, CC, {
        keysAbove: ZC
      }), ZC
    }

    function nZ(CC, zC) {
      let {
        layout: ZC,
        orientation: QC,
        viewport: bC,
        replicaKey: nC,
        joystickFixed: fC,
        busy: oC
      } = zC;
      const [qC, FC] = (0, wC.useState)(null), [WC, NC] = (0, wC.useState)({
        boxes: {},
        pieces: []
      }), [MC, gC] = (0, wC.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [SC, pC] = (0, wC.useState)(!1), [PC, GC] = (0, wC.useState)(!1), [RC, AC] = (0, wC.useState)(!1), xC = (0, wC.useCallback)((CC => {
        GC(CC), CC && AC(!0)
      }), []), JC = ZC.hudLayouts[QC].hudSafe;
      (0, wC.useLayoutEffect)((() => {
        const zC = CC.current.contentDocument;
        zC.open(), zC.write("<!DOCTYPE html><html><head></head><body></body></html>"), zC.close(), FC(zC)
      }), [CC]);
      const IC = (0, wC.useCallback)((() => {
          qC && ((0, Qz.F)(qC), NC(QZ(qC)), gC(function(CC, zC) {
            const ZC = sz(CC),
              [QC, wC, bC, nC] = zC ? (0, wz.r)(zC, window.innerWidth, window.innerHeight, ZC) : ZC;
            return {
              top: QC,
              right: wC,
              bottom: bC,
              left: nC
            }
          }(qC, JC)))
        }), [qC, JC]),
        iC = (0, wC.useCallback)((() => {
          qC && pC(bZ(qC))
        }), [qC]),
        vC = (0, wC.useRef)((() => {}));
      return vC.current = () => {
        iC(), oC() || IC()
      }, (0, wC.useLayoutEffect)((() => {
        if (qC) return lz(document, qC, (() => {
          vC.current()
        }), xC)
      }), [qC, xC]), (0, wC.useLayoutEffect)(iC, [iC, bC]), (0, wC.useLayoutEffect)((() => {
        qC && (Xz(document, qC, {
          keysAbove: SC
        }), uz(document, qC, ZC, QC, fC), iC(), IC())
      }), [qC, ZC, QC, SC, nC, fC, bC, IC, iC]), (0, wC.useEffect)((() => {
        var CC;
        if (!qC) return;
        const zC = new ResizeObserver((() => {
          oC() || IC()
        }));
        for (const ZC of qC.querySelectorAll(`[${uC}]`)) zC.observe(ZC);
        return null === (CC = qC.fonts) || void 0 === CC || CC.ready.then(IC), () => {
          zC.disconnect()
        }
      }), [qC, IC, oC, nC]), {
        doc: qC,
        boxes: WC.boxes,
        pieces: WC.pieces,
        insets: MC,
        keysAbove: SC,
        ready: PC,
        settled: RC
      }
    }
    const fZ = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      oZ = (CC, zC, ZC) => {
        const QC = CC => (0, Qz.B)(CC, ZC.hudElements[CC]);
        return "cluster" === CC && HC.has(zC) || "cluster" === zC && HC.has(CC) || "menu" === CC && QC(zC) || "menu" === zC && QC(CC) || fZ.some((QC => {
          let [wC, bC] = QC;
          const nC = ZC.hudElements.hotbar,
            fC = "inventory" === bC && ZC.hudLocked.includes(bC) && void 0 !== nC && !(0, YC.J)(nC);
          return (CC === wC && zC === bC || CC === bC && zC === wC) && !fC
        }))
      };
    const qZ = ["Above", "Below", "Left", "Right"];

    function FZ(CC, zC, ZC, QC, wC) {
      const bC = ZC[CC],
        nC = (bC.left + bC.right) / 2,
        fC = (bC.top + bC.bottom) / 2,
        oC = (7.5 * zC.length + 14) / QC,
        qC = 18 / QC,
        FC = {
          Above: {
            left: nC - oC / 2,
            top: bC.top - qC,
            right: nC + oC / 2,
            bottom: bC.top
          },
          Below: {
            left: nC - oC / 2,
            top: bC.bottom,
            right: nC + oC / 2,
            bottom: bC.bottom + qC
          },
          Left: {
            left: bC.left - oC,
            top: fC - qC / 2,
            right: bC.left,
            bottom: fC + qC / 2
          },
          Right: {
            left: bC.right,
            top: fC - qC / 2,
            right: bC.right + oC,
            bottom: fC + qC / 2
          }
        },
        WC = ZZ(ZC, CC),
        NC = {
          left: 0,
          top: 0,
          right: wC.width,
          bottom: wC.height
        };
      return qZ[(0, Zz.n)(qZ.map((CC => FC[CC])), WC, {
        bounds: NC
      })]
    }

    function WZ() {
      const [CC, zC] = (0, Cz.c)();
      return (0, wC.useMemo)((() => ({
        width: CC,
        height: zC
      })), [CC, zC])
    }

    function NZ(CC) {
      var zC;
      const {
        layout: ZC,
        orientation: bC,
        selected: nC,
        onSelect: fC,
        onMove: qC,
        canMove: FC,
        actionButtons: WC,
        joystickFixed: NC,
        presence: MC,
        keyNames: SC,
        maxHeight: pC,
        fill: PC = !1,
        apiRef: GC
      } = CC, {
        t: RC
      } = (0, QC.y)(), AC = WZ(), JC = (null !== (zC = (0, gC.h)("maxAuraLevel")) && void 0 !== zC ? zC : 0) > 0, IC = ZC.hudLayouts[bC], iC = (0, wC.useRef)(null), vC = (0, wC.useRef)(null), eC = (0, wC.useRef)(null), hC = (0, wC.useRef)(null), dC = (0, wC.useRef)(null), mC = (0, wC.useRef)(null), EC = (0, zz.e)(iC).width, lC = PC ? 1 : EC > 0 ? (0, Zz.u)(EC, AC.width, AC.height, pC) : 0, XC = (0, wC.useRef)((() => !1)), cC = (0, wC.useCallback)((() => XC.current()), []), {
        doc: uC,
        boxes: sC,
        pieces: TC,
        insets: aC,
        keysAbove: tC,
        ready: DC,
        settled: jC
      } = nZ(eC, {
        layout: ZC,
        orientation: bC,
        viewport: AC,
        replicaKey: `${WC}:${NC}:${JC}`,
        joystickFixed: NC,
        busy: cC
      }), yC = (0, wC.useCallback)((CC => {
        uC && uz(document, uC, CC, bC, NC)
      }), [uC, bC, NC]), LC = (0, wC.useCallback)((CC => uC && jC ? (yC(CC), bZ(uC), function(CC) {
        let {
          boxes: zC,
          pieces: ZC
        } = CC;
        const QC = ZC.find((CC => "inventory" === CC.id));
        if (!QC || !zC.inventory) return zC;
        const wC = (0, Zz.d)(zC.inventory),
          bC = jz(QC.box) / 2,
          nC = (QC.box.bottom - QC.box.top) / 2;
        return {
          ...zC,
          inventory: {
            left: wC.x - bC,
            top: wC.y - nC,
            right: wC.x + bC,
            bottom: wC.y + nC
          }
        }
      }(QZ(uC))) : null), [uC, jC, yC]), UC = (0, wC.useCallback)((CC => !!uC && (yC(CC), bZ(uC))), [uC, yC]), BC = (0, wC.useRef)(null), OC = (0, wC.useRef)(null), VC = (0, wC.useRef)(ZC);
      VC.current = ZC;
      const Cz = (0, wC.useCallback)((() => {
        null !== BC.current && (cancelAnimationFrame(BC.current), BC.current = null)
      }), []);
      (0, wC.useEffect)((() => Cz), [ZC, Cz]);
      const {
        lockable: bz
      } = CC, nz = (0, wC.useCallback)((CC => {
        if (yC(CC), !jC || 0 === ZC.hudLayouts[bC].hudLocked.length) return;
        const zC = ZC;
        Cz(), BC.current = requestAnimationFrame((() => {
          var ZC;
          if (BC.current = null, VC.current !== zC) return;
          const QC = (null === (ZC = OC.current) || void 0 === ZC ? void 0 : ZC.from) === zC ? OC.current.boxes : LC(zC);
          QC && (OC.current = {
            from: zC,
            boxes: QC
          }), yC(QC ? Lz(zC, CC, bC, AC, LC, {
            canKeep: bz,
            passes: 1,
            before: QC,
            keysAboveOf: UC
          }) : CC)
        }))
      }), [yC, jC, ZC, bC, AC, LC, UC, bz, Cz]), fz = zZ({
        preview: (CC, zC) => {
          zC ? nz((0, YC.db)(ZC, bC, CC, zC)) : (Cz(), yC(ZC))
        },
        stageRef: vC,
        ringRef: hC,
        centreLineRef: dC,
        snapCentre: ZC.hudSnapCentre,
        ready: jC,
        measure: CC => {
          var zC;
          return uC && DC && null !== (zC = QZ(uC).boxes[CC]) && void 0 !== zC ? zC : null
        },
        k: lC,
        viewport: AC,
        boxes: sC,
        pieces: TC,
        selected: nC,
        insets: aC,
        layout: IC,
        canMove: FC,
        onSelect: fC,
        onMove: (CC, zC, ZC) => {
          Cz(), qC(CC, zC, ZC)
        }
      });
      (0, wC.useLayoutEffect)((() => {
        XC.current = fz.busy
      }), [fz.busy]);
      const oz = (0, wC.useRef)([]),
        qz = (0, wC.useRef)(IC.hudElements);
      (0, wC.useEffect)((() => {
        for (const wC of Object.keys(IC.hudElements)) {
          var CC, zC, ZC, QC;
          (null !== (CC = null === (zC = IC.hudElements[wC]) || void 0 === zC ? void 0 : zC[2]) && void 0 !== CC ? CC : 1) > (null !== (ZC = null === (QC = qz.current[wC]) || void 0 === QC ? void 0 : QC[2]) && void 0 !== ZC ? ZC : 1) && FC(wC) && !(0, Qz.B)(wC, IC.hudElements[wC]) && oz.current.push(wC)
        }
        qz.current = IC.hudElements
      }), [IC.hudElements, FC]), (0, wC.useEffect)((() => {
        if (!DC) return;
        const CC = oz.current.shift(),
          zC = CC && sC[CC];
        if (!CC || !zC || fz.busy()) return;
        const ZC = (0, Zz.A)(zC, (0, Zz.w)(AC.width, AC.height, aC));
        if (0 !== ZC.x || 0 !== ZC.y) {
          var QC;
          const [zC, wC] = null !== (QC = IC.hudElements[CC]) && void 0 !== QC ? QC : [0, 0];
          qC(CC, zC + ZC.x / AC.width, wC + ZC.y / AC.height)
        }
      }), [sC, DC]), (0, wC.useImperativeHandle)(GC, (() => ({
        setScale: (CC, zC) => {
          nz((0, YC.db)(ZC, bC, CC, {
            scale: zC
          }))
        },
        setOpacity: CC => {
          yC({
            ...ZC,
            hudKeyOpacity: CC
          })
        },
        keepLocks: (CC, zC) => (Cz(), Lz(CC, zC, bC, AC, LC, {
          canKeep: bz,
          keysAboveOf: UC
        })),
        setSafe: CC => {
          nz((0, YC.ib)(ZC, bC, CC)), mC.current && (mC.current.style.inset = (0, wz.r)(CC, AC.width, AC.height, sz(null !== uC && void 0 !== uC ? uC : document)).map((CC => CC * lC + "px")).join(" "))
        }
      })), [yC, nz, LC, UC, Cz, bz, uC, ZC, bC, AC, lC]);
      const Fz = new Set(Object.keys(IC.hudElements).filter((CC => (0, YC.u)(IC.hudElements, CC)))),
        Wz = nC ? sC[nC] : void 0,
        Nz = nC ? rC(nC, WC, RC, SC) : "",
        Mz = (0, ez.h)(AC.width, AC.height),
        gz = nC ? function(CC, zC, ZC, QC) {
          const wC = CC => (0, YC.u)(ZC.hudElements, CC) || (0, Qz.x)(CC, ZC, QC);
          if (wC(CC)) return [];
          const bC = zC.filter((zC => {
              let {
                id: ZC
              } = zC;
              return "cluster" === CC ? HC.has(ZC) : ZC === CC
            })),
            nC = new Set;
          for (const fC of zC) fC.id === CC || nC.has(fC.id) || oZ(CC, fC.id, ZC) || wC(fC.id) || void 0 === ZC.hudElements[CC] && void 0 === ZC.hudElements[fC.id] || bC.some((CC => {
            let {
              id: zC,
              box: ZC
            } = CC;
            return zC !== fC.id && (0, Zz.g)(ZC, fC.box, 2)
          })) && nC.add(fC.id);
          return [...nC]
        }(nC, TC, IC, Mz) : [],
        Sz = new Set((0, Qz.w)(IC.hudElements)),
        pz = (0, Qz.L)(IC, (0, Qz.K)(MC.rowIcons)).state,
        Pz = gz.join(),
        Gz = (0, wC.useRef)(CC.onReady);
      Gz.current = CC.onReady, (0, wC.useEffect)((() => {
        var CC;
        null === (CC = Gz.current) || void 0 === CC || CC.call(Gz, jC)
      }), [jC]);
      const Rz = (0, wC.useRef)(CC.onMeasured);
      (0, wC.useLayoutEffect)((() => {
        Rz.current = CC.onMeasured
      })), (0, wC.useEffect)((() => {
        var CC;
        const zC = uC ? {
          hotbar: az(uC, iz),
          cluster: wZ(uC, (0, Zz.w)(AC.width, AC.height, aC), iz)
        } : {};
        null === (CC = Rz.current) || void 0 === CC || CC.call(Rz, sC, Pz ? Pz.split(",") : [], zC)
      }), [sC, Pz, uC, AC, aC]);
      const Az = CC => ({
        left: CC.left * lC,
        top: CC.top * lC,
        width: (CC.right - CC.left) * lC,
        height: (CC.bottom - CC.top) * lC
      });
      return (0, xC.jsx)("div", {
        ref: iC,
        className: oC()("HudPreviewBox", {
          Fill: PC
        }),
        style: {
          height: AC.height * lC
        },
        children: (0, xC.jsxs)("div", {
          ref: vC,
          className: "HudPreviewStage",
          style: {
            width: AC.width * lC,
            height: AC.height * lC
          },
          children: [(0, xC.jsx)("iframe", {
            ref: eC,
            className: "HudPreviewFrame",
            title: RC("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: AC.width,
              height: AC.height,
              transform: `scale(${lC})`
            }
          }), uC && (0, kC.createPortal)((0, xC.jsx)(Jz, {
            presence: MC,
            portraitPhone: Mz,
            hidden: Fz,
            actionButtons: WC,
            joystickFixed: NC,
            keysAbove: tC,
            auraBar: JC,
            trayState: pz,
            moved: Sz
          }), uC.body), (0, xC.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...fz.handlers,
            children: [(0, xC.jsx)("div", {
              ref: mC,
              className: "HudPreviewSafeZone",
              style: {
                top: aC.top * lC,
                right: aC.right * lC,
                bottom: aC.bottom * lC,
                left: aC.left * lC
              }
            }), TC.map(((CC, zC) => {
              let {
                id: ZC,
                box: QC
              } = CC;
              return (0, xC.jsx)("div", {
                className: "HudPreviewHandle",
                style: Az((0, Zz.l)(QC, 40 / lC))
              }, `${ZC}:${zC}`)
            })), IC.hudLocked.map((CC => {
              const zC = sC[CC];
              return zC && (0, xC.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: zC.right * lC,
                  top: zC.top * lC
                },
                children: (0, xC.jsx)(KC.c, {
                  name: "lock"
                })
              }, CC)
            })), (0, xC.jsx)("div", {
              ref: dC,
              className: "HudPreviewCentreLine",
              style: {
                left: AC.width / 2 * lC
              }
            }), nC && Wz && (0, xC.jsx)("div", {
              ref: hC,
              className: oC()("HudPreviewRing", {
                Fixed: !FC(nC),
                Overlap: gz.length > 0
              }),
              style: Az(Wz),
              children: (0, xC.jsx)("span", {
                className: oC()("HudPreviewRingLabel", FZ(nC, Nz, sC, lC, AC)),
                children: Nz
              })
            })]
          })]
        })
      })
    }

    function MZ(CC, zC) {
      (0, wC.useEffect)((() => {
        var ZC;
        null === (ZC = CC.current) || void 0 === ZC || ZC.toggleAttribute("inert", zC)
      }), [CC, zC])
    }
    const gZ = "hudFullScreen";

    function SZ(CC) {
      let {
        onScale: zC,
        onHidden: ZC,
        onReset: bC,
        locked: nC,
        lockable: fC,
        onLocked: oC,
        onClose: FC,
        ...WC
      } = CC;
      const {
        t: NC
      } = (0, QC.y)(), MC = (0, wC.useRef)(null);
      (0, VC.u)("popup", MC, FC),
      function(CC) {
        const zC = (0, wC.useRef)(CC);
        zC.current = CC, (0, wC.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [gZ]: !0
          }, "");
          let CC = !1;
          const ZC = () => {
            CC = !0, zC.current()
          };
          return window.addEventListener("popstate", ZC), () => {
            var zC;
            window.removeEventListener("popstate", ZC), !CC && null !== (zC = window.history.state) && void 0 !== zC && zC[gZ] && window.history.back()
          }
        }), [])
      }(FC), (0, wC.useEffect)((() => {
        function CC(CC) {
          "Escape" === CC.key && (CC.stopPropagation(), FC())
        }
        return window.addEventListener("keydown", CC, !0), () => {
          window.removeEventListener("keydown", CC, !0)
        }
      }), [FC]);
      const {
        selected: gC
      } = WC, SC = (0, wC.useRef)(null), pC = (0, wC.useRef)(null), [PC, GC] = (0, wC.useState)(!1);
      MZ(pC, !PC);
      const [RC, AC] = (0, wC.useState)(null), [JC, IC] = (0, wC.useState)([]), [iC, vC] = Iz(), eC = (0, wC.useRef)(WC.selected);
      eC.current = WC.selected;
      const hC = (0, wC.useRef)({}),
        KC = (0, wC.useCallback)((() => {
          const CC = SC.current;
          CC && AC(function(CC, zC, ZC) {
            var QC;
            const {
              innerWidth: wC,
              innerHeight: bC
            } = window, nC = CC.offsetWidth, fC = CC.offsetHeight, oC = Math.max(rz()[0], 6), qC = [];
            for (const NC of [oC, .2 * bC, .5 * bC - fC / 2, .33 * bC])
              for (const CC of [.5, .3, .7]) qC.push({
                left: Math.max(0, Math.min(wC - nC - 6, Math.max(6, wC * CC - nC / 2))),
                top: NC
              });
            const FC = qC.map((CC => ({
                left: CC.left - 6,
                top: CC.top - 6,
                right: CC.left + nC + 6,
                bottom: CC.top + fC + 6
              }))),
              WC = ZZ(zC, ZC);
            return qC[(0, Zz.n)(FC, WC, {
              avoid: ZC && null !== (QC = zC[ZC]) && void 0 !== QC ? QC : null
            })]
          }(CC, hC.current, eC.current))
        }), []),
        YC = (0, wC.useCallback)(((CC, zC, ZC) => {
          IC(zC), vC(ZC), hC.current = CC, KC()
        }), [KC, vC]);
      return (0, wC.useLayoutEffect)(KC, [WC.selected, KC]), (0, kC.createPortal)((0, xC.jsxs)("div", {
        ref: MC,
        className: "HudFullScreenEditor",
        children: [(0, xC.jsx)(NZ, {
          ...WC,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: YC,
          onReady: GC,
          lockable: fC
        }), (0, xC.jsxs)("div", {
          ref: SC,
          className: "HudFullScreenToolbar",
          style: null === RC ? void 0 : {
            left: RC.left,
            top: RC.top,
            transform: "none"
          },
          children: [(0, xC.jsx)("div", {
            ref: pC,
            className: "HudFullScreenControls",
            children: (0, xC.jsx)(vz, {
              selected: gC,
              layout: WC.layout.hudLayouts[WC.orientation],
              actionButtons: WC.actionButtons,
              keyNames: WC.keyNames,
              overlaps: JC,
              scaleCaps: iC,
              onScale: zC,
              onHidden: ZC,
              onReset: bC,
              locked: nC,
              lockable: fC,
              onLocked: oC,
              joystickFixed: WC.joystickFixed
            })
          }), (0, xC.jsx)(qC.g, {
            className: "HudFullScreenDone",
            onClick: FC,
            padDefaultFocus: !0,
            children: NC("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const pZ = CC => `${Math.round(100*CC)}%`;

    function PZ(CC) {
      let {
        info: zC,
        tuple: ZC,
        props: wC
      } = CC;
      const {
        t: bC
      } = (0, QC.y)();
      return (0, xC.jsx)(MC.f, {
        name: bC("hudLayout:size"),
        min: YC.l,
        max: YC.i,
        step: iz,
        initValue: ZC[2],
        disabled: wC.locked.has(zC.id),
        selectableMax: wC.scaleCaps[zC.id],
        cappedNote: bC("hudLayout:sizeCapped"),
        format: pZ,
        onChange: CC => {
          wC.onScalePreview(zC.id, CC)
        },
        onChangeComplete: CC => {
          wC.onScale(zC.id, CC)
        }
      })
    }

    function GZ(CC) {
      const {
        t: zC
      } = (0, QC.y)(), {
        present: ZC,
        elements: bC,
        selected: nC,
        onSelect: fC,
        onHidden: qC,
        onReset: FC,
        note: WC,
        actionButtons: NC,
        keyNames: MC,
        sizeBesidePreview: gC,
        locked: SC,
        lockable: pC,
        onLocked: PC
      } = CC, {
        rowIconsOpen: GC,
        onRowIconsOpen: RC
      } = CC, AC = (0, wC.useRef)(null), JC = null !== nC && (GC || !(0, YC.N)(nC));
      return (0, wC.useEffect)((() => {
        var CC;
        const zC = nC ? null === (CC = AC.current) || void 0 === CC ? void 0 : CC.querySelector(`[data-hud-row="${nC}"]`) : null;
        if (!zC) return;
        const ZC = zC.closest(".SettingsMenuRight"),
          QC = performance.now();
        let wC = null;
        const bC = () => {
            clearInterval(oC), null === ZC || void 0 === ZC || ZC.removeEventListener("scroll", fC)
          },
          fC = () => {
            Oz() || bC()
          },
          oC = setInterval((() => {
            const CC = performance.now();
            CC - QC > 1500 ? bC() : Oz() ? wC = null : null === wC ? wC = CC : CC - wC >= 150 && (bC(), function(CC) {
              var zC;
              const ZC = CC.closest(".SettingsMenuRight"),
                QC = null === (zC = CC.closest(".HudLayoutSettings")) || void 0 === zC ? void 0 : zC.querySelector(".HudLayoutPreviewBox");
              if (!ZC || !QC) return;
              const wC = QC.getBoundingClientRect().bottom + 8,
                bC = ZC.getBoundingClientRect().bottom - 8,
                nC = CC.getBoundingClientRect();
              nC.top < wC ? ZC.scrollBy({
                top: nC.top - wC,
                behavior: "smooth"
              }) : nC.bottom > bC && ZC.scrollBy({
                top: Math.min(nC.bottom - bC, nC.top - wC),
                behavior: "smooth"
              })
            }(zC))
          }), 50);
        return null === ZC || void 0 === ZC || ZC.addEventListener("scroll", fC, {
          passive: !0
        }), bC
      }), [nC, JC]), (0, xC.jsx)("div", {
        ref: AC,
        className: "SettingBoxGroup HudElementList",
        children: XC.filter((CC => ZC.has(CC.id) && (GC || !(0, YC.N)(CC.id)))).map((ZC => {
          const QC = ((CC, zC) => {
              var ZC;
              return null !== (ZC = CC[zC]) && void 0 !== ZC ? ZC : YC.p
            })(bC, ZC.id),
            wC = (0, YC.u)(bC, ZC.id),
            AC = ZC.id === nC,
            JC = ZC.scale && !gC,
            IC = WC(ZC.id, AC);
          return (0, xC.jsxs)("div", {
            "data-hud-row": ZC.id,
            className: oC()("SettingBox HudElementRow", {
              Open: AC,
              Hidden: wC,
              Child: void 0 !== ZC.parent
            }),
            children: [(0, xC.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, xC.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": JC ? AC : void 0,
                onClick: () => {
                  fC(ZC.id)
                },
                children: [rC(ZC.id, NC, zC, MC), ZC.scale && 1 !== QC[2] && !(AC && JC) && (0, xC.jsx)("span", {
                  className: "HudElementRowSize",
                  children: pZ(QC[2])
                }), JC && (0, xC.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, xC.jsx)(DC, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: ZC.id,
                actionButtons: NC,
                keyNames: MC,
                locked: SC.has(ZC.id),
                lockable: pC(ZC.id),
                onLocked: PC
              }), "menu" === ZC.id && (0, xC.jsx)(jC, {
                className: "HudElementRowIcon",
                open: GC,
                name: rC(ZC.id, NC, zC, MC),
                onToggle: RC
              }), "menu" !== ZC.id && (0, xC.jsx)(aC, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: ZC.id,
                elements: bC,
                actionButtons: NC,
                keyNames: MC,
                onHidden: qC
              }), (0, xC.jsx)(tC, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: SC.has(ZC.id),
                id: ZC.id,
                elements: bC,
                actionButtons: NC,
                keyNames: MC,
                onReset: FC
              })]
            }), AC && JC && (0, xC.jsx)(PZ, {
              info: ZC,
              tuple: QC,
              props: CC
            }), IC && (0, xC.jsx)("div", {
              className: "HudElementNote",
              children: IC
            })]
          }, ZC.id)
        }))
      })
    }

    function RZ(CC) {
      let {
        preview: zC,
        quick: ZC,
        onFullScreen: bC,
        resting: nC,
        onSidePanel: fC
      } = CC;
      const {
        t: oC
      } = (0, QC.y)(), FC = WZ(), WC = (0, wC.useRef)(null), {
        width: NC
      } = (0, zz.e)(WC), MC = Math.floor(FC.width * Math.min(1, zC.maxHeight / FC.height)), gC = NC - MC - 12, SC = gC >= 130, pC = NC > 0;
      (0, wC.useEffect)((() => {
        pC && fC(SC)
      }), [pC, SC, fC]);
      const PC = (0, Zz.u)(SC ? MC : NC, FC.width, FC.height, zC.maxHeight),
        GC = nC ? (0, xC.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: FC.height * PC
          }
        }) : (0, xC.jsx)(NZ, {
          ...zC
        }),
        RC = CC => (0, xC.jsxs)(qC.O, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: oC("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: bC,
          children: [(0, xC.jsx)(KC.c, {
            name: "expand"
          }), CC && (0, xC.jsx)("span", {
            children: oC("hudLayout:fullScreen")
          })]
        });
      return (0, xC.jsxs)("div", {
        ref: WC,
        className: "SettingBox HudLayoutPreviewBox",
        children: [NC > 0 && SC && (0, xC.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, xC.jsx)("div", {
            style: {
              width: MC
            },
            children: GC
          }), (0, xC.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, xC.jsx)(vz, {
              selected: zC.selected,
              ...ZC,
              joystickFixed: zC.joystickFixed,
              extra: RC(!zC.selected || gC >= 278)
            })
          })]
        }), NC > 0 && !SC && (0, xC.jsxs)(xC.Fragment, {
          children: [GC, (0, xC.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: RC(!1)
          })]
        })]
      })
    }
    var AZ = ZC(2424),
      xZ = ZC(4335),
      JZ = ZC(2406),
      IZ = ZC(2363);
    const iZ = CC => {
      const zC = wz.m * ("sides" === CC ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(zC / 2))
    };

    function vZ(CC, zC, ZC) {
      const [QC, wC, bC, nC] = CC;
      return "sides" === zC ? [QC, ZC, bC, ZC] : [ZC, wC, ZC, nC]
    }
    const eZ = [null, null, null, null],
      hZ = CC => `${CC}px`;

    function KZ(CC) {
      let {
        safe: zC,
        onPreview: ZC,
        onCommit: bC
      } = CC;
      const {
        t: nC
      } = (0, QC.y)(), fC = (0, wz.r)(null !== zC && void 0 !== zC ? zC : eZ, window.innerWidth, window.innerHeight, sz(document).map(Math.round)), oC = (0, wC.useRef)(null !== zC && void 0 !== zC ? zC : eZ);
      oC.current = null !== zC && void 0 !== zC ? zC : eZ;
      const FC = CC => {
        const zC = Math.min(iZ(CC), "sides" === CC ? Math.max(fC[1], fC[3]) : Math.max(fC[0], fC[2]));
        return (0, xC.jsx)(MC.f, {
          name: nC("sides" === CC ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: iZ(CC),
          step: 2,
          initValue: zC,
          format: hZ,
          onChange: zC => {
            ZC(vZ(oC.current, CC, zC))
          },
          onChangeComplete: QC => {
            if (QC === zC) return void ZC(oC.current);
            const wC = vZ(oC.current, CC, QC);
            oC.current = wC, bC(wC), (0, iC.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: CC
            })
          }
        })
      };
      return (0, xC.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, xC.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, xC.jsx)("div", {
            children: nC("hudLayout:safeZone")
          }), (0, xC.jsx)(qC.O, {
            active: null === zC,
            pressed: null === zC,
            onClick: () => {
              bC(null)
            },
            children: nC("hudLayout:safeZoneAuto")
          })]
        }), FC("sides"), FC("ends")]
      })
    }

    function YZ() {
      var CC, zC;
      const {
        t: ZC
      } = (0, QC.y)(), bC = (0, YC.ab)(), {
        clientEscMenuOptions: nC
      } = (0, FC.k)(["clientEscMenuOptions"]), fC = (0, AZ.h)(), oC = bC.hudLayouts[fC], [WC, NC] = (0, wC.useState)(null), {
        rowIconsOpen: gC,
        onRowIconsOpen: SC,
        select: pC
      } = function(CC, zC) {
        const [ZC, QC] = (0, wC.useState)((() => YC.F.some((zC => void 0 !== CC.hudElements[zC] || CC.hudLocked.includes(zC))))), bC = (0, wC.useCallback)((CC => {
          zC(CC), (0, YC.N)(CC) && QC(!0)
        }), [zC]);
        return {
          rowIconsOpen: ZC,
          onRowIconsOpen: QC,
          select: bC
        }
      }(oC, NC), [PC, GC] = (0, wC.useState)([]), [RC, AC] = (0, wC.useState)(null), [JC, IC] = Iz(), eC = (0, wC.useCallback)(((CC, zC, ZC) => {
        GC(zC), IC(ZC);
        const QC = Object.keys(CC);
        AC((CC => (null === CC || void 0 === CC ? void 0 : CC.size) === QC.length && QC.every((zC => CC.has(zC))) ? CC : new Set(QC)))
      }), [IC]), {
        gameState: hC
      } = (0, FC.k)(["gameState"]), KC = (0, JZ.j)(), dC = null !== (CC = null === (zC = (0, IZ.l)()) || void 0 === zC ? void 0 : zC.icon) && void 0 !== CC ? CC : null, [mC] = (0, wC.useState)((() => "inGame" === hC ? function(CC, zC, ZC) {
        const QC = CC.querySelector(".InGameUi .TouchComponentsButtons");
        if (!QC) return fz;
        const wC = {},
          bC = {};
        for (const FC of nz) {
          const CC = QC.querySelector(`.TouchSlot${FC} > .TouchKey`);
          if (CC) {
            var nC, fC;
            wC[FC] = CC.cloneNode(!0);
            const zC = (null !== (nC = null === (fC = CC.querySelector(".TouchKeyLabel")) || void 0 === fC ? void 0 : fC.textContent) && void 0 !== nC ? nC : "").split(/\s+/).filter((CC => !/[\d\xd7]/.test(CC))).join(" ");
            zC && (bC[FC] = zC)
          }
        }
        const oC = zC => {
            const ZC = CC.querySelector(`.InGameUi ${zC}`);
            return null !== ZC && !ZC.classList.contains("Hidden")
          },
          qC = [...CC.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((CC => CC.cloneNode(!0)));
        return {
          faces: Object.keys(wC).length > 0 ? wC : null,
          names: bC,
          shop: oC(".TouchInventoryKey.ShopKey"),
          bag: oC(".TouchInventoryKey.BagKey"),
          items: qC.length > 0 ? qC : null,
          rowIcons: zC,
          pinnedIcon: ZC
        }
      }(document, KC, dC) : fz)), HC = (0, wC.useRef)(null), EC = (0, wC.useRef)(null), lC = function(CC) {
        const [zC, ZC] = (0, wC.useState)((() => .4 * window.innerHeight));
        return (0, wC.useLayoutEffect)((() => {
          var zC;
          const QC = null === (zC = CC.current) || void 0 === zC ? void 0 : zC.closest(".SettingsMenuRight");
          if (!QC) return;
          const wC = () => {
            const CC = QC.clientHeight < dZ ? .4 : .5;
            ZC(Math.max(80, QC.clientHeight * CC - 24))
          };
          wC();
          const bC = new ResizeObserver(wC);
          return bC.observe(QC), () => {
            bC.disconnect()
          }
        }), [CC]), zC
      }(EC), uC = (0, xZ.j)(nC.joystickMode), rC = nC.touchActionButtons, TC = (0, wC.useMemo)((() => function(CC, zC) {
        const ZC = {},
          QC = [
            ["extra", "X"],
            ["game", "G"]
          ];
        zC || QC.push(["attack", "P"]);
        for (const [wC, bC] of QC) {
          const zC = CC.names[bC];
          zC && (ZC[wC] = zC)
        }
        return ZC
      }(mC, rC)), [mC, rC]);
      (0, wC.useEffect)((() => {
        (0, iC.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [aC, tC] = (0, wC.useState)(!1), [DC, jC] = (0, wC.useState)(!1), yC = (0, wC.useRef)(null);
      MZ(yC, !DC);
      const [LC, UC] = (0, wC.useState)(!1), kC = (0, wC.useCallback)((() => {
        UC(!1)
      }), []), VC = (0, wC.useMemo)((() => new Set(oC.hudLocked)), [oC.hudLocked]), Cz = CC => {
        var zC, ZC;
        const QC = (0, YC.s)(),
          wC = CC(QC);
        (0, YC.W)(null !== (zC = null === (ZC = HC.current) || void 0 === ZC ? void 0 : ZC.keepLocks(QC, wC)) && void 0 !== zC ? zC : wC)
      }, zz = (CC, zC) => {
        Cz((ZC => (0, YC.db)(ZC, fC, CC, zC)))
      }, Zz = (CC, zC, ZC) => {
        zz(CC, {
          dx: zC,
          dy: ZC
        }), (0, iC.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${CC}`
        })
      }, wz = (CC, zC) => {
        Cz((ZC => (0, YC.hb)(ZC, fC, CC, zC)))
      }, bz = CC => {
        const zC = cC[CC];
        return (zC.move || zC.scale) && ("joystick" !== CC || uC) && !(0, Qz.B)(CC, oC.hudElements[CC])
      }, oz = CC => cC[CC].move && ("joystick" !== CC || uC) && !VC.has(CC), qz = new Set(XC.map((CC => CC.id)).filter((CC => {
        const zC = (0, YC.N)(CC) && !mC.rowIcons.includes(CC);
        return null === RC || RC.has(CC) || (0, YC.u)(oC.hudElements, CC) && !zC
      }))), Fz = {
        present: qz,
        actionButtons: rC,
        keyNames: TC,
        scaleCaps: JC,
        sizeBesidePreview: aC,
        elements: oC.hudElements,
        selected: WC,
        onSelect: pC,
        rowIconsOpen: gC,
        onRowIconsOpen: SC,
        onScalePreview: (CC, zC) => {
          var ZC;
          null === (ZC = HC.current) || void 0 === ZC || ZC.setScale(CC, zC)
        },
        onScale: (CC, zC) => {
          zz(CC, {
            scale: zC
          }), (0, iC.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${CC}`
          })
        },
        onHidden: (CC, zC) => {
          zz(CC, {
            hidden: zC
          }), (0, iC.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${zC?"hide":"show"}:${CC}`
          })
        },
        onReset: CC => {
          zz(CC, YC.b)
        },
        locked: VC,
        lockable: bz,
        onLocked: wz,
        note: (CC, zC) => {
          const QC = zC && PC.length > 0 ? ZC("hudLayout:overlapsNote", {
            names: sC(PC, rC, ZC, TC)
          }) : null;
          return zC && BC(CC, uC) ? (0, xC.jsxs)(xC.Fragment, {
            children: [QC && (0, xC.jsx)("span", {
              children: QC
            }), (0, xC.jsx)("span", {
              children: ZC("hudLayout:floatingJoystickNote")
            }), !aC && (0, xC.jsx)(OC, {})]
          }) : QC || (zC && VC.has(CC) ? ZC("hudLayout:lockedNote") : zC && "cluster" === CC ? ZC("hudLayout:clusterNote") : zC && "menu" === CC ? ZC("hudLayout:menuNote") : zC && (0, Qz.B)(CC, oC.hudElements[CC]) && oz(CC) ? ZC("hudLayout:rowIconNote") : zC && "arrows" === CC ? ZC("hudLayout:arrowsNote") : "inventory" === CC && (0, YC.u)(oC.hudElements, "inventory") ? ZC("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, xC.jsxs)("div", {
        ref: EC,
        className: "HudLayoutSettings",
        children: [(0, xC.jsxs)("div", {
          ref: yC,
          className: "HudLayoutBody",
          children: [(0, xC.jsx)("div", {
            className: "HudLayoutOrientation",
            children: ZC("landscape" === fC ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, xC.jsx)(RZ, {
            preview: {
              layout: bC,
              orientation: fC,
              selected: WC,
              onSelect: pC,
              onMove: Zz,
              canMove: oz,
              actionButtons: rC,
              joystickFixed: uC,
              presence: mC,
              keyNames: TC,
              maxHeight: lC,
              apiRef: HC,
              onMeasured: eC,
              onReady: jC,
              lockable: bz
            },
            quick: {
              layout: oC,
              actionButtons: rC,
              keyNames: TC,
              scaleCaps: JC,
              overlaps: PC,
              onScale: Fz.onScale,
              onHidden: Fz.onHidden,
              onReset: Fz.onReset,
              locked: VC,
              lockable: bz,
              onLocked: wz
            },
            onFullScreen: () => {
              UC(!0)
            },
            resting: LC,
            onSidePanel: tC
          }), LC && (0, xC.jsx)(SZ, {
            layout: bC,
            orientation: fC,
            selected: WC,
            onSelect: pC,
            onMove: Zz,
            canMove: oz,
            actionButtons: rC,
            joystickFixed: uC,
            presence: mC,
            keyNames: TC,
            onScale: Fz.onScale,
            onHidden: Fz.onHidden,
            onReset: Fz.onReset,
            locked: VC,
            lockable: bz,
            onLocked: wz,
            apiRef: HC,
            onClose: kC
          }), (0, xC.jsx)(KZ, {
            safe: oC.hudSafe,
            onCommit: CC => {
              Cz((zC => (0, YC.ib)(zC, fC, CC)))
            },
            onPreview: CC => {
              var zC;
              null === (zC = HC.current) || void 0 === zC || zC.setSafe(CC)
            }
          }), (0, xC.jsx)(MC.b, {
            label: ZC("hudLayout:snapCentre"),
            checked: bC.hudSnapCentre,
            onClick: CC => {
              (0, YC.U)(CC)
            },
            circleInfoText: ZC("hudLayout:snapCentreInfo")
          }), (0, xC.jsx)(GZ, {
            ...Fz
          }), (0, xC.jsx)(MC.e, {
            label: ZC("hudLayout:shape"),
            options: YC.H.map((CC => ({
              value: CC,
              label: ZC(`hudLayout:shape_${CC}`)
            }))),
            value: bC.hudShape,
            onChange: CC => {
              Cz((zC => ({
                ...zC,
                hudShape: CC
              }))), (0, iC.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: CC
              })
            }
          }), (0, xC.jsx)(MC.f, {
            name: ZC("hudLayout:opacity"),
            min: YC.f,
            max: 1,
            step: .05,
            initValue: bC.hudKeyOpacity,
            format: CC => `${Math.round(100*CC)}%`,
            circleInfoText: ZC("hudLayout:opacityInfo"),
            onChange: CC => {
              var zC;
              null === (zC = HC.current) || void 0 === zC || zC.setOpacity(CC)
            },
            onChangeComplete: CC => {
              (0, YC.T)(CC), (0, iC.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, xC.jsx)(qC.I, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const CC = vC.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await CC.getResult() && (0, YC.R)()
            }()
          },
          children: ZC("hudLayout:resetAll")
        })]
      })
    }
    const dZ = 350;
    const mZ = [function() {
      const {
        t: CC
      } = (0, QC.y)(), [zC, ZC] = (0, wC.useState)(!1), bC = (0, wC.useRef)(null);
      return (0, wC.useEffect)((() => {
        var CC;
        zC && (null === (CC = bC.current) || void 0 === CC || CC.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [zC]), (0, xC.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, xC.jsx)(eC.b, {
          ref: bC,
          icon: "arrows-up-down-left-right",
          title: CC("hudLayout:title"),
          sub: CC("hudLayout:entrySub"),
          expanded: zC,
          onClick: () => {
            ZC(!zC)
          }
        }), zC && (0, xC.jsx)(YZ, {})]
      })
    }, function() {
      const {
        t: CC
      } = (0, QC.y)(), {
        joystickMode: zC,
        touchSpeedCurve: ZC,
        autorun: wC,
        jumpLock: bC
      } = (0, FC.k)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, xC.jsxs)(xC.Fragment, {
        children: [(0, xC.jsx)(MC.e, {
          label: CC("settingsMenu:joystick"),
          options: AC.yb.map((zC => ({
            value: zC,
            label: CC(JC[zC])
          }))),
          value: zC,
          onChange: CC => {
            FC.b.setClientEscMenuOptions({
              joystickMode: CC
            })
          },
          circleInfoText: CC("settingsMenu:joystickInfo")
        }), (0, xC.jsx)(MC.b, {
          label: CC("settingsMenu:preciseWalking"),
          checked: ZC,
          onClick: CC => {
            FC.b.setClientEscMenuOptions({
              touchSpeedCurve: CC
            })
          },
          circleInfoText: CC("settingsMenu:preciseWalkingInfo")
        }), (0, xC.jsx)(MC.b, {
          label: CC("settingsMenu:autoRun"),
          checked: wC,
          onClick: CC => {
            FC.b.setClientEscMenuOptions({
              autorun: CC
            })
          },
          circleInfoText: CC("settingsMenu:autoRunInfo")
        }), (0, xC.jsx)(MC.b, {
          label: CC("settingsMenu:jumpLock"),
          checked: bC,
          onClick: CC => {
            FC.b.setClientEscMenuOptions({
              jumpLock: CC
            })
          },
          circleInfoText: CC("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, xC.jsx)(RC.d, {})
    }, function() {
      const {
        t: CC
      } = (0, QC.y)(), {
        clientEscMenuOptions: zC
      } = (0, FC.k)(["clientEscMenuOptions"]);
      return (0, IC.d)() ? (0, xC.jsx)(MC.b, {
        label: CC("settingsMenu:vibration"),
        checked: zC.vibration,
        onClick: CC => {
          FC.b.setClientEscMenuOptions({
            vibration: CC
          })
        },
        circleInfoText: CC("settingsMenu:vibrationInfo")
      }) : null
    }];

    function HZ() {
      return (0, xC.jsx)(xC.Fragment, {
        children: mZ.map(((CC, zC) => (0, xC.jsx)(CC, {}, zC)))
      })
    }
    var EZ = ZC(4309);

    function lZ() {
      const {
        t: CC
      } = (0, QC.y)(), {
        isTouchScreen: zC,
        clientEscMenuOptions: ZC,
        gameState: nC
      } = (0, FC.k)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), fC = (0, gC.h)("ezBridging"), oC = (0, gC.h)("ezTowering"), pC = "inGame" !== nC || !0 === fC, PC = (0, SC.h)() && ("inGame" !== nC || !0 === oC), [, RC] = (0, wC.useReducer)((CC => CC + 1), 0), AC = (0, GC.f)(), [JC, IC] = (0, wC.useState)(EZ.i);
      return (0, xC.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [AC && (0, xC.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, xC.jsx)("div", {
            children: CC("controller:settingsControlsNote")
          }), (0, xC.jsx)(qC.O, {
            onClick: () => {
              FC.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: CC("controller:settingsOpenController")
          })]
        }), (0, WC.isTouchscreen)() && !(0, WC.isMobile)() ? (0, xC.jsx)(xC.Fragment, {
          children: (0, xC.jsx)(MC.b, {
            label: CC("settingsMenu:useTouchControls"),
            checked: JC,
            onClick: CC => {
              (0, EZ.e)(CC), IC(CC)
            }
          })
        }) : null, zC && (0, xC.jsx)(HZ, {}), pC && (0, xC.jsx)(MC.b, {
          label: CC("settingsMenu:ezBridging"),
          checked: ZC.ezBridging,
          onClick: CC => {
            FC.b.setClientEscMenuOptions({
              ezBridging: CC
            })
          },
          circleInfoText: CC("settingsMenu:ezBridgingInfo")
        }), PC && (0, xC.jsx)(MC.b, {
          label: CC("settingsMenu:ezTowering"),
          checked: ZC.ezTowering,
          onClick: CC => {
            FC.b.setClientEscMenuOptions({
              ezTowering: CC
            })
          },
          circleInfoText: CC("settingsMenu:ezToweringInfo")
        }), (0, xC.jsx)(MC.b, {
          label: CC("settingsMenu:crouchToggle"),
          checked: ZC.crouchIsToggle,
          onClick: CC => {
            FC.b.setClientEscMenuOptions({
              crouchIsToggle: CC
            })
          },
          circleInfoText: CC("settingsMenu:crouchToggleInfo")
        }), (0, xC.jsx)(MC.b, {
          label: CC("settingsMenu:hideUiToggle"),
          checked: ZC.hideUiIsToggle,
          onClick: CC => {
            FC.b.setClientEscMenuOptions({
              hideUiIsToggle: CC
            })
          },
          circleInfoText: CC("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, NC.c)() && (0, xC.jsx)(MC.f, {
          name: CC("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: ZC.touchscreenSensitivity,
          onChange: CC => {
            FC.b.setClientEscMenuOptions({
              touchscreenSensitivity: CC
            })
          }
        }), !(0, WC.isMobile)() && (0, xC.jsx)(MC.f, {
          name: CC("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: ZC.mouseSensitivity,
          onChange: CC => {
            FC.b.setClientEscMenuOptions({
              mouseSensitivity: CC
            })
          }
        }), !(0, WC.isMobile)() && (0, xC.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, xC.jsx)("div", {
            className: "SliderText",
            children: CC("settingsMenu:keyBindings")
          }), bC.e.map((zC => (0, xC.jsx)(XZ, {
            title: CC(zC.name.translationKey, zC.name.params),
            defaultOpen: bC.f.has(zC.id),
            children: zC.actions.map((CC => (0, xC.jsx)(cZ, {
              noaAction: CC,
              forceUpdate: RC,
              clashesWith: zC.clashesWith,
              showPadGlyph: AC
            }, CC)))
          }, zC.name.translationKey))), (0, xC.jsx)(qC.I, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, bC.z)(), RC()
            },
            children: CC("controls:resetBindings")
          })]
        })]
      })
    }

    function XZ(CC) {
      let {
        title: zC,
        defaultOpen: ZC,
        children: QC
      } = CC;
      const [bC, nC] = (0, wC.useState)(ZC);
      return (0, xC.jsxs)("div", {
        className: oC()("ControlsSection", {
          Collapsed: !bC
        }),
        children: [(0, xC.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            nC(!bC)
          },
          children: [(0, xC.jsx)("div", {
            className: "ControlsSectionTitle",
            children: zC
          }), (0, xC.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), bC && (0, xC.jsx)("div", {
          className: "ControlsSectionRows",
          children: QC
        })]
      })
    }

    function cZ(CC) {
      let {
        noaAction: zC,
        forceUpdate: ZC,
        clashesWith: fC,
        showPadGlyph: FC
      } = CC;
      const {
        t: WC
      } = (0, QC.y)(), NC = (0, PC.c)(zC), [MC, gC] = (0, wC.useState)(!1), [SC, GC] = (0, wC.useState)("controls:clickToEnterNewBinding"), [RC, AC] = (0, wC.useState)(null), [JC, IC] = (0, wC.useState)(null), iC = (0, wC.useRef)(null);
      (0, wC.useEffect)((() => {
        MC && iC.current && iC.current.focus()
      }), [MC]);
      const vC = bC.o[zC].filter((CC => nC.l[CC]));
      let eC = null;
      const hC = [],
        KC = fC.flatMap((CC => {
          var zC, ZC;
          return null !== (zC = null === (ZC = bC.e.find((zC => zC.id === CC))) || void 0 === ZC ? void 0 : ZC.actions) && void 0 !== zC ? zC : []
        }));
      for (const QC of KC) {
        if (QC === zC) continue;
        const CC = bC.o[QC];
        for (const zC of CC) vC.includes(zC) && hC.push(WC(bC.s[QC].translationKey, bC.s[QC].params))
      }
      hC.length > 0 && (eC = WC("controls:sharedBindingsWarning") + " ", eC += hC.join(", "));
      const YC = () => {
          gC(!1), AC(null), GC("controls:clickToEnterNewBinding"), IC(null)
        },
        dC = () => "BindingInput_" + zC;
      return (0, xC.jsxs)("div", {
        className: oC()("ControlRow", {
          WarningBorder: null !== eC
        }),
        children: [(0, xC.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, xC.jsxs)("div", {
            className: "ControlName",
            children: [WC(bC.s[zC].translationKey, bC.s[zC].params), FC && NC && (0, xC.jsx)(pC.e, {
              glyph: NC,
              className: "ControlPadGlyph"
            })]
          }), (0, xC.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, xC.jsxs)("div", {
              className: "ControlBindingsList",
              children: [vC.map((CC => (0, xC.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, xC.jsx)("div", {
                  children: (0, bC.h)(CC)
                }), (0, xC.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const QC = (0, bC.t)(zC, CC);
                    QC.isError() ? IC(QC.asError().message) : IC(null), ZC()
                  },
                  children: "\xd7"
                })]
              }, CC))), !MC && (0, xC.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  gC(!0), IC(null)
                },
                children: (0, xC.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), MC && (0, xC.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, xC.jsxs)("div", {
                className: "InputContainer",
                children: [(0, xC.jsx)("div", {
                  className: "InputOverlay",
                  children: RC ? (0, bC.h)(RC) : (0, xC.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: WC(SC)
                  })
                }), (0, xC.jsx)("input", {
                  ref: iC,
                  id: dC(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: CC => {
                    if ("Escape" === CC.code) return YC(), CC.preventDefault(), void CC.stopPropagation();
                    const zC = CC.code;
                    nC.d.includes(zC) ? (IC(null), AC(zC)) : (IC("controls:keyIsReserved"), AC(null)), CC.preventDefault(), CC.stopPropagation()
                  },
                  onMouseDown: CC => {
                    const zC = "Mouse" + (CC.button + 1);
                    document.activeElement && document.activeElement.id === dC() ? nC.d.includes(zC) ? (IC(null), AC(zC)) : (IC("controls:keyIsReserved"), AC(null)) : GC("controls:enterNewBinding"), CC.stopPropagation()
                  },
                  onBlur: () => {
                    GC("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, xC.jsx)(qC.g, {
                onPointerDown: CC => {
                  CC.preventDefault()
                },
                onClick: () => {
                  (0, bC.c)(zC, RC), ZC(), YC()
                },
                className: "ControlBindingAddButton",
                disabled: null === RC,
                children: WC("general:add")
              }), (0, xC.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  YC()
                },
                children: "\xd7"
              })]
            }), JC && (0, xC.jsx)("div", {
              className: "ControlBindingError",
              children: WC(JC)
            })]
          })]
        }), eC && (0, xC.jsx)("div", {
          className: "ControlRowWarning",
          children: eC
        })]
      })
    }
  },
  8882: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    var QC = ZC(48),
      wC = ZC(1013),
      bC = ZC(1056);
    const nC = (0, QC.forwardRef)((function(CC, zC) {
      let {
        icon: ZC,
        title: QC,
        sub: nC,
        expanded: fC,
        onClick: oC
      } = CC;
      return (0, bC.jsxs)("button", {
        ref: zC,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": fC,
        onClick: oC,
        children: [(0, bC.jsx)(wC.c, {
          name: ZC,
          className: "FeaturedSettingsEntryIcon"
        }), (0, bC.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, bC.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: QC
          }), (0, bC.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: nC
          })]
        }), (0, bC.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  8890: (CC, zC, ZC) => {
    function QC(CC) {
      return {
        x: (CC.left + CC.right) / 2,
        y: (CC.top + CC.bottom) / 2
      }
    }

    function wC(CC) {
      return 0 === CC.length ? null : CC.reduce(((CC, zC) => ({
        left: Math.min(CC.left, zC.left),
        top: Math.min(CC.top, zC.top),
        right: Math.max(CC.right, zC.right),
        bottom: Math.max(CC.bottom, zC.bottom)
      })))
    }

    function bC(CC, zC) {
      const ZC = Math.max(0, (zC - (CC.right - CC.left)) / 2),
        QC = Math.max(0, (zC - (CC.bottom - CC.top)) / 2);
      return {
        left: CC.left - ZC,
        top: CC.top - QC,
        right: CC.right + ZC,
        bottom: CC.bottom + QC
      }
    }

    function nC(CC, zC) {
      return zC.x >= CC.left && zC.x <= CC.right && zC.y >= CC.top && zC.y <= CC.bottom
    }

    function fC(CC, zC, ZC) {
      let wC = null,
        fC = 1 / 0;
      for (const {
          id: QC,
          box: bC
        }
        of zC) {
        const zC = (bC.right - bC.left) * (bC.bottom - bC.top);
        nC(bC, CC) && zC < fC && (fC = zC, wC = QC)
      }
      if (null !== wC) return wC;
      let oC = 1 / 0;
      for (const {
          id: qC,
          box: FC
        }
        of zC) {
        if (!nC(bC(FC, ZC), CC)) continue;
        const zC = QC(FC),
          fC = Math.hypot(CC.x - zC.x, CC.y - zC.y);
        fC < oC && (oC = fC, wC = qC)
      }
      return wC
    }

    function oC(CC, zC, ZC) {
      return {
        left: ZC.left,
        top: ZC.top,
        right: CC - ZC.right,
        bottom: zC - ZC.bottom
      }
    }

    function qC(CC, zC, ZC, QC) {
      const wC = (CC, zC, ZC) => Math.max(Math.min(zC, 0), Math.min(Math.max(ZC, 0), CC));
      return {
        x: wC(zC, QC.left - CC.left, QC.right - CC.right),
        y: wC(ZC, QC.top - CC.top, QC.bottom - CC.bottom)
      }
    }

    function FC(CC, zC, ZC, QC, wC) {
      const bC = CC.dx * QC + zC,
        nC = CC.dy * wC + ZC,
        fC = CC => Math.max(-1, Math.min(1, CC));
      return {
        dx: fC(bC / QC),
        dy: fC(nC / wC)
      }
    }

    function WC(CC, zC, ZC, QC) {
      return zC <= 0 || ZC <= 0 ? 1 : Math.max(.05, Math.min(1, CC / zC, QC / ZC))
    }

    function NC(CC, zC, ZC) {
      return Math.min(CC.right, zC.right) - Math.max(CC.left, zC.left) > ZC && Math.min(CC.bottom, zC.bottom) - Math.max(CC.top, zC.top) > ZC
    }

    function MC(CC, zC) {
      const ZC = (CC, zC, ZC, QC) => zC - CC > QC - ZC ? ZC - CC > zC - QC ? QC - zC : ZC - CC : CC < ZC ? ZC - CC : zC > QC ? QC - zC : 0;
      return {
        x: ZC(CC.left, CC.right, zC.left, zC.right),
        y: ZC(CC.top, CC.bottom, zC.top, zC.bottom)
      }
    }

    function gC(CC, zC) {
      let {
        avoid: ZC = null,
        bounds: QC = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, wC = 0, bC = 1 / 0;
      return CC.forEach(((CC, nC) => {
        const fC = zC.filter((zC => NC(CC, zC, 0))).length,
          oC = null !== QC && (CC.left < QC.left || CC.top < QC.top || CC.right > QC.right || CC.bottom > QC.bottom),
          qC = fC + (ZC && NC(CC, ZC, 0) ? 1e3 : 0) + (oC ? 1e6 : 0);
        qC < bC && (wC = nC, bC = qC)
      })), wC
    }
    ZC.d(zC, {
      A: () => MC,
      D: () => wC,
      d: () => QC,
      f: () => nC,
      g: () => NC,
      h: () => qC,
      l: () => bC,
      n: () => gC,
      o: () => FC,
      q: () => fC,
      u: () => WC,
      w: () => oC
    })
  },
  8682: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      c: () => QC
    });
    const QC = "controllerOpenKeyboard",
      wC = "controllerKeyboardVisible"
  },
  8685: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => PC,
      h: () => pC,
      k: () => FC,
      m: () => GC,
      q: () => RC,
      t: () => NC
    });
    var QC = ZC(1584),
      wC = ZC(1654);
    const bC = CC => CC >= 56320 && CC <= 57343,
      nC = CC => CC >= 55296 && CC <= 56319,
      fC = (CC, zC) => zC >= 2 && bC(CC.charCodeAt(zC - 1)) && nC(CC.charCodeAt(zC - 2)) ? zC - 2 : Math.max(0, zC - 1),
      oC = (CC, zC) => {
        let ZC;
        var QC, wC;
        return ZC = CC.start !== CC.end ? zC < 0 ? CC.start : CC.end : zC < 0 ? fC(CC.value, CC.start) : (QC = CC.value, (wC = CC.start) + 1 < QC.length && nC(QC.charCodeAt(wC)) && bC(QC.charCodeAt(wC + 1)) ? wC + 2 : Math.min(QC.length, wC + 1)), {
          value: CC.value,
          start: ZC,
          end: ZC
        }
      },
      qC = ["text", "search", "url", "email", "tel", "password", "number"],
      FC = CC => !(!(0, wC.d)(CC) || CC.isContentEditable || CC.hasAttribute("data-pad-no-osk")) && (CC instanceof HTMLTextAreaElement || CC instanceof HTMLInputElement && qC.includes(CC.type)),
      WC = CC => null !== CC.selectionStart,
      NC = CC => {
        var zC, ZC;
        const {
          value: QC
        } = CC;
        return {
          value: QC,
          start: null !== (zC = CC.selectionStart) && void 0 !== zC ? zC : QC.length,
          end: null !== (ZC = CC.selectionEnd) && void 0 !== ZC ? ZC : QC.length
        }
      },
      MC = (CC, zC, ZC) => {
        if (CC.readOnly) return;
        const wC = CC instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(wC, "value").set.call(CC, zC.value), WC(CC) && CC.setSelectionRange(zC.start, zC.end), (0, QC.f)(CC, new InputEvent("input", {
          bubbles: !0,
          inputType: ZC
        }))
      };
    let gC = !1;
    const SC = (CC, zC) => !!document.execCommand(CC, !1, zC) || (gC || (gC = !0, console.warn(`execCommand("${CC}") failed; the on-screen keyboard is setting the value directly`)), !1),
      pC = (CC, zC) => {
        SC("insertText", zC) || MC(CC, function(CC, zC) {
          let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const QC = CC.value.slice(0, CC.start),
            wC = CC.value.slice(CC.end);
          let bC = ZC < 0 ? zC.length : Math.max(0, ZC - QC.length - wC.length);
          bC > 0 && bC < zC.length && nC(zC.charCodeAt(bC - 1)) && bC--;
          const fC = zC.slice(0, bC),
            oC = QC.length + fC.length;
          return {
            value: QC + fC + wC,
            start: oC,
            end: oC
          }
        }(NC(CC), zC, CC.maxLength), "insertText")
      },
      PC = CC => {
        SC("delete") || MC(CC, (CC => {
          const zC = CC.start === CC.end ? fC(CC.value, CC.start) : CC.start;
          return {
            value: CC.value.slice(0, zC) + CC.value.slice(CC.end),
            start: zC,
            end: zC
          }
        })(NC(CC)), "deleteContentBackward")
      },
      GC = (CC, zC) => {
        if (!WC(CC)) return;
        const ZC = oC(NC(CC), zC);
        CC.setSelectionRange(ZC.start, ZC.end)
      },
      RC = CC => {
        WC(CC) && 0 === CC.selectionStart && 0 === CC.selectionEnd && CC.setSelectionRange(CC.value.length, CC.value.length)
      }
  },
  8844: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC
    });
    var QC = ZC(20),
      wC = ZC(2048),
      bC = ZC(1307),
      nC = ZC(1347);
    const fC = async () => {
      if ((0, nC.h)()) {
        if (!0 !== await bC.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== QC.b.get("gameState")) return
      }(0, wC.e)()
    }
  },
  8847: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => oC,
      g: () => bC,
      k: () => nC,
      m: () => wC,
      n: () => fC
    });
    var QC = ZC(1867);
    const wC = "controllerPadShopOpen",
      bC = CC => QC.e.includes(CC),
      nC = CC => Object.values(CC).some((CC => !1 !== CC.canBuy && !CC.isRewardedAd)),
      fC = (CC, zC, ZC) => {
        var QC, wC, nC, fC;
        const oC = CC.filter((CC => !bC(CC))),
          qC = null !== zC && CC.includes(zC) ? zC : null;
        return null !== qC && !bC(qC) && ZC(qC) ? qC : null !== (QC = null !== (wC = null !== (nC = null !== (fC = oC.find(ZC)) && void 0 !== fC ? fC : oC[0]) && void 0 !== nC ? nC : qC) && void 0 !== wC ? wC : CC[0]) && void 0 !== QC ? QC : null
      },
      oC = CC => CC.userInput || CC.isRewardedAd || "boolean" === typeof CC.isSelected ? null : JSON.stringify([CC.image, CC.cost, CC.currency, CC.amount, CC.customTitle, CC.buyButtonText, CC.description, CC.canBuy])
  },
  8862: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => qC,
      f: () => FC
    });
    var QC = ZC(48),
      wC = ZC(1383),
      bC = ZC(1911),
      nC = ZC(1357),
      fC = ZC(1373),
      oC = ZC(1056);
    const qC = () => {
        const CC = (0, nC.r)();
        if ((0, QC.useEffect)((() => {
            (0, nC.i)()
          }), []), !CC) return null;
        const {
          ControllerCategory: zC
        } = CC;
        return (0, oC.jsx)(fC.d, {
          children: (0, oC.jsx)(zC, {})
        })
      },
      FC = () => {
        var CC;
        const zC = (0, nC.r)(),
          [, ZC] = (0, QC.useReducer)((CC => CC + 1), 0);
        return (0, wC.c)(bC.d, ZC), null !== (CC = null === zC || void 0 === zC ? void 0 : zC.hasActivePad()) && void 0 !== CC && CC
      }
  },
  8691: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC,
      d: () => qC,
      g: () => SC,
      i: () => WC,
      l: () => gC,
      m: () => bC,
      o: () => MC,
      p: () => nC,
      s: () => NC
    });
    const QC = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      wC = (CC, zC) => {
        if ("function" === typeof CC.checkVisibility) return !CC.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: zC,
          checkOpacity: zC
        });
        const {
          visibility: ZC
        } = getComputedStyle(CC);
        if ("hidden" === ZC || "collapse" === ZC) return !0;
        if (!zC) return !1;
        for (let QC = CC; QC; QC = QC.parentElement)
          if ("0" === getComputedStyle(QC).opacity) return !0;
        return !1
      },
      bC = CC => {
        if (!CC.isConnected || wC(CC, !0)) return !1;
        const zC = CC.getBoundingClientRect();
        return zC.width > 0 && zC.height > 0
      },
      nC = CC => !!CC.matches(":disabled, [aria-disabled='true']") || "button" === CC.getAttribute("role") && "-1" === CC.getAttribute("tabindex"),
      fC = CC => {
        var zC;
        if (CC.closest("[data-pad-ignore]")) return !0;
        return !!(null === (zC = CC.parentElement) || void 0 === zC ? void 0 : zC.closest("[data-pad-focusable]"))
      },
      oC = CC => {
        const zC = CC.querySelectorAll(QC);
        return CC.matches(QC) ? [CC, ...zC] : zC
      },
      qC = CC => {
        const zC = [];
        for (const ZC of oC(CC)) !fC(ZC) && bC(ZC) && zC.push(ZC);
        return zC
      },
      FC = new WeakMap,
      WC = CC => {
        const zC = FC.get(CC);
        if (zC && NC(zC, CC)) return !0;
        for (const ZC of oC(CC))
          if (!fC(ZC) && bC(ZC)) return FC.set(CC, ZC), !0;
        return FC.delete(CC), !1
      },
      NC = (CC, zC) => zC.contains(CC) && CC.matches(QC) && !fC(CC) && bC(CC),
      MC = (CC, zC) => NC(CC, zC) && !nC(CC),
      gC = CC => {
        for (const zC of CC.querySelectorAll("[data-pad-initial-area]"))
          if (!wC(zC, !1)) return !0;
        return !1
      },
      SC = CC => {
        const zC = zC => {
          let ZC = 0;
          for (let QC = zC.parentElement; QC && QC !== CC; QC = QC.parentElement) ZC++;
          return ZC
        };
        return [...CC.querySelectorAll("[data-pad-initial-area]")].filter(bC).sort(((CC, ZC) => zC(ZC) - zC(CC)))
      }
  },
  8673: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => qC,
      C: () => eC,
      D: () => JC,
      G: () => IC,
      H: () => pC,
      I: () => oC,
      J: () => FC,
      d: () => PC,
      g: () => vC,
      h: () => xC,
      i: () => AC,
      m: () => gC,
      p: () => SC,
      t: () => NC,
      u: () => MC,
      y: () => iC
    });
    var QC = ZC(28),
      wC = ZC(1584),
      bC = ZC(8682),
      nC = ZC(8685),
      fC = ZC(8691);
    const oC = CC => (0, nC.k)(CC),
      qC = CC => {
        const zC = CC.getBoundingClientRect();
        return {
          x: zC.left + zC.width / 2,
          y: zC.top + zC.height / 2
        }
      },
      FC = (CC, zC, ZC) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: CC.x,
        clientY: CC.y,
        screenX: CC.x,
        screenY: CC.y,
        button: zC,
        buttons: ZC,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      WC = (CC, zC) => {
        (0, wC.f)(CC, zC)
      },
      NC = function(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const QC = 0 === ZC ? 1 : 2;
        WC(CC, new PointerEvent("pointerdown", FC(zC, ZC, QC))), WC(CC, new MouseEvent("mousedown", FC(zC, ZC, QC)))
      },
      MC = function(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        WC(CC, new PointerEvent("pointerup", FC(zC, ZC, 0))), WC(CC, new MouseEvent("mouseup", FC(zC, ZC, 0)))
      },
      gC = function(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        NC(CC, zC, ZC), MC(CC, zC, ZC), WC(CC, 0 === ZC ? new MouseEvent("click", FC(zC, 0, 0)) : new MouseEvent("contextmenu", FC(zC, 2, 0)))
      },
      SC = function(CC, zC, ZC) {
        let {
          leaveBelow: QC = null,
          enterBelow: wC = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (CC !== zC) {
          if (null !== CC && void 0 !== CC && CC.isConnected) {
            const wC = {
              ...FC(ZC, 0, 0),
              relatedTarget: zC
            };
            WC(CC, new PointerEvent("pointerout", wC)), WC(CC, new MouseEvent("mouseout", wC));
            const bC = CC => !!zC && CC.contains(zC) || !!QC && CC.contains(QC);
            for (let zC = CC; zC && !bC(zC); zC = zC.parentElement) WC(zC, new PointerEvent("pointerleave", {
              ...wC,
              bubbles: !1
            })), WC(zC, new MouseEvent("mouseleave", {
              ...wC,
              bubbles: !1
            }))
          }
          if (zC) {
            const QC = {
              ...FC(ZC, 0, 0),
              relatedTarget: CC
            };
            WC(zC, new PointerEvent("pointerover", QC)), WC(zC, new MouseEvent("mouseover", QC));
            const bC = [],
              nC = zC => !(null === CC || void 0 === CC || !CC.isConnected) && zC.contains(CC) || !!wC && zC.contains(wC);
            for (let CC = zC; CC && !nC(CC); CC = CC.parentElement) bC.push(CC);
            for (const CC of bC.reverse()) WC(CC, new PointerEvent("pointerenter", {
              ...QC,
              bubbles: !1
            })), WC(CC, new MouseEvent("mouseenter", {
              ...QC,
              bubbles: !1
            }));
            WC(zC, new PointerEvent("pointermove", FC(ZC, 0, 0))), WC(zC, new MouseEvent("mousemove", FC(ZC, 0, 0)))
          }
        } else zC && (WC(zC, new PointerEvent("pointermove", FC(ZC, 0, 0))), WC(zC, new MouseEvent("mousemove", FC(ZC, 0, 0))))
      },
      pC = CC => {
        QC.o.bp(bC.c, CC)
      },
      PC = CC => {
        if (oC(CC)) return void pC(CC);
        const zC = CC.hasAttribute("data-pad-focusable") ? CC.querySelector("a[href]") : null,
          ZC = null !== zC && void 0 !== zC ? zC : CC;
        gC(ZC, qC(ZC))
      },
      GC = ".Dropdown-root.is-open",
      RC = CC => {
        const zC = CC.querySelector(".Dropdown-control");
        return PC(zC), zC
      },
      AC = CC => {
        var zC;
        const ZC = null !== (zC = CC.closest(GC)) && void 0 !== zC ? zC : CC.querySelector(GC);
        return ZC ? RC(ZC) : null
      },
      xC = CC => {
        for (const zC of document.querySelectorAll(GC)) zC.contains(CC) || RC(zC)
      },
      JC = CC => null !== CC.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      IC = CC => {
        const zC = CC ? document.elementFromPoint(CC.x, CC.y) : null;
        return !(null === zC || void 0 === zC || !zC.closest("[data-pad-repeat]"))
      },
      iC = CC => {
        var zC;
        return null !== (zC = [...CC.querySelectorAll("[data-pad-back]")].find(fC.m)) && void 0 !== zC ? zC : null
      },
      vC = CC => {
        const zC = iC(CC);
        return !!zC && (PC(zC), !0)
      },
      eC = CC => {
        var zC, ZC, QC, wC;
        return null !== (zC = null !== (ZC = null !== (QC = CC.getAttribute("data-pad-key")) && void 0 !== QC ? QC : CC.getAttribute("href")) && void 0 !== ZC ? ZC : null === (wC = CC.querySelector("a[href]")) || void 0 === wC ? void 0 : wC.getAttribute("href")) && void 0 !== zC ? zC : null
      }
  },
  8876: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC,
      f: () => oC
    });
    var QC = ZC(20),
      wC = ZC(1275),
      bC = ZC(77);
    const nC = {
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

    function fC() {
      return (0, bC.isMobile)() && "function" === typeof navigator.vibrate
    }
    const oC = new class {
      constructor(CC) {
        this.deps = CC, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(CC, zC) {
        var ZC;
        if (!this.deps.enabled()) return;
        const QC = nC[CC],
          wC = null !== zC && void 0 !== zC ? zC : QC.pattern;
        if (null === wC) return void console.warn("No vibration pattern for", CC);
        const bC = this.deps.now();
        bC - this.lastAnyAt < 40 && QC.priority < this.playingPriority || bC - (null !== (ZC = this.lastAt.get(CC)) && void 0 !== ZC ? ZC : -1 / 0) < QC.minGapMs || bC < this.playingUntil && QC.priority < this.playingPriority || (this.lastAt.set(CC, bC), this.lastAnyAt = bC, this.playingUntil = bC + wC.reduce(((CC, zC) => CC + zC), 0), this.playingPriority = QC.priority, this.deps.vibrate(wC))
      }
    }({
      vibrate: CC => {
        navigator.vibrate([...CC])
      },
      now: () => performance.now(),
      enabled: () => fC() && QC.b.get("isTouchScreen") && QC.b.get("clientEscMenuOptions").vibration && !(0, wC.g)()
    })
  },
  8776: (CC, zC, ZC) => {
    function QC(CC, zC) {
      return !CC.hidden && (zC || !CC.isRewardedAd)
    }

    function wC(CC) {
      return "object" === typeof CC ? CC.option : CC
    }

    function bC(CC, zC) {
      var ZC;
      if ("dropdown" === (null === (ZC = CC.userInput) || void 0 === ZC ? void 0 : ZC.type) && "object" === typeof CC.userInput.dropdownOptions[0]) {
        for (const ZC of CC.userInput.dropdownOptions)
          if (wC(ZC) === zC) return "object" === typeof ZC ? ZC.cost : CC.cost;
        console.error("Didn't find matching option for dropdown item. Item:", CC, "input:", zC)
      }
      return CC.cost
    }

    function nC(CC, zC, ZC) {
      var QC;
      const wC = null !== (QC = ZC.excludedPlayers) && void 0 !== QC ? QC : [zC];
      return CC.filter((CC => !wC.includes(CC)))
    }
    ZC.d(zC, {
      b: () => bC,
      f: () => wC,
      i: () => nC,
      k: () => QC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);