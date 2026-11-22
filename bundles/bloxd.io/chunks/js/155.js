export const id = 155;
export const ids = [155];
export const modules = {
  8700: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => rk
    });
    var Dk = ik(22),
      fk = ik(1172),
      Sk = ik(4926),
      bk = ik(1066);

    function rk(kk) {
      let {
        note: ek
      } = kk;
      const {
        t: ik
      } = (0, fk.D)(), {
        clientEscMenuOptions: rk
      } = (0, Dk.n)(["clientEscMenuOptions"]);
      return (0, bk.jsx)(Sk.e, {
        label: ik("touchSettings:actionButtons"),
        checked: rk.touchActionButtons,
        onClick: kk => {
          Dk.b.setClientEscMenuOptions({
            touchActionButtons: kk
          })
        },
        circleInfoText: ik("touchSettings:actionButtonsInfo"),
        note: ek
      })
    }
  },
  8694: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => ai,
      d: () => Ei
    });
    var Dk = ik(1172),
      fk = ik(60),
      Sk = ik(1931),
      bk = ik(1946),
      rk = ik(1021),
      Pk = ik.n(rk),
      mk = ik(1410),
      Mk = ik(22),
      Kk = ik(99),
      xk = ik(111),
      nk = ik(4926),
      Uk = ik(2414),
      Hk = ik(284),
      wk = ik(1954),
      lk = ik(1960),
      pk = ik(8696),
      yk = ik(8700),
      Yk = ik(302),
      Lk = ik(1066);
    const Ck = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Ak = ik(8708);
    var jk = ik(1432),
      sk = ik(1333),
      dk = ik(1033),
      Vk = ik(1375),
      Fk = ik(2447);
    const uk = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(Fk.B.map((kk => [kk, "menu"])))
      },
      qk = kk => Fk.u.filter((ek => uk[ek] === kk)),
      Ik = new Set(qk("cluster")),
      zk = ["cluster"],
      Qk = [...zk, ...Fk.u.filter((kk => !zk.includes(kk) && !uk[kk]))],
      vk = Qk.flatMap((kk => [kk, ...qk(kk)])).map((kk => ({
        id: kk,
        label: `hudLayout:${kk}`,
        ...Fk.r[kk],
        parent: uk[kk]
      }))),
      Ek = Object.fromEntries(vk.map((kk => [kk.id, kk]))),
      hk = "data-hud-el";

    function ak(kk, ek, ik, Dk) {
      const fk = ik(function(kk, ek) {
          return "attack" !== kk || ek ? Ek[kk].label : "hudLayout:attackContext"
        }(kk, ek)),
        Sk = Dk[kk];
      return Sk ? ik("hudLayout:slotWithKey", {
        slot: fk,
        key: Sk
      }) : fk
    }

    function Wk(kk, ek, ik, Dk) {
      return kk.map((kk => ak(kk, ek, ik, Dk))).join(", ")
    }

    function tk(kk) {
      let {
        className: ek,
        keepPlace: ik
      } = kk;
      return ik ? (0, Lk.jsx)("div", {
        className: Pk()(ek, "Placeholder")
      }) : null
    }

    function Xk(kk) {
      let {
        id: ek,
        elements: ik,
        actionButtons: fk,
        keyNames: Sk,
        className: bk,
        keepPlace: rk,
        onHidden: Pk
      } = kk;
      const {
        t: Mk
      } = (0, Dk.D)();
      if (!Ek[ek].hide) return (0, Lk.jsx)(tk, {
        className: bk,
        keepPlace: rk
      });
      const Kk = (0, Fk.q)(ik, ek);
      return (0, Lk.jsx)(mk.X, {
        className: bk,
        ariaLabel: Mk(Kk ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: ak(ek, fk, Mk, Sk)
        }),
        pressed: !Kk,
        onClick: () => {
          Pk(ek, !Kk)
        },
        children: (0, Lk.jsx)(dk.d, {
          name: Kk ? "eye-slash" : "eye"
        })
      })
    }

    function Bk(kk) {
      var ek;
      let {
        id: ik,
        elements: fk,
        actionButtons: Sk,
        keyNames: bk,
        className: rk,
        keepPlace: Pk,
        onlyWhenMoved: Mk,
        locked: Kk,
        onReset: xk
      } = kk;
      const {
        t: nk
      } = (0, Dk.D)(), Uk = Ek[ik], Hk = (0, Fk.K)(null !== (ek = fk[ik]) && void 0 !== ek ? ek : Fk.m);
      return !Uk.move && !Uk.scale || Mk && Hk ? (0, Lk.jsx)(tk, {
        className: rk,
        keepPlace: Pk
      }) : (0, Lk.jsx)(mk.X, {
        className: rk,
        disabled: Hk || Kk,
        ariaLabel: nk("hudLayout:resetElement", {
          name: ak(ik, Sk, nk, bk)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: ik
        },
        onClick: kk => {
          Mk && Ok(kk.currentTarget), xk(ik)
        },
        children: (0, Lk.jsx)(dk.d, {
          name: "rotate-left"
        })
      })
    }

    function ck(kk) {
      let {
        id: ek,
        actionButtons: ik,
        keyNames: fk,
        className: Sk,
        keepPlace: bk,
        locked: rk,
        lockable: Pk,
        onLocked: Mk
      } = kk;
      const {
        t: Kk
      } = (0, Dk.D)();
      return Pk || rk ? (0, Lk.jsx)(mk.X, {
        className: Sk,
        ariaLabel: Kk(rk ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: ak(ek, ik, Kk, fk)
        }),
        pressed: rk,
        active: rk,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${rk?"unlock":"lock"}:${ek}`
        },
        onClick: () => {
          Mk(ek, !rk)
        },
        children: (0, Lk.jsx)(dk.d, {
          name: rk ? "lock" : "lock-open"
        })
      }) : (0, Lk.jsx)(tk, {
        className: Sk,
        keepPlace: bk
      })
    }

    function Tk(kk) {
      let {
        className: ek,
        open: ik,
        name: fk,
        onToggle: Sk
      } = kk;
      const {
        t: bk
      } = (0, Dk.D)();
      return (0, Lk.jsx)(mk.X, {
        className: ek,
        ariaLabel: bk(ik ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: fk
        }),
        pressed: ik,
        analyticsClick: {
          id: "hud_layout.children",
          value: ik ? "close" : "open"
        },
        onClick: () => {
          Sk(!ik)
        },
        children: (0, Lk.jsx)(dk.d, {
          name: ik ? "angle-up" : "angle-down"
        })
      })
    }

    function Zk(kk, ek) {
      var ik;
      kk.contains(document.activeElement) && ek.focus({
        preventScroll: !0
      }), null === (ik = (0, Vk.h)()) || void 0 === ik || ik.handOverPadFocus(kk, ek)
    }

    function Ok(kk) {
      const ek = kk.closest("[data-hud-row]"),
        ik = null === ek || void 0 === ek ? void 0 : ek.querySelector(".HudElementRowName");
      return !(!ek || !ik) && (Zk(ek, ik), !0)
    }
    const gk = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function Gk(kk, ek) {
      return "joystick" === kk && !ek
    }

    function Nk() {
      const {
        t: kk
      } = (0, Dk.D)();
      return (0, Lk.jsx)(mk.X, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: kk => {
          const ek = kk.currentTarget;
          if (!Ok(ek)) {
            const kk = function(kk) {
              var ek, ik;
              const Dk = [kk.previousElementSibling, kk.nextElementSibling].find((kk => kk instanceof HTMLElement && kk.matches(gk)));
              return null !== (ek = null !== Dk && void 0 !== Dk ? Dk : null === (ik = kk.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === ik ? void 0 : ik.querySelector(`:is(${gk}):not(.HudFixJoystickButton)`)) && void 0 !== ek ? ek : null
            }(ek);
            kk && Zk(ek, kk)
          }
          Mk.b.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: kk("hudLayout:fixJoystick")
      })
    }
    var Rk = ik(75),
      Jk = ik(1261),
      ke = ik(3079),
      ee = ik(2683),
      ie = ik(8712),
      De = ik(2449),
      fe = ik(2473),
      Se = ik(3121);
    const be = ["J", "C", "A", "P", "U", "X", "G"],
      re = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: Fk.B,
        pinnedIcon: null
      });

    function Pe(kk, ek) {
      kk.replaceChildren(...[...ek.childNodes].map((kk => kk.cloneNode(!0))))
    }
    const me = kk => ({
      [hk]: kk
    });

    function Me(kk) {
      let {
        id: ek,
        slot: ik,
        icon: Dk,
        label: Sk,
        hidden: bk,
        className: rk,
        face: mk
      } = kk;
      const Mk = (0, fk.useRef)(null);
      return (0, fk.useLayoutEffect)((() => {
        mk && Mk.current && Pe(Mk.current, mk)
      }), [mk]), (0, Lk.jsxs)("div", {
        className: Pk()("TouchKeyHit", `TouchSlot${ik}`, rk, {
          HudPreviewGhost: bk.has(ek)
        }),
        ...me(ek),
        children: [mk && (0, Lk.jsx)("div", {
          ref: Mk,
          className: Pk()("TouchKey", {
            Labelled: mk.classList.contains("Labelled")
          })
        }), !mk && (0, Lk.jsxs)("div", {
          className: Pk()("TouchKey", {
            Labelled: void 0 !== Sk
          }),
          children: [Dk && (0, Lk.jsx)(dk.d, {
            name: Dk
          }), void 0 !== Sk && (0, Lk.jsx)("span", {
            className: "TouchKeyLabel",
            children: Sk
          })]
        })]
      })
    }

    function Ke(kk) {
      let {
        item: ek,
        selected: ik
      } = kk;
      const Dk = (0, fk.useRef)(null);
      return (0, fk.useLayoutEffect)((() => {
        Dk.current && Pe(Dk.current, ek)
      }), [ek]), (0, Lk.jsx)("div", {
        ref: Dk,
        className: Pk()("InvenItem", {
          Selected: ik
        })
      })
    }
    const xe = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      ne = kk => void 0 === kk ? {} : {
        style: {
          "--parked": kk
        }
      };

    function Ue(kk) {
      let {
        id: ek,
        hidden: ik,
        parked: Dk,
        unslotted: fk = !1
      } = kk;
      return (0, Lk.jsx)("div", {
        className: Pk()("TopRightIcon", fe.g[ek], {
          HudPreviewGhost: ik.has(ek),
          [De.b]: void 0 !== Dk,
          [De.d]: fk
        }),
        ...ne(Dk),
        children: (0, Lk.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...me(ek),
          children: (0, Lk.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Lk.jsx)(dk.d, {
              name: xe[ek]
            })
          })
        })
      })
    }

    function He(kk) {
      let {
        portraitPhone: ek,
        icons: ik,
        pinnedIcon: Dk,
        hidden: Sk,
        moved: bk,
        trayState: rk
      } = kk;
      const mk = ek ? (0, De.A)(ik) : [],
        Mk = ik.filter((kk => "settings" === kk)),
        Kk = ik.filter((kk => "settings" !== kk && !mk.includes(kk))).reverse(),
        xk = mk.length > 0 && "gone" === rk,
        nk = [...Mk, ...xk ? ["tray"] : [], ...Kk].filter((kk => "tray" === kk || Sk.has(kk) && !bk.has(kk))),
        Uk = kk => {
          const ek = nk.indexOf(kk);
          return ek < 0 ? void 0 : ek
        },
        Hk = (kk, ek) => (0, Lk.jsx)(Ue, {
          id: kk,
          hidden: Sk,
          parked: ek ? Uk(kk) : void 0,
          unslotted: ek && Sk.has(kk) && bk.has(kk)
        }, kk);
      return (0, Lk.jsxs)("div", {
        className: Pk()("TopRightIcons TouchInGame", {
          Column: ek
        }),
        children: [Mk.map((kk => Hk(kk, !0))), mk.length > 0 && (0, Lk.jsxs)("div", {
          className: Pk()("TopRightIcon TopRightTrayToggle Open", {
            [De.b]: xk
          }),
          ...ne(Uk("tray")),
          children: [(0, Lk.jsx)("div", {
            className: Pk()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== rk
            }),
            children: (0, Lk.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, Lk.jsx)(dk.d, {
                name: "ellipsis"
              })
            })
          }), (0, Lk.jsx)("div", {
            className: "TopRightTray",
            children: mk.map((kk => Hk(kk, !1)))
          })]
        }), Kk.map((kk => (0, Lk.jsxs)(fk.Fragment, {
          children: ["perspective" === kk && null !== Dk && (0, Lk.jsx)("div", {
            className: "TopRightIcon",
            children: (0, Lk.jsx)("div", {
              className: "UiItemIcon SmallTextBold",
              children: (0, Lk.jsx)("div", {
                className: "ScaleOnHover",
                children: (0, Lk.jsx)(dk.d, {
                  name: Dk
                })
              })
            })
          }), Hk(kk, !0)]
        }, kk)))]
      })
    }

    function we(kk) {
      let {
        next: ek,
        hidden: ik
      } = kk;
      return (0, Lk.jsx)("div", {
        className: Pk()("HotBarArrow", ek ? "Next" : "Previous", {
          HudPreviewGhost: ik
        }),
        ...me("arrows"),
        children: (0, Lk.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Lk.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Lk.jsx)(dk.d, {
              name: ek ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function le() {
      return (0, Lk.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, Lk.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, Lk.jsx)("div", {
            className: "SocialBar",
            children: (0, Lk.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, Lk.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, Lk.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, Lk.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, Lk.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Lk.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Lk.jsx)(dk.d, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, Lk.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, Lk.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, Lk.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, Lk.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Lk.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Lk.jsx)(dk.d, {
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
    const pe = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      ye = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Ye = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      Le = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function Ce(kk) {
      let {
        presence: ek,
        portraitPhone: ik,
        hidden: fk,
        actionButtons: Sk,
        joystickFixed: bk,
        keysAbove: rk,
        auraBar: mk,
        trayState: Mk,
        moved: xk
      } = kk;
      const {
        t: nk
      } = (0, Dk.D)(), {
        faces: Uk,
        items: Hk
      } = ek, wk = kk => ({
        HudPreviewGhost: fk.has(kk)
      });
      return (0, Lk.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, Lk.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, Lk.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, Lk.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, Lk.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, Lk.jsx)("div", {
              className: "InGameHeaderGameName",
              children: nk("hudLayout:previewGameName")
            })]
          })
        }), (0, Lk.jsx)("div", {
          className: "TopLeftElements",
          children: (0, Lk.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, Lk.jsxs)("div", {
              className: "Chat",
              children: [(0, Lk.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [nk("hudLayout:previewChatLine"), nk("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), nk("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((kk => (0, Lk.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, Lk.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, Lk.jsx)("div", {
                      className: "IndividualText",
                      children: kk
                    })
                  })
                }, kk)))
              }), (0, Lk.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: Pk()("ChatIconWrapper SmallTextLight", wk("chat")),
                ...me("chat"),
                children: (0, Lk.jsx)(dk.d, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, Lk.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, Lk.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, Lk.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, Lk.jsx)("div", {
                className: "TopRightIconsContainer",
                ...me("menu"),
                children: (0, Lk.jsx)(He, {
                  portraitPhone: ik,
                  icons: ek.rowIcons,
                  pinnedIcon: ek.pinnedIcon,
                  hidden: fk,
                  trayState: Mk,
                  moved: xk
                })
              })
            }), Kk.featureFlags.useSocialFeatures && (0, Lk.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, Lk.jsx)(le, {})
            })]
          })
        }), (0, Lk.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, Lk.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, Lk.jsxs)("div", {
            className: "TouchInteractKey",
            ...me("interact"),
            children: [(0, Lk.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, Lk.jsx)(dk.d, {
                name: "hand-back-point-up"
              })
            }), (0, Lk.jsx)("div", {
              children: nk("hudLayout:previewInteract")
            })]
          })
        }), (0, Lk.jsx)("div", {
          className: "BottomCentre",
          children: (0, Lk.jsxs)("div", {
            className: "BottomElements",
            children: [(0, Lk.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, Lk.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, Lk.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...me("hotbar"),
                children: (0, Lk.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, Lk.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, Lk.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, Lk.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, Lk.jsx)(dk.d, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), mk && (0, Lk.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, Lk.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, Lk.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, Se.h)("glint"),
                    alt: ""
                  }), (0, Lk.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, Lk.jsx)("div", {
                  className: "AuraBar",
                  children: (0, Lk.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, Lk.jsx)("div", {
                className: "HotBarRow",
                children: (0, Lk.jsx)("div", {
                  className: Pk()("HotBarContainer Touch", {
                    KeysAbove: rk
                  }),
                  children: (0, Lk.jsxs)("div", {
                    className: "HotBar",
                    ...me("hotbar"),
                    children: [(0, Lk.jsxs)("div", {
                      className: Pk()("TouchInventoryKeys", {
                        NoAuraBar: !mk
                      }),
                      children: [(0, Lk.jsx)("div", {
                        className: Pk()("TouchInventoryKey ShopKey", wk("inventory"), {
                          Hidden: !ek.shop
                        }),
                        ...me("inventory"),
                        children: (0, Lk.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Lk.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Lk.jsx)(dk.d, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, Lk.jsx)("div", {
                        className: Pk()("TouchInventoryKey BagKey", wk("inventory"), {
                          Hidden: !ek.bag
                        }),
                        ...me("inventory"),
                        children: (0, Lk.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Lk.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Lk.jsx)(dk.d, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, Lk.jsx)(we, {
                      next: !1,
                      hidden: fk.has("arrows")
                    }), (0, Lk.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== Hk && Hk.map(((kk, ek) => (0, Lk.jsx)(Ke, {
                        item: kk,
                        selected: kk.classList.contains("Selected")
                      }, ek))), null === Hk && Ye.map((kk => {
                        const ek = Le[kk];
                        return (0, Lk.jsx)("div", {
                          className: Pk()("InvenItem", {
                            Selected: 0 === kk
                          }),
                          children: ek && (0, Lk.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, Lk.jsx)(dk.d, {
                              name: ek
                            })
                          })
                        }, kk)
                      }))]
                    }), (0, Lk.jsx)(we, {
                      next: !0,
                      hidden: fk.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, Lk.jsx)("div", {
              className: "BottomRightElements",
              children: (0, Lk.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== Uk && be.map((kk => {
                  const ek = Uk[kk];
                  return ek && (0, Lk.jsx)(Me, {
                    id: pe[kk],
                    slot: kk,
                    face: ek,
                    className: ye[kk],
                    hidden: fk
                  }, kk)
                })), null === Uk && (0, Lk.jsxs)(Lk.Fragment, {
                  children: [(0, Lk.jsx)(Me, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: fk
                  }), (0, Lk.jsx)(Me, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: fk
                  }), Sk && (0, Lk.jsxs)(Lk.Fragment, {
                    children: [(0, Lk.jsx)(Me, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: fk
                    }), (0, Lk.jsx)(Me, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: fk
                    })]
                  }), !Sk && (0, Lk.jsx)(Me, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: nk("touchKeys:scope"),
                    hidden: fk
                  }), (0, Lk.jsx)(Me, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: nk("touchKeys:fly"),
                    hidden: fk
                  }), (0, Lk.jsx)(Me, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: fk
                  })]
                })]
              })
            })]
          })
        }), (0, Lk.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, Lk.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, Lk.jsxs)("div", {
              className: Pk()("Joystick Resting HudPreviewJoystick", {
                Floating: !bk
              }),
              ...me("joystick"),
              children: [(0, Lk.jsx)("div", {
                className: "JoystickBase"
              }), (0, Lk.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function Ae() {
      const [kk, ek] = (0, fk.useState)({}), ik = (0, fk.useCallback)((kk => {
        ek((ek => [...new Set([...Object.keys(ek), ...Object.keys(kk)])].every((ik => ek[ik] === kk[ik])) ? ek : kk))
      }), []);
      return [kk, ik]
    }
    const je = .05;

    function se(kk) {
      var ek;
      let {
        selected: ik,
        layout: fk,
        actionButtons: Sk,
        keyNames: bk,
        overlaps: rk,
        scaleCaps: Mk,
        joystickFixed: Kk,
        onScale: xk,
        onHidden: nk,
        onReset: Uk,
        locked: Hk,
        lockable: wk,
        onLocked: lk,
        extra: pk
      } = kk;
      const {
        t: yk
      } = (0, Dk.D)(), Yk = ik ? Ek[ik] : null, Ck = null !== ik && Hk.has(ik), Ak = (ik && fk.hudElements[ik] || Fk.m)[2], jk = null !== (ek = ik && Mk[ik]) && void 0 !== ek ? ek : Fk.e, sk = kk => {
        ik && xk(ik, Math.min(jk, Math.round(100 * (Ak + .1 * kk)) / 100))
      };
      return (0, Lk.jsxs)(Lk.Fragment, {
        children: [(0, Lk.jsxs)("div", {
          className: Pk()("HudQuickName SmallTextBold", {
            Overlap: rk.length > 0
          }),
          children: [rk.length > 0 && (0, Lk.jsx)(dk.d, {
            name: "triangle-exclamation"
          }), Yk ? ak(Yk.id, Sk, yk, bk) : yk("hudLayout:fullScreenHint"), rk.length > 0 && (0, Lk.jsx)("span", {
            className: "HudQuickOverlap",
            children: yk("hudLayout:overlapsShort", {
              names: Wk(rk, Sk, yk, bk)
            })
          })]
        }), (null === Yk || void 0 === Yk ? void 0 : Yk.scale) && (0, Lk.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, Lk.jsx)(mk.X, {
            disabled: Ck || Ak <= Fk.i,
            ariaLabel: yk("hudLayout:smaller"),
            onClick: () => {
              sk(-1)
            },
            children: (0, Lk.jsx)(dk.d, {
              name: "minus"
            })
          }), (0, Lk.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*Ak)}%`
          }), (0, Lk.jsx)(mk.X, {
            disabled: Ck || Ak >= jk,
            ariaLabel: yk("hudLayout:larger"),
            onClick: () => {
              sk(1)
            },
            children: (0, Lk.jsx)(dk.d, {
              name: "plus"
            })
          })]
        }), (Yk || pk) && (0, Lk.jsxs)("div", {
          className: "HudQuickActions",
          children: [Yk && (0, Lk.jsxs)(Lk.Fragment, {
            children: [(0, Lk.jsx)(ck, {
              id: Yk.id,
              actionButtons: Sk,
              keyNames: bk,
              locked: Ck,
              lockable: wk(Yk.id),
              onLocked: lk
            }), (0, Lk.jsx)(Xk, {
              id: Yk.id,
              elements: fk.hudElements,
              actionButtons: Sk,
              keyNames: bk,
              onHidden: nk
            }), (0, Lk.jsx)(Bk, {
              id: Yk.id,
              elements: fk.hudElements,
              actionButtons: Sk,
              keyNames: bk,
              locked: Ck,
              onReset: Uk
            }), Gk(Yk.id, Kk) && (0, Lk.jsx)(Nk, {})]
          }), pk]
        })]
      })
    }
    var de = ik(1085),
      Ve = ik(4365);
    const Fe = "HudPreviewDoc",
      ue = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      qe = new Set([Fe, ...Object.values(ue)]),
      Ie = new Set(Fk.u.map(fe.q)),
      ze = new Set(fe.e),
      Qe = 'style, link[rel="stylesheet"]';

    function ve(kk, ek, ik, Dk) {
      const fk = new Map,
        Sk = new Set,
        bk = new URL(kk.baseURI).origin,
        rk = ek => {
          var ik;
          if ("LINK" !== ek.nodeName) return !0;
          const Dk = null === (ik = ek.getAttribute("href")) || void 0 === ik ? void 0 : ik.trim();
          if (!Dk) return !1;
          try {
            return new URL(Dk, kk.baseURI).origin === bk
          } catch {
            return !1
          }
        };
      let Pk = null;
      const mk = () => {
          Pk !== (0 === Sk.size) && (Pk = 0 === Sk.size, null === Dk || void 0 === Dk || Dk(Pk))
        },
        Mk = kk => {
          const ek = kk.cloneNode(!0);
          if ("LINK" === ek.tagName) {
            Sk.add(ek);
            const kk = () => {
              Sk.delete(ek), mk()
            };
            ek.addEventListener("load", kk), ek.addEventListener("error", kk), ik && ek.addEventListener("load", ik)
          }
          return ek
        },
        Kk = () => {
          const Dk = function(kk) {
              const ek = [...kk.body.children].filter((kk => kk.matches(Qe)));
              return [...kk.head.querySelectorAll(Qe), ...ek]
            }(kk).filter(rk),
            bk = new Set(Dk);
          for (const [kk, ek] of fk) bk.has(kk) || (ek.remove(), fk.delete(kk), Sk.delete(ek));
          let Pk = null;
          for (let kk = Dk.length - 1; kk >= 0; kk--) {
            const Sk = Dk[kk];
            let bk = fk.get(Sk);
            bk ? "STYLE" === Sk.tagName && bk.textContent !== Sk.textContent && (bk.textContent = Sk.textContent, null === ik || void 0 === ik || ik()) : (bk = Mk(Sk), fk.set(Sk, bk), ek.head.insertBefore(bk, Pk)), Pk = bk
          }
          mk()
        };
      Kk();
      const xk = new MutationObserver(Kk);
      return xk.observe(kk.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), xk.observe(kk.body, {
        childList: !0
      }), () => {
        xk.disconnect()
      }
    }

    function Ee(kk, ek, ik) {
      let {
        keysAbove: Dk
      } = ik;
      const fk = [...kk.documentElement.classList].filter((kk => !qe.has(kk) && !ze.has(kk))),
        Sk = [...ek.documentElement.classList].filter((kk => ze.has(kk))),
        bk = [Fe, ue.hotbar, ue.hasShop, ue.hasBag];
      Dk && bk.push(ue.keysAbove), ek.documentElement.className = [...fk, ...bk, ...Sk].join(" ")
    }
    const he = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function ae(kk, ek, ik, Dk, fk) {
      const Sk = (0, Fk.x)(ik, Dk, "joystick"),
        bk = (0, fe.u)((0, fe.H)(ik, Dk, fk), Dk),
        rk = bk.classes.filter((kk => !Ie.has(kk))),
        Pk = ek.documentElement;
      (0, fe.M)({
        ...bk,
        classes: rk
      }, {
        vars: Pk,
        safe: Pk,
        classes: Pk
      });
      const mk = (0, fe.A)(ik.hudLayouts[Dk].hudSafe, window.innerWidth, window.innerHeight, We(), (0, fe.J)(ek));
      Pk.style.setProperty("--preview-joystick-shift-left", `${mk[3]}px`), Pk.style.setProperty("--preview-joystick-shift-bottom", `${mk[2]}px`), Pk.style.setProperty("--preview-joystick-scale", String(Sk[2])), (0, Ve.f)(Pk, ek, ik, Dk);
      for (const Mk of he) Pk.style.setProperty(Mk, kk.documentElement.style.getPropertyValue(Mk) || "0px")
    }

    function We() {
      return (0, fe.G)(Mk.b.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function te(kk) {
      return (0, fe.l)(We(), (0, fe.J)(kk))
    }

    function Xe(kk, ek, ik) {
      const Dk = kk.documentElement.style,
        fk = (0, fe.C)(ek),
        Sk = Dk.getPropertyValue(fk);
      try {
        return ik((kk => {
          Dk.setProperty(fk, String(kk))
        }))
      } finally {
        "" === Sk ? Dk.removeProperty(fk) : Dk.setProperty(fk, Sk)
      }
    }

    function Be(kk, ek) {
      const [ik, Dk] = Xe(kk, "hotbar", (ek => {
        const ik = ik => {
          var Dk, fk;
          return ek(ik), null !== (Dk = null === (fk = kk.querySelector(".HotBarGameItemsContainer")) || void 0 === fk ? void 0 : fk.getBoundingClientRect().width) && void 0 !== Dk ? Dk : 0
        };
        return [ik(1), ik(Fk.e)]
      }));
      return ik <= 0 ? Fk.e : Math.min(Fk.e, Math.max(1, Math.floor(Dk / ik / ek + 1e-6) * ek))
    }
    const ce = 3,
      Te = .5,
      oe = kk => kk.right - kk.left;
    const Ze = (kk, ek) => Math.abs((0, ie.c)(kk).x - (0, ie.c)(ek).x) + Math.abs((0, ie.c)(kk).y - (0, ie.c)(ek).y) + Math.abs(oe(kk) - oe(ek));

    function Oe(kk, ek, ik, Dk, fk) {
      let {
        canKeep: Sk = () => !0,
        passes: bk = ce,
        before: rk,
        keysAboveOf: Pk
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const mk = void 0 !== Pk && Pk(kk) !== Pk(ek),
        Mk = ek.hudLayouts[ik].hudLocked.filter((kk => Sk(kk) && !(mk && "inventory" === kk))),
        Kk = new Set(Mk);
      if (0 === Kk.size) return ek;
      const xk = [...Ik].filter((Dk => !Mk.includes(Dk) && (0, Fk.x)(kk, ik, Dk).join() === (0, Fk.x)(ek, ik, Dk).join())),
        nk = kk => {
          const ek = (0, ie.A)(xk.flatMap((ek => kk[ek] ? [kk[ek]] : [])));
          return {
            ...kk,
            cluster: null !== ek && void 0 !== ek ? ek : void 0
          }
        },
        Uk = kk => {
          const ek = fk(kk);
          return ek && nk(ek)
        },
        Hk = rk ? nk(rk) : Uk(kk);
      let wk = Hk && Uk(ek);
      if (!Hk || !wk) return ek;
      let lk = ek;
      for (let pk = 0; pk < bk && Kk.size > 0; pk++) {
        const kk = new Map;
        for (const ek of Kk) {
          const fk = Hk[ek],
            Sk = wk[ek],
            bk = fk && Sk ? ge(ek, (0, Fk.x)(lk, ik, ek), fk, Sk, Dk) : null;
          bk ? kk.set(ek, bk) : Kk.delete(ek)
        }
        if (0 === kk.size) break;
        let fk = lk;
        for (const [ek, Dk] of kk) fk = (0, Fk.eb)(fk, ik, ek, Dk);
        const Sk = Uk(fk);
        if (!Sk) return ek;
        let bk = lk;
        for (const [ek, Dk] of kk) {
          const kk = Sk[ek];
          kk && Ze(Hk[ek], kk) < Ze(Hk[ek], wk[ek]) - Te ? bk = (0, Fk.eb)(bk, ik, ek, Dk) : Kk.delete(ek)
        }
        if (bk === lk) break;
        const rk = [...kk.keys()].every((kk => Kk.has(kk)));
        if (lk = bk, wk = rk ? Sk : Uk(lk), !wk) return ek
      }
      return fk(lk), lk
    }

    function ge(kk, ek, ik, Dk, fk) {
      let [Sk, bk, rk] = ek;
      const Pk = Fk.r[kk],
        mk = {};
      Pk.scale && oe(Dk) > 0 && Math.abs(oe(ik) - oe(Dk)) > Te && (mk.scale = Math.max(Fk.i, Math.min(Fk.e, rk * oe(ik) / oe(Dk))));
      const Mk = (0, ie.c)(ik).x - (0, ie.c)(Dk).x,
        Kk = (0, ie.c)(ik).y - (0, ie.c)(Dk).y;
      return Pk.move && (Math.abs(Mk) > Te || Math.abs(Kk) > Te) && (mk.dx = Sk + Mk / fk.width, mk.dy = bk + Kk / fk.height), void 0 === mk.scale && void 0 === mk.dx ? null : mk
    }
    let Ge = 0;

    function Ne() {
      return Ge > 0
    }
    const Re = kk => 0 === kk.dx && 0 === kk.dy,
      Je = .001,
      ki = kk => Math.abs(kk.dx) >= 5e-4 || Math.abs(kk.dy) >= 5e-4 ? kk : {
        dx: kk.dx,
        dy: kk.dy < 0 ? -.001 : Je
      };

    function ei(kk) {
      let {
        preview: ek,
        stageRef: ik,
        ringRef: Dk,
        centreLineRef: Sk,
        snapCentre: bk,
        ready: rk,
        measure: Pk,
        k: mk,
        viewport: Mk,
        boxes: Kk,
        pieces: xk,
        selected: nk,
        insets: Uk,
        layout: Hk,
        canMove: wk,
        onSelect: lk,
        onMove: pk
      } = kk;
      const yk = (0, fk.useRef)(null),
        Yk = (0, fk.useCallback)((() => null !== yk.current), []),
        Lk = (kk, ek) => {
          if (!ek) return null;
          const ik = (0, ie.c)(kk.origin),
            Dk = (0, ie.c)(ek),
            fk = (kk.to.dx - kk.from.dx) * Mk.width,
            Sk = (kk.to.dy - kk.from.dy) * Mk.height,
            bk = ek.right - ek.left,
            rk = ek.bottom - ek.top;
          return {
            skew: {
              x: Dk.x - ik.x - fk,
              y: Dk.y - ik.y - Sk
            },
            box: {
              left: ik.x - bk / 2,
              top: ik.y - rk / 2,
              right: ik.x + bk / 2,
              bottom: ik.y + rk / 2
            }
          }
        },
        Ck = (kk, ik) => {
          var fk;
          const bk = yk.current;
          if (!bk || bk.pointerId !== kk.pointerId) return;
          yk.current = null, null === (fk = Sk.current) || void 0 === fk || fk.classList.remove("Shown", "Snapped");
          const rk = Dk.current;
          if (rk && null !== bk.ringStyle && rk.setAttribute("style", bk.ringStyle), ik && bk.moved) {
            const kk = Re(bk.to) ? null : Pk(bk.id),
              ek = kk ? (0, ie.z)(kk, (0, ie.x)(Mk.width, Mk.height, Uk)) : {
                x: 0,
                y: 0
              },
              ik = {
                dx: bk.to.dx + ek.x / Mk.width,
                dy: bk.to.dy + ek.y / Mk.height
              },
              Dk = Re(bk.to) ? ik : ki(ik);
            pk(bk.id, Dk.dx, Dk.dy)
          } else ek(bk.id, null), ik && bk.tapPick && lk(bk.tapPick)
        };
      return {
        busy: Yk,
        handlers: {
          onPointerDown: kk => {
            var ek;
            if (!rk || yk.current || !kk.target.closest(".HudPreviewHandle")) return;
            const Dk = ik.current.getBoundingClientRect(),
              fk = {
                x: (kk.clientX - Dk.left) / mk,
                y: (kk.clientY - Dk.top) / mk
              },
              Sk = (0, ie.u)(fk, xk, 40 / mk),
              bk = "cluster" === nk && void 0 !== Kk.cluster && null !== (0, ie.u)(fk, [{
                id: "cluster",
                box: Kk.cluster
              }], 40 / mk),
              Pk = "menu" === nk && void 0 !== Kk.menu && (0, ie.d)(Kk.menu, fk) && ("menu" === Sk || null !== Sk && (0, De.t)(Sk, Hk.hudElements[Sk])),
              Mk = bk ? "cluster" : Pk ? "menu" : null,
              Uk = null !== Mk,
              pk = null !== Mk && void 0 !== Mk ? Mk : Sk;
            if (!pk) return;
            if (function(kk) {
                Ge++;
                const ek = ik => {
                  ik.pointerId === kk && (Ge = Math.max(0, Ge - 1), window.removeEventListener("pointerup", ek, !0), window.removeEventListener("pointercancel", ek, !0))
                };
                window.addEventListener("pointerup", ek, !0), window.addEventListener("pointercancel", ek, !0)
              }(kk.pointerId), !wk(pk)) return void lk(Uk && Sk ? Sk : pk);
            lk(pk);
            const [Yk, Lk] = null !== (ek = Hk.hudElements[pk]) && void 0 !== ek ? ek : [0, 0], Ck = {
              dx: Yk,
              dy: Lk
            }, Ak = {
              skew: {
                x: 0,
                y: 0
              },
              box: Kk[pk]
            };
            yk.current = {
              id: pk,
              pointerId: kk.pointerId,
              startX: kk.clientX,
              startY: kk.clientY,
              origin: Kk[pk],
              from: Ck,
              to: Ck,
              moved: !1,
              home: Re(Ck) ? {
                centre: (0, ie.c)(Kk[pk]),
                anchor: Ak
              } : null,
              away: Re(Ck) ? null : Ak,
              anchor: Ak,
              ringStyle: null,
              tapPick: Uk ? Sk : null
            }, kk.currentTarget.setPointerCapture(kk.pointerId)
          },
          onPointerMove: kk => {
            const ik = yk.current;
            if (!ik || ik.pointerId !== kk.pointerId) return;
            const fk = kk.clientX - ik.startX,
              rk = kk.clientY - ik.startY;
            if (!ik.moved && Math.hypot(fk, rk) < 5) return;
            const Kk = !ik.moved;
            var xk, nk;
            (ik.moved = !0, Kk) && (ik.ringStyle = null !== (xk = null === (nk = Dk.current) || void 0 === nk ? void 0 : nk.getAttribute("style")) && void 0 !== xk ? xk : null);
            const Hk = (0, ie.x)(Mk.width, Mk.height, Uk);
            if (!ik.home) {
              var wk;
              ik.to = {
                dx: 0,
                dy: 0
              }, ek(ik.id, ik.to);
              const kk = Pk(ik.id),
                Dk = null !== (wk = Lk(ik, kk)) && void 0 !== wk ? wk : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: ik.origin
                },
                fk = (0, ie.c)(ik.origin);
              ik.home = {
                centre: kk ? (0, ie.c)(kk) : {
                  x: fk.x - ik.from.dx * Mk.width,
                  y: fk.y - ik.from.dy * Mk.height
                },
                anchor: Dk
              }
            }
            const lk = ik.home;
            let pk = !1;
            const Yk = kk => {
                pk = !1;
                let Dk = (0, ie.i)(kk.box, fk / mk, rk / mk, Hk);
                const Sk = Mk.width / 2;
                if (bk && Math.abs((0, ie.c)(ik.origin).x + Dk.x - Sk) <= 8 / mk) {
                  const ek = Sk - (0, ie.c)(ik.origin).x,
                    fk = (0, ie.i)(kk.box, ek, Dk.y, Hk);
                  pk = Math.abs(fk.x - ek) < .01, pk && (Dk = fk)
                }
                const Pk = (0, ie.q)(ik.from, Dk.x - kk.skew.x, Dk.y - kk.skew.y, Mk.width, Mk.height);
                ik.to = ki(Pk), ik.anchor = kk, ek(ik.id, ik.to)
              },
              Ck = (0, ie.i)(lk.anchor.box, fk / mk, rk / mk, Hk),
              Ak = Sk.current,
              jk = (0, ie.c)(ik.origin),
              sk = ((0, Fk.M)(ik.id) ? 20 : 6) / mk;
            if (Math.abs(jk.x + Ck.x - lk.centre.x) <= sk && Math.abs(jk.y + Ck.y - lk.centre.y) <= sk) ik.to = {
              dx: 0,
              dy: 0
            }, ik.anchor = lk.anchor, pk = bk && Math.abs(lk.centre.x - Mk.width / 2) < 1, ek(ik.id, ik.to);
            else if (ik.away) Yk(ik.away);
            else {
              var dk;
              Yk(lk.anchor), ik.away = null !== (dk = Lk(ik, Pk(ik.id))) && void 0 !== dk ? dk : lk.anchor, Yk(ik.away)
            }
            null === Ak || void 0 === Ak || Ak.classList.add("Shown"), null === Ak || void 0 === Ak || Ak.classList.toggle("Snapped", pk), (kk => {
              const ek = Dk.current;
              if (ek) {
                const {
                  skew: ik,
                  box: Dk
                } = kk.anchor;
                ek.style.left = Dk.left * mk + "px", ek.style.top = Dk.top * mk + "px", ek.style.width = (Dk.right - Dk.left) * mk + "px", ek.style.height = (Dk.bottom - Dk.top) * mk + "px", ek.style.translate = `${((kk.to.dx-kk.from.dx)*Mk.width+ik.x)*mk}px ${((kk.to.dy-kk.from.dy)*Mk.height+ik.y)*mk}px`
              }
            })(ik)
          },
          onPointerUp: kk => {
            Ck(kk, !0)
          },
          onPointerCancel: kk => {
            Ck(kk, !1)
          }
        }
      }
    }

    function ii(kk, ek) {
      return Object.keys(kk).filter((kk => kk !== ek)).map((ek => kk[ek]))
    }

    function Di(kk) {
      const ek = [],
        ik = ek => (0, Fk.M)(ek) && !kk.documentElement.classList.contains((0, fe.x)(ek));
      for (const bk of kk.querySelectorAll(`[${hk}]`)) {
        const kk = ik(bk.getAttribute(hk)) ? bk.querySelector(".ScaleOnHover") : null,
          Dk = (null !== kk && void 0 !== kk ? kk : bk).getBoundingClientRect();
        (Dk.width > 0 || Dk.height > 0) && ek.push({
          id: bk.getAttribute(hk),
          box: {
            left: Dk.left,
            top: Dk.top,
            right: Dk.right,
            bottom: Dk.bottom
          }
        })
      }
      const Dk = kk => (0, ie.A)(ek.filter((ek => {
          let {
            id: ik
          } = ek;
          return kk(ik)
        })).map((kk => {
          let {
            box: ek
          } = kk;
          return ek
        }))),
        fk = {};
      for (const bk of new Set(ek.map((kk => kk.id)))) fk[bk] = Dk((kk => kk === bk));
      const Sk = Dk((kk => Ik.has(kk)));
      return Sk && (fk.cluster = Sk), {
        boxes: fk,
        pieces: ek
      }
    }

    function fi(kk, ek, ik) {
      const Dk = ek.right - ek.left,
        fk = ek.bottom - ek.top;
      return Xe(kk, "cluster", (ek => {
        const Sk = ik => {
            ek(ik);
            const Dk = [...kk.querySelectorAll(`[${hk}]:not(.HudPreviewGhost)`)].filter((kk => Ik.has(kk.getAttribute(hk)))).map((kk => {
                const ek = kk.getBoundingClientRect();
                return {
                  left: ek.left,
                  top: ek.top,
                  right: ek.right,
                  bottom: ek.bottom
                }
              })),
              fk = (0, ie.A)(Dk);
            return fk ? {
              w: fk.right - fk.left,
              h: fk.bottom - fk.top
            } : null
          },
          bk = kk => !kk || kk.w <= Dk && kk.h <= fk,
          rk = Sk(1),
          Pk = Sk(Fk.e);
        if (!rk || bk(Pk)) return Fk.e;
        const mk = (kk, ek, ik) => ek > kk ? 1 + (ik - kk) * (Fk.e - 1) / (ek - kk) : Fk.e;
        let Mk = Math.floor(Math.min(Fk.e, mk(rk.w, Pk.w, Dk), mk(rk.h, Pk.h, fk)) / ik + 1e-6) * ik;
        for (; Mk > 1 && !bk(Sk(Mk));) Mk = Math.round(100 * (Mk - ik)) / 100;
        return Math.max(1, Mk)
      }))
    }

    function Si(kk) {
      Ee(document, kk, {
        keysAbove: !1
      });
      const ek = parseFloat(getComputedStyle(kk.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        ik = Number.isFinite(ek) && ek < 0;
      return Ee(document, kk, {
        keysAbove: ik
      }), ik
    }

    function bi(kk, ek) {
      let {
        layout: ik,
        orientation: Dk,
        viewport: Sk,
        replicaKey: bk,
        joystickFixed: rk,
        busy: Pk
      } = ek;
      const [mk, Mk] = (0, fk.useState)(null), [Kk, xk] = (0, fk.useState)({
        boxes: {},
        pieces: []
      }), [nk, Uk] = (0, fk.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [Hk, wk] = (0, fk.useState)(!1), [lk, pk] = (0, fk.useState)(!1), [yk, Yk] = (0, fk.useState)(!1), Lk = (0, fk.useCallback)((kk => {
        pk(kk), kk && Yk(!0)
      }), []), Ck = ik.hudLayouts[Dk].hudSafe;
      (0, fk.useLayoutEffect)((() => {
        const ek = kk.current.contentDocument;
        ek.open(), ek.write("<!DOCTYPE html><html><head></head><body></body></html>"), ek.close(), Mk(ek)
      }), [kk]);
      const Ak = (0, fk.useCallback)((() => {
          mk && ((0, De.v)(mk), xk(Di(mk)), Uk(function(kk, ek) {
            const ik = te(kk),
              [Dk, fk, Sk, bk] = ek ? (0, fe.n)(ek, window.innerWidth, window.innerHeight, ik) : ik;
            return {
              top: Dk,
              right: fk,
              bottom: Sk,
              left: bk
            }
          }(mk, Ck)))
        }), [mk, Ck]),
        jk = (0, fk.useCallback)((() => {
          mk && wk(Si(mk))
        }), [mk]),
        sk = (0, fk.useRef)((() => {}));
      return sk.current = () => {
        jk(), Pk() || Ak()
      }, (0, fk.useLayoutEffect)((() => {
        if (mk) return ve(document, mk, (() => {
          sk.current()
        }), Lk)
      }), [mk, Lk]), (0, fk.useLayoutEffect)(jk, [jk, Sk]), (0, fk.useLayoutEffect)((() => {
        mk && (Ee(document, mk, {
          keysAbove: Hk
        }), ae(document, mk, ik, Dk, rk), jk(), Ak())
      }), [mk, ik, Dk, Hk, bk, rk, Sk, Ak, jk]), (0, fk.useEffect)((() => {
        var kk;
        if (!mk) return;
        const ek = new ResizeObserver((() => {
          Pk() || Ak()
        }));
        for (const ik of mk.querySelectorAll(`[${hk}]`)) ek.observe(ik);
        return null === (kk = mk.fonts) || void 0 === kk || kk.ready.then(Ak), () => {
          ek.disconnect()
        }
      }), [mk, Ak, Pk, bk]), {
        doc: mk,
        boxes: Kk.boxes,
        pieces: Kk.pieces,
        insets: nk,
        keysAbove: Hk,
        ready: lk,
        settled: yk
      }
    }
    const ri = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      Pi = (kk, ek, ik) => {
        const Dk = kk => (0, De.t)(kk, ik.hudElements[kk]);
        return "cluster" === kk && Ik.has(ek) || "cluster" === ek && Ik.has(kk) || "menu" === kk && Dk(ek) || "menu" === ek && Dk(kk) || ri.some((Dk => {
          let [fk, Sk] = Dk;
          const bk = ik.hudElements.hotbar,
            rk = "inventory" === Sk && ik.hudLocked.includes(Sk) && void 0 !== bk && !(0, Fk.K)(bk);
          return (kk === fk && ek === Sk || kk === Sk && ek === fk) && !rk
        }))
      };
    const mi = ["Above", "Below", "Left", "Right"];

    function Mi(kk, ek, ik, Dk, fk) {
      const Sk = ik[kk],
        bk = (Sk.left + Sk.right) / 2,
        rk = (Sk.top + Sk.bottom) / 2,
        Pk = (7.5 * ek.length + 14) / Dk,
        mk = 18 / Dk,
        Mk = {
          Above: {
            left: bk - Pk / 2,
            top: Sk.top - mk,
            right: bk + Pk / 2,
            bottom: Sk.top
          },
          Below: {
            left: bk - Pk / 2,
            top: Sk.bottom,
            right: bk + Pk / 2,
            bottom: Sk.bottom + mk
          },
          Left: {
            left: Sk.left - Pk,
            top: rk - mk / 2,
            right: Sk.left,
            bottom: rk + mk / 2
          },
          Right: {
            left: Sk.right,
            top: rk - mk / 2,
            right: Sk.right + Pk,
            bottom: rk + mk / 2
          }
        },
        Kk = ii(ik, kk),
        xk = {
          left: 0,
          top: 0,
          right: fk.width,
          bottom: fk.height
        };
      return mi[(0, ie.o)(mi.map((kk => Mk[kk])), Kk, {
        bounds: xk
      })]
    }

    function Ki() {
      const [kk, ek] = (0, ke.c)();
      return (0, fk.useMemo)((() => ({
        width: kk,
        height: ek
      })), [kk, ek])
    }

    function xi(kk) {
      var ek;
      const {
        layout: ik,
        orientation: Sk,
        selected: bk,
        onSelect: rk,
        onMove: mk,
        canMove: Mk,
        actionButtons: Kk,
        joystickFixed: xk,
        presence: nk,
        keyNames: Hk,
        maxHeight: wk,
        fill: lk = !1,
        apiRef: pk
      } = kk, {
        t: yk
      } = (0, Dk.D)(), Yk = Ki(), Ck = (null !== (ek = (0, Uk.e)("maxAuraLevel")) && void 0 !== ek ? ek : 0) > 0, Ak = ik.hudLayouts[Sk], jk = (0, fk.useRef)(null), sk = (0, fk.useRef)(null), Vk = (0, fk.useRef)(null), uk = (0, fk.useRef)(null), qk = (0, fk.useRef)(null), zk = (0, fk.useRef)(null), Qk = (0, ee.c)(jk).width, vk = lk ? 1 : Qk > 0 ? (0, ie.v)(Qk, Yk.width, Yk.height, wk) : 0, Ek = (0, fk.useRef)((() => !1)), hk = (0, fk.useCallback)((() => Ek.current()), []), {
        doc: Wk,
        boxes: tk,
        pieces: Xk,
        insets: Bk,
        keysAbove: ck,
        ready: Tk,
        settled: Zk
      } = bi(Vk, {
        layout: ik,
        orientation: Sk,
        viewport: Yk,
        replicaKey: `${Kk}:${xk}:${Ck}`,
        joystickFixed: xk,
        busy: hk
      }), Ok = (0, fk.useCallback)((kk => {
        Wk && ae(document, Wk, kk, Sk, xk)
      }), [Wk, Sk, xk]), gk = (0, fk.useCallback)((kk => Wk && Zk ? (Ok(kk), Si(Wk), function(kk) {
        let {
          boxes: ek,
          pieces: ik
        } = kk;
        const Dk = ik.find((kk => "inventory" === kk.id));
        if (!Dk || !ek.inventory) return ek;
        const fk = (0, ie.c)(ek.inventory),
          Sk = oe(Dk.box) / 2,
          bk = (Dk.box.bottom - Dk.box.top) / 2;
        return {
          ...ek,
          inventory: {
            left: fk.x - Sk,
            top: fk.y - bk,
            right: fk.x + Sk,
            bottom: fk.y + bk
          }
        }
      }(Di(Wk))) : null), [Wk, Zk, Ok]), Gk = (0, fk.useCallback)((kk => !!Wk && (Ok(kk), Si(Wk))), [Wk, Ok]), Nk = (0, fk.useRef)(null), Jk = (0, fk.useRef)(null), ke = (0, fk.useRef)(ik);
      ke.current = ik;
      const Se = (0, fk.useCallback)((() => {
        null !== Nk.current && (cancelAnimationFrame(Nk.current), Nk.current = null)
      }), []);
      (0, fk.useEffect)((() => Se), [ik, Se]);
      const {
        lockable: be
      } = kk, re = (0, fk.useCallback)((kk => {
        if (Ok(kk), !Zk || 0 === ik.hudLayouts[Sk].hudLocked.length) return;
        const ek = ik;
        Se(), Nk.current = requestAnimationFrame((() => {
          var ik;
          if (Nk.current = null, ke.current !== ek) return;
          const Dk = (null === (ik = Jk.current) || void 0 === ik ? void 0 : ik.from) === ek ? Jk.current.boxes : gk(ek);
          Dk && (Jk.current = {
            from: ek,
            boxes: Dk
          }), Ok(Dk ? Oe(ek, kk, Sk, Yk, gk, {
            canKeep: be,
            passes: 1,
            before: Dk,
            keysAboveOf: Gk
          }) : kk)
        }))
      }), [Ok, Zk, ik, Sk, Yk, gk, Gk, be, Se]), Pe = ei({
        preview: (kk, ek) => {
          ek ? re((0, Fk.eb)(ik, Sk, kk, ek)) : (Se(), Ok(ik))
        },
        stageRef: sk,
        ringRef: uk,
        centreLineRef: qk,
        snapCentre: ik.hudSnapCentre,
        ready: Zk,
        measure: kk => {
          var ek;
          return Wk && Tk && null !== (ek = Di(Wk).boxes[kk]) && void 0 !== ek ? ek : null
        },
        k: vk,
        viewport: Yk,
        boxes: tk,
        pieces: Xk,
        selected: bk,
        insets: Bk,
        layout: Ak,
        canMove: Mk,
        onSelect: rk,
        onMove: (kk, ek, ik) => {
          Se(), mk(kk, ek, ik)
        }
      });
      (0, fk.useLayoutEffect)((() => {
        Ek.current = Pe.busy
      }), [Pe.busy]);
      const me = (0, fk.useRef)([]),
        Me = (0, fk.useRef)(Ak.hudElements);
      (0, fk.useEffect)((() => {
        for (const fk of Object.keys(Ak.hudElements)) {
          var kk, ek, ik, Dk;
          (null !== (kk = null === (ek = Ak.hudElements[fk]) || void 0 === ek ? void 0 : ek[2]) && void 0 !== kk ? kk : 1) > (null !== (ik = null === (Dk = Me.current[fk]) || void 0 === Dk ? void 0 : Dk[2]) && void 0 !== ik ? ik : 1) && Mk(fk) && !(0, De.t)(fk, Ak.hudElements[fk]) && me.current.push(fk)
        }
        Me.current = Ak.hudElements
      }), [Ak.hudElements, Mk]), (0, fk.useEffect)((() => {
        if (!Tk) return;
        const kk = me.current.shift(),
          ek = kk && tk[kk];
        if (!kk || !ek || Pe.busy()) return;
        const ik = (0, ie.z)(ek, (0, ie.x)(Yk.width, Yk.height, Bk));
        if (0 !== ik.x || 0 !== ik.y) {
          var Dk;
          const [ek, fk] = null !== (Dk = Ak.hudElements[kk]) && void 0 !== Dk ? Dk : [0, 0];
          mk(kk, ek + ik.x / Yk.width, fk + ik.y / Yk.height)
        }
      }), [tk, Tk]), (0, fk.useImperativeHandle)(pk, (() => ({
        setScale: (kk, ek) => {
          re((0, Fk.eb)(ik, Sk, kk, {
            scale: ek
          }))
        },
        setOpacity: kk => {
          Ok({
            ...ik,
            hudKeyOpacity: kk
          })
        },
        keepLocks: (kk, ek) => (Se(), Oe(kk, ek, Sk, Yk, gk, {
          canKeep: be,
          keysAboveOf: Gk
        })),
        setSafe: kk => {
          re((0, Fk.jb)(ik, Sk, kk)), zk.current && (zk.current.style.inset = (0, fe.n)(kk, Yk.width, Yk.height, te(null !== Wk && void 0 !== Wk ? Wk : document)).map((kk => kk * vk + "px")).join(" "))
        }
      })), [Ok, re, gk, Gk, Se, be, Wk, ik, Sk, Yk, vk]);
      const Ke = new Set(Object.keys(Ak.hudElements).filter((kk => (0, Fk.q)(Ak.hudElements, kk)))),
        xe = bk ? tk[bk] : void 0,
        ne = bk ? ak(bk, Kk, yk, Hk) : "",
        Ue = (0, de.g)(Yk.width, Yk.height),
        He = bk ? function(kk, ek, ik, Dk) {
          const fk = kk => (0, Fk.q)(ik.hudElements, kk) || (0, De.s)(kk, ik, Dk);
          if (fk(kk)) return [];
          const Sk = ek.filter((ek => {
              let {
                id: ik
              } = ek;
              return "cluster" === kk ? Ik.has(ik) : ik === kk
            })),
            bk = new Set;
          for (const rk of ek) rk.id === kk || bk.has(rk.id) || Pi(kk, rk.id, ik) || fk(rk.id) || void 0 === ik.hudElements[kk] && void 0 === ik.hudElements[rk.id] || Sk.some((kk => {
            let {
              id: ek,
              box: ik
            } = kk;
            return ek !== rk.id && (0, ie.h)(ik, rk.box, 2)
          })) && bk.add(rk.id);
          return [...bk]
        }(bk, Xk, Ak, Ue) : [],
        we = new Set((0, De.r)(Ak.hudElements)),
        le = (0, De.D)(Ak, (0, De.A)(nk.rowIcons)).state,
        pe = He.join(),
        ye = (0, fk.useRef)(kk.onReady);
      ye.current = kk.onReady, (0, fk.useEffect)((() => {
        var kk;
        null === (kk = ye.current) || void 0 === kk || kk.call(ye, Zk)
      }), [Zk]);
      const Ye = (0, fk.useRef)(kk.onMeasured);
      (0, fk.useLayoutEffect)((() => {
        Ye.current = kk.onMeasured
      })), (0, fk.useEffect)((() => {
        var kk;
        const ek = Wk ? {
          hotbar: Be(Wk, je),
          cluster: fi(Wk, (0, ie.x)(Yk.width, Yk.height, Bk), je)
        } : {};
        null === (kk = Ye.current) || void 0 === kk || kk.call(Ye, tk, pe ? pe.split(",") : [], ek)
      }), [tk, pe, Wk, Yk, Bk]);
      const Le = kk => ({
        left: kk.left * vk,
        top: kk.top * vk,
        width: (kk.right - kk.left) * vk,
        height: (kk.bottom - kk.top) * vk
      });
      return (0, Lk.jsx)("div", {
        ref: jk,
        className: Pk()("HudPreviewBox", {
          Fill: lk
        }),
        style: {
          height: Yk.height * vk
        },
        children: (0, Lk.jsxs)("div", {
          ref: sk,
          className: "HudPreviewStage",
          style: {
            width: Yk.width * vk,
            height: Yk.height * vk
          },
          children: [(0, Lk.jsx)("iframe", {
            ref: Vk,
            className: "HudPreviewFrame",
            title: yk("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: Yk.width,
              height: Yk.height,
              transform: `scale(${vk})`
            }
          }), Wk && (0, Rk.createPortal)((0, Lk.jsx)(Ce, {
            presence: nk,
            portraitPhone: Ue,
            hidden: Ke,
            actionButtons: Kk,
            joystickFixed: xk,
            keysAbove: ck,
            auraBar: Ck,
            trayState: le,
            moved: we
          }), Wk.body), (0, Lk.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...Pe.handlers,
            children: [(0, Lk.jsx)("div", {
              ref: zk,
              className: "HudPreviewSafeZone",
              style: {
                top: Bk.top * vk,
                right: Bk.right * vk,
                bottom: Bk.bottom * vk,
                left: Bk.left * vk
              }
            }), Xk.map(((kk, ek) => {
              let {
                id: ik,
                box: Dk
              } = kk;
              return (0, Lk.jsx)("div", {
                className: "HudPreviewHandle",
                style: Le((0, ie.m)(Dk, 40 / vk))
              }, `${ik}:${ek}`)
            })), Ak.hudLocked.map((kk => {
              const ek = tk[kk];
              return ek && (0, Lk.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: ek.right * vk,
                  top: ek.top * vk
                },
                children: (0, Lk.jsx)(dk.d, {
                  name: "lock"
                })
              }, kk)
            })), (0, Lk.jsx)("div", {
              ref: qk,
              className: "HudPreviewCentreLine",
              style: {
                left: Yk.width / 2 * vk
              }
            }), bk && xe && (0, Lk.jsx)("div", {
              ref: uk,
              className: Pk()("HudPreviewRing", {
                Fixed: !Mk(bk),
                Overlap: He.length > 0
              }),
              style: Le(xe),
              children: (0, Lk.jsx)("span", {
                className: Pk()("HudPreviewRingLabel", Mi(bk, ne, tk, vk, Yk)),
                children: ne
              })
            })]
          })]
        })
      })
    }

    function ni(kk, ek) {
      (0, fk.useEffect)((() => {
        var ik;
        null === (ik = kk.current) || void 0 === ik || ik.toggleAttribute("inert", ek)
      }), [kk, ek])
    }
    const Ui = "hudFullScreen";

    function Hi(kk) {
      let {
        onScale: ek,
        onHidden: ik,
        onReset: Sk,
        locked: bk,
        lockable: rk,
        onLocked: Pk,
        onClose: Mk,
        ...Kk
      } = kk;
      const {
        t: xk
      } = (0, Dk.D)(), nk = (0, fk.useRef)(null);
      (0, Jk.u)("popup", nk, Mk),
      function(kk) {
        const ek = (0, fk.useRef)(kk);
        ek.current = kk, (0, fk.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Ui]: !0
          }, "");
          let kk = !1;
          const ik = () => {
            kk = !0, ek.current()
          };
          return window.addEventListener("popstate", ik), () => {
            var ek;
            window.removeEventListener("popstate", ik), !kk && null !== (ek = window.history.state) && void 0 !== ek && ek[Ui] && window.history.back()
          }
        }), [])
      }(Mk), (0, fk.useEffect)((() => {
        function kk(kk) {
          "Escape" === kk.key && (kk.stopPropagation(), Mk())
        }
        return window.addEventListener("keydown", kk, !0), () => {
          window.removeEventListener("keydown", kk, !0)
        }
      }), [Mk]);
      const {
        selected: Uk
      } = Kk, Hk = (0, fk.useRef)(null), wk = (0, fk.useRef)(null), [lk, pk] = (0, fk.useState)(!1);
      ni(wk, !lk);
      const [yk, Yk] = (0, fk.useState)(null), [Ck, Ak] = (0, fk.useState)([]), [jk, sk] = Ae(), dk = (0, fk.useRef)(Kk.selected);
      dk.current = Kk.selected;
      const Vk = (0, fk.useRef)({}),
        Fk = (0, fk.useCallback)((() => {
          const kk = Hk.current;
          kk && Yk(function(kk, ek, ik) {
            var Dk;
            const {
              innerWidth: fk,
              innerHeight: Sk
            } = window, bk = kk.offsetWidth, rk = kk.offsetHeight, Pk = Math.max(We()[0], 6), mk = [];
            for (const xk of [Pk, .2 * Sk, .5 * Sk - rk / 2, .33 * Sk])
              for (const kk of [.5, .3, .7]) mk.push({
                left: Math.max(0, Math.min(fk - bk - 6, Math.max(6, fk * kk - bk / 2))),
                top: xk
              });
            const Mk = mk.map((kk => ({
                left: kk.left - 6,
                top: kk.top - 6,
                right: kk.left + bk + 6,
                bottom: kk.top + rk + 6
              }))),
              Kk = ii(ek, ik);
            return mk[(0, ie.o)(Mk, Kk, {
              avoid: ik && null !== (Dk = ek[ik]) && void 0 !== Dk ? Dk : null
            })]
          }(kk, Vk.current, dk.current))
        }), []),
        uk = (0, fk.useCallback)(((kk, ek, ik) => {
          Ak(ek), sk(ik), Vk.current = kk, Fk()
        }), [Fk, sk]);
      return (0, fk.useLayoutEffect)(Fk, [Kk.selected, Fk]), (0, Rk.createPortal)((0, Lk.jsxs)("div", {
        ref: nk,
        className: "HudFullScreenEditor",
        children: [(0, Lk.jsx)(xi, {
          ...Kk,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: uk,
          onReady: pk,
          lockable: rk
        }), (0, Lk.jsxs)("div", {
          ref: Hk,
          className: "HudFullScreenToolbar",
          style: null === yk ? void 0 : {
            left: yk.left,
            top: yk.top,
            transform: "none"
          },
          children: [(0, Lk.jsx)("div", {
            ref: wk,
            className: "HudFullScreenControls",
            children: (0, Lk.jsx)(se, {
              selected: Uk,
              layout: Kk.layout.hudLayouts[Kk.orientation],
              actionButtons: Kk.actionButtons,
              keyNames: Kk.keyNames,
              overlaps: Ck,
              scaleCaps: jk,
              onScale: ek,
              onHidden: ik,
              onReset: Sk,
              locked: bk,
              lockable: rk,
              onLocked: Pk,
              joystickFixed: Kk.joystickFixed
            })
          }), (0, Lk.jsx)(mk.f, {
            className: "HudFullScreenDone",
            onClick: Mk,
            padDefaultFocus: !0,
            children: xk("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const wi = kk => `${Math.round(100*kk)}%`;

    function li(kk) {
      let {
        info: ek,
        tuple: ik,
        props: fk
      } = kk;
      const {
        t: Sk
      } = (0, Dk.D)();
      return (0, Lk.jsx)(nk.m, {
        name: Sk("hudLayout:size"),
        min: Fk.i,
        max: Fk.e,
        step: je,
        initValue: ik[2],
        disabled: fk.locked.has(ek.id),
        selectableMax: fk.scaleCaps[ek.id],
        cappedNote: Sk("hudLayout:sizeCapped"),
        format: wi,
        onChange: kk => {
          fk.onScalePreview(ek.id, kk)
        },
        onChangeComplete: kk => {
          fk.onScale(ek.id, kk)
        }
      })
    }

    function yi(kk) {
      const {
        t: ek
      } = (0, Dk.D)(), {
        present: ik,
        elements: Sk,
        selected: bk,
        onSelect: rk,
        onHidden: mk,
        onReset: Mk,
        note: Kk,
        actionButtons: xk,
        keyNames: nk,
        sizeBesidePreview: Uk,
        locked: Hk,
        lockable: wk,
        onLocked: lk
      } = kk, {
        rowIconsOpen: pk,
        onRowIconsOpen: yk
      } = kk, Yk = (0, fk.useRef)(null), Ck = null !== bk && (pk || !(0, Fk.M)(bk));
      return (0, fk.useEffect)((() => {
        var kk;
        const ek = bk ? null === (kk = Yk.current) || void 0 === kk ? void 0 : kk.querySelector(`[data-hud-row="${bk}"]`) : null;
        if (!ek) return;
        const ik = ek.closest(".SettingsMenuRight"),
          Dk = performance.now();
        let fk = null;
        const Sk = () => {
            clearInterval(Pk), null === ik || void 0 === ik || ik.removeEventListener("scroll", rk)
          },
          rk = () => {
            Ne() || Sk()
          },
          Pk = setInterval((() => {
            const kk = performance.now();
            kk - Dk > 1500 ? Sk() : Ne() ? fk = null : null === fk ? fk = kk : kk - fk >= 150 && (Sk(), function(kk) {
              var ek;
              const ik = kk.closest(".SettingsMenuRight"),
                Dk = null === (ek = kk.closest(".HudLayoutSettings")) || void 0 === ek ? void 0 : ek.querySelector(".HudLayoutPreviewBox");
              if (!ik || !Dk) return;
              const fk = Dk.getBoundingClientRect().bottom + 8,
                Sk = ik.getBoundingClientRect().bottom - 8,
                bk = kk.getBoundingClientRect();
              bk.top < fk ? ik.scrollBy({
                top: bk.top - fk,
                behavior: "smooth"
              }) : bk.bottom > Sk && ik.scrollBy({
                top: Math.min(bk.bottom - Sk, bk.top - fk),
                behavior: "smooth"
              })
            }(ek))
          }), 50);
        return null === ik || void 0 === ik || ik.addEventListener("scroll", rk, {
          passive: !0
        }), Sk
      }), [bk, Ck]), (0, Lk.jsx)("div", {
        ref: Yk,
        className: "SettingBoxGroup HudElementList",
        children: vk.filter((kk => ik.has(kk.id) && (pk || !(0, Fk.M)(kk.id)))).map((ik => {
          const Dk = ((kk, ek) => {
              var ik;
              return null !== (ik = kk[ek]) && void 0 !== ik ? ik : Fk.m
            })(Sk, ik.id),
            fk = (0, Fk.q)(Sk, ik.id),
            Yk = ik.id === bk,
            Ck = ik.scale && !Uk,
            Ak = Kk(ik.id, Yk);
          return (0, Lk.jsxs)("div", {
            "data-hud-row": ik.id,
            className: Pk()("SettingBox HudElementRow", {
              Open: Yk,
              Hidden: fk,
              Child: void 0 !== ik.parent
            }),
            children: [(0, Lk.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, Lk.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": Ck ? Yk : void 0,
                onClick: () => {
                  rk(ik.id)
                },
                children: [ak(ik.id, xk, ek, nk), ik.scale && 1 !== Dk[2] && !(Yk && Ck) && (0, Lk.jsx)("span", {
                  className: "HudElementRowSize",
                  children: wi(Dk[2])
                }), Ck && (0, Lk.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, Lk.jsx)(ck, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: ik.id,
                actionButtons: xk,
                keyNames: nk,
                locked: Hk.has(ik.id),
                lockable: wk(ik.id),
                onLocked: lk
              }), "menu" === ik.id && (0, Lk.jsx)(Tk, {
                className: "HudElementRowIcon",
                open: pk,
                name: ak(ik.id, xk, ek, nk),
                onToggle: yk
              }), "menu" !== ik.id && (0, Lk.jsx)(Xk, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: ik.id,
                elements: Sk,
                actionButtons: xk,
                keyNames: nk,
                onHidden: mk
              }), (0, Lk.jsx)(Bk, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: Hk.has(ik.id),
                id: ik.id,
                elements: Sk,
                actionButtons: xk,
                keyNames: nk,
                onReset: Mk
              })]
            }), Yk && Ck && (0, Lk.jsx)(li, {
              info: ik,
              tuple: Dk,
              props: kk
            }), Ak && (0, Lk.jsx)("div", {
              className: "HudElementNote",
              children: Ak
            })]
          }, ik.id)
        }))
      })
    }

    function Yi(kk) {
      let {
        preview: ek,
        quick: ik,
        onFullScreen: Sk,
        resting: bk,
        onSidePanel: rk
      } = kk;
      const {
        t: Pk
      } = (0, Dk.D)(), Mk = Ki(), Kk = (0, fk.useRef)(null), {
        width: xk
      } = (0, ee.c)(Kk), nk = Math.floor(Mk.width * Math.min(1, ek.maxHeight / Mk.height)), Uk = xk - nk - 12, Hk = Uk >= 130, wk = xk > 0;
      (0, fk.useEffect)((() => {
        wk && rk(Hk)
      }), [wk, Hk, rk]);
      const lk = (0, ie.v)(Hk ? nk : xk, Mk.width, Mk.height, ek.maxHeight),
        pk = bk ? (0, Lk.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: Mk.height * lk
          }
        }) : (0, Lk.jsx)(xi, {
          ...ek
        }),
        yk = kk => (0, Lk.jsxs)(mk.X, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: Pk("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: Sk,
          children: [(0, Lk.jsx)(dk.d, {
            name: "expand"
          }), kk && (0, Lk.jsx)("span", {
            children: Pk("hudLayout:fullScreen")
          })]
        });
      return (0, Lk.jsxs)("div", {
        ref: Kk,
        className: "SettingBox HudLayoutPreviewBox",
        children: [xk > 0 && Hk && (0, Lk.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, Lk.jsx)("div", {
            style: {
              width: nk
            },
            children: pk
          }), (0, Lk.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, Lk.jsx)(se, {
              selected: ek.selected,
              ...ik,
              joystickFixed: ek.joystickFixed,
              extra: yk(!ek.selected || Uk >= 278)
            })
          })]
        }), xk > 0 && !Hk && (0, Lk.jsxs)(Lk.Fragment, {
          children: [pk, (0, Lk.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: yk(!1)
          })]
        })]
      })
    }
    var Li = ik(2463),
      Ci = ik(4359),
      Ai = ik(2442),
      ji = ik(2405);
    const si = kk => {
      const ek = fe.i * ("sides" === kk ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(ek / 2))
    };

    function di(kk, ek, ik) {
      const [Dk, fk, Sk, bk] = kk;
      return "sides" === ek ? [Dk, ik, Sk, ik] : [ik, fk, ik, bk]
    }
    const Vi = [null, null, null, null],
      Fi = kk => `${kk}px`;

    function ui(kk) {
      let {
        safe: ek,
        onPreview: ik,
        onCommit: Sk
      } = kk;
      const {
        t: bk
      } = (0, Dk.D)(), rk = (0, fe.n)(null !== ek && void 0 !== ek ? ek : Vi, window.innerWidth, window.innerHeight, te(document).map(Math.round)), Pk = (0, fk.useRef)(null !== ek && void 0 !== ek ? ek : Vi);
      Pk.current = null !== ek && void 0 !== ek ? ek : Vi;
      const Mk = kk => {
        const ek = Math.min(si(kk), "sides" === kk ? Math.max(rk[1], rk[3]) : Math.max(rk[0], rk[2]));
        return (0, Lk.jsx)(nk.m, {
          name: bk("sides" === kk ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: si(kk),
          step: 2,
          initValue: ek,
          format: Fi,
          onChange: ek => {
            ik(di(Pk.current, kk, ek))
          },
          onChangeComplete: Dk => {
            if (Dk === ek) return void ik(Pk.current);
            const fk = di(Pk.current, kk, Dk);
            Pk.current = fk, Sk(fk), (0, jk.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: kk
            })
          }
        })
      };
      return (0, Lk.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, Lk.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, Lk.jsx)("div", {
            children: bk("hudLayout:safeZone")
          }), (0, Lk.jsx)(mk.X, {
            active: null === ek,
            pressed: null === ek,
            onClick: () => {
              Sk(null)
            },
            children: bk("hudLayout:safeZoneAuto")
          })]
        }), Mk("sides"), Mk("ends")]
      })
    }

    function qi() {
      var kk, ek;
      const {
        t: ik
      } = (0, Dk.D)(), Sk = (0, Fk.bb)(), {
        clientEscMenuOptions: bk
      } = (0, Mk.n)(["clientEscMenuOptions"]), rk = (0, Li.g)(), Pk = Sk.hudLayouts[rk], [Kk, xk] = (0, fk.useState)(null), {
        rowIconsOpen: Uk,
        onRowIconsOpen: Hk,
        select: wk
      } = function(kk, ek) {
        const [ik, Dk] = (0, fk.useState)((() => Fk.B.some((ek => void 0 !== kk.hudElements[ek] || kk.hudLocked.includes(ek))))), Sk = (0, fk.useCallback)((kk => {
          ek(kk), (0, Fk.M)(kk) && Dk(!0)
        }), [ek]);
        return {
          rowIconsOpen: ik,
          onRowIconsOpen: Dk,
          select: Sk
        }
      }(Pk, xk), [lk, pk] = (0, fk.useState)([]), [yk, Yk] = (0, fk.useState)(null), [Ck, Ak] = Ae(), dk = (0, fk.useCallback)(((kk, ek, ik) => {
        pk(ek), Ak(ik);
        const Dk = Object.keys(kk);
        Yk((kk => (null === kk || void 0 === kk ? void 0 : kk.size) === Dk.length && Dk.every((ek => kk.has(ek))) ? kk : new Set(Dk)))
      }), [Ak]), {
        gameState: Vk
      } = (0, Mk.n)(["gameState"]), uk = (0, Ai.i)(), qk = null !== (kk = null === (ek = (0, ji.p)()) || void 0 === ek ? void 0 : ek.icon) && void 0 !== kk ? kk : null, [Ik] = (0, fk.useState)((() => "inGame" === Vk ? function(kk, ek, ik) {
        const Dk = kk.querySelector(".InGameUi .TouchComponentsButtons");
        if (!Dk) return re;
        const fk = {},
          Sk = {};
        for (const Mk of be) {
          const kk = Dk.querySelector(`.TouchSlot${Mk} > .TouchKey`);
          if (kk) {
            var bk, rk;
            fk[Mk] = kk.cloneNode(!0);
            const ek = (null !== (bk = null === (rk = kk.querySelector(".TouchKeyLabel")) || void 0 === rk ? void 0 : rk.textContent) && void 0 !== bk ? bk : "").split(/\s+/).filter((kk => !/[\d\xd7]/.test(kk))).join(" ");
            ek && (Sk[Mk] = ek)
          }
        }
        const Pk = ek => {
            const ik = kk.querySelector(`.InGameUi ${ek}`);
            return null !== ik && !ik.classList.contains("Hidden")
          },
          mk = [...kk.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((kk => kk.cloneNode(!0)));
        return {
          faces: Object.keys(fk).length > 0 ? fk : null,
          names: Sk,
          shop: Pk(".TouchInventoryKey.ShopKey"),
          bag: Pk(".TouchInventoryKey.BagKey"),
          items: mk.length > 0 ? mk : null,
          rowIcons: ek,
          pinnedIcon: ik
        }
      }(document, uk, qk) : re)), zk = (0, fk.useRef)(null), Qk = (0, fk.useRef)(null), hk = function(kk) {
        const [ek, ik] = (0, fk.useState)((() => .4 * window.innerHeight));
        return (0, fk.useLayoutEffect)((() => {
          var ek;
          const Dk = null === (ek = kk.current) || void 0 === ek ? void 0 : ek.closest(".SettingsMenuRight");
          if (!Dk) return;
          const fk = () => {
            const kk = Dk.clientHeight < Ii ? .4 : .5;
            ik(Math.max(80, Dk.clientHeight * kk - 24))
          };
          fk();
          const Sk = new ResizeObserver(fk);
          return Sk.observe(Dk), () => {
            Sk.disconnect()
          }
        }), [kk]), ek
      }(Qk), ak = (0, Ci.u)(bk.joystickMode), tk = bk.touchActionButtons, Xk = (0, fk.useMemo)((() => function(kk, ek) {
        const ik = {},
          Dk = [
            ["extra", "X"],
            ["game", "G"]
          ];
        ek || Dk.push(["attack", "P"]);
        for (const [fk, Sk] of Dk) {
          const ek = kk.names[Sk];
          ek && (ik[fk] = ek)
        }
        return ik
      }(Ik, tk)), [Ik, tk]);
      (0, fk.useEffect)((() => {
        (0, jk.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [Bk, ck] = (0, fk.useState)(!1), [Tk, Zk] = (0, fk.useState)(!1), Ok = (0, fk.useRef)(null);
      ni(Ok, !Tk);
      const [gk, Rk] = (0, fk.useState)(!1), Jk = (0, fk.useCallback)((() => {
        Rk(!1)
      }), []), ke = (0, fk.useMemo)((() => new Set(Pk.hudLocked)), [Pk.hudLocked]), ee = kk => {
        var ek, ik;
        const Dk = (0, Fk.o)(),
          fk = kk(Dk);
        (0, Fk.$)(null !== (ek = null === (ik = zk.current) || void 0 === ik ? void 0 : ik.keepLocks(Dk, fk)) && void 0 !== ek ? ek : fk)
      }, ie = (kk, ek) => {
        ee((ik => (0, Fk.eb)(ik, rk, kk, ek)))
      }, fe = (kk, ek, ik) => {
        ie(kk, {
          dx: ek,
          dy: ik
        }), (0, jk.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${kk}`
        })
      }, Se = (kk, ek) => {
        ee((ik => (0, Fk.ib)(ik, rk, kk, ek)))
      }, Pe = kk => {
        const ek = Ek[kk];
        return (ek.move || ek.scale) && ("joystick" !== kk || ak) && !(0, De.t)(kk, Pk.hudElements[kk])
      }, me = kk => Ek[kk].move && ("joystick" !== kk || ak) && !ke.has(kk), Me = new Set(vk.map((kk => kk.id)).filter((kk => {
        const ek = (0, Fk.M)(kk) && !Ik.rowIcons.includes(kk);
        return null === yk || yk.has(kk) || (0, Fk.q)(Pk.hudElements, kk) && !ek
      }))), Ke = {
        present: Me,
        actionButtons: tk,
        keyNames: Xk,
        scaleCaps: Ck,
        sizeBesidePreview: Bk,
        elements: Pk.hudElements,
        selected: Kk,
        onSelect: wk,
        rowIconsOpen: Uk,
        onRowIconsOpen: Hk,
        onScalePreview: (kk, ek) => {
          var ik;
          null === (ik = zk.current) || void 0 === ik || ik.setScale(kk, ek)
        },
        onScale: (kk, ek) => {
          ie(kk, {
            scale: ek
          }), (0, jk.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${kk}`
          })
        },
        onHidden: (kk, ek) => {
          ie(kk, {
            hidden: ek
          }), (0, jk.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${ek?"hide":"show"}:${kk}`
          })
        },
        onReset: kk => {
          ie(kk, Fk.b)
        },
        locked: ke,
        lockable: Pe,
        onLocked: Se,
        note: (kk, ek) => {
          const Dk = ek && lk.length > 0 ? ik("hudLayout:overlapsNote", {
            names: Wk(lk, tk, ik, Xk)
          }) : null;
          return ek && Gk(kk, ak) ? (0, Lk.jsxs)(Lk.Fragment, {
            children: [Dk && (0, Lk.jsx)("span", {
              children: Dk
            }), (0, Lk.jsx)("span", {
              children: ik("hudLayout:floatingJoystickNote")
            }), !Bk && (0, Lk.jsx)(Nk, {})]
          }) : Dk || (ek && ke.has(kk) ? ik("hudLayout:lockedNote") : ek && "cluster" === kk ? ik("hudLayout:clusterNote") : ek && "menu" === kk ? ik("hudLayout:menuNote") : ek && (0, De.t)(kk, Pk.hudElements[kk]) && me(kk) ? ik("hudLayout:rowIconNote") : ek && "arrows" === kk ? ik("hudLayout:arrowsNote") : "inventory" === kk && (0, Fk.q)(Pk.hudElements, "inventory") ? ik("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, Lk.jsxs)("div", {
        ref: Qk,
        className: "HudLayoutSettings",
        children: [(0, Lk.jsxs)("div", {
          ref: Ok,
          className: "HudLayoutBody",
          children: [(0, Lk.jsx)("div", {
            className: "HudLayoutOrientation",
            children: ik("landscape" === rk ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, Lk.jsx)(Yi, {
            preview: {
              layout: Sk,
              orientation: rk,
              selected: Kk,
              onSelect: wk,
              onMove: fe,
              canMove: me,
              actionButtons: tk,
              joystickFixed: ak,
              presence: Ik,
              keyNames: Xk,
              maxHeight: hk,
              apiRef: zk,
              onMeasured: dk,
              onReady: Zk,
              lockable: Pe
            },
            quick: {
              layout: Pk,
              actionButtons: tk,
              keyNames: Xk,
              scaleCaps: Ck,
              overlaps: lk,
              onScale: Ke.onScale,
              onHidden: Ke.onHidden,
              onReset: Ke.onReset,
              locked: ke,
              lockable: Pe,
              onLocked: Se
            },
            onFullScreen: () => {
              Rk(!0)
            },
            resting: gk,
            onSidePanel: ck
          }), gk && (0, Lk.jsx)(Hi, {
            layout: Sk,
            orientation: rk,
            selected: Kk,
            onSelect: wk,
            onMove: fe,
            canMove: me,
            actionButtons: tk,
            joystickFixed: ak,
            presence: Ik,
            keyNames: Xk,
            onScale: Ke.onScale,
            onHidden: Ke.onHidden,
            onReset: Ke.onReset,
            locked: ke,
            lockable: Pe,
            onLocked: Se,
            apiRef: zk,
            onClose: Jk
          }), (0, Lk.jsx)(ui, {
            safe: Pk.hudSafe,
            onCommit: kk => {
              ee((ek => (0, Fk.jb)(ek, rk, kk)))
            },
            onPreview: kk => {
              var ek;
              null === (ek = zk.current) || void 0 === ek || ek.setSafe(kk)
            }
          }), (0, Lk.jsx)(nk.e, {
            label: ik("hudLayout:snapCentre"),
            checked: Sk.hudSnapCentre,
            onClick: kk => {
              (0, Fk.Y)(kk)
            },
            circleInfoText: ik("hudLayout:snapCentreInfo")
          }), (0, Lk.jsx)(yi, {
            ...Ke
          }), (0, Lk.jsx)(nk.i, {
            label: ik("hudLayout:shape"),
            options: Fk.D.map((kk => ({
              value: kk,
              label: ik(`hudLayout:shape_${kk}`)
            }))),
            value: Sk.hudShape,
            onChange: kk => {
              ee((ek => ({
                ...ek,
                hudShape: kk
              }))), (0, jk.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: kk
              })
            }
          }), (0, Lk.jsx)(nk.m, {
            name: ik("hudLayout:opacity"),
            min: Fk.c,
            max: 1,
            step: .05,
            initValue: Sk.hudKeyOpacity,
            format: kk => `${Math.round(100*kk)}%`,
            circleInfoText: ik("hudLayout:opacityInfo"),
            onChange: kk => {
              var ek;
              null === (ek = zk.current) || void 0 === ek || ek.setOpacity(kk)
            },
            onChangeComplete: kk => {
              (0, Fk.U)(kk), (0, jk.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, Lk.jsx)(mk.R, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const kk = sk.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await kk.getResult() && (0, Fk.Q)()
            }()
          },
          children: ik("hudLayout:resetAll")
        })]
      })
    }
    const Ii = 350;
    const zi = [function() {
      const {
        t: kk
      } = (0, Dk.D)(), [ek, ik] = (0, fk.useState)(!1), Sk = (0, fk.useRef)(null);
      return (0, fk.useEffect)((() => {
        var kk;
        ek && (null === (kk = Sk.current) || void 0 === kk || kk.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [ek]), (0, Lk.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, Lk.jsxs)("button", {
          ref: Sk,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": ek,
          onClick: () => {
            ik(!ek)
          },
          children: [(0, Lk.jsx)(dk.d, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, Lk.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, Lk.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: kk("hudLayout:title")
            }), (0, Lk.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: kk("hudLayout:entrySub")
            })]
          }), (0, Lk.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), ek && (0, Lk.jsx)(qi, {})]
      })
    }, function() {
      const {
        t: kk
      } = (0, Dk.D)(), {
        joystickMode: ek,
        touchSpeedCurve: ik,
        autorun: fk,
        jumpLock: Sk
      } = (0, Mk.n)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Lk.jsxs)(Lk.Fragment, {
        children: [(0, Lk.jsx)(nk.i, {
          label: kk("settingsMenu:joystick"),
          options: Yk.zb.map((ek => ({
            value: ek,
            label: kk(Ck[ek])
          }))),
          value: ek,
          onChange: kk => {
            Mk.b.setClientEscMenuOptions({
              joystickMode: kk
            })
          },
          circleInfoText: kk("settingsMenu:joystickInfo")
        }), (0, Lk.jsx)(nk.e, {
          label: kk("settingsMenu:preciseWalking"),
          checked: ik,
          onClick: kk => {
            Mk.b.setClientEscMenuOptions({
              touchSpeedCurve: kk
            })
          },
          circleInfoText: kk("settingsMenu:preciseWalkingInfo")
        }), (0, Lk.jsx)(nk.e, {
          label: kk("settingsMenu:autoRun"),
          checked: fk,
          onClick: kk => {
            Mk.b.setClientEscMenuOptions({
              autorun: kk
            })
          },
          circleInfoText: kk("settingsMenu:autoRunInfo")
        }), (0, Lk.jsx)(nk.e, {
          label: kk("settingsMenu:jumpLock"),
          checked: Sk,
          onClick: kk => {
            Mk.b.setClientEscMenuOptions({
              jumpLock: kk
            })
          },
          circleInfoText: kk("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, Lk.jsx)(yk.b, {})
    }, function() {
      const {
        t: kk
      } = (0, Dk.D)(), {
        clientEscMenuOptions: ek
      } = (0, Mk.n)(["clientEscMenuOptions"]);
      return (0, Ak.d)() ? (0, Lk.jsx)(nk.e, {
        label: kk("settingsMenu:vibration"),
        checked: ek.vibration,
        onClick: kk => {
          Mk.b.setClientEscMenuOptions({
            vibration: kk
          })
        },
        circleInfoText: kk("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Qi() {
      return (0, Lk.jsx)(Lk.Fragment, {
        children: zi.map(((kk, ek) => (0, Lk.jsx)(kk, {}, ek)))
      })
    }
    var vi = ik(4327);

    function Ei() {
      const {
        t: kk
      } = (0, Dk.D)(), {
        isTouchScreen: ek,
        clientEscMenuOptions: ik,
        gameState: bk
      } = (0, Mk.n)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), rk = (0, Uk.e)("ezBridging"), Pk = (0, Uk.e)("ezTowering"), wk = "inGame" !== bk || !0 === rk, lk = (0, Hk.g)() && ("inGame" !== bk || !0 === Pk), [, yk] = (0, fk.useReducer)((kk => kk + 1), 0), Yk = (0, pk.g)(), [Ck, Ak] = (0, fk.useState)(vi.f);
      return (0, Lk.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Yk && (0, Lk.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, Lk.jsx)("div", {
            children: kk("controller:settingsControlsNote")
          }), (0, Lk.jsx)(mk.X, {
            onClick: () => {
              Mk.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: kk("controller:settingsOpenController")
          })]
        }), (0, Kk.isTouchscreen)() && !(0, Kk.isMobile)() ? (0, Lk.jsx)(Lk.Fragment, {
          children: (0, Lk.jsx)(nk.e, {
            label: kk("settingsMenu:useTouchControls"),
            checked: Ck,
            onClick: kk => {
              (0, vi.d)(kk), Ak(kk)
            }
          })
        }) : null, ek && (0, Lk.jsx)(Qi, {}), wk && (0, Lk.jsx)(nk.e, {
          label: kk("settingsMenu:ezBridging"),
          checked: ik.ezBridging,
          onClick: kk => {
            Mk.b.setClientEscMenuOptions({
              ezBridging: kk
            })
          },
          circleInfoText: kk("settingsMenu:ezBridgingInfo")
        }), lk && (0, Lk.jsx)(nk.e, {
          label: kk("settingsMenu:ezTowering"),
          checked: ik.ezTowering,
          onClick: kk => {
            Mk.b.setClientEscMenuOptions({
              ezTowering: kk
            })
          },
          circleInfoText: kk("settingsMenu:ezToweringInfo")
        }), (0, Lk.jsx)(nk.e, {
          label: kk("settingsMenu:crouchToggle"),
          checked: ik.crouchIsToggle,
          onClick: kk => {
            Mk.b.setClientEscMenuOptions({
              crouchIsToggle: kk
            })
          },
          circleInfoText: kk("settingsMenu:crouchToggleInfo")
        }), (0, Lk.jsx)(nk.e, {
          label: kk("settingsMenu:hideUiToggle"),
          checked: ik.hideUiIsToggle,
          onClick: kk => {
            Mk.b.setClientEscMenuOptions({
              hideUiIsToggle: kk
            })
          },
          circleInfoText: kk("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, xk.d)() && (0, Lk.jsx)(nk.m, {
          name: kk("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: ik.touchscreenSensitivity,
          onChange: kk => {
            Mk.b.setClientEscMenuOptions({
              touchscreenSensitivity: kk
            })
          }
        }), !(0, Kk.isMobile)() && (0, Lk.jsx)(nk.m, {
          name: kk("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: ik.mouseSensitivity,
          onChange: kk => {
            Mk.b.setClientEscMenuOptions({
              mouseSensitivity: kk
            })
          }
        }), !(0, Kk.isMobile)() && (0, Lk.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Lk.jsx)("div", {
            className: "SliderText",
            children: kk("settingsMenu:keyBindings")
          }), Sk.d.map((ek => (0, Lk.jsx)(ai, {
            title: kk(ek.name.translationKey, ek.name.params),
            defaultOpen: Sk.h.has(ek.id),
            children: ek.actions.map((kk => (0, Lk.jsx)(Wi, {
              noaAction: kk,
              forceUpdate: yk,
              clashesWith: ek.clashesWith,
              showPadGlyph: Yk
            }, kk)))
          }, ek.name.translationKey))), (0, Lk.jsx)(mk.R, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, Sk.E)(), yk()
            },
            children: kk("controls:resetBindings")
          })]
        })]
      })
    }

    function ai(kk) {
      let {
        title: ek,
        defaultOpen: ik,
        children: Dk
      } = kk;
      const [Sk, bk] = (0, fk.useState)(ik);
      return (0, Lk.jsxs)("div", {
        className: Pk()("ControlsSection", {
          Collapsed: !Sk
        }),
        children: [(0, Lk.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            bk(!Sk)
          },
          children: [(0, Lk.jsx)("div", {
            className: "ControlsSectionTitle",
            children: ek
          }), (0, Lk.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), Sk && (0, Lk.jsx)("div", {
          className: "ControlsSectionRows",
          children: Dk
        })]
      })
    }

    function Wi(kk) {
      let {
        noaAction: ek,
        forceUpdate: ik,
        clashesWith: rk,
        showPadGlyph: Mk
      } = kk;
      const {
        t: Kk
      } = (0, Dk.D)(), xk = (0, lk.e)(ek), [nk, Uk] = (0, fk.useState)(!1), [Hk, pk] = (0, fk.useState)("controls:clickToEnterNewBinding"), [yk, Yk] = (0, fk.useState)(null), [Ck, Ak] = (0, fk.useState)(null), jk = (0, fk.useRef)(null);
      (0, fk.useEffect)((() => {
        nk && jk.current && jk.current.focus()
      }), [nk]);
      const sk = Sk.u[ek].filter((kk => bk.j[kk]));
      let dk = null;
      const Vk = [],
        Fk = rk.flatMap((kk => {
          var ek, ik;
          return null !== (ek = null === (ik = Sk.d.find((ek => ek.id === kk))) || void 0 === ik ? void 0 : ik.actions) && void 0 !== ek ? ek : []
        }));
      for (const Dk of Fk) {
        if (Dk === ek) continue;
        const kk = Sk.u[Dk];
        for (const ek of kk) sk.includes(ek) && Vk.push(Kk(Sk.y[Dk].translationKey, Sk.y[Dk].params))
      }
      Vk.length > 0 && (dk = Kk("controls:sharedBindingsWarning") + " ", dk += Vk.join(", "));
      const uk = () => {
          Uk(!1), Yk(null), pk("controls:clickToEnterNewBinding"), Ak(null)
        },
        qk = () => "BindingInput_" + ek;
      return (0, Lk.jsxs)("div", {
        className: Pk()("ControlRow", {
          WarningBorder: null !== dk
        }),
        children: [(0, Lk.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Lk.jsxs)("div", {
            className: "ControlName",
            children: [Kk(Sk.y[ek].translationKey, Sk.y[ek].params), Mk && xk && (0, Lk.jsx)(wk.c, {
              glyph: xk,
              className: "ControlPadGlyph"
            })]
          }), (0, Lk.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Lk.jsxs)("div", {
              className: "ControlBindingsList",
              children: [sk.map((kk => (0, Lk.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Lk.jsx)("div", {
                  children: (0, Sk.o)(kk)
                }), (0, Lk.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Dk = (0, Sk.A)(ek, kk);
                    Dk.isError() ? Ak(Dk.asError().message) : Ak(null), ik()
                  },
                  children: "\xd7"
                })]
              }, kk))), !nk && (0, Lk.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  Uk(!0), Ak(null)
                },
                children: (0, Lk.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), nk && (0, Lk.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Lk.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Lk.jsx)("div", {
                  className: "InputOverlay",
                  children: yk ? (0, Sk.o)(yk) : (0, Lk.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Kk(Hk)
                  })
                }), (0, Lk.jsx)("input", {
                  ref: jk,
                  id: qk(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: kk => {
                    if ("Escape" === kk.code) return uk(), kk.preventDefault(), void kk.stopPropagation();
                    const ek = kk.code;
                    bk.e.includes(ek) ? (Ak(null), Yk(ek)) : (Ak("controls:keyIsReserved"), Yk(null)), kk.preventDefault(), kk.stopPropagation()
                  },
                  onMouseDown: kk => {
                    const ek = "Mouse" + (kk.button + 1);
                    document.activeElement && document.activeElement.id === qk() ? bk.e.includes(ek) ? (Ak(null), Yk(ek)) : (Ak("controls:keyIsReserved"), Yk(null)) : pk("controls:enterNewBinding"), kk.stopPropagation()
                  },
                  onBlur: () => {
                    pk("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Lk.jsx)(mk.f, {
                onPointerDown: kk => {
                  kk.preventDefault()
                },
                onClick: () => {
                  (0, Sk.b)(ek, yk), ik(), uk()
                },
                className: "ControlBindingAddButton",
                disabled: null === yk,
                children: Kk("general:add")
              }), (0, Lk.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  uk()
                },
                children: "\xd7"
              })]
            }), Ck && (0, Lk.jsx)("div", {
              className: "ControlBindingError",
              children: Kk(Ck)
            })]
          })]
        }), dk && (0, Lk.jsx)("div", {
          className: "ControlRowWarning",
          children: dk
        })]
      })
    }
  },
  8516: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => lk,
      f: () => wk,
      j: () => Mk,
      k: () => pk,
      o: () => yk,
      q: () => xk
    });
    var Dk = ik(1642),
      fk = ik(1696);
    const Sk = kk => kk >= 56320 && kk <= 57343,
      bk = kk => kk >= 55296 && kk <= 56319,
      rk = (kk, ek) => ek >= 2 && Sk(kk.charCodeAt(ek - 1)) && bk(kk.charCodeAt(ek - 2)) ? ek - 2 : Math.max(0, ek - 1),
      Pk = (kk, ek) => {
        let ik;
        var Dk, fk;
        return ik = kk.start !== kk.end ? ek < 0 ? kk.start : kk.end : ek < 0 ? rk(kk.value, kk.start) : (Dk = kk.value, (fk = kk.start) + 1 < Dk.length && bk(Dk.charCodeAt(fk)) && Sk(Dk.charCodeAt(fk + 1)) ? fk + 2 : Math.min(Dk.length, fk + 1)), {
          value: kk.value,
          start: ik,
          end: ik
        }
      },
      mk = ["text", "search", "url", "email", "tel", "password", "number"],
      Mk = kk => !(!(0, fk.e)(kk) || kk.isContentEditable || kk.hasAttribute("data-pad-no-osk")) && (kk instanceof HTMLTextAreaElement || kk instanceof HTMLInputElement && mk.includes(kk.type)),
      Kk = kk => null !== kk.selectionStart,
      xk = kk => {
        var ek, ik;
        const {
          value: Dk
        } = kk;
        return {
          value: Dk,
          start: null !== (ek = kk.selectionStart) && void 0 !== ek ? ek : Dk.length,
          end: null !== (ik = kk.selectionEnd) && void 0 !== ik ? ik : Dk.length
        }
      },
      nk = (kk, ek, ik) => {
        if (kk.readOnly) return;
        const fk = kk instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(fk, "value").set.call(kk, ek.value), Kk(kk) && kk.setSelectionRange(ek.start, ek.end), (0, Dk.f)(kk, new InputEvent("input", {
          bubbles: !0,
          inputType: ik
        }))
      };
    let Uk = !1;
    const Hk = (kk, ek) => !!document.execCommand(kk, !1, ek) || (Uk || (Uk = !0, console.warn(`execCommand("${kk}") failed; the on-screen keyboard is setting the value directly`)), !1),
      wk = (kk, ek) => {
        Hk("insertText", ek) || nk(kk, function(kk, ek) {
          let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Dk = kk.value.slice(0, kk.start),
            fk = kk.value.slice(kk.end);
          let Sk = ik < 0 ? ek.length : Math.max(0, ik - Dk.length - fk.length);
          Sk > 0 && Sk < ek.length && bk(ek.charCodeAt(Sk - 1)) && Sk--;
          const rk = ek.slice(0, Sk),
            Pk = Dk.length + rk.length;
          return {
            value: Dk + rk + fk,
            start: Pk,
            end: Pk
          }
        }(xk(kk), ek, kk.maxLength), "insertText")
      },
      lk = kk => {
        Hk("delete") || nk(kk, (kk => {
          const ek = kk.start === kk.end ? rk(kk.value, kk.start) : kk.start;
          return {
            value: kk.value.slice(0, ek) + kk.value.slice(kk.end),
            start: ek,
            end: ek
          }
        })(xk(kk)), "deleteContentBackward")
      },
      pk = (kk, ek) => {
        if (!Kk(kk)) return;
        const ik = Pk(xk(kk), ek);
        kk.setSelectionRange(ik.start, ik.end)
      },
      yk = kk => {
        Kk(kk) && 0 === kk.selectionStart && 0 === kk.selectionEnd && kk.setSelectionRange(kk.value.length, kk.value.length)
      }
  },
  8676: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk
    });
    var Dk = ik(22),
      fk = ik(2092),
      Sk = ik(1333),
      bk = ik(1371);
    const rk = async () => {
      if ((0, bk.d)()) {
        if (!0 !== await Sk.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Dk.b.get("gameState")) return
      }(0, fk.b)()
    }
  },
  8680: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Pk,
      h: () => Sk,
      j: () => bk,
      k: () => fk,
      o: () => rk
    });
    var Dk = ik(1916);
    const fk = "controllerPadShopOpen",
      Sk = kk => Dk.i.includes(kk),
      bk = kk => Object.values(kk).some((kk => !1 !== kk.canBuy && !kk.isRewardedAd)),
      rk = (kk, ek, ik) => {
        var Dk, fk, bk, rk;
        const Pk = kk.filter((kk => !Sk(kk))),
          mk = null !== ek && kk.includes(ek) ? ek : null;
        return null !== mk && !Sk(mk) && ik(mk) ? mk : null !== (Dk = null !== (fk = null !== (bk = null !== (rk = Pk.find(ik)) && void 0 !== rk ? rk : Pk[0]) && void 0 !== bk ? bk : mk) && void 0 !== fk ? fk : kk[0]) && void 0 !== Dk ? Dk : null
      },
      Pk = kk => kk.userInput || kk.isRewardedAd || "boolean" === typeof kk.isSelected ? null : JSON.stringify([kk.image, kk.cost, kk.currency, kk.amount, kk.customTitle, kk.buyButtonText, kk.description, kk.canBuy])
  },
  8696: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => mk,
      g: () => Mk
    });
    var Dk = ik(60),
      fk = ik(1406),
      Sk = ik(1969),
      bk = ik(1375),
      rk = ik(1394),
      Pk = ik(1066);
    const mk = () => {
        const kk = (0, bk.s)();
        if ((0, Dk.useEffect)((() => {
            (0, bk.m)()
          }), []), !kk) return null;
        const {
          ControllerCategory: ek
        } = kk;
        return (0, Pk.jsx)(rk.c, {
          children: (0, Pk.jsx)(ek, {})
        })
      },
      Mk = () => {
        var kk;
        const ek = (0, bk.s)(),
          [, ik] = (0, Dk.useReducer)((kk => kk + 1), 0);
        return (0, fk.c)(Sk.e, ik), null !== (kk = null === ek || void 0 === ek ? void 0 : ek.hasActivePad()) && void 0 !== kk && kk
      }
  },
  8522: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk,
      h: () => mk,
      j: () => Hk,
      l: () => Kk,
      o: () => Uk,
      s: () => Sk,
      t: () => nk,
      v: () => bk,
      z: () => xk
    });
    const Dk = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      fk = (kk, ek) => {
        if ("function" === typeof kk.checkVisibility) return !kk.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: ek,
          checkOpacity: ek
        });
        const {
          visibility: ik
        } = getComputedStyle(kk);
        if ("hidden" === ik || "collapse" === ik) return !0;
        if (!ek) return !1;
        for (let Dk = kk; Dk; Dk = Dk.parentElement)
          if ("0" === getComputedStyle(Dk).opacity) return !0;
        return !1
      },
      Sk = kk => {
        if (!kk.isConnected || fk(kk, !0)) return !1;
        const ek = kk.getBoundingClientRect();
        return ek.width > 0 && ek.height > 0
      },
      bk = kk => !!kk.matches(":disabled, [aria-disabled='true']") || "button" === kk.getAttribute("role") && "-1" === kk.getAttribute("tabindex"),
      rk = kk => {
        var ek;
        if (kk.closest("[data-pad-ignore]")) return !0;
        return !!(null === (ek = kk.parentElement) || void 0 === ek ? void 0 : ek.closest("[data-pad-focusable]"))
      },
      Pk = kk => {
        const ek = kk.querySelectorAll(Dk);
        return kk.matches(Dk) ? [kk, ...ek] : ek
      },
      mk = kk => {
        const ek = [];
        for (const ik of Pk(kk)) !rk(ik) && Sk(ik) && ek.push(ik);
        return ek
      },
      Mk = new WeakMap,
      Kk = kk => {
        const ek = Mk.get(kk);
        if (ek && xk(ek, kk)) return !0;
        for (const ik of Pk(kk))
          if (!rk(ik) && Sk(ik)) return Mk.set(kk, ik), !0;
        return Mk.delete(kk), !1
      },
      xk = (kk, ek) => ek.contains(kk) && kk.matches(Dk) && !rk(kk) && Sk(kk),
      nk = (kk, ek) => xk(kk, ek) && !bk(kk),
      Uk = kk => {
        for (const ek of kk.querySelectorAll("[data-pad-initial-area]"))
          if (!fk(ek, !1)) return !0;
        return !1
      },
      Hk = kk => {
        const ek = ek => {
          let ik = 0;
          for (let Dk = ek.parentElement; Dk && Dk !== kk; Dk = Dk.parentElement) ik++;
          return ik
        };
        return [...kk.querySelectorAll("[data-pad-initial-area]")].filter(Sk).sort(((kk, ik) => ek(ik) - ek(kk)))
      }
  },
  8505: (kk, ek, ik) => {
    ik.d(ek, {
      B: () => Ck,
      E: () => Ak,
      G: () => wk,
      H: () => Pk,
      L: () => Mk,
      b: () => lk,
      c: () => sk,
      d: () => Lk,
      h: () => Yk,
      i: () => Uk,
      j: () => Hk,
      m: () => xk,
      n: () => nk,
      q: () => jk,
      u: () => mk,
      x: () => dk
    });
    var Dk = ik(26),
      fk = ik(1642),
      Sk = ik(8511),
      bk = ik(8516),
      rk = ik(8522);
    const Pk = kk => (0, bk.j)(kk),
      mk = kk => {
        const ek = kk.getBoundingClientRect();
        return {
          x: ek.left + ek.width / 2,
          y: ek.top + ek.height / 2
        }
      },
      Mk = (kk, ek, ik) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: kk.x,
        clientY: kk.y,
        screenX: kk.x,
        screenY: kk.y,
        button: ek,
        buttons: ik,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      Kk = (kk, ek) => {
        (0, fk.f)(kk, ek)
      },
      xk = function(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Dk = 0 === ik ? 1 : 2;
        Kk(kk, new PointerEvent("pointerdown", Mk(ek, ik, Dk))), Kk(kk, new MouseEvent("mousedown", Mk(ek, ik, Dk)))
      },
      nk = function(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Kk(kk, new PointerEvent("pointerup", Mk(ek, ik, 0))), Kk(kk, new MouseEvent("mouseup", Mk(ek, ik, 0)))
      },
      Uk = function(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        xk(kk, ek, ik), nk(kk, ek, ik), Kk(kk, 0 === ik ? new MouseEvent("click", Mk(ek, 0, 0)) : new MouseEvent("contextmenu", Mk(ek, 2, 0)))
      },
      Hk = function(kk, ek, ik) {
        let {
          leaveBelow: Dk = null,
          enterBelow: fk = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (kk !== ek) {
          if (null !== kk && void 0 !== kk && kk.isConnected) {
            const fk = {
              ...Mk(ik, 0, 0),
              relatedTarget: ek
            };
            Kk(kk, new PointerEvent("pointerout", fk)), Kk(kk, new MouseEvent("mouseout", fk));
            const Sk = kk => !!ek && kk.contains(ek) || !!Dk && kk.contains(Dk);
            for (let ek = kk; ek && !Sk(ek); ek = ek.parentElement) Kk(ek, new PointerEvent("pointerleave", {
              ...fk,
              bubbles: !1
            })), Kk(ek, new MouseEvent("mouseleave", {
              ...fk,
              bubbles: !1
            }))
          }
          if (ek) {
            const Dk = {
              ...Mk(ik, 0, 0),
              relatedTarget: kk
            };
            Kk(ek, new PointerEvent("pointerover", Dk)), Kk(ek, new MouseEvent("mouseover", Dk));
            const Sk = [],
              bk = ek => !(null === kk || void 0 === kk || !kk.isConnected) && ek.contains(kk) || !!fk && ek.contains(fk);
            for (let kk = ek; kk && !bk(kk); kk = kk.parentElement) Sk.push(kk);
            for (const kk of Sk.reverse()) Kk(kk, new PointerEvent("pointerenter", {
              ...Dk,
              bubbles: !1
            })), Kk(kk, new MouseEvent("mouseenter", {
              ...Dk,
              bubbles: !1
            }));
            Kk(ek, new PointerEvent("pointermove", Mk(ik, 0, 0))), Kk(ek, new MouseEvent("mousemove", Mk(ik, 0, 0)))
          }
        } else ek && (Kk(ek, new PointerEvent("pointermove", Mk(ik, 0, 0))), Kk(ek, new MouseEvent("mousemove", Mk(ik, 0, 0))))
      },
      wk = kk => {
        Dk.j.tm(Sk.f, kk)
      },
      lk = kk => {
        if (Pk(kk)) return void wk(kk);
        const ek = kk.hasAttribute("data-pad-focusable") ? kk.querySelector("a[href]") : null,
          ik = null !== ek && void 0 !== ek ? ek : kk;
        Uk(ik, mk(ik))
      },
      pk = ".Dropdown-root.is-open",
      yk = kk => {
        const ek = kk.querySelector(".Dropdown-control");
        return lk(ek), ek
      },
      Yk = kk => {
        var ek;
        const ik = null !== (ek = kk.closest(pk)) && void 0 !== ek ? ek : kk.querySelector(pk);
        return ik ? yk(ik) : null
      },
      Lk = kk => {
        for (const ek of document.querySelectorAll(pk)) ek.contains(kk) || yk(ek)
      },
      Ck = kk => null !== kk.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      Ak = kk => {
        const ek = kk ? document.elementFromPoint(kk.x, kk.y) : null;
        return !(null === ek || void 0 === ek || !ek.closest("[data-pad-repeat]"))
      },
      jk = kk => {
        var ek;
        return null !== (ek = [...kk.querySelectorAll("[data-pad-back]")].find(rk.s)) && void 0 !== ek ? ek : null
      },
      sk = kk => {
        const ek = jk(kk);
        return !!ek && (lk(ek), !0)
      },
      dk = kk => {
        var ek, ik, Dk, fk;
        return null !== (ek = null !== (ik = null !== (Dk = kk.getAttribute("data-pad-key")) && void 0 !== Dk ? Dk : kk.getAttribute("href")) && void 0 !== ik ? ik : null === (fk = kk.querySelector("a[href]")) || void 0 === fk ? void 0 : fk.getAttribute("href")) && void 0 !== ek ? ek : null
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);