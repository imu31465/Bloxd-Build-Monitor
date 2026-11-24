export const id = 156;
export const ids = [156];
export const modules = {
  8860: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk
    });
    var Xk = Ik(25),
      Tk = Ik(1179),
      ik = Ik(4983),
      yk = Ik(1096);

    function lk(kk) {
      let {
        note: Fk
      } = kk;
      const {
        t: Ik
      } = (0, Tk.y)(), {
        clientEscMenuOptions: lk
      } = (0, Xk.j)(["clientEscMenuOptions"]);
      return (0, yk.jsx)(ik.e, {
        label: Ik("touchSettings:actionButtons"),
        checked: lk.touchActionButtons,
        onClick: kk => {
          Xk.d.setClientEscMenuOptions({
            touchActionButtons: kk
          })
        },
        circleInfoText: Ik("touchSettings:actionButtonsInfo"),
        note: Fk
      })
    }
  },
  8846: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => UI,
      d: () => RI
    });
    var Xk = Ik(1179),
      Tk = Ik(58),
      ik = Ik(1916),
      yk = Ik(1926),
      lk = Ik(1055),
      ak = Ik.n(lk),
      qk = Ik(1406),
      Lk = Ik(25),
      tk = Ik(95),
      Zk = Ik(111),
      jk = Ik(4983),
      ek = Ik(2349),
      wk = Ik(272),
      Hk = Ik(1933),
      Jk = Ik(1935),
      xk = Ik(8851),
      Pk = Ik(8860),
      Kk = Ik(318),
      Qk = Ik(1096);
    const sk = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Vk = Ik(8862);
    var zk = Ik(1432),
      Sk = Ik(1324),
      vk = Ik(8865),
      Ek = Ik(1375),
      Ok = Ik(1066),
      nk = Ik(2374);
    const Gk = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(nk.A.map((kk => [kk, "menu"])))
      },
      pk = kk => nk.y.filter((Fk => Gk[Fk] === kk)),
      uk = new Set(pk("cluster")),
      bk = ["cluster"],
      Rk = [...bk, ...nk.y.filter((kk => !bk.includes(kk) && !Gk[kk]))],
      Uk = Rk.flatMap((kk => [kk, ...pk(kk)])).map((kk => ({
        id: kk,
        label: `hudLayout:${kk}`,
        ...nk.x[kk],
        parent: Gk[kk]
      }))),
      Ck = Object.fromEntries(Uk.map((kk => [kk.id, kk]))),
      Nk = "data-hud-el";

    function ck(kk, Fk, Ik, Xk) {
      const Tk = Ik(function(kk, Fk) {
          return "attack" !== kk || Fk ? Ck[kk].label : "hudLayout:attackContext"
        }(kk, Fk)),
        ik = Xk[kk];
      return ik ? Ik("hudLayout:slotWithKey", {
        slot: Tk,
        key: ik
      }) : Tk
    }

    function Wk(kk, Fk, Ik, Xk) {
      return kk.map((kk => ck(kk, Fk, Ik, Xk))).join(", ")
    }

    function fk(kk) {
      let {
        className: Fk,
        keepPlace: Ik
      } = kk;
      return Ik ? (0, Qk.jsx)("div", {
        className: ak()(Fk, "Placeholder")
      }) : null
    }

    function Bk(kk) {
      let {
        id: Fk,
        elements: Ik,
        actionButtons: Tk,
        keyNames: ik,
        className: yk,
        keepPlace: lk,
        onHidden: ak
      } = kk;
      const {
        t: Lk
      } = (0, Xk.y)();
      if (!Ck[Fk].hide) return (0, Qk.jsx)(fk, {
        className: yk,
        keepPlace: lk
      });
      const tk = (0, nk.u)(Ik, Fk);
      return (0, Qk.jsx)(qk.Q, {
        className: yk,
        ariaLabel: Lk(tk ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: ck(Fk, Tk, Lk, ik)
        }),
        pressed: !tk,
        onClick: () => {
          ak(Fk, !tk)
        },
        children: (0, Qk.jsx)(Ok.e, {
          name: tk ? "eye-slash" : "eye"
        })
      })
    }

    function dk(kk) {
      var Fk;
      let {
        id: Ik,
        elements: Tk,
        actionButtons: ik,
        keyNames: yk,
        className: lk,
        keepPlace: ak,
        onlyWhenMoved: Lk,
        locked: tk,
        onReset: Zk
      } = kk;
      const {
        t: jk
      } = (0, Xk.y)(), ek = Ck[Ik], wk = (0, nk.L)(null !== (Fk = Tk[Ik]) && void 0 !== Fk ? Fk : nk.q);
      return !ek.move && !ek.scale || Lk && wk ? (0, Qk.jsx)(fk, {
        className: lk,
        keepPlace: ak
      }) : (0, Qk.jsx)(qk.Q, {
        className: lk,
        disabled: wk || tk,
        ariaLabel: jk("hudLayout:resetElement", {
          name: ck(Ik, ik, jk, yk)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: Ik
        },
        onClick: kk => {
          Lk && mk(kk.currentTarget), Zk(Ik)
        },
        children: (0, Qk.jsx)(Ok.e, {
          name: "rotate-left"
        })
      })
    }

    function Yk(kk) {
      let {
        id: Fk,
        actionButtons: Ik,
        keyNames: Tk,
        className: ik,
        keepPlace: yk,
        locked: lk,
        lockable: ak,
        onLocked: Lk
      } = kk;
      const {
        t: tk
      } = (0, Xk.y)();
      return ak || lk ? (0, Qk.jsx)(qk.Q, {
        className: ik,
        ariaLabel: tk(lk ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: ck(Fk, Ik, tk, Tk)
        }),
        pressed: lk,
        active: lk,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${lk?"unlock":"lock"}:${Fk}`
        },
        onClick: () => {
          Lk(Fk, !lk)
        },
        children: (0, Qk.jsx)(Ok.e, {
          name: lk ? "lock" : "lock-open"
        })
      }) : (0, Qk.jsx)(fk, {
        className: ik,
        keepPlace: yk
      })
    }

    function Ak(kk) {
      let {
        className: Fk,
        open: Ik,
        name: Tk,
        onToggle: ik
      } = kk;
      const {
        t: yk
      } = (0, Xk.y)();
      return (0, Qk.jsx)(qk.Q, {
        className: Fk,
        ariaLabel: yk(Ik ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Tk
        }),
        pressed: Ik,
        analyticsClick: {
          id: "hud_layout.children",
          value: Ik ? "close" : "open"
        },
        onClick: () => {
          ik(!Ik)
        },
        children: (0, Qk.jsx)(Ok.e, {
          name: Ik ? "angle-up" : "angle-down"
        })
      })
    }

    function gk(kk, Fk) {
      var Ik;
      kk.contains(document.activeElement) && Fk.focus({
        preventScroll: !0
      }), null === (Ik = (0, Ek.h)()) || void 0 === Ik || Ik.handOverPadFocus(kk, Fk)
    }

    function mk(kk) {
      const Fk = kk.closest("[data-hud-row]"),
        Ik = null === Fk || void 0 === Fk ? void 0 : Fk.querySelector(".HudElementRowName");
      return !(!Fk || !Ik) && (gk(Fk, Ik), !0)
    }
    const hk = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function rk(kk, Fk) {
      return "joystick" === kk && !Fk
    }

    function Dk() {
      const {
        t: kk
      } = (0, Xk.y)();
      return (0, Qk.jsx)(qk.Q, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: kk => {
          const Fk = kk.currentTarget;
          if (!mk(Fk)) {
            const kk = function(kk) {
              var Fk, Ik;
              const Xk = [kk.previousElementSibling, kk.nextElementSibling].find((kk => kk instanceof HTMLElement && kk.matches(hk)));
              return null !== (Fk = null !== Xk && void 0 !== Xk ? Xk : null === (Ik = kk.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === Ik ? void 0 : Ik.querySelector(`:is(${hk}):not(.HudFixJoystickButton)`)) && void 0 !== Fk ? Fk : null
            }(Fk);
            kk && gk(Fk, kk)
          }
          Lk.d.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: kk("hudLayout:fixJoystick")
      })
    }
    var Mk = Ik(74),
      kF = Ik(1263),
      FF = Ik(3042),
      IF = Ik(2679),
      XF = Ik(8871),
      TF = Ik(2377),
      iF = Ik(2400),
      yF = Ik(3089);
    const lF = ["J", "C", "A", "P", "U", "X", "G"],
      aF = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: nk.A,
        pinnedIcon: null
      });

    function qF(kk, Fk) {
      kk.replaceChildren(...[...Fk.childNodes].map((kk => kk.cloneNode(!0))))
    }
    const LF = kk => ({
      [Nk]: kk
    });

    function tF(kk) {
      let {
        id: Fk,
        slot: Ik,
        icon: Xk,
        label: ik,
        hidden: yk,
        className: lk,
        face: qk
      } = kk;
      const Lk = (0, Tk.useRef)(null);
      return (0, Tk.useLayoutEffect)((() => {
        qk && Lk.current && qF(Lk.current, qk)
      }), [qk]), (0, Qk.jsxs)("div", {
        className: ak()("TouchKeyHit", `TouchSlot${Ik}`, lk, {
          HudPreviewGhost: yk.has(Fk)
        }),
        ...LF(Fk),
        children: [qk && (0, Qk.jsx)("div", {
          ref: Lk,
          className: ak()("TouchKey", {
            Labelled: qk.classList.contains("Labelled")
          })
        }), !qk && (0, Qk.jsxs)("div", {
          className: ak()("TouchKey", {
            Labelled: void 0 !== ik
          }),
          children: [Xk && (0, Qk.jsx)(Ok.e, {
            name: Xk
          }), void 0 !== ik && (0, Qk.jsx)("span", {
            className: "TouchKeyLabel",
            children: ik
          })]
        })]
      })
    }

    function ZF(kk) {
      let {
        item: Fk,
        selected: Ik
      } = kk;
      const Xk = (0, Tk.useRef)(null);
      return (0, Tk.useLayoutEffect)((() => {
        Xk.current && qF(Xk.current, Fk)
      }), [Fk]), (0, Qk.jsx)("div", {
        ref: Xk,
        className: ak()("InvenItem", {
          Selected: Ik
        })
      })
    }
    const jF = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      eF = kk => void 0 === kk ? {} : {
        style: {
          "--parked": kk
        }
      };

    function wF(kk) {
      let {
        id: Fk,
        hidden: Ik,
        parked: Xk,
        unslotted: Tk = !1
      } = kk;
      return (0, Qk.jsx)("div", {
        className: ak()("TopRightIcon", iF.j[Fk], {
          HudPreviewGhost: Ik.has(Fk),
          [TF.d]: void 0 !== Xk,
          [TF.f]: Tk
        }),
        ...eF(Xk),
        children: (0, Qk.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...LF(Fk),
          children: (0, Qk.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Qk.jsx)(Ok.e, {
              name: jF[Fk]
            })
          })
        })
      })
    }

    function HF(kk) {
      let {
        portraitPhone: Fk,
        icons: Ik,
        pinnedIcon: Xk,
        hidden: ik,
        moved: yk,
        trayState: lk
      } = kk;
      const qk = Fk ? (0, TF.G)(Ik) : [],
        Lk = Ik.filter((kk => "settings" === kk)),
        tk = Ik.filter((kk => "settings" !== kk && !qk.includes(kk))).reverse(),
        Zk = qk.length > 0 && "gone" === lk,
        jk = [...Lk, ...Zk ? ["tray"] : [], ...tk].filter((kk => "tray" === kk || ik.has(kk) && !yk.has(kk))),
        ek = kk => {
          const Fk = jk.indexOf(kk);
          return Fk < 0 ? void 0 : Fk
        },
        wk = (kk, Fk) => (0, Qk.jsx)(wF, {
          id: kk,
          hidden: ik,
          parked: Fk ? ek(kk) : void 0,
          unslotted: Fk && ik.has(kk) && yk.has(kk)
        }, kk);
      return (0, Qk.jsxs)("div", {
        className: ak()("TopRightIcons TouchInGame", {
          Column: Fk
        }),
        children: [Lk.map((kk => wk(kk, !0))), qk.length > 0 && (0, Qk.jsxs)("div", {
          className: ak()("TopRightIcon TopRightTrayToggle Open", {
            [TF.d]: Zk
          }),
          ...eF(ek("tray")),
          children: [(0, Qk.jsx)("div", {
            className: ak()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== lk
            }),
            children: (0, Qk.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, Qk.jsx)(Ok.e, {
                name: "ellipsis"
              })
            })
          }), (0, Qk.jsx)("div", {
            className: "TopRightTray",
            children: qk.map((kk => wk(kk, !1)))
          })]
        }), tk.map((kk => (0, Qk.jsxs)(Tk.Fragment, {
          children: ["perspective" === kk && null !== Xk && (0, Qk.jsx)("div", {
            className: "TopRightIcon",
            children: (0, Qk.jsx)("div", {
              className: "UiItemIcon SmallTextBold",
              children: (0, Qk.jsx)("div", {
                className: "ScaleOnHover",
                children: (0, Qk.jsx)(Ok.e, {
                  name: Xk
                })
              })
            })
          }), wk(kk, !0)]
        }, kk)))]
      })
    }

    function JF(kk) {
      let {
        next: Fk,
        hidden: Ik
      } = kk;
      return (0, Qk.jsx)("div", {
        className: ak()("HotBarArrow", Fk ? "Next" : "Previous", {
          HudPreviewGhost: Ik
        }),
        ...LF("arrows"),
        children: (0, Qk.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Qk.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Qk.jsx)(Ok.e, {
              name: Fk ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function xF() {
      return (0, Qk.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, Qk.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, Qk.jsx)("div", {
            className: "SocialBar",
            children: (0, Qk.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, Qk.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, Qk.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, Qk.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, Qk.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Qk.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Qk.jsx)(Ok.e, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, Qk.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, Qk.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, Qk.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, Qk.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Qk.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Qk.jsx)(Ok.e, {
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
    const PF = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      KF = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      QF = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      sF = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function VF(kk) {
      let {
        presence: Fk,
        portraitPhone: Ik,
        hidden: Tk,
        actionButtons: ik,
        joystickFixed: yk,
        keysAbove: lk,
        auraBar: qk,
        trayState: Lk,
        moved: Zk
      } = kk;
      const {
        t: jk
      } = (0, Xk.y)(), {
        faces: ek,
        items: wk
      } = Fk, Hk = kk => ({
        HudPreviewGhost: Tk.has(kk)
      });
      return (0, Qk.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, Qk.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, Qk.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, Qk.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, Qk.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, Qk.jsx)("div", {
              className: "InGameHeaderGameName",
              children: jk("hudLayout:previewGameName")
            })]
          })
        }), (0, Qk.jsx)("div", {
          className: "TopLeftElements",
          children: (0, Qk.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, Qk.jsxs)("div", {
              className: "Chat",
              children: [(0, Qk.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [jk("hudLayout:previewChatLine"), jk("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), jk("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((kk => (0, Qk.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, Qk.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, Qk.jsx)("div", {
                      className: "IndividualText",
                      children: kk
                    })
                  })
                }, kk)))
              }), (0, Qk.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: ak()("ChatIconWrapper SmallTextLight", Hk("chat")),
                ...LF("chat"),
                children: (0, Qk.jsx)(Ok.e, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, Qk.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, Qk.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, Qk.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, Qk.jsx)("div", {
                className: "TopRightIconsContainer",
                ...LF("menu"),
                children: (0, Qk.jsx)(HF, {
                  portraitPhone: Ik,
                  icons: Fk.rowIcons,
                  pinnedIcon: Fk.pinnedIcon,
                  hidden: Tk,
                  trayState: Lk,
                  moved: Zk
                })
              })
            }), tk.featureFlags.useSocialFeatures && (0, Qk.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, Qk.jsx)(xF, {})
            })]
          })
        }), (0, Qk.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, Qk.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, Qk.jsxs)("div", {
            className: "TouchInteractKey",
            ...LF("interact"),
            children: [(0, Qk.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, Qk.jsx)(Ok.e, {
                name: "hand-back-point-up"
              })
            }), (0, Qk.jsx)("div", {
              children: jk("hudLayout:previewInteract")
            })]
          })
        }), (0, Qk.jsx)("div", {
          className: "BottomCentre",
          children: (0, Qk.jsxs)("div", {
            className: "BottomElements",
            children: [(0, Qk.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, Qk.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, Qk.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...LF("hotbar"),
                children: (0, Qk.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, Qk.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, Qk.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, Qk.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, Qk.jsx)(Ok.e, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), qk && (0, Qk.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, Qk.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, Qk.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, yF.c)("glint"),
                    alt: ""
                  }), (0, Qk.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, Qk.jsx)("div", {
                  className: "AuraBar",
                  children: (0, Qk.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, Qk.jsx)("div", {
                className: "HotBarRow",
                children: (0, Qk.jsx)("div", {
                  className: ak()("HotBarContainer Touch", {
                    KeysAbove: lk
                  }),
                  children: (0, Qk.jsxs)("div", {
                    className: "HotBar",
                    ...LF("hotbar"),
                    children: [(0, Qk.jsxs)("div", {
                      className: ak()("TouchInventoryKeys", {
                        NoAuraBar: !qk
                      }),
                      children: [(0, Qk.jsx)("div", {
                        className: ak()("TouchInventoryKey ShopKey", Hk("inventory"), {
                          Hidden: !Fk.shop
                        }),
                        ...LF("inventory"),
                        children: (0, Qk.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Qk.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Qk.jsx)(Ok.e, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, Qk.jsx)("div", {
                        className: ak()("TouchInventoryKey BagKey", Hk("inventory"), {
                          Hidden: !Fk.bag
                        }),
                        ...LF("inventory"),
                        children: (0, Qk.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Qk.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Qk.jsx)(Ok.e, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, Qk.jsx)(JF, {
                      next: !1,
                      hidden: Tk.has("arrows")
                    }), (0, Qk.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== wk && wk.map(((kk, Fk) => (0, Qk.jsx)(ZF, {
                        item: kk,
                        selected: kk.classList.contains("Selected")
                      }, Fk))), null === wk && QF.map((kk => {
                        const Fk = sF[kk];
                        return (0, Qk.jsx)("div", {
                          className: ak()("InvenItem", {
                            Selected: 0 === kk
                          }),
                          children: Fk && (0, Qk.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, Qk.jsx)(Ok.e, {
                              name: Fk
                            })
                          })
                        }, kk)
                      }))]
                    }), (0, Qk.jsx)(JF, {
                      next: !0,
                      hidden: Tk.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, Qk.jsx)("div", {
              className: "BottomRightElements",
              children: (0, Qk.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== ek && lF.map((kk => {
                  const Fk = ek[kk];
                  return Fk && (0, Qk.jsx)(tF, {
                    id: PF[kk],
                    slot: kk,
                    face: Fk,
                    className: KF[kk],
                    hidden: Tk
                  }, kk)
                })), null === ek && (0, Qk.jsxs)(Qk.Fragment, {
                  children: [(0, Qk.jsx)(tF, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Tk
                  }), (0, Qk.jsx)(tF, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Tk
                  }), ik && (0, Qk.jsxs)(Qk.Fragment, {
                    children: [(0, Qk.jsx)(tF, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Tk
                    }), (0, Qk.jsx)(tF, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Tk
                    })]
                  }), !ik && (0, Qk.jsx)(tF, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: jk("touchKeys:scope"),
                    hidden: Tk
                  }), (0, Qk.jsx)(tF, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: jk("touchKeys:fly"),
                    hidden: Tk
                  }), (0, Qk.jsx)(tF, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Tk
                  })]
                })]
              })
            })]
          })
        }), (0, Qk.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, Qk.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, Qk.jsxs)("div", {
              className: ak()("Joystick Resting HudPreviewJoystick", {
                Floating: !yk
              }),
              ...LF("joystick"),
              children: [(0, Qk.jsx)("div", {
                className: "JoystickBase"
              }), (0, Qk.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function zF() {
      const [kk, Fk] = (0, Tk.useState)({}), Ik = (0, Tk.useCallback)((kk => {
        Fk((Fk => [...new Set([...Object.keys(Fk), ...Object.keys(kk)])].every((Ik => Fk[Ik] === kk[Ik])) ? Fk : kk))
      }), []);
      return [kk, Ik]
    }
    const SF = .05;

    function oF(kk) {
      var Fk;
      let {
        selected: Ik,
        layout: Tk,
        actionButtons: ik,
        keyNames: yk,
        overlaps: lk,
        scaleCaps: Lk,
        joystickFixed: tk,
        onScale: Zk,
        onHidden: jk,
        onReset: ek,
        locked: wk,
        lockable: Hk,
        onLocked: Jk,
        extra: xk
      } = kk;
      const {
        t: Pk
      } = (0, Xk.y)(), Kk = Ik ? Ck[Ik] : null, sk = null !== Ik && wk.has(Ik), Vk = (Ik && Tk.hudElements[Ik] || nk.q)[2], zk = null !== (Fk = Ik && Lk[Ik]) && void 0 !== Fk ? Fk : nk.m, Sk = kk => {
        Ik && Zk(Ik, Math.min(zk, Math.round(100 * (Vk + .1 * kk)) / 100))
      };
      return (0, Qk.jsxs)(Qk.Fragment, {
        children: [(0, Qk.jsxs)("div", {
          className: ak()("HudQuickName SmallTextBold", {
            Overlap: lk.length > 0
          }),
          children: [lk.length > 0 && (0, Qk.jsx)(Ok.e, {
            name: "triangle-exclamation"
          }), Kk ? ck(Kk.id, ik, Pk, yk) : Pk("hudLayout:fullScreenHint"), lk.length > 0 && (0, Qk.jsx)("span", {
            className: "HudQuickOverlap",
            children: Pk("hudLayout:overlapsShort", {
              names: Wk(lk, ik, Pk, yk)
            })
          })]
        }), (null === Kk || void 0 === Kk ? void 0 : Kk.scale) && (0, Qk.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, Qk.jsx)(qk.Q, {
            disabled: sk || Vk <= nk.o,
            ariaLabel: Pk("hudLayout:smaller"),
            onClick: () => {
              Sk(-1)
            },
            children: (0, Qk.jsx)(Ok.e, {
              name: "minus"
            })
          }), (0, Qk.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*Vk)}%`
          }), (0, Qk.jsx)(qk.Q, {
            disabled: sk || Vk >= zk,
            ariaLabel: Pk("hudLayout:larger"),
            onClick: () => {
              Sk(1)
            },
            children: (0, Qk.jsx)(Ok.e, {
              name: "plus"
            })
          })]
        }), (Kk || xk) && (0, Qk.jsxs)("div", {
          className: "HudQuickActions",
          children: [Kk && (0, Qk.jsxs)(Qk.Fragment, {
            children: [(0, Qk.jsx)(Yk, {
              id: Kk.id,
              actionButtons: ik,
              keyNames: yk,
              locked: sk,
              lockable: Hk(Kk.id),
              onLocked: Jk
            }), (0, Qk.jsx)(Bk, {
              id: Kk.id,
              elements: Tk.hudElements,
              actionButtons: ik,
              keyNames: yk,
              onHidden: jk
            }), (0, Qk.jsx)(dk, {
              id: Kk.id,
              elements: Tk.hudElements,
              actionButtons: ik,
              keyNames: yk,
              locked: sk,
              onReset: ek
            }), rk(Kk.id, tk) && (0, Qk.jsx)(Dk, {})]
          }), xk]
        })]
      })
    }
    var vF = Ik(1103),
      EF = Ik(4388);
    const OF = "HudPreviewDoc",
      nF = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      GF = new Set([OF, ...Object.values(nF)]),
      pF = new Set(nk.y.map(iF.w)),
      uF = new Set(iF.f),
      bF = 'style, link[rel="stylesheet"]';

    function RF(kk, Fk, Ik, Xk) {
      const Tk = new Map,
        ik = new Set,
        yk = new URL(kk.baseURI).origin,
        lk = Fk => {
          var Ik;
          if ("LINK" !== Fk.nodeName) return !0;
          const Xk = null === (Ik = Fk.getAttribute("href")) || void 0 === Ik ? void 0 : Ik.trim();
          if (!Xk) return !1;
          try {
            return new URL(Xk, kk.baseURI).origin === yk
          } catch {
            return !1
          }
        };
      let ak = null;
      const qk = () => {
          ak !== (0 === ik.size) && (ak = 0 === ik.size, null === Xk || void 0 === Xk || Xk(ak))
        },
        Lk = kk => {
          const Fk = kk.cloneNode(!0);
          if ("LINK" === Fk.tagName) {
            ik.add(Fk);
            const kk = () => {
              ik.delete(Fk), qk()
            };
            Fk.addEventListener("load", kk), Fk.addEventListener("error", kk), Ik && Fk.addEventListener("load", Ik)
          }
          return Fk
        },
        tk = () => {
          const Xk = function(kk) {
              const Fk = [...kk.body.children].filter((kk => kk.matches(bF)));
              return [...kk.head.querySelectorAll(bF), ...Fk]
            }(kk).filter(lk),
            yk = new Set(Xk);
          for (const [kk, Fk] of Tk) yk.has(kk) || (Fk.remove(), Tk.delete(kk), ik.delete(Fk));
          let ak = null;
          for (let kk = Xk.length - 1; kk >= 0; kk--) {
            const ik = Xk[kk];
            let yk = Tk.get(ik);
            yk ? "STYLE" === ik.tagName && yk.textContent !== ik.textContent && (yk.textContent = ik.textContent, null === Ik || void 0 === Ik || Ik()) : (yk = Lk(ik), Tk.set(ik, yk), Fk.head.insertBefore(yk, ak)), ak = yk
          }
          qk()
        };
      tk();
      const Zk = new MutationObserver(tk);
      return Zk.observe(kk.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), Zk.observe(kk.body, {
        childList: !0
      }), () => {
        Zk.disconnect()
      }
    }

    function UF(kk, Fk, Ik) {
      let {
        keysAbove: Xk
      } = Ik;
      const Tk = [...kk.documentElement.classList].filter((kk => !GF.has(kk) && !uF.has(kk))),
        ik = [...Fk.documentElement.classList].filter((kk => uF.has(kk))),
        yk = [OF, nF.hotbar, nF.hasShop, nF.hasBag];
      Xk && yk.push(nF.keysAbove), Fk.documentElement.className = [...Tk, ...yk, ...ik].join(" ")
    }
    const CF = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function NF(kk, Fk, Ik, Xk, Tk) {
      const ik = (0, nk.z)(Ik, Xk, "joystick"),
        yk = (0, iF.A)((0, iF.N)(Ik, Xk, Tk), Xk),
        lk = yk.classes.filter((kk => !pF.has(kk))),
        ak = Fk.documentElement;
      (0, iF.T)({
        ...yk,
        classes: lk
      }, {
        vars: ak,
        safe: ak,
        classes: ak
      });
      const qk = (0, iF.G)(Ik.hudLayouts[Xk].hudSafe, window.innerWidth, window.innerHeight, cF(), (0, iF.P)(Fk));
      ak.style.setProperty("--preview-joystick-shift-left", `${qk[3]}px`), ak.style.setProperty("--preview-joystick-shift-bottom", `${qk[2]}px`), ak.style.setProperty("--preview-joystick-scale", String(ik[2])), (0, EF.c)(ak, Fk, Ik, Xk);
      for (const Lk of CF) ak.style.setProperty(Lk, kk.documentElement.style.getPropertyValue(Lk) || "0px")
    }

    function cF() {
      return (0, iF.K)(Lk.d.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function WF(kk) {
      return (0, iF.p)(cF(), (0, iF.P)(kk))
    }

    function fF(kk, Fk, Ik) {
      const Xk = kk.documentElement.style,
        Tk = (0, iF.J)(Fk),
        ik = Xk.getPropertyValue(Tk);
      try {
        return Ik((kk => {
          Xk.setProperty(Tk, String(kk))
        }))
      } finally {
        "" === ik ? Xk.removeProperty(Tk) : Xk.setProperty(Tk, ik)
      }
    }

    function BF(kk, Fk) {
      const [Ik, Xk] = fF(kk, "hotbar", (Fk => {
        const Ik = Ik => {
          var Xk, Tk;
          return Fk(Ik), null !== (Xk = null === (Tk = kk.querySelector(".HotBarGameItemsContainer")) || void 0 === Tk ? void 0 : Tk.getBoundingClientRect().width) && void 0 !== Xk ? Xk : 0
        };
        return [Ik(1), Ik(nk.m)]
      }));
      return Ik <= 0 ? nk.m : Math.min(nk.m, Math.max(1, Math.floor(Xk / Ik / Fk + 1e-6) * Fk))
    }
    const dF = 3,
      YF = .5,
      AF = kk => kk.right - kk.left;
    const gF = (kk, Fk) => Math.abs((0, XF.e)(kk).x - (0, XF.e)(Fk).x) + Math.abs((0, XF.e)(kk).y - (0, XF.e)(Fk).y) + Math.abs(AF(kk) - AF(Fk));

    function mF(kk, Fk, Ik, Xk, Tk) {
      let {
        canKeep: ik = () => !0,
        passes: yk = dF,
        before: lk,
        keysAboveOf: ak
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const qk = void 0 !== ak && ak(kk) !== ak(Fk),
        Lk = Fk.hudLayouts[Ik].hudLocked.filter((kk => ik(kk) && !(qk && "inventory" === kk))),
        tk = new Set(Lk);
      if (0 === tk.size) return Fk;
      const Zk = [...uk].filter((Xk => !Lk.includes(Xk) && (0, nk.z)(kk, Ik, Xk).join() === (0, nk.z)(Fk, Ik, Xk).join())),
        jk = kk => {
          const Fk = (0, XF.M)(Zk.flatMap((Fk => kk[Fk] ? [kk[Fk]] : [])));
          return {
            ...kk,
            cluster: null !== Fk && void 0 !== Fk ? Fk : void 0
          }
        },
        ek = kk => {
          const Fk = Tk(kk);
          return Fk && jk(Fk)
        },
        wk = lk ? jk(lk) : ek(kk);
      let Hk = wk && ek(Fk);
      if (!wk || !Hk) return Fk;
      let Jk = Fk;
      for (let xk = 0; xk < yk && tk.size > 0; xk++) {
        const kk = new Map;
        for (const Fk of tk) {
          const Tk = wk[Fk],
            ik = Hk[Fk],
            yk = Tk && ik ? hF(Fk, (0, nk.z)(Jk, Ik, Fk), Tk, ik, Xk) : null;
          yk ? kk.set(Fk, yk) : tk.delete(Fk)
        }
        if (0 === kk.size) break;
        let Tk = Jk;
        for (const [Fk, Xk] of kk) Tk = (0, nk.jb)(Tk, Ik, Fk, Xk);
        const ik = ek(Tk);
        if (!ik) return Fk;
        let yk = Jk;
        for (const [Fk, Xk] of kk) {
          const kk = ik[Fk];
          kk && gF(wk[Fk], kk) < gF(wk[Fk], Hk[Fk]) - YF ? yk = (0, nk.jb)(yk, Ik, Fk, Xk) : tk.delete(Fk)
        }
        if (yk === Jk) break;
        const lk = [...kk.keys()].every((kk => tk.has(kk)));
        if (Jk = yk, Hk = lk ? ik : ek(Jk), !Hk) return Fk
      }
      return Tk(Jk), Jk
    }

    function hF(kk, Fk, Ik, Xk, Tk) {
      let [ik, yk, lk] = Fk;
      const ak = nk.x[kk],
        qk = {};
      ak.scale && AF(Xk) > 0 && Math.abs(AF(Ik) - AF(Xk)) > YF && (qk.scale = Math.max(nk.o, Math.min(nk.m, lk * AF(Ik) / AF(Xk))));
      const Lk = (0, XF.e)(Ik).x - (0, XF.e)(Xk).x,
        tk = (0, XF.e)(Ik).y - (0, XF.e)(Xk).y;
      return ak.move && (Math.abs(Lk) > YF || Math.abs(tk) > YF) && (qk.dx = ik + Lk / Tk.width, qk.dy = yk + tk / Tk.height), void 0 === qk.scale && void 0 === qk.dx ? null : qk
    }
    let rF = 0;

    function DF() {
      return rF > 0
    }
    const MF = kk => 0 === kk.dx && 0 === kk.dy,
      kI = .001,
      FI = kk => Math.abs(kk.dx) >= 5e-4 || Math.abs(kk.dy) >= 5e-4 ? kk : {
        dx: kk.dx,
        dy: kk.dy < 0 ? -.001 : kI
      };

    function II(kk) {
      let {
        preview: Fk,
        stageRef: Ik,
        ringRef: Xk,
        centreLineRef: ik,
        snapCentre: yk,
        ready: lk,
        measure: ak,
        k: qk,
        viewport: Lk,
        boxes: tk,
        pieces: Zk,
        selected: jk,
        insets: ek,
        layout: wk,
        canMove: Hk,
        onSelect: Jk,
        onMove: xk
      } = kk;
      const Pk = (0, Tk.useRef)(null),
        Kk = (0, Tk.useCallback)((() => null !== Pk.current), []),
        Qk = (kk, Fk) => {
          if (!Fk) return null;
          const Ik = (0, XF.e)(kk.origin),
            Xk = (0, XF.e)(Fk),
            Tk = (kk.to.dx - kk.from.dx) * Lk.width,
            ik = (kk.to.dy - kk.from.dy) * Lk.height,
            yk = Fk.right - Fk.left,
            lk = Fk.bottom - Fk.top;
          return {
            skew: {
              x: Xk.x - Ik.x - Tk,
              y: Xk.y - Ik.y - ik
            },
            box: {
              left: Ik.x - yk / 2,
              top: Ik.y - lk / 2,
              right: Ik.x + yk / 2,
              bottom: Ik.y + lk / 2
            }
          }
        },
        sk = (kk, Ik) => {
          var Tk;
          const yk = Pk.current;
          if (!yk || yk.pointerId !== kk.pointerId) return;
          Pk.current = null, null === (Tk = ik.current) || void 0 === Tk || Tk.classList.remove("Shown", "Snapped");
          const lk = Xk.current;
          if (lk && null !== yk.ringStyle && lk.setAttribute("style", yk.ringStyle), Ik && yk.moved) {
            const kk = MF(yk.to) ? null : ak(yk.id),
              Fk = kk ? (0, XF.L)(kk, (0, XF.H)(Lk.width, Lk.height, ek)) : {
                x: 0,
                y: 0
              },
              Ik = {
                dx: yk.to.dx + Fk.x / Lk.width,
                dy: yk.to.dy + Fk.y / Lk.height
              },
              Xk = MF(yk.to) ? Ik : FI(Ik);
            xk(yk.id, Xk.dx, Xk.dy)
          } else Fk(yk.id, null), Ik && yk.tapPick && Jk(yk.tapPick)
        };
      return {
        busy: Kk,
        handlers: {
          onPointerDown: kk => {
            var Fk;
            if (!lk || Pk.current || !kk.target.closest(".HudPreviewHandle")) return;
            const Xk = Ik.current.getBoundingClientRect(),
              Tk = {
                x: (kk.clientX - Xk.left) / qk,
                y: (kk.clientY - Xk.top) / qk
              },
              ik = (0, XF.B)(Tk, Zk, 40 / qk),
              yk = "cluster" === jk && void 0 !== tk.cluster && null !== (0, XF.B)(Tk, [{
                id: "cluster",
                box: tk.cluster
              }], 40 / qk),
              ak = "menu" === jk && void 0 !== tk.menu && (0, XF.i)(tk.menu, Tk) && ("menu" === ik || null !== ik && (0, TF.v)(ik, wk.hudElements[ik])),
              Lk = yk ? "cluster" : ak ? "menu" : null,
              ek = null !== Lk,
              xk = null !== Lk && void 0 !== Lk ? Lk : ik;
            if (!xk) return;
            if (function(kk) {
                rF++;
                const Fk = Ik => {
                  Ik.pointerId === kk && (rF = Math.max(0, rF - 1), window.removeEventListener("pointerup", Fk, !0), window.removeEventListener("pointercancel", Fk, !0))
                };
                window.addEventListener("pointerup", Fk, !0), window.addEventListener("pointercancel", Fk, !0)
              }(kk.pointerId), !Hk(xk)) return void Jk(ek && ik ? ik : xk);
            Jk(xk);
            const [Kk, Qk] = null !== (Fk = wk.hudElements[xk]) && void 0 !== Fk ? Fk : [0, 0], sk = {
              dx: Kk,
              dy: Qk
            }, Vk = {
              skew: {
                x: 0,
                y: 0
              },
              box: tk[xk]
            };
            Pk.current = {
              id: xk,
              pointerId: kk.pointerId,
              startX: kk.clientX,
              startY: kk.clientY,
              origin: tk[xk],
              from: sk,
              to: sk,
              moved: !1,
              home: MF(sk) ? {
                centre: (0, XF.e)(tk[xk]),
                anchor: Vk
              } : null,
              away: MF(sk) ? null : Vk,
              anchor: Vk,
              ringStyle: null,
              tapPick: ek ? ik : null
            }, kk.currentTarget.setPointerCapture(kk.pointerId)
          },
          onPointerMove: kk => {
            const Ik = Pk.current;
            if (!Ik || Ik.pointerId !== kk.pointerId) return;
            const Tk = kk.clientX - Ik.startX,
              lk = kk.clientY - Ik.startY;
            if (!Ik.moved && Math.hypot(Tk, lk) < 5) return;
            const tk = !Ik.moved;
            var Zk, jk;
            (Ik.moved = !0, tk) && (Ik.ringStyle = null !== (Zk = null === (jk = Xk.current) || void 0 === jk ? void 0 : jk.getAttribute("style")) && void 0 !== Zk ? Zk : null);
            const wk = (0, XF.H)(Lk.width, Lk.height, ek);
            if (!Ik.home) {
              var Hk;
              Ik.to = {
                dx: 0,
                dy: 0
              }, Fk(Ik.id, Ik.to);
              const kk = ak(Ik.id),
                Xk = null !== (Hk = Qk(Ik, kk)) && void 0 !== Hk ? Hk : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: Ik.origin
                },
                Tk = (0, XF.e)(Ik.origin);
              Ik.home = {
                centre: kk ? (0, XF.e)(kk) : {
                  x: Tk.x - Ik.from.dx * Lk.width,
                  y: Tk.y - Ik.from.dy * Lk.height
                },
                anchor: Xk
              }
            }
            const Jk = Ik.home;
            let xk = !1;
            const Kk = kk => {
                xk = !1;
                let Xk = (0, XF.o)(kk.box, Tk / qk, lk / qk, wk);
                const ik = Lk.width / 2;
                if (yk && Math.abs((0, XF.e)(Ik.origin).x + Xk.x - ik) <= 8 / qk) {
                  const Fk = ik - (0, XF.e)(Ik.origin).x,
                    Tk = (0, XF.o)(kk.box, Fk, Xk.y, wk);
                  xk = Math.abs(Tk.x - Fk) < .01, xk && (Xk = Tk)
                }
                const ak = (0, XF.z)(Ik.from, Xk.x - kk.skew.x, Xk.y - kk.skew.y, Lk.width, Lk.height);
                Ik.to = FI(ak), Ik.anchor = kk, Fk(Ik.id, Ik.to)
              },
              sk = (0, XF.o)(Jk.anchor.box, Tk / qk, lk / qk, wk),
              Vk = ik.current,
              zk = (0, XF.e)(Ik.origin),
              Sk = ((0, nk.N)(Ik.id) ? 20 : 6) / qk;
            if (Math.abs(zk.x + sk.x - Jk.centre.x) <= Sk && Math.abs(zk.y + sk.y - Jk.centre.y) <= Sk) Ik.to = {
              dx: 0,
              dy: 0
            }, Ik.anchor = Jk.anchor, xk = yk && Math.abs(Jk.centre.x - Lk.width / 2) < 1, Fk(Ik.id, Ik.to);
            else if (Ik.away) Kk(Ik.away);
            else {
              var vk;
              Kk(Jk.anchor), Ik.away = null !== (vk = Qk(Ik, ak(Ik.id))) && void 0 !== vk ? vk : Jk.anchor, Kk(Ik.away)
            }
            null === Vk || void 0 === Vk || Vk.classList.add("Shown"), null === Vk || void 0 === Vk || Vk.classList.toggle("Snapped", xk), (kk => {
              const Fk = Xk.current;
              if (Fk) {
                const {
                  skew: Ik,
                  box: Xk
                } = kk.anchor;
                Fk.style.left = Xk.left * qk + "px", Fk.style.top = Xk.top * qk + "px", Fk.style.width = (Xk.right - Xk.left) * qk + "px", Fk.style.height = (Xk.bottom - Xk.top) * qk + "px", Fk.style.translate = `${((kk.to.dx-kk.from.dx)*Lk.width+Ik.x)*qk}px ${((kk.to.dy-kk.from.dy)*Lk.height+Ik.y)*qk}px`
              }
            })(Ik)
          },
          onPointerUp: kk => {
            sk(kk, !0)
          },
          onPointerCancel: kk => {
            sk(kk, !1)
          }
        }
      }
    }

    function XI(kk, Fk) {
      return Object.keys(kk).filter((kk => kk !== Fk)).map((Fk => kk[Fk]))
    }

    function TI(kk) {
      const Fk = [],
        Ik = Fk => (0, nk.N)(Fk) && !kk.documentElement.classList.contains((0, iF.C)(Fk));
      for (const yk of kk.querySelectorAll(`[${Nk}]`)) {
        const kk = Ik(yk.getAttribute(Nk)) ? yk.querySelector(".ScaleOnHover") : null,
          Xk = (null !== kk && void 0 !== kk ? kk : yk).getBoundingClientRect();
        (Xk.width > 0 || Xk.height > 0) && Fk.push({
          id: yk.getAttribute(Nk),
          box: {
            left: Xk.left,
            top: Xk.top,
            right: Xk.right,
            bottom: Xk.bottom
          }
        })
      }
      const Xk = kk => (0, XF.M)(Fk.filter((Fk => {
          let {
            id: Ik
          } = Fk;
          return kk(Ik)
        })).map((kk => {
          let {
            box: Fk
          } = kk;
          return Fk
        }))),
        Tk = {};
      for (const yk of new Set(Fk.map((kk => kk.id)))) Tk[yk] = Xk((kk => kk === yk));
      const ik = Xk((kk => uk.has(kk)));
      return ik && (Tk.cluster = ik), {
        boxes: Tk,
        pieces: Fk
      }
    }

    function iI(kk, Fk, Ik) {
      const Xk = Fk.right - Fk.left,
        Tk = Fk.bottom - Fk.top;
      return fF(kk, "cluster", (Fk => {
        const ik = Ik => {
            Fk(Ik);
            const Xk = [...kk.querySelectorAll(`[${Nk}]:not(.HudPreviewGhost)`)].filter((kk => uk.has(kk.getAttribute(Nk)))).map((kk => {
                const Fk = kk.getBoundingClientRect();
                return {
                  left: Fk.left,
                  top: Fk.top,
                  right: Fk.right,
                  bottom: Fk.bottom
                }
              })),
              Tk = (0, XF.M)(Xk);
            return Tk ? {
              w: Tk.right - Tk.left,
              h: Tk.bottom - Tk.top
            } : null
          },
          yk = kk => !kk || kk.w <= Xk && kk.h <= Tk,
          lk = ik(1),
          ak = ik(nk.m);
        if (!lk || yk(ak)) return nk.m;
        const qk = (kk, Fk, Ik) => Fk > kk ? 1 + (Ik - kk) * (nk.m - 1) / (Fk - kk) : nk.m;
        let Lk = Math.floor(Math.min(nk.m, qk(lk.w, ak.w, Xk), qk(lk.h, ak.h, Tk)) / Ik + 1e-6) * Ik;
        for (; Lk > 1 && !yk(ik(Lk));) Lk = Math.round(100 * (Lk - Ik)) / 100;
        return Math.max(1, Lk)
      }))
    }

    function yI(kk) {
      UF(document, kk, {
        keysAbove: !1
      });
      const Fk = parseFloat(getComputedStyle(kk.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        Ik = Number.isFinite(Fk) && Fk < 0;
      return UF(document, kk, {
        keysAbove: Ik
      }), Ik
    }

    function lI(kk, Fk) {
      let {
        layout: Ik,
        orientation: Xk,
        viewport: ik,
        replicaKey: yk,
        joystickFixed: lk,
        busy: ak
      } = Fk;
      const [qk, Lk] = (0, Tk.useState)(null), [tk, Zk] = (0, Tk.useState)({
        boxes: {},
        pieces: []
      }), [jk, ek] = (0, Tk.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [wk, Hk] = (0, Tk.useState)(!1), [Jk, xk] = (0, Tk.useState)(!1), [Pk, Kk] = (0, Tk.useState)(!1), Qk = (0, Tk.useCallback)((kk => {
        xk(kk), kk && Kk(!0)
      }), []), sk = Ik.hudLayouts[Xk].hudSafe;
      (0, Tk.useLayoutEffect)((() => {
        const Fk = kk.current.contentDocument;
        Fk.open(), Fk.write("<!DOCTYPE html><html><head></head><body></body></html>"), Fk.close(), Lk(Fk)
      }), [kk]);
      const Vk = (0, Tk.useCallback)((() => {
          qk && ((0, TF.y)(qk), Zk(TI(qk)), ek(function(kk, Fk) {
            const Ik = WF(kk),
              [Xk, Tk, ik, yk] = Fk ? (0, iF.t)(Fk, window.innerWidth, window.innerHeight, Ik) : Ik;
            return {
              top: Xk,
              right: Tk,
              bottom: ik,
              left: yk
            }
          }(qk, sk)))
        }), [qk, sk]),
        zk = (0, Tk.useCallback)((() => {
          qk && Hk(yI(qk))
        }), [qk]),
        Sk = (0, Tk.useRef)((() => {}));
      return Sk.current = () => {
        zk(), ak() || Vk()
      }, (0, Tk.useLayoutEffect)((() => {
        if (qk) return RF(document, qk, (() => {
          Sk.current()
        }), Qk)
      }), [qk, Qk]), (0, Tk.useLayoutEffect)(zk, [zk, ik]), (0, Tk.useLayoutEffect)((() => {
        qk && (UF(document, qk, {
          keysAbove: wk
        }), NF(document, qk, Ik, Xk, lk), zk(), Vk())
      }), [qk, Ik, Xk, wk, yk, lk, ik, Vk, zk]), (0, Tk.useEffect)((() => {
        var kk;
        if (!qk) return;
        const Fk = new ResizeObserver((() => {
          ak() || Vk()
        }));
        for (const Ik of qk.querySelectorAll(`[${Nk}]`)) Fk.observe(Ik);
        return null === (kk = qk.fonts) || void 0 === kk || kk.ready.then(Vk), () => {
          Fk.disconnect()
        }
      }), [qk, Vk, ak, yk]), {
        doc: qk,
        boxes: tk.boxes,
        pieces: tk.pieces,
        insets: jk,
        keysAbove: wk,
        ready: Jk,
        settled: Pk
      }
    }
    const aI = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      qI = (kk, Fk, Ik) => {
        const Xk = kk => (0, TF.v)(kk, Ik.hudElements[kk]);
        return "cluster" === kk && uk.has(Fk) || "cluster" === Fk && uk.has(kk) || "menu" === kk && Xk(Fk) || "menu" === Fk && Xk(kk) || aI.some((Xk => {
          let [Tk, ik] = Xk;
          const yk = Ik.hudElements.hotbar,
            lk = "inventory" === ik && Ik.hudLocked.includes(ik) && void 0 !== yk && !(0, nk.L)(yk);
          return (kk === Tk && Fk === ik || kk === ik && Fk === Tk) && !lk
        }))
      };
    const LI = ["Above", "Below", "Left", "Right"];

    function tI(kk, Fk, Ik, Xk, Tk) {
      const ik = Ik[kk],
        yk = (ik.left + ik.right) / 2,
        lk = (ik.top + ik.bottom) / 2,
        ak = (7.5 * Fk.length + 14) / Xk,
        qk = 18 / Xk,
        Lk = {
          Above: {
            left: yk - ak / 2,
            top: ik.top - qk,
            right: yk + ak / 2,
            bottom: ik.top
          },
          Below: {
            left: yk - ak / 2,
            top: ik.bottom,
            right: yk + ak / 2,
            bottom: ik.bottom + qk
          },
          Left: {
            left: ik.left - ak,
            top: lk - qk / 2,
            right: ik.left,
            bottom: lk + qk / 2
          },
          Right: {
            left: ik.right,
            top: lk - qk / 2,
            right: ik.right + ak,
            bottom: lk + qk / 2
          }
        },
        tk = XI(Ik, kk),
        Zk = {
          left: 0,
          top: 0,
          right: Tk.width,
          bottom: Tk.height
        };
      return LI[(0, XF.v)(LI.map((kk => Lk[kk])), tk, {
        bounds: Zk
      })]
    }

    function ZI() {
      const [kk, Fk] = (0, FF.c)();
      return (0, Tk.useMemo)((() => ({
        width: kk,
        height: Fk
      })), [kk, Fk])
    }

    function jI(kk) {
      var Fk;
      const {
        layout: Ik,
        orientation: ik,
        selected: yk,
        onSelect: lk,
        onMove: qk,
        canMove: Lk,
        actionButtons: tk,
        joystickFixed: Zk,
        presence: jk,
        keyNames: wk,
        maxHeight: Hk,
        fill: Jk = !1,
        apiRef: xk
      } = kk, {
        t: Pk
      } = (0, Xk.y)(), Kk = ZI(), sk = (null !== (Fk = (0, ek.j)("maxAuraLevel")) && void 0 !== Fk ? Fk : 0) > 0, Vk = Ik.hudLayouts[ik], zk = (0, Tk.useRef)(null), Sk = (0, Tk.useRef)(null), vk = (0, Tk.useRef)(null), Ek = (0, Tk.useRef)(null), Gk = (0, Tk.useRef)(null), pk = (0, Tk.useRef)(null), bk = (0, IF.b)(zk).width, Rk = Jk ? 1 : bk > 0 ? (0, XF.E)(bk, Kk.width, Kk.height, Hk) : 0, Uk = (0, Tk.useRef)((() => !1)), Ck = (0, Tk.useCallback)((() => Uk.current()), []), {
        doc: Nk,
        boxes: Wk,
        pieces: fk,
        insets: Bk,
        keysAbove: dk,
        ready: Yk,
        settled: Ak
      } = lI(vk, {
        layout: Ik,
        orientation: ik,
        viewport: Kk,
        replicaKey: `${tk}:${Zk}:${sk}`,
        joystickFixed: Zk,
        busy: Ck
      }), gk = (0, Tk.useCallback)((kk => {
        Nk && NF(document, Nk, kk, ik, Zk)
      }), [Nk, ik, Zk]), mk = (0, Tk.useCallback)((kk => Nk && Ak ? (gk(kk), yI(Nk), function(kk) {
        let {
          boxes: Fk,
          pieces: Ik
        } = kk;
        const Xk = Ik.find((kk => "inventory" === kk.id));
        if (!Xk || !Fk.inventory) return Fk;
        const Tk = (0, XF.e)(Fk.inventory),
          ik = AF(Xk.box) / 2,
          yk = (Xk.box.bottom - Xk.box.top) / 2;
        return {
          ...Fk,
          inventory: {
            left: Tk.x - ik,
            top: Tk.y - yk,
            right: Tk.x + ik,
            bottom: Tk.y + yk
          }
        }
      }(TI(Nk))) : null), [Nk, Ak, gk]), hk = (0, Tk.useCallback)((kk => !!Nk && (gk(kk), yI(Nk))), [Nk, gk]), rk = (0, Tk.useRef)(null), Dk = (0, Tk.useRef)(null), kF = (0, Tk.useRef)(Ik);
      kF.current = Ik;
      const FF = (0, Tk.useCallback)((() => {
        null !== rk.current && (cancelAnimationFrame(rk.current), rk.current = null)
      }), []);
      (0, Tk.useEffect)((() => FF), [Ik, FF]);
      const {
        lockable: yF
      } = kk, lF = (0, Tk.useCallback)((kk => {
        if (gk(kk), !Ak || 0 === Ik.hudLayouts[ik].hudLocked.length) return;
        const Fk = Ik;
        FF(), rk.current = requestAnimationFrame((() => {
          var Ik;
          if (rk.current = null, kF.current !== Fk) return;
          const Xk = (null === (Ik = Dk.current) || void 0 === Ik ? void 0 : Ik.from) === Fk ? Dk.current.boxes : mk(Fk);
          Xk && (Dk.current = {
            from: Fk,
            boxes: Xk
          }), gk(Xk ? mF(Fk, kk, ik, Kk, mk, {
            canKeep: yF,
            passes: 1,
            before: Xk,
            keysAboveOf: hk
          }) : kk)
        }))
      }), [gk, Ak, Ik, ik, Kk, mk, hk, yF, FF]), aF = II({
        preview: (kk, Fk) => {
          Fk ? lF((0, nk.jb)(Ik, ik, kk, Fk)) : (FF(), gk(Ik))
        },
        stageRef: Sk,
        ringRef: Ek,
        centreLineRef: Gk,
        snapCentre: Ik.hudSnapCentre,
        ready: Ak,
        measure: kk => {
          var Fk;
          return Nk && Yk && null !== (Fk = TI(Nk).boxes[kk]) && void 0 !== Fk ? Fk : null
        },
        k: Rk,
        viewport: Kk,
        boxes: Wk,
        pieces: fk,
        selected: yk,
        insets: Bk,
        layout: Vk,
        canMove: Lk,
        onSelect: lk,
        onMove: (kk, Fk, Ik) => {
          FF(), qk(kk, Fk, Ik)
        }
      });
      (0, Tk.useLayoutEffect)((() => {
        Uk.current = aF.busy
      }), [aF.busy]);
      const qF = (0, Tk.useRef)([]),
        LF = (0, Tk.useRef)(Vk.hudElements);
      (0, Tk.useEffect)((() => {
        for (const Tk of Object.keys(Vk.hudElements)) {
          var kk, Fk, Ik, Xk;
          (null !== (kk = null === (Fk = Vk.hudElements[Tk]) || void 0 === Fk ? void 0 : Fk[2]) && void 0 !== kk ? kk : 1) > (null !== (Ik = null === (Xk = LF.current[Tk]) || void 0 === Xk ? void 0 : Xk[2]) && void 0 !== Ik ? Ik : 1) && Lk(Tk) && !(0, TF.v)(Tk, Vk.hudElements[Tk]) && qF.current.push(Tk)
        }
        LF.current = Vk.hudElements
      }), [Vk.hudElements, Lk]), (0, Tk.useEffect)((() => {
        if (!Yk) return;
        const kk = qF.current.shift(),
          Fk = kk && Wk[kk];
        if (!kk || !Fk || aF.busy()) return;
        const Ik = (0, XF.L)(Fk, (0, XF.H)(Kk.width, Kk.height, Bk));
        if (0 !== Ik.x || 0 !== Ik.y) {
          var Xk;
          const [Fk, Tk] = null !== (Xk = Vk.hudElements[kk]) && void 0 !== Xk ? Xk : [0, 0];
          qk(kk, Fk + Ik.x / Kk.width, Tk + Ik.y / Kk.height)
        }
      }), [Wk, Yk]), (0, Tk.useImperativeHandle)(xk, (() => ({
        setScale: (kk, Fk) => {
          lF((0, nk.jb)(Ik, ik, kk, {
            scale: Fk
          }))
        },
        setOpacity: kk => {
          gk({
            ...Ik,
            hudKeyOpacity: kk
          })
        },
        keepLocks: (kk, Fk) => (FF(), mF(kk, Fk, ik, Kk, mk, {
          canKeep: yF,
          keysAboveOf: hk
        })),
        setSafe: kk => {
          lF((0, nk.pb)(Ik, ik, kk)), pk.current && (pk.current.style.inset = (0, iF.t)(kk, Kk.width, Kk.height, WF(null !== Nk && void 0 !== Nk ? Nk : document)).map((kk => kk * Rk + "px")).join(" "))
        }
      })), [gk, lF, mk, hk, FF, yF, Nk, Ik, ik, Kk, Rk]);
      const tF = new Set(Object.keys(Vk.hudElements).filter((kk => (0, nk.u)(Vk.hudElements, kk)))),
        ZF = yk ? Wk[yk] : void 0,
        jF = yk ? ck(yk, tk, Pk, wk) : "",
        eF = (0, vF.g)(Kk.width, Kk.height),
        wF = yk ? function(kk, Fk, Ik, Xk) {
          const Tk = kk => (0, nk.u)(Ik.hudElements, kk) || (0, TF.r)(kk, Ik, Xk);
          if (Tk(kk)) return [];
          const ik = Fk.filter((Fk => {
              let {
                id: Ik
              } = Fk;
              return "cluster" === kk ? uk.has(Ik) : Ik === kk
            })),
            yk = new Set;
          for (const lk of Fk) lk.id === kk || yk.has(lk.id) || qI(kk, lk.id, Ik) || Tk(lk.id) || void 0 === Ik.hudElements[kk] && void 0 === Ik.hudElements[lk.id] || ik.some((kk => {
            let {
              id: Fk,
              box: Ik
            } = kk;
            return Fk !== lk.id && (0, XF.l)(Ik, lk.box, 2)
          })) && yk.add(lk.id);
          return [...yk]
        }(yk, fk, Vk, eF) : [],
        HF = new Set((0, TF.q)(Vk.hudElements)),
        JF = (0, TF.H)(Vk, (0, TF.G)(jk.rowIcons)).state,
        xF = wF.join(),
        PF = (0, Tk.useRef)(kk.onReady);
      PF.current = kk.onReady, (0, Tk.useEffect)((() => {
        var kk;
        null === (kk = PF.current) || void 0 === kk || kk.call(PF, Ak)
      }), [Ak]);
      const KF = (0, Tk.useRef)(kk.onMeasured);
      (0, Tk.useLayoutEffect)((() => {
        KF.current = kk.onMeasured
      })), (0, Tk.useEffect)((() => {
        var kk;
        const Fk = Nk ? {
          hotbar: BF(Nk, SF),
          cluster: iI(Nk, (0, XF.H)(Kk.width, Kk.height, Bk), SF)
        } : {};
        null === (kk = KF.current) || void 0 === kk || kk.call(KF, Wk, xF ? xF.split(",") : [], Fk)
      }), [Wk, xF, Nk, Kk, Bk]);
      const QF = kk => ({
        left: kk.left * Rk,
        top: kk.top * Rk,
        width: (kk.right - kk.left) * Rk,
        height: (kk.bottom - kk.top) * Rk
      });
      return (0, Qk.jsx)("div", {
        ref: zk,
        className: ak()("HudPreviewBox", {
          Fill: Jk
        }),
        style: {
          height: Kk.height * Rk
        },
        children: (0, Qk.jsxs)("div", {
          ref: Sk,
          className: "HudPreviewStage",
          style: {
            width: Kk.width * Rk,
            height: Kk.height * Rk
          },
          children: [(0, Qk.jsx)("iframe", {
            ref: vk,
            className: "HudPreviewFrame",
            title: Pk("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: Kk.width,
              height: Kk.height,
              transform: `scale(${Rk})`
            }
          }), Nk && (0, Mk.createPortal)((0, Qk.jsx)(VF, {
            presence: jk,
            portraitPhone: eF,
            hidden: tF,
            actionButtons: tk,
            joystickFixed: Zk,
            keysAbove: dk,
            auraBar: sk,
            trayState: JF,
            moved: HF
          }), Nk.body), (0, Qk.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...aF.handlers,
            children: [(0, Qk.jsx)("div", {
              ref: pk,
              className: "HudPreviewSafeZone",
              style: {
                top: Bk.top * Rk,
                right: Bk.right * Rk,
                bottom: Bk.bottom * Rk,
                left: Bk.left * Rk
              }
            }), fk.map(((kk, Fk) => {
              let {
                id: Ik,
                box: Xk
              } = kk;
              return (0, Qk.jsx)("div", {
                className: "HudPreviewHandle",
                style: QF((0, XF.s)(Xk, 40 / Rk))
              }, `${Ik}:${Fk}`)
            })), Vk.hudLocked.map((kk => {
              const Fk = Wk[kk];
              return Fk && (0, Qk.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: Fk.right * Rk,
                  top: Fk.top * Rk
                },
                children: (0, Qk.jsx)(Ok.e, {
                  name: "lock"
                })
              }, kk)
            })), (0, Qk.jsx)("div", {
              ref: Gk,
              className: "HudPreviewCentreLine",
              style: {
                left: Kk.width / 2 * Rk
              }
            }), yk && ZF && (0, Qk.jsx)("div", {
              ref: Ek,
              className: ak()("HudPreviewRing", {
                Fixed: !Lk(yk),
                Overlap: wF.length > 0
              }),
              style: QF(ZF),
              children: (0, Qk.jsx)("span", {
                className: ak()("HudPreviewRingLabel", tI(yk, jF, Wk, Rk, Kk)),
                children: jF
              })
            })]
          })]
        })
      })
    }

    function eI(kk, Fk) {
      (0, Tk.useEffect)((() => {
        var Ik;
        null === (Ik = kk.current) || void 0 === Ik || Ik.toggleAttribute("inert", Fk)
      }), [kk, Fk])
    }
    const wI = "hudFullScreen";

    function HI(kk) {
      let {
        onScale: Fk,
        onHidden: Ik,
        onReset: ik,
        locked: yk,
        lockable: lk,
        onLocked: ak,
        onClose: Lk,
        ...tk
      } = kk;
      const {
        t: Zk
      } = (0, Xk.y)(), jk = (0, Tk.useRef)(null);
      (0, kF.t)("popup", jk, Lk),
      function(kk) {
        const Fk = (0, Tk.useRef)(kk);
        Fk.current = kk, (0, Tk.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [wI]: !0
          }, "");
          let kk = !1;
          const Ik = () => {
            kk = !0, Fk.current()
          };
          return window.addEventListener("popstate", Ik), () => {
            var Fk;
            window.removeEventListener("popstate", Ik), !kk && null !== (Fk = window.history.state) && void 0 !== Fk && Fk[wI] && window.history.back()
          }
        }), [])
      }(Lk), (0, Tk.useEffect)((() => {
        function kk(kk) {
          "Escape" === kk.key && (kk.stopPropagation(), Lk())
        }
        return window.addEventListener("keydown", kk, !0), () => {
          window.removeEventListener("keydown", kk, !0)
        }
      }), [Lk]);
      const {
        selected: ek
      } = tk, wk = (0, Tk.useRef)(null), Hk = (0, Tk.useRef)(null), [Jk, xk] = (0, Tk.useState)(!1);
      eI(Hk, !Jk);
      const [Pk, Kk] = (0, Tk.useState)(null), [sk, Vk] = (0, Tk.useState)([]), [zk, Sk] = zF(), vk = (0, Tk.useRef)(tk.selected);
      vk.current = tk.selected;
      const Ek = (0, Tk.useRef)({}),
        Ok = (0, Tk.useCallback)((() => {
          const kk = wk.current;
          kk && Kk(function(kk, Fk, Ik) {
            var Xk;
            const {
              innerWidth: Tk,
              innerHeight: ik
            } = window, yk = kk.offsetWidth, lk = kk.offsetHeight, ak = Math.max(cF()[0], 6), qk = [];
            for (const Zk of [ak, .2 * ik, .5 * ik - lk / 2, .33 * ik])
              for (const kk of [.5, .3, .7]) qk.push({
                left: Math.max(0, Math.min(Tk - yk - 6, Math.max(6, Tk * kk - yk / 2))),
                top: Zk
              });
            const Lk = qk.map((kk => ({
                left: kk.left - 6,
                top: kk.top - 6,
                right: kk.left + yk + 6,
                bottom: kk.top + lk + 6
              }))),
              tk = XI(Fk, Ik);
            return qk[(0, XF.v)(Lk, tk, {
              avoid: Ik && null !== (Xk = Fk[Ik]) && void 0 !== Xk ? Xk : null
            })]
          }(kk, Ek.current, vk.current))
        }), []),
        nk = (0, Tk.useCallback)(((kk, Fk, Ik) => {
          Vk(Fk), Sk(Ik), Ek.current = kk, Ok()
        }), [Ok, Sk]);
      return (0, Tk.useLayoutEffect)(Ok, [tk.selected, Ok]), (0, Mk.createPortal)((0, Qk.jsxs)("div", {
        ref: jk,
        className: "HudFullScreenEditor",
        children: [(0, Qk.jsx)(jI, {
          ...tk,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: nk,
          onReady: xk,
          lockable: lk
        }), (0, Qk.jsxs)("div", {
          ref: wk,
          className: "HudFullScreenToolbar",
          style: null === Pk ? void 0 : {
            left: Pk.left,
            top: Pk.top,
            transform: "none"
          },
          children: [(0, Qk.jsx)("div", {
            ref: Hk,
            className: "HudFullScreenControls",
            children: (0, Qk.jsx)(oF, {
              selected: ek,
              layout: tk.layout.hudLayouts[tk.orientation],
              actionButtons: tk.actionButtons,
              keyNames: tk.keyNames,
              overlaps: sk,
              scaleCaps: zk,
              onScale: Fk,
              onHidden: Ik,
              onReset: ik,
              locked: yk,
              lockable: lk,
              onLocked: ak,
              joystickFixed: tk.joystickFixed
            })
          }), (0, Qk.jsx)(qk.d, {
            className: "HudFullScreenDone",
            onClick: Lk,
            padDefaultFocus: !0,
            children: Zk("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const JI = kk => `${Math.round(100*kk)}%`;

    function xI(kk) {
      let {
        info: Fk,
        tuple: Ik,
        props: Tk
      } = kk;
      const {
        t: ik
      } = (0, Xk.y)();
      return (0, Qk.jsx)(jk.j, {
        name: ik("hudLayout:size"),
        min: nk.o,
        max: nk.m,
        step: SF,
        initValue: Ik[2],
        disabled: Tk.locked.has(Fk.id),
        selectableMax: Tk.scaleCaps[Fk.id],
        cappedNote: ik("hudLayout:sizeCapped"),
        format: JI,
        onChange: kk => {
          Tk.onScalePreview(Fk.id, kk)
        },
        onChangeComplete: kk => {
          Tk.onScale(Fk.id, kk)
        }
      })
    }

    function PI(kk) {
      const {
        t: Fk
      } = (0, Xk.y)(), {
        present: Ik,
        elements: ik,
        selected: yk,
        onSelect: lk,
        onHidden: qk,
        onReset: Lk,
        note: tk,
        actionButtons: Zk,
        keyNames: jk,
        sizeBesidePreview: ek,
        locked: wk,
        lockable: Hk,
        onLocked: Jk
      } = kk, {
        rowIconsOpen: xk,
        onRowIconsOpen: Pk
      } = kk, Kk = (0, Tk.useRef)(null), sk = null !== yk && (xk || !(0, nk.N)(yk));
      return (0, Tk.useEffect)((() => {
        var kk;
        const Fk = yk ? null === (kk = Kk.current) || void 0 === kk ? void 0 : kk.querySelector(`[data-hud-row="${yk}"]`) : null;
        if (!Fk) return;
        const Ik = Fk.closest(".SettingsMenuRight"),
          Xk = performance.now();
        let Tk = null;
        const ik = () => {
            clearInterval(ak), null === Ik || void 0 === Ik || Ik.removeEventListener("scroll", lk)
          },
          lk = () => {
            DF() || ik()
          },
          ak = setInterval((() => {
            const kk = performance.now();
            kk - Xk > 1500 ? ik() : DF() ? Tk = null : null === Tk ? Tk = kk : kk - Tk >= 150 && (ik(), function(kk) {
              var Fk;
              const Ik = kk.closest(".SettingsMenuRight"),
                Xk = null === (Fk = kk.closest(".HudLayoutSettings")) || void 0 === Fk ? void 0 : Fk.querySelector(".HudLayoutPreviewBox");
              if (!Ik || !Xk) return;
              const Tk = Xk.getBoundingClientRect().bottom + 8,
                ik = Ik.getBoundingClientRect().bottom - 8,
                yk = kk.getBoundingClientRect();
              yk.top < Tk ? Ik.scrollBy({
                top: yk.top - Tk,
                behavior: "smooth"
              }) : yk.bottom > ik && Ik.scrollBy({
                top: Math.min(yk.bottom - ik, yk.top - Tk),
                behavior: "smooth"
              })
            }(Fk))
          }), 50);
        return null === Ik || void 0 === Ik || Ik.addEventListener("scroll", lk, {
          passive: !0
        }), ik
      }), [yk, sk]), (0, Qk.jsx)("div", {
        ref: Kk,
        className: "SettingBoxGroup HudElementList",
        children: Uk.filter((kk => Ik.has(kk.id) && (xk || !(0, nk.N)(kk.id)))).map((Ik => {
          const Xk = ((kk, Fk) => {
              var Ik;
              return null !== (Ik = kk[Fk]) && void 0 !== Ik ? Ik : nk.q
            })(ik, Ik.id),
            Tk = (0, nk.u)(ik, Ik.id),
            Kk = Ik.id === yk,
            sk = Ik.scale && !ek,
            Vk = tk(Ik.id, Kk);
          return (0, Qk.jsxs)("div", {
            "data-hud-row": Ik.id,
            className: ak()("SettingBox HudElementRow", {
              Open: Kk,
              Hidden: Tk,
              Child: void 0 !== Ik.parent
            }),
            children: [(0, Qk.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, Qk.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": sk ? Kk : void 0,
                onClick: () => {
                  lk(Ik.id)
                },
                children: [ck(Ik.id, Zk, Fk, jk), Ik.scale && 1 !== Xk[2] && !(Kk && sk) && (0, Qk.jsx)("span", {
                  className: "HudElementRowSize",
                  children: JI(Xk[2])
                }), sk && (0, Qk.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, Qk.jsx)(Yk, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Ik.id,
                actionButtons: Zk,
                keyNames: jk,
                locked: wk.has(Ik.id),
                lockable: Hk(Ik.id),
                onLocked: Jk
              }), "menu" === Ik.id && (0, Qk.jsx)(Ak, {
                className: "HudElementRowIcon",
                open: xk,
                name: ck(Ik.id, Zk, Fk, jk),
                onToggle: Pk
              }), "menu" !== Ik.id && (0, Qk.jsx)(Bk, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Ik.id,
                elements: ik,
                actionButtons: Zk,
                keyNames: jk,
                onHidden: qk
              }), (0, Qk.jsx)(dk, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: wk.has(Ik.id),
                id: Ik.id,
                elements: ik,
                actionButtons: Zk,
                keyNames: jk,
                onReset: Lk
              })]
            }), Kk && sk && (0, Qk.jsx)(xI, {
              info: Ik,
              tuple: Xk,
              props: kk
            }), Vk && (0, Qk.jsx)("div", {
              className: "HudElementNote",
              children: Vk
            })]
          }, Ik.id)
        }))
      })
    }

    function KI(kk) {
      let {
        preview: Fk,
        quick: Ik,
        onFullScreen: ik,
        resting: yk,
        onSidePanel: lk
      } = kk;
      const {
        t: ak
      } = (0, Xk.y)(), Lk = ZI(), tk = (0, Tk.useRef)(null), {
        width: Zk
      } = (0, IF.b)(tk), jk = Math.floor(Lk.width * Math.min(1, Fk.maxHeight / Lk.height)), ek = Zk - jk - 12, wk = ek >= 130, Hk = Zk > 0;
      (0, Tk.useEffect)((() => {
        Hk && lk(wk)
      }), [Hk, wk, lk]);
      const Jk = (0, XF.E)(wk ? jk : Zk, Lk.width, Lk.height, Fk.maxHeight),
        xk = yk ? (0, Qk.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: Lk.height * Jk
          }
        }) : (0, Qk.jsx)(jI, {
          ...Fk
        }),
        Pk = kk => (0, Qk.jsxs)(qk.Q, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: ak("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: ik,
          children: [(0, Qk.jsx)(Ok.e, {
            name: "expand"
          }), kk && (0, Qk.jsx)("span", {
            children: ak("hudLayout:fullScreen")
          })]
        });
      return (0, Qk.jsxs)("div", {
        ref: tk,
        className: "SettingBox HudLayoutPreviewBox",
        children: [Zk > 0 && wk && (0, Qk.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, Qk.jsx)("div", {
            style: {
              width: jk
            },
            children: xk
          }), (0, Qk.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, Qk.jsx)(oF, {
              selected: Fk.selected,
              ...Ik,
              joystickFixed: Fk.joystickFixed,
              extra: Pk(!Fk.selected || ek >= 278)
            })
          })]
        }), Zk > 0 && !wk && (0, Qk.jsxs)(Qk.Fragment, {
          children: [xk, (0, Qk.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: Pk(!1)
          })]
        })]
      })
    }
    var QI = Ik(2389),
      sI = Ik(4384),
      VI = Ik(2368),
      zI = Ik(2345);
    const SI = kk => {
      const Fk = iF.l * ("sides" === kk ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(Fk / 2))
    };

    function oI(kk, Fk, Ik) {
      const [Xk, Tk, ik, yk] = kk;
      return "sides" === Fk ? [Xk, Ik, ik, Ik] : [Ik, Tk, Ik, yk]
    }
    const vI = [null, null, null, null],
      EI = kk => `${kk}px`;

    function OI(kk) {
      let {
        safe: Fk,
        onPreview: Ik,
        onCommit: ik
      } = kk;
      const {
        t: yk
      } = (0, Xk.y)(), lk = (0, iF.t)(null !== Fk && void 0 !== Fk ? Fk : vI, window.innerWidth, window.innerHeight, WF(document).map(Math.round)), ak = (0, Tk.useRef)(null !== Fk && void 0 !== Fk ? Fk : vI);
      ak.current = null !== Fk && void 0 !== Fk ? Fk : vI;
      const Lk = kk => {
        const Fk = Math.min(SI(kk), "sides" === kk ? Math.max(lk[1], lk[3]) : Math.max(lk[0], lk[2]));
        return (0, Qk.jsx)(jk.j, {
          name: yk("sides" === kk ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: SI(kk),
          step: 2,
          initValue: Fk,
          format: EI,
          onChange: Fk => {
            Ik(oI(ak.current, kk, Fk))
          },
          onChangeComplete: Xk => {
            if (Xk === Fk) return void Ik(ak.current);
            const Tk = oI(ak.current, kk, Xk);
            ak.current = Tk, ik(Tk), (0, zk.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: kk
            })
          }
        })
      };
      return (0, Qk.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, Qk.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, Qk.jsx)("div", {
            children: yk("hudLayout:safeZone")
          }), (0, Qk.jsx)(qk.Q, {
            active: null === Fk,
            pressed: null === Fk,
            onClick: () => {
              ik(null)
            },
            children: yk("hudLayout:safeZoneAuto")
          })]
        }), Lk("sides"), Lk("ends")]
      })
    }

    function nI() {
      var kk, Fk;
      const {
        t: Ik
      } = (0, Xk.y)(), ik = (0, nk.fb)(), {
        clientEscMenuOptions: yk
      } = (0, Lk.j)(["clientEscMenuOptions"]), lk = (0, QI.d)(), ak = ik.hudLayouts[lk], [tk, Zk] = (0, Tk.useState)(null), {
        rowIconsOpen: ek,
        onRowIconsOpen: wk,
        select: Hk
      } = function(kk, Fk) {
        const [Ik, Xk] = (0, Tk.useState)((() => nk.A.some((Fk => void 0 !== kk.hudElements[Fk] || kk.hudLocked.includes(Fk))))), ik = (0, Tk.useCallback)((kk => {
          Fk(kk), (0, nk.N)(kk) && Xk(!0)
        }), [Fk]);
        return {
          rowIconsOpen: Ik,
          onRowIconsOpen: Xk,
          select: ik
        }
      }(ak, Zk), [Jk, xk] = (0, Tk.useState)([]), [Pk, Kk] = (0, Tk.useState)(null), [sk, Vk] = zF(), vk = (0, Tk.useCallback)(((kk, Fk, Ik) => {
        xk(Fk), Vk(Ik);
        const Xk = Object.keys(kk);
        Kk((kk => (null === kk || void 0 === kk ? void 0 : kk.size) === Xk.length && Xk.every((Fk => kk.has(Fk))) ? kk : new Set(Xk)))
      }), [Vk]), {
        gameState: Ek
      } = (0, Lk.j)(["gameState"]), Ok = (0, VI.i)(), Gk = null !== (kk = null === (Fk = (0, zI.m)()) || void 0 === Fk ? void 0 : Fk.icon) && void 0 !== kk ? kk : null, [pk] = (0, Tk.useState)((() => "inGame" === Ek ? function(kk, Fk, Ik) {
        const Xk = kk.querySelector(".InGameUi .TouchComponentsButtons");
        if (!Xk) return aF;
        const Tk = {},
          ik = {};
        for (const Lk of lF) {
          const kk = Xk.querySelector(`.TouchSlot${Lk} > .TouchKey`);
          if (kk) {
            var yk, lk;
            Tk[Lk] = kk.cloneNode(!0);
            const Fk = (null !== (yk = null === (lk = kk.querySelector(".TouchKeyLabel")) || void 0 === lk ? void 0 : lk.textContent) && void 0 !== yk ? yk : "").split(/\s+/).filter((kk => !/[\d\xd7]/.test(kk))).join(" ");
            Fk && (ik[Lk] = Fk)
          }
        }
        const ak = Fk => {
            const Ik = kk.querySelector(`.InGameUi ${Fk}`);
            return null !== Ik && !Ik.classList.contains("Hidden")
          },
          qk = [...kk.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((kk => kk.cloneNode(!0)));
        return {
          faces: Object.keys(Tk).length > 0 ? Tk : null,
          names: ik,
          shop: ak(".TouchInventoryKey.ShopKey"),
          bag: ak(".TouchInventoryKey.BagKey"),
          items: qk.length > 0 ? qk : null,
          rowIcons: Fk,
          pinnedIcon: Ik
        }
      }(document, Ok, Gk) : aF)), uk = (0, Tk.useRef)(null), bk = (0, Tk.useRef)(null), Rk = function(kk) {
        const [Fk, Ik] = (0, Tk.useState)((() => .4 * window.innerHeight));
        return (0, Tk.useLayoutEffect)((() => {
          var Fk;
          const Xk = null === (Fk = kk.current) || void 0 === Fk ? void 0 : Fk.closest(".SettingsMenuRight");
          if (!Xk) return;
          const Tk = () => {
            const kk = Xk.clientHeight < GI ? .4 : .5;
            Ik(Math.max(80, Xk.clientHeight * kk - 24))
          };
          Tk();
          const ik = new ResizeObserver(Tk);
          return ik.observe(Xk), () => {
            ik.disconnect()
          }
        }), [kk]), Fk
      }(bk), Nk = (0, sI.p)(yk.joystickMode), ck = yk.touchActionButtons, fk = (0, Tk.useMemo)((() => function(kk, Fk) {
        const Ik = {},
          Xk = [
            ["extra", "X"],
            ["game", "G"]
          ];
        Fk || Xk.push(["attack", "P"]);
        for (const [Tk, ik] of Xk) {
          const Fk = kk.names[ik];
          Fk && (Ik[Tk] = Fk)
        }
        return Ik
      }(pk, ck)), [pk, ck]);
      (0, Tk.useEffect)((() => {
        (0, zk.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [Bk, dk] = (0, Tk.useState)(!1), [Yk, Ak] = (0, Tk.useState)(!1), gk = (0, Tk.useRef)(null);
      eI(gk, !Yk);
      const [mk, hk] = (0, Tk.useState)(!1), Mk = (0, Tk.useCallback)((() => {
        hk(!1)
      }), []), kF = (0, Tk.useMemo)((() => new Set(ak.hudLocked)), [ak.hudLocked]), FF = kk => {
        var Fk, Ik;
        const Xk = (0, nk.s)(),
          Tk = kk(Xk);
        (0, nk.$)(null !== (Fk = null === (Ik = uk.current) || void 0 === Ik ? void 0 : Ik.keepLocks(Xk, Tk)) && void 0 !== Fk ? Fk : Tk)
      }, IF = (kk, Fk) => {
        FF((Ik => (0, nk.jb)(Ik, lk, kk, Fk)))
      }, XF = (kk, Fk, Ik) => {
        IF(kk, {
          dx: Fk,
          dy: Ik
        }), (0, zk.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${kk}`
        })
      }, iF = (kk, Fk) => {
        FF((Ik => (0, nk.mb)(Ik, lk, kk, Fk)))
      }, yF = kk => {
        const Fk = Ck[kk];
        return (Fk.move || Fk.scale) && ("joystick" !== kk || Nk) && !(0, TF.v)(kk, ak.hudElements[kk])
      }, qF = kk => Ck[kk].move && ("joystick" !== kk || Nk) && !kF.has(kk), LF = new Set(Uk.map((kk => kk.id)).filter((kk => {
        const Fk = (0, nk.N)(kk) && !pk.rowIcons.includes(kk);
        return null === Pk || Pk.has(kk) || (0, nk.u)(ak.hudElements, kk) && !Fk
      }))), tF = {
        present: LF,
        actionButtons: ck,
        keyNames: fk,
        scaleCaps: sk,
        sizeBesidePreview: Bk,
        elements: ak.hudElements,
        selected: tk,
        onSelect: Hk,
        rowIconsOpen: ek,
        onRowIconsOpen: wk,
        onScalePreview: (kk, Fk) => {
          var Ik;
          null === (Ik = uk.current) || void 0 === Ik || Ik.setScale(kk, Fk)
        },
        onScale: (kk, Fk) => {
          IF(kk, {
            scale: Fk
          }), (0, zk.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${kk}`
          })
        },
        onHidden: (kk, Fk) => {
          IF(kk, {
            hidden: Fk
          }), (0, zk.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${Fk?"hide":"show"}:${kk}`
          })
        },
        onReset: kk => {
          IF(kk, nk.e)
        },
        locked: kF,
        lockable: yF,
        onLocked: iF,
        note: (kk, Fk) => {
          const Xk = Fk && Jk.length > 0 ? Ik("hudLayout:overlapsNote", {
            names: Wk(Jk, ck, Ik, fk)
          }) : null;
          return Fk && rk(kk, Nk) ? (0, Qk.jsxs)(Qk.Fragment, {
            children: [Xk && (0, Qk.jsx)("span", {
              children: Xk
            }), (0, Qk.jsx)("span", {
              children: Ik("hudLayout:floatingJoystickNote")
            }), !Bk && (0, Qk.jsx)(Dk, {})]
          }) : Xk || (Fk && kF.has(kk) ? Ik("hudLayout:lockedNote") : Fk && "cluster" === kk ? Ik("hudLayout:clusterNote") : Fk && "menu" === kk ? Ik("hudLayout:menuNote") : Fk && (0, TF.v)(kk, ak.hudElements[kk]) && qF(kk) ? Ik("hudLayout:rowIconNote") : Fk && "arrows" === kk ? Ik("hudLayout:arrowsNote") : "inventory" === kk && (0, nk.u)(ak.hudElements, "inventory") ? Ik("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, Qk.jsxs)("div", {
        ref: bk,
        className: "HudLayoutSettings",
        children: [(0, Qk.jsxs)("div", {
          ref: gk,
          className: "HudLayoutBody",
          children: [(0, Qk.jsx)("div", {
            className: "HudLayoutOrientation",
            children: Ik("landscape" === lk ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, Qk.jsx)(KI, {
            preview: {
              layout: ik,
              orientation: lk,
              selected: tk,
              onSelect: Hk,
              onMove: XF,
              canMove: qF,
              actionButtons: ck,
              joystickFixed: Nk,
              presence: pk,
              keyNames: fk,
              maxHeight: Rk,
              apiRef: uk,
              onMeasured: vk,
              onReady: Ak,
              lockable: yF
            },
            quick: {
              layout: ak,
              actionButtons: ck,
              keyNames: fk,
              scaleCaps: sk,
              overlaps: Jk,
              onScale: tF.onScale,
              onHidden: tF.onHidden,
              onReset: tF.onReset,
              locked: kF,
              lockable: yF,
              onLocked: iF
            },
            onFullScreen: () => {
              hk(!0)
            },
            resting: mk,
            onSidePanel: dk
          }), mk && (0, Qk.jsx)(HI, {
            layout: ik,
            orientation: lk,
            selected: tk,
            onSelect: Hk,
            onMove: XF,
            canMove: qF,
            actionButtons: ck,
            joystickFixed: Nk,
            presence: pk,
            keyNames: fk,
            onScale: tF.onScale,
            onHidden: tF.onHidden,
            onReset: tF.onReset,
            locked: kF,
            lockable: yF,
            onLocked: iF,
            apiRef: uk,
            onClose: Mk
          }), (0, Qk.jsx)(OI, {
            safe: ak.hudSafe,
            onCommit: kk => {
              FF((Fk => (0, nk.pb)(Fk, lk, kk)))
            },
            onPreview: kk => {
              var Fk;
              null === (Fk = uk.current) || void 0 === Fk || Fk.setSafe(kk)
            }
          }), (0, Qk.jsx)(jk.e, {
            label: Ik("hudLayout:snapCentre"),
            checked: ik.hudSnapCentre,
            onClick: kk => {
              (0, nk.Y)(kk)
            },
            circleInfoText: Ik("hudLayout:snapCentreInfo")
          }), (0, Qk.jsx)(PI, {
            ...tF
          }), (0, Qk.jsx)(jk.h, {
            label: Ik("hudLayout:shape"),
            options: nk.E.map((kk => ({
              value: kk,
              label: Ik(`hudLayout:shape_${kk}`)
            }))),
            value: ik.hudShape,
            onChange: kk => {
              FF((Fk => ({
                ...Fk,
                hudShape: kk
              }))), (0, zk.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: kk
              })
            }
          }), (0, Qk.jsx)(jk.j, {
            name: Ik("hudLayout:opacity"),
            min: nk.i,
            max: 1,
            step: .05,
            initValue: ik.hudKeyOpacity,
            format: kk => `${Math.round(100*kk)}%`,
            circleInfoText: Ik("hudLayout:opacityInfo"),
            onChange: kk => {
              var Fk;
              null === (Fk = uk.current) || void 0 === Fk || Fk.setOpacity(kk)
            },
            onChangeComplete: kk => {
              (0, nk.U)(kk), (0, zk.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, Qk.jsx)(qk.G, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const kk = Sk.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await kk.getResult() && (0, nk.Q)()
            }()
          },
          children: Ik("hudLayout:resetAll")
        })]
      })
    }
    const GI = 350;
    const pI = [function() {
      const {
        t: kk
      } = (0, Xk.y)(), [Fk, Ik] = (0, Tk.useState)(!1), ik = (0, Tk.useRef)(null);
      return (0, Tk.useEffect)((() => {
        var kk;
        Fk && (null === (kk = ik.current) || void 0 === kk || kk.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [Fk]), (0, Qk.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, Qk.jsx)(vk.e, {
          ref: ik,
          icon: "arrows-up-down-left-right",
          title: kk("hudLayout:title"),
          sub: kk("hudLayout:entrySub"),
          expanded: Fk,
          onClick: () => {
            Ik(!Fk)
          }
        }), Fk && (0, Qk.jsx)(nI, {})]
      })
    }, function() {
      const {
        t: kk
      } = (0, Xk.y)(), {
        joystickMode: Fk,
        touchSpeedCurve: Ik,
        autorun: Tk,
        jumpLock: ik
      } = (0, Lk.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Qk.jsxs)(Qk.Fragment, {
        children: [(0, Qk.jsx)(jk.h, {
          label: kk("settingsMenu:joystick"),
          options: Kk.Gb.map((Fk => ({
            value: Fk,
            label: kk(sk[Fk])
          }))),
          value: Fk,
          onChange: kk => {
            Lk.d.setClientEscMenuOptions({
              joystickMode: kk
            })
          },
          circleInfoText: kk("settingsMenu:joystickInfo")
        }), (0, Qk.jsx)(jk.e, {
          label: kk("settingsMenu:preciseWalking"),
          checked: Ik,
          onClick: kk => {
            Lk.d.setClientEscMenuOptions({
              touchSpeedCurve: kk
            })
          },
          circleInfoText: kk("settingsMenu:preciseWalkingInfo")
        }), (0, Qk.jsx)(jk.e, {
          label: kk("settingsMenu:autoRun"),
          checked: Tk,
          onClick: kk => {
            Lk.d.setClientEscMenuOptions({
              autorun: kk
            })
          },
          circleInfoText: kk("settingsMenu:autoRunInfo")
        }), (0, Qk.jsx)(jk.e, {
          label: kk("settingsMenu:jumpLock"),
          checked: ik,
          onClick: kk => {
            Lk.d.setClientEscMenuOptions({
              jumpLock: kk
            })
          },
          circleInfoText: kk("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, Qk.jsx)(Pk.c, {})
    }, function() {
      const {
        t: kk
      } = (0, Xk.y)(), {
        clientEscMenuOptions: Fk
      } = (0, Lk.j)(["clientEscMenuOptions"]);
      return (0, Vk.e)() ? (0, Qk.jsx)(jk.e, {
        label: kk("settingsMenu:vibration"),
        checked: Fk.vibration,
        onClick: kk => {
          Lk.d.setClientEscMenuOptions({
            vibration: kk
          })
        },
        circleInfoText: kk("settingsMenu:vibrationInfo")
      }) : null
    }];

    function uI() {
      return (0, Qk.jsx)(Qk.Fragment, {
        children: pI.map(((kk, Fk) => (0, Qk.jsx)(kk, {}, Fk)))
      })
    }
    var bI = Ik(4343);

    function RI() {
      const {
        t: kk
      } = (0, Xk.y)(), {
        isTouchScreen: Fk,
        clientEscMenuOptions: Ik,
        gameState: yk
      } = (0, Lk.j)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), lk = (0, ek.j)("ezBridging"), ak = (0, ek.j)("ezTowering"), Hk = "inGame" !== yk || !0 === lk, Jk = (0, wk.d)() && ("inGame" !== yk || !0 === ak), [, Pk] = (0, Tk.useReducer)((kk => kk + 1), 0), Kk = (0, xk.e)(), [sk, Vk] = (0, Tk.useState)(bI.f);
      return (0, Qk.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Kk && (0, Qk.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, Qk.jsx)("div", {
            children: kk("controller:settingsControlsNote")
          }), (0, Qk.jsx)(qk.Q, {
            onClick: () => {
              Lk.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: kk("controller:settingsOpenController")
          })]
        }), (0, tk.isTouchscreen)() && !(0, tk.isMobile)() ? (0, Qk.jsx)(Qk.Fragment, {
          children: (0, Qk.jsx)(jk.e, {
            label: kk("settingsMenu:useTouchControls"),
            checked: sk,
            onClick: kk => {
              (0, bI.c)(kk), Vk(kk)
            }
          })
        }) : null, Fk && (0, Qk.jsx)(uI, {}), Hk && (0, Qk.jsx)(jk.e, {
          label: kk("settingsMenu:ezBridging"),
          checked: Ik.ezBridging,
          onClick: kk => {
            Lk.d.setClientEscMenuOptions({
              ezBridging: kk
            })
          },
          circleInfoText: kk("settingsMenu:ezBridgingInfo")
        }), Jk && (0, Qk.jsx)(jk.e, {
          label: kk("settingsMenu:ezTowering"),
          checked: Ik.ezTowering,
          onClick: kk => {
            Lk.d.setClientEscMenuOptions({
              ezTowering: kk
            })
          },
          circleInfoText: kk("settingsMenu:ezToweringInfo")
        }), (0, Qk.jsx)(jk.e, {
          label: kk("settingsMenu:crouchToggle"),
          checked: Ik.crouchIsToggle,
          onClick: kk => {
            Lk.d.setClientEscMenuOptions({
              crouchIsToggle: kk
            })
          },
          circleInfoText: kk("settingsMenu:crouchToggleInfo")
        }), (0, Qk.jsx)(jk.e, {
          label: kk("settingsMenu:hideUiToggle"),
          checked: Ik.hideUiIsToggle,
          onClick: kk => {
            Lk.d.setClientEscMenuOptions({
              hideUiIsToggle: kk
            })
          },
          circleInfoText: kk("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, Zk.e)() && (0, Qk.jsx)(jk.j, {
          name: kk("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: Ik.touchscreenSensitivity,
          onChange: kk => {
            Lk.d.setClientEscMenuOptions({
              touchscreenSensitivity: kk
            })
          }
        }), !(0, tk.isMobile)() && (0, Qk.jsx)(jk.j, {
          name: kk("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: Ik.mouseSensitivity,
          onChange: kk => {
            Lk.d.setClientEscMenuOptions({
              mouseSensitivity: kk
            })
          }
        }), !(0, tk.isMobile)() && (0, Qk.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Qk.jsx)("div", {
            className: "SliderText",
            children: kk("settingsMenu:keyBindings")
          }), ik.i.map((Fk => (0, Qk.jsx)(UI, {
            title: kk(Fk.name.translationKey, Fk.name.params),
            defaultOpen: ik.j.has(Fk.id),
            children: Fk.actions.map((kk => (0, Qk.jsx)(CI, {
              noaAction: kk,
              forceUpdate: Pk,
              clashesWith: Fk.clashesWith,
              showPadGlyph: Kk
            }, kk)))
          }, Fk.name.translationKey))), (0, Qk.jsx)(qk.G, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, ik.D)(), Pk()
            },
            children: kk("controls:resetBindings")
          })]
        })]
      })
    }

    function UI(kk) {
      let {
        title: Fk,
        defaultOpen: Ik,
        children: Xk
      } = kk;
      const [ik, yk] = (0, Tk.useState)(Ik);
      return (0, Qk.jsxs)("div", {
        className: ak()("ControlsSection", {
          Collapsed: !ik
        }),
        children: [(0, Qk.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            yk(!ik)
          },
          children: [(0, Qk.jsx)("div", {
            className: "ControlsSectionTitle",
            children: Fk
          }), (0, Qk.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), ik && (0, Qk.jsx)("div", {
          className: "ControlsSectionRows",
          children: Xk
        })]
      })
    }

    function CI(kk) {
      let {
        noaAction: Fk,
        forceUpdate: Ik,
        clashesWith: lk,
        showPadGlyph: Lk
      } = kk;
      const {
        t: tk
      } = (0, Xk.y)(), Zk = (0, Jk.b)(Fk), [jk, ek] = (0, Tk.useState)(!1), [wk, xk] = (0, Tk.useState)("controls:clickToEnterNewBinding"), [Pk, Kk] = (0, Tk.useState)(null), [sk, Vk] = (0, Tk.useState)(null), zk = (0, Tk.useRef)(null);
      (0, Tk.useEffect)((() => {
        jk && zk.current && zk.current.focus()
      }), [jk]);
      const Sk = ik.s[Fk].filter((kk => yk.k[kk]));
      let vk = null;
      const Ek = [],
        Ok = lk.flatMap((kk => {
          var Fk, Ik;
          return null !== (Fk = null === (Ik = ik.i.find((Fk => Fk.id === kk))) || void 0 === Ik ? void 0 : Ik.actions) && void 0 !== Fk ? Fk : []
        }));
      for (const Xk of Ok) {
        if (Xk === Fk) continue;
        const kk = ik.s[Xk];
        for (const Fk of kk) Sk.includes(Fk) && Ek.push(tk(ik.v[Xk].translationKey, ik.v[Xk].params))
      }
      Ek.length > 0 && (vk = tk("controls:sharedBindingsWarning") + " ", vk += Ek.join(", "));
      const nk = () => {
          ek(!1), Kk(null), xk("controls:clickToEnterNewBinding"), Vk(null)
        },
        Gk = () => "BindingInput_" + Fk;
      return (0, Qk.jsxs)("div", {
        className: ak()("ControlRow", {
          WarningBorder: null !== vk
        }),
        children: [(0, Qk.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Qk.jsxs)("div", {
            className: "ControlName",
            children: [tk(ik.v[Fk].translationKey, ik.v[Fk].params), Lk && Zk && (0, Qk.jsx)(Hk.e, {
              glyph: Zk,
              className: "ControlPadGlyph"
            })]
          }), (0, Qk.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Qk.jsxs)("div", {
              className: "ControlBindingsList",
              children: [Sk.map((kk => (0, Qk.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Qk.jsx)("div", {
                  children: (0, ik.n)(kk)
                }), (0, Qk.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Xk = (0, ik.w)(Fk, kk);
                    Xk.isError() ? Vk(Xk.asError().message) : Vk(null), Ik()
                  },
                  children: "\xd7"
                })]
              }, kk))), !jk && (0, Qk.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  ek(!0), Vk(null)
                },
                children: (0, Qk.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), jk && (0, Qk.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Qk.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Qk.jsx)("div", {
                  className: "InputOverlay",
                  children: Pk ? (0, ik.n)(Pk) : (0, Qk.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: tk(wk)
                  })
                }), (0, Qk.jsx)("input", {
                  ref: zk,
                  id: Gk(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: kk => {
                    if ("Escape" === kk.code) return nk(), kk.preventDefault(), void kk.stopPropagation();
                    const Fk = kk.code;
                    yk.d.includes(Fk) ? (Vk(null), Kk(Fk)) : (Vk("controls:keyIsReserved"), Kk(null)), kk.preventDefault(), kk.stopPropagation()
                  },
                  onMouseDown: kk => {
                    const Fk = "Mouse" + (kk.button + 1);
                    document.activeElement && document.activeElement.id === Gk() ? yk.d.includes(Fk) ? (Vk(null), Kk(Fk)) : (Vk("controls:keyIsReserved"), Kk(null)) : xk("controls:enterNewBinding"), kk.stopPropagation()
                  },
                  onBlur: () => {
                    xk("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Qk.jsx)(qk.d, {
                onPointerDown: kk => {
                  kk.preventDefault()
                },
                onClick: () => {
                  (0, ik.e)(Fk, Pk), Ik(), nk()
                },
                className: "ControlBindingAddButton",
                disabled: null === Pk,
                children: tk("general:add")
              }), (0, Qk.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  nk()
                },
                children: "\xd7"
              })]
            }), sk && (0, Qk.jsx)("div", {
              className: "ControlBindingError",
              children: tk(sk)
            })]
          })]
        }), vk && (0, Qk.jsx)("div", {
          className: "ControlRowWarning",
          children: vk
        })]
      })
    }
  },
  8865: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    var Xk = Ik(58),
      Tk = Ik(1066),
      ik = Ik(1096);
    const yk = (0, Xk.forwardRef)((function(kk, Fk) {
      let {
        icon: Ik,
        title: Xk,
        sub: yk,
        expanded: lk,
        onClick: ak
      } = kk;
      return (0, ik.jsxs)("button", {
        ref: Fk,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": lk,
        onClick: ak,
        children: [(0, ik.jsx)(Tk.e, {
          name: Ik,
          className: "FeaturedSettingsEntryIcon"
        }), (0, ik.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, ik.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: Xk
          }), (0, ik.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: yk
          })]
        }), (0, ik.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  8871: (kk, Fk, Ik) => {
    function Xk(kk) {
      return {
        x: (kk.left + kk.right) / 2,
        y: (kk.top + kk.bottom) / 2
      }
    }

    function Tk(kk) {
      return 0 === kk.length ? null : kk.reduce(((kk, Fk) => ({
        left: Math.min(kk.left, Fk.left),
        top: Math.min(kk.top, Fk.top),
        right: Math.max(kk.right, Fk.right),
        bottom: Math.max(kk.bottom, Fk.bottom)
      })))
    }

    function ik(kk, Fk) {
      const Ik = Math.max(0, (Fk - (kk.right - kk.left)) / 2),
        Xk = Math.max(0, (Fk - (kk.bottom - kk.top)) / 2);
      return {
        left: kk.left - Ik,
        top: kk.top - Xk,
        right: kk.right + Ik,
        bottom: kk.bottom + Xk
      }
    }

    function yk(kk, Fk) {
      return Fk.x >= kk.left && Fk.x <= kk.right && Fk.y >= kk.top && Fk.y <= kk.bottom
    }

    function lk(kk, Fk, Ik) {
      let Tk = null,
        lk = 1 / 0;
      for (const {
          id: Xk,
          box: ik
        }
        of Fk) {
        const Fk = (ik.right - ik.left) * (ik.bottom - ik.top);
        yk(ik, kk) && Fk < lk && (lk = Fk, Tk = Xk)
      }
      if (null !== Tk) return Tk;
      let ak = 1 / 0;
      for (const {
          id: qk,
          box: Lk
        }
        of Fk) {
        if (!yk(ik(Lk, Ik), kk)) continue;
        const Fk = Xk(Lk),
          lk = Math.hypot(kk.x - Fk.x, kk.y - Fk.y);
        lk < ak && (ak = lk, Tk = qk)
      }
      return Tk
    }

    function ak(kk, Fk, Ik) {
      return {
        left: Ik.left,
        top: Ik.top,
        right: kk - Ik.right,
        bottom: Fk - Ik.bottom
      }
    }

    function qk(kk, Fk, Ik, Xk) {
      const Tk = (kk, Fk, Ik) => Math.max(Math.min(Fk, 0), Math.min(Math.max(Ik, 0), kk));
      return {
        x: Tk(Fk, Xk.left - kk.left, Xk.right - kk.right),
        y: Tk(Ik, Xk.top - kk.top, Xk.bottom - kk.bottom)
      }
    }

    function Lk(kk, Fk, Ik, Xk, Tk) {
      const ik = kk.dx * Xk + Fk,
        yk = kk.dy * Tk + Ik,
        lk = kk => Math.max(-1, Math.min(1, kk));
      return {
        dx: lk(ik / Xk),
        dy: lk(yk / Tk)
      }
    }

    function tk(kk, Fk, Ik, Xk) {
      return Fk <= 0 || Ik <= 0 ? 1 : Math.max(.05, Math.min(1, kk / Fk, Xk / Ik))
    }

    function Zk(kk, Fk, Ik) {
      return Math.min(kk.right, Fk.right) - Math.max(kk.left, Fk.left) > Ik && Math.min(kk.bottom, Fk.bottom) - Math.max(kk.top, Fk.top) > Ik
    }

    function jk(kk, Fk) {
      const Ik = (kk, Fk, Ik, Xk) => Fk - kk > Xk - Ik ? Ik - kk > Fk - Xk ? Xk - Fk : Ik - kk : kk < Ik ? Ik - kk : Fk > Xk ? Xk - Fk : 0;
      return {
        x: Ik(kk.left, kk.right, Fk.left, Fk.right),
        y: Ik(kk.top, kk.bottom, Fk.top, Fk.bottom)
      }
    }

    function ek(kk, Fk) {
      let {
        avoid: Ik = null,
        bounds: Xk = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Tk = 0, ik = 1 / 0;
      return kk.forEach(((kk, yk) => {
        const lk = Fk.filter((Fk => Zk(kk, Fk, 0))).length,
          ak = null !== Xk && (kk.left < Xk.left || kk.top < Xk.top || kk.right > Xk.right || kk.bottom > Xk.bottom),
          qk = lk + (Ik && Zk(kk, Ik, 0) ? 1e3 : 0) + (ak ? 1e6 : 0);
        qk < ik && (Tk = yk, ik = qk)
      })), Tk
    }
    Ik.d(Fk, {
      B: () => lk,
      E: () => tk,
      H: () => ak,
      L: () => jk,
      M: () => Tk,
      e: () => Xk,
      i: () => yk,
      l: () => Zk,
      o: () => qk,
      s: () => ik,
      v: () => ek,
      z: () => Lk
    })
  },
  8645: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk,
      d: () => Xk
    });
    const Xk = "controllerOpenKeyboard",
      Tk = "controllerKeyboardVisible"
  },
  8652: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Jk,
      f: () => Hk,
      j: () => Lk,
      n: () => xk,
      r: () => Pk,
      s: () => Zk
    });
    var Xk = Ik(1604),
      Tk = Ik(1668);
    const ik = kk => kk >= 56320 && kk <= 57343,
      yk = kk => kk >= 55296 && kk <= 56319,
      lk = (kk, Fk) => Fk >= 2 && ik(kk.charCodeAt(Fk - 1)) && yk(kk.charCodeAt(Fk - 2)) ? Fk - 2 : Math.max(0, Fk - 1),
      ak = (kk, Fk) => {
        let Ik;
        var Xk, Tk;
        return Ik = kk.start !== kk.end ? Fk < 0 ? kk.start : kk.end : Fk < 0 ? lk(kk.value, kk.start) : (Xk = kk.value, (Tk = kk.start) + 1 < Xk.length && yk(Xk.charCodeAt(Tk)) && ik(Xk.charCodeAt(Tk + 1)) ? Tk + 2 : Math.min(Xk.length, Tk + 1)), {
          value: kk.value,
          start: Ik,
          end: Ik
        }
      },
      qk = ["text", "search", "url", "email", "tel", "password", "number"],
      Lk = kk => !(!(0, Tk.b)(kk) || kk.isContentEditable || kk.hasAttribute("data-pad-no-osk")) && (kk instanceof HTMLTextAreaElement || kk instanceof HTMLInputElement && qk.includes(kk.type)),
      tk = kk => null !== kk.selectionStart,
      Zk = kk => {
        var Fk, Ik;
        const {
          value: Xk
        } = kk;
        return {
          value: Xk,
          start: null !== (Fk = kk.selectionStart) && void 0 !== Fk ? Fk : Xk.length,
          end: null !== (Ik = kk.selectionEnd) && void 0 !== Ik ? Ik : Xk.length
        }
      },
      jk = (kk, Fk, Ik) => {
        if (kk.readOnly) return;
        const Tk = kk instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Tk, "value").set.call(kk, Fk.value), tk(kk) && kk.setSelectionRange(Fk.start, Fk.end), (0, Xk.e)(kk, new InputEvent("input", {
          bubbles: !0,
          inputType: Ik
        }))
      };
    let ek = !1;
    const wk = (kk, Fk) => !!document.execCommand(kk, !1, Fk) || (ek || (ek = !0, console.warn(`execCommand("${kk}") failed; the on-screen keyboard is setting the value directly`)), !1),
      Hk = (kk, Fk) => {
        wk("insertText", Fk) || jk(kk, function(kk, Fk) {
          let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Xk = kk.value.slice(0, kk.start),
            Tk = kk.value.slice(kk.end);
          let ik = Ik < 0 ? Fk.length : Math.max(0, Ik - Xk.length - Tk.length);
          ik > 0 && ik < Fk.length && yk(Fk.charCodeAt(ik - 1)) && ik--;
          const lk = Fk.slice(0, ik),
            ak = Xk.length + lk.length;
          return {
            value: Xk + lk + Tk,
            start: ak,
            end: ak
          }
        }(Zk(kk), Fk, kk.maxLength), "insertText")
      },
      Jk = kk => {
        wk("delete") || jk(kk, (kk => {
          const Fk = kk.start === kk.end ? lk(kk.value, kk.start) : kk.start;
          return {
            value: kk.value.slice(0, Fk) + kk.value.slice(kk.end),
            start: Fk,
            end: Fk
          }
        })(Zk(kk)), "deleteContentBackward")
      },
      xk = (kk, Fk) => {
        if (!tk(kk)) return;
        const Ik = ak(Zk(kk), Fk);
        kk.setSelectionRange(Ik.start, Ik.end)
      },
      Pk = kk => {
        tk(kk) && 0 === kk.selectionStart && 0 === kk.selectionEnd && kk.setSelectionRange(kk.value.length, kk.value.length)
      }
  },
  8822: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk
    });
    var Xk = Ik(25),
      Tk = Ik(2056),
      ik = Ik(1324),
      yk = Ik(1364);
    const lk = async () => {
      if ((0, yk.f)()) {
        if (!0 !== await ik.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Xk.d.get("gameState")) return
      }(0, Tk.c)()
    }
  },
  8825: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ak,
      d: () => ik,
      g: () => yk,
      h: () => Tk,
      l: () => lk
    });
    var Xk = Ik(1902);
    const Tk = "controllerPadShopOpen",
      ik = kk => Xk.j.includes(kk),
      yk = kk => Object.values(kk).some((kk => !1 !== kk.canBuy && !kk.isRewardedAd)),
      lk = (kk, Fk, Ik) => {
        var Xk, Tk, yk, lk;
        const ak = kk.filter((kk => !ik(kk))),
          qk = null !== Fk && kk.includes(Fk) ? Fk : null;
        return null !== qk && !ik(qk) && Ik(qk) ? qk : null !== (Xk = null !== (Tk = null !== (yk = null !== (lk = ak.find(Ik)) && void 0 !== lk ? lk : ak[0]) && void 0 !== yk ? yk : qk) && void 0 !== Tk ? Tk : kk[0]) && void 0 !== Xk ? Xk : null
      },
      ak = kk => kk.userInput || kk.isRewardedAd || "boolean" === typeof kk.isSelected ? null : JSON.stringify([kk.image, kk.cost, kk.currency, kk.amount, kk.customTitle, kk.buyButtonText, kk.description, kk.canBuy])
  },
  8851: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk,
      e: () => Lk
    });
    var Xk = Ik(58),
      Tk = Ik(1402),
      ik = Ik(1939),
      yk = Ik(1375),
      lk = Ik(1392),
      ak = Ik(1096);
    const qk = () => {
        const kk = (0, yk.v)();
        if ((0, Xk.useEffect)((() => {
            (0, yk.l)()
          }), []), !kk) return null;
        const {
          ControllerCategory: Fk
        } = kk;
        return (0, ak.jsx)(lk.d, {
          children: (0, ak.jsx)(Fk, {})
        })
      },
      Lk = () => {
        var kk;
        const Fk = (0, yk.v)(),
          [, Ik] = (0, Xk.useReducer)((kk => kk + 1), 0);
        return (0, Tk.d)(ik.e, Ik), null !== (kk = null === Fk || void 0 === Fk ? void 0 : Fk.hasActivePad()) && void 0 !== kk && kk
      }
  },
  8658: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      d: () => qk,
      g: () => wk,
      h: () => tk,
      l: () => ek,
      n: () => ik,
      o: () => jk,
      p: () => yk,
      q: () => Zk
    });
    const Xk = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      Tk = (kk, Fk) => {
        if ("function" === typeof kk.checkVisibility) return !kk.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: Fk,
          checkOpacity: Fk
        });
        const {
          visibility: Ik
        } = getComputedStyle(kk);
        if ("hidden" === Ik || "collapse" === Ik) return !0;
        if (!Fk) return !1;
        for (let Xk = kk; Xk; Xk = Xk.parentElement)
          if ("0" === getComputedStyle(Xk).opacity) return !0;
        return !1
      },
      ik = kk => {
        if (!kk.isConnected || Tk(kk, !0)) return !1;
        const Fk = kk.getBoundingClientRect();
        return Fk.width > 0 && Fk.height > 0
      },
      yk = kk => !!kk.matches(":disabled, [aria-disabled='true']") || "button" === kk.getAttribute("role") && "-1" === kk.getAttribute("tabindex"),
      lk = kk => {
        var Fk;
        if (kk.closest("[data-pad-ignore]")) return !0;
        return !!(null === (Fk = kk.parentElement) || void 0 === Fk ? void 0 : Fk.closest("[data-pad-focusable]"))
      },
      ak = kk => {
        const Fk = kk.querySelectorAll(Xk);
        return kk.matches(Xk) ? [kk, ...Fk] : Fk
      },
      qk = kk => {
        const Fk = [];
        for (const Ik of ak(kk)) !lk(Ik) && ik(Ik) && Fk.push(Ik);
        return Fk
      },
      Lk = new WeakMap,
      tk = kk => {
        const Fk = Lk.get(kk);
        if (Fk && Zk(Fk, kk)) return !0;
        for (const Ik of ak(kk))
          if (!lk(Ik) && ik(Ik)) return Lk.set(kk, Ik), !0;
        return Lk.delete(kk), !1
      },
      Zk = (kk, Fk) => Fk.contains(kk) && kk.matches(Xk) && !lk(kk) && ik(kk),
      jk = (kk, Fk) => Zk(kk, Fk) && !yk(kk),
      ek = kk => {
        for (const Fk of kk.querySelectorAll("[data-pad-initial-area]"))
          if (!Tk(Fk, !1)) return !0;
        return !1
      },
      wk = kk => {
        const Fk = Fk => {
          let Ik = 0;
          for (let Xk = Fk.parentElement; Xk && Xk !== kk; Xk = Xk.parentElement) Ik++;
          return Ik
        };
        return [...kk.querySelectorAll("[data-pad-initial-area]")].filter(ik).sort(((kk, Ik) => Fk(Ik) - Fk(kk)))
      }
  },
  8637: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      B: () => qk,
      D: () => vk,
      H: () => sk,
      J: () => Vk,
      K: () => Hk,
      O: () => ak,
      R: () => Lk,
      e: () => Jk,
      g: () => Sk,
      j: () => Qk,
      k: () => Kk,
      l: () => ek,
      p: () => wk,
      s: () => Zk,
      v: () => jk,
      z: () => zk
    });
    var Xk = Ik(34),
      Tk = Ik(1604),
      ik = Ik(8645),
      yk = Ik(8652),
      lk = Ik(8658);
    const ak = kk => (0, yk.j)(kk),
      qk = kk => {
        const Fk = kk.getBoundingClientRect();
        return {
          x: Fk.left + Fk.width / 2,
          y: Fk.top + Fk.height / 2
        }
      },
      Lk = (kk, Fk, Ik) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: kk.x,
        clientY: kk.y,
        screenX: kk.x,
        screenY: kk.y,
        button: Fk,
        buttons: Ik,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      tk = (kk, Fk) => {
        (0, Tk.e)(kk, Fk)
      },
      Zk = function(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Xk = 0 === Ik ? 1 : 2;
        tk(kk, new PointerEvent("pointerdown", Lk(Fk, Ik, Xk))), tk(kk, new MouseEvent("mousedown", Lk(Fk, Ik, Xk)))
      },
      jk = function(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        tk(kk, new PointerEvent("pointerup", Lk(Fk, Ik, 0))), tk(kk, new MouseEvent("mouseup", Lk(Fk, Ik, 0)))
      },
      ek = function(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Zk(kk, Fk, Ik), jk(kk, Fk, Ik), tk(kk, 0 === Ik ? new MouseEvent("click", Lk(Fk, 0, 0)) : new MouseEvent("contextmenu", Lk(Fk, 2, 0)))
      },
      wk = function(kk, Fk, Ik) {
        let {
          leaveBelow: Xk = null,
          enterBelow: Tk = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (kk !== Fk) {
          if (null !== kk && void 0 !== kk && kk.isConnected) {
            const Tk = {
              ...Lk(Ik, 0, 0),
              relatedTarget: Fk
            };
            tk(kk, new PointerEvent("pointerout", Tk)), tk(kk, new MouseEvent("mouseout", Tk));
            const ik = kk => !!Fk && kk.contains(Fk) || !!Xk && kk.contains(Xk);
            for (let Fk = kk; Fk && !ik(Fk); Fk = Fk.parentElement) tk(Fk, new PointerEvent("pointerleave", {
              ...Tk,
              bubbles: !1
            })), tk(Fk, new MouseEvent("mouseleave", {
              ...Tk,
              bubbles: !1
            }))
          }
          if (Fk) {
            const Xk = {
              ...Lk(Ik, 0, 0),
              relatedTarget: kk
            };
            tk(Fk, new PointerEvent("pointerover", Xk)), tk(Fk, new MouseEvent("mouseover", Xk));
            const ik = [],
              yk = Fk => !(null === kk || void 0 === kk || !kk.isConnected) && Fk.contains(kk) || !!Tk && Fk.contains(Tk);
            for (let kk = Fk; kk && !yk(kk); kk = kk.parentElement) ik.push(kk);
            for (const kk of ik.reverse()) tk(kk, new PointerEvent("pointerenter", {
              ...Xk,
              bubbles: !1
            })), tk(kk, new MouseEvent("mouseenter", {
              ...Xk,
              bubbles: !1
            }));
            tk(Fk, new PointerEvent("pointermove", Lk(Ik, 0, 0))), tk(Fk, new MouseEvent("mousemove", Lk(Ik, 0, 0)))
          }
        } else Fk && (tk(Fk, new PointerEvent("pointermove", Lk(Ik, 0, 0))), tk(Fk, new MouseEvent("mousemove", Lk(Ik, 0, 0))))
      },
      Hk = kk => {
        Xk.g.GL(ik.d, kk)
      },
      Jk = kk => {
        if (ak(kk)) return void Hk(kk);
        const Fk = kk.hasAttribute("data-pad-focusable") ? kk.querySelector("a[href]") : null,
          Ik = null !== Fk && void 0 !== Fk ? Fk : kk;
        ek(Ik, qk(Ik))
      },
      xk = ".Dropdown-root.is-open",
      Pk = kk => {
        const Fk = kk.querySelector(".Dropdown-control");
        return Jk(Fk), Fk
      },
      Kk = kk => {
        var Fk;
        const Ik = null !== (Fk = kk.closest(xk)) && void 0 !== Fk ? Fk : kk.querySelector(xk);
        return Ik ? Pk(Ik) : null
      },
      Qk = kk => {
        for (const Fk of document.querySelectorAll(xk)) Fk.contains(kk) || Pk(Fk)
      },
      sk = kk => null !== kk.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      Vk = kk => {
        const Fk = kk ? document.elementFromPoint(kk.x, kk.y) : null;
        return !(null === Fk || void 0 === Fk || !Fk.closest("[data-pad-repeat]"))
      },
      zk = kk => {
        var Fk;
        return null !== (Fk = [...kk.querySelectorAll("[data-pad-back]")].find(lk.n)) && void 0 !== Fk ? Fk : null
      },
      Sk = kk => {
        const Fk = zk(kk);
        return !!Fk && (Jk(Fk), !0)
      },
      vk = kk => {
        var Fk, Ik, Xk, Tk;
        return null !== (Fk = null !== (Ik = null !== (Xk = kk.getAttribute("data-pad-key")) && void 0 !== Xk ? Xk : kk.getAttribute("href")) && void 0 !== Ik ? Ik : null === (Tk = kk.querySelector("a[href]")) || void 0 === Tk ? void 0 : Tk.getAttribute("href")) && void 0 !== Fk ? Fk : null
      }
  },
  8862: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      h: () => ak
    });
    var Xk = Ik(25),
      Tk = Ik(1301),
      ik = Ik(95);
    const yk = {
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

    function lk() {
      return (0, ik.isMobile)() && "function" === typeof navigator.vibrate
    }
    const ak = new class {
      constructor(kk) {
        this.deps = kk, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(kk, Fk) {
        var Ik;
        if (!this.deps.enabled()) return;
        const Xk = yk[kk],
          Tk = null !== Fk && void 0 !== Fk ? Fk : Xk.pattern;
        if (null === Tk) return void console.warn("No vibration pattern for", kk);
        const ik = this.deps.now();
        ik - this.lastAnyAt < 40 && Xk.priority < this.playingPriority || ik - (null !== (Ik = this.lastAt.get(kk)) && void 0 !== Ik ? Ik : -1 / 0) < Xk.minGapMs || ik < this.playingUntil && Xk.priority < this.playingPriority || (this.lastAt.set(kk, ik), this.lastAnyAt = ik, this.playingUntil = ik + Tk.reduce(((kk, Fk) => kk + Fk), 0), this.playingPriority = Xk.priority, this.deps.vibrate(Tk))
      }
    }({
      vibrate: kk => {
        navigator.vibrate([...kk])
      },
      now: () => performance.now(),
      enabled: () => lk() && Xk.d.get("isTouchScreen") && Xk.d.get("clientEscMenuOptions").vibration && !(0, Tk.h)()
    })
  },
  8752: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      return !kk.hidden && (Fk || !kk.isRewardedAd)
    }

    function Tk(kk) {
      return "object" === typeof kk ? kk.option : kk
    }

    function ik(kk, Fk) {
      var Ik;
      if ("dropdown" === (null === (Ik = kk.userInput) || void 0 === Ik ? void 0 : Ik.type) && "object" === typeof kk.userInput.dropdownOptions[0]) {
        for (const Ik of kk.userInput.dropdownOptions)
          if (Tk(Ik) === Fk) return "object" === typeof Ik ? Ik.cost : kk.cost;
        console.error("Didn't find matching option for dropdown item. Item:", kk, "input:", Fk)
      }
      return kk.cost
    }

    function yk(kk, Fk, Ik) {
      var Xk;
      const Tk = null !== (Xk = Ik.excludedPlayers) && void 0 !== Xk ? Xk : [Fk];
      return kk.filter((kk => !Tk.includes(kk)))
    }
    Ik.d(Fk, {
      b: () => ik,
      e: () => Tk,
      f: () => yk,
      j: () => Xk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);