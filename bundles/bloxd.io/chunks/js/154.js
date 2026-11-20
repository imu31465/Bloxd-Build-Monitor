export const id = 154;
export const ids = [154];
export const modules = {
  8623: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ju
    });
    var Eu = yu(27),
      Ku = yu(1170),
      Qu = yu(4782),
      mu = yu(1079);

    function Ju(uu) {
      let {
        note: Ru
      } = uu;
      const {
        t: yu
      } = (0, Ku.E)(), {
        clientEscMenuOptions: Ju
      } = (0, Eu.j)(["clientEscMenuOptions"]);
      return (0, mu.jsx)(Qu.c, {
        label: yu("touchSettings:actionButtons"),
        checked: Ju.touchActionButtons,
        onClick: uu => {
          Eu.d.setClientEscMenuOptions({
            touchActionButtons: uu
          })
        },
        circleInfoText: yu("touchSettings:actionButtonsInfo"),
        note: Ru
      })
    }
  },
  8611: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => ty,
      f: () => sy
    });
    var Eu = yu(1170),
      Ku = yu(64),
      Qu = yu(1915),
      mu = yu(1923),
      Ju = yu(1035),
      Nu = yu.n(Ju),
      Xu = yu(1408),
      Vu = yu(27),
      ru = yu(106),
      Bu = yu(125),
      xu = yu(4782),
      Su = yu(2335),
      pu = yu(312),
      Tu = yu(1927),
      Wu = yu(1935),
      ju = yu(8615),
      Hu = yu(8623),
      du = yu(330),
      bu = yu(1079);
    const Cu = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var ku = yu(8631);
    var eu = yu(1422),
      Au = yu(1311),
      Du = yu(1043),
      Mu = yu(1362),
      Iu = yu(2347);
    const Gu = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(Iu.C.map((uu => [uu, "menu"])))
      },
      Uu = uu => Iu.y.filter((Ru => Gu[Ru] === uu)),
      nu = new Set(Uu("cluster")),
      su = ["cluster"],
      tu = [...su, ...Iu.y.filter((uu => !su.includes(uu) && !Gu[uu]))],
      lu = tu.flatMap((uu => [uu, ...Uu(uu)])).map((uu => ({
        id: uu,
        label: `hudLayout:${uu}`,
        ...Iu.x[uu],
        parent: Gu[uu]
      }))),
      gu = Object.fromEntries(lu.map((uu => [uu.id, uu]))),
      cu = "data-hud-el";

    function Lu(uu, Ru, yu, Eu) {
      const Ku = yu(function(uu, Ru) {
          return "attack" !== uu || Ru ? gu[uu].label : "hudLayout:attackContext"
        }(uu, Ru)),
        Qu = Eu[uu];
      return Qu ? yu("hudLayout:slotWithKey", {
        slot: Ku,
        key: Qu
      }) : Ku
    }

    function zu(uu, Ru, yu, Eu) {
      return uu.map((uu => Lu(uu, Ru, yu, Eu))).join(", ")
    }

    function Fu(uu) {
      let {
        className: Ru,
        keepPlace: yu
      } = uu;
      return yu ? (0, bu.jsx)("div", {
        className: Nu()(Ru, "Placeholder")
      }) : null
    }

    function wu(uu) {
      let {
        id: Ru,
        elements: yu,
        actionButtons: Ku,
        keyNames: Qu,
        className: mu,
        keepPlace: Ju,
        onHidden: Nu
      } = uu;
      const {
        t: Vu
      } = (0, Eu.E)();
      if (!gu[Ru].hide) return (0, bu.jsx)(Fu, {
        className: mu,
        keepPlace: Ju
      });
      const ru = (0, Iu.t)(yu, Ru);
      return (0, bu.jsx)(Xu.P, {
        className: mu,
        ariaLabel: Vu(ru ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: Lu(Ru, Ku, Vu, Qu)
        }),
        pressed: !ru,
        onClick: () => {
          Nu(Ru, !ru)
        },
        children: (0, bu.jsx)(Du.c, {
          name: ru ? "eye-slash" : "eye"
        })
      })
    }

    function Zu(uu) {
      var Ru;
      let {
        id: yu,
        elements: Ku,
        actionButtons: Qu,
        keyNames: mu,
        className: Ju,
        keepPlace: Nu,
        onlyWhenMoved: Vu,
        locked: ru,
        onReset: Bu
      } = uu;
      const {
        t: xu
      } = (0, Eu.E)(), Su = gu[yu], pu = (0, Iu.I)(null !== (Ru = Ku[yu]) && void 0 !== Ru ? Ru : Iu.p);
      return !Su.move && !Su.scale || Vu && pu ? (0, bu.jsx)(Fu, {
        className: Ju,
        keepPlace: Nu
      }) : (0, bu.jsx)(Xu.P, {
        className: Ju,
        disabled: pu || ru,
        ariaLabel: xu("hudLayout:resetElement", {
          name: Lu(yu, Qu, xu, mu)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: yu
        },
        onClick: uu => {
          Vu && Yu(uu.currentTarget), Bu(yu)
        },
        children: (0, bu.jsx)(Du.c, {
          name: "rotate-left"
        })
      })
    }

    function hu(uu) {
      let {
        id: Ru,
        actionButtons: yu,
        keyNames: Ku,
        className: Qu,
        keepPlace: mu,
        locked: Ju,
        lockable: Nu,
        onLocked: Vu
      } = uu;
      const {
        t: ru
      } = (0, Eu.E)();
      return Nu || Ju ? (0, bu.jsx)(Xu.P, {
        className: Qu,
        ariaLabel: ru(Ju ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: Lu(Ru, yu, ru, Ku)
        }),
        pressed: Ju,
        active: Ju,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${Ju?"unlock":"lock"}:${Ru}`
        },
        onClick: () => {
          Vu(Ru, !Ju)
        },
        children: (0, bu.jsx)(Du.c, {
          name: Ju ? "lock" : "lock-open"
        })
      }) : (0, bu.jsx)(Fu, {
        className: Qu,
        keepPlace: mu
      })
    }

    function Pu(uu) {
      let {
        className: Ru,
        open: yu,
        name: Ku,
        onToggle: Qu
      } = uu;
      const {
        t: mu
      } = (0, Eu.E)();
      return (0, bu.jsx)(Xu.P, {
        className: Ru,
        ariaLabel: mu(yu ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Ku
        }),
        pressed: yu,
        analyticsClick: {
          id: "hud_layout.children",
          value: yu ? "close" : "open"
        },
        onClick: () => {
          Qu(!yu)
        },
        children: (0, bu.jsx)(Du.c, {
          name: yu ? "angle-up" : "angle-down"
        })
      })
    }

    function iu(uu, Ru) {
      var yu;
      uu.contains(document.activeElement) && Ru.focus({
        preventScroll: !0
      }), null === (yu = (0, Mu.f)()) || void 0 === yu || yu.handOverPadFocus(uu, Ru)
    }

    function Yu(uu) {
      const Ru = uu.closest("[data-hud-row]"),
        yu = null === Ru || void 0 === Ru ? void 0 : Ru.querySelector(".HudElementRowName");
      return !(!Ru || !yu) && (iu(Ru, yu), !0)
    }
    const ou = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function qu(uu, Ru) {
      return "joystick" === uu && !Ru
    }

    function Ou() {
      const {
        t: uu
      } = (0, Eu.E)();
      return (0, bu.jsx)(Xu.P, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: uu => {
          const Ru = uu.currentTarget;
          if (!Yu(Ru)) {
            const uu = function(uu) {
              var Ru, yu;
              const Eu = [uu.previousElementSibling, uu.nextElementSibling].find((uu => uu instanceof HTMLElement && uu.matches(ou)));
              return null !== (Ru = null !== Eu && void 0 !== Eu ? Eu : null === (yu = uu.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === yu ? void 0 : yu.querySelector(`:is(${ou}):not(.HudFixJoystickButton)`)) && void 0 !== Ru ? Ru : null
            }(Ru);
            uu && iu(Ru, uu)
          }
          Vu.d.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: uu("hudLayout:fixJoystick")
      })
    }
    var vu = yu(80),
      au = yu(1247),
      fu = yu(1100),
      uR = yu(2615),
      RR = yu(8637),
      yR = yu(2352),
      ER = yu(2368),
      KR = yu(2936);
    const QR = ["J", "C", "A", "P", "U", "X", "G"],
      mR = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: Iu.C
      });

    function JR(uu, Ru) {
      uu.replaceChildren(...[...Ru.childNodes].map((uu => uu.cloneNode(!0))))
    }
    const NR = uu => ({
      [cu]: uu
    });

    function XR(uu) {
      let {
        id: Ru,
        slot: yu,
        icon: Eu,
        label: Qu,
        hidden: mu,
        className: Ju,
        face: Xu
      } = uu;
      const Vu = (0, Ku.useRef)(null);
      return (0, Ku.useLayoutEffect)((() => {
        Xu && Vu.current && JR(Vu.current, Xu)
      }), [Xu]), (0, bu.jsxs)("div", {
        className: Nu()("TouchKeyHit", `TouchSlot${yu}`, Ju, {
          HudPreviewGhost: mu.has(Ru)
        }),
        ...NR(Ru),
        children: [Xu && (0, bu.jsx)("div", {
          ref: Vu,
          className: Nu()("TouchKey", {
            Labelled: Xu.classList.contains("Labelled")
          })
        }), !Xu && (0, bu.jsxs)("div", {
          className: Nu()("TouchKey", {
            Labelled: void 0 !== Qu
          }),
          children: [Eu && (0, bu.jsx)(Du.c, {
            name: Eu
          }), void 0 !== Qu && (0, bu.jsx)("span", {
            className: "TouchKeyLabel",
            children: Qu
          })]
        })]
      })
    }

    function VR(uu) {
      let {
        item: Ru,
        selected: yu
      } = uu;
      const Eu = (0, Ku.useRef)(null);
      return (0, Ku.useLayoutEffect)((() => {
        Eu.current && JR(Eu.current, Ru)
      }), [Ru]), (0, bu.jsx)("div", {
        ref: Eu,
        className: Nu()("InvenItem", {
          Selected: yu
        })
      })
    }
    const rR = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      BR = uu => void 0 === uu ? {} : {
        style: {
          "--parked": uu
        }
      };

    function xR(uu) {
      let {
        id: Ru,
        hidden: yu,
        parked: Eu,
        unslotted: Ku = !1
      } = uu;
      return (0, bu.jsx)("div", {
        className: Nu()("TopRightIcon", ER.n[Ru], {
          HudPreviewGhost: yu.has(Ru),
          [yR.b]: void 0 !== Eu,
          [yR.f]: Ku
        }),
        ...BR(Eu),
        children: (0, bu.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...NR(Ru),
          children: (0, bu.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, bu.jsx)(Du.c, {
              name: rR[Ru]
            })
          })
        })
      })
    }

    function SR(uu) {
      let {
        portraitPhone: Ru,
        icons: yu,
        hidden: Eu,
        moved: Ku,
        trayState: Qu
      } = uu;
      const mu = Ru ? (0, yR.B)(yu) : [],
        Ju = yu.filter((uu => "settings" === uu)),
        Xu = yu.filter((uu => "settings" !== uu && !mu.includes(uu))).reverse(),
        Vu = mu.length > 0 && "gone" === Qu,
        ru = [...Ju, ...Vu ? ["tray"] : [], ...Xu].filter((uu => "tray" === uu || Eu.has(uu) && !Ku.has(uu))),
        Bu = uu => {
          const Ru = ru.indexOf(uu);
          return Ru < 0 ? void 0 : Ru
        },
        xu = (uu, Ru) => (0, bu.jsx)(xR, {
          id: uu,
          hidden: Eu,
          parked: Ru ? Bu(uu) : void 0,
          unslotted: Ru && Eu.has(uu) && Ku.has(uu)
        }, uu);
      return (0, bu.jsxs)("div", {
        className: Nu()("TopRightIcons TouchInGame", {
          Column: Ru
        }),
        children: [Ju.map((uu => xu(uu, !0))), mu.length > 0 && (0, bu.jsxs)("div", {
          className: Nu()("TopRightIcon TopRightTrayToggle Open", {
            [yR.b]: Vu
          }),
          ...BR(Bu("tray")),
          children: [(0, bu.jsx)("div", {
            className: Nu()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== Qu
            }),
            children: (0, bu.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, bu.jsx)(Du.c, {
                name: "ellipsis"
              })
            })
          }), (0, bu.jsx)("div", {
            className: "TopRightTray",
            children: mu.map((uu => xu(uu, !1)))
          })]
        }), Xu.map((uu => xu(uu, !0)))]
      })
    }

    function pR(uu) {
      let {
        next: Ru,
        hidden: yu
      } = uu;
      return (0, bu.jsx)("div", {
        className: Nu()("HotBarArrow", Ru ? "Next" : "Previous", {
          HudPreviewGhost: yu
        }),
        ...NR("arrows"),
        children: (0, bu.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, bu.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, bu.jsx)(Du.c, {
              name: Ru ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function TR() {
      return (0, bu.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, bu.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, bu.jsx)("div", {
            className: "SocialBar",
            children: (0, bu.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, bu.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, bu.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, bu.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, bu.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, bu.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, bu.jsx)(Du.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, bu.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, bu.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, bu.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, bu.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, bu.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, bu.jsx)(Du.c, {
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
    const WR = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      jR = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      HR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      dR = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function bR(uu) {
      let {
        presence: Ru,
        portraitPhone: yu,
        hidden: Ku,
        actionButtons: Qu,
        joystickFixed: mu,
        keysAbove: Ju,
        auraBar: Xu,
        trayState: Vu,
        moved: Bu
      } = uu;
      const {
        t: xu
      } = (0, Eu.E)(), {
        faces: Su,
        items: pu
      } = Ru, Tu = uu => ({
        HudPreviewGhost: Ku.has(uu)
      });
      return (0, bu.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, bu.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, bu.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, bu.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, bu.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, bu.jsx)("div", {
              className: "InGameHeaderGameName",
              children: xu("hudLayout:previewGameName")
            })]
          })
        }), (0, bu.jsx)("div", {
          className: "TopLeftElements",
          children: (0, bu.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, bu.jsxs)("div", {
              className: "Chat",
              children: [(0, bu.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [xu("hudLayout:previewChatLine"), xu("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), xu("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((uu => (0, bu.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, bu.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, bu.jsx)("div", {
                      className: "IndividualText",
                      children: uu
                    })
                  })
                }, uu)))
              }), (0, bu.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: Nu()("ChatIconWrapper SmallTextLight", Tu("chat")),
                ...NR("chat"),
                children: (0, bu.jsx)(Du.c, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, bu.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, bu.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, bu.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, bu.jsx)("div", {
                className: "TopRightIconsContainer",
                ...NR("menu"),
                children: (0, bu.jsx)(SR, {
                  portraitPhone: yu,
                  icons: Ru.rowIcons,
                  hidden: Ku,
                  trayState: Vu,
                  moved: Bu
                })
              })
            }), ru.featureFlags.useSocialFeatures && (0, bu.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, bu.jsx)(TR, {})
            })]
          })
        }), (0, bu.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, bu.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, bu.jsxs)("div", {
            className: "TouchInteractKey",
            ...NR("interact"),
            children: [(0, bu.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, bu.jsx)(Du.c, {
                name: "hand-back-point-up"
              })
            }), (0, bu.jsx)("div", {
              children: xu("hudLayout:previewInteract")
            })]
          })
        }), (0, bu.jsx)("div", {
          className: "BottomCentre",
          children: (0, bu.jsxs)("div", {
            className: "BottomElements",
            children: [(0, bu.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, bu.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, bu.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...NR("hotbar"),
                children: (0, bu.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, bu.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, bu.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, bu.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, bu.jsx)(Du.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), Xu && (0, bu.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, bu.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, bu.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, KR.g)("glint"),
                    alt: ""
                  }), (0, bu.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, bu.jsx)("div", {
                  className: "AuraBar",
                  children: (0, bu.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, bu.jsx)("div", {
                className: "HotBarRow",
                children: (0, bu.jsx)("div", {
                  className: Nu()("HotBarContainer Touch", {
                    KeysAbove: Ju
                  }),
                  children: (0, bu.jsxs)("div", {
                    className: "HotBar",
                    ...NR("hotbar"),
                    children: [(0, bu.jsxs)("div", {
                      className: Nu()("TouchInventoryKeys", {
                        NoAuraBar: !Xu
                      }),
                      children: [(0, bu.jsx)("div", {
                        className: Nu()("TouchInventoryKey ShopKey", Tu("inventory"), {
                          Hidden: !Ru.shop
                        }),
                        ...NR("inventory"),
                        children: (0, bu.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, bu.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, bu.jsx)(Du.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, bu.jsx)("div", {
                        className: Nu()("TouchInventoryKey BagKey", Tu("inventory"), {
                          Hidden: !Ru.bag
                        }),
                        ...NR("inventory"),
                        children: (0, bu.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, bu.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, bu.jsx)(Du.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, bu.jsx)(pR, {
                      next: !1,
                      hidden: Ku.has("arrows")
                    }), (0, bu.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== pu && pu.map(((uu, Ru) => (0, bu.jsx)(VR, {
                        item: uu,
                        selected: uu.classList.contains("Selected")
                      }, Ru))), null === pu && HR.map((uu => {
                        const Ru = dR[uu];
                        return (0, bu.jsx)("div", {
                          className: Nu()("InvenItem", {
                            Selected: 0 === uu
                          }),
                          children: Ru && (0, bu.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, bu.jsx)(Du.c, {
                              name: Ru
                            })
                          })
                        }, uu)
                      }))]
                    }), (0, bu.jsx)(pR, {
                      next: !0,
                      hidden: Ku.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, bu.jsx)("div", {
              className: "BottomRightElements",
              children: (0, bu.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== Su && QR.map((uu => {
                  const Ru = Su[uu];
                  return Ru && (0, bu.jsx)(XR, {
                    id: WR[uu],
                    slot: uu,
                    face: Ru,
                    className: jR[uu],
                    hidden: Ku
                  }, uu)
                })), null === Su && (0, bu.jsxs)(bu.Fragment, {
                  children: [(0, bu.jsx)(XR, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Ku
                  }), (0, bu.jsx)(XR, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Ku
                  }), Qu && (0, bu.jsxs)(bu.Fragment, {
                    children: [(0, bu.jsx)(XR, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Ku
                    }), (0, bu.jsx)(XR, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Ku
                    })]
                  }), !Qu && (0, bu.jsx)(XR, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: xu("touchKeys:scope"),
                    hidden: Ku
                  }), (0, bu.jsx)(XR, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: xu("touchKeys:fly"),
                    hidden: Ku
                  }), (0, bu.jsx)(XR, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Ku
                  })]
                })]
              })
            })]
          })
        }), (0, bu.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, bu.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, bu.jsxs)("div", {
              className: Nu()("Joystick Resting HudPreviewJoystick", {
                Floating: !mu
              }),
              ...NR("joystick"),
              children: [(0, bu.jsx)("div", {
                className: "JoystickBase"
              }), (0, bu.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function CR() {
      const [uu, Ru] = (0, Ku.useState)({}), yu = (0, Ku.useCallback)((uu => {
        Ru((Ru => [...new Set([...Object.keys(Ru), ...Object.keys(uu)])].every((yu => Ru[yu] === uu[yu])) ? Ru : uu))
      }), []);
      return [uu, yu]
    }
    const kR = .05;

    function eR(uu) {
      var Ru;
      let {
        selected: yu,
        layout: Ku,
        actionButtons: Qu,
        keyNames: mu,
        overlaps: Ju,
        scaleCaps: Vu,
        joystickFixed: ru,
        onScale: Bu,
        onHidden: xu,
        onReset: Su,
        locked: pu,
        lockable: Tu,
        onLocked: Wu,
        extra: ju
      } = uu;
      const {
        t: Hu
      } = (0, Eu.E)(), du = yu ? gu[yu] : null, Cu = null !== yu && pu.has(yu), ku = (yu && Ku.hudElements[yu] || Iu.p)[2], eu = null !== (Ru = yu && Vu[yu]) && void 0 !== Ru ? Ru : Iu.i, Au = uu => {
        yu && Bu(yu, Math.min(eu, Math.round(100 * (ku + .1 * uu)) / 100))
      };
      return (0, bu.jsxs)(bu.Fragment, {
        children: [(0, bu.jsxs)("div", {
          className: Nu()("HudQuickName SmallTextBold", {
            Overlap: Ju.length > 0
          }),
          children: [Ju.length > 0 && (0, bu.jsx)(Du.c, {
            name: "triangle-exclamation"
          }), du ? Lu(du.id, Qu, Hu, mu) : Hu("hudLayout:fullScreenHint"), Ju.length > 0 && (0, bu.jsx)("span", {
            className: "HudQuickOverlap",
            children: Hu("hudLayout:overlapsShort", {
              names: zu(Ju, Qu, Hu, mu)
            })
          })]
        }), (null === du || void 0 === du ? void 0 : du.scale) && (0, bu.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, bu.jsx)(Xu.P, {
            disabled: Cu || ku <= Iu.l,
            ariaLabel: Hu("hudLayout:smaller"),
            onClick: () => {
              Au(-1)
            },
            children: (0, bu.jsx)(Du.c, {
              name: "minus"
            })
          }), (0, bu.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*ku)}%`
          }), (0, bu.jsx)(Xu.P, {
            disabled: Cu || ku >= eu,
            ariaLabel: Hu("hudLayout:larger"),
            onClick: () => {
              Au(1)
            },
            children: (0, bu.jsx)(Du.c, {
              name: "plus"
            })
          })]
        }), (du || ju) && (0, bu.jsxs)("div", {
          className: "HudQuickActions",
          children: [du && (0, bu.jsxs)(bu.Fragment, {
            children: [(0, bu.jsx)(hu, {
              id: du.id,
              actionButtons: Qu,
              keyNames: mu,
              locked: Cu,
              lockable: Tu(du.id),
              onLocked: Wu
            }), (0, bu.jsx)(wu, {
              id: du.id,
              elements: Ku.hudElements,
              actionButtons: Qu,
              keyNames: mu,
              onHidden: xu
            }), (0, bu.jsx)(Zu, {
              id: du.id,
              elements: Ku.hudElements,
              actionButtons: Qu,
              keyNames: mu,
              locked: Cu,
              onReset: Su
            }), qu(du.id, ru) && (0, bu.jsx)(Ou, {})]
          }), ju]
        })]
      })
    }
    var AR = yu(1093),
      DR = yu(4174);
    const MR = "HudPreviewDoc",
      IR = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      GR = new Set([MR, ...Object.values(IR)]),
      UR = new Set(Iu.y.map(ER.A)),
      nR = new Set(ER.g),
      sR = 'style, link[rel="stylesheet"]';

    function tR(uu, Ru, yu, Eu) {
      const Ku = new Map,
        Qu = new Set,
        mu = new URL(uu.baseURI).origin,
        Ju = Ru => {
          var yu;
          if ("LINK" !== Ru.nodeName) return !0;
          const Eu = null === (yu = Ru.getAttribute("href")) || void 0 === yu ? void 0 : yu.trim();
          if (!Eu) return !1;
          try {
            return new URL(Eu, uu.baseURI).origin === mu
          } catch {
            return !1
          }
        };
      let Nu = null;
      const Xu = () => {
          Nu !== (0 === Qu.size) && (Nu = 0 === Qu.size, null === Eu || void 0 === Eu || Eu(Nu))
        },
        Vu = uu => {
          const Ru = uu.cloneNode(!0);
          if ("LINK" === Ru.tagName) {
            Qu.add(Ru);
            const uu = () => {
              Qu.delete(Ru), Xu()
            };
            Ru.addEventListener("load", uu), Ru.addEventListener("error", uu), yu && Ru.addEventListener("load", yu)
          }
          return Ru
        },
        ru = () => {
          const Eu = function(uu) {
              const Ru = [...uu.body.children].filter((uu => uu.matches(sR)));
              return [...uu.head.querySelectorAll(sR), ...Ru]
            }(uu).filter(Ju),
            mu = new Set(Eu);
          for (const [uu, Ru] of Ku) mu.has(uu) || (Ru.remove(), Ku.delete(uu), Qu.delete(Ru));
          let Nu = null;
          for (let uu = Eu.length - 1; uu >= 0; uu--) {
            const Qu = Eu[uu];
            let mu = Ku.get(Qu);
            mu ? "STYLE" === Qu.tagName && mu.textContent !== Qu.textContent && (mu.textContent = Qu.textContent, null === yu || void 0 === yu || yu()) : (mu = Vu(Qu), Ku.set(Qu, mu), Ru.head.insertBefore(mu, Nu)), Nu = mu
          }
          Xu()
        };
      ru();
      const Bu = new MutationObserver(ru);
      return Bu.observe(uu.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), Bu.observe(uu.body, {
        childList: !0
      }), () => {
        Bu.disconnect()
      }
    }

    function lR(uu, Ru, yu) {
      let {
        keysAbove: Eu
      } = yu;
      const Ku = [...uu.documentElement.classList].filter((uu => !GR.has(uu) && !nR.has(uu))),
        Qu = [...Ru.documentElement.classList].filter((uu => nR.has(uu))),
        mu = [MR, IR.hotbar, IR.hasShop, IR.hasBag];
      Eu && mu.push(IR.keysAbove), Ru.documentElement.className = [...Ku, ...mu, ...Qu].join(" ")
    }
    const gR = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function cR(uu, Ru, yu, Eu, Ku) {
      const Qu = (0, Iu.z)(yu, Eu, "joystick"),
        mu = (0, ER.D)((0, ER.P)(yu, Eu, Ku), Eu),
        Ju = mu.classes.filter((uu => !UR.has(uu))),
        Nu = Ru.documentElement;
      (0, ER.V)({
        ...mu,
        classes: Ju
      }, {
        vars: Nu,
        safe: Nu,
        classes: Nu
      });
      const Xu = (0, ER.K)(yu.hudLayouts[Eu].hudSafe, window.innerWidth, window.innerHeight, LR(), (0, ER.R)(Ru));
      Nu.style.setProperty("--preview-joystick-shift-left", `${Xu[3]}px`), Nu.style.setProperty("--preview-joystick-shift-bottom", `${Xu[2]}px`), Nu.style.setProperty("--preview-joystick-scale", String(Qu[2])), (0, DR.e)(Nu, Ru, yu, Eu);
      for (const Vu of gR) Nu.style.setProperty(Vu, uu.documentElement.style.getPropertyValue(Vu) || "0px")
    }

    function LR() {
      return (0, ER.M)(Vu.d.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function zR(uu) {
      return (0, ER.w)(LR(), (0, ER.R)(uu))
    }

    function FR(uu, Ru, yu) {
      const Eu = uu.documentElement.style,
        Ku = (0, ER.L)(Ru),
        Qu = Eu.getPropertyValue(Ku);
      try {
        return yu((uu => {
          Eu.setProperty(Ku, String(uu))
        }))
      } finally {
        "" === Qu ? Eu.removeProperty(Ku) : Eu.setProperty(Ku, Qu)
      }
    }

    function wR(uu, Ru) {
      const [yu, Eu] = FR(uu, "hotbar", (Ru => {
        const yu = yu => {
          var Eu, Ku;
          return Ru(yu), null !== (Eu = null === (Ku = uu.querySelector(".HotBarGameItemsContainer")) || void 0 === Ku ? void 0 : Ku.getBoundingClientRect().width) && void 0 !== Eu ? Eu : 0
        };
        return [yu(1), yu(Iu.i)]
      }));
      return yu <= 0 ? Iu.i : Math.min(Iu.i, Math.max(1, Math.floor(Eu / yu / Ru + 1e-6) * Ru))
    }
    const ZR = 3,
      hR = .5,
      PR = uu => uu.right - uu.left;
    const iR = (uu, Ru) => Math.abs((0, RR.b)(uu).x - (0, RR.b)(Ru).x) + Math.abs((0, RR.b)(uu).y - (0, RR.b)(Ru).y) + Math.abs(PR(uu) - PR(Ru));

    function YR(uu, Ru, yu, Eu, Ku) {
      let {
        canKeep: Qu = () => !0,
        passes: mu = ZR,
        before: Ju,
        keysAboveOf: Nu
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const Xu = void 0 !== Nu && Nu(uu) !== Nu(Ru),
        Vu = Ru.hudLayouts[yu].hudLocked.filter((uu => Qu(uu) && !(Xu && "inventory" === uu))),
        ru = new Set(Vu);
      if (0 === ru.size) return Ru;
      const Bu = [...nu].filter((Eu => !Vu.includes(Eu) && (0, Iu.z)(uu, yu, Eu).join() === (0, Iu.z)(Ru, yu, Eu).join())),
        xu = uu => {
          const Ru = (0, RR.F)(Bu.flatMap((Ru => uu[Ru] ? [uu[Ru]] : [])));
          return {
            ...uu,
            cluster: null !== Ru && void 0 !== Ru ? Ru : void 0
          }
        },
        Su = uu => {
          const Ru = Ku(uu);
          return Ru && xu(Ru)
        },
        pu = Ju ? xu(Ju) : Su(uu);
      let Tu = pu && Su(Ru);
      if (!pu || !Tu) return Ru;
      let Wu = Ru;
      for (let ju = 0; ju < mu && ru.size > 0; ju++) {
        const uu = new Map;
        for (const Ru of ru) {
          const Ku = pu[Ru],
            Qu = Tu[Ru],
            mu = Ku && Qu ? oR(Ru, (0, Iu.z)(Wu, yu, Ru), Ku, Qu, Eu) : null;
          mu ? uu.set(Ru, mu) : ru.delete(Ru)
        }
        if (0 === uu.size) break;
        let Ku = Wu;
        for (const [Ru, Eu] of uu) Ku = (0, Iu.Y)(Ku, yu, Ru, Eu);
        const Qu = Su(Ku);
        if (!Qu) return Ru;
        let mu = Wu;
        for (const [Ru, Eu] of uu) {
          const uu = Qu[Ru];
          uu && iR(pu[Ru], uu) < iR(pu[Ru], Tu[Ru]) - hR ? mu = (0, Iu.Y)(mu, yu, Ru, Eu) : ru.delete(Ru)
        }
        if (mu === Wu) break;
        const Ju = [...uu.keys()].every((uu => ru.has(uu)));
        if (Wu = mu, Tu = Ju ? Qu : Su(Wu), !Tu) return Ru
      }
      return Ku(Wu), Wu
    }

    function oR(uu, Ru, yu, Eu, Ku) {
      let [Qu, mu, Ju] = Ru;
      const Nu = Iu.x[uu],
        Xu = {};
      Nu.scale && PR(Eu) > 0 && Math.abs(PR(yu) - PR(Eu)) > hR && (Xu.scale = Math.max(Iu.l, Math.min(Iu.i, Ju * PR(yu) / PR(Eu))));
      const Vu = (0, RR.b)(yu).x - (0, RR.b)(Eu).x,
        ru = (0, RR.b)(yu).y - (0, RR.b)(Eu).y;
      return Nu.move && (Math.abs(Vu) > hR || Math.abs(ru) > hR) && (Xu.dx = Qu + Vu / Ku.width, Xu.dy = mu + ru / Ku.height), void 0 === Xu.scale && void 0 === Xu.dx ? null : Xu
    }
    let qR = 0;

    function OR() {
      return qR > 0
    }
    const vR = uu => 0 === uu.dx && 0 === uu.dy,
      aR = .001,
      fR = uu => Math.abs(uu.dx) >= 5e-4 || Math.abs(uu.dy) >= 5e-4 ? uu : {
        dx: uu.dx,
        dy: uu.dy < 0 ? -.001 : aR
      };

    function uy(uu) {
      let {
        preview: Ru,
        stageRef: yu,
        ringRef: Eu,
        centreLineRef: Qu,
        snapCentre: mu,
        ready: Ju,
        measure: Nu,
        k: Xu,
        viewport: Vu,
        boxes: ru,
        pieces: Bu,
        selected: xu,
        insets: Su,
        layout: pu,
        canMove: Tu,
        onSelect: Wu,
        onMove: ju
      } = uu;
      const Hu = (0, Ku.useRef)(null),
        du = (0, Ku.useCallback)((() => null !== Hu.current), []),
        bu = (uu, Ru) => {
          if (!Ru) return null;
          const yu = (0, RR.b)(uu.origin),
            Eu = (0, RR.b)(Ru),
            Ku = (uu.to.dx - uu.from.dx) * Vu.width,
            Qu = (uu.to.dy - uu.from.dy) * Vu.height,
            mu = Ru.right - Ru.left,
            Ju = Ru.bottom - Ru.top;
          return {
            skew: {
              x: Eu.x - yu.x - Ku,
              y: Eu.y - yu.y - Qu
            },
            box: {
              left: yu.x - mu / 2,
              top: yu.y - Ju / 2,
              right: yu.x + mu / 2,
              bottom: yu.y + Ju / 2
            }
          }
        },
        Cu = (uu, yu) => {
          var Ku;
          const mu = Hu.current;
          if (!mu || mu.pointerId !== uu.pointerId) return;
          Hu.current = null, null === (Ku = Qu.current) || void 0 === Ku || Ku.classList.remove("Shown", "Snapped");
          const Ju = Eu.current;
          if (Ju && null !== mu.ringStyle && Ju.setAttribute("style", mu.ringStyle), yu && mu.moved) {
            const uu = vR(mu.to) ? null : Nu(mu.id),
              Ru = uu ? (0, RR.B)(uu, (0, RR.A)(Vu.width, Vu.height, Su)) : {
                x: 0,
                y: 0
              },
              yu = {
                dx: mu.to.dx + Ru.x / Vu.width,
                dy: mu.to.dy + Ru.y / Vu.height
              },
              Eu = vR(mu.to) ? yu : fR(yu);
            ju(mu.id, Eu.dx, Eu.dy)
          } else Ru(mu.id, null), yu && mu.tapPick && Wu(mu.tapPick)
        };
      return {
        busy: du,
        handlers: {
          onPointerDown: uu => {
            var Ru;
            if (!Ju || Hu.current || !uu.target.closest(".HudPreviewHandle")) return;
            const Eu = yu.current.getBoundingClientRect(),
              Ku = {
                x: (uu.clientX - Eu.left) / Xu,
                y: (uu.clientY - Eu.top) / Xu
              },
              Qu = (0, RR.w)(Ku, Bu, 40 / Xu),
              mu = "cluster" === xu && void 0 !== ru.cluster && null !== (0, RR.w)(Ku, [{
                id: "cluster",
                box: ru.cluster
              }], 40 / Xu),
              Nu = "menu" === xu && void 0 !== ru.menu && (0, RR.e)(ru.menu, Ku) && ("menu" === Qu || null !== Qu && (0, yR.t)(Qu, pu.hudElements[Qu])),
              Vu = mu ? "cluster" : Nu ? "menu" : null,
              Su = null !== Vu,
              ju = null !== Vu && void 0 !== Vu ? Vu : Qu;
            if (!ju) return;
            if (function(uu) {
                qR++;
                const Ru = yu => {
                  yu.pointerId === uu && (qR = Math.max(0, qR - 1), window.removeEventListener("pointerup", Ru, !0), window.removeEventListener("pointercancel", Ru, !0))
                };
                window.addEventListener("pointerup", Ru, !0), window.addEventListener("pointercancel", Ru, !0)
              }(uu.pointerId), !Tu(ju)) return void Wu(Su && Qu ? Qu : ju);
            Wu(ju);
            const [du, bu] = null !== (Ru = pu.hudElements[ju]) && void 0 !== Ru ? Ru : [0, 0], Cu = {
              dx: du,
              dy: bu
            }, ku = {
              skew: {
                x: 0,
                y: 0
              },
              box: ru[ju]
            };
            Hu.current = {
              id: ju,
              pointerId: uu.pointerId,
              startX: uu.clientX,
              startY: uu.clientY,
              origin: ru[ju],
              from: Cu,
              to: Cu,
              moved: !1,
              home: vR(Cu) ? {
                centre: (0, RR.b)(ru[ju]),
                anchor: ku
              } : null,
              away: vR(Cu) ? null : ku,
              anchor: ku,
              ringStyle: null,
              tapPick: Su ? Qu : null
            }, uu.currentTarget.setPointerCapture(uu.pointerId)
          },
          onPointerMove: uu => {
            const yu = Hu.current;
            if (!yu || yu.pointerId !== uu.pointerId) return;
            const Ku = uu.clientX - yu.startX,
              Ju = uu.clientY - yu.startY;
            if (!yu.moved && Math.hypot(Ku, Ju) < 5) return;
            const ru = !yu.moved;
            var Bu, xu;
            (yu.moved = !0, ru) && (yu.ringStyle = null !== (Bu = null === (xu = Eu.current) || void 0 === xu ? void 0 : xu.getAttribute("style")) && void 0 !== Bu ? Bu : null);
            const pu = (0, RR.A)(Vu.width, Vu.height, Su);
            if (!yu.home) {
              var Tu;
              yu.to = {
                dx: 0,
                dy: 0
              }, Ru(yu.id, yu.to);
              const uu = Nu(yu.id),
                Eu = null !== (Tu = bu(yu, uu)) && void 0 !== Tu ? Tu : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: yu.origin
                },
                Ku = (0, RR.b)(yu.origin);
              yu.home = {
                centre: uu ? (0, RR.b)(uu) : {
                  x: Ku.x - yu.from.dx * Vu.width,
                  y: Ku.y - yu.from.dy * Vu.height
                },
                anchor: Eu
              }
            }
            const Wu = yu.home;
            let ju = !1;
            const du = uu => {
                ju = !1;
                let Eu = (0, RR.h)(uu.box, Ku / Xu, Ju / Xu, pu);
                const Qu = Vu.width / 2;
                if (mu && Math.abs((0, RR.b)(yu.origin).x + Eu.x - Qu) <= 8 / Xu) {
                  const Ru = Qu - (0, RR.b)(yu.origin).x,
                    Ku = (0, RR.h)(uu.box, Ru, Eu.y, pu);
                  ju = Math.abs(Ku.x - Ru) < .01, ju && (Eu = Ku)
                }
                const Nu = (0, RR.t)(yu.from, Eu.x - uu.skew.x, Eu.y - uu.skew.y, Vu.width, Vu.height);
                yu.to = fR(Nu), yu.anchor = uu, Ru(yu.id, yu.to)
              },
              Cu = (0, RR.h)(Wu.anchor.box, Ku / Xu, Ju / Xu, pu),
              ku = Qu.current,
              eu = (0, RR.b)(yu.origin),
              Au = ((0, Iu.M)(yu.id) ? 20 : 6) / Xu;
            if (Math.abs(eu.x + Cu.x - Wu.centre.x) <= Au && Math.abs(eu.y + Cu.y - Wu.centre.y) <= Au) yu.to = {
              dx: 0,
              dy: 0
            }, yu.anchor = Wu.anchor, ju = mu && Math.abs(Wu.centre.x - Vu.width / 2) < 1, Ru(yu.id, yu.to);
            else if (yu.away) du(yu.away);
            else {
              var Du;
              du(Wu.anchor), yu.away = null !== (Du = bu(yu, Nu(yu.id))) && void 0 !== Du ? Du : Wu.anchor, du(yu.away)
            }
            null === ku || void 0 === ku || ku.classList.add("Shown"), null === ku || void 0 === ku || ku.classList.toggle("Snapped", ju), (uu => {
              const Ru = Eu.current;
              if (Ru) {
                const {
                  skew: yu,
                  box: Eu
                } = uu.anchor;
                Ru.style.left = Eu.left * Xu + "px", Ru.style.top = Eu.top * Xu + "px", Ru.style.width = (Eu.right - Eu.left) * Xu + "px", Ru.style.height = (Eu.bottom - Eu.top) * Xu + "px", Ru.style.translate = `${((uu.to.dx-uu.from.dx)*Vu.width+yu.x)*Xu}px ${((uu.to.dy-uu.from.dy)*Vu.height+yu.y)*Xu}px`
              }
            })(yu)
          },
          onPointerUp: uu => {
            Cu(uu, !0)
          },
          onPointerCancel: uu => {
            Cu(uu, !1)
          }
        }
      }
    }

    function Ry(uu, Ru) {
      return Object.keys(uu).filter((uu => uu !== Ru)).map((Ru => uu[Ru]))
    }

    function yy(uu) {
      const Ru = [],
        yu = Ru => (0, Iu.M)(Ru) && !uu.documentElement.classList.contains((0, ER.H)(Ru));
      for (const mu of uu.querySelectorAll(`[${cu}]`)) {
        const uu = yu(mu.getAttribute(cu)) ? mu.querySelector(".ScaleOnHover") : null,
          Eu = (null !== uu && void 0 !== uu ? uu : mu).getBoundingClientRect();
        (Eu.width > 0 || Eu.height > 0) && Ru.push({
          id: mu.getAttribute(cu),
          box: {
            left: Eu.left,
            top: Eu.top,
            right: Eu.right,
            bottom: Eu.bottom
          }
        })
      }
      const Eu = uu => (0, RR.F)(Ru.filter((Ru => {
          let {
            id: yu
          } = Ru;
          return uu(yu)
        })).map((uu => {
          let {
            box: Ru
          } = uu;
          return Ru
        }))),
        Ku = {};
      for (const mu of new Set(Ru.map((uu => uu.id)))) Ku[mu] = Eu((uu => uu === mu));
      const Qu = Eu((uu => nu.has(uu)));
      return Qu && (Ku.cluster = Qu), {
        boxes: Ku,
        pieces: Ru
      }
    }

    function Ey(uu, Ru, yu) {
      const Eu = Ru.right - Ru.left,
        Ku = Ru.bottom - Ru.top;
      return FR(uu, "cluster", (Ru => {
        const Qu = yu => {
            Ru(yu);
            const Eu = [...uu.querySelectorAll(`[${cu}]:not(.HudPreviewGhost)`)].filter((uu => nu.has(uu.getAttribute(cu)))).map((uu => {
                const Ru = uu.getBoundingClientRect();
                return {
                  left: Ru.left,
                  top: Ru.top,
                  right: Ru.right,
                  bottom: Ru.bottom
                }
              })),
              Ku = (0, RR.F)(Eu);
            return Ku ? {
              w: Ku.right - Ku.left,
              h: Ku.bottom - Ku.top
            } : null
          },
          mu = uu => !uu || uu.w <= Eu && uu.h <= Ku,
          Ju = Qu(1),
          Nu = Qu(Iu.i);
        if (!Ju || mu(Nu)) return Iu.i;
        const Xu = (uu, Ru, yu) => Ru > uu ? 1 + (yu - uu) * (Iu.i - 1) / (Ru - uu) : Iu.i;
        let Vu = Math.floor(Math.min(Iu.i, Xu(Ju.w, Nu.w, Eu), Xu(Ju.h, Nu.h, Ku)) / yu + 1e-6) * yu;
        for (; Vu > 1 && !mu(Qu(Vu));) Vu = Math.round(100 * (Vu - yu)) / 100;
        return Math.max(1, Vu)
      }))
    }

    function Ky(uu) {
      lR(document, uu, {
        keysAbove: !1
      });
      const Ru = parseFloat(getComputedStyle(uu.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        yu = Number.isFinite(Ru) && Ru < 0;
      return lR(document, uu, {
        keysAbove: yu
      }), yu
    }

    function Qy(uu, Ru) {
      let {
        layout: yu,
        orientation: Eu,
        viewport: Qu,
        replicaKey: mu,
        joystickFixed: Ju,
        busy: Nu
      } = Ru;
      const [Xu, Vu] = (0, Ku.useState)(null), [ru, Bu] = (0, Ku.useState)({
        boxes: {},
        pieces: []
      }), [xu, Su] = (0, Ku.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [pu, Tu] = (0, Ku.useState)(!1), [Wu, ju] = (0, Ku.useState)(!1), [Hu, du] = (0, Ku.useState)(!1), bu = (0, Ku.useCallback)((uu => {
        ju(uu), uu && du(!0)
      }), []), Cu = yu.hudLayouts[Eu].hudSafe, ku = (0, Ku.useCallback)((() => {
        var Ru;
        const yu = null === (Ru = uu.current) || void 0 === Ru ? void 0 : Ru.contentDocument;
        null !== yu && void 0 !== yu && yu.body && Vu(yu)
      }), [uu]), eu = (0, Ku.useCallback)((() => {
        Xu && ((0, yR.w)(Xu), Bu(yy(Xu)), Su(function(uu, Ru) {
          const yu = zR(uu),
            [Eu, Ku, Qu, mu] = Ru ? (0, ER.y)(Ru, window.innerWidth, window.innerHeight, yu) : yu;
          return {
            top: Eu,
            right: Ku,
            bottom: Qu,
            left: mu
          }
        }(Xu, Cu)))
      }), [Xu, Cu]), Au = (0, Ku.useCallback)((() => {
        Xu && Tu(Ky(Xu))
      }), [Xu]), Du = (0, Ku.useRef)((() => {}));
      return Du.current = () => {
        Au(), Nu() || eu()
      }, (0, Ku.useLayoutEffect)((() => {
        if (Xu) return tR(document, Xu, (() => {
          Du.current()
        }), bu)
      }), [Xu, bu]), (0, Ku.useLayoutEffect)(Au, [Au, Qu]), (0, Ku.useLayoutEffect)((() => {
        Xu && (lR(document, Xu, {
          keysAbove: pu
        }), cR(document, Xu, yu, Eu, Ju), Au(), eu())
      }), [Xu, yu, Eu, pu, mu, Ju, Qu, eu, Au]), (0, Ku.useEffect)((() => {
        var uu;
        if (!Xu) return;
        const Ru = new ResizeObserver((() => {
          Nu() || eu()
        }));
        for (const yu of Xu.querySelectorAll(`[${cu}]`)) Ru.observe(yu);
        return null === (uu = Xu.fonts) || void 0 === uu || uu.ready.then(eu), () => {
          Ru.disconnect()
        }
      }), [Xu, eu, Nu, mu]), {
        doc: Xu,
        onLoad: ku,
        boxes: ru.boxes,
        pieces: ru.pieces,
        insets: xu,
        keysAbove: pu,
        ready: Wu,
        settled: Hu
      }
    }
    const my = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      Jy = (uu, Ru, yu) => {
        const Eu = uu => (0, yR.t)(uu, yu.hudElements[uu]);
        return "cluster" === uu && nu.has(Ru) || "cluster" === Ru && nu.has(uu) || "menu" === uu && Eu(Ru) || "menu" === Ru && Eu(uu) || my.some((Eu => {
          let [Ku, Qu] = Eu;
          const mu = yu.hudElements.hotbar,
            Ju = "inventory" === Qu && yu.hudLocked.includes(Qu) && void 0 !== mu && !(0, Iu.I)(mu);
          return (uu === Ku && Ru === Qu || uu === Qu && Ru === Ku) && !Ju
        }))
      };
    const Ny = ["Above", "Below", "Left", "Right"];

    function Xy(uu, Ru, yu, Eu, Ku) {
      const Qu = yu[uu],
        mu = (Qu.left + Qu.right) / 2,
        Ju = (Qu.top + Qu.bottom) / 2,
        Nu = (7.5 * Ru.length + 14) / Eu,
        Xu = 18 / Eu,
        Vu = {
          Above: {
            left: mu - Nu / 2,
            top: Qu.top - Xu,
            right: mu + Nu / 2,
            bottom: Qu.top
          },
          Below: {
            left: mu - Nu / 2,
            top: Qu.bottom,
            right: mu + Nu / 2,
            bottom: Qu.bottom + Xu
          },
          Left: {
            left: Qu.left - Nu,
            top: Ju - Xu / 2,
            right: Qu.left,
            bottom: Ju + Xu / 2
          },
          Right: {
            left: Qu.right,
            top: Ju - Xu / 2,
            right: Qu.right + Nu,
            bottom: Ju + Xu / 2
          }
        },
        ru = Ry(yu, uu),
        Bu = {
          left: 0,
          top: 0,
          right: Ku.width,
          bottom: Ku.height
        };
      return Ny[(0, RR.p)(Ny.map((uu => Vu[uu])), ru, {
        bounds: Bu
      })]
    }

    function Vy() {
      const [uu, Ru] = (0, fu.d)();
      return (0, Ku.useMemo)((() => ({
        width: uu,
        height: Ru
      })), [uu, Ru])
    }

    function ry(uu) {
      var Ru;
      const {
        layout: yu,
        orientation: Qu,
        selected: mu,
        onSelect: Ju,
        onMove: Xu,
        canMove: Vu,
        actionButtons: ru,
        joystickFixed: Bu,
        presence: xu,
        keyNames: pu,
        maxHeight: Tu,
        fill: Wu = !1,
        apiRef: ju
      } = uu, {
        t: Hu
      } = (0, Eu.E)(), du = Vy(), Cu = (null !== (Ru = (0, Su.g)("maxAuraLevel")) && void 0 !== Ru ? Ru : 0) > 0, ku = yu.hudLayouts[Qu], eu = (0, Ku.useRef)(null), Au = (0, Ku.useRef)(null), Mu = (0, Ku.useRef)(null), Gu = (0, Ku.useRef)(null), Uu = (0, Ku.useRef)(null), su = (0, Ku.useRef)(null), tu = (0, uR.d)(eu).width, lu = Wu ? 1 : tu > 0 ? (0, RR.z)(tu, du.width, du.height, Tu) : 0, gu = (0, Ku.useRef)((() => !1)), cu = (0, Ku.useCallback)((() => gu.current()), []), {
        doc: zu,
        onLoad: Fu,
        boxes: wu,
        pieces: Zu,
        insets: hu,
        keysAbove: Pu,
        ready: iu,
        settled: Yu
      } = Qy(Mu, {
        layout: yu,
        orientation: Qu,
        viewport: du,
        replicaKey: `${ru}:${Bu}:${Cu}`,
        joystickFixed: Bu,
        busy: cu
      }), ou = (0, Ku.useCallback)((uu => {
        zu && cR(document, zu, uu, Qu, Bu)
      }), [zu, Qu, Bu]), qu = (0, Ku.useCallback)((uu => zu && Yu ? (ou(uu), Ky(zu), function(uu) {
        let {
          boxes: Ru,
          pieces: yu
        } = uu;
        const Eu = yu.find((uu => "inventory" === uu.id));
        if (!Eu || !Ru.inventory) return Ru;
        const Ku = (0, RR.b)(Ru.inventory),
          Qu = PR(Eu.box) / 2,
          mu = (Eu.box.bottom - Eu.box.top) / 2;
        return {
          ...Ru,
          inventory: {
            left: Ku.x - Qu,
            top: Ku.y - mu,
            right: Ku.x + Qu,
            bottom: Ku.y + mu
          }
        }
      }(yy(zu))) : null), [zu, Yu, ou]), Ou = (0, Ku.useCallback)((uu => !!zu && (ou(uu), Ky(zu))), [zu, ou]), au = (0, Ku.useRef)(null), fu = (0, Ku.useRef)(null), KR = (0, Ku.useRef)(yu);
      KR.current = yu;
      const QR = (0, Ku.useCallback)((() => {
        null !== au.current && (cancelAnimationFrame(au.current), au.current = null)
      }), []);
      (0, Ku.useEffect)((() => QR), [yu, QR]);
      const {
        lockable: mR
      } = uu, JR = (0, Ku.useCallback)((uu => {
        if (ou(uu), !Yu || 0 === yu.hudLayouts[Qu].hudLocked.length) return;
        const Ru = yu;
        QR(), au.current = requestAnimationFrame((() => {
          var yu;
          if (au.current = null, KR.current !== Ru) return;
          const Eu = (null === (yu = fu.current) || void 0 === yu ? void 0 : yu.from) === Ru ? fu.current.boxes : qu(Ru);
          Eu && (fu.current = {
            from: Ru,
            boxes: Eu
          }), ou(Eu ? YR(Ru, uu, Qu, du, qu, {
            canKeep: mR,
            passes: 1,
            before: Eu,
            keysAboveOf: Ou
          }) : uu)
        }))
      }), [ou, Yu, yu, Qu, du, qu, Ou, mR, QR]), NR = uy({
        preview: (uu, Ru) => {
          Ru ? JR((0, Iu.Y)(yu, Qu, uu, Ru)) : (QR(), ou(yu))
        },
        stageRef: Au,
        ringRef: Gu,
        centreLineRef: Uu,
        snapCentre: yu.hudSnapCentre,
        ready: Yu,
        measure: uu => {
          var Ru;
          return zu && iu && null !== (Ru = yy(zu).boxes[uu]) && void 0 !== Ru ? Ru : null
        },
        k: lu,
        viewport: du,
        boxes: wu,
        pieces: Zu,
        selected: mu,
        insets: hu,
        layout: ku,
        canMove: Vu,
        onSelect: Ju,
        onMove: (uu, Ru, yu) => {
          QR(), Xu(uu, Ru, yu)
        }
      });
      (0, Ku.useLayoutEffect)((() => {
        gu.current = NR.busy
      }), [NR.busy]);
      const XR = (0, Ku.useRef)([]),
        VR = (0, Ku.useRef)(ku.hudElements);
      (0, Ku.useEffect)((() => {
        for (const Ku of Object.keys(ku.hudElements)) {
          var uu, Ru, yu, Eu;
          (null !== (uu = null === (Ru = ku.hudElements[Ku]) || void 0 === Ru ? void 0 : Ru[2]) && void 0 !== uu ? uu : 1) > (null !== (yu = null === (Eu = VR.current[Ku]) || void 0 === Eu ? void 0 : Eu[2]) && void 0 !== yu ? yu : 1) && Vu(Ku) && !(0, yR.t)(Ku, ku.hudElements[Ku]) && XR.current.push(Ku)
        }
        VR.current = ku.hudElements
      }), [ku.hudElements, Vu]), (0, Ku.useEffect)((() => {
        if (!iu) return;
        const uu = XR.current.shift(),
          Ru = uu && wu[uu];
        if (!uu || !Ru || NR.busy()) return;
        const yu = (0, RR.B)(Ru, (0, RR.A)(du.width, du.height, hu));
        if (0 !== yu.x || 0 !== yu.y) {
          var Eu;
          const [Ru, Ku] = null !== (Eu = ku.hudElements[uu]) && void 0 !== Eu ? Eu : [0, 0];
          Xu(uu, Ru + yu.x / du.width, Ku + yu.y / du.height)
        }
      }), [wu, iu]), (0, Ku.useImperativeHandle)(ju, (() => ({
        setScale: (uu, Ru) => {
          JR((0, Iu.Y)(yu, Qu, uu, {
            scale: Ru
          }))
        },
        setOpacity: uu => {
          ou({
            ...yu,
            hudKeyOpacity: uu
          })
        },
        keepLocks: (uu, Ru) => (QR(), YR(uu, Ru, Qu, du, qu, {
          canKeep: mR,
          keysAboveOf: Ou
        })),
        setSafe: uu => {
          JR((0, Iu.bb)(yu, Qu, uu)), su.current && (su.current.style.inset = (0, ER.y)(uu, du.width, du.height, zR(null !== zu && void 0 !== zu ? zu : document)).map((uu => uu * lu + "px")).join(" "))
        }
      })), [ou, JR, qu, Ou, QR, mR, zu, yu, Qu, du, lu]);
      const rR = new Set(Object.keys(ku.hudElements).filter((uu => (0, Iu.t)(ku.hudElements, uu)))),
        BR = mu ? wu[mu] : void 0,
        xR = mu ? Lu(mu, ru, Hu, pu) : "",
        SR = (0, AR.d)(du.width, du.height),
        pR = mu ? function(uu, Ru, yu, Eu) {
          const Ku = uu => (0, Iu.t)(yu.hudElements, uu) || (0, yR.q)(uu, yu, Eu);
          if (Ku(uu)) return [];
          const Qu = Ru.filter((Ru => {
              let {
                id: yu
              } = Ru;
              return "cluster" === uu ? nu.has(yu) : yu === uu
            })),
            mu = new Set;
          for (const Ju of Ru) Ju.id === uu || mu.has(Ju.id) || Jy(uu, Ju.id, yu) || Ku(Ju.id) || void 0 === yu.hudElements[uu] && void 0 === yu.hudElements[Ju.id] || Qu.some((uu => {
            let {
              id: Ru,
              box: yu
            } = uu;
            return Ru !== Ju.id && (0, RR.f)(yu, Ju.box, 2)
          })) && mu.add(Ju.id);
          return [...mu]
        }(mu, Zu, ku, SR) : [],
        TR = new Set((0, yR.o)(ku.hudElements)),
        WR = (0, yR.D)(ku, (0, yR.B)(xu.rowIcons)).state,
        jR = pR.join(),
        HR = (0, Ku.useRef)(uu.onReady);
      HR.current = uu.onReady, (0, Ku.useEffect)((() => {
        var uu;
        null === (uu = HR.current) || void 0 === uu || uu.call(HR, Yu)
      }), [Yu]);
      const dR = (0, Ku.useRef)(uu.onMeasured);
      (0, Ku.useLayoutEffect)((() => {
        dR.current = uu.onMeasured
      })), (0, Ku.useEffect)((() => {
        var uu;
        const Ru = zu ? {
          hotbar: wR(zu, kR),
          cluster: Ey(zu, (0, RR.A)(du.width, du.height, hu), kR)
        } : {};
        null === (uu = dR.current) || void 0 === uu || uu.call(dR, wu, jR ? jR.split(",") : [], Ru)
      }), [wu, jR, zu, du, hu]);
      const CR = uu => ({
        left: uu.left * lu,
        top: uu.top * lu,
        width: (uu.right - uu.left) * lu,
        height: (uu.bottom - uu.top) * lu
      });
      return (0, bu.jsx)("div", {
        ref: eu,
        className: Nu()("HudPreviewBox", {
          Fill: Wu
        }),
        style: {
          height: du.height * lu
        },
        children: (0, bu.jsxs)("div", {
          ref: Au,
          className: "HudPreviewStage",
          style: {
            width: du.width * lu,
            height: du.height * lu
          },
          children: [(0, bu.jsx)("iframe", {
            ref: Mu,
            className: "HudPreviewFrame",
            srcDoc: "<!DOCTYPE html><html><head></head><body></body></html>",
            onLoad: Fu,
            title: Hu("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: du.width,
              height: du.height,
              transform: `scale(${lu})`
            }
          }), zu && (0, vu.createPortal)((0, bu.jsx)(bR, {
            presence: xu,
            portraitPhone: SR,
            hidden: rR,
            actionButtons: ru,
            joystickFixed: Bu,
            keysAbove: Pu,
            auraBar: Cu,
            trayState: WR,
            moved: TR
          }), zu.body), (0, bu.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...NR.handlers,
            children: [(0, bu.jsx)("div", {
              ref: su,
              className: "HudPreviewSafeZone",
              style: {
                top: hu.top * lu,
                right: hu.right * lu,
                bottom: hu.bottom * lu,
                left: hu.left * lu
              }
            }), Zu.map(((uu, Ru) => {
              let {
                id: yu,
                box: Eu
              } = uu;
              return (0, bu.jsx)("div", {
                className: "HudPreviewHandle",
                style: CR((0, RR.l)(Eu, 40 / lu))
              }, `${yu}:${Ru}`)
            })), ku.hudLocked.map((uu => {
              const Ru = wu[uu];
              return Ru && (0, bu.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: Ru.right * lu,
                  top: Ru.top * lu
                },
                children: (0, bu.jsx)(Du.c, {
                  name: "lock"
                })
              }, uu)
            })), (0, bu.jsx)("div", {
              ref: Uu,
              className: "HudPreviewCentreLine",
              style: {
                left: du.width / 2 * lu
              }
            }), mu && BR && (0, bu.jsx)("div", {
              ref: Gu,
              className: Nu()("HudPreviewRing", {
                Fixed: !Vu(mu),
                Overlap: pR.length > 0
              }),
              style: CR(BR),
              children: (0, bu.jsx)("span", {
                className: Nu()("HudPreviewRingLabel", Xy(mu, xR, wu, lu, du)),
                children: xR
              })
            })]
          })]
        })
      })
    }

    function By(uu, Ru) {
      (0, Ku.useEffect)((() => {
        var yu;
        null === (yu = uu.current) || void 0 === yu || yu.toggleAttribute("inert", Ru)
      }), [uu, Ru])
    }
    const xy = "hudFullScreen";

    function Sy(uu) {
      let {
        onScale: Ru,
        onHidden: yu,
        onReset: Qu,
        locked: mu,
        lockable: Ju,
        onLocked: Nu,
        onClose: Vu,
        ...ru
      } = uu;
      const {
        t: Bu
      } = (0, Eu.E)(), xu = (0, Ku.useRef)(null);
      (0, au.t)("popup", xu, Vu),
      function(uu) {
        const Ru = (0, Ku.useRef)(uu);
        Ru.current = uu, (0, Ku.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [xy]: !0
          }, "");
          let uu = !1;
          const yu = () => {
            uu = !0, Ru.current()
          };
          return window.addEventListener("popstate", yu), () => {
            var Ru;
            window.removeEventListener("popstate", yu), !uu && null !== (Ru = window.history.state) && void 0 !== Ru && Ru[xy] && window.history.back()
          }
        }), [])
      }(Vu), (0, Ku.useEffect)((() => {
        function uu(uu) {
          "Escape" === uu.key && (uu.stopPropagation(), Vu())
        }
        return window.addEventListener("keydown", uu, !0), () => {
          window.removeEventListener("keydown", uu, !0)
        }
      }), [Vu]);
      const {
        selected: Su
      } = ru, pu = (0, Ku.useRef)(null), Tu = (0, Ku.useRef)(null), [Wu, ju] = (0, Ku.useState)(!1);
      By(Tu, !Wu);
      const [Hu, du] = (0, Ku.useState)(null), [Cu, ku] = (0, Ku.useState)([]), [eu, Au] = CR(), Du = (0, Ku.useRef)(ru.selected);
      Du.current = ru.selected;
      const Mu = (0, Ku.useRef)({}),
        Iu = (0, Ku.useCallback)((() => {
          const uu = pu.current;
          uu && du(function(uu, Ru, yu) {
            var Eu;
            const {
              innerWidth: Ku,
              innerHeight: Qu
            } = window, mu = uu.offsetWidth, Ju = uu.offsetHeight, Nu = Math.max(LR()[0], 6), Xu = [];
            for (const Bu of [Nu, .2 * Qu, .5 * Qu - Ju / 2, .33 * Qu])
              for (const uu of [.5, .3, .7]) Xu.push({
                left: Math.max(0, Math.min(Ku - mu - 6, Math.max(6, Ku * uu - mu / 2))),
                top: Bu
              });
            const Vu = Xu.map((uu => ({
                left: uu.left - 6,
                top: uu.top - 6,
                right: uu.left + mu + 6,
                bottom: uu.top + Ju + 6
              }))),
              ru = Ry(Ru, yu);
            return Xu[(0, RR.p)(Vu, ru, {
              avoid: yu && null !== (Eu = Ru[yu]) && void 0 !== Eu ? Eu : null
            })]
          }(uu, Mu.current, Du.current))
        }), []),
        Gu = (0, Ku.useCallback)(((uu, Ru, yu) => {
          ku(Ru), Au(yu), Mu.current = uu, Iu()
        }), [Iu, Au]);
      return (0, Ku.useLayoutEffect)(Iu, [ru.selected, Iu]), (0, vu.createPortal)((0, bu.jsxs)("div", {
        ref: xu,
        className: "HudFullScreenEditor",
        children: [(0, bu.jsx)(ry, {
          ...ru,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: Gu,
          onReady: ju,
          lockable: Ju
        }), (0, bu.jsxs)("div", {
          ref: pu,
          className: "HudFullScreenToolbar",
          style: null === Hu ? void 0 : {
            left: Hu.left,
            top: Hu.top,
            transform: "none"
          },
          children: [(0, bu.jsx)("div", {
            ref: Tu,
            className: "HudFullScreenControls",
            children: (0, bu.jsx)(eR, {
              selected: Su,
              layout: ru.layout.hudLayouts[ru.orientation],
              actionButtons: ru.actionButtons,
              keyNames: ru.keyNames,
              overlaps: Cu,
              scaleCaps: eu,
              onScale: Ru,
              onHidden: yu,
              onReset: Qu,
              locked: mu,
              lockable: Ju,
              onLocked: Nu,
              joystickFixed: ru.joystickFixed
            })
          }), (0, bu.jsx)(Xu.e, {
            className: "HudFullScreenDone",
            onClick: Vu,
            padDefaultFocus: !0,
            children: Bu("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const py = uu => `${Math.round(100*uu)}%`;

    function Ty(uu) {
      let {
        info: Ru,
        tuple: yu,
        props: Ku
      } = uu;
      const {
        t: Qu
      } = (0, Eu.E)();
      return (0, bu.jsx)(xu.g, {
        name: Qu("hudLayout:size"),
        min: Iu.l,
        max: Iu.i,
        step: kR,
        initValue: yu[2],
        disabled: Ku.locked.has(Ru.id),
        selectableMax: Ku.scaleCaps[Ru.id],
        cappedNote: Qu("hudLayout:sizeCapped"),
        format: py,
        onChange: uu => {
          Ku.onScalePreview(Ru.id, uu)
        },
        onChangeComplete: uu => {
          Ku.onScale(Ru.id, uu)
        }
      })
    }

    function Wy(uu) {
      const {
        t: Ru
      } = (0, Eu.E)(), {
        present: yu,
        elements: Qu,
        selected: mu,
        onSelect: Ju,
        onHidden: Xu,
        onReset: Vu,
        note: ru,
        actionButtons: Bu,
        keyNames: xu,
        sizeBesidePreview: Su,
        locked: pu,
        lockable: Tu,
        onLocked: Wu
      } = uu, {
        rowIconsOpen: ju,
        onRowIconsOpen: Hu
      } = uu, du = (0, Ku.useRef)(null), Cu = null !== mu && (ju || !(0, Iu.M)(mu));
      return (0, Ku.useEffect)((() => {
        var uu;
        const Ru = mu ? null === (uu = du.current) || void 0 === uu ? void 0 : uu.querySelector(`[data-hud-row="${mu}"]`) : null;
        if (!Ru) return;
        const yu = Ru.closest(".SettingsMenuRight"),
          Eu = performance.now();
        let Ku = null;
        const Qu = () => {
            clearInterval(Nu), null === yu || void 0 === yu || yu.removeEventListener("scroll", Ju)
          },
          Ju = () => {
            OR() || Qu()
          },
          Nu = setInterval((() => {
            const uu = performance.now();
            uu - Eu > 1500 ? Qu() : OR() ? Ku = null : null === Ku ? Ku = uu : uu - Ku >= 150 && (Qu(), function(uu) {
              var Ru;
              const yu = uu.closest(".SettingsMenuRight"),
                Eu = null === (Ru = uu.closest(".HudLayoutSettings")) || void 0 === Ru ? void 0 : Ru.querySelector(".HudLayoutPreviewBox");
              if (!yu || !Eu) return;
              const Ku = Eu.getBoundingClientRect().bottom + 8,
                Qu = yu.getBoundingClientRect().bottom - 8,
                mu = uu.getBoundingClientRect();
              mu.top < Ku ? yu.scrollBy({
                top: mu.top - Ku,
                behavior: "smooth"
              }) : mu.bottom > Qu && yu.scrollBy({
                top: Math.min(mu.bottom - Qu, mu.top - Ku),
                behavior: "smooth"
              })
            }(Ru))
          }), 50);
        return null === yu || void 0 === yu || yu.addEventListener("scroll", Ju, {
          passive: !0
        }), Qu
      }), [mu, Cu]), (0, bu.jsx)("div", {
        ref: du,
        className: "SettingBoxGroup HudElementList",
        children: lu.filter((uu => yu.has(uu.id) && (ju || !(0, Iu.M)(uu.id)))).map((yu => {
          const Eu = ((uu, Ru) => {
              var yu;
              return null !== (yu = uu[Ru]) && void 0 !== yu ? yu : Iu.p
            })(Qu, yu.id),
            Ku = (0, Iu.t)(Qu, yu.id),
            du = yu.id === mu,
            Cu = yu.scale && !Su,
            ku = ru(yu.id, du);
          return (0, bu.jsxs)("div", {
            "data-hud-row": yu.id,
            className: Nu()("SettingBox HudElementRow", {
              Open: du,
              Hidden: Ku,
              Child: void 0 !== yu.parent
            }),
            children: [(0, bu.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, bu.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": Cu ? du : void 0,
                onClick: () => {
                  Ju(yu.id)
                },
                children: [Lu(yu.id, Bu, Ru, xu), yu.scale && 1 !== Eu[2] && !(du && Cu) && (0, bu.jsx)("span", {
                  className: "HudElementRowSize",
                  children: py(Eu[2])
                }), Cu && (0, bu.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, bu.jsx)(hu, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: yu.id,
                actionButtons: Bu,
                keyNames: xu,
                locked: pu.has(yu.id),
                lockable: Tu(yu.id),
                onLocked: Wu
              }), "menu" === yu.id && (0, bu.jsx)(Pu, {
                className: "HudElementRowIcon",
                open: ju,
                name: Lu(yu.id, Bu, Ru, xu),
                onToggle: Hu
              }), "menu" !== yu.id && (0, bu.jsx)(wu, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: yu.id,
                elements: Qu,
                actionButtons: Bu,
                keyNames: xu,
                onHidden: Xu
              }), (0, bu.jsx)(Zu, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: pu.has(yu.id),
                id: yu.id,
                elements: Qu,
                actionButtons: Bu,
                keyNames: xu,
                onReset: Vu
              })]
            }), du && Cu && (0, bu.jsx)(Ty, {
              info: yu,
              tuple: Eu,
              props: uu
            }), ku && (0, bu.jsx)("div", {
              className: "HudElementNote",
              children: ku
            })]
          }, yu.id)
        }))
      })
    }

    function jy(uu) {
      let {
        preview: Ru,
        quick: yu,
        onFullScreen: Qu,
        resting: mu,
        onSidePanel: Ju
      } = uu;
      const {
        t: Nu
      } = (0, Eu.E)(), Vu = Vy(), ru = (0, Ku.useRef)(null), {
        width: Bu
      } = (0, uR.d)(ru), xu = Math.floor(Vu.width * Math.min(1, Ru.maxHeight / Vu.height)), Su = Bu - xu - 12, pu = Su >= 130, Tu = Bu > 0;
      (0, Ku.useEffect)((() => {
        Tu && Ju(pu)
      }), [Tu, pu, Ju]);
      const Wu = (0, RR.z)(pu ? xu : Bu, Vu.width, Vu.height, Ru.maxHeight),
        ju = mu ? (0, bu.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: Vu.height * Wu
          }
        }) : (0, bu.jsx)(ry, {
          ...Ru
        }),
        Hu = uu => (0, bu.jsxs)(Xu.P, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: Nu("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: Qu,
          children: [(0, bu.jsx)(Du.c, {
            name: "expand"
          }), uu && (0, bu.jsx)("span", {
            children: Nu("hudLayout:fullScreen")
          })]
        });
      return (0, bu.jsxs)("div", {
        ref: ru,
        className: "SettingBox HudLayoutPreviewBox",
        children: [Bu > 0 && pu && (0, bu.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, bu.jsx)("div", {
            style: {
              width: xu
            },
            children: ju
          }), (0, bu.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, bu.jsx)(eR, {
              selected: Ru.selected,
              ...yu,
              joystickFixed: Ru.joystickFixed,
              extra: Hu(!Ru.selected || Su >= 278)
            })
          })]
        }), Bu > 0 && !pu && (0, bu.jsxs)(bu.Fragment, {
          children: [ju, (0, bu.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: Hu(!1)
          })]
        })]
      })
    }
    var Hy = yu(2360),
      dy = yu(4169),
      by = yu(2340);
    const Cy = uu => {
      const Ru = ER.r * ("sides" === uu ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(Ru / 2))
    };

    function ky(uu, Ru, yu) {
      const [Eu, Ku, Qu, mu] = uu;
      return "sides" === Ru ? [Eu, yu, Qu, yu] : [yu, Ku, yu, mu]
    }
    const ey = [null, null, null, null],
      Ay = uu => `${uu}px`;

    function Dy(uu) {
      let {
        safe: Ru,
        onPreview: yu,
        onCommit: Qu
      } = uu;
      const {
        t: mu
      } = (0, Eu.E)(), Ju = (0, ER.y)(null !== Ru && void 0 !== Ru ? Ru : ey, window.innerWidth, window.innerHeight, zR(document).map(Math.round)), Nu = (0, Ku.useRef)(null !== Ru && void 0 !== Ru ? Ru : ey);
      Nu.current = null !== Ru && void 0 !== Ru ? Ru : ey;
      const Vu = uu => {
        const Ru = Math.min(Cy(uu), "sides" === uu ? Math.max(Ju[1], Ju[3]) : Math.max(Ju[0], Ju[2]));
        return (0, bu.jsx)(xu.g, {
          name: mu("sides" === uu ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: Cy(uu),
          step: 2,
          initValue: Ru,
          format: Ay,
          onChange: Ru => {
            yu(ky(Nu.current, uu, Ru))
          },
          onChangeComplete: Eu => {
            if (Eu === Ru) return void yu(Nu.current);
            const Ku = ky(Nu.current, uu, Eu);
            Nu.current = Ku, Qu(Ku), (0, eu.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: uu
            })
          }
        })
      };
      return (0, bu.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, bu.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, bu.jsx)("div", {
            children: mu("hudLayout:safeZone")
          }), (0, bu.jsx)(Xu.P, {
            active: null === Ru,
            pressed: null === Ru,
            onClick: () => {
              Qu(null)
            },
            children: mu("hudLayout:safeZoneAuto")
          })]
        }), Vu("sides"), Vu("ends")]
      })
    }

    function My() {
      const {
        t: uu
      } = (0, Eu.E)(), Ru = (0, Iu.X)(), {
        clientEscMenuOptions: yu
      } = (0, Vu.j)(["clientEscMenuOptions"]), Qu = (0, Hy.e)(), mu = Ru.hudLayouts[Qu], [Ju, Nu] = (0, Ku.useState)(null), {
        rowIconsOpen: ru,
        onRowIconsOpen: Bu,
        select: Su
      } = function(uu, Ru) {
        const [yu, Eu] = (0, Ku.useState)((() => Iu.C.some((Ru => void 0 !== uu.hudElements[Ru] || uu.hudLocked.includes(Ru))))), Qu = (0, Ku.useCallback)((uu => {
          Ru(uu), (0, Iu.M)(uu) && Eu(!0)
        }), [Ru]);
        return {
          rowIconsOpen: yu,
          onRowIconsOpen: Eu,
          select: Qu
        }
      }(mu, Nu), [pu, Tu] = (0, Ku.useState)([]), [Wu, ju] = (0, Ku.useState)(null), [Hu, du] = CR(), Cu = (0, Ku.useCallback)(((uu, Ru, yu) => {
        Tu(Ru), du(yu);
        const Eu = Object.keys(uu);
        ju((uu => (null === uu || void 0 === uu ? void 0 : uu.size) === Eu.length && Eu.every((Ru => uu.has(Ru))) ? uu : new Set(Eu)))
      }), [du]), {
        gameState: ku
      } = (0, Vu.j)(["gameState"]), Du = (0, by.e)(), [Mu] = (0, Ku.useState)((() => "inGame" === ku ? function(uu, Ru) {
        const yu = uu.querySelector(".InGameUi .TouchComponentsButtons");
        if (!yu) return mR;
        const Eu = {},
          Ku = {};
        for (const Xu of QR) {
          const uu = yu.querySelector(`.TouchSlot${Xu} > .TouchKey`);
          if (uu) {
            var Qu, mu;
            Eu[Xu] = uu.cloneNode(!0);
            const Ru = (null !== (Qu = null === (mu = uu.querySelector(".TouchKeyLabel")) || void 0 === mu ? void 0 : mu.textContent) && void 0 !== Qu ? Qu : "").split(/\s+/).filter((uu => !/[\d\xd7]/.test(uu))).join(" ");
            Ru && (Ku[Xu] = Ru)
          }
        }
        const Ju = Ru => {
            const yu = uu.querySelector(`.InGameUi ${Ru}`);
            return null !== yu && !yu.classList.contains("Hidden")
          },
          Nu = [...uu.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((uu => uu.cloneNode(!0)));
        return {
          faces: Object.keys(Eu).length > 0 ? Eu : null,
          names: Ku,
          shop: Ju(".TouchInventoryKey.ShopKey"),
          bag: Ju(".TouchInventoryKey.BagKey"),
          items: Nu.length > 0 ? Nu : null,
          rowIcons: Ru
        }
      }(document, Du) : mR)), Gu = (0, Ku.useRef)(null), Uu = (0, Ku.useRef)(null), nu = function(uu) {
        const [Ru, yu] = (0, Ku.useState)((() => .4 * window.innerHeight));
        return (0, Ku.useLayoutEffect)((() => {
          var Ru;
          const Eu = null === (Ru = uu.current) || void 0 === Ru ? void 0 : Ru.closest(".SettingsMenuRight");
          if (!Eu) return;
          const Ku = () => {
            const uu = Eu.clientHeight < Iy ? .4 : .5;
            yu(Math.max(80, Eu.clientHeight * uu - 24))
          };
          Ku();
          const Qu = new ResizeObserver(Ku);
          return Qu.observe(Eu), () => {
            Qu.disconnect()
          }
        }), [uu]), Ru
      }(Uu), su = (0, dy.i)(yu.joystickMode), tu = yu.touchActionButtons, cu = (0, Ku.useMemo)((() => function(uu, Ru) {
        const yu = {},
          Eu = [
            ["extra", "X"],
            ["game", "G"]
          ];
        Ru || Eu.push(["attack", "P"]);
        for (const [Ku, Qu] of Eu) {
          const Ru = uu.names[Qu];
          Ru && (yu[Ku] = Ru)
        }
        return yu
      }(Mu, tu)), [Mu, tu]);
      (0, Ku.useEffect)((() => {
        (0, eu.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [Lu, Fu] = (0, Ku.useState)(!1), [wu, Zu] = (0, Ku.useState)(!1), hu = (0, Ku.useRef)(null);
      By(hu, !wu);
      const [Pu, iu] = (0, Ku.useState)(!1), Yu = (0, Ku.useCallback)((() => {
        iu(!1)
      }), []), ou = (0, Ku.useMemo)((() => new Set(mu.hudLocked)), [mu.hudLocked]), vu = uu => {
        var Ru, yu;
        const Eu = (0, Iu.s)(),
          Ku = uu(Eu);
        (0, Iu.T)(null !== (Ru = null === (yu = Gu.current) || void 0 === yu ? void 0 : yu.keepLocks(Eu, Ku)) && void 0 !== Ru ? Ru : Ku)
      }, au = (uu, Ru) => {
        vu((yu => (0, Iu.Y)(yu, Qu, uu, Ru)))
      }, fu = (uu, Ru, yu) => {
        au(uu, {
          dx: Ru,
          dy: yu
        }), (0, eu.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${uu}`
        })
      }, uR = (uu, Ru) => {
        vu((yu => (0, Iu.Z)(yu, Qu, uu, Ru)))
      }, RR = uu => {
        const Ru = gu[uu];
        return (Ru.move || Ru.scale) && ("joystick" !== uu || su) && !(0, yR.t)(uu, mu.hudElements[uu])
      }, ER = uu => gu[uu].move && ("joystick" !== uu || su) && !ou.has(uu), KR = new Set(lu.map((uu => uu.id)).filter((uu => {
        const Ru = (0, Iu.M)(uu) && !Mu.rowIcons.includes(uu);
        return null === Wu || Wu.has(uu) || (0, Iu.t)(mu.hudElements, uu) && !Ru
      }))), JR = {
        present: KR,
        actionButtons: tu,
        keyNames: cu,
        scaleCaps: Hu,
        sizeBesidePreview: Lu,
        elements: mu.hudElements,
        selected: Ju,
        onSelect: Su,
        rowIconsOpen: ru,
        onRowIconsOpen: Bu,
        onScalePreview: (uu, Ru) => {
          var yu;
          null === (yu = Gu.current) || void 0 === yu || yu.setScale(uu, Ru)
        },
        onScale: (uu, Ru) => {
          au(uu, {
            scale: Ru
          }), (0, eu.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${uu}`
          })
        },
        onHidden: (uu, Ru) => {
          au(uu, {
            hidden: Ru
          }), (0, eu.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${Ru?"hide":"show"}:${uu}`
          })
        },
        onReset: uu => {
          au(uu, Iu.e)
        },
        locked: ou,
        lockable: RR,
        onLocked: uR,
        note: (Ru, yu) => {
          const Eu = yu && pu.length > 0 ? uu("hudLayout:overlapsNote", {
            names: zu(pu, tu, uu, cu)
          }) : null;
          return yu && qu(Ru, su) ? (0, bu.jsxs)(bu.Fragment, {
            children: [Eu && (0, bu.jsx)("span", {
              children: Eu
            }), (0, bu.jsx)("span", {
              children: uu("hudLayout:floatingJoystickNote")
            }), !Lu && (0, bu.jsx)(Ou, {})]
          }) : Eu || (yu && ou.has(Ru) ? uu("hudLayout:lockedNote") : yu && "cluster" === Ru ? uu("hudLayout:clusterNote") : yu && "menu" === Ru ? uu("hudLayout:menuNote") : yu && (0, yR.t)(Ru, mu.hudElements[Ru]) && ER(Ru) ? uu("hudLayout:rowIconNote") : yu && "arrows" === Ru ? uu("hudLayout:arrowsNote") : "inventory" === Ru && (0, Iu.t)(mu.hudElements, "inventory") ? uu("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, bu.jsxs)("div", {
        ref: Uu,
        className: "HudLayoutSettings",
        children: [(0, bu.jsxs)("div", {
          ref: hu,
          className: "HudLayoutBody",
          children: [(0, bu.jsx)("div", {
            className: "HudLayoutOrientation",
            children: uu("landscape" === Qu ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, bu.jsx)(jy, {
            preview: {
              layout: Ru,
              orientation: Qu,
              selected: Ju,
              onSelect: Su,
              onMove: fu,
              canMove: ER,
              actionButtons: tu,
              joystickFixed: su,
              presence: Mu,
              keyNames: cu,
              maxHeight: nu,
              apiRef: Gu,
              onMeasured: Cu,
              onReady: Zu,
              lockable: RR
            },
            quick: {
              layout: mu,
              actionButtons: tu,
              keyNames: cu,
              scaleCaps: Hu,
              overlaps: pu,
              onScale: JR.onScale,
              onHidden: JR.onHidden,
              onReset: JR.onReset,
              locked: ou,
              lockable: RR,
              onLocked: uR
            },
            onFullScreen: () => {
              iu(!0)
            },
            resting: Pu,
            onSidePanel: Fu
          }), Pu && (0, bu.jsx)(Sy, {
            layout: Ru,
            orientation: Qu,
            selected: Ju,
            onSelect: Su,
            onMove: fu,
            canMove: ER,
            actionButtons: tu,
            joystickFixed: su,
            presence: Mu,
            keyNames: cu,
            onScale: JR.onScale,
            onHidden: JR.onHidden,
            onReset: JR.onReset,
            locked: ou,
            lockable: RR,
            onLocked: uR,
            apiRef: Gu,
            onClose: Yu
          }), (0, bu.jsx)(Dy, {
            safe: mu.hudSafe,
            onCommit: uu => {
              vu((Ru => (0, Iu.bb)(Ru, Qu, uu)))
            },
            onPreview: uu => {
              var Ru;
              null === (Ru = Gu.current) || void 0 === Ru || Ru.setSafe(uu)
            }
          }), (0, bu.jsx)(xu.c, {
            label: uu("hudLayout:snapCentre"),
            checked: Ru.hudSnapCentre,
            onClick: uu => {
              (0, Iu.S)(uu)
            },
            circleInfoText: uu("hudLayout:snapCentreInfo")
          }), (0, bu.jsx)(Wy, {
            ...JR
          }), (0, bu.jsx)(xu.f, {
            label: uu("hudLayout:shape"),
            options: Iu.D.map((Ru => ({
              value: Ru,
              label: uu(`hudLayout:shape_${Ru}`)
            }))),
            value: Ru.hudShape,
            onChange: uu => {
              vu((Ru => ({
                ...Ru,
                hudShape: uu
              }))), (0, eu.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: uu
              })
            }
          }), (0, bu.jsx)(xu.g, {
            name: uu("hudLayout:opacity"),
            min: Iu.h,
            max: 1,
            step: .05,
            initValue: Ru.hudKeyOpacity,
            format: uu => `${Math.round(100*uu)}%`,
            circleInfoText: uu("hudLayout:opacityInfo"),
            onChange: uu => {
              var Ru;
              null === (Ru = Gu.current) || void 0 === Ru || Ru.setOpacity(uu)
            },
            onChangeComplete: uu => {
              (0, Iu.P)(uu), (0, eu.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, bu.jsx)(Xu.F, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const uu = Au.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await uu.getResult() && (0, Iu.O)()
            }()
          },
          children: uu("hudLayout:resetAll")
        })]
      })
    }
    const Iy = 350;
    const Gy = [function() {
      const {
        t: uu
      } = (0, Eu.E)(), [Ru, yu] = (0, Ku.useState)(!1), Qu = (0, Ku.useRef)(null);
      return (0, Ku.useEffect)((() => {
        var uu;
        Ru && (null === (uu = Qu.current) || void 0 === uu || uu.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [Ru]), (0, bu.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, bu.jsxs)("button", {
          ref: Qu,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": Ru,
          onClick: () => {
            yu(!Ru)
          },
          children: [(0, bu.jsx)(Du.c, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, bu.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, bu.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: uu("hudLayout:title")
            }), (0, bu.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: uu("hudLayout:entrySub")
            })]
          }), (0, bu.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), Ru && (0, bu.jsx)(My, {})]
      })
    }, function() {
      const {
        t: uu
      } = (0, Eu.E)(), {
        joystickMode: Ru,
        touchSpeedCurve: yu,
        autorun: Ku,
        jumpLock: Qu
      } = (0, Vu.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, bu.jsxs)(bu.Fragment, {
        children: [(0, bu.jsx)(xu.f, {
          label: uu("settingsMenu:joystick"),
          options: du.Ab.map((Ru => ({
            value: Ru,
            label: uu(Cu[Ru])
          }))),
          value: Ru,
          onChange: uu => {
            Vu.d.setClientEscMenuOptions({
              joystickMode: uu
            })
          },
          circleInfoText: uu("settingsMenu:joystickInfo")
        }), (0, bu.jsx)(xu.c, {
          label: uu("settingsMenu:preciseWalking"),
          checked: yu,
          onClick: uu => {
            Vu.d.setClientEscMenuOptions({
              touchSpeedCurve: uu
            })
          },
          circleInfoText: uu("settingsMenu:preciseWalkingInfo")
        }), (0, bu.jsx)(xu.c, {
          label: uu("settingsMenu:autoRun"),
          checked: Ku,
          onClick: uu => {
            Vu.d.setClientEscMenuOptions({
              autorun: uu
            })
          },
          circleInfoText: uu("settingsMenu:autoRunInfo")
        }), (0, bu.jsx)(xu.c, {
          label: uu("settingsMenu:jumpLock"),
          checked: Qu,
          onClick: uu => {
            Vu.d.setClientEscMenuOptions({
              jumpLock: uu
            })
          },
          circleInfoText: uu("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, bu.jsx)(Hu.b, {})
    }, function() {
      const {
        t: uu
      } = (0, Eu.E)(), {
        clientEscMenuOptions: Ru
      } = (0, Vu.j)(["clientEscMenuOptions"]);
      return (0, ku.c)() ? (0, bu.jsx)(xu.c, {
        label: uu("settingsMenu:vibration"),
        checked: Ru.vibration,
        onClick: uu => {
          Vu.d.setClientEscMenuOptions({
            vibration: uu
          })
        },
        circleInfoText: uu("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Uy() {
      return (0, bu.jsx)(bu.Fragment, {
        children: Gy.map(((uu, Ru) => (0, bu.jsx)(uu, {}, Ru)))
      })
    }
    var ny = yu(4145);

    function sy() {
      const {
        t: uu
      } = (0, Eu.E)(), {
        isTouchScreen: Ru,
        clientEscMenuOptions: yu,
        gameState: mu
      } = (0, Vu.j)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), Ju = (0, Su.g)("ezBridging"), Nu = (0, Su.g)("ezTowering"), Tu = "inGame" !== mu || !0 === Ju, Wu = (0, pu.f)() && ("inGame" !== mu || !0 === Nu), [, Hu] = (0, Ku.useReducer)((uu => uu + 1), 0), du = (0, ju.h)(), [Cu, ku] = (0, Ku.useState)(ny.e);
      return (0, bu.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [du && (0, bu.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, bu.jsx)("div", {
            children: uu("controller:settingsControlsNote")
          }), (0, bu.jsx)(Xu.P, {
            onClick: () => {
              Vu.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: uu("controller:settingsOpenController")
          })]
        }), (0, ru.isTouchscreen)() && !(0, ru.isMobile)() ? (0, bu.jsx)(bu.Fragment, {
          children: (0, bu.jsx)(xu.c, {
            label: uu("settingsMenu:useTouchControls"),
            checked: Cu,
            onClick: uu => {
              (0, ny.c)(uu), ku(uu)
            }
          })
        }) : null, Ru && (0, bu.jsx)(Uy, {}), Tu && (0, bu.jsx)(xu.c, {
          label: uu("settingsMenu:ezBridging"),
          checked: yu.ezBridging,
          onClick: uu => {
            Vu.d.setClientEscMenuOptions({
              ezBridging: uu
            })
          },
          circleInfoText: uu("settingsMenu:ezBridgingInfo")
        }), Wu && (0, bu.jsx)(xu.c, {
          label: uu("settingsMenu:ezTowering"),
          checked: yu.ezTowering,
          onClick: uu => {
            Vu.d.setClientEscMenuOptions({
              ezTowering: uu
            })
          },
          circleInfoText: uu("settingsMenu:ezToweringInfo")
        }), (0, bu.jsx)(xu.c, {
          label: uu("settingsMenu:crouchToggle"),
          checked: yu.crouchIsToggle,
          onClick: uu => {
            Vu.d.setClientEscMenuOptions({
              crouchIsToggle: uu
            })
          },
          circleInfoText: uu("settingsMenu:crouchToggleInfo")
        }), (0, bu.jsx)(xu.c, {
          label: uu("settingsMenu:hideUiToggle"),
          checked: yu.hideUiIsToggle,
          onClick: uu => {
            Vu.d.setClientEscMenuOptions({
              hideUiIsToggle: uu
            })
          },
          circleInfoText: uu("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, Bu.c)() && (0, bu.jsx)(xu.g, {
          name: uu("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: yu.touchscreenSensitivity,
          onChange: uu => {
            Vu.d.setClientEscMenuOptions({
              touchscreenSensitivity: uu
            })
          }
        }), !(0, ru.isMobile)() && (0, bu.jsx)(xu.g, {
          name: uu("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: yu.mouseSensitivity,
          onChange: uu => {
            Vu.d.setClientEscMenuOptions({
              mouseSensitivity: uu
            })
          }
        }), !(0, ru.isMobile)() && (0, bu.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, bu.jsx)("div", {
            className: "SliderText",
            children: uu("settingsMenu:keyBindings")
          }), Qu.g.map((Ru => (0, bu.jsx)(ty, {
            title: uu(Ru.name.translationKey, Ru.name.params),
            defaultOpen: Qu.i.has(Ru.id),
            children: Ru.actions.map((uu => (0, bu.jsx)(ly, {
              noaAction: uu,
              forceUpdate: Hu,
              clashesWith: Ru.clashesWith,
              showPadGlyph: du
            }, uu)))
          }, Ru.name.translationKey))), (0, bu.jsx)(Xu.F, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, Qu.D)(), Hu()
            },
            children: uu("controls:resetBindings")
          })]
        })]
      })
    }

    function ty(uu) {
      let {
        title: Ru,
        defaultOpen: yu,
        children: Eu
      } = uu;
      const [Qu, mu] = (0, Ku.useState)(yu);
      return (0, bu.jsxs)("div", {
        className: Nu()("ControlsSection", {
          Collapsed: !Qu
        }),
        children: [(0, bu.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            mu(!Qu)
          },
          children: [(0, bu.jsx)("div", {
            className: "ControlsSectionTitle",
            children: Ru
          }), (0, bu.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), Qu && (0, bu.jsx)("div", {
          className: "ControlsSectionRows",
          children: Eu
        })]
      })
    }

    function ly(uu) {
      let {
        noaAction: Ru,
        forceUpdate: yu,
        clashesWith: Ju,
        showPadGlyph: Vu
      } = uu;
      const {
        t: ru
      } = (0, Eu.E)(), Bu = (0, Wu.d)(Ru), [xu, Su] = (0, Ku.useState)(!1), [pu, ju] = (0, Ku.useState)("controls:clickToEnterNewBinding"), [Hu, du] = (0, Ku.useState)(null), [Cu, ku] = (0, Ku.useState)(null), eu = (0, Ku.useRef)(null);
      (0, Ku.useEffect)((() => {
        xu && eu.current && eu.current.focus()
      }), [xu]);
      const Au = Qu.x[Ru].filter((uu => mu.g[uu]));
      let Du = null;
      const Mu = [],
        Iu = Ju.flatMap((uu => {
          var Ru, yu;
          return null !== (Ru = null === (yu = Qu.g.find((Ru => Ru.id === uu))) || void 0 === yu ? void 0 : yu.actions) && void 0 !== Ru ? Ru : []
        }));
      for (const Eu of Iu) {
        if (Eu === Ru) continue;
        const uu = Qu.x[Eu];
        for (const Ru of uu) Au.includes(Ru) && Mu.push(ru(Qu.A[Eu].translationKey, Qu.A[Eu].params))
      }
      Mu.length > 0 && (Du = ru("controls:sharedBindingsWarning") + " ", Du += Mu.join(", "));
      const Gu = () => {
          Su(!1), du(null), ju("controls:clickToEnterNewBinding"), ku(null)
        },
        Uu = () => "BindingInput_" + Ru;
      return (0, bu.jsxs)("div", {
        className: Nu()("ControlRow", {
          WarningBorder: null !== Du
        }),
        children: [(0, bu.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, bu.jsxs)("div", {
            className: "ControlName",
            children: [ru(Qu.A[Ru].translationKey, Qu.A[Ru].params), Vu && Bu && (0, bu.jsx)(Tu.b, {
              glyph: Bu,
              className: "ControlPadGlyph"
            })]
          }), (0, bu.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, bu.jsxs)("div", {
              className: "ControlBindingsList",
              children: [Au.map((uu => (0, bu.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, bu.jsx)("div", {
                  children: (0, Qu.o)(uu)
                }), (0, bu.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Eu = (0, Qu.B)(Ru, uu);
                    Eu.isError() ? ku(Eu.asError().message) : ku(null), yu()
                  },
                  children: "\xd7"
                })]
              }, uu))), !xu && (0, bu.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  Su(!0), ku(null)
                },
                children: (0, bu.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), xu && (0, bu.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, bu.jsxs)("div", {
                className: "InputContainer",
                children: [(0, bu.jsx)("div", {
                  className: "InputOverlay",
                  children: Hu ? (0, Qu.o)(Hu) : (0, bu.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: ru(pu)
                  })
                }), (0, bu.jsx)("input", {
                  ref: eu,
                  id: Uu(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: uu => {
                    if ("Escape" === uu.code) return Gu(), uu.preventDefault(), void uu.stopPropagation();
                    const Ru = uu.code;
                    mu.c.includes(Ru) ? (ku(null), du(Ru)) : (ku("controls:keyIsReserved"), du(null)), uu.preventDefault(), uu.stopPropagation()
                  },
                  onMouseDown: uu => {
                    const Ru = "Mouse" + (uu.button + 1);
                    document.activeElement && document.activeElement.id === Uu() ? mu.c.includes(Ru) ? (ku(null), du(Ru)) : (ku("controls:keyIsReserved"), du(null)) : ju("controls:enterNewBinding"), uu.stopPropagation()
                  },
                  onBlur: () => {
                    ju("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, bu.jsx)(Xu.e, {
                onPointerDown: uu => {
                  uu.preventDefault()
                },
                onClick: () => {
                  (0, Qu.e)(Ru, Hu), yu(), Gu()
                },
                className: "ControlBindingAddButton",
                disabled: null === Hu,
                children: ru("general:add")
              }), (0, bu.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  Gu()
                },
                children: "\xd7"
              })]
            }), Cu && (0, bu.jsx)("div", {
              className: "ControlBindingError",
              children: ru(Cu)
            })]
          })]
        }), Du && (0, bu.jsx)("div", {
          className: "ControlRowWarning",
          children: Du
        })]
      })
    }
  },
  8582: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ju
    });
    var Eu = yu(27),
      Ku = yu(3236),
      Qu = yu(1311),
      mu = yu(1354);
    const Ju = async () => {
      if ((0, mu.g)()) {
        if (!0 !== await Qu.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Eu.d.get("gameState")) return
      }(0, Ku.d)()
    }
  },
  8585: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Nu,
      h: () => Qu,
      l: () => mu,
      p: () => Ku,
      t: () => Ju
    });
    var Eu = yu(1887);
    const Ku = "controllerPadShopOpen",
      Qu = uu => Eu.h.includes(uu),
      mu = uu => Object.values(uu).some((uu => !1 !== uu.canBuy && !uu.isRewardedAd)),
      Ju = (uu, Ru, yu) => {
        var Eu, Ku, mu, Ju;
        const Nu = uu.filter((uu => !Qu(uu))),
          Xu = null !== Ru && uu.includes(Ru) ? Ru : null;
        return null !== Xu && !Qu(Xu) && yu(Xu) ? Xu : null !== (Eu = null !== (Ku = null !== (mu = null !== (Ju = Nu.find(yu)) && void 0 !== Ju ? Ju : Nu[0]) && void 0 !== mu ? mu : Xu) && void 0 !== Ku ? Ku : uu[0]) && void 0 !== Eu ? Eu : null
      },
      Nu = uu => uu.userInput || uu.isRewardedAd || "boolean" === typeof uu.isSelected ? null : JSON.stringify([uu.image, uu.cost, uu.currency, uu.amount, uu.customTitle, uu.buyButtonText, uu.description, uu.canBuy])
  },
  8615: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Xu,
      h: () => Vu
    });
    var Eu = yu(64),
      Ku = yu(1400),
      Qu = yu(1938),
      mu = yu(1362),
      Ju = yu(1386),
      Nu = yu(1079);
    const Xu = () => {
        const uu = (0, mu.p)();
        if ((0, Eu.useEffect)((() => {
            (0, mu.i)()
          }), []), !uu) return null;
        const {
          ControllerCategory: Ru
        } = uu;
        return (0, Nu.jsx)(Ju.b, {
          children: (0, Nu.jsx)(Ru, {})
        })
      },
      Vu = () => {
        var uu;
        const Ru = (0, mu.p)(),
          [, yu] = (0, Eu.useReducer)((uu => uu + 1), 0);
        return (0, Ku.e)(Qu.e, yu), null !== (uu = null === Ru || void 0 === Ru ? void 0 : Ru.hasActivePad()) && void 0 !== uu && uu
      }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);