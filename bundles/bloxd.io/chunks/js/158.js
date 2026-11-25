export const id = 158;
export const ids = [158];
export const modules = {
  9093: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt
    });
    var Ot = Vt(26),
      qt = Vt(1286),
      Dt = Vt(5155),
      mt = Vt(1188);

    function dt(tt) {
      let {
        note: et
      } = tt;
      const {
        t: Vt
      } = (0, qt.H)(), {
        clientEscMenuOptions: dt
      } = (0, Ot.k)(["clientEscMenuOptions"]);
      return (0, mt.jsx)(Dt.c, {
        label: Vt("touchSettings:actionButtons"),
        checked: dt.touchActionButtons,
        onClick: tt => {
          Ot.b.setClientEscMenuOptions({
            touchActionButtons: tt
          })
        },
        circleInfoText: Vt("touchSettings:actionButtonsInfo"),
        note: et
      })
    }
  },
  9082: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => YV,
      f: () => iV
    });
    var Ot = Vt(1286),
      qt = Vt(63),
      Dt = Vt(2074),
      mt = Vt(2082),
      dt = Vt(1140),
      jt = Vt.n(dt),
      Ht = Vt(1556),
      Xt = Vt(26),
      Qt = Vt(106),
      lt = Vt(129),
      Et = Vt(5155),
      ft = Vt(2498),
      wt = Vt(318),
      yt = Vt(2084),
      Nt = Vt(2088),
      Mt = Vt(9091),
      bt = Vt(9093),
      Jt = Vt(377),
      Ct = Vt(1188);
    const ut = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Kt = Vt(9101);
    var ht = Vt(1583),
      vt = Vt(1450),
      Wt = Vt(9109),
      St = Vt(1513),
      ct = Vt(1152),
      Rt = Vt(9114),
      It = Vt(2537);
    const Pt = {
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
        ...Object.fromEntries(It.y.map((tt => [tt, "menu"])))
      },
      Zt = tt => It.v.filter((et => Pt[et] === tt)),
      Lt = new Set(Zt("cluster")),
      Ft = new Set(Zt("inventory")),
      kt = tt => "inventory" === tt || Ft.has(tt),
      Gt = tt => {
        const et = Pt[tt];
        return void 0 === et ? [] : [et, ...Gt(et)]
      },
      zt = tt => [tt, ...Gt(tt)],
      ot = (tt, et, Vt) => "shop" === tt && et ? Vt("inventory") ? ["inventory"] : Vt("bag") ? [tt, "bag"] : [tt] : [tt],
      rt = new Map([
        ["cluster", Lt],
        ["inventory", Ft]
      ]),
      Ut = ["cluster"],
      At = [...Ut, ...It.v.filter((tt => !Ut.includes(tt) && !Pt[tt]))],
      it = tt => [tt, ...Zt(tt).flatMap(it)],
      Yt = At.flatMap(it).map((tt => ({
        id: tt,
        label: `hudLayout:${tt}`,
        ...It.u[tt],
        parent: Pt[tt]
      }))),
      Bt = Object.fromEntries(Yt.map((tt => [tt.id, tt]))),
      pt = "data-hud-el";

    function xt(tt, et, Vt, Ot) {
      const qt = Vt(function(tt, et) {
          return "attack" !== tt || et ? Bt[tt].label : "hudLayout:attackContext"
        }(tt, et)),
        Dt = Ot[tt];
      return Dt ? Vt("hudLayout:slotWithKey", {
        slot: qt,
        key: Dt
      }) : qt
    }

    function Tt(tt, et, Vt, Ot) {
      return tt.map((tt => xt(tt, et, Vt, Ot))).join(", ")
    }

    function gt(tt) {
      let {
        className: et,
        keepPlace: Vt
      } = tt;
      return Vt ? (0, Ct.jsx)("div", {
        className: jt()(et, "Placeholder")
      }) : null
    }

    function st(tt) {
      let {
        id: et,
        elements: Vt,
        actionButtons: qt,
        keyNames: Dt,
        className: mt,
        keepPlace: dt,
        onHidden: jt
      } = tt;
      const {
        t: Xt
      } = (0, Ot.H)();
      if (!Bt[et].hide) return (0, Ct.jsx)(gt, {
        className: mt,
        keepPlace: dt
      });
      const Qt = (0, It.q)(Vt, et);
      return (0, Ct.jsx)(Ht.Q, {
        className: mt,
        ariaLabel: Xt(Qt ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: xt(et, qt, Xt, Dt)
        }),
        pressed: !Qt,
        onClick: () => {
          jt(et, !Qt)
        },
        children: (0, Ct.jsx)(ct.b, {
          name: Qt ? "eye-slash" : "eye"
        })
      })
    }

    function nt(tt) {
      let {
        id: et,
        elements: Vt,
        actionButtons: qt,
        keyNames: Dt,
        className: mt,
        keepPlace: dt,
        onlyWhenMoved: jt,
        locked: Xt,
        onReset: Qt
      } = tt;
      const {
        t: lt
      } = (0, Ot.H)(), Et = Bt[et], ft = (0, It.H)(Vt[et]);
      return !Et.move && !Et.scale || jt && ft ? (0, Ct.jsx)(gt, {
        className: mt,
        keepPlace: dt
      }) : (0, Ct.jsx)(Ht.Q, {
        className: mt,
        disabled: ft || Xt,
        ariaLabel: lt("hudLayout:resetElement", {
          name: xt(et, qt, lt, Dt)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: et
        },
        onClick: tt => {
          jt && Oe(tt.currentTarget), Qt(et)
        },
        children: (0, Ct.jsx)(ct.b, {
          name: "rotate-left"
        })
      })
    }

    function te(tt) {
      let {
        id: et,
        actionButtons: Vt,
        keyNames: qt,
        className: Dt,
        keepPlace: mt,
        locked: dt,
        lockable: jt,
        onLocked: Xt
      } = tt;
      const {
        t: Qt
      } = (0, Ot.H)();
      return jt || dt ? (0, Ct.jsx)(Ht.Q, {
        className: Dt,
        ariaLabel: Qt(dt ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: xt(et, Vt, Qt, qt)
        }),
        pressed: dt,
        active: dt,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${dt?"unlock":"lock"}:${et}`
        },
        onClick: () => {
          Xt(et, !dt)
        },
        children: (0, Ct.jsx)(ct.b, {
          name: dt ? "lock" : "lock-open"
        })
      }) : (0, Ct.jsx)(gt, {
        className: Dt,
        keepPlace: mt
      })
    }

    function ee(tt) {
      let {
        className: et,
        open: Vt,
        name: qt,
        onToggle: Dt
      } = tt;
      const {
        t: mt
      } = (0, Ot.H)();
      return (0, Ct.jsx)(Ht.Q, {
        className: et,
        ariaLabel: mt(Vt ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: qt
        }),
        pressed: Vt,
        analyticsClick: {
          id: "hud_layout.children",
          value: Vt ? "close" : "open"
        },
        onClick: () => {
          Dt(!Vt)
        },
        children: (0, Ct.jsx)(ct.b, {
          name: Vt ? "angle-up" : "angle-down"
        })
      })
    }

    function Ve(tt, et) {
      var Vt;
      tt.contains(document.activeElement) && et.focus({
        preventScroll: !0
      }), null === (Vt = (0, St.g)()) || void 0 === Vt || Vt.handOverPadFocus(tt, et)
    }

    function Oe(tt) {
      const et = tt.closest("[data-hud-row]"),
        Vt = null === et || void 0 === et ? void 0 : et.querySelector(".HudElementRowName");
      return !(!et || !Vt) && (Ve(et, Vt), !0)
    }
    const qe = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function De(tt, et) {
      return "joystick" === tt && !et
    }

    function me() {
      const {
        t: tt
      } = (0, Ot.H)();
      return (0, Ct.jsx)(Ht.Q, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: tt => {
          const et = tt.currentTarget;
          if (!Oe(et)) {
            const tt = function(tt) {
              var et, Vt;
              const Ot = [tt.previousElementSibling, tt.nextElementSibling].find((tt => tt instanceof HTMLElement && tt.matches(qe)));
              return null !== (et = null !== Ot && void 0 !== Ot ? Ot : null === (Vt = tt.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === Vt ? void 0 : Vt.querySelector(`:is(${qe}):not(.HudFixJoystickButton)`)) && void 0 !== et ? et : null
            }(et);
            tt && Ve(et, tt)
          }
          Xt.b.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: tt("hudLayout:fixJoystick")
      })
    }
    var de = Vt(83),
      je = Vt(1371),
      He = Vt(3176),
      Xe = Vt(2821),
      Qe = Vt(2546);
    const le = (tt, et, Vt) => {
      const Ot = Gt(et).includes(tt) ? tt : Gt(tt).includes(et) ? et : null;
      if (null === Ot || "joystick" === Ot) return !1;
      const qt = Ot === tt ? et : tt;
      if ("menu" === Ot) return (0, Qe.t)(qt, Vt.hudElements[qt]);
      if ("hotbar" !== Ot || !kt(qt)) return !0;
      if ((0, It.L)(Vt.hudElements[qt]) || (0, It.L)(Vt.hudElements.inventory)) return !1;
      return !(Vt.hudLocked.includes(qt) || Vt.hudLocked.includes("inventory")) || (0, It.H)(Vt.hudElements.hotbar)
    };
    var Ee = Vt(2569),
      fe = Vt(3217),
      we = Vt(9120);
    const ye = tt => ({
      [pt]: tt
    });

    function Ne(tt) {
      let {
        id: et,
        slot: Vt,
        icon: Ot,
        label: Dt,
        hidden: mt,
        className: dt,
        face: Ht
      } = tt;
      const Xt = (0, qt.useRef)(null);
      return (0, qt.useLayoutEffect)((() => {
        Ht && Xt.current && (0, we.m)(Xt.current, Ht)
      }), [Ht]), (0, Ct.jsxs)("div", {
        className: jt()("TouchKeyHit", `TouchSlot${Vt}`, dt, {
          HudPreviewGhost: mt.has(et)
        }),
        ...ye(et),
        children: [Ht && (0, Ct.jsx)("div", {
          ref: Xt,
          className: jt()("TouchKey", {
            Labelled: Ht.classList.contains("Labelled")
          })
        }), !Ht && (0, Ct.jsxs)("div", {
          className: jt()("TouchKey", {
            Labelled: void 0 !== Dt
          }),
          children: [Ot && (0, Ct.jsx)(ct.b, {
            name: Ot
          }), void 0 !== Dt && (0, Ct.jsx)("span", {
            className: "TouchKeyLabel",
            children: Dt
          })]
        })]
      })
    }

    function ae(tt) {
      let {
        item: et,
        selected: Vt
      } = tt;
      const Ot = (0, qt.useRef)(null);
      return (0, qt.useLayoutEffect)((() => {
        Ot.current && (0, we.m)(Ot.current, et)
      }), [et]), (0, Ct.jsx)("div", {
        ref: Ot,
        className: jt()("InvenItem", {
          Selected: Vt
        })
      })
    }
    const Me = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      be = tt => void 0 === tt ? {} : {
        style: {
          "--parked": tt
        }
      };

    function Je(tt) {
      let {
        id: et,
        hidden: Vt,
        parked: Ot,
        unslotted: qt = !1
      } = tt;
      return (0, Ct.jsx)("div", {
        className: jt()("TopRightIcon", Ee.p[et], {
          HudPreviewGhost: Vt.has(et),
          [Qe.c]: void 0 !== Ot,
          [Qe.e]: qt
        }),
        ...be(Ot),
        children: (0, Ct.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...ye(et),
          children: (0, Ct.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Ct.jsx)(ct.b, {
              name: Me[et]
            })
          })
        })
      })
    }

    function Ce(tt) {
      let {
        portraitPhone: et,
        icons: Vt,
        pinnedIcons: Ot,
        hidden: Dt,
        moved: mt,
        trayState: dt
      } = tt;
      const Ht = et ? (0, Qe.y)(Vt) : [],
        Xt = Vt.filter((tt => "settings" === tt)),
        Qt = Vt.filter((tt => "settings" !== tt && !Ht.includes(tt))).reverse(),
        lt = Ht.length > 0 && "gone" === dt,
        Et = [...Xt, ...lt ? ["tray"] : [], ...Qt].filter((tt => "tray" === tt || Dt.has(tt) && !mt.has(tt))),
        ft = tt => {
          const et = Et.indexOf(tt);
          return et < 0 ? void 0 : et
        },
        wt = (tt, et) => (0, Ct.jsx)(Je, {
          id: tt,
          hidden: Dt,
          parked: et ? ft(tt) : void 0,
          unslotted: et && Dt.has(tt) && mt.has(tt)
        }, tt);
      return (0, Ct.jsxs)("div", {
        className: jt()("TopRightIcons TouchInGame", {
          Column: et
        }),
        children: [Xt.map((tt => wt(tt, !0))), Ht.length > 0 && (0, Ct.jsxs)("div", {
          className: jt()("TopRightIcon TopRightTrayToggle Open", {
            [Qe.c]: lt
          }),
          ...be(ft("tray")),
          children: [(0, Ct.jsx)("div", {
            className: jt()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== dt
            }),
            children: (0, Ct.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, Ct.jsx)(ct.b, {
                name: "ellipsis"
              })
            })
          }), (0, Ct.jsx)("div", {
            className: "TopRightTray",
            children: Ht.map((tt => wt(tt, !1)))
          })]
        }), Qt.map((tt => (0, Ct.jsxs)(qt.Fragment, {
          children: ["perspective" === tt && null !== Ot.rightOfCamera && (0, Ct.jsx)(ue, {
            icon: Ot.rightOfCamera
          }), wt(tt, !0)]
        }, tt))), null !== Ot.leftEnd && (0, Ct.jsx)(ue, {
          icon: Ot.leftEnd
        })]
      })
    }

    function ue(tt) {
      let {
        icon: et
      } = tt;
      return (0, Ct.jsx)("div", {
        className: "TopRightIcon",
        children: (0, Ct.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Ct.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Ct.jsx)(ct.b, {
              name: et
            })
          })
        })
      })
    }

    function Ke(tt) {
      let {
        next: et,
        hidden: Vt
      } = tt;
      return (0, Ct.jsx)("div", {
        className: jt()("HotBarArrow", et ? "Next" : "Previous", {
          HudPreviewGhost: Vt
        }),
        ...ye("arrows"),
        children: (0, Ct.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Ct.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Ct.jsx)(ct.b, {
              name: et ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function he() {
      return (0, Ct.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, Ct.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, Ct.jsx)("div", {
            className: "SocialBar",
            children: (0, Ct.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, Ct.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, Ct.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, Ct.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, Ct.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Ct.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Ct.jsx)(ct.b, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, Ct.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, Ct.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, Ct.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, Ct.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Ct.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Ct.jsx)(ct.b, {
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
    const ve = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      We = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      Se = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ce = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function Re(tt) {
      let {
        presence: et,
        portraitPhone: Vt,
        hidden: qt,
        actionButtons: Dt,
        joystickFixed: mt,
        keysAbove: dt,
        auraBar: Ht,
        trayState: Xt,
        moved: lt
      } = tt;
      const {
        t: Et
      } = (0, Ot.H)(), {
        faces: ft,
        items: wt
      } = et, yt = tt => ({
        HudPreviewGhost: zt(tt).some((tt => qt.has(tt)))
      });
      return (0, Ct.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, Ct.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, Ct.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, Ct.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, Ct.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, Ct.jsx)("div", {
              className: "InGameHeaderGameName",
              children: Et("hudLayout:previewGameName")
            })]
          })
        }), (0, Ct.jsx)("div", {
          className: "TopLeftElements",
          children: (0, Ct.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, Ct.jsxs)("div", {
              className: "Chat",
              children: [(0, Ct.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [Et("hudLayout:previewChatLine"), Et("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), Et("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((tt => (0, Ct.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, Ct.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, Ct.jsx)("div", {
                      className: "IndividualText",
                      children: tt
                    })
                  })
                }, tt)))
              }), (0, Ct.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: jt()("ChatIconWrapper SmallTextLight", yt("chat")),
                ...ye("chat"),
                children: (0, Ct.jsx)(ct.b, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, Ct.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, Ct.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, Ct.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, Ct.jsx)("div", {
                className: "TopRightIconsContainer",
                ...ye("menu"),
                children: (0, Ct.jsx)(Ce, {
                  portraitPhone: Vt,
                  icons: et.rowIcons,
                  pinnedIcons: et.pinnedIcons,
                  hidden: qt,
                  trayState: Xt,
                  moved: lt
                })
              })
            }), Qt.featureFlags.useSocialFeatures && (0, Ct.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, Ct.jsx)(he, {})
            })]
          })
        }), (0, Ct.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, Ct.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, Ct.jsxs)("div", {
            className: "TouchInteractKey",
            ...ye("interact"),
            children: [(0, Ct.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, Ct.jsx)(ct.b, {
                name: "hand-back-point-up"
              })
            }), (0, Ct.jsx)("div", {
              children: Et("hudLayout:previewInteract")
            })]
          })
        }), (0, Ct.jsx)("div", {
          className: "BottomCentre",
          children: (0, Ct.jsxs)("div", {
            className: "BottomElements",
            children: [(0, Ct.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, Ct.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, Ct.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...ye("hotbar"),
                children: (0, Ct.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, Ct.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, Ct.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, Ct.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, Ct.jsx)(ct.b, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), Ht && (0, Ct.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, Ct.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, Ct.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, fe.g)("glint"),
                    alt: ""
                  }), (0, Ct.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, Ct.jsx)("div", {
                  className: "AuraBar",
                  children: (0, Ct.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, Ct.jsx)("div", {
                className: "HotBarRow",
                children: (0, Ct.jsx)("div", {
                  className: jt()("HotBarContainer Touch", {
                    KeysAbove: dt
                  }),
                  children: (0, Ct.jsxs)("div", {
                    className: "HotBar",
                    ...ye("hotbar"),
                    children: [(0, Ct.jsxs)("div", {
                      className: jt()("TouchInventoryKeys", {
                        NoAuraBar: !Ht
                      }),
                      children: [(0, Ct.jsx)("div", {
                        className: jt()("TouchInventoryKey ShopKey", yt("shop"), {
                          Hidden: !et.shop
                        }),
                        ...ye("shop"),
                        children: (0, Ct.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Ct.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Ct.jsx)(ct.b, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, Ct.jsx)("div", {
                        className: jt()("TouchInventoryKey BagKey", yt("bag"), {
                          Hidden: !et.bag
                        }),
                        ...ye("bag"),
                        children: (0, Ct.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Ct.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Ct.jsx)(ct.b, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, Ct.jsx)(Ke, {
                      next: !1,
                      hidden: qt.has("arrows")
                    }), (0, Ct.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== wt && wt.map(((tt, et) => (0, Ct.jsx)(ae, {
                        item: tt,
                        selected: tt.classList.contains("Selected")
                      }, et))), null === wt && Se.map((tt => {
                        const et = ce[tt];
                        return (0, Ct.jsx)("div", {
                          className: jt()("InvenItem", {
                            Selected: 0 === tt
                          }),
                          children: et && (0, Ct.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, Ct.jsx)(ct.b, {
                              name: et
                            })
                          })
                        }, tt)
                      }))]
                    }), (0, Ct.jsx)(Ke, {
                      next: !0,
                      hidden: qt.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, Ct.jsx)("div", {
              className: "BottomRightElements",
              children: (0, Ct.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== ft && we.g.map((tt => {
                  const et = ft[tt];
                  return et && (0, Ct.jsx)(Ne, {
                    id: we.f[tt],
                    slot: tt,
                    face: et,
                    className: ve[tt],
                    hidden: qt
                  }, tt)
                })), (0, we.n)(et, Dt).map((tt => (0, Ct.jsx)(Ne, {
                  id: we.f[tt],
                  slot: tt,
                  icon: We[tt].icon,
                  label: Et(We[tt].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: qt
                }, tt))), null === ft && (0, Ct.jsxs)(Ct.Fragment, {
                  children: [(0, Ct.jsx)(Ne, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: qt
                  }), (0, Ct.jsx)(Ne, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: qt
                  }), Dt && (0, Ct.jsxs)(Ct.Fragment, {
                    children: [(0, Ct.jsx)(Ne, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: qt
                    }), (0, Ct.jsx)(Ne, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: qt
                    })]
                  }), (0, we.i)(Dt).map((tt => (0, Ct.jsx)(Ne, {
                    id: we.f[tt],
                    slot: tt,
                    icon: We[tt].icon,
                    label: Et(We[tt].labelKey),
                    hidden: qt
                  }, tt))), (0, Ct.jsx)(Ne, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: qt
                  })]
                })]
              })
            })]
          })
        }), (0, Ct.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, Ct.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, Ct.jsxs)("div", {
              className: jt()("Joystick Resting HudPreviewJoystick", {
                Floating: !mt
              }),
              ...ye("joystick"),
              children: [(0, Ct.jsx)("div", {
                className: "JoystickBase"
              }), (0, Ct.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), et.sprint && (0, Ct.jsx)("div", {
            className: jt()("TouchSprintHit", yt("sprint"), {
              AtHome: !mt
            }),
            ...ye("sprint"),
            children: (0, Ct.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, Ct.jsx)(ct.b, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function Ie() {
      const [tt, et] = (0, qt.useState)({}), Vt = (0, qt.useCallback)((tt => {
        et((et => [...new Set([...Object.keys(et), ...Object.keys(tt)])].every((Vt => et[Vt] === tt[Vt])) ? et : tt))
      }), []);
      return [tt, Vt]
    }
    const Pe = .05;

    function Ze(tt) {
      var et;
      let {
        selected: Vt,
        layout: qt,
        actionButtons: Dt,
        keyNames: mt,
        overlaps: dt,
        scaleCaps: Xt,
        joystickFixed: Qt,
        onScale: lt,
        onHidden: Et,
        onReset: ft,
        locked: wt,
        lockable: yt,
        onLocked: Nt,
        extra: Mt
      } = tt;
      const {
        t: bt
      } = (0, Ot.H)(), Jt = Vt ? Bt[Vt] : null, ut = null !== Vt && wt.has(Vt), Kt = (Vt && qt.hudElements[Vt] || It.l)[2], ht = null !== (et = Vt && Xt[Vt]) && void 0 !== et ? et : It.g, vt = tt => {
        Vt && lt(Vt, Math.min(ht, Math.round(100 * (Kt + .1 * tt)) / 100))
      };
      return (0, Ct.jsxs)(Ct.Fragment, {
        children: [(0, Ct.jsxs)("div", {
          className: jt()("HudQuickName SmallTextBold", {
            Overlap: dt.length > 0
          }),
          children: [dt.length > 0 && (0, Ct.jsx)(ct.b, {
            name: "triangle-exclamation"
          }), Jt ? xt(Jt.id, Dt, bt, mt) : bt("hudLayout:fullScreenHint"), dt.length > 0 && (0, Ct.jsx)("span", {
            className: "HudQuickOverlap",
            children: bt("hudLayout:overlapsShort", {
              names: Tt(dt, Dt, bt, mt)
            })
          })]
        }), (null === Jt || void 0 === Jt ? void 0 : Jt.scale) && (0, Ct.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, Ct.jsx)(Ht.Q, {
            disabled: ut || Kt <= It.h,
            ariaLabel: bt("hudLayout:smaller"),
            onClick: () => {
              vt(-1)
            },
            children: (0, Ct.jsx)(ct.b, {
              name: "minus"
            })
          }), (0, Ct.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*Kt)}%`
          }), (0, Ct.jsx)(Ht.Q, {
            disabled: ut || Kt >= ht,
            ariaLabel: bt("hudLayout:larger"),
            onClick: () => {
              vt(1)
            },
            children: (0, Ct.jsx)(ct.b, {
              name: "plus"
            })
          })]
        }), (Jt || Mt) && (0, Ct.jsxs)("div", {
          className: "HudQuickActions",
          children: [Jt && (0, Ct.jsxs)(Ct.Fragment, {
            children: [(0, Ct.jsx)(te, {
              id: Jt.id,
              actionButtons: Dt,
              keyNames: mt,
              locked: ut,
              lockable: yt(Jt.id),
              onLocked: Nt
            }), (0, Ct.jsx)(st, {
              id: Jt.id,
              elements: qt.hudElements,
              actionButtons: Dt,
              keyNames: mt,
              onHidden: Et
            }), (0, Ct.jsx)(nt, {
              id: Jt.id,
              elements: qt.hudElements,
              actionButtons: Dt,
              keyNames: mt,
              locked: ut,
              onReset: ft
            }), De(Jt.id, Qt) && (0, Ct.jsx)(me, {})]
          }), Mt]
        })]
      })
    }
    var Le = Vt(1204),
      Fe = Vt(4545);
    const ke = "HudPreviewDoc",
      Ge = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      ze = new Set([ke, ...Object.values(Ge)]),
      oe = new Set(It.v.map(Ee.A)),
      re = new Set(Ee.k),
      Ue = 'style, link[rel="stylesheet"]';

    function Ae(tt, et, Vt, Ot) {
      const qt = new Map,
        Dt = new Set,
        mt = new URL(tt.baseURI).origin,
        dt = et => {
          var Vt;
          if ("LINK" !== et.nodeName) return !0;
          const Ot = null === (Vt = et.getAttribute("href")) || void 0 === Vt ? void 0 : Vt.trim();
          if (!Ot) return !1;
          try {
            return new URL(Ot, tt.baseURI).origin === mt
          } catch {
            return !1
          }
        };
      let jt = null;
      const Ht = () => {
          jt !== (0 === Dt.size) && (jt = 0 === Dt.size, null === Ot || void 0 === Ot || Ot(jt))
        },
        Xt = tt => {
          const et = tt.cloneNode(!0);
          if ("LINK" === et.tagName) {
            Dt.add(et);
            const tt = () => {
              Dt.delete(et), Ht()
            };
            et.addEventListener("load", tt), et.addEventListener("error", tt), Vt && et.addEventListener("load", Vt)
          }
          return et
        },
        Qt = () => {
          const Ot = function(tt) {
              const et = [...tt.body.children].filter((tt => tt.matches(Ue)));
              return [...tt.head.querySelectorAll(Ue), ...et]
            }(tt).filter(dt),
            mt = new Set(Ot);
          for (const [tt, et] of qt) mt.has(tt) || (et.remove(), qt.delete(tt), Dt.delete(et));
          let jt = null;
          for (let tt = Ot.length - 1; tt >= 0; tt--) {
            const Dt = Ot[tt];
            let mt = qt.get(Dt);
            mt ? "STYLE" === Dt.tagName && mt.textContent !== Dt.textContent && (mt.textContent = Dt.textContent, null === Vt || void 0 === Vt || Vt()) : (mt = Xt(Dt), qt.set(Dt, mt), et.head.insertBefore(mt, jt)), jt = mt
          }
          Ht()
        };
      Qt();
      const lt = new MutationObserver(Qt);
      return lt.observe(tt.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), lt.observe(tt.body, {
        childList: !0
      }), () => {
        lt.disconnect()
      }
    }

    function ie(tt, et, Vt) {
      let {
        keysAbove: Ot
      } = Vt;
      const qt = [...tt.documentElement.classList].filter((tt => !ze.has(tt) && !re.has(tt))),
        Dt = [...et.documentElement.classList].filter((tt => re.has(tt))),
        mt = [ke, Ge.hotbar, Ge.hasShop, Ge.hasBag];
      Ot && mt.push(Ge.keysAbove), et.documentElement.className = [...qt, ...mt, ...Dt].join(" ")
    }
    const Ye = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Be(tt, et, Vt, Ot, qt) {
      const Dt = (0, It.w)(Vt, Ot, "joystick"),
        mt = (0, Ee.D)((0, Ee.K)(Vt, Ot, qt), Ot),
        dt = mt.classes.filter((tt => !oe.has(tt))),
        jt = et.documentElement,
        Ht = Vt.hudLayouts[Ot].hudSafe,
        Xt = (0, Ee.H)(Ht, window.innerWidth, window.innerHeight, pe(), Ht ? (0, Ee.N)(et) : 0);
      (0, Ee.Q)({
        ...mt,
        classes: dt
      }, {
        vars: jt,
        safe: jt,
        classes: jt
      }), jt.style.setProperty("--preview-joystick-shift-left", `${Xt[3]}px`), jt.style.setProperty("--preview-joystick-shift-bottom", `${Xt[2]}px`), jt.style.setProperty("--preview-joystick-scale", String(Dt[2])), (0, Fe.f)(jt, et, Vt, Ot);
      for (const Qt of Ye) jt.style.setProperty(Qt, tt.documentElement.style.getPropertyValue(Qt) || "0px")
    }

    function pe() {
      return (0, Ee.J)(Xt.b.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function xe(tt) {
      return (0, Ee.v)(pe(), (0, Ee.N)(tt))
    }

    function Te(tt, et, Vt) {
      const Ot = tt.documentElement.style,
        qt = (0, Ee.I)(et),
        Dt = Ot.getPropertyValue(qt);
      try {
        return Vt((tt => {
          Ot.setProperty(qt, String(tt))
        }))
      } finally {
        "" === Dt ? Ot.removeProperty(qt) : Ot.setProperty(qt, Dt)
      }
    }

    function ge(tt, et) {
      const [Vt, Ot] = Te(tt, "hotbar", (et => {
        const Vt = Vt => {
          var Ot, qt;
          return et(Vt), null !== (Ot = null === (qt = tt.querySelector(".HotBarGameItemsContainer")) || void 0 === qt ? void 0 : qt.getBoundingClientRect().width) && void 0 !== Ot ? Ot : 0
        };
        return [Vt(1), Vt(It.g)]
      }));
      return Vt <= 0 ? It.g : Math.min(It.g, Math.max(1, Math.floor(Ot / Vt / et + 1e-6) * et))
    }
    const se = 3,
      ne = .5,
      tV = tt => tt.right - tt.left;
    const eV = (tt, et) => Math.abs((0, Rt.d)(tt).x - (0, Rt.d)(et).x) + Math.abs((0, Rt.d)(tt).y - (0, Rt.d)(et).y) + Math.abs(tV(tt) - tV(et));

    function VV(tt, et, Vt, Ot, qt) {
      let {
        canKeep: Dt = () => !0,
        passes: mt = se,
        before: dt
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const jt = et.hudLayouts[Vt].hudLocked.filter(Dt);
      if (0 === jt.length) return et;
      const Ht = [...Lt].filter((Ot => !jt.includes(Ot) && (0, It.w)(tt, Vt, Ot).join() === (0, It.w)(et, Vt, Ot).join())),
        Xt = tt => {
          const et = (0, Rt.G)(Ht.flatMap((et => tt[et] ? [tt[et]] : [])));
          return {
            ...tt,
            cluster: null !== et && void 0 !== et ? et : void 0
          }
        };
      let Qt = null;
      const lt = tt => {
          Qt = tt;
          const et = qt(tt);
          return et && {
            ...et,
            boxes: Xt(et.boxes)
          }
        },
        Et = dt ? {
          ...dt,
          boxes: Xt(dt.boxes)
        } : lt(tt),
        ft = Et && lt(et);
      if (!Et || !ft) return et;
      const wt = Et.boxes;
      let yt = ft.boxes;
      const Nt = Et.keysAbove !== ft.keysAbove,
        Mt = Nt || Boolean(Et.shopAlone) !== Boolean(ft.shopAlone),
        bt = new Set(jt.filter((tt => !kt(tt) || !("bag" === tt ? Nt : Mt))));
      let Jt = et;
      for (let Kt = 0; Kt < mt && bt.size > 0; Kt++) {
        var Ct, ut;
        const tt = new Map;
        for (const et of bt) {
          const qt = wt[et],
            Dt = yt[et],
            mt = qt && Dt ? OV(et, (0, It.w)(Jt, Vt, et), qt, Dt, Ot) : null;
          mt ? tt.set(et, mt) : bt.delete(et)
        }
        if (0 === tt.size) break;
        let qt = Jt;
        for (const [et, Ot] of tt) qt = (0, It.db)(qt, Vt, et, Ot);
        const Dt = null === (Ct = lt(qt)) || void 0 === Ct ? void 0 : Ct.boxes;
        if (!Dt) return et;
        let mt = Jt;
        for (const [et, Ot] of tt) {
          const tt = Dt[et];
          tt && eV(wt[et], tt) < eV(wt[et], yt[et]) - ne ? mt = (0, It.db)(mt, Vt, et, Ot) : bt.delete(et)
        }
        if (mt === Jt) break;
        const dt = [...tt.keys()].every((tt => bt.has(tt)));
        Jt = dt ? qt : mt;
        const jt = dt ? Dt : null === (ut = lt(Jt)) || void 0 === ut ? void 0 : ut.boxes;
        if (!jt) return et;
        yt = jt
      }
      return Qt !== Jt && qt(Jt), Jt
    }

    function OV(tt, et, Vt, Ot, qt) {
      let [Dt, mt, dt] = et;
      const jt = It.u[tt],
        Ht = {};
      jt.scale && tV(Ot) > 0 && Math.abs(tV(Vt) - tV(Ot)) > ne && (Ht.scale = Math.max(It.h, Math.min(It.g, dt * tV(Vt) / tV(Ot))));
      const Xt = (0, Rt.d)(Vt).x - (0, Rt.d)(Ot).x,
        Qt = (0, Rt.d)(Vt).y - (0, Rt.d)(Ot).y;
      return jt.move && (Math.abs(Xt) > ne || Math.abs(Qt) > ne) && (Ht.dx = Dt + Xt / qt.width, Ht.dy = mt + Qt / qt.height), void 0 === Ht.scale && void 0 === Ht.dx ? null : Ht
    }
    let qV = 0;

    function DV() {
      return qV > 0
    }
    const mV = tt => 0 === tt.dx && 0 === tt.dy,
      dV = .001,
      jV = tt => Math.abs(tt.dx) >= 5e-4 || Math.abs(tt.dy) >= 5e-4 ? tt : {
        dx: tt.dx,
        dy: tt.dy < 0 ? -.001 : dV
      };

    function HV(tt) {
      let {
        preview: et,
        stageRef: Vt,
        ringRef: Ot,
        centreLineRef: Dt,
        snapCentre: mt,
        ready: dt,
        measure: jt,
        k: Ht,
        viewport: Xt,
        boxes: Qt,
        pieces: lt,
        selected: Et,
        insets: ft,
        layout: wt,
        canMove: yt,
        onSelect: Nt,
        onMove: Mt
      } = tt;
      const bt = (0, qt.useRef)(null),
        Jt = (0, qt.useCallback)((() => null !== bt.current), []),
        Ct = (tt, et) => {
          if (!et) return null;
          const Vt = (0, Rt.d)(tt.origin),
            Ot = (0, Rt.d)(et),
            qt = (tt.to.dx - tt.from.dx) * Xt.width,
            Dt = (tt.to.dy - tt.from.dy) * Xt.height,
            mt = et.right - et.left,
            dt = et.bottom - et.top;
          return {
            skew: {
              x: Ot.x - Vt.x - qt,
              y: Ot.y - Vt.y - Dt
            },
            box: {
              left: Vt.x - mt / 2,
              top: Vt.y - dt / 2,
              right: Vt.x + mt / 2,
              bottom: Vt.y + dt / 2
            }
          }
        },
        ut = (tt, Vt) => {
          var qt;
          const mt = bt.current;
          if (!mt || mt.pointerId !== tt.pointerId) return;
          bt.current = null, null === (qt = Dt.current) || void 0 === qt || qt.classList.remove("Shown", "Snapped");
          const dt = Ot.current;
          if (dt && null !== mt.ringStyle && dt.setAttribute("style", mt.ringStyle), Vt && mt.moved) {
            const tt = mV(mt.to) ? null : jt(mt.id),
              et = tt ? (0, Rt.C)(tt, (0, Rt.B)(Xt.width, Xt.height, ft)) : {
                x: 0,
                y: 0
              },
              Vt = {
                dx: mt.to.dx + et.x / Xt.width,
                dy: mt.to.dy + et.y / Xt.height
              },
              Ot = mV(mt.to) ? Vt : jV(Vt);
            Mt(mt.id, Ot.dx, Ot.dy)
          } else et(mt.id, null), Vt && mt.tapPick && Nt(mt.tapPick)
        };
      return {
        busy: Jt,
        handlers: {
          onPointerDown: tt => {
            var et;
            if (!dt || bt.current || !tt.target.closest(".HudPreviewHandle")) return;
            const Ot = Vt.current.getBoundingClientRect(),
              qt = {
                x: (tt.clientX - Ot.left) / Ht,
                y: (tt.clientY - Ot.top) / Ht
              },
              Dt = (0, Rt.v)(qt, lt, 40 / Ht),
              mt = null !== Et ? rt.get(Et) : void 0,
              jt = void 0 !== mt && null !== (0, Rt.v)(qt, lt.filter((tt => {
                let {
                  id: et
                } = tt;
                return mt.has(et)
              })), 40 / Ht),
              Xt = "menu" === Et && void 0 !== Qt.menu && (0, Rt.e)(Qt.menu, qt) && ("menu" === Dt || null !== Dt && (0, Qe.t)(Dt, wt.hudElements[Dt])),
              ft = jt ? Et : Xt ? "menu" : null,
              Mt = null !== ft,
              Jt = null !== ft && void 0 !== ft ? ft : Dt;
            if (!Jt) return;
            if (function(tt) {
                qV++;
                const et = Vt => {
                  Vt.pointerId === tt && (qV = Math.max(0, qV - 1), window.removeEventListener("pointerup", et, !0), window.removeEventListener("pointercancel", et, !0))
                };
                window.addEventListener("pointerup", et, !0), window.addEventListener("pointercancel", et, !0)
              }(tt.pointerId), !yt(Jt)) return void Nt(Mt && Dt ? Dt : Jt);
            Nt(Jt);
            const [Ct, ut] = null !== (et = wt.hudElements[Jt]) && void 0 !== et ? et : [0, 0], Kt = {
              dx: Ct,
              dy: ut
            }, ht = {
              skew: {
                x: 0,
                y: 0
              },
              box: Qt[Jt]
            };
            bt.current = {
              id: Jt,
              pointerId: tt.pointerId,
              startX: tt.clientX,
              startY: tt.clientY,
              origin: Qt[Jt],
              from: Kt,
              to: Kt,
              moved: !1,
              home: mV(Kt) ? {
                centre: (0, Rt.d)(Qt[Jt]),
                anchor: ht
              } : null,
              away: mV(Kt) ? null : ht,
              anchor: ht,
              ringStyle: null,
              tapPick: Mt ? Dt : null
            }, tt.currentTarget.setPointerCapture(tt.pointerId)
          },
          onPointerMove: tt => {
            const Vt = bt.current;
            if (!Vt || Vt.pointerId !== tt.pointerId) return;
            const qt = tt.clientX - Vt.startX,
              dt = tt.clientY - Vt.startY;
            if (!Vt.moved && Math.hypot(qt, dt) < 5) return;
            const Qt = !Vt.moved;
            var lt, Et;
            (Vt.moved = !0, Qt) && (Vt.ringStyle = null !== (lt = null === (Et = Ot.current) || void 0 === Et ? void 0 : Et.getAttribute("style")) && void 0 !== lt ? lt : null);
            const wt = (0, Rt.B)(Xt.width, Xt.height, ft);
            if (!Vt.home) {
              var yt;
              Vt.to = {
                dx: 0,
                dy: 0
              }, et(Vt.id, Vt.to);
              const tt = jt(Vt.id),
                Ot = null !== (yt = Ct(Vt, tt)) && void 0 !== yt ? yt : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: Vt.origin
                },
                qt = (0, Rt.d)(Vt.origin);
              Vt.home = {
                centre: tt ? (0, Rt.d)(tt) : {
                  x: qt.x - Vt.from.dx * Xt.width,
                  y: qt.y - Vt.from.dy * Xt.height
                },
                anchor: Ot
              }
            }
            const Nt = Vt.home;
            let Mt = !1;
            const Jt = tt => {
                Mt = !1;
                let Ot = (0, Rt.n)(tt.box, qt / Ht, dt / Ht, wt);
                const Dt = Xt.width / 2;
                if (mt && Math.abs((0, Rt.d)(Vt.origin).x + Ot.x - Dt) <= 8 / Ht) {
                  const et = Dt - (0, Rt.d)(Vt.origin).x,
                    qt = (0, Rt.n)(tt.box, et, Ot.y, wt);
                  Mt = Math.abs(qt.x - et) < .01, Mt && (Ot = qt)
                }
                const jt = (0, Rt.r)(Vt.from, Ot.x - tt.skew.x, Ot.y - tt.skew.y, Xt.width, Xt.height);
                Vt.to = jV(jt), Vt.anchor = tt, et(Vt.id, Vt.to)
              },
              ut = (0, Rt.n)(Nt.anchor.box, qt / Ht, dt / Ht, wt),
              Kt = Dt.current,
              ht = (0, Rt.d)(Vt.origin),
              vt = ((0, It.P)(Vt.id) ? 20 : 6) / Ht;
            if (Math.abs(ht.x + ut.x - Nt.centre.x) <= vt && Math.abs(ht.y + ut.y - Nt.centre.y) <= vt) Vt.to = {
              dx: 0,
              dy: 0
            }, Vt.anchor = Nt.anchor, Mt = mt && Math.abs(Nt.centre.x - Xt.width / 2) < 1, et(Vt.id, Vt.to);
            else if (Vt.away) Jt(Vt.away);
            else {
              var Wt;
              Jt(Nt.anchor), Vt.away = null !== (Wt = Ct(Vt, jt(Vt.id))) && void 0 !== Wt ? Wt : Nt.anchor, Jt(Vt.away)
            }
            null === Kt || void 0 === Kt || Kt.classList.add("Shown"), null === Kt || void 0 === Kt || Kt.classList.toggle("Snapped", Mt), (tt => {
              const et = Ot.current;
              if (et) {
                const {
                  skew: Vt,
                  box: Ot
                } = tt.anchor;
                et.style.left = Ot.left * Ht + "px", et.style.top = Ot.top * Ht + "px", et.style.width = (Ot.right - Ot.left) * Ht + "px", et.style.height = (Ot.bottom - Ot.top) * Ht + "px", et.style.translate = `${((tt.to.dx-tt.from.dx)*Xt.width+Vt.x)*Ht}px ${((tt.to.dy-tt.from.dy)*Xt.height+Vt.y)*Ht}px`
              }
            })(Vt)
          },
          onPointerUp: tt => {
            ut(tt, !0)
          },
          onPointerCancel: tt => {
            ut(tt, !1)
          }
        }
      }
    }
    var XV = Vt(9126);

    function QV(tt, et) {
      return Object.keys(tt).filter((tt => tt !== et)).map((et => tt[et]))
    }

    function lV(tt) {
      return tt.map((tt => {
        let {
          id: et,
          box: Vt
        } = tt;
        return `${et}:${Vt.left},${Vt.top},${Vt.right},${Vt.bottom}`
      })).join(";")
    }

    function EV(tt) {
      const et = [],
        Vt = et => (0, It.P)(et) && !tt.documentElement.classList.contains((0, Ee.E)(et));
      for (const dt of tt.querySelectorAll(`[${pt}]`)) {
        const tt = Vt(dt.getAttribute(pt)) ? dt.querySelector(".ScaleOnHover") : null,
          Ot = (null !== tt && void 0 !== tt ? tt : dt).getBoundingClientRect();
        (Ot.width > 0 || Ot.height > 0) && et.push({
          id: dt.getAttribute(pt),
          box: (0, Rt.f)(Ot)
        })
      }
      const Ot = tt => (0, Rt.G)(et.filter((et => {
          let {
            id: Vt
          } = et;
          return tt(Vt)
        })).map((tt => {
          let {
            box: et
          } = tt;
          return et
        }))),
        qt = {};
      for (const dt of new Set(et.map((tt => tt.id)))) qt[dt] = Ot((tt => tt === dt));
      for (const [dt, jt] of rt) {
        const tt = Ot((tt => jt.has(tt)));
        tt && (qt[dt] = tt)
      }
      const Dt = tt.querySelector(".TouchInventoryKeys"),
        mt = Dt ? (0, Rt.f)(Dt.getBoundingClientRect()) : null;
      return {
        boxes: qt,
        pieces: et,
        pairHome: mt
      }
    }

    function fV(tt, et, Vt) {
      const Ot = et.right - et.left,
        qt = et.bottom - et.top;
      return Te(tt, "cluster", (et => {
        const Dt = Vt => {
            et(Vt);
            const Ot = [...tt.querySelectorAll(`[${pt}]:not(.HudPreviewGhost)`)].filter((tt => Lt.has(tt.getAttribute(pt)))).map((tt => (0, Rt.f)(tt.getBoundingClientRect()))),
              qt = (0, Rt.G)(Ot);
            return qt ? {
              w: qt.right - qt.left,
              h: qt.bottom - qt.top
            } : null
          },
          mt = tt => !tt || tt.w <= Ot && tt.h <= qt,
          dt = Dt(1),
          jt = Dt(It.g);
        if (!dt || mt(jt)) return It.g;
        const Ht = (tt, et, Vt) => et > tt ? 1 + (Vt - tt) * (It.g - 1) / (et - tt) : It.g;
        let Xt = Math.floor(Math.min(It.g, Ht(dt.w, jt.w, Ot), Ht(dt.h, jt.h, qt)) / Vt + 1e-6) * Vt;
        for (; Xt > 1 && !mt(Dt(Xt));) Xt = Math.round(100 * (Xt - Vt)) / 100;
        return Math.max(1, Xt)
      }))
    }

    function wV(tt) {
      ie(document, tt, {
        keysAbove: !1
      });
      const et = parseFloat(getComputedStyle(tt.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        Vt = Number.isFinite(et) && et < 0;
      return ie(document, tt, {
        keysAbove: Vt
      }), (0, XV.b)(tt), Vt
    }

    function yV(tt) {
      const et = tt.querySelector(".TouchInventoryKey.ShopKey");
      return null !== et && "1" === getComputedStyle(et).getPropertyValue("--touch-shop-above").trim()
    }

    function NV(tt, et) {
      let {
        layout: Vt,
        orientation: Ot,
        viewport: Dt,
        replicaKey: mt,
        joystickFixed: dt,
        busy: jt
      } = et;
      const [Ht, Xt] = (0, qt.useState)(null), [Qt, lt] = (0, qt.useState)({
        boxes: {},
        pieces: []
      }), [Et, ft] = (0, qt.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [wt, yt] = (0, qt.useState)(!1), [Nt, Mt] = (0, qt.useState)(!1), [bt, Jt] = (0, qt.useState)(!1), Ct = (0, qt.useCallback)((tt => {
        Mt(tt), tt && Jt(!0)
      }), []), ut = Vt.hudLayouts[Ot].hudSafe;
      (0, qt.useLayoutEffect)((() => {
        const et = tt.current.contentDocument;
        et.open(), et.write("<!DOCTYPE html><html><head></head><body></body></html>"), et.close(), Xt(et)
      }), [tt]);
      const Kt = (0, qt.useCallback)((() => {
          Ht && ((0, Qe.u)(Ht), lt(EV(Ht)), ft(function(tt, et) {
            const Vt = xe(tt),
              [Ot, qt, Dt, mt] = et ? (0, Ee.w)(et, window.innerWidth, window.innerHeight, Vt) : Vt;
            return {
              top: Ot,
              right: qt,
              bottom: Dt,
              left: mt
            }
          }(Ht, ut)))
        }), [Ht, ut]),
        ht = (0, qt.useCallback)((() => {
          Ht && yt(wV(Ht))
        }), [Ht]),
        vt = (0, qt.useRef)((() => {}));
      return vt.current = () => {
        ht(), jt() || Kt()
      }, (0, qt.useLayoutEffect)((() => {
        if (Ht) return Ae(document, Ht, (() => {
          vt.current()
        }), Ct)
      }), [Ht, Ct]), (0, qt.useLayoutEffect)(ht, [ht, Dt]), (0, qt.useLayoutEffect)((() => {
        Ht && (ie(document, Ht, {
          keysAbove: wt
        }), Be(document, Ht, Vt, Ot, dt), ht(), Kt())
      }), [Ht, Vt, Ot, wt, mt, dt, Dt, Kt, ht]), (0, qt.useEffect)((() => {
        var tt;
        if (!Ht) return;
        const et = new ResizeObserver((() => {
          jt() || Kt()
        }));
        for (const Vt of Ht.querySelectorAll(`[${pt}]`)) et.observe(Vt);
        return null === (tt = Ht.fonts) || void 0 === tt || tt.ready.then(Kt), () => {
          et.disconnect()
        }
      }), [Ht, Kt, jt, mt]), {
        doc: Ht,
        boxes: Qt.boxes,
        pieces: Qt.pieces,
        insets: Et,
        keysAbove: wt,
        ready: Nt,
        settled: bt
      }
    }
    const aV = ["Above", "Below", "Left", "Right"];

    function MV(tt, et, Vt, Ot, qt) {
      const Dt = Vt[tt],
        mt = (Dt.left + Dt.right) / 2,
        dt = (Dt.top + Dt.bottom) / 2,
        jt = (7.5 * et.length + 14) / Ot,
        Ht = 18 / Ot,
        Xt = {
          Above: {
            left: mt - jt / 2,
            top: Dt.top - Ht,
            right: mt + jt / 2,
            bottom: Dt.top
          },
          Below: {
            left: mt - jt / 2,
            top: Dt.bottom,
            right: mt + jt / 2,
            bottom: Dt.bottom + Ht
          },
          Left: {
            left: Dt.left - jt,
            top: dt - Ht / 2,
            right: Dt.left,
            bottom: dt + Ht / 2
          },
          Right: {
            left: Dt.right,
            top: dt - Ht / 2,
            right: Dt.right + jt,
            bottom: dt + Ht / 2
          }
        },
        Qt = QV(Vt, tt),
        lt = {
          left: 0,
          top: 0,
          right: qt.width,
          bottom: qt.height
        };
      return aV[(0, Rt.q)(aV.map((tt => Xt[tt])), Qt, {
        bounds: lt
      })]
    }

    function bV() {
      const [tt, et] = (0, He.c)();
      return (0, qt.useMemo)((() => ({
        width: tt,
        height: et
      })), [tt, et])
    }

    function JV(tt) {
      var et;
      const {
        layout: Vt,
        orientation: Dt,
        selected: mt,
        onSelect: dt,
        onMove: Ht,
        canMove: Xt,
        actionButtons: Qt,
        joystickFixed: lt,
        presence: Et,
        keyNames: wt,
        maxHeight: yt,
        fill: Nt = !1,
        apiRef: Mt
      } = tt, {
        t: bt
      } = (0, Ot.H)(), Jt = bV(), ut = (null !== (et = (0, ft.i)("maxAuraLevel")) && void 0 !== et ? et : 0) > 0, Kt = Vt.hudLayouts[Dt], ht = (0, qt.useRef)(null), vt = (0, qt.useRef)(null), Wt = (0, qt.useRef)(null), St = (0, qt.useRef)(null), Pt = (0, qt.useRef)(null), Zt = (0, qt.useRef)(null), Lt = (0, Xe.d)(ht).width, kt = Nt ? 1 : Lt > 0 ? (0, Rt.x)(Lt, Jt.width, Jt.height, yt) : 0, Gt = (0, qt.useRef)((() => !1)), Ut = (0, qt.useCallback)((() => Gt.current()), []), At = `${Qt}:${lt}:${ut}`, {
        doc: it,
        boxes: Yt,
        pieces: Bt,
        insets: pt,
        keysAbove: Tt,
        ready: gt,
        settled: st
      } = NV(Wt, {
        layout: Vt,
        orientation: Dt,
        viewport: Jt,
        replicaKey: At,
        joystickFixed: lt,
        busy: Ut
      }), nt = (0, qt.useCallback)((tt => {
        it && Be(document, it, tt, Dt, lt)
      }), [it, Dt, lt]), te = (0, qt.useCallback)((tt => {
        if (!it || !st) return null;
        nt(tt);
        const et = wV(it),
          Vt = function(tt, et) {
            let {
              boxes: Vt,
              pieces: Ot,
              pairHome: qt
            } = tt;
            const Dt = Ot.find((tt => Ft.has(tt.id)));
            if (!Dt || !qt) return Vt;
            const mt = (0, Rt.d)(qt),
              dt = et(Dt.id),
              jt = tV(Dt.box) / dt / 2,
              Ht = (Dt.box.bottom - Dt.box.top) / dt / 2;
            return {
              ...Vt,
              inventory: {
                left: mt.x - jt,
                top: mt.y - Ht,
                right: mt.x + jt,
                bottom: mt.y + Ht
              }
            }
          }(EV(it), (et => (0, It.w)(tt, Dt, et)[2]));
        return {
          boxes: Vt,
          keysAbove: et,
          shopAlone: yV(it)
        }
      }), [it, st, nt, Dt]), ee = (0, qt.useRef)(null), Ve = (0, qt.useRef)(null), Oe = (0, qt.useRef)(Vt);
      Oe.current = Vt;
      const qe = (0, qt.useCallback)((() => {
        null !== ee.current && (cancelAnimationFrame(ee.current), ee.current = null)
      }), []);
      (0, qt.useEffect)((() => qe), [Vt, qe]);
      const De = (0, qt.useRef)(-1 / 0),
        {
          lockable: me
        } = tt,
        je = (0, qt.useCallback)((tt => {
          if (nt(tt), De.current = performance.now(), !st || 0 === Vt.hudLayouts[Dt].hudLocked.length) return;
          const et = Vt;
          qe(), ee.current = requestAnimationFrame((() => {
            var Vt;
            if (ee.current = null, Oe.current !== et) return;
            const Ot = (null === (Vt = Ve.current) || void 0 === Vt ? void 0 : Vt.from) === et ? Ve.current.measured : te(et);
            Ot && (Ve.current = {
              from: et,
              measured: Ot
            }), nt(Ot ? VV(et, tt, Dt, Jt, te, {
              canKeep: me,
              passes: 1,
              before: Ot
            }) : tt)
          }))
        }), [nt, st, Vt, Dt, Jt, te, me, qe]),
        He = HV({
          preview: (tt, et) => {
            et ? je((0, It.db)(Vt, Dt, tt, et)) : (qe(), nt(Vt))
          },
          stageRef: vt,
          ringRef: St,
          centreLineRef: Pt,
          snapCentre: Vt.hudSnapCentre,
          ready: st,
          measure: tt => {
            const et = it && gt ? EV(it).boxes[tt] : void 0;
            return et && (0, Rt.h)(et, Jt.width, Jt.height) ? et : null
          },
          k: kt,
          viewport: Jt,
          boxes: Yt,
          pieces: Bt,
          selected: mt,
          insets: pt,
          layout: Kt,
          canMove: Xt,
          onSelect: dt,
          onMove: (tt, et, Vt) => {
            qe(), Ht(tt, et, Vt)
          }
        });
      (0, qt.useLayoutEffect)((() => {
        Gt.current = He.busy
      }), [He.busy]);
      const fe = (0, qt.useRef)([]),
        we = (0, qt.useRef)(Kt.hudElements);
      (0, qt.useEffect)((() => {
        for (const qt of Object.keys(Kt.hudElements)) {
          var tt, et, Vt, Ot;
          (null !== (tt = null === (et = Kt.hudElements[qt]) || void 0 === et ? void 0 : et[2]) && void 0 !== tt ? tt : 1) > (null !== (Vt = null === (Ot = we.current[qt]) || void 0 === Ot ? void 0 : Ot[2]) && void 0 !== Vt ? Vt : 1) && Xt(qt) && !(0, Qe.t)(qt, Kt.hudElements[qt]) && fe.current.push(...ot(qt, Tt, Xt))
        }
        we.current = Kt.hudElements
      }), [Kt.hudElements, Xt, Tt]), (0, qt.useEffect)((() => {
        if (!gt) return;
        const tt = (0, Rt.B)(Jt.width, Jt.height, pt);
        for (const Vt of ((tt, et, Vt, Ot) => {
            const qt = tt => {
              const qt = et[tt],
                {
                  x: Dt,
                  y: mt
                } = qt && Ot(tt) ? (0, Rt.C)(qt, Vt) : {
                  x: 0,
                  y: 0
                };
              return qt && {
                left: qt.left + Dt,
                top: qt.top + mt,
                right: qt.right + Dt,
                bottom: qt.bottom + mt
              }
            };
            return tt.flatMap((tt => {
              const Dt = et[tt];
              if ("inventory" !== tt || !Dt || Dt.right - Dt.left <= Vt.right - Vt.left && Dt.bottom - Dt.top <= Vt.bottom - Vt.top) return [tt];
              const [mt, dt] = [qt("shop"), qt("bag")];
              return mt && dt && !(0, Rt.k)(mt, dt, 0) ? ["shop", "bag"].filter(Ot) : [tt]
            }))
          })(fe.current.splice(0), Yt, tt, Xt)) {
          const Ot = Yt[Vt];
          if (!Ot || He.busy() || !(0, Rt.h)(Ot, Jt.width, Jt.height)) continue;
          const qt = (0, Rt.C)(Ot, tt);
          if (0 !== qt.x || 0 !== qt.y) {
            var et;
            const [tt, Ot] = null !== (et = Kt.hudElements[Vt]) && void 0 !== et ? et : [0, 0];
            Ht(Vt, tt + qt.x / Jt.width, Ot + qt.y / Jt.height)
          }
        }
      }), [Yt, gt]), (0, qt.useImperativeHandle)(Mt, (() => ({
        setScale: (tt, et) => {
          je((0, It.db)(Vt, Dt, tt, {
            scale: et
          }))
        },
        setOpacity: tt => {
          nt({
            ...Vt,
            hudKeyOpacity: tt
          })
        },
        keepLocks: (tt, et) => (qe(), VV(tt, et, Dt, Jt, te, {
          canKeep: me
        })),
        setSafe: tt => {
          const et = (0, Ee.w)(tt, Jt.width, Jt.height, xe(null !== it && void 0 !== it ? it : document));
          je((0, It.hb)(Vt, Dt, tt)), Zt.current && (Zt.current.style.inset = et.map((tt => tt * kt + "px")).join(" "))
        }
      })), [nt, je, te, qe, me, it, Vt, Dt, Jt, kt]);
      const ye = new Set(Object.keys(Kt.hudElements).filter((tt => (0, It.q)(Kt.hudElements, tt)))),
        Ne = mt ? Yt[mt] : void 0,
        ae = mt ? xt(mt, Qt, bt, wt) : "",
        Me = (0, Le.g)(Jt.width, Jt.height),
        be = mt ? function(tt, et, Vt, Ot) {
          const qt = tt => zt(tt).some((tt => (0, It.q)(Vt.hudElements, tt) || (0, Qe.s)(tt, Vt, Ot)));
          if (qt(tt)) return [];
          const Dt = tt => {
              var et, Ot;
              return "bag" === tt && 1 !== (null !== (et = null === (Ot = Vt.hudElements.shop) || void 0 === Ot ? void 0 : Ot[2]) && void 0 !== et ? et : 1) || zt(tt).some((tt => void 0 !== Vt.hudElements[tt]))
            },
            mt = rt.get(tt),
            dt = et.filter((et => {
              let {
                id: Vt
              } = et;
              return mt ? mt.has(Vt) && !qt(Vt) : Vt === tt
            })),
            jt = new Set;
          for (const Ht of et) Ht.id === tt || null !== mt && void 0 !== mt && mt.has(Ht.id) || jt.has(Ht.id) || qt(Ht.id) || dt.some((tt => {
            let {
              id: et,
              box: Ot
            } = tt;
            return !le(et, Ht.id, Vt) && (Dt(et) || Dt(Ht.id)) && (0, Rt.k)(Ot, Ht.box, 2)
          })) && jt.add(Ht.id);
          return [...jt]
        }(mt, Bt, Kt, Me) : [],
        Je = new Set((0, Qe.r)(Kt.hudElements)),
        Ce = (0, Qe.z)(Kt, (0, Qe.y)(Et.rowIcons)).state,
        ue = be.join(),
        Ke = (0, qt.useRef)(tt.onReady);
      Ke.current = tt.onReady, (0, qt.useEffect)((() => {
        var tt;
        null === (tt = Ke.current) || void 0 === tt || tt.call(Ke, st)
      }), [st]);
      const he = (0, qt.useRef)(tt.onMeasured);
      (0, qt.useLayoutEffect)((() => {
        he.current = tt.onMeasured
      }));
      const ve = (0, qt.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        We = [lV(Bt), Jt.width, Jt.height, pt.top, pt.right, pt.bottom, pt.left, gt, At].join("|");
      (0, qt.useEffect)((() => {
        const tt = ue ? ue.split(",") : [],
          et = () => {
            var et;
            null === (et = he.current) || void 0 === et || et.call(he, Yt, tt, ve.current.caps)
          };
        let Vt;
        const Ot = () => {
          const tt = Oe.current;
          if (!it || tt === ve.current.layout && We === ve.current.input) return !1;
          const qt = De.current + 250 - performance.now();
          return tt === ve.current.layout && (qt > 0 || Ut()) ? (Vt = setTimeout((() => {
            Ot() && et()
          }), Math.max(qt, 62.5)), !1) : (ve.current = {
            layout: tt,
            input: We,
            caps: {
              hotbar: ge(it, Pe),
              cluster: fV(it, (0, Rt.B)(Jt.width, Jt.height, pt), Pe)
            }
          }, !0)
        };
        return Ot(), et(), () => {
          clearTimeout(Vt)
        }
      }), [Yt, ue, it, Jt, pt, We, Ut]);
      const Se = tt => ({
        left: tt.left * kt,
        top: tt.top * kt,
        width: (tt.right - tt.left) * kt,
        height: (tt.bottom - tt.top) * kt
      });
      return (0, Ct.jsx)("div", {
        ref: ht,
        className: jt()("HudPreviewBox", {
          Fill: Nt
        }),
        style: {
          height: Jt.height * kt
        },
        children: (0, Ct.jsxs)("div", {
          ref: vt,
          className: "HudPreviewStage",
          style: {
            width: Jt.width * kt,
            height: Jt.height * kt
          },
          children: [(0, Ct.jsx)("iframe", {
            ref: Wt,
            className: "HudPreviewFrame",
            title: bt("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: Jt.width,
              height: Jt.height,
              transform: `scale(${kt})`
            }
          }), it && (0, de.createPortal)((0, Ct.jsx)(Re, {
            presence: Et,
            portraitPhone: Me,
            hidden: ye,
            actionButtons: Qt,
            joystickFixed: lt,
            keysAbove: Tt,
            auraBar: ut,
            trayState: Ce,
            moved: Je
          }), it.body), (0, Ct.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...He.handlers,
            children: [(0, Ct.jsx)("div", {
              ref: Zt,
              className: "HudPreviewSafeZone",
              style: {
                top: pt.top * kt,
                right: pt.right * kt,
                bottom: pt.bottom * kt,
                left: pt.left * kt
              }
            }), Bt.map(((tt, et) => {
              let {
                id: Vt,
                box: Ot
              } = tt;
              return (0, Ct.jsx)("div", {
                className: "HudPreviewHandle",
                style: Se((0, Rt.o)(Ot, 40 / kt))
              }, `${Vt}:${et}`)
            })), Kt.hudLocked.map((tt => {
              const et = Yt[tt];
              return et && (0, Ct.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: et.right * kt,
                  top: et.top * kt
                },
                children: (0, Ct.jsx)(ct.b, {
                  name: "lock"
                })
              }, tt)
            })), (0, Ct.jsx)("div", {
              ref: Pt,
              className: "HudPreviewCentreLine",
              style: {
                left: Jt.width / 2 * kt
              }
            }), mt && Ne && (0, Ct.jsx)("div", {
              ref: St,
              className: jt()("HudPreviewRing", {
                Fixed: !Xt(mt),
                Overlap: be.length > 0
              }),
              style: Se(Ne),
              children: (0, Ct.jsx)("span", {
                className: jt()("HudPreviewRingLabel", MV(mt, ae, Yt, kt, Jt)),
                children: ae
              })
            })]
          })]
        })
      })
    }

    function CV(tt, et) {
      (0, qt.useEffect)((() => {
        var Vt;
        null === (Vt = tt.current) || void 0 === Vt || Vt.toggleAttribute("inert", et)
      }), [tt, et])
    }
    const uV = "hudFullScreen";

    function KV(tt) {
      let {
        onScale: et,
        onHidden: Vt,
        onReset: Dt,
        locked: mt,
        lockable: dt,
        onLocked: jt,
        onClose: Xt,
        ...Qt
      } = tt;
      const {
        t: lt
      } = (0, Ot.H)(), Et = (0, qt.useRef)(null);
      (0, je.w)("popup", Et, Xt),
      function(tt) {
        const et = (0, qt.useRef)(tt);
        et.current = tt, (0, qt.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [uV]: !0
          }, "");
          let tt = !1;
          const Vt = () => {
            tt = !0, et.current()
          };
          return window.addEventListener("popstate", Vt), () => {
            var et;
            window.removeEventListener("popstate", Vt), !tt && null !== (et = window.history.state) && void 0 !== et && et[uV] && window.history.back()
          }
        }), [])
      }(Xt), (0, qt.useEffect)((() => {
        function tt(tt) {
          "Escape" === tt.key && (tt.stopPropagation(), Xt())
        }
        return window.addEventListener("keydown", tt, !0), () => {
          window.removeEventListener("keydown", tt, !0)
        }
      }), [Xt]);
      const {
        selected: ft
      } = Qt, wt = (0, qt.useRef)(null), yt = (0, qt.useRef)(null), [Nt, Mt] = (0, qt.useState)(!1);
      CV(yt, !Nt);
      const [bt, Jt] = (0, qt.useState)(null), [ut, Kt] = (0, qt.useState)([]), [ht, vt] = Ie(), Wt = (0, qt.useRef)(Qt.selected);
      Wt.current = Qt.selected;
      const St = (0, qt.useRef)({}),
        ct = (0, qt.useCallback)((() => {
          const tt = wt.current;
          tt && Jt(function(tt, et, Vt) {
            var Ot;
            const {
              innerWidth: qt,
              innerHeight: Dt
            } = window, mt = tt.offsetWidth, dt = tt.offsetHeight, jt = Math.max(pe()[0], 6), Ht = [];
            for (const lt of [jt, .2 * Dt, .5 * Dt - dt / 2, .33 * Dt])
              for (const tt of [.5, .3, .7]) Ht.push({
                left: Math.max(0, Math.min(qt - mt - 6, Math.max(6, qt * tt - mt / 2))),
                top: lt
              });
            const Xt = Ht.map((tt => ({
                left: tt.left - 6,
                top: tt.top - 6,
                right: tt.left + mt + 6,
                bottom: tt.top + dt + 6
              }))),
              Qt = QV(et, Vt);
            return Ht[(0, Rt.q)(Xt, Qt, {
              avoid: Vt && null !== (Ot = et[Vt]) && void 0 !== Ot ? Ot : null
            })]
          }(tt, St.current, Wt.current))
        }), []),
        It = (0, qt.useCallback)(((tt, et, Vt) => {
          Kt(et), vt(Vt), St.current = tt, ct()
        }), [ct, vt]);
      return (0, qt.useLayoutEffect)(ct, [Qt.selected, ct]), (0, de.createPortal)((0, Ct.jsxs)("div", {
        ref: Et,
        className: "HudFullScreenEditor",
        children: [(0, Ct.jsx)(JV, {
          ...Qt,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: It,
          onReady: Mt,
          lockable: dt
        }), (0, Ct.jsxs)("div", {
          ref: wt,
          className: "HudFullScreenToolbar",
          style: null === bt ? void 0 : {
            left: bt.left,
            top: bt.top,
            transform: "none"
          },
          children: [(0, Ct.jsx)("div", {
            ref: yt,
            className: "HudFullScreenControls",
            children: (0, Ct.jsx)(Ze, {
              selected: ft,
              layout: Qt.layout.hudLayouts[Qt.orientation],
              actionButtons: Qt.actionButtons,
              keyNames: Qt.keyNames,
              overlaps: ut,
              scaleCaps: ht,
              onScale: et,
              onHidden: Vt,
              onReset: Dt,
              locked: mt,
              lockable: dt,
              onLocked: jt,
              joystickFixed: Qt.joystickFixed
            })
          }), (0, Ct.jsx)(Ht.f, {
            className: "HudFullScreenDone",
            onClick: Xt,
            padDefaultFocus: !0,
            children: lt("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const hV = tt => `${Math.round(100*tt)}%`;

    function vV(tt) {
      let {
        info: et,
        tuple: Vt,
        props: qt
      } = tt;
      const {
        t: Dt
      } = (0, Ot.H)();
      return (0, Ct.jsx)(Et.f, {
        name: Dt("hudLayout:size"),
        min: It.h,
        max: It.g,
        step: Pe,
        initValue: Vt[2],
        disabled: qt.locked.has(et.id),
        selectableMax: qt.scaleCaps[et.id],
        cappedNote: Dt("hudLayout:sizeCapped"),
        format: hV,
        onChange: tt => {
          qt.onScalePreview(et.id, tt)
        },
        onChangeComplete: tt => {
          qt.onScale(et.id, tt)
        }
      })
    }

    function WV(tt) {
      const {
        t: et
      } = (0, Ot.H)(), {
        present: Vt,
        elements: Dt,
        selected: mt,
        onSelect: dt,
        onHidden: Ht,
        onReset: Xt,
        note: Qt,
        actionButtons: lt,
        keyNames: Et,
        sizeBesidePreview: ft,
        locked: wt,
        lockable: yt,
        onLocked: Nt
      } = tt, {
        rowIconsOpen: Mt,
        onRowIconsOpen: bt
      } = tt, Jt = (0, qt.useRef)(null), ut = null !== mt && (Mt || !(0, It.P)(mt));
      return (0, qt.useEffect)((() => {
        var tt;
        const et = mt ? null === (tt = Jt.current) || void 0 === tt ? void 0 : tt.querySelector(`[data-hud-row="${mt}"]`) : null;
        if (!et) return;
        const Vt = et.closest(".SettingsMenuRight"),
          Ot = performance.now();
        let qt = null;
        const Dt = () => {
            clearInterval(jt), null === Vt || void 0 === Vt || Vt.removeEventListener("scroll", dt)
          },
          dt = () => {
            DV() || Dt()
          },
          jt = setInterval((() => {
            const tt = performance.now();
            tt - Ot > 1500 ? Dt() : DV() ? qt = null : null === qt ? qt = tt : tt - qt >= 150 && (Dt(), function(tt) {
              var et;
              const Vt = tt.closest(".SettingsMenuRight"),
                Ot = null === (et = tt.closest(".HudLayoutSettings")) || void 0 === et ? void 0 : et.querySelector(".HudLayoutPreviewBox");
              if (!Vt || !Ot) return;
              const qt = Ot.getBoundingClientRect().bottom + 8,
                Dt = Vt.getBoundingClientRect().bottom - 8,
                mt = tt.getBoundingClientRect();
              mt.top < qt ? Vt.scrollBy({
                top: mt.top - qt,
                behavior: "smooth"
              }) : mt.bottom > Dt && Vt.scrollBy({
                top: Math.min(mt.bottom - Dt, mt.top - qt),
                behavior: "smooth"
              })
            }(et))
          }), 50);
        return null === Vt || void 0 === Vt || Vt.addEventListener("scroll", dt, {
          passive: !0
        }), Dt
      }), [mt, ut]), (0, Ct.jsx)("div", {
        ref: Jt,
        className: "SettingBoxGroup HudElementList",
        children: Yt.filter((tt => Vt.has(tt.id) && (Mt || !(0, It.P)(tt.id)))).map((Vt => {
          const Ot = ((tt, et) => {
              var Vt;
              return null !== (Vt = tt[et]) && void 0 !== Vt ? Vt : It.l
            })(Dt, Vt.id),
            qt = (0, It.q)(Dt, Vt.id),
            Jt = Vt.id === mt,
            ut = Vt.scale && !ft,
            Kt = Qt(Vt.id, Jt);
          return (0, Ct.jsxs)("div", {
            "data-hud-row": Vt.id,
            className: jt()("SettingBox HudElementRow", {
              Open: Jt,
              Hidden: qt,
              Child: void 0 !== Vt.parent,
              Grandchild: Gt(Vt.id).length > 1
            }),
            children: [(0, Ct.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, Ct.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": ut ? Jt : void 0,
                onClick: () => {
                  dt(Vt.id)
                },
                children: (0, Ct.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [xt(Vt.id, lt, et, Et), Vt.scale && 1 !== Ot[2] && !(Jt && ut) && (0, Ct.jsxs)(Ct.Fragment, {
                    children: [" ", (0, Ct.jsx)("span", {
                      className: "HudElementRowSize",
                      children: hV(Ot[2])
                    })]
                  }), ut && (0, Ct.jsxs)(Ct.Fragment, {
                    children: [" ", (0, Ct.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, Ct.jsx)(te, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Vt.id,
                actionButtons: lt,
                keyNames: Et,
                locked: wt.has(Vt.id),
                lockable: yt(Vt.id),
                onLocked: Nt
              }), "menu" === Vt.id && (0, Ct.jsx)(ee, {
                className: "HudElementRowIcon",
                open: Mt,
                name: xt(Vt.id, lt, et, Et),
                onToggle: bt
              }), "menu" !== Vt.id && (0, Ct.jsx)(st, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Vt.id,
                elements: Dt,
                actionButtons: lt,
                keyNames: Et,
                onHidden: Ht
              }), (0, Ct.jsx)(nt, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: wt.has(Vt.id),
                id: Vt.id,
                elements: Dt,
                actionButtons: lt,
                keyNames: Et,
                onReset: Xt
              })]
            }), Jt && ut && (0, Ct.jsx)(vV, {
              info: Vt,
              tuple: Ot,
              props: tt
            }), Kt && (0, Ct.jsx)("div", {
              className: "HudElementNote",
              children: Kt
            })]
          }, Vt.id)
        }))
      })
    }

    function SV(tt) {
      let {
        preview: et,
        quick: Vt,
        onFullScreen: Dt,
        resting: mt,
        onSidePanel: dt
      } = tt;
      const {
        t: jt
      } = (0, Ot.H)(), Xt = bV(), Qt = (0, qt.useRef)(null), {
        width: lt
      } = (0, Xe.d)(Qt), Et = Math.floor(Xt.width * Math.min(1, et.maxHeight / Xt.height)), ft = lt - Et - 12, wt = ft >= 130, yt = lt > 0;
      (0, qt.useEffect)((() => {
        yt && dt(wt)
      }), [yt, wt, dt]);
      const Nt = (0, Rt.x)(wt ? Et : lt, Xt.width, Xt.height, et.maxHeight),
        Mt = mt ? (0, Ct.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: Xt.height * Nt
          }
        }) : (0, Ct.jsx)(JV, {
          ...et
        }),
        bt = tt => (0, Ct.jsxs)(Ht.Q, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: jt("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: Dt,
          children: [(0, Ct.jsx)(ct.b, {
            name: "expand"
          }), tt && (0, Ct.jsx)("span", {
            children: jt("hudLayout:fullScreen")
          })]
        });
      return (0, Ct.jsxs)("div", {
        ref: Qt,
        className: "SettingBox HudLayoutPreviewBox",
        children: [lt > 0 && wt && (0, Ct.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, Ct.jsx)("div", {
            style: {
              width: Et
            },
            children: Mt
          }), (0, Ct.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, Ct.jsx)(Ze, {
              selected: et.selected,
              ...Vt,
              joystickFixed: et.joystickFixed,
              extra: bt(!et.selected || ft >= 278)
            })
          })]
        }), lt > 0 && !wt && (0, Ct.jsxs)(Ct.Fragment, {
          children: [Mt, (0, Ct.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: bt(!1)
          })]
        })]
      })
    }
    var cV = Vt(2559),
      RV = Vt(4537),
      IV = Vt(2528),
      PV = Vt(2478);
    const ZV = tt => {
      const et = Ee.s * ("sides" === tt ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(et / 2))
    };

    function LV(tt, et, Vt) {
      const [Ot, qt, Dt, mt] = tt;
      return "sides" === et ? [Ot, Vt, Dt, Vt] : [Vt, qt, Vt, mt]
    }
    const FV = [null, null, null, null],
      kV = tt => `${tt}px`;

    function GV(tt) {
      let {
        safe: et,
        onPreview: Vt,
        onCommit: Dt
      } = tt;
      const {
        t: mt
      } = (0, Ot.H)(), dt = (0, Ee.w)(null !== et && void 0 !== et ? et : FV, window.innerWidth, window.innerHeight, xe(document).map(Math.round)), jt = (0, qt.useRef)(null !== et && void 0 !== et ? et : FV);
      jt.current = null !== et && void 0 !== et ? et : FV;
      const Xt = tt => {
        const et = Math.min(ZV(tt), "sides" === tt ? Math.max(dt[1], dt[3]) : Math.max(dt[0], dt[2]));
        return (0, Ct.jsx)(Et.f, {
          name: mt("sides" === tt ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: ZV(tt),
          step: 2,
          initValue: et,
          format: kV,
          onChange: et => {
            Vt(LV(jt.current, tt, et))
          },
          onChangeComplete: Ot => {
            if (Ot === et) return void Vt(jt.current);
            const qt = LV(jt.current, tt, Ot);
            jt.current = qt, Dt(qt), (0, ht.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: tt
            })
          }
        })
      };
      return (0, Ct.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, Ct.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, Ct.jsx)("div", {
            children: mt("hudLayout:safeZone")
          }), (0, Ct.jsx)(Ht.Q, {
            active: null === et,
            pressed: null === et,
            onClick: () => {
              Dt(null)
            },
            children: mt("hudLayout:safeZoneAuto")
          })]
        }), Xt("sides"), Xt("ends")]
      })
    }

    function zV() {
      const {
        t: tt
      } = (0, Ot.H)(), et = (0, It.$)(), {
        clientEscMenuOptions: Vt
      } = (0, Xt.k)(["clientEscMenuOptions"]), Dt = (0, cV.k)(), mt = et.hudLayouts[Dt], [dt, jt] = (0, qt.useState)(null), {
        rowIconsOpen: Qt,
        onRowIconsOpen: lt,
        select: ft
      } = function(tt, et) {
        const [Vt, Ot] = (0, qt.useState)((() => It.y.some((et => void 0 !== tt.hudElements[et] || tt.hudLocked.includes(et))))), Dt = (0, qt.useCallback)((tt => {
          et(tt), (0, It.P)(tt) && Ot(!0)
        }), [et]);
        return {
          rowIconsOpen: Vt,
          onRowIconsOpen: Ot,
          select: Dt
        }
      }(mt, jt), [wt, yt] = (0, qt.useState)([]), [Nt, Mt] = (0, qt.useState)(null), [bt, Jt] = Ie(), ut = (0, qt.useCallback)(((tt, et, Vt) => {
        yt(et), Jt(Vt);
        const Ot = Object.keys(tt);
        Mt((tt => (null === tt || void 0 === tt ? void 0 : tt.size) === Ot.length && Ot.every((et => tt.has(et))) ? tt : new Set(Ot)))
      }), [Jt]), {
        gameState: Kt
      } = (0, Xt.k)(["gameState"]), Wt = (0, IV.j)(), St = (0, PV.o)(), [ct] = (0, qt.useState)((() => {
        var tt, et, Vt, Ot;
        return "inGame" === Kt ? (0, we.t)(document, Wt, {
          rightOfCamera: null !== (tt = null === (et = St.rightOfCamera) || void 0 === et ? void 0 : et.icon) && void 0 !== tt ? tt : null,
          leftEnd: null !== (Vt = null === (Ot = St.leftEnd) || void 0 === Ot ? void 0 : Ot.icon) && void 0 !== Vt ? Vt : null
        }) : we.d
      })), Rt = (0, qt.useRef)(null), Pt = (0, qt.useRef)(null), Zt = function(tt) {
        const [et, Vt] = (0, qt.useState)((() => .4 * window.innerHeight));
        return (0, qt.useLayoutEffect)((() => {
          var et;
          const Ot = null === (et = tt.current) || void 0 === et ? void 0 : et.closest(".SettingsMenuRight");
          if (!Ot) return;
          const qt = () => {
            const tt = Ot.clientHeight < oV ? .4 : .5;
            Vt(Math.max(80, Ot.clientHeight * tt - 24))
          };
          qt();
          const Dt = new ResizeObserver(qt);
          return Dt.observe(Ot), () => {
            Dt.disconnect()
          }
        }), [tt]), et
      }(Pt), Lt = (0, RV.t)(Vt.joystickMode), Ft = Vt.touchActionButtons, Gt = (0, qt.useMemo)((() => (0, we.r)(ct, Ft)), [ct, Ft]), zt = (0, qt.useMemo)((() => new Set((0, we.n)(ct, Ft).map((tt => we.f[tt])))), [ct, Ft]);
      (0, qt.useEffect)((() => {
        (0, ht.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [ot, rt] = (0, qt.useState)(!1), [Ut, At] = (0, qt.useState)(!1), it = (0, qt.useRef)(null);
      CV(it, !Ut);
      const [pt, gt] = (0, qt.useState)(!1), st = (0, qt.useCallback)((() => {
        gt(!1)
      }), []), nt = (0, qt.useMemo)((() => new Set(mt.hudLocked)), [mt.hudLocked]), te = tt => {
        var et, Vt;
        const Ot = (0, It.o)(),
          qt = tt(Ot);
        (0, It.W)(null !== (et = null === (Vt = Rt.current) || void 0 === Vt ? void 0 : Vt.keepLocks(Ot, qt)) && void 0 !== et ? et : qt)
      }, ee = (tt, et) => {
        te((Vt => (0, It.db)(Vt, Dt, tt, et)))
      }, Ve = (tt, et, Vt) => {
        ee(tt, {
          dx: et,
          dy: Vt
        }), (0, ht.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${tt}`
        })
      }, Oe = (tt, et) => {
        te((Vt => (0, It.fb)(Vt, Dt, tt, et)))
      }, qe = tt => {
        const et = Bt[tt];
        return (et.move || et.scale) && ("joystick" !== tt || Lt) && !(0, Qe.t)(tt, mt.hudElements[tt])
      }, de = tt => Bt[tt].move && ("joystick" !== tt || Lt) && !nt.has(tt), je = new Set(Yt.map((tt => tt.id)).filter((tt => {
        const et = (0, It.P)(tt) && !ct.rowIcons.includes(tt);
        return null === Nt || Nt.has(tt) || (0, It.q)(mt.hudElements, tt) && !et
      }))), He = {
        present: je,
        actionButtons: Ft,
        keyNames: Gt,
        scaleCaps: bt,
        sizeBesidePreview: ot,
        elements: mt.hudElements,
        selected: dt,
        onSelect: ft,
        rowIconsOpen: Qt,
        onRowIconsOpen: lt,
        onScalePreview: (tt, et) => {
          var Vt;
          null === (Vt = Rt.current) || void 0 === Vt || Vt.setScale(tt, et)
        },
        onScale: (tt, et) => {
          ee(tt, {
            scale: et
          }), (0, ht.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${tt}`
          })
        },
        onHidden: (tt, et) => {
          ee(tt, {
            hidden: et
          }), (0, ht.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${et?"hide":"show"}:${tt}`
          })
        },
        onReset: tt => {
          ee(tt, It.b)
        },
        locked: nt,
        lockable: qe,
        onLocked: Oe,
        note: (et, Vt) => {
          const Ot = Vt && wt.length > 0 ? tt("hudLayout:overlapsNote", {
            names: Tt(wt, Ft, tt, Gt)
          }) : null;
          if (Vt && De(et, Lt)) return (0, Ct.jsxs)(Ct.Fragment, {
            children: [Ot && (0, Ct.jsx)("span", {
              children: Ot
            }), (0, Ct.jsx)("span", {
              children: tt("hudLayout:floatingJoystickNote")
            }), !ot && (0, Ct.jsx)(me, {})]
          });
          if (Ot) return Ot;
          const qt = Vt && nt.has(et) ? tt("hudLayout:lockedNote") : null,
            Dt = Vt && zt.has(et) ? tt("hudLayout:contextSlotNote") : null;
          return qt || Dt ? (0, Ct.jsxs)(Ct.Fragment, {
            children: [qt && (0, Ct.jsx)("span", {
              children: qt
            }), Dt && (0, Ct.jsx)("span", {
              children: Dt
            })]
          }) : Vt && "cluster" === et ? tt("hudLayout:clusterNote") : Vt && "inventory" === et ? tt("hudLayout:inventoryNote") : Vt && "menu" === et ? tt("hudLayout:menuNote") : Vt && (0, Qe.t)(et, mt.hudElements[et]) && de(et) ? tt("hudLayout:rowIconNote") : Vt && "arrows" === et ? tt("hudLayout:arrowsNote") : Vt && "sprint" === et ? tt("hudLayout:sprintNote") : kt(et) && (0, It.q)(mt.hudElements, et) ? tt("hudLayout:inventoryHiddenNote", {
            name: xt(et, Ft, tt, Gt)
          }) : null
        }
      };
      return (0, Ct.jsxs)("div", {
        ref: Pt,
        className: "HudLayoutSettings",
        children: [(0, Ct.jsxs)("div", {
          ref: it,
          className: "HudLayoutBody",
          children: [(0, Ct.jsx)("div", {
            className: "HudLayoutOrientation",
            children: tt("landscape" === Dt ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, Ct.jsx)(SV, {
            preview: {
              layout: et,
              orientation: Dt,
              selected: dt,
              onSelect: ft,
              onMove: Ve,
              canMove: de,
              actionButtons: Ft,
              joystickFixed: Lt,
              presence: ct,
              keyNames: Gt,
              maxHeight: Zt,
              apiRef: Rt,
              onMeasured: ut,
              onReady: At,
              lockable: qe
            },
            quick: {
              layout: mt,
              actionButtons: Ft,
              keyNames: Gt,
              scaleCaps: bt,
              overlaps: wt,
              onScale: He.onScale,
              onHidden: He.onHidden,
              onReset: He.onReset,
              locked: nt,
              lockable: qe,
              onLocked: Oe
            },
            onFullScreen: () => {
              gt(!0)
            },
            resting: pt,
            onSidePanel: rt
          }), pt && (0, Ct.jsx)(KV, {
            layout: et,
            orientation: Dt,
            selected: dt,
            onSelect: ft,
            onMove: Ve,
            canMove: de,
            actionButtons: Ft,
            joystickFixed: Lt,
            presence: ct,
            keyNames: Gt,
            onScale: He.onScale,
            onHidden: He.onHidden,
            onReset: He.onReset,
            locked: nt,
            lockable: qe,
            onLocked: Oe,
            apiRef: Rt,
            onClose: st
          }), (0, Ct.jsx)(GV, {
            safe: mt.hudSafe,
            onCommit: tt => {
              te((et => (0, It.hb)(et, Dt, tt)))
            },
            onPreview: tt => {
              var et;
              null === (et = Rt.current) || void 0 === et || et.setSafe(tt)
            }
          }), (0, Ct.jsx)(Et.c, {
            label: tt("hudLayout:snapCentre"),
            checked: et.hudSnapCentre,
            onClick: tt => {
              (0, It.U)(tt)
            },
            circleInfoText: tt("hudLayout:snapCentreInfo")
          }), (0, Ct.jsx)(WV, {
            ...He
          }), (0, Ct.jsx)(Et.e, {
            label: tt("hudLayout:shape"),
            options: It.A.map((et => ({
              value: et,
              label: tt(`hudLayout:shape_${et}`)
            }))),
            value: et.hudShape,
            onChange: tt => {
              te((et => ({
                ...et,
                hudShape: tt
              }))), (0, ht.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: tt
              })
            }
          }), (0, Ct.jsx)(Et.f, {
            name: tt("hudLayout:opacity"),
            min: It.e,
            max: 1,
            step: .05,
            initValue: et.hudKeyOpacity,
            format: tt => `${Math.round(100*tt)}%`,
            circleInfoText: tt("hudLayout:opacityInfo"),
            onChange: tt => {
              var et;
              null === (et = Rt.current) || void 0 === et || et.setOpacity(tt)
            },
            onChangeComplete: tt => {
              (0, It.S)(tt), (0, ht.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, Ct.jsx)(Ht.G, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const tt = vt.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await tt.getResult() && (0, It.Q)()
            }()
          },
          children: tt("hudLayout:resetAll")
        })]
      })
    }
    const oV = 350;
    const rV = [function() {
      const {
        t: tt
      } = (0, Ot.H)(), [et, Vt] = (0, qt.useState)(!1), Dt = (0, qt.useRef)(null);
      return (0, qt.useEffect)((() => {
        var tt;
        et && (null === (tt = Dt.current) || void 0 === tt || tt.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [et]), (0, Ct.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, Ct.jsx)(Wt.d, {
          ref: Dt,
          icon: "arrows-up-down-left-right",
          title: tt("hudLayout:title"),
          sub: tt("hudLayout:entrySub"),
          expanded: et,
          onClick: () => {
            Vt(!et)
          }
        }), et && (0, Ct.jsx)(zV, {})]
      })
    }, function() {
      const {
        t: tt
      } = (0, Ot.H)(), {
        joystickMode: et,
        touchSpeedCurve: Vt,
        autorun: qt,
        jumpLock: Dt,
        touchEdgeGuard: mt
      } = (0, Xt.k)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Ct.jsxs)(Ct.Fragment, {
        children: [(0, Ct.jsx)(Et.e, {
          label: tt("settingsMenu:joystick"),
          options: Jt.ob.map((et => ({
            value: et,
            label: tt(ut[et])
          }))),
          value: et,
          onChange: tt => {
            Xt.b.setClientEscMenuOptions({
              joystickMode: tt
            })
          },
          circleInfoText: tt("settingsMenu:joystickInfo")
        }), (0, Ct.jsx)(Et.c, {
          label: tt("settingsMenu:preciseWalking"),
          checked: Vt,
          onClick: tt => {
            Xt.b.setClientEscMenuOptions({
              touchSpeedCurve: tt
            })
          },
          circleInfoText: tt("settingsMenu:preciseWalkingInfo")
        }), (0, Ct.jsx)(Et.c, {
          label: tt("settingsMenu:autoRun"),
          checked: qt,
          onClick: tt => {
            Xt.b.setClientEscMenuOptions({
              autorun: tt
            })
          },
          circleInfoText: tt("settingsMenu:autoRunInfo")
        }), (0, Ct.jsx)(Et.c, {
          label: tt("settingsMenu:jumpLock"),
          checked: Dt,
          onClick: tt => {
            Xt.b.setClientEscMenuOptions({
              jumpLock: tt
            })
          },
          circleInfoText: tt("settingsMenu:jumpLockInfo")
        }), (0, Ct.jsx)(Et.c, {
          label: tt("touchSettings:stopAtEdges"),
          checked: mt,
          onClick: tt => {
            Xt.b.setClientEscMenuOptions({
              touchEdgeGuard: tt
            })
          },
          circleInfoText: tt("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, Ct.jsx)(bt.d, {})
    }, function() {
      const {
        t: tt
      } = (0, Ot.H)(), {
        clientEscMenuOptions: et
      } = (0, Xt.k)(["clientEscMenuOptions"]);
      return (0, Kt.b)() ? (0, Ct.jsx)(Et.c, {
        label: tt("settingsMenu:vibration"),
        checked: et.vibration,
        onClick: tt => {
          Xt.b.setClientEscMenuOptions({
            vibration: tt
          })
        },
        circleInfoText: tt("settingsMenu:vibrationInfo")
      }) : null
    }];

    function UV() {
      return (0, Ct.jsx)(Ct.Fragment, {
        children: rV.map(((tt, et) => (0, Ct.jsx)(tt, {}, et)))
      })
    }
    var AV = Vt(4482);

    function iV() {
      const {
        t: tt
      } = (0, Ot.H)(), {
        isTouchScreen: et,
        clientEscMenuOptions: Vt,
        gameState: mt
      } = (0, Xt.k)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), dt = (0, ft.i)("ezBridging"), jt = (0, ft.i)("ezTowering"), yt = "inGame" !== mt || !0 === dt, Nt = (0, wt.e)(), bt = null !== Nt && ("inGame" !== mt || !0 === jt), [, Jt] = (0, qt.useReducer)((tt => tt + 1), 0), ut = (0, Mt.g)(), [Kt, ht] = (0, qt.useState)(AV.g);
      return (0, Ct.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [ut && (0, Ct.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, Ct.jsx)("div", {
            children: tt("controller:settingsControlsNote")
          }), (0, Ct.jsx)(Ht.Q, {
            onClick: () => {
              Xt.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: tt("controller:settingsOpenController")
          })]
        }), (0, Qt.isTouchscreen)() && !(0, Qt.isMobile)() ? (0, Ct.jsx)(Ct.Fragment, {
          children: (0, Ct.jsx)(Et.c, {
            label: tt("settingsMenu:useTouchControls"),
            checked: Kt,
            onClick: tt => {
              (0, AV.d)(tt), ht(tt)
            }
          })
        }) : null, et && (0, Ct.jsx)(UV, {}), yt && (0, Ct.jsx)(Et.c, {
          label: tt("settingsMenu:ezBridging"),
          checked: Vt.ezBridging,
          onClick: tt => {
            Xt.b.setClientEscMenuOptions({
              ezBridging: tt
            })
          },
          circleInfoText: tt("settingsMenu:ezBridgingInfo")
        }), bt && (0, Ct.jsx)(Et.c, {
          label: tt("settingsMenu:ezTowering"),
          checked: Vt.ezTowering,
          onClick: tt => {
            Xt.b.setClientEscMenuOptions({
              ezTowering: tt
            })
          },
          circleInfoText: tt("jump" === Nt ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, Ct.jsx)(Et.c, {
          label: tt("settingsMenu:crouchToggle"),
          checked: Vt.crouchIsToggle,
          onClick: tt => {
            Xt.b.setClientEscMenuOptions({
              crouchIsToggle: tt
            })
          },
          circleInfoText: tt("settingsMenu:crouchToggleInfo")
        }), (0, Ct.jsx)(Et.c, {
          label: tt("settingsMenu:hideUiToggle"),
          checked: Vt.hideUiIsToggle,
          onClick: tt => {
            Xt.b.setClientEscMenuOptions({
              hideUiIsToggle: tt
            })
          },
          circleInfoText: tt("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, lt.d)() && (0, Ct.jsx)(Et.f, {
          name: tt("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: Vt.touchscreenSensitivity,
          onChange: tt => {
            Xt.b.setClientEscMenuOptions({
              touchscreenSensitivity: tt
            })
          }
        }), !(0, Qt.isMobile)() && (0, Ct.jsx)(Et.f, {
          name: tt("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: Vt.mouseSensitivity,
          onChange: tt => {
            Xt.b.setClientEscMenuOptions({
              mouseSensitivity: tt
            })
          }
        }), !(0, Qt.isMobile)() && (0, Ct.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Ct.jsx)("div", {
            className: "SliderText",
            children: tt("settingsMenu:keyBindings")
          }), Dt.e.map((et => (0, Ct.jsx)(YV, {
            title: tt(et.name.translationKey, et.name.params),
            defaultOpen: Dt.g.has(et.id),
            children: et.actions.map((tt => (0, Ct.jsx)(BV, {
              noaAction: tt,
              forceUpdate: Jt,
              clashesWith: et.clashesWith,
              showPadGlyph: ut
            }, tt)))
          }, et.name.translationKey))), (0, Ct.jsx)(Ht.G, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, Dt.D)(), Jt()
            },
            children: tt("controls:resetBindings")
          })]
        })]
      })
    }

    function YV(tt) {
      let {
        title: et,
        defaultOpen: Vt,
        children: Ot
      } = tt;
      const [Dt, mt] = (0, qt.useState)(Vt);
      return (0, Ct.jsxs)("div", {
        className: jt()("ControlsSection", {
          Collapsed: !Dt
        }),
        children: [(0, Ct.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            mt(!Dt)
          },
          children: [(0, Ct.jsx)("div", {
            className: "ControlsSectionTitle",
            children: et
          }), (0, Ct.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), Dt && (0, Ct.jsx)("div", {
          className: "ControlsSectionRows",
          children: Ot
        })]
      })
    }

    function BV(tt) {
      let {
        noaAction: et,
        forceUpdate: Vt,
        clashesWith: dt,
        showPadGlyph: Xt
      } = tt;
      const {
        t: Qt
      } = (0, Ot.H)(), lt = (0, Nt.e)(et), [Et, ft] = (0, qt.useState)(!1), [wt, Mt] = (0, qt.useState)("controls:clickToEnterNewBinding"), [bt, Jt] = (0, qt.useState)(null), [ut, Kt] = (0, qt.useState)(null), ht = (0, qt.useRef)(null);
      (0, qt.useEffect)((() => {
        Et && ht.current && ht.current.focus()
      }), [Et]);
      const vt = Dt.r[et].filter((tt => mt.j[tt]));
      let Wt = null;
      const St = [],
        ct = dt.flatMap((tt => {
          var et, Vt;
          return null !== (et = null === (Vt = Dt.e.find((et => et.id === tt))) || void 0 === Vt ? void 0 : Vt.actions) && void 0 !== et ? et : []
        }));
      for (const Ot of ct) {
        if (Ot === et) continue;
        const tt = Dt.r[Ot];
        for (const et of tt) vt.includes(et) && St.push(Qt(Dt.v[Ot].translationKey, Dt.v[Ot].params))
      }
      St.length > 0 && (Wt = Qt("controls:sharedBindingsWarning") + " ", Wt += St.join(", "));
      const Rt = () => {
          ft(!1), Jt(null), Mt("controls:clickToEnterNewBinding"), Kt(null)
        },
        It = () => "BindingInput_" + et;
      return (0, Ct.jsxs)("div", {
        className: jt()("ControlRow", {
          WarningBorder: null !== Wt
        }),
        children: [(0, Ct.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Ct.jsxs)("div", {
            className: "ControlName",
            children: [Qt(Dt.v[et].translationKey, Dt.v[et].params), Xt && lt && (0, Ct.jsx)(yt.d, {
              glyph: lt,
              className: "ControlPadGlyph"
            })]
          }), (0, Ct.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Ct.jsxs)("div", {
              className: "ControlBindingsList",
              children: [vt.map((tt => (0, Ct.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Ct.jsx)("div", {
                  children: (0, Dt.k)(tt)
                }), (0, Ct.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Ot = (0, Dt.z)(et, tt);
                    Ot.isError() ? Kt(Ot.asError().message) : Kt(null), Vt()
                  },
                  children: "\xd7"
                })]
              }, tt))), !Et && (0, Ct.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  ft(!0), Kt(null)
                },
                children: (0, Ct.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), Et && (0, Ct.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Ct.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Ct.jsx)("div", {
                  className: "InputOverlay",
                  children: bt ? (0, Dt.k)(bt) : (0, Ct.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Qt(wt)
                  })
                }), (0, Ct.jsx)("input", {
                  ref: ht,
                  id: It(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: tt => {
                    if ("Escape" === tt.code) return Rt(), tt.preventDefault(), void tt.stopPropagation();
                    const et = tt.code;
                    mt.e.includes(et) ? (Kt(null), Jt(et)) : (Kt("controls:keyIsReserved"), Jt(null)), tt.preventDefault(), tt.stopPropagation()
                  },
                  onMouseDown: tt => {
                    const et = "Mouse" + (tt.button + 1);
                    document.activeElement && document.activeElement.id === It() ? mt.e.includes(et) ? (Kt(null), Jt(et)) : (Kt("controls:keyIsReserved"), Jt(null)) : Mt("controls:enterNewBinding"), tt.stopPropagation()
                  },
                  onBlur: () => {
                    Mt("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Ct.jsx)(Ht.f, {
                onPointerDown: tt => {
                  tt.preventDefault()
                },
                onClick: () => {
                  (0, Dt.d)(et, bt), Vt(), Rt()
                },
                className: "ControlBindingAddButton",
                disabled: null === bt,
                children: Qt("general:add")
              }), (0, Ct.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  Rt()
                },
                children: "\xd7"
              })]
            }), ut && (0, Ct.jsx)("div", {
              className: "ControlBindingError",
              children: Qt(ut)
            })]
          })]
        }), Wt && (0, Ct.jsx)("div", {
          className: "ControlRowWarning",
          children: Wt
        })]
      })
    }
  },
  9109: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt
    });
    var Ot = Vt(63),
      qt = Vt(1152),
      Dt = Vt(1188);
    const mt = (0, Ot.forwardRef)((function(tt, et) {
      let {
        icon: Vt,
        title: Ot,
        sub: mt,
        expanded: dt,
        onClick: jt
      } = tt;
      return (0, Dt.jsxs)("button", {
        ref: et,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": dt,
        onClick: jt,
        children: [(0, Dt.jsx)(qt.b, {
          name: Vt,
          className: "FeaturedSettingsEntryIcon"
        }), (0, Dt.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, Dt.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: Ot
          }), (0, Dt.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: mt
          })]
        }), (0, Dt.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  8888: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Nt,
      c: () => yt,
      g: () => Xt,
      j: () => Mt,
      l: () => bt,
      n: () => lt
    });
    var Ot = Vt(1764),
      qt = Vt(1832);
    const Dt = tt => tt >= 56320 && tt <= 57343,
      mt = tt => tt >= 55296 && tt <= 56319,
      dt = (tt, et) => et >= 2 && Dt(tt.charCodeAt(et - 1)) && mt(tt.charCodeAt(et - 2)) ? et - 2 : Math.max(0, et - 1),
      jt = (tt, et) => {
        let Vt;
        var Ot, qt;
        return Vt = tt.start !== tt.end ? et < 0 ? tt.start : tt.end : et < 0 ? dt(tt.value, tt.start) : (Ot = tt.value, (qt = tt.start) + 1 < Ot.length && mt(Ot.charCodeAt(qt)) && Dt(Ot.charCodeAt(qt + 1)) ? qt + 2 : Math.min(Ot.length, qt + 1)), {
          value: tt.value,
          start: Vt,
          end: Vt
        }
      },
      Ht = ["text", "search", "url", "email", "tel", "password", "number"],
      Xt = tt => !(!(0, qt.c)(tt) || tt.isContentEditable || tt.hasAttribute("data-pad-no-osk")) && (tt instanceof HTMLTextAreaElement || tt instanceof HTMLInputElement && Ht.includes(tt.type)),
      Qt = tt => null !== tt.selectionStart,
      lt = tt => {
        var et, Vt;
        const {
          value: Ot
        } = tt;
        return {
          value: Ot,
          start: null !== (et = tt.selectionStart) && void 0 !== et ? et : Ot.length,
          end: null !== (Vt = tt.selectionEnd) && void 0 !== Vt ? Vt : Ot.length
        }
      },
      Et = (tt, et, Vt) => {
        if (tt.readOnly) return;
        const qt = tt instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(qt, "value").set.call(tt, et.value), Qt(tt) && tt.setSelectionRange(et.start, et.end), (0, Ot.c)(tt, new InputEvent("input", {
          bubbles: !0,
          inputType: Vt
        }))
      };
    let ft = !1;
    const wt = (tt, et) => !!document.execCommand(tt, !1, et) || (ft || (ft = !0, console.warn(`execCommand("${tt}") failed; the on-screen keyboard is setting the value directly`)), !1),
      yt = (tt, et) => {
        wt("insertText", et) || Et(tt, function(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Ot = tt.value.slice(0, tt.start),
            qt = tt.value.slice(tt.end);
          let Dt = Vt < 0 ? et.length : Math.max(0, Vt - Ot.length - qt.length);
          Dt > 0 && Dt < et.length && mt(et.charCodeAt(Dt - 1)) && Dt--;
          const dt = et.slice(0, Dt),
            jt = Ot.length + dt.length;
          return {
            value: Ot + dt + qt,
            start: jt,
            end: jt
          }
        }(lt(tt), et, tt.maxLength), "insertText")
      },
      Nt = tt => {
        wt("delete") || Et(tt, (tt => {
          const et = tt.start === tt.end ? dt(tt.value, tt.start) : tt.start;
          return {
            value: tt.value.slice(0, et) + tt.value.slice(tt.end),
            start: et,
            end: et
          }
        })(lt(tt)), "deleteContentBackward")
      },
      Mt = (tt, et) => {
        if (!Qt(tt)) return;
        const Vt = jt(lt(tt), et);
        tt.setSelectionRange(Vt.start, Vt.end)
      },
      bt = tt => {
        Qt(tt) && 0 === tt.selectionStart && 0 === tt.selectionEnd && tt.setSelectionRange(tt.value.length, tt.value.length)
      }
  },
  9063: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt
    });
    var Ot = Vt(26),
      qt = Vt(2203),
      Dt = Vt(1450),
      mt = Vt(1492);
    const dt = async () => {
      if ((0, mt.j)()) {
        if (!0 !== await Dt.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Ot.b.get("gameState")) return
      }(0, qt.e)()
    }
  },
  9065: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      d: () => Dt,
      g: () => mt,
      j: () => qt,
      n: () => dt
    });
    var Ot = Vt(2047);
    const qt = "controllerPadShopOpen",
      Dt = tt => Ot.j.includes(tt),
      mt = tt => Object.values(tt).some((tt => !1 !== tt.canBuy && !tt.isRewardedAd)),
      dt = (tt, et, Vt) => {
        var Ot, qt, mt, dt;
        const jt = tt.filter((tt => !Dt(tt))),
          Ht = null !== et && tt.includes(et) ? et : null;
        return null !== Ht && !Dt(Ht) && Vt(Ht) ? Ht : null !== (Ot = null !== (qt = null !== (mt = null !== (dt = jt.find(Vt)) && void 0 !== dt ? dt : jt[0]) && void 0 !== mt ? mt : Ht) && void 0 !== qt ? qt : tt[0]) && void 0 !== Ot ? Ot : null
      },
      jt = tt => tt.userInput || tt.isRewardedAd || "boolean" === typeof tt.isSelected ? null : JSON.stringify([tt.image, tt.cost, tt.currency, tt.amount, tt.customTitle, tt.buyButtonText, tt.description, tt.canBuy])
  },
  9091: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ht,
      g: () => Xt
    });
    var Ot = Vt(63),
      qt = Vt(1554),
      Dt = Vt(2096),
      mt = Vt(1513),
      dt = Vt(1540),
      jt = Vt(1188);
    const Ht = () => {
        const tt = (0, mt.p)();
        if ((0, Ot.useEffect)((() => {
            (0, mt.j)()
          }), []), !tt) return null;
        const {
          ControllerCategory: et
        } = tt;
        return (0, jt.jsx)(dt.e, {
          children: (0, jt.jsx)(et, {})
        })
      },
      Xt = () => {
        var tt;
        const et = (0, mt.p)(),
          [, Vt] = (0, Ot.useReducer)((tt => tt + 1), 0);
        return (0, qt.f)(Dt.e, Vt), null !== (tt = null === et || void 0 === et ? void 0 : et.hasActivePad()) && void 0 !== tt && tt
      }
  },
  8893: (tt, et, Vt) => {
    Vt.d(et, {
      C: () => lt,
      d: () => Ot,
      h: () => Ht,
      i: () => wt,
      l: () => Qt,
      o: () => ft,
      r: () => Dt,
      v: () => Et,
      z: () => mt
    });
    const Ot = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      qt = (tt, et) => {
        if ("function" === typeof tt.checkVisibility) return !tt.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: et,
          checkOpacity: et
        });
        const {
          visibility: Vt
        } = getComputedStyle(tt);
        if ("hidden" === Vt || "collapse" === Vt) return !0;
        if (!et) return !1;
        for (let Ot = tt; Ot; Ot = Ot.parentElement)
          if ("0" === getComputedStyle(Ot).opacity) return !0;
        return !1
      },
      Dt = tt => {
        if (!tt.isConnected || qt(tt, !0)) return !1;
        const et = tt.getBoundingClientRect();
        return et.width > 0 && et.height > 0
      },
      mt = tt => !!tt.matches(":disabled, [aria-disabled='true']") || "button" === tt.getAttribute("role") && "-1" === tt.getAttribute("tabindex"),
      dt = tt => {
        var et;
        if (tt.closest("[data-pad-ignore]")) return !0;
        return !!(null === (et = tt.parentElement) || void 0 === et ? void 0 : et.closest("[data-pad-focusable]"))
      },
      jt = tt => {
        const et = tt.querySelectorAll(Ot);
        return tt.matches(Ot) ? [tt, ...et] : et
      },
      Ht = tt => {
        const et = [];
        for (const Vt of jt(tt)) !dt(Vt) && Dt(Vt) && et.push(Vt);
        return et
      },
      Xt = new WeakMap,
      Qt = tt => {
        const et = Xt.get(tt);
        if (et && lt(et, tt)) return !0;
        for (const Vt of jt(tt))
          if (!dt(Vt) && Dt(Vt)) return Xt.set(tt, Vt), !0;
        return Xt.delete(tt), !1
      },
      lt = (tt, et) => et.contains(tt) && tt.matches(Ot) && !dt(tt) && Dt(tt),
      Et = (tt, et) => lt(tt, et) && !mt(tt),
      ft = tt => {
        for (const et of tt.querySelectorAll("[data-pad-initial-area]"))
          if (!qt(et, !1)) return !0;
        return !1
      },
      wt = tt => {
        const et = et => {
          let Vt = 0;
          for (let Ot = et.parentElement; Ot && Ot !== tt; Ot = Ot.parentElement) Vt++;
          return Vt
        };
        return [...tt.querySelectorAll("[data-pad-initial-area]")].filter(Dt).sort(((tt, Vt) => et(Vt) - et(tt)))
      }
  },
  8874: (tt, et, Vt) => {
    Vt.d(et, {
      C: () => Kt,
      F: () => yt,
      H: () => jt,
      K: () => Xt,
      b: () => Nt,
      c: () => vt,
      d: () => Ct,
      e: () => Jt,
      h: () => ft,
      j: () => wt,
      k: () => lt,
      m: () => Et,
      q: () => ht,
      t: () => Ht,
      x: () => Wt,
      y: () => ut
    });
    var Ot = Vt(31),
      qt = Vt(1764),
      Dt = Vt(8880),
      mt = Vt(8888),
      dt = Vt(8893);
    const jt = tt => (0, mt.g)(tt),
      Ht = tt => {
        const et = tt.getBoundingClientRect();
        return {
          x: et.left + et.width / 2,
          y: et.top + et.height / 2
        }
      },
      Xt = (tt, et, Vt) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: tt.x,
        clientY: tt.y,
        screenX: tt.x,
        screenY: tt.y,
        button: et,
        buttons: Vt,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      Qt = (tt, et) => {
        (0, qt.c)(tt, et)
      },
      lt = function(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Ot = 0 === Vt ? 1 : 2;
        Qt(tt, new PointerEvent("pointerdown", Xt(et, Vt, Ot))), Qt(tt, new MouseEvent("mousedown", Xt(et, Vt, Ot)))
      },
      Et = function(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Qt(tt, new PointerEvent("pointerup", Xt(et, Vt, 0))), Qt(tt, new MouseEvent("mouseup", Xt(et, Vt, 0)))
      },
      ft = function(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        lt(tt, et, Vt), Et(tt, et, Vt), Qt(tt, 0 === Vt ? new MouseEvent("click", Xt(et, 0, 0)) : new MouseEvent("contextmenu", Xt(et, 2, 0)))
      },
      wt = function(tt, et, Vt) {
        let {
          leaveBelow: Ot = null,
          enterBelow: qt = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (tt !== et) {
          if (null !== tt && void 0 !== tt && tt.isConnected) {
            const qt = {
              ...Xt(Vt, 0, 0),
              relatedTarget: et
            };
            Qt(tt, new PointerEvent("pointerout", qt)), Qt(tt, new MouseEvent("mouseout", qt));
            const Dt = tt => !!et && tt.contains(et) || !!Ot && tt.contains(Ot);
            for (let et = tt; et && !Dt(et); et = et.parentElement) Qt(et, new PointerEvent("pointerleave", {
              ...qt,
              bubbles: !1
            })), Qt(et, new MouseEvent("mouseleave", {
              ...qt,
              bubbles: !1
            }))
          }
          if (et) {
            const Ot = {
              ...Xt(Vt, 0, 0),
              relatedTarget: tt
            };
            Qt(et, new PointerEvent("pointerover", Ot)), Qt(et, new MouseEvent("mouseover", Ot));
            const Dt = [],
              mt = et => !(null === tt || void 0 === tt || !tt.isConnected) && et.contains(tt) || !!qt && et.contains(qt);
            for (let tt = et; tt && !mt(tt); tt = tt.parentElement) Dt.push(tt);
            for (const tt of Dt.reverse()) Qt(tt, new PointerEvent("pointerenter", {
              ...Ot,
              bubbles: !1
            })), Qt(tt, new MouseEvent("mouseenter", {
              ...Ot,
              bubbles: !1
            }));
            Qt(et, new PointerEvent("pointermove", Xt(Vt, 0, 0))), Qt(et, new MouseEvent("mousemove", Xt(Vt, 0, 0)))
          }
        } else et && (Qt(et, new PointerEvent("pointermove", Xt(Vt, 0, 0))), Qt(et, new MouseEvent("mousemove", Xt(Vt, 0, 0))))
      },
      yt = tt => {
        Ot.j.sw(Dt.i, tt)
      },
      Nt = tt => {
        if (jt(tt)) return void yt(tt);
        const et = tt.hasAttribute("data-pad-focusable") ? tt.querySelector("a[href]") : null,
          Vt = null !== et && void 0 !== et ? et : tt;
        ft(Vt, Ht(Vt))
      },
      Mt = ".Dropdown-root.is-open",
      bt = tt => {
        const et = tt.querySelector(".Dropdown-control");
        return Nt(et), et
      },
      Jt = tt => {
        var et;
        const Vt = null !== (et = tt.closest(Mt)) && void 0 !== et ? et : tt.querySelector(Mt);
        return Vt ? bt(Vt) : null
      },
      Ct = tt => {
        for (const et of document.querySelectorAll(Mt)) et.contains(tt) || bt(et)
      },
      ut = tt => null !== tt.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      Kt = tt => {
        const et = tt ? document.elementFromPoint(tt.x, tt.y) : null;
        return !(null === et || void 0 === et || !et.closest("[data-pad-repeat]"))
      },
      ht = tt => {
        var et;
        return null !== (et = [...tt.querySelectorAll("[data-pad-back]")].find(dt.r)) && void 0 !== et ? et : null
      },
      vt = tt => {
        const et = ht(tt);
        return !!et && (Nt(et), !0)
      },
      Wt = tt => {
        var et, Vt, Ot, qt;
        return null !== (et = null !== (Vt = null !== (Ot = tt.getAttribute("data-pad-key")) && void 0 !== Ot ? Ot : tt.getAttribute("href")) && void 0 !== Vt ? Vt : null === (qt = tt.querySelector("a[href]")) || void 0 === qt ? void 0 : qt.getAttribute("href")) && void 0 !== et ? et : null
      }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);