export const id = 158;
export const ids = [158];
export const modules = {
  8917: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG
    });
    var wG = ZG(17),
      SG = ZG(1151),
      LG = ZG(5019),
      yG = ZG(1067);

    function kG(GG) {
      let {
        note: bG
      } = GG;
      const {
        t: ZG
      } = (0, SG.w)(), {
        clientEscMenuOptions: kG
      } = (0, wG.o)(["clientEscMenuOptions"]);
      return (0, yG.jsx)(LG.c, {
        label: ZG("touchSettings:actionButtons"),
        checked: kG.touchActionButtons,
        onClick: GG => {
          wG.e.setClientEscMenuOptions({
            touchActionButtons: GG
          })
        },
        circleInfoText: ZG("touchSettings:actionButtonsInfo"),
        note: bG
      })
    }
  },
  8900: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => RZ,
      e: () => eZ
    });
    var wG = ZG(1151),
      SG = ZG(51),
      LG = ZG(1956),
      yG = ZG(1972),
      kG = ZG(1006),
      UG = ZG.n(kG),
      YG = ZG(1393),
      VG = ZG(17),
      pG = ZG(80),
      fG = ZG(95),
      QG = ZG(5019),
      KG = ZG(2409),
      hG = ZG(283),
      dG = ZG(1979),
      JG = ZG(1988),
      rG = ZG(8909),
      zG = ZG(8917),
      EG = ZG(333),
      oG = ZG(1067);
    const XG = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var uG = ZG(8926);
    var iG = ZG(1415),
      CG = ZG(1311),
      WG = ZG(8933),
      mG = ZG(1359),
      IG = ZG(1016),
      FG = ZG(8942),
      vG = ZG(2441);
    const aG = {
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
        ...Object.fromEntries(vG.K.map((GG => [GG, "menu"])))
      },
      cG = GG => vG.C.filter((bG => aG[bG] === GG)),
      lG = new Set(cG("cluster")),
      jG = new Set(cG("inventory")),
      PG = GG => "inventory" === GG || jG.has(GG),
      MG = GG => {
        const bG = aG[GG];
        return void 0 === bG ? [] : [bG, ...MG(bG)]
      },
      AG = GG => [GG, ...MG(GG)],
      sG = (GG, bG, ZG) => "shop" === GG && bG ? ZG("inventory") ? ["inventory"] : ZG("bag") ? [GG, "bag"] : [GG] : [GG],
      qG = new Map([
        ["cluster", lG],
        ["inventory", jG]
      ]),
      nG = ["cluster"],
      gG = [...nG, ...vG.C.filter((GG => !nG.includes(GG) && !aG[GG]))],
      eG = GG => [GG, ...cG(GG).flatMap(eG)],
      RG = gG.flatMap(eG).map((GG => ({
        id: GG,
        label: `hudLayout:${GG}`,
        ...vG.y[GG],
        parent: aG[GG]
      }))),
      TG = Object.fromEntries(RG.map((GG => [GG.id, GG]))),
      HG = "data-hud-el";

    function tG(GG, bG, ZG, wG) {
      const SG = ZG(function(GG, bG) {
          return "attack" !== GG || bG ? TG[GG].label : "hudLayout:attackContext"
        }(GG, bG)),
        LG = wG[GG];
      return LG ? ZG("hudLayout:slotWithKey", {
        slot: SG,
        key: LG
      }) : SG
    }

    function DG(GG, bG, ZG, wG) {
      return GG.map((GG => tG(GG, bG, ZG, wG))).join(", ")
    }

    function NG(GG) {
      let {
        className: bG,
        keepPlace: ZG
      } = GG;
      return ZG ? (0, oG.jsx)("div", {
        className: UG()(bG, "Placeholder")
      }) : null
    }

    function OG(GG) {
      let {
        id: bG,
        elements: ZG,
        actionButtons: SG,
        keyNames: LG,
        className: yG,
        keepPlace: kG,
        onHidden: UG
      } = GG;
      const {
        t: VG
      } = (0, wG.w)();
      if (!TG[bG].hide) return (0, oG.jsx)(NG, {
        className: yG,
        keepPlace: kG
      });
      const pG = (0, vG.v)(ZG, bG);
      return (0, oG.jsx)(YG.K, {
        className: yG,
        ariaLabel: VG(pG ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: tG(bG, SG, VG, LG)
        }),
        pressed: !pG,
        onClick: () => {
          UG(bG, !pG)
        },
        children: (0, oG.jsx)(IG.c, {
          name: pG ? "eye-slash" : "eye"
        })
      })
    }

    function xG(GG) {
      let {
        id: bG,
        elements: ZG,
        actionButtons: SG,
        keyNames: LG,
        className: yG,
        keepPlace: kG,
        onlyWhenMoved: UG,
        locked: VG,
        onReset: pG
      } = GG;
      const {
        t: fG
      } = (0, wG.w)(), QG = TG[bG], KG = (0, vG.S)(ZG[bG]);
      return !QG.move && !QG.scale || UG && KG ? (0, oG.jsx)(NG, {
        className: yG,
        keepPlace: kG
      }) : (0, oG.jsx)(YG.K, {
        className: yG,
        disabled: KG || VG,
        ariaLabel: fG("hudLayout:resetElement", {
          name: tG(bG, SG, fG, LG)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: bG
        },
        onClick: GG => {
          UG && Zb(GG.currentTarget), pG(bG)
        },
        children: (0, oG.jsx)(IG.c, {
          name: "rotate-left"
        })
      })
    }

    function BG(GG) {
      let {
        id: bG,
        actionButtons: ZG,
        keyNames: SG,
        className: LG,
        keepPlace: yG,
        locked: kG,
        lockable: UG,
        onLocked: VG
      } = GG;
      const {
        t: pG
      } = (0, wG.w)();
      return UG || kG ? (0, oG.jsx)(YG.K, {
        className: LG,
        ariaLabel: pG(kG ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: tG(bG, ZG, pG, SG)
        }),
        pressed: kG,
        active: kG,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${kG?"unlock":"lock"}:${bG}`
        },
        onClick: () => {
          VG(bG, !kG)
        },
        children: (0, oG.jsx)(IG.c, {
          name: kG ? "lock" : "lock-open"
        })
      }) : (0, oG.jsx)(NG, {
        className: LG,
        keepPlace: yG
      })
    }

    function Gb(GG) {
      let {
        className: bG,
        open: ZG,
        name: SG,
        onToggle: LG
      } = GG;
      const {
        t: yG
      } = (0, wG.w)();
      return (0, oG.jsx)(YG.K, {
        className: bG,
        ariaLabel: yG(ZG ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: SG
        }),
        pressed: ZG,
        analyticsClick: {
          id: "hud_layout.children",
          value: ZG ? "close" : "open"
        },
        onClick: () => {
          LG(!ZG)
        },
        children: (0, oG.jsx)(IG.c, {
          name: ZG ? "angle-up" : "angle-down"
        })
      })
    }

    function bb(GG, bG) {
      var ZG;
      GG.contains(document.activeElement) && bG.focus({
        preventScroll: !0
      }), null === (ZG = (0, mG.h)()) || void 0 === ZG || ZG.handOverPadFocus(GG, bG)
    }

    function Zb(GG) {
      const bG = GG.closest("[data-hud-row]"),
        ZG = null === bG || void 0 === bG ? void 0 : bG.querySelector(".HudElementRowName");
      return !(!bG || !ZG) && (bb(bG, ZG), !0)
    }
    const wb = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function Sb(GG, bG) {
      return "joystick" === GG && !bG
    }

    function Lb() {
      const {
        t: GG
      } = (0, wG.w)();
      return (0, oG.jsx)(YG.K, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: GG => {
          const bG = GG.currentTarget;
          if (!Zb(bG)) {
            const GG = function(GG) {
              var bG, ZG;
              const wG = [GG.previousElementSibling, GG.nextElementSibling].find((GG => GG instanceof HTMLElement && GG.matches(wb)));
              return null !== (bG = null !== wG && void 0 !== wG ? wG : null === (ZG = GG.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === ZG ? void 0 : ZG.querySelector(`:is(${wb}):not(.HudFixJoystickButton)`)) && void 0 !== bG ? bG : null
            }(bG);
            GG && bb(bG, GG)
          }
          VG.e.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: GG("hudLayout:fixJoystick")
      })
    }
    var yb = ZG(59),
      kb = ZG(1239),
      Ub = ZG(3100),
      Yb = ZG(2732),
      Vb = ZG(2443);
    const pb = (GG, bG, ZG) => {
      const wG = MG(bG).includes(GG) ? GG : MG(GG).includes(bG) ? bG : null;
      if (null === wG || "joystick" === wG) return !1;
      const SG = wG === GG ? bG : GG;
      if ("menu" === wG) return (0, Vb.C)(SG, ZG.hudElements[SG]);
      if ("hotbar" !== wG || !PG(SG)) return !0;
      if ((0, vG.U)(ZG.hudElements[SG]) || (0, vG.U)(ZG.hudElements.inventory)) return !1;
      return !(ZG.hudLocked.includes(SG) || ZG.hudLocked.includes("inventory")) || (0, vG.S)(ZG.hudElements.hotbar)
    };
    var fb = ZG(2465),
      Qb = ZG(3135),
      Kb = ZG(8944);
    const hb = GG => ({
      [HG]: GG
    });

    function db(GG) {
      let {
        id: bG,
        slot: ZG,
        icon: wG,
        label: LG,
        hidden: yG,
        className: kG,
        face: YG
      } = GG;
      const VG = (0, SG.useRef)(null);
      return (0, SG.useLayoutEffect)((() => {
        YG && VG.current && (0, Kb.l)(VG.current, YG)
      }), [YG]), (0, oG.jsxs)("div", {
        className: UG()("TouchKeyHit", `TouchSlot${ZG}`, kG, {
          HudPreviewGhost: yG.has(bG)
        }),
        ...hb(bG),
        children: [YG && (0, oG.jsx)("div", {
          ref: VG,
          className: UG()("TouchKey", {
            Labelled: YG.classList.contains("Labelled")
          })
        }), !YG && (0, oG.jsxs)("div", {
          className: UG()("TouchKey", {
            Labelled: void 0 !== LG
          }),
          children: [wG && (0, oG.jsx)(IG.c, {
            name: wG
          }), void 0 !== LG && (0, oG.jsx)("span", {
            className: "TouchKeyLabel",
            children: LG
          })]
        })]
      })
    }

    function Jb(GG) {
      let {
        item: bG,
        selected: ZG
      } = GG;
      const wG = (0, SG.useRef)(null);
      return (0, SG.useLayoutEffect)((() => {
        wG.current && (0, Kb.l)(wG.current, bG)
      }), [bG]), (0, oG.jsx)("div", {
        ref: wG,
        className: UG()("InvenItem", {
          Selected: ZG
        })
      })
    }
    const rb = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      zb = GG => void 0 === GG ? {} : {
        style: {
          "--parked": GG
        }
      };

    function Eb(GG) {
      let {
        id: bG,
        hidden: ZG,
        parked: wG,
        unslotted: SG = !1
      } = GG;
      return (0, oG.jsx)("div", {
        className: UG()("TopRightIcon", fb.o[bG], {
          HudPreviewGhost: ZG.has(bG),
          [Vb.b]: void 0 !== wG,
          [Vb.f]: SG
        }),
        ...zb(wG),
        children: (0, oG.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...hb(bG),
          children: (0, oG.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, oG.jsx)(IG.c, {
              name: rb[bG]
            })
          })
        })
      })
    }

    function ob(GG) {
      let {
        portraitPhone: bG,
        icons: ZG,
        pinnedIcons: wG,
        hidden: LG,
        moved: yG,
        trayState: kG
      } = GG;
      const YG = bG ? (0, Vb.I)(ZG) : [],
        VG = ZG.filter((GG => "settings" === GG)),
        pG = ZG.filter((GG => "settings" !== GG && !YG.includes(GG))).reverse(),
        fG = YG.length > 0 && "gone" === kG,
        QG = [...VG, ...fG ? ["tray"] : [], ...pG].filter((GG => "tray" === GG || LG.has(GG) && !yG.has(GG))),
        KG = GG => {
          const bG = QG.indexOf(GG);
          return bG < 0 ? void 0 : bG
        },
        hG = (GG, bG) => (0, oG.jsx)(Eb, {
          id: GG,
          hidden: LG,
          parked: bG ? KG(GG) : void 0,
          unslotted: bG && LG.has(GG) && yG.has(GG)
        }, GG);
      return (0, oG.jsxs)("div", {
        className: UG()("TopRightIcons TouchInGame", {
          Column: bG
        }),
        children: [VG.map((GG => hG(GG, !0))), YG.length > 0 && (0, oG.jsxs)("div", {
          className: UG()("TopRightIcon TopRightTrayToggle Open", {
            [Vb.b]: fG
          }),
          ...zb(KG("tray")),
          children: [(0, oG.jsx)("div", {
            className: UG()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== kG
            }),
            children: (0, oG.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, oG.jsx)(IG.c, {
                name: "ellipsis"
              })
            })
          }), (0, oG.jsx)("div", {
            className: "TopRightTray",
            children: YG.map((GG => hG(GG, !1)))
          })]
        }), pG.map((GG => (0, oG.jsxs)(SG.Fragment, {
          children: ["perspective" === GG && null !== wG.rightOfCamera && (0, oG.jsx)(Xb, {
            icon: wG.rightOfCamera
          }), hG(GG, !0)]
        }, GG))), null !== wG.leftEnd && (0, oG.jsx)(Xb, {
          icon: wG.leftEnd
        })]
      })
    }

    function Xb(GG) {
      let {
        icon: bG
      } = GG;
      return (0, oG.jsx)("div", {
        className: "TopRightIcon",
        children: (0, oG.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, oG.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, oG.jsx)(IG.c, {
              name: bG
            })
          })
        })
      })
    }

    function ub(GG) {
      let {
        next: bG,
        hidden: ZG
      } = GG;
      return (0, oG.jsx)("div", {
        className: UG()("HotBarArrow", bG ? "Next" : "Previous", {
          HudPreviewGhost: ZG
        }),
        ...hb("arrows"),
        children: (0, oG.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, oG.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, oG.jsx)(IG.c, {
              name: bG ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function ib() {
      return (0, oG.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, oG.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, oG.jsx)("div", {
            className: "SocialBar",
            children: (0, oG.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, oG.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, oG.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, oG.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, oG.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, oG.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, oG.jsx)(IG.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, oG.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, oG.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, oG.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, oG.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, oG.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, oG.jsx)(IG.c, {
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
    const Cb = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Wb = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      mb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      Ib = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function Fb(GG) {
      let {
        presence: bG,
        portraitPhone: ZG,
        hidden: SG,
        actionButtons: LG,
        joystickFixed: yG,
        keysAbove: kG,
        auraBar: YG,
        trayState: VG,
        moved: fG
      } = GG;
      const {
        t: QG
      } = (0, wG.w)(), {
        faces: KG,
        items: hG
      } = bG, dG = GG => ({
        HudPreviewGhost: AG(GG).some((GG => SG.has(GG)))
      });
      return (0, oG.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, oG.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, oG.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, oG.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, oG.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, oG.jsx)("div", {
              className: "InGameHeaderGameName",
              children: QG("hudLayout:previewGameName")
            })]
          })
        }), (0, oG.jsx)("div", {
          className: "TopLeftElements",
          children: (0, oG.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, oG.jsxs)("div", {
              className: "Chat",
              children: [(0, oG.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [QG("hudLayout:previewChatLine"), QG("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), QG("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((GG => (0, oG.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, oG.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, oG.jsx)("div", {
                      className: "IndividualText",
                      children: GG
                    })
                  })
                }, GG)))
              }), (0, oG.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: UG()("ChatIconWrapper SmallTextLight", dG("chat")),
                ...hb("chat"),
                children: (0, oG.jsx)(IG.c, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, oG.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, oG.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, oG.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, oG.jsx)("div", {
                className: "TopRightIconsContainer",
                ...hb("menu"),
                children: (0, oG.jsx)(ob, {
                  portraitPhone: ZG,
                  icons: bG.rowIcons,
                  pinnedIcons: bG.pinnedIcons,
                  hidden: SG,
                  trayState: VG,
                  moved: fG
                })
              })
            }), pG.featureFlags.useSocialFeatures && (0, oG.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, oG.jsx)(ib, {})
            })]
          })
        }), (0, oG.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, oG.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, oG.jsxs)("div", {
            className: "TouchInteractKey",
            ...hb("interact"),
            children: [(0, oG.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, oG.jsx)(IG.c, {
                name: "hand-back-point-up"
              })
            }), (0, oG.jsx)("div", {
              children: QG("hudLayout:previewInteract")
            })]
          })
        }), (0, oG.jsx)("div", {
          className: "BottomCentre",
          children: (0, oG.jsxs)("div", {
            className: "BottomElements",
            children: [(0, oG.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, oG.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, oG.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...hb("hotbar"),
                children: (0, oG.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, oG.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, oG.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, oG.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, oG.jsx)(IG.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), YG && (0, oG.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, oG.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, oG.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, Qb.i)("glint"),
                    alt: ""
                  }), (0, oG.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, oG.jsx)("div", {
                  className: "AuraBar",
                  children: (0, oG.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, oG.jsx)("div", {
                className: "HotBarRow",
                children: (0, oG.jsx)("div", {
                  className: UG()("HotBarContainer Touch", {
                    KeysAbove: kG
                  }),
                  children: (0, oG.jsxs)("div", {
                    className: "HotBar",
                    ...hb("hotbar"),
                    children: [(0, oG.jsxs)("div", {
                      className: UG()("TouchInventoryKeys", {
                        NoAuraBar: !YG
                      }),
                      children: [(0, oG.jsx)("div", {
                        className: UG()("TouchInventoryKey ShopKey", dG("shop"), {
                          Hidden: !bG.shop
                        }),
                        ...hb("shop"),
                        children: (0, oG.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, oG.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, oG.jsx)(IG.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, oG.jsx)("div", {
                        className: UG()("TouchInventoryKey BagKey", dG("bag"), {
                          Hidden: !bG.bag
                        }),
                        ...hb("bag"),
                        children: (0, oG.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, oG.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, oG.jsx)(IG.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, oG.jsx)(ub, {
                      next: !1,
                      hidden: SG.has("arrows")
                    }), (0, oG.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== hG && hG.map(((GG, bG) => (0, oG.jsx)(Jb, {
                        item: GG,
                        selected: GG.classList.contains("Selected")
                      }, bG))), null === hG && mb.map((GG => {
                        const bG = Ib[GG];
                        return (0, oG.jsx)("div", {
                          className: UG()("InvenItem", {
                            Selected: 0 === GG
                          }),
                          children: bG && (0, oG.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, oG.jsx)(IG.c, {
                              name: bG
                            })
                          })
                        }, GG)
                      }))]
                    }), (0, oG.jsx)(ub, {
                      next: !0,
                      hidden: SG.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, oG.jsx)("div", {
              className: "BottomRightElements",
              children: (0, oG.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== KG && Kb.f.map((GG => {
                  const bG = KG[GG];
                  return bG && (0, oG.jsx)(db, {
                    id: Kb.e[GG],
                    slot: GG,
                    face: bG,
                    className: Cb[GG],
                    hidden: SG
                  }, GG)
                })), (0, Kb.n)(bG, LG).map((GG => (0, oG.jsx)(db, {
                  id: Kb.e[GG],
                  slot: GG,
                  icon: Wb[GG].icon,
                  label: QG(Wb[GG].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: SG
                }, GG))), null === KG && (0, oG.jsxs)(oG.Fragment, {
                  children: [(0, oG.jsx)(db, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: SG
                  }), (0, oG.jsx)(db, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: SG
                  }), LG && (0, oG.jsxs)(oG.Fragment, {
                    children: [(0, oG.jsx)(db, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: SG
                    }), (0, oG.jsx)(db, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: SG
                    })]
                  }), (0, Kb.h)(LG).map((GG => (0, oG.jsx)(db, {
                    id: Kb.e[GG],
                    slot: GG,
                    icon: Wb[GG].icon,
                    label: QG(Wb[GG].labelKey),
                    hidden: SG
                  }, GG))), (0, oG.jsx)(db, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: SG
                  })]
                })]
              })
            })]
          })
        }), (0, oG.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, oG.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, oG.jsxs)("div", {
              className: UG()("Joystick Resting HudPreviewJoystick", {
                Floating: !yG
              }),
              ...hb("joystick"),
              children: [(0, oG.jsx)("div", {
                className: "JoystickBase"
              }), (0, oG.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), bG.sprint && (0, oG.jsx)("div", {
            className: UG()("TouchSprintHit", dG("sprint"), {
              AtHome: !yG
            }),
            ...hb("sprint"),
            children: (0, oG.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, oG.jsx)(IG.c, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function vb() {
      const [GG, bG] = (0, SG.useState)({}), ZG = (0, SG.useCallback)((GG => {
        bG((bG => [...new Set([...Object.keys(bG), ...Object.keys(GG)])].every((ZG => bG[ZG] === GG[ZG])) ? bG : GG))
      }), []);
      return [GG, ZG]
    }
    const ab = .05;

    function cb(GG) {
      var bG;
      let {
        selected: ZG,
        layout: SG,
        actionButtons: LG,
        keyNames: yG,
        overlaps: kG,
        scaleCaps: VG,
        joystickFixed: pG,
        onScale: fG,
        onHidden: QG,
        onReset: KG,
        locked: hG,
        lockable: dG,
        onLocked: JG,
        extra: rG
      } = GG;
      const {
        t: zG
      } = (0, wG.w)(), EG = ZG ? TG[ZG] : null, XG = null !== ZG && hG.has(ZG), uG = (ZG && SG.hudElements[ZG] || vG.q)[2], iG = null !== (bG = ZG && VG[ZG]) && void 0 !== bG ? bG : vG.l, CG = GG => {
        ZG && fG(ZG, Math.min(iG, Math.round(100 * (uG + .1 * GG)) / 100))
      };
      return (0, oG.jsxs)(oG.Fragment, {
        children: [(0, oG.jsxs)("div", {
          className: UG()("HudQuickName SmallTextBold", {
            Overlap: kG.length > 0
          }),
          children: [kG.length > 0 && (0, oG.jsx)(IG.c, {
            name: "triangle-exclamation"
          }), EG ? tG(EG.id, LG, zG, yG) : zG("hudLayout:fullScreenHint"), kG.length > 0 && (0, oG.jsx)("span", {
            className: "HudQuickOverlap",
            children: zG("hudLayout:overlapsShort", {
              names: DG(kG, LG, zG, yG)
            })
          })]
        }), (null === EG || void 0 === EG ? void 0 : EG.scale) && (0, oG.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, oG.jsx)(YG.K, {
            disabled: XG || uG <= vG.o,
            ariaLabel: zG("hudLayout:smaller"),
            onClick: () => {
              CG(-1)
            },
            children: (0, oG.jsx)(IG.c, {
              name: "minus"
            })
          }), (0, oG.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*uG)}%`
          }), (0, oG.jsx)(YG.K, {
            disabled: XG || uG >= iG,
            ariaLabel: zG("hudLayout:larger"),
            onClick: () => {
              CG(1)
            },
            children: (0, oG.jsx)(IG.c, {
              name: "plus"
            })
          })]
        }), (EG || rG) && (0, oG.jsxs)("div", {
          className: "HudQuickActions",
          children: [EG && (0, oG.jsxs)(oG.Fragment, {
            children: [(0, oG.jsx)(BG, {
              id: EG.id,
              actionButtons: LG,
              keyNames: yG,
              locked: XG,
              lockable: dG(EG.id),
              onLocked: JG
            }), (0, oG.jsx)(OG, {
              id: EG.id,
              elements: SG.hudElements,
              actionButtons: LG,
              keyNames: yG,
              onHidden: QG
            }), (0, oG.jsx)(xG, {
              id: EG.id,
              elements: SG.hudElements,
              actionButtons: LG,
              keyNames: yG,
              locked: XG,
              onReset: KG
            }), Sb(EG.id, pG) && (0, oG.jsx)(Lb, {})]
          }), rG]
        })]
      })
    }
    var lb = ZG(1081),
      jb = ZG(4430);
    const Pb = "HudPreviewDoc",
      Mb = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      Ab = new Set([Pb, ...Object.values(Mb)]),
      sb = new Set(vG.C.map(fb.H)),
      qb = new Set(fb.i),
      nb = 'style, link[rel="stylesheet"]';

    function gb(GG, bG, ZG, wG) {
      const SG = new Map,
        LG = new Set,
        yG = new URL(GG.baseURI).origin,
        kG = bG => {
          var ZG;
          if ("LINK" !== bG.nodeName) return !0;
          const wG = null === (ZG = bG.getAttribute("href")) || void 0 === ZG ? void 0 : ZG.trim();
          if (!wG) return !1;
          try {
            return new URL(wG, GG.baseURI).origin === yG
          } catch {
            return !1
          }
        };
      let UG = null;
      const YG = () => {
          UG !== (0 === LG.size) && (UG = 0 === LG.size, null === wG || void 0 === wG || wG(UG))
        },
        VG = GG => {
          const bG = GG.cloneNode(!0);
          if ("LINK" === bG.tagName) {
            LG.add(bG);
            const GG = () => {
              LG.delete(bG), YG()
            };
            bG.addEventListener("load", GG), bG.addEventListener("error", GG), ZG && bG.addEventListener("load", ZG)
          }
          return bG
        },
        pG = () => {
          const wG = function(GG) {
              const bG = [...GG.body.children].filter((GG => GG.matches(nb)));
              return [...GG.head.querySelectorAll(nb), ...bG]
            }(GG).filter(kG),
            yG = new Set(wG);
          for (const [GG, bG] of SG) yG.has(GG) || (bG.remove(), SG.delete(GG), LG.delete(bG));
          let UG = null;
          for (let GG = wG.length - 1; GG >= 0; GG--) {
            const LG = wG[GG];
            let yG = SG.get(LG);
            yG ? "STYLE" === LG.tagName && yG.textContent !== LG.textContent && (yG.textContent = LG.textContent, null === ZG || void 0 === ZG || ZG()) : (yG = VG(LG), SG.set(LG, yG), bG.head.insertBefore(yG, UG)), UG = yG
          }
          YG()
        };
      pG();
      const fG = new MutationObserver(pG);
      return fG.observe(GG.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), fG.observe(GG.body, {
        childList: !0
      }), () => {
        fG.disconnect()
      }
    }

    function eb(GG, bG, ZG) {
      let {
        keysAbove: wG
      } = ZG;
      const SG = [...GG.documentElement.classList].filter((GG => !Ab.has(GG) && !qb.has(GG))),
        LG = [...bG.documentElement.classList].filter((GG => qb.has(GG))),
        yG = [Pb, Mb.hotbar, Mb.hasShop, Mb.hasBag];
      wG && yG.push(Mb.keysAbove), bG.documentElement.className = [...SG, ...yG, ...LG].join(" ")
    }
    const Rb = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Tb(GG, bG, ZG, wG, SG) {
      const LG = (0, vG.G)(ZG, wG, "joystick"),
        yG = (0, fb.I)((0, fb.S)(ZG, wG, SG), wG),
        kG = yG.classes.filter((GG => !sb.has(GG))),
        UG = bG.documentElement,
        YG = ZG.hudLayouts[wG].hudSafe,
        VG = (0, fb.N)(YG, window.innerWidth, window.innerHeight, Hb(), YG ? (0, fb.T)(bG) : 0);
      (0, fb.W)({
        ...yG,
        classes: kG
      }, {
        vars: UG,
        safe: UG,
        classes: UG
      }), UG.style.setProperty("--preview-joystick-shift-left", `${VG[3]}px`), UG.style.setProperty("--preview-joystick-shift-bottom", `${VG[2]}px`), UG.style.setProperty("--preview-joystick-scale", String(LG[2])), (0, jb.e)(UG, bG, ZG, wG);
      for (const pG of Rb) UG.style.setProperty(pG, GG.documentElement.style.getPropertyValue(pG) || "0px")
    }

    function Hb() {
      return (0, fb.Q)(VG.e.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function tb(GG) {
      return (0, fb.A)(Hb(), (0, fb.T)(GG))
    }

    function Db(GG, bG, ZG) {
      const wG = GG.documentElement.style,
        SG = (0, fb.P)(bG),
        LG = wG.getPropertyValue(SG);
      try {
        return ZG((GG => {
          wG.setProperty(SG, String(GG))
        }))
      } finally {
        "" === LG ? wG.removeProperty(SG) : wG.setProperty(SG, LG)
      }
    }

    function Nb(GG, bG) {
      const [ZG, wG] = Db(GG, "hotbar", (bG => {
        const ZG = ZG => {
          var wG, SG;
          return bG(ZG), null !== (wG = null === (SG = GG.querySelector(".HotBarGameItemsContainer")) || void 0 === SG ? void 0 : SG.getBoundingClientRect().width) && void 0 !== wG ? wG : 0
        };
        return [ZG(1), ZG(vG.l)]
      }));
      return ZG <= 0 ? vG.l : Math.min(vG.l, Math.max(1, Math.floor(wG / ZG / bG + 1e-6) * bG))
    }
    const Ob = 3,
      xb = .5,
      Bb = GG => GG.right - GG.left;
    const GZ = (GG, bG) => Math.abs((0, FG.c)(GG).x - (0, FG.c)(bG).x) + Math.abs((0, FG.c)(GG).y - (0, FG.c)(bG).y) + Math.abs(Bb(GG) - Bb(bG));

    function bZ(GG, bG, ZG, wG, SG) {
      let {
        canKeep: LG = () => !0,
        passes: yG = Ob,
        before: kG
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const UG = bG.hudLayouts[ZG].hudLocked.filter(LG);
      if (0 === UG.length) return bG;
      const YG = [...lG].filter((wG => !UG.includes(wG) && (0, vG.G)(GG, ZG, wG).join() === (0, vG.G)(bG, ZG, wG).join())),
        VG = GG => {
          const bG = (0, FG.C)(YG.flatMap((bG => GG[bG] ? [GG[bG]] : [])));
          return {
            ...GG,
            cluster: null !== bG && void 0 !== bG ? bG : void 0
          }
        };
      let pG = null;
      const fG = GG => {
          pG = GG;
          const bG = SG(GG);
          return bG && {
            ...bG,
            boxes: VG(bG.boxes)
          }
        },
        QG = kG ? {
          ...kG,
          boxes: VG(kG.boxes)
        } : fG(GG),
        KG = QG && fG(bG);
      if (!QG || !KG) return bG;
      const hG = QG.boxes;
      let dG = KG.boxes;
      const JG = QG.keysAbove !== KG.keysAbove,
        rG = JG || Boolean(QG.shopAlone) !== Boolean(KG.shopAlone),
        zG = new Set(UG.filter((GG => !PG(GG) || !("bag" === GG ? JG : rG))));
      let EG = bG;
      for (let uG = 0; uG < yG && zG.size > 0; uG++) {
        var oG, XG;
        const GG = new Map;
        for (const bG of zG) {
          const SG = hG[bG],
            LG = dG[bG],
            yG = SG && LG ? ZZ(bG, (0, vG.G)(EG, ZG, bG), SG, LG, wG) : null;
          yG ? GG.set(bG, yG) : zG.delete(bG)
        }
        if (0 === GG.size) break;
        let SG = EG;
        for (const [bG, wG] of GG) SG = (0, vG.jb)(SG, ZG, bG, wG);
        const LG = null === (oG = fG(SG)) || void 0 === oG ? void 0 : oG.boxes;
        if (!LG) return bG;
        let yG = EG;
        for (const [bG, wG] of GG) {
          const GG = LG[bG];
          GG && GZ(hG[bG], GG) < GZ(hG[bG], dG[bG]) - xb ? yG = (0, vG.jb)(yG, ZG, bG, wG) : zG.delete(bG)
        }
        if (yG === EG) break;
        const kG = [...GG.keys()].every((GG => zG.has(GG)));
        EG = kG ? SG : yG;
        const UG = kG ? LG : null === (XG = fG(EG)) || void 0 === XG ? void 0 : XG.boxes;
        if (!UG) return bG;
        dG = UG
      }
      return pG !== EG && SG(EG), EG
    }

    function ZZ(GG, bG, ZG, wG, SG) {
      let [LG, yG, kG] = bG;
      const UG = vG.y[GG],
        YG = {};
      UG.scale && Bb(wG) > 0 && Math.abs(Bb(ZG) - Bb(wG)) > xb && (YG.scale = Math.max(vG.o, Math.min(vG.l, kG * Bb(ZG) / Bb(wG))));
      const VG = (0, FG.c)(ZG).x - (0, FG.c)(wG).x,
        pG = (0, FG.c)(ZG).y - (0, FG.c)(wG).y;
      return UG.move && (Math.abs(VG) > xb || Math.abs(pG) > xb) && (YG.dx = LG + VG / SG.width, YG.dy = yG + pG / SG.height), void 0 === YG.scale && void 0 === YG.dx ? null : YG
    }
    let wZ = 0;

    function SZ() {
      return wZ > 0
    }
    const LZ = GG => 0 === GG.dx && 0 === GG.dy,
      yZ = .001,
      kZ = GG => Math.abs(GG.dx) >= 5e-4 || Math.abs(GG.dy) >= 5e-4 ? GG : {
        dx: GG.dx,
        dy: GG.dy < 0 ? -.001 : yZ
      };

    function UZ(GG) {
      let {
        preview: bG,
        stageRef: ZG,
        ringRef: wG,
        centreLineRef: LG,
        snapCentre: yG,
        ready: kG,
        measure: UG,
        k: YG,
        viewport: VG,
        boxes: pG,
        pieces: fG,
        selected: QG,
        insets: KG,
        layout: hG,
        canMove: dG,
        onSelect: JG,
        onMove: rG
      } = GG;
      const zG = (0, SG.useRef)(null),
        EG = (0, SG.useCallback)((() => null !== zG.current), []),
        oG = (GG, bG) => {
          if (!bG) return null;
          const ZG = (0, FG.c)(GG.origin),
            wG = (0, FG.c)(bG),
            SG = (GG.to.dx - GG.from.dx) * VG.width,
            LG = (GG.to.dy - GG.from.dy) * VG.height,
            yG = bG.right - bG.left,
            kG = bG.bottom - bG.top;
          return {
            skew: {
              x: wG.x - ZG.x - SG,
              y: wG.y - ZG.y - LG
            },
            box: {
              left: ZG.x - yG / 2,
              top: ZG.y - kG / 2,
              right: ZG.x + yG / 2,
              bottom: ZG.y + kG / 2
            }
          }
        },
        XG = (GG, ZG) => {
          var SG;
          const yG = zG.current;
          if (!yG || yG.pointerId !== GG.pointerId) return;
          zG.current = null, null === (SG = LG.current) || void 0 === SG || SG.classList.remove("Shown", "Snapped");
          const kG = wG.current;
          if (kG && null !== yG.ringStyle && kG.setAttribute("style", yG.ringStyle), ZG && yG.moved) {
            const GG = LZ(yG.to) ? null : UG(yG.id),
              bG = GG ? (0, FG.y)(GG, (0, FG.x)(VG.width, VG.height, KG)) : {
                x: 0,
                y: 0
              },
              ZG = {
                dx: yG.to.dx + bG.x / VG.width,
                dy: yG.to.dy + bG.y / VG.height
              },
              wG = LZ(yG.to) ? ZG : kZ(ZG);
            rG(yG.id, wG.dx, wG.dy)
          } else bG(yG.id, null), ZG && yG.tapPick && JG(yG.tapPick)
        };
      return {
        busy: EG,
        handlers: {
          onPointerDown: GG => {
            var bG;
            if (!kG || zG.current || !GG.target.closest(".HudPreviewHandle")) return;
            const wG = ZG.current.getBoundingClientRect(),
              SG = {
                x: (GG.clientX - wG.left) / YG,
                y: (GG.clientY - wG.top) / YG
              },
              LG = (0, FG.t)(SG, fG, 40 / YG),
              yG = null !== QG ? qG.get(QG) : void 0,
              UG = void 0 !== yG && null !== (0, FG.t)(SG, fG.filter((GG => {
                let {
                  id: bG
                } = GG;
                return yG.has(bG)
              })), 40 / YG),
              VG = "menu" === QG && void 0 !== pG.menu && (0, FG.d)(pG.menu, SG) && ("menu" === LG || null !== LG && (0, Vb.C)(LG, hG.hudElements[LG])),
              KG = UG ? QG : VG ? "menu" : null,
              rG = null !== KG,
              EG = null !== KG && void 0 !== KG ? KG : LG;
            if (!EG) return;
            if (function(GG) {
                wZ++;
                const bG = ZG => {
                  ZG.pointerId === GG && (wZ = Math.max(0, wZ - 1), window.removeEventListener("pointerup", bG, !0), window.removeEventListener("pointercancel", bG, !0))
                };
                window.addEventListener("pointerup", bG, !0), window.addEventListener("pointercancel", bG, !0)
              }(GG.pointerId), !dG(EG)) return void JG(rG && LG ? LG : EG);
            JG(EG);
            const [oG, XG] = null !== (bG = hG.hudElements[EG]) && void 0 !== bG ? bG : [0, 0], uG = {
              dx: oG,
              dy: XG
            }, iG = {
              skew: {
                x: 0,
                y: 0
              },
              box: pG[EG]
            };
            zG.current = {
              id: EG,
              pointerId: GG.pointerId,
              startX: GG.clientX,
              startY: GG.clientY,
              origin: pG[EG],
              from: uG,
              to: uG,
              moved: !1,
              home: LZ(uG) ? {
                centre: (0, FG.c)(pG[EG]),
                anchor: iG
              } : null,
              away: LZ(uG) ? null : iG,
              anchor: iG,
              ringStyle: null,
              tapPick: rG ? LG : null
            }, GG.currentTarget.setPointerCapture(GG.pointerId)
          },
          onPointerMove: GG => {
            const ZG = zG.current;
            if (!ZG || ZG.pointerId !== GG.pointerId) return;
            const SG = GG.clientX - ZG.startX,
              kG = GG.clientY - ZG.startY;
            if (!ZG.moved && Math.hypot(SG, kG) < 5) return;
            const pG = !ZG.moved;
            var fG, QG;
            (ZG.moved = !0, pG) && (ZG.ringStyle = null !== (fG = null === (QG = wG.current) || void 0 === QG ? void 0 : QG.getAttribute("style")) && void 0 !== fG ? fG : null);
            const hG = (0, FG.x)(VG.width, VG.height, KG);
            if (!ZG.home) {
              var dG;
              ZG.to = {
                dx: 0,
                dy: 0
              }, bG(ZG.id, ZG.to);
              const GG = UG(ZG.id),
                wG = null !== (dG = oG(ZG, GG)) && void 0 !== dG ? dG : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: ZG.origin
                },
                SG = (0, FG.c)(ZG.origin);
              ZG.home = {
                centre: GG ? (0, FG.c)(GG) : {
                  x: SG.x - ZG.from.dx * VG.width,
                  y: SG.y - ZG.from.dy * VG.height
                },
                anchor: wG
              }
            }
            const JG = ZG.home;
            let rG = !1;
            const EG = GG => {
                rG = !1;
                let wG = (0, FG.i)(GG.box, SG / YG, kG / YG, hG);
                const LG = VG.width / 2;
                if (yG && Math.abs((0, FG.c)(ZG.origin).x + wG.x - LG) <= 8 / YG) {
                  const bG = LG - (0, FG.c)(ZG.origin).x,
                    SG = (0, FG.i)(GG.box, bG, wG.y, hG);
                  rG = Math.abs(SG.x - bG) < .01, rG && (wG = SG)
                }
                const UG = (0, FG.q)(ZG.from, wG.x - GG.skew.x, wG.y - GG.skew.y, VG.width, VG.height);
                ZG.to = kZ(UG), ZG.anchor = GG, bG(ZG.id, ZG.to)
              },
              XG = (0, FG.i)(JG.anchor.box, SG / YG, kG / YG, hG),
              uG = LG.current,
              iG = (0, FG.c)(ZG.origin),
              CG = ((0, vG.W)(ZG.id) ? 20 : 6) / YG;
            if (Math.abs(iG.x + XG.x - JG.centre.x) <= CG && Math.abs(iG.y + XG.y - JG.centre.y) <= CG) ZG.to = {
              dx: 0,
              dy: 0
            }, ZG.anchor = JG.anchor, rG = yG && Math.abs(JG.centre.x - VG.width / 2) < 1, bG(ZG.id, ZG.to);
            else if (ZG.away) EG(ZG.away);
            else {
              var WG;
              EG(JG.anchor), ZG.away = null !== (WG = oG(ZG, UG(ZG.id))) && void 0 !== WG ? WG : JG.anchor, EG(ZG.away)
            }
            null === uG || void 0 === uG || uG.classList.add("Shown"), null === uG || void 0 === uG || uG.classList.toggle("Snapped", rG), (GG => {
              const bG = wG.current;
              if (bG) {
                const {
                  skew: ZG,
                  box: wG
                } = GG.anchor;
                bG.style.left = wG.left * YG + "px", bG.style.top = wG.top * YG + "px", bG.style.width = (wG.right - wG.left) * YG + "px", bG.style.height = (wG.bottom - wG.top) * YG + "px", bG.style.translate = `${((GG.to.dx-GG.from.dx)*VG.width+ZG.x)*YG}px ${((GG.to.dy-GG.from.dy)*VG.height+ZG.y)*YG}px`
              }
            })(ZG)
          },
          onPointerUp: GG => {
            XG(GG, !0)
          },
          onPointerCancel: GG => {
            XG(GG, !1)
          }
        }
      }
    }
    var YZ = ZG(8946);

    function VZ(GG, bG) {
      return Object.keys(GG).filter((GG => GG !== bG)).map((bG => GG[bG]))
    }

    function pZ(GG) {
      return GG.map((GG => {
        let {
          id: bG,
          box: ZG
        } = GG;
        return `${bG}:${ZG.left},${ZG.top},${ZG.right},${ZG.bottom}`
      })).join(";")
    }

    function fZ(GG) {
      const bG = [],
        ZG = bG => (0, vG.W)(bG) && !GG.documentElement.classList.contains((0, fb.L)(bG));
      for (const kG of GG.querySelectorAll(`[${HG}]`)) {
        const GG = ZG(kG.getAttribute(HG)) ? kG.querySelector(".ScaleOnHover") : null,
          wG = (null !== GG && void 0 !== GG ? GG : kG).getBoundingClientRect();
        (wG.width > 0 || wG.height > 0) && bG.push({
          id: kG.getAttribute(HG),
          box: (0, FG.e)(wG)
        })
      }
      const wG = GG => (0, FG.C)(bG.filter((bG => {
          let {
            id: ZG
          } = bG;
          return GG(ZG)
        })).map((GG => {
          let {
            box: bG
          } = GG;
          return bG
        }))),
        SG = {};
      for (const kG of new Set(bG.map((GG => GG.id)))) SG[kG] = wG((GG => GG === kG));
      for (const [kG, UG] of qG) {
        const GG = wG((GG => UG.has(GG)));
        GG && (SG[kG] = GG)
      }
      const LG = GG.querySelector(".TouchInventoryKeys"),
        yG = LG ? (0, FG.e)(LG.getBoundingClientRect()) : null;
      return {
        boxes: SG,
        pieces: bG,
        pairHome: yG
      }
    }

    function QZ(GG, bG, ZG) {
      const wG = bG.right - bG.left,
        SG = bG.bottom - bG.top;
      return Db(GG, "cluster", (bG => {
        const LG = ZG => {
            bG(ZG);
            const wG = [...GG.querySelectorAll(`[${HG}]:not(.HudPreviewGhost)`)].filter((GG => lG.has(GG.getAttribute(HG)))).map((GG => (0, FG.e)(GG.getBoundingClientRect()))),
              SG = (0, FG.C)(wG);
            return SG ? {
              w: SG.right - SG.left,
              h: SG.bottom - SG.top
            } : null
          },
          yG = GG => !GG || GG.w <= wG && GG.h <= SG,
          kG = LG(1),
          UG = LG(vG.l);
        if (!kG || yG(UG)) return vG.l;
        const YG = (GG, bG, ZG) => bG > GG ? 1 + (ZG - GG) * (vG.l - 1) / (bG - GG) : vG.l;
        let VG = Math.floor(Math.min(vG.l, YG(kG.w, UG.w, wG), YG(kG.h, UG.h, SG)) / ZG + 1e-6) * ZG;
        for (; VG > 1 && !yG(LG(VG));) VG = Math.round(100 * (VG - ZG)) / 100;
        return Math.max(1, VG)
      }))
    }

    function KZ(GG) {
      eb(document, GG, {
        keysAbove: !1
      });
      const bG = parseFloat(getComputedStyle(GG.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        ZG = Number.isFinite(bG) && bG < 0;
      return eb(document, GG, {
        keysAbove: ZG
      }), (0, YZ.e)(GG), ZG
    }

    function hZ(GG) {
      const bG = GG.querySelector(".TouchInventoryKey.ShopKey");
      return null !== bG && "1" === getComputedStyle(bG).getPropertyValue("--touch-shop-above").trim()
    }

    function dZ(GG, bG) {
      let {
        layout: ZG,
        orientation: wG,
        viewport: LG,
        replicaKey: yG,
        joystickFixed: kG,
        busy: UG
      } = bG;
      const [YG, VG] = (0, SG.useState)(null), [pG, fG] = (0, SG.useState)({
        boxes: {},
        pieces: []
      }), [QG, KG] = (0, SG.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [hG, dG] = (0, SG.useState)(!1), [JG, rG] = (0, SG.useState)(!1), [zG, EG] = (0, SG.useState)(!1), oG = (0, SG.useCallback)((GG => {
        rG(GG), GG && EG(!0)
      }), []), XG = ZG.hudLayouts[wG].hudSafe;
      (0, SG.useLayoutEffect)((() => {
        const bG = GG.current.contentDocument;
        bG.open(), bG.write("<!DOCTYPE html><html><head></head><body></body></html>"), bG.close(), VG(bG)
      }), [GG]);
      const uG = (0, SG.useCallback)((() => {
          YG && ((0, Vb.E)(YG), fG(fZ(YG)), KG(function(GG, bG) {
            const ZG = tb(GG),
              [wG, SG, LG, yG] = bG ? (0, fb.E)(bG, window.innerWidth, window.innerHeight, ZG) : ZG;
            return {
              top: wG,
              right: SG,
              bottom: LG,
              left: yG
            }
          }(YG, XG)))
        }), [YG, XG]),
        iG = (0, SG.useCallback)((() => {
          YG && dG(KZ(YG))
        }), [YG]),
        CG = (0, SG.useRef)((() => {}));
      return CG.current = () => {
        iG(), UG() || uG()
      }, (0, SG.useLayoutEffect)((() => {
        if (YG) return gb(document, YG, (() => {
          CG.current()
        }), oG)
      }), [YG, oG]), (0, SG.useLayoutEffect)(iG, [iG, LG]), (0, SG.useLayoutEffect)((() => {
        YG && (eb(document, YG, {
          keysAbove: hG
        }), Tb(document, YG, ZG, wG, kG), iG(), uG())
      }), [YG, ZG, wG, hG, yG, kG, LG, uG, iG]), (0, SG.useEffect)((() => {
        var GG;
        if (!YG) return;
        const bG = new ResizeObserver((() => {
          UG() || uG()
        }));
        for (const ZG of YG.querySelectorAll(`[${HG}]`)) bG.observe(ZG);
        return null === (GG = YG.fonts) || void 0 === GG || GG.ready.then(uG), () => {
          bG.disconnect()
        }
      }), [YG, uG, UG, yG]), {
        doc: YG,
        boxes: pG.boxes,
        pieces: pG.pieces,
        insets: QG,
        keysAbove: hG,
        ready: JG,
        settled: zG
      }
    }
    const JZ = ["Above", "Below", "Left", "Right"];

    function rZ(GG, bG, ZG, wG, SG) {
      const LG = ZG[GG],
        yG = (LG.left + LG.right) / 2,
        kG = (LG.top + LG.bottom) / 2,
        UG = (7.5 * bG.length + 14) / wG,
        YG = 18 / wG,
        VG = {
          Above: {
            left: yG - UG / 2,
            top: LG.top - YG,
            right: yG + UG / 2,
            bottom: LG.top
          },
          Below: {
            left: yG - UG / 2,
            top: LG.bottom,
            right: yG + UG / 2,
            bottom: LG.bottom + YG
          },
          Left: {
            left: LG.left - UG,
            top: kG - YG / 2,
            right: LG.left,
            bottom: kG + YG / 2
          },
          Right: {
            left: LG.right,
            top: kG - YG / 2,
            right: LG.right + UG,
            bottom: kG + YG / 2
          }
        },
        pG = VZ(ZG, GG),
        fG = {
          left: 0,
          top: 0,
          right: SG.width,
          bottom: SG.height
        };
      return JZ[(0, FG.p)(JZ.map((GG => VG[GG])), pG, {
        bounds: fG
      })]
    }

    function zZ() {
      const [GG, bG] = (0, Ub.b)();
      return (0, SG.useMemo)((() => ({
        width: GG,
        height: bG
      })), [GG, bG])
    }

    function EZ(GG) {
      var bG;
      const {
        layout: ZG,
        orientation: LG,
        selected: yG,
        onSelect: kG,
        onMove: YG,
        canMove: VG,
        actionButtons: pG,
        joystickFixed: fG,
        presence: QG,
        keyNames: hG,
        maxHeight: dG,
        fill: JG = !1,
        apiRef: rG
      } = GG, {
        t: zG
      } = (0, wG.w)(), EG = zZ(), XG = (null !== (bG = (0, KG.i)("maxAuraLevel")) && void 0 !== bG ? bG : 0) > 0, uG = ZG.hudLayouts[LG], iG = (0, SG.useRef)(null), CG = (0, SG.useRef)(null), WG = (0, SG.useRef)(null), mG = (0, SG.useRef)(null), aG = (0, SG.useRef)(null), cG = (0, SG.useRef)(null), lG = (0, Yb.d)(iG).width, PG = JG ? 1 : lG > 0 ? (0, FG.u)(lG, EG.width, EG.height, dG) : 0, MG = (0, SG.useRef)((() => !1)), nG = (0, SG.useCallback)((() => MG.current()), []), gG = `${pG}:${fG}:${XG}`, {
        doc: eG,
        boxes: RG,
        pieces: TG,
        insets: HG,
        keysAbove: DG,
        ready: NG,
        settled: OG
      } = dZ(WG, {
        layout: ZG,
        orientation: LG,
        viewport: EG,
        replicaKey: gG,
        joystickFixed: fG,
        busy: nG
      }), xG = (0, SG.useCallback)((GG => {
        eG && Tb(document, eG, GG, LG, fG)
      }), [eG, LG, fG]), BG = (0, SG.useCallback)((GG => {
        if (!eG || !OG) return null;
        xG(GG);
        const bG = KZ(eG),
          ZG = function(GG, bG) {
            let {
              boxes: ZG,
              pieces: wG,
              pairHome: SG
            } = GG;
            const LG = wG.find((GG => jG.has(GG.id)));
            if (!LG || !SG) return ZG;
            const yG = (0, FG.c)(SG),
              kG = bG(LG.id),
              UG = Bb(LG.box) / kG / 2,
              YG = (LG.box.bottom - LG.box.top) / kG / 2;
            return {
              ...ZG,
              inventory: {
                left: yG.x - UG,
                top: yG.y - YG,
                right: yG.x + UG,
                bottom: yG.y + YG
              }
            }
          }(fZ(eG), (bG => (0, vG.G)(GG, LG, bG)[2]));
        return {
          boxes: ZG,
          keysAbove: bG,
          shopAlone: hZ(eG)
        }
      }), [eG, OG, xG, LG]), Gb = (0, SG.useRef)(null), bb = (0, SG.useRef)(null), Zb = (0, SG.useRef)(ZG);
      Zb.current = ZG;
      const wb = (0, SG.useCallback)((() => {
        null !== Gb.current && (cancelAnimationFrame(Gb.current), Gb.current = null)
      }), []);
      (0, SG.useEffect)((() => wb), [ZG, wb]);
      const Sb = (0, SG.useRef)(-1 / 0),
        {
          lockable: Lb
        } = GG,
        kb = (0, SG.useCallback)((GG => {
          if (xG(GG), Sb.current = performance.now(), !OG || 0 === ZG.hudLayouts[LG].hudLocked.length) return;
          const bG = ZG;
          wb(), Gb.current = requestAnimationFrame((() => {
            var ZG;
            if (Gb.current = null, Zb.current !== bG) return;
            const wG = (null === (ZG = bb.current) || void 0 === ZG ? void 0 : ZG.from) === bG ? bb.current.measured : BG(bG);
            wG && (bb.current = {
              from: bG,
              measured: wG
            }), xG(wG ? bZ(bG, GG, LG, EG, BG, {
              canKeep: Lb,
              passes: 1,
              before: wG
            }) : GG)
          }))
        }), [xG, OG, ZG, LG, EG, BG, Lb, wb]),
        Ub = UZ({
          preview: (GG, bG) => {
            bG ? kb((0, vG.jb)(ZG, LG, GG, bG)) : (wb(), xG(ZG))
          },
          stageRef: CG,
          ringRef: mG,
          centreLineRef: aG,
          snapCentre: ZG.hudSnapCentre,
          ready: OG,
          measure: GG => {
            const bG = eG && NG ? fZ(eG).boxes[GG] : void 0;
            return bG && (0, FG.f)(bG, EG.width, EG.height) ? bG : null
          },
          k: PG,
          viewport: EG,
          boxes: RG,
          pieces: TG,
          selected: yG,
          insets: HG,
          layout: uG,
          canMove: VG,
          onSelect: kG,
          onMove: (GG, bG, ZG) => {
            wb(), YG(GG, bG, ZG)
          }
        });
      (0, SG.useLayoutEffect)((() => {
        MG.current = Ub.busy
      }), [Ub.busy]);
      const Qb = (0, SG.useRef)([]),
        Kb = (0, SG.useRef)(uG.hudElements);
      (0, SG.useEffect)((() => {
        for (const SG of Object.keys(uG.hudElements)) {
          var GG, bG, ZG, wG;
          (null !== (GG = null === (bG = uG.hudElements[SG]) || void 0 === bG ? void 0 : bG[2]) && void 0 !== GG ? GG : 1) > (null !== (ZG = null === (wG = Kb.current[SG]) || void 0 === wG ? void 0 : wG[2]) && void 0 !== ZG ? ZG : 1) && VG(SG) && !(0, Vb.C)(SG, uG.hudElements[SG]) && Qb.current.push(...sG(SG, DG, VG))
        }
        Kb.current = uG.hudElements
      }), [uG.hudElements, VG, DG]), (0, SG.useEffect)((() => {
        if (!NG) return;
        const GG = (0, FG.x)(EG.width, EG.height, HG);
        for (const ZG of ((GG, bG, ZG, wG) => {
            const SG = GG => {
              const SG = bG[GG],
                {
                  x: LG,
                  y: yG
                } = SG && wG(GG) ? (0, FG.y)(SG, ZG) : {
                  x: 0,
                  y: 0
                };
              return SG && {
                left: SG.left + LG,
                top: SG.top + yG,
                right: SG.right + LG,
                bottom: SG.bottom + yG
              }
            };
            return GG.flatMap((GG => {
              const LG = bG[GG];
              if ("inventory" !== GG || !LG || LG.right - LG.left <= ZG.right - ZG.left && LG.bottom - LG.top <= ZG.bottom - ZG.top) return [GG];
              const [yG, kG] = [SG("shop"), SG("bag")];
              return yG && kG && !(0, FG.g)(yG, kG, 0) ? ["shop", "bag"].filter(wG) : [GG]
            }))
          })(Qb.current.splice(0), RG, GG, VG)) {
          const wG = RG[ZG];
          if (!wG || Ub.busy() || !(0, FG.f)(wG, EG.width, EG.height)) continue;
          const SG = (0, FG.y)(wG, GG);
          if (0 !== SG.x || 0 !== SG.y) {
            var bG;
            const [GG, wG] = null !== (bG = uG.hudElements[ZG]) && void 0 !== bG ? bG : [0, 0];
            YG(ZG, GG + SG.x / EG.width, wG + SG.y / EG.height)
          }
        }
      }), [RG, NG]), (0, SG.useImperativeHandle)(rG, (() => ({
        setScale: (GG, bG) => {
          kb((0, vG.jb)(ZG, LG, GG, {
            scale: bG
          }))
        },
        setOpacity: GG => {
          xG({
            ...ZG,
            hudKeyOpacity: GG
          })
        },
        keepLocks: (GG, bG) => (wb(), bZ(GG, bG, LG, EG, BG, {
          canKeep: Lb
        })),
        setSafe: GG => {
          const bG = (0, fb.E)(GG, EG.width, EG.height, tb(null !== eG && void 0 !== eG ? eG : document));
          kb((0, vG.nb)(ZG, LG, GG)), cG.current && (cG.current.style.inset = bG.map((GG => GG * PG + "px")).join(" "))
        }
      })), [xG, kb, BG, wb, Lb, eG, ZG, LG, EG, PG]);
      const hb = new Set(Object.keys(uG.hudElements).filter((GG => (0, vG.v)(uG.hudElements, GG)))),
        db = yG ? RG[yG] : void 0,
        Jb = yG ? tG(yG, pG, zG, hG) : "",
        rb = (0, lb.e)(EG.width, EG.height),
        zb = yG ? function(GG, bG, ZG, wG) {
          const SG = GG => AG(GG).some((GG => (0, vG.v)(ZG.hudElements, GG) || (0, Vb.y)(GG, ZG, wG)));
          if (SG(GG)) return [];
          const LG = GG => {
              var bG, wG;
              return "bag" === GG && 1 !== (null !== (bG = null === (wG = ZG.hudElements.shop) || void 0 === wG ? void 0 : wG[2]) && void 0 !== bG ? bG : 1) || AG(GG).some((GG => void 0 !== ZG.hudElements[GG]))
            },
            yG = qG.get(GG),
            kG = bG.filter((bG => {
              let {
                id: ZG
              } = bG;
              return yG ? yG.has(ZG) && !SG(ZG) : ZG === GG
            })),
            UG = new Set;
          for (const YG of bG) YG.id === GG || null !== yG && void 0 !== yG && yG.has(YG.id) || UG.has(YG.id) || SG(YG.id) || kG.some((GG => {
            let {
              id: bG,
              box: wG
            } = GG;
            return !pb(bG, YG.id, ZG) && (LG(bG) || LG(YG.id)) && (0, FG.g)(wG, YG.box, 2)
          })) && UG.add(YG.id);
          return [...UG]
        }(yG, TG, uG, rb) : [],
        Eb = new Set((0, Vb.u)(uG.hudElements)),
        ob = (0, Vb.M)(uG, (0, Vb.I)(QG.rowIcons)).state,
        Xb = zb.join(),
        ub = (0, SG.useRef)(GG.onReady);
      ub.current = GG.onReady, (0, SG.useEffect)((() => {
        var GG;
        null === (GG = ub.current) || void 0 === GG || GG.call(ub, OG)
      }), [OG]);
      const ib = (0, SG.useRef)(GG.onMeasured);
      (0, SG.useLayoutEffect)((() => {
        ib.current = GG.onMeasured
      }));
      const Cb = (0, SG.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        Wb = [pZ(TG), EG.width, EG.height, HG.top, HG.right, HG.bottom, HG.left, NG, gG].join("|");
      (0, SG.useEffect)((() => {
        const GG = Xb ? Xb.split(",") : [],
          bG = () => {
            var bG;
            null === (bG = ib.current) || void 0 === bG || bG.call(ib, RG, GG, Cb.current.caps)
          };
        let ZG;
        const wG = () => {
          const GG = Zb.current;
          if (!eG || GG === Cb.current.layout && Wb === Cb.current.input) return !1;
          const SG = Sb.current + 250 - performance.now();
          return GG === Cb.current.layout && (SG > 0 || nG()) ? (ZG = setTimeout((() => {
            wG() && bG()
          }), Math.max(SG, 62.5)), !1) : (Cb.current = {
            layout: GG,
            input: Wb,
            caps: {
              hotbar: Nb(eG, ab),
              cluster: QZ(eG, (0, FG.x)(EG.width, EG.height, HG), ab)
            }
          }, !0)
        };
        return wG(), bG(), () => {
          clearTimeout(ZG)
        }
      }), [RG, Xb, eG, EG, HG, Wb, nG]);
      const mb = GG => ({
        left: GG.left * PG,
        top: GG.top * PG,
        width: (GG.right - GG.left) * PG,
        height: (GG.bottom - GG.top) * PG
      });
      return (0, oG.jsx)("div", {
        ref: iG,
        className: UG()("HudPreviewBox", {
          Fill: JG
        }),
        style: {
          height: EG.height * PG
        },
        children: (0, oG.jsxs)("div", {
          ref: CG,
          className: "HudPreviewStage",
          style: {
            width: EG.width * PG,
            height: EG.height * PG
          },
          children: [(0, oG.jsx)("iframe", {
            ref: WG,
            className: "HudPreviewFrame",
            title: zG("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: EG.width,
              height: EG.height,
              transform: `scale(${PG})`
            }
          }), eG && (0, yb.createPortal)((0, oG.jsx)(Fb, {
            presence: QG,
            portraitPhone: rb,
            hidden: hb,
            actionButtons: pG,
            joystickFixed: fG,
            keysAbove: DG,
            auraBar: XG,
            trayState: ob,
            moved: Eb
          }), eG.body), (0, oG.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...Ub.handlers,
            children: [(0, oG.jsx)("div", {
              ref: cG,
              className: "HudPreviewSafeZone",
              style: {
                top: HG.top * PG,
                right: HG.right * PG,
                bottom: HG.bottom * PG,
                left: HG.left * PG
              }
            }), TG.map(((GG, bG) => {
              let {
                id: ZG,
                box: wG
              } = GG;
              return (0, oG.jsx)("div", {
                className: "HudPreviewHandle",
                style: mb((0, FG.l)(wG, 40 / PG))
              }, `${ZG}:${bG}`)
            })), uG.hudLocked.map((GG => {
              const bG = RG[GG];
              return bG && (0, oG.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: bG.right * PG,
                  top: bG.top * PG
                },
                children: (0, oG.jsx)(IG.c, {
                  name: "lock"
                })
              }, GG)
            })), (0, oG.jsx)("div", {
              ref: aG,
              className: "HudPreviewCentreLine",
              style: {
                left: EG.width / 2 * PG
              }
            }), yG && db && (0, oG.jsx)("div", {
              ref: mG,
              className: UG()("HudPreviewRing", {
                Fixed: !VG(yG),
                Overlap: zb.length > 0
              }),
              style: mb(db),
              children: (0, oG.jsx)("span", {
                className: UG()("HudPreviewRingLabel", rZ(yG, Jb, RG, PG, EG)),
                children: Jb
              })
            })]
          })]
        })
      })
    }

    function oZ(GG, bG) {
      (0, SG.useEffect)((() => {
        var ZG;
        null === (ZG = GG.current) || void 0 === ZG || ZG.toggleAttribute("inert", bG)
      }), [GG, bG])
    }
    const XZ = "hudFullScreen";

    function uZ(GG) {
      let {
        onScale: bG,
        onHidden: ZG,
        onReset: LG,
        locked: yG,
        lockable: kG,
        onLocked: UG,
        onClose: VG,
        ...pG
      } = GG;
      const {
        t: fG
      } = (0, wG.w)(), QG = (0, SG.useRef)(null);
      (0, kb.w)("popup", QG, VG),
      function(GG) {
        const bG = (0, SG.useRef)(GG);
        bG.current = GG, (0, SG.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [XZ]: !0
          }, "");
          let GG = !1;
          const ZG = () => {
            GG = !0, bG.current()
          };
          return window.addEventListener("popstate", ZG), () => {
            var bG;
            window.removeEventListener("popstate", ZG), !GG && null !== (bG = window.history.state) && void 0 !== bG && bG[XZ] && window.history.back()
          }
        }), [])
      }(VG), (0, SG.useEffect)((() => {
        function GG(GG) {
          "Escape" === GG.key && (GG.stopPropagation(), VG())
        }
        return window.addEventListener("keydown", GG, !0), () => {
          window.removeEventListener("keydown", GG, !0)
        }
      }), [VG]);
      const {
        selected: KG
      } = pG, hG = (0, SG.useRef)(null), dG = (0, SG.useRef)(null), [JG, rG] = (0, SG.useState)(!1);
      oZ(dG, !JG);
      const [zG, EG] = (0, SG.useState)(null), [XG, uG] = (0, SG.useState)([]), [iG, CG] = vb(), WG = (0, SG.useRef)(pG.selected);
      WG.current = pG.selected;
      const mG = (0, SG.useRef)({}),
        IG = (0, SG.useCallback)((() => {
          const GG = hG.current;
          GG && EG(function(GG, bG, ZG) {
            var wG;
            const {
              innerWidth: SG,
              innerHeight: LG
            } = window, yG = GG.offsetWidth, kG = GG.offsetHeight, UG = Math.max(Hb()[0], 6), YG = [];
            for (const fG of [UG, .2 * LG, .5 * LG - kG / 2, .33 * LG])
              for (const GG of [.5, .3, .7]) YG.push({
                left: Math.max(0, Math.min(SG - yG - 6, Math.max(6, SG * GG - yG / 2))),
                top: fG
              });
            const VG = YG.map((GG => ({
                left: GG.left - 6,
                top: GG.top - 6,
                right: GG.left + yG + 6,
                bottom: GG.top + kG + 6
              }))),
              pG = VZ(bG, ZG);
            return YG[(0, FG.p)(VG, pG, {
              avoid: ZG && null !== (wG = bG[ZG]) && void 0 !== wG ? wG : null
            })]
          }(GG, mG.current, WG.current))
        }), []),
        vG = (0, SG.useCallback)(((GG, bG, ZG) => {
          uG(bG), CG(ZG), mG.current = GG, IG()
        }), [IG, CG]);
      return (0, SG.useLayoutEffect)(IG, [pG.selected, IG]), (0, yb.createPortal)((0, oG.jsxs)("div", {
        ref: QG,
        className: "HudFullScreenEditor",
        children: [(0, oG.jsx)(EZ, {
          ...pG,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: vG,
          onReady: rG,
          lockable: kG
        }), (0, oG.jsxs)("div", {
          ref: hG,
          className: "HudFullScreenToolbar",
          style: null === zG ? void 0 : {
            left: zG.left,
            top: zG.top,
            transform: "none"
          },
          children: [(0, oG.jsx)("div", {
            ref: dG,
            className: "HudFullScreenControls",
            children: (0, oG.jsx)(cb, {
              selected: KG,
              layout: pG.layout.hudLayouts[pG.orientation],
              actionButtons: pG.actionButtons,
              keyNames: pG.keyNames,
              overlaps: XG,
              scaleCaps: iG,
              onScale: bG,
              onHidden: ZG,
              onReset: LG,
              locked: yG,
              lockable: kG,
              onLocked: UG,
              joystickFixed: pG.joystickFixed
            })
          }), (0, oG.jsx)(YG.d, {
            className: "HudFullScreenDone",
            onClick: VG,
            padDefaultFocus: !0,
            children: fG("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const iZ = GG => `${Math.round(100*GG)}%`;

    function CZ(GG) {
      let {
        info: bG,
        tuple: ZG,
        props: SG
      } = GG;
      const {
        t: LG
      } = (0, wG.w)();
      return (0, oG.jsx)(QG.f, {
        name: LG("hudLayout:size"),
        min: vG.o,
        max: vG.l,
        step: ab,
        initValue: ZG[2],
        disabled: SG.locked.has(bG.id),
        selectableMax: SG.scaleCaps[bG.id],
        cappedNote: LG("hudLayout:sizeCapped"),
        format: iZ,
        onChange: GG => {
          SG.onScalePreview(bG.id, GG)
        },
        onChangeComplete: GG => {
          SG.onScale(bG.id, GG)
        }
      })
    }

    function WZ(GG) {
      const {
        t: bG
      } = (0, wG.w)(), {
        present: ZG,
        elements: LG,
        selected: yG,
        onSelect: kG,
        onHidden: YG,
        onReset: VG,
        note: pG,
        actionButtons: fG,
        keyNames: QG,
        sizeBesidePreview: KG,
        locked: hG,
        lockable: dG,
        onLocked: JG
      } = GG, {
        rowIconsOpen: rG,
        onRowIconsOpen: zG
      } = GG, EG = (0, SG.useRef)(null), XG = null !== yG && (rG || !(0, vG.W)(yG));
      return (0, SG.useEffect)((() => {
        var GG;
        const bG = yG ? null === (GG = EG.current) || void 0 === GG ? void 0 : GG.querySelector(`[data-hud-row="${yG}"]`) : null;
        if (!bG) return;
        const ZG = bG.closest(".SettingsMenuRight"),
          wG = performance.now();
        let SG = null;
        const LG = () => {
            clearInterval(UG), null === ZG || void 0 === ZG || ZG.removeEventListener("scroll", kG)
          },
          kG = () => {
            SZ() || LG()
          },
          UG = setInterval((() => {
            const GG = performance.now();
            GG - wG > 1500 ? LG() : SZ() ? SG = null : null === SG ? SG = GG : GG - SG >= 150 && (LG(), function(GG) {
              var bG;
              const ZG = GG.closest(".SettingsMenuRight"),
                wG = null === (bG = GG.closest(".HudLayoutSettings")) || void 0 === bG ? void 0 : bG.querySelector(".HudLayoutPreviewBox");
              if (!ZG || !wG) return;
              const SG = wG.getBoundingClientRect().bottom + 8,
                LG = ZG.getBoundingClientRect().bottom - 8,
                yG = GG.getBoundingClientRect();
              yG.top < SG ? ZG.scrollBy({
                top: yG.top - SG,
                behavior: "smooth"
              }) : yG.bottom > LG && ZG.scrollBy({
                top: Math.min(yG.bottom - LG, yG.top - SG),
                behavior: "smooth"
              })
            }(bG))
          }), 50);
        return null === ZG || void 0 === ZG || ZG.addEventListener("scroll", kG, {
          passive: !0
        }), LG
      }), [yG, XG]), (0, oG.jsx)("div", {
        ref: EG,
        className: "SettingBoxGroup HudElementList",
        children: RG.filter((GG => ZG.has(GG.id) && (rG || !(0, vG.W)(GG.id)))).map((ZG => {
          const wG = ((GG, bG) => {
              var ZG;
              return null !== (ZG = GG[bG]) && void 0 !== ZG ? ZG : vG.q
            })(LG, ZG.id),
            SG = (0, vG.v)(LG, ZG.id),
            EG = ZG.id === yG,
            XG = ZG.scale && !KG,
            uG = pG(ZG.id, EG);
          return (0, oG.jsxs)("div", {
            "data-hud-row": ZG.id,
            className: UG()("SettingBox HudElementRow", {
              Open: EG,
              Hidden: SG,
              Child: void 0 !== ZG.parent,
              Grandchild: MG(ZG.id).length > 1
            }),
            children: [(0, oG.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, oG.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": XG ? EG : void 0,
                onClick: () => {
                  kG(ZG.id)
                },
                children: (0, oG.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [tG(ZG.id, fG, bG, QG), ZG.scale && 1 !== wG[2] && !(EG && XG) && (0, oG.jsxs)(oG.Fragment, {
                    children: [" ", (0, oG.jsx)("span", {
                      className: "HudElementRowSize",
                      children: iZ(wG[2])
                    })]
                  }), XG && (0, oG.jsxs)(oG.Fragment, {
                    children: [" ", (0, oG.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, oG.jsx)(BG, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: ZG.id,
                actionButtons: fG,
                keyNames: QG,
                locked: hG.has(ZG.id),
                lockable: dG(ZG.id),
                onLocked: JG
              }), "menu" === ZG.id && (0, oG.jsx)(Gb, {
                className: "HudElementRowIcon",
                open: rG,
                name: tG(ZG.id, fG, bG, QG),
                onToggle: zG
              }), "menu" !== ZG.id && (0, oG.jsx)(OG, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: ZG.id,
                elements: LG,
                actionButtons: fG,
                keyNames: QG,
                onHidden: YG
              }), (0, oG.jsx)(xG, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: hG.has(ZG.id),
                id: ZG.id,
                elements: LG,
                actionButtons: fG,
                keyNames: QG,
                onReset: VG
              })]
            }), EG && XG && (0, oG.jsx)(CZ, {
              info: ZG,
              tuple: wG,
              props: GG
            }), uG && (0, oG.jsx)("div", {
              className: "HudElementNote",
              children: uG
            })]
          }, ZG.id)
        }))
      })
    }

    function mZ(GG) {
      let {
        preview: bG,
        quick: ZG,
        onFullScreen: LG,
        resting: yG,
        onSidePanel: kG
      } = GG;
      const {
        t: UG
      } = (0, wG.w)(), VG = zZ(), pG = (0, SG.useRef)(null), {
        width: fG
      } = (0, Yb.d)(pG), QG = Math.floor(VG.width * Math.min(1, bG.maxHeight / VG.height)), KG = fG - QG - 12, hG = KG >= 130, dG = fG > 0;
      (0, SG.useEffect)((() => {
        dG && kG(hG)
      }), [dG, hG, kG]);
      const JG = (0, FG.u)(hG ? QG : fG, VG.width, VG.height, bG.maxHeight),
        rG = yG ? (0, oG.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: VG.height * JG
          }
        }) : (0, oG.jsx)(EZ, {
          ...bG
        }),
        zG = GG => (0, oG.jsxs)(YG.K, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: UG("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: LG,
          children: [(0, oG.jsx)(IG.c, {
            name: "expand"
          }), GG && (0, oG.jsx)("span", {
            children: UG("hudLayout:fullScreen")
          })]
        });
      return (0, oG.jsxs)("div", {
        ref: pG,
        className: "SettingBox HudLayoutPreviewBox",
        children: [fG > 0 && hG && (0, oG.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, oG.jsx)("div", {
            style: {
              width: QG
            },
            children: rG
          }), (0, oG.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, oG.jsx)(cb, {
              selected: bG.selected,
              ...ZG,
              joystickFixed: bG.joystickFixed,
              extra: zG(!bG.selected || KG >= 278)
            })
          })]
        }), fG > 0 && !hG && (0, oG.jsxs)(oG.Fragment, {
          children: [rG, (0, oG.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: zG(!1)
          })]
        })]
      })
    }
    var IZ = ZG(2449),
      FZ = ZG(4424),
      vZ = ZG(2434),
      aZ = ZG(2393);
    const cZ = GG => {
      const bG = fb.s * ("sides" === GG ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(bG / 2))
    };

    function lZ(GG, bG, ZG) {
      const [wG, SG, LG, yG] = GG;
      return "sides" === bG ? [wG, ZG, LG, ZG] : [ZG, SG, ZG, yG]
    }
    const jZ = [null, null, null, null],
      PZ = GG => `${GG}px`;

    function MZ(GG) {
      let {
        safe: bG,
        onPreview: ZG,
        onCommit: LG
      } = GG;
      const {
        t: yG
      } = (0, wG.w)(), kG = (0, fb.E)(null !== bG && void 0 !== bG ? bG : jZ, window.innerWidth, window.innerHeight, tb(document).map(Math.round)), UG = (0, SG.useRef)(null !== bG && void 0 !== bG ? bG : jZ);
      UG.current = null !== bG && void 0 !== bG ? bG : jZ;
      const VG = GG => {
        const bG = Math.min(cZ(GG), "sides" === GG ? Math.max(kG[1], kG[3]) : Math.max(kG[0], kG[2]));
        return (0, oG.jsx)(QG.f, {
          name: yG("sides" === GG ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: cZ(GG),
          step: 2,
          initValue: bG,
          format: PZ,
          onChange: bG => {
            ZG(lZ(UG.current, GG, bG))
          },
          onChangeComplete: wG => {
            if (wG === bG) return void ZG(UG.current);
            const SG = lZ(UG.current, GG, wG);
            UG.current = SG, LG(SG), (0, iG.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: GG
            })
          }
        })
      };
      return (0, oG.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, oG.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, oG.jsx)("div", {
            children: yG("hudLayout:safeZone")
          }), (0, oG.jsx)(YG.K, {
            active: null === bG,
            pressed: null === bG,
            onClick: () => {
              LG(null)
            },
            children: yG("hudLayout:safeZoneAuto")
          })]
        }), VG("sides"), VG("ends")]
      })
    }

    function AZ() {
      const {
        t: GG
      } = (0, wG.w)(), bG = (0, vG.ib)(), {
        clientEscMenuOptions: ZG
      } = (0, VG.o)(["clientEscMenuOptions"]), LG = (0, IZ.f)(), yG = bG.hudLayouts[LG], [kG, UG] = (0, SG.useState)(null), {
        rowIconsOpen: pG,
        onRowIconsOpen: fG,
        select: KG
      } = function(GG, bG) {
        const [ZG, wG] = (0, SG.useState)((() => vG.K.some((bG => void 0 !== GG.hudElements[bG] || GG.hudLocked.includes(bG))))), LG = (0, SG.useCallback)((GG => {
          bG(GG), (0, vG.W)(GG) && wG(!0)
        }), [bG]);
        return {
          rowIconsOpen: ZG,
          onRowIconsOpen: wG,
          select: LG
        }
      }(yG, UG), [hG, dG] = (0, SG.useState)([]), [JG, rG] = (0, SG.useState)(null), [zG, EG] = vb(), XG = (0, SG.useCallback)(((GG, bG, ZG) => {
        dG(bG), EG(ZG);
        const wG = Object.keys(GG);
        rG((GG => (null === GG || void 0 === GG ? void 0 : GG.size) === wG.length && wG.every((bG => GG.has(bG))) ? GG : new Set(wG)))
      }), [EG]), {
        gameState: uG
      } = (0, VG.o)(["gameState"]), WG = (0, vZ.l)(), mG = (0, aZ.o)(), [IG] = (0, SG.useState)((() => {
        var GG, bG, ZG, wG;
        return "inGame" === uG ? (0, Kb.s)(document, WG, {
          rightOfCamera: null !== (GG = null === (bG = mG.rightOfCamera) || void 0 === bG ? void 0 : bG.icon) && void 0 !== GG ? GG : null,
          leftEnd: null !== (ZG = null === (wG = mG.leftEnd) || void 0 === wG ? void 0 : wG.icon) && void 0 !== ZG ? ZG : null
        }) : Kb.d
      })), FG = (0, SG.useRef)(null), aG = (0, SG.useRef)(null), cG = function(GG) {
        const [bG, ZG] = (0, SG.useState)((() => .4 * window.innerHeight));
        return (0, SG.useLayoutEffect)((() => {
          var bG;
          const wG = null === (bG = GG.current) || void 0 === bG ? void 0 : bG.closest(".SettingsMenuRight");
          if (!wG) return;
          const SG = () => {
            const GG = wG.clientHeight < sZ ? .4 : .5;
            ZG(Math.max(80, wG.clientHeight * GG - 24))
          };
          SG();
          const LG = new ResizeObserver(SG);
          return LG.observe(wG), () => {
            LG.disconnect()
          }
        }), [GG]), bG
      }(aG), lG = (0, FZ.n)(ZG.joystickMode), jG = ZG.touchActionButtons, MG = (0, SG.useMemo)((() => (0, Kb.o)(IG, jG)), [IG, jG]), AG = (0, SG.useMemo)((() => new Set((0, Kb.n)(IG, jG).map((GG => Kb.e[GG])))), [IG, jG]);
      (0, SG.useEffect)((() => {
        (0, iG.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [sG, qG] = (0, SG.useState)(!1), [nG, gG] = (0, SG.useState)(!1), eG = (0, SG.useRef)(null);
      oZ(eG, !nG);
      const [HG, NG] = (0, SG.useState)(!1), OG = (0, SG.useCallback)((() => {
        NG(!1)
      }), []), xG = (0, SG.useMemo)((() => new Set(yG.hudLocked)), [yG.hudLocked]), BG = GG => {
        var bG, ZG;
        const wG = (0, vG.u)(),
          SG = GG(wG);
        (0, vG.fb)(null !== (bG = null === (ZG = FG.current) || void 0 === ZG ? void 0 : ZG.keepLocks(wG, SG)) && void 0 !== bG ? bG : SG)
      }, Gb = (GG, bG) => {
        BG((ZG => (0, vG.jb)(ZG, LG, GG, bG)))
      }, bb = (GG, bG, ZG) => {
        Gb(GG, {
          dx: bG,
          dy: ZG
        }), (0, iG.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${GG}`
        })
      }, Zb = (GG, bG) => {
        BG((ZG => (0, vG.lb)(ZG, LG, GG, bG)))
      }, wb = GG => {
        const bG = TG[GG];
        return (bG.move || bG.scale) && ("joystick" !== GG || lG) && !(0, Vb.C)(GG, yG.hudElements[GG])
      }, yb = GG => TG[GG].move && ("joystick" !== GG || lG) && !xG.has(GG), kb = new Set(RG.map((GG => GG.id)).filter((GG => {
        const bG = (0, vG.W)(GG) && !IG.rowIcons.includes(GG);
        return null === JG || JG.has(GG) || (0, vG.v)(yG.hudElements, GG) && !bG
      }))), Ub = {
        present: kb,
        actionButtons: jG,
        keyNames: MG,
        scaleCaps: zG,
        sizeBesidePreview: sG,
        elements: yG.hudElements,
        selected: kG,
        onSelect: KG,
        rowIconsOpen: pG,
        onRowIconsOpen: fG,
        onScalePreview: (GG, bG) => {
          var ZG;
          null === (ZG = FG.current) || void 0 === ZG || ZG.setScale(GG, bG)
        },
        onScale: (GG, bG) => {
          Gb(GG, {
            scale: bG
          }), (0, iG.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${GG}`
          })
        },
        onHidden: (GG, bG) => {
          Gb(GG, {
            hidden: bG
          }), (0, iG.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${bG?"hide":"show"}:${GG}`
          })
        },
        onReset: GG => {
          Gb(GG, vG.e)
        },
        locked: xG,
        lockable: wb,
        onLocked: Zb,
        note: (bG, ZG) => {
          const wG = ZG && hG.length > 0 ? GG("hudLayout:overlapsNote", {
            names: DG(hG, jG, GG, MG)
          }) : null;
          if (ZG && Sb(bG, lG)) return (0, oG.jsxs)(oG.Fragment, {
            children: [wG && (0, oG.jsx)("span", {
              children: wG
            }), (0, oG.jsx)("span", {
              children: GG("hudLayout:floatingJoystickNote")
            }), !sG && (0, oG.jsx)(Lb, {})]
          });
          if (wG) return wG;
          const SG = ZG && xG.has(bG) ? GG("hudLayout:lockedNote") : null,
            LG = ZG && AG.has(bG) ? GG("hudLayout:contextSlotNote") : null;
          return SG || LG ? (0, oG.jsxs)(oG.Fragment, {
            children: [SG && (0, oG.jsx)("span", {
              children: SG
            }), LG && (0, oG.jsx)("span", {
              children: LG
            })]
          }) : ZG && "cluster" === bG ? GG("hudLayout:clusterNote") : ZG && "inventory" === bG ? GG("hudLayout:inventoryNote") : ZG && "menu" === bG ? GG("hudLayout:menuNote") : ZG && (0, Vb.C)(bG, yG.hudElements[bG]) && yb(bG) ? GG("hudLayout:rowIconNote") : ZG && "arrows" === bG ? GG("hudLayout:arrowsNote") : ZG && "sprint" === bG ? GG("hudLayout:sprintNote") : PG(bG) && (0, vG.v)(yG.hudElements, bG) ? GG("hudLayout:inventoryHiddenNote", {
            name: tG(bG, jG, GG, MG)
          }) : null
        }
      };
      return (0, oG.jsxs)("div", {
        ref: aG,
        className: "HudLayoutSettings",
        children: [(0, oG.jsxs)("div", {
          ref: eG,
          className: "HudLayoutBody",
          children: [(0, oG.jsx)("div", {
            className: "HudLayoutOrientation",
            children: GG("landscape" === LG ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, oG.jsx)(mZ, {
            preview: {
              layout: bG,
              orientation: LG,
              selected: kG,
              onSelect: KG,
              onMove: bb,
              canMove: yb,
              actionButtons: jG,
              joystickFixed: lG,
              presence: IG,
              keyNames: MG,
              maxHeight: cG,
              apiRef: FG,
              onMeasured: XG,
              onReady: gG,
              lockable: wb
            },
            quick: {
              layout: yG,
              actionButtons: jG,
              keyNames: MG,
              scaleCaps: zG,
              overlaps: hG,
              onScale: Ub.onScale,
              onHidden: Ub.onHidden,
              onReset: Ub.onReset,
              locked: xG,
              lockable: wb,
              onLocked: Zb
            },
            onFullScreen: () => {
              NG(!0)
            },
            resting: HG,
            onSidePanel: qG
          }), HG && (0, oG.jsx)(uZ, {
            layout: bG,
            orientation: LG,
            selected: kG,
            onSelect: KG,
            onMove: bb,
            canMove: yb,
            actionButtons: jG,
            joystickFixed: lG,
            presence: IG,
            keyNames: MG,
            onScale: Ub.onScale,
            onHidden: Ub.onHidden,
            onReset: Ub.onReset,
            locked: xG,
            lockable: wb,
            onLocked: Zb,
            apiRef: FG,
            onClose: OG
          }), (0, oG.jsx)(MZ, {
            safe: yG.hudSafe,
            onCommit: GG => {
              BG((bG => (0, vG.nb)(bG, LG, GG)))
            },
            onPreview: GG => {
              var bG;
              null === (bG = FG.current) || void 0 === bG || bG.setSafe(GG)
            }
          }), (0, oG.jsx)(QG.c, {
            label: GG("hudLayout:snapCentre"),
            checked: bG.hudSnapCentre,
            onClick: GG => {
              (0, vG.db)(GG)
            },
            circleInfoText: GG("hudLayout:snapCentreInfo")
          }), (0, oG.jsx)(WZ, {
            ...Ub
          }), (0, oG.jsx)(QG.e, {
            label: GG("hudLayout:shape"),
            options: vG.O.map((bG => ({
              value: bG,
              label: GG(`hudLayout:shape_${bG}`)
            }))),
            value: bG.hudShape,
            onChange: GG => {
              BG((bG => ({
                ...bG,
                hudShape: GG
              }))), (0, iG.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: GG
              })
            }
          }), (0, oG.jsx)(QG.f, {
            name: GG("hudLayout:opacity"),
            min: vG.i,
            max: 1,
            step: .05,
            initValue: bG.hudKeyOpacity,
            format: GG => `${Math.round(100*GG)}%`,
            circleInfoText: GG("hudLayout:opacityInfo"),
            onChange: GG => {
              var bG;
              null === (bG = FG.current) || void 0 === bG || bG.setOpacity(GG)
            },
            onChangeComplete: GG => {
              (0, vG.ab)(GG), (0, iG.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, oG.jsx)(YG.C, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const GG = CG.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await GG.getResult() && (0, vG.Z)()
            }()
          },
          children: GG("hudLayout:resetAll")
        })]
      })
    }
    const sZ = 350;
    const qZ = [function() {
      const {
        t: GG
      } = (0, wG.w)(), [bG, ZG] = (0, SG.useState)(!1), LG = (0, SG.useRef)(null);
      return (0, SG.useEffect)((() => {
        var GG;
        bG && (null === (GG = LG.current) || void 0 === GG || GG.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [bG]), (0, oG.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, oG.jsx)(WG.e, {
          ref: LG,
          icon: "arrows-up-down-left-right",
          title: GG("hudLayout:title"),
          sub: GG("hudLayout:entrySub"),
          expanded: bG,
          onClick: () => {
            ZG(!bG)
          }
        }), bG && (0, oG.jsx)(AZ, {})]
      })
    }, function() {
      const {
        t: GG
      } = (0, wG.w)(), {
        joystickMode: bG,
        touchSpeedCurve: ZG,
        autorun: SG,
        jumpLock: LG,
        touchEdgeGuard: yG
      } = (0, VG.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, oG.jsxs)(oG.Fragment, {
        children: [(0, oG.jsx)(QG.e, {
          label: GG("settingsMenu:joystick"),
          options: EG.Ub.map((bG => ({
            value: bG,
            label: GG(XG[bG])
          }))),
          value: bG,
          onChange: GG => {
            VG.e.setClientEscMenuOptions({
              joystickMode: GG
            })
          },
          circleInfoText: GG("settingsMenu:joystickInfo")
        }), (0, oG.jsx)(QG.c, {
          label: GG("settingsMenu:preciseWalking"),
          checked: ZG,
          onClick: GG => {
            VG.e.setClientEscMenuOptions({
              touchSpeedCurve: GG
            })
          },
          circleInfoText: GG("settingsMenu:preciseWalkingInfo")
        }), (0, oG.jsx)(QG.c, {
          label: GG("settingsMenu:autoRun"),
          checked: SG,
          onClick: GG => {
            VG.e.setClientEscMenuOptions({
              autorun: GG
            })
          },
          circleInfoText: GG("settingsMenu:autoRunInfo")
        }), (0, oG.jsx)(QG.c, {
          label: GG("settingsMenu:jumpLock"),
          checked: LG,
          onClick: GG => {
            VG.e.setClientEscMenuOptions({
              jumpLock: GG
            })
          },
          circleInfoText: GG("settingsMenu:jumpLockInfo")
        }), (0, oG.jsx)(QG.c, {
          label: GG("touchSettings:stopAtEdges"),
          checked: yG,
          onClick: GG => {
            VG.e.setClientEscMenuOptions({
              touchEdgeGuard: GG
            })
          },
          circleInfoText: GG("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, oG.jsx)(zG.b, {})
    }, function() {
      const {
        t: GG
      } = (0, wG.w)(), {
        clientEscMenuOptions: bG
      } = (0, VG.o)(["clientEscMenuOptions"]);
      return (0, uG.e)() ? (0, oG.jsx)(QG.c, {
        label: GG("settingsMenu:vibration"),
        checked: bG.vibration,
        onClick: GG => {
          VG.e.setClientEscMenuOptions({
            vibration: GG
          })
        },
        circleInfoText: GG("settingsMenu:vibrationInfo")
      }) : null
    }];

    function nZ() {
      return (0, oG.jsx)(oG.Fragment, {
        children: qZ.map(((GG, bG) => (0, oG.jsx)(GG, {}, bG)))
      })
    }
    var gZ = ZG(4398);

    function eZ() {
      const {
        t: GG
      } = (0, wG.w)(), {
        isTouchScreen: bG,
        clientEscMenuOptions: ZG,
        gameState: yG
      } = (0, VG.o)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), kG = (0, KG.i)("ezBridging"), UG = (0, KG.i)("ezTowering"), dG = "inGame" !== yG || !0 === kG, JG = (0, hG.g)(), zG = null !== JG && ("inGame" !== yG || !0 === UG), [, EG] = (0, SG.useReducer)((GG => GG + 1), 0), XG = (0, rG.g)(), [uG, iG] = (0, SG.useState)(gZ.d);
      return (0, oG.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [XG && (0, oG.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, oG.jsx)("div", {
            children: GG("controller:settingsControlsNote")
          }), (0, oG.jsx)(YG.K, {
            onClick: () => {
              VG.e.set({
                openSettingsCategory: "controller"
              })
            },
            children: GG("controller:settingsOpenController")
          })]
        }), (0, pG.isTouchscreen)() && !(0, pG.isMobile)() ? (0, oG.jsx)(oG.Fragment, {
          children: (0, oG.jsx)(QG.c, {
            label: GG("settingsMenu:useTouchControls"),
            checked: uG,
            onClick: GG => {
              (0, gZ.b)(GG), iG(GG)
            }
          })
        }) : null, bG && (0, oG.jsx)(nZ, {}), dG && (0, oG.jsx)(QG.c, {
          label: GG("settingsMenu:ezBridging"),
          checked: ZG.ezBridging,
          onClick: GG => {
            VG.e.setClientEscMenuOptions({
              ezBridging: GG
            })
          },
          circleInfoText: GG("settingsMenu:ezBridgingInfo")
        }), zG && (0, oG.jsx)(QG.c, {
          label: GG("settingsMenu:ezTowering"),
          checked: ZG.ezTowering,
          onClick: GG => {
            VG.e.setClientEscMenuOptions({
              ezTowering: GG
            })
          },
          circleInfoText: GG("jump" === JG ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, oG.jsx)(QG.c, {
          label: GG("settingsMenu:crouchToggle"),
          checked: ZG.crouchIsToggle,
          onClick: GG => {
            VG.e.setClientEscMenuOptions({
              crouchIsToggle: GG
            })
          },
          circleInfoText: GG("settingsMenu:crouchToggleInfo")
        }), (0, oG.jsx)(QG.c, {
          label: GG("settingsMenu:hideUiToggle"),
          checked: ZG.hideUiIsToggle,
          onClick: GG => {
            VG.e.setClientEscMenuOptions({
              hideUiIsToggle: GG
            })
          },
          circleInfoText: GG("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, fG.d)() && (0, oG.jsx)(QG.f, {
          name: GG("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: ZG.touchscreenSensitivity,
          onChange: GG => {
            VG.e.setClientEscMenuOptions({
              touchscreenSensitivity: GG
            })
          }
        }), !(0, pG.isMobile)() && (0, oG.jsx)(QG.f, {
          name: GG("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: ZG.mouseSensitivity,
          onChange: GG => {
            VG.e.setClientEscMenuOptions({
              mouseSensitivity: GG
            })
          }
        }), !(0, pG.isMobile)() && (0, oG.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, oG.jsx)("div", {
            className: "SliderText",
            children: GG("settingsMenu:keyBindings")
          }), LG.i.map((bG => (0, oG.jsx)(RZ, {
            title: GG(bG.name.translationKey, bG.name.params),
            defaultOpen: LG.m.has(bG.id),
            children: bG.actions.map((GG => (0, oG.jsx)(TZ, {
              noaAction: GG,
              forceUpdate: EG,
              clashesWith: bG.clashesWith,
              showPadGlyph: XG
            }, GG)))
          }, bG.name.translationKey))), (0, oG.jsx)(YG.C, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, LG.L)(), EG()
            },
            children: GG("controls:resetBindings")
          })]
        })]
      })
    }

    function RZ(GG) {
      let {
        title: bG,
        defaultOpen: ZG,
        children: wG
      } = GG;
      const [LG, yG] = (0, SG.useState)(ZG);
      return (0, oG.jsxs)("div", {
        className: UG()("ControlsSection", {
          Collapsed: !LG
        }),
        children: [(0, oG.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            yG(!LG)
          },
          children: [(0, oG.jsx)("div", {
            className: "ControlsSectionTitle",
            children: bG
          }), (0, oG.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), LG && (0, oG.jsx)("div", {
          className: "ControlsSectionRows",
          children: wG
        })]
      })
    }

    function TZ(GG) {
      let {
        noaAction: bG,
        forceUpdate: ZG,
        clashesWith: kG,
        showPadGlyph: VG
      } = GG;
      const {
        t: pG
      } = (0, wG.w)(), fG = (0, JG.c)(bG), [QG, KG] = (0, SG.useState)(!1), [hG, rG] = (0, SG.useState)("controls:clickToEnterNewBinding"), [zG, EG] = (0, SG.useState)(null), [XG, uG] = (0, SG.useState)(null), iG = (0, SG.useRef)(null);
      (0, SG.useEffect)((() => {
        QG && iG.current && iG.current.focus()
      }), [QG]);
      const CG = LG.B[bG].filter((GG => yG.i[GG]));
      let WG = null;
      const mG = [],
        IG = kG.flatMap((GG => {
          var bG, ZG;
          return null !== (bG = null === (ZG = LG.i.find((bG => bG.id === GG))) || void 0 === ZG ? void 0 : ZG.actions) && void 0 !== bG ? bG : []
        }));
      for (const wG of IG) {
        if (wG === bG) continue;
        const GG = LG.B[wG];
        for (const bG of GG) CG.includes(bG) && mG.push(pG(LG.E[wG].translationKey, LG.E[wG].params))
      }
      mG.length > 0 && (WG = pG("controls:sharedBindingsWarning") + " ", WG += mG.join(", "));
      const FG = () => {
          KG(!1), EG(null), rG("controls:clickToEnterNewBinding"), uG(null)
        },
        vG = () => "BindingInput_" + bG;
      return (0, oG.jsxs)("div", {
        className: UG()("ControlRow", {
          WarningBorder: null !== WG
        }),
        children: [(0, oG.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, oG.jsxs)("div", {
            className: "ControlName",
            children: [pG(LG.E[bG].translationKey, LG.E[bG].params), VG && fG && (0, oG.jsx)(dG.b, {
              glyph: fG,
              className: "ControlPadGlyph"
            })]
          }), (0, oG.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, oG.jsxs)("div", {
              className: "ControlBindingsList",
              children: [CG.map((GG => (0, oG.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, oG.jsx)("div", {
                  children: (0, LG.t)(GG)
                }), (0, oG.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const wG = (0, LG.F)(bG, GG);
                    wG.isError() ? uG(wG.asError().message) : uG(null), ZG()
                  },
                  children: "\xd7"
                })]
              }, GG))), !QG && (0, oG.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  KG(!0), uG(null)
                },
                children: (0, oG.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), QG && (0, oG.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, oG.jsxs)("div", {
                className: "InputContainer",
                children: [(0, oG.jsx)("div", {
                  className: "InputOverlay",
                  children: zG ? (0, LG.t)(zG) : (0, oG.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: pG(hG)
                  })
                }), (0, oG.jsx)("input", {
                  ref: iG,
                  id: vG(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: GG => {
                    if ("Escape" === GG.code) return FG(), GG.preventDefault(), void GG.stopPropagation();
                    const bG = GG.code;
                    yG.d.includes(bG) ? (uG(null), EG(bG)) : (uG("controls:keyIsReserved"), EG(null)), GG.preventDefault(), GG.stopPropagation()
                  },
                  onMouseDown: GG => {
                    const bG = "Mouse" + (GG.button + 1);
                    document.activeElement && document.activeElement.id === vG() ? yG.d.includes(bG) ? (uG(null), EG(bG)) : (uG("controls:keyIsReserved"), EG(null)) : rG("controls:enterNewBinding"), GG.stopPropagation()
                  },
                  onBlur: () => {
                    rG("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, oG.jsx)(YG.d, {
                onPointerDown: GG => {
                  GG.preventDefault()
                },
                onClick: () => {
                  (0, LG.e)(bG, zG), ZG(), FG()
                },
                className: "ControlBindingAddButton",
                disabled: null === zG,
                children: pG("general:add")
              }), (0, oG.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  FG()
                },
                children: "\xd7"
              })]
            }), XG && (0, oG.jsx)("div", {
              className: "ControlBindingError",
              children: pG(XG)
            })]
          })]
        }), WG && (0, oG.jsx)("div", {
          className: "ControlRowWarning",
          children: WG
        })]
      })
    }
  },
  8933: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(51),
      SG = ZG(1016),
      LG = ZG(1067);
    const yG = (0, wG.forwardRef)((function(GG, bG) {
      let {
        icon: ZG,
        title: wG,
        sub: yG,
        expanded: kG,
        onClick: UG
      } = GG;
      return (0, LG.jsxs)("button", {
        ref: bG,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": kG,
        onClick: UG,
        children: [(0, LG.jsx)(SG.c, {
          name: ZG,
          className: "FeaturedSettingsEntryIcon"
        }), (0, LG.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, LG.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: wG
          }), (0, LG.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: yG
          })]
        }), (0, LG.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  8723: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => JG,
      d: () => dG,
      e: () => VG,
      i: () => rG,
      j: () => zG,
      n: () => fG
    });
    var wG = ZG(1606),
      SG = ZG(1709);
    const LG = GG => GG >= 56320 && GG <= 57343,
      yG = GG => GG >= 55296 && GG <= 56319,
      kG = (GG, bG) => bG >= 2 && LG(GG.charCodeAt(bG - 1)) && yG(GG.charCodeAt(bG - 2)) ? bG - 2 : Math.max(0, bG - 1),
      UG = (GG, bG) => {
        let ZG;
        var wG, SG;
        return ZG = GG.start !== GG.end ? bG < 0 ? GG.start : GG.end : bG < 0 ? kG(GG.value, GG.start) : (wG = GG.value, (SG = GG.start) + 1 < wG.length && yG(wG.charCodeAt(SG)) && LG(wG.charCodeAt(SG + 1)) ? SG + 2 : Math.min(wG.length, SG + 1)), {
          value: GG.value,
          start: ZG,
          end: ZG
        }
      },
      YG = ["text", "search", "url", "email", "tel", "password", "number"],
      VG = GG => !(!(0, SG.d)(GG) || GG.isContentEditable || GG.hasAttribute("data-pad-no-osk")) && (GG instanceof HTMLTextAreaElement || GG instanceof HTMLInputElement && YG.includes(GG.type)),
      pG = GG => null !== GG.selectionStart,
      fG = GG => {
        var bG, ZG;
        const {
          value: wG
        } = GG;
        return {
          value: wG,
          start: null !== (bG = GG.selectionStart) && void 0 !== bG ? bG : wG.length,
          end: null !== (ZG = GG.selectionEnd) && void 0 !== ZG ? ZG : wG.length
        }
      },
      QG = (GG, bG, ZG) => {
        if (GG.readOnly) return;
        const SG = GG instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(SG, "value").set.call(GG, bG.value), pG(GG) && GG.setSelectionRange(bG.start, bG.end), (0, wG.g)(GG, new InputEvent("input", {
          bubbles: !0,
          inputType: ZG
        }))
      };
    let KG = !1;
    const hG = (GG, bG) => !!document.execCommand(GG, !1, bG) || (KG || (KG = !0, console.warn(`execCommand("${GG}") failed; the on-screen keyboard is setting the value directly`)), !1),
      dG = (GG, bG) => {
        hG("insertText", bG) || QG(GG, function(GG, bG) {
          let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const wG = GG.value.slice(0, GG.start),
            SG = GG.value.slice(GG.end);
          let LG = ZG < 0 ? bG.length : Math.max(0, ZG - wG.length - SG.length);
          LG > 0 && LG < bG.length && yG(bG.charCodeAt(LG - 1)) && LG--;
          const kG = bG.slice(0, LG),
            UG = wG.length + kG.length;
          return {
            value: wG + kG + SG,
            start: UG,
            end: UG
          }
        }(fG(GG), bG, GG.maxLength), "insertText")
      },
      JG = GG => {
        hG("delete") || QG(GG, (GG => {
          const bG = GG.start === GG.end ? kG(GG.value, GG.start) : GG.start;
          return {
            value: GG.value.slice(0, bG) + GG.value.slice(GG.end),
            start: bG,
            end: bG
          }
        })(fG(GG)), "deleteContentBackward")
      },
      rG = (GG, bG) => {
        if (!pG(GG)) return;
        const ZG = UG(fG(GG), bG);
        GG.setSelectionRange(ZG.start, ZG.end)
      },
      zG = GG => {
        pG(GG) && 0 === GG.selectionStart && 0 === GG.selectionEnd && GG.setSelectionRange(GG.value.length, GG.value.length)
      }
  },
  8878: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG
    });
    var wG = ZG(17),
      SG = ZG(2126),
      LG = ZG(1311),
      yG = ZG(1343);
    const kG = async () => {
      if ((0, yG.k)()) {
        if (!0 !== await LG.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== wG.e.get("gameState")) return
      }(0, SG.i)()
    }
  },
  8882: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG,
      h: () => LG,
      j: () => yG,
      m: () => SG,
      n: () => kG
    });
    var wG = ZG(1931);
    const SG = "controllerPadShopOpen",
      LG = GG => wG.g.includes(GG),
      yG = GG => Object.values(GG).some((GG => !1 !== GG.canBuy && !GG.isRewardedAd)),
      kG = (GG, bG, ZG) => {
        var wG, SG, yG, kG;
        const UG = GG.filter((GG => !LG(GG))),
          YG = null !== bG && GG.includes(bG) ? bG : null;
        return null !== YG && !LG(YG) && ZG(YG) ? YG : null !== (wG = null !== (SG = null !== (yG = null !== (kG = UG.find(ZG)) && void 0 !== kG ? kG : UG[0]) && void 0 !== yG ? yG : YG) && void 0 !== SG ? SG : GG[0]) && void 0 !== wG ? wG : null
      },
      UG = GG => GG.userInput || GG.isRewardedAd || "boolean" === typeof GG.isSelected ? null : JSON.stringify([GG.image, GG.cost, GG.currency, GG.amount, GG.customTitle, GG.buyButtonText, GG.description, GG.canBuy])
  },
  8909: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG,
      g: () => VG
    });
    var wG = ZG(51),
      SG = ZG(1389),
      LG = ZG(1993),
      yG = ZG(1359),
      kG = ZG(1380),
      UG = ZG(1067);
    const YG = () => {
        const GG = (0, yG.r)();
        if ((0, wG.useEffect)((() => {
            (0, yG.k)()
          }), []), !GG) return null;
        const {
          ControllerCategory: bG
        } = GG;
        return (0, UG.jsx)(kG.c, {
          children: (0, UG.jsx)(bG, {})
        })
      },
      VG = () => {
        var GG;
        const bG = (0, yG.r)(),
          [, ZG] = (0, wG.useReducer)((GG => GG + 1), 0);
        return (0, SG.g)(LG.b, ZG), null !== (GG = null === bG || void 0 === bG ? void 0 : bG.hasActivePad()) && void 0 !== GG && GG
      }
  },
  8726: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG,
      d: () => YG,
      f: () => hG,
      j: () => pG,
      k: () => KG,
      n: () => LG,
      p: () => QG,
      s: () => yG,
      u: () => fG
    });
    const wG = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      SG = (GG, bG) => {
        if ("function" === typeof GG.checkVisibility) return !GG.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: bG,
          checkOpacity: bG
        });
        const {
          visibility: ZG
        } = getComputedStyle(GG);
        if ("hidden" === ZG || "collapse" === ZG) return !0;
        if (!bG) return !1;
        for (let wG = GG; wG; wG = wG.parentElement)
          if ("0" === getComputedStyle(wG).opacity) return !0;
        return !1
      },
      LG = GG => {
        if (!GG.isConnected || SG(GG, !0)) return !1;
        const bG = GG.getBoundingClientRect();
        return bG.width > 0 && bG.height > 0
      },
      yG = GG => !!GG.matches(":disabled, [aria-disabled='true']") || "button" === GG.getAttribute("role") && "-1" === GG.getAttribute("tabindex"),
      kG = GG => {
        var bG;
        if (GG.closest("[data-pad-ignore]")) return !0;
        return !!(null === (bG = GG.parentElement) || void 0 === bG ? void 0 : bG.closest("[data-pad-focusable]"))
      },
      UG = GG => {
        const bG = GG.querySelectorAll(wG);
        return GG.matches(wG) ? [GG, ...bG] : bG
      },
      YG = GG => {
        const bG = [];
        for (const ZG of UG(GG)) !kG(ZG) && LG(ZG) && bG.push(ZG);
        return bG
      },
      VG = new WeakMap,
      pG = GG => {
        const bG = VG.get(GG);
        if (bG && fG(bG, GG)) return !0;
        for (const ZG of UG(GG))
          if (!kG(ZG) && LG(ZG)) return VG.set(GG, ZG), !0;
        return VG.delete(GG), !1
      },
      fG = (GG, bG) => bG.contains(GG) && GG.matches(wG) && !kG(GG) && LG(GG),
      QG = (GG, bG) => fG(GG, bG) && !yG(GG),
      KG = GG => {
        for (const bG of GG.querySelectorAll("[data-pad-initial-area]"))
          if (!SG(bG, !1)) return !0;
        return !1
      },
      hG = GG => {
        const bG = bG => {
          let ZG = 0;
          for (let wG = bG.parentElement; wG && wG !== GG; wG = wG.parentElement) ZG++;
          return ZG
        };
        return [...GG.querySelectorAll("[data-pad-initial-area]")].filter(LG).sort(((GG, ZG) => bG(ZG) - bG(GG)))
      }
  },
  8715: (GG, bG, ZG) => {
    ZG.d(bG, {
      C: () => XG,
      G: () => uG,
      J: () => dG,
      L: () => UG,
      N: () => VG,
      e: () => JG,
      f: () => CG,
      i: () => oG,
      m: () => EG,
      n: () => KG,
      o: () => hG,
      q: () => fG,
      r: () => QG,
      u: () => iG,
      y: () => YG,
      z: () => WG
    });
    var wG = ZG(19),
      SG = ZG(1606),
      LG = ZG(8719),
      yG = ZG(8723),
      kG = ZG(8726);
    const UG = GG => (0, yG.e)(GG),
      YG = GG => {
        const bG = GG.getBoundingClientRect();
        return {
          x: bG.left + bG.width / 2,
          y: bG.top + bG.height / 2
        }
      },
      VG = (GG, bG, ZG) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: GG.x,
        clientY: GG.y,
        screenX: GG.x,
        screenY: GG.y,
        button: bG,
        buttons: ZG,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      pG = (GG, bG) => {
        (0, SG.g)(GG, bG)
      },
      fG = function(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const wG = 0 === ZG ? 1 : 2;
        pG(GG, new PointerEvent("pointerdown", VG(bG, ZG, wG))), pG(GG, new MouseEvent("mousedown", VG(bG, ZG, wG)))
      },
      QG = function(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        pG(GG, new PointerEvent("pointerup", VG(bG, ZG, 0))), pG(GG, new MouseEvent("mouseup", VG(bG, ZG, 0)))
      },
      KG = function(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        fG(GG, bG, ZG), QG(GG, bG, ZG), pG(GG, 0 === ZG ? new MouseEvent("click", VG(bG, 0, 0)) : new MouseEvent("contextmenu", VG(bG, 2, 0)))
      },
      hG = function(GG, bG, ZG) {
        let {
          leaveBelow: wG = null,
          enterBelow: SG = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (GG !== bG) {
          if (null !== GG && void 0 !== GG && GG.isConnected) {
            const SG = {
              ...VG(ZG, 0, 0),
              relatedTarget: bG
            };
            pG(GG, new PointerEvent("pointerout", SG)), pG(GG, new MouseEvent("mouseout", SG));
            const LG = GG => !!bG && GG.contains(bG) || !!wG && GG.contains(wG);
            for (let bG = GG; bG && !LG(bG); bG = bG.parentElement) pG(bG, new PointerEvent("pointerleave", {
              ...SG,
              bubbles: !1
            })), pG(bG, new MouseEvent("mouseleave", {
              ...SG,
              bubbles: !1
            }))
          }
          if (bG) {
            const wG = {
              ...VG(ZG, 0, 0),
              relatedTarget: GG
            };
            pG(bG, new PointerEvent("pointerover", wG)), pG(bG, new MouseEvent("mouseover", wG));
            const LG = [],
              yG = bG => !(null === GG || void 0 === GG || !GG.isConnected) && bG.contains(GG) || !!SG && bG.contains(SG);
            for (let GG = bG; GG && !yG(GG); GG = GG.parentElement) LG.push(GG);
            for (const GG of LG.reverse()) pG(GG, new PointerEvent("pointerenter", {
              ...wG,
              bubbles: !1
            })), pG(GG, new MouseEvent("mouseenter", {
              ...wG,
              bubbles: !1
            }));
            pG(bG, new PointerEvent("pointermove", VG(ZG, 0, 0))), pG(bG, new MouseEvent("mousemove", VG(ZG, 0, 0)))
          }
        } else bG && (pG(bG, new PointerEvent("pointermove", VG(ZG, 0, 0))), pG(bG, new MouseEvent("mousemove", VG(ZG, 0, 0))))
      },
      dG = GG => {
        wG.l.xh(LG.c, GG)
      },
      JG = GG => {
        if (UG(GG)) return void dG(GG);
        const bG = GG.hasAttribute("data-pad-focusable") ? GG.querySelector("a[href]") : null,
          ZG = null !== bG && void 0 !== bG ? bG : GG;
        KG(ZG, YG(ZG))
      },
      rG = ".Dropdown-root.is-open",
      zG = GG => {
        const bG = GG.querySelector(".Dropdown-control");
        return JG(bG), bG
      },
      EG = GG => {
        var bG;
        const ZG = null !== (bG = GG.closest(rG)) && void 0 !== bG ? bG : GG.querySelector(rG);
        return ZG ? zG(ZG) : null
      },
      oG = GG => {
        for (const bG of document.querySelectorAll(rG)) bG.contains(GG) || zG(bG)
      },
      XG = GG => null !== GG.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      uG = GG => {
        const bG = GG ? document.elementFromPoint(GG.x, GG.y) : null;
        return !(null === bG || void 0 === bG || !bG.closest("[data-pad-repeat]"))
      },
      iG = GG => {
        var bG;
        return null !== (bG = [...GG.querySelectorAll("[data-pad-back]")].find(kG.n)) && void 0 !== bG ? bG : null
      },
      CG = GG => {
        const bG = iG(GG);
        return !!bG && (JG(bG), !0)
      },
      WG = GG => {
        var bG, ZG, wG, SG;
        return null !== (bG = null !== (ZG = null !== (wG = GG.getAttribute("data-pad-key")) && void 0 !== wG ? wG : GG.getAttribute("href")) && void 0 !== ZG ? ZG : null === (SG = GG.querySelector("a[href]")) || void 0 === SG ? void 0 : SG.getAttribute("href")) && void 0 !== bG ? bG : null
      }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);