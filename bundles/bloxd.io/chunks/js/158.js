export const id = 158;
export const ids = [158];
export const modules = {
  8881: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => NB
    });
    var QB = zB(28),
      nB = zB(1240),
      dB = zB(5078),
      IB = zB(1148);

    function NB(BB) {
      let {
        note: jB
      } = BB;
      const {
        t: zB
      } = (0, nB.D)(), {
        clientEscMenuOptions: NB
      } = (0, QB.m)(["clientEscMenuOptions"]);
      return (0, IB.jsx)(dB.b, {
        label: zB("touchSettings:actionButtons"),
        checked: NB.touchActionButtons,
        onClick: BB => {
          QB.c.setClientEscMenuOptions({
            touchActionButtons: BB
          })
        },
        circleInfoText: zB("touchSettings:actionButtonsInfo"),
        note: jB
      })
    }
  },
  8867: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => wz,
      d: () => lz
    });
    var QB = zB(1240),
      nB = zB(62),
      dB = zB(2033),
      IB = zB(2046),
      NB = zB(1091),
      uB = zB.n(NB),
      UB = zB(1478),
      aB = zB(28),
      pB = zB(106),
      rB = zB(125),
      sB = zB(5078),
      JB = zB(2516),
      mB = zB(297),
      yB = zB(2053),
      kB = zB(2059),
      GB = zB(8875),
      LB = zB(8881),
      gB = zB(363),
      tB = zB(1148);
    const SB = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var MB = zB(8888);
    var EB = zB(1514),
      iB = zB(1381),
      qB = zB(8897),
      fB = zB(1442),
      oB = zB(1108),
      HB = zB(8901),
      DB = zB(2559);
    const FB = {
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
        ...Object.fromEntries(DB.F.map((BB => [BB, "menu"])))
      },
      YB = BB => DB.A.filter((jB => FB[jB] === BB)),
      VB = new Set(YB("cluster")),
      hB = new Set(YB("inventory")),
      XB = BB => "inventory" === BB || hB.has(BB),
      ZB = BB => {
        const jB = FB[BB];
        return void 0 === jB ? [] : [jB, ...ZB(jB)]
      },
      AB = BB => [BB, ...ZB(BB)],
      TB = (BB, jB, zB) => "shop" === BB && jB ? zB("inventory") ? ["inventory"] : zB("bag") ? [BB, "bag"] : [BB] : [BB],
      PB = new Map([
        ["cluster", VB],
        ["inventory", hB]
      ]),
      WB = ["cluster"],
      eB = [...WB, ...DB.A.filter((BB => !WB.includes(BB) && !FB[BB]))],
      lB = BB => [BB, ...YB(BB).flatMap(lB)],
      wB = eB.flatMap(lB).map((BB => ({
        id: BB,
        label: `hudLayout:${BB}`,
        ...DB.w[BB],
        parent: FB[BB]
      }))),
      xB = Object.fromEntries(wB.map((BB => [BB.id, BB]))),
      KB = "data-hud-el";

    function CB(BB, jB, zB, QB) {
      const nB = zB(function(BB, jB) {
          return "attack" !== BB || jB ? xB[BB].label : "hudLayout:attackContext"
        }(BB, jB)),
        dB = QB[BB];
      return dB ? zB("hudLayout:slotWithKey", {
        slot: nB,
        key: dB
      }) : nB
    }

    function cB(BB, jB, zB, QB) {
      return BB.map((BB => CB(BB, jB, zB, QB))).join(", ")
    }

    function bB(BB) {
      let {
        className: jB,
        keepPlace: zB
      } = BB;
      return zB ? (0, tB.jsx)("div", {
        className: uB()(jB, "Placeholder")
      }) : null
    }

    function vB(BB) {
      let {
        id: jB,
        elements: zB,
        actionButtons: nB,
        keyNames: dB,
        className: IB,
        keepPlace: NB,
        onHidden: uB
      } = BB;
      const {
        t: aB
      } = (0, QB.D)();
      if (!xB[jB].hide) return (0, tB.jsx)(bB, {
        className: IB,
        keepPlace: NB
      });
      const pB = (0, DB.s)(zB, jB);
      return (0, tB.jsx)(UB.M, {
        className: IB,
        ariaLabel: aB(pB ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: CB(jB, nB, aB, dB)
        }),
        pressed: !pB,
        onClick: () => {
          uB(jB, !pB)
        },
        children: (0, tB.jsx)(oB.c, {
          name: pB ? "eye-slash" : "eye"
        })
      })
    }

    function RB(BB) {
      let {
        id: jB,
        elements: zB,
        actionButtons: nB,
        keyNames: dB,
        className: IB,
        keepPlace: NB,
        onlyWhenMoved: uB,
        locked: aB,
        onReset: pB
      } = BB;
      const {
        t: rB
      } = (0, QB.D)(), sB = xB[jB], JB = (0, DB.N)(zB[jB]);
      return !sB.move && !sB.scale || uB && JB ? (0, tB.jsx)(bB, {
        className: IB,
        keepPlace: NB
      }) : (0, tB.jsx)(UB.M, {
        className: IB,
        disabled: JB || aB,
        ariaLabel: rB("hudLayout:resetElement", {
          name: CB(jB, nB, rB, dB)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: jB
        },
        onClick: BB => {
          uB && zj(BB.currentTarget), pB(jB)
        },
        children: (0, tB.jsx)(oB.c, {
          name: "rotate-left"
        })
      })
    }

    function OB(BB) {
      let {
        id: jB,
        actionButtons: zB,
        keyNames: nB,
        className: dB,
        keepPlace: IB,
        locked: NB,
        lockable: uB,
        onLocked: aB
      } = BB;
      const {
        t: pB
      } = (0, QB.D)();
      return uB || NB ? (0, tB.jsx)(UB.M, {
        className: dB,
        ariaLabel: pB(NB ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: CB(jB, zB, pB, nB)
        }),
        pressed: NB,
        active: NB,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${NB?"unlock":"lock"}:${jB}`
        },
        onClick: () => {
          aB(jB, !NB)
        },
        children: (0, tB.jsx)(oB.c, {
          name: NB ? "lock" : "lock-open"
        })
      }) : (0, tB.jsx)(bB, {
        className: dB,
        keepPlace: IB
      })
    }

    function Bj(BB) {
      let {
        className: jB,
        open: zB,
        name: nB,
        onToggle: dB
      } = BB;
      const {
        t: IB
      } = (0, QB.D)();
      return (0, tB.jsx)(UB.M, {
        className: jB,
        ariaLabel: IB(zB ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: nB
        }),
        pressed: zB,
        analyticsClick: {
          id: "hud_layout.children",
          value: zB ? "close" : "open"
        },
        onClick: () => {
          dB(!zB)
        },
        children: (0, tB.jsx)(oB.c, {
          name: zB ? "angle-up" : "angle-down"
        })
      })
    }

    function jj(BB, jB) {
      var zB;
      BB.contains(document.activeElement) && jB.focus({
        preventScroll: !0
      }), null === (zB = (0, fB.d)()) || void 0 === zB || zB.handOverPadFocus(BB, jB)
    }

    function zj(BB) {
      const jB = BB.closest("[data-hud-row]"),
        zB = null === jB || void 0 === jB ? void 0 : jB.querySelector(".HudElementRowName");
      return !(!jB || !zB) && (jj(jB, zB), !0)
    }
    const Qj = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function nj(BB, jB) {
      return "joystick" === BB && !jB
    }

    function dj() {
      const {
        t: BB
      } = (0, QB.D)();
      return (0, tB.jsx)(UB.M, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: BB => {
          const jB = BB.currentTarget;
          if (!zj(jB)) {
            const BB = function(BB) {
              var jB, zB;
              const QB = [BB.previousElementSibling, BB.nextElementSibling].find((BB => BB instanceof HTMLElement && BB.matches(Qj)));
              return null !== (jB = null !== QB && void 0 !== QB ? QB : null === (zB = BB.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === zB ? void 0 : zB.querySelector(`:is(${Qj}):not(.HudFixJoystickButton)`)) && void 0 !== jB ? jB : null
            }(jB);
            BB && jj(jB, BB)
          }
          aB.c.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: BB("hudLayout:fixJoystick")
      })
    }
    var Ij = zB(83),
      Nj = zB(1306),
      uj = zB(3219),
      Uj = zB(2853),
      aj = zB(2568);
    const pj = (BB, jB, zB) => {
      const QB = ZB(jB).includes(BB) ? BB : ZB(BB).includes(jB) ? jB : null;
      if (null === QB || "joystick" === QB) return !1;
      const nB = QB === BB ? jB : BB;
      if ("menu" === QB) return (0, aj.y)(nB, zB.hudElements[nB]);
      if ("hotbar" !== QB || !XB(nB)) return !0;
      if ((0, DB.R)(zB.hudElements[nB]) || (0, DB.R)(zB.hudElements.inventory)) return !1;
      return !(zB.hudLocked.includes(nB) || zB.hudLocked.includes("inventory")) || (0, DB.N)(zB.hudElements.hotbar)
    };
    var rj = zB(2585),
      sj = zB(3270),
      Jj = zB(8907);
    const mj = BB => ({
      [KB]: BB
    });

    function yj(BB) {
      let {
        id: jB,
        slot: zB,
        icon: QB,
        label: dB,
        hidden: IB,
        className: NB,
        face: UB
      } = BB;
      const aB = (0, nB.useRef)(null);
      return (0, nB.useLayoutEffect)((() => {
        UB && aB.current && (0, Jj.l)(aB.current, UB)
      }), [UB]), (0, tB.jsxs)("div", {
        className: uB()("TouchKeyHit", `TouchSlot${zB}`, NB, {
          HudPreviewGhost: IB.has(jB)
        }),
        ...mj(jB),
        children: [UB && (0, tB.jsx)("div", {
          ref: aB,
          className: uB()("TouchKey", {
            Labelled: UB.classList.contains("Labelled")
          })
        }), !UB && (0, tB.jsxs)("div", {
          className: uB()("TouchKey", {
            Labelled: void 0 !== dB
          }),
          children: [QB && (0, tB.jsx)(oB.c, {
            name: QB
          }), void 0 !== dB && (0, tB.jsx)("span", {
            className: "TouchKeyLabel",
            children: dB
          })]
        })]
      })
    }

    function kj(BB) {
      let {
        item: jB,
        selected: zB
      } = BB;
      const QB = (0, nB.useRef)(null);
      return (0, nB.useLayoutEffect)((() => {
        QB.current && (0, Jj.l)(QB.current, jB)
      }), [jB]), (0, tB.jsx)("div", {
        ref: QB,
        className: uB()("InvenItem", {
          Selected: zB
        })
      })
    }
    const Gj = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      Lj = BB => void 0 === BB ? {} : {
        style: {
          "--parked": BB
        }
      };

    function gj(BB) {
      let {
        id: jB,
        hidden: zB,
        parked: QB,
        unslotted: nB = !1
      } = BB;
      return (0, tB.jsx)("div", {
        className: uB()("TopRightIcon", rj.n[jB], {
          HudPreviewGhost: zB.has(jB),
          [aj.b]: void 0 !== QB,
          [aj.d]: nB
        }),
        ...Lj(QB),
        children: (0, tB.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...mj(jB),
          children: (0, tB.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, tB.jsx)(oB.c, {
              name: Gj[jB]
            })
          })
        })
      })
    }

    function tj(BB) {
      let {
        portraitPhone: jB,
        icons: zB,
        pinnedIcons: QB,
        hidden: dB,
        moved: IB,
        trayState: NB
      } = BB;
      const UB = jB ? (0, aj.I)(zB) : [],
        aB = zB.filter((BB => "settings" === BB)),
        pB = zB.filter((BB => "settings" !== BB && !UB.includes(BB))).reverse(),
        rB = UB.length > 0 && "gone" === NB,
        sB = [...aB, ...rB ? ["tray"] : [], ...pB].filter((BB => "tray" === BB || dB.has(BB) && !IB.has(BB))),
        JB = BB => {
          const jB = sB.indexOf(BB);
          return jB < 0 ? void 0 : jB
        },
        mB = (BB, jB) => (0, tB.jsx)(gj, {
          id: BB,
          hidden: dB,
          parked: jB ? JB(BB) : void 0,
          unslotted: jB && dB.has(BB) && IB.has(BB)
        }, BB);
      return (0, tB.jsxs)("div", {
        className: uB()("TopRightIcons TouchInGame", {
          Column: jB
        }),
        children: [aB.map((BB => mB(BB, !0))), UB.length > 0 && (0, tB.jsxs)("div", {
          className: uB()("TopRightIcon TopRightTrayToggle Open", {
            [aj.b]: rB
          }),
          ...Lj(JB("tray")),
          children: [(0, tB.jsx)("div", {
            className: uB()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== NB
            }),
            children: (0, tB.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, tB.jsx)(oB.c, {
                name: "ellipsis"
              })
            })
          }), (0, tB.jsx)("div", {
            className: "TopRightTray",
            children: UB.map((BB => mB(BB, !1)))
          })]
        }), pB.map((BB => (0, tB.jsxs)(nB.Fragment, {
          children: ["perspective" === BB && null !== QB.rightOfCamera && (0, tB.jsx)(Sj, {
            icon: QB.rightOfCamera
          }), mB(BB, !0)]
        }, BB))), null !== QB.leftEnd && (0, tB.jsx)(Sj, {
          icon: QB.leftEnd
        })]
      })
    }

    function Sj(BB) {
      let {
        icon: jB
      } = BB;
      return (0, tB.jsx)("div", {
        className: "TopRightIcon",
        children: (0, tB.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, tB.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, tB.jsx)(oB.c, {
              name: jB
            })
          })
        })
      })
    }

    function Mj(BB) {
      let {
        next: jB,
        hidden: zB
      } = BB;
      return (0, tB.jsx)("div", {
        className: uB()("HotBarArrow", jB ? "Next" : "Previous", {
          HudPreviewGhost: zB
        }),
        ...mj("arrows"),
        children: (0, tB.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, tB.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, tB.jsx)(oB.c, {
              name: jB ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function Ej() {
      return (0, tB.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, tB.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, tB.jsx)("div", {
            className: "SocialBar",
            children: (0, tB.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, tB.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, tB.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, tB.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, tB.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, tB.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, tB.jsx)(oB.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, tB.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, tB.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, tB.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, tB.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, tB.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, tB.jsx)(oB.c, {
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
    const ij = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      qj = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      fj = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      oj = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function Hj(BB) {
      let {
        presence: jB,
        portraitPhone: zB,
        hidden: nB,
        actionButtons: dB,
        joystickFixed: IB,
        keysAbove: NB,
        auraBar: UB,
        trayState: aB,
        moved: rB
      } = BB;
      const {
        t: sB
      } = (0, QB.D)(), {
        faces: JB,
        items: mB
      } = jB, yB = BB => ({
        HudPreviewGhost: AB(BB).some((BB => nB.has(BB)))
      });
      return (0, tB.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, tB.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, tB.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, tB.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, tB.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, tB.jsx)("div", {
              className: "InGameHeaderGameName",
              children: sB("hudLayout:previewGameName")
            })]
          })
        }), (0, tB.jsx)("div", {
          className: "TopLeftElements",
          children: (0, tB.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, tB.jsxs)("div", {
              className: "Chat",
              children: [(0, tB.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [sB("hudLayout:previewChatLine"), sB("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), sB("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((BB => (0, tB.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, tB.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, tB.jsx)("div", {
                      className: "IndividualText",
                      children: BB
                    })
                  })
                }, BB)))
              }), (0, tB.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: uB()("ChatIconWrapper SmallTextLight", yB("chat")),
                ...mj("chat"),
                children: (0, tB.jsx)(oB.c, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, tB.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, tB.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, tB.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, tB.jsx)("div", {
                className: "TopRightIconsContainer",
                ...mj("menu"),
                children: (0, tB.jsx)(tj, {
                  portraitPhone: zB,
                  icons: jB.rowIcons,
                  pinnedIcons: jB.pinnedIcons,
                  hidden: nB,
                  trayState: aB,
                  moved: rB
                })
              })
            }), pB.featureFlags.useSocialFeatures && (0, tB.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, tB.jsx)(Ej, {})
            })]
          })
        }), (0, tB.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, tB.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, tB.jsxs)("div", {
            className: "TouchInteractKey",
            ...mj("interact"),
            children: [(0, tB.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, tB.jsx)(oB.c, {
                name: "hand-back-point-up"
              })
            }), (0, tB.jsx)("div", {
              children: sB("hudLayout:previewInteract")
            })]
          })
        }), (0, tB.jsx)("div", {
          className: "BottomCentre",
          children: (0, tB.jsxs)("div", {
            className: "BottomElements",
            children: [(0, tB.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, tB.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, tB.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...mj("hotbar"),
                children: (0, tB.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, tB.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, tB.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, tB.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, tB.jsx)(oB.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), UB && (0, tB.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, tB.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, tB.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, sj.f)("glint"),
                    alt: ""
                  }), (0, tB.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, tB.jsx)("div", {
                  className: "AuraBar",
                  children: (0, tB.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, tB.jsx)("div", {
                className: "HotBarRow",
                children: (0, tB.jsx)("div", {
                  className: uB()("HotBarContainer Touch", {
                    KeysAbove: NB
                  }),
                  children: (0, tB.jsxs)("div", {
                    className: "HotBar",
                    ...mj("hotbar"),
                    children: [(0, tB.jsxs)("div", {
                      className: uB()("TouchInventoryKeys", {
                        NoAuraBar: !UB
                      }),
                      children: [(0, tB.jsx)("div", {
                        className: uB()("TouchInventoryKey ShopKey", yB("shop"), {
                          Hidden: !jB.shop
                        }),
                        ...mj("shop"),
                        children: (0, tB.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, tB.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, tB.jsx)(oB.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, tB.jsx)("div", {
                        className: uB()("TouchInventoryKey BagKey", yB("bag"), {
                          Hidden: !jB.bag
                        }),
                        ...mj("bag"),
                        children: (0, tB.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, tB.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, tB.jsx)(oB.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, tB.jsx)(Mj, {
                      next: !1,
                      hidden: nB.has("arrows")
                    }), (0, tB.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== mB && mB.map(((BB, jB) => (0, tB.jsx)(kj, {
                        item: BB,
                        selected: BB.classList.contains("Selected")
                      }, jB))), null === mB && fj.map((BB => {
                        const jB = oj[BB];
                        return (0, tB.jsx)("div", {
                          className: uB()("InvenItem", {
                            Selected: 0 === BB
                          }),
                          children: jB && (0, tB.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, tB.jsx)(oB.c, {
                              name: jB
                            })
                          })
                        }, BB)
                      }))]
                    }), (0, tB.jsx)(Mj, {
                      next: !0,
                      hidden: nB.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, tB.jsx)("div", {
              className: "BottomRightElements",
              children: (0, tB.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== JB && Jj.f.map((BB => {
                  const jB = JB[BB];
                  return jB && (0, tB.jsx)(yj, {
                    id: Jj.e[BB],
                    slot: BB,
                    face: jB,
                    className: ij[BB],
                    hidden: nB
                  }, BB)
                })), (0, Jj.m)(jB, dB).map((BB => (0, tB.jsx)(yj, {
                  id: Jj.e[BB],
                  slot: BB,
                  icon: qj[BB].icon,
                  label: sB(qj[BB].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: nB
                }, BB))), null === JB && (0, tB.jsxs)(tB.Fragment, {
                  children: [(0, tB.jsx)(yj, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: nB
                  }), (0, tB.jsx)(yj, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: nB
                  }), dB && (0, tB.jsxs)(tB.Fragment, {
                    children: [(0, tB.jsx)(yj, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: nB
                    }), (0, tB.jsx)(yj, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: nB
                    })]
                  }), (0, Jj.j)(dB).map((BB => (0, tB.jsx)(yj, {
                    id: Jj.e[BB],
                    slot: BB,
                    icon: qj[BB].icon,
                    label: sB(qj[BB].labelKey),
                    hidden: nB
                  }, BB))), (0, tB.jsx)(yj, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: nB
                  })]
                })]
              })
            })]
          })
        }), (0, tB.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, tB.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, tB.jsxs)("div", {
              className: uB()("Joystick Resting HudPreviewJoystick", {
                Floating: !IB
              }),
              ...mj("joystick"),
              children: [(0, tB.jsx)("div", {
                className: "JoystickBase"
              }), (0, tB.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), jB.sprint && (0, tB.jsx)("div", {
            className: uB()("TouchSprintHit", yB("sprint"), {
              AtHome: !IB
            }),
            ...mj("sprint"),
            children: (0, tB.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, tB.jsx)(oB.c, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function Dj() {
      const [BB, jB] = (0, nB.useState)({}), zB = (0, nB.useCallback)((BB => {
        jB((jB => [...new Set([...Object.keys(jB), ...Object.keys(BB)])].every((zB => jB[zB] === BB[zB])) ? jB : BB))
      }), []);
      return [BB, zB]
    }
    const Fj = .05;

    function Yj(BB) {
      var jB;
      let {
        selected: zB,
        layout: nB,
        actionButtons: dB,
        keyNames: IB,
        overlaps: NB,
        scaleCaps: aB,
        joystickFixed: pB,
        onScale: rB,
        onHidden: sB,
        onReset: JB,
        locked: mB,
        lockable: yB,
        onLocked: kB,
        extra: GB
      } = BB;
      const {
        t: LB
      } = (0, QB.D)(), gB = zB ? xB[zB] : null, SB = null !== zB && mB.has(zB), MB = (zB && nB.hudElements[zB] || DB.m)[2], EB = null !== (jB = zB && aB[zB]) && void 0 !== jB ? jB : DB.h, iB = BB => {
        zB && rB(zB, Math.min(EB, Math.round(100 * (MB + .1 * BB)) / 100))
      };
      return (0, tB.jsxs)(tB.Fragment, {
        children: [(0, tB.jsxs)("div", {
          className: uB()("HudQuickName SmallTextBold", {
            Overlap: NB.length > 0
          }),
          children: [NB.length > 0 && (0, tB.jsx)(oB.c, {
            name: "triangle-exclamation"
          }), gB ? CB(gB.id, dB, LB, IB) : LB("hudLayout:fullScreenHint"), NB.length > 0 && (0, tB.jsx)("span", {
            className: "HudQuickOverlap",
            children: LB("hudLayout:overlapsShort", {
              names: cB(NB, dB, LB, IB)
            })
          })]
        }), (null === gB || void 0 === gB ? void 0 : gB.scale) && (0, tB.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, tB.jsx)(UB.M, {
            disabled: SB || MB <= DB.k,
            ariaLabel: LB("hudLayout:smaller"),
            onClick: () => {
              iB(-1)
            },
            children: (0, tB.jsx)(oB.c, {
              name: "minus"
            })
          }), (0, tB.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*MB)}%`
          }), (0, tB.jsx)(UB.M, {
            disabled: SB || MB >= EB,
            ariaLabel: LB("hudLayout:larger"),
            onClick: () => {
              iB(1)
            },
            children: (0, tB.jsx)(oB.c, {
              name: "plus"
            })
          })]
        }), (gB || GB) && (0, tB.jsxs)("div", {
          className: "HudQuickActions",
          children: [gB && (0, tB.jsxs)(tB.Fragment, {
            children: [(0, tB.jsx)(OB, {
              id: gB.id,
              actionButtons: dB,
              keyNames: IB,
              locked: SB,
              lockable: yB(gB.id),
              onLocked: kB
            }), (0, tB.jsx)(vB, {
              id: gB.id,
              elements: nB.hudElements,
              actionButtons: dB,
              keyNames: IB,
              onHidden: sB
            }), (0, tB.jsx)(RB, {
              id: gB.id,
              elements: nB.hudElements,
              actionButtons: dB,
              keyNames: IB,
              locked: SB,
              onReset: JB
            }), nj(gB.id, pB) && (0, tB.jsx)(dj, {})]
          }), GB]
        })]
      })
    }
    var Vj = zB(1162),
      hj = zB(4536);
    const Xj = "HudPreviewDoc",
      Zj = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      Aj = new Set([Xj, ...Object.values(Zj)]),
      Tj = new Set(DB.A.map(rj.C)),
      Pj = new Set(rj.i),
      Wj = 'style, link[rel="stylesheet"]';

    function ej(BB, jB, zB, QB) {
      const nB = new Map,
        dB = new Set,
        IB = new URL(BB.baseURI).origin,
        NB = jB => {
          var zB;
          if ("LINK" !== jB.nodeName) return !0;
          const QB = null === (zB = jB.getAttribute("href")) || void 0 === zB ? void 0 : zB.trim();
          if (!QB) return !1;
          try {
            return new URL(QB, BB.baseURI).origin === IB
          } catch {
            return !1
          }
        };
      let uB = null;
      const UB = () => {
          uB !== (0 === dB.size) && (uB = 0 === dB.size, null === QB || void 0 === QB || QB(uB))
        },
        aB = BB => {
          const jB = BB.cloneNode(!0);
          if ("LINK" === jB.tagName) {
            dB.add(jB);
            const BB = () => {
              dB.delete(jB), UB()
            };
            jB.addEventListener("load", BB), jB.addEventListener("error", BB), zB && jB.addEventListener("load", zB)
          }
          return jB
        },
        pB = () => {
          const QB = function(BB) {
              const jB = [...BB.body.children].filter((BB => BB.matches(Wj)));
              return [...BB.head.querySelectorAll(Wj), ...jB]
            }(BB).filter(NB),
            IB = new Set(QB);
          for (const [BB, jB] of nB) IB.has(BB) || (jB.remove(), nB.delete(BB), dB.delete(jB));
          let uB = null;
          for (let BB = QB.length - 1; BB >= 0; BB--) {
            const dB = QB[BB];
            let IB = nB.get(dB);
            IB ? "STYLE" === dB.tagName && IB.textContent !== dB.textContent && (IB.textContent = dB.textContent, null === zB || void 0 === zB || zB()) : (IB = aB(dB), nB.set(dB, IB), jB.head.insertBefore(IB, uB)), uB = IB
          }
          UB()
        };
      pB();
      const rB = new MutationObserver(pB);
      return rB.observe(BB.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), rB.observe(BB.body, {
        childList: !0
      }), () => {
        rB.disconnect()
      }
    }

    function lj(BB, jB, zB) {
      let {
        keysAbove: QB
      } = zB;
      const nB = [...BB.documentElement.classList].filter((BB => !Aj.has(BB) && !Pj.has(BB))),
        dB = [...jB.documentElement.classList].filter((BB => Pj.has(BB))),
        IB = [Xj, Zj.hotbar, Zj.hasShop, Zj.hasBag];
      QB && IB.push(Zj.keysAbove), jB.documentElement.className = [...nB, ...IB, ...dB].join(" ")
    }
    const wj = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function xj(BB, jB, zB, QB, nB) {
      const dB = (0, DB.E)(zB, QB, "joystick"),
        IB = (0, rj.G)((0, rj.S)(zB, QB, nB), QB),
        NB = IB.classes.filter((BB => !Tj.has(BB))),
        uB = jB.documentElement,
        UB = zB.hudLayouts[QB].hudSafe,
        aB = (0, rj.J)(UB, window.innerWidth, window.innerHeight, Kj(), UB ? (0, rj.T)(jB) : 0);
      (0, rj.V)({
        ...IB,
        classes: NB
      }, {
        vars: uB,
        safe: uB,
        classes: uB
      }), uB.style.setProperty("--preview-joystick-shift-left", `${aB[3]}px`), uB.style.setProperty("--preview-joystick-shift-bottom", `${aB[2]}px`), uB.style.setProperty("--preview-joystick-scale", String(dB[2])), (0, hj.f)(uB, jB, zB, QB);
      for (const pB of wj) uB.style.setProperty(pB, BB.documentElement.style.getPropertyValue(pB) || "0px")
    }

    function Kj() {
      return (0, rj.Q)(aB.c.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function Cj(BB) {
      return (0, rj.x)(Kj(), (0, rj.T)(BB))
    }

    function cj(BB, jB, zB) {
      const QB = BB.documentElement.style,
        nB = (0, rj.N)(jB),
        dB = QB.getPropertyValue(nB);
      try {
        return zB((BB => {
          QB.setProperty(nB, String(BB))
        }))
      } finally {
        "" === dB ? QB.removeProperty(nB) : QB.setProperty(nB, dB)
      }
    }

    function bj(BB, jB) {
      const [zB, QB] = cj(BB, "hotbar", (jB => {
        const zB = zB => {
          var QB, nB;
          return jB(zB), null !== (QB = null === (nB = BB.querySelector(".HotBarGameItemsContainer")) || void 0 === nB ? void 0 : nB.getBoundingClientRect().width) && void 0 !== QB ? QB : 0
        };
        return [zB(1), zB(DB.h)]
      }));
      return zB <= 0 ? DB.h : Math.min(DB.h, Math.max(1, Math.floor(QB / zB / jB + 1e-6) * jB))
    }
    const vj = 3,
      Rj = .5,
      Oj = BB => BB.right - BB.left;
    const Bz = (BB, jB) => Math.abs((0, HB.d)(BB).x - (0, HB.d)(jB).x) + Math.abs((0, HB.d)(BB).y - (0, HB.d)(jB).y) + Math.abs(Oj(BB) - Oj(jB));

    function jz(BB, jB, zB, QB, nB) {
      let {
        canKeep: dB = () => !0,
        passes: IB = vj,
        before: NB
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const uB = jB.hudLayouts[zB].hudLocked.filter(dB);
      if (0 === uB.length) return jB;
      const UB = [...VB].filter((QB => !uB.includes(QB) && (0, DB.E)(BB, zB, QB).join() === (0, DB.E)(jB, zB, QB).join())),
        aB = BB => {
          const jB = (0, HB.H)(UB.flatMap((jB => BB[jB] ? [BB[jB]] : [])));
          return {
            ...BB,
            cluster: null !== jB && void 0 !== jB ? jB : void 0
          }
        };
      let pB = null;
      const rB = BB => {
          pB = BB;
          const jB = nB(BB);
          return jB && {
            ...jB,
            boxes: aB(jB.boxes)
          }
        },
        sB = NB ? {
          ...NB,
          boxes: aB(NB.boxes)
        } : rB(BB),
        JB = sB && rB(jB);
      if (!sB || !JB) return jB;
      const mB = sB.boxes;
      let yB = JB.boxes;
      const kB = sB.keysAbove !== JB.keysAbove,
        GB = kB || Boolean(sB.shopAlone) !== Boolean(JB.shopAlone),
        LB = new Set(uB.filter((BB => !XB(BB) || !("bag" === BB ? kB : GB))));
      let gB = jB;
      for (let MB = 0; MB < IB && LB.size > 0; MB++) {
        var tB, SB;
        const BB = new Map;
        for (const jB of LB) {
          const nB = mB[jB],
            dB = yB[jB],
            IB = nB && dB ? zz(jB, (0, DB.E)(gB, zB, jB), nB, dB, QB) : null;
          IB ? BB.set(jB, IB) : LB.delete(jB)
        }
        if (0 === BB.size) break;
        let nB = gB;
        for (const [jB, QB] of BB) nB = (0, DB.ab)(nB, zB, jB, QB);
        const dB = null === (tB = rB(nB)) || void 0 === tB ? void 0 : tB.boxes;
        if (!dB) return jB;
        let IB = gB;
        for (const [jB, QB] of BB) {
          const BB = dB[jB];
          BB && Bz(mB[jB], BB) < Bz(mB[jB], yB[jB]) - Rj ? IB = (0, DB.ab)(IB, zB, jB, QB) : LB.delete(jB)
        }
        if (IB === gB) break;
        const NB = [...BB.keys()].every((BB => LB.has(BB)));
        gB = NB ? nB : IB;
        const uB = NB ? dB : null === (SB = rB(gB)) || void 0 === SB ? void 0 : SB.boxes;
        if (!uB) return jB;
        yB = uB
      }
      return pB !== gB && nB(gB), gB
    }

    function zz(BB, jB, zB, QB, nB) {
      let [dB, IB, NB] = jB;
      const uB = DB.w[BB],
        UB = {};
      uB.scale && Oj(QB) > 0 && Math.abs(Oj(zB) - Oj(QB)) > Rj && (UB.scale = Math.max(DB.k, Math.min(DB.h, NB * Oj(zB) / Oj(QB))));
      const aB = (0, HB.d)(zB).x - (0, HB.d)(QB).x,
        pB = (0, HB.d)(zB).y - (0, HB.d)(QB).y;
      return uB.move && (Math.abs(aB) > Rj || Math.abs(pB) > Rj) && (UB.dx = dB + aB / nB.width, UB.dy = IB + pB / nB.height), void 0 === UB.scale && void 0 === UB.dx ? null : UB
    }
    let Qz = 0;

    function nz() {
      return Qz > 0
    }
    const dz = BB => 0 === BB.dx && 0 === BB.dy,
      Iz = .001,
      Nz = BB => Math.abs(BB.dx) >= 5e-4 || Math.abs(BB.dy) >= 5e-4 ? BB : {
        dx: BB.dx,
        dy: BB.dy < 0 ? -.001 : Iz
      };

    function uz(BB) {
      let {
        preview: jB,
        stageRef: zB,
        ringRef: QB,
        centreLineRef: dB,
        snapCentre: IB,
        ready: NB,
        measure: uB,
        k: UB,
        viewport: aB,
        boxes: pB,
        pieces: rB,
        selected: sB,
        insets: JB,
        layout: mB,
        canMove: yB,
        onSelect: kB,
        onMove: GB
      } = BB;
      const LB = (0, nB.useRef)(null),
        gB = (0, nB.useCallback)((() => null !== LB.current), []),
        tB = (BB, jB) => {
          if (!jB) return null;
          const zB = (0, HB.d)(BB.origin),
            QB = (0, HB.d)(jB),
            nB = (BB.to.dx - BB.from.dx) * aB.width,
            dB = (BB.to.dy - BB.from.dy) * aB.height,
            IB = jB.right - jB.left,
            NB = jB.bottom - jB.top;
          return {
            skew: {
              x: QB.x - zB.x - nB,
              y: QB.y - zB.y - dB
            },
            box: {
              left: zB.x - IB / 2,
              top: zB.y - NB / 2,
              right: zB.x + IB / 2,
              bottom: zB.y + NB / 2
            }
          }
        },
        SB = (BB, zB) => {
          var nB;
          const IB = LB.current;
          if (!IB || IB.pointerId !== BB.pointerId) return;
          LB.current = null, null === (nB = dB.current) || void 0 === nB || nB.classList.remove("Shown", "Snapped");
          const NB = QB.current;
          if (NB && null !== IB.ringStyle && NB.setAttribute("style", IB.ringStyle), zB && IB.moved) {
            const BB = dz(IB.to) ? null : uB(IB.id),
              jB = BB ? (0, HB.G)(BB, (0, HB.C)(aB.width, aB.height, JB)) : {
                x: 0,
                y: 0
              },
              zB = {
                dx: IB.to.dx + jB.x / aB.width,
                dy: IB.to.dy + jB.y / aB.height
              },
              QB = dz(IB.to) ? zB : Nz(zB);
            GB(IB.id, QB.dx, QB.dy)
          } else jB(IB.id, null), zB && IB.tapPick && kB(IB.tapPick)
        };
      return {
        busy: gB,
        handlers: {
          onPointerDown: BB => {
            var jB;
            if (!NB || LB.current || !BB.target.closest(".HudPreviewHandle")) return;
            const QB = zB.current.getBoundingClientRect(),
              nB = {
                x: (BB.clientX - QB.left) / UB,
                y: (BB.clientY - QB.top) / UB
              },
              dB = (0, HB.y)(nB, rB, 40 / UB),
              IB = null !== sB ? PB.get(sB) : void 0,
              uB = void 0 !== IB && null !== (0, HB.y)(nB, rB.filter((BB => {
                let {
                  id: jB
                } = BB;
                return IB.has(jB)
              })), 40 / UB),
              aB = "menu" === sB && void 0 !== pB.menu && (0, HB.e)(pB.menu, nB) && ("menu" === dB || null !== dB && (0, aj.y)(dB, mB.hudElements[dB])),
              JB = uB ? sB : aB ? "menu" : null,
              GB = null !== JB,
              gB = null !== JB && void 0 !== JB ? JB : dB;
            if (!gB) return;
            if (function(BB) {
                Qz++;
                const jB = zB => {
                  zB.pointerId === BB && (Qz = Math.max(0, Qz - 1), window.removeEventListener("pointerup", jB, !0), window.removeEventListener("pointercancel", jB, !0))
                };
                window.addEventListener("pointerup", jB, !0), window.addEventListener("pointercancel", jB, !0)
              }(BB.pointerId), !yB(gB)) return void kB(GB && dB ? dB : gB);
            kB(gB);
            const [tB, SB] = null !== (jB = mB.hudElements[gB]) && void 0 !== jB ? jB : [0, 0], MB = {
              dx: tB,
              dy: SB
            }, EB = {
              skew: {
                x: 0,
                y: 0
              },
              box: pB[gB]
            };
            LB.current = {
              id: gB,
              pointerId: BB.pointerId,
              startX: BB.clientX,
              startY: BB.clientY,
              origin: pB[gB],
              from: MB,
              to: MB,
              moved: !1,
              home: dz(MB) ? {
                centre: (0, HB.d)(pB[gB]),
                anchor: EB
              } : null,
              away: dz(MB) ? null : EB,
              anchor: EB,
              ringStyle: null,
              tapPick: GB ? dB : null
            }, BB.currentTarget.setPointerCapture(BB.pointerId)
          },
          onPointerMove: BB => {
            const zB = LB.current;
            if (!zB || zB.pointerId !== BB.pointerId) return;
            const nB = BB.clientX - zB.startX,
              NB = BB.clientY - zB.startY;
            if (!zB.moved && Math.hypot(nB, NB) < 5) return;
            const pB = !zB.moved;
            var rB, sB;
            (zB.moved = !0, pB) && (zB.ringStyle = null !== (rB = null === (sB = QB.current) || void 0 === sB ? void 0 : sB.getAttribute("style")) && void 0 !== rB ? rB : null);
            const mB = (0, HB.C)(aB.width, aB.height, JB);
            if (!zB.home) {
              var yB;
              zB.to = {
                dx: 0,
                dy: 0
              }, jB(zB.id, zB.to);
              const BB = uB(zB.id),
                QB = null !== (yB = tB(zB, BB)) && void 0 !== yB ? yB : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: zB.origin
                },
                nB = (0, HB.d)(zB.origin);
              zB.home = {
                centre: BB ? (0, HB.d)(BB) : {
                  x: nB.x - zB.from.dx * aB.width,
                  y: nB.y - zB.from.dy * aB.height
                },
                anchor: QB
              }
            }
            const kB = zB.home;
            let GB = !1;
            const gB = BB => {
                GB = !1;
                let QB = (0, HB.p)(BB.box, nB / UB, NB / UB, mB);
                const dB = aB.width / 2;
                if (IB && Math.abs((0, HB.d)(zB.origin).x + QB.x - dB) <= 8 / UB) {
                  const jB = dB - (0, HB.d)(zB.origin).x,
                    nB = (0, HB.p)(BB.box, jB, QB.y, mB);
                  GB = Math.abs(nB.x - jB) < .01, GB && (QB = nB)
                }
                const uB = (0, HB.x)(zB.from, QB.x - BB.skew.x, QB.y - BB.skew.y, aB.width, aB.height);
                zB.to = Nz(uB), zB.anchor = BB, jB(zB.id, zB.to)
              },
              SB = (0, HB.p)(kB.anchor.box, nB / UB, NB / UB, mB),
              MB = dB.current,
              EB = (0, HB.d)(zB.origin),
              iB = ((0, DB.S)(zB.id) ? 20 : 6) / UB;
            if (Math.abs(EB.x + SB.x - kB.centre.x) <= iB && Math.abs(EB.y + SB.y - kB.centre.y) <= iB) zB.to = {
              dx: 0,
              dy: 0
            }, zB.anchor = kB.anchor, GB = IB && Math.abs(kB.centre.x - aB.width / 2) < 1, jB(zB.id, zB.to);
            else if (zB.away) gB(zB.away);
            else {
              var qB;
              gB(kB.anchor), zB.away = null !== (qB = tB(zB, uB(zB.id))) && void 0 !== qB ? qB : kB.anchor, gB(zB.away)
            }
            null === MB || void 0 === MB || MB.classList.add("Shown"), null === MB || void 0 === MB || MB.classList.toggle("Snapped", GB), (BB => {
              const jB = QB.current;
              if (jB) {
                const {
                  skew: zB,
                  box: QB
                } = BB.anchor;
                jB.style.left = QB.left * UB + "px", jB.style.top = QB.top * UB + "px", jB.style.width = (QB.right - QB.left) * UB + "px", jB.style.height = (QB.bottom - QB.top) * UB + "px", jB.style.translate = `${((BB.to.dx-BB.from.dx)*aB.width+zB.x)*UB}px ${((BB.to.dy-BB.from.dy)*aB.height+zB.y)*UB}px`
              }
            })(zB)
          },
          onPointerUp: BB => {
            SB(BB, !0)
          },
          onPointerCancel: BB => {
            SB(BB, !1)
          }
        }
      }
    }
    var Uz = zB(8910);

    function az(BB, jB) {
      return Object.keys(BB).filter((BB => BB !== jB)).map((jB => BB[jB]))
    }

    function pz(BB) {
      return BB.map((BB => {
        let {
          id: jB,
          box: zB
        } = BB;
        return `${jB}:${zB.left},${zB.top},${zB.right},${zB.bottom}`
      })).join(";")
    }

    function rz(BB) {
      const jB = [],
        zB = jB => (0, DB.S)(jB) && !BB.documentElement.classList.contains((0, rj.H)(jB));
      for (const NB of BB.querySelectorAll(`[${KB}]`)) {
        const BB = zB(NB.getAttribute(KB)) ? NB.querySelector(".ScaleOnHover") : null,
          QB = (null !== BB && void 0 !== BB ? BB : NB).getBoundingClientRect();
        (QB.width > 0 || QB.height > 0) && jB.push({
          id: NB.getAttribute(KB),
          box: (0, HB.h)(QB)
        })
      }
      const QB = BB => (0, HB.H)(jB.filter((jB => {
          let {
            id: zB
          } = jB;
          return BB(zB)
        })).map((BB => {
          let {
            box: jB
          } = BB;
          return jB
        }))),
        nB = {};
      for (const NB of new Set(jB.map((BB => BB.id)))) nB[NB] = QB((BB => BB === NB));
      for (const [NB, uB] of PB) {
        const BB = QB((BB => uB.has(BB)));
        BB && (nB[NB] = BB)
      }
      const dB = BB.querySelector(".TouchInventoryKeys"),
        IB = dB ? (0, HB.h)(dB.getBoundingClientRect()) : null;
      return {
        boxes: nB,
        pieces: jB,
        pairHome: IB
      }
    }

    function sz(BB, jB, zB) {
      const QB = jB.right - jB.left,
        nB = jB.bottom - jB.top;
      return cj(BB, "cluster", (jB => {
        const dB = zB => {
            jB(zB);
            const QB = [...BB.querySelectorAll(`[${KB}]:not(.HudPreviewGhost)`)].filter((BB => VB.has(BB.getAttribute(KB)))).map((BB => (0, HB.h)(BB.getBoundingClientRect()))),
              nB = (0, HB.H)(QB);
            return nB ? {
              w: nB.right - nB.left,
              h: nB.bottom - nB.top
            } : null
          },
          IB = BB => !BB || BB.w <= QB && BB.h <= nB,
          NB = dB(1),
          uB = dB(DB.h);
        if (!NB || IB(uB)) return DB.h;
        const UB = (BB, jB, zB) => jB > BB ? 1 + (zB - BB) * (DB.h - 1) / (jB - BB) : DB.h;
        let aB = Math.floor(Math.min(DB.h, UB(NB.w, uB.w, QB), UB(NB.h, uB.h, nB)) / zB + 1e-6) * zB;
        for (; aB > 1 && !IB(dB(aB));) aB = Math.round(100 * (aB - zB)) / 100;
        return Math.max(1, aB)
      }))
    }

    function Jz(BB) {
      lj(document, BB, {
        keysAbove: !1
      });
      const jB = parseFloat(getComputedStyle(BB.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        zB = Number.isFinite(jB) && jB < 0;
      return lj(document, BB, {
        keysAbove: zB
      }), (0, Uz.b)(BB), zB
    }

    function mz(BB) {
      const jB = BB.querySelector(".TouchInventoryKey.ShopKey");
      return null !== jB && "1" === getComputedStyle(jB).getPropertyValue("--touch-shop-above").trim()
    }

    function yz(BB, jB) {
      let {
        layout: zB,
        orientation: QB,
        viewport: dB,
        replicaKey: IB,
        joystickFixed: NB,
        busy: uB
      } = jB;
      const [UB, aB] = (0, nB.useState)(null), [pB, rB] = (0, nB.useState)({
        boxes: {},
        pieces: []
      }), [sB, JB] = (0, nB.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [mB, yB] = (0, nB.useState)(!1), [kB, GB] = (0, nB.useState)(!1), [LB, gB] = (0, nB.useState)(!1), tB = (0, nB.useCallback)((BB => {
        GB(BB), BB && gB(!0)
      }), []), SB = zB.hudLayouts[QB].hudSafe;
      (0, nB.useLayoutEffect)((() => {
        const jB = BB.current.contentDocument;
        jB.open(), jB.write("<!DOCTYPE html><html><head></head><body></body></html>"), jB.close(), aB(jB)
      }), [BB]);
      const MB = (0, nB.useCallback)((() => {
          UB && ((0, aj.B)(UB), rB(rz(UB)), JB(function(BB, jB) {
            const zB = Cj(BB),
              [QB, nB, dB, IB] = jB ? (0, rj.B)(jB, window.innerWidth, window.innerHeight, zB) : zB;
            return {
              top: QB,
              right: nB,
              bottom: dB,
              left: IB
            }
          }(UB, SB)))
        }), [UB, SB]),
        EB = (0, nB.useCallback)((() => {
          UB && yB(Jz(UB))
        }), [UB]),
        iB = (0, nB.useRef)((() => {}));
      return iB.current = () => {
        EB(), uB() || MB()
      }, (0, nB.useLayoutEffect)((() => {
        if (UB) return ej(document, UB, (() => {
          iB.current()
        }), tB)
      }), [UB, tB]), (0, nB.useLayoutEffect)(EB, [EB, dB]), (0, nB.useLayoutEffect)((() => {
        UB && (lj(document, UB, {
          keysAbove: mB
        }), xj(document, UB, zB, QB, NB), EB(), MB())
      }), [UB, zB, QB, mB, IB, NB, dB, MB, EB]), (0, nB.useEffect)((() => {
        var BB;
        if (!UB) return;
        const jB = new ResizeObserver((() => {
          uB() || MB()
        }));
        for (const zB of UB.querySelectorAll(`[${KB}]`)) jB.observe(zB);
        return null === (BB = UB.fonts) || void 0 === BB || BB.ready.then(MB), () => {
          jB.disconnect()
        }
      }), [UB, MB, uB, IB]), {
        doc: UB,
        boxes: pB.boxes,
        pieces: pB.pieces,
        insets: sB,
        keysAbove: mB,
        ready: kB,
        settled: LB
      }
    }
    const kz = ["Above", "Below", "Left", "Right"];

    function Gz(BB, jB, zB, QB, nB) {
      const dB = zB[BB],
        IB = (dB.left + dB.right) / 2,
        NB = (dB.top + dB.bottom) / 2,
        uB = (7.5 * jB.length + 14) / QB,
        UB = 18 / QB,
        aB = {
          Above: {
            left: IB - uB / 2,
            top: dB.top - UB,
            right: IB + uB / 2,
            bottom: dB.top
          },
          Below: {
            left: IB - uB / 2,
            top: dB.bottom,
            right: IB + uB / 2,
            bottom: dB.bottom + UB
          },
          Left: {
            left: dB.left - uB,
            top: NB - UB / 2,
            right: dB.left,
            bottom: NB + UB / 2
          },
          Right: {
            left: dB.right,
            top: NB - UB / 2,
            right: dB.right + uB,
            bottom: NB + UB / 2
          }
        },
        pB = az(zB, BB),
        rB = {
          left: 0,
          top: 0,
          right: nB.width,
          bottom: nB.height
        };
      return kz[(0, HB.u)(kz.map((BB => aB[BB])), pB, {
        bounds: rB
      })]
    }

    function Lz() {
      const [BB, jB] = (0, uj.d)();
      return (0, nB.useMemo)((() => ({
        width: BB,
        height: jB
      })), [BB, jB])
    }

    function gz(BB) {
      var jB;
      const {
        layout: zB,
        orientation: dB,
        selected: IB,
        onSelect: NB,
        onMove: UB,
        canMove: aB,
        actionButtons: pB,
        joystickFixed: rB,
        presence: sB,
        keyNames: mB,
        maxHeight: yB,
        fill: kB = !1,
        apiRef: GB
      } = BB, {
        t: LB
      } = (0, QB.D)(), gB = Lz(), SB = (null !== (jB = (0, JB.i)("maxAuraLevel")) && void 0 !== jB ? jB : 0) > 0, MB = zB.hudLayouts[dB], EB = (0, nB.useRef)(null), iB = (0, nB.useRef)(null), qB = (0, nB.useRef)(null), fB = (0, nB.useRef)(null), FB = (0, nB.useRef)(null), YB = (0, nB.useRef)(null), VB = (0, Uj.b)(EB).width, XB = kB ? 1 : VB > 0 ? (0, HB.A)(VB, gB.width, gB.height, yB) : 0, ZB = (0, nB.useRef)((() => !1)), WB = (0, nB.useCallback)((() => ZB.current()), []), eB = `${pB}:${rB}:${SB}`, {
        doc: lB,
        boxes: wB,
        pieces: xB,
        insets: KB,
        keysAbove: cB,
        ready: bB,
        settled: vB
      } = yz(qB, {
        layout: zB,
        orientation: dB,
        viewport: gB,
        replicaKey: eB,
        joystickFixed: rB,
        busy: WB
      }), RB = (0, nB.useCallback)((BB => {
        lB && xj(document, lB, BB, dB, rB)
      }), [lB, dB, rB]), OB = (0, nB.useCallback)((BB => {
        if (!lB || !vB) return null;
        RB(BB);
        const jB = Jz(lB),
          zB = function(BB, jB) {
            let {
              boxes: zB,
              pieces: QB,
              pairHome: nB
            } = BB;
            const dB = QB.find((BB => hB.has(BB.id)));
            if (!dB || !nB) return zB;
            const IB = (0, HB.d)(nB),
              NB = jB(dB.id),
              uB = Oj(dB.box) / NB / 2,
              UB = (dB.box.bottom - dB.box.top) / NB / 2;
            return {
              ...zB,
              inventory: {
                left: IB.x - uB,
                top: IB.y - UB,
                right: IB.x + uB,
                bottom: IB.y + UB
              }
            }
          }(rz(lB), (jB => (0, DB.E)(BB, dB, jB)[2]));
        return {
          boxes: zB,
          keysAbove: jB,
          shopAlone: mz(lB)
        }
      }), [lB, vB, RB, dB]), Bj = (0, nB.useRef)(null), jj = (0, nB.useRef)(null), zj = (0, nB.useRef)(zB);
      zj.current = zB;
      const Qj = (0, nB.useCallback)((() => {
        null !== Bj.current && (cancelAnimationFrame(Bj.current), Bj.current = null)
      }), []);
      (0, nB.useEffect)((() => Qj), [zB, Qj]);
      const nj = (0, nB.useRef)(-1 / 0),
        {
          lockable: dj
        } = BB,
        Nj = (0, nB.useCallback)((BB => {
          if (RB(BB), nj.current = performance.now(), !vB || 0 === zB.hudLayouts[dB].hudLocked.length) return;
          const jB = zB;
          Qj(), Bj.current = requestAnimationFrame((() => {
            var zB;
            if (Bj.current = null, zj.current !== jB) return;
            const QB = (null === (zB = jj.current) || void 0 === zB ? void 0 : zB.from) === jB ? jj.current.measured : OB(jB);
            QB && (jj.current = {
              from: jB,
              measured: QB
            }), RB(QB ? jz(jB, BB, dB, gB, OB, {
              canKeep: dj,
              passes: 1,
              before: QB
            }) : BB)
          }))
        }), [RB, vB, zB, dB, gB, OB, dj, Qj]),
        uj = uz({
          preview: (BB, jB) => {
            jB ? Nj((0, DB.ab)(zB, dB, BB, jB)) : (Qj(), RB(zB))
          },
          stageRef: iB,
          ringRef: fB,
          centreLineRef: FB,
          snapCentre: zB.hudSnapCentre,
          ready: vB,
          measure: BB => {
            const jB = lB && bB ? rz(lB).boxes[BB] : void 0;
            return jB && (0, HB.j)(jB, gB.width, gB.height) ? jB : null
          },
          k: XB,
          viewport: gB,
          boxes: wB,
          pieces: xB,
          selected: IB,
          insets: KB,
          layout: MB,
          canMove: aB,
          onSelect: NB,
          onMove: (BB, jB, zB) => {
            Qj(), UB(BB, jB, zB)
          }
        });
      (0, nB.useLayoutEffect)((() => {
        ZB.current = uj.busy
      }), [uj.busy]);
      const sj = (0, nB.useRef)([]),
        Jj = (0, nB.useRef)(MB.hudElements);
      (0, nB.useEffect)((() => {
        for (const nB of Object.keys(MB.hudElements)) {
          var BB, jB, zB, QB;
          (null !== (BB = null === (jB = MB.hudElements[nB]) || void 0 === jB ? void 0 : jB[2]) && void 0 !== BB ? BB : 1) > (null !== (zB = null === (QB = Jj.current[nB]) || void 0 === QB ? void 0 : QB[2]) && void 0 !== zB ? zB : 1) && aB(nB) && !(0, aj.y)(nB, MB.hudElements[nB]) && sj.current.push(...TB(nB, cB, aB))
        }
        Jj.current = MB.hudElements
      }), [MB.hudElements, aB, cB]), (0, nB.useEffect)((() => {
        if (!bB) return;
        const BB = (0, HB.C)(gB.width, gB.height, KB);
        for (const zB of ((BB, jB, zB, QB) => {
            const nB = BB => {
              const nB = jB[BB],
                {
                  x: dB,
                  y: IB
                } = nB && QB(BB) ? (0, HB.G)(nB, zB) : {
                  x: 0,
                  y: 0
                };
              return nB && {
                left: nB.left + dB,
                top: nB.top + IB,
                right: nB.right + dB,
                bottom: nB.bottom + IB
              }
            };
            return BB.flatMap((BB => {
              const dB = jB[BB];
              if ("inventory" !== BB || !dB || dB.right - dB.left <= zB.right - zB.left && dB.bottom - dB.top <= zB.bottom - zB.top) return [BB];
              const [IB, NB] = [nB("shop"), nB("bag")];
              return IB && NB && !(0, HB.l)(IB, NB, 0) ? ["shop", "bag"].filter(QB) : [BB]
            }))
          })(sj.current.splice(0), wB, BB, aB)) {
          const QB = wB[zB];
          if (!QB || uj.busy() || !(0, HB.j)(QB, gB.width, gB.height)) continue;
          const nB = (0, HB.G)(QB, BB);
          if (0 !== nB.x || 0 !== nB.y) {
            var jB;
            const [BB, QB] = null !== (jB = MB.hudElements[zB]) && void 0 !== jB ? jB : [0, 0];
            UB(zB, BB + nB.x / gB.width, QB + nB.y / gB.height)
          }
        }
      }), [wB, bB]), (0, nB.useImperativeHandle)(GB, (() => ({
        setScale: (BB, jB) => {
          Nj((0, DB.ab)(zB, dB, BB, {
            scale: jB
          }))
        },
        setOpacity: BB => {
          RB({
            ...zB,
            hudKeyOpacity: BB
          })
        },
        keepLocks: (BB, jB) => (Qj(), jz(BB, jB, dB, gB, OB, {
          canKeep: dj
        })),
        setSafe: BB => {
          const jB = (0, rj.B)(BB, gB.width, gB.height, Cj(null !== lB && void 0 !== lB ? lB : document));
          Nj((0, DB.fb)(zB, dB, BB)), YB.current && (YB.current.style.inset = jB.map((BB => BB * XB + "px")).join(" "))
        }
      })), [RB, Nj, OB, Qj, dj, lB, zB, dB, gB, XB]);
      const mj = new Set(Object.keys(MB.hudElements).filter((BB => (0, DB.s)(MB.hudElements, BB)))),
        yj = IB ? wB[IB] : void 0,
        kj = IB ? CB(IB, pB, LB, mB) : "",
        Gj = (0, Vj.c)(gB.width, gB.height),
        Lj = IB ? function(BB, jB, zB, QB) {
          const nB = BB => AB(BB).some((BB => (0, DB.s)(zB.hudElements, BB) || (0, aj.x)(BB, zB, QB)));
          if (nB(BB)) return [];
          const dB = BB => {
              var jB, QB;
              return "bag" === BB && 1 !== (null !== (jB = null === (QB = zB.hudElements.shop) || void 0 === QB ? void 0 : QB[2]) && void 0 !== jB ? jB : 1) || AB(BB).some((BB => void 0 !== zB.hudElements[BB]))
            },
            IB = PB.get(BB),
            NB = jB.filter((jB => {
              let {
                id: zB
              } = jB;
              return IB ? IB.has(zB) && !nB(zB) : zB === BB
            })),
            uB = new Set;
          for (const UB of jB) UB.id === BB || null !== IB && void 0 !== IB && IB.has(UB.id) || uB.has(UB.id) || nB(UB.id) || NB.some((BB => {
            let {
              id: jB,
              box: QB
            } = BB;
            return !pj(jB, UB.id, zB) && (dB(jB) || dB(UB.id)) && (0, HB.l)(QB, UB.box, 2)
          })) && uB.add(UB.id);
          return [...uB]
        }(IB, xB, MB, Gj) : [],
        gj = new Set((0, aj.v)(MB.hudElements)),
        tj = (0, aj.K)(MB, (0, aj.I)(sB.rowIcons)).state,
        Sj = Lj.join(),
        Mj = (0, nB.useRef)(BB.onReady);
      Mj.current = BB.onReady, (0, nB.useEffect)((() => {
        var BB;
        null === (BB = Mj.current) || void 0 === BB || BB.call(Mj, vB)
      }), [vB]);
      const Ej = (0, nB.useRef)(BB.onMeasured);
      (0, nB.useLayoutEffect)((() => {
        Ej.current = BB.onMeasured
      }));
      const ij = (0, nB.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        qj = [pz(xB), gB.width, gB.height, KB.top, KB.right, KB.bottom, KB.left, bB, eB].join("|");
      (0, nB.useEffect)((() => {
        const BB = Sj ? Sj.split(",") : [],
          jB = () => {
            var jB;
            null === (jB = Ej.current) || void 0 === jB || jB.call(Ej, wB, BB, ij.current.caps)
          };
        let zB;
        const QB = () => {
          const BB = zj.current;
          if (!lB || BB === ij.current.layout && qj === ij.current.input) return !1;
          const nB = nj.current + 250 - performance.now();
          return BB === ij.current.layout && (nB > 0 || WB()) ? (zB = setTimeout((() => {
            QB() && jB()
          }), Math.max(nB, 62.5)), !1) : (ij.current = {
            layout: BB,
            input: qj,
            caps: {
              hotbar: bj(lB, Fj),
              cluster: sz(lB, (0, HB.C)(gB.width, gB.height, KB), Fj)
            }
          }, !0)
        };
        return QB(), jB(), () => {
          clearTimeout(zB)
        }
      }), [wB, Sj, lB, gB, KB, qj, WB]);
      const fj = BB => ({
        left: BB.left * XB,
        top: BB.top * XB,
        width: (BB.right - BB.left) * XB,
        height: (BB.bottom - BB.top) * XB
      });
      return (0, tB.jsx)("div", {
        ref: EB,
        className: uB()("HudPreviewBox", {
          Fill: kB
        }),
        style: {
          height: gB.height * XB
        },
        children: (0, tB.jsxs)("div", {
          ref: iB,
          className: "HudPreviewStage",
          style: {
            width: gB.width * XB,
            height: gB.height * XB
          },
          children: [(0, tB.jsx)("iframe", {
            ref: qB,
            className: "HudPreviewFrame",
            title: LB("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: gB.width,
              height: gB.height,
              transform: `scale(${XB})`
            }
          }), lB && (0, Ij.createPortal)((0, tB.jsx)(Hj, {
            presence: sB,
            portraitPhone: Gj,
            hidden: mj,
            actionButtons: pB,
            joystickFixed: rB,
            keysAbove: cB,
            auraBar: SB,
            trayState: tj,
            moved: gj
          }), lB.body), (0, tB.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...uj.handlers,
            children: [(0, tB.jsx)("div", {
              ref: YB,
              className: "HudPreviewSafeZone",
              style: {
                top: KB.top * XB,
                right: KB.right * XB,
                bottom: KB.bottom * XB,
                left: KB.left * XB
              }
            }), xB.map(((BB, jB) => {
              let {
                id: zB,
                box: QB
              } = BB;
              return (0, tB.jsx)("div", {
                className: "HudPreviewHandle",
                style: fj((0, HB.t)(QB, 40 / XB))
              }, `${zB}:${jB}`)
            })), MB.hudLocked.map((BB => {
              const jB = wB[BB];
              return jB && (0, tB.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: jB.right * XB,
                  top: jB.top * XB
                },
                children: (0, tB.jsx)(oB.c, {
                  name: "lock"
                })
              }, BB)
            })), (0, tB.jsx)("div", {
              ref: FB,
              className: "HudPreviewCentreLine",
              style: {
                left: gB.width / 2 * XB
              }
            }), IB && yj && (0, tB.jsx)("div", {
              ref: fB,
              className: uB()("HudPreviewRing", {
                Fixed: !aB(IB),
                Overlap: Lj.length > 0
              }),
              style: fj(yj),
              children: (0, tB.jsx)("span", {
                className: uB()("HudPreviewRingLabel", Gz(IB, kj, wB, XB, gB)),
                children: kj
              })
            })]
          })]
        })
      })
    }

    function tz(BB, jB) {
      (0, nB.useEffect)((() => {
        var zB;
        null === (zB = BB.current) || void 0 === zB || zB.toggleAttribute("inert", jB)
      }), [BB, jB])
    }
    const Sz = "hudFullScreen";

    function Mz(BB) {
      let {
        onScale: jB,
        onHidden: zB,
        onReset: dB,
        locked: IB,
        lockable: NB,
        onLocked: uB,
        onClose: aB,
        ...pB
      } = BB;
      const {
        t: rB
      } = (0, QB.D)(), sB = (0, nB.useRef)(null);
      (0, Nj.v)("popup", sB, aB),
      function(BB) {
        const jB = (0, nB.useRef)(BB);
        jB.current = BB, (0, nB.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Sz]: !0
          }, "");
          let BB = !1;
          const zB = () => {
            BB = !0, jB.current()
          };
          return window.addEventListener("popstate", zB), () => {
            var jB;
            window.removeEventListener("popstate", zB), !BB && null !== (jB = window.history.state) && void 0 !== jB && jB[Sz] && window.history.back()
          }
        }), [])
      }(aB), (0, nB.useEffect)((() => {
        function BB(BB) {
          "Escape" === BB.key && (BB.stopPropagation(), aB())
        }
        return window.addEventListener("keydown", BB, !0), () => {
          window.removeEventListener("keydown", BB, !0)
        }
      }), [aB]);
      const {
        selected: JB
      } = pB, mB = (0, nB.useRef)(null), yB = (0, nB.useRef)(null), [kB, GB] = (0, nB.useState)(!1);
      tz(yB, !kB);
      const [LB, gB] = (0, nB.useState)(null), [SB, MB] = (0, nB.useState)([]), [EB, iB] = Dj(), qB = (0, nB.useRef)(pB.selected);
      qB.current = pB.selected;
      const fB = (0, nB.useRef)({}),
        oB = (0, nB.useCallback)((() => {
          const BB = mB.current;
          BB && gB(function(BB, jB, zB) {
            var QB;
            const {
              innerWidth: nB,
              innerHeight: dB
            } = window, IB = BB.offsetWidth, NB = BB.offsetHeight, uB = Math.max(Kj()[0], 6), UB = [];
            for (const rB of [uB, .2 * dB, .5 * dB - NB / 2, .33 * dB])
              for (const BB of [.5, .3, .7]) UB.push({
                left: Math.max(0, Math.min(nB - IB - 6, Math.max(6, nB * BB - IB / 2))),
                top: rB
              });
            const aB = UB.map((BB => ({
                left: BB.left - 6,
                top: BB.top - 6,
                right: BB.left + IB + 6,
                bottom: BB.top + NB + 6
              }))),
              pB = az(jB, zB);
            return UB[(0, HB.u)(aB, pB, {
              avoid: zB && null !== (QB = jB[zB]) && void 0 !== QB ? QB : null
            })]
          }(BB, fB.current, qB.current))
        }), []),
        DB = (0, nB.useCallback)(((BB, jB, zB) => {
          MB(jB), iB(zB), fB.current = BB, oB()
        }), [oB, iB]);
      return (0, nB.useLayoutEffect)(oB, [pB.selected, oB]), (0, Ij.createPortal)((0, tB.jsxs)("div", {
        ref: sB,
        className: "HudFullScreenEditor",
        children: [(0, tB.jsx)(gz, {
          ...pB,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: DB,
          onReady: GB,
          lockable: NB
        }), (0, tB.jsxs)("div", {
          ref: mB,
          className: "HudFullScreenToolbar",
          style: null === LB ? void 0 : {
            left: LB.left,
            top: LB.top,
            transform: "none"
          },
          children: [(0, tB.jsx)("div", {
            ref: yB,
            className: "HudFullScreenControls",
            children: (0, tB.jsx)(Yj, {
              selected: JB,
              layout: pB.layout.hudLayouts[pB.orientation],
              actionButtons: pB.actionButtons,
              keyNames: pB.keyNames,
              overlaps: SB,
              scaleCaps: EB,
              onScale: jB,
              onHidden: zB,
              onReset: dB,
              locked: IB,
              lockable: NB,
              onLocked: uB,
              joystickFixed: pB.joystickFixed
            })
          }), (0, tB.jsx)(UB.f, {
            className: "HudFullScreenDone",
            onClick: aB,
            padDefaultFocus: !0,
            children: rB("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const Ez = BB => `${Math.round(100*BB)}%`;

    function iz(BB) {
      let {
        info: jB,
        tuple: zB,
        props: nB
      } = BB;
      const {
        t: dB
      } = (0, QB.D)();
      return (0, tB.jsx)(sB.f, {
        name: dB("hudLayout:size"),
        min: DB.k,
        max: DB.h,
        step: Fj,
        initValue: zB[2],
        disabled: nB.locked.has(jB.id),
        selectableMax: nB.scaleCaps[jB.id],
        cappedNote: dB("hudLayout:sizeCapped"),
        format: Ez,
        onChange: BB => {
          nB.onScalePreview(jB.id, BB)
        },
        onChangeComplete: BB => {
          nB.onScale(jB.id, BB)
        }
      })
    }

    function qz(BB) {
      const {
        t: jB
      } = (0, QB.D)(), {
        present: zB,
        elements: dB,
        selected: IB,
        onSelect: NB,
        onHidden: UB,
        onReset: aB,
        note: pB,
        actionButtons: rB,
        keyNames: sB,
        sizeBesidePreview: JB,
        locked: mB,
        lockable: yB,
        onLocked: kB
      } = BB, {
        rowIconsOpen: GB,
        onRowIconsOpen: LB
      } = BB, gB = (0, nB.useRef)(null), SB = null !== IB && (GB || !(0, DB.S)(IB));
      return (0, nB.useEffect)((() => {
        var BB;
        const jB = IB ? null === (BB = gB.current) || void 0 === BB ? void 0 : BB.querySelector(`[data-hud-row="${IB}"]`) : null;
        if (!jB) return;
        const zB = jB.closest(".SettingsMenuRight"),
          QB = performance.now();
        let nB = null;
        const dB = () => {
            clearInterval(uB), null === zB || void 0 === zB || zB.removeEventListener("scroll", NB)
          },
          NB = () => {
            nz() || dB()
          },
          uB = setInterval((() => {
            const BB = performance.now();
            BB - QB > 1500 ? dB() : nz() ? nB = null : null === nB ? nB = BB : BB - nB >= 150 && (dB(), function(BB) {
              var jB;
              const zB = BB.closest(".SettingsMenuRight"),
                QB = null === (jB = BB.closest(".HudLayoutSettings")) || void 0 === jB ? void 0 : jB.querySelector(".HudLayoutPreviewBox");
              if (!zB || !QB) return;
              const nB = QB.getBoundingClientRect().bottom + 8,
                dB = zB.getBoundingClientRect().bottom - 8,
                IB = BB.getBoundingClientRect();
              IB.top < nB ? zB.scrollBy({
                top: IB.top - nB,
                behavior: "smooth"
              }) : IB.bottom > dB && zB.scrollBy({
                top: Math.min(IB.bottom - dB, IB.top - nB),
                behavior: "smooth"
              })
            }(jB))
          }), 50);
        return null === zB || void 0 === zB || zB.addEventListener("scroll", NB, {
          passive: !0
        }), dB
      }), [IB, SB]), (0, tB.jsx)("div", {
        ref: gB,
        className: "SettingBoxGroup HudElementList",
        children: wB.filter((BB => zB.has(BB.id) && (GB || !(0, DB.S)(BB.id)))).map((zB => {
          const QB = ((BB, jB) => {
              var zB;
              return null !== (zB = BB[jB]) && void 0 !== zB ? zB : DB.m
            })(dB, zB.id),
            nB = (0, DB.s)(dB, zB.id),
            gB = zB.id === IB,
            SB = zB.scale && !JB,
            MB = pB(zB.id, gB);
          return (0, tB.jsxs)("div", {
            "data-hud-row": zB.id,
            className: uB()("SettingBox HudElementRow", {
              Open: gB,
              Hidden: nB,
              Child: void 0 !== zB.parent,
              Grandchild: ZB(zB.id).length > 1
            }),
            children: [(0, tB.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, tB.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": SB ? gB : void 0,
                onClick: () => {
                  NB(zB.id)
                },
                children: (0, tB.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [CB(zB.id, rB, jB, sB), zB.scale && 1 !== QB[2] && !(gB && SB) && (0, tB.jsxs)(tB.Fragment, {
                    children: [" ", (0, tB.jsx)("span", {
                      className: "HudElementRowSize",
                      children: Ez(QB[2])
                    })]
                  }), SB && (0, tB.jsxs)(tB.Fragment, {
                    children: [" ", (0, tB.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, tB.jsx)(OB, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: zB.id,
                actionButtons: rB,
                keyNames: sB,
                locked: mB.has(zB.id),
                lockable: yB(zB.id),
                onLocked: kB
              }), "menu" === zB.id && (0, tB.jsx)(Bj, {
                className: "HudElementRowIcon",
                open: GB,
                name: CB(zB.id, rB, jB, sB),
                onToggle: LB
              }), "menu" !== zB.id && (0, tB.jsx)(vB, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: zB.id,
                elements: dB,
                actionButtons: rB,
                keyNames: sB,
                onHidden: UB
              }), (0, tB.jsx)(RB, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: mB.has(zB.id),
                id: zB.id,
                elements: dB,
                actionButtons: rB,
                keyNames: sB,
                onReset: aB
              })]
            }), gB && SB && (0, tB.jsx)(iz, {
              info: zB,
              tuple: QB,
              props: BB
            }), MB && (0, tB.jsx)("div", {
              className: "HudElementNote",
              children: MB
            })]
          }, zB.id)
        }))
      })
    }

    function fz(BB) {
      let {
        preview: jB,
        quick: zB,
        onFullScreen: dB,
        resting: IB,
        onSidePanel: NB
      } = BB;
      const {
        t: uB
      } = (0, QB.D)(), aB = Lz(), pB = (0, nB.useRef)(null), {
        width: rB
      } = (0, Uj.b)(pB), sB = Math.floor(aB.width * Math.min(1, jB.maxHeight / aB.height)), JB = rB - sB - 12, mB = JB >= 130, yB = rB > 0;
      (0, nB.useEffect)((() => {
        yB && NB(mB)
      }), [yB, mB, NB]);
      const kB = (0, HB.A)(mB ? sB : rB, aB.width, aB.height, jB.maxHeight),
        GB = IB ? (0, tB.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: aB.height * kB
          }
        }) : (0, tB.jsx)(gz, {
          ...jB
        }),
        LB = BB => (0, tB.jsxs)(UB.M, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: uB("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: dB,
          children: [(0, tB.jsx)(oB.c, {
            name: "expand"
          }), BB && (0, tB.jsx)("span", {
            children: uB("hudLayout:fullScreen")
          })]
        });
      return (0, tB.jsxs)("div", {
        ref: pB,
        className: "SettingBox HudLayoutPreviewBox",
        children: [rB > 0 && mB && (0, tB.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, tB.jsx)("div", {
            style: {
              width: sB
            },
            children: GB
          }), (0, tB.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, tB.jsx)(Yj, {
              selected: jB.selected,
              ...zB,
              joystickFixed: jB.joystickFixed,
              extra: LB(!jB.selected || JB >= 278)
            })
          })]
        }), rB > 0 && !mB && (0, tB.jsxs)(tB.Fragment, {
          children: [GB, (0, tB.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: LB(!1)
          })]
        })]
      })
    }
    var oz = zB(2574),
      Hz = zB(4527),
      Dz = zB(2550),
      Fz = zB(2501);
    const Yz = BB => {
      const jB = rj.q * ("sides" === BB ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(jB / 2))
    };

    function Vz(BB, jB, zB) {
      const [QB, nB, dB, IB] = BB;
      return "sides" === jB ? [QB, zB, dB, zB] : [zB, nB, zB, IB]
    }
    const hz = [null, null, null, null],
      Xz = BB => `${BB}px`;

    function Zz(BB) {
      let {
        safe: jB,
        onPreview: zB,
        onCommit: dB
      } = BB;
      const {
        t: IB
      } = (0, QB.D)(), NB = (0, rj.B)(null !== jB && void 0 !== jB ? jB : hz, window.innerWidth, window.innerHeight, Cj(document).map(Math.round)), uB = (0, nB.useRef)(null !== jB && void 0 !== jB ? jB : hz);
      uB.current = null !== jB && void 0 !== jB ? jB : hz;
      const aB = BB => {
        const jB = Math.min(Yz(BB), "sides" === BB ? Math.max(NB[1], NB[3]) : Math.max(NB[0], NB[2]));
        return (0, tB.jsx)(sB.f, {
          name: IB("sides" === BB ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: Yz(BB),
          step: 2,
          initValue: jB,
          format: Xz,
          onChange: jB => {
            zB(Vz(uB.current, BB, jB))
          },
          onChangeComplete: QB => {
            if (QB === jB) return void zB(uB.current);
            const nB = Vz(uB.current, BB, QB);
            uB.current = nB, dB(nB), (0, EB.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: BB
            })
          }
        })
      };
      return (0, tB.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, tB.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, tB.jsx)("div", {
            children: IB("hudLayout:safeZone")
          }), (0, tB.jsx)(UB.M, {
            active: null === jB,
            pressed: null === jB,
            onClick: () => {
              dB(null)
            },
            children: IB("hudLayout:safeZoneAuto")
          })]
        }), aB("sides"), aB("ends")]
      })
    }

    function Az() {
      const {
        t: BB
      } = (0, QB.D)(), jB = (0, DB.Z)(), {
        clientEscMenuOptions: zB
      } = (0, aB.m)(["clientEscMenuOptions"]), dB = (0, oz.f)(), IB = jB.hudLayouts[dB], [NB, uB] = (0, nB.useState)(null), {
        rowIconsOpen: pB,
        onRowIconsOpen: rB,
        select: JB
      } = function(BB, jB) {
        const [zB, QB] = (0, nB.useState)((() => DB.F.some((jB => void 0 !== BB.hudElements[jB] || BB.hudLocked.includes(jB))))), dB = (0, nB.useCallback)((BB => {
          jB(BB), (0, DB.S)(BB) && QB(!0)
        }), [jB]);
        return {
          rowIconsOpen: zB,
          onRowIconsOpen: QB,
          select: dB
        }
      }(IB, uB), [mB, yB] = (0, nB.useState)([]), [kB, GB] = (0, nB.useState)(null), [LB, gB] = Dj(), SB = (0, nB.useCallback)(((BB, jB, zB) => {
        yB(jB), gB(zB);
        const QB = Object.keys(BB);
        GB((BB => (null === BB || void 0 === BB ? void 0 : BB.size) === QB.length && QB.every((jB => BB.has(jB))) ? BB : new Set(QB)))
      }), [gB]), {
        gameState: MB
      } = (0, aB.m)(["gameState"]), qB = (0, Dz.l)(), fB = (0, Fz.p)(), [oB] = (0, nB.useState)((() => {
        var BB, jB, zB, QB;
        return "inGame" === MB ? (0, Jj.p)(document, qB, {
          rightOfCamera: null !== (BB = null === (jB = fB.rightOfCamera) || void 0 === jB ? void 0 : jB.icon) && void 0 !== BB ? BB : null,
          leftEnd: null !== (zB = null === (QB = fB.leftEnd) || void 0 === QB ? void 0 : QB.icon) && void 0 !== zB ? zB : null
        }) : Jj.d
      })), HB = (0, nB.useRef)(null), FB = (0, nB.useRef)(null), YB = function(BB) {
        const [jB, zB] = (0, nB.useState)((() => .4 * window.innerHeight));
        return (0, nB.useLayoutEffect)((() => {
          var jB;
          const QB = null === (jB = BB.current) || void 0 === jB ? void 0 : jB.closest(".SettingsMenuRight");
          if (!QB) return;
          const nB = () => {
            const BB = QB.clientHeight < Tz ? .4 : .5;
            zB(Math.max(80, QB.clientHeight * BB - 24))
          };
          nB();
          const dB = new ResizeObserver(nB);
          return dB.observe(QB), () => {
            dB.disconnect()
          }
        }), [BB]), jB
      }(FB), VB = (0, Hz.m)(zB.joystickMode), hB = zB.touchActionButtons, ZB = (0, nB.useMemo)((() => (0, Jj.n)(oB, hB)), [oB, hB]), AB = (0, nB.useMemo)((() => new Set((0, Jj.m)(oB, hB).map((BB => Jj.e[BB])))), [oB, hB]);
      (0, nB.useEffect)((() => {
        (0, EB.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [TB, PB] = (0, nB.useState)(!1), [WB, eB] = (0, nB.useState)(!1), lB = (0, nB.useRef)(null);
      tz(lB, !WB);
      const [KB, bB] = (0, nB.useState)(!1), vB = (0, nB.useCallback)((() => {
        bB(!1)
      }), []), RB = (0, nB.useMemo)((() => new Set(IB.hudLocked)), [IB.hudLocked]), OB = BB => {
        var jB, zB;
        const QB = (0, DB.p)(),
          nB = BB(QB);
        (0, DB.X)(null !== (jB = null === (zB = HB.current) || void 0 === zB ? void 0 : zB.keepLocks(QB, nB)) && void 0 !== jB ? jB : nB)
      }, Bj = (BB, jB) => {
        OB((zB => (0, DB.ab)(zB, dB, BB, jB)))
      }, jj = (BB, jB, zB) => {
        Bj(BB, {
          dx: jB,
          dy: zB
        }), (0, EB.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${BB}`
        })
      }, zj = (BB, jB) => {
        OB((zB => (0, DB.eb)(zB, dB, BB, jB)))
      }, Qj = BB => {
        const jB = xB[BB];
        return (jB.move || jB.scale) && ("joystick" !== BB || VB) && !(0, aj.y)(BB, IB.hudElements[BB])
      }, Ij = BB => xB[BB].move && ("joystick" !== BB || VB) && !RB.has(BB), Nj = new Set(wB.map((BB => BB.id)).filter((BB => {
        const jB = (0, DB.S)(BB) && !oB.rowIcons.includes(BB);
        return null === kB || kB.has(BB) || (0, DB.s)(IB.hudElements, BB) && !jB
      }))), uj = {
        present: Nj,
        actionButtons: hB,
        keyNames: ZB,
        scaleCaps: LB,
        sizeBesidePreview: TB,
        elements: IB.hudElements,
        selected: NB,
        onSelect: JB,
        rowIconsOpen: pB,
        onRowIconsOpen: rB,
        onScalePreview: (BB, jB) => {
          var zB;
          null === (zB = HB.current) || void 0 === zB || zB.setScale(BB, jB)
        },
        onScale: (BB, jB) => {
          Bj(BB, {
            scale: jB
          }), (0, EB.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${BB}`
          })
        },
        onHidden: (BB, jB) => {
          Bj(BB, {
            hidden: jB
          }), (0, EB.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${jB?"hide":"show"}:${BB}`
          })
        },
        onReset: BB => {
          Bj(BB, DB.b)
        },
        locked: RB,
        lockable: Qj,
        onLocked: zj,
        note: (jB, zB) => {
          const QB = zB && mB.length > 0 ? BB("hudLayout:overlapsNote", {
            names: cB(mB, hB, BB, ZB)
          }) : null;
          if (zB && nj(jB, VB)) return (0, tB.jsxs)(tB.Fragment, {
            children: [QB && (0, tB.jsx)("span", {
              children: QB
            }), (0, tB.jsx)("span", {
              children: BB("hudLayout:floatingJoystickNote")
            }), !TB && (0, tB.jsx)(dj, {})]
          });
          if (QB) return QB;
          const nB = zB && RB.has(jB) ? BB("hudLayout:lockedNote") : null,
            dB = zB && AB.has(jB) ? BB("hudLayout:contextSlotNote") : null;
          return nB || dB ? (0, tB.jsxs)(tB.Fragment, {
            children: [nB && (0, tB.jsx)("span", {
              children: nB
            }), dB && (0, tB.jsx)("span", {
              children: dB
            })]
          }) : zB && "cluster" === jB ? BB("hudLayout:clusterNote") : zB && "inventory" === jB ? BB("hudLayout:inventoryNote") : zB && "menu" === jB ? BB("hudLayout:menuNote") : zB && (0, aj.y)(jB, IB.hudElements[jB]) && Ij(jB) ? BB("hudLayout:rowIconNote") : zB && "arrows" === jB ? BB("hudLayout:arrowsNote") : zB && "sprint" === jB ? BB("hudLayout:sprintNote") : XB(jB) && (0, DB.s)(IB.hudElements, jB) ? BB("hudLayout:inventoryHiddenNote", {
            name: CB(jB, hB, BB, ZB)
          }) : null
        }
      };
      return (0, tB.jsxs)("div", {
        ref: FB,
        className: "HudLayoutSettings",
        children: [(0, tB.jsxs)("div", {
          ref: lB,
          className: "HudLayoutBody",
          children: [(0, tB.jsx)("div", {
            className: "HudLayoutOrientation",
            children: BB("landscape" === dB ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, tB.jsx)(fz, {
            preview: {
              layout: jB,
              orientation: dB,
              selected: NB,
              onSelect: JB,
              onMove: jj,
              canMove: Ij,
              actionButtons: hB,
              joystickFixed: VB,
              presence: oB,
              keyNames: ZB,
              maxHeight: YB,
              apiRef: HB,
              onMeasured: SB,
              onReady: eB,
              lockable: Qj
            },
            quick: {
              layout: IB,
              actionButtons: hB,
              keyNames: ZB,
              scaleCaps: LB,
              overlaps: mB,
              onScale: uj.onScale,
              onHidden: uj.onHidden,
              onReset: uj.onReset,
              locked: RB,
              lockable: Qj,
              onLocked: zj
            },
            onFullScreen: () => {
              bB(!0)
            },
            resting: KB,
            onSidePanel: PB
          }), KB && (0, tB.jsx)(Mz, {
            layout: jB,
            orientation: dB,
            selected: NB,
            onSelect: JB,
            onMove: jj,
            canMove: Ij,
            actionButtons: hB,
            joystickFixed: VB,
            presence: oB,
            keyNames: ZB,
            onScale: uj.onScale,
            onHidden: uj.onHidden,
            onReset: uj.onReset,
            locked: RB,
            lockable: Qj,
            onLocked: zj,
            apiRef: HB,
            onClose: vB
          }), (0, tB.jsx)(Zz, {
            safe: IB.hudSafe,
            onCommit: BB => {
              OB((jB => (0, DB.fb)(jB, dB, BB)))
            },
            onPreview: BB => {
              var jB;
              null === (jB = HB.current) || void 0 === jB || jB.setSafe(BB)
            }
          }), (0, tB.jsx)(sB.b, {
            label: BB("hudLayout:snapCentre"),
            checked: jB.hudSnapCentre,
            onClick: BB => {
              (0, DB.V)(BB)
            },
            circleInfoText: BB("hudLayout:snapCentreInfo")
          }), (0, tB.jsx)(qz, {
            ...uj
          }), (0, tB.jsx)(sB.c, {
            label: BB("hudLayout:shape"),
            options: DB.J.map((jB => ({
              value: jB,
              label: BB(`hudLayout:shape_${jB}`)
            }))),
            value: jB.hudShape,
            onChange: BB => {
              OB((jB => ({
                ...jB,
                hudShape: BB
              }))), (0, EB.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: BB
              })
            }
          }), (0, tB.jsx)(sB.f, {
            name: BB("hudLayout:opacity"),
            min: DB.e,
            max: 1,
            step: .05,
            initValue: jB.hudKeyOpacity,
            format: BB => `${Math.round(100*BB)}%`,
            circleInfoText: BB("hudLayout:opacityInfo"),
            onChange: BB => {
              var jB;
              null === (jB = HB.current) || void 0 === jB || jB.setOpacity(BB)
            },
            onChangeComplete: BB => {
              (0, DB.U)(BB), (0, EB.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, tB.jsx)(UB.G, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const BB = iB.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await BB.getResult() && (0, DB.T)()
            }()
          },
          children: BB("hudLayout:resetAll")
        })]
      })
    }
    const Tz = 350;
    const Pz = [function() {
      const {
        t: BB
      } = (0, QB.D)(), [jB, zB] = (0, nB.useState)(!1), dB = (0, nB.useRef)(null);
      return (0, nB.useEffect)((() => {
        var BB;
        jB && (null === (BB = dB.current) || void 0 === BB || BB.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [jB]), (0, tB.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, tB.jsx)(qB.c, {
          ref: dB,
          icon: "arrows-up-down-left-right",
          title: BB("hudLayout:title"),
          sub: BB("hudLayout:entrySub"),
          expanded: jB,
          onClick: () => {
            zB(!jB)
          }
        }), jB && (0, tB.jsx)(Az, {})]
      })
    }, function() {
      const {
        t: BB
      } = (0, QB.D)(), {
        joystickMode: jB,
        touchSpeedCurve: zB,
        autorun: nB,
        jumpLock: dB,
        touchEdgeGuard: IB
      } = (0, aB.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, tB.jsxs)(tB.Fragment, {
        children: [(0, tB.jsx)(sB.c, {
          label: BB("settingsMenu:joystick"),
          options: gB.ob.map((jB => ({
            value: jB,
            label: BB(SB[jB])
          }))),
          value: jB,
          onChange: BB => {
            aB.c.setClientEscMenuOptions({
              joystickMode: BB
            })
          },
          circleInfoText: BB("settingsMenu:joystickInfo")
        }), (0, tB.jsx)(sB.b, {
          label: BB("settingsMenu:preciseWalking"),
          checked: zB,
          onClick: BB => {
            aB.c.setClientEscMenuOptions({
              touchSpeedCurve: BB
            })
          },
          circleInfoText: BB("settingsMenu:preciseWalkingInfo")
        }), (0, tB.jsx)(sB.b, {
          label: BB("settingsMenu:autoRun"),
          checked: nB,
          onClick: BB => {
            aB.c.setClientEscMenuOptions({
              autorun: BB
            })
          },
          circleInfoText: BB("settingsMenu:autoRunInfo")
        }), (0, tB.jsx)(sB.b, {
          label: BB("settingsMenu:jumpLock"),
          checked: dB,
          onClick: BB => {
            aB.c.setClientEscMenuOptions({
              jumpLock: BB
            })
          },
          circleInfoText: BB("settingsMenu:jumpLockInfo")
        }), (0, tB.jsx)(sB.b, {
          label: BB("touchSettings:stopAtEdges"),
          checked: IB,
          onClick: BB => {
            aB.c.setClientEscMenuOptions({
              touchEdgeGuard: BB
            })
          },
          circleInfoText: BB("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, tB.jsx)(LB.b, {})
    }, function() {
      const {
        t: BB
      } = (0, QB.D)(), {
        clientEscMenuOptions: jB
      } = (0, aB.m)(["clientEscMenuOptions"]);
      return (0, MB.e)() ? (0, tB.jsx)(sB.b, {
        label: BB("settingsMenu:vibration"),
        checked: jB.vibration,
        onClick: BB => {
          aB.c.setClientEscMenuOptions({
            vibration: BB
          })
        },
        circleInfoText: BB("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Wz() {
      return (0, tB.jsx)(tB.Fragment, {
        children: Pz.map(((BB, jB) => (0, tB.jsx)(BB, {}, jB)))
      })
    }
    var ez = zB(4485);

    function lz() {
      const {
        t: BB
      } = (0, QB.D)(), {
        isTouchScreen: jB,
        clientEscMenuOptions: zB,
        gameState: IB
      } = (0, aB.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), NB = (0, JB.i)("ezBridging"), uB = (0, JB.i)("ezTowering"), yB = "inGame" !== IB || !0 === NB, kB = (0, mB.e)(), LB = null !== kB && ("inGame" !== IB || !0 === uB), [, gB] = (0, nB.useReducer)((BB => BB + 1), 0), SB = (0, GB.i)(), [MB, EB] = (0, nB.useState)(ez.g);
      return (0, tB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [SB && (0, tB.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, tB.jsx)("div", {
            children: BB("controller:settingsControlsNote")
          }), (0, tB.jsx)(UB.M, {
            onClick: () => {
              aB.c.set({
                openSettingsCategory: "controller"
              })
            },
            children: BB("controller:settingsOpenController")
          })]
        }), (0, pB.isTouchscreen)() && !(0, pB.isMobile)() ? (0, tB.jsx)(tB.Fragment, {
          children: (0, tB.jsx)(sB.b, {
            label: BB("settingsMenu:useTouchControls"),
            checked: MB,
            onClick: BB => {
              (0, ez.c)(BB), EB(BB)
            }
          })
        }) : null, jB && (0, tB.jsx)(Wz, {}), yB && (0, tB.jsx)(sB.b, {
          label: BB("settingsMenu:ezBridging"),
          checked: zB.ezBridging,
          onClick: BB => {
            aB.c.setClientEscMenuOptions({
              ezBridging: BB
            })
          },
          circleInfoText: BB("settingsMenu:ezBridgingInfo")
        }), LB && (0, tB.jsx)(sB.b, {
          label: BB("settingsMenu:ezTowering"),
          checked: zB.ezTowering,
          onClick: BB => {
            aB.c.setClientEscMenuOptions({
              ezTowering: BB
            })
          },
          circleInfoText: BB("jump" === kB ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, tB.jsx)(sB.b, {
          label: BB("settingsMenu:crouchToggle"),
          checked: zB.crouchIsToggle,
          onClick: BB => {
            aB.c.setClientEscMenuOptions({
              crouchIsToggle: BB
            })
          },
          circleInfoText: BB("settingsMenu:crouchToggleInfo")
        }), (0, tB.jsx)(sB.b, {
          label: BB("settingsMenu:hideUiToggle"),
          checked: zB.hideUiIsToggle,
          onClick: BB => {
            aB.c.setClientEscMenuOptions({
              hideUiIsToggle: BB
            })
          },
          circleInfoText: BB("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, rB.c)() && (0, tB.jsx)(sB.f, {
          name: BB("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: zB.touchscreenSensitivity,
          onChange: BB => {
            aB.c.setClientEscMenuOptions({
              touchscreenSensitivity: BB
            })
          }
        }), !(0, pB.isMobile)() && (0, tB.jsx)(sB.f, {
          name: BB("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: zB.mouseSensitivity,
          onChange: BB => {
            aB.c.setClientEscMenuOptions({
              mouseSensitivity: BB
            })
          }
        }), !(0, pB.isMobile)() && (0, tB.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, tB.jsx)("div", {
            className: "SliderText",
            children: BB("settingsMenu:keyBindings")
          }), dB.f.map((jB => (0, tB.jsx)(wz, {
            title: BB(jB.name.translationKey, jB.name.params),
            defaultOpen: dB.h.has(jB.id),
            children: jB.actions.map((BB => (0, tB.jsx)(xz, {
              noaAction: BB,
              forceUpdate: gB,
              clashesWith: jB.clashesWith,
              showPadGlyph: SB
            }, BB)))
          }, jB.name.translationKey))), (0, tB.jsx)(UB.G, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, dB.I)(), gB()
            },
            children: BB("controls:resetBindings")
          })]
        })]
      })
    }

    function wz(BB) {
      let {
        title: jB,
        defaultOpen: zB,
        children: QB
      } = BB;
      const [dB, IB] = (0, nB.useState)(zB);
      return (0, tB.jsxs)("div", {
        className: uB()("ControlsSection", {
          Collapsed: !dB
        }),
        children: [(0, tB.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            IB(!dB)
          },
          children: [(0, tB.jsx)("div", {
            className: "ControlsSectionTitle",
            children: jB
          }), (0, tB.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), dB && (0, tB.jsx)("div", {
          className: "ControlsSectionRows",
          children: QB
        })]
      })
    }

    function xz(BB) {
      let {
        noaAction: jB,
        forceUpdate: zB,
        clashesWith: NB,
        showPadGlyph: aB
      } = BB;
      const {
        t: pB
      } = (0, QB.D)(), rB = (0, kB.c)(jB), [sB, JB] = (0, nB.useState)(!1), [mB, GB] = (0, nB.useState)("controls:clickToEnterNewBinding"), [LB, gB] = (0, nB.useState)(null), [SB, MB] = (0, nB.useState)(null), EB = (0, nB.useRef)(null);
      (0, nB.useEffect)((() => {
        sB && EB.current && EB.current.focus()
      }), [sB]);
      const iB = dB.w[jB].filter((BB => IB.e[BB]));
      let qB = null;
      const fB = [],
        oB = NB.flatMap((BB => {
          var jB, zB;
          return null !== (jB = null === (zB = dB.f.find((jB => jB.id === BB))) || void 0 === zB ? void 0 : zB.actions) && void 0 !== jB ? jB : []
        }));
      for (const QB of oB) {
        if (QB === jB) continue;
        const BB = dB.w[QB];
        for (const jB of BB) iB.includes(jB) && fB.push(pB(dB.A[QB].translationKey, dB.A[QB].params))
      }
      fB.length > 0 && (qB = pB("controls:sharedBindingsWarning") + " ", qB += fB.join(", "));
      const HB = () => {
          JB(!1), gB(null), GB("controls:clickToEnterNewBinding"), MB(null)
        },
        DB = () => "BindingInput_" + jB;
      return (0, tB.jsxs)("div", {
        className: uB()("ControlRow", {
          WarningBorder: null !== qB
        }),
        children: [(0, tB.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, tB.jsxs)("div", {
            className: "ControlName",
            children: [pB(dB.A[jB].translationKey, dB.A[jB].params), aB && rB && (0, tB.jsx)(yB.b, {
              glyph: rB,
              className: "ControlPadGlyph"
            })]
          }), (0, tB.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, tB.jsxs)("div", {
              className: "ControlBindingsList",
              children: [iB.map((BB => (0, tB.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, tB.jsx)("div", {
                  children: (0, dB.m)(BB)
                }), (0, tB.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const QB = (0, dB.B)(jB, BB);
                    QB.isError() ? MB(QB.asError().message) : MB(null), zB()
                  },
                  children: "\xd7"
                })]
              }, BB))), !sB && (0, tB.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  JB(!0), MB(null)
                },
                children: (0, tB.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), sB && (0, tB.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, tB.jsxs)("div", {
                className: "InputContainer",
                children: [(0, tB.jsx)("div", {
                  className: "InputOverlay",
                  children: LB ? (0, dB.m)(LB) : (0, tB.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: pB(mB)
                  })
                }), (0, tB.jsx)("input", {
                  ref: EB,
                  id: DB(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: BB => {
                    if ("Escape" === BB.code) return HB(), BB.preventDefault(), void BB.stopPropagation();
                    const jB = BB.code;
                    IB.b.includes(jB) ? (MB(null), gB(jB)) : (MB("controls:keyIsReserved"), gB(null)), BB.preventDefault(), BB.stopPropagation()
                  },
                  onMouseDown: BB => {
                    const jB = "Mouse" + (BB.button + 1);
                    document.activeElement && document.activeElement.id === DB() ? IB.b.includes(jB) ? (MB(null), gB(jB)) : (MB("controls:keyIsReserved"), gB(null)) : GB("controls:enterNewBinding"), BB.stopPropagation()
                  },
                  onBlur: () => {
                    GB("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, tB.jsx)(UB.f, {
                onPointerDown: BB => {
                  BB.preventDefault()
                },
                onClick: () => {
                  (0, dB.c)(jB, LB), zB(), HB()
                },
                className: "ControlBindingAddButton",
                disabled: null === LB,
                children: pB("general:add")
              }), (0, tB.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  HB()
                },
                children: "\xd7"
              })]
            }), SB && (0, tB.jsx)("div", {
              className: "ControlBindingError",
              children: pB(SB)
            })]
          })]
        }), qB && (0, tB.jsx)("div", {
          className: "ControlRowWarning",
          children: qB
        })]
      })
    }
  },
  8897: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB
    });
    var QB = zB(62),
      nB = zB(1108),
      dB = zB(1148);
    const IB = (0, QB.forwardRef)((function(BB, jB) {
      let {
        icon: zB,
        title: QB,
        sub: IB,
        expanded: NB,
        onClick: uB
      } = BB;
      return (0, dB.jsxs)("button", {
        ref: jB,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": NB,
        onClick: uB,
        children: [(0, dB.jsx)(nB.c, {
          name: zB,
          className: "FeaturedSettingsEntryIcon"
        }), (0, dB.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, dB.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: QB
          }), (0, dB.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: IB
          })]
        }), (0, dB.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  8671: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => kB,
      e: () => yB,
      f: () => aB,
      i: () => GB,
      l: () => LB,
      p: () => rB
    });
    var QB = zB(1694),
      nB = zB(1786);
    const dB = BB => BB >= 56320 && BB <= 57343,
      IB = BB => BB >= 55296 && BB <= 56319,
      NB = (BB, jB) => jB >= 2 && dB(BB.charCodeAt(jB - 1)) && IB(BB.charCodeAt(jB - 2)) ? jB - 2 : Math.max(0, jB - 1),
      uB = (BB, jB) => {
        let zB;
        var QB, nB;
        return zB = BB.start !== BB.end ? jB < 0 ? BB.start : BB.end : jB < 0 ? NB(BB.value, BB.start) : (QB = BB.value, (nB = BB.start) + 1 < QB.length && IB(QB.charCodeAt(nB)) && dB(QB.charCodeAt(nB + 1)) ? nB + 2 : Math.min(QB.length, nB + 1)), {
          value: BB.value,
          start: zB,
          end: zB
        }
      },
      UB = ["text", "search", "url", "email", "tel", "password", "number"],
      aB = BB => !(!(0, nB.e)(BB) || BB.isContentEditable || BB.hasAttribute("data-pad-no-osk")) && (BB instanceof HTMLTextAreaElement || BB instanceof HTMLInputElement && UB.includes(BB.type)),
      pB = BB => null !== BB.selectionStart,
      rB = BB => {
        var jB, zB;
        const {
          value: QB
        } = BB;
        return {
          value: QB,
          start: null !== (jB = BB.selectionStart) && void 0 !== jB ? jB : QB.length,
          end: null !== (zB = BB.selectionEnd) && void 0 !== zB ? zB : QB.length
        }
      },
      sB = (BB, jB, zB) => {
        if (BB.readOnly) return;
        const nB = BB instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(nB, "value").set.call(BB, jB.value), pB(BB) && BB.setSelectionRange(jB.start, jB.end), (0, QB.d)(BB, new InputEvent("input", {
          bubbles: !0,
          inputType: zB
        }))
      };
    let JB = !1;
    const mB = (BB, jB) => !!document.execCommand(BB, !1, jB) || (JB || (JB = !0, console.warn(`execCommand("${BB}") failed; the on-screen keyboard is setting the value directly`)), !1),
      yB = (BB, jB) => {
        mB("insertText", jB) || sB(BB, function(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const QB = BB.value.slice(0, BB.start),
            nB = BB.value.slice(BB.end);
          let dB = zB < 0 ? jB.length : Math.max(0, zB - QB.length - nB.length);
          dB > 0 && dB < jB.length && IB(jB.charCodeAt(dB - 1)) && dB--;
          const NB = jB.slice(0, dB),
            uB = QB.length + NB.length;
          return {
            value: QB + NB + nB,
            start: uB,
            end: uB
          }
        }(rB(BB), jB, BB.maxLength), "insertText")
      },
      kB = BB => {
        mB("delete") || sB(BB, (BB => {
          const jB = BB.start === BB.end ? NB(BB.value, BB.start) : BB.start;
          return {
            value: BB.value.slice(0, jB) + BB.value.slice(BB.end),
            start: jB,
            end: jB
          }
        })(rB(BB)), "deleteContentBackward")
      },
      GB = (BB, jB) => {
        if (!pB(BB)) return;
        const zB = uB(rB(BB), jB);
        BB.setSelectionRange(zB.start, zB.end)
      },
      LB = BB => {
        pB(BB) && 0 === BB.selectionStart && 0 === BB.selectionEnd && BB.setSelectionRange(BB.value.length, BB.value.length)
      }
  },
  8839: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB
    });
    var QB = zB(28),
      nB = zB(2196),
      dB = zB(1381),
      IB = zB(1418);
    const NB = async () => {
      if ((0, IB.l)()) {
        if (!0 !== await dB.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== QB.c.get("gameState")) return
      }(0, nB.f)()
    }
  },
  8841: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB,
      f: () => dB,
      j: () => IB,
      k: () => nB,
      l: () => NB
    });
    var QB = zB(2015);
    const nB = "controllerPadShopOpen",
      dB = BB => QB.j.includes(BB),
      IB = BB => Object.values(BB).some((BB => !1 !== BB.canBuy && !BB.isRewardedAd)),
      NB = (BB, jB, zB) => {
        var QB, nB, IB, NB;
        const uB = BB.filter((BB => !dB(BB))),
          UB = null !== jB && BB.includes(jB) ? jB : null;
        return null !== UB && !dB(UB) && zB(UB) ? UB : null !== (QB = null !== (nB = null !== (IB = null !== (NB = uB.find(zB)) && void 0 !== NB ? NB : uB[0]) && void 0 !== IB ? IB : UB) && void 0 !== nB ? nB : BB[0]) && void 0 !== QB ? QB : null
      },
      uB = BB => BB.userInput || BB.isRewardedAd || "boolean" === typeof BB.isSelected ? null : JSON.stringify([BB.image, BB.cost, BB.currency, BB.amount, BB.customTitle, BB.buyButtonText, BB.description, BB.canBuy])
  },
  8875: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => UB,
      i: () => aB
    });
    var QB = zB(62),
      nB = zB(1471),
      dB = zB(2065),
      IB = zB(1442),
      NB = zB(1453),
      uB = zB(1148);
    const UB = () => {
        const BB = (0, IB.k)();
        if ((0, QB.useEffect)((() => {
            (0, IB.g)()
          }), []), !BB) return null;
        const {
          ControllerCategory: jB
        } = BB;
        return (0, uB.jsx)(NB.d, {
          children: (0, uB.jsx)(jB, {})
        })
      },
      aB = () => {
        var BB;
        const jB = (0, IB.k)(),
          [, zB] = (0, QB.useReducer)((BB => BB + 1), 0);
        return (0, nB.f)(dB.d, zB), null !== (BB = null === jB || void 0 === jB ? void 0 : jB.hasActivePad()) && void 0 !== BB && BB
      }
  },
  8680: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => rB,
      e: () => QB,
      f: () => UB,
      h: () => mB,
      l: () => pB,
      p: () => JB,
      s: () => dB,
      v: () => sB,
      y: () => IB
    });
    const QB = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      nB = (BB, jB) => {
        if ("function" === typeof BB.checkVisibility) return !BB.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: jB,
          checkOpacity: jB
        });
        const {
          visibility: zB
        } = getComputedStyle(BB);
        if ("hidden" === zB || "collapse" === zB) return !0;
        if (!jB) return !1;
        for (let QB = BB; QB; QB = QB.parentElement)
          if ("0" === getComputedStyle(QB).opacity) return !0;
        return !1
      },
      dB = BB => {
        if (!BB.isConnected || nB(BB, !0)) return !1;
        const jB = BB.getBoundingClientRect();
        return jB.width > 0 && jB.height > 0
      },
      IB = BB => !!BB.matches(":disabled, [aria-disabled='true']") || "button" === BB.getAttribute("role") && "-1" === BB.getAttribute("tabindex"),
      NB = BB => {
        var jB;
        if (BB.closest("[data-pad-ignore]")) return !0;
        return !!(null === (jB = BB.parentElement) || void 0 === jB ? void 0 : jB.closest("[data-pad-focusable]"))
      },
      uB = BB => {
        const jB = BB.querySelectorAll(QB);
        return BB.matches(QB) ? [BB, ...jB] : jB
      },
      UB = BB => {
        const jB = [];
        for (const zB of uB(BB)) !NB(zB) && dB(zB) && jB.push(zB);
        return jB
      },
      aB = new WeakMap,
      pB = BB => {
        const jB = aB.get(BB);
        if (jB && rB(jB, BB)) return !0;
        for (const zB of uB(BB))
          if (!NB(zB) && dB(zB)) return aB.set(BB, zB), !0;
        return aB.delete(BB), !1
      },
      rB = (BB, jB) => jB.contains(BB) && BB.matches(QB) && !NB(BB) && dB(BB),
      sB = (BB, jB) => rB(BB, jB) && !IB(BB),
      JB = BB => {
        for (const jB of BB.querySelectorAll("[data-pad-initial-area]"))
          if (!nB(jB, !1)) return !0;
        return !1
      },
      mB = BB => {
        const jB = jB => {
          let zB = 0;
          for (let QB = jB.parentElement; QB && QB !== BB; QB = QB.parentElement) zB++;
          return zB
        };
        return [...BB.querySelectorAll("[data-pad-initial-area]")].filter(dB).sort(((BB, zB) => jB(zB) - jB(BB)))
      }
  },
  8658: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => SB,
      F: () => MB,
      H: () => yB,
      J: () => uB,
      M: () => aB,
      b: () => kB,
      f: () => iB,
      g: () => tB,
      k: () => gB,
      o: () => JB,
      q: () => mB,
      s: () => rB,
      v: () => sB,
      w: () => EB,
      x: () => UB,
      z: () => qB
    });
    var QB = zB(31),
      nB = zB(1694),
      dB = zB(8665),
      IB = zB(8671),
      NB = zB(8680);
    const uB = BB => (0, IB.f)(BB),
      UB = BB => {
        const jB = BB.getBoundingClientRect();
        return {
          x: jB.left + jB.width / 2,
          y: jB.top + jB.height / 2
        }
      },
      aB = (BB, jB, zB) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: BB.x,
        clientY: BB.y,
        screenX: BB.x,
        screenY: BB.y,
        button: jB,
        buttons: zB,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      pB = (BB, jB) => {
        (0, nB.d)(BB, jB)
      },
      rB = function(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const QB = 0 === zB ? 1 : 2;
        pB(BB, new PointerEvent("pointerdown", aB(jB, zB, QB))), pB(BB, new MouseEvent("mousedown", aB(jB, zB, QB)))
      },
      sB = function(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        pB(BB, new PointerEvent("pointerup", aB(jB, zB, 0))), pB(BB, new MouseEvent("mouseup", aB(jB, zB, 0)))
      },
      JB = function(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        rB(BB, jB, zB), sB(BB, jB, zB), pB(BB, 0 === zB ? new MouseEvent("click", aB(jB, 0, 0)) : new MouseEvent("contextmenu", aB(jB, 2, 0)))
      },
      mB = function(BB, jB, zB) {
        let {
          leaveBelow: QB = null,
          enterBelow: nB = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (BB !== jB) {
          if (null !== BB && void 0 !== BB && BB.isConnected) {
            const nB = {
              ...aB(zB, 0, 0),
              relatedTarget: jB
            };
            pB(BB, new PointerEvent("pointerout", nB)), pB(BB, new MouseEvent("mouseout", nB));
            const dB = BB => !!jB && BB.contains(jB) || !!QB && BB.contains(QB);
            for (let jB = BB; jB && !dB(jB); jB = jB.parentElement) pB(jB, new PointerEvent("pointerleave", {
              ...nB,
              bubbles: !1
            })), pB(jB, new MouseEvent("mouseleave", {
              ...nB,
              bubbles: !1
            }))
          }
          if (jB) {
            const QB = {
              ...aB(zB, 0, 0),
              relatedTarget: BB
            };
            pB(jB, new PointerEvent("pointerover", QB)), pB(jB, new MouseEvent("mouseover", QB));
            const dB = [],
              IB = jB => !(null === BB || void 0 === BB || !BB.isConnected) && jB.contains(BB) || !!nB && jB.contains(nB);
            for (let BB = jB; BB && !IB(BB); BB = BB.parentElement) dB.push(BB);
            for (const BB of dB.reverse()) pB(BB, new PointerEvent("pointerenter", {
              ...QB,
              bubbles: !1
            })), pB(BB, new MouseEvent("mouseenter", {
              ...QB,
              bubbles: !1
            }));
            pB(jB, new PointerEvent("pointermove", aB(zB, 0, 0))), pB(jB, new MouseEvent("mousemove", aB(zB, 0, 0)))
          }
        } else jB && (pB(jB, new PointerEvent("pointermove", aB(zB, 0, 0))), pB(jB, new MouseEvent("mousemove", aB(zB, 0, 0))))
      },
      yB = BB => {
        QB.n.Ly(dB.f, BB)
      },
      kB = BB => {
        if (uB(BB)) return void yB(BB);
        const jB = BB.hasAttribute("data-pad-focusable") ? BB.querySelector("a[href]") : null,
          zB = null !== jB && void 0 !== jB ? jB : BB;
        JB(zB, UB(zB))
      },
      GB = ".Dropdown-root.is-open",
      LB = BB => {
        const jB = BB.querySelector(".Dropdown-control");
        return kB(jB), jB
      },
      gB = BB => {
        var jB;
        const zB = null !== (jB = BB.closest(GB)) && void 0 !== jB ? jB : BB.querySelector(GB);
        return zB ? LB(zB) : null
      },
      tB = BB => {
        for (const jB of document.querySelectorAll(GB)) jB.contains(BB) || LB(jB)
      },
      SB = BB => null !== BB.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      MB = BB => {
        const jB = BB ? document.elementFromPoint(BB.x, BB.y) : null;
        return !(null === jB || void 0 === jB || !jB.closest("[data-pad-repeat]"))
      },
      EB = BB => {
        var jB;
        return null !== (jB = [...BB.querySelectorAll("[data-pad-back]")].find(NB.s)) && void 0 !== jB ? jB : null
      },
      iB = BB => {
        const jB = EB(BB);
        return !!jB && (kB(jB), !0)
      },
      qB = BB => {
        var jB, zB, QB, nB;
        return null !== (jB = null !== (zB = null !== (QB = BB.getAttribute("data-pad-key")) && void 0 !== QB ? QB : BB.getAttribute("href")) && void 0 !== zB ? zB : null === (nB = BB.querySelector("a[href]")) || void 0 === nB ? void 0 : nB.getAttribute("href")) && void 0 !== jB ? jB : null
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);