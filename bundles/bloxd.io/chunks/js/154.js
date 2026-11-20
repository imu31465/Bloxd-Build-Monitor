export const id = 154;
export const ids = [154];
export const modules = {
  8432: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Yb
    });
    var Ab = Ub(19),
      Mb = Ub(1134),
      Tb = Ub(4673),
      Eb = Ub(1023);

    function Yb(bb) {
      let {
        note: ab
      } = bb;
      const {
        t: Ub
      } = (0, Mb.A)(), {
        clientEscMenuOptions: Yb
      } = (0, Ab.n)(["clientEscMenuOptions"]);
      return (0, Eb.jsx)(Tb.d, {
        label: Ub("touchSettings:actionButtons"),
        checked: Yb.touchActionButtons,
        onClick: bb => {
          Ab.c.setClientEscMenuOptions({
            touchActionButtons: bb
          })
        },
        circleInfoText: Ub("touchSettings:actionButtonsInfo"),
        note: ab
      })
    }
  },
  8427: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => GU,
      e: () => hU
    });
    var Ab = Ub(1134),
      Mb = Ub(52),
      Tb = Ub(1874),
      Eb = Ub(1889),
      Yb = Ub(984),
      Bb = Ub.n(Yb),
      eb = Ub(1352),
      vb = Ub(19),
      Lb = Ub(101),
      Pb = Ub(116),
      Xb = Ub(4673),
      jb = Ub(2268),
      Rb = Ub(294),
      kb = Ub(1897),
      yb = Ub(1901),
      Zb = Ub(8430),
      Db = Ub(8432),
      zb = Ub(307),
      xb = Ub(1023);
    const ib = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var fb = Ub(8441);
    var mb = Ub(1384),
      pb = Ub(1260),
      Nb = Ub(990),
      Wb = Ub(1304),
      Hb = Ub(2286);
    const Ib = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(Hb.J.map((bb => [bb, "menu"])))
      },
      db = bb => Hb.F.filter((ab => Ib[ab] === bb)),
      Fb = new Set(db("cluster")),
      hb = ["cluster"],
      Gb = [...hb, ...Hb.F.filter((bb => !hb.includes(bb) && !Ib[bb]))],
      Qb = Gb.flatMap((bb => [bb, ...db(bb)])).map((bb => ({
        id: bb,
        label: `hudLayout:${bb}`,
        ...Hb.C[bb],
        parent: Ib[bb]
      }))),
      qb = Object.fromEntries(Qb.map((bb => [bb.id, bb]))),
      ub = "data-hud-el";

    function rb(bb, ab, Ub, Ab) {
      const Mb = Ub(function(bb, ab) {
          return "attack" !== bb || ab ? qb[bb].label : "hudLayout:attackContext"
        }(bb, ab)),
        Tb = Ab[bb];
      return Tb ? Ub("hudLayout:slotWithKey", {
        slot: Mb,
        key: Tb
      }) : Mb
    }

    function Kb(bb, ab, Ub, Ab) {
      return bb.map((bb => rb(bb, ab, Ub, Ab))).join(", ")
    }

    function ob(bb) {
      let {
        className: ab,
        keepPlace: Ub
      } = bb;
      return Ub ? (0, xb.jsx)("div", {
        className: Bb()(ab, "Placeholder")
      }) : null
    }

    function lb(bb) {
      let {
        id: ab,
        elements: Ub,
        actionButtons: Mb,
        keyNames: Tb,
        className: Eb,
        keepPlace: Yb,
        onHidden: Bb
      } = bb;
      const {
        t: vb
      } = (0, Ab.A)();
      if (!qb[ab].hide) return (0, xb.jsx)(ob, {
        className: Eb,
        keepPlace: Yb
      });
      const Lb = (0, Hb.z)(Ub, ab);
      return (0, xb.jsx)(eb.M, {
        className: Eb,
        ariaLabel: vb(Lb ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: rb(ab, Mb, vb, Tb)
        }),
        pressed: !Lb,
        onClick: () => {
          Bb(ab, !Lb)
        },
        children: (0, xb.jsx)(Nb.e, {
          name: Lb ? "eye-slash" : "eye"
        })
      })
    }

    function tb(bb) {
      var ab;
      let {
        id: Ub,
        elements: Mb,
        actionButtons: Tb,
        keyNames: Eb,
        className: Yb,
        keepPlace: Bb,
        onlyWhenMoved: vb,
        locked: Lb,
        onReset: Pb
      } = bb;
      const {
        t: Xb
      } = (0, Ab.A)(), jb = qb[Ub], Rb = (0, Hb.R)(null !== (ab = Mb[Ub]) && void 0 !== ab ? ab : Hb.r);
      return !jb.move && !jb.scale || vb && Rb ? (0, xb.jsx)(ob, {
        className: Yb,
        keepPlace: Bb
      }) : (0, xb.jsx)(eb.M, {
        className: Yb,
        disabled: Rb || Lb,
        ariaLabel: Xb("hudLayout:resetElement", {
          name: rb(Ub, Tb, Xb, Eb)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: Ub
        },
        onClick: bb => {
          vb && Cb(bb.currentTarget), Pb(Ub)
        },
        children: (0, xb.jsx)(Nb.e, {
          name: "rotate-left"
        })
      })
    }

    function wb(bb) {
      let {
        id: ab,
        actionButtons: Ub,
        keyNames: Mb,
        className: Tb,
        keepPlace: Eb,
        locked: Yb,
        lockable: Bb,
        onLocked: vb
      } = bb;
      const {
        t: Lb
      } = (0, Ab.A)();
      return Bb || Yb ? (0, xb.jsx)(eb.M, {
        className: Tb,
        ariaLabel: Lb(Yb ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: rb(ab, Ub, Lb, Mb)
        }),
        pressed: Yb,
        active: Yb,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${Yb?"unlock":"lock"}:${ab}`
        },
        onClick: () => {
          vb(ab, !Yb)
        },
        children: (0, xb.jsx)(Nb.e, {
          name: Yb ? "lock" : "lock-open"
        })
      }) : (0, xb.jsx)(ob, {
        className: Tb,
        keepPlace: Eb
      })
    }

    function sb(bb) {
      let {
        className: ab,
        open: Ub,
        name: Mb,
        onToggle: Tb
      } = bb;
      const {
        t: Eb
      } = (0, Ab.A)();
      return (0, xb.jsx)(eb.M, {
        className: ab,
        ariaLabel: Eb(Ub ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Mb
        }),
        pressed: Ub,
        analyticsClick: {
          id: "hud_layout.children",
          value: Ub ? "close" : "open"
        },
        onClick: () => {
          Tb(!Ub)
        },
        children: (0, xb.jsx)(Nb.e, {
          name: Ub ? "angle-up" : "angle-down"
        })
      })
    }

    function gb(bb, ab) {
      var Ub;
      bb.contains(document.activeElement) && ab.focus({
        preventScroll: !0
      }), null === (Ub = (0, Wb.d)()) || void 0 === Ub || Ub.handOverPadFocus(bb, ab)
    }

    function Cb(bb) {
      const ab = bb.closest("[data-hud-row]"),
        Ub = null === ab || void 0 === ab ? void 0 : ab.querySelector(".HudElementRowName");
      return !(!ab || !Ub) && (gb(ab, Ub), !0)
    }
    const Vb = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function Ob(bb, ab) {
      return "joystick" === bb && !ab
    }

    function cb() {
      const {
        t: bb
      } = (0, Ab.A)();
      return (0, xb.jsx)(eb.M, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: bb => {
          const ab = bb.currentTarget;
          if (!Cb(ab)) {
            const bb = function(bb) {
              var ab, Ub;
              const Ab = [bb.previousElementSibling, bb.nextElementSibling].find((bb => bb instanceof HTMLElement && bb.matches(Vb)));
              return null !== (ab = null !== Ab && void 0 !== Ab ? Ab : null === (Ub = bb.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === Ub ? void 0 : Ub.querySelector(`:is(${Vb}):not(.HudFixJoystickButton)`)) && void 0 !== ab ? ab : null
            }(ab);
            bb && gb(ab, bb)
          }
          vb.c.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: bb("hudLayout:fixJoystick")
      })
    }
    var Jb = Ub(75),
      nb = Ub(1213),
      Sb = Ub(1055),
      ba = Ub(2531),
      aa = Ub(8450),
      Ua = Ub(2294),
      Aa = Ub(2313),
      Ma = Ub(2875);
    const Ta = ["J", "C", "A", "P", "U", "X", "G"],
      Ea = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: Hb.J
      });

    function Ya(bb, ab) {
      bb.replaceChildren(...[...ab.childNodes].map((bb => bb.cloneNode(!0))))
    }
    const Ba = bb => ({
      [ub]: bb
    });

    function ea(bb) {
      let {
        id: ab,
        slot: Ub,
        icon: Ab,
        label: Tb,
        hidden: Eb,
        className: Yb,
        face: eb
      } = bb;
      const vb = (0, Mb.useRef)(null);
      return (0, Mb.useLayoutEffect)((() => {
        eb && vb.current && Ya(vb.current, eb)
      }), [eb]), (0, xb.jsxs)("div", {
        className: Bb()("TouchKeyHit", `TouchSlot${Ub}`, Yb, {
          HudPreviewGhost: Eb.has(ab)
        }),
        ...Ba(ab),
        children: [eb && (0, xb.jsx)("div", {
          ref: vb,
          className: Bb()("TouchKey", {
            Labelled: eb.classList.contains("Labelled")
          })
        }), !eb && (0, xb.jsxs)("div", {
          className: Bb()("TouchKey", {
            Labelled: void 0 !== Tb
          }),
          children: [Ab && (0, xb.jsx)(Nb.e, {
            name: Ab
          }), void 0 !== Tb && (0, xb.jsx)("span", {
            className: "TouchKeyLabel",
            children: Tb
          })]
        })]
      })
    }

    function va(bb) {
      let {
        item: ab,
        selected: Ub
      } = bb;
      const Ab = (0, Mb.useRef)(null);
      return (0, Mb.useLayoutEffect)((() => {
        Ab.current && Ya(Ab.current, ab)
      }), [ab]), (0, xb.jsx)("div", {
        ref: Ab,
        className: Bb()("InvenItem", {
          Selected: Ub
        })
      })
    }
    const La = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      Pa = bb => void 0 === bb ? {} : {
        style: {
          "--parked": bb
        }
      };

    function Xa(bb) {
      let {
        id: ab,
        hidden: Ub,
        parked: Ab,
        unslotted: Mb = !1
      } = bb;
      return (0, xb.jsx)("div", {
        className: Bb()("TopRightIcon", Aa.n[ab], {
          HudPreviewGhost: Ub.has(ab),
          [Ua.e]: void 0 !== Ab,
          [Ua.g]: Mb
        }),
        ...Pa(Ab),
        children: (0, xb.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...Ba(ab),
          children: (0, xb.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, xb.jsx)(Nb.e, {
              name: La[ab]
            })
          })
        })
      })
    }

    function ja(bb) {
      let {
        portraitPhone: ab,
        icons: Ub,
        hidden: Ab,
        moved: Mb,
        trayState: Tb
      } = bb;
      const Eb = ab ? (0, Ua.D)(Ub) : [],
        Yb = Ub.filter((bb => "settings" === bb)),
        eb = Ub.filter((bb => "settings" !== bb && !Eb.includes(bb))).reverse(),
        vb = Eb.length > 0 && "gone" === Tb,
        Lb = [...Yb, ...vb ? ["tray"] : [], ...eb].filter((bb => "tray" === bb || Ab.has(bb) && !Mb.has(bb))),
        Pb = bb => {
          const ab = Lb.indexOf(bb);
          return ab < 0 ? void 0 : ab
        },
        Xb = (bb, ab) => (0, xb.jsx)(Xa, {
          id: bb,
          hidden: Ab,
          parked: ab ? Pb(bb) : void 0,
          unslotted: ab && Ab.has(bb) && Mb.has(bb)
        }, bb);
      return (0, xb.jsxs)("div", {
        className: Bb()("TopRightIcons TouchInGame", {
          Column: ab
        }),
        children: [Yb.map((bb => Xb(bb, !0))), Eb.length > 0 && (0, xb.jsxs)("div", {
          className: Bb()("TopRightIcon TopRightTrayToggle Open", {
            [Ua.e]: vb
          }),
          ...Pa(Pb("tray")),
          children: [(0, xb.jsx)("div", {
            className: Bb()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== Tb
            }),
            children: (0, xb.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, xb.jsx)(Nb.e, {
                name: "ellipsis"
              })
            })
          }), (0, xb.jsx)("div", {
            className: "TopRightTray",
            children: Eb.map((bb => Xb(bb, !1)))
          })]
        }), eb.map((bb => Xb(bb, !0)))]
      })
    }

    function Ra(bb) {
      let {
        next: ab,
        hidden: Ub
      } = bb;
      return (0, xb.jsx)("div", {
        className: Bb()("HotBarArrow", ab ? "Next" : "Previous", {
          HudPreviewGhost: Ub
        }),
        ...Ba("arrows"),
        children: (0, xb.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, xb.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, xb.jsx)(Nb.e, {
              name: ab ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function ka() {
      return (0, xb.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, xb.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, xb.jsx)("div", {
            className: "SocialBar",
            children: (0, xb.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, xb.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, xb.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, xb.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, xb.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, xb.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, xb.jsx)(Nb.e, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, xb.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, xb.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, xb.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, xb.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, xb.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, xb.jsx)(Nb.e, {
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
    const ya = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      Za = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Da = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      za = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function xa(bb) {
      let {
        presence: ab,
        portraitPhone: Ub,
        hidden: Mb,
        actionButtons: Tb,
        joystickFixed: Eb,
        keysAbove: Yb,
        auraBar: eb,
        trayState: vb,
        moved: Pb
      } = bb;
      const {
        t: Xb
      } = (0, Ab.A)(), {
        faces: jb,
        items: Rb
      } = ab, kb = bb => ({
        HudPreviewGhost: Mb.has(bb)
      });
      return (0, xb.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, xb.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, xb.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, xb.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, xb.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, xb.jsx)("div", {
              className: "InGameHeaderGameName",
              children: Xb("hudLayout:previewGameName")
            })]
          })
        }), (0, xb.jsx)("div", {
          className: "TopLeftElements",
          children: (0, xb.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, xb.jsxs)("div", {
              className: "Chat",
              children: [(0, xb.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [Xb("hudLayout:previewChatLine"), Xb("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), Xb("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((bb => (0, xb.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, xb.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, xb.jsx)("div", {
                      className: "IndividualText",
                      children: bb
                    })
                  })
                }, bb)))
              }), (0, xb.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: Bb()("ChatIconWrapper SmallTextLight", kb("chat")),
                ...Ba("chat"),
                children: (0, xb.jsx)(Nb.e, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, xb.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, xb.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, xb.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, xb.jsx)("div", {
                className: "TopRightIconsContainer",
                ...Ba("menu"),
                children: (0, xb.jsx)(ja, {
                  portraitPhone: Ub,
                  icons: ab.rowIcons,
                  hidden: Mb,
                  trayState: vb,
                  moved: Pb
                })
              })
            }), Lb.featureFlags.useSocialFeatures && (0, xb.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, xb.jsx)(ka, {})
            })]
          })
        }), (0, xb.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, xb.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, xb.jsxs)("div", {
            className: "TouchInteractKey",
            ...Ba("interact"),
            children: [(0, xb.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, xb.jsx)(Nb.e, {
                name: "hand-back-point-up"
              })
            }), (0, xb.jsx)("div", {
              children: Xb("hudLayout:previewInteract")
            })]
          })
        }), (0, xb.jsx)("div", {
          className: "BottomCentre",
          children: (0, xb.jsxs)("div", {
            className: "BottomElements",
            children: [(0, xb.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, xb.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, xb.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...Ba("hotbar"),
                children: (0, xb.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, xb.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, xb.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, xb.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, xb.jsx)(Nb.e, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), eb && (0, xb.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, xb.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, xb.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, Ma.g)("glint"),
                    alt: ""
                  }), (0, xb.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, xb.jsx)("div", {
                  className: "AuraBar",
                  children: (0, xb.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, xb.jsx)("div", {
                className: "HotBarRow",
                children: (0, xb.jsx)("div", {
                  className: Bb()("HotBarContainer Touch", {
                    KeysAbove: Yb
                  }),
                  children: (0, xb.jsxs)("div", {
                    className: "HotBar",
                    ...Ba("hotbar"),
                    children: [(0, xb.jsxs)("div", {
                      className: Bb()("TouchInventoryKeys", {
                        NoAuraBar: !eb
                      }),
                      children: [(0, xb.jsx)("div", {
                        className: Bb()("TouchInventoryKey ShopKey", kb("inventory"), {
                          Hidden: !ab.shop
                        }),
                        ...Ba("inventory"),
                        children: (0, xb.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, xb.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, xb.jsx)(Nb.e, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, xb.jsx)("div", {
                        className: Bb()("TouchInventoryKey BagKey", kb("inventory"), {
                          Hidden: !ab.bag
                        }),
                        ...Ba("inventory"),
                        children: (0, xb.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, xb.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, xb.jsx)(Nb.e, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, xb.jsx)(Ra, {
                      next: !1,
                      hidden: Mb.has("arrows")
                    }), (0, xb.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== Rb && Rb.map(((bb, ab) => (0, xb.jsx)(va, {
                        item: bb,
                        selected: bb.classList.contains("Selected")
                      }, ab))), null === Rb && Da.map((bb => {
                        const ab = za[bb];
                        return (0, xb.jsx)("div", {
                          className: Bb()("InvenItem", {
                            Selected: 0 === bb
                          }),
                          children: ab && (0, xb.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, xb.jsx)(Nb.e, {
                              name: ab
                            })
                          })
                        }, bb)
                      }))]
                    }), (0, xb.jsx)(Ra, {
                      next: !0,
                      hidden: Mb.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, xb.jsx)("div", {
              className: "BottomRightElements",
              children: (0, xb.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== jb && Ta.map((bb => {
                  const ab = jb[bb];
                  return ab && (0, xb.jsx)(ea, {
                    id: ya[bb],
                    slot: bb,
                    face: ab,
                    className: Za[bb],
                    hidden: Mb
                  }, bb)
                })), null === jb && (0, xb.jsxs)(xb.Fragment, {
                  children: [(0, xb.jsx)(ea, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Mb
                  }), (0, xb.jsx)(ea, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Mb
                  }), Tb && (0, xb.jsxs)(xb.Fragment, {
                    children: [(0, xb.jsx)(ea, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Mb
                    }), (0, xb.jsx)(ea, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Mb
                    })]
                  }), !Tb && (0, xb.jsx)(ea, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: Xb("touchKeys:scope"),
                    hidden: Mb
                  }), (0, xb.jsx)(ea, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: Xb("touchKeys:fly"),
                    hidden: Mb
                  }), (0, xb.jsx)(ea, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Mb
                  })]
                })]
              })
            })]
          })
        }), (0, xb.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, xb.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, xb.jsxs)("div", {
              className: Bb()("Joystick Resting HudPreviewJoystick", {
                Floating: !Eb
              }),
              ...Ba("joystick"),
              children: [(0, xb.jsx)("div", {
                className: "JoystickBase"
              }), (0, xb.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function ia() {
      const [bb, ab] = (0, Mb.useState)({}), Ub = (0, Mb.useCallback)((bb => {
        ab((ab => [...new Set([...Object.keys(ab), ...Object.keys(bb)])].every((Ub => ab[Ub] === bb[Ub])) ? ab : bb))
      }), []);
      return [bb, Ub]
    }
    const fa = .05;

    function ma(bb) {
      var ab;
      let {
        selected: Ub,
        layout: Mb,
        actionButtons: Tb,
        keyNames: Eb,
        overlaps: Yb,
        scaleCaps: vb,
        joystickFixed: Lb,
        onScale: Pb,
        onHidden: Xb,
        onReset: jb,
        locked: Rb,
        lockable: kb,
        onLocked: yb,
        extra: Zb
      } = bb;
      const {
        t: Db
      } = (0, Ab.A)(), zb = Ub ? qb[Ub] : null, ib = null !== Ub && Rb.has(Ub), fb = (Ub && Mb.hudElements[Ub] || Hb.r)[2], mb = null !== (ab = Ub && vb[Ub]) && void 0 !== ab ? ab : Hb.j, pb = bb => {
        Ub && Pb(Ub, Math.min(mb, Math.round(100 * (fb + .1 * bb)) / 100))
      };
      return (0, xb.jsxs)(xb.Fragment, {
        children: [(0, xb.jsxs)("div", {
          className: Bb()("HudQuickName SmallTextBold", {
            Overlap: Yb.length > 0
          }),
          children: [Yb.length > 0 && (0, xb.jsx)(Nb.e, {
            name: "triangle-exclamation"
          }), zb ? rb(zb.id, Tb, Db, Eb) : Db("hudLayout:fullScreenHint"), Yb.length > 0 && (0, xb.jsx)("span", {
            className: "HudQuickOverlap",
            children: Db("hudLayout:overlapsShort", {
              names: Kb(Yb, Tb, Db, Eb)
            })
          })]
        }), (null === zb || void 0 === zb ? void 0 : zb.scale) && (0, xb.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, xb.jsx)(eb.M, {
            disabled: ib || fb <= Hb.l,
            ariaLabel: Db("hudLayout:smaller"),
            onClick: () => {
              pb(-1)
            },
            children: (0, xb.jsx)(Nb.e, {
              name: "minus"
            })
          }), (0, xb.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*fb)}%`
          }), (0, xb.jsx)(eb.M, {
            disabled: ib || fb >= mb,
            ariaLabel: Db("hudLayout:larger"),
            onClick: () => {
              pb(1)
            },
            children: (0, xb.jsx)(Nb.e, {
              name: "plus"
            })
          })]
        }), (zb || Zb) && (0, xb.jsxs)("div", {
          className: "HudQuickActions",
          children: [zb && (0, xb.jsxs)(xb.Fragment, {
            children: [(0, xb.jsx)(wb, {
              id: zb.id,
              actionButtons: Tb,
              keyNames: Eb,
              locked: ib,
              lockable: kb(zb.id),
              onLocked: yb
            }), (0, xb.jsx)(lb, {
              id: zb.id,
              elements: Mb.hudElements,
              actionButtons: Tb,
              keyNames: Eb,
              onHidden: Xb
            }), (0, xb.jsx)(tb, {
              id: zb.id,
              elements: Mb.hudElements,
              actionButtons: Tb,
              keyNames: Eb,
              locked: ib,
              onReset: jb
            }), Ob(zb.id, Lb) && (0, xb.jsx)(cb, {})]
          }), Zb]
        })]
      })
    }
    var pa = Ub(1047),
      Na = Ub(4084);
    const Wa = "HudPreviewDoc",
      Ha = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      Ia = new Set([Wa, ...Object.values(Ha)]),
      da = new Set(Hb.F.map(Aa.C)),
      Fa = new Set(Aa.l),
      ha = 'style, link[rel="stylesheet"]';

    function Ga(bb, ab, Ub, Ab) {
      const Mb = new Map,
        Tb = new Set,
        Eb = new URL(bb.baseURI).origin,
        Yb = ab => {
          var Ub;
          if ("LINK" !== ab.nodeName) return !0;
          const Ab = null === (Ub = ab.getAttribute("href")) || void 0 === Ub ? void 0 : Ub.trim();
          if (!Ab) return !1;
          try {
            return new URL(Ab, bb.baseURI).origin === Eb
          } catch {
            return !1
          }
        };
      let Bb = null;
      const eb = () => {
          Bb !== (0 === Tb.size) && (Bb = 0 === Tb.size, null === Ab || void 0 === Ab || Ab(Bb))
        },
        vb = bb => {
          const ab = bb.cloneNode(!0);
          if ("LINK" === ab.tagName) {
            Tb.add(ab);
            const bb = () => {
              Tb.delete(ab), eb()
            };
            ab.addEventListener("load", bb), ab.addEventListener("error", bb), Ub && ab.addEventListener("load", Ub)
          }
          return ab
        },
        Lb = () => {
          const Ab = function(bb) {
              const ab = [...bb.body.children].filter((bb => bb.matches(ha)));
              return [...bb.head.querySelectorAll(ha), ...ab]
            }(bb).filter(Yb),
            Eb = new Set(Ab);
          for (const [bb, ab] of Mb) Eb.has(bb) || (ab.remove(), Mb.delete(bb), Tb.delete(ab));
          let Bb = null;
          for (let bb = Ab.length - 1; bb >= 0; bb--) {
            const Tb = Ab[bb];
            let Eb = Mb.get(Tb);
            Eb ? "STYLE" === Tb.tagName && Eb.textContent !== Tb.textContent && (Eb.textContent = Tb.textContent, null === Ub || void 0 === Ub || Ub()) : (Eb = vb(Tb), Mb.set(Tb, Eb), ab.head.insertBefore(Eb, Bb)), Bb = Eb
          }
          eb()
        };
      Lb();
      const Pb = new MutationObserver(Lb);
      return Pb.observe(bb.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), Pb.observe(bb.body, {
        childList: !0
      }), () => {
        Pb.disconnect()
      }
    }

    function Qa(bb, ab, Ub) {
      let {
        keysAbove: Ab
      } = Ub;
      const Mb = [...bb.documentElement.classList].filter((bb => !Ia.has(bb) && !Fa.has(bb))),
        Tb = [...ab.documentElement.classList].filter((bb => Fa.has(bb))),
        Eb = [Wa, Ha.hotbar, Ha.hasShop, Ha.hasBag];
      Ab && Eb.push(Ha.keysAbove), ab.documentElement.className = [...Mb, ...Eb, ...Tb].join(" ")
    }
    const qa = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function ua(bb, ab, Ub, Ab, Mb) {
      const Tb = (0, Hb.G)(Ub, Ab, "joystick"),
        Eb = (0, Aa.D)((0, Aa.S)(Ub, Ab, Mb), Ab),
        Yb = Eb.classes.filter((bb => !da.has(bb))),
        Bb = ab.documentElement;
      (0, Aa.Y)({
        ...Eb,
        classes: Yb
      }, {
        vars: Bb,
        safe: Bb,
        classes: Bb
      });
      const eb = (0, Aa.J)(Ub.hudLayouts[Ab].hudSafe, window.innerWidth, window.innerHeight, ra(), (0, Aa.W)(ab));
      Bb.style.setProperty("--preview-joystick-shift-left", `${eb[3]}px`), Bb.style.setProperty("--preview-joystick-shift-bottom", `${eb[2]}px`), Bb.style.setProperty("--preview-joystick-scale", String(Tb[2])), (0, Na.c)(Bb, ab, Ub, Ab);
      for (const vb of qa) Bb.style.setProperty(vb, bb.documentElement.style.getPropertyValue(vb) || "0px")
    }

    function ra() {
      return (0, Aa.Q)(vb.c.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function Ka(bb) {
      return (0, Aa.u)(ra(), (0, Aa.W)(bb))
    }

    function oa(bb, ab, Ub) {
      const Ab = bb.documentElement.style,
        Mb = (0, Aa.N)(ab),
        Tb = Ab.getPropertyValue(Mb);
      try {
        return Ub((bb => {
          Ab.setProperty(Mb, String(bb))
        }))
      } finally {
        "" === Tb ? Ab.removeProperty(Mb) : Ab.setProperty(Mb, Tb)
      }
    }

    function la(bb, ab) {
      const [Ub, Ab] = oa(bb, "hotbar", (ab => {
        const Ub = Ub => {
          var Ab, Mb;
          return ab(Ub), null !== (Ab = null === (Mb = bb.querySelector(".HotBarGameItemsContainer")) || void 0 === Mb ? void 0 : Mb.getBoundingClientRect().width) && void 0 !== Ab ? Ab : 0
        };
        return [Ub(1), Ub(Hb.j)]
      }));
      return Ub <= 0 ? Hb.j : Math.min(Hb.j, Math.max(1, Math.floor(Ab / Ub / ab + 1e-6) * ab))
    }
    const ta = 3,
      wa = .5,
      sa = bb => bb.right - bb.left;
    const ga = (bb, ab) => Math.abs((0, aa.b)(bb).x - (0, aa.b)(ab).x) + Math.abs((0, aa.b)(bb).y - (0, aa.b)(ab).y) + Math.abs(sa(bb) - sa(ab));

    function Ca(bb, ab, Ub, Ab, Mb) {
      let {
        canKeep: Tb = () => !0,
        passes: Eb = ta,
        before: Yb,
        keysAboveOf: Bb
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const eb = void 0 !== Bb && Bb(bb) !== Bb(ab),
        vb = ab.hudLayouts[Ub].hudLocked.filter((bb => Tb(bb) && !(eb && "inventory" === bb))),
        Lb = new Set(vb);
      if (0 === Lb.size) return ab;
      const Pb = [...Fb].filter((Ab => !vb.includes(Ab) && (0, Hb.G)(bb, Ub, Ab).join() === (0, Hb.G)(ab, Ub, Ab).join())),
        Xb = bb => {
          const ab = (0, aa.x)(Pb.flatMap((ab => bb[ab] ? [bb[ab]] : [])));
          return {
            ...bb,
            cluster: null !== ab && void 0 !== ab ? ab : void 0
          }
        },
        jb = bb => {
          const ab = Mb(bb);
          return ab && Xb(ab)
        },
        Rb = Yb ? Xb(Yb) : jb(bb);
      let kb = Rb && jb(ab);
      if (!Rb || !kb) return ab;
      let yb = ab;
      for (let Zb = 0; Zb < Eb && Lb.size > 0; Zb++) {
        const bb = new Map;
        for (const ab of Lb) {
          const Mb = Rb[ab],
            Tb = kb[ab],
            Eb = Mb && Tb ? Va(ab, (0, Hb.G)(yb, Ub, ab), Mb, Tb, Ab) : null;
          Eb ? bb.set(ab, Eb) : Lb.delete(ab)
        }
        if (0 === bb.size) break;
        let Mb = yb;
        for (const [ab, Ab] of bb) Mb = (0, Hb.gb)(Mb, Ub, ab, Ab);
        const Tb = jb(Mb);
        if (!Tb) return ab;
        let Eb = yb;
        for (const [ab, Ab] of bb) {
          const bb = Tb[ab];
          bb && ga(Rb[ab], bb) < ga(Rb[ab], kb[ab]) - wa ? Eb = (0, Hb.gb)(Eb, Ub, ab, Ab) : Lb.delete(ab)
        }
        if (Eb === yb) break;
        const Yb = [...bb.keys()].every((bb => Lb.has(bb)));
        if (yb = Eb, kb = Yb ? Tb : jb(yb), !kb) return ab
      }
      return Mb(yb), yb
    }

    function Va(bb, ab, Ub, Ab, Mb) {
      let [Tb, Eb, Yb] = ab;
      const Bb = Hb.C[bb],
        eb = {};
      Bb.scale && sa(Ab) > 0 && Math.abs(sa(Ub) - sa(Ab)) > wa && (eb.scale = Math.max(Hb.l, Math.min(Hb.j, Yb * sa(Ub) / sa(Ab))));
      const vb = (0, aa.b)(Ub).x - (0, aa.b)(Ab).x,
        Lb = (0, aa.b)(Ub).y - (0, aa.b)(Ab).y;
      return Bb.move && (Math.abs(vb) > wa || Math.abs(Lb) > wa) && (eb.dx = Tb + vb / Mb.width, eb.dy = Eb + Lb / Mb.height), void 0 === eb.scale && void 0 === eb.dx ? null : eb
    }
    let Oa = 0;

    function ca() {
      return Oa > 0
    }
    const Ja = bb => 0 === bb.dx && 0 === bb.dy,
      na = .001,
      Sa = bb => Math.abs(bb.dx) >= 5e-4 || Math.abs(bb.dy) >= 5e-4 ? bb : {
        dx: bb.dx,
        dy: bb.dy < 0 ? -.001 : na
      };

    function bU(bb) {
      let {
        preview: ab,
        stageRef: Ub,
        ringRef: Ab,
        centreLineRef: Tb,
        snapCentre: Eb,
        ready: Yb,
        measure: Bb,
        k: eb,
        viewport: vb,
        boxes: Lb,
        pieces: Pb,
        selected: Xb,
        insets: jb,
        layout: Rb,
        canMove: kb,
        onSelect: yb,
        onMove: Zb
      } = bb;
      const Db = (0, Mb.useRef)(null),
        zb = (0, Mb.useCallback)((() => null !== Db.current), []),
        xb = (bb, ab) => {
          if (!ab) return null;
          const Ub = (0, aa.b)(bb.origin),
            Ab = (0, aa.b)(ab),
            Mb = (bb.to.dx - bb.from.dx) * vb.width,
            Tb = (bb.to.dy - bb.from.dy) * vb.height,
            Eb = ab.right - ab.left,
            Yb = ab.bottom - ab.top;
          return {
            skew: {
              x: Ab.x - Ub.x - Mb,
              y: Ab.y - Ub.y - Tb
            },
            box: {
              left: Ub.x - Eb / 2,
              top: Ub.y - Yb / 2,
              right: Ub.x + Eb / 2,
              bottom: Ub.y + Yb / 2
            }
          }
        },
        ib = (bb, Ub) => {
          var Mb;
          const Eb = Db.current;
          if (!Eb || Eb.pointerId !== bb.pointerId) return;
          Db.current = null, null === (Mb = Tb.current) || void 0 === Mb || Mb.classList.remove("Shown", "Snapped");
          const Yb = Ab.current;
          if (Yb && null !== Eb.ringStyle && Yb.setAttribute("style", Eb.ringStyle), Ub && Eb.moved) {
            const bb = Ja(Eb.to) ? null : Bb(Eb.id),
              ab = bb ? (0, aa.w)(bb, (0, aa.v)(vb.width, vb.height, jb)) : {
                x: 0,
                y: 0
              },
              Ub = {
                dx: Eb.to.dx + ab.x / vb.width,
                dy: Eb.to.dy + ab.y / vb.height
              },
              Ab = Ja(Eb.to) ? Ub : Sa(Ub);
            Zb(Eb.id, Ab.dx, Ab.dy)
          } else ab(Eb.id, null), Ub && Eb.tapPick && yb(Eb.tapPick)
        };
      return {
        busy: zb,
        handlers: {
          onPointerDown: bb => {
            var ab;
            if (!Yb || Db.current || !bb.target.closest(".HudPreviewHandle")) return;
            const Ab = Ub.current.getBoundingClientRect(),
              Mb = {
                x: (bb.clientX - Ab.left) / eb,
                y: (bb.clientY - Ab.top) / eb
              },
              Tb = (0, aa.s)(Mb, Pb, 40 / eb),
              Eb = "cluster" === Xb && void 0 !== Lb.cluster && null !== (0, aa.s)(Mb, [{
                id: "cluster",
                box: Lb.cluster
              }], 40 / eb),
              Bb = "menu" === Xb && void 0 !== Lb.menu && (0, aa.c)(Lb.menu, Mb) && ("menu" === Tb || null !== Tb && (0, Ua.w)(Tb, Rb.hudElements[Tb])),
              vb = Eb ? "cluster" : Bb ? "menu" : null,
              jb = null !== vb,
              Zb = null !== vb && void 0 !== vb ? vb : Tb;
            if (!Zb) return;
            if (function(bb) {
                Oa++;
                const ab = Ub => {
                  Ub.pointerId === bb && (Oa = Math.max(0, Oa - 1), window.removeEventListener("pointerup", ab, !0), window.removeEventListener("pointercancel", ab, !0))
                };
                window.addEventListener("pointerup", ab, !0), window.addEventListener("pointercancel", ab, !0)
              }(bb.pointerId), !kb(Zb)) return void yb(jb && Tb ? Tb : Zb);
            yb(Zb);
            const [zb, xb] = null !== (ab = Rb.hudElements[Zb]) && void 0 !== ab ? ab : [0, 0], ib = {
              dx: zb,
              dy: xb
            }, fb = {
              skew: {
                x: 0,
                y: 0
              },
              box: Lb[Zb]
            };
            Db.current = {
              id: Zb,
              pointerId: bb.pointerId,
              startX: bb.clientX,
              startY: bb.clientY,
              origin: Lb[Zb],
              from: ib,
              to: ib,
              moved: !1,
              home: Ja(ib) ? {
                centre: (0, aa.b)(Lb[Zb]),
                anchor: fb
              } : null,
              away: Ja(ib) ? null : fb,
              anchor: fb,
              ringStyle: null,
              tapPick: jb ? Tb : null
            }, bb.currentTarget.setPointerCapture(bb.pointerId)
          },
          onPointerMove: bb => {
            const Ub = Db.current;
            if (!Ub || Ub.pointerId !== bb.pointerId) return;
            const Mb = bb.clientX - Ub.startX,
              Yb = bb.clientY - Ub.startY;
            if (!Ub.moved && Math.hypot(Mb, Yb) < 5) return;
            const Lb = !Ub.moved;
            var Pb, Xb;
            (Ub.moved = !0, Lb) && (Ub.ringStyle = null !== (Pb = null === (Xb = Ab.current) || void 0 === Xb ? void 0 : Xb.getAttribute("style")) && void 0 !== Pb ? Pb : null);
            const Rb = (0, aa.v)(vb.width, vb.height, jb);
            if (!Ub.home) {
              var kb;
              Ub.to = {
                dx: 0,
                dy: 0
              }, ab(Ub.id, Ub.to);
              const bb = Bb(Ub.id),
                Ab = null !== (kb = xb(Ub, bb)) && void 0 !== kb ? kb : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: Ub.origin
                },
                Mb = (0, aa.b)(Ub.origin);
              Ub.home = {
                centre: bb ? (0, aa.b)(bb) : {
                  x: Mb.x - Ub.from.dx * vb.width,
                  y: Mb.y - Ub.from.dy * vb.height
                },
                anchor: Ab
              }
            }
            const yb = Ub.home;
            let Zb = !1;
            const zb = bb => {
                Zb = !1;
                let Ab = (0, aa.h)(bb.box, Mb / eb, Yb / eb, Rb);
                const Tb = vb.width / 2;
                if (Eb && Math.abs((0, aa.b)(Ub.origin).x + Ab.x - Tb) <= 8 / eb) {
                  const ab = Tb - (0, aa.b)(Ub.origin).x,
                    Mb = (0, aa.h)(bb.box, ab, Ab.y, Rb);
                  Zb = Math.abs(Mb.x - ab) < .01, Zb && (Ab = Mb)
                }
                const Bb = (0, aa.o)(Ub.from, Ab.x - bb.skew.x, Ab.y - bb.skew.y, vb.width, vb.height);
                Ub.to = Sa(Bb), Ub.anchor = bb, ab(Ub.id, Ub.to)
              },
              ib = (0, aa.h)(yb.anchor.box, Mb / eb, Yb / eb, Rb),
              fb = Tb.current,
              mb = (0, aa.b)(Ub.origin),
              pb = ((0, Hb.S)(Ub.id) ? 20 : 6) / eb;
            if (Math.abs(mb.x + ib.x - yb.centre.x) <= pb && Math.abs(mb.y + ib.y - yb.centre.y) <= pb) Ub.to = {
              dx: 0,
              dy: 0
            }, Ub.anchor = yb.anchor, Zb = Eb && Math.abs(yb.centre.x - vb.width / 2) < 1, ab(Ub.id, Ub.to);
            else if (Ub.away) zb(Ub.away);
            else {
              var Nb;
              zb(yb.anchor), Ub.away = null !== (Nb = xb(Ub, Bb(Ub.id))) && void 0 !== Nb ? Nb : yb.anchor, zb(Ub.away)
            }
            null === fb || void 0 === fb || fb.classList.add("Shown"), null === fb || void 0 === fb || fb.classList.toggle("Snapped", Zb), (bb => {
              const ab = Ab.current;
              if (ab) {
                const {
                  skew: Ub,
                  box: Ab
                } = bb.anchor;
                ab.style.left = Ab.left * eb + "px", ab.style.top = Ab.top * eb + "px", ab.style.width = (Ab.right - Ab.left) * eb + "px", ab.style.height = (Ab.bottom - Ab.top) * eb + "px", ab.style.translate = `${((bb.to.dx-bb.from.dx)*vb.width+Ub.x)*eb}px ${((bb.to.dy-bb.from.dy)*vb.height+Ub.y)*eb}px`
              }
            })(Ub)
          },
          onPointerUp: bb => {
            ib(bb, !0)
          },
          onPointerCancel: bb => {
            ib(bb, !1)
          }
        }
      }
    }

    function aU(bb, ab) {
      return Object.keys(bb).filter((bb => bb !== ab)).map((ab => bb[ab]))
    }

    function UU(bb) {
      const ab = [],
        Ub = ab => (0, Hb.S)(ab) && !bb.documentElement.classList.contains((0, Aa.G)(ab));
      for (const Eb of bb.querySelectorAll(`[${ub}]`)) {
        const bb = Ub(Eb.getAttribute(ub)) ? Eb.querySelector(".ScaleOnHover") : null,
          Ab = (null !== bb && void 0 !== bb ? bb : Eb).getBoundingClientRect();
        (Ab.width > 0 || Ab.height > 0) && ab.push({
          id: Eb.getAttribute(ub),
          box: {
            left: Ab.left,
            top: Ab.top,
            right: Ab.right,
            bottom: Ab.bottom
          }
        })
      }
      const Ab = bb => (0, aa.x)(ab.filter((ab => {
          let {
            id: Ub
          } = ab;
          return bb(Ub)
        })).map((bb => {
          let {
            box: ab
          } = bb;
          return ab
        }))),
        Mb = {};
      for (const Eb of new Set(ab.map((bb => bb.id)))) Mb[Eb] = Ab((bb => bb === Eb));
      const Tb = Ab((bb => Fb.has(bb)));
      return Tb && (Mb.cluster = Tb), {
        boxes: Mb,
        pieces: ab
      }
    }

    function AU(bb, ab, Ub) {
      const Ab = ab.right - ab.left,
        Mb = ab.bottom - ab.top;
      return oa(bb, "cluster", (ab => {
        const Tb = Ub => {
            ab(Ub);
            const Ab = [...bb.querySelectorAll(`[${ub}]:not(.HudPreviewGhost)`)].filter((bb => Fb.has(bb.getAttribute(ub)))).map((bb => {
                const ab = bb.getBoundingClientRect();
                return {
                  left: ab.left,
                  top: ab.top,
                  right: ab.right,
                  bottom: ab.bottom
                }
              })),
              Mb = (0, aa.x)(Ab);
            return Mb ? {
              w: Mb.right - Mb.left,
              h: Mb.bottom - Mb.top
            } : null
          },
          Eb = bb => !bb || bb.w <= Ab && bb.h <= Mb,
          Yb = Tb(1),
          Bb = Tb(Hb.j);
        if (!Yb || Eb(Bb)) return Hb.j;
        const eb = (bb, ab, Ub) => ab > bb ? 1 + (Ub - bb) * (Hb.j - 1) / (ab - bb) : Hb.j;
        let vb = Math.floor(Math.min(Hb.j, eb(Yb.w, Bb.w, Ab), eb(Yb.h, Bb.h, Mb)) / Ub + 1e-6) * Ub;
        for (; vb > 1 && !Eb(Tb(vb));) vb = Math.round(100 * (vb - Ub)) / 100;
        return Math.max(1, vb)
      }))
    }

    function MU(bb) {
      Qa(document, bb, {
        keysAbove: !1
      });
      const ab = parseFloat(getComputedStyle(bb.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        Ub = Number.isFinite(ab) && ab < 0;
      return Qa(document, bb, {
        keysAbove: Ub
      }), Ub
    }

    function TU(bb, ab) {
      let {
        layout: Ub,
        orientation: Ab,
        viewport: Tb,
        replicaKey: Eb,
        joystickFixed: Yb,
        busy: Bb
      } = ab;
      const [eb, vb] = (0, Mb.useState)(null), [Lb, Pb] = (0, Mb.useState)({
        boxes: {},
        pieces: []
      }), [Xb, jb] = (0, Mb.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [Rb, kb] = (0, Mb.useState)(!1), [yb, Zb] = (0, Mb.useState)(!1), [Db, zb] = (0, Mb.useState)(!1), xb = (0, Mb.useCallback)((bb => {
        Zb(bb), bb && zb(!0)
      }), []), ib = Ub.hudLayouts[Ab].hudSafe, fb = (0, Mb.useCallback)((() => {
        var ab;
        const Ub = null === (ab = bb.current) || void 0 === ab ? void 0 : ab.contentDocument;
        null !== Ub && void 0 !== Ub && Ub.body && vb(Ub)
      }), [bb]), mb = (0, Mb.useCallback)((() => {
        eb && ((0, Ua.A)(eb), Pb(UU(eb)), jb(function(bb, ab) {
          const Ub = Ka(bb),
            [Ab, Mb, Tb, Eb] = ab ? (0, Aa.y)(ab, window.innerWidth, window.innerHeight, Ub) : Ub;
          return {
            top: Ab,
            right: Mb,
            bottom: Tb,
            left: Eb
          }
        }(eb, ib)))
      }), [eb, ib]), pb = (0, Mb.useCallback)((() => {
        eb && kb(MU(eb))
      }), [eb]), Nb = (0, Mb.useRef)((() => {}));
      return Nb.current = () => {
        pb(), Bb() || mb()
      }, (0, Mb.useLayoutEffect)((() => {
        if (eb) return Ga(document, eb, (() => {
          Nb.current()
        }), xb)
      }), [eb, xb]), (0, Mb.useLayoutEffect)(pb, [pb, Tb]), (0, Mb.useLayoutEffect)((() => {
        eb && (Qa(document, eb, {
          keysAbove: Rb
        }), ua(document, eb, Ub, Ab, Yb), pb(), mb())
      }), [eb, Ub, Ab, Rb, Eb, Yb, Tb, mb, pb]), (0, Mb.useEffect)((() => {
        var bb;
        if (!eb) return;
        const ab = new ResizeObserver((() => {
          Bb() || mb()
        }));
        for (const Ub of eb.querySelectorAll(`[${ub}]`)) ab.observe(Ub);
        return null === (bb = eb.fonts) || void 0 === bb || bb.ready.then(mb), () => {
          ab.disconnect()
        }
      }), [eb, mb, Bb, Eb]), {
        doc: eb,
        onLoad: fb,
        boxes: Lb.boxes,
        pieces: Lb.pieces,
        insets: Xb,
        keysAbove: Rb,
        ready: yb,
        settled: Db
      }
    }
    const EU = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      YU = (bb, ab, Ub) => {
        const Ab = bb => (0, Ua.w)(bb, Ub.hudElements[bb]);
        return "cluster" === bb && Fb.has(ab) || "cluster" === ab && Fb.has(bb) || "menu" === bb && Ab(ab) || "menu" === ab && Ab(bb) || EU.some((Ab => {
          let [Mb, Tb] = Ab;
          const Eb = Ub.hudElements.hotbar,
            Yb = "inventory" === Tb && Ub.hudLocked.includes(Tb) && void 0 !== Eb && !(0, Hb.R)(Eb);
          return (bb === Mb && ab === Tb || bb === Tb && ab === Mb) && !Yb
        }))
      };
    const BU = ["Above", "Below", "Left", "Right"];

    function eU(bb, ab, Ub, Ab, Mb) {
      const Tb = Ub[bb],
        Eb = (Tb.left + Tb.right) / 2,
        Yb = (Tb.top + Tb.bottom) / 2,
        Bb = (7.5 * ab.length + 14) / Ab,
        eb = 18 / Ab,
        vb = {
          Above: {
            left: Eb - Bb / 2,
            top: Tb.top - eb,
            right: Eb + Bb / 2,
            bottom: Tb.top
          },
          Below: {
            left: Eb - Bb / 2,
            top: Tb.bottom,
            right: Eb + Bb / 2,
            bottom: Tb.bottom + eb
          },
          Left: {
            left: Tb.left - Bb,
            top: Yb - eb / 2,
            right: Tb.left,
            bottom: Yb + eb / 2
          },
          Right: {
            left: Tb.right,
            top: Yb - eb / 2,
            right: Tb.right + Bb,
            bottom: Yb + eb / 2
          }
        },
        Lb = aU(Ub, bb),
        Pb = {
          left: 0,
          top: 0,
          right: Mb.width,
          bottom: Mb.height
        };
      return BU[(0, aa.m)(BU.map((bb => vb[bb])), Lb, {
        bounds: Pb
      })]
    }

    function vU() {
      const [bb, ab] = (0, Sb.e)();
      return (0, Mb.useMemo)((() => ({
        width: bb,
        height: ab
      })), [bb, ab])
    }

    function LU(bb) {
      var ab;
      const {
        layout: Ub,
        orientation: Tb,
        selected: Eb,
        onSelect: Yb,
        onMove: eb,
        canMove: vb,
        actionButtons: Lb,
        joystickFixed: Pb,
        presence: Xb,
        keyNames: Rb,
        maxHeight: kb,
        fill: yb = !1,
        apiRef: Zb
      } = bb, {
        t: Db
      } = (0, Ab.A)(), zb = vU(), ib = (null !== (ab = (0, jb.h)("maxAuraLevel")) && void 0 !== ab ? ab : 0) > 0, fb = Ub.hudLayouts[Tb], mb = (0, Mb.useRef)(null), pb = (0, Mb.useRef)(null), Wb = (0, Mb.useRef)(null), Ib = (0, Mb.useRef)(null), db = (0, Mb.useRef)(null), hb = (0, Mb.useRef)(null), Gb = (0, ba.e)(mb).width, Qb = yb ? 1 : Gb > 0 ? (0, aa.t)(Gb, zb.width, zb.height, kb) : 0, qb = (0, Mb.useRef)((() => !1)), ub = (0, Mb.useCallback)((() => qb.current()), []), {
        doc: Kb,
        onLoad: ob,
        boxes: lb,
        pieces: tb,
        insets: wb,
        keysAbove: sb,
        ready: gb,
        settled: Cb
      } = TU(Wb, {
        layout: Ub,
        orientation: Tb,
        viewport: zb,
        replicaKey: `${Lb}:${Pb}:${ib}`,
        joystickFixed: Pb,
        busy: ub
      }), Vb = (0, Mb.useCallback)((bb => {
        Kb && ua(document, Kb, bb, Tb, Pb)
      }), [Kb, Tb, Pb]), Ob = (0, Mb.useCallback)((bb => Kb && Cb ? (Vb(bb), MU(Kb), function(bb) {
        let {
          boxes: ab,
          pieces: Ub
        } = bb;
        const Ab = Ub.find((bb => "inventory" === bb.id));
        if (!Ab || !ab.inventory) return ab;
        const Mb = (0, aa.b)(ab.inventory),
          Tb = sa(Ab.box) / 2,
          Eb = (Ab.box.bottom - Ab.box.top) / 2;
        return {
          ...ab,
          inventory: {
            left: Mb.x - Tb,
            top: Mb.y - Eb,
            right: Mb.x + Tb,
            bottom: Mb.y + Eb
          }
        }
      }(UU(Kb))) : null), [Kb, Cb, Vb]), cb = (0, Mb.useCallback)((bb => !!Kb && (Vb(bb), MU(Kb))), [Kb, Vb]), nb = (0, Mb.useRef)(null), Sb = (0, Mb.useRef)(null), Ma = (0, Mb.useRef)(Ub);
      Ma.current = Ub;
      const Ta = (0, Mb.useCallback)((() => {
        null !== nb.current && (cancelAnimationFrame(nb.current), nb.current = null)
      }), []);
      (0, Mb.useEffect)((() => Ta), [Ub, Ta]);
      const {
        lockable: Ea
      } = bb, Ya = (0, Mb.useCallback)((bb => {
        if (Vb(bb), !Cb || 0 === Ub.hudLayouts[Tb].hudLocked.length) return;
        const ab = Ub;
        Ta(), nb.current = requestAnimationFrame((() => {
          var Ub;
          if (nb.current = null, Ma.current !== ab) return;
          const Ab = (null === (Ub = Sb.current) || void 0 === Ub ? void 0 : Ub.from) === ab ? Sb.current.boxes : Ob(ab);
          Ab && (Sb.current = {
            from: ab,
            boxes: Ab
          }), Vb(Ab ? Ca(ab, bb, Tb, zb, Ob, {
            canKeep: Ea,
            passes: 1,
            before: Ab,
            keysAboveOf: cb
          }) : bb)
        }))
      }), [Vb, Cb, Ub, Tb, zb, Ob, cb, Ea, Ta]), Ba = bU({
        preview: (bb, ab) => {
          ab ? Ya((0, Hb.gb)(Ub, Tb, bb, ab)) : (Ta(), Vb(Ub))
        },
        stageRef: pb,
        ringRef: Ib,
        centreLineRef: db,
        snapCentre: Ub.hudSnapCentre,
        ready: Cb,
        measure: bb => {
          var ab;
          return Kb && gb && null !== (ab = UU(Kb).boxes[bb]) && void 0 !== ab ? ab : null
        },
        k: Qb,
        viewport: zb,
        boxes: lb,
        pieces: tb,
        selected: Eb,
        insets: wb,
        layout: fb,
        canMove: vb,
        onSelect: Yb,
        onMove: (bb, ab, Ub) => {
          Ta(), eb(bb, ab, Ub)
        }
      });
      (0, Mb.useLayoutEffect)((() => {
        qb.current = Ba.busy
      }), [Ba.busy]);
      const ea = (0, Mb.useRef)([]),
        va = (0, Mb.useRef)(fb.hudElements);
      (0, Mb.useEffect)((() => {
        for (const Mb of Object.keys(fb.hudElements)) {
          var bb, ab, Ub, Ab;
          (null !== (bb = null === (ab = fb.hudElements[Mb]) || void 0 === ab ? void 0 : ab[2]) && void 0 !== bb ? bb : 1) > (null !== (Ub = null === (Ab = va.current[Mb]) || void 0 === Ab ? void 0 : Ab[2]) && void 0 !== Ub ? Ub : 1) && vb(Mb) && !(0, Ua.w)(Mb, fb.hudElements[Mb]) && ea.current.push(Mb)
        }
        va.current = fb.hudElements
      }), [fb.hudElements, vb]), (0, Mb.useEffect)((() => {
        if (!gb) return;
        const bb = ea.current.shift(),
          ab = bb && lb[bb];
        if (!bb || !ab || Ba.busy()) return;
        const Ub = (0, aa.w)(ab, (0, aa.v)(zb.width, zb.height, wb));
        if (0 !== Ub.x || 0 !== Ub.y) {
          var Ab;
          const [ab, Mb] = null !== (Ab = fb.hudElements[bb]) && void 0 !== Ab ? Ab : [0, 0];
          eb(bb, ab + Ub.x / zb.width, Mb + Ub.y / zb.height)
        }
      }), [lb, gb]), (0, Mb.useImperativeHandle)(Zb, (() => ({
        setScale: (bb, ab) => {
          Ya((0, Hb.gb)(Ub, Tb, bb, {
            scale: ab
          }))
        },
        setOpacity: bb => {
          Vb({
            ...Ub,
            hudKeyOpacity: bb
          })
        },
        keepLocks: (bb, ab) => (Ta(), Ca(bb, ab, Tb, zb, Ob, {
          canKeep: Ea,
          keysAboveOf: cb
        })),
        setSafe: bb => {
          Ya((0, Hb.nb)(Ub, Tb, bb)), hb.current && (hb.current.style.inset = (0, Aa.y)(bb, zb.width, zb.height, Ka(null !== Kb && void 0 !== Kb ? Kb : document)).map((bb => bb * Qb + "px")).join(" "))
        }
      })), [Vb, Ya, Ob, cb, Ta, Ea, Kb, Ub, Tb, zb, Qb]);
      const La = new Set(Object.keys(fb.hudElements).filter((bb => (0, Hb.z)(fb.hudElements, bb)))),
        Pa = Eb ? lb[Eb] : void 0,
        Xa = Eb ? rb(Eb, Lb, Db, Rb) : "",
        ja = (0, pa.f)(zb.width, zb.height),
        Ra = Eb ? function(bb, ab, Ub, Ab) {
          const Mb = bb => (0, Hb.z)(Ub.hudElements, bb) || (0, Ua.u)(bb, Ub, Ab);
          if (Mb(bb)) return [];
          const Tb = ab.filter((ab => {
              let {
                id: Ub
              } = ab;
              return "cluster" === bb ? Fb.has(Ub) : Ub === bb
            })),
            Eb = new Set;
          for (const Yb of ab) Yb.id === bb || Eb.has(Yb.id) || YU(bb, Yb.id, Ub) || Mb(Yb.id) || void 0 === Ub.hudElements[bb] && void 0 === Ub.hudElements[Yb.id] || Tb.some((bb => {
            let {
              id: ab,
              box: Ub
            } = bb;
            return ab !== Yb.id && (0, aa.e)(Ub, Yb.box, 2)
          })) && Eb.add(Yb.id);
          return [...Eb]
        }(Eb, tb, fb, ja) : [],
        ka = new Set((0, Ua.q)(fb.hudElements)),
        ya = (0, Ua.E)(fb, (0, Ua.D)(Xb.rowIcons)).state,
        Za = Ra.join(),
        Da = (0, Mb.useRef)(bb.onReady);
      Da.current = bb.onReady, (0, Mb.useEffect)((() => {
        var bb;
        null === (bb = Da.current) || void 0 === bb || bb.call(Da, Cb)
      }), [Cb]);
      const za = (0, Mb.useRef)(bb.onMeasured);
      (0, Mb.useLayoutEffect)((() => {
        za.current = bb.onMeasured
      })), (0, Mb.useEffect)((() => {
        var bb;
        const ab = Kb ? {
          hotbar: la(Kb, fa),
          cluster: AU(Kb, (0, aa.v)(zb.width, zb.height, wb), fa)
        } : {};
        null === (bb = za.current) || void 0 === bb || bb.call(za, lb, Za ? Za.split(",") : [], ab)
      }), [lb, Za, Kb, zb, wb]);
      const ia = bb => ({
        left: bb.left * Qb,
        top: bb.top * Qb,
        width: (bb.right - bb.left) * Qb,
        height: (bb.bottom - bb.top) * Qb
      });
      return (0, xb.jsx)("div", {
        ref: mb,
        className: Bb()("HudPreviewBox", {
          Fill: yb
        }),
        style: {
          height: zb.height * Qb
        },
        children: (0, xb.jsxs)("div", {
          ref: pb,
          className: "HudPreviewStage",
          style: {
            width: zb.width * Qb,
            height: zb.height * Qb
          },
          children: [(0, xb.jsx)("iframe", {
            ref: Wb,
            className: "HudPreviewFrame",
            srcDoc: "<!DOCTYPE html><html><head></head><body></body></html>",
            onLoad: ob,
            title: Db("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: zb.width,
              height: zb.height,
              transform: `scale(${Qb})`
            }
          }), Kb && (0, Jb.createPortal)((0, xb.jsx)(xa, {
            presence: Xb,
            portraitPhone: ja,
            hidden: La,
            actionButtons: Lb,
            joystickFixed: Pb,
            keysAbove: sb,
            auraBar: ib,
            trayState: ya,
            moved: ka
          }), Kb.body), (0, xb.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...Ba.handlers,
            children: [(0, xb.jsx)("div", {
              ref: hb,
              className: "HudPreviewSafeZone",
              style: {
                top: wb.top * Qb,
                right: wb.right * Qb,
                bottom: wb.bottom * Qb,
                left: wb.left * Qb
              }
            }), tb.map(((bb, ab) => {
              let {
                id: Ub,
                box: Ab
              } = bb;
              return (0, xb.jsx)("div", {
                className: "HudPreviewHandle",
                style: ia((0, aa.k)(Ab, 40 / Qb))
              }, `${Ub}:${ab}`)
            })), fb.hudLocked.map((bb => {
              const ab = lb[bb];
              return ab && (0, xb.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: ab.right * Qb,
                  top: ab.top * Qb
                },
                children: (0, xb.jsx)(Nb.e, {
                  name: "lock"
                })
              }, bb)
            })), (0, xb.jsx)("div", {
              ref: db,
              className: "HudPreviewCentreLine",
              style: {
                left: zb.width / 2 * Qb
              }
            }), Eb && Pa && (0, xb.jsx)("div", {
              ref: Ib,
              className: Bb()("HudPreviewRing", {
                Fixed: !vb(Eb),
                Overlap: Ra.length > 0
              }),
              style: ia(Pa),
              children: (0, xb.jsx)("span", {
                className: Bb()("HudPreviewRingLabel", eU(Eb, Xa, lb, Qb, zb)),
                children: Xa
              })
            })]
          })]
        })
      })
    }

    function PU(bb, ab) {
      (0, Mb.useEffect)((() => {
        var Ub;
        null === (Ub = bb.current) || void 0 === Ub || Ub.toggleAttribute("inert", ab)
      }), [bb, ab])
    }
    const XU = "hudFullScreen";

    function jU(bb) {
      let {
        onScale: ab,
        onHidden: Ub,
        onReset: Tb,
        locked: Eb,
        lockable: Yb,
        onLocked: Bb,
        onClose: vb,
        ...Lb
      } = bb;
      const {
        t: Pb
      } = (0, Ab.A)(), Xb = (0, Mb.useRef)(null);
      (0, nb.r)("popup", Xb, vb),
      function(bb) {
        const ab = (0, Mb.useRef)(bb);
        ab.current = bb, (0, Mb.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [XU]: !0
          }, "");
          let bb = !1;
          const Ub = () => {
            bb = !0, ab.current()
          };
          return window.addEventListener("popstate", Ub), () => {
            var ab;
            window.removeEventListener("popstate", Ub), !bb && null !== (ab = window.history.state) && void 0 !== ab && ab[XU] && window.history.back()
          }
        }), [])
      }(vb), (0, Mb.useEffect)((() => {
        function bb(bb) {
          "Escape" === bb.key && (bb.stopPropagation(), vb())
        }
        return window.addEventListener("keydown", bb, !0), () => {
          window.removeEventListener("keydown", bb, !0)
        }
      }), [vb]);
      const {
        selected: jb
      } = Lb, Rb = (0, Mb.useRef)(null), kb = (0, Mb.useRef)(null), [yb, Zb] = (0, Mb.useState)(!1);
      PU(kb, !yb);
      const [Db, zb] = (0, Mb.useState)(null), [ib, fb] = (0, Mb.useState)([]), [mb, pb] = ia(), Nb = (0, Mb.useRef)(Lb.selected);
      Nb.current = Lb.selected;
      const Wb = (0, Mb.useRef)({}),
        Hb = (0, Mb.useCallback)((() => {
          const bb = Rb.current;
          bb && zb(function(bb, ab, Ub) {
            var Ab;
            const {
              innerWidth: Mb,
              innerHeight: Tb
            } = window, Eb = bb.offsetWidth, Yb = bb.offsetHeight, Bb = Math.max(ra()[0], 6), eb = [];
            for (const Pb of [Bb, .2 * Tb, .5 * Tb - Yb / 2, .33 * Tb])
              for (const bb of [.5, .3, .7]) eb.push({
                left: Math.max(0, Math.min(Mb - Eb - 6, Math.max(6, Mb * bb - Eb / 2))),
                top: Pb
              });
            const vb = eb.map((bb => ({
                left: bb.left - 6,
                top: bb.top - 6,
                right: bb.left + Eb + 6,
                bottom: bb.top + Yb + 6
              }))),
              Lb = aU(ab, Ub);
            return eb[(0, aa.m)(vb, Lb, {
              avoid: Ub && null !== (Ab = ab[Ub]) && void 0 !== Ab ? Ab : null
            })]
          }(bb, Wb.current, Nb.current))
        }), []),
        Ib = (0, Mb.useCallback)(((bb, ab, Ub) => {
          fb(ab), pb(Ub), Wb.current = bb, Hb()
        }), [Hb, pb]);
      return (0, Mb.useLayoutEffect)(Hb, [Lb.selected, Hb]), (0, Jb.createPortal)((0, xb.jsxs)("div", {
        ref: Xb,
        className: "HudFullScreenEditor",
        children: [(0, xb.jsx)(LU, {
          ...Lb,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: Ib,
          onReady: Zb,
          lockable: Yb
        }), (0, xb.jsxs)("div", {
          ref: Rb,
          className: "HudFullScreenToolbar",
          style: null === Db ? void 0 : {
            left: Db.left,
            top: Db.top,
            transform: "none"
          },
          children: [(0, xb.jsx)("div", {
            ref: kb,
            className: "HudFullScreenControls",
            children: (0, xb.jsx)(ma, {
              selected: jb,
              layout: Lb.layout.hudLayouts[Lb.orientation],
              actionButtons: Lb.actionButtons,
              keyNames: Lb.keyNames,
              overlaps: ib,
              scaleCaps: mb,
              onScale: ab,
              onHidden: Ub,
              onReset: Tb,
              locked: Eb,
              lockable: Yb,
              onLocked: Bb,
              joystickFixed: Lb.joystickFixed
            })
          }), (0, xb.jsx)(eb.g, {
            className: "HudFullScreenDone",
            onClick: vb,
            padDefaultFocus: !0,
            children: Pb("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const RU = bb => `${Math.round(100*bb)}%`;

    function kU(bb) {
      let {
        info: ab,
        tuple: Ub,
        props: Mb
      } = bb;
      const {
        t: Tb
      } = (0, Ab.A)();
      return (0, xb.jsx)(Xb.g, {
        name: Tb("hudLayout:size"),
        min: Hb.l,
        max: Hb.j,
        step: fa,
        initValue: Ub[2],
        disabled: Mb.locked.has(ab.id),
        selectableMax: Mb.scaleCaps[ab.id],
        cappedNote: Tb("hudLayout:sizeCapped"),
        format: RU,
        onChange: bb => {
          Mb.onScalePreview(ab.id, bb)
        },
        onChangeComplete: bb => {
          Mb.onScale(ab.id, bb)
        }
      })
    }

    function yU(bb) {
      const {
        t: ab
      } = (0, Ab.A)(), {
        present: Ub,
        elements: Tb,
        selected: Eb,
        onSelect: Yb,
        onHidden: eb,
        onReset: vb,
        note: Lb,
        actionButtons: Pb,
        keyNames: Xb,
        sizeBesidePreview: jb,
        locked: Rb,
        lockable: kb,
        onLocked: yb
      } = bb, {
        rowIconsOpen: Zb,
        onRowIconsOpen: Db
      } = bb, zb = (0, Mb.useRef)(null), ib = null !== Eb && (Zb || !(0, Hb.S)(Eb));
      return (0, Mb.useEffect)((() => {
        var bb;
        const ab = Eb ? null === (bb = zb.current) || void 0 === bb ? void 0 : bb.querySelector(`[data-hud-row="${Eb}"]`) : null;
        if (!ab) return;
        const Ub = ab.closest(".SettingsMenuRight"),
          Ab = performance.now();
        let Mb = null;
        const Tb = () => {
            clearInterval(Bb), null === Ub || void 0 === Ub || Ub.removeEventListener("scroll", Yb)
          },
          Yb = () => {
            ca() || Tb()
          },
          Bb = setInterval((() => {
            const bb = performance.now();
            bb - Ab > 1500 ? Tb() : ca() ? Mb = null : null === Mb ? Mb = bb : bb - Mb >= 150 && (Tb(), function(bb) {
              var ab;
              const Ub = bb.closest(".SettingsMenuRight"),
                Ab = null === (ab = bb.closest(".HudLayoutSettings")) || void 0 === ab ? void 0 : ab.querySelector(".HudLayoutPreviewBox");
              if (!Ub || !Ab) return;
              const Mb = Ab.getBoundingClientRect().bottom + 8,
                Tb = Ub.getBoundingClientRect().bottom - 8,
                Eb = bb.getBoundingClientRect();
              Eb.top < Mb ? Ub.scrollBy({
                top: Eb.top - Mb,
                behavior: "smooth"
              }) : Eb.bottom > Tb && Ub.scrollBy({
                top: Math.min(Eb.bottom - Tb, Eb.top - Mb),
                behavior: "smooth"
              })
            }(ab))
          }), 50);
        return null === Ub || void 0 === Ub || Ub.addEventListener("scroll", Yb, {
          passive: !0
        }), Tb
      }), [Eb, ib]), (0, xb.jsx)("div", {
        ref: zb,
        className: "SettingBoxGroup HudElementList",
        children: Qb.filter((bb => Ub.has(bb.id) && (Zb || !(0, Hb.S)(bb.id)))).map((Ub => {
          const Ab = ((bb, ab) => {
              var Ub;
              return null !== (Ub = bb[ab]) && void 0 !== Ub ? Ub : Hb.r
            })(Tb, Ub.id),
            Mb = (0, Hb.z)(Tb, Ub.id),
            zb = Ub.id === Eb,
            ib = Ub.scale && !jb,
            fb = Lb(Ub.id, zb);
          return (0, xb.jsxs)("div", {
            "data-hud-row": Ub.id,
            className: Bb()("SettingBox HudElementRow", {
              Open: zb,
              Hidden: Mb,
              Child: void 0 !== Ub.parent
            }),
            children: [(0, xb.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, xb.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": ib ? zb : void 0,
                onClick: () => {
                  Yb(Ub.id)
                },
                children: [rb(Ub.id, Pb, ab, Xb), Ub.scale && 1 !== Ab[2] && !(zb && ib) && (0, xb.jsx)("span", {
                  className: "HudElementRowSize",
                  children: RU(Ab[2])
                }), ib && (0, xb.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, xb.jsx)(wb, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Ub.id,
                actionButtons: Pb,
                keyNames: Xb,
                locked: Rb.has(Ub.id),
                lockable: kb(Ub.id),
                onLocked: yb
              }), "menu" === Ub.id && (0, xb.jsx)(sb, {
                className: "HudElementRowIcon",
                open: Zb,
                name: rb(Ub.id, Pb, ab, Xb),
                onToggle: Db
              }), "menu" !== Ub.id && (0, xb.jsx)(lb, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Ub.id,
                elements: Tb,
                actionButtons: Pb,
                keyNames: Xb,
                onHidden: eb
              }), (0, xb.jsx)(tb, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: Rb.has(Ub.id),
                id: Ub.id,
                elements: Tb,
                actionButtons: Pb,
                keyNames: Xb,
                onReset: vb
              })]
            }), zb && ib && (0, xb.jsx)(kU, {
              info: Ub,
              tuple: Ab,
              props: bb
            }), fb && (0, xb.jsx)("div", {
              className: "HudElementNote",
              children: fb
            })]
          }, Ub.id)
        }))
      })
    }

    function ZU(bb) {
      let {
        preview: ab,
        quick: Ub,
        onFullScreen: Tb,
        resting: Eb,
        onSidePanel: Yb
      } = bb;
      const {
        t: Bb
      } = (0, Ab.A)(), vb = vU(), Lb = (0, Mb.useRef)(null), {
        width: Pb
      } = (0, ba.e)(Lb), Xb = Math.floor(vb.width * Math.min(1, ab.maxHeight / vb.height)), jb = Pb - Xb - 12, Rb = jb >= 130, kb = Pb > 0;
      (0, Mb.useEffect)((() => {
        kb && Yb(Rb)
      }), [kb, Rb, Yb]);
      const yb = (0, aa.t)(Rb ? Xb : Pb, vb.width, vb.height, ab.maxHeight),
        Zb = Eb ? (0, xb.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: vb.height * yb
          }
        }) : (0, xb.jsx)(LU, {
          ...ab
        }),
        Db = bb => (0, xb.jsxs)(eb.M, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: Bb("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: Tb,
          children: [(0, xb.jsx)(Nb.e, {
            name: "expand"
          }), bb && (0, xb.jsx)("span", {
            children: Bb("hudLayout:fullScreen")
          })]
        });
      return (0, xb.jsxs)("div", {
        ref: Lb,
        className: "SettingBox HudLayoutPreviewBox",
        children: [Pb > 0 && Rb && (0, xb.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, xb.jsx)("div", {
            style: {
              width: Xb
            },
            children: Zb
          }), (0, xb.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, xb.jsx)(ma, {
              selected: ab.selected,
              ...Ub,
              joystickFixed: ab.joystickFixed,
              extra: Db(!ab.selected || jb >= 278)
            })
          })]
        }), Pb > 0 && !Rb && (0, xb.jsxs)(xb.Fragment, {
          children: [Zb, (0, xb.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: Db(!1)
          })]
        })]
      })
    }
    var DU = Ub(2306),
      zU = Ub(4077),
      xU = Ub(2281);
    const iU = bb => {
      const ab = Aa.p * ("sides" === bb ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(ab / 2))
    };

    function fU(bb, ab, Ub) {
      const [Ab, Mb, Tb, Eb] = bb;
      return "sides" === ab ? [Ab, Ub, Tb, Ub] : [Ub, Mb, Ub, Eb]
    }
    const mU = [null, null, null, null],
      pU = bb => `${bb}px`;

    function NU(bb) {
      let {
        safe: ab,
        onPreview: Ub,
        onCommit: Tb
      } = bb;
      const {
        t: Eb
      } = (0, Ab.A)(), Yb = (0, Aa.y)(null !== ab && void 0 !== ab ? ab : mU, window.innerWidth, window.innerHeight, Ka(document).map(Math.round)), Bb = (0, Mb.useRef)(null !== ab && void 0 !== ab ? ab : mU);
      Bb.current = null !== ab && void 0 !== ab ? ab : mU;
      const vb = bb => {
        const ab = Math.min(iU(bb), "sides" === bb ? Math.max(Yb[1], Yb[3]) : Math.max(Yb[0], Yb[2]));
        return (0, xb.jsx)(Xb.g, {
          name: Eb("sides" === bb ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: iU(bb),
          step: 2,
          initValue: ab,
          format: pU,
          onChange: ab => {
            Ub(fU(Bb.current, bb, ab))
          },
          onChangeComplete: Ab => {
            if (Ab === ab) return void Ub(Bb.current);
            const Mb = fU(Bb.current, bb, Ab);
            Bb.current = Mb, Tb(Mb), (0, mb.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: bb
            })
          }
        })
      };
      return (0, xb.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, xb.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, xb.jsx)("div", {
            children: Eb("hudLayout:safeZone")
          }), (0, xb.jsx)(eb.M, {
            active: null === ab,
            pressed: null === ab,
            onClick: () => {
              Tb(null)
            },
            children: Eb("hudLayout:safeZoneAuto")
          })]
        }), vb("sides"), vb("ends")]
      })
    }

    function WU() {
      const {
        t: bb
      } = (0, Ab.A)(), ab = (0, Hb.cb)(), {
        clientEscMenuOptions: Ub
      } = (0, vb.n)(["clientEscMenuOptions"]), Tb = (0, DU.d)(), Eb = ab.hudLayouts[Tb], [Yb, Bb] = (0, Mb.useState)(null), {
        rowIconsOpen: Lb,
        onRowIconsOpen: Pb,
        select: jb
      } = function(bb, ab) {
        const [Ub, Ab] = (0, Mb.useState)((() => Hb.J.some((ab => void 0 !== bb.hudElements[ab] || bb.hudLocked.includes(ab))))), Tb = (0, Mb.useCallback)((bb => {
          ab(bb), (0, Hb.S)(bb) && Ab(!0)
        }), [ab]);
        return {
          rowIconsOpen: Ub,
          onRowIconsOpen: Ab,
          select: Tb
        }
      }(Eb, Bb), [Rb, kb] = (0, Mb.useState)([]), [yb, Zb] = (0, Mb.useState)(null), [Db, zb] = ia(), ib = (0, Mb.useCallback)(((bb, ab, Ub) => {
        kb(ab), zb(Ub);
        const Ab = Object.keys(bb);
        Zb((bb => (null === bb || void 0 === bb ? void 0 : bb.size) === Ab.length && Ab.every((ab => bb.has(ab))) ? bb : new Set(Ab)))
      }), [zb]), {
        gameState: fb
      } = (0, vb.n)(["gameState"]), Nb = (0, xU.k)(), [Wb] = (0, Mb.useState)((() => "inGame" === fb ? function(bb, ab) {
        const Ub = bb.querySelector(".InGameUi .TouchComponentsButtons");
        if (!Ub) return Ea;
        const Ab = {},
          Mb = {};
        for (const eb of Ta) {
          const bb = Ub.querySelector(`.TouchSlot${eb} > .TouchKey`);
          if (bb) {
            var Tb, Eb;
            Ab[eb] = bb.cloneNode(!0);
            const ab = (null !== (Tb = null === (Eb = bb.querySelector(".TouchKeyLabel")) || void 0 === Eb ? void 0 : Eb.textContent) && void 0 !== Tb ? Tb : "").split(/\s+/).filter((bb => !/[\d\xd7]/.test(bb))).join(" ");
            ab && (Mb[eb] = ab)
          }
        }
        const Yb = ab => {
            const Ub = bb.querySelector(`.InGameUi ${ab}`);
            return null !== Ub && !Ub.classList.contains("Hidden")
          },
          Bb = [...bb.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((bb => bb.cloneNode(!0)));
        return {
          faces: Object.keys(Ab).length > 0 ? Ab : null,
          names: Mb,
          shop: Yb(".TouchInventoryKey.ShopKey"),
          bag: Yb(".TouchInventoryKey.BagKey"),
          items: Bb.length > 0 ? Bb : null,
          rowIcons: ab
        }
      }(document, Nb) : Ea)), Ib = (0, Mb.useRef)(null), db = (0, Mb.useRef)(null), Fb = function(bb) {
        const [ab, Ub] = (0, Mb.useState)((() => .4 * window.innerHeight));
        return (0, Mb.useLayoutEffect)((() => {
          var ab;
          const Ab = null === (ab = bb.current) || void 0 === ab ? void 0 : ab.closest(".SettingsMenuRight");
          if (!Ab) return;
          const Mb = () => {
            const bb = Ab.clientHeight < HU ? .4 : .5;
            Ub(Math.max(80, Ab.clientHeight * bb - 24))
          };
          Mb();
          const Tb = new ResizeObserver(Mb);
          return Tb.observe(Ab), () => {
            Tb.disconnect()
          }
        }), [bb]), ab
      }(db), hb = (0, zU.t)(Ub.joystickMode), Gb = Ub.touchActionButtons, ub = (0, Mb.useMemo)((() => function(bb, ab) {
        const Ub = {},
          Ab = [
            ["extra", "X"],
            ["game", "G"]
          ];
        ab || Ab.push(["attack", "P"]);
        for (const [Mb, Tb] of Ab) {
          const ab = bb.names[Tb];
          ab && (Ub[Mb] = ab)
        }
        return Ub
      }(Wb, Gb)), [Wb, Gb]);
      (0, Mb.useEffect)((() => {
        (0, mb.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [rb, ob] = (0, Mb.useState)(!1), [lb, tb] = (0, Mb.useState)(!1), wb = (0, Mb.useRef)(null);
      PU(wb, !lb);
      const [sb, gb] = (0, Mb.useState)(!1), Cb = (0, Mb.useCallback)((() => {
        gb(!1)
      }), []), Vb = (0, Mb.useMemo)((() => new Set(Eb.hudLocked)), [Eb.hudLocked]), Jb = bb => {
        var ab, Ub;
        const Ab = (0, Hb.v)(),
          Mb = bb(Ab);
        (0, Hb.$)(null !== (ab = null === (Ub = Ib.current) || void 0 === Ub ? void 0 : Ub.keepLocks(Ab, Mb)) && void 0 !== ab ? ab : Mb)
      }, nb = (bb, ab) => {
        Jb((Ub => (0, Hb.gb)(Ub, Tb, bb, ab)))
      }, Sb = (bb, ab, Ub) => {
        nb(bb, {
          dx: ab,
          dy: Ub
        }), (0, mb.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${bb}`
        })
      }, ba = (bb, ab) => {
        Jb((Ub => (0, Hb.kb)(Ub, Tb, bb, ab)))
      }, aa = bb => {
        const ab = qb[bb];
        return (ab.move || ab.scale) && ("joystick" !== bb || hb) && !(0, Ua.w)(bb, Eb.hudElements[bb])
      }, Aa = bb => qb[bb].move && ("joystick" !== bb || hb) && !Vb.has(bb), Ma = new Set(Qb.map((bb => bb.id)).filter((bb => {
        const ab = (0, Hb.S)(bb) && !Wb.rowIcons.includes(bb);
        return null === yb || yb.has(bb) || (0, Hb.z)(Eb.hudElements, bb) && !ab
      }))), Ya = {
        present: Ma,
        actionButtons: Gb,
        keyNames: ub,
        scaleCaps: Db,
        sizeBesidePreview: rb,
        elements: Eb.hudElements,
        selected: Yb,
        onSelect: jb,
        rowIconsOpen: Lb,
        onRowIconsOpen: Pb,
        onScalePreview: (bb, ab) => {
          var Ub;
          null === (Ub = Ib.current) || void 0 === Ub || Ub.setScale(bb, ab)
        },
        onScale: (bb, ab) => {
          nb(bb, {
            scale: ab
          }), (0, mb.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${bb}`
          })
        },
        onHidden: (bb, ab) => {
          nb(bb, {
            hidden: ab
          }), (0, mb.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${ab?"hide":"show"}:${bb}`
          })
        },
        onReset: bb => {
          nb(bb, Hb.e)
        },
        locked: Vb,
        lockable: aa,
        onLocked: ba,
        note: (ab, Ub) => {
          const Ab = Ub && Rb.length > 0 ? bb("hudLayout:overlapsNote", {
            names: Kb(Rb, Gb, bb, ub)
          }) : null;
          return Ub && Ob(ab, hb) ? (0, xb.jsxs)(xb.Fragment, {
            children: [Ab && (0, xb.jsx)("span", {
              children: Ab
            }), (0, xb.jsx)("span", {
              children: bb("hudLayout:floatingJoystickNote")
            }), !rb && (0, xb.jsx)(cb, {})]
          }) : Ab || (Ub && Vb.has(ab) ? bb("hudLayout:lockedNote") : Ub && "cluster" === ab ? bb("hudLayout:clusterNote") : Ub && "menu" === ab ? bb("hudLayout:menuNote") : Ub && (0, Ua.w)(ab, Eb.hudElements[ab]) && Aa(ab) ? bb("hudLayout:rowIconNote") : Ub && "arrows" === ab ? bb("hudLayout:arrowsNote") : "inventory" === ab && (0, Hb.z)(Eb.hudElements, "inventory") ? bb("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, xb.jsxs)("div", {
        ref: db,
        className: "HudLayoutSettings",
        children: [(0, xb.jsxs)("div", {
          ref: wb,
          className: "HudLayoutBody",
          children: [(0, xb.jsx)("div", {
            className: "HudLayoutOrientation",
            children: bb("landscape" === Tb ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, xb.jsx)(ZU, {
            preview: {
              layout: ab,
              orientation: Tb,
              selected: Yb,
              onSelect: jb,
              onMove: Sb,
              canMove: Aa,
              actionButtons: Gb,
              joystickFixed: hb,
              presence: Wb,
              keyNames: ub,
              maxHeight: Fb,
              apiRef: Ib,
              onMeasured: ib,
              onReady: tb,
              lockable: aa
            },
            quick: {
              layout: Eb,
              actionButtons: Gb,
              keyNames: ub,
              scaleCaps: Db,
              overlaps: Rb,
              onScale: Ya.onScale,
              onHidden: Ya.onHidden,
              onReset: Ya.onReset,
              locked: Vb,
              lockable: aa,
              onLocked: ba
            },
            onFullScreen: () => {
              gb(!0)
            },
            resting: sb,
            onSidePanel: ob
          }), sb && (0, xb.jsx)(jU, {
            layout: ab,
            orientation: Tb,
            selected: Yb,
            onSelect: jb,
            onMove: Sb,
            canMove: Aa,
            actionButtons: Gb,
            joystickFixed: hb,
            presence: Wb,
            keyNames: ub,
            onScale: Ya.onScale,
            onHidden: Ya.onHidden,
            onReset: Ya.onReset,
            locked: Vb,
            lockable: aa,
            onLocked: ba,
            apiRef: Ib,
            onClose: Cb
          }), (0, xb.jsx)(NU, {
            safe: Eb.hudSafe,
            onCommit: bb => {
              Jb((ab => (0, Hb.nb)(ab, Tb, bb)))
            },
            onPreview: bb => {
              var ab;
              null === (ab = Ib.current) || void 0 === ab || ab.setSafe(bb)
            }
          }), (0, xb.jsx)(Xb.d, {
            label: bb("hudLayout:snapCentre"),
            checked: ab.hudSnapCentre,
            onClick: bb => {
              (0, Hb._)(bb)
            },
            circleInfoText: bb("hudLayout:snapCentreInfo")
          }), (0, xb.jsx)(yU, {
            ...Ya
          }), (0, xb.jsx)(Xb.e, {
            label: bb("hudLayout:shape"),
            options: Hb.N.map((ab => ({
              value: ab,
              label: bb(`hudLayout:shape_${ab}`)
            }))),
            value: ab.hudShape,
            onChange: bb => {
              Jb((ab => ({
                ...ab,
                hudShape: bb
              }))), (0, mb.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: bb
              })
            }
          }), (0, xb.jsx)(Xb.g, {
            name: bb("hudLayout:opacity"),
            min: Hb.h,
            max: 1,
            step: .05,
            initValue: ab.hudKeyOpacity,
            format: bb => `${Math.round(100*bb)}%`,
            circleInfoText: bb("hudLayout:opacityInfo"),
            onChange: bb => {
              var ab;
              null === (ab = Ib.current) || void 0 === ab || ab.setOpacity(bb)
            },
            onChangeComplete: bb => {
              (0, Hb.Y)(bb), (0, mb.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, xb.jsx)(eb.D, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const bb = pb.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await bb.getResult() && (0, Hb.V)()
            }()
          },
          children: bb("hudLayout:resetAll")
        })]
      })
    }
    const HU = 350;
    const IU = [function() {
      const {
        t: bb
      } = (0, Ab.A)(), [ab, Ub] = (0, Mb.useState)(!1), Tb = (0, Mb.useRef)(null);
      return (0, Mb.useEffect)((() => {
        var bb;
        ab && (null === (bb = Tb.current) || void 0 === bb || bb.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [ab]), (0, xb.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, xb.jsxs)("button", {
          ref: Tb,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": ab,
          onClick: () => {
            Ub(!ab)
          },
          children: [(0, xb.jsx)(Nb.e, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, xb.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, xb.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: bb("hudLayout:title")
            }), (0, xb.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: bb("hudLayout:entrySub")
            })]
          }), (0, xb.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), ab && (0, xb.jsx)(WU, {})]
      })
    }, function() {
      const {
        t: bb
      } = (0, Ab.A)(), {
        joystickMode: ab,
        touchSpeedCurve: Ub,
        autorun: Mb,
        jumpLock: Tb
      } = (0, vb.n)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, xb.jsxs)(xb.Fragment, {
        children: [(0, xb.jsx)(Xb.e, {
          label: bb("settingsMenu:joystick"),
          options: zb.tb.map((ab => ({
            value: ab,
            label: bb(ib[ab])
          }))),
          value: ab,
          onChange: bb => {
            vb.c.setClientEscMenuOptions({
              joystickMode: bb
            })
          },
          circleInfoText: bb("settingsMenu:joystickInfo")
        }), (0, xb.jsx)(Xb.d, {
          label: bb("settingsMenu:preciseWalking"),
          checked: Ub,
          onClick: bb => {
            vb.c.setClientEscMenuOptions({
              touchSpeedCurve: bb
            })
          },
          circleInfoText: bb("settingsMenu:preciseWalkingInfo")
        }), (0, xb.jsx)(Xb.d, {
          label: bb("settingsMenu:autoRun"),
          checked: Mb,
          onClick: bb => {
            vb.c.setClientEscMenuOptions({
              autorun: bb
            })
          },
          circleInfoText: bb("settingsMenu:autoRunInfo")
        }), (0, xb.jsx)(Xb.d, {
          label: bb("settingsMenu:jumpLock"),
          checked: Tb,
          onClick: bb => {
            vb.c.setClientEscMenuOptions({
              jumpLock: bb
            })
          },
          circleInfoText: bb("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, xb.jsx)(Db.b, {})
    }, function() {
      const {
        t: bb
      } = (0, Ab.A)(), {
        clientEscMenuOptions: ab
      } = (0, vb.n)(["clientEscMenuOptions"]);
      return (0, fb.d)() ? (0, xb.jsx)(Xb.d, {
        label: bb("settingsMenu:vibration"),
        checked: ab.vibration,
        onClick: bb => {
          vb.c.setClientEscMenuOptions({
            vibration: bb
          })
        },
        circleInfoText: bb("settingsMenu:vibrationInfo")
      }) : null
    }];

    function dU() {
      return (0, xb.jsx)(xb.Fragment, {
        children: IU.map(((bb, ab) => (0, xb.jsx)(bb, {}, ab)))
      })
    }
    var FU = Ub(4056);

    function hU() {
      const {
        t: bb
      } = (0, Ab.A)(), {
        isTouchScreen: ab,
        clientEscMenuOptions: Ub,
        gameState: Eb
      } = (0, vb.n)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), Yb = (0, jb.h)("ezBridging"), Bb = (0, jb.h)("ezTowering"), kb = "inGame" !== Eb || !0 === Yb, yb = (0, Rb.d)() && ("inGame" !== Eb || !0 === Bb), [, Db] = (0, Mb.useReducer)((bb => bb + 1), 0), zb = (0, Zb.f)(), [ib, fb] = (0, Mb.useState)(FU.f);
      return (0, xb.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [zb && (0, xb.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, xb.jsx)("div", {
            children: bb("controller:settingsControlsNote")
          }), (0, xb.jsx)(eb.M, {
            onClick: () => {
              vb.c.set({
                openSettingsCategory: "controller"
              })
            },
            children: bb("controller:settingsOpenController")
          })]
        }), (0, Lb.isTouchscreen)() && !(0, Lb.isMobile)() ? (0, xb.jsx)(xb.Fragment, {
          children: (0, xb.jsx)(Xb.d, {
            label: bb("settingsMenu:useTouchControls"),
            checked: ib,
            onClick: bb => {
              (0, FU.d)(bb), fb(bb)
            }
          })
        }) : null, ab && (0, xb.jsx)(dU, {}), kb && (0, xb.jsx)(Xb.d, {
          label: bb("settingsMenu:ezBridging"),
          checked: Ub.ezBridging,
          onClick: bb => {
            vb.c.setClientEscMenuOptions({
              ezBridging: bb
            })
          },
          circleInfoText: bb("settingsMenu:ezBridgingInfo")
        }), yb && (0, xb.jsx)(Xb.d, {
          label: bb("settingsMenu:ezTowering"),
          checked: Ub.ezTowering,
          onClick: bb => {
            vb.c.setClientEscMenuOptions({
              ezTowering: bb
            })
          },
          circleInfoText: bb("settingsMenu:ezToweringInfo")
        }), (0, xb.jsx)(Xb.d, {
          label: bb("settingsMenu:crouchToggle"),
          checked: Ub.crouchIsToggle,
          onClick: bb => {
            vb.c.setClientEscMenuOptions({
              crouchIsToggle: bb
            })
          },
          circleInfoText: bb("settingsMenu:crouchToggleInfo")
        }), (0, xb.jsx)(Xb.d, {
          label: bb("settingsMenu:hideUiToggle"),
          checked: Ub.hideUiIsToggle,
          onClick: bb => {
            vb.c.setClientEscMenuOptions({
              hideUiIsToggle: bb
            })
          },
          circleInfoText: bb("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, Pb.b)() && (0, xb.jsx)(Xb.g, {
          name: bb("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: Ub.touchscreenSensitivity,
          onChange: bb => {
            vb.c.setClientEscMenuOptions({
              touchscreenSensitivity: bb
            })
          }
        }), !(0, Lb.isMobile)() && (0, xb.jsx)(Xb.g, {
          name: bb("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: Ub.mouseSensitivity,
          onChange: bb => {
            vb.c.setClientEscMenuOptions({
              mouseSensitivity: bb
            })
          }
        }), !(0, Lb.isMobile)() && (0, xb.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, xb.jsx)("div", {
            className: "SliderText",
            children: bb("settingsMenu:keyBindings")
          }), Tb.g.map((ab => (0, xb.jsx)(GU, {
            title: bb(ab.name.translationKey, ab.name.params),
            defaultOpen: Tb.i.has(ab.id),
            children: ab.actions.map((bb => (0, xb.jsx)(QU, {
              noaAction: bb,
              forceUpdate: Db,
              clashesWith: ab.clashesWith,
              showPadGlyph: zb
            }, bb)))
          }, ab.name.translationKey))), (0, xb.jsx)(eb.D, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, Tb.I)(), Db()
            },
            children: bb("controls:resetBindings")
          })]
        })]
      })
    }

    function GU(bb) {
      let {
        title: ab,
        defaultOpen: Ub,
        children: Ab
      } = bb;
      const [Tb, Eb] = (0, Mb.useState)(Ub);
      return (0, xb.jsxs)("div", {
        className: Bb()("ControlsSection", {
          Collapsed: !Tb
        }),
        children: [(0, xb.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Eb(!Tb)
          },
          children: [(0, xb.jsx)("div", {
            className: "ControlsSectionTitle",
            children: ab
          }), (0, xb.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), Tb && (0, xb.jsx)("div", {
          className: "ControlsSectionRows",
          children: Ab
        })]
      })
    }

    function QU(bb) {
      let {
        noaAction: ab,
        forceUpdate: Ub,
        clashesWith: Yb,
        showPadGlyph: vb
      } = bb;
      const {
        t: Lb
      } = (0, Ab.A)(), Pb = (0, yb.b)(ab), [Xb, jb] = (0, Mb.useState)(!1), [Rb, Zb] = (0, Mb.useState)("controls:clickToEnterNewBinding"), [Db, zb] = (0, Mb.useState)(null), [ib, fb] = (0, Mb.useState)(null), mb = (0, Mb.useRef)(null);
      (0, Mb.useEffect)((() => {
        Xb && mb.current && mb.current.focus()
      }), [Xb]);
      const pb = Tb.x[ab].filter((bb => Eb.l[bb]));
      let Nb = null;
      const Wb = [],
        Hb = Yb.flatMap((bb => {
          var ab, Ub;
          return null !== (ab = null === (Ub = Tb.g.find((ab => ab.id === bb))) || void 0 === Ub ? void 0 : Ub.actions) && void 0 !== ab ? ab : []
        }));
      for (const Ab of Hb) {
        if (Ab === ab) continue;
        const bb = Tb.x[Ab];
        for (const ab of bb) pb.includes(ab) && Wb.push(Lb(Tb.y[Ab].translationKey, Tb.y[Ab].params))
      }
      Wb.length > 0 && (Nb = Lb("controls:sharedBindingsWarning") + " ", Nb += Wb.join(", "));
      const Ib = () => {
          jb(!1), zb(null), Zb("controls:clickToEnterNewBinding"), fb(null)
        },
        db = () => "BindingInput_" + ab;
      return (0, xb.jsxs)("div", {
        className: Bb()("ControlRow", {
          WarningBorder: null !== Nb
        }),
        children: [(0, xb.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, xb.jsxs)("div", {
            className: "ControlName",
            children: [Lb(Tb.y[ab].translationKey, Tb.y[ab].params), vb && Pb && (0, xb.jsx)(kb.e, {
              glyph: Pb,
              className: "ControlPadGlyph"
            })]
          }), (0, xb.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, xb.jsxs)("div", {
              className: "ControlBindingsList",
              children: [pb.map((bb => (0, xb.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, xb.jsx)("div", {
                  children: (0, Tb.o)(bb)
                }), (0, xb.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Ab = (0, Tb.B)(ab, bb);
                    Ab.isError() ? fb(Ab.asError().message) : fb(null), Ub()
                  },
                  children: "\xd7"
                })]
              }, bb))), !Xb && (0, xb.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  jb(!0), fb(null)
                },
                children: (0, xb.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), Xb && (0, xb.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, xb.jsxs)("div", {
                className: "InputContainer",
                children: [(0, xb.jsx)("div", {
                  className: "InputOverlay",
                  children: Db ? (0, Tb.o)(Db) : (0, xb.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Lb(Rb)
                  })
                }), (0, xb.jsx)("input", {
                  ref: mb,
                  id: db(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: bb => {
                    if ("Escape" === bb.code) return Ib(), bb.preventDefault(), void bb.stopPropagation();
                    const ab = bb.code;
                    Eb.e.includes(ab) ? (fb(null), zb(ab)) : (fb("controls:keyIsReserved"), zb(null)), bb.preventDefault(), bb.stopPropagation()
                  },
                  onMouseDown: bb => {
                    const ab = "Mouse" + (bb.button + 1);
                    document.activeElement && document.activeElement.id === db() ? Eb.e.includes(ab) ? (fb(null), zb(ab)) : (fb("controls:keyIsReserved"), zb(null)) : Zb("controls:enterNewBinding"), bb.stopPropagation()
                  },
                  onBlur: () => {
                    Zb("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, xb.jsx)(eb.g, {
                onPointerDown: bb => {
                  bb.preventDefault()
                },
                onClick: () => {
                  (0, Tb.d)(ab, Db), Ub(), Ib()
                },
                className: "ControlBindingAddButton",
                disabled: null === Db,
                children: Lb("general:add")
              }), (0, xb.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  Ib()
                },
                children: "\xd7"
              })]
            }), ib && (0, xb.jsx)("div", {
              className: "ControlBindingError",
              children: Lb(ib)
            })]
          })]
        }), Nb && (0, xb.jsx)("div", {
          className: "ControlRowWarning",
          children: Nb
        })]
      })
    }
  },
  8410: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb
    });
    var Ab = Ub(19),
      Mb = Ub(3114),
      Tb = Ub(1260),
      Eb = Ub(1294);
    const Yb = async () => {
      if ((0, Eb.d)()) {
        if (!0 !== await Tb.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Ab.c.get("gameState")) return
      }(0, Mb.d)()
    }
  },
  8418: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Bb,
      f: () => Tb,
      i: () => Eb,
      m: () => Mb,
      q: () => Yb
    });
    var Ab = Ub(1846);
    const Mb = "controllerPadShopOpen",
      Tb = bb => Ab.h.includes(bb),
      Eb = bb => Object.values(bb).some((bb => !1 !== bb.canBuy && !bb.isRewardedAd)),
      Yb = (bb, ab, Ub) => {
        var Ab, Mb, Eb, Yb;
        const Bb = bb.filter((bb => !Tb(bb))),
          eb = null !== ab && bb.includes(ab) ? ab : null;
        return null !== eb && !Tb(eb) && Ub(eb) ? eb : null !== (Ab = null !== (Mb = null !== (Eb = null !== (Yb = Bb.find(Ub)) && void 0 !== Yb ? Yb : Bb[0]) && void 0 !== Eb ? Eb : eb) && void 0 !== Mb ? Mb : bb[0]) && void 0 !== Ab ? Ab : null
      },
      Bb = bb => bb.userInput || bb.isRewardedAd || "boolean" === typeof bb.isSelected ? null : JSON.stringify([bb.image, bb.cost, bb.currency, bb.amount, bb.customTitle, bb.buyButtonText, bb.description, bb.canBuy])
  },
  8430: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => eb,
      f: () => vb
    });
    var Ab = Ub(52),
      Mb = Ub(1345),
      Tb = Ub(1910),
      Eb = Ub(1304),
      Yb = Ub(1329),
      Bb = Ub(1023);
    const eb = () => {
        const bb = (0, Eb.o)();
        if ((0, Ab.useEffect)((() => {
            (0, Eb.g)()
          }), []), !bb) return null;
        const {
          ControllerCategory: ab
        } = bb;
        return (0, Bb.jsx)(Yb.b, {
          children: (0, Bb.jsx)(ab, {})
        })
      },
      vb = () => {
        var bb;
        const ab = (0, Eb.o)(),
          [, Ub] = (0, Ab.useReducer)((bb => bb + 1), 0);
        return (0, Mb.f)(Tb.d, Ub), null !== (bb = null === ab || void 0 === ab ? void 0 : ab.hasActivePad()) && void 0 !== bb && bb
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);