export const id = 150;
export const ids = [150];
export const modules = {
  8557: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv
    });
    var hv = Pv(22),
      Sv = Pv(1175),
      ev = Pv(4732),
      gv = Pv(1082);

    function pv(vv) {
      let {
        note: zv
      } = vv;
      const {
        t: Pv
      } = (0, Sv.x)(), {
        clientEscMenuOptions: pv
      } = (0, hv.i)(["clientEscMenuOptions"]);
      return (0, gv.jsx)(ev.e, {
        label: Pv("touchSettings:actionButtons"),
        checked: pv.touchActionButtons,
        onClick: vv => {
          hv.c.setClientEscMenuOptions({
            touchActionButtons: vv
          })
        },
        circleInfoText: Pv("touchSettings:actionButtonsInfo"),
        note: zv
      })
    }
  },
  8545: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => qP,
      f: () => tP
    });
    var hv = Pv(1175),
      Sv = Pv(52),
      ev = Pv(1934),
      gv = Pv(1946),
      pv = Pv(1035),
      dv = Pv.n(pv),
      Nv = Pv(1442),
      lv = Pv(22),
      Tv = Pv(73),
      Wv = Pv(86),
      wv = Pv(4732),
      av = Pv(2324),
      sv = Pv(284),
      Cv = Pv(1952),
      iv = Pv(1958),
      cv = Pv(8549),
      Gv = Pv(8557),
      mv = Pv(302),
      jv = Pv(1082);
    const fv = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Fv = Pv(8561);
    var Yv = Pv(1465),
      nv = Pv(1336),
      Ov = Pv(1042),
      Dv = Pv(1387),
      Kv = Pv(2347);
    const Vv = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(Kv.I.map((vv => [vv, "menu"])))
      },
      Uv = vv => Kv.F.filter((zv => Vv[zv] === vv)),
      Rv = new Set(Uv("cluster")),
      xv = ["cluster"],
      tv = [...xv, ...Kv.F.filter((vv => !xv.includes(vv) && !Vv[vv]))],
      qv = tv.flatMap((vv => [vv, ...Uv(vv)])).map((vv => ({
        id: vv,
        label: `hudLayout:${vv}`,
        ...Kv.B[vv],
        parent: Vv[vv]
      }))),
      Iv = Object.fromEntries(qv.map((vv => [vv.id, vv]))),
      Qv = "data-hud-el";

    function Zv(vv, zv, Pv, hv) {
      const Sv = Pv(function(vv, zv) {
          return "attack" !== vv || zv ? Iv[vv].label : "hudLayout:attackContext"
        }(vv, zv)),
        ev = hv[vv];
      return ev ? Pv("hudLayout:slotWithKey", {
        slot: Sv,
        key: ev
      }) : Sv
    }

    function Av(vv, zv, Pv, hv) {
      return vv.map((vv => Zv(vv, zv, Pv, hv))).join(", ")
    }

    function Lv(vv) {
      let {
        className: zv,
        keepPlace: Pv
      } = vv;
      return Pv ? (0, jv.jsx)("div", {
        className: dv()(zv, "Placeholder")
      }) : null
    }

    function Hv(vv) {
      let {
        id: zv,
        elements: Pv,
        actionButtons: Sv,
        keyNames: ev,
        className: gv,
        keepPlace: pv,
        onHidden: dv
      } = vv;
      const {
        t: lv
      } = (0, hv.x)();
      if (!Iv[zv].hide) return (0, jv.jsx)(Lv, {
        className: gv,
        keepPlace: pv
      });
      const Tv = (0, Kv.x)(Pv, zv);
      return (0, jv.jsx)(Nv.K, {
        className: gv,
        ariaLabel: lv(Tv ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: Zv(zv, Sv, lv, ev)
        }),
        pressed: !Tv,
        onClick: () => {
          dv(zv, !Tv)
        },
        children: (0, jv.jsx)(Ov.b, {
          name: Tv ? "eye-slash" : "eye"
        })
      })
    }

    function Mv(vv) {
      var zv;
      let {
        id: Pv,
        elements: Sv,
        actionButtons: ev,
        keyNames: gv,
        className: pv,
        keepPlace: dv,
        onlyWhenMoved: lv,
        locked: Tv,
        onReset: Wv
      } = vv;
      const {
        t: wv
      } = (0, hv.x)(), av = Iv[Pv], sv = (0, Kv.P)(null !== (zv = Sv[Pv]) && void 0 !== zv ? zv : Kv.q);
      return !av.move && !av.scale || lv && sv ? (0, jv.jsx)(Lv, {
        className: pv,
        keepPlace: dv
      }) : (0, jv.jsx)(Nv.K, {
        className: pv,
        disabled: sv || Tv,
        ariaLabel: wv("hudLayout:resetElement", {
          name: Zv(Pv, ev, wv, gv)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: Pv
        },
        onClick: vv => {
          lv && Ev(vv.currentTarget), Wv(Pv)
        },
        children: (0, jv.jsx)(Ov.b, {
          name: "rotate-left"
        })
      })
    }

    function yv(vv) {
      let {
        id: zv,
        actionButtons: Pv,
        keyNames: Sv,
        className: ev,
        keepPlace: gv,
        locked: pv,
        lockable: dv,
        onLocked: lv
      } = vv;
      const {
        t: Tv
      } = (0, hv.x)();
      return dv || pv ? (0, jv.jsx)(Nv.K, {
        className: ev,
        ariaLabel: Tv(pv ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: Zv(zv, Pv, Tv, Sv)
        }),
        pressed: pv,
        active: pv,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${pv?"unlock":"lock"}:${zv}`
        },
        onClick: () => {
          lv(zv, !pv)
        },
        children: (0, jv.jsx)(Ov.b, {
          name: pv ? "lock" : "lock-open"
        })
      }) : (0, jv.jsx)(Lv, {
        className: ev,
        keepPlace: gv
      })
    }

    function Bv(vv) {
      let {
        className: zv,
        open: Pv,
        name: Sv,
        onToggle: ev
      } = vv;
      const {
        t: gv
      } = (0, hv.x)();
      return (0, jv.jsx)(Nv.K, {
        className: zv,
        ariaLabel: gv(Pv ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Sv
        }),
        pressed: Pv,
        analyticsClick: {
          id: "hud_layout.children",
          value: Pv ? "close" : "open"
        },
        onClick: () => {
          ev(!Pv)
        },
        children: (0, jv.jsx)(Ov.b, {
          name: Pv ? "angle-up" : "angle-down"
        })
      })
    }

    function Jv(vv, zv) {
      var Pv;
      vv.contains(document.activeElement) && zv.focus({
        preventScroll: !0
      }), null === (Pv = (0, Dv.f)()) || void 0 === Pv || Pv.handOverPadFocus(vv, zv)
    }

    function Ev(vv) {
      const zv = vv.closest("[data-hud-row]"),
        Pv = null === zv || void 0 === zv ? void 0 : zv.querySelector(".HudElementRowName");
      return !(!zv || !Pv) && (Jv(zv, Pv), !0)
    }
    const ov = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function bv(vv, zv) {
      return "joystick" === vv && !zv
    }

    function rv() {
      const {
        t: vv
      } = (0, hv.x)();
      return (0, jv.jsx)(Nv.K, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: vv => {
          const zv = vv.currentTarget;
          if (!Ev(zv)) {
            const vv = function(vv) {
              var zv, Pv;
              const hv = [vv.previousElementSibling, vv.nextElementSibling].find((vv => vv instanceof HTMLElement && vv.matches(ov)));
              return null !== (zv = null !== hv && void 0 !== hv ? hv : null === (Pv = vv.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === Pv ? void 0 : Pv.querySelector(`:is(${ov}):not(.HudFixJoystickButton)`)) && void 0 !== zv ? zv : null
            }(zv);
            vv && Jv(zv, vv)
          }
          lv.c.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: vv("hudLayout:fixJoystick")
      })
    }
    var kv = Pv(62),
      Xv = Pv(1265),
      uv = Pv(2899),
      vz = Pv(2584),
      zz = Pv(8563),
      Pz = Pv(2352),
      hz = Pv(2366),
      Sz = Pv(2934);
    const ez = ["J", "C", "A", "P", "U", "X", "G"],
      gz = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: Kv.I,
        pinnedIcon: null
      });

    function pz(vv, zv) {
      vv.replaceChildren(...[...zv.childNodes].map((vv => vv.cloneNode(!0))))
    }
    const dz = vv => ({
      [Qv]: vv
    });

    function Nz(vv) {
      let {
        id: zv,
        slot: Pv,
        icon: hv,
        label: ev,
        hidden: gv,
        className: pv,
        face: Nv
      } = vv;
      const lv = (0, Sv.useRef)(null);
      return (0, Sv.useLayoutEffect)((() => {
        Nv && lv.current && pz(lv.current, Nv)
      }), [Nv]), (0, jv.jsxs)("div", {
        className: dv()("TouchKeyHit", `TouchSlot${Pv}`, pv, {
          HudPreviewGhost: gv.has(zv)
        }),
        ...dz(zv),
        children: [Nv && (0, jv.jsx)("div", {
          ref: lv,
          className: dv()("TouchKey", {
            Labelled: Nv.classList.contains("Labelled")
          })
        }), !Nv && (0, jv.jsxs)("div", {
          className: dv()("TouchKey", {
            Labelled: void 0 !== ev
          }),
          children: [hv && (0, jv.jsx)(Ov.b, {
            name: hv
          }), void 0 !== ev && (0, jv.jsx)("span", {
            className: "TouchKeyLabel",
            children: ev
          })]
        })]
      })
    }

    function lz(vv) {
      let {
        item: zv,
        selected: Pv
      } = vv;
      const hv = (0, Sv.useRef)(null);
      return (0, Sv.useLayoutEffect)((() => {
        hv.current && pz(hv.current, zv)
      }), [zv]), (0, jv.jsx)("div", {
        ref: hv,
        className: dv()("InvenItem", {
          Selected: Pv
        })
      })
    }
    const Tz = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      Wz = vv => void 0 === vv ? {} : {
        style: {
          "--parked": vv
        }
      };

    function wz(vv) {
      let {
        id: zv,
        hidden: Pv,
        parked: hv,
        unslotted: Sv = !1
      } = vv;
      return (0, jv.jsx)("div", {
        className: dv()("TopRightIcon", hz.q[zv], {
          HudPreviewGhost: Pv.has(zv),
          [Pz.e]: void 0 !== hv,
          [Pz.g]: Sv
        }),
        ...Wz(hv),
        children: (0, jv.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...dz(zv),
          children: (0, jv.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, jv.jsx)(Ov.b, {
              name: Tz[zv]
            })
          })
        })
      })
    }

    function az(vv) {
      let {
        portraitPhone: zv,
        icons: Pv,
        pinnedIcon: hv,
        hidden: ev,
        moved: gv,
        trayState: pv
      } = vv;
      const Nv = zv ? (0, Pz.G)(Pv) : [],
        lv = Pv.filter((vv => "settings" === vv)),
        Tv = Pv.filter((vv => "settings" !== vv && !Nv.includes(vv))).reverse(),
        Wv = Nv.length > 0 && "gone" === pv,
        wv = [...lv, ...Wv ? ["tray"] : [], ...Tv].filter((vv => "tray" === vv || ev.has(vv) && !gv.has(vv))),
        av = vv => {
          const zv = wv.indexOf(vv);
          return zv < 0 ? void 0 : zv
        },
        sv = (vv, zv) => (0, jv.jsx)(wz, {
          id: vv,
          hidden: ev,
          parked: zv ? av(vv) : void 0,
          unslotted: zv && ev.has(vv) && gv.has(vv)
        }, vv);
      return (0, jv.jsxs)("div", {
        className: dv()("TopRightIcons TouchInGame", {
          Column: zv
        }),
        children: [lv.map((vv => sv(vv, !0))), Nv.length > 0 && (0, jv.jsxs)("div", {
          className: dv()("TopRightIcon TopRightTrayToggle Open", {
            [Pz.e]: Wv
          }),
          ...Wz(av("tray")),
          children: [(0, jv.jsx)("div", {
            className: dv()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== pv
            }),
            children: (0, jv.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, jv.jsx)(Ov.b, {
                name: "ellipsis"
              })
            })
          }), (0, jv.jsx)("div", {
            className: "TopRightTray",
            children: Nv.map((vv => sv(vv, !1)))
          })]
        }), Tv.map((vv => (0, jv.jsxs)(Sv.Fragment, {
          children: ["perspective" === vv && null !== hv && (0, jv.jsx)("div", {
            className: "TopRightIcon",
            children: (0, jv.jsx)("div", {
              className: "UiItemIcon SmallTextBold",
              children: (0, jv.jsx)("div", {
                className: "ScaleOnHover",
                children: (0, jv.jsx)(Ov.b, {
                  name: hv
                })
              })
            })
          }), sv(vv, !0)]
        }, vv)))]
      })
    }

    function sz(vv) {
      let {
        next: zv,
        hidden: Pv
      } = vv;
      return (0, jv.jsx)("div", {
        className: dv()("HotBarArrow", zv ? "Next" : "Previous", {
          HudPreviewGhost: Pv
        }),
        ...dz("arrows"),
        children: (0, jv.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, jv.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, jv.jsx)(Ov.b, {
              name: zv ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function Cz() {
      return (0, jv.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, jv.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, jv.jsx)("div", {
            className: "SocialBar",
            children: (0, jv.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, jv.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, jv.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, jv.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, jv.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, jv.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, jv.jsx)(Ov.b, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, jv.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, jv.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, jv.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, jv.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, jv.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, jv.jsx)(Ov.b, {
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
    const iz = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      cz = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Gz = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      mz = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function jz(vv) {
      let {
        presence: zv,
        portraitPhone: Pv,
        hidden: Sv,
        actionButtons: ev,
        joystickFixed: gv,
        keysAbove: pv,
        auraBar: Nv,
        trayState: lv,
        moved: Wv
      } = vv;
      const {
        t: wv
      } = (0, hv.x)(), {
        faces: av,
        items: sv
      } = zv, Cv = vv => ({
        HudPreviewGhost: Sv.has(vv)
      });
      return (0, jv.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, jv.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, jv.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, jv.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, jv.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, jv.jsx)("div", {
              className: "InGameHeaderGameName",
              children: wv("hudLayout:previewGameName")
            })]
          })
        }), (0, jv.jsx)("div", {
          className: "TopLeftElements",
          children: (0, jv.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, jv.jsxs)("div", {
              className: "Chat",
              children: [(0, jv.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [wv("hudLayout:previewChatLine"), wv("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), wv("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((vv => (0, jv.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, jv.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, jv.jsx)("div", {
                      className: "IndividualText",
                      children: vv
                    })
                  })
                }, vv)))
              }), (0, jv.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: dv()("ChatIconWrapper SmallTextLight", Cv("chat")),
                ...dz("chat"),
                children: (0, jv.jsx)(Ov.b, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, jv.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, jv.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, jv.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, jv.jsx)("div", {
                className: "TopRightIconsContainer",
                ...dz("menu"),
                children: (0, jv.jsx)(az, {
                  portraitPhone: Pv,
                  icons: zv.rowIcons,
                  pinnedIcon: zv.pinnedIcon,
                  hidden: Sv,
                  trayState: lv,
                  moved: Wv
                })
              })
            }), Tv.featureFlags.useSocialFeatures && (0, jv.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, jv.jsx)(Cz, {})
            })]
          })
        }), (0, jv.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, jv.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, jv.jsxs)("div", {
            className: "TouchInteractKey",
            ...dz("interact"),
            children: [(0, jv.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, jv.jsx)(Ov.b, {
                name: "hand-back-point-up"
              })
            }), (0, jv.jsx)("div", {
              children: wv("hudLayout:previewInteract")
            })]
          })
        }), (0, jv.jsx)("div", {
          className: "BottomCentre",
          children: (0, jv.jsxs)("div", {
            className: "BottomElements",
            children: [(0, jv.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, jv.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, jv.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...dz("hotbar"),
                children: (0, jv.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, jv.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, jv.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, jv.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, jv.jsx)(Ov.b, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), Nv && (0, jv.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, jv.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, jv.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, Sz.e)("glint"),
                    alt: ""
                  }), (0, jv.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, jv.jsx)("div", {
                  className: "AuraBar",
                  children: (0, jv.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, jv.jsx)("div", {
                className: "HotBarRow",
                children: (0, jv.jsx)("div", {
                  className: dv()("HotBarContainer Touch", {
                    KeysAbove: pv
                  }),
                  children: (0, jv.jsxs)("div", {
                    className: "HotBar",
                    ...dz("hotbar"),
                    children: [(0, jv.jsxs)("div", {
                      className: dv()("TouchInventoryKeys", {
                        NoAuraBar: !Nv
                      }),
                      children: [(0, jv.jsx)("div", {
                        className: dv()("TouchInventoryKey ShopKey", Cv("inventory"), {
                          Hidden: !zv.shop
                        }),
                        ...dz("inventory"),
                        children: (0, jv.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, jv.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, jv.jsx)(Ov.b, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, jv.jsx)("div", {
                        className: dv()("TouchInventoryKey BagKey", Cv("inventory"), {
                          Hidden: !zv.bag
                        }),
                        ...dz("inventory"),
                        children: (0, jv.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, jv.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, jv.jsx)(Ov.b, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, jv.jsx)(sz, {
                      next: !1,
                      hidden: Sv.has("arrows")
                    }), (0, jv.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== sv && sv.map(((vv, zv) => (0, jv.jsx)(lz, {
                        item: vv,
                        selected: vv.classList.contains("Selected")
                      }, zv))), null === sv && Gz.map((vv => {
                        const zv = mz[vv];
                        return (0, jv.jsx)("div", {
                          className: dv()("InvenItem", {
                            Selected: 0 === vv
                          }),
                          children: zv && (0, jv.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, jv.jsx)(Ov.b, {
                              name: zv
                            })
                          })
                        }, vv)
                      }))]
                    }), (0, jv.jsx)(sz, {
                      next: !0,
                      hidden: Sv.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, jv.jsx)("div", {
              className: "BottomRightElements",
              children: (0, jv.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== av && ez.map((vv => {
                  const zv = av[vv];
                  return zv && (0, jv.jsx)(Nz, {
                    id: iz[vv],
                    slot: vv,
                    face: zv,
                    className: cz[vv],
                    hidden: Sv
                  }, vv)
                })), null === av && (0, jv.jsxs)(jv.Fragment, {
                  children: [(0, jv.jsx)(Nz, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Sv
                  }), (0, jv.jsx)(Nz, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Sv
                  }), ev && (0, jv.jsxs)(jv.Fragment, {
                    children: [(0, jv.jsx)(Nz, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Sv
                    }), (0, jv.jsx)(Nz, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Sv
                    })]
                  }), !ev && (0, jv.jsx)(Nz, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: wv("touchKeys:scope"),
                    hidden: Sv
                  }), (0, jv.jsx)(Nz, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: wv("touchKeys:fly"),
                    hidden: Sv
                  }), (0, jv.jsx)(Nz, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Sv
                  })]
                })]
              })
            })]
          })
        }), (0, jv.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, jv.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, jv.jsxs)("div", {
              className: dv()("Joystick Resting HudPreviewJoystick", {
                Floating: !gv
              }),
              ...dz("joystick"),
              children: [(0, jv.jsx)("div", {
                className: "JoystickBase"
              }), (0, jv.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function fz() {
      const [vv, zv] = (0, Sv.useState)({}), Pv = (0, Sv.useCallback)((vv => {
        zv((zv => [...new Set([...Object.keys(zv), ...Object.keys(vv)])].every((Pv => zv[Pv] === vv[Pv])) ? zv : vv))
      }), []);
      return [vv, Pv]
    }
    const Fz = .05;

    function Yz(vv) {
      var zv;
      let {
        selected: Pv,
        layout: Sv,
        actionButtons: ev,
        keyNames: gv,
        overlaps: pv,
        scaleCaps: lv,
        joystickFixed: Tv,
        onScale: Wv,
        onHidden: wv,
        onReset: av,
        locked: sv,
        lockable: Cv,
        onLocked: iv,
        extra: cv
      } = vv;
      const {
        t: Gv
      } = (0, hv.x)(), mv = Pv ? Iv[Pv] : null, fv = null !== Pv && sv.has(Pv), Fv = (Pv && Sv.hudElements[Pv] || Kv.q)[2], Yv = null !== (zv = Pv && lv[Pv]) && void 0 !== zv ? zv : Kv.i, nv = vv => {
        Pv && Wv(Pv, Math.min(Yv, Math.round(100 * (Fv + .1 * vv)) / 100))
      };
      return (0, jv.jsxs)(jv.Fragment, {
        children: [(0, jv.jsxs)("div", {
          className: dv()("HudQuickName SmallTextBold", {
            Overlap: pv.length > 0
          }),
          children: [pv.length > 0 && (0, jv.jsx)(Ov.b, {
            name: "triangle-exclamation"
          }), mv ? Zv(mv.id, ev, Gv, gv) : Gv("hudLayout:fullScreenHint"), pv.length > 0 && (0, jv.jsx)("span", {
            className: "HudQuickOverlap",
            children: Gv("hudLayout:overlapsShort", {
              names: Av(pv, ev, Gv, gv)
            })
          })]
        }), (null === mv || void 0 === mv ? void 0 : mv.scale) && (0, jv.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, jv.jsx)(Nv.K, {
            disabled: fv || Fv <= Kv.k,
            ariaLabel: Gv("hudLayout:smaller"),
            onClick: () => {
              nv(-1)
            },
            children: (0, jv.jsx)(Ov.b, {
              name: "minus"
            })
          }), (0, jv.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*Fv)}%`
          }), (0, jv.jsx)(Nv.K, {
            disabled: fv || Fv >= Yv,
            ariaLabel: Gv("hudLayout:larger"),
            onClick: () => {
              nv(1)
            },
            children: (0, jv.jsx)(Ov.b, {
              name: "plus"
            })
          })]
        }), (mv || cv) && (0, jv.jsxs)("div", {
          className: "HudQuickActions",
          children: [mv && (0, jv.jsxs)(jv.Fragment, {
            children: [(0, jv.jsx)(yv, {
              id: mv.id,
              actionButtons: ev,
              keyNames: gv,
              locked: fv,
              lockable: Cv(mv.id),
              onLocked: iv
            }), (0, jv.jsx)(Hv, {
              id: mv.id,
              elements: Sv.hudElements,
              actionButtons: ev,
              keyNames: gv,
              onHidden: wv
            }), (0, jv.jsx)(Mv, {
              id: mv.id,
              elements: Sv.hudElements,
              actionButtons: ev,
              keyNames: gv,
              locked: fv,
              onReset: av
            }), bv(mv.id, Tv) && (0, jv.jsx)(rv, {})]
          }), cv]
        })]
      })
    }
    var nz = Pv(1095),
      Oz = Pv(4170);
    const Dz = "HudPreviewDoc",
      Kz = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      Vz = new Set([Dz, ...Object.values(Kz)]),
      Uz = new Set(Kv.F.map(hz.A)),
      Rz = new Set(hz.l),
      xz = 'style, link[rel="stylesheet"]';

    function tz(vv, zv, Pv, hv) {
      const Sv = new Map,
        ev = new Set,
        gv = new URL(vv.baseURI).origin,
        pv = zv => {
          var Pv;
          if ("LINK" !== zv.nodeName) return !0;
          const hv = null === (Pv = zv.getAttribute("href")) || void 0 === Pv ? void 0 : Pv.trim();
          if (!hv) return !1;
          try {
            return new URL(hv, vv.baseURI).origin === gv
          } catch {
            return !1
          }
        };
      let dv = null;
      const Nv = () => {
          dv !== (0 === ev.size) && (dv = 0 === ev.size, null === hv || void 0 === hv || hv(dv))
        },
        lv = vv => {
          const zv = vv.cloneNode(!0);
          if ("LINK" === zv.tagName) {
            ev.add(zv);
            const vv = () => {
              ev.delete(zv), Nv()
            };
            zv.addEventListener("load", vv), zv.addEventListener("error", vv), Pv && zv.addEventListener("load", Pv)
          }
          return zv
        },
        Tv = () => {
          const hv = function(vv) {
              const zv = [...vv.body.children].filter((vv => vv.matches(xz)));
              return [...vv.head.querySelectorAll(xz), ...zv]
            }(vv).filter(pv),
            gv = new Set(hv);
          for (const [vv, zv] of Sv) gv.has(vv) || (zv.remove(), Sv.delete(vv), ev.delete(zv));
          let dv = null;
          for (let vv = hv.length - 1; vv >= 0; vv--) {
            const ev = hv[vv];
            let gv = Sv.get(ev);
            gv ? "STYLE" === ev.tagName && gv.textContent !== ev.textContent && (gv.textContent = ev.textContent, null === Pv || void 0 === Pv || Pv()) : (gv = lv(ev), Sv.set(ev, gv), zv.head.insertBefore(gv, dv)), dv = gv
          }
          Nv()
        };
      Tv();
      const Wv = new MutationObserver(Tv);
      return Wv.observe(vv.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), Wv.observe(vv.body, {
        childList: !0
      }), () => {
        Wv.disconnect()
      }
    }

    function qz(vv, zv, Pv) {
      let {
        keysAbove: hv
      } = Pv;
      const Sv = [...vv.documentElement.classList].filter((vv => !Vz.has(vv) && !Rz.has(vv))),
        ev = [...zv.documentElement.classList].filter((vv => Rz.has(vv))),
        gv = [Dz, Kz.hotbar, Kz.hasShop, Kz.hasBag];
      hv && gv.push(Kz.keysAbove), zv.documentElement.className = [...Sv, ...gv, ...ev].join(" ")
    }
    const Iz = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Qz(vv, zv, Pv, hv, Sv) {
      const ev = (0, Kv.G)(Pv, hv, "joystick"),
        gv = (0, hz.E)((0, hz.R)(Pv, hv, Sv), hv),
        pv = gv.classes.filter((vv => !Uz.has(vv))),
        dv = zv.documentElement;
      (0, hz.T)({
        ...gv,
        classes: pv
      }, {
        vars: dv,
        safe: dv,
        classes: dv
      });
      const Nv = (0, hz.I)(Pv.hudLayouts[hv].hudSafe, window.innerWidth, window.innerHeight, Zz(), (0, hz.S)(zv));
      dv.style.setProperty("--preview-joystick-shift-left", `${Nv[3]}px`), dv.style.setProperty("--preview-joystick-shift-bottom", `${Nv[2]}px`), dv.style.setProperty("--preview-joystick-scale", String(ev[2])), (0, Oz.h)(dv, zv, Pv, hv);
      for (const lv of Iz) dv.style.setProperty(lv, vv.documentElement.style.getPropertyValue(lv) || "0px")
    }

    function Zz() {
      return (0, hz.N)(lv.c.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function Az(vv) {
      return (0, hz.y)(Zz(), (0, hz.S)(vv))
    }

    function Lz(vv, zv, Pv) {
      const hv = vv.documentElement.style,
        Sv = (0, hz.M)(zv),
        ev = hv.getPropertyValue(Sv);
      try {
        return Pv((vv => {
          hv.setProperty(Sv, String(vv))
        }))
      } finally {
        "" === ev ? hv.removeProperty(Sv) : hv.setProperty(Sv, ev)
      }
    }

    function Hz(vv, zv) {
      const [Pv, hv] = Lz(vv, "hotbar", (zv => {
        const Pv = Pv => {
          var hv, Sv;
          return zv(Pv), null !== (hv = null === (Sv = vv.querySelector(".HotBarGameItemsContainer")) || void 0 === Sv ? void 0 : Sv.getBoundingClientRect().width) && void 0 !== hv ? hv : 0
        };
        return [Pv(1), Pv(Kv.i)]
      }));
      return Pv <= 0 ? Kv.i : Math.min(Kv.i, Math.max(1, Math.floor(hv / Pv / zv + 1e-6) * zv))
    }
    const Mz = 3,
      yz = .5,
      Bz = vv => vv.right - vv.left;
    const Jz = (vv, zv) => Math.abs((0, zz.b)(vv).x - (0, zz.b)(zv).x) + Math.abs((0, zz.b)(vv).y - (0, zz.b)(zv).y) + Math.abs(Bz(vv) - Bz(zv));

    function Ez(vv, zv, Pv, hv, Sv) {
      let {
        canKeep: ev = () => !0,
        passes: gv = Mz,
        before: pv,
        keysAboveOf: dv
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const Nv = void 0 !== dv && dv(vv) !== dv(zv),
        lv = zv.hudLayouts[Pv].hudLocked.filter((vv => ev(vv) && !(Nv && "inventory" === vv))),
        Tv = new Set(lv);
      if (0 === Tv.size) return zv;
      const Wv = [...Rv].filter((hv => !lv.includes(hv) && (0, Kv.G)(vv, Pv, hv).join() === (0, Kv.G)(zv, Pv, hv).join())),
        wv = vv => {
          const zv = (0, zz.F)(Wv.flatMap((zv => vv[zv] ? [vv[zv]] : [])));
          return {
            ...vv,
            cluster: null !== zv && void 0 !== zv ? zv : void 0
          }
        },
        av = vv => {
          const zv = Sv(vv);
          return zv && wv(zv)
        },
        sv = pv ? wv(pv) : av(vv);
      let Cv = sv && av(zv);
      if (!sv || !Cv) return zv;
      let iv = zv;
      for (let cv = 0; cv < gv && Tv.size > 0; cv++) {
        const vv = new Map;
        for (const zv of Tv) {
          const Sv = sv[zv],
            ev = Cv[zv],
            gv = Sv && ev ? oz(zv, (0, Kv.G)(iv, Pv, zv), Sv, ev, hv) : null;
          gv ? vv.set(zv, gv) : Tv.delete(zv)
        }
        if (0 === vv.size) break;
        let Sv = iv;
        for (const [zv, hv] of vv) Sv = (0, Kv.eb)(Sv, Pv, zv, hv);
        const ev = av(Sv);
        if (!ev) return zv;
        let gv = iv;
        for (const [zv, hv] of vv) {
          const vv = ev[zv];
          vv && Jz(sv[zv], vv) < Jz(sv[zv], Cv[zv]) - yz ? gv = (0, Kv.eb)(gv, Pv, zv, hv) : Tv.delete(zv)
        }
        if (gv === iv) break;
        const pv = [...vv.keys()].every((vv => Tv.has(vv)));
        if (iv = gv, Cv = pv ? ev : av(iv), !Cv) return zv
      }
      return Sv(iv), iv
    }

    function oz(vv, zv, Pv, hv, Sv) {
      let [ev, gv, pv] = zv;
      const dv = Kv.B[vv],
        Nv = {};
      dv.scale && Bz(hv) > 0 && Math.abs(Bz(Pv) - Bz(hv)) > yz && (Nv.scale = Math.max(Kv.k, Math.min(Kv.i, pv * Bz(Pv) / Bz(hv))));
      const lv = (0, zz.b)(Pv).x - (0, zz.b)(hv).x,
        Tv = (0, zz.b)(Pv).y - (0, zz.b)(hv).y;
      return dv.move && (Math.abs(lv) > yz || Math.abs(Tv) > yz) && (Nv.dx = ev + lv / Sv.width, Nv.dy = gv + Tv / Sv.height), void 0 === Nv.scale && void 0 === Nv.dx ? null : Nv
    }
    let bz = 0;

    function rz() {
      return bz > 0
    }
    const kz = vv => 0 === vv.dx && 0 === vv.dy,
      Xz = .001,
      uz = vv => Math.abs(vv.dx) >= 5e-4 || Math.abs(vv.dy) >= 5e-4 ? vv : {
        dx: vv.dx,
        dy: vv.dy < 0 ? -.001 : Xz
      };

    function vP(vv) {
      let {
        preview: zv,
        stageRef: Pv,
        ringRef: hv,
        centreLineRef: ev,
        snapCentre: gv,
        ready: pv,
        measure: dv,
        k: Nv,
        viewport: lv,
        boxes: Tv,
        pieces: Wv,
        selected: wv,
        insets: av,
        layout: sv,
        canMove: Cv,
        onSelect: iv,
        onMove: cv
      } = vv;
      const Gv = (0, Sv.useRef)(null),
        mv = (0, Sv.useCallback)((() => null !== Gv.current), []),
        jv = (vv, zv) => {
          if (!zv) return null;
          const Pv = (0, zz.b)(vv.origin),
            hv = (0, zz.b)(zv),
            Sv = (vv.to.dx - vv.from.dx) * lv.width,
            ev = (vv.to.dy - vv.from.dy) * lv.height,
            gv = zv.right - zv.left,
            pv = zv.bottom - zv.top;
          return {
            skew: {
              x: hv.x - Pv.x - Sv,
              y: hv.y - Pv.y - ev
            },
            box: {
              left: Pv.x - gv / 2,
              top: Pv.y - pv / 2,
              right: Pv.x + gv / 2,
              bottom: Pv.y + pv / 2
            }
          }
        },
        fv = (vv, Pv) => {
          var Sv;
          const gv = Gv.current;
          if (!gv || gv.pointerId !== vv.pointerId) return;
          Gv.current = null, null === (Sv = ev.current) || void 0 === Sv || Sv.classList.remove("Shown", "Snapped");
          const pv = hv.current;
          if (pv && null !== gv.ringStyle && pv.setAttribute("style", gv.ringStyle), Pv && gv.moved) {
            const vv = kz(gv.to) ? null : dv(gv.id),
              zv = vv ? (0, zz.C)(vv, (0, zz.z)(lv.width, lv.height, av)) : {
                x: 0,
                y: 0
              },
              Pv = {
                dx: gv.to.dx + zv.x / lv.width,
                dy: gv.to.dy + zv.y / lv.height
              },
              hv = kz(gv.to) ? Pv : uz(Pv);
            cv(gv.id, hv.dx, hv.dy)
          } else zv(gv.id, null), Pv && gv.tapPick && iv(gv.tapPick)
        };
      return {
        busy: mv,
        handlers: {
          onPointerDown: vv => {
            var zv;
            if (!pv || Gv.current || !vv.target.closest(".HudPreviewHandle")) return;
            const hv = Pv.current.getBoundingClientRect(),
              Sv = {
                x: (vv.clientX - hv.left) / Nv,
                y: (vv.clientY - hv.top) / Nv
              },
              ev = (0, zz.u)(Sv, Wv, 40 / Nv),
              gv = "cluster" === wv && void 0 !== Tv.cluster && null !== (0, zz.u)(Sv, [{
                id: "cluster",
                box: Tv.cluster
              }], 40 / Nv),
              dv = "menu" === wv && void 0 !== Tv.menu && (0, zz.f)(Tv.menu, Sv) && ("menu" === ev || null !== ev && (0, Pz.w)(ev, sv.hudElements[ev])),
              lv = gv ? "cluster" : dv ? "menu" : null,
              av = null !== lv,
              cv = null !== lv && void 0 !== lv ? lv : ev;
            if (!cv) return;
            if (function(vv) {
                bz++;
                const zv = Pv => {
                  Pv.pointerId === vv && (bz = Math.max(0, bz - 1), window.removeEventListener("pointerup", zv, !0), window.removeEventListener("pointercancel", zv, !0))
                };
                window.addEventListener("pointerup", zv, !0), window.addEventListener("pointercancel", zv, !0)
              }(vv.pointerId), !Cv(cv)) return void iv(av && ev ? ev : cv);
            iv(cv);
            const [mv, jv] = null !== (zv = sv.hudElements[cv]) && void 0 !== zv ? zv : [0, 0], fv = {
              dx: mv,
              dy: jv
            }, Fv = {
              skew: {
                x: 0,
                y: 0
              },
              box: Tv[cv]
            };
            Gv.current = {
              id: cv,
              pointerId: vv.pointerId,
              startX: vv.clientX,
              startY: vv.clientY,
              origin: Tv[cv],
              from: fv,
              to: fv,
              moved: !1,
              home: kz(fv) ? {
                centre: (0, zz.b)(Tv[cv]),
                anchor: Fv
              } : null,
              away: kz(fv) ? null : Fv,
              anchor: Fv,
              ringStyle: null,
              tapPick: av ? ev : null
            }, vv.currentTarget.setPointerCapture(vv.pointerId)
          },
          onPointerMove: vv => {
            const Pv = Gv.current;
            if (!Pv || Pv.pointerId !== vv.pointerId) return;
            const Sv = vv.clientX - Pv.startX,
              pv = vv.clientY - Pv.startY;
            if (!Pv.moved && Math.hypot(Sv, pv) < 5) return;
            const Tv = !Pv.moved;
            var Wv, wv;
            (Pv.moved = !0, Tv) && (Pv.ringStyle = null !== (Wv = null === (wv = hv.current) || void 0 === wv ? void 0 : wv.getAttribute("style")) && void 0 !== Wv ? Wv : null);
            const sv = (0, zz.z)(lv.width, lv.height, av);
            if (!Pv.home) {
              var Cv;
              Pv.to = {
                dx: 0,
                dy: 0
              }, zv(Pv.id, Pv.to);
              const vv = dv(Pv.id),
                hv = null !== (Cv = jv(Pv, vv)) && void 0 !== Cv ? Cv : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: Pv.origin
                },
                Sv = (0, zz.b)(Pv.origin);
              Pv.home = {
                centre: vv ? (0, zz.b)(vv) : {
                  x: Sv.x - Pv.from.dx * lv.width,
                  y: Sv.y - Pv.from.dy * lv.height
                },
                anchor: hv
              }
            }
            const iv = Pv.home;
            let cv = !1;
            const mv = vv => {
                cv = !1;
                let hv = (0, zz.j)(vv.box, Sv / Nv, pv / Nv, sv);
                const ev = lv.width / 2;
                if (gv && Math.abs((0, zz.b)(Pv.origin).x + hv.x - ev) <= 8 / Nv) {
                  const zv = ev - (0, zz.b)(Pv.origin).x,
                    Sv = (0, zz.j)(vv.box, zv, hv.y, sv);
                  cv = Math.abs(Sv.x - zv) < .01, cv && (hv = Sv)
                }
                const dv = (0, zz.s)(Pv.from, hv.x - vv.skew.x, hv.y - vv.skew.y, lv.width, lv.height);
                Pv.to = uz(dv), Pv.anchor = vv, zv(Pv.id, Pv.to)
              },
              fv = (0, zz.j)(iv.anchor.box, Sv / Nv, pv / Nv, sv),
              Fv = ev.current,
              Yv = (0, zz.b)(Pv.origin),
              nv = ((0, Kv.R)(Pv.id) ? 20 : 6) / Nv;
            if (Math.abs(Yv.x + fv.x - iv.centre.x) <= nv && Math.abs(Yv.y + fv.y - iv.centre.y) <= nv) Pv.to = {
              dx: 0,
              dy: 0
            }, Pv.anchor = iv.anchor, cv = gv && Math.abs(iv.centre.x - lv.width / 2) < 1, zv(Pv.id, Pv.to);
            else if (Pv.away) mv(Pv.away);
            else {
              var Ov;
              mv(iv.anchor), Pv.away = null !== (Ov = jv(Pv, dv(Pv.id))) && void 0 !== Ov ? Ov : iv.anchor, mv(Pv.away)
            }
            null === Fv || void 0 === Fv || Fv.classList.add("Shown"), null === Fv || void 0 === Fv || Fv.classList.toggle("Snapped", cv), (vv => {
              const zv = hv.current;
              if (zv) {
                const {
                  skew: Pv,
                  box: hv
                } = vv.anchor;
                zv.style.left = hv.left * Nv + "px", zv.style.top = hv.top * Nv + "px", zv.style.width = (hv.right - hv.left) * Nv + "px", zv.style.height = (hv.bottom - hv.top) * Nv + "px", zv.style.translate = `${((vv.to.dx-vv.from.dx)*lv.width+Pv.x)*Nv}px ${((vv.to.dy-vv.from.dy)*lv.height+Pv.y)*Nv}px`
              }
            })(Pv)
          },
          onPointerUp: vv => {
            fv(vv, !0)
          },
          onPointerCancel: vv => {
            fv(vv, !1)
          }
        }
      }
    }

    function zP(vv, zv) {
      return Object.keys(vv).filter((vv => vv !== zv)).map((zv => vv[zv]))
    }

    function PP(vv) {
      const zv = [],
        Pv = zv => (0, Kv.R)(zv) && !vv.documentElement.classList.contains((0, hz.F)(zv));
      for (const gv of vv.querySelectorAll(`[${Qv}]`)) {
        const vv = Pv(gv.getAttribute(Qv)) ? gv.querySelector(".ScaleOnHover") : null,
          hv = (null !== vv && void 0 !== vv ? vv : gv).getBoundingClientRect();
        (hv.width > 0 || hv.height > 0) && zv.push({
          id: gv.getAttribute(Qv),
          box: {
            left: hv.left,
            top: hv.top,
            right: hv.right,
            bottom: hv.bottom
          }
        })
      }
      const hv = vv => (0, zz.F)(zv.filter((zv => {
          let {
            id: Pv
          } = zv;
          return vv(Pv)
        })).map((vv => {
          let {
            box: zv
          } = vv;
          return zv
        }))),
        Sv = {};
      for (const gv of new Set(zv.map((vv => vv.id)))) Sv[gv] = hv((vv => vv === gv));
      const ev = hv((vv => Rv.has(vv)));
      return ev && (Sv.cluster = ev), {
        boxes: Sv,
        pieces: zv
      }
    }

    function hP(vv, zv, Pv) {
      const hv = zv.right - zv.left,
        Sv = zv.bottom - zv.top;
      return Lz(vv, "cluster", (zv => {
        const ev = Pv => {
            zv(Pv);
            const hv = [...vv.querySelectorAll(`[${Qv}]:not(.HudPreviewGhost)`)].filter((vv => Rv.has(vv.getAttribute(Qv)))).map((vv => {
                const zv = vv.getBoundingClientRect();
                return {
                  left: zv.left,
                  top: zv.top,
                  right: zv.right,
                  bottom: zv.bottom
                }
              })),
              Sv = (0, zz.F)(hv);
            return Sv ? {
              w: Sv.right - Sv.left,
              h: Sv.bottom - Sv.top
            } : null
          },
          gv = vv => !vv || vv.w <= hv && vv.h <= Sv,
          pv = ev(1),
          dv = ev(Kv.i);
        if (!pv || gv(dv)) return Kv.i;
        const Nv = (vv, zv, Pv) => zv > vv ? 1 + (Pv - vv) * (Kv.i - 1) / (zv - vv) : Kv.i;
        let lv = Math.floor(Math.min(Kv.i, Nv(pv.w, dv.w, hv), Nv(pv.h, dv.h, Sv)) / Pv + 1e-6) * Pv;
        for (; lv > 1 && !gv(ev(lv));) lv = Math.round(100 * (lv - Pv)) / 100;
        return Math.max(1, lv)
      }))
    }

    function SP(vv) {
      qz(document, vv, {
        keysAbove: !1
      });
      const zv = parseFloat(getComputedStyle(vv.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        Pv = Number.isFinite(zv) && zv < 0;
      return qz(document, vv, {
        keysAbove: Pv
      }), Pv
    }

    function eP(vv, zv) {
      let {
        layout: Pv,
        orientation: hv,
        viewport: ev,
        replicaKey: gv,
        joystickFixed: pv,
        busy: dv
      } = zv;
      const [Nv, lv] = (0, Sv.useState)(null), [Tv, Wv] = (0, Sv.useState)({
        boxes: {},
        pieces: []
      }), [wv, av] = (0, Sv.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [sv, Cv] = (0, Sv.useState)(!1), [iv, cv] = (0, Sv.useState)(!1), [Gv, mv] = (0, Sv.useState)(!1), jv = (0, Sv.useCallback)((vv => {
        cv(vv), vv && mv(!0)
      }), []), fv = Pv.hudLayouts[hv].hudSafe;
      (0, Sv.useLayoutEffect)((() => {
        const zv = vv.current.contentDocument;
        zv.open(), zv.write("<!DOCTYPE html><html><head></head><body></body></html>"), zv.close(), lv(zv)
      }), [vv]);
      const Fv = (0, Sv.useCallback)((() => {
          Nv && ((0, Pz.z)(Nv), Wv(PP(Nv)), av(function(vv, zv) {
            const Pv = Az(vv),
              [hv, Sv, ev, gv] = zv ? (0, hz.z)(zv, window.innerWidth, window.innerHeight, Pv) : Pv;
            return {
              top: hv,
              right: Sv,
              bottom: ev,
              left: gv
            }
          }(Nv, fv)))
        }), [Nv, fv]),
        Yv = (0, Sv.useCallback)((() => {
          Nv && Cv(SP(Nv))
        }), [Nv]),
        nv = (0, Sv.useRef)((() => {}));
      return nv.current = () => {
        Yv(), dv() || Fv()
      }, (0, Sv.useLayoutEffect)((() => {
        if (Nv) return tz(document, Nv, (() => {
          nv.current()
        }), jv)
      }), [Nv, jv]), (0, Sv.useLayoutEffect)(Yv, [Yv, ev]), (0, Sv.useLayoutEffect)((() => {
        Nv && (qz(document, Nv, {
          keysAbove: sv
        }), Qz(document, Nv, Pv, hv, pv), Yv(), Fv())
      }), [Nv, Pv, hv, sv, gv, pv, ev, Fv, Yv]), (0, Sv.useEffect)((() => {
        var vv;
        if (!Nv) return;
        const zv = new ResizeObserver((() => {
          dv() || Fv()
        }));
        for (const Pv of Nv.querySelectorAll(`[${Qv}]`)) zv.observe(Pv);
        return null === (vv = Nv.fonts) || void 0 === vv || vv.ready.then(Fv), () => {
          zv.disconnect()
        }
      }), [Nv, Fv, dv, gv]), {
        doc: Nv,
        boxes: Tv.boxes,
        pieces: Tv.pieces,
        insets: wv,
        keysAbove: sv,
        ready: iv,
        settled: Gv
      }
    }
    const gP = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      pP = (vv, zv, Pv) => {
        const hv = vv => (0, Pz.w)(vv, Pv.hudElements[vv]);
        return "cluster" === vv && Rv.has(zv) || "cluster" === zv && Rv.has(vv) || "menu" === vv && hv(zv) || "menu" === zv && hv(vv) || gP.some((hv => {
          let [Sv, ev] = hv;
          const gv = Pv.hudElements.hotbar,
            pv = "inventory" === ev && Pv.hudLocked.includes(ev) && void 0 !== gv && !(0, Kv.P)(gv);
          return (vv === Sv && zv === ev || vv === ev && zv === Sv) && !pv
        }))
      };
    const dP = ["Above", "Below", "Left", "Right"];

    function NP(vv, zv, Pv, hv, Sv) {
      const ev = Pv[vv],
        gv = (ev.left + ev.right) / 2,
        pv = (ev.top + ev.bottom) / 2,
        dv = (7.5 * zv.length + 14) / hv,
        Nv = 18 / hv,
        lv = {
          Above: {
            left: gv - dv / 2,
            top: ev.top - Nv,
            right: gv + dv / 2,
            bottom: ev.top
          },
          Below: {
            left: gv - dv / 2,
            top: ev.bottom,
            right: gv + dv / 2,
            bottom: ev.bottom + Nv
          },
          Left: {
            left: ev.left - dv,
            top: pv - Nv / 2,
            right: ev.left,
            bottom: pv + Nv / 2
          },
          Right: {
            left: ev.right,
            top: pv - Nv / 2,
            right: ev.right + dv,
            bottom: pv + Nv / 2
          }
        },
        Tv = zP(Pv, vv),
        Wv = {
          left: 0,
          top: 0,
          right: Sv.width,
          bottom: Sv.height
        };
      return dP[(0, zz.p)(dP.map((vv => lv[vv])), Tv, {
        bounds: Wv
      })]
    }

    function lP() {
      const [vv, zv] = (0, uv.d)();
      return (0, Sv.useMemo)((() => ({
        width: vv,
        height: zv
      })), [vv, zv])
    }

    function TP(vv) {
      var zv;
      const {
        layout: Pv,
        orientation: ev,
        selected: gv,
        onSelect: pv,
        onMove: Nv,
        canMove: lv,
        actionButtons: Tv,
        joystickFixed: Wv,
        presence: wv,
        keyNames: sv,
        maxHeight: Cv,
        fill: iv = !1,
        apiRef: cv
      } = vv, {
        t: Gv
      } = (0, hv.x)(), mv = lP(), fv = (null !== (zv = (0, av.i)("maxAuraLevel")) && void 0 !== zv ? zv : 0) > 0, Fv = Pv.hudLayouts[ev], Yv = (0, Sv.useRef)(null), nv = (0, Sv.useRef)(null), Dv = (0, Sv.useRef)(null), Vv = (0, Sv.useRef)(null), Uv = (0, Sv.useRef)(null), xv = (0, Sv.useRef)(null), tv = (0, vz.d)(Yv).width, qv = iv ? 1 : tv > 0 ? (0, zz.v)(tv, mv.width, mv.height, Cv) : 0, Iv = (0, Sv.useRef)((() => !1)), Qv = (0, Sv.useCallback)((() => Iv.current()), []), {
        doc: Av,
        boxes: Lv,
        pieces: Hv,
        insets: Mv,
        keysAbove: yv,
        ready: Bv,
        settled: Jv
      } = eP(Dv, {
        layout: Pv,
        orientation: ev,
        viewport: mv,
        replicaKey: `${Tv}:${Wv}:${fv}`,
        joystickFixed: Wv,
        busy: Qv
      }), Ev = (0, Sv.useCallback)((vv => {
        Av && Qz(document, Av, vv, ev, Wv)
      }), [Av, ev, Wv]), ov = (0, Sv.useCallback)((vv => Av && Jv ? (Ev(vv), SP(Av), function(vv) {
        let {
          boxes: zv,
          pieces: Pv
        } = vv;
        const hv = Pv.find((vv => "inventory" === vv.id));
        if (!hv || !zv.inventory) return zv;
        const Sv = (0, zz.b)(zv.inventory),
          ev = Bz(hv.box) / 2,
          gv = (hv.box.bottom - hv.box.top) / 2;
        return {
          ...zv,
          inventory: {
            left: Sv.x - ev,
            top: Sv.y - gv,
            right: Sv.x + ev,
            bottom: Sv.y + gv
          }
        }
      }(PP(Av))) : null), [Av, Jv, Ev]), bv = (0, Sv.useCallback)((vv => !!Av && (Ev(vv), SP(Av))), [Av, Ev]), rv = (0, Sv.useRef)(null), Xv = (0, Sv.useRef)(null), uv = (0, Sv.useRef)(Pv);
      uv.current = Pv;
      const Sz = (0, Sv.useCallback)((() => {
        null !== rv.current && (cancelAnimationFrame(rv.current), rv.current = null)
      }), []);
      (0, Sv.useEffect)((() => Sz), [Pv, Sz]);
      const {
        lockable: ez
      } = vv, gz = (0, Sv.useCallback)((vv => {
        if (Ev(vv), !Jv || 0 === Pv.hudLayouts[ev].hudLocked.length) return;
        const zv = Pv;
        Sz(), rv.current = requestAnimationFrame((() => {
          var Pv;
          if (rv.current = null, uv.current !== zv) return;
          const hv = (null === (Pv = Xv.current) || void 0 === Pv ? void 0 : Pv.from) === zv ? Xv.current.boxes : ov(zv);
          hv && (Xv.current = {
            from: zv,
            boxes: hv
          }), Ev(hv ? Ez(zv, vv, ev, mv, ov, {
            canKeep: ez,
            passes: 1,
            before: hv,
            keysAboveOf: bv
          }) : vv)
        }))
      }), [Ev, Jv, Pv, ev, mv, ov, bv, ez, Sz]), pz = vP({
        preview: (vv, zv) => {
          zv ? gz((0, Kv.eb)(Pv, ev, vv, zv)) : (Sz(), Ev(Pv))
        },
        stageRef: nv,
        ringRef: Vv,
        centreLineRef: Uv,
        snapCentre: Pv.hudSnapCentre,
        ready: Jv,
        measure: vv => {
          var zv;
          return Av && Bv && null !== (zv = PP(Av).boxes[vv]) && void 0 !== zv ? zv : null
        },
        k: qv,
        viewport: mv,
        boxes: Lv,
        pieces: Hv,
        selected: gv,
        insets: Mv,
        layout: Fv,
        canMove: lv,
        onSelect: pv,
        onMove: (vv, zv, Pv) => {
          Sz(), Nv(vv, zv, Pv)
        }
      });
      (0, Sv.useLayoutEffect)((() => {
        Iv.current = pz.busy
      }), [pz.busy]);
      const dz = (0, Sv.useRef)([]),
        Nz = (0, Sv.useRef)(Fv.hudElements);
      (0, Sv.useEffect)((() => {
        for (const Sv of Object.keys(Fv.hudElements)) {
          var vv, zv, Pv, hv;
          (null !== (vv = null === (zv = Fv.hudElements[Sv]) || void 0 === zv ? void 0 : zv[2]) && void 0 !== vv ? vv : 1) > (null !== (Pv = null === (hv = Nz.current[Sv]) || void 0 === hv ? void 0 : hv[2]) && void 0 !== Pv ? Pv : 1) && lv(Sv) && !(0, Pz.w)(Sv, Fv.hudElements[Sv]) && dz.current.push(Sv)
        }
        Nz.current = Fv.hudElements
      }), [Fv.hudElements, lv]), (0, Sv.useEffect)((() => {
        if (!Bv) return;
        const vv = dz.current.shift(),
          zv = vv && Lv[vv];
        if (!vv || !zv || pz.busy()) return;
        const Pv = (0, zz.C)(zv, (0, zz.z)(mv.width, mv.height, Mv));
        if (0 !== Pv.x || 0 !== Pv.y) {
          var hv;
          const [zv, Sv] = null !== (hv = Fv.hudElements[vv]) && void 0 !== hv ? hv : [0, 0];
          Nv(vv, zv + Pv.x / mv.width, Sv + Pv.y / mv.height)
        }
      }), [Lv, Bv]), (0, Sv.useImperativeHandle)(cv, (() => ({
        setScale: (vv, zv) => {
          gz((0, Kv.eb)(Pv, ev, vv, {
            scale: zv
          }))
        },
        setOpacity: vv => {
          Ev({
            ...Pv,
            hudKeyOpacity: vv
          })
        },
        keepLocks: (vv, zv) => (Sz(), Ez(vv, zv, ev, mv, ov, {
          canKeep: ez,
          keysAboveOf: bv
        })),
        setSafe: vv => {
          gz((0, Kv.jb)(Pv, ev, vv)), xv.current && (xv.current.style.inset = (0, hz.z)(vv, mv.width, mv.height, Az(null !== Av && void 0 !== Av ? Av : document)).map((vv => vv * qv + "px")).join(" "))
        }
      })), [Ev, gz, ov, bv, Sz, ez, Av, Pv, ev, mv, qv]);
      const lz = new Set(Object.keys(Fv.hudElements).filter((vv => (0, Kv.x)(Fv.hudElements, vv)))),
        Tz = gv ? Lv[gv] : void 0,
        Wz = gv ? Zv(gv, Tv, Gv, sv) : "",
        wz = (0, nz.g)(mv.width, mv.height),
        az = gv ? function(vv, zv, Pv, hv) {
          const Sv = vv => (0, Kv.x)(Pv.hudElements, vv) || (0, Pz.v)(vv, Pv, hv);
          if (Sv(vv)) return [];
          const ev = zv.filter((zv => {
              let {
                id: Pv
              } = zv;
              return "cluster" === vv ? Rv.has(Pv) : Pv === vv
            })),
            gv = new Set;
          for (const pv of zv) pv.id === vv || gv.has(pv.id) || pP(vv, pv.id, Pv) || Sv(pv.id) || void 0 === Pv.hudElements[vv] && void 0 === Pv.hudElements[pv.id] || ev.some((vv => {
            let {
              id: zv,
              box: Pv
            } = vv;
            return zv !== pv.id && (0, zz.h)(Pv, pv.box, 2)
          })) && gv.add(pv.id);
          return [...gv]
        }(gv, Hv, Fv, wz) : [],
        sz = new Set((0, Pz.s)(Fv.hudElements)),
        Cz = (0, Pz.J)(Fv, (0, Pz.G)(wv.rowIcons)).state,
        iz = az.join(),
        cz = (0, Sv.useRef)(vv.onReady);
      cz.current = vv.onReady, (0, Sv.useEffect)((() => {
        var vv;
        null === (vv = cz.current) || void 0 === vv || vv.call(cz, Jv)
      }), [Jv]);
      const Gz = (0, Sv.useRef)(vv.onMeasured);
      (0, Sv.useLayoutEffect)((() => {
        Gz.current = vv.onMeasured
      })), (0, Sv.useEffect)((() => {
        var vv;
        const zv = Av ? {
          hotbar: Hz(Av, Fz),
          cluster: hP(Av, (0, zz.z)(mv.width, mv.height, Mv), Fz)
        } : {};
        null === (vv = Gz.current) || void 0 === vv || vv.call(Gz, Lv, iz ? iz.split(",") : [], zv)
      }), [Lv, iz, Av, mv, Mv]);
      const mz = vv => ({
        left: vv.left * qv,
        top: vv.top * qv,
        width: (vv.right - vv.left) * qv,
        height: (vv.bottom - vv.top) * qv
      });
      return (0, jv.jsx)("div", {
        ref: Yv,
        className: dv()("HudPreviewBox", {
          Fill: iv
        }),
        style: {
          height: mv.height * qv
        },
        children: (0, jv.jsxs)("div", {
          ref: nv,
          className: "HudPreviewStage",
          style: {
            width: mv.width * qv,
            height: mv.height * qv
          },
          children: [(0, jv.jsx)("iframe", {
            ref: Dv,
            className: "HudPreviewFrame",
            title: Gv("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: mv.width,
              height: mv.height,
              transform: `scale(${qv})`
            }
          }), Av && (0, kv.createPortal)((0, jv.jsx)(jz, {
            presence: wv,
            portraitPhone: wz,
            hidden: lz,
            actionButtons: Tv,
            joystickFixed: Wv,
            keysAbove: yv,
            auraBar: fv,
            trayState: Cz,
            moved: sz
          }), Av.body), (0, jv.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...pz.handlers,
            children: [(0, jv.jsx)("div", {
              ref: xv,
              className: "HudPreviewSafeZone",
              style: {
                top: Mv.top * qv,
                right: Mv.right * qv,
                bottom: Mv.bottom * qv,
                left: Mv.left * qv
              }
            }), Hv.map(((vv, zv) => {
              let {
                id: Pv,
                box: hv
              } = vv;
              return (0, jv.jsx)("div", {
                className: "HudPreviewHandle",
                style: mz((0, zz.m)(hv, 40 / qv))
              }, `${Pv}:${zv}`)
            })), Fv.hudLocked.map((vv => {
              const zv = Lv[vv];
              return zv && (0, jv.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: zv.right * qv,
                  top: zv.top * qv
                },
                children: (0, jv.jsx)(Ov.b, {
                  name: "lock"
                })
              }, vv)
            })), (0, jv.jsx)("div", {
              ref: Uv,
              className: "HudPreviewCentreLine",
              style: {
                left: mv.width / 2 * qv
              }
            }), gv && Tz && (0, jv.jsx)("div", {
              ref: Vv,
              className: dv()("HudPreviewRing", {
                Fixed: !lv(gv),
                Overlap: az.length > 0
              }),
              style: mz(Tz),
              children: (0, jv.jsx)("span", {
                className: dv()("HudPreviewRingLabel", NP(gv, Wz, Lv, qv, mv)),
                children: Wz
              })
            })]
          })]
        })
      })
    }

    function WP(vv, zv) {
      (0, Sv.useEffect)((() => {
        var Pv;
        null === (Pv = vv.current) || void 0 === Pv || Pv.toggleAttribute("inert", zv)
      }), [vv, zv])
    }
    const wP = "hudFullScreen";

    function aP(vv) {
      let {
        onScale: zv,
        onHidden: Pv,
        onReset: ev,
        locked: gv,
        lockable: pv,
        onLocked: dv,
        onClose: lv,
        ...Tv
      } = vv;
      const {
        t: Wv
      } = (0, hv.x)(), wv = (0, Sv.useRef)(null);
      (0, Xv.q)("popup", wv, lv),
      function(vv) {
        const zv = (0, Sv.useRef)(vv);
        zv.current = vv, (0, Sv.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [wP]: !0
          }, "");
          let vv = !1;
          const Pv = () => {
            vv = !0, zv.current()
          };
          return window.addEventListener("popstate", Pv), () => {
            var zv;
            window.removeEventListener("popstate", Pv), !vv && null !== (zv = window.history.state) && void 0 !== zv && zv[wP] && window.history.back()
          }
        }), [])
      }(lv), (0, Sv.useEffect)((() => {
        function vv(vv) {
          "Escape" === vv.key && (vv.stopPropagation(), lv())
        }
        return window.addEventListener("keydown", vv, !0), () => {
          window.removeEventListener("keydown", vv, !0)
        }
      }), [lv]);
      const {
        selected: av
      } = Tv, sv = (0, Sv.useRef)(null), Cv = (0, Sv.useRef)(null), [iv, cv] = (0, Sv.useState)(!1);
      WP(Cv, !iv);
      const [Gv, mv] = (0, Sv.useState)(null), [fv, Fv] = (0, Sv.useState)([]), [Yv, nv] = fz(), Ov = (0, Sv.useRef)(Tv.selected);
      Ov.current = Tv.selected;
      const Dv = (0, Sv.useRef)({}),
        Kv = (0, Sv.useCallback)((() => {
          const vv = sv.current;
          vv && mv(function(vv, zv, Pv) {
            var hv;
            const {
              innerWidth: Sv,
              innerHeight: ev
            } = window, gv = vv.offsetWidth, pv = vv.offsetHeight, dv = Math.max(Zz()[0], 6), Nv = [];
            for (const Wv of [dv, .2 * ev, .5 * ev - pv / 2, .33 * ev])
              for (const vv of [.5, .3, .7]) Nv.push({
                left: Math.max(0, Math.min(Sv - gv - 6, Math.max(6, Sv * vv - gv / 2))),
                top: Wv
              });
            const lv = Nv.map((vv => ({
                left: vv.left - 6,
                top: vv.top - 6,
                right: vv.left + gv + 6,
                bottom: vv.top + pv + 6
              }))),
              Tv = zP(zv, Pv);
            return Nv[(0, zz.p)(lv, Tv, {
              avoid: Pv && null !== (hv = zv[Pv]) && void 0 !== hv ? hv : null
            })]
          }(vv, Dv.current, Ov.current))
        }), []),
        Vv = (0, Sv.useCallback)(((vv, zv, Pv) => {
          Fv(zv), nv(Pv), Dv.current = vv, Kv()
        }), [Kv, nv]);
      return (0, Sv.useLayoutEffect)(Kv, [Tv.selected, Kv]), (0, kv.createPortal)((0, jv.jsxs)("div", {
        ref: wv,
        className: "HudFullScreenEditor",
        children: [(0, jv.jsx)(TP, {
          ...Tv,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: Vv,
          onReady: cv,
          lockable: pv
        }), (0, jv.jsxs)("div", {
          ref: sv,
          className: "HudFullScreenToolbar",
          style: null === Gv ? void 0 : {
            left: Gv.left,
            top: Gv.top,
            transform: "none"
          },
          children: [(0, jv.jsx)("div", {
            ref: Cv,
            className: "HudFullScreenControls",
            children: (0, jv.jsx)(Yz, {
              selected: av,
              layout: Tv.layout.hudLayouts[Tv.orientation],
              actionButtons: Tv.actionButtons,
              keyNames: Tv.keyNames,
              overlaps: fv,
              scaleCaps: Yv,
              onScale: zv,
              onHidden: Pv,
              onReset: ev,
              locked: gv,
              lockable: pv,
              onLocked: dv,
              joystickFixed: Tv.joystickFixed
            })
          }), (0, jv.jsx)(Nv.d, {
            className: "HudFullScreenDone",
            onClick: lv,
            padDefaultFocus: !0,
            children: Wv("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const sP = vv => `${Math.round(100*vv)}%`;

    function CP(vv) {
      let {
        info: zv,
        tuple: Pv,
        props: Sv
      } = vv;
      const {
        t: ev
      } = (0, hv.x)();
      return (0, jv.jsx)(wv.i, {
        name: ev("hudLayout:size"),
        min: Kv.k,
        max: Kv.i,
        step: Fz,
        initValue: Pv[2],
        disabled: Sv.locked.has(zv.id),
        selectableMax: Sv.scaleCaps[zv.id],
        cappedNote: ev("hudLayout:sizeCapped"),
        format: sP,
        onChange: vv => {
          Sv.onScalePreview(zv.id, vv)
        },
        onChangeComplete: vv => {
          Sv.onScale(zv.id, vv)
        }
      })
    }

    function iP(vv) {
      const {
        t: zv
      } = (0, hv.x)(), {
        present: Pv,
        elements: ev,
        selected: gv,
        onSelect: pv,
        onHidden: Nv,
        onReset: lv,
        note: Tv,
        actionButtons: Wv,
        keyNames: wv,
        sizeBesidePreview: av,
        locked: sv,
        lockable: Cv,
        onLocked: iv
      } = vv, {
        rowIconsOpen: cv,
        onRowIconsOpen: Gv
      } = vv, mv = (0, Sv.useRef)(null), fv = null !== gv && (cv || !(0, Kv.R)(gv));
      return (0, Sv.useEffect)((() => {
        var vv;
        const zv = gv ? null === (vv = mv.current) || void 0 === vv ? void 0 : vv.querySelector(`[data-hud-row="${gv}"]`) : null;
        if (!zv) return;
        const Pv = zv.closest(".SettingsMenuRight"),
          hv = performance.now();
        let Sv = null;
        const ev = () => {
            clearInterval(dv), null === Pv || void 0 === Pv || Pv.removeEventListener("scroll", pv)
          },
          pv = () => {
            rz() || ev()
          },
          dv = setInterval((() => {
            const vv = performance.now();
            vv - hv > 1500 ? ev() : rz() ? Sv = null : null === Sv ? Sv = vv : vv - Sv >= 150 && (ev(), function(vv) {
              var zv;
              const Pv = vv.closest(".SettingsMenuRight"),
                hv = null === (zv = vv.closest(".HudLayoutSettings")) || void 0 === zv ? void 0 : zv.querySelector(".HudLayoutPreviewBox");
              if (!Pv || !hv) return;
              const Sv = hv.getBoundingClientRect().bottom + 8,
                ev = Pv.getBoundingClientRect().bottom - 8,
                gv = vv.getBoundingClientRect();
              gv.top < Sv ? Pv.scrollBy({
                top: gv.top - Sv,
                behavior: "smooth"
              }) : gv.bottom > ev && Pv.scrollBy({
                top: Math.min(gv.bottom - ev, gv.top - Sv),
                behavior: "smooth"
              })
            }(zv))
          }), 50);
        return null === Pv || void 0 === Pv || Pv.addEventListener("scroll", pv, {
          passive: !0
        }), ev
      }), [gv, fv]), (0, jv.jsx)("div", {
        ref: mv,
        className: "SettingBoxGroup HudElementList",
        children: qv.filter((vv => Pv.has(vv.id) && (cv || !(0, Kv.R)(vv.id)))).map((Pv => {
          const hv = ((vv, zv) => {
              var Pv;
              return null !== (Pv = vv[zv]) && void 0 !== Pv ? Pv : Kv.q
            })(ev, Pv.id),
            Sv = (0, Kv.x)(ev, Pv.id),
            mv = Pv.id === gv,
            fv = Pv.scale && !av,
            Fv = Tv(Pv.id, mv);
          return (0, jv.jsxs)("div", {
            "data-hud-row": Pv.id,
            className: dv()("SettingBox HudElementRow", {
              Open: mv,
              Hidden: Sv,
              Child: void 0 !== Pv.parent
            }),
            children: [(0, jv.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, jv.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": fv ? mv : void 0,
                onClick: () => {
                  pv(Pv.id)
                },
                children: [Zv(Pv.id, Wv, zv, wv), Pv.scale && 1 !== hv[2] && !(mv && fv) && (0, jv.jsx)("span", {
                  className: "HudElementRowSize",
                  children: sP(hv[2])
                }), fv && (0, jv.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, jv.jsx)(yv, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Pv.id,
                actionButtons: Wv,
                keyNames: wv,
                locked: sv.has(Pv.id),
                lockable: Cv(Pv.id),
                onLocked: iv
              }), "menu" === Pv.id && (0, jv.jsx)(Bv, {
                className: "HudElementRowIcon",
                open: cv,
                name: Zv(Pv.id, Wv, zv, wv),
                onToggle: Gv
              }), "menu" !== Pv.id && (0, jv.jsx)(Hv, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: Pv.id,
                elements: ev,
                actionButtons: Wv,
                keyNames: wv,
                onHidden: Nv
              }), (0, jv.jsx)(Mv, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: sv.has(Pv.id),
                id: Pv.id,
                elements: ev,
                actionButtons: Wv,
                keyNames: wv,
                onReset: lv
              })]
            }), mv && fv && (0, jv.jsx)(CP, {
              info: Pv,
              tuple: hv,
              props: vv
            }), Fv && (0, jv.jsx)("div", {
              className: "HudElementNote",
              children: Fv
            })]
          }, Pv.id)
        }))
      })
    }

    function cP(vv) {
      let {
        preview: zv,
        quick: Pv,
        onFullScreen: ev,
        resting: gv,
        onSidePanel: pv
      } = vv;
      const {
        t: dv
      } = (0, hv.x)(), lv = lP(), Tv = (0, Sv.useRef)(null), {
        width: Wv
      } = (0, vz.d)(Tv), wv = Math.floor(lv.width * Math.min(1, zv.maxHeight / lv.height)), av = Wv - wv - 12, sv = av >= 130, Cv = Wv > 0;
      (0, Sv.useEffect)((() => {
        Cv && pv(sv)
      }), [Cv, sv, pv]);
      const iv = (0, zz.v)(sv ? wv : Wv, lv.width, lv.height, zv.maxHeight),
        cv = gv ? (0, jv.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: lv.height * iv
          }
        }) : (0, jv.jsx)(TP, {
          ...zv
        }),
        Gv = vv => (0, jv.jsxs)(Nv.K, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: dv("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: ev,
          children: [(0, jv.jsx)(Ov.b, {
            name: "expand"
          }), vv && (0, jv.jsx)("span", {
            children: dv("hudLayout:fullScreen")
          })]
        });
      return (0, jv.jsxs)("div", {
        ref: Tv,
        className: "SettingBox HudLayoutPreviewBox",
        children: [Wv > 0 && sv && (0, jv.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, jv.jsx)("div", {
            style: {
              width: wv
            },
            children: cv
          }), (0, jv.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, jv.jsx)(Yz, {
              selected: zv.selected,
              ...Pv,
              joystickFixed: zv.joystickFixed,
              extra: Gv(!zv.selected || av >= 278)
            })
          })]
        }), Wv > 0 && !sv && (0, jv.jsxs)(jv.Fragment, {
          children: [cv, (0, jv.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: Gv(!1)
          })]
        })]
      })
    }
    var GP = Pv(2359),
      mP = Pv(4165),
      jP = Pv(2343),
      fP = Pv(2320);
    const FP = vv => {
      const zv = hz.t * ("sides" === vv ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(zv / 2))
    };

    function YP(vv, zv, Pv) {
      const [hv, Sv, ev, gv] = vv;
      return "sides" === zv ? [hv, Pv, ev, Pv] : [Pv, Sv, Pv, gv]
    }
    const nP = [null, null, null, null],
      OP = vv => `${vv}px`;

    function DP(vv) {
      let {
        safe: zv,
        onPreview: Pv,
        onCommit: ev
      } = vv;
      const {
        t: gv
      } = (0, hv.x)(), pv = (0, hz.z)(null !== zv && void 0 !== zv ? zv : nP, window.innerWidth, window.innerHeight, Az(document).map(Math.round)), dv = (0, Sv.useRef)(null !== zv && void 0 !== zv ? zv : nP);
      dv.current = null !== zv && void 0 !== zv ? zv : nP;
      const lv = vv => {
        const zv = Math.min(FP(vv), "sides" === vv ? Math.max(pv[1], pv[3]) : Math.max(pv[0], pv[2]));
        return (0, jv.jsx)(wv.i, {
          name: gv("sides" === vv ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: FP(vv),
          step: 2,
          initValue: zv,
          format: OP,
          onChange: zv => {
            Pv(YP(dv.current, vv, zv))
          },
          onChangeComplete: hv => {
            if (hv === zv) return void Pv(dv.current);
            const Sv = YP(dv.current, vv, hv);
            dv.current = Sv, ev(Sv), (0, Yv.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: vv
            })
          }
        })
      };
      return (0, jv.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, jv.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, jv.jsx)("div", {
            children: gv("hudLayout:safeZone")
          }), (0, jv.jsx)(Nv.K, {
            active: null === zv,
            pressed: null === zv,
            onClick: () => {
              ev(null)
            },
            children: gv("hudLayout:safeZoneAuto")
          })]
        }), lv("sides"), lv("ends")]
      })
    }

    function KP() {
      var vv, zv;
      const {
        t: Pv
      } = (0, hv.x)(), ev = (0, Kv.bb)(), {
        clientEscMenuOptions: gv
      } = (0, lv.i)(["clientEscMenuOptions"]), pv = (0, GP.g)(), dv = ev.hudLayouts[pv], [Tv, Wv] = (0, Sv.useState)(null), {
        rowIconsOpen: av,
        onRowIconsOpen: sv,
        select: Cv
      } = function(vv, zv) {
        const [Pv, hv] = (0, Sv.useState)((() => Kv.I.some((zv => void 0 !== vv.hudElements[zv] || vv.hudLocked.includes(zv))))), ev = (0, Sv.useCallback)((vv => {
          zv(vv), (0, Kv.R)(vv) && hv(!0)
        }), [zv]);
        return {
          rowIconsOpen: Pv,
          onRowIconsOpen: hv,
          select: ev
        }
      }(dv, Wv), [iv, cv] = (0, Sv.useState)([]), [Gv, mv] = (0, Sv.useState)(null), [fv, Fv] = fz(), Ov = (0, Sv.useCallback)(((vv, zv, Pv) => {
        cv(zv), Fv(Pv);
        const hv = Object.keys(vv);
        mv((vv => (null === vv || void 0 === vv ? void 0 : vv.size) === hv.length && hv.every((zv => vv.has(zv))) ? vv : new Set(hv)))
      }), [Fv]), {
        gameState: Dv
      } = (0, lv.i)(["gameState"]), Vv = (0, jP.i)(), Uv = null !== (vv = null === (zv = (0, fP.m)()) || void 0 === zv ? void 0 : zv.icon) && void 0 !== vv ? vv : null, [Rv] = (0, Sv.useState)((() => "inGame" === Dv ? function(vv, zv, Pv) {
        const hv = vv.querySelector(".InGameUi .TouchComponentsButtons");
        if (!hv) return gz;
        const Sv = {},
          ev = {};
        for (const lv of ez) {
          const vv = hv.querySelector(`.TouchSlot${lv} > .TouchKey`);
          if (vv) {
            var gv, pv;
            Sv[lv] = vv.cloneNode(!0);
            const zv = (null !== (gv = null === (pv = vv.querySelector(".TouchKeyLabel")) || void 0 === pv ? void 0 : pv.textContent) && void 0 !== gv ? gv : "").split(/\s+/).filter((vv => !/[\d\xd7]/.test(vv))).join(" ");
            zv && (ev[lv] = zv)
          }
        }
        const dv = zv => {
            const Pv = vv.querySelector(`.InGameUi ${zv}`);
            return null !== Pv && !Pv.classList.contains("Hidden")
          },
          Nv = [...vv.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((vv => vv.cloneNode(!0)));
        return {
          faces: Object.keys(Sv).length > 0 ? Sv : null,
          names: ev,
          shop: dv(".TouchInventoryKey.ShopKey"),
          bag: dv(".TouchInventoryKey.BagKey"),
          items: Nv.length > 0 ? Nv : null,
          rowIcons: zv,
          pinnedIcon: Pv
        }
      }(document, Vv, Uv) : gz)), xv = (0, Sv.useRef)(null), tv = (0, Sv.useRef)(null), Qv = function(vv) {
        const [zv, Pv] = (0, Sv.useState)((() => .4 * window.innerHeight));
        return (0, Sv.useLayoutEffect)((() => {
          var zv;
          const hv = null === (zv = vv.current) || void 0 === zv ? void 0 : zv.closest(".SettingsMenuRight");
          if (!hv) return;
          const Sv = () => {
            const vv = hv.clientHeight < VP ? .4 : .5;
            Pv(Math.max(80, hv.clientHeight * vv - 24))
          };
          Sv();
          const ev = new ResizeObserver(Sv);
          return ev.observe(hv), () => {
            ev.disconnect()
          }
        }), [vv]), zv
      }(tv), Zv = (0, mP.j)(gv.joystickMode), Lv = gv.touchActionButtons, Hv = (0, Sv.useMemo)((() => function(vv, zv) {
        const Pv = {},
          hv = [
            ["extra", "X"],
            ["game", "G"]
          ];
        zv || hv.push(["attack", "P"]);
        for (const [Sv, ev] of hv) {
          const zv = vv.names[ev];
          zv && (Pv[Sv] = zv)
        }
        return Pv
      }(Rv, Lv)), [Rv, Lv]);
      (0, Sv.useEffect)((() => {
        (0, Yv.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [Mv, yv] = (0, Sv.useState)(!1), [Bv, Jv] = (0, Sv.useState)(!1), Ev = (0, Sv.useRef)(null);
      WP(Ev, !Bv);
      const [ov, kv] = (0, Sv.useState)(!1), Xv = (0, Sv.useCallback)((() => {
        kv(!1)
      }), []), uv = (0, Sv.useMemo)((() => new Set(dv.hudLocked)), [dv.hudLocked]), vz = vv => {
        var zv, Pv;
        const hv = (0, Kv.t)(),
          Sv = vv(hv);
        (0, Kv._)(null !== (zv = null === (Pv = xv.current) || void 0 === Pv ? void 0 : Pv.keepLocks(hv, Sv)) && void 0 !== zv ? zv : Sv)
      }, zz = (vv, zv) => {
        vz((Pv => (0, Kv.eb)(Pv, pv, vv, zv)))
      }, hz = (vv, zv, Pv) => {
        zz(vv, {
          dx: zv,
          dy: Pv
        }), (0, Yv.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${vv}`
        })
      }, Sz = (vv, zv) => {
        vz((Pv => (0, Kv.fb)(Pv, pv, vv, zv)))
      }, pz = vv => {
        const zv = Iv[vv];
        return (zv.move || zv.scale) && ("joystick" !== vv || Zv) && !(0, Pz.w)(vv, dv.hudElements[vv])
      }, dz = vv => Iv[vv].move && ("joystick" !== vv || Zv) && !uv.has(vv), Nz = new Set(qv.map((vv => vv.id)).filter((vv => {
        const zv = (0, Kv.R)(vv) && !Rv.rowIcons.includes(vv);
        return null === Gv || Gv.has(vv) || (0, Kv.x)(dv.hudElements, vv) && !zv
      }))), lz = {
        present: Nz,
        actionButtons: Lv,
        keyNames: Hv,
        scaleCaps: fv,
        sizeBesidePreview: Mv,
        elements: dv.hudElements,
        selected: Tv,
        onSelect: Cv,
        rowIconsOpen: av,
        onRowIconsOpen: sv,
        onScalePreview: (vv, zv) => {
          var Pv;
          null === (Pv = xv.current) || void 0 === Pv || Pv.setScale(vv, zv)
        },
        onScale: (vv, zv) => {
          zz(vv, {
            scale: zv
          }), (0, Yv.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${vv}`
          })
        },
        onHidden: (vv, zv) => {
          zz(vv, {
            hidden: zv
          }), (0, Yv.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${zv?"hide":"show"}:${vv}`
          })
        },
        onReset: vv => {
          zz(vv, Kv.e)
        },
        locked: uv,
        lockable: pz,
        onLocked: Sz,
        note: (vv, zv) => {
          const hv = zv && iv.length > 0 ? Pv("hudLayout:overlapsNote", {
            names: Av(iv, Lv, Pv, Hv)
          }) : null;
          return zv && bv(vv, Zv) ? (0, jv.jsxs)(jv.Fragment, {
            children: [hv && (0, jv.jsx)("span", {
              children: hv
            }), (0, jv.jsx)("span", {
              children: Pv("hudLayout:floatingJoystickNote")
            }), !Mv && (0, jv.jsx)(rv, {})]
          }) : hv || (zv && uv.has(vv) ? Pv("hudLayout:lockedNote") : zv && "cluster" === vv ? Pv("hudLayout:clusterNote") : zv && "menu" === vv ? Pv("hudLayout:menuNote") : zv && (0, Pz.w)(vv, dv.hudElements[vv]) && dz(vv) ? Pv("hudLayout:rowIconNote") : zv && "arrows" === vv ? Pv("hudLayout:arrowsNote") : "inventory" === vv && (0, Kv.x)(dv.hudElements, "inventory") ? Pv("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, jv.jsxs)("div", {
        ref: tv,
        className: "HudLayoutSettings",
        children: [(0, jv.jsxs)("div", {
          ref: Ev,
          className: "HudLayoutBody",
          children: [(0, jv.jsx)("div", {
            className: "HudLayoutOrientation",
            children: Pv("landscape" === pv ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, jv.jsx)(cP, {
            preview: {
              layout: ev,
              orientation: pv,
              selected: Tv,
              onSelect: Cv,
              onMove: hz,
              canMove: dz,
              actionButtons: Lv,
              joystickFixed: Zv,
              presence: Rv,
              keyNames: Hv,
              maxHeight: Qv,
              apiRef: xv,
              onMeasured: Ov,
              onReady: Jv,
              lockable: pz
            },
            quick: {
              layout: dv,
              actionButtons: Lv,
              keyNames: Hv,
              scaleCaps: fv,
              overlaps: iv,
              onScale: lz.onScale,
              onHidden: lz.onHidden,
              onReset: lz.onReset,
              locked: uv,
              lockable: pz,
              onLocked: Sz
            },
            onFullScreen: () => {
              kv(!0)
            },
            resting: ov,
            onSidePanel: yv
          }), ov && (0, jv.jsx)(aP, {
            layout: ev,
            orientation: pv,
            selected: Tv,
            onSelect: Cv,
            onMove: hz,
            canMove: dz,
            actionButtons: Lv,
            joystickFixed: Zv,
            presence: Rv,
            keyNames: Hv,
            onScale: lz.onScale,
            onHidden: lz.onHidden,
            onReset: lz.onReset,
            locked: uv,
            lockable: pz,
            onLocked: Sz,
            apiRef: xv,
            onClose: Xv
          }), (0, jv.jsx)(DP, {
            safe: dv.hudSafe,
            onCommit: vv => {
              vz((zv => (0, Kv.jb)(zv, pv, vv)))
            },
            onPreview: vv => {
              var zv;
              null === (zv = xv.current) || void 0 === zv || zv.setSafe(vv)
            }
          }), (0, jv.jsx)(wv.e, {
            label: Pv("hudLayout:snapCentre"),
            checked: ev.hudSnapCentre,
            onClick: vv => {
              (0, Kv.Z)(vv)
            },
            circleInfoText: Pv("hudLayout:snapCentreInfo")
          }), (0, jv.jsx)(iP, {
            ...lz
          }), (0, jv.jsx)(wv.f, {
            label: Pv("hudLayout:shape"),
            options: Kv.K.map((vv => ({
              value: vv,
              label: Pv(`hudLayout:shape_${vv}`)
            }))),
            value: ev.hudShape,
            onChange: vv => {
              vz((zv => ({
                ...zv,
                hudShape: vv
              }))), (0, Yv.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: vv
              })
            }
          }), (0, jv.jsx)(wv.i, {
            name: Pv("hudLayout:opacity"),
            min: Kv.g,
            max: 1,
            step: .05,
            initValue: ev.hudKeyOpacity,
            format: vv => `${Math.round(100*vv)}%`,
            circleInfoText: Pv("hudLayout:opacityInfo"),
            onChange: vv => {
              var zv;
              null === (zv = xv.current) || void 0 === zv || zv.setOpacity(vv)
            },
            onChangeComplete: vv => {
              (0, Kv.X)(vv), (0, Yv.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, jv.jsx)(Nv.A, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const vv = nv.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await vv.getResult() && (0, Kv.V)()
            }()
          },
          children: Pv("hudLayout:resetAll")
        })]
      })
    }
    const VP = 350;
    const UP = [function() {
      const {
        t: vv
      } = (0, hv.x)(), [zv, Pv] = (0, Sv.useState)(!1), ev = (0, Sv.useRef)(null);
      return (0, Sv.useEffect)((() => {
        var vv;
        zv && (null === (vv = ev.current) || void 0 === vv || vv.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [zv]), (0, jv.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, jv.jsxs)("button", {
          ref: ev,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": zv,
          onClick: () => {
            Pv(!zv)
          },
          children: [(0, jv.jsx)(Ov.b, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, jv.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, jv.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: vv("hudLayout:title")
            }), (0, jv.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: vv("hudLayout:entrySub")
            })]
          }), (0, jv.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), zv && (0, jv.jsx)(KP, {})]
      })
    }, function() {
      const {
        t: vv
      } = (0, hv.x)(), {
        joystickMode: zv,
        touchSpeedCurve: Pv,
        autorun: Sv,
        jumpLock: ev
      } = (0, lv.i)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, jv.jsxs)(jv.Fragment, {
        children: [(0, jv.jsx)(wv.f, {
          label: vv("settingsMenu:joystick"),
          options: mv.sb.map((zv => ({
            value: zv,
            label: vv(fv[zv])
          }))),
          value: zv,
          onChange: vv => {
            lv.c.setClientEscMenuOptions({
              joystickMode: vv
            })
          },
          circleInfoText: vv("settingsMenu:joystickInfo")
        }), (0, jv.jsx)(wv.e, {
          label: vv("settingsMenu:preciseWalking"),
          checked: Pv,
          onClick: vv => {
            lv.c.setClientEscMenuOptions({
              touchSpeedCurve: vv
            })
          },
          circleInfoText: vv("settingsMenu:preciseWalkingInfo")
        }), (0, jv.jsx)(wv.e, {
          label: vv("settingsMenu:autoRun"),
          checked: Sv,
          onClick: vv => {
            lv.c.setClientEscMenuOptions({
              autorun: vv
            })
          },
          circleInfoText: vv("settingsMenu:autoRunInfo")
        }), (0, jv.jsx)(wv.e, {
          label: vv("settingsMenu:jumpLock"),
          checked: ev,
          onClick: vv => {
            lv.c.setClientEscMenuOptions({
              jumpLock: vv
            })
          },
          circleInfoText: vv("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, jv.jsx)(Gv.b, {})
    }, function() {
      const {
        t: vv
      } = (0, hv.x)(), {
        clientEscMenuOptions: zv
      } = (0, lv.i)(["clientEscMenuOptions"]);
      return (0, Fv.d)() ? (0, jv.jsx)(wv.e, {
        label: vv("settingsMenu:vibration"),
        checked: zv.vibration,
        onClick: vv => {
          lv.c.setClientEscMenuOptions({
            vibration: vv
          })
        },
        circleInfoText: vv("settingsMenu:vibrationInfo")
      }) : null
    }];

    function RP() {
      return (0, jv.jsx)(jv.Fragment, {
        children: UP.map(((vv, zv) => (0, jv.jsx)(vv, {}, zv)))
      })
    }
    var xP = Pv(4138);

    function tP() {
      const {
        t: vv
      } = (0, hv.x)(), {
        isTouchScreen: zv,
        clientEscMenuOptions: Pv,
        gameState: gv
      } = (0, lv.i)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), pv = (0, av.i)("ezBridging"), dv = (0, av.i)("ezTowering"), Cv = "inGame" !== gv || !0 === pv, iv = (0, sv.e)() && ("inGame" !== gv || !0 === dv), [, Gv] = (0, Sv.useReducer)((vv => vv + 1), 0), mv = (0, cv.g)(), [fv, Fv] = (0, Sv.useState)(xP.e);
      return (0, jv.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [mv && (0, jv.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, jv.jsx)("div", {
            children: vv("controller:settingsControlsNote")
          }), (0, jv.jsx)(Nv.K, {
            onClick: () => {
              lv.c.set({
                openSettingsCategory: "controller"
              })
            },
            children: vv("controller:settingsOpenController")
          })]
        }), (0, Tv.isTouchscreen)() && !(0, Tv.isMobile)() ? (0, jv.jsx)(jv.Fragment, {
          children: (0, jv.jsx)(wv.e, {
            label: vv("settingsMenu:useTouchControls"),
            checked: fv,
            onClick: vv => {
              (0, xP.b)(vv), Fv(vv)
            }
          })
        }) : null, zv && (0, jv.jsx)(RP, {}), Cv && (0, jv.jsx)(wv.e, {
          label: vv("settingsMenu:ezBridging"),
          checked: Pv.ezBridging,
          onClick: vv => {
            lv.c.setClientEscMenuOptions({
              ezBridging: vv
            })
          },
          circleInfoText: vv("settingsMenu:ezBridgingInfo")
        }), iv && (0, jv.jsx)(wv.e, {
          label: vv("settingsMenu:ezTowering"),
          checked: Pv.ezTowering,
          onClick: vv => {
            lv.c.setClientEscMenuOptions({
              ezTowering: vv
            })
          },
          circleInfoText: vv("settingsMenu:ezToweringInfo")
        }), (0, jv.jsx)(wv.e, {
          label: vv("settingsMenu:crouchToggle"),
          checked: Pv.crouchIsToggle,
          onClick: vv => {
            lv.c.setClientEscMenuOptions({
              crouchIsToggle: vv
            })
          },
          circleInfoText: vv("settingsMenu:crouchToggleInfo")
        }), (0, jv.jsx)(wv.e, {
          label: vv("settingsMenu:hideUiToggle"),
          checked: Pv.hideUiIsToggle,
          onClick: vv => {
            lv.c.setClientEscMenuOptions({
              hideUiIsToggle: vv
            })
          },
          circleInfoText: vv("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, Wv.b)() && (0, jv.jsx)(wv.i, {
          name: vv("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: Pv.touchscreenSensitivity,
          onChange: vv => {
            lv.c.setClientEscMenuOptions({
              touchscreenSensitivity: vv
            })
          }
        }), !(0, Tv.isMobile)() && (0, jv.jsx)(wv.i, {
          name: vv("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: Pv.mouseSensitivity,
          onChange: vv => {
            lv.c.setClientEscMenuOptions({
              mouseSensitivity: vv
            })
          }
        }), !(0, Tv.isMobile)() && (0, jv.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, jv.jsx)("div", {
            className: "SliderText",
            children: vv("settingsMenu:keyBindings")
          }), ev.g.map((zv => (0, jv.jsx)(qP, {
            title: vv(zv.name.translationKey, zv.name.params),
            defaultOpen: ev.k.has(zv.id),
            children: zv.actions.map((vv => (0, jv.jsx)(IP, {
              noaAction: vv,
              forceUpdate: Gv,
              clashesWith: zv.clashesWith,
              showPadGlyph: mv
            }, vv)))
          }, zv.name.translationKey))), (0, jv.jsx)(Nv.A, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, ev.K)(), Gv()
            },
            children: vv("controls:resetBindings")
          })]
        })]
      })
    }

    function qP(vv) {
      let {
        title: zv,
        defaultOpen: Pv,
        children: hv
      } = vv;
      const [ev, gv] = (0, Sv.useState)(Pv);
      return (0, jv.jsxs)("div", {
        className: dv()("ControlsSection", {
          Collapsed: !ev
        }),
        children: [(0, jv.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            gv(!ev)
          },
          children: [(0, jv.jsx)("div", {
            className: "ControlsSectionTitle",
            children: zv
          }), (0, jv.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), ev && (0, jv.jsx)("div", {
          className: "ControlsSectionRows",
          children: hv
        })]
      })
    }

    function IP(vv) {
      let {
        noaAction: zv,
        forceUpdate: Pv,
        clashesWith: pv,
        showPadGlyph: lv
      } = vv;
      const {
        t: Tv
      } = (0, hv.x)(), Wv = (0, iv.d)(zv), [wv, av] = (0, Sv.useState)(!1), [sv, cv] = (0, Sv.useState)("controls:clickToEnterNewBinding"), [Gv, mv] = (0, Sv.useState)(null), [fv, Fv] = (0, Sv.useState)(null), Yv = (0, Sv.useRef)(null);
      (0, Sv.useEffect)((() => {
        wv && Yv.current && Yv.current.focus()
      }), [wv]);
      const nv = ev.z[zv].filter((vv => gv.e[vv]));
      let Ov = null;
      const Dv = [],
        Kv = pv.flatMap((vv => {
          var zv, Pv;
          return null !== (zv = null === (Pv = ev.g.find((zv => zv.id === vv))) || void 0 === Pv ? void 0 : Pv.actions) && void 0 !== zv ? zv : []
        }));
      for (const hv of Kv) {
        if (hv === zv) continue;
        const vv = ev.z[hv];
        for (const zv of vv) nv.includes(zv) && Dv.push(Tv(ev.C[hv].translationKey, ev.C[hv].params))
      }
      Dv.length > 0 && (Ov = Tv("controls:sharedBindingsWarning") + " ", Ov += Dv.join(", "));
      const Vv = () => {
          av(!1), mv(null), cv("controls:clickToEnterNewBinding"), Fv(null)
        },
        Uv = () => "BindingInput_" + zv;
      return (0, jv.jsxs)("div", {
        className: dv()("ControlRow", {
          WarningBorder: null !== Ov
        }),
        children: [(0, jv.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, jv.jsxs)("div", {
            className: "ControlName",
            children: [Tv(ev.C[zv].translationKey, ev.C[zv].params), lv && Wv && (0, jv.jsx)(Cv.d, {
              glyph: Wv,
              className: "ControlPadGlyph"
            })]
          }), (0, jv.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, jv.jsxs)("div", {
              className: "ControlBindingsList",
              children: [nv.map((vv => (0, jv.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, jv.jsx)("div", {
                  children: (0, ev.p)(vv)
                }), (0, jv.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const hv = (0, ev.E)(zv, vv);
                    hv.isError() ? Fv(hv.asError().message) : Fv(null), Pv()
                  },
                  children: "\xd7"
                })]
              }, vv))), !wv && (0, jv.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  av(!0), Fv(null)
                },
                children: (0, jv.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), wv && (0, jv.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, jv.jsxs)("div", {
                className: "InputContainer",
                children: [(0, jv.jsx)("div", {
                  className: "InputOverlay",
                  children: Gv ? (0, ev.p)(Gv) : (0, jv.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Tv(sv)
                  })
                }), (0, jv.jsx)("input", {
                  ref: Yv,
                  id: Uv(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: vv => {
                    if ("Escape" === vv.code) return Vv(), vv.preventDefault(), void vv.stopPropagation();
                    const zv = vv.code;
                    gv.c.includes(zv) ? (Fv(null), mv(zv)) : (Fv("controls:keyIsReserved"), mv(null)), vv.preventDefault(), vv.stopPropagation()
                  },
                  onMouseDown: vv => {
                    const zv = "Mouse" + (vv.button + 1);
                    document.activeElement && document.activeElement.id === Uv() ? gv.c.includes(zv) ? (Fv(null), mv(zv)) : (Fv("controls:keyIsReserved"), mv(null)) : cv("controls:enterNewBinding"), vv.stopPropagation()
                  },
                  onBlur: () => {
                    cv("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, jv.jsx)(Nv.d, {
                onPointerDown: vv => {
                  vv.preventDefault()
                },
                onClick: () => {
                  (0, ev.c)(zv, Gv), Pv(), Vv()
                },
                className: "ControlBindingAddButton",
                disabled: null === Gv,
                children: Tv("general:add")
              }), (0, jv.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  Vv()
                },
                children: "\xd7"
              })]
            }), fv && (0, jv.jsx)("div", {
              className: "ControlBindingError",
              children: Tv(fv)
            })]
          })]
        }), Ov && (0, jv.jsx)("div", {
          className: "ControlRowWarning",
          children: Ov
        })]
      })
    }
  },
  8366: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => iv,
      f: () => Cv,
      g: () => lv,
      k: () => cv,
      n: () => Gv,
      p: () => Wv
    });
    var hv = Pv(1630),
      Sv = Pv(1697);
    const ev = vv => vv >= 56320 && vv <= 57343,
      gv = vv => vv >= 55296 && vv <= 56319,
      pv = (vv, zv) => zv >= 2 && ev(vv.charCodeAt(zv - 1)) && gv(vv.charCodeAt(zv - 2)) ? zv - 2 : Math.max(0, zv - 1),
      dv = (vv, zv) => {
        let Pv;
        var hv, Sv;
        return Pv = vv.start !== vv.end ? zv < 0 ? vv.start : vv.end : zv < 0 ? pv(vv.value, vv.start) : (hv = vv.value, (Sv = vv.start) + 1 < hv.length && gv(hv.charCodeAt(Sv)) && ev(hv.charCodeAt(Sv + 1)) ? Sv + 2 : Math.min(hv.length, Sv + 1)), {
          value: vv.value,
          start: Pv,
          end: Pv
        }
      },
      Nv = ["text", "search", "url", "email", "tel", "password", "number"],
      lv = vv => !(!(0, Sv.c)(vv) || vv.isContentEditable || vv.hasAttribute("data-pad-no-osk")) && (vv instanceof HTMLTextAreaElement || vv instanceof HTMLInputElement && Nv.includes(vv.type)),
      Tv = vv => null !== vv.selectionStart,
      Wv = vv => {
        var zv, Pv;
        const {
          value: hv
        } = vv;
        return {
          value: hv,
          start: null !== (zv = vv.selectionStart) && void 0 !== zv ? zv : hv.length,
          end: null !== (Pv = vv.selectionEnd) && void 0 !== Pv ? Pv : hv.length
        }
      },
      wv = (vv, zv, Pv) => {
        if (vv.readOnly) return;
        const Sv = vv instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Sv, "value").set.call(vv, zv.value), Tv(vv) && vv.setSelectionRange(zv.start, zv.end), (0, hv.d)(vv, new InputEvent("input", {
          bubbles: !0,
          inputType: Pv
        }))
      };
    let av = !1;
    const sv = (vv, zv) => !!document.execCommand(vv, !1, zv) || (av || (av = !0, console.warn(`execCommand("${vv}") failed; the on-screen keyboard is setting the value directly`)), !1),
      Cv = (vv, zv) => {
        sv("insertText", zv) || wv(vv, function(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const hv = vv.value.slice(0, vv.start),
            Sv = vv.value.slice(vv.end);
          let ev = Pv < 0 ? zv.length : Math.max(0, Pv - hv.length - Sv.length);
          ev > 0 && ev < zv.length && gv(zv.charCodeAt(ev - 1)) && ev--;
          const pv = zv.slice(0, ev),
            dv = hv.length + pv.length;
          return {
            value: hv + pv + Sv,
            start: dv,
            end: dv
          }
        }(Wv(vv), zv, vv.maxLength), "insertText")
      },
      iv = vv => {
        sv("delete") || wv(vv, (vv => {
          const zv = vv.start === vv.end ? pv(vv.value, vv.start) : vv.start;
          return {
            value: vv.value.slice(0, zv) + vv.value.slice(vv.end),
            start: zv,
            end: zv
          }
        })(Wv(vv)), "deleteContentBackward")
      },
      cv = (vv, zv) => {
        if (!Tv(vv)) return;
        const Pv = dv(Wv(vv), zv);
        vv.setSelectionRange(Pv.start, Pv.end)
      },
      Gv = vv => {
        Tv(vv) && 0 === vv.selectionStart && 0 === vv.selectionEnd && vv.setSelectionRange(vv.value.length, vv.value.length)
      }
  },
  8529: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv
    });
    var hv = Pv(22),
      Sv = Pv(3187),
      ev = Pv(1336),
      gv = Pv(1374);
    const pv = async () => {
      if ((0, gv.d)()) {
        if (!0 !== await ev.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== hv.c.get("gameState")) return
      }(0, Sv.e)()
    }
  },
  8531: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => dv,
      g: () => ev,
      i: () => gv,
      l: () => Sv,
      m: () => pv
    });
    var hv = Pv(1908);
    const Sv = "controllerPadShopOpen",
      ev = vv => hv.l.includes(vv),
      gv = vv => Object.values(vv).some((vv => !1 !== vv.canBuy && !vv.isRewardedAd)),
      pv = (vv, zv, Pv) => {
        var hv, Sv, gv, pv;
        const dv = vv.filter((vv => !ev(vv))),
          Nv = null !== zv && vv.includes(zv) ? zv : null;
        return null !== Nv && !ev(Nv) && Pv(Nv) ? Nv : null !== (hv = null !== (Sv = null !== (gv = null !== (pv = dv.find(Pv)) && void 0 !== pv ? pv : dv[0]) && void 0 !== gv ? gv : Nv) && void 0 !== Sv ? Sv : vv[0]) && void 0 !== hv ? hv : null
      },
      dv = vv => vv.userInput || vv.isRewardedAd || "boolean" === typeof vv.isSelected ? null : JSON.stringify([vv.image, vv.cost, vv.currency, vv.amount, vv.customTitle, vv.buyButtonText, vv.description, vv.canBuy])
  },
  8549: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Nv,
      g: () => lv
    });
    var hv = Pv(52),
      Sv = Pv(1439),
      ev = Pv(1963),
      gv = Pv(1387),
      pv = Pv(1420),
      dv = Pv(1082);
    const Nv = () => {
        const vv = (0, gv.s)();
        if ((0, hv.useEffect)((() => {
            (0, gv.l)()
          }), []), !vv) return null;
        const {
          ControllerCategory: zv
        } = vv;
        return (0, dv.jsx)(pv.e, {
          children: (0, dv.jsx)(zv, {})
        })
      },
      lv = () => {
        var vv;
        const zv = (0, gv.s)(),
          [, Pv] = (0, hv.useReducer)((vv => vv + 1), 0);
        return (0, Sv.g)(ev.e, Pv), null !== (vv = null === zv || void 0 === zv ? void 0 : zv.hasActivePad()) && void 0 !== vv && vv
      }
  },
  8368: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv,
      f: () => Nv,
      h: () => sv,
      j: () => Tv,
      n: () => av,
      o: () => ev,
      r: () => wv,
      v: () => gv,
      z: () => Wv
    });
    const hv = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      Sv = (vv, zv) => {
        if ("function" === typeof vv.checkVisibility) return !vv.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: zv,
          checkOpacity: zv
        });
        const {
          visibility: Pv
        } = getComputedStyle(vv);
        if ("hidden" === Pv || "collapse" === Pv) return !0;
        if (!zv) return !1;
        for (let hv = vv; hv; hv = hv.parentElement)
          if ("0" === getComputedStyle(hv).opacity) return !0;
        return !1
      },
      ev = vv => {
        if (!vv.isConnected || Sv(vv, !0)) return !1;
        const zv = vv.getBoundingClientRect();
        return zv.width > 0 && zv.height > 0
      },
      gv = vv => !!vv.matches(":disabled, [aria-disabled='true']") || "button" === vv.getAttribute("role") && "-1" === vv.getAttribute("tabindex"),
      pv = vv => {
        var zv;
        if (vv.closest("[data-pad-ignore]")) return !0;
        return !!(null === (zv = vv.parentElement) || void 0 === zv ? void 0 : zv.closest("[data-pad-focusable]"))
      },
      dv = vv => {
        const zv = vv.querySelectorAll(hv);
        return vv.matches(hv) ? [vv, ...zv] : zv
      },
      Nv = vv => {
        const zv = [];
        for (const Pv of dv(vv)) !pv(Pv) && ev(Pv) && zv.push(Pv);
        return zv
      },
      lv = new WeakMap,
      Tv = vv => {
        const zv = lv.get(vv);
        if (zv && Wv(zv, vv)) return !0;
        for (const Pv of dv(vv))
          if (!pv(Pv) && ev(Pv)) return lv.set(vv, Pv), !0;
        return lv.delete(vv), !1
      },
      Wv = (vv, zv) => zv.contains(vv) && vv.matches(hv) && !pv(vv) && ev(vv),
      wv = (vv, zv) => Wv(vv, zv) && !gv(vv),
      av = vv => {
        for (const zv of vv.querySelectorAll("[data-pad-initial-area]"))
          if (!Sv(zv, !1)) return !0;
        return !1
      },
      sv = vv => {
        const zv = zv => {
          let Pv = 0;
          for (let hv = zv.parentElement; hv && hv !== vv; hv = hv.parentElement) Pv++;
          return Pv
        };
        return [...vv.querySelectorAll("[data-pad-initial-area]")].filter(ev).sort(((vv, Pv) => zv(Pv) - zv(vv)))
      }
  },
  8352: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => Fv,
      B: () => Cv,
      E: () => dv,
      G: () => lv,
      d: () => iv,
      f: () => nv,
      g: () => jv,
      k: () => mv,
      m: () => av,
      n: () => sv,
      o: () => Wv,
      p: () => wv,
      q: () => Yv,
      r: () => Nv,
      v: () => Ov,
      z: () => fv
    });
    var hv = Pv(26),
      Sv = Pv(1630),
      ev = Pv(8359),
      gv = Pv(8366),
      pv = Pv(8368);
    const dv = vv => (0, gv.g)(vv),
      Nv = vv => {
        const zv = vv.getBoundingClientRect();
        return {
          x: zv.left + zv.width / 2,
          y: zv.top + zv.height / 2
        }
      },
      lv = (vv, zv, Pv) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: vv.x,
        clientY: vv.y,
        screenX: vv.x,
        screenY: vv.y,
        button: zv,
        buttons: Pv,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      Tv = (vv, zv) => {
        (0, Sv.d)(vv, zv)
      },
      Wv = function(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const hv = 0 === Pv ? 1 : 2;
        Tv(vv, new PointerEvent("pointerdown", lv(zv, Pv, hv))), Tv(vv, new MouseEvent("mousedown", lv(zv, Pv, hv)))
      },
      wv = function(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Tv(vv, new PointerEvent("pointerup", lv(zv, Pv, 0))), Tv(vv, new MouseEvent("mouseup", lv(zv, Pv, 0)))
      },
      av = function(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Wv(vv, zv, Pv), wv(vv, zv, Pv), Tv(vv, 0 === Pv ? new MouseEvent("click", lv(zv, 0, 0)) : new MouseEvent("contextmenu", lv(zv, 2, 0)))
      },
      sv = function(vv, zv, Pv) {
        let {
          leaveBelow: hv = null,
          enterBelow: Sv = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (vv !== zv) {
          if (null !== vv && void 0 !== vv && vv.isConnected) {
            const Sv = {
              ...lv(Pv, 0, 0),
              relatedTarget: zv
            };
            Tv(vv, new PointerEvent("pointerout", Sv)), Tv(vv, new MouseEvent("mouseout", Sv));
            const ev = vv => !!zv && vv.contains(zv) || !!hv && vv.contains(hv);
            for (let zv = vv; zv && !ev(zv); zv = zv.parentElement) Tv(zv, new PointerEvent("pointerleave", {
              ...Sv,
              bubbles: !1
            })), Tv(zv, new MouseEvent("mouseleave", {
              ...Sv,
              bubbles: !1
            }))
          }
          if (zv) {
            const hv = {
              ...lv(Pv, 0, 0),
              relatedTarget: vv
            };
            Tv(zv, new PointerEvent("pointerover", hv)), Tv(zv, new MouseEvent("mouseover", hv));
            const ev = [],
              gv = zv => !(null === vv || void 0 === vv || !vv.isConnected) && zv.contains(vv) || !!Sv && zv.contains(Sv);
            for (let vv = zv; vv && !gv(vv); vv = vv.parentElement) ev.push(vv);
            for (const vv of ev.reverse()) Tv(vv, new PointerEvent("pointerenter", {
              ...hv,
              bubbles: !1
            })), Tv(vv, new MouseEvent("mouseenter", {
              ...hv,
              bubbles: !1
            }));
            Tv(zv, new PointerEvent("pointermove", lv(Pv, 0, 0))), Tv(zv, new MouseEvent("mousemove", lv(Pv, 0, 0)))
          }
        } else zv && (Tv(zv, new PointerEvent("pointermove", lv(Pv, 0, 0))), Tv(zv, new MouseEvent("mousemove", lv(Pv, 0, 0))))
      },
      Cv = vv => {
        hv.j.zC(ev.d, vv)
      },
      iv = vv => {
        if (dv(vv)) return void Cv(vv);
        const zv = vv.hasAttribute("data-pad-focusable") ? vv.querySelector("a[href]") : null,
          Pv = null !== zv && void 0 !== zv ? zv : vv;
        av(Pv, Nv(Pv))
      },
      cv = ".Dropdown-root.is-open",
      Gv = vv => {
        const zv = vv.querySelector(".Dropdown-control");
        return iv(zv), zv
      },
      mv = vv => {
        var zv;
        const Pv = null !== (zv = vv.closest(cv)) && void 0 !== zv ? zv : vv.querySelector(cv);
        return Pv ? Gv(Pv) : null
      },
      jv = vv => {
        for (const zv of document.querySelectorAll(cv)) zv.contains(vv) || Gv(zv)
      },
      fv = vv => null !== vv.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      Fv = vv => {
        const zv = vv ? document.elementFromPoint(vv.x, vv.y) : null;
        return !(null === zv || void 0 === zv || !zv.closest("[data-pad-repeat]"))
      },
      Yv = vv => {
        var zv;
        return null !== (zv = [...vv.querySelectorAll("[data-pad-back]")].find(pv.o)) && void 0 !== zv ? zv : null
      },
      nv = vv => {
        const zv = Yv(vv);
        return !!zv && (iv(zv), !0)
      },
      Ov = vv => {
        var zv, Pv, hv, Sv;
        return null !== (zv = null !== (Pv = null !== (hv = vv.getAttribute("data-pad-key")) && void 0 !== hv ? hv : vv.getAttribute("href")) && void 0 !== Pv ? Pv : null === (Sv = vv.querySelector("a[href]")) || void 0 === Sv ? void 0 : Sv.getAttribute("href")) && void 0 !== zv ? zv : null
      }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);