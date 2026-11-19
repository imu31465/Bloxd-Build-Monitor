export const id = 152;
export const ids = [152];
export const modules = {
  8280: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY
    });
    var FY = DY(19),
      AY = DY(1211),
      IY = DY(4580),
      RY = DY(1125);

    function OY(YY) {
      let {
        note: rY
      } = YY;
      const {
        t: DY
      } = (0, AY.C)(), {
        clientEscMenuOptions: OY
      } = (0, FY.j)(["clientEscMenuOptions"]);
      return (0, RY.jsx)(IY.c, {
        label: DY("touchSettings:actionButtons"),
        checked: OY.touchActionButtons,
        onClick: YY => {
          FY.b.setClientEscMenuOptions({
            touchActionButtons: YY
          })
        },
        circleInfoText: DY("touchSettings:actionButtonsInfo"),
        note: rY
      })
    }
  },
  8269: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => jD,
      f: () => fD
    });
    var FY = DY(1211),
      AY = DY(61),
      IY = DY(1851),
      RY = DY(1861),
      OY = DY(1092),
      gY = DY.n(OY),
      aY = DY(1437),
      vY = DY(19),
      uY = DY(99),
      sY = DY(117),
      iY = DY(4580),
      yY = DY(2282),
      QY = DY(309),
      oY = DY(1863),
      WY = DY(1868),
      EY = DY(8273),
      mY = DY(8280),
      VY = DY(332),
      SY = DY(1125);
    const lY = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var TY = DY(8287);
    var eY = DY(1450),
      NY = DY(1346),
      BY = DY(1392),
      cY = DY(1098),
      KY = DY(3944);
    const HY = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        perspective: "menu"
      },
      zY = YY => KY.u.filter((rY => HY[rY] === YY)),
      ZY = new Set(zY("cluster")),
      CY = ["cluster"],
      fY = [...CY, ...KY.u.filter((YY => !CY.includes(YY) && !HY[YY]))],
      jY = fY.flatMap((YY => [YY, ...zY(YY)])).map((YY => ({
        id: YY,
        label: `hudLayout:${YY}`,
        ...KY.q[YY],
        parent: HY[YY]
      }))),
      hY = Object.fromEntries(jY.map((YY => [YY.id, YY])));

    function dY(YY, rY) {
      var DY, FY;
      return "perspective" === YY && 0 === (null !== (DY = null === rY || void 0 === rY ? void 0 : rY[0]) && void 0 !== DY ? DY : 0) && 0 === (null !== (FY = null === rY || void 0 === rY ? void 0 : rY[1]) && void 0 !== FY ? FY : 0)
    }
    const JY = "data-hud-el";

    function MY(YY, rY, DY, FY) {
      const AY = DY(function(YY, rY) {
          return "attack" !== YY || rY ? hY[YY].label : "hudLayout:attackContext"
        }(YY, rY)),
        IY = FY[YY];
      return IY ? DY("hudLayout:slotWithKey", {
        slot: AY,
        key: IY
      }) : AY
    }

    function wY(YY, rY, DY, FY) {
      return YY.map((YY => MY(YY, rY, DY, FY))).join(", ")
    }

    function bY(YY) {
      let {
        className: rY,
        keepPlace: DY
      } = YY;
      return DY ? (0, SY.jsx)("div", {
        className: gY()(rY, "Placeholder")
      }) : null
    }

    function XY(YY) {
      var rY;
      let {
        id: DY,
        elements: AY,
        actionButtons: IY,
        keyNames: RY,
        className: OY,
        keepPlace: gY,
        onHidden: vY
      } = YY;
      const {
        t: uY
      } = (0, FY.C)();
      if (!hY[DY].hide) return (0, SY.jsx)(bY, {
        className: OY,
        keepPlace: gY
      });
      const sY = 1 === (null !== (rY = AY[DY]) && void 0 !== rY ? rY : KY.l)[3];
      return (0, SY.jsx)(aY.J, {
        className: OY,
        ariaLabel: uY(sY ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: MY(DY, IY, uY, RY)
        }),
        pressed: !sY,
        onClick: () => {
          vY(DY, !sY)
        },
        children: (0, SY.jsx)(cY.e, {
          name: sY ? "eye-slash" : "eye"
        })
      })
    }

    function qY(YY) {
      var rY;
      let {
        id: DY,
        elements: AY,
        actionButtons: IY,
        keyNames: RY,
        className: OY,
        keepPlace: gY,
        onlyWhenMoved: vY,
        locked: uY,
        onReset: sY
      } = YY;
      const {
        t: iY
      } = (0, FY.C)(), yY = hY[DY], QY = (0, KY.G)(null !== (rY = AY[DY]) && void 0 !== rY ? rY : KY.l);
      return !yY.move && !yY.scale || vY && QY ? (0, SY.jsx)(bY, {
        className: OY,
        keepPlace: gY
      }) : (0, SY.jsx)(aY.J, {
        className: OY,
        disabled: QY || uY,
        ariaLabel: iY("hudLayout:resetElement", {
          name: MY(DY, IY, iY, RY)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: DY
        },
        onClick: YY => {
          vY && GY(YY.currentTarget), sY(DY)
        },
        children: (0, SY.jsx)(cY.e, {
          name: "rotate-left"
        })
      })
    }

    function pY(YY) {
      let {
        id: rY,
        actionButtons: DY,
        keyNames: AY,
        className: IY,
        keepPlace: RY,
        locked: OY,
        lockable: gY,
        onLocked: vY
      } = YY;
      const {
        t: uY
      } = (0, FY.C)();
      return gY || OY ? (0, SY.jsx)(aY.J, {
        className: IY,
        ariaLabel: uY(OY ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: MY(rY, DY, uY, AY)
        }),
        pressed: OY,
        active: OY,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${OY?"unlock":"lock"}:${rY}`
        },
        onClick: () => {
          vY(rY, !OY)
        },
        children: (0, SY.jsx)(cY.e, {
          name: OY ? "lock" : "lock-open"
        })
      }) : (0, SY.jsx)(bY, {
        className: IY,
        keepPlace: RY
      })
    }

    function kY(YY, rY) {
      var DY;
      YY.contains(document.activeElement) && rY.focus({
        preventScroll: !0
      }), null === (DY = (0, BY.g)()) || void 0 === DY || DY.handOverPadFocus(YY, rY)
    }

    function GY(YY) {
      const rY = YY.closest("[data-hud-row]"),
        DY = null === rY || void 0 === rY ? void 0 : rY.querySelector(".HudElementRowName");
      return !(!rY || !DY) && (kY(rY, DY), !0)
    }
    const xY = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function nY(YY, rY) {
      return "joystick" === YY && !rY
    }

    function PY() {
      const {
        t: YY
      } = (0, FY.C)();
      return (0, SY.jsx)(aY.J, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: YY => {
          const rY = YY.currentTarget;
          if (!GY(rY)) {
            const YY = function(YY) {
              var rY, DY;
              const FY = [YY.previousElementSibling, YY.nextElementSibling].find((YY => YY instanceof HTMLElement && YY.matches(xY)));
              return null !== (rY = null !== FY && void 0 !== FY ? FY : null === (DY = YY.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === DY ? void 0 : DY.querySelector(`:is(${xY}):not(.HudFixJoystickButton)`)) && void 0 !== rY ? rY : null
            }(rY);
            YY && kY(rY, YY)
          }
          vY.b.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: YY("hudLayout:fixJoystick")
      })
    }
    var UY = DY(76),
      LY = DY(1284),
      tY = DY(1143),
      Yr = DY(2486);

    function rr(YY) {
      return {
        x: (YY.left + YY.right) / 2,
        y: (YY.top + YY.bottom) / 2
      }
    }

    function Dr(YY) {
      return 0 === YY.length ? null : YY.reduce(((YY, rY) => ({
        left: Math.min(YY.left, rY.left),
        top: Math.min(YY.top, rY.top),
        right: Math.max(YY.right, rY.right),
        bottom: Math.max(YY.bottom, rY.bottom)
      })))
    }

    function Fr(YY, rY) {
      const DY = Math.max(0, (rY - (YY.right - YY.left)) / 2),
        FY = Math.max(0, (rY - (YY.bottom - YY.top)) / 2);
      return {
        left: YY.left - DY,
        top: YY.top - FY,
        right: YY.right + DY,
        bottom: YY.bottom + FY
      }
    }

    function Ar(YY, rY, DY) {
      const FY = rY => YY.x >= rY.left && YY.x <= rY.right && YY.y >= rY.top && YY.y <= rY.bottom;
      let AY = null,
        IY = 1 / 0;
      for (const {
          id: OY,
          box: gY
        }
        of rY) {
        const YY = (gY.right - gY.left) * (gY.bottom - gY.top);
        FY(gY) && YY < IY && (IY = YY, AY = OY)
      }
      if (null !== AY) return AY;
      let RY = 1 / 0;
      for (const {
          id: OY,
          box: gY
        }
        of rY) {
        if (!FY(Fr(gY, DY))) continue;
        const rY = rr(gY),
          IY = Math.hypot(YY.x - rY.x, YY.y - rY.y);
        IY < RY && (RY = IY, AY = OY)
      }
      return AY
    }

    function Ir(YY, rY, DY) {
      return {
        left: DY.left,
        top: DY.top,
        right: YY - DY.right,
        bottom: rY - DY.bottom
      }
    }

    function Rr(YY, rY, DY, FY) {
      const AY = (YY, rY, DY) => Math.max(Math.min(rY, 0), Math.min(Math.max(DY, 0), YY));
      return {
        x: AY(rY, FY.left - YY.left, FY.right - YY.right),
        y: AY(DY, FY.top - YY.top, FY.bottom - YY.bottom)
      }
    }

    function Or(YY, rY, DY, FY) {
      return rY <= 0 || DY <= 0 ? 1 : Math.max(.05, Math.min(1, YY / rY, FY / DY))
    }

    function gr(YY, rY, DY) {
      return Math.min(YY.right, rY.right) - Math.max(YY.left, rY.left) > DY && Math.min(YY.bottom, rY.bottom) - Math.max(YY.top, rY.top) > DY
    }

    function ar(YY, rY) {
      const DY = (YY, rY, DY, FY) => rY - YY > FY - DY ? DY - YY > rY - FY ? FY - rY : DY - YY : YY < DY ? DY - YY : rY > FY ? FY - rY : 0;
      return {
        x: DY(YY.left, YY.right, rY.left, rY.right),
        y: DY(YY.top, YY.bottom, rY.top, rY.bottom)
      }
    }

    function vr(YY, rY) {
      let {
        avoid: DY = null,
        bounds: FY = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, AY = 0, IY = 1 / 0;
      return YY.forEach(((YY, RY) => {
        const OY = rY.filter((rY => gr(YY, rY, 0))).length,
          gY = null !== FY && (YY.left < FY.left || YY.top < FY.top || YY.right > FY.right || YY.bottom > FY.bottom),
          aY = OY + (DY && gr(YY, DY, 0) ? 1e3 : 0) + (gY ? 1e6 : 0);
        aY < IY && (AY = RY, IY = aY)
      })), AY
    }
    var ur = DY(3955),
      sr = DY(2743);
    const ir = ["J", "C", "A", "P", "U", "X", "G"];

    function yr(YY, rY) {
      YY.replaceChildren(...[...rY.childNodes].map((YY => YY.cloneNode(!0))))
    }
    const Qr = YY => ({
      [JY]: YY
    });

    function or(YY) {
      let {
        id: rY,
        slot: DY,
        icon: FY,
        label: IY,
        hidden: RY,
        className: OY,
        face: aY
      } = YY;
      const vY = (0, AY.useRef)(null);
      return (0, AY.useLayoutEffect)((() => {
        aY && vY.current && yr(vY.current, aY)
      }), [aY]), (0, SY.jsxs)("div", {
        className: gY()("TouchKeyHit", `TouchSlot${DY}`, OY, {
          HudPreviewGhost: RY.has(rY)
        }),
        ...Qr(rY),
        children: [aY && (0, SY.jsx)("div", {
          ref: vY,
          className: gY()("TouchKey", {
            Labelled: aY.classList.contains("Labelled")
          })
        }), !aY && (0, SY.jsxs)("div", {
          className: gY()("TouchKey", {
            Labelled: void 0 !== IY
          }),
          children: [FY && (0, SY.jsx)(cY.e, {
            name: FY
          }), void 0 !== IY && (0, SY.jsx)("span", {
            className: "TouchKeyLabel",
            children: IY
          })]
        })]
      })
    }

    function Wr(YY) {
      let {
        item: rY,
        selected: DY
      } = YY;
      const FY = (0, AY.useRef)(null);
      return (0, AY.useLayoutEffect)((() => {
        FY.current && yr(FY.current, rY)
      }), [rY]), (0, SY.jsx)("div", {
        ref: FY,
        className: gY()("InvenItem", {
          Selected: DY
        })
      })
    }

    function Er(YY) {
      let {
        id: rY,
        icon: DY,
        className: FY,
        hidden: AY
      } = YY;
      return (0, SY.jsx)("div", {
        className: gY()("TopRightIcon", FY, {
          HudPreviewGhost: rY && (null === AY || void 0 === AY ? void 0 : AY.has(rY))
        }),
        children: (0, SY.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...rY ? Qr(rY) : {},
          children: (0, SY.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, SY.jsx)(cY.e, {
              name: DY
            })
          })
        })
      })
    }

    function mr(YY) {
      let {
        next: rY,
        hidden: DY
      } = YY;
      return (0, SY.jsx)("div", {
        className: gY()("HotBarArrow", rY ? "Next" : "Previous", {
          HudPreviewGhost: DY
        }),
        ...Qr("arrows"),
        children: (0, SY.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, SY.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, SY.jsx)(cY.e, {
              name: rY ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function Vr() {
      return (0, SY.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, SY.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, SY.jsx)("div", {
            className: "SocialBar",
            children: (0, SY.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, SY.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, SY.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, SY.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, SY.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, SY.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, SY.jsx)(cY.e, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, SY.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, SY.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, SY.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, SY.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, SY.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, SY.jsx)(cY.e, {
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
    const Sr = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      lr = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Tr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      er = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function Nr(YY) {
      let {
        presence: rY,
        portraitPhone: DY,
        hidden: AY,
        actionButtons: IY,
        joystickFixed: RY,
        keysAbove: OY,
        auraBar: aY
      } = YY;
      const {
        t: vY
      } = (0, FY.C)(), sY = YY => ({
        HudPreviewGhost: AY.has(YY)
      });
      return (0, SY.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, SY.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, SY.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, SY.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, SY.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, SY.jsx)("div", {
              className: "InGameHeaderGameName",
              children: vY("hudLayout:previewGameName")
            })]
          })
        }), (0, SY.jsx)("div", {
          className: "TopLeftElements",
          children: (0, SY.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, SY.jsxs)("div", {
              className: "Chat",
              children: [(0, SY.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [vY("hudLayout:previewChatLine"), vY("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), vY("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((YY => (0, SY.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, SY.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, SY.jsx)("div", {
                      className: "IndividualText",
                      children: YY
                    })
                  })
                }, YY)))
              }), (0, SY.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: gY()("ChatIconWrapper SmallTextLight", sY("chat")),
                ...Qr("chat"),
                children: (0, SY.jsx)(cY.e, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, SY.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, SY.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, SY.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, SY.jsx)("div", {
                className: "TopRightIconsContainer",
                ...Qr("menu"),
                children: (0, SY.jsxs)("div", {
                  className: gY()("TopRightIcons TouchInGame", {
                    Column: DY
                  }),
                  children: [(0, SY.jsx)(Er, {
                    icon: "gear"
                  }), DY && (0, SY.jsx)(Er, {
                    icon: "ellipsis",
                    className: "TopRightTrayToggle"
                  }), !DY && (0, SY.jsxs)(SY.Fragment, {
                    children: [(0, SY.jsx)(Er, {
                      icon: "user-plus"
                    }), (0, SY.jsx)(Er, {
                      icon: "shirt"
                    }), (0, SY.jsx)(Er, {
                      icon: "list"
                    })]
                  }), (0, SY.jsx)(Er, {
                    id: "perspective",
                    icon: "video",
                    className: "TopRightCameraIcon",
                    hidden: AY
                  }), (0, SY.jsx)(Er, {
                    icon: "face-smile"
                  })]
                })
              })
            }), uY.featureFlags.useSocialFeatures && (0, SY.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, SY.jsx)(Vr, {})
            })]
          })
        }), (0, SY.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, SY.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, SY.jsxs)("div", {
            className: "TouchInteractKey",
            ...Qr("interact"),
            children: [(0, SY.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, SY.jsx)(cY.e, {
                name: "hand-back-point-up"
              })
            }), (0, SY.jsx)("div", {
              children: vY("hudLayout:previewInteract")
            })]
          })
        }), (0, SY.jsx)("div", {
          className: "BottomCentre",
          children: (0, SY.jsxs)("div", {
            className: "BottomElements",
            children: [(0, SY.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, SY.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, SY.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...Qr("hotbar"),
                children: (0, SY.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, SY.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, SY.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, SY.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, SY.jsx)(cY.e, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), aY && (0, SY.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, SY.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, SY.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, sr.g)("glint"),
                    alt: ""
                  }), (0, SY.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, SY.jsx)("div", {
                  className: "AuraBar",
                  children: (0, SY.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, SY.jsx)("div", {
                className: "HotBarRow",
                children: (0, SY.jsx)("div", {
                  className: gY()("HotBarContainer Touch", {
                    KeysAbove: OY
                  }),
                  children: (0, SY.jsxs)("div", {
                    className: "HotBar",
                    ...Qr("hotbar"),
                    children: [(0, SY.jsxs)("div", {
                      className: gY()("TouchInventoryKeys", {
                        NoAuraBar: !aY
                      }),
                      children: [(0, SY.jsx)("div", {
                        className: gY()("TouchInventoryKey ShopKey", sY("inventory"), {
                          Hidden: null !== rY && !rY.shop
                        }),
                        ...Qr("inventory"),
                        children: (0, SY.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, SY.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, SY.jsx)(cY.e, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, SY.jsx)("div", {
                        className: gY()("TouchInventoryKey BagKey", sY("inventory"), {
                          Hidden: null !== rY && !rY.bag
                        }),
                        ...Qr("inventory"),
                        children: (0, SY.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, SY.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, SY.jsx)(cY.e, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, SY.jsx)(mr, {
                      next: !1,
                      hidden: AY.has("arrows")
                    }), (0, SY.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== rY && rY.items.map(((YY, rY) => (0, SY.jsx)(Wr, {
                        item: YY,
                        selected: YY.classList.contains("Selected")
                      }, rY))), null === rY && Tr.map((YY => {
                        const rY = er[YY];
                        return (0, SY.jsx)("div", {
                          className: gY()("InvenItem", {
                            Selected: 0 === YY
                          }),
                          children: rY && (0, SY.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, SY.jsx)(cY.e, {
                              name: rY
                            })
                          })
                        }, YY)
                      }))]
                    }), (0, SY.jsx)(mr, {
                      next: !0,
                      hidden: AY.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, SY.jsx)("div", {
              className: "BottomRightElements",
              children: (0, SY.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== rY && ir.map((YY => {
                  const DY = rY.faces[YY];
                  return DY && (0, SY.jsx)(or, {
                    id: Sr[YY],
                    slot: YY,
                    face: DY,
                    className: lr[YY],
                    hidden: AY
                  }, YY)
                })), null === rY && (0, SY.jsxs)(SY.Fragment, {
                  children: [(0, SY.jsx)(or, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: AY
                  }), (0, SY.jsx)(or, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: AY
                  }), IY && (0, SY.jsxs)(SY.Fragment, {
                    children: [(0, SY.jsx)(or, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: AY
                    }), (0, SY.jsx)(or, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: AY
                    })]
                  }), !IY && (0, SY.jsx)(or, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: vY("touchKeys:scope"),
                    hidden: AY
                  }), (0, SY.jsx)(or, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: vY("touchKeys:fly"),
                    hidden: AY
                  }), (0, SY.jsx)(or, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: AY
                  })]
                })]
              })
            })]
          })
        }), (0, SY.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, SY.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, SY.jsxs)("div", {
              className: gY()("Joystick Resting HudPreviewJoystick", {
                Floating: !RY
              }),
              ...Qr("joystick"),
              children: [(0, SY.jsx)("div", {
                className: "JoystickBase"
              }), (0, SY.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function Br() {
      const [YY, rY] = (0, AY.useState)({}), DY = (0, AY.useCallback)((YY => {
        rY((rY => [...new Set([...Object.keys(rY), ...Object.keys(YY)])].every((DY => rY[DY] === YY[DY])) ? rY : YY))
      }), []);
      return [YY, DY]
    }
    const cr = .05;

    function Kr(YY) {
      var rY;
      let {
        selected: DY,
        layout: AY,
        actionButtons: IY,
        keyNames: RY,
        overlaps: OY,
        scaleCaps: vY,
        joystickFixed: uY,
        onScale: sY,
        onHidden: iY,
        onReset: yY,
        locked: QY,
        lockable: oY,
        onLocked: WY,
        extra: EY
      } = YY;
      const {
        t: mY
      } = (0, FY.C)(), VY = DY ? hY[DY] : null, lY = null !== DY && QY.has(DY), TY = (DY && AY.hudElements[DY] || KY.l)[2], eY = null !== (rY = DY && vY[DY]) && void 0 !== rY ? rY : KY.e, NY = YY => {
        DY && sY(DY, Math.min(eY, Math.round(100 * (TY + .1 * YY)) / 100))
      };
      return (0, SY.jsxs)(SY.Fragment, {
        children: [(0, SY.jsxs)("div", {
          className: gY()("HudQuickName SmallTextBold", {
            Overlap: OY.length > 0
          }),
          children: [OY.length > 0 && (0, SY.jsx)(cY.e, {
            name: "triangle-exclamation"
          }), VY ? MY(VY.id, IY, mY, RY) : mY("hudLayout:fullScreenHint"), OY.length > 0 && (0, SY.jsx)("span", {
            className: "HudQuickOverlap",
            children: mY("hudLayout:overlapsShort", {
              names: wY(OY, IY, mY, RY)
            })
          })]
        }), (null === VY || void 0 === VY ? void 0 : VY.scale) && (0, SY.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, SY.jsx)(aY.J, {
            disabled: lY || TY <= KY.f,
            ariaLabel: mY("hudLayout:smaller"),
            onClick: () => {
              NY(-1)
            },
            children: (0, SY.jsx)(cY.e, {
              name: "minus"
            })
          }), (0, SY.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*TY)}%`
          }), (0, SY.jsx)(aY.J, {
            disabled: lY || TY >= eY,
            ariaLabel: mY("hudLayout:larger"),
            onClick: () => {
              NY(1)
            },
            children: (0, SY.jsx)(cY.e, {
              name: "plus"
            })
          })]
        }), (VY || EY) && (0, SY.jsxs)("div", {
          className: "HudQuickActions",
          children: [VY && (0, SY.jsxs)(SY.Fragment, {
            children: [(0, SY.jsx)(pY, {
              id: VY.id,
              actionButtons: IY,
              keyNames: RY,
              locked: lY,
              lockable: oY(VY.id),
              onLocked: WY
            }), (0, SY.jsx)(XY, {
              id: VY.id,
              elements: AY.hudElements,
              actionButtons: IY,
              keyNames: RY,
              onHidden: iY
            }), (0, SY.jsx)(qY, {
              id: VY.id,
              elements: AY.hudElements,
              actionButtons: IY,
              keyNames: RY,
              locked: lY,
              onReset: yY
            }), nY(VY.id, uY) && (0, SY.jsx)(PY, {})]
          }), EY]
        })]
      })
    }
    var Hr = DY(1134),
      zr = DY(3957);
    const Zr = "HudPreviewDoc",
      Cr = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      fr = new Set([Zr, ...Object.values(Cr)]),
      jr = new Set(KY.u.map(ur.w)),
      hr = new Set(ur.h);

    function dr(YY, rY, DY) {
      let {
        keysAbove: FY
      } = DY;
      const AY = [...YY.documentElement.classList].filter((YY => !fr.has(YY) && !hr.has(YY))),
        IY = [...rY.documentElement.classList].filter((YY => hr.has(YY))),
        RY = [Zr, Cr.hotbar, Cr.hasShop, Cr.hasBag];
      FY && RY.push(Cr.keysAbove), rY.documentElement.className = [...AY, ...RY, ...IY].join(" ")
    }
    const Jr = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Mr(YY, rY, DY, FY, AY) {
      const IY = (0, KY.y)(DY, FY, "joystick"),
        RY = (0, ur.x)((0, ur.J)(DY, FY, AY), FY),
        OY = RY.classes.filter((YY => !jr.has(YY))),
        gY = rY.documentElement;
      (0, ur.O)({
        ...RY,
        classes: OY
      }, {
        vars: gY,
        safe: gY,
        classes: gY
      });
      const aY = (0, ur.A)(DY.hudLayouts[FY].hudSafe, window.innerWidth, window.innerHeight, wr(), (0, ur.L)(rY));
      gY.style.setProperty("--preview-joystick-shift-left", `${aY[3]}px`), gY.style.setProperty("--preview-joystick-shift-bottom", `${aY[2]}px`), gY.style.setProperty("--preview-joystick-scale", String(IY[2])), (0, zr.c)(gY, rY, DY, FY);
      for (const vY of Jr) gY.style.setProperty(vY, YY.documentElement.style.getPropertyValue(vY) || "0px")
    }

    function wr() {
      return (0, ur.F)(vY.b.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function br(YY) {
      return (0, ur.r)(wr(), (0, ur.L)(YY))
    }

    function Xr(YY, rY, DY) {
      const FY = YY.documentElement.style,
        AY = (0, ur.D)(rY),
        IY = FY.getPropertyValue(AY);
      try {
        return DY((YY => {
          FY.setProperty(AY, String(YY))
        }))
      } finally {
        "" === IY ? FY.removeProperty(AY) : FY.setProperty(AY, IY)
      }
    }

    function qr(YY, rY) {
      const [DY, FY] = Xr(YY, "hotbar", (rY => {
        const DY = DY => {
          var FY, AY;
          return rY(DY), null !== (FY = null === (AY = YY.querySelector(".HotBarGameItemsContainer")) || void 0 === AY ? void 0 : AY.getBoundingClientRect().width) && void 0 !== FY ? FY : 0
        };
        return [DY(1), DY(KY.e)]
      }));
      return DY <= 0 ? KY.e : Math.min(KY.e, Math.max(1, Math.floor(FY / DY / rY + 1e-6) * rY))
    }
    const pr = 3,
      kr = .5,
      Gr = YY => YY.right - YY.left;
    const xr = (YY, rY) => Math.abs(rr(YY).x - rr(rY).x) + Math.abs(rr(YY).y - rr(rY).y) + Math.abs(Gr(YY) - Gr(rY));

    function nr(YY, rY, DY, FY, AY) {
      let {
        canKeep: IY = () => !0,
        passes: RY = pr,
        before: OY,
        keysAboveOf: gY
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const aY = void 0 !== gY && gY(YY) !== gY(rY),
        vY = rY.hudLayouts[DY].hudLocked.filter((YY => IY(YY) && !(aY && "inventory" === YY))),
        uY = new Set(vY);
      if (0 === uY.size) return rY;
      const sY = [...ZY].filter((FY => !vY.includes(FY) && (0, KY.y)(YY, DY, FY).join() === (0, KY.y)(rY, DY, FY).join())),
        iY = YY => {
          const rY = Dr(sY.flatMap((rY => YY[rY] ? [YY[rY]] : [])));
          return {
            ...YY,
            cluster: null !== rY && void 0 !== rY ? rY : void 0
          }
        },
        yY = YY => {
          const rY = AY(YY);
          return rY && iY(rY)
        },
        QY = OY ? iY(OY) : yY(YY);
      let oY = QY && yY(rY);
      if (!QY || !oY) return rY;
      let WY = rY;
      for (let EY = 0; EY < RY && uY.size > 0; EY++) {
        const YY = new Map;
        for (const rY of uY) {
          const AY = QY[rY],
            IY = oY[rY],
            RY = AY && IY ? Pr(rY, (0, KY.y)(WY, DY, rY), AY, IY, FY) : null;
          RY ? YY.set(rY, RY) : uY.delete(rY)
        }
        if (0 === YY.size) break;
        let AY = WY;
        for (const [rY, FY] of YY) AY = (0, KY.U)(AY, DY, rY, FY);
        const IY = yY(AY);
        if (!IY) return rY;
        let RY = WY;
        for (const [rY, FY] of YY) {
          const YY = IY[rY];
          YY && xr(QY[rY], YY) < xr(QY[rY], oY[rY]) - kr ? RY = (0, KY.U)(RY, DY, rY, FY) : uY.delete(rY)
        }
        if (RY === WY) break;
        const OY = [...YY.keys()].every((YY => uY.has(YY)));
        if (WY = RY, oY = OY ? IY : yY(WY), !oY) return rY
      }
      return AY(WY), WY
    }

    function Pr(YY, rY, DY, FY, AY) {
      let [IY, RY, OY] = rY;
      const gY = KY.q[YY],
        aY = {};
      gY.scale && Gr(FY) > 0 && Math.abs(Gr(DY) - Gr(FY)) > kr && (aY.scale = Math.max(KY.f, Math.min(KY.e, OY * Gr(DY) / Gr(FY))));
      const vY = rr(DY).x - rr(FY).x,
        uY = rr(DY).y - rr(FY).y;
      return gY.move && (Math.abs(vY) > kr || Math.abs(uY) > kr) && (aY.dx = IY + vY / AY.width, aY.dy = RY + uY / AY.height), void 0 === aY.scale && void 0 === aY.dx ? null : aY
    }
    let Ur = 0;

    function Lr() {
      return Ur > 0
    }
    const tr = YY => 0 === YY.dx && 0 === YY.dy,
      YD = .001,
      rD = YY => Math.abs(YY.dx) >= 5e-4 || Math.abs(YY.dy) >= 5e-4 ? YY : {
        dx: YY.dx,
        dy: YY.dy < 0 ? -.001 : YD
      };

    function DD(YY) {
      let {
        preview: rY,
        stageRef: DY,
        ringRef: FY,
        centreLineRef: IY,
        snapCentre: RY,
        ready: OY,
        measure: gY,
        k: aY,
        viewport: vY,
        boxes: uY,
        pieces: sY,
        selected: iY,
        insets: yY,
        layout: QY,
        canMove: oY,
        onSelect: WY,
        onMove: EY
      } = YY;
      const mY = (0, AY.useRef)(null),
        VY = (0, AY.useCallback)((() => null !== mY.current), []),
        SY = (YY, rY) => {
          if (!rY) return null;
          const DY = rr(YY.origin),
            FY = rr(rY),
            AY = (YY.to.dx - YY.from.dx) * vY.width,
            IY = (YY.to.dy - YY.from.dy) * vY.height,
            RY = rY.right - rY.left,
            OY = rY.bottom - rY.top;
          return {
            skew: {
              x: FY.x - DY.x - AY,
              y: FY.y - DY.y - IY
            },
            box: {
              left: DY.x - RY / 2,
              top: DY.y - OY / 2,
              right: DY.x + RY / 2,
              bottom: DY.y + OY / 2
            }
          }
        },
        lY = (YY, DY) => {
          var AY;
          const RY = mY.current;
          if (!RY || RY.pointerId !== YY.pointerId) return;
          mY.current = null, null === (AY = IY.current) || void 0 === AY || AY.classList.remove("Shown", "Snapped");
          const OY = FY.current;
          if (OY && null !== RY.ringStyle && OY.setAttribute("style", RY.ringStyle), DY && RY.moved) {
            const YY = tr(RY.to) ? null : gY(RY.id),
              rY = YY ? ar(YY, Ir(vY.width, vY.height, yY)) : {
                x: 0,
                y: 0
              },
              DY = {
                dx: RY.to.dx + rY.x / vY.width,
                dy: RY.to.dy + rY.y / vY.height
              },
              FY = tr(RY.to) ? DY : rD(DY);
            EY(RY.id, FY.dx, FY.dy)
          } else rY(RY.id, null), DY && RY.tapPick && WY(RY.tapPick)
        };
      return {
        busy: VY,
        handlers: {
          onPointerDown: YY => {
            var rY;
            if (!OY || mY.current || !YY.target.closest(".HudPreviewHandle")) return;
            const FY = DY.current.getBoundingClientRect(),
              AY = {
                x: (YY.clientX - FY.left) / aY,
                y: (YY.clientY - FY.top) / aY
              },
              IY = "cluster" === iY ? uY.cluster : void 0,
              RY = IY && null !== Ar(AY, [{
                id: "cluster",
                box: IY
              }], 40 / aY),
              gY = Ar(AY, sY, 40 / aY),
              vY = RY ? "cluster" : gY;
            if (!vY) return;
            if (function(YY) {
                Ur++;
                const rY = DY => {
                  DY.pointerId === YY && (Ur = Math.max(0, Ur - 1), window.removeEventListener("pointerup", rY, !0), window.removeEventListener("pointercancel", rY, !0))
                };
                window.addEventListener("pointerup", rY, !0), window.addEventListener("pointercancel", rY, !0)
              }(YY.pointerId), !oY(vY)) return void WY(RY && gY ? gY : vY);
            WY(vY);
            const [yY, EY] = null !== (rY = QY.hudElements[vY]) && void 0 !== rY ? rY : [0, 0], VY = {
              dx: yY,
              dy: EY
            }, SY = {
              skew: {
                x: 0,
                y: 0
              },
              box: uY[vY]
            };
            mY.current = {
              id: vY,
              pointerId: YY.pointerId,
              startX: YY.clientX,
              startY: YY.clientY,
              origin: uY[vY],
              from: VY,
              to: VY,
              moved: !1,
              home: tr(VY) ? {
                centre: rr(uY[vY]),
                anchor: SY
              } : null,
              away: tr(VY) ? null : SY,
              anchor: SY,
              ringStyle: null,
              tapPick: RY ? gY : null
            }, YY.currentTarget.setPointerCapture(YY.pointerId)
          },
          onPointerMove: YY => {
            const DY = mY.current;
            if (!DY || DY.pointerId !== YY.pointerId) return;
            const AY = YY.clientX - DY.startX,
              OY = YY.clientY - DY.startY;
            if (!DY.moved && Math.hypot(AY, OY) < 5) return;
            const uY = !DY.moved;
            var sY, iY;
            (DY.moved = !0, uY) && (DY.ringStyle = null !== (sY = null === (iY = FY.current) || void 0 === iY ? void 0 : iY.getAttribute("style")) && void 0 !== sY ? sY : null);
            const QY = Ir(vY.width, vY.height, yY);
            if (!DY.home) {
              var oY;
              DY.to = {
                dx: 0,
                dy: 0
              }, rY(DY.id, DY.to);
              const YY = gY(DY.id),
                FY = null !== (oY = SY(DY, YY)) && void 0 !== oY ? oY : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: DY.origin
                },
                AY = rr(DY.origin);
              DY.home = {
                centre: YY ? rr(YY) : {
                  x: AY.x - DY.from.dx * vY.width,
                  y: AY.y - DY.from.dy * vY.height
                },
                anchor: FY
              }
            }
            const WY = DY.home;
            let EY = !1;
            const VY = YY => {
                EY = !1;
                let FY = Rr(YY.box, AY / aY, OY / aY, QY);
                const IY = vY.width / 2;
                if (RY && Math.abs(rr(DY.origin).x + FY.x - IY) <= 8 / aY) {
                  const rY = IY - rr(DY.origin).x,
                    AY = Rr(YY.box, rY, FY.y, QY);
                  EY = Math.abs(AY.x - rY) < .01, EY && (FY = AY)
                }
                const gY = function(YY, rY, DY, FY, AY) {
                  const IY = YY.dx * FY + rY,
                    RY = YY.dy * AY + DY,
                    OY = YY => Math.max(-1, Math.min(1, YY));
                  return {
                    dx: OY(IY / FY),
                    dy: OY(RY / AY)
                  }
                }(DY.from, FY.x - YY.skew.x, FY.y - YY.skew.y, vY.width, vY.height);
                DY.to = rD(gY), DY.anchor = YY, rY(DY.id, DY.to)
              },
              lY = Rr(WY.anchor.box, AY / aY, OY / aY, QY),
              TY = IY.current,
              eY = rr(DY.origin),
              NY = 6 / aY;
            if (Math.abs(eY.x + lY.x - WY.centre.x) <= NY && Math.abs(eY.y + lY.y - WY.centre.y) <= NY) DY.to = {
              dx: 0,
              dy: 0
            }, DY.anchor = WY.anchor, EY = RY && Math.abs(WY.centre.x - vY.width / 2) < 1, rY(DY.id, DY.to);
            else if (DY.away) VY(DY.away);
            else {
              var BY;
              VY(WY.anchor), DY.away = null !== (BY = SY(DY, gY(DY.id))) && void 0 !== BY ? BY : WY.anchor, VY(DY.away)
            }
            null === TY || void 0 === TY || TY.classList.add("Shown"), null === TY || void 0 === TY || TY.classList.toggle("Snapped", EY), (YY => {
              const rY = FY.current;
              if (rY) {
                const {
                  skew: DY,
                  box: FY
                } = YY.anchor;
                rY.style.left = FY.left * aY + "px", rY.style.top = FY.top * aY + "px", rY.style.width = (FY.right - FY.left) * aY + "px", rY.style.height = (FY.bottom - FY.top) * aY + "px", rY.style.translate = `${((YY.to.dx-YY.from.dx)*vY.width+DY.x)*aY}px ${((YY.to.dy-YY.from.dy)*vY.height+DY.y)*aY}px`
              }
            })(DY)
          },
          onPointerUp: YY => {
            lY(YY, !0)
          },
          onPointerCancel: YY => {
            lY(YY, !1)
          }
        }
      }
    }

    function FD(YY, rY) {
      return Object.keys(YY).filter((YY => YY !== rY)).map((rY => YY[rY]))
    }

    function AD(YY) {
      const rY = [],
        DY = !YY.documentElement.classList.contains((0, ur.z)("perspective"));
      for (const RY of YY.querySelectorAll(`[${JY}]`)) {
        const YY = DY && "perspective" === RY.getAttribute(JY) ? RY.querySelector(".ScaleOnHover") : null,
          FY = (null !== YY && void 0 !== YY ? YY : RY).getBoundingClientRect();
        (FY.width > 0 || FY.height > 0) && rY.push({
          id: RY.getAttribute(JY),
          box: {
            left: FY.left,
            top: FY.top,
            right: FY.right,
            bottom: FY.bottom
          }
        })
      }
      const FY = YY => Dr(rY.filter((rY => {
          let {
            id: DY
          } = rY;
          return YY(DY)
        })).map((YY => {
          let {
            box: rY
          } = YY;
          return rY
        }))),
        AY = {};
      for (const RY of new Set(rY.map((YY => YY.id)))) AY[RY] = FY((YY => YY === RY));
      const IY = FY((YY => ZY.has(YY)));
      return IY && (AY.cluster = IY), {
        boxes: AY,
        pieces: rY
      }
    }

    function ID(YY, rY, DY) {
      const FY = rY.right - rY.left,
        AY = rY.bottom - rY.top;
      return Xr(YY, "cluster", (rY => {
        const IY = DY => {
            rY(DY);
            const FY = Dr([...YY.querySelectorAll(`[${JY}]:not(.HudPreviewGhost)`)].filter((YY => ZY.has(YY.getAttribute(JY)))).map((YY => {
              const rY = YY.getBoundingClientRect();
              return {
                left: rY.left,
                top: rY.top,
                right: rY.right,
                bottom: rY.bottom
              }
            })));
            return FY ? {
              w: FY.right - FY.left,
              h: FY.bottom - FY.top
            } : null
          },
          RY = YY => !YY || YY.w <= FY && YY.h <= AY,
          OY = IY(1),
          gY = IY(KY.e);
        if (!OY || RY(gY)) return KY.e;
        const aY = (YY, rY, DY) => rY > YY ? 1 + (DY - YY) * (KY.e - 1) / (rY - YY) : KY.e;
        let vY = Math.floor(Math.min(KY.e, aY(OY.w, gY.w, FY), aY(OY.h, gY.h, AY)) / DY + 1e-6) * DY;
        for (; vY > 1 && !RY(IY(vY));) vY = Math.round(100 * (vY - DY)) / 100;
        return Math.max(1, vY)
      }))
    }

    function RD(YY) {
      dr(document, YY, {
        keysAbove: !1
      });
      const rY = parseFloat(getComputedStyle(YY.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        DY = Number.isFinite(rY) && rY < 0;
      return dr(document, YY, {
        keysAbove: DY
      }), DY
    }

    function OD(YY, rY) {
      let {
        layout: DY,
        orientation: FY,
        viewport: IY,
        replicaKey: RY,
        joystickFixed: OY,
        busy: gY
      } = rY;
      const [aY, vY] = (0, AY.useState)(null), [uY, sY] = (0, AY.useState)({
        boxes: {},
        pieces: []
      }), [iY, yY] = (0, AY.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [QY, oY] = (0, AY.useState)(!1), [WY, EY] = (0, AY.useState)(!1), [mY, VY] = (0, AY.useState)(!1), SY = (0, AY.useCallback)((YY => {
        EY(YY), YY && VY(!0)
      }), []), lY = DY.hudLayouts[FY].hudSafe, TY = (0, AY.useCallback)((() => {
        var rY;
        const DY = null === (rY = YY.current) || void 0 === rY ? void 0 : rY.contentDocument;
        null !== DY && void 0 !== DY && DY.body && vY(DY)
      }), [YY]), eY = (0, AY.useCallback)((() => {
        aY && (sY(AD(aY)), yY(function(YY, rY) {
          const DY = br(YY),
            [FY, AY, IY, RY] = rY ? (0, ur.v)(rY, window.innerWidth, window.innerHeight, DY) : DY;
          return {
            top: FY,
            right: AY,
            bottom: IY,
            left: RY
          }
        }(aY, lY)))
      }), [aY, lY]), NY = (0, AY.useCallback)((() => {
        aY && oY(RD(aY))
      }), [aY]), BY = (0, AY.useRef)((() => {}));
      return BY.current = () => {
        NY(), gY() || eY()
      }, (0, AY.useLayoutEffect)((() => {
        if (aY) return function(YY, rY, DY, FY) {
          const AY = new Map,
            IY = new Set;
          let RY = null;
          const OY = () => {
              RY !== (0 === IY.size) && (RY = 0 === IY.size, null === FY || void 0 === FY || FY(RY))
            },
            gY = () => {
              const FY = new Set;
              for (const RY of YY.head.querySelectorAll('style, link[rel="stylesheet"]')) {
                FY.add(RY);
                const YY = AY.get(RY);
                if (YY) "STYLE" === RY.tagName && YY.textContent !== RY.textContent && (YY.textContent = RY.textContent, null === DY || void 0 === DY || DY());
                else {
                  const YY = RY.cloneNode(!0);
                  if ("LINK" === YY.tagName) {
                    IY.add(YY);
                    const rY = () => {
                      IY.delete(YY), OY()
                    };
                    YY.addEventListener("load", rY), YY.addEventListener("error", rY), DY && YY.addEventListener("load", DY)
                  }
                  AY.set(RY, YY), rY.head.appendChild(YY)
                }
              }
              for (const [YY, rY] of AY) FY.has(YY) || (rY.remove(), AY.delete(YY), IY.delete(rY));
              OY()
            };
          gY();
          const aY = new MutationObserver(gY);
          return aY.observe(YY.head, {
            childList: !0,
            subtree: !0,
            characterData: !0
          }), () => {
            aY.disconnect()
          }
        }(document, aY, (() => {
          BY.current()
        }), SY)
      }), [aY, SY]), (0, AY.useLayoutEffect)(NY, [NY, IY]), (0, AY.useLayoutEffect)((() => {
        aY && (dr(document, aY, {
          keysAbove: QY
        }), Mr(document, aY, DY, FY, OY), NY(), eY())
      }), [aY, DY, FY, QY, RY, OY, IY, eY, NY]), (0, AY.useEffect)((() => {
        var YY;
        if (!aY) return;
        const rY = new ResizeObserver((() => {
          gY() || eY()
        }));
        for (const DY of aY.querySelectorAll(`[${JY}]`)) rY.observe(DY);
        return null === (YY = aY.fonts) || void 0 === YY || YY.ready.then(eY), () => {
          rY.disconnect()
        }
      }), [aY, eY, gY, RY]), {
        doc: aY,
        onLoad: TY,
        boxes: uY.boxes,
        pieces: uY.pieces,
        insets: iY,
        keysAbove: QY,
        ready: WY,
        settled: mY
      }
    }
    const gD = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"],
        ["menu", "perspective"]
      ],
      aD = (YY, rY, DY) => {
        var FY;
        const [AY, IY] = null !== (FY = DY.hudElements.perspective) && void 0 !== FY ? FY : [0, 0], RY = 0 === AY && 0 === IY;
        return "cluster" === YY && ZY.has(rY) || "cluster" === rY && ZY.has(YY) || gD.some((FY => {
          let [AY, IY] = FY;
          const OY = DY.hudElements.hotbar,
            gY = "inventory" === IY && DY.hudLocked.includes(IY) && void 0 !== OY && !(0, KY.G)(OY);
          return (YY === AY && rY === IY || YY === IY && rY === AY) && (RY || "perspective" !== IY) && !gY
        }))
      };
    const vD = ["Above", "Below", "Left", "Right"];

    function uD(YY, rY, DY, FY, AY) {
      const IY = DY[YY],
        RY = (IY.left + IY.right) / 2,
        OY = (IY.top + IY.bottom) / 2,
        gY = (7.5 * rY.length + 14) / FY,
        aY = 18 / FY,
        vY = {
          Above: {
            left: RY - gY / 2,
            top: IY.top - aY,
            right: RY + gY / 2,
            bottom: IY.top
          },
          Below: {
            left: RY - gY / 2,
            top: IY.bottom,
            right: RY + gY / 2,
            bottom: IY.bottom + aY
          },
          Left: {
            left: IY.left - gY,
            top: OY - aY / 2,
            right: IY.left,
            bottom: OY + aY / 2
          },
          Right: {
            left: IY.right,
            top: OY - aY / 2,
            right: IY.right + gY,
            bottom: OY + aY / 2
          }
        },
        uY = FD(DY, YY),
        sY = {
          left: 0,
          top: 0,
          right: AY.width,
          bottom: AY.height
        };
      return vD[vr(vD.map((YY => vY[YY])), uY, {
        bounds: sY
      })]
    }

    function sD() {
      const [YY, rY] = (0, tY.c)();
      return (0, AY.useMemo)((() => ({
        width: YY,
        height: rY
      })), [YY, rY])
    }

    function iD(YY) {
      var rY;
      const {
        layout: DY,
        orientation: IY,
        selected: RY,
        onSelect: OY,
        onMove: aY,
        canMove: vY,
        actionButtons: uY,
        joystickFixed: sY,
        presence: iY,
        keyNames: QY,
        maxHeight: oY,
        fill: WY = !1,
        apiRef: EY
      } = YY, {
        t: mY
      } = (0, FY.C)(), VY = sD(), lY = (null !== (rY = (0, yY.j)("maxAuraLevel")) && void 0 !== rY ? rY : 0) > 0, TY = DY.hudLayouts[IY], eY = (0, AY.useRef)(null), NY = (0, AY.useRef)(null), BY = (0, AY.useRef)(null), HY = (0, AY.useRef)(null), zY = (0, AY.useRef)(null), CY = (0, AY.useRef)(null), fY = (0, Yr.d)(eY).width, jY = WY ? 1 : fY > 0 ? Or(fY, VY.width, VY.height, oY) : 0, hY = (0, AY.useRef)((() => !1)), JY = (0, AY.useCallback)((() => hY.current()), []), {
        doc: wY,
        onLoad: bY,
        boxes: XY,
        pieces: qY,
        insets: pY,
        keysAbove: kY,
        ready: GY,
        settled: xY
      } = OD(BY, {
        layout: DY,
        orientation: IY,
        viewport: VY,
        replicaKey: `${uY}:${sY}:${lY}`,
        joystickFixed: sY,
        busy: JY
      }), nY = (0, AY.useCallback)((YY => {
        wY && Mr(document, wY, YY, IY, sY)
      }), [wY, IY, sY]), PY = (0, AY.useCallback)((YY => wY && xY ? (nY(YY), RD(wY), function(YY) {
        let {
          boxes: rY,
          pieces: DY
        } = YY;
        const FY = DY.find((YY => "inventory" === YY.id));
        if (!FY || !rY.inventory) return rY;
        const AY = rr(rY.inventory),
          IY = Gr(FY.box) / 2,
          RY = (FY.box.bottom - FY.box.top) / 2;
        return {
          ...rY,
          inventory: {
            left: AY.x - IY,
            top: AY.y - RY,
            right: AY.x + IY,
            bottom: AY.y + RY
          }
        }
      }(AD(wY))) : null), [wY, xY, nY]), LY = (0, AY.useCallback)((YY => !!wY && (nY(YY), RD(wY))), [wY, nY]), tY = (0, AY.useRef)(null), Dr = (0, AY.useRef)(null), Ar = (0, AY.useRef)(DY);
      Ar.current = DY;
      const Rr = (0, AY.useCallback)((() => {
        null !== tY.current && (cancelAnimationFrame(tY.current), tY.current = null)
      }), []);
      (0, AY.useEffect)((() => Rr), [DY, Rr]);
      const {
        lockable: vr
      } = YY, sr = (0, AY.useCallback)((YY => {
        if (nY(YY), !xY || 0 === DY.hudLayouts[IY].hudLocked.length) return;
        const rY = DY;
        Rr(), tY.current = requestAnimationFrame((() => {
          var DY;
          if (tY.current = null, Ar.current !== rY) return;
          const FY = (null === (DY = Dr.current) || void 0 === DY ? void 0 : DY.from) === rY ? Dr.current.boxes : PY(rY);
          FY && (Dr.current = {
            from: rY,
            boxes: FY
          }), nY(FY ? nr(rY, YY, IY, VY, PY, {
            canKeep: vr,
            passes: 1,
            before: FY,
            keysAboveOf: LY
          }) : YY)
        }))
      }), [nY, xY, DY, IY, VY, PY, LY, vr, Rr]), ir = DD({
        preview: (YY, rY) => {
          rY ? sr((0, KY.U)(DY, IY, YY, rY)) : (Rr(), nY(DY))
        },
        stageRef: NY,
        ringRef: HY,
        centreLineRef: zY,
        snapCentre: DY.hudSnapCentre,
        ready: xY,
        measure: YY => {
          var rY;
          return wY && GY && null !== (rY = AD(wY).boxes[YY]) && void 0 !== rY ? rY : null
        },
        k: jY,
        viewport: VY,
        boxes: XY,
        pieces: qY,
        selected: RY,
        insets: pY,
        layout: TY,
        canMove: vY,
        onSelect: OY,
        onMove: (YY, rY, DY) => {
          Rr(), aY(YY, rY, DY)
        }
      });
      (0, AY.useLayoutEffect)((() => {
        hY.current = ir.busy
      }), [ir.busy]);
      const yr = (0, AY.useRef)([]),
        Qr = (0, AY.useRef)(TY.hudElements);
      (0, AY.useEffect)((() => {
        for (const AY of Object.keys(TY.hudElements)) {
          var YY, rY, DY, FY;
          (null !== (YY = null === (rY = TY.hudElements[AY]) || void 0 === rY ? void 0 : rY[2]) && void 0 !== YY ? YY : 1) > (null !== (DY = null === (FY = Qr.current[AY]) || void 0 === FY ? void 0 : FY[2]) && void 0 !== DY ? DY : 1) && vY(AY) && !dY(AY, TY.hudElements[AY]) && yr.current.push(AY)
        }
        Qr.current = TY.hudElements
      }), [TY.hudElements, vY]), (0, AY.useEffect)((() => {
        if (!GY) return;
        const YY = yr.current.shift(),
          rY = YY && XY[YY];
        if (!YY || !rY || ir.busy()) return;
        const DY = ar(rY, Ir(VY.width, VY.height, pY));
        if (0 !== DY.x || 0 !== DY.y) {
          var FY;
          const [rY, AY] = null !== (FY = TY.hudElements[YY]) && void 0 !== FY ? FY : [0, 0];
          aY(YY, rY + DY.x / VY.width, AY + DY.y / VY.height)
        }
      }), [XY, GY]), (0, AY.useImperativeHandle)(EY, (() => ({
        setScale: (YY, rY) => {
          sr((0, KY.U)(DY, IY, YY, {
            scale: rY
          }))
        },
        setOpacity: YY => {
          nY({
            ...DY,
            hudKeyOpacity: YY
          })
        },
        keepLocks: (YY, rY) => (Rr(), nr(YY, rY, IY, VY, PY, {
          canKeep: vr,
          keysAboveOf: LY
        })),
        setSafe: YY => {
          sr((0, KY.X)(DY, IY, YY)), CY.current && (CY.current.style.inset = (0, ur.v)(YY, VY.width, VY.height, br(null !== wY && void 0 !== wY ? wY : document)).map((YY => YY * jY + "px")).join(" "))
        }
      })), [nY, sr, PY, LY, Rr, vr, wY, DY, IY, VY, jY]);
      const or = new Set(Object.keys(TY.hudElements).filter((YY => 1 === TY.hudElements[YY][3]))),
        Wr = RY ? XY[RY] : void 0,
        Er = RY ? MY(RY, uY, mY, QY) : "",
        mr = RY ? function(YY, rY, DY) {
          const FY = YY => {
            var rY;
            return 1 === (null === (rY = DY.hudElements[YY]) || void 0 === rY ? void 0 : rY[3])
          };
          if (FY(YY)) return [];
          const AY = rY.filter((rY => {
              let {
                id: DY
              } = rY;
              return "cluster" === YY ? ZY.has(DY) : DY === YY
            })),
            IY = new Set;
          for (const RY of rY) RY.id === YY || IY.has(RY.id) || aD(YY, RY.id, DY) || FY(RY.id) || void 0 === DY.hudElements[YY] && void 0 === DY.hudElements[RY.id] || AY.some((YY => {
            let {
              id: rY,
              box: DY
            } = YY;
            return rY !== RY.id && gr(DY, RY.box, 2)
          })) && IY.add(RY.id);
          return [...IY]
        }(RY, qY, TY) : [],
        Vr = mr.join(),
        Sr = (0, AY.useRef)(YY.onReady);
      Sr.current = YY.onReady, (0, AY.useEffect)((() => {
        var YY;
        null === (YY = Sr.current) || void 0 === YY || YY.call(Sr, xY)
      }), [xY]);
      const lr = (0, AY.useRef)(YY.onMeasured);
      (0, AY.useLayoutEffect)((() => {
        lr.current = YY.onMeasured
      })), (0, AY.useEffect)((() => {
        var YY;
        const rY = wY ? {
          hotbar: qr(wY, cr),
          cluster: ID(wY, Ir(VY.width, VY.height, pY), cr)
        } : {};
        null === (YY = lr.current) || void 0 === YY || YY.call(lr, XY, Vr ? Vr.split(",") : [], rY)
      }), [XY, Vr, wY, VY, pY]);
      const Tr = YY => ({
        left: YY.left * jY,
        top: YY.top * jY,
        width: (YY.right - YY.left) * jY,
        height: (YY.bottom - YY.top) * jY
      });
      return (0, SY.jsx)("div", {
        ref: eY,
        className: gY()("HudPreviewBox", {
          Fill: WY
        }),
        style: {
          height: VY.height * jY
        },
        children: (0, SY.jsxs)("div", {
          ref: NY,
          className: "HudPreviewStage",
          style: {
            width: VY.width * jY,
            height: VY.height * jY
          },
          children: [(0, SY.jsx)("iframe", {
            ref: BY,
            className: "HudPreviewFrame",
            srcDoc: "<!DOCTYPE html><html><head></head><body></body></html>",
            onLoad: bY,
            title: mY("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: VY.width,
              height: VY.height,
              transform: `scale(${jY})`
            }
          }), wY && (0, UY.createPortal)((0, SY.jsx)(Nr, {
            presence: iY,
            portraitPhone: (0, Hr.f)(VY.width, VY.height),
            hidden: or,
            actionButtons: uY,
            joystickFixed: sY,
            keysAbove: kY,
            auraBar: lY
          }), wY.body), (0, SY.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...ir.handlers,
            children: [(0, SY.jsx)("div", {
              ref: CY,
              className: "HudPreviewSafeZone",
              style: {
                top: pY.top * jY,
                right: pY.right * jY,
                bottom: pY.bottom * jY,
                left: pY.left * jY
              }
            }), qY.map(((YY, rY) => {
              let {
                id: DY,
                box: FY
              } = YY;
              return (0, SY.jsx)("div", {
                className: "HudPreviewHandle",
                style: Tr(Fr(FY, 40 / jY))
              }, `${DY}:${rY}`)
            })), TY.hudLocked.map((YY => {
              const rY = XY[YY];
              return rY && (0, SY.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: rY.right * jY,
                  top: rY.top * jY
                },
                children: (0, SY.jsx)(cY.e, {
                  name: "lock"
                })
              }, YY)
            })), (0, SY.jsx)("div", {
              ref: zY,
              className: "HudPreviewCentreLine",
              style: {
                left: VY.width / 2 * jY
              }
            }), RY && Wr && (0, SY.jsx)("div", {
              ref: HY,
              className: gY()("HudPreviewRing", {
                Fixed: !vY(RY),
                Overlap: mr.length > 0
              }),
              style: Tr(Wr),
              children: (0, SY.jsx)("span", {
                className: gY()("HudPreviewRingLabel", uD(RY, Er, XY, jY, VY)),
                children: Er
              })
            })]
          })]
        })
      })
    }

    function yD(YY, rY) {
      (0, AY.useEffect)((() => {
        var DY;
        null === (DY = YY.current) || void 0 === DY || DY.toggleAttribute("inert", rY)
      }), [YY, rY])
    }
    const QD = "hudFullScreen";

    function oD(YY) {
      let {
        onScale: rY,
        onHidden: DY,
        onReset: IY,
        locked: RY,
        lockable: OY,
        onLocked: gY,
        onClose: vY,
        ...uY
      } = YY;
      const {
        t: sY
      } = (0, FY.C)(), iY = (0, AY.useRef)(null);
      (0, LY.t)("popup", iY, vY),
      function(YY) {
        const rY = (0, AY.useRef)(YY);
        rY.current = YY, (0, AY.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [QD]: !0
          }, "");
          let YY = !1;
          const DY = () => {
            YY = !0, rY.current()
          };
          return window.addEventListener("popstate", DY), () => {
            var rY;
            window.removeEventListener("popstate", DY), !YY && null !== (rY = window.history.state) && void 0 !== rY && rY[QD] && window.history.back()
          }
        }), [])
      }(vY), (0, AY.useEffect)((() => {
        function YY(YY) {
          "Escape" === YY.key && (YY.stopPropagation(), vY())
        }
        return window.addEventListener("keydown", YY, !0), () => {
          window.removeEventListener("keydown", YY, !0)
        }
      }), [vY]);
      const {
        selected: yY
      } = uY, QY = (0, AY.useRef)(null), oY = (0, AY.useRef)(null), [WY, EY] = (0, AY.useState)(!1);
      yD(oY, !WY);
      const [mY, VY] = (0, AY.useState)(null), [lY, TY] = (0, AY.useState)([]), [eY, NY] = Br(), BY = (0, AY.useRef)(uY.selected);
      BY.current = uY.selected;
      const cY = (0, AY.useRef)({}),
        KY = (0, AY.useCallback)((() => {
          const YY = QY.current;
          YY && VY(function(YY, rY, DY) {
            var FY;
            const {
              innerWidth: AY,
              innerHeight: IY
            } = window, RY = YY.offsetWidth, OY = YY.offsetHeight, gY = Math.max(wr()[0], 6), aY = [];
            for (const uY of [gY, .2 * IY, .5 * IY - OY / 2, .33 * IY])
              for (const YY of [.5, .3, .7]) aY.push({
                left: Math.max(0, Math.min(AY - RY - 6, Math.max(6, AY * YY - RY / 2))),
                top: uY
              });
            const vY = aY.map((YY => ({
              left: YY.left - 6,
              top: YY.top - 6,
              right: YY.left + RY + 6,
              bottom: YY.top + OY + 6
            })));
            return aY[vr(vY, FD(rY, DY), {
              avoid: DY && null !== (FY = rY[DY]) && void 0 !== FY ? FY : null
            })]
          }(YY, cY.current, BY.current))
        }), []),
        HY = (0, AY.useCallback)(((YY, rY, DY) => {
          TY(rY), NY(DY), cY.current = YY, KY()
        }), [KY, NY]);
      return (0, AY.useLayoutEffect)(KY, [uY.selected, KY]), (0, UY.createPortal)((0, SY.jsxs)("div", {
        ref: iY,
        className: "HudFullScreenEditor",
        children: [(0, SY.jsx)(iD, {
          ...uY,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: HY,
          onReady: EY,
          lockable: OY
        }), (0, SY.jsxs)("div", {
          ref: QY,
          className: "HudFullScreenToolbar",
          style: null === mY ? void 0 : {
            left: mY.left,
            top: mY.top,
            transform: "none"
          },
          children: [(0, SY.jsx)("div", {
            ref: oY,
            className: "HudFullScreenControls",
            children: (0, SY.jsx)(Kr, {
              selected: yY,
              layout: uY.layout.hudLayouts[uY.orientation],
              actionButtons: uY.actionButtons,
              keyNames: uY.keyNames,
              overlaps: lY,
              scaleCaps: eY,
              onScale: rY,
              onHidden: DY,
              onReset: IY,
              locked: RY,
              lockable: OY,
              onLocked: gY,
              joystickFixed: uY.joystickFixed
            })
          }), (0, SY.jsx)(aY.f, {
            className: "HudFullScreenDone",
            onClick: vY,
            padDefaultFocus: !0,
            children: sY("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const WD = YY => `${Math.round(100*YY)}%`;

    function ED(YY) {
      let {
        info: rY,
        tuple: DY,
        props: AY
      } = YY;
      const {
        t: IY
      } = (0, FY.C)();
      return (0, SY.jsx)(iY.j, {
        name: IY("hudLayout:size"),
        min: KY.f,
        max: KY.e,
        step: cr,
        initValue: DY[2],
        disabled: AY.locked.has(rY.id),
        selectableMax: AY.scaleCaps[rY.id],
        cappedNote: IY("hudLayout:sizeCapped"),
        format: WD,
        onChange: YY => {
          AY.onScalePreview(rY.id, YY)
        },
        onChangeComplete: YY => {
          AY.onScale(rY.id, YY)
        }
      })
    }

    function mD(YY) {
      const {
        t: rY
      } = (0, FY.C)(), {
        present: DY,
        elements: IY,
        selected: RY,
        onSelect: OY,
        onHidden: aY,
        onReset: vY,
        note: uY,
        actionButtons: sY,
        keyNames: iY,
        sizeBesidePreview: yY,
        locked: QY,
        lockable: oY,
        onLocked: WY
      } = YY, EY = (0, AY.useRef)(null);
      return (0, AY.useEffect)((() => {
        var YY;
        const rY = RY ? null === (YY = EY.current) || void 0 === YY ? void 0 : YY.querySelector(`[data-hud-row="${RY}"]`) : null;
        if (!rY) return;
        const DY = rY.closest(".SettingsMenuRight"),
          FY = performance.now();
        let AY = null;
        const IY = () => {
            clearInterval(gY), null === DY || void 0 === DY || DY.removeEventListener("scroll", OY)
          },
          OY = () => {
            Lr() || IY()
          },
          gY = setInterval((() => {
            const YY = performance.now();
            YY - FY > 1500 ? IY() : Lr() ? AY = null : null === AY ? AY = YY : YY - AY >= 150 && (IY(), function(YY) {
              var rY;
              const DY = YY.closest(".SettingsMenuRight"),
                FY = null === (rY = YY.closest(".HudLayoutSettings")) || void 0 === rY ? void 0 : rY.querySelector(".HudLayoutPreviewBox");
              if (!DY || !FY) return;
              const AY = FY.getBoundingClientRect().bottom + 8,
                IY = DY.getBoundingClientRect().bottom - 8,
                RY = YY.getBoundingClientRect();
              RY.top < AY ? DY.scrollBy({
                top: RY.top - AY,
                behavior: "smooth"
              }) : RY.bottom > IY && DY.scrollBy({
                top: Math.min(RY.bottom - IY, RY.top - AY),
                behavior: "smooth"
              })
            }(rY))
          }), 50);
        return null === DY || void 0 === DY || DY.addEventListener("scroll", OY, {
          passive: !0
        }), IY
      }), [RY]), (0, SY.jsx)("div", {
        ref: EY,
        className: "SettingBoxGroup HudElementList",
        children: jY.filter((YY => DY.has(YY.id))).map((DY => {
          const FY = ((YY, rY) => {
              var DY;
              return null !== (DY = YY[rY]) && void 0 !== DY ? DY : KY.l
            })(IY, DY.id),
            AY = 1 === FY[3],
            EY = DY.id === RY,
            mY = DY.scale && !yY,
            VY = uY(DY.id, EY);
          return (0, SY.jsxs)("div", {
            "data-hud-row": DY.id,
            className: gY()("SettingBox HudElementRow", {
              Open: EY,
              Hidden: AY,
              Child: void 0 !== DY.parent
            }),
            children: [(0, SY.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, SY.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": mY ? EY : void 0,
                onClick: () => {
                  OY(DY.id)
                },
                children: [MY(DY.id, sY, rY, iY), DY.scale && 1 !== FY[2] && !(EY && mY) && (0, SY.jsx)("span", {
                  className: "HudElementRowSize",
                  children: WD(FY[2])
                }), mY && (0, SY.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, SY.jsx)(pY, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: DY.id,
                actionButtons: sY,
                keyNames: iY,
                locked: QY.has(DY.id),
                lockable: oY(DY.id),
                onLocked: WY
              }), (0, SY.jsx)(XY, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: DY.id,
                elements: IY,
                actionButtons: sY,
                keyNames: iY,
                onHidden: aY
              }), (0, SY.jsx)(qY, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: QY.has(DY.id),
                id: DY.id,
                elements: IY,
                actionButtons: sY,
                keyNames: iY,
                onReset: vY
              })]
            }), EY && mY && (0, SY.jsx)(ED, {
              info: DY,
              tuple: FY,
              props: YY
            }), VY && (0, SY.jsx)("div", {
              className: "HudElementNote",
              children: VY
            })]
          }, DY.id)
        }))
      })
    }

    function VD(YY) {
      let {
        preview: rY,
        quick: DY,
        onFullScreen: IY,
        resting: RY,
        onSidePanel: OY
      } = YY;
      const {
        t: gY
      } = (0, FY.C)(), vY = sD(), uY = (0, AY.useRef)(null), {
        width: sY
      } = (0, Yr.d)(uY), iY = Math.floor(vY.width * Math.min(1, rY.maxHeight / vY.height)), yY = sY - iY - 12, QY = yY >= 130, oY = sY > 0;
      (0, AY.useEffect)((() => {
        oY && OY(QY)
      }), [oY, QY, OY]);
      const WY = Or(QY ? iY : sY, vY.width, vY.height, rY.maxHeight),
        EY = RY ? (0, SY.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: vY.height * WY
          }
        }) : (0, SY.jsx)(iD, {
          ...rY
        }),
        mY = YY => (0, SY.jsxs)(aY.J, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: gY("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: IY,
          children: [(0, SY.jsx)(cY.e, {
            name: "expand"
          }), YY && (0, SY.jsx)("span", {
            children: gY("hudLayout:fullScreen")
          })]
        });
      return (0, SY.jsxs)("div", {
        ref: uY,
        className: "SettingBox HudLayoutPreviewBox",
        children: [sY > 0 && QY && (0, SY.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, SY.jsx)("div", {
            style: {
              width: iY
            },
            children: EY
          }), (0, SY.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, SY.jsx)(Kr, {
              selected: rY.selected,
              ...DY,
              joystickFixed: rY.joystickFixed,
              extra: mY(!rY.selected || yY >= 278)
            })
          })]
        }), sY > 0 && !QY && (0, SY.jsxs)(SY.Fragment, {
          children: [EY, (0, SY.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: mY(!1)
          })]
        })]
      })
    }
    var SD = DY(8291),
      lD = DY(3953);
    const TD = YY => {
      const rY = ur.n * ("sides" === YY ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(rY / 2))
    };

    function eD(YY, rY, DY) {
      const [FY, AY, IY, RY] = YY;
      return "sides" === rY ? [FY, DY, IY, DY] : [DY, AY, DY, RY]
    }
    const ND = [null, null, null, null],
      BD = YY => `${YY}px`;

    function cD(YY) {
      let {
        safe: rY,
        onPreview: DY,
        onCommit: IY
      } = YY;
      const {
        t: RY
      } = (0, FY.C)(), OY = (0, ur.v)(null !== rY && void 0 !== rY ? rY : ND, window.innerWidth, window.innerHeight, br(document).map(Math.round)), gY = (0, AY.useRef)(null !== rY && void 0 !== rY ? rY : ND);
      gY.current = null !== rY && void 0 !== rY ? rY : ND;
      const vY = YY => {
        const rY = Math.min(TD(YY), "sides" === YY ? Math.max(OY[1], OY[3]) : Math.max(OY[0], OY[2]));
        return (0, SY.jsx)(iY.j, {
          name: RY("sides" === YY ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: TD(YY),
          step: 2,
          initValue: rY,
          format: BD,
          onChange: rY => {
            DY(eD(gY.current, YY, rY))
          },
          onChangeComplete: FY => {
            if (FY === rY) return void DY(gY.current);
            const AY = eD(gY.current, YY, FY);
            gY.current = AY, IY(AY), (0, eY.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: YY
            })
          }
        })
      };
      return (0, SY.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, SY.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, SY.jsx)("div", {
            children: RY("hudLayout:safeZone")
          }), (0, SY.jsx)(aY.J, {
            active: null === rY,
            pressed: null === rY,
            onClick: () => {
              IY(null)
            },
            children: RY("hudLayout:safeZoneAuto")
          })]
        }), vY("sides"), vY("ends")]
      })
    }

    function KD() {
      const {
        t: YY
      } = (0, FY.C)(), rY = (0, KY.T)(), {
        clientEscMenuOptions: DY
      } = (0, vY.j)(["clientEscMenuOptions"]), IY = (0, SD.f)(), RY = rY.hudLayouts[IY], [OY, gY] = (0, AY.useState)(null), [uY, sY] = (0, AY.useState)([]), [yY, QY] = (0, AY.useState)(null), [oY, WY] = Br(), EY = (0, AY.useCallback)(((YY, rY, DY) => {
        sY(rY), WY(DY);
        const FY = Object.keys(YY);
        QY((YY => (null === YY || void 0 === YY ? void 0 : YY.size) === FY.length && FY.every((rY => YY.has(rY))) ? YY : new Set(FY)))
      }), [WY]), {
        gameState: mY
      } = (0, vY.j)(["gameState"]), [VY] = (0, AY.useState)((() => "inGame" === mY ? function(YY) {
        const rY = YY.querySelector(".InGameUi .TouchComponentsButtons");
        if (!rY) return null;
        const DY = {},
          FY = {};
        for (const gY of ir) {
          const YY = rY.querySelector(`.TouchSlot${gY} > .TouchKey`);
          if (YY) {
            var AY, IY;
            DY[gY] = YY.cloneNode(!0);
            const rY = (null !== (AY = null === (IY = YY.querySelector(".TouchKeyLabel")) || void 0 === IY ? void 0 : IY.textContent) && void 0 !== AY ? AY : "").split(/\s+/).filter((YY => !/[\d\xd7]/.test(YY))).join(" ");
            rY && (FY[gY] = rY)
          }
        }
        const RY = rY => {
            const DY = YY.querySelector(`.InGameUi ${rY}`);
            return null !== DY && !DY.classList.contains("Hidden")
          },
          OY = [...YY.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((YY => YY.cloneNode(!0)));
        return {
          faces: DY,
          names: FY,
          shop: RY(".TouchInventoryKey.ShopKey"),
          bag: RY(".TouchInventoryKey.BagKey"),
          items: OY
        }
      }(document) : null)), lY = (0, AY.useRef)(null), TY = (0, AY.useRef)(null), BY = function(YY) {
        const [rY, DY] = (0, AY.useState)((() => .4 * window.innerHeight));
        return (0, AY.useLayoutEffect)((() => {
          var rY;
          const FY = null === (rY = YY.current) || void 0 === rY ? void 0 : rY.closest(".SettingsMenuRight");
          if (!FY) return;
          const AY = () => {
            const YY = FY.clientHeight < HD ? .4 : .5;
            DY(Math.max(80, FY.clientHeight * YY - 24))
          };
          AY();
          const IY = new ResizeObserver(AY);
          return IY.observe(FY), () => {
            IY.disconnect()
          }
        }), [YY]), rY
      }(TY), cY = (0, lD.n)(DY.joystickMode), HY = DY.touchActionButtons, zY = (0, AY.useMemo)((() => function(YY, rY) {
        const DY = {},
          FY = [
            ["extra", "X"],
            ["game", "G"]
          ];
        rY || FY.push(["attack", "P"]);
        for (const [AY, IY] of FY) {
          const rY = null === YY || void 0 === YY ? void 0 : YY.names[IY];
          rY && (DY[AY] = rY)
        }
        return DY
      }(VY, HY)), [VY, HY]);
      (0, AY.useEffect)((() => {
        (0, eY.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [ZY, CY] = (0, AY.useState)(!1), [fY, JY] = (0, AY.useState)(!1), MY = (0, AY.useRef)(null);
      yD(MY, !fY);
      const [bY, XY] = (0, AY.useState)(!1), qY = (0, AY.useCallback)((() => {
        XY(!1)
      }), []), pY = (0, AY.useMemo)((() => new Set(RY.hudLocked)), [RY.hudLocked]), kY = YY => {
        var rY, DY;
        const FY = (0, KY.n)(),
          AY = YY(FY);
        (0, KY.N)(null !== (rY = null === (DY = lY.current) || void 0 === DY ? void 0 : DY.keepLocks(FY, AY)) && void 0 !== rY ? rY : AY)
      }, GY = (YY, rY) => {
        kY((DY => (0, KY.U)(DY, IY, YY, rY)))
      }, xY = (YY, rY, DY) => {
        GY(YY, {
          dx: rY,
          dy: DY
        }), (0, eY.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${YY}`
        })
      }, UY = (YY, rY) => {
        kY((DY => (0, KY.V)(DY, IY, YY, rY)))
      }, LY = YY => {
        const rY = hY[YY];
        return (rY.move || rY.scale) && ("joystick" !== YY || cY) && !dY(YY, RY.hudElements[YY])
      }, tY = YY => hY[YY].move && ("joystick" !== YY || cY) && !pY.has(YY), Yr = new Set(jY.map((YY => YY.id)).filter((YY => {
        var rY;
        return null === yY || yY.has(YY) || 1 === (null === (rY = RY.hudElements[YY]) || void 0 === rY ? void 0 : rY[3])
      }))), rr = {
        present: Yr,
        actionButtons: HY,
        keyNames: zY,
        scaleCaps: oY,
        sizeBesidePreview: ZY,
        elements: RY.hudElements,
        selected: OY,
        onSelect: gY,
        onScalePreview: (YY, rY) => {
          var DY;
          null === (DY = lY.current) || void 0 === DY || DY.setScale(YY, rY)
        },
        onScale: (YY, rY) => {
          GY(YY, {
            scale: rY
          }), (0, eY.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${YY}`
          })
        },
        onHidden: (YY, rY) => {
          GY(YY, {
            hidden: rY
          }), (0, eY.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${rY?"hide":"show"}:${YY}`
          })
        },
        onReset: YY => {
          GY(YY, KY.b)
        },
        locked: pY,
        lockable: LY,
        onLocked: UY,
        note: (rY, DY) => {
          var FY;
          const AY = DY && uY.length > 0 ? YY("hudLayout:overlapsNote", {
            names: wY(uY, HY, YY, zY)
          }) : null;
          return DY && nY(rY, cY) ? (0, SY.jsxs)(SY.Fragment, {
            children: [AY && (0, SY.jsx)("span", {
              children: AY
            }), (0, SY.jsx)("span", {
              children: YY("hudLayout:floatingJoystickNote")
            }), !ZY && (0, SY.jsx)(PY, {})]
          }) : AY || (DY && pY.has(rY) ? YY("hudLayout:lockedNote") : DY && "cluster" === rY ? YY("hudLayout:clusterNote") : DY && "arrows" === rY ? YY("hudLayout:arrowsNote") : "inventory" === rY && 1 === (null === (FY = RY.hudElements.inventory) || void 0 === FY ? void 0 : FY[3]) ? YY("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, SY.jsxs)("div", {
        ref: TY,
        className: "HudLayoutSettings",
        children: [(0, SY.jsxs)("div", {
          ref: MY,
          className: "HudLayoutBody",
          children: [(0, SY.jsx)("div", {
            className: "HudLayoutOrientation",
            children: YY("landscape" === IY ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, SY.jsx)(VD, {
            preview: {
              layout: rY,
              orientation: IY,
              selected: OY,
              onSelect: gY,
              onMove: xY,
              canMove: tY,
              actionButtons: HY,
              joystickFixed: cY,
              presence: VY,
              keyNames: zY,
              maxHeight: BY,
              apiRef: lY,
              onMeasured: EY,
              onReady: JY,
              lockable: LY
            },
            quick: {
              layout: RY,
              actionButtons: HY,
              keyNames: zY,
              scaleCaps: oY,
              overlaps: uY,
              onScale: rr.onScale,
              onHidden: rr.onHidden,
              onReset: rr.onReset,
              locked: pY,
              lockable: LY,
              onLocked: UY
            },
            onFullScreen: () => {
              XY(!0)
            },
            resting: bY,
            onSidePanel: CY
          }), bY && (0, SY.jsx)(oD, {
            layout: rY,
            orientation: IY,
            selected: OY,
            onSelect: gY,
            onMove: xY,
            canMove: tY,
            actionButtons: HY,
            joystickFixed: cY,
            presence: VY,
            keyNames: zY,
            onScale: rr.onScale,
            onHidden: rr.onHidden,
            onReset: rr.onReset,
            locked: pY,
            lockable: LY,
            onLocked: UY,
            apiRef: lY,
            onClose: qY
          }), (0, SY.jsx)(cD, {
            safe: RY.hudSafe,
            onCommit: YY => {
              kY((rY => (0, KY.X)(rY, IY, YY)))
            },
            onPreview: YY => {
              var rY;
              null === (rY = lY.current) || void 0 === rY || rY.setSafe(YY)
            }
          }), (0, SY.jsx)(iY.c, {
            label: YY("hudLayout:snapCentre"),
            checked: rY.hudSnapCentre,
            onClick: YY => {
              (0, KY.K)(YY)
            },
            circleInfoText: YY("hudLayout:snapCentreInfo")
          }), (0, SY.jsx)(mD, {
            ...rr
          }), (0, SY.jsx)(iY.f, {
            label: YY("hudLayout:shape"),
            options: KY.z.map((rY => ({
              value: rY,
              label: YY(`hudLayout:shape_${rY}`)
            }))),
            value: rY.hudShape,
            onChange: YY => {
              kY((rY => ({
                ...rY,
                hudShape: YY
              }))), (0, eY.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: YY
              })
            }
          }), (0, SY.jsx)(iY.j, {
            name: YY("hudLayout:opacity"),
            min: KY.d,
            max: 1,
            step: .05,
            initValue: rY.hudKeyOpacity,
            format: YY => `${Math.round(100*YY)}%`,
            circleInfoText: YY("hudLayout:opacityInfo"),
            onChange: YY => {
              var rY;
              null === (rY = lY.current) || void 0 === rY || rY.setOpacity(YY)
            },
            onChangeComplete: YY => {
              (0, KY.J)(YY), (0, eY.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, SY.jsx)(aY.D, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const YY = NY.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0,
                padStartsOnCancel: !0
              });
              !0 === await YY.getResult() && (0, KY.I)()
            }()
          },
          children: YY("hudLayout:resetAll")
        })]
      })
    }
    const HD = 350;
    const zD = [function() {
      const {
        t: YY
      } = (0, FY.C)(), {
        joystickMode: rY,
        touchSpeedCurve: DY,
        autorun: AY,
        jumpLock: IY
      } = (0, vY.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, SY.jsxs)(SY.Fragment, {
        children: [(0, SY.jsx)(iY.f, {
          label: YY("settingsMenu:joystick"),
          options: VY.zb.map((rY => ({
            value: rY,
            label: YY(lY[rY])
          }))),
          value: rY,
          onChange: YY => {
            vY.b.setClientEscMenuOptions({
              joystickMode: YY
            })
          },
          circleInfoText: YY("settingsMenu:joystickInfo")
        }), (0, SY.jsx)(iY.c, {
          label: YY("settingsMenu:preciseWalking"),
          checked: DY,
          onClick: YY => {
            vY.b.setClientEscMenuOptions({
              touchSpeedCurve: YY
            })
          },
          circleInfoText: YY("settingsMenu:preciseWalkingInfo")
        }), (0, SY.jsx)(iY.c, {
          label: YY("settingsMenu:autoRun"),
          checked: AY,
          onClick: YY => {
            vY.b.setClientEscMenuOptions({
              autorun: YY
            })
          },
          circleInfoText: YY("settingsMenu:autoRunInfo")
        }), (0, SY.jsx)(iY.c, {
          label: YY("settingsMenu:jumpLock"),
          checked: IY,
          onClick: YY => {
            vY.b.setClientEscMenuOptions({
              jumpLock: YY
            })
          },
          circleInfoText: YY("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, SY.jsx)(mY.c, {})
    }, function() {
      const {
        t: YY
      } = (0, FY.C)(), {
        clientEscMenuOptions: rY
      } = (0, vY.j)(["clientEscMenuOptions"]);
      return (0, TY.d)() ? (0, SY.jsx)(iY.c, {
        label: YY("settingsMenu:vibration"),
        checked: rY.vibration,
        onClick: YY => {
          vY.b.setClientEscMenuOptions({
            vibration: YY
          })
        },
        circleInfoText: YY("settingsMenu:vibrationInfo")
      }) : null
    }, function() {
      const {
        t: YY
      } = (0, FY.C)(), [rY, DY] = (0, AY.useState)(!1), IY = (0, AY.useRef)(null);
      return (0, AY.useEffect)((() => {
        var YY;
        rY && (null === (YY = IY.current) || void 0 === YY || YY.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [rY]), (0, SY.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, SY.jsxs)("button", {
          ref: IY,
          type: "button",
          className: "SettingBox HudLayoutEntry",
          "aria-expanded": rY,
          onClick: () => {
            DY(!rY)
          },
          children: [(0, SY.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, SY.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: YY("hudLayout:title")
            }), (0, SY.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: YY("hudLayout:entrySub")
            })]
          }), (0, SY.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), rY && (0, SY.jsx)(KD, {})]
      })
    }];

    function ZD() {
      return (0, SY.jsx)(SY.Fragment, {
        children: zD.map(((YY, rY) => (0, SY.jsx)(YY, {}, rY)))
      })
    }
    var CD = DY(3926);

    function fD() {
      const {
        t: YY
      } = (0, FY.C)(), {
        isTouchScreen: rY,
        clientEscMenuOptions: DY,
        gameState: RY
      } = (0, vY.j)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), OY = (0, yY.j)("ezBridging"), gY = (0, yY.j)("ezTowering"), oY = "inGame" !== RY || !0 === OY, WY = (0, QY.h)() && ("inGame" !== RY || !0 === gY), [, mY] = (0, AY.useReducer)((YY => YY + 1), 0), VY = (0, EY.g)(), [lY, TY] = (0, AY.useState)(CD.e);
      return (0, SY.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [VY && (0, SY.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, SY.jsx)("div", {
            children: YY("controller:settingsControlsNote")
          }), (0, SY.jsx)(aY.J, {
            onClick: () => {
              vY.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: YY("controller:settingsOpenController")
          })]
        }), (0, uY.isTouchscreen)() && !(0, uY.isMobile)() ? (0, SY.jsx)(SY.Fragment, {
          children: (0, SY.jsx)(iY.c, {
            label: YY("settingsMenu:useTouchControls"),
            checked: lY,
            onClick: YY => {
              (0, CD.b)(YY), TY(YY)
            }
          })
        }) : null, rY && (0, SY.jsx)(ZD, {}), oY && (0, SY.jsx)(iY.c, {
          label: YY("settingsMenu:ezBridging"),
          checked: DY.ezBridging,
          onClick: YY => {
            vY.b.setClientEscMenuOptions({
              ezBridging: YY
            })
          },
          circleInfoText: YY("settingsMenu:ezBridgingInfo")
        }), WY && (0, SY.jsx)(iY.c, {
          label: YY("settingsMenu:ezTowering"),
          checked: DY.ezTowering,
          onClick: YY => {
            vY.b.setClientEscMenuOptions({
              ezTowering: YY
            })
          },
          circleInfoText: YY("settingsMenu:ezToweringInfo")
        }), (0, SY.jsx)(iY.c, {
          label: YY("settingsMenu:crouchToggle"),
          checked: DY.crouchIsToggle,
          onClick: YY => {
            vY.b.setClientEscMenuOptions({
              crouchIsToggle: YY
            })
          },
          circleInfoText: YY("settingsMenu:crouchToggleInfo")
        }), (0, SY.jsx)(iY.c, {
          label: YY("settingsMenu:hideUiToggle"),
          checked: DY.hideUiIsToggle,
          onClick: YY => {
            vY.b.setClientEscMenuOptions({
              hideUiIsToggle: YY
            })
          },
          circleInfoText: YY("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, sY.d)() && (0, SY.jsx)(iY.j, {
          name: YY("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: DY.touchscreenSensitivity,
          onChange: YY => {
            vY.b.setClientEscMenuOptions({
              touchscreenSensitivity: YY
            })
          }
        }), !(0, uY.isMobile)() && (0, SY.jsx)(iY.j, {
          name: YY("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: DY.mouseSensitivity,
          onChange: YY => {
            vY.b.setClientEscMenuOptions({
              mouseSensitivity: YY
            })
          }
        }), !(0, uY.isMobile)() && (0, SY.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, SY.jsx)("div", {
            className: "SliderText",
            children: YY("settingsMenu:keyBindings")
          }), IY.e.map((rY => (0, SY.jsx)(jD, {
            title: YY(rY.name.translationKey, rY.name.params),
            defaultOpen: IY.i.has(rY.id),
            children: rY.actions.map((YY => (0, SY.jsx)(hD, {
              noaAction: YY,
              forceUpdate: mY,
              clashesWith: rY.clashesWith,
              showPadGlyph: VY
            }, YY)))
          }, rY.name.translationKey))), (0, SY.jsx)(aY.D, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, IY.D)(), mY()
            },
            children: YY("controls:resetBindings")
          })]
        })]
      })
    }

    function jD(YY) {
      let {
        title: rY,
        defaultOpen: DY,
        children: FY
      } = YY;
      const [IY, RY] = (0, AY.useState)(DY);
      return (0, SY.jsxs)("div", {
        className: gY()("ControlsSection", {
          Collapsed: !IY
        }),
        children: [(0, SY.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            RY(!IY)
          },
          children: [(0, SY.jsx)("div", {
            className: "ControlsSectionTitle",
            children: rY
          }), (0, SY.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), IY && (0, SY.jsx)("div", {
          className: "ControlsSectionRows",
          children: FY
        })]
      })
    }

    function hD(YY) {
      let {
        noaAction: rY,
        forceUpdate: DY,
        clashesWith: OY,
        showPadGlyph: vY
      } = YY;
      const {
        t: uY
      } = (0, FY.C)(), sY = (0, WY.b)(rY), [iY, yY] = (0, AY.useState)(!1), [QY, EY] = (0, AY.useState)("controls:clickToEnterNewBinding"), [mY, VY] = (0, AY.useState)(null), [lY, TY] = (0, AY.useState)(null), eY = (0, AY.useRef)(null);
      (0, AY.useEffect)((() => {
        iY && eY.current && eY.current.focus()
      }), [iY]);
      const NY = IY.u[rY].filter((YY => RY.f[YY]));
      let BY = null;
      const cY = [],
        KY = OY.flatMap((YY => {
          var rY, DY;
          return null !== (rY = null === (DY = IY.e.find((rY => rY.id === YY))) || void 0 === DY ? void 0 : DY.actions) && void 0 !== rY ? rY : []
        }));
      for (const FY of KY) {
        if (FY === rY) continue;
        const YY = IY.u[FY];
        for (const rY of YY) NY.includes(rY) && cY.push(uY(IY.x[FY].translationKey, IY.x[FY].params))
      }
      cY.length > 0 && (BY = uY("controls:sharedBindingsWarning") + " ", BY += cY.join(", "));
      const HY = () => {
          yY(!1), VY(null), EY("controls:clickToEnterNewBinding"), TY(null)
        },
        zY = () => "BindingInput_" + rY;
      return (0, SY.jsxs)("div", {
        className: gY()("ControlRow", {
          WarningBorder: null !== BY
        }),
        children: [(0, SY.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, SY.jsxs)("div", {
            className: "ControlName",
            children: [uY(IY.x[rY].translationKey, IY.x[rY].params), vY && sY && (0, SY.jsx)(oY.c, {
              glyph: sY,
              className: "ControlPadGlyph"
            })]
          }), (0, SY.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, SY.jsxs)("div", {
              className: "ControlBindingsList",
              children: [NY.map((YY => (0, SY.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, SY.jsx)("div", {
                  children: (0, IY.n)(YY)
                }), (0, SY.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const FY = (0, IY.z)(rY, YY);
                    FY.isError() ? TY(FY.asError().message) : TY(null), DY()
                  },
                  children: "\xd7"
                })]
              }, YY))), !iY && (0, SY.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  yY(!0), TY(null)
                },
                children: (0, SY.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), iY && (0, SY.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, SY.jsxs)("div", {
                className: "InputContainer",
                children: [(0, SY.jsx)("div", {
                  className: "InputOverlay",
                  children: mY ? (0, IY.n)(mY) : (0, SY.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: uY(QY)
                  })
                }), (0, SY.jsx)("input", {
                  ref: eY,
                  id: zY(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: YY => {
                    if ("Escape" === YY.code) return HY(), YY.preventDefault(), void YY.stopPropagation();
                    const rY = YY.code;
                    RY.b.includes(rY) ? (TY(null), VY(rY)) : (TY("controls:keyIsReserved"), VY(null)), YY.preventDefault(), YY.stopPropagation()
                  },
                  onMouseDown: YY => {
                    const rY = "Mouse" + (YY.button + 1);
                    document.activeElement && document.activeElement.id === zY() ? RY.b.includes(rY) ? (TY(null), VY(rY)) : (TY("controls:keyIsReserved"), VY(null)) : EY("controls:enterNewBinding"), YY.stopPropagation()
                  },
                  onBlur: () => {
                    EY("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, SY.jsx)(aY.f, {
                onPointerDown: YY => {
                  YY.preventDefault()
                },
                onClick: () => {
                  (0, IY.c)(rY, mY), DY(), HY()
                },
                className: "ControlBindingAddButton",
                disabled: null === mY,
                children: uY("general:add")
              }), (0, SY.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  HY()
                },
                children: "\xd7"
              })]
            }), lY && (0, SY.jsx)("div", {
              className: "ControlBindingError",
              children: uY(lY)
            })]
          })]
        }), BY && (0, SY.jsx)("div", {
          className: "ControlRowWarning",
          children: BY
        })]
      })
    }
  },
  8291: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY,
      f: () => IY
    });
    var FY = DY(61),
      AY = DY(3944);

    function IY() {
      const [YY, rY] = (0, FY.useState)(AY.i);
      return (0, FY.useEffect)((() => {
        const YY = () => {
          rY((0, AY.i)())
        };
        return window.addEventListener("resize", YY), () => {
          window.removeEventListener("resize", YY)
        }
      }), []), YY
    }

    function RY() {
      return (0, AY.T)().hudLayouts[IY()]
    }
  },
  8253: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY
    });
    var FY = DY(19),
      AY = DY(3e3),
      IY = DY(1346),
      RY = DY(1384);
    const OY = async () => {
      if ((0, RY.f)()) {
        if (!0 !== await IY.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== FY.b.get("gameState")) return
      }(0, AY.e)()
    }
  },
  8255: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => gY,
      g: () => IY,
      k: () => RY,
      m: () => AY,
      p: () => OY
    });
    var FY = DY(1828);
    const AY = "controllerPadShopOpen",
      IY = YY => FY.j.includes(YY),
      RY = YY => Object.values(YY).some((YY => !1 !== YY.canBuy && !YY.isRewardedAd)),
      OY = (YY, rY, DY) => {
        var FY, AY, RY, OY;
        const gY = YY.filter((YY => !IY(YY))),
          aY = null !== rY && YY.includes(rY) ? rY : null;
        return null !== aY && !IY(aY) && DY(aY) ? aY : null !== (FY = null !== (AY = null !== (RY = null !== (OY = gY.find(DY)) && void 0 !== OY ? OY : gY[0]) && void 0 !== RY ? RY : aY) && void 0 !== AY ? AY : YY[0]) && void 0 !== FY ? FY : null
      },
      gY = YY => YY.userInput || YY.isRewardedAd || "boolean" === typeof YY.isSelected ? null : JSON.stringify([YY.image, YY.cost, YY.currency, YY.amount, YY.customTitle, YY.buyButtonText, YY.description, YY.canBuy])
  },
  8273: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => aY,
      g: () => vY
    });
    var FY = DY(61),
      AY = DY(1430),
      IY = DY(1874),
      RY = DY(1392),
      OY = DY(1410),
      gY = DY(1125);
    const aY = () => {
        const YY = (0, RY.u)();
        if ((0, FY.useEffect)((() => {
            (0, RY.o)()
          }), []), !YY) return null;
        const {
          ControllerCategory: rY
        } = YY;
        return (0, gY.jsx)(OY.b, {
          children: (0, gY.jsx)(rY, {})
        })
      },
      vY = () => {
        var YY;
        const rY = (0, RY.u)(),
          [, DY] = (0, FY.useReducer)((YY => YY + 1), 0);
        return (0, AY.g)(IY.e, DY), null !== (YY = null === rY || void 0 === rY ? void 0 : rY.hasActivePad()) && void 0 !== YY && YY
      }
  },
  8287: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      f: () => gY
    });
    var FY = DY(19),
      AY = DY(1322),
      IY = DY(99);
    const RY = {
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

    function OY() {
      return (0, IY.isMobile)() && "function" === typeof navigator.vibrate
    }
    const gY = new class {
      constructor(YY) {
        this.deps = YY, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(YY, rY) {
        var DY;
        if (!this.deps.enabled()) return;
        const FY = RY[YY],
          AY = null !== rY && void 0 !== rY ? rY : FY.pattern;
        if (null === AY) return void console.warn("No vibration pattern for", YY);
        const IY = this.deps.now();
        IY - this.lastAnyAt < 40 && FY.priority < this.playingPriority || IY - (null !== (DY = this.lastAt.get(YY)) && void 0 !== DY ? DY : -1 / 0) < FY.minGapMs || IY < this.playingUntil && FY.priority < this.playingPriority || (this.lastAt.set(YY, IY), this.lastAnyAt = IY, this.playingUntil = IY + AY.reduce(((YY, rY) => YY + rY), 0), this.playingPriority = FY.priority, this.deps.vibrate(AY))
      }
    }({
      vibrate: YY => {
        navigator.vibrate([...YY])
      },
      now: () => performance.now(),
      enabled: () => OY() && FY.b.get("isTouchScreen") && FY.b.get("clientEscMenuOptions").vibration && !(0, AY.d)()
    })
  },
  8181: (YY, rY, DY) => {
    function FY(YY, rY) {
      return !YY.hidden && (rY || !YY.isRewardedAd)
    }

    function AY(YY) {
      return "object" === typeof YY ? YY.option : YY
    }

    function IY(YY, rY) {
      var DY;
      if ("dropdown" === (null === (DY = YY.userInput) || void 0 === DY ? void 0 : DY.type) && "object" === typeof YY.userInput.dropdownOptions[0]) {
        for (const DY of YY.userInput.dropdownOptions)
          if (AY(DY) === rY) return "object" === typeof DY ? DY.cost : YY.cost;
        console.error("Didn't find matching option for dropdown item. Item:", YY, "input:", rY)
      }
      return YY.cost
    }

    function RY(YY, rY, DY) {
      var FY;
      const AY = null !== (FY = DY.excludedPlayers) && void 0 !== FY ? FY : [rY];
      return YY.filter((YY => !AY.includes(YY)))
    }
    DY.d(rY, {
      c: () => IY,
      e: () => AY,
      i: () => RY,
      m: () => FY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);