export const id = 179;
export const ids = [179];
export const modules = {
  10010: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd
    });
    var Wd = md(29),
      Fd = md(1238),
      Rd = md(5901),
      Xd = md(1341);

    function Kd(dd) {
      let {
        note: Od
      } = dd;
      const {
        t: md
      } = (0, Fd.G)(), {
        clientEscMenuOptions: Kd
      } = (0, Wd.p)(["clientEscMenuOptions"]);
      return (0, Xd.jsx)(Rd.e, {
        label: md("touchSettings:actionButtons"),
        checked: Kd.touchActionButtons,
        onClick: dd => {
          Wd.e.setClientEscMenuOptions({
            touchActionButtons: dd
          })
        },
        circleInfoText: md("touchSettings:actionButtonsInfo"),
        note: Od
      })
    }
  },
  9995: (dd, Od, md) => {
    md.d(Od, {
      d: () => Dm,
      e: () => jm
    });
    var Wd = md(1238),
      Fd = md(66),
      Rd = md(2134),
      Xd = md(2141),
      Kd = md(1155),
      hd = md.n(Kd),
      vd = md(1572),
      Qd = md(29),
      td = md(107),
      od = md(127),
      Nd = md(5901),
      qd = md(3403),
      Hd = md(320),
      yd = md(2146),
      bd = md(2149),
      Td = md(10003),
      pd = md(10010),
      Yd = md(387),
      gd = md(1341);
    const wd = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Ed = md(1605),
      Jd = md(10017),
      Ud = md(3444),
      xd = md(3503);
    var Bd = md(10023);
    var Sd = md(1462),
      sd = md(10030),
      ud = md(1518),
      Vd = md(1443),
      Ad = md(10034);

    function rd(dd) {
      let {
        className: Od,
        keepPlace: md
      } = dd;
      return md ? (0, gd.jsx)("div", {
        className: hd()(Od, "Placeholder")
      }) : null
    }

    function Gd(dd) {
      let {
        id: Od,
        elements: md,
        actionButtons: Fd,
        keyNames: Rd,
        className: Xd,
        keepPlace: Kd,
        onHidden: hd
      } = dd;
      const {
        t: Qd
      } = (0, Wd.G)();
      if (!Ad.k[Od].hide) return (0, gd.jsx)(rd, {
        className: Xd,
        keepPlace: Kd
      });
      const td = (0, Ud.s)(md, Od);
      return (0, gd.jsx)(vd.S, {
        className: Xd,
        ariaLabel: Qd(td ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: (0, Ad.A)(Od, Fd, Qd, Rd)
        }),
        pressed: !td,
        onClick: () => {
          hd(Od, !td)
        },
        children: (0, gd.jsx)(Vd.c, {
          name: td ? "eye-slash" : "eye"
        })
      })
    }

    function nd(dd) {
      let {
        id: Od,
        elements: md,
        actionButtons: Fd,
        keyNames: Rd,
        className: Xd,
        keepPlace: Kd,
        onlyWhenMoved: hd,
        locked: Qd,
        onReset: td
      } = dd;
      const {
        t: od
      } = (0, Wd.G)(), Nd = Ad.k[Od], qd = (0, Ud.G)(md[Od]);
      return !Nd.move && !Nd.scale || hd && qd ? (0, gd.jsx)(rd, {
        className: Xd,
        keepPlace: Kd
      }) : (0, gd.jsx)(vd.S, {
        className: Xd,
        disabled: qd || Qd,
        ariaLabel: od("hudLayout:resetElement", {
          name: (0, Ad.A)(Od, Fd, od, Rd)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: Od
        },
        onClick: dd => {
          hd && cd(dd.currentTarget), td(Od)
        },
        children: (0, gd.jsx)(Vd.c, {
          name: "rotate-left"
        })
      })
    }

    function Ld(dd) {
      let {
        id: Od,
        actionButtons: md,
        keyNames: Fd,
        className: Rd,
        keepPlace: Xd,
        locked: Kd,
        lockable: hd,
        onLocked: Qd
      } = dd;
      const {
        t: td
      } = (0, Wd.G)();
      return hd || Kd ? (0, gd.jsx)(vd.S, {
        className: Rd,
        ariaLabel: td(Kd ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: (0, Ad.A)(Od, md, td, Fd)
        }),
        pressed: Kd,
        active: Kd,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${Kd?"unlock":"lock"}:${Od}`
        },
        onClick: () => {
          Qd(Od, !Kd)
        },
        children: (0, gd.jsx)(Vd.c, {
          name: Kd ? "lock" : "lock-open"
        })
      }) : (0, gd.jsx)(rd, {
        className: Rd,
        keepPlace: Xd
      })
    }

    function Pd(dd) {
      let {
        className: Od,
        open: md,
        name: Fd,
        onToggle: Rd
      } = dd;
      const {
        t: Xd
      } = (0, Wd.G)();
      return (0, gd.jsx)(vd.S, {
        className: Od,
        ariaLabel: Xd(md ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Fd
        }),
        pressed: md,
        analyticsClick: {
          id: "hud_layout.children",
          value: md ? "close" : "open"
        },
        onClick: () => {
          Rd(!md)
        },
        children: (0, gd.jsx)(Vd.c, {
          name: md ? "angle-up" : "angle-down"
        })
      })
    }

    function zd(dd, Od) {
      var md;
      dd.contains(document.activeElement) && Od.focus({
        preventScroll: !0
      }), null === (md = (0, ud.h)()) || void 0 === md || md.handOverPadFocus(dd, Od)
    }

    function cd(dd) {
      const Od = dd.closest("[data-hud-row]"),
        md = null === Od || void 0 === Od ? void 0 : Od.querySelector(".HudElementRowName");
      return !(!Od || !md) && (zd(Od, md), !0)
    }
    const jd = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function Dd(dd, Od) {
      return "joystick" === dd && !Od
    }

    function ed() {
      const {
        t: dd
      } = (0, Wd.G)();
      return (0, gd.jsx)(vd.S, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: dd => {
          const Od = dd.currentTarget;
          if (!cd(Od)) {
            const dd = function(dd) {
              var Od, md;
              const Wd = [dd.previousElementSibling, dd.nextElementSibling].find((dd => dd instanceof HTMLElement && dd.matches(jd)));
              return null !== (Od = null !== Wd && void 0 !== Wd ? Wd : null === (md = dd.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === md ? void 0 : md.querySelector(`:is(${jd}):not(.HudFixJoystickButton)`)) && void 0 !== Od ? Od : null
            }(Od);
            dd && zd(Od, dd)
          }
          Qd.e.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: dd("hudLayout:fixJoystick")
      })
    }
    var Id = md(86),
      ld = md(1333),
      Cd = md(4308),
      Zd = md(3851),
      kd = md(10042),
      fd = md(10051),
      Md = md(3495),
      dO = md(3510),
      OO = md(4365),
      mO = md(405),
      WO = md(10053);
    const FO = dd => ({
      [Ad.i]: dd
    });

    function RO(dd) {
      let {
        id: Od,
        slot: md,
        icon: Wd,
        label: Rd,
        hidden: Xd,
        className: Kd,
        face: vd
      } = dd;
      const Qd = (0, Fd.useRef)(null);
      return (0, Fd.useLayoutEffect)((() => {
        vd && Qd.current && (0, WO.n)(Qd.current, vd)
      }), [vd]), (0, gd.jsxs)("div", {
        className: hd()("TouchKeyHit", `TouchSlot${md}`, Kd, {
          HudPreviewGhost: Xd.has(Od)
        }),
        ...FO(Od),
        children: [vd && (0, gd.jsx)("div", {
          ref: Qd,
          className: hd()("TouchKey", {
            Labelled: vd.classList.contains("Labelled")
          })
        }), !vd && (0, gd.jsxs)("div", {
          className: hd()("TouchKey", {
            Labelled: void 0 !== Rd
          }),
          children: [Wd && (0, gd.jsx)(Vd.c, {
            name: Wd
          }), void 0 !== Rd && (0, gd.jsx)("span", {
            className: "TouchKeyLabel",
            children: Rd
          })]
        })]
      })
    }

    function XO(dd) {
      let {
        item: Od,
        selected: md
      } = dd;
      const Wd = (0, Fd.useRef)(null);
      return (0, Fd.useLayoutEffect)((() => {
        Wd.current && (0, WO.n)(Wd.current, Od)
      }), [Od]), (0, gd.jsx)("div", {
        ref: Wd,
        className: hd()("InvenItem", {
          Selected: md
        })
      })
    }
    const KO = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      hO = dd => void 0 === dd ? {} : {
        style: {
          "--parked": dd
        }
      };

    function vO(dd) {
      let {
        id: Od,
        hidden: md,
        parked: Wd,
        unslotted: Fd = !1
      } = dd;
      return (0, gd.jsx)("div", {
        className: hd()("TopRightIcon", dO.h[Od], {
          HudPreviewGhost: md.has(Od),
          [Md.c]: void 0 !== Wd,
          [Md.e]: Fd
        }),
        ...hO(Wd),
        children: (0, gd.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...FO(Od),
          children: (0, gd.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, gd.jsx)(Vd.c, {
              name: KO[Od]
            })
          })
        })
      })
    }

    function QO(dd) {
      let {
        portraitPhone: Od,
        icons: md,
        pinnedIcons: Wd,
        hidden: Rd,
        moved: Xd,
        trayState: Kd
      } = dd;
      const vd = Od ? (0, Md.H)(md) : [],
        Qd = md.filter((dd => "settings" === dd)),
        td = md.filter((dd => "settings" !== dd && !vd.includes(dd))).reverse(),
        od = vd.length > 0 && "gone" === Kd,
        Nd = [...Qd, ...od ? ["tray"] : [], ...td].filter((dd => "tray" === dd || Rd.has(dd) && !Xd.has(dd))),
        qd = dd => {
          const Od = Nd.indexOf(dd);
          return Od < 0 ? void 0 : Od
        },
        Hd = (dd, Od) => (0, gd.jsx)(vO, {
          id: dd,
          hidden: Rd,
          parked: Od ? qd(dd) : void 0,
          unslotted: Od && Rd.has(dd) && Xd.has(dd)
        }, dd);
      return (0, gd.jsxs)("div", {
        className: hd()("TopRightIcons TouchInGame", {
          Column: Od
        }),
        children: [Qd.map((dd => Hd(dd, !0))), vd.length > 0 && (0, gd.jsxs)("div", {
          className: hd()("TopRightIcon TopRightTrayToggle Open", {
            [Md.c]: od
          }),
          ...hO(qd("tray")),
          children: [(0, gd.jsx)("div", {
            className: hd()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== Kd
            }),
            children: (0, gd.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, gd.jsx)(Vd.c, {
                name: "ellipsis"
              })
            })
          }), (0, gd.jsx)("div", {
            className: "TopRightTray",
            children: vd.map((dd => Hd(dd, !1)))
          })]
        }), td.map((dd => (0, gd.jsxs)(Fd.Fragment, {
          children: ["perspective" === dd && null !== Wd.rightOfCamera && (0, gd.jsx)(tO, {
            icon: Wd.rightOfCamera
          }), Hd(dd, !0)]
        }, dd))), null !== Wd.leftEnd && (0, gd.jsx)(tO, {
          icon: Wd.leftEnd
        })]
      })
    }

    function tO(dd) {
      let {
        icon: Od
      } = dd;
      return (0, gd.jsx)("div", {
        className: "TopRightIcon",
        children: (0, gd.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, gd.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, gd.jsx)(Vd.c, {
              name: Od
            })
          })
        })
      })
    }

    function oO(dd) {
      let {
        next: Od,
        hidden: md
      } = dd;
      return (0, gd.jsx)("div", {
        className: hd()("HotBarArrow", Od ? "Next" : "Previous", {
          HudPreviewGhost: md
        }),
        ...FO("arrows"),
        children: (0, gd.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, gd.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, gd.jsx)(Vd.c, {
              name: Od ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function NO() {
      return (0, gd.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, gd.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, gd.jsx)("div", {
            className: "SocialBar",
            children: (0, gd.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, gd.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, gd.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, gd.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, gd.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, gd.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, gd.jsx)(Vd.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, gd.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, gd.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, gd.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, gd.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, gd.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, gd.jsx)(Vd.c, {
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
    const qO = [{
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

    function HO(dd) {
      let {
        ghost: Od
      } = dd;
      const {
        t: md
      } = (0, Wd.G)();
      return (0, gd.jsx)("div", {
        className: hd()("EffectInfosWrapper", {
          HudPreviewGhost: Od
        }),
        ...FO("effects"),
        children: qO.map((dd => {
          let {
            icon: Od,
            labelKey: Wd,
            level: Fd,
            leftMs: Rd
          } = dd;
          return (0, gd.jsxs)("div", {
            className: "EffectInfo",
            children: [(0, gd.jsx)("span", {
              className: "EffectInfoIcon HudPreviewEffectIcon",
              children: (0, gd.jsx)(Vd.c, {
                name: Od
              })
            }), (0, gd.jsxs)("div", {
              className: hd()("EffectInfoRightSide", {
                Untimed: null === Rd
              }),
              children: [(0, gd.jsxs)("div", {
                className: "EffectInfoNameWrapper",
                children: [(0, gd.jsx)("div", {
                  className: "EffectInfoName SmallTextBold",
                  children: md(Wd)
                }), Fd > 1 && (0, gd.jsx)("div", {
                  className: "EffectInfoName SmallTextBold",
                  children: (0, mO.K)(Fd)
                })]
              }), null !== Rd && (0, gd.jsx)("div", {
                className: "EffectInfoDuration SmallTextLight",
                children: (0, mO.T)(Rd)
              })]
            })]
          }, Wd)
        }))
      })
    }
    const yO = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      bO = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      TO = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      pO = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function YO(dd) {
      let {
        presence: Od,
        portraitPhone: md,
        hidden: Fd,
        actionButtons: Rd,
        joystickFixed: Xd,
        keysAbove: Kd,
        auraBar: vd,
        trayState: Qd,
        moved: od
      } = dd;
      const {
        t: Nd
      } = (0, Wd.G)(), {
        faces: qd,
        items: Hd
      } = Od, yd = dd => ({
        HudPreviewGhost: (0, Ad.K)(dd).some((dd => Fd.has(dd)))
      });
      return (0, gd.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, gd.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, gd.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, gd.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, gd.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, gd.jsx)("div", {
              className: "InGameHeaderGameName",
              children: Nd("hudLayout:previewGameName")
            })]
          })
        }), (0, gd.jsx)("div", {
          className: "TopLeftElements",
          children: (0, gd.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, gd.jsxs)("div", {
              className: "Chat",
              children: [(0, gd.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [Nd("hudLayout:previewChatLine"), Nd("hudLayout:previewChatJoined", {
                  name: "Arthur"
                }), Nd("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((dd => (0, gd.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, gd.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, gd.jsx)("div", {
                      className: "IndividualText",
                      children: dd
                    })
                  })
                }, dd)))
              }), (0, gd.jsxs)("div", {
                className: "ChatIcons",
                children: [(0, gd.jsx)("button", {
                  type: "button",
                  tabIndex: -1,
                  className: hd()("ChatIconWrapper SmallTextLight", yd("chat")),
                  ...FO("chat"),
                  children: (0, gd.jsx)(Vd.c, {
                    name: "comment-dots",
                    className: "ChatIcon"
                  })
                }), (0, gd.jsx)("div", {
                  className: "QuickChat",
                  children: (0, gd.jsx)("button", {
                    type: "button",
                    tabIndex: -1,
                    className: hd()("QuickChatIconWrapper SmallTextLight", yd("quickChat")),
                    ...FO("quickChat"),
                    children: (0, gd.jsx)(Vd.c, {
                      name: "comment-smile",
                      className: "QuickChatIcon"
                    })
                  })
                })]
              })]
            })
          })
        }), (0, gd.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, gd.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, gd.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, gd.jsx)("div", {
                className: "TopRightIconsContainer",
                ...FO("menu"),
                children: (0, gd.jsx)(QO, {
                  portraitPhone: md,
                  icons: Od.rowIcons,
                  pinnedIcons: Od.pinnedIcons,
                  hidden: Fd,
                  trayState: Qd,
                  moved: od
                })
              })
            }), td.featureFlags.useSocialFeatures && (0, gd.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, gd.jsx)(NO, {})
            })]
          })
        }), (0, gd.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, gd.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, gd.jsxs)("div", {
            className: "TouchInteractKey",
            ...FO("interact"),
            children: [(0, gd.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, gd.jsx)(Vd.c, {
                name: "hand-back-point-up"
              })
            }), (0, gd.jsx)("div", {
              children: Nd("hudLayout:previewInteract")
            })]
          })
        }), (0, gd.jsx)("div", {
          className: "BottomCentre",
          children: (0, gd.jsxs)("div", {
            className: "BottomElements",
            children: [(0, gd.jsx)("div", {
              className: "BottomLeftElements Touch",
              children: (0, gd.jsx)(HO, {
                ghost: Fd.has("effects")
              })
            }), (0, gd.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, gd.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...FO("hotbar"),
                children: (0, gd.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, gd.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, gd.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, gd.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, gd.jsx)(Vd.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), vd && (0, gd.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, gd.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, gd.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, OO.e)("glint"),
                    alt: ""
                  }), (0, gd.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, gd.jsx)("div", {
                  className: "AuraBar",
                  children: (0, gd.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, gd.jsx)("div", {
                className: "HotBarRow",
                children: (0, gd.jsx)("div", {
                  className: hd()("HotBarContainer Touch", {
                    KeysAbove: Kd
                  }),
                  children: (0, gd.jsxs)("div", {
                    className: "HotBar",
                    ...FO("hotbar"),
                    children: [(0, gd.jsxs)("div", {
                      className: hd()("TouchInventoryKeys", {
                        NoAuraBar: !vd
                      }),
                      children: [(0, gd.jsx)("div", {
                        className: hd()("TouchInventoryKey ShopKey", yd("shop"), {
                          Hidden: !Od.shop
                        }),
                        ...FO("shop"),
                        children: (0, gd.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, gd.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, gd.jsx)(Vd.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, gd.jsx)("div", {
                        className: hd()("TouchInventoryKey BagKey", yd("bag"), {
                          Hidden: !Od.bag
                        }),
                        ...FO("bag"),
                        children: (0, gd.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, gd.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, gd.jsx)(Vd.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, gd.jsx)(oO, {
                      next: !1,
                      hidden: Fd.has("arrows")
                    }), (0, gd.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== Hd && Hd.map(((dd, Od) => (0, gd.jsx)(XO, {
                        item: dd,
                        selected: dd.classList.contains("Selected")
                      }, Od))), null === Hd && TO.map((dd => {
                        const Od = pO[dd];
                        return (0, gd.jsx)("div", {
                          className: hd()("InvenItem", {
                            Selected: 0 === dd
                          }),
                          children: Od && (0, gd.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, gd.jsx)(Vd.c, {
                              name: Od
                            })
                          })
                        }, dd)
                      }))]
                    }), (0, gd.jsx)(oO, {
                      next: !0,
                      hidden: Fd.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, gd.jsx)("div", {
              className: "BottomRightElements",
              children: (0, gd.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== qd && WO.k.map((dd => {
                  const Od = qd[dd];
                  return Od && (0, gd.jsx)(RO, {
                    id: WO.g[dd],
                    slot: dd,
                    face: Od,
                    className: yO[dd],
                    hidden: Fd
                  }, dd)
                })), (0, WO.q)(Od, Rd).map((dd => (0, gd.jsx)(RO, {
                  id: WO.g[dd],
                  slot: dd,
                  icon: bO[dd].icon,
                  label: Nd(bO[dd].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: Fd
                }, dd))), null === qd && (0, gd.jsxs)(gd.Fragment, {
                  children: [(0, gd.jsx)(RO, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Fd
                  }), (0, gd.jsx)(RO, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Fd
                  }), Rd && (0, gd.jsxs)(gd.Fragment, {
                    children: [(0, gd.jsx)(RO, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Fd
                    }), (0, gd.jsx)(RO, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Fd
                    })]
                  }), (0, WO.l)(Rd).map((dd => (0, gd.jsx)(RO, {
                    id: WO.g[dd],
                    slot: dd,
                    icon: bO[dd].icon,
                    label: Nd(bO[dd].labelKey),
                    hidden: Fd
                  }, dd))), (0, gd.jsx)(RO, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Fd
                  }), (0, gd.jsx)(RO, {
                    id: "zoom",
                    slot: "Z",
                    icon: "magnifying-glass-plus",
                    hidden: Fd
                  }), (0, gd.jsx)(RO, {
                    id: "drop",
                    slot: "D",
                    icon: "hand-holding-box",
                    hidden: Fd
                  })]
                })]
              })
            })]
          })
        }), (0, gd.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, gd.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, gd.jsxs)("div", {
              className: hd()("Joystick Resting HudPreviewJoystick", {
                Floating: !Xd
              }),
              ...FO("joystick"),
              children: [(0, gd.jsx)("div", {
                className: "JoystickBase"
              }), (0, gd.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), Od.sprint && (0, gd.jsx)("div", {
            className: hd()("TouchSprintHit", yd("sprint"), {
              AtHome: !Xd
            }),
            ...FO("sprint"),
            children: (0, gd.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, gd.jsx)(Vd.c, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function gO() {
      const [dd, Od] = (0, Fd.useState)({}), md = (0, Fd.useCallback)((dd => {
        Od((Od => [...new Set([...Object.keys(Od), ...Object.keys(dd)])].every((md => Od[md] === dd[md])) ? Od : dd))
      }), []);
      return [dd, md]
    }
    const wO = .05;

    function aO(dd) {
      var Od;
      let {
        selected: md,
        layout: Fd,
        actionButtons: Rd,
        keyNames: Xd,
        overlaps: Kd,
        scaleCaps: Qd,
        joystickFixed: td,
        onScale: od,
        onHidden: Nd,
        onReset: qd,
        locked: Hd,
        lockable: yd,
        onLocked: bd,
        extra: Td
      } = dd;
      const {
        t: pd
      } = (0, Wd.G)(), Yd = md ? Ad.k[md] : null, wd = null !== md && Hd.has(md), Ed = md ? (0, Ud.A)(Fd.hudElements, md)[2] : 1, Jd = null !== (Od = md && Qd[md]) && void 0 !== Od ? Od : Ud.g, xd = dd => {
        md && od(md, Math.min(Jd, Math.round(100 * (Ed + .1 * dd)) / 100))
      };
      return (0, gd.jsxs)(gd.Fragment, {
        children: [(0, gd.jsxs)("div", {
          className: hd()("HudQuickName SmallTextBold", {
            Overlap: Kd.length > 0
          }),
          children: [Kd.length > 0 && (0, gd.jsx)(Vd.c, {
            name: "triangle-exclamation"
          }), Yd ? (0, Ad.A)(Yd.id, Rd, pd, Xd) : pd("hudLayout:fullScreenHint"), Kd.length > 0 && (0, gd.jsx)("span", {
            className: "HudQuickOverlap",
            children: pd("hudLayout:overlapsShort", {
              names: (0, Ad.w)(Kd, Rd, pd, Xd)
            })
          })]
        }), (null === Yd || void 0 === Yd ? void 0 : Yd.scale) && (0, gd.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, gd.jsx)(vd.S, {
            disabled: wd || Ed <= Ud.h,
            ariaLabel: pd("hudLayout:smaller"),
            onClick: () => {
              xd(-1)
            },
            children: (0, gd.jsx)(Vd.c, {
              name: "minus"
            })
          }), (0, gd.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*Ed)}%`
          }), (0, gd.jsx)(vd.S, {
            disabled: wd || Ed >= Jd,
            ariaLabel: pd("hudLayout:larger"),
            onClick: () => {
              xd(1)
            },
            children: (0, gd.jsx)(Vd.c, {
              name: "plus"
            })
          })]
        }), (Yd || Td) && (0, gd.jsxs)("div", {
          className: "HudQuickActions",
          children: [Yd && (0, gd.jsxs)(gd.Fragment, {
            children: [(0, gd.jsx)(Ld, {
              id: Yd.id,
              actionButtons: Rd,
              keyNames: Xd,
              locked: wd,
              lockable: yd(Yd.id),
              onLocked: bd
            }), (0, gd.jsx)(Gd, {
              id: Yd.id,
              elements: Fd.hudElements,
              actionButtons: Rd,
              keyNames: Xd,
              onHidden: Nd
            }), (0, gd.jsx)(nd, {
              id: Yd.id,
              elements: Fd.hudElements,
              actionButtons: Rd,
              keyNames: Xd,
              locked: wd,
              onReset: qd
            }), Dd(Yd.id, td) && (0, gd.jsx)(ed, {})]
          }), Td]
        })]
      })
    }
    var EO = md(1170),
      JO = md(5090);
    const UO = "HudPreviewDoc",
      xO = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      BO = new Set([UO, ...Object.values(xO)]),
      SO = new Set(Ud.u.map(dO.u)),
      sO = new Set(dO.e),
      uO = 'style, link[rel="stylesheet"]';

    function VO(dd, Od, md, Wd) {
      const Fd = new Map,
        Rd = new Set,
        Xd = new URL(dd.baseURI).origin,
        Kd = Od => {
          var md;
          if ("LINK" !== Od.nodeName) return !0;
          const Wd = null === (md = Od.getAttribute("href")) || void 0 === md ? void 0 : md.trim();
          if (!Wd) return !1;
          try {
            return new URL(Wd, dd.baseURI).origin === Xd
          } catch {
            return !1
          }
        };
      let hd = null;
      const vd = () => {
          hd !== (0 === Rd.size) && (hd = 0 === Rd.size, null === Wd || void 0 === Wd || Wd(hd))
        },
        Qd = dd => {
          const Od = dd.cloneNode(!0);
          if ("LINK" === Od.tagName) {
            Rd.add(Od);
            const dd = () => {
              Rd.delete(Od), vd()
            };
            Od.addEventListener("load", dd), Od.addEventListener("error", dd), md && Od.addEventListener("load", md)
          }
          return Od
        },
        td = () => {
          const Wd = function(dd) {
              const Od = [...dd.body.children].filter((dd => dd.matches(uO)));
              return [...dd.head.querySelectorAll(uO), ...Od]
            }(dd).filter(Kd),
            Xd = new Set(Wd);
          for (const [dd, Od] of Fd) Xd.has(dd) || (Od.remove(), Fd.delete(dd), Rd.delete(Od));
          let hd = null;
          for (let dd = Wd.length - 1; dd >= 0; dd--) {
            const Rd = Wd[dd];
            let Xd = Fd.get(Rd);
            Xd ? "STYLE" === Rd.tagName && Xd.textContent !== Rd.textContent && (Xd.textContent = Rd.textContent, null === md || void 0 === md || md()) : (Xd = Qd(Rd), Fd.set(Rd, Xd), Od.head.insertBefore(Xd, hd)), hd = Xd
          }
          vd()
        };
      td();
      const od = new MutationObserver(td);
      return od.observe(dd.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), od.observe(dd.body, {
        childList: !0
      }), () => {
        od.disconnect()
      }
    }

    function iO(dd, Od, md) {
      let {
        keysAbove: Wd
      } = md;
      const Fd = [...dd.documentElement.classList].filter((dd => !BO.has(dd) && !sO.has(dd))),
        Rd = [...Od.documentElement.classList].filter((dd => sO.has(dd))),
        Xd = [UO, xO.hotbar, xO.hasShop, xO.hasBag];
      Wd && Xd.push(xO.keysAbove), Od.documentElement.className = [...Fd, ...Xd, ...Rd].join(" ")
    }
    const AO = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function rO(dd, Od, md, Wd, Fd) {
      const Rd = (0, Ud.w)(md, Wd, "joystick"),
        Xd = (0, dO.v)((0, dO.F)(md, Wd, Fd), Wd),
        Kd = Xd.classes.filter((dd => !SO.has(dd))),
        hd = Od.documentElement,
        vd = md.hudLayouts[Wd].hudSafe,
        Qd = (0, dO.B)(vd, window.innerWidth, window.innerHeight, GO(), vd ? (0, dO.J)(Od) : 0);
      (0, dO.M)({
        ...Xd,
        classes: Kd
      }, {
        vars: hd,
        safe: hd,
        classes: hd
      }), hd.style.setProperty("--preview-joystick-shift-left", `${Qd[3]}px`), hd.style.setProperty("--preview-joystick-shift-bottom", `${Qd[2]}px`), hd.style.setProperty("--preview-joystick-scale", String(Rd[2])), (0, JO.g)(hd, Od, md, Wd);
      for (const td of AO) hd.style.setProperty(td, dd.documentElement.style.getPropertyValue(td) || "0px")
    }

    function GO() {
      return (0, dO.E)(Qd.e.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function nO(dd) {
      return (0, dO.p)(GO(), (0, dO.J)(dd))
    }

    function LO(dd, Od, md) {
      const Wd = dd.documentElement.style,
        Fd = (0, dO.D)(Od),
        Rd = Wd.getPropertyValue(Fd);
      try {
        return md((dd => {
          Wd.setProperty(Fd, String(dd))
        }))
      } finally {
        "" === Rd ? Wd.removeProperty(Fd) : Wd.setProperty(Fd, Rd)
      }
    }

    function PO(dd, Od) {
      const [md, Wd] = LO(dd, "hotbar", (Od => {
        const md = md => {
          var Wd, Fd;
          return Od(md), null !== (Wd = null === (Fd = dd.querySelector(".HotBarGameItemsContainer")) || void 0 === Fd ? void 0 : Fd.getBoundingClientRect().width) && void 0 !== Wd ? Wd : 0
        };
        return [md(1), md(Ud.g)]
      }));
      return md <= 0 ? Ud.g : Math.min(Ud.g, Math.max(1, Math.floor(Wd / md / Od + 1e-6) * Od))
    }
    const zO = 3,
      cO = .5,
      jO = dd => dd.right - dd.left;
    const DO = (dd, Od) => Math.abs((0, kd.e)(dd).x - (0, kd.e)(Od).x) + Math.abs((0, kd.e)(dd).y - (0, kd.e)(Od).y) + Math.abs(jO(dd) - jO(Od));

    function eO(dd, Od, md, Wd, Fd) {
      let {
        canKeep: Rd = () => !0,
        passes: Xd = zO,
        before: Kd
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const hd = Od.hudLayouts[md].hudLocked.filter(Rd);
      if (0 === hd.length) return Od;
      const vd = [...Ad.e].filter((Wd => !hd.includes(Wd) && (0, Ud.w)(dd, md, Wd).join() === (0, Ud.w)(Od, md, Wd).join())),
        Qd = dd => {
          const Od = (0, kd.K)(vd.flatMap((Od => dd[Od] ? [dd[Od]] : [])));
          return {
            ...dd,
            cluster: null !== Od && void 0 !== Od ? Od : void 0
          }
        };
      let td = null;
      const od = dd => {
          td = dd;
          const Od = Fd(dd);
          return Od && {
            ...Od,
            boxes: Qd(Od.boxes)
          }
        },
        Nd = Kd ? {
          ...Kd,
          boxes: Qd(Kd.boxes)
        } : od(dd),
        qd = Nd && od(Od);
      if (!Nd || !qd) return Od;
      const Hd = Nd.boxes;
      let yd = qd.boxes;
      const bd = Nd.keysAbove !== qd.keysAbove,
        Td = bd || Boolean(Nd.shopAlone) !== Boolean(qd.shopAlone),
        pd = new Set(hd.filter((dd => !(0, Ad.C)(dd) || !("bag" === dd ? bd : Td))));
      let Yd = Od;
      for (let Ed = 0; Ed < Xd && pd.size > 0; Ed++) {
        var gd, wd;
        const dd = new Map;
        for (const Od of pd) {
          const Fd = Hd[Od],
            Rd = yd[Od],
            Xd = Fd && Rd ? IO(Od, (0, Ud.w)(Yd, md, Od), Fd, Rd, Wd) : null;
          Xd ? dd.set(Od, Xd) : pd.delete(Od)
        }
        if (0 === dd.size) break;
        let Fd = Yd;
        for (const [Od, Wd] of dd) Fd = (0, Ud.ib)(Fd, md, Od, Wd);
        const Rd = null === (gd = od(Fd)) || void 0 === gd ? void 0 : gd.boxes;
        if (!Rd) return Od;
        let Xd = Yd;
        for (const [Od, Wd] of dd) {
          const dd = Rd[Od];
          dd && DO(Hd[Od], dd) < DO(Hd[Od], yd[Od]) - cO ? Xd = (0, Ud.ib)(Xd, md, Od, Wd) : pd.delete(Od)
        }
        if (Xd === Yd) break;
        const Kd = [...dd.keys()].every((dd => pd.has(dd)));
        Yd = Kd ? Fd : Xd;
        const hd = Kd ? Rd : null === (wd = od(Yd)) || void 0 === wd ? void 0 : wd.boxes;
        if (!hd) return Od;
        yd = hd
      }
      return td !== Yd && Fd(Yd), Yd
    }

    function IO(dd, Od, md, Wd, Fd) {
      let [Rd, Xd, Kd] = Od;
      const hd = Ud.t[dd],
        vd = {};
      hd.scale && jO(Wd) > 0 && Math.abs(jO(md) - jO(Wd)) > cO && (vd.scale = Math.max(Ud.h, Math.min(Ud.g, Kd * jO(md) / jO(Wd))));
      const Qd = (0, kd.e)(md).x - (0, kd.e)(Wd).x,
        td = (0, kd.e)(md).y - (0, kd.e)(Wd).y;
      return hd.move && (Math.abs(Qd) > cO || Math.abs(td) > cO) && (vd.dx = Rd + Qd / Fd.width, vd.dy = Xd + td / Fd.height), void 0 === vd.scale && void 0 === vd.dx ? null : vd
    }
    let lO = 0;

    function CO() {
      return lO > 0
    }
    const ZO = dd => 0 === dd.dx && 0 === dd.dy,
      kO = .001,
      fO = dd => Math.abs(dd.dx) >= 5e-4 || Math.abs(dd.dy) >= 5e-4 ? dd : {
        dx: dd.dx,
        dy: dd.dy < 0 ? -.001 : kO
      };

    function MO(dd) {
      let {
        preview: Od,
        stageRef: md,
        ringRef: Wd,
        centreLineRef: Rd,
        snapCentre: Xd,
        ready: Kd,
        measure: hd,
        k: vd,
        viewport: Qd,
        boxes: td,
        pieces: od,
        selected: Nd,
        insets: qd,
        layout: Hd,
        canMove: yd,
        onSelect: bd,
        onMove: Td
      } = dd;
      const pd = (0, Fd.useRef)(null),
        Yd = (0, Fd.useCallback)((() => null !== pd.current), []),
        gd = (dd, Od) => {
          if (!Od) return null;
          const md = (0, kd.e)(dd.origin),
            Wd = (0, kd.e)(Od),
            Fd = (dd.to.dx - dd.from.dx) * Qd.width,
            Rd = (dd.to.dy - dd.from.dy) * Qd.height,
            Xd = Od.right - Od.left,
            Kd = Od.bottom - Od.top;
          return {
            skew: {
              x: Wd.x - md.x - Fd,
              y: Wd.y - md.y - Rd
            },
            box: {
              left: md.x - Xd / 2,
              top: md.y - Kd / 2,
              right: md.x + Xd / 2,
              bottom: md.y + Kd / 2
            }
          }
        },
        wd = (dd, md) => {
          var Fd;
          const Xd = pd.current;
          if (!Xd || Xd.pointerId !== dd.pointerId) return;
          pd.current = null, null === (Fd = Rd.current) || void 0 === Fd || Fd.classList.remove("Shown", "Snapped");
          const Kd = Wd.current;
          if (Kd && null !== Xd.ringStyle && Kd.setAttribute("style", Xd.ringStyle), md && Xd.moved) {
            const dd = ZO(Xd.to) ? null : hd(Xd.id),
              Od = dd ? (0, kd.H)(dd, (0, kd.F)(Qd.width, Qd.height, qd)) : {
                x: 0,
                y: 0
              },
              md = {
                dx: Xd.to.dx + Od.x / Qd.width,
                dy: Xd.to.dy + Od.y / Qd.height
              },
              Wd = ZO(Xd.to) ? md : fO(md);
            Td(Xd.id, Wd.dx, Wd.dy)
          } else Od(Xd.id, null), md && Xd.tapPick && bd(Xd.tapPick)
        };
      return {
        busy: Yd,
        handlers: {
          onPointerDown: dd => {
            var Od;
            if (!Kd || pd.current || !dd.target.closest(".HudPreviewHandle")) return;
            const Wd = md.current.getBoundingClientRect(),
              Fd = {
                x: (dd.clientX - Wd.left) / vd,
                y: (dd.clientY - Wd.top) / vd
              },
              Rd = (0, kd.D)(Fd, od, 40 / vd),
              Xd = null !== Nd ? Ad.s.get(Nd) : void 0,
              hd = void 0 !== Xd && null !== (0, kd.D)(Fd, od.filter((dd => {
                let {
                  id: Od
                } = dd;
                return Xd.has(Od)
              })), 40 / vd),
              Qd = "menu" === Nd && void 0 !== td.menu && (0, kd.i)(td.menu, Fd) && ("menu" === Rd || null !== Rd && (0, Md.y)(Rd, Hd.hudElements[Rd])),
              qd = hd ? Nd : Qd ? "menu" : null,
              Td = null !== qd,
              Yd = null !== qd && void 0 !== qd ? qd : Rd;
            if (!Yd) return;
            if (function(dd) {
                lO++;
                const Od = md => {
                  md.pointerId === dd && (lO = Math.max(0, lO - 1), window.removeEventListener("pointerup", Od, !0), window.removeEventListener("pointercancel", Od, !0))
                };
                window.addEventListener("pointerup", Od, !0), window.addEventListener("pointercancel", Od, !0)
              }(dd.pointerId), !yd(Yd)) return void bd(Td && Rd ? Rd : Yd);
            bd(Yd);
            const [gd, wd] = null !== (Od = Hd.hudElements[Yd]) && void 0 !== Od ? Od : [0, 0], Ed = {
              dx: gd,
              dy: wd
            }, Jd = {
              skew: {
                x: 0,
                y: 0
              },
              box: td[Yd]
            };
            pd.current = {
              id: Yd,
              pointerId: dd.pointerId,
              startX: dd.clientX,
              startY: dd.clientY,
              origin: td[Yd],
              from: Ed,
              to: Ed,
              moved: !1,
              home: ZO(Ed) ? {
                centre: (0, kd.e)(td[Yd]),
                anchor: Jd
              } : null,
              away: ZO(Ed) ? null : Jd,
              anchor: Jd,
              ringStyle: null,
              tapPick: Td ? Rd : null
            }, dd.currentTarget.setPointerCapture(dd.pointerId)
          },
          onPointerMove: dd => {
            const md = pd.current;
            if (!md || md.pointerId !== dd.pointerId) return;
            const Fd = dd.clientX - md.startX,
              Kd = dd.clientY - md.startY;
            if (!md.moved && Math.hypot(Fd, Kd) < 5) return;
            const td = !md.moved;
            var od, Nd;
            (md.moved = !0, td) && (md.ringStyle = null !== (od = null === (Nd = Wd.current) || void 0 === Nd ? void 0 : Nd.getAttribute("style")) && void 0 !== od ? od : null);
            const Hd = (0, kd.F)(Qd.width, Qd.height, qd);
            if (!md.home) {
              var yd;
              md.to = {
                dx: 0,
                dy: 0
              }, Od(md.id, md.to);
              const dd = hd(md.id),
                Wd = null !== (yd = gd(md, dd)) && void 0 !== yd ? yd : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: md.origin
                },
                Fd = (0, kd.e)(md.origin);
              md.home = {
                centre: dd ? (0, kd.e)(dd) : {
                  x: Fd.x - md.from.dx * Qd.width,
                  y: Fd.y - md.from.dy * Qd.height
                },
                anchor: Wd
              }
            }
            const bd = md.home;
            let Td = !1;
            const Yd = dd => {
                Td = !1;
                let Wd = (0, kd.w)(dd.box, Fd / vd, Kd / vd, Hd);
                const Rd = Qd.width / 2;
                if (Xd && Math.abs((0, kd.e)(md.origin).x + Wd.x - Rd) <= 8 / vd) {
                  const Od = Rd - (0, kd.e)(md.origin).x,
                    Fd = (0, kd.w)(dd.box, Od, Wd.y, Hd);
                  Td = Math.abs(Fd.x - Od) < .01, Td && (Wd = Fd)
                }
                const hd = (0, kd.C)(md.from, Wd.x - dd.skew.x, Wd.y - dd.skew.y, Qd.width, Qd.height);
                md.to = fO(hd), md.anchor = dd, Od(md.id, md.to)
              },
              wd = (0, kd.w)(bd.anchor.box, Fd / vd, Kd / vd, Hd),
              Ed = Rd.current,
              Jd = (0, kd.e)(md.origin),
              xd = ((0, Ud.L)(md.id) ? 20 : 6) / vd;
            if (Math.abs(Jd.x + wd.x - bd.centre.x) <= xd && Math.abs(Jd.y + wd.y - bd.centre.y) <= xd) md.to = {
              dx: 0,
              dy: 0
            }, md.anchor = bd.anchor, Td = Xd && Math.abs(bd.centre.x - Qd.width / 2) < 1, Od(md.id, md.to);
            else if (md.away) Yd(md.away);
            else {
              var Bd;
              Yd(bd.anchor), md.away = null !== (Bd = gd(md, hd(md.id))) && void 0 !== Bd ? Bd : bd.anchor, Yd(md.away)
            }
            null === Ed || void 0 === Ed || Ed.classList.add("Shown"), null === Ed || void 0 === Ed || Ed.classList.toggle("Snapped", Td), (dd => {
              const Od = Wd.current;
              if (Od) {
                const {
                  skew: md,
                  box: Wd
                } = dd.anchor;
                Od.style.left = Wd.left * vd + "px", Od.style.top = Wd.top * vd + "px", Od.style.width = (Wd.right - Wd.left) * vd + "px", Od.style.height = (Wd.bottom - Wd.top) * vd + "px", Od.style.translate = `${((dd.to.dx-dd.from.dx)*Qd.width+md.x)*vd}px ${((dd.to.dy-dd.from.dy)*Qd.height+md.y)*vd}px`
              }
            })(md)
          },
          onPointerUp: dd => {
            wd(dd, !0)
          },
          onPointerCancel: dd => {
            wd(dd, !1)
          }
        }
      }
    }
    var dm = md(10058);

    function Om(dd, Od) {
      return Object.keys(dd).filter((dd => dd !== Od)).map((Od => dd[Od]))
    }

    function mm(dd) {
      return dd.map((dd => {
        let {
          id: Od,
          box: md
        } = dd;
        return `${Od}:${md.left},${md.top},${md.right},${md.bottom}`
      })).join(";")
    }

    function Wm(dd) {
      const Od = [],
        md = Od => (0, Ud.L)(Od) && !dd.documentElement.classList.contains((0, dO.y)(Od));
      for (const Kd of dd.querySelectorAll(`[${Ad.i}]`)) {
        const dd = md(Kd.getAttribute(Ad.i)) ? Kd.querySelector(".ScaleOnHover") : null,
          Wd = (null !== dd && void 0 !== dd ? dd : Kd).getBoundingClientRect();
        (Wd.width > 0 || Wd.height > 0) && Od.push({
          id: Kd.getAttribute(Ad.i),
          box: (0, kd.l)(Wd)
        })
      }
      const Wd = dd => (0, kd.K)(Od.filter((Od => {
          let {
            id: md
          } = Od;
          return dd(md)
        })).map((dd => {
          let {
            box: Od
          } = dd;
          return Od
        }))),
        Fd = {};
      for (const Kd of new Set(Od.map((dd => dd.id)))) Fd[Kd] = Wd((dd => dd === Kd));
      for (const [Kd, hd] of Ad.s) {
        const dd = Wd((dd => hd.has(dd)));
        dd && (Fd[Kd] = dd)
      }
      const Rd = dd.querySelector(".TouchInventoryKeys"),
        Xd = Rd ? (0, kd.l)(Rd.getBoundingClientRect()) : null;
      return {
        boxes: Fd,
        pieces: Od,
        pairHome: Xd
      }
    }

    function Fm(dd, Od, md) {
      const Wd = Od.right - Od.left,
        Fd = Od.bottom - Od.top;
      return LO(dd, "cluster", (Od => {
        const Rd = md => {
            Od(md);
            const Wd = [...dd.querySelectorAll(`[${Ad.i}]:not(.HudPreviewGhost)`)].filter((dd => Ad.e.has(dd.getAttribute(Ad.i)))).map((dd => (0, kd.l)(dd.getBoundingClientRect()))),
              Fd = (0, kd.K)(Wd);
            return Fd ? {
              w: Fd.right - Fd.left,
              h: Fd.bottom - Fd.top
            } : null
          },
          Xd = dd => !dd || dd.w <= Wd && dd.h <= Fd,
          Kd = Rd(1),
          hd = Rd(Ud.g);
        if (!Kd || Xd(hd)) return Ud.g;
        const vd = (dd, Od, md) => Od > dd ? 1 + (md - dd) * (Ud.g - 1) / (Od - dd) : Ud.g;
        let Qd = Math.floor(Math.min(Ud.g, vd(Kd.w, hd.w, Wd), vd(Kd.h, hd.h, Fd)) / md + 1e-6) * md;
        for (; Qd > 1 && !Xd(Rd(Qd));) Qd = Math.round(100 * (Qd - md)) / 100;
        return Math.max(1, Qd)
      }))
    }

    function Rm(dd) {
      iO(document, dd, {
        keysAbove: !1
      });
      const Od = parseFloat(getComputedStyle(dd.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        md = Number.isFinite(Od) && Od < 0;
      return iO(document, dd, {
        keysAbove: md
      }), (0, dm.d)(dd), md
    }

    function Xm(dd) {
      const Od = dd.querySelector(".TouchInventoryKey.ShopKey");
      return null !== Od && "1" === getComputedStyle(Od).getPropertyValue("--touch-shop-above").trim()
    }

    function Km(dd, Od) {
      let {
        layout: md,
        orientation: Wd,
        viewport: Rd,
        replicaKey: Xd,
        joystickFixed: Kd,
        busy: hd
      } = Od;
      const [vd, Qd] = (0, Fd.useState)(null), [td, od] = (0, Fd.useState)({
        boxes: {},
        pieces: []
      }), [Nd, qd] = (0, Fd.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [Hd, yd] = (0, Fd.useState)(!1), [bd, Td] = (0, Fd.useState)(!1), [pd, Yd] = (0, Fd.useState)(!1), gd = (0, Fd.useCallback)((dd => {
        Td(dd), dd && Yd(!0)
      }), []), wd = md.hudLayouts[Wd].hudSafe;
      (0, Fd.useLayoutEffect)((() => {
        const Od = dd.current.contentDocument;
        Od.open(), Od.write("<!DOCTYPE html><html><head></head><body></body></html>"), Od.close(), Qd(Od)
      }), [dd]);
      const Ed = (0, Fd.useCallback)((() => {
          vd && ((0, Md.C)(vd), od(Wm(vd)), qd(function(dd, Od) {
            const md = nO(dd),
              [Wd, Fd, Rd, Xd] = Od ? (0, dO.t)(Od, window.innerWidth, window.innerHeight, md) : md;
            return {
              top: Wd,
              right: Fd,
              bottom: Rd,
              left: Xd
            }
          }(vd, wd)))
        }), [vd, wd]),
        Jd = (0, Fd.useCallback)((() => {
          vd && yd(Rm(vd))
        }), [vd]),
        Ud = (0, Fd.useRef)((() => {}));
      return Ud.current = () => {
        Jd(), hd() || Ed()
      }, (0, Fd.useLayoutEffect)((() => {
        if (vd) return VO(document, vd, (() => {
          Ud.current()
        }), gd)
      }), [vd, gd]), (0, Fd.useLayoutEffect)(Jd, [Jd, Rd]), (0, Fd.useLayoutEffect)((() => {
        vd && (iO(document, vd, {
          keysAbove: Hd
        }), rO(document, vd, md, Wd, Kd), Jd(), Ed())
      }), [vd, md, Wd, Hd, Xd, Kd, Rd, Ed, Jd]), (0, Fd.useEffect)((() => {
        var dd;
        if (!vd) return;
        const Od = new ResizeObserver((() => {
          hd() || Ed()
        }));
        for (const md of vd.querySelectorAll(`[${Ad.i}]`)) Od.observe(md);
        return null === (dd = vd.fonts) || void 0 === dd || dd.ready.then(Ed), () => {
          Od.disconnect()
        }
      }), [vd, Ed, hd, Xd]), {
        doc: vd,
        boxes: td.boxes,
        pieces: td.pieces,
        insets: Nd,
        keysAbove: Hd,
        ready: bd,
        settled: pd
      }
    }
    const hm = ["Above", "Below", "Left", "Right"];

    function Qm(dd, Od, md, Wd, Fd) {
      const Rd = md[dd],
        Xd = (Rd.left + Rd.right) / 2,
        Kd = (Rd.top + Rd.bottom) / 2,
        hd = (7.5 * Od.length + 14) / Wd,
        vd = 18 / Wd,
        Qd = {
          Above: {
            left: Xd - hd / 2,
            top: Rd.top - vd,
            right: Xd + hd / 2,
            bottom: Rd.top
          },
          Below: {
            left: Xd - hd / 2,
            top: Rd.bottom,
            right: Xd + hd / 2,
            bottom: Rd.bottom + vd
          },
          Left: {
            left: Rd.left - hd,
            top: Kd - vd / 2,
            right: Rd.left,
            bottom: Kd + vd / 2
          },
          Right: {
            left: Rd.right,
            top: Kd - vd / 2,
            right: Rd.right + hd,
            bottom: Kd + vd / 2
          }
        },
        td = Om(md, dd),
        od = {
          left: 0,
          top: 0,
          right: Fd.width,
          bottom: Fd.height
        };
      return hm[(0, kd.A)(hm.map((dd => Qd[dd])), td, {
        bounds: od
      })]
    }

    function tm() {
      const [dd, Od] = (0, Cd.b)();
      return (0, Fd.useMemo)((() => ({
        width: dd,
        height: Od
      })), [dd, Od])
    }

    function om(dd) {
      var Od;
      const {
        layout: md,
        orientation: Rd,
        selected: Xd,
        onSelect: Kd,
        onMove: vd,
        canMove: Qd,
        actionButtons: td,
        joystickFixed: od,
        presence: Nd,
        keyNames: Hd,
        maxHeight: yd,
        fill: bd = !1,
        apiRef: Td
      } = dd, {
        t: pd
      } = (0, Wd.G)(), Yd = tm(), wd = (null !== (Od = (0, qd.j)("maxAuraLevel")) && void 0 !== Od ? Od : 0) > 0, Ed = md.hudLayouts[Rd], Jd = (0, Fd.useRef)(null), xd = (0, Fd.useRef)(null), Bd = (0, Fd.useRef)(null), Sd = (0, Fd.useRef)(null), sd = (0, Fd.useRef)(null), ud = (0, Fd.useRef)(null), rd = (0, Zd.b)(Jd).width, Gd = bd ? 1 : rd > 0 ? (0, kd.E)(rd, Yd.width, Yd.height, yd) : 0, nd = (0, Fd.useRef)((() => !1)), Ld = (0, Fd.useCallback)((() => nd.current()), []), Pd = `${td}:${od}:${wd}`, {
        doc: zd,
        boxes: cd,
        pieces: jd,
        insets: Dd,
        keysAbove: ed,
        ready: ld,
        settled: Cd
      } = Km(Bd, {
        layout: md,
        orientation: Rd,
        viewport: Yd,
        replicaKey: Pd,
        joystickFixed: od,
        busy: Ld
      }), OO = (0, Fd.useCallback)((dd => {
        zd && rO(document, zd, dd, Rd, od)
      }), [zd, Rd, od]), mO = (0, Fd.useCallback)((dd => {
        if (!zd || !Cd) return null;
        OO(dd);
        const Od = Rm(zd),
          md = function(dd, Od) {
            let {
              boxes: md,
              pieces: Wd,
              pairHome: Fd
            } = dd;
            const Rd = Wd.find((dd => Ad.o.has(dd.id)));
            if (!Rd || !Fd) return md;
            const Xd = (0, kd.e)(Fd),
              Kd = Od(Rd.id),
              hd = jO(Rd.box) / Kd / 2,
              vd = (Rd.box.bottom - Rd.box.top) / Kd / 2;
            return {
              ...md,
              inventory: {
                left: Xd.x - hd,
                top: Xd.y - vd,
                right: Xd.x + hd,
                bottom: Xd.y + vd
              }
            }
          }(Wm(zd), (Od => (0, Ud.w)(dd, Rd, Od)[2]));
        return {
          boxes: md,
          keysAbove: Od,
          shopAlone: Xm(zd)
        }
      }), [zd, Cd, OO, Rd]), WO = (0, Fd.useRef)(null), FO = (0, Fd.useRef)(null), RO = (0, Fd.useRef)(md);
      RO.current = md;
      const XO = (0, Fd.useCallback)((() => {
        null !== WO.current && (cancelAnimationFrame(WO.current), WO.current = null)
      }), []);
      (0, Fd.useEffect)((() => XO), [md, XO]);
      const KO = (0, Fd.useRef)(-1 / 0),
        {
          lockable: hO
        } = dd,
        vO = (0, Fd.useCallback)((dd => {
          if (OO(dd), KO.current = performance.now(), !Cd || 0 === md.hudLayouts[Rd].hudLocked.length) return;
          const Od = md;
          XO(), WO.current = requestAnimationFrame((() => {
            var md;
            if (WO.current = null, RO.current !== Od) return;
            const Wd = (null === (md = FO.current) || void 0 === md ? void 0 : md.from) === Od ? FO.current.measured : mO(Od);
            Wd && (FO.current = {
              from: Od,
              measured: Wd
            }), OO(Wd ? eO(Od, dd, Rd, Yd, mO, {
              canKeep: hO,
              passes: 1,
              before: Wd
            }) : dd)
          }))
        }), [OO, Cd, md, Rd, Yd, mO, hO, XO]),
        QO = MO({
          preview: (dd, Od) => {
            Od ? vO((0, Ud.ib)(md, Rd, dd, Od)) : (XO(), OO(md))
          },
          stageRef: xd,
          ringRef: Sd,
          centreLineRef: sd,
          snapCentre: md.hudSnapCentre,
          ready: Cd,
          measure: dd => {
            const Od = zd && ld ? Wm(zd).boxes[dd] : void 0;
            return Od && (0, kd.p)(Od, Yd.width, Yd.height) ? Od : null
          },
          k: Gd,
          viewport: Yd,
          boxes: cd,
          pieces: jd,
          selected: Xd,
          insets: Dd,
          layout: Ed,
          canMove: Qd,
          onSelect: Kd,
          onMove: (dd, Od, md) => {
            XO(), vd(dd, Od, md)
          }
        });
      (0, Fd.useLayoutEffect)((() => {
        nd.current = QO.busy
      }), [QO.busy]);
      const tO = (0, Fd.useRef)([]),
        oO = (0, Fd.useRef)(Ed.hudElements);
      (0, Fd.useEffect)((() => {
        for (const Fd of Object.keys(Ed.hudElements)) {
          var dd, Od, md, Wd;
          (null !== (dd = null === (Od = Ed.hudElements[Fd]) || void 0 === Od ? void 0 : Od[2]) && void 0 !== dd ? dd : 1) > (null !== (md = null === (Wd = oO.current[Fd]) || void 0 === Wd ? void 0 : Wd[2]) && void 0 !== md ? md : 1) && Qd(Fd) && !(0, Md.y)(Fd, Ed.hudElements[Fd]) && tO.current.push(...(0, Ad.I)(Fd, ed, Qd))
        }
        oO.current = Ed.hudElements
      }), [Ed.hudElements, Qd, ed]), (0, Fd.useEffect)((() => {
        if (!ld) return;
        const dd = (0, kd.F)(Yd.width, Yd.height, Dd);
        for (const md of (0, Ad.G)(tO.current.splice(0), cd, dd, Qd)) {
          const Wd = cd[md];
          if (!Wd || QO.busy() || !(0, kd.p)(Wd, Yd.width, Yd.height)) continue;
          const Fd = (0, kd.H)(Wd, dd);
          if (0 !== Fd.x || 0 !== Fd.y) {
            var Od;
            const [dd, Wd] = null !== (Od = Ed.hudElements[md]) && void 0 !== Od ? Od : [0, 0];
            vd(md, dd + Fd.x / Yd.width, Wd + Fd.y / Yd.height)
          }
        }
      }), [cd, ld]), (0, Fd.useImperativeHandle)(Td, (() => ({
        setScale: (dd, Od) => {
          vO((0, Ud.ib)(md, Rd, dd, {
            scale: Od
          }))
        },
        setKeyStyle: dd => {
          OO({
            ...md,
            ...dd
          })
        },
        keepLocks: (dd, Od) => (XO(), eO(dd, Od, Rd, Yd, mO, {
          canKeep: hO
        })),
        setSafe: dd => {
          const Od = (0, dO.t)(dd, Yd.width, Yd.height, nO(null !== zd && void 0 !== zd ? zd : document));
          vO((0, Ud.kb)(md, Rd, dd)), ud.current && (ud.current.style.inset = Od.map((dd => dd * Gd + "px")).join(" "))
        }
      })), [OO, vO, mO, XO, hO, zd, md, Rd, Yd, Gd]);
      const NO = (0, Ud.o)(Ed.hudElements),
        qO = Xd ? cd[Xd] : void 0,
        HO = Xd ? (0, Ad.A)(Xd, td, pd, Hd) : "",
        yO = (0, EO.g)(Yd.width, Yd.height),
        bO = Xd ? (0, fd.g)(Xd, jd, Ed, yO) : [],
        TO = new Set((0, Md.s)(Ed.hudElements)),
        pO = (0, Md.I)(Ed, (0, Md.H)(Nd.rowIcons)).state,
        gO = bO.join(),
        aO = (0, Fd.useRef)(dd.onReady);
      aO.current = dd.onReady, (0, Fd.useEffect)((() => {
        var dd;
        null === (dd = aO.current) || void 0 === dd || dd.call(aO, Cd)
      }), [Cd]);
      const JO = (0, Fd.useRef)(dd.onMeasured);
      (0, Fd.useLayoutEffect)((() => {
        JO.current = dd.onMeasured
      }));
      const UO = (0, Fd.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        xO = [mm(jd), Yd.width, Yd.height, Dd.top, Dd.right, Dd.bottom, Dd.left, ld, Pd].join("|");
      (0, Fd.useEffect)((() => {
        const dd = gO ? gO.split(",") : [],
          Od = () => {
            var Od;
            null === (Od = JO.current) || void 0 === Od || Od.call(JO, cd, dd, UO.current.caps)
          };
        let md;
        const Wd = () => {
          const dd = RO.current;
          if (!zd || dd === UO.current.layout && xO === UO.current.input) return !1;
          const Fd = KO.current + 250 - performance.now();
          return dd === UO.current.layout && (Fd > 0 || Ld()) ? (md = setTimeout((() => {
            Wd() && Od()
          }), Math.max(Fd, 62.5)), !1) : (UO.current = {
            layout: dd,
            input: xO,
            caps: {
              hotbar: PO(zd, wO),
              cluster: Fm(zd, (0, kd.F)(Yd.width, Yd.height, Dd), wO)
            }
          }, !0)
        };
        return Wd(), Od(), () => {
          clearTimeout(md)
        }
      }), [cd, gO, zd, Yd, Dd, xO, Ld]);
      const BO = dd => ({
        left: dd.left * Gd,
        top: dd.top * Gd,
        width: (dd.right - dd.left) * Gd,
        height: (dd.bottom - dd.top) * Gd
      });
      return (0, gd.jsx)("div", {
        ref: Jd,
        className: hd()("HudPreviewBox", {
          Fill: bd
        }),
        style: {
          height: Yd.height * Gd
        },
        children: (0, gd.jsxs)("div", {
          ref: xd,
          className: "HudPreviewStage",
          style: {
            width: Yd.width * Gd,
            height: Yd.height * Gd
          },
          children: [(0, gd.jsx)("iframe", {
            ref: Bd,
            className: "HudPreviewFrame",
            title: pd("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: Yd.width,
              height: Yd.height,
              transform: `scale(${Gd})`
            }
          }), zd && (0, Id.createPortal)((0, gd.jsx)(YO, {
            presence: Nd,
            portraitPhone: yO,
            hidden: NO,
            actionButtons: td,
            joystickFixed: od,
            keysAbove: ed,
            auraBar: wd,
            trayState: pO,
            moved: TO
          }), zd.body), (0, gd.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...QO.handlers,
            children: [(0, gd.jsx)("div", {
              ref: ud,
              className: "HudPreviewSafeZone",
              style: {
                top: Dd.top * Gd,
                right: Dd.right * Gd,
                bottom: Dd.bottom * Gd,
                left: Dd.left * Gd
              }
            }), jd.map(((dd, Od) => {
              let {
                id: md,
                box: Wd
              } = dd;
              return (0, gd.jsx)("div", {
                className: "HudPreviewHandle",
                style: BO((0, kd.z)(Wd, 40 / Gd))
              }, `${md}:${Od}`)
            })), Ed.hudLocked.map((dd => {
              const Od = cd[dd];
              return Od && (0, gd.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: Od.right * Gd,
                  top: Od.top * Gd
                },
                children: (0, gd.jsx)(Vd.c, {
                  name: "lock"
                })
              }, dd)
            })), (0, gd.jsx)("div", {
              ref: sd,
              className: "HudPreviewCentreLine",
              style: {
                left: Yd.width / 2 * Gd
              }
            }), Xd && qO && (0, gd.jsx)("div", {
              ref: Sd,
              className: hd()("HudPreviewRing", {
                Fixed: !Qd(Xd),
                Overlap: bO.length > 0
              }),
              style: BO(qO),
              children: (0, gd.jsx)("span", {
                className: hd()("HudPreviewRingLabel", Qm(Xd, HO, cd, Gd, Yd)),
                children: HO
              })
            })]
          })]
        })
      })
    }

    function Nm(dd, Od) {
      (0, Fd.useEffect)((() => {
        var md;
        null === (md = dd.current) || void 0 === md || md.toggleAttribute("inert", Od)
      }), [dd, Od])
    }
    const qm = "hudFullScreen";

    function Hm(dd) {
      let {
        onScale: Od,
        onHidden: md,
        onReset: Rd,
        locked: Xd,
        lockable: Kd,
        onLocked: hd,
        onClose: Qd,
        ...td
      } = dd;
      const {
        t: od
      } = (0, Wd.G)(), Nd = (0, Fd.useRef)(null);
      (0, ld.m)("popup", Nd, Qd),
      function(dd) {
        const Od = (0, Fd.useRef)(dd);
        Od.current = dd, (0, Fd.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [qm]: !0
          }, "");
          let dd = !1;
          const md = () => {
            dd = !0, Od.current()
          };
          return window.addEventListener("popstate", md), () => {
            var Od;
            window.removeEventListener("popstate", md), !dd && null !== (Od = window.history.state) && void 0 !== Od && Od[qm] && window.history.back()
          }
        }), [])
      }(Qd), (0, Fd.useEffect)((() => {
        function dd(dd) {
          "Escape" === dd.key && (dd.stopPropagation(), Qd())
        }
        return window.addEventListener("keydown", dd, !0), () => {
          window.removeEventListener("keydown", dd, !0)
        }
      }), [Qd]);
      const {
        selected: qd
      } = td, Hd = (0, Fd.useRef)(null), yd = (0, Fd.useRef)(null), [bd, Td] = (0, Fd.useState)(!1);
      Nm(yd, !bd);
      const [pd, Yd] = (0, Fd.useState)(null), [wd, Ed] = (0, Fd.useState)([]), [Jd, Ud] = gO(), xd = (0, Fd.useRef)(td.selected);
      xd.current = td.selected;
      const Bd = (0, Fd.useRef)({}),
        Sd = (0, Fd.useCallback)((() => {
          const dd = Hd.current;
          dd && Yd(function(dd, Od, md) {
            var Wd;
            const {
              innerWidth: Fd,
              innerHeight: Rd
            } = window, Xd = dd.offsetWidth, Kd = dd.offsetHeight, hd = Math.max(GO()[0], 6), vd = [];
            for (const od of [hd, .2 * Rd, .5 * Rd - Kd / 2, .33 * Rd])
              for (const dd of [.5, .3, .7]) vd.push({
                left: Math.max(0, Math.min(Fd - Xd - 6, Math.max(6, Fd * dd - Xd / 2))),
                top: od
              });
            const Qd = vd.map((dd => ({
                left: dd.left - 6,
                top: dd.top - 6,
                right: dd.left + Xd + 6,
                bottom: dd.top + Kd + 6
              }))),
              td = Om(Od, md);
            return vd[(0, kd.A)(Qd, td, {
              avoid: md && null !== (Wd = Od[md]) && void 0 !== Wd ? Wd : null
            })]
          }(dd, Bd.current, xd.current))
        }), []),
        sd = (0, Fd.useCallback)(((dd, Od, md) => {
          Ed(Od), Ud(md), Bd.current = dd, Sd()
        }), [Sd, Ud]);
      return (0, Fd.useLayoutEffect)(Sd, [td.selected, Sd]), (0, Id.createPortal)((0, gd.jsxs)("div", {
        ref: Nd,
        className: "HudFullScreenEditor",
        children: [(0, gd.jsx)(om, {
          ...td,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: sd,
          onReady: Td,
          lockable: Kd
        }), (0, gd.jsxs)("div", {
          ref: Hd,
          className: "HudFullScreenToolbar",
          style: null === pd ? void 0 : {
            left: pd.left,
            top: pd.top,
            transform: "none"
          },
          children: [(0, gd.jsx)("div", {
            ref: yd,
            className: "HudFullScreenControls",
            children: (0, gd.jsx)(aO, {
              selected: qd,
              layout: td.layout.hudLayouts[td.orientation],
              actionButtons: td.actionButtons,
              keyNames: td.keyNames,
              overlaps: wd,
              scaleCaps: Jd,
              onScale: Od,
              onHidden: md,
              onReset: Rd,
              locked: Xd,
              lockable: Kd,
              onLocked: hd,
              joystickFixed: td.joystickFixed
            })
          }), (0, gd.jsx)(vd.g, {
            className: "HudFullScreenDone",
            onClick: Qd,
            padDefaultFocus: !0,
            children: od("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    var ym = md(10073);
    const bm = [{
      colour: md(3448).b,
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

    function Tm(dd) {
      let {
        colour: Od,
        previewApi: md
      } = dd;
      const {
        t: Rd
      } = (0, Wd.G)(), [Xd, Kd] = (0, Fd.useState)(null), hd = (0, Fd.useRef)(null), vd = (0, Fd.useRef)(), Qd = (0, Fd.useRef)(!1), td = (0, Fd.useCallback)((() => {
        clearTimeout(vd.current), null !== hd.current && ((0, Ud.S)(hd.current), hd.current = null)
      }), []);
      return (0, Fd.useEffect)((() => td), [td]), (0, gd.jsx)(ym.c, {
        label: Rd("hudLayout:keyColour"),
        value: null !== Xd && void 0 !== Xd ? Xd : Od,
        swatches: bm.map((dd => ({
          colour: dd.colour,
          label: Rd(`hudLayout:keyColour_${dd.name}`)
        }))),
        customLabel: Rd("hudLayout:keyColourCustom"),
        onChange: dd => {
          var Od;
          hd.current = dd, Kd(dd), null === (Od = md.current) || void 0 === Od || Od.setKeyStyle({
            hudKeyColour: dd
          }), clearTimeout(vd.current), vd.current = setTimeout((() => {
            td(), Kd(null)
          }), 250), Qd.current || (Qd.current = !0, (0, Ed.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: "colour"
          }))
        }
      })
    }
    const pm = dd => `${Math.round(100*dd)}%`;

    function Ym(dd) {
      let {
        info: Od,
        tuple: md,
        props: Fd
      } = dd;
      const {
        t: Rd
      } = (0, Wd.G)();
      return (0, gd.jsx)(Nd.i, {
        name: Rd("hudLayout:size"),
        min: Ud.h,
        max: Ud.g,
        step: wO,
        initValue: md[2],
        disabled: Fd.locked.has(Od.id),
        selectableMax: Fd.scaleCaps[Od.id],
        cappedNote: Rd("hudLayout:sizeCapped"),
        format: pm,
        onChange: dd => {
          Fd.onScalePreview(Od.id, dd)
        },
        onChangeComplete: dd => {
          Fd.onScale(Od.id, dd)
        }
      })
    }

    function gm(dd) {
      const {
        t: Od
      } = (0, Wd.G)(), {
        present: md,
        elements: Rd,
        selected: Xd,
        onSelect: Kd,
        onHidden: vd,
        onReset: Qd,
        note: td,
        actionButtons: od,
        keyNames: Nd,
        sizeBesidePreview: qd,
        locked: Hd,
        lockable: yd,
        onLocked: bd
      } = dd, {
        rowIconsOpen: Td,
        onRowIconsOpen: pd
      } = dd, Yd = (0, Fd.useRef)(null), wd = null !== Xd && (Td || !(0, Ud.L)(Xd));
      return (0, Fd.useEffect)((() => {
        var dd;
        const Od = Xd ? null === (dd = Yd.current) || void 0 === dd ? void 0 : dd.querySelector(`[data-hud-row="${Xd}"]`) : null;
        if (!Od) return;
        const md = Od.closest(".SettingsMenuRight"),
          Wd = performance.now();
        let Fd = null;
        const Rd = () => {
            clearInterval(hd), null === md || void 0 === md || md.removeEventListener("scroll", Kd)
          },
          Kd = () => {
            CO() || Rd()
          },
          hd = setInterval((() => {
            const dd = performance.now();
            dd - Wd > 1500 ? Rd() : CO() ? Fd = null : null === Fd ? Fd = dd : dd - Fd >= 150 && (Rd(), function(dd) {
              var Od;
              const md = dd.closest(".SettingsMenuRight"),
                Wd = null === (Od = dd.closest(".HudLayoutSettings")) || void 0 === Od ? void 0 : Od.querySelector(".HudLayoutPreviewBox");
              if (!md || !Wd) return;
              const Fd = Wd.getBoundingClientRect().bottom + 8,
                Rd = md.getBoundingClientRect().bottom - 8,
                Xd = dd.getBoundingClientRect();
              Xd.top < Fd ? md.scrollBy({
                top: Xd.top - Fd,
                behavior: "smooth"
              }) : Xd.bottom > Rd && md.scrollBy({
                top: Math.min(Xd.bottom - Rd, Xd.top - Fd),
                behavior: "smooth"
              })
            }(Od))
          }), 50);
        return null === md || void 0 === md || md.addEventListener("scroll", Kd, {
          passive: !0
        }), Rd
      }), [Xd, wd]), (0, gd.jsx)("div", {
        ref: Yd,
        className: "SettingBoxGroup HudElementList",
        children: Ad.n.filter((dd => md.has(dd.id) && (Td || !(0, Ud.L)(dd.id)))).map((md => {
          const Wd = (0, Ud.A)(Rd, md.id),
            Fd = (0, Ud.s)(Rd, md.id),
            Yd = md.id === Xd,
            wd = md.scale && !qd,
            Ed = td(md.id, Yd);
          return (0, gd.jsxs)("div", {
            "data-hud-row": md.id,
            className: hd()("SettingBox HudElementRow", {
              Open: Yd,
              Hidden: Fd,
              Child: void 0 !== md.parent,
              Grandchild: (0, Ad.v)(md.id).length > 1
            }),
            children: [(0, gd.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, gd.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": wd ? Yd : void 0,
                onClick: () => {
                  Kd(md.id)
                },
                children: (0, gd.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [(0, Ad.A)(md.id, od, Od, Nd), md.scale && 1 !== Wd[2] && !(Yd && wd) && (0, gd.jsxs)(gd.Fragment, {
                    children: [" ", (0, gd.jsx)("span", {
                      className: "HudElementRowSize",
                      children: pm(Wd[2])
                    })]
                  }), wd && (0, gd.jsxs)(gd.Fragment, {
                    children: [" ", (0, gd.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, gd.jsx)(Ld, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: md.id,
                actionButtons: od,
                keyNames: Nd,
                locked: Hd.has(md.id),
                lockable: yd(md.id),
                onLocked: bd
              }), "menu" === md.id && (0, gd.jsx)(Pd, {
                className: "HudElementRowIcon",
                open: Td,
                name: (0, Ad.A)(md.id, od, Od, Nd),
                onToggle: pd
              }), "menu" !== md.id && (0, gd.jsx)(Gd, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: md.id,
                elements: Rd,
                actionButtons: od,
                keyNames: Nd,
                onHidden: vd
              }), (0, gd.jsx)(nd, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: Hd.has(md.id),
                id: md.id,
                elements: Rd,
                actionButtons: od,
                keyNames: Nd,
                onReset: Qd
              })]
            }), Yd && wd && (0, gd.jsx)(Ym, {
              info: md,
              tuple: Wd,
              props: dd
            }), Ed && (0, gd.jsx)("div", {
              className: "HudElementNote",
              children: Ed
            })]
          }, md.id)
        }))
      })
    }

    function wm(dd) {
      let {
        preview: Od,
        quick: md,
        onFullScreen: Rd,
        resting: Xd,
        onSidePanel: Kd
      } = dd;
      const {
        t: hd
      } = (0, Wd.G)(), Qd = tm(), td = (0, Fd.useRef)(null), {
        width: od
      } = (0, Zd.b)(td), Nd = Math.floor(Qd.width * Math.min(1, Od.maxHeight / Qd.height)), qd = od - Nd - 12, Hd = qd >= 130, yd = od > 0;
      (0, Fd.useEffect)((() => {
        yd && Kd(Hd)
      }), [yd, Hd, Kd]);
      const bd = (0, kd.E)(Hd ? Nd : od, Qd.width, Qd.height, Od.maxHeight),
        Td = Xd ? (0, gd.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: Qd.height * bd
          }
        }) : (0, gd.jsx)(om, {
          ...Od
        }),
        pd = dd => (0, gd.jsxs)(vd.S, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: hd("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: Rd,
          children: [(0, gd.jsx)(Vd.c, {
            name: "expand"
          }), dd && (0, gd.jsx)("span", {
            children: hd("hudLayout:fullScreen")
          })]
        });
      return (0, gd.jsxs)("div", {
        ref: td,
        className: "SettingBox HudLayoutPreviewBox",
        children: [od > 0 && Hd && (0, gd.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, gd.jsx)("div", {
            style: {
              width: Nd
            },
            children: Td
          }), (0, gd.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, gd.jsx)(aO, {
              selected: Od.selected,
              ...md,
              joystickFixed: Od.joystickFixed,
              extra: pd(!Od.selected || qd >= 278)
            })
          })]
        }), od > 0 && !Hd && (0, gd.jsxs)(gd.Fragment, {
          children: [Td, (0, gd.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: pd(!1)
          })]
        })]
      })
    }
    var am = md(5087),
      Em = md(3435),
      Jm = md(3389);
    const Um = dd => {
      const Od = dO.i * ("sides" === dd ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(Od / 2))
    };

    function xm(dd, Od, md) {
      const [Wd, Fd, Rd, Xd] = dd;
      return "sides" === Od ? [Wd, md, Rd, md] : [md, Fd, md, Xd]
    }
    const Bm = [null, null, null, null],
      Sm = dd => `${dd}px`;

    function sm(dd) {
      let {
        safe: Od,
        onPreview: md,
        onCommit: Rd
      } = dd;
      const {
        t: Xd
      } = (0, Wd.G)(), Kd = (0, dO.t)(null !== Od && void 0 !== Od ? Od : Bm, window.innerWidth, window.innerHeight, nO(document).map(Math.round)), hd = (0, Fd.useRef)(null !== Od && void 0 !== Od ? Od : Bm);
      hd.current = null !== Od && void 0 !== Od ? Od : Bm;
      const Qd = dd => {
        const Od = Math.min(Um(dd), "sides" === dd ? Math.max(Kd[1], Kd[3]) : Math.max(Kd[0], Kd[2]));
        return (0, gd.jsx)(Nd.i, {
          name: Xd("sides" === dd ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: Um(dd),
          step: 2,
          initValue: Od,
          format: Sm,
          onChange: Od => {
            md(xm(hd.current, dd, Od))
          },
          onChangeComplete: Wd => {
            if (Wd === Od) return void md(hd.current);
            const Fd = xm(hd.current, dd, Wd);
            hd.current = Fd, Rd(Fd), (0, Ed.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: dd
            })
          }
        })
      };
      return (0, gd.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, gd.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, gd.jsx)("div", {
            children: Xd("hudLayout:safeZone")
          }), (0, gd.jsx)(vd.S, {
            active: null === Od,
            pressed: null === Od,
            onClick: () => {
              Rd(null)
            },
            children: Xd("hudLayout:safeZoneAuto")
          })]
        }), Qd("sides"), Qd("ends")]
      })
    }
    const um = {
      cluster: "hudLayout:clusterNote",
      inventory: "hudLayout:inventoryNote",
      menu: "hudLayout:menuNote",
      arrows: "hudLayout:arrowsNote",
      sprint: "hudLayout:sprintNote",
      effects: "hudLayout:effectsNote",
      zoom: "hudLayout:zoomNote",
      drop: "hudLayout:dropNote"
    };

    function Vm() {
      const {
        t: dd
      } = (0, Wd.G)(), Od = (0, Ud.eb)(), {
        clientEscMenuOptions: md
      } = (0, Qd.p)(["clientEscMenuOptions"]), Rd = (0, xd.h)(), Xd = Od.hudLayouts[Rd], [Kd, hd] = (0, Fd.useState)(null), {
        rowIconsOpen: td,
        onRowIconsOpen: od,
        select: qd
      } = function(dd, Od) {
        const [md, Wd] = (0, Fd.useState)((() => Ud.B.some((Od => void 0 !== dd.hudElements[Od] || dd.hudLocked.includes(Od))))), Rd = (0, Fd.useCallback)((dd => {
          Od(dd), (0, Ud.L)(dd) && Wd(!0)
        }), [Od]);
        return {
          rowIconsOpen: md,
          onRowIconsOpen: Wd,
          select: Rd
        }
      }(Xd, hd), [Hd, yd] = (0, Fd.useState)([]), [bd, Td] = (0, Fd.useState)(null), [pd, Yd] = gO(), wd = (0, Fd.useCallback)(((dd, Od, md) => {
        yd(Od), Yd(md);
        const Wd = Object.keys(dd);
        Td((dd => (null === dd || void 0 === dd ? void 0 : dd.size) === Wd.length && Wd.every((Od => dd.has(Od))) ? dd : new Set(Wd)))
      }), [Yd]), {
        gameState: Jd
      } = (0, Qd.p)(["gameState"]), Bd = (0, Em.h)(), sd = (0, Jm.n)(), [ud] = (0, Fd.useState)((() => {
        var dd, Od, md, Wd;
        return "inGame" === Jd ? (0, WO.v)(document, Bd, {
          rightOfCamera: null !== (dd = null === (Od = sd.rightOfCamera) || void 0 === Od ? void 0 : Od.icon) && void 0 !== dd ? dd : null,
          leftEnd: null !== (md = null === (Wd = sd.leftEnd) || void 0 === Wd ? void 0 : Wd.icon) && void 0 !== md ? md : null
        }) : WO.e
      })), Vd = (0, Fd.useRef)(null), rd = (0, Fd.useRef)(null), Gd = function(dd) {
        const [Od, md] = (0, Fd.useState)((() => .4 * window.innerHeight));
        return (0, Fd.useLayoutEffect)((() => {
          var Od;
          const Wd = null === (Od = dd.current) || void 0 === Od ? void 0 : Od.closest(".SettingsMenuRight");
          if (!Wd) return;
          const Fd = () => {
            const dd = Wd.clientHeight < im ? .4 : .5;
            md(Math.max(80, Wd.clientHeight * dd - 24))
          };
          Fd();
          const Rd = new ResizeObserver(Fd);
          return Rd.observe(Wd), () => {
            Rd.disconnect()
          }
        }), [dd]), Od
      }(rd), nd = (0, am.r)(md.joystickMode), Ld = md.touchActionButtons, Pd = (0, Fd.useMemo)((() => (0, WO.t)(ud, Ld)), [ud, Ld]), zd = (0, Fd.useMemo)((() => new Set((0, WO.q)(ud, Ld).map((dd => WO.g[dd])))), [ud, Ld]);
      (0, Fd.useEffect)((() => {
        (0, Ed.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [cd, jd] = (0, Fd.useState)(!1), [Id, ld] = (0, Fd.useState)(!1), Cd = (0, Fd.useRef)(null);
      Nm(Cd, !Id);
      const [Zd, kd] = (0, Fd.useState)(!1), fd = (0, Fd.useCallback)((() => {
        kd(!1)
      }), []), dO = (0, Fd.useMemo)((() => new Set(Xd.hudLocked)), [Xd.hudLocked]), OO = dd => {
        var Od, md;
        const Wd = (0, Ud.n)(),
          Fd = dd(Wd);
        (0, Ud._)(null !== (Od = null === (md = Vd.current) || void 0 === md ? void 0 : md.keepLocks(Wd, Fd)) && void 0 !== Od ? Od : Fd)
      }, mO = (dd, Od) => {
        OO((md => (0, Ud.ib)(md, Rd, dd, Od)))
      }, FO = (dd, Od, md) => {
        mO(dd, {
          dx: Od,
          dy: md
        }), (0, Ed.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${dd}`
        })
      }, RO = (dd, Od) => {
        OO((md => (0, Ud.jb)(md, Rd, dd, Od)))
      }, XO = dd => {
        const Od = Ad.k[dd];
        return (Od.move || Od.scale) && ("joystick" !== dd || nd) && !(0, Md.y)(dd, Xd.hudElements[dd])
      }, KO = dd => Ad.k[dd].move && ("joystick" !== dd || nd) && !dO.has(dd), hO = new Set(Ad.n.map((dd => dd.id)).filter((dd => {
        const Od = (0, Ud.L)(dd) && !ud.rowIcons.includes(dd) || Ud.t[dd].hiddenByDefault && !(0, WO.p)(ud, dd);
        return null === bd || bd.has(dd) || (0, Ud.s)(Xd.hudElements, dd) && !Od
      }))), vO = {
        present: hO,
        actionButtons: Ld,
        keyNames: Pd,
        scaleCaps: pd,
        sizeBesidePreview: cd,
        elements: Xd.hudElements,
        selected: Kd,
        onSelect: qd,
        rowIconsOpen: td,
        onRowIconsOpen: od,
        onScalePreview: (dd, Od) => {
          var md;
          null === (md = Vd.current) || void 0 === md || md.setScale(dd, Od)
        },
        onScale: (dd, Od) => {
          mO(dd, {
            scale: Od
          }), (0, Ed.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${dd}`
          })
        },
        onHidden: (dd, Od) => {
          mO(dd, {
            hidden: Od
          }), (0, Ed.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${Od?"hide":"show"}:${dd}`
          })
        },
        onReset: dd => {
          mO(dd, Ud.e)
        },
        locked: dO,
        lockable: XO,
        onLocked: RO,
        note: (Od, md) => {
          const Wd = md && Hd.length > 0 ? dd("hudLayout:overlapsNote", {
            names: (0, Ad.w)(Hd, Ld, dd, Pd)
          }) : null;
          if (md && Dd(Od, nd)) return (0, gd.jsxs)(gd.Fragment, {
            children: [Wd && (0, gd.jsx)("span", {
              children: Wd
            }), (0, gd.jsx)("span", {
              children: dd("hudLayout:floatingJoystickNote")
            }), !cd && (0, gd.jsx)(ed, {})]
          });
          if (Wd) return Wd;
          const Fd = md && dO.has(Od) ? dd("hudLayout:lockedNote") : null,
            Rd = md && zd.has(Od) ? dd("hudLayout:contextSlotNote") : null;
          if (Fd || Rd) return (0, gd.jsxs)(gd.Fragment, {
            children: [Fd && (0, gd.jsx)("span", {
              children: Fd
            }), Rd && (0, gd.jsx)("span", {
              children: Rd
            })]
          });
          if (md && (0, Md.y)(Od, Xd.hudElements[Od]) && KO(Od)) return dd("hudLayout:rowIconNote");
          const Kd = um[Od];
          return md && Kd ? dd(Kd) : (0, Ad.C)(Od) && (0, Ud.s)(Xd.hudElements, Od) ? dd("hudLayout:inventoryHiddenNote", {
            name: (0, Ad.A)(Od, Ld, dd, Pd)
          }) : null
        }
      };
      return (0, gd.jsxs)("div", {
        ref: rd,
        className: "HudLayoutSettings",
        children: [(0, gd.jsxs)("div", {
          ref: Cd,
          className: "HudLayoutBody",
          children: [(0, gd.jsx)("div", {
            className: "HudLayoutOrientation",
            children: dd("landscape" === Rd ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, gd.jsx)(wm, {
            preview: {
              layout: Od,
              orientation: Rd,
              selected: Kd,
              onSelect: qd,
              onMove: FO,
              canMove: KO,
              actionButtons: Ld,
              joystickFixed: nd,
              presence: ud,
              keyNames: Pd,
              maxHeight: Gd,
              apiRef: Vd,
              onMeasured: wd,
              onReady: ld,
              lockable: XO
            },
            quick: {
              layout: Xd,
              actionButtons: Ld,
              keyNames: Pd,
              scaleCaps: pd,
              overlaps: Hd,
              onScale: vO.onScale,
              onHidden: vO.onHidden,
              onReset: vO.onReset,
              locked: dO,
              lockable: XO,
              onLocked: RO
            },
            onFullScreen: () => {
              kd(!0)
            },
            resting: Zd,
            onSidePanel: jd
          }), Zd && (0, gd.jsx)(Hm, {
            layout: Od,
            orientation: Rd,
            selected: Kd,
            onSelect: qd,
            onMove: FO,
            canMove: KO,
            actionButtons: Ld,
            joystickFixed: nd,
            presence: ud,
            keyNames: Pd,
            onScale: vO.onScale,
            onHidden: vO.onHidden,
            onReset: vO.onReset,
            locked: dO,
            lockable: XO,
            onLocked: RO,
            apiRef: Vd,
            onClose: fd
          }), (0, gd.jsx)(sm, {
            safe: Xd.hudSafe,
            onCommit: dd => {
              OO((Od => (0, Ud.kb)(Od, Rd, dd)))
            },
            onPreview: dd => {
              var Od;
              null === (Od = Vd.current) || void 0 === Od || Od.setSafe(dd)
            }
          }), (0, gd.jsx)(Nd.e, {
            label: dd("hudLayout:snapCentre"),
            checked: Od.hudSnapCentre,
            onClick: dd => {
              (0, Ud.Y)(dd)
            },
            circleInfoText: dd("hudLayout:snapCentreInfo")
          }), (0, gd.jsx)(gm, {
            ...vO
          }), (0, gd.jsx)(Nd.h, {
            label: dd("hudLayout:shape"),
            options: Ud.F.map((Od => ({
              value: Od,
              label: dd(`hudLayout:shape_${Od}`)
            }))),
            value: Od.hudShape,
            onChange: dd => {
              OO((Od => ({
                ...Od,
                hudShape: dd
              }))), (0, Ed.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: dd
              })
            }
          }), (0, gd.jsx)(Nd.i, {
            name: dd("hudLayout:opacity"),
            min: Ud.f,
            max: 1,
            step: .05,
            initValue: Od.hudKeyOpacity,
            format: dd => `${Math.round(100*dd)}%`,
            circleInfoText: dd("hudLayout:opacityInfo"),
            onChange: dd => {
              var Od;
              null === (Od = Vd.current) || void 0 === Od || Od.setKeyStyle({
                hudKeyOpacity: dd
              })
            },
            onChangeComplete: dd => {
              (0, Ud.U)(dd), (0, Ed.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          }), (0, gd.jsx)(Tm, {
            colour: Od.hudKeyColour,
            previewApi: Vd
          })]
        }), (0, gd.jsx)(vd.G, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const dd = Sd.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await dd.getResult() && (0, Ud.N)()
            }()
          },
          children: dd("hudLayout:resetAll")
        })]
      })
    }
    const im = 350;
    const Am = [function() {
      const {
        t: dd
      } = (0, Wd.G)(), [Od, md] = (0, Fd.useState)(!1), Rd = (0, Fd.useRef)(null);
      return (0, Fd.useEffect)((() => {
        var dd;
        Od && (null === (dd = Rd.current) || void 0 === dd || dd.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [Od]), (0, gd.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, gd.jsx)(sd.b, {
          ref: Rd,
          icon: "arrows-up-down-left-right",
          title: dd("hudLayout:title"),
          sub: dd("hudLayout:entrySub"),
          expanded: Od,
          onClick: () => {
            md(!Od)
          }
        }), Od && (0, gd.jsx)(Vm, {})]
      })
    }, function() {
      const {
        t: dd
      } = (0, Wd.G)(), {
        gameState: Od
      } = (0, Qd.p)(["gameState"]), md = (0, Jd.i)((0, qd.j)("runningSpeed"), (0, qd.j)("walkingSpeed")), Fd = !(0, Ud.s)((0, xd.f)().hudElements, "sprint");
      return "inGame" !== Od || md ? (0, gd.jsx)(Nd.e, {
        label: dd("touchSettings:sprintKey"),
        checked: Fd,
        onClick: dd => {
          (0, Ud.P)("sprint", !dd), (0, Ed.reportAnalyticsClick)({
            id: "touch_settings.sprint_key",
            value: dd ? "show" : "hide"
          })
        },
        circleInfoText: dd("touchSettings:sprintKeyInfo")
      }) : null
    }, function() {
      const {
        t: dd
      } = (0, Wd.G)(), {
        joystickMode: Od,
        touchSpeedCurve: md,
        autorun: Fd,
        jumpLock: Rd,
        touchEdgeGuard: Xd
      } = (0, Qd.p)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, gd.jsxs)(gd.Fragment, {
        children: [(0, gd.jsx)(Nd.h, {
          label: dd("settingsMenu:joystick"),
          options: Yd.zb.map((Od => ({
            value: Od,
            label: dd(wd[Od])
          }))),
          value: Od,
          onChange: dd => {
            Qd.e.setClientEscMenuOptions({
              joystickMode: dd
            })
          },
          circleInfoText: dd("settingsMenu:joystickInfo")
        }), (0, gd.jsx)(Nd.e, {
          label: dd("settingsMenu:preciseWalking"),
          checked: md,
          onClick: dd => {
            Qd.e.setClientEscMenuOptions({
              touchSpeedCurve: dd
            })
          },
          circleInfoText: dd("settingsMenu:preciseWalkingInfo")
        }), (0, gd.jsx)(Nd.e, {
          label: dd("settingsMenu:autoRun"),
          checked: Fd,
          onClick: dd => {
            Qd.e.setClientEscMenuOptions({
              autorun: dd
            })
          },
          circleInfoText: dd("settingsMenu:autoRunInfo")
        }), (0, gd.jsx)(Nd.e, {
          label: dd("settingsMenu:jumpLock"),
          checked: Rd,
          onClick: dd => {
            Qd.e.setClientEscMenuOptions({
              jumpLock: dd
            })
          },
          circleInfoText: dd("settingsMenu:jumpLockInfo")
        }), (0, gd.jsx)(Nd.e, {
          label: dd("touchSettings:stopAtEdges"),
          checked: Xd,
          onClick: dd => {
            Qd.e.setClientEscMenuOptions({
              touchEdgeGuard: dd
            })
          },
          circleInfoText: dd("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, gd.jsx)(pd.b, {})
    }, function() {
      const {
        t: dd
      } = (0, Wd.G)(), {
        clientEscMenuOptions: Od
      } = (0, Qd.p)(["clientEscMenuOptions"]);
      return (0, Bd.e)() ? (0, gd.jsx)(Nd.e, {
        label: dd("settingsMenu:vibration"),
        checked: Od.vibration,
        onClick: dd => {
          Qd.e.setClientEscMenuOptions({
            vibration: dd
          })
        },
        circleInfoText: dd("settingsMenu:vibrationInfo")
      }) : null
    }];

    function rm() {
      return (0, gd.jsx)(gd.Fragment, {
        children: Am.map(((dd, Od) => (0, gd.jsx)(dd, {}, Od)))
      })
    }
    var Gm = md(9927),
      nm = md(9920),
      Lm = md(1808);

    function Pm() {
      const {
        t: dd
      } = (0, Wd.G)(), Od = (0, Gm.n)(), md = nm.f.filter((dd => void 0 !== Od[dd])).length;
      return (0, gd.jsx)("div", {
        className: "ControlsContainer QuickChatPhrasesSection",
        children: (0, gd.jsxs)(Dm, {
          title: dd("quickChat:settingsTitle"),
          defaultOpen: !1,
          children: [nm.f.map(((dd, md) => (0, gd.jsx)(zm, {
            phraseKey: dd,
            number: md + 1,
            custom: Od[dd]
          }, dd))), md > 1 && (0, gd.jsx)(vd.G, {
            className: "QuickChatPhrasesResetAll",
            onClick: Gm.g,
            children: dd("quickChat:resetAll")
          })]
        })
      })
    }

    function zm(dd) {
      let {
        phraseKey: Od,
        number: md,
        custom: Rd
      } = dd;
      const {
        t: Xd
      } = (0, Wd.G)(), Kd = Xd(Od), hd = null !== Rd && void 0 !== Rd ? Rd : Kd, Qd = (0, Fd.useRef)(null);
      return (0, Fd.useEffect)((() => {
        const dd = Qd.current;
        return () => {
          var md;
          dd && (null !== (md = (0, Gm.d)()[Od]) && void 0 !== md ? md : Kd) === hd && (0, Gm.m)(Od, dd.value, Kd)
        }
      }), [Od, Kd, hd]), (0, gd.jsxs)("div", {
        className: "ControlRow QuickChatPhraseRow",
        children: [(0, gd.jsx)(Lm.c, {
          domRef: Qd,
          className: "QuickChatPhraseInput",
          defaultValue: hd,
          maxLength: mO.Xc,
          ariaLabel: Xd("quickChat:phraseNumber", {
            number: md
          }),
          onEnter: () => {
            var dd;
            null === (dd = Qd.current) || void 0 === dd || dd.blur()
          },
          onBlur: () => {
            var dd;
            const md = Qd.current;
            md && ((0, Gm.m)(Od, md.value, Kd), md.value = null !== (dd = (0, Gm.d)()[Od]) && void 0 !== dd ? dd : Kd)
          }
        }, hd), (0, gd.jsx)(vd.S, {
          className: "QuickChatPhraseReset",
          disabled: void 0 === Rd,
          ariaLabel: Xd("quickChat:resetPhrase", {
            number: md
          }),
          onClick: () => {
            (0, Gm.i)(Od)
          },
          children: (0, gd.jsx)(Vd.c, {
            name: "rotate-left"
          })
        })]
      })
    }
    var cm = md(5012);

    function jm() {
      const {
        t: dd
      } = (0, Wd.G)(), {
        isTouchScreen: Od,
        clientEscMenuOptions: md,
        gameState: Xd
      } = (0, Qd.p)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), Kd = (0, qd.j)("ezBridging"), hd = (0, qd.j)("ezTowering"), yd = "inGame" !== Xd || !0 === Kd, bd = (0, Hd.h)(), pd = null !== bd && ("inGame" !== Xd || !0 === hd), [, Yd] = (0, Fd.useReducer)((dd => dd + 1), 0), wd = (0, Td.f)(), [Ed, Jd] = (0, Fd.useState)(cm.d);
      return (0, gd.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [wd && (0, gd.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, gd.jsx)("div", {
            children: dd("controller:settingsControlsNote")
          }), (0, gd.jsx)(vd.S, {
            onClick: () => {
              Qd.e.set({
                openSettingsCategory: "controller"
              })
            },
            children: dd("controller:settingsOpenController")
          })]
        }), (0, td.isTouchscreen)() && !(0, td.isMobile)() ? (0, gd.jsx)(gd.Fragment, {
          children: (0, gd.jsx)(Nd.e, {
            label: dd("settingsMenu:useTouchControls"),
            checked: Ed,
            onClick: dd => {
              (0, cm.c)(dd), Jd(dd)
            }
          })
        }) : null, Od && (0, gd.jsx)(rm, {}), (Od || wd) && (0, gd.jsx)(Pm, {}), yd && (0, gd.jsx)(Nd.e, {
          label: dd("settingsMenu:ezBridging"),
          checked: md.ezBridging,
          onClick: dd => {
            Qd.e.setClientEscMenuOptions({
              ezBridging: dd
            })
          },
          circleInfoText: dd("settingsMenu:ezBridgingInfo")
        }), pd && (0, gd.jsx)(Nd.e, {
          label: dd("settingsMenu:ezTowering"),
          checked: md.ezTowering,
          onClick: dd => {
            Qd.e.setClientEscMenuOptions({
              ezTowering: dd
            })
          },
          circleInfoText: dd("jump" === bd ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, gd.jsx)(Nd.e, {
          label: dd("settingsMenu:crouchToggle"),
          checked: md.crouchIsToggle,
          onClick: dd => {
            Qd.e.setClientEscMenuOptions({
              crouchIsToggle: dd
            })
          },
          circleInfoText: dd("settingsMenu:crouchToggleInfo")
        }), (0, gd.jsx)(Nd.e, {
          label: dd("settingsMenu:hideUiToggle"),
          checked: md.hideUiIsToggle,
          onClick: dd => {
            Qd.e.setClientEscMenuOptions({
              hideUiIsToggle: dd
            })
          },
          circleInfoText: dd("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, od.e)() && (0, gd.jsx)(Nd.i, {
          name: dd("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: md.touchscreenSensitivity,
          onChange: dd => {
            Qd.e.setClientEscMenuOptions({
              touchscreenSensitivity: dd
            })
          }
        }), !(0, td.isMobile)() && (0, gd.jsx)(Nd.i, {
          name: dd("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: md.mouseSensitivity,
          onChange: dd => {
            Qd.e.setClientEscMenuOptions({
              mouseSensitivity: dd
            })
          }
        }), !(0, td.isMobile)() && (0, gd.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, gd.jsx)("div", {
            className: "SliderText",
            children: dd("settingsMenu:keyBindings")
          }), Rd.g.map((Od => (0, gd.jsx)(Dm, {
            title: dd(Od.name.translationKey, Od.name.params),
            defaultOpen: Rd.k.has(Od.id),
            children: Od.actions.map((dd => (0, gd.jsx)(em, {
              noaAction: dd,
              forceUpdate: Yd,
              clashesWith: Od.clashesWith,
              showPadGlyph: wd
            }, dd)))
          }, Od.name.translationKey))), (0, gd.jsx)(vd.G, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, Rd.H)(), Yd()
            },
            children: dd("controls:resetBindings")
          })]
        })]
      })
    }

    function Dm(dd) {
      let {
        title: Od,
        defaultOpen: md,
        children: Wd
      } = dd;
      const [Rd, Xd] = (0, Fd.useState)(md);
      return (0, gd.jsxs)("div", {
        className: hd()("ControlsSection", {
          Collapsed: !Rd
        }),
        children: [(0, gd.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Xd(!Rd)
          },
          children: [(0, gd.jsx)("div", {
            className: "ControlsSectionTitle",
            children: Od
          }), (0, gd.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), Rd && (0, gd.jsx)("div", {
          className: "ControlsSectionRows",
          children: Wd
        })]
      })
    }

    function em(dd) {
      let {
        noaAction: Od,
        forceUpdate: md,
        clashesWith: Kd,
        showPadGlyph: Qd
      } = dd;
      const {
        t: td
      } = (0, Wd.G)(), od = (0, bd.c)(Od), [Nd, qd] = (0, Fd.useState)(!1), [Hd, Td] = (0, Fd.useState)("controls:clickToEnterNewBinding"), [pd, Yd] = (0, Fd.useState)(null), [wd, Ed] = (0, Fd.useState)(null), Jd = (0, Fd.useRef)(null);
      (0, Fd.useEffect)((() => {
        Nd && Jd.current && Jd.current.focus()
      }), [Nd]);
      const Ud = Rd.y[Od].filter((dd => Xd.j[dd]));
      let xd = null;
      const Bd = [],
        Sd = Kd.flatMap((dd => {
          var Od, md;
          return null !== (Od = null === (md = Rd.g.find((Od => Od.id === dd))) || void 0 === md ? void 0 : md.actions) && void 0 !== Od ? Od : []
        }));
      for (const Wd of Sd) {
        if (Wd === Od) continue;
        const dd = Rd.y[Wd];
        for (const Od of dd) Ud.includes(Od) && Bd.push(td(Rd.z[Wd].translationKey, Rd.z[Wd].params))
      }
      Bd.length > 0 && (xd = td("controls:sharedBindingsWarning") + " ", xd += Bd.join(", "));
      const sd = () => {
          qd(!1), Yd(null), Td("controls:clickToEnterNewBinding"), Ed(null)
        },
        ud = () => "BindingInput_" + Od;
      return (0, gd.jsxs)("div", {
        className: hd()("ControlRow", {
          WarningBorder: null !== xd
        }),
        children: [(0, gd.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, gd.jsxs)("div", {
            className: "ControlName",
            children: [td(Rd.z[Od].translationKey, Rd.z[Od].params), Qd && od && (0, gd.jsx)(yd.e, {
              glyph: od,
              className: "ControlPadGlyph"
            })]
          }), (0, gd.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, gd.jsxs)("div", {
              className: "ControlBindingsList",
              children: [Ud.map((dd => (0, gd.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, gd.jsx)("div", {
                  children: (0, Rd.r)(dd)
                }), (0, gd.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Wd = (0, Rd.C)(Od, dd);
                    Wd.isError() ? Ed(Wd.asError().message) : Ed(null), md()
                  },
                  children: "\xd7"
                })]
              }, dd))), !Nd && (0, gd.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  qd(!0), Ed(null)
                },
                children: (0, gd.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), Nd && (0, gd.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, gd.jsxs)("div", {
                className: "InputContainer",
                children: [(0, gd.jsx)("div", {
                  className: "InputOverlay",
                  children: pd ? (0, Rd.r)(pd) : (0, gd.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: td(Hd)
                  })
                }), (0, gd.jsx)("input", {
                  ref: Jd,
                  id: ud(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: dd => {
                    if ("Escape" === dd.code) return sd(), dd.preventDefault(), void dd.stopPropagation();
                    const Od = dd.code;
                    Xd.d.includes(Od) ? (Ed(null), Yd(Od)) : (Ed("controls:keyIsReserved"), Yd(null)), dd.preventDefault(), dd.stopPropagation()
                  },
                  onMouseDown: dd => {
                    const Od = "Mouse" + (dd.button + 1);
                    document.activeElement && document.activeElement.id === ud() ? Xd.d.includes(Od) ? (Ed(null), Yd(Od)) : (Ed("controls:keyIsReserved"), Yd(null)) : Td("controls:enterNewBinding"), dd.stopPropagation()
                  },
                  onBlur: () => {
                    Td("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, gd.jsx)(vd.g, {
                onPointerDown: dd => {
                  dd.preventDefault()
                },
                onClick: () => {
                  (0, Rd.d)(Od, pd), md(), sd()
                },
                className: "ControlBindingAddButton",
                disabled: null === pd,
                children: td("general:add")
              }), (0, gd.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  sd()
                },
                children: "\xd7"
              })]
            }), wd && (0, gd.jsx)("div", {
              className: "ControlBindingError",
              children: td(wd)
            })]
          })]
        }), xd && (0, gd.jsx)("div", {
          className: "ControlRowWarning",
          children: xd
        })]
      })
    }
  },
  10030: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(66),
      Fd = md(1443),
      Rd = md(1341);
    const Xd = (0, Wd.forwardRef)((function(dd, Od) {
      let {
        icon: md,
        title: Wd,
        sub: Xd,
        expanded: Kd,
        onClick: hd
      } = dd;
      return (0, Rd.jsxs)("button", {
        ref: Od,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": Kd,
        onClick: hd,
        children: [(0, Rd.jsx)(Fd.c, {
          name: md,
          className: "FeaturedSettingsEntryIcon"
        }), (0, Rd.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, Rd.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: Wd
          }), (0, Rd.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: Xd
          })]
        }), (0, Rd.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  10073: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(1341);

    function Xd(dd) {
      let {
        label: Od,
        value: md,
        swatches: Wd,
        customLabel: Xd,
        onChange: Kd
      } = dd;
      const hd = !Wd.some((dd => dd.colour === md));
      return (0, Rd.jsxs)("div", {
        className: "SettingBox SettingsColourRow",
        children: [(0, Rd.jsx)("div", {
          className: "SliderText",
          children: Od
        }), (0, Rd.jsxs)("div", {
          className: "SettingsSwatches",
          role: "radiogroup",
          "aria-label": Od,
          children: [Wd.map((dd => (0, Rd.jsx)("button", {
            type: "button",
            role: "radio",
            "aria-checked": dd.colour === md,
            "aria-label": dd.label,
            "data-pad-focusable": !0,
            className: Fd()("SettingsSwatch", {
              Selected: dd.colour === md
            }),
            style: {
              background: dd.colour
            },
            onClick: () => {
              Kd(dd.colour)
            }
          }, dd.colour))), (0, Rd.jsx)("label", {
            className: Fd()("SettingsSwatch SettingsSwatchCustom", {
              Selected: hd
            }),
            style: hd ? {
              background: md
            } : void 0,
            title: Xd,
            "data-pad-focusable": !0,
            children: (0, Rd.jsx)("input", {
              type: "color",
              "aria-label": Xd,
              value: md,
              onChange: dd => {
                Kd(dd.target.value)
              }
            })
          })]
        })]
      })
    }
  },
  9811: (dd, Od, md) => {
    md.d(Od, {
      b: () => bd,
      c: () => yd,
      f: () => Qd,
      g: () => Td,
      k: () => pd,
      o: () => od
    });
    var Wd = md(1798),
      Fd = md(1893);
    const Rd = dd => dd >= 56320 && dd <= 57343,
      Xd = dd => dd >= 55296 && dd <= 56319,
      Kd = (dd, Od) => Od >= 2 && Rd(dd.charCodeAt(Od - 1)) && Xd(dd.charCodeAt(Od - 2)) ? Od - 2 : Math.max(0, Od - 1),
      hd = (dd, Od) => {
        let md;
        var Wd, Fd;
        return md = dd.start !== dd.end ? Od < 0 ? dd.start : dd.end : Od < 0 ? Kd(dd.value, dd.start) : (Wd = dd.value, (Fd = dd.start) + 1 < Wd.length && Xd(Wd.charCodeAt(Fd)) && Rd(Wd.charCodeAt(Fd + 1)) ? Fd + 2 : Math.min(Wd.length, Fd + 1)), {
          value: dd.value,
          start: md,
          end: md
        }
      },
      vd = ["text", "search", "url", "email", "tel", "password", "number"],
      Qd = dd => !(!(0, Fd.c)(dd) || dd.isContentEditable || dd.hasAttribute("data-pad-no-osk")) && (dd instanceof HTMLTextAreaElement || dd instanceof HTMLInputElement && vd.includes(dd.type)),
      td = dd => null !== dd.selectionStart,
      od = dd => {
        var Od, md;
        const {
          value: Wd
        } = dd;
        return {
          value: Wd,
          start: null !== (Od = dd.selectionStart) && void 0 !== Od ? Od : Wd.length,
          end: null !== (md = dd.selectionEnd) && void 0 !== md ? md : Wd.length
        }
      },
      Nd = (dd, Od, md) => {
        if (dd.readOnly) return;
        const Fd = dd instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Fd, "value").set.call(dd, Od.value), td(dd) && dd.setSelectionRange(Od.start, Od.end), (0, Wd.h)(dd, new InputEvent("input", {
          bubbles: !0,
          inputType: md
        }))
      };
    let qd = !1;
    const Hd = (dd, Od) => !!document.execCommand(dd, !1, Od) || (qd || (qd = !0, console.warn(`execCommand("${dd}") failed; the on-screen keyboard is setting the value directly`)), !1),
      yd = (dd, Od) => {
        Hd("insertText", Od) || Nd(dd, function(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Wd = dd.value.slice(0, dd.start),
            Fd = dd.value.slice(dd.end);
          let Rd = md < 0 ? Od.length : Math.max(0, md - Wd.length - Fd.length);
          Rd > 0 && Rd < Od.length && Xd(Od.charCodeAt(Rd - 1)) && Rd--;
          const Kd = Od.slice(0, Rd),
            hd = Wd.length + Kd.length;
          return {
            value: Wd + Kd + Fd,
            start: hd,
            end: hd
          }
        }(od(dd), Od, dd.maxLength), "insertText")
      },
      bd = dd => {
        Hd("delete") || Nd(dd, (dd => {
          const Od = dd.start === dd.end ? Kd(dd.value, dd.start) : dd.start;
          return {
            value: dd.value.slice(0, Od) + dd.value.slice(dd.end),
            start: Od,
            end: Od
          }
        })(od(dd)), "deleteContentBackward")
      },
      Td = (dd, Od) => {
        if (!td(dd)) return;
        const md = hd(od(dd), Od);
        dd.setSelectionRange(md.start, md.end)
      },
      pd = dd => {
        td(dd) && 0 === dd.selectionStart && 0 === dd.selectionEnd && dd.setSelectionRange(dd.value.length, dd.value.length)
      }
  },
  9977: (dd, Od, md) => {
    md.d(Od, {
      e: () => hd
    });
    var Wd = md(29),
      Fd = md(2311),
      Rd = md(1462),
      Xd = md(1498),
      Kd = md(4935);
    const hd = async () => {
      if ((0, Xd.m)()) {
        if (!0 !== await Rd.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Wd.e.get("gameState")) return
      }
      const dd = await (0, Kd.c)();
      "stay" !== dd && "inGame" === Wd.e.get("gameState") && ("save" === dd && (0, Kd.i)(), (0, Fd.d)())
    }
  },
  9984: (dd, Od, md) => {
    md.d(Od, {
      b: () => hd,
      c: () => Rd,
      e: () => Xd,
      g: () => Fd,
      i: () => Kd
    });
    var Wd = md(2118);
    const Fd = "controllerPadShopOpen",
      Rd = dd => Wd.h.includes(dd),
      Xd = dd => Object.values(dd).some((dd => !1 !== dd.canBuy && !dd.isRewardedAd)),
      Kd = (dd, Od, md) => {
        var Wd, Fd, Xd, Kd;
        const hd = dd.filter((dd => !Rd(dd))),
          vd = null !== Od && dd.includes(Od) ? Od : null;
        return null !== vd && !Rd(vd) && md(vd) ? vd : null !== (Wd = null !== (Fd = null !== (Xd = null !== (Kd = hd.find(md)) && void 0 !== Kd ? Kd : hd[0]) && void 0 !== Xd ? Xd : vd) && void 0 !== Fd ? Fd : dd[0]) && void 0 !== Wd ? Wd : null
      },
      hd = dd => dd.userInput || dd.isRewardedAd || "boolean" === typeof dd.isSelected ? null : JSON.stringify([dd.image, dd.cost, dd.currency, dd.amount, dd.customTitle, dd.buyButtonText, dd.description, dd.canBuy])
  },
  10003: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd,
      f: () => Qd
    });
    var Wd = md(66),
      Fd = md(1566),
      Rd = md(2152),
      Xd = md(1518),
      Kd = md(1541),
      hd = md(1341);
    const vd = () => {
        const dd = (0, Xd.u)();
        if ((0, Wd.useEffect)((() => {
            (0, Xd.n)()
          }), []), !dd) return null;
        const {
          ControllerCategory: Od
        } = dd;
        return (0, hd.jsx)(Kd.c, {
          children: (0, hd.jsx)(Od, {})
        })
      },
      Qd = () => {
        var dd;
        const Od = (0, Xd.u)(),
          [, md] = (0, Wd.useReducer)((dd => dd + 1), 0);
        return (0, Fd.f)(Rd.b, md), null !== (dd = null === Od || void 0 === Od ? void 0 : Od.hasActivePad()) && void 0 !== dd && dd
      }
  },
  9799: (dd, Od, md) => {
    md.d(Od, {
      A: () => vd,
      E: () => xd,
      H: () => wd,
      I: () => Ed,
      M: () => yd,
      N: () => hd,
      P: () => Qd,
      e: () => bd,
      f: () => Ud,
      i: () => gd,
      l: () => Yd,
      n: () => qd,
      r: () => Hd,
      u: () => od,
      w: () => Nd,
      z: () => Jd
    });
    var Wd = md(32),
      Fd = md(1798),
      Rd = md(9805),
      Xd = md(9811),
      Kd = md(3326);
    const hd = dd => (0, Xd.f)(dd),
      vd = dd => {
        const Od = dd.getBoundingClientRect();
        return {
          x: Od.left + Od.width / 2,
          y: Od.top + Od.height / 2
        }
      },
      Qd = (dd, Od, md) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: dd.x,
        clientY: dd.y,
        screenX: dd.x,
        screenY: dd.y,
        button: Od,
        buttons: md,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      td = (dd, Od) => {
        (0, Fd.h)(dd, Od)
      },
      od = function(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Wd = 0 === md ? 1 : 2;
        td(dd, new PointerEvent("pointerdown", Qd(Od, md, Wd))), td(dd, new MouseEvent("mousedown", Qd(Od, md, Wd)))
      },
      Nd = function(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        td(dd, new PointerEvent("pointerup", Qd(Od, md, 0))), td(dd, new MouseEvent("mouseup", Qd(Od, md, 0)))
      },
      qd = function(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        od(dd, Od, md), Nd(dd, Od, md), td(dd, 0 === md ? new MouseEvent("click", Qd(Od, 0, 0)) : new MouseEvent("contextmenu", Qd(Od, 2, 0)))
      },
      Hd = function(dd, Od, md) {
        let {
          leaveBelow: Wd = null,
          enterBelow: Fd = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (dd !== Od) {
          if (null !== dd && void 0 !== dd && dd.isConnected) {
            const Fd = {
              ...Qd(md, 0, 0),
              relatedTarget: Od
            };
            td(dd, new PointerEvent("pointerout", Fd)), td(dd, new MouseEvent("mouseout", Fd));
            const Rd = dd => !!Od && dd.contains(Od) || !!Wd && dd.contains(Wd);
            for (let Od = dd; Od && !Rd(Od); Od = Od.parentElement) td(Od, new PointerEvent("pointerleave", {
              ...Fd,
              bubbles: !1
            })), td(Od, new MouseEvent("mouseleave", {
              ...Fd,
              bubbles: !1
            }))
          }
          if (Od) {
            const Wd = {
              ...Qd(md, 0, 0),
              relatedTarget: dd
            };
            td(Od, new PointerEvent("pointerover", Wd)), td(Od, new MouseEvent("mouseover", Wd));
            const Rd = [],
              Xd = Od => !(null === dd || void 0 === dd || !dd.isConnected) && Od.contains(dd) || !!Fd && Od.contains(Fd);
            for (let dd = Od; dd && !Xd(dd); dd = dd.parentElement) Rd.push(dd);
            for (const dd of Rd.reverse()) td(dd, new PointerEvent("pointerenter", {
              ...Wd,
              bubbles: !1
            })), td(dd, new MouseEvent("mouseenter", {
              ...Wd,
              bubbles: !1
            }));
            td(Od, new PointerEvent("pointermove", Qd(md, 0, 0))), td(Od, new MouseEvent("mousemove", Qd(md, 0, 0)))
          }
        } else Od && (td(Od, new PointerEvent("pointermove", Qd(md, 0, 0))), td(Od, new MouseEvent("mousemove", Qd(md, 0, 0))))
      },
      yd = dd => {
        Wd.j.lQ(Rd.f, dd)
      },
      bd = dd => {
        if (hd(dd)) return void yd(dd);
        const Od = dd.hasAttribute("data-pad-focusable") ? dd.querySelector("a[href]") : null,
          md = null !== Od && void 0 !== Od ? Od : dd;
        qd(md, vd(md))
      },
      Td = ".Dropdown-root.is-open",
      pd = dd => {
        const Od = dd.querySelector(".Dropdown-control");
        return bd(Od), Od
      },
      Yd = dd => {
        var Od;
        const md = null !== (Od = dd.closest(Td)) && void 0 !== Od ? Od : dd.querySelector(Td);
        return md ? pd(md) : null
      },
      gd = dd => {
        for (const Od of document.querySelectorAll(Td)) Od.contains(dd) || pd(Od)
      },
      wd = dd => null !== dd.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      Ed = dd => {
        const Od = dd ? document.elementFromPoint(dd.x, dd.y) : null;
        return !(null === Od || void 0 === Od || !Od.closest("[data-pad-repeat]"))
      },
      Jd = dd => {
        var Od;
        return null !== (Od = [...dd.querySelectorAll("[data-pad-back]")].find(Kd.n)) && void 0 !== Od ? Od : null
      },
      Ud = dd => {
        const Od = Jd(dd);
        return !!Od && (bd(Od), !0)
      },
      xd = dd => {
        var Od, md, Wd, Fd;
        return null !== (Od = null !== (md = null !== (Wd = dd.getAttribute("data-pad-key")) && void 0 !== Wd ? Wd : dd.getAttribute("href")) && void 0 !== md ? md : null === (Fd = dd.querySelector("a[href]")) || void 0 === Fd ? void 0 : Fd.getAttribute("href")) && void 0 !== Od ? Od : null
      }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);