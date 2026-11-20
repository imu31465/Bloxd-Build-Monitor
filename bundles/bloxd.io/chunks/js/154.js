export const id = 154;
export const ids = [154];
export const modules = {
  8374: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => oz
    });
    var Fz = sz(30),
      Wz = sz(1173),
      Xz = sz(4609),
      Oz = sz(1087);

    function oz(zz) {
      let {
        note: tz
      } = zz;
      const {
        t: sz
      } = (0, Wz.B)(), {
        clientEscMenuOptions: oz
      } = (0, Fz.h)(["clientEscMenuOptions"]);
      return (0, Oz.jsx)(Xz.b, {
        label: sz("touchSettings:actionButtons"),
        checked: oz.touchActionButtons,
        onClick: zz => {
          Fz.b.setClientEscMenuOptions({
            touchActionButtons: zz
          })
        },
        circleInfoText: sz("touchSettings:actionButtonsInfo"),
        note: tz
      })
    }
  },
  8361: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => ds,
      d: () => Ms
    });
    var Fz = sz(1173),
      Wz = sz(65),
      Xz = sz(1910),
      Oz = sz(1920),
      oz = sz(1020),
      vz = sz.n(oz),
      Uz = sz(1419),
      Kz = sz(30),
      uz = sz(106),
      Nz = sz(119),
      bz = sz(4609),
      wz = sz(2290),
      Dz = sz(292),
      gz = sz(1922),
      Hz = sz(1926),
      Bz = sz(8367),
      Pz = sz(8374),
      rz = sz(308),
      Yz = sz(1087);
    const xz = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var mz = sz(8376);
    var Jz = sz(1447),
      Iz = sz(1319),
      Cz = sz(1036),
      ez = sz(1375),
      Zz = sz(2304);
    const Gz = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(Zz.E.map((zz => [zz, "menu"])))
      },
      Tz = zz => Zz.z.filter((tz => Gz[tz] === zz)),
      cz = new Set(Tz("cluster")),
      jz = ["cluster"],
      Az = [...jz, ...Zz.z.filter((zz => !jz.includes(zz) && !Gz[zz]))],
      yz = Az.flatMap((zz => [zz, ...Tz(zz)])).map((zz => ({
        id: zz,
        label: `hudLayout:${zz}`,
        ...Zz.v[zz],
        parent: Gz[zz]
      }))),
      Mz = Object.fromEntries(yz.map((zz => [zz.id, zz]))),
      dz = "data-hud-el";

    function hz(zz, tz, sz, Fz) {
      const Wz = sz(function(zz, tz) {
          return "attack" !== zz || tz ? Mz[zz].label : "hudLayout:attackContext"
        }(zz, tz)),
        Xz = Fz[zz];
      return Xz ? sz("hudLayout:slotWithKey", {
        slot: Wz,
        key: Xz
      }) : Wz
    }

    function Qz(zz, tz, sz, Fz) {
      return zz.map((zz => hz(zz, tz, sz, Fz))).join(", ")
    }

    function kz(zz) {
      let {
        className: tz,
        keepPlace: sz
      } = zz;
      return sz ? (0, Yz.jsx)("div", {
        className: vz()(tz, "Placeholder")
      }) : null
    }

    function iz(zz) {
      let {
        id: tz,
        elements: sz,
        actionButtons: Wz,
        keyNames: Xz,
        className: Oz,
        keepPlace: oz,
        onHidden: vz
      } = zz;
      const {
        t: Kz
      } = (0, Fz.B)();
      if (!Mz[tz].hide) return (0, Yz.jsx)(kz, {
        className: Oz,
        keepPlace: oz
      });
      const uz = (0, Zz.s)(sz, tz);
      return (0, Yz.jsx)(Uz.Q, {
        className: Oz,
        ariaLabel: Kz(uz ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: hz(tz, Wz, Kz, Xz)
        }),
        pressed: !uz,
        onClick: () => {
          vz(tz, !uz)
        },
        children: (0, Yz.jsx)(Cz.c, {
          name: uz ? "eye-slash" : "eye"
        })
      })
    }

    function Lz(zz) {
      var tz;
      let {
        id: sz,
        elements: Wz,
        actionButtons: Xz,
        keyNames: Oz,
        className: oz,
        keepPlace: vz,
        onlyWhenMoved: Kz,
        locked: uz,
        onReset: Nz
      } = zz;
      const {
        t: bz
      } = (0, Fz.B)(), wz = Mz[sz], Dz = (0, Zz.M)(null !== (tz = Wz[sz]) && void 0 !== tz ? tz : Zz.q);
      return !wz.move && !wz.scale || Kz && Dz ? (0, Yz.jsx)(kz, {
        className: oz,
        keepPlace: vz
      }) : (0, Yz.jsx)(Uz.Q, {
        className: oz,
        disabled: Dz || uz,
        ariaLabel: bz("hudLayout:resetElement", {
          name: hz(sz, Xz, bz, Oz)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: sz
        },
        onClick: zz => {
          Kz && qz(zz.currentTarget), Nz(sz)
        },
        children: (0, Yz.jsx)(Cz.c, {
          name: "rotate-left"
        })
      })
    }

    function lz(zz) {
      let {
        id: tz,
        actionButtons: sz,
        keyNames: Wz,
        className: Xz,
        keepPlace: Oz,
        locked: oz,
        lockable: vz,
        onLocked: Kz
      } = zz;
      const {
        t: uz
      } = (0, Fz.B)();
      return vz || oz ? (0, Yz.jsx)(Uz.Q, {
        className: Xz,
        ariaLabel: uz(oz ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: hz(tz, sz, uz, Wz)
        }),
        pressed: oz,
        active: oz,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${oz?"unlock":"lock"}:${tz}`
        },
        onClick: () => {
          Kz(tz, !oz)
        },
        children: (0, Yz.jsx)(Cz.c, {
          name: oz ? "lock" : "lock-open"
        })
      }) : (0, Yz.jsx)(kz, {
        className: Xz,
        keepPlace: Oz
      })
    }

    function nz(zz) {
      let {
        className: tz,
        open: sz,
        name: Wz,
        onToggle: Xz
      } = zz;
      const {
        t: Oz
      } = (0, Fz.B)();
      return (0, Yz.jsx)(Uz.Q, {
        className: tz,
        ariaLabel: Oz(sz ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: Wz
        }),
        pressed: sz,
        analyticsClick: {
          id: "hud_layout.children",
          value: sz ? "close" : "open"
        },
        onClick: () => {
          Xz(!sz)
        },
        children: (0, Yz.jsx)(Cz.c, {
          name: sz ? "angle-up" : "angle-down"
        })
      })
    }

    function az(zz, tz) {
      var sz;
      zz.contains(document.activeElement) && tz.focus({
        preventScroll: !0
      }), null === (sz = (0, ez.c)()) || void 0 === sz || sz.handOverPadFocus(zz, tz)
    }

    function qz(zz) {
      const tz = zz.closest("[data-hud-row]"),
        sz = null === tz || void 0 === tz ? void 0 : tz.querySelector(".HudElementRowName");
      return !(!tz || !sz) && (az(tz, sz), !0)
    }
    const Sz = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function Vz(zz, tz) {
      return "joystick" === zz && !tz
    }

    function Rz() {
      const {
        t: zz
      } = (0, Fz.B)();
      return (0, Yz.jsx)(Uz.Q, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: zz => {
          const tz = zz.currentTarget;
          if (!qz(tz)) {
            const zz = function(zz) {
              var tz, sz;
              const Fz = [zz.previousElementSibling, zz.nextElementSibling].find((zz => zz instanceof HTMLElement && zz.matches(Sz)));
              return null !== (tz = null !== Fz && void 0 !== Fz ? Fz : null === (sz = zz.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === sz ? void 0 : sz.querySelector(`:is(${Sz}):not(.HudFixJoystickButton)`)) && void 0 !== tz ? tz : null
            }(tz);
            zz && az(tz, zz)
          }
          Kz.b.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: zz("hudLayout:fixJoystick")
      })
    }
    var pz = sz(78),
      fz = sz(1264),
      Ez = sz(1113),
      zt = sz(2537),
      tt = sz(8381),
      st = sz(2306),
      Ft = sz(2321),
      Wt = sz(2873);
    const Xt = ["J", "C", "A", "P", "U", "X", "G"],
      Ot = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: Zz.E
      });

    function ot(zz, tz) {
      zz.replaceChildren(...[...tz.childNodes].map((zz => zz.cloneNode(!0))))
    }
    const vt = zz => ({
      [dz]: zz
    });

    function Ut(zz) {
      let {
        id: tz,
        slot: sz,
        icon: Fz,
        label: Xz,
        hidden: Oz,
        className: oz,
        face: Uz
      } = zz;
      const Kz = (0, Wz.useRef)(null);
      return (0, Wz.useLayoutEffect)((() => {
        Uz && Kz.current && ot(Kz.current, Uz)
      }), [Uz]), (0, Yz.jsxs)("div", {
        className: vz()("TouchKeyHit", `TouchSlot${sz}`, oz, {
          HudPreviewGhost: Oz.has(tz)
        }),
        ...vt(tz),
        children: [Uz && (0, Yz.jsx)("div", {
          ref: Kz,
          className: vz()("TouchKey", {
            Labelled: Uz.classList.contains("Labelled")
          })
        }), !Uz && (0, Yz.jsxs)("div", {
          className: vz()("TouchKey", {
            Labelled: void 0 !== Xz
          }),
          children: [Fz && (0, Yz.jsx)(Cz.c, {
            name: Fz
          }), void 0 !== Xz && (0, Yz.jsx)("span", {
            className: "TouchKeyLabel",
            children: Xz
          })]
        })]
      })
    }

    function Kt(zz) {
      let {
        item: tz,
        selected: sz
      } = zz;
      const Fz = (0, Wz.useRef)(null);
      return (0, Wz.useLayoutEffect)((() => {
        Fz.current && ot(Fz.current, tz)
      }), [tz]), (0, Yz.jsx)("div", {
        ref: Fz,
        className: vz()("InvenItem", {
          Selected: sz
        })
      })
    }
    const ut = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      Nt = zz => void 0 === zz ? {} : {
        style: {
          "--parked": zz
        }
      };

    function bt(zz) {
      let {
        id: tz,
        hidden: sz,
        parked: Fz,
        unslotted: Wz = !1
      } = zz;
      return (0, Yz.jsx)("div", {
        className: vz()("TopRightIcon", Ft.k[tz], {
          HudPreviewGhost: sz.has(tz),
          [st.b]: void 0 !== Fz,
          [st.c]: Wz
        }),
        ...Nt(Fz),
        children: (0, Yz.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...vt(tz),
          children: (0, Yz.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Yz.jsx)(Cz.c, {
              name: ut[tz]
            })
          })
        })
      })
    }

    function wt(zz) {
      let {
        portraitPhone: tz,
        icons: sz,
        hidden: Fz,
        moved: Wz,
        trayState: Xz
      } = zz;
      const Oz = tz ? (0, st.B)(sz) : [],
        oz = sz.filter((zz => "settings" === zz)),
        Uz = sz.filter((zz => "settings" !== zz && !Oz.includes(zz))).reverse(),
        Kz = Oz.length > 0 && "gone" === Xz,
        uz = [...oz, ...Kz ? ["tray"] : [], ...Uz].filter((zz => "tray" === zz || Fz.has(zz) && !Wz.has(zz))),
        Nz = zz => {
          const tz = uz.indexOf(zz);
          return tz < 0 ? void 0 : tz
        },
        bz = (zz, tz) => (0, Yz.jsx)(bt, {
          id: zz,
          hidden: Fz,
          parked: tz ? Nz(zz) : void 0,
          unslotted: tz && Fz.has(zz) && Wz.has(zz)
        }, zz);
      return (0, Yz.jsxs)("div", {
        className: vz()("TopRightIcons TouchInGame", {
          Column: tz
        }),
        children: [oz.map((zz => bz(zz, !0))), Oz.length > 0 && (0, Yz.jsxs)("div", {
          className: vz()("TopRightIcon TopRightTrayToggle Open", {
            [st.b]: Kz
          }),
          ...Nt(Nz("tray")),
          children: [(0, Yz.jsx)("div", {
            className: vz()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== Xz
            }),
            children: (0, Yz.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, Yz.jsx)(Cz.c, {
                name: "ellipsis"
              })
            })
          }), (0, Yz.jsx)("div", {
            className: "TopRightTray",
            children: Oz.map((zz => bz(zz, !1)))
          })]
        }), Uz.map((zz => bz(zz, !0)))]
      })
    }

    function Dt(zz) {
      let {
        next: tz,
        hidden: sz
      } = zz;
      return (0, Yz.jsx)("div", {
        className: vz()("HotBarArrow", tz ? "Next" : "Previous", {
          HudPreviewGhost: sz
        }),
        ...vt("arrows"),
        children: (0, Yz.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, Yz.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, Yz.jsx)(Cz.c, {
              name: tz ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function gt() {
      return (0, Yz.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, Yz.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, Yz.jsx)("div", {
            className: "SocialBar",
            children: (0, Yz.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, Yz.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, Yz.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, Yz.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, Yz.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Yz.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Yz.jsx)(Cz.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, Yz.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, Yz.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, Yz.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, Yz.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, Yz.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, Yz.jsx)(Cz.c, {
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
    const Ht = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      Bt = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      Pt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      rt = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function Yt(zz) {
      let {
        presence: tz,
        portraitPhone: sz,
        hidden: Wz,
        actionButtons: Xz,
        joystickFixed: Oz,
        keysAbove: oz,
        auraBar: Uz,
        trayState: Kz,
        moved: Nz
      } = zz;
      const {
        t: bz
      } = (0, Fz.B)(), {
        faces: wz,
        items: Dz
      } = tz, gz = zz => ({
        HudPreviewGhost: Wz.has(zz)
      });
      return (0, Yz.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, Yz.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, Yz.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, Yz.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, Yz.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, Yz.jsx)("div", {
              className: "InGameHeaderGameName",
              children: bz("hudLayout:previewGameName")
            })]
          })
        }), (0, Yz.jsx)("div", {
          className: "TopLeftElements",
          children: (0, Yz.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, Yz.jsxs)("div", {
              className: "Chat",
              children: [(0, Yz.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [bz("hudLayout:previewChatLine"), bz("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), bz("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((zz => (0, Yz.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, Yz.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, Yz.jsx)("div", {
                      className: "IndividualText",
                      children: zz
                    })
                  })
                }, zz)))
              }), (0, Yz.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: vz()("ChatIconWrapper SmallTextLight", gz("chat")),
                ...vt("chat"),
                children: (0, Yz.jsx)(Cz.c, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, Yz.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, Yz.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, Yz.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, Yz.jsx)("div", {
                className: "TopRightIconsContainer",
                ...vt("menu"),
                children: (0, Yz.jsx)(wt, {
                  portraitPhone: sz,
                  icons: tz.rowIcons,
                  hidden: Wz,
                  trayState: Kz,
                  moved: Nz
                })
              })
            }), uz.featureFlags.useSocialFeatures && (0, Yz.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, Yz.jsx)(gt, {})
            })]
          })
        }), (0, Yz.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, Yz.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, Yz.jsxs)("div", {
            className: "TouchInteractKey",
            ...vt("interact"),
            children: [(0, Yz.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, Yz.jsx)(Cz.c, {
                name: "hand-back-point-up"
              })
            }), (0, Yz.jsx)("div", {
              children: bz("hudLayout:previewInteract")
            })]
          })
        }), (0, Yz.jsx)("div", {
          className: "BottomCentre",
          children: (0, Yz.jsxs)("div", {
            className: "BottomElements",
            children: [(0, Yz.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, Yz.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, Yz.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...vt("hotbar"),
                children: (0, Yz.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, Yz.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, Yz.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, Yz.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, Yz.jsx)(Cz.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), Uz && (0, Yz.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, Yz.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, Yz.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, Wt.g)("glint"),
                    alt: ""
                  }), (0, Yz.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, Yz.jsx)("div", {
                  className: "AuraBar",
                  children: (0, Yz.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, Yz.jsx)("div", {
                className: "HotBarRow",
                children: (0, Yz.jsx)("div", {
                  className: vz()("HotBarContainer Touch", {
                    KeysAbove: oz
                  }),
                  children: (0, Yz.jsxs)("div", {
                    className: "HotBar",
                    ...vt("hotbar"),
                    children: [(0, Yz.jsxs)("div", {
                      className: vz()("TouchInventoryKeys", {
                        NoAuraBar: !Uz
                      }),
                      children: [(0, Yz.jsx)("div", {
                        className: vz()("TouchInventoryKey ShopKey", gz("inventory"), {
                          Hidden: !tz.shop
                        }),
                        ...vt("inventory"),
                        children: (0, Yz.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Yz.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Yz.jsx)(Cz.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, Yz.jsx)("div", {
                        className: vz()("TouchInventoryKey BagKey", gz("inventory"), {
                          Hidden: !tz.bag
                        }),
                        ...vt("inventory"),
                        children: (0, Yz.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, Yz.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, Yz.jsx)(Cz.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, Yz.jsx)(Dt, {
                      next: !1,
                      hidden: Wz.has("arrows")
                    }), (0, Yz.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== Dz && Dz.map(((zz, tz) => (0, Yz.jsx)(Kt, {
                        item: zz,
                        selected: zz.classList.contains("Selected")
                      }, tz))), null === Dz && Pt.map((zz => {
                        const tz = rt[zz];
                        return (0, Yz.jsx)("div", {
                          className: vz()("InvenItem", {
                            Selected: 0 === zz
                          }),
                          children: tz && (0, Yz.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, Yz.jsx)(Cz.c, {
                              name: tz
                            })
                          })
                        }, zz)
                      }))]
                    }), (0, Yz.jsx)(Dt, {
                      next: !0,
                      hidden: Wz.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, Yz.jsx)("div", {
              className: "BottomRightElements",
              children: (0, Yz.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== wz && Xt.map((zz => {
                  const tz = wz[zz];
                  return tz && (0, Yz.jsx)(Ut, {
                    id: Ht[zz],
                    slot: zz,
                    face: tz,
                    className: Bt[zz],
                    hidden: Wz
                  }, zz)
                })), null === wz && (0, Yz.jsxs)(Yz.Fragment, {
                  children: [(0, Yz.jsx)(Ut, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: Wz
                  }), (0, Yz.jsx)(Ut, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: Wz
                  }), Xz && (0, Yz.jsxs)(Yz.Fragment, {
                    children: [(0, Yz.jsx)(Ut, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: Wz
                    }), (0, Yz.jsx)(Ut, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: Wz
                    })]
                  }), !Xz && (0, Yz.jsx)(Ut, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: bz("touchKeys:scope"),
                    hidden: Wz
                  }), (0, Yz.jsx)(Ut, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: bz("touchKeys:fly"),
                    hidden: Wz
                  }), (0, Yz.jsx)(Ut, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: Wz
                  })]
                })]
              })
            })]
          })
        }), (0, Yz.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, Yz.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, Yz.jsxs)("div", {
              className: vz()("Joystick Resting HudPreviewJoystick", {
                Floating: !Oz
              }),
              ...vt("joystick"),
              children: [(0, Yz.jsx)("div", {
                className: "JoystickBase"
              }), (0, Yz.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function xt() {
      const [zz, tz] = (0, Wz.useState)({}), sz = (0, Wz.useCallback)((zz => {
        tz((tz => [...new Set([...Object.keys(tz), ...Object.keys(zz)])].every((sz => tz[sz] === zz[sz])) ? tz : zz))
      }), []);
      return [zz, sz]
    }
    const mt = .05;

    function Jt(zz) {
      var tz;
      let {
        selected: sz,
        layout: Wz,
        actionButtons: Xz,
        keyNames: Oz,
        overlaps: oz,
        scaleCaps: Kz,
        joystickFixed: uz,
        onScale: Nz,
        onHidden: bz,
        onReset: wz,
        locked: Dz,
        lockable: gz,
        onLocked: Hz,
        extra: Bz
      } = zz;
      const {
        t: Pz
      } = (0, Fz.B)(), rz = sz ? Mz[sz] : null, xz = null !== sz && Dz.has(sz), mz = (sz && Wz.hudElements[sz] || Zz.q)[2], Jz = null !== (tz = sz && Kz[sz]) && void 0 !== tz ? tz : Zz.h, Iz = zz => {
        sz && Nz(sz, Math.min(Jz, Math.round(100 * (mz + .1 * zz)) / 100))
      };
      return (0, Yz.jsxs)(Yz.Fragment, {
        children: [(0, Yz.jsxs)("div", {
          className: vz()("HudQuickName SmallTextBold", {
            Overlap: oz.length > 0
          }),
          children: [oz.length > 0 && (0, Yz.jsx)(Cz.c, {
            name: "triangle-exclamation"
          }), rz ? hz(rz.id, Xz, Pz, Oz) : Pz("hudLayout:fullScreenHint"), oz.length > 0 && (0, Yz.jsx)("span", {
            className: "HudQuickOverlap",
            children: Pz("hudLayout:overlapsShort", {
              names: Qz(oz, Xz, Pz, Oz)
            })
          })]
        }), (null === rz || void 0 === rz ? void 0 : rz.scale) && (0, Yz.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, Yz.jsx)(Uz.Q, {
            disabled: xz || mz <= Zz.l,
            ariaLabel: Pz("hudLayout:smaller"),
            onClick: () => {
              Iz(-1)
            },
            children: (0, Yz.jsx)(Cz.c, {
              name: "minus"
            })
          }), (0, Yz.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*mz)}%`
          }), (0, Yz.jsx)(Uz.Q, {
            disabled: xz || mz >= Jz,
            ariaLabel: Pz("hudLayout:larger"),
            onClick: () => {
              Iz(1)
            },
            children: (0, Yz.jsx)(Cz.c, {
              name: "plus"
            })
          })]
        }), (rz || Bz) && (0, Yz.jsxs)("div", {
          className: "HudQuickActions",
          children: [rz && (0, Yz.jsxs)(Yz.Fragment, {
            children: [(0, Yz.jsx)(lz, {
              id: rz.id,
              actionButtons: Xz,
              keyNames: Oz,
              locked: xz,
              lockable: gz(rz.id),
              onLocked: Hz
            }), (0, Yz.jsx)(iz, {
              id: rz.id,
              elements: Wz.hudElements,
              actionButtons: Xz,
              keyNames: Oz,
              onHidden: bz
            }), (0, Yz.jsx)(Lz, {
              id: rz.id,
              elements: Wz.hudElements,
              actionButtons: Xz,
              keyNames: Oz,
              locked: xz,
              onReset: wz
            }), Vz(rz.id, uz) && (0, Yz.jsx)(Rz, {})]
          }), Bz]
        })]
      })
    }
    var It = sz(1106),
      Ct = sz(4051);
    const et = "HudPreviewDoc",
      Zt = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      Gt = new Set([et, ...Object.values(Zt)]),
      Tt = new Set(Zz.z.map(Ft.z)),
      ct = new Set(Ft.h),
      jt = 'style, link[rel="stylesheet"]';

    function At(zz, tz, sz, Fz) {
      const Wz = new Map,
        Xz = new Set,
        Oz = new URL(zz.baseURI).origin,
        oz = tz => {
          var sz;
          if ("LINK" !== tz.nodeName) return !0;
          const Fz = null === (sz = tz.getAttribute("href")) || void 0 === sz ? void 0 : sz.trim();
          if (!Fz) return !1;
          try {
            return new URL(Fz, zz.baseURI).origin === Oz
          } catch {
            return !1
          }
        };
      let vz = null;
      const Uz = () => {
          vz !== (0 === Xz.size) && (vz = 0 === Xz.size, null === Fz || void 0 === Fz || Fz(vz))
        },
        Kz = zz => {
          const tz = zz.cloneNode(!0);
          if ("LINK" === tz.tagName) {
            Xz.add(tz);
            const zz = () => {
              Xz.delete(tz), Uz()
            };
            tz.addEventListener("load", zz), tz.addEventListener("error", zz), sz && tz.addEventListener("load", sz)
          }
          return tz
        },
        uz = () => {
          const Fz = function(zz) {
              const tz = [...zz.body.children].filter((zz => zz.matches(jt)));
              return [...zz.head.querySelectorAll(jt), ...tz]
            }(zz).filter(oz),
            Oz = new Set(Fz);
          for (const [zz, tz] of Wz) Oz.has(zz) || (tz.remove(), Wz.delete(zz), Xz.delete(tz));
          let vz = null;
          for (let zz = Fz.length - 1; zz >= 0; zz--) {
            const Xz = Fz[zz];
            let Oz = Wz.get(Xz);
            Oz ? "STYLE" === Xz.tagName && Oz.textContent !== Xz.textContent && (Oz.textContent = Xz.textContent, null === sz || void 0 === sz || sz()) : (Oz = Kz(Xz), Wz.set(Xz, Oz), tz.head.insertBefore(Oz, vz)), vz = Oz
          }
          Uz()
        };
      uz();
      const Nz = new MutationObserver(uz);
      return Nz.observe(zz.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), Nz.observe(zz.body, {
        childList: !0
      }), () => {
        Nz.disconnect()
      }
    }

    function yt(zz, tz, sz) {
      let {
        keysAbove: Fz
      } = sz;
      const Wz = [...zz.documentElement.classList].filter((zz => !Gt.has(zz) && !ct.has(zz))),
        Xz = [...tz.documentElement.classList].filter((zz => ct.has(zz))),
        Oz = [et, Zt.hotbar, Zt.hasShop, Zt.hasBag];
      Fz && Oz.push(Zt.keysAbove), tz.documentElement.className = [...Wz, ...Oz, ...Xz].join(" ")
    }
    const Mt = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function dt(zz, tz, sz, Fz, Wz) {
      const Xz = (0, Zz.A)(sz, Fz, "joystick"),
        Oz = (0, Ft.C)((0, Ft.M)(sz, Fz, Wz), Fz),
        oz = Oz.classes.filter((zz => !Tt.has(zz))),
        vz = tz.documentElement;
      (0, Ft.T)({
        ...Oz,
        classes: oz
      }, {
        vars: vz,
        safe: vz,
        classes: vz
      });
      const Uz = (0, Ft.E)(sz.hudLayouts[Fz].hudSafe, window.innerWidth, window.innerHeight, ht(), (0, Ft.Q)(tz));
      vz.style.setProperty("--preview-joystick-shift-left", `${Uz[3]}px`), vz.style.setProperty("--preview-joystick-shift-bottom", `${Uz[2]}px`), vz.style.setProperty("--preview-joystick-scale", String(Xz[2])), (0, Ct.g)(vz, tz, sz, Fz);
      for (const Kz of Mt) vz.style.setProperty(Kz, zz.documentElement.style.getPropertyValue(Kz) || "0px")
    }

    function ht() {
      return (0, Ft.J)(Kz.b.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function Qt(zz) {
      return (0, Ft.s)(ht(), (0, Ft.Q)(zz))
    }

    function kt(zz, tz, sz) {
      const Fz = zz.documentElement.style,
        Wz = (0, Ft.H)(tz),
        Xz = Fz.getPropertyValue(Wz);
      try {
        return sz((zz => {
          Fz.setProperty(Wz, String(zz))
        }))
      } finally {
        "" === Xz ? Fz.removeProperty(Wz) : Fz.setProperty(Wz, Xz)
      }
    }

    function it(zz, tz) {
      const [sz, Fz] = kt(zz, "hotbar", (tz => {
        const sz = sz => {
          var Fz, Wz;
          return tz(sz), null !== (Fz = null === (Wz = zz.querySelector(".HotBarGameItemsContainer")) || void 0 === Wz ? void 0 : Wz.getBoundingClientRect().width) && void 0 !== Fz ? Fz : 0
        };
        return [sz(1), sz(Zz.h)]
      }));
      return sz <= 0 ? Zz.h : Math.min(Zz.h, Math.max(1, Math.floor(Fz / sz / tz + 1e-6) * tz))
    }
    const Lt = 3,
      lt = .5,
      nt = zz => zz.right - zz.left;
    const qt = (zz, tz) => Math.abs((0, tt.c)(zz).x - (0, tt.c)(tz).x) + Math.abs((0, tt.c)(zz).y - (0, tt.c)(tz).y) + Math.abs(nt(zz) - nt(tz));

    function St(zz, tz, sz, Fz, Wz) {
      let {
        canKeep: Xz = () => !0,
        passes: Oz = Lt,
        before: oz,
        keysAboveOf: vz
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const Uz = void 0 !== vz && vz(zz) !== vz(tz),
        Kz = tz.hudLayouts[sz].hudLocked.filter((zz => Xz(zz) && !(Uz && "inventory" === zz))),
        uz = new Set(Kz);
      if (0 === uz.size) return tz;
      const Nz = [...cz].filter((Fz => !Kz.includes(Fz) && (0, Zz.A)(zz, sz, Fz).join() === (0, Zz.A)(tz, sz, Fz).join())),
        bz = zz => {
          const tz = (0, tt.B)(Nz.flatMap((tz => zz[tz] ? [zz[tz]] : [])));
          return {
            ...zz,
            cluster: null !== tz && void 0 !== tz ? tz : void 0
          }
        },
        wz = zz => {
          const tz = Wz(zz);
          return tz && bz(tz)
        },
        Dz = oz ? bz(oz) : wz(zz);
      let gz = Dz && wz(tz);
      if (!Dz || !gz) return tz;
      let Hz = tz;
      for (let Bz = 0; Bz < Oz && uz.size > 0; Bz++) {
        const zz = new Map;
        for (const tz of uz) {
          const Wz = Dz[tz],
            Xz = gz[tz],
            Oz = Wz && Xz ? Vt(tz, (0, Zz.A)(Hz, sz, tz), Wz, Xz, Fz) : null;
          Oz ? zz.set(tz, Oz) : uz.delete(tz)
        }
        if (0 === zz.size) break;
        let Wz = Hz;
        for (const [tz, Fz] of zz) Wz = (0, Zz.ib)(Wz, sz, tz, Fz);
        const Xz = wz(Wz);
        if (!Xz) return tz;
        let Oz = Hz;
        for (const [tz, Fz] of zz) {
          const zz = Xz[tz];
          zz && qt(Dz[tz], zz) < qt(Dz[tz], gz[tz]) - lt ? Oz = (0, Zz.ib)(Oz, sz, tz, Fz) : uz.delete(tz)
        }
        if (Oz === Hz) break;
        const oz = [...zz.keys()].every((zz => uz.has(zz)));
        if (Hz = Oz, gz = oz ? Xz : wz(Hz), !gz) return tz
      }
      return Wz(Hz), Hz
    }

    function Vt(zz, tz, sz, Fz, Wz) {
      let [Xz, Oz, oz] = tz;
      const vz = Zz.v[zz],
        Uz = {};
      vz.scale && nt(Fz) > 0 && Math.abs(nt(sz) - nt(Fz)) > lt && (Uz.scale = Math.max(Zz.l, Math.min(Zz.h, oz * nt(sz) / nt(Fz))));
      const Kz = (0, tt.c)(sz).x - (0, tt.c)(Fz).x,
        uz = (0, tt.c)(sz).y - (0, tt.c)(Fz).y;
      return vz.move && (Math.abs(Kz) > lt || Math.abs(uz) > lt) && (Uz.dx = Xz + Kz / Wz.width, Uz.dy = Oz + uz / Wz.height), void 0 === Uz.scale && void 0 === Uz.dx ? null : Uz
    }
    let Rt = 0;

    function pt() {
      return Rt > 0
    }
    const ft = zz => 0 === zz.dx && 0 === zz.dy,
      Et = .001,
      zs = zz => Math.abs(zz.dx) >= 5e-4 || Math.abs(zz.dy) >= 5e-4 ? zz : {
        dx: zz.dx,
        dy: zz.dy < 0 ? -.001 : Et
      };

    function ts(zz) {
      let {
        preview: tz,
        stageRef: sz,
        ringRef: Fz,
        centreLineRef: Xz,
        snapCentre: Oz,
        ready: oz,
        measure: vz,
        k: Uz,
        viewport: Kz,
        boxes: uz,
        pieces: Nz,
        selected: bz,
        insets: wz,
        layout: Dz,
        canMove: gz,
        onSelect: Hz,
        onMove: Bz
      } = zz;
      const Pz = (0, Wz.useRef)(null),
        rz = (0, Wz.useCallback)((() => null !== Pz.current), []),
        Yz = (zz, tz) => {
          if (!tz) return null;
          const sz = (0, tt.c)(zz.origin),
            Fz = (0, tt.c)(tz),
            Wz = (zz.to.dx - zz.from.dx) * Kz.width,
            Xz = (zz.to.dy - zz.from.dy) * Kz.height,
            Oz = tz.right - tz.left,
            oz = tz.bottom - tz.top;
          return {
            skew: {
              x: Fz.x - sz.x - Wz,
              y: Fz.y - sz.y - Xz
            },
            box: {
              left: sz.x - Oz / 2,
              top: sz.y - oz / 2,
              right: sz.x + Oz / 2,
              bottom: sz.y + oz / 2
            }
          }
        },
        xz = (zz, sz) => {
          var Wz;
          const Oz = Pz.current;
          if (!Oz || Oz.pointerId !== zz.pointerId) return;
          Pz.current = null, null === (Wz = Xz.current) || void 0 === Wz || Wz.classList.remove("Shown", "Snapped");
          const oz = Fz.current;
          if (oz && null !== Oz.ringStyle && oz.setAttribute("style", Oz.ringStyle), sz && Oz.moved) {
            const zz = ft(Oz.to) ? null : vz(Oz.id),
              tz = zz ? (0, tt.y)(zz, (0, tt.w)(Kz.width, Kz.height, wz)) : {
                x: 0,
                y: 0
              },
              sz = {
                dx: Oz.to.dx + tz.x / Kz.width,
                dy: Oz.to.dy + tz.y / Kz.height
              },
              Fz = ft(Oz.to) ? sz : zs(sz);
            Bz(Oz.id, Fz.dx, Fz.dy)
          } else tz(Oz.id, null), sz && Oz.tapPick && Hz(Oz.tapPick)
        };
      return {
        busy: rz,
        handlers: {
          onPointerDown: zz => {
            var tz;
            if (!oz || Pz.current || !zz.target.closest(".HudPreviewHandle")) return;
            const Fz = sz.current.getBoundingClientRect(),
              Wz = {
                x: (zz.clientX - Fz.left) / Uz,
                y: (zz.clientY - Fz.top) / Uz
              },
              Xz = (0, tt.r)(Wz, Nz, 40 / Uz),
              Oz = "cluster" === bz && void 0 !== uz.cluster && null !== (0, tt.r)(Wz, [{
                id: "cluster",
                box: uz.cluster
              }], 40 / Uz),
              vz = "menu" === bz && void 0 !== uz.menu && (0, tt.d)(uz.menu, Wz) && ("menu" === Xz || null !== Xz && (0, st.v)(Xz, Dz.hudElements[Xz])),
              Kz = Oz ? "cluster" : vz ? "menu" : null,
              wz = null !== Kz,
              Bz = null !== Kz && void 0 !== Kz ? Kz : Xz;
            if (!Bz) return;
            if (function(zz) {
                Rt++;
                const tz = sz => {
                  sz.pointerId === zz && (Rt = Math.max(0, Rt - 1), window.removeEventListener("pointerup", tz, !0), window.removeEventListener("pointercancel", tz, !0))
                };
                window.addEventListener("pointerup", tz, !0), window.addEventListener("pointercancel", tz, !0)
              }(zz.pointerId), !gz(Bz)) return void Hz(wz && Xz ? Xz : Bz);
            Hz(Bz);
            const [rz, Yz] = null !== (tz = Dz.hudElements[Bz]) && void 0 !== tz ? tz : [0, 0], xz = {
              dx: rz,
              dy: Yz
            }, mz = {
              skew: {
                x: 0,
                y: 0
              },
              box: uz[Bz]
            };
            Pz.current = {
              id: Bz,
              pointerId: zz.pointerId,
              startX: zz.clientX,
              startY: zz.clientY,
              origin: uz[Bz],
              from: xz,
              to: xz,
              moved: !1,
              home: ft(xz) ? {
                centre: (0, tt.c)(uz[Bz]),
                anchor: mz
              } : null,
              away: ft(xz) ? null : mz,
              anchor: mz,
              ringStyle: null,
              tapPick: wz ? Xz : null
            }, zz.currentTarget.setPointerCapture(zz.pointerId)
          },
          onPointerMove: zz => {
            const sz = Pz.current;
            if (!sz || sz.pointerId !== zz.pointerId) return;
            const Wz = zz.clientX - sz.startX,
              oz = zz.clientY - sz.startY;
            if (!sz.moved && Math.hypot(Wz, oz) < 5) return;
            const uz = !sz.moved;
            var Nz, bz;
            (sz.moved = !0, uz) && (sz.ringStyle = null !== (Nz = null === (bz = Fz.current) || void 0 === bz ? void 0 : bz.getAttribute("style")) && void 0 !== Nz ? Nz : null);
            const Dz = (0, tt.w)(Kz.width, Kz.height, wz);
            if (!sz.home) {
              var gz;
              sz.to = {
                dx: 0,
                dy: 0
              }, tz(sz.id, sz.to);
              const zz = vz(sz.id),
                Fz = null !== (gz = Yz(sz, zz)) && void 0 !== gz ? gz : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: sz.origin
                },
                Wz = (0, tt.c)(sz.origin);
              sz.home = {
                centre: zz ? (0, tt.c)(zz) : {
                  x: Wz.x - sz.from.dx * Kz.width,
                  y: Wz.y - sz.from.dy * Kz.height
                },
                anchor: Fz
              }
            }
            const Hz = sz.home;
            let Bz = !1;
            const rz = zz => {
                Bz = !1;
                let Fz = (0, tt.h)(zz.box, Wz / Uz, oz / Uz, Dz);
                const Xz = Kz.width / 2;
                if (Oz && Math.abs((0, tt.c)(sz.origin).x + Fz.x - Xz) <= 8 / Uz) {
                  const tz = Xz - (0, tt.c)(sz.origin).x,
                    Wz = (0, tt.h)(zz.box, tz, Fz.y, Dz);
                  Bz = Math.abs(Wz.x - tz) < .01, Bz && (Fz = Wz)
                }
                const vz = (0, tt.p)(sz.from, Fz.x - zz.skew.x, Fz.y - zz.skew.y, Kz.width, Kz.height);
                sz.to = zs(vz), sz.anchor = zz, tz(sz.id, sz.to)
              },
              xz = (0, tt.h)(Hz.anchor.box, Wz / Uz, oz / Uz, Dz),
              mz = Xz.current,
              Jz = (0, tt.c)(sz.origin),
              Iz = ((0, Zz.Q)(sz.id) ? 20 : 6) / Uz;
            if (Math.abs(Jz.x + xz.x - Hz.centre.x) <= Iz && Math.abs(Jz.y + xz.y - Hz.centre.y) <= Iz) sz.to = {
              dx: 0,
              dy: 0
            }, sz.anchor = Hz.anchor, Bz = Oz && Math.abs(Hz.centre.x - Kz.width / 2) < 1, tz(sz.id, sz.to);
            else if (sz.away) rz(sz.away);
            else {
              var Cz;
              rz(Hz.anchor), sz.away = null !== (Cz = Yz(sz, vz(sz.id))) && void 0 !== Cz ? Cz : Hz.anchor, rz(sz.away)
            }
            null === mz || void 0 === mz || mz.classList.add("Shown"), null === mz || void 0 === mz || mz.classList.toggle("Snapped", Bz), (zz => {
              const tz = Fz.current;
              if (tz) {
                const {
                  skew: sz,
                  box: Fz
                } = zz.anchor;
                tz.style.left = Fz.left * Uz + "px", tz.style.top = Fz.top * Uz + "px", tz.style.width = (Fz.right - Fz.left) * Uz + "px", tz.style.height = (Fz.bottom - Fz.top) * Uz + "px", tz.style.translate = `${((zz.to.dx-zz.from.dx)*Kz.width+sz.x)*Uz}px ${((zz.to.dy-zz.from.dy)*Kz.height+sz.y)*Uz}px`
              }
            })(sz)
          },
          onPointerUp: zz => {
            xz(zz, !0)
          },
          onPointerCancel: zz => {
            xz(zz, !1)
          }
        }
      }
    }

    function ss(zz, tz) {
      return Object.keys(zz).filter((zz => zz !== tz)).map((tz => zz[tz]))
    }

    function Fs(zz) {
      const tz = [],
        sz = tz => (0, Zz.Q)(tz) && !zz.documentElement.classList.contains((0, Ft.D)(tz));
      for (const Oz of zz.querySelectorAll(`[${dz}]`)) {
        const zz = sz(Oz.getAttribute(dz)) ? Oz.querySelector(".ScaleOnHover") : null,
          Fz = (null !== zz && void 0 !== zz ? zz : Oz).getBoundingClientRect();
        (Fz.width > 0 || Fz.height > 0) && tz.push({
          id: Oz.getAttribute(dz),
          box: {
            left: Fz.left,
            top: Fz.top,
            right: Fz.right,
            bottom: Fz.bottom
          }
        })
      }
      const Fz = zz => (0, tt.B)(tz.filter((tz => {
          let {
            id: sz
          } = tz;
          return zz(sz)
        })).map((zz => {
          let {
            box: tz
          } = zz;
          return tz
        }))),
        Wz = {};
      for (const Oz of new Set(tz.map((zz => zz.id)))) Wz[Oz] = Fz((zz => zz === Oz));
      const Xz = Fz((zz => cz.has(zz)));
      return Xz && (Wz.cluster = Xz), {
        boxes: Wz,
        pieces: tz
      }
    }

    function Ws(zz, tz, sz) {
      const Fz = tz.right - tz.left,
        Wz = tz.bottom - tz.top;
      return kt(zz, "cluster", (tz => {
        const Xz = sz => {
            tz(sz);
            const Fz = [...zz.querySelectorAll(`[${dz}]:not(.HudPreviewGhost)`)].filter((zz => cz.has(zz.getAttribute(dz)))).map((zz => {
                const tz = zz.getBoundingClientRect();
                return {
                  left: tz.left,
                  top: tz.top,
                  right: tz.right,
                  bottom: tz.bottom
                }
              })),
              Wz = (0, tt.B)(Fz);
            return Wz ? {
              w: Wz.right - Wz.left,
              h: Wz.bottom - Wz.top
            } : null
          },
          Oz = zz => !zz || zz.w <= Fz && zz.h <= Wz,
          oz = Xz(1),
          vz = Xz(Zz.h);
        if (!oz || Oz(vz)) return Zz.h;
        const Uz = (zz, tz, sz) => tz > zz ? 1 + (sz - zz) * (Zz.h - 1) / (tz - zz) : Zz.h;
        let Kz = Math.floor(Math.min(Zz.h, Uz(oz.w, vz.w, Fz), Uz(oz.h, vz.h, Wz)) / sz + 1e-6) * sz;
        for (; Kz > 1 && !Oz(Xz(Kz));) Kz = Math.round(100 * (Kz - sz)) / 100;
        return Math.max(1, Kz)
      }))
    }

    function Xs(zz) {
      yt(document, zz, {
        keysAbove: !1
      });
      const tz = parseFloat(getComputedStyle(zz.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        sz = Number.isFinite(tz) && tz < 0;
      return yt(document, zz, {
        keysAbove: sz
      }), sz
    }

    function Os(zz, tz) {
      let {
        layout: sz,
        orientation: Fz,
        viewport: Xz,
        replicaKey: Oz,
        joystickFixed: oz,
        busy: vz
      } = tz;
      const [Uz, Kz] = (0, Wz.useState)(null), [uz, Nz] = (0, Wz.useState)({
        boxes: {},
        pieces: []
      }), [bz, wz] = (0, Wz.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [Dz, gz] = (0, Wz.useState)(!1), [Hz, Bz] = (0, Wz.useState)(!1), [Pz, rz] = (0, Wz.useState)(!1), Yz = (0, Wz.useCallback)((zz => {
        Bz(zz), zz && rz(!0)
      }), []), xz = sz.hudLayouts[Fz].hudSafe;
      (0, Wz.useLayoutEffect)((() => {
        const tz = zz.current.contentDocument;
        tz.open(), tz.write("<!DOCTYPE html><html><head></head><body></body></html>"), tz.close(), Kz(tz)
      }), [zz]);
      const mz = (0, Wz.useCallback)((() => {
          Uz && ((0, st.y)(Uz), Nz(Fs(Uz)), wz(function(zz, tz) {
            const sz = Qt(zz),
              [Fz, Wz, Xz, Oz] = tz ? (0, Ft.v)(tz, window.innerWidth, window.innerHeight, sz) : sz;
            return {
              top: Fz,
              right: Wz,
              bottom: Xz,
              left: Oz
            }
          }(Uz, xz)))
        }), [Uz, xz]),
        Jz = (0, Wz.useCallback)((() => {
          Uz && gz(Xs(Uz))
        }), [Uz]),
        Iz = (0, Wz.useRef)((() => {}));
      return Iz.current = () => {
        Jz(), vz() || mz()
      }, (0, Wz.useLayoutEffect)((() => {
        if (Uz) return At(document, Uz, (() => {
          Iz.current()
        }), Yz)
      }), [Uz, Yz]), (0, Wz.useLayoutEffect)(Jz, [Jz, Xz]), (0, Wz.useLayoutEffect)((() => {
        Uz && (yt(document, Uz, {
          keysAbove: Dz
        }), dt(document, Uz, sz, Fz, oz), Jz(), mz())
      }), [Uz, sz, Fz, Dz, Oz, oz, Xz, mz, Jz]), (0, Wz.useEffect)((() => {
        var zz;
        if (!Uz) return;
        const tz = new ResizeObserver((() => {
          vz() || mz()
        }));
        for (const sz of Uz.querySelectorAll(`[${dz}]`)) tz.observe(sz);
        return null === (zz = Uz.fonts) || void 0 === zz || zz.ready.then(mz), () => {
          tz.disconnect()
        }
      }), [Uz, mz, vz, Oz]), {
        doc: Uz,
        boxes: uz.boxes,
        pieces: uz.pieces,
        insets: bz,
        keysAbove: Dz,
        ready: Hz,
        settled: Pz
      }
    }
    const os = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      vs = (zz, tz, sz) => {
        const Fz = zz => (0, st.v)(zz, sz.hudElements[zz]);
        return "cluster" === zz && cz.has(tz) || "cluster" === tz && cz.has(zz) || "menu" === zz && Fz(tz) || "menu" === tz && Fz(zz) || os.some((Fz => {
          let [Wz, Xz] = Fz;
          const Oz = sz.hudElements.hotbar,
            oz = "inventory" === Xz && sz.hudLocked.includes(Xz) && void 0 !== Oz && !(0, Zz.M)(Oz);
          return (zz === Wz && tz === Xz || zz === Xz && tz === Wz) && !oz
        }))
      };
    const Us = ["Above", "Below", "Left", "Right"];

    function Ks(zz, tz, sz, Fz, Wz) {
      const Xz = sz[zz],
        Oz = (Xz.left + Xz.right) / 2,
        oz = (Xz.top + Xz.bottom) / 2,
        vz = (7.5 * tz.length + 14) / Fz,
        Uz = 18 / Fz,
        Kz = {
          Above: {
            left: Oz - vz / 2,
            top: Xz.top - Uz,
            right: Oz + vz / 2,
            bottom: Xz.top
          },
          Below: {
            left: Oz - vz / 2,
            top: Xz.bottom,
            right: Oz + vz / 2,
            bottom: Xz.bottom + Uz
          },
          Left: {
            left: Xz.left - vz,
            top: oz - Uz / 2,
            right: Xz.left,
            bottom: oz + Uz / 2
          },
          Right: {
            left: Xz.right,
            top: oz - Uz / 2,
            right: Xz.right + vz,
            bottom: oz + Uz / 2
          }
        },
        uz = ss(sz, zz),
        Nz = {
          left: 0,
          top: 0,
          right: Wz.width,
          bottom: Wz.height
        };
      return Us[(0, tt.l)(Us.map((zz => Kz[zz])), uz, {
        bounds: Nz
      })]
    }

    function us() {
      const [zz, tz] = (0, Ez.c)();
      return (0, Wz.useMemo)((() => ({
        width: zz,
        height: tz
      })), [zz, tz])
    }

    function Ns(zz) {
      var tz;
      const {
        layout: sz,
        orientation: Xz,
        selected: Oz,
        onSelect: oz,
        onMove: Uz,
        canMove: Kz,
        actionButtons: uz,
        joystickFixed: Nz,
        presence: bz,
        keyNames: Dz,
        maxHeight: gz,
        fill: Hz = !1,
        apiRef: Bz
      } = zz, {
        t: Pz
      } = (0, Fz.B)(), rz = us(), xz = (null !== (tz = (0, wz.e)("maxAuraLevel")) && void 0 !== tz ? tz : 0) > 0, mz = sz.hudLayouts[Xz], Jz = (0, Wz.useRef)(null), Iz = (0, Wz.useRef)(null), ez = (0, Wz.useRef)(null), Gz = (0, Wz.useRef)(null), Tz = (0, Wz.useRef)(null), jz = (0, Wz.useRef)(null), Az = (0, zt.d)(Jz).width, yz = Hz ? 1 : Az > 0 ? (0, tt.v)(Az, rz.width, rz.height, gz) : 0, Mz = (0, Wz.useRef)((() => !1)), dz = (0, Wz.useCallback)((() => Mz.current()), []), {
        doc: Qz,
        boxes: kz,
        pieces: iz,
        insets: Lz,
        keysAbove: lz,
        ready: nz,
        settled: az
      } = Os(ez, {
        layout: sz,
        orientation: Xz,
        viewport: rz,
        replicaKey: `${uz}:${Nz}:${xz}`,
        joystickFixed: Nz,
        busy: dz
      }), qz = (0, Wz.useCallback)((zz => {
        Qz && dt(document, Qz, zz, Xz, Nz)
      }), [Qz, Xz, Nz]), Sz = (0, Wz.useCallback)((zz => Qz && az ? (qz(zz), Xs(Qz), function(zz) {
        let {
          boxes: tz,
          pieces: sz
        } = zz;
        const Fz = sz.find((zz => "inventory" === zz.id));
        if (!Fz || !tz.inventory) return tz;
        const Wz = (0, tt.c)(tz.inventory),
          Xz = nt(Fz.box) / 2,
          Oz = (Fz.box.bottom - Fz.box.top) / 2;
        return {
          ...tz,
          inventory: {
            left: Wz.x - Xz,
            top: Wz.y - Oz,
            right: Wz.x + Xz,
            bottom: Wz.y + Oz
          }
        }
      }(Fs(Qz))) : null), [Qz, az, qz]), Vz = (0, Wz.useCallback)((zz => !!Qz && (qz(zz), Xs(Qz))), [Qz, qz]), Rz = (0, Wz.useRef)(null), fz = (0, Wz.useRef)(null), Ez = (0, Wz.useRef)(sz);
      Ez.current = sz;
      const Wt = (0, Wz.useCallback)((() => {
        null !== Rz.current && (cancelAnimationFrame(Rz.current), Rz.current = null)
      }), []);
      (0, Wz.useEffect)((() => Wt), [sz, Wt]);
      const {
        lockable: Xt
      } = zz, Ot = (0, Wz.useCallback)((zz => {
        if (qz(zz), !az || 0 === sz.hudLayouts[Xz].hudLocked.length) return;
        const tz = sz;
        Wt(), Rz.current = requestAnimationFrame((() => {
          var sz;
          if (Rz.current = null, Ez.current !== tz) return;
          const Fz = (null === (sz = fz.current) || void 0 === sz ? void 0 : sz.from) === tz ? fz.current.boxes : Sz(tz);
          Fz && (fz.current = {
            from: tz,
            boxes: Fz
          }), qz(Fz ? St(tz, zz, Xz, rz, Sz, {
            canKeep: Xt,
            passes: 1,
            before: Fz,
            keysAboveOf: Vz
          }) : zz)
        }))
      }), [qz, az, sz, Xz, rz, Sz, Vz, Xt, Wt]), ot = ts({
        preview: (zz, tz) => {
          tz ? Ot((0, Zz.ib)(sz, Xz, zz, tz)) : (Wt(), qz(sz))
        },
        stageRef: Iz,
        ringRef: Gz,
        centreLineRef: Tz,
        snapCentre: sz.hudSnapCentre,
        ready: az,
        measure: zz => {
          var tz;
          return Qz && nz && null !== (tz = Fs(Qz).boxes[zz]) && void 0 !== tz ? tz : null
        },
        k: yz,
        viewport: rz,
        boxes: kz,
        pieces: iz,
        selected: Oz,
        insets: Lz,
        layout: mz,
        canMove: Kz,
        onSelect: oz,
        onMove: (zz, tz, sz) => {
          Wt(), Uz(zz, tz, sz)
        }
      });
      (0, Wz.useLayoutEffect)((() => {
        Mz.current = ot.busy
      }), [ot.busy]);
      const vt = (0, Wz.useRef)([]),
        Ut = (0, Wz.useRef)(mz.hudElements);
      (0, Wz.useEffect)((() => {
        for (const Wz of Object.keys(mz.hudElements)) {
          var zz, tz, sz, Fz;
          (null !== (zz = null === (tz = mz.hudElements[Wz]) || void 0 === tz ? void 0 : tz[2]) && void 0 !== zz ? zz : 1) > (null !== (sz = null === (Fz = Ut.current[Wz]) || void 0 === Fz ? void 0 : Fz[2]) && void 0 !== sz ? sz : 1) && Kz(Wz) && !(0, st.v)(Wz, mz.hudElements[Wz]) && vt.current.push(Wz)
        }
        Ut.current = mz.hudElements
      }), [mz.hudElements, Kz]), (0, Wz.useEffect)((() => {
        if (!nz) return;
        const zz = vt.current.shift(),
          tz = zz && kz[zz];
        if (!zz || !tz || ot.busy()) return;
        const sz = (0, tt.y)(tz, (0, tt.w)(rz.width, rz.height, Lz));
        if (0 !== sz.x || 0 !== sz.y) {
          var Fz;
          const [tz, Wz] = null !== (Fz = mz.hudElements[zz]) && void 0 !== Fz ? Fz : [0, 0];
          Uz(zz, tz + sz.x / rz.width, Wz + sz.y / rz.height)
        }
      }), [kz, nz]), (0, Wz.useImperativeHandle)(Bz, (() => ({
        setScale: (zz, tz) => {
          Ot((0, Zz.ib)(sz, Xz, zz, {
            scale: tz
          }))
        },
        setOpacity: zz => {
          qz({
            ...sz,
            hudKeyOpacity: zz
          })
        },
        keepLocks: (zz, tz) => (Wt(), St(zz, tz, Xz, rz, Sz, {
          canKeep: Xt,
          keysAboveOf: Vz
        })),
        setSafe: zz => {
          Ot((0, Zz.nb)(sz, Xz, zz)), jz.current && (jz.current.style.inset = (0, Ft.v)(zz, rz.width, rz.height, Qt(null !== Qz && void 0 !== Qz ? Qz : document)).map((zz => zz * yz + "px")).join(" "))
        }
      })), [qz, Ot, Sz, Vz, Wt, Xt, Qz, sz, Xz, rz, yz]);
      const Kt = new Set(Object.keys(mz.hudElements).filter((zz => (0, Zz.s)(mz.hudElements, zz)))),
        ut = Oz ? kz[Oz] : void 0,
        Nt = Oz ? hz(Oz, uz, Pz, Dz) : "",
        bt = (0, It.e)(rz.width, rz.height),
        wt = Oz ? function(zz, tz, sz, Fz) {
          const Wz = zz => (0, Zz.s)(sz.hudElements, zz) || (0, st.u)(zz, sz, Fz);
          if (Wz(zz)) return [];
          const Xz = tz.filter((tz => {
              let {
                id: sz
              } = tz;
              return "cluster" === zz ? cz.has(sz) : sz === zz
            })),
            Oz = new Set;
          for (const oz of tz) oz.id === zz || Oz.has(oz.id) || vs(zz, oz.id, sz) || Wz(oz.id) || void 0 === sz.hudElements[zz] && void 0 === sz.hudElements[oz.id] || Xz.some((zz => {
            let {
              id: tz,
              box: sz
            } = zz;
            return tz !== oz.id && (0, tt.f)(sz, oz.box, 2)
          })) && Oz.add(oz.id);
          return [...Oz]
        }(Oz, iz, mz, bt) : [],
        Dt = new Set((0, st.q)(mz.hudElements)),
        gt = (0, st.D)(mz, (0, st.B)(bz.rowIcons)).state,
        Ht = wt.join(),
        Bt = (0, Wz.useRef)(zz.onReady);
      Bt.current = zz.onReady, (0, Wz.useEffect)((() => {
        var zz;
        null === (zz = Bt.current) || void 0 === zz || zz.call(Bt, az)
      }), [az]);
      const Pt = (0, Wz.useRef)(zz.onMeasured);
      (0, Wz.useLayoutEffect)((() => {
        Pt.current = zz.onMeasured
      })), (0, Wz.useEffect)((() => {
        var zz;
        const tz = Qz ? {
          hotbar: it(Qz, mt),
          cluster: Ws(Qz, (0, tt.w)(rz.width, rz.height, Lz), mt)
        } : {};
        null === (zz = Pt.current) || void 0 === zz || zz.call(Pt, kz, Ht ? Ht.split(",") : [], tz)
      }), [kz, Ht, Qz, rz, Lz]);
      const rt = zz => ({
        left: zz.left * yz,
        top: zz.top * yz,
        width: (zz.right - zz.left) * yz,
        height: (zz.bottom - zz.top) * yz
      });
      return (0, Yz.jsx)("div", {
        ref: Jz,
        className: vz()("HudPreviewBox", {
          Fill: Hz
        }),
        style: {
          height: rz.height * yz
        },
        children: (0, Yz.jsxs)("div", {
          ref: Iz,
          className: "HudPreviewStage",
          style: {
            width: rz.width * yz,
            height: rz.height * yz
          },
          children: [(0, Yz.jsx)("iframe", {
            ref: ez,
            className: "HudPreviewFrame",
            title: Pz("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: rz.width,
              height: rz.height,
              transform: `scale(${yz})`
            }
          }), Qz && (0, pz.createPortal)((0, Yz.jsx)(Yt, {
            presence: bz,
            portraitPhone: bt,
            hidden: Kt,
            actionButtons: uz,
            joystickFixed: Nz,
            keysAbove: lz,
            auraBar: xz,
            trayState: gt,
            moved: Dt
          }), Qz.body), (0, Yz.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...ot.handlers,
            children: [(0, Yz.jsx)("div", {
              ref: jz,
              className: "HudPreviewSafeZone",
              style: {
                top: Lz.top * yz,
                right: Lz.right * yz,
                bottom: Lz.bottom * yz,
                left: Lz.left * yz
              }
            }), iz.map(((zz, tz) => {
              let {
                id: sz,
                box: Fz
              } = zz;
              return (0, Yz.jsx)("div", {
                className: "HudPreviewHandle",
                style: rt((0, tt.k)(Fz, 40 / yz))
              }, `${sz}:${tz}`)
            })), mz.hudLocked.map((zz => {
              const tz = kz[zz];
              return tz && (0, Yz.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: tz.right * yz,
                  top: tz.top * yz
                },
                children: (0, Yz.jsx)(Cz.c, {
                  name: "lock"
                })
              }, zz)
            })), (0, Yz.jsx)("div", {
              ref: Tz,
              className: "HudPreviewCentreLine",
              style: {
                left: rz.width / 2 * yz
              }
            }), Oz && ut && (0, Yz.jsx)("div", {
              ref: Gz,
              className: vz()("HudPreviewRing", {
                Fixed: !Kz(Oz),
                Overlap: wt.length > 0
              }),
              style: rt(ut),
              children: (0, Yz.jsx)("span", {
                className: vz()("HudPreviewRingLabel", Ks(Oz, Nt, kz, yz, rz)),
                children: Nt
              })
            })]
          })]
        })
      })
    }

    function bs(zz, tz) {
      (0, Wz.useEffect)((() => {
        var sz;
        null === (sz = zz.current) || void 0 === sz || sz.toggleAttribute("inert", tz)
      }), [zz, tz])
    }
    const ws = "hudFullScreen";

    function Ds(zz) {
      let {
        onScale: tz,
        onHidden: sz,
        onReset: Xz,
        locked: Oz,
        lockable: oz,
        onLocked: vz,
        onClose: Kz,
        ...uz
      } = zz;
      const {
        t: Nz
      } = (0, Fz.B)(), bz = (0, Wz.useRef)(null);
      (0, fz.s)("popup", bz, Kz),
      function(zz) {
        const tz = (0, Wz.useRef)(zz);
        tz.current = zz, (0, Wz.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [ws]: !0
          }, "");
          let zz = !1;
          const sz = () => {
            zz = !0, tz.current()
          };
          return window.addEventListener("popstate", sz), () => {
            var tz;
            window.removeEventListener("popstate", sz), !zz && null !== (tz = window.history.state) && void 0 !== tz && tz[ws] && window.history.back()
          }
        }), [])
      }(Kz), (0, Wz.useEffect)((() => {
        function zz(zz) {
          "Escape" === zz.key && (zz.stopPropagation(), Kz())
        }
        return window.addEventListener("keydown", zz, !0), () => {
          window.removeEventListener("keydown", zz, !0)
        }
      }), [Kz]);
      const {
        selected: wz
      } = uz, Dz = (0, Wz.useRef)(null), gz = (0, Wz.useRef)(null), [Hz, Bz] = (0, Wz.useState)(!1);
      bs(gz, !Hz);
      const [Pz, rz] = (0, Wz.useState)(null), [xz, mz] = (0, Wz.useState)([]), [Jz, Iz] = xt(), Cz = (0, Wz.useRef)(uz.selected);
      Cz.current = uz.selected;
      const ez = (0, Wz.useRef)({}),
        Zz = (0, Wz.useCallback)((() => {
          const zz = Dz.current;
          zz && rz(function(zz, tz, sz) {
            var Fz;
            const {
              innerWidth: Wz,
              innerHeight: Xz
            } = window, Oz = zz.offsetWidth, oz = zz.offsetHeight, vz = Math.max(ht()[0], 6), Uz = [];
            for (const Nz of [vz, .2 * Xz, .5 * Xz - oz / 2, .33 * Xz])
              for (const zz of [.5, .3, .7]) Uz.push({
                left: Math.max(0, Math.min(Wz - Oz - 6, Math.max(6, Wz * zz - Oz / 2))),
                top: Nz
              });
            const Kz = Uz.map((zz => ({
                left: zz.left - 6,
                top: zz.top - 6,
                right: zz.left + Oz + 6,
                bottom: zz.top + oz + 6
              }))),
              uz = ss(tz, sz);
            return Uz[(0, tt.l)(Kz, uz, {
              avoid: sz && null !== (Fz = tz[sz]) && void 0 !== Fz ? Fz : null
            })]
          }(zz, ez.current, Cz.current))
        }), []),
        Gz = (0, Wz.useCallback)(((zz, tz, sz) => {
          mz(tz), Iz(sz), ez.current = zz, Zz()
        }), [Zz, Iz]);
      return (0, Wz.useLayoutEffect)(Zz, [uz.selected, Zz]), (0, pz.createPortal)((0, Yz.jsxs)("div", {
        ref: bz,
        className: "HudFullScreenEditor",
        children: [(0, Yz.jsx)(Ns, {
          ...uz,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: Gz,
          onReady: Bz,
          lockable: oz
        }), (0, Yz.jsxs)("div", {
          ref: Dz,
          className: "HudFullScreenToolbar",
          style: null === Pz ? void 0 : {
            left: Pz.left,
            top: Pz.top,
            transform: "none"
          },
          children: [(0, Yz.jsx)("div", {
            ref: gz,
            className: "HudFullScreenControls",
            children: (0, Yz.jsx)(Jt, {
              selected: wz,
              layout: uz.layout.hudLayouts[uz.orientation],
              actionButtons: uz.actionButtons,
              keyNames: uz.keyNames,
              overlaps: xz,
              scaleCaps: Jz,
              onScale: tz,
              onHidden: sz,
              onReset: Xz,
              locked: Oz,
              lockable: oz,
              onLocked: vz,
              joystickFixed: uz.joystickFixed
            })
          }), (0, Yz.jsx)(Uz.h, {
            className: "HudFullScreenDone",
            onClick: Kz,
            padDefaultFocus: !0,
            children: Nz("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const gs = zz => `${Math.round(100*zz)}%`;

    function Hs(zz) {
      let {
        info: tz,
        tuple: sz,
        props: Wz
      } = zz;
      const {
        t: Xz
      } = (0, Fz.B)();
      return (0, Yz.jsx)(bz.g, {
        name: Xz("hudLayout:size"),
        min: Zz.l,
        max: Zz.h,
        step: mt,
        initValue: sz[2],
        disabled: Wz.locked.has(tz.id),
        selectableMax: Wz.scaleCaps[tz.id],
        cappedNote: Xz("hudLayout:sizeCapped"),
        format: gs,
        onChange: zz => {
          Wz.onScalePreview(tz.id, zz)
        },
        onChangeComplete: zz => {
          Wz.onScale(tz.id, zz)
        }
      })
    }

    function Bs(zz) {
      const {
        t: tz
      } = (0, Fz.B)(), {
        present: sz,
        elements: Xz,
        selected: Oz,
        onSelect: oz,
        onHidden: Uz,
        onReset: Kz,
        note: uz,
        actionButtons: Nz,
        keyNames: bz,
        sizeBesidePreview: wz,
        locked: Dz,
        lockable: gz,
        onLocked: Hz
      } = zz, {
        rowIconsOpen: Bz,
        onRowIconsOpen: Pz
      } = zz, rz = (0, Wz.useRef)(null), xz = null !== Oz && (Bz || !(0, Zz.Q)(Oz));
      return (0, Wz.useEffect)((() => {
        var zz;
        const tz = Oz ? null === (zz = rz.current) || void 0 === zz ? void 0 : zz.querySelector(`[data-hud-row="${Oz}"]`) : null;
        if (!tz) return;
        const sz = tz.closest(".SettingsMenuRight"),
          Fz = performance.now();
        let Wz = null;
        const Xz = () => {
            clearInterval(vz), null === sz || void 0 === sz || sz.removeEventListener("scroll", oz)
          },
          oz = () => {
            pt() || Xz()
          },
          vz = setInterval((() => {
            const zz = performance.now();
            zz - Fz > 1500 ? Xz() : pt() ? Wz = null : null === Wz ? Wz = zz : zz - Wz >= 150 && (Xz(), function(zz) {
              var tz;
              const sz = zz.closest(".SettingsMenuRight"),
                Fz = null === (tz = zz.closest(".HudLayoutSettings")) || void 0 === tz ? void 0 : tz.querySelector(".HudLayoutPreviewBox");
              if (!sz || !Fz) return;
              const Wz = Fz.getBoundingClientRect().bottom + 8,
                Xz = sz.getBoundingClientRect().bottom - 8,
                Oz = zz.getBoundingClientRect();
              Oz.top < Wz ? sz.scrollBy({
                top: Oz.top - Wz,
                behavior: "smooth"
              }) : Oz.bottom > Xz && sz.scrollBy({
                top: Math.min(Oz.bottom - Xz, Oz.top - Wz),
                behavior: "smooth"
              })
            }(tz))
          }), 50);
        return null === sz || void 0 === sz || sz.addEventListener("scroll", oz, {
          passive: !0
        }), Xz
      }), [Oz, xz]), (0, Yz.jsx)("div", {
        ref: rz,
        className: "SettingBoxGroup HudElementList",
        children: yz.filter((zz => sz.has(zz.id) && (Bz || !(0, Zz.Q)(zz.id)))).map((sz => {
          const Fz = ((zz, tz) => {
              var sz;
              return null !== (sz = zz[tz]) && void 0 !== sz ? sz : Zz.q
            })(Xz, sz.id),
            Wz = (0, Zz.s)(Xz, sz.id),
            rz = sz.id === Oz,
            xz = sz.scale && !wz,
            mz = uz(sz.id, rz);
          return (0, Yz.jsxs)("div", {
            "data-hud-row": sz.id,
            className: vz()("SettingBox HudElementRow", {
              Open: rz,
              Hidden: Wz,
              Child: void 0 !== sz.parent
            }),
            children: [(0, Yz.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, Yz.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": xz ? rz : void 0,
                onClick: () => {
                  oz(sz.id)
                },
                children: [hz(sz.id, Nz, tz, bz), sz.scale && 1 !== Fz[2] && !(rz && xz) && (0, Yz.jsx)("span", {
                  className: "HudElementRowSize",
                  children: gs(Fz[2])
                }), xz && (0, Yz.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, Yz.jsx)(lz, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: sz.id,
                actionButtons: Nz,
                keyNames: bz,
                locked: Dz.has(sz.id),
                lockable: gz(sz.id),
                onLocked: Hz
              }), "menu" === sz.id && (0, Yz.jsx)(nz, {
                className: "HudElementRowIcon",
                open: Bz,
                name: hz(sz.id, Nz, tz, bz),
                onToggle: Pz
              }), "menu" !== sz.id && (0, Yz.jsx)(iz, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: sz.id,
                elements: Xz,
                actionButtons: Nz,
                keyNames: bz,
                onHidden: Uz
              }), (0, Yz.jsx)(Lz, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: Dz.has(sz.id),
                id: sz.id,
                elements: Xz,
                actionButtons: Nz,
                keyNames: bz,
                onReset: Kz
              })]
            }), rz && xz && (0, Yz.jsx)(Hs, {
              info: sz,
              tuple: Fz,
              props: zz
            }), mz && (0, Yz.jsx)("div", {
              className: "HudElementNote",
              children: mz
            })]
          }, sz.id)
        }))
      })
    }

    function Ps(zz) {
      let {
        preview: tz,
        quick: sz,
        onFullScreen: Xz,
        resting: Oz,
        onSidePanel: oz
      } = zz;
      const {
        t: vz
      } = (0, Fz.B)(), Kz = us(), uz = (0, Wz.useRef)(null), {
        width: Nz
      } = (0, zt.d)(uz), bz = Math.floor(Kz.width * Math.min(1, tz.maxHeight / Kz.height)), wz = Nz - bz - 12, Dz = wz >= 130, gz = Nz > 0;
      (0, Wz.useEffect)((() => {
        gz && oz(Dz)
      }), [gz, Dz, oz]);
      const Hz = (0, tt.v)(Dz ? bz : Nz, Kz.width, Kz.height, tz.maxHeight),
        Bz = Oz ? (0, Yz.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: Kz.height * Hz
          }
        }) : (0, Yz.jsx)(Ns, {
          ...tz
        }),
        Pz = zz => (0, Yz.jsxs)(Uz.Q, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: vz("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: Xz,
          children: [(0, Yz.jsx)(Cz.c, {
            name: "expand"
          }), zz && (0, Yz.jsx)("span", {
            children: vz("hudLayout:fullScreen")
          })]
        });
      return (0, Yz.jsxs)("div", {
        ref: uz,
        className: "SettingBox HudLayoutPreviewBox",
        children: [Nz > 0 && Dz && (0, Yz.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, Yz.jsx)("div", {
            style: {
              width: bz
            },
            children: Bz
          }), (0, Yz.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, Yz.jsx)(Jt, {
              selected: tz.selected,
              ...sz,
              joystickFixed: tz.joystickFixed,
              extra: Pz(!tz.selected || wz >= 278)
            })
          })]
        }), Nz > 0 && !Dz && (0, Yz.jsxs)(Yz.Fragment, {
          children: [Bz, (0, Yz.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: Pz(!1)
          })]
        })]
      })
    }
    var rs = sz(2313),
      Ys = sz(4042),
      xs = sz(2296);
    const ms = zz => {
      const tz = Ft.l * ("sides" === zz ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(tz / 2))
    };

    function Is(zz, tz, sz) {
      const [Fz, Wz, Xz, Oz] = zz;
      return "sides" === tz ? [Fz, sz, Xz, sz] : [sz, Wz, sz, Oz]
    }
    const Cs = [null, null, null, null],
      es = zz => `${zz}px`;

    function Zs(zz) {
      let {
        safe: tz,
        onPreview: sz,
        onCommit: Xz
      } = zz;
      const {
        t: Oz
      } = (0, Fz.B)(), oz = (0, Ft.v)(null !== tz && void 0 !== tz ? tz : Cs, window.innerWidth, window.innerHeight, Qt(document).map(Math.round)), vz = (0, Wz.useRef)(null !== tz && void 0 !== tz ? tz : Cs);
      vz.current = null !== tz && void 0 !== tz ? tz : Cs;
      const Kz = zz => {
        const tz = Math.min(ms(zz), "sides" === zz ? Math.max(oz[1], oz[3]) : Math.max(oz[0], oz[2]));
        return (0, Yz.jsx)(bz.g, {
          name: Oz("sides" === zz ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: ms(zz),
          step: 2,
          initValue: tz,
          format: es,
          onChange: tz => {
            sz(Is(vz.current, zz, tz))
          },
          onChangeComplete: Fz => {
            if (Fz === tz) return void sz(vz.current);
            const Wz = Is(vz.current, zz, Fz);
            vz.current = Wz, Xz(Wz), (0, Jz.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: zz
            })
          }
        })
      };
      return (0, Yz.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, Yz.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, Yz.jsx)("div", {
            children: Oz("hudLayout:safeZone")
          }), (0, Yz.jsx)(Uz.Q, {
            active: null === tz,
            pressed: null === tz,
            onClick: () => {
              Xz(null)
            },
            children: Oz("hudLayout:safeZoneAuto")
          })]
        }), Kz("sides"), Kz("ends")]
      })
    }

    function Gs() {
      const {
        t: zz
      } = (0, Fz.B)(), tz = (0, Zz.eb)(), {
        clientEscMenuOptions: sz
      } = (0, Kz.h)(["clientEscMenuOptions"]), Xz = (0, rs.i)(), Oz = tz.hudLayouts[Xz], [oz, vz] = (0, Wz.useState)(null), {
        rowIconsOpen: uz,
        onRowIconsOpen: Nz,
        select: wz
      } = function(zz, tz) {
        const [sz, Fz] = (0, Wz.useState)((() => Zz.E.some((tz => void 0 !== zz.hudElements[tz] || zz.hudLocked.includes(tz))))), Xz = (0, Wz.useCallback)((zz => {
          tz(zz), (0, Zz.Q)(zz) && Fz(!0)
        }), [tz]);
        return {
          rowIconsOpen: sz,
          onRowIconsOpen: Fz,
          select: Xz
        }
      }(Oz, vz), [Dz, gz] = (0, Wz.useState)([]), [Hz, Bz] = (0, Wz.useState)(null), [Pz, rz] = xt(), xz = (0, Wz.useCallback)(((zz, tz, sz) => {
        gz(tz), rz(sz);
        const Fz = Object.keys(zz);
        Bz((zz => (null === zz || void 0 === zz ? void 0 : zz.size) === Fz.length && Fz.every((tz => zz.has(tz))) ? zz : new Set(Fz)))
      }), [rz]), {
        gameState: mz
      } = (0, Kz.h)(["gameState"]), Cz = (0, xs.h)(), [ez] = (0, Wz.useState)((() => "inGame" === mz ? function(zz, tz) {
        const sz = zz.querySelector(".InGameUi .TouchComponentsButtons");
        if (!sz) return Ot;
        const Fz = {},
          Wz = {};
        for (const Uz of Xt) {
          const zz = sz.querySelector(`.TouchSlot${Uz} > .TouchKey`);
          if (zz) {
            var Xz, Oz;
            Fz[Uz] = zz.cloneNode(!0);
            const tz = (null !== (Xz = null === (Oz = zz.querySelector(".TouchKeyLabel")) || void 0 === Oz ? void 0 : Oz.textContent) && void 0 !== Xz ? Xz : "").split(/\s+/).filter((zz => !/[\d\xd7]/.test(zz))).join(" ");
            tz && (Wz[Uz] = tz)
          }
        }
        const oz = tz => {
            const sz = zz.querySelector(`.InGameUi ${tz}`);
            return null !== sz && !sz.classList.contains("Hidden")
          },
          vz = [...zz.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((zz => zz.cloneNode(!0)));
        return {
          faces: Object.keys(Fz).length > 0 ? Fz : null,
          names: Wz,
          shop: oz(".TouchInventoryKey.ShopKey"),
          bag: oz(".TouchInventoryKey.BagKey"),
          items: vz.length > 0 ? vz : null,
          rowIcons: tz
        }
      }(document, Cz) : Ot)), Gz = (0, Wz.useRef)(null), Tz = (0, Wz.useRef)(null), cz = function(zz) {
        const [tz, sz] = (0, Wz.useState)((() => .4 * window.innerHeight));
        return (0, Wz.useLayoutEffect)((() => {
          var tz;
          const Fz = null === (tz = zz.current) || void 0 === tz ? void 0 : tz.closest(".SettingsMenuRight");
          if (!Fz) return;
          const Wz = () => {
            const zz = Fz.clientHeight < Ts ? .4 : .5;
            sz(Math.max(80, Fz.clientHeight * zz - 24))
          };
          Wz();
          const Xz = new ResizeObserver(Wz);
          return Xz.observe(Fz), () => {
            Xz.disconnect()
          }
        }), [zz]), tz
      }(Tz), jz = (0, Ys.n)(sz.joystickMode), Az = sz.touchActionButtons, dz = (0, Wz.useMemo)((() => function(zz, tz) {
        const sz = {},
          Fz = [
            ["extra", "X"],
            ["game", "G"]
          ];
        tz || Fz.push(["attack", "P"]);
        for (const [Wz, Xz] of Fz) {
          const tz = zz.names[Xz];
          tz && (sz[Wz] = tz)
        }
        return sz
      }(ez, Az)), [ez, Az]);
      (0, Wz.useEffect)((() => {
        (0, Jz.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [hz, kz] = (0, Wz.useState)(!1), [iz, Lz] = (0, Wz.useState)(!1), lz = (0, Wz.useRef)(null);
      bs(lz, !iz);
      const [nz, az] = (0, Wz.useState)(!1), qz = (0, Wz.useCallback)((() => {
        az(!1)
      }), []), Sz = (0, Wz.useMemo)((() => new Set(Oz.hudLocked)), [Oz.hudLocked]), pz = zz => {
        var tz, sz;
        const Fz = (0, Zz.r)(),
          Wz = zz(Fz);
        (0, Zz._)(null !== (tz = null === (sz = Gz.current) || void 0 === sz ? void 0 : sz.keepLocks(Fz, Wz)) && void 0 !== tz ? tz : Wz)
      }, fz = (zz, tz) => {
        pz((sz => (0, Zz.ib)(sz, Xz, zz, tz)))
      }, Ez = (zz, tz, sz) => {
        fz(zz, {
          dx: tz,
          dy: sz
        }), (0, Jz.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${zz}`
        })
      }, zt = (zz, tz) => {
        pz((sz => (0, Zz.lb)(sz, Xz, zz, tz)))
      }, tt = zz => {
        const tz = Mz[zz];
        return (tz.move || tz.scale) && ("joystick" !== zz || jz) && !(0, st.v)(zz, Oz.hudElements[zz])
      }, Ft = zz => Mz[zz].move && ("joystick" !== zz || jz) && !Sz.has(zz), Wt = new Set(yz.map((zz => zz.id)).filter((zz => {
        const tz = (0, Zz.Q)(zz) && !ez.rowIcons.includes(zz);
        return null === Hz || Hz.has(zz) || (0, Zz.s)(Oz.hudElements, zz) && !tz
      }))), ot = {
        present: Wt,
        actionButtons: Az,
        keyNames: dz,
        scaleCaps: Pz,
        sizeBesidePreview: hz,
        elements: Oz.hudElements,
        selected: oz,
        onSelect: wz,
        rowIconsOpen: uz,
        onRowIconsOpen: Nz,
        onScalePreview: (zz, tz) => {
          var sz;
          null === (sz = Gz.current) || void 0 === sz || sz.setScale(zz, tz)
        },
        onScale: (zz, tz) => {
          fz(zz, {
            scale: tz
          }), (0, Jz.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${zz}`
          })
        },
        onHidden: (zz, tz) => {
          fz(zz, {
            hidden: tz
          }), (0, Jz.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${tz?"hide":"show"}:${zz}`
          })
        },
        onReset: zz => {
          fz(zz, Zz.d)
        },
        locked: Sz,
        lockable: tt,
        onLocked: zt,
        note: (tz, sz) => {
          const Fz = sz && Dz.length > 0 ? zz("hudLayout:overlapsNote", {
            names: Qz(Dz, Az, zz, dz)
          }) : null;
          return sz && Vz(tz, jz) ? (0, Yz.jsxs)(Yz.Fragment, {
            children: [Fz && (0, Yz.jsx)("span", {
              children: Fz
            }), (0, Yz.jsx)("span", {
              children: zz("hudLayout:floatingJoystickNote")
            }), !hz && (0, Yz.jsx)(Rz, {})]
          }) : Fz || (sz && Sz.has(tz) ? zz("hudLayout:lockedNote") : sz && "cluster" === tz ? zz("hudLayout:clusterNote") : sz && "menu" === tz ? zz("hudLayout:menuNote") : sz && (0, st.v)(tz, Oz.hudElements[tz]) && Ft(tz) ? zz("hudLayout:rowIconNote") : sz && "arrows" === tz ? zz("hudLayout:arrowsNote") : "inventory" === tz && (0, Zz.s)(Oz.hudElements, "inventory") ? zz("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, Yz.jsxs)("div", {
        ref: Tz,
        className: "HudLayoutSettings",
        children: [(0, Yz.jsxs)("div", {
          ref: lz,
          className: "HudLayoutBody",
          children: [(0, Yz.jsx)("div", {
            className: "HudLayoutOrientation",
            children: zz("landscape" === Xz ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, Yz.jsx)(Ps, {
            preview: {
              layout: tz,
              orientation: Xz,
              selected: oz,
              onSelect: wz,
              onMove: Ez,
              canMove: Ft,
              actionButtons: Az,
              joystickFixed: jz,
              presence: ez,
              keyNames: dz,
              maxHeight: cz,
              apiRef: Gz,
              onMeasured: xz,
              onReady: Lz,
              lockable: tt
            },
            quick: {
              layout: Oz,
              actionButtons: Az,
              keyNames: dz,
              scaleCaps: Pz,
              overlaps: Dz,
              onScale: ot.onScale,
              onHidden: ot.onHidden,
              onReset: ot.onReset,
              locked: Sz,
              lockable: tt,
              onLocked: zt
            },
            onFullScreen: () => {
              az(!0)
            },
            resting: nz,
            onSidePanel: kz
          }), nz && (0, Yz.jsx)(Ds, {
            layout: tz,
            orientation: Xz,
            selected: oz,
            onSelect: wz,
            onMove: Ez,
            canMove: Ft,
            actionButtons: Az,
            joystickFixed: jz,
            presence: ez,
            keyNames: dz,
            onScale: ot.onScale,
            onHidden: ot.onHidden,
            onReset: ot.onReset,
            locked: Sz,
            lockable: tt,
            onLocked: zt,
            apiRef: Gz,
            onClose: qz
          }), (0, Yz.jsx)(Zs, {
            safe: Oz.hudSafe,
            onCommit: zz => {
              pz((tz => (0, Zz.nb)(tz, Xz, zz)))
            },
            onPreview: zz => {
              var tz;
              null === (tz = Gz.current) || void 0 === tz || tz.setSafe(zz)
            }
          }), (0, Yz.jsx)(bz.b, {
            label: zz("hudLayout:snapCentre"),
            checked: tz.hudSnapCentre,
            onClick: zz => {
              (0, Zz.Y)(zz)
            },
            circleInfoText: zz("hudLayout:snapCentreInfo")
          }), (0, Yz.jsx)(Bs, {
            ...ot
          }), (0, Yz.jsx)(bz.d, {
            label: zz("hudLayout:shape"),
            options: Zz.I.map((tz => ({
              value: tz,
              label: zz(`hudLayout:shape_${tz}`)
            }))),
            value: tz.hudShape,
            onChange: zz => {
              pz((tz => ({
                ...tz,
                hudShape: zz
              }))), (0, Jz.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: zz
              })
            }
          }), (0, Yz.jsx)(bz.g, {
            name: zz("hudLayout:opacity"),
            min: Zz.g,
            max: 1,
            step: .05,
            initValue: tz.hudKeyOpacity,
            format: zz => `${Math.round(100*zz)}%`,
            circleInfoText: zz("hudLayout:opacityInfo"),
            onChange: zz => {
              var tz;
              null === (tz = Gz.current) || void 0 === tz || tz.setOpacity(zz)
            },
            onChangeComplete: zz => {
              (0, Zz.W)(zz), (0, Jz.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, Yz.jsx)(Uz.H, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const zz = Iz.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await zz.getResult() && (0, Zz.U)()
            }()
          },
          children: zz("hudLayout:resetAll")
        })]
      })
    }
    const Ts = 350;
    const cs = [function() {
      const {
        t: zz
      } = (0, Fz.B)(), [tz, sz] = (0, Wz.useState)(!1), Xz = (0, Wz.useRef)(null);
      return (0, Wz.useEffect)((() => {
        var zz;
        tz && (null === (zz = Xz.current) || void 0 === zz || zz.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [tz]), (0, Yz.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, Yz.jsxs)("button", {
          ref: Xz,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": tz,
          onClick: () => {
            sz(!tz)
          },
          children: [(0, Yz.jsx)(Cz.c, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, Yz.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, Yz.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: zz("hudLayout:title")
            }), (0, Yz.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: zz("hudLayout:entrySub")
            })]
          }), (0, Yz.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), tz && (0, Yz.jsx)(Gs, {})]
      })
    }, function() {
      const {
        t: zz
      } = (0, Fz.B)(), {
        joystickMode: tz,
        touchSpeedCurve: sz,
        autorun: Wz,
        jumpLock: Xz
      } = (0, Kz.h)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Yz.jsxs)(Yz.Fragment, {
        children: [(0, Yz.jsx)(bz.d, {
          label: zz("settingsMenu:joystick"),
          options: rz.zb.map((tz => ({
            value: tz,
            label: zz(xz[tz])
          }))),
          value: tz,
          onChange: zz => {
            Kz.b.setClientEscMenuOptions({
              joystickMode: zz
            })
          },
          circleInfoText: zz("settingsMenu:joystickInfo")
        }), (0, Yz.jsx)(bz.b, {
          label: zz("settingsMenu:preciseWalking"),
          checked: sz,
          onClick: zz => {
            Kz.b.setClientEscMenuOptions({
              touchSpeedCurve: zz
            })
          },
          circleInfoText: zz("settingsMenu:preciseWalkingInfo")
        }), (0, Yz.jsx)(bz.b, {
          label: zz("settingsMenu:autoRun"),
          checked: Wz,
          onClick: zz => {
            Kz.b.setClientEscMenuOptions({
              autorun: zz
            })
          },
          circleInfoText: zz("settingsMenu:autoRunInfo")
        }), (0, Yz.jsx)(bz.b, {
          label: zz("settingsMenu:jumpLock"),
          checked: Xz,
          onClick: zz => {
            Kz.b.setClientEscMenuOptions({
              jumpLock: zz
            })
          },
          circleInfoText: zz("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, Yz.jsx)(Pz.b, {})
    }, function() {
      const {
        t: zz
      } = (0, Fz.B)(), {
        clientEscMenuOptions: tz
      } = (0, Kz.h)(["clientEscMenuOptions"]);
      return (0, mz.c)() ? (0, Yz.jsx)(bz.b, {
        label: zz("settingsMenu:vibration"),
        checked: tz.vibration,
        onClick: zz => {
          Kz.b.setClientEscMenuOptions({
            vibration: zz
          })
        },
        circleInfoText: zz("settingsMenu:vibrationInfo")
      }) : null
    }];

    function As() {
      return (0, Yz.jsx)(Yz.Fragment, {
        children: cs.map(((zz, tz) => (0, Yz.jsx)(zz, {}, tz)))
      })
    }
    var ys = sz(4027);

    function Ms() {
      const {
        t: zz
      } = (0, Fz.B)(), {
        isTouchScreen: tz,
        clientEscMenuOptions: sz,
        gameState: Oz
      } = (0, Kz.h)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), oz = (0, wz.e)("ezBridging"), vz = (0, wz.e)("ezTowering"), gz = "inGame" !== Oz || !0 === oz, Hz = (0, Dz.e)() && ("inGame" !== Oz || !0 === vz), [, Pz] = (0, Wz.useReducer)((zz => zz + 1), 0), rz = (0, Bz.g)(), [xz, mz] = (0, Wz.useState)(ys.d);
      return (0, Yz.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [rz && (0, Yz.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, Yz.jsx)("div", {
            children: zz("controller:settingsControlsNote")
          }), (0, Yz.jsx)(Uz.Q, {
            onClick: () => {
              Kz.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: zz("controller:settingsOpenController")
          })]
        }), (0, uz.isTouchscreen)() && !(0, uz.isMobile)() ? (0, Yz.jsx)(Yz.Fragment, {
          children: (0, Yz.jsx)(bz.b, {
            label: zz("settingsMenu:useTouchControls"),
            checked: xz,
            onClick: zz => {
              (0, ys.c)(zz), mz(zz)
            }
          })
        }) : null, tz && (0, Yz.jsx)(As, {}), gz && (0, Yz.jsx)(bz.b, {
          label: zz("settingsMenu:ezBridging"),
          checked: sz.ezBridging,
          onClick: zz => {
            Kz.b.setClientEscMenuOptions({
              ezBridging: zz
            })
          },
          circleInfoText: zz("settingsMenu:ezBridgingInfo")
        }), Hz && (0, Yz.jsx)(bz.b, {
          label: zz("settingsMenu:ezTowering"),
          checked: sz.ezTowering,
          onClick: zz => {
            Kz.b.setClientEscMenuOptions({
              ezTowering: zz
            })
          },
          circleInfoText: zz("settingsMenu:ezToweringInfo")
        }), (0, Yz.jsx)(bz.b, {
          label: zz("settingsMenu:crouchToggle"),
          checked: sz.crouchIsToggle,
          onClick: zz => {
            Kz.b.setClientEscMenuOptions({
              crouchIsToggle: zz
            })
          },
          circleInfoText: zz("settingsMenu:crouchToggleInfo")
        }), (0, Yz.jsx)(bz.b, {
          label: zz("settingsMenu:hideUiToggle"),
          checked: sz.hideUiIsToggle,
          onClick: zz => {
            Kz.b.setClientEscMenuOptions({
              hideUiIsToggle: zz
            })
          },
          circleInfoText: zz("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, Nz.c)() && (0, Yz.jsx)(bz.g, {
          name: zz("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: sz.touchscreenSensitivity,
          onChange: zz => {
            Kz.b.setClientEscMenuOptions({
              touchscreenSensitivity: zz
            })
          }
        }), !(0, uz.isMobile)() && (0, Yz.jsx)(bz.g, {
          name: zz("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: sz.mouseSensitivity,
          onChange: zz => {
            Kz.b.setClientEscMenuOptions({
              mouseSensitivity: zz
            })
          }
        }), !(0, uz.isMobile)() && (0, Yz.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Yz.jsx)("div", {
            className: "SliderText",
            children: zz("settingsMenu:keyBindings")
          }), Xz.h.map((tz => (0, Yz.jsx)(ds, {
            title: zz(tz.name.translationKey, tz.name.params),
            defaultOpen: Xz.k.has(tz.id),
            children: tz.actions.map((zz => (0, Yz.jsx)(hs, {
              noaAction: zz,
              forceUpdate: Pz,
              clashesWith: tz.clashesWith,
              showPadGlyph: rz
            }, zz)))
          }, tz.name.translationKey))), (0, Yz.jsx)(Uz.H, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, Xz.H)(), Pz()
            },
            children: zz("controls:resetBindings")
          })]
        })]
      })
    }

    function ds(zz) {
      let {
        title: tz,
        defaultOpen: sz,
        children: Fz
      } = zz;
      const [Xz, Oz] = (0, Wz.useState)(sz);
      return (0, Yz.jsxs)("div", {
        className: vz()("ControlsSection", {
          Collapsed: !Xz
        }),
        children: [(0, Yz.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Oz(!Xz)
          },
          children: [(0, Yz.jsx)("div", {
            className: "ControlsSectionTitle",
            children: tz
          }), (0, Yz.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), Xz && (0, Yz.jsx)("div", {
          className: "ControlsSectionRows",
          children: Fz
        })]
      })
    }

    function hs(zz) {
      let {
        noaAction: tz,
        forceUpdate: sz,
        clashesWith: oz,
        showPadGlyph: Kz
      } = zz;
      const {
        t: uz
      } = (0, Fz.B)(), Nz = (0, Hz.c)(tz), [bz, wz] = (0, Wz.useState)(!1), [Dz, Bz] = (0, Wz.useState)("controls:clickToEnterNewBinding"), [Pz, rz] = (0, Wz.useState)(null), [xz, mz] = (0, Wz.useState)(null), Jz = (0, Wz.useRef)(null);
      (0, Wz.useEffect)((() => {
        bz && Jz.current && Jz.current.focus()
      }), [bz]);
      const Iz = Xz.x[tz].filter((zz => Oz.i[zz]));
      let Cz = null;
      const ez = [],
        Zz = oz.flatMap((zz => {
          var tz, sz;
          return null !== (tz = null === (sz = Xz.h.find((tz => tz.id === zz))) || void 0 === sz ? void 0 : sz.actions) && void 0 !== tz ? tz : []
        }));
      for (const Fz of Zz) {
        if (Fz === tz) continue;
        const zz = Xz.x[Fz];
        for (const tz of zz) Iz.includes(tz) && ez.push(uz(Xz.B[Fz].translationKey, Xz.B[Fz].params))
      }
      ez.length > 0 && (Cz = uz("controls:sharedBindingsWarning") + " ", Cz += ez.join(", "));
      const Gz = () => {
          wz(!1), rz(null), Bz("controls:clickToEnterNewBinding"), mz(null)
        },
        Tz = () => "BindingInput_" + tz;
      return (0, Yz.jsxs)("div", {
        className: vz()("ControlRow", {
          WarningBorder: null !== Cz
        }),
        children: [(0, Yz.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Yz.jsxs)("div", {
            className: "ControlName",
            children: [uz(Xz.B[tz].translationKey, Xz.B[tz].params), Kz && Nz && (0, Yz.jsx)(gz.e, {
              glyph: Nz,
              className: "ControlPadGlyph"
            })]
          }), (0, Yz.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Yz.jsxs)("div", {
              className: "ControlBindingsList",
              children: [Iz.map((zz => (0, Yz.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Yz.jsx)("div", {
                  children: (0, Xz.r)(zz)
                }), (0, Yz.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Fz = (0, Xz.D)(tz, zz);
                    Fz.isError() ? mz(Fz.asError().message) : mz(null), sz()
                  },
                  children: "\xd7"
                })]
              }, zz))), !bz && (0, Yz.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  wz(!0), mz(null)
                },
                children: (0, Yz.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), bz && (0, Yz.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Yz.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Yz.jsx)("div", {
                  className: "InputOverlay",
                  children: Pz ? (0, Xz.r)(Pz) : (0, Yz.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: uz(Dz)
                  })
                }), (0, Yz.jsx)("input", {
                  ref: Jz,
                  id: Tz(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: zz => {
                    if ("Escape" === zz.code) return Gz(), zz.preventDefault(), void zz.stopPropagation();
                    const tz = zz.code;
                    Oz.c.includes(tz) ? (mz(null), rz(tz)) : (mz("controls:keyIsReserved"), rz(null)), zz.preventDefault(), zz.stopPropagation()
                  },
                  onMouseDown: zz => {
                    const tz = "Mouse" + (zz.button + 1);
                    document.activeElement && document.activeElement.id === Tz() ? Oz.c.includes(tz) ? (mz(null), rz(tz)) : (mz("controls:keyIsReserved"), rz(null)) : Bz("controls:enterNewBinding"), zz.stopPropagation()
                  },
                  onBlur: () => {
                    Bz("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Yz.jsx)(Uz.h, {
                onPointerDown: zz => {
                  zz.preventDefault()
                },
                onClick: () => {
                  (0, Xz.e)(tz, Pz), sz(), Gz()
                },
                className: "ControlBindingAddButton",
                disabled: null === Pz,
                children: uz("general:add")
              }), (0, Yz.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  Gz()
                },
                children: "\xd7"
              })]
            }), xz && (0, Yz.jsx)("div", {
              className: "ControlBindingError",
              children: uz(xz)
            })]
          })]
        }), Cz && (0, Yz.jsx)("div", {
          className: "ControlRowWarning",
          children: Cz
        })]
      })
    }
  },
  8337: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz
    });
    var Fz = sz(30),
      Wz = sz(3109),
      Xz = sz(1319),
      Oz = sz(1358);
    const oz = async () => {
      if ((0, Oz.c)()) {
        if (!0 !== await Xz.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Fz.b.get("gameState")) return
      }(0, Wz.b)()
    }
  },
  8345: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => vz,
      e: () => Xz,
      f: () => Oz,
      i: () => Wz,
      k: () => oz
    });
    var Fz = sz(1888);
    const Wz = "controllerPadShopOpen",
      Xz = zz => Fz.i.includes(zz),
      Oz = zz => Object.values(zz).some((zz => !1 !== zz.canBuy && !zz.isRewardedAd)),
      oz = (zz, tz, sz) => {
        var Fz, Wz, Oz, oz;
        const vz = zz.filter((zz => !Xz(zz))),
          Uz = null !== tz && zz.includes(tz) ? tz : null;
        return null !== Uz && !Xz(Uz) && sz(Uz) ? Uz : null !== (Fz = null !== (Wz = null !== (Oz = null !== (oz = vz.find(sz)) && void 0 !== oz ? oz : vz[0]) && void 0 !== Oz ? Oz : Uz) && void 0 !== Wz ? Wz : zz[0]) && void 0 !== Fz ? Fz : null
      },
      vz = zz => zz.userInput || zz.isRewardedAd || "boolean" === typeof zz.isSelected ? null : JSON.stringify([zz.image, zz.cost, zz.currency, zz.amount, zz.customTitle, zz.buyButtonText, zz.description, zz.canBuy])
  },
  8367: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Uz,
      g: () => Kz
    });
    var Fz = sz(65),
      Wz = sz(1416),
      Xz = sz(1935),
      Oz = sz(1375),
      oz = sz(1399),
      vz = sz(1087);
    const Uz = () => {
        const zz = (0, Oz.o)();
        if ((0, Fz.useEffect)((() => {
            (0, Oz.h)()
          }), []), !zz) return null;
        const {
          ControllerCategory: tz
        } = zz;
        return (0, vz.jsx)(oz.c, {
          children: (0, vz.jsx)(tz, {})
        })
      },
      Kz = () => {
        var zz;
        const tz = (0, Oz.o)(),
          [, sz] = (0, Fz.useReducer)((zz => zz + 1), 0);
        return (0, Wz.g)(Xz.b, sz), null !== (zz = null === tz || void 0 === tz ? void 0 : tz.hasActivePad()) && void 0 !== zz && zz
      }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);