export const id = 158;
export const ids = [158];
export const modules = {
  9e3: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp
    });
    var Op = cp(25),
      op = cp(1201),
      Ip = cp(5113),
      Sp = cp(1112);

    function xp(pp) {
      let {
        note: ip
      } = pp;
      const {
        t: cp
      } = (0, op.H)(), {
        clientEscMenuOptions: xp
      } = (0, Op.o)(["clientEscMenuOptions"]);
      return (0, Sp.jsx)(Ip.b, {
        label: cp("touchSettings:actionButtons"),
        checked: xp.touchActionButtons,
        onClick: pp => {
          Op.c.setClientEscMenuOptions({
            touchActionButtons: pp
          })
        },
        circleInfoText: cp("touchSettings:actionButtonsInfo"),
        note: ip
      })
    }
  },
  8990: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => rc,
      d: () => Gc
    });
    var Op = cp(1201),
      op = cp(62),
      Ip = cp(2012),
      Sp = cp(2028),
      xp = cp(1049),
      Lp = cp.n(xp),
      Yp = cp(1480),
      Dp = cp(25),
      Ap = cp(104),
      Pp = cp(116),
      Wp = cp(5113),
      yp = cp(2492),
      Up = cp(272),
      wp = cp(2036),
      vp = cp(2043),
      tp = cp(8995),
      Hp = cp(9e3),
      dp = cp(322),
      ep = cp(1112);
    const jp = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var kp = cp(9002);
    var mp = cp(1505),
      Rp = cp(1372),
      qp = cp(9006),
      Mp = cp(1432),
      Cp = cp(1060),
      Ep = cp(9015),
      Xp = cp(2525);
    const lp = {
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
        ...Object.fromEntries(Xp.A.map((pp => [pp, "menu"])))
      },
      Qp = pp => Xp.v.filter((ip => lp[ip] === pp)),
      Jp = new Set(Qp("cluster")),
      Bp = new Set(Qp("inventory")),
      Np = pp => "inventory" === pp || Bp.has(pp),
      Tp = pp => {
        const ip = lp[pp];
        return void 0 === ip ? [] : [ip, ...Tp(ip)]
      },
      fp = pp => [pp, ...Tp(pp)],
      bp = (pp, ip, cp) => "shop" === pp && ip ? cp("inventory") ? ["inventory"] : cp("bag") ? [pp, "bag"] : [pp] : [pp],
      hp = new Map([
        ["cluster", Jp],
        ["inventory", Bp]
      ]),
      ap = ["cluster"],
      np = [...ap, ...Xp.v.filter((pp => !ap.includes(pp) && !lp[pp]))],
      Fp = pp => [pp, ...Qp(pp).flatMap(Fp)],
      gp = np.flatMap(Fp).map((pp => ({
        id: pp,
        label: `hudLayout:${pp}`,
        ...Xp.u[pp],
        parent: lp[pp]
      }))),
      Gp = Object.fromEntries(gp.map((pp => [pp.id, pp]))),
      rp = "data-hud-el";

    function Zp(pp, ip, cp, Op) {
      const op = cp(function(pp, ip) {
          return "attack" !== pp || ip ? Gp[pp].label : "hudLayout:attackContext"
        }(pp, ip)),
        Ip = Op[pp];
      return Ip ? cp("hudLayout:slotWithKey", {
        slot: op,
        key: Ip
      }) : op
    }

    function zp(pp, ip, cp, Op) {
      return pp.map((pp => Zp(pp, ip, cp, Op))).join(", ")
    }

    function sp(pp) {
      let {
        className: ip,
        keepPlace: cp
      } = pp;
      return cp ? (0, ep.jsx)("div", {
        className: Lp()(ip, "Placeholder")
      }) : null
    }

    function Kp(pp) {
      let {
        id: ip,
        elements: cp,
        actionButtons: op,
        keyNames: Ip,
        className: Sp,
        keepPlace: xp,
        onHidden: Lp
      } = pp;
      const {
        t: Dp
      } = (0, Op.H)();
      if (!Gp[ip].hide) return (0, ep.jsx)(sp, {
        className: Sp,
        keepPlace: xp
      });
      const Ap = (0, Xp.r)(cp, ip);
      return (0, ep.jsx)(Yp.S, {
        className: Sp,
        ariaLabel: Dp(Ap ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: Zp(ip, op, Dp, Ip)
        }),
        pressed: !Ap,
        onClick: () => {
          Lp(ip, !Ap)
        },
        children: (0, ep.jsx)(Cp.d, {
          name: Ap ? "eye-slash" : "eye"
        })
      })
    }

    function Vp(pp) {
      let {
        id: ip,
        elements: cp,
        actionButtons: op,
        keyNames: Ip,
        className: Sp,
        keepPlace: xp,
        onlyWhenMoved: Lp,
        locked: Dp,
        onReset: Ap
      } = pp;
      const {
        t: Pp
      } = (0, Op.H)(), Wp = Gp[ip], yp = (0, Xp.I)(cp[ip]);
      return !Wp.move && !Wp.scale || Lp && yp ? (0, ep.jsx)(sp, {
        className: Sp,
        keepPlace: xp
      }) : (0, ep.jsx)(Yp.S, {
        className: Sp,
        disabled: yp || Dp,
        ariaLabel: Pp("hudLayout:resetElement", {
          name: Zp(ip, op, Pp, Ip)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: ip
        },
        onClick: pp => {
          Lp && oi(pp.currentTarget), Ap(ip)
        },
        children: (0, ep.jsx)(Cp.d, {
          name: "rotate-left"
        })
      })
    }

    function ii(pp) {
      let {
        id: ip,
        actionButtons: cp,
        keyNames: op,
        className: Ip,
        keepPlace: Sp,
        locked: xp,
        lockable: Lp,
        onLocked: Dp
      } = pp;
      const {
        t: Ap
      } = (0, Op.H)();
      return Lp || xp ? (0, ep.jsx)(Yp.S, {
        className: Ip,
        ariaLabel: Ap(xp ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: Zp(ip, cp, Ap, op)
        }),
        pressed: xp,
        active: xp,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${xp?"unlock":"lock"}:${ip}`
        },
        onClick: () => {
          Dp(ip, !xp)
        },
        children: (0, ep.jsx)(Cp.d, {
          name: xp ? "lock" : "lock-open"
        })
      }) : (0, ep.jsx)(sp, {
        className: Ip,
        keepPlace: Sp
      })
    }

    function ci(pp) {
      let {
        className: ip,
        open: cp,
        name: op,
        onToggle: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Op.H)();
      return (0, ep.jsx)(Yp.S, {
        className: ip,
        ariaLabel: Sp(cp ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: op
        }),
        pressed: cp,
        analyticsClick: {
          id: "hud_layout.children",
          value: cp ? "close" : "open"
        },
        onClick: () => {
          Ip(!cp)
        },
        children: (0, ep.jsx)(Cp.d, {
          name: cp ? "angle-up" : "angle-down"
        })
      })
    }

    function Oi(pp, ip) {
      var cp;
      pp.contains(document.activeElement) && ip.focus({
        preventScroll: !0
      }), null === (cp = (0, Mp.f)()) || void 0 === cp || cp.handOverPadFocus(pp, ip)
    }

    function oi(pp) {
      const ip = pp.closest("[data-hud-row]"),
        cp = null === ip || void 0 === ip ? void 0 : ip.querySelector(".HudElementRowName");
      return !(!ip || !cp) && (Oi(ip, cp), !0)
    }
    const Ii = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function Si(pp, ip) {
      return "joystick" === pp && !ip
    }

    function xi() {
      const {
        t: pp
      } = (0, Op.H)();
      return (0, ep.jsx)(Yp.S, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: pp => {
          const ip = pp.currentTarget;
          if (!oi(ip)) {
            const pp = function(pp) {
              var ip, cp;
              const Op = [pp.previousElementSibling, pp.nextElementSibling].find((pp => pp instanceof HTMLElement && pp.matches(Ii)));
              return null !== (ip = null !== Op && void 0 !== Op ? Op : null === (cp = pp.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === cp ? void 0 : cp.querySelector(`:is(${Ii}):not(.HudFixJoystickButton)`)) && void 0 !== ip ? ip : null
            }(ip);
            pp && Oi(ip, pp)
          }
          Dp.c.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: pp("hudLayout:fixJoystick")
      })
    }
    var Li = cp(82),
      Yi = cp(1295),
      Di = cp(3209),
      Ai = cp(2835),
      Pi = cp(2529);
    const Wi = (pp, ip, cp) => {
      const Op = Tp(ip).includes(pp) ? pp : Tp(pp).includes(ip) ? ip : null;
      if (null === Op || "joystick" === Op) return !1;
      const op = Op === pp ? ip : pp;
      if ("menu" === Op) return (0, Pi.y)(op, cp.hudElements[op]);
      if ("hotbar" !== Op || !Np(op)) return !0;
      if ((0, Xp.J)(cp.hudElements[op]) || (0, Xp.J)(cp.hudElements.inventory)) return !1;
      return !(cp.hudLocked.includes(op) || cp.hudLocked.includes("inventory")) || (0, Xp.I)(cp.hudElements.hotbar)
    };
    var yi = cp(2543),
      Ui = cp(3246),
      wi = cp(9019);
    const vi = pp => ({
      [rp]: pp
    });

    function ti(pp) {
      let {
        id: ip,
        slot: cp,
        icon: Op,
        label: Ip,
        hidden: Sp,
        className: xp,
        face: Yp
      } = pp;
      const Dp = (0, op.useRef)(null);
      return (0, op.useLayoutEffect)((() => {
        Yp && Dp.current && (0, wi.j)(Dp.current, Yp)
      }), [Yp]), (0, ep.jsxs)("div", {
        className: Lp()("TouchKeyHit", `TouchSlot${cp}`, xp, {
          HudPreviewGhost: Sp.has(ip)
        }),
        ...vi(ip),
        children: [Yp && (0, ep.jsx)("div", {
          ref: Dp,
          className: Lp()("TouchKey", {
            Labelled: Yp.classList.contains("Labelled")
          })
        }), !Yp && (0, ep.jsxs)("div", {
          className: Lp()("TouchKey", {
            Labelled: void 0 !== Ip
          }),
          children: [Op && (0, ep.jsx)(Cp.d, {
            name: Op
          }), void 0 !== Ip && (0, ep.jsx)("span", {
            className: "TouchKeyLabel",
            children: Ip
          })]
        })]
      })
    }

    function Hi(pp) {
      let {
        item: ip,
        selected: cp
      } = pp;
      const Op = (0, op.useRef)(null);
      return (0, op.useLayoutEffect)((() => {
        Op.current && (0, wi.j)(Op.current, ip)
      }), [ip]), (0, ep.jsx)("div", {
        ref: Op,
        className: Lp()("InvenItem", {
          Selected: cp
        })
      })
    }
    const di = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      ei = pp => void 0 === pp ? {} : {
        style: {
          "--parked": pp
        }
      };

    function ui(pp) {
      let {
        id: ip,
        hidden: cp,
        parked: Op,
        unslotted: op = !1
      } = pp;
      return (0, ep.jsx)("div", {
        className: Lp()("TopRightIcon", yi.n[ip], {
          HudPreviewGhost: cp.has(ip),
          [Pi.d]: void 0 !== Op,
          [Pi.h]: op
        }),
        ...ei(Op),
        children: (0, ep.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...vi(ip),
          children: (0, ep.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, ep.jsx)(Cp.d, {
              name: di[ip]
            })
          })
        })
      })
    }

    function ji(pp) {
      let {
        portraitPhone: ip,
        icons: cp,
        pinnedIcons: Op,
        hidden: Ip,
        moved: Sp,
        trayState: xp
      } = pp;
      const Yp = ip ? (0, Pi.E)(cp) : [],
        Dp = cp.filter((pp => "settings" === pp)),
        Ap = cp.filter((pp => "settings" !== pp && !Yp.includes(pp))).reverse(),
        Pp = Yp.length > 0 && "gone" === xp,
        Wp = [...Dp, ...Pp ? ["tray"] : [], ...Ap].filter((pp => "tray" === pp || Ip.has(pp) && !Sp.has(pp))),
        yp = pp => {
          const ip = Wp.indexOf(pp);
          return ip < 0 ? void 0 : ip
        },
        Up = (pp, ip) => (0, ep.jsx)(ui, {
          id: pp,
          hidden: Ip,
          parked: ip ? yp(pp) : void 0,
          unslotted: ip && Ip.has(pp) && Sp.has(pp)
        }, pp);
      return (0, ep.jsxs)("div", {
        className: Lp()("TopRightIcons TouchInGame", {
          Column: ip
        }),
        children: [Dp.map((pp => Up(pp, !0))), Yp.length > 0 && (0, ep.jsxs)("div", {
          className: Lp()("TopRightIcon TopRightTrayToggle Open", {
            [Pi.d]: Pp
          }),
          ...ei(yp("tray")),
          children: [(0, ep.jsx)("div", {
            className: Lp()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== xp
            }),
            children: (0, ep.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, ep.jsx)(Cp.d, {
                name: "ellipsis"
              })
            })
          }), (0, ep.jsx)("div", {
            className: "TopRightTray",
            children: Yp.map((pp => Up(pp, !1)))
          })]
        }), Ap.map((pp => (0, ep.jsxs)(op.Fragment, {
          children: ["perspective" === pp && null !== Op.rightOfCamera && (0, ep.jsx)(ki, {
            icon: Op.rightOfCamera
          }), Up(pp, !0)]
        }, pp))), null !== Op.leftEnd && (0, ep.jsx)(ki, {
          icon: Op.leftEnd
        })]
      })
    }

    function ki(pp) {
      let {
        icon: ip
      } = pp;
      return (0, ep.jsx)("div", {
        className: "TopRightIcon",
        children: (0, ep.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, ep.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, ep.jsx)(Cp.d, {
              name: ip
            })
          })
        })
      })
    }

    function mi(pp) {
      let {
        next: ip,
        hidden: cp
      } = pp;
      return (0, ep.jsx)("div", {
        className: Lp()("HotBarArrow", ip ? "Next" : "Previous", {
          HudPreviewGhost: cp
        }),
        ...vi("arrows"),
        children: (0, ep.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, ep.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, ep.jsx)(Cp.d, {
              name: ip ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function Ri() {
      return (0, ep.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, ep.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, ep.jsx)("div", {
            className: "SocialBar",
            children: (0, ep.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, ep.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, ep.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, ep.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, ep.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, ep.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, ep.jsx)(Cp.d, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, ep.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, ep.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, ep.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, ep.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, ep.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, ep.jsx)(Cp.d, {
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
    const qi = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Mi = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      Ci = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      Ei = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function Xi(pp) {
      let {
        presence: ip,
        portraitPhone: cp,
        hidden: op,
        actionButtons: Ip,
        joystickFixed: Sp,
        keysAbove: xp,
        auraBar: Yp,
        trayState: Dp,
        moved: Pp
      } = pp;
      const {
        t: Wp
      } = (0, Op.H)(), {
        faces: yp,
        items: Up
      } = ip, wp = pp => ({
        HudPreviewGhost: fp(pp).some((pp => op.has(pp)))
      });
      return (0, ep.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, ep.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, ep.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, ep.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, ep.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, ep.jsx)("div", {
              className: "InGameHeaderGameName",
              children: Wp("hudLayout:previewGameName")
            })]
          })
        }), (0, ep.jsx)("div", {
          className: "TopLeftElements",
          children: (0, ep.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, ep.jsxs)("div", {
              className: "Chat",
              children: [(0, ep.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [Wp("hudLayout:previewChatLine"), Wp("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), Wp("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((pp => (0, ep.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, ep.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, ep.jsx)("div", {
                      className: "IndividualText",
                      children: pp
                    })
                  })
                }, pp)))
              }), (0, ep.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: Lp()("ChatIconWrapper SmallTextLight", wp("chat")),
                ...vi("chat"),
                children: (0, ep.jsx)(Cp.d, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, ep.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, ep.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, ep.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, ep.jsx)("div", {
                className: "TopRightIconsContainer",
                ...vi("menu"),
                children: (0, ep.jsx)(ji, {
                  portraitPhone: cp,
                  icons: ip.rowIcons,
                  pinnedIcons: ip.pinnedIcons,
                  hidden: op,
                  trayState: Dp,
                  moved: Pp
                })
              })
            }), Ap.featureFlags.useSocialFeatures && (0, ep.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, ep.jsx)(Ri, {})
            })]
          })
        }), (0, ep.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, ep.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, ep.jsxs)("div", {
            className: "TouchInteractKey",
            ...vi("interact"),
            children: [(0, ep.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, ep.jsx)(Cp.d, {
                name: "hand-back-point-up"
              })
            }), (0, ep.jsx)("div", {
              children: Wp("hudLayout:previewInteract")
            })]
          })
        }), (0, ep.jsx)("div", {
          className: "BottomCentre",
          children: (0, ep.jsxs)("div", {
            className: "BottomElements",
            children: [(0, ep.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, ep.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, ep.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...vi("hotbar"),
                children: (0, ep.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, ep.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, ep.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, ep.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, ep.jsx)(Cp.d, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), Yp && (0, ep.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, ep.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, ep.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, Ui.f)("glint"),
                    alt: ""
                  }), (0, ep.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, ep.jsx)("div", {
                  className: "AuraBar",
                  children: (0, ep.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, ep.jsx)("div", {
                className: "HotBarRow",
                children: (0, ep.jsx)("div", {
                  className: Lp()("HotBarContainer Touch", {
                    KeysAbove: xp
                  }),
                  children: (0, ep.jsxs)("div", {
                    className: "HotBar",
                    ...vi("hotbar"),
                    children: [(0, ep.jsxs)("div", {
                      className: Lp()("TouchInventoryKeys", {
                        NoAuraBar: !Yp
                      }),
                      children: [(0, ep.jsx)("div", {
                        className: Lp()("TouchInventoryKey ShopKey", wp("shop"), {
                          Hidden: !ip.shop
                        }),
                        ...vi("shop"),
                        children: (0, ep.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, ep.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, ep.jsx)(Cp.d, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, ep.jsx)("div", {
                        className: Lp()("TouchInventoryKey BagKey", wp("bag"), {
                          Hidden: !ip.bag
                        }),
                        ...vi("bag"),
                        children: (0, ep.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, ep.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, ep.jsx)(Cp.d, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, ep.jsx)(mi, {
                      next: !1,
                      hidden: op.has("arrows")
                    }), (0, ep.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== Up && Up.map(((pp, ip) => (0, ep.jsx)(Hi, {
                        item: pp,
                        selected: pp.classList.contains("Selected")
                      }, ip))), null === Up && Ci.map((pp => {
                        const ip = Ei[pp];
                        return (0, ep.jsx)("div", {
                          className: Lp()("InvenItem", {
                            Selected: 0 === pp
                          }),
                          children: ip && (0, ep.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, ep.jsx)(Cp.d, {
                              name: ip
                            })
                          })
                        }, pp)
                      }))]
                    }), (0, ep.jsx)(mi, {
                      next: !0,
                      hidden: op.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, ep.jsx)("div", {
              className: "BottomRightElements",
              children: (0, ep.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== yp && wi.e.map((pp => {
                  const ip = yp[pp];
                  return ip && (0, ep.jsx)(ti, {
                    id: wi.c[pp],
                    slot: pp,
                    face: ip,
                    className: qi[pp],
                    hidden: op
                  }, pp)
                })), (0, wi.n)(ip, Ip).map((pp => (0, ep.jsx)(ti, {
                  id: wi.c[pp],
                  slot: pp,
                  icon: Mi[pp].icon,
                  label: Wp(Mi[pp].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: op
                }, pp))), null === yp && (0, ep.jsxs)(ep.Fragment, {
                  children: [(0, ep.jsx)(ti, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: op
                  }), (0, ep.jsx)(ti, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: op
                  }), Ip && (0, ep.jsxs)(ep.Fragment, {
                    children: [(0, ep.jsx)(ti, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: op
                    }), (0, ep.jsx)(ti, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: op
                    })]
                  }), (0, wi.f)(Ip).map((pp => (0, ep.jsx)(ti, {
                    id: wi.c[pp],
                    slot: pp,
                    icon: Mi[pp].icon,
                    label: Wp(Mi[pp].labelKey),
                    hidden: op
                  }, pp))), (0, ep.jsx)(ti, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: op
                  })]
                })]
              })
            })]
          })
        }), (0, ep.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, ep.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, ep.jsxs)("div", {
              className: Lp()("Joystick Resting HudPreviewJoystick", {
                Floating: !Sp
              }),
              ...vi("joystick"),
              children: [(0, ep.jsx)("div", {
                className: "JoystickBase"
              }), (0, ep.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), ip.sprint && (0, ep.jsx)("div", {
            className: Lp()("TouchSprintHit", wp("sprint"), {
              AtHome: !Sp
            }),
            ...vi("sprint"),
            children: (0, ep.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, ep.jsx)(Cp.d, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function li() {
      const [pp, ip] = (0, op.useState)({}), cp = (0, op.useCallback)((pp => {
        ip((ip => [...new Set([...Object.keys(ip), ...Object.keys(pp)])].every((cp => ip[cp] === pp[cp])) ? ip : pp))
      }), []);
      return [pp, cp]
    }
    const Qi = .05;

    function Ji(pp) {
      var ip;
      let {
        selected: cp,
        layout: op,
        actionButtons: Ip,
        keyNames: Sp,
        overlaps: xp,
        scaleCaps: Dp,
        joystickFixed: Ap,
        onScale: Pp,
        onHidden: Wp,
        onReset: yp,
        locked: Up,
        lockable: wp,
        onLocked: vp,
        extra: tp
      } = pp;
      const {
        t: Hp
      } = (0, Op.H)(), dp = cp ? Gp[cp] : null, jp = null !== cp && Up.has(cp), kp = (cp && op.hudElements[cp] || Xp.m)[2], mp = null !== (ip = cp && Dp[cp]) && void 0 !== ip ? ip : Xp.j, Rp = pp => {
        cp && Pp(cp, Math.min(mp, Math.round(100 * (kp + .1 * pp)) / 100))
      };
      return (0, ep.jsxs)(ep.Fragment, {
        children: [(0, ep.jsxs)("div", {
          className: Lp()("HudQuickName SmallTextBold", {
            Overlap: xp.length > 0
          }),
          children: [xp.length > 0 && (0, ep.jsx)(Cp.d, {
            name: "triangle-exclamation"
          }), dp ? Zp(dp.id, Ip, Hp, Sp) : Hp("hudLayout:fullScreenHint"), xp.length > 0 && (0, ep.jsx)("span", {
            className: "HudQuickOverlap",
            children: Hp("hudLayout:overlapsShort", {
              names: zp(xp, Ip, Hp, Sp)
            })
          })]
        }), (null === dp || void 0 === dp ? void 0 : dp.scale) && (0, ep.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, ep.jsx)(Yp.S, {
            disabled: jp || kp <= Xp.k,
            ariaLabel: Hp("hudLayout:smaller"),
            onClick: () => {
              Rp(-1)
            },
            children: (0, ep.jsx)(Cp.d, {
              name: "minus"
            })
          }), (0, ep.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*kp)}%`
          }), (0, ep.jsx)(Yp.S, {
            disabled: jp || kp >= mp,
            ariaLabel: Hp("hudLayout:larger"),
            onClick: () => {
              Rp(1)
            },
            children: (0, ep.jsx)(Cp.d, {
              name: "plus"
            })
          })]
        }), (dp || tp) && (0, ep.jsxs)("div", {
          className: "HudQuickActions",
          children: [dp && (0, ep.jsxs)(ep.Fragment, {
            children: [(0, ep.jsx)(ii, {
              id: dp.id,
              actionButtons: Ip,
              keyNames: Sp,
              locked: jp,
              lockable: wp(dp.id),
              onLocked: vp
            }), (0, ep.jsx)(Kp, {
              id: dp.id,
              elements: op.hudElements,
              actionButtons: Ip,
              keyNames: Sp,
              onHidden: Wp
            }), (0, ep.jsx)(Vp, {
              id: dp.id,
              elements: op.hudElements,
              actionButtons: Ip,
              keyNames: Sp,
              locked: jp,
              onReset: yp
            }), Si(dp.id, Ap) && (0, ep.jsx)(xi, {})]
          }), tp]
        })]
      })
    }
    var Bi = cp(1133),
      Ni = cp(4503);
    const Ti = "HudPreviewDoc",
      fi = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      bi = new Set([Ti, ...Object.values(fi)]),
      ai = new Set(Xp.v.map(yi.z)),
      ni = new Set(yi.i),
      Fi = 'style, link[rel="stylesheet"]';

    function gi(pp, ip, cp, Op) {
      const op = new Map,
        Ip = new Set,
        Sp = new URL(pp.baseURI).origin,
        xp = ip => {
          var cp;
          if ("LINK" !== ip.nodeName) return !0;
          const Op = null === (cp = ip.getAttribute("href")) || void 0 === cp ? void 0 : cp.trim();
          if (!Op) return !1;
          try {
            return new URL(Op, pp.baseURI).origin === Sp
          } catch {
            return !1
          }
        };
      let Lp = null;
      const Yp = () => {
          Lp !== (0 === Ip.size) && (Lp = 0 === Ip.size, null === Op || void 0 === Op || Op(Lp))
        },
        Dp = pp => {
          const ip = pp.cloneNode(!0);
          if ("LINK" === ip.tagName) {
            Ip.add(ip);
            const pp = () => {
              Ip.delete(ip), Yp()
            };
            ip.addEventListener("load", pp), ip.addEventListener("error", pp), cp && ip.addEventListener("load", cp)
          }
          return ip
        },
        Ap = () => {
          const Op = function(pp) {
              const ip = [...pp.body.children].filter((pp => pp.matches(Fi)));
              return [...pp.head.querySelectorAll(Fi), ...ip]
            }(pp).filter(xp),
            Sp = new Set(Op);
          for (const [pp, ip] of op) Sp.has(pp) || (ip.remove(), op.delete(pp), Ip.delete(ip));
          let Lp = null;
          for (let pp = Op.length - 1; pp >= 0; pp--) {
            const Ip = Op[pp];
            let Sp = op.get(Ip);
            Sp ? "STYLE" === Ip.tagName && Sp.textContent !== Ip.textContent && (Sp.textContent = Ip.textContent, null === cp || void 0 === cp || cp()) : (Sp = Dp(Ip), op.set(Ip, Sp), ip.head.insertBefore(Sp, Lp)), Lp = Sp
          }
          Yp()
        };
      Ap();
      const Pp = new MutationObserver(Ap);
      return Pp.observe(pp.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), Pp.observe(pp.body, {
        childList: !0
      }), () => {
        Pp.disconnect()
      }
    }

    function Gi(pp, ip, cp) {
      let {
        keysAbove: Op
      } = cp;
      const op = [...pp.documentElement.classList].filter((pp => !bi.has(pp) && !ni.has(pp))),
        Ip = [...ip.documentElement.classList].filter((pp => ni.has(pp))),
        Sp = [Ti, fi.hotbar, fi.hasShop, fi.hasBag];
      Op && Sp.push(fi.keysAbove), ip.documentElement.className = [...op, ...Sp, ...Ip].join(" ")
    }
    const ri = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Zi(pp, ip, cp, Op, op) {
      const Ip = (0, Xp.y)(cp, Op, "joystick"),
        Sp = (0, yi.A)((0, yi.M)(cp, Op, op), Op),
        xp = Sp.classes.filter((pp => !ai.has(pp))),
        Lp = ip.documentElement,
        Yp = cp.hudLayouts[Op].hudSafe,
        Dp = (0, yi.F)(Yp, window.innerWidth, window.innerHeight, zi(), Yp ? (0, yi.P)(ip) : 0);
      (0, yi.T)({
        ...Sp,
        classes: xp
      }, {
        vars: Lp,
        safe: Lp,
        classes: Lp
      }), Lp.style.setProperty("--preview-joystick-shift-left", `${Dp[3]}px`), Lp.style.setProperty("--preview-joystick-shift-bottom", `${Dp[2]}px`), Lp.style.setProperty("--preview-joystick-scale", String(Ip[2])), (0, Ni.f)(Lp, ip, cp, Op);
      for (const Ap of ri) Lp.style.setProperty(Ap, pp.documentElement.style.getPropertyValue(Ap) || "0px")
    }

    function zi() {
      return (0, yi.L)(Dp.c.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function si(pp) {
      return (0, yi.u)(zi(), (0, yi.P)(pp))
    }

    function Ki(pp, ip, cp) {
      const Op = pp.documentElement.style,
        op = (0, yi.I)(ip),
        Ip = Op.getPropertyValue(op);
      try {
        return cp((pp => {
          Op.setProperty(op, String(pp))
        }))
      } finally {
        "" === Ip ? Op.removeProperty(op) : Op.setProperty(op, Ip)
      }
    }

    function Vi(pp, ip) {
      const [cp, Op] = Ki(pp, "hotbar", (ip => {
        const cp = cp => {
          var Op, op;
          return ip(cp), null !== (Op = null === (op = pp.querySelector(".HotBarGameItemsContainer")) || void 0 === op ? void 0 : op.getBoundingClientRect().width) && void 0 !== Op ? Op : 0
        };
        return [cp(1), cp(Xp.j)]
      }));
      return cp <= 0 ? Xp.j : Math.min(Xp.j, Math.max(1, Math.floor(Op / cp / ip + 1e-6) * ip))
    }
    const pc = 3,
      ic = .5,
      cc = pp => pp.right - pp.left;
    const Oc = (pp, ip) => Math.abs((0, Ep.d)(pp).x - (0, Ep.d)(ip).x) + Math.abs((0, Ep.d)(pp).y - (0, Ep.d)(ip).y) + Math.abs(cc(pp) - cc(ip));

    function oc(pp, ip, cp, Op, op) {
      let {
        canKeep: Ip = () => !0,
        passes: Sp = pc,
        before: xp
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const Lp = ip.hudLayouts[cp].hudLocked.filter(Ip);
      if (0 === Lp.length) return ip;
      const Yp = [...Jp].filter((Op => !Lp.includes(Op) && (0, Xp.y)(pp, cp, Op).join() === (0, Xp.y)(ip, cp, Op).join())),
        Dp = pp => {
          const ip = (0, Ep.J)(Yp.flatMap((ip => pp[ip] ? [pp[ip]] : [])));
          return {
            ...pp,
            cluster: null !== ip && void 0 !== ip ? ip : void 0
          }
        };
      let Ap = null;
      const Pp = pp => {
          Ap = pp;
          const ip = op(pp);
          return ip && {
            ...ip,
            boxes: Dp(ip.boxes)
          }
        },
        Wp = xp ? {
          ...xp,
          boxes: Dp(xp.boxes)
        } : Pp(pp),
        yp = Wp && Pp(ip);
      if (!Wp || !yp) return ip;
      const Up = Wp.boxes;
      let wp = yp.boxes;
      const vp = Wp.keysAbove !== yp.keysAbove,
        tp = vp || Boolean(Wp.shopAlone) !== Boolean(yp.shopAlone),
        Hp = new Set(Lp.filter((pp => !Np(pp) || !("bag" === pp ? vp : tp))));
      let dp = ip;
      for (let kp = 0; kp < Sp && Hp.size > 0; kp++) {
        var ep, jp;
        const pp = new Map;
        for (const ip of Hp) {
          const op = Up[ip],
            Ip = wp[ip],
            Sp = op && Ip ? Ic(ip, (0, Xp.y)(dp, cp, ip), op, Ip, Op) : null;
          Sp ? pp.set(ip, Sp) : Hp.delete(ip)
        }
        if (0 === pp.size) break;
        let op = dp;
        for (const [ip, Op] of pp) op = (0, Xp.ab)(op, cp, ip, Op);
        const Ip = null === (ep = Pp(op)) || void 0 === ep ? void 0 : ep.boxes;
        if (!Ip) return ip;
        let Sp = dp;
        for (const [ip, Op] of pp) {
          const pp = Ip[ip];
          pp && Oc(Up[ip], pp) < Oc(Up[ip], wp[ip]) - ic ? Sp = (0, Xp.ab)(Sp, cp, ip, Op) : Hp.delete(ip)
        }
        if (Sp === dp) break;
        const xp = [...pp.keys()].every((pp => Hp.has(pp)));
        dp = xp ? op : Sp;
        const Lp = xp ? Ip : null === (jp = Pp(dp)) || void 0 === jp ? void 0 : jp.boxes;
        if (!Lp) return ip;
        wp = Lp
      }
      return Ap !== dp && op(dp), dp
    }

    function Ic(pp, ip, cp, Op, op) {
      let [Ip, Sp, xp] = ip;
      const Lp = Xp.u[pp],
        Yp = {};
      Lp.scale && cc(Op) > 0 && Math.abs(cc(cp) - cc(Op)) > ic && (Yp.scale = Math.max(Xp.k, Math.min(Xp.j, xp * cc(cp) / cc(Op))));
      const Dp = (0, Ep.d)(cp).x - (0, Ep.d)(Op).x,
        Ap = (0, Ep.d)(cp).y - (0, Ep.d)(Op).y;
      return Lp.move && (Math.abs(Dp) > ic || Math.abs(Ap) > ic) && (Yp.dx = Ip + Dp / op.width, Yp.dy = Sp + Ap / op.height), void 0 === Yp.scale && void 0 === Yp.dx ? null : Yp
    }
    let Sc = 0;

    function xc() {
      return Sc > 0
    }
    const Lc = pp => 0 === pp.dx && 0 === pp.dy,
      Yc = .001,
      Dc = pp => Math.abs(pp.dx) >= 5e-4 || Math.abs(pp.dy) >= 5e-4 ? pp : {
        dx: pp.dx,
        dy: pp.dy < 0 ? -.001 : Yc
      };

    function Ac(pp) {
      let {
        preview: ip,
        stageRef: cp,
        ringRef: Op,
        centreLineRef: Ip,
        snapCentre: Sp,
        ready: xp,
        measure: Lp,
        k: Yp,
        viewport: Dp,
        boxes: Ap,
        pieces: Pp,
        selected: Wp,
        insets: yp,
        layout: Up,
        canMove: wp,
        onSelect: vp,
        onMove: tp
      } = pp;
      const Hp = (0, op.useRef)(null),
        dp = (0, op.useCallback)((() => null !== Hp.current), []),
        ep = (pp, ip) => {
          if (!ip) return null;
          const cp = (0, Ep.d)(pp.origin),
            Op = (0, Ep.d)(ip),
            op = (pp.to.dx - pp.from.dx) * Dp.width,
            Ip = (pp.to.dy - pp.from.dy) * Dp.height,
            Sp = ip.right - ip.left,
            xp = ip.bottom - ip.top;
          return {
            skew: {
              x: Op.x - cp.x - op,
              y: Op.y - cp.y - Ip
            },
            box: {
              left: cp.x - Sp / 2,
              top: cp.y - xp / 2,
              right: cp.x + Sp / 2,
              bottom: cp.y + xp / 2
            }
          }
        },
        jp = (pp, cp) => {
          var op;
          const Sp = Hp.current;
          if (!Sp || Sp.pointerId !== pp.pointerId) return;
          Hp.current = null, null === (op = Ip.current) || void 0 === op || op.classList.remove("Shown", "Snapped");
          const xp = Op.current;
          if (xp && null !== Sp.ringStyle && xp.setAttribute("style", Sp.ringStyle), cp && Sp.moved) {
            const pp = Lc(Sp.to) ? null : Lp(Sp.id),
              ip = pp ? (0, Ep.I)(pp, (0, Ep.H)(Dp.width, Dp.height, yp)) : {
                x: 0,
                y: 0
              },
              cp = {
                dx: Sp.to.dx + ip.x / Dp.width,
                dy: Sp.to.dy + ip.y / Dp.height
              },
              Op = Lc(Sp.to) ? cp : Dc(cp);
            tp(Sp.id, Op.dx, Op.dy)
          } else ip(Sp.id, null), cp && Sp.tapPick && vp(Sp.tapPick)
        };
      return {
        busy: dp,
        handlers: {
          onPointerDown: pp => {
            var ip;
            if (!xp || Hp.current || !pp.target.closest(".HudPreviewHandle")) return;
            const Op = cp.current.getBoundingClientRect(),
              op = {
                x: (pp.clientX - Op.left) / Yp,
                y: (pp.clientY - Op.top) / Yp
              },
              Ip = (0, Ep.B)(op, Pp, 40 / Yp),
              Sp = null !== Wp ? hp.get(Wp) : void 0,
              Lp = void 0 !== Sp && null !== (0, Ep.B)(op, Pp.filter((pp => {
                let {
                  id: ip
                } = pp;
                return Sp.has(ip)
              })), 40 / Yp),
              Dp = "menu" === Wp && void 0 !== Ap.menu && (0, Ep.h)(Ap.menu, op) && ("menu" === Ip || null !== Ip && (0, Pi.y)(Ip, Up.hudElements[Ip])),
              yp = Lp ? Wp : Dp ? "menu" : null,
              tp = null !== yp,
              dp = null !== yp && void 0 !== yp ? yp : Ip;
            if (!dp) return;
            if (function(pp) {
                Sc++;
                const ip = cp => {
                  cp.pointerId === pp && (Sc = Math.max(0, Sc - 1), window.removeEventListener("pointerup", ip, !0), window.removeEventListener("pointercancel", ip, !0))
                };
                window.addEventListener("pointerup", ip, !0), window.addEventListener("pointercancel", ip, !0)
              }(pp.pointerId), !wp(dp)) return void vp(tp && Ip ? Ip : dp);
            vp(dp);
            const [ep, jp] = null !== (ip = Up.hudElements[dp]) && void 0 !== ip ? ip : [0, 0], kp = {
              dx: ep,
              dy: jp
            }, mp = {
              skew: {
                x: 0,
                y: 0
              },
              box: Ap[dp]
            };
            Hp.current = {
              id: dp,
              pointerId: pp.pointerId,
              startX: pp.clientX,
              startY: pp.clientY,
              origin: Ap[dp],
              from: kp,
              to: kp,
              moved: !1,
              home: Lc(kp) ? {
                centre: (0, Ep.d)(Ap[dp]),
                anchor: mp
              } : null,
              away: Lc(kp) ? null : mp,
              anchor: mp,
              ringStyle: null,
              tapPick: tp ? Ip : null
            }, pp.currentTarget.setPointerCapture(pp.pointerId)
          },
          onPointerMove: pp => {
            const cp = Hp.current;
            if (!cp || cp.pointerId !== pp.pointerId) return;
            const op = pp.clientX - cp.startX,
              xp = pp.clientY - cp.startY;
            if (!cp.moved && Math.hypot(op, xp) < 5) return;
            const Ap = !cp.moved;
            var Pp, Wp;
            (cp.moved = !0, Ap) && (cp.ringStyle = null !== (Pp = null === (Wp = Op.current) || void 0 === Wp ? void 0 : Wp.getAttribute("style")) && void 0 !== Pp ? Pp : null);
            const Up = (0, Ep.H)(Dp.width, Dp.height, yp);
            if (!cp.home) {
              var wp;
              cp.to = {
                dx: 0,
                dy: 0
              }, ip(cp.id, cp.to);
              const pp = Lp(cp.id),
                Op = null !== (wp = ep(cp, pp)) && void 0 !== wp ? wp : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: cp.origin
                },
                op = (0, Ep.d)(cp.origin);
              cp.home = {
                centre: pp ? (0, Ep.d)(pp) : {
                  x: op.x - cp.from.dx * Dp.width,
                  y: op.y - cp.from.dy * Dp.height
                },
                anchor: Op
              }
            }
            const vp = cp.home;
            let tp = !1;
            const dp = pp => {
                tp = !1;
                let Op = (0, Ep.o)(pp.box, op / Yp, xp / Yp, Up);
                const Ip = Dp.width / 2;
                if (Sp && Math.abs((0, Ep.d)(cp.origin).x + Op.x - Ip) <= 8 / Yp) {
                  const ip = Ip - (0, Ep.d)(cp.origin).x,
                    op = (0, Ep.o)(pp.box, ip, Op.y, Up);
                  tp = Math.abs(op.x - ip) < .01, tp && (Op = op)
                }
                const Lp = (0, Ep.y)(cp.from, Op.x - pp.skew.x, Op.y - pp.skew.y, Dp.width, Dp.height);
                cp.to = Dc(Lp), cp.anchor = pp, ip(cp.id, cp.to)
              },
              jp = (0, Ep.o)(vp.anchor.box, op / Yp, xp / Yp, Up),
              kp = Ip.current,
              mp = (0, Ep.d)(cp.origin),
              Rp = ((0, Xp.K)(cp.id) ? 20 : 6) / Yp;
            if (Math.abs(mp.x + jp.x - vp.centre.x) <= Rp && Math.abs(mp.y + jp.y - vp.centre.y) <= Rp) cp.to = {
              dx: 0,
              dy: 0
            }, cp.anchor = vp.anchor, tp = Sp && Math.abs(vp.centre.x - Dp.width / 2) < 1, ip(cp.id, cp.to);
            else if (cp.away) dp(cp.away);
            else {
              var qp;
              dp(vp.anchor), cp.away = null !== (qp = ep(cp, Lp(cp.id))) && void 0 !== qp ? qp : vp.anchor, dp(cp.away)
            }
            null === kp || void 0 === kp || kp.classList.add("Shown"), null === kp || void 0 === kp || kp.classList.toggle("Snapped", tp), (pp => {
              const ip = Op.current;
              if (ip) {
                const {
                  skew: cp,
                  box: Op
                } = pp.anchor;
                ip.style.left = Op.left * Yp + "px", ip.style.top = Op.top * Yp + "px", ip.style.width = (Op.right - Op.left) * Yp + "px", ip.style.height = (Op.bottom - Op.top) * Yp + "px", ip.style.translate = `${((pp.to.dx-pp.from.dx)*Dp.width+cp.x)*Yp}px ${((pp.to.dy-pp.from.dy)*Dp.height+cp.y)*Yp}px`
              }
            })(cp)
          },
          onPointerUp: pp => {
            jp(pp, !0)
          },
          onPointerCancel: pp => {
            jp(pp, !1)
          }
        }
      }
    }
    var Pc = cp(9024);

    function Wc(pp, ip) {
      return Object.keys(pp).filter((pp => pp !== ip)).map((ip => pp[ip]))
    }

    function yc(pp) {
      return pp.map((pp => {
        let {
          id: ip,
          box: cp
        } = pp;
        return `${ip}:${cp.left},${cp.top},${cp.right},${cp.bottom}`
      })).join(";")
    }

    function Uc(pp) {
      const ip = [],
        cp = ip => (0, Xp.K)(ip) && !pp.documentElement.classList.contains((0, yi.B)(ip));
      for (const xp of pp.querySelectorAll(`[${rp}]`)) {
        const pp = cp(xp.getAttribute(rp)) ? xp.querySelector(".ScaleOnHover") : null,
          Op = (null !== pp && void 0 !== pp ? pp : xp).getBoundingClientRect();
        (Op.width > 0 || Op.height > 0) && ip.push({
          id: xp.getAttribute(rp),
          box: (0, Ep.j)(Op)
        })
      }
      const Op = pp => (0, Ep.J)(ip.filter((ip => {
          let {
            id: cp
          } = ip;
          return pp(cp)
        })).map((pp => {
          let {
            box: ip
          } = pp;
          return ip
        }))),
        op = {};
      for (const xp of new Set(ip.map((pp => pp.id)))) op[xp] = Op((pp => pp === xp));
      for (const [xp, Lp] of hp) {
        const pp = Op((pp => Lp.has(pp)));
        pp && (op[xp] = pp)
      }
      const Ip = pp.querySelector(".TouchInventoryKeys"),
        Sp = Ip ? (0, Ep.j)(Ip.getBoundingClientRect()) : null;
      return {
        boxes: op,
        pieces: ip,
        pairHome: Sp
      }
    }

    function wc(pp, ip, cp) {
      const Op = ip.right - ip.left,
        op = ip.bottom - ip.top;
      return Ki(pp, "cluster", (ip => {
        const Ip = cp => {
            ip(cp);
            const Op = [...pp.querySelectorAll(`[${rp}]:not(.HudPreviewGhost)`)].filter((pp => Jp.has(pp.getAttribute(rp)))).map((pp => (0, Ep.j)(pp.getBoundingClientRect()))),
              op = (0, Ep.J)(Op);
            return op ? {
              w: op.right - op.left,
              h: op.bottom - op.top
            } : null
          },
          Sp = pp => !pp || pp.w <= Op && pp.h <= op,
          xp = Ip(1),
          Lp = Ip(Xp.j);
        if (!xp || Sp(Lp)) return Xp.j;
        const Yp = (pp, ip, cp) => ip > pp ? 1 + (cp - pp) * (Xp.j - 1) / (ip - pp) : Xp.j;
        let Dp = Math.floor(Math.min(Xp.j, Yp(xp.w, Lp.w, Op), Yp(xp.h, Lp.h, op)) / cp + 1e-6) * cp;
        for (; Dp > 1 && !Sp(Ip(Dp));) Dp = Math.round(100 * (Dp - cp)) / 100;
        return Math.max(1, Dp)
      }))
    }

    function vc(pp) {
      Gi(document, pp, {
        keysAbove: !1
      });
      const ip = parseFloat(getComputedStyle(pp.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        cp = Number.isFinite(ip) && ip < 0;
      return Gi(document, pp, {
        keysAbove: cp
      }), (0, Pc.b)(pp), cp
    }

    function tc(pp) {
      const ip = pp.querySelector(".TouchInventoryKey.ShopKey");
      return null !== ip && "1" === getComputedStyle(ip).getPropertyValue("--touch-shop-above").trim()
    }

    function Hc(pp, ip) {
      let {
        layout: cp,
        orientation: Op,
        viewport: Ip,
        replicaKey: Sp,
        joystickFixed: xp,
        busy: Lp
      } = ip;
      const [Yp, Dp] = (0, op.useState)(null), [Ap, Pp] = (0, op.useState)({
        boxes: {},
        pieces: []
      }), [Wp, yp] = (0, op.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [Up, wp] = (0, op.useState)(!1), [vp, tp] = (0, op.useState)(!1), [Hp, dp] = (0, op.useState)(!1), ep = (0, op.useCallback)((pp => {
        tp(pp), pp && dp(!0)
      }), []), jp = cp.hudLayouts[Op].hudSafe;
      (0, op.useLayoutEffect)((() => {
        const ip = pp.current.contentDocument;
        ip.open(), ip.write("<!DOCTYPE html><html><head></head><body></body></html>"), ip.close(), Dp(ip)
      }), [pp]);
      const kp = (0, op.useCallback)((() => {
          Yp && ((0, Pi.z)(Yp), Pp(Uc(Yp)), yp(function(pp, ip) {
            const cp = si(pp),
              [Op, op, Ip, Sp] = ip ? (0, yi.x)(ip, window.innerWidth, window.innerHeight, cp) : cp;
            return {
              top: Op,
              right: op,
              bottom: Ip,
              left: Sp
            }
          }(Yp, jp)))
        }), [Yp, jp]),
        mp = (0, op.useCallback)((() => {
          Yp && wp(vc(Yp))
        }), [Yp]),
        Rp = (0, op.useRef)((() => {}));
      return Rp.current = () => {
        mp(), Lp() || kp()
      }, (0, op.useLayoutEffect)((() => {
        if (Yp) return gi(document, Yp, (() => {
          Rp.current()
        }), ep)
      }), [Yp, ep]), (0, op.useLayoutEffect)(mp, [mp, Ip]), (0, op.useLayoutEffect)((() => {
        Yp && (Gi(document, Yp, {
          keysAbove: Up
        }), Zi(document, Yp, cp, Op, xp), mp(), kp())
      }), [Yp, cp, Op, Up, Sp, xp, Ip, kp, mp]), (0, op.useEffect)((() => {
        var pp;
        if (!Yp) return;
        const ip = new ResizeObserver((() => {
          Lp() || kp()
        }));
        for (const cp of Yp.querySelectorAll(`[${rp}]`)) ip.observe(cp);
        return null === (pp = Yp.fonts) || void 0 === pp || pp.ready.then(kp), () => {
          ip.disconnect()
        }
      }), [Yp, kp, Lp, Sp]), {
        doc: Yp,
        boxes: Ap.boxes,
        pieces: Ap.pieces,
        insets: Wp,
        keysAbove: Up,
        ready: vp,
        settled: Hp
      }
    }
    const dc = ["Above", "Below", "Left", "Right"];

    function ec(pp, ip, cp, Op, op) {
      const Ip = cp[pp],
        Sp = (Ip.left + Ip.right) / 2,
        xp = (Ip.top + Ip.bottom) / 2,
        Lp = (7.5 * ip.length + 14) / Op,
        Yp = 18 / Op,
        Dp = {
          Above: {
            left: Sp - Lp / 2,
            top: Ip.top - Yp,
            right: Sp + Lp / 2,
            bottom: Ip.top
          },
          Below: {
            left: Sp - Lp / 2,
            top: Ip.bottom,
            right: Sp + Lp / 2,
            bottom: Ip.bottom + Yp
          },
          Left: {
            left: Ip.left - Lp,
            top: xp - Yp / 2,
            right: Ip.left,
            bottom: xp + Yp / 2
          },
          Right: {
            left: Ip.right,
            top: xp - Yp / 2,
            right: Ip.right + Lp,
            bottom: xp + Yp / 2
          }
        },
        Ap = Wc(cp, pp),
        Pp = {
          left: 0,
          top: 0,
          right: op.width,
          bottom: op.height
        };
      return dc[(0, Ep.u)(dc.map((pp => Dp[pp])), Ap, {
        bounds: Pp
      })]
    }

    function uc() {
      const [pp, ip] = (0, Di.b)();
      return (0, op.useMemo)((() => ({
        width: pp,
        height: ip
      })), [pp, ip])
    }

    function jc(pp) {
      var ip;
      const {
        layout: cp,
        orientation: Ip,
        selected: Sp,
        onSelect: xp,
        onMove: Yp,
        canMove: Dp,
        actionButtons: Ap,
        joystickFixed: Pp,
        presence: Wp,
        keyNames: Up,
        maxHeight: wp,
        fill: vp = !1,
        apiRef: tp
      } = pp, {
        t: Hp
      } = (0, Op.H)(), dp = uc(), jp = (null !== (ip = (0, yp.i)("maxAuraLevel")) && void 0 !== ip ? ip : 0) > 0, kp = cp.hudLayouts[Ip], mp = (0, op.useRef)(null), Rp = (0, op.useRef)(null), qp = (0, op.useRef)(null), Mp = (0, op.useRef)(null), lp = (0, op.useRef)(null), Qp = (0, op.useRef)(null), Jp = (0, Ai.d)(mp).width, Np = vp ? 1 : Jp > 0 ? (0, Ep.D)(Jp, dp.width, dp.height, wp) : 0, Tp = (0, op.useRef)((() => !1)), ap = (0, op.useCallback)((() => Tp.current()), []), np = `${Ap}:${Pp}:${jp}`, {
        doc: Fp,
        boxes: gp,
        pieces: Gp,
        insets: rp,
        keysAbove: zp,
        ready: sp,
        settled: Kp
      } = Hc(qp, {
        layout: cp,
        orientation: Ip,
        viewport: dp,
        replicaKey: np,
        joystickFixed: Pp,
        busy: ap
      }), Vp = (0, op.useCallback)((pp => {
        Fp && Zi(document, Fp, pp, Ip, Pp)
      }), [Fp, Ip, Pp]), ii = (0, op.useCallback)((pp => {
        if (!Fp || !Kp) return null;
        Vp(pp);
        const ip = vc(Fp),
          cp = function(pp, ip) {
            let {
              boxes: cp,
              pieces: Op,
              pairHome: op
            } = pp;
            const Ip = Op.find((pp => Bp.has(pp.id)));
            if (!Ip || !op) return cp;
            const Sp = (0, Ep.d)(op),
              xp = ip(Ip.id),
              Lp = cc(Ip.box) / xp / 2,
              Yp = (Ip.box.bottom - Ip.box.top) / xp / 2;
            return {
              ...cp,
              inventory: {
                left: Sp.x - Lp,
                top: Sp.y - Yp,
                right: Sp.x + Lp,
                bottom: Sp.y + Yp
              }
            }
          }(Uc(Fp), (ip => (0, Xp.y)(pp, Ip, ip)[2]));
        return {
          boxes: cp,
          keysAbove: ip,
          shopAlone: tc(Fp)
        }
      }), [Fp, Kp, Vp, Ip]), ci = (0, op.useRef)(null), Oi = (0, op.useRef)(null), oi = (0, op.useRef)(cp);
      oi.current = cp;
      const Ii = (0, op.useCallback)((() => {
        null !== ci.current && (cancelAnimationFrame(ci.current), ci.current = null)
      }), []);
      (0, op.useEffect)((() => Ii), [cp, Ii]);
      const Si = (0, op.useRef)(-1 / 0),
        {
          lockable: xi
        } = pp,
        Yi = (0, op.useCallback)((pp => {
          if (Vp(pp), Si.current = performance.now(), !Kp || 0 === cp.hudLayouts[Ip].hudLocked.length) return;
          const ip = cp;
          Ii(), ci.current = requestAnimationFrame((() => {
            var cp;
            if (ci.current = null, oi.current !== ip) return;
            const Op = (null === (cp = Oi.current) || void 0 === cp ? void 0 : cp.from) === ip ? Oi.current.measured : ii(ip);
            Op && (Oi.current = {
              from: ip,
              measured: Op
            }), Vp(Op ? oc(ip, pp, Ip, dp, ii, {
              canKeep: xi,
              passes: 1,
              before: Op
            }) : pp)
          }))
        }), [Vp, Kp, cp, Ip, dp, ii, xi, Ii]),
        Di = Ac({
          preview: (pp, ip) => {
            ip ? Yi((0, Xp.ab)(cp, Ip, pp, ip)) : (Ii(), Vp(cp))
          },
          stageRef: Rp,
          ringRef: Mp,
          centreLineRef: lp,
          snapCentre: cp.hudSnapCentre,
          ready: Kp,
          measure: pp => {
            const ip = Fp && sp ? Uc(Fp).boxes[pp] : void 0;
            return ip && (0, Ep.m)(ip, dp.width, dp.height) ? ip : null
          },
          k: Np,
          viewport: dp,
          boxes: gp,
          pieces: Gp,
          selected: Sp,
          insets: rp,
          layout: kp,
          canMove: Dp,
          onSelect: xp,
          onMove: (pp, ip, cp) => {
            Ii(), Yp(pp, ip, cp)
          }
        });
      (0, op.useLayoutEffect)((() => {
        Tp.current = Di.busy
      }), [Di.busy]);
      const Ui = (0, op.useRef)([]),
        wi = (0, op.useRef)(kp.hudElements);
      (0, op.useEffect)((() => {
        for (const op of Object.keys(kp.hudElements)) {
          var pp, ip, cp, Op;
          (null !== (pp = null === (ip = kp.hudElements[op]) || void 0 === ip ? void 0 : ip[2]) && void 0 !== pp ? pp : 1) > (null !== (cp = null === (Op = wi.current[op]) || void 0 === Op ? void 0 : Op[2]) && void 0 !== cp ? cp : 1) && Dp(op) && !(0, Pi.y)(op, kp.hudElements[op]) && Ui.current.push(...bp(op, zp, Dp))
        }
        wi.current = kp.hudElements
      }), [kp.hudElements, Dp, zp]), (0, op.useEffect)((() => {
        if (!sp) return;
        const pp = (0, Ep.H)(dp.width, dp.height, rp);
        for (const cp of ((pp, ip, cp, Op) => {
            const op = pp => {
              const op = ip[pp],
                {
                  x: Ip,
                  y: Sp
                } = op && Op(pp) ? (0, Ep.I)(op, cp) : {
                  x: 0,
                  y: 0
                };
              return op && {
                left: op.left + Ip,
                top: op.top + Sp,
                right: op.right + Ip,
                bottom: op.bottom + Sp
              }
            };
            return pp.flatMap((pp => {
              const Ip = ip[pp];
              if ("inventory" !== pp || !Ip || Ip.right - Ip.left <= cp.right - cp.left && Ip.bottom - Ip.top <= cp.bottom - cp.top) return [pp];
              const [Sp, xp] = [op("shop"), op("bag")];
              return Sp && xp && !(0, Ep.n)(Sp, xp, 0) ? ["shop", "bag"].filter(Op) : [pp]
            }))
          })(Ui.current.splice(0), gp, pp, Dp)) {
          const Op = gp[cp];
          if (!Op || Di.busy() || !(0, Ep.m)(Op, dp.width, dp.height)) continue;
          const op = (0, Ep.I)(Op, pp);
          if (0 !== op.x || 0 !== op.y) {
            var ip;
            const [pp, Op] = null !== (ip = kp.hudElements[cp]) && void 0 !== ip ? ip : [0, 0];
            Yp(cp, pp + op.x / dp.width, Op + op.y / dp.height)
          }
        }
      }), [gp, sp]), (0, op.useImperativeHandle)(tp, (() => ({
        setScale: (pp, ip) => {
          Yi((0, Xp.ab)(cp, Ip, pp, {
            scale: ip
          }))
        },
        setOpacity: pp => {
          Vp({
            ...cp,
            hudKeyOpacity: pp
          })
        },
        keepLocks: (pp, ip) => (Ii(), oc(pp, ip, Ip, dp, ii, {
          canKeep: xi
        })),
        setSafe: pp => {
          const ip = (0, yi.x)(pp, dp.width, dp.height, si(null !== Fp && void 0 !== Fp ? Fp : document));
          Yi((0, Xp.eb)(cp, Ip, pp)), Qp.current && (Qp.current.style.inset = ip.map((pp => pp * Np + "px")).join(" "))
        }
      })), [Vp, Yi, ii, Ii, xi, Fp, cp, Ip, dp, Np]);
      const vi = new Set(Object.keys(kp.hudElements).filter((pp => (0, Xp.r)(kp.hudElements, pp)))),
        ti = Sp ? gp[Sp] : void 0,
        Hi = Sp ? Zp(Sp, Ap, Hp, Up) : "",
        di = (0, Bi.e)(dp.width, dp.height),
        ei = Sp ? function(pp, ip, cp, Op) {
          const op = pp => fp(pp).some((pp => (0, Xp.r)(cp.hudElements, pp) || (0, Pi.w)(pp, cp, Op)));
          if (op(pp)) return [];
          const Ip = pp => {
              var ip, Op;
              return "bag" === pp && 1 !== (null !== (ip = null === (Op = cp.hudElements.shop) || void 0 === Op ? void 0 : Op[2]) && void 0 !== ip ? ip : 1) || fp(pp).some((pp => void 0 !== cp.hudElements[pp]))
            },
            Sp = hp.get(pp),
            xp = ip.filter((ip => {
              let {
                id: cp
              } = ip;
              return Sp ? Sp.has(cp) && !op(cp) : cp === pp
            })),
            Lp = new Set;
          for (const Yp of ip) Yp.id === pp || null !== Sp && void 0 !== Sp && Sp.has(Yp.id) || Lp.has(Yp.id) || op(Yp.id) || xp.some((pp => {
            let {
              id: ip,
              box: Op
            } = pp;
            return !Wi(ip, Yp.id, cp) && (Ip(ip) || Ip(Yp.id)) && (0, Ep.n)(Op, Yp.box, 2)
          })) && Lp.add(Yp.id);
          return [...Lp]
        }(Sp, Gp, kp, di) : [],
        ui = new Set((0, Pi.v)(kp.hudElements)),
        ji = (0, Pi.F)(kp, (0, Pi.E)(Wp.rowIcons)).state,
        ki = ei.join(),
        mi = (0, op.useRef)(pp.onReady);
      mi.current = pp.onReady, (0, op.useEffect)((() => {
        var pp;
        null === (pp = mi.current) || void 0 === pp || pp.call(mi, Kp)
      }), [Kp]);
      const Ri = (0, op.useRef)(pp.onMeasured);
      (0, op.useLayoutEffect)((() => {
        Ri.current = pp.onMeasured
      }));
      const qi = (0, op.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        Mi = [yc(Gp), dp.width, dp.height, rp.top, rp.right, rp.bottom, rp.left, sp, np].join("|");
      (0, op.useEffect)((() => {
        const pp = ki ? ki.split(",") : [],
          ip = () => {
            var ip;
            null === (ip = Ri.current) || void 0 === ip || ip.call(Ri, gp, pp, qi.current.caps)
          };
        let cp;
        const Op = () => {
          const pp = oi.current;
          if (!Fp || pp === qi.current.layout && Mi === qi.current.input) return !1;
          const op = Si.current + 250 - performance.now();
          return pp === qi.current.layout && (op > 0 || ap()) ? (cp = setTimeout((() => {
            Op() && ip()
          }), Math.max(op, 62.5)), !1) : (qi.current = {
            layout: pp,
            input: Mi,
            caps: {
              hotbar: Vi(Fp, Qi),
              cluster: wc(Fp, (0, Ep.H)(dp.width, dp.height, rp), Qi)
            }
          }, !0)
        };
        return Op(), ip(), () => {
          clearTimeout(cp)
        }
      }), [gp, ki, Fp, dp, rp, Mi, ap]);
      const Ci = pp => ({
        left: pp.left * Np,
        top: pp.top * Np,
        width: (pp.right - pp.left) * Np,
        height: (pp.bottom - pp.top) * Np
      });
      return (0, ep.jsx)("div", {
        ref: mp,
        className: Lp()("HudPreviewBox", {
          Fill: vp
        }),
        style: {
          height: dp.height * Np
        },
        children: (0, ep.jsxs)("div", {
          ref: Rp,
          className: "HudPreviewStage",
          style: {
            width: dp.width * Np,
            height: dp.height * Np
          },
          children: [(0, ep.jsx)("iframe", {
            ref: qp,
            className: "HudPreviewFrame",
            title: Hp("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: dp.width,
              height: dp.height,
              transform: `scale(${Np})`
            }
          }), Fp && (0, Li.createPortal)((0, ep.jsx)(Xi, {
            presence: Wp,
            portraitPhone: di,
            hidden: vi,
            actionButtons: Ap,
            joystickFixed: Pp,
            keysAbove: zp,
            auraBar: jp,
            trayState: ji,
            moved: ui
          }), Fp.body), (0, ep.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...Di.handlers,
            children: [(0, ep.jsx)("div", {
              ref: Qp,
              className: "HudPreviewSafeZone",
              style: {
                top: rp.top * Np,
                right: rp.right * Np,
                bottom: rp.bottom * Np,
                left: rp.left * Np
              }
            }), Gp.map(((pp, ip) => {
              let {
                id: cp,
                box: Op
              } = pp;
              return (0, ep.jsx)("div", {
                className: "HudPreviewHandle",
                style: Ci((0, Ep.r)(Op, 40 / Np))
              }, `${cp}:${ip}`)
            })), kp.hudLocked.map((pp => {
              const ip = gp[pp];
              return ip && (0, ep.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: ip.right * Np,
                  top: ip.top * Np
                },
                children: (0, ep.jsx)(Cp.d, {
                  name: "lock"
                })
              }, pp)
            })), (0, ep.jsx)("div", {
              ref: lp,
              className: "HudPreviewCentreLine",
              style: {
                left: dp.width / 2 * Np
              }
            }), Sp && ti && (0, ep.jsx)("div", {
              ref: Mp,
              className: Lp()("HudPreviewRing", {
                Fixed: !Dp(Sp),
                Overlap: ei.length > 0
              }),
              style: Ci(ti),
              children: (0, ep.jsx)("span", {
                className: Lp()("HudPreviewRingLabel", ec(Sp, Hi, gp, Np, dp)),
                children: Hi
              })
            })]
          })]
        })
      })
    }

    function kc(pp, ip) {
      (0, op.useEffect)((() => {
        var cp;
        null === (cp = pp.current) || void 0 === cp || cp.toggleAttribute("inert", ip)
      }), [pp, ip])
    }
    const mc = "hudFullScreen";

    function Rc(pp) {
      let {
        onScale: ip,
        onHidden: cp,
        onReset: Ip,
        locked: Sp,
        lockable: xp,
        onLocked: Lp,
        onClose: Dp,
        ...Ap
      } = pp;
      const {
        t: Pp
      } = (0, Op.H)(), Wp = (0, op.useRef)(null);
      (0, Yi.x)("popup", Wp, Dp),
      function(pp) {
        const ip = (0, op.useRef)(pp);
        ip.current = pp, (0, op.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [mc]: !0
          }, "");
          let pp = !1;
          const cp = () => {
            pp = !0, ip.current()
          };
          return window.addEventListener("popstate", cp), () => {
            var ip;
            window.removeEventListener("popstate", cp), !pp && null !== (ip = window.history.state) && void 0 !== ip && ip[mc] && window.history.back()
          }
        }), [])
      }(Dp), (0, op.useEffect)((() => {
        function pp(pp) {
          "Escape" === pp.key && (pp.stopPropagation(), Dp())
        }
        return window.addEventListener("keydown", pp, !0), () => {
          window.removeEventListener("keydown", pp, !0)
        }
      }), [Dp]);
      const {
        selected: yp
      } = Ap, Up = (0, op.useRef)(null), wp = (0, op.useRef)(null), [vp, tp] = (0, op.useState)(!1);
      kc(wp, !vp);
      const [Hp, dp] = (0, op.useState)(null), [jp, kp] = (0, op.useState)([]), [mp, Rp] = li(), qp = (0, op.useRef)(Ap.selected);
      qp.current = Ap.selected;
      const Mp = (0, op.useRef)({}),
        Cp = (0, op.useCallback)((() => {
          const pp = Up.current;
          pp && dp(function(pp, ip, cp) {
            var Op;
            const {
              innerWidth: op,
              innerHeight: Ip
            } = window, Sp = pp.offsetWidth, xp = pp.offsetHeight, Lp = Math.max(zi()[0], 6), Yp = [];
            for (const Pp of [Lp, .2 * Ip, .5 * Ip - xp / 2, .33 * Ip])
              for (const pp of [.5, .3, .7]) Yp.push({
                left: Math.max(0, Math.min(op - Sp - 6, Math.max(6, op * pp - Sp / 2))),
                top: Pp
              });
            const Dp = Yp.map((pp => ({
                left: pp.left - 6,
                top: pp.top - 6,
                right: pp.left + Sp + 6,
                bottom: pp.top + xp + 6
              }))),
              Ap = Wc(ip, cp);
            return Yp[(0, Ep.u)(Dp, Ap, {
              avoid: cp && null !== (Op = ip[cp]) && void 0 !== Op ? Op : null
            })]
          }(pp, Mp.current, qp.current))
        }), []),
        Xp = (0, op.useCallback)(((pp, ip, cp) => {
          kp(ip), Rp(cp), Mp.current = pp, Cp()
        }), [Cp, Rp]);
      return (0, op.useLayoutEffect)(Cp, [Ap.selected, Cp]), (0, Li.createPortal)((0, ep.jsxs)("div", {
        ref: Wp,
        className: "HudFullScreenEditor",
        children: [(0, ep.jsx)(jc, {
          ...Ap,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: Xp,
          onReady: tp,
          lockable: xp
        }), (0, ep.jsxs)("div", {
          ref: Up,
          className: "HudFullScreenToolbar",
          style: null === Hp ? void 0 : {
            left: Hp.left,
            top: Hp.top,
            transform: "none"
          },
          children: [(0, ep.jsx)("div", {
            ref: wp,
            className: "HudFullScreenControls",
            children: (0, ep.jsx)(Ji, {
              selected: yp,
              layout: Ap.layout.hudLayouts[Ap.orientation],
              actionButtons: Ap.actionButtons,
              keyNames: Ap.keyNames,
              overlaps: jp,
              scaleCaps: mp,
              onScale: ip,
              onHidden: cp,
              onReset: Ip,
              locked: Sp,
              lockable: xp,
              onLocked: Lp,
              joystickFixed: Ap.joystickFixed
            })
          }), (0, ep.jsx)(Yp.f, {
            className: "HudFullScreenDone",
            onClick: Dp,
            padDefaultFocus: !0,
            children: Pp("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const qc = pp => `${Math.round(100*pp)}%`;

    function Mc(pp) {
      let {
        info: ip,
        tuple: cp,
        props: op
      } = pp;
      const {
        t: Ip
      } = (0, Op.H)();
      return (0, ep.jsx)(Wp.i, {
        name: Ip("hudLayout:size"),
        min: Xp.k,
        max: Xp.j,
        step: Qi,
        initValue: cp[2],
        disabled: op.locked.has(ip.id),
        selectableMax: op.scaleCaps[ip.id],
        cappedNote: Ip("hudLayout:sizeCapped"),
        format: qc,
        onChange: pp => {
          op.onScalePreview(ip.id, pp)
        },
        onChangeComplete: pp => {
          op.onScale(ip.id, pp)
        }
      })
    }

    function Cc(pp) {
      const {
        t: ip
      } = (0, Op.H)(), {
        present: cp,
        elements: Ip,
        selected: Sp,
        onSelect: xp,
        onHidden: Yp,
        onReset: Dp,
        note: Ap,
        actionButtons: Pp,
        keyNames: Wp,
        sizeBesidePreview: yp,
        locked: Up,
        lockable: wp,
        onLocked: vp
      } = pp, {
        rowIconsOpen: tp,
        onRowIconsOpen: Hp
      } = pp, dp = (0, op.useRef)(null), jp = null !== Sp && (tp || !(0, Xp.K)(Sp));
      return (0, op.useEffect)((() => {
        var pp;
        const ip = Sp ? null === (pp = dp.current) || void 0 === pp ? void 0 : pp.querySelector(`[data-hud-row="${Sp}"]`) : null;
        if (!ip) return;
        const cp = ip.closest(".SettingsMenuRight"),
          Op = performance.now();
        let op = null;
        const Ip = () => {
            clearInterval(Lp), null === cp || void 0 === cp || cp.removeEventListener("scroll", xp)
          },
          xp = () => {
            xc() || Ip()
          },
          Lp = setInterval((() => {
            const pp = performance.now();
            pp - Op > 1500 ? Ip() : xc() ? op = null : null === op ? op = pp : pp - op >= 150 && (Ip(), function(pp) {
              var ip;
              const cp = pp.closest(".SettingsMenuRight"),
                Op = null === (ip = pp.closest(".HudLayoutSettings")) || void 0 === ip ? void 0 : ip.querySelector(".HudLayoutPreviewBox");
              if (!cp || !Op) return;
              const op = Op.getBoundingClientRect().bottom + 8,
                Ip = cp.getBoundingClientRect().bottom - 8,
                Sp = pp.getBoundingClientRect();
              Sp.top < op ? cp.scrollBy({
                top: Sp.top - op,
                behavior: "smooth"
              }) : Sp.bottom > Ip && cp.scrollBy({
                top: Math.min(Sp.bottom - Ip, Sp.top - op),
                behavior: "smooth"
              })
            }(ip))
          }), 50);
        return null === cp || void 0 === cp || cp.addEventListener("scroll", xp, {
          passive: !0
        }), Ip
      }), [Sp, jp]), (0, ep.jsx)("div", {
        ref: dp,
        className: "SettingBoxGroup HudElementList",
        children: gp.filter((pp => cp.has(pp.id) && (tp || !(0, Xp.K)(pp.id)))).map((cp => {
          const Op = ((pp, ip) => {
              var cp;
              return null !== (cp = pp[ip]) && void 0 !== cp ? cp : Xp.m
            })(Ip, cp.id),
            op = (0, Xp.r)(Ip, cp.id),
            dp = cp.id === Sp,
            jp = cp.scale && !yp,
            kp = Ap(cp.id, dp);
          return (0, ep.jsxs)("div", {
            "data-hud-row": cp.id,
            className: Lp()("SettingBox HudElementRow", {
              Open: dp,
              Hidden: op,
              Child: void 0 !== cp.parent,
              Grandchild: Tp(cp.id).length > 1
            }),
            children: [(0, ep.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, ep.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": jp ? dp : void 0,
                onClick: () => {
                  xp(cp.id)
                },
                children: (0, ep.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [Zp(cp.id, Pp, ip, Wp), cp.scale && 1 !== Op[2] && !(dp && jp) && (0, ep.jsxs)(ep.Fragment, {
                    children: [" ", (0, ep.jsx)("span", {
                      className: "HudElementRowSize",
                      children: qc(Op[2])
                    })]
                  }), jp && (0, ep.jsxs)(ep.Fragment, {
                    children: [" ", (0, ep.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, ep.jsx)(ii, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: cp.id,
                actionButtons: Pp,
                keyNames: Wp,
                locked: Up.has(cp.id),
                lockable: wp(cp.id),
                onLocked: vp
              }), "menu" === cp.id && (0, ep.jsx)(ci, {
                className: "HudElementRowIcon",
                open: tp,
                name: Zp(cp.id, Pp, ip, Wp),
                onToggle: Hp
              }), "menu" !== cp.id && (0, ep.jsx)(Kp, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: cp.id,
                elements: Ip,
                actionButtons: Pp,
                keyNames: Wp,
                onHidden: Yp
              }), (0, ep.jsx)(Vp, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: Up.has(cp.id),
                id: cp.id,
                elements: Ip,
                actionButtons: Pp,
                keyNames: Wp,
                onReset: Dp
              })]
            }), dp && jp && (0, ep.jsx)(Mc, {
              info: cp,
              tuple: Op,
              props: pp
            }), kp && (0, ep.jsx)("div", {
              className: "HudElementNote",
              children: kp
            })]
          }, cp.id)
        }))
      })
    }

    function Ec(pp) {
      let {
        preview: ip,
        quick: cp,
        onFullScreen: Ip,
        resting: Sp,
        onSidePanel: xp
      } = pp;
      const {
        t: Lp
      } = (0, Op.H)(), Dp = uc(), Ap = (0, op.useRef)(null), {
        width: Pp
      } = (0, Ai.d)(Ap), Wp = Math.floor(Dp.width * Math.min(1, ip.maxHeight / Dp.height)), yp = Pp - Wp - 12, Up = yp >= 130, wp = Pp > 0;
      (0, op.useEffect)((() => {
        wp && xp(Up)
      }), [wp, Up, xp]);
      const vp = (0, Ep.D)(Up ? Wp : Pp, Dp.width, Dp.height, ip.maxHeight),
        tp = Sp ? (0, ep.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: Dp.height * vp
          }
        }) : (0, ep.jsx)(jc, {
          ...ip
        }),
        Hp = pp => (0, ep.jsxs)(Yp.S, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: Lp("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: Ip,
          children: [(0, ep.jsx)(Cp.d, {
            name: "expand"
          }), pp && (0, ep.jsx)("span", {
            children: Lp("hudLayout:fullScreen")
          })]
        });
      return (0, ep.jsxs)("div", {
        ref: Ap,
        className: "SettingBox HudLayoutPreviewBox",
        children: [Pp > 0 && Up && (0, ep.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, ep.jsx)("div", {
            style: {
              width: Wp
            },
            children: tp
          }), (0, ep.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, ep.jsx)(Ji, {
              selected: ip.selected,
              ...cp,
              joystickFixed: ip.joystickFixed,
              extra: Hp(!ip.selected || yp >= 278)
            })
          })]
        }), Pp > 0 && !Up && (0, ep.jsxs)(ep.Fragment, {
          children: [tp, (0, ep.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: Hp(!1)
          })]
        })]
      })
    }
    var Xc = cp(2537),
      lc = cp(4496),
      Qc = cp(2522),
      Jc = cp(2476);
    const Bc = pp => {
      const ip = yi.p * ("sides" === pp ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(ip / 2))
    };

    function Nc(pp, ip, cp) {
      const [Op, op, Ip, Sp] = pp;
      return "sides" === ip ? [Op, cp, Ip, cp] : [cp, op, cp, Sp]
    }
    const Tc = [null, null, null, null],
      fc = pp => `${pp}px`;

    function bc(pp) {
      let {
        safe: ip,
        onPreview: cp,
        onCommit: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Op.H)(), xp = (0, yi.x)(null !== ip && void 0 !== ip ? ip : Tc, window.innerWidth, window.innerHeight, si(document).map(Math.round)), Lp = (0, op.useRef)(null !== ip && void 0 !== ip ? ip : Tc);
      Lp.current = null !== ip && void 0 !== ip ? ip : Tc;
      const Dp = pp => {
        const ip = Math.min(Bc(pp), "sides" === pp ? Math.max(xp[1], xp[3]) : Math.max(xp[0], xp[2]));
        return (0, ep.jsx)(Wp.i, {
          name: Sp("sides" === pp ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: Bc(pp),
          step: 2,
          initValue: ip,
          format: fc,
          onChange: ip => {
            cp(Nc(Lp.current, pp, ip))
          },
          onChangeComplete: Op => {
            if (Op === ip) return void cp(Lp.current);
            const op = Nc(Lp.current, pp, Op);
            Lp.current = op, Ip(op), (0, mp.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: pp
            })
          }
        })
      };
      return (0, ep.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, ep.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, ep.jsx)("div", {
            children: Sp("hudLayout:safeZone")
          }), (0, ep.jsx)(Yp.S, {
            active: null === ip,
            pressed: null === ip,
            onClick: () => {
              Ip(null)
            },
            children: Sp("hudLayout:safeZoneAuto")
          })]
        }), Dp("sides"), Dp("ends")]
      })
    }

    function hc() {
      const {
        t: pp
      } = (0, Op.H)(), ip = (0, Xp.Z)(), {
        clientEscMenuOptions: cp
      } = (0, Dp.o)(["clientEscMenuOptions"]), Ip = (0, Xc.i)(), Sp = ip.hudLayouts[Ip], [xp, Lp] = (0, op.useState)(null), {
        rowIconsOpen: Ap,
        onRowIconsOpen: Pp,
        select: yp
      } = function(pp, ip) {
        const [cp, Op] = (0, op.useState)((() => Xp.A.some((ip => void 0 !== pp.hudElements[ip] || pp.hudLocked.includes(ip))))), Ip = (0, op.useCallback)((pp => {
          ip(pp), (0, Xp.K)(pp) && Op(!0)
        }), [ip]);
        return {
          rowIconsOpen: cp,
          onRowIconsOpen: Op,
          select: Ip
        }
      }(Sp, Lp), [Up, wp] = (0, op.useState)([]), [vp, tp] = (0, op.useState)(null), [Hp, dp] = li(), jp = (0, op.useCallback)(((pp, ip, cp) => {
        wp(ip), dp(cp);
        const Op = Object.keys(pp);
        tp((pp => (null === pp || void 0 === pp ? void 0 : pp.size) === Op.length && Op.every((ip => pp.has(ip))) ? pp : new Set(Op)))
      }), [dp]), {
        gameState: kp
      } = (0, Dp.o)(["gameState"]), qp = (0, Qc.f)(), Mp = (0, Jc.s)(), [Cp] = (0, op.useState)((() => {
        var pp, ip, cp, Op;
        return "inGame" === kp ? (0, wi.s)(document, qp, {
          rightOfCamera: null !== (pp = null === (ip = Mp.rightOfCamera) || void 0 === ip ? void 0 : ip.icon) && void 0 !== pp ? pp : null,
          leftEnd: null !== (cp = null === (Op = Mp.leftEnd) || void 0 === Op ? void 0 : Op.icon) && void 0 !== cp ? cp : null
        }) : wi.b
      })), Ep = (0, op.useRef)(null), lp = (0, op.useRef)(null), Qp = function(pp) {
        const [ip, cp] = (0, op.useState)((() => .4 * window.innerHeight));
        return (0, op.useLayoutEffect)((() => {
          var ip;
          const Op = null === (ip = pp.current) || void 0 === ip ? void 0 : ip.closest(".SettingsMenuRight");
          if (!Op) return;
          const op = () => {
            const pp = Op.clientHeight < ac ? .4 : .5;
            cp(Math.max(80, Op.clientHeight * pp - 24))
          };
          op();
          const Ip = new ResizeObserver(op);
          return Ip.observe(Op), () => {
            Ip.disconnect()
          }
        }), [pp]), ip
      }(lp), Jp = (0, lc.m)(cp.joystickMode), Bp = cp.touchActionButtons, Tp = (0, op.useMemo)((() => (0, wi.r)(Cp, Bp)), [Cp, Bp]), fp = (0, op.useMemo)((() => new Set((0, wi.n)(Cp, Bp).map((pp => wi.c[pp])))), [Cp, Bp]);
      (0, op.useEffect)((() => {
        (0, mp.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [bp, hp] = (0, op.useState)(!1), [ap, np] = (0, op.useState)(!1), Fp = (0, op.useRef)(null);
      kc(Fp, !ap);
      const [rp, sp] = (0, op.useState)(!1), Kp = (0, op.useCallback)((() => {
        sp(!1)
      }), []), Vp = (0, op.useMemo)((() => new Set(Sp.hudLocked)), [Sp.hudLocked]), ii = pp => {
        var ip, cp;
        const Op = (0, Xp.p)(),
          op = pp(Op);
        (0, Xp.W)(null !== (ip = null === (cp = Ep.current) || void 0 === cp ? void 0 : cp.keepLocks(Op, op)) && void 0 !== ip ? ip : op)
      }, ci = (pp, ip) => {
        ii((cp => (0, Xp.ab)(cp, Ip, pp, ip)))
      }, Oi = (pp, ip, cp) => {
        ci(pp, {
          dx: ip,
          dy: cp
        }), (0, mp.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${pp}`
        })
      }, oi = (pp, ip) => {
        ii((cp => (0, Xp.bb)(cp, Ip, pp, ip)))
      }, Ii = pp => {
        const ip = Gp[pp];
        return (ip.move || ip.scale) && ("joystick" !== pp || Jp) && !(0, Pi.y)(pp, Sp.hudElements[pp])
      }, Li = pp => Gp[pp].move && ("joystick" !== pp || Jp) && !Vp.has(pp), Yi = new Set(gp.map((pp => pp.id)).filter((pp => {
        const ip = (0, Xp.K)(pp) && !Cp.rowIcons.includes(pp);
        return null === vp || vp.has(pp) || (0, Xp.r)(Sp.hudElements, pp) && !ip
      }))), Di = {
        present: Yi,
        actionButtons: Bp,
        keyNames: Tp,
        scaleCaps: Hp,
        sizeBesidePreview: bp,
        elements: Sp.hudElements,
        selected: xp,
        onSelect: yp,
        rowIconsOpen: Ap,
        onRowIconsOpen: Pp,
        onScalePreview: (pp, ip) => {
          var cp;
          null === (cp = Ep.current) || void 0 === cp || cp.setScale(pp, ip)
        },
        onScale: (pp, ip) => {
          ci(pp, {
            scale: ip
          }), (0, mp.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${pp}`
          })
        },
        onHidden: (pp, ip) => {
          ci(pp, {
            hidden: ip
          }), (0, mp.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${ip?"hide":"show"}:${pp}`
          })
        },
        onReset: pp => {
          ci(pp, Xp.d)
        },
        locked: Vp,
        lockable: Ii,
        onLocked: oi,
        note: (ip, cp) => {
          const Op = cp && Up.length > 0 ? pp("hudLayout:overlapsNote", {
            names: zp(Up, Bp, pp, Tp)
          }) : null;
          if (cp && Si(ip, Jp)) return (0, ep.jsxs)(ep.Fragment, {
            children: [Op && (0, ep.jsx)("span", {
              children: Op
            }), (0, ep.jsx)("span", {
              children: pp("hudLayout:floatingJoystickNote")
            }), !bp && (0, ep.jsx)(xi, {})]
          });
          if (Op) return Op;
          const op = cp && Vp.has(ip) ? pp("hudLayout:lockedNote") : null,
            Ip = cp && fp.has(ip) ? pp("hudLayout:contextSlotNote") : null;
          return op || Ip ? (0, ep.jsxs)(ep.Fragment, {
            children: [op && (0, ep.jsx)("span", {
              children: op
            }), Ip && (0, ep.jsx)("span", {
              children: Ip
            })]
          }) : cp && "cluster" === ip ? pp("hudLayout:clusterNote") : cp && "inventory" === ip ? pp("hudLayout:inventoryNote") : cp && "menu" === ip ? pp("hudLayout:menuNote") : cp && (0, Pi.y)(ip, Sp.hudElements[ip]) && Li(ip) ? pp("hudLayout:rowIconNote") : cp && "arrows" === ip ? pp("hudLayout:arrowsNote") : cp && "sprint" === ip ? pp("hudLayout:sprintNote") : Np(ip) && (0, Xp.r)(Sp.hudElements, ip) ? pp("hudLayout:inventoryHiddenNote", {
            name: Zp(ip, Bp, pp, Tp)
          }) : null
        }
      };
      return (0, ep.jsxs)("div", {
        ref: lp,
        className: "HudLayoutSettings",
        children: [(0, ep.jsxs)("div", {
          ref: Fp,
          className: "HudLayoutBody",
          children: [(0, ep.jsx)("div", {
            className: "HudLayoutOrientation",
            children: pp("landscape" === Ip ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, ep.jsx)(Ec, {
            preview: {
              layout: ip,
              orientation: Ip,
              selected: xp,
              onSelect: yp,
              onMove: Oi,
              canMove: Li,
              actionButtons: Bp,
              joystickFixed: Jp,
              presence: Cp,
              keyNames: Tp,
              maxHeight: Qp,
              apiRef: Ep,
              onMeasured: jp,
              onReady: np,
              lockable: Ii
            },
            quick: {
              layout: Sp,
              actionButtons: Bp,
              keyNames: Tp,
              scaleCaps: Hp,
              overlaps: Up,
              onScale: Di.onScale,
              onHidden: Di.onHidden,
              onReset: Di.onReset,
              locked: Vp,
              lockable: Ii,
              onLocked: oi
            },
            onFullScreen: () => {
              sp(!0)
            },
            resting: rp,
            onSidePanel: hp
          }), rp && (0, ep.jsx)(Rc, {
            layout: ip,
            orientation: Ip,
            selected: xp,
            onSelect: yp,
            onMove: Oi,
            canMove: Li,
            actionButtons: Bp,
            joystickFixed: Jp,
            presence: Cp,
            keyNames: Tp,
            onScale: Di.onScale,
            onHidden: Di.onHidden,
            onReset: Di.onReset,
            locked: Vp,
            lockable: Ii,
            onLocked: oi,
            apiRef: Ep,
            onClose: Kp
          }), (0, ep.jsx)(bc, {
            safe: Sp.hudSafe,
            onCommit: pp => {
              ii((ip => (0, Xp.eb)(ip, Ip, pp)))
            },
            onPreview: pp => {
              var ip;
              null === (ip = Ep.current) || void 0 === ip || ip.setSafe(pp)
            }
          }), (0, ep.jsx)(Wp.b, {
            label: pp("hudLayout:snapCentre"),
            checked: ip.hudSnapCentre,
            onClick: pp => {
              (0, Xp.T)(pp)
            },
            circleInfoText: pp("hudLayout:snapCentreInfo")
          }), (0, ep.jsx)(Cc, {
            ...Di
          }), (0, ep.jsx)(Wp.f, {
            label: pp("hudLayout:shape"),
            options: Xp.E.map((ip => ({
              value: ip,
              label: pp(`hudLayout:shape_${ip}`)
            }))),
            value: ip.hudShape,
            onChange: pp => {
              ii((ip => ({
                ...ip,
                hudShape: pp
              }))), (0, mp.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: pp
              })
            }
          }), (0, ep.jsx)(Wp.i, {
            name: pp("hudLayout:opacity"),
            min: Xp.g,
            max: 1,
            step: .05,
            initValue: ip.hudKeyOpacity,
            format: pp => `${Math.round(100*pp)}%`,
            circleInfoText: pp("hudLayout:opacityInfo"),
            onChange: pp => {
              var ip;
              null === (ip = Ep.current) || void 0 === ip || ip.setOpacity(pp)
            },
            onChangeComplete: pp => {
              (0, Xp.P)(pp), (0, mp.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, ep.jsx)(Yp.K, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const pp = Rp.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await pp.getResult() && (0, Xp.L)()
            }()
          },
          children: pp("hudLayout:resetAll")
        })]
      })
    }
    const ac = 350;
    const nc = [function() {
      const {
        t: pp
      } = (0, Op.H)(), [ip, cp] = (0, op.useState)(!1), Ip = (0, op.useRef)(null);
      return (0, op.useEffect)((() => {
        var pp;
        ip && (null === (pp = Ip.current) || void 0 === pp || pp.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [ip]), (0, ep.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, ep.jsx)(qp.b, {
          ref: Ip,
          icon: "arrows-up-down-left-right",
          title: pp("hudLayout:title"),
          sub: pp("hudLayout:entrySub"),
          expanded: ip,
          onClick: () => {
            cp(!ip)
          }
        }), ip && (0, ep.jsx)(hc, {})]
      })
    }, function() {
      const {
        t: pp
      } = (0, Op.H)(), {
        joystickMode: ip,
        touchSpeedCurve: cp,
        autorun: op,
        jumpLock: Ip,
        touchEdgeGuard: Sp
      } = (0, Dp.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, ep.jsxs)(ep.Fragment, {
        children: [(0, ep.jsx)(Wp.f, {
          label: pp("settingsMenu:joystick"),
          options: dp.Ib.map((ip => ({
            value: ip,
            label: pp(jp[ip])
          }))),
          value: ip,
          onChange: pp => {
            Dp.c.setClientEscMenuOptions({
              joystickMode: pp
            })
          },
          circleInfoText: pp("settingsMenu:joystickInfo")
        }), (0, ep.jsx)(Wp.b, {
          label: pp("settingsMenu:preciseWalking"),
          checked: cp,
          onClick: pp => {
            Dp.c.setClientEscMenuOptions({
              touchSpeedCurve: pp
            })
          },
          circleInfoText: pp("settingsMenu:preciseWalkingInfo")
        }), (0, ep.jsx)(Wp.b, {
          label: pp("settingsMenu:autoRun"),
          checked: op,
          onClick: pp => {
            Dp.c.setClientEscMenuOptions({
              autorun: pp
            })
          },
          circleInfoText: pp("settingsMenu:autoRunInfo")
        }), (0, ep.jsx)(Wp.b, {
          label: pp("settingsMenu:jumpLock"),
          checked: Ip,
          onClick: pp => {
            Dp.c.setClientEscMenuOptions({
              jumpLock: pp
            })
          },
          circleInfoText: pp("settingsMenu:jumpLockInfo")
        }), (0, ep.jsx)(Wp.b, {
          label: pp("touchSettings:stopAtEdges"),
          checked: Sp,
          onClick: pp => {
            Dp.c.setClientEscMenuOptions({
              touchEdgeGuard: pp
            })
          },
          circleInfoText: pp("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, ep.jsx)(Hp.c, {})
    }, function() {
      const {
        t: pp
      } = (0, Op.H)(), {
        clientEscMenuOptions: ip
      } = (0, Dp.o)(["clientEscMenuOptions"]);
      return (0, kp.e)() ? (0, ep.jsx)(Wp.b, {
        label: pp("settingsMenu:vibration"),
        checked: ip.vibration,
        onClick: pp => {
          Dp.c.setClientEscMenuOptions({
            vibration: pp
          })
        },
        circleInfoText: pp("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Fc() {
      return (0, ep.jsx)(ep.Fragment, {
        children: nc.map(((pp, ip) => (0, ep.jsx)(pp, {}, ip)))
      })
    }
    var gc = cp(4466);

    function Gc() {
      const {
        t: pp
      } = (0, Op.H)(), {
        isTouchScreen: ip,
        clientEscMenuOptions: cp,
        gameState: Sp
      } = (0, Dp.o)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), xp = (0, yp.i)("ezBridging"), Lp = (0, yp.i)("ezTowering"), wp = "inGame" !== Sp || !0 === xp, vp = (0, Up.h)(), Hp = null !== vp && ("inGame" !== Sp || !0 === Lp), [, dp] = (0, op.useReducer)((pp => pp + 1), 0), jp = (0, tp.f)(), [kp, mp] = (0, op.useState)(gc.h);
      return (0, ep.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [jp && (0, ep.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, ep.jsx)("div", {
            children: pp("controller:settingsControlsNote")
          }), (0, ep.jsx)(Yp.S, {
            onClick: () => {
              Dp.c.set({
                openSettingsCategory: "controller"
              })
            },
            children: pp("controller:settingsOpenController")
          })]
        }), (0, Ap.isTouchscreen)() && !(0, Ap.isMobile)() ? (0, ep.jsx)(ep.Fragment, {
          children: (0, ep.jsx)(Wp.b, {
            label: pp("settingsMenu:useTouchControls"),
            checked: kp,
            onClick: pp => {
              (0, gc.e)(pp), mp(pp)
            }
          })
        }) : null, ip && (0, ep.jsx)(Fc, {}), wp && (0, ep.jsx)(Wp.b, {
          label: pp("settingsMenu:ezBridging"),
          checked: cp.ezBridging,
          onClick: pp => {
            Dp.c.setClientEscMenuOptions({
              ezBridging: pp
            })
          },
          circleInfoText: pp("settingsMenu:ezBridgingInfo")
        }), Hp && (0, ep.jsx)(Wp.b, {
          label: pp("settingsMenu:ezTowering"),
          checked: cp.ezTowering,
          onClick: pp => {
            Dp.c.setClientEscMenuOptions({
              ezTowering: pp
            })
          },
          circleInfoText: pp("jump" === vp ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, ep.jsx)(Wp.b, {
          label: pp("settingsMenu:crouchToggle"),
          checked: cp.crouchIsToggle,
          onClick: pp => {
            Dp.c.setClientEscMenuOptions({
              crouchIsToggle: pp
            })
          },
          circleInfoText: pp("settingsMenu:crouchToggleInfo")
        }), (0, ep.jsx)(Wp.b, {
          label: pp("settingsMenu:hideUiToggle"),
          checked: cp.hideUiIsToggle,
          onClick: pp => {
            Dp.c.setClientEscMenuOptions({
              hideUiIsToggle: pp
            })
          },
          circleInfoText: pp("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, Pp.c)() && (0, ep.jsx)(Wp.i, {
          name: pp("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: cp.touchscreenSensitivity,
          onChange: pp => {
            Dp.c.setClientEscMenuOptions({
              touchscreenSensitivity: pp
            })
          }
        }), !(0, Ap.isMobile)() && (0, ep.jsx)(Wp.i, {
          name: pp("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: cp.mouseSensitivity,
          onChange: pp => {
            Dp.c.setClientEscMenuOptions({
              mouseSensitivity: pp
            })
          }
        }), !(0, Ap.isMobile)() && (0, ep.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, ep.jsx)("div", {
            className: "SliderText",
            children: pp("settingsMenu:keyBindings")
          }), Ip.d.map((ip => (0, ep.jsx)(rc, {
            title: pp(ip.name.translationKey, ip.name.params),
            defaultOpen: Ip.h.has(ip.id),
            children: ip.actions.map((pp => (0, ep.jsx)(Zc, {
              noaAction: pp,
              forceUpdate: dp,
              clashesWith: ip.clashesWith,
              showPadGlyph: jp
            }, pp)))
          }, ip.name.translationKey))), (0, ep.jsx)(Yp.K, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, Ip.E)(), dp()
            },
            children: pp("controls:resetBindings")
          })]
        })]
      })
    }

    function rc(pp) {
      let {
        title: ip,
        defaultOpen: cp,
        children: Op
      } = pp;
      const [Ip, Sp] = (0, op.useState)(cp);
      return (0, ep.jsxs)("div", {
        className: Lp()("ControlsSection", {
          Collapsed: !Ip
        }),
        children: [(0, ep.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Sp(!Ip)
          },
          children: [(0, ep.jsx)("div", {
            className: "ControlsSectionTitle",
            children: ip
          }), (0, ep.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), Ip && (0, ep.jsx)("div", {
          className: "ControlsSectionRows",
          children: Op
        })]
      })
    }

    function Zc(pp) {
      let {
        noaAction: ip,
        forceUpdate: cp,
        clashesWith: xp,
        showPadGlyph: Dp
      } = pp;
      const {
        t: Ap
      } = (0, Op.H)(), Pp = (0, vp.d)(ip), [Wp, yp] = (0, op.useState)(!1), [Up, tp] = (0, op.useState)("controls:clickToEnterNewBinding"), [Hp, dp] = (0, op.useState)(null), [jp, kp] = (0, op.useState)(null), mp = (0, op.useRef)(null);
      (0, op.useEffect)((() => {
        Wp && mp.current && mp.current.focus()
      }), [Wp]);
      const Rp = Ip.t[ip].filter((pp => Sp.j[pp]));
      let qp = null;
      const Mp = [],
        Cp = xp.flatMap((pp => {
          var ip, cp;
          return null !== (ip = null === (cp = Ip.d.find((ip => ip.id === pp))) || void 0 === cp ? void 0 : cp.actions) && void 0 !== ip ? ip : []
        }));
      for (const Op of Cp) {
        if (Op === ip) continue;
        const pp = Ip.t[Op];
        for (const ip of pp) Rp.includes(ip) && Mp.push(Ap(Ip.v[Op].translationKey, Ip.v[Op].params))
      }
      Mp.length > 0 && (qp = Ap("controls:sharedBindingsWarning") + " ", qp += Mp.join(", "));
      const Ep = () => {
          yp(!1), dp(null), tp("controls:clickToEnterNewBinding"), kp(null)
        },
        Xp = () => "BindingInput_" + ip;
      return (0, ep.jsxs)("div", {
        className: Lp()("ControlRow", {
          WarningBorder: null !== qp
        }),
        children: [(0, ep.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, ep.jsxs)("div", {
            className: "ControlName",
            children: [Ap(Ip.v[ip].translationKey, Ip.v[ip].params), Dp && Pp && (0, ep.jsx)(wp.e, {
              glyph: Pp,
              className: "ControlPadGlyph"
            })]
          }), (0, ep.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, ep.jsxs)("div", {
              className: "ControlBindingsList",
              children: [Rp.map((pp => (0, ep.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, ep.jsx)("div", {
                  children: (0, Ip.l)(pp)
                }), (0, ep.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Op = (0, Ip.z)(ip, pp);
                    Op.isError() ? kp(Op.asError().message) : kp(null), cp()
                  },
                  children: "\xd7"
                })]
              }, pp))), !Wp && (0, ep.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  yp(!0), kp(null)
                },
                children: (0, ep.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), Wp && (0, ep.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, ep.jsxs)("div", {
                className: "InputContainer",
                children: [(0, ep.jsx)("div", {
                  className: "InputOverlay",
                  children: Hp ? (0, Ip.l)(Hp) : (0, ep.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Ap(Up)
                  })
                }), (0, ep.jsx)("input", {
                  ref: mp,
                  id: Xp(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: pp => {
                    if ("Escape" === pp.code) return Ep(), pp.preventDefault(), void pp.stopPropagation();
                    const ip = pp.code;
                    Sp.e.includes(ip) ? (kp(null), dp(ip)) : (kp("controls:keyIsReserved"), dp(null)), pp.preventDefault(), pp.stopPropagation()
                  },
                  onMouseDown: pp => {
                    const ip = "Mouse" + (pp.button + 1);
                    document.activeElement && document.activeElement.id === Xp() ? Sp.e.includes(ip) ? (kp(null), dp(ip)) : (kp("controls:keyIsReserved"), dp(null)) : tp("controls:enterNewBinding"), pp.stopPropagation()
                  },
                  onBlur: () => {
                    tp("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, ep.jsx)(Yp.f, {
                onPointerDown: pp => {
                  pp.preventDefault()
                },
                onClick: () => {
                  (0, Ip.c)(ip, Hp), cp(), Ep()
                },
                className: "ControlBindingAddButton",
                disabled: null === Hp,
                children: Ap("general:add")
              }), (0, ep.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  Ep()
                },
                children: "\xd7"
              })]
            }), jp && (0, ep.jsx)("div", {
              className: "ControlBindingError",
              children: Ap(jp)
            })]
          })]
        }), qp && (0, ep.jsx)("div", {
          className: "ControlRowWarning",
          children: qp
        })]
      })
    }
  },
  9006: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(62),
      op = cp(1060),
      Ip = cp(1112);
    const Sp = (0, Op.forwardRef)((function(pp, ip) {
      let {
        icon: cp,
        title: Op,
        sub: Sp,
        expanded: xp,
        onClick: Lp
      } = pp;
      return (0, Ip.jsxs)("button", {
        ref: ip,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": xp,
        onClick: Lp,
        children: [(0, Ip.jsx)(op.d, {
          name: cp,
          className: "FeaturedSettingsEntryIcon"
        }), (0, Ip.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, Ip.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: Op
          }), (0, Ip.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: Sp
          })]
        }), (0, Ip.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  8809: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => vp,
      c: () => wp,
      g: () => Dp,
      j: () => tp,
      k: () => Hp,
      o: () => Pp
    });
    var Op = cp(1677),
      op = cp(1770);
    const Ip = pp => pp >= 56320 && pp <= 57343,
      Sp = pp => pp >= 55296 && pp <= 56319,
      xp = (pp, ip) => ip >= 2 && Ip(pp.charCodeAt(ip - 1)) && Sp(pp.charCodeAt(ip - 2)) ? ip - 2 : Math.max(0, ip - 1),
      Lp = (pp, ip) => {
        let cp;
        var Op, op;
        return cp = pp.start !== pp.end ? ip < 0 ? pp.start : pp.end : ip < 0 ? xp(pp.value, pp.start) : (Op = pp.value, (op = pp.start) + 1 < Op.length && Sp(Op.charCodeAt(op)) && Ip(Op.charCodeAt(op + 1)) ? op + 2 : Math.min(Op.length, op + 1)), {
          value: pp.value,
          start: cp,
          end: cp
        }
      },
      Yp = ["text", "search", "url", "email", "tel", "password", "number"],
      Dp = pp => !(!(0, op.b)(pp) || pp.isContentEditable || pp.hasAttribute("data-pad-no-osk")) && (pp instanceof HTMLTextAreaElement || pp instanceof HTMLInputElement && Yp.includes(pp.type)),
      Ap = pp => null !== pp.selectionStart,
      Pp = pp => {
        var ip, cp;
        const {
          value: Op
        } = pp;
        return {
          value: Op,
          start: null !== (ip = pp.selectionStart) && void 0 !== ip ? ip : Op.length,
          end: null !== (cp = pp.selectionEnd) && void 0 !== cp ? cp : Op.length
        }
      },
      Wp = (pp, ip, cp) => {
        if (pp.readOnly) return;
        const op = pp instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(op, "value").set.call(pp, ip.value), Ap(pp) && pp.setSelectionRange(ip.start, ip.end), (0, Op.g)(pp, new InputEvent("input", {
          bubbles: !0,
          inputType: cp
        }))
      };
    let yp = !1;
    const Up = (pp, ip) => !!document.execCommand(pp, !1, ip) || (yp || (yp = !0, console.warn(`execCommand("${pp}") failed; the on-screen keyboard is setting the value directly`)), !1),
      wp = (pp, ip) => {
        Up("insertText", ip) || Wp(pp, function(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Op = pp.value.slice(0, pp.start),
            op = pp.value.slice(pp.end);
          let Ip = cp < 0 ? ip.length : Math.max(0, cp - Op.length - op.length);
          Ip > 0 && Ip < ip.length && Sp(ip.charCodeAt(Ip - 1)) && Ip--;
          const xp = ip.slice(0, Ip),
            Lp = Op.length + xp.length;
          return {
            value: Op + xp + op,
            start: Lp,
            end: Lp
          }
        }(Pp(pp), ip, pp.maxLength), "insertText")
      },
      vp = pp => {
        Up("delete") || Wp(pp, (pp => {
          const ip = pp.start === pp.end ? xp(pp.value, pp.start) : pp.start;
          return {
            value: pp.value.slice(0, ip) + pp.value.slice(pp.end),
            start: ip,
            end: ip
          }
        })(Pp(pp)), "deleteContentBackward")
      },
      tp = (pp, ip) => {
        if (!Ap(pp)) return;
        const cp = Lp(Pp(pp), ip);
        pp.setSelectionRange(cp.start, cp.end)
      },
      Hp = pp => {
        Ap(pp) && 0 === pp.selectionStart && 0 === pp.selectionEnd && pp.setSelectionRange(pp.value.length, pp.value.length)
      }
  },
  8967: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp
    });
    var Op = cp(25),
      op = cp(2169),
      Ip = cp(1372),
      Sp = cp(1419);
    const xp = async () => {
      if ((0, Sp.h)()) {
        if (!0 !== await Ip.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Op.c.get("gameState")) return
      }(0, op.h)()
    }
  },
  8972: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Lp,
      e: () => Ip,
      f: () => Sp,
      i: () => op,
      k: () => xp
    });
    var Op = cp(1989);
    const op = "controllerPadShopOpen",
      Ip = pp => Op.g.includes(pp),
      Sp = pp => Object.values(pp).some((pp => !1 !== pp.canBuy && !pp.isRewardedAd)),
      xp = (pp, ip, cp) => {
        var Op, op, Sp, xp;
        const Lp = pp.filter((pp => !Ip(pp))),
          Yp = null !== ip && pp.includes(ip) ? ip : null;
        return null !== Yp && !Ip(Yp) && cp(Yp) ? Yp : null !== (Op = null !== (op = null !== (Sp = null !== (xp = Lp.find(cp)) && void 0 !== xp ? xp : Lp[0]) && void 0 !== Sp ? Sp : Yp) && void 0 !== op ? op : pp[0]) && void 0 !== Op ? Op : null
      },
      Lp = pp => pp.userInput || pp.isRewardedAd || "boolean" === typeof pp.isSelected ? null : JSON.stringify([pp.image, pp.cost, pp.currency, pp.amount, pp.customTitle, pp.buyButtonText, pp.description, pp.canBuy])
  },
  8995: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp,
      f: () => Dp
    });
    var Op = cp(62),
      op = cp(1476),
      Ip = cp(2048),
      Sp = cp(1432),
      xp = cp(1462),
      Lp = cp(1112);
    const Yp = () => {
        const pp = (0, Sp.s)();
        if ((0, Op.useEffect)((() => {
            (0, Sp.j)()
          }), []), !pp) return null;
        const {
          ControllerCategory: ip
        } = pp;
        return (0, Lp.jsx)(xp.e, {
          children: (0, Lp.jsx)(ip, {})
        })
      },
      Dp = () => {
        var pp;
        const ip = (0, Sp.s)(),
          [, cp] = (0, Op.useReducer)((pp => pp + 1), 0);
        return (0, op.f)(Ip.b, cp), null !== (pp = null === ip || void 0 === ip ? void 0 : ip.hasActivePad()) && void 0 !== pp && pp
      }
  },
  8816: (pp, ip, cp) => {
    cp.d(ip, {
      C: () => Pp,
      b: () => Op,
      e: () => Yp,
      i: () => Up,
      l: () => Ap,
      p: () => yp,
      t: () => Ip,
      v: () => Wp,
      z: () => Sp
    });
    const Op = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      op = (pp, ip) => {
        if ("function" === typeof pp.checkVisibility) return !pp.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: ip,
          checkOpacity: ip
        });
        const {
          visibility: cp
        } = getComputedStyle(pp);
        if ("hidden" === cp || "collapse" === cp) return !0;
        if (!ip) return !1;
        for (let Op = pp; Op; Op = Op.parentElement)
          if ("0" === getComputedStyle(Op).opacity) return !0;
        return !1
      },
      Ip = pp => {
        if (!pp.isConnected || op(pp, !0)) return !1;
        const ip = pp.getBoundingClientRect();
        return ip.width > 0 && ip.height > 0
      },
      Sp = pp => !!pp.matches(":disabled, [aria-disabled='true']") || "button" === pp.getAttribute("role") && "-1" === pp.getAttribute("tabindex"),
      xp = pp => {
        var ip;
        if (pp.closest("[data-pad-ignore]")) return !0;
        return !!(null === (ip = pp.parentElement) || void 0 === ip ? void 0 : ip.closest("[data-pad-focusable]"))
      },
      Lp = pp => {
        const ip = pp.querySelectorAll(Op);
        return pp.matches(Op) ? [pp, ...ip] : ip
      },
      Yp = pp => {
        const ip = [];
        for (const cp of Lp(pp)) !xp(cp) && Ip(cp) && ip.push(cp);
        return ip
      },
      Dp = new WeakMap,
      Ap = pp => {
        const ip = Dp.get(pp);
        if (ip && Pp(ip, pp)) return !0;
        for (const cp of Lp(pp))
          if (!xp(cp) && Ip(cp)) return Dp.set(pp, cp), !0;
        return Dp.delete(pp), !1
      },
      Pp = (pp, ip) => ip.contains(pp) && pp.matches(Op) && !xp(pp) && Ip(pp),
      Wp = (pp, ip) => Pp(pp, ip) && !Sp(pp),
      yp = pp => {
        for (const ip of pp.querySelectorAll("[data-pad-initial-area]"))
          if (!op(ip, !1)) return !0;
        return !1
      },
      Up = pp => {
        const ip = ip => {
          let cp = 0;
          for (let Op = ip.parentElement; Op && Op !== pp; Op = Op.parentElement) cp++;
          return cp
        };
        return [...pp.querySelectorAll("[data-pad-initial-area]")].filter(Ip).sort(((pp, cp) => ip(cp) - ip(pp)))
      }
  },
  8803: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => Lp,
      F: () => Dp,
      b: () => vp,
      c: () => Rp,
      e: () => ep,
      g: () => dp,
      k: () => yp,
      m: () => Up,
      n: () => Pp,
      o: () => Wp,
      p: () => mp,
      q: () => Yp,
      r: () => qp,
      t: () => jp,
      v: () => kp,
      z: () => wp
    });
    var Op = cp(34),
      op = cp(1677),
      Ip = cp(8807),
      Sp = cp(8809),
      xp = cp(8816);
    const Lp = pp => (0, Sp.g)(pp),
      Yp = pp => {
        const ip = pp.getBoundingClientRect();
        return {
          x: ip.left + ip.width / 2,
          y: ip.top + ip.height / 2
        }
      },
      Dp = (pp, ip, cp) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: pp.x,
        clientY: pp.y,
        screenX: pp.x,
        screenY: pp.y,
        button: ip,
        buttons: cp,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      Ap = (pp, ip) => {
        (0, op.g)(pp, ip)
      },
      Pp = function(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Op = 0 === cp ? 1 : 2;
        Ap(pp, new PointerEvent("pointerdown", Dp(ip, cp, Op))), Ap(pp, new MouseEvent("mousedown", Dp(ip, cp, Op)))
      },
      Wp = function(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Ap(pp, new PointerEvent("pointerup", Dp(ip, cp, 0))), Ap(pp, new MouseEvent("mouseup", Dp(ip, cp, 0)))
      },
      yp = function(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Pp(pp, ip, cp), Wp(pp, ip, cp), Ap(pp, 0 === cp ? new MouseEvent("click", Dp(ip, 0, 0)) : new MouseEvent("contextmenu", Dp(ip, 2, 0)))
      },
      Up = function(pp, ip, cp) {
        let {
          leaveBelow: Op = null,
          enterBelow: op = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (pp !== ip) {
          if (null !== pp && void 0 !== pp && pp.isConnected) {
            const op = {
              ...Dp(cp, 0, 0),
              relatedTarget: ip
            };
            Ap(pp, new PointerEvent("pointerout", op)), Ap(pp, new MouseEvent("mouseout", op));
            const Ip = pp => !!ip && pp.contains(ip) || !!Op && pp.contains(Op);
            for (let ip = pp; ip && !Ip(ip); ip = ip.parentElement) Ap(ip, new PointerEvent("pointerleave", {
              ...op,
              bubbles: !1
            })), Ap(ip, new MouseEvent("mouseleave", {
              ...op,
              bubbles: !1
            }))
          }
          if (ip) {
            const Op = {
              ...Dp(cp, 0, 0),
              relatedTarget: pp
            };
            Ap(ip, new PointerEvent("pointerover", Op)), Ap(ip, new MouseEvent("mouseover", Op));
            const Ip = [],
              Sp = ip => !(null === pp || void 0 === pp || !pp.isConnected) && ip.contains(pp) || !!op && ip.contains(op);
            for (let pp = ip; pp && !Sp(pp); pp = pp.parentElement) Ip.push(pp);
            for (const pp of Ip.reverse()) Ap(pp, new PointerEvent("pointerenter", {
              ...Op,
              bubbles: !1
            })), Ap(pp, new MouseEvent("mouseenter", {
              ...Op,
              bubbles: !1
            }));
            Ap(ip, new PointerEvent("pointermove", Dp(cp, 0, 0))), Ap(ip, new MouseEvent("mousemove", Dp(cp, 0, 0)))
          }
        } else ip && (Ap(ip, new PointerEvent("pointermove", Dp(cp, 0, 0))), Ap(ip, new MouseEvent("mousemove", Dp(cp, 0, 0))))
      },
      wp = pp => {
        Op.m.GA(Ip.e, pp)
      },
      vp = pp => {
        if (Lp(pp)) return void wp(pp);
        const ip = pp.hasAttribute("data-pad-focusable") ? pp.querySelector("a[href]") : null,
          cp = null !== ip && void 0 !== ip ? ip : pp;
        yp(cp, Yp(cp))
      },
      tp = ".Dropdown-root.is-open",
      Hp = pp => {
        const ip = pp.querySelector(".Dropdown-control");
        return vp(ip), ip
      },
      dp = pp => {
        var ip;
        const cp = null !== (ip = pp.closest(tp)) && void 0 !== ip ? ip : pp.querySelector(tp);
        return cp ? Hp(cp) : null
      },
      ep = pp => {
        for (const ip of document.querySelectorAll(tp)) ip.contains(pp) || Hp(ip)
      },
      jp = pp => null !== pp.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      kp = pp => {
        const ip = pp ? document.elementFromPoint(pp.x, pp.y) : null;
        return !(null === ip || void 0 === ip || !ip.closest("[data-pad-repeat]"))
      },
      mp = pp => {
        var ip;
        return null !== (ip = [...pp.querySelectorAll("[data-pad-back]")].find(xp.t)) && void 0 !== ip ? ip : null
      },
      Rp = pp => {
        const ip = mp(pp);
        return !!ip && (vp(ip), !0)
      },
      qp = pp => {
        var ip, cp, Op, op;
        return null !== (ip = null !== (cp = null !== (Op = pp.getAttribute("data-pad-key")) && void 0 !== Op ? Op : pp.getAttribute("href")) && void 0 !== cp ? cp : null === (op = pp.querySelector("a[href]")) || void 0 === op ? void 0 : op.getAttribute("href")) && void 0 !== ip ? ip : null
      }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);