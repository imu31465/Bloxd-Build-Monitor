export const id = 154;
export const ids = [154];
export const modules = {
  8546: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Mz
    });
    var Ez = bz(20),
      nz = bz(1181),
      iz = bz(4746),
      lz = bz(1089);

    function Mz(zz) {
      let {
        note: uz
      } = zz;
      const {
        t: bz
      } = (0, nz.F)(), {
        clientEscMenuOptions: Mz
      } = (0, Ez.m)(["clientEscMenuOptions"]);
      return (0, lz.jsx)(iz.b, {
        label: bz("touchSettings:actionButtons"),
        checked: Mz.touchActionButtons,
        onClick: zz => {
          Ez.e.setClientEscMenuOptions({
            touchActionButtons: zz
          })
        },
        circleInfoText: bz("touchSettings:actionButtonsInfo"),
        note: uz
      })
    }
  },
  8539: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Vb,
      f: () => ab
    });
    var Ez = bz(1181),
      nz = bz(56),
      iz = bz(1923),
      lz = bz(1934),
      Mz = bz(1038),
      tz = bz.n(Mz),
      Hz = bz(1419),
      Oz = bz(20),
      pz = bz(96),
      dz = bz(111),
      Fz = bz(4746),
      Zz = bz(2313),
      Rz = bz(301),
      Kz = bz(1936),
      wz = bz(1945),
      Xz = bz(8541),
      fz = bz(8546),
      sz = bz(316),
      rz = bz(1089);
    const oz = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Nz = bz(8554);
    var vz = bz(1448),
      xz = bz(1322),
      Jz = bz(1047),
      Az = bz(1377),
      Tz = bz(2331);
    const Lz = {
        jump: "cluster",
        crouch: "cluster",
        attack: "cluster",
        use: "cluster",
        extra: "cluster",
        game: "cluster",
        arrows: "hotbar",
        inventory: "hotbar",
        ...Object.fromEntries(Tz.K.map((zz => [zz, "menu"])))
      },
      Pz = zz => Tz.F.filter((uz => Lz[uz] === zz)),
      Gz = new Set(Pz("cluster")),
      az = ["cluster"],
      Vz = [...az, ...Tz.F.filter((zz => !az.includes(zz) && !Lz[zz]))],
      mz = Vz.flatMap((zz => [zz, ...Pz(zz)])).map((zz => ({
        id: zz,
        label: `hudLayout:${zz}`,
        ...Tz.D[zz],
        parent: Lz[zz]
      }))),
      qz = Object.fromEntries(mz.map((zz => [zz.id, zz]))),
      hz = "data-hud-el";

    function Uz(zz, uz, bz, Ez) {
      const nz = bz(function(zz, uz) {
          return "attack" !== zz || uz ? qz[zz].label : "hudLayout:attackContext"
        }(zz, uz)),
        iz = Ez[zz];
      return iz ? bz("hudLayout:slotWithKey", {
        slot: nz,
        key: iz
      }) : nz
    }

    function cz(zz, uz, bz, Ez) {
      return zz.map((zz => Uz(zz, uz, bz, Ez))).join(", ")
    }

    function gz(zz) {
      let {
        className: uz,
        keepPlace: bz
      } = zz;
      return bz ? (0, rz.jsx)("div", {
        className: tz()(uz, "Placeholder")
      }) : null
    }

    function Sz(zz) {
      let {
        id: uz,
        elements: bz,
        actionButtons: nz,
        keyNames: iz,
        className: lz,
        keepPlace: Mz,
        onHidden: tz
      } = zz;
      const {
        t: Oz
      } = (0, Ez.F)();
      if (!qz[uz].hide) return (0, rz.jsx)(gz, {
        className: lz,
        keepPlace: Mz
      });
      const pz = (0, Tz.A)(bz, uz);
      return (0, rz.jsx)(Hz.V, {
        className: lz,
        ariaLabel: Oz(pz ? "hudLayout:showElement" : "hudLayout:hideElement", {
          name: Uz(uz, nz, Oz, iz)
        }),
        pressed: !pz,
        onClick: () => {
          tz(uz, !pz)
        },
        children: (0, rz.jsx)(Jz.c, {
          name: pz ? "eye-slash" : "eye"
        })
      })
    }

    function yz(zz) {
      var uz;
      let {
        id: bz,
        elements: nz,
        actionButtons: iz,
        keyNames: lz,
        className: Mz,
        keepPlace: tz,
        onlyWhenMoved: Oz,
        locked: pz,
        onReset: dz
      } = zz;
      const {
        t: Fz
      } = (0, Ez.F)(), Zz = qz[bz], Rz = (0, Tz.P)(null !== (uz = nz[bz]) && void 0 !== uz ? uz : Tz.v);
      return !Zz.move && !Zz.scale || Oz && Rz ? (0, rz.jsx)(gz, {
        className: Mz,
        keepPlace: tz
      }) : (0, rz.jsx)(Hz.V, {
        className: Mz,
        disabled: Rz || pz,
        ariaLabel: Fz("hudLayout:resetElement", {
          name: Uz(bz, iz, Fz, lz)
        }),
        analyticsClick: {
          id: "hud_layout.reset_element",
          value: bz
        },
        onClick: zz => {
          Oz && ez(zz.currentTarget), dz(bz)
        },
        children: (0, rz.jsx)(Jz.c, {
          name: "rotate-left"
        })
      })
    }

    function Dz(zz) {
      let {
        id: uz,
        actionButtons: bz,
        keyNames: nz,
        className: iz,
        keepPlace: lz,
        locked: Mz,
        lockable: tz,
        onLocked: Oz
      } = zz;
      const {
        t: pz
      } = (0, Ez.F)();
      return tz || Mz ? (0, rz.jsx)(Hz.V, {
        className: iz,
        ariaLabel: pz(Mz ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
          name: Uz(uz, bz, pz, nz)
        }),
        pressed: Mz,
        active: Mz,
        analyticsClick: {
          id: "hud_layout.edit",
          value: `${Mz?"unlock":"lock"}:${uz}`
        },
        onClick: () => {
          Oz(uz, !Mz)
        },
        children: (0, rz.jsx)(Jz.c, {
          name: Mz ? "lock" : "lock-open"
        })
      }) : (0, rz.jsx)(gz, {
        className: iz,
        keepPlace: lz
      })
    }

    function Qz(zz) {
      let {
        className: uz,
        open: bz,
        name: nz,
        onToggle: iz
      } = zz;
      const {
        t: lz
      } = (0, Ez.F)();
      return (0, rz.jsx)(Hz.V, {
        className: uz,
        ariaLabel: lz(bz ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
          name: nz
        }),
        pressed: bz,
        analyticsClick: {
          id: "hud_layout.children",
          value: bz ? "close" : "open"
        },
        onClick: () => {
          iz(!bz)
        },
        children: (0, rz.jsx)(Jz.c, {
          name: bz ? "angle-up" : "angle-down"
        })
      })
    }

    function Wz(zz, uz) {
      var bz;
      zz.contains(document.activeElement) && uz.focus({
        preventScroll: !0
      }), null === (bz = (0, Az.f)()) || void 0 === bz || bz.handOverPadFocus(zz, uz)
    }

    function ez(zz) {
      const uz = zz.closest("[data-hud-row]"),
        bz = null === uz || void 0 === uz ? void 0 : uz.querySelector(".HudElementRowName");
      return !(!uz || !bz) && (Wz(uz, bz), !0)
    }
    const jz = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";

    function Iz(zz, uz) {
      return "joystick" === zz && !uz
    }

    function Bz() {
      const {
        t: zz
      } = (0, Ez.F)();
      return (0, rz.jsx)(Hz.V, {
        className: "HudFixJoystickButton",
        analyticsClick: {
          id: "hud_layout.fix_joystick"
        },
        onClick: zz => {
          const uz = zz.currentTarget;
          if (!ez(uz)) {
            const zz = function(zz) {
              var uz, bz;
              const Ez = [zz.previousElementSibling, zz.nextElementSibling].find((zz => zz instanceof HTMLElement && zz.matches(jz)));
              return null !== (uz = null !== Ez && void 0 !== Ez ? Ez : null === (bz = zz.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === bz ? void 0 : bz.querySelector(`:is(${jz}):not(.HudFixJoystickButton)`)) && void 0 !== uz ? uz : null
            }(uz);
            zz && Wz(uz, zz)
          }
          Oz.e.setClientEscMenuOptions({
            joystickMode: "fixed_shown"
          })
        },
        children: zz("hudLayout:fixJoystick")
      })
    }
    var Cz = bz(79),
      Yz = bz(1266),
      kz = bz(1108),
      zu = bz(2602),
      uu = bz(8563),
      bu = bz(2336),
      Eu = bz(2356),
      nu = bz(2899);
    const iu = ["J", "C", "A", "P", "U", "X", "G"],
      lu = Object.freeze({
        faces: null,
        names: Object.freeze({}),
        shop: !0,
        bag: !0,
        items: null,
        rowIcons: Tz.K
      });

    function Mu(zz, uz) {
      zz.replaceChildren(...[...uz.childNodes].map((zz => zz.cloneNode(!0))))
    }
    const tu = zz => ({
      [hz]: zz
    });

    function Hu(zz) {
      let {
        id: uz,
        slot: bz,
        icon: Ez,
        label: iz,
        hidden: lz,
        className: Mz,
        face: Hz
      } = zz;
      const Oz = (0, nz.useRef)(null);
      return (0, nz.useLayoutEffect)((() => {
        Hz && Oz.current && Mu(Oz.current, Hz)
      }), [Hz]), (0, rz.jsxs)("div", {
        className: tz()("TouchKeyHit", `TouchSlot${bz}`, Mz, {
          HudPreviewGhost: lz.has(uz)
        }),
        ...tu(uz),
        children: [Hz && (0, rz.jsx)("div", {
          ref: Oz,
          className: tz()("TouchKey", {
            Labelled: Hz.classList.contains("Labelled")
          })
        }), !Hz && (0, rz.jsxs)("div", {
          className: tz()("TouchKey", {
            Labelled: void 0 !== iz
          }),
          children: [Ez && (0, rz.jsx)(Jz.c, {
            name: Ez
          }), void 0 !== iz && (0, rz.jsx)("span", {
            className: "TouchKeyLabel",
            children: iz
          })]
        })]
      })
    }

    function Ou(zz) {
      let {
        item: uz,
        selected: bz
      } = zz;
      const Ez = (0, nz.useRef)(null);
      return (0, nz.useLayoutEffect)((() => {
        Ez.current && Mu(Ez.current, uz)
      }), [uz]), (0, rz.jsx)("div", {
        ref: Ez,
        className: tz()("InvenItem", {
          Selected: bz
        })
      })
    }
    const pu = {
        emotes: "face-smile",
        perspective: "video",
        scoreboard: "list",
        tasks: "bars",
        cosmetics: "shirt",
        invite: "user-plus",
        settings: "gear"
      },
      du = zz => void 0 === zz ? {} : {
        style: {
          "--parked": zz
        }
      };

    function Fu(zz) {
      let {
        id: uz,
        hidden: bz,
        parked: Ez,
        unslotted: nz = !1
      } = zz;
      return (0, rz.jsx)("div", {
        className: tz()("TopRightIcon", Eu.m[uz], {
          HudPreviewGhost: bz.has(uz),
          [bu.c]: void 0 !== Ez,
          [bu.g]: nz
        }),
        ...du(Ez),
        children: (0, rz.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          ...tu(uz),
          children: (0, rz.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, rz.jsx)(Jz.c, {
              name: pu[uz]
            })
          })
        })
      })
    }

    function Zu(zz) {
      let {
        portraitPhone: uz,
        icons: bz,
        hidden: Ez,
        moved: nz,
        trayState: iz
      } = zz;
      const lz = uz ? (0, bu.C)(bz) : [],
        Mz = bz.filter((zz => "settings" === zz)),
        Hz = bz.filter((zz => "settings" !== zz && !lz.includes(zz))).reverse(),
        Oz = lz.length > 0 && "gone" === iz,
        pz = [...Mz, ...Oz ? ["tray"] : [], ...Hz].filter((zz => "tray" === zz || Ez.has(zz) && !nz.has(zz))),
        dz = zz => {
          const uz = pz.indexOf(zz);
          return uz < 0 ? void 0 : uz
        },
        Fz = (zz, uz) => (0, rz.jsx)(Fu, {
          id: zz,
          hidden: Ez,
          parked: uz ? dz(zz) : void 0,
          unslotted: uz && Ez.has(zz) && nz.has(zz)
        }, zz);
      return (0, rz.jsxs)("div", {
        className: tz()("TopRightIcons TouchInGame", {
          Column: uz
        }),
        children: [Mz.map((zz => Fz(zz, !0))), lz.length > 0 && (0, rz.jsxs)("div", {
          className: tz()("TopRightIcon TopRightTrayToggle Open", {
            [bu.c]: Oz
          }),
          ...du(dz("tray")),
          children: [(0, rz.jsx)("div", {
            className: tz()("UiItemIcon SmallTextBold", {
              HudPreviewGhost: "filled" !== iz
            }),
            children: (0, rz.jsx)("div", {
              className: "ScaleOnHover",
              children: (0, rz.jsx)(Jz.c, {
                name: "ellipsis"
              })
            })
          }), (0, rz.jsx)("div", {
            className: "TopRightTray",
            children: lz.map((zz => Fz(zz, !1)))
          })]
        }), Hz.map((zz => Fz(zz, !0)))]
      })
    }

    function Ru(zz) {
      let {
        next: uz,
        hidden: bz
      } = zz;
      return (0, rz.jsx)("div", {
        className: tz()("HotBarArrow", uz ? "Next" : "Previous", {
          HudPreviewGhost: bz
        }),
        ...tu("arrows"),
        children: (0, rz.jsx)("div", {
          className: "UiItemIcon SmallTextBold",
          children: (0, rz.jsx)("div", {
            className: "ScaleOnHover",
            children: (0, rz.jsx)(Jz.c, {
              name: uz ? "caret-right" : "caret-left"
            })
          })
        })
      })
    }

    function Ku() {
      return (0, rz.jsx)("div", {
        className: "SocialBarContainer",
        children: (0, rz.jsx)("div", {
          className: "SocialBarOuter",
          children: (0, rz.jsx)("div", {
            className: "SocialBar",
            children: (0, rz.jsx)("div", {
              className: "CondensedSocialBarInner",
              children: (0, rz.jsx)("div", {
                className: "CondensedSectionsContainer",
                children: (0, rz.jsxs)("div", {
                  className: "CondensedSections",
                  children: [(0, rz.jsxs)("div", {
                    className: "CondensedSection CondensedSectionFriendRequests",
                    children: [(0, rz.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, rz.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, rz.jsx)(Jz.c, {
                        name: "user-clock"
                      })
                    })]
                  }), (0, rz.jsx)("div", {
                    className: "SocialBarDividerContainer",
                    children: (0, rz.jsx)("div", {
                      className: "SocialBarDivider"
                    })
                  }), (0, rz.jsxs)("div", {
                    className: "CondensedSection CondensedSectionOnlineFriends",
                    children: [(0, rz.jsx)("div", {
                      className: "CondensedSectionValue",
                      children: "0"
                    }), (0, rz.jsx)("div", {
                      className: "CondensedSectionIcon",
                      children: (0, rz.jsx)(Jz.c, {
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
    const wu = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      },
      Xu = {
        J: "JumpKey",
        C: "CrouchKey"
      },
      fu = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      su = {
        0: "swords",
        1: "hammer",
        2: "cube",
        3: "cubes",
        5: "cookie"
      };

    function ru(zz) {
      let {
        presence: uz,
        portraitPhone: bz,
        hidden: nz,
        actionButtons: iz,
        joystickFixed: lz,
        keysAbove: Mz,
        auraBar: Hz,
        trayState: Oz,
        moved: dz
      } = zz;
      const {
        t: Fz
      } = (0, Ez.F)(), {
        faces: Zz,
        items: Rz
      } = uz, Kz = zz => ({
        HudPreviewGhost: nz.has(zz)
      });
      return (0, rz.jsxs)("div", {
        className: "InGameUi HudPreviewInGameUi",
        children: [(0, rz.jsx)("div", {
          className: "InGameHeaderContainer Touchscreen",
          children: (0, rz.jsxs)("div", {
            className: "InGameHeader",
            children: [(0, rz.jsx)("div", {
              className: "InGameHeaderLogo",
              children: "bloxd.io"
            }), (0, rz.jsx)("div", {
              className: "InGameHeaderSpacer"
            }), (0, rz.jsx)("div", {
              className: "InGameHeaderGameName",
              children: Fz("hudLayout:previewGameName")
            })]
          })
        }), (0, rz.jsx)("div", {
          className: "TopLeftElements",
          children: (0, rz.jsx)("div", {
            className: "InGameHeaderAndChat",
            children: (0, rz.jsxs)("div", {
              className: "Chat",
              children: [(0, rz.jsx)("div", {
                className: "ChatMessages HideScrollbar",
                children: [Fz("hudLayout:previewChatLine"), Fz("hudLayout:previewChatJoined", {
                  name: "Steve"
                }), Fz("hudLayout:previewChatJoined", {
                  name: "Alex"
                })].map((zz => (0, rz.jsx)("div", {
                  className: "MessageWrapper",
                  children: (0, rz.jsx)("div", {
                    className: "TextFromServer",
                    children: (0, rz.jsx)("div", {
                      className: "IndividualText",
                      children: zz
                    })
                  })
                }, zz)))
              }), (0, rz.jsx)("button", {
                type: "button",
                tabIndex: -1,
                className: tz()("ChatIconWrapper SmallTextLight", Kz("chat")),
                ...tu("chat"),
                children: (0, rz.jsx)(Jz.c, {
                  name: "comment-dots",
                  className: "ChatIcon"
                })
              })]
            })
          })
        }), (0, rz.jsx)("div", {
          className: "RightElements RightElementsTouchscreen",
          children: (0, rz.jsxs)("div", {
            className: "TopRightElements",
            children: [(0, rz.jsx)("div", {
              className: "TopRightElementsLeft",
              children: (0, rz.jsx)("div", {
                className: "TopRightIconsContainer",
                ...tu("menu"),
                children: (0, rz.jsx)(Zu, {
                  portraitPhone: bz,
                  icons: uz.rowIcons,
                  hidden: nz,
                  trayState: Oz,
                  moved: dz
                })
              })
            }), pz.featureFlags.useSocialFeatures && (0, rz.jsx)("div", {
              className: "TopRightElementsRight",
              children: (0, rz.jsx)(Ku, {})
            })]
          })
        }), (0, rz.jsx)("div", {
          className: "HudPreviewCrosshair"
        }), (0, rz.jsx)("div", {
          className: "TouchInteractHit HudPreviewInteract",
          children: (0, rz.jsxs)("div", {
            className: "TouchInteractKey",
            ...tu("interact"),
            children: [(0, rz.jsx)("div", {
              className: "TouchInteractIcon",
              children: (0, rz.jsx)(Jz.c, {
                name: "hand-back-point-up"
              })
            }), (0, rz.jsx)("div", {
              children: Fz("hudLayout:previewInteract")
            })]
          })
        }), (0, rz.jsx)("div", {
          className: "BottomCentre",
          children: (0, rz.jsxs)("div", {
            className: "BottomElements",
            children: [(0, rz.jsx)("div", {
              className: "BottomLeftElements Touch"
            }), (0, rz.jsxs)("div", {
              className: "BottomMiddleElements",
              children: [(0, rz.jsx)("div", {
                className: "BottomScreenStatBarList",
                ...tu("hotbar"),
                children: (0, rz.jsx)("div", {
                  className: "BottomScreenStatBarWrapper",
                  children: (0, rz.jsxs)("div", {
                    className: "BottomScreenStatBarBackground",
                    children: [(0, rz.jsx)("div", {
                      className: "BottomScreenStatBar HealthBar",
                      style: {
                        transform: "scaleX(0.8)",
                        transformOrigin: "left center"
                      }
                    }), (0, rz.jsxs)("div", {
                      className: "BottomScreenStatBarText SmallTextBold",
                      children: [(0, rz.jsx)(Jz.c, {
                        name: "heart"
                      }), " 80/100"]
                    })]
                  })
                })
              }), Hz && (0, rz.jsxs)("div", {
                className: "AuraBarWrapper",
                children: [(0, rz.jsxs)("div", {
                  className: "AuraBarLabel SmallTextBold",
                  children: [(0, rz.jsx)("img", {
                    className: "AuraBarLabelImage",
                    src: (0, nu.g)("glint"),
                    alt: ""
                  }), (0, rz.jsx)("div", {
                    className: "AuraBarLabelText",
                    children: "0"
                  })]
                }), (0, rz.jsx)("div", {
                  className: "AuraBar",
                  children: (0, rz.jsx)("div", {
                    className: "AuraBarBackground",
                    style: {
                      width: "40%"
                    }
                  })
                })]
              }), (0, rz.jsx)("div", {
                className: "HotBarRow",
                children: (0, rz.jsx)("div", {
                  className: tz()("HotBarContainer Touch", {
                    KeysAbove: Mz
                  }),
                  children: (0, rz.jsxs)("div", {
                    className: "HotBar",
                    ...tu("hotbar"),
                    children: [(0, rz.jsxs)("div", {
                      className: tz()("TouchInventoryKeys", {
                        NoAuraBar: !Hz
                      }),
                      children: [(0, rz.jsx)("div", {
                        className: tz()("TouchInventoryKey ShopKey", Kz("inventory"), {
                          Hidden: !uz.shop
                        }),
                        ...tu("inventory"),
                        children: (0, rz.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, rz.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, rz.jsx)(Jz.c, {
                              name: "cart-shopping"
                            })
                          })
                        })
                      }), (0, rz.jsx)("div", {
                        className: tz()("TouchInventoryKey BagKey", Kz("inventory"), {
                          Hidden: !uz.bag
                        }),
                        ...tu("inventory"),
                        children: (0, rz.jsx)("div", {
                          className: "UiItemIcon SmallTextBold",
                          children: (0, rz.jsx)("div", {
                            className: "ScaleOnHover",
                            children: (0, rz.jsx)(Jz.c, {
                              name: "backpack"
                            })
                          })
                        })
                      })]
                    }), (0, rz.jsx)(Ru, {
                      next: !1,
                      hidden: nz.has("arrows")
                    }), (0, rz.jsxs)("div", {
                      className: "HotBarGameItemsContainer",
                      children: [null !== Rz && Rz.map(((zz, uz) => (0, rz.jsx)(Ou, {
                        item: zz,
                        selected: zz.classList.contains("Selected")
                      }, uz))), null === Rz && fu.map((zz => {
                        const uz = su[zz];
                        return (0, rz.jsx)("div", {
                          className: tz()("InvenItem", {
                            Selected: 0 === zz
                          }),
                          children: uz && (0, rz.jsx)("div", {
                            className: "HudPreviewItem",
                            children: (0, rz.jsx)(Jz.c, {
                              name: uz
                            })
                          })
                        }, zz)
                      }))]
                    }), (0, rz.jsx)(Ru, {
                      next: !0,
                      hidden: nz.has("arrows")
                    })]
                  })
                })
              })]
            }), (0, rz.jsx)("div", {
              className: "BottomRightElements",
              children: (0, rz.jsxs)("div", {
                className: "TouchComponentsButtons",
                children: [null !== Zz && iu.map((zz => {
                  const uz = Zz[zz];
                  return uz && (0, rz.jsx)(Hu, {
                    id: wu[zz],
                    slot: zz,
                    face: uz,
                    className: Xu[zz],
                    hidden: nz
                  }, zz)
                })), null === Zz && (0, rz.jsxs)(rz.Fragment, {
                  children: [(0, rz.jsx)(Hu, {
                    id: "jump",
                    slot: "J",
                    icon: "arrow-up-from-line",
                    className: "JumpKey",
                    hidden: nz
                  }), (0, rz.jsx)(Hu, {
                    id: "crouch",
                    slot: "C",
                    icon: "arrow-down-to-line",
                    className: "CrouchKey",
                    hidden: nz
                  }), iz && (0, rz.jsxs)(rz.Fragment, {
                    children: [(0, rz.jsx)(Hu, {
                      id: "attack",
                      slot: "A",
                      icon: "swords",
                      hidden: nz
                    }), (0, rz.jsx)(Hu, {
                      id: "use",
                      slot: "U",
                      icon: "hand-back-point-up",
                      hidden: nz
                    })]
                  }), !iz && (0, rz.jsx)(Hu, {
                    id: "attack",
                    slot: "P",
                    icon: "crosshairs",
                    label: Fz("touchKeys:scope"),
                    hidden: nz
                  }), (0, rz.jsx)(Hu, {
                    id: "extra",
                    slot: "X",
                    icon: "feather-pointed",
                    label: Fz("touchKeys:fly"),
                    hidden: nz
                  }), (0, rz.jsx)(Hu, {
                    id: "game",
                    slot: "G",
                    icon: "bolt",
                    hidden: nz
                  })]
                })]
              })
            })]
          })
        }), (0, rz.jsx)("div", {
          className: "TouchMovementWrapper",
          children: (0, rz.jsx)("div", {
            className: "JoystickZone HudPreviewJoystickZone",
            children: (0, rz.jsxs)("div", {
              className: tz()("Joystick Resting HudPreviewJoystick", {
                Floating: !lz
              }),
              ...tu("joystick"),
              children: [(0, rz.jsx)("div", {
                className: "JoystickBase"
              }), (0, rz.jsx)("div", {
                className: "JoystickKnob"
              })]
            })
          })
        })]
      })
    }

    function ou() {
      const [zz, uz] = (0, nz.useState)({}), bz = (0, nz.useCallback)((zz => {
        uz((uz => [...new Set([...Object.keys(uz), ...Object.keys(zz)])].every((bz => uz[bz] === zz[bz])) ? uz : zz))
      }), []);
      return [zz, bz]
    }
    const Nu = .05;

    function vu(zz) {
      var uz;
      let {
        selected: bz,
        layout: nz,
        actionButtons: iz,
        keyNames: lz,
        overlaps: Mz,
        scaleCaps: Oz,
        joystickFixed: pz,
        onScale: dz,
        onHidden: Fz,
        onReset: Zz,
        locked: Rz,
        lockable: Kz,
        onLocked: wz,
        extra: Xz
      } = zz;
      const {
        t: fz
      } = (0, Ez.F)(), sz = bz ? qz[bz] : null, oz = null !== bz && Rz.has(bz), Nz = (bz && nz.hudElements[bz] || Tz.v)[2], vz = null !== (uz = bz && Oz[bz]) && void 0 !== uz ? uz : Tz.l, xz = zz => {
        bz && dz(bz, Math.min(vz, Math.round(100 * (Nz + .1 * zz)) / 100))
      };
      return (0, rz.jsxs)(rz.Fragment, {
        children: [(0, rz.jsxs)("div", {
          className: tz()("HudQuickName SmallTextBold", {
            Overlap: Mz.length > 0
          }),
          children: [Mz.length > 0 && (0, rz.jsx)(Jz.c, {
            name: "triangle-exclamation"
          }), sz ? Uz(sz.id, iz, fz, lz) : fz("hudLayout:fullScreenHint"), Mz.length > 0 && (0, rz.jsx)("span", {
            className: "HudQuickOverlap",
            children: fz("hudLayout:overlapsShort", {
              names: cz(Mz, iz, fz, lz)
            })
          })]
        }), (null === sz || void 0 === sz ? void 0 : sz.scale) && (0, rz.jsxs)("div", {
          className: "HudQuickSize",
          children: [(0, rz.jsx)(Hz.V, {
            disabled: oz || Nz <= Tz.p,
            ariaLabel: fz("hudLayout:smaller"),
            onClick: () => {
              xz(-1)
            },
            children: (0, rz.jsx)(Jz.c, {
              name: "minus"
            })
          }), (0, rz.jsx)("span", {
            className: "HudQuickSizeValue",
            children: `${Math.round(100*Nz)}%`
          }), (0, rz.jsx)(Hz.V, {
            disabled: oz || Nz >= vz,
            ariaLabel: fz("hudLayout:larger"),
            onClick: () => {
              xz(1)
            },
            children: (0, rz.jsx)(Jz.c, {
              name: "plus"
            })
          })]
        }), (sz || Xz) && (0, rz.jsxs)("div", {
          className: "HudQuickActions",
          children: [sz && (0, rz.jsxs)(rz.Fragment, {
            children: [(0, rz.jsx)(Dz, {
              id: sz.id,
              actionButtons: iz,
              keyNames: lz,
              locked: oz,
              lockable: Kz(sz.id),
              onLocked: wz
            }), (0, rz.jsx)(Sz, {
              id: sz.id,
              elements: nz.hudElements,
              actionButtons: iz,
              keyNames: lz,
              onHidden: Fz
            }), (0, rz.jsx)(yz, {
              id: sz.id,
              elements: nz.hudElements,
              actionButtons: iz,
              keyNames: lz,
              locked: oz,
              onReset: Zz
            }), Iz(sz.id, pz) && (0, rz.jsx)(Bz, {})]
          }), Xz]
        })]
      })
    }
    var xu = bz(1102),
      Ju = bz(4182);
    const Au = "HudPreviewDoc",
      Tu = {
        hotbar: "TouchHotbar",
        keysAbove: "TouchHotbarKeysAbove",
        hasShop: "TouchHotbarHasShop",
        hasBag: "TouchHotbarHasBag"
      },
      Lu = new Set([Au, ...Object.values(Tu)]),
      Pu = new Set(Tz.F.map(Eu.w)),
      Gu = new Set(Eu.g),
      au = 'style, link[rel="stylesheet"]';

    function Vu(zz, uz, bz, Ez) {
      const nz = new Map,
        iz = new Set,
        lz = new URL(zz.baseURI).origin,
        Mz = uz => {
          var bz;
          if ("LINK" !== uz.nodeName) return !0;
          const Ez = null === (bz = uz.getAttribute("href")) || void 0 === bz ? void 0 : bz.trim();
          if (!Ez) return !1;
          try {
            return new URL(Ez, zz.baseURI).origin === lz
          } catch {
            return !1
          }
        };
      let tz = null;
      const Hz = () => {
          tz !== (0 === iz.size) && (tz = 0 === iz.size, null === Ez || void 0 === Ez || Ez(tz))
        },
        Oz = zz => {
          const uz = zz.cloneNode(!0);
          if ("LINK" === uz.tagName) {
            iz.add(uz);
            const zz = () => {
              iz.delete(uz), Hz()
            };
            uz.addEventListener("load", zz), uz.addEventListener("error", zz), bz && uz.addEventListener("load", bz)
          }
          return uz
        },
        pz = () => {
          const Ez = function(zz) {
              const uz = [...zz.body.children].filter((zz => zz.matches(au)));
              return [...zz.head.querySelectorAll(au), ...uz]
            }(zz).filter(Mz),
            lz = new Set(Ez);
          for (const [zz, uz] of nz) lz.has(zz) || (uz.remove(), nz.delete(zz), iz.delete(uz));
          let tz = null;
          for (let zz = Ez.length - 1; zz >= 0; zz--) {
            const iz = Ez[zz];
            let lz = nz.get(iz);
            lz ? "STYLE" === iz.tagName && lz.textContent !== iz.textContent && (lz.textContent = iz.textContent, null === bz || void 0 === bz || bz()) : (lz = Oz(iz), nz.set(iz, lz), uz.head.insertBefore(lz, tz)), tz = lz
          }
          Hz()
        };
      pz();
      const dz = new MutationObserver(pz);
      return dz.observe(zz.head, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), dz.observe(zz.body, {
        childList: !0
      }), () => {
        dz.disconnect()
      }
    }

    function mu(zz, uz, bz) {
      let {
        keysAbove: Ez
      } = bz;
      const nz = [...zz.documentElement.classList].filter((zz => !Lu.has(zz) && !Gu.has(zz))),
        iz = [...uz.documentElement.classList].filter((zz => Gu.has(zz))),
        lz = [Au, Tu.hotbar, Tu.hasShop, Tu.hasBag];
      Ez && lz.push(Tu.keysAbove), uz.documentElement.className = [...nz, ...lz, ...iz].join(" ")
    }
    const qu = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function hu(zz, uz, bz, Ez, nz) {
      const iz = (0, Tz.H)(bz, Ez, "joystick"),
        lz = (0, Eu.z)((0, Eu.M)(bz, Ez, nz), Ez),
        Mz = lz.classes.filter((zz => !Pu.has(zz))),
        tz = uz.documentElement;
      (0, Eu.R)({
        ...lz,
        classes: Mz
      }, {
        vars: tz,
        safe: tz,
        classes: tz
      });
      const Hz = (0, Eu.F)(bz.hudLayouts[Ez].hudSafe, window.innerWidth, window.innerHeight, Uu(), (0, Eu.Q)(uz));
      tz.style.setProperty("--preview-joystick-shift-left", `${Hz[3]}px`), tz.style.setProperty("--preview-joystick-shift-bottom", `${Hz[2]}px`), tz.style.setProperty("--preview-joystick-scale", String(iz[2])), (0, Ju.f)(tz, uz, bz, Ez);
      for (const Oz of qu) tz.style.setProperty(Oz, zz.documentElement.style.getPropertyValue(Oz) || "0px")
    }

    function Uu() {
      return (0, Eu.L)(Oz.e.get("notchSize"), window.innerWidth, window.innerHeight)
    }

    function cu(zz) {
      return (0, Eu.q)(Uu(), (0, Eu.Q)(zz))
    }

    function gu(zz, uz, bz) {
      const Ez = zz.documentElement.style,
        nz = (0, Eu.I)(uz),
        iz = Ez.getPropertyValue(nz);
      try {
        return bz((zz => {
          Ez.setProperty(nz, String(zz))
        }))
      } finally {
        "" === iz ? Ez.removeProperty(nz) : Ez.setProperty(nz, iz)
      }
    }

    function Su(zz, uz) {
      const [bz, Ez] = gu(zz, "hotbar", (uz => {
        const bz = bz => {
          var Ez, nz;
          return uz(bz), null !== (Ez = null === (nz = zz.querySelector(".HotBarGameItemsContainer")) || void 0 === nz ? void 0 : nz.getBoundingClientRect().width) && void 0 !== Ez ? Ez : 0
        };
        return [bz(1), bz(Tz.l)]
      }));
      return bz <= 0 ? Tz.l : Math.min(Tz.l, Math.max(1, Math.floor(Ez / bz / uz + 1e-6) * uz))
    }
    const yu = 3,
      Du = .5,
      Qu = zz => zz.right - zz.left;
    const Wu = (zz, uz) => Math.abs((0, uu.e)(zz).x - (0, uu.e)(uz).x) + Math.abs((0, uu.e)(zz).y - (0, uu.e)(uz).y) + Math.abs(Qu(zz) - Qu(uz));

    function eu(zz, uz, bz, Ez, nz) {
      let {
        canKeep: iz = () => !0,
        passes: lz = yu,
        before: Mz,
        keysAboveOf: tz
      } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      const Hz = void 0 !== tz && tz(zz) !== tz(uz),
        Oz = uz.hudLayouts[bz].hudLocked.filter((zz => iz(zz) && !(Hz && "inventory" === zz))),
        pz = new Set(Oz);
      if (0 === pz.size) return uz;
      const dz = [...Gz].filter((Ez => !Oz.includes(Ez) && (0, Tz.H)(zz, bz, Ez).join() === (0, Tz.H)(uz, bz, Ez).join())),
        Fz = zz => {
          const uz = (0, uu.x)(dz.flatMap((uz => zz[uz] ? [zz[uz]] : [])));
          return {
            ...zz,
            cluster: null !== uz && void 0 !== uz ? uz : void 0
          }
        },
        Zz = zz => {
          const uz = nz(zz);
          return uz && Fz(uz)
        },
        Rz = Mz ? Fz(Mz) : Zz(zz);
      let Kz = Rz && Zz(uz);
      if (!Rz || !Kz) return uz;
      let wz = uz;
      for (let Xz = 0; Xz < lz && pz.size > 0; Xz++) {
        const zz = new Map;
        for (const uz of pz) {
          const nz = Rz[uz],
            iz = Kz[uz],
            lz = nz && iz ? ju(uz, (0, Tz.H)(wz, bz, uz), nz, iz, Ez) : null;
          lz ? zz.set(uz, lz) : pz.delete(uz)
        }
        if (0 === zz.size) break;
        let nz = wz;
        for (const [uz, Ez] of zz) nz = (0, Tz.gb)(nz, bz, uz, Ez);
        const iz = Zz(nz);
        if (!iz) return uz;
        let lz = wz;
        for (const [uz, Ez] of zz) {
          const zz = iz[uz];
          zz && Wu(Rz[uz], zz) < Wu(Rz[uz], Kz[uz]) - Du ? lz = (0, Tz.gb)(lz, bz, uz, Ez) : pz.delete(uz)
        }
        if (lz === wz) break;
        const Mz = [...zz.keys()].every((zz => pz.has(zz)));
        if (wz = lz, Kz = Mz ? iz : Zz(wz), !Kz) return uz
      }
      return nz(wz), wz
    }

    function ju(zz, uz, bz, Ez, nz) {
      let [iz, lz, Mz] = uz;
      const tz = Tz.D[zz],
        Hz = {};
      tz.scale && Qu(Ez) > 0 && Math.abs(Qu(bz) - Qu(Ez)) > Du && (Hz.scale = Math.max(Tz.p, Math.min(Tz.l, Mz * Qu(bz) / Qu(Ez))));
      const Oz = (0, uu.e)(bz).x - (0, uu.e)(Ez).x,
        pz = (0, uu.e)(bz).y - (0, uu.e)(Ez).y;
      return tz.move && (Math.abs(Oz) > Du || Math.abs(pz) > Du) && (Hz.dx = iz + Oz / nz.width, Hz.dy = lz + pz / nz.height), void 0 === Hz.scale && void 0 === Hz.dx ? null : Hz
    }
    let Iu = 0;

    function Bu() {
      return Iu > 0
    }
    const Cu = zz => 0 === zz.dx && 0 === zz.dy,
      Yu = .001,
      ku = zz => Math.abs(zz.dx) >= 5e-4 || Math.abs(zz.dy) >= 5e-4 ? zz : {
        dx: zz.dx,
        dy: zz.dy < 0 ? -.001 : Yu
      };

    function zb(zz) {
      let {
        preview: uz,
        stageRef: bz,
        ringRef: Ez,
        centreLineRef: iz,
        snapCentre: lz,
        ready: Mz,
        measure: tz,
        k: Hz,
        viewport: Oz,
        boxes: pz,
        pieces: dz,
        selected: Fz,
        insets: Zz,
        layout: Rz,
        canMove: Kz,
        onSelect: wz,
        onMove: Xz
      } = zz;
      const fz = (0, nz.useRef)(null),
        sz = (0, nz.useCallback)((() => null !== fz.current), []),
        rz = (zz, uz) => {
          if (!uz) return null;
          const bz = (0, uu.e)(zz.origin),
            Ez = (0, uu.e)(uz),
            nz = (zz.to.dx - zz.from.dx) * Oz.width,
            iz = (zz.to.dy - zz.from.dy) * Oz.height,
            lz = uz.right - uz.left,
            Mz = uz.bottom - uz.top;
          return {
            skew: {
              x: Ez.x - bz.x - nz,
              y: Ez.y - bz.y - iz
            },
            box: {
              left: bz.x - lz / 2,
              top: bz.y - Mz / 2,
              right: bz.x + lz / 2,
              bottom: bz.y + Mz / 2
            }
          }
        },
        oz = (zz, bz) => {
          var nz;
          const lz = fz.current;
          if (!lz || lz.pointerId !== zz.pointerId) return;
          fz.current = null, null === (nz = iz.current) || void 0 === nz || nz.classList.remove("Shown", "Snapped");
          const Mz = Ez.current;
          if (Mz && null !== lz.ringStyle && Mz.setAttribute("style", lz.ringStyle), bz && lz.moved) {
            const zz = Cu(lz.to) ? null : tz(lz.id),
              uz = zz ? (0, uu.w)(zz, (0, uu.u)(Oz.width, Oz.height, Zz)) : {
                x: 0,
                y: 0
              },
              bz = {
                dx: lz.to.dx + uz.x / Oz.width,
                dy: lz.to.dy + uz.y / Oz.height
              },
              Ez = Cu(lz.to) ? bz : ku(bz);
            Xz(lz.id, Ez.dx, Ez.dy)
          } else uz(lz.id, null), bz && lz.tapPick && wz(lz.tapPick)
        };
      return {
        busy: sz,
        handlers: {
          onPointerDown: zz => {
            var uz;
            if (!Mz || fz.current || !zz.target.closest(".HudPreviewHandle")) return;
            const Ez = bz.current.getBoundingClientRect(),
              nz = {
                x: (zz.clientX - Ez.left) / Hz,
                y: (zz.clientY - Ez.top) / Hz
              },
              iz = (0, uu.q)(nz, dz, 40 / Hz),
              lz = "cluster" === Fz && void 0 !== pz.cluster && null !== (0, uu.q)(nz, [{
                id: "cluster",
                box: pz.cluster
              }], 40 / Hz),
              tz = "menu" === Fz && void 0 !== pz.menu && (0, uu.h)(pz.menu, nz) && ("menu" === iz || null !== iz && (0, bu.t)(iz, Rz.hudElements[iz])),
              Oz = lz ? "cluster" : tz ? "menu" : null,
              Zz = null !== Oz,
              Xz = null !== Oz && void 0 !== Oz ? Oz : iz;
            if (!Xz) return;
            if (function(zz) {
                Iu++;
                const uz = bz => {
                  bz.pointerId === zz && (Iu = Math.max(0, Iu - 1), window.removeEventListener("pointerup", uz, !0), window.removeEventListener("pointercancel", uz, !0))
                };
                window.addEventListener("pointerup", uz, !0), window.addEventListener("pointercancel", uz, !0)
              }(zz.pointerId), !Kz(Xz)) return void wz(Zz && iz ? iz : Xz);
            wz(Xz);
            const [sz, rz] = null !== (uz = Rz.hudElements[Xz]) && void 0 !== uz ? uz : [0, 0], oz = {
              dx: sz,
              dy: rz
            }, Nz = {
              skew: {
                x: 0,
                y: 0
              },
              box: pz[Xz]
            };
            fz.current = {
              id: Xz,
              pointerId: zz.pointerId,
              startX: zz.clientX,
              startY: zz.clientY,
              origin: pz[Xz],
              from: oz,
              to: oz,
              moved: !1,
              home: Cu(oz) ? {
                centre: (0, uu.e)(pz[Xz]),
                anchor: Nz
              } : null,
              away: Cu(oz) ? null : Nz,
              anchor: Nz,
              ringStyle: null,
              tapPick: Zz ? iz : null
            }, zz.currentTarget.setPointerCapture(zz.pointerId)
          },
          onPointerMove: zz => {
            const bz = fz.current;
            if (!bz || bz.pointerId !== zz.pointerId) return;
            const nz = zz.clientX - bz.startX,
              Mz = zz.clientY - bz.startY;
            if (!bz.moved && Math.hypot(nz, Mz) < 5) return;
            const pz = !bz.moved;
            var dz, Fz;
            (bz.moved = !0, pz) && (bz.ringStyle = null !== (dz = null === (Fz = Ez.current) || void 0 === Fz ? void 0 : Fz.getAttribute("style")) && void 0 !== dz ? dz : null);
            const Rz = (0, uu.u)(Oz.width, Oz.height, Zz);
            if (!bz.home) {
              var Kz;
              bz.to = {
                dx: 0,
                dy: 0
              }, uz(bz.id, bz.to);
              const zz = tz(bz.id),
                Ez = null !== (Kz = rz(bz, zz)) && void 0 !== Kz ? Kz : {
                  skew: {
                    x: 0,
                    y: 0
                  },
                  box: bz.origin
                },
                nz = (0, uu.e)(bz.origin);
              bz.home = {
                centre: zz ? (0, uu.e)(zz) : {
                  x: nz.x - bz.from.dx * Oz.width,
                  y: nz.y - bz.from.dy * Oz.height
                },
                anchor: Ez
              }
            }
            const wz = bz.home;
            let Xz = !1;
            const sz = zz => {
                Xz = !1;
                let Ez = (0, uu.l)(zz.box, nz / Hz, Mz / Hz, Rz);
                const iz = Oz.width / 2;
                if (lz && Math.abs((0, uu.e)(bz.origin).x + Ez.x - iz) <= 8 / Hz) {
                  const uz = iz - (0, uu.e)(bz.origin).x,
                    nz = (0, uu.l)(zz.box, uz, Ez.y, Rz);
                  Xz = Math.abs(nz.x - uz) < .01, Xz && (Ez = nz)
                }
                const tz = (0, uu.p)(bz.from, Ez.x - zz.skew.x, Ez.y - zz.skew.y, Oz.width, Oz.height);
                bz.to = ku(tz), bz.anchor = zz, uz(bz.id, bz.to)
              },
              oz = (0, uu.l)(wz.anchor.box, nz / Hz, Mz / Hz, Rz),
              Nz = iz.current,
              vz = (0, uu.e)(bz.origin),
              xz = ((0, Tz.T)(bz.id) ? 20 : 6) / Hz;
            if (Math.abs(vz.x + oz.x - wz.centre.x) <= xz && Math.abs(vz.y + oz.y - wz.centre.y) <= xz) bz.to = {
              dx: 0,
              dy: 0
            }, bz.anchor = wz.anchor, Xz = lz && Math.abs(wz.centre.x - Oz.width / 2) < 1, uz(bz.id, bz.to);
            else if (bz.away) sz(bz.away);
            else {
              var Jz;
              sz(wz.anchor), bz.away = null !== (Jz = rz(bz, tz(bz.id))) && void 0 !== Jz ? Jz : wz.anchor, sz(bz.away)
            }
            null === Nz || void 0 === Nz || Nz.classList.add("Shown"), null === Nz || void 0 === Nz || Nz.classList.toggle("Snapped", Xz), (zz => {
              const uz = Ez.current;
              if (uz) {
                const {
                  skew: bz,
                  box: Ez
                } = zz.anchor;
                uz.style.left = Ez.left * Hz + "px", uz.style.top = Ez.top * Hz + "px", uz.style.width = (Ez.right - Ez.left) * Hz + "px", uz.style.height = (Ez.bottom - Ez.top) * Hz + "px", uz.style.translate = `${((zz.to.dx-zz.from.dx)*Oz.width+bz.x)*Hz}px ${((zz.to.dy-zz.from.dy)*Oz.height+bz.y)*Hz}px`
              }
            })(bz)
          },
          onPointerUp: zz => {
            oz(zz, !0)
          },
          onPointerCancel: zz => {
            oz(zz, !1)
          }
        }
      }
    }

    function ub(zz, uz) {
      return Object.keys(zz).filter((zz => zz !== uz)).map((uz => zz[uz]))
    }

    function bb(zz) {
      const uz = [],
        bz = uz => (0, Tz.T)(uz) && !zz.documentElement.classList.contains((0, Eu.B)(uz));
      for (const lz of zz.querySelectorAll(`[${hz}]`)) {
        const zz = bz(lz.getAttribute(hz)) ? lz.querySelector(".ScaleOnHover") : null,
          Ez = (null !== zz && void 0 !== zz ? zz : lz).getBoundingClientRect();
        (Ez.width > 0 || Ez.height > 0) && uz.push({
          id: lz.getAttribute(hz),
          box: {
            left: Ez.left,
            top: Ez.top,
            right: Ez.right,
            bottom: Ez.bottom
          }
        })
      }
      const Ez = zz => (0, uu.x)(uz.filter((uz => {
          let {
            id: bz
          } = uz;
          return zz(bz)
        })).map((zz => {
          let {
            box: uz
          } = zz;
          return uz
        }))),
        nz = {};
      for (const lz of new Set(uz.map((zz => zz.id)))) nz[lz] = Ez((zz => zz === lz));
      const iz = Ez((zz => Gz.has(zz)));
      return iz && (nz.cluster = iz), {
        boxes: nz,
        pieces: uz
      }
    }

    function Eb(zz, uz, bz) {
      const Ez = uz.right - uz.left,
        nz = uz.bottom - uz.top;
      return gu(zz, "cluster", (uz => {
        const iz = bz => {
            uz(bz);
            const Ez = [...zz.querySelectorAll(`[${hz}]:not(.HudPreviewGhost)`)].filter((zz => Gz.has(zz.getAttribute(hz)))).map((zz => {
                const uz = zz.getBoundingClientRect();
                return {
                  left: uz.left,
                  top: uz.top,
                  right: uz.right,
                  bottom: uz.bottom
                }
              })),
              nz = (0, uu.x)(Ez);
            return nz ? {
              w: nz.right - nz.left,
              h: nz.bottom - nz.top
            } : null
          },
          lz = zz => !zz || zz.w <= Ez && zz.h <= nz,
          Mz = iz(1),
          tz = iz(Tz.l);
        if (!Mz || lz(tz)) return Tz.l;
        const Hz = (zz, uz, bz) => uz > zz ? 1 + (bz - zz) * (Tz.l - 1) / (uz - zz) : Tz.l;
        let Oz = Math.floor(Math.min(Tz.l, Hz(Mz.w, tz.w, Ez), Hz(Mz.h, tz.h, nz)) / bz + 1e-6) * bz;
        for (; Oz > 1 && !lz(iz(Oz));) Oz = Math.round(100 * (Oz - bz)) / 100;
        return Math.max(1, Oz)
      }))
    }

    function nb(zz) {
      mu(document, zz, {
        keysAbove: !1
      });
      const uz = parseFloat(getComputedStyle(zz.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
        bz = Number.isFinite(uz) && uz < 0;
      return mu(document, zz, {
        keysAbove: bz
      }), bz
    }

    function ib(zz, uz) {
      let {
        layout: bz,
        orientation: Ez,
        viewport: iz,
        replicaKey: lz,
        joystickFixed: Mz,
        busy: tz
      } = uz;
      const [Hz, Oz] = (0, nz.useState)(null), [pz, dz] = (0, nz.useState)({
        boxes: {},
        pieces: []
      }), [Fz, Zz] = (0, nz.useState)({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), [Rz, Kz] = (0, nz.useState)(!1), [wz, Xz] = (0, nz.useState)(!1), [fz, sz] = (0, nz.useState)(!1), rz = (0, nz.useCallback)((zz => {
        Xz(zz), zz && sz(!0)
      }), []), oz = bz.hudLayouts[Ez].hudSafe, Nz = (0, nz.useCallback)((() => {
        var uz;
        const bz = null === (uz = zz.current) || void 0 === uz ? void 0 : uz.contentDocument;
        null !== bz && void 0 !== bz && bz.body && Oz(bz)
      }), [zz]), vz = (0, nz.useCallback)((() => {
        Hz && ((0, bu.x)(Hz), dz(bb(Hz)), Zz(function(zz, uz) {
          const bz = cu(zz),
            [Ez, nz, iz, lz] = uz ? (0, Eu.u)(uz, window.innerWidth, window.innerHeight, bz) : bz;
          return {
            top: Ez,
            right: nz,
            bottom: iz,
            left: lz
          }
        }(Hz, oz)))
      }), [Hz, oz]), xz = (0, nz.useCallback)((() => {
        Hz && Kz(nb(Hz))
      }), [Hz]), Jz = (0, nz.useRef)((() => {}));
      return Jz.current = () => {
        xz(), tz() || vz()
      }, (0, nz.useLayoutEffect)((() => {
        if (Hz) return Vu(document, Hz, (() => {
          Jz.current()
        }), rz)
      }), [Hz, rz]), (0, nz.useLayoutEffect)(xz, [xz, iz]), (0, nz.useLayoutEffect)((() => {
        Hz && (mu(document, Hz, {
          keysAbove: Rz
        }), hu(document, Hz, bz, Ez, Mz), xz(), vz())
      }), [Hz, bz, Ez, Rz, lz, Mz, iz, vz, xz]), (0, nz.useEffect)((() => {
        var zz;
        if (!Hz) return;
        const uz = new ResizeObserver((() => {
          tz() || vz()
        }));
        for (const bz of Hz.querySelectorAll(`[${hz}]`)) uz.observe(bz);
        return null === (zz = Hz.fonts) || void 0 === zz || zz.ready.then(vz), () => {
          uz.disconnect()
        }
      }), [Hz, vz, tz, lz]), {
        doc: Hz,
        onLoad: Nz,
        boxes: pz.boxes,
        pieces: pz.pieces,
        insets: Fz,
        keysAbove: Rz,
        ready: wz,
        settled: fz
      }
    }
    const lb = [
        ["hotbar", "arrows"],
        ["hotbar", "inventory"]
      ],
      Mb = (zz, uz, bz) => {
        const Ez = zz => (0, bu.t)(zz, bz.hudElements[zz]);
        return "cluster" === zz && Gz.has(uz) || "cluster" === uz && Gz.has(zz) || "menu" === zz && Ez(uz) || "menu" === uz && Ez(zz) || lb.some((Ez => {
          let [nz, iz] = Ez;
          const lz = bz.hudElements.hotbar,
            Mz = "inventory" === iz && bz.hudLocked.includes(iz) && void 0 !== lz && !(0, Tz.P)(lz);
          return (zz === nz && uz === iz || zz === iz && uz === nz) && !Mz
        }))
      };
    const tb = ["Above", "Below", "Left", "Right"];

    function Hb(zz, uz, bz, Ez, nz) {
      const iz = bz[zz],
        lz = (iz.left + iz.right) / 2,
        Mz = (iz.top + iz.bottom) / 2,
        tz = (7.5 * uz.length + 14) / Ez,
        Hz = 18 / Ez,
        Oz = {
          Above: {
            left: lz - tz / 2,
            top: iz.top - Hz,
            right: lz + tz / 2,
            bottom: iz.top
          },
          Below: {
            left: lz - tz / 2,
            top: iz.bottom,
            right: lz + tz / 2,
            bottom: iz.bottom + Hz
          },
          Left: {
            left: iz.left - tz,
            top: Mz - Hz / 2,
            right: iz.left,
            bottom: Mz + Hz / 2
          },
          Right: {
            left: iz.right,
            top: Mz - Hz / 2,
            right: iz.right + tz,
            bottom: Mz + Hz / 2
          }
        },
        pz = ub(bz, zz),
        dz = {
          left: 0,
          top: 0,
          right: nz.width,
          bottom: nz.height
        };
      return tb[(0, uu.o)(tb.map((zz => Oz[zz])), pz, {
        bounds: dz
      })]
    }

    function Ob() {
      const [zz, uz] = (0, kz.b)();
      return (0, nz.useMemo)((() => ({
        width: zz,
        height: uz
      })), [zz, uz])
    }

    function pb(zz) {
      var uz;
      const {
        layout: bz,
        orientation: iz,
        selected: lz,
        onSelect: Mz,
        onMove: Hz,
        canMove: Oz,
        actionButtons: pz,
        joystickFixed: dz,
        presence: Fz,
        keyNames: Rz,
        maxHeight: Kz,
        fill: wz = !1,
        apiRef: Xz
      } = zz, {
        t: fz
      } = (0, Ez.F)(), sz = Ob(), oz = (null !== (uz = (0, Zz.g)("maxAuraLevel")) && void 0 !== uz ? uz : 0) > 0, Nz = bz.hudLayouts[iz], vz = (0, nz.useRef)(null), xz = (0, nz.useRef)(null), Az = (0, nz.useRef)(null), Lz = (0, nz.useRef)(null), Pz = (0, nz.useRef)(null), az = (0, nz.useRef)(null), Vz = (0, zu.e)(vz).width, mz = wz ? 1 : Vz > 0 ? (0, uu.r)(Vz, sz.width, sz.height, Kz) : 0, qz = (0, nz.useRef)((() => !1)), hz = (0, nz.useCallback)((() => qz.current()), []), {
        doc: cz,
        onLoad: gz,
        boxes: Sz,
        pieces: yz,
        insets: Dz,
        keysAbove: Qz,
        ready: Wz,
        settled: ez
      } = ib(Az, {
        layout: bz,
        orientation: iz,
        viewport: sz,
        replicaKey: `${pz}:${dz}:${oz}`,
        joystickFixed: dz,
        busy: hz
      }), jz = (0, nz.useCallback)((zz => {
        cz && hu(document, cz, zz, iz, dz)
      }), [cz, iz, dz]), Iz = (0, nz.useCallback)((zz => cz && ez ? (jz(zz), nb(cz), function(zz) {
        let {
          boxes: uz,
          pieces: bz
        } = zz;
        const Ez = bz.find((zz => "inventory" === zz.id));
        if (!Ez || !uz.inventory) return uz;
        const nz = (0, uu.e)(uz.inventory),
          iz = Qu(Ez.box) / 2,
          lz = (Ez.box.bottom - Ez.box.top) / 2;
        return {
          ...uz,
          inventory: {
            left: nz.x - iz,
            top: nz.y - lz,
            right: nz.x + iz,
            bottom: nz.y + lz
          }
        }
      }(bb(cz))) : null), [cz, ez, jz]), Bz = (0, nz.useCallback)((zz => !!cz && (jz(zz), nb(cz))), [cz, jz]), Yz = (0, nz.useRef)(null), kz = (0, nz.useRef)(null), nu = (0, nz.useRef)(bz);
      nu.current = bz;
      const iu = (0, nz.useCallback)((() => {
        null !== Yz.current && (cancelAnimationFrame(Yz.current), Yz.current = null)
      }), []);
      (0, nz.useEffect)((() => iu), [bz, iu]);
      const {
        lockable: lu
      } = zz, Mu = (0, nz.useCallback)((zz => {
        if (jz(zz), !ez || 0 === bz.hudLayouts[iz].hudLocked.length) return;
        const uz = bz;
        iu(), Yz.current = requestAnimationFrame((() => {
          var bz;
          if (Yz.current = null, nu.current !== uz) return;
          const Ez = (null === (bz = kz.current) || void 0 === bz ? void 0 : bz.from) === uz ? kz.current.boxes : Iz(uz);
          Ez && (kz.current = {
            from: uz,
            boxes: Ez
          }), jz(Ez ? eu(uz, zz, iz, sz, Iz, {
            canKeep: lu,
            passes: 1,
            before: Ez,
            keysAboveOf: Bz
          }) : zz)
        }))
      }), [jz, ez, bz, iz, sz, Iz, Bz, lu, iu]), tu = zb({
        preview: (zz, uz) => {
          uz ? Mu((0, Tz.gb)(bz, iz, zz, uz)) : (iu(), jz(bz))
        },
        stageRef: xz,
        ringRef: Lz,
        centreLineRef: Pz,
        snapCentre: bz.hudSnapCentre,
        ready: ez,
        measure: zz => {
          var uz;
          return cz && Wz && null !== (uz = bb(cz).boxes[zz]) && void 0 !== uz ? uz : null
        },
        k: mz,
        viewport: sz,
        boxes: Sz,
        pieces: yz,
        selected: lz,
        insets: Dz,
        layout: Nz,
        canMove: Oz,
        onSelect: Mz,
        onMove: (zz, uz, bz) => {
          iu(), Hz(zz, uz, bz)
        }
      });
      (0, nz.useLayoutEffect)((() => {
        qz.current = tu.busy
      }), [tu.busy]);
      const Hu = (0, nz.useRef)([]),
        Ou = (0, nz.useRef)(Nz.hudElements);
      (0, nz.useEffect)((() => {
        for (const nz of Object.keys(Nz.hudElements)) {
          var zz, uz, bz, Ez;
          (null !== (zz = null === (uz = Nz.hudElements[nz]) || void 0 === uz ? void 0 : uz[2]) && void 0 !== zz ? zz : 1) > (null !== (bz = null === (Ez = Ou.current[nz]) || void 0 === Ez ? void 0 : Ez[2]) && void 0 !== bz ? bz : 1) && Oz(nz) && !(0, bu.t)(nz, Nz.hudElements[nz]) && Hu.current.push(nz)
        }
        Ou.current = Nz.hudElements
      }), [Nz.hudElements, Oz]), (0, nz.useEffect)((() => {
        if (!Wz) return;
        const zz = Hu.current.shift(),
          uz = zz && Sz[zz];
        if (!zz || !uz || tu.busy()) return;
        const bz = (0, uu.w)(uz, (0, uu.u)(sz.width, sz.height, Dz));
        if (0 !== bz.x || 0 !== bz.y) {
          var Ez;
          const [uz, nz] = null !== (Ez = Nz.hudElements[zz]) && void 0 !== Ez ? Ez : [0, 0];
          Hz(zz, uz + bz.x / sz.width, nz + bz.y / sz.height)
        }
      }), [Sz, Wz]), (0, nz.useImperativeHandle)(Xz, (() => ({
        setScale: (zz, uz) => {
          Mu((0, Tz.gb)(bz, iz, zz, {
            scale: uz
          }))
        },
        setOpacity: zz => {
          jz({
            ...bz,
            hudKeyOpacity: zz
          })
        },
        keepLocks: (zz, uz) => (iu(), eu(zz, uz, iz, sz, Iz, {
          canKeep: lu,
          keysAboveOf: Bz
        })),
        setSafe: zz => {
          Mu((0, Tz.lb)(bz, iz, zz)), az.current && (az.current.style.inset = (0, Eu.u)(zz, sz.width, sz.height, cu(null !== cz && void 0 !== cz ? cz : document)).map((zz => zz * mz + "px")).join(" "))
        }
      })), [jz, Mu, Iz, Bz, iu, lu, cz, bz, iz, sz, mz]);
      const pu = new Set(Object.keys(Nz.hudElements).filter((zz => (0, Tz.A)(Nz.hudElements, zz)))),
        du = lz ? Sz[lz] : void 0,
        Fu = lz ? Uz(lz, pz, fz, Rz) : "",
        Zu = (0, xu.h)(sz.width, sz.height),
        Ru = lz ? function(zz, uz, bz, Ez) {
          const nz = zz => (0, Tz.A)(bz.hudElements, zz) || (0, bu.s)(zz, bz, Ez);
          if (nz(zz)) return [];
          const iz = uz.filter((uz => {
              let {
                id: bz
              } = uz;
              return "cluster" === zz ? Gz.has(bz) : bz === zz
            })),
            lz = new Set;
          for (const Mz of uz) Mz.id === zz || lz.has(Mz.id) || Mb(zz, Mz.id, bz) || nz(Mz.id) || void 0 === bz.hudElements[zz] && void 0 === bz.hudElements[Mz.id] || iz.some((zz => {
            let {
              id: uz,
              box: bz
            } = zz;
            return uz !== Mz.id && (0, uu.i)(bz, Mz.box, 2)
          })) && lz.add(Mz.id);
          return [...lz]
        }(lz, yz, Nz, Zu) : [],
        Ku = new Set((0, bu.p)(Nz.hudElements)),
        wu = (0, bu.D)(Nz, (0, bu.C)(Fz.rowIcons)).state,
        Xu = Ru.join(),
        fu = (0, nz.useRef)(zz.onReady);
      fu.current = zz.onReady, (0, nz.useEffect)((() => {
        var zz;
        null === (zz = fu.current) || void 0 === zz || zz.call(fu, ez)
      }), [ez]);
      const su = (0, nz.useRef)(zz.onMeasured);
      (0, nz.useLayoutEffect)((() => {
        su.current = zz.onMeasured
      })), (0, nz.useEffect)((() => {
        var zz;
        const uz = cz ? {
          hotbar: Su(cz, Nu),
          cluster: Eb(cz, (0, uu.u)(sz.width, sz.height, Dz), Nu)
        } : {};
        null === (zz = su.current) || void 0 === zz || zz.call(su, Sz, Xu ? Xu.split(",") : [], uz)
      }), [Sz, Xu, cz, sz, Dz]);
      const ou = zz => ({
        left: zz.left * mz,
        top: zz.top * mz,
        width: (zz.right - zz.left) * mz,
        height: (zz.bottom - zz.top) * mz
      });
      return (0, rz.jsx)("div", {
        ref: vz,
        className: tz()("HudPreviewBox", {
          Fill: wz
        }),
        style: {
          height: sz.height * mz
        },
        children: (0, rz.jsxs)("div", {
          ref: xz,
          className: "HudPreviewStage",
          style: {
            width: sz.width * mz,
            height: sz.height * mz
          },
          children: [(0, rz.jsx)("iframe", {
            ref: Az,
            className: "HudPreviewFrame",
            srcDoc: "<!DOCTYPE html><html><head></head><body></body></html>",
            onLoad: gz,
            title: fz("hudLayout:preview"),
            "aria-hidden": !0,
            tabIndex: -1,
            style: {
              width: sz.width,
              height: sz.height,
              transform: `scale(${mz})`
            }
          }), cz && (0, Cz.createPortal)((0, rz.jsx)(ru, {
            presence: Fz,
            portraitPhone: Zu,
            hidden: pu,
            actionButtons: pz,
            joystickFixed: dz,
            keysAbove: Qz,
            auraBar: oz,
            trayState: wu,
            moved: Ku
          }), cz.body), (0, rz.jsxs)("div", {
            className: "HudPreviewOverlay",
            ...tu.handlers,
            children: [(0, rz.jsx)("div", {
              ref: az,
              className: "HudPreviewSafeZone",
              style: {
                top: Dz.top * mz,
                right: Dz.right * mz,
                bottom: Dz.bottom * mz,
                left: Dz.left * mz
              }
            }), yz.map(((zz, uz) => {
              let {
                id: bz,
                box: Ez
              } = zz;
              return (0, rz.jsx)("div", {
                className: "HudPreviewHandle",
                style: ou((0, uu.n)(Ez, 40 / mz))
              }, `${bz}:${uz}`)
            })), Nz.hudLocked.map((zz => {
              const uz = Sz[zz];
              return uz && (0, rz.jsx)("span", {
                className: "HudPreviewLockBadge",
                style: {
                  left: uz.right * mz,
                  top: uz.top * mz
                },
                children: (0, rz.jsx)(Jz.c, {
                  name: "lock"
                })
              }, zz)
            })), (0, rz.jsx)("div", {
              ref: Pz,
              className: "HudPreviewCentreLine",
              style: {
                left: sz.width / 2 * mz
              }
            }), lz && du && (0, rz.jsx)("div", {
              ref: Lz,
              className: tz()("HudPreviewRing", {
                Fixed: !Oz(lz),
                Overlap: Ru.length > 0
              }),
              style: ou(du),
              children: (0, rz.jsx)("span", {
                className: tz()("HudPreviewRingLabel", Hb(lz, Fu, Sz, mz, sz)),
                children: Fu
              })
            })]
          })]
        })
      })
    }

    function db(zz, uz) {
      (0, nz.useEffect)((() => {
        var bz;
        null === (bz = zz.current) || void 0 === bz || bz.toggleAttribute("inert", uz)
      }), [zz, uz])
    }
    const Fb = "hudFullScreen";

    function Zb(zz) {
      let {
        onScale: uz,
        onHidden: bz,
        onReset: iz,
        locked: lz,
        lockable: Mz,
        onLocked: tz,
        onClose: Oz,
        ...pz
      } = zz;
      const {
        t: dz
      } = (0, Ez.F)(), Fz = (0, nz.useRef)(null);
      (0, Yz.u)("popup", Fz, Oz),
      function(zz) {
        const uz = (0, nz.useRef)(zz);
        uz.current = zz, (0, nz.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Fb]: !0
          }, "");
          let zz = !1;
          const bz = () => {
            zz = !0, uz.current()
          };
          return window.addEventListener("popstate", bz), () => {
            var uz;
            window.removeEventListener("popstate", bz), !zz && null !== (uz = window.history.state) && void 0 !== uz && uz[Fb] && window.history.back()
          }
        }), [])
      }(Oz), (0, nz.useEffect)((() => {
        function zz(zz) {
          "Escape" === zz.key && (zz.stopPropagation(), Oz())
        }
        return window.addEventListener("keydown", zz, !0), () => {
          window.removeEventListener("keydown", zz, !0)
        }
      }), [Oz]);
      const {
        selected: Zz
      } = pz, Rz = (0, nz.useRef)(null), Kz = (0, nz.useRef)(null), [wz, Xz] = (0, nz.useState)(!1);
      db(Kz, !wz);
      const [fz, sz] = (0, nz.useState)(null), [oz, Nz] = (0, nz.useState)([]), [vz, xz] = ou(), Jz = (0, nz.useRef)(pz.selected);
      Jz.current = pz.selected;
      const Az = (0, nz.useRef)({}),
        Tz = (0, nz.useCallback)((() => {
          const zz = Rz.current;
          zz && sz(function(zz, uz, bz) {
            var Ez;
            const {
              innerWidth: nz,
              innerHeight: iz
            } = window, lz = zz.offsetWidth, Mz = zz.offsetHeight, tz = Math.max(Uu()[0], 6), Hz = [];
            for (const dz of [tz, .2 * iz, .5 * iz - Mz / 2, .33 * iz])
              for (const zz of [.5, .3, .7]) Hz.push({
                left: Math.max(0, Math.min(nz - lz - 6, Math.max(6, nz * zz - lz / 2))),
                top: dz
              });
            const Oz = Hz.map((zz => ({
                left: zz.left - 6,
                top: zz.top - 6,
                right: zz.left + lz + 6,
                bottom: zz.top + Mz + 6
              }))),
              pz = ub(uz, bz);
            return Hz[(0, uu.o)(Oz, pz, {
              avoid: bz && null !== (Ez = uz[bz]) && void 0 !== Ez ? Ez : null
            })]
          }(zz, Az.current, Jz.current))
        }), []),
        Lz = (0, nz.useCallback)(((zz, uz, bz) => {
          Nz(uz), xz(bz), Az.current = zz, Tz()
        }), [Tz, xz]);
      return (0, nz.useLayoutEffect)(Tz, [pz.selected, Tz]), (0, Cz.createPortal)((0, rz.jsxs)("div", {
        ref: Fz,
        className: "HudFullScreenEditor",
        children: [(0, rz.jsx)(pb, {
          ...pz,
          maxHeight: window.innerHeight,
          fill: !0,
          onMeasured: Lz,
          onReady: Xz,
          lockable: Mz
        }), (0, rz.jsxs)("div", {
          ref: Rz,
          className: "HudFullScreenToolbar",
          style: null === fz ? void 0 : {
            left: fz.left,
            top: fz.top,
            transform: "none"
          },
          children: [(0, rz.jsx)("div", {
            ref: Kz,
            className: "HudFullScreenControls",
            children: (0, rz.jsx)(vu, {
              selected: Zz,
              layout: pz.layout.hudLayouts[pz.orientation],
              actionButtons: pz.actionButtons,
              keyNames: pz.keyNames,
              overlaps: oz,
              scaleCaps: vz,
              onScale: uz,
              onHidden: bz,
              onReset: iz,
              locked: lz,
              lockable: Mz,
              onLocked: tz,
              joystickFixed: pz.joystickFixed
            })
          }), (0, rz.jsx)(Hz.f, {
            className: "HudFullScreenDone",
            onClick: Oz,
            padDefaultFocus: !0,
            children: dz("hudLayout:done")
          })]
        })]
      }), document.body)
    }
    const Rb = zz => `${Math.round(100*zz)}%`;

    function Kb(zz) {
      let {
        info: uz,
        tuple: bz,
        props: nz
      } = zz;
      const {
        t: iz
      } = (0, Ez.F)();
      return (0, rz.jsx)(Fz.f, {
        name: iz("hudLayout:size"),
        min: Tz.p,
        max: Tz.l,
        step: Nu,
        initValue: bz[2],
        disabled: nz.locked.has(uz.id),
        selectableMax: nz.scaleCaps[uz.id],
        cappedNote: iz("hudLayout:sizeCapped"),
        format: Rb,
        onChange: zz => {
          nz.onScalePreview(uz.id, zz)
        },
        onChangeComplete: zz => {
          nz.onScale(uz.id, zz)
        }
      })
    }

    function wb(zz) {
      const {
        t: uz
      } = (0, Ez.F)(), {
        present: bz,
        elements: iz,
        selected: lz,
        onSelect: Mz,
        onHidden: Hz,
        onReset: Oz,
        note: pz,
        actionButtons: dz,
        keyNames: Fz,
        sizeBesidePreview: Zz,
        locked: Rz,
        lockable: Kz,
        onLocked: wz
      } = zz, {
        rowIconsOpen: Xz,
        onRowIconsOpen: fz
      } = zz, sz = (0, nz.useRef)(null), oz = null !== lz && (Xz || !(0, Tz.T)(lz));
      return (0, nz.useEffect)((() => {
        var zz;
        const uz = lz ? null === (zz = sz.current) || void 0 === zz ? void 0 : zz.querySelector(`[data-hud-row="${lz}"]`) : null;
        if (!uz) return;
        const bz = uz.closest(".SettingsMenuRight"),
          Ez = performance.now();
        let nz = null;
        const iz = () => {
            clearInterval(tz), null === bz || void 0 === bz || bz.removeEventListener("scroll", Mz)
          },
          Mz = () => {
            Bu() || iz()
          },
          tz = setInterval((() => {
            const zz = performance.now();
            zz - Ez > 1500 ? iz() : Bu() ? nz = null : null === nz ? nz = zz : zz - nz >= 150 && (iz(), function(zz) {
              var uz;
              const bz = zz.closest(".SettingsMenuRight"),
                Ez = null === (uz = zz.closest(".HudLayoutSettings")) || void 0 === uz ? void 0 : uz.querySelector(".HudLayoutPreviewBox");
              if (!bz || !Ez) return;
              const nz = Ez.getBoundingClientRect().bottom + 8,
                iz = bz.getBoundingClientRect().bottom - 8,
                lz = zz.getBoundingClientRect();
              lz.top < nz ? bz.scrollBy({
                top: lz.top - nz,
                behavior: "smooth"
              }) : lz.bottom > iz && bz.scrollBy({
                top: Math.min(lz.bottom - iz, lz.top - nz),
                behavior: "smooth"
              })
            }(uz))
          }), 50);
        return null === bz || void 0 === bz || bz.addEventListener("scroll", Mz, {
          passive: !0
        }), iz
      }), [lz, oz]), (0, rz.jsx)("div", {
        ref: sz,
        className: "SettingBoxGroup HudElementList",
        children: mz.filter((zz => bz.has(zz.id) && (Xz || !(0, Tz.T)(zz.id)))).map((bz => {
          const Ez = ((zz, uz) => {
              var bz;
              return null !== (bz = zz[uz]) && void 0 !== bz ? bz : Tz.v
            })(iz, bz.id),
            nz = (0, Tz.A)(iz, bz.id),
            sz = bz.id === lz,
            oz = bz.scale && !Zz,
            Nz = pz(bz.id, sz);
          return (0, rz.jsxs)("div", {
            "data-hud-row": bz.id,
            className: tz()("SettingBox HudElementRow", {
              Open: sz,
              Hidden: nz,
              Child: void 0 !== bz.parent
            }),
            children: [(0, rz.jsxs)("div", {
              className: "HudElementRowHead",
              children: [(0, rz.jsxs)("button", {
                type: "button",
                className: "HudElementRowName",
                "aria-expanded": oz ? sz : void 0,
                onClick: () => {
                  Mz(bz.id)
                },
                children: [Uz(bz.id, dz, uz, Fz), bz.scale && 1 !== Ez[2] && !(sz && oz) && (0, rz.jsx)("span", {
                  className: "HudElementRowSize",
                  children: Rb(Ez[2])
                }), oz && (0, rz.jsx)("span", {
                  className: "HudElementRowChevron",
                  children: "\u25be"
                })]
              }), (0, rz.jsx)(Dz, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: bz.id,
                actionButtons: dz,
                keyNames: Fz,
                locked: Rz.has(bz.id),
                lockable: Kz(bz.id),
                onLocked: wz
              }), "menu" === bz.id && (0, rz.jsx)(Qz, {
                className: "HudElementRowIcon",
                open: Xz,
                name: Uz(bz.id, dz, uz, Fz),
                onToggle: fz
              }), "menu" !== bz.id && (0, rz.jsx)(Sz, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                id: bz.id,
                elements: iz,
                actionButtons: dz,
                keyNames: Fz,
                onHidden: Hz
              }), (0, rz.jsx)(yz, {
                className: "HudElementRowIcon",
                keepPlace: !0,
                onlyWhenMoved: !0,
                locked: Rz.has(bz.id),
                id: bz.id,
                elements: iz,
                actionButtons: dz,
                keyNames: Fz,
                onReset: Oz
              })]
            }), sz && oz && (0, rz.jsx)(Kb, {
              info: bz,
              tuple: Ez,
              props: zz
            }), Nz && (0, rz.jsx)("div", {
              className: "HudElementNote",
              children: Nz
            })]
          }, bz.id)
        }))
      })
    }

    function Xb(zz) {
      let {
        preview: uz,
        quick: bz,
        onFullScreen: iz,
        resting: lz,
        onSidePanel: Mz
      } = zz;
      const {
        t: tz
      } = (0, Ez.F)(), Oz = Ob(), pz = (0, nz.useRef)(null), {
        width: dz
      } = (0, zu.e)(pz), Fz = Math.floor(Oz.width * Math.min(1, uz.maxHeight / Oz.height)), Zz = dz - Fz - 12, Rz = Zz >= 130, Kz = dz > 0;
      (0, nz.useEffect)((() => {
        Kz && Mz(Rz)
      }), [Kz, Rz, Mz]);
      const wz = (0, uu.r)(Rz ? Fz : dz, Oz.width, Oz.height, uz.maxHeight),
        Xz = lz ? (0, rz.jsx)("div", {
          className: "HudPreviewResting",
          style: {
            height: Oz.height * wz
          }
        }) : (0, rz.jsx)(pb, {
          ...uz
        }),
        fz = zz => (0, rz.jsxs)(Hz.V, {
          className: "HudLayoutFullScreenButton",
          ariaLabel: tz("hudLayout:fullScreen"),
          analyticsClick: {
            id: "hud_layout.full_screen"
          },
          onClick: iz,
          children: [(0, rz.jsx)(Jz.c, {
            name: "expand"
          }), zz && (0, rz.jsx)("span", {
            children: tz("hudLayout:fullScreen")
          })]
        });
      return (0, rz.jsxs)("div", {
        ref: pz,
        className: "SettingBox HudLayoutPreviewBox",
        children: [dz > 0 && Rz && (0, rz.jsxs)("div", {
          className: "HudLayoutPreviewRow",
          children: [(0, rz.jsx)("div", {
            style: {
              width: Fz
            },
            children: Xz
          }), (0, rz.jsx)("div", {
            className: "HudLayoutSidePanel",
            children: (0, rz.jsx)(vu, {
              selected: uz.selected,
              ...bz,
              joystickFixed: uz.joystickFixed,
              extra: fz(!uz.selected || Zz >= 278)
            })
          })]
        }), dz > 0 && !Rz && (0, rz.jsxs)(rz.Fragment, {
          children: [Xz, (0, rz.jsx)("div", {
            className: "HudLayoutCornerButton",
            children: fz(!1)
          })]
        })]
      })
    }
    var fb = bz(2350),
      sb = bz(4177),
      rb = bz(2326);
    const ob = zz => {
      const uz = Eu.n * ("sides" === zz ? window.innerWidth : window.innerHeight);
      return Math.min(64, 2 * Math.floor(uz / 2))
    };

    function Nb(zz, uz, bz) {
      const [Ez, nz, iz, lz] = zz;
      return "sides" === uz ? [Ez, bz, iz, bz] : [bz, nz, bz, lz]
    }
    const vb = [null, null, null, null],
      xb = zz => `${zz}px`;

    function Jb(zz) {
      let {
        safe: uz,
        onPreview: bz,
        onCommit: iz
      } = zz;
      const {
        t: lz
      } = (0, Ez.F)(), Mz = (0, Eu.u)(null !== uz && void 0 !== uz ? uz : vb, window.innerWidth, window.innerHeight, cu(document).map(Math.round)), tz = (0, nz.useRef)(null !== uz && void 0 !== uz ? uz : vb);
      tz.current = null !== uz && void 0 !== uz ? uz : vb;
      const Oz = zz => {
        const uz = Math.min(ob(zz), "sides" === zz ? Math.max(Mz[1], Mz[3]) : Math.max(Mz[0], Mz[2]));
        return (0, rz.jsx)(Fz.f, {
          name: lz("sides" === zz ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
          min: 0,
          max: ob(zz),
          step: 2,
          initValue: uz,
          format: xb,
          onChange: uz => {
            bz(Nb(tz.current, zz, uz))
          },
          onChangeComplete: Ez => {
            if (Ez === uz) return void bz(tz.current);
            const nz = Nb(tz.current, zz, Ez);
            tz.current = nz, iz(nz), (0, vz.reportAnalyticsClick)({
              id: "hud_layout.safe_zone",
              value: zz
            })
          }
        })
      };
      return (0, rz.jsxs)("div", {
        className: "SettingBoxGroup HudSafeZone",
        children: [(0, rz.jsxs)("div", {
          className: "SettingBox HudSafeZoneHeader",
          children: [(0, rz.jsx)("div", {
            children: lz("hudLayout:safeZone")
          }), (0, rz.jsx)(Hz.V, {
            active: null === uz,
            pressed: null === uz,
            onClick: () => {
              iz(null)
            },
            children: lz("hudLayout:safeZoneAuto")
          })]
        }), Oz("sides"), Oz("ends")]
      })
    }

    function Ab() {
      const {
        t: zz
      } = (0, Ez.F)(), uz = (0, Tz.fb)(), {
        clientEscMenuOptions: bz
      } = (0, Oz.m)(["clientEscMenuOptions"]), iz = (0, fb.h)(), lz = uz.hudLayouts[iz], [Mz, tz] = (0, nz.useState)(null), {
        rowIconsOpen: pz,
        onRowIconsOpen: dz,
        select: Zz
      } = function(zz, uz) {
        const [bz, Ez] = (0, nz.useState)((() => Tz.K.some((uz => void 0 !== zz.hudElements[uz] || zz.hudLocked.includes(uz))))), iz = (0, nz.useCallback)((zz => {
          uz(zz), (0, Tz.T)(zz) && Ez(!0)
        }), [uz]);
        return {
          rowIconsOpen: bz,
          onRowIconsOpen: Ez,
          select: iz
        }
      }(lz, tz), [Rz, Kz] = (0, nz.useState)([]), [wz, Xz] = (0, nz.useState)(null), [fz, sz] = ou(), oz = (0, nz.useCallback)(((zz, uz, bz) => {
        Kz(uz), sz(bz);
        const Ez = Object.keys(zz);
        Xz((zz => (null === zz || void 0 === zz ? void 0 : zz.size) === Ez.length && Ez.every((uz => zz.has(uz))) ? zz : new Set(Ez)))
      }), [sz]), {
        gameState: Nz
      } = (0, Oz.m)(["gameState"]), Jz = (0, rb.g)(), [Az] = (0, nz.useState)((() => "inGame" === Nz ? function(zz, uz) {
        const bz = zz.querySelector(".InGameUi .TouchComponentsButtons");
        if (!bz) return lu;
        const Ez = {},
          nz = {};
        for (const Hz of iu) {
          const zz = bz.querySelector(`.TouchSlot${Hz} > .TouchKey`);
          if (zz) {
            var iz, lz;
            Ez[Hz] = zz.cloneNode(!0);
            const uz = (null !== (iz = null === (lz = zz.querySelector(".TouchKeyLabel")) || void 0 === lz ? void 0 : lz.textContent) && void 0 !== iz ? iz : "").split(/\s+/).filter((zz => !/[\d\xd7]/.test(zz))).join(" ");
            uz && (nz[Hz] = uz)
          }
        }
        const Mz = uz => {
            const bz = zz.querySelector(`.InGameUi ${uz}`);
            return null !== bz && !bz.classList.contains("Hidden")
          },
          tz = [...zz.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((zz => zz.cloneNode(!0)));
        return {
          faces: Object.keys(Ez).length > 0 ? Ez : null,
          names: nz,
          shop: Mz(".TouchInventoryKey.ShopKey"),
          bag: Mz(".TouchInventoryKey.BagKey"),
          items: tz.length > 0 ? tz : null,
          rowIcons: uz
        }
      }(document, Jz) : lu)), Lz = (0, nz.useRef)(null), Pz = (0, nz.useRef)(null), Gz = function(zz) {
        const [uz, bz] = (0, nz.useState)((() => .4 * window.innerHeight));
        return (0, nz.useLayoutEffect)((() => {
          var uz;
          const Ez = null === (uz = zz.current) || void 0 === uz ? void 0 : uz.closest(".SettingsMenuRight");
          if (!Ez) return;
          const nz = () => {
            const zz = Ez.clientHeight < Tb ? .4 : .5;
            bz(Math.max(80, Ez.clientHeight * zz - 24))
          };
          nz();
          const iz = new ResizeObserver(nz);
          return iz.observe(Ez), () => {
            iz.disconnect()
          }
        }), [zz]), uz
      }(Pz), az = (0, sb.n)(bz.joystickMode), Vz = bz.touchActionButtons, hz = (0, nz.useMemo)((() => function(zz, uz) {
        const bz = {},
          Ez = [
            ["extra", "X"],
            ["game", "G"]
          ];
        uz || Ez.push(["attack", "P"]);
        for (const [nz, iz] of Ez) {
          const uz = zz.names[iz];
          uz && (bz[nz] = uz)
        }
        return bz
      }(Az, Vz)), [Az, Vz]);
      (0, nz.useEffect)((() => {
        (0, vz.reportAnalyticsClick)({
          id: "hud_layout.open"
        })
      }), []);
      const [Uz, gz] = (0, nz.useState)(!1), [Sz, yz] = (0, nz.useState)(!1), Dz = (0, nz.useRef)(null);
      db(Dz, !Sz);
      const [Qz, Wz] = (0, nz.useState)(!1), ez = (0, nz.useCallback)((() => {
        Wz(!1)
      }), []), jz = (0, nz.useMemo)((() => new Set(lz.hudLocked)), [lz.hudLocked]), Cz = zz => {
        var uz, bz;
        const Ez = (0, Tz.y)(),
          nz = zz(Ez);
        (0, Tz.bb)(null !== (uz = null === (bz = Lz.current) || void 0 === bz ? void 0 : bz.keepLocks(Ez, nz)) && void 0 !== uz ? uz : nz)
      }, Yz = (zz, uz) => {
        Cz((bz => (0, Tz.gb)(bz, iz, zz, uz)))
      }, kz = (zz, uz, bz) => {
        Yz(zz, {
          dx: uz,
          dy: bz
        }), (0, vz.reportAnalyticsClick)({
          id: "hud_layout.edit",
          value: `move:${zz}`
        })
      }, zu = (zz, uz) => {
        Cz((bz => (0, Tz.jb)(bz, iz, zz, uz)))
      }, uu = zz => {
        const uz = qz[zz];
        return (uz.move || uz.scale) && ("joystick" !== zz || az) && !(0, bu.t)(zz, lz.hudElements[zz])
      }, Eu = zz => qz[zz].move && ("joystick" !== zz || az) && !jz.has(zz), nu = new Set(mz.map((zz => zz.id)).filter((zz => {
        const uz = (0, Tz.T)(zz) && !Az.rowIcons.includes(zz);
        return null === wz || wz.has(zz) || (0, Tz.A)(lz.hudElements, zz) && !uz
      }))), Mu = {
        present: nu,
        actionButtons: Vz,
        keyNames: hz,
        scaleCaps: fz,
        sizeBesidePreview: Uz,
        elements: lz.hudElements,
        selected: Mz,
        onSelect: Zz,
        rowIconsOpen: pz,
        onRowIconsOpen: dz,
        onScalePreview: (zz, uz) => {
          var bz;
          null === (bz = Lz.current) || void 0 === bz || bz.setScale(zz, uz)
        },
        onScale: (zz, uz) => {
          Yz(zz, {
            scale: uz
          }), (0, vz.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `size:${zz}`
          })
        },
        onHidden: (zz, uz) => {
          Yz(zz, {
            hidden: uz
          }), (0, vz.reportAnalyticsClick)({
            id: "hud_layout.edit",
            value: `${uz?"hide":"show"}:${zz}`
          })
        },
        onReset: zz => {
          Yz(zz, Tz.d)
        },
        locked: jz,
        lockable: uu,
        onLocked: zu,
        note: (uz, bz) => {
          const Ez = bz && Rz.length > 0 ? zz("hudLayout:overlapsNote", {
            names: cz(Rz, Vz, zz, hz)
          }) : null;
          return bz && Iz(uz, az) ? (0, rz.jsxs)(rz.Fragment, {
            children: [Ez && (0, rz.jsx)("span", {
              children: Ez
            }), (0, rz.jsx)("span", {
              children: zz("hudLayout:floatingJoystickNote")
            }), !Uz && (0, rz.jsx)(Bz, {})]
          }) : Ez || (bz && jz.has(uz) ? zz("hudLayout:lockedNote") : bz && "cluster" === uz ? zz("hudLayout:clusterNote") : bz && "menu" === uz ? zz("hudLayout:menuNote") : bz && (0, bu.t)(uz, lz.hudElements[uz]) && Eu(uz) ? zz("hudLayout:rowIconNote") : bz && "arrows" === uz ? zz("hudLayout:arrowsNote") : "inventory" === uz && (0, Tz.A)(lz.hudElements, "inventory") ? zz("hudLayout:inventoryHiddenNote") : null)
        }
      };
      return (0, rz.jsxs)("div", {
        ref: Pz,
        className: "HudLayoutSettings",
        children: [(0, rz.jsxs)("div", {
          ref: Dz,
          className: "HudLayoutBody",
          children: [(0, rz.jsx)("div", {
            className: "HudLayoutOrientation",
            children: zz("landscape" === iz ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
          }), (0, rz.jsx)(Xb, {
            preview: {
              layout: uz,
              orientation: iz,
              selected: Mz,
              onSelect: Zz,
              onMove: kz,
              canMove: Eu,
              actionButtons: Vz,
              joystickFixed: az,
              presence: Az,
              keyNames: hz,
              maxHeight: Gz,
              apiRef: Lz,
              onMeasured: oz,
              onReady: yz,
              lockable: uu
            },
            quick: {
              layout: lz,
              actionButtons: Vz,
              keyNames: hz,
              scaleCaps: fz,
              overlaps: Rz,
              onScale: Mu.onScale,
              onHidden: Mu.onHidden,
              onReset: Mu.onReset,
              locked: jz,
              lockable: uu,
              onLocked: zu
            },
            onFullScreen: () => {
              Wz(!0)
            },
            resting: Qz,
            onSidePanel: gz
          }), Qz && (0, rz.jsx)(Zb, {
            layout: uz,
            orientation: iz,
            selected: Mz,
            onSelect: Zz,
            onMove: kz,
            canMove: Eu,
            actionButtons: Vz,
            joystickFixed: az,
            presence: Az,
            keyNames: hz,
            onScale: Mu.onScale,
            onHidden: Mu.onHidden,
            onReset: Mu.onReset,
            locked: jz,
            lockable: uu,
            onLocked: zu,
            apiRef: Lz,
            onClose: ez
          }), (0, rz.jsx)(Jb, {
            safe: lz.hudSafe,
            onCommit: zz => {
              Cz((uz => (0, Tz.lb)(uz, iz, zz)))
            },
            onPreview: zz => {
              var uz;
              null === (uz = Lz.current) || void 0 === uz || uz.setSafe(zz)
            }
          }), (0, rz.jsx)(Fz.b, {
            label: zz("hudLayout:snapCentre"),
            checked: uz.hudSnapCentre,
            onClick: zz => {
              (0, Tz._)(zz)
            },
            circleInfoText: zz("hudLayout:snapCentreInfo")
          }), (0, rz.jsx)(wb, {
            ...Mu
          }), (0, rz.jsx)(Fz.e, {
            label: zz("hudLayout:shape"),
            options: Tz.N.map((uz => ({
              value: uz,
              label: zz(`hudLayout:shape_${uz}`)
            }))),
            value: uz.hudShape,
            onChange: zz => {
              Cz((uz => ({
                ...uz,
                hudShape: zz
              }))), (0, vz.reportAnalyticsClick)({
                id: "hud_layout.shape",
                value: zz
              })
            }
          }), (0, rz.jsx)(Fz.f, {
            name: zz("hudLayout:opacity"),
            min: Tz.h,
            max: 1,
            step: .05,
            initValue: uz.hudKeyOpacity,
            format: zz => `${Math.round(100*zz)}%`,
            circleInfoText: zz("hudLayout:opacityInfo"),
            onChange: zz => {
              var uz;
              null === (uz = Lz.current) || void 0 === uz || uz.setOpacity(zz)
            },
            onChangeComplete: zz => {
              (0, Tz.Z)(zz), (0, vz.reportAnalyticsClick)({
                id: "hud_layout.edit",
                value: "opacity"
              })
            }
          })]
        }), (0, rz.jsx)(Hz.K, {
          className: "HudLayoutResetAll",
          analyticsClick: {
            id: "hud_layout.reset_all"
          },
          onClick: () => {
            !async function() {
              const zz = xz.NotificationProvider.showPromptPopup({
                title: "hudLayout:resetAllTitle",
                subtitle: "hudLayout:resetAllSubtitle",
                confirmText: "hudLayout:resetAllConfirm",
                cancelText: "general:cancel",
                destructive: !0
              });
              !0 === await zz.getResult() && (0, Tz.W)()
            }()
          },
          children: zz("hudLayout:resetAll")
        })]
      })
    }
    const Tb = 350;
    const Lb = [function() {
      const {
        t: zz
      } = (0, Ez.F)(), [uz, bz] = (0, nz.useState)(!1), iz = (0, nz.useRef)(null);
      return (0, nz.useEffect)((() => {
        var zz;
        uz && (null === (zz = iz.current) || void 0 === zz || zz.scrollIntoView({
          block: "start",
          behavior: "smooth"
        }))
      }), [uz]), (0, rz.jsxs)("div", {
        className: "HudLayoutSection",
        children: [(0, rz.jsxs)("button", {
          ref: iz,
          type: "button",
          className: "SettingBox SettingBoxFeatured HudLayoutEntry",
          "aria-expanded": uz,
          onClick: () => {
            bz(!uz)
          },
          children: [(0, rz.jsx)(Jz.c, {
            name: "arrows-up-down-left-right",
            className: "HudLayoutEntryIcon"
          }), (0, rz.jsxs)("span", {
            className: "HudLayoutEntryText",
            children: [(0, rz.jsx)("span", {
              className: "HudLayoutEntryTitle",
              children: zz("hudLayout:title")
            }), (0, rz.jsx)("span", {
              className: "HudLayoutEntrySub",
              children: zz("hudLayout:entrySub")
            })]
          }), (0, rz.jsx)("span", {
            className: "HudLayoutEntryChevron",
            children: "\u25be"
          })]
        }), uz && (0, rz.jsx)(Ab, {})]
      })
    }, function() {
      const {
        t: zz
      } = (0, Ez.F)(), {
        joystickMode: uz,
        touchSpeedCurve: bz,
        autorun: nz,
        jumpLock: iz
      } = (0, Oz.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, rz.jsxs)(rz.Fragment, {
        children: [(0, rz.jsx)(Fz.e, {
          label: zz("settingsMenu:joystick"),
          options: sz.Mb.map((uz => ({
            value: uz,
            label: zz(oz[uz])
          }))),
          value: uz,
          onChange: zz => {
            Oz.e.setClientEscMenuOptions({
              joystickMode: zz
            })
          },
          circleInfoText: zz("settingsMenu:joystickInfo")
        }), (0, rz.jsx)(Fz.b, {
          label: zz("settingsMenu:preciseWalking"),
          checked: bz,
          onClick: zz => {
            Oz.e.setClientEscMenuOptions({
              touchSpeedCurve: zz
            })
          },
          circleInfoText: zz("settingsMenu:preciseWalkingInfo")
        }), (0, rz.jsx)(Fz.b, {
          label: zz("settingsMenu:autoRun"),
          checked: nz,
          onClick: zz => {
            Oz.e.setClientEscMenuOptions({
              autorun: zz
            })
          },
          circleInfoText: zz("settingsMenu:autoRunInfo")
        }), (0, rz.jsx)(Fz.b, {
          label: zz("settingsMenu:jumpLock"),
          checked: iz,
          onClick: zz => {
            Oz.e.setClientEscMenuOptions({
              jumpLock: zz
            })
          },
          circleInfoText: zz("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      return (0, rz.jsx)(fz.c, {})
    }, function() {
      const {
        t: zz
      } = (0, Ez.F)(), {
        clientEscMenuOptions: uz
      } = (0, Oz.m)(["clientEscMenuOptions"]);
      return (0, Nz.d)() ? (0, rz.jsx)(Fz.b, {
        label: zz("settingsMenu:vibration"),
        checked: uz.vibration,
        onClick: zz => {
          Oz.e.setClientEscMenuOptions({
            vibration: zz
          })
        },
        circleInfoText: zz("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Pb() {
      return (0, rz.jsx)(rz.Fragment, {
        children: Lb.map(((zz, uz) => (0, rz.jsx)(zz, {}, uz)))
      })
    }
    var Gb = bz(4150);

    function ab() {
      const {
        t: zz
      } = (0, Ez.F)(), {
        isTouchScreen: uz,
        clientEscMenuOptions: bz,
        gameState: lz
      } = (0, Oz.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), Mz = (0, Zz.g)("ezBridging"), tz = (0, Zz.g)("ezTowering"), Kz = "inGame" !== lz || !0 === Mz, wz = (0, Rz.g)() && ("inGame" !== lz || !0 === tz), [, fz] = (0, nz.useReducer)((zz => zz + 1), 0), sz = (0, Xz.g)(), [oz, Nz] = (0, nz.useState)(Gb.g);
      return (0, rz.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [sz && (0, rz.jsxs)("div", {
          className: "SettingBox SettingBoxWithButton",
          children: [(0, rz.jsx)("div", {
            children: zz("controller:settingsControlsNote")
          }), (0, rz.jsx)(Hz.V, {
            onClick: () => {
              Oz.e.set({
                openSettingsCategory: "controller"
              })
            },
            children: zz("controller:settingsOpenController")
          })]
        }), (0, pz.isTouchscreen)() && !(0, pz.isMobile)() ? (0, rz.jsx)(rz.Fragment, {
          children: (0, rz.jsx)(Fz.b, {
            label: zz("settingsMenu:useTouchControls"),
            checked: oz,
            onClick: zz => {
              (0, Gb.d)(zz), Nz(zz)
            }
          })
        }) : null, uz && (0, rz.jsx)(Pb, {}), Kz && (0, rz.jsx)(Fz.b, {
          label: zz("settingsMenu:ezBridging"),
          checked: bz.ezBridging,
          onClick: zz => {
            Oz.e.setClientEscMenuOptions({
              ezBridging: zz
            })
          },
          circleInfoText: zz("settingsMenu:ezBridgingInfo")
        }), wz && (0, rz.jsx)(Fz.b, {
          label: zz("settingsMenu:ezTowering"),
          checked: bz.ezTowering,
          onClick: zz => {
            Oz.e.setClientEscMenuOptions({
              ezTowering: zz
            })
          },
          circleInfoText: zz("settingsMenu:ezToweringInfo")
        }), (0, rz.jsx)(Fz.b, {
          label: zz("settingsMenu:crouchToggle"),
          checked: bz.crouchIsToggle,
          onClick: zz => {
            Oz.e.setClientEscMenuOptions({
              crouchIsToggle: zz
            })
          },
          circleInfoText: zz("settingsMenu:crouchToggleInfo")
        }), (0, rz.jsx)(Fz.b, {
          label: zz("settingsMenu:hideUiToggle"),
          checked: bz.hideUiIsToggle,
          onClick: zz => {
            Oz.e.setClientEscMenuOptions({
              hideUiIsToggle: zz
            })
          },
          circleInfoText: zz("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, dz.e)() && (0, rz.jsx)(Fz.f, {
          name: zz("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: bz.touchscreenSensitivity,
          onChange: zz => {
            Oz.e.setClientEscMenuOptions({
              touchscreenSensitivity: zz
            })
          }
        }), !(0, pz.isMobile)() && (0, rz.jsx)(Fz.f, {
          name: zz("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: bz.mouseSensitivity,
          onChange: zz => {
            Oz.e.setClientEscMenuOptions({
              mouseSensitivity: zz
            })
          }
        }), !(0, pz.isMobile)() && (0, rz.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, rz.jsx)("div", {
            className: "SliderText",
            children: zz("settingsMenu:keyBindings")
          }), iz.f.map((uz => (0, rz.jsx)(Vb, {
            title: zz(uz.name.translationKey, uz.name.params),
            defaultOpen: iz.g.has(uz.id),
            children: uz.actions.map((zz => (0, rz.jsx)(mb, {
              noaAction: zz,
              forceUpdate: fz,
              clashesWith: uz.clashesWith,
              showPadGlyph: sz
            }, zz)))
          }, uz.name.translationKey))), (0, rz.jsx)(Hz.K, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, iz.x)(), fz()
            },
            children: zz("controls:resetBindings")
          })]
        })]
      })
    }

    function Vb(zz) {
      let {
        title: uz,
        defaultOpen: bz,
        children: Ez
      } = zz;
      const [iz, lz] = (0, nz.useState)(bz);
      return (0, rz.jsxs)("div", {
        className: tz()("ControlsSection", {
          Collapsed: !iz
        }),
        children: [(0, rz.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            lz(!iz)
          },
          children: [(0, rz.jsx)("div", {
            className: "ControlsSectionTitle",
            children: uz
          }), (0, rz.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), iz && (0, rz.jsx)("div", {
          className: "ControlsSectionRows",
          children: Ez
        })]
      })
    }

    function mb(zz) {
      let {
        noaAction: uz,
        forceUpdate: bz,
        clashesWith: Mz,
        showPadGlyph: Oz
      } = zz;
      const {
        t: pz
      } = (0, Ez.F)(), dz = (0, wz.b)(uz), [Fz, Zz] = (0, nz.useState)(!1), [Rz, Xz] = (0, nz.useState)("controls:clickToEnterNewBinding"), [fz, sz] = (0, nz.useState)(null), [oz, Nz] = (0, nz.useState)(null), vz = (0, nz.useRef)(null);
      (0, nz.useEffect)((() => {
        Fz && vz.current && vz.current.focus()
      }), [Fz]);
      const xz = iz.s[uz].filter((zz => lz.k[zz]));
      let Jz = null;
      const Az = [],
        Tz = Mz.flatMap((zz => {
          var uz, bz;
          return null !== (uz = null === (bz = iz.f.find((uz => uz.id === zz))) || void 0 === bz ? void 0 : bz.actions) && void 0 !== uz ? uz : []
        }));
      for (const Ez of Tz) {
        if (Ez === uz) continue;
        const zz = iz.s[Ez];
        for (const uz of zz) xz.includes(uz) && Az.push(pz(iz.t[Ez].translationKey, iz.t[Ez].params))
      }
      Az.length > 0 && (Jz = pz("controls:sharedBindingsWarning") + " ", Jz += Az.join(", "));
      const Lz = () => {
          Zz(!1), sz(null), Xz("controls:clickToEnterNewBinding"), Nz(null)
        },
        Pz = () => "BindingInput_" + uz;
      return (0, rz.jsxs)("div", {
        className: tz()("ControlRow", {
          WarningBorder: null !== Jz
        }),
        children: [(0, rz.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, rz.jsxs)("div", {
            className: "ControlName",
            children: [pz(iz.t[uz].translationKey, iz.t[uz].params), Oz && dz && (0, rz.jsx)(Kz.e, {
              glyph: dz,
              className: "ControlPadGlyph"
            })]
          }), (0, rz.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, rz.jsxs)("div", {
              className: "ControlBindingsList",
              children: [xz.map((zz => (0, rz.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, rz.jsx)("div", {
                  children: (0, iz.l)(zz)
                }), (0, rz.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Ez = (0, iz.v)(uz, zz);
                    Ez.isError() ? Nz(Ez.asError().message) : Nz(null), bz()
                  },
                  children: "\xd7"
                })]
              }, zz))), !Fz && (0, rz.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  Zz(!0), Nz(null)
                },
                children: (0, rz.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), Fz && (0, rz.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, rz.jsxs)("div", {
                className: "InputContainer",
                children: [(0, rz.jsx)("div", {
                  className: "InputOverlay",
                  children: fz ? (0, iz.l)(fz) : (0, rz.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: pz(Rz)
                  })
                }), (0, rz.jsx)("input", {
                  ref: vz,
                  id: Pz(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: zz => {
                    if ("Escape" === zz.code) return Lz(), zz.preventDefault(), void zz.stopPropagation();
                    const uz = zz.code;
                    lz.e.includes(uz) ? (Nz(null), sz(uz)) : (Nz("controls:keyIsReserved"), sz(null)), zz.preventDefault(), zz.stopPropagation()
                  },
                  onMouseDown: zz => {
                    const uz = "Mouse" + (zz.button + 1);
                    document.activeElement && document.activeElement.id === Pz() ? lz.e.includes(uz) ? (Nz(null), sz(uz)) : (Nz("controls:keyIsReserved"), sz(null)) : Xz("controls:enterNewBinding"), zz.stopPropagation()
                  },
                  onBlur: () => {
                    Xz("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, rz.jsx)(Hz.f, {
                onPointerDown: zz => {
                  zz.preventDefault()
                },
                onClick: () => {
                  (0, iz.c)(uz, fz), bz(), Lz()
                },
                className: "ControlBindingAddButton",
                disabled: null === fz,
                children: pz("general:add")
              }), (0, rz.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  Lz()
                },
                children: "\xd7"
              })]
            }), oz && (0, rz.jsx)("div", {
              className: "ControlBindingError",
              children: pz(oz)
            })]
          })]
        }), Jz && (0, rz.jsx)("div", {
          className: "ControlRowWarning",
          children: Jz
        })]
      })
    }
  },
  8519: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Mz
    });
    var Ez = bz(20),
      nz = bz(3189),
      iz = bz(1322),
      lz = bz(1362);
    const Mz = async () => {
      if ((0, lz.f)()) {
        if (!0 !== await iz.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Ez.e.get("gameState")) return
      }(0, nz.b)()
    }
  },
  8524: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => tz,
      i: () => iz,
      j: () => lz,
      l: () => nz,
      p: () => Mz
    });
    var Ez = bz(1901);
    const nz = "controllerPadShopOpen",
      iz = zz => Ez.j.includes(zz),
      lz = zz => Object.values(zz).some((zz => !1 !== zz.canBuy && !zz.isRewardedAd)),
      Mz = (zz, uz, bz) => {
        var Ez, nz, lz, Mz;
        const tz = zz.filter((zz => !iz(zz))),
          Hz = null !== uz && zz.includes(uz) ? uz : null;
        return null !== Hz && !iz(Hz) && bz(Hz) ? Hz : null !== (Ez = null !== (nz = null !== (lz = null !== (Mz = tz.find(bz)) && void 0 !== Mz ? Mz : tz[0]) && void 0 !== lz ? lz : Hz) && void 0 !== nz ? nz : zz[0]) && void 0 !== Ez ? Ez : null
      },
      tz = zz => zz.userInput || zz.isRewardedAd || "boolean" === typeof zz.isSelected ? null : JSON.stringify([zz.image, zz.cost, zz.currency, zz.amount, zz.customTitle, zz.buyButtonText, zz.description, zz.canBuy])
  },
  8541: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Hz,
      g: () => Oz
    });
    var Ez = bz(56),
      nz = bz(1417),
      iz = bz(1949),
      lz = bz(1377),
      Mz = bz(1399),
      tz = bz(1089);
    const Hz = () => {
        const zz = (0, lz.u)();
        if ((0, Ez.useEffect)((() => {
            (0, lz.n)()
          }), []), !zz) return null;
        const {
          ControllerCategory: uz
        } = zz;
        return (0, tz.jsx)(Mz.d, {
          children: (0, tz.jsx)(uz, {})
        })
      },
      Oz = () => {
        var zz;
        const uz = (0, lz.u)(),
          [, bz] = (0, Ez.useReducer)((zz => zz + 1), 0);
        return (0, nz.g)(iz.c, bz), null !== (zz = null === uz || void 0 === uz ? void 0 : uz.hasActivePad()) && void 0 !== zz && zz
      }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);