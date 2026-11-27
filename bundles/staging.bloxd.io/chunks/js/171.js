export const id = 171;
export const ids = [171];
export const modules = {
  9607: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue
    });
    var ye = He(18),
      be = He(1127),
      Me = He(5501),
      Ke = He(1228);

    function Ue(ee) {
      let {
        note: ie
      } = ee;
      const {
        t: He
      } = (0, be.v)(), {
        clientEscMenuOptions: Ue
      } = (0, ye.m)(["clientEscMenuOptions"]);
      return (0, Ke.jsx)(Me.c, {
        label: He("touchSettings:actionButtons"),
        checked: Ue.touchActionButtons,
        onClick: ee => {
          ye.e.setClientEscMenuOptions({
            touchActionButtons: ee
          })
        },
        circleInfoText: He("touchSettings:actionButtonsInfo"),
        note: ie
      })
    }
  },
  9595: (ee, ie, He) => {
    He.d(ie, {
      b: () => PH,
      c: () => DH
    });
    var ye = He(1127),
      be = He(59),
      Me = He(2046),
      Ke = He(2054),
      Ue = He(1053),
      Fe = He.n(Ue),
      Je = He(1438),
      oe = He(18),
      Re = He(97),
      ke = He(107),
      qe = He(5501),
      fe = He(2532),
      Te = He(272),
      pe = He(2059),
      Xe = He(2061),
      ze = He(9598),
      Be = He(9607),
      Ee = He(335),
      ge = He(1228);
    const Oe = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var de = He(9609);
    var We = He(1464),
      te = He(1340),
      Ze = He(9614),
      we = He(1403),
      De = He(1323),
      Pe = He(9620),
      Ae = He(2560);

    function Ye(ee) {
      let {
        className: ie,
        keepPlace: He
      } = ee;
      return He ? (0, ge.jsx)("div", {
        className: Fe()(ie, "Placeholder")
      }) : null
    }

    function Ve(ee) {
      let {
        id: ie,
        elements: He,
        actionButtons: be,
        keyNames: Me,
        className: Ke,
        keepPlace: Ue,
        onHidden: Fe
      } = ee;
      const {
        t: oe
      } = (0, ye.v)();
      if (!Pe.l[ie].hide) return (0, ge.jsx)(Ye, {
        className: Ke,
        keepPlace: Ue
      });
      const Re = (0, Ae.m)(He, ie);
      return (0, ge.jsx)(Je.M, {
        className: Ke,
        ariaLabel: oe(Re ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: (0, Pe.B)(ie, be, oe, Me)
        }),
        pressed: !Re,
        onClick: () => {
          Fe(ie, !Re)
        },
        children: (0, ge.jsx)(De.e, {
          name: Re ? "eye-slash" : "eye"
        })
      })
    }

    function ae(ee) {
      let {
        id: ie,
        elements: He,
        actionButtons: be,
        keyNames: Me,
        className: Ke,
        keepPlace: Ue,
        onlyWhenMoved: Fe,
        locked: oe,
        onReset: Re
      } = ee;
      const {
        t: ke
      } = (0, ye.v)(), qe = Pe.l[ie], fe = (0, Ae.I)(He[ie]);
      return !qe.move && !qe.scale || Fe && fe ? (0, ge.jsx)(Ye, {
        className: Ke,
        keepPlace: Ue
      }) : (0, ge.jsx)(Je.M, {
        className: Ke,
        disabled: fe || oe,
        ariaLabel: ke("hudLayout:resetElement", {
          name: (0, Pe.B)(ie, be, ke, Me)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: ie
        },
        onClick: ee => {
          Fe && Ce(ee.currentTarget), Re(ie)
        },
        children: (0, ge.jsx)(De.e, {
          name: "rotate-left"
        })
      })
    }

    function ce(ee) {
      let {
        id: ie,
        actionButtons: He,
        keyNames: be,
        className: Me,
        keepPlace: Ke,
        locked: Ue,
        lockable: Fe,
        onLocked: oe
      } = ee;
      const {
        t: Re
      } = (0, ye.v)();
      return Fe || Ue ? (0, ge.jsx)(Je.M, {
        className: Me,
        ariaLabel: Re(Ue ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: (0, Pe.B)(ie, He, Re, be)
        }),
        pressed: Ue,
        active: Ue,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${Ue?"unlock":"lock"}:${ie}`
        },
        onClick: () => {
          oe(ie, !Ue)
        },
        children: (0, ge.jsx)(De.e, {
          name: Ue ? "lock" : "lock-open"
        })
      }) : (0, ge.jsx)(Ye, {
        className: Me,
        keepPlace: Ke
      })
    }

    function xe(ee) {
      let {
        className: ie,
        open: He,
        name: be,
        onToggle: Me
      } = ee;
      const {
        t: Ke
      } = (0, ye.v)();
      return (0, ge.jsx)(Je.M, {
        className: ie,
        ariaLabel: Ke(He ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: be
        }),
        pressed: He,
        analyticsClick: {
          id: "hud_layout.children",
          value: He ? "close" : "open"
        },
        onClick: () => {
          Me(!He)
        },
        children: (0, ge.jsx)(De.e, {
          name: He ? "angle-up" : "angle-down"
        })
      })
    }

    function Le(ee, ie) {
      var He;
      ee.contains(document.activeElement) && ie.focus({
        preventScroll: !0
      }), null === (He = (0, we.f)()) || void 0 === He || He.handOverPadFocus(ee, ie)
    }

    function Ce(ee) {
      const ie = ee.closest("[data-hud-row]"),
        He = null === ie || void 0 === ie ? void 0 : ie.querySelector(".HudElementRowName");
      return !(!ie || !He) && (Le(ie, He), !0)
    }
    const ve = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function ue(ee, ie) {
      return "joystick" === ee && !ie
    }

    function me() {
      const {
        t: ee
      } = (0, ye.v)();
      return (0, ge.jsx)(Je.M, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: ee => {
          const ie = ee.currentTarget;
          if (!Ce(ie)) {
            const ee = function(ee) {
              var ie, He;
              const ye = [ee.previousElementSibling, ee.nextElementSibling].find((ee => ee instanceof HTMLElement && ee.matches(ve)));
              return null !== (ie = null !== ye && void 0 !== ye ? ye : null === (He = ee.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === He ? void 0 : He.querySelector(`:is(${ve}):not(.HudFixJoystickButton)`)) && void 0 !== ie ? ie : null
            }(ie);
            ee && Le(ie, ee)
          }
          oe.e.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: ee("hudLayout:fixJoystick")
      })
    }
    var le = He(77),
      Se = He(1215),
      ne = He(3416),
      je = He(2957),
      se = He(9629),
      Ie = He(9637),
      he = He(2565),
      Ne = He(2591),
      Ge = He(3465),
      re = He(9645);
    const Qe = ee => ({
      [Pe.h]: ee
    });

    function ei(ee) {
      let {
        id: ie,
        slot: He,
        icon: ye,
        label: Me,
        hidden: Ke,
        className: Ue,
        face: Je
      } = ee;
      const oe = (0, be.useRef)(null);
      return (0, be.useLayoutEffect)((() => {
        Je && oe.current && (0, re.j)(oe.current, Je)
      }), [Je]), (0, ge.jsxs)("div", {
        className: Fe()("TouchKeyHit", `TouchSlot${He}`, Ue, {
          HudPreviewGhost: Ke.has(ie)
        }),
        ...Qe(ie),
        children: [Je && (0, ge.jsx)("div", {
          ref: oe,
          className: Fe()("TouchKey", {
            Labelled: Je.classList.contains("Labelled")
          })
        }), !Je && (0, ge.jsxs)("div", {
          className: Fe()("TouchKey", {
            Labelled: void 0 !== Me
          }),
          children: [ye && (0, ge.jsx)(De.e, {
            name: ye
          }), void 0 !== Me && (0, ge.jsx)("span", {
            className: "TouchKeyLabel",
            children: Me
          })]
        })]
      })
    }

    function ii(ee) {
      let {
        item: ie,
        selected: He
      } = ee;
      const ye = (0, be.useRef)(null);
      return (0, be.useLayoutEffect)((() => {
        ye.current && (0, re.j)(ye.current, ie)
      }), [ie]), (0, ge.jsx)("div", {
        ref: ye,
        className: Fe()("InvenItem", {
          Selected: He
        })
      })
    }
    const Hi = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      yi = ee => void 0 === ee ? {} : {
        style: {
          "--parked": ee
        }
      };

    function bi(ee) {
      let {
        id: ie,
        hidden: He,
        parked: ye,
        unslotted: be = !1
      } = ee;
      return (0, ge.jsx)("div", {
        className: Fe()("TopRightIcon", Ne.o[ie], {
          HudPreviewGhost: He.has(ie),
          [he.e]: void 0 !== ye,
          [he.g]: be
        }),
        ...yi(ye),
        children: (0, ge.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...Qe(ie),
          children: (0, ge.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, ge.jsx)(De.e, {
              name: Hi[ie]
            })
          })
        })
      })
    }

    function Mi(ee) {
      let {
        portraitPhone: ie,
        icons: He,
        pinnedIcons: ye,
        hidden: Me,
        moved: Ke,
        trayState: Ue
      } = ee;
      const Je = ie ? (0, he.A)(He) : [],
        oe = He.filter((ee => "settings" === ee)),
        Re = He.filter((ee => "settings" !== ee && !Je.includes(ee))).reverse(),
        ke = Je.length > 0 && "gone" === Ue,
        qe = [...oe, ...ke ? ["tray"] : [], ...Re].filter((ee => "tray" === ee || Me.has(ee) && !Ke.has(ee))),
        fe = ee => {
          const ie = qe.indexOf(ee);
          return ie < 0 ? void 0 : ie
        },
        Te = (ee, ie) => (0, ge.jsx)(bi, {
          id: ee,
          hidden: Me,
          parked: ie ? fe(ee) : void 0,
          unslotted: ie && Me.has(ee) && Ke.has(ee)
        }, ee);
      return (0, ge.jsxs)("div", {
        className: Fe()("TopRightIcons TouchInGame", {
          Column: ie
        }),
        children: [oe.map((ee => Te(ee, !0))), Je.length > 0 && (0, ge.jsxs)("div", {
          className: Fe()("TopRightIcon TopRightTrayToggle Open", {
            [he.e]: ke
          }),
          ...yi(fe("tray")),
          children: [(0, ge.jsx)("div", {
            className: Fe()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== Ue
            }),
            children: (0, ge.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, ge.jsx)(De.e, {
                name: "ellipsis"
              })
            })
          }), (0, ge.jsx)("div", {
            className: "TopRightTray",
            children: Je.map((ee => Te(ee, !1)))
          })]
        }), Re.map((ee => (0, ge.jsxs)(be.Fragment, {
          children: ["perspective" === ee && null !== ye.rightOfCamera && (0, ge.jsx)(Ki, {
            icon: ye.rightOfCamera
          }), Te(ee, !0)]
        }, ee))), null !== ye.leftEnd && (0, ge.jsx)(Ki, {
          icon: ye.leftEnd
        })]
      })
    }

    function Ki(ee) {
      let {
        icon: ie
      } = ee;
      return (0, ge.jsx)("div", {
        className: "TopRightIcon",
        children: (0, ge.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, ge.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, ge.jsx)(De.e, {
              name: ie
            })
          })
        })
      })
    }

    function Ui(ee) {
      let {
        next: ie,
        hidden: He
      } = ee;
      return (0, ge.jsx)("div", {
        className: Fe()("HotBarArrow", ie ? "Next" : "Previous", {
          HudPreviewGhost: He
        }),
        ...Qe("arrows"),
        children: (0, ge.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, ge.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, ge.jsx)(De.e, {
              name: ie ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function Fi() {
      return (0, ge.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, ge.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, ge.jsx)("div", {
            className: "SocialBar",
            children: (0, ge.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, ge.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, ge.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, ge.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, ge.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, ge.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, ge.jsx)(De.e, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, ge.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, ge.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, ge.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, ge.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, ge.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, ge.jsx)(De.e, {
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
    const Ji = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      oi = {
        P: {
          icon: "crosshairs",
          labelKey: "touchKeys:scope"
        },
        X: {
          icon: "feather-pointed",
          labelKey: "touchKeys:fly"
        }
      },
      Ri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ki = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function qi(ee) {
      let {
        presence: ie,
        portraitPhone: He,
        hidden: be,
        actionButtons: Me,
        joystickFixed: Ke,
        keysAbove: Ue,
        auraBar: Je,
        trayState: oe,
        moved: ke
      } = ee;
      const {
        t: qe
      } = (0, ye.v)(), {
        faces: fe,
        items: Te
      } = ie, pe = ee => ({
        HudPreviewGhost: (0, Pe.M)(ee).some((ee => be.has(ee)))
      });
      return (0, ge.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, ge.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, ge.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, ge.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, ge.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, ge.jsx)("div", {
              className: "InGameHeaderGameName",
              children: qe("hudLayout:previewGameName")
            })]
          })
        }), (0, ge.jsx)("div", {
          className: "TopLeftElements",
          children: (0, ge.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, ge.jsxs)("div", {
              className: "Chat",
              children: [(0, ge.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [qe("hudLayout:previewChatLine"), qe("hudLayout:previewChatJoined", {
                  name: "Arthur"
                }), qe("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((ee => (0, ge.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, ge.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, ge.jsx)("div", {
                      className: "IndividualText",
                      children: ee
                    })
                  })
                }, ee)))
              }), (0, ge.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: Fe()("ChatIconWrapper SmallTextLight", pe("chat")),
                ...Qe("chat"),
                children: (0, ge.jsx)(De.e, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, ge.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, ge.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, ge.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, ge.jsx)("div", {
                className: "TopRightIconsContainer",
                ...Qe("menu"),
                children: (0, ge.jsx)(Mi, {
                  portraitPhone: He,
                  icons: ie.rowIcons,
                  pinnedIcons: ie.pinnedIcons,
                  hidden: be,
                  trayState: oe,
                  moved: ke
                })
              })
            }), Re.featureFlags.useSocialFeatures && (0, ge.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, ge.jsx)(Fi, {})
            })]
          })
        }), (0, ge.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, ge.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, ge.jsxs)("div", {
            className: "TouchInteractKey",
            ...Qe("interact"),
            children: [(0, ge.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, ge.jsx)(De.e, {
                name: "hand-back-point-up"
              })
            }), (0, ge.jsx)("div", {
              children: qe("hudLayout:previewInteract")
            })]
          })
        }), (0, ge.jsx)("div", {
          className: "BottomCentre",
          children: (0, ge.jsxs)("div", {
            className: "BottomElements",
            children: [(0, ge.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, ge.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, ge.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...Qe("hotbar"),
                children: (0, ge.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, ge.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, ge.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, ge.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, ge.jsx)(De.e, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), Je && (0, ge.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, ge.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, ge.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, Ge.g)("glint"),
                    alt: ""
                  }), (0, ge.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, ge.jsx)("div", {
                  className: "AuraBar",
                  children: (0, ge.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, ge.jsx)("div", {
                className: "HotBarRow",
                children: (0, ge.jsx)("div", {
                  className: Fe()("HotBarContainer Touch", {
                    KeysAbove: Ue
                  }),
                  children: (0, ge.jsxs)("div", {
                    className: "HotBar",
                    ...Qe("hotbar"),
                    children: [(0, ge.jsxs)("div", {
                      className: Fe()("TouchInventoryKeys", {
                        NoAuraBar: !Je
                      }),
                      children: [(0, ge.jsx)("div", {
                        className: Fe()("TouchInventoryKey ShopKey", pe("shop"), {
                          Hidden: !ie.shop
                        }),
                        ...Qe("shop"),
                        children: (0, ge.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, ge.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, ge.jsx)(De.e, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, ge.jsx)("div", {
                        className: Fe()("TouchInventoryKey BagKey", pe("bag"), {
                          Hidden: !ie.bag
                        }),
                        ...Qe("bag"),
                        children: (0, ge.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, ge.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, ge.jsx)(De.e, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, ge.jsx)(Ui, {
                      next: !1,
                      hidden: be.has("arrows")
                    }), (0, ge.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== Te && Te.map(((ee, ie) => (0, ge.jsx)(ii, {
                        item: ee,
                        selected: ee.classList.contains("Selected")
                      }, ie))), null === Te && Ri.map((ee => {
                        const ie = ki[ee];
                        return (0, ge.jsx)("div", {
                          className: Fe()("InvenItem", {
                            Selected: 0 === ee
                          }),
                          children: ie && (0, ge.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, ge.jsx)(De.e, {
                              name: ie
                            })
                          })
                        }, ee)
                      }))]
                    }), (0, ge.jsx)(Ui, {
                      next: !0,
                      hidden: be.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, ge.jsx)("div", {
              className: "BottomRightElements",
              children: (0, ge.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== fe && re.e.map((ee => {
                  const ie = fe[ee];
                  return ie && (0, ge.jsx)(ei, {
                    id: re.d[ee],
                    slot: ee,
                    face: ie,
                    className: Ji[ee],
                    hidden: be
                  }, ee)
                })), (0, re.l)(ie, Me).map((ee => (0, ge.jsx)(ei, {
                  id: re.d[ee],
                  slot: ee,
                  icon: oi[ee].icon,
                  label: qe(oi[ee].labelKey),
                  className: "HudPreviewContextSlot",
                  hidden: be
                }, ee))), null === fe && (0, ge.jsxs)(ge.Fragment, {
                  children: [(0, ge.jsx)(ei, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: be
                  }), (0, ge.jsx)(ei, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: be
                  }), Me && (0, ge.jsxs)(ge.Fragment, {
                    children: [(0, ge.jsx)(ei, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: be
                    }), (0, ge.jsx)(ei, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: be
                    })]
                  }), (0, re.g)(Me).map((ee => (0, ge.jsx)(ei, {
                    id: re.d[ee],
                    slot: ee,
                    icon: oi[ee].icon,
                    label: qe(oi[ee].labelKey),
                    hidden: be
                  }, ee))), (0, ge.jsx)(ei, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: be
                  })]
                })]
              })
            })]
          })
        }), (0, ge.jsxs)("div", {
          className: "TouchMovementWrapper",
          children: [(0, ge.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, ge.jsxs)("div", {
              className: Fe()("Joystick Resting HudPreviewJoystick", {
                Floating: !Ke
              }),
              ...Qe("joystick"),
              children: [(0, ge.jsx)("div", {
                className: "JoystickBase"
              }), (0, ge.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          }), ie.sprint && (0, ge.jsx)("div", {
            className: Fe()("TouchSprintHit", pe("sprint"), {
              AtHome: !Ke
            }),
            ...Qe("sprint"),
            children: (0, ge.jsx)("div", {
              className: "TouchKey TouchSprintKey Lit",
              children: (0, ge.jsx)(De.e, {
                name: "person-running"
              })
            })
          })]
        })]
      })
    }

    function fi() {
      const [ee, ie] = (0, be.useState)({}), He = (0, be.useCallback)((ee => {
        ie((ie => [...new Set([...Object.keys(ie), ...Object.keys(ee)])].every((He => ie[He] === ee[He])) ? ie : ee))
      }), []);
      return [ee, He]
    }
    const Ti = .05;

    function Xi(ee) {
      var ie;
      let {
        selected: He,
        layout: be,
        actionButtons: Me,
        keyNames: Ke,
        overlaps: Ue,
        scaleCaps: oe,
        joystickFixed: Re,
        onScale: ke,
        onHidden: qe,
        onReset: fe,
        locked: Te,
        lockable: pe,
        onLocked: Xe,
        extra: ze
      } = ee;
      const {
        t: Be
      } = (0, ye.v)(), Ee = He ? Pe.l[He] : null, Oe = null !== He && Te.has(He), de = (He && be.hudElements[He] || Ae.k)[2], We = null !== (ie = He && oe[He]) && void 0 !== ie ? ie : Ae.h, te = ee => {
        He && ke(He, Math.min(We, Math.round(100 * (de + .1 * ee)) / 100))
      };
      return (0, ge.jsxs)(ge.Fragment, {
        children: [(0, ge.jsxs)("div", {
          className: Fe()("HudQuickName SmallTextBold", {
            Overlap: Ue.length > 0
          }),
          children: [Ue.length > 0 && (0, ge.jsx)(De.e, {
            name: "triangle-exclamation"
          }), Ee ? (0, Pe.B)(Ee.id, Me, Be, Ke) : Be("hudLayout:fullScreenHint"), Ue.length > 0 && (0, ge.jsx)("span", {
            className: "HudQuickOverlap",
            children: Be("hudLayout:overlapsShort", {
              names: (0, Pe.y)(Ue, Me, Be, Ke)
            })
          })]
        }), (null === Ee || void 0 === Ee ? void 0 : Ee.scale) && (0, ge.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, ge.jsx)(Je.M, {
            disabled: Oe || de <= Ae.j,
            ariaLabel: Be("hudLayout:smaller"),
            onClick: () => {
              te(-1)
            },
            children: (0, ge.jsx)(De.e, {
              name: "minus"
            })
          }), (0, ge.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*de)}%`
          }), (0, ge.jsx)(Je.M, {
            disabled: Oe || de >= We,
            ariaLabel: Be("hudLayout:larger"),
            onClick: () => {
              te(1)
            },
            children: (0, ge.jsx)(De.e, {
              name: "plus"
            })
          })]
        }), (Ee || ze) && (0, ge.jsxs)("div", {
          className: "HudQuickActions",
          children: [Ee && (0, ge.jsxs)(ge.Fragment, {
            children: [(0, ge.jsx)(ce, {
              id: Ee.id,
              actionButtons: Me,
              keyNames: Ke,
              locked: Oe,
              lockable: pe(Ee.id),
              onLocked: Xe
            }), (0, ge.jsx)(Ve, {
              id: Ee.id,
              elements: be.hudElements,
              actionButtons: Me,
              keyNames: Ke,
              onHidden: qe
            }), (0, ge.jsx)(ae, {
              id: Ee.id,
              elements: be.hudElements,
              actionButtons: Me,
              keyNames: Ke,
              locked: Oe,
              onReset: fe
            }), ue(Ee.id, Re) && (0, ge.jsx)(me, {})]
          }), ze]
        })]
      })
    }
    var zi = He(1062),
      Bi = He(4812);
    const Ei = "HudPreviewDoc",
      gi = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      Oi = new Set([Ei, ...Object.values(gi)]),
      di = new Set(Ae.t.map(Ne.G)),
      Wi = new Set(Ne.h),
      ti = 'style, link[rel="stylesheet"]';

    function Zi(ee, ie, He, ye) {
      const be = new Map,
        Me = new Set,
        Ke = new URL(ee.baseURI).origin,
        Ue = ie => {
          var He;
          if ("LINK" !== ie.nodeName) return !0;
          const ye = null === (He = ie.getAttribute("href")) || void 0 === He ? void 0 : He.trim();
          if (!ye) return !1;
          try {
            return new URL(ye, ee.baseURI).origin === Ke
          } catch {
            return !1
          }
        };
      let Fe = null;
      const Je = () => {
          Fe !== (0 === Me.size) && (Fe = 0 === Me.size, null === ye || void 0 === ye || ye(Fe))
        },
        oe = ee => {
          const ie = ee.cloneNode(!0);
          if ("LINK" === ie.tagName) {
            Me.add(ie);
            const ee = () => {
              Me.delete(ie), Je()
            };
            ie.addEventListener("load", ee), ie.addEventListener("error", ee), He && ie.addEventListener("load", He)
          }
          return ie
        },
        Re = () => {
          const ye = function(ee) {
              const ie = [...ee.body.children].filter((ee => ee.matches(ti)));
              return [...ee.head.querySelectorAll(ti), ...ie]
            }(ee).filter(Ue),
            Ke = new Set(ye);
          for (const [ee, ie] of be) Ke.has(ee) || (ie.remove(), be.delete(ee), Me.delete(ie));
          let Fe = null;
          for (let ee = ye.length - 1; ee >= 0; ee--) {
            const Me = ye[ee];
            let Ke = be.get(Me);
            Ke ? "STYLE" === Me.tagName && Ke.textContent !== Me.textContent && (Ke.textContent = Me.textContent, null === He || void 0 === He || He()) : (Ke = oe(Me), be.set(Me, Ke), ie.head.insertBefore(Ke, Fe)), Fe = Ke
          }
          Je()
        };
      Re();
      const ke = new MutationObserver(Re);
      return ke.observe(ee.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), ke.observe(ee.body, {
        childList: !0
      }), () => {
        ke.disconnect()
      }
    }

    function wi(ee, ie, He) {
      let {
        keysAbove: ye
      } = He;
      const be = [...ee.documentElement.classList].filter((ee => !Oi.has(ee) && !Wi.has(ee))),
        Me = [...ie.documentElement.classList].filter((ee => Wi.has(ee))),
        Ke = [Ei, gi.hotbar, gi.hasShop, gi.hasBag];
      ye && Ke.push(gi.keysAbove), ie.documentElement.className = [...be, ...Ke, ...Me].join(" ")
    }
    const Di = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Pi(ee, ie, He, ye, be) {
      const Me = (0, Ae.x)(He, ye, "joystick"),
        Ke = (0, Ne.I)((0, Ne.Y)(He, ye, be), ye),
        Ue = Ke.classes.filter((ee => !di.has(ee))),
        Fe = ie.documentElement,
        Je = He.hudLayouts[ye].hudSafe,
        oe = (0, Ne.N)(Je, window.innerWidth, window.innerHeight, Ai(), Je ? (0, Ne.Z)(ie) : 0);
      (0, Ne.ab)({
        ...Ke,
        classes: Ue
      }, {
        vars: Fe,
        safe: Fe,
        classes: Fe
      }), Fe.style.setProperty("--preview-joystick-shift-left", `${oe[3]}px`), Fe.style.setProperty("--preview-joystick-shift-bottom", `${oe[2]}px`), Fe.style.setProperty("--preview-joystick-scale", String(Me[2])), (0, Bi.h)(Fe, ie, He, ye);
      for (const Re of Di) Fe.style.setProperty(Re, ee.documentElement.style.getPropertyValue(Re) || "0px")
    }

    function Ai() {
      return (0, Ne.V)(oe.e.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function Yi(ee) {
      return (0, Ne.y)(Ai(), (0, Ne.Z)(ee))
    }

    function Vi(ee, ie, He) {
      const ye = ee.documentElement.style,
        be = (0, Ne.R)(ie),
        Me = ye.getPropertyValue(be);
      try {
        return He((ee => {
          ye.setProperty(be, String(ee))
        }))
      } finally {
        "" === Me ? ye.removeProperty(be) : ye.setProperty(be, Me)
      }
    }

    function ai(ee, ie) {
      const [He, ye] = Vi(ee, "hotbar", (ie => {
        const He = He => {
          var ye, be;
          return ie(He), null !== (ye = null === (be = ee.querySelector(".HotBarGameItemsContainer")) || void 0 === be ? void 0 : be.getBoundingClientRect().width) && void 0 !== ye ? ye : 0
        };
        return [He(1), He(Ae.h)]
      }));
      return He <= 0 ? Ae.h : Math.min(Ae.h, Math.max(1, Math.floor(ye / He / ie + 1e-6) * ie))
    }
    const ci = 3,
      xi = .5,
      Li = ee => ee.right - ee.left;
    const Ci = (ee, ie) => Math.abs((0, se.d)(ee).x - (0, se.d)(ie).x) + Math.abs((0, se.d)(ee).y - (0, se.d)(ie).y) + Math.abs(Li(ee) - Li(ie));

    function vi(ee, ie, He, ye, be) {
      let {
        canKeep: Me = () => !0,
        passes: Ke = ci,
        before: Ue
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const Fe = ie.hudLayouts[He].hudLocked.filter(Me);
      if (0 === Fe.length) return ie;
      const Je = [...Pe.e].filter((ye => !Fe.includes(ye) && (0, Ae.x)(ee, He, ye).join() === (0, Ae.x)(ie, He, ye).join())),
        oe = ee => {
          const ie = (0, se.N)(Je.flatMap((ie => ee[ie] ? [ee[ie]] : [])));
          return {
            ...ee,
            cluster: null !== ie && void 0 !== ie ? ie : void 0
          }
        };
      let Re = null;
      const ke = ee => {
          Re = ee;
          const ie = be(ee);
          return ie && {
            ...ie,
            boxes: oe(ie.boxes)
          }
        },
        qe = Ue ? {
          ...Ue,
          boxes: oe(Ue.boxes)
        } : ke(ee),
        fe = qe && ke(ie);
      if (!qe || !fe) return ie;
      const Te = qe.boxes;
      let pe = fe.boxes;
      const Xe = qe.keysAbove !== fe.keysAbove,
        ze = Xe || Boolean(qe.shopAlone) !== Boolean(fe.shopAlone),
        Be = new Set(Fe.filter((ee => !(0, Pe.E)(ee) || !("bag" === ee ? Xe : ze))));
      let Ee = ie;
      for (let de = 0; de < Ke && Be.size > 0; de++) {
        var ge, Oe;
        const ee = new Map;
        for (const ie of Be) {
          const be = Te[ie],
            Me = pe[ie],
            Ke = be && Me ? ui(ie, (0, Ae.x)(Ee, He, ie), be, Me, ye) : null;
          Ke ? ee.set(ie, Ke) : Be.delete(ie)
        }
        if (0 === ee.size) break;
        let be = Ee;
        for (const [ie, ye] of ee) be = (0, Ae.cb)(be, He, ie, ye);
        const Me = null === (ge = ke(be)) || void 0 === ge ? void 0 : ge.boxes;
        if (!Me) return ie;
        let Ke = Ee;
        for (const [ie, ye] of ee) {
          const ee = Me[ie];
          ee && Ci(Te[ie], ee) < Ci(Te[ie], pe[ie]) - xi ? Ke = (0, Ae.cb)(Ke, He, ie, ye) : Be.delete(ie)
        }
        if (Ke === Ee) break;
        const Ue = [...ee.keys()].every((ee => Be.has(ee)));
        Ee = Ue ? be : Ke;
        const Fe = Ue ? Me : null === (Oe = ke(Ee)) || void 0 === Oe ? void 0 : Oe.boxes;
        if (!Fe) return ie;
        pe = Fe
      }
      return Re !== Ee && be(Ee), Ee
    }

    function ui(ee, ie, He, ye, be) {
      let [Me, Ke, Ue] = ie;
      const Fe = Ae.q[ee],
        Je = {};
      Fe.scale && Li(ye) > 0 && Math.abs(Li(He) - Li(ye)) > xi && (Je.scale = Math.max(Ae.j, Math.min(Ae.h, Ue * Li(He) / Li(ye))));
      const oe = (0, se.d)(He).x - (0, se.d)(ye).x,
        Re = (0, se.d)(He).y - (0, se.d)(ye).y;
      return Fe.move && (Math.abs(oe) > xi || Math.abs(Re) > xi) && (Je.dx = Me + oe / be.width, Je.dy = Ke + Re / be.height), void 0 === Je.scale && void 0 === Je.dx ? null : Je
    }
    let mi = 0;

    function li() {
      return mi > 0
    }
    const Si = ee => 0 === ee.dx && 0 === ee.dy,
      ni = .001,
      ji = ee => Math.abs(ee.dx) >= 5e-4 || Math.abs(ee.dy) >= 5e-4 ? ee : {
        dx: ee.dx,
        dy: ee.dy < 0 ? -.001 : ni
      };

    function si(ee) {
      let {
        preview: ie,
        stageRef: He,
        ringRef: ye,
        centreLineRef: Me,
        snapCentre: Ke,
        ready: Ue,
        measure: Fe,
        k: Je,
        viewport: oe,
        boxes: Re,
        pieces: ke,
        selected: qe,
        insets: fe,
        layout: Te,
        canMove: pe,
        onSelect: Xe,
        onMove: ze
      } = ee;
      const Be = (0, be.useRef)(null),
        Ee = (0, be.useCallback)((() => null !== Be.current), []),
        ge = (ee, ie) => {
          if (!ie) return null;
          const He = (0, se.d)(ee.origin),
            ye = (0, se.d)(ie),
            be = (ee.to.dx - ee.from.dx) * oe.width,
            Me = (ee.to.dy - ee.from.dy) * oe.height,
            Ke = ie.right - ie.left,
            Ue = ie.bottom - ie.top;
          return {
            skew: {
              x: ye.x - He.x - be,
              y: ye.y - He.y - Me
            },
            box: {
              left: He.x - Ke / 2,
              top: He.y - Ue / 2,
              right: He.x + Ke / 2,
              bottom: He.y + Ue / 2
            }
          }
        },
        Oe = (ee, He) => {
          var be;
          const Ke = Be.current;
          if (!Ke || Ke.pointerId !== ee.pointerId) return;
          Be.current = null, null === (be = Me.current) || void 0 === be || be.classList.remove("Shown", "Snapped");
          const Ue = ye.current;
          if (Ue && null !== Ke.ringStyle && Ue.setAttribute("style", Ke.ringStyle), He && Ke.moved) {
            const ee = Si(Ke.to) ? null : Fe(Ke.id),
              ie = ee ? (0, se.K)(ee, (0, se.I)(oe.width, oe.height, fe)) : {
                x: 0,
                y: 0
              },
              He = {
                dx: Ke.to.dx + ie.x / oe.width,
                dy: Ke.to.dy + ie.y / oe.height
              },
              ye = Si(Ke.to) ? He : ji(He);
            ze(Ke.id, ye.dx, ye.dy)
          } else ie(Ke.id, null), He && Ke.tapPick && Xe(Ke.tapPick)
        };
      return {
        busy: Ee,
        handlers: {
          onPointerDown: ee => {
            var ie;
            if (!Ue || Be.current || !ee.target.closest(".HudPreviewHandle")) return;
            const ye = He.current.getBoundingClientRect(),
              be = {
                x: (ee.clientX - ye.left) / Je,
                y: (ee.clientY - ye.top) / Je
              },
              Me = (0, se.E)(be, ke, 40 / Je),
              Ke = null !== qe ? Pe.s.get(qe) : void 0,
              Fe = void 0 !== Ke && null !== (0, se.E)(be, ke.filter((ee => {
                let {
                  id: ie
                } = ee;
                return Ke.has(ie)
              })), 40 / Je),
              oe = "menu" === qe && void 0 !== Re.menu && (0, se.g)(Re.menu, be) && ("menu" === Me || null !== Me && (0, he.u)(Me, Te.hudElements[Me])),
              fe = Fe ? qe : oe ? "menu" : null,
              ze = null !== fe,
              Ee = null !== fe && void 0 !== fe ? fe : Me;
            if (!Ee) return;
            if (function(ee) {
                mi++;
                const ie = He => {
                  He.pointerId === ee && (mi = Math.max(0, mi - 1), window.removeEventListener("pointerup", ie, !0), window.removeEventListener("pointercancel", ie, !0))
                };
                window.addEventListener("pointerup", ie, !0), window.addEventListener("pointercancel", ie, !0)
              }(ee.pointerId), !pe(Ee)) return void Xe(ze && Me ? Me : Ee);
            Xe(Ee);
            const [ge, Oe] = null !== (ie = Te.hudElements[Ee]) && void 0 !== ie ? ie : [0, 0], de = {
              dx: ge,
              dy: Oe
            }, We = {
              skew: {
                x: 0,
                y: 0
              },
              box: Re[Ee]
            };
            Be.current = {
              id: Ee,
              pointerId: ee.pointerId,
              startX: ee.clientX,
              startY: ee.clientY,
              origin: Re[Ee],
              from: de,
              to: de,
              moved: !1,
              home: Si(de) ? {
                centre: (0, se.d)(Re[Ee]),
                anchor: We
              } : null,
              away: Si(de) ? null : We,
              anchor: We,
              ringStyle: null,
              tapPick: ze ? Me : null
            }, ee.currentTarget.setPointerCapture(ee.pointerId)
          },
          onPointerMove: ee => {
            const He = Be.current;
            if (!He || He.pointerId !== ee.pointerId) return;
            const be = ee.clientX - He.startX,
              Ue = ee.clientY - He.startY;
            if (!He.moved && Math.hypot(be, Ue) < 5) return;
            const Re = !He.moved;
            var ke, qe;
            (He.moved = !0, Re) && (He.ringStyle = null !== (ke = null === (qe = ye.current) || void 0 === qe ? void 0 : qe.getAttribute("style")) && void 0 !== ke ? ke : null);
            const Te = (0, se.I)(oe.width, oe.height, fe);
            if (!He.home) {
              var pe;
              He.to = {
                dx: 0,
                dy: 0
              }, ie(He.id, He.to);
              const ee = Fe(He.id),
                ye = null !== (pe = ge(He, ee)) && void 0 !== pe ? pe : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: He.origin
                },
                be = (0, se.d)(He.origin);
              He.home = {
                centre: ee ? (0, se.d)(ee) : {
                  x: be.x - He.from.dx * oe.width,
                  y: be.y - He.from.dy * oe.height
                },
                anchor: ye
              }
            }
            const Xe = He.home;
            let ze = !1;
            const Ee = ee => {
                ze = !1;
                let ye = (0, se.r)(ee.box, be / Je, Ue / Je, Te);
                const Me = oe.width / 2;
                if (Ke && Math.abs((0, se.d)(He.origin).x + ye.x - Me) <= 8 / Je) {
                  const ie = Me - (0, se.d)(He.origin).x,
                    be = (0, se.r)(ee.box, ie, ye.y, Te);
                  ze = Math.abs(be.x - ie) < .01, ze && (ye = be)
                }
                const Fe = (0, se.A)(He.from, ye.x - ee.skew.x, ye.y - ee.skew.y, oe.width, oe.height);
                He.to = ji(Fe), He.anchor = ee, ie(He.id, He.to)
              },
              Oe = (0, se.r)(Xe.anchor.box, be / Je, Ue / Je, Te),
              de = Me.current,
              We = (0, se.d)(He.origin),
              te = ((0, Ae.N)(He.id) ? 20 : 6) / Je;
            if (Math.abs(We.x + Oe.x - Xe.centre.x) <= te && Math.abs(We.y + Oe.y - Xe.centre.y) <= te) He.to = {
              dx: 0,
              dy: 0
            }, He.anchor = Xe.anchor, ze = Ke && Math.abs(Xe.centre.x - oe.width / 2) < 1, ie(He.id, He.to);
            else if (He.away) Ee(He.away);
            else {
              var Ze;
              Ee(Xe.anchor), He.away = null !== (Ze = ge(He, Fe(He.id))) && void 0 !== Ze ? Ze : Xe.anchor, Ee(He.away)
            }
            null === de || void 0 === de || de.classList.add("Shown"), null === de || void 0 === de || de.classList.toggle("Snapped", ze), (ee => {
              const ie = ye.current;
              if (ie) {
                const {
                  skew: He,
                  box: ye
                } = ee.anchor;
                ie.style.left = ye.left * Je + "px", ie.style.top = ye.top * Je + "px", ie.style.width = (ye.right - ye.left) * Je + "px", ie.style.height = (ye.bottom - ye.top) * Je + "px", ie.style.translate = `${((ee.to.dx-ee.from.dx)*oe.width+He.x)*Je}px ${((ee.to.dy-ee.from.dy)*oe.height+He.y)*Je}px`
              }
            })(He)
          },
          onPointerUp: ee => {
            Oe(ee, !0)
          },
          onPointerCancel: ee => {
            Oe(ee, !1)
          }
        }
      }
    }
    var Ii = He(9654);

    function Ni(ee, ie) {
      return Object.keys(ee).filter((ee => ee !== ie)).map((ie => ee[ie]))
    }

    function Gi(ee) {
      return ee.map((ee => {
        let {
          id: ie,
          box: He
        } = ee;
        return `${ie}:${He.left},${He.top},${He.right},${He.bottom}`
      })).join(";")
    }

    function ri(ee) {
      const ie = [],
        He = ie => (0, Ae.N)(ie) && !ee.documentElement.classList.contains((0, Ne.K)(ie));
      for (const Ue of ee.querySelectorAll(`[${Pe.h}]`)) {
        const ee = He(Ue.getAttribute(Pe.h)) ? Ue.querySelector(".ScaleOnHover") : null,
          ye = (null !== ee && void 0 !== ee ? ee : Ue).getBoundingClientRect();
        (ye.width > 0 || ye.height > 0) && ie.push({
          id: Ue.getAttribute(Pe.h),
          box: (0, se.i)(ye)
        })
      }
      const ye = ee => (0, se.N)(ie.filter((ie => {
          let {
            id: He
          } = ie;
          return ee(He)
        })).map((ee => {
          let {
            box: ie
          } = ee;
          return ie
        }))),
        be = {};
      for (const Ue of new Set(ie.map((ee => ee.id)))) be[Ue] = ye((ee => ee === Ue));
      for (const [Ue, Fe] of Pe.s) {
        const ee = ye((ee => Fe.has(ee)));
        ee && (be[Ue] = ee)
      }
      const Me = ee.querySelector(".TouchInventoryKeys"),
        Ke = Me ? (0, se.i)(Me.getBoundingClientRect()) : null;
      return {
        boxes: be,
        pieces: ie,
        pairHome: Ke
      }
    }

    function Qi(ee, ie, He) {
      const ye = ie.right - ie.left,
        be = ie.bottom - ie.top;
      return Vi(ee, "cluster", (ie => {
        const Me = He => {
            ie(He);
            const ye = [...ee.querySelectorAll(`[${Pe.h}]:not(.HudPreviewGhost)`)].filter((ee => Pe.e.has(ee.getAttribute(Pe.h)))).map((ee => (0, se.i)(ee.getBoundingClientRect()))),
              be = (0, se.N)(ye);
            return be ? {
              w: be.right - be.left,
              h: be.bottom - be.top
            } : null
          },
          Ke = ee => !ee || ee.w <= ye && ee.h <= be,
          Ue = Me(1),
          Fe = Me(Ae.h);
        if (!Ue || Ke(Fe)) return Ae.h;
        const Je = (ee, ie, He) => ie > ee ? 1 + (He - ee) * (Ae.h - 1) / (ie - ee) : Ae.h;
        let oe = Math.floor(Math.min(Ae.h, Je(Ue.w, Fe.w, ye), Je(Ue.h, Fe.h, be)) / He + 1e-6) * He;
        for (; oe > 1 && !Ke(Me(oe));) oe = Math.round(100 * (oe - He)) / 100;
        return Math.max(1, oe)
      }))
    }

    function eH(ee) {
      wi(document, ee, {
        keysAbove: !1
      });
      const ie = parseFloat(getComputedStyle(ee.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        He = Number.isFinite(ie) && ie < 0;
      return wi(document, ee, {
        keysAbove: He
      }), (0, Ii.e)(ee), He
    }

    function iH(ee) {
      const ie = ee.querySelector(".TouchInventoryKey.ShopKey");
      return null !== ie && "1" === getComputedStyle(ie).getPropertyValue("--touch-shop-above").trim()
    }

    function HH(ee, ie) {
      let {
        layout: He,
        orientation: ye,
        viewport: Me,
        replicaKey: Ke,
        joystickFixed: Ue,
        busy: Fe
      } = ie;
      const [Je, oe] = (0, be.useState)(null), [Re, ke] = (0, be.useState)({
        boxes: {},
        pieces: []
      }), [qe, fe] = (0, be.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [Te, pe] = (0, be.useState)(!1), [Xe, ze] = (0, be.useState)(!1), [Be, Ee] = (0, be.useState)(!1), ge = (0, be.useCallback)((ee => {
        ze(ee), ee && Ee(!0)
      }), []), Oe = He.hudLayouts[ye].hudSafe;
      (0, be.useLayoutEffect)((() => {
        const ie = ee.current.contentDocument;
        ie.open(), ie.write("<!DOCTYPE html><html><head></head><body></body></html>"), ie.close(), oe(ie)
      }), [ee]);
      const de = (0, be.useCallback)((() => {
          Je && ((0, he.v)(Je), ke(ri(Je)), fe(function(ee, ie) {
            const He = Yi(ee),
              [ye, be, Me, Ke] = ie ? (0, Ne.C)(ie, window.innerWidth, window.innerHeight, He) : He;
            return {
              top: ye,
              right: be,
              bottom: Me,
              left: Ke
            }
          }(Je, Oe)))
        }), [Je, Oe]),
        We = (0, be.useCallback)((() => {
          Je && pe(eH(Je))
        }), [Je]),
        te = (0, be.useRef)((() => {}));
      return te.current = () => {
        We(), Fe() || de()
      }, (0, be.useLayoutEffect)((() => {
        if (Je) return Zi(document, Je, (() => {
          te.current()
        }), ge)
      }), [Je, ge]), (0, be.useLayoutEffect)(We, [We, Me]), (0, be.useLayoutEffect)((() => {
        Je && (wi(document, Je, {
          keysAbove: Te
        }), Pi(document, Je, He, ye, Ue), We(), de())
      }), [Je, He, ye, Te, Ke, Ue, Me, de, We]), (0, be.useEffect)((() => {
        var ee;
        if (!Je) return;
        const ie = new ResizeObserver((() => {
          Fe() || de()
        }));
        for (const He of Je.querySelectorAll(`[${Pe.h}]`)) ie.observe(He);
        return null === (ee = Je.fonts) || void 0 === ee || ee.ready.then(de), () => {
          ie.disconnect()
        }
      }), [Je, de, Fe, Ke]), {
        doc: Je,
        boxes: Re.boxes,
        pieces: Re.pieces,
        insets: qe,
        keysAbove: Te,
        ready: Xe,
        settled: Be
      }
    }
    const yH = ["Above", "Below", "Left", "Right"];

    function bH(ee, ie, He, ye, be) {
      const Me = He[ee],
        Ke = (Me.left + Me.right) / 2,
        Ue = (Me.top + Me.bottom) / 2,
        Fe = (7.5 * ie.length + 14) / ye,
        Je = 18 / ye,
        oe = {
          Above: {
            left: Ke - Fe / 2,
            top: Me.top - Je,
            right: Ke + Fe / 2,
            bottom: Me.top
          },
          Below: {
            left: Ke - Fe / 2,
            top: Me.bottom,
            right: Ke + Fe / 2,
            bottom: Me.bottom + Je
          },
          Left: {
            left: Me.left - Fe,
            top: Ue - Je / 2,
            right: Me.left,
            bottom: Ue + Je / 2
          },
          Right: {
            left: Me.right,
            top: Ue - Je / 2,
            right: Me.right + Fe,
            bottom: Ue + Je / 2
          }
        },
        Re = Ni(He, ee),
        ke = {
          left: 0,
          top: 0,
          right: be.width,
          bottom: be.height
        };
      return yH[(0, se.y)(yH.map((ee => oe[ee])), Re, {
        bounds: ke
      })]
    }

    function MH() {
      const [ee, ie] = (0, ne.b)();
      return (0, be.useMemo)((() => ({
        width: ee,
        height: ie
      })), [ee, ie])
    }

    function KH(ee) {
      var ie;
      const {
        layout: He,
        orientation: Me,
        selected: Ke,
        onSelect: Ue,
        onMove: Je,
        canMove: oe,
        actionButtons: Re,
        joystickFixed: ke,
        presence: qe,
        keyNames: Te,
        maxHeight: pe,
        fill: Xe = !1,
        apiRef: ze
      } = ee, {
        t: Be
      } = (0, ye.v)(), Ee = MH(), Oe = (null !== (ie = (0, fe.i)("maxAuraLevel")) && void 0 !== ie ? ie : 0) > 0, de = He.hudLayouts[Me], We = (0, be.useRef)(null), te = (0, be.useRef)(null), Ze = (0, be.useRef)(null), we = (0, be.useRef)(null), Ye = (0, be.useRef)(null), Ve = (0, be.useRef)(null), ae = (0, je.e)(We).width, ce = Xe ? 1 : ae > 0 ? (0, se.G)(ae, Ee.width, Ee.height, pe) : 0, xe = (0, be.useRef)((() => !1)), Le = (0, be.useCallback)((() => xe.current()), []), Ce = `${Re}:${ke}:${Oe}`, {
        doc: ve,
        boxes: ue,
        pieces: me,
        insets: Se,
        keysAbove: ne,
        ready: Ge,
        settled: re
      } = HH(Ze, {
        layout: He,
        orientation: Me,
        viewport: Ee,
        replicaKey: Ce,
        joystickFixed: ke,
        busy: Le
      }), Qe = (0, be.useCallback)((ee => {
        ve && Pi(document, ve, ee, Me, ke)
      }), [ve, Me, ke]), ei = (0, be.useCallback)((ee => {
        if (!ve || !re) return null;
        Qe(ee);
        const ie = eH(ve),
          He = function(ee, ie) {
            let {
              boxes: He,
              pieces: ye,
              pairHome: be
            } = ee;
            const Me = ye.find((ee => Pe.q.has(ee.id)));
            if (!Me || !be) return He;
            const Ke = (0, se.d)(be),
              Ue = ie(Me.id),
              Fe = Li(Me.box) / Ue / 2,
              Je = (Me.box.bottom - Me.box.top) / Ue / 2;
            return {
              ...He,
              inventory: {
                left: Ke.x - Fe,
                top: Ke.y - Je,
                right: Ke.x + Fe,
                bottom: Ke.y + Je
              }
            }
          }(ri(ve), (ie => (0, Ae.x)(ee, Me, ie)[2]));
        return {
          boxes: He,
          keysAbove: ie,
          shopAlone: iH(ve)
        }
      }), [ve, re, Qe, Me]), ii = (0, be.useRef)(null), Hi = (0, be.useRef)(null), yi = (0, be.useRef)(He);
      yi.current = He;
      const bi = (0, be.useCallback)((() => {
        null !== ii.current && (cancelAnimationFrame(ii.current), ii.current = null)
      }), []);
      (0, be.useEffect)((() => bi), [He, bi]);
      const Mi = (0, be.useRef)(-1 / 0),
        {
          lockable: Ki
        } = ee,
        Ui = (0, be.useCallback)((ee => {
          if (Qe(ee), Mi.current = performance.now(), !re || 0 === He.hudLayouts[Me].hudLocked.length) return;
          const ie = He;
          bi(), ii.current = requestAnimationFrame((() => {
            var He;
            if (ii.current = null, yi.current !== ie) return;
            const ye = (null === (He = Hi.current) || void 0 === He ? void 0 : He.from) === ie ? Hi.current.measured : ei(ie);
            ye && (Hi.current = {
              from: ie,
              measured: ye
            }), Qe(ye ? vi(ie, ee, Me, Ee, ei, {
              canKeep: Ki,
              passes: 1,
              before: ye
            }) : ee)
          }))
        }), [Qe, re, He, Me, Ee, ei, Ki, bi]),
        Fi = si({
          preview: (ee, ie) => {
            ie ? Ui((0, Ae.cb)(He, Me, ee, ie)) : (bi(), Qe(He))
          },
          stageRef: te,
          ringRef: we,
          centreLineRef: Ye,
          snapCentre: He.hudSnapCentre,
          ready: re,
          measure: ee => {
            const ie = ve && Ge ? ri(ve).boxes[ee] : void 0;
            return ie && (0, se.k)(ie, Ee.width, Ee.height) ? ie : null
          },
          k: ce,
          viewport: Ee,
          boxes: ue,
          pieces: me,
          selected: Ke,
          insets: Se,
          layout: de,
          canMove: oe,
          onSelect: Ue,
          onMove: (ee, ie, He) => {
            bi(), Je(ee, ie, He)
          }
        });
      (0, be.useLayoutEffect)((() => {
        xe.current = Fi.busy
      }), [Fi.busy]);
      const Ji = (0, be.useRef)([]),
        oi = (0, be.useRef)(de.hudElements);
      (0, be.useEffect)((() => {
        for (const be of Object.keys(de.hudElements)) {
          var ee, ie, He, ye;
          (null !== (ee = null === (ie = de.hudElements[be]) || void 0 === ie ? void 0 : ie[2]) && void 0 !== ee ? ee : 1) > (null !== (He = null === (ye = oi.current[be]) || void 0 === ye ? void 0 : ye[2]) && void 0 !== He ? He : 1) && oe(be) && !(0, he.u)(be, de.hudElements[be]) && Ji.current.push(...(0, Pe.J)(be, ne, oe))
        }
        oi.current = de.hudElements
      }), [de.hudElements, oe, ne]), (0, be.useEffect)((() => {
        if (!Ge) return;
        const ee = (0, se.I)(Ee.width, Ee.height, Se);
        for (const He of (0, Pe.F)(Ji.current.splice(0), ue, ee, oe)) {
          const ye = ue[He];
          if (!ye || Fi.busy() || !(0, se.k)(ye, Ee.width, Ee.height)) continue;
          const be = (0, se.K)(ye, ee);
          if (0 !== be.x || 0 !== be.y) {
            var ie;
            const [ee, ye] = null !== (ie = de.hudElements[He]) && void 0 !== ie ? ie : [0, 0];
            Je(He, ee + be.x / Ee.width, ye + be.y / Ee.height)
          }
        }
      }), [ue, Ge]), (0, be.useImperativeHandle)(ze, (() => ({
        setScale: (ee, ie) => {
          Ui((0, Ae.cb)(He, Me, ee, {
            scale: ie
          }))
        },
        setOpacity: ee => {
          Qe({
            ...He,
            hudKeyOpacity: ee
          })
        },
        keepLocks: (ee, ie) => (bi(), vi(ee, ie, Me, Ee, ei, {
          canKeep: Ki
        })),
        setSafe: ee => {
          const ie = (0, Ne.C)(ee, Ee.width, Ee.height, Yi(null !== ve && void 0 !== ve ? ve : document));
          Ui((0, Ae.fb)(He, Me, ee)), Ve.current && (Ve.current.style.inset = ie.map((ee => ee * ce + "px")).join(" "))
        }
      })), [Qe, Ui, ei, bi, Ki, ve, He, Me, Ee, ce]);
      const Ri = new Set(Object.keys(de.hudElements).filter((ee => (0, Ae.m)(de.hudElements, ee)))),
        ki = Ke ? ue[Ke] : void 0,
        fi = Ke ? (0, Pe.B)(Ke, Re, Be, Te) : "",
        Xi = (0, zi.e)(Ee.width, Ee.height),
        Bi = Ke ? (0, Ie.f)(Ke, me, de, Xi) : [],
        Ei = new Set((0, he.p)(de.hudElements)),
        gi = (0, he.E)(de, (0, he.A)(qe.rowIcons)).state,
        Oi = Bi.join(),
        di = (0, be.useRef)(ee.onReady);
      di.current = ee.onReady, (0, be.useEffect)((() => {
        var ee;
        null === (ee = di.current) || void 0 === ee || ee.call(di, re)
      }), [re]);
      const Wi = (0, be.useRef)(ee.onMeasured);
      (0, be.useLayoutEffect)((() => {
        Wi.current = ee.onMeasured
      }));
      const ti = (0, be.useRef)({
          layout: null,
          input: "",
          caps: {}
        }),
        Zi = [Gi(me), Ee.width, Ee.height, Se.top, Se.right, Se.bottom, Se.left, Ge, Ce].join("|");
      (0, be.useEffect)((() => {
        const ee = Oi ? Oi.split(",") : [],
          ie = () => {
            var ie;
            null === (ie = Wi.current) || void 0 === ie || ie.call(Wi, ue, ee, ti.current.caps)
          };
        let He;
        const ye = () => {
          const ee = yi.current;
          if (!ve || ee === ti.current.layout && Zi === ti.current.input) return !1;
          const be = Mi.current + 250 - performance.now();
          return ee === ti.current.layout && (be > 0 || Le()) ? (He = setTimeout((() => {
            ye() && ie()
          }), Math.max(be, 62.5)), !1) : (ti.current = {
            layout: ee,
            input: Zi,
            caps: {
              hotbar: ai(ve, Ti),
              cluster: Qi(ve, (0, se.I)(Ee.width, Ee.height, Se), Ti)
            }
          }, !0)
        };
        return ye(), ie(), () => {
          clearTimeout(He)
        }
      }), [ue, Oi, ve, Ee, Se, Zi, Le]);
      const wi = ee => ({
        left: ee.left * ce,
        top: ee.top * ce,
        width: (ee.right - ee.left) * ce,
        height: (ee.bottom - ee.top) * ce
      });
      return (0, ge.jsx)("div", {
        ref: We,
        className: Fe()("HudPreviewBox", {
          Fill: Xe
        }),
        style: {
          height: Ee.height * ce
        },
        children: (0, ge.jsxs)("div", {
          ref: te,
          className: "HudPreviewStage",
          style: {
            width: Ee.width * ce,
            height: Ee.height * ce
          },
          children: [(0, ge.jsx)("iframe", {
            ref: Ze,
            className: "HudPreviewFrame",
            title: Be("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: Ee.width,
              height: Ee.height,
              transform: `scale(${ce})`
            }
          }), ve && (0, le.createPortal)((0, ge.jsx)(qi, {
            presence: qe,
            portraitPhone: Xi,
            hidden: Ri,
            actionButtons: Re,
            joystickFixed: ke,
            keysAbove: ne,
            auraBar: Oe,
            trayState: gi,
            moved: Ei
          }), ve.body), (0, ge.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...Fi.handlers,
            children: [(0, ge.jsx)("div", {
              ref: Ve,
              className: "HudPreviewSafeZone",
              style: {
                top: Se.top * ce,
                right: Se.right * ce,
                bottom: Se.bottom * ce,
                left: Se.left * ce
              }
            }), me.map(((ee, ie) => {
              let {
                id: He,
                box: ye
              } = ee;
              return (0, ge.jsx)("div", {
                className: "HudPreviewHandle",
                style: wi((0, se.u)(ye, 40 / ce))
              }, `${He}:${ie}`)
            })), de.hudLocked.map((ee => {
              const ie = ue[ee];
              return ie && (0, ge.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: ie.right * ce,
                  top: ie.top * ce
                },
                children: (0, ge.jsx)(De.e, {
                  name: "lock"
                })
              }, ee)
            })), (0, ge.jsx)("div", {
              ref: Ye,
              className: "HudPreviewCentreLine",
              style: {
                left: Ee.width / 2 * ce
              }
            }), Ke && ki && (0, ge.jsx)("div", {
              ref: we,
              className: Fe()("HudPreviewRing", {
                Fixed: !oe(Ke),
                Overlap: Bi.length > 0
              }),
              style: wi(ki),
              children: (0, ge.jsx)("span", {
                className: Fe()("HudPreviewRingLabel", bH(Ke, fi, ue, ce, Ee)),
                children: fi
              })
            })]
          })]
        })
      })
    }

    function UH(ee, ie) {
      (0, be.useEffect)((() => {
        var He;
        null === (He = ee.current) || void 0 === He || He.toggleAttribute("inert", ie)
      }), [ee, ie])
    }
    const FH = "hudFullScreen";

    function JH(ee) {
      let {
        onScale: ie,
        onHidden: He,
        onReset: Me,
        locked: Ke,
        lockable: Ue,
        onLocked: Fe,
        onClose: oe,
        ...Re
      } = ee;
      const {
        t: ke
      } = (0, ye.v)(), qe = (0, be.useRef)(null);
      (0, Se.t)("popup", qe, oe),
      function(ee) {
        const ie = (0, be.useRef)(ee);
        ie.current = ee, (0, be.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [FH]: !0
          }, "");
          let ee = !1;
          const He = () => {
            ee = !0, ie.current()
          };
          return window.addEventListener("popstate", He), () => {
            var ie;
            window.removeEventListener("popstate", He), !ee && null !== (ie = window.history.state) && void 0 !== ie && ie[FH] && window.history.back()
          }
        }), [])
      }(oe), (0, be.useEffect)((() => {
        function ee(ee) {
          "Escape" === ee.key && (ee.stopPropagation(), oe())
        }
        return window.addEventListener("keydown", ee, !0), () => {
          window.removeEventListener("keydown", ee, !0)
        }
      }), [oe]);
      const {
        selected: fe
      } = Re, Te = (0, be.useRef)(null), pe = (0, be.useRef)(null), [Xe, ze] = (0, be.useState)(!1);
      UH(pe, !Xe);
      const [Be, Ee] = (0, be.useState)(null), [Oe, de] = (0, be.useState)([]), [We, te] = fi(), Ze = (0, be.useRef)(Re.selected);
      Ze.current = Re.selected;
      const we = (0, be.useRef)({}),
        De = (0, be.useCallback)((() => {
          const ee = Te.current;
          ee && Ee(function(ee, ie, He) {
            var ye;
            const {
              innerWidth: be,
              innerHeight: Me
            } = window, Ke = ee.offsetWidth, Ue = ee.offsetHeight, Fe = Math.max(Ai()[0], 6), Je = [];
            for (const ke of [Fe, .2 * Me, .5 * Me - Ue / 2, .33 * Me])
              for (const ee of [.5, .3, .7]) Je.push({
                left: Math.max(0, Math.min(be - Ke - 6, Math.max(6, be * ee - Ke / 2))),
                top: ke
              });
            const oe = Je.map((ee => ({
                left: ee.left - 6,
                top: ee.top - 6,
                right: ee.left + Ke + 6,
                bottom: ee.top + Ue + 6
              }))),
              Re = Ni(ie, He);
            return Je[(0, se.y)(oe, Re, {
              avoid: He && null !== (ye = ie[He]) && void 0 !== ye ? ye : null
            })]
          }(ee, we.current, Ze.current))
        }), []),
        Pe = (0, be.useCallback)(((ee, ie, He) => {
          de(ie), te(He), we.current = ee, De()
        }), [De, te]);
      return (0, be.useLayoutEffect)(De, [Re.selected, De]), (0, le.createPortal)((0, ge.jsxs)("div", {
        ref: qe,
        className: "HudFullScreenEditor",
        children: [(0, ge.jsx)(KH, {
          ...Re,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: Pe,
          onReady: ze,
          lockable: Ue
        }), (0, ge.jsxs)("div", {
          ref: Te,
          className: "HudFullScreenToolbar",
          style: null === Be ? void 0 : {
            left: Be.left,
            top: Be.top,
            transform: "none"
          },
          children: [(0, ge.jsx)("div", {
            ref: pe,
            className: "HudFullScreenControls",
            children: (0, ge.jsx)(Xi, {
              selected: fe,
              layout: Re.layout.hudLayouts[Re.orientation],
              actionButtons: Re.actionButtons,
              keyNames: Re.keyNames,
              overlaps: Oe,
              scaleCaps: We,
              onScale: ie,
              onHidden: He,
              onReset: Me,
              locked: Ke,
              lockable: Ue,
              onLocked: Fe,
              joystickFixed: Re.joystickFixed
            })
          }), (0, ge.jsx)(Je.c, {
            className: "HudFullScreenDone",
            onClick: oe,
            padDefaultFocus: !0,
            children: ke("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const oH = ee => `${Math.round(100*ee)}%`;

    function RH(ee) {
      let {
        info: ie,
        tuple: He,
        props: be
      } = ee;
      const {
        t: Me
      } = (0, ye.v)();
      return (0, ge.jsx)(qe.f, {
        name: Me("hudLayout:size"),
        min: Ae.j,
        max: Ae.h,
        step: Ti,
        initValue: He[2],
        disabled: be.locked.has(ie.id),
        selectableMax: be.scaleCaps[ie.id],
        cappedNote: Me("hudLayout:sizeCapped"),
        format: oH,
        onChange: ee => {
          be.onScalePreview(ie.id, ee)
        },
        onChangeComplete: ee => {
          be.onScale(ie.id, ee)
        }
      })
    }

    function kH(ee) {
      const {
        t: ie
      } = (0, ye.v)(), {
        present: He,
        elements: Me,
        selected: Ke,
        onSelect: Ue,
        onHidden: Je,
        onReset: oe,
        note: Re,
        actionButtons: ke,
        keyNames: qe,
        sizeBesidePreview: fe,
        locked: Te,
        lockable: pe,
        onLocked: Xe
      } = ee, {
        rowIconsOpen: ze,
        onRowIconsOpen: Be
      } = ee, Ee = (0, be.useRef)(null), Oe = null !== Ke && (ze || !(0, Ae.N)(Ke));
      return (0, be.useEffect)((() => {
        var ee;
        const ie = Ke ? null === (ee = Ee.current) || void 0 === ee ? void 0 : ee.querySelector(`[data-hud-row="${Ke}"]`) : null;
        if (!ie) return;
        const He = ie.closest(".SettingsMenuRight"),
          ye = performance.now();
        let be = null;
        const Me = () => {
            clearInterval(Fe), null === He || void 0 === He || He.removeEventListener("scroll", Ue)
          },
          Ue = () => {
            li() || Me()
          },
          Fe = setInterval((() => {
            const ee = performance.now();
            ee - ye > 1500 ? Me() : li() ? be = null : null === be ? be = ee : ee - be >= 150 && (Me(), function(ee) {
              var ie;
              const He = ee.closest(".SettingsMenuRight"),
                ye = null === (ie = ee.closest(".HudLayoutSettings")) || void 0 === ie ? void 0 : ie.querySelector(".HudLayoutPreviewBox");
              if (!He || !ye) return;
              const be = ye.getBoundingClientRect().bottom + 8,
                Me = He.getBoundingClientRect().bottom - 8,
                Ke = ee.getBoundingClientRect();
              Ke.top < be ? He.scrollBy({
                top: Ke.top - be,
                behavior: "smooth"
              }) : Ke.bottom > Me && He.scrollBy({
                top: Math.min(Ke.bottom - Me, Ke.top - be),
                behavior: "smooth"
              })
            }(ie))
          }), 50);
        return null === He || void 0 === He || He.addEventListener("scroll", Ue, {
          passive: !0
        }), Me
      }), [Ke, Oe]), (0, ge.jsx)("div", {
        ref: Ee,
        className: "SettingBoxGroup HudElementList",
        children: Pe.p.filter((ee => He.has(ee.id) && (ze || !(0, Ae.N)(ee.id)))).map((He => {
          const ye = ((ee, ie) => {
              var He;
              return null !== (He = ee[ie]) && void 0 !== He ? He : Ae.k
            })(Me, He.id),
            be = (0, Ae.m)(Me, He.id),
            Ee = He.id === Ke,
            Oe = He.scale && !fe,
            de = Re(He.id, Ee);
          return (0, ge.jsxs)("div", {
            "data-hud-row": He.id,
            className: Fe()("SettingBox HudElementRow", {
              Open: Ee,
              Hidden: be,
              Child: void 0 !== He.parent,
              Grandchild: (0, Pe.u)(He.id).length > 1
            }),
            children: [(0, ge.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, ge.jsx)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": Oe ? Ee : void 0,
                onClick: () => {
                  Ue(He.id)
                },
                children: (0, ge.jsxs)("span", {
                  className: "HudElementRowLabel",
                  children: [(0, Pe.B)(He.id, ke, ie, qe), He.scale && 1 !== ye[2] && !(Ee && Oe) && (0, ge.jsxs)(ge.Fragment, {
                    children: [" ", (0, ge.jsx)("span", {
                      className: "HudElementRowSize",
                      children: oH(ye[2])
                    })]
                  }), Oe && (0, ge.jsxs)(ge.Fragment, {
                    children: [" ", (0, ge.jsx)("span", {
                      className: "HudElementRowChevron",
                      children: "\u25be"
                    })]
                  })]
                })
              }), (0, ge.jsx)(ce, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: He.id,
                actionButtons: ke,
                keyNames: qe,
                locked: Te.has(He.id),
                lockable: pe(He.id),
                onLocked: Xe
              }), "menu" === He.id && (0, ge.jsx)(xe, {
                className: "HudElementRowIcon",
                open: ze,
                name: (0, Pe.B)(He.id, ke, ie, qe),
                onToggle: Be
              }), "menu" !== He.id && (0, ge.jsx)(Ve, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: He.id,
                elements: Me,
                actionButtons: ke,
                keyNames: qe,
                onHidden: Je
              }), (0, ge.jsx)(ae, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: Te.has(He.id),
                id: He.id,
                elements: Me,
                actionButtons: ke,
                keyNames: qe,
                onReset: oe
              })]
            }), Ee && Oe && (0, ge.jsx)(RH, {
              info: He,
              tuple: ye,
              props: ee
            }), de && (0, ge.jsx)("div", {
              className: "HudElementNote",
              children: de
            })]
          }, He.id)
        }))
      })
    }

    function qH(ee) {
      let {
        preview: ie,
        quick: He,
        onFullScreen: Me,
        resting: Ke,
        onSidePanel: Ue
      } = ee;
      const {
        t: Fe
      } = (0, ye.v)(), oe = MH(), Re = (0, be.useRef)(null), {
        width: ke
      } = (0, je.e)(Re), qe = Math.floor(oe.width * Math.min(1, ie.maxHeight / oe.height)), fe = ke - qe - 12, Te = fe >= 130, pe = ke > 0;
      (0, be.useEffect)((() => {
        pe && Ue(Te)
      }), [pe, Te, Ue]);
      const Xe = (0, se.G)(Te ? qe : ke, oe.width, oe.height, ie.maxHeight),
        ze = Ke ? (0, ge.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: oe.height * Xe
          }
        }) : (0, ge.jsx)(KH, {
          ...ie
        }),
        Be = ee => (0, ge.jsxs)(Je.M, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: Fe("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: Me,
          children: [(0, ge.jsx)(De.e, {
            name: "expand"
          }), ee && (0, ge.jsx)("span", {
            children: Fe("hudLayout:fullScreen")
          })]
        });
      return (0, ge.jsxs)("div", {
        ref: Re,
        className: "SettingBox HudLayoutPreviewBox",
        children: [ke > 0 && Te && (0, ge.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, ge.jsx)("div", {
            style: {
              width: qe
            },
            children: ze
          }), (0, ge.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, ge.jsx)(Xi, {
              selected: ie.selected,
              ...He,
              joystickFixed: ie.joystickFixed,
              extra: Be(!ie.selected || fe >= 278)
            })
          })]
        }), ke > 0 && !Te && (0, ge.jsxs)(ge.Fragment, {
          children: [ze, (0, ge.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: Be(!1)
          })]
        })]
      })
    }
    var fH = He(2576),
      TH = He(4806),
      pH = He(2553),
      XH = He(2509);
    const zH = ee => {
      const ie = Ne.q * ("sides" === ee ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(ie / 2))
    };

    function BH(ee, ie, He) {
      const [ye, be, Me, Ke] = ee;
      return "sides" === ie ? [ye, He, Me, He] : [He, be, He, Ke]
    }
    const EH = [null, null, null, null],
      gH = ee => `${ee}px`;

    function OH(ee) {
      let {
        safe: ie,
        onPreview: He,
        onCommit: Me
      } = ee;
      const {
        t: Ke
      } = (0, ye.v)(), Ue = (0, Ne.C)(null !== ie && void 0 !== ie ? ie : EH, window.innerWidth, window.innerHeight, Yi(document).map(Math.round)), Fe = (0, be.useRef)(null !== ie && void 0 !== ie ? ie : EH);
      Fe.current = null !== ie && void 0 !== ie ? ie : EH;
      const oe = ee => {
        const ie = Math.min(zH(ee), "sides" === ee ? Math.max(Ue[1], Ue[3]) : Math.max(Ue[0], Ue[2]));
        return (0, ge.jsx)(qe.f, {
          name: Ke("sides" === ee ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: zH(ee),
          step: 2,
          initValue: ie,
          format: gH,
          onChange: ie => {
            He(BH(Fe.current, ee, ie))
          },
          onChangeComplete: ye => {
            if (ye === ie) return void He(Fe.current);
            const be = BH(Fe.current, ee, ye);
            Fe.current = be, Me(be), (0, We.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: ee
            })
          }
        })
      };
      return (0, ge.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, ge.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, ge.jsx)("div", {
            children: Ke("hudLayout:safeZone")
          }), (0, ge.jsx)(Je.M, {
            active: null === ie,
            pressed: null === ie,
            onClick: () => {
              Me(null)
            },
            children: Ke("hudLayout:safeZoneAuto")
          })]
        }), oe("sides"), oe("ends")]
      })
    }

    function dH() {
      const {
        t: ee
      } = (0, ye.v)(), ie = (0, Ae.$)(), {
        clientEscMenuOptions: He
      } = (0, oe.m)(["clientEscMenuOptions"]), Me = (0, fH.g)(), Ke = ie.hudLayouts[Me], [Ue, Fe] = (0, be.useState)(null), {
        rowIconsOpen: Re,
        onRowIconsOpen: ke,
        select: fe
      } = function(ee, ie) {
        const [He, ye] = (0, be.useState)((() => Ae.A.some((ie => void 0 !== ee.hudElements[ie] || ee.hudLocked.includes(ie))))), Me = (0, be.useCallback)((ee => {
          ie(ee), (0, Ae.N)(ee) && ye(!0)
        }), [ie]);
        return {
          rowIconsOpen: He,
          onRowIconsOpen: ye,
          select: Me
        }
      }(Ke, Fe), [Te, pe] = (0, be.useState)([]), [Xe, ze] = (0, be.useState)(null), [Be, Ee] = fi(), Oe = (0, be.useCallback)(((ee, ie, He) => {
        pe(ie), Ee(He);
        const ye = Object.keys(ee);
        ze((ee => (null === ee || void 0 === ee ? void 0 : ee.size) === ye.length && ye.every((ie => ee.has(ie))) ? ee : new Set(ye)))
      }), [Ee]), {
        gameState: de
      } = (0, oe.m)(["gameState"]), Ze = (0, pH.e)(), we = (0, XH.q)(), [De] = (0, be.useState)((() => {
        var ee, ie, He, ye;
        return "inGame" === de ? (0, re.r)(document, Ze, {
          rightOfCamera: null !== (ee = null === (ie = we.rightOfCamera) || void 0 === ie ? void 0 : ie.icon) && void 0 !== ee ? ee : null,
          leftEnd: null !== (He = null === (ye = we.leftEnd) || void 0 === ye ? void 0 : ye.icon) && void 0 !== He ? He : null
        }) : re.c
      })), Ye = (0, be.useRef)(null), Ve = (0, be.useRef)(null), ae = function(ee) {
        const [ie, He] = (0, be.useState)((() => .4 * window.innerHeight));
        return (0, be.useLayoutEffect)((() => {
          var ie;
          const ye = null === (ie = ee.current) || void 0 === ie ? void 0 : ie.closest(".SettingsMenuRight");
          if (!ye) return;
          const be = () => {
            const ee = ye.clientHeight < WH ? .4 : .5;
            He(Math.max(80, ye.clientHeight * ee - 24))
          };
          be();
          const Me = new ResizeObserver(be);
          return Me.observe(ye), () => {
            Me.disconnect()
          }
        }), [ee]), ie
      }(Ve), ce = (0, TH.n)(He.joystickMode), xe = He.touchActionButtons, Le = (0, be.useMemo)((() => (0, re.n)(De, xe)), [De, xe]), Ce = (0, be.useMemo)((() => new Set((0, re.l)(De, xe).map((ee => re.d[ee])))), [De, xe]);
      (0, be.useEffect)((() => {
        (0, We.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [ve, le] = (0, be.useState)(!1), [Se, ne] = (0, be.useState)(!1), je = (0, be.useRef)(null);
      UH(je, !Se);
      const [se, Ie] = (0, be.useState)(!1), Ne = (0, be.useCallback)((() => {
        Ie(!1)
      }), []), Ge = (0, be.useMemo)((() => new Set(Ke.hudLocked)), [Ke.hudLocked]), Qe = ee => {
        var ie, He;
        const ye = (0, Ae.l)(),
          be = ee(ye);
        (0, Ae.X)(null !== (ie = null === (He = Ye.current) || void 0 === He ? void 0 : He.keepLocks(ye, be)) && void 0 !== ie ? ie : be)
      }, ei = (ee, ie) => {
        Qe((He => (0, Ae.cb)(He, Me, ee, ie)))
      }, ii = (ee, ie, He) => {
        ei(ee, {
          dx: ie,
          dy: He
        }), (0, We.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${ee}`
        })
      }, Hi = (ee, ie) => {
        Qe((He => (0, Ae.db)(He, Me, ee, ie)))
      }, yi = ee => {
        const ie = Pe.l[ee];
        return (ie.move || ie.scale) && ("joystick" !== ee || ce) && !(0, he.u)(ee, Ke.hudElements[ee])
      }, bi = ee => Pe.l[ee].move && ("joystick" !== ee || ce) && !Ge.has(ee), Mi = new Set(Pe.p.map((ee => ee.id)).filter((ee => {
        const ie = (0, Ae.N)(ee) && !De.rowIcons.includes(ee);
        return null === Xe || Xe.has(ee) || (0, Ae.m)(Ke.hudElements, ee) && !ie
      }))), Ki = {
        present: Mi,
        actionButtons: xe,
        keyNames: Le,
        scaleCaps: Be,
        sizeBesidePreview: ve,
        elements: Ke.hudElements,
        selected: Ue,
        onSelect: fe,
        rowIconsOpen: Re,
        onRowIconsOpen: ke,
        onScalePreview: (ee, ie) => {
          var He;
          null === (He = Ye.current) || void 0 === He || He.setScale(ee, ie)
        },
        onScale: (ee, ie) => {
          ei(ee, {
            scale: ie
          }), (0, We.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${ee}`
          })
        },
        onHidden: (ee, ie) => {
          ei(ee, {
            hidden: ie
          }), (0, We.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${ie?"hide":"show"}:${ee}`
          })
        },
        onReset: ee => {
          ei(ee, Ae.b)
        },
        locked: Ge,
        lockable: yi,
        onLocked: Hi,
        note: (ie, He) => {
          const ye = He && Te.length > 0 ? ee("hudLayout:overlapsNote", {
            names: (0, Pe.y)(Te, xe, ee, Le)
          }) : null;
          if (He && ue(ie, ce)) return (0, ge.jsxs)(ge.Fragment, {
            children: [ye && (0, ge.jsx)("span", {
              children: ye
            }), (0, ge.jsx)("span", {
              children: ee("hudLayout:floatingJoystickNote")
            }), !ve && (0, ge.jsx)(me, {})]
          });
          if (ye) return ye;
          const be = He && Ge.has(ie) ? ee("hudLayout:lockedNote") : null,
            Me = He && Ce.has(ie) ? ee("hudLayout:contextSlotNote") : null;
          return be || Me ? (0, ge.jsxs)(ge.Fragment, {
            children: [be && (0, ge.jsx)("span", {
              children: be
            }), Me && (0, ge.jsx)("span", {
              children: Me
            })]
          }) : He && "cluster" === ie ? ee("hudLayout:clusterNote") : He && "inventory" === ie ? ee("hudLayout:inventoryNote") : He && "menu" === ie ? ee("hudLayout:menuNote") : He && (0, he.u)(ie, Ke.hudElements[ie]) && bi(ie) ? ee("hudLayout:rowIconNote") : He && "arrows" === ie ? ee("hudLayout:arrowsNote") : He && "sprint" === ie ? ee("hudLayout:sprintNote") : (0, Pe.E)(ie) && (0, Ae.m)(Ke.hudElements, ie) ? ee("hudLayout:inventoryHiddenNote", {
            name: (0, Pe.B)(ie, xe, ee, Le)
          }) : null
        }
      };
      return (0, ge.jsxs)("div", {
        ref: Ve,
        className: "HudLayoutSettings",
        children: [(0, ge.jsxs)("div", {
          ref: je,
          className: "HudLayoutBody",
          children: [(0, ge.jsx)("div", {
            className: "HudLayoutOrientation",
            children: ee("landscape" === Me ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, ge.jsx)(qH, {
            preview: {
              layout: ie,
              orientation: Me,
              selected: Ue,
              onSelect: fe,
              onMove: ii,
              canMove: bi,
              actionButtons: xe,
              joystickFixed: ce,
              presence: De,
              keyNames: Le,
              maxHeight: ae,
              apiRef: Ye,
              onMeasured: Oe,
              onReady: ne,
              lockable: yi
            },
            quick: {
              layout: Ke,
              actionButtons: xe,
              keyNames: Le,
              scaleCaps: Be,
              overlaps: Te,
              onScale: Ki.onScale,
              onHidden: Ki.onHidden,
              onReset: Ki.onReset,
              locked: Ge,
              lockable: yi,
              onLocked: Hi
            },
            onFullScreen: () => {
              Ie(!0)
            },
            resting: se,
            onSidePanel: le
          }), se && (0, ge.jsx)(JH, {
            layout: ie,
            orientation: Me,
            selected: Ue,
            onSelect: fe,
            onMove: ii,
            canMove: bi,
            actionButtons: xe,
            joystickFixed: ce,
            presence: De,
            keyNames: Le,
            onScale: Ki.onScale,
            onHidden: Ki.onHidden,
            onReset: Ki.onReset,
            locked: Ge,
            lockable: yi,
            onLocked: Hi,
            apiRef: Ye,
            onClose: Ne
          }), (0, ge.jsx)(OH, {
            safe: Ke.hudSafe,
            onCommit: ee => {
              Qe((ie => (0, Ae.fb)(ie, Me, ee)))
            },
            onPreview: ee => {
              var ie;
              null === (ie = Ye.current) || void 0 === ie || ie.setSafe(ee)
            }
          }), (0, ge.jsx)(qe.c, {
            label: ee("hudLayout:snapCentre"),
            checked: ie.hudSnapCentre,
            onClick: ee => {
              (0, Ae.V)(ee)
            },
            circleInfoText: ee("hudLayout:snapCentreInfo")
          }), (0, ge.jsx)(kH, {
            ...Ki
          }), (0, ge.jsx)(qe.e, {
            label: ee("hudLayout:shape"),
            options: Ae.E.map((ie => ({
              value: ie,
              label: ee(`hudLayout:shape_${ie}`)
            }))),
            value: ie.hudShape,
            onChange: ee => {
              Qe((ie => ({
                ...ie,
                hudShape: ee
              }))), (0, We.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: ee
              })
            }
          }), (0, ge.jsx)(qe.f, {
            name: ee("hudLayout:opacity"),
            min: Ae.d,
            max: 1,
            step: .05,
            initValue: ie.hudKeyOpacity,
            format: ee => `${Math.round(100*ee)}%`,
            circleInfoText: ee("hudLayout:opacityInfo"),
            onChange: ee => {
              var ie;
              null === (ie = Ye.current) || void 0 === ie || ie.setOpacity(ee)
            },
            onChangeComplete: ee => {
              (0, Ae.T)(ee), (0, We.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, ge.jsx)(Je.G, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const ee = te.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await ee.getResult() && (0, Ae.R)()
            }()
          },
          children: ee("hudLayout:resetAll")
        })]
      })
    }
    const WH = 350;
    const tH = [function() {
      const {
        t: ee
      } = (0, ye.v)(), [ie, He] = (0, be.useState)(!1), Me = (0, be.useRef)(null);
      return (0, be.useEffect)((() => {
        var ee;
        ie && (null === (ee = Me.current) || void 0 === ee || ee.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [ie]), (0, ge.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, ge.jsx)(Ze.d, {
          ref: Me,
          icon: "arrows-up-down-left-right",
          title: ee("hudLayout:title"),
          sub: ee("hudLayout:entrySub"),
          expanded: ie,
          onClick: () => {
            He(!ie)
          }
        }), ie && (0, ge.jsx)(dH, {})]
      })
    }, function() {
      const {
        t: ee
      } = (0, ye.v)(), {
        joystickMode: ie,
        touchSpeedCurve: He,
        autorun: be,
        jumpLock: Me,
        touchEdgeGuard: Ke
      } = (0, oe.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, ge.jsxs)(ge.Fragment, {
        children: [(0, ge.jsx)(qe.e, {
          label: ee("settingsMenu:joystick"),
          options: Ee.Hb.map((ie => ({
            value: ie,
            label: ee(Oe[ie])
          }))),
          value: ie,
          onChange: ee => {
            oe.e.setClientEscMenuOptions({
              joystickMode: ee
            })
          },
          circleInfoText: ee("settingsMenu:joystickInfo")
        }), (0, ge.jsx)(qe.c, {
          label: ee("settingsMenu:preciseWalking"),
          checked: He,
          onClick: ee => {
            oe.e.setClientEscMenuOptions({
              touchSpeedCurve: ee
            })
          },
          circleInfoText: ee("settingsMenu:preciseWalkingInfo")
        }), (0, ge.jsx)(qe.c, {
          label: ee("settingsMenu:autoRun"),
          checked: be,
          onClick: ee => {
            oe.e.setClientEscMenuOptions({
              autorun: ee
            })
          },
          circleInfoText: ee("settingsMenu:autoRunInfo")
        }), (0, ge.jsx)(qe.c, {
          label: ee("settingsMenu:jumpLock"),
          checked: Me,
          onClick: ee => {
            oe.e.setClientEscMenuOptions({
              jumpLock: ee
            })
          },
          circleInfoText: ee("settingsMenu:jumpLockInfo")
        }), (0, ge.jsx)(qe.c, {
          label: ee("touchSettings:stopAtEdges"),
          checked: Ke,
          onClick: ee => {
            oe.e.setClientEscMenuOptions({
              touchEdgeGuard: ee
            })
          },
          circleInfoText: ee("touchSettings:stopAtEdgesInfo")
        })]
      })
    }, function() {
      return (0, ge.jsx)(Be.d, {})
    }, function() {
      const {
        t: ee
      } = (0, ye.v)(), {
        clientEscMenuOptions: ie
      } = (0, oe.m)(["clientEscMenuOptions"]);
      return (0, de.d)() ? (0, ge.jsx)(qe.c, {
        label: ee("settingsMenu:vibration"),
        checked: ie.vibration,
        onClick: ee => {
          oe.e.setClientEscMenuOptions({
            vibration: ee
          })
        },
        circleInfoText: ee("settingsMenu:vibrationInfo")
      }) : null
    }];

    function ZH() {
      return (0, ge.jsx)(ge.Fragment, {
        children: tH.map(((ee, ie) => (0, ge.jsx)(ee, {}, ie)))
      })
    }
    var wH = He(4736);

    function DH() {
      const {
        t: ee
      } = (0, ye.v)(), {
        isTouchScreen: ie,
        clientEscMenuOptions: He,
        gameState: Ke
      } = (0, oe.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), Ue = (0, fe.i)("ezBridging"), Fe = (0, fe.i)("ezTowering"), pe = "inGame" !== Ke || !0 === Ue, Xe = (0, Te.d)(), Be = null !== Xe && ("inGame" !== Ke || !0 === Fe), [, Ee] = (0, be.useReducer)((ee => ee + 1), 0), Oe = (0, ze.e)(), [de, We] = (0, be.useState)(wH.f);
      return (0, ge.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Oe && (0, ge.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, ge.jsx)("div", {
            children: ee("controller:settingsControlsNote")
          }), (0, ge.jsx)(Je.M, {
            onClick: () => {
              oe.e.set({
                openSettingsCategory: "controller"
              })
            },
            children: ee("controller:settingsOpenController")
          })]
        }), (0, Re.isTouchscreen)() && !(0, Re.isMobile)() ? (0, ge.jsx)(ge.Fragment, {
          children: (0, ge.jsx)(qe.c, {
            label: ee("settingsMenu:useTouchControls"),
            checked: de,
            onClick: ee => {
              (0, wH.b)(ee), We(ee)
            }
          })
        }) : null, ie && (0, ge.jsx)(ZH, {}), pe && (0, ge.jsx)(qe.c, {
          label: ee("settingsMenu:ezBridging"),
          checked: He.ezBridging,
          onClick: ee => {
            oe.e.setClientEscMenuOptions({
              ezBridging: ee
            })
          },
          circleInfoText: ee("settingsMenu:ezBridgingInfo")
        }), Be && (0, ge.jsx)(qe.c, {
          label: ee("settingsMenu:ezTowering"),
          checked: He.ezTowering,
          onClick: ee => {
            oe.e.setClientEscMenuOptions({
              ezTowering: ee
            })
          },
          circleInfoText: ee("jump" === Xe ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
        }), (0, ge.jsx)(qe.c, {
          label: ee("settingsMenu:crouchToggle"),
          checked: He.crouchIsToggle,
          onClick: ee => {
            oe.e.setClientEscMenuOptions({
              crouchIsToggle: ee
            })
          },
          circleInfoText: ee("settingsMenu:crouchToggleInfo")
        }), (0, ge.jsx)(qe.c, {
          label: ee("settingsMenu:hideUiToggle"),
          checked: He.hideUiIsToggle,
          onClick: ee => {
            oe.e.setClientEscMenuOptions({
              hideUiIsToggle: ee
            })
          },
          circleInfoText: ee("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, ke.b)() && (0, ge.jsx)(qe.f, {
          name: ee("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: He.touchscreenSensitivity,
          onChange: ee => {
            oe.e.setClientEscMenuOptions({
              touchscreenSensitivity: ee
            })
          }
        }), !(0, Re.isMobile)() && (0, ge.jsx)(qe.f, {
          name: ee("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: He.mouseSensitivity,
          onChange: ee => {
            oe.e.setClientEscMenuOptions({
              mouseSensitivity: ee
            })
          }
        }), !(0, Re.isMobile)() && (0, ge.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, ge.jsx)("div", {
            className: "SliderText",
            children: ee("settingsMenu:keyBindings")
          }), Me.g.map((ie => (0, ge.jsx)(PH, {
            title: ee(ie.name.translationKey, ie.name.params),
            defaultOpen: Me.h.has(ie.id),
            children: ie.actions.map((ee => (0, ge.jsx)(AH, {
              noaAction: ee,
              forceUpdate: Ee,
              clashesWith: ie.clashesWith,
              showPadGlyph: Oe
            }, ee)))
          }, ie.name.translationKey))), (0, ge.jsx)(Je.G, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, Me.C)(), Ee()
            },
            children: ee("controls:resetBindings")
          })]
        })]
      })
    }

    function PH(ee) {
      let {
        title: ie,
        defaultOpen: He,
        children: ye
      } = ee;
      const [Me, Ke] = (0, be.useState)(He);
      return (0, ge.jsxs)("div", {
        className: Fe()("ControlsSection", {
          Collapsed: !Me
        }),
        children: [(0, ge.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Ke(!Me)
          },
          children: [(0, ge.jsx)("div", {
            className: "ControlsSectionTitle",
            children: ie
          }), (0, ge.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), Me && (0, ge.jsx)("div", {
          className: "ControlsSectionRows",
          children: ye
        })]
      })
    }

    function AH(ee) {
      let {
        noaAction: ie,
        forceUpdate: He,
        clashesWith: Ue,
        showPadGlyph: oe
      } = ee;
      const {
        t: Re
      } = (0, ye.v)(), ke = (0, Xe.d)(ie), [qe, fe] = (0, be.useState)(!1), [Te, ze] = (0, be.useState)("controls:clickToEnterNewBinding"), [Be, Ee] = (0, be.useState)(null), [Oe, de] = (0, be.useState)(null), We = (0, be.useRef)(null);
      (0, be.useEffect)((() => {
        qe && We.current && We.current.focus()
      }), [qe]);
      const te = Me.q[ie].filter((ee => Ke.k[ee]));
      let Ze = null;
      const we = [],
        De = Ue.flatMap((ee => {
          var ie, He;
          return null !== (ie = null === (He = Me.g.find((ie => ie.id === ee))) || void 0 === He ? void 0 : He.actions) && void 0 !== ie ? ie : []
        }));
      for (const ye of De) {
        if (ye === ie) continue;
        const ee = Me.q[ye];
        for (const ie of ee) te.includes(ie) && we.push(Re(Me.u[ye].translationKey, Me.u[ye].params))
      }
      we.length > 0 && (Ze = Re("controls:sharedBindingsWarning") + " ", Ze += we.join(", "));
      const Pe = () => {
          fe(!1), Ee(null), ze("controls:clickToEnterNewBinding"), de(null)
        },
        Ae = () => "BindingInput_" + ie;
      return (0, ge.jsxs)("div", {
        className: Fe()("ControlRow", {
          WarningBorder: null !== Ze
        }),
        children: [(0, ge.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, ge.jsxs)("div", {
            className: "ControlName",
            children: [Re(Me.u[ie].translationKey, Me.u[ie].params), oe && ke && (0, ge.jsx)(pe.b, {
              glyph: ke,
              className: "ControlPadGlyph"
            })]
          }), (0, ge.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, ge.jsxs)("div", {
              className: "ControlBindingsList",
              children: [te.map((ee => (0, ge.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, ge.jsx)("div", {
                  children: (0, Me.k)(ee)
                }), (0, ge.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const ye = (0, Me.x)(ie, ee);
                    ye.isError() ? de(ye.asError().message) : de(null), He()
                  },
                  children: "\xd7"
                })]
              }, ee))), !qe && (0, ge.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  fe(!0), de(null)
                },
                children: (0, ge.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), qe && (0, ge.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, ge.jsxs)("div", {
                className: "InputContainer",
                children: [(0, ge.jsx)("div", {
                  className: "InputOverlay",
                  children: Be ? (0, Me.k)(Be) : (0, ge.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Re(Te)
                  })
                }), (0, ge.jsx)("input", {
                  ref: We,
                  id: Ae(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: ee => {
                    if ("Escape" === ee.code) return Pe(), ee.preventDefault(), void ee.stopPropagation();
                    const ie = ee.code;
                    Ke.d.includes(ie) ? (de(null), Ee(ie)) : (de("controls:keyIsReserved"), Ee(null)), ee.preventDefault(), ee.stopPropagation()
                  },
                  onMouseDown: ee => {
                    const ie = "Mouse" + (ee.button + 1);
                    document.activeElement && document.activeElement.id === Ae() ? Ke.d.includes(ie) ? (de(null), Ee(ie)) : (de("controls:keyIsReserved"), Ee(null)) : ze("controls:enterNewBinding"), ee.stopPropagation()
                  },
                  onBlur: () => {
                    ze("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, ge.jsx)(Je.c, {
                onPointerDown: ee => {
                  ee.preventDefault()
                },
                onClick: () => {
                  (0, Me.c)(ie, Be), He(), Pe()
                },
                className: "ControlBindingAddButton",
                disabled: null === Be,
                children: Re("general:add")
              }), (0, ge.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  Pe()
                },
                children: "\xd7"
              })]
            }), Oe && (0, ge.jsx)("div", {
              className: "ControlBindingError",
              children: Re(Oe)
            })]
          })]
        }), Ze && (0, ge.jsx)("div", {
          className: "ControlRowWarning",
          children: Ze
        })]
      })
    }
  },
  9614: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(59),
      be = He(1323),
      Me = He(1228);
    const Ke = (0, ye.forwardRef)((function(ee, ie) {
      let {
        icon: He,
        title: ye,
        sub: Ke,
        expanded: Ue,
        onClick: Fe
      } = ee;
      return (0, Me.jsxs)("button", {
        ref: ie,
        type: "button",
        className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
        "aria-expanded": Ue,
        onClick: Fe,
        children: [(0, Me.jsx)(be.e, {
          name: He,
          className: "FeaturedSettingsEntryIcon"
        }), (0, Me.jsxs)("span", {
          className: "FeaturedSettingsEntryText",
          children: [(0, Me.jsx)("span", {
            className: "FeaturedSettingsEntryTitle",
            children: ye
          }), (0, Me.jsx)("span", {
            className: "FeaturedSettingsEntrySub",
            children: Ke
          })]
        }), (0, Me.jsx)("span", {
          className: "FeaturedSettingsEntryChevron",
          children: "\u25be"
        })]
      })
    }))
  },
  9418: (ee, ie, He) => {
    He.d(ie, {
      d: () => Xe,
      f: () => pe,
      g: () => oe,
      h: () => ze,
      k: () => Be,
      m: () => ke
    });
    var ye = He(1657),
      be = He(1774);
    const Me = ee => ee >= 56320 && ee <= 57343,
      Ke = ee => ee >= 55296 && ee <= 56319,
      Ue = (ee, ie) => ie >= 2 && Me(ee.charCodeAt(ie - 1)) && Ke(ee.charCodeAt(ie - 2)) ? ie - 2 : Math.max(0, ie - 1),
      Fe = (ee, ie) => {
        let He;
        var ye, be;
        return He = ee.start !== ee.end ? ie < 0 ? ee.start : ee.end : ie < 0 ? Ue(ee.value, ee.start) : (ye = ee.value, (be = ee.start) + 1 < ye.length && Ke(ye.charCodeAt(be)) && Me(ye.charCodeAt(be + 1)) ? be + 2 : Math.min(ye.length, be + 1)), {
          value: ee.value,
          start: He,
          end: He
        }
      },
      Je = ["text", "search", "url", "email", "tel", "password", "number"],
      oe = ee => !(!(0, be.e)(ee) || ee.isContentEditable || ee.hasAttribute("data-pad-no-osk")) && (ee instanceof HTMLTextAreaElement || ee instanceof HTMLInputElement && Je.includes(ee.type)),
      Re = ee => null !== ee.selectionStart,
      ke = ee => {
        var ie, He;
        const {
          value: ye
        } = ee;
        return {
          value: ye,
          start: null !== (ie = ee.selectionStart) && void 0 !== ie ? ie : ye.length,
          end: null !== (He = ee.selectionEnd) && void 0 !== He ? He : ye.length
        }
      },
      qe = (ee, ie, He) => {
        if (ee.readOnly) return;
        const be = ee instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(be, "value").set.call(ee, ie.value), Re(ee) && ee.setSelectionRange(ie.start, ie.end), (0, ye.e)(ee, new InputEvent("input", {
          bubbles: !0,
          inputType: He
        }))
      };
    let fe = !1;
    const Te = (ee, ie) => !!document.execCommand(ee, !1, ie) || (fe || (fe = !0, console.warn(`execCommand("${ee}") failed; the on-screen keyboard is setting the value directly`)), !1),
      pe = (ee, ie) => {
        Te("insertText", ie) || qe(ee, function(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const ye = ee.value.slice(0, ee.start),
            be = ee.value.slice(ee.end);
          let Me = He < 0 ? ie.length : Math.max(0, He - ye.length - be.length);
          Me > 0 && Me < ie.length && Ke(ie.charCodeAt(Me - 1)) && Me--;
          const Ue = ie.slice(0, Me),
            Fe = ye.length + Ue.length;
          return {
            value: ye + Ue + be,
            start: Fe,
            end: Fe
          }
        }(ke(ee), ie, ee.maxLength), "insertText")
      },
      Xe = ee => {
        Te("delete") || qe(ee, (ee => {
          const ie = ee.start === ee.end ? Ue(ee.value, ee.start) : ee.start;
          return {
            value: ee.value.slice(0, ie) + ee.value.slice(ee.end),
            start: ie,
            end: ie
          }
        })(ke(ee)), "deleteContentBackward")
      },
      ze = (ee, ie) => {
        if (!Re(ee)) return;
        const He = Fe(ke(ee), ie);
        ee.setSelectionRange(He.start, He.end)
      },
      Be = ee => {
        Re(ee) && 0 === ee.selectionStart && 0 === ee.selectionEnd && ee.setSelectionRange(ee.value.length, ee.value.length)
      }
  },
  9570: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue
    });
    var ye = He(18),
      be = He(2166),
      Me = He(1340),
      Ke = He(1385);
    const Ue = async () => {
      if ((0, Ke.n)()) {
        if (!0 !== await Me.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== ye.e.get("gameState")) return
      }(0, be.d)()
    }
  },
  9575: (ee, ie, He) => {
    He.d(ie, {
      d: () => Fe,
      e: () => Me,
      i: () => Ke,
      m: () => be,
      o: () => Ue
    });
    var ye = He(2020);
    const be = "controllerPadShopOpen",
      Me = ee => ye.i.includes(ee),
      Ke = ee => Object.values(ee).some((ee => !1 !== ee.canBuy && !ee.isRewardedAd)),
      Ue = (ee, ie, He) => {
        var ye, be, Ke, Ue;
        const Fe = ee.filter((ee => !Me(ee))),
          Je = null !== ie && ee.includes(ie) ? ie : null;
        return null !== Je && !Me(Je) && He(Je) ? Je : null !== (ye = null !== (be = null !== (Ke = null !== (Ue = Fe.find(He)) && void 0 !== Ue ? Ue : Fe[0]) && void 0 !== Ke ? Ke : Je) && void 0 !== be ? be : ee[0]) && void 0 !== ye ? ye : null
      },
      Fe = ee => ee.userInput || ee.isRewardedAd || "boolean" === typeof ee.isSelected ? null : JSON.stringify([ee.image, ee.cost, ee.currency, ee.amount, ee.customTitle, ee.buyButtonText, ee.description, ee.canBuy])
  },
  9598: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je,
      e: () => oe
    });
    var ye = He(59),
      be = He(1432),
      Me = He(2068),
      Ke = He(1403),
      Ue = He(1422),
      Fe = He(1228);
    const Je = () => {
        const ee = (0, Ke.n)();
        if ((0, ye.useEffect)((() => {
            (0, Ke.i)()
          }), []), !ee) return null;
        const {
          ControllerCategory: ie
        } = ee;
        return (0, Fe.jsx)(Ue.e, {
          children: (0, Fe.jsx)(ie, {})
        })
      },
      oe = () => {
        var ee;
        const ie = (0, Ke.n)(),
          [, He] = (0, ye.useReducer)((ee => ee + 1), 0);
        return (0, be.f)(Me.e, He), null !== (ee = null === ie || void 0 === ie ? void 0 : ie.hasActivePad()) && void 0 !== ee && ee
      }
  },
  9408: (ee, ie, He) => {
    He.d(ie, {
      B: () => We,
      E: () => Je,
      G: () => Ze,
      J: () => Oe,
      K: () => de,
      L: () => pe,
      N: () => Fe,
      Q: () => oe,
      d: () => Xe,
      h: () => te,
      l: () => ge,
      p: () => Ee,
      s: () => fe,
      t: () => Te,
      v: () => ke,
      z: () => qe
    });
    var ye = He(27),
      be = He(1657),
      Me = He(9413),
      Ke = He(9418),
      Ue = He(2450);
    const Fe = ee => (0, Ke.g)(ee),
      Je = ee => {
        const ie = ee.getBoundingClientRect();
        return {
          x: ie.left + ie.width / 2,
          y: ie.top + ie.height / 2
        }
      },
      oe = (ee, ie, He) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: ee.x,
        clientY: ee.y,
        screenX: ee.x,
        screenY: ee.y,
        button: ie,
        buttons: He,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      Re = (ee, ie) => {
        (0, be.e)(ee, ie)
      },
      ke = function(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const ye = 0 === He ? 1 : 2;
        Re(ee, new PointerEvent("pointerdown", oe(ie, He, ye))), Re(ee, new MouseEvent("mousedown", oe(ie, He, ye)))
      },
      qe = function(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Re(ee, new PointerEvent("pointerup", oe(ie, He, 0))), Re(ee, new MouseEvent("mouseup", oe(ie, He, 0)))
      },
      fe = function(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        ke(ee, ie, He), qe(ee, ie, He), Re(ee, 0 === He ? new MouseEvent("click", oe(ie, 0, 0)) : new MouseEvent("contextmenu", oe(ie, 2, 0)))
      },
      Te = function(ee, ie, He) {
        let {
          leaveBelow: ye = null,
          enterBelow: be = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (ee !== ie) {
          if (null !== ee && void 0 !== ee && ee.isConnected) {
            const be = {
              ...oe(He, 0, 0),
              relatedTarget: ie
            };
            Re(ee, new PointerEvent("pointerout", be)), Re(ee, new MouseEvent("mouseout", be));
            const Me = ee => !!ie && ee.contains(ie) || !!ye && ee.contains(ye);
            for (let ie = ee; ie && !Me(ie); ie = ie.parentElement) Re(ie, new PointerEvent("pointerleave", {
              ...be,
              bubbles: !1
            })), Re(ie, new MouseEvent("mouseleave", {
              ...be,
              bubbles: !1
            }))
          }
          if (ie) {
            const ye = {
              ...oe(He, 0, 0),
              relatedTarget: ee
            };
            Re(ie, new PointerEvent("pointerover", ye)), Re(ie, new MouseEvent("mouseover", ye));
            const Me = [],
              Ke = ie => !(null === ee || void 0 === ee || !ee.isConnected) && ie.contains(ee) || !!be && ie.contains(be);
            for (let ee = ie; ee && !Ke(ee); ee = ee.parentElement) Me.push(ee);
            for (const ee of Me.reverse()) Re(ee, new PointerEvent("pointerenter", {
              ...ye,
              bubbles: !1
            })), Re(ee, new MouseEvent("mouseenter", {
              ...ye,
              bubbles: !1
            }));
            Re(ie, new PointerEvent("pointermove", oe(He, 0, 0))), Re(ie, new MouseEvent("mousemove", oe(He, 0, 0)))
          }
        } else ie && (Re(ie, new PointerEvent("pointermove", oe(He, 0, 0))), Re(ie, new MouseEvent("mousemove", oe(He, 0, 0))))
      },
      pe = ee => {
        ye.h.yR(Me.e, ee)
      },
      Xe = ee => {
        if (Fe(ee)) return void pe(ee);
        const ie = ee.hasAttribute("data-pad-focusable") ? ee.querySelector("a[href]") : null,
          He = null !== ie && void 0 !== ie ? ie : ee;
        fe(He, Je(He))
      },
      ze = ".Dropdown-root.is-open",
      Be = ee => {
        const ie = ee.querySelector(".Dropdown-control");
        return Xe(ie), ie
      },
      Ee = ee => {
        var ie;
        const He = null !== (ie = ee.closest(ze)) && void 0 !== ie ? ie : ee.querySelector(ze);
        return He ? Be(He) : null
      },
      ge = ee => {
        for (const ie of document.querySelectorAll(ze)) ie.contains(ee) || Be(ie)
      },
      Oe = ee => null !== ee.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      de = ee => {
        const ie = ee ? document.elementFromPoint(ee.x, ee.y) : null;
        return !(null === ie || void 0 === ie || !ie.closest("[data-pad-repeat]"))
      },
      We = ee => {
        var ie;
        return null !== (ie = [...ee.querySelectorAll("[data-pad-back]")].find(Ue.k)) && void 0 !== ie ? ie : null
      },
      te = ee => {
        const ie = We(ee);
        return !!ie && (Xe(ie), !0)
      },
      Ze = ee => {
        var ie, He, ye, be;
        return null !== (ie = null !== (He = null !== (ye = ee.getAttribute("data-pad-key")) && void 0 !== ye ? ye : ee.getAttribute("href")) && void 0 !== He ? He : null === (be = ee.querySelector("a[href]")) || void 0 === be ? void 0 : be.getAttribute("href")) && void 0 !== ie ? ie : null
      }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);