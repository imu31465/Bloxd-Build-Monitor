export const id = 151;
export const ids = [151];
export const modules = {
  8843: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq
    });
    var Yq = gq(24),
      lq = gq(1183),
      Oq = gq(4828),
      mq = gq(1070);

    function xq(qq) {
      let {
        note: Eq
      } = qq;
      const {
        t: gq
      } = (0, lq.v)(), {
        clientEscMenuOptions: xq
      } = (0, Yq.j)(["clientEscMenuOptions"]);
      return (0, mq.jsx)(Oq.d, {
        label: gq("touchSettings:actionButtons"),
        checked: xq.touchActionButtons,
        onClick: qq => {
          Yq.b.setClientEscMenuOptions({
            touchActionButtons: qq
          })
        },
        circleInfoText: gq("touchSettings:actionButtonsInfo"),
        note: Eq
      })
    }
  },
  8834: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => zg,
      f: () => Tg
    });
    var Yq = gq(1183),
      lq = gq(57),
      Oq = gq(1952),
      mq = gq(1968),
      xq = gq(1018),
      Aq = gq.n(xq),
      cq = gq(1422),
      uq = gq(24),
      Bq = gq(96),
      Wq = gq(114),
      Nq = gq(4828),
      aq = gq(2383),
      Vq = gq(278),
      dq = gq(1975),
      jq = gq(1980),
      Hq = gq(8837),
      oq = gq(8843),
      Pq = gq(296),
      Qq = gq(1070);
    const yq = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var tq = gq(8846);
    var rq = gq(1448),
      vq = gq(1336),
      hq = gq(1025),
      nq = gq(1380),
      bq = gq(2418);
    const iq = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(bq.G.map((qq => [qq, "menu"])))
      },
      Zq = qq => bq.A.filter((Eq => iq[Eq] === qq)),
      fq = new Set(Zq("cluster")),
      Mq = ["cluster"],
      Tq = [...Mq, ...bq.A.filter((qq => !Mq.includes(qq) && !iq[qq]))],
      zq = Tq.flatMap((qq => [qq, ...Zq(qq)])).map((qq => ({
        id: qq,
        label: `hudLayout:${qq}`,
        ...bq.w[qq],
        parent: iq[qq]
      }))),
      Sq = Object.fromEntries(zq.map((qq => [qq.id, qq]))),
      pq = "data-hud-el";

    function Gq(qq, Eq, gq, Yq) {
      const lq = gq(function(qq, Eq) {
          return "attack" !== qq || Eq ? Sq[qq].label : "hudLayout:attackContext"
        }(qq, Eq)),
        Oq = Yq[qq];
      return Oq ? gq("hudLayout:slotWithKey", {
        slot: lq,
        key: Oq
      }) : lq
    }

    function Lq(qq, Eq, gq, Yq) {
      return qq.map((qq => Gq(qq, Eq, gq, Yq))).join(", ")
    }

    function Jq(qq) {
      let {
        className: Eq,
        keepPlace: gq
      } = qq;
      return gq ? (0, Qq.jsx)("div", {
        className: Aq()(Eq, "Placeholder")
      }) : null
    }

    function kq(qq) {
      let {
        id: Eq,
        elements: gq,
        actionButtons: lq,
        keyNames: Oq,
        className: mq,
        keepPlace: xq,
        onHidden: Aq
      } = qq;
      const {
        t: uq
      } = (0, Yq.v)();
      if (!Sq[Eq].hide) return (0, Qq.jsx)(Jq, {
        className: mq,
        keepPlace: xq
      });
      const Bq = (0, bq.v)(gq, Eq);
      return (0, Qq.jsx)(cq.Q, {
        className: mq,
        ariaLabel: uq(Bq ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: Gq(Eq, lq, uq, Oq)
        }),
        pressed: !Bq,
        onClick: () => {
          Aq(Eq, !Bq)
        },
        children: (0, Qq.jsx)(hq.d, {
          name: Bq ? "eye-slash" : "eye"
        })
      })
    }

    function Rq(qq) {
      var Eq;
      let {
        id: gq,
        elements: lq,
        actionButtons: Oq,
        keyNames: mq,
        className: xq,
        keepPlace: Aq,
        onlyWhenMoved: uq,
        locked: Bq,
        onReset: Wq
      } = qq;
      const {
        t: Nq
      } = (0, Yq.v)(), aq = Sq[gq], Vq = (0, bq.L)(null !== (Eq = lq[gq]) && void 0 !== Eq ? Eq : bq.q);
      return !aq.move && !aq.scale || uq && Vq ? (0, Qq.jsx)(Jq, {
        className: xq,
        keepPlace: Aq
      }) : (0, Qq.jsx)(cq.Q, {
        className: xq,
        disabled: Vq || Bq,
        ariaLabel: Nq("hudLayout:resetElement", {
          name: Gq(gq, Oq, Nq, mq)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: gq
        },
        onClick: qq => {
          uq && Xq(qq.currentTarget), Wq(gq)
        },
        children: (0, Qq.jsx)(hq.d, {
          name: "rotate-left"
        })
      })
    }

    function Uq(qq) {
      let {
        id: Eq,
        actionButtons: gq,
        keyNames: lq,
        className: Oq,
        keepPlace: mq,
        locked: xq,
        lockable: Aq,
        onLocked: uq
      } = qq;
      const {
        t: Bq
      } = (0, Yq.v)();
      return Aq || xq ? (0, Qq.jsx)(cq.Q, {
        className: Oq,
        ariaLabel: Bq(xq ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: Gq(Eq, gq, Bq, lq)
        }),
        pressed: xq,
        active: xq,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${xq?"unlock":"lock"}:${Eq}`
        },
        onClick: () => {
          uq(Eq, !xq)
        },
        children: (0, Qq.jsx)(hq.d, {
          name: xq ? "lock" : "lock-open"
        })
      }) : (0, Qq.jsx)(Jq, {
        className: Oq,
        keepPlace: mq
      })
    }

    function Fq(qq) {
      let {
        className: Eq,
        open: gq,
        name: lq,
        onToggle: Oq
      } = qq;
      const {
        t: mq
      } = (0, Yq.v)();
      return (0, Qq.jsx)(cq.Q, {
        className: Eq,
        ariaLabel: mq(gq ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: lq
        }),
        pressed: gq,
        analyticsClick: {
          id: "hud_layout.children",
          value: gq ? "close" : "open"
        },
        onClick: () => {
          Oq(!gq)
        },
        children: (0, Qq.jsx)(hq.d, {
          name: gq ? "angle-up" : "angle-down"
        })
      })
    }

    function sq(qq, Eq) {
      var gq;
      qq.contains(document.activeElement) && Eq.focus({
        preventScroll: !0
      }), null === (gq = (0, nq.g)()) || void 0 === gq || gq.handOverPadFocus(qq, Eq)
    }

    function Xq(qq) {
      const Eq = qq.closest("[data-hud-row]"),
        gq = null === Eq || void 0 === Eq ? void 0 : Eq.querySelector(".HudElementRowName");
      return !(!Eq || !gq) && (sq(Eq, gq), !0)
    }
    const wq = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function Kq(qq, Eq) {
      return "joystick" === qq && !Eq
    }

    function Cq() {
      const {
        t: qq
      } = (0, Yq.v)();
      return (0, Qq.jsx)(cq.Q, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: qq => {
          const Eq = qq.currentTarget;
          if (!Xq(Eq)) {
            const qq = function(qq) {
              var Eq, gq;
              const Yq = [qq.previousElementSibling, qq.nextElementSibling].find((qq => qq instanceof HTMLElement && qq.matches(wq)));
              return null !== (Eq = null !== Yq && void 0 !== Yq ? Yq : null === (gq = qq.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === gq ? void 0 : gq.querySelector(`:is(${wq}):not(.HudFixJoystickButton)`)) && void 0 !== Eq ? Eq : null
            }(Eq);
            qq && sq(Eq, qq)
          }
          uq.b.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: qq("hudLayout:fixJoystick")
      })
    }
    var Iq = gq(71),
      eq = gq(1267),
      Dq = gq(3018),
      qE = gq(2660),
      EE = gq(8850),
      gE = gq(2424),
      YE = gq(2437),
      lE = gq(3056);
    const OE = ["J", "C", "A", "P", "U", "X", "G"],
      mE = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: bq.G,
        pinnedIcon: null
      });

    function xE(qq, Eq) {
      qq.replaceChildren(...[...Eq.childNodes].map((qq => qq.cloneNode(!0))))
    }
    const AE = qq => ({
      [pq]: qq
    });

    function cE(qq) {
      let {
        id: Eq,
        slot: gq,
        icon: Yq,
        label: Oq,
        hidden: mq,
        className: xq,
        face: cq
      } = qq;
      const uq = (0, lq.useRef)(null);
      return (0, lq.useLayoutEffect)((() => {
        cq && uq.current && xE(uq.current, cq)
      }), [cq]), (0, Qq.jsxs)("div", {
        className: Aq()("TouchKeyHit", `TouchSlot${gq}`, xq, {
          HudPreviewGhost: mq.has(Eq)
        }),
        ...AE(Eq),
        children: [cq && (0, Qq.jsx)("div", {
          ref: uq,
          className: Aq()("TouchKey", {
            Labelled: cq.classList.contains("Labelled")
          })
        }), !cq && (0, Qq.jsxs)("div", {
          className: Aq()("TouchKey", {
            Labelled: void 0 !== Oq
          }),
          children: [Yq && (0, Qq.jsx)(hq.d, {
            name: Yq
          }), void 0 !== Oq && (0, Qq.jsx)("span", {
            className: "TouchKeyLabel",
            children: Oq
          })]
        })]
      })
    }

    function uE(qq) {
      let {
        item: Eq,
        selected: gq
      } = qq;
      const Yq = (0, lq.useRef)(null);
      return (0, lq.useLayoutEffect)((() => {
        Yq.current && xE(Yq.current, Eq)
      }), [Eq]), (0, Qq.jsx)("div", {
        ref: Yq,
        className: Aq()("InvenItem", {
          Selected: gq
        })
      })
    }
    const BE = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      WE = qq => void 0 === qq ? {} : {
        style: {
          "--parked": qq
        }
      };

    function NE(qq) {
      let {
        id: Eq,
        hidden: gq,
        parked: Yq,
        unslotted: lq = !1
      } = qq;
      return (0, Qq.jsx)("div", {
        className: Aq()("TopRightIcon", YE.k[Eq], {
          HudPreviewGhost: gq.has(Eq),
          [gE.c]: void 0 !== Yq,
          [gE.g]: lq
        }),
        ...WE(Yq),
        children: (0, Qq.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...AE(Eq),
          children: (0, Qq.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Qq.jsx)(hq.d, {
              name: BE[Eq]
            })
          })
        })
      })
    }

    function aE(qq) {
      let {
        portraitPhone: Eq,
        icons: gq,
        pinnedIcon: Yq,
        hidden: Oq,
        moved: mq,
        trayState: xq
      } = qq;
      const cq = Eq ? (0, gE.G)(gq) : [],
        uq = gq.filter((qq => "settings" === qq)),
        Bq = gq.filter((qq => "settings" !== qq && !cq.includes(qq))).reverse(),
        Wq = cq.length > 0 && "gone" === xq,
        Nq = [...uq, ...Wq ? ["tray"] : [], ...Bq].filter((qq => "tray" === qq || Oq.has(qq) && !mq.has(qq))),
        aq = qq => {
          const Eq = Nq.indexOf(qq);
          return Eq < 0 ? void 0 : Eq
        },
        Vq = (qq, Eq) => (0, Qq.jsx)(NE, {
          id: qq,
          hidden: Oq,
          parked: Eq ? aq(qq) : void 0,
          unslotted: Eq && Oq.has(qq) && mq.has(qq)
        }, qq);
      return (0, Qq.jsxs)("div", {
        className: Aq()("TopRightIcons TouchInGame", {
          Column: Eq
        }),
        children: [uq.map((qq => Vq(qq, !0))), cq.length > 0 && (0, Qq.jsxs)("div", {
          className: Aq()("TopRightIcon TopRightTrayToggle Open", {
            [gE.c]: Wq
          }),
          ...WE(aq("tray")),
          children: [(0, Qq.jsx)("div", {
            className: Aq()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== xq
            }),
            children: (0, Qq.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, Qq.jsx)(hq.d, {
                name: "ellipsis"
              })
            })
          }), (0, Qq.jsx)("div", {
            className: "TopRightTray",
            children: cq.map((qq => Vq(qq, !1)))
          })]
        }), Bq.map((qq => (0, Qq.jsxs)(lq.Fragment, {
          children: ["perspective" === qq && null !== Yq && (0, Qq.jsx)("div", {
            className: "TopRightIcon",
            children: (0, Qq.jsx)("div", {
              className: "UiItemIcon SmallTextBold",
              children: (0, Qq.jsx)("div", {
                className: "ScaleOnHover",
                children: (0, Qq.jsx)(hq.d, {
                  name: Yq
                })
              })
            })
          }), Vq(qq, !0)]
        }, qq)))]
      })
    }

    function VE(qq) {
      let {
        next: Eq,
        hidden: gq
      } = qq;
      return (0, Qq.jsx)("div", {
        className: Aq()("HotBarArrow", Eq ? "Next" : "Previous", {
          HudPreviewGhost: gq
        }),
        ...AE("arrows"),
        children: (0, Qq.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Qq.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Qq.jsx)(hq.d, {
              name: Eq ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function dE() {
      return (0, Qq.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, Qq.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, Qq.jsx)("div", {
            className: "SocialBar",
            children: (0, Qq.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, Qq.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, Qq.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, Qq.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, Qq.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Qq.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Qq.jsx)(hq.d, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, Qq.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, Qq.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, Qq.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, Qq.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Qq.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Qq.jsx)(hq.d, {
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
    const jE = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      HE = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      oE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      PE = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function QE(qq) {
      let {
        presence: Eq,
        portraitPhone: gq,
        hidden: lq,
        actionButtons: Oq,
        joystickFixed: mq,
        keysAbove: xq,
        auraBar: cq,
        trayState: uq,
        moved: Wq
      } = qq;
      const {
        t: Nq
      } = (0, Yq.v)(), {
        faces: aq,
        items: Vq
      } = Eq, dq = qq => ({
        HudPreviewGhost: lq.has(qq)
      });
      return (0, Qq.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, Qq.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, Qq.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, Qq.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, Qq.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, Qq.jsx)("div", {
              className: "InGameHeaderGameName",
              children: Nq("hudLayout:previewGameName")
            })]
          })
        }), (0, Qq.jsx)("div", {
          className: "TopLeftElements",
          children: (0, Qq.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, Qq.jsxs)("div", {
              className: "Chat",
              children: [(0, Qq.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [Nq("hudLayout:previewChatLine"), Nq("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), Nq("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((qq => (0, Qq.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, Qq.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, Qq.jsx)("div", {
                      className: "IndividualText",
                      children: qq
                    })
                  })
                }, qq)))
              }), (0, Qq.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: Aq()("ChatIconWrapper SmallTextLight", dq("chat")),
                ...AE("chat"),
                children: (0, Qq.jsx)(hq.d, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, Qq.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, Qq.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, Qq.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, Qq.jsx)("div", {
                className: "TopRightIconsContainer",
                ...AE("menu"),
                children: (0, Qq.jsx)(aE, {
                  portraitPhone: gq,
                  icons: Eq.rowIcons,
                  pinnedIcon: Eq.pinnedIcon,
                  hidden: lq,
                  trayState: uq,
                  moved: Wq
                })
              })
            }), Bq.featureFlags.useSocialFeatures && (0, Qq.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, Qq.jsx)(dE, {})
            })]
          })
        }), (0, Qq.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, Qq.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, Qq.jsxs)("div", {
            className: "TouchInteractKey",
            ...AE("interact"),
            children: [(0, Qq.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, Qq.jsx)(hq.d, {
                name: "hand-back-point-up"
              })
            }), (0, Qq.jsx)("div", {
              children: Nq("hudLayout:previewInteract")
            })]
          })
        }), (0, Qq.jsx)("div", {
          className: "BottomCentre",
          children: (0, Qq.jsxs)("div", {
            className: "BottomElements",
            children: [(0, Qq.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, Qq.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, Qq.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...AE("hotbar"),
                children: (0, Qq.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, Qq.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, Qq.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, Qq.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, Qq.jsx)(hq.d, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), cq && (0, Qq.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, Qq.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, Qq.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, lE.e)("glint"),
                    alt: ""
                  }), (0, Qq.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, Qq.jsx)("div", {
                  className: "AuraBar",
                  children: (0, Qq.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, Qq.jsx)("div", {
                className: "HotBarRow",
                children: (0, Qq.jsx)("div", {
                  className: Aq()("HotBarContainer Touch", {
                    KeysAbove: xq
                  }),
                  children: (0, Qq.jsxs)("div", {
                    className: "HotBar",
                    ...AE("hotbar"),
                    children: [(0, Qq.jsxs)("div", {
                      className: Aq()("TouchInventoryKeys", {
                        NoAuraBar: !cq
                      }),
                      children: [(0, Qq.jsx)("div", {
                        className: Aq()("TouchInventoryKey ShopKey", dq("inventory"), {
                          Hidden: !Eq.shop
                        }),
                        ...AE("inventory"),
                        children: (0, Qq.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Qq.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Qq.jsx)(hq.d, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, Qq.jsx)("div", {
                        className: Aq()("TouchInventoryKey BagKey", dq("inventory"), {
                          Hidden: !Eq.bag
                        }),
                        ...AE("inventory"),
                        children: (0, Qq.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Qq.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Qq.jsx)(hq.d, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, Qq.jsx)(VE, {
                      next: !1,
                      hidden: lq.has("arrows")
                    }), (0, Qq.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== Vq && Vq.map(((qq, Eq) => (0, Qq.jsx)(uE, {
                        item: qq,
                        selected: qq.classList.contains("Selected")
                      }, Eq))), null === Vq && oE.map((qq => {
                        const Eq = PE[qq];
                        return (0, Qq.jsx)("div", {
                          className: Aq()("InvenItem", {
                            Selected: 0 === qq
                          }),
                          children: Eq && (0, Qq.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, Qq.jsx)(hq.d, {
                              name: Eq
                            })
                          })
                        }, qq)
                      }))]
                    }), (0, Qq.jsx)(VE, {
                      next: !0,
                      hidden: lq.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, Qq.jsx)("div", {
              className: "BottomRightElements",
              children: (0, Qq.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== aq && OE.map((qq => {
                  const Eq = aq[qq];
                  return Eq && (0, Qq.jsx)(cE, {
                    id: jE[qq],
                    slot: qq,
                    face: Eq,
                    className: HE[qq],
                    hidden: lq
                  }, qq)
                })), null === aq && (0, Qq.jsxs)(Qq.Fragment, {
                  children: [(0, Qq.jsx)(cE, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: lq
                  }), (0, Qq.jsx)(cE, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: lq
                  }), Oq && (0, Qq.jsxs)(Qq.Fragment, {
                    children: [(0, Qq.jsx)(cE, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: lq
                    }), (0, Qq.jsx)(cE, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: lq
                    })]
                  }), !Oq && (0, Qq.jsx)(cE, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: Nq("touchKeys:scope"),
                    hidden: lq
                  }), (0, Qq.jsx)(cE, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: Nq("touchKeys:fly"),
                    hidden: lq
                  }), (0, Qq.jsx)(cE, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: lq
                  })]
                })]
              })
            })]
          })
        }), (0, Qq.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, Qq.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, Qq.jsxs)("div", {
              className: Aq()("Joystick Resting HudPreviewJoystick", {
                Floating: !mq
              }),
              ...AE("joystick"),
              children: [(0, Qq.jsx)("div", {
                className: "JoystickBase"
              }), (0, Qq.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function yE() {
      const [qq, Eq] = (0, lq.useState)({}), gq = (0, lq.useCallback)((qq => {
        Eq((Eq => [...new Set([...Object.keys(Eq), ...Object.keys(qq)])].every((gq => Eq[gq] === qq[gq])) ? Eq : qq))
      }), []);
      return [qq, gq]
    }
    const tE = .05;

    function rE(qq) {
      var Eq;
      let {
        selected: gq,
        layout: lq,
        actionButtons: Oq,
        keyNames: mq,
        overlaps: xq,
        scaleCaps: uq,
        joystickFixed: Bq,
        onScale: Wq,
        onHidden: Nq,
        onReset: aq,
        locked: Vq,
        lockable: dq,
        onLocked: jq,
        extra: Hq
      } = qq;
      const {
        t: oq
      } = (0, Yq.v)(), Pq = gq ? Sq[gq] : null, yq = null !== gq && Vq.has(gq), tq = (gq && lq.hudElements[gq] || bq.q)[2], rq = null !== (Eq = gq && uq[gq]) && void 0 !== Eq ? Eq : bq.k, vq = qq => {
        gq && Wq(gq, Math.min(rq, Math.round(100 * (tq + .1 * qq)) / 100))
      };
      return (0, Qq.jsxs)(Qq.Fragment, {
        children: [(0, Qq.jsxs)("div", {
          className: Aq()("HudQuickName SmallTextBold", {
            Overlap: xq.length > 0
          }),
          children: [xq.length > 0 && (0, Qq.jsx)(hq.d, {
            name: "triangle-exclamation"
          }), Pq ? Gq(Pq.id, Oq, oq, mq) : oq("hudLayout:fullScreenHint"), xq.length > 0 && (0, Qq.jsx)("span", {
            className: "HudQuickOverlap",
            children: oq("hudLayout:overlapsShort", {
              names: Lq(xq, Oq, oq, mq)
            })
          })]
        }), (null === Pq || void 0 === Pq ? void 0 : Pq.scale) && (0, Qq.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, Qq.jsx)(cq.Q, {
            disabled: yq || tq <= bq.n,
            ariaLabel: oq("hudLayout:smaller"),
            onClick: () => {
              vq(-1)
            },
            children: (0, Qq.jsx)(hq.d, {
              name: "minus"
            })
          }), (0, Qq.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*tq)}%`
          }), (0, Qq.jsx)(cq.Q, {
            disabled: yq || tq >= rq,
            ariaLabel: oq("hudLayout:larger"),
            onClick: () => {
              vq(1)
            },
            children: (0, Qq.jsx)(hq.d, {
              name: "plus"
            })
          })]
        }), (Pq || Hq) && (0, Qq.jsxs)("div", {
          className: "HudQuickActions",
          children: [Pq && (0, Qq.jsxs)(Qq.Fragment, {
            children: [(0, Qq.jsx)(Uq, {
              id: Pq.id,
              actionButtons: Oq,
              keyNames: mq,
              locked: yq,
              lockable: dq(Pq.id),
              onLocked: jq
            }), (0, Qq.jsx)(kq, {
              id: Pq.id,
              elements: lq.hudElements,
              actionButtons: Oq,
              keyNames: mq,
              onHidden: Nq
            }), (0, Qq.jsx)(Rq, {
              id: Pq.id,
              elements: lq.hudElements,
              actionButtons: Oq,
              keyNames: mq,
              locked: yq,
              onReset: aq
            }), Kq(Pq.id, Bq) && (0, Qq.jsx)(Cq, {})]
          }), Hq]
        })]
      })
    }
    var vE = gq(1086),
      hE = gq(4239);
    const nE = "HudPreviewDoc",
      bE = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      iE = new Set([nE, ...Object.values(bE)]),
      ZE = new Set(bq.A.map(YE.s)),
      fE = new Set(YE.g),
      ME = 'style, link[rel="stylesheet"]';

    function TE(qq, Eq, gq, Yq) {
      const lq = new Map,
        Oq = new Set,
        mq = new URL(qq.baseURI).origin,
        xq = Eq => {
          var gq;
          if ("LINK" !== Eq.nodeName) return !0;
          const Yq = null === (gq = Eq.getAttribute("href")) || void 0 === gq ? void 0 : gq.trim();
          if (!Yq) return !1;
          try {
            return new URL(Yq, qq.baseURI).origin === mq
          } catch {
            return !1
          }
        };
      let Aq = null;
      const cq = () => {
          Aq !== (0 === Oq.size) && (Aq = 0 === Oq.size, null === Yq || void 0 === Yq || Yq(Aq))
        },
        uq = qq => {
          const Eq = qq.cloneNode(!0);
          if ("LINK" === Eq.tagName) {
            Oq.add(Eq);
            const qq = () => {
              Oq.delete(Eq), cq()
            };
            Eq.addEventListener("load", qq), Eq.addEventListener("error", qq), gq && Eq.addEventListener("load", gq)
          }
          return Eq
        },
        Bq = () => {
          const Yq = function(qq) {
              const Eq = [...qq.body.children].filter((qq => qq.matches(ME)));
              return [...qq.head.querySelectorAll(ME), ...Eq]
            }(qq).filter(xq),
            mq = new Set(Yq);
          for (const [qq, Eq] of lq) mq.has(qq) || (Eq.remove(), lq.delete(qq), Oq.delete(Eq));
          let Aq = null;
          for (let qq = Yq.length - 1; qq >= 0; qq--) {
            const Oq = Yq[qq];
            let mq = lq.get(Oq);
            mq ? "STYLE" === Oq.tagName && mq.textContent !== Oq.textContent && (mq.textContent = Oq.textContent, null === gq || void 0 === gq || gq()) : (mq = uq(Oq), lq.set(Oq, mq), Eq.head.insertBefore(mq, Aq)), Aq = mq
          }
          cq()
        };
      Bq();
      const Wq = new MutationObserver(Bq);
      return Wq.observe(qq.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), Wq.observe(qq.body, {
        childList: !0
      }), () => {
        Wq.disconnect()
      }
    }

    function zE(qq, Eq, gq) {
      let {
        keysAbove: Yq
      } = gq;
      const lq = [...qq.documentElement.classList].filter((qq => !iE.has(qq) && !fE.has(qq))),
        Oq = [...Eq.documentElement.classList].filter((qq => fE.has(qq))),
        mq = [nE, bE.hotbar, bE.hasShop, bE.hasBag];
      Yq && mq.push(bE.keysAbove), Eq.documentElement.className = [...lq, ...mq, ...Oq].join(" ")
    }
    const SE = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function pE(qq, Eq, gq, Yq, lq) {
      const Oq = (0, bq.D)(gq, Yq, "joystick"),
        mq = (0, YE.w)((0, YE.E)(gq, Yq, lq), Yq),
        xq = mq.classes.filter((qq => !ZE.has(qq))),
        Aq = Eq.documentElement;
      (0, YE.I)({
        ...mq,
        classes: xq
      }, {
        vars: Aq,
        safe: Aq,
        classes: Aq
      });
      const cq = (0, YE.y)(gq.hudLayouts[Yq].hudSafe, window.innerWidth, window.innerHeight, GE(), (0, YE.H)(Eq));
      Aq.style.setProperty("--preview-joystick-shift-left", `${cq[3]}px`), Aq.style.setProperty("--preview-joystick-shift-bottom", `${cq[2]}px`), Aq.style.setProperty("--preview-joystick-scale", String(Oq[2])), (0, hE.c)(Aq, Eq, gq, Yq);
      for (const uq of SE) Aq.style.setProperty(uq, qq.documentElement.style.getPropertyValue(uq) || "0px")
    }

    function GE() {
      return (0, YE.C)(uq.b.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function LE(qq) {
      return (0, YE.n)(GE(), (0, YE.H)(qq))
    }

    function JE(qq, Eq, gq) {
      const Yq = qq.documentElement.style,
        lq = (0, YE.A)(Eq),
        Oq = Yq.getPropertyValue(lq);
      try {
        return gq((qq => {
          Yq.setProperty(lq, String(qq))
        }))
      } finally {
        "" === Oq ? Yq.removeProperty(lq) : Yq.setProperty(lq, Oq)
      }
    }

    function kE(qq, Eq) {
      const [gq, Yq] = JE(qq, "hotbar", (Eq => {
        const gq = gq => {
          var Yq, lq;
          return Eq(gq), null !== (Yq = null === (lq = qq.querySelector(".HotBarGameItemsContainer")) || void 0 === lq ? void 0 : lq.getBoundingClientRect().width) && void 0 !== Yq ? Yq : 0
        };
        return [gq(1), gq(bq.k)]
      }));
      return gq <= 0 ? bq.k : Math.min(bq.k, Math.max(1, Math.floor(Yq / gq / Eq + 1e-6) * Eq))
    }
    const RE = 3,
      UE = .5,
      FE = qq => qq.right - qq.left;
    const sE = (qq, Eq) => Math.abs((0, EE.b)(qq).x - (0, EE.b)(Eq).x) + Math.abs((0, EE.b)(qq).y - (0, EE.b)(Eq).y) + Math.abs(FE(qq) - FE(Eq));

    function XE(qq, Eq, gq, Yq, lq) {
      let {
        canKeep: Oq = () => !0,
        passes: mq = RE,
        before: xq,
        keysAboveOf: Aq
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const cq = void 0 !== Aq && Aq(qq) !== Aq(Eq),
        uq = Eq.hudLayouts[gq].hudLocked.filter((qq => Oq(qq) && !(cq && "inventory" === qq))),
        Bq = new Set(uq);
      if (0 === Bq.size) return Eq;
      const Wq = [...fq].filter((Yq => !uq.includes(Yq) && (0, bq.D)(qq, gq, Yq).join() === (0, bq.D)(Eq, gq, Yq).join())),
        Nq = qq => {
          const Eq = (0, EE.D)(Wq.flatMap((Eq => qq[Eq] ? [qq[Eq]] : [])));
          return {
            ...qq,
            cluster: null !== Eq && void 0 !== Eq ? Eq : void 0
          }
        },
        aq = qq => {
          const Eq = lq(qq);
          return Eq && Nq(Eq)
        },
        Vq = xq ? Nq(xq) : aq(qq);
      let dq = Vq && aq(Eq);
      if (!Vq || !dq) return Eq;
      let jq = Eq;
      for (let Hq = 0; Hq < mq && Bq.size > 0; Hq++) {
        const qq = new Map;
        for (const Eq of Bq) {
          const lq = Vq[Eq],
            Oq = dq[Eq],
            mq = lq && Oq ? wE(Eq, (0, bq.D)(jq, gq, Eq), lq, Oq, Yq) : null;
          mq ? qq.set(Eq, mq) : Bq.delete(Eq)
        }
        if (0 === qq.size) break;
        let lq = jq;
        for (const [Eq, Yq] of qq) lq = (0, bq.hb)(lq, gq, Eq, Yq);
        const Oq = aq(lq);
        if (!Oq) return Eq;
        let mq = jq;
        for (const [Eq, Yq] of qq) {
          const qq = Oq[Eq];
          qq && sE(Vq[Eq], qq) < sE(Vq[Eq], dq[Eq]) - UE ? mq = (0, bq.hb)(mq, gq, Eq, Yq) : Bq.delete(Eq)
        }
        if (mq === jq) break;
        const xq = [...qq.keys()].every((qq => Bq.has(qq)));
        if (jq = mq, dq = xq ? Oq : aq(jq), !dq) return Eq
      }
      return lq(jq), jq
    }

    function wE(qq, Eq, gq, Yq, lq) {
      let [Oq, mq, xq] = Eq;
      const Aq = bq.w[qq],
        cq = {};
      Aq.scale && FE(Yq) > 0 && Math.abs(FE(gq) - FE(Yq)) > UE && (cq.scale = Math.max(bq.n, Math.min(bq.k, xq * FE(gq) / FE(Yq))));
      const uq = (0, EE.b)(gq).x - (0, EE.b)(Yq).x,
        Bq = (0, EE.b)(gq).y - (0, EE.b)(Yq).y;
      return Aq.move && (Math.abs(uq) > UE || Math.abs(Bq) > UE) && (cq.dx = Oq + uq / lq.width, cq.dy = mq + Bq / lq.height), void 0 === cq.scale && void 0 === cq.dx ? null : cq
    }
    let KE = 0;

    function CE() {
      return KE > 0
    }
    const IE = qq => 0 === qq.dx && 0 === qq.dy,
      eE = .001,
      DE = qq => Math.abs(qq.dx) >= 5e-4 || Math.abs(qq.dy) >= 5e-4 ? qq : {
        dx: qq.dx,
        dy: qq.dy < 0 ? -.001 : eE
      };

    function qg(qq) {
      let {
        preview: Eq,
        stageRef: gq,
        ringRef: Yq,
        centreLineRef: Oq,
        snapCentre: mq,
        ready: xq,
        measure: Aq,
        k: cq,
        viewport: uq,
        boxes: Bq,
        pieces: Wq,
        selected: Nq,
        insets: aq,
        layout: Vq,
        canMove: dq,
        onSelect: jq,
        onMove: Hq
      } = qq;
      const oq = (0, lq.useRef)(null),
        Pq = (0, lq.useCallback)((() => null !== oq.current), []),
        Qq = (qq, Eq) => {
          if (!Eq) return null;
          const gq = (0, EE.b)(qq.origin),
            Yq = (0, EE.b)(Eq),
            lq = (qq.to.dx - qq.from.dx) * uq.width,
            Oq = (qq.to.dy - qq.from.dy) * uq.height,
            mq = Eq.right - Eq.left,
            xq = Eq.bottom - Eq.top;
          return {
            skew: {
              x: Yq.x - gq.x - lq,
              y: Yq.y - gq.y - Oq
            },
            box: {
              left: gq.x - mq / 2,
              top: gq.y - xq / 2,
              right: gq.x + mq / 2,
              bottom: gq.y + xq / 2
            }
          }
        },
        yq = (qq, gq) => {
          var lq;
          const mq = oq.current;
          if (!mq || mq.pointerId !== qq.pointerId) return;
          oq.current = null, null === (lq = Oq.current) || void 0 === lq || lq.classList.remove("Shown", "Snapped");
          const xq = Yq.current;
          if (xq && null !== mq.ringStyle && xq.setAttribute("style", mq.ringStyle), gq && mq.moved) {
            const qq = IE(mq.to) ? null : Aq(mq.id),
              Eq = qq ? (0, EE.A)(qq, (0, EE.x)(uq.width, uq.height, aq)) : {
                x: 0,
                y: 0
              },
              gq = {
                dx: mq.to.dx + Eq.x / uq.width,
                dy: mq.to.dy + Eq.y / uq.height
              },
              Yq = IE(mq.to) ? gq : DE(gq);
            Hq(mq.id, Yq.dx, Yq.dy)
          } else Eq(mq.id, null), gq && mq.tapPick && jq(mq.tapPick)
        };
      return {
        busy: Pq,
        handlers: {
          onPointerDown: qq => {
            var Eq;
            if (!xq || oq.current || !qq.target.closest(".HudPreviewHandle")) return;
            const Yq = gq.current.getBoundingClientRect(),
              lq = {
                x: (qq.clientX - Yq.left) / cq,
                y: (qq.clientY - Yq.top) / cq
              },
              Oq = (0, EE.t)(lq, Wq, 40 / cq),
              mq = "cluster" === Nq && void 0 !== Bq.cluster && null !== (0, EE.t)(lq, [{
                id: "cluster",
                box: Bq.cluster
              }], 40 / cq),
              Aq = "menu" === Nq && void 0 !== Bq.menu && (0, EE.d)(Bq.menu, lq) && ("menu" === Oq || null !== Oq && (0, gE.z)(Oq, Vq.hudElements[Oq])),
              uq = mq ? "cluster" : Aq ? "menu" : null,
              aq = null !== uq,
              Hq = null !== uq && void 0 !== uq ? uq : Oq;
            if (!Hq) return;
            if (function(qq) {
                KE++;
                const Eq = gq => {
                  gq.pointerId === qq && (KE = Math.max(0, KE - 1), window.removeEventListener("pointerup", Eq, !0), window.removeEventListener("pointercancel", Eq, !0))
                };
                window.addEventListener("pointerup", Eq, !0), window.addEventListener("pointercancel", Eq, !0)
              }(qq.pointerId), !dq(Hq)) return void jq(aq && Oq ? Oq : Hq);
            jq(Hq);
            const [Pq, Qq] = null !== (Eq = Vq.hudElements[Hq]) && void 0 !== Eq ? Eq : [0, 0], yq = {
              dx: Pq,
              dy: Qq
            }, tq = {
              skew: {
                x: 0,
                y: 0
              },
              box: Bq[Hq]
            };
            oq.current = {
              id: Hq,
              pointerId: qq.pointerId,
              startX: qq.clientX,
              startY: qq.clientY,
              origin: Bq[Hq],
              from: yq,
              to: yq,
              moved: !1,
              home: IE(yq) ? {
                centre: (0, EE.b)(Bq[Hq]),
                anchor: tq
              } : null,
              away: IE(yq) ? null : tq,
              anchor: tq,
              ringStyle: null,
              tapPick: aq ? Oq : null
            }, qq.currentTarget.setPointerCapture(qq.pointerId)
          },
          onPointerMove: qq => {
            const gq = oq.current;
            if (!gq || gq.pointerId !== qq.pointerId) return;
            const lq = qq.clientX - gq.startX,
              xq = qq.clientY - gq.startY;
            if (!gq.moved && Math.hypot(lq, xq) < 5) return;
            const Bq = !gq.moved;
            var Wq, Nq;
            (gq.moved = !0, Bq) && (gq.ringStyle = null !== (Wq = null === (Nq = Yq.current) || void 0 === Nq ? void 0 : Nq.getAttribute("style")) && void 0 !== Wq ? Wq : null);
            const Vq = (0, EE.x)(uq.width, uq.height, aq);
            if (!gq.home) {
              var dq;
              gq.to = {
                dx: 0,
                dy: 0
              }, Eq(gq.id, gq.to);
              const qq = Aq(gq.id),
                Yq = null !== (dq = Qq(gq, qq)) && void 0 !== dq ? dq : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: gq.origin
                },
                lq = (0, EE.b)(gq.origin);
              gq.home = {
                centre: qq ? (0, EE.b)(qq) : {
                  x: lq.x - gq.from.dx * uq.width,
                  y: lq.y - gq.from.dy * uq.height
                },
                anchor: Yq
              }
            }
            const jq = gq.home;
            let Hq = !1;
            const Pq = qq => {
                Hq = !1;
                let Yq = (0, EE.i)(qq.box, lq / cq, xq / cq, Vq);
                const Oq = uq.width / 2;
                if (mq && Math.abs((0, EE.b)(gq.origin).x + Yq.x - Oq) <= 8 / cq) {
                  const Eq = Oq - (0, EE.b)(gq.origin).x,
                    lq = (0, EE.i)(qq.box, Eq, Yq.y, Vq);
                  Hq = Math.abs(lq.x - Eq) < .01, Hq && (Yq = lq)
                }
                const Aq = (0, EE.q)(gq.from, Yq.x - qq.skew.x, Yq.y - qq.skew.y, uq.width, uq.height);
                gq.to = DE(Aq), gq.anchor = qq, Eq(gq.id, gq.to)
              },
              yq = (0, EE.i)(jq.anchor.box, lq / cq, xq / cq, Vq),
              tq = Oq.current,
              rq = (0, EE.b)(gq.origin),
              vq = ((0, bq.M)(gq.id) ? 20 : 6) / cq;
            if (Math.abs(rq.x + yq.x - jq.centre.x) <= vq && Math.abs(rq.y + yq.y - jq.centre.y) <= vq) gq.to = {
              dx: 0,
              dy: 0
            }, gq.anchor = jq.anchor, Hq = mq && Math.abs(jq.centre.x - uq.width / 2) < 1, Eq(gq.id, gq.to);
            else if (gq.away) Pq(gq.away);
            else {
              var hq;
              Pq(jq.anchor), gq.away = null !== (hq = Qq(gq, Aq(gq.id))) && void 0 !== hq ? hq : jq.anchor, Pq(gq.away)
            }
            null === tq || void 0 === tq || tq.classList.add("Shown"), null === tq || void 0 === tq || tq.classList.toggle("Snapped", Hq), (qq => {
              const Eq = Yq.current;
              if (Eq) {
                const {
                  skew: gq,
                  box: Yq
                } = qq.anchor;
                Eq.style.left = Yq.left * cq + "px", Eq.style.top = Yq.top * cq + "px", Eq.style.width = (Yq.right - Yq.left) * cq + "px", Eq.style.height = (Yq.bottom - Yq.top) * cq + "px", Eq.style.translate = `${((qq.to.dx-qq.from.dx)*uq.width+gq.x)*cq}px ${((qq.to.dy-qq.from.dy)*uq.height+gq.y)*cq}px`
              }
            })(gq)
          },
          onPointerUp: qq => {
            yq(qq, !0)
          },
          onPointerCancel: qq => {
            yq(qq, !1)
          }
        }
      }
    }

    function Eg(qq, Eq) {
      return Object.keys(qq).filter((qq => qq !== Eq)).map((Eq => qq[Eq]))
    }

    function gg(qq) {
      const Eq = [],
        gq = Eq => (0, bq.M)(Eq) && !qq.documentElement.classList.contains((0, YE.x)(Eq));
      for (const mq of qq.querySelectorAll(`[${pq}]`)) {
        const qq = gq(mq.getAttribute(pq)) ? mq.querySelector(".ScaleOnHover") : null,
          Yq = (null !== qq && void 0 !== qq ? qq : mq).getBoundingClientRect();
        (Yq.width > 0 || Yq.height > 0) && Eq.push({
          id: mq.getAttribute(pq),
          box: {
            left: Yq.left,
            top: Yq.top,
            right: Yq.right,
            bottom: Yq.bottom
          }
        })
      }
      const Yq = qq => (0, EE.D)(Eq.filter((Eq => {
          let {
            id: gq
          } = Eq;
          return qq(gq)
        })).map((qq => {
          let {
            box: Eq
          } = qq;
          return Eq
        }))),
        lq = {};
      for (const mq of new Set(Eq.map((qq => qq.id)))) lq[mq] = Yq((qq => qq === mq));
      const Oq = Yq((qq => fq.has(qq)));
      return Oq && (lq.cluster = Oq), {
        boxes: lq,
        pieces: Eq
      }
    }

    function Yg(qq, Eq, gq) {
      const Yq = Eq.right - Eq.left,
        lq = Eq.bottom - Eq.top;
      return JE(qq, "cluster", (Eq => {
        const Oq = gq => {
            Eq(gq);
            const Yq = [...qq.querySelectorAll(`[${pq}]:not(.HudPreviewGhost)`)].filter((qq => fq.has(qq.getAttribute(pq)))).map((qq => {
                const Eq = qq.getBoundingClientRect();
                return {
                  left: Eq.left,
                  top: Eq.top,
                  right: Eq.right,
                  bottom: Eq.bottom
                }
              })),
              lq = (0, EE.D)(Yq);
            return lq ? {
              w: lq.right - lq.left,
              h: lq.bottom - lq.top
            } : null
          },
          mq = qq => !qq || qq.w <= Yq && qq.h <= lq,
          xq = Oq(1),
          Aq = Oq(bq.k);
        if (!xq || mq(Aq)) return bq.k;
        const cq = (qq, Eq, gq) => Eq > qq ? 1 + (gq - qq) * (bq.k - 1) / (Eq - qq) : bq.k;
        let uq = Math.floor(Math.min(bq.k, cq(xq.w, Aq.w, Yq), cq(xq.h, Aq.h, lq)) / gq + 1e-6) * gq;
        for (; uq > 1 && !mq(Oq(uq));) uq = Math.round(100 * (uq - gq)) / 100;
        return Math.max(1, uq)
      }))
    }

    function lg(qq) {
      zE(document, qq, {
        keysAbove: !1
      });
      const Eq = parseFloat(getComputedStyle(qq.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        gq = Number.isFinite(Eq) && Eq < 0;
      return zE(document, qq, {
        keysAbove: gq
      }), gq
    }

    function Og(qq, Eq) {
      let {
        layout: gq,
        orientation: Yq,
        viewport: Oq,
        replicaKey: mq,
        joystickFixed: xq,
        busy: Aq
      } = Eq;
      const [cq, uq] = (0, lq.useState)(null), [Bq, Wq] = (0, lq.useState)({
        boxes: {},
        pieces: []
      }), [Nq, aq] = (0, lq.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [Vq, dq] = (0, lq.useState)(!1), [jq, Hq] = (0, lq.useState)(!1), [oq, Pq] = (0, lq.useState)(!1), Qq = (0, lq.useCallback)((qq => {
        Hq(qq), qq && Pq(!0)
      }), []), yq = gq.hudLayouts[Yq].hudSafe;
      (0, lq.useLayoutEffect)((() => {
        const Eq = qq.current.contentDocument;
        Eq.open(), Eq.write("<!DOCTYPE html><html><head></head><body></body></html>"), Eq.close(), uq(Eq)
      }), [qq]);
      const tq = (0, lq.useCallback)((() => {
          cq && ((0, gE.B)(cq), Wq(gg(cq)), aq(function(qq, Eq) {
            const gq = LE(qq),
              [Yq, lq, Oq, mq] = Eq ? (0, YE.p)(Eq, window.innerWidth, window.innerHeight, gq) : gq;
            return {
              top: Yq,
              right: lq,
              bottom: Oq,
              left: mq
            }
          }(cq, yq)))
        }), [cq, yq]),
        rq = (0, lq.useCallback)((() => {
          cq && dq(lg(cq))
        }), [cq]),
        vq = (0, lq.useRef)((() => {}));
      return vq.current = () => {
        rq(), Aq() || tq()
      }, (0, lq.useLayoutEffect)((() => {
        if (cq) return TE(document, cq, (() => {
          vq.current()
        }), Qq)
      }), [cq, Qq]), (0, lq.useLayoutEffect)(rq, [rq, Oq]), (0, lq.useLayoutEffect)((() => {
        cq && (zE(document, cq, {
          keysAbove: Vq
        }), pE(document, cq, gq, Yq, xq), rq(), tq())
      }), [cq, gq, Yq, Vq, mq, xq, Oq, tq, rq]), (0, lq.useEffect)((() => {
        var qq;
        if (!cq) return;
        const Eq = new ResizeObserver((() => {
          Aq() || tq()
        }));
        for (const gq of cq.querySelectorAll(`[${pq}]`)) Eq.observe(gq);
        return null === (qq = cq.fonts) || void 0 === qq || qq.ready.then(tq), () => {
          Eq.disconnect()
        }
      }), [cq, tq, Aq, mq]), {
        doc: cq,
        boxes: Bq.boxes,
        pieces: Bq.pieces,
        insets: Nq,
        keysAbove: Vq,
        ready: jq,
        settled: oq
      }
    }
    const mg = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      xg = (qq, Eq, gq) => {
        const Yq = qq => (0, gE.z)(qq, gq.hudElements[qq]);
        return "cluster" === qq && fq.has(Eq) || "cluster" === Eq && fq.has(qq) || "menu" === qq && Yq(Eq) || "menu" === Eq && Yq(qq) || mg.some((Yq => {
          let [lq, Oq] = Yq;
          const mq = gq.hudElements.hotbar,
            xq = "inventory" === Oq && gq.hudLocked.includes(Oq) && void 0 !== mq && !(0, bq.L)(mq);
          return (qq === lq && Eq === Oq || qq === Oq && Eq === lq) && !xq
        }))
      };
    const Ag = ["Above", "Below", "Left", "Right"];

    function cg(qq, Eq, gq, Yq, lq) {
      const Oq = gq[qq],
        mq = (Oq.left + Oq.right) / 2,
        xq = (Oq.top + Oq.bottom) / 2,
        Aq = (7.5 * Eq.length + 14) / Yq,
        cq = 18 / Yq,
        uq = {
          Above: {
            left: mq - Aq / 2,
            top: Oq.top - cq,
            right: mq + Aq / 2,
            bottom: Oq.top
          },
          Below: {
            left: mq - Aq / 2,
            top: Oq.bottom,
            right: mq + Aq / 2,
            bottom: Oq.bottom + cq
          },
          Left: {
            left: Oq.left - Aq,
            top: xq - cq / 2,
            right: Oq.left,
            bottom: xq + cq / 2
          },
          Right: {
            left: Oq.right,
            top: xq - cq / 2,
            right: Oq.right + Aq,
            bottom: xq + cq / 2
          }
        },
        Bq = Eg(gq, qq),
        Wq = {
          left: 0,
          top: 0,
          right: lq.width,
          bottom: lq.height
        };
      return Ag[(0, EE.n)(Ag.map((qq => uq[qq])), Bq, {
        bounds: Wq
      })]
    }

    function ug() {
      const [qq, Eq] = (0, Dq.b)();
      return (0, lq.useMemo)((() => ({
        width: qq,
        height: Eq
      })), [qq, Eq])
    }

    function Bg(qq) {
      var Eq;
      const {
        layout: gq,
        orientation: Oq,
        selected: mq,
        onSelect: xq,
        onMove: cq,
        canMove: uq,
        actionButtons: Bq,
        joystickFixed: Wq,
        presence: Nq,
        keyNames: Vq,
        maxHeight: dq,
        fill: jq = !1,
        apiRef: Hq
      } = qq, {
        t: oq
      } = (0, Yq.v)(), Pq = ug(), yq = (null !== (Eq = (0, aq.h)("maxAuraLevel")) && void 0 !== Eq ? Eq : 0) > 0, tq = gq.hudLayouts[Oq], rq = (0, lq.useRef)(null), vq = (0, lq.useRef)(null), nq = (0, lq.useRef)(null), iq = (0, lq.useRef)(null), Zq = (0, lq.useRef)(null), Mq = (0, lq.useRef)(null), Tq = (0, qE.e)(rq).width, zq = jq ? 1 : Tq > 0 ? (0, EE.v)(Tq, Pq.width, Pq.height, dq) : 0, Sq = (0, lq.useRef)((() => !1)), pq = (0, lq.useCallback)((() => Sq.current()), []), {
        doc: Lq,
        boxes: Jq,
        pieces: kq,
        insets: Rq,
        keysAbove: Uq,
        ready: Fq,
        settled: sq
      } = Og(nq, {
        layout: gq,
        orientation: Oq,
        viewport: Pq,
        replicaKey: `${Bq}:${Wq}:${yq}`,
        joystickFixed: Wq,
        busy: pq
      }), Xq = (0, lq.useCallback)((qq => {
        Lq && pE(document, Lq, qq, Oq, Wq)
      }), [Lq, Oq, Wq]), wq = (0, lq.useCallback)((qq => Lq && sq ? (Xq(qq), lg(Lq), function(qq) {
        let {
          boxes: Eq,
          pieces: gq
        } = qq;
        const Yq = gq.find((qq => "inventory" === qq.id));
        if (!Yq || !Eq.inventory) return Eq;
        const lq = (0, EE.b)(Eq.inventory),
          Oq = FE(Yq.box) / 2,
          mq = (Yq.box.bottom - Yq.box.top) / 2;
        return {
          ...Eq,
          inventory: {
            left: lq.x - Oq,
            top: lq.y - mq,
            right: lq.x + Oq,
            bottom: lq.y + mq
          }
        }
      }(gg(Lq))) : null), [Lq, sq, Xq]), Kq = (0, lq.useCallback)((qq => !!Lq && (Xq(qq), lg(Lq))), [Lq, Xq]), Cq = (0, lq.useRef)(null), eq = (0, lq.useRef)(null), Dq = (0, lq.useRef)(gq);
      Dq.current = gq;
      const lE = (0, lq.useCallback)((() => {
        null !== Cq.current && (cancelAnimationFrame(Cq.current), Cq.current = null)
      }), []);
      (0, lq.useEffect)((() => lE), [gq, lE]);
      const {
        lockable: OE
      } = qq, mE = (0, lq.useCallback)((qq => {
        if (Xq(qq), !sq || 0 === gq.hudLayouts[Oq].hudLocked.length) return;
        const Eq = gq;
        lE(), Cq.current = requestAnimationFrame((() => {
          var gq;
          if (Cq.current = null, Dq.current !== Eq) return;
          const Yq = (null === (gq = eq.current) || void 0 === gq ? void 0 : gq.from) === Eq ? eq.current.boxes : wq(Eq);
          Yq && (eq.current = {
            from: Eq,
            boxes: Yq
          }), Xq(Yq ? XE(Eq, qq, Oq, Pq, wq, {
            canKeep: OE,
            passes: 1,
            before: Yq,
            keysAboveOf: Kq
          }) : qq)
        }))
      }), [Xq, sq, gq, Oq, Pq, wq, Kq, OE, lE]), xE = qg({
        preview: (qq, Eq) => {
          Eq ? mE((0, bq.hb)(gq, Oq, qq, Eq)) : (lE(), Xq(gq))
        },
        stageRef: vq,
        ringRef: iq,
        centreLineRef: Zq,
        snapCentre: gq.hudSnapCentre,
        ready: sq,
        measure: qq => {
          var Eq;
          return Lq && Fq && null !== (Eq = gg(Lq).boxes[qq]) && void 0 !== Eq ? Eq : null
        },
        k: zq,
        viewport: Pq,
        boxes: Jq,
        pieces: kq,
        selected: mq,
        insets: Rq,
        layout: tq,
        canMove: uq,
        onSelect: xq,
        onMove: (qq, Eq, gq) => {
          lE(), cq(qq, Eq, gq)
        }
      });
      (0, lq.useLayoutEffect)((() => {
        Sq.current = xE.busy
      }), [xE.busy]);
      const AE = (0, lq.useRef)([]),
        cE = (0, lq.useRef)(tq.hudElements);
      (0, lq.useEffect)((() => {
        for (const lq of Object.keys(tq.hudElements)) {
          var qq, Eq, gq, Yq;
          (null !== (qq = null === (Eq = tq.hudElements[lq]) || void 0 === Eq ? void 0 : Eq[2]) && void 0 !== qq ? qq : 1) > (null !== (gq = null === (Yq = cE.current[lq]) || void 0 === Yq ? void 0 : Yq[2]) && void 0 !== gq ? gq : 1) && uq(lq) && !(0, gE.z)(lq, tq.hudElements[lq]) && AE.current.push(lq)
        }
        cE.current = tq.hudElements
      }), [tq.hudElements, uq]), (0, lq.useEffect)((() => {
        if (!Fq) return;
        const qq = AE.current.shift(),
          Eq = qq && Jq[qq];
        if (!qq || !Eq || xE.busy()) return;
        const gq = (0, EE.A)(Eq, (0, EE.x)(Pq.width, Pq.height, Rq));
        if (0 !== gq.x || 0 !== gq.y) {
          var Yq;
          const [Eq, lq] = null !== (Yq = tq.hudElements[qq]) && void 0 !== Yq ? Yq : [0, 0];
          cq(qq, Eq + gq.x / Pq.width, lq + gq.y / Pq.height)
        }
      }), [Jq, Fq]), (0, lq.useImperativeHandle)(Hq, (() => ({
        setScale: (qq, Eq) => {
          mE((0, bq.hb)(gq, Oq, qq, {
            scale: Eq
          }))
        },
        setOpacity: qq => {
          Xq({
            ...gq,
            hudKeyOpacity: qq
          })
        },
        keepLocks: (qq, Eq) => (lE(), XE(qq, Eq, Oq, Pq, wq, {
          canKeep: OE,
          keysAboveOf: Kq
        })),
        setSafe: qq => {
          mE((0, bq.kb)(gq, Oq, qq)), Mq.current && (Mq.current.style.inset = (0, YE.p)(qq, Pq.width, Pq.height, LE(null !== Lq && void 0 !== Lq ? Lq : document)).map((qq => qq * zq + "px")).join(" "))
        }
      })), [Xq, mE, wq, Kq, lE, OE, Lq, gq, Oq, Pq, zq]);
      const uE = new Set(Object.keys(tq.hudElements).filter((qq => (0, bq.v)(tq.hudElements, qq)))),
        BE = mq ? Jq[mq] : void 0,
        WE = mq ? Gq(mq, Bq, oq, Vq) : "",
        NE = (0, vE.i)(Pq.width, Pq.height),
        aE = mq ? function(qq, Eq, gq, Yq) {
          const lq = qq => (0, bq.v)(gq.hudElements, qq) || (0, gE.y)(qq, gq, Yq);
          if (lq(qq)) return [];
          const Oq = Eq.filter((Eq => {
              let {
                id: gq
              } = Eq;
              return "cluster" === qq ? fq.has(gq) : gq === qq
            })),
            mq = new Set;
          for (const xq of Eq) xq.id === qq || mq.has(xq.id) || xg(qq, xq.id, gq) || lq(xq.id) || void 0 === gq.hudElements[qq] && void 0 === gq.hudElements[xq.id] || Oq.some((qq => {
            let {
              id: Eq,
              box: gq
            } = qq;
            return Eq !== xq.id && (0, EE.e)(gq, xq.box, 2)
          })) && mq.add(xq.id);
          return [...mq]
        }(mq, kq, tq, NE) : [],
        VE = new Set((0, gE.x)(tq.hudElements)),
        dE = (0, gE.K)(tq, (0, gE.G)(Nq.rowIcons)).state,
        jE = aE.join(),
        HE = (0, lq.useRef)(qq.onReady);
      HE.current = qq.onReady, (0, lq.useEffect)((() => {
        var qq;
        null === (qq = HE.current) || void 0 === qq || qq.call(HE, sq)
      }), [sq]);
      const oE = (0, lq.useRef)(qq.onMeasured);
      (0, lq.useLayoutEffect)((() => {
        oE.current = qq.onMeasured
      })), (0, lq.useEffect)((() => {
        var qq;
        const Eq = Lq ? {
          hotbar: kE(Lq, tE),
          cluster: Yg(Lq, (0, EE.x)(Pq.width, Pq.height, Rq), tE)
        } : {};
        null === (qq = oE.current) || void 0 === qq || qq.call(oE, Jq, jE ? jE.split(",") : [], Eq)
      }), [Jq, jE, Lq, Pq, Rq]);
      const PE = qq => ({
        left: qq.left * zq,
        top: qq.top * zq,
        width: (qq.right - qq.left) * zq,
        height: (qq.bottom - qq.top) * zq
      });
      return (0, Qq.jsx)("div", {
        ref: rq,
        className: Aq()("HudPreviewBox", {
          Fill: jq
        }),
        style: {
          height: Pq.height * zq
        },
        children: (0, Qq.jsxs)("div", {
          ref: vq,
          className: "HudPreviewStage",
          style: {
            width: Pq.width * zq,
            height: Pq.height * zq
          },
          children: [(0, Qq.jsx)("iframe", {
            ref: nq,
            className: "HudPreviewFrame",
            title: oq("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: Pq.width,
              height: Pq.height,
              transform: `scale(${zq})`
            }
          }), Lq && (0, Iq.createPortal)((0, Qq.jsx)(QE, {
            presence: Nq,
            portraitPhone: NE,
            hidden: uE,
            actionButtons: Bq,
            joystickFixed: Wq,
            keysAbove: Uq,
            auraBar: yq,
            trayState: dE,
            moved: VE
          }), Lq.body), (0, Qq.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...xE.handlers,
            children: [(0, Qq.jsx)("div", {
              ref: Mq,
              className: "HudPreviewSafeZone",
              style: {
                top: Rq.top * zq,
                right: Rq.right * zq,
                bottom: Rq.bottom * zq,
                left: Rq.left * zq
              }
            }), kq.map(((qq, Eq) => {
              let {
                id: gq,
                box: Yq
              } = qq;
              return (0, Qq.jsx)("div", {
                className: "HudPreviewHandle",
                style: PE((0, EE.m)(Yq, 40 / zq))
              }, `${gq}:${Eq}`)
            })), tq.hudLocked.map((qq => {
              const Eq = Jq[qq];
              return Eq && (0, Qq.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: Eq.right * zq,
                  top: Eq.top * zq
                },
                children: (0, Qq.jsx)(hq.d, {
                  name: "lock"
                })
              }, qq)
            })), (0, Qq.jsx)("div", {
              ref: Zq,
              className: "HudPreviewCentreLine",
              style: {
                left: Pq.width / 2 * zq
              }
            }), mq && BE && (0, Qq.jsx)("div", {
              ref: iq,
              className: Aq()("HudPreviewRing", {
                Fixed: !uq(mq),
                Overlap: aE.length > 0
              }),
              style: PE(BE),
              children: (0, Qq.jsx)("span", {
                className: Aq()("HudPreviewRingLabel", cg(mq, WE, Jq, zq, Pq)),
                children: WE
              })
            })]
          })]
        })
      })
    }

    function Wg(qq, Eq) {
      (0, lq.useEffect)((() => {
        var gq;
        null === (gq = qq.current) || void 0 === gq || gq.toggleAttribute("inert", Eq)
      }), [qq, Eq])
    }
    const Ng = "hudFullScreen";

    function ag(qq) {
      let {
        onScale: Eq,
        onHidden: gq,
        onReset: Oq,
        locked: mq,
        lockable: xq,
        onLocked: Aq,
        onClose: uq,
        ...Bq
      } = qq;
      const {
        t: Wq
      } = (0, Yq.v)(), Nq = (0, lq.useRef)(null);
      (0, eq.w)("popup", Nq, uq),
      function(qq) {
        const Eq = (0, lq.useRef)(qq);
        Eq.current = qq, (0, lq.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Ng]: !0
          }, "");
          let qq = !1;
          const gq = () => {
            qq = !0, Eq.current()
          };
          return window.addEventListener("popstate", gq), () => {
            var Eq;
            window.removeEventListener("popstate", gq), !qq && null !== (Eq = window.history.state) && void 0 !== Eq && Eq[Ng] && window.history.back()
          }
        }), [])
      }(uq), (0, lq.useEffect)((() => {
        function qq(qq) {
          "Escape" === qq.key && (qq.stopPropagation(), uq())
        }
        return window.addEventListener("keydown", qq, !0), () => {
          window.removeEventListener("keydown", qq, !0)
        }
      }), [uq]);
      const {
        selected: aq
      } = Bq, Vq = (0, lq.useRef)(null), dq = (0, lq.useRef)(null), [jq, Hq] = (0, lq.useState)(!1);
      Wg(dq, !jq);
      const [oq, Pq] = (0, lq.useState)(null), [yq, tq] = (0, lq.useState)([]), [rq, vq] = yE(), hq = (0, lq.useRef)(Bq.selected);
      hq.current = Bq.selected;
      const nq = (0, lq.useRef)({}),
        bq = (0, lq.useCallback)((() => {
          const qq = Vq.current;
          qq && Pq(function(qq, Eq, gq) {
            var Yq;
            const {
              innerWidth: lq,
              innerHeight: Oq
            } = window, mq = qq.offsetWidth, xq = qq.offsetHeight, Aq = Math.max(GE()[0], 6), cq = [];
            for (const Wq of [Aq, .2 * Oq, .5 * Oq - xq / 2, .33 * Oq])
              for (const qq of [.5, .3, .7]) cq.push({
                left: Math.max(0, Math.min(lq - mq - 6, Math.max(6, lq * qq - mq / 2))),
                top: Wq
              });
            const uq = cq.map((qq => ({
                left: qq.left - 6,
                top: qq.top - 6,
                right: qq.left + mq + 6,
                bottom: qq.top + xq + 6
              }))),
              Bq = Eg(Eq, gq);
            return cq[(0, EE.n)(uq, Bq, {
              avoid: gq && null !== (Yq = Eq[gq]) && void 0 !== Yq ? Yq : null
            })]
          }(qq, nq.current, hq.current))
        }), []),
        iq = (0, lq.useCallback)(((qq, Eq, gq) => {
          tq(Eq), vq(gq), nq.current = qq, bq()
        }), [bq, vq]);
      return (0, lq.useLayoutEffect)(bq, [Bq.selected, bq]), (0, Iq.createPortal)((0, Qq.jsxs)("div", {
        ref: Nq,
        className: "HudFullScreenEditor",
        children: [(0, Qq.jsx)(Bg, {
          ...Bq,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: iq,
          onReady: Hq,
          lockable: xq
        }), (0, Qq.jsxs)("div", {
          ref: Vq,
          className: "HudFullScreenToolbar",
          style: null === oq ? void 0 : {
            left: oq.left,
            top: oq.top,
            transform: "none"
          },
          children: [(0, Qq.jsx)("div", {
            ref: dq,
            className: "HudFullScreenControls",
            children: (0, Qq.jsx)(rE, {
              selected: aq,
              layout: Bq.layout.hudLayouts[Bq.orientation],
              actionButtons: Bq.actionButtons,
              keyNames: Bq.keyNames,
              overlaps: yq,
              scaleCaps: rq,
              onScale: Eq,
              onHidden: gq,
              onReset: Oq,
              locked: mq,
              lockable: xq,
              onLocked: Aq,
              joystickFixed: Bq.joystickFixed
            })
          }), (0, Qq.jsx)(cq.g, {
            className: "HudFullScreenDone",
            onClick: uq,
            padDefaultFocus: !0,
            children: Wq("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const Vg = qq => `${Math.round(100*qq)}%`;

    function dg(qq) {
      let {
        info: Eq,
        tuple: gq,
        props: lq
      } = qq;
      const {
        t: Oq
      } = (0, Yq.v)();
      return (0, Qq.jsx)(Nq.h, {
        name: Oq("hudLayout:size"),
        min: bq.n,
        max: bq.k,
        step: tE,
        initValue: gq[2],
        disabled: lq.locked.has(Eq.id),
        selectableMax: lq.scaleCaps[Eq.id],
        cappedNote: Oq("hudLayout:sizeCapped"),
        format: Vg,
        onChange: qq => {
          lq.onScalePreview(Eq.id, qq)
        },
        onChangeComplete: qq => {
          lq.onScale(Eq.id, qq)
        }
      })
    }

    function jg(qq) {
      const {
        t: Eq
      } = (0, Yq.v)(), {
        present: gq,
        elements: Oq,
        selected: mq,
        onSelect: xq,
        onHidden: cq,
        onReset: uq,
        note: Bq,
        actionButtons: Wq,
        keyNames: Nq,
        sizeBesidePreview: aq,
        locked: Vq,
        lockable: dq,
        onLocked: jq
      } = qq, {
        rowIconsOpen: Hq,
        onRowIconsOpen: oq
      } = qq, Pq = (0, lq.useRef)(null), yq = null !== mq && (Hq || !(0, bq.M)(mq));
      return (0, lq.useEffect)((() => {
        var qq;
        const Eq = mq ? null === (qq = Pq.current) || void 0 === qq ? void 0 : qq.querySelector(`[data-hud-row="${mq}"]`) : null;
        if (!Eq) return;
        const gq = Eq.closest(".SettingsMenuRight"),
          Yq = performance.now();
        let lq = null;
        const Oq = () => {
            clearInterval(Aq), null === gq || void 0 === gq || gq.removeEventListener("scroll", xq)
          },
          xq = () => {
            CE() || Oq()
          },
          Aq = setInterval((() => {
            const qq = performance.now();
            qq - Yq > 1500 ? Oq() : CE() ? lq = null : null === lq ? lq = qq : qq - lq >= 150 && (Oq(), function(qq) {
              var Eq;
              const gq = qq.closest(".SettingsMenuRight"),
                Yq = null === (Eq = qq.closest(".HudLayoutSettings")) || void 0 === Eq ? void 0 : Eq.querySelector(".HudLayoutPreviewBox");
              if (!gq || !Yq) return;
              const lq = Yq.getBoundingClientRect().bottom + 8,
                Oq = gq.getBoundingClientRect().bottom - 8,
                mq = qq.getBoundingClientRect();
              mq.top < lq ? gq.scrollBy({
                top: mq.top - lq,
                behavior: "smooth"
              }) : mq.bottom > Oq && gq.scrollBy({
                top: Math.min(mq.bottom - Oq, mq.top - lq),
                behavior: "smooth"
              })
            }(Eq))
          }), 50);
        return null === gq || void 0 === gq || gq.addEventListener("scroll", xq, {
          passive: !0
        }), Oq
      }), [mq, yq]), (0, Qq.jsx)("div", {
        ref: Pq,
        className: "SettingBoxGroup HudElementList",
        children: zq.filter((qq => gq.has(qq.id) && (Hq || !(0, bq.M)(qq.id)))).map((gq => {
          const Yq = ((qq, Eq) => {
              var gq;
              return null !== (gq = qq[Eq]) && void 0 !== gq ? gq : bq.q
            })(Oq, gq.id),
            lq = (0, bq.v)(Oq, gq.id),
            Pq = gq.id === mq,
            yq = gq.scale && !aq,
            tq = Bq(gq.id, Pq);
          return (0, Qq.jsxs)("div", {
            "data-hud-row": gq.id,
            className: Aq()("SettingBox HudElementRow", {
              Open: Pq,
              Hidden: lq,
              Child: void 0 !== gq.parent
            }),
            children: [(0, Qq.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, Qq.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": yq ? Pq : void 0,
                onClick: () => {
                  xq(gq.id)
                },
                children: [Gq(gq.id, Wq, Eq, Nq), gq.scale && 1 !== Yq[2] && !(Pq && yq) && (0, Qq.jsx)("span", {
                  className: "HudElementRowSize",
                  children: Vg(Yq[2])
                }), yq && (0, Qq.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, Qq.jsx)(Uq, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: gq.id,
                actionButtons: Wq,
                keyNames: Nq,
                locked: Vq.has(gq.id),
                lockable: dq(gq.id),
                onLocked: jq
              }), "menu" === gq.id && (0, Qq.jsx)(Fq, {
                className: "HudElementRowIcon",
                open: Hq,
                name: Gq(gq.id, Wq, Eq, Nq),
                onToggle: oq
              }), "menu" !== gq.id && (0, Qq.jsx)(kq, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: gq.id,
                elements: Oq,
                actionButtons: Wq,
                keyNames: Nq,
                onHidden: cq
              }), (0, Qq.jsx)(Rq, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: Vq.has(gq.id),
                id: gq.id,
                elements: Oq,
                actionButtons: Wq,
                keyNames: Nq,
                onReset: uq
              })]
            }), Pq && yq && (0, Qq.jsx)(dg, {
              info: gq,
              tuple: Yq,
              props: qq
            }), tq && (0, Qq.jsx)("div", {
              className: "HudElementNote",
              children: tq
            })]
          }, gq.id)
        }))
      })
    }

    function Hg(qq) {
      let {
        preview: Eq,
        quick: gq,
        onFullScreen: Oq,
        resting: mq,
        onSidePanel: xq
      } = qq;
      const {
        t: Aq
      } = (0, Yq.v)(), uq = ug(), Bq = (0, lq.useRef)(null), {
        width: Wq
      } = (0, qE.e)(Bq), Nq = Math.floor(uq.width * Math.min(1, Eq.maxHeight / uq.height)), aq = Wq - Nq - 12, Vq = aq >= 130, dq = Wq > 0;
      (0, lq.useEffect)((() => {
        dq && xq(Vq)
      }), [dq, Vq, xq]);
      const jq = (0, EE.v)(Vq ? Nq : Wq, uq.width, uq.height, Eq.maxHeight),
        Hq = mq ? (0, Qq.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: uq.height * jq
          }
        }) : (0, Qq.jsx)(Bg, {
          ...Eq
        }),
        oq = qq => (0, Qq.jsxs)(cq.Q, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: Aq("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: Oq,
          children: [(0, Qq.jsx)(hq.d, {
            name: "expand"
          }), qq && (0, Qq.jsx)("span", {
            children: Aq("hudLayout:fullScreen")
          })]
        });
      return (0, Qq.jsxs)("div", {
        ref: Bq,
        className: "SettingBox HudLayoutPreviewBox",
        children: [Wq > 0 && Vq && (0, Qq.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, Qq.jsx)("div", {
            style: {
              width: Nq
            },
            children: Hq
          }), (0, Qq.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, Qq.jsx)(rE, {
              selected: Eq.selected,
              ...gq,
              joystickFixed: Eq.joystickFixed,
              extra: oq(!Eq.selected || aq >= 278)
            })
          })]
        }), Wq > 0 && !Vq && (0, Qq.jsxs)(Qq.Fragment, {
          children: [Hq, (0, Qq.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: oq(!1)
          })]
        })]
      })
    }
    var og = gq(2433),
      Pg = gq(4233),
      Qg = gq(2414),
      yg = gq(2377);
    const tg = qq => {
      const Eq = YE.l * ("sides" === qq ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(Eq / 2))
    };

    function rg(qq, Eq, gq) {
      const [Yq, lq, Oq, mq] = qq;
      return "sides" === Eq ? [Yq, gq, Oq, gq] : [gq, lq, gq, mq]
    }
    const vg = [null, null, null, null],
      hg = qq => `${qq}px`;

    function ng(qq) {
      let {
        safe: Eq,
        onPreview: gq,
        onCommit: Oq
      } = qq;
      const {
        t: mq
      } = (0, Yq.v)(), xq = (0, YE.p)(null !== Eq && void 0 !== Eq ? Eq : vg, window.innerWidth, window.innerHeight, LE(document).map(Math.round)), Aq = (0, lq.useRef)(null !== Eq && void 0 !== Eq ? Eq : vg);
      Aq.current = null !== Eq && void 0 !== Eq ? Eq : vg;
      const uq = qq => {
        const Eq = Math.min(tg(qq), "sides" === qq ? Math.max(xq[1], xq[3]) : Math.max(xq[0], xq[2]));
        return (0, Qq.jsx)(Nq.h, {
          name: mq("sides" === qq ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: tg(qq),
          step: 2,
          initValue: Eq,
          format: hg,
          onChange: Eq => {
            gq(rg(Aq.current, qq, Eq))
          },
          onChangeComplete: Yq => {
            if (Yq === Eq) return void gq(Aq.current);
            const lq = rg(Aq.current, qq, Yq);
            Aq.current = lq, Oq(lq), (0, rq.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: qq
            })
          }
        })
      };
      return (0, Qq.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, Qq.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, Qq.jsx)("div", {
            children: mq("hudLayout:safeZone")
          }), (0, Qq.jsx)(cq.Q, {
            active: null === Eq,
            pressed: null === Eq,
            onClick: () => {
              Oq(null)
            },
            children: mq("hudLayout:safeZoneAuto")
          })]
        }), uq("sides"), uq("ends")]
      })
    }

    function bg() {
      var qq, Eq;
      const {
        t: gq
      } = (0, Yq.v)(), Oq = (0, bq.fb)(), {
        clientEscMenuOptions: mq
      } = (0, uq.j)(["clientEscMenuOptions"]), xq = (0, og.h)(), Aq = Oq.hudLayouts[xq], [Bq, Wq] = (0, lq.useState)(null), {
        rowIconsOpen: aq,
        onRowIconsOpen: Vq,
        select: dq
      } = function(qq, Eq) {
        const [gq, Yq] = (0, lq.useState)((() => bq.G.some((Eq => void 0 !== qq.hudElements[Eq] || qq.hudLocked.includes(Eq))))), Oq = (0, lq.useCallback)((qq => {
          Eq(qq), (0, bq.M)(qq) && Yq(!0)
        }), [Eq]);
        return {
          rowIconsOpen: gq,
          onRowIconsOpen: Yq,
          select: Oq
        }
      }(Aq, Wq), [jq, Hq] = (0, lq.useState)([]), [oq, Pq] = (0, lq.useState)(null), [yq, tq] = yE(), hq = (0, lq.useCallback)(((qq, Eq, gq) => {
        Hq(Eq), tq(gq);
        const Yq = Object.keys(qq);
        Pq((qq => (null === qq || void 0 === qq ? void 0 : qq.size) === Yq.length && Yq.every((Eq => qq.has(Eq))) ? qq : new Set(Yq)))
      }), [tq]), {
        gameState: nq
      } = (0, uq.j)(["gameState"]), iq = (0, Qg.k)(), Zq = null !== (qq = null === (Eq = (0, yg.r)()) || void 0 === Eq ? void 0 : Eq.icon) && void 0 !== qq ? qq : null, [fq] = (0, lq.useState)((() => "inGame" === nq ? function(qq, Eq, gq) {
        const Yq = qq.querySelector(".InGameUi .TouchComponentsButtons");
        if (!Yq) return mE;
        const lq = {},
          Oq = {};
        for (const uq of OE) {
          const qq = Yq.querySelector(`.TouchSlot${uq} > .TouchKey`);
          if (qq) {
            var mq, xq;
            lq[uq] = qq.cloneNode(!0);
            const Eq = (null !== (mq = null === (xq = qq.querySelector(".TouchKeyLabel")) || void 0 === xq ? void 0 : xq.textContent) && void 0 !== mq ? mq : "").split(/\s+/).filter((qq => !/[\d\xd7]/.test(qq))).join(" ");
            Eq && (Oq[uq] = Eq)
          }
        }
        const Aq = Eq => {
            const gq = qq.querySelector(`.InGameUi ${Eq}`);
            return null !== gq && !gq.classList.contains("Hidden")
          },
          cq = [...qq.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((qq => qq.cloneNode(!0)));
        return {
          faces: Object.keys(lq).length > 0 ? lq : null,
          names: Oq,
          shop: Aq(".TouchInventoryKey.ShopKey"),
          bag: Aq(".TouchInventoryKey.BagKey"),
          items: cq.length > 0 ? cq : null,
          rowIcons: Eq,
          pinnedIcon: gq
        }
      }(document, iq, Zq) : mE)), Mq = (0, lq.useRef)(null), Tq = (0, lq.useRef)(null), pq = function(qq) {
        const [Eq, gq] = (0, lq.useState)((() => .4 * window.innerHeight));
        return (0, lq.useLayoutEffect)((() => {
          var Eq;
          const Yq = null === (Eq = qq.current) || void 0 === Eq ? void 0 : Eq.closest(".SettingsMenuRight");
          if (!Yq) return;
          const lq = () => {
            const qq = Yq.clientHeight < ig ? .4 : .5;
            gq(Math.max(80, Yq.clientHeight * qq - 24))
          };
          lq();
          const Oq = new ResizeObserver(lq);
          return Oq.observe(Yq), () => {
            Oq.disconnect()
          }
        }), [qq]), Eq
      }(Tq), Gq = (0, Pg.o)(mq.joystickMode), Jq = mq.touchActionButtons, kq = (0, lq.useMemo)((() => function(qq, Eq) {
        const gq = {},
          Yq = [
            ["extra", "X"],
            ["game", "G"]
          ];
        Eq || Yq.push(["attack", "P"]);
        for (const [lq, Oq] of Yq) {
          const Eq = qq.names[Oq];
          Eq && (gq[lq] = Eq)
        }
        return gq
      }(fq, Jq)), [fq, Jq]);
      (0, lq.useEffect)((() => {
        (0, rq.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [Rq, Uq] = (0, lq.useState)(!1), [Fq, sq] = (0, lq.useState)(!1), Xq = (0, lq.useRef)(null);
      Wg(Xq, !Fq);
      const [wq, Iq] = (0, lq.useState)(!1), eq = (0, lq.useCallback)((() => {
        Iq(!1)
      }), []), Dq = (0, lq.useMemo)((() => new Set(Aq.hudLocked)), [Aq.hudLocked]), qE = qq => {
        var Eq, gq;
        const Yq = (0, bq.r)(),
          lq = qq(Yq);
        (0, bq.Z)(null !== (Eq = null === (gq = Mq.current) || void 0 === gq ? void 0 : gq.keepLocks(Yq, lq)) && void 0 !== Eq ? Eq : lq)
      }, EE = (qq, Eq) => {
        qE((gq => (0, bq.hb)(gq, xq, qq, Eq)))
      }, YE = (qq, Eq, gq) => {
        EE(qq, {
          dx: Eq,
          dy: gq
        }), (0, rq.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${qq}`
        })
      }, lE = (qq, Eq) => {
        qE((gq => (0, bq.jb)(gq, xq, qq, Eq)))
      }, xE = qq => {
        const Eq = Sq[qq];
        return (Eq.move || Eq.scale) && ("joystick" !== qq || Gq) && !(0, gE.z)(qq, Aq.hudElements[qq])
      }, AE = qq => Sq[qq].move && ("joystick" !== qq || Gq) && !Dq.has(qq), cE = new Set(zq.map((qq => qq.id)).filter((qq => {
        const Eq = (0, bq.M)(qq) && !fq.rowIcons.includes(qq);
        return null === oq || oq.has(qq) || (0, bq.v)(Aq.hudElements, qq) && !Eq
      }))), uE = {
        present: cE,
        actionButtons: Jq,
        keyNames: kq,
        scaleCaps: yq,
        sizeBesidePreview: Rq,
        elements: Aq.hudElements,
        selected: Bq,
        onSelect: dq,
        rowIconsOpen: aq,
        onRowIconsOpen: Vq,
        onScalePreview: (qq, Eq) => {
          var gq;
          null === (gq = Mq.current) || void 0 === gq || gq.setScale(qq, Eq)
        },
        onScale: (qq, Eq) => {
          EE(qq, {
            scale: Eq
          }), (0, rq.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${qq}`
          })
        },
        onHidden: (qq, Eq) => {
          EE(qq, {
            hidden: Eq
          }), (0, rq.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${Eq?"hide":"show"}:${qq}`
          })
        },
        onReset: qq => {
          EE(qq, bq.e)
        },
        locked: Dq,
        lockable: xE,
        onLocked: lE,
        note: (qq, Eq) => {
          const Yq = Eq && jq.length > 0 ? gq("hudLayout:overlapsNote", {
            names: Lq(jq, Jq, gq, kq)
          }) : null;
          return Eq && Kq(qq, Gq) ? (0, Qq.jsxs)(Qq.Fragment, {
            children: [Yq && (0, Qq.jsx)("span", {
              children: Yq
            }), (0, Qq.jsx)("span", {
              children: gq("hudLayout:floatingJoystickNote")
            }), !Rq && (0, Qq.jsx)(Cq, {})]
          }) : Yq || (Eq && Dq.has(qq) ? gq("hudLayout:lockedNote") : Eq && "cluster" === qq ? gq("hudLayout:clusterNote") : Eq && "menu" === qq ? gq("hudLayout:menuNote") : Eq && (0, gE.z)(qq, Aq.hudElements[qq]) && AE(qq) ? gq("hudLayout:rowIconNote") : Eq && "arrows" === qq ? gq("hudLayout:arrowsNote") : "inventory" === qq && (0, bq.v)(Aq.hudElements, "inventory") ? gq("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, Qq.jsxs)("div", {
        ref: Tq,
        className: "HudLayoutSettings",
        children: [(0, Qq.jsxs)("div", {
          ref: Xq,
          className: "HudLayoutBody",
          children: [(0, Qq.jsx)("div", {
            className: "HudLayoutOrientation",
            children: gq("landscape" === xq ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, Qq.jsx)(Hg, {
            preview: {
              layout: Oq,
              orientation: xq,
              selected: Bq,
              onSelect: dq,
              onMove: YE,
              canMove: AE,
              actionButtons: Jq,
              joystickFixed: Gq,
              presence: fq,
              keyNames: kq,
              maxHeight: pq,
              apiRef: Mq,
              onMeasured: hq,
              onReady: sq,
              lockable: xE
            },
            quick: {
              layout: Aq,
              actionButtons: Jq,
              keyNames: kq,
              scaleCaps: yq,
              overlaps: jq,
              onScale: uE.onScale,
              onHidden: uE.onHidden,
              onReset: uE.onReset,
              locked: Dq,
              lockable: xE,
              onLocked: lE
            },
            onFullScreen: () => {
              Iq(!0)
            },
            resting: wq,
            onSidePanel: Uq
          }), wq && (0, Qq.jsx)(ag, {
            layout: Oq,
            orientation: xq,
            selected: Bq,
            onSelect: dq,
            onMove: YE,
            canMove: AE,
            actionButtons: Jq,
            joystickFixed: Gq,
            presence: fq,
            keyNames: kq,
            onScale: uE.onScale,
            onHidden: uE.onHidden,
            onReset: uE.onReset,
            locked: Dq,
            lockable: xE,
            onLocked: lE,
            apiRef: Mq,
            onClose: eq
          }), (0, Qq.jsx)(ng, {
            safe: Aq.hudSafe,
            onCommit: qq => {
              qE((Eq => (0, bq.kb)(Eq, xq, qq)))
            },
            onPreview: qq => {
              var Eq;
              null === (Eq = Mq.current) || void 0 === Eq || Eq.setSafe(qq)
            }
          }), (0, Qq.jsx)(Nq.d, {
            label: gq("hudLayout:snapCentre"),
            checked: Oq.hudSnapCentre,
            onClick: qq => {
              (0, bq.V)(qq)
            },
            circleInfoText: gq("hudLayout:snapCentreInfo")
          }), (0, Qq.jsx)(jg, {
            ...uE
          }), (0, Qq.jsx)(Nq.f, {
            label: gq("hudLayout:shape"),
            options: bq.I.map((qq => ({
              value: qq,
              label: gq(`hudLayout:shape_${qq}`)
            }))),
            value: Oq.hudShape,
            onChange: qq => {
              qE((Eq => ({
                ...Eq,
                hudShape: qq
              }))), (0, rq.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: qq
              })
            }
          }), (0, Qq.jsx)(Nq.h, {
            name: gq("hudLayout:opacity"),
            min: bq.g,
            max: 1,
            step: .05,
            initValue: Oq.hudKeyOpacity,
            format: qq => `${Math.round(100*qq)}%`,
            circleInfoText: gq("hudLayout:opacityInfo"),
            onChange: qq => {
              var Eq;
              null === (Eq = Mq.current) || void 0 === Eq || Eq.setOpacity(qq)
            },
            onChangeComplete: qq => {
              (0, bq.S)(qq), (0, rq.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, Qq.jsx)(cq.K, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const qq = vq.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await qq.getResult() && (0, bq.Q)()
            }()
          },
          children: gq("hudLayout:resetAll")
        })]
      })
    }
    const ig = 350;
    const Zg = [function() {
      const {
        t: qq
      } = (0, Yq.v)(), [Eq, gq] = (0, lq.useState)(!1), Oq = (0, lq.useRef)(null);
      return (0, lq.useEffect)((() => {
        var qq;
        Eq && (null === (qq = Oq.current) || void 0 === qq || qq.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [Eq]), (0, Qq.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, Qq.jsxs)("button", {
          ref: Oq,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": Eq,
          onClick: () => {
            gq(!Eq)
          },
          children: [(0, Qq.jsx)(hq.d, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, Qq.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, Qq.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: qq("hudLayout:title")
            }), (0, Qq.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: qq("hudLayout:entrySub")
            })]
          }), (0, Qq.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), Eq && (0, Qq.jsx)(bg, {})]
      })
    }, function() {
      const {
        t: qq
      } = (0, Yq.v)(), {
        joystickMode: Eq,
        touchSpeedCurve: gq,
        autorun: lq,
        jumpLock: Oq
      } = (0, uq.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Qq.jsxs)(Qq.Fragment, {
        children: [(0, Qq.jsx)(Nq.f, {
          label: qq("settingsMenu:joystick"),
          options: Pq.xb.map((Eq => ({
            value: Eq,
            label: qq(yq[Eq])
          }))),
          value: Eq,
          onChange: qq => {
            uq.b.setClientEscMenuOptions({
              joystickMode: qq
            })
          },
          circleInfoText: qq("settingsMenu:joystickInfo")
        }), (0, Qq.jsx)(Nq.d, {
          label: qq("settingsMenu:preciseWalking"),
          checked: gq,
          onClick: qq => {
            uq.b.setClientEscMenuOptions({
              touchSpeedCurve: qq
            })
          },
          circleInfoText: qq("settingsMenu:preciseWalkingInfo")
        }), (0, Qq.jsx)(Nq.d, {
          label: qq("settingsMenu:autoRun"),
          checked: lq,
          onClick: qq => {
            uq.b.setClientEscMenuOptions({
              autorun: qq
            })
          },
          circleInfoText: qq("settingsMenu:autoRunInfo")
        }), (0, Qq.jsx)(Nq.d, {
          label: qq("settingsMenu:jumpLock"),
          checked: Oq,
          onClick: qq => {
            uq.b.setClientEscMenuOptions({
              jumpLock: qq
            })
          },
          circleInfoText: qq("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, Qq.jsx)(oq.e, {})
    }, function() {
      const {
        t: qq
      } = (0, Yq.v)(), {
        clientEscMenuOptions: Eq
      } = (0, uq.j)(["clientEscMenuOptions"]);
      return (0, tq.b)() ? (0, Qq.jsx)(Nq.d, {
        label: qq("settingsMenu:vibration"),
        checked: Eq.vibration,
        onClick: qq => {
          uq.b.setClientEscMenuOptions({
            vibration: qq
          })
        },
        circleInfoText: qq("settingsMenu:vibrationInfo")
      }) : null
    }];

    function fg() {
      return (0, Qq.jsx)(Qq.Fragment, {
        children: Zg.map(((qq, Eq) => (0, Qq.jsx)(qq, {}, Eq)))
      })
    }
    var Mg = gq(4201);

    function Tg() {
      const {
        t: qq
      } = (0, Yq.v)(), {
        isTouchScreen: Eq,
        clientEscMenuOptions: gq,
        gameState: mq
      } = (0, uq.j)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), xq = (0, aq.h)("ezBridging"), Aq = (0, aq.h)("ezTowering"), dq = "inGame" !== mq || !0 === xq, jq = (0, Vq.f)() && ("inGame" !== mq || !0 === Aq), [, oq] = (0, lq.useReducer)((qq => qq + 1), 0), Pq = (0, Hq.i)(), [yq, tq] = (0, lq.useState)(Mg.h);
      return (0, Qq.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Pq && (0, Qq.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, Qq.jsx)("div", {
            children: qq("controller:settingsControlsNote")
          }), (0, Qq.jsx)(cq.Q, {
            onClick: () => {
              uq.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: qq("controller:settingsOpenController")
          })]
        }), (0, Bq.isTouchscreen)() && !(0, Bq.isMobile)() ? (0, Qq.jsx)(Qq.Fragment, {
          children: (0, Qq.jsx)(Nq.d, {
            label: qq("settingsMenu:useTouchControls"),
            checked: yq,
            onClick: qq => {
              (0, Mg.e)(qq), tq(qq)
            }
          })
        }) : null, Eq && (0, Qq.jsx)(fg, {}), dq && (0, Qq.jsx)(Nq.d, {
          label: qq("settingsMenu:ezBridging"),
          checked: gq.ezBridging,
          onClick: qq => {
            uq.b.setClientEscMenuOptions({
              ezBridging: qq
            })
          },
          circleInfoText: qq("settingsMenu:ezBridgingInfo")
        }), jq && (0, Qq.jsx)(Nq.d, {
          label: qq("settingsMenu:ezTowering"),
          checked: gq.ezTowering,
          onClick: qq => {
            uq.b.setClientEscMenuOptions({
              ezTowering: qq
            })
          },
          circleInfoText: qq("settingsMenu:ezToweringInfo")
        }), (0, Qq.jsx)(Nq.d, {
          label: qq("settingsMenu:crouchToggle"),
          checked: gq.crouchIsToggle,
          onClick: qq => {
            uq.b.setClientEscMenuOptions({
              crouchIsToggle: qq
            })
          },
          circleInfoText: qq("settingsMenu:crouchToggleInfo")
        }), (0, Qq.jsx)(Nq.d, {
          label: qq("settingsMenu:hideUiToggle"),
          checked: gq.hideUiIsToggle,
          onClick: qq => {
            uq.b.setClientEscMenuOptions({
              hideUiIsToggle: qq
            })
          },
          circleInfoText: qq("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, Wq.d)() && (0, Qq.jsx)(Nq.h, {
          name: qq("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: gq.touchscreenSensitivity,
          onChange: qq => {
            uq.b.setClientEscMenuOptions({
              touchscreenSensitivity: qq
            })
          }
        }), !(0, Bq.isMobile)() && (0, Qq.jsx)(Nq.h, {
          name: qq("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: gq.mouseSensitivity,
          onChange: qq => {
            uq.b.setClientEscMenuOptions({
              mouseSensitivity: qq
            })
          }
        }), !(0, Bq.isMobile)() && (0, Qq.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Qq.jsx)("div", {
            className: "SliderText",
            children: qq("settingsMenu:keyBindings")
          }), Oq.g.map((Eq => (0, Qq.jsx)(zg, {
            title: qq(Eq.name.translationKey, Eq.name.params),
            defaultOpen: Oq.j.has(Eq.id),
            children: Eq.actions.map((qq => (0, Qq.jsx)(Sg, {
              noaAction: qq,
              forceUpdate: oq,
              clashesWith: Eq.clashesWith,
              showPadGlyph: Pq
            }, qq)))
          }, Eq.name.translationKey))), (0, Qq.jsx)(cq.K, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, Oq.C)(), oq()
            },
            children: qq("controls:resetBindings")
          })]
        })]
      })
    }

    function zg(qq) {
      let {
        title: Eq,
        defaultOpen: gq,
        children: Yq
      } = qq;
      const [Oq, mq] = (0, lq.useState)(gq);
      return (0, Qq.jsxs)("div", {
        className: Aq()("ControlsSection", {
          Collapsed: !Oq
        }),
        children: [(0, Qq.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            mq(!Oq)
          },
          children: [(0, Qq.jsx)("div", {
            className: "ControlsSectionTitle",
            children: Eq
          }), (0, Qq.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), Oq && (0, Qq.jsx)("div", {
          className: "ControlsSectionRows",
          children: Yq
        })]
      })
    }

    function Sg(qq) {
      let {
        noaAction: Eq,
        forceUpdate: gq,
        clashesWith: xq,
        showPadGlyph: uq
      } = qq;
      const {
        t: Bq
      } = (0, Yq.v)(), Wq = (0, jq.e)(Eq), [Nq, aq] = (0, lq.useState)(!1), [Vq, Hq] = (0, lq.useState)("controls:clickToEnterNewBinding"), [oq, Pq] = (0, lq.useState)(null), [yq, tq] = (0, lq.useState)(null), rq = (0, lq.useRef)(null);
      (0, lq.useEffect)((() => {
        Nq && rq.current && rq.current.focus()
      }), [Nq]);
      const vq = Oq.u[Eq].filter((qq => mq.h[qq]));
      let hq = null;
      const nq = [],
        bq = xq.flatMap((qq => {
          var Eq, gq;
          return null !== (Eq = null === (gq = Oq.g.find((Eq => Eq.id === qq))) || void 0 === gq ? void 0 : gq.actions) && void 0 !== Eq ? Eq : []
        }));
      for (const Yq of bq) {
        if (Yq === Eq) continue;
        const qq = Oq.u[Yq];
        for (const Eq of qq) vq.includes(Eq) && nq.push(Bq(Oq.x[Yq].translationKey, Oq.x[Yq].params))
      }
      nq.length > 0 && (hq = Bq("controls:sharedBindingsWarning") + " ", hq += nq.join(", "));
      const iq = () => {
          aq(!1), Pq(null), Hq("controls:clickToEnterNewBinding"), tq(null)
        },
        Zq = () => "BindingInput_" + Eq;
      return (0, Qq.jsxs)("div", {
        className: Aq()("ControlRow", {
          WarningBorder: null !== hq
        }),
        children: [(0, Qq.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Qq.jsxs)("div", {
            className: "ControlName",
            children: [Bq(Oq.x[Eq].translationKey, Oq.x[Eq].params), uq && Wq && (0, Qq.jsx)(dq.d, {
              glyph: Wq,
              className: "ControlPadGlyph"
            })]
          }), (0, Qq.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Qq.jsxs)("div", {
              className: "ControlBindingsList",
              children: [vq.map((qq => (0, Qq.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Qq.jsx)("div", {
                  children: (0, Oq.l)(qq)
                }), (0, Qq.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Yq = (0, Oq.z)(Eq, qq);
                    Yq.isError() ? tq(Yq.asError().message) : tq(null), gq()
                  },
                  children: "\xd7"
                })]
              }, qq))), !Nq && (0, Qq.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  aq(!0), tq(null)
                },
                children: (0, Qq.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), Nq && (0, Qq.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Qq.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Qq.jsx)("div", {
                  className: "InputOverlay",
                  children: oq ? (0, Oq.l)(oq) : (0, Qq.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Bq(Vq)
                  })
                }), (0, Qq.jsx)("input", {
                  ref: rq,
                  id: Zq(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: qq => {
                    if ("Escape" === qq.code) return iq(), qq.preventDefault(), void qq.stopPropagation();
                    const Eq = qq.code;
                    mq.c.includes(Eq) ? (tq(null), Pq(Eq)) : (tq("controls:keyIsReserved"), Pq(null)), qq.preventDefault(), qq.stopPropagation()
                  },
                  onMouseDown: qq => {
                    const Eq = "Mouse" + (qq.button + 1);
                    document.activeElement && document.activeElement.id === Zq() ? mq.c.includes(Eq) ? (tq(null), Pq(Eq)) : (tq("controls:keyIsReserved"), Pq(null)) : Hq("controls:enterNewBinding"), qq.stopPropagation()
                  },
                  onBlur: () => {
                    Hq("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Qq.jsx)(cq.g, {
                onPointerDown: qq => {
                  qq.preventDefault()
                },
                onClick: () => {
                  (0, Oq.e)(Eq, oq), gq(), iq()
                },
                className: "ControlBindingAddButton",
                disabled: null === oq,
                children: Bq("general:add")
              }), (0, Qq.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  iq()
                },
                children: "\xd7"
              })]
            }), yq && (0, Qq.jsx)("div", {
              className: "ControlBindingError",
              children: Bq(yq)
            })]
          })]
        }), hq && (0, Qq.jsx)("div", {
          className: "ControlRowWarning",
          children: hq
        })]
      })
    }
  },
  8609: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => jq,
      i: () => dq,
      k: () => uq,
      m: () => Hq,
      p: () => oq,
      t: () => Wq
    });
    var Yq = gq(1646),
      lq = gq(1716);
    const Oq = qq => qq >= 56320 && qq <= 57343,
      mq = qq => qq >= 55296 && qq <= 56319,
      xq = (qq, Eq) => Eq >= 2 && Oq(qq.charCodeAt(Eq - 1)) && mq(qq.charCodeAt(Eq - 2)) ? Eq - 2 : Math.max(0, Eq - 1),
      Aq = (qq, Eq) => {
        let gq;
        var Yq, lq;
        return gq = qq.start !== qq.end ? Eq < 0 ? qq.start : qq.end : Eq < 0 ? xq(qq.value, qq.start) : (Yq = qq.value, (lq = qq.start) + 1 < Yq.length && mq(Yq.charCodeAt(lq)) && Oq(Yq.charCodeAt(lq + 1)) ? lq + 2 : Math.min(Yq.length, lq + 1)), {
          value: qq.value,
          start: gq,
          end: gq
        }
      },
      cq = ["text", "search", "url", "email", "tel", "password", "number"],
      uq = qq => !(!(0, lq.b)(qq) || qq.isContentEditable || qq.hasAttribute("data-pad-no-osk")) && (qq instanceof HTMLTextAreaElement || qq instanceof HTMLInputElement && cq.includes(qq.type)),
      Bq = qq => null !== qq.selectionStart,
      Wq = qq => {
        var Eq, gq;
        const {
          value: Yq
        } = qq;
        return {
          value: Yq,
          start: null !== (Eq = qq.selectionStart) && void 0 !== Eq ? Eq : Yq.length,
          end: null !== (gq = qq.selectionEnd) && void 0 !== gq ? gq : Yq.length
        }
      },
      Nq = (qq, Eq, gq) => {
        if (qq.readOnly) return;
        const lq = qq instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(lq, "value").set.call(qq, Eq.value), Bq(qq) && qq.setSelectionRange(Eq.start, Eq.end), (0, Yq.h)(qq, new InputEvent("input", {
          bubbles: !0,
          inputType: gq
        }))
      };
    let aq = !1;
    const Vq = (qq, Eq) => !!document.execCommand(qq, !1, Eq) || (aq || (aq = !0, console.warn(`execCommand("${qq}") failed; the on-screen keyboard is setting the value directly`)), !1),
      dq = (qq, Eq) => {
        Vq("insertText", Eq) || Nq(qq, function(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Yq = qq.value.slice(0, qq.start),
            lq = qq.value.slice(qq.end);
          let Oq = gq < 0 ? Eq.length : Math.max(0, gq - Yq.length - lq.length);
          Oq > 0 && Oq < Eq.length && mq(Eq.charCodeAt(Oq - 1)) && Oq--;
          const xq = Eq.slice(0, Oq),
            Aq = Yq.length + xq.length;
          return {
            value: Yq + xq + lq,
            start: Aq,
            end: Aq
          }
        }(Wq(qq), Eq, qq.maxLength), "insertText")
      },
      jq = qq => {
        Vq("delete") || Nq(qq, (qq => {
          const Eq = qq.start === qq.end ? xq(qq.value, qq.start) : qq.start;
          return {
            value: qq.value.slice(0, Eq) + qq.value.slice(qq.end),
            start: Eq,
            end: Eq
          }
        })(Wq(qq)), "deleteContentBackward")
      },
      Hq = (qq, Eq) => {
        if (!Bq(qq)) return;
        const gq = Aq(Wq(qq), Eq);
        qq.setSelectionRange(gq.start, gq.end)
      },
      oq = qq => {
        Bq(qq) && 0 === qq.selectionStart && 0 === qq.selectionEnd && qq.setSelectionRange(qq.value.length, qq.value.length)
      }
  },
  8814: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq
    });
    var Yq = gq(24),
      lq = gq(3311),
      Oq = gq(1336),
      mq = gq(1367);
    const xq = async () => {
      if ((0, mq.c)()) {
        if (!0 !== await Oq.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Yq.b.get("gameState")) return
      }(0, lq.e)()
    }
  },
  8823: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Aq,
      g: () => Oq,
      j: () => mq,
      m: () => lq,
      n: () => xq
    });
    var Yq = gq(1928);
    const lq = "controllerPadShopOpen",
      Oq = qq => Yq.g.includes(qq),
      mq = qq => Object.values(qq).some((qq => !1 !== qq.canBuy && !qq.isRewardedAd)),
      xq = (qq, Eq, gq) => {
        var Yq, lq, mq, xq;
        const Aq = qq.filter((qq => !Oq(qq))),
          cq = null !== Eq && qq.includes(Eq) ? Eq : null;
        return null !== cq && !Oq(cq) && gq(cq) ? cq : null !== (Yq = null !== (lq = null !== (mq = null !== (xq = Aq.find(gq)) && void 0 !== xq ? xq : Aq[0]) && void 0 !== mq ? mq : cq) && void 0 !== lq ? lq : qq[0]) && void 0 !== Yq ? Yq : null
      },
      Aq = qq => qq.userInput || qq.isRewardedAd || "boolean" === typeof qq.isSelected ? null : JSON.stringify([qq.image, qq.cost, qq.currency, qq.amount, qq.customTitle, qq.buyButtonText, qq.description, qq.canBuy])
  },
  8837: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq,
      i: () => uq
    });
    var Yq = gq(57),
      lq = gq(1416),
      Oq = gq(1985),
      mq = gq(1380),
      xq = gq(1401),
      Aq = gq(1070);
    const cq = () => {
        const qq = (0, mq.t)();
        if ((0, Yq.useEffect)((() => {
            (0, mq.j)()
          }), []), !qq) return null;
        const {
          ControllerCategory: Eq
        } = qq;
        return (0, Aq.jsx)(xq.d, {
          children: (0, Aq.jsx)(Eq, {})
        })
      },
      uq = () => {
        var qq;
        const Eq = (0, mq.t)(),
          [, gq] = (0, Yq.useReducer)((qq => qq + 1), 0);
        return (0, lq.f)(Oq.b, gq), null !== (qq = null === Eq || void 0 === Eq ? void 0 : Eq.hasActivePad()) && void 0 !== qq && qq
      }
  },
  8618: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      f: () => cq,
      h: () => Vq,
      k: () => Bq,
      l: () => aq,
      p: () => Oq,
      t: () => Nq,
      w: () => mq,
      y: () => Wq
    });
    const Yq = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      lq = (qq, Eq) => {
        if ("function" === typeof qq.checkVisibility) return !qq.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: Eq,
          checkOpacity: Eq
        });
        const {
          visibility: gq
        } = getComputedStyle(qq);
        if ("hidden" === gq || "collapse" === gq) return !0;
        if (!Eq) return !1;
        for (let Yq = qq; Yq; Yq = Yq.parentElement)
          if ("0" === getComputedStyle(Yq).opacity) return !0;
        return !1
      },
      Oq = qq => {
        if (!qq.isConnected || lq(qq, !0)) return !1;
        const Eq = qq.getBoundingClientRect();
        return Eq.width > 0 && Eq.height > 0
      },
      mq = qq => !!qq.matches(":disabled, [aria-disabled='true']") || "button" === qq.getAttribute("role") && "-1" === qq.getAttribute("tabindex"),
      xq = qq => {
        var Eq;
        if (qq.closest("[data-pad-ignore]")) return !0;
        return !!(null === (Eq = qq.parentElement) || void 0 === Eq ? void 0 : Eq.closest("[data-pad-focusable]"))
      },
      Aq = qq => {
        const Eq = qq.querySelectorAll(Yq);
        return qq.matches(Yq) ? [qq, ...Eq] : Eq
      },
      cq = qq => {
        const Eq = [];
        for (const gq of Aq(qq)) !xq(gq) && Oq(gq) && Eq.push(gq);
        return Eq
      },
      uq = new WeakMap,
      Bq = qq => {
        const Eq = uq.get(qq);
        if (Eq && Wq(Eq, qq)) return !0;
        for (const gq of Aq(qq))
          if (!xq(gq) && Oq(gq)) return uq.set(qq, gq), !0;
        return uq.delete(qq), !1
      },
      Wq = (qq, Eq) => Eq.contains(qq) && qq.matches(Yq) && !xq(qq) && Oq(qq),
      Nq = (qq, Eq) => Wq(qq, Eq) && !mq(qq),
      aq = qq => {
        for (const Eq of qq.querySelectorAll("[data-pad-initial-area]"))
          if (!lq(Eq, !1)) return !0;
        return !1
      },
      Vq = qq => {
        const Eq = Eq => {
          let gq = 0;
          for (let Yq = Eq.parentElement; Yq && Yq !== qq; Yq = Yq.parentElement) gq++;
          return gq
        };
        return [...qq.querySelectorAll("[data-pad-initial-area]")].filter(Oq).sort(((qq, gq) => Eq(gq) - Eq(qq)))
      }
  },
  8601: (qq, Eq, gq) => {
    gq.d(Eq, {
      B: () => rq,
      D: () => cq,
      F: () => hq,
      G: () => yq,
      H: () => tq,
      L: () => dq,
      P: () => Aq,
      S: () => uq,
      b: () => jq,
      f: () => vq,
      i: () => Qq,
      l: () => Pq,
      p: () => aq,
      s: () => Vq,
      v: () => Wq,
      y: () => Nq
    });
    var Yq = gq(31),
      lq = gq(1646),
      Oq = gq(8604),
      mq = gq(8609),
      xq = gq(8618);
    const Aq = qq => (0, mq.k)(qq),
      cq = qq => {
        const Eq = qq.getBoundingClientRect();
        return {
          x: Eq.left + Eq.width / 2,
          y: Eq.top + Eq.height / 2
        }
      },
      uq = (qq, Eq, gq) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: qq.x,
        clientY: qq.y,
        screenX: qq.x,
        screenY: qq.y,
        button: Eq,
        buttons: gq,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      Bq = (qq, Eq) => {
        (0, lq.h)(qq, Eq)
      },
      Wq = function(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Yq = 0 === gq ? 1 : 2;
        Bq(qq, new PointerEvent("pointerdown", uq(Eq, gq, Yq))), Bq(qq, new MouseEvent("mousedown", uq(Eq, gq, Yq)))
      },
      Nq = function(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Bq(qq, new PointerEvent("pointerup", uq(Eq, gq, 0))), Bq(qq, new MouseEvent("mouseup", uq(Eq, gq, 0)))
      },
      aq = function(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Wq(qq, Eq, gq), Nq(qq, Eq, gq), Bq(qq, 0 === gq ? new MouseEvent("click", uq(Eq, 0, 0)) : new MouseEvent("contextmenu", uq(Eq, 2, 0)))
      },
      Vq = function(qq, Eq, gq) {
        let {
          leaveBelow: Yq = null,
          enterBelow: lq = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (qq !== Eq) {
          if (null !== qq && void 0 !== qq && qq.isConnected) {
            const lq = {
              ...uq(gq, 0, 0),
              relatedTarget: Eq
            };
            Bq(qq, new PointerEvent("pointerout", lq)), Bq(qq, new MouseEvent("mouseout", lq));
            const Oq = qq => !!Eq && qq.contains(Eq) || !!Yq && qq.contains(Yq);
            for (let Eq = qq; Eq && !Oq(Eq); Eq = Eq.parentElement) Bq(Eq, new PointerEvent("pointerleave", {
              ...lq,
              bubbles: !1
            })), Bq(Eq, new MouseEvent("mouseleave", {
              ...lq,
              bubbles: !1
            }))
          }
          if (Eq) {
            const Yq = {
              ...uq(gq, 0, 0),
              relatedTarget: qq
            };
            Bq(Eq, new PointerEvent("pointerover", Yq)), Bq(Eq, new MouseEvent("mouseover", Yq));
            const Oq = [],
              mq = Eq => !(null === qq || void 0 === qq || !qq.isConnected) && Eq.contains(qq) || !!lq && Eq.contains(lq);
            for (let qq = Eq; qq && !mq(qq); qq = qq.parentElement) Oq.push(qq);
            for (const qq of Oq.reverse()) Bq(qq, new PointerEvent("pointerenter", {
              ...Yq,
              bubbles: !1
            })), Bq(qq, new MouseEvent("mouseenter", {
              ...Yq,
              bubbles: !1
            }));
            Bq(Eq, new PointerEvent("pointermove", uq(gq, 0, 0))), Bq(Eq, new MouseEvent("mousemove", uq(gq, 0, 0)))
          }
        } else Eq && (Bq(Eq, new PointerEvent("pointermove", uq(gq, 0, 0))), Bq(Eq, new MouseEvent("mousemove", uq(gq, 0, 0))))
      },
      dq = qq => {
        Yq.i.TV(Oq.e, qq)
      },
      jq = qq => {
        if (Aq(qq)) return void dq(qq);
        const Eq = qq.hasAttribute("data-pad-focusable") ? qq.querySelector("a[href]") : null,
          gq = null !== Eq && void 0 !== Eq ? Eq : qq;
        aq(gq, cq(gq))
      },
      Hq = ".Dropdown-root.is-open",
      oq = qq => {
        const Eq = qq.querySelector(".Dropdown-control");
        return jq(Eq), Eq
      },
      Pq = qq => {
        var Eq;
        const gq = null !== (Eq = qq.closest(Hq)) && void 0 !== Eq ? Eq : qq.querySelector(Hq);
        return gq ? oq(gq) : null
      },
      Qq = qq => {
        for (const Eq of document.querySelectorAll(Hq)) Eq.contains(qq) || oq(Eq)
      },
      yq = qq => null !== qq.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      tq = qq => {
        const Eq = qq ? document.elementFromPoint(qq.x, qq.y) : null;
        return !(null === Eq || void 0 === Eq || !Eq.closest("[data-pad-repeat]"))
      },
      rq = qq => {
        var Eq;
        return null !== (Eq = [...qq.querySelectorAll("[data-pad-back]")].find(xq.p)) && void 0 !== Eq ? Eq : null
      },
      vq = qq => {
        const Eq = rq(qq);
        return !!Eq && (jq(Eq), !0)
      },
      hq = qq => {
        var Eq, gq, Yq, lq;
        return null !== (Eq = null !== (gq = null !== (Yq = qq.getAttribute("data-pad-key")) && void 0 !== Yq ? Yq : qq.getAttribute("href")) && void 0 !== gq ? gq : null === (lq = qq.querySelector("a[href]")) || void 0 === lq ? void 0 : lq.getAttribute("href")) && void 0 !== Eq ? Eq : null
      }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);