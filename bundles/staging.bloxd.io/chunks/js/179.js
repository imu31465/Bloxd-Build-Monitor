export const id = 179;
export const ids = [179];
export const modules = {
  10205: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb
    });
    var eb = Mb(26),
      Hb = Mb(1259),
      pb = Mb(6050),
      Vb = Mb(1364);

    function gb(bb) {
      let {
        note: wb
      } = bb;
      const {
        t: Mb
      } = (0, Hb.C)(), {
        clientEscMenuOptions: gb
      } = (0, eb.o)(["clientEscMenuOptions"]);
      return (0, Vb.jsx)(pb.d, {
        label: Mb("touchSettings:actionButtons"),
        checked: gb.touchActionButtons,
        onClick: bb => {
          eb.c.setClientEscMenuOptions({
            touchActionButtons: bb
          })
        },
        circleInfoText: Mb("touchSettings:actionButtonsInfo"),
        note: wb
      })
    }
  },
  10196: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => qM,
      g: () => GM
    });
    var eb = Mb(1259),
      Hb = Mb(64),
      pb = Mb(2194),
      Vb = Mb(2199),
      gb = Mb(1159),
      lb = Mb.n(gb),
      Lb = Mb(1616),
      Ib = Mb(26),
      Ob = Mb(110),
      Ub = Mb(126),
      tb = Mb(6050),
      Cb = Mb(3503),
      Eb = Mb(318),
      Fb = Mb(2207),
      Bb = Mb(2210),
      sb = Mb(10203),
      mb = Mb(10205),
      hb = Mb(366),
      zb = Mb(1364);
    const Xb = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var xb = Mb(1648),
      jb = Mb(10207),
      Kb = Mb(3554),
      rb = Mb(3632);
    var Rb = Mb(10212);
    var Db = Mb(1504),
      cb = Mb(10218),
      Yb = Mb(1567),
      Zb = Mb(1475),
      fb = Mb(10227);

    function Ab(bb) {
      let {
        className: wb,
        keepPlace: Mb
      } = bb;
      return Mb ? (0, zb.jsx)("div", {
        className: lb()(wb, "Placeholder")
      }) : null
    }

    function Wb(bb) {
      let {
        id: wb,
        elements: Mb,
        actionButtons: Hb,
        keyNames: pb,
        className: Vb,
        keepPlace: gb,
        onHidden: lb
      } = bb;
      const {
        t: Ib
      } = (0, eb.C)();
      if (!fb.i[wb].hide) return (0, zb.jsx)(Ab, {
        className: Vb,
        keepPlace: gb
      });
      const Ob = (0, Kb.x)(Mb, wb);
      return (0, zb.jsx)(Lb.Y, {
        className: Vb,
        ariaLabel: Ib(Ob ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: (0, fb.t)(wb, Hb, Ib, pb)
        }),
        pressed: !Ob,
        onClick: () => {
          lb(wb, !Ob)
        },
        children: (0, zb.jsx)(Zb.b, {
          name: Ob ? "eye-slash" : "eye"
        })
      })
    }

    function Jb(bb) {
      let {
        id: wb,
        elements: Mb,
        actionButtons: Hb,
        keyNames: pb,
        className: Vb,
        keepPlace: gb,
        onlyWhenMoved: lb,
        locked: Ib,
        onReset: Ob
      } = bb;
      const {
        t: Ub
      } = (0, eb.C)(), tb = fb.i[wb], Cb = (0, Kb.O)(Mb[wb]);
      return !tb.move && !tb.scale || lb && Cb ? (0, zb.jsx)(Ab, {
        className: Vb,
        keepPlace: gb
      }) : (0, zb.jsx)(Lb.Y, {
        className: Vb,
        disabled: Cb || Ib,
        ariaLabel: Ub("hudLayout:resetElement", {
          name: (0, fb.t)(wb, Hb, Ub, pb)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: wb
        },
        onClick: bb => {
          lb && Qb(bb.currentTarget), Ob(wb)
        },
        children: (0, zb.jsx)(Zb.b, {
          name: "rotate-left"
        })
      })
    }

    function Sb(bb) {
      let {
        id: wb,
        actionButtons: Mb,
        keyNames: Hb,
        className: pb,
        keepPlace: Vb,
        locked: gb,
        lockable: lb,
        onLocked: Ib
      } = bb;
      const {
        t: Ob
      } = (0, eb.C)();
      return lb || gb ? (0, zb.jsx)(Lb.Y, {
        className: pb,
        ariaLabel: Ob(gb ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: (0, fb.t)(wb, Mb, Ob, Hb)
        }),
        pressed: gb,
        active: gb,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${gb?"unlock":"lock"}:${wb}`
        },
        onClick: () => {
          Ib(wb, !gb)
        },
        children: (0, zb.jsx)(Zb.b, {
          name: gb ? "lock" : "lock-open"
        })
      }) : (0, zb.jsx)(Ab, {
        className: pb,
        keepPlace: Vb
      })
    }

    function Nb(bb) {
      let {
        className: wb,
        open: Mb,
        name: Hb,
        onToggle: pb
      } = bb;
      const {
        t: Vb
      } = (0, eb.C)();
      return (0, zb.jsx)(Lb.Y, {
        className: wb,
        ariaLabel: Vb(Mb ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Hb
        }),
        pressed: Mb,
        analyticsClick: {
          id: "hud_layout.children",
          value: Mb ? "close" : "open"
        },
        onClick: () => {
          pb(!Mb)
        },
        children: (0, zb.jsx)(Zb.b, {
          name: Mb ? "angle-up" : "angle-down"
        })
      })
    }

    function vb(bb, wb) {
      var Mb;
      bb.contains(document.activeElement) && wb.focus({
        preventScroll: !0
      }), null === (Mb = (0, Yb.e)()) || void 0 === Mb || Mb.handOverPadFocus(bb, wb)
    }

    function Qb(bb) {
      const wb = bb.closest("[data-hud-row]"),
        Mb = null === wb || void 0 === wb ? void 0 : wb.querySelector(".HudElementRowName");
      return !(!wb || !Mb) && (vb(wb, Mb), !0)
    }
    const Gb = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function qb(bb, wb) {
      return "joystick" === bb && !wb
    }

    function ab() {
      const {
        t: bb
      } = (0, eb.C)();
      return (0, zb.jsx)(Lb.Y, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: bb => {
          const wb = bb.currentTarget;
          if (!Qb(wb)) {
            const bb = function(bb) {
              var wb, Mb;
              const eb = [bb.previousElementSibling, bb.nextElementSibling].find((bb => bb instanceof HTMLElement && bb.matches(Gb)));
              return null !== (wb = null !== eb && void 0 !== eb ? eb : null === (Mb = bb.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === Mb ? void 0 : Mb.querySelector(`:is(${Gb}):not(.HudFixJoystickButton)`)) && void 0 !== wb ? wb : null
            }(wb);
            bb && vb(wb, bb)
          }
          Ib.c.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: bb("hudLayout:fixJoystick")
      })
    }
    var ib = Mb(81),
      ub = Mb(1350),
      db = Mb(4472),
      Pb = Mb(4005),
      nb = Mb(10233),
      yb = Mb(10241),
      ob = Mb(3622),
      Tb = Mb(3642),
      kb = Mb(4522),
      bw = Mb(382),
      ww = Mb(10246);
    const Mw = bb => ({
      [fb.h]: bb
    });

    function ew(bb) {
      let {
        id: wb,
        slot: Mb,
        icon: eb,
        label: pb,
        hidden: Vb,
        className: gb,
        face: Lb
      } = bb;
      const Ib = (0, Hb.useRef)(null);
      return (0, Hb.useLayoutEffect)((() => {
        Lb && Ib.current && (0, ww.q)(Ib.current, Lb)
      }), [Lb]), (0, zb.jsxs)("div", {
        className: lb()("TouchKeyHit", `TouchSlot${Mb}`, gb, {
          HudPreviewGhost: Vb.has(wb)
        }),
        ...Mw(wb),
        children: [Lb && (0, zb.jsx)("div", {
          ref: Ib,
          className: lb()("TouchKey", {
            Labelled: Lb.classList.contains("Labelled")
          })
        }), !Lb && (0, zb.jsxs)("div", {
          className: lb()("TouchKey", {
            Labelled: void 0 !== pb
          }),
          children: [eb && (0, zb.jsx)(Zb.b, {
            name: eb
          }), void 0 !== pb && (0, zb.jsx)("span", {
            className: "TouchKeyLabel",
            children: pb
          })]
        })]
      })
    }

    function Hw(bb) {
      let {
        item: wb,
        selected: Mb
      } = bb;
      const eb = (0, Hb.useRef)(null);
      return (0, Hb.useLayoutEffect)((() => {
        eb.current && (0, ww.q)(eb.current, wb)
      }), [wb]), (0, zb.jsx)("div", {
        ref: eb,
        className: lb()("InvenItem", {
          Selected: Mb
        })
      })
    }
    const pw = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      Vw = bb => void 0 === bb ? {} : {
        style: {
          "--parked": bb
        }
      };

    function gw(bb) {
      let {
        id: wb,
        hidden: Mb,
        parked: eb,
        unslotted: Hb = !1
      } = bb;
      return (0, zb.jsx)("div", {
        className: lb()("TopRightIcon", Tb.k[wb], {
          HudPreviewGhost: Mb.has(wb),
          [ob.b]: void 0 !== eb,
          [ob.f]: Hb
        }),
        ...Vw(eb),
        children: (0, zb.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...Mw(wb),
          children: (0, zb.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, zb.jsx)(Zb.b, {
              name: pw[wb]
            })
          })
        })
      })
    }

    function lw(bb) {
      let {
        portraitPhone: wb,
        icons: Mb,
        pinnedIcons: eb,
        hidden: pb,
        moved: Vb,
        trayState: gb
      } = bb;
      const Lb = wb ? (0, ob.H)(Mb) : [],
        Ib = Mb.filter((bb => "settings" === bb)),
        Ob = Mb.filter((bb => "settings" !== bb && !Lb.includes(bb))).reverse(),
        Ub = Lb.length > 0 && "gone" === gb,
        tb = [...Ib, ...Ub ? ["tray"] : [], ...Ob].filter((bb => "tray" === bb || pb.has(bb) && !Vb.has(bb))),
        Cb = bb => {
          const wb = tb.indexOf(bb);
          return wb < 0 ? void 0 : wb
        },
        Eb = (bb, wb) => (0, zb.jsx)(gw, {
          id: bb,
          hidden: pb,
          parked: wb ? Cb(bb) : void 0,
          unslotted: wb && pb.has(bb) && Vb.has(bb)
        }, bb);
      return (0, zb.jsxs)("div", {
        className: lb()("TopRightIcons TouchInGame", {
          Column: wb
        }),
        children: [Ib.map((bb => Eb(bb, !0))), Lb.length > 0 && (0, zb.jsxs)("div", {
          className: lb()("TopRightIcon TopRightTrayToggle Open", {
            [ob.b]: Ub
          }),
          ...Vw(Cb("tray")),
          children: [(0, zb.jsx)("div", {
            className: lb()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== gb
            }),
            children: (0, zb.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, zb.jsx)(Zb.b, {
                name: "ellipsis"
              })
            })
          }), (0, zb.jsx)("div", {
            className: "TopRightTray",
            children: Lb.map((bb => Eb(bb, !1)))
          })]
        }), Ob.map((bb => (0, zb.jsxs)(Hb.Fragment, {
          children: ["perspective" === bb && null !== eb.rightOfCamera && (0, zb.jsx)(Lw, {
            icon: eb.rightOfCamera
          }), Eb(bb, !0)]
        }, bb))), null !== eb.leftEnd && (0, zb.jsx)(Lw, {
          icon: eb.leftEnd
        })]
      })
    }

    function Lw(bb) {
      let {
        icon: wb
      } = bb;
      return (0, zb.jsx)("div", {
        className: "TopRightIcon",
        children: (0, zb.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, zb.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, zb.jsx)(Zb.b, {
              name: wb
            })
          })
        })
      })
    }

    function Iw(bb) {
      let {
        next: wb,
        hidden: Mb
      } = bb;
      return (0, zb.jsx)("div", {
        className: lb()("HotBarArrow", wb ? "Next" : "Previous", {
          HudPreviewGhost: Mb
        }),
        ...Mw("arrows"),
        children: (0, zb.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, zb.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, zb.jsx)(Zb.b, {
              name: wb ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function Ow() {
      return (0, zb.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, zb.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, zb.jsx)("div", {
            className: "SocialBar",
            children: (0, zb.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, zb.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, zb.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, zb.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, zb.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, zb.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, zb.jsx)(Zb.b, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, zb.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, zb.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, zb.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, zb.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, zb.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, zb.jsx)(Zb.b, {
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
    const Uw = [{
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

    function tw(bb) {
      let {
        ghost: wb
      } = bb;
      const {
        t: Mb
      } = (0, eb.C)();
      return (0, zb.jsx)("div", {
        className: lb()("EffectInfosWrapper", {
          HudPreviewGhost: wb
        }),
        ...Mw("effects"),
        children: Uw.map((bb => {
          let {
            icon: wb,
            labelKey: eb,
            level: Hb,
            leftMs: pb
          } = bb;
          return (0, zb.jsxs)("div", {
            className: "EffectInfo",
            children: [(0, zb.jsx)("span", {
              className: "EffectInfoIcon HudPreviewEffectIcon",
              children: (0, zb.jsx)(Zb.b, {
                name: wb
              })
            }), (0, zb.jsxs)("div", {
              className: lb()("EffectInfoRightSide", {
                Untimed: null === pb
              }),
              children: [(0, zb.jsxs)("div", {
                className: "EffectInfoNameWrapper",
                children: [(0, zb.jsx)("div", {
                  className: "EffectInfoName SmallTextBold",
                  children: Mb(eb)
                }), Hb > 1 && (0, zb.jsx)("div", {
                  className: "EffectInfoName SmallTextBold",
                  children: (0, bw.Y)(Hb)
                })]
              }), null !== pb && (0, zb.jsx)("div", {
                className: "EffectInfoDuration SmallTextLight",
                children: (0, bw.mb)(pb)
              })]
            })]
          }, eb)
        }))
      })
    }
    const Cw = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Ew = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      Fw = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      Bw = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function sw(bb) {
      let {
        presence: wb,
        portraitPhone: Mb,
        hidden: Hb,
        actionButtons: pb,
        joystickFixed: Vb,
        keysAbove: gb,
        auraBar: Lb,
        trayState: Ib,
        moved: Ub
      } = bb;
      const {
        t: tb
      } = (0, eb.C)(), {
        faces: Cb,
        items: Eb
      } = wb, Fb = bb => ({
        HudPreviewGhost: (0, fb.C)(bb).some((bb => Hb.has(bb)))
      });
      return (0, zb.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, zb.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, zb.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, zb.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, zb.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, zb.jsx)("div", {
              className: "InGameHeaderGameName",
              children: tb("hudLayout:previewGameName")
            })]
          })
        }), (0, zb.jsx)("div", {
          className: "TopLeftElements",
          children: (0, zb.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, zb.jsxs)("div", {
              className: "Chat",
              children: [(0, zb.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [tb("hudLayout:previewChatLine"), tb("hudLayout:previewChatJoined", {
                  name: "Arthur"
                }), tb("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((bb => (0, zb.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, zb.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, zb.jsx)("div", {
                      className: "IndividualText",
                      children: bb
                    })
                  })
                }, bb)))
              }), (0, zb.jsxs)("div", {
                className: "ChatIcons",
                children: [(0, zb.jsx)("button", {
                  type: "button",
                  tabIndex: -1,
                  className: lb()("ChatIconWrapper SmallTextLight", Fb("chat")),
                  ...Mw("chat"),
                  children: (0, zb.jsx)(Zb.b, {
                    name: "comment-dots",
                    className: "ChatIcon"
                  })
                }), (0, zb.jsx)("div", {
                  className: "QuickChat",
                  children: (0, zb.jsx)("button", {
                    type: "button",
                    tabIndex: -1,
                    className: lb()("QuickChatIconWrapper SmallTextLight", Fb("quickChat")),
                    ...Mw("quickChat"),
                    children: (0, zb.jsx)(Zb.b, {
                      name: "comment-smile",
                      className: "QuickChatIcon"
                    })
                  })
                })]
              })]
            })
          })
        }), (0, zb.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, zb.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, zb.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, zb.jsx)("div", {
                className: "TopRightIconsContainer",
                ...Mw("menu"),
                children: (0, zb.jsx)(lw, {
                  portraitPhone: Mb,
                  icons: wb.rowIcons,
                  pinnedIcons: wb.pinnedIcons,
                  hidden: Hb,
                  trayState: Ib,
                  moved: Ub
                })
              })
            }), Ob.featureFlags.useSocialFeatures && (0, zb.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, zb.jsx)(Ow, {})
            })]
          })
        }), (0, zb.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, zb.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, zb.jsxs)("div", {
            className: "TouchInteractKey",
            ...Mw("interact"),
            children: [(0, zb.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, zb.jsx)(Zb.b, {
                name: "hand-back-point-up"
              })
            }), (0, zb.jsx)("div", {
              children: tb("hudLayout:previewInteract")
            })]
          })
        }), (0, zb.jsx)("div", {
          className: "BottomCentre",
          children: (0, zb.jsxs)("div", {
            className: "BottomElements",
            children: [(0, zb.jsx)("div", {
              className: "BottomLeftElements Touch",
              children: (0, zb.jsx)(tw, {
                ghost: Hb.has("effects")
              })
            }), (0, zb.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, zb.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...Mw("hotbar"),
                children: (0, zb.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, zb.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, zb.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, zb.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, zb.jsx)(Zb.b, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), Lb && (0, zb.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, zb.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, zb.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, kb.e)("glint"),
                    alt: ""
                  }), (0, zb.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, zb.jsx)("div", {
                  className: "AuraBar",
                  children: (0, zb.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, zb.jsx)("div", {
                className: "HotBarRow",
                children: (0, zb.jsx)("div", {
                  className: lb()("HotBarContainer Touch", {
                    KeysAbove: gb
                  }),
                  children: (0, zb.jsxs)("div", {
                    className: "HotBar",
                    ...Mw("hotbar"),
                    children: [(0, zb.jsxs)("div", {
                      className: lb()("TouchInventoryKeys", {
                        NoAuraBar: !Lb
                      }),
                      children: [(0, zb.jsx)("div", {
                        className: lb()("TouchInventoryKey ShopKey", Fb("shop"), {
                          Hidden: !wb.shop
                        }),
                        ...Mw("shop"),
                        children: (0, zb.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, zb.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, zb.jsx)(Zb.b, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, zb.jsx)("div", {
                        className: lb()("TouchInventoryKey BagKey", Fb("bag"), {
                          Hidden: !wb.bag
                        }),
                        ...Mw("bag"),
                        children: (0, zb.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, zb.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, zb.jsx)(Zb.b, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, zb.jsx)(Iw, {
                      next: !1,
                      hidden: Hb.has("arrows")
                    }), (0, zb.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== Eb && Eb.map(((bb, wb) => (0, zb.jsx)(Hw, {
                        item: bb,
                        selected: bb.classList.contains("Selected")
                      }, wb))), null === Eb && Fw.map((bb => {
                        const wb = Bw[bb];
                        return (0, zb.jsx)("div", {
                          className: lb()("InvenItem", {
                            Selected: 0 === bb
                          }),
                          children: wb && (0, zb.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, zb.jsx)(Zb.b, {
                              name: wb
                            })
                          })
                        }, bb)
                      }))]
                    }), (0, zb.jsx)(Iw, {
                      next: !0,
                      hidden: Hb.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, zb.jsx)("div", {
              className: "BottomRightElements",
              children: (0, zb.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== Cb && ww.k.map((bb => {
                  const wb = Cb[bb];
                  return wb && (0, zb.jsx)(ew, {
                    id: ww.g[bb],
                    slot: bb,
                    face: wb,
                    className: Cw[bb],
                    hidden: Hb
                  }, bb)
                })), (0, ww.w)(wb, pb).map((bb => (0, zb.jsx)(ew, {
                  id: ww.g[bb],
                  slot: bb,
                  icon: Ew[bb].icon,
                  label: tb(Ew[bb].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: Hb
                }, bb))), null === Cb && (0, zb.jsxs)(zb.Fragment, {
                  children: [(0, zb.jsx)(ew, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Hb
                  }), (0, zb.jsx)(ew, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Hb
                  }), pb && (0, zb.jsxs)(zb.Fragment, {
                    children: [(0, zb.jsx)(ew, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Hb
                    }), (0, zb.jsx)(ew, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Hb
                    })]
                  }), (0, ww.o)(pb).map((bb => (0, zb.jsx)(ew, {
                    id: ww.g[bb],
                    slot: bb,
                    icon: Ew[bb].icon,
                    label: tb(Ew[bb].labelKey),
                    hidden: Hb
                  }, bb))), (0, zb.jsx)(ew, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Hb
                  }), (0, zb.jsx)(ew, {
                    id: "zoom",
                    slot: "Z",
                    icon: "magnifying-glass-plus",
                    hidden: Hb
                  }), (0, zb.jsx)(ew, {
                    id: "drop",
                    slot: "D",
                    icon: "hand-holding-box",
                    hidden: Hb
                  })]
                })]
              })
            })]
          })
        }), (0, zb.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, zb.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, zb.jsxs)("div", {
              className: lb()("Joystick Resting HudPreviewJoystick", {
                Floating: !Vb
              }),
              ...Mw("joystick"),
              children: [(0, zb.jsx)("div", {
                className: "JoystickBase"
              }), (0, zb.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), wb.sprint && (0, zb.jsx)("div", {
            className: lb()("TouchSprintHit", Fb("sprint"), {
              AtHome: !Vb
            }),
            ...Mw("sprint"),
            children: (0, zb.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, zb.jsx)(Zb.b, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function mw() {
      const [bb, wb] = (0, Hb.useState)({}), Mb = (0, Hb.useCallback)((bb => {
        wb((wb => [...new Set([...Object.keys(wb), ...Object.keys(bb)])].every((Mb => wb[Mb] === bb[Mb])) ? wb : bb))
      }), []);
      return [bb, Mb]
    }
    const hw = .05;

    function zw(bb) {
      var wb;
      let {
        selected: Mb,
        layout: Hb,
        actionButtons: pb,
        keyNames: Vb,
        overlaps: gb,
        scaleCaps: Ib,
        joystickFixed: Ob,
        onScale: Ub,
        onHidden: tb,
        onReset: Cb,
        locked: Eb,
        lockable: Fb,
        onLocked: Bb,
        extra: sb
      } = bb;
      const {
        t: mb
      } = (0, eb.C)(), hb = Mb ? fb.i[Mb] : null, Xb = null !== Mb && Eb.has(Mb), xb = Mb ? (0, Kb.F)(Hb.hudElements, Mb)[2] : 1, jb = null !== (wb = Mb && Ib[Mb]) && void 0 !== wb ? wb : Kb.i, rb = bb => {
        Mb && Ub(Mb, Math.min(jb, Math.round(100 * (xb + .1 * bb)) / 100))
      };
      return (0, zb.jsxs)(zb.Fragment, {
        children: [(0, zb.jsxs)("div", {
          className: lb()("HudQuickName SmallTextBold", {
            Overlap: gb.length > 0
          }),
          children: [gb.length > 0 && (0, zb.jsx)(Zb.b, {
            name: "triangle-exclamation"
          }), hb ? (0, fb.t)(hb.id, pb, mb, Vb) : mb("hudLayout:fullScreenHint"), gb.length > 0 && (0, zb.jsx)("span", {
            className: "HudQuickOverlap",
            children: mb("hudLayout:overlapsShort", {
              names: (0, fb.p)(gb, pb, mb, Vb)
            })
          })]
        }), (null === hb || void 0 === hb ? void 0 : hb.scale) && (0, zb.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, zb.jsx)(Lb.Y, {
            disabled: Xb || xb <= Kb.l,
            ariaLabel: mb("hudLayout:smaller"),
            onClick: () => {
              rb(-1)
            },
            children: (0, zb.jsx)(Zb.b, {
              name: "minus"
            })
          }), (0, zb.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*xb)}%`
          }), (0, zb.jsx)(Lb.Y, {
            disabled: Xb || xb >= jb,
            ariaLabel: mb("hudLayout:larger"),
            onClick: () => {
              rb(1)
            },
            children: (0, zb.jsx)(Zb.b, {
              name: "plus"
            })
          })]
        }), (hb || sb) && (0, zb.jsxs)("div", {
          className: "HudQuickActions",
          children: [hb && (0, zb.jsxs)(zb.Fragment, {
            children: [(0, zb.jsx)(Sb, {
              id: hb.id,
              actionButtons: pb,
              keyNames: Vb,
              locked: Xb,
              lockable: Fb(hb.id),
              onLocked: Bb
            }), (0, zb.jsx)(Wb, {
              id: hb.id,
              elements: Hb.hudElements,
              actionButtons: pb,
              keyNames: Vb,
              onHidden: tb
            }), (0, zb.jsx)(Jb, {
              id: hb.id,
              elements: Hb.hudElements,
              actionButtons: pb,
              keyNames: Vb,
              locked: Xb,
              onReset: Cb
            }), qb(hb.id, Ob) && (0, zb.jsx)(ab, {})]
          }), sb]
        })]
      })
    }
    var Xw = Mb(1168),
      xw = Mb(5265);
    const jw = "HudPreviewDoc",
      Kw = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      rw = new Set([jw, ...Object.values(Kw)]),
      Rw = new Set(Kb.B.map(Tb.v)),
      Dw = new Set(Tb.i),
      Yw = 'style, link[rel="stylesheet"]';

    function Zw(bb, wb, Mb, eb) {
      const Hb = new Map,
        pb = new Set,
        Vb = new URL(bb.baseURI).origin,
        gb = wb => {
          var Mb;
          if ("LINK" !== wb.nodeName) return !0;
          const eb = null === (Mb = wb.getAttribute("href")) || void 0 === Mb ? void 0 : Mb.trim();
          if (!eb) return !1;
          try {
            return new URL(eb, bb.baseURI).origin === Vb
          } catch {
            return !1
          }
        };
      let lb = null;
      const Lb = () => {
          lb !== (0 === pb.size) && (lb = 0 === pb.size, null === eb || void 0 === eb || eb(lb))
        },
        Ib = bb => {
          const wb = bb.cloneNode(!0);
          if ("LINK" === wb.tagName) {
            pb.add(wb);
            const bb = () => {
              pb.delete(wb), Lb()
            };
            wb.addEventListener("load", bb), wb.addEventListener("error", bb), Mb && wb.addEventListener("load", Mb)
          }
          return wb
        },
        Ob = () => {
          const eb = function(bb) {
              const wb = [...bb.body.children].filter((bb => bb.matches(Yw)));
              return [...bb.head.querySelectorAll(Yw), ...wb]
            }(bb).filter(gb),
            Vb = new Set(eb);
          for (const [bb, wb] of Hb) Vb.has(bb) || (wb.remove(), Hb.delete(bb), pb.delete(wb));
          let lb = null;
          for (let bb = eb.length - 1; bb >= 0; bb--) {
            const pb = eb[bb];
            let Vb = Hb.get(pb);
            Vb ? "STYLE" === pb.tagName && Vb.textContent !== pb.textContent && (Vb.textContent = pb.textContent, null === Mb || void 0 === Mb || Mb()) : (Vb = Ib(pb), Hb.set(pb, Vb), wb.head.insertBefore(Vb, lb)), lb = Vb
          }
          Lb()
        };
      Ob();
      const Ub = new MutationObserver(Ob);
      return Ub.observe(bb.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), Ub.observe(bb.body, {
        childList: !0
      }), () => {
        Ub.disconnect()
      }
    }

    function fw(bb, wb, Mb) {
      let {
        keysAbove: eb
      } = Mb;
      const Hb = [...bb.documentElement.classList].filter((bb => !rw.has(bb) && !Dw.has(bb))),
        pb = [...wb.documentElement.classList].filter((bb => Dw.has(bb))),
        Vb = [jw, Kw.hotbar, Kw.hasShop, Kw.hasBag];
      eb && Vb.push(Kw.keysAbove), wb.documentElement.className = [...Hb, ...Vb, ...pb].join(" ")
    }
    const Aw = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Ww(bb, wb, Mb, eb, Hb) {
      const pb = (0, Kb.C)(Mb, eb, "joystick"),
        Vb = (0, Tb.z)((0, Tb.H)(Mb, eb, Hb), eb),
        gb = Vb.classes.filter((bb => !Rw.has(bb))),
        lb = wb.documentElement,
        Lb = Mb.hudLayouts[eb].hudSafe,
        Ib = (0, Tb.E)(Lb, window.innerWidth, window.innerHeight, Jw(), Lb ? (0, Tb.J)(wb) : 0);
      (0, Tb.L)({
        ...Vb,
        classes: gb
      }, {
        vars: lb,
        safe: lb,
        classes: lb
      }), lb.style.setProperty("--preview-joystick-shift-left", `${Ib[3]}px`), lb.style.setProperty("--preview-joystick-shift-bottom", `${Ib[2]}px`), lb.style.setProperty("--preview-joystick-scale", String(pb[2])), (0, xw.d)(lb, wb, Mb, eb);
      for (const Ob of Aw) lb.style.setProperty(Ob, bb.documentElement.style.getPropertyValue(Ob) || "0px")
    }

    function Jw() {
      return (0, Tb.G)(Ib.c.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function Sw(bb) {
      return (0, Tb.r)(Jw(), (0, Tb.J)(bb))
    }

    function Nw(bb, wb, Mb) {
      const eb = bb.documentElement.style,
        Hb = (0, Tb.F)(wb),
        pb = eb.getPropertyValue(Hb);
      try {
        return Mb((bb => {
          eb.setProperty(Hb, String(bb))
        }))
      } finally {
        "" === pb ? eb.removeProperty(Hb) : eb.setProperty(Hb, pb)
      }
    }

    function vw(bb, wb) {
      const [Mb, eb] = Nw(bb, "hotbar", (wb => {
        const Mb = Mb => {
          var eb, Hb;
          return wb(Mb), null !== (eb = null === (Hb = bb.querySelector(".HotBarGameItemsContainer")) || void 0 === Hb ? void 0 : Hb.getBoundingClientRect().width) && void 0 !== eb ? eb : 0
        };
        return [Mb(1), Mb(Kb.i)]
      }));
      return Mb <= 0 ? Kb.i : Math.min(Kb.i, Math.max(1, Math.floor(eb / Mb / wb + 1e-6) * wb))
    }
    const Qw = 3,
      Gw = .5,
      qw = bb => bb.right - bb.left;
    const aw = (bb, wb) => Math.abs((0, nb.b)(bb).x - (0, nb.b)(wb).x) + Math.abs((0, nb.b)(bb).y - (0, nb.b)(wb).y) + Math.abs(qw(bb) - qw(wb));

    function iw(bb, wb, Mb, eb, Hb) {
      let {
        canKeep: pb = () => !0,
        passes: Vb = Qw,
        before: gb
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const lb = wb.hudLayouts[Mb].hudLocked.filter(pb);
      if (0 === lb.length) return wb;
      const Lb = [...fb.d].filter((eb => !lb.includes(eb) && (0, Kb.C)(bb, Mb, eb).join() === (0, Kb.C)(wb, Mb, eb).join())),
        Ib = bb => {
          const wb = (0, nb.H)(Lb.flatMap((wb => bb[wb] ? [bb[wb]] : [])));
          return {
            ...bb,
            cluster: null !== wb && void 0 !== wb ? wb : void 0
          }
        };
      let Ob = null;
      const Ub = bb => {
          Ob = bb;
          const wb = Hb(bb);
          return wb && {
            ...wb,
            boxes: Ib(wb.boxes)
          }
        },
        tb = gb ? {
          ...gb,
          boxes: Ib(gb.boxes)
        } : Ub(bb),
        Cb = tb && Ub(wb);
      if (!tb || !Cb) return wb;
      const Eb = tb.boxes;
      let Fb = Cb.boxes;
      const Bb = tb.keysAbove !== Cb.keysAbove,
        sb = Bb || Boolean(tb.shopAlone) !== Boolean(Cb.shopAlone),
        mb = new Set(lb.filter((bb => !(0, fb.w)(bb) || !("bag" === bb ? Bb : sb))));
      let hb = wb;
      for (let xb = 0; xb < Vb && mb.size > 0; xb++) {
        var zb, Xb;
        const bb = new Map;
        for (const wb of mb) {
          const Hb = Eb[wb],
            pb = Fb[wb],
            Vb = Hb && pb ? uw(wb, (0, Kb.C)(hb, Mb, wb), Hb, pb, eb) : null;
          Vb ? bb.set(wb, Vb) : mb.delete(wb)
        }
        if (0 === bb.size) break;
        let Hb = hb;
        for (const [wb, eb] of bb) Hb = (0, Kb.ob)(Hb, Mb, wb, eb);
        const pb = null === (zb = Ub(Hb)) || void 0 === zb ? void 0 : zb.boxes;
        if (!pb) return wb;
        let Vb = hb;
        for (const [wb, eb] of bb) {
          const bb = pb[wb];
          bb && aw(Eb[wb], bb) < aw(Eb[wb], Fb[wb]) - Gw ? Vb = (0, Kb.ob)(Vb, Mb, wb, eb) : mb.delete(wb)
        }
        if (Vb === hb) break;
        const gb = [...bb.keys()].every((bb => mb.has(bb)));
        hb = gb ? Hb : Vb;
        const lb = gb ? pb : null === (Xb = Ub(hb)) || void 0 === Xb ? void 0 : Xb.boxes;
        if (!lb) return wb;
        Fb = lb
      }
      return Ob !== hb && Hb(hb), hb
    }

    function uw(bb, wb, Mb, eb, Hb) {
      let [pb, Vb, gb] = wb;
      const lb = Kb.y[bb],
        Lb = {};
      lb.scale && qw(eb) > 0 && Math.abs(qw(Mb) - qw(eb)) > Gw && (Lb.scale = Math.max(Kb.l, Math.min(Kb.i, gb * qw(Mb) / qw(eb))));
      const Ib = (0, nb.b)(Mb).x - (0, nb.b)(eb).x,
        Ob = (0, nb.b)(Mb).y - (0, nb.b)(eb).y;
      return lb.move && (Math.abs(Ib) > Gw || Math.abs(Ob) > Gw) && (Lb.dx = pb + Ib / Hb.width, Lb.dy = Vb + Ob / Hb.height), void 0 === Lb.scale && void 0 === Lb.dx ? null : Lb
    }
    let dw = 0;

    function Pw() {
      return dw > 0
    }
    const nw = bb => 0 === bb.dx && 0 === bb.dy,
      yw = .001,
      ow = bb => Math.abs(bb.dx) >= 5e-4 || Math.abs(bb.dy) >= 5e-4 ? bb : {
        dx: bb.dx,
        dy: bb.dy < 0 ? -.001 : yw
      };

    function Tw(bb) {
      let {
        preview: wb,
        stageRef: Mb,
        ringRef: eb,
        centreLineRef: pb,
        snapCentre: Vb,
        ready: gb,
        measure: lb,
        k: Lb,
        viewport: Ib,
        boxes: Ob,
        pieces: Ub,
        selected: tb,
        insets: Cb,
        layout: Eb,
        canMove: Fb,
        onSelect: Bb,
        onMove: sb
      } = bb;
      const mb = (0, Hb.useRef)(null),
        hb = (0, Hb.useCallback)((() => null !== mb.current), []),
        zb = (bb, wb) => {
          if (!wb) return null;
          const Mb = (0, nb.b)(bb.origin),
            eb = (0, nb.b)(wb),
            Hb = (bb.to.dx - bb.from.dx) * Ib.width,
            pb = (bb.to.dy - bb.from.dy) * Ib.height,
            Vb = wb.right - wb.left,
            gb = wb.bottom - wb.top;
          return {
            skew: {
              x: eb.x - Mb.x - Hb,
              y: eb.y - Mb.y - pb
            },
            box: {
              left: Mb.x - Vb / 2,
              top: Mb.y - gb / 2,
              right: Mb.x + Vb / 2,
              bottom: Mb.y + gb / 2
            }
          }
        },
        Xb = (bb, Mb) => {
          var Hb;
          const Vb = mb.current;
          if (!Vb || Vb.pointerId !== bb.pointerId) return;
          mb.current = null, null === (Hb = pb.current) || void 0 === Hb || Hb.classList.remove("Shown", "Snapped");
          const gb = eb.current;
          if (gb && null !== Vb.ringStyle && gb.setAttribute("style", Vb.ringStyle), Mb && Vb.moved) {
            const bb = nw(Vb.to) ? null : lb(Vb.id),
              wb = bb ? (0, nb.E)(bb, (0, nb.B)(Ib.width, Ib.height, Cb)) : {
                x: 0,
                y: 0
              },
              Mb = {
                dx: Vb.to.dx + wb.x / Ib.width,
                dy: Vb.to.dy + wb.y / Ib.height
              },
              eb = nw(Vb.to) ? Mb : ow(Mb);
            sb(Vb.id, eb.dx, eb.dy)
          } else wb(Vb.id, null), Mb && Vb.tapPick && Bb(Vb.tapPick)
        };
      return {
        busy: hb,
        handlers: {
          onPointerDown: bb => {
            var wb;
            if (!gb || mb.current || !bb.target.closest(".HudPreviewHandle")) return;
            const eb = Mb.current.getBoundingClientRect(),
              Hb = {
                x: (bb.clientX - eb.left) / Lb,
                y: (bb.clientY - eb.top) / Lb
              },
              pb = (0, nb.w)(Hb, Ub, 40 / Lb),
              Vb = null !== tb ? fb.n.get(tb) : void 0,
              lb = void 0 !== Vb && null !== (0, nb.w)(Hb, Ub.filter((bb => {
                let {
                  id: wb
                } = bb;
                return Vb.has(wb)
              })), 40 / Lb),
              Ib = "menu" === tb && void 0 !== Ob.menu && (0, nb.c)(Ob.menu, Hb) && ("menu" === pb || null !== pb && (0, ob.C)(pb, Eb.hudElements[pb])),
              Cb = lb ? tb : Ib ? "menu" : null,
              sb = null !== Cb,
              hb = null !== Cb && void 0 !== Cb ? Cb : pb;
            if (!hb) return;
            if (function(bb) {
                dw++;
                const wb = Mb => {
                  Mb.pointerId === bb && (dw = Math.max(0, dw - 1), window.removeEventListener("pointerup", wb, !0), window.removeEventListener("pointercancel", wb, !0))
                };
                window.addEventListener("pointerup", wb, !0), window.addEventListener("pointercancel", wb, !0)
              }(bb.pointerId), !Fb(hb)) return void Bb(sb && pb ? pb : hb);
            Bb(hb);
            const [zb, Xb] = null !== (wb = Eb.hudElements[hb]) && void 0 !== wb ? wb : [0, 0], xb = {
              dx: zb,
              dy: Xb
            }, jb = {
              skew: {
                x: 0,
                y: 0
              },
              box: Ob[hb]
            };
            mb.current = {
              id: hb,
              pointerId: bb.pointerId,
              startX: bb.clientX,
              startY: bb.clientY,
              origin: Ob[hb],
              from: xb,
              to: xb,
              moved: !1,
              home: nw(xb) ? {
                centre: (0, nb.b)(Ob[hb]),
                anchor: jb
              } : null,
              away: nw(xb) ? null : jb,
              anchor: jb,
              ringStyle: null,
              tapPick: sb ? pb : null
            }, bb.currentTarget.setPointerCapture(bb.pointerId)
          },
          onPointerMove: bb => {
            const Mb = mb.current;
            if (!Mb || Mb.pointerId !== bb.pointerId) return;
            const Hb = bb.clientX - Mb.startX,
              gb = bb.clientY - Mb.startY;
            if (!Mb.moved && Math.hypot(Hb, gb) < 5) return;
            const Ob = !Mb.moved;
            var Ub, tb;
            (Mb.moved = !0, Ob) && (Mb.ringStyle = null !== (Ub = null === (tb = eb.current) || void 0 === tb ? void 0 : tb.getAttribute("style")) && void 0 !== Ub ? Ub : null);
            const Eb = (0, nb.B)(Ib.width, Ib.height, Cb);
            if (!Mb.home) {
              var Fb;
              Mb.to = {
                dx: 0,
                dy: 0
              }, wb(Mb.id, Mb.to);
              const bb = lb(Mb.id),
                eb = null !== (Fb = zb(Mb, bb)) && void 0 !== Fb ? Fb : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: Mb.origin
                },
                Hb = (0, nb.b)(Mb.origin);
              Mb.home = {
                centre: bb ? (0, nb.b)(bb) : {
                  x: Hb.x - Mb.from.dx * Ib.width,
                  y: Hb.y - Mb.from.dy * Ib.height
                },
                anchor: eb
              }
            }
            const Bb = Mb.home;
            let sb = !1;
            const hb = bb => {
                sb = !1;
                let eb = (0, nb.l)(bb.box, Hb / Lb, gb / Lb, Eb);
                const pb = Ib.width / 2;
                if (Vb && Math.abs((0, nb.b)(Mb.origin).x + eb.x - pb) <= 8 / Lb) {
                  const wb = pb - (0, nb.b)(Mb.origin).x,
                    Hb = (0, nb.l)(bb.box, wb, eb.y, Eb);
                  sb = Math.abs(Hb.x - wb) < .01, sb && (eb = Hb)
                }
                const lb = (0, nb.t)(Mb.from, eb.x - bb.skew.x, eb.y - bb.skew.y, Ib.width, Ib.height);
                Mb.to = ow(lb), Mb.anchor = bb, wb(Mb.id, Mb.to)
              },
              Xb = (0, nb.l)(Bb.anchor.box, Hb / Lb, gb / Lb, Eb),
              xb = pb.current,
              jb = (0, nb.b)(Mb.origin),
              rb = ((0, Kb.T)(Mb.id) ? 20 : 6) / Lb;
            if (Math.abs(jb.x + Xb.x - Bb.centre.x) <= rb && Math.abs(jb.y + Xb.y - Bb.centre.y) <= rb) Mb.to = {
              dx: 0,
              dy: 0
            }, Mb.anchor = Bb.anchor, sb = Vb && Math.abs(Bb.centre.x - Ib.width / 2) < 1, wb(Mb.id, Mb.to);
            else if (Mb.away) hb(Mb.away);
            else {
              var Rb;
              hb(Bb.anchor), Mb.away = null !== (Rb = zb(Mb, lb(Mb.id))) && void 0 !== Rb ? Rb : Bb.anchor, hb(Mb.away)
            }
            null === xb || void 0 === xb || xb.classList.add("Shown"), null === xb || void 0 === xb || xb.classList.toggle("Snapped", sb), (bb => {
              const wb = eb.current;
              if (wb) {
                const {
                  skew: Mb,
                  box: eb
                } = bb.anchor;
                wb.style.left = eb.left * Lb + "px", wb.style.top = eb.top * Lb + "px", wb.style.width = (eb.right - eb.left) * Lb + "px", wb.style.height = (eb.bottom - eb.top) * Lb + "px", wb.style.translate = `${((bb.to.dx-bb.from.dx)*Ib.width+Mb.x)*Lb}px ${((bb.to.dy-bb.from.dy)*Ib.height+Mb.y)*Lb}px`
              }
            })(Mb)
          },
          onPointerUp: bb => {
            Xb(bb, !0)
          },
          onPointerCancel: bb => {
            Xb(bb, !1)
          }
        }
      }
    }
    var kw = Mb(10248);

    function bM(bb, wb) {
      return Object.keys(bb).filter((bb => bb !== wb)).map((wb => bb[wb]))
    }

    function wM(bb) {
      return bb.map((bb => {
        let {
          id: wb,
          box: Mb
        } = bb;
        return `${wb}:${Mb.left},${Mb.top},${Mb.right},${Mb.bottom}`
      })).join(";")
    }

    function MM(bb) {
      const wb = [],
        Mb = wb => (0, Kb.T)(wb) && !bb.documentElement.classList.contains((0, Tb.B)(wb));
      for (const gb of bb.querySelectorAll(`[${fb.h}]`)) {
        const bb = Mb(gb.getAttribute(fb.h)) ? gb.querySelector(".ScaleOnHover") : null,
          eb = (null !== bb && void 0 !== bb ? bb : gb).getBoundingClientRect();
        (eb.width > 0 || eb.height > 0) && wb.push({
          id: gb.getAttribute(fb.h),
          box: (0, nb.g)(eb)
        })
      }
      const eb = bb => (0, nb.H)(wb.filter((wb => {
          let {
            id: Mb
          } = wb;
          return bb(Mb)
        })).map((bb => {
          let {
            box: wb
          } = bb;
          return wb
        }))),
        Hb = {};
      for (const gb of new Set(wb.map((bb => bb.id)))) Hb[gb] = eb((bb => bb === gb));
      for (const [gb, lb] of fb.n) {
        const bb = eb((bb => lb.has(bb)));
        bb && (Hb[gb] = bb)
      }
      const pb = bb.querySelector(".TouchInventoryKeys"),
        Vb = pb ? (0, nb.g)(pb.getBoundingClientRect()) : null;
      return {
        boxes: Hb,
        pieces: wb,
        pairHome: Vb
      }
    }

    function eM(bb, wb, Mb) {
      const eb = wb.right - wb.left,
        Hb = wb.bottom - wb.top;
      return Nw(bb, "cluster", (wb => {
        const pb = Mb => {
            wb(Mb);
            const eb = [...bb.querySelectorAll(`[${fb.h}]:not(.HudPreviewGhost)`)].filter((bb => fb.d.has(bb.getAttribute(fb.h)))).map((bb => (0, nb.g)(bb.getBoundingClientRect()))),
              Hb = (0, nb.H)(eb);
            return Hb ? {
              w: Hb.right - Hb.left,
              h: Hb.bottom - Hb.top
            } : null
          },
          Vb = bb => !bb || bb.w <= eb && bb.h <= Hb,
          gb = pb(1),
          lb = pb(Kb.i);
        if (!gb || Vb(lb)) return Kb.i;
        const Lb = (bb, wb, Mb) => wb > bb ? 1 + (Mb - bb) * (Kb.i - 1) / (wb - bb) : Kb.i;
        let Ib = Math.floor(Math.min(Kb.i, Lb(gb.w, lb.w, eb), Lb(gb.h, lb.h, Hb)) / Mb + 1e-6) * Mb;
        for (; Ib > 1 && !Vb(pb(Ib));) Ib = Math.round(100 * (Ib - Mb)) / 100;
        return Math.max(1, Ib)
      }))
    }

    function HM(bb) {
      fw(document, bb, {
        keysAbove: !1
      });
      const wb = parseFloat(getComputedStyle(bb.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        Mb = Number.isFinite(wb) && wb < 0;
      return fw(document, bb, {
        keysAbove: Mb
      }), (0, kw.b)(bb), Mb
    }

    function pM(bb) {
      const wb = bb.querySelector(".TouchInventoryKey.ShopKey");
      return null !== wb && "1" === getComputedStyle(wb).getPropertyValue("--touch-shop-above").trim()
    }

    function VM(bb, wb) {
      let {
        layout: Mb,
        orientation: eb,
        viewport: pb,
        replicaKey: Vb,
        joystickFixed: gb,
        busy: lb
      } = wb;
      const [Lb, Ib] = (0, Hb.useState)(null), [Ob, Ub] = (0, Hb.useState)({
        boxes: {},
        pieces: []
      }), [tb, Cb] = (0, Hb.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [Eb, Fb] = (0, Hb.useState)(!1), [Bb, sb] = (0, Hb.useState)(!1), [mb, hb] = (0, Hb.useState)(!1), zb = (0, Hb.useCallback)((bb => {
        sb(bb), bb && hb(!0)
      }), []), Xb = Mb.hudLayouts[eb].hudSafe;
      (0, Hb.useLayoutEffect)((() => {
        const wb = bb.current.contentDocument;
        wb.open(), wb.write("<!DOCTYPE html><html><head></head><body></body></html>"), wb.close(), Ib(wb)
      }), [bb]);
      const xb = (0, Hb.useCallback)((() => {
          Lb && ((0, ob.E)(Lb), Ub(MM(Lb)), Cb(function(bb, wb) {
            const Mb = Sw(bb),
              [eb, Hb, pb, Vb] = wb ? (0, Tb.s)(wb, window.innerWidth, window.innerHeight, Mb) : Mb;
            return {
              top: eb,
              right: Hb,
              bottom: pb,
              left: Vb
            }
          }(Lb, Xb)))
        }), [Lb, Xb]),
        jb = (0, Hb.useCallback)((() => {
          Lb && Fb(HM(Lb))
        }), [Lb]),
        Kb = (0, Hb.useRef)((() => {}));
      return Kb.current = () => {
        jb(), lb() || xb()
      }, (0, Hb.useLayoutEffect)((() => {
        if (Lb) return Zw(document, Lb, (() => {
          Kb.current()
        }), zb)
      }), [Lb, zb]), (0, Hb.useLayoutEffect)(jb, [jb, pb]), (0, Hb.useLayoutEffect)((() => {
        Lb && (fw(document, Lb, {
          keysAbove: Eb
        }), Ww(document, Lb, Mb, eb, gb), jb(), xb())
      }), [Lb, Mb, eb, Eb, Vb, gb, pb, xb, jb]), (0, Hb.useEffect)((() => {
        var bb;
        if (!Lb) return;
        const wb = new ResizeObserver((() => {
          lb() || xb()
        }));
        for (const Mb of Lb.querySelectorAll(`[${fb.h}]`)) wb.observe(Mb);
        return null === (bb = Lb.fonts) || void 0 === bb || bb.ready.then(xb), () => {
          wb.disconnect()
        }
      }), [Lb, xb, lb, Vb]), {
        doc: Lb,
        boxes: Ob.boxes,
        pieces: Ob.pieces,
        insets: tb,
        keysAbove: Eb,
        ready: Bb,
        settled: mb
      }
    }
    const gM = ["Above", "Below", "Left", "Right"];

    function lM(bb, wb, Mb, eb, Hb) {
      const pb = Mb[bb],
        Vb = (pb.left + pb.right) / 2,
        gb = (pb.top + pb.bottom) / 2,
        lb = (7.5 * wb.length + 14) / eb,
        Lb = 18 / eb,
        Ib = {
          Above: {
            left: Vb - lb / 2,
            top: pb.top - Lb,
            right: Vb + lb / 2,
            bottom: pb.top
          },
          Below: {
            left: Vb - lb / 2,
            top: pb.bottom,
            right: Vb + lb / 2,
            bottom: pb.bottom + Lb
          },
          Left: {
            left: pb.left - lb,
            top: gb - Lb / 2,
            right: pb.left,
            bottom: gb + Lb / 2
          },
          Right: {
            left: pb.right,
            top: gb - Lb / 2,
            right: pb.right + lb,
            bottom: gb + Lb / 2
          }
        },
        Ob = bM(Mb, bb),
        Ub = {
          left: 0,
          top: 0,
          right: Hb.width,
          bottom: Hb.height
        };
      return gM[(0, nb.p)(gM.map((bb => Ib[bb])), Ob, {
        bounds: Ub
      })]
    }

    function LM() {
      const [bb, wb] = (0, db.c)();
      return (0, Hb.useMemo)((() => ({
        width: bb,
        height: wb
      })), [bb, wb])
    }

    function IM(bb) {
      var wb;
      const {
        layout: Mb,
        orientation: pb,
        selected: Vb,
        onSelect: gb,
        onMove: Lb,
        canMove: Ib,
        actionButtons: Ob,
        joystickFixed: Ub,
        presence: tb,
        keyNames: Eb,
        maxHeight: Fb,
        fill: Bb = !1,
        apiRef: sb
      } = bb, {
        t: mb
      } = (0, eb.C)(), hb = LM(), Xb = (null !== (wb = (0, Cb.k)("maxAuraLevel")) && void 0 !== wb ? wb : 0) > 0, xb = Mb.hudLayouts[pb], jb = (0, Hb.useRef)(null), rb = (0, Hb.useRef)(null), Rb = (0, Hb.useRef)(null), Db = (0, Hb.useRef)(null), cb = (0, Hb.useRef)(null), Yb = (0, Hb.useRef)(null), Ab = (0, Pb.b)(jb).width, Wb = Bb ? 1 : Ab > 0 ? (0, nb.A)(Ab, hb.width, hb.height, Fb) : 0, Jb = (0, Hb.useRef)((() => !1)), Sb = (0, Hb.useCallback)((() => Jb.current()), []), Nb = `${Ob}:${Ub}:${Xb}`, {
        doc: vb,
        boxes: Qb,
        pieces: Gb,
        insets: qb,
        keysAbove: ab,
        ready: ub,
        settled: db
      } = VM(Rb, {
        layout: Mb,
        orientation: pb,
        viewport: hb,
        replicaKey: Nb,
        joystickFixed: Ub,
        busy: Sb
      }), kb = (0, Hb.useCallback)((bb => {
        vb && Ww(document, vb, bb, pb, Ub)
      }), [vb, pb, Ub]), bw = (0, Hb.useCallback)((bb => {
        if (!vb || !db) return null;
        kb(bb);
        const wb = HM(vb),
          Mb = function(bb, wb) {
            let {
              boxes: Mb,
              pieces: eb,
              pairHome: Hb
            } = bb;
            const pb = eb.find((bb => fb.m.has(bb.id)));
            if (!pb || !Hb) return Mb;
            const Vb = (0, nb.b)(Hb),
              gb = wb(pb.id),
              lb = qw(pb.box) / gb / 2,
              Lb = (pb.box.bottom - pb.box.top) / gb / 2;
            return {
              ...Mb,
              inventory: {
                left: Vb.x - lb,
                top: Vb.y - Lb,
                right: Vb.x + lb,
                bottom: Vb.y + Lb
              }
            }
          }(MM(vb), (wb => (0, Kb.C)(bb, pb, wb)[2]));
        return {
          boxes: Mb,
          keysAbove: wb,
          shopAlone: pM(vb)
        }
      }), [vb, db, kb, pb]), ww = (0, Hb.useRef)(null), Mw = (0, Hb.useRef)(null), ew = (0, Hb.useRef)(Mb);
      ew.current = Mb;
      const Hw = (0, Hb.useCallback)((() => {
        null !== ww.current && (cancelAnimationFrame(ww.current), ww.current = null)
      }), []);
      (0, Hb.useEffect)((() => Hw), [Mb, Hw]);
      const pw = (0, Hb.useRef)(-1 / 0),
        {
          lockable: Vw
        } = bb,
        gw = (0, Hb.useCallback)((bb => {
          if (kb(bb), pw.current = performance.now(), !db || 0 === Mb.hudLayouts[pb].hudLocked.length) return;
          const wb = Mb;
          Hw(), ww.current = requestAnimationFrame((() => {
            var Mb;
            if (ww.current = null, ew.current !== wb) return;
            const eb = (null === (Mb = Mw.current) || void 0 === Mb ? void 0 : Mb.from) === wb ? Mw.current.measured : bw(wb);
            eb && (Mw.current = {
              from: wb,
              measured: eb
            }), kb(eb ? iw(wb, bb, pb, hb, bw, {
              canKeep: Vw,
              passes: 1,
              before: eb
            }) : bb)
          }))
        }), [kb, db, Mb, pb, hb, bw, Vw, Hw]),
        lw = Tw({
          preview: (bb, wb) => {
            wb ? gw((0, Kb.ob)(Mb, pb, bb, wb)) : (Hw(), kb(Mb))
          },
          stageRef: rb,
          ringRef: Db,
          centreLineRef: cb,
          snapCentre: Mb.hudSnapCentre,
          ready: db,
          measure: bb => {
            const wb = vb && ub ? MM(vb).boxes[bb] : void 0;
            return wb && (0, nb.i)(wb, hb.width, hb.height) ? wb : null
          },
          k: Wb,
          viewport: hb,
          boxes: Qb,
          pieces: Gb,
          selected: Vb,
          insets: qb,
          layout: xb,
          canMove: Ib,
          onSelect: gb,
          onMove: (bb, wb, Mb) => {
            Hw(), Lb(bb, wb, Mb)
          }
        });
      (0, Hb.useLayoutEffect)((() => {
        Jb.current = lw.busy
      }), [lw.busy]);
      const Lw = (0, Hb.useRef)([]),
        Iw = (0, Hb.useRef)(xb.hudElements);
      (0, Hb.useEffect)((() => {
        for (const Hb of Object.keys(xb.hudElements)) {
          var bb, wb, Mb, eb;
          (null !== (bb = null === (wb = xb.hudElements[Hb]) || void 0 === wb ? void 0 : wb[2]) && void 0 !== bb ? bb : 1) > (null !== (Mb = null === (eb = Iw.current[Hb]) || void 0 === eb ? void 0 : eb[2]) && void 0 !== Mb ? Mb : 1) && Ib(Hb) && !(0, ob.C)(Hb, xb.hudElements[Hb]) && Lw.current.push(...(0, fb.B)(Hb, ab, Ib))
        }
        Iw.current = xb.hudElements
      }), [xb.hudElements, Ib, ab]), (0, Hb.useEffect)((() => {
        if (!ub) return;
        const bb = (0, nb.B)(hb.width, hb.height, qb);
        for (const Mb of (0, fb.A)(Lw.current.splice(0), Qb, bb, Ib)) {
          const eb = Qb[Mb];
          if (!eb || lw.busy() || !(0, nb.i)(eb, hb.width, hb.height)) continue;
          const Hb = (0, nb.E)(eb, bb);
          if (0 !== Hb.x || 0 !== Hb.y) {
            var wb;
            const [bb, eb] = null !== (wb = xb.hudElements[Mb]) && void 0 !== wb ? wb : [0, 0];
            Lb(Mb, bb + Hb.x / hb.width, eb + Hb.y / hb.height)
          }
        }
      }), [Qb, ub]), (0, Hb.useImperativeHandle)(sb, (() => ({
        setScale: (bb, wb) => {
          gw((0, Kb.ob)(Mb, pb, bb, {
            scale: wb
          }))
        },
        setKeyStyle: bb => {
          kb({
            ...Mb,
            ...bb
          })
        },
        keepLocks: (bb, wb) => (Hw(), iw(bb, wb, pb, hb, bw, {
          canKeep: Vw
        })),
        setSafe: bb => {
          const wb = (0, Tb.s)(bb, hb.width, hb.height, Sw(null !== vb && void 0 !== vb ? vb : document));
          gw((0, Kb.ub)(Mb, pb, bb)), Yb.current && (Yb.current.style.inset = wb.map((bb => bb * Wb + "px")).join(" "))
        }
      })), [kb, gw, bw, Hw, Vw, vb, Mb, pb, hb, Wb]);
      const Ow = (0, Kb.v)(xb.hudElements),
        Uw = Vb ? Qb[Vb] : void 0,
        tw = Vb ? (0, fb.t)(Vb, Ob, mb, Eb) : "",
        Cw = (0, Xw.g)(hb.width, hb.height),
        Ew = Vb ? (0, yb.h)(Vb, Gb, xb, Cw) : [],
        Fw = new Set((0, ob.v)(xb.hudElements)),
        Bw = (0, ob.J)(xb, (0, ob.H)(tb.rowIcons)).state,
        mw = Ew.join(),
        zw = (0, Hb.useRef)(bb.onReady);
      zw.current = bb.onReady, (0, Hb.useEffect)((() => {
        var bb;
        null === (bb = zw.current) || void 0 === bb || bb.call(zw, db)
      }), [db]);
      const xw = (0, Hb.useRef)(bb.onMeasured);
      (0, Hb.useLayoutEffect)((() => {
        xw.current = bb.onMeasured
      }));
      const jw = (0, Hb.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        Kw = [wM(Gb), hb.width, hb.height, qb.top, qb.right, qb.bottom, qb.left, ub, Nb].join("|");
      (0, Hb.useEffect)((() => {
        const bb = mw ? mw.split(",") : [],
          wb = () => {
            var wb;
            null === (wb = xw.current) || void 0 === wb || wb.call(xw, Qb, bb, jw.current.caps)
          };
        let Mb;
        const eb = () => {
          const bb = ew.current;
          if (!vb || bb === jw.current.layout && Kw === jw.current.input) return !1;
          const Hb = pw.current + 250 - performance.now();
          return bb === jw.current.layout && (Hb > 0 || Sb()) ? (Mb = setTimeout((() => {
            eb() && wb()
          }), Math.max(Hb, 62.5)), !1) : (jw.current = {
            layout: bb,
            input: Kw,
            caps: {
              hotbar: vw(vb, hw),
              cluster: eM(vb, (0, nb.B)(hb.width, hb.height, qb), hw)
            }
          }, !0)
        };
        return eb(), wb(), () => {
          clearTimeout(Mb)
        }
      }), [Qb, mw, vb, hb, qb, Kw, Sb]);
      const rw = bb => ({
        left: bb.left * Wb,
        top: bb.top * Wb,
        width: (bb.right - bb.left) * Wb,
        height: (bb.bottom - bb.top) * Wb
      });
      return (0, zb.jsx)("div", {
        ref: jb,
        className: lb()("HudPreviewBox", {
          Fill: Bb
        }),
        style: {
          height: hb.height * Wb
        },
        children: (0, zb.jsxs)("div", {
          ref: rb,
          className: "HudPreviewStage",
          style: {
            width: hb.width * Wb,
            height: hb.height * Wb
          },
          children: [(0, zb.jsx)("iframe", {
            ref: Rb,
            className: "HudPreviewFrame",
            title: mb("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: hb.width,
              height: hb.height,
              transform: `scale(${Wb})`
            }
          }), vb && (0, ib.createPortal)((0, zb.jsx)(sw, {
            presence: tb,
            portraitPhone: Cw,
            hidden: Ow,
            actionButtons: Ob,
            joystickFixed: Ub,
            keysAbove: ab,
            auraBar: Xb,
            trayState: Bw,
            moved: Fw
          }), vb.body), (0, zb.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...lw.handlers,
            children: [(0, zb.jsx)("div", {
              ref: Yb,
              className: "HudPreviewSafeZone",
              style: {
                top: qb.top * Wb,
                right: qb.right * Wb,
                bottom: qb.bottom * Wb,
                left: qb.left * Wb
              }
            }), Gb.map(((bb, wb) => {
              let {
                id: Mb,
                box: eb
              } = bb;
              return (0, zb.jsx)("div", {
                className: "HudPreviewHandle",
                style: rw((0, nb.m)(eb, 40 / Wb))
              }, `${Mb}:${wb}`)
            })), xb.hudLocked.map((bb => {
              const wb = Qb[bb];
              return wb && (0, zb.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: wb.right * Wb,
                  top: wb.top * Wb
                },
                children: (0, zb.jsx)(Zb.b, {
                  name: "lock"
                })
              }, bb)
            })), (0, zb.jsx)("div", {
              ref: cb,
              className: "HudPreviewCentreLine",
              style: {
                left: hb.width / 2 * Wb
              }
            }), Vb && Uw && (0, zb.jsx)("div", {
              ref: Db,
              className: lb()("HudPreviewRing", {
                Fixed: !Ib(Vb),
                Overlap: Ew.length > 0
              }),
              style: rw(Uw),
              children: (0, zb.jsx)("span", {
                className: lb()("HudPreviewRingLabel", lM(Vb, tw, Qb, Wb, hb)),
                children: tw
              })
            })]
          })]
        })
      })
    }

    function OM(bb, wb) {
      (0, Hb.useEffect)((() => {
        var Mb;
        null === (Mb = bb.current) || void 0 === Mb || Mb.toggleAttribute("inert", wb)
      }), [bb, wb])
    }
    const UM = "hudFullScreen";

    function tM(bb) {
      let {
        onScale: wb,
        onHidden: Mb,
        onReset: pb,
        locked: Vb,
        lockable: gb,
        onLocked: lb,
        onClose: Ib,
        ...Ob
      } = bb;
      const {
        t: Ub
      } = (0, eb.C)(), tb = (0, Hb.useRef)(null);
      (0, ub.r)("popup", tb, Ib),
      function(bb) {
        const wb = (0, Hb.useRef)(bb);
        wb.current = bb, (0, Hb.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [UM]: !0
          }, "");
          let bb = !1;
          const Mb = () => {
            bb = !0, wb.current()
          };
          return window.addEventListener("popstate", Mb), () => {
            var wb;
            window.removeEventListener("popstate", Mb), !bb && null !== (wb = window.history.state) && void 0 !== wb && wb[UM] && window.history.back()
          }
        }), [])
      }(Ib), (0, Hb.useEffect)((() => {
        function bb(bb) {
          "Escape" === bb.key && (bb.stopPropagation(), Ib())
        }
        return window.addEventListener("keydown", bb, !0), () => {
          window.removeEventListener("keydown", bb, !0)
        }
      }), [Ib]);
      const {
        selected: Cb
      } = Ob, Eb = (0, Hb.useRef)(null), Fb = (0, Hb.useRef)(null), [Bb, sb] = (0, Hb.useState)(!1);
      OM(Fb, !Bb);
      const [mb, hb] = (0, Hb.useState)(null), [Xb, xb] = (0, Hb.useState)([]), [jb, Kb] = mw(), rb = (0, Hb.useRef)(Ob.selected);
      rb.current = Ob.selected;
      const Rb = (0, Hb.useRef)({}),
        Db = (0, Hb.useCallback)((() => {
          const bb = Eb.current;
          bb && hb(function(bb, wb, Mb) {
            var eb;
            const {
              innerWidth: Hb,
              innerHeight: pb
            } = window, Vb = bb.offsetWidth, gb = bb.offsetHeight, lb = Math.max(Jw()[0], 6), Lb = [];
            for (const Ub of [lb, .2 * pb, .5 * pb - gb / 2, .33 * pb])
              for (const bb of [.5, .3, .7]) Lb.push({
                left: Math.max(0, Math.min(Hb - Vb - 6, Math.max(6, Hb * bb - Vb / 2))),
                top: Ub
              });
            const Ib = Lb.map((bb => ({
                left: bb.left - 6,
                top: bb.top - 6,
                right: bb.left + Vb + 6,
                bottom: bb.top + gb + 6
              }))),
              Ob = bM(wb, Mb);
            return Lb[(0, nb.p)(Ib, Ob, {
              avoid: Mb && null !== (eb = wb[Mb]) && void 0 !== eb ? eb : null
            })]
          }(bb, Rb.current, rb.current))
        }), []),
        cb = (0, Hb.useCallback)(((bb, wb, Mb) => {
          xb(wb), Kb(Mb), Rb.current = bb, Db()
        }), [Db, Kb]);
      return (0, Hb.useLayoutEffect)(Db, [Ob.selected, Db]), (0, ib.createPortal)((0, zb.jsxs)("div", {
        ref: tb,
        className: "HudFullScreenEditor",
        children: [(0, zb.jsx)(IM, {
          ...Ob,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: cb,
          onReady: sb,
          lockable: gb
        }), (0, zb.jsxs)("div", {
          ref: Eb,
          className: "HudFullScreenToolbar",
          style: null === mb ? void 0 : {
            left: mb.left,
            top: mb.top,
            transform: "none"
          },
          children: [(0, zb.jsx)("div", {
            ref: Fb,
            className: "HudFullScreenControls",
            children: (0, zb.jsx)(zw, {
              selected: Cb,
              layout: Ob.layout.hudLayouts[Ob.orientation],
              actionButtons: Ob.actionButtons,
              keyNames: Ob.keyNames,
              overlaps: Xb,
              scaleCaps: jb,
              onScale: wb,
              onHidden: Mb,
              onReset: pb,
              locked: Vb,
              lockable: gb,
              onLocked: lb,
              joystickFixed: Ob.joystickFixed
            })
          }), (0, zb.jsx)(Lb.f, {
            className: "HudFullScreenDone",
            onClick: Ib,
            padDefaultFocus: !0,
            children: Ub("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    var CM = Mb(10258);
    const EM = [{
      colour: Mb(3562).c,
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

    function FM(bb) {
      let {
        colour: wb,
        previewApi: Mb
      } = bb;
      const {
        t: pb
      } = (0, eb.C)(), [Vb, gb] = (0, Hb.useState)(null), lb = (0, Hb.useRef)(null), Lb = (0, Hb.useRef)(), Ib = (0, Hb.useRef)(!1), Ob = (0, Hb.useCallback)((() => {
        clearTimeout(Lb.current), null !== lb.current && ((0, Kb.ab)(lb.current), lb.current = null)
      }), []);
      return (0, Hb.useEffect)((() => Ob), [Ob]), (0, zb.jsx)(CM.d, {
        label: pb("hudLayout:keyColour"),
        value: null !== Vb && void 0 !== Vb ? Vb : wb,
        swatches: EM.map((bb => ({
          colour: bb.colour,
          label: pb(`hudLayout:keyColour_${bb.name}`)
        }))),
        customLabel: pb("hudLayout:keyColourCustom"),
        onChange: bb => {
          var wb;
          lb.current = bb, gb(bb), null === (wb = Mb.current) || void 0 === wb || wb.setKeyStyle({
            hudKeyColour: bb
          }), clearTimeout(Lb.current), Lb.current = setTimeout((() => {
            Ob(), gb(null)
          }), 250), Ib.current || (Ib.current = !0, (0, xb.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: "colour"
          }))
        }
      })
    }
    const BM = bb => `${Math.round(100*bb)}%`;

    function sM(bb) {
      let {
        info: wb,
        tuple: Mb,
        props: Hb
      } = bb;
      const {
        t: pb
      } = (0, eb.C)();
      return (0, zb.jsx)(tb.j, {
        name: pb("hudLayout:size"),
        min: Kb.l,
        max: Kb.i,
        step: hw,
        initValue: Mb[2],
        disabled: Hb.locked.has(wb.id),
        selectableMax: Hb.scaleCaps[wb.id],
        cappedNote: pb("hudLayout:sizeCapped"),
        format: BM,
        onChange: bb => {
          Hb.onScalePreview(wb.id, bb)
        },
        onChangeComplete: bb => {
          Hb.onScale(wb.id, bb)
        }
      })
    }

    function mM(bb) {
      const {
        t: wb
      } = (0, eb.C)(), {
        present: Mb,
        elements: pb,
        selected: Vb,
        onSelect: gb,
        onHidden: Lb,
        onReset: Ib,
        note: Ob,
        actionButtons: Ub,
        keyNames: tb,
        sizeBesidePreview: Cb,
        locked: Eb,
        lockable: Fb,
        onLocked: Bb
      } = bb, {
        rowIconsOpen: sb,
        onRowIconsOpen: mb
      } = bb, hb = (0, Hb.useRef)(null), Xb = null !== Vb && (sb || !(0, Kb.T)(Vb));
      return (0, Hb.useEffect)((() => {
        var bb;
        const wb = Vb ? null === (bb = hb.current) || void 0 === bb ? void 0 : bb.querySelector(`[data-hud-row="${Vb}"]`) : null;
        if (!wb) return;
        const Mb = wb.closest(".SettingsMenuRight"),
          eb = performance.now();
        let Hb = null;
        const pb = () => {
            clearInterval(lb), null === Mb || void 0 === Mb || Mb.removeEventListener("scroll", gb)
          },
          gb = () => {
            Pw() || pb()
          },
          lb = setInterval((() => {
            const bb = performance.now();
            bb - eb > 1500 ? pb() : Pw() ? Hb = null : null === Hb ? Hb = bb : bb - Hb >= 150 && (pb(), function(bb) {
              var wb;
              const Mb = bb.closest(".SettingsMenuRight"),
                eb = null === (wb = bb.closest(".HudLayoutSettings")) || void 0 === wb ? void 0 : wb.querySelector(".HudLayoutPreviewBox");
              if (!Mb || !eb) return;
              const Hb = eb.getBoundingClientRect().bottom + 8,
                pb = Mb.getBoundingClientRect().bottom - 8,
                Vb = bb.getBoundingClientRect();
              Vb.top < Hb ? Mb.scrollBy({
                top: Vb.top - Hb,
                behavior: "smooth"
              }) : Vb.bottom > pb && Mb.scrollBy({
                top: Math.min(Vb.bottom - pb, Vb.top - Hb),
                behavior: "smooth"
              })
            }(wb))
          }), 50);
        return null === Mb || void 0 === Mb || Mb.addEventListener("scroll", gb, {
          passive: !0
        }), pb
      }), [Vb, Xb]), (0, zb.jsx)("div", {
        ref: hb,
        className: "SettingBoxGroup HudElementList",
        children: fb.j.filter((bb => Mb.has(bb.id) && (sb || !(0, Kb.T)(bb.id)))).map((Mb => {
          const eb = (0, Kb.F)(pb, Mb.id),
            Hb = (0, Kb.x)(pb, Mb.id),
            hb = Mb.id === Vb,
            Xb = Mb.scale && !Cb,
            xb = Ob(Mb.id, hb);
          return (0, zb.jsxs)("div", {
            "data-hud-row": Mb.id,
            className: lb()("SettingBox HudElementRow", {
              Open: hb,
              Hidden: Hb,
              Child: void 0 !== Mb.parent,
              Grandchild: (0, fb.o)(Mb.id).length > 1
            }),
            children: [(0, zb.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, zb.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": Xb ? hb : void 0,
                onClick: () => {
                  gb(Mb.id)
                },
                children: (0, zb.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [(0, fb.t)(Mb.id, Ub, wb, tb), Mb.scale && 1 !== eb[2] && !(hb && Xb) && (0, zb.jsxs)(zb.Fragment, {
                    children: [" ", (0, zb.jsx)("span", {
                      className: "HudElementRowSize",
                      children: BM(eb[2])
                    })]
                  }), Xb && (0, zb.jsxs)(zb.Fragment, {
                    children: [" ", (0, zb.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, zb.jsx)(Sb, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Mb.id,
                actionButtons: Ub,
                keyNames: tb,
                locked: Eb.has(Mb.id),
                lockable: Fb(Mb.id),
                onLocked: Bb
              }), "menu" === Mb.id && (0, zb.jsx)(Nb, {
                className: "HudElementRowIcon",
                open: sb,
                name: (0, fb.t)(Mb.id, Ub, wb, tb),
                onToggle: mb
              }), "menu" !== Mb.id && (0, zb.jsx)(Wb, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Mb.id,
                elements: pb,
                actionButtons: Ub,
                keyNames: tb,
                onHidden: Lb
              }), (0, zb.jsx)(Jb, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: Eb.has(Mb.id),
                id: Mb.id,
                elements: pb,
                actionButtons: Ub,
                keyNames: tb,
                onReset: Ib
              })]
            }), hb && Xb && (0, zb.jsx)(sM, {
              info: Mb,
              tuple: eb,
              props: bb
            }), xb && (0, zb.jsx)("div", {
              className: "HudElementNote",
              children: xb
            })]
          }, Mb.id)
        }))
      })
    }

    function hM(bb) {
      let {
        preview: wb,
        quick: Mb,
        onFullScreen: pb,
        resting: Vb,
        onSidePanel: gb
      } = bb;
      const {
        t: lb
      } = (0, eb.C)(), Ib = LM(), Ob = (0, Hb.useRef)(null), {
        width: Ub
      } = (0, Pb.b)(Ob), tb = Math.floor(Ib.width * Math.min(1, wb.maxHeight / Ib.height)), Cb = Ub - tb - 12, Eb = Cb >= 130, Fb = Ub > 0;
      (0, Hb.useEffect)((() => {
        Fb && gb(Eb)
      }), [Fb, Eb, gb]);
      const Bb = (0, nb.A)(Eb ? tb : Ub, Ib.width, Ib.height, wb.maxHeight),
        sb = Vb ? (0, zb.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: Ib.height * Bb
          }
        }) : (0, zb.jsx)(IM, {
          ...wb
        }),
        mb = bb => (0, zb.jsxs)(Lb.Y, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: lb("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: pb,
          children: [(0, zb.jsx)(Zb.b, {
            name: "expand"
          }), bb && (0, zb.jsx)("span", {
            children: lb("hudLayout:fullScreen")
          })]
        });
      return (0, zb.jsxs)("div", {
        ref: Ob,
        className: "SettingBox HudLayoutPreviewBox",
        children: [Ub > 0 && Eb && (0, zb.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, zb.jsx)("div", {
            style: {
              width: tb
            },
            children: sb
          }), (0, zb.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, zb.jsx)(zw, {
              selected: wb.selected,
              ...Mb,
              joystickFixed: wb.joystickFixed,
              extra: mb(!wb.selected || Cb >= 278)
            })
          })]
        }), Ub > 0 && !Eb && (0, zb.jsxs)(zb.Fragment, {
          children: [sb, (0, zb.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: mb(!1)
          })]
        })]
      })
    }
    var zM = Mb(5258),
      XM = Mb(3547),
      xM = Mb(3489);
    const jM = bb => {
      const wb = Tb.m * ("sides" === bb ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(wb / 2))
    };

    function KM(bb, wb, Mb) {
      const [eb, Hb, pb, Vb] = bb;
      return "sides" === wb ? [eb, Mb, pb, Mb] : [Mb, Hb, Mb, Vb]
    }
    const rM = [null, null, null, null],
      RM = bb => `${bb}px`;

    function DM(bb) {
      let {
        safe: wb,
        onPreview: Mb,
        onCommit: pb
      } = bb;
      const {
        t: Vb
      } = (0, eb.C)(), gb = (0, Tb.s)(null !== wb && void 0 !== wb ? wb : rM, window.innerWidth, window.innerHeight, Sw(document).map(Math.round)), lb = (0, Hb.useRef)(null !== wb && void 0 !== wb ? wb : rM);
      lb.current = null !== wb && void 0 !== wb ? wb : rM;
      const Ib = bb => {
        const wb = Math.min(jM(bb), "sides" === bb ? Math.max(gb[1], gb[3]) : Math.max(gb[0], gb[2]));
        return (0, zb.jsx)(tb.j, {
          name: Vb("sides" === bb ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: jM(bb),
          step: 2,
          initValue: wb,
          format: RM,
          onChange: wb => {
            Mb(KM(lb.current, bb, wb))
          },
          onChangeComplete: eb => {
            if (eb === wb) return void Mb(lb.current);
            const Hb = KM(lb.current, bb, eb);
            lb.current = Hb, pb(Hb), (0, xb.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: bb
            })
          }
        })
      };
      return (0, zb.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, zb.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, zb.jsx)("div", {
            children: Vb("hudLayout:safeZone")
          }), (0, zb.jsx)(Lb.Y, {
            active: null === wb,
            pressed: null === wb,
            onClick: () => {
              pb(null)
            },
            children: Vb("hudLayout:safeZoneAuto")
          })]
        }), Ib("sides"), Ib("ends")]
      })
    }
    const cM = {
      cluster: "hudLayout:clusterNote",
      inventory: "hudLayout:inventoryNote",
      menu: "hudLayout:menuNote",
      arrows: "hudLayout:arrowsNote",
      sprint: "hudLayout:sprintNote",
      effects: "hudLayout:effectsNote",
      zoom: "hudLayout:zoomNote",
      drop: "hudLayout:dropNote"
    };

    function YM() {
      const {
        t: bb
      } = (0, eb.C)(), wb = (0, Kb.lb)(), {
        clientEscMenuOptions: Mb
      } = (0, Ib.o)(["clientEscMenuOptions"]), pb = (0, rb.j)(), Vb = wb.hudLayouts[pb], [gb, lb] = (0, Hb.useState)(null), {
        rowIconsOpen: Ob,
        onRowIconsOpen: Ub,
        select: Cb
      } = function(bb, wb) {
        const [Mb, eb] = (0, Hb.useState)((() => Kb.H.some((wb => void 0 !== bb.hudElements[wb] || bb.hudLocked.includes(wb))))), pb = (0, Hb.useCallback)((bb => {
          wb(bb), (0, Kb.T)(bb) && eb(!0)
        }), [wb]);
        return {
          rowIconsOpen: Mb,
          onRowIconsOpen: eb,
          select: pb
        }
      }(Vb, lb), [Eb, Fb] = (0, Hb.useState)([]), [Bb, sb] = (0, Hb.useState)(null), [mb, hb] = mw(), Xb = (0, Hb.useCallback)(((bb, wb, Mb) => {
        Fb(wb), hb(Mb);
        const eb = Object.keys(bb);
        sb((bb => (null === bb || void 0 === bb ? void 0 : bb.size) === eb.length && eb.every((wb => bb.has(wb))) ? bb : new Set(eb)))
      }), [hb]), {
        gameState: jb
      } = (0, Ib.o)(["gameState"]), Rb = (0, XM.h)(), cb = (0, xM.n)(), [Yb] = (0, Hb.useState)((() => {
        var bb, wb, Mb, eb;
        return "inGame" === jb ? (0, ww.D)(document, Rb, {
          rightOfCamera: null !== (bb = null === (wb = cb.rightOfCamera) || void 0 === wb ? void 0 : wb.icon) && void 0 !== bb ? bb : null,
          leftEnd: null !== (Mb = null === (eb = cb.leftEnd) || void 0 === eb ? void 0 : eb.icon) && void 0 !== Mb ? Mb : null
        }) : ww.e
      })), Zb = (0, Hb.useRef)(null), Ab = (0, Hb.useRef)(null), Wb = function(bb) {
        const [wb, Mb] = (0, Hb.useState)((() => .4 * window.innerHeight));
        return (0, Hb.useLayoutEffect)((() => {
          var wb;
          const eb = null === (wb = bb.current) || void 0 === wb ? void 0 : wb.closest(".SettingsMenuRight");
          if (!eb) return;
          const Hb = () => {
            const bb = eb.clientHeight < ZM ? .4 : .5;
            Mb(Math.max(80, eb.clientHeight * bb - 24))
          };
          Hb();
          const pb = new ResizeObserver(Hb);
          return pb.observe(eb), () => {
            pb.disconnect()
          }
        }), [bb]), wb
      }(Ab), Jb = (0, zM.s)(Mb.joystickMode), Sb = Mb.touchActionButtons, Nb = (0, Hb.useMemo)((() => (0, ww.A)(Yb, Sb)), [Yb, Sb]), vb = (0, Hb.useMemo)((() => new Set((0, ww.w)(Yb, Sb).map((bb => ww.g[bb])))), [Yb, Sb]);
      (0, Hb.useEffect)((() => {
        (0, xb.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [Qb, Gb] = (0, Hb.useState)(!1), [ib, ub] = (0, Hb.useState)(!1), db = (0, Hb.useRef)(null);
      OM(db, !ib);
      const [Pb, nb] = (0, Hb.useState)(!1), yb = (0, Hb.useCallback)((() => {
        nb(!1)
      }), []), Tb = (0, Hb.useMemo)((() => new Set(Vb.hudLocked)), [Vb.hudLocked]), kb = bb => {
        var wb, Mb;
        const eb = (0, Kb.s)(),
          Hb = bb(eb);
        (0, Kb.ib)(null !== (wb = null === (Mb = Zb.current) || void 0 === Mb ? void 0 : Mb.keepLocks(eb, Hb)) && void 0 !== wb ? wb : Hb)
      }, bw = (bb, wb) => {
        kb((Mb => (0, Kb.ob)(Mb, pb, bb, wb)))
      }, Mw = (bb, wb, Mb) => {
        bw(bb, {
          dx: wb,
          dy: Mb
        }), (0, xb.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${bb}`
        })
      }, ew = (bb, wb) => {
        kb((Mb => (0, Kb.sb)(Mb, pb, bb, wb)))
      }, Hw = bb => {
        const wb = fb.i[bb];
        return (wb.move || wb.scale) && ("joystick" !== bb || Jb) && !(0, ob.C)(bb, Vb.hudElements[bb])
      }, pw = bb => fb.i[bb].move && ("joystick" !== bb || Jb) && !Tb.has(bb), Vw = new Set(fb.j.map((bb => bb.id)).filter((bb => {
        const wb = (0, Kb.T)(bb) && !Yb.rowIcons.includes(bb) || Kb.y[bb].hiddenByDefault && !(0, ww.u)(Yb, bb);
        return null === Bb || Bb.has(bb) || (0, Kb.x)(Vb.hudElements, bb) && !wb
      }))), gw = {
        present: Vw,
        actionButtons: Sb,
        keyNames: Nb,
        scaleCaps: mb,
        sizeBesidePreview: Qb,
        elements: Vb.hudElements,
        selected: gb,
        onSelect: Cb,
        rowIconsOpen: Ob,
        onRowIconsOpen: Ub,
        onScalePreview: (bb, wb) => {
          var Mb;
          null === (Mb = Zb.current) || void 0 === Mb || Mb.setScale(bb, wb)
        },
        onScale: (bb, wb) => {
          bw(bb, {
            scale: wb
          }), (0, xb.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${bb}`
          })
        },
        onHidden: (bb, wb) => {
          bw(bb, {
            hidden: wb
          }), (0, xb.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${wb?"hide":"show"}:${bb}`
          })
        },
        onReset: bb => {
          bw(bb, Kb.d)
        },
        locked: Tb,
        lockable: Hw,
        onLocked: ew,
        note: (wb, Mb) => {
          const eb = Mb && Eb.length > 0 ? bb("hudLayout:overlapsNote", {
            names: (0, fb.p)(Eb, Sb, bb, Nb)
          }) : null;
          if (Mb && qb(wb, Jb)) return (0, zb.jsxs)(zb.Fragment, {
            children: [eb && (0, zb.jsx)("span", {
              children: eb
            }), (0, zb.jsx)("span", {
              children: bb("hudLayout:floatingJoystickNote")
            }), !Qb && (0, zb.jsx)(ab, {})]
          });
          if (eb) return eb;
          const Hb = Mb && Tb.has(wb) ? bb("hudLayout:lockedNote") : null,
            pb = Mb && vb.has(wb) ? bb("hudLayout:contextSlotNote") : null;
          if (Hb || pb) return (0, zb.jsxs)(zb.Fragment, {
            children: [Hb && (0, zb.jsx)("span", {
              children: Hb
            }), pb && (0, zb.jsx)("span", {
              children: pb
            })]
          });
          if (Mb && (0, ob.C)(wb, Vb.hudElements[wb]) && pw(wb)) return bb("hudLayout:rowIconNote");
          const gb = cM[wb];
          return Mb && gb ? bb(gb) : (0, fb.w)(wb) && (0, Kb.x)(Vb.hudElements, wb) ? bb("hudLayout:inventoryHiddenNote", {
            name: (0, fb.t)(wb, Sb, bb, Nb)
          }) : null
        }
      };
      return (0, zb.jsxs)("div", {
        ref: Ab,
        className: "HudLayoutSettings",
        children: [(0, zb.jsxs)("div", {
          ref: db,
          className: "HudLayoutBody",
          children: [(0, zb.jsx)("div", {
            className: "HudLayoutOrientation",
            children: bb("landscape" === pb ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, zb.jsx)(hM, {
            preview: {
              layout: wb,
              orientation: pb,
              selected: gb,
              onSelect: Cb,
              onMove: Mw,
              canMove: pw,
              actionButtons: Sb,
              joystickFixed: Jb,
              presence: Yb,
              keyNames: Nb,
              maxHeight: Wb,
              apiRef: Zb,
              onMeasured: Xb,
              onReady: ub,
              lockable: Hw
            },
            quick: {
              layout: Vb,
              actionButtons: Sb,
              keyNames: Nb,
              scaleCaps: mb,
              overlaps: Eb,
              onScale: gw.onScale,
              onHidden: gw.onHidden,
              onReset: gw.onReset,
              locked: Tb,
              lockable: Hw,
              onLocked: ew
            },
            onFullScreen: () => {
              nb(!0)
            },
            resting: Pb,
            onSidePanel: Gb
          }), Pb && (0, zb.jsx)(tM, {
            layout: wb,
            orientation: pb,
            selected: gb,
            onSelect: Cb,
            onMove: Mw,
            canMove: pw,
            actionButtons: Sb,
            joystickFixed: Jb,
            presence: Yb,
            keyNames: Nb,
            onScale: gw.onScale,
            onHidden: gw.onHidden,
            onReset: gw.onReset,
            locked: Tb,
            lockable: Hw,
            onLocked: ew,
            apiRef: Zb,
            onClose: yb
          }), (0, zb.jsx)(DM, {
            safe: Vb.hudSafe,
            onCommit: bb => {
              kb((wb => (0, Kb.ub)(wb, pb, bb)))
            },
            onPreview: bb => {
              var wb;
              null === (wb = Zb.current) || void 0 === wb || wb.setSafe(bb)
            }
          }), (0, zb.jsx)(tb.d, {
            label: bb("hudLayout:snapCentre"),
            checked: wb.hudSnapCentre,
            onClick: bb => {
              (0, Kb.hb)(bb)
            },
            circleInfoText: bb("hudLayout:snapCentreInfo")
          }), (0, zb.jsx)(mM, {
            ...gw
          }), (0, zb.jsx)(tb.f, {
            label: bb("hudLayout:shape"),
            options: Kb.K.map((wb => ({
              value: wb,
              label: bb(`hudLayout:shape_${wb}`)
            }))),
            value: wb.hudShape,
            onChange: bb => {
              kb((wb => ({
                ...wb,
                hudShape: bb
              }))), (0, xb.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: bb
              })
            }
          }), (0, zb.jsx)(tb.j, {
            name: bb("hudLayout:opacity"),
            min: Kb.e,
            max: 1,
            step: .05,
            initValue: wb.hudKeyOpacity,
            format: bb => `${Math.round(100*bb)}%`,
            circleInfoText: bb("hudLayout:opacityInfo"),
            onChange: bb => {
              var wb;
              null === (wb = Zb.current) || void 0 === wb || wb.setKeyStyle({
                hudKeyOpacity: bb
              })
            },
            onChangeComplete: bb => {
              (0, Kb.db)(bb), (0, xb.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          }), (0, zb.jsx)(FM, {
            colour: wb.hudKeyColour,
            previewApi: Zb
          })]
        }), (0, zb.jsx)(Lb.Q, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const bb = Db.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await bb.getResult() && (0, Kb.W)()
            }()
          },
          children: bb("hudLayout:resetAll")
        })]
      })
    }
    const ZM = 350;
    const fM = [function() {
      const {
        t: bb
      } = (0, eb.C)(), [wb, Mb] = (0, Hb.useState)(!1), pb = (0, Hb.useRef)(null);
      return (0, Hb.useEffect)((() => {
        var bb;
        wb && (null === (bb = pb.current) || void 0 === bb || bb.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [wb]), (0, zb.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, zb.jsx)(cb.d, {
          ref: pb,
          icon: "arrows-up-down-left-right",
          title: bb("hudLayout:title"),
          sub: bb("hudLayout:entrySub"),
          expanded: wb,
          onClick: () => {
            Mb(!wb)
          }
        }), wb && (0, zb.jsx)(YM, {})]
      })
    }, function() {
      const {
        t: bb
      } = (0, eb.C)(), {
        gameState: wb
      } = (0, Ib.o)(["gameState"]), Mb = (0, jb.o)((0, Cb.k)("runningSpeed"), (0, Cb.k)("walkingSpeed")), Hb = !(0, Kb.x)((0, rb.f)().hudElements, "sprint");
      return "inGame" !== wb || Mb ? (0, zb.jsx)(tb.d, {
        label: bb("touchSettings:sprintKey"),
        checked: Hb,
        onClick: bb => {
          (0, Kb.Z)("sprint", !bb), (0, xb.reportAnalyticsClick)({
            id: "touch_settings.sprint_key",
            value: bb ? "show" : "hide"
          })
        },
        circleInfoText: bb("touchSettings:sprintKeyInfo")
      }) : null
    }, function() {
      const {
        t: bb
      } = (0, eb.C)(), {
        joystickMode: wb,
        touchSpeedCurve: Mb,
        autorun: Hb,
        jumpLock: pb,
        touchEdgeGuard: Vb
      } = (0, Ib.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, zb.jsxs)(zb.Fragment, {
        children: [(0, zb.jsx)(tb.f, {
          label: bb("settingsMenu:joystick"),
          options: hb.Bb.map((wb => ({
            value: wb,
            label: bb(Xb[wb])
          }))),
          value: wb,
          onChange: bb => {
            Ib.c.setClientEscMenuOptions({
              joystickMode: bb
            })
          },
          circleInfoText: bb("settingsMenu:joystickInfo")
        }), (0, zb.jsx)(tb.d, {
          label: bb("settingsMenu:preciseWalking"),
          checked: Mb,
          onClick: bb => {
            Ib.c.setClientEscMenuOptions({
              touchSpeedCurve: bb
            })
          },
          circleInfoText: bb("settingsMenu:preciseWalkingInfo")
        }), (0, zb.jsx)(tb.d, {
          label: bb("settingsMenu:autoRun"),
          checked: Hb,
          onClick: bb => {
            Ib.c.setClientEscMenuOptions({
              autorun: bb
            })
          },
          circleInfoText: bb("settingsMenu:autoRunInfo")
        }), (0, zb.jsx)(tb.d, {
          label: bb("settingsMenu:jumpLock"),
          checked: pb,
          onClick: bb => {
            Ib.c.setClientEscMenuOptions({
              jumpLock: bb
            })
          },
          circleInfoText: bb("settingsMenu:jumpLockInfo")
        }), (0, zb.jsx)(tb.d, {
          label: bb("touchSettings:stopAtEdges"),
          checked: Vb,
          onClick: bb => {
            Ib.c.setClientEscMenuOptions({
              touchEdgeGuard: bb
            })
          },
          circleInfoText: bb("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, zb.jsx)(mb.c, {})
    }, function() {
      const {
        t: bb
      } = (0, eb.C)(), {
        clientEscMenuOptions: wb
      } = (0, Ib.o)(["clientEscMenuOptions"]);
      return (0, Rb.b)() ? (0, zb.jsx)(tb.d, {
        label: bb("settingsMenu:vibration"),
        checked: wb.vibration,
        onClick: bb => {
          Ib.c.setClientEscMenuOptions({
            vibration: bb
          })
        },
        circleInfoText: bb("settingsMenu:vibrationInfo")
      }) : null
    }];

    function AM() {
      return (0, zb.jsx)(zb.Fragment, {
        children: fM.map(((bb, wb) => (0, zb.jsx)(bb, {}, wb)))
      })
    }
    var WM = Mb(10123),
      JM = Mb(10115),
      SM = Mb(1876);

    function NM() {
      const {
        t: bb
      } = (0, eb.C)(), wb = (0, WM.j)(), Mb = JM.e.filter((bb => void 0 !== wb[bb])).length;
      return (0, zb.jsx)("div", {
        className: "ControlsContainer QuickChatPhrasesSection",
        children: (0, zb.jsxs)(qM, {
          title: bb("quickChat:settingsTitle"),
          defaultOpen: !1,
          children: [JM.e.map(((bb, Mb) => (0, zb.jsx)(vM, {
            phraseKey: bb,
            number: Mb + 1,
            custom: wb[bb]
          }, bb))), Mb > 1 && (0, zb.jsx)(Lb.Q, {
            className: "QuickChatPhrasesResetAll",
            onClick: WM.d,
            children: bb("quickChat:resetAll")
          })]
        })
      })
    }

    function vM(bb) {
      let {
        phraseKey: wb,
        number: Mb,
        custom: pb
      } = bb;
      const {
        t: Vb
      } = (0, eb.C)(), gb = Vb(wb), lb = null !== pb && void 0 !== pb ? pb : gb, Ib = (0, Hb.useRef)(null);
      return (0, Hb.useEffect)((() => {
        const bb = Ib.current;
        return () => {
          var Mb;
          bb && (null !== (Mb = (0, WM.b)()[wb]) && void 0 !== Mb ? Mb : gb) === lb && (0, WM.i)(wb, bb.value, gb)
        }
      }), [wb, gb, lb]), (0, zb.jsxs)("div", {
        className: "ControlRow QuickChatPhraseRow",
        children: [(0, zb.jsx)(SM.d, {
          domRef: Ib,
          className: "QuickChatPhraseInput",
          defaultValue: lb,
          maxLength: bw.qd,
          ariaLabel: Vb("quickChat:phraseNumber", {
            number: Mb
          }),
          onEnter: () => {
            var bb;
            null === (bb = Ib.current) || void 0 === bb || bb.blur()
          },
          onBlur: () => {
            var bb;
            const Mb = Ib.current;
            Mb && ((0, WM.i)(wb, Mb.value, gb), Mb.value = null !== (bb = (0, WM.b)()[wb]) && void 0 !== bb ? bb : gb)
          }
        }, lb), (0, zb.jsx)(Lb.Y, {
          className: "QuickChatPhraseReset",
          disabled: void 0 === pb,
          ariaLabel: Vb("quickChat:resetPhrase", {
            number: Mb
          }),
          onClick: () => {
            (0, WM.g)(wb)
          },
          children: (0, zb.jsx)(Zb.b, {
            name: "rotate-left"
          })
        })]
      })
    }
    var QM = Mb(5198);

    function GM() {
      const {
        t: bb
      } = (0, eb.C)(), {
        isTouchScreen: wb,
        clientEscMenuOptions: Mb,
        gameState: Vb
      } = (0, Ib.o)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), gb = (0, Cb.k)("ezBridging"), lb = (0, Cb.k)("ezTowering"), Fb = "inGame" !== Vb || !0 === gb, Bb = (0, Eb.f)(), mb = null !== Bb && ("inGame" !== Vb || !0 === lb), [, hb] = (0, Hb.useReducer)((bb => bb + 1), 0), Xb = (0, sb.e)(), [xb, jb] = (0, Hb.useState)(QM.g);
      return (0, zb.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Xb && (0, zb.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, zb.jsx)("div", {
            children: bb("controller:settingsControlsNote")
          }), (0, zb.jsx)(Lb.Y, {
            onClick: () => {
              Ib.c.set({
                openSettingsCategory: "controller"
              })
            },
            children: bb("controller:settingsOpenController")
          })]
        }), (0, Ob.isTouchscreen)() && !(0, Ob.isMobile)() ? (0, zb.jsx)(zb.Fragment, {
          children: (0, zb.jsx)(tb.d, {
            label: bb("settingsMenu:useTouchControls"),
            checked: xb,
            onClick: bb => {
              (0, QM.c)(bb), jb(bb)
            }
          })
        }) : null, wb && (0, zb.jsx)(AM, {}), (wb || Xb) && (0, zb.jsx)(NM, {}), Fb && (0, zb.jsx)(tb.d, {
          label: bb("settingsMenu:ezBridging"),
          checked: Mb.ezBridging,
          onClick: bb => {
            Ib.c.setClientEscMenuOptions({
              ezBridging: bb
            })
          },
          circleInfoText: bb("settingsMenu:ezBridgingInfo")
        }), mb && (0, zb.jsx)(tb.d, {
          label: bb("settingsMenu:ezTowering"),
          checked: Mb.ezTowering,
          onClick: bb => {
            Ib.c.setClientEscMenuOptions({
              ezTowering: bb
            })
          },
          circleInfoText: bb("jump" === Bb ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, zb.jsx)(tb.d, {
          label: bb("settingsMenu:crouchToggle"),
          checked: Mb.crouchIsToggle,
          onClick: bb => {
            Ib.c.setClientEscMenuOptions({
              crouchIsToggle: bb
            })
          },
          circleInfoText: bb("settingsMenu:crouchToggleInfo")
        }), (0, zb.jsx)(tb.d, {
          label: bb("settingsMenu:hideUiToggle"),
          checked: Mb.hideUiIsToggle,
          onClick: bb => {
            Ib.c.setClientEscMenuOptions({
              hideUiIsToggle: bb
            })
          },
          circleInfoText: bb("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, Ub.e)() && (0, zb.jsx)(tb.j, {
          name: bb("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: Mb.touchscreenSensitivity,
          onChange: bb => {
            Ib.c.setClientEscMenuOptions({
              touchscreenSensitivity: bb
            })
          }
        }), !(0, Ob.isMobile)() && (0, zb.jsx)(tb.j, {
          name: bb("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: Mb.mouseSensitivity,
          onChange: bb => {
            Ib.c.setClientEscMenuOptions({
              mouseSensitivity: bb
            })
          }
        }), !(0, Ob.isMobile)() && (0, zb.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, zb.jsx)("div", {
            className: "SliderText",
            children: bb("settingsMenu:keyBindings")
          }), pb.f.map((wb => (0, zb.jsx)(qM, {
            title: bb(wb.name.translationKey, wb.name.params),
            defaultOpen: pb.i.has(wb.id),
            children: wb.actions.map((bb => (0, zb.jsx)(aM, {
              noaAction: bb,
              forceUpdate: hb,
              clashesWith: wb.clashesWith,
              showPadGlyph: Xb
            }, bb)))
          }, wb.name.translationKey))), (0, zb.jsx)(Lb.Q, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, pb.w)(), hb()
            },
            children: bb("controls:resetBindings")
          })]
        })]
      })
    }

    function qM(bb) {
      let {
        title: wb,
        defaultOpen: Mb,
        children: eb
      } = bb;
      const [pb, Vb] = (0, Hb.useState)(Mb);
      return (0, zb.jsxs)("div", {
        className: lb()("ControlsSection", {
          Collapsed: !pb
        }),
        children: [(0, zb.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Vb(!pb)
          },
          children: [(0, zb.jsx)("div", {
            className: "ControlsSectionTitle",
            children: wb
          }), (0, zb.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), pb && (0, zb.jsx)("div", {
          className: "ControlsSectionRows",
          children: eb
        })]
      })
    }

    function aM(bb) {
      let {
        noaAction: wb,
        forceUpdate: Mb,
        clashesWith: gb,
        showPadGlyph: Ib
      } = bb;
      const {
        t: Ob
      } = (0, eb.C)(), Ub = (0, Bb.d)(wb), [tb, Cb] = (0, Hb.useState)(!1), [Eb, sb] = (0, Hb.useState)("controls:clickToEnterNewBinding"), [mb, hb] = (0, Hb.useState)(null), [Xb, xb] = (0, Hb.useState)(null), jb = (0, Hb.useRef)(null);
      (0, Hb.useEffect)((() => {
        tb && jb.current && jb.current.focus()
      }), [tb]);
      const Kb = pb.p[wb].filter((bb => Vb.f[bb]));
      let rb = null;
      const Rb = [],
        Db = gb.flatMap((bb => {
          var wb, Mb;
          return null !== (wb = null === (Mb = pb.f.find((wb => wb.id === bb))) || void 0 === Mb ? void 0 : Mb.actions) && void 0 !== wb ? wb : []
        }));
      for (const eb of Db) {
        if (eb === wb) continue;
        const bb = pb.p[eb];
        for (const wb of bb) Kb.includes(wb) && Rb.push(Ob(pb.q[eb].translationKey, pb.q[eb].params))
      }
      Rb.length > 0 && (rb = Ob("controls:sharedBindingsWarning") + " ", rb += Rb.join(", "));
      const cb = () => {
          Cb(!1), hb(null), sb("controls:clickToEnterNewBinding"), xb(null)
        },
        Yb = () => "BindingInput_" + wb;
      return (0, zb.jsxs)("div", {
        className: lb()("ControlRow", {
          WarningBorder: null !== rb
        }),
        children: [(0, zb.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, zb.jsxs)("div", {
            className: "ControlName",
            children: [Ob(pb.q[wb].translationKey, pb.q[wb].params), Ib && Ub && (0, zb.jsx)(Fb.c, {
              glyph: Ub,
              className: "ControlPadGlyph"
            })]
          }), (0, zb.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, zb.jsxs)("div", {
              className: "ControlBindingsList",
              children: [Kb.map((bb => (0, zb.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, zb.jsx)("div", {
                  children: (0, pb.m)(bb)
                }), (0, zb.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const eb = (0, pb.s)(wb, bb);
                    eb.isError() ? xb(eb.asError().message) : xb(null), Mb()
                  },
                  children: "\xd7"
                })]
              }, bb))), !tb && (0, zb.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  Cb(!0), xb(null)
                },
                children: (0, zb.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), tb && (0, zb.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, zb.jsxs)("div", {
                className: "InputContainer",
                children: [(0, zb.jsx)("div", {
                  className: "InputOverlay",
                  children: mb ? (0, pb.m)(mb) : (0, zb.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Ob(Eb)
                  })
                }), (0, zb.jsx)("input", {
                  ref: jb,
                  id: Yb(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: bb => {
                    if ("Escape" === bb.code) return cb(), bb.preventDefault(), void bb.stopPropagation();
                    const wb = bb.code;
                    Vb.b.includes(wb) ? (xb(null), hb(wb)) : (xb("controls:keyIsReserved"), hb(null)), bb.preventDefault(), bb.stopPropagation()
                  },
                  onMouseDown: bb => {
                    const wb = "Mouse" + (bb.button + 1);
                    document.activeElement && document.activeElement.id === Yb() ? Vb.b.includes(wb) ? (xb(null), hb(wb)) : (xb("controls:keyIsReserved"), hb(null)) : sb("controls:enterNewBinding"), bb.stopPropagation()
                  },
                  onBlur: () => {
                    sb("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, zb.jsx)(Lb.f, {
                onPointerDown: bb => {
                  bb.preventDefault()
                },
                onClick: () => {
                  (0, pb.b)(wb, mb), Mb(), cb()
                },
                className: "ControlBindingAddButton",
                disabled: null === mb,
                children: Ob("general:add")
              }), (0, zb.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  cb()
                },
                children: "\xd7"
              })]
            }), Xb && (0, zb.jsx)("div", {
              className: "ControlBindingError",
              children: Ob(Xb)
            })]
          })]
        }), rb && (0, zb.jsx)("div", {
          className: "ControlRowWarning",
          children: rb
        })]
      })
    }
  },
  10218: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb
    });
    var eb = Mb(64),
      Hb = Mb(1475),
      pb = Mb(1364);
    const Vb = (0, eb.forwardRef)((function(bb, wb) {
      let {
        icon: Mb,
        title: eb,
        sub: Vb,
        expanded: gb,
        onClick: lb
      } = bb;
      return (0, pb.jsxs)("button", {
        ref: wb,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": gb,
        onClick: lb,
        children: [(0, pb.jsx)(Hb.b, {
          name: Mb,
          className: "FeaturedSettingsEntryIcon"
        }), (0, pb.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, pb.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: eb
          }), (0, pb.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: Vb
          })]
        }), (0, pb.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  10258: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(1364);

    function Vb(bb) {
      let {
        label: wb,
        value: Mb,
        swatches: eb,
        customLabel: Vb,
        onChange: gb
      } = bb;
      const lb = !eb.some((bb => bb.colour === Mb));
      return (0, pb.jsxs)("div", {
        className: "SettingBox SettingsColourRow",
        children: [(0, pb.jsx)("div", {
          className: "SliderText",
          children: wb
        }), (0, pb.jsxs)("div", {
          className: "SettingsSwatches",
          role: "radiogroup",
          "aria-label": wb,
          children: [eb.map((bb => (0, pb.jsx)("button", {
            type: "button",
            role: "radio",
            "aria-checked": bb.colour === Mb,
            "aria-label": bb.label,
            "data-pad-focusable": !0,
            className: Hb()("SettingsSwatch", {
              Selected: bb.colour === Mb
            }),
            style: {
              background: bb.colour
            },
            onClick: () => {
              gb(bb.colour)
            }
          }, bb.colour))), (0, pb.jsx)("label", {
            className: Hb()("SettingsSwatch SettingsSwatchCustom", {
              Selected: lb
            }),
            style: lb ? {
              background: Mb
            } : void 0,
            title: Vb,
            "data-pad-focusable": !0,
            children: (0, pb.jsx)("input", {
              type: "color",
              "aria-label": Vb,
              value: Mb,
              onChange: bb => {
                gb(bb.target.value)
              }
            })
          })]
        })]
      })
    }
  },
  10032: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Bb,
      f: () => Fb,
      j: () => Ib,
      l: () => sb,
      m: () => mb,
      o: () => Ub
    });
    var eb = Mb(1864),
      Hb = Mb(1968);
    const pb = bb => bb >= 56320 && bb <= 57343,
      Vb = bb => bb >= 55296 && bb <= 56319,
      gb = (bb, wb) => wb >= 2 && pb(bb.charCodeAt(wb - 1)) && Vb(bb.charCodeAt(wb - 2)) ? wb - 2 : Math.max(0, wb - 1),
      lb = (bb, wb) => {
        let Mb;
        var eb, Hb;
        return Mb = bb.start !== bb.end ? wb < 0 ? bb.start : bb.end : wb < 0 ? gb(bb.value, bb.start) : (eb = bb.value, (Hb = bb.start) + 1 < eb.length && Vb(eb.charCodeAt(Hb)) && pb(eb.charCodeAt(Hb + 1)) ? Hb + 2 : Math.min(eb.length, Hb + 1)), {
          value: bb.value,
          start: Mb,
          end: Mb
        }
      },
      Lb = ["text", "search", "url", "email", "tel", "password", "number"],
      Ib = bb => !(!(0, Hb.d)(bb) || bb.isContentEditable || bb.hasAttribute("data-pad-no-osk")) && (bb instanceof HTMLTextAreaElement || bb instanceof HTMLInputElement && Lb.includes(bb.type)),
      Ob = bb => null !== bb.selectionStart,
      Ub = bb => {
        var wb, Mb;
        const {
          value: eb
        } = bb;
        return {
          value: eb,
          start: null !== (wb = bb.selectionStart) && void 0 !== wb ? wb : eb.length,
          end: null !== (Mb = bb.selectionEnd) && void 0 !== Mb ? Mb : eb.length
        }
      },
      tb = (bb, wb, Mb) => {
        if (bb.readOnly) return;
        const Hb = bb instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Hb, "value").set.call(bb, wb.value), Ob(bb) && bb.setSelectionRange(wb.start, wb.end), (0, eb.e)(bb, new InputEvent("input", {
          bubbles: !0,
          inputType: Mb
        }))
      };
    let Cb = !1;
    const Eb = (bb, wb) => !!document.execCommand(bb, !1, wb) || (Cb || (Cb = !0, console.warn(`execCommand("${bb}") failed; the on-screen keyboard is setting the value directly`)), !1),
      Fb = (bb, wb) => {
        Eb("insertText", wb) || tb(bb, function(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const eb = bb.value.slice(0, bb.start),
            Hb = bb.value.slice(bb.end);
          let pb = Mb < 0 ? wb.length : Math.max(0, Mb - eb.length - Hb.length);
          pb > 0 && pb < wb.length && Vb(wb.charCodeAt(pb - 1)) && pb--;
          const gb = wb.slice(0, pb),
            lb = eb.length + gb.length;
          return {
            value: eb + gb + Hb,
            start: lb,
            end: lb
          }
        }(Ub(bb), wb, bb.maxLength), "insertText")
      },
      Bb = bb => {
        Eb("delete") || tb(bb, (bb => {
          const wb = bb.start === bb.end ? gb(bb.value, bb.start) : bb.start;
          return {
            value: bb.value.slice(0, wb) + bb.value.slice(bb.end),
            start: wb,
            end: wb
          }
        })(Ub(bb)), "deleteContentBackward")
      },
      sb = (bb, wb) => {
        if (!Ob(bb)) return;
        const Mb = lb(Ub(bb), wb);
        bb.setSelectionRange(Mb.start, Mb.end)
      },
      mb = bb => {
        Ob(bb) && 0 === bb.selectionStart && 0 === bb.selectionEnd && bb.setSelectionRange(bb.value.length, bb.value.length)
      }
  },
  10170: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => lb
    });
    var eb = Mb(26),
      Hb = Mb(2355),
      pb = Mb(1504),
      Vb = Mb(1549),
      gb = Mb(5100);
    const lb = async () => {
      if ((0, Vb.j)()) {
        if (!0 !== await pb.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== eb.c.get("gameState")) return
      }
      const bb = await (0, gb.e)();
      "stay" !== bb && "inGame" === eb.c.get("gameState") && ("save" === bb && (0, gb.l)(), (0, Hb.g)())
    }
  },
  10177: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb,
      e: () => pb,
      i: () => Vb,
      m: () => Hb,
      n: () => gb
    });
    var eb = Mb(2173);
    const Hb = "controllerPadShopOpen",
      pb = bb => eb.l.includes(bb),
      Vb = bb => Object.values(bb).some((bb => !1 !== bb.canBuy && !bb.isRewardedAd)),
      gb = (bb, wb, Mb) => {
        var eb, Hb, Vb, gb;
        const lb = bb.filter((bb => !pb(bb))),
          Lb = null !== wb && bb.includes(wb) ? wb : null;
        return null !== Lb && !pb(Lb) && Mb(Lb) ? Lb : null !== (eb = null !== (Hb = null !== (Vb = null !== (gb = lb.find(Mb)) && void 0 !== gb ? gb : lb[0]) && void 0 !== Vb ? Vb : Lb) && void 0 !== Hb ? Hb : bb[0]) && void 0 !== eb ? eb : null
      },
      lb = bb => bb.userInput || bb.isRewardedAd || "boolean" === typeof bb.isSelected ? null : JSON.stringify([bb.image, bb.cost, bb.currency, bb.amount, bb.customTitle, bb.buyButtonText, bb.description, bb.canBuy])
  },
  10203: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Lb,
      e: () => Ib
    });
    var eb = Mb(64),
      Hb = Mb(1611),
      pb = Mb(2212),
      Vb = Mb(1567),
      gb = Mb(1596),
      lb = Mb(1364);
    const Lb = () => {
        const bb = (0, Vb.s)();
        if ((0, eb.useEffect)((() => {
            (0, Vb.k)()
          }), []), !bb) return null;
        const {
          ControllerCategory: wb
        } = bb;
        return (0, lb.jsx)(gb.b, {
          children: (0, lb.jsx)(wb, {})
        })
      },
      Ib = () => {
        var bb;
        const wb = (0, Vb.s)(),
          [, Mb] = (0, eb.useReducer)((bb => bb + 1), 0);
        return (0, Hb.e)(pb.d, Mb), null !== (bb = null === wb || void 0 === wb ? void 0 : wb.hasActivePad()) && void 0 !== bb && bb
      }
  },
  10021: (bb, wb, Mb) => {
    Mb.d(wb, {
      C: () => rb,
      G: () => Xb,
      K: () => xb,
      N: () => Fb,
      P: () => lb,
      T: () => Ib,
      c: () => Bb,
      e: () => Kb,
      h: () => zb,
      i: () => hb,
      j: () => Cb,
      n: () => Eb,
      o: () => Ub,
      s: () => tb,
      v: () => jb,
      y: () => Lb
    });
    var eb = Mb(29),
      Hb = Mb(1864),
      pb = Mb(10024),
      Vb = Mb(10032),
      gb = Mb(3428);
    const lb = bb => (0, Vb.j)(bb),
      Lb = bb => {
        const wb = bb.getBoundingClientRect();
        return {
          x: wb.left + wb.width / 2,
          y: wb.top + wb.height / 2
        }
      },
      Ib = (bb, wb, Mb) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: bb.x,
        clientY: bb.y,
        screenX: bb.x,
        screenY: bb.y,
        button: wb,
        buttons: Mb,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      Ob = (bb, wb) => {
        (0, Hb.e)(bb, wb)
      },
      Ub = function(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const eb = 0 === Mb ? 1 : 2;
        Ob(bb, new PointerEvent("pointerdown", Ib(wb, Mb, eb))), Ob(bb, new MouseEvent("mousedown", Ib(wb, Mb, eb)))
      },
      tb = function(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Ob(bb, new PointerEvent("pointerup", Ib(wb, Mb, 0))), Ob(bb, new MouseEvent("mouseup", Ib(wb, Mb, 0)))
      },
      Cb = function(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Ub(bb, wb, Mb), tb(bb, wb, Mb), Ob(bb, 0 === Mb ? new MouseEvent("click", Ib(wb, 0, 0)) : new MouseEvent("contextmenu", Ib(wb, 2, 0)))
      },
      Eb = function(bb, wb, Mb) {
        let {
          leaveBelow: eb = null,
          enterBelow: Hb = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (bb !== wb) {
          if (null !== bb && void 0 !== bb && bb.isConnected) {
            const Hb = {
              ...Ib(Mb, 0, 0),
              relatedTarget: wb
            };
            Ob(bb, new PointerEvent("pointerout", Hb)), Ob(bb, new MouseEvent("mouseout", Hb));
            const pb = bb => !!wb && bb.contains(wb) || !!eb && bb.contains(eb);
            for (let wb = bb; wb && !pb(wb); wb = wb.parentElement) Ob(wb, new PointerEvent("pointerleave", {
              ...Hb,
              bubbles: !1
            })), Ob(wb, new MouseEvent("mouseleave", {
              ...Hb,
              bubbles: !1
            }))
          }
          if (wb) {
            const eb = {
              ...Ib(Mb, 0, 0),
              relatedTarget: bb
            };
            Ob(wb, new PointerEvent("pointerover", eb)), Ob(wb, new MouseEvent("mouseover", eb));
            const pb = [],
              Vb = wb => !(null === bb || void 0 === bb || !bb.isConnected) && wb.contains(bb) || !!Hb && wb.contains(Hb);
            for (let bb = wb; bb && !Vb(bb); bb = bb.parentElement) pb.push(bb);
            for (const bb of pb.reverse()) Ob(bb, new PointerEvent("pointerenter", {
              ...eb,
              bubbles: !1
            })), Ob(bb, new MouseEvent("mouseenter", {
              ...eb,
              bubbles: !1
            }));
            Ob(wb, new PointerEvent("pointermove", Ib(Mb, 0, 0))), Ob(wb, new MouseEvent("mousemove", Ib(Mb, 0, 0)))
          }
        } else wb && (Ob(wb, new PointerEvent("pointermove", Ib(Mb, 0, 0))), Ob(wb, new MouseEvent("mousemove", Ib(Mb, 0, 0))))
      },
      Fb = bb => {
        eb.k.iI(pb.f, bb)
      },
      Bb = bb => {
        if (lb(bb)) return void Fb(bb);
        const wb = bb.hasAttribute("data-pad-focusable") ? bb.querySelector("a[href]") : null,
          Mb = null !== wb && void 0 !== wb ? wb : bb;
        Cb(Mb, Lb(Mb))
      },
      sb = ".Dropdown-root.is-open",
      mb = bb => {
        const wb = bb.querySelector(".Dropdown-control");
        return Bb(wb), wb
      },
      hb = bb => {
        var wb;
        const Mb = null !== (wb = bb.closest(sb)) && void 0 !== wb ? wb : bb.querySelector(sb);
        return Mb ? mb(Mb) : null
      },
      zb = bb => {
        for (const wb of document.querySelectorAll(sb)) wb.contains(bb) || mb(wb)
      },
      Xb = bb => null !== bb.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      xb = bb => {
        const wb = bb ? document.elementFromPoint(bb.x, bb.y) : null;
        return !(null === wb || void 0 === wb || !wb.closest("[data-pad-repeat]"))
      },
      jb = bb => {
        var wb;
        return null !== (wb = [...bb.querySelectorAll("[data-pad-back]")].find(gb.m)) && void 0 !== wb ? wb : null
      },
      Kb = bb => {
        const wb = jb(bb);
        return !!wb && (Bb(wb), !0)
      },
      rb = bb => {
        var wb, Mb, eb, Hb;
        return null !== (wb = null !== (Mb = null !== (eb = bb.getAttribute("data-pad-key")) && void 0 !== eb ? eb : bb.getAttribute("href")) && void 0 !== Mb ? Mb : null === (Hb = bb.querySelector("a[href]")) || void 0 === Hb ? void 0 : Hb.getAttribute("href")) && void 0 !== wb ? wb : null
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);