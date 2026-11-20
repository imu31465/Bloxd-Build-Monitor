export const id = 154;
export const ids = [154];
export const modules = {
  8556: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => bk
    });
    var Rk = Bk(22),
      tk = Bk(1149),
      ak = Bk(4688),
      Xk = Bk(1069);

    function bk(kk) {
      let {
        note: Fk
      } = kk;
      const {
        t: Bk
      } = (0, tk.x)(), {
        clientEscMenuOptions: bk
      } = (0, Rk.h)(["clientEscMenuOptions"]);
      return (0, Xk.jsx)(ak.e, {
        label: Bk("touchSettings:actionButtons"),
        checked: bk.touchActionButtons,
        onClick: kk => {
          Rk.c.setClientEscMenuOptions({
            touchActionButtons: kk
          })
        },
        circleInfoText: Bk("touchSettings:actionButtonsInfo"),
        note: Fk
      })
    }
  },
  8540: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => GB,
      e: () => cB
    });
    var Rk = Bk(1149),
      tk = Bk(61),
      ak = Bk(1881),
      Xk = Bk(1892),
      bk = Bk(1020),
      wk = Bk.n(bk),
      dk = Bk(1389),
      sk = Bk(22),
      Vk = Bk(98),
      Jk = Bk(112),
      Ak = Bk(4688),
      ek = Bk(2320),
      yk = Bk(271),
      fk = Bk(1897),
      mk = Bk(1903),
      Wk = Bk(8548),
      vk = Bk(8556),
      ik = Bk(279),
      Yk = Bk(1069);
    const Lk = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Ok = Bk(8565);
    var Ek = Bk(1418),
      Sk = Bk(1300),
      Nk = Bk(1028),
      Hk = Bk(1355),
      uk = Bk(2340);
    const Mk = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(uk.D.map((kk => [kk, "menu"])))
      },
      gk = kk => uk.w.filter((Fk => Mk[Fk] === kk)),
      Uk = new Set(gk("cluster")),
      ck = ["cluster"],
      Gk = [...ck, ...uk.w.filter((kk => !ck.includes(kk) && !Mk[kk]))],
      Tk = Gk.flatMap((kk => [kk, ...gk(kk)])).map((kk => ({
        id: kk,
        label: `hudLayout:${kk}`,
        ...uk.v[kk],
        parent: Mk[kk]
      }))),
      rk = Object.fromEntries(Tk.map((kk => [kk.id, kk]))),
      Dk = "data-hud-el";

    function zk(kk, Fk, Bk, Rk) {
      const tk = Bk(function(kk, Fk) {
          return "attack" !== kk || Fk ? rk[kk].label : "hudLayout:attackContext"
        }(kk, Fk)),
        ak = Rk[kk];
      return ak ? Bk("hudLayout:slotWithKey", {
        slot: tk,
        key: ak
      }) : tk
    }

    function Pk(kk, Fk, Bk, Rk) {
      return kk.map((kk => zk(kk, Fk, Bk, Rk))).join(", ")
    }

    function hk(kk) {
      let {
        className: Fk,
        keepPlace: Bk
      } = kk;
      return Bk ? (0, Yk.jsx)("div", {
        className: wk()(Fk, "Placeholder")
      }) : null
    }

    function qk(kk) {
      let {
        id: Fk,
        elements: Bk,
        actionButtons: tk,
        keyNames: ak,
        className: Xk,
        keepPlace: bk,
        onHidden: wk
      } = kk;
      const {
        t: sk
      } = (0, Rk.x)();
      if (!rk[Fk].hide) return (0, Yk.jsx)(hk, {
        className: Xk,
        keepPlace: bk
      });
      const Vk = (0, uk.r)(Bk, Fk);
      return (0, Yk.jsx)(dk.O, {
        className: Xk,
        ariaLabel: sk(Vk ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: zk(Fk, tk, sk, ak)
        }),
        pressed: !Vk,
        onClick: () => {
          wk(Fk, !Vk)
        },
        children: (0, Yk.jsx)(Nk.d, {
          name: Vk ? "eye-slash" : "eye"
        })
      })
    }

    function Ck(kk) {
      var Fk;
      let {
        id: Bk,
        elements: tk,
        actionButtons: ak,
        keyNames: Xk,
        className: bk,
        keepPlace: wk,
        onlyWhenMoved: sk,
        locked: Vk,
        onReset: Jk
      } = kk;
      const {
        t: Ak
      } = (0, Rk.x)(), ek = rk[Bk], yk = (0, uk.H)(null !== (Fk = tk[Bk]) && void 0 !== Fk ? Fk : uk.n);
      return !ek.move && !ek.scale || sk && yk ? (0, Yk.jsx)(hk, {
        className: bk,
        keepPlace: wk
      }) : (0, Yk.jsx)(dk.O, {
        className: bk,
        disabled: yk || Vk,
        ariaLabel: Ak("hudLayout:resetElement", {
          name: zk(Bk, ak, Ak, Xk)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: Bk
        },
        onClick: kk => {
          sk && xk(kk.currentTarget), Jk(Bk)
        },
        children: (0, Yk.jsx)(Nk.d, {
          name: "rotate-left"
        })
      })
    }

    function Zk(kk) {
      let {
        id: Fk,
        actionButtons: Bk,
        keyNames: tk,
        className: ak,
        keepPlace: Xk,
        locked: bk,
        lockable: wk,
        onLocked: sk
      } = kk;
      const {
        t: Vk
      } = (0, Rk.x)();
      return wk || bk ? (0, Yk.jsx)(dk.O, {
        className: ak,
        ariaLabel: Vk(bk ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: zk(Fk, Bk, Vk, tk)
        }),
        pressed: bk,
        active: bk,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${bk?"unlock":"lock"}:${Fk}`
        },
        onClick: () => {
          sk(Fk, !bk)
        },
        children: (0, Yk.jsx)(Nk.d, {
          name: bk ? "lock" : "lock-open"
        })
      }) : (0, Yk.jsx)(hk, {
        className: ak,
        keepPlace: Xk
      })
    }

    function pk(kk) {
      let {
        className: Fk,
        open: Bk,
        name: tk,
        onToggle: ak
      } = kk;
      const {
        t: Xk
      } = (0, Rk.x)();
      return (0, Yk.jsx)(dk.O, {
        className: Fk,
        ariaLabel: Xk(Bk ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: tk
        }),
        pressed: Bk,
        analyticsClick: {
          id: "hud_layout.children",
          value: Bk ? "close" : "open"
        },
        onClick: () => {
          ak(!Bk)
        },
        children: (0, Yk.jsx)(Nk.d, {
          name: Bk ? "angle-up" : "angle-down"
        })
      })
    }

    function Kk(kk, Fk) {
      var Bk;
      kk.contains(document.activeElement) && Fk.focus({
        preventScroll: !0
      }), null === (Bk = (0, Hk.d)()) || void 0 === Bk || Bk.handOverPadFocus(kk, Fk)
    }

    function xk(kk) {
      const Fk = kk.closest("[data-hud-row]"),
        Bk = null === Fk || void 0 === Fk ? void 0 : Fk.querySelector(".HudElementRowName");
      return !(!Fk || !Bk) && (Kk(Fk, Bk), !0)
    }
    const jk = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function lk(kk, Fk) {
      return "joystick" === kk && !Fk
    }

    function nk() {
      const {
        t: kk
      } = (0, Rk.x)();
      return (0, Yk.jsx)(dk.O, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: kk => {
          const Fk = kk.currentTarget;
          if (!xk(Fk)) {
            const kk = function(kk) {
              var Fk, Bk;
              const Rk = [kk.previousElementSibling, kk.nextElementSibling].find((kk => kk instanceof HTMLElement && kk.matches(jk)));
              return null !== (Fk = null !== Rk && void 0 !== Rk ? Rk : null === (Bk = kk.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === Bk ? void 0 : Bk.querySelector(`:is(${jk}):not(.HudFixJoystickButton)`)) && void 0 !== Fk ? Fk : null
            }(Fk);
            kk && Kk(Fk, kk)
          }
          sk.c.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: kk("hudLayout:fixJoystick")
      })
    }
    var Ik = Bk(67),
      Qk = Bk(1230),
      kF = Bk(1090),
      FF = Bk(2607),
      BF = Bk(8567),
      RF = Bk(2347),
      tF = Bk(2359),
      aF = Bk(2943);
    const XF = ["J", "C", "A", "P", "U", "X", "G"],
      bF = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: uk.D
      });

    function wF(kk, Fk) {
      kk.replaceChildren(...[...Fk.childNodes].map((kk => kk.cloneNode(!0))))
    }
    const dF = kk => ({
      [Dk]: kk
    });

    function sF(kk) {
      let {
        id: Fk,
        slot: Bk,
        icon: Rk,
        label: ak,
        hidden: Xk,
        className: bk,
        face: dk
      } = kk;
      const sk = (0, tk.useRef)(null);
      return (0, tk.useLayoutEffect)((() => {
        dk && sk.current && wF(sk.current, dk)
      }), [dk]), (0, Yk.jsxs)("div", {
        className: wk()("TouchKeyHit", `TouchSlot${Bk}`, bk, {
          HudPreviewGhost: Xk.has(Fk)
        }),
        ...dF(Fk),
        children: [dk && (0, Yk.jsx)("div", {
          ref: sk,
          className: wk()("TouchKey", {
            Labelled: dk.classList.contains("Labelled")
          })
        }), !dk && (0, Yk.jsxs)("div", {
          className: wk()("TouchKey", {
            Labelled: void 0 !== ak
          }),
          children: [Rk && (0, Yk.jsx)(Nk.d, {
            name: Rk
          }), void 0 !== ak && (0, Yk.jsx)("span", {
            className: "TouchKeyLabel",
            children: ak
          })]
        })]
      })
    }

    function VF(kk) {
      let {
        item: Fk,
        selected: Bk
      } = kk;
      const Rk = (0, tk.useRef)(null);
      return (0, tk.useLayoutEffect)((() => {
        Rk.current && wF(Rk.current, Fk)
      }), [Fk]), (0, Yk.jsx)("div", {
        ref: Rk,
        className: wk()("InvenItem", {
          Selected: Bk
        })
      })
    }
    const JF = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      AF = kk => void 0 === kk ? {} : {
        style: {
          "--parked": kk
        }
      };

    function eF(kk) {
      let {
        id: Fk,
        hidden: Bk,
        parked: Rk,
        unslotted: tk = !1
      } = kk;
      return (0, Yk.jsx)("div", {
        className: wk()("TopRightIcon", tF.n[Fk], {
          HudPreviewGhost: Bk.has(Fk),
          [RF.b]: void 0 !== Rk,
          [RF.d]: tk
        }),
        ...AF(Rk),
        children: (0, Yk.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...dF(Fk),
          children: (0, Yk.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Yk.jsx)(Nk.d, {
              name: JF[Fk]
            })
          })
        })
      })
    }

    function yF(kk) {
      let {
        portraitPhone: Fk,
        icons: Bk,
        hidden: Rk,
        moved: tk,
        trayState: ak
      } = kk;
      const Xk = Fk ? (0, RF.A)(Bk) : [],
        bk = Bk.filter((kk => "settings" === kk)),
        dk = Bk.filter((kk => "settings" !== kk && !Xk.includes(kk))).reverse(),
        sk = Xk.length > 0 && "gone" === ak,
        Vk = [...bk, ...sk ? ["tray"] : [], ...dk].filter((kk => "tray" === kk || Rk.has(kk) && !tk.has(kk))),
        Jk = kk => {
          const Fk = Vk.indexOf(kk);
          return Fk < 0 ? void 0 : Fk
        },
        Ak = (kk, Fk) => (0, Yk.jsx)(eF, {
          id: kk,
          hidden: Rk,
          parked: Fk ? Jk(kk) : void 0,
          unslotted: Fk && Rk.has(kk) && tk.has(kk)
        }, kk);
      return (0, Yk.jsxs)("div", {
        className: wk()("TopRightIcons TouchInGame", {
          Column: Fk
        }),
        children: [bk.map((kk => Ak(kk, !0))), Xk.length > 0 && (0, Yk.jsxs)("div", {
          className: wk()("TopRightIcon TopRightTrayToggle Open", {
            [RF.b]: sk
          }),
          ...AF(Jk("tray")),
          children: [(0, Yk.jsx)("div", {
            className: wk()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== ak
            }),
            children: (0, Yk.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, Yk.jsx)(Nk.d, {
                name: "ellipsis"
              })
            })
          }), (0, Yk.jsx)("div", {
            className: "TopRightTray",
            children: Xk.map((kk => Ak(kk, !1)))
          })]
        }), dk.map((kk => Ak(kk, !0)))]
      })
    }

    function fF(kk) {
      let {
        next: Fk,
        hidden: Bk
      } = kk;
      return (0, Yk.jsx)("div", {
        className: wk()("HotBarArrow", Fk ? "Next" : "Previous", {
          HudPreviewGhost: Bk
        }),
        ...dF("arrows"),
        children: (0, Yk.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Yk.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Yk.jsx)(Nk.d, {
              name: Fk ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function mF() {
      return (0, Yk.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, Yk.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, Yk.jsx)("div", {
            className: "SocialBar",
            children: (0, Yk.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, Yk.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, Yk.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, Yk.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, Yk.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Yk.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Yk.jsx)(Nk.d, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, Yk.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, Yk.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, Yk.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, Yk.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Yk.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Yk.jsx)(Nk.d, {
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
    const WF = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      vF = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      iF = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      YF = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function oF(kk) {
      let {
        presence: Fk,
        portraitPhone: Bk,
        hidden: tk,
        actionButtons: ak,
        joystickFixed: Xk,
        keysAbove: bk,
        auraBar: dk,
        trayState: sk,
        moved: Jk
      } = kk;
      const {
        t: Ak
      } = (0, Rk.x)(), {
        faces: ek,
        items: yk
      } = Fk, fk = kk => ({
        HudPreviewGhost: tk.has(kk)
      });
      return (0, Yk.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, Yk.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, Yk.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, Yk.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, Yk.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, Yk.jsx)("div", {
              className: "InGameHeaderGameName",
              children: Ak("hudLayout:previewGameName")
            })]
          })
        }), (0, Yk.jsx)("div", {
          className: "TopLeftElements",
          children: (0, Yk.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, Yk.jsxs)("div", {
              className: "Chat",
              children: [(0, Yk.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [Ak("hudLayout:previewChatLine"), Ak("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), Ak("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((kk => (0, Yk.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, Yk.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, Yk.jsx)("div", {
                      className: "IndividualText",
                      children: kk
                    })
                  })
                }, kk)))
              }), (0, Yk.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: wk()("ChatIconWrapper SmallTextLight", fk("chat")),
                ...dF("chat"),
                children: (0, Yk.jsx)(Nk.d, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, Yk.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, Yk.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, Yk.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, Yk.jsx)("div", {
                className: "TopRightIconsContainer",
                ...dF("menu"),
                children: (0, Yk.jsx)(yF, {
                  portraitPhone: Bk,
                  icons: Fk.rowIcons,
                  hidden: tk,
                  trayState: sk,
                  moved: Jk
                })
              })
            }), Vk.featureFlags.useSocialFeatures && (0, Yk.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, Yk.jsx)(mF, {})
            })]
          })
        }), (0, Yk.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, Yk.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, Yk.jsxs)("div", {
            className: "TouchInteractKey",
            ...dF("interact"),
            children: [(0, Yk.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, Yk.jsx)(Nk.d, {
                name: "hand-back-point-up"
              })
            }), (0, Yk.jsx)("div", {
              children: Ak("hudLayout:previewInteract")
            })]
          })
        }), (0, Yk.jsx)("div", {
          className: "BottomCentre",
          children: (0, Yk.jsxs)("div", {
            className: "BottomElements",
            children: [(0, Yk.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, Yk.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, Yk.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...dF("hotbar"),
                children: (0, Yk.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, Yk.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, Yk.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, Yk.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, Yk.jsx)(Nk.d, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), dk && (0, Yk.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, Yk.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, Yk.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, aF.i)("glint"),
                    alt: ""
                  }), (0, Yk.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, Yk.jsx)("div", {
                  className: "AuraBar",
                  children: (0, Yk.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, Yk.jsx)("div", {
                className: "HotBarRow",
                children: (0, Yk.jsx)("div", {
                  className: wk()("HotBarContainer Touch", {
                    KeysAbove: bk
                  }),
                  children: (0, Yk.jsxs)("div", {
                    className: "HotBar",
                    ...dF("hotbar"),
                    children: [(0, Yk.jsxs)("div", {
                      className: wk()("TouchInventoryKeys", {
                        NoAuraBar: !dk
                      }),
                      children: [(0, Yk.jsx)("div", {
                        className: wk()("TouchInventoryKey ShopKey", fk("inventory"), {
                          Hidden: !Fk.shop
                        }),
                        ...dF("inventory"),
                        children: (0, Yk.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Yk.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Yk.jsx)(Nk.d, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, Yk.jsx)("div", {
                        className: wk()("TouchInventoryKey BagKey", fk("inventory"), {
                          Hidden: !Fk.bag
                        }),
                        ...dF("inventory"),
                        children: (0, Yk.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Yk.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Yk.jsx)(Nk.d, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, Yk.jsx)(fF, {
                      next: !1,
                      hidden: tk.has("arrows")
                    }), (0, Yk.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== yk && yk.map(((kk, Fk) => (0, Yk.jsx)(VF, {
                        item: kk,
                        selected: kk.classList.contains("Selected")
                      }, Fk))), null === yk && iF.map((kk => {
                        const Fk = YF[kk];
                        return (0, Yk.jsx)("div", {
                          className: wk()("InvenItem", {
                            Selected: 0 === kk
                          }),
                          children: Fk && (0, Yk.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, Yk.jsx)(Nk.d, {
                              name: Fk
                            })
                          })
                        }, kk)
                      }))]
                    }), (0, Yk.jsx)(fF, {
                      next: !0,
                      hidden: tk.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, Yk.jsx)("div", {
              className: "BottomRightElements",
              children: (0, Yk.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== ek && XF.map((kk => {
                  const Fk = ek[kk];
                  return Fk && (0, Yk.jsx)(sF, {
                    id: WF[kk],
                    slot: kk,
                    face: Fk,
                    className: vF[kk],
                    hidden: tk
                  }, kk)
                })), null === ek && (0, Yk.jsxs)(Yk.Fragment, {
                  children: [(0, Yk.jsx)(sF, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: tk
                  }), (0, Yk.jsx)(sF, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: tk
                  }), ak && (0, Yk.jsxs)(Yk.Fragment, {
                    children: [(0, Yk.jsx)(sF, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: tk
                    }), (0, Yk.jsx)(sF, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: tk
                    })]
                  }), !ak && (0, Yk.jsx)(sF, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: Ak("touchKeys:scope"),
                    hidden: tk
                  }), (0, Yk.jsx)(sF, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: Ak("touchKeys:fly"),
                    hidden: tk
                  }), (0, Yk.jsx)(sF, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: tk
                  })]
                })]
              })
            })]
          })
        }), (0, Yk.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, Yk.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, Yk.jsxs)("div", {
              className: wk()("Joystick Resting HudPreviewJoystick", {
                Floating: !Xk
              }),
              ...dF("joystick"),
              children: [(0, Yk.jsx)("div", {
                className: "JoystickBase"
              }), (0, Yk.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function LF() {
      const [kk, Fk] = (0, tk.useState)({}), Bk = (0, tk.useCallback)((kk => {
        Fk((Fk => [...new Set([...Object.keys(Fk), ...Object.keys(kk)])].every((Bk => Fk[Bk] === kk[Bk])) ? Fk : kk))
      }), []);
      return [kk, Bk]
    }
    const OF = .05;

    function EF(kk) {
      var Fk;
      let {
        selected: Bk,
        layout: tk,
        actionButtons: ak,
        keyNames: Xk,
        overlaps: bk,
        scaleCaps: sk,
        joystickFixed: Vk,
        onScale: Jk,
        onHidden: Ak,
        onReset: ek,
        locked: yk,
        lockable: fk,
        onLocked: mk,
        extra: Wk
      } = kk;
      const {
        t: vk
      } = (0, Rk.x)(), ik = Bk ? rk[Bk] : null, Lk = null !== Bk && yk.has(Bk), Ok = (Bk && tk.hudElements[Bk] || uk.n)[2], Ek = null !== (Fk = Bk && sk[Bk]) && void 0 !== Fk ? Fk : uk.i, Sk = kk => {
        Bk && Jk(Bk, Math.min(Ek, Math.round(100 * (Ok + .1 * kk)) / 100))
      };
      return (0, Yk.jsxs)(Yk.Fragment, {
        children: [(0, Yk.jsxs)("div", {
          className: wk()("HudQuickName SmallTextBold", {
            Overlap: bk.length > 0
          }),
          children: [bk.length > 0 && (0, Yk.jsx)(Nk.d, {
            name: "triangle-exclamation"
          }), ik ? zk(ik.id, ak, vk, Xk) : vk("hudLayout:fullScreenHint"), bk.length > 0 && (0, Yk.jsx)("span", {
            className: "HudQuickOverlap",
            children: vk("hudLayout:overlapsShort", {
              names: Pk(bk, ak, vk, Xk)
            })
          })]
        }), (null === ik || void 0 === ik ? void 0 : ik.scale) && (0, Yk.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, Yk.jsx)(dk.O, {
            disabled: Lk || Ok <= uk.j,
            ariaLabel: vk("hudLayout:smaller"),
            onClick: () => {
              Sk(-1)
            },
            children: (0, Yk.jsx)(Nk.d, {
              name: "minus"
            })
          }), (0, Yk.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*Ok)}%`
          }), (0, Yk.jsx)(dk.O, {
            disabled: Lk || Ok >= Ek,
            ariaLabel: vk("hudLayout:larger"),
            onClick: () => {
              Sk(1)
            },
            children: (0, Yk.jsx)(Nk.d, {
              name: "plus"
            })
          })]
        }), (ik || Wk) && (0, Yk.jsxs)("div", {
          className: "HudQuickActions",
          children: [ik && (0, Yk.jsxs)(Yk.Fragment, {
            children: [(0, Yk.jsx)(Zk, {
              id: ik.id,
              actionButtons: ak,
              keyNames: Xk,
              locked: Lk,
              lockable: fk(ik.id),
              onLocked: mk
            }), (0, Yk.jsx)(qk, {
              id: ik.id,
              elements: tk.hudElements,
              actionButtons: ak,
              keyNames: Xk,
              onHidden: Ak
            }), (0, Yk.jsx)(Ck, {
              id: ik.id,
              elements: tk.hudElements,
              actionButtons: ak,
              keyNames: Xk,
              locked: Lk,
              onReset: ek
            }), lk(ik.id, Vk) && (0, Yk.jsx)(nk, {})]
          }), Wk]
        })]
      })
    }
    var SF = Bk(1083),
      NF = Bk(4148);
    const HF = "HudPreviewDoc",
      uF = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      MF = new Set([HF, ...Object.values(uF)]),
      gF = new Set(uk.w.map(tF.H)),
      UF = new Set(tF.h),
      cF = 'style, link[rel="stylesheet"]';

    function GF(kk, Fk, Bk, Rk) {
      const tk = new Map,
        ak = new Set,
        Xk = new URL(kk.baseURI).origin,
        bk = Fk => {
          var Bk;
          if ("LINK" !== Fk.nodeName) return !0;
          const Rk = null === (Bk = Fk.getAttribute("href")) || void 0 === Bk ? void 0 : Bk.trim();
          if (!Rk) return !1;
          try {
            return new URL(Rk, kk.baseURI).origin === Xk
          } catch {
            return !1
          }
        };
      let wk = null;
      const dk = () => {
          wk !== (0 === ak.size) && (wk = 0 === ak.size, null === Rk || void 0 === Rk || Rk(wk))
        },
        sk = kk => {
          const Fk = kk.cloneNode(!0);
          if ("LINK" === Fk.tagName) {
            ak.add(Fk);
            const kk = () => {
              ak.delete(Fk), dk()
            };
            Fk.addEventListener("load", kk), Fk.addEventListener("error", kk), Bk && Fk.addEventListener("load", Bk)
          }
          return Fk
        },
        Vk = () => {
          const Rk = function(kk) {
              const Fk = [...kk.body.children].filter((kk => kk.matches(cF)));
              return [...kk.head.querySelectorAll(cF), ...Fk]
            }(kk).filter(bk),
            Xk = new Set(Rk);
          for (const [kk, Fk] of tk) Xk.has(kk) || (Fk.remove(), tk.delete(kk), ak.delete(Fk));
          let wk = null;
          for (let kk = Rk.length - 1; kk >= 0; kk--) {
            const ak = Rk[kk];
            let Xk = tk.get(ak);
            Xk ? "STYLE" === ak.tagName && Xk.textContent !== ak.textContent && (Xk.textContent = ak.textContent, null === Bk || void 0 === Bk || Bk()) : (Xk = sk(ak), tk.set(ak, Xk), Fk.head.insertBefore(Xk, wk)), wk = Xk
          }
          dk()
        };
      Vk();
      const Jk = new MutationObserver(Vk);
      return Jk.observe(kk.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), Jk.observe(kk.body, {
        childList: !0
      }), () => {
        Jk.disconnect()
      }
    }

    function TF(kk, Fk, Bk) {
      let {
        keysAbove: Rk
      } = Bk;
      const tk = [...kk.documentElement.classList].filter((kk => !MF.has(kk) && !UF.has(kk))),
        ak = [...Fk.documentElement.classList].filter((kk => UF.has(kk))),
        Xk = [HF, uF.hotbar, uF.hasShop, uF.hasBag];
      Rk && Xk.push(uF.keysAbove), Fk.documentElement.className = [...tk, ...Xk, ...ak].join(" ")
    }
    const rF = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function DF(kk, Fk, Bk, Rk, tk) {
      const ak = (0, uk.z)(Bk, Rk, "joystick"),
        Xk = (0, tF.I)((0, tF.W)(Bk, Rk, tk), Rk),
        bk = Xk.classes.filter((kk => !gF.has(kk))),
        wk = Fk.documentElement;
      (0, tF._)({
        ...Xk,
        classes: bk
      }, {
        vars: wk,
        safe: wk,
        classes: wk
      });
      const dk = (0, tF.N)(Bk.hudLayouts[Rk].hudSafe, window.innerWidth, window.innerHeight, zF(), (0, tF.X)(Fk));
      wk.style.setProperty("--preview-joystick-shift-left", `${dk[3]}px`), wk.style.setProperty("--preview-joystick-shift-bottom", `${dk[2]}px`), wk.style.setProperty("--preview-joystick-scale", String(ak[2])), (0, NF.d)(wk, Fk, Bk, Rk);
      for (const sk of rF) wk.style.setProperty(sk, kk.documentElement.style.getPropertyValue(sk) || "0px")
    }

    function zF() {
      return (0, tF.U)(sk.c.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function PF(kk) {
      return (0, tF.z)(zF(), (0, tF.X)(kk))
    }

    function hF(kk, Fk, Bk) {
      const Rk = kk.documentElement.style,
        tk = (0, tF.R)(Fk),
        ak = Rk.getPropertyValue(tk);
      try {
        return Bk((kk => {
          Rk.setProperty(tk, String(kk))
        }))
      } finally {
        "" === ak ? Rk.removeProperty(tk) : Rk.setProperty(tk, ak)
      }
    }

    function qF(kk, Fk) {
      const [Bk, Rk] = hF(kk, "hotbar", (Fk => {
        const Bk = Bk => {
          var Rk, tk;
          return Fk(Bk), null !== (Rk = null === (tk = kk.querySelector(".HotBarGameItemsContainer")) || void 0 === tk ? void 0 : tk.getBoundingClientRect().width) && void 0 !== Rk ? Rk : 0
        };
        return [Bk(1), Bk(uk.i)]
      }));
      return Bk <= 0 ? uk.i : Math.min(uk.i, Math.max(1, Math.floor(Rk / Bk / Fk + 1e-6) * Fk))
    }
    const CF = 3,
      ZF = .5,
      pF = kk => kk.right - kk.left;
    const KF = (kk, Fk) => Math.abs((0, BF.e)(kk).x - (0, BF.e)(Fk).x) + Math.abs((0, BF.e)(kk).y - (0, BF.e)(Fk).y) + Math.abs(pF(kk) - pF(Fk));

    function xF(kk, Fk, Bk, Rk, tk) {
      let {
        canKeep: ak = () => !0,
        passes: Xk = CF,
        before: bk,
        keysAboveOf: wk
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const dk = void 0 !== wk && wk(kk) !== wk(Fk),
        sk = Fk.hudLayouts[Bk].hudLocked.filter((kk => ak(kk) && !(dk && "inventory" === kk))),
        Vk = new Set(sk);
      if (0 === Vk.size) return Fk;
      const Jk = [...Uk].filter((Rk => !sk.includes(Rk) && (0, uk.z)(kk, Bk, Rk).join() === (0, uk.z)(Fk, Bk, Rk).join())),
        Ak = kk => {
          const Fk = (0, BF.E)(Jk.flatMap((Fk => kk[Fk] ? [kk[Fk]] : [])));
          return {
            ...kk,
            cluster: null !== Fk && void 0 !== Fk ? Fk : void 0
          }
        },
        ek = kk => {
          const Fk = tk(kk);
          return Fk && Ak(Fk)
        },
        yk = bk ? Ak(bk) : ek(kk);
      let fk = yk && ek(Fk);
      if (!yk || !fk) return Fk;
      let mk = Fk;
      for (let Wk = 0; Wk < Xk && Vk.size > 0; Wk++) {
        const kk = new Map;
        for (const Fk of Vk) {
          const tk = yk[Fk],
            ak = fk[Fk],
            Xk = tk && ak ? jF(Fk, (0, uk.z)(mk, Bk, Fk), tk, ak, Rk) : null;
          Xk ? kk.set(Fk, Xk) : Vk.delete(Fk)
        }
        if (0 === kk.size) break;
        let tk = mk;
        for (const [Fk, Rk] of kk) tk = (0, uk.ab)(tk, Bk, Fk, Rk);
        const ak = ek(tk);
        if (!ak) return Fk;
        let Xk = mk;
        for (const [Fk, Rk] of kk) {
          const kk = ak[Fk];
          kk && KF(yk[Fk], kk) < KF(yk[Fk], fk[Fk]) - ZF ? Xk = (0, uk.ab)(Xk, Bk, Fk, Rk) : Vk.delete(Fk)
        }
        if (Xk === mk) break;
        const bk = [...kk.keys()].every((kk => Vk.has(kk)));
        if (mk = Xk, fk = bk ? ak : ek(mk), !fk) return Fk
      }
      return tk(mk), mk
    }

    function jF(kk, Fk, Bk, Rk, tk) {
      let [ak, Xk, bk] = Fk;
      const wk = uk.v[kk],
        dk = {};
      wk.scale && pF(Rk) > 0 && Math.abs(pF(Bk) - pF(Rk)) > ZF && (dk.scale = Math.max(uk.j, Math.min(uk.i, bk * pF(Bk) / pF(Rk))));
      const sk = (0, BF.e)(Bk).x - (0, BF.e)(Rk).x,
        Vk = (0, BF.e)(Bk).y - (0, BF.e)(Rk).y;
      return wk.move && (Math.abs(sk) > ZF || Math.abs(Vk) > ZF) && (dk.dx = ak + sk / tk.width, dk.dy = Xk + Vk / tk.height), void 0 === dk.scale && void 0 === dk.dx ? null : dk
    }
    let lF = 0;

    function nF() {
      return lF > 0
    }
    const IF = kk => 0 === kk.dx && 0 === kk.dy,
      QF = .001,
      kB = kk => Math.abs(kk.dx) >= 5e-4 || Math.abs(kk.dy) >= 5e-4 ? kk : {
        dx: kk.dx,
        dy: kk.dy < 0 ? -.001 : QF
      };

    function FB(kk) {
      let {
        preview: Fk,
        stageRef: Bk,
        ringRef: Rk,
        centreLineRef: ak,
        snapCentre: Xk,
        ready: bk,
        measure: wk,
        k: dk,
        viewport: sk,
        boxes: Vk,
        pieces: Jk,
        selected: Ak,
        insets: ek,
        layout: yk,
        canMove: fk,
        onSelect: mk,
        onMove: Wk
      } = kk;
      const vk = (0, tk.useRef)(null),
        ik = (0, tk.useCallback)((() => null !== vk.current), []),
        Yk = (kk, Fk) => {
          if (!Fk) return null;
          const Bk = (0, BF.e)(kk.origin),
            Rk = (0, BF.e)(Fk),
            tk = (kk.to.dx - kk.from.dx) * sk.width,
            ak = (kk.to.dy - kk.from.dy) * sk.height,
            Xk = Fk.right - Fk.left,
            bk = Fk.bottom - Fk.top;
          return {
            skew: {
              x: Rk.x - Bk.x - tk,
              y: Rk.y - Bk.y - ak
            },
            box: {
              left: Bk.x - Xk / 2,
              top: Bk.y - bk / 2,
              right: Bk.x + Xk / 2,
              bottom: Bk.y + bk / 2
            }
          }
        },
        Lk = (kk, Bk) => {
          var tk;
          const Xk = vk.current;
          if (!Xk || Xk.pointerId !== kk.pointerId) return;
          vk.current = null, null === (tk = ak.current) || void 0 === tk || tk.classList.remove("Shown", "Snapped");
          const bk = Rk.current;
          if (bk && null !== Xk.ringStyle && bk.setAttribute("style", Xk.ringStyle), Bk && Xk.moved) {
            const kk = IF(Xk.to) ? null : wk(Xk.id),
              Fk = kk ? (0, BF.D)(kk, (0, BF.B)(sk.width, sk.height, ek)) : {
                x: 0,
                y: 0
              },
              Bk = {
                dx: Xk.to.dx + Fk.x / sk.width,
                dy: Xk.to.dy + Fk.y / sk.height
              },
              Rk = IF(Xk.to) ? Bk : kB(Bk);
            Wk(Xk.id, Rk.dx, Rk.dy)
          } else Fk(Xk.id, null), Bk && Xk.tapPick && mk(Xk.tapPick)
        };
      return {
        busy: ik,
        handlers: {
          onPointerDown: kk => {
            var Fk;
            if (!bk || vk.current || !kk.target.closest(".HudPreviewHandle")) return;
            const Rk = Bk.current.getBoundingClientRect(),
              tk = {
                x: (kk.clientX - Rk.left) / dk,
                y: (kk.clientY - Rk.top) / dk
              },
              ak = (0, BF.v)(tk, Jk, 40 / dk),
              Xk = "cluster" === Ak && void 0 !== Vk.cluster && null !== (0, BF.v)(tk, [{
                id: "cluster",
                box: Vk.cluster
              }], 40 / dk),
              wk = "menu" === Ak && void 0 !== Vk.menu && (0, BF.h)(Vk.menu, tk) && ("menu" === ak || null !== ak && (0, RF.r)(ak, yk.hudElements[ak])),
              sk = Xk ? "cluster" : wk ? "menu" : null,
              ek = null !== sk,
              Wk = null !== sk && void 0 !== sk ? sk : ak;
            if (!Wk) return;
            if (function(kk) {
                lF++;
                const Fk = Bk => {
                  Bk.pointerId === kk && (lF = Math.max(0, lF - 1), window.removeEventListener("pointerup", Fk, !0), window.removeEventListener("pointercancel", Fk, !0))
                };
                window.addEventListener("pointerup", Fk, !0), window.addEventListener("pointercancel", Fk, !0)
              }(kk.pointerId), !fk(Wk)) return void mk(ek && ak ? ak : Wk);
            mk(Wk);
            const [ik, Yk] = null !== (Fk = yk.hudElements[Wk]) && void 0 !== Fk ? Fk : [0, 0], Lk = {
              dx: ik,
              dy: Yk
            }, Ok = {
              skew: {
                x: 0,
                y: 0
              },
              box: Vk[Wk]
            };
            vk.current = {
              id: Wk,
              pointerId: kk.pointerId,
              startX: kk.clientX,
              startY: kk.clientY,
              origin: Vk[Wk],
              from: Lk,
              to: Lk,
              moved: !1,
              home: IF(Lk) ? {
                centre: (0, BF.e)(Vk[Wk]),
                anchor: Ok
              } : null,
              away: IF(Lk) ? null : Ok,
              anchor: Ok,
              ringStyle: null,
              tapPick: ek ? ak : null
            }, kk.currentTarget.setPointerCapture(kk.pointerId)
          },
          onPointerMove: kk => {
            const Bk = vk.current;
            if (!Bk || Bk.pointerId !== kk.pointerId) return;
            const tk = kk.clientX - Bk.startX,
              bk = kk.clientY - Bk.startY;
            if (!Bk.moved && Math.hypot(tk, bk) < 5) return;
            const Vk = !Bk.moved;
            var Jk, Ak;
            (Bk.moved = !0, Vk) && (Bk.ringStyle = null !== (Jk = null === (Ak = Rk.current) || void 0 === Ak ? void 0 : Ak.getAttribute("style")) && void 0 !== Jk ? Jk : null);
            const yk = (0, BF.B)(sk.width, sk.height, ek);
            if (!Bk.home) {
              var fk;
              Bk.to = {
                dx: 0,
                dy: 0
              }, Fk(Bk.id, Bk.to);
              const kk = wk(Bk.id),
                Rk = null !== (fk = Yk(Bk, kk)) && void 0 !== fk ? fk : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: Bk.origin
                },
                tk = (0, BF.e)(Bk.origin);
              Bk.home = {
                centre: kk ? (0, BF.e)(kk) : {
                  x: tk.x - Bk.from.dx * sk.width,
                  y: tk.y - Bk.from.dy * sk.height
                },
                anchor: Rk
              }
            }
            const mk = Bk.home;
            let Wk = !1;
            const ik = kk => {
                Wk = !1;
                let Rk = (0, BF.o)(kk.box, tk / dk, bk / dk, yk);
                const ak = sk.width / 2;
                if (Xk && Math.abs((0, BF.e)(Bk.origin).x + Rk.x - ak) <= 8 / dk) {
                  const Fk = ak - (0, BF.e)(Bk.origin).x,
                    tk = (0, BF.o)(kk.box, Fk, Rk.y, yk);
                  Wk = Math.abs(tk.x - Fk) < .01, Wk && (Rk = tk)
                }
                const wk = (0, BF.u)(Bk.from, Rk.x - kk.skew.x, Rk.y - kk.skew.y, sk.width, sk.height);
                Bk.to = kB(wk), Bk.anchor = kk, Fk(Bk.id, Bk.to)
              },
              Lk = (0, BF.o)(mk.anchor.box, tk / dk, bk / dk, yk),
              Ok = ak.current,
              Ek = (0, BF.e)(Bk.origin),
              Sk = ((0, uk.L)(Bk.id) ? 20 : 6) / dk;
            if (Math.abs(Ek.x + Lk.x - mk.centre.x) <= Sk && Math.abs(Ek.y + Lk.y - mk.centre.y) <= Sk) Bk.to = {
              dx: 0,
              dy: 0
            }, Bk.anchor = mk.anchor, Wk = Xk && Math.abs(mk.centre.x - sk.width / 2) < 1, Fk(Bk.id, Bk.to);
            else if (Bk.away) ik(Bk.away);
            else {
              var Nk;
              ik(mk.anchor), Bk.away = null !== (Nk = Yk(Bk, wk(Bk.id))) && void 0 !== Nk ? Nk : mk.anchor, ik(Bk.away)
            }
            null === Ok || void 0 === Ok || Ok.classList.add("Shown"), null === Ok || void 0 === Ok || Ok.classList.toggle("Snapped", Wk), (kk => {
              const Fk = Rk.current;
              if (Fk) {
                const {
                  skew: Bk,
                  box: Rk
                } = kk.anchor;
                Fk.style.left = Rk.left * dk + "px", Fk.style.top = Rk.top * dk + "px", Fk.style.width = (Rk.right - Rk.left) * dk + "px", Fk.style.height = (Rk.bottom - Rk.top) * dk + "px", Fk.style.translate = `${((kk.to.dx-kk.from.dx)*sk.width+Bk.x)*dk}px ${((kk.to.dy-kk.from.dy)*sk.height+Bk.y)*dk}px`
              }
            })(Bk)
          },
          onPointerUp: kk => {
            Lk(kk, !0)
          },
          onPointerCancel: kk => {
            Lk(kk, !1)
          }
        }
      }
    }

    function BB(kk, Fk) {
      return Object.keys(kk).filter((kk => kk !== Fk)).map((Fk => kk[Fk]))
    }

    function RB(kk) {
      const Fk = [],
        Bk = Fk => (0, uk.L)(Fk) && !kk.documentElement.classList.contains((0, tF.K)(Fk));
      for (const Xk of kk.querySelectorAll(`[${Dk}]`)) {
        const kk = Bk(Xk.getAttribute(Dk)) ? Xk.querySelector(".ScaleOnHover") : null,
          Rk = (null !== kk && void 0 !== kk ? kk : Xk).getBoundingClientRect();
        (Rk.width > 0 || Rk.height > 0) && Fk.push({
          id: Xk.getAttribute(Dk),
          box: {
            left: Rk.left,
            top: Rk.top,
            right: Rk.right,
            bottom: Rk.bottom
          }
        })
      }
      const Rk = kk => (0, BF.E)(Fk.filter((Fk => {
          let {
            id: Bk
          } = Fk;
          return kk(Bk)
        })).map((kk => {
          let {
            box: Fk
          } = kk;
          return Fk
        }))),
        tk = {};
      for (const Xk of new Set(Fk.map((kk => kk.id)))) tk[Xk] = Rk((kk => kk === Xk));
      const ak = Rk((kk => Uk.has(kk)));
      return ak && (tk.cluster = ak), {
        boxes: tk,
        pieces: Fk
      }
    }

    function tB(kk, Fk, Bk) {
      const Rk = Fk.right - Fk.left,
        tk = Fk.bottom - Fk.top;
      return hF(kk, "cluster", (Fk => {
        const ak = Bk => {
            Fk(Bk);
            const Rk = [...kk.querySelectorAll(`[${Dk}]:not(.HudPreviewGhost)`)].filter((kk => Uk.has(kk.getAttribute(Dk)))).map((kk => {
                const Fk = kk.getBoundingClientRect();
                return {
                  left: Fk.left,
                  top: Fk.top,
                  right: Fk.right,
                  bottom: Fk.bottom
                }
              })),
              tk = (0, BF.E)(Rk);
            return tk ? {
              w: tk.right - tk.left,
              h: tk.bottom - tk.top
            } : null
          },
          Xk = kk => !kk || kk.w <= Rk && kk.h <= tk,
          bk = ak(1),
          wk = ak(uk.i);
        if (!bk || Xk(wk)) return uk.i;
        const dk = (kk, Fk, Bk) => Fk > kk ? 1 + (Bk - kk) * (uk.i - 1) / (Fk - kk) : uk.i;
        let sk = Math.floor(Math.min(uk.i, dk(bk.w, wk.w, Rk), dk(bk.h, wk.h, tk)) / Bk + 1e-6) * Bk;
        for (; sk > 1 && !Xk(ak(sk));) sk = Math.round(100 * (sk - Bk)) / 100;
        return Math.max(1, sk)
      }))
    }

    function aB(kk) {
      TF(document, kk, {
        keysAbove: !1
      });
      const Fk = parseFloat(getComputedStyle(kk.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        Bk = Number.isFinite(Fk) && Fk < 0;
      return TF(document, kk, {
        keysAbove: Bk
      }), Bk
    }

    function XB(kk, Fk) {
      let {
        layout: Bk,
        orientation: Rk,
        viewport: ak,
        replicaKey: Xk,
        joystickFixed: bk,
        busy: wk
      } = Fk;
      const [dk, sk] = (0, tk.useState)(null), [Vk, Jk] = (0, tk.useState)({
        boxes: {},
        pieces: []
      }), [Ak, ek] = (0, tk.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [yk, fk] = (0, tk.useState)(!1), [mk, Wk] = (0, tk.useState)(!1), [vk, ik] = (0, tk.useState)(!1), Yk = (0, tk.useCallback)((kk => {
        Wk(kk), kk && ik(!0)
      }), []), Lk = Bk.hudLayouts[Rk].hudSafe, Ok = (0, tk.useCallback)((() => {
        var Fk;
        const Bk = null === (Fk = kk.current) || void 0 === Fk ? void 0 : Fk.contentDocument;
        null !== Bk && void 0 !== Bk && Bk.body && sk(Bk)
      }), [kk]), Ek = (0, tk.useCallback)((() => {
        dk && ((0, RF.u)(dk), Jk(RB(dk)), ek(function(kk, Fk) {
          const Bk = PF(kk),
            [Rk, tk, ak, Xk] = Fk ? (0, tF.D)(Fk, window.innerWidth, window.innerHeight, Bk) : Bk;
          return {
            top: Rk,
            right: tk,
            bottom: ak,
            left: Xk
          }
        }(dk, Lk)))
      }), [dk, Lk]), Sk = (0, tk.useCallback)((() => {
        dk && fk(aB(dk))
      }), [dk]), Nk = (0, tk.useRef)((() => {}));
      return Nk.current = () => {
        Sk(), wk() || Ek()
      }, (0, tk.useLayoutEffect)((() => {
        if (dk) return GF(document, dk, (() => {
          Nk.current()
        }), Yk)
      }), [dk, Yk]), (0, tk.useLayoutEffect)(Sk, [Sk, ak]), (0, tk.useLayoutEffect)((() => {
        dk && (TF(document, dk, {
          keysAbove: yk
        }), DF(document, dk, Bk, Rk, bk), Sk(), Ek())
      }), [dk, Bk, Rk, yk, Xk, bk, ak, Ek, Sk]), (0, tk.useEffect)((() => {
        var kk;
        if (!dk) return;
        const Fk = new ResizeObserver((() => {
          wk() || Ek()
        }));
        for (const Bk of dk.querySelectorAll(`[${Dk}]`)) Fk.observe(Bk);
        return null === (kk = dk.fonts) || void 0 === kk || kk.ready.then(Ek), () => {
          Fk.disconnect()
        }
      }), [dk, Ek, wk, Xk]), {
        doc: dk,
        onLoad: Ok,
        boxes: Vk.boxes,
        pieces: Vk.pieces,
        insets: Ak,
        keysAbove: yk,
        ready: mk,
        settled: vk
      }
    }
    const bB = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      wB = (kk, Fk, Bk) => {
        const Rk = kk => (0, RF.r)(kk, Bk.hudElements[kk]);
        return "cluster" === kk && Uk.has(Fk) || "cluster" === Fk && Uk.has(kk) || "menu" === kk && Rk(Fk) || "menu" === Fk && Rk(kk) || bB.some((Rk => {
          let [tk, ak] = Rk;
          const Xk = Bk.hudElements.hotbar,
            bk = "inventory" === ak && Bk.hudLocked.includes(ak) && void 0 !== Xk && !(0, uk.H)(Xk);
          return (kk === tk && Fk === ak || kk === ak && Fk === tk) && !bk
        }))
      };
    const dB = ["Above", "Below", "Left", "Right"];

    function sB(kk, Fk, Bk, Rk, tk) {
      const ak = Bk[kk],
        Xk = (ak.left + ak.right) / 2,
        bk = (ak.top + ak.bottom) / 2,
        wk = (7.5 * Fk.length + 14) / Rk,
        dk = 18 / Rk,
        sk = {
          Above: {
            left: Xk - wk / 2,
            top: ak.top - dk,
            right: Xk + wk / 2,
            bottom: ak.top
          },
          Below: {
            left: Xk - wk / 2,
            top: ak.bottom,
            right: Xk + wk / 2,
            bottom: ak.bottom + dk
          },
          Left: {
            left: ak.left - wk,
            top: bk - dk / 2,
            right: ak.left,
            bottom: bk + dk / 2
          },
          Right: {
            left: ak.right,
            top: bk - dk / 2,
            right: ak.right + wk,
            bottom: bk + dk / 2
          }
        },
        Vk = BB(Bk, kk),
        Jk = {
          left: 0,
          top: 0,
          right: tk.width,
          bottom: tk.height
        };
      return dB[(0, BF.s)(dB.map((kk => sk[kk])), Vk, {
        bounds: Jk
      })]
    }

    function VB() {
      const [kk, Fk] = (0, kF.c)();
      return (0, tk.useMemo)((() => ({
        width: kk,
        height: Fk
      })), [kk, Fk])
    }

    function JB(kk) {
      var Fk;
      const {
        layout: Bk,
        orientation: ak,
        selected: Xk,
        onSelect: bk,
        onMove: dk,
        canMove: sk,
        actionButtons: Vk,
        joystickFixed: Jk,
        presence: Ak,
        keyNames: yk,
        maxHeight: fk,
        fill: mk = !1,
        apiRef: Wk
      } = kk, {
        t: vk
      } = (0, Rk.x)(), ik = VB(), Lk = (null !== (Fk = (0, ek.j)("maxAuraLevel")) && void 0 !== Fk ? Fk : 0) > 0, Ok = Bk.hudLayouts[ak], Ek = (0, tk.useRef)(null), Sk = (0, tk.useRef)(null), Hk = (0, tk.useRef)(null), Mk = (0, tk.useRef)(null), gk = (0, tk.useRef)(null), ck = (0, tk.useRef)(null), Gk = (0, FF.e)(Ek).width, Tk = mk ? 1 : Gk > 0 ? (0, BF.x)(Gk, ik.width, ik.height, fk) : 0, rk = (0, tk.useRef)((() => !1)), Dk = (0, tk.useCallback)((() => rk.current()), []), {
        doc: Pk,
        onLoad: hk,
        boxes: qk,
        pieces: Ck,
        insets: Zk,
        keysAbove: pk,
        ready: Kk,
        settled: xk
      } = XB(Hk, {
        layout: Bk,
        orientation: ak,
        viewport: ik,
        replicaKey: `${Vk}:${Jk}:${Lk}`,
        joystickFixed: Jk,
        busy: Dk
      }), jk = (0, tk.useCallback)((kk => {
        Pk && DF(document, Pk, kk, ak, Jk)
      }), [Pk, ak, Jk]), lk = (0, tk.useCallback)((kk => Pk && xk ? (jk(kk), aB(Pk), function(kk) {
        let {
          boxes: Fk,
          pieces: Bk
        } = kk;
        const Rk = Bk.find((kk => "inventory" === kk.id));
        if (!Rk || !Fk.inventory) return Fk;
        const tk = (0, BF.e)(Fk.inventory),
          ak = pF(Rk.box) / 2,
          Xk = (Rk.box.bottom - Rk.box.top) / 2;
        return {
          ...Fk,
          inventory: {
            left: tk.x - ak,
            top: tk.y - Xk,
            right: tk.x + ak,
            bottom: tk.y + Xk
          }
        }
      }(RB(Pk))) : null), [Pk, xk, jk]), nk = (0, tk.useCallback)((kk => !!Pk && (jk(kk), aB(Pk))), [Pk, jk]), Qk = (0, tk.useRef)(null), kF = (0, tk.useRef)(null), aF = (0, tk.useRef)(Bk);
      aF.current = Bk;
      const XF = (0, tk.useCallback)((() => {
        null !== Qk.current && (cancelAnimationFrame(Qk.current), Qk.current = null)
      }), []);
      (0, tk.useEffect)((() => XF), [Bk, XF]);
      const {
        lockable: bF
      } = kk, wF = (0, tk.useCallback)((kk => {
        if (jk(kk), !xk || 0 === Bk.hudLayouts[ak].hudLocked.length) return;
        const Fk = Bk;
        XF(), Qk.current = requestAnimationFrame((() => {
          var Bk;
          if (Qk.current = null, aF.current !== Fk) return;
          const Rk = (null === (Bk = kF.current) || void 0 === Bk ? void 0 : Bk.from) === Fk ? kF.current.boxes : lk(Fk);
          Rk && (kF.current = {
            from: Fk,
            boxes: Rk
          }), jk(Rk ? xF(Fk, kk, ak, ik, lk, {
            canKeep: bF,
            passes: 1,
            before: Rk,
            keysAboveOf: nk
          }) : kk)
        }))
      }), [jk, xk, Bk, ak, ik, lk, nk, bF, XF]), dF = FB({
        preview: (kk, Fk) => {
          Fk ? wF((0, uk.ab)(Bk, ak, kk, Fk)) : (XF(), jk(Bk))
        },
        stageRef: Sk,
        ringRef: Mk,
        centreLineRef: gk,
        snapCentre: Bk.hudSnapCentre,
        ready: xk,
        measure: kk => {
          var Fk;
          return Pk && Kk && null !== (Fk = RB(Pk).boxes[kk]) && void 0 !== Fk ? Fk : null
        },
        k: Tk,
        viewport: ik,
        boxes: qk,
        pieces: Ck,
        selected: Xk,
        insets: Zk,
        layout: Ok,
        canMove: sk,
        onSelect: bk,
        onMove: (kk, Fk, Bk) => {
          XF(), dk(kk, Fk, Bk)
        }
      });
      (0, tk.useLayoutEffect)((() => {
        rk.current = dF.busy
      }), [dF.busy]);
      const sF = (0, tk.useRef)([]),
        VF = (0, tk.useRef)(Ok.hudElements);
      (0, tk.useEffect)((() => {
        for (const tk of Object.keys(Ok.hudElements)) {
          var kk, Fk, Bk, Rk;
          (null !== (kk = null === (Fk = Ok.hudElements[tk]) || void 0 === Fk ? void 0 : Fk[2]) && void 0 !== kk ? kk : 1) > (null !== (Bk = null === (Rk = VF.current[tk]) || void 0 === Rk ? void 0 : Rk[2]) && void 0 !== Bk ? Bk : 1) && sk(tk) && !(0, RF.r)(tk, Ok.hudElements[tk]) && sF.current.push(tk)
        }
        VF.current = Ok.hudElements
      }), [Ok.hudElements, sk]), (0, tk.useEffect)((() => {
        if (!Kk) return;
        const kk = sF.current.shift(),
          Fk = kk && qk[kk];
        if (!kk || !Fk || dF.busy()) return;
        const Bk = (0, BF.D)(Fk, (0, BF.B)(ik.width, ik.height, Zk));
        if (0 !== Bk.x || 0 !== Bk.y) {
          var Rk;
          const [Fk, tk] = null !== (Rk = Ok.hudElements[kk]) && void 0 !== Rk ? Rk : [0, 0];
          dk(kk, Fk + Bk.x / ik.width, tk + Bk.y / ik.height)
        }
      }), [qk, Kk]), (0, tk.useImperativeHandle)(Wk, (() => ({
        setScale: (kk, Fk) => {
          wF((0, uk.ab)(Bk, ak, kk, {
            scale: Fk
          }))
        },
        setOpacity: kk => {
          jk({
            ...Bk,
            hudKeyOpacity: kk
          })
        },
        keepLocks: (kk, Fk) => (XF(), xF(kk, Fk, ak, ik, lk, {
          canKeep: bF,
          keysAboveOf: nk
        })),
        setSafe: kk => {
          wF((0, uk.db)(Bk, ak, kk)), ck.current && (ck.current.style.inset = (0, tF.D)(kk, ik.width, ik.height, PF(null !== Pk && void 0 !== Pk ? Pk : document)).map((kk => kk * Tk + "px")).join(" "))
        }
      })), [jk, wF, lk, nk, XF, bF, Pk, Bk, ak, ik, Tk]);
      const JF = new Set(Object.keys(Ok.hudElements).filter((kk => (0, uk.r)(Ok.hudElements, kk)))),
        AF = Xk ? qk[Xk] : void 0,
        eF = Xk ? zk(Xk, Vk, vk, yk) : "",
        yF = (0, SF.g)(ik.width, ik.height),
        fF = Xk ? function(kk, Fk, Bk, Rk) {
          const tk = kk => (0, uk.r)(Bk.hudElements, kk) || (0, RF.q)(kk, Bk, Rk);
          if (tk(kk)) return [];
          const ak = Fk.filter((Fk => {
              let {
                id: Bk
              } = Fk;
              return "cluster" === kk ? Uk.has(Bk) : Bk === kk
            })),
            Xk = new Set;
          for (const bk of Fk) bk.id === kk || Xk.has(bk.id) || wB(kk, bk.id, Bk) || tk(bk.id) || void 0 === Bk.hudElements[kk] && void 0 === Bk.hudElements[bk.id] || ak.some((kk => {
            let {
              id: Fk,
              box: Bk
            } = kk;
            return Fk !== bk.id && (0, BF.k)(Bk, bk.box, 2)
          })) && Xk.add(bk.id);
          return [...Xk]
        }(Xk, Ck, Ok, yF) : [],
        mF = new Set((0, RF.p)(Ok.hudElements)),
        WF = (0, RF.E)(Ok, (0, RF.A)(Ak.rowIcons)).state,
        vF = fF.join(),
        iF = (0, tk.useRef)(kk.onReady);
      iF.current = kk.onReady, (0, tk.useEffect)((() => {
        var kk;
        null === (kk = iF.current) || void 0 === kk || kk.call(iF, xk)
      }), [xk]);
      const YF = (0, tk.useRef)(kk.onMeasured);
      (0, tk.useLayoutEffect)((() => {
        YF.current = kk.onMeasured
      })), (0, tk.useEffect)((() => {
        var kk;
        const Fk = Pk ? {
          hotbar: qF(Pk, OF),
          cluster: tB(Pk, (0, BF.B)(ik.width, ik.height, Zk), OF)
        } : {};
        null === (kk = YF.current) || void 0 === kk || kk.call(YF, qk, vF ? vF.split(",") : [], Fk)
      }), [qk, vF, Pk, ik, Zk]);
      const LF = kk => ({
        left: kk.left * Tk,
        top: kk.top * Tk,
        width: (kk.right - kk.left) * Tk,
        height: (kk.bottom - kk.top) * Tk
      });
      return (0, Yk.jsx)("div", {
        ref: Ek,
        className: wk()("HudPreviewBox", {
          Fill: mk
        }),
        style: {
          height: ik.height * Tk
        },
        children: (0, Yk.jsxs)("div", {
          ref: Sk,
          className: "HudPreviewStage",
          style: {
            width: ik.width * Tk,
            height: ik.height * Tk
          },
          children: [(0, Yk.jsx)("iframe", {
            ref: Hk,
            className: "HudPreviewFrame",
            srcDoc: "<!DOCTYPE html><html><head></head><body></body></html>",
            onLoad: hk,
            title: vk("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: ik.width,
              height: ik.height,
              transform: `scale(${Tk})`
            }
          }), Pk && (0, Ik.createPortal)((0, Yk.jsx)(oF, {
            presence: Ak,
            portraitPhone: yF,
            hidden: JF,
            actionButtons: Vk,
            joystickFixed: Jk,
            keysAbove: pk,
            auraBar: Lk,
            trayState: WF,
            moved: mF
          }), Pk.body), (0, Yk.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...dF.handlers,
            children: [(0, Yk.jsx)("div", {
              ref: ck,
              className: "HudPreviewSafeZone",
              style: {
                top: Zk.top * Tk,
                right: Zk.right * Tk,
                bottom: Zk.bottom * Tk,
                left: Zk.left * Tk
              }
            }), Ck.map(((kk, Fk) => {
              let {
                id: Bk,
                box: Rk
              } = kk;
              return (0, Yk.jsx)("div", {
                className: "HudPreviewHandle",
                style: LF((0, BF.q)(Rk, 40 / Tk))
              }, `${Bk}:${Fk}`)
            })), Ok.hudLocked.map((kk => {
              const Fk = qk[kk];
              return Fk && (0, Yk.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: Fk.right * Tk,
                  top: Fk.top * Tk
                },
                children: (0, Yk.jsx)(Nk.d, {
                  name: "lock"
                })
              }, kk)
            })), (0, Yk.jsx)("div", {
              ref: gk,
              className: "HudPreviewCentreLine",
              style: {
                left: ik.width / 2 * Tk
              }
            }), Xk && AF && (0, Yk.jsx)("div", {
              ref: Mk,
              className: wk()("HudPreviewRing", {
                Fixed: !sk(Xk),
                Overlap: fF.length > 0
              }),
              style: LF(AF),
              children: (0, Yk.jsx)("span", {
                className: wk()("HudPreviewRingLabel", sB(Xk, eF, qk, Tk, ik)),
                children: eF
              })
            })]
          })]
        })
      })
    }

    function AB(kk, Fk) {
      (0, tk.useEffect)((() => {
        var Bk;
        null === (Bk = kk.current) || void 0 === Bk || Bk.toggleAttribute("inert", Fk)
      }), [kk, Fk])
    }
    const eB = "hudFullScreen";

    function yB(kk) {
      let {
        onScale: Fk,
        onHidden: Bk,
        onReset: ak,
        locked: Xk,
        lockable: bk,
        onLocked: wk,
        onClose: sk,
        ...Vk
      } = kk;
      const {
        t: Jk
      } = (0, Rk.x)(), Ak = (0, tk.useRef)(null);
      (0, Qk.s)("popup", Ak, sk),
      function(kk) {
        const Fk = (0, tk.useRef)(kk);
        Fk.current = kk, (0, tk.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [eB]: !0
          }, "");
          let kk = !1;
          const Bk = () => {
            kk = !0, Fk.current()
          };
          return window.addEventListener("popstate", Bk), () => {
            var Fk;
            window.removeEventListener("popstate", Bk), !kk && null !== (Fk = window.history.state) && void 0 !== Fk && Fk[eB] && window.history.back()
          }
        }), [])
      }(sk), (0, tk.useEffect)((() => {
        function kk(kk) {
          "Escape" === kk.key && (kk.stopPropagation(), sk())
        }
        return window.addEventListener("keydown", kk, !0), () => {
          window.removeEventListener("keydown", kk, !0)
        }
      }), [sk]);
      const {
        selected: ek
      } = Vk, yk = (0, tk.useRef)(null), fk = (0, tk.useRef)(null), [mk, Wk] = (0, tk.useState)(!1);
      AB(fk, !mk);
      const [vk, ik] = (0, tk.useState)(null), [Lk, Ok] = (0, tk.useState)([]), [Ek, Sk] = LF(), Nk = (0, tk.useRef)(Vk.selected);
      Nk.current = Vk.selected;
      const Hk = (0, tk.useRef)({}),
        uk = (0, tk.useCallback)((() => {
          const kk = yk.current;
          kk && ik(function(kk, Fk, Bk) {
            var Rk;
            const {
              innerWidth: tk,
              innerHeight: ak
            } = window, Xk = kk.offsetWidth, bk = kk.offsetHeight, wk = Math.max(zF()[0], 6), dk = [];
            for (const Jk of [wk, .2 * ak, .5 * ak - bk / 2, .33 * ak])
              for (const kk of [.5, .3, .7]) dk.push({
                left: Math.max(0, Math.min(tk - Xk - 6, Math.max(6, tk * kk - Xk / 2))),
                top: Jk
              });
            const sk = dk.map((kk => ({
                left: kk.left - 6,
                top: kk.top - 6,
                right: kk.left + Xk + 6,
                bottom: kk.top + bk + 6
              }))),
              Vk = BB(Fk, Bk);
            return dk[(0, BF.s)(sk, Vk, {
              avoid: Bk && null !== (Rk = Fk[Bk]) && void 0 !== Rk ? Rk : null
            })]
          }(kk, Hk.current, Nk.current))
        }), []),
        Mk = (0, tk.useCallback)(((kk, Fk, Bk) => {
          Ok(Fk), Sk(Bk), Hk.current = kk, uk()
        }), [uk, Sk]);
      return (0, tk.useLayoutEffect)(uk, [Vk.selected, uk]), (0, Ik.createPortal)((0, Yk.jsxs)("div", {
        ref: Ak,
        className: "HudFullScreenEditor",
        children: [(0, Yk.jsx)(JB, {
          ...Vk,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: Mk,
          onReady: Wk,
          lockable: bk
        }), (0, Yk.jsxs)("div", {
          ref: yk,
          className: "HudFullScreenToolbar",
          style: null === vk ? void 0 : {
            left: vk.left,
            top: vk.top,
            transform: "none"
          },
          children: [(0, Yk.jsx)("div", {
            ref: fk,
            className: "HudFullScreenControls",
            children: (0, Yk.jsx)(EF, {
              selected: ek,
              layout: Vk.layout.hudLayouts[Vk.orientation],
              actionButtons: Vk.actionButtons,
              keyNames: Vk.keyNames,
              overlaps: Lk,
              scaleCaps: Ek,
              onScale: Fk,
              onHidden: Bk,
              onReset: ak,
              locked: Xk,
              lockable: bk,
              onLocked: wk,
              joystickFixed: Vk.joystickFixed
            })
          }), (0, Yk.jsx)(dk.g, {
            className: "HudFullScreenDone",
            onClick: sk,
            padDefaultFocus: !0,
            children: Jk("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const fB = kk => `${Math.round(100*kk)}%`;

    function mB(kk) {
      let {
        info: Fk,
        tuple: Bk,
        props: tk
      } = kk;
      const {
        t: ak
      } = (0, Rk.x)();
      return (0, Yk.jsx)(Ak.l, {
        name: ak("hudLayout:size"),
        min: uk.j,
        max: uk.i,
        step: OF,
        initValue: Bk[2],
        disabled: tk.locked.has(Fk.id),
        selectableMax: tk.scaleCaps[Fk.id],
        cappedNote: ak("hudLayout:sizeCapped"),
        format: fB,
        onChange: kk => {
          tk.onScalePreview(Fk.id, kk)
        },
        onChangeComplete: kk => {
          tk.onScale(Fk.id, kk)
        }
      })
    }

    function WB(kk) {
      const {
        t: Fk
      } = (0, Rk.x)(), {
        present: Bk,
        elements: ak,
        selected: Xk,
        onSelect: bk,
        onHidden: dk,
        onReset: sk,
        note: Vk,
        actionButtons: Jk,
        keyNames: Ak,
        sizeBesidePreview: ek,
        locked: yk,
        lockable: fk,
        onLocked: mk
      } = kk, {
        rowIconsOpen: Wk,
        onRowIconsOpen: vk
      } = kk, ik = (0, tk.useRef)(null), Lk = null !== Xk && (Wk || !(0, uk.L)(Xk));
      return (0, tk.useEffect)((() => {
        var kk;
        const Fk = Xk ? null === (kk = ik.current) || void 0 === kk ? void 0 : kk.querySelector(`[data-hud-row="${Xk}"]`) : null;
        if (!Fk) return;
        const Bk = Fk.closest(".SettingsMenuRight"),
          Rk = performance.now();
        let tk = null;
        const ak = () => {
            clearInterval(wk), null === Bk || void 0 === Bk || Bk.removeEventListener("scroll", bk)
          },
          bk = () => {
            nF() || ak()
          },
          wk = setInterval((() => {
            const kk = performance.now();
            kk - Rk > 1500 ? ak() : nF() ? tk = null : null === tk ? tk = kk : kk - tk >= 150 && (ak(), function(kk) {
              var Fk;
              const Bk = kk.closest(".SettingsMenuRight"),
                Rk = null === (Fk = kk.closest(".HudLayoutSettings")) || void 0 === Fk ? void 0 : Fk.querySelector(".HudLayoutPreviewBox");
              if (!Bk || !Rk) return;
              const tk = Rk.getBoundingClientRect().bottom + 8,
                ak = Bk.getBoundingClientRect().bottom - 8,
                Xk = kk.getBoundingClientRect();
              Xk.top < tk ? Bk.scrollBy({
                top: Xk.top - tk,
                behavior: "smooth"
              }) : Xk.bottom > ak && Bk.scrollBy({
                top: Math.min(Xk.bottom - ak, Xk.top - tk),
                behavior: "smooth"
              })
            }(Fk))
          }), 50);
        return null === Bk || void 0 === Bk || Bk.addEventListener("scroll", bk, {
          passive: !0
        }), ak
      }), [Xk, Lk]), (0, Yk.jsx)("div", {
        ref: ik,
        className: "SettingBoxGroup HudElementList",
        children: Tk.filter((kk => Bk.has(kk.id) && (Wk || !(0, uk.L)(kk.id)))).map((Bk => {
          const Rk = ((kk, Fk) => {
              var Bk;
              return null !== (Bk = kk[Fk]) && void 0 !== Bk ? Bk : uk.n
            })(ak, Bk.id),
            tk = (0, uk.r)(ak, Bk.id),
            ik = Bk.id === Xk,
            Lk = Bk.scale && !ek,
            Ok = Vk(Bk.id, ik);
          return (0, Yk.jsxs)("div", {
            "data-hud-row": Bk.id,
            className: wk()("SettingBox HudElementRow", {
              Open: ik,
              Hidden: tk,
              Child: void 0 !== Bk.parent
            }),
            children: [(0, Yk.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, Yk.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": Lk ? ik : void 0,
                onClick: () => {
                  bk(Bk.id)
                },
                children: [zk(Bk.id, Jk, Fk, Ak), Bk.scale && 1 !== Rk[2] && !(ik && Lk) && (0, Yk.jsx)("span", {
                  className: "HudElementRowSize",
                  children: fB(Rk[2])
                }), Lk && (0, Yk.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, Yk.jsx)(Zk, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Bk.id,
                actionButtons: Jk,
                keyNames: Ak,
                locked: yk.has(Bk.id),
                lockable: fk(Bk.id),
                onLocked: mk
              }), "menu" === Bk.id && (0, Yk.jsx)(pk, {
                className: "HudElementRowIcon",
                open: Wk,
                name: zk(Bk.id, Jk, Fk, Ak),
                onToggle: vk
              }), "menu" !== Bk.id && (0, Yk.jsx)(qk, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Bk.id,
                elements: ak,
                actionButtons: Jk,
                keyNames: Ak,
                onHidden: dk
              }), (0, Yk.jsx)(Ck, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: yk.has(Bk.id),
                id: Bk.id,
                elements: ak,
                actionButtons: Jk,
                keyNames: Ak,
                onReset: sk
              })]
            }), ik && Lk && (0, Yk.jsx)(mB, {
              info: Bk,
              tuple: Rk,
              props: kk
            }), Ok && (0, Yk.jsx)("div", {
              className: "HudElementNote",
              children: Ok
            })]
          }, Bk.id)
        }))
      })
    }

    function vB(kk) {
      let {
        preview: Fk,
        quick: Bk,
        onFullScreen: ak,
        resting: Xk,
        onSidePanel: bk
      } = kk;
      const {
        t: wk
      } = (0, Rk.x)(), sk = VB(), Vk = (0, tk.useRef)(null), {
        width: Jk
      } = (0, FF.e)(Vk), Ak = Math.floor(sk.width * Math.min(1, Fk.maxHeight / sk.height)), ek = Jk - Ak - 12, yk = ek >= 130, fk = Jk > 0;
      (0, tk.useEffect)((() => {
        fk && bk(yk)
      }), [fk, yk, bk]);
      const mk = (0, BF.x)(yk ? Ak : Jk, sk.width, sk.height, Fk.maxHeight),
        Wk = Xk ? (0, Yk.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: sk.height * mk
          }
        }) : (0, Yk.jsx)(JB, {
          ...Fk
        }),
        vk = kk => (0, Yk.jsxs)(dk.O, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: wk("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: ak,
          children: [(0, Yk.jsx)(Nk.d, {
            name: "expand"
          }), kk && (0, Yk.jsx)("span", {
            children: wk("hudLayout:fullScreen")
          })]
        });
      return (0, Yk.jsxs)("div", {
        ref: Vk,
        className: "SettingBox HudLayoutPreviewBox",
        children: [Jk > 0 && yk && (0, Yk.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, Yk.jsx)("div", {
            style: {
              width: Ak
            },
            children: Wk
          }), (0, Yk.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, Yk.jsx)(EF, {
              selected: Fk.selected,
              ...Bk,
              joystickFixed: Fk.joystickFixed,
              extra: vk(!Fk.selected || ek >= 278)
            })
          })]
        }), Jk > 0 && !yk && (0, Yk.jsxs)(Yk.Fragment, {
          children: [Wk, (0, Yk.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: vk(!1)
          })]
        })]
      })
    }
    var iB = Bk(2352),
      YB = Bk(4145),
      oB = Bk(2334);
    const LB = kk => {
      const Fk = tF.r * ("sides" === kk ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(Fk / 2))
    };

    function OB(kk, Fk, Bk) {
      const [Rk, tk, ak, Xk] = kk;
      return "sides" === Fk ? [Rk, Bk, ak, Bk] : [Bk, tk, Bk, Xk]
    }
    const EB = [null, null, null, null],
      SB = kk => `${kk}px`;

    function NB(kk) {
      let {
        safe: Fk,
        onPreview: Bk,
        onCommit: ak
      } = kk;
      const {
        t: Xk
      } = (0, Rk.x)(), bk = (0, tF.D)(null !== Fk && void 0 !== Fk ? Fk : EB, window.innerWidth, window.innerHeight, PF(document).map(Math.round)), wk = (0, tk.useRef)(null !== Fk && void 0 !== Fk ? Fk : EB);
      wk.current = null !== Fk && void 0 !== Fk ? Fk : EB;
      const sk = kk => {
        const Fk = Math.min(LB(kk), "sides" === kk ? Math.max(bk[1], bk[3]) : Math.max(bk[0], bk[2]));
        return (0, Yk.jsx)(Ak.l, {
          name: Xk("sides" === kk ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: LB(kk),
          step: 2,
          initValue: Fk,
          format: SB,
          onChange: Fk => {
            Bk(OB(wk.current, kk, Fk))
          },
          onChangeComplete: Rk => {
            if (Rk === Fk) return void Bk(wk.current);
            const tk = OB(wk.current, kk, Rk);
            wk.current = tk, ak(tk), (0, Ek.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: kk
            })
          }
        })
      };
      return (0, Yk.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, Yk.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, Yk.jsx)("div", {
            children: Xk("hudLayout:safeZone")
          }), (0, Yk.jsx)(dk.O, {
            active: null === Fk,
            pressed: null === Fk,
            onClick: () => {
              ak(null)
            },
            children: Xk("hudLayout:safeZoneAuto")
          })]
        }), sk("sides"), sk("ends")]
      })
    }

    function HB() {
      const {
        t: kk
      } = (0, Rk.x)(), Fk = (0, uk.Z)(), {
        clientEscMenuOptions: Bk
      } = (0, sk.h)(["clientEscMenuOptions"]), ak = (0, iB.e)(), Xk = Fk.hudLayouts[ak], [bk, wk] = (0, tk.useState)(null), {
        rowIconsOpen: Vk,
        onRowIconsOpen: Jk,
        select: ek
      } = function(kk, Fk) {
        const [Bk, Rk] = (0, tk.useState)((() => uk.D.some((Fk => void 0 !== kk.hudElements[Fk] || kk.hudLocked.includes(Fk))))), ak = (0, tk.useCallback)((kk => {
          Fk(kk), (0, uk.L)(kk) && Rk(!0)
        }), [Fk]);
        return {
          rowIconsOpen: Bk,
          onRowIconsOpen: Rk,
          select: ak
        }
      }(Xk, wk), [yk, fk] = (0, tk.useState)([]), [mk, Wk] = (0, tk.useState)(null), [vk, ik] = LF(), Lk = (0, tk.useCallback)(((kk, Fk, Bk) => {
        fk(Fk), ik(Bk);
        const Rk = Object.keys(kk);
        Wk((kk => (null === kk || void 0 === kk ? void 0 : kk.size) === Rk.length && Rk.every((Fk => kk.has(Fk))) ? kk : new Set(Rk)))
      }), [ik]), {
        gameState: Ok
      } = (0, sk.h)(["gameState"]), Nk = (0, oB.g)(), [Hk] = (0, tk.useState)((() => "inGame" === Ok ? function(kk, Fk) {
        const Bk = kk.querySelector(".InGameUi .TouchComponentsButtons");
        if (!Bk) return bF;
        const Rk = {},
          tk = {};
        for (const dk of XF) {
          const kk = Bk.querySelector(`.TouchSlot${dk} > .TouchKey`);
          if (kk) {
            var ak, Xk;
            Rk[dk] = kk.cloneNode(!0);
            const Fk = (null !== (ak = null === (Xk = kk.querySelector(".TouchKeyLabel")) || void 0 === Xk ? void 0 : Xk.textContent) && void 0 !== ak ? ak : "").split(/\s+/).filter((kk => !/[\d\xd7]/.test(kk))).join(" ");
            Fk && (tk[dk] = Fk)
          }
        }
        const bk = Fk => {
            const Bk = kk.querySelector(`.InGameUi ${Fk}`);
            return null !== Bk && !Bk.classList.contains("Hidden")
          },
          wk = [...kk.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((kk => kk.cloneNode(!0)));
        return {
          faces: Object.keys(Rk).length > 0 ? Rk : null,
          names: tk,
          shop: bk(".TouchInventoryKey.ShopKey"),
          bag: bk(".TouchInventoryKey.BagKey"),
          items: wk.length > 0 ? wk : null,
          rowIcons: Fk
        }
      }(document, Nk) : bF)), Mk = (0, tk.useRef)(null), gk = (0, tk.useRef)(null), Uk = function(kk) {
        const [Fk, Bk] = (0, tk.useState)((() => .4 * window.innerHeight));
        return (0, tk.useLayoutEffect)((() => {
          var Fk;
          const Rk = null === (Fk = kk.current) || void 0 === Fk ? void 0 : Fk.closest(".SettingsMenuRight");
          if (!Rk) return;
          const tk = () => {
            const kk = Rk.clientHeight < uB ? .4 : .5;
            Bk(Math.max(80, Rk.clientHeight * kk - 24))
          };
          tk();
          const ak = new ResizeObserver(tk);
          return ak.observe(Rk), () => {
            ak.disconnect()
          }
        }), [kk]), Fk
      }(gk), ck = (0, YB.t)(Bk.joystickMode), Gk = Bk.touchActionButtons, Dk = (0, tk.useMemo)((() => function(kk, Fk) {
        const Bk = {},
          Rk = [
            ["extra", "X"],
            ["game", "G"]
          ];
        Fk || Rk.push(["attack", "P"]);
        for (const [tk, ak] of Rk) {
          const Fk = kk.names[ak];
          Fk && (Bk[tk] = Fk)
        }
        return Bk
      }(Hk, Gk)), [Hk, Gk]);
      (0, tk.useEffect)((() => {
        (0, Ek.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [zk, hk] = (0, tk.useState)(!1), [qk, Ck] = (0, tk.useState)(!1), Zk = (0, tk.useRef)(null);
      AB(Zk, !qk);
      const [pk, Kk] = (0, tk.useState)(!1), xk = (0, tk.useCallback)((() => {
        Kk(!1)
      }), []), jk = (0, tk.useMemo)((() => new Set(Xk.hudLocked)), [Xk.hudLocked]), Ik = kk => {
        var Fk, Bk;
        const Rk = (0, uk.q)(),
          tk = kk(Rk);
        (0, uk.S)(null !== (Fk = null === (Bk = Mk.current) || void 0 === Bk ? void 0 : Bk.keepLocks(Rk, tk)) && void 0 !== Fk ? Fk : tk)
      }, Qk = (kk, Fk) => {
        Ik((Bk => (0, uk.ab)(Bk, ak, kk, Fk)))
      }, kF = (kk, Fk, Bk) => {
        Qk(kk, {
          dx: Fk,
          dy: Bk
        }), (0, Ek.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${kk}`
        })
      }, FF = (kk, Fk) => {
        Ik((Bk => (0, uk.bb)(Bk, ak, kk, Fk)))
      }, BF = kk => {
        const Fk = rk[kk];
        return (Fk.move || Fk.scale) && ("joystick" !== kk || ck) && !(0, RF.r)(kk, Xk.hudElements[kk])
      }, tF = kk => rk[kk].move && ("joystick" !== kk || ck) && !jk.has(kk), aF = new Set(Tk.map((kk => kk.id)).filter((kk => {
        const Fk = (0, uk.L)(kk) && !Hk.rowIcons.includes(kk);
        return null === mk || mk.has(kk) || (0, uk.r)(Xk.hudElements, kk) && !Fk
      }))), wF = {
        present: aF,
        actionButtons: Gk,
        keyNames: Dk,
        scaleCaps: vk,
        sizeBesidePreview: zk,
        elements: Xk.hudElements,
        selected: bk,
        onSelect: ek,
        rowIconsOpen: Vk,
        onRowIconsOpen: Jk,
        onScalePreview: (kk, Fk) => {
          var Bk;
          null === (Bk = Mk.current) || void 0 === Bk || Bk.setScale(kk, Fk)
        },
        onScale: (kk, Fk) => {
          Qk(kk, {
            scale: Fk
          }), (0, Ek.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${kk}`
          })
        },
        onHidden: (kk, Fk) => {
          Qk(kk, {
            hidden: Fk
          }), (0, Ek.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${Fk?"hide":"show"}:${kk}`
          })
        },
        onReset: kk => {
          Qk(kk, uk.c)
        },
        locked: jk,
        lockable: BF,
        onLocked: FF,
        note: (Fk, Bk) => {
          const Rk = Bk && yk.length > 0 ? kk("hudLayout:overlapsNote", {
            names: Pk(yk, Gk, kk, Dk)
          }) : null;
          return Bk && lk(Fk, ck) ? (0, Yk.jsxs)(Yk.Fragment, {
            children: [Rk && (0, Yk.jsx)("span", {
              children: Rk
            }), (0, Yk.jsx)("span", {
              children: kk("hudLayout:floatingJoystickNote")
            }), !zk && (0, Yk.jsx)(nk, {})]
          }) : Rk || (Bk && jk.has(Fk) ? kk("hudLayout:lockedNote") : Bk && "cluster" === Fk ? kk("hudLayout:clusterNote") : Bk && "menu" === Fk ? kk("hudLayout:menuNote") : Bk && (0, RF.r)(Fk, Xk.hudElements[Fk]) && tF(Fk) ? kk("hudLayout:rowIconNote") : Bk && "arrows" === Fk ? kk("hudLayout:arrowsNote") : "inventory" === Fk && (0, uk.r)(Xk.hudElements, "inventory") ? kk("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, Yk.jsxs)("div", {
        ref: gk,
        className: "HudLayoutSettings",
        children: [(0, Yk.jsxs)("div", {
          ref: Zk,
          className: "HudLayoutBody",
          children: [(0, Yk.jsx)("div", {
            className: "HudLayoutOrientation",
            children: kk("landscape" === ak ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, Yk.jsx)(vB, {
            preview: {
              layout: Fk,
              orientation: ak,
              selected: bk,
              onSelect: ek,
              onMove: kF,
              canMove: tF,
              actionButtons: Gk,
              joystickFixed: ck,
              presence: Hk,
              keyNames: Dk,
              maxHeight: Uk,
              apiRef: Mk,
              onMeasured: Lk,
              onReady: Ck,
              lockable: BF
            },
            quick: {
              layout: Xk,
              actionButtons: Gk,
              keyNames: Dk,
              scaleCaps: vk,
              overlaps: yk,
              onScale: wF.onScale,
              onHidden: wF.onHidden,
              onReset: wF.onReset,
              locked: jk,
              lockable: BF,
              onLocked: FF
            },
            onFullScreen: () => {
              Kk(!0)
            },
            resting: pk,
            onSidePanel: hk
          }), pk && (0, Yk.jsx)(yB, {
            layout: Fk,
            orientation: ak,
            selected: bk,
            onSelect: ek,
            onMove: kF,
            canMove: tF,
            actionButtons: Gk,
            joystickFixed: ck,
            presence: Hk,
            keyNames: Dk,
            onScale: wF.onScale,
            onHidden: wF.onHidden,
            onReset: wF.onReset,
            locked: jk,
            lockable: BF,
            onLocked: FF,
            apiRef: Mk,
            onClose: xk
          }), (0, Yk.jsx)(NB, {
            safe: Xk.hudSafe,
            onCommit: kk => {
              Ik((Fk => (0, uk.db)(Fk, ak, kk)))
            },
            onPreview: kk => {
              var Fk;
              null === (Fk = Mk.current) || void 0 === Fk || Fk.setSafe(kk)
            }
          }), (0, Yk.jsx)(Ak.e, {
            label: kk("hudLayout:snapCentre"),
            checked: Fk.hudSnapCentre,
            onClick: kk => {
              (0, uk.R)(kk)
            },
            circleInfoText: kk("hudLayout:snapCentreInfo")
          }), (0, Yk.jsx)(WB, {
            ...wF
          }), (0, Yk.jsx)(Ak.i, {
            label: kk("hudLayout:shape"),
            options: uk.E.map((Fk => ({
              value: Fk,
              label: kk(`hudLayout:shape_${Fk}`)
            }))),
            value: Fk.hudShape,
            onChange: kk => {
              Ik((Fk => ({
                ...Fk,
                hudShape: kk
              }))), (0, Ek.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: kk
              })
            }
          }), (0, Yk.jsx)(Ak.l, {
            name: kk("hudLayout:opacity"),
            min: uk.f,
            max: 1,
            step: .05,
            initValue: Fk.hudKeyOpacity,
            format: kk => `${Math.round(100*kk)}%`,
            circleInfoText: kk("hudLayout:opacityInfo"),
            onChange: kk => {
              var Fk;
              null === (Fk = Mk.current) || void 0 === Fk || Fk.setOpacity(kk)
            },
            onChangeComplete: kk => {
              (0, uk.N)(kk), (0, Ek.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, Yk.jsx)(dk.J, {
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
              !0 === await kk.getResult() && (0, uk.M)()
            }()
          },
          children: kk("hudLayout:resetAll")
        })]
      })
    }
    const uB = 350;
    const MB = [function() {
      const {
        t: kk
      } = (0, Rk.x)(), [Fk, Bk] = (0, tk.useState)(!1), ak = (0, tk.useRef)(null);
      return (0, tk.useEffect)((() => {
        var kk;
        Fk && (null === (kk = ak.current) || void 0 === kk || kk.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [Fk]), (0, Yk.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, Yk.jsxs)("button", {
          ref: ak,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": Fk,
          onClick: () => {
            Bk(!Fk)
          },
          children: [(0, Yk.jsx)(Nk.d, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, Yk.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, Yk.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: kk("hudLayout:title")
            }), (0, Yk.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: kk("hudLayout:entrySub")
            })]
          }), (0, Yk.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), Fk && (0, Yk.jsx)(HB, {})]
      })
    }, function() {
      const {
        t: kk
      } = (0, Rk.x)(), {
        joystickMode: Fk,
        touchSpeedCurve: Bk,
        autorun: tk,
        jumpLock: ak
      } = (0, sk.h)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Yk.jsxs)(Yk.Fragment, {
        children: [(0, Yk.jsx)(Ak.i, {
          label: kk("settingsMenu:joystick"),
          options: ik.zb.map((Fk => ({
            value: Fk,
            label: kk(Lk[Fk])
          }))),
          value: Fk,
          onChange: kk => {
            sk.c.setClientEscMenuOptions({
              joystickMode: kk
            })
          },
          circleInfoText: kk("settingsMenu:joystickInfo")
        }), (0, Yk.jsx)(Ak.e, {
          label: kk("settingsMenu:preciseWalking"),
          checked: Bk,
          onClick: kk => {
            sk.c.setClientEscMenuOptions({
              touchSpeedCurve: kk
            })
          },
          circleInfoText: kk("settingsMenu:preciseWalkingInfo")
        }), (0, Yk.jsx)(Ak.e, {
          label: kk("settingsMenu:autoRun"),
          checked: tk,
          onClick: kk => {
            sk.c.setClientEscMenuOptions({
              autorun: kk
            })
          },
          circleInfoText: kk("settingsMenu:autoRunInfo")
        }), (0, Yk.jsx)(Ak.e, {
          label: kk("settingsMenu:jumpLock"),
          checked: ak,
          onClick: kk => {
            sk.c.setClientEscMenuOptions({
              jumpLock: kk
            })
          },
          circleInfoText: kk("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, Yk.jsx)(vk.d, {})
    }, function() {
      const {
        t: kk
      } = (0, Rk.x)(), {
        clientEscMenuOptions: Fk
      } = (0, sk.h)(["clientEscMenuOptions"]);
      return (0, Ok.c)() ? (0, Yk.jsx)(Ak.e, {
        label: kk("settingsMenu:vibration"),
        checked: Fk.vibration,
        onClick: kk => {
          sk.c.setClientEscMenuOptions({
            vibration: kk
          })
        },
        circleInfoText: kk("settingsMenu:vibrationInfo")
      }) : null
    }];

    function gB() {
      return (0, Yk.jsx)(Yk.Fragment, {
        children: MB.map(((kk, Fk) => (0, Yk.jsx)(kk, {}, Fk)))
      })
    }
    var UB = Bk(4126);

    function cB() {
      const {
        t: kk
      } = (0, Rk.x)(), {
        isTouchScreen: Fk,
        clientEscMenuOptions: Bk,
        gameState: Xk
      } = (0, sk.h)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), bk = (0, ek.j)("ezBridging"), wk = (0, ek.j)("ezTowering"), fk = "inGame" !== Xk || !0 === bk, mk = (0, yk.e)() && ("inGame" !== Xk || !0 === wk), [, vk] = (0, tk.useReducer)((kk => kk + 1), 0), ik = (0, Wk.g)(), [Lk, Ok] = (0, tk.useState)(UB.f);
      return (0, Yk.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [ik && (0, Yk.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, Yk.jsx)("div", {
            children: kk("controller:settingsControlsNote")
          }), (0, Yk.jsx)(dk.O, {
            onClick: () => {
              sk.c.set({
                openSettingsCategory: "controller"
              })
            },
            children: kk("controller:settingsOpenController")
          })]
        }), (0, Vk.isTouchscreen)() && !(0, Vk.isMobile)() ? (0, Yk.jsx)(Yk.Fragment, {
          children: (0, Yk.jsx)(Ak.e, {
            label: kk("settingsMenu:useTouchControls"),
            checked: Lk,
            onClick: kk => {
              (0, UB.d)(kk), Ok(kk)
            }
          })
        }) : null, Fk && (0, Yk.jsx)(gB, {}), fk && (0, Yk.jsx)(Ak.e, {
          label: kk("settingsMenu:ezBridging"),
          checked: Bk.ezBridging,
          onClick: kk => {
            sk.c.setClientEscMenuOptions({
              ezBridging: kk
            })
          },
          circleInfoText: kk("settingsMenu:ezBridgingInfo")
        }), mk && (0, Yk.jsx)(Ak.e, {
          label: kk("settingsMenu:ezTowering"),
          checked: Bk.ezTowering,
          onClick: kk => {
            sk.c.setClientEscMenuOptions({
              ezTowering: kk
            })
          },
          circleInfoText: kk("settingsMenu:ezToweringInfo")
        }), (0, Yk.jsx)(Ak.e, {
          label: kk("settingsMenu:crouchToggle"),
          checked: Bk.crouchIsToggle,
          onClick: kk => {
            sk.c.setClientEscMenuOptions({
              crouchIsToggle: kk
            })
          },
          circleInfoText: kk("settingsMenu:crouchToggleInfo")
        }), (0, Yk.jsx)(Ak.e, {
          label: kk("settingsMenu:hideUiToggle"),
          checked: Bk.hideUiIsToggle,
          onClick: kk => {
            sk.c.setClientEscMenuOptions({
              hideUiIsToggle: kk
            })
          },
          circleInfoText: kk("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, Jk.c)() && (0, Yk.jsx)(Ak.l, {
          name: kk("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: Bk.touchscreenSensitivity,
          onChange: kk => {
            sk.c.setClientEscMenuOptions({
              touchscreenSensitivity: kk
            })
          }
        }), !(0, Vk.isMobile)() && (0, Yk.jsx)(Ak.l, {
          name: kk("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: Bk.mouseSensitivity,
          onChange: kk => {
            sk.c.setClientEscMenuOptions({
              mouseSensitivity: kk
            })
          }
        }), !(0, Vk.isMobile)() && (0, Yk.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Yk.jsx)("div", {
            className: "SliderText",
            children: kk("settingsMenu:keyBindings")
          }), ak.e.map((Fk => (0, Yk.jsx)(GB, {
            title: kk(Fk.name.translationKey, Fk.name.params),
            defaultOpen: ak.i.has(Fk.id),
            children: Fk.actions.map((kk => (0, Yk.jsx)(TB, {
              noaAction: kk,
              forceUpdate: vk,
              clashesWith: Fk.clashesWith,
              showPadGlyph: ik
            }, kk)))
          }, Fk.name.translationKey))), (0, Yk.jsx)(dk.J, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, ak.z)(), vk()
            },
            children: kk("controls:resetBindings")
          })]
        })]
      })
    }

    function GB(kk) {
      let {
        title: Fk,
        defaultOpen: Bk,
        children: Rk
      } = kk;
      const [ak, Xk] = (0, tk.useState)(Bk);
      return (0, Yk.jsxs)("div", {
        className: wk()("ControlsSection", {
          Collapsed: !ak
        }),
        children: [(0, Yk.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Xk(!ak)
          },
          children: [(0, Yk.jsx)("div", {
            className: "ControlsSectionTitle",
            children: Fk
          }), (0, Yk.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), ak && (0, Yk.jsx)("div", {
          className: "ControlsSectionRows",
          children: Rk
        })]
      })
    }

    function TB(kk) {
      let {
        noaAction: Fk,
        forceUpdate: Bk,
        clashesWith: bk,
        showPadGlyph: sk
      } = kk;
      const {
        t: Vk
      } = (0, Rk.x)(), Jk = (0, mk.d)(Fk), [Ak, ek] = (0, tk.useState)(!1), [yk, Wk] = (0, tk.useState)("controls:clickToEnterNewBinding"), [vk, ik] = (0, tk.useState)(null), [Lk, Ok] = (0, tk.useState)(null), Ek = (0, tk.useRef)(null);
      (0, tk.useEffect)((() => {
        Ak && Ek.current && Ek.current.focus()
      }), [Ak]);
      const Sk = ak.s[Fk].filter((kk => Xk.d[kk]));
      let Nk = null;
      const Hk = [],
        uk = bk.flatMap((kk => {
          var Fk, Bk;
          return null !== (Fk = null === (Bk = ak.e.find((Fk => Fk.id === kk))) || void 0 === Bk ? void 0 : Bk.actions) && void 0 !== Fk ? Fk : []
        }));
      for (const Rk of uk) {
        if (Rk === Fk) continue;
        const kk = ak.s[Rk];
        for (const Fk of kk) Sk.includes(Fk) && Hk.push(Vk(ak.t[Rk].translationKey, ak.t[Rk].params))
      }
      Hk.length > 0 && (Nk = Vk("controls:sharedBindingsWarning") + " ", Nk += Hk.join(", "));
      const Mk = () => {
          ek(!1), ik(null), Wk("controls:clickToEnterNewBinding"), Ok(null)
        },
        gk = () => "BindingInput_" + Fk;
      return (0, Yk.jsxs)("div", {
        className: wk()("ControlRow", {
          WarningBorder: null !== Nk
        }),
        children: [(0, Yk.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Yk.jsxs)("div", {
            className: "ControlName",
            children: [Vk(ak.t[Fk].translationKey, ak.t[Fk].params), sk && Jk && (0, Yk.jsx)(fk.e, {
              glyph: Jk,
              className: "ControlPadGlyph"
            })]
          }), (0, Yk.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Yk.jsxs)("div", {
              className: "ControlBindingsList",
              children: [Sk.map((kk => (0, Yk.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Yk.jsx)("div", {
                  children: (0, ak.n)(kk)
                }), (0, Yk.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Rk = (0, ak.v)(Fk, kk);
                    Rk.isError() ? Ok(Rk.asError().message) : Ok(null), Bk()
                  },
                  children: "\xd7"
                })]
              }, kk))), !Ak && (0, Yk.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  ek(!0), Ok(null)
                },
                children: (0, Yk.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), Ak && (0, Yk.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Yk.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Yk.jsx)("div", {
                  className: "InputOverlay",
                  children: vk ? (0, ak.n)(vk) : (0, Yk.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Vk(yk)
                  })
                }), (0, Yk.jsx)("input", {
                  ref: Ek,
                  id: gk(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: kk => {
                    if ("Escape" === kk.code) return Mk(), kk.preventDefault(), void kk.stopPropagation();
                    const Fk = kk.code;
                    Xk.b.includes(Fk) ? (Ok(null), ik(Fk)) : (Ok("controls:keyIsReserved"), ik(null)), kk.preventDefault(), kk.stopPropagation()
                  },
                  onMouseDown: kk => {
                    const Fk = "Mouse" + (kk.button + 1);
                    document.activeElement && document.activeElement.id === gk() ? Xk.b.includes(Fk) ? (Ok(null), ik(Fk)) : (Ok("controls:keyIsReserved"), ik(null)) : Wk("controls:enterNewBinding"), kk.stopPropagation()
                  },
                  onBlur: () => {
                    Wk("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Yk.jsx)(dk.g, {
                onPointerDown: kk => {
                  kk.preventDefault()
                },
                onClick: () => {
                  (0, ak.b)(Fk, vk), Bk(), Mk()
                },
                className: "ControlBindingAddButton",
                disabled: null === vk,
                children: Vk("general:add")
              }), (0, Yk.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  Mk()
                },
                children: "\xd7"
              })]
            }), Lk && (0, Yk.jsx)("div", {
              className: "ControlBindingError",
              children: Vk(Lk)
            })]
          })]
        }), Nk && (0, Yk.jsx)("div", {
          className: "ControlRowWarning",
          children: Nk
        })]
      })
    }
  },
  8519: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk
    });
    var Rk = Bk(22),
      tk = Bk(3239),
      ak = Bk(1300),
      Xk = Bk(1344);
    const bk = async () => {
      if ((0, Xk.h)()) {
        if (!0 !== await ak.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Rk.c.get("gameState")) return
      }(0, tk.c)()
    }
  },
  8521: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => wk,
      d: () => ak,
      f: () => Xk,
      j: () => tk,
      m: () => bk
    });
    var Rk = Bk(1870);
    const tk = "controllerPadShopOpen",
      ak = kk => Rk.f.includes(kk),
      Xk = kk => Object.values(kk).some((kk => !1 !== kk.canBuy && !kk.isRewardedAd)),
      bk = (kk, Fk, Bk) => {
        var Rk, tk, Xk, bk;
        const wk = kk.filter((kk => !ak(kk))),
          dk = null !== Fk && kk.includes(Fk) ? Fk : null;
        return null !== dk && !ak(dk) && Bk(dk) ? dk : null !== (Rk = null !== (tk = null !== (Xk = null !== (bk = wk.find(Bk)) && void 0 !== bk ? bk : wk[0]) && void 0 !== Xk ? Xk : dk) && void 0 !== tk ? tk : kk[0]) && void 0 !== Rk ? Rk : null
      },
      wk = kk => kk.userInput || kk.isRewardedAd || "boolean" === typeof kk.isSelected ? null : JSON.stringify([kk.image, kk.cost, kk.currency, kk.amount, kk.customTitle, kk.buyButtonText, kk.description, kk.canBuy])
  },
  8548: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk,
      g: () => sk
    });
    var Rk = Bk(61),
      tk = Bk(1387),
      ak = Bk(1912),
      Xk = Bk(1355),
      bk = Bk(1376),
      wk = Bk(1069);
    const dk = () => {
        const kk = (0, Xk.s)();
        if ((0, Rk.useEffect)((() => {
            (0, Xk.i)()
          }), []), !kk) return null;
        const {
          ControllerCategory: Fk
        } = kk;
        return (0, wk.jsx)(bk.e, {
          children: (0, wk.jsx)(Fk, {})
        })
      },
      sk = () => {
        var kk;
        const Fk = (0, Xk.s)(),
          [, Bk] = (0, Rk.useReducer)((kk => kk + 1), 0);
        return (0, tk.f)(ak.d, Bk), null !== (kk = null === Fk || void 0 === Fk ? void 0 : Fk.hasActivePad()) && void 0 !== kk && kk
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);