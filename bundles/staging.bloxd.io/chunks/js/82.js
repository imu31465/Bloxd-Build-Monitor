export const id = 82;
export const ids = [82];
export const modules = {
  36120: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => SU,
      e: () => dU
    });
    var tU = gU(56),
      pU = gU(1800),
      EU = gU(36127),
      PU = gU.n(EU),
      TU = gU(4206),
      qU = gU(1777),
      KU = gU(1410),
      cU = gU(96),
      GU = gU(115),
      jU = gU(311),
      uU = gU(1037),
      CU = gU.n(uU),
      hU = gU(21),
      QU = gU(1049),
      eU = gU(1567),
      WU = gU(1637),
      fU = gU(1609),
      xU = gU(1853),
      mU = gU(1376),
      IU = gU(1929),
      JU = gU(1362),
      wU = gU(8412),
      nU = gU(36134),
      bU = gU(36157),
      oU = gU(1436),
      ZU = gU(2263),
      aU = gU(1181),
      YU = gU(36165);
    var BU = gU(8919);
    var VU = gU(1090);
    const rU = gU(36174),
      XU = ["enter", "t", "/"];
    let vU = !1;

    function dU() {
      return vU || (0, WU.isTextEntry)(document.activeElement)
    }

    function HU() {
      var UU, RU;
      (0, IU.d)();
      const gU = null !== (UU = null === (RU = (0, mU.g)()) || void 0 === RU ? void 0 : RU.getBoundButton("keyboardChannel")) && void 0 !== UU ? UU : null;
      return gU ? (0, VU.jsx)(xU.b, {
        className: "ChatInputChannelGlyph",
        glyph: gU
      }) : null
    }

    function SU() {
      const {
        t: UU
      } = (0, aU.B)(), {
        isTouchScreen: RU
      } = (0, hU.l)(["isTouchScreen"]), gU = (0, JU.o)(), [EU, uU] = (0, tU.useState)(!1), xU = (0, tU.useRef)(EU), mU = (0, tU.useRef)(null), {
        messages: IU,
        reportedPlayers: dU,
        channel: SU
      } = (0, wU.p)(), yU = (0, tU.useRef)(0), kU = (0, tU.useRef)(""), FU = (0, tU.useRef)(null);
      var iU;
      iU = FU, (0, tU.useEffect)((() => {
        if (!(0, cU.isIOS)()) return;
        const UU = iU.current;
        let RU = null;
        const gU = gU => {
            const tU = gU.changedTouches[0];
            RU = "none" === getComputedStyle(UU).pointerEvents ? {
              id: tU.identifier,
              y: tU.clientY
            } : null
          },
          tU = gU => {
            const tU = RU,
              pU = tU && (0, YU.d)(gU.changedTouches, tU.id);
            pU && (gU.preventDefault(), UU.scrollBy({
              top: tU.y - pU.clientY,
              behavior: "instant"
            }), tU.y = pU.clientY)
          };
        return UU.addEventListener("touchstart", gU, {
          passive: !0
        }), UU.addEventListener("touchmove", tU, {
          passive: !1
        }), () => {
          UU.removeEventListener("touchstart", gU), UU.removeEventListener("touchmove", tU)
        }
      }), [iU]);
      const [AU, zU] = (0, tU.useState)(!1), [MU, DU] = (0, tU.useState)(!1), LU = (0, tU.useRef)(AU), NU = (0, tU.useRef)(null), lU = (0, tU.useRef)(!1), OU = (0, tU.useRef)(null), UR = (0, tU.useRef)(null), RR = (0, tU.useRef)(null), gR = (0, tU.useRef)(PR);
      gR.current = PR;
      const tR = (0, ZU.j)();

      function pR() {
        xU.current = !1, uU(!1), UR.current.blur()
      }

      function ER(UU) {
        LU.current = UU, zU(UU)
      }

      function PR() {
        const UU = UR.current.value;
        UR.current.value = "", TR(UU)
      }

      function TR(UU) {
        (0, wU.l)(UU), yU.current = 0, ER(!1)
      }

      function qR(UU, RU) {
        0 === yU.current && (kU.current = UR.current.value);
        const gU = (0, wU.h)(yU.current + UU, RU);
        yU.current = gU.stepsBack, UR.current.value = 0 === gU.stepsBack ? kU.current : gU.text, setTimeout((() => {
          UR.current && UR.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function KR() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        FU.current && (!UU && LU.current || (FU.current.scrollTop = 1e5))
      }
      return (0, TU.e)(!0, EU, "ChatComponent"), (0, tU.useEffect)((() => (vU = EU, () => {
          vU = !1
        })), [EU]), (0, KU.e)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, eU.s)() && uU(!1)
        })), (0, tU.useEffect)((() => {
          UR.current.addEventListener("blur", (UU => {
            if (null === UR.current) return;
            Array.from(document.querySelectorAll(":hover")).some((UU => UU.classList.contains("ChatInputChannel") || UU.classList.contains("ChatMsgSelectWrapper"))) || ((0, cU.isMobile)() && xU.current && "" !== UR.current.value && gR.current(), uU(!1))
          }));
          const UU = UU => {
            mU.current.contains(UU.target) || (0, fU.n)(UU.target) || uU(!1)
          };
          document.addEventListener("touchstart", UU, {
            capture: !0
          });
          const RU = UU => {
            (0, bU.i)(UU.target) && (xU.current = !1, uU(!1))
          };
          document.addEventListener("mousedown", RU, {
            capture: !0
          });
          const gU = () => {
              clearTimeout(NU.current), ER(!0)
            },
            tU = () => {
              clearTimeout(NU.current), NU.current = setTimeout((() => {
                ER(!1), KR()
              }), 4e3)
            },
            EU = () => {
              document.pointerLockElement ? (uU(!1), DU(!0), lU.current = !1, ER(!1), KR()) : DU(!1)
            };
          FU.current.addEventListener("pointermove", (UU => {
            "touch" === UU.pointerType || lU.current || document.pointerLockElement || (lU.current = !0, clearTimeout(NU.current))
          })), FU.current.addEventListener("pointerleave", (UU => {
            "touch" !== UU.pointerType && (lU.current = !1, LU.current && tU())
          })), FU.current.addEventListener("pointerdown", (UU => {
            "touch" === UU.pointerType || document.pointerLockElement || (lU.current = !0, gU())
          })), FU.current.addEventListener("wheel", (UU => {
            document.pointerLockElement || UU.deltaY >= 0 && Math.abs(FU.current.scrollTop) < 1 || (gU(), lU.current || (NU.current = setTimeout((() => {
              ER(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), FU.current.addEventListener("touchstart", gU), FU.current.addEventListener("touchend", tU), FU.current.addEventListener("touchcancel", tU), document.addEventListener("pointerlockchange", EU);
          const TU = UU => {
            if (tR.shown && (xU.current || ! function(UU) {
                if ((0, WU.isTypingInInput)()) return !0;
                const RU = document.activeElement;
                return (RU instanceof HTMLButtonElement || "button" === (null === RU || void 0 === RU ? void 0 : RU.getAttribute("role"))) && ["Enter", " "].includes(UU.key)
              }(UU)) && "codeEditor" !== hU.b.get("openInGameMenuName") && "lobbyCodeEditor" !== hU.b.get("openInGameMenuName") && !pU.gameBridge.latest("connectedGame").replay)
              if (xU.current || !(0, eU.s)()) {
                if (xU.current) {
                  if ("ArrowUp" === UU.code || "ArrowDown" === UU.code) return qR("ArrowUp" === UU.code ? 1 : -1, !1), void UU.stopPropagation();
                  if ("Tab" === UU.code) return wU.e.selectNextChannel(), UU.stopPropagation(), void UU.preventDefault();
                  if (UU.ctrlKey && sU.includes(rU[UU.keyCode])) return UU.preventDefault(), void UU.stopPropagation()
                }
                if ([...XU, "esc"].includes(PU()(UU)))
                  if ("esc" !== PU()(UU)) {
                    if (!xU.current || "/" !== PU()(UU)) {
                      if ("t" === PU()(UU)) {
                        if (xU.current) return void UU.stopPropagation();
                        UU.preventDefault()
                      }
                      xU.current && "" !== UR.current.value && gR.current(), UU.repeat || (xU.current || "/" === PU()(UU) && (UR.current.value = "/", UU.preventDefault()), uU(!xU.current))
                    }
                  } else xU.current && (uU(!1), UU.stopPropagation());
                else xU.current && UU.stopPropagation()
              } else XU.includes(PU()(UU)) && (UU.preventDefault(), UU.stopPropagation(), (0, eU.b)(UU))
          };
          document.addEventListener("keydown", TU, {
            capture: !0
          });
          const qU = FU.current;
          let KU = !1;
          const GU = new ResizeObserver((() => {
              KU && (KU = !1, KR())
            })),
            jU = () => {
              KU = !0, GU.unobserve(qU), GU.observe(qU)
            };
          OU.current = jU;
          const CU = new MutationObserver(jU);
          return CU.observe(qU, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", TU, {
              capture: !0
            }), document.removeEventListener("touchstart", UU, {
              capture: !0
            }), document.removeEventListener("mousedown", RU, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", EU), OU.current = null, CU.disconnect(), GU.disconnect(), clearTimeout(NU.current)
          }
        }), []), (0, fU.u)(UR, {
          open: () => {
            uU(!0)
          },
          close: () => {
            pR()
          },
          submit: () => {
            "" !== UR.current.value && PR(), pR()
          },
          stepHistory: () => {
            qR(1, !0)
          },
          sendLine: UU => {
            TR(UU), pR()
          },
          selectNextChannel: () => {
            wU.e.selectNextChannel()
          }
        }), (0, tU.useEffect)((() => {
          var UU;
          (xU.current = EU, UR.current) && (EU ? (yU.current = 0, UR.current.focus()) : (UR.current.blur(), null === (UU = OU.current) || void 0 === UU || UU.call(OU)))
        }), [EU]),
        function(UU, RU) {
          (0, tU.useLayoutEffect)((() => {
            if (!RU) return;
            BU.c.hold();
            const gU = UU.current.closest(".InGameHeaderAndChat"),
              tU = window.visualViewport;
            let pU = "";
            const EU = () => {
              const UU = `${tU.offsetTop+tU.height}px`;
              UU !== pU && (pU = UU, gU.style.setProperty("--keyboard-top", UU))
            };
            return EU(), tU.addEventListener("resize", EU), tU.addEventListener("scroll", EU), () => {
              tU.removeEventListener("resize", EU), tU.removeEventListener("scroll", EU), gU.style.removeProperty("--keyboard-top"), BU.c.release()
            }
          }), [UU, RU])
        }(mU, EU && RU), (0, VU.jsx)(VU.Fragment, {
          children: (0, VU.jsxs)("div", {
            ref: mU,
            className: CU()("Chat", {
              Chatting: EU
            }),
            "data-camera-keeper": EU ? "" : void 0,
            children: [(0, VU.jsx)("div", {
              ref: FU,
              className: CU()("ChatMessages", {
                HideScrollbar: !AU && !EU,
                NoScrolling: !(0, cU.isMobile)() && MU
              }),
              children: (0, VU.jsx)(nU.b, {
                messages: IU,
                reportedPlayers: dU
              })
            }), RU && !EU && (0, VU.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": UU("general:chat"),
              ...(0, oU.g)((() => {
                uU(!0), RR.current.style.display = "flex", (0, cU.isIOS)() && UR.current.focus()
              }), "pointerup"),
              children: (0, VU.jsx)(QU.c, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, VU.jsxs)("div", {
              ref: RR,
              className: "ChatInputWrapper",
              style: {
                display: "" + (EU ? "flex" : "none")
              },
              children: [SU && (0, VU.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: SU.elementBgColor
                },
                onClick: UU => {
                  wU.e.selectNextChannel(), UR.current.focus()
                },
                children: (0, VU.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, VU.jsx)(qU.e, {
                    text: SU.elementContent
                  })
                })
              }), SU && gU && (0, VU.jsx)(HU, {}), (0, VU.jsx)("input", {
                className: "ChatInput",
                maxLength: jU.cd,
                ref: UR,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": UU("general:chat"),
                placeholder: SU ? `${SU.channelName} Chat${"touchOnly"===(0,GU.b)()||gU?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const sU = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36134: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => wU
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(8421),
      TU = gU(24),
      qU = gU(2203),
      KU = gU(3271),
      cU = gU(1869),
      GU = gU(21),
      jU = gU(1777),
      uU = gU(36143),
      CU = gU(1998),
      hU = gU(36150),
      QU = gU(2413),
      eU = gU(2389),
      WU = gU(2382),
      fU = gU(3286),
      xU = gU(2811),
      mU = gU(1834),
      IU = gU(1090);

    function JU(UU) {
      for (let gU = UU.length - 1; gU >= 0; gU--) {
        const tU = "string" === typeof(RU = UU[gU]) ? RU : "str" in RU && "string" === typeof RU.str ? RU.str : "";
        if ("" !== tU.trim()) return tU
      }
      var RU;
      return ""
    }

    function wU(UU) {
      let {
        messages: RU,
        reportedPlayers: gU
      } = UU;
      return (0, IU.jsx)(IU.Fragment, {
        children: RU.map((UU => (0, IU.jsx)(nU, {
          message: UU,
          reportedPlayers: gU
        }, UU.clientChatMsgId)))
      })
    }
    const nU = (0, tU.memo)((function(UU) {
      var RU;
      let {
        message: gU,
        reportedPlayers: pU
      } = UU;
      const wU = (0, tU.useRef)(null),
        [nU] = (0, tU.useState)(xU.j),
        {
          author: bU
        } = gU,
        oU = null === bU || void 0 === bU ? void 0 : bU.id,
        ZU = null !== (RU = null === bU || void 0 === bU ? void 0 : bU.name) && void 0 !== RU ? RU : void 0,
        aU = (0, cU.b)(ZU),
        YU = null !== bU && void 0 !== bU && bU.profileEffect ? CU.d[bU.profileEffect] : void 0,
        BU = null !== bU && !bU.local,
        VU = null === bU && null !== gU.serverChatMsgId,
        rU = (0, mU.h)("hiddenPlayerNames", (UU => (0, hU.c)(BU, ZU, UU))),
        XU = null === gU.serverChatMsgId || null === bU ? null : {
          text: JU(gU.content),
          serverChatMsgId: gU.serverChatMsgId,
          authorId: bU.id
        },
        vU = VU || null !== XU && !pU.includes(oU),
        dU = (0, KU.k)(BU && null !== ZU && void 0 !== ZU ? ZU : null),
        HU = (0, WU.l)(wU);
      (0, tU.useEffect)((() => () => {
        WU.e.closeIfOwner(wU)
      }), []);
      const SU = () => {
          VU ? TU.p.yh("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            aP: (0, PU.d)(gU.content),
            serverChatMsgId: gU.serverChatMsgId
          }) : null !== XU ? TU.p.yh("OpenReportMenu", {
            playerEId: oU,
            playerName: ZU,
            aP: XU.text,
            serverChatMsgId: XU.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        sU = void 0 === ZU ? [] : (0, fU.e)(dU, ZU, XU);
      return (0, IU.jsxs)("div", {
        ref: wU,
        className: EU()("MessageWrapper", {
          ChatMsgSelectWrapper: oU,
          Still: nU
        }),
        onContextMenu: rU ? UU => {
          (0, QU.f)(wU, UU, {
            ...(0, hU.b)(oU, ZU),
            showLocation: !1,
            status: null,
            extraActions: vU ? [{
              icon: "flag",
              text: "Report",
              onClick: SU
            }] : [],
            friendRequestSource: "chat"
          }, GU.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: rU ? UU => {
          (0, eU.e)(UU, (() => (0, hU.b)(oU, ZU).playerSocialPreview))
        } : void 0,
        children: [YU && (0, IU.jsx)(YU, {
          className: "ChatMessageBackground",
          simple: !0
        }), (BU || VU) && !HU && (0, IU.jsx)(uU.e, {
          className: "ChatFloatingActions",
          triggerElementRef: wU,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: SU,
            show: vU
          }, ...sU, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: UU => {
              (0, qU.l)(ZU, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: rU && "blocked" !== dU
          }]
        }), (0, IU.jsx)(jU.e, {
          text: gU.content,
          friendBadgeFor: aU ? ZU : void 0
        }, gU.clientChatMsgId)]
      }, gU.clientChatMsgId)
    }))
  },
  36187: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => uU,
      e: () => CU,
      h: () => jU,
      l: () => GU
    });
    var tU = gU(8982),
      pU = gU(36191),
      EU = gU(36197),
      PU = gU(8340),
      TU = gU(1410),
      qU = gU(56),
      KU = gU(74),
      cU = gU(1090);

    function GU() {
      var UU;
      return (0, TU.h)(pU.e, (0, pU.t)()), (0, cU.jsx)(cU.Fragment, {
        children: null === (UU = (0, pU.t)()) || void 0 === UU ? void 0 : UU.content
      })
    }

    function jU(UU) {
      var RU;
      let {
        show: gU
      } = UU;
      (0, TU.h)(pU.e, (0, pU.t)());
      const KU = null === (RU = (0, pU.t)()) || void 0 === RU ? void 0 : RU.menu;
      return (0, qU.useEffect)((() => {
        var UU;
        gU || (null === KU || void 0 === KU || null === (UU = KU.onClose) || void 0 === UU || UU.call(KU), (0, EU.q)())
      }), [gU, KU]), (0, qU.useEffect)((() => gU ? (0, PU.f)(EU.w, EU.e) : void 0), [gU]), (0, cU.jsx)(tU.d, {
        showing: gU,
        globallyUniqueKey: "clientGameMenu",
        children: null === KU || void 0 === KU ? void 0 : KU.content
      })
    }

    function uU(UU) {
      let {
        placement: RU = "bottom"
      } = UU;
      return (0, cU.jsx)("div", {
        id: `clientGameHud-${RU}`,
        style: {
          display: "contents"
        }
      })
    }

    function CU(UU) {
      let {
        children: RU,
        placement: gU = "bottom"
      } = UU;
      const [tU, pU] = (0, qU.useState)(null);
      return (0, qU.useEffect)((() => {
        pU(document.getElementById(`clientGameHud-${gU}`))
      }), [gU]), tU ? (0, KU.createPortal)(RU, tU) : null
    }
  },
  36430: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => GU,
      f: () => cU
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(1412),
      TU = gU(1090);
    const qU = 200,
      KU = 160;

    function cU() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function GU(UU) {
      let {
        side: RU,
        defaultSize: gU,
        covers: pU,
        onClose: cU,
        children: GU
      } = UU;
      const jU = (0, tU.useRef)(null),
        [uU, CU] = (0, tU.useState)(null),
        [hU, QU] = (0, tU.useState)(gU);
      hU !== gU && (QU(gU), CU(null));
      const eU = (0, tU.useRef)(null),
        WU = "top" === RU,
        fU = UU => WU ? UU.clientY : UU.clientX,
        xU = () => {
          eU.current = null
        };
      return (0, TU.jsxs)("div", {
        ref: jU,
        className: EU()("ResizableSidePanel", RU && `ResizableSidePanel-${RU}`, {
          Covers: "always" === pU,
          CoversWhenNarrow: "narrow" === pU,
          Dragged: null !== uU
        }),
        style: {
          [WU ? "height" : "width"]: null !== uU && void 0 !== uU ? uU : gU
        },
        children: [GU, RU && (0, TU.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": WU ? "horizontal" : "vertical",
          onPointerDown: UU => {
            if (0 !== UU.button) return;
            UU.preventDefault();
            const RU = jU.current,
              gU = Array.from(RU.parentElement.children).reduce(((UU, gU) => gU !== RU && "0" !== getComputedStyle(gU).flexGrow ? UU + (UU => WU ? UU.clientHeight : UU.clientWidth)(gU) : UU), 0),
              tU = WU ? RU.offsetHeight : RU.offsetWidth,
              pU = Math.min(qU, tU),
              EU = Math.max(pU, tU + Math.max(0, gU - KU));
            eU.current = {
              start: fU(UU),
              startSize: tU,
              minSize: pU,
              maxSize: EU
            }, UU.currentTarget.setPointerCapture(UU.pointerId)
          },
          onPointerMove: UU => {
            const gU = eU.current;
            if (!gU) return;
            const tU = "right" === RU ? gU.start - UU.clientX : fU(UU) - gU.start;
            CU(Math.min(gU.maxSize, Math.max(gU.minSize, gU.startSize + tU)))
          },
          onPointerUp: xU,
          onPointerCancel: xU,
          onLostPointerCapture: xU
        }), cU && (0, TU.jsx)(PU.h, {
          className: "ResizableSidePanelClose",
          onClick: cU
        })]
      })
    }
  },
  36451: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => JU,
      b: () => fU,
      f: () => QU,
      g: () => CU,
      j: () => uU,
      l: () => WU,
      m: () => nU,
      p: () => xU,
      r: () => IU,
      s: () => mU,
      v: () => wU,
      y: () => pU
    });
    var tU = gU(56);
    const pU = 5e3,
      EU = 500,
      PU = 3e3;
    let TU = null,
      qU = null,
      KU = null;
    const cU = new Set;

    function GU(UU) {
      TU = UU;
      for (const RU of cU) RU()
    }

    function jU() {
      if (!TU || void 0 !== TU.endedAt) return;
      null !== qU && (clearTimeout(qU), qU = null), GU({
        ...TU,
        endedAt: Date.now()
      });
      const UU = KU;
      KU = null, null === UU || void 0 === UU || UU()
    }

    function uU(UU, RU) {
      let {
        submit: gU,
        reopen: tU
      } = RU;
      null !== qU && clearTimeout(qU), KU = tU, GU({
        ...UU,
        startedAt: Date.now(),
        errors: []
      }), qU = setTimeout(jU, PU), gU()
    }

    function CU() {
      TU && void 0 === TU.endedAt && void 0 === TU.ranAt && (null !== qU && clearTimeout(qU), GU({
        ...TU,
        ranAt: Date.now()
      }), qU = setTimeout(jU, pU))
    }
    const hU = 3;

    function QU(UU) {
      if (!TU || void 0 === TU.ranAt || void 0 !== TU.endedAt || TU.errors.includes(UU) || TU.errors.length >= hU) return;
      const RU = 0 === TU.errors.length;
      GU({
        ...TU,
        errors: [...TU.errors, UU]
      }), RU && (null !== qU && clearTimeout(qU), qU = setTimeout(jU, EU))
    }

    function eU(UU) {
      var RU;
      return (null === (RU = TU) || void 0 === RU ? void 0 : RU.chatKey) === UU ? TU : null
    }

    function WU(UU) {
      const RU = eU(UU);
      return RU && void 0 !== RU.endedAt ? (GU(null), RU) : null
    }

    function fU(UU) {
      var RU;
      (null === (RU = TU) || void 0 === RU ? void 0 : RU.chatKey) === UU && (null !== qU && (clearTimeout(qU), qU = null), KU = null, GU(null))
    }
    const xU = "These changes from your last answer didn't go in. Make them again.";

    function mU(UU) {
      const RU = [...new Set(UU)].slice(0, hU);
      return `Fix this in your change: when it ran, the world showed ${1===RU.length?"this error":"these errors"}: ${RU.join(" ")}`
    }

    function IU(UU) {
      return `Your change didn't go in, because the code wouldn't run at all: ${UU.join(" ")} Send the whole change again with that fixed.`
    }

    function JU(UU) {
      return `Fix this in your change: ${UU.join(" ")}`
    }

    function wU(UU) {
      var RU;
      if (void 0 === UU.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const gU = Math.max(1, Math.round(((null !== (RU = UU.endedAt) && void 0 !== RU ? RU : UU.ranAt) - UU.ranAt) / 1e3)),
        tU = `Your change ran in your world for ${gU} ${1===gU?"second":"seconds"}`;
      return 0 === UU.errors.length ? {
        title: "Tested: no errors",
        text: `${tU} without an error.`
      } : {
        title: 1 === UU.errors.length ? "Tested: it showed an error" : `Tested: it showed ${UU.errors.length} errors`,
        text: `${tU} and showed: ${UU.errors.join(" ")}`
      }
    }

    function nU(UU) {
      const [RU, gU] = (0, tU.useState)((() => eU(UU)));
      return (0, tU.useEffect)((() => {
        const RU = () => {
          gU(eU(UU))
        };
        return RU(), cU.add(RU), () => {
          cU.delete(RU)
        }
      }), [UU]), RU
    }
  },
  36455: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      g: () => tU
    });
    const tU = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function pU(UU, RU, gU) {
      return {
        key: UU,
        label: `Code block at ${RU.join(", ")}`,
        codeBlock: !0,
        pos: RU,
        canChangePos: gU
      }
    }
  },
  36446: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      f: () => EU,
      g: () => PU,
      h: () => pU
    });
    const tU = "code block",
      pU = "World Code/";

    function EU(UU) {
      return UU.trim().toLowerCase().startsWith(pU.toLowerCase())
    }

    function PU(UU) {
      return UU.trim().slice(pU.length).replace(/^\.?\//, "")
    }
  },
  36423: (UU, RU, gU) => {
    gU.d(RU, {
      C: () => ZU,
      D: () => bU,
      E: () => jU,
      G: () => VU,
      H: () => wU,
      K: () => nU,
      O: () => BU,
      d: () => CU,
      e: () => qU,
      f: () => hU,
      j: () => oU,
      m: () => TU,
      q: () => cU,
      s: () => uU,
      v: () => QU,
      y: () => xU
    });
    var tU = gU(36413),
      pU = gU(36419);
    const EU = "bloxd-world-code-directory-sync",
      PU = "handles",
      TU = "[INVALID SCHEMATIC PLACEHOLDER]";

    function qU(UU, RU) {
      return `${UU}::${RU}`
    }
    const KU = new Set(["node_modules", ".git"]);

    function cU() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function GU() {
      return new Promise(((UU, RU) => {
        const gU = indexedDB.open(EU, 1);
        gU.onupgradeneeded = () => {
          const UU = gU.result;
          UU.objectStoreNames.contains(PU) || UU.createObjectStore(PU)
        }, gU.onsuccess = () => {
          UU(gU.result)
        }, gU.onerror = () => {
          var UU;
          RU(null !== (UU = gU.error) && void 0 !== UU ? UU : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function jU(UU, RU) {
      const gU = await GU();
      try {
        await new Promise(((tU, pU) => {
          const EU = gU.transaction(PU, "readwrite");
          EU.objectStore(PU).put(RU, UU), EU.oncomplete = () => {
            tU()
          }, EU.onerror = () => {
            var UU;
            pU(null !== (UU = EU.error) && void 0 !== UU ? UU : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        gU.close()
      }
    }
    async function uU(UU) {
      const RU = await GU();
      try {
        return await new Promise(((gU, tU) => {
          const pU = RU.transaction(PU, "readonly").objectStore(PU).get(UU);
          pU.onsuccess = () => {
            var UU;
            gU(null !== (UU = pU.result) && void 0 !== UU ? UU : null)
          }, pU.onerror = () => {
            var UU;
            tU(null !== (UU = pU.error) && void 0 !== UU ? UU : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        RU.close()
      }
    }
    async function CU(UU) {
      const RU = await GU();
      try {
        await new Promise(((gU, tU) => {
          const pU = RU.transaction(PU, "readwrite");
          pU.objectStore(PU).delete(UU), pU.oncomplete = () => {
            gU()
          }, pU.onerror = () => {
            var UU;
            tU(null !== (UU = pU.error) && void 0 !== UU ? UU : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        RU.close()
      }
    }
    async function hU(UU) {
      const RU = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await UU.queryPermission(RU) || "granted" === await UU.requestPermission(RU)
    }
    async function QU(UU) {
      if (!cU()) return null;
      try {
        const RU = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await jU(UU, RU), RU
      } catch (RU) {
        if (function(UU) {
            return UU instanceof DOMException && "AbortError" === UU.name
          }(RU)) return null;
        throw RU
      }
    }

    function eU(UU) {
      return UU.startsWith(".") || KU.has(UU)
    }

    function WU(UU) {
      if (!UU) return !0;
      const RU = UU.split("/");
      for (const gU of RU)
        if ("" === gU || "." === gU || ".." === gU) return !1;
      return !0
    }
    async function fU(UU, RU, gU) {
      for await (const [EU, PU] of UU.entries()) {
        if ("directory" === PU.kind) {
          if (eU(EU)) continue;
          const UU = RU ? `${RU}/${EU}` : EU;
          if (!WU(UU)) continue;
          await fU(PU, UU, gU);
          continue
        }
        const UU = RU ? `${RU}/${EU}` : EU;
        if (!(0, tU.l)(UU) && !(0, pU.e)(UU)) continue;
        const TU = await PU.getFile();
        gU[UU] = (0, pU.e)(UU) ? await aU(TU) : await TU.text()
      }
    }
    async function xU(UU) {
      const RU = {};
      return await fU(UU, "", RU), RU
    }

    function mU(UU) {
      return !(!UU || UU !== UU.trim() || UU.startsWith("/") || UU.includes("\\") || UU.includes("\0")) && WU(UU)
    }
    async function IU(UU, RU, gU) {
      const tU = RU.split("/"),
        pU = tU[tU.length - 1];
      let EU = UU;
      for (let PU = 0; PU < tU.length - 1; PU++) EU = await EU.getDirectoryHandle(tU[PU], {
        create: gU
      });
      return {
        dir: EU,
        fileName: pU
      }
    }
    async function JU(UU, RU, gU) {
      if (!mU(RU)) throw new Error(`Refusing to write unsafe path: ${RU}`);
      const {
        dir: tU,
        fileName: pU
      } = await IU(UU, RU, !0), EU = await tU.getFileHandle(pU, {
        create: !0
      }), PU = await EU.createWritable();
      await PU.write(gU), await PU.close()
    }
    async function wU(UU, RU, gU) {
      const tU = await async function(UU, RU) {
        if (!mU(RU)) return null;
        try {
          const {
            dir: gU,
            fileName: tU
          } = await IU(UU, RU, !1), pU = await gU.getFileHandle(tU), EU = await pU.getFile();
          return await EU.text()
        } catch (gU) {
          if (gU instanceof DOMException && ("NotFoundError" === gU.name || "NotAllowedError" === gU.name)) return null;
          throw gU
        }
      }(UU, RU);
      tU !== gU && await JU(UU, RU, gU)
    }
    async function nU(UU, RU, gU) {
      if (!(0, tU.l)(RU) && !(0, pU.e)(RU)) throw new Error(`Refusing to write non-allowlisted path: ${RU}`);
      if ((0, pU.e)(RU)) {
        if (await YU(UU, RU) === TU) throw new Error(`Move the binary schematic ${RU} outside the linked folder before syncing its placeholder`)
      }
      await JU(UU, RU, gU)
    }
    async function bU(UU, RU) {
      if (!mU(RU)) throw new Error(`Refusing to remove unsafe path: ${RU}`);
      try {
        const {
          dir: gU,
          fileName: tU
        } = await IU(UU, RU, !1);
        await gU.removeEntry(tU)
      } catch (gU) {
        if (gU instanceof DOMException && ("NotFoundError" === gU.name || "NotAllowedError" === gU.name)) return;
        throw gU
      }
    }
    async function oU(UU, RU) {
      if (!mU(RU)) return null;
      try {
        const gU = RU.split("/");
        let tU = UU;
        for (const UU of gU) tU = await tU.getDirectoryHandle(UU);
        return tU
      } catch (gU) {
        if (gU instanceof DOMException && ("NotFoundError" === gU.name || "NotAllowedError" === gU.name)) return null;
        throw gU
      }
    }
    async function ZU(UU, RU) {
      if ((0, tU.l)(RU) || (0, pU.e)(RU)) {
        if ((0, pU.e)(RU)) {
          if (await YU(UU, RU) === TU) throw new Error(`Refusing to remove a binary schematic: ${RU}`)
        }
        await bU(UU, RU)
      }
    }
    async function aU(UU) {
      if (UU.size > 64) return TU;
      const RU = await UU.text();
      return Array.from(RU).some((UU => {
        const RU = UU.charCodeAt(0);
        return RU < 9 || RU > 13 && RU < 32 || 65533 === RU
      })) ? TU : RU
    }
    async function YU(UU, RU) {
      try {
        const {
          dir: gU,
          fileName: tU
        } = await IU(UU, RU, !1);
        return await aU(await (await gU.getFileHandle(tU)).getFile())
      } catch (gU) {
        if (gU instanceof DOMException && "NotFoundError" === gU.name) return null;
        throw gU
      }
    }
    async function BU(UU, RU) {
      const gU = await xU(UU);
      for (const tU of Object.keys(gU)) tU in RU || (0, pU.e)(tU) || await ZU(UU, tU);
      for (const [EU, PU] of Object.entries(RU))((0, tU.l)(EU) || (0, pU.e)(EU)) && await nU(UU, EU, PU)
    }

    function VU(UU, RU) {
      var gU, tU;
      let pU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const EU = null !== (gU = pU.debounceMs) && void 0 !== gU ? gU : 300,
        PU = null !== (tU = pU.pollMs) && void 0 !== tU ? tU : 1e3;
      let TU = !1,
        qU = null,
        KU = null,
        cU = null;
      const GU = () => {
          TU || (qU && clearTimeout(qU), qU = setTimeout((() => {
            qU = null, jU()
          }), EU))
        },
        jU = async () => {
          if (!TU) try {
            if (!await hU(UU, "readwrite")) return;
            const gU = await xU(UU);
            TU || RU(gU)
          } catch (gU) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", gU)
          }
        };
      jU();
      const uU = window.FileSystemObserver;
      if (uU) try {
        cU = new uU((() => {
          GU()
        })), cU.observe(UU, {
          recursive: !0
        })
      } catch (CU) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", CU), cU = null
      }
      return cU || (KU = setInterval((() => {
        GU()
      }), PU)), () => {
        TU = !0, qU && clearTimeout(qU), KU && clearInterval(KU), cU && cU.disconnect()
      }
    }
  },
  4487: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => QU,
      e: () => eU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(56),
      PU = gU(1181),
      TU = gU(4495),
      qU = gU(1777),
      KU = gU(2254),
      cU = gU(4501),
      GU = gU(1090);
    const jU = new WeakMap;
    let uU = 0;

    function CU(UU) {
      let RU = jU.get(UU);
      return void 0 === RU && (RU = uU++, jU.set(UU, RU)), RU
    }

    function hU(UU) {
      let {
        piece: RU
      } = UU;
      return "space" === RU.kind ? (0, GU.jsx)(GU.Fragment, {
        children: RU.text
      }) : (0, GU.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${RU.delayMs}ms`
        },
        children: (0, GU.jsx)(TU.c, {
          text: "icon" === RU.kind ? `[[${RU.icon}]]` : RU.text
        })
      })
    }

    function QU(UU) {
      let {
        display: RU
      } = UU;
      const {
        selectedLanguage: gU
      } = (0, PU.B)(), tU = (0, EU.useMemo)((() => (0, cU.b)((0, cU.c)(RU).plan.pieces)), [RU, gU.code]);
      return (0, GU.jsxs)("div", {
        className: pU()("Dialogue", {
          DialogueAnimateIn: !1 !== RU.animateIn
        }),
        children: [RU.speakerName && (0, GU.jsx)(qU.e, {
          text: RU.speakerName,
          className: "DialogueSpeaker"
        }), (0, GU.jsx)("p", {
          className: "DialogueLine",
          children: tU.map(((UU, RU) => 1 === UU.length && "space" === UU[0].kind ? UU[0].text : (0, GU.jsx)("span", {
            className: "DialogueGlue",
            children: UU.map(((UU, RU) => (0, GU.jsx)(hU, {
              piece: UU
            }, RU)))
          }, RU)))
        })]
      })
    }
    const eU = (0, EU.memo)((function() {
      const UU = (0, KU.g)("dialogue");
      return (0, GU.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: UU && (0, GU.jsx)(QU, {
          display: UU
        }, CU(UU))
      })
    }))
  },
  36266: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => uU,
      g: () => CU
    });
    var tU = gU(56),
      pU = gU(2691),
      EU = gU(1410),
      PU = gU(1834),
      TU = gU(36209),
      qU = gU(581),
      KU = gU(1037),
      cU = gU.n(KU),
      GU = gU(1090);
    const jU = {},
      uU = (0, tU.memo)((function() {
        const UU = (0, pU.b)();
        return (0, EU.e)("damagedByOtherPlayer", (RU => {
          let {
            yg: gU,
            direction: tU
          } = RU;
          const pU = gU || "nonDirectional";
          if (jU[pU]) {
            const RU = jU[pU];
            clearTimeout(RU.timeout), RU.direction = tU, RU.timeout = setTimeout((() => {
              delete jU[pU], UU()
            }), 800)
          } else jU[pU] = {
            direction: tU,
            mV: null,
            timeout: setTimeout((() => {
              delete jU[pU], UU()
            }), 800)
          };
          UU()
        })), (0, PU.d)("kill", (RU => {
          let {
            killer: gU,
            victim: tU
          } = RU;
          const pU = tU.id;
          gU.local && pU && pU in jU && (clearTimeout(jU[pU].timeout), delete jU[pU], UU())
        })), (0, tU.useEffect)((() => {
          const UU = (0, TU.f)("turnDamageIndicators", CU);
          return () => {
            UU();
            for (const UU in jU) clearTimeout(jU[UU].timeout), delete jU[UU]
          }
        }), []), (0, GU.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(jU).map((UU => {
            let [RU, gU] = UU;
            const tU = (0, qU.E)(gU.direction);
            return (0, GU.jsx)("div", {
              ref: UU => {
                jU[RU] && (jU[RU].mV = UU)
              },
              className: cU()("DamageIndicator", {
                DamageIndicatorFullCircle: tU
              })
            }, RU)
          }))
        })
      }));

    function CU(UU) {
      for (const RU in jU) {
        const {
          direction: gU,
          mV: tU
        } = jU[RU];
        if ((0, qU.E)(gU)) continue;
        const pU = gU - UU;
        tU.style.rotate = `${pU}rad`
      }
    }
  },
  36143: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => QU
    });
    var tU = gU(56),
      pU = gU(74),
      EU = gU(1181),
      PU = gU(1037),
      TU = gU.n(PU),
      qU = gU(1637),
      KU = gU(1049),
      cU = gU(1283),
      GU = gU(1444),
      jU = gU(1591),
      uU = gU(1436),
      CU = gU(1090);
    const hU = 14;

    function QU(UU) {
      let {
        className: RU,
        triggerElementRef: gU,
        options: PU
      } = UU;
      const {
        t: QU
      } = (0, EU.B)(), [eU, WU] = (0, tU.useState)(!1), [fU, xU] = (0, tU.useState)({
        x: 0,
        y: 0
      }), mU = (0, tU.useRef)(null);
      (0, tU.useEffect)((() => {
        let UU = null;
        const RU = RU => {
            UU = {
              x: RU.clientX,
              y: RU.clientY
            }
          },
          tU = RU => {
            if (null === UU || !(0, uU.e)(UU, RU)) return;
            UU = null;
            const gU = hU * (0, qU.getRemInPx)();
            xU({
              x: Math.min(RU.clientX, window.innerWidth - gU - 5),
              y: RU.clientY
            }), WU((UU => !UU))
          },
          pU = UU => {
            var RU;
            null !== (RU = mU.current) && void 0 !== RU && RU.contains(UU.relatedTarget) || WU(!1)
          },
          EU = gU.current;
        return EU.addEventListener("pointerdown", RU), EU.addEventListener("pointerup", tU), EU.addEventListener("mouseleave", pU), () => {
          EU.removeEventListener("pointerdown", RU), EU.removeEventListener("pointerup", tU), EU.removeEventListener("mouseleave", pU)
        }
      }), [gU]), (0, tU.useEffect)((() => {
        if (eU) return (0, jU.e)("pointerdown", (UU => {
          !mU.current || mU.current.contains(UU.target) || gU.current.contains(UU.target) || WU(!1)
        }))
      }), [eU, gU]), (0, tU.useLayoutEffect)((() => {
        if (!eU || !mU.current) return;
        const UU = mU.current.getBoundingClientRect().height,
          RU = Math.max(5, window.innerHeight - UU - 5);
        fU.y > RU && xU({
          x: fU.x,
          y: RU
        })
      }), [eU, fU]), (0, cU.q)("popup", mU, (() => {
        WU(!1)
      }), eU);
      const IU = PU.filter((UU => !1 !== UU.show));
      return eU && 0 !== IU.length ? (0, pU.createPortal)((0, CU.jsx)("div", {
        ref: mU,
        className: TU()("FloatingActions", {
          [RU]: RU
        }),
        style: {
          width: `${hU}rem`,
          top: fU.y,
          left: fU.x
        },
        children: IU.map((UU => {
          let {
            icon: RU,
            text: gU,
            onPointerDown: tU,
            analyticsClick: pU
          } = UU;
          return (0, CU.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: UU => {
              void 0 !== pU && (0, GU.reportAnalyticsClick)(pU), tU(UU), WU(!1), UU.stopPropagation()
            },
            children: [(0, CU.jsx)(KU.c, {
              name: RU
            }), (0, CU.jsx)("div", {
              children: QU(gU)
            })]
          }, gU)
        }))
      }), function() {
        var UU;
        return null !== (UU = document.querySelector(".WholeAppWrapperInner")) && void 0 !== UU ? UU : document.body
      }()) : null
    }
  },
  36285: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => hP
    });
    var tU = gU(36187),
      pU = gU(56),
      EU = gU(1922),
      PU = gU(4195),
      TU = gU(4200),
      qU = gU(2254),
      KU = gU(1800),
      cU = gU(1090);

    function GU(UU) {
      let {
        className: RU,
        style: gU,
        vw: tU,
        maxPx: pU,
        children: EU
      } = UU;
      console.assert("number" === typeof tU && "number" === typeof pU, "vw and maxPx passed to Text must be numbers");
      const PU = window.innerWidth * (tU / 100) > pU ? `${pU}px` : `${tU}vw`;
      return (0, cU.jsx)("div", {
        className: RU,
        style: {
          ...gU,
          fontSize: PU
        },
        children: EU
      })
    }
    var jU = gU(36292),
      uU = gU(1412),
      CU = gU(24),
      hU = gU(1821),
      QU = gU(1049);

    function eU(UU) {
      let {
        tasks: RU,
        lastDisplayedTasks: gU
      } = UU;
      return (0, cU.jsx)(cU.Fragment, {
        children: Object.keys(RU).map((UU => (0, cU.jsx)(WU, {
          task: RU[UU],
          lastDisplayedAs: gU[UU]
        }, RU[UU].text)))
      })
    }

    function WU(UU) {
      let {
        task: RU,
        lastDisplayedAs: gU
      } = UU;
      const [tU, EU] = (0, pU.useState)(null !== gU && void 0 !== gU && gU.progress ? gU.progress / RU.goal : 0), [PU, TU] = (0, pU.useState)(!1), [qU, KU] = (0, pU.useState)(RU.claimed || !1);
      return (0, pU.useEffect)((() => {
        EU(RU.progress / RU.goal)
      }), [RU.progress, RU.goal]), qU ? null : (0, cU.jsxs)("div", {
        className: "Task",
        children: [(0, cU.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, cU.jsx)(GU, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: RU.text
          })
        }), RU.progress < RU.goal ? (0, cU.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== tU ? (0, cU.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * tU + "%"
            }
          }) : null, (0, cU.jsx)("div", {
            className: "TaskProgressText",
            children: `${RU.progress}/${RU.goal}`
          })]
        }) : (0, cU.jsx)(uU.j, {
          className: "ClaimRewardButton",
          onClick: () => {
            TU(!0)
          },
          children: (0, cU.jsx)(GU, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), PU ? (0, cU.jsx)(fU, {
          task: RU,
          close: () => {
            RU.claimed = !0, KU(!0), TU(!1)
          }
        }) : null]
      })
    }

    function fU(UU) {
      let {
        task: RU,
        close: gU
      } = UU;
      const [tU, EU] = (0, pU.useState)({}), [PU, TU] = (0, pU.useState)("closed");
      (0, pU.useEffect)((() => {
        let UU;
        return "animStart" === PU && (UU = setTimeout((() => {
          TU("animEnd")
        }), 700)), () => {
          clearTimeout(UU)
        }
      }), [PU]), (0, jU.d)((() => {
        KU.gameBridge.send("completeTask", RU.text)
      }));
      const GU = (0, qU.g)("currencyAmounts");
      return (0, cU.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === PU)
            if (0 === RU.rewards.length) gU(), KU.gameBridge.send("completeTask", RU.text);
            else {
              const UU = {
                ...hU.b.get("currencyAmounts")
              };
              for (const RU in tU) UU[RU] = {
                ...UU[RU],
                amount: UU[RU].amount + tU[RU]
              };
              hU.b.apply({
                currencyAmounts: UU
              }), TU("closed")
            }
          else "closed" === PU && (EU(RU.rewards.pop()), TU("animStart"))
        },
        children: [(0, cU.jsx)("img", {
          className: "Chest",
          alt: "closed" !== PU ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==PU?"open":"closed"}.png`
        }), (0, cU.jsx)("div", {
          className: "Rewards",
          children: "closed" !== PU ? Object.keys(tU).map((UU => {
            const RU = null === GU || void 0 === GU ? void 0 : GU[UU];
            return !RU || RU.hidden ? null : (0, cU.jsxs)("div", {
              className: "Reward",
              children: [(0, cU.jsx)(QU.c, {
                name: RU.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: RU.iconColour
                }
              }), (0, cU.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === PU ? 0 : tU[UU]
              })]
            }, UU)
          })) : null
        }), "animStart" === PU ? (0, cU.jsx)(xU, {}) : null, (0, cU.jsx)("div", {
          className: "ChestsLeft",
          children: RU.rewards.length
        })]
      })
    }

    function xU() {
      const [UU, RU] = (0, pU.useState)(0);
      (0, pU.useEffect)((() => {
        RU(1)
      }), []);
      return (0, cU.jsx)(cU.Fragment, {
        children: Array.from({
          length: 40
        }).map(((RU, gU) => (0, cU.jsx)(QU.c, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * UU * Math.cos(gU / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * UU * Math.sin(gU / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === UU ? 1 : 0
          }
        }, gU)))
      })
    }
    CU.p.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const UU = new Image,
          RU = new Image;
        UU.src = "/textures/miscImages/Treasure Chest open.png", RU.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var mU = gU(2825),
      IU = gU(1112),
      JU = gU(1777),
      wU = gU(1410),
      nU = gU(311),
      bU = gU(1834),
      oU = gU(1326);

    function ZU(UU) {
      var RU, gU;
      let {
        byId: tU,
        localId: pU
      } = UU;
      return null === pU ? null : null !== (RU = null === (gU = tU[pU]) || void 0 === gU ? void 0 : gU.name) && void 0 !== RU ? RU : null
    }

    function aU(UU) {
      let {
        lbStats: RU,
        storedState: gU = {}
      } = UU;
      const {
        userContext: tU
      } = (0, IU.e)(), EU = (0, bU.h)("players", ZU), [PU, TU] = (0, pU.useState)(gU.selectedCat || (null === RU || void 0 === RU ? void 0 : RU[0]) || null), [qU, GU] = (0, pU.useState)(gU.selectedTimeframe || "Today"), [jU, uU] = (0, pU.useState)(null);
      (0, pU.useEffect)((() => {
        null === PU && null !== RU && RU.length > 0 && TU(RU[0])
      }), [RU, PU]);
      const [CU, hU] = (0, pU.useState)(gU.seeingTop || !1), [QU, eU] = (0, pU.useState)(!1), WU = (0, pU.useCallback)((() => {
        null !== PU && null !== qU && (KU.gameBridge.send("requestLeaderboard", {
          category: PU.value,
          timeframe: qU,
          seeTop: CU
        }), xU(!0), VU && rU(null))
      }), [PU, qU, gU, CU]);
      (0, pU.useEffect)((() => {
        WU(), gU.selectedCat = PU, gU.selectedTimeframe = qU, gU.seeingTop = CU
      }), [PU, qU, gU, CU, WU]), (0, pU.useEffect)((() => {
        if ((null === jU || void 0 === jU ? void 0 : jU.length) > 0)
          if (CU) CU && eU(null === aU(jU));
          else {
            for (const UU of jU)
              if (1 === UU.place) return void eU(!1);
            eU(!0)
          }
      }), [jU, CU]), (0, wU.e)("leaderboardResponse", (UU => {
        let {
          category: gU,
          timeframe: tU,
          data: pU
        } = UU;
        for (let EU = 0; EU < RU; EU++)
          if (RU[EU].value === gU) {
            TU(RU[EU]);
            break
          } GU(tU), uU(pU), xU(!1)
      }));
      const [fU, xU] = (0, pU.useState)(!0);

      function aU(UU) {
        const RU = ZU(KU.gameBridge.latest("players"));
        for (let gU = 0; gU < UU.length; gU++)
          if (UU[gU].name === RU) return UU[gU].place;
        return null
      }
      const [YU, BU] = (0, pU.useState)(!1), [VU, rU] = (0, pU.useState)(null);
      (0, pU.useEffect)((() => {
        if (jU && !YU) {
          const UU = aU(jU);
          UU < (gU.lastSeenPlayerPlace || 0) && rU(gU.lastSeenPlayerPlace - UU), BU(!0)
        }
      }), [jU, gU, YU]), (0, pU.useEffect)((() => () => {
        jU && (gU.lastSeenPlayerPlace = aU(jU))
      }), [jU, gU]);
      const XU = (0, pU.useRef)(null),
        [vU, dU] = (0, pU.useState)(void 0);
      return (0, pU.useEffect)((() => {
        var UU, RU;
        vU !== (null === (UU = XU.current) || void 0 === UU ? void 0 : UU.offsetHeight) && dU(null === (RU = XU.current) || void 0 === RU ? void 0 : RU.offsetHeight)
      })), tU.isLoggedIn() ? (0, cU.jsxs)(cU.Fragment, {
        children: [(0, cU.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, cU.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, cU.jsx)(mU.c, {
              options: RU.map((UU => ({
                label: UU.label,
                value: UU.value
              }))),
              value: PU,
              onChange: UU => {
                TU(UU)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, cU.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, cU.jsx)(mU.c, {
              options: nU.Qc.map((UU => ({
                value: UU,
                label: UU,
                className: "LBDropdownMenuItem"
              }))),
              value: qU,
              onChange: UU => {
                GU(UU.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), QU ? (0, cU.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              hU(!CU)
            },
            children: CU ? "See Yourself" : "See Top"
          }) : null]
        }), (0, cU.jsx)("div", {
          className: "LBTableWrapper",
          children: fU ? (0, cU.jsx)("div", {
            className: "LoaderContainer",
            children: (0, cU.jsx)(oU.d, {})
          }) : null === VU ? (0, cU.jsx)(cU.Fragment, {
            children: (0, cU.jsxs)("table", {
              className: "LBTable",
              children: [(0, cU.jsx)("thead", {
                className: "LBTableTHead",
                ref: XU,
                children: (0, cU.jsxs)("tr", {
                  children: [(0, cU.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, cU.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, cU.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: PU.label.toUpperCase()
                  })]
                })
              }), (0, cU.jsx)("tbody", {
                children: jU.map((UU => (0, cU.jsxs)("tr", {
                  className: "LBTableTR " + (UU.name === EU ? "LBTableTRYou" : ""),
                  children: [(0, cU.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${UU.place}`
                  }), (0, cU.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, cU.jsx)(JU.e, {
                      text: [{
                        entityName: UU.name
                      }]
                    })
                  }), (0, cU.jsx)("td", {
                    className: "LBTableTD",
                    children: UU.stat
                  })]
                }, UU.name)))
              })]
            })
          }) : (0, cU.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              rU(null)
            },
            children: (0, cU.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, cU.jsx)("div", {
                className: "TriangleUp"
              }), (0, cU.jsx)("div", {
                className: "LBIncreaseText",
                children: `${VU} Place${VU>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, cU.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, cU.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, cU.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var YU = gU(1106),
      BU = gU(96),
      VU = gU(34),
      rU = gU(3117);
    const XU = (0, pU.memo)((function(UU) {
      let {
        show: RU,
        onClose: gU
      } = UU;
      (0, YU.d)();
      const tU = (0, qU.g)("_tasks"),
        EU = (0, qU.g)("_availableLeaderboards"),
        [KU, GU] = (0, pU.useState)({});
      tU && Object.keys(tU).length > 0 && 0 === Object.keys(KU).length && GU(tU);
      const [jU] = (0, pU.useState)({
        tasks: {},
        leaderboard: {}
      }), uU = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!tU && Object.keys(tU).length > 0,
          content: (0, cU.jsx)(eU, {
            tasks: tU,
            lastDisplayedTasks: KU
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === EU || void 0 === EU ? void 0 : EU.length) > 0,
          content: (0, cU.jsx)(aU, {
            lbStats: EU,
            storedState: jU.leaderboard
          })
        }
      };

      function CU() {
        for (const UU in uU)
          if (uU[UU].getIsDefined()) return UU;
        return null
      }
      const [hU, QU] = (0, pU.useState)(CU());

      function WU() {
        GU({
          ...tU
        }), gU()
      }(0, pU.useEffect)((() => {
        hU || QU(CU())
      }), [CU()]), (0, TU.c)(!0, hU && RU), (0, pU.useEffect)((() => {
        RU && !hU && (console.log("CLOSE"), WU())
      }), [RU, hU]);
      const [fU, xU] = (0, pU.useState)(!1);
      return (0, pU.useEffect)((() => {
        RU && hU && !fU && xU(!0)
      }), [RU, fU, hU]), (0, pU.useEffect)((() => {
        !fU && tU && "tasks" !== hU && QU("tasks")
      }), [fU, tU, hU]), (0, cU.jsx)(cU.Fragment, {
        children: hU ? (0, cU.jsx)(rU.c, {
          className: "RetentionFeaturesWrapper",
          show: RU,
          children: (0, cU.jsxs)(PU.d, {
            close: WU,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, cU.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, cU.jsx)(dU, {}), (0, cU.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, cU.jsx)(vU, {
                  setCategory: QU,
                  menuCategories: uU,
                  selectedCat: hU
                }), (0, cU.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: uU[hU].content
                })]
              })]
            }), (0, cU.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: BU.featureFlags.useDiscord && (0, cU.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, cU.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, cU.jsx)(HU, {
                    tasks: tU
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function vU(UU) {
      let {
        selectedCat: RU,
        setCategory: gU,
        menuCategories: tU
      } = UU;
      return (0, cU.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(tU).map((UU => tU[UU].getIsDefined() ? (0, cU.jsx)("div", {
          className: "MenuHeaderCategory " + (UU === RU ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            gU(UU)
          },
          children: tU[UU].Title
        }, UU) : null))
      })
    }

    function dU() {
      const UU = (0, qU.g)("currencyAmounts");
      return (0, cU.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== UU && void 0 !== UU ? UU : {}).map((RU => {
          const gU = UU[RU];
          return gU.hidden ? null : (0, cU.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, cU.jsx)(QU.c, {
              name: gU.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: gU.iconColour
              }
            }), (0, cU.jsx)("div", {
              className: "UiCurrencyAmount",
              children: gU.amount
            })]
          }, RU)
        }))
      })
    }

    function HU(UU) {
      let {
        tasks: RU
      } = UU;
      return (0, cU.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, cU.jsx)(QU.c, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            VU.k.setItem("DiscordPressed", !0), KU.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in RU && CU.p.yh("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, cU.jsx)(EU.e, {})]
      })
    }
    var SU = gU(21),
      sU = gU(1567),
      yU = gU(36120),
      kU = gU(8893),
      FU = gU(4293),
      iU = gU(165),
      AU = gU(1207),
      zU = gU(1344),
      MU = gU(2440),
      DU = gU(1181),
      LU = gU(1570),
      NU = gU(2218),
      lU = gU(2203),
      OU = gU(1733),
      UR = gU(1884),
      RR = gU(1265),
      gR = gU(1444),
      tR = gU(4248);

    function pR(UU) {
      const RU = {
        lobbyName: UU,
        answer: null,
        response: tR.e.getSocialSettings(UU)
      };
      return RU.response.then((UU => {
        RU.answer = UU
      })), RU
    }
    const ER = new Map;

    function PR(UU) {
      const [RU] = (0, pU.useState)((() => function(UU) {
        var RU;
        const gU = null !== (RU = ER.get(UU)) && void 0 !== RU ? RU : null;
        return null !== gU && void 0 !== gU && gU.answer && "error" in gU.answer ? null : gU
      }(UU))), [gU, tU] = (0, pU.useState)((() => null !== RU && void 0 !== RU && RU.answer && "settings" in RU.answer ? RU.answer.settings : null)), [EU, PU] = (0, pU.useState)(!0), [TU, qU] = (0, pU.useState)(null !== gU), KU = (0, pU.useRef)(gU);
      KU.current = gU;
      const cU = (0, pU.useRef)(0),
        GU = (0, pU.useRef)(0),
        jU = (0, pU.useRef)(!1),
        uU = (0, pU.useRef)(!0),
        CU = (0, pU.useCallback)((async RU => {
          const gU = ++cU.current,
            pU = await (null !== RU && void 0 !== RU ? RU : tR.e.getSocialSettings(UU));
          uU.current && gU === cU.current && (qU(!0), PU(!1), "error" in pU || tU(pU.settings))
        }), [UU]),
        hU = (0, pU.useCallback)((() => {
          PU(!0), CU()
        }), [CU]);
      (0, pU.useEffect)((() => (uU.current = !0, ER.delete(UU), PU(!0), CU(null === RU || void 0 === RU ? void 0 : RU.response), () => {
        uU.current = !1
      })), [CU, UU, RU]);
      const QU = UU => {
        cU.current++, PU(!1), KU.current = UU, tU(UU)
      };
      return {
        settings: gU,
        loading: EU,
        answered: TU,
        retry: hU,
        change: async function(RU, gU) {
          let {
            quiet: tU = !1
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const pU = KU.current;
          if (null === pU) return !1;
          QU(gU(pU)), GU.current > 0 && (jU.current = !0), GU.current++;
          const EU = await tR.e.setSocialSettings(UU, RU);
          GU.current--;
          const PU = !("error" in EU);
          if (!uU.current) return PU;
          if (tU);
          else if ("error" in EU) OU.f.showMessage({
            translationKey: EU.error
          });
          else
            for (const UU of EU.notFound) OU.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: UU
              }
            });
          if (GU.current > 0) return PU;
          const TU = jU.current;
          return jU.current = !1, !TU && "settings" in EU ? QU(EU.settings) : (TU || QU(pU), CU()), PU
        }
      }
    }

    function TR(UU, RU) {
      const gU = RU.toLowerCase();
      for (const tU of UU)
        if (tU.toLowerCase() === gU) return !0;
      return !1
    }

    function qR(UU) {
      if (null === UU) return !0;
      const {
        visibility: RU
      } = UU;
      return "public" === RU || "unlisted" === RU || "whitelist" === RU && UU.canManage
    }

    function KR(UU, RU, gU) {
      if (gU) {
        const gU = RU.filter((RU => !TR(UU.whitelist, RU)));
        return {
          ...UU,
          whitelist: [...UU.whitelist, ...gU]
        }
      }
      return {
        ...UU,
        whitelist: UU.whitelist.filter((UU => !TR(RU, UU)))
      }
    }
    var cR = gU(2462);

    function GR(UU) {
      let {
        worldCode: RU,
        message: gU
      } = UU;
      const {
        t: tU
      } = (0, DU.B)(), {
        isTouchScreen: EU
      } = (0, SU.l)(["isTouchScreen"]), PU = BU.featureFlags.canUseInviteLinks, TU = (0, kU.h)(PU && null === gU), [qU, KU] = (0, cR.h)(), GU = (0, pU.useRef)(null);
      if (null !== gU) return (0, cU.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, cU.jsx)(QU.c, {
          name: "lock"
        }), (0, cU.jsx)("span", {
          children: gU
        })]
      });
      const jU = PU ? TU : RU,
        CU = EU && PU && (0, cR.c)();
      return (0, cU.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!PU && (0, cU.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: tU("worldSocial:worldCode")
        }), (0, cU.jsx)("input", {
          ref: GU,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== jU && void 0 !== jU ? jU : "",
          "aria-label": tU(PU ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: UU => {
            UU.currentTarget.select()
          }
        }), (0, cU.jsxs)(uU.e, {
          className: "WorldSocialCopy",
          disabled: null === jU,
          onClick: () => {
            null !== jU && (0, cR.f)(jU, {
              useShareSheet: CU,
              onOutcome: UU => {
                if ((0, gR.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== UU || PU ? UU : "code"
                  }), "copied" === UU) KU();
                else if ("failed" === UU) {
                  var RU;
                  null === (RU = GU.current) || void 0 === RU || RU.focus(), OU.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, cU.jsx)(QU.c, {
            name: qU ? "check" : CU ? "up-from-bracket" : "copy"
          }), " ", tU(qU ? "general:copied" : CU ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
    var jR = gU(1037),
      uR = gU.n(jR);
    const CR = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      hR = ["unlisted", "public", "whitelist", "private"];

    function QR(UU) {
      let {
        visibility: RU,
        onPick: gU
      } = UU;
      const {
        t: tU
      } = (0, DU.B)(), EU = (0, pU.useRef)([]);
      return (0, cU.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": tU("worldSocial:whoCanJoin"),
        children: hR.map(((UU, pU) => {
          const PU = UU === RU;
          return (0, cU.jsxs)("button", {
            ref: UU => {
              EU.current[pU] = UU
            },
            type: "button",
            className: uR()("WorldSocialTile", {
              WorldSocialTileSelected: PU
            }),
            "aria-pressed": PU,
            tabIndex: PU ? 0 : -1,
            onKeyDown: UU => {
              ((UU, RU) => {
                const gU = "ArrowRight" === UU.key || "ArrowDown" === UU.key ? 1 : "ArrowLeft" === UU.key || "ArrowUp" === UU.key ? -1 : 0;
                var tU;
                0 !== gU && (UU.preventDefault(), null === (tU = EU.current[(RU + gU + hR.length) % hR.length]) || void 0 === tU || tU.focus())
              })(UU, pU)
            },
            onClick: () => {
              gU(UU)
            },
            children: [(0, cU.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, cU.jsx)(QU.c, {
                name: CR[UU]
              })
            }), (0, cU.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, cU.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: tU(`worldSocial:${UU}`)
              }), (0, cU.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: tU(`worldSocial:${UU}Description`)
              })]
            })]
          }, UU)
        }))
      })
    }
    var eR = gU(562),
      WR = gU(2433),
      fR = gU(2374),
      xR = gU(4040);

    function mR(UU, RU) {
      var gU;
      return {
        isError: !1,
        name: UU,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== RU && void 0 !== RU ? RU : {},
        nameColour: null !== (gU = null === RU || void 0 === RU ? void 0 : RU.nameColour) && void 0 !== gU ? gU : eR.b,
        location: {
          status: "offline"
        }
      }
    }

    function IR(UU) {
      let {
        player: RU,
        isFriend: gU = !1,
        status: tU,
        showLocation: pU = void 0 === tU,
        HG: EU,
        onSendFriendRequest: PU,
        actions: TU,
        zIndex: qU
      } = UU;
      const {
        t: KU
      } = (0, DU.B)();
      let GU, jU = tU;
      return null !== EU && void 0 !== EU && EU.on && (jU = (0, cU.jsxs)(cU.Fragment, {
        children: [null !== tU && void 0 !== tU ? tU : (0, cU.jsx)(fR.b, {
          socialPreview: RU
        }), (0, cU.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", KU("worldSocial:canJoin")]
        })]
      })), (TU || EU) && (GU = (0, cU.jsxs)(cU.Fragment, {
        children: [TU, EU && (0, cU.jsx)("label", {
          className: "WorldSocialTick",
          children: (0, cU.jsx)(xR.d, {
            checked: EU.on,
            disabled: !1,
            ariaLabel: KU("worldSocial:letJoin", {
              playerName: RU.name
            }),
            onChange: UU => {
              EU.onChange(UU.target.checked)
            }
          })
        })]
      })), (0, cU.jsx)(WR.c, {
        playerSocialPreview: RU,
        isFriend: gU,
        hideFriendBadge: !0,
        onFriendRemoved: gU ? UU => {
          LU.b.removeFriendFromState(UU)
        } : void 0,
        status: jU,
        showLocation: pU,
        onSendFriendRequest: PU,
        opensProfileCard: !1,
        zIndex: qU,
        children: GU
      })
    }

    function JR(UU) {
      let {
        row: RU,
        HG: gU,
        canInvite: tU,
        invited: pU,
        onInvite: EU,
        zIndex: PU
      } = UU;
      const {
        t: TU
      } = (0, DU.B)(), qU = "online" === RU.place ? uU.e : uU.g;
      return (0, cU.jsx)(IR, {
        player: RU.friend,
        isFriend: !0,
        status: "here" === RU.place ? TU("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        HG: gU,
        zIndex: PU,
        actions: tU && (0, cU.jsx)(qU, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: pU,
          onClick: EU,
          ariaLabel: `${TU("worldSocial:invite")} ${RU.friend.name}`,
          children: TU(pU ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
    var wR = gU(2500);

    function nR(UU) {
      let {
        playersHere: RU,
        exclude: gU,
        Wm: tU
      } = UU;
      const {
        t: EU
      } = (0, DU.B)(), PU = (0, wR.j)(wR.g), [TU, qU] = (0, pU.useState)([]), KU = [], GU = (UU, RU) => {
        const tU = [...gU, ...KU.map((UU => UU.player.name))];
        KU.length < 3 && !TR(tU, UU.name) && KU.push({
          player: UU,
          status: RU
        })
      };
      for (const pU of RU) GU(mR(pU.name, pU.cosmetics, pU.ranks), EU("worldSocial:inThisWorld"));
      if ("loaded" === PU.state.status)
        for (const pU of PU.state.recentPlayers) pU.preview.name && !pU.preview.isError && GU({
          ...pU.preview,
          location: {
            status: "offline"
          }
        }, EU("worldSocial:playedWithYou"));
      const jU = UU => {
        qU((RU => [...RU, UU])), tU(UU).finally((() => {
          qU((RU => RU.filter((RU => RU !== UU))))
        }))
      };
      return (0, cU.jsx)(cU.Fragment, {
        children: KU.map(((UU, RU) => {
          let {
            player: gU,
            status: tU
          } = UU;
          return (0, cU.jsx)(IR, {
            zIndex: KU.length - RU,
            player: gU,
            status: tU,
            onSendFriendRequest: () => {
              jU(gU.name)
            },
            actions: (0, cU.jsx)(zU.g, {
              tooltipInner: (0, cU.jsx)(cU.Fragment, {
                children: EU("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, cU.jsx)(uU.e, {
                className: "FriendRequestButton",
                disabled: TU.includes(gU.name),
                ariaLabel: `${EU("recentPlayers:addFriend")} ${gU.name}`,
                onClick: () => {
                  jU(gU.name)
                },
                children: (0, cU.jsx)(QU.c, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${gU.name}`)
        }))
      })
    }
    var bR = gU(1602);

    function oR(UU) {
      let {
        Wm: RU
      } = UU;
      const {
        t: gU
      } = (0, DU.B)(), tU = (0, pU.useRef)(null), [EU, PU] = (0, pU.useState)(""), [TU, qU] = (0, pU.useState)(!1), KU = () => {
        const UU = EU.trim();
        "" === UU || TU || (qU(!0), RU(UU).then((UU => {
          UU && tU.current && (tU.current.value = "", PU(""))
        })).finally((() => {
          qU(!1)
        })))
      };
      return (0, cU.jsxs)("div", {
        className: "WorldSocialAddFriend",
        onKeyDown: UU => {
          UU.target === tU.current && "Escape" !== UU.key && UU.stopPropagation()
        },
        children: [(0, cU.jsx)(bR.d, {
          className: "WorldSocialAddFriendInput",
          domRef: tU,
          maxLength: 32,
          placeholderText: gU("worldSocial:addFriendPlaceholder"),
          ariaLabel: gU("worldSocial:addFriendPlaceholder"),
          stopPropagation: !1,
          onValueChange: UU => {
            PU(UU)
          },
          onEnter: KU
        }), (0, cU.jsxs)(uU.e, {
          className: "WorldSocialAddFriendButton SmallTextLight",
          disabled: TU || "" === EU.trim(),
          onClick: KU,
          children: [(0, cU.jsx)(QU.c, {
            name: "user-plus"
          }), " ", gU("socialBar:sendRequest")]
        })]
      })
    }
    const ZR = new Map;

    function aR(UU) {
      const RU = ZR.get(UU);
      if (!RU) return [];
      const gU = Date.now();
      for (const [tU, pU] of RU) gU - pU >= iU.m && RU.delete(tU);
      return [...RU.keys()]
    }
    var YR = gU(1217),
      BR = gU(1457),
      VR = gU(4290),
      rR = gU(279),
      XR = gU(4273);
    const vR = ["auto", "auto_existing"];

    function dR(UU) {
      return vR.includes(UU)
    }

    function HR(UU, RU) {
      const gU = (0, YR.rb)(UU);
      return null !== RU && (0, YR.rb)(RU) === gU || (0, XR.d)().some((UU => (0, YR.rb)(UU.name) === gU))
    }
    const SR = new Set;

    function sR(UU) {
      return `worldSocialSeen:${UU}`
    }

    function yR(UU) {
      return !UU || SR.has(UU) || !0 === VU.k.getItem(sR(UU))
    }

    function kR(UU) {
      UU && !SR.has(UU) && (SR.add(UU), VU.k.setItem(sR(UU), !0))
    }

    function FR(UU) {
      let {
        show: RU,
        onClose: gU,
        opener: tU
      } = UU;
      const {
        lobbyName: EU,
        shownLobbyName: TU
      } = (0, bU.k)("connectedGame");
      return (0, pU.useEffect)((() => {
        RU && (0, gR.reportAnalyticsClick)({
          id: "world_social.open",
          value: tU
        })
      }), [RU]), (0, cU.jsx)(PU.d, {
        show: RU && null !== EU,
        close: gU,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== tU,
        children: RU && null !== EU && (0, cU.jsx)(iR, {
          lobbyName: EU,
          worldCode: null !== TU && void 0 !== TU ? TU : EU,
          onClose: gU
        }, EU)
      })
    }

    function iR(UU) {
      var RU;
      let {
        lobbyName: gU,
        worldCode: tU,
        onClose: EU
      } = UU;
      const {
        t: PU
      } = (0, DU.B)(), TU = (0, pU.useRef)(null), {
        settings: qU,
        loading: KU,
        answered: GU,
        change: jU,
        retry: CU
      } = PR(gU), hU = (0, LU.g)(), eU = (0, bU.k)("players"), WU = (0, bU.k)("hiddenPlayerNames"), [fU, xU] = (0, pU.useState)([]), [mU, JU] = (0, pU.useState)([]), [wU, nU] = (0, pU.useState)(!1), ZU = (0, pU.useMemo)((() => {
        var UU, RU;
        const gU = null === eU.localId ? null : null !== (UU = null === (RU = eU.byId[eU.localId]) || void 0 === RU ? void 0 : RU.name) && void 0 !== UU ? UU : null;
        return eU.ids.flatMap((UU => {
          const RU = eU.byId[UU];
          return null !== RU && void 0 !== RU && RU.name && RU.name !== gU ? [{
            name: RU.name,
            cosmetics: RU.cosmetics,
            ranks: RU.ranks
          }] : []
        }))
      }), [eU]), aU = (0, pU.useMemo)((() => function(UU, RU, gU) {
        const tU = [],
          pU = [],
          EU = [];
        for (const PU of UU) !PU.isError && PU.name && ("inGame" === PU.location.status && PU.location.inLobbyName === RU || TR(gU, PU.name) ? pU.push({
          friend: PU,
          place: "here"
        }) : "offline" === PU.location.status ? EU.push({
          friend: PU,
          place: "offline"
        }) : tU.push({
          friend: PU,
          place: "online"
        }));
        return [...tU, ...pU, ...EU]
      }(hU.friends, gU, ZU.map((UU => UU.name)))), [hU.friends, gU, ZU]), YU = BU.featureFlags.canSeeRealPlayerNames ? ZU.filter((UU => null === (0, RR.c)(UU.name, WU))) : [], VU = null !== qU && void 0 !== qU && qU.canManage ? qU : null, rU = null !== VU, XU = null !== (RU = null === qU || void 0 === qU ? void 0 : qU.visibility) && void 0 !== RU ? RU : null, vU = "whitelist" === (null === VU || void 0 === VU ? void 0 : VU.visibility), dU = "private" === XU || "whitelist" === XU && !rU, {
        userContext: HU
      } = (0, IU.e)();
      (0, pU.useEffect)((() => {
        rU && HR(gU, HU.getPersonalWorldLobbyName()) && kR(HU.whamm)
      }), [rU, gU, HU]);
      const SU = dU ? PU("whitelist" === XU ? "socialBar:inviteWorldManagersOnly" : rU ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        sU = null === SU;
      (0, pU.useEffect)((() => dU ? void 0 : OU.f.quietFriendAdded()), [dU]), (0, pU.useEffect)((() => OU.f.quietFriendRequests()), []);
      const kU = (0, pU.useRef)(!1);
      (0, pU.useEffect)((() => {
        const UU = TU.current,
          RU = !kU.current;
        kU.current = !0;
        const gU = null === document.activeElement || document.activeElement === document.body;
        null !== UU && void 0 !== UU && UU.contains(document.activeElement) || !RU && !gU || (0, yU.e)() || null === UU || void 0 === UU || UU.focus({
          preventScroll: !0
        })
      }), [sU]), (0, pU.useEffect)((() => {
        const UU = UU => {
          "Escape" !== UU.key || null !== document.activeElement && document.activeElement !== document.body || EU()
        };
        return document.addEventListener("keydown", UU), () => {
          document.removeEventListener("keydown", UU)
        }
      }), [EU]);
      const tR = null === qU && !GU,
        pR = (KU || hU.loading) && 0 === hU.friends.length,
        ER = hU.friends.flatMap((UU => UU.name ? [UU.name] : [])),
        cR = fU.filter((UU => !TR(ER, UU))),
        jR = aU.length + 3,
        uR = cR.length + jR,
        CR = wU ? hU.requests : hU.requests.slice(0, 1),
        hR = async function(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const gU of function(UU, RU) {
              const gU = [];
              for (let tU = 0; tU < UU.length; tU += RU) gU.push(UU.slice(tU, tU + RU));
              return gU
            }(UU, FU.y)) {
            if (!await jU({
                whitelistAdd: gU
              }, (UU => KR(UU, gU, !0)), {
                quiet: RU
              })) return !1
          }
          return !0
        }, eR = async UU => {
          if (UU === XU) return;
          (0, gR.reportAnalyticsClick)({
            id: "world_social.set_mode",
            value: UU
          });
          const RU = [...aR(gU), ...mU],
            tU = "whitelist" === UU && qU ? function(UU, RU, gU) {
              const tU = [],
                pU = UU.flatMap((UU => "here" === UU.place ? [UU.friend.name] : []));
              for (const EU of [...pU, ...RU]) TR(tU, EU) || TR(gU, EU) || tU.push(EU);
              return tU
            }(aU, RU, qU.whitelist) : [];
          await jU({
            setVisibility: UU
          }, (RU => ({
            ...RU,
            visibility: UU
          }))) && await hR(tU)
        }, WR = UU => {
          if (vU && VU) return {
            on: TR(VU.whitelist, UU),
            onChange: RU => {
              (0, gR.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: RU ? "on" : "off"
              }), jU(RU ? {
                whitelistAdd: [UU]
              } : {
                whitelistRemove: UU
              }, (gU => KR(gU, [UU], RU)))
            }
          }
        }, fR = async UU => {
          (0, gR.reportAnalyticsClick)({
            id: "world_social.invite",
            value: "friend"
          });
          const RU = () => {
            JU((RU => RU.filter((RU => RU !== UU))))
          };
          JU((RU => [...RU, UU]));
          const tU = function(UU, RU) {
            return null === UU || void 0 === UU || !UU.canManage || TR(UU.whitelist, RU) ? "none" : "whitelist" === UU.visibility ? "required" : "quiet"
          }(qU, UU);
          if ("none" !== tU) {
            const gU = hR([UU], "quiet" === tU);
            if ("required" === tU && !await gU) return void RU()
          }
          await (0, NU.i)(UU, "game", {
            announceSent: !1,
            source: "world_social"
          }) ? (! function(UU, RU) {
            var gU;
            const tU = null !== (gU = ZR.get(UU)) && void 0 !== gU ? gU : new Map;
            tU.set(RU, Date.now()), ZR.set(UU, tU)
          }(gU, UU), setTimeout(RU, iU.p)) : RU()
        }, xR = async (UU, RU) => {
          (0, gR.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: RU
          });
          const gU = await (0, lU.i)(UU, "world_social");
          return (0, lU.e)(gU, UU, {
            announceSent: !1
          }), "failed" !== gU.kind && ("sent" === gU.kind && xU((RU => TR(RU, UU) ? RU : [...RU, UU])), vU && await hR([UU]), !0)
        };
      return (0, cU.jsxs)("div", {
        ref: TU,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: UU => {
          UU.target === UU.currentTarget && " " === UU.key && UU.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, cU.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, cU.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: PU("worldSocial:title")
          }), (0, cU.jsx)(uU.h, {
            className: "WorldSocialClose",
            onClick: EU
          })]
        }), tR && (0, cU.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, cU.jsx)(oU.d, {})
        }), !tR && (0, cU.jsxs)(cU.Fragment, {
          children: [(0, cU.jsx)(GR, {
            worldCode: tU,
            message: SU
          }), null === qU && !KU && (0, cU.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: CU,
            children: PU("worldSocial:loadFailed")
          }), rU && null !== XU && (0, cU.jsx)(QR, {
            visibility: XU,
            onPick: UU => {
              eR(UU)
            }
          }), hU.requests.length > 0 && (0, cU.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, cU.jsx)(MU.b, {
              label: (0, cU.jsxs)(cU.Fragment, {
                children: [(0, cU.jsx)(QU.c, {
                  name: UR.f
                }), " ", PU("socialBar:requests")]
              }),
              meta: (0, cU.jsxs)(cU.Fragment, {
                children: [hU.requests.length, hU.requests.length === AU.u && (0, cU.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: PU("socialBar:limitReached")
                }), !wU && hU.requests.length > 1 && (0, cU.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    nU(!0)
                  },
                  children: PU("worldSocial:moreRequests", {
                    count: hU.requests.length - 1
                  })
                })]
              })
            }), (0, cU.jsx)("div", {
              className: "PlayerRows",
              children: CR.map(((UU, RU) => (0, cU.jsx)(IR, {
                zIndex: CR.length - RU,
                player: UU,
                actions: (0, cU.jsxs)(cU.Fragment, {
                  children: [(0, cU.jsx)(zU.g, {
                    tooltipInner: (0, cU.jsx)(cU.Fragment, {
                      children: PU("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, cU.jsx)(uU.e, {
                      className: "FriendRequestButton",
                      ariaLabel: `${PU("general:accept")} ${UU.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, lU.h)(UU.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, cU.jsx)(QU.c, {
                        name: "check"
                      })
                    })
                  }), (0, cU.jsx)(zU.g, {
                    tooltipInner: (0, cU.jsx)(cU.Fragment, {
                      children: PU("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, cU.jsx)(uU.g, {
                      className: "FriendRequestButton",
                      ariaLabel: `${PU("general:decline")} ${UU.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, lU.h)(UU.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, cU.jsx)(QU.c, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${UU.name}`)))
            })]
          }), (0, cU.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, cU.jsx)(MU.b, {
              label: (0, cU.jsxs)(cU.Fragment, {
                children: [(0, cU.jsx)(QU.c, {
                  name: UR.b
                }), " ", PU("socialBar:friends")]
              }),
              meta: hU.loaded && !dU ? hU.friends.length : void 0
            }), (0, cU.jsx)(oR, {
              Wm: UU => xR(UU, "field")
            }), pR && (0, cU.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, cU.jsx)(oU.d, {})
            }), !pR && (0, cU.jsxs)(cU.Fragment, {
              children: [(0, cU.jsxs)("div", {
                className: "PlayerRows",
                children: [cR.map(((UU, RU) => (0, cU.jsx)(IR, {
                  zIndex: uR - RU,
                  player: mR(UU, null),
                  status: PU("worldSocial:requestSent"),
                  HG: WR(UU)
                }, `request:${UU}`))), !dU && aU.map(((UU, RU) => (0, cU.jsx)(JR, {
                  zIndex: jR - RU,
                  row: UU,
                  HG: WR(UU.friend.name),
                  canInvite: qR(qU) && "here" !== UU.place,
                  invited: mU.includes(UU.friend.name),
                  onInvite: () => {
                    fR(UU.friend.name)
                  }
                }, UU.friend.name))), hU.loaded && 0 === hU.friends.length && (0, cU.jsx)(nR, {
                  playersHere: YU,
                  exclude: fU,
                  Wm: UU => xR(UU, "suggestion")
                })]
              }), vU && hU.loaded && 0 === hU.friends.length && 0 === cR.length && (0, cU.jsx)("div", {
                className: "WorldSocialEmpty",
                children: PU("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        })]
      })
    }
    var AR = gU(2281),
      zR = gU(2263);

    function MR(UU) {
      let {
        show: RU,
        onClose: gU,
        option: tU
      } = UU;
      const EU = (0, bU.h)("connectedGame", (UU => (0, AR.b)(UU) ? UU.lobbyName : null));
      return function(UU) {
        const {
          gameEntrySource: RU,
          loadingOverlayVisible: gU
        } = (0, SU.l)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: tU
        } = (0, IU.e)(), EU = (0, bU.k)("localPlayerAlive"), PU = (0, bU.h)("players", (UU => null !== UU.localId && void 0 !== UU.byId[UU.localId])), TU = (0, zR.j)(), qU = (0, pU.useRef)(null), KU = (0, pU.useRef)(null), cU = "worldCreation" === RU, GU = tU.whamm, jU = tU.getPersonalWorldLobbyName();
        (0, pU.useEffect)((() => {
          var RU;
          null !== UU && (null === (RU = KU.current) || void 0 === RU ? void 0 : RU.lobbyName) !== UU && null !== lR(UU, cU, GU, jU) && (KU.current = pR(UU))
        }), [cU, UU, GU, jU]), (0, pU.useEffect)((() => {
          if (null !== UU && (!gU && EU && PU)) return TU.whenShown((() => {
            var RU;
            const gU = qU.current === UU ? null : lR(UU, cU, GU, jU);
            if (null === gU) return;
            const tU = (null === (RU = KU.current) || void 0 === RU ? void 0 : RU.lobbyName) === UU ? KU.current : pR(UU);
            KU.current = null, qU.current = UU,
              function(UU, RU, gU, tU) {
                const {
                  lobbyName: pU
                } = UU, EU = () => {
                  ! function(UU, RU) {
                    if (!tg()) return void RU(!0);
                    const gU = performance.now() + Rg;
                    let tU = 0;
                    const pU = () => {
                      tU = tg() ? 0 : tU + 1, tU >= 2 ? RU(!0) : !gg(UU) || performance.now() > gU ? RU(!1) : setTimeout(pU, Ug)
                    };
                    setTimeout(pU, Ug)
                  }(pU, (EU => {
                    tU();
                    const PU = "auto_existing" === RU && yR(gU);
                    EU && gg(pU) && !LR(pU) && !PU && (OR(UU) ? NR(pU) : (NR(pU), kR(gU), function(UU) {
                      const RU = rR.c.world_social_popup_v1;
                      return (0, rR.l)("world_social_popup_v1"), (0, gR.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${RU}:${(0,VR.b)()}:${UU}`
                      }), (0, BR.flushClientAnalyticsEvents)(), "auto_open" === RU
                    }(RU) && (! function(UU) {
                      ER.set(UU.lobbyName, UU)
                    }(UU), CU.p.yh("toggleMenu", `inviteLink|${RU}`), "inviteLink" !== SU.b.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === RU && !OR(UU)) return void EU();
                UU.response.then((UU => {
                  if (!("error" in UU)) return UU.settings.canManage ? void EU() : (NR(pU), void tU());
                  tU()
                }))
              }(tU, gU, GU, (() => {
                qU.current === UU && (qU.current = null)
              }))
          }))
        }), [TU, cU, gU, UU, EU, PU, GU, jU])
      }(EU), (0, pU.useEffect)((() => {
        RU && null !== EU && NR(EU)
      }), [RU, EU]), null !== EU ? (0, cU.jsx)(FR, {
        show: RU,
        onClose: gU,
        opener: dR(tU) ? tU : "icon"
      }) : (0, cU.jsx)(kU.b, {
        show: RU,
        onClose: gU
      })
    }
    const DR = new Set;

    function LR(UU) {
      return DR.has(UU) || !!VU.l.getItem(`worldSocialShown:${UU}`)
    }

    function NR(UU) {
      DR.add(UU), VU.l.setItem(`worldSocialShown:${UU}`, !0)
    }

    function lR(UU, RU, gU, tU) {
      return LR(UU) ? null : function(UU) {
        let {
          justMade: RU,
          playerId: gU,
          lobbyName: tU,
          personalWorld: pU
        } = UU;
        return RU ? "auto" : !yR(gU) && HR(tU, pU) ? "auto_existing" : null
      }({
        justMade: RU,
        playerId: gU,
        lobbyName: UU,
        personalWorld: tU
      })
    }

    function OR(UU) {
      let {
        answer: RU
      } = UU;
      return null !== RU && "settings" in RU && !RU.settings.canManage
    }
    const Ug = 500,
      Rg = 3e4;

    function gg(UU) {
      return "inGame" === SU.b.get("gameState") && KU.gameBridge.latest("connectedGame").lobbyName === UU
    }

    function tg() {
      return (0, yU.e)() || SU.b.get("loadingOverlayVisible") || (0, sU.q)()
    }
    var pg = gU(36299),
      Eg = gU(2842),
      Pg = gU(1844),
      Tg = gU(2840);

    function qg(UU, RU, gU) {
      return Tg.e.overridesTexture(UU) ? Tg.e.getTexture(UU, RU).url : gU
    }
    var Kg = gU(9759);
    const cg = (UU, RU) => {
        (0, pU.useEffect)((() => {
          setTimeout((() => {
            UU && UU.current && UU.current.focus()
          }), 1)
        }), [RU])
      },
      Gg = (0, pU.memo)((function(UU) {
        let {
          isInputActive: RU,
          onClose: gU,
          onChange: tU,
          textAreaRef: pU,
          fontSize: EU,
          lineHeight: PU,
          currText: TU
        } = UU;
        return (0, cU.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, cU.jsx)("img", {
            src: qg("board_full", Eg.g.BLOCK, Kg),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, cU.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: TU,
            ref: pU,
            style: {
              fontSize: `${EU}rem`,
              lineHeight: `${PU}rem`
            },
            onKeyDown: UU => {
              var RU;
              "Escape" !== UU.key && (UU.stopPropagation(), "Tab" === UU.key && function(UU) {
                UU.preventDefault();
                const RU = UU.target,
                  {
                    value: gU
                  } = RU;
                let tU = RU.selectionStart,
                  pU = RU.selectionEnd,
                  EU = gU.slice(tU, pU);
                if (!EU.includes("\n") && !UU.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; tU > 0 && "\n" !== gU[tU - 1];) tU--;
                const PU = "\n" === gU[pU - 1];
                PU && pU--;
                EU = gU.slice(tU, pU);
                const TU = EU.split("\n").map((RU => UU.shiftKey ? RU.replace(/^\t/, "") : "\t" + RU)).join("\n");
                if (UU.shiftKey && gU.slice(tU, pU) === TU) return;
                let {
                  selectionStart: qU
                } = RU;
                RU.setSelectionRange(tU, pU), qU > tU && (!UU.shiftKey || "\t" === EU[0]) && (qU += UU.shiftKey ? -1 : 1);
                pU = tU + TU.length + (PU ? 1 : 0), document.execCommand("insertText", !1, TU), RU.setSelectionRange(qU, pU)
              }(UU), /^F\d+$/i.test(UU.code) && null !== (RU = Pg.r.OpenCodeEditor) && void 0 !== RU && RU.includes(UU.code) && gU())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: tU
          })]
        })
      }));

    function jg(UU) {
      return 1.3 * UU
    }
    var ug = gU(1609);
    const Cg = (0, pU.memo)((function(UU) {
        let {
          show: RU,
          onOpen: gU,
          onClose: tU
        } = UU;
        const [EU, TU] = (0, pU.useState)(null), [qU, GU] = (0, pU.useState)(""), [jU, CU] = (0, pU.useState)(0), [hU, QU] = (0, pU.useState)(null), [eU, WU] = (0, pU.useState)({
          text: "",
          textSize: 0
        }), fU = (UU, RU) => hU ? (0, pg.l)(UU, RU, hU.width, hU.height) : (0, pg.f)(UU, RU), xU = UU => {
          GU(fU(qU, UU)), CU(UU), VU.k.setItem("lastBoardTextSize", UU)
        }, mU = () => {
          tU(), hU && qU === eU.text && jU === eU.textSize || KU.gameBridge.send("writeOnBoard", {
            pos: EU,
            text: qU,
            textSize: jU
          })
        };
        (0, bU.d)("boardEditRequested", (UU => {
          var pU, EU;
          if (!BU.featureFlags.canSeePlayerWrittenText) return;
          if (null === UU) return TU(null), void(RU && tU());
          const {
            pos: PU,
            noticeboardSpan: qU,
            text: KU
          } = UU;
          TU(PU), QU(qU), GU(KU);
          const cU = null !== (pU = null !== (EU = UU.textSize) && void 0 !== EU ? EU : VU.k.getItem("lastBoardTextSize")) && void 0 !== pU ? pU : 0;
          CU(cU), WU({
            text: KU,
            textSize: cU
          }), VU.k.setItem("lastBoardTextSize", cU), gU()
        }));
        const IU = (0, pU.useRef)(null);
        cg(IU, RU), (0, ug.y)(IU, {
          kind: "sign",
          submit: mU
        });
        const JU = function(UU, RU) {
            const gU = pg.e[UU];
            if (!RU) return gU.uiFontSize;
            const {
              numLines: tU,
              charsPerLine: pU
            } = (0, pg.u)(RU.width, RU.height, UU);
            return gU.uiFontSize * Math.min(gU.charsPerLine / pU, gU.numLines / tU)
          }(jU, hU),
          wU = jg(JU);
        return (0, cU.jsxs)(PU.d, {
          className: "WriteOnBoardBg",
          close: mU,
          escDoesExit: !0,
          show: RU,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, cU.jsx)(Gg, {
            isInputActive: () => RU,
            onClose: mU,
            onChange: UU => {
              GU(fU(UU.target.value, jU))
            },
            textAreaRef: IU,
            fontSize: JU,
            lineHeight: wU,
            currText: qU
          }), (0, cU.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, cU.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, cU.jsx)(uU.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                xU(0)
              },
              disabled: 0 === jU,
              children: "Small"
            }), (0, cU.jsx)(uU.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                xU(1)
              },
              disabled: 1 === jU,
              children: "Medium"
            }), (0, cU.jsx)(uU.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                xU(2)
              },
              disabled: 2 === jU,
              children: "Large"
            })]
          })]
        })
      })),
      hg = (0, pU.memo)((function(UU) {
        let {
          show: RU,
          onOpen: gU,
          onClose: tU
        } = UU;
        const [EU, TU] = (0, pU.useState)(""), qU = () => {
          tU(), KU.gameBridge.send("writeNameTag", EU)
        };
        (0, wU.e)("EditNameTag", (UU => {
          BU.featureFlags.canSeePlayerWrittenText && null !== UU && (TU(UU), gU())
        }));
        const GU = (0, pU.useRef)(null);
        cg(GU, RU), (0, ug.y)(GU, {
          kind: "nameTag",
          submit: qU
        });
        const jU = pg.F.nameTag.uiFontSize,
          CU = jg(jU);
        return (0, cU.jsxs)(PU.d, {
          className: "WriteOnBoardBg",
          close: qU,
          escDoesExit: !0,
          show: RU,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, cU.jsx)("div", {
            className: "NameTagTrim",
            children: (0, cU.jsx)(Gg, {
              isInputActive: () => RU,
              onClose: qU,
              onChange: UU => {
                const RU = UU.target.value.replaceAll("\n", "");
                TU((0, pg.p)(RU, "nameTag"))
              },
              textAreaRef: GU,
              fontSize: jU,
              lineHeight: CU,
              currText: EU
            })
          }), (0, cU.jsx)(uU.e, {
            onClick: qU,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var Qg = gU(18010);
    const eg = (0, pU.memo)((function(UU) {
      let {
        show: RU,
        onOpen: gU,
        onClose: tU
      } = UU;
      const [EU, TU] = (0, pU.useState)(""), [qU, GU] = (0, pU.useState)(0), [jU, CU] = (0, pU.useState)(!1), [hU, QU] = (0, pU.useState)(["", "", "", "", "", "", "", "", "", ""]), [eU, WU] = (0, pU.useState)("Title"), [fU, xU] = (0, pU.useState)(!0), [mU, IU] = (0, pU.useState)(!1);
      (0, wU.e)("EditBook", (UU => {
        let {
          pages: RU,
          title: tU,
          isPublished: pU
        } = UU;
        var EU;
        BU.featureFlags.canSeePlayerWrittenText && (null !== RU ? (QU(RU), TU(null !== (EU = RU[0]) && void 0 !== EU ? EU : ""), WU(tU), GU(0), CU(!1), xU(!pU), IU(!1), gU()) : QU(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const JU = (0, pU.useRef)(null),
        nU = (0, pU.useRef)(null);
      cg(JU, RU), (0, ug.y)(JU, {
        kind: "book"
      }), (0, ug.y)(nU, {
        kind: "hT"
      });
      const bU = pg.F.book.uiFontSize,
        oU = jg(bU),
        ZU = () => {
          (fU || mU) && KU.gameBridge.send("writeBook", {
            pages: [...hU],
            title: eU,
            published: !fU && mU
          })
        },
        aU = UU => {
          jU && (hU[qU] = EU, CU(!1)), TU(hU[UU]), GU(UU)
        };
      return (0, cU.jsxs)(PU.d, {
        className: "WriteOnBoardBg",
        close: () => {
          tU(), hU[qU] = EU, ZU()
        },
        escDoesExit: !0,
        show: RU,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, cU.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, cU.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: eU,
            ref: nU,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${oU}rem`
            },
            onKeyDown: UU => {
              fU && UU.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: UU => {
              let RU = UU.target.value;
              RU = (0, pg.p)(RU, "hT"), WU(RU)
            },
            readOnly: !fU
          }), (0, cU.jsx)("img", {
            src: qg("book_page", Eg.g.ITEM, Qg),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, cU.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, cU.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: EU,
              ref: JU,
              style: {
                fontSize: `${bU}rem`,
                lineHeight: `${oU}rem`
              },
              onKeyDown: UU => {
                fU && UU.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: UU => {
                const RU = UU.target.value;
                TU((0, pg.p)(RU, "book")), CU(!0)
              },
              readOnly: !fU
            })
          })]
        }), (0, cU.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, cU.jsx)(uU.e, {
            disabled: 0 === qU,
            onClick: () => {
              aU(qU - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, cU.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, cU.jsx)(uU.e, {
            disabled: 9 === qU,
            onClick: () => {
              aU(qU + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, cU.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, cU.jsx)(uU.e, {
            onClick: () => {
              xU(!fU), IU(!0)
            },
            className: "BookNavButton",
            children: fU ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var Wg = gU(36197),
      fg = gU(8316),
      xg = gU(1362),
      mg = gU(1790);

    function Ig(UU) {
      let {
        show: RU,
        buttons: gU
      } = UU;
      const {
        t: tU
      } = (0, DU.B)(), EU = (0, pU.useRef)(null);
      return (0, pU.useEffect)((() => {
        var UU, gU;
        const tU = RU ? (0, Wg.x)() : null;
        if (!tU || !(0, xg.g)()) return;
        const pU = (0, Wg.j)().findIndex((UU => UU.id === tU));
        (0, fg.q)(null !== (UU = null === (gU = EU.current) || void 0 === gU ? void 0 : gU.children[pU]) && void 0 !== UU ? UU : null)
      }), [RU]), 0 === gU.length ? null : (0, cU.jsx)("div", {
        ref: EU,
        className: "ClientGameInventoryButtons",
        onPointerDown: UU => {
          UU.stopPropagation()
        },
        onPointerUp: UU => {
          UU.stopPropagation()
        },
        children: gU.map((UU => {
          const RU = tU(UU.labelKey);
          return (0, cU.jsxs)(uU.j, {
            className: UU.className,
            disabled: UU.disabled,
            onClick: () => {
              (0, Wg.r)(UU)
            },
            ariaLabel: UU.iconOnly ? RU : void 0,
            title: UU.iconOnly ? RU : void 0,
            children: [UU.icon && (0, cU.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === UU.icon.kind && (0, cU.jsx)(mg.c, {
                itemName: UU.icon.name,
                amount: 0
              }), "image" === UU.icon.kind && (0, cU.jsx)("img", {
                src: UU.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === UU.icon.kind && (0, cU.jsx)(QU.c, {
                name: UU.icon.name
              })]
            }), !UU.iconOnly && RU]
          }, UU.id)
        }))
      })
    }
    var Jg = gU(36307),
      wg = gU(2525),
      ng = gU(9001),
      bg = gU(36116),
      og = gU(36107);
    let Zg = null;
    window.setShowInventoryAdsOverride = UU => {
      Zg = UU
    };
    const ag = 24e4;
    var Yg = gU(1796);

    function Bg(UU) {
      var RU;
      let {
        draggedInfo: {
          name: gU,
          attributes: tU,
          amount: pU
        },
        toAddRef: EU
      } = UU;
      return (0, cU.jsx)("div", {
        className: "DraggedInvenItem",
        ref: EU,
        children: (0, cU.jsx)(mg.c, {
          itemName: gU,
          amount: pU,
          enchantmentTier: null === tU || void 0 === tU || null === (RU = tU.customAttributes) || void 0 === RU ? void 0 : RU.enchantmentTier,
          bar: (0, Yg.h)(tU)
        })
      })
    }

    function Vg(UU) {
      let {
        className: RU = "",
        displayInfo: gU,
        domRef: tU
      } = UU;
      return (0, cU.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${RU}`,
        ref: tU,
        children: [(0, cU.jsx)(JU.e, {
          text: (0, nU.xb)(gU.name, {
            fontStyle: gU.fontStyle
          })
        }), (0, cU.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, cU.jsx)(JU.e, {
            text: gU.desc
          })
        })]
      })
    }

    function rg(UU) {
      let {
        info: RU,
        draggedInfo: gU
      } = UU;
      const tU = (0, pU.useRef)(null);
      return (0, pU.useLayoutEffect)((() => {
        const UU = tU.current,
          {
            left: gU,
            top: pU
          } = function(UU, RU, gU, tU) {
            const pU = tU.left * gU.width / 100 + 4,
              EU = gU.width - tU.right * gU.width / 100 - 4 - RU.width,
              PU = tU.top * gU.height / 100 + 4,
              TU = gU.height - 4 - RU.height;
            return {
              left: Math.max(pU, Math.min(UU.x - RU.width / 2, EU)),
              top: Math.max(PU, Math.min(UU.y - 48 - RU.height, TU))
            }
          }({
            x: RU.initTouchX,
            y: RU.initTouchY
          }, {
            width: UU.offsetWidth,
            height: UU.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, SU.b.get("notchSize"));
        UU.style.left = `${gU}px`, UU.style.top = `${pU}px`
      }), [RU]), (0, cU.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: tU,
        children: [(0, cU.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: gU.amount / RU.maxAmount * 100 + "%"
          }
        }), (0, cU.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [gU.amount, "/", RU.maxAmount]
        })]
      })
    }
    var Xg = gU(189);
    const vg = (0, pU.memo)((function(UU) {
      let {
        show: RU,
        onOpen: gU,
        onClose: tU
      } = UU;
      const EU = (0, pU.useRef)({
          pos: null
        }),
        [TU, qU] = (0, pU.useState)([0, 0, 0, 0]),
        {
          userContext: GU
        } = (0, IU.e)();
      (0, bU.d)("ironChestOpenRequested", (UU => {
        let {
          pos: RU,
          ownerDbId: tU,
          cachedPasskey: pU
        } = UU;
        if (EU.current.pos = RU, tU !== GU.whamm) return null !== pU ? (qU(pU), void jU(pU)) : void gU();
        jU(TU)
      })), (0, bU.d)("localEffectUpdated", (UU => {
        "Thief" === UU && tU()
      }));
      const jU = UU => {
        const {
          pos: RU
        } = EU.current;
        KU.gameBridge.send("openIronChest", {
          pos: RU,
          CK: UU
        })
      };
      return (0, cU.jsx)(PU.d, {
        className: "IronChestPasskeyInputScreenOuter",
        close: tU,
        escDoesExit: !0,
        show: RU,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, cU.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, cU.jsx)(dg, {
            CK: TU,
            onPasskeyUpdated: qU,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              jU(TU)
            }
          })
        })
      })
    }));

    function dg(UU) {
      let {
        className: RU = "",
        CK: gU,
        onPasskeyUpdated: tU,
        confirmText: pU,
        onConfirm: EU
      } = UU;
      const {
        t: PU
      } = (0, DU.B)();
      return (0, cU.jsxs)("div", {
        className: `${RU} IronChestPasskeyInput`,
        children: [(0, cU.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: PU("ironChest:passkeyInputTitle")
        }), (0, cU.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(Xg.e.ironChestPasskeyLength).fill(0).map(((UU, RU) => (0, cU.jsx)(Hg, {
            digit: gU[RU],
            onPasskeyDigitUpdated: UU => {
              const pU = [...gU];
              pU[RU] = UU, tU(pU)
            }
          }, RU)))
        }), (0, cU.jsx)(uU.j, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: EU,
          children: PU(pU)
        })]
      })
    }

    function Hg(UU) {
      let {
        digit: RU,
        onPasskeyDigitUpdated: gU
      } = UU;
      return (0, cU.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, cU.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, cU.jsx)(uU.j, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              gU(nU.c.mod(RU + 1, 10))
            },
            children: (0, cU.jsx)(QU.c, {
              name: "angle-up"
            })
          }), (0, cU.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: RU
          }), (0, cU.jsx)(uU.j, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              gU(nU.c.mod(RU - 1, 10))
            },
            children: (0, cU.jsx)(QU.c, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var Sg = gU(8994),
      sg = gU(36337),
      yg = gU(36101);

    function kg(UU) {
      let {
        specialItemInfo: RU,
        setHovered: gU,
        pointerDown: tU,
        pointerUp: EU,
        enchantingTablePosition: PU,
        enchantingTableBlockName: TU
      } = UU;
      const {
        t: GU
      } = (0, DU.B)(), [jU, CU] = (0, pU.useState)(null), [hU, QU] = (0, pU.useState)(null), eU = (0, qU.g)("auraPerLevel"), WU = Math.floor((0, bU.k)("aura") / eU);
      (0, pU.useEffect)((() => {
        if (!RU) return void CU(null);
        let UU = !0;
        return KU.gameBridge.query("enchantingOffer", {
          slot: RU.idx,
          name: RU.name,
          blockName: TU
        }).then((gU => {
          var tU, pU;
          let {
            perks: EU,
            options: PU
          } = gU;
          if (!UU) return;
          const TU = {
            isEnchantable: EU.length > 0,
            possibleEnchantments: EU,
            options: PU.map((UU => {
              let {
                level: RU,
                odds: gU
              } = UU;
              return {
                level: RU,
                possibilities: Object.fromEntries(gU.map(((UU, RU) => [`Tier ${RU+1}`, UU])))
              }
            })),
            isAlreadyEnchanted: EU.length > 0 && void 0 !== (null === (tU = RU.attributes) || void 0 === tU || null === (pU = tU.customAttributes) || void 0 === pU ? void 0 : pU.enchantmentTier)
          };
          CU(TU), (UU => {
            const RU = UU.options.map((UU => Object.entries(UU.possibilities).map((UU => {
              let [RU, gU] = UU;
              return {
                str: `${RU}: ${gU>0?gU<.01?gU.toPrecision(1):gU.toFixed(2):0}%\n`,
                style: {
                  color: nU.sb[RU]
                }
              }
            }))));
            QU(RU)
          })(TU)
        })), () => {
          UU = !1
        }
      }), [RU, PU, TU]);
      const fU = [];
      for (let pU = 0; pU < sg.e; pU++) {
        const UU = null === jU || void 0 === jU ? void 0 : jU.options[pU],
          tU = !UU || UU.level > WU;
        fU.push((0, cU.jsx)(uU.e, {
          className: "EnchantmentButton",
          onPointerEnter: UU ? UU => null === gU || void 0 === gU ? void 0 : gU()(!0, {
            name: "",
            desc: hU[pU]
          }, UU) : void 0,
          onPointerLeave: UU ? () => null === gU || void 0 === gU ? void 0 : gU()(!1) : void 0,
          onClick: tU ? void 0 : () => {
            KU.gameBridge.send("enchantItem", {
              slot: RU.idx,
              level: UU.level,
              tablePos: PU
            }), CU(null)
          },
          disabled: tU,
          children: UU ? (0, cU.jsxs)(cU.Fragment, {
            children: [(0, cU.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, cU.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [GU("enchantments:cost"), ": "]
              }), " ", GU("enchantments:levels", {
                level: UU.level
              })]
            }), (0, cU.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, cU.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, cU.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: GU("enchantments:tier")
                }), Object.entries(UU.possibilities).map((UU => {
                  let [RU, gU] = UU;
                  return 0 === gU ? null : (0, cU.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: nU.sb[RU]
                    },
                    children: RU
                  }, RU)
                }))]
              }), (0, cU.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, cU.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: GU("enchantments:odds")
                }), Object.entries(UU.possibilities).map((UU => {
                  let [RU, gU] = UU;
                  return 0 === gU ? null : (0, cU.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: nU.sb[RU]
                    },
                    children: [gU > 0 && gU < .1 ? "<0.1" : gU.toFixed(0 < gU && gU < .95 ? 1 : 0), "%"]
                  }, RU)
                }))]
              })]
            })]
          }) : !1 === (null === jU || void 0 === jU ? void 0 : jU.isEnchantable) ? (0, cU.jsx)("h1", {
            className: "EnchantmentLevels",
            children: GU("enchantments:notEnchantable")
          }) : (0, cU.jsx)("h1", {
            className: "EnchantmentLevels",
            children: GU("enchantments:enterItem")
          })
        }, pU))
      }
      return (0, cU.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, cU.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: TU
        }), (0, cU.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, cU.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, cU.jsx)(yg.d, {
              idx: og.d,
              setHovered: UU => {
                null === gU || void 0 === gU || gU(og.d)(UU)
              },
              pointerDown: tU,
              pointerUp: EU,
              draggedInfo: null,
              specialItemInfo: RU,
              variation: "Enchanting Table"
            }), jU && jU.possibleEnchantments.length > 0 && (0, cU.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, cU.jsx)("h2", {
                children: "Possible Perks:"
              }), jU.possibleEnchantments.map((UU => (0, cU.jsxs)(pU.Fragment, {
                children: [(0, cU.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, cU.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, cU.jsx)(mg.c, {
                      itemName: `${UU} Enchantment`,
                      amount: 1
                    })
                  }), (0, cU.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: UU
                  })]
                }), (0, cU.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: GU((0, Sg.m)(UU).translationKey)
                })]
              }, UU)))]
            })]
          }), (0, cU.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [jU && jU.isAlreadyEnchanted && (0, cU.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: GU("enchantments:alreadyEnchanted")
            }), fU]
          })]
        })]
      })
    }
    var Fg = gU(36345);

    function ig(UU) {
      var RU;
      let {
        specialItemInfo: gU,
        setSpecialItemInfo: tU,
        setHovered: EU,
        pointerDown: PU,
        pointerUp: TU
      } = UU;
      const {
        t: qU
      } = (0, DU.B)(), GU = (0, bU.h)("inventory", (UU => UU.freeSlots)), [jU, CU] = (0, pU.useState)(null);
      (0, pU.useEffect)((() => {
        if (gU) {
          const UU = (0, Fg.c)(gU.name, gU.amount);
          CU({
            salvageable: !!UU,
            produces: UU
          })
        } else CU(null)
      }), [gU, null === gU || void 0 === gU ? void 0 : gU.name, null === gU || void 0 === gU ? void 0 : gU.amount]);
      const hU = !!gU && !(null === jU || void 0 === jU || !jU.salvageable) && !(null !== (RU = jU.produces) && void 0 !== RU && RU.some((UU => {
        let {
          amt: RU
        } = UU;
        return RU < 1
      })));
      return (0, cU.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, cU.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: qU("item:salvagingTable")
        }), (0, cU.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, cU.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, cU.jsx)(yg.d, {
              idx: og.d,
              setHovered: UU => {
                null === EU || void 0 === EU || EU(og.d)(UU)
              },
              pointerDown: PU,
              pointerUp: TU,
              draggedInfo: null,
              specialItemInfo: gU,
              variation: "Salvaging Table"
            })
          }), (0, cU.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, cU.jsx)(uU.e, {
              className: "SalvageButton",
              onClick: hU ? () => {
                const {
                  idx: UU,
                  name: RU,
                  amount: pU
                } = gU;
                KU.gameBridge.send("salvageItem", {
                  slot: UU,
                  name: RU,
                  amount: pU
                }) && (CU(null), tU(null))
              } : void 0,
              disabled: !hU,
              children: jU ? jU.salvageable ? jU.produces.some((UU => {
                let {
                  amt: RU
                } = UU;
                return RU < 1
              })) ? (0, cU.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, cU.jsx)("div", {
                  className: "SalvageText Error",
                  children: qU("salvagingTable:notEnoughResources")
                })
              }) : GU < jU.produces.length ? (0, cU.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, cU.jsx)("div", {
                  className: "SalvageText Error",
                  children: qU("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, cU.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, cU.jsx)("div", {
                  className: "SalvageText",
                  children: qU("salvagingTable:salvage")
                }), (0, cU.jsx)("div", {
                  className: "SalvageIcons",
                  children: jU.produces.map(((UU, RU) => {
                    let {
                      item: gU,
                      amt: tU
                    } = UU;
                    return (0, cU.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, cU.jsx)(mg.c, {
                        itemName: gU,
                        amount: Math.floor(tU)
                      })
                    }, RU)
                  }))
                })]
              }) : (0, cU.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, cU.jsx)("div", {
                  className: "SalvageText Error",
                  children: qU("salvagingTable:unsalvageable")
                })
              }) : (0, cU.jsx)(cU.Fragment, {})
            })
          })]
        })]
      })
    }
    var Ag = gU(201),
      zg = gU(9078),
      Mg = gU(2489),
      Dg = gU(8321),
      Lg = gU(8319),
      Ng = gU(1591),
      lg = gU(1853),
      Og = gU(1376),
      Ut = gU(1929);

    function Rt(UU, RU, gU) {
      const tU = UU.trim().toLowerCase();
      if ("" === tU) return 0;
      let pU = null;
      for (const EU of RU) {
        const UU = EU.toLowerCase().indexOf(tU);
        if (0 === UU) return 0;
        UU > 0 && (pU = 1)
      }
      if (null !== pU) return pU;
      for (const EU of gU)
        if (EU.toLowerCase().includes(tU)) return 2;
      return null
    }

    function gt(UU) {
      return UU.map((UU => {
        var RU;
        return UU ? {
          name: UU.name,
          amount: null !== (RU = UU.amount) && void 0 !== RU ? RU : 1
        } : null
      }))
    }

    function tt(UU) {
      return UU < 1e3 ? `${UU}` : UU < 1e4 ? Math.floor(UU / 100) / 10 + "k" : `${Math.floor(UU/1e3)}k`
    }
    var pt = gU(36354);
    const Et = uU.e,
      Pt = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      Tt = () => {
        const UU = (0, Og.g)();
        return UU ? UU.getPadRepeatTiming(Pt) : Pt
      };

    function qt(UU, RU, gU) {
      var tU, pU;
      const EU = (0, ng.q)(RU, UU);
      let PU = null === (tU = RU[UU]) || void 0 === tU ? void 0 : tU.description;
      if (gU && (null === (pU = (0, pt.g)().get(UU)) || void 0 === pU || !pU.hideIngredients)) {
        PU ? (PU = (0, nU.xb)(PU), PU.push({
          str: "\n"
        })) : PU = [], PU.push({
          str: "\n"
        }), PU.push({
          str: "Can be crafted from:\n"
        });
        for (const UU of gU) "string" === typeof UU && (PU.push({
          icon: UU,
          style: {
            fontSize: "1.5em"
          }
        }), PU.push({
          str: " "
        }), PU.push(...(0, nU.xb)((0, ng.q)(RU, UU))), PU.push({
          str: "\n"
        }))
      }
      return {
        name: EU,
        desc: PU
      }
    }

    function Kt(UU) {
      let {
        name: RU,
        Ec: gU
      } = UU;
      return `${RU}_${gU}`
    }

    function ct(UU) {
      var RU;
      let {
        onClick: gU,
        itemName: tU,
        recipeId: EU,
        isSelected: PU,
        haveIngredients: TU,
        craftable: qU,
        setHovered: KU,
        padActions: GU,
        marked: jU,
        lock: uU,
        itemInfo: CU
      } = UU;
      const hU = (0, pU.useRef)(null);
      return (0, Dg.d)(hU, {
        press: UU => !TU || "secondary" === UU && !qU ? (GU.refuse(), !1) : "primary" === UU ? (GU.choose(), !0) : GU.craft(),
        release: GU.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, cU.jsxs)("div", {
        ref: hU,
        className: uR()("InvenItem", {
          CraftableItemNotEnoughIngredients: !TU && !uU,
          CraftableItemMarked: jU,
          CraftableItemLocked: void 0 !== uU,
          CraftableItemLockedFar: (null !== (RU = null === uU || void 0 === uU ? void 0 : uU.stepsAway) && void 0 !== RU ? RU : 1) > 1
        }),
        "data-recipe-key": EU,
        "data-pad-inventory-default": PU ? "" : void 0,
        onClick: gU,
        style: {
          cursor: PU ? null : "pointer"
        },
        onPointerEnter: UU => {
          null === KU || void 0 === KU || KU(!0, qt(tU, CU)), !PU && (0, Ng.t)(UU.nativeEvent) && (0, Lg.g)() && gU()
        },
        onPointerLeave: () => {
          null === KU || void 0 === KU || KU(!1)
        },
        children: [(0, cU.jsx)(mg.c, {
          itemName: tU,
          amount: 1
        }), jU && (0, cU.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), uU && (0, cU.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, cU.jsx)(QU.c, {
            name: "lock"
          }), (0, cU.jsx)(JU.e, {
            text: uU.tag
          })]
        })]
      })
    }

    function Gt(UU) {
      let {
        idx: RU,
        status: gU,
        shownItem: tU,
        dim: EU,
        onHoverStart: PU,
        onHoverEnd: TU,
        onPadBack: qU
      } = UU;
      const KU = (0, pU.useRef)(null);
      (0, Dg.d)(KU, {
        press: () => !1,
        back: qU,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const GU = gU.need > 0 ? Math.min(gU.have / gU.need, 1) : 1;
      return (0, cU.jsxs)("div", {
        ref: KU,
        className: uR()("CupTile", {
          Short: gU.missing > 0
        }),
        style: {
          width: EU,
          height: EU
        },
        "data-craft-ingredient": RU,
        onPointerEnter: PU,
        onPointerLeave: TU,
        children: [(0, cU.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${GU})`
          }
        }), (0, cU.jsx)(mg.c, {
          itemName: tU,
          amount: 0
        }), (0, cU.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [tt(gU.have), "/", tt(gU.need)]
        })]
      })
    }

    function jt(UU) {
      var RU, gU, tU, EU, PU;
      let {
        show: TU,
        recipeItem: {
          name: qU,
          Ec: GU,
          requires: jU,
          produces: uU,
          haveIngredients: CU
        },
        detail: hU,
        onCraft: QU,
        setHovered: eU,
        craftButtonRef: WU,
        onPadBack: fU,
        showPadShortcut: xU,
        refusedCount: mU,
        lock: IU,
        itemInfo: wU
      } = UU;
      const {
        t: nU
      } = (0, DU.B)(), bU = null !== hU && !hU.roomForOne, oU = null !== (RU = null === hU || void 0 === hU ? void 0 : hU.craftAllTimes) && void 0 !== RU ? RU : 0, ZU = function(UU, RU) {
        return UU.map((UU => {
          let {
            items: gU,
            amt: tU
          } = UU, pU = 0;
          const EU = [];
          for (const PU of gU) {
            const UU = RU(PU);
            pU += UU, UU > 0 && EU.push(PU)
          }
          return 0 === EU.length && EU.push(gU[0]), {
            shownItems: EU,
            need: tU,
            have: pU,
            missing: Math.max(tU - pU, 0)
          }
        }))
      }(jU, (UU => {
        var RU;
        return null !== (RU = null === hU || void 0 === hU ? void 0 : hU.amounts[UU]) && void 0 !== RU ? RU : 0
      }));
      let aU = "4rem",
        YU = 4;
      3 === jU.length || 4 === jU.length ? aU = "3.75rem" : jU.length >= 5 && (aU = "3rem"), 4 === jU.length ? YU = 2 : jU.length <= 6 && (YU = 3);
      const BU = `calc(${YU} * ${aU} + ${YU-1} * 0.4rem + 1px)`,
        VU = (0, pU.useRef)(null),
        rU = (0, pU.useRef)(null);
      (0, pU.useLayoutEffect)((() => {
        VU.current.scrollTop = 0
      }), [qU, GU]);
      const XU = (0, pU.useRef)(mU);
      (0, pU.useEffect)((() => {
        if (mU === XU.current) return;
        XU.current = mU;
        const UU = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
          opacity: 1
        }, {
          opacity: .4
        }, {
          opacity: 1
        }] : [{
          transform: "translateX(0)"
        }, {
          transform: "translateX(-0.25rem)"
        }, {
          transform: "translateX(0.25rem)"
        }, {
          transform: "translateX(-0.15rem)"
        }, {
          transform: "translateX(0)"
        }];
        for (const tU of null !== (RU = null === (gU = VU.current) || void 0 === gU ? void 0 : gU.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== RU ? RU : []) {
          var RU, gU;
          tU.animate(UU, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [mU]);
      const vU = (UU, RU, gU) => {
          var tU;
          if ((0, pt.g)().has(qU)) return void(gU && clearInterval(dU.current));
          const pU = null !== (tU = null === hU || void 0 === hU ? void 0 : hU.resultStackable) && void 0 !== tU && tU,
            EU = gt(KU.gameBridge.latest("inventory").player),
            {
              Pc: PU,
              dc: TU,
              amountAddedToSlot: cU
            } = KU.gameBridge.send("craftRecipe", {
              name: qU,
              Ec: GU,
              times: RU || UU && pU ? null : 1
            });
          if (PU > 0) {
            const RU = [],
              tU = new Set(jU.flatMap((UU => {
                let {
                  items: RU
                } = UU;
                return RU
              }))),
              PU = function(UU, RU, gU) {
                const tU = [];
                for (let pU = 0; pU < UU.length; pU++) {
                  const EU = UU[pU];
                  if (!EU || !gU.has(EU.name)) continue;
                  const PU = RU[pU],
                    TU = (null === PU || void 0 === PU ? void 0 : PU.name) === EU.name ? PU.amount : 0;
                  TU < EU.amount && tU.push({
                    idx: pU,
                    itemName: EU.name,
                    amount: EU.amount - TU
                  })
                }
                return tU
              }(EU, gt(KU.gameBridge.latest("inventory").player), tU).slice(0, 12),
              GU = gU ? 0 : Math.min(50, 400 / PU.length),
              CU = gU ? 220 : 320;
            for (const UU of PU) {
              var uU;
              const gU = jU.findIndex((RU => {
                  let {
                    items: gU
                  } = RU;
                  return gU.includes(UU.itemName)
                })),
                tU = null === (uU = VU.current) || void 0 === uU ? void 0 : uU.querySelector(`[data-craft-ingredient="${gU}"]`),
                pU = (0, ng.d)(UU.idx);
              tU && pU && RU.push({
                kind: "ingredient",
                itemName: UU.itemName,
                amount: UU.amount,
                dc: UU.idx,
                from: pU,
                to: (0, ng.d)(tU),
                delayMs: Math.round(RU.length * GU),
                durationMs: CU
              })
            }
            let hU;
            if (null !== TU && cU > 0 && rU.current) {
              const UU = RU.length > 0 ? RU[RU.length - 1].delayMs + .6 * CU : 0;
              hU = {
                itemName: qU,
                amount: cU,
                dc: TU,
                from: (0, ng.d)(rU.current),
                delayMs: Math.round(UU)
              }
            }
            QU(hU, UU && !pU ? TU : null, RU), Jg.e.play("wood1", .5).rate(1.75)
          }
        },
        dU = (0, pU.useRef)(null);
      (0, pU.useEffect)((() => () => {
        clearInterval(dU.current)
      }), []);
      const HU = (UU, RU) => {
          vU(UU, !1, !1), clearInterval(dU.current), RU && (dU.current = setTimeout((() => {
            dU.current = setInterval((() => {
              vU(UU, !1, !0)
            }), RU.intervalMs)
          }), RU.initialDelayMs))
        },
        SU = () => {
          clearInterval(dU.current)
        },
        sU = !CU || bU || Boolean(IU),
        yU = (0, pU.useRef)(null),
        kU = null !== (gU = null === (tU = (0, Ut.d)()) || void 0 === tU ? void 0 : tU.hideButtonHints) && void 0 !== gU && gU,
        FU = null !== (EU = null === (PU = (0, Og.g)()) || void 0 === PU ? void 0 : PU.getBoundButton("inventorySecondary")) && void 0 !== EU ? EU : null,
        iU = () => !sU && (vU(!1, !0, !1), !0);
      (0, Dg.d)(WU, {
        press: UU => "secondary" === UU ? iU() : !sU && (HU(!1, Tt()), !0),
        release: SU,
        back: fU,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, Dg.d)(yU, {
        press: iU,
        back: fU,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [AU, zU] = (0, pU.useState)(0), [MU, LU] = (0, pU.useState)(null);
      (0, pU.useEffect)((() => {
        if (!0 === TU) {
          zU(0);
          const UU = setInterval((() => {
            zU((UU => UU + 1))
          }), 1e3);
          return () => {
            clearInterval(UU)
          }
        }
        return () => {}
      }), [TU]);
      const NU = null === hU || void 0 === hU ? void 0 : hU.ingredientsCraftedFrom,
        lU = (0, pU.useRef)(eU);
      (0, pU.useEffect)((() => {
        lU.current = eU
      }), [eU]);
      const OU = !(null === IU || void 0 === IU || !IU.hideIngredients);
      (0, pU.useEffect)((() => {
        var UU, RU;
        if (!MU) return;
        if (OU) return LU(null), void(null === (RU = lU.current) || void 0 === RU || RU.call(lU, !1));
        const gU = MU[AU % MU.length];
        null === (UU = lU.current) || void 0 === UU || UU.call(lU, !0, qt(gU, wU, null === NU || void 0 === NU ? void 0 : NU[gU]))
      }), [MU, AU, wU, NU, OU]);
      const UR = !!IU,
        RR = (0, pU.useRef)(!1);
      (0, pU.useEffect)((() => {
        var UU;
        UR && (clearInterval(dU.current), OU && RR.current && (RR.current = !1, null === (UU = lU.current) || void 0 === UU || UU.call(lU, !1)))
      }), [UR, OU]);
      const gR = (0, ng.q)(wU, qU);
      return (0, cU.jsxs)("div", {
        ref: VU,
        className: "CraftableInfo SmallTextBold",
        children: [(0, cU.jsx)("div", {
          className: "CraftableHeader",
          children: (0, cU.jsx)(JU.e, {
            text: gR
          })
        }), !OU && (0, cU.jsx)("div", {
          className: uR()("CraftableIngredients", {
            Compact: jU.length >= 5
          }),
          style: {
            maxWidth: BU
          },
          children: ZU.map(((UU, RU) => {
            const gU = UU.shownItems[AU % UU.shownItems.length];
            return (0, cU.jsx)(Gt, {
              idx: RU,
              status: UU,
              shownItem: gU,
              dim: aU,
              onHoverStart: () => {
                LU(UU.shownItems)
              },
              onHoverEnd: () => {
                LU(null), null === eU || void 0 === eU || eU(!1)
              },
              onPadBack: fU
            }, RU)
          }))
        }), IU && (0, cU.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, cU.jsx)(JU.e, {
            text: IU.reason
          })
        }), !IU && (!CU || bU) && (0, cU.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!CU && "Missing ingredients", (0, cU.jsx)("br", {}), bU && "Inventory is full"]
        }), !OU && (0, cU.jsxs)(cU.Fragment, {
          children: [(0, cU.jsxs)(Et, {
            ref: WU,
            className: "DoCraftButton",
            onPointerDown: UU => {
              HU((0, ng.t)(UU), (0, Ng.t)(UU.nativeEvent) ? Tt() : Pt)
            },
            onPointerUp: SU,
            onPointerLeave: SU,
            disabled: sU,
            children: [xU && FU && !sU && !kU && (0, cU.jsx)(lg.b, {
              className: "CraftShortcutGlyph",
              glyph: FU
            }), (0, cU.jsx)("div", {
              ref: rU,
              className: "DoCraftItem",
              onPointerEnter: () => {
                RR.current = !0, null === eU || void 0 === eU || eU(!0, qt(qU, wU))
              },
              onPointerLeave: () => {
                RR.current = !1, null === eU || void 0 === eU || eU(!1)
              },
              children: (0, cU.jsx)(mg.c, {
                itemName: qU,
                amount: uU
              })
            })]
          }), (0, cU.jsxs)(Et, {
            ref: yU,
            className: "DoCraftAllButton",
            onPointerDown: UU => {
              vU((0, ng.t)(UU), !0, !1)
            },
            disabled: sU,
            children: [(0, cU.jsx)("span", {
              className: "CraftAllLabel",
              children: nU("general:craftAll")
            }), oU > 0 && (0, cU.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", tt(oU)]
            })]
          })]
        })]
      })
    }

    function ut(UU) {
      let {
        selectedIdx: RU,
        hidden: gU
      } = UU;
      const tU = (0, xg.o)(),
        EU = (0, pU.useRef)(null);
      return (0, pU.useLayoutEffect)((() => {
        const UU = EU.current,
          tU = null === UU || void 0 === UU ? void 0 : UU.parentElement;
        if (!tU || !UU) return;
        const pU = tU.querySelector(".CraftableItems"),
          PU = () => {
            var EU, PU;
            if (gU) return void(UU.style.opacity = "0");
            const TU = null === pU || void 0 === pU ? void 0 : pU.children[RU],
              qU = null === (EU = null !== (PU = null === TU || void 0 === TU ? void 0 : TU.querySelector(".InvenItem")) && void 0 !== PU ? PU : TU) || void 0 === EU ? void 0 : EU.getBoundingClientRect();
            if (!qU || 0 === qU.width) return void(UU.style.opacity = "0");
            const KU = tU.getBoundingClientRect();
            UU.style.opacity = "1", UU.style.width = `${qU.width}px`, UU.style.height = `${qU.height}px`, UU.style.transform = `translate(${qU.left-KU.left+tU.scrollLeft}px, ${qU.top-KU.top+tU.scrollTop}px)`
          };
        PU();
        const TU = new MutationObserver(PU),
          qU = new ResizeObserver(PU);
        return qU.observe(tU), pU && (TU.observe(pU, {
          childList: !0,
          subtree: !0
        }), qU.observe(pU)), () => {
          TU.disconnect(), qU.disconnect()
        }
      }), [RU, gU]), (0, cU.jsx)("div", {
        ref: EU,
        className: uR()("SelectionReticle", {
          Secondary: tU
        })
      })
    }

    function Ct(UU, RU, gU) {
      return UU ? (0, Ag.b)(zg.f, UU) ? ht(UU, RU, gU) : UU : gU("classicGame:handCrafting")
    }

    function ht(UU, RU, gU) {
      var tU;
      const pU = null === (tU = RU[UU]) || void 0 === tU ? void 0 : tU.displayName;
      if ("string" === typeof pU) return gU(pU);
      const EU = KU.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(pU) ? pU.map((UU => {
        if ("string" === typeof UU) return UU;
        if ("translationKey" in UU) return gU(UU.translationKey, (0, DU.r)(UU.params, EU));
        if ("str" in UU) {
          if ("string" === typeof UU.str) return UU.str;
          if ("translationKey" in UU.str) return gU(UU.str.translationKey, (0, DU.r)(UU.str.params, EU))
        }
        return ""
      })).join("") : pU && "translationKey" in pU ? gU(pU.translationKey, (0, DU.r)(pU.params, EU)) : UU
    }

    function Qt(UU, RU) {
      return UU === RU || null !== UU && null !== RU && UU.name === RU.name && UU.Ec === RU.Ec
    }

    function et(UU) {
      var RU, gU, tU;
      let {
        show: EU,
        onCraft: PU,
        dispatchSelectedCraftable: TU,
        selectedCraftable: qU,
        craftingStation: GU,
        setHovered: jU
      } = UU;
      const {
        t: uU
      } = (0, DU.B)(), [CU, hU] = (0, pU.useState)(""), [QU, eU] = (0, pU.useState)(0);
      (0, pU.useEffect)((() => {
        EU || (hU(""), eU((UU => UU + 1)))
      }), [EU]);
      const [WU, fU] = (0, pU.useState)(GU);
      WU !== GU && (fU(GU), "" !== CU && (hU(""), eU((UU => UU + 1))));
      const xU = (0, pU.useRef)(null),
        mU = (0, pU.useRef)(null),
        IU = (0, Lg.h)(),
        JU = IU.showing && "recipe" === IU.kind,
        [wU, nU] = (0, pU.useState)(0),
        oU = null !== GU && void 0 !== GU ? GU : null,
        ZU = (0, pU.useRef)(null),
        aU = UU => {
          return !((RU = ZU.current) === (gU = UU) || null !== RU && null !== gU && RU.station === gU.station && Qt(RU.recipe, gU.recipe)) && (ZU.current = UU, KU.gameBridge.send("focusCrafting", UU), !0);
          var RU, gU
        };
      aU(EU ? {
        station: oU,
        recipe: (null === (RU = ZU.current) || void 0 === RU ? void 0 : RU.station) === oU ? ZU.current.recipe : null
      } : null);
      let YU = KU.gameBridge.latest("crafting");
      const BU = (0, bU.k)("itemInfo"),
        VU = "" !== CU.trim(),
        rU = (0, pt.C)(),
        XU = (0, pt.z)(),
        vU = (0, pt.G)(),
        dU = function(UU, RU) {
          const [gU, tU] = (0, pU.useState)(!1);
          (0, pU.useEffect)((() => {
            if (!UU) return void tU(!1);
            const RU = setTimeout((() => {
              tU(!0)
            }), 0);
            return () => {
              clearTimeout(RU)
            }
          }), [UU]);
          const EU = UU && gU,
            PU = (0, pU.useRef)({
              station: RU,
              at: new Map
            });
          return (PU.current.station !== RU || !EU && PU.current.at.size > 0) && (PU.current = {
            station: RU,
            at: new Map
          }), EU ? PU.current.at : null
        }(EU, GU);
      let HU = YU.recipes.filter((UU => {
        let {
          listed: RU
        } = UU;
        return RU
      }));
      if (VU) {
        const UU = [];
        for (const RU of YU.recipes) {
          var SU;
          const gU = null !== (SU = XU.get(RU.name)) && void 0 !== SU && SU.hideIngredients ? [] : RU.requires.flatMap((UU => {
              let {
                items: RU
              } = UU;
              return RU.flatMap((UU => [UU, ht(UU, BU, uU)]))
            })),
            tU = Rt(CU, [RU.name, ht(RU.name, BU, uU)], gU);
          null !== tU && UU.push({
            item: RU,
            rank: tU
          })
        }
        UU.sort(((UU, RU) => UU.rank - RU.rank)), HU = UU.map((UU => {
          let {
            item: RU
          } = UU;
          return RU
        }))
      } else {
        if (dU && dU.size > 0) {
          const UU = YU.recipes.filter((UU => !UU.listed && dU.has(Kt(UU))));
          HU = HU.concat(UU)
        }
        HU = (0, pt.k)(HU, rU, XU, vU), dU && (HU = (0, pt.j)(HU, dU, Kt))
      }
      const sU = UU => HU.find((RU => Kt(RU) === UU)),
        yU = `${GU}|${CU}`,
        [kU, FU] = (0, pU.useState)(null),
        iU = (null === kU || void 0 === kU ? void 0 : kU.context) === yU ? kU.key : null,
        AU = qU ? Kt(qU) : null,
        zU = null !== (gU = null !== (tU = sU(AU)) && void 0 !== tU ? tU : sU(iU)) && void 0 !== gU ? gU : HU[0],
        MU = zU ? Kt(zU) : null,
        LU = zU ? {
          name: zU.name,
          Ec: zU.Ec
        } : null;
      EU && aU({
        station: oU,
        recipe: LU
      }) && (YU = KU.gameBridge.latest("crafting")), MU !== AU && MU !== iU && FU(MU ? {
        context: yU,
        key: MU
      } : null), (0, pU.useEffect)((() => () => {
        ZU.current = null, KU.gameBridge.send("focusCrafting", null)
      }), []);
      const NU = Qt(YU.detail, LU) ? YU.detail : null,
        lU = null !== NU && !NU.roomForOne,
        OU = HU.findIndex((UU => Kt(UU) === Kt(zU))),
        UR = () => mU.current ? (0, Dg.c)(mU.current) : null,
        RR = (0, pU.useRef)(null),
        gR = (0, pU.useRef)(0);
      gR.current++;
      const tR = gR.current;
      (0, pU.useEffect)((() => {
        const UU = RR.current;
        if (!UU || tR <= UU.afterRender) return;
        if (RR.current = null, UU.key !== MU) return;
        const RU = UR();
        var gU;
        null !== RU && void 0 !== RU && RU.press("primary") && !UU.WT && (null === (gU = RU.release) || void 0 === gU || gU.call(RU))
      }));
      const pR = UU => {
          const RU = {
            name: UU.name,
            Ec: UU.Ec
          };
          return {
            choose: () => {
              TU(RU), (0, fg.q)(mU.current)
            },
            craft: () => {
              var UU, gU;
              return TU(RU), Kt(RU) !== Kt(zU) ? (RR.current = {
                key: Kt(RU),
                WT: !0,
                afterRender: gR.current
              }, !0) : null !== (UU = null === (gU = UR()) || void 0 === gU ? void 0 : gU.press("primary")) && void 0 !== UU && UU
            },
            stopCraft: () => {
              var UU, RU;
              RR.current ? RR.current.WT = !1 : null === (UU = UR()) || void 0 === UU || null === (RU = UU.release) || void 0 === RU || RU.call(UU)
            },
            refuse: () => {
              Kt(RU) !== Kt(zU) && TU(RU), nU((UU => UU + 1))
            }
          }
        },
        ER = () => {
          var UU, RU, gU;
          (0, fg.q)(null !== (UU = null === (RU = xU.current) || void 0 === RU || null === (gU = RU.querySelector(".CraftableItems")) || void 0 === gU ? void 0 : gU.children[OU]) && void 0 !== UU ? UU : null)
        },
        PR = HU.map(Kt).join("|"),
        TR = (0, pU.useRef)(PR);
      return (0, pU.useEffect)((() => {
        TR.current !== PR && (TR.current = PR, JU && OU >= 0 && (0, Lg.g)() && ER())
      })), (0, cU.jsxs)("div", {
        className: "Craftables",
        children: [(0, cU.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Ct(GU, BU, uU)
        }), (0, cU.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, cU.jsx)(bR.d, {
            className: "CraftingSearch",
            placeholderText: uU("general:searchRecipes"),
            defaultValue: CU,
            maxLength: 100,
            onValueChange: UU => {
              hU(UU)
            },
            blurOnEnter: !0
          }, QU), 0 === HU.length && VU && (0, cU.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: uU("general:noRecipesMatchSearch")
          }), HU.length > 0 && (0, cU.jsxs)(cU.Fragment, {
            children: [(0, cU.jsxs)("div", {
              ref: xU,
              className: "CraftablesLeftSide",
              children: [(0, cU.jsx)(Mg.d, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(HU.map((UU => {
                  let {
                    name: RU,
                    Ec: gU,
                    haveIngredients: tU
                  } = UU;
                  return {
                    name: RU,
                    Ec: gU,
                    haveIngredients: tU
                  }
                })))],
                observing: EU,
                children: HU.map((UU => {
                  const {
                    name: RU,
                    Ec: gU,
                    haveIngredients: tU
                  } = UU, pU = Kt(UU);
                  return (0, cU.jsx)(ct, {
                    recipeId: pU,
                    itemName: RU,
                    onClick: () => {
                      TU({
                        name: RU,
                        Ec: gU
                      })
                    },
                    isSelected: Kt(zU) === pU,
                    haveIngredients: tU,
                    craftable: tU && !XU.has(RU) && !(Kt(zU) === pU && lU),
                    setHovered: jU,
                    padActions: pR(UU),
                    marked: rU.has(RU),
                    lock: XU.get(RU),
                    itemInfo: BU
                  }, pU)
                }))
              }), (0, cU.jsx)(ut, {
                selectedIdx: OU,
                hidden: JU && IU.steppingSlots
              })]
            }), (0, cU.jsx)(jt, {
              show: EU,
              recipeItem: zU,
              detail: NU,
              onCraft: PU,
              setHovered: jU,
              craftButtonRef: mU,
              onPadBack: ER,
              showPadShortcut: JU,
              refusedCount: wU,
              lock: XU.get(zU.name),
              itemInfo: BU
            })]
          })]
        })]
      })
    }
    var Wt = gU(9009),
      ft = gU(2969),
      xt = gU(1960),
      mt = gU(8307);
    class It {
      constructor(UU, RU, gU) {
        this.commit = UU, this.delayMs = RU, this.defers = gU, this.pending = null, this.timer = void 0, this.WT = !1, this.flush = () => {
          clearTimeout(this.timer);
          const UU = this.pending;
          null !== UU && (this.pending = null, this.commit(UU))
        }
      }
      type(UU) {
        this.pending = UU, clearTimeout(this.timer), this.WT || this.defers() ? this.WT || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(UU) {
        var RU;
        return null !== (RU = this.pending) && void 0 !== RU ? RU : UU
      }
      isHeld() {
        return this.WT
      }
      setHeld(UU) {
        this.WT = UU, UU || this.flush()
      }
    }

    function Jt(UU) {
      return null === UU ? "creativeInventory:all" : `creativeInventory:${UU}`
    }

    function wt(UU) {
      let {
        category: RU
      } = UU;
      return null === RU ? (0, cU.jsx)(QU.c, {
        name: "layer-group"
      }) : (0, cU.jsx)(mg.c, {
        itemName: Wt.creativeItemCategoryIcons[RU],
        amount: 0
      })
    }

    function nt(UU) {
      let {
        labelKey: RU,
        isSelected: gU,
        onSelect: tU,
        setHovered: pU,
        children: EU
      } = UU;
      return (0, cU.jsx)("div", {
        className: uR()("CreativeCategoryTab", {
          Selected: gU
        }),
        onClick: tU,
        onPointerEnter: UU => {
          (0, ng.m)(UU) || pU(!0, {
            name: {
              translationKey: RU
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          pU(!1)
        },
        children: EU
      })
    }

    function bt(UU) {
      let {
        categories: RU,
        selectedCategory: gU,
        onSelect: tU
      } = UU;
      const {
        t: EU
      } = (0, DU.B)(), [PU, TU] = (0, pU.useState)(!1), qU = (0, pU.useRef)(null), KU = (0, pU.useCallback)((() => {
        TU(!1)
      }), []);
      return (0, xt.b)(qU, KU), (0, cU.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: qU,
        children: [(0, cU.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            TU(!PU)
          },
          children: [(0, cU.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, cU.jsx)(wt, {
              category: gU
            })
          }), (0, cU.jsx)("span", {
            children: EU(Jt(gU))
          }), (0, cU.jsx)(QU.c, {
            name: PU ? "caret-up" : "caret-down"
          })]
        }), PU && (0, cU.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: RU.map((UU => (0, cU.jsxs)("div", {
            className: uR()("CreativeCategoryDropdownOption", {
              Selected: gU === UU
            }),
            onClick: () => {
              tU(UU), TU(!1)
            },
            children: [(0, cU.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, cU.jsx)(wt, {
                category: UU
              })
            }), (0, cU.jsx)("span", {
              children: EU(Jt(UU))
            })]
          }, null !== UU && void 0 !== UU ? UU : "all")))
        })]
      })
    }
    const ot = (0, pU.memo)((function(UU) {
      let {
        creativeScrollDiv: RU,
        playerInvenNumSlots: gU,
        getSetHoveringForIdx: tU,
        getPointerDownForIdx: EU,
        getPointerUpForIdx: PU,
        creativeSearchVal: TU,
        setCreativeSearchVal: KU,
        creativeCategory: GU,
        setCreativeCategory: jU,
        show: uU
      } = UU;
      const {
        t: CU
      } = (0, DU.B)(), hU = (0, bU.k)("creativeVisibility"), {
        userContext: eU
      } = (0, IU.e)(), WU = (0, qU.g)("canUseDevCreativeItems"), fU = eU.playerHasRank("developer") || !!WU, xU = (0, pU.useMemo)((() => Yt("", hU, fU)), [hU, fU]), mU = (0, pU.useMemo)((() => {
        const UU = (0, Wt.creativeItemIds)(),
          RU = new Set(xU.map((RU => (0, Wt.creativeCategoryOf)(UU[RU]))));
        return Wt.creativeItemCategories.filter((UU => RU.has(UU)))
      }), [xU]), JU = null !== GU && mU.includes(GU) ? GU : null, nU = (0, pU.useMemo)((() => "" === TU ? xU : Yt(TU, hU, fU)), [xU, TU, hU, fU]), oU = (0, pU.useMemo)((() => {
        const UU = (0, Wt.creativeItemIds)();
        return null !== JU ? nU.filter((RU => (0, Wt.creativeCategoryOf)(UU[RU]) === JU)) : "" === TU ? nU.filter((RU => !(0, Wt.showOnlyInCreativeCategory)(UU[RU]))) : nU
      }), [nU, JU, TU]), ZU = tU();

      function aU(UU) {
        jU(UU), RU.current.scrollTop = 0
      }
      const YU = [null, ...mU],
        {
          isTouchScreen: BU
        } = (0, SU.l)(["isTouchScreen"]),
        VU = !BU,
        rU = (0, pU.useRef)(null),
        [XU, vU] = (0, pU.useState)(0);
      (0, pU.useEffect)((() => {
        const UU = rU.current;
        if (!UU) return;
        const RU = new ResizeObserver((UU => {
          vU(UU[0].contentRect.height)
        }));
        return RU.observe(UU), () => {
          RU.disconnect()
        }
      }), [VU]);
      const dU = (0, pU.useRef)(null),
        HU = (0, pU.useCallback)((function UU() {
          "up" === dU.current ? RU.current.scrollTop -= 10 : "down" === dU.current && (RU.current.scrollTop += 10), dU.current && requestAnimationFrame(UU)
        }), [RU]),
        sU = (0, pU.useCallback)((function(UU) {
          dU.current || (dU.current = UU, HU())
        }), [HU]);

      function yU() {
        dU.current = null
      }
      const kU = (0, pU.useRef)({
        creativeSearchVal: TU,
        setCreativeSearchVal: KU
      });
      kU.current = {
        creativeSearchVal: TU,
        setCreativeSearchVal: KU
      };
      const [FU] = (0, pU.useState)((() => new It((UU => {
        kU.current.setCreativeSearchVal(UU)
      }), 250, xg.g))), iU = UU => {
        var gU;
        null === (gU = RU.current) || void 0 === gU || gU.classList.toggle("CreativeItemSlotsStale", UU)
      };
      (0, wU.e)(mt.c, (UU => {
        FU.setHeld(UU), UU || iU(!1)
      })), (0, pU.useEffect)((() => FU.flush), [FU]);
      const AU = (0, cU.jsx)(bR.d, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: TU,
          maxLength: 1e4,
          onValueChange: (UU, RU) => {
            "" === FU.getTyped(kU.current.creativeSearchVal) && "" !== UU && jU(null), FU.type(UU), iU(FU.isHeld())
          },
          onEnter: FU.flush,
          blurOnEnter: !0
        }),
        zU = (0, cU.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [BU && (0, cU.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, cU.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                sU("up")
              },
              onPointerLeave: yU,
              onPointerUp: yU,
              children: (0, cU.jsx)(QU.c, {
                name: "arrow-up"
              })
            }), (0, cU.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                sU("down")
              },
              onPointerLeave: yU,
              onPointerUp: yU,
              children: (0, cU.jsx)(QU.c, {
                name: "arrow-up"
              })
            })]
          }), (0, cU.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: RU,
            children: [0 === oU.length && "" !== TU && (0, cU.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: CU("general:noResults")
            }), (0, cU.jsx)(Mg.d, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [TU, JU],
              observerRoot: "CreativeItemSlots",
              observing: uU,
              children: oU.map((UU => {
                const RU = gU + UU;
                return (0, cU.jsx)(yg.d, {
                  idx: RU,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: tU(RU),
                  pointerDown: EU(RU),
                  pointerUp: PU(RU)
                }, RU)
              }))
            })]
          })]
        });
      return (0, cU.jsxs)("div", {
        className: uR()("CreativeItemSlotsWrapper", VU ? "WithRail" : "WithDropdown"),
        children: [VU && (0, cU.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: rU,
          style: {
            "--rail-height": XU > 0 ? `${XU}px` : void 0,
            "--tab-rows": Math.ceil(YU.length / 2)
          },
          children: YU.map((UU => (0, cU.jsx)(nt, {
            labelKey: Jt(UU),
            isSelected: JU === UU,
            onSelect: () => {
              aU(UU)
            },
            setHovered: ZU,
            children: (0, cU.jsx)(wt, {
              category: UU
            })
          }, null !== UU && void 0 !== UU ? UU : "all")))
        }), (0, cU.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, cU.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [AU, !VU && (0, cU.jsx)(bt, {
              categories: YU,
              selectedCategory: JU,
              onSelect: aU
            })]
          }), zU]
        })]
      })
    }));

    function Zt(UU) {
      var RU;
      return null !== (RU = (0, ft.f)(UU)) && void 0 !== RU ? RU : ""
    }

    function Yt(UU, RU, gU) {
      let {
        publicLobby: tU,
        shownInGame: pU
      } = RU;
      const EU = UU.toLowerCase(),
        PU = (0, Wt.creativeItemIds)(),
        TU = UU => {
          var RU;
          const EU = PU[UU];
          return !(0, Wt.itemIsDisabled)(EU, tU, null === (RU = pU[Zt(EU)]) || void 0 === RU || RU, gU)
        };
      if ("" === EU) return PU.map(((UU, RU) => RU)).filter((UU => !(0, Wt.showOnlyInCreativeSearch)(PU[UU]))).filter(TU);
      const qU = [];
      for (let KU = 0; KU < PU.length; KU++) Zt(PU[KU]).toLowerCase().includes(EU) && qU.push(KU);
      qU.sort(((UU, RU) => {
        const gU = Zt(PU[UU]).toLowerCase(),
          tU = Zt(PU[RU]).toLowerCase();
        return gU.indexOf(EU) - tU.indexOf(EU)
      }));
      for (const [KU, cU] of(0, Wt.creativeAltNames)())
        for (const UU of cU)
          if (UU.toLowerCase().includes(EU)) {
            const UU = PU.indexOf(KU);
            qU.includes(UU) || qU.push(UU)
          } return qU.filter(TU)
    }
    var Bt = gU(36373),
      Vt = gU(581);

    function rt(UU) {
      return UU > Vt.l
    }

    function Xt(UU) {
      const RU = UU / 2,
        gU = [];
      for (let tU = 0; tU < RU / 6; tU++)
        for (let UU = 0; UU < 12; UU++) {
          const pU = UU < 6 ? 0 : RU;
          gU.push(pU + 6 * tU + UU % 6)
        }
      return gU
    }

    function vt(UU) {
      let {
        numSlots: RU,
        renderSlot: gU
      } = UU;
      const {
        t: tU
      } = (0, DU.B)(), EU = (0, pU.useRef)(null);
      var PU;
      return PU = EU, (0, pU.useLayoutEffect)((() => {
        var UU;
        const RU = null === (UU = PU.current) || void 0 === UU ? void 0 : UU.closest(".InvenBody");
        if (!RU) return;
        const gU = () => {
          RU.style.zoom = "";
          const UU = parseFloat(getComputedStyle(document.documentElement).fontSize),
            gU = window.innerWidth - 2 * UU,
            tU = RU.getBoundingClientRect().width;
          tU > gU && (RU.style.zoom = "" + gU / tU)
        };
        return gU(), window.addEventListener("resize", gU), () => {
          window.removeEventListener("resize", gU), RU.style.zoom = ""
        }
      }), [PU]), (0, cU.jsxs)("div", {
        ref: EU,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, cU.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: tU("doubleChest:title")
        }), (0, cU.jsx)("div", {
          className: "GridItemSlots",
          children: Xt(RU).map((UU => gU(UU)))
        })]
      })
    }

    function dt(UU) {
      let {
        iE: RU,
        initialPasskey: gU
      } = UU;
      const {
        t: tU
      } = (0, DU.B)(), [EU, PU] = (0, pU.useState)(gU), [TU, qU] = (0, pU.useState)(gU);
      (0, pU.useEffect)((() => {
        PU(gU), qU(gU)
      }), [...RU]);
      return (0, cU.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, cU.jsx)("div", {
          className: "SmallTextBold",
          children: tU("ironChest:currentPasskey", {
            currentPasskey: EU.join("")
          })
        }), (0, cU.jsx)(dg, {
          className: "IronChestPasskeyEditor",
          CK: TU,
          onPasskeyUpdated: qU,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            KU.gameBridge.send("changeIronChestPasskey", {
              pos: [...RU],
              CK: [...TU]
            }), PU([...TU])
          }
        })]
      })
    }

    function Ht(UU) {
      let {
        variation: RU,
        canCraft: gU,
        show: tU,
        creativeMounted: pU,
        specialItemRef: EU,
        draggedInfo: PU,
        getSetHovering: TU,
        getPointerDownForIdx: qU,
        getPointerUpForIdx: KU,
        enchantingTablePosition: GU,
        enchantingTableBlockName: jU,
        selectedCraftable: uU,
        dispatchSelectedCraftable: CU,
        creativeScrollDiv: hU,
        creativeSearchVal: QU,
        setCreativeSearchVal: eU,
        creativeCategory: WU,
        setCreativeCategory: fU,
        onCraft: xU
      } = UU;
      const {
        userContext: mU
      } = (0, IU.e)(), {
        t: JU
      } = (0, DU.B)(), wU = (0, bU.h)("inventory", (UU => UU.chest)), nU = (0, bU.h)("inventory", (UU => UU.player.length)), oU = (0, bU.h)("inventory", (UU => UU.creative));
      if (0 === nU) return null;
      let ZU, aU;
      const YU = UU => {
          const RU = nU + UU;
          return (0, cU.jsx)(yg.d, {
            idx: RU,
            draggedInfo: PU,
            specialItemInfo: EU.current,
            setHovered: TU(RU),
            pointerDown: qU(RU),
            pointerUp: KU(RU)
          }, RU)
        },
        BU = wU ? (0, Bt.d)(wU.type) : null;
      if (BU) ZU = uR()("InvenLeftSideChestCustom", BU.className), aU = (0, cU.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: BU.render({
          iE: wU.pos,
          renderSlot: YU
        })
      });
      else if (wU) {
        const UU = wU.pos,
          RU = "Iron" === wU.type || "Moonstone" === wU.type ? wU.type : "Standard";
        let gU = !1,
          tU = null;
        "Iron" === RU && (gU = wU.ironChest.ownerDbId === mU.whamm, tU = wU.ironChest.CK), ZU = `InvenLeftSideChest${RU}`;
        const pU = rt(wU.numSlots);
        aU = (0, cU.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [gU && (0, cU.jsx)(dt, {
            iE: UU,
            initialPasskey: tU
          }), pU && (0, cU.jsx)(vt, {
            numSlots: wU.numSlots,
            renderSlot: YU
          }), !pU && (0, cU.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, cU.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: JU("Moonstone" === RU ? "item:moonstoneChest" : "Iron" === RU ? "item:ironChest" : "item:chest")
            }), (0, cU.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(wU.numSlots).fill(0).map(((UU, RU) => YU(RU)))
            })]
          })]
        })
      } else if (!oU || RU && gU)
        if (gU && "Enchanting Table" === RU) ZU = `InvenLeftSide${(null!==jU&&void 0!==jU?jU:"").replace(/ /gi,"")}`, aU = (0, cU.jsx)(kg, {
          specialItemInfo: EU.current,
          setHovered: TU,
          pointerDown: qU(og.d),
          pointerUp: KU(og.d),
          enchantingTablePosition: GU,
          enchantingTableBlockName: jU
        });
        else if (gU && "Salvaging Table" === RU) ZU = "InvenLeftSideSalvagingTable", aU = (0, cU.jsx)(ig, {
        specialItemInfo: EU.current,
        setSpecialItemInfo: UU => {
          EU.current = UU
        },
        setHovered: TU,
        pointerDown: qU(og.d),
        pointerUp: KU(og.d)
      });
      else {
        if (!gU) return null;
        ZU = `InvenLeftSide${(null!==RU&&void 0!==RU?RU:"HandCrafting").replace(/ /gi,"")}`, aU = (0, cU.jsx)(et, {
          show: tU,
          onCraft: xU,
          craftingStation: RU,
          selectedCraftable: uU,
          dispatchSelectedCraftable: CU,
          setHovered: TU()
        })
      } else ZU = "InvenLeftSideCreative", aU = pU ? (0, cU.jsx)(ot, {
        creativeScrollDiv: hU,
        playerInvenNumSlots: nU,
        getSetHoveringForIdx: TU,
        getPointerDownForIdx: qU,
        getPointerUpForIdx: KU,
        creativeSearchVal: QU,
        setCreativeSearchVal: eU,
        creativeCategory: WU,
        setCreativeCategory: fU,
        show: tU
      }) : null;
      const VU = !!wU || gU && !!RU;
      return (0, cU.jsx)("div", {
        className: `InvenLeftSide ${ZU}`,
        "data-pad-inventory-start": VU ? "" : void 0,
        children: aU
      })
    }
    var St = gU(567),
      st = gU(19866),
      yt = gU(19868),
      kt = gU(19874);
    const Ft = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: gU(19883)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: yt
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: kt
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: gU(19888)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: st
      }
    };

    function it(UU) {
      const {
        sprite: RU,
        image: gU
      } = Ft[UU];
      return qg(RU, Eg.g.ITEM, gU)
    }

    function At(UU) {
      let {
        draggedInfo: RU,
        specialItemInfo: gU,
        craftFlyAnims: tU,
        getSetHovering: pU,
        getPointerDownForIdx: EU,
        getPointerUpForIdx: PU,
        variation: TU,
        canCraft: qU,
        isNewSlot: KU
      } = UU;
      const GU = (0, bU.h)("inventory", (UU => UU.player.length));
      return 0 === GU ? null : (0, cU.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, cU.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(St.e.length).fill(0).map(((UU, jU) => {
            const uU = GU - St.e.length + jU;
            return (0, cU.jsx)(yg.d, {
              idx: uU,
              draggedInfo: RU,
              specialItemInfo: gU,
              craftFlyHoldbackInfo: (0, bg.h)(tU, uU),
              setHovered: pU(uU),
              pointerDown: EU(uU),
              pointerUp: PU(uU),
              defaultIconB64: it(St.e[jU]),
              variation: qU ? TU : void 0,
              showNewDot: KU(uU)
            }, uU)
          }))
        }), (0, cU.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(GU - 10 - St.e.length).fill(0).map(((UU, jU) => {
            const uU = GU - St.e.length - jU - 1;
            return (0, cU.jsx)(yg.d, {
              idx: uU,
              draggedInfo: RU,
              specialItemInfo: gU,
              craftFlyHoldbackInfo: (0, bg.h)(tU, uU),
              setHovered: pU(uU),
              pointerDown: EU(uU),
              pointerUp: PU(uU),
              variation: qU ? TU : void 0,
              showNewDot: KU(uU)
            }, uU)
          }))
        })]
      })
    }
    var zt = gU(36379),
      Mt = gU(36386);

    function Dt(UU) {
      const {
        e: RU,
        idx: gU
      } = UU, tU = (0, ng.f)(UU.readInventory(), gU), pU = (0, ng.l)(RU);
      gU === og.c ? function(UU, RU) {
        const {
          draggedInfoRef: gU,
          removeItem: tU,
          removeDraggedInfoRef: pU,
          close: EU
        } = UU;
        if (gU.current) {
          const UU = RU && gU.current.amount || 1;
          tU(gU.current.idx, UU, !0) && (gU.current.amount -= UU, gU.current.amount <= 0 && pU())
        } else RU && EU()
      }(UU, pU) : gU === og.d ? function(UU, RU) {
        const {
          e: gU,
          draggedInfoRef: tU,
          specialItemRef: pU,
          moveAmtIntoSlot: EU,
          removeDraggedInfoRef: PU
        } = UU;
        if ((0, ng.t)(gU) && pU.current) pU.current = null;
        else if (tU.current && pU.current && (tU.current.idx === pU.current.idx || (0, Mt.c)(tU.current, pU.current)) && tU.current.amount > 0 && pU.current.amount > 0 && pU.current.amount < Xg.e.maxItemStackSize)
          if (tU.current.idx === pU.current.idx) {
            if (RU) {
              const UU = Math.min(tU.current.amount, Xg.e.maxItemStackSize - pU.current.amount);
              pU.current.amount += UU, tU.current.amount -= UU
            } else tU.current.amount--, pU.current.amount++;
            tU.current.amount <= 0 && PU()
          } else if (RU) {
          const UU = Math.min(tU.current.amount, Xg.e.maxItemStackSize - pU.current.amount);
          EU(pU.current.idx, UU) && (pU.current.amount += UU)
        } else {
          EU(pU.current.idx, 1) && pU.current.amount++
        } else if (!tU.current || pU.current || RU) {
          const UU = tU.current;
          tU.current = pU.current, pU.current = UU
        } else tU.current.amount--, pU.current = {
          idx: tU.current.idx,
          name: tU.current.name,
          attributes: tU.current.attributes,
          amount: 1
        }
      }(UU, pU) : (0, ng.t)(RU) ? function(UU, RU) {
        var gU, tU;
        const {
          idx: pU,
          draggedInfoRef: EU,
          specialItemRef: PU,
          canCraft: TU,
          variation: qU,
          swapSlots: KU,
          moveIntoSlots: cU
        } = UU;
        if (!RU) return;
        let GU = RU.amount;
        pU === (null === (gU = EU.current) || void 0 === gU ? void 0 : gU.idx) && (GU = EU.current.amount <= 0 ? 0 : RU.amount - EU.current.amount);
        pU === (null === (tU = PU.current) || void 0 === tU ? void 0 : tU.idx) && (GU = PU.current.amount <= 0 ? 0 : RU.amount - PU.current.amount);
        if (0 === GU) return;
        const jU = UU.readInventory(),
          uU = jU.player.length,
          CU = jU.chest,
          hU = uU - St.e.length,
          QU = () => {
            if (!(0, xg.g)()) return void cU(10, hU, pU, GU);
            const UU = UU => {
              const gU = (0, ng.f)(jU, UU);
              return gU ? {
                amount: gU.amount,
                stacksWithMoved: (0, Mt.c)(gU, RU)
              } : null
            };
            for (const RU of ((UU, RU, gU, tU, pU) => {
                const EU = [];
                let PU = tU;
                if (null !== tU) {
                  let TU = 0;
                  for (let tU = RU; tU < gU; tU++) {
                    const RU = UU(tU);
                    null !== RU && void 0 !== RU && RU.stacksWithMoved && null !== RU.amount && RU.amount > 0 && (TU += Math.max(0, pU - RU.amount))
                  }
                  const qU = Math.min(tU, TU);
                  if (qU > 0 && (EU.push({
                      start: RU,
                      end: gU,
                      amount: qU
                    }), PU = tU - qU), PU <= 0) return EU
                }
                for (let TU = gU - 1; TU >= RU; TU--)
                  if (null === UU(TU)) {
                    EU.push({
                      start: TU,
                      end: TU + 1,
                      amount: PU
                    });
                    break
                  } return EU
              })(UU, 10, hU, GU, Xg.e.maxItemStackSize)) cU(RU.start, RU.end, pU, RU.amount)
          };
        if (!TU || "Enchanting Table" !== qU && "Salvaging Table" !== qU) {
          const gU = (0, nU.Fb)(RU.name),
            tU = gU ? (0, nU.Db)(gU) : null;
          if (!St.e.includes(gU) || pU !== tU && (0, ng.i)(jU, UU.itemInfo, tU, pU))
            if (CU)
              if (pU < uU) {
                var eU, WU;
                const [UU, RU] = null !== (eU = null === (WU = (0, Bt.d)(CU.type)) || void 0 === WU ? void 0 : WU.quickMoveRange) && void 0 !== eU ? eU : [0, CU.numSlots];
                cU(uU + UU, uU + RU, pU, GU)
              } else cU(0, uU - St.e.length, pU, GU);
          else jU.creative ? pU < 10 ? QU() : pU < uU ? cU(0, 10, pU, GU) : cU(0, uU - St.e.length, pU, null !== RU.amount ? Xg.e.maxItemStackSize : null) : pU < 10 ? QU() : cU(0, 10, pU, GU);
          else pU < uU - St.e.length || pU >= uU ? KU(tU, pU) : (cU(0, uU - St.e.length, tU, GU), Jg.e.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else PU.current = {
          idx: pU,
          name: RU.name,
          attributes: RU.attributes,
          amount: null !== RU.amount ? GU : 0
        }
      }(UU, tU) : UU.draggedInfoRef.current ? function(UU, RU, gU, tU) {
        const {
          draggedInfoRef: pU,
          specialItemRef: EU,
          moveAmtIntoSlot: PU,
          swapSlots: TU,
          removeItem: qU,
          removeDraggedInfoRef: KU
        } = UU, cU = UU.readInventory(), GU = pU.current.idx;
        if (gU && (RU === GU || (0, Mt.c)(pU.current, gU)) && pU.current.amount > 0 && (0, ng.c)(gU) > 0 && (gU.amount < Xg.e.maxItemStackSize || RU === GU)) tU ? gU.amount + pU.current.amount <= Xg.e.maxItemStackSize || RU === GU ? PU(RU, pU.current.amount) : PU(RU, Xg.e.maxItemStackSize - gU.amount) : PU(RU, 1);
        else if (pU.current.amount > 0 && !gU) PU(RU, tU ? pU.current.amount : 1);
        else if (tU || gU || 0 === pU.current.amount)
          if (cU.creative && !cU.chest && RU >= cU.player.length) {
            const UU = 0 === pU.current.amount ? 1 : pU.current.amount;
            qU(pU.current.idx, UU, !1) && KU()
          } else {
            var jU;
            const gU = (null === (jU = EU.current) || void 0 === jU ? void 0 : jU.idx) === RU;
            if (TU(RU, pU.current.idx)) {
              const tU = UU.readInventory(),
                PU = (0, ng.f)(tU, GU),
                TU = !tU.chest && tU.creative && pU.current.idx >= tU.player.length;
              if (PU && pU.current.idx !== RU && !TU) {
                let UU = (0, ng.c)(PU);
                gU && (UU -= EU.current.amount), pU.current = gU && 0 === UU ? null : {
                  idx: pU.current.idx,
                  name: PU.name,
                  attributes: PU.attributes,
                  amount: UU
                }
              } else KU()
            }
          }
        else PU(RU, 1)
      }(UU, gU, tU, pU) : function(UU, RU, gU, tU) {
        var pU;
        const {
          draggedInfoRef: EU,
          specialItemRef: PU
        } = UU;
        if (!gU) return;
        let TU = (0, ng.c)(gU);
        const qU = (null === (pU = PU.current) || void 0 === pU ? void 0 : pU.idx) === RU;
        qU && (TU -= PU.current.amount);
        tU || (TU = Math.ceil(TU / 2));
        EU.current = qU && 0 === TU ? null : {
          idx: RU,
          name: gU.name,
          attributes: gU.attributes,
          amount: TU
        }
      }(UU, gU, tU, pU)
    }

    function Lt(UU, RU) {
      return !!RU && RU.name === UU.name
    }

    function Nt() {
      return KU.gameBridge.latest("inventory")
    }

    function lt(UU, RU, gU) {
      return KU.gameBridge.send("removeInventoryItem", {
        slot: UU,
        amount: RU,
        drop: gU
      })
    }

    function Ot(UU) {
      return (0, ng.e)(UU, KU.gameBridge.latest("itemInfo"), KU.gameBridge.latest("stationItems").enchantable)
    }

    function Up(UU) {
      let {
        show: RU,
        close: gU,
        canCraft: tU,
        variation: EU,
        inventoryItemsMoveable: PU,
        setCraftFlyAnims: TU
      } = UU;
      (0, bU.k)("itemInfo");
      const [qU, cU] = (0, pU.useState)(null), [GU, jU] = (0, pU.useState)(null), [uU, CU] = (0, pU.useState)(!1), hU = (0, pU.useRef)(null), QU = (0, pU.useRef)(null), eU = (0, pU.useRef)(null), WU = (0, pU.useRef)(null), [fU, xU] = (0, pU.useReducer)((UU => UU + 1), 0), mU = (0, pU.useCallback)((() => {
        RU && xU()
      }), [RU, xU]), IU = (0, pU.useCallback)((() => {
        QU.current = null, XU.current = null, mU()
      }), [mU]), JU = (0, pU.useCallback)(((UU, RU) => {
        TU((gU => gU.map((gU => "ingredient" === gU.kind ? gU : gU.dc === UU ? {
          ...gU,
          dc: RU,
          to: (0, ng.d)(RU)
        } : gU.dc === RU ? {
          ...gU,
          dc: UU,
          to: (0, ng.d)(UU)
        } : gU))))
      }), [TU]), wU = (0, pU.useCallback)(((UU, RU) => {
        const gU = HU.current;
        if (gU.x = UU, gU.y = RU, hU.current) !SU.current.isTouch || SU.current.itemBeingDragged && !XU.current ? (hU.current.style.transform = `translate(${gU.x}px, ${gU.y}px)`, CU(SU.current.isTouch && !XU.current)) : (hU.current.style.transform = "translate(0.5rem, 0.5rem)", CU(!0));
        else if (WU.current) {
          const gU = WU.current;
          let tU = UU + 10,
            pU = RU + 10;
          const EU = gU.offsetWidth,
            PU = gU.offsetHeight;
          tU + EU > window.innerWidth && (tU = UU - EU - 10), pU + PU > window.innerHeight && (pU = RU - PU - 10), tU < 0 && (tU = 0), pU < 0 && (pU = 0), WU.current.style.transform = `translate(${tU}px, ${pU}px)`
        }
      }), []), oU = (0, pU.useCallback)((UU => (RU, gU, tU) => {
        if (cU(RU && void 0 !== UU ? UU : null), RU) {
          if (void 0 === UU && !gU) return void(0, zt.b)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== UU) {
            var pU;
            const RU = Nt();
            let gU;
            if (gU = UU === og.d ? eU.current ? (0, ng.f)(RU, eU.current.idx) : null : (0, ng.f)(RU, UU), !gU) return void jU(null);
            if ((null === (pU = eU.current) || void 0 === pU ? void 0 : pU.idx) === UU) {
              if (0 === (0, ng.c)(gU) - eU.current.amount) return void jU(null)
            }
            jU(Ot(gU))
          } else jU({
            name: gU.name,
            desc: gU.desc,
            fontStyle: "normal"
          })
        } else jU(null);
        tU && setTimeout((() => {
          wU(tU.pageX, tU.pageY)
        }), 0)
      }), [wU]), ZU = (0, pU.useCallback)(((UU, RU) => {
        const gU = KU.gameBridge.send("moveInventoryItem", {
          from: QU.current.idx,
          to: UU,
          amount: RU
        });
        return gU ? (QU.current.amount -= RU, QU.current.amount <= 0 && IU()) : console.error("moveInventoryItem failed"), gU
      }), [IU]), aU = (0, pU.useCallback)(((UU, RU) => {
        const gU = eU.current,
          tU = null === gU || void 0 === gU ? void 0 : gU.idx;
        gU && (gU.idx = function(UU, RU, gU) {
          return UU === RU ? gU : UU === gU ? RU : UU
        }(tU, UU, RU));
        const pU = KU.gameBridge.send("swapInventorySlots", {
          a: UU,
          b: RU
        });
        return pU ? JU(UU, RU) : gU && (gU.idx = tU), pU
      }), [JU]), YU = (0, pU.useCallback)(((UU, RU, gU, tU) => {
        const pU = KU.gameBridge.send("quickMoveInventoryItem", {
          slot: gU,
          start: UU,
          end: RU,
          amount: tU
        });
        null !== pU && JU(gU, pU)
      }), [JU]), BU = (0, pU.useCallback)(((UU, RU) => {
        var pU;
        ((UU, RU, gU) => {
          const tU = UU - (gU - St.e.length);
          return !(!RU || tU < 0 || tU >= St.e.length) && (0, nU.Fb)(RU) !== St.e[tU]
        })(RU, null === (pU = QU.current) || void 0 === pU ? void 0 : pU.name, Nt().player.length) || (Dt({
          e: UU,
          idx: RU,
          readInventory: Nt,
          itemInfo: KU.gameBridge.latest("itemInfo"),
          draggedInfoRef: QU,
          specialItemRef: eU,
          moveAmtIntoSlot: ZU,
          swapSlots: aU,
          moveIntoSlots: YU,
          removeItem: lt,
          removeDraggedInfoRef: IU,
          close: gU,
          canCraft: tU,
          variation: EU
        }), mU())
      }), [tU, gU, ZU, YU, IU, aU, EU, mU]), VU = (0, pU.useRef)(0), rU = (0, pU.useRef)(null), XU = (0, pU.useRef)(null), vU = (0, pU.useRef)(null), dU = (0, pU.useRef)(new Set), HU = (0, pU.useRef)({
        x: 0,
        y: 0
      }), SU = (0, pU.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), sU = (0, pU.useCallback)((() => (vU.current = null, SU.current.itemBeingDragged = !1, clearTimeout(rU.current), !!XU.current && (XU.current = null, mU(), !0))), [mU]);
      (0, pU.useEffect)((() => {
        sU(), dU.current.clear()
      }), [RU]);
      const yU = UU => void 0 !== UU && (dU.current.has(UU) || null !== vU.current && UU !== vU.current),
        kU = UU => {
          SU.current.isTouch = (0, ng.m)(UU)
        },
        FU = (0, pU.useCallback)((UU => RU => {
          const tU = (0, ng.m)(RU);
          if (tU || wU(RU.pageX, RU.pageY), PU)
            if (yU(RU.pointerId)) void 0 !== RU.pointerId && dU.current.add(RU.pointerId);
            else {
              if (kU(RU), tU) {
                VU.current = RU.timeStamp, SU.current.itemBeingDragged = !0, vU.current = RU.pointerId;
                const gU = (0, ng.f)(Nt(), UU);
                if (gU && gU.amount && gU.amount > 0) {
                  const gU = RU.pageX,
                    tU = RU.pageY,
                    pU = HU.current.x,
                    EU = HU.current.y;
                  clearTimeout(rU.current), rU.current = setTimeout((() => {
                    if (QU.current && QU.current.idx === UU && (Math.abs(gU - HU.current.x) < 20 && Math.abs(tU - HU.current.y) < 20 || pU === HU.current.x && EU === HU.current.y) && SU.current.itemBeingDragged) {
                      const UU = Nt(),
                        gU = UU.creative && !UU.chest && QU.current.idx >= Xg.e.numInvenSlots && null !== (0, ng.f)(UU, QU.current.idx).amount ? Xg.e.maxItemStackSize : QU.current.amount;
                      XU.current = {
                        initTouchX: RU.pageX,
                        initTouchY: RU.pageY,
                        maxAmount: gU
                      }, QU.current.amount = Math.ceil(QU.current.amount / 2), hU.current.style.transform = "translate(0.5rem, 0.5rem)", CU(!0), mU()
                    }
                  }), 500)
                }
              }
              BU(RU, UU)
            }
          else UU === og.c && (0, ng.l)(RU) && gU()
        }), [wU, BU, PU, gU, mU]),
        iU = (0, pU.useCallback)((UU => UU => {
          if (yU(UU.pointerId)) return;
          const RU = (0, ng.m)(UU);
          if (kU(UU), !sU()) {
            if (RU && QU.current && UU.timeStamp - VU.current > 150) {
              const RU = document.elementFromPoint(UU.clientX, UU.clientY);
              if (null !== RU) {
                const gU = RU.getAttribute("data-inven-idx");
                null !== gU ? BU(UU, parseInt(gU)) : RU.classList.contains("InventoryBackgroundScreen") && BU(UU, -1)
              }
            }
            wU(UU.pageX, UU.pageY)
          }
        }), [wU, BU, sU]);
      (0, pU.useEffect)((() => {
        let UU;
        const gU = ["pointerup", "pointercancel"],
          tU = UU => {
            dU.current.has(UU.pointerId) ? setTimeout((() => {
              dU.current.delete(UU.pointerId)
            }), 0) : UU.pointerId === vU.current && setTimeout((() => {
              vU.current === UU.pointerId && sU()
            }), 0)
          };
        if (RU) {
          for (const UU of gU) document.addEventListener(UU, tU, !0);
          if (!SU.current.isTouch) {
            const UU = HU.current;
            wU(UU.x, UU.y)
          }
          UU = UU => {
            UU.preventDefault(), yU(UU.pointerId) || (kU(UU), wU(UU.pageX, UU.pageY), XU.current && UU.pointerId === vU.current && (UU => {
              if (!QU.current) return XU.current = null, void mU();
              const {
                initTouchX: RU,
                maxAmount: gU
              } = XU.current, tU = (UU.pageX - RU) * XU.current.maxAmount / 160, pU = Math.ceil(gU / 2) + Math.ceil(tU);
              QU.current.amount = Math.min(gU, Math.max(1, pU)), mU()
            })(UU))
          }, document.addEventListener("pointermove", UU, !0)
        }
        return () => {
          document.removeEventListener("pointermove", UU, !0);
          for (const UU of gU) document.removeEventListener(UU, tU, !0)
        }
      }));
      const AU = (0, pU.useCallback)((() => {
          if (QU.current) {
            const UU = (0, ng.f)(Nt(), QU.current.idx);
            (!Lt(QU.current, UU) || UU.amount < QU.current.amount) && IU()
          }
        }), [IU]),
        zU = (0, pU.useCallback)((() => {
          const UU = QU.current;
          if (UU) {
            const RU = (0, ng.f)(Nt(), UU.idx);
            Lt(UU, RU) && (UU.attributes = RU.attributes)
          }
        }), []);
      return {
        draggedDomRef: hU,
        draggedInfoRef: QU,
        specialItemRef: eU,
        hoverInfoDomRef: WU,
        longHoldSplitInfoRef: XU,
        currHoveredIdx: qU,
        currHoveredDisplayInfo: GU,
        displayDraggedItemName: uU,
        forceRerenderIfVisible: mU,
        removeDraggedInfoRef: IU,
        checkDraggedItemConsistencyWithInven: AU,
        refreshDraggedAttributes: zU,
        swapSlots: aU,
        getPointerDownForIdx: FU,
        getPointerUpForIdx: iU,
        getSetHovering: oU,
        setCurrHoveredDisplayInfo: jU,
        moveFollowerTo: wU
      }
    }
    class Rp {
      constructor(UU) {
        this.snapshot = [], this.newSlots = new Set, this.update(UU, !1)
      }
      update(UU, RU) {
        const gU = UU.map((UU => {
          var RU;
          return UU ? {
            name: UU.name,
            amount: null !== (RU = UU.amount) && void 0 !== RU ? RU : 1
          } : null
        }));
        gU.forEach(((UU, gU) => {
          const tU = this.snapshot[gU],
            pU = (null === UU || void 0 === UU ? void 0 : UU.name) !== (null === tU || void 0 === tU ? void 0 : tU.name);
          (!UU || pU || UU.amount < tU.amount) && this.newSlots.delete(gU), RU && UU && (pU || UU.amount > tU.amount) && this.newSlots.add(gU)
        })), this.snapshot = gU
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(UU) {
        return this.newSlots.has(UU)
      }
    }
    const gp = (UU, RU, gU) => ({
      button: RU,
      shiftKey: gU,
      pageX: UU.clientX,
      pageY: UU.clientY,
      clientX: UU.clientX,
      clientY: UU.clientY,
      pointerType: "mouse"
    });

    function tp(UU) {
      const [RU, gU] = (0, pU.useState)(UU);
      return UU && !RU && gU(!0), (0, pU.useEffect)((() => {
        if (RU) return;
        let UU = !0;
        const tU = () => {
            UU && (UU = !1, gU(!0))
          },
          pU = "function" === typeof window.requestIdleCallback,
          EU = pU ? window.requestIdleCallback(tU, {
            timeout: 2e3
          }) : void 0,
          PU = setTimeout(tU, pU ? 2e3 : 1e3);
        return () => {
          UU = !1, clearTimeout(PU), void 0 !== EU && window.cancelIdleCallback(EU)
        }
      }), [RU]), RU
    }
    const pp = (0, pU.memo)((function(UU) {
      var RU;
      let {
        show: gU,
        onOpen: tU,
        onClose: EU,
        variation: TU
      } = UU;
      const GU = (0, pU.useRef)(null),
        jU = (0, pU.useRef)(null),
        uU = function(UU) {
          const [RU, gU] = (0, pU.useState)(!0), [tU, EU] = (0, pU.useState)(!1), PU = (0, pU.useRef)(null), TU = (0, pU.useRef)(null), KU = (0, qU.g)("_shield"), cU = (0, pU.useRef)(null), GU = (0, qU.g)("_health"), jU = (0, pU.useRef)(null);

          function uU(UU) {
            const RU = Date.now() + UU;
            RU < TU.current || (gU(!1), clearTimeout(PU.current), TU.current = RU, PU.current = setTimeout((() => {
              gU(!0)
            }), UU))
          }
          return (0, pU.useEffect)((() => {
            uU(ag);
            const UU = CU.p.subscribe("requestingPlayVideoAd", (() => {
              uU(ag)
            }));
            return () => {
              clearTimeout(PU.current), CU.p.unsubscribe(UU)
            }
          }), []), (0, pU.useEffect)((() => {
            (cU.current > KU || jU.current > GU) && uU(6e4), cU.current = KU, jU.current = GU
          }), [KU, GU]), (0, pU.useEffect)((() => {
            let RU = null;
            return UU ? RU = setTimeout((() => {
              EU(!0)
            }), 250) : EU(!1), () => {
              clearTimeout(RU)
            }
          }), [UU]), RU && tU
        }(gU);
      (0, wU.h)(Wg.c, null);
      const hU = (0, Wg.j)(),
        QU = hU.some((UU => UU.panel)),
        eU = (0, bU.h)("inventory", (UU => null !== UU.chest && (null !== UU.chest.ironChest || rt(UU.chest.numSlots)))),
        WU = tp(gU),
        fU = tp(gU),
        [xU, mU] = (0, pU.useState)([]),
        IU = (0, pU.useCallback)((UU => {
          mU((RU => RU.filter((RU => RU.id !== UU))))
        }), []),
        JU = (0, pU.useRef)(null),
        oU = (0, pU.useRef)(0),
        ZU = (0, pU.useCallback)((() => {
          JU.current && (oU.current = JU.current.scrollTop), EU()
        }), [EU]),
        aU = (0, qU.g)("inventoryItemsMoveable"),
        YU = (0, qU.g)("canCraft"),
        {
          clientEscMenuOptions: BU
        } = (0, SU.l)(["clientEscMenuOptions"]),
        VU = (0, pU.useRef)(null);
      VU.current || (VU.current = new Rp(KU.gameBridge.latest("inventory").player));
      const XU = VU.current,
        {
          draggedDomRef: vU,
          draggedInfoRef: dU,
          specialItemRef: HU,
          hoverInfoDomRef: sU,
          longHoldSplitInfoRef: yU,
          currHoveredIdx: kU,
          currHoveredDisplayInfo: FU,
          displayDraggedItemName: iU,
          forceRerenderIfVisible: AU,
          removeDraggedInfoRef: zU,
          checkDraggedItemConsistencyWithInven: MU,
          refreshDraggedAttributes: DU,
          swapSlots: LU,
          getPointerDownForIdx: NU,
          getPointerUpForIdx: lU,
          getSetHovering: OU,
          setCurrHoveredDisplayInfo: UR,
          moveFollowerTo: RR
        } = Up({
          show: gU,
          close: ZU,
          canCraft: YU,
          variation: TU,
          inventoryItemsMoveable: aU,
          setCraftFlyAnims: mU
        });
      (0, pU.useEffect)((() => {
        const UU = !gU && null !== KU.gameBridge.latest("inventory").chest;
        if (UU && KU.gameBridge.send("closeChest", null), gU || (XU.clearMarks(), OU(null)(!1)), UU) {
          Jg.e.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [gU]), (0, bU.d)("chestToggled", (UU => {
        if (UU ? tU() : gU && ZU(), UU) {
          Jg.e.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const gR = (0, zR.j)();
      (0, bU.d)("inventory", (UU => {
        let {
          player: RU
        } = UU;
        var tU, pU, EU;
        (XU.update(RU, !gU && gR.shown), HU.current) && (HU.current = (pU = HU.current, EU = null !== (tU = RU[HU.current.idx]) && void 0 !== tU ? tU : null, Lt(pU, EU) ? (pU.attributes = EU.attributes, null !== EU.amount && pU.amount > EU.amount && (pU.amount = EU.amount), pU) : null));
        DU(), null !== kU && OU(kU)(!0), AU()
      })), (0, pU.useEffect)((() => (KU.gameBridge.send("setInventoryOpen", gU), () => {
        KU.gameBridge.send("setInventoryOpen", !1)
      })), [gU]);
      const tR = (UU, RU) => {
        if (UU === og.d) return void(UU => {
          const RU = HU.current;
          if (!RU || null === (0, ng.f)(KU.gameBridge.latest("inventory"), RU.idx)) return;
          const gU = UU ? Math.max(RU.amount, 1) : 1,
            tU = RU.amount - gU;
          if (!KU.gameBridge.send("removeInventoryItem", {
              slot: RU.idx,
              amount: gU,
              drop: !0
            })) return;
          const pU = HU.current;
          pU && (pU.amount = Math.min(pU.amount, tU), pU.amount <= 0 && (HU.current = null)), AU()
        })(RU);
        const gU = null === UU ? null : (0, ng.f)(KU.gameBridge.latest("inventory"), UU);
        if (null !== gU) {
          var tU, pU, EU;
          const PU = RU && null !== (tU = gU.amount) && void 0 !== tU ? tU : 1;
          KU.gameBridge.send("removeInventoryItem", {
            slot: UU,
            amount: PU,
            drop: !0
          }), UU === (null === (pU = dU.current) || void 0 === pU ? void 0 : pU.idx) && (dU.current.amount -= PU, dU.current.amount <= 0 && zU(), AU()), UU === (null === (EU = HU.current) || void 0 === EU ? void 0 : EU.idx) && (HU.current = null, AU())
        }
      };
      (0, bU.d)("inventoryDropRequested", (UU => {
        gU && kU !== og.d && tR(kU, UU)
      }));
      const pR = (UU, RU) => {
        let gU = RU;
        if (RU === og.d) {
          if (!HU.current) return;
          gU = HU.current.idx
        }
        const tU = LU(UU, gU);
        if (tU && dU.current && (dU.current.idx === gU ? dU.current.idx = UU : dU.current.idx === UU && (dU.current.idx = gU)), tU && RU === og.d) {
          const UU = (0, ng.f)(KU.gameBridge.latest("inventory"), gU);
          HU.current = UU ? {
            idx: gU,
            name: UU.name,
            attributes: UU.attributes,
            amount: UU.amount
          } : null
        }
        AU()
      };
      (0, bU.d)("numberKeyPressed", (UU => {
        null !== kU && gU && pR(UU - 1, kU)
      })), (0, pU.useEffect)((() => {
        gU || (HU.current = null, zU(), UR(null))
      }), [gU, zU, UR, HU]);
      const ER = HU.current;
      (0, pU.useEffect)((() => {
        kU === og.d && OU(og.d)(!0)
      }), [ER, kU, OU]);
      const PR = () => {
        MU(), DU(), AU()
      };
      (0, bU.d)("chestRefreshed", PR), (0, bU.d)("inventorySynced", PR);
      const [TR, qR] = (0, pU.useState)(new Map), KR = null !== (RU = TR.get(TU)) && void 0 !== RU ? RU : null, cR = (UU, RU) => {
        qR((gU => {
          const tU = gU.get(UU);
          return tU && tU.name === RU.name && tU.Ec === RU.Ec ? gU : new Map(gU).set(UU, RU)
        }))
      };
      (0, wU.e)("craftingRecipesEdited", (() => {
        AU()
      })), (0, wU.e)(pt.d, (UU => {
        let {
          variation: RU,
          itemName: gU
        } = UU;
        cR(RU, {
          name: gU,
          Ec: 0
        })
      }));
      const [GR, jR] = (0, pU.useState)(null), [CR, hR] = (0, pU.useState)(null);
      (0, bU.d)("enchantingTableOpened", (UU => {
        let {
          position: RU,
          blockName: gU
        } = UU;
        jR(RU), hR(gU)
      }));
      const [QR, eR] = (0, pU.useState)(""), [WR, fR] = (0, pU.useState)(null);
      (0, pU.useEffect)((() => {
        gU && JU.current && (JU.current.scrollTop = oU.current)
      }), [gU]);
      return (UU => {
        const RU = (0, pU.useRef)(UU);
        RU.current = UU, (0, pU.useEffect)((() => {
          if (!UU.show) return;
          const gU = (UU, gU, tU, pU) => {
              const {
                getPointerDownForIdx: EU,
                getPointerUpForIdx: PU
              } = RU.current;
              EU(UU)(gp(gU, tU, pU)), PU(UU)(gp(gU, tU, pU))
            },
            tU = {
              primary: (UU, RU) => {
                gU(UU, RU, 0, !1)
              },
              secondary: (UU, RU) => {
                gU(UU, RU, 2, !1)
              },
              quickMove: (UU, RU) => {
                gU(UU, RU, 0, !0)
              },
              dropHeld: (UU, gU) => {
                RU.current.getPointerDownForIdx(og.c)(gp(gU, UU ? 0 : 2, !1))
              },
              dropSlot: (UU, gU) => {
                RU.current.dropFromIdx(UU, gU)
              },
              swapWithHotbar: (UU, gU) => {
                RU.current.swapWithHotbar(UU, gU)
              },
              cancel: () => {
                RU.current.removeDraggedInfoRef()
              },
              isHolding: () => !!RU.current.draggedInfoRef.current,
              hasItemAt: UU => {
                const {
                  draggedInfoRef: gU,
                  specialItemRef: tU
                } = RU.current;
                if (UU === og.d) return !!tU.current;
                const pU = (0, ng.f)(KU.gameBridge.latest("inventory"), UU);
                return !!pU && (0, yg.e)(UU, (0, ng.c)(pU), [gU.current, tU.current]).shown
              },
              hover: (UU, gU) => {
                const {
                  moveFollowerTo: tU,
                  getSetHovering: pU
                } = RU.current;
                tU(gU.clientX, gU.clientY), pU(null !== UU && void 0 !== UU ? UU : void 0)(null !== UU, void 0, {
                  pageX: gU.clientX,
                  pageY: gU.clientY
                })
              },
              moveTo: UU => {
                RU.current.moveFollowerTo(UU.clientX, UU.clientY)
              },
              close: () => {
                RU.current.close()
              }
            };
          return (0, fg.m)(tU)
        }), [UU.show])
      })({
        show: gU,
        close: ZU,
        draggedInfoRef: dU,
        specialItemRef: HU,
        getPointerDownForIdx: NU,
        getPointerUpForIdx: lU,
        getSetHovering: OU,
        moveFollowerTo: RR,
        removeDraggedInfoRef: zU,
        dropFromIdx: tR,
        swapWithHotbar: pR
      }), (0, pU.useEffect)((() => {
        CU.p.yh("inventoryDraggedItemUpdated", {
          draggedInfo: dU.current,
          specialItemInfo: HU.current,
          setHovered: OU,
          pointerDown: NU,
          pointerUp: lU,
          variation: YU ? TU : void 0,
          craftFlyAnims: xU
        })
      })), (0, cU.jsxs)(rU.c, {
        show: gU,
        style: {
          touchAction: gU ? "none" : void 0
        },
        children: [dU.current && (0, cU.jsx)(Bg, {
          draggedInfo: dU.current,
          toAddRef: vU
        }), dU.current && iU && (0, cU.jsx)(Vg, {
          className: "DraggedInvenItemName",
          displayInfo: Ot(dU.current),
          domRef: null
        }), !dU.current && FU && (0, cU.jsx)(Vg, {
          displayInfo: FU,
          domRef: sU
        }), yU.current && dU.current && (0, cU.jsx)(rg, {
          info: yU.current,
          draggedInfo: dU.current
        }), xU.map((UU => (0, cU.jsx)(bg.b, {
          anim: UU,
          onComplete: IU
        }, UU.id))), (0, cU.jsx)(PU.d, {
          show: gU,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: ZU,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: NU(og.c),
          pointerUp: lU(og.c),
          doGameplayStartStopOnShow: !0
        }), WU && (0, cU.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, cU.jsx)("div", {
            ref: GU,
            className: "InventoryAdOuter",
            children: (0, cU.jsx)(wg.b, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: GU
              },
              verticalAlign: "start",
              showing: gU && uU,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, cU.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, cU.jsxs)("div", {
              className: uR()("Inventory", {
                WithPanelButtons: QU,
                WideChestOpen: eU
              }),
              children: [(0, cU.jsx)("div", {
                className: "InventoryFiller"
              }), (0, cU.jsx)(Ig, {
                show: gU,
                buttons: hU
              }), (0, cU.jsxs)("div", {
                className: "InvenBody",
                children: [(0, cU.jsx)(Ht, {
                  variation: TU,
                  canCraft: YU,
                  show: gU,
                  creativeMounted: fU,
                  specialItemRef: HU,
                  draggedInfo: dU.current,
                  getSetHovering: OU,
                  getPointerDownForIdx: NU,
                  getPointerUpForIdx: lU,
                  enchantingTablePosition: GR,
                  enchantingTableBlockName: CR,
                  selectedCraftable: KR,
                  dispatchSelectedCraftable: UU => {
                    cR(TU, UU)
                  },
                  creativeScrollDiv: JU,
                  creativeSearchVal: QR,
                  setCreativeSearchVal: eR,
                  creativeCategory: WR,
                  setCreativeCategory: fR,
                  onCraft: function(UU, RU) {
                    let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (MU(), (UU || gU.length > 0) && mU((RU => {
                        const tU = [...RU],
                          pU = RU.filter((UU => "ingredient" === UU.kind)).length;
                        for (const UU of gU.slice(0, Math.max(0, 24 - pU))) tU.push({
                          id: (0, bg.f)(),
                          ...UU,
                          to: UU.to
                        });
                        return UU && tU.push({
                          id: (0, bg.f)(),
                          ...UU,
                          to: (0, ng.d)(UU.dc)
                        }), tU
                      })), null !== RU) {
                      var tU;
                      const UU = KU.gameBridge.latest("inventory");
                      (0, nU.Fb)(null === (tU = (0, ng.f)(UU, RU)) || void 0 === tU ? void 0 : tU.name) ? NU(RU)({
                        button: 0,
                        shiftKey: !0
                      }): LU(RU, UU.selectedSlot)
                    }
                  }
                }), (0, cU.jsx)(At, {
                  draggedInfo: dU.current,
                  specialItemInfo: HU.current,
                  craftFlyAnims: xU,
                  getSetHovering: OU,
                  getPointerDownForIdx: NU,
                  getPointerUpForIdx: lU,
                  variation: TU,
                  canCraft: YU,
                  isNewSlot: UU => BU.showNewItemIndicator && XU.isNew(UU)
                })]
              })]
            }), (0, cU.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, cU.jsx)("div", {
                ref: jU,
                className: "InventoryAd",
                children: (0, cU.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var Ep = gU(1403),
      Pp = gU(135);
    const Tp = (0, pU.memo)((function(UU) {
      let {
        show: RU,
        onOpen: gU,
        onClose: tU
      } = UU;
      const EU = (0, pU.useRef)(0),
        TU = () => (0, Ep.f)() && !(0, Ep.o)() && EU.current <= 2;
      RU = TU() && RU;
      const qU = () => {
        EU.current++, tU()
      };
      (0, wU.e)("ctrlCrouchWithoutFullscreen", (() => {
        TU() && gU()
      })), (0, wU.e)("displaymodeFullscreenChange", (UU => {
        RU && UU && qU()
      }));
      const KU = "crazygames" === Pp.t;
      return (0, cU.jsx)(PU.d, {
        close: qU,
        escDoesExit: !0,
        show: RU,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, cU.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, cU.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), KU && (0, cU.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, cU.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, cU.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!KU && (0, cU.jsx)(uU.j, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, Ep.t)(), qU()
              },
              children: (0, cU.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, cU.jsx)(uU.E, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                qU()
              },
              children: (0, cU.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var qp = gU(3290),
      Kp = gU(3306),
      cp = gU(1333),
      Gp = gU(3271),
      jp = gU(1339),
      Cp = gU(36150),
      hp = gU(3280),
      Qp = gU(3286);

    function ep(UU, RU) {
      return (0, Cp.c)(!0, UU, RU) ? () => {
        !async function(UU) {
          await Gp.d.refresh();
          const {
            data: RU,
            failed: gU
          } = Gp.d.getState();
          if (null === RU || gU) return;
          const tU = Gp.d.getExclusion(UU);
          if ("blocked" === tU) return;
          const pU = null === tU;
          cp.NotificationProvider.showCustomPopup({
            body: RU => {
              const gU = gU => ({
                text: hp.h[gU].text,
                onClick: () => {
                  RU(), (0, Qp.i)(gU, UU, null)
                }
              });
              return (0, cU.jsx)(jp.i, {
                title: pU ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: UU
                  }
                },
                secondary: pU ? gU("ignore") : void 0,
                confirm: gU("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: RU
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(UU)
      } : null
    }
    gU(3300);
    const Wp = (0, pU.memo)((function(UU) {
      let {
        show: RU,
        onOpen: gU,
        onClose: tU
      } = UU;
      const [EU, TU] = (0, pU.useState)(""), [qU, GU] = (0, pU.useState)(""), [jU, uU] = (0, pU.useState)(null), [CU, hU] = (0, pU.useState)(null), QU = (0, bU.k)("hiddenPlayerNames"), eU = {
        kind: "worldCodeLine",
        onSubmit: (UU, RU) => {
          tU(), KU.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: CU,
            gP: UU,
            details: RU
          })
        }
      }, WU = {
        kind: "player",
        shownPlayerName: (0, RR.e)(EU, QU),
        onSubmit: (UU, RU) => {
          tU(), (0, Kp.b)({
            playerId: qU,
            playerName: EU,
            chatMsgId: CU,
            policyId: UU,
            details: RU,
            onAccepted: ep(EU, QU)
          })
        }
      };
      return (0, wU.e)("OpenReportMenu", (UU => {
        let {
          playerEId: RU,
          playerName: tU,
          aP: pU,
          serverChatMsgId: EU
        } = UU;
        GU(RU), TU(tU), uU(pU), hU(EU), gU()
      })), (0, cU.jsx)(PU.d, {
        show: RU,
        close: tU,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, cU.jsx)("div", {
          className: "ReportPanel",
          children: RU && (0, cU.jsx)(qp.b, {
            reported: null === qU ? eU : WU,
            chatMessage: jU,
            inGame: !0,
            onCancel: tU
          })
        })
      })
    }));
    var fp = gU(36392);
    const xp = (0, pU.memo)((function(UU) {
      let {
        show: RU,
        onOpen: gU,
        onClose: tU
      } = UU;
      const {
        t: EU
      } = (0, DU.B)(), [TU, qU] = (0, pU.useState)(null), [GU, jU] = (0, pU.useState)(0);
      (0, wU.e)("OpenDiscordReportBox", (UU => {
        KU.gameBridge.send("requestDiscordReportKey", UU), jU(0), gU()
      }));
      const CU = () => {
        tU(), qU(null), jU(0)
      };
      return (0, wU.e)("setDiscordReportKey", (UU => {
        qU(UU)
      })), (0, cU.jsx)(PU.d, {
        show: RU,
        close: CU,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, cU.jsx)("div", {
          className: "ReportPanel",
          children: (0, cU.jsx)(jp.i, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(fp.b, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: CU
            },
            padStartsOn: "cancel",
            children: (0, cU.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, cU.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== TU && void 0 !== TU ? TU : EU("report:loadingReportKey")
              }), (0, cU.jsx)(uU.e, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(TU).catch((UU => {
                    console.error("Failed to copy report key:", UU)
                  })), jU(Date.now())
                },
                disabled: Date.now() - GU < 1e3 || !TU,
                children: Date.now() - GU < 1e3 ? EU("general:copied") : EU("general:copy")
              })]
            })
          })
        })
      })
    }));
    var mp = gU(1287);
    const Ip = {
        "game:sandbox": {
          "customLobbyBlock:classicLobbySpawn": {
            blocks: ["Spawn Block (White)"],
            tooltip: "customLobbyBlock:classicLobbySpawnDescription"
          }
        },
        "game:bedwars": {
          "customLobbyBlock:bedwarsBeds": {
            blocks: ["Red Bed", "Blue Bed", "Lime Bed", "Yellow Bed", "Cyan Bed", "White Bed", "Pink Bed", "Gray Bed"],
            tooltip: "customLobbyBlock:bedwarsBedsDescription"
          },
          "customLobbyBlock:bedwarsChests": {
            blocks: ["Chest", "Moonstone Chest"],
            tooltip: "customLobbyBlock:bedwarsChestsDescription"
          },
          "customLobbyBlock:bedwarsTeamSpawns": {
            blocks: ["Spawn Block (Red)", "Spawn Block (Blue)", "Spawn Block (Lime)", "Spawn Block (Yellow)", "Spawn Block (Cyan)", "Spawn Block (White)", "Spawn Block (Pink)", "Spawn Block (Gray)"],
            tooltip: "customLobbyBlock:bedwarsTeamSpawnsDescription"
          },
          "customLobbyBlock:bedwarsShopkeeperSpawns": {
            blocks: ["Wizard Shop Spawn Block", "Trader Shop Spawn Block"],
            tooltip: "customLobbyBlock:bedwarsShopkeeperSpawnsDescription"
          },
          "customLobbyBlock:bedwarsGenerators": {
            blocks: ["Generator Spawn Block (Red)", "Generator Spawn Block (Blue)", "Generator Spawn Block (Lime)", "Generator Spawn Block (Yellow)", "Generator Spawn Block (Cyan)", "Generator Spawn Block (White)", "Generator Spawn Block (Pink)", "Generator Spawn Block (Gray)", "Generator Spawn Block (Diamond)", "Generator Spawn Block (Moonstone)", "Generator Spawn Block (Ore)"],
            tooltip: "customLobbyBlock:bedwarsGeneratorsDescription"
          }
        },
        "game:skyWars": {
          "customLobbyBlock:skywarsBlocks": {
            blocks: ["Spawn Block (White)", "Chest", "Moonstone Chest"],
            tooltip: "customLobbyBlock:skywarsBlocksDescription"
          }
        },
        "game:cubeWarfare": {
          "customLobbyBlock:cubeWarfareSpawns": {
            blocks: ["Spawn Block (White)"],
            tooltip: "customLobbyBlock:cubeWarfareSpawnsDescription"
          }
        },
        "game:bridge": {
          "customLobbyBlock:bridgeSpawns": {
            blocks: ["Spawn Block (Red)", "Spawn Block (Blue)"],
            tooltip: "customLobbyBlock:bridgeSpawnsDescription"
          },
          "customLobbyBlock:bridgeGoals": {
            blocks: ["Goal Block (Red)", "Goal Block (Blue)"],
            tooltip: "customLobbyBlock:bridgeGoalsDescription"
          }
        },
        "game:rocketSpleef": {
          "customLobbyBlock:rocketSpleefSpawns": {
            blocks: ["Spawn Block (White)", "Drop Location Block"],
            tooltip: "customLobbyBlock:rocketSpleefSpawnsDescription"
          }
        },
        "game:rocketObby": {
          "customLobbyBlock:rocketObbyBlocks": {
            blocks: ["Spawn Block (White)", "Checkpoint Block", "Finish Block", "Obby Death Block", "Obby Absorb Block", "Obby Absorb Death Block"],
            tooltip: "customLobbyBlock:rocketObbyBlocksDescription"
          }
        }
      },
      Jp = (0, pU.memo)((function(UU) {
        let {
          show: RU,
          onOpen: gU,
          onClose: tU
        } = UU;
        const [EU, TU] = (0, pU.useState)(null), qU = (0, pU.useRef)(0), GU = (0, pU.useRef)(null), {
          t: jU
        } = (0, DU.B)();
        (0, wU.e)("EditCustomLobbyBlock", (UU => {
          let {
            pos: RU
          } = UU;
          TU(RU), null !== RU && gU(), GU.current.scrollTo(0, qU.current)
        }));
        const uU = UU => {
          KU.gameBridge.send("setCustomLobbyBlock", {
            pos: EU,
            blockName: UU
          }), tU()
        };
        return (0, cU.jsx)(PU.d, {
          className: "CustomLobbyBlockEditorOuter",
          close: tU,
          escDoesExit: !0,
          show: RU,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, cU.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: GU,
            onScroll: () => {
              qU.current = GU.current.scrollTop
            },
            children: (0, cU.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(Ip).map((UU => {
                let [RU, gU] = UU;
                return (0, cU.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, cU.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: jU(RU)
                  }), (0, cU.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(gU).map((UU => {
                      let [RU, {
                        tooltip: gU,
                        blocks: tU
                      }] = UU;
                      return (0, cU.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, cU.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [jU(RU), (0, cU.jsx)(zU.d, {
                            hoverInfo: jU(gU),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, cU.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: tU.map((UU => (0, cU.jsx)(wp, {
                            blockName: UU,
                            selectBlock: uU
                          }, UU)))
                        })]
                      }, RU)
                    }))
                  })]
                }, RU)
              }))
            })
          })
        })
      })),
      wp = (0, pU.memo)((function(UU) {
        var RU;
        let {
          blockName: gU,
          selectBlock: tU
        } = UU;
        const pU = (0, ft.c)(gU),
          EU = null !== (RU = void 0 === pU ? void 0 : (0, Wt.displayNameOf)(pU)) && void 0 !== RU ? RU : gU,
          PU = void 0 === pU ? void 0 : (0, Wt.descriptionOf)(pU);
        return (0, cU.jsx)(zU.g, {
          tooltipInner: (0, cU.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, cU.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, cU.jsx)(JU.e, {
                text: EU
              })
            }), PU && (0, cU.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, cU.jsx)(JU.e, {
                text: PU
              })
            })]
          }),
          children: (0, cU.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => tU(gU),
            children: (0, cU.jsx)(mg.c, {
              itemName: gU,
              amount: 1
            })
          })
        }, gU)
      }));
    var np = gU(2691),
      bp = gU(3931),
      op = gU(9027);

    function Zp() {
      const UU = (0, bU.k)("itemInfo");
      return (0, pU.useMemo)((() => function(UU) {
        return {
          getDefaultItemStat(RU, gU) {
            var tU;
            const pU = UU[RU];
            return "description" === gU ? null === pU || void 0 === pU ? void 0 : pU.description : null !== (tU = null === pU || void 0 === pU ? void 0 : pU.displayName) && void 0 !== tU ? tU : RU
          }
        }
      }(UU)), [UU])
    }
    const ap = (0, pU.memo)((function(UU) {
        var RU, gU, tU, EU, TU, qU, KU, GU, jU, uU, CU, hU, eU, WU, fU, xU, mU, IU, JU, nU, bU, oU, ZU;
        let {
          togglePointerLock: aU,
          show: YU,
          onOpen: BU,
          onClose: VU
        } = UU;
        const {
          t: rU
        } = (0, DU.B)(), XU = Zp(), vU = (0, pU.useRef)(null), dU = (0, pU.useRef)(bp.b.MobHungerLevel.Hungry), HU = (0, pU.useRef)(null), SU = (0, np.b)(), sU = (0, pU.useRef)(null), yU = (0, pU.useRef)(null), kU = vU.current;
        (0, pU.useEffect)((() => {
          if (!YU) return;
          const UU = op.g.openPet(sU.current);
          return yU.current = UU, () => {
            UU.close(), yU.current = null
          }
        }), [YU]), (0, pU.useEffect)((() => {
          YU && kU && yU.current.show(function(UU) {
            var RU;
            let {
              mobType: gU,
              mobSettings: tU
            } = UU;
            return {
              mobType: gU,
              variation: null !== (RU = tU.variation) && void 0 !== RU ? RU : "default",
              metaInfo: tU.metaInfo,
              tamed: !(0, Vt.E)(tU.ownerDbId)
            }
          }(kU))
        }), [YU, kU]), (0, pU.useEffect)((() => {
          const UU = () => {
            var UU;
            const RU = bp.b.getMobHungerLevel(null === (UU = vU.current) || void 0 === UU ? void 0 : UU.mobSettings.petInfo.lastFedAt);
            if (RU !== dU.current && (dU.current = RU, SU()), HU.current) {
              var gU;
              const UU = Date.now(),
                RU = bp.b.getNextStateAt(null === (gU = vU.current) || void 0 === gU ? void 0 : gU.mobSettings.petInfo.lastFedAt);
              let tU = Math.floor((RU - UU) / 1e3),
                pU = "";
              if (tU > 3600) {
                pU += Math.floor(tU / 60 / 60).toString().padStart(2, "0"), pU += ":", tU %= 3600
              }
              const EU = tU % 60;
              pU += Math.floor(tU / 60).toString().padStart(2, "0"), pU += ":", pU += EU.toString().padStart(2, "0"), HU.current.textContent = pU
            }
          };
          UU();
          const RU = setInterval(UU, 250);
          return () => {
            clearInterval(RU)
          }
        }), [kU, SU]), (0, wU.e)("showPetUi", (UU => {
          let {
            mobType: RU,
            mobSettings: gU
          } = UU;
          vU.current = {
            mobType: RU,
            mobSettings: gU
          }, YU || BU()
        }));
        const FU = null === (RU = vU.current) || void 0 === RU ? void 0 : RU.mobSettings.health,
          iU = null === (gU = vU.current) || void 0 === gU ? void 0 : gU.mobSettings.maxHealth,
          AU = bp.b.getFriendshipLevelInfo(null !== (tU = null === (EU = vU.current) || void 0 === EU ? void 0 : EU.mobSettings.petInfo.friendshipPoints) && void 0 !== tU ? tU : 0);
        return (0, cU.jsx)(PU.d, {
          className: "PetUIOuter",
          close: VU,
          escDoesExit: !0,
          show: YU,
          togglePointerLock: aU,
          forcePointerUnlock: YU,
          globallyUniqueKey: "PetUI",
          children: (0, cU.jsx)("div", {
            className: "PetUI",
            children: (0, cU.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, cU.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, cU.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (TU = null === (qU = vU.current) || void 0 === qU ? void 0 : qU.mobSettings.name) && void 0 !== TU ? TU : "Your Pet"
                }), (0, cU.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: sU
                })]
              }), (0, cU.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, Vt.E)(null === (KU = vU.current) || void 0 === KU ? void 0 : KU.mobSettings.petInfo.friendshipPoints) && (0, cU.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, cU.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: rU("mobAiPlugin:friendshipTitle")
                  }), (0, cU.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: bp.b.getIconsFromFriendshipPoints(null !== (GU = vU.current.mobSettings.petInfo.friendshipPoints) && void 0 !== GU ? GU : 0).map(((UU, RU) => (0, cU.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, cU.jsx)(mg.c, {
                        itemName: UU,
                        amount: 1
                      })
                    }, RU)))
                  }), (0, cU.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, cU.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, cU.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${AU.totalPointsForNextLevel>0?Math.max(AU.pointsIntoCurrentLevel/AU.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, cU.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: AU.totalPointsForNextLevel > 0 ? ` ${Math.ceil(AU.pointsIntoCurrentLevel)}/${Math.ceil(AU.totalPointsForNextLevel)}` : Math.ceil(AU.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, cU.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, cU.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: rU("mobAiPlugin:hungerTitle")
                  }), (0, cU.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: bp.b.hungerLevelIcons[dU.current].map(((UU, RU) => (0, cU.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, cU.jsx)(mg.c, {
                        itemName: UU,
                        amount: 1
                      })
                    }, RU)))
                  }), (0, cU.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [rU(bp.b.hungerLevelTranslations[dU.current].translationKey), dU.current !== bp.b.MobHungerLevel.Starving && !(0, Vt.E)(null === (jU = vU.current) || void 0 === jU ? void 0 : jU.mobSettings.petInfo.lastFedAt) && (0, cU.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [rU("mobAiPlugin:nextFeedIn", {
                        state: rU(bp.b.hungerLevelTranslations[dU.current + 1].translationKey)
                      }), ":", " ", (0, cU.jsx)("span", {
                        ref: HU
                      })]
                    })]
                  })]
                }), (0, cU.jsx)(zU.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, cU.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: rU("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, cU.jsxs)("div", {
                    className: uR()("PetUIQuickStatsItem", {
                      Disabled: (0, Vt.E)(FU) || (0, Vt.E)(iU)
                    }),
                    children: [(0, cU.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, cU.jsx)(mg.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, cU.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, Vt.E)(FU) || (0, Vt.E)(iU) ? "" : (0, cU.jsxs)(cU.Fragment, {
                        children: [Math.ceil(FU), (0, cU.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(iU)]
                        })]
                      })
                    })]
                  })
                }), (0, cU.jsx)(zU.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, cU.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: rU("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, cU.jsxs)("div", {
                    className: uR()("PetUIQuickStatsItem", {
                      Disabled: (0, Vt.E)(null === (uU = vU.current) || void 0 === uU ? void 0 : uU.mobSettings.attackDamage) || vU.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, cU.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, cU.jsx)(mg.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, cU.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (CU = vU.current) || void 0 === CU ? void 0 : CU.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, cU.jsx)(zU.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, cU.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: rU("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, cU.jsxs)("div", {
                    className: uR()("PetUIQuickStatsItem", {
                      Disabled: (0, Vt.E)(null === (hU = vU.current) || void 0 === hU ? void 0 : hU.mobSettings.secondaryAttackDamage) || vU.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, cU.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, cU.jsx)(mg.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, cU.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (eU = vU.current) || void 0 === eU ? void 0 : eU.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, cU.jsx)(zU.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, cU.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: rU("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, cU.jsxs)("div", {
                    className: uR()("PetUIQuickStatsItem", {
                      Disabled: (0, Vt.E)(null === (WU = vU.current) || void 0 === WU ? void 0 : WU.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, cU.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, cU.jsx)(mg.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, cU.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (fU = null === (xU = vU.current) || void 0 === xU || null === (mU = xU.mobSettings.baseRunningSpeed) || void 0 === mU ? void 0 : mU.toFixed(2)) && void 0 !== fU ? fU : ""
                    })]
                  })
                }), (0, cU.jsx)(zU.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, cU.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: rU("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, cU.jsxs)("div", {
                    className: uR()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (IU = vU.current) || void 0 === IU ? void 0 : IU.mobSettings.metaInfo)
                    }),
                    children: [(0, cU.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, cU.jsx)(mg.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, cU.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (JU = vU.current) || void 0 === JU ? void 0 : JU.mobSettings.metaInfo) ? (0, cU.jsx)(QU.c, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, Vt.E)(null === (nU = vU.current) || void 0 === nU ? void 0 : nU.mobSettings.tameInfo) && (0, cU.jsxs)(cU.Fragment, {
                  children: [(0, cU.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, cU.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, cU.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, cU.jsx)(Bp, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: bp.b.feedTextColours[bp.b.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, cU.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, cU.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: vU.current.mobSettings.petInfo.superlikedFoodKnown ? (0, cU.jsx)(Yp, {
                            food: vU.current.mobSettings.petInfo.superlikedFood
                          }) : (0, cU.jsx)(Bp, {
                            icon: "Question Mark",
                            displayName: {
                              translationKey: "mobAiPlugin:superlikedFoodUnknownTitle"
                            },
                            description: {
                              translationKey: "mobAiPlugin:superlikedFoodUnknownDescription"
                            }
                          })
                        })
                      })]
                    }), (0, cU.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, cU.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, cU.jsx)(Bp, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: bp.b.feedTextColours[bp.b.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, cU.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (bU = vU.current.mobSettings.tameInfo.likedFoods) || void 0 === bU ? void 0 : bU.filter((UU => !vU.current.mobSettings.petInfo.superlikedFoodKnown || UU !== vU.current.mobSettings.petInfo.superlikedFood)).map((UU => (0, cU.jsx)(Yp, {
                          food: UU
                        }, UU)))
                      })]
                    }), (0, cU.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, cU.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, cU.jsx)(Bp, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: bp.b.feedTextColours[bp.b.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, cU.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (oU = vU.current.mobSettings.tameInfo.neutralFoods) || void 0 === oU ? void 0 : oU.map((UU => (0, cU.jsx)(Yp, {
                          food: UU
                        }, UU)))
                      })]
                    }), (0, cU.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, cU.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, cU.jsx)(Bp, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: bp.b.feedTextColours[bp.b.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, cU.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (ZU = vU.current.mobSettings.tameInfo.dislikedFoods) || void 0 === ZU ? void 0 : ZU.map((UU => (0, cU.jsx)(Yp, {
                          food: UU
                        }, UU)))
                      })]
                    })]
                  }), vU.current.mobSettings.tameInfo.levelUpBonuses && (0, cU.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: bp.b.MAX_LEVEL + 1
                    }).map(((UU, RU) => {
                      const gU = RU;
                      if (0 === gU) return null;
                      const tU = vU.current.mobSettings.tameInfo.levelUpBonuses[gU],
                        pU = bp.b.getBonusDisplayInfo(XU, vU.current.mobSettings, vU.current.mobType, tU);
                      return (0, cU.jsxs)("div", {
                        className: uR()("PetUIFeedDropContainer", {
                          Selected: gU === bp.b.getFriendshipLevelInfo(vU.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, cU.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: gU
                          }).map(((UU, RU) => (0, cU.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, cU.jsx)(mg.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${gU}-${RU}`)))
                        }), (0, cU.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: pU && (0, cU.jsx)(Bp, {
                            icon: pU.icon,
                            displayName: pU.displayName,
                            description: pU.description
                          })
                        })]
                      }, gU)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      Yp = (0, pU.memo)((function(UU) {
        let {
          food: RU,
          includeDescription: gU = !1
        } = UU;
        const tU = Zp(),
          pU = tU.getDefaultItemStat(RU, "displayName"),
          EU = tU.getDefaultItemStat(RU, "description");
        return (0, cU.jsx)(Bp, {
          icon: RU,
          displayName: pU,
          description: gU ? EU : null
        })
      })),
      Bp = (0, pU.memo)((function(UU) {
        let {
          icon: RU,
          displayName: gU,
          description: tU,
          tintColor: pU,
          className: EU = "PetUIFoodItem"
        } = UU;
        return (0, cU.jsx)(zU.g, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, cU.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, cU.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, cU.jsx)(JU.e, {
                text: gU
              })
            }), tU && (0, cU.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, cU.jsx)(JU.e, {
                text: tU
              })
            })]
          }),
          children: (0, cU.jsx)("div", {
            className: EU,
            children: (0, cU.jsx)(mg.c, {
              itemName: RU,
              amount: 1,
              tintColor: pU
            })
          })
        })
      }));
    var Vp = gU(3420),
      rp = gU(1120),
      Xp = gU(1238),
      vp = gU(36413),
      dp = gU(36406),
      Hp = gU(994),
      Sp = gU(2198);

    function sp(UU) {
      let {
        peers: RU
      } = UU;
      const [gU, tU] = (0, pU.useState)(null), EU = (0, bU.k)("players");
      return (0, cU.jsx)("div", {
        className: "CodeEditorPresence",
        children: RU.map((UU => {
          var RU, pU;
          const PU = null !== (RU = null === (pU = EU.byId[UU.playerId]) || void 0 === pU ? void 0 : pU.cosmetics) && void 0 !== RU ? RU : {};
          return (0, cU.jsxs)("div", {
            className: uR()("PresenceIcon", {
              Viewer: !UU.isEditor
            }),
            style: {
              backgroundColor: UU.colour
            },
            onMouseEnter: () => {
              tU(UU.playerId)
            },
            onMouseLeave: () => {
              tU(null)
            },
            children: [(0, cU.jsx)(Sp.d, {
              cosmetics: PU
            }), gU === UU.playerId && (0, cU.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: UU.colour
              },
              children: UU.playerName
            })]
          }, UU.playerId)
        }))
      })
    }
    var yp = gU(616),
      kp = gU(36397),
      Fp = gU(36143),
      ip = gU(36419);

    function Ap(UU) {
      const RU = UU.split("/"),
        gU = [];
      for (let tU = 1; tU < RU.length; tU++) gU.push(RU.slice(0, tU).join("/"));
      return gU
    }

    function zp(UU) {
      return UU.slice(UU.lastIndexOf("/") + 1)
    }
    const Mp = (0, pU.memo)((function(UU) {
      var RU;
      let {
        files: gU,
        activePath: tU,
        canEdit: EU,
        directoryLinked: PU,
        pluginNames: TU,
        activePluginName: qU,
        activePluginFile: KU,
        onSelect: GU,
        onSelectPlugin: jU,
        onCreate: CU,
        onRename: hU,
        onRenameFolder: eU,
        onDelete: WU,
        onToggleDirectorySync: fU,
        schematics: xU,
        onManageSchematic: mU
      } = UU;
      const {
        t: IU
      } = (0, DU.B)(), JU = null !== (RU = (0, dp.c)(gU)) && void 0 !== RU ? RU : Xp.d, wU = Object.keys(gU), [nU, bU] = (0, pU.useState)((() => new Set)), oU = function(UU, RU, gU) {
        const tU = {
          folders: new Map,
          files: []
        };
        for (const PU of UU) {
          if (PU === RU) continue;
          let UU = tU;
          for (const RU of Ap(PU)) {
            let gU = UU.folders.get(RU);
            gU || (gU = {
              folders: new Map,
              files: []
            }, UU.folders.set(RU, gU)), UU = gU
          }
          UU.files.push(PU)
        }
        const pU = [];
        UU.includes(RU) && pU.push({
          kind: "file",
          path: RU,
          name: zp(RU),
          depth: 0
        });
        const EU = (UU, RU) => {
          const tU = [...UU.folders.entries()].sort(((UU, RU) => {
            let [gU] = UU, [tU] = RU;
            return gU.localeCompare(tU)
          }));
          for (const [PU, TU] of tU) {
            const UU = gU.has(PU);
            pU.push({
              kind: "folder",
              path: PU,
              name: zp(PU),
              depth: RU,
              collapsed: UU
            }), UU || EU(TU, RU + 1)
          }
          UU.files.sort(((UU, RU) => UU.localeCompare(RU)));
          for (const gU of UU.files) pU.push({
            kind: "file",
            path: gU,
            name: zp(gU),
            depth: RU
          })
        };
        return EU(tU, 0), pU
      }(wU, JU, nU);
      (0, pU.useEffect)((() => {
        bU((UU => {
          const RU = new Set(UU);
          let gU = !1;
          for (const pU of Ap(tU)) gU = RU.delete(pU) || gU;
          return gU ? RU : UU
        }))
      }), [tU]);
      const ZU = wU.length >= pg.y,
        aU = (UU, RU) => {
          if (UU.length > vp.o) return `Path must be at most ${vp.o} characters`;
          if (!(0, vp.l)(UU)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === UU) return "index.d.ts cannot be the world-code entry";
          const tU = !!RU && (0, dp.e)(RU, UU);
          if (RU && (0, dp.h)(RU) && !tU) return `Cannot rename ${RU} (only swapping ${Xp.d} and ${Xp.g} is allowed)`;
          if (UU in gU) return "A file with that path already exists";
          if ((0, dp.h)(UU) && !tU) {
            if ((UU === Xp.d ? Xp.g : Xp.d) in gU) return `World code cannot have both ${Xp.d} and ${Xp.g}`
          }
          return null
        },
        YU = UU => {
          cp.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === UU ? void 0 : `${UU}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: UU => aU(UU)
          }).getResult().then((UU => {
            "notificationTornDown" !== UU && null !== UU && "submit" === UU.type && CU(UU.value)
          }))
        },
        BU = UU => {
          cp.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: UU,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: RU => RU === UU ? "That is already the file's path" : aU(RU, UU)
          }).getResult().then((RU => {
            "notificationTornDown" !== RU && null !== RU && "submit" === RU.type && hU(UU, RU.value)
          }))
        },
        VU = UU => {
          const RU = UU => UU.replace(/\/+$/, "");
          cp.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: UU,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: gU => {
              const tU = RU(gU);
              if (tU === UU) return "That is already the folder's path";
              for (const [RU, pU] of(0, dp.n)(wU, UU, tU)) {
                const UU = aU(pU, RU);
                if (null !== UU) return UU
              }
              return null
            }
          }).getResult().then((gU => {
            "notificationTornDown" !== gU && null !== gU && "submit" === gU.type && eU(UU, RU(gU.value))
          }))
        },
        rU = UU => {
          cp.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: UU
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((RU => {
            !0 === RU && WU(UU)
          }))
        };
      return (0, cU.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, cU.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, cU.jsx)("span", {
            children: "Files"
          }), EU && !ZU && (0, cU.jsx)(uU.p, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              YU()
            },
            children: (0, cU.jsx)(QU.c, {
              name: "plus"
            })
          })]
        }), (0, cU.jsxs)("div", {
          className: "FileTreeList",
          children: [oU.map((UU => {
            const RU = UU.path;
            if ("folder" === UU.kind) return (0, cU.jsx)(Np, {
              path: RU,
              name: UU.name,
              depth: UU.depth,
              collapsed: UU.collapsed,
              onToggle: () => {
                var UU;
                UU = RU, bU((RU => {
                  const gU = new Set(RU);
                  return gU.delete(UU) || gU.add(UU), gU
                }))
              },
              canCreate: EU && !ZU,
              canRename: EU,
              onCreate: YU,
              onRename: VU
            }, `folder:${RU}`);
            const pU = (0, dp.h)(RU),
              PU = Xp.d in gU && Xp.g in gU,
              TU = !pU || PU,
              KU = null === qU && RU === tU;
            return (0, cU.jsx)(Op, {
              path: RU,
              label: UU.name,
              depth: UU.depth,
              isActive: KU,
              canRename: EU,
              onSelect: GU,
              onRename: BU,
              onDelete: rU,
              canDelete: TU && EU
            }, RU)
          })), (0, cU.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, cU.jsxs)("span", {
              children: ["Schematics (", Object.keys(xU).length, "/", ip.h, ")"]
            }), EU && (0, cU.jsx)(uU.p, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(xU).length >= ip.h,
              onClick: () => {
                mU("")
              },
              children: (0, cU.jsx)(QU.c, {
                name: "plus"
              })
            })]
          }), Object.keys(xU).sort().map((UU => (0, cU.jsx)(Op, {
            path: UU,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: mU
          }, UU))), TU.length > 0 && (0, cU.jsxs)(cU.Fragment, {
            children: [(0, cU.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, cU.jsx)("span", {
                children: "Plugins"
              })
            }), TU.map((UU => {
              var RU;
              const gU = kp.f[UU],
                tU = Object.keys(null !== (RU = null === gU || void 0 === gU ? void 0 : gU.files) && void 0 !== RU ? RU : {
                  "index.ts": ""
                }).sort(((UU, RU) => "index.ts" === UU ? -1 : "index.ts" === RU ? 1 : UU.localeCompare(RU)));
              return (0, cU.jsxs)("div", {
                children: [(0, cU.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, dp.x)(UU)
                }), tU.map((RU => (0, cU.jsx)(Op, {
                  path: RU,
                  nested: !0,
                  isActive: qU === UU && KU === RU,
                  canRename: !1,
                  onSelect: () => {
                    jU(UU, RU)
                  },
                  canDelete: !1
                }, RU)))]
              }, UU)
            }))]
          })]
        }), (0, cU.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, cU.jsx)(uU.e, {
            className: "FileTreeFooterButton",
            onClick: fU,
            children: IU(PU ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function Dp(UU) {
      return UU > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": UU
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function Lp(UU) {
      let {
        depth: RU
      } = UU;
      return (0, cU.jsx)(cU.Fragment, {
        children: Array.from({
          length: RU
        }, ((UU, RU) => (0, cU.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": RU
          }
        }, RU)))
      })
    }

    function Np(UU) {
      let {
        path: RU,
        name: gU,
        depth: tU,
        collapsed: pU,
        onToggle: EU,
        canCreate: PU,
        canRename: TU,
        onCreate: qU,
        onRename: KU
      } = UU;
      const GU = [];
      PU && GU.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          qU(RU)
        }
      }), TU && GU.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          KU(RU)
        }
      });
      const jU = Dp(tU);
      return (0, cU.jsxs)("div", {
        className: uR()("FileTreeItem FileTreeFolder", jU.className),
        style: jU.style,
        children: [(0, cU.jsx)(Lp, {
          depth: tU
        }), (0, cU.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !pU,
          onClick: EU,
          children: [(0, cU.jsx)(QU.c, {
            className: "FileTreeFolderCaret",
            name: pU ? "caret-right" : "caret-down"
          }), (0, cU.jsx)(QU.c, {
            className: "FileTreeFolderIcon",
            name: pU ? "folder" : "folder-open"
          }), gU]
        }), (0, cU.jsx)(lp, {
          path: RU,
          actions: GU
        })]
      })
    }

    function lp(UU) {
      let {
        path: RU,
        actions: gU
      } = UU;
      const tU = (0, pU.useRef)(null);
      return 0 === gU.length ? null : (0, cU.jsxs)("div", {
        ref: tU,
        className: "FileTreeItemActions",
        children: [(0, cU.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${RU}`,
          children: (0, cU.jsx)(QU.c, {
            name: "ellipsis"
          })
        }), (0, cU.jsx)(Fp.e, {
          triggerElementRef: tU,
          options: gU
        })]
      })
    }

    function Op(UU) {
      let {
        path: RU,
        label: gU = RU,
        depth: tU = 0,
        isActive: pU,
        canRename: EU,
        onSelect: PU,
        onRename: TU,
        onDelete: qU,
        canDelete: KU,
        nested: GU
      } = UU;
      const jU = [];
      EU && TU && jU.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          TU(RU)
        }
      }), KU && qU && jU.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          qU(RU)
        }
      });
      const uU = Dp(tU);
      return (0, cU.jsxs)("div", {
        className: uR()("FileTreeItem", uU.className, {
          Active: pU,
          Nested: GU
        }),
        style: uU.style,
        children: [(0, cU.jsx)(Lp, {
          depth: tU
        }), (0, cU.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: gU === RU ? void 0 : RU,
          onClick: () => {
            PU(RU)
          },
          children: gU
        }), (0, cU.jsx)(lp, {
          path: RU,
          actions: jU
        })]
      })
    }
    async function UE(UU) {
      const RU = (0, dp.c)(UU);
      if (!RU || "" === UU[RU].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: tU
      } = await Promise.all([gU.e(289), gU.e(290)]).then((() => gU(40875)));
      return (0, kp.d)(tU(UU))
    }
    var RE = gU(36423);

    function gE(UU, RU) {
      const gU = Object.keys(UU),
        tU = Object.keys(RU);
      if (gU.length !== tU.length) return !1;
      for (const pU of gU)
        if (!(pU in RU) || UU[pU] !== RU[pU]) return !1;
      return !0
    }

    function tE(UU, RU) {
      const gU = [],
        tU = [],
        pU = [];
      for (const EU of Object.keys(RU)) EU in UU ? UU[EU] !== RU[EU] && pU.push(EU) : gU.push(EU);
      for (const EU of Object.keys(UU)) EU in RU || tU.push(EU);
      return gU.sort(), tU.sort(), pU.sort(), {
        creates: gU,
        deletes: tU,
        updates: pU
      }
    }

    function pE(UU, RU) {
      var gU;
      const tU = {
          ...UU
        },
        pU = (0, dp.c)(RU),
        EU = (0, dp.c)(tU);
      if (Xp.d in tU && Xp.g in tU) {
        const UU = null !== pU && void 0 !== pU ? pU : Xp.g,
          gU = UU === Xp.d ? Xp.g : Xp.d;
        var PU;
        if (!(UU in tU)) tU[UU] = null !== (PU = RU[UU]) && void 0 !== PU ? PU : "";
        return delete tU[gU], tU
      }
      var TU;
      return pU && !(pU in tU) ? (EU || (tU[pU] = null !== (TU = RU[pU]) && void 0 !== TU ? TU : ""), tU) : (EU || pU || (tU[Xp.d] = null !== (gU = tU[Xp.d]) && void 0 !== gU ? gU : "", delete tU[Xp.g]), tU)
    }

    function EE(UU, RU) {
      const gU = (0, dp.c)(RU),
        tU = Xp.d in RU && Xp.g in RU;
      return UU.filter((UU => !(0, dp.h)(UU) || (!!tU || gU !== UU)))
    }
    async function PE(UU, RU, tU) {
      const pU = UU.getLobbyFiles(),
        EU = (0, pg.k)(tU, (0, dp.p)(pU, RU)),
        PU = await UU.ensureJoined(RU),
        TU = (0, vp.q)(PU.docKey);
      if (PU.doc === EU) return;
      for (let gU = 0; gU < 100; gU++) {
        const gU = UU.getCollabSnapshot();
        if (gU && (0, vp.q)(gU.docKey) === TU && UU.getActivePath() === RU) {
          if (UU.replaceActiveDoc(TU, EU)) return;
          await (0, Vt.J)(40)
        } else await (0, Vt.J)(40)
      }
      const {
        ChangeSet: qU
      } = await gU.e(285).then((() => gU(40700))), cU = UU.getCollabSnapshot(), GU = cU && (0, vp.q)(cU.docKey) === TU ? cU : PU;
      await async function(UU, RU, gU, tU) {
        const pU = UU.of({
            from: 0,
            to: gU.length,
            insert: tU
          }, gU.length),
          EU = JSON.stringify([{
            clientID: RU.clientID,
            changes: pU.toJSON()
          }]),
          PU = (0, vp.q)(RU.docKey);
        EU.length <= vp.d ? KU.gameBridge.send("sendCodeCollab", {
          uR: vp.b.Push,
          CR: PU,
          hR: RU.version,
          WR: EU
        }) : await (0, rp.postJsonWithMetricsCookiesAndJsonResponse)(`${RU.httpConfig.gsUrl}/code/collab-push`, Vp.s["collab-push"].toBuffer({
          gameNameWithVariation: RU.httpConfig.gameNameWithVariation,
          lobbyName: RU.httpConfig.lobbyName,
          docKey: PU,
          version: RU.version,
          updates: EU
        }), {
          retries: 0
        })
      }(qU, GU, GU.doc, EU)
    }
    class TE {
      constructor(UU) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = UU
      }
      async writeLobbyFiles(UU) {
        const RU = {
            ...this.bridge.getLobbyFiles()
          },
          gU = {
            ...RU
          };
        for (const {
            path: EU,
            text: PU
          }
          of UU) gU[EU] = PU;
        if (!UU.every((UU => {
            let {
              path: RU,
              text: tU
            } = UU;
            return (0, pg.k)(tU, (0, dp.p)(gU, RU)) === tU
          }))) return !1;
        const tU = [];
        try {
          for (const {
              path: RU,
              text: gU
            }
            of UU) tU.push(RU), RU in this.bridge.getLobbyFiles() || (this.bridge.createFile(RU, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(RU, !0)), await PE(this.bridge, RU, gU)
        } catch (pU) {
          for (const UU of tU) UU in RU ? await PE(this.bridge, UU, RU[UU]).catch((RU => {
            console.error("World Code AI: couldn't put back", UU, RU)
          })) : this.bridge.deleteFile(UU);
          throw pU
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const UU = await (0, RE.v)(this.bridge.getStorageKey());
        return !!UU && (this.handle = UU, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(UU), !0)
      }
      async unlinkFolder() {
        const UU = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, RE.d)(UU), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const UU = this.bridge.getStorageKey(),
          RU = await (0, RE.s)(UU);
        return !!RU && (!!await (0, RE.f)(RU, "readwrite") && (this.handle = RU, this.linked = !0, await (0, RE.E)(UU, RU), await this.scaffoldLocalTypes(RU), !0))
      }
      scaffoldLocalTypes(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const tU = (await UE(RU)).map((UU => kp.f[UU])),
              pU = tU.map((UU => {
                var RU;
                return `${UU.name}:${Object.keys(null!==(RU=null===UU||void 0===UU?void 0:UU.files)&&void 0!==RU?RU:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === pU) return;
            const {
              ensureLocalBloxdTypes: EU
            } = await Promise.all([gU.e(81), gU.e(287), gU.e(292)]).then((() => gU(40878)));
            await EU(UU, tU), this.scaffoldedPluginNamesKey = pU
          } catch (tU) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", tU)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(UU) {
        this.handle && await this.scaffoldLocalTypes(this.handle, UU), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(UU)
      }
      async onDocTextChanged(UU, RU) {
        if (!this.handle) return;
        const gU = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [UU]: RU
        })];
        this.running && (this.pendingDocText.set(UU, RU), gU.push(this.flushDocTextToDisk())), await Promise.all(gU)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const UU = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const RU = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [gU, tU] of RU) this.lastSynced[gU] !== tU && (await (0, RE.K)(UU, gU, tU), this.lastSynced = {
              ...this.lastSynced,
              [gU]: tU
            })
          }
        } catch (RU) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", RU), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
        } finally {
          this.flushingDocText = !1, this.applying = !1, this.settleAfterApplying()
        }
      }
      settleAfterApplying() {
        this.flushDocTextToDisk(), this.recheckDiskFiles()
      }
      async recheckDiskFiles() {
        if (this.running && this.handle && !this.applying && !this.recheckingDisk) {
          this.recheckingDisk = !0;
          try {
            await this.onDiskFilesChanged(await (0, RE.y)(this.handle))
          } catch (UU) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", UU)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, RE.f)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const RU = this.bridge.getLobbyFiles(),
              gU = await (0, RE.y)(this.handle);
            for (const UU of Object.keys(RU).filter(ip.e)) {
              if (gU[UU] === RE.m) return void this.bridge.setMessage(`Move ${UU} outside the linked folder before syncing its placeholder.`, "warning");
              gU[UU] = ip.r
            }
            if (gE(gU, RU)) {
              for (const UU of Object.keys(RU).filter(ip.e)) await (0, RE.K)(this.handle, UU, ip.r);
              return this.lastSynced = {
                ...gU
              }, void this.beginWatch()
            }
            const tU = await this.promptReconcile(function(UU) {
              return null !== (0, dp.c)(UU)
            }(gU));
            if ("unlink" === tU) return void await this.unlinkFolder();
            if ("dismissed" === tU) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === tU) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(gU);
                for (const UU of Object.keys(RU).filter(ip.e)) await (0, RE.K)(this.handle, UU, ip.r);
                this.lastSynced = {
                  ...await (0, RE.y)(this.handle)
                }
              } else await (0, RE.O)(this.handle, RU), this.lastSynced = {
                ...RU
              }
            } catch (UU) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", UU), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(UU) {
        return await new Promise((RU => {
          const gU = [{
              choice: "local",
              Button: uU.e,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: uU.e,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: uU.e,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            tU = (0, cU.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, cU.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, cU.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: UU ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, cU.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: gU.filter((RU => "local" !== RU.choice || UU)).map((UU => {
                  let {
                    choice: gU,
                    Button: tU,
                    labelKey: EU,
                    descriptionKey: PU
                  } = UU;
                  return (0, cU.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, cU.jsx)(tU, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (UU => {
                          pU.tearDownNotification(), RU(UU)
                        })(gU)
                      },
                      children: this.bridge.t(`codeEditor:${EU}`)
                    }), (0, cU.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${PU}`)
                    })]
                  }, gU)
                }))
              })]
            }),
            pU = cp.NotificationProvider.showCustomPopup({
              body: tU,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          pU.getResult().then((UU => {
            "notificationTornDown" === UU && RU("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, RE.G)(this.handle, (UU => {
          this.onDiskFilesChanged(UU)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (UU) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", UU)
        }
      }
      async onDiskFilesChanged(UU) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const RU = this.bridge.getLobbyFiles();
        let gU = pE(UU, this.lastSynced);
        for (const EU in RU)
          if ((0, ip.e)(EU) && gU[EU] === RE.m) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const tU = Object.keys(gU).filter((UU => (0, ip.e)(UU) && !(UU in RU)));
        tU.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const EU of Object.keys(RU).filter(ip.e))(EU in gU || tU.length > 0 || !(EU in this.lastSynced)) && (gU[EU] = ip.r);
        if (!gE(gU, UU)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(UU, gU), gU = pE(await (0, RE.y)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!gE(gU, this.lastSynced)) {
          this.applying = !0;
          try {
            const UU = tE(this.lastSynced, gU);
            if (await this.pushDiskDeltaToLobby(gU, RU), null !== this.lastLobbySeen)
              for (const gU of [...UU.creates, ...UU.updates, ...UU.deletes])(0, ip.e)(gU) || (gU in RU ? this.lastLobbySeen[gU] = RU[gU] : delete this.lastLobbySeen[gU]);
            this.lastSynced = {
              ...gU
            }
          } catch (pU) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", pU), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(UU, RU) {
        if (this.handle) {
          for (const gU of Object.keys(UU)) gU in RU || await (0, RE.C)(this.handle, gU);
          for (const [gU, tU] of Object.entries(RU)) UU[gU] !== tU && await (0, RE.K)(this.handle, gU, tU)
        }
      }
      async applyRemoteTreeToDisk(UU) {
        if (!this.handle) return;
        const RU = this.lastLobbySeen;
        if (null === RU) return void(this.lastLobbySeen = {
          ...UU
        });
        const gU = Object.keys(UU).filter((gU => RU[gU] !== UU[gU])),
          tU = Object.keys(RU).filter((RU => !(RU in UU)));
        if (0 !== gU.length || 0 !== tU.length) {
          this.applying = !0;
          try {
            for (const RU of [...tU, ...gU]) try {
              if (RU in UU) await (0, RE.K)(this.handle, RU, UU[RU]), this.lastSynced = {
                ...this.lastSynced,
                [RU]: UU[RU]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [RU]: UU[RU]
              };
              else {
                await (0, RE.C)(this.handle, RU);
                const UU = {
                  ...this.lastSynced
                };
                delete UU[RU], this.lastSynced = UU;
                const gU = {
                  ...this.lastLobbySeen
                };
                delete gU[RU], this.lastLobbySeen = gU
              }
            } catch (pU) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", pU), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(UU, RU) {
        const gU = function(UU, RU) {
          const gU = (0, dp.c)(UU),
            tU = (0, dp.c)(RU);
          return gU && tU && gU !== tU ? {
            from: gU,
            to: tU
          } : null
        }(UU, RU);
        return !!gU && (this.bridge.renameFile(gU.from, gU.to), await this.bridge.waitForLobbyPath(gU.to, !0), !0)
      }
      async applyLocalTreeToLobby(UU) {
        var RU;
        const gU = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), UU);
        const tU = this.bridge.getLobbyFiles(),
          pU = tE(tU, UU),
          EU = EE(pU.deletes, tU);
        for (const KU of pU.creates)(0, ip.e)(KU) || (this.bridge.createFile(KU, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(KU, !0));
        for (const KU of EU)(0, ip.e)(KU) || (this.bridge.deleteFile(KU), await this.bridge.waitForLobbyPath(KU, !1));
        if (!(0, dp.c)(this.bridge.getLobbyFiles()) && !(0, dp.c)(UU)) {
          if (this.bridge.createFile(Xp.d, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(Xp.d, !0), !this.handle) return;
          await (0, RE.K)(this.handle, Xp.d, ""), UU = {
            ...UU,
            [Xp.d]: ""
          }
        }
        const PU = this.bridge.getLobbyFiles();
        for (const KU of Object.keys(UU))(0, ip.e)(KU) || PU[KU] !== UU[KU] && await PE(this.bridge, KU, UU[KU]);
        const TU = this.bridge.getLobbyFiles(),
          qU = gU in TU ? gU : null !== (RU = (0, dp.c)(TU)) && void 0 !== RU ? RU : Xp.d;
        await this.bridge.ensureJoined(qU)
      }
      async pushDiskDeltaToLobby(UU, RU) {
        const gU = this.bridge.getActivePath(),
          tU = await this.renameLobbyEntryIfSwitched(RU, UU) ? this.bridge.getLobbyFiles() : RU,
          pU = tE(this.lastSynced, UU),
          EU = EE(pU.deletes, tU).filter((UU => UU in tU));
        for (const PU of pU.creates)(0, ip.e)(PU) || (PU in this.bridge.getLobbyFiles() || (this.bridge.createFile(PU, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(PU, !0)), await PE(this.bridge, PU, UU[PU]));
        for (const PU of EU)(0, ip.e)(PU) ? await this.bridge.deleteSchematic(PU) : (this.bridge.deleteFile(PU), await this.bridge.waitForLobbyPath(PU, !1));
        for (const PU of pU.updates)(0, ip.e)(PU) || await PE(this.bridge, PU, UU[PU]);
        gU in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== gU && await this.bridge.ensureJoined(gU)
      }
    }
    var qE = gU(1196);

    function KE() {
      const {
        websocketUrl: UU,
        gameNameWithVariation: RU,
        lobbyName: gU
      } = KU.gameBridge.latest("connectedGame");
      return {
        gsUrl: qE.clientSideServerUrls.getHttpUrlFromWebSocketUrl(UU),
        gameNameWithVariation: RU,
        lobbyName: gU
      }
    }
    async function cE(UU) {
      const {
        gsUrl: RU,
        gameNameWithVariation: gU,
        lobbyName: tU
      } = KE();
      return await (0, rp.postBinaryWithMetricsCookiesAndCustomResponse)(`${RU}/code/schematics`, Vp.Yj.schematics.toBuffer({
        gameNameWithVariation: gU,
        lobbyName: tU,
        request: JSON.stringify(UU)
      }), {
        retries: 0
      }, rp.HttpPayloadType.json)
    }
    var GE = gU(35944);

    function jE(UU) {
      let {
        path: RU,
        revision: gU
      } = UU;
      const [tU, EU] = (0, pU.useState)(""), [PU, TU] = (0, pU.useState)(!1), [qU, KU] = (0, pU.useState)(0);
      return (0, pU.useEffect)((() => {
        let UU = !1;
        return EU(""), TU(!1), cE({
          action: "preview",
          path: RU
        }).then((RU => {
          UU || EU(`data:image/webp;base64,${RU.previewBase64}`)
        })).catch((RU => {
          console.error("Could not load schematic preview", RU), UU || TU(!0)
        })), () => {
          UU = !0
        }
      }), [RU, gU, qU]), (0, cU.jsxs)("div", {
        className: "SchematicPreview",
        children: [tU && (0, cU.jsx)("img", {
          src: tU,
          alt: `Preview of ${RU}`
        }), !tU && !PU && (0, cU.jsx)(oU.d, {
          loaderType: "Secondary"
        }), PU && (0, cU.jsxs)(cU.Fragment, {
          children: [(0, cU.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, cU.jsx)(uU.e, {
            onClick: () => {
              KU(qU + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function uE(UU) {
      var RU;
      let {
        initialPath: gU,
        onChanged: tU,
        onClose: EU
      } = UU;
      const PU = "" === gU,
        [TU, qU] = (0, pU.useState)(null),
        [KU, GU] = (0, pU.useState)(gU),
        [jU, CU] = (0, pU.useState)(!1),
        [hU, QU] = (0, pU.useState)(!1),
        [eU, WU] = (0, pU.useState)(null),
        [fU, xU] = (0, pU.useState)(!1),
        [mU, IU] = (0, pU.useState)(""),
        JU = (0, pU.useRef)(null),
        wU = (0, pU.useRef)(!1),
        nU = (0, pU.useRef)(!0);
      (0, pU.useEffect)((() => (nU.current = !0, cE({
        action: "state"
      }).then((UU => {
        nU.current && qU(UU)
      })).catch((UU => {
        console.error("Could not load schematic assets", UU), nU.current && IU("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        nU.current = !1
      })), []);
      const bU = null === TU || void 0 === TU ? void 0 : TU.assets[gU],
        oU = Object.keys(null !== (RU = null === TU || void 0 === TU ? void 0 : TU.assets) && void 0 !== RU ? RU : {}).length,
        ZU = KU.trim(),
        aU = ZU ? (0, ip.e)(ZU) ? null !== TU && void 0 !== TU && TU.assets[ZU] && (PU || ZU !== gU) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        YU = !!ZU && !aU && (PU ? oU < ip.h : ZU !== gU),
        BU = fU || !TU;
      async function VU(UU) {
        if (!wU.current && nU.current) {
          wU.current = !0, xU(!0), IU("");
          try {
            const RU = await cE({
              ...UU,
              expectedRevision: TU.revision
            });
            tU(RU), nU.current && EU()
          } catch (gU) {
            var RU;
            if (console.error("Schematic asset operation failed", gU), nU.current) IU(gU instanceof iU.e ? null !== (RU = gU.errorMessageForUser) && void 0 !== RU ? RU : gU.message : String(gU));
            try {
              const UU = await cE({
                action: "state"
              });
              tU(UU), nU.current && qU(UU)
            } catch (pU) {
              console.error("Could not refresh schematic assets", pU)
            }
          } finally {
            wU.current = !1, nU.current && xU(!1)
          }
        }
      }
      return (0, cU.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, cU.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: PU ? "New schematic" : jU ? "Rename schematic" : "Schematic"
        }), mU && (0, cU.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: mU
        }), !TU && !mU && (0, cU.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, cU.jsxs)("fieldset", {
          disabled: BU,
          children: [PU || jU ? (0, cU.jsxs)("label", {
            className: "SchematicField",
            children: [(0, cU.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, cU.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, cU.jsx)(bR.d, {
                className: "InputGenericPopupInput",
                defaultValue: gU,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: GU
              }, jU ? "rename" : "create")
            })]
          }) : (0, cU.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: gU
          }), (PU || jU) && aU && (0, cU.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: aU
          }), PU ? (0, cU.jsxs)(cU.Fragment, {
            children: [oU >= ip.h && (0, cU.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", ip.h, " maximum)."]
            }), hU ? (0, cU.jsxs)(cU.Fragment, {
              children: [(0, cU.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, cU.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": BU || !YU,
                children: (0, cU.jsx)(GE.c, {
                  loading: null === eU,
                  schematics: null !== eU && void 0 !== eU ? eU : [],
                  disableAutoExport: !0,
                  onSchematicPicked: UU => {
                    !BU && YU && VU({
                      action: "profile",
                      path: ZU,
                      schematicId: UU.schematicId
                    })
                  }
                })
              }), (0, cU.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, cU.jsx)(uU.e, {
                  className: "InputGenericPopupButton",
                  disabled: BU,
                  onClick: () => {
                    QU(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, cU.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, cU.jsx)(uU.e, {
                className: "InputGenericPopupButton",
                disabled: BU || !YU,
                onClick: () => {
                  JU.current.click()
                },
                children: "Upload Schematic"
              }), (0, cU.jsx)(uU.e, {
                className: "InputGenericPopupButton",
                disabled: BU || !YU,
                onClick: () => {
                  !async function() {
                    if (QU(!0), IU(""), !eU) try {
                      const UU = await (0, rp.postJsonWithMetricsCookiesAndJsonResponse)(`${qE.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      nU.current && WU(UU)
                    } catch (UU) {
                      console.error("Could not load profile schematics", UU), nU.current && (QU(!1), IU("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, cU.jsx)("input", {
              ref: JU,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: UU => {
                var RU;
                const gU = null === (RU = UU.target.files) || void 0 === RU ? void 0 : RU[0];
                if (UU.target.value = "", !gU) return;
                if (gU.size > ip.l) return void IU("The schematic file is too large.");
                const tU = ZU;
                xU(!0);
                const pU = new FileReader;
                pU.onload = () => {
                  VU({
                    action: "upload",
                    path: tU,
                    base64: String(pU.result).split(",")[1]
                  })
                }, pU.onerror = () => {
                  console.error("Could not read schematic file", pU.error), nU.current && (xU(!1), IU("Could not read the selected file."))
                }, pU.readAsDataURL(gU)
              }
            })]
          }) : bU ? (0, cU.jsxs)(cU.Fragment, {
            children: [!jU && (0, cU.jsx)(jE, {
              path: gU,
              revision: TU.revision
            }), !jU && (0, cU.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(bU.byteSize / 1024), " KB \xb7 ", bU.dimensions.join(" \xd7 "), " blocks"]
            }), (0, cU.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: jU ? (0, cU.jsxs)(cU.Fragment, {
                children: [(0, cU.jsx)(uU.e, {
                  className: "InputGenericPopupButton",
                  disabled: BU || !YU,
                  onClick: () => {
                    VU({
                      action: "rename",
                      path: gU,
                      newPath: ZU
                    })
                  },
                  children: "Rename"
                }), (0, cU.jsx)(uU.e, {
                  className: "InputGenericPopupButton",
                  disabled: BU,
                  onClick: () => {
                    CU(!1), GU(gU)
                  },
                  children: "Cancel"
                })]
              }) : (0, cU.jsxs)(cU.Fragment, {
                children: [(0, cU.jsx)(uU.e, {
                  className: "InputGenericPopupButton",
                  disabled: BU,
                  onClick: () => {
                    CU(!0)
                  },
                  children: "Rename"
                }), (0, cU.jsx)(uU.E, {
                  className: "InputGenericPopupButton",
                  disabled: BU,
                  onClick: () => {
                    VU({
                      action: "remove",
                      path: gU
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : TU && (0, cU.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function CE(UU) {
      if ("string" !== typeof UU) return null;
      try {
        const RU = JSON.parse(UU);
        return (0, dp.j)(null === RU || void 0 === RU ? void 0 : RU.worldCodeEngine) && "boolean" === typeof RU.engineLocked && function(UU) {
          if (null === UU) return !0;
          const RU = null === UU || void 0 === UU ? void 0 : UU.location;
          return "string" === typeof(null === UU || void 0 === UU ? void 0 : UU.reason) && (null === RU || "string" === typeof(null === RU || void 0 === RU ? void 0 : RU.path) && Number.isInteger(RU.line))
        }(RU.fallback) ? RU : (console.error("[CodeCollab] Malformed engine settings", UU), null)
      } catch (RU) {
        return console.error("[CodeCollab] Failed to parse engine settings", RU), null
      }
    }

    function hE(UU) {
      let {
        fallback: RU,
        onGoToLine: gU
      } = UU;
      const {
        t: tU
      } = (0, DU.B)(), {
        location: pU
      } = RU;
      return (0, cU.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [tU("codeEditorEngine:notice", {
          reason: RU.reason
        }), pU && (0, cU.jsxs)(cU.Fragment, {
          children: [" ", (0, cU.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              gU(pU.path, pU.line)
            },
            children: tU("codeEditorEngine:goToLine", {
              line: String(pU.line)
            })
          })]
        })]
      })
    }
    var QE = gU(4598);

    function eE(UU) {
      let {
        label: RU,
        hint: gU,
        checked: tU,
        onChange: pU
      } = UU;
      return (0, cU.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, cU.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, cU.jsx)("span", {
            children: RU
          }), (0, cU.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: gU
          })]
        }), (0, cU.jsx)("span", {
          className: "SwitchContainer",
          children: (0, cU.jsx)(xR.d, {
            className: "SwitchCheckbox",
            checked: tU,
            onChange: UU => {
              pU(UU.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function WE(UU) {
      let {
        engine: RU,
        onSetEngine: gU,
        aiHints: tU,
        variation: pU
      } = UU;
      const {
        t: EU
      } = (0, DU.B)();
      return (0, cU.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, cU.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: EU("codeEditor:moreOptions")
        }), RU && (0, cU.jsx)(eE, {
          label: EU("codeEditorEngine:toggle"),
          hint: EU("codeEditorEngine:toggleHint"),
          checked: "ses" === RU,
          onChange: UU => {
            gU(UU ? "ses" : "quickjs")
          }
        }), tU && (0, cU.jsx)(eE, {
          label: EU("codeEditorAiHints:toggle"),
          hint: EU("codeEditorAiHints:toggleHint"),
          checked: tU.shown,
          onChange: tU.setShown
        }), pU && (0, cU.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, cU.jsx)(QE.g, {
            label: "codeEditor:variationLabel",
            children: (0, cU.jsx)(bR.d, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: pU.name,
              onValueChange: pU.setName,
              onEnter: pU.reload
            })
          }), (0, cU.jsx)(uU.t, {
            className: "CodeEditorButton",
            onClick: pU.reload,
            children: EU("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var fE = gU(36425),
      xE = gU(36427);

    function mE(UU) {
      let {
        close: RU
      } = UU;
      const {
        t: gU
      } = (0, DU.B)(), tU = [{
        name: gU("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: gU("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: gU("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, cU.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, cU.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: gU("codeEditor:tutorialsTitle")
        }), (0, cU.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: tU.map((UU => (0, cU.jsx)(uU.e, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              RU(), (0, xE.K)(UU.tutorial)
            },
            children: UU.name
          }, UU.tutorial)))
        })]
      })
    }
    var IE = gU(115),
      JE = gU(36134),
      wE = gU(8412);
    const nE = (0, pU.forwardRef)((function(UU, RU) {
      let {
        value: gU,
        onChange: tU,
        onSubmit: pU,
        placeholder: EU,
        maxLength: PU,
        rows: TU = 2,
        allowNewLines: qU = !1,
        onKeyDown: KU,
        before: GU
      } = UU;
      const {
        t: jU
      } = (0, DU.B)(), CU = "" !== gU.trim(), hU = () => {
        CU && pU()
      };
      return (0, cU.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [GU, (0, cU.jsx)("textarea", {
          ref: RU,
          className: "PanelPromptInput",
          value: gU,
          maxLength: PU,
          rows: TU,
          placeholder: EU,
          spellCheck: !1,
          autoComplete: "off",
          onChange: UU => {
            tU(qU ? UU.target.value : UU.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: UU => {
            UU.nativeEvent.isComposing || 229 === UU.nativeEvent.keyCode ? UU.stopPropagation() : "Escape" !== UU.key && (UU.stopPropagation(), null === KU || void 0 === KU || KU(UU), UU.defaultPrevented || "Enter" !== UU.key || qU && UU.shiftKey || (UU.preventDefault(), hU()))
          }
        }), (0, cU.jsx)(uU.e, {
          className: "PanelPromptSend",
          disabled: !CU,
          onClick: hU,
          ariaLabel: jU("codeEditorPanels:send"),
          children: (0, cU.jsx)(QU.c, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function bE(UU) {
      let {
        inputRef: RU
      } = UU;
      const {
        t: gU
      } = (0, DU.B)(), {
        messages: tU,
        reportedPlayers: EU,
        channel: PU
      } = (0, wE.p)(), [TU, qU] = (0, pU.useState)(""), KU = (0, pU.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, cU.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, cU.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, cU.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: gU("codeEditorChat:title")
          })
        }), 0 === tU.length ? (0, cU.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: gU("codeEditorChat:empty")
        }) : (0, cU.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, cU.jsx)(JE.b, {
            messages: tU,
            reportedPlayers: EU
          })
        }), (0, cU.jsx)(nE, {
          ref: RU,
          value: TU,
          onChange: qU,
          onSubmit: () => {
            (0, wE.l)(TU), qU(""), KU.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: nU.cd,
          rows: 1,
          placeholder: PU ? gU("touchOnly" === (0, IE.b)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: PU.channelName
          }) : gU("codeEditorChat:placeholder"),
          before: PU && (0, cU.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: PU.elementBgColor
            },
            onClick: () => {
              wE.e.selectNextChannel(), RU.current.focus()
            },
            children: (0, cU.jsx)(JU.e, {
              text: PU.elementContent
            })
          }),
          onKeyDown: UU => {
            const RU = TU === KU.current.text;
            if ("ArrowUp" !== UU.key && "ArrowDown" !== UU.key || !RU && "" !== TU) "Tab" === UU.key && !UU.shiftKey && PU && (UU.preventDefault(), wE.e.selectNextChannel());
            else {
              UU.preventDefault();
              const gU = RU ? KU.current.stepsBack : 0;
              KU.current = (0, wE.h)(gU + ("ArrowUp" === UU.key ? 1 : -1)), qU(KU.current.text)
            }
          }
        })]
      })
    }
    var oE = gU(36430);

    function ZE(UU) {
      let {
        FG: RU,
        worldPanel: gU,
        closeWorld: tU,
        aiShown: pU,
        defaultWidth: EU,
        children: PU
      } = UU;
      const TU = "hidden" !== RU;
      return (0, cU.jsx)(oE.e, {
        side: "right",
        defaultSize: TU ? "max(18rem, 40%)" : EU,
        covers: "expanded" === RU ? "always" : TU || pU ? "narrow" : void 0,
        children: (0, cU.jsxs)("div", {
          className: uR()("CodeEditorRightColumn", {
            WorldExpanded: "expanded" === RU
          }),
          children: [TU && (0, cU.jsx)(oE.e, {
            side: "top",
            onClose: tU,
            children: gU
          }), PU]
        })
      })
    }
    var aE = gU(1836),
      YE = gU(1943),
      BE = gU(1293);
    class VE {
      constructor(UU, RU, gU) {
        this.measure = UU, this.apply = RU, this.now = gU, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var UU, RU;
        return null !== (UU = null === (RU = this.last) || void 0 === RU ? void 0 : RU.rect) && void 0 !== UU ? UU : null
      }
      sync() {
        const UU = function(UU) {
          const RU = Math.round(UU.left),
            gU = Math.round(UU.top);
          return {
            left: RU,
            top: gU,
            width: Math.round(UU.right) - RU,
            height: Math.round(UU.bottom) - gU
          }
        }(this.measure());
        if (UU.width <= 0 || UU.height <= 0) return;
        const RU = this.now(),
          gU = this.last;
        let tU = {
          width: UU.width,
          height: UU.height
        };
        null === gU || UU.width === gU.rect.width && UU.height === gU.rect.height || (this.resizing = RU - this.resizedAt < 100, this.resizedAt = RU);
        const pU = null !== gU && this.resizing && RU - this.resizedAt < 100 && (UU.width !== gU.bufferSize.width || UU.height !== gU.bufferSize.height);
        pU && (this.stretchedAt ??= RU), pU && RU - this.stretchedAt < 250 ? tU = gU.bufferSize : this.stretchedAt = null;
        const EU = {
          rect: UU,
          bufferSize: tU
        };
        var PU, TU;
        null !== gU && (TU = EU, (PU = gU).rect.left === TU.rect.left && PU.rect.top === TU.rect.top && PU.rect.width === TU.rect.width && PU.rect.height === TU.rect.height && PU.bufferSize.width === TU.bufferSize.width && PU.bufferSize.height === TU.bufferSize.height) || (this.last = EU, this.apply(EU))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function rE(UU) {
      const {
        style: RU
      } = document.documentElement;
      for (const [gU, tU] of [
          ["--worldViewLeft", null === UU || void 0 === UU ? void 0 : UU.left],
          ["--worldViewTop", null === UU || void 0 === UU ? void 0 : UU.top],
          ["--worldViewWidth", null === UU || void 0 === UU ? void 0 : UU.width],
          ["--worldViewHeight", null === UU || void 0 === UU ? void 0 : UU.height]
        ]) void 0 === tU ? RU.removeProperty(gU) : RU.setProperty(gU, `${tU}px`)
    }
    var XE = gU(1637),
      vE = gU(1846);

    function dE(UU, RU) {
      (0, pU.useEffect)((() => {
        if (!UU) return;
        const gU = UU => {
          var gU;
          "Escape" === UU.key ? (UU.stopPropagation(), UU.preventDefault(), RU()) : (gU = UU.code, Object.entries(Pg.r).some((UU => {
            let [RU, tU] = UU;
            const pU = vE.d[RU];
            return pU.includes("ui") && !pU.includes("core") && tU.includes(gU)
          })) && !(0, XE.isTextEntry)(UU.target) && UU.preventDefault())
        };
        window.addEventListener("keydown", gU, !0);
        const tU = (0, sU.m)(RU);
        return () => {
          window.removeEventListener("keydown", gU, !0), tU()
        }
      }), [UU, RU])
    }

    function HE() {
      return (0, mp.j)().some((UU => UU !== mp.c))
    }

    function SE(UU, RU) {
      return UU.map((UU => RU ? String(UU) : UU.toFixed(1))).join(", ")
    }

    function sE(UU) {
      let {
        freeCamera: RU,
        picking: gU,
        hovered: tU
      } = UU;
      const {
        t: EU
      } = (0, DU.B)(), PU = (0, pU.useRef)(null), TU = (0, pU.useRef)(null);
      return (0, pU.useEffect)((() => {
        const UU = (UU, RU) => {
            UU.textContent !== RU && (UU.textContent = RU)
          },
          gU = () => {
            const gU = RU ? KU.gameBridge.lookup("freeCameraPos", null) : null;
            UU(PU.current, SE(null !== gU && void 0 !== gU ? gU : KU.gameBridge.lookup("localPos", null), !1));
            const tU = KU.gameBridge.lookup("targetedBlockPos", null);
            UU(TU.current, tU ? SE(tU, !0) : "-")
          };
        return gU(), (0, BE.B)(gU)
      }), [RU]), (0, cU.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, cU.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: EU(RU ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, cU.jsx)("span", {
          ref: PU
        }), (0, cU.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: EU("codeEditorWorld:lookingAt")
        }), (0, cU.jsx)("span", {
          ref: TU,
          hidden: gU
        }), gU && (0, cU.jsxs)(cU.Fragment, {
          children: [(0, cU.jsx)("span", {
            children: tU ? SE(tU.pos, !0) : "-"
          }), tU && (0, cU.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: tU.name
          })]
        })]
      })
    }
    var yE = gU(36437);

    function kE(UU) {
      const RU = UU.currentTarget.getBoundingClientRect();
      return {
        x: (UU.clientX - RU.left) / RU.width,
        y: (UU.clientY - RU.top) / RU.height
      }
    }

    function FE(UU) {
      const [RU, gU] = (0, pU.useState)(!1), [tU, EU] = (0, pU.useState)(null), PU = (0, pU.useRef)(null);
      (0, pU.useEffect)((() => {
        if (!RU) return;
        let UU = null,
          gU = null,
          tU = 1 / 0;
        const pU = (0, BE.t)((RU => {
          tU += RU;
          const pU = PU.current;
          if (pU === gU && tU < 100) return;
          gU = pU, tU = 0;
          const TU = pU && KU.gameBridge.lookup("blockAtViewPoint", pU);
          var qU, cU;
          (qU = TU) === (cU = UU) || null !== qU && null !== cU && qU.name === cU.name && (0, yE.c)(qU.pos, cU.pos) && (0, yE.c)(qU.normal, cU.normal) || (UU = TU, EU(TU), KU.gameBridge.send("setBlockHighlight", TU))
        }));
        return () => {
          pU(), null !== UU && KU.gameBridge.send("setBlockHighlight", null), EU(null)
        }
      }), [RU]);
      const TU = (0, pU.useCallback)((() => {
        gU(!1)
      }), []);
      dE(RU, TU);
      const qU = {
        onPointerMove: UU => {
          PU.current = kE(UU)
        },
        onPointerLeave: () => {
          PU.current = null
        },
        onClick: tU => {
          if (!RU) return;
          const pU = KU.gameBridge.lookup("blockAtViewPoint", kE(tU));
          null !== pU && (gU(!1), UU(pU.pos))
        }
      };
      return {
        picking: RU,
        setPicking: gU,
        hovered: tU,
        slotHandlers: qU
      }
    }

    function iE(UU) {
      KU.gameBridge.send("setFreeCameraMovesFly", UU)
    }

    function AE(UU) {
      let {
        shown: RU,
        setShown: gU,
        canInsertCode: tU
      } = UU;
      const {
        t: EU
      } = (0, DU.B)(), {
        isTouchScreen: PU
      } = (0, SU.l)(["isTouchScreen"]), TU = (0, pU.useRef)(null), KU = (0, pU.useCallback)((() => {
        var UU;
        null === (UU = TU.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === UU || UU.focus()
      }), []), {
        control: GU,
        take: jU,
        release: hU,
        blocked: eU
      } = function(UU) {
        const [RU, gU] = (0, pU.useState)("none"), tU = (0, pU.useRef)("none"), [EU, PU] = (0, pU.useState)(!1), TU = UU => {
          tU.current = UU, gU(UU)
        }, qU = (0, pU.useCallback)((() => {
          const RU = tU.current;
          "none" !== RU && (TU("none"), (0, mp.o)(mp.c), "mouse" === RU && UU())
        }), [UU]), KU = (0, pU.useCallback)((UU => {
          HE() ? PU(!0) : (TU("mouse" === UU && "touchOnly" !== (0, IE.b)() ? "mouse" : "touch"), (0, mp.k)(mp.c))
        }), []);
        return (0, wU.e)("pointerLockUpdate", (UU => {
          UU && "touch" === tU.current && "touchOnly" !== (0, IE.b)() ? TU("mouse") : UU || "mouse" !== tU.current || qU()
        })), (0, pU.useEffect)((() => {
          if (!EU) return;
          const UU = () => {
            HE() || PU(!1)
          };
          return UU(), (0, mp.e)(UU)
        }), [EU]), dE("none" !== RU, qU), (0, pU.useEffect)((() => {
          if ("none" === RU) return;
          const UU = UU => {
            (0, XE.isTextEntry)(UU.target) && qU()
          };
          return document.addEventListener("focusin", UU), () => {
            document.removeEventListener("focusin", UU)
          }
        }), [RU, qU]), (0, pU.useEffect)((() => (document.addEventListener("pointerlockerror", qU), () => {
          document.removeEventListener("pointerlockerror", qU)
        })), [qU]), (0, pU.useEffect)((() => () => {
          "none" !== tU.current && null !== SU.b.get("openInGameMenuName") && (0, mp.o)(mp.c)
        }), []), {
          control: RU,
          take: KU,
          release: qU,
          blocked: EU
        }
      }(KU), WU = (0, YE.e)(oE.f);
      (0, pU.useEffect)((() => {
        "touch" !== GU || "shown" !== RU || WU ? "none" === GU && "expanded" === RU && gU("shown") : gU("expanded")
      }), [GU, WU]),
      function(UU, RU) {
        const gU = (0, pU.useRef)(RU);
        gU.current = RU;
        const tU = (0, pU.useRef)(null);
        (0, pU.useLayoutEffect)((() => {
          const RU = new VE((() => UU.current.getBoundingClientRect()), (UU => {
            var RU;
            "none" !== gU.current && rE(null !== (RU = null === UU || void 0 === UU ? void 0 : UU.rect) && void 0 !== RU ? RU : null), (0, BE.F)().setGameView(UU)
          }), (() => performance.now()));
          tU.current = RU, RU.sync();
          const pU = (0, BE.p)((() => {
            RU.sync()
          }));
          return () => {
            pU(), SU.b.set({
              worldPanelHud: null
            }), RU.stop()
          }
        }), [UU]), (0, pU.useLayoutEffect)((() => {
          tU.current.sync(), rE("none" === RU ? null : tU.current.rect), SU.b.set({
            worldPanelHud: RU
          })
        }), [RU])
      }(TU, "touch" === GU ? "touchControls" : "none");
      const {
        picking: fU,
        setPicking: xU,
        hovered: mU,
        slotHandlers: IU
      } = FE((UU => {
        CU.p.yh("CodeEditorInsertText", {
          text: `[${UU.join(", ")}]`,
          focus: !PU
        }), (0, oE.f)() && gU("hidden")
      })), JU = function() {
        const {
          allowed: UU,
          movesFly: RU
        } = (0, bU.k)("freeCamera"), gU = (0, pU.useRef)(RU), tU = (0, pU.useRef)(RU);
        return tU.current !== RU && (tU.current = RU, gU.current = RU), (0, pU.useEffect)((() => () => {
          gU.current && iE(!1)
        }), []), {
          allowed: UU,
          on: RU,
          toggle: () => {
            gU.current = !RU, iE(!RU)
          }
        }
      }(), nU = (0, qU.g)("hideCoordinates"), oU = (0, bU.k)("localPlayerAlive"), ZU = !oU || eU;
      (0, pU.useEffect)((() => {
        oU || hU()
      }), [oU, hU]), (0, pU.useEffect)((() => {
        !ZU && tU || xU(!1)
      }), [ZU, tU, xU]);
      const aU = JU.on ? uU.j : uU.e,
        YU = fU ? uU.j : uU.e;
      return (0, cU.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, cU.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, cU.jsx)("span", {
            className: "WorldPanelTitle",
            children: EU("codeEditorWorld:title")
          }), "touch" === GU && !WU && (0, cU.jsx)(uU.e, {
            className: "WorldPanelButton",
            onClick: hU,
            children: EU("codeEditorWorld:backToCode")
          }), !ZU && JU.allowed && !PU && (0, cU.jsx)(zU.g, {
            tooltipInner: EU("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, cU.jsx)(aU, {
              className: "WorldPanelButton",
              ariaPressed: JU.on,
              ariaLabel: EU("codeEditorWorld:freeCamera"),
              onClick: JU.toggle,
              children: (0, cU.jsx)(QU.c, {
                name: "video"
              })
            })
          }), !ZU && tU && (0, cU.jsx)(zU.g, {
            tooltipInner: EU("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, cU.jsxs)(YU, {
              className: "WorldPanelButton",
              ariaPressed: fU,
              onClick: () => {
                hU(), xU(!fU)
              },
              children: [(0, cU.jsx)(QU.c, {
                name: "crosshairs"
              }), EU("codeEditorWorld:pick")]
            })
          })]
        }), !nU && (0, cU.jsx)(sE, {
          freeCamera: JU.on,
          picking: fU,
          hovered: mU
        }), (0, cU.jsxs)("div", {
          ref: TU,
          className: uR()("WorldPanelSlot", {
            TouchControl: "touch" === GU,
            Picking: fU
          }),
          onPointerDown: UU => {
            0 !== UU.button || ZU || fU || jU(UU.pointerType)
          },
          ...IU,
          children: [!ZU && !fU && (0, cU.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !ZU && "touch" !== GU && (0, cU.jsxs)("div", {
            className: "WorldPanelHint",
            children: [fU && EU(PU ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !fU && "none" === GU && !JU.on && EU(PU ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !fU && "none" === GU && JU.on && EU("codeEditorWorld:clickToFly"), "mouse" === GU && (0, cU.jsxs)(cU.Fragment, {
              children: [(0, cU.jsx)(aE.b, {
                noaAction: "OpenLobbyLeaderboard"
              }), EU("codeEditorWorld:backToCode")]
            })]
          }), ZU && (0, cU.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, cU.jsx)("span", {
              children: EU(oU ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, cU.jsx)(uU.e, {
              onClick: sU.f,
              children: EU("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var zE = gU(4693);

    function ME(UU) {
      let {
        FG: RU,
        setWorld: gU,
        toggleWorld: tU,
        aiShown: pU,
        closeAi: EU
      } = UU;
      const {
        t: PU
      } = (0, DU.B)(), TU = pU ? "ai" : "hidden" !== RU ? "world" : "code", qU = [{
        value: "code",
        label: PU("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: PU("codeEditorWorld:title")
      }];
      pU && qU.push({
        value: "ai",
        label: PU("codeEditorWorld:aiPane")
      });
      return (0, cU.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, cU.jsx)(zE.d, {
          options: qU,
          value: TU,
          onChange: UU => {
            "world" !== UU ? (pU && EU(), gU("hidden")) : "hidden" === RU ? tU() : EU()
          },
          ariaLabel: PU("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var DE = gU(36442);
    class LE {
      constructor(UU, RU) {
        this.storageKey = UU, this.defaultValue = RU, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const UU = VU.k.getItem(this.storageKey);
            this.value = "boolean" === typeof UU ? UU : this.defaultValue
          }
          return this.value
        }, this.set = UU => {
          this.value = UU, VU.k.setItem(this.storageKey, UU);
          for (const RU of this.listeners) RU(UU)
        }
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
    }
    const NE = new LE("codeEditorLightMode", !1),
      lE = new LE("codeEditorAiHints", !0);

    function OE(UU) {
      const [RU, gU] = (0, pU.useState)(UU.get);
      return (0, pU.useEffect)((() => {
        const RU = UU.subscribe(gU);
        return gU(UU.get()), RU
      }), [UU]), [RU, UU.set]
    }
    var UP = gU(36446),
      RP = gU(36451),
      gP = gU(36455);
    const tP = (0, pU.lazy)((() => Promise.all([gU.e(289), gU.e(285), gU.e(288), gU.e(284), gU.e(81), gU.e(287), gU.e(286), gU.e(283)]).then((() => gU(40685))))),
      pP = (0, pU.lazy)((() => Promise.all([gU.e(76), gU.e(79), gU.e(80), gU.e(78), gU.e(291)]).then((() => gU(40866))))),
      EP = (0, pU.lazy)((() => Promise.all([gU.e(289), gU.e(288), gU.e(81), gU.e(79), gU.e(80), gU.e(78), gU.e(287), gU.e(286), gU.e(77), gU.e(88)]).then((() => gU(40869)))));

    function PP(UU) {
      return KU.gameBridge.query("worldCodeAiChunk", UU)
    }

    function TP() {
      return KU.gameBridge.query("worldCodeAiGameState", null)
    }

    function qP(UU) {
      const {
        gsUrl: RU,
        gameNameWithVariation: gU,
        lobbyName: tU
      } = KE();
      return (0, rp.postJsonWithMetricsCookiesAndJsonResponse)(`${RU}/code/get-lobby-code`, Vp.Yj["get-lobby-code"].toBuffer({
        gameNameWithVariation: gU,
        lobbyName: tU,
        path: UU
      }), {
        retries: 1
      })
    }
    let KP = !1;
    const cP = [],
      GP = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      jP = (0, pU.memo)((function(UU) {
        var RU, gU;
        let {
          show: tU,
          onOpen: EU,
          onClose: TU,
          isLobbyCode: GU
        } = UU;
        const jU = (0, pU.useRef)(""),
          [hU, eU] = (0, pU.useState)(null),
          WU = (0, pU.useRef)(GU),
          [fU, xU] = (0, pU.useState)({
            message: null,
            type: null
          }),
          [mU, IU] = (0, pU.useState)(""),
          JU = fU.message ? fU : {
            message: mU,
            type: "warning"
          },
          [ZU, aU] = (0, pU.useState)(!0),
          [YU, VU] = OE(NE),
          [rU, XU] = OE(lE),
          [vU, dU] = (0, pU.useState)(!1),
          [HU, yU] = (0, pU.useState)(!1),
          kU = (0, pU.useRef)(null),
          FU = (0, pU.useRef)(!1);
        (0, pU.useEffect)((() => {
          var UU;
          HU && FU.current && (FU.current = !1, null === (UU = kU.current) || void 0 === UU || UU.focus())
        }), [HU]);
        const iU = (0, DE.c)(),
          AU = (0, pU.useRef)(null),
          MU = (0, pU.useRef)(null),
          {
            openInGameMenuName: LU,
            openEverythingMenuName: NU
          } = (0, SU.l)(["openInGameMenuName", "openEverythingMenuName"]),
          lU = UU => {
            tU && (AU.current = UU, nR.current = !0)
          };
        (0, wU.e)("OpenReportMenu", (() => {
          lU("ku")
        })), (0, wU.e)("OpenStoreFromCodeEditor", (() => {
          lU("store")
        })), (0, pU.useEffect)((() => {
          const UU = AU.current;
          null === UU || "ku" === UU && ("makeReport" === LU || "makeDiscordReport" === LU) || "store" === UU && null !== NU || (AU.current = null, null === LU && null === NU ? GU ? (MU.current = Rg.current, CU.p.yh("EditLobbyCode", hU)) : CU.p.yh("EditCodeBlock", {
            pos: hU,
            canChangePos: WU.current
          }) : (0, xE.D)())
        }), [LU, NU, GU, hU]), (0, pU.useEffect)((() => {
          if (tU) return () => {
            MU.current = null
          }
        }), [tU]);
        const [OU, UR] = function() {
          const [UU, RU] = (0, pU.useState)(KP);
          return (0, wU.e)("CodeEditorAiHelperShown", (UU => {
            RU(UU)
          })), [UU, (0, pU.useCallback)((UU => {
            KP = UU, CU.p.yh("CodeEditorAiHelperShown", UU)
          }), [])]
        }(), [RR, gR] = (0, pU.useState)(null), [tR, pR] = (0, pU.useState)([]), [ER, PR] = (0, pU.useState)(0), [TR, qR] = (0, pU.useState)(0), [KR, cR] = (0, pU.useState)(""), GR = (0, pU.useRef)(null), [jR, CR] = (0, pU.useState)(GU ? gP.g : null), hR = GU || null !== hU, QR = (0, qU.g)("canEditCode"), eR = (0, qU.g)("canUseDevCreativeItems"), WR = (0, fE.j)("welcome"), fR = (0, fE.j)("docsOverview"), xR = fR ? "docsOverview" : "welcome", mR = null !== fR && void 0 !== fR ? fR : WR, IR = (0, fE.j)("aiHelperOverview"), JR = IR ? "aiHelperOverview" : "welcome", wR = null !== IR && void 0 !== IR ? IR : WR, nR = (0, pU.useRef)(!1), bR = (0, pU.useRef)(!1), oR = (0, pU.useRef)(null), [ZR, aR] = (0, pU.useState)(""), [BR, VR] = (0, pU.useState)(!1), [rR, XR] = (0, pU.useState)(null), vR = (0, bU.k)("connectedGame"), dR = GU && QR && "classic" === vR.gameNameWithVariation && !(0, YR.P)(vR.lobbyName), [HR, SR] = (0, pU.useState)(null), [sR, yR] = (0, pU.useState)({
          [Xp.d]: ""
        }), [kR, FR] = (0, pU.useState)({
          assets: {},
          revision: 0
        }), iR = (0, pU.useRef)(kR), AR = (0, pU.useCallback)((UU => {
          var RU;
          UU.revision < iR.current.revision || (iR.current = UU, FR(UU), IU(UU.startupError ? `Schematics could not load: ${UU.startupError}` : ""), null === (RU = hg.current) || void 0 === RU || RU.onLobbyFilesChanged({
            ...qg.current,
            ...(0, ip.n)(UU.assets)
          }))
        }), []), [zR, MR] = (0, pU.useState)(Xp.d), [DR, LR] = (0, pU.useState)(null), [NR, lR] = (0, pU.useState)(null), OR = (0, pU.useRef)(!1), Ug = (0, pU.useRef)(null), Rg = (0, pU.useRef)(zR);
        Rg.current = zR;
        const gg = (0, pU.useRef)(DR);
        gg.current = DR;
        const tg = DR ? null : rR,
          Eg = tg && !tg.engineLocked ? tg.worldCodeEngine : null,
          Tg = (0, pU.useRef)(NR);
        Tg.current = NR;
        const qg = (0, pU.useRef)(sR);
        qg.current = sR;
        const Kg = (0, pU.useRef)(null),
          cg = (0, pU.useRef)(null),
          [Gg, jg] = (0, pU.useState)(!1),
          ug = (0, RE.q)(),
          Cg = (0, pU.useRef)([]),
          hg = (0, pU.useRef)(null),
          Qg = (0, pU.useRef)(null),
          eg = (0, pU.useRef)(null);

        function Wg(UU) {
          xU(UU), clearTimeout(oR.current), oR.current = setTimeout((() => {
            xU({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const fg = (0, pU.useCallback)((function() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            OR.current && Ug.current && (KU.gameBridge.send("sendCodeCollab", {
              uR: vp.b.Leave,
              CR: (0, vp.q)(Ug.current),
              bP: !!UU || null
            }), OR.current = !1, Ug.current = null), SR(null)
          }), []),
          xg = (0, pU.useCallback)((UU => {
            const RU = {
              kind: "lobby",
              path: UU
            };
            Ug.current = RU, MR(UU), jU.current = "", KU.gameBridge.send("sendCodeCollab", {
              uR: vp.b.Join,
              CR: (0, vp.q)(RU)
            }), OR.current = !0
          }), []),
          mg = (0, pU.useCallback)((UU => {
            var RU;
            const gU = null === (RU = Qg.current) || void 0 === RU ? void 0 : RU.collabState;
            return gU && "lobby" === gU.docKey.kind && gU.docKey.path === UU && Rg.current === UU ? Promise.resolve({
              doc: gU.doc,
              version: gU.version,
              clientID: gU.clientID,
              docKey: gU.docKey,
              httpConfig: gU.httpConfig
            }) : new Promise(((RU, gU) => {
              const tU = setTimeout((() => {
                  Cg.current = Cg.current.filter((UU => UU !== pU)), gU(new Error(`Timed out joining ${UU}`))
                }), 15e3),
                pU = gU => {
                  "lobby" === gU.docKey.kind && gU.docKey.path === UU && (clearTimeout(tU), Cg.current = Cg.current.filter((UU => UU !== pU)), RU(gU))
                };
              Cg.current.push(pU), Rg.current !== UU ? (fg(!0), xg(UU)) : OR.current || xg(UU)
            }))
          }), [xg, fg]),
          Ig = (0, pU.useCallback)((async function(UU, RU) {
            let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const tU = Date.now();
            let pU = UU in qg.current;
            for (; pU !== RU;) {
              if (Date.now() - tU > gU) throw new Error(`Timed out waiting for lobby path ${UU} present=${RU}`);
              await (0, Vt.J)(50), pU = UU in qg.current
            }
          }), []),
          Jg = (0, pU.useCallback)((UU => {
            const RU = qg.current,
              gU = Xp.d in RU && Xp.g in RU;
            if (!(0, dp.h)(UU) || gU) {
              if (Rg.current === UU) {
                var tU;
                const pU = gU && (0, dp.h)(UU) ? UU === Xp.d ? Xp.g : Xp.d : null !== (tU = (0, dp.c)(RU)) && void 0 !== tU ? tU : Xp.d;
                cg.current = {
                  fromPath: UU,
                  toPath: pU
                }, MR(pU)
              }
              KU.gameBridge.send("sendCodeCollab", {
                uR: vp.b.DeleteFile,
                CR: (0, vp.q)({
                  kind: "lobby",
                  path: Rg.current
                }),
                oP: UU
              })
            }
          }), []),
          wg = (0, pU.useCallback)((UU => {
            MU.current = null, LR(null), lR(null), !GU || UU === Rg.current && OR.current || (fg(!0), xg(UU))
          }), [GU, fg, xg]),
          ng = (0, pU.useCallback)(((UU, RU) => {
            const gU = kp.f[UU],
              tU = gU && RU in gU.files ? RU : "index.ts";
            if (UU !== gg.current || tU !== Tg.current) {
              var pU;
              if (UU !== gg.current) null === (pU = hg.current) || void 0 === pU || pU.stopContinuousSync(), fg(!0);
              LR(UU), lR(tU)
            }
          }), [fg]),
          bg = (0, pU.useCallback)((UU => {
            var RU;
            const gU = Rg.current,
              tU = qg.current[gU],
              pU = OR.current && !gg.current && gU in UU && void 0 !== tU ? {
                ...UU,
                [gU]: tU
              } : UU;
            yR(pU);
            const EU = Kg.current;
            if (EU && EU in UU) Kg.current = null, EU !== Rg.current && wg(EU);
            else if (!(Rg.current in UU) && OR.current && !gg.current) {
              var PU;
              wg(null !== (PU = (0, dp.c)(UU)) && void 0 !== PU ? PU : Xp.d)
            }
            null === (RU = hg.current) || void 0 === RU || RU.onLobbyFilesChanged({
              ...pU,
              ...(0, ip.n)(iR.current.assets)
            })
          }), [wg]),
          og = (0, pU.useCallback)((() => qP(Rg.current).then((async UU => {
            if (!OR.current || !UU.files) return null;
            bg(UU.files);
            const RU = await cE({
              action: "state"
            });
            return AR(RU), {
              ...UU.files,
              ...(0, ip.n)(RU.assets)
            }
          })).catch((UU => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", UU), Wg({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [bg, AR]),
          Zg = () => {
            TU()
          };
        (0, pU.useEffect)((() => {
          if (IU(""), !tU || !GU) return;
          let UU = !1;
          return iR.current = {
            assets: {},
            revision: 0
          }, FR(iR.current), cE({
            action: "state"
          }).then((RU => {
            UU || AR(RU)
          })).catch((RU => {
            console.error("Could not load project schematics", RU), UU || IU("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            UU = !0
          }
        }), [tU, GU, AR]);
        const ag = (0, pU.useCallback)((function() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Ug.current && KU.gameBridge.send("sendCodeCollab", {
              uR: vp.b.Submit,
              CR: (0, vp.q)(Ug.current),
              ...UU ? {
                WR: "keepOpen"
              } : {}
            })
          }), []),
          Yg = (0, pU.useCallback)((() => {
            if (!Ug.current || "lobby" !== Ug.current.kind) return;
            const UU = ZR.trim();
            (0, Hp.t)(UU) ? (KU.gameBridge.send("sendCodeCollab", {
              uR: vp.b.ReloadAsVariation,
              CR: (0, vp.q)(Ug.current),
              WR: UU
            }), VR(!1)) : Wg({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [ZR]),
          Bg = (0, pU.useCallback)((UU => {
            KU.gameBridge.send("sendCodeCollab", {
              uR: vp.b.SetEngine,
              CR: (0, vp.q)({
                kind: "lobby",
                path: Rg.current
              }),
              WR: UU
            })
          }), []),
          Vg = (0, pU.useCallback)((UU => {
            if (!gg.current && QR && (WU.current || GU)) {
              if (GU) {
                var RU;
                const gU = (0, dp.p)(qg.current, Rg.current),
                  tU = Math.min(pg.w, Math.max(0, pg.B - gU)),
                  pU = UU.slice(0, tU);
                return jU.current = pU, yR((UU => ({
                  ...UU,
                  [Rg.current]: pU
                }))), void(null === (RU = hg.current) || void 0 === RU || RU.onDocTextChanged(Rg.current, pU))
              }
              jU.current = UU, cR(UU)
            }
          }), [QR, GU]);
        (0, wU.e)("EditLobbyCode", (UU => {
          var RU;
          BU.featureFlags.canSeePlayerWrittenText && GU && (fg(), eU(UU), jU.current = "", yR({
            [Xp.d]: ""
          }), XR(null), MR(Xp.d), LR(null), lR(null), Kg.current = null, cg.current = null, null === (RU = hg.current) || void 0 === RU || RU.stopContinuousSync(), EU(), xg(Xp.d))
        })), (0, wU.e)("EditCodeBlock", (UU => {
          let {
            pos: RU,
            canChangePos: gU
          } = UU;
          if (BU.featureFlags.canSeePlayerWrittenText && !GU)
            if (fg(), null !== RU && (RU = [...RU]), eU(RU), WU.current = gU, null !== RU) {
              jU.current = "", cR(""), EU();
              const UU = {
                  kind: "codeBlock",
                  pos: RU
                },
                tU = (0, vp.q)(UU);
              GR.current !== tU && (GR.current = tU, pR([]), qR(ER)), CR((0, gP.e)(tU, [RU[0], RU[1], RU[2]], !!gU)), Ug.current = UU, KU.gameBridge.send("sendCodeCollab", {
                uR: vp.b.Join,
                CR: (0, vp.q)(UU)
              }), OR.current = !0
            } else tU && TU()
        })), (0, wU.e)("codeCollabRejoin", (UU => {
          const RU = Ug.current ? (0, vp.q)(Ug.current) : null;
          RU && UU.docKey === RU && (jU.current = UU.doc, GU || cR(UU.doc), SR((RU => RU ? {
            ...RU,
            doc: UU.doc,
            version: UU.version,
            clientID: (0, yp.e)()
          } : RU)))
        })), (0, wU.e)("codeCollab", (UU => {
          var RU;
          const gU = Ug.current ? (0, vp.q)(Ug.current) : null;
          if (UU.type === vp.c.LobbyFilesChanged && GU) {
            if ("string" !== typeof UU.files) return void og();
            try {
              bg(JSON.parse(UU.files))
            } catch (KU) {
              console.error("[CodeCollab] Failed to parse lobby files", KU), og()
            }
            return
          }
          if (UU.type === vp.c.EngineSettings && GU) return void XR(CE(UU.engineSettings));
          const pU = UU.type === vp.c.Joined ? (0, vp.e)(UU.docKey) : null,
            EU = GU && "lobby" === (null === (RU = Ug.current) || void 0 === RU ? void 0 : RU.kind) && (0, dp.h)(Ug.current.path) && "lobby" === (null === pU || void 0 === pU ? void 0 : pU.kind) && (0, dp.h)(pU.path);
          if (!gU || UU.docKey === gU || EU)
            if (UU.type !== vp.c.ForceClose) {
              if (tU)
                if (UU.type === vp.c.Joined) {
                  var PU;
                  const cU = JSON.parse(UU.peers),
                    uU = UU.existingCursors ? JSON.parse(UU.existingCursors) : [],
                    QU = (0, yp.e)(),
                    eU = KE(),
                    {
                      gsUrl: WU,
                      gameNameWithVariation: fU,
                      lobbyName: mU
                    } = eU,
                    IU = null !== (PU = (0, vp.e)(UU.docKey)) && void 0 !== PU ? PU : Ug.current;
                  IU && (Ug.current = IU, "lobby" === IU.kind && (MR(IU.path), Rg.current = IU.path));
                  const JU = IU || (GU ? {
                    kind: "lobby",
                    path: Rg.current
                  } : {
                    kind: "codeBlock",
                    pos: hU
                  });

                  function wU(RU) {
                    var gU, tU;
                    if (!OR.current) return;
                    const pU = null !== (gU = RU.code) && void 0 !== gU ? gU : "",
                      EU = null !== (tU = RU.collabVersion) && void 0 !== tU ? tU : 0;
                    jU.current = pU, GU || cR(pU), GU && RU.files ? yR(RU.files) : GU && yR((UU => ({
                      ...UU,
                      [Rg.current]: pU
                    })));
                    const PU = {
                      doc: pU,
                      version: EU,
                      clientID: QU,
                      docKey: JU,
                      peers: cU,
                      editorCount: UU.editorCount,
                      existingCursors: uU,
                      httpConfig: eU
                    };
                    if (SR(PU), "lobby" === JU.kind) {
                      var TU;
                      const UU = {
                        doc: pU,
                        version: EU,
                        clientID: QU,
                        docKey: JU,
                        httpConfig: eU
                      };
                      for (const RU of [...Cg.current]) RU(UU);
                      null === (TU = hg.current) || void 0 === TU || TU.startWhenReady()
                    }
                    RU.canSeeCode ? (clearTimeout(oR.current), xU({
                      message: null,
                      type: null
                    })) : function(UU) {
                      clearTimeout(oR.current), xU(UU)
                    }(GP);
                    const qU = MU.current;
                    MU.current = null, GU && qU && RU.files && qU in RU.files && qU !== Rg.current && wg(qU)
                  }
                  GU ? qP(Rg.current).then(wU).catch((UU => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", UU), fg()
                  })) : (0, rp.postJsonWithMetricsCookiesAndJsonResponse)(`${WU}/code/get-code-block`, Vp.Yj["get-code-block"].toBuffer({
                    gameNameWithVariation: fU,
                    lobbyName: mU,
                    pos: hU
                  }), {
                    retries: 1
                  }).then(wU).catch((UU => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", UU), fg()
                  }))
                } else if (UU.type === vp.c.Presence) {
                if (!gU) return;
                const nU = JSON.parse(UU.peers);
                SR((RU => RU ? {
                  ...RU,
                  peers: nU,
                  editorCount: UU.editorCount
                } : RU))
              }
            } else {
              var qU;
              if (!gU) return;
              tU && GU && "keptOpen" === UU.updates && CU.p.yh("CodeEditorKeepEdits");
              const bU = Ug.current;
              OR.current = !1, Ug.current = null, SR(null);
              if (!GU || "close" === UU.updates) return (0, RP.g)(), void(tU && TU());
              if (!tU) return;
              const oU = qg.current,
                ZU = cg.current;
              cg.current = null;
              const aU = "lobby" === (null === bU || void 0 === bU ? void 0 : bU.kind) && bU.path === (null === ZU || void 0 === ZU ? void 0 : ZU.fromPath),
                YU = ZU && (aU || ZU.toPath in oU || (0, dp.h)(ZU.toPath)) ? ZU.toPath : Rg.current in oU ? Rg.current : null !== (qU = (0, dp.c)(oU)) && void 0 !== qU ? qU : Xp.d;
              xg(YU)
            }
        })), (0, wU.e)("refetchCode", (() => {
          BU.featureFlags.canSeePlayerWrittenText && tU && OR.current && (QR || (fg(), GU ? CU.p.yh("EditLobbyCode", hU) : CU.p.yh("EditCodeBlock", {
            pos: hU,
            canChangePos: WU.current
          })))
        }));
        const rg = (0, pU.useCallback)((() => {
            tU && (dU(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [tU]),
          Xg = (0, pU.useCallback)((() => {
            dU(!1)
          }), []);
        (0, pU.useEffect)((() => {
          tU && QR && ("docsButton" === mR && vU ? (0, xE.g)("docsButton") : mR && xE.k.includes(mR) && !vU && (dU(!0), UR(!1)))
        }), [tU, QR, mR, vU, UR]);
        const vg = (0, pU.useCallback)((() => {
          UR(!1)
        }), [UR]);
        (0, pU.useEffect)((() => {
          tU && QR && hR && ("aiHelperButton" === wR && OU ? (0, xE.g)("aiHelperButton") : wR && xE.e.includes(wR) && !OU && (UR(!0), dU(!1)))
        }), [tU, QR, hR, wR, OU, UR]), (0, pU.useEffect)((() => {
          if (!tU || !QR) return;
          const UU = GU ? "worldCode" : "codeBlock";
          return (0, xE.F)(UU, !0), () => {
            (0, xE.F)(UU, !1)
          }
        }), [tU, QR, GU]), (0, pU.useEffect)((() => {
          if (tU) return () => {
            nR.current ? nR.current = !1 : (0, xE.D)()
          }
        }), [tU]), (0, pU.useEffect)((() => {
          (0, xE.H)("exportButton", !!eR)
        }), [eR]);
        const {
          t: dg
        } = (0, DU.B)(), Hg = !OU && ER > TR, Sg = Hg ? uU.E : uU.t, sg = (0, pU.useCallback)(((UU, RU) => {
          CU.p.yh("CodeEditorGoToLine", {
            path: UU,
            line: RU
          }), wg(UU)
        }), [wg]), yg = (0, pU.useCallback)((UU => {
          eg.current = UU
        }), []), kg = function(UU, RU) {
          const [gU, tU] = (0, pU.useState)(null);
          return (0, pU.useEffect)((() => {
            if (!RU) return void tU(null);
            let gU = !1;
            return UE(UU).then((UU => {
              gU || tU(UU)
            }), (UU => {
              console.error("[CodeEditor] could not collect the imported plugins", UU), gU || tU(null)
            })), () => {
              gU = !0
            }
          }), [UU, RU]), gU
        }(sR, tU);
        (0, pU.useEffect)((() => {
          kg && DR && !kg.includes(DR) && (LR(null), lR(null), GU && !OR.current && xg(Rg.current))
        }), [DR, kg, GU, xg]), Qg.current = {
          collabState: HR,
          ensureJoinedPath: mg,
          waitForLobbyPath: Ig,
          pullLobbyFiles: og,
          t: dg,
          canEditCode: !!QR
        }, hg.current || (hg.current = new TE({
          getLobbyFiles: () => ({
            ...qg.current,
            ...(0, ip.n)(iR.current.assets)
          }),
          deleteSchematic: async UU => {
            const RU = await cE({
              action: "remove",
              path: UU,
              expectedRevision: iR.current.revision
            });
            AR(RU)
          },
          getActivePath: () => Rg.current,
          getCollabSnapshot: () => {
            var UU;
            if (gg.current) return null;
            const RU = null === (UU = Qg.current) || void 0 === UU ? void 0 : UU.collabState;
            return RU ? {
              doc: RU.doc,
              version: RU.version,
              clientID: RU.clientID,
              docKey: RU.docKey,
              httpConfig: RU.httpConfig
            } : null
          },
          replaceActiveDoc: (UU, RU) => {
            var gU, tU;
            return null !== (gU = null === (tU = eg.current) || void 0 === tU ? void 0 : tU.call(eg, UU, RU)) && void 0 !== gU && gU
          },
          ensureJoined: UU => Qg.current.ensureJoinedPath(UU),
          createFile: (UU, RU) => {
            !1 !== (null === RU || void 0 === RU ? void 0 : RU.focus) && (Kg.current = UU), KU.gameBridge.send("sendCodeCollab", {
              uR: vp.b.CreateFile,
              CR: (0, vp.q)({
                kind: "lobby",
                path: Rg.current
              }),
              oP: UU
            })
          },
          renameFile: (UU, RU) => {
            const gU = (0, vp.q)({
              kind: "lobby",
              path: Rg.current
            });
            Rg.current === UU && (cg.current = {
              fromPath: UU,
              toPath: RU
            }, MR(RU)), KU.gameBridge.send("sendCodeCollab", {
              uR: vp.b.RenameFile,
              CR: gU,
              oP: UU,
              ZP: RU
            })
          },
          deleteFile: UU => {
            Jg(UU)
          },
          waitForLobbyPath: (UU, RU, gU) => Qg.current.waitForLobbyPath(UU, RU, gU),
          pullLobbyFiles: () => Qg.current.pullLobbyFiles(),
          setMessage: (UU, RU) => {
            Wg({
              message: UU,
              type: RU
            })
          },
          onUnlinked: () => {
            jg(!1)
          },
          t: UU => Qg.current.t(UU),
          canEditCode: () => Qg.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: UU,
              lobbyName: RU
            } = KU.gameBridge.latest("connectedGame");
            return (0, RE.e)(UU, RU)
          }
        }));
        const Fg = (0, pU.useCallback)((async UU => {
            const RU = hg.current;
            if (!RU) return !1;
            try {
              return await RU.writeLobbyFiles(UU)
            } catch (gU) {
              return console.error("World Code AI: couldn't write the change", gU), !1
            }
          }), []),
          ig = (0, pU.useCallback)((async UU => {
            var RU, gU;
            const tU = null === (RU = UU.find((UU => UU.path === UP.d))) || void 0 === RU ? void 0 : RU.text,
              pU = Ug.current;
            return void 0 !== tU && "codeBlock" === (null === pU || void 0 === pU ? void 0 : pU.kind) && (!(null === (gU = eg.current) || void 0 === gU || !gU.call(eg, (0, vp.q)(pU), tU)) && (jU.current = tU, cR(tU), !0))
          }), []),
          Ag = (0, pU.useCallback)((async () => {
            try {
              var UU, RU;
              const gU = await qP(Xp.d);
              return !1 === gU.canSeeCode ? null : null !== (UU = gU.files) && void 0 !== UU ? UU : {
                [Xp.d]: null !== (RU = gU.code) && void 0 !== RU ? RU : ""
              }
            } catch (gU) {
              return console.error("World Code AI: couldn't read World Code for a code block", gU), null
            }
          }), []),
          zg = (0, pU.useMemo)((() => ({
            [UP.d]: KR
          })), [KR]),
          Mg = (0, pU.useCallback)(((UU, RU) => {
            CU.p.yh("CodeEditorGoToLine", {
              path: UP.d,
              line: RU
            })
          }), []);
        (0, pU.useEffect)((() => {
          OU && tU && qR(ER)
        }), [OU, tU, ER]);
        const Dg = (0, pU.useCallback)((() => {
            var UU, RU;
            ag();
            const gU = (0, BU.isTouchscreen)() ? "open World Code again" : `press ${null!==(UU=null===(RU=Pg.r.OpenCodeEditor)||void 0===RU?void 0:RU[0])&&void 0!==UU?UU:"F8"}`,
              tU = GU ? `\ud83e\udd16 Try out your change, then ${gU} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            CU.p.yh("chat", {
              content: [{
                str: tU,
                style: {
                  color: nU.N.cyanUiText
                }
              }]
            })
          }), [ag, GU]),
          Lg = (0, pU.useCallback)((UU => {
            const RU = hU,
              gU = WU.current;
            GU || !RU || KU.gameBridge.lookup("codeBlockClickable", RU) ? (0, RP.j)(UU, {
              submit: () => {
                ag(), CU.p.yh("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: nU.N.cyanUiText
                    }
                  }]
                }), !GU && RU && setTimeout((() => {
                  KU.gameBridge.send("clickCodeBlock", RU)
                }), 1e3)
              },
              reopen: () => {
                (0, sU.q)() || (GU ? CU.p.yh("EditLobbyCode", RU) : CU.p.yh("EditCodeBlock", {
                  pos: RU,
                  canChangePos: gU
                }))
              }
            }) : Dg()
          }), [ag, GU, hU, Dg]),
          Ng = (0, pU.useCallback)((() => {
            UR(!1)
          }), [UR]),
          lg = (0, pU.useRef)(Zg);
        lg.current = Zg;
        const Og = (0, pU.useCallback)((function(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            CU.p.yh("WorldCodeAiDraft", {
              text: UU,
              send: RU
            }), lg.current(), CU.p.yh("EditLobbyCode", hU)
          }), [hU]),
          Ut = (0, pU.useCallback)((UU => {
            lg.current(), UU.codeBlock ? CU.p.yh("EditCodeBlock", {
              pos: [...UU.pos],
              canChangePos: UU.canChangePos
            }) : CU.p.yh("EditLobbyCode", hU)
          }), [hU]);
        (0, wU.e)("WorldCodeAiDraft", (UU => {
          GU && (gR(UU), UR(!0))
        }));
        const Rt = !!QR && !!mR && xE.k.includes(mR),
          gt = !!QR && !!wR && xE.e.includes(wR);
        (0, pU.useEffect)((() => {
          tU && OU && hR && !Rt && dU(!1)
        }), [tU, OU, hR, Rt]);
        const tt = (0, pU.useCallback)((() => {
            UR(!1), dU(!1)
          }), [UR]),
          {
            FG: pt,
            setWorld: Et,
            toggleWorld: Pt
          } = function(UU) {
            let {
              showAi: RU,
              showDocs: gU,
              showChat: tU,
              hideOtherRightPanels: EU
            } = UU;
            const [PU, TU] = (0, pU.useState)("hidden"), qU = (0, pU.useRef)(null), KU = (0, pU.useCallback)((() => {
              qU.current = null, TU((UU => "hidden" === UU ? UU : (0, oE.f)() ? "hidden" : "shown"))
            }), []);
            (0, pU.useEffect)((() => {
              (RU || gU) && KU()
            }), [RU, gU, KU]), (0, pU.useEffect)((() => {
              tU && KU()
            }), [tU, KU]);
            const cU = "hidden" !== PU && (0, oE.f)();
            (0, pU.useLayoutEffect)((() => {
              if (cU) {
                const UU = document.activeElement;
                UU instanceof HTMLElement && UU.closest(".cm-content") && (qU.current = UU, UU.blur())
              } else {
                var UU;
                null === (UU = qU.current) || void 0 === UU || UU.focus(), qU.current = null
              }
            }), [cU]);
            const GU = (0, pU.useCallback)((() => {
              "hidden" === PU ? (TU("shown"), (0, oE.f)() && EU()) : TU("hidden")
            }), [PU, EU]);
            return {
              FG: PU,
              setWorld: TU,
              toggleWorld: GU
            }
          }({
            showAi: OU,
            showDocs: vU,
            showChat: HU,
            hideOtherRightPanels: tt
          }),
          Tt = OU && null !== jR && hR,
          qt = (0, pU.useCallback)((() => {
            gR(null)
          }), []),
          [Kt, ct] = (0, pU.useState)(null);
        (0, wU.e)("WorldCodeAiSelection", (UU => {
          tU && (ct(UU), UR(!0), dU(!1))
        }));
        const Gt = (0, pU.useCallback)((() => {
          ct(null)
        }), []);
        (0, wU.e)("chat", (UU => {
          let {
            content: RU
          } = UU;
          if (!GU && null === GR.current) return;
          const gU = Array.isArray(RU) ? RU : [RU],
            tU = gU.some((UU => {
              var RU;
              return (null === UU || void 0 === UU || null === (RU = UU.style) || void 0 === RU ? void 0 : RU.color) === nU.N.redUiText
            })),
            pU = gU.map((UU => {
              var RU;
              const gU = null !== (RU = null === UU || void 0 === UU ? void 0 : UU.str) && void 0 !== RU ? RU : UU;
              return "string" === typeof gU ? gU : ""
            })).join("");
          tU && /world code|error/i.test(pU) && (pR((UU => [...UU, pU].slice(-10))), PR((UU => UU + 1)), (0, RP.f)(pU))
        })), (0, pU.useEffect)((() => {
          if (!tU || !GU || !ug) return;
          let UU = !1;
          return (async (RU, gU) => {
            const tU = await (null === (RU = hg.current) || void 0 === RU ? void 0 : RU.tryRestoreHandle());
            !UU && tU && (jg(!0), null === (gU = hg.current) || void 0 === gU || gU.startWhenReady())
          })(), () => {
            UU = !0
          }
        }), [tU, GU, ug]), (0, pU.useEffect)((() => {
          var UU;
          tU || (null === (UU = hg.current) || void 0 === UU || UU.stopContinuousSync(), fg(!1), bR.current && (bR.current = !1, KU.gameBridge.send("sendChatMessage", {
            aP: "//export",
            channelName: null
          })))
        }), [tU, fg]);
        const jt = (0, pU.useCallback)((async () => {
            if (ug && hg.current) try {
              if (!await hg.current.linkFolder()) return;
              jg(!0), await hg.current.startWhenReady()
            } catch (UU) {
              console.error("[WorldCodeDirectorySync] Link failed", UU), Wg({
                message: dg("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [ug, dg]),
          ut = (0, pU.useCallback)((async () => {
            hg.current && await hg.current.unlinkFolder()
          }), []),
          Ct = (0, pU.useCallback)((() => {
            ug ? Gg ? ut() : jt() : cp.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [ug, Gg, jt, ut]),
          ht = GU && "hidden" !== pt;
        return (0, cU.jsxs)(PU.d, {
          className: uR()("CodeEditorBg", {
            CodeEditorLight: YU,
            WorldShown: "hidden" !== pt
          }),
          close: Zg,
          escDoesExit: !0,
          show: tU,
          togglePointerLock: !1,
          globallyUniqueKey: GU ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, cU.jsx)(fE.c, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: dg("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!QR && !GU
          }), (0, cU.jsx)(fE.c, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, cU.jsxs)(cU.Fragment, {
              children: [(0, cU.jsx)("p", {
                children: dg("codeEditor:tutorialWorldCodeWelcome")
              }), (0, cU.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, cU.jsx)("li", {
                  children: dg("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, cU.jsx)("li", {
                  children: dg("codeEditor:tutorialWorldCodeUseReact")
                }), (0, cU.jsx)("li", {
                  children: dg("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!QR && GU
          }), (0, cU.jsx)("div", {
            className: "CodeEditorTitle",
            children: GU ? "World Code" : "Code Block"
          }), (0, cU.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, cU.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, cU.jsx)(zU.g, {
                tooltipInner: dg(eR ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: eR ? void 0 : 0,
                hideTooltip: "exportButton" === WR,
                children: (0, cU.jsx)(fE.h, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: dg("codeEditor:tutorialExport"),
                  enabled: !!QR,
                  children: (0, cU.jsx)(uU.j, {
                    className: "CodeEditorButton",
                    disabled: !eR,
                    onClick: () => {
                      "exportButton" === WR && ((0, xE.g)("exportButton"), nR.current = !0), bR.current = !0, Zg()
                    },
                    padDestructive: !0,
                    children: dg("codeEditor:exportWorld")
                  })
                })
              }), (0, cU.jsx)(ME, {
                FG: pt,
                setWorld: Et,
                toggleWorld: Pt,
                aiShown: Tt,
                closeAi: Ng
              })]
            }), (0, cU.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [QR && (0, cU.jsx)(zU.g, {
                tooltipInner: dg("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === WR,
                children: (0, cU.jsx)(fE.h, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: dg("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, cU.jsx)(uU.e, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: dg("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, xE.g)("helpButton"), cp.NotificationProvider.showCustomPopup({
                        body: UU => (0, cU.jsx)(mE, {
                          close: UU
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, cU.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, cU.jsx)(QU.c, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, cU.jsx)(zU.g, {
                tooltipInner: dg("codeEditor:closeTooltip"),
                children: (0, cU.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    Zg()
                  },
                  children: (0, cU.jsx)(uU.h, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, cU.jsx)(sp, {
            peers: null !== (RU = null === HR || void 0 === HR ? void 0 : HR.peers) && void 0 !== RU ? RU : []
          }), (0, cU.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [HU && iU && (0, cU.jsx)(oE.e, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                yU(!1)
              },
              children: (0, cU.jsx)(bE, {
                inputRef: kU
              })
            }), GU && (0, cU.jsx)(Mp, {
              schematics: kR.assets,
              onManageSchematic: UU => {
                QR && cp.NotificationProvider.showCustomPopup({
                  body: RU => (0, cU.jsx)(uE, {
                    initialPath: UU,
                    onChanged: AR,
                    onClose: RU
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: sR,
              activePath: zR,
              canEdit: !!QR,
              directoryLinked: Gg,
              pluginNames: null !== kg && void 0 !== kg ? kg : cP,
              activePluginName: DR,
              activePluginFile: NR,
              onSelect: wg,
              onSelectPlugin: ng,
              onToggleDirectorySync: Ct,
              onCreate: UU => {
                Kg.current = UU, KU.gameBridge.send("sendCodeCollab", {
                  uR: vp.b.CreateFile,
                  CR: (0, vp.q)({
                    kind: "lobby",
                    path: Rg.current
                  }),
                  oP: UU
                })
              },
              onRename: (UU, RU) => {
                Rg.current === UU && (cg.current = {
                  fromPath: UU,
                  toPath: RU
                }, MR(RU)), KU.gameBridge.send("sendCodeCollab", {
                  uR: vp.b.RenameFile,
                  CR: (0, vp.q)({
                    kind: "lobby",
                    path: Rg.current
                  }),
                  oP: UU,
                  ZP: RU
                })
              },
              onRenameFolder: (UU, RU) => {
                const [gU] = (0, dp.n)([Rg.current], UU, RU);
                gU && (cg.current = {
                  fromPath: gU[0],
                  toPath: gU[1]
                }, MR(gU[1])), KU.gameBridge.send("sendCodeCollab", {
                  uR: vp.b.RenameFolder,
                  CR: (0, vp.q)({
                    kind: "lobby",
                    path: Rg.current
                  }),
                  oP: UU,
                  ZP: RU
                })
              },
              onDelete: Jg
            }), (0, cU.jsx)("div", {
              className: uR()("CodeEditorMessage", {
                CodeEditorMessageHidden: !JU.message,
                CodeEditorMessageSuccess: "success" === JU.type
              }),
              children: JU.message && (0, cU.jsx)("div", {
                className: "CodeEditorMessageText",
                children: JU.message
              })
            }), (0, cU.jsx)(pU.Suspense, {
              fallback: (0, cU.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, cU.jsx)(oU.d, {})
              }),
              children: (0, cU.jsx)(tP, {
                isLobbyCode: GU,
                code: HR ? HR.doc : jU.current,
                files: GU ? sR : void 0,
                activePath: GU ? zR : void 0,
                pluginName: DR,
                pluginFile: NR,
                pluginSource: DR && NR ? null === (gU = kp.f[DR]) || void 0 === gU ? void 0 : gU.files[NR] : void 0,
                onChange: Vg,
                canEditCode: QR,
                setTemporaryMessage: Wg,
                close: Zg,
                showTooltips: ZU,
                lightMode: YU,
                collabState: HR,
                setActiveDocReplacer: yg,
                showAiHints: hR && rU,
                canAiChangeCode: !!QR && (GU || !!WU.current),
                onRemoteDocChange: UU => {
                  var RU;
                  (jU.current = UU, GU) ? (yR((RU => ({
                    ...RU,
                    [Rg.current]: UU
                  }))), null === (RU = hg.current) || void 0 === RU || RU.onDocTextChanged(Rg.current, UU)) : cR(UU)
                }
              })
            }), (vU || Tt || "hidden" !== pt) && (0, cU.jsxs)(ZE, {
              FG: pt,
              worldPanel: (0, cU.jsx)(AE, {
                shown: pt,
                setShown: Et,
                canInsertCode: !!QR && !DR
              }),
              closeWorld: () => {
                Et("hidden")
              },
              aiShown: Tt,
              defaultWidth: vU ? "40%" : "max(18rem, 36%)",
              children: [vU && (0, cU.jsx)(oE.e, {
                onClose: Rt ? void 0 : Xg,
                children: (0, cU.jsx)(pU.Suspense, {
                  fallback: (0, cU.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, cU.jsx)(oU.d, {})
                  }),
                  children: (0, cU.jsx)(pP, {
                    popOutDocs: rg,
                    hideDocs: Xg,
                    tutorialEnabled: !!QR
                  })
                })
              }), Tt && (0, cU.jsx)(oE.e, {
                onClose: gt ? void 0 : Ng,
                children: (0, cU.jsx)(pU.Suspense, {
                  fallback: (0, cU.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, cU.jsx)(oU.d, {})
                  }),
                  children: (0, cU.jsx)(EP, {
                    target: jR,
                    chatKey: `${vR.gameNameWithVariation}/${vR.lobbyName}/aiHelper`,
                    historyKey: `${vR.gameNameWithVariation}/${vR.lobbyName}/${jR.key}`,
                    files: jR.codeBlock ? zg : sR,
                    activePath: jR.codeBlock ? UP.d : zR,
                    canEdit: !!QR && (jR.codeBlock ? !!WU.current : !DR),
                    isLoaded: null !== HR,
                    errors: tR,
                    errorCount: ER,
                    applyFiles: jR.codeBlock ? ig : Fg,
                    submit: Dg,
                    testRun: Lg,
                    close: Ng,
                    goToLine: jR.codeBlock ? Mg : sg,
                    openWorldCode: jR.codeBlock ? Og : void 0,
                    readWorldCode: jR.codeBlock ? Ag : void 0,
                    viewChunk: PP,
                    viewGameState: TP,
                    openTarget: QR ? Ut : void 0,
                    draft: RR,
                    onDraftUsed: qt,
                    selection: Kt,
                    onSelectionUsed: Gt
                  }, jR.key)
                })
              })]
            })]
          }), (null === tg || void 0 === tg ? void 0 : tg.fallback) && (0, cU.jsx)(hE, {
            fallback: tg.fallback,
            onGoToLine: sg
          }), (0, cU.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, cU.jsx)(zU.g, {
              tooltipInner: dg(YU ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, cU.jsx)(uU.e, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: dg(YU ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  VU(!YU)
                },
                children: (0, cU.jsx)(QU.c, {
                  name: YU ? "moon" : "sun-bright"
                })
              })
            }), (0, cU.jsx)(zU.g, {
              tooltipInner: dg(ht ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, cU.jsx)(uU.j, {
                className: "CodeEditorButton",
                onClick: () => {
                  ag(ht)
                },
                padDefaultFocus: !0,
                children: dg("codeEditor:submitCode")
              })
            }), (0, cU.jsx)(zU.g, {
              tooltipInner: dg(vU ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === mR || "hideDocsButton" === mR,
              children: (0, cU.jsx)(fE.h, {
                tutorial: xR,
                step: vU ? "hideDocsButton" : "docsButton",
                text: dg(vU ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!QR,
                placement: "top",
                waitForClick: !0,
                onPrevious: vU && "welcome" === xR ? Xg : void 0,
                children: (0, cU.jsx)(uU.t, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, xE.g)(vU ? "hideDocsButton" : "docsButton"), dU(!vU), UR(!1)
                  },
                  children: dg(vU ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), hR && (0, cU.jsx)(fE.h, {
              tutorial: JR,
              step: OU ? "hideAiHelperButton" : "aiHelperButton",
              text: dg(OU ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === JR ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!QR,
              placement: "top",
              waitForClick: !0,
              onPrevious: OU && "welcome" === JR ? vg : void 0,
              children: (0, cU.jsx)(Sg, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, xE.g)(OU ? "hideAiHelperButton" : "aiHelperButton"), UR(!OU), dU(!1)
                },
                children: OU ? "Hide AI Helper" : Hg ? "Fix error with AI" : "AI Helper"
              })
            }), iU && (0, cU.jsx)(zU.g, {
              tooltipInner: dg(HU ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, cU.jsx)(uU.t, {
                className: "CodeEditorButton",
                onClick: () => {
                  FU.current = !HU, yU(!HU)
                },
                children: dg(HU ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, cU.jsx)(zU.g, {
              tooltipInner: dg("hidden" === pt ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, cU.jsx)(uU.t, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: Pt,
                children: dg("hidden" === pt ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, cU.jsx)(zU.g, {
              tooltipInner: dg("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, cU.jsx)(uU.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  CU.p.yh("FormatCode")
                },
                children: dg("codeEditor:formatCode")
              })
            }), (0, cU.jsx)(zU.g, {
              tooltipInner: dg("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, cU.jsx)(uU.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(jU.current).then((() => {
                    Wg({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    Wg({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: dg("codeEditor:copyCode")
              })
            }), (0, cU.jsx)(zU.g, {
              tooltipInner: dg(ZU ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, cU.jsx)(uU.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  aU(!ZU)
                },
                children: dg(ZU ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !GU && (0, cU.jsx)(zU.g, {
              tooltipInner: dg("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === WR,
              children: (0, cU.jsx)(fE.h, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: dg("codeEditor:tutorialWorldCodeButton"),
                enabled: !!QR,
                placement: "top",
                waitForClick: !0,
                children: (0, cU.jsx)(uU.t, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === WR && ((0, xE.g)("worldCodeButton"), nR.current = !0), Zg(), CU.p.yh("EditLobbyCode", hU)
                  },
                  children: dg("codeEditor:worldCode")
                })
              })
            }), (dR || Eg || hR) && (0, cU.jsx)(zU.g, {
              tooltipInner: dg("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, cU.jsx)(uU.e, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  VR(!0)
                },
                children: (0, cU.jsx)(QU.c, {
                  name: "ellipsis"
                })
              })
            })]
          }), BR && (0, cU.jsx)(jp.d, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              VR(!1)
            },
            body: (0, cU.jsx)(WE, {
              engine: Eg,
              onSetEngine: Bg,
              aiHints: hR ? {
                shown: rU,
                setShown: XU
              } : null,
              variation: dR ? {
                name: ZR,
                setName: aR,
                reload: Yg
              } : null
            })
          })]
        })
      })),
      uP = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function CP(UU) {
      return "inventory" === UU
    }
    const hP = (0, pU.memo)((function() {
      const {
        openEverythingMenuName: UU,
        openInGameMenuName: RU
      } = (0, SU.l)(["openEverythingMenuName", "openInGameMenuName"]), gU = (0, bU.k)("fullInventory"), EU = (0, pU.useRef)(null), PU = (0, zR.j)();
      (0, wU.e)("toggleMenu", (UU => {
        var RU;
        if (!PU.shown) return;
        const gU = SU.b.get("openInGameMenuName");
        let tU = UU.split("|")[0];
        const pU = null !== (RU = UU.split("|")[1]) && void 0 !== RU ? RU : null;
        ("closeCurrentMenu" === pU && gU || tU === gU) && (EU.current = null, tU = null);
        const TU = "closeCurrentMenu" === pU ? null : pU;
        EU.current !== TU && (EU.current = TU), null !== tU && (0, mp.o)(mp.c, {
          keepsMovement: CP(tU)
        }), SU.b.set({
          openInGameMenuName: tU
        })
      }));
      const TU = (0, pU.useCallback)((UU => () => {
          CU.p.yh("toggleMenu", UU)
        }), []),
        qU = (0, pU.useRef)({
          cantCrouchIfNotFullscreen: TU("cantCrouchIfNotFullscreen"),
          makeReport: TU("makeReport"),
          makeDiscordReport: TU("makeDiscordReport"),
          editBook: TU("editBook"),
          editNameTag: TU("editNameTag"),
          inventory: TU("inventory"),
          inviteLink: TU("inviteLink"),
          writeOnBoard: TU("writeOnBoard"),
          codeEditor: TU("codeEditor"),
          lobbyCodeEditor: TU("lobbyCodeEditor"),
          customLobbyBlockEditor: TU("customLobbyBlockEditor"),
          ironChestPasskeyInput: TU("ironChestPasskeyInput"),
          petUi: TU("petUi")
        }),
        KU = (0, pU.useCallback)((() => {
          SU.b.set({
            openInGameMenuName: null
          })
        }), []),
        GU = (0, pU.useRef)(null);
      return (0, pU.useEffect)((() => {
        if (RU) {
          var UU;
          (0, mp.o)(mp.c, {
            keepsMovement: CP(RU)
          }), GU.current = uP.has(RU) ? null !== (UU = SU.b.get("openEverythingMenuName")) && void 0 !== UU ? UU : GU.current : null, SU.b.set({
            openEverythingMenuName: null
          })
        } else {
          const UU = GU.current;
          GU.current = null, null !== UU && null === SU.b.get("openEverythingMenuName") && SU.b.set({
            openEverythingMenuName: UU
          }), EU.current = null, (0, mp.k)(mp.c)
        }
      }), [RU]), (0, pU.useEffect)((() => {
        null !== UU && KU()
      }), [UU, KU]), (0, cU.jsxs)(cU.Fragment, {
        children: [(0, cU.jsx)(tU.h, {
          show: "clientGame" === RU
        }), (0, cU.jsx)(Tp, {
          show: "cantCrouchIfNotFullscreen" === RU,
          onOpen: qU.current.cantCrouchIfNotFullscreen,
          onClose: KU
        }), (0, cU.jsx)(Wp, {
          show: "makeReport" === RU,
          onOpen: qU.current.makeReport,
          onClose: KU
        }), (0, cU.jsx)(xp, {
          show: "makeDiscordReport" === RU,
          onOpen: qU.current.makeDiscordReport,
          onClose: KU
        }), (0, cU.jsx)(eg, {
          show: "editBook" === RU,
          onOpen: qU.current.editBook,
          onClose: KU
        }), (0, cU.jsx)(hg, {
          show: "editNameTag" === RU,
          onOpen: qU.current.editNameTag,
          onClose: KU
        }), gU && (0, cU.jsx)(pp, {
          show: "inventory" === RU,
          onOpen: qU.current.inventory,
          onClose: KU,
          variation: EU.current
        }), (0, cU.jsx)(MR, {
          show: "inviteLink" === RU,
          onClose: KU,
          option: EU.current
        }), (0, cU.jsx)(XU, {
          show: "retentionFeatures" === RU,
          onClose: KU
        }), (0, cU.jsx)(Cg, {
          show: "writeOnBoard" === RU,
          onOpen: qU.current.writeOnBoard,
          onClose: KU
        }), (0, cU.jsx)(jP, {
          show: "lobbyCodeEditor" === RU,
          onOpen: qU.current.lobbyCodeEditor,
          onClose: KU,
          isLobbyCode: !0
        }), (0, cU.jsx)(jP, {
          show: "codeEditor" === RU,
          onOpen: qU.current.codeEditor,
          onClose: KU,
          isLobbyCode: !1
        }), (0, cU.jsx)(Jp, {
          show: "customLobbyBlockEditor" === RU,
          onOpen: qU.current.customLobbyBlockEditor,
          onClose: KU
        }), (0, cU.jsx)(vg, {
          show: "ironChestPasskeyInput" === RU,
          onOpen: qU.current.ironChestPasskeyInput,
          onClose: KU
        }), (0, cU.jsx)(ap, {
          togglePointerLock: !0,
          show: "petUi" === RU,
          onOpen: qU.current.petUi,
          onClose: KU
        })]
      })
    }))
  },
  36081: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TP
    });
    gU(36089);
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(3396),
      TU = gU(1410),
      qU = gU(1777),
      KU = gU(1090);

    function cU() {
      const UU = 2e3,
        [RU, gU] = (0, tU.useState)(null),
        [pU, cU] = (0, tU.useState)(null),
        GU = (0, tU.useRef)(null);
      (0, TU.e)("showBottomMessage", (RU => {
        let {
          message: gU,
          timeoutLength: tU = UU,
          type: pU
        } = RU;
        cU({
          message: gU,
          type: pU
        }), clearTimeout(GU.current), GU.current = setTimeout((() => {
          cU(null)
        }), tU)
      })), (0, TU.e)("showPermanentBottomMessage", (UU => {
        gU(UU)
      })), (0, tU.useEffect)((() => ((0, PU.b)((() => {
        gU(null)
      })), () => {
        clearTimeout(GU.current)
      })), []);
      const jU = pU || RU;
      return jU ? (0, KU.jsx)("div", {
        className: EU()("BottomScreenMessage", jU.type),
        children: (0, KU.jsx)(qU.e, {
          text: jU.message
        })
      }) : null
    }
    var GU = gU(2185),
      jU = gU(1800),
      uU = gU(1475),
      CU = gU(2263);

    function hU() {
      let UU;
      const RU = () => {
          clearTimeout(UU), UU = setTimeout((() => {
            jU.gameBridge.latest("connectedGame").replay || (jU.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, uU.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        gU = () => {
          clearTimeout(UU)
        };
      return window.addEventListener("focus", gU), window.addEventListener("blur", RU), () => {
        window.removeEventListener("blur", RU), window.removeEventListener("focus", gU), clearTimeout(UU)
      }
    }
    var QU = gU(1112),
      eU = gU(1106),
      WU = gU(299),
      fU = gU(2254),
      xU = gU(24),
      mU = gU(1821),
      IU = gU(34),
      JU = gU(1834),
      wU = gU(21),
      nU = gU(1836),
      bU = gU(1362),
      oU = gU(8454),
      ZU = gU(1856),
      aU = gU(1181);
    const YU = (0, tU.memo)((function() {
      const {
        isTouchScreen: UU,
        loadingOverlayVisible: RU,
        openInGameMenuName: gU,
        openEverythingMenuName: pU
      } = (0, wU.l)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), PU = (0, bU.o)();
      (0, eU.d)();
      const TU = (0, fU.g)("showBasicMovementControls"),
        [qU, cU] = (0, tU.useState)("movement"),
        GU = "movement" === qU,
        jU = PU && !1 !== TU;
      (0, tU.useEffect)((() => {
        "padActions" !== qU || jU || cU("done")
      }), [qU, jU]);
      const uU = RU || null !== gU || null !== pU,
        CU = (0, tU.useRef)({
          step: qU,
          ms: 0
        });
      return (0, tU.useEffect)((() => {
        if (uU || "done" === qU) return;
        CU.current.step !== qU && (CU.current = {
          step: qU,
          ms: 0
        });
        const UU = CU.current,
          RU = performance.now(),
          gU = setTimeout((() => {
            cU("movement" === qU && (0, bU.g)() ? "padActions" : "done")
          }), 7e3 - UU.ms);
        return () => {
          clearTimeout(gU), UU.ms += performance.now() - RU
        }
      }), [uU, qU]), IU.k.getItem(WU.Eb) > 2 ? (0, KU.jsx)(XU, {
        showingMovementControls: !1
      }) : (0, KU.jsxs)(KU.Fragment, {
        children: [UU && !PU || !GU || !1 === TU ? null : (0, KU.jsxs)("div", {
          className: EU()("ControlsTutorialDiv", {
            Covered: uU
          }),
          children: [(0, KU.jsx)(BU, {}), (0, KU.jsx)(rU, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, KU.jsx)(rU, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === qU && jU && (0, KU.jsx)(VU, {
          covered: uU
        }), (0, KU.jsx)(XU, {
          showingMovementControls: "done" !== qU
        })]
      })
    }));

    function BU() {
      const UU = (0, bU.o)();
      return (0, KU.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, KU.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), UU && (0, KU.jsx)(nU.b, {
          noaAction: "forward"
        }), !UU && (0, KU.jsxs)(KU.Fragment, {
          children: [(0, KU.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, KU.jsx)(nU.b, {
              noaAction: "forward"
            })
          }), (0, KU.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, KU.jsx)(nU.b, {
              noaAction: "left"
            }), (0, KU.jsx)(nU.b, {
              noaAction: "backward"
            }), (0, KU.jsx)(nU.b, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function VU(UU) {
      let {
        covered: RU
      } = UU;
      const {
        t: gU
      } = (0, aU.B)(), tU = (0, fU.g)("useInventory");
      return (0, KU.jsxs)("div", {
        className: EU()("ControlsTutorialDiv", {
          Covered: RU
        }),
        children: [(0, KU.jsx)(rU, {
          header: gU("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, KU.jsx)(rU, {
          header: gU("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== tU && (0, KU.jsx)(rU, {
          header: gU("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, KU.jsx)(rU, {
          header: gU("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function rU(UU) {
      let {
        header: RU,
        noaAction: gU
      } = UU;
      return (0, KU.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, KU.jsx)("div", {
          className: "KeyHeader",
          children: RU
        }), (0, KU.jsx)(nU.b, {
          noaAction: gU
        })]
      })
    }

    function XU(UU) {
      let {
        showingMovementControls: RU
      } = UU;
      const {
        isTouchScreen: gU
      } = (0, wU.l)(["isTouchScreen"]), pU = (0, bU.o)(), EU = (0, ZU.c)("OpenShop"), [PU, TU] = (0, tU.useState)(!1), qU = `SeenShopControls|${(0,JU.h)("connectedGame",(UU=>UU.gameNameWithVariation))}`, cU = () => (!(0, bU.g)() || null !== (0, oU.e)("OpenShop")) && !IU.k.getItem(qU) && mU.b.get("shopInfo") && !RU, GU = () => (TU(!0), IU.k.setItem(qU, !0), (0, bU.g)() || xU.p.yh("showShopTouchTutorial"), setTimeout((() => {
        TU(!1)
      }), 7e3));
      (0, tU.useEffect)((() => {
        let UU;
        const RU = xU.p.subscribe("showShopTutorial", (() => {
          cU() && (UU = GU())
        }));
        return () => {
          clearTimeout(UU), xU.p.unsubscribe(RU)
        }
      }), [RU]);
      const jU = (0, tU.useRef)();
      return (0, fU.f)("currencyAmounts", (UU => {
        if (cU()) {
          let gU = !1;
          const tU = mU.b.get("shopInfo");
          for (const pU in tU) {
            for (const EU in tU[pU].items) {
              var RU;
              const PU = tU[pU].items[EU];
              if (void 0 !== PU.currency && UU[PU.currency] && PU.cost <= UU[PU.currency].amount && (null === (RU = PU.hidden) || void 0 === RU || !RU)) {
                gU = !0;
                break
              }
            }
            if (gU) break
          }
          gU && (jU.current = GU())
        }
      })), (0, tU.useEffect)((() => () => {
        clearTimeout(jU.current)
      }), [RU]), !PU || pU && !EU ? null : (0, KU.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: gU && !pU ? null : (0, KU.jsx)(rU, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var vU = gU(1344),
      dU = gU(1049);
    const HU = (0, tU.memo)((function() {
      return (0, eU.d)(), (0, KU.jsx)(SU, {})
    }));
    class SU extends tU.Component {
      constructor(UU) {
        super(UU), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = xU.p.subscribe("TopRightHelper", (UU => {
          this.showQueue.push(UU), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        xU.p.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(UU, RU) {
        this.justShowed && (this.justShowed = !1, this.setState({
          currState: "slideIn"
        }), this.slideOutTimeout = setTimeout((() => {
          this.setState({
            currState: "slideOut"
          })
        }), 1e3 * ((this.currMessage.duration || 8) - 1)), this.hidingMessageTimeout = setTimeout((() => {
          this.showQueue.shift(), this.currMessage = null, this.setState({
            showQueue: this.showQueue,
            currState: null
          })
        }), 1e3 * (this.currMessage.duration || 8)))
      }
      render() {
        let UU, RU, gU, tU, pU, EU = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, UU = "slideIn") : "slideOut" === this.state.currState ? UU = "slideOut" : null === this.currMessage && (EU = !1), this.currMessage) {
          const EU = this.currMessage.color || "rgb(102, 102, 102)";
          RU = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === UU ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, gU = {
            backgroundColor: EU
          }, tU = {
            animation: "2s " + ("slideOut" === UU ? "CloseNotification" : "ExpandNotification")
          }, pU = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === UU ? "textDisappear" : "textAppear")
          }
        }
        return EU ? (0, KU.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...RU
          },
          children: [(0, KU.jsx)("div", {
            className: "LeftSide",
            style: gU,
            children: (0, KU.jsx)(dU.c, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, KU.jsx)("div", {
            className: "RightSide",
            style: tU,
            children: (0, KU.jsx)("div", {
              className: "HelperText",
              style: pU,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var sU = gU(36092),
      yU = gU(1376);
    const kU = (0, yU.i)((UU => UU.PadSneakChip));

    function FU(UU) {
      const [RU, gU, tU] = function(UU) {
        const RU = parseInt(UU.substring(1), 16),
          gU = (RU >> 16) / 255,
          tU = (RU >> 8 & 255) / 255,
          pU = (255 & RU) / 255,
          EU = Math.max(gU, tU, pU),
          PU = Math.min(gU, tU, pU),
          TU = (EU + PU) / 2,
          qU = EU - PU;
        if (0 === qU) return [0, 0, TU];
        const KU = qU / (1 - Math.abs(2 * TU - 1));
        let cU;
        cU = EU === gU ? (tU - pU) / qU % 6 : EU === tU ? (pU - gU) / qU + 2 : (gU - tU) / qU + 4;
        return [(60 * cU + 360) % 360, KU, TU]
      }(UU), pU = 0 === gU ? 0 : Math.min(.6, gU + .03), EU = tU > .5 ? -1 : 1, PU = iU(tU + .09 * EU);
      return {
        panel: UU,
        slot: AU(RU, pU, PU),
        slotSelected: AU(RU, pU, iU(PU + .2 * EU)),
        slotUnavailable: AU(RU, pU, iU(tU + -.1 * EU))
      }
    }

    function iU(UU) {
      return Math.min(1, Math.max(0, UU))
    }

    function AU(UU, RU, gU) {
      const tU = (1 - Math.abs(2 * gU - 1)) * RU,
        pU = tU * (1 - Math.abs(UU / 60 % 2 - 1)),
        EU = gU - tU / 2;
      let PU;
      return PU = UU < 60 ? [tU, pU, 0] : UU < 120 ? [pU, tU, 0] : UU < 180 ? [0, tU, pU] : UU < 240 ? [0, pU, tU] : UU < 300 ? [pU, 0, tU] : [tU, 0, pU], "#" + PU.map((UU => function(UU) {
        return Math.round(255 * UU).toString(16).padStart(2, "0")
      }(UU + EU))).join("")
    }
    var zU = gU(36120),
      MU = gU(3967),
      DU = gU(2233),
      LU = gU(2241),
      NU = gU(36182),
      lU = gU(4477),
      OU = gU(1432),
      UR = gU(581);

    function RR(UU, RU, gU, tU) {
      UU.style.display = "";
      const pU = UU.offsetWidth,
        EU = UU.offsetHeight,
        PU = Math.min(Math.max((RU.left + RU.right) / 2 - pU / 2, 8), window.innerWidth - 8 - pU);
      let TU = RU.top - gU - EU;
      const qU = [...tU].sort(((UU, RU) => RU.top - UU.top));
      for (const KU of qU) PU < KU.right && PU + pU > KU.left && TU < KU.bottom && TU + EU > KU.top && (TU = KU.top - 8 - EU);
      return TU < 8 ? (UU.style.display = "none", null) : (UU.style.transform = `translate(${PU-RU.left}px, ${TU-RU.top}px)`, {
        left: PU,
        top: TU,
        right: PU + pU,
        bottom: TU + EU
      })
    }

    function gR(UU) {
      const RU = [];
      for (const gU of document.querySelectorAll(UU)) {
        const UU = gU.getBoundingClientRect();
        UU.width > 0 && "visible" === getComputedStyle(gU).visibility && RU.push(UU)
      }
      return RU
    }

    function tR(UU, RU) {
      return UU.clientX >= RU.left - 8 && UU.clientX <= RU.right + 8 && UU.clientY >= RU.top - 8 && UU.clientY <= RU.bottom + 8
    }
    var pR = gU(8512);
    class ER {
      constructor(UU) {
        this.deps = UU, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(UU) {
        UU && "armed" === this.phase ? this.setPhase("ready") : UU || "ready" !== this.phase || this.setPhase("armed")
      }
      lift() {
        return "ready" !== this.phase ? (this.cancel(), !1) : (this.setPhase("locked"), !0)
      }
      cancel() {
        "idle" !== this.phase && this.setPhase("idle")
      }
      suspend() {
        this.suspendArming(), this.cancel()
      }
      suspendArming() {
        this.suspended = !0, "locked" !== this.phase && this.cancel()
      }
      startTouch() {
        this.suspended = !1, this.cancel()
      }
      hold(UU, RU) {
        this.suspended || (this.offered ? RU || this.setPhase("idle") : UU && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : UU || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(UU) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const RU = this.phase;
        this.phase = UU, this.deps.onPhase(UU, RU)
      }
    }
    const PR = 25 * Math.PI / 180,
      TR = 45 * Math.PI / 180;
    class qR extends ER {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(UU, RU, gU) {
        this.speed = gU;
        const tU = Math.hypot(UU, RU),
          pU = tU > 0 ? Math.acos(Math.min(1, -RU / tU)) : Math.PI;
        this.hold(tU >= .8 && pU <= PR, tU >= .5 && pU <= TR)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var KR = gU(1287);

    function cR(UU, RU) {
      const gU = (0, tU.useRef)(null),
        pU = (0, tU.useRef)(RU);
      return pU.current = RU, (0, tU.useEffect)((() => {
        if (!UU) return;
        const {
          create: RU,
          elementRef: tU,
          ringRef: EU,
          classPrefix: PU,
          keptBehindMovementPanels: TU,
          resizeEnds: qU
        } = pU.current, KU = {
          charging: `${PU}Charging`,
          armed: `${PU}Armed`,
          ready: `${PU}Ready`,
          locked: `${PU}Locked`
        };
        let cU = null;
        const GU = RU({
          onPhase: (UU, RU) => {
            const gU = tU.current;
            if (null !== gU) {
              for (const [RU, tU] of Object.entries(KU)) gU.classList.toggle(tU, RU === UU);
              if ("charging" === UU) cU = EU.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === UU) {
                var PU;
                null === (PU = cU) || void 0 === PU || PU.cancel(), cU = null
              }
              var TU, qU;
              if ("armed" === UU && "charging" === RU && pU.current.onArmed(), "ready" === UU && pR.d.play("lockReady"), "locked" === UU) pR.d.play("lockLocked"), null === (TU = (qU = pU.current).onLocked) || void 0 === TU || TU.call(qU);
              "locked" === RU && pU.current.onUnlocked()
            }
          }
        });
        gU.current = GU;
        const jU = () => {
            GU.suspend()
          },
          uU = () => {
            "hidden" === document.visibilityState && jU()
          },
          CU = () => {
            qU ? GU.suspend() : GU.suspendArming()
          },
          hU = (0, KR.f)((UU => {
            let {
              keepsMovement: RU
            } = UU;
            RU && TU ? GU.suspendArming() : jU()
          }));
        return document.addEventListener("visibilitychange", uU), window.addEventListener("blur", jU), window.addEventListener("resize", CU), () => {
          hU(), document.removeEventListener("visibilitychange", uU), window.removeEventListener("blur", jU), window.removeEventListener("resize", CU), GU.cancel(), gU.current = null
        }
      }), [UU]), (0, JU.d)("localPlayerAliveSet", (() => {
        var UU;
        null === (UU = gU.current) || void 0 === UU || UU.suspend()
      })), gU
    }
    var GR = gU(2272),
      jR = gU(2286),
      uR = gU(1099),
      CR = gU(3108),
      hR = gU(2292);

    function QR(UU, RU, gU) {
      const tU = function(UU, RU, gU) {
        const tU = gU.map((gU => ({
            left: Math.max(0, gU.left),
            top: Math.max(0, gU.top),
            right: Math.min(UU, gU.right),
            bottom: Math.min(RU, gU.bottom)
          }))).filter((UU => UU.right > UU.left && UU.bottom > UU.top)),
          pU = [...new Set([0, RU, ...tU.flatMap((UU => [UU.top, UU.bottom]))])].sort(((UU, RU) => UU - RU)),
          EU = [];
        for (let PU = 0; PU < pU.length - 1; PU++) {
          const RU = pU[PU],
            gU = pU[PU + 1],
            TU = tU.filter((UU => UU.top <= RU && UU.bottom >= gU)).map((UU => [UU.left, UU.right])).sort(((UU, RU) => UU[0] - RU[0]));
          let qU = 0;
          for (const [UU, tU] of TU) UU > qU && EU.push({
            left: qU,
            top: RU,
            right: UU,
            bottom: gU
          }), qU = Math.max(qU, tU);
          qU < UU && EU.push({
            left: qU,
            top: RU,
            right: UU,
            bottom: gU
          })
        }
        return EU
      }(UU, RU, gU);
      if (0 === tU.length) return 'path("M0 0Z")';
      if (1 === tU.length && 0 === tU[0].left && 0 === tU[0].top && tU[0].right === UU && tU[0].bottom === RU) return "";
      const pU = UU => Math.round(10 * UU) / 10;
      return `path("${tU.map((UU=>`M${pU(UU.left)} ${pU(UU.top)}H${pU(UU.right)}V${pU(UU.bottom)}H${pU(UU.left)}Z`)).join("")}")`
    }

    function eR(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const pU = [],
        EU = 2 * gU / tU;
      for (let PU = 0; PU < tU; PU++) {
        const tU = RU - gU + PU * EU,
          TU = tU + EU,
          qU = Math.min(Math.max(RU, tU), TU) - RU,
          KU = Math.sqrt(Math.max(0, gU * gU - qU * qU));
        pU.push({
          left: UU - KU,
          top: tU,
          right: UU + KU,
          bottom: TU
        })
      }
      return pU
    }
    var WR = gU(8516),
      fR = gU(36157);

    function xR(UU) {
      const RU = UU.getBoundingClientRect(),
        gU = {
          left: RU.left,
          top: RU.top,
          right: RU.right,
          bottom: RU.bottom
        },
        tU = (0, NU.h)(UU);
      if (tU.whole) return [gU];
      const pU = function(UU) {
          const RU = UU.right - UU.left,
            gU = UU.bottom - UU.top,
            tU = Math.min(RU, gU) / 2,
            pU = (UU.left + UU.right) / 2,
            EU = (UU.top + UU.bottom) / 2;
          return RU >= gU ? [{
            left: UU.left + tU,
            top: UU.top,
            right: UU.right - tU,
            bottom: UU.bottom
          }, ...eR(UU.left + tU, EU, tU), ...eR(UU.right - tU, EU, tU)] : [{
            left: UU.left,
            top: UU.top + tU,
            right: UU.right,
            bottom: UU.bottom - tU
          }, ...eR(pU, UU.top + tU, tU), ...eR(pU, UU.bottom - tU, tU)]
        }(gU),
        EU = tU.keyBox;
      if (EU) {
        const UU = (gU.left + gU.right) / 2,
          RU = (gU.top + gU.bottom) / 2;
        pU.push({
          left: UU - EU.width / 2,
          top: RU - EU.height / 2,
          right: UU + EU.width / 2,
          bottom: RU + EU.height / 2
        })
      }
      return pU
    }

    function mR(UU) {
      const RU = UU.getBoundingClientRect();
      return 0 === RU.width && 0 === RU.height || "visible" !== getComputedStyle(UU).visibility ? [] : [(0, WR.n)(RU, 44)]
    }

    function IR(UU, RU) {
      (0, tU.useEffect)((() => {
        const gU = UU.current;
        if (!RU || !gU) return;
        const tU = () => {
          const UU = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            RU = UU.find((UU => UU.classList.contains("TouchInteractHit")));
          RU !== pU && (pU && EU.unobserve(pU), pU = RU, RU && EU.observe(RU));
          const tU = Array.from(document.querySelectorAll(hR.d)),
            PU = [...UU.flatMap((UU => xR(UU))), ...tU.flatMap(mR)],
            TU = function(UU, RU) {
              const gU = RU.map((RU => ({
                left: RU.left - UU.left,
                top: RU.top - UU.top,
                right: RU.right - UU.left,
                bottom: RU.bottom - UU.top
              })));
              return QR(Math.ceil(UU.width), Math.ceil(UU.height), gU)
            }(gU.getBoundingClientRect(), PU);
          gU.style.clipPath !== TU && (gU.style.clipPath = TU)
        };
        let pU;
        const EU = new ResizeObserver((() => {
          tU()
        }));
        tU(), EU.observe(gU);
        const PU = gU.closest(".InGameUi"),
          TU = new MutationObserver(tU);
        PU && TU.observe(PU, {
          attributes: !0,
          attributeFilter: ["class", fR.f]
        });
        const qU = [(0, xU.t)(CR.b, tU), (0, xU.t)(hR.q, tU), (0, xU.t)(hR.f, tU)];
        return () => {
          EU.disconnect(), TU.disconnect();
          for (const UU of qU) UU();
          gU.style.clipPath = ""
        }
      }), [UU, RU])
    }
    var JR = gU(4065);

    function wR(UU) {
      var RU;
      let {
        onMove: gU,
        mode: pU,
        speedCurve: EU,
        autorun: PU = !1
      } = UU;
      const TU = (0, tU.useRef)(null),
        qU = (0, tU.useRef)(null),
        cU = (0, tU.useRef)(null),
        GU = (0, tU.useRef)(null),
        uU = (0, tU.useRef)(null),
        CU = (0, tU.useRef)(null),
        hU = (0, tU.useRef)(null),
        QU = (0, tU.useRef)(null),
        eU = (0, tU.useRef)(null),
        WU = (0, tU.useRef)(!1),
        fU = (0, tU.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: xU
        } = (0, aU.B)(),
        mU = (0, JR.r)(pU),
        IU = (0, wU.l)(["notchSize"]).notchSize,
        JU = IU.left,
        nU = (0, tU.useRef)(16),
        bU = (0, jR.b)(),
        [oU, ZU, YU] = "pinned" === pU ? GR.n : null !== (RU = bU.hudElements.joystick) && void 0 !== RU ? RU : GR.n,
        BU = "pinned" === pU ? null : bU.hudSafe,
        VU = Math.max(JR.l, JR.o * YU);
      IR(qU, "pinned" !== pU);
      const rU = function(UU, RU, gU, pU, EU) {
        const PU = (0, tU.useRef)(null),
          TU = () => {
            clearInterval(PU.current), PU.current = null
          },
          qU = cR(UU, {
            create: UU => new qR(UU),
            elementRef: RU,
            ringRef: gU,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: EU,
            onLocked: () => {
              PU.current = setInterval((() => {
                jU.gameBridge.lookup("dropAhead", null) && (pR.d.play("autorunLedgeStop"), qU.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              TU(), pU()
            }
          });
        return (0, tU.useEffect)((() => TU), []), qU
      }(PU, cU, hU, (() => {
        kU(), yU()
      }), (() => {
        XU(), null === eU.current && rU.current.suspend()
      }));

      function XU() {
        const UU = cU.current.getBoundingClientRect();
        eU.current = RR(QU.current, UU, 80, gR(`.TouchInventoryKey, ${hR.d}`)), WU.current = null !== eU.current && tR(fU.current, eU.current)
      }

      function vU() {
        const {
          innerWidth: UU,
          innerHeight: RU
        } = window, gU = (0, hR.D)(BU, UU, RU, (0, hR.L)(IU, UU, RU), nU.current);
        return {
          left: gU[3],
          bottom: gU[2]
        }
      }

      function HU(UU) {
        cU.current.style.transform = `translate(${UU.x-VU}px, ${UU.y-VU}px)`
      }

      function SU(UU) {
        const RU = cU.current;
        RU.classList.add("Resting"), RU.classList.toggle("Returning", UU), RU.style.display = "fixed_hidden" === pU ? "none" : "block", HU(function() {
          const {
            innerWidth: UU,
            innerHeight: RU
          } = window, gU = vU(), tU = JU * UU / 100 + gU.left, pU = TU.current.offsetHeight || RU, EU = ((0, uR.c)(UU, RU) ? JR.f : JR.c) + gU.bottom;
          return {
            x: Math.min(UU - VU, Math.max(VU, tU + JR.i + oU * UU)),
            y: Math.min(pU - VU, Math.max(VU, pU - EU + ZU * pU))
          }
        }())
      }
      const sU = (0, tU.useRef)({
        restFixed: SU,
        release: FU
      });

      function yU() {
        mU ? SU("fixed_shown" === pU) : "floating" === pU && (cU.current.style.display = "none"), gU({
          x: 0,
          y: 0
        })
      }

      function kU() {
        CU.current = null, uU.current = null, GU.current.style.transform = "translate(-50%, -50%)"
      }

      function FU(UU) {
        kU();
        const RU = rU.current;
        UU && null !== RU && void 0 !== RU && RU.lift() ? gU({
          x: 0,
          y: -RU.lockedSpeed
        }) : (null === RU || void 0 === RU || RU.cancel(), yU())
      }

      function iU(UU) {
        const RU = Array.from(UU.touches).find((UU => UU.identifier === CU.current));
        if (null === uU.current || null === CU.current || (0, UR.E)(RU)) return;
        const tU = rU.current,
          pU = RU.clientX - uU.current.x,
          PU = RU.clientY - uU.current.y,
          TU = Math.hypot(pU, PU),
          qU = TU > 0 ? Math.min(1, VU / TU) : 0,
          KU = pU * qU,
          cU = PU * qU,
          jU = Math.hypot(KU, cU) / VU,
          hU = EU && jU > 0 ? EU(jU) / jU : 1;
        GU.current.style.transform = `translate(calc(-50% + ${KU}px), calc(-50% + ${cU}px))`;
        const QU = KU / VU,
          xU = cU / VU;
        if (gU({
            x: QU * hU,
            y: xU * hU
          }), null !== tU && null !== eU.current) {
          tU.move(QU, xU, jU * hU), fU.current = {
            clientX: RU.clientX,
            clientY: RU.clientY
          };
          const UU = WU.current;
          WU.current = tR(RU, eU.current), WU.current !== UU && tU.target(WU.current)
        }
      }
      return sU.current = {
        restFixed: SU,
        release: FU
      }, (0, tU.useLayoutEffect)((() => {
        if (!mU) return;
        const UU = () => {
          nU.current = (0, hR.P)(document)
        };
        UU(), null === CU.current && sU.current.restFixed(!1);
        const RU = new ResizeObserver((() => {
          UU(), null === CU.current && sU.current.restFixed(!1)
        }));
        RU.observe(TU.current);
        const gU = cU.current;
        return () => {
          RU.disconnect(), gU.classList.remove("Resting", "Returning"), null === CU.current && (gU.style.display = "", gU.style.transform = "")
        }
      }), [mU, pU, IU, oU, ZU, VU, BU]), (0, tU.useEffect)((() => {
        const UU = UU => {
            const RU = CU.current;
            null === RU || Array.from(UU.touches).some((UU => UU.identifier === RU)) || sU.current.release("touchend" === UU.type && Array.from(UU.changedTouches).some((UU => UU.identifier === RU)))
          },
          RU = () => {
            null !== CU.current && sU.current.release(!1)
          },
          gU = () => {
            "hidden" === document.visibilityState && RU()
          };
        document.addEventListener("touchstart", UU, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", UU, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", UU, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", UU, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", RU), document.addEventListener("visibilitychange", gU);
        const tU = (0, KR.f)((UU => {
          let {
            keepsMovement: gU
          } = UU;
          gU || RU()
        }));
        return () => {
          tU(), document.removeEventListener("touchstart", UU, {
            capture: !0
          }), document.removeEventListener("touchmove", UU, {
            capture: !0
          }), document.removeEventListener("touchend", UU, {
            capture: !0
          }), document.removeEventListener("touchcancel", UU, {
            capture: !0
          }), window.removeEventListener("blur", RU), document.removeEventListener("visibilitychange", gU)
        }
      }), []), (0, tU.useEffect)((() => {
        const UU = TU.current,
          RU = UU => {
            UU.preventDefault()
          };
        return UU.addEventListener("touchstart", RU, {
          passive: !1
        }), () => {
          UU.removeEventListener("touchstart", RU)
        }
      }), []), (0, KU.jsxs)("div", {
        ref: TU,
        className: "JoystickZone",
        style: mU && (oU > 0 || YU > 1 || vU().left > 0) ? {
          width: `max(35vw, calc(${JU+100*oU}vw + ${vU().left+JR.i+VU+24}px))`
        } : void 0,
        onTouchStart: function(UU) {
          var RU;
          if (null !== CU.current) return;
          const gU = Array.from(UU.changedTouches).find((UU => {
            var RU;
            return null === (RU = TU.current) || void 0 === RU ? void 0 : RU.contains(UU.target)
          }));
          if (gU) {
            if (null === (RU = rU.current) || void 0 === RU || RU.startTouch(), CU.current = gU.identifier, "pinned" === pU) {
              const UU = cU.current.getBoundingClientRect();
              uU.current = {
                x: UU.left + UU.width / 2,
                y: UU.top + UU.height / 2
              }
            } else {
              uU.current = {
                x: gU.clientX,
                y: gU.clientY
              }, cU.current.classList.remove("Resting", "Returning"), cU.current.style.display = "block";
              const UU = TU.current.getBoundingClientRect();
              HU({
                x: gU.clientX - UU.left,
                y: gU.clientY - UU.top
              }), PU && (fU.current = {
                clientX: gU.clientX,
                clientY: gU.clientY
              }, XU())
            }
            iU(UU)
          }
        },
        onTouchMove: iU,
        children: [(0, KU.jsx)("div", {
          ref: qU,
          className: "JoystickTouchLayer"
        }), (0, KU.jsxs)("div", {
          ref: cU,
          className: "Joystick",
          style: {
            width: 2 * VU + "px",
            height: 2 * VU + "px",
            transform: "pinned" === pU ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, KU.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * VU + "px",
              height: 2 * VU + "px"
            }
          }), PU && (0, KU.jsxs)(KU.Fragment, {
            children: [(0, KU.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, KU.jsx)("circle", {
                ref: hU,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, KU.jsxs)("div", {
              ref: QU,
              className: "AutorunTarget",
              children: [(0, KU.jsx)(dU.c, {
                name: "lock"
              }), xU("settingsMenu:autoRun")]
            })]
          }), (0, KU.jsx)("div", {
            ref: GU,
            className: "JoystickKnob",
            style: {
              width: `${VU}px`,
              height: `${VU}px`
            }
          })]
        })]
      })
    }
    const nR = .35,
      bR = .22;

    function oR(UU) {
      if (UU < .1) return 0;
      if (UU < nR) {
        const RU = (UU - .1) / (nR - .1);
        return .06 + .16 * RU * RU
      }
      return UU < .85 ? bR + .78 * (UU - nR) / .5 : 1
    }

    function ZR(UU, RU) {
      const gU = (0, tU.useRef)(null);
      return (0, tU.useLayoutEffect)((() => (NU.i.set(UU, gU.current, RU), () => {
        NU.i.set(UU, null)
      })), [UU, RU]), gU
    }
    const aR = "C",
      YR = "J",
      BR = "U",
      VR = "P",
      rR = "A",
      XR = "G",
      vR = "X",
      dR = (0, tU.forwardRef)((function(UU, RU) {
        let {
          slot: gU,
          canvasZone: pU = !1,
          lit: PU = !1,
          label: TU,
          className: qU,
          children: cU,
          ...GU
        } = UU;
        return (0, tU.useEffect)((() => (xU.p.yh(CR.b), () => {
          xU.p.yh(CR.b)
        })), []), (0, KU.jsx)("div", {
          ref: RU,
          className: EU()("TouchKeyHit", `TouchSlot${gU}`, qU, {
            CanvasZone: pU
          }),
          ...GU,
          children: (0, KU.jsxs)("div", {
            className: EU()("TouchKey", {
              Lit: PU,
              Labelled: void 0 !== TU
            }),
            children: [cU, void 0 !== TU && (0, KU.jsx)("span", {
              className: "TouchKeyLabel",
              children: TU
            })]
          })
        })
      }));

    function HR(UU, RU) {
      (0, tU.useEffect)((() => () => {
        RU.current && (RU.current = !1, (0, LU.D)(UU, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function SR(UU, RU) {
      const gU = RU ? [vR] : [VR, vR];
      return UU.filter((UU => null !== UU)).slice(0, gU.length).map(((UU, RU) => {
        const pU = gU[RU];
        return (0, KU.jsx)(tU.Fragment, {
          children: UU.render(pU)
        }, `${UU.id}:${pU}`)
      }))
    }
    var sR = gU(36165);
    class yR extends ER {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(UU, RU) {
        this.start = {
          x: UU,
          y: RU
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(UU, RU, gU) {
        const tU = Math.hypot(UU - this.start.x, RU - this.start.y) <= 12;
        this.moved ||= !tU;
        const pU = null !== gU && RU < this.start.y - 12 && tR({
          clientX: UU,
          clientY: RU
        }, gU);
        this.hold(!this.moved, tU || pU)
      }
    }
    const kR = new Set;

    function FR(UU) {
      const RU = new Set(Array.from(UU.touches, (UU => UU.identifier)));
      for (const gU of kR) {
        for (const UU of gU.ids) RU.has(UU) || gU.ids.delete(UU);
        if (0 === gU.ids.size) {
          kR.delete(gU);
          gU.pressesOnPointerDown && "touchstart" === UU.type && Array.from(UU.changedTouches).some((UU => UU.target instanceof Node && gU.element.contains(UU.target))) || gU.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const eP of ["touchstart", "touchmove"]) window.addEventListener(eP, FR, {
        capture: !0,
        passive: !0
      });

    function iR(UU) {
      let {
        pressesOnPointerDown: RU = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const gU = (0, tU.useRef)(UU);
      gU.current = UU;
      const pU = (0, tU.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: RU,
        release: () => {
          gU.current()
        }
      });
      (0, tU.useEffect)((() => {
        const UU = pU.current;
        return () => {
          kR.delete(UU), UU.ids.clear()
        }
      }), []);
      const EU = UU => {
        const RU = pU.current;
        for (const gU of Array.from(UU.changedTouches)) RU.ids.delete(gU.identifier);
        0 === RU.ids.size && kR.delete(RU)
      };
      return {
        onTouchStart: UU => {
          const RU = pU.current;
          RU.element = UU.currentTarget;
          for (const gU of Array.from(UU.changedTouches)) gU.target instanceof Node && UU.currentTarget.contains(gU.target) && RU.ids.add(gU.identifier);
          RU.ids.size > 0 && kR.add(RU)
        },
        onTouchEnd: EU,
        onTouchCancel: EU
      }
    }

    function AR(UU, RU) {
      return null === RU ? null : (0, sR.d)(UU.nativeEvent.changedTouches, RU.id)
    }

    function zR(UU) {
      let {
        lockable: RU
      } = UU;
      const {
        t: gU
      } = (0, aU.B)(), pU = "round" === (0, GR.eb)().hudShape, EU = (0, tU.useRef)(!1);
      HR(DU.w.Jump, EU);
      const PU = (0, tU.useRef)(null),
        TU = (0, tU.useRef)(null),
        qU = (0, tU.useRef)(null),
        cU = (0, tU.useRef)(null),
        GU = (0, tU.useRef)(null),
        jU = (0, tU.useRef)(null),
        uU = (0, tU.useRef)(!1),
        CU = (UU, RU) => {
          EU.current = UU, (0, LU.D)(DU.w.Jump, UU, RU)
        },
        hU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          EU.current && (PU.current && (0, OU.l)(PU.current, !1), CU(!1, UU))
        },
        QU = cR(RU, {
          create: UU => new yR(UU),
          elementRef: PU,
          ringRef: TU,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const UU = PU.current.getBoundingClientRect(),
              RU = qU.current.parentElement,
              gU = RU.getBoundingClientRect(),
              tU = {
                left: gU.left + RU.clientLeft,
                top: gU.top + RU.clientTop,
                right: gU.right - RU.clientLeft,
                bottom: gU.bottom - RU.clientTop
              };
            if (GU.current = RR(qU.current, tU, 16, gR(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${hR.d}`)), null === GU.current) return void QU.current.suspend();
            const pU = GU.current;
            jU.current = {
              left: Math.min(UU.left, pU.left),
              top: pU.top,
              right: Math.max(UU.right, pU.right),
              bottom: UU.bottom
            }, uU.current = null !== cU.current && tR({
              clientX: cU.current.x,
              clientY: cU.current.y
            }, pU)
          },
          onUnlocked: () => {
            null === cU.current && hU()
          }
        }),
        eU = UU => {
          var RU;
          cU.current = null, null === (RU = QU.current) || void 0 === RU || RU.cancel(), hU(UU)
        },
        WU = iR((() => {
          eU()
        })),
        fU = UU => {
          const RU = cU.current;
          var gU;
          return null === RU ? null !== (gU = QU.current) && void 0 !== gU && gU.locked ? null : "lifted" : AR(UU, RU) ? "lifted" : (0, sR.g)(UU.nativeEvent.touches, RU.id) ? null : "dropped"
        };
      return (0, KU.jsxs)(dR, {
        ref: PU,
        slot: YR,
        className: "JumpKey",
        onTouchStart: UU => {
          WU.onTouchStart(UU), (0, OU.l)(UU.currentTarget, !0), null === cU.current || (0, sR.g)(UU.nativeEvent.touches, cU.current.id) || eU();
          const RU = UU.changedTouches[0];
          var gU;
          null === cU.current && RU && (cU.current = {
            id: RU.identifier,
            x: RU.clientX,
            y: RU.clientY
          }, null === (gU = QU.current) || void 0 === gU || gU.press(RU.clientX, RU.clientY));
          EU.current || CU(!0, UU.nativeEvent)
        },
        onTouchMove: UU => {
          const RU = cU.current,
            gU = AR(UU, RU);
          if (!gU) return;
          const tU = QU.current;
          if (null === tU || void 0 === tU || tU.move(gU.clientX, gU.clientY, jU.current), null !== tU && void 0 !== tU && tU.offered) {
            const UU = tR(gU, GU.current);
            UU !== uU.current && (uU.current = UU, tU.target(UU))
          }
          RU.x = gU.clientX, RU.y = gU.clientY
        },
        onTouchEnd: UU => {
          var RU;
          WU.onTouchEnd(UU);
          const gU = fU(UU);
          null !== gU && ("dropped" !== gU ? (cU.current = null, null !== (RU = QU.current) && void 0 !== RU && RU.lift() ? (0, OU.l)(UU.currentTarget, !1) : hU(UU.nativeEvent)) : eU(UU.nativeEvent))
        },
        onTouchCancel: UU => {
          WU.onTouchCancel(UU), null !== fU(UU) && eU(UU.nativeEvent)
        },
        children: [(0, KU.jsx)(dU.c, {
          name: "arrow-up-from-line"
        }), RU && (0, KU.jsxs)(KU.Fragment, {
          children: [(0, KU.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, KU.jsx)(dU.c, {
              name: "lock"
            })
          }), (0, KU.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, KU.jsx)("rect", {
              ref: TU,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: pU ? 48 : 0,
              pathLength: 1
            })
          }), (0, KU.jsxs)("div", {
            ref: qU,
            className: "JumpLockTarget",
            children: [(0, KU.jsx)(dU.c, {
              name: "lock"
            }), gU("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const MR = new WeakMap;
    class DR {
      constructor(UU) {
        this.zones = UU, this.followed = new Map, this.onStart = UU => {
          if (this.releaseMissing(UU.touches), UU.target instanceof HTMLCanvasElement)
            for (let gU = 0; gU < UU.changedTouches.length; gU++) {
              var RU;
              const {
                identifier: tU,
                clientX: pU,
                clientY: EU
              } = UU.changedTouches[gU];
              this.release(tU);
              const PU = this.zones.hitZone(pU, EU);
              if (!PU) continue;
              const {
                key: TU
              } = PU;
              null === (RU = MR.get(TU)) || void 0 === RU || RU.cancel();
              const qU = {
                hit: PU.element,
                key: TU,
                x: PU.x,
                y: PU.y,
                reach: .6 * PU.radius
              };
              this.followed.set(tU, qU), (0, OU.l)(PU.element, !0), LR(qU, pU, EU)
            }
        }, this.onMove = UU => {
          this.releaseMissing(UU.touches);
          for (let RU = 0; RU < UU.changedTouches.length; RU++) {
            const {
              identifier: gU,
              clientX: tU,
              clientY: pU
            } = UU.changedTouches[RU], EU = this.followed.get(gU);
            EU && LR(EU, tU, pU)
          }
        }, this.onEnd = UU => {
          for (let RU = 0; RU < UU.changedTouches.length; RU++) this.release(UU.changedTouches[RU].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const UU = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, UU), document.addEventListener("touchmove", this.onMove, UU), document.addEventListener("touchend", this.onEnd, UU), document.addEventListener("touchcancel", this.onEnd, UU), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(UU) {
        for (const RU of [...this.followed.keys()])(0, sR.g)(UU, RU) || this.release(RU)
      }
      releaseAll() {
        for (const UU of [...this.followed.keys()]) this.release(UU)
      }
      release(UU) {
        const RU = this.followed.get(UU);
        if (!RU) return;
        this.followed.delete(UU);
        for (const pU of this.followed.values())
          if (pU.key === RU.key) return;
        (0, OU.l)(RU.hit, !1);
        const {
          key: gU
        } = RU, tU = gU.style.translate;
        gU.style.translate = "", tU && MR.set(gU, gU.animate({
          translate: [tU, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function LR(UU, RU, gU) {
      let {
        key: tU,
        x: pU,
        y: EU,
        reach: PU
      } = UU;
      const TU = RU - pU,
        qU = gU - EU,
        KU = Math.min(1, PU / (Math.hypot(TU, qU) || 1));
      tU.style.translate = `${TU*KU}px ${qU*KU}px`
    }
    const NR = () => {
      const UU = (0, MU.i)(),
        RU = (0, bU.o)();
      return UU || RU
    };

    function lR(UU) {
      (0, NU.m)(UU.x, UU.y)
    }
    const OR = (0, tU.memo)((function() {
        const UU = NR(),
          {
            joystickMode: RU,
            touchSpeedCurve: gU,
            autorun: pU
          } = (0, wU.l)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, tU.useEffect)((() => ((0, lU.f)(DU.z.TouchControls, DU.z.TouchControls), () => {
          (0, lU.f)(DU.z.TouchControls, 0), (0, NU.m)(0, 0)
        })), []), (0, KU.jsx)("div", {
          className: EU()("TouchMovementWrapper", {
            Hidden: UU
          }),
          "data-camera-keeper": "",
          children: (0, KU.jsx)(wR, {
            onMove: lR,
            mode: RU,
            speedCurve: gU ? oR : void 0,
            autorun: pU
          })
        })
      })),
      Ug = (0, tU.memo)((function() {
        const UU = NR(),
          {
            clientEscMenuOptions: RU
          } = (0, wU.l)(["clientEscMenuOptions"]),
          gU = RU.touchActionButtons;
        return (0, tU.useEffect)((() => new DR(NU.i).start()), []), (0, tU.useEffect)((() => {
          xU.p.yh(CR.b)
        }), [UU]), (0, KU.jsxs)("div", {
          className: EU()("TouchComponentsButtons", {
            Hidden: UU
          }),
          "data-camera-keeper": "",
          children: [(0, KU.jsx)(zR, {
            lockable: RU.jumpLock && !UU
          }), (0, KU.jsx)(jg, {
            hidden: UU,
            actionButtons: gU
          }), (0, KU.jsx)(gg, {})]
        })
      }));

    function Rg(UU) {
      const RU = RU => gU => {
        (0, OU.l)(gU.currentTarget, RU), UU(RU, gU.nativeEvent)
      };
      return {
        onPointerDown: RU(!0),
        onPointerUp: RU(!1),
        onPointerCancel: RU(!1)
      }
    }

    function gg() {
      const UU = (0, fU.g)("canCrouch"),
        RU = (0, JU.k)("crouching"),
        gU = (0, tU.useRef)(!1);
      HR(DU.w.Crouch, gU);
      const pU = (UU, RU) => {
          gU.current = UU, (0, LU.D)(DU.w.Crouch, UU, RU)
        },
        EU = (0, tU.useRef)(null),
        PU = () => {
          gU.current && (EU.current && (0, OU.l)(EU.current, !1), pU(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        TU = iR(PU);
      return (0, tU.useEffect)((() => {
        !1 === UU && PU()
      }), [UU]), !1 === UU ? null : (0, KU.jsx)(dR, {
        ref: EU,
        slot: aR,
        className: "CrouchKey",
        lit: RU,
        ...TU,
        ...Rg(pU),
        children: (0, KU.jsx)(dU.c, {
          name: "arrow-down-to-line"
        })
      })
    }
    const tg = [{
        icon: "arrows-rotate"
      }],
      pg = [{
        icon: "Arrow"
      }],
      Eg = [{
        icon: "crosshairs"
      }],
      Pg = [{
        icon: "swords"
      }],
      Tg = [{
        icon: "hand-back-point-up"
      }],
      qg = [{
        icon: "Firecracker"
      }];

    function Kg(UU, RU, gU, tU) {
      return {
        id: JSON.stringify(RU),
        render: pU => (0, KU.jsx)(ug, {
          code: UU,
          slot: pU,
          icon: RU,
          label: tU,
          hidden: gU
        })
      }
    }

    function cg(UU, RU) {
      return {
        id: "fly",
        render: gU => (0, KU.jsx)(Gg, {
          slot: gU,
          flying: UU,
          label: RU
        })
      }
    }

    function Gg(UU) {
      let {
        slot: RU,
        flying: gU,
        label: tU
      } = UU;
      return (0, KU.jsx)(dR, {
        slot: RU,
        className: "FlyKey",
        lit: gU,
        label: tU,
        ...Rg(((UU, RU) => {
          (0, LU.D)(DU.w.Fly, UU, RU)
        })),
        children: (0, KU.jsx)(dU.c, {
          name: "feather-pointed"
        })
      })
    }

    function jg(UU) {
      var RU, gU;
      let {
        hidden: tU,
        actionButtons: pU
      } = UU;
      const {
        t: EU
      } = (0, aU.B)(), {
        gun: PU,
        aimable: TU,
        chargeName: qU
      } = (0, JU.k)("heldItemAim"), cU = (0, JU.k)("gliderBoostFuel"), {
        canFly: GU,
        flying: jU
      } = (0, JU.k)("flight"), uU = (0, fU.g)("touchscreenActionButton"), CU = PU ? tg : uU, hU = TU ? {
        icon: pg,
        label: EU("touchKeys:aim")
      } : null, QU = null !== qU ? {
        icon: [{
          icon: qU
        }]
      } : null, eU = null !== hU && void 0 !== hU ? hU : QU, WU = null !== (RU = null === (gU = PU ? hU : null !== QU && void 0 !== QU ? QU : hU) || void 0 === gU ? void 0 : gU.icon) && void 0 !== RU ? RU : Tg, xU = [!pU && eU ? Kg(NU.e.Action2, eU.icon, tU, eU.label) : null, PU ? Kg(NU.e.Action3, Eg, tU, EU("touchKeys:scope")) : null, GU ? cg(jU, EU("touchKeys:fly")) : null];
      return (0, KU.jsxs)(KU.Fragment, {
        children: [CU && (0, KU.jsx)(ug, {
          code: NU.e.Action1,
          slot: XR,
          icon: CU,
          label: PU ? EU("touchKeys:reload") : void 0,
          hidden: tU
        }, JSON.stringify(CU)), pU && (0, KU.jsxs)(KU.Fragment, {
          children: [(0, KU.jsx)(ug, {
            code: NU.e.Attack,
            slot: rR,
            icon: Pg,
            name: EU("touchKeys:attack"),
            hidden: tU
          }), (0, KU.jsx)(ug, {
            code: NU.e.Use,
            slot: BR,
            icon: WU,
            name: EU("touchKeys:use"),
            hidden: tU
          })]
        }), SR(xU, pU), cU > 0 && (0, KU.jsx)(ug, {
          code: NU.e.Boost,
          slot: vR,
          icon: qg,
          label: EU("touchKeys:boost", {
            fuel: cU > 99 ? "99+" : cU
          }),
          hidden: tU
        })]
      })
    }

    function ug(UU) {
      let {
        code: RU,
        slot: gU,
        icon: tU,
        label: pU,
        name: EU,
        hidden: PU
      } = UU;
      const TU = ZR(RU, PU);
      return (0, KU.jsx)(dR, {
        ref: TU,
        slot: gU,
        className: "TouchActionKey",
        canvasZone: !0,
        label: pU,
        role: void 0 !== EU ? "img" : void 0,
        "aria-label": EU,
        children: (0, KU.jsx)(qU.e, {
          text: tU
        })
      })
    }
    var Cg = gU(3945),
      hg = gU(2691),
      Qg = gU(616);
    const eg = (0, tU.memo)((function() {
      (0, eU.d)();
      const UU = (0, tU.useRef)([]),
        RU = (0, hg.b)(),
        gU = (0, tU.useRef)(0),
        pU = (0, tU.useRef)(0),
        EU = (0, tU.useRef)([]),
        PU = (0, tU.useRef)(null);

      function cU(gU, tU, pU, EU) {
        const PU = (0, Qg.e)(),
          TU = setTimeout((() => {
            UU.current = UU.current.filter((UU => UU.id !== PU)), RU()
          }), EU);
        jU.gameBridge.send("recordFlyingMiddleText", {
          content: gU,
          rE: tU,
          angle: pU,
          XE: EU
        }), UU.current.push({
          id: PU,
          content: gU,
          rE: tU,
          XE: EU,
          removeTimeout: TU,
          angle: pU
        }), RU()
      }
      return (0, JU.d)("shotDamageToShow", (UU => {
        let {
          damage: RU,
          wasCrit: gU,
          distance: tU
        } = UU;
        const pU = -Math.PI / 4 + Math.random() * Math.PI / 2;
        cU(gU ? [{
          str: RU.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [RU.toString()], tU, pU, 1e3)
      })), (0, TU.e)("flyingMiddleMessage", (UU => {
        let {
          content: RU,
          rE: tU,
          XE: TU
        } = UU;
        EU.current.push({
          content: RU,
          rE: tU,
          XE: TU
        });
        const qU = () => {
          const {
            content: UU,
            rE: RU,
            XE: tU
          } = EU.current.shift(), PU = function(UU) {
            const RU = -Math.PI / 4,
              gU = Math.PI / 4,
              tU = gU - RU,
              pU = (1 + Math.sqrt(5)) / 2,
              EU = 2 * Math.PI / (pU * pU);
            let PU = UU + EU;
            for (; PU > gU;) PU -= tU;
            for (; PU < RU;) PU += tU;
            const TU = Math.PI / 6;
            if (Math.abs(PU - UU) < TU) {
              PU = UU + (Math.sign(PU - UU) || 1) * TU, PU > gU && (PU = UU - TU), PU < RU && (PU = UU + TU)
            }
            return PU
          }(pU.current);
          pU.current = PU, gU.current = Date.now(), cU(UU, RU, PU, tU)
        };
        if (!PU.current) {
          const UU = () => {
            EU.current.length > 0 && qU(), 0 === EU.current.length && (clearInterval(PU.current), PU.current = null)
          };
          PU.current = setInterval(UU, 200), gU.current + 200 < Date.now() && UU()
        }
        for (; EU.current.length > 4;) qU()
      })), (0, TU.e)("forceFlyingMiddleMessage", (UU => {
        let {
          content: RU,
          rE: gU,
          angle: tU,
          XE: pU
        } = UU;
        cU(RU, gU, tU, pU)
      })), (0, tU.useEffect)((() => () => {
        clearInterval(PU.current), PU.current = null;
        for (const RU of UU.current) clearTimeout(RU.removeTimeout)
      }), []), (0, KU.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: UU.current.map((UU => {
          const {
            id: RU,
            content: gU,
            rE: tU,
            XE: pU,
            angle: EU
          } = UU;
          return UU.pos || (UU.pos = function(UU, RU) {
            const gU = 50 / (UU ** .7 * .35);
            return {
              x: gU * Math.sin(RU),
              y: -gU * Math.cos(RU)
            }
          }(tU, EU)), (0, KU.jsx)(Wg, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: pU,
            enterActiveStyle: {
              transform: `translate(${UU.pos.x}vw, ${UU.pos.y}vh)`,
              transition: `transform ${pU}ms ease-out`
            },
            children: (0, KU.jsx)("div", {
              children: (0, KU.jsx)(qU.e, {
                text: gU
              })
            })
          }, RU)
        }))
      })
    }));

    function Wg(UU) {
      let {
        children: RU,
        className: gU,
        classNames: pU,
        timeout: EU,
        enterActiveStyle: PU
      } = UU;
      const [TU, qU] = (0, tU.useState)(!1), [cU, GU] = (0, tU.useState)(!1), jU = (0, tU.useRef)(null);
      return (0, tU.useEffect)((() => {
        qU(!0)
      }), []), (0, KU.jsx)(Cg.e, {
        className: gU,
        classNames: pU || gU,
        in: TU,
        timeout: EU,
        nodeRef: jU,
        onEntering: () => {
          GU(!0)
        },
        children: (0, tU.cloneElement)(RU, {
          ref: jU,
          style: cU && PU || void 0
        })
      })
    }
    var fg = gU(36187);

    function xg() {
      const UU = (0, JU.k)("health");
      return (0, KU.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, KU.jsx)(fg.c, {
          placement: "statBars"
        }), (0, KU.jsx)(mg, {
          actualValue: UU.shield,
          maxValue: UU.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, KU.jsx)(mg, {
          actualValue: UU.health,
          maxValue: UU.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function mg(UU) {
      let {
        actualValue: RU,
        maxValue: gU,
        hideAtValue: tU,
        icon: pU,
        className: EU
      } = UU;
      return (0, eU.f)(), null === RU || null === gU || RU === tU || gU === tU ? null : (0, KU.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, KU.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, KU.jsx)("div", {
            className: `BottomScreenStatBar ${EU}`,
            style: {
              transform: `scaleX(${Math.max(RU/gU,0)})`,
              transformOrigin: "left center"
            }
          }), (0, KU.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, KU.jsx)(dU.c, {
              name: pU
            }), ` ${Math.ceil(RU)}/${gU}`]
          })]
        })
      })
    }
    var Ig = gU(8982),
      Jg = gU(4195),
      wg = gU(1320),
      ng = gU(2525),
      bg = gU(1412),
      og = gU(1305),
      Zg = gU(3117),
      ag = gU(3165),
      Yg = gU(3139),
      Bg = gU(731),
      Vg = gU(3176),
      rg = gU(135),
      Xg = gU(8896),
      vg = gU(311);

    function dg(UU, RU) {
      let {
        shownName: gU,
        lifeformType: tU
      } = UU;
      return null !== gU ? gU : null !== tU ? RU(`lifeform:${(0,vg.Ne)(tU)}`) : null
    }
    var Hg = gU(3129),
      Sg = gU(3134);
    const sg = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      yg = (0, tU.memo)((function() {
        var UU, RU;
        const gU = (0, eU.d)(),
          pU = (0, uU.useNavigatePreserveSearch)(),
          {
            t: PU
          } = (0, aU.B)(),
          {
            loadingOverlayVisible: qU
          } = (0, wU.l)(["loadingOverlayVisible"]),
          cU = (0, bU.o)(),
          [GU, CU] = (0, tU.useState)(!1),
          [hU, QU] = (0, tU.useState)(!0),
          [WU, xU] = (0, tU.useState)(null),
          IU = (0, hg.b)(),
          nU = (0, fU.g)("respawnButtonText"),
          oU = (0, fU.g)("usePlayAgainButton"),
          ZU = (0, fU.g)("useRespawnButton"),
          {
            gameNameWithVariation: YU
          } = (0, JU.k)("connectedGame"),
          BU = (0, tU.useRef)(mU.b.get("secsToRespawn")),
          VU = (0, tU.useRef)(jU.gameBridge.latest("localPlayerAlive")),
          rU = (0, tU.useRef)(mU.b.get("secsToRespawn")),
          XU = (0, tU.useRef)(mU.b.get("autoRespawn")),
          vU = (0, tU.useRef)(null),
          HU = (0, tU.useRef)(0),
          SU = (0, tU.useRef)(0),
          [sU, kU] = (0, tU.useState)(!1),
          FU = (0, tU.useRef)(null),
          iU = (0, tU.useRef)(null),
          AU = (0, tU.useRef)(null);
        (0, fU.f)("secsToRespawn", (UU => {
          console.log("Received new secsToRespawn with", UU, "and current canRespawn value of ", XU.current), rU.current = UU, LU()
        })), (0, fU.f)("autoRespawn", (UU => {
          console.log("Received autorespawn", UU, "current canRespawn value of ", BU.current), XU.current = UU, LU()
        }));
        const zU = UU => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", UU), UU || HU.current++, VU.current = UU, LU()
        };
        (0, JU.d)("localPlayerAliveSet", zU), (0, TU.e)(ag.q, (UU => {
          "connected" === UU && !VU.current && XU.current && BU.current <= 0 && (SU.current = 0, NU())
        })), (0, tU.useEffect)((() => {
          const UU = jU.gameBridge.latest("localPlayerAlive");
          UU === VU.current ? (console.log("Updating respawn component from initial mount"), LU()) : zU(UU)
        }), []), (0, tU.useEffect)((() => {
          if (GU) {
            kU(!1);
            const UU = setTimeout((() => {
              kU(!0)
            }), 600);
            return (0, Xg.h)(), () => {
              clearTimeout(UU)
            }
          }
          return () => {}
        }), [GU]);
        (0, JU.d)("kill", (UU => {
          let {
            killer: RU,
            victim: gU,
            withItem: tU
          } = UU;
          if (!gU.local) return;
          const pU = ((UU, RU) => {
            if (UU.local) {
              const UU = sg[RU];
              return UU ? PU(UU) : null
            }
            const gU = dg(UU, PU);
            return gU ? PU("respawnPage:killedBy", {
              name: gU
            }) : null
          })(RU, tU);
          pU && xU({
            text: pU,
            deathCount: VU.current ? HU.current + 1 : HU.current
          })
        }));
        const MU = () => {
            GU && XU.current && VU.current && sU && CU(!1)
          },
          DU = GU && XU.current && VU.current && sU && !qU;
        (0, TU.e)("usedKeyboard", (() => {
          MU()
        })), (0, Sg.b)("respawn", DU, MU);
        const LU = () => {
            QU(rU.current >= 3 || !XU.current), VU.current ? (clearInterval(vU.current), vU.current = null, XU.current ? IU() : CU(!1)) : (CU(!0), BU.current = rU.current, IU(), console.log("Running respawn stats updated", XU.current, BU.current), XU.current && BU.current <= 0 && NU(), clearInterval(vU.current), BU.current > 0 && (vU.current = setInterval((() => {
              BU.current = Math.max(BU.current - 1, 0), IU(), BU.current <= 0 && (clearInterval(vU.current), vU.current = null, mU.b.get("autoRespawn") && NU())
            }), 1e3)))
          },
          NU = () => {
            if (Date.now() - SU.current > 1e3) {
              const UU = () => {
                jU.gameBridge.send("respawn", null), SU.current = Date.now()
              };
              mU.b.get("autoRespawn") ? UU() : (0, og.ib)((() => {
                UU()
              }), "video_respawn")
            }
          },
          lU = (0, tU.useMemo)((() => {
            var UU;
            return null === (UU = (0, Bg.l)(YU)) || void 0 === UU ? void 0 : UU.otherGameLinksOnRespawnPage
          }), [YU]),
          OU = 0 === BU.current,
          UR = (null === WU || void 0 === WU ? void 0 : WU.deathCount) === HU.current ? WU.text : null,
          RR = GU && hU && !qU,
          gR = cU && DU && null !== (UU = null === (RU = (0, yU.g)()) || void 0 === RU ? void 0 : RU.getBoundButton("menuConfirm")) && void 0 !== UU ? UU : null,
          tR = UU => OU ? UU : PU("respawnPage:actionInSeconds", {
            action: UU,
            seconds: BU.current
          });
        return (0, KU.jsx)(Ig.d, {
          showing: GU,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, KU.jsx)(Zg.c, {
            show: GU,
            "data-holds-camera-keeper": "",
            children: (0, KU.jsxs)(Jg.d, {
              close: () => {
                CU(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: XU.current || qU ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, rg.l)() && (0, KU.jsx)(bg.d, {
                onClick: Yg.d,
                children: PU("homePage:backToGames")
              }), (0, KU.jsxs)("div", {
                className: "RespawnContainer",
                onClick: MU,
                children: [(0, KU.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, KU.jsx)("div", {
                    ref: iU,
                    className: "RespawnSideSquareBannerDiv",
                    children: gU[0] > 925 && (0, KU.jsx)(ng.b, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: iU
                      },
                      showing: RR,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, KU.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, KU.jsxs)("div", {
                      className: EU()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: cU
                      }),
                      children: [XU.current && (0, KU.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, KU.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, KU.jsx)(dU.c, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), PU("respawnPage:youDied")]
                        }), (0, KU.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === gR && (VU.current ? PU("respawnPage:pressAnywhereToContinue") : OU ? PU("respawnPage:respawning") : tR(PU("general:respawn"))), null !== gR && (0, KU.jsx)(Hg.d, {
                            text: PU("controller:screensPressToContinue", {
                              button: Hg.f
                            }),
                            glyph: gR,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), UR && (0, KU.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: UR
                        })]
                      }), !XU.current && (0, KU.jsxs)(KU.Fragment, {
                        children: [(0, KU.jsxs)("div", {
                          className: EU()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !lU
                          }),
                          children: [oU && (0, KU.jsx)(bg.j, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, og.ib)((() => {
                                (0, wU.h)("inGameReplay");
                                const UU = (0, wg.e)(YU);
                                pU(UU)
                              }), "video_start")
                            },
                            disabled: !OU || !sU,
                            touchPressOn: "pointerup",
                            children: tR(PU("respawnPage:playAgain"))
                          }), ZU && (0, KU.jsx)(bg.e, {
                            className: "RespawnPageButton",
                            onClick: NU,
                            padDefaultFocus: !oU,
                            padBack: "sessionBasedGame:stayInLobby" === nU,
                            disabled: !OU || !sU,
                            touchPressOn: "pointerup",
                            children: tR(PU(nU))
                          }), !(0, rg.l)() && (0, KU.jsx)(bg.E, {
                            className: "RespawnPageButton",
                            onClick: Yg.d,
                            disabled: !OU || !sU,
                            touchPressOn: "pointerup",
                            children: tR(PU("respawnPage:exitGame"))
                          })]
                        }), lU && (0, KU.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, KU.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: PU("respawnPage:orTry")
                          }), (0, KU.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: lU.map((UU => (0, KU.jsx)(Vg.f, {
                              source: {
                                type: "game",
                                gameNameWithVariation: UU
                              },
                              disabled: !OU || !sU,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, wU.h)("inGameReplay");
                                const RU = (0, wg.e)(UU);
                                pU(RU)
                              }
                            }, UU)))
                          })]
                        })]
                      })]
                    })
                  }), (0, KU.jsx)("div", {
                    ref: AU,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, KU.jsx)("div", {
                  ref: FU,
                  className: "RespawnBottom",
                  children: (0, KU.jsx)(ng.b, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: FU
                    },
                    showing: RR,
                    verticalAlign: "end",
                    extraContrastBackgroundBox: "bottom",
                    noFillShowBloxdAdProbability: 1
                  })
                })]
              })]
            })
          })
        })
      }));
    var kg = gU(36200);
    const Fg = [{
        opacity: 1,
        transform: "scale(1.5)",
        offset: 0
      }, {
        opacity: 1,
        transform: "scale(1)",
        offset: .25
      }, {
        opacity: 0,
        transform: "scale(0.85)",
        offset: 1
      }],
      ig = [{
        opacity: 1,
        transform: "scale(1.7)",
        offset: 0
      }, {
        opacity: 1,
        transform: "scale(1.1)",
        offset: .2
      }, {
        opacity: .9,
        transform: "scale(1)",
        offset: .5
      }, {
        opacity: 0,
        transform: "scale(0.85)",
        offset: 1
      }],
      Ag = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      zg = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      Mg = (0, tU.memo)((function() {
        const UU = (0, tU.useRef)(null),
          RU = (0, tU.useRef)(null);

        function gU(gU) {
          var tU;
          let {
            DR: pU,
            screenPos: EU
          } = gU;
          const PU = UU.current;
          null === (tU = RU.current) || void 0 === tU || tU.cancel(), PU.classList.remove("HitmarkerCrit"), EU ? (PU.style.left = `${EU.x}%`, PU.style.top = `${EU.y}%`) : (PU.style.left = "50%", PU.style.top = "50%"), PU.style.rotate = 16 * (Math.random() - .5) + "deg", pU && PU.classList.add("HitmarkerCrit");
          const TU = PU.animate(pU ? ig : Fg, pU ? zg : Ag);
          RU.current = TU, TU.onfinish = () => {
            PU.classList.remove("HitmarkerCrit")
          }
        }
        return (0, TU.e)("localGunHitmarker", (UU => {
          let {
            DR: RU
          } = UU;
          gU({
            DR: RU
          })
        })), (0, TU.e)("yourAttackHit", (UU => {
          let {
            DR: RU,
            screenPos: tU
          } = UU;
          gU({
            DR: RU,
            screenPos: wU.b.get("isTouchScreen") ? tU : void 0
          })
        })), (0, TU.e)("sendHitmarker", (UU => {
          let {
            DR: RU,
            screenPos: tU
          } = UU;
          gU({
            DR: RU,
            screenPos: tU
          })
        })), (0, KU.jsxs)("div", {
          ref: UU,
          className: "Hitmarker",
          children: [(0, KU.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, KU.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, KU.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, KU.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function Dg() {
      const UU = (0, tU.useRef)(!0);
      return (0, TU.e)("localBlockMined", (() => {
        pR.d.play("blockMined")
      })), (0, TU.e)("yourAttackHit", (() => {
        pR.d.play("hitLanded")
      })), (0, TU.e)("localGunHitmarker", (() => {
        pR.d.play("hitLanded")
      })), (0, TU.e)("damagedByOtherPlayer", (() => {
        pR.d.play("damageTaken")
      })), (0, JU.d)("localPlayerAliveSet", (RU => {
        !RU && UU.current && pR.d.play("death"), UU.current = RU
      })), null
    }
    var Lg = gU(1790),
      Ng = gU(36214),
      lg = gU.n(Ng),
      Og = gU(1875),
      Ut = gU(1866),
      Rt = gU(2969),
      gt = gU(9009);
    const tt = vg.Ae ? 7e7 : 7e3,
      pt = lg()("#ffffff").alpha(.5).string();

    function Et(UU) {
      const RU = (0, Rt.c)(UU);
      return void 0 !== RU && "Gun" === (0, gt.itemTypeOf)(RU)
    }

    function Pt(UU) {
      if (!UU) return console.error(`Killfeed colour was ${UU}`), pt;
      try {
        return lg()(UU).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${UU} is not a colour`), pt
      }
    }
    const Tt = (0, tU.memo)((function() {
      const {
        t: UU
      } = (0, aU.B)(), RU = (0, tU.useRef)([]), gU = (0, hg.b)();
      return (0, JU.d)("kill", (function(tU) {
        var pU, EU;
        let {
          killer: PU,
          victim: TU,
          withItem: qU,
          killstreak: KU
        } = tU;
        const cU = RU.current;
        if (cU.length >= 3) {
          const UU = cU.shift();
          clearTimeout(UU.timeout)
        }
        const GU = jU.gameBridge.latest("hiddenPlayerNames"),
          uU = {
            deadName: dg(TU, UU),
            killerName: dg(PU, UU),
            isFriend: {
              killer: (0, Og.g)(PU.realName, GU),
              dead: (0, Og.g)(TU.realName, GU)
            },
            withItem: qU,
            wasHeadshot: !1,
            killstreak: KU,
            timeout: setTimeout((() => {
              cU.shift(), gU()
            }), tt),
            reactId: `${null!==(pU=PU.id)&&void 0!==pU?pU:PU.shownName}|${null!==(EU=TU.id)&&void 0!==EU?EU:TU.shownName}|${Date.now()}`,
            killerBackground: Pt(PU.colour),
            deadBackground: Pt(TU.colour)
          };
        cU.push(uU), gU()
      })), (0, tU.useEffect)((() => {
        const UU = RU.current;
        return () => {
          for (; UU.length > 0;) {
            const {
              timeout: RU
            } = UU.pop();
            clearTimeout(RU)
          }
        }
      }), []), (0, KU.jsx)("div", {
        className: "Killfeed",
        children: RU.current.map((UU => {
          let {
            deadName: RU,
            killerName: gU,
            withItem: tU,
            wasHeadshot: pU,
            killstreak: EU,
            killerBackground: PU,
            deadBackground: TU,
            reactId: qU,
            isFriend: cU
          } = UU;
          return (0, KU.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${PU} calc(100% - 10rem), ${TU} 100%)`
            },
            children: [EU >= 2 ? (0, KU.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, vg.V)(EU)
            }) : null, (0, KU.jsx)("div", {
              className: "KillfeedKillerName",
              children: gU
            }), cU.killer && (0, KU.jsx)(Ut.b, {}), (0, KU.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: Et(tU) ? "7.5vmin" : "5vmin"
              },
              children: (0, KU.jsx)(Lg.c, {
                itemName: tU,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), pU ? (0, KU.jsx)(dU.c, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, KU.jsx)("div", {
              className: "KillfeedDeadName",
              children: RU
            }), cU.dead && (0, KU.jsx)(Ut.b, {})]
          }, qU)
        }))
      })
    }));
    var qt = gU(36266),
      Kt = gU(1126),
      ct = gU.n(Kt),
      Gt = gU(3099),
      jt = gU(36275),
      ut = gU(1293);
    const Ct = {},
      ht = (0, tU.memo)((function() {
        const UU = (0, tU.useRef)({}),
          [, RU] = (0, tU.useReducer)((UU => UU + 1), 0);
        (0, TU.e)("setDirectionArrow", (gU => {
          let {
            id: tU,
            position: pU,
            style: EU,
            text: PU,
            pE: TU
          } = gU;
          const qU = UU.current,
            KU = EU || Ct,
            cU = PU,
            GU = qU[tU];
          if (!GU) return qU[tU] = {
            position: pU,
            style: KU,
            text: cU,
            shouldShowDistance: TU,
            mV: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void RU();
          const jU = !ct()(GU.style, KU) || !ct()(GU.text, cU) || GU.shouldShowDistance !== TU;
          GU.position = pU, GU.style = KU, GU.text = cU, GU.shouldShowDistance = TU, jU && RU()
        })), (0, TU.e)("clearDirectionArrow", (gU => {
          let {
            id: tU
          } = gU;
          const pU = UU.current;
          if (null === tU)
            for (const UU in pU) delete pU[UU];
          else delete pU[tU];
          RU()
        })), (0, tU.useEffect)((() => {
          const RU = UU.current,
            gU = (0, ut.t)((() => {
              ! function(UU) {
                const RU = jU.gameBridge.lookup("localPos", null),
                  gU = Gt.b - Qt,
                  tU = (0, Gt.i)() - Qt;
                for (const pU in UU) {
                  const EU = UU[pU];
                  if (!EU.mV) continue;
                  const PU = jU.gameBridge.lookup("screenPos", EU.position),
                    TU = PU.x - 50,
                    qU = PU.y - 50;
                  PU.x === EU.lastScreenX && PU.y === EU.lastScreenY || (EU.lastScreenX = PU.x, EU.lastScreenY = PU.y, EU.mV.style.translate = `${PU.x}vw ${PU.y}vh`, EU.chevronElement && (EU.chevronElement.style.rotate = `${vg.c.fastATan2(qU,TU)}rad`));
                  const KU = Math.abs(TU) < gU && Math.abs(qU) < tU;
                  if (KU !== EU.onScreen && (EU.onScreen = KU, EU.mV.classList.toggle("DirectionArrowOnScreen", KU)), EU.shouldShowDistance && EU.distanceElement) {
                    const UU = EU.position[0] - RU[0],
                      gU = EU.position[1] - RU[1],
                      tU = EU.position[2] - RU[2],
                      pU = Math.round(Math.sqrt(UU * UU + gU * gU + tU * tU));
                    (-1 === EU.lastRenderedDist || (0, jt.d)(pU, EU.lastRenderedDist, EU.lastDistUpdateTime)) && (EU.distanceElement.textContent = `${pU}m`, EU.lastRenderedDist = pU, EU.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(RU)
            }));
          return () => {
            gU();
            for (const UU in RU) delete RU[UU]
          }
        }), []);
        const gU = UU.current;
        return (0, KU.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(gU).map((UU => {
            var RU;
            let [tU, pU] = UU;
            const EU = null !== (RU = (0, WU.Wb)(pU.style)) && void 0 !== RU ? RU : "#ffffff";
            return (0, KU.jsxs)("div", {
              ref: UU => {
                gU[tU] && (gU[tU].mV = UU)
              },
              className: "DirectionArrow",
              style: {
                fontSize: pU.style.fontSize,
                opacity: pU.style.opacity
              },
              children: [(0, KU.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: UU => {
                  gU[tU] && (gU[tU].chevronElement = UU)
                },
                children: [(0, KU.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, KU.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, KU.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, KU.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, KU.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: EU
                    }
                  }), (0, KU.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: EU
                    }
                  })]
                })]
              }), (0, KU.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: EU,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${EU}`
                }
              }), pU.text && (0, KU.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: EU,
                  fontWeight: pU.style.fontWeight,
                  fontStyle: pU.style.fontStyle
                },
                children: (0, KU.jsx)(qU.e, {
                  text: pU.text
                })
              }), pU.shouldShowDistance && (0, KU.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: UU => {
                  gU[tU] && (gU[tU].distanceElement = UU)
                },
                style: {
                  color: EU,
                  fontWeight: pU.style.fontWeight,
                  fontStyle: pU.style.fontStyle
                }
              })]
            }, tU)
          }))
        })
      })),
      Qt = .5;
    const et = (0, tU.memo)((function(UU) {
        let {
          isTouchScreen: RU
        } = UU;
        return (0, KU.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, KU.jsx)(mt, {}), RU && (0, KU.jsx)(Ug, {})]
        })
      })),
      Wt = {
        readyForNext: 0,
        running: 1
      },
      ft = 50;

    function xt(UU) {
      console.assert(UU.state.current === Wt.readyForNext);
      const RU = UU.queue.current,
        gU = UU.foreground.current;
      if (RU.length > 0 && gU) {
        const {
          toFraction: tU,
          toDuration: pU
        } = RU.shift();
        UU.state.current = Wt.running, gU.style.transition = `transform ${Math.max(pU-ft,0)}ms linear`, gU.classList.remove("Complete"), UU.timeout.current = setTimeout((() => {
          gU.style.transform = `scaleX(${tU})`, UU.timeout.current = setTimeout((() => {
            1 === tU && gU.classList.add("Complete"), UU.state.current = Wt.readyForNext, xt(UU)
          }), Math.max(pU - ft, 0))
        }), ft)
      }
    }

    function mt() {
      const UU = (0, tU.useRef)([]),
        RU = (0, tU.useRef)(Wt.readyForNext),
        gU = (0, tU.useRef)(void 0),
        pU = (0, tU.useRef)(null),
        EU = (0, tU.useRef)({
          queue: UU,
          state: RU,
          timeout: gU,
          foreground: pU
        }),
        PU = (0, fU.g)("showProgressBar");
      if ((0, tU.useLayoutEffect)((() => (PU && RU.current === Wt.readyForNext && xt(EU.current), () => {
          RU.current = Wt.readyForNext, clearTimeout(gU.current), PU && (UU.current.length = 0)
        })), [PU]), (0, TU.e)("progressBarUpdate", (gU => {
          let {
            toFraction: tU,
            toDuration: pU
          } = gU;
          UU.current.push({
            toFraction: tU,
            toDuration: pU
          }), RU.current === Wt.readyForNext && xt(EU.current)
        })), !PU) return null;
      return (0, KU.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, KU.jsx)("div", {
          className: "ProgressBarForeground",
          ref: pU,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var It = gU(36280),
      Jt = gU(2279);
    const wt = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function nt(UU) {
      let {
        classes: RU,
        gone: gU
      } = UU;
      const tU = document.documentElement;
      tU.classList.remove(...RU);
      for (const pU of gU) pU.style.display = "block";
      return () => {
        tU.classList.add(...RU);
        for (const UU of gU) UU.style.display = ""
      }
    }

    function bt(UU) {
      const {
        isTouchScreen: RU
      } = (0, wU.l)(["isTouchScreen"]);
      (0, tU.useLayoutEffect)((() => {
        if (!RU) return;
        const gU = UU.current,
          tU = document.querySelector(`.${It.i}`),
          pU = UU => {
            const RU = () => {
              const RU = UU.querySelector(Jt.j),
                tU = function(UU) {
                  const RU = document.documentElement;
                  return {
                    classes: GR.F.map(hR.y).filter((UU => RU.classList.contains(UU))),
                    gone: [...UU.querySelectorAll(`.TopRightTrayToggle.${Jt.n}`)]
                  }
                }(UU);
              RU && function(UU, RU) {
                (0, Jt.F)(UU, RU.classes.length > 0 || RU.gone.length > 0, (() => nt(RU)))
              }(RU, tU);
              const pU = `${Math.floor(function(UU,RU,gU){const tU=document.documentElement,pU=tU.classList.contains((0,hR.B)("menu")),EU=tU.style.getPropertyValue((0,hR.H)("menu"));if(!pU&&""===EU)return UU.getBoundingClientRect().left;const PU=RU?(0,Jt.q)(RU):()=>{},TU=nt(gU);tU.classList.remove((0,hR.B)("menu")),tU.style.removeProperty((0,hR.H)("menu"));const qU=UU.getBoundingClientRect().left;return TU(),PU(),pU&&tU.classList.add((0,hR.B)("menu")),""!==EU&&tU.style.setProperty((0,hR.H)("menu"),EU),qU}(UU,RU,tU)-gU.getBoundingClientRect().left-4)}px`;
              gU.style.getPropertyValue("--InGameHeaderMaxWidth") !== pU && gU.style.setProperty("--InGameHeaderMaxWidth", pU)
            };
            RU();
            const pU = new ResizeObserver(RU);
            pU.observe(UU), pU.observe(tU), window.addEventListener("resize", RU);
            const EU = () => wt.map((UU => document.documentElement.style.getPropertyValue(UU))).join();
            let PU = EU();
            const TU = new MutationObserver((() => {
              const UU = EU();
              UU !== PU && (PU = UU, RU())
            }));
            TU.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const qU = (0, xU.t)(hR.f, RU),
              KU = new MutationObserver(RU);
            return KU.observe(UU, {
              childList: !0,
              subtree: !0
            }), () => {
              pU.disconnect(), TU.disconnect(), KU.disconnect(), qU(), window.removeEventListener("resize", RU);
              const gU = UU.querySelector(Jt.j);
              gU && (0, Jt.q)(gU)
            }
          },
          EU = () => tU.querySelector(".TopRightIconsContainer"),
          PU = EU();
        let TU;
        if (PU) TU = pU(PU);
        else {
          const UU = new MutationObserver((() => {
            const RU = EU();
            RU && (UU.disconnect(), TU = pU(RU))
          }));
          UU.observe(tU, {
            childList: !0,
            subtree: !0
          }), TU = () => {
            UU.disconnect()
          }
        }
        return () => {
          TU(), gU.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [RU, UU])
    }
    var ot = gU(3347),
      Zt = gU(3341),
      Yt = gU(1567),
      Bt = gU(1461),
      Vt = gU(1570),
      rt = gU(1637),
      Xt = gU(1733),
      vt = gU(1120),
      dt = gU(3976),
      Ht = gU(1444),
      St = gU(1339);
    const st = 2e4,
      yt = 6e5,
      kt = new Set;

    function Ft() {
      const {
        gameEntrySource: UU,
        loadingOverlayVisible: RU
      } = (0, wU.l)(["gameEntrySource", "loadingOverlayVisible"]), gU = (0, JU.h)("connectedGame", (UU => (0, dt.j)(UU) ? UU.lobbyName : null)), pU = (0, JU.k)("localPlayerAlive"), EU = (0, JU.h)("players", (UU => null !== UU.localId && void 0 !== UU.byId[UU.localId])), [PU, TU] = (0, tU.useState)(null);
      return !RU && pU && EU && null !== gU && PU !== gU && TU(gU), (0, tU.useEffect)((() => {
        if (!(0, dt.l)(UU) || null === PU || PU !== gU || kt.has(PU)) return;
        const RU = setTimeout((() => {
          kt.add(PU), async function(UU) {
            const RU = await vt.userContextManager.getCurrentUserContext();
            let gU;
            try {
              gU = (await Bt.c.getWorldOwnerFriendOffer(RU)).owner
            } catch (pU) {
              return void console.warn("Couldn't ask who owns this world", pU)
            }
            if (!gU || (0, dt.r)(gU.name, Date.now())) return;
            const tU = gU;
            ! function(UU, RU) {
              const gU = Date.now() + yt;
              let tU = Date.now(),
                pU = 0;
              const EU = () => {
                const PU = Date.now(),
                  TU = jU.gameBridge.latest("connectedGame");
                TU.lobbyName !== UU || PU > gU || (null === TU.websocketUrl ? tU = 1 / 0 : tU === 1 / 0 && !wU.b.get("loadingOverlayVisible") && jU.gameBridge.latest("localPlayerAlive") && (tU = PU + st), pU = PU < tU || !jU.gameBridge.latest("localPlayerAlive") || wU.b.get("isUiHidden") || wU.b.get("isUiHiddenByCamera") || (0, rt.isTypingInInput)() || wU.b.get("loadingOverlayVisible") || (0, Yt.q)() || (0, ot.g)() || (0, St.l)() ? 0 : pU + 1, pU >= 2 ? RU() : setTimeout(EU, 500))
              };
              EU()
            }(UU, (() => {
              (0, dt.g)(Vt.b.getSocialState().friends, tU.name) || ((0, dt.n)(tU.name, Date.now()), Xt.f.showWorldOwnerOffer(tU), (0, Ht.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(PU).catch((UU => {
            console.error("Failed to offer the world's owner as a friend", UU)
          }))
        }), st);
        return () => {
          clearTimeout(RU)
        }
      }), [UU, PU, gU]), null
    }
    var it = gU(1782);
    const At = (0, tU.memo)((function(UU) {
        let {
          durationMs: RU,
          endsAtMs: gU
        } = UU;
        const [, pU] = (0, tU.useReducer)((UU => UU + 1), 0), EU = null === gU ? RU : Math.max(gU - Date.now(), 0);
        return (0, tU.useEffect)((() => {
          if (null === gU || EU <= 0) return;
          const UU = setTimeout(pU, EU - 1e3 * (Math.ceil(EU / 1e3) - 1));
          return () => {
            clearTimeout(UU)
          }
        })), (0, KU.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, vg.lb)(EU)
        })
      })),
      zt = (0, tU.memo)((function() {
        const UU = (0, JU.k)("localEffects");
        return (0, KU.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(UU).map((UU => {
            let [RU, {
              icon: gU,
              displayName: tU,
              durationMs: pU,
              endsAtMs: EU,
              level: PU
            }] = UU;
            return (0, KU.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, KU.jsx)(it.d, {
                icon: gU,
                className: "EffectInfoIcon"
              }), (0, KU.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== pU ? "0" : "1rem"
                },
                children: [(0, KU.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, KU.jsx)(qU.e, {
                    text: null !== tU && void 0 !== tU ? tU : RU,
                    className: "EffectInfoName SmallTextBold"
                  }), PU > 1 && (0, KU.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, vg.V)(PU)
                  })]
                }), null !== pU && (0, KU.jsx)(At, {
                  durationMs: pU,
                  endsAtMs: EU
                })]
              })]
            }, RU)
          }))
        })
      }));
    var Mt = gU(36285),
      Dt = gU(36442),
      Lt = gU(189),
      Nt = gU(1333),
      lt = gU(2545),
      Ot = gU(2661);

    function Up(UU, RU) {
      (0, tU.useLayoutEffect)((() => {
        let RU, gU;
        const tU = requestAnimationFrame((() => {
          gU = setTimeout((() => {
            gU = void 0;
            const tU = UU();
            RU = "function" === typeof tU ? tU : void 0
          }), 0)
        }));
        return () => {
          var UU;
          cancelAnimationFrame(tU), clearTimeout(gU), null === (UU = RU) || void 0 === UU || UU()
        }
      }), RU)
    }
    const Rp = [5, 5, 5],
      gp = [7, 4, 4, 4];

    function tp(UU) {
      return UU.reduce(((UU, RU) => UU + RU), 0)
    }

    function pp(UU, RU, gU, tU, pU) {
      const EU = UU.getContext("2d");
      if (!EU) return null;
      const PU = RU.fontFamily,
        TU = RU.fontWeight;
      return UU.width = gU, UU.height = tU, EU.fillStyle = RU.color, EU.textAlign = "center", EU.textBaseline = "middle", EU.font = `${TU} ${pU}px ${PU}`, EU
    }
    const Ep = (0, tU.memo)((function(UU) {
      let {
        show: RU
      } = UU;
      const gU = (0, tU.useRef)(null),
        pU = (0, tU.useRef)(null),
        EU = (0, tU.useRef)(null),
        PU = (0, CU.j)();
      return (0, tU.useEffect)((() => PU.whenShown((() => {
        let UU = 0,
          RU = 0,
          gU = 0,
          tU = 0;
        const PU = (0, ut.t)((() => {
          var PU;
          UU++, RU++;
          const TU = performance.now();
          if (TU - gU < 1e3) return;
          const qU = Math.round(UU / (TU - gU) * 1e3);
          if (pU.current = qU, null === (PU = EU.current) || void 0 === PU || PU.call(EU, qU), UU = 0, gU = TU, qU < 55) {
            var KU, cU;
            tU += 1;
            const UU = IU.k.getItem("decreaseLoadDistPromptDeniedCount"),
              [RU, gU] = mU.b.get("minChunkAddDist");
            if (tU >= 15 && function(UU, RU) {
                const gU = jU.gameBridge.lookup("Km", null);
                return null !== gU && (gU.horizontal > UU || gU.vertical > RU)
              }(RU, gU) && (null !== (KU = IU.k.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== KU ? KU : 0) + 432e5 < Date.now() && (null !== (cU = IU.k.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== cU ? cU : 0) < 3) {
              IU.k.setItem("lastDecreaseLoadDistPromptTime", Date.now());
              Nt.NotificationProvider.showPromptPopup({
                title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                confirmText: "general:yes",
                cancelText: "general:no",
                unlockPointerKey: "chunkLoadDistanceLagPopup"
              }).getResult().then((tU => {
                "notificationTornDown" !== tU && (tU ? (jU.gameBridge.send("setChunkAddDistance", {
                  horizontal: RU,
                  vertical: gU
                }), IU.k.setItem("chunkHorizAddDist", RU), IU.k.setItem("chunkVertAddDist", gU), xU.p.yh("updatedChunkLoadDist"), IU.k.setItem("decreaseLoadDistPromptDeniedCount", 0)) : IU.k.setItem("decreaseLoadDistPromptDeniedCount", UU + 1))
              }))
            }
          } else tU = 0
        }));
        let TU = performance.now();
        RU = 0;
        let qU = null,
          KU = !document.hidden;

        function cU() {
          const UU = performance.now() - TU,
            gU = 1e3 * RU / UU;
          KU && (null === qU && (qU = gU), lt.e.setFps(gU, qU)), RU = 0, TU = performance.now()
        }
        let GU = setInterval(cU, Ot.e);

        function uU() {
          const UU = KU;
          KU = !document.hidden, !UU && KU && (RU = 0, TU = performance.now(), clearInterval(GU), GU = setInterval(cU, Ot.e))
        }
        return document.addEventListener("visibilitychange", uU), () => {
          PU(), document.removeEventListener("visibilitychange", uU), clearInterval(GU)
        }
      }))), [PU]), Up((() => {
        var UU;
        if (!RU || EU.current) return;
        const tU = gU.current,
          PU = window.getComputedStyle(tU.parentElement),
          TU = null !== (UU = window.devicePixelRatio) && void 0 !== UU ? UU : 1,
          qU = parseFloat(PU.fontSize) * TU,
          KU = Math.round(3 * qU),
          cU = Math.round(qU),
          GU = pp(tU, PU, KU, cU, qU);
        if (!GU) return;
        const jU = UU => {
          GU.clearRect(0, 0, tU.width, tU.height), GU.fillText(UU.toString(), tU.width / 2, tU.height / 2)
        };
        EU.current = jU, null !== pU.current && jU(pU.current)
      }), [RU]), (0, KU.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: RU ? "flex" : "none"
        },
        children: [(0, KU.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, KU.jsx)("canvas", {
          className: "FpsCanvas",
          ref: gU,
          width: 48,
          height: 16
        })]
      })
    }));

    function Pp(UU) {
      return Math.sign(UU) * Math.round(100 * Math.abs(UU))
    }

    function Tp(UU) {
      let {
        getCoordinates: RU,
        showChunkCoords: gU,
        columns: pU
      } = UU;
      const EU = (0, tU.useRef)(null);
      return Up((() => {
        var UU;
        const tU = EU.current,
          PU = window.getComputedStyle(tU.parentElement),
          TU = null !== (UU = window.devicePixelRatio) && void 0 !== UU ? UU : 1,
          qU = parseFloat(PU.fontSize) * TU,
          KU = Math.round(qU * tp(pU)),
          cU = Math.round(qU),
          GU = pp(tU, PU, KU, cU, qU);
        if (!GU) return;
        let uU = !0,
          CU = 0,
          hU = 0,
          QU = 0,
          eU = 0,
          WU = 0,
          fU = 0;
        const xU = () => {
          uU = !0
        };
        document.fonts.load(GU.font).then(xU, xU);
        const mU = () => {
          pp(tU, PU, KU, cU, qU), xU()
        };
        tU.addEventListener("contextrestored", mU);
        const IU = (0, ut.B)((() => {
          var UU, EU, PU, TU, KU, cU;
          const [xU, mU, IU] = RU(), JU = Pp(xU), wU = Pp(mU), nU = Pp(IU);
          let bU = null;
          if (gU) {
            const UU = jU.gameBridge.lookup("localPos", null);
            bU = (0, UR.V)(UU[0], UU[1], UU[2])
          }
          const oU = null !== (UU = null === (EU = bU) || void 0 === EU ? void 0 : EU[0]) && void 0 !== UU ? UU : 0,
            ZU = null !== (PU = null === (TU = bU) || void 0 === TU ? void 0 : TU[1]) && void 0 !== PU ? PU : 0,
            aU = null !== (KU = null === (cU = bU) || void 0 === cU ? void 0 : cU[2]) && void 0 !== KU ? KU : 0;
          if (!uU && JU === CU && wU === hU && nU === QU && oU === eU && ZU === WU && aU === fU) return;
          uU = !1, CU = JU, hU = wU, QU = nU, eU = oU, WU = ZU, fU = aU;
          const YU = [(JU / 100).toFixed(2), (wU / 100).toFixed(2), (nU / 100).toFixed(2)];
          bU && YU.unshift(`${oU} ${ZU} ${aU}`), GU.clearRect(0, 0, tU.width, tU.height);
          const BU = tU.height / 2;
          let VU = 0;
          for (let RU = 0; RU < YU.length; RU++) {
            const UU = qU * pU[RU];
            GU.fillText(YU[RU], VU + UU / 2, BU, UU), VU += UU
          }
        }));
        return () => {
          IU(), tU.removeEventListener("contextrestored", mU)
        }
      }), [RU, gU, pU]), (0, KU.jsx)("div", {
        className: "CoordinateUI",
        children: (0, KU.jsx)("canvas", {
          ref: EU,
          className: "CoordinateCanvas",
          width: 16 * tp(pU),
          height: 16
        })
      })
    }
    const qp = (0, tU.memo)((function() {
        const UU = (0, tU.useCallback)((() => {
          const UU = jU.gameBridge.lookup("localPos", null);
          return [UU[0], UU[1], UU[2]]
        }), []);
        return (0, KU.jsx)(Tp, {
          getCoordinates: UU,
          showChunkCoords: !1,
          columns: Rp
        })
      })),
      Kp = (0, tU.memo)((function() {
        const UU = (0, tU.useCallback)((() => {
          const UU = jU.gameBridge.lookup("localPos", null),
            RU = Lt.e.jC;
          let gU = UU[0] % RU,
            tU = UU[1] % RU,
            pU = UU[2] % RU;
          return gU < 0 && (gU += RU), tU < 0 && (tU += RU), pU < 0 && (pU += RU), [gU, tU, pU]
        }), []);
        return (0, KU.jsx)(Tp, {
          getCoordinates: UU,
          showChunkCoords: !0,
          columns: gp
        })
      }));
    var cp = gU(1905),
      Gp = gU(1326),
      jp = gU(994),
      Cp = gU(1217),
      hp = gU(96),
      Qp = gU(36307),
      ep = gU(1420),
      Wp = gU(2840);
    const fp = (0, tU.memo)((function() {
      const UU = (0, fU.g)("maxAuraLevel");
      return 0 === UU ? null : (0, KU.jsx)(xp, {
        maxLevel: UU
      })
    }));

    function xp(UU) {
      let {
        maxLevel: RU
      } = UU;
      const gU = (0, fU.g)("auraPerLevel"),
        [pU, EU] = (0, tU.useState)((() => {
          var UU;
          return null !== (UU = jU.gameBridge.latest("aura")) && void 0 !== UU ? UU : void 0
        })),
        [PU, TU] = (0, tU.useState)((() => xU(pU))),
        [qU, cU] = (0, tU.useReducer)((UU => UU + 1), 0),
        GU = (0, tU.useRef)(null),
        uU = (0, tU.useRef)([]),
        CU = (0, tU.useRef)({
          width: 0,
          level: 0
        }),
        hU = (0, tU.useRef)(null),
        QU = (0, tU.useRef)(null);

      function WU() {
        if (null !== hU.current) return;
        if (0 === uU.current.length) return;
        const {
          width: UU,
          level: RU
        } = uU.current.shift();
        let gU;
        if (RU !== CU.current.level && RU > CU.current.level !== UU > CU.current.width) {
          const tU = RU > CU.current.level;
          gU = tU ? UU : 100 - UU, GU.current.style.transition = "none", GU.current.style.width = tU ? "0%" : "100%", GU.current.offsetWidth
        } else gU = Math.abs(UU - CU.current.width);
        const tU = 100 * gU / 20;
        GU.current.style.transition = `width ${tU}ms linear`, TU(UU), CU.current = {
          width: UU,
          level: RU
        }, uU.current.length > 0 && (hU.current = setTimeout((() => {
          hU.current = null, WU()
        }), tU))
      }

      function xU(UU) {
        return Math.floor(UU / gU) === RU ? 100 : UU % gU / gU * 100
      }
      return (0, tU.useEffect)((() => () => {
        clearTimeout(hU.current), clearTimeout(QU.current), hU.current = null, QU.current = null
      }), []), (0, JU.d)("aura", (UU => {
        if (QU.current && clearTimeout(QU.current), null === UU) return clearTimeout(hU.current), QU.current = null, hU.current = null, uU.current = [], CU.current = {
          width: 0,
          level: 0
        }, EU(void 0), void TU(0);
        QU.current = setTimeout((() => {
          const RU = Math.floor(pU / gU),
            tU = Math.floor(UU / gU),
            PU = xU(UU);
          UU > pU && Qp.e.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), tU > RU ? (tU % 5 === 0 && Qp.e.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), cU(), uU.current.push({
            width: 100,
            level: RU
          })) : tU < RU && uU.current.push({
            width: 0,
            level: RU
          }), UU === pU && tU === RU || uU.current.push({
            width: PU,
            level: tU
          }), EU(UU), WU()
        }), 50)
      })), (0, eU.f)(), (0, KU.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, KU.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, KU.jsx)(ep.c, {
            showSignal: qU,
            particleElement: (0, KU.jsx)("img", {
              src: (0, Wp.i)("glint"),
              alt: ""
            })
          }), (0, KU.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, Wp.i)("glint"),
            alt: "aura"
          }), (0, KU.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== pU && void 0 !== pU ? pU : 0) / gU)
          })]
        }), (0, KU.jsx)("div", {
          className: "AuraBar",
          children: (0, KU.jsx)("div", {
            ref: GU,
            className: "AuraBarBackground",
            style: {
              width: `${PU}%`
            }
          })
        })]
      })
    }
    var mp = gU(2349);

    function Ip(UU) {
      UU.timed && (UU.endedAnimation = UU.timed.animation, UU.timed = null)
    }
    const Jp = (0, tU.memo)((function() {
      const UU = (0, tU.useRef)(null),
        RU = (0, tU.useRef)(null),
        gU = (0, tU.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, TU.e)("middleScreenBarInitiate", (UU => {
        var tU;
        let {
          duration: pU,
          Ut: EU,
          horizBarRemOffset: PU
        } = UU;
        const TU = gU.current;
        Ip(TU);
        const qU = RU.current;
        if (!(pU >= 0) || !qU) return;
        null === (tU = TU.endedAnimation) || void 0 === tU || tU.cancel(), TU.endedAnimation = null;
        const KU = qU.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: pU,
          fill: "forwards"
        });
        TU.timed = {
          Ut: EU,
          horizBarRemOffset: PU,
          animation: KU
        }
      })), (0, TU.e)("middleScreenBarRemove", (() => {
        Ip(gU.current)
      })), (0, tU.useEffect)((() => {
        const tU = gU.current;
        let pU = Number.NaN,
          EU = Number.NaN,
          PU = Number.NaN;
        return (0, ut.p)((() => {
          var gU, TU, qU, KU;
          const cU = UU.current,
            GU = RU.current;
          if (!cU || !GU) return;
          null !== (gU = tU.timed) && void 0 !== gU && gU.Ut && "finished" === tU.timed.animation.playState && Ip(tU), null === (TU = tU.endedAnimation) || void 0 === TU || TU.cancel(), tU.endedAnimation = null;
          let uU = tU.timed ? 1 : 0;
          if (!tU.timed) {
            const UU = jU.gameBridge.lookup("momentumFrac", null);
            uU = UU > 0 ? 1 : 0, UU !== PU && (PU = UU, GU.style.transform = `scaleX(${UU})`)
          }
          const CU = null !== (qU = null === (KU = tU.timed) || void 0 === KU ? void 0 : KU.horizBarRemOffset) && void 0 !== qU ? qU : 0;
          CU === pU && uU === EU || (pU = CU, EU = uU, cU.style.transform = `translateX(calc(-50% + ${CU}rem)) scaleX(${uU})`)
        }))
      }), []), (0, KU.jsx)("div", {
        className: "MiddleScreenBar",
        ref: UU,
        children: (0, KU.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: RU
        })
      })
    }));
    var wp = gU(4336),
      np = gU(2522);

    function bp() {
      const {
        t: UU
      } = (0, aU.B)(), RU = (0, TU.h)("serverUpdating", null), gU = (0, np.d)(250, null !== RU);
      return null === RU || gU - RU > 3e4 ? null : (0, KU.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, KU.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: UU("updateWaiting:updatingIn", {
            countdown: (0, wp.q)(RU - gU)
          })
        }), (0, KU.jsx)("div", {
          children: UU("updateWaiting:bringYouBack")
        })]
      })
    }
    var op = gU(36459),
      Zp = gU(1844);
    const ap = [{
        translationKey: "general:interact"
      }],
      Yp = (0, tU.memo)((function() {
        const UU = (0, fU.g)("crosshairText"),
          {
            interactPrompt: RU,
            blockText: gU,
            neededTool: pU
          } = (0, JU.k)("crosshairTarget"),
          {
            isTouchScreen: EU
          } = (0, wU.l)(["isTouchScreen"]),
          PU = (0, bU.o)(),
          cU = (0, ZU.c)("alt-fire");
        (0, tU.useEffect)((() => {
          jU.gameBridge.send("setCrosshairInteractPrompt", !EU || PU ? "key" : "touch")
        }), [EU, PU]);
        const [GU, uU] = (0, tU.useReducer)((UU => UU + 1), 0);
        (0, TU.e)("customBindingsChanged", uU);
        var CU;
        if (null !== RU && (PU && null !== cU || !EU && null !== (0, Zp.n)("alt-fire"))) return (0, KU.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, KU.jsx)(nU.b, {
            noaAction: "alt-fire"
          }), (0, KU.jsx)(qU.e, {
            text: null !== (CU = RU.label) && void 0 !== CU ? CU : ap
          })]
        });
        let hU = null;
        return null !== gU ? hU = gU : null !== UU && "" !== UU ? hU = UU : null !== pU && (hU = [{
          icon: pU,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), hU ? (0, KU.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, KU.jsx)(qU.e, {
            text: hU
          })
        }) : null
      }));
    var Bp = gU(2353);
    const Vp = (0, tU.memo)((function() {
      var UU;
      const {
        interactPrompt: RU
      } = (0, JU.k)("crosshairTarget"), {
        openInGameMenuName: gU,
        openEverythingMenuName: tU
      } = (0, wU.l)(["openInGameMenuName", "openEverythingMenuName"]), pU = (0, TU.h)("aimingOverlay", "none"), EU = (0, MU.i)(), PU = (0, Bp.c)();
      return null === RU || null !== gU || null !== tU || "sniper" === pU || EU || PU ? null : (0, KU.jsx)(rp, {
        label: null !== (UU = RU.label) && void 0 !== UU ? UU : ap
      })
    }));

    function rp(UU) {
      let {
        label: RU
      } = UU;
      const gU = ZR(NU.e.Interact, !1);
      return (0, tU.useEffect)((() => (xU.p.yh(hR.q), () => {
        xU.p.yh(hR.q)
      })), []), (0, KU.jsx)("div", {
        ref: gU,
        className: "TouchInteractHit",
        children: (0, KU.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, KU.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, KU.jsx)(dU.c, {
              name: "hand-back-point-up"
            })
          }), (0, KU.jsx)(qU.e, {
            text: RU
          })]
        })
      })
    }
    var Xp = gU(4422),
      vp = gU(4487);
    const dp = (0, tU.forwardRef)((function(UU, RU) {
        let {
          text: gU,
          className: tU,
          children: pU
        } = UU;
        return gU.hasText ? (0, KU.jsx)("div", {
          ref: RU,
          className: EU()("HudTextPanel", tU, {
            NoBackground: !gU.showBackground
          }),
          children: null !== pU && void 0 !== pU ? pU : (0, KU.jsx)(qU.e, {
            text: gU.content
          })
        }) : null
      })),
      Hp = (0, tU.memo)((function() {
        const UU = (0, fU.h)("middleTextTop"),
          [RU, gU] = (0, tU.useState)(null),
          pU = (0, It.m)(RU);
        return UU.hasText ? (0, KU.jsx)("div", {
          className: EU()("MiddleTextTopContainer", {
            MiddleTextTopBelow: pU
          }),
          children: (0, KU.jsx)(dp, {
            ref: gU,
            className: "MiddleTextTop",
            text: UU
          })
        }) : null
      })),
      Sp = (0, tU.memo)((function() {
        const UU = (0, fU.d)();
        return (0, KU.jsx)(KU.Fragment, {
          children: UU.map(((UU, RU) => (0, KU.jsx)(dp, {
            className: "HeaderChip",
            text: UU
          }, RU)))
        })
      }));
    var sp = gU(3302),
      yp = gU(4268);
    const kp = (0, tU.memo)((function() {
      const {
        t: UU
      } = (0, aU.B)(), [RU, gU] = (0, tU.useState)(!1), pU = (0, tU.useRef)(!1), EU = function(UU) {
        let {
          gameNameWithVariation: RU,
          lobbyName: gU
        } = UU;
        if ((0, jp.m)(RU)) return Fp;
        if ((0, Cp.I)(gU)) return ip;
        return null
      }((0, JU.k)("connectedGame"));
      if (!EU || RU) return null;
      const PU = yp.e[EU.target];
      return (0, KU.jsx)(vU.g, {
        tooltipInner: (0, KU.jsx)("div", {
          children: UU(PU.reportButtonTooltip)
        }),
        children: (0, KU.jsx)("div", {
          children: (0, KU.jsx)(bg.I, {
            onClick: () => {
              pU.current || (pU.current = !0, (0, yp.i)(EU.reportPolicyIds, PU).then((UU => {
                null !== UU && void 0 !== UU && UU.selectedPolicyId && (jU.gameBridge.send("reportLobbyOrGame", {
                  target: EU.target,
                  gP: UU.selectedPolicyId,
                  details: UU.tP
                }), gU(!0))
              })).finally((() => {
                pU.current = !1
              })))
            }
          })
        })
      })
    }));
    const Fp = {
        target: "customGame",
        reportPolicyIds: sp.d
      },
      ip = {
        target: "lobby",
        reportPolicyIds: sp.h
      };
    var Ap = gU(8425),
      zp = gU(36476),
      Mp = gU(36480),
      Dp = gU(36482),
      Lp = gU(36488),
      Np = gU(36515);

    function lp(UU) {
      return UU instanceof Error && Op.has(UU.message) ? UU.message : void 0
    }
    const Op = new Set([Np.b.saveBusy.text, Np.b.saveClosed.text, Np.b.cropBusy.text]);
    let UE = !1;
    async function RE(UU, RU) {
      var gU, tU;
      const {
        files: pU
      } = RU, EU = pU.replayKey();
      if (null === EU) return "none";
      if (UE) throw new Error(Np.b.saveBusy.text);
      const PU = null !== (gU = null === (tU = pU.saveRefusal) || void 0 === tU ? void 0 : tU.call(pU)) && void 0 !== gU ? gU : null;
      if (null !== PU) throw new Error(PU);
      UE = !0;
      try {
        return await async function(UU, RU, gU) {
          const {
            files: tU
          } = RU, pU = () => tU.replayKey() === gU, EU = (UU, RU) => {
            pU() && tU.markSaved(UU, RU)
          };
          let PU = null;
          if (RU.pickerSupported()) {
            try {
              if (PU = await RU.chooseFile(UU ? null : tU.fileHandle()), null === PU) return "cg"
            } catch (qU) {
              RU.onFallback(qU)
            }
            if (!pU()) throw new Error(Np.b.saveClosed.text)
          }
          const TU = await tU.encode();
          if (null === TU) {
            if (null !== PU) throw new Error(Np.b.saveClosed.text);
            return "none"
          }
          if (null !== PU) try {
            return await RU.write(PU, TU), EU(PU), "written"
          } catch (qU) {
            RU.onFallback(qU)
          }
          return EU(null, RU.download(TU)), "downloaded"
        }(UU, RU, EU)
      } finally {
        UE = !1
      }
    }
    var gE = gU(4206),
      tE = gU(74);
    const pE = [1, 2, 4, 8, 16, 32, 64];

    function EE(UU, RU) {
      return Math.max(0, Math.min(UU, RU))
    }

    function PE(UU, RU, gU) {
      return gU <= RU ? 0 : (UU - RU) / (gU - RU) * 100
    }

    function TE(UU, RU, gU) {
      const tU = gU - RU;
      return Math.round(RU + UU / 100 * tU)
    }

    function qE(UU, RU) {
      const gU = Math.floor(UU / RU / 60),
        tU = Math.floor(UU / RU % 60),
        pU = UU % RU;
      return `${gU.toString().padStart(2,"0")}:${tU.toString().padStart(2,"0")}:${pU.toString().padStart(2,"0")}`
    }

    function KE(UU) {
      return Number.isInteger(UU) || pE.includes(UU) ? `${Math.round(UU)}\xd7` : `${UU.toFixed(1)}\xd7`
    }

    function cE(UU, RU) {
      const gU = pE.indexOf(UU);
      if (-1 !== gU) return "in" === RU ? pE[Math.min(gU + 1, pE.length - 1)] : pE[Math.max(gU - 1, 0)];
      if ("in" === RU) {
        for (const RU of pE)
          if (RU >= UU) return RU;
        return UU
      }
      for (let tU = pE.length - 1; tU >= 0; tU--)
        if (pE[tU] <= UU) return pE[tU];
      return pE[0]
    }

    function GE(UU, RU) {
      const gU = RU.getBoundingClientRect();
      if (gU.width <= 0) return 0;
      const tU = (UU - gU.left) / gU.width * 100;
      return Math.max(0, Math.min(100, tU))
    }

    function jE(UU, RU) {
      return RU <= 0 ? 0 : UU / RU * 100
    }

    function uE(UU, RU, gU) {
      const tU = [];
      let pU = Math.ceil(UU / gU) * gU;
      for (; pU <= RU;) tU.push(pU), pU += gU;
      return tU
    }
    var CE = gU(36521);
    const hE = [{
        label: "Linear",
        easing: CE.m
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: CE.g
      }, {
        label: "Ease Out",
        easing: CE.j
      }, {
        label: "Ease In Out",
        easing: CE.c
      }],
      QE = 200,
      eE = 150;

    function WE(UU) {
      const RU = UU => Number(UU.toFixed(3)).toString();
      return `cubic-bezier(${RU(UU[0])}, ${RU(UU[1])}, ${RU(UU[2])}, ${RU(UU[3])})`
    }

    function fE(UU, RU) {
      return {
        cx: 25 + UU * eE,
        cy: 25 + (1 - RU) * eE
      }
    }

    function xE(UU, RU, gU) {
      const tU = UU - gU.left,
        pU = RU - gU.top;
      return {
        x: vg.c.clamp((tU - 25) / eE, 0, 1),
        y: vg.c.clamp(1 - (pU - 25) / eE, -1, 2)
      }
    }

    function mE(UU, RU, gU, tU, pU) {
      return {
        x: (0, CE.t)(UU, gU, pU),
        y: (0, CE.t)(RU, tU, pU)
      }
    }
    const IE = (0, tU.memo)((function(UU) {
      let {
        value: RU,
        onChange: gU
      } = UU;
      const pU = (0, tU.useRef)(null),
        EU = (0, tU.useRef)(null),
        [PU, TU] = (0, tU.useState)(null),
        qU = (0, tU.useCallback)((() => {
          const UU = pU.current;
          if (!UU) return;
          const gU = UU.getContext("2d");
          if (!gU) return;
          const tU = window.devicePixelRatio || 1;
          UU.width = QE * tU, UU.height = QE * tU, gU.setTransform(tU, 0, 0, tU, 0, 0), gU.clearRect(0, 0, QE, QE), gU.fillStyle = "rgba(38, 52, 93, 0.85)", gU.fillRect(0, 0, QE, QE), gU.beginPath();
          const EU = fE(0, 0),
            TU = fE(1, 1);
          gU.moveTo(EU.cx, EU.cy), gU.lineTo(TU.cx, TU.cy), gU.strokeStyle = "rgba(164, 164, 164, 0.35)", gU.setLineDash([3, 3]), gU.stroke(), gU.setLineDash([]);
          const [qU, KU, cU, GU] = RU, jU = fE(qU, KU), uU = fE(cU, GU);
          gU.strokeStyle = "rgba(252, 211, 115, 0.55)", gU.lineWidth = 1.5, gU.beginPath(), gU.moveTo(EU.cx, EU.cy), gU.lineTo(jU.cx, jU.cy), gU.moveTo(TU.cx, TU.cy), gU.lineTo(uU.cx, uU.cy), gU.stroke(), gU.strokeStyle = "#fcd373", gU.lineWidth = 2, gU.beginPath();
          for (let RU = 0; RU <= 50; RU++) {
            const UU = mE(qU, KU, cU, GU, RU / 50),
              tU = fE(UU.x, UU.y);
            0 === RU ? gU.moveTo(tU.cx, tU.cy) : gU.lineTo(tU.cx, tU.cy)
          }
          gU.stroke();
          const CU = (UU, RU, tU) => {
            gU.beginPath(), gU.arc(UU, RU, tU ? 6 : 5, 0, 2 * Math.PI), gU.fillStyle = tU ? "#ffb914" : "#fcd373", gU.fill(), gU.strokeStyle = "#1a1f2e", gU.lineWidth = 1.5, gU.stroke()
          };
          CU(jU.cx, jU.cy, "p1" === PU), CU(uU.cx, uU.cy, "p2" === PU)
        }), [PU, RU]);
      (0, tU.useEffect)((() => {
        qU()
      }), [qU]);
      const cU = (0, tU.useCallback)(((UU, tU) => {
          const PU = pU.current,
            TU = EU.current;
          if (!PU || !TU) return;
          const qU = PU.getBoundingClientRect(),
            {
              x: KU,
              y: cU
            } = xE(UU, tU, qU);
          gU("p1" === TU ? [KU, cU, RU[2], RU[3]] : [RU[0], RU[1], KU, cU])
        }), [gU, RU]),
        GU = (0, tU.useCallback)((UU => {
          const gU = pU.current;
          if (!gU) return;
          const tU = gU.getBoundingClientRect();
          let {
            x: PU,
            y: qU
          } = xE(UU.clientX, UU.clientY, tU);
          PU = vg.c.clamp(PU, 0, 1), qU = vg.c.clamp(qU, 0, 1);
          const [KU, GU, jU, uU] = RU.map((UU => vg.c.clamp(UU, 0, 1))), CU = Math.hypot(PU - KU, qU - GU), hU = Math.hypot(PU - jU, qU - uU), QU = CU <= hU ? "p1" : "p2";
          ("p1" === QU ? CU : hU) > .12 || (EU.current = QU, TU(QU), gU.setPointerCapture(UU.pointerId), cU(UU.clientX, UU.clientY))
        }), [cU, RU]),
        jU = (0, tU.useCallback)((UU => {
          EU.current && cU(UU.clientX, UU.clientY)
        }), [cU]),
        uU = (0, tU.useCallback)((UU => {
          EU.current = null, TU(null), UU.currentTarget.hasPointerCapture(UU.pointerId) && UU.currentTarget.releasePointerCapture(UU.pointerId)
        }), []);
      return (0, KU.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, KU.jsx)("canvas", {
          ref: pU,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: QE,
            height: QE
          },
          onPointerDown: GU,
          onPointerMove: jU,
          onPointerUp: uU,
          onPointerCancel: uU
        }), (0, KU.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: WE(RU)
        })]
      })
    }));
    var JE = gU(1609),
      wE = gU(1591);
    const nE = 12;

    function bE(UU) {
      return {
        left: UU.left + UU.width / 2,
        top: UU.top - 8
      }
    }

    function oE(UU, RU) {
      const [gU, pU] = (0, tU.useState)(null);
      return (0, tU.useLayoutEffect)((() => {
        const gU = UU.current;
        if (!gU) return;
        const {
          width: tU,
          height: EU
        } = gU.getBoundingClientRect();
        pU(function(UU, RU, gU) {
          const tU = window.innerWidth,
            pU = window.innerHeight,
            EU = RU / 2;
          let PU = UU.left + UU.width / 2;
          PU = Math.max(nE + EU, Math.min(PU, tU - nE - EU));
          const TU = UU.top - 8 - nE,
            qU = pU - UU.bottom - 8 - nE,
            KU = TU < gU && qU >= TU;
          let cU;
          KU ? (cU = UU.bottom + 8, cU + gU > pU - nE && (cU = pU - nE - gU), cU = Math.max(nE, cU)) : (cU = UU.top - 8, cU - gU < nE && (cU = nE + gU));
          return {
            left: PU,
            top: cU,
            placeBelow: KU
          }
        }(RU, tU, EU))
      }), [RU, UU]), gU
    }

    function ZE(UU, RU, gU) {
      (0, tU.useEffect)((() => (0, wE.e)("pointerdown", (tU => {
        var pU, EU;
        const PU = tU.target;
        PU instanceof Node && (null !== (pU = UU.current) && void 0 !== pU && pU.contains(PU) || null !== gU && void 0 !== gU && null !== (EU = gU.current) && void 0 !== EU && EU.contains(PU) || (0, JE.n)(PU) || RU())
      }))), [gU, RU, UU])
    }

    function aE(UU) {
      let {
        label: RU,
        value: gU,
        onChange: tU
      } = UU;
      return (0, KU.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, KU.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: RU
        }), (0, KU.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((UU, RU) => (0, KU.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, KU.jsx)("span", {
              children: UU
            }), (0, KU.jsx)("input", {
              type: "number",
              step: "any",
              value: gU[RU],
              onChange: UU => {
                const pU = Number.parseFloat(UU.target.value);
                if (Number.isNaN(pU)) return;
                const EU = [gU[0], gU[1], gU[2]];
                EU[RU] = pU, tU(EU)
              }
            })]
          }, UU)))
        })]
      })
    }
    const YE = (0, tU.memo)((function(UU) {
        var RU, gU, pU;
        let {
          keyframe: PU,
          anchor: TU,
          hasOutgoingSegment: qU,
          onClose: cU,
          onApply: GU,
          onDelete: jU,
          onUseCurrentCamera: uU
        } = UU;
        const CU = (0, tU.useRef)(null),
          hU = oE(CU, TU.rect),
          [QU, eU] = (0, tU.useState)((() => [PU.position[0], PU.position[1], PU.position[2]])),
          [WU, fU] = (0, tU.useState)((() => [PU.direction[0], PU.direction[1], PU.direction[2]])),
          [xU, mU] = (0, tU.useState)((() => PU.easing));
        (0, tU.useEffect)((() => {
          eU([PU.position[0], PU.position[1], PU.position[2]]), fU([PU.direction[0], PU.direction[1], PU.direction[2]]), mU(PU.easing)
        }), [PU]), ZE(CU, cU);
        const IU = (0, tU.useCallback)((() => {
            GU({
              HG: PU.HG,
              position: QU,
              direction: WU,
              easing: xU
            }), cU()
          }), [WU, xU, PU.HG, GU, cU, QU]),
          JU = (0, tU.useCallback)((() => {
            jU(PU.HG), cU()
          }), [PU.HG, jU, cU]),
          wU = (0, tU.useCallback)((() => {
            const UU = uU();
            UU && (eU([UU.position[0], UU.position[1], UU.position[2]]), fU([UU.direction[0], UU.direction[1], UU.direction[2]]))
          }), [uU]),
          nU = bE(TU.rect);
        return (0, KU.jsxs)("div", {
          ref: CU,
          className: EU()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (RU = null === hU || void 0 === hU ? void 0 : hU.placeBelow) && void 0 !== RU && RU,
            Positioned: null !== hU
          }),
          style: {
            left: `${null!==(gU=null===hU||void 0===hU?void 0:hU.left)&&void 0!==gU?gU:nU.left}px`,
            top: `${null!==(pU=null===hU||void 0===hU?void 0:hU.top)&&void 0!==pU?pU:nU.top}px`
          },
          onPointerDown: UU => {
            UU.stopPropagation()
          },
          children: [(0, KU.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, KU.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, KU.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", TU.HG]
            })]
          }), (0, KU.jsx)(aE, {
            label: "Position",
            value: QU,
            onChange: eU
          }), (0, KU.jsx)(aE, {
            label: "Direction",
            value: WU,
            onChange: fU
          }), qU && (0, KU.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, KU.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, KU.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: hE.map((UU => {
                const RU = (gU = xU, tU = UU.easing, gU[0] === tU[0] && gU[1] === tU[1] && gU[2] === tU[2] && gU[3] === tU[3]);
                var gU, tU;
                return (0, KU.jsx)(bg.M, {
                  className: EU()("ReplayKeyframePopoverPreset", {
                    Active: RU
                  }),
                  onClick: () => {
                    mU(UU.easing)
                  },
                  children: UU.label
                }, UU.label)
              }))
            }), (0, KU.jsx)(IE, {
              value: xU,
              onChange: mU
            })]
          }), (0, KU.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, KU.jsx)(bg.e, {
              className: "ReplayViewerCompactButton",
              onClick: wU,
              children: "Use current view"
            }), (0, KU.jsx)(bg.j, {
              className: "ReplayViewerCompactButton",
              onClick: IU,
              children: "Apply"
            }), (0, KU.jsx)(bg.E, {
              className: "ReplayViewerCompactButton",
              onClick: JU,
              children: "Delete"
            })]
          })]
        })
      })),
      BE = (0, tU.memo)((function(UU) {
        var RU, gU, pU;
        let {
          anchor: PU,
          hasPlaybackMark: TU,
          onClose: qU,
          onMark: cU,
          onZoom: GU,
          onCrop: jU,
          onDeleteKeyframes: uU,
          onClearMark: CU
        } = UU;
        const hU = (0, tU.useRef)(null),
          QU = oE(hU, PU.rect),
          eU = bE(PU.rect),
          WU = {
            startTick: PU.startTick,
            endTick: PU.endTick
          },
          fU = PU.endTick > PU.startTick;
        return ZE(hU, qU), (0, KU.jsx)("div", {
          ref: hU,
          className: EU()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (RU = null === QU || void 0 === QU ? void 0 : QU.placeBelow) && void 0 !== RU && RU,
            Positioned: null !== QU
          }),
          style: {
            left: `${null!==(gU=null===QU||void 0===QU?void 0:QU.left)&&void 0!==gU?gU:eU.left}px`,
            top: `${null!==(pU=null===QU||void 0===QU?void 0:QU.top)&&void 0!==pU?pU:eU.top}px`
          },
          onPointerDown: UU => {
            UU.stopPropagation()
          },
          children: (0, KU.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, KU.jsx)(bg.j, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                cU(WU)
              },
              disabled: !fU,
              children: (0, KU.jsx)("span", {
                children: " Play range "
              })
            }), (0, KU.jsx)(bg.e, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                GU(WU)
              },
              children: (0, KU.jsx)("span", {
                children: " Zoom "
              })
            }), (0, KU.jsx)(bg.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                jU(WU)
              },
              disabled: !fU,
              children: (0, KU.jsx)("span", {
                children: " Crop "
              })
            }), (0, KU.jsx)(bg.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                uU(WU)
              },
              children: (0, KU.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), TU && (0, KU.jsx)(bg.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                CU()
              },
              children: (0, KU.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      VE = (0, tU.memo)((function(UU) {
        var RU, gU;
        let {
          maxTick: pU,
          displayTick: PU,
          bZ: TU,
          cameraKeyframes: qU,
          playbackMark: cU,
          onSeek: GU,
          onPause: jU,
          onScrubTickChange: uU,
          onMoveCameraKeyframe: CU,
          onUpdateCameraKeyframe: hU,
          onDeleteCameraKeyframe: QU,
          onUseCurrentCamera: eU,
          onMarkRange: WU,
          onCropRange: fU,
          onDeleteKeyframesInRange: xU,
          onClearMark: mU,
          zoomLevel: IU,
          onZoomLevelChange: JU
        } = UU;
        const wU = (0, tU.useRef)(null),
          nU = (0, tU.useRef)(null),
          bU = (0, tU.useRef)(!1),
          oU = (0, tU.useRef)(!1),
          ZU = (0, tU.useRef)(IU),
          aU = (0, tU.useRef)(null),
          YU = (0, tU.useRef)(null),
          BU = (0, tU.useRef)(null),
          VU = (0, tU.useRef)(null),
          [rU, XU] = (0, tU.useState)(null),
          [vU, dU] = (0, tU.useState)(PU),
          [HU, SU] = (0, tU.useState)(null),
          [sU, yU] = (0, tU.useState)(null),
          [kU, FU] = (0, tU.useState)(null),
          [iU, AU] = (0, tU.useState)(null),
          zU = (0, tU.useMemo)((() => qU.map((UU => UU.HG))), [qU]),
          MU = null !== rU && void 0 !== rU ? rU : PU,
          {
            viewStart: DU,
            viewEnd: LU
          } = (0, tU.useMemo)((() => function(UU) {
            const RU = UU.maxTick + 1,
              gU = Math.max(1, Math.ceil(RU / UU.zoomLevel)),
              tU = Math.floor(gU / 2);
            let pU = UU.centerTick - tU;
            return pU = Math.max(0, Math.min(pU, UU.maxTick - gU + 1)), {
              viewStart: pU,
              viewEnd: Math.min(UU.maxTick, pU + gU - 1)
            }
          }({
            maxTick: pU,
            zoomLevel: IU,
            centerTick: vU
          })), [pU, IU, vU]);
        (0, tU.useEffect)((() => {
          if (null !== rU || null !== YU.current || null !== BU.current || null !== VU.current) return;
          if (bU.current) return void(bU.current = !1);
          if (oU.current) return void(oU.current = !1);
          const UU = ZU.current !== IU;
          ZU.current = IU, UU && dU(PU)
        }), [IU, PU, rU]);
        const NU = (0, tU.useCallback)((UU => {
            let RU = EE(UU, pU);
            return cU && (RU = Math.max(cU.inTick, Math.min(RU, cU.outTick))), RU
          }), [pU, cU]),
          lU = (0, tU.useCallback)(((UU, RU) => {
            const gU = NU(UU);
            GU(gU), RU && dU(gU)
          }), [NU, GU]),
          OU = (0, tU.useCallback)(((UU, RU) => {
            const gU = NU(UU);
            XU(gU), uU(gU), lU(gU, RU)
          }), [NU, lU, uU]),
          UR = (0, tU.useCallback)((() => {
            XU((UU => (null !== UU && dU(UU), null))), uU(null)
          }), [uU]),
          RR = (0, tU.useCallback)((() => {
            FU(null), AU(null)
          }), []),
          gR = (0, tU.useCallback)((UU => {
            const RU = wU.current;
            if (!RU) return 0;
            return EE(TE(GE(UU, RU), DU, LU), pU)
          }), [pU, LU, DU]),
          tR = (0, tU.useCallback)((UU => {
            const RU = nU.current;
            if (!RU) return 0;
            return EE(TE(GE(UU, RU), 0, pU), pU)
          }), [pU]),
          pR = (0, tU.useMemo)((() => {
            if (!HU) return [...zU];
            const UU = zU.filter((UU => UU !== HU.fromTick));
            return UU.push(HU.previewTick), UU.sort(((UU, RU) => UU - RU)), UU
          }), [zU, HU]),
          ER = (0, tU.useMemo)((() => {
            var UU;
            return sU && null !== (UU = qU.find((UU => UU.HG === sU.HG))) && void 0 !== UU ? UU : null
          }), [qU, sU]),
          PR = (0, tU.useMemo)((() => !!ER && qU.some((UU => UU.HG > ER.HG))), [qU, ER]);
        (0, tU.useEffect)((() => {
          sU && !ER && yU(null)
        }), [sU, ER]), (0, tU.useEffect)((() => {
          if (!iU) return () => {};
          const UU = UU => {
            "Escape" === UU.key && RR()
          };
          return window.addEventListener("keydown", UU), () => {
            window.removeEventListener("keydown", UU)
          }
        }), [RR, iU]);
        const TR = (0, tU.useCallback)(((UU, RU) => {
            RR(), jU(), GU(UU, {
              ignorePlaybackMark: !0
            }), yU({
              HG: UU,
              rect: RU.getBoundingClientRect()
            })
          }), [RR, jU, GU]),
          qR = (0, tU.useCallback)(((UU, RU) => gU => {
            0 === gU.button && (gU.stopPropagation(), yU(null), RR(), jU(), aU.current = {
              fromTick: UU,
              startX: gU.clientX,
              startY: gU.clientY,
              didDrag: !1,
              track: RU
            }, SU({
              fromTick: UU,
              previewTick: UU,
              track: RU
            }), gU.currentTarget.setPointerCapture(gU.pointerId))
          }), [RR, jU]),
          KR = (0, tU.useCallback)((UU => {
            if (!HU) return;
            UU.stopPropagation();
            const RU = aU.current;
            if (RU && !RU.didDrag) {
              const gU = UU.clientX - RU.startX,
                tU = UU.clientY - RU.startY;
              Math.hypot(gU, tU) > 5 && (RU.didDrag = !0)
            }
            const gU = "detail" === HU.track ? gR(UU.clientX) : tR(UU.clientX);
            gU !== HU.previewTick && SU({
              ...HU,
              previewTick: gU
            })
          }), [HU, gR, tR]),
          cR = (0, tU.useCallback)((UU => {
            if (!HU) return;
            UU.stopPropagation();
            const RU = aU.current,
              gU = "detail" === HU.track ? gR(UU.clientX) : tR(UU.clientX);
            RU && !RU.didDrag ? TR(RU.fromTick, UU.currentTarget) : gU !== HU.fromTick && CU(HU.fromTick, gU), SU(null), aU.current = null, UU.currentTarget.releasePointerCapture(UU.pointerId)
          }), [HU, CU, TR, gR, tR]),
          GR = (0, tU.useCallback)((UU => {
            if (0 !== UU.button) return;
            yU(null), jU();
            const RU = gR(UU.clientX);
            YU.current = {
              pointerId: UU.pointerId,
              startX: UU.clientX,
              startY: UU.clientY,
              startTick: RU,
              currentTick: RU,
              didSelect: !1
            }, FU(null), AU(null), UU.currentTarget.setPointerCapture(UU.pointerId)
          }), [jU, gR]),
          jR = (0, tU.useCallback)((UU => {
            const RU = YU.current;
            if (!RU || RU.pointerId !== UU.pointerId) return;
            const gU = gR(UU.clientX);
            if (RU.currentTick = gU, !RU.didSelect) {
              const gU = UU.clientX - RU.startX,
                tU = UU.clientY - RU.startY;
              if (Math.hypot(gU, tU) <= 5) return;
              RU.didSelect = !0
            }
            const tU = Math.min(RU.startTick, gU),
              pU = Math.max(RU.startTick, gU);
            FU({
              startTick: tU,
              endTick: pU
            })
          }), [gR]),
          uR = (0, tU.useCallback)((UU => {
            const RU = YU.current;
            if (!RU || RU.pointerId !== UU.pointerId) return;
            if (YU.current = null, UU.currentTarget.releasePointerCapture(UU.pointerId), !RU.didSelect) return RR(), void lU(RU.startTick, !0);
            const gU = gR(UU.clientX),
              tU = Math.min(RU.startTick, gU),
              pU = Math.max(RU.startTick, gU),
              EU = {
                startTick: tU,
                endTick: pU
              };
            FU(EU);
            const PU = wU.current;
            if (!PU) return;
            const TU = PU.getBoundingClientRect(),
              qU = PE(tU, DU, LU) / 100,
              KU = PE(pU, DU, LU) / 100,
              cU = TU.left + qU * TU.width,
              GU = TU.left + KU * TU.width;
            AU({
              ...EU,
              rect: new DOMRect(cU, TU.top, Math.max(GU - cU, 1), TU.height)
            })
          }), [RR, lU, gR, LU, DU]),
          CR = (0, tU.useCallback)((UU => RU => {
            if (0 !== RU.button) return;
            RU.stopPropagation(), yU(null), RR(), jU(), BU.current = {
              pointerId: RU.pointerId,
              track: UU
            }, RU.currentTarget.setPointerCapture(RU.pointerId);
            const gU = "detail" === UU ? gR(RU.clientX) : tR(RU.clientX);
            OU(gU, !1)
          }), [RR, jU, OU, gR, tR]),
          hR = (0, tU.useCallback)((UU => {
            const RU = BU.current;
            if (!RU || RU.pointerId !== UU.pointerId) return;
            UU.stopPropagation();
            const gU = "detail" === RU.track ? gR(UU.clientX) : tR(UU.clientX);
            OU(gU, !1)
          }), [OU, gR, tR]),
          QR = (0, tU.useCallback)((UU => {
            const RU = BU.current;
            RU && RU.pointerId === UU.pointerId && (UU.stopPropagation(), BU.current = null, UU.currentTarget.releasePointerCapture(UU.pointerId), UR())
          }), [UR]),
          eR = (0, tU.useCallback)((UU => {
            0 === UU.button && (RR(), jU(), VU.current = {
              pointerId: UU.pointerId
            }, UU.currentTarget.setPointerCapture(UU.pointerId), OU(tR(UU.clientX), !0))
          }), [RR, jU, OU, tR]),
          WR = (0, tU.useCallback)((UU => {
            const RU = VU.current;
            RU && RU.pointerId === UU.pointerId && OU(tR(UU.clientX), !0)
          }), [OU, tR]),
          fR = (0, tU.useCallback)((UU => {
            const RU = VU.current;
            RU && RU.pointerId === UU.pointerId && (VU.current = null, UU.currentTarget.releasePointerCapture(UU.pointerId), UR())
          }), [UR]),
          xR = (0, tU.useCallback)((UU => {
            const RU = Math.max(1, UU.endTick - UU.startTick + 1),
              gU = pU + 1,
              tU = gU / RU,
              EU = Math.max(1, Math.ceil(gU / tU)),
              PU = UU.startTick + Math.floor((EU - 1) / 2);
            oU.current = !0, ZU.current = tU, dU(EE(PU, pU)), JU(tU), RR()
          }), [RR, pU, JU]),
          mR = (0, tU.useCallback)((UU => {
            WU(UU), RR()
          }), [RR, WU]),
          IR = (0, tU.useCallback)((UU => {
            fU(UU), RR()
          }), [RR, fU]),
          JR = (0, tU.useCallback)((UU => {
            xU(UU), RR()
          }), [RR, xU]),
          wR = (0, tU.useCallback)((() => {
            mU(), RR()
          }), [RR, mU]);
        (0, tU.useEffect)((() => {
          const UU = wU.current;
          if (!UU) return () => {};
          const RU = RU => {
            RU.preventDefault();
            const gU = EE(TE(GE(RU.clientX, UU), DU, LU), pU),
              tU = RU.deltaY < 0 ? "in" : "out",
              EU = cE(IU, tU);
            EU !== IU && (bU.current = !0, dU(gU), JU(EU))
          };
          return UU.addEventListener("wheel", RU, {
            passive: !1
          }), () => {
            UU.removeEventListener("wheel", RU)
          }
        }), [pU, JU, LU, DU, IU]);
        const nR = PE(MU, DU, LU),
          bR = jE(MU, pU),
          oR = jE(DU, pU),
          ZR = pU > 0 ? jE(LU, pU) : 100,
          aR = null !== cU,
          YR = null !== (RU = null === cU || void 0 === cU ? void 0 : cU.inTick) && void 0 !== RU ? RU : 0,
          BR = null !== (gU = null === cU || void 0 === cU ? void 0 : cU.outTick) && void 0 !== gU ? gU : pU,
          VR = jE(YR, pU),
          rR = Math.max(jE(BR, pU) - VR, 0),
          XR = PE(Math.max(YR, DU), DU, LU),
          vR = PE(Math.min(BR, LU), DU, LU),
          dR = Math.max(vR - XR, 0),
          HR = aR && BR >= DU && YR <= LU,
          SR = PE(YR, DU, LU),
          sR = PE(BR, DU, LU),
          yR = aR && YR >= DU && YR <= LU,
          kR = aR && BR >= DU && BR <= LU,
          FR = jE(YR, pU),
          iR = jE(BR, pU),
          AR = null !== kU && void 0 !== kU ? kU : iU ? {
            startTick: iU.startTick,
            endTick: iU.endTick
          } : null,
          zR = AR ? PE(Math.max(AR.startTick, DU), DU, LU) : 0,
          MR = AR ? PE(Math.min(AR.endTick, LU), DU, LU) : 0,
          DR = Math.max(MR - zR, 0),
          LR = null !== AR && AR.endTick >= DU && AR.startTick <= LU,
          NR = (0, tU.useMemo)((() => uE(0, pU, TU)), [pU, TU]),
          lR = (0, tU.useMemo)((() => uE(DU, LU, TU)), [DU, LU, TU]),
          OR = (0, tU.useMemo)((() => pR.filter((UU => UU >= DU && UU <= LU))), [pR, LU, DU]),
          Ug = (0, tU.useCallback)(((UU, RU, gU) => {
            const tU = "detail" === RU ? PE(UU, DU, LU) : jE(UU, pU),
              PU = null !== HU && gU === HU.fromTick,
              TU = null !== sU && sU.HG === gU;
            return (0, KU.jsx)("button", {
              type: "button",
              className: EU()("ReplayTimelineCameraKeyframeMarker", "detail" === RU ? "Detail" : "Overview", {
                Dragging: PU,
                Selected: TU
              }),
              style: {
                left: `${tU}%`
              },
              onPointerDown: qR(gU, RU),
              onPointerMove: KR,
              onPointerUp: cR,
              onPointerCancel: cR,
              "aria-label": `Camera keyframe at tick ${gU}`
            }, `cam-${RU}-${gU}`)
          }), [qR, sU, cR, HU, pU, KR, LU, DU]),
          Rg = (0, tU.useCallback)((UU => HU && UU === HU.previewTick ? HU.fromTick : UU), [HU]);
        return pU <= 0 ? null : (0, KU.jsxs)("div", {
          className: "ReplayTimeline",
          children: [sU && ER && (0, tE.createPortal)((0, KU.jsx)(YE, {
            keyframe: ER,
            anchor: sU,
            hasOutgoingSegment: PR,
            onClose: () => {
              yU(null)
            },
            onApply: hU,
            onDelete: QU,
            onUseCurrentCamera: eU
          }), document.body), iU && (0, tE.createPortal)((0, KU.jsx)(BE, {
            anchor: iU,
            hasPlaybackMark: aR,
            onClose: RR,
            onMark: mR,
            onZoom: xR,
            onCrop: IR,
            onDeleteKeyframes: JR,
            onClearMark: wR
          }), document.body), (0, KU.jsxs)("div", {
            className: EU()("ReplayTimelineOverviewSection", {
              Hidden: IU <= 1
            }),
            children: [(0, KU.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, KU.jsxs)("div", {
              ref: nU,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: eR,
              onPointerMove: WR,
              onPointerUp: fR,
              onPointerCancel: fR,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": pU,
              "aria-valuenow": MU,
              tabIndex: 0,
              children: [NR.map((UU => {
                const RU = jE(UU, pU);
                return (0, KU.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${RU}%`
                  }
                }, UU)
              })), aR && (0, KU.jsxs)(KU.Fragment, {
                children: [(0, KU.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${VR}%`,
                    width: `${rR}%`
                  }
                }), (0, KU.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${FR}%`
                  },
                  "aria-hidden": !0
                }), (0, KU.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${iR}%`
                  },
                  "aria-hidden": !0
                })]
              }), pR.map((UU => Ug(UU, "overview", Rg(UU)))), (0, KU.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${oR}%`,
                  width: `${Math.max(ZR-oR,.5)}%`
                }
              }), (0, KU.jsx)("button", {
                type: "button",
                className: EU()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== rU
                }),
                style: {
                  left: `${bR}%`
                },
                onPointerDown: CR("overview"),
                onPointerMove: hR,
                onPointerUp: QR,
                onPointerCancel: QR,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, KU.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, KU.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, KU.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, KU.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [qE(DU, TU), " \u2013 ", qE(LU, TU), IU > 1 && (0, KU.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: KE(IU)
                })]
              })]
            }), (0, KU.jsxs)("div", {
              ref: wU,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: GR,
              onPointerMove: jR,
              onPointerUp: uR,
              onPointerCancel: uR,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": DU,
              "aria-valuemax": LU,
              "aria-valuenow": MU,
              tabIndex: 0,
              children: [lR.map((UU => {
                const RU = PE(UU, DU, LU);
                return (0, KU.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${RU}%`
                  }
                }, UU)
              })), HR && (0, KU.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${XR}%`,
                  width: `${dR}%`
                }
              }), yR && (0, KU.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${SR}%`
                },
                "aria-label": `Play range start at tick ${YR}`
              }), kR && (0, KU.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${sR}%`
                },
                "aria-label": `Play range end at tick ${BR}`
              }), LR && AR && (0, KU.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${zR}%`,
                  width: `${DR}%`
                }
              }), OR.map((UU => Ug(UU, "detail", Rg(UU)))), (0, KU.jsx)("button", {
                type: "button",
                className: EU()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== rU
                }),
                style: {
                  left: `${nR}%`
                },
                onPointerDown: CR("detail"),
                onPointerMove: hR,
                onPointerUp: QR,
                onPointerCancel: QR,
                "aria-label": "Scrub playhead"
              })]
            }), (0, KU.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, KU.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      rE = (0, tU.memo)((function(UU) {
        let {
          enabled: RU
        } = UU;
        const gU = (0, tU.useRef)(!1),
          pU = (0, tU.useRef)(null),
          [PU, TU] = (0, tU.useState)(!1),
          qU = (0, tU.useCallback)((UU => {
            RU && 0 === UU.button && (gU.current = !0, TU(!0), pU.current = {
              x: UU.clientX,
              y: UU.clientY
            }, UU.currentTarget.setPointerCapture(UU.pointerId))
          }), [RU]),
          cU = (0, tU.useCallback)((UU => {
            if (!RU || !gU.current || !pU.current) return;
            const tU = UU.clientX - pU.current.x,
              EU = UU.clientY - pU.current.y;
            pU.current = {
              x: UU.clientX,
              y: UU.clientY
            }, jU.gameBridge.send("dragReplayCamera", {
              dx: tU,
              dy: EU
            })
          }), [RU]),
          GU = (0, tU.useCallback)((UU => {
            gU.current && (gU.current = !1, TU(!1), pU.current = null, UU.currentTarget.releasePointerCapture(UU.pointerId))
          }), []);
        return RU ? (0, KU.jsx)("div", {
          className: EU()("ReplayViewerCameraDragSurface", {
            Dragging: PU
          }),
          onPointerDown: qU,
          onPointerMove: cU,
          onPointerUp: GU,
          onPointerCancel: GU,
          "aria-hidden": !0
        }) : null
      }));
    var XE = gU(36524),
      vE = gU(36527);
    const dE = (0, tU.memo)((function(UU) {
        var RU, gU, pU;
        let {
          anchorRect: PU,
          anchorRef: qU,
          onClose: cU
        } = UU;
        const GU = (0, tU.useRef)(null),
          jU = oE(GU, PU),
          [uU, CU] = (0, tU.useState)(vE.c),
          hU = (0, tU.useMemo)((() => Object.values(uU).every((UU => UU))), [uU]);
        (0, TU.e)("replayViewer|uiVisibilityChanged", (() => {
          CU((0, vE.c)())
        })), ZE(GU, cU, qU);
        const QU = (0, tU.useCallback)(((UU, RU) => {
            (0, vE.g)(UU, RU), CU((0, vE.c)())
          }), []),
          eU = (0, tU.useCallback)((UU => {
            for (const {
                group: RU
              }
              of XE.h)(0, vE.g)(RU, UU);
            CU((0, vE.c)())
          }), []),
          WU = bE(PU);
        return (0, tE.createPortal)((0, KU.jsxs)("div", {
          ref: GU,
          className: EU()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (RU = null === jU || void 0 === jU ? void 0 : jU.placeBelow) && void 0 !== RU && RU,
            Positioned: null !== jU
          }),
          style: {
            left: `${null!==(gU=null===jU||void 0===jU?void 0:jU.left)&&void 0!==gU?gU:WU.left}px`,
            top: `${null!==(pU=null===jU||void 0===jU?void 0:jU.top)&&void 0!==pU?pU:WU.top}px`
          },
          onPointerDown: UU => {
            UU.stopPropagation()
          },
          children: [(0, KU.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, KU.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, KU.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, KU.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, KU.jsx)("input", {
                type: "checkbox",
                checked: hU,
                onChange: UU => {
                  eU(UU.target.checked)
                }
              }), (0, KU.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), XE.h.map((UU => {
              let {
                group: RU,
                label: gU
              } = UU;
              return (0, KU.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, KU.jsx)("input", {
                  type: "checkbox",
                  checked: uU[RU],
                  onChange: UU => {
                    QU(RU, UU.target.checked)
                  }
                }), (0, KU.jsx)("span", {
                  children: gU
                })]
              }, RU)
            }))]
          })]
        }), document.body)
      })),
      HE = (0, tU.memo)((function(UU) {
        let {
          disabled: RU
        } = UU;
        const gU = (0, tU.useRef)(null),
          [pU, EU] = (0, tU.useState)(!1),
          [PU, TU] = (0, tU.useState)(null),
          qU = (0, tU.useCallback)((() => {
            gU.current && (TU(gU.current.getBoundingClientRect()), EU((UU => !UU)))
          }), []),
          cU = (0, tU.useCallback)((() => {
            EU(!1)
          }), []);
        return (0, KU.jsxs)(KU.Fragment, {
          children: [(0, KU.jsx)("div", {
            ref: gU,
            children: (0, KU.jsx)(bg.e, {
              className: "ReplayViewerActionButton",
              onClick: qU,
              disabled: RU,
              children: (0, KU.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), pU && PU && (0, KU.jsx)(dE, {
            anchorRect: PU,
            anchorRef: gU,
            onClose: cU
          })]
        })
      })),
      SE = ["freeCamUp", "freeCamDown"];

    function sE(UU, RU) {
      jU.gameBridge.send("holdReplayFreecamVertical", {
        action: UU,
        WT: RU
      })
    }
    const yE = (0, tU.memo)((function() {
        (0, tU.useEffect)((() => () => {
          ! function() {
            jU.gameBridge.send("moveReplayFreecam", null);
            for (const UU of SE) sE(UU, !1)
          }()
        }), []);
        const UU = (0, tU.useCallback)((UU => {
            jU.gameBridge.send("moveReplayFreecam", UU)
          }), []),
          RU = (0, tU.useCallback)((UU => ({
            onTouchStart: RU => {
              RU.preventDefault(), RU.stopPropagation(), sE(UU, !0)
            },
            onTouchEnd: RU => {
              RU.preventDefault(), RU.stopPropagation(), sE(UU, !1)
            },
            onTouchCancel: RU => {
              RU.preventDefault(), RU.stopPropagation(), sE(UU, !1)
            }
          })), []);
        return (0, KU.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, KU.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, KU.jsx)(wR, {
              onMove: UU,
              mode: "pinned"
            })
          }), (0, KU.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, KU.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...RU("freeCamUp"),
              children: (0, KU.jsx)(dU.c, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, KU.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...RU("freeCamDown"),
              children: (0, KU.jsx)(dU.c, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      kE = [],
      FE = (0, tU.memo)((function() {
        const UU = (0, MU.i)();
        return (0, JU.d)("replayViewerRequested", (UU => {
          (0, MU.f)("toggle" === UU ? !(0, MU.e)() : "open" === UU)
        })), UU ? (0, KU.jsx)(iE, {}) : null
      })),
      iE = (0, tU.memo)((function() {
        var UU, RU, gU, pU, PU, TU, qU, cU, GU, uU, CU, hU;
        const QU = tU.useRef(null),
          [eU, WU] = (0, tU.useState)(null),
          [fU, xU] = (0, tU.useState)(1),
          [mU, IU] = (0, tU.useState)(null),
          [bU, oU] = (0, tU.useState)(!1),
          {
            isTouchScreen: ZU
          } = (0, wU.l)(["isTouchScreen"]),
          aU = (0, JU.k)("replay"),
          YU = (0, JU.k)("replayEdits"),
          BU = null !== aU,
          VU = null !== (UU = null === aU || void 0 === aU ? void 0 : aU.HG) && void 0 !== UU ? UU : 0,
          rU = null !== (RU = null === aU || void 0 === aU ? void 0 : aU.totalTicks) && void 0 !== RU ? RU : 0,
          XU = Math.max(0, rU - 1),
          HU = null !== (gU = null === aU || void 0 === aU ? void 0 : aU.playing) && void 0 !== gU && gU,
          SU = null !== (pU = null === aU || void 0 === aU ? void 0 : aU.speed) && void 0 !== pU ? pU : 1,
          sU = null !== (PU = null === aU || void 0 === aU ? void 0 : aU.bZ) && void 0 !== PU ? PU : 20,
          yU = null !== mU && void 0 !== mU ? mU : VU,
          kU = null !== (TU = null === aU || void 0 === aU ? void 0 : aU.freecam) && void 0 !== TU && TU,
          FU = null !== (qU = null === aU || void 0 === aU ? void 0 : aU.cameraMode) && void 0 !== qU ? qU : "recording",
          iU = null !== (cU = null === YU || void 0 === YU ? void 0 : YU.cameraKeyframes) && void 0 !== cU ? cU : kE,
          AU = null !== (GU = null === YU || void 0 === YU ? void 0 : YU.playbackMark) && void 0 !== GU ? GU : null,
          zU = null !== (uU = null === YU || void 0 === YU ? void 0 : YU.fileName) && void 0 !== uU ? uU : null,
          DU = null !== (CU = null === YU || void 0 === YU ? void 0 : YU.unsavedChanges) && void 0 !== CU && CU,
          LU = null !== (hU = null === YU || void 0 === YU ? void 0 : YU.suggestSaveAs) && void 0 !== hU && hU,
          NU = (0, JU.k)("replayVideoExporting"),
          lU = !NU && BU && ("freecam" === FU || ("recording" === FU || "keyframe" === FU) && !HU),
          OU = ZU && BU && "freecam" === FU && !NU && !bU;
        (0, gE.e)(!0, !0, "ReplayViewerOverlay"), (0, tU.useEffect)((() => {
          jU.gameBridge.send("syncReplayCameraMode", null)
        }), [kU]);
        const UR = (0, tU.useCallback)(((UU, RU) => {
            jU.gameBridge.send("seekReplay", {
              HG: UU,
              ignorePlaybackMark: null === RU || void 0 === RU ? void 0 : RU.ignorePlaybackMark
            })
          }), []),
          RR = (0, tU.useCallback)((() => {
            jU.gameBridge.send("setReplayPlaying", !1)
          }), []),
          gR = (0, tU.useCallback)(((UU, RU) => {
            jU.gameBridge.send("moveReplayCameraKeyframe", {
              from: UU,
              to: RU
            })
          }), []),
          tR = (0, tU.useCallback)((UU => {
            jU.gameBridge.send("setReplayCameraKeyframe", UU)
          }), []),
          pR = (0, tU.useCallback)((UU => {
            jU.gameBridge.send("deleteReplayCameraKeyframes", {
              start: UU,
              end: UU
            })
          }), []),
          ER = (0, tU.useCallback)((UU => {
            jU.gameBridge.send("deleteReplayCameraKeyframes", {
              start: UU.startTick,
              end: UU.endTick
            })
          }), []),
          PR = (0, tU.useCallback)((() => jU.gameBridge.lookup("replayCamera", null)), []),
          TR = (0, tU.useCallback)((UU => {
            IU(UU)
          }), []),
          qR = (0, tU.useCallback)((UU => {
            jU.gameBridge.send("setReplayPlaybackMark", {
              inTick: UU.startTick,
              outTick: UU.endTick
            })
          }), []),
          KR = (0, tU.useCallback)((() => {
            jU.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          cR = (0, tU.useCallback)((UU => {
            const RU = jU.gameBridge.latest("replay");
            if (null === RU || UU.endTick <= UU.startTick) return;
            const gU = UU.startTick,
              tU = UU.endTick;
            Nt.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((UU => {
              var pU;
              if (!0 !== UU) return;
              if ((null === (pU = jU.gameBridge.latest("replay")) || void 0 === pU ? void 0 : pU.id) !== RU.id) return;
              jU.gameBridge.send("cropReplay", {
                start: gU,
                end: tU
              }) && (IU(null), xU(1))
            }))
          }), []),
          GR = (0, tU.useCallback)(((UU, RU) => {
            WU(null), xU(1), IU(null), (0, zp.e)().open(UU, RU).catch((UU => {
              console.error(UU), WU(UU instanceof Error ? UU.message : "Failed to parse recording")
            }))
          }), []),
          jR = (0, tU.useCallback)(((UU, RU) => {
            null !== jU.gameBridge.latest("connectedGame").websocketUrl ? Nt.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((gU => {
              !0 === gU && GR(UU, RU)
            })) : GR(UU, RU)
          }), [GR]),
          uR = (0, tU.useCallback)((UU => {
            var RU;
            const gU = null === (RU = UU.target.files) || void 0 === RU ? void 0 : RU[0];
            if (UU.target.value = "", !gU) return;
            const tU = new FileReader;
            tU.onload = () => {
              jR(new Uint8Array(tU.result), {
                fileName: gU.name
              })
            }, tU.onerror = () => {
              WU("Failed to read file")
            }, tU.readAsArrayBuffer(gU)
          }), [jR]),
          CR = (0, tU.useCallback)((() => {
            const UU = () => {
              var UU;
              null === (UU = QU.current) || void 0 === UU || UU.click()
            };
            (0, Lp.i)() ? (0, Lp.e)().then((UU => {
              UU && jR(UU.bytes, {
                fileHandle: UU.handle
              })
            })).catch((RU => {
              console.error(RU), UU()
            })): UU()
          }), [jR]),
          hR = (0, tU.useCallback)((async function() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let RU;
            try {
              RU = await RE(UU, {
                files: (0, zp.e)(),
                pickerSupported: Lp.i,
                chooseFile: Lp.b,
                write: Lp.k,
                download: Dp.i,
                onFallback: console.error
              })
            } catch (gU) {
              return void(UU => {
                console.error(UU), Nt.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: lp(UU),
                  confirmText: "OK"
                })
              })(gU)
            }
            "written" !== RU && "downloaded" !== RU || (() => {
              const UU = Nt.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                UU.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          QR = (0, tU.useCallback)((UU => {
            jU.gameBridge.send("replayAction", UU)
          }), []),
          eR = (0, tU.useCallback)((UU => {
            xU((RU => cE(RU, UU)))
          }), []),
          WR = (0, tU.useCallback)((UU => {
            if (!jU.gameBridge.latest("replayVideoExporting")) switch (UU) {
              case "replayLoad":
                CR();
                break;
              case "replaySave":
                hR(!1);
                break;
              case "replaySaveAs":
                hR(!0);
                break;
              case "replayTimelineZoomIn":
                eR("in");
                break;
              case "replayTimelineZoomOut":
                eR("out")
            }
          }), [CR, hR, eR]);
        (0, JU.d)("replayUiActionRequested", WR);
        const fR = (0, tU.useCallback)((UU => {
            jU.gameBridge.send("setReplayCameraMode", UU)
          }), []),
          xR = BU ? bg.e : bg.j,
          mR = DU && !LU ? bg.j : bg.e,
          IR = DU && LU ? bg.j : bg.e;
        return (0, KU.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, KU.jsx)(rE, {
            enabled: lU
          }), OU && (0, KU.jsx)(yE, {}), (0, KU.jsx)("input", {
            ref: QU,
            type: "file",
            accept: Dp.e,
            className: "ReplayViewerFileInput",
            onChange: uR
          }), (0, KU.jsxs)("div", {
            className: EU()("ReplayViewerBar", {
              Collapsed: bU
            }),
            children: [(0, KU.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                bU ? oU(!1) : BU ? oU(!0) : (0, MU.c)()
              },
              "aria-expanded": !bU,
              "aria-label": bU ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, KU.jsx)(dU.c, {
                name: bU ? "angle-up" : "angle-down"
              })
            }), !bU && (0, KU.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [BU && rU > 0 && (0, KU.jsx)(VE, {
                maxTick: XU,
                displayTick: yU,
                bZ: sU,
                cameraKeyframes: iU,
                playbackMark: AU,
                onSeek: UR,
                onPause: RR,
                onScrubTickChange: TR,
                onMoveCameraKeyframe: gR,
                onUpdateCameraKeyframe: tR,
                onDeleteCameraKeyframe: pR,
                onUseCurrentCamera: PR,
                onMarkRange: qR,
                onCropRange: cR,
                onDeleteKeyframesInRange: ER,
                onClearMark: KR,
                zoomLevel: fU,
                onZoomLevelChange: xU
              }, XU), (0, KU.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, KU.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, KU.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [BU && (0, KU.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== zU && void 0 !== zU ? zU : "Unsaved recording", DU ? " *" : ""]
                    }), (0, KU.jsxs)(xR, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        WR("replayLoad")
                      },
                      children: [(0, KU.jsx)(nU.b, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, KU.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, KU.jsxs)(bg.e, {
                      className: "ReplayViewerActionButton",
                      onClick: MU.c,
                      children: [(0, KU.jsx)(nU.b, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, KU.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, KU.jsxs)(mR, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        WR("replaySave")
                      },
                      disabled: !BU,
                      children: [(0, KU.jsx)(nU.b, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, KU.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, KU.jsxs)(bg.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        jU.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !BU,
                      children: [(0, KU.jsx)(nU.b, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, KU.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, KU.jsxs)(IR, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        WR("replaySaveAs")
                      },
                      disabled: !BU,
                      children: [(0, KU.jsx)(nU.b, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, KU.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, KU.jsxs)(bg.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        jU.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !BU || 0 === rU || NU,
                      children: [(0, KU.jsx)(nU.b, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, KU.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, KU.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, KU.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, KU.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, KU.jsx)(nU.b, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, KU.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, KU.jsx)(vU.g, {
                        tooltipInner: (0, KU.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, KU.jsxs)(bg.M, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === FU,
                          onClick: () => {
                            fR("recording")
                          },
                          disabled: !BU,
                          children: ["Recorded ", (0, KU.jsx)(dU.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, KU.jsx)(vU.g, {
                        tooltipInner: (0, KU.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, KU.jsxs)(bg.M, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === FU,
                          onClick: () => {
                            fR("freecam")
                          },
                          disabled: !BU,
                          children: ["Free ", (0, KU.jsx)(dU.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, KU.jsx)(vU.g, {
                        tooltipInner: (0, KU.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, KU.jsxs)(bg.M, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === FU,
                          onClick: () => {
                            fR("keyframe")
                          },
                          disabled: !BU,
                          children: ["Preview ", (0, KU.jsx)(dU.c, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, KU.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, KU.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, KU.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, KU.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: qE(yU, sU)
                      }), (0, KU.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, KU.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: qE(XU, sU)
                      })]
                    }), (0, KU.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", yU, " / ", XU]
                    })]
                  }), (0, KU.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, KU.jsxs)(bg.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        QR("replaySkipBack")
                      },
                      disabled: !BU,
                      children: [(0, KU.jsxs)("span", {
                        children: [" ", (0, KU.jsx)(dU.c, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, KU.jsx)(nU.b, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, KU.jsxs)(bg.j, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        jU.gameBridge.send("setReplayPlaying", !HU)
                      },
                      disabled: !BU,
                      children: [(0, KU.jsxs)("span", {
                        children: [" ", HU ? (0, KU.jsx)(dU.c, {
                          name: "pause"
                        }) : (0, KU.jsx)(dU.c, {
                          name: "play"
                        }), " "]
                      }), (0, KU.jsx)(nU.b, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, KU.jsxs)(bg.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        QR("replaySkipForward")
                      },
                      disabled: !BU,
                      children: [(0, KU.jsxs)("span", {
                        children: [" ", (0, KU.jsx)(dU.c, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, KU.jsx)(nU.b, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, KU.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, KU.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, KU.jsxs)(bg.j, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        QR("replayRecordKeyframe")
                      },
                      disabled: !BU,
                      children: [(0, KU.jsx)(nU.b, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, KU.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, KU.jsx)(HE, {
                      disabled: !BU
                    }), AU && (0, KU.jsx)(bg.M, {
                      className: "ReplayViewerActionButton",
                      onClick: KR,
                      disabled: !BU,
                      children: (0, KU.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, KU.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, KU.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, KU.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, KU.jsx)(bg.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          QR("replaySpeedDown")
                        },
                        disabled: !BU || (0, Mp.h)(SU),
                        children: (0, KU.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, KU.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [SU, "\xd7"]
                      }), (0, KU.jsx)(bg.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          QR("replaySpeedUp")
                        },
                        disabled: !BU || (0, Mp.e)(SU),
                        children: (0, KU.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, KU.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, KU.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, KU.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, KU.jsxs)(bg.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          WR("replayTimelineZoomOut")
                        },
                        disabled: !BU || fU <= pE[0],
                        children: [(0, KU.jsx)("span", {
                          children: " \u2212 "
                        }), (0, KU.jsx)(nU.b, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, KU.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: KE(fU)
                      }), (0, KU.jsxs)(bg.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          WR("replayTimelineZoomIn")
                        },
                        disabled: !BU || fU >= pE[pE.length - 1],
                        children: [(0, KU.jsx)("span", {
                          children: " + "
                        }), (0, KU.jsx)(nU.b, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, KU.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !BU && "Load a recording to begin playback"
              }), eU && (0, KU.jsx)("div", {
                className: "ReplayViewerError",
                children: eU
              })]
            })]
          })]
        })
      }));
    var AE = gU(1316);

    function zE() {
      const [, UU] = (0, tU.useState)(0);
      return (0, TU.e)("replayViewer|uiVisibilityChanged", (() => {
          UU((UU => UU + 1))
        })), (0, TU.e)("replayViewer|replayLoaded", (() => {
          UU((UU => UU + 1))
        })),
        function() {
          if (!(0, AE.h)()) return {};
          const UU = {
              [XE.e]: "true"
            },
            RU = (0, vE.c)();
          for (const {
              group: gU,
              dataAttr: tU
            }
            of XE.h) tU && !RU[gU] && (UU[tU] = "true");
          return UU
        }()
    }
    var ME = gU(8978),
      DE = gU(1914),
      LE = gU(8368),
      NE = gU(8355),
      lE = gU(1929);
    const OE = (0, tU.memo)((function() {
      var UU, RU, gU;
      const pU = (0, fU.g)("customButtons");
      (0, tU.useEffect)((() => pU ? (jU.gameBridge.send("bindCustomButtonKeys", pU.filter(LE.d).map((UU => {
        let {
          id: RU,
          keycode: gU
        } = UU;
        return {
          id: RU,
          keycode: gU
        }
      }))), () => {
        jU.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [pU]);
      const EU = null !== (UU = null === pU || void 0 === pU ? void 0 : pU.filter(LE.d)) && void 0 !== UU ? UU : [],
        PU = (0, NE.h)(),
        TU = null !== (RU = null === (gU = (0, lE.d)()) || void 0 === gU ? void 0 : gU.hideButtonHints) && void 0 !== RU && RU,
        qU = "customButton" !== (null === PU || void 0 === PU ? void 0 : PU.kind) || TU ? null : PU.id,
        cU = EU.length > 0,
        GU = (0, tU.useRef)(null);
      return (0, tU.useLayoutEffect)((() => {
        if (!cU) return () => {};
        const UU = GU.current,
          RU = UU.closest(".InGameUi"),
          gU = () => {
            RU.style.setProperty("--custom-buttons-top", `${UU.offsetTop}px`)
          };
        gU();
        const tU = new ResizeObserver(gU);
        return tU.observe(UU), tU.observe(UU.parentElement), () => {
          tU.disconnect(), RU.style.removeProperty("--custom-buttons-top")
        }
      }), [cU]), (0, KU.jsx)("div", {
        ref: GU,
        className: "" + ((0, hp.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: EU.map((UU => {
          var RU, gU;
          return (0, KU.jsx)(UP, {
            button: UU,
            padGlyph: UU.id === qU && null !== (RU = null === (gU = (0, yU.g)()) || void 0 === gU ? void 0 : gU.getBoundButton("actionButton")) && void 0 !== RU ? RU : null
          }, UU.id)
        }))
      })
    }));

    function UP(UU) {
      let {
        button: RU,
        padGlyph: gU
      } = UU;
      const pU = (0, tU.useRef)(null),
        EU = () => {
          null !== pU.current && (pU.current = null, jU.gameBridge.send("pressCustomButton", {
            id: RU.id,
            down: !1
          }))
        };
      (0, tU.useEffect)((() => EU), []);
      const PU = iR(EU, {
          pressesOnPointerDown: !0
        }),
        TU = UU => {
          pU.current === UU.pointerId && EU()
        };
      return (0, KU.jsxs)("div", {
        className: "CustomIcon",
        ...PU,
        onLostPointerCapture: TU,
        children: [(0, KU.jsx)(DE.c, {
          icon: RU.icon,
          keyboardHint: (0, LE.b)(RU.keycode),
          padGlyph: gU,
          onPointerDown: UU => {
            try {
              UU.currentTarget.setPointerCapture(UU.pointerId)
            } catch {
              return
            }
            null === pU.current && jU.gameBridge.send("pressCustomButton", {
              id: RU.id,
              down: !0
            }), pU.current = UU.pointerId
          },
          onPointerUp: TU,
          onPointerCancel: TU,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), RU.description && (0, KU.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: RU.description
        })]
      })
    }
    var RP = gU(2251),
      gP = gU(249);
    const tP = {
      frame: UU => {
        const RU = requestAnimationFrame((() => {
          UU()
        }));
        return () => {
          cancelAnimationFrame(RU)
        }
      },
      afterFrame: UU => {
        const RU = setTimeout(UU, 0);
        return () => {
          clearTimeout(RU)
        }
      }
    };
    class pP {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gP.e,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tP;
        this.idle = UU, this.frames = RU, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (UU(), () => {}) : (RU ? this.waiting.unshift(UU) : this.waiting.push(UU), this.schedule(), () => {
          const RU = this.waiting.indexOf(UU);
          RU >= 0 && (this.waiting.splice(RU, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((UU => {
          for (this.cancelIdle = null; this.waiting.length > 0 && UU.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const UU = this.waiting.shift();
        try {
          UU()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var UU, RU, gU;
        null === (UU = this.cancelIdle) || void 0 === UU || UU.call(this), this.cancelIdle = null, null === (RU = this.cancelFrame) || void 0 === RU || RU.call(this), this.cancelFrame = null, null === (gU = this.cancelAfterFrame) || void 0 === gU || gU.call(this), this.cancelAfterFrame = null
      }
    }
    const EP = (0, tU.createContext)(null);

    function PP(UU) {
      let {
        children: RU,
        first: gU = !1
      } = UU;
      const pU = (0, tU.useContext)(EP),
        [EU, PU] = (0, tU.useState)(null === pU);
      return (0, tU.useEffect)((() => {
        if (!EU && null !== pU) return pU.request((() => {
          PU(!0)
        }), gU)
      }), [gU, EU, pU]), EU ? (0, tU.createElement)(tU.Fragment, null, RU) : null
    }
    const TP = (0, tU.memo)((function(UU) {
        let {
          shown: RU
        } = UU;
        const [gU] = (0, tU.useState)((() => new CU.e(RU))), [pU] = (0, tU.useState)((() => RU ? null : new pP));
        return (0, tU.useLayoutEffect)((() => {
          RU && (null === pU || void 0 === pU || pU.show(), gU.show())
        }), [RU, gU, pU]), (0, KU.jsx)(CU.c.Provider, {
          value: gU,
          children: (0, KU.jsx)(EP.Provider, {
            value: pU,
            children: (0, KU.jsx)(qP, {})
          })
        })
      })),
      qP = (0, tU.memo)((function() {
        const {
          isUiHidden: UU,
          isUiHiddenByCamera: RU,
          worldPanelHud: gU,
          isTouchScreen: pU
        } = (0, wU.l)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), PU = (0, Dt.c)(), TU = zE(), qU = (0, CU.j)(), cU = (0, tU.useRef)(null), GU = (0, fU.g)("showKillfeed");
        return function() {
            const UU = (0, CU.j)();
            (0, tU.useEffect)((() => UU.whenShown(hU)), [UU])
          }(),
          function() {
            const UU = (0, fU.g)("inventoryColourOverride");
            (0, tU.useEffect)((() => {
              if (!UU) return;
              const {
                panel: RU,
                slot: gU,
                slotSelected: tU,
                slotUnavailable: pU
              } = FU(UU), EU = document.documentElement.style;
              return EU.setProperty("--InventoryPanelColour", RU), EU.setProperty("--InventorySlotColour", gU), EU.setProperty("--InventorySlotSelectedColour", tU), EU.setProperty("--InventorySlotUnavailableColour", pU), () => {
                EU.removeProperty("--InventoryPanelColour"), EU.removeProperty("--InventorySlotColour"), EU.removeProperty("--InventorySlotSelectedColour"), EU.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [UU])
          }(), (0, tU.useLayoutEffect)((() => qU.whenShown((() => {
            var UU;
            null === (UU = cU.current) || void 0 === UU || UU.classList.remove("PreMounted")
          }))), [qU]), (0, KU.jsxs)(KU.Fragment, {
            children: [(0, KU.jsxs)("div", {
              ref: cU,
              className: EU()("InGameUi", {
                PreMounted: !qU.shown,
                Hidden: UU,
                HiddenByCamera: RU,
                HiddenByWorldPanel: null !== gU,
                WorldPanelTouchControl: "touchControls" === gU
              }),
              ...TU,
              children: [(0, KU.jsxs)(PP, {
                children: [(0, KU.jsx)(kg.c, {}), (0, KU.jsx)(Mg, {})]
              }), (0, KU.jsx)(CU.h, {
                children: (0, KU.jsx)(Dg, {})
              }), (0, KU.jsxs)(PP, {
                children: [(0, KU.jsx)(Jp, {}), (0, KU.jsx)(Yp, {}), pU && (0, KU.jsx)(Vp, {})]
              }), (0, KU.jsxs)(PP, {
                children: [(0, KU.jsx)(eg, {}), (0, KU.jsx)(qt.d, {}), (0, KU.jsx)(ht, {})]
              }), (0, KU.jsx)(CU.h, {
                children: (0, KU.jsx)(yg, {})
              }), (0, KU.jsxs)(PP, {
                children: [(0, KU.jsx)(op.d, {}), (0, KU.jsx)(FE, {})]
              }), (0, KU.jsxs)(PP, {
                children: [(0, KU.jsx)(Xp.e, {}), (0, KU.jsx)(vp.e, {})]
              }), (0, KU.jsx)(PP, {
                children: (0, KU.jsx)(fg.l, {})
              }), (0, KU.jsx)(PP, {
                children: (0, KU.jsx)(hP, {
                  showChat: PU
                })
              }), (0, KU.jsxs)(PP, {
                children: [(0, KU.jsx)(Hp, {}), (0, KU.jsx)(bp, {})]
              }), (0, KU.jsxs)("div", {
                className: EU()("RightElements", {
                  RightElementsTouchscreen: pU
                }),
                "data-camera-keeper-host": "",
                children: [(0, KU.jsxs)("div", {
                  className: It.i,
                  "data-holds-camera-keeper": "",
                  children: [(0, KU.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, KU.jsx)(PP, {
                      children: (0, KU.jsx)(cp.e, {})
                    }), (0, KU.jsxs)(PP, {
                      children: [(0, KU.jsx)(HU, {}), (0, KU.jsx)(ot.c, {})]
                    }), hp.featureFlags.useSocialFeatures && (0, KU.jsx)(CU.h, {
                      children: (0, KU.jsx)(Zt.e, {
                        placement: "inGame"
                      })
                    }), hp.featureFlags.useSocialFeatures && (0, KU.jsx)(CU.h, {
                      children: (0, KU.jsx)(Ft, {})
                    }), GU && (0, KU.jsx)(CU.h, {
                      children: (0, KU.jsx)(Tt, {})
                    }), (0, KU.jsx)(PP, {
                      children: (0, KU.jsx)(ME.c, {})
                    })]
                  }), hp.featureFlags.useSocialFeatures && (0, KU.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, KU.jsx)(PP, {
                      children: (0, KU.jsx)(mp.e, {})
                    })
                  })]
                }), (0, KU.jsxs)(PP, {
                  children: [(0, KU.jsx)(fg.c, {
                    placement: "topRight"
                  }), (0, KU.jsx)(QP, {})]
                })]
              }), (0, KU.jsx)("div", {
                className: "LeftCentre",
                children: (0, KU.jsx)(PP, {
                  children: (0, KU.jsx)(OE, {})
                })
              }), (0, KU.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": pU ? "" : void 0,
                children: [(0, KU.jsx)(CU.h, {
                  children: (0, KU.jsx)(YU, {})
                }), (0, KU.jsx)(PP, {
                  children: (0, KU.jsx)(cP, {})
                }), (0, KU.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": pU ? "" : void 0,
                  children: [(0, KU.jsx)("div", {
                    className: EU()("BottomLeftElements", {
                      Touch: pU
                    }),
                    children: (0, KU.jsxs)(PP, {
                      children: [(0, KU.jsx)(zt, {}), !pU && (0, KU.jsx)(RP.c, {})]
                    })
                  }), (0, KU.jsx)(PP, {
                    children: (0, KU.jsx)(CP, {})
                  }), (0, KU.jsx)(PP, {
                    children: (0, KU.jsx)(et, {
                      isTouchScreen: pU
                    })
                  })]
                })]
              }), (0, KU.jsx)("div", {
                className: "MiddleLeft"
              }), pU && (0, KU.jsx)(PP, {
                children: (0, KU.jsx)(OR, {})
              }), (0, KU.jsx)("div", {
                className: "CameraFadeHost",
                ref: fR.l
              })]
            }), (0, KU.jsx)(CU.h, {
              children: (0, KU.jsx)(Ap.e, {})
            }), (0, KU.jsx)(PP, {
              first: !0,
              children: (0, KU.jsx)(Mt.b, {})
            }), (0, KU.jsx)(CU.h, {
              children: (0, KU.jsx)(KP, {})
            })]
          })
      }));

    function KP() {
      return (0, tU.useEffect)((() => {
        const UU = setTimeout((() => {
          (0, xU.l)()
        }), 0);
        return () => {
          clearTimeout(UU), xU.p.jW(!1)
        }
      }), []), null
    }
    const cP = (0, tU.memo)((function() {
        const UU = (0, TU.h)("aimingOverlay", "none");
        (0, eU.d)();
        const RU = (0, fU.h)("middleTextUpper"),
          gU = (0, fU.h)("middleTextLower");
        return (0, KU.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === UU ? {
            visibility: "hidden"
          } : {},
          children: [(0, KU.jsx)(uP, {
            text: RU,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: GP
          }), (0, KU.jsx)(uP, {
            text: gU,
            className: "MiddleText",
            maxHeightFraction: jP
          })]
        })
      })),
      GP = .3,
      jP = .2;

    function uP(UU) {
      let {
        text: RU,
        className: gU,
        maxHeightFraction: pU
      } = UU;
      const EU = (0, tU.useRef)(null),
        PU = (0, tU.useRef)(null);
      return function(UU, RU, gU, pU) {
        (0, tU.useLayoutEffect)((() => {
          const tU = UU.current,
            pU = RU.current;
          if (!tU || !pU) return;
          let EU = -1,
            PU = -1;
          const TU = UU => (pU.style.setProperty("zoom", String(UU)), tU.getBoundingClientRect().height),
            qU = () => {
              const UU = document.documentElement.clientHeight * gU;
              let RU = 1;
              if (TU(1) > UU) {
                let gU = .5,
                  tU = 1;
                for (let RU = 0; RU < 6; RU++) {
                  const RU = (gU + tU) / 2;
                  TU(RU) <= UU ? gU = RU : tU = RU
                }
                RU = gU
              }
              PU = TU(RU), EU = tU.getBoundingClientRect().width
            };
          qU();
          let KU = 0;
          const cU = () => {
              cancelAnimationFrame(KU), KU = requestAnimationFrame(qU)
            },
            GU = new ResizeObserver((() => {
              const {
                width: UU,
                height: RU
              } = tU.getBoundingClientRect();
              UU === EU && RU === PU || cU()
            }));
          return GU.observe(tU), window.addEventListener("resize", cU), () => {
            GU.disconnect(), window.removeEventListener("resize", cU), cancelAnimationFrame(KU), pU.style.removeProperty("zoom")
          }
        }), [UU, RU, gU, pU])
      }(EU, PU, pU, RU.content), (0, KU.jsx)("div", {
        ref: EU,
        className: "MiddleTextFit",
        children: (0, KU.jsx)(dp, {
          ref: PU,
          text: RU,
          className: gU
        })
      })
    }
    const CP = (0, tU.memo)((function() {
        const UU = (0, TU.h)("aimingOverlay", "none");
        (0, eU.d)();
        const RU = (0, fU.g)("useInventory");
        return (0, KU.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === UU ? {
            visibility: "hidden"
          } : {},
          children: [(0, KU.jsx)(cU, {}), (0, KU.jsx)(fg.c, {}), (0, KU.jsx)(xg, {}), (0, KU.jsx)(CU.h, {
            children: (0, KU.jsx)(fp, {})
          }), (0, KU.jsxs)("div", {
            className: "HotBarRow",
            children: [RU ? (0, KU.jsx)(sU.b, {}) : (0, KU.jsx)(sU.c, {}), (0, KU.jsx)(kU, {})]
          })]
        })
      })),
      hP = (0, tU.memo)((function(UU) {
        let {
          showChat: RU
        } = UU;
        const {
          t: gU
        } = (0, aU.B)(), {
          clientEscMenuOptions: pU,
          isTouchScreen: PU
        } = (0, wU.l)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, eU.d)();
        const {
          userContext: TU,
          isUserContextUpdating: qU
        } = (0, QU.e)(), cU = (0, fU.g)("hideCoordinates"), jU = (0, fU.g)("customVariationTitle"), {
          requestedGameNameWithVariation: uU,
          gameNameWithVariation: CU,
          lobbyName: hU,
          shownLobbyName: xU
        } = (0, JU.k)("connectedGame"), mU = (0, GU.d)(uU, hU, !1), [IU, nU] = (0, tU.useState)(null), bU = (0, jp.p)(CU || uU || ""), oU = jU || bU || "";
        (0, tU.useEffect)((() => {
          qU || Bt.c.getFavouriteLobbies(TU).then((UU => {
            console.log("Got favourite lobbies", UU), nU(UU)
          }))
        }), [qU, TU]);
        const ZU = (0, tU.useRef)(null);
        return (0, tU.useLayoutEffect)((() => {
          const UU = ZU.current,
            RU = document.documentElement,
            gU = new ResizeObserver((() => {
              RU.style.setProperty("--InGameHeaderRowsHeight", `${UU.offsetHeight}px`)
            }));
          return gU.observe(UU), () => {
            gU.disconnect(), RU.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), bt(ZU), (0, KU.jsxs)(KU.Fragment, {
          children: [(0, KU.jsxs)("div", {
            className: EU()(It.f, {
              Touchscreen: PU
            }),
            ref: ZU,
            children: [(0, KU.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, KU.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: UU => {
                  UU.stopPropagation(), UU.preventDefault()
                },
                onClick: () => {
                  wU.b.set({
                    openEverythingMenuName: WU.n.SETTINGS
                  })
                },
                children: [(0, KU.jsx)(Gp.d, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, KU.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, KU.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === mU && (0, KU.jsx)(Gp.d, {}), null !== mU && (0, KU.jsxs)(KU.Fragment, {
                  children: [mU, oU && ` ${oU}`]
                })]
              }), (0, KU.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, KU.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: xU
              }), (0, Cp.I)(hU) && (0, KU.jsx)(vU.g, {
                tooltipInner: (0, KU.jsx)("div", {
                  children: gU(null !== IU && IU.includes(hU) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, KU.jsx)("div", {
                  children: (0, KU.jsx)(bg.s, {
                    isLiked: null !== IU && IU.includes(hU),
                    onClick: () => {
                      try {
                        if (!IU) return;
                        IU.includes(hU) ? (Bt.c.unfavouriteLobby(TU, hU).catch((UU => {
                          console.error("Failed to favourite lobby", UU)
                        })), nU(IU.filter((UU => UU !== hU)))) : (Bt.c.favouriteLobby(TU, hU).catch((UU => {
                          console.error("Failed to favourite lobby", UU)
                        })), nU([...IU, hU]))
                      } catch (UU) {
                        console.error("Failed to like lobby", UU)
                      }
                    },
                    isLoading: null === IU
                  })
                })
              }), (0, KU.jsx)(kp, {})]
            }), (0, KU.jsx)(Ep, {
              show: pU.showFPS
            }), !cU && pU.showCoordinates && (0, KU.jsx)(qp, {}), !cU && pU.showChunkCoordinates && (0, KU.jsx)(Kp, {}), (0, KU.jsx)(Sp, {})]
          }), (0, KU.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, KU.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: RU && (0, KU.jsx)(zU.c, {})
            })
          })]
        })
      })),
      QP = (0, tU.memo)((function() {
        (0, eU.d)();
        const UU = (0, fU.h)("RightInfoText"),
          [RU, gU] = (0, tU.useState)(null);
        return (0, CR.g)(RU, ".RightElements"), UU.hasText ? (0, KU.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, KU.jsx)(dp, {
            ref: gU,
            text: UU,
            className: "RightInfoDiv",
            children: (0, KU.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, KU.jsx)(qU.e, {
                text: UU.content
              })
            })
          })
        }) : null
      }))
  },
  4495: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU
    });
    var tU = gU(56),
      pU = gU(299),
      EU = gU(1790),
      PU = gU(1090);

    function TU(UU) {
      let {
        text: RU
      } = UU;
      const gU = [];
      let TU = "";
      return (0, pU.dc)(RU).forEach(((UU, RU) => {
        if ("string" === typeof UU || !(0, EU.f)(UU.icon)) return void(TU += "string" === typeof UU ? UU : UU.icon);
        const pU = Math.max(0, TU.trimEnd().search(/\S{1,12}$/));
        gU.push((0, PU.jsxs)(tU.Fragment, {
          children: [TU.slice(0, pU), (0, PU.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [TU.slice(pU), (0, PU.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": UU.icon,
              children: (0, PU.jsx)(EU.c, {
                itemName: UU.icon,
                amount: 0
              })
            })]
          })]
        }, RU)), TU = ""
      })), gU.push(TU), (0, PU.jsx)(PU.Fragment, {
        children: gU
      })
    }
  },
  36116: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => jU,
      f: () => cU,
      h: () => GU
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(1790),
      TU = gU(1090);
    const qU = 350;
    let KU = 0;

    function cU() {
      return KU += 1, KU
    }

    function GU(UU, RU) {
      let gU = 0;
      for (const tU of UU) "ingredient" !== tU.kind && tU.dc === RU && (gU += tU.amount);
      return gU > 0 ? {
        idx: RU,
        amount: gU
      } : null
    }

    function jU(UU) {
      var RU, gU;
      let {
        anim: pU,
        onComplete: KU
      } = UU;
      const cU = null !== (RU = pU.delayMs) && void 0 !== RU ? RU : 0,
        GU = null !== (gU = pU.durationMs) && void 0 !== gU ? gU : qU,
        [jU, uU] = (0, tU.useState)(pU.from),
        [CU, hU] = (0, tU.useState)(0 === cU),
        [QU, eU] = (0, tU.useState)(!1),
        WU = (0, tU.useRef)(!1);
      return (0, tU.useEffect)((() => {
        let UU, RU;
        const gU = () => {
            WU.current = !0, hU(!0), UU = requestAnimationFrame((() => {
              RU = requestAnimationFrame((() => {
                uU({
                  x: pU.to.x,
                  y: pU.to.y
                }), eU(!0)
              }))
            }))
          },
          tU = WU.current ? 0 : cU;
        let EU;
        tU > 0 ? EU = setTimeout(gU, tU) : gU();
        const PU = setTimeout((() => {
          KU(pU.id)
        }), tU + GU + 50);
        return () => {
          clearTimeout(EU), cancelAnimationFrame(UU), cancelAnimationFrame(RU), clearTimeout(PU)
        }
      }), [pU.id, pU.to.x, pU.to.y, KU, cU, GU]), (0, TU.jsx)("div", {
        className: EU()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === pU.kind,
          Waiting: !CU,
          Arrived: QU
        }),
        style: {
          left: jU.x,
          top: jU.y,
          "--fly-duration": `${GU}ms`
        },
        children: (0, TU.jsx)(PU.c, {
          itemName: pU.itemName,
          amount: pU.amount
        })
      })
    }
  },
  36092: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => XU,
      c: () => HU
    });
    var tU = gU(56),
      pU = gU(2691),
      EU = gU(6239),
      PU = gU(1914),
      TU = gU(2254),
      qU = gU(8461),
      KU = gU(311),
      cU = gU(24),
      GU = gU(1410),
      jU = gU(34),
      uU = gU(1037),
      CU = gU.n(uU),
      hU = gU(299),
      QU = gU(36101),
      eU = gU(1777),
      WU = gU(1834),
      fU = gU(8319),
      xU = gU(1090);

    function mU(UU) {
      var RU, gU;
      let {
        slotIdx: EU
      } = UU;
      const PU = (0, WU.h)("hotbar", (UU => {
          var RU;
          return null !== (RU = UU.items[EU]) && void 0 !== RU ? RU : null
        })),
        qU = (0, WU.h)("hotbar", (UU => UU.ammo)),
        [cU, GU] = (0, tU.useState)(!1),
        jU = (0, tU.useRef)(null),
        [uU, hU] = (0, tU.useState)(null),
        [QU, mU] = (0, tU.useState)(null),
        IU = (0, TU.g)("maxAuraLevel"),
        JU = (0, pU.b)(),
        wU = (0, tU.useCallback)((() => {
          if (clearTimeout(jU.current), PU) {
            var UU, RU, gU, tU;
            const qU = PU.displayName,
              cU = [],
              GU = Array.isArray(qU) ? qU : [qU],
              jU = {
                fontStyle: null !== (UU = PU.attributes.customAttributes) && void 0 !== UU && UU.author ? "italic" : "normal"
              };
            for (const UU of GU) UU.str ? cU.push(UU) : cU.push({
              str: UU,
              style: jU
            });
            if (null !== (RU = PU.attributes.customAttributes) && void 0 !== RU && RU.enchantments) {
              cU.push(" ");
              const UU = Object.entries(PU.attributes.customAttributes.enchantments).sort(((UU, RU) => RU[1] - UU[1])),
                RU = PU.attributes.customAttributes.enchantmentData;
              for (const [gU, tU] of UU) {
                var pU, EU;
                const UU = null !== (pU = null === RU || void 0 === RU || null === (EU = RU[gU]) || void 0 === EU ? void 0 : EU.icon) && void 0 !== pU ? pU : `${gU} Enchantment`;
                var TU;
                if (tU < 4)
                  for (let RU = 0; RU < tU; RU++) cU.push({
                    icon: UU,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else cU.push({
                  icon: UU,
                  style: {
                    fontSize: "1.5em"
                  }
                }), cU.push(null !== (TU = (0, KU.V)(tU)) && void 0 !== TU ? TU : tU.toString())
              }
            }
            hU(cU), mU(null !== (gU = null === (tU = PU.attributes.customAttributes) || void 0 === tU ? void 0 : tU.enchantmentTier) && void 0 !== gU ? gU : null)
          } else hU(null), mU(null);
          GU(!0), JU();
          const qU = null === PU || void 0 === PU ? void 0 : PU.attributes.customAttributes;
          void 0 === (null === qU || void 0 === qU ? void 0 : qU.shotsLeft) && (jU.current = setTimeout((() => {
            GU(!1)
          }), 2e3))
        }), [null === PU || void 0 === PU ? void 0 : PU.name, EU, null === PU || void 0 === PU ? void 0 : PU.instance, null === PU || void 0 === PU ? void 0 : PU.displayName]);
      (0, tU.useEffect)((() => (wU(), () => {
        clearTimeout(jU.current), GU(!1)
      })), [null === PU || void 0 === PU ? void 0 : PU.name, EU, null === PU || void 0 === PU ? void 0 : PU.instance, wU]);
      const nU = null === PU || void 0 === PU || null === (RU = PU.attributes.customAttributes) || void 0 === RU ? void 0 : RU.shotsLeft,
        bU = void 0 === nU ? null : (0, xU.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${nU}|${PU.requiresAmmo?`${qU}x${PU.clipSize}`:PU.clipSize}`
        }),
        oU = (0, fU.h)();
      return (0, xU.jsx)(xU.Fragment, {
        children: cU && PU && !oU.showing ? (0, xU.jsxs)("div", {
          className: CU()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === IU,
            Enchanted: null !== QU
          }),
          style: {
            "--enchantmentColour": null !== (gU = KU.sb[QU]) && void 0 !== gU ? gU : KU.sb.None,
            "--duration": QU ? (0, KU.nb)(QU) + "s" : void 0
          },
          children: [QU && (0, xU.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, xU.jsx)(eU.e, {
              text: uU
            }), bU]
          }), (0, xU.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, xU.jsx)(eU.e, {
              text: uU
            }), bU]
          })]
        }) : null
      })
    }
    var IU = gU(36116),
      JU = gU(21),
      wU = gU(1800),
      nU = gU(581),
      bU = gU(2263),
      oU = gU(3099),
      ZU = gU(3108);
    var aU = gU(1943),
      YU = gU(1099),
      BU = gU(2292);

    function VU() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var rU = gU(1432);
    const XU = (0, tU.memo)((function() {
      const [UU, RU] = (0, tU.useState)(0), gU = (0, TU.g)("useFullInventory"), PU = (0, TU.g)("highlightedHotbarSlots"), {
        isTouchScreen: qU,
        openInGameMenuName: KU
      } = (0, JU.l)(["isTouchScreen", "openInGameMenuName"]), jU = null !== KU && "inventory" !== KU, uU = (0, WU.k)("fullInventory") && "inventory" === KU, hU = function() {
        const UU = (0, aU.e)(((UU, RU) => `${UU}:${(0,YU.c)(UU,RU)?"portrait":"landscape"}`)),
          [RU, gU] = (0, tU.useState)(VU);
        return (0, tU.useLayoutEffect)((() => {
          gU(VU())
        }), [UU]), (0, GU.e)(BU.f, (() => {
          gU(VU())
        })), RU
      }(), eU = qU && !hU;
      ! function(UU, RU, gU) {
        (0, tU.useLayoutEffect)((() => {
          const tU = document.documentElement.classList;
          return UU && (tU.add("TouchHotbar"), tU.toggle("TouchHotbarKeysAbove", RU), tU.toggle("TouchHotbarHasBag", gU)), (0, oU.g)(), cU.p.yh(ZU.b), () => {
            tU.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, oU.g)(), cU.p.yh(ZU.b)
          }
        }), [UU, RU, gU])
      }(qU, eU, gU);
      const [fU, bU] = (0, EU.b)("changedHotbarUsingNumkeys", !0), rU = (0, WU.h)("hotbar", (UU => UU.selectedSlot)), XU = null !== rU && void 0 !== rU ? rU : UU, SU = (0, pU.b)(), sU = (0, tU.useRef)(null), kU = (0, GU.h)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, GU.e)("inventoryDraggedItemUpdated", (UU => {
        sU.current = UU, SU()
      })), (0, WU.d)("hotbarScrolled", (UU => {
        null === rU && iU(UU)
      })), (0, WU.d)("hotbarSlotRequested", (UU => {
        FU(UU), bU(!1)
      })), (0, WU.d)("numberKeyPressed", (() => {
        bU(!1)
      })), (0, WU.d)("hotbarDropRequested", (UU => {
        const RU = wU.gameBridge.latest("hotbar").items[XU];
        if (RU) {
          var gU;
          const tU = UU && null !== (gU = RU.amount) && void 0 !== gU ? gU : 1;
          wU.gameBridge.send("removeInventoryItem", {
            slot: XU,
            amount: tU,
            drop: !0
          })
        }
      }));
      const FU = UU => {
          wU.gameBridge.send("selectHotbarSlot", UU), RU(UU)
        },
        iU = UU => {
          FU((XU + UU + nU.m) % nU.m)
        };
      let AU, zU = null,
        MU = null,
        DU = UU => UU => {},
        LU = UU => RU => {
          FU(UU)
        },
        NU = UU => UU => {},
        lU = [];
      if (uU) {
        var OU;
        const UU = sU.current;
        if (null === UU || void 0 === UU || !UU.setHovered) return (0, xU.jsx)("div", {
          className: CU()("HotBarContainer", {
            Touch: qU,
            KeysAbove: eU
          }),
          children: (0, xU.jsx)("div", {
            className: "HotBar"
          })
        });
        zU = UU.draggedInfo, MU = UU.specialItemInfo, DU = UU.setHovered, LU = UU.pointerDown, NU = UU.pointerUp, AU = UU.variation, lU = null !== (OU = UU.craftFlyAnims) && void 0 !== OU ? OU : []
      }
      return (0, xU.jsxs)("div", {
        className: CU()("HotBarContainer", {
          Touch: qU,
          PopupOpen: qU && jU,
          KeysAbove: eU
        }),
        children: [(0, xU.jsxs)("div", {
          className: CU()("HotBar", {
            HoverDisabled: kU
          }),
          children: [qU && (0, xU.jsxs)(xU.Fragment, {
            children: [(0, xU.jsx)(dU, {
              useFullInventory: gU,
              inventoryOpen: uU
            }), (0, xU.jsx)(vU, {
              direction: "Previous",
              onPress: () => {
                iU(-1)
              }
            })]
          }), !qU && (0, xU.jsxs)(xU.Fragment, {
            children: [(0, xU.jsx)(HU, {}), (0, xU.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, xU.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((UU, RU) => (0, xU.jsx)(QU.d, {
              idx: RU,
              draggedInfo: zU,
              specialItemInfo: MU,
              craftFlyHoldbackInfo: (0, IU.h)(lU, RU),
              setHovered: DU(RU),
              pointerDown: LU(RU),
              pointerUp: NU(RU),
              variation: AU,
              isSelected: RU === XU,
              hotbarHighlighted: !0 === (null === PU || void 0 === PU ? void 0 : PU.includes(RU)),
              hoverDisabled: kU,
              showNumber: fU && !qU
            }, RU)))
          }), qU && (0, xU.jsx)(vU, {
            direction: "Next",
            onPress: () => {
              iU(1)
            }
          }), !qU && (0, xU.jsxs)(xU.Fragment, {
            children: [(0, xU.jsx)("div", {
              className: "HotBarFiller"
            }), (0, xU.jsx)("div", {
              className: CU()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !gU
              }),
              onPointerDown: () => {
                cU.p.yh("toggleMenu", "inventory")
              },
              children: (0, xU.jsx)(yU, {})
            })]
          })]
        }), (0, xU.jsx)(mU, {
          slotIdx: XU
        })]
      })
    }));

    function vU(UU) {
      let {
        direction: RU,
        onPress: gU
      } = UU;
      return (0, xU.jsx)("div", {
        className: CU()("HotBarArrow", RU),
        ...rU.h,
        children: (0, xU.jsx)(PU.c, {
          icon: "Previous" === RU ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: gU
        })
      })
    }
    const dU = (0, tU.memo)((function(UU) {
        let {
          useFullInventory: RU,
          inventoryOpen: gU
        } = UU;
        const pU = (0, TU.g)("maxAuraLevel"),
          EU = (0, tU.useRef)(null);
        return function(UU, RU, gU) {
          (0, tU.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", RU), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [RU]), (0, tU.useLayoutEffect)((() => {
            const RU = UU.current.closest(".BottomMiddleElements");
            return RU.classList.toggle("TouchInventoryOpen", gU), () => {
              RU.classList.remove("TouchInventoryOpen")
            }
          }), [UU, gU])
        }(EU, (0, qU.e)(), gU), (0, xU.jsxs)("div", {
          ref: EU,
          className: CU()("TouchInventoryKeys", {
            NoAuraBar: 0 === pU,
            InventoryOpen: gU
          }),
          children: [(0, xU.jsx)(HU, {
            touchKey: !0
          }), (0, xU.jsx)("div", {
            className: CU()("TouchInventoryKey BagKey", {
              Hidden: !RU
            }),
            ...rU.h,
            children: (0, xU.jsx)(yU, {
              touchKey: !0
            })
          })]
        })
      })),
      HU = (0, tU.memo)((function(UU) {
        let {
          touchKey: RU = !1
        } = UU;
        const gU = (0, qU.e)();
        return (0, xU.jsx)("div", {
          className: RU ? CU()("TouchInventoryKey ShopKey", {
            Hidden: !gU
          }) : CU()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !gU
          }),
          ...RU ? rU.h : {},
          children: (0, xU.jsx)(PU.c, {
            icon: (0, KU.hc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              gU && JU.b.set({
                openEverythingMenuName: hU.n.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function SU(UU) {
      let {
        player: RU
      } = UU;
      return RU.some((UU => null !== UU && KU.Uc.includes(UU.name)))
    }

    function sU(UU) {
      UU.creative || jU.k.getItem("LogInInventoryRedDotTutorialComplete") || (SU(UU) ? (cU.p.yh("RedDotOpenInventoryIcon", !0), cU.p.yh("TouchTutorialOpenInventoryIcon", !0)) : (cU.p.yh("RedDotOpenInventoryIcon", !1), cU.p.yh("TouchTutorialOpenInventoryIcon", !1)))
    }
    const yU = (0, tU.memo)((function(UU) {
      let {
        touchKey: RU = !1
      } = UU;
      const {
        backpackPointerRequested: gU
      } = (0, JU.l)(["backpackPointerRequested"]);
      (0, tU.useEffect)((() => {
        sU(wU.gameBridge.latest("inventory"))
      }), []), (0, WU.d)("inventory", sU);
      const pU = (0, bU.j)();
      return (0, GU.e)("toggleMenu", (UU => {
        pU.shown && (null !== UU && void 0 !== UU && UU.startsWith("inventory") && SU(wU.gameBridge.latest("inventory")) ? (jU.k.setItem("LogInInventoryRedDotTutorialComplete", !0), cU.p.yh("RedDotOpenInventoryIcon", !1), cU.p.yh("TouchTutorialOpenInventoryIcon", !1)) : "shop" === UU && cU.p.yh("showShopTouchTutorial", !1))
      })), RU ? (0, xU.jsx)(PU.c, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          cU.p.yh("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: gU,
        touchIconPosition: "topleft"
      }) : (0, xU.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          cU.p.yh("toggleMenu", "inventory")
        },
        children: (0, xU.jsx)(PU.c, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: UU => {
            cU.p.yh("toggleMenu", "inventory"), UU.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: gU,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36101: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => QU,
      e: () => CU
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(1796),
      TU = gU(1790),
      qU = gU(1800),
      KU = gU(1834),
      cU = gU(36107),
      GU = gU(9001),
      jU = gU(1362),
      uU = gU(1090);
    const CU = (UU, RU, gU) => {
      let tU = RU,
        pU = !1;
      for (const EU of gU)(null === EU || void 0 === EU ? void 0 : EU.idx) === UU && (pU = !0, tU > 0 && (tU -= EU.amount));
      return {
        displayedAmt: tU,
        shown: !pU || tU > 0
      }
    };
    const hU = UU => {
        let {
          idx: RU
        } = UU;
        return (0, jU.o)() ? null : (0, uU.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: RU < 9 ? RU + 1 : 0
        })
      },
      QU = (0, tU.memo)((function(UU) {
        var RU, gU, tU;
        let {
          idx: pU,
          setHovered: jU,
          pointerDown: QU,
          pointerUp: eU,
          draggedInfo: WU,
          specialItemInfo: fU,
          craftFlyHoldbackInfo: xU,
          defaultIconB64: mU = null,
          variation: IU,
          isSelected: JU = !1,
          hotbarHighlighted: wU = !1,
          hoverDisabled: nU = !1,
          showNumber: bU = !1,
          showNewDot: oU = !1
        } = UU;
        const ZU = (0, KU.h)("inventory", (UU => pU === cU.d ? null : (0, GU.f)(UU, pU)));
        let aU, YU, BU, VU;
        if (pU === cU.d) fU && (aU = fU.name, BU = fU.amount, VU = fU.attributes);
        else if (ZU) {
          var rU;
          aU = ZU.name, YU = ZU.icon, BU = null !== (rU = ZU.amount) && void 0 !== rU ? rU : 0, VU = ZU.attributes
        }
        const XU = null === (RU = VU) || void 0 === RU || null === (gU = RU.customAttributes) || void 0 === gU ? void 0 : gU.enchantmentTier,
          vU = (0, PU.h)(VU),
          {
            displayedAmt: dU,
            shown: HU
          } = CU(pU, BU, [WU, fU, xU]),
          SU = aU && HU,
          sU = void 0 !== IU && function(UU, RU) {
            const {
              enchantable: gU,
              salvageable: tU
            } = qU.gameBridge.latest("stationItems");
            return "Enchanting Table" === UU ? !0 === gU[RU] : "Salvaging Table" === UU && !0 === tU[RU]
          }(IU, aU);
        return (0, uU.jsxs)("div", {
          className: EU()("InvenItem", {
            Highlighted: SU && sU,
            Selected: JU,
            HotbarHighlighted: wU,
            HoverDisabled: nU
          }),
          onPointerEnter: () => {
            null === jU || void 0 === jU || jU(!0)
          },
          onPointerLeave: () => {
            null === jU || void 0 === jU || jU(!1)
          },
          onPointerDown: QU,
          onPointerUp: eU,
          "data-inven-idx": pU,
          children: [SU && (0, uU.jsx)(TU.c, {
            itemName: null !== (tU = YU) && void 0 !== tU ? tU : aU,
            amount: dU,
            enchantmentTier: XU,
            bar: vU
          }), SU && oU && (0, uU.jsx)("div", {
            className: "InvenItemNewDot"
          }), bU && (0, uU.jsx)(hU, {
            idx: pU
          }), mU && !SU && (0, uU.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${mU})`
            }
          })]
        })
      }))
  },
  8991: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU
    });
    var tU = gU(311),
      pU = gU(8994);

    function EU(UU, RU, gU) {
      const EU = Object.entries(RU).sort(((UU, RU) => RU[1] - UU[1])),
        PU = (0, tU.xb)(UU);
      PU.push(UU ? "\n\n" : "\n");
      for (const [pU, CU] of EU) {
        var TU, qU, KU;
        const UU = null !== (TU = null === gU || void 0 === gU || null === (qU = gU[pU]) || void 0 === qU ? void 0 : qU.icon) && void 0 !== TU ? TU : `${pU} Enchantment`;
        PU.push({
          icon: UU,
          style: {
            fontSize: "1.5rem"
          }
        }), PU.push({
          str: `${pU} ${null!==(KU=(0,tU.V)(CU))&&void 0!==KU?KU:CU}\n`
        })
      }
      PU.push({
        str: "\n"
      });
      for (const [tU, CU] of EU) {
        var cU, GU, jU, uU;
        const UU = null !== (cU = null === gU || void 0 === gU || null === (GU = gU[tU]) || void 0 === GU ? void 0 : GU.icon) && void 0 !== cU ? cU : `${tU} Enchantment`,
          RU = null !== (jU = null === gU || void 0 === gU || null === (uU = gU[tU]) || void 0 === uU ? void 0 : uU.description) && void 0 !== jU ? jU : (0, pU.m)(tU);
        PU.push({
          icon: UU,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), PU.push({
          str: RU,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), PU.push({
          str: "\n"
        })
      }
      return PU
    }
  },
  36107: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU,
      d: () => pU
    });
    const tU = -1,
      pU = -2
  },
  9001: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU,
      d: () => WU,
      e: () => QU,
      f: () => qU,
      i: () => eU,
      l: () => cU,
      m: () => jU,
      q: () => hU,
      t: () => GU
    });
    var tU = gU(299),
      pU = gU(581),
      EU = gU(311),
      PU = gU(3931),
      TU = gU(8991);

    function qU(UU, RU) {
      var gU;
      let {
        player: tU,
        chestOrCreative: pU
      } = UU;
      var EU;
      return RU < tU.length ? null !== (EU = tU[RU]) && void 0 !== EU ? EU : null : null !== (gU = pU[RU - tU.length]) && void 0 !== gU ? gU : null
    }

    function KU(UU) {
      var RU;
      return null !== (RU = UU.amount) && void 0 !== RU ? RU : 0
    }

    function cU(UU) {
      return 0 === UU.button || void 0 === UU.button
    }

    function GU(UU) {
      return !!UU.shiftKey
    }

    function jU(UU) {
      return "touches" in UU || "touch" === UU.pointerType || "pen" === UU.pointerType
    }
    const uU = new Set,
      CU = 50;

    function hU(UU, RU) {
      var gU;
      const tU = null === (gU = UU[RU]) || void 0 === gU ? void 0 : gU.displayName;
      return (0, pU.E)(tU) ? "string" !== typeof RU ? "" : (!uU.has(RU) && uU.size < CU && (uU.add(RU), console.warn(`No item called "${RU}", so its hover shows the name as given`)), RU) : tU
    }

    function QU(UU, RU, gU) {
      var qU, KU, cU, GU, jU, uU, CU, QU, eU, WU, fU, xU, mU, IU;
      const JU = UU.attributes,
        wU = null !== (qU = null === (KU = RU[UU.name]) || void 0 === KU ? void 0 : KU.rootName) && void 0 !== qU ? qU : UU.name,
        nU = null !== (cU = null !== (GU = JU.customDisplayName) && void 0 !== GU ? GU : null === (jU = RU[UU.name]) || void 0 === jU ? void 0 : jU.displayName) && void 0 !== cU ? cU : hU(RU, wU);
      let bU = nU;
      const oU = null === (uU = JU.customAttributes) || void 0 === uU ? void 0 : uU.enchantmentTier;
      oU && (bU = (0, EU.xb)(nU, {
        colour: EU.sb[oU]
      }));
      const ZU = null !== (CU = null !== (QU = null !== (eU = function(UU, RU) {
        var gU;
        if (void 0 === UU || null !== (gU = RU.customAttributes) && void 0 !== gU && gU.author) return UU;
        const pU = (0, tU.dc)(UU);
        return pU.every((UU => "string" === typeof UU)) ? UU : pU.map((UU => "string" === typeof UU ? UU : {
          icon: UU.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(JU.customDescription, JU)) && void 0 !== eU ? eU : null === (WU = RU[UU.name]) || void 0 === WU ? void 0 : WU.description) && void 0 !== QU ? QU : null === (fU = RU[wU]) || void 0 === fU ? void 0 : fU.description) && void 0 !== CU ? CU : "";
      let aU = ZU;
      if (null !== (xU = JU.customAttributes) && void 0 !== xU && xU.enchantments) aU = (0, TU.e)(ZU, JU.customAttributes.enchantments, JU.customAttributes.enchantmentData);
      else if (gU[wU]) aU = (0, EU.xb)(ZU), aU.push({
        str: "\n"
      }), aU.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (mU = JU.customAttributes) && void 0 !== mU && mU.mobSettings) {
        var YU, BU;
        const UU = JU.customAttributes.mobSettings;
        var VU, rU;
        if (aU = [], (0, pU.E)(JU.customAttributes.health) || (aU.push({
            str: "\n"
          }), aU.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), aU.push({
            str: " "
          }), aU.push({
            str: JU.customAttributes.health.toString()
          }), (0, pU.E)(UU.maxHealth) || (aU.push({
            str: "/"
          }), aU.push({
            str: UU.maxHealth.toString()
          }))), !(0, pU.E)(UU.attackDamage) && UU.attackDamage > 0 && (aU.push({
            str: "\n"
          }), aU.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), aU.push({
            str: " "
          }), aU.push({
            str: UU.attackDamage.toString()
          })), !(0, pU.E)(UU.secondaryAttackDamage) && UU.secondaryAttackDamage > 0 && (aU.push({
            str: "\n"
          }), aU.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), aU.push({
            str: " "
          }), aU.push({
            str: UU.secondaryAttackDamage.toString()
          })), (0, pU.E)(UU.baseRunningSpeed) || (aU.push({
            str: "\n"
          }), aU.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), aU.push({
            str: " "
          }), aU.push({
            str: UU.baseRunningSpeed.toFixed(2)
          })), "Saddled" === UU.metaInfo) aU.push({
          str: "\n"
        }), aU.push({
          str: {
            translationKey: "general:has"
          }
        }), aU.push({
          str: " "
        }), aU.push({
          icon: null !== (VU = null === (rU = UU.tameInfo) || void 0 === rU ? void 0 : rU.saddleItemName) && void 0 !== VU ? VU : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (aU.push({
            str: "\n"
          }), aU.push({
            str: "\n"
          }), UU.petInfo && null !== (YU = UU.tameInfo) && void 0 !== YU && YU.supportsFriendship) {
          const RU = PU.b.getIconsFromFriendshipPoints(UU.petInfo.friendshipPoints);
          for (const UU of RU) aU.push({
            icon: UU,
            style: {
              fontSize: "1.5em"
            }
          });
          aU.push({
            str: "\n"
          });
          const gU = PU.b.getMobHungerLevel(UU.petInfo.lastFedAt);
          for (const UU of PU.b.hungerLevelIcons[gU]) aU.push({
            icon: UU,
            style: {
              fontSize: "1.5em"
            }
          });
          aU.push({
            str: " "
          }), aU.push({
            str: PU.b.hungerLevelTranslations[gU],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (UU.tameInfo && null !== (BU = UU.tameInfo) && void 0 !== BU && BU.supportsFriendship) {
          var XU, vU;
          let RU = null !== (XU = UU.tameInfo.likedFoods) && void 0 !== XU ? XU : [];
          aU.push({
            str: "\n"
          }), aU.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: PU.b.feedTextColours[PU.b.MobFoodType.Superliked]
            }
          }), aU.push({
            str: " "
          }), null !== (vU = UU.petInfo) && void 0 !== vU && vU.superlikedFoodKnown ? (aU.push({
            icon: UU.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), RU = RU.filter((RU => RU !== UU.petInfo.superlikedFood))) : aU.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), aU.push({
            str: "\n"
          }), aU.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: PU.b.feedTextColours[PU.b.MobFoodType.Liked]
            }
          }), aU.push({
            str: " "
          });
          for (const UU of RU) aU.push({
            icon: UU,
            style: {
              fontSize: "1.5em"
            }
          });
          aU.push({
            str: "\n"
          }), aU.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: PU.b.feedTextColours[PU.b.MobFoodType.Neutral]
            }
          }), aU.push({
            str: " "
          });
          for (const gU of null !== (dU = UU.tameInfo.neutralFoods) && void 0 !== dU ? dU : []) {
            var dU;
            aU.push({
              icon: gU,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          aU.push({
            str: "\n"
          }), aU.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: PU.b.feedTextColours[PU.b.MobFoodType.Disliked]
            }
          }), aU.push({
            str: " "
          });
          for (const gU of null !== (HU = UU.tameInfo.dislikedFoods) && void 0 !== HU ? HU : []) {
            var HU;
            aU.push({
              icon: gU,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        aU.length > 0 ? (aU.shift(), aU.unshift(...(0, EU.xb)(ZU))) : aU = (0, EU.xb)(ZU)
      }
      return {
        name: bU,
        desc: aU,
        fontStyle: null !== (IU = JU.customAttributes) && void 0 !== IU && IU.author ? "italic" : "normal"
      }
    }

    function eU(UU, RU, gU, tU) {
      const pU = qU(UU, gU),
        EU = qU(UU, tU);
      if (!pU) return !1;
      const PU = RU[pU.name].armourReduction,
        TU = RU[EU.name].armourReduction;
      if (TU === PU) {
        var KU, cU, GU, jU;
        const UU = null !== (KU = null === (cU = pU.attributes.customAttributes) || void 0 === cU ? void 0 : cU.enchantmentTier) && void 0 !== KU ? KU : "Tier 0",
          RU = null !== (GU = null === (jU = EU.attributes.customAttributes) || void 0 === jU ? void 0 : jU.enchantmentTier) && void 0 !== GU ? GU : "Tier 0";
        return parseInt(UU.replace("Tier ", "")) >= parseInt(RU.replace("Tier ", ""))
      }
      return PU > TU
    }

    function WU(UU) {
      let RU;
      if ("number" === typeof UU) {
        const gU = document.querySelector(`[data-inven-idx="${UU}"]`);
        if (!gU) return null;
        RU = gU.getBoundingClientRect()
      } else RU = UU.getBoundingClientRect();
      return {
        x: RU.left + RU.width / 2,
        y: RU.top + RU.height / 2
      }
    }
  },
  8893: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => uU,
      d: () => CU,
      h: () => hU
    });
    var tU = gU(1412),
      pU = gU(56),
      EU = gU(1305),
      PU = gU(4195),
      TU = gU(2185),
      qU = gU(1181),
      KU = gU(96),
      cU = gU(1834),
      GU = gU(1326),
      jU = gU(1090);

    function uU(UU) {
      let {
        show: RU,
        onClose: gU
      } = UU;
      const {
        requestedGameNameWithVariation: tU,
        lobbyName: pU,
        shownLobbyName: EU
      } = (0, cU.k)("connectedGame"), qU = (0, TU.d)(tU, pU, !1);
      return KU.featureFlags.canUseInviteLinks && (0, jU.jsx)(PU.d, {
        show: RU,
        close: gU,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, jU.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, jU.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, jU.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, jU.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === qU ? (0, jU.jsx)(GU.d, {}) : qU, (0, jU.jsx)("br", {}), "Lobby Name: ", EU, (0, jU.jsx)("br", {}), (0, jU.jsx)("br", {}), (0, jU.jsx)("br", {}), (0, jU.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, jU.jsx)(CU, {})]
        })
      })
    }

    function CU() {
      var UU;
      const {
        t: RU
      } = (0, qU.B)(), gU = null !== (UU = hU(KU.featureFlags.canUseInviteLinks)) && void 0 !== UU ? UU : "Loading Link...", [EU, PU] = (0, pU.useState)(0), [TU, cU] = (0, pU.useReducer)((UU => UU + 1), 0);
      return (0, pU.useEffect)((() => {
        const UU = setTimeout((() => {
          cU()
        }), 1100);
        return () => {
          clearTimeout(UU)
        }
      }), [EU]), KU.featureFlags.canUseInviteLinks && (0, jU.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, jU.jsx)("div", {
          className: "InviteLinkInner",
          children: gU
        }), (0, jU.jsx)(tU.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(gU).catch((UU => {
              console.error("Failed to copy invite link:", UU)
            })), PU(Date.now())
          },
          disabled: Date.now() - EU < 1e3,
          children: Date.now() - EU < 1e3 ? RU("general:copied") : RU("general:copy")
        })]
      })
    }

    function hU(UU) {
      const [RU, gU] = (0, pU.useState)(null);
      return (0, pU.useEffect)((() => {
        if (!UU) return;
        let RU = !0;
        return (0, EU.D)().then((UU => {
          RU && gU(UU)
        })).catch((UU => {
          console.error("Failed to get invite link:", UU)
        })), () => {
          RU = !1
        }
      }), [UU]), RU
    }
  },
  36531: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => wU
    });
    var tU = gU(56),
      pU = gU(2254),
      EU = gU(1777),
      PU = gU(562),
      TU = gU(24),
      qU = gU(1037),
      KU = gU.n(qU),
      cU = gU(36143),
      GU = gU(2382),
      jU = gU(36150),
      uU = gU(2413),
      CU = gU(2389),
      hU = gU(3286),
      QU = gU(21),
      eU = gU(1875),
      WU = gU(2198),
      fU = gU(1217),
      xU = gU(4575),
      mU = gU(1834),
      IU = gU(96),
      JU = gU(1090);
    const wU = (0, tU.memo)((function() {
      const UU = (0, pU.g)("lobbyLeaderboardInfo"),
        RU = (0, mU.k)("players"),
        gU = (0, mU.k)("lobbyLeaderboardRows"),
        TU = (0, mU.k)("hiddenPlayerNames"),
        qU = (0, tU.useRef)(null),
        [KU, cU] = (0, tU.useReducer)((UU => UU + 1), 0);
      return (0, tU.useEffect)((() => (0, eU.c)((() => {
        cU()
      }))), []), (0, JU.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, JU.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!UU) return (0, JU.jsx)(JU.Fragment, {});
            const tU = JSON.parse(JSON.stringify(UU)),
              pU = [...RU.ids],
              KU = {},
              cU = {};
            for (const UU of pU) {
              var GU, uU;
              KU[UU] = null === (GU = gU[UU]) || void 0 === GU ? void 0 : GU.colour;
              const RU = null === (uU = gU[UU]) || void 0 === uU ? void 0 : uU.values;
              RU && (cU[UU] = {
                ...RU
              })
            }
            const CU = Object.keys(tU);
            CU.sort(((UU, RU) => tU[UU].sortPriority - tU[RU].sortPriority)), pU.sort(((UU, RU) => {
              if (!cU[UU] || !cU[RU]) return 0;
              for (const gU of CU) {
                const pU = cU[UU][gU],
                  EU = cU[RU][gU];
                let PU = 0;
                if ("string" == typeof pU && "string" == typeof EU ? PU = pU.localeCompare(EU) : "number" == typeof pU && "number" == typeof EU ? PU = pU - EU : "number" == typeof pU && "string" == typeof EU ? PU = 1 : "string" == typeof pU && "number" == typeof EU && (PU = -1), PU) return PU * ("ascending" === tU[gU].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const UU of pU) {
              var hU, QU, mU;
              const {
                name: tU,
                ranks: pU,
                cosmetics: EU
              } = RU.byId[UU], TU = [], qU = null !== (hU = null === (QU = gU[UU]) || void 0 === QU || null === (mU = QU.tags) || void 0 === mU ? void 0 : mU.flatMap((UU => 0 === UU.length ? UU : [...UU, String.fromCharCode(8198)]))) && void 0 !== hU ? hU : [];
              TU.push(...qU), TU.push(...(0, fU.w)(pU, tU, (null === EU || void 0 === EU ? void 0 : EU.nameColour) === PU.b || null === EU || void 0 === EU ? void 0 : EU.nameColour)), cU[UU] ??= {}, cU[UU].name = TU
            }

            function IU(UU, gU) {
              if (cU[UU] && void 0 !== cU[UU][gU]) {
                if ("name" === gU) {
                  const {
                    name: tU,
                    cosmetics: pU
                  } = RU.byId[UU];
                  return (0, JU.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [pU && (0, JU.jsx)(WU.d, {
                      cosmetics: pU
                    }), " ", (0, JU.jsx)(EU.e, {
                      text: cU[UU][gU],
                      friendBadgeFor: (0, eU.g)(tU, TU) ? tU : void 0
                    })]
                  })
                }
                return (0, JU.jsx)(EU.e, {
                  text: cU[UU][gU]
                })
              }
              return ""
            }
            const wU = Object.keys(tU).filter((UU => !0 !== tU[UU].hidden)).map((UU => {
              var RU;
              return {
                key: UU,
                header: (0, JU.jsx)(EU.e, {
                  text: null !== (RU = tU[UU].displayName) && void 0 !== RU ? RU : ""
                })
              }
            }));
            return (0, JU.jsx)("div", {
              ref: qU,
              className: "LobbyLeaderboard",
              children: (0, JU.jsx)(xU.d, {
                columns: wU,
                rows: pU,
                getRowKey: UU => UU,
                renderRow: UU => {
                  const gU = UU !== RU.localId;
                  return (0, JU.jsx)(nU, {
                    playerId: UU,
                    playerName: RU.byId[UU].name,
                    isOtherPlayer: gU,
                    opensProfileCard: (0, jU.c)(gU, RU.byId[UU].name, TU),
                    lobbyLeaderboardInfo: tU,
                    getPlayerValue: IU,
                    playerColors: KU
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function nU(UU) {
      let {
        playerId: RU,
        playerName: gU,
        isOtherPlayer: pU,
        opensProfileCard: EU,
        lobbyLeaderboardInfo: PU,
        getPlayerValue: qU,
        playerColors: eU
      } = UU;
      const WU = (0, tU.useRef)(null);
      (0, tU.useEffect)((() => () => {
        GU.e.closeIfOwner(WU)
      }), []);
      const fU = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            TU.p.yh("OpenReportMenu", {
              playerEId: RU,
              playerName: gU,
              aP: null,
              serverChatMsgId: null
            })
          }
        },
        xU = () => ({
          ...(0, jU.b)(RU, gU),
          showLocation: !1,
          status: null,
          extraActions: [fU],
          friendRequestSource: "leaderboard"
        });
      return (0, JU.jsxs)("tr", {
        ref: WU,
        "data-pad-focusable": EU || void 0,
        [GU.h]: EU || void 0,
        onClick: EU ? () => {
          var UU;
          GU.e.toggle(WU, {
            ...xU(),
            anchor: null !== (UU = WU.current.querySelector(".PlayerPfpAndName")) && void 0 !== UU ? UU : WU.current
          })
        } : void 0,
        onContextMenu: EU ? UU => {
          (0, uU.f)(WU, UU, xU(), QU.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: EU ? UU => {
          (0, CU.e)(UU, (() => (0, jU.b)(RU, gU).playerSocialPreview))
        } : void 0,
        children: [Object.keys(PU).map((UU => !0 === PU[UU].hidden ? null : (0, JU.jsxs)("td", {
          className: KU()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !pU
          }),
          children: [(0, JU.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: qU(RU, UU)
          }), (0, JU.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: eU[RU]
            }
          })]
        }, UU))), pU && !EU && (0, JU.jsx)(cU.e, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: WU,
          options: [{
            icon: fU.icon,
            text: fU.text,
            onPointerDown: fU.onClick
          }, ...null === gU || IU.featureFlags.useSocialFeatures ? [] : (0, hU.e)(null, gU)]
        })]
      })
    }
  },
  4422: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => WU,
      b: () => eU
    });
    var tU = gU(56),
      pU = gU(1410),
      EU = gU(1777),
      PU = gU(4430),
      TU = gU(1090);
    const qU = (0, tU.memo)((function(UU) {
      let {
        initialParameters: RU
      } = UU;
      const gU = (0, tU.useRef)(null),
        pU = (0, tU.useRef)(null),
        qU = (0, tU.useRef)(0),
        KU = (0, tU.useRef)(null),
        cU = RU.description,
        GU = RU.vU,
        {
          scale: jU,
          rotation: uU
        } = null !== RU && void 0 !== RU ? RU : {},
        CU = (0, PU.f)();
      return (0, tU.useEffect)((() => {
        const UU = CU.onFrame((() => {
          const UU = CU.getState();
          if (!UU.isActive || !gU.current || !pU.current) return;
          const RU = UU.state;
          if (gU.current.value = RU.progress, RU.clickCount > qU.current) {
            qU.current = RU.clickCount;
            const UU = pU.current;
            UU.classList.add("pulse"), KU.current = setTimeout((() => {
              UU.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(KU.current), UU()
        }
      }), [CU]), (0, TU.jsx)(TU.Fragment, {
        children: (0, TU.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== jU && {
              "--scale": jU
            },
            ...null !== uU && {
              "--rotation": `${uU}deg`
            }
          },
          children: [(0, TU.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: gU
          }), (0, TU.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: pU,
            children: (0, TU.jsx)(EU.e, {
              text: [{
                icon: GU
              }]
            })
          }), (0, TU.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, TU.jsx)(EU.e, {
              text: cU
            })
          })]
        })
      })
    }));
    var KU = gU(1037),
      cU = gU.n(KU);
    const GU = 2 * Math.PI * 90,
      jU = (0, tU.memo)((function(UU) {
        let {
          initialParameters: RU
        } = UU;
        const gU = (0, tU.useRef)(null),
          pU = (0, tU.useRef)(null),
          qU = (0, tU.useRef)(null),
          KU = RU.label,
          jU = RU.icon,
          uU = RU.SU,
          {
            scale: CU,
            rotation: hU,
            sU: QU
          } = null !== RU && void 0 !== RU ? RU : {},
          eU = (0, PU.f)();
        return (0, tU.useEffect)((() => {
          const UU = eU.onFrame((() => {
            var UU, RU;
            const tU = eU.getState();
            if (!tU.isActive || !pU.current) return;
            const EU = tU.state,
              PU = null !== (UU = EU.timeRemaining) && void 0 !== UU ? UU : 0,
              TU = null !== (RU = EU.HU) && void 0 !== RU ? RU : 1,
              KU = GU * (1 - PU / TU);
            pU.current.style.strokeDashoffset = `${KU}`, gU.current && (gU.current.style.opacity = PU > 0 ? "1" : "0"), qU.current && uU && (qU.current.textContent = `${(PU/1e3).toFixed(1)}s`)
          }));
          return () => {
            UU()
          }
        }), [eU, uU]), (0, TU.jsxs)("div", {
          className: "QTETimedClick",
          ref: gU,
          style: {
            ...null !== CU && {
              "--scale": CU
            },
            ...null !== hU && {
              "--rotation": `${hU}deg`
            }
          },
          children: [(0, TU.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, TU.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, TU.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, TU.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: GU,
                ref: pU
              })]
            }), (0, TU.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, TU.jsx)(EU.e, {
                text: [{
                  icon: jU
                }],
                className: cU()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: QU
                })
              })
            })]
          }), (0, TU.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, TU.jsx)(EU.e, {
              text: KU,
              className: "QTETimedClickLabelText"
            }), uU && (0, TU.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: qU
            })]
          })]
        })
      })),
      uU = (0, tU.memo)((function(UU) {
        let {
          initialParameters: RU
        } = UU;
        const gU = (0, tU.useRef)(null),
          pU = (0, tU.useRef)(null),
          qU = (0, tU.useRef)(null),
          KU = (0, tU.useRef)(!1),
          cU = RU.description,
          GU = null === RU || void 0 === RU ? void 0 : RU.icon,
          jU = (0, PU.f)();
        return (0, tU.useEffect)((() => {
          const UU = jU.onFrame((() => {
            const UU = jU.getState();
            if (!UU.isActive) return;
            const RU = UU.state;
            if (gU.current) {
              const UU = 100 * (RU.catchZonePosition - RU.kU / 2);
              gU.current.style.left = `${UU}%`, gU.current.style.width = 100 * RU.kU + "%", RU.isCatching !== KU.current && (KU.current = RU.isCatching, RU.isCatching ? gU.current.classList.add("catching") : gU.current.classList.remove("catching"))
            }
            pU.current && (pU.current.style.left = 100 * RU.moverPosition + "%"), qU.current && (qU.current.value = RU.progress)
          }));
          return () => {
            UU()
          }
        }), [jU]), (0, TU.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, TU.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, TU.jsx)(EU.e, {
              text: cU
            })
          }), (0, TU.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: qU
          }), (0, TU.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, TU.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: gU
            }), (0, TU.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: pU,
              children: (0, TU.jsx)("span", {
                children: GU && (0, TU.jsx)(EU.e, {
                  text: [{
                    icon: GU,
                    style: {
                      fontSize: "4rem"
                    }
                  }]
                })
              })
            })]
          })]
        })
      }));
    var CU = gU(581);
    const hU = (0, tU.memo)((function(UU) {
        let {
          initialParameters: RU
        } = UU;
        const gU = (0, tU.useRef)(null),
          pU = RU.label,
          qU = RU.LU,
          {
            icon: KU,
            scale: cU,
            rotation: GU
          } = null !== RU && void 0 !== RU ? RU : {},
          jU = 100 * (.5 - qU / 2),
          uU = 100 * qU,
          hU = (0, PU.f)();
        return (0, tU.useEffect)((() => {
          const UU = hU.onFrame((() => {
            const UU = hU.getState();
            if (!UU.isActive || !gU.current) return;
            const RU = UU.state;
            gU.current.style.left = 100 * RU.markerPosition + "%"
          }));
          return () => {
            UU()
          }
        }), [hU]), (0, TU.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, CU.E)(cU) && {
              "--scale": cU
            },
            ...!(0, CU.E)(GU) && {
              "--rotation": `${GU}deg`
            }
          },
          children: [KU && (0, TU.jsx)(EU.e, {
            text: [{
              icon: KU
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, TU.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, TU.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${jU}%`,
                width: `${uU}%`
              }
            }), (0, TU.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: gU
            })]
          }), (0, TU.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, TU.jsx)(EU.e, {
              text: pU
            })
          })]
        })
      })),
      QU = (0, tU.memo)((function(UU) {
        let {
          initialParameters: RU
        } = UU;
        const gU = (0, tU.useRef)(null),
          [pU, qU] = (0, tU.useState)((() => new Array(RU.lU).fill("pending"))),
          [KU, cU] = (0, tU.useState)((() => {
            const UU = RU.RR;
            return (0, CU.E)(UU) || UU <= 0 ? [] : new Array(UU).fill("pending")
          })),
          GU = RU.label,
          {
            icon: jU
          } = RU,
          uU = (0, tU.useRef)(0),
          hU = (0, tU.useRef)(0),
          QU = (0, tU.useRef)([]),
          eU = (0, PU.f)();
        return (0, tU.useEffect)((() => {
          const UU = eU.onFrame((() => {
            const UU = eU.getState();
            if (!UU.isActive || !gU.current) return;
            const RU = UU.state,
              tU = 30 + 60 * RU.outerCircleProgress;
            if (gU.current.setAttribute("r", String(tU)), !0 === RU.lastClickResult && RU.successes > uU.current) {
              gU.current.classList.remove("QTERhythmClickOuterCircle--miss"), gU.current.classList.add("QTERhythmClickOuterCircle--hit");
              const UU = setTimeout((() => {
                var UU;
                null === (UU = gU.current) || void 0 === UU || UU.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              QU.current.push(UU)
            } else if (!1 === RU.lastClickResult && RU.misses > hU.current) {
              gU.current.classList.remove("QTERhythmClickOuterCircle--hit"), gU.current.classList.add("QTERhythmClickOuterCircle--miss");
              const UU = setTimeout((() => {
                var UU;
                null === (UU = gU.current) || void 0 === UU || UU.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              QU.current.push(UU)
            }
            RU.successes === uU.current && RU.misses === hU.current || (uU.current = RU.successes, hU.current = RU.misses, qU((UU => {
              const gU = [...UU];
              for (let tU = 0; tU < RU.lU; tU++) gU[tU] = tU < RU.successes ? "success" : "pending";
              return gU
            })), cU((UU => {
              if (0 === UU.length) return UU;
              const gU = [...UU];
              for (let tU = 0; tU < gU.length; tU++) gU[tU] = tU < RU.misses ? "miss" : "pending";
              return gU
            })))
          }));
          return () => {
            UU();
            for (const UU of QU.current) clearTimeout(UU);
            QU.current = []
          }
        }), [eU]), (0, TU.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, TU.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: pU.map(((UU, RU) => (0, TU.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === UU ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, RU)))
          }), (0, TU.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, TU.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, TU.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, TU.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: gU
              })]
            }), jU && (0, TU.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, TU.jsx)(EU.e, {
                text: [{
                  icon: jU
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), KU.length > 0 && (0, TU.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: KU.map(((UU, RU) => (0, TU.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === UU ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, RU)))
          }), (0, TU.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, TU.jsx)(EU.e, {
              text: GU
            })
          })]
        })
      }));

    function eU(UU) {
      let {
        qte: RU
      } = UU;
      switch (RU.type) {
        case "progressBar":
          return (0, TU.jsx)(qU, {
            initialParameters: RU.parameters
          });
        case "timedClick":
          return (0, TU.jsx)(jU, {
            initialParameters: RU.parameters
          });
        case "gravityBar":
          return (0, TU.jsx)(uU, {
            initialParameters: RU.parameters
          });
        case "precisionBar":
          return (0, TU.jsx)(hU, {
            initialParameters: RU.parameters
          });
        case "rhythmClick":
          return (0, TU.jsx)(QU, {
            initialParameters: RU.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const WU = (0, tU.memo)((function() {
      const [UU, RU] = (0, tU.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, pU.e)("qteStateUpdated", (UU => {
        RU(UU)
      })), UU.isActive && UU.type ? (0, TU.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, TU.jsx)(eU, {
          qte: UU
        })
      }) : null
    }))
  },
  4430: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      f: () => qU
    });
    var tU = gU(56),
      pU = gU(1293),
      EU = gU(4438);
    const PU = {
        getState: () => EU.c.getCurrentState(),
        onFrame: pU.p
      },
      TU = (0, tU.createContext)(PU);

    function qU() {
      return (0, tU.useContext)(TU)
    }
  },
  8978: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(1834),
      TU = gU(1090);

    function qU(UU) {
      const RU = Math.floor(UU / 3600),
        gU = Math.floor(UU % 3600 / 60),
        tU = Math.floor(UU % 60),
        pU = `${gU.toString().padStart(2,"0")}:${tU.toString().padStart(2,"0")}`;
      return RU > 0 ? `${RU}:${pU}` : pU
    }
    const KU = (0, tU.memo)((function(UU) {
      let {
        className: RU
      } = UU;
      const {
        recording: gU,
        seconds: tU
      } = (0, PU.k)("replayRecorder");
      return gU ? (0, TU.jsxs)("div", {
        className: EU()("RecordingIndicator", RU),
        children: [(0, TU.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, TU.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, TU.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: qU(tU)
        })]
      }) : null
    }))
  },
  35944: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU,
      e: () => jU
    });
    var tU = gU(56),
      pU = gU(1333),
      EU = gU(1181),
      PU = gU(1326),
      TU = gU(3176),
      qU = gU(4593),
      KU = gU(1090);

    function cU(UU) {
      let {
        loading: RU,
        schematics: gU,
        onSchematicPicked: tU,
        selectedSchematicIdList: pU = [],
        disableAutoExport: qU
      } = UU;
      const {
        t: cU
      } = (0, EU.B)();
      return (0, KU.jsxs)("div", {
        className: "SchematicList",
        children: [RU && (0, KU.jsx)(PU.d, {}), !RU && 0 === gU.length && (0, KU.jsx)("div", {
          className: "NoSchematicsText",
          children: cU("worldBuilder:noSavedSchematic")
        }), !RU && gU.map((UU => (0, KU.jsx)(TU.f, {
          source: {
            type: "schematic",
            schematic: UU
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            tU(UU)
          },
          isSelected: pU.includes(UU.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: UU.isAutoExported && qU,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, UU.schematicId)))]
      })
    }

    function GU(UU) {
      let {
        ownedSchematics: RU,
        currentWorldSchematicId: gU,
        onClose: pU
      } = UU;
      const {
        t: PU
      } = (0, EU.B)(), [TU, GU] = (0, tU.useState)(null);
      return (0, KU.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === TU && (0, KU.jsxs)(KU.Fragment, {
          children: [(0, KU.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: PU("worldBuilder:schematicList")
          }), (0, KU.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: PU("worldBuilder:clickSchematicForOptions")
          }), (0, KU.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, KU.jsx)(cU, {
              loading: !1,
              schematics: RU,
              onSchematicPicked: UU => {
                GU(UU)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== TU && (0, KU.jsx)(qU.f, {
          schematic: TU,
          inSourceWorld: TU.schematicId === gU,
          onSchematicUpdate: UU => {
            GU(UU)
          },
          onClose: () => {
            GU(null), pU()
          }
        })]
      })
    }

    function jU(UU) {
      let {
        ownedSchematics: RU,
        currentWorldSchematicId: gU,
        onClose: tU
      } = UU;
      pU.NotificationProvider.showCustomPopup({
        body: UU => (0, KU.jsx)(GU, {
          ownedSchematics: RU,
          currentWorldSchematicId: gU,
          onClose: UU
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: tU,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36459: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => mU,
      g: () => xU
    });
    var tU = gU(3945),
      pU = gU(1410),
      EU = gU(56),
      PU = gU(6152),
      TU = gU(3940),
      qU = gU(1287),
      KU = gU(1800),
      cU = gU(1777),
      GU = gU(1412),
      jU = gU(1181),
      uU = gU(36467),
      CU = gU(1037),
      hU = gU.n(CU),
      QU = gU(1305),
      eU = gU(1049),
      WU = gU(1283),
      fU = gU(1090);
    const xU = "SleepingOverlay";

    function mU() {
      const {
        t: UU
      } = (0, jU.B)(), [RU, gU] = (0, EU.useState)(!1), [CU, mU] = (0, EU.useState)(null), [JU, wU] = (0, EU.useState)(1), [nU, bU] = (0, EU.useState)(!1), [oU, ZU] = (0, EU.useState)(!1), aU = (0, EU.useRef)(0), YU = (0, EU.useRef)(!1), BU = (0, EU.useRef)(!1), VU = (0, EU.useRef)(), rU = (0, EU.useRef)(null);

      function XU() {
        const UU = null !== CU && void 0 !== CU ? CU : "Rested Speed";
        KU.gameBridge.send("wakeUp", oU ? UU : null), rU.current = null, gU(!1), mU(null), wU(1), bU(!1), ZU(!1)
      }

      function vU() {
        return !nU && (XU(), !0)
      }
      return (0, pU.e)("PlayerPhysicsTypeUpdate", (UU => {
        UU !== rU.current && (rU.current = UU, UU === PU.u.SLEEPING ? (BU.current || (aU.current = KU.gameBridge.lookup("cameraZoom", null), BU.current = !0), YU.current = !0, KU.gameBridge.send("setCameraZoom", 3), gU(!0), wU(function() {
          for (const UU of KU.gameBridge.lookup("blocksStandingOn", null)) {
            if (uU.c.leafBeds.includes(UU)) return console.log(`Found leaf bed: ${UU}`), 1;
            if (uU.c.woolBeds.includes(UU)) return console.log(`Found woold bed: ${UU}`), 2;
            if (uU.c.strongBeds.includes(UU)) return console.log(`Found strong bed ${UU}`), 3
          }
          return 1
        }())) : (BU.current = !1, gU(!1), mU(null), wU(1)))
      })), (0, EU.useEffect)((() => () => {
        (0, qU.k)(xU)
      }), []), (0, EU.useEffect)((() => {
        RU ? (0, qU.o)(xU) : ((0, qU.k)(xU), YU.current && (KU.gameBridge.send("setCameraZoom", aU.current), YU.current = !1))
      }), [RU]), (0, WU.q)("overlay", VU, vU, RU), (0, fU.jsx)(tU.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: RU,
        timeout: 300,
        nodeRef: VU,
        unmountOnExit: !0,
        children: (0, fU.jsx)("div", {
          ref: VU,
          onClick: UU => {
            vU() && UU.stopPropagation()
          },
          children: (0, fU.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, fU.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: TU.i.map((RU => (0, fU.jsxs)(IU, {
                restedEffect: RU,
                jT: CU,
                setChosenRestedEffect: mU,
                children: [(0, fU.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, fU.jsx)(cU.e, {
                    text: [{
                      icon: RU
                    }]
                  }), TU.f[RU].shortName]
                }), (0, fU.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: UU(TU.f[RU].description, {
                    time: TU.f[RU].effectLevelDurations[JU] / 6e4
                  })
                })]
              }, RU)))
            }), (0, fU.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, fU.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, fU.jsxs)(GU.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: UU => {
                  oU ? XU() : (bU(!0), (0, QU.fb)((() => {
                    bU(!1), ZU(!0)
                  }), !0)), UU.stopPropagation()
                },
                loading: nU,
                children: [!oU && (0, fU.jsxs)(fU.Fragment, {
                  children: [(0, fU.jsx)(eU.c, {
                    name: "film"
                  }), " ", UU("classicGame:watchAdToGetRestedPerk")]
                }), oU && UU("classicGame:wakeUp")]
              }), (0, fU.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, fU.jsx)("div", {
                  className: hU()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === JU
                  }),
                  children: (0, fU.jsx)(cU.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, fU.jsx)("div", {
                  className: hU()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === JU
                  }),
                  children: (0, fU.jsx)(cU.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, fU.jsx)("div", {
                  className: hU()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === JU
                  }),
                  children: (0, fU.jsx)(cU.e, {
                    text: [{
                      icon: "Red Strongbed"
                    }]
                  })
                })]
              })]
            })]
          })
        })
      })
    }
    const IU = (0, EU.memo)((function(UU) {
      let {
        children: RU,
        restedEffect: gU,
        jT: tU,
        setChosenRestedEffect: pU
      } = UU;
      return gU === tU ? (0, fU.jsx)(GU.j, {
        onClick: UU => {
          UU.stopPropagation()
        },
        children: RU
      }) : (0, fU.jsx)(GU.g, {
        onClick: UU => {
          pU(gU), UU.stopPropagation()
        },
        children: RU
      })
    }))
  },
  36150: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => KU,
      c: () => qU
    });
    var tU = gU(562),
      pU = gU(1800),
      EU = gU(1570),
      PU = gU(96),
      TU = gU(1265);

    function qU(UU, RU, gU) {
      return PU.featureFlags.useSocialFeatures && UU && null === (0, TU.c)(RU, gU)
    }

    function KU(UU, RU) {
      var gU, PU;
      const TU = EU.b.getSocialState().friends.find((UU => UU.name.toLowerCase() === RU.toLowerCase())),
        qU = pU.gameBridge.latest("players").byId[UU],
        KU = void 0 !== qU && qU.name === RU,
        cU = KU && null !== (gU = qU.cosmetics) && void 0 !== gU ? gU : void 0,
        GU = TU && cU ? {
          ...TU,
          cosmetics: cU
        } : TU;
      return {
        playerSocialPreview: null !== GU && void 0 !== GU ? GU : {
          isError: !1,
          name: RU,
          ranks: KU ? [...qU.ranks] : [],
          cosmetics: null !== cU && void 0 !== cU ? cU : {},
          nameColour: null !== (PU = null === cU || void 0 === cU ? void 0 : cU.nameColour) && void 0 !== PU ? PU : tU.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== TU
      }
    }
  },
  8982: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU
    });
    var tU = gU(4200),
      pU = gU(4206);

    function EU(UU) {
      let {
        children: RU,
        showing: gU,
        globallyUniqueKey: EU,
        alwaysMountChildren: PU = !1,
        doGameplayStartStopOnShow: TU = !0,
        keepsMovement: qU = !1
      } = UU;
      return (0, pU.e)(!0, gU, EU, qU), (0, tU.c)(TU, gU), gU || PU ? RU : null
    }
  },
  4575: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(1090);

    function TU(UU) {
      let {
        columns: RU,
        rows: gU,
        getRowKey: pU,
        renderRow: TU,
        className: qU
      } = UU;
      return (0, PU.jsxs)("table", {
        className: EU()("Table", qU),
        children: [(0, PU.jsx)("thead", {
          children: (0, PU.jsx)("tr", {
            children: RU.map((UU => (0, PU.jsx)("th", {
              children: UU.header
            }, UU.key)))
          })
        }), (0, PU.jsx)("tbody", {
          children: gU.map((UU => (0, PU.jsx)(tU.Fragment, {
            children: TU(UU)
          }, pU(UU))))
        })]
      })
    }
  },
  36425: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => wU,
      d: () => IU,
      h: () => JU,
      j: () => CU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(56),
      PU = gU(74),
      TU = gU(1347),
      qU = gU(1412),
      KU = gU(1344),
      cU = gU(1283),
      GU = gU(1181),
      jU = gU(36427),
      uU = gU(1090);

    function CU(UU) {
      const [RU, gU] = (0, EU.useState)((() => (0, jU.p)(UU)));
      return (0, EU.useEffect)((() => (gU((0, jU.p)(UU)), (0, jU.N)((() => {
        gU((0, jU.p)(UU))
      })))), [UU]), RU
    }

    function hU(UU, RU) {
      "function" === typeof UU ? UU(RU) : UU && (UU.current = RU)
    }

    function QU(UU) {
      let {
        tutorial: RU,
        step: gU,
        enabled: tU = !0
      } = UU;
      const pU = CU(RU);
      return tU && pU === gU
    }

    function eU(UU, RU) {
      const gU = (0, jU.t)(UU),
        tU = gU.indexOf(RU);
      return !gU.slice(tU + 1).some((RU => (0, jU.C)(UU, RU)))
    }

    function WU(UU, RU, gU, tU) {
      let {
        tutorial: pU,
        step: EU,
        waitForClick: PU = !1,
        onPrevious: TU
      } = UU;
      const qU = RU && (0, jU.y)(pU, EU),
        KU = RU && !eU(pU, EU),
        GU = PU ? tU : gU;
      let uU = null;
      qU ? uU = () => {
        null === TU || void 0 === TU || TU(), (0, jU.v)(pU, EU)
      } : KU && (uU = () => {
        (0, jU.m)(pU)
      }), (0, cU.q)("popup", null !== GU && void 0 !== GU ? GU : gU, uU, RU && null !== GU, null, qU ? void 0 : "controller:menusSkipTutorial")
    }

    function fU(UU) {
      let {
        tutorial: RU,
        step: gU,
        text: tU,
        waitForClick: pU = !1,
        onPrevious: EU
      } = UU;
      const {
        t: PU
      } = (0, GU.B)(), TU = eU(RU, gU);
      return (0, uU.jsxs)(uU.Fragment, {
        children: [(0, uU.jsx)("div", {
          className: "TutorialStepText",
          children: tU
        }), (0, uU.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, jU.y)(RU, gU) && (0, uU.jsx)(qU.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === EU || void 0 === EU || EU(), (0, jU.v)(RU, gU)
            },
            children: PU("tutorial:back")
          }), !pU && (0, uU.jsx)(qU.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, jU.g)(gU)
            },
            padDefaultFocus: !0,
            children: PU(TU ? "tutorial:done" : "tutorial:next")
          }), !TU && (0, uU.jsx)(qU.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, jU.m)(RU)
            },
            children: PU("tutorial:skip")
          })]
        })]
      })
    }
    const xU = 6;

    function mU(UU) {
      let {
        rect: RU,
        margin: gU
      } = UU;
      const tU = Math.max(0, RU.top - gU),
        pU = RU.bottom + gU,
        EU = Math.max(0, RU.left - gU),
        PU = RU.right + gU;
      return (0, uU.jsxs)(uU.Fragment, {
        children: [(0, uU.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: tU
          }
        }), (0, uU.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: pU,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, uU.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: tU,
            left: 0,
            width: EU,
            height: pU - tU
          }
        }), (0, uU.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: tU,
            left: PU,
            right: 0,
            height: pU - tU
          }
        })]
      })
    }

    function IU(UU) {
      let {
        target: RU,
        placement: gU,
        boxRef: tU,
        className: qU,
        spotlightMargin: cU = xU,
        children: GU
      } = UU;
      const {
        getArrowProps: jU,
        getTooltipProps: CU,
        setTooltipRef: hU,
        setTriggerRef: QU
      } = (0, TU.e)({
        placement: gU,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, cU]
      });
      (0, EU.useLayoutEffect)((() => {
        QU(RU)
      }), [RU, QU]);
      const eU = function(UU, RU) {
        const [gU, tU] = (0, EU.useState)(null);
        return (0, EU.useEffect)((() => {
          if (!RU || !UU) return void tU(null);
          let gU = 0,
            pU = null;
          const EU = () => {
            const RU = UU.getBoundingClientRect();
            pU && RU.left === pU.left && RU.top === pU.top && RU.width === pU.width && RU.height === pU.height || (pU = RU, tU(RU)), gU = requestAnimationFrame(EU)
          };
          return EU(), () => {
            cancelAnimationFrame(gU)
          }
        }), [UU, RU]), gU
      }(RU, !0);
      (0, EU.useEffect)((() => {
        null === RU || void 0 === RU || RU.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [RU]);
      const WU = (0, EU.useCallback)((UU => {
        hU(UU), tU && (tU.current = UU)
      }), [hU, tU]);
      return (0, PU.createPortal)((0, uU.jsxs)(uU.Fragment, {
        children: [eU && (0, uU.jsx)(mU, {
          rect: eU,
          margin: cU
        }), (0, uU.jsxs)("div", {
          ref: WU,
          ...CU({
            className: pU()("tooltip-container SmallTextLight TutorialStep", qU)
          }),
          children: [GU, (0, uU.jsx)("div", {
            ...jU({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, KU.k)())
    }
    const JU = (0, EU.forwardRef)((function(UU, RU) {
      let {
        placement: gU = "right",
        children: tU,
        ...pU
      } = UU;
      const PU = QU(pU),
        TU = (0, EU.useRef)(null),
        qU = (0, EU.useRef)(null);
      WU(pU, PU, TU, qU);
      const [KU, cU] = (0, EU.useState)(null), GU = tU.ref, jU = (0, EU.useCallback)((UU => {
        qU.current = UU, cU(UU), hU(RU, UU), hU(GU, UU)
      }), [RU, GU]);
      return (0, uU.jsxs)(uU.Fragment, {
        children: [(0, EU.cloneElement)(tU, {
          ref: jU
        }), PU && (0, uU.jsx)(IU, {
          target: KU,
          placement: gU,
          boxRef: TU,
          children: (0, uU.jsx)(fU, {
            ...pU
          })
        })]
      })
    }));

    function wU(UU) {
      const RU = QU(UU),
        gU = (0, EU.useRef)(null);
      return WU(UU, RU, gU, null), RU ? (0, PU.createPortal)((0, uU.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, uU.jsx)("div", {
          ref: gU,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, uU.jsx)(fU, {
            ...UU
          })
        })
      }), (0, KU.k)()) : null
    }
  },
  36280: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU,
      f: () => PU,
      i: () => TU,
      m: () => qU
    });
    var tU = gU(56),
      pU = gU(1106);
    const EU = 8,
      PU = "InGameHeaderContainer",
      TU = "TopRightElements";

    function qU(UU) {
      const [RU] = (0, pU.d)(), [gU, qU] = (0, tU.useState)(!1);
      return (0, tU.useLayoutEffect)((() => {
        if (!UU) return;
        const RU = document.querySelector(`.${PU}`),
          gU = document.querySelector(`.${TU}`),
          tU = () => {
            const tU = UU.getBoundingClientRect(),
              pU = RU ? RU.getBoundingClientRect().right : 0,
              PU = gU ? gU.getBoundingClientRect().left : window.innerWidth,
              TU = tU.left < pU + EU,
              KU = tU.right > PU - EU;
            qU(TU || KU)
          };
        tU();
        const pU = new ResizeObserver(tU);
        return pU.observe(UU), RU && pU.observe(RU), gU && pU.observe(gU), () => {
          pU.disconnect()
        }
      }), [UU, RU]), gU
    }
  },
  6239: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = gU(56),
      pU = gU(34);

    function EU(UU, RU) {
      var gU;
      const [EU, PU] = (0, tU.useState)(null !== (gU = pU.k.getItem(UU)) && void 0 !== gU ? gU : RU);
      return [EU, RU => {
        pU.k.setItem(UU, RU), PU(RU)
      }]
    }
  },
  36442: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(21),
      pU = gU(1305);

    function EU() {
      const {
        clientEscMenuOptions: UU
      } = (0, tU.l)(["clientEscMenuOptions"]);
      return (0, pU.z)() && UU.showChat
    }
  },
  36379: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => qU
    });
    var tU = gU(2551),
      pU = gU(3349),
      EU = gU(2644);
    const PU = ["Unable to create vertex buffer"];
    let TU = {};

    function qU(UU, RU) {
      const gU = new Date;
      console.error(`${gU.getUTCHours()}:${gU.getUTCMinutes()}:${gU.getUTCSeconds()}`, UU, RU, null === RU || void 0 === RU ? void 0 : RU.stack), PU.includes(null === RU || void 0 === RU ? void 0 : RU.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, tU.c)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${RU.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, EU.logError)("warning", `${UU}\n ${RU} "\n" ${null===RU||void 0===RU?void 0:RU.stack}`);
      const pU = UU + RU + (null === RU || void 0 === RU ? void 0 : RU.stack);
      pU in TU || ((0, EU.logError)("error", `${UU}\n ${RU} "\n" ${null===RU||void 0===RU?void 0:RU.stack}`), TU[pU] = !0)
    }(0, pU.onGameReset)((() => {
      TU = {}
    }))
  },
  4501: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => rU,
      c: () => VU
    });
    var tU = gU(4503),
      pU = gU(299);
    const EU = 120,
      PU = 260,
      TU = 1.15,
      qU = 1.2,
      KU = 2,
      cU = 1.08,
      GU = .8,
      jU = .95,
      uU = 8,
      CU = "[\"')\\]\u300d\u300f\uff09]*",
      hU = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${CU}$`),
      QU = new RegExp(`[?\uff1f]${CU}$`),
      eU = new RegExp(`[!\uff01]${CU}$`),
      WU = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      fU = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      xU = new RegExp(`[${fU}]`),
      mU = new RegExp(`[${fU}]|[^${fU}]+`, "g"),
      IU = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function JU(UU) {
      let RU = 2166136261;
      for (let gU = 0; gU < UU.length; gU++) RU ^= UU.charCodeAt(gU), RU = Math.imul(RU, 16777619);
      return (RU >>> 0) / 4294967295 * 2 - 1
    }

    function wU(UU) {
      var RU;
      if (xU.test(UU)) return 1;
      const gU = UU.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        tU = gU.replace(/[^0-9]/g, "");
      if (tU.length > 0 && !/\p{L}/u.test(gU)) return Math.min(tU.length, 4);
      const pU = null !== (RU = gU.match(IU)) && void 0 !== RU ? RU : [];
      if (0 === pU.length) {
        var EU, PU;
        const UU = null !== (EU = null === (PU = gU.match(/\p{L}/gu)) || void 0 === PU ? void 0 : PU.length) && void 0 !== EU ? EU : 0;
        return 0 === UU ? 0 : Math.min(Math.max(1, Math.round(UU / 2.5)), uU)
      }
      const TU = gU.replace(/[^\p{L}]/gu, ""),
        qU = pU.length > 1 && "e" === pU.at(-1) && TU.endsWith("e") && !TU.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(UU.replace(/[^\p{L}]/gu, ""));
      return Math.min(pU.length - (qU ? 1 : 0), uU)
    }

    function nU(UU) {
      return UU.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function bU(UU) {
      const RU = UU.replace(/[^\p{L}]/gu, "");
      return RU.length >= 2 && RU === RU.toUpperCase() && RU !== RU.toLowerCase()
    }

    function oU(UU, RU) {
      var gU;
      const uU = RU && (0, tU.k)(RU),
        CU = null !== (gU = null === uU || void 0 === uU ? void 0 : uU.syllableMs) && void 0 !== gU ? gU : tU.c,
        fU = function(UU) {
          const RU = [];
          for (const tU of (0, pU.dc)(UU))
            if ("string" === typeof tU)
              for (const UU of tU.split(/(\s+)/)) {
                if ("" === UU) continue;
                if (/^\s+$/.test(UU)) {
                  RU.push({
                    kind: "space",
                    text: UU
                  });
                  continue
                }
                if (!xU.test(UU)) {
                  RU.push({
                    kind: "word",
                    text: UU,
                    delayMs: 0
                  });
                  continue
                }
                let tU = !0;
                for (const pU of null !== (gU = UU.match(mU)) && void 0 !== gU ? gU : []) {
                  var gU;
                  const UU = RU.at(-1);
                  tU || "word" !== (null === UU || void 0 === UU ? void 0 : UU.kind) || xU.test(pU) || /[\p{L}\p{N}]/u.test(pU) ? (tU || RU.push({
                    kind: "space",
                    text: "\u200b"
                  }), RU.push({
                    kind: "word",
                    text: pU,
                    delayMs: 0
                  }), tU = !1) : UU.text += pU
                }
              } else RU.push({
                kind: "icon",
                text: tU.icon,
                delayMs: 0
              });
          return RU
        }(UU),
        IU = [];
      let oU = [];
      for (const tU of fU) "space" !== tU.kind && (oU.push(tU), hU.test(tU.text) && (IU.push(oU), oU = []));
      IU.push(oU);
      const ZU = [];
      let aU = 0;
      for (const tU of IU) {
        var YU, BU;
        const UU = null !== (YU = null === (BU = tU.at(-1)) || void 0 === BU ? void 0 : BU.text) && void 0 !== YU ? YU : "",
          RU = QU.test(UU),
          gU = eU.test(UU),
          pU = tU.map((UU => "word" === UU.kind ? wU(UU.text) : 1)),
          fU = pU.findLastIndex((UU => UU > 0));
        for (const [QU, eU] of tU.entries()) {
          const UU = "word" === eU.kind,
            tU = pU[QU];
          eU.delayMs = aU;
          for (let pU = 0; uU && pU < tU; pU++) {
            const {
              intonation: EU
            } = uU;
            let PU = fU > 0 ? -EU.declineSemitones * (QU / fU) : 0;
            PU += JU(`${nU(eU.text)}|${pU}`) * EU.variationSemitones;
            const hU = Math.min(1, EU.variationSemitones);
            let WU = uU.glideSemitones,
              xU = 1;
            gU && (PU += EU.exclaimLiftSemitones, xU *= TU), RU && QU === fU && (PU += EU.questionRiseSemitones * (tU > 1 ? .5 + .5 * pU / (tU - 1) : 1), pU === tU - 1 && (WU = Math.abs(WU) + EU.questionRiseSemitones / 2)), UU && bU(eU.text) && (PU += KU * hU, xU *= qU), tU > 1 && 0 === pU && (PU += GU * hU, xU *= cU), ZU.push({
              atMs: aU + pU * CU,
              semitones: PU,
              glideSemitones: WU,
              durationMs: pU < tU - 1 ? Math.min(uU.durationMs, CU * jU) : uU.durationMs,
              level: xU
            })
          }
          aU += tU * CU + (hU.test(eU.text) ? PU : WU.test(eU.text) ? EU : 0)
        }
      }
      return {
        pieces: fU.map((UU => "space" === UU.kind ? UU : "icon" === UU.kind ? {
          kind: "icon",
          icon: UU.text,
          delayMs: UU.delayMs
        } : {
          kind: "word",
          text: UU.text,
          delayMs: UU.delayMs
        })),
        blips: ZU
      }
    }
    var ZU = gU(1181),
      aU = gU(1249),
      YU = gU(1802);

    function BU(UU) {
      if ("string" === typeof UU) return UU;
      const RU = aU.g.get().getCurrentLanguageCode();
      return (0, ZU.s)(RU, UU.translationKey, (0, ZU.r)(UU.params, YU.b.shown))
    }

    function VU(UU) {
      const RU = void 0 === UU.voice ? null : (0, tU.n)(UU.voice),
        gU = RU && (0, tU.k)(RU);
      return {
        plan: oU(BU(UU.line), gU),
        synth: gU
      }
    }

    function rU(UU) {
      const RU = [];
      let gU = [];
      for (const [pU, EU] of UU.entries()) {
        var tU;
        "space" === EU.kind && (" " !== EU.text || "icon" !== (null === (tU = UU[pU + 1]) || void 0 === tU ? void 0 : tU.kind)) ? (gU.length > 0 && RU.push(gU), RU.push([EU]), gU = []) : gU.push(EU)
      }
      return gU.length > 0 && RU.push(gU), RU
    }
  },
  36275: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU
    });
    const tU = [{
      maxDist: 30,
      timeBetweenSoftChecks: 1e3,
      softUpdateDist: 2,
      hardUpdateDist: 10
    }, {
      maxDist: 200,
      timeBetweenSoftChecks: 2e3,
      softUpdateDist: 5,
      hardUpdateDist: 20
    }, {
      maxDist: 1 / 0,
      timeBetweenSoftChecks: 5e3,
      softUpdateDist: 30,
      hardUpdateDist: 100
    }];

    function pU(UU, RU, gU) {
      const pU = Math.abs(UU - RU),
        EU = Date.now() - gU;
      for (const PU of tU)
        if (UU < PU.maxDist) return pU >= PU.hardUpdateDist || EU > PU.timeBetweenSoftChecks && pU >= PU.softUpdateDist;
      return !1
    }
  },
  36480: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      h: () => EU,
      i: () => pU
    });
    const tU = [.25, .5, 1, 2, 4, 8, 16];

    function pU(UU, RU) {
      const gU = tU;
      let pU = gU.indexOf(UU);
      return -1 === pU && (pU = gU.findIndex((RU => RU >= UU)), -1 === pU && (pU = gU.length - 1)), "up" === RU ? gU[Math.min(pU + 1, gU.length - 1)] : gU[Math.max(pU - 1, 0)]
    }

    function EU(UU) {
      return UU <= tU[0]
    }

    function PU(UU) {
      return UU >= tU[tU.length - 1]
    }
  },
  36524: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU,
      h: () => pU
    });
    const tU = "data-replay-ui-active",
      pU = [{
        group: "middleTextTop",
        dataAttr: "data-replay-hide-middle-text-top",
        label: "Middle text top"
      }, {
        group: "middleTextUpper",
        dataAttr: "data-replay-hide-middle-text-upper",
        label: "Middle text upper"
      }, {
        group: "middleTextLower",
        dataAttr: "data-replay-hide-middle-text-lower",
        label: "Middle text lower"
      }, {
        group: "rightInfoText",
        dataAttr: "data-replay-hide-right-info-text",
        label: "Right info text"
      }, {
        group: "crosshair",
        dataAttr: "data-replay-hide-crosshair",
        label: "Crosshair"
      }, {
        group: "flyingMiddleText",
        dataAttr: "data-replay-hide-flying-middle-text",
        label: "Flying middle text"
      }, {
        group: "hotbar",
        dataAttr: "data-replay-hide-hotbar",
        label: "Hotbar (shop, inventory, item name)"
      }, {
        group: "auraBar",
        dataAttr: "data-replay-hide-aura-bar",
        label: "Aura XP bar"
      }, {
        group: "healthAndShield",
        dataAttr: "data-replay-hide-health-and-shield",
        label: "Health bar and shield bar"
      }, {
        group: "effectInfo",
        dataAttr: "data-replay-hide-effect-info",
        label: "Effect info"
      }, {
        group: "nametag",
        dataAttr: null,
        label: "Nametags"
      }, {
        group: "everythingElse",
        dataAttr: "data-replay-hide-everything-else",
        label: "Everything else"
      }]
  },
  36527: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU,
      f: () => GU,
      g: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(36524);

    function PU() {
      const UU = {};
      for (const {
          group: RU
        }
        of EU.h) UU[RU] = !0;
      return UU
    }
    let TU = PU();

    function qU() {
      pU.p.yh("replayViewer|uiVisibilityChanged")
    }

    function KU() {
      return TU
    }

    function cU(UU, RU) {
      TU[UU] !== RU && (TU = {
        ...TU,
        [UU]: RU
      }, "nametag" === UU && tU.b.set({
        areNametagsHidden: !RU
      }), qU())
    }

    function GU() {
      TU = PU(), tU.b.set({
        areNametagsHidden: !1
      }), qU()
    }
  },
  9030: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      h: () => pU,
      i: () => cU
    });
    var tU = gU(1517);

    function pU(UU) {
      var RU;
      return {
        ...PU.store,
        yaw: PU.store.yaw + (null !== (RU = tU.d[UU].previewYaw) && void 0 !== RU ? RU : 0)
      }
    }
    const EU = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      PU = {
        player: EU,
        store: {
          ...EU,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function TU(UU, RU) {
      UU instanceof Promise ? UU.then(RU).catch((UU => {
        console.error("Couldn't open the preview", UU)
      })) : RU(UU)
    }
    class qU {
      constructor(UU) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, TU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height), null !== this.view && UU.show(this.view))
        }))
      }
      show(UU) {
        var RU;
        this.view = UU, null === (RU = this.opened) || void 0 === RU || RU.show(UU)
      }
      resize(UU, RU) {
        var gU;
        this.size = {
          width: UU,
          height: RU
        }, null === (gU = this.opened) || void 0 === gU || gU.resize(UU, RU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    class KU {
      constructor(UU) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(UU).then((UU => UU.ready)), TU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var UU, RU;
        return null !== (UU = null === (RU = this.opened) || void 0 === RU ? void 0 : RU.isReady()) && void 0 !== UU && UU
      }
      setCosmetic(UU, RU) {
        var gU;
        null === (gU = this.opened) || void 0 === gU || gU.setCosmetic(UU, RU)
      }
      playEmote(UU) {
        var RU;
        null === (RU = this.opened) || void 0 === RU || RU.playEmote(UU)
      }
      setOrbit(UU) {
        var RU;
        null === (RU = this.opened) || void 0 === RU || RU.setOrbit(UU)
      }
      resetCamera() {
        var UU;
        null === (UU = this.opened) || void 0 === UU || UU.resetCamera()
      }
      async untilDrawn(UU) {
        var RU;
        await this.ready, await (null === (RU = this.opened) || void 0 === RU ? void 0 : RU.untilDrawn(UU))
      }
      resize(UU, RU) {
        var gU;
        this.size = {
          width: UU,
          height: RU
        }, null === (gU = this.opened) || void 0 === gU || gU.resize(UU, RU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    const cU = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(UU) {
        this.host = UU
      }
      setDefaultHost(UU) {
        this.makeDefault = UU
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(UU) {
        return new qU(this.current().openMob(UU))
      }
      openPet(UU) {
        return new qU(this.current().openPet(UU))
      }
      openMobLineup(UU) {
        return new qU(this.current().openMobLineup(UU))
      }
      openCharacter(UU, RU) {
        return new KU(this.current().openCharacter(UU, RU))
      }
    }
  },
  9027: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU.e,
      f: () => tU.h,
      g: () => tU.i
    });
    var tU = gU(9030);
    class pU {
      constructor(UU) {
        this.load = UU, this.loaded = null, this.loading = null
      }
      run(UU) {
        return null !== this.loaded ? UU(this.loaded) : (this.loading ??= this.load().then((UU => (this.loaded = UU, UU)), (UU => {
          throw this.loading = null, UU
        })), this.loading.then(UU))
      }
    }
    class EU {
      constructor() {
        this.mobScene = new pU((() => Promise.all([gU.e(69), gU.e(226), gU.e(225), gU.e(244), gU.e(94), gU.e(245), gU.e(72), gU.e(71), gU.e(242), gU.e(70), gU.e(252), gU.e(246), gU.e(251), gU.e(249), gU.e(241), gU.e(218), gU.e(264), gU.e(222), gU.e(236), gU.e(247), gU.e(250), gU.e(74), gU.e(196), gU.e(215), gU.e(219), gU.e(93), gU.e(113), gU.e(234), gU.e(73), gU.e(112), gU.e(153)]).then((() => gU(40461))))), this.characterScene = new pU((() => Promise.all([gU.e(69), gU.e(226), gU.e(225), gU.e(244), gU.e(94), gU.e(245), gU.e(72), gU.e(71), gU.e(242), gU.e(70), gU.e(252), gU.e(246), gU.e(251), gU.e(249), gU.e(241), gU.e(218), gU.e(264), gU.e(222), gU.e(236), gU.e(247), gU.e(250), gU.e(74), gU.e(196), gU.e(215), gU.e(219), gU.e(93), gU.e(113), gU.e(234), gU.e(73), gU.e(112), gU.e(152)]).then((() => gU(40554)))))
      }
      openMob(UU) {
        return this.mobScene.run((RU => RU.openMobPreview(UU)))
      }
      openPet(UU) {
        return this.mobScene.run((RU => RU.openPetPreview(UU)))
      }
      openMobLineup(UU) {
        return this.mobScene.run((RU => RU.openMobLineupPreview(UU)))
      }
      openCharacter(UU, RU) {
        return this.characterScene.run((gU => gU.openCharacterPreview(UU, RU)))
      }
    }
    tU.i.setDefaultHost((() => new EU))
  },
  36373: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      h: () => EU
    });
    const tU = new Map;

    function pU(UU) {
      var RU;
      return null === UU ? null : null !== (RU = tU.get(UU)) && void 0 !== RU ? RU : null
    }

    function EU(UU, RU) {
      return tU.set(UU, RU), () => {
        tU.get(UU) === RU && tU.delete(UU)
      }
    }
  },
  36197: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      e: () => hU,
      g: () => QU,
      j: () => TU,
      n: () => jU,
      q: () => eU,
      r: () => GU,
      t: () => fU,
      w: () => CU,
      x: () => WU
    });
    var tU = gU(21),
      pU = gU(24);
    const EU = "clientGameInventoryButtonsChanged",
      PU = new Map;

    function TU() {
      return [...PU.values()].sort(((UU, RU) => {
        var gU, tU;
        return (null !== (gU = UU.order) && void 0 !== gU ? gU : 0) - (null !== (tU = RU.order) && void 0 !== tU ? tU : 0)
      }))
    }
    let qU = null;

    function KU(UU) {
      qU = UU
    }
    let cU = !1;

    function GU(UU) {
      cU = !0;
      try {
        UU.onClick()
      } finally {
        cU = !1
      }
      UU.panel && "clientGame" === tU.b.get("openInGameMenuName") && KU(UU.id)
    }

    function jU() {
      return cU
    }

    function uU() {
      return TU().filter((UU => UU.panel && !UU.disabled))
    }

    function CU(UU) {
      const RU = uU(),
        gU = RU.findIndex((UU => UU.id === qU));
      return !(gU < 0 || RU.length < 2) && (GU(RU[(gU + UU + RU.length) % RU.length]), !0)
    }

    function hU() {
      return null !== qU && uU().length > 1
    }

    function QU() {
      KU(null)
    }

    function eU() {
      "inventory" !== tU.b.get("openInGameMenuName") && KU(null)
    }

    function WU() {
      const UU = qU;
      return KU(null), UU
    }

    function fU(UU) {
      return PU.set(UU.id, UU), pU.p.yh(EU, TU(), !0), () => {
        PU.get(UU.id) === UU && (PU.delete(UU.id), pU.p.yh(EU, TU()))
      }
    }
  },
  36191: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      h: () => QU,
      l: () => eU,
      p: () => jU,
      t: () => KU,
      w: () => hU,
      x: () => uU,
      y: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(1287),
      PU = gU(36197);
    const TU = "clientGameUiChanged";
    let qU = null;

    function KU() {
      return qU
    }

    function cU(UU, RU) {
      const gU = {
        content: UU,
        menu: RU
      };
      return qU = gU, pU.p.yh(TU, qU, !0), () => {
        qU === gU && (qU = null, CU = !1, QU(), pU.p.yh(TU, null))
      }
    }
    let GU = null;

    function jU() {
      return GU
    }

    function uU(UU) {
      return GU = UU, () => {
        GU === UU && (GU = null)
      }
    }
    let CU = !1;

    function hU() {
      const UU = tU.b.get("openInGameMenuName");
      "clientGame" !== UU && (CU = "inventory" === UU), (0, PU.n)() || (0, PU.g)(), (0, EU.o)(EU.c), tU.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function QU() {
      WU(!1)
    }

    function eU() {
      WU(CU)
    }

    function WU(UU) {
      "clientGame" === tU.b.get("openInGameMenuName") && tU.b.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, PU.g)(), CU = !1
    }
  },
  36492: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => lR,
      f: () => NR
    });
    var tU = gU(3937),
      pU = gU(581),
      EU = gU(3398),
      PU = gU(3422),
      TU = gU.n(PU);
    const qU = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      KU = "EV_boolean",
      cU = "EV_double",
      GU = "EV_string",
      jU = "EV_doubleArr",
      uU = "EV_armour",
      CU = "EV_other",
      hU = "EV_cosmetics",
      QU = "OEV_boolean",
      eU = "OEV_int",
      WU = "OEV_double",
      fU = "OEV_string",
      xU = "OEV_stringArr",
      mU = "OEV_meshScaling",
      IU = "IV_int",
      JU = "IV_string",
      wU = "IV_doubleArr",
      nU = "IV_double",
      bU = "HV_int",
      oU = "HV_slots",
      ZU = "EnvV_string",
      aU = "EnvV_double",
      YU = "EnvV_doubleArr",
      BU = "EnvV_boolean",
      VU = {
        type: GU,
        name: GU,
        position: jU,
        rotation: jU,
        scale: cU,
        speed: cU,
        jumping: KU,
        crouching: KU,
        cameraPitch: cU,
        armSwinging: KU,
        heldItemName: GU,
        heldItemEnchantmentTier: GU,
        pose: GU,
        followingEId: GU,
        ridingVehicleEId: GU,
        leaderboardTop: GU,
        meshKind: GU,
        meshOpts: GU,
        followingOffset: jU,
        shouldMatchFollowingEntityRotation: KU,
        meshOffset: jU,
        baseRenderHeading: cU,
        armour: uU,
        FY: CU,
        playerCustomisations: hU,
        variation: GU,
        metaInfo: GU,
        soundName: GU,
        volume: cU,
        refDistance: cU,
        maxHearDist: cU,
        rate: cU,
        aiState: GU
      },
      rU = {
        opacity: WU,
        zIndex: eU,
        overlayColour: fU,
        canSee: QU,
        meshScaling: mU,
        nameTagInfo: fU,
        multilineTextBox: fU,
        hasPriorityNametag: QU,
        ranks: xU,
        nameColour: fU,
        _isAlive: QU,
        _invisibleEffect: QU,
        _invincible: QU,
        killfeedColour: fU,
        hideNameSeed: eU,
        _glowingEffect: QU,
        lockHeadToBody: QU
      },
      XU = {
        itemName: JU,
        amount: IU,
        position: wU,
        size: nU,
        attributes: JU
      },
      vU = {
        skyBox: ZU,
        fogColourOverride: ZU,
        fogChunkDistanceOverride: aU,
        cameraTint: YU,
        fogOnSkybox: BU,
        fogBlockDistanceOverride: aU
      },
      dU = {
        type: "array",
        items: "double"
      },
      HU = {
        type: "array",
        items: "int"
      },
      SU = {
        type: "map",
        values: {
          type: "record",
          name: "RecordedArmourPiece",
          fields: [{
            name: "itemName",
            type: "string"
          }, {
            name: "enchantmentTier",
            type: ["null", "string"],
            default: null
          }]
        }
      },
      sU = {
        type: "map",
        values: dU
      };

    function yU(UU, RU) {
      return {
        type: "record",
        name: UU,
        fields: [{
          name: "x",
          type: RU
        }]
      }
    }
    const kU = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", yU(QU, "boolean"), yU(eU, "int"), yU(WU, "double"), yU(fU, "string"), yU(xU, {
              type: "array",
              items: "string"
            }), yU(mU, sU)]
          }]
        }
      },
      FU = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", yU(KU, "boolean"), yU(cU, "double"), yU(GU, "string"), yU(jU, dU), yU(uU, SU), yU(CU, kU), yU(hU, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      iU = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", yU(IU, "int"), yU(JU, "string"), yU(nU, "double"), yU(wU, dU)]
          }]
        }
      },
      AU = {
        type: "map",
        values: ["null", {
          type: "record",
          name: "RecordedHotbarSlot",
          fields: [{
            name: "name",
            type: "string"
          }, {
            name: "amount",
            type: ["null", "int"],
            default: null
          }, {
            name: "attributes",
            type: "string"
          }]
        }]
      },
      zU = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", yU(bU, "int"), yU(oU, AU)]
        }]
      },
      MU = {
        type: "array",
        items: {
          type: "record",
          name: "PlayerHudDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", "int", "double"]
          }]
        }
      },
      DU = {
        type: "array",
        items: {
          type: "record",
          name: "UiElementsDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", "string"]
          }]
        }
      },
      LU = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", yU(ZU, "string"), yU(aU, "double"), yU(YU, dU), yU(BU, "boolean")]
          }]
        }
      },
      NU = [{
        name: "mw",
        type: "record",
        fields: [{
          name: "pos",
          type: HU
        }, {
          name: "fromBlockId",
          type: "int"
        }, {
          name: "toBlockId",
          type: "int"
        }, {
          name: "fromBlockData",
          type: ["null", "string"],
          default: null
        }, {
          name: "toBlockData",
          type: ["null", "string"],
          default: null
        }]
      }, {
        name: "setBlockData",
        type: "record",
        fields: [{
          name: "pos",
          type: HU
        }, {
          name: "fromBlockData",
          type: ["null", "string"],
          default: null
        }, {
          name: "toBlockData",
          type: ["null", "string"],
          default: null
        }]
      }, {
        name: "chunkAdded",
        type: "record",
        fields: [{
          name: "chunkX",
          type: "int"
        }, {
          name: "chunkY",
          type: "int"
        }, {
          name: "chunkZ",
          type: "int"
        }, {
          name: "rle",
          type: "bytes"
        }, {
          name: "sharedBlockData",
          type: "string"
        }]
      }, {
        name: "chunkRemoved",
        type: "record",
        fields: [{
          name: "chunkX",
          type: "int"
        }, {
          name: "chunkY",
          type: "int"
        }, {
          name: "chunkZ",
          type: "int"
        }, {
          name: "rle",
          type: "bytes"
        }, {
          name: "sharedBlockData",
          type: "string"
        }]
      }],
      lU = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "Yp",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "rp",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "Xp",
              type: ["null", "string", dU],
              default: null
            }, {
              name: "vp",
              type: ["null", "double"],
              default: null
            }, {
              name: "dp",
              type: ["null", "double"],
              default: null
            }]
          }],
          default: null
        }]
      }, {
        name: "animateEntity",
        type: "record",
        fields: [{
          name: "uE",
          type: "string"
        }, {
          name: "CE",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "hE",
          type: "double"
        }, {
          name: "QE",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "yg",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: dU
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "gR",
          type: "string"
        }, {
          name: "ZR",
          type: ["null", "double"],
          default: null
        }, {
          name: "aR",
          type: ["null", "double"],
          default: null
        }]
      }, {
        name: "particleEffectPlayed",
        type: "record",
        fields: [{
          name: "opts",
          type: "string"
        }]
      }, {
        name: "flyingMiddleText",
        type: "record",
        fields: [{
          name: "content",
          type: "string"
        }, {
          name: "rE",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "XE",
          type: "int"
        }]
      }, {
        name: "playerKilled",
        type: "record",
        fields: [{
          name: "deadEId",
          type: "string"
        }, {
          name: "killerEId",
          type: "string"
        }, {
          name: "withItem",
          type: "string"
        }, {
          name: "killstreak",
          type: "int"
        }]
      }, {
        name: "customKillfeed",
        type: "record",
        fields: [{
          name: "killer",
          type: {
            type: "record",
            name: "RecordedKillfeedParty",
            fields: [{
              name: "eId",
              type: ["null", "string"],
              default: null
            }, {
              name: "name",
              type: ["null", "string"],
              default: null
            }, {
              name: "colour",
              type: ["null", "string"],
              default: null
            }]
          }
        }, {
          name: "victim",
          type: "RecordedKillfeedParty"
        }, {
          name: "withItem",
          type: "string"
        }]
      }],
      OU = [{
        name: "position",
        type: dU
      }, {
        name: "direction",
        type: dU
      }, {
        name: "firstPerson",
        type: "boolean"
      }, {
        name: "aiming",
        type: "boolean"
      }, {
        name: "reloading",
        type: "boolean"
      }, {
        name: "charging",
        type: "boolean"
      }];

    function UR() {
      const UU = [{
        name: "entities",
        type: {
          type: "map",
          values: FU
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: iU
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: OU
        }
      }, {
        name: "hotbar",
        type: ["null", {
          type: "record",
          name: "HotbarFieldDelta",
          fields: [{
            name: "fullSlotsArray",
            type: "boolean"
          }, {
            name: "entries",
            type: {
              type: "array",
              items: zU
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", MU],
        default: null
      }];
      return UU.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "gR",
              type: "string"
            }, {
              name: "name",
              type: "string"
            }, {
              name: "icon",
              type: "string"
            }, {
              name: "level",
              type: "float"
            }, {
              name: "displayName",
              type: ["null", "string"],
              default: null
            }, {
              name: "endTick",
              type: ["null", "int"],
              default: null
            }, {
              name: "showInNametag",
              type: "boolean"
            }]
          }
        }],
        default: null
      }), UU.push({
        name: "uiElements",
        type: DU
      }, {
        name: "environment",
        type: LU
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: NU
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: lU
        }
      }), UU
    }
    const RR = {
      name: "editState",
      type: {
        type: "record",
        name: "ReplayEditState",
        fields: [{
          name: "cameraKeyframes",
          type: {
            type: "array",
            items: {
              type: "record",
              name: "ReplayCameraKeyframe",
              fields: [{
                name: "HG",
                type: "int"
              }, {
                name: "position",
                type: dU
              }, {
                name: "direction",
                type: dU
              }, {
                name: "easing",
                type: dU
              }]
            }
          }
        }, {
          name: "playbackMark",
          type: ["null", {
            type: "record",
            name: "ReplayPlaybackMark",
            fields: [{
              name: "inTick",
              type: "int"
            }, {
              name: "outTick",
              type: "int"
            }]
          }],
          default: null
        }]
      }
    };
    let gR;

    function tR(UU) {
      if (9 === UU) return gR ??= (RU = [{
        name: "meta",
        type: {
          type: "record",
          name: "RecordingMeta",
          fields: [{
            name: "formatVersion",
            type: "int"
          }, {
            name: "recordedAt",
            type: "string"
          }, {
            name: "bZ",
            type: "int"
          }, {
            name: "keyframeIntervalTicks",
            type: "int"
          }, {
            name: "gameNameWithVariation",
            type: "string"
          }, {
            name: "lobbyName",
            type: "string"
          }, {
            name: "gameName",
            type: "string"
          }, {
            name: "variation",
            type: ["null", "string"],
            default: null
          }, {
            name: "lobbyType",
            type: "int"
          }, {
            name: "localPlayerEntityId",
            type: "string"
          }, {
            name: "serverPlayerEntityId",
            type: "string"
          }]
        }
      }, {
        name: "initialChunks",
        type: {
          type: "array",
          items: {
            type: "record",
            name: "InitialChunk",
            fields: [{
              name: "chunkPos",
              type: HU
            }, {
              name: "rle",
              type: "bytes"
            }, {
              name: "sharedBlockData",
              type: "string"
            }]
          }
        }
      }, {
        name: "ticks",
        type: {
          type: "array",
          items: {
            type: "record",
            name: "RecordingTick",
            fields: UR()
          }
        }
      }, RR], TU().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: RU
      }, {
        Mj: Object.create(null)
      })), gR;
      var RU
    }
    var pR = gU(36497);
    let ER, PR, TR, qR;
    const KR = 12;
    var cR, GR;
    const jR = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, 2, 127, 128, "js", 16, 132, 4, !0, 133, 134, 15, void 0, !1, 10, 5, 11, 9, 33554432, 67108864];

    function uR(UU) {
      return typeof gg !== jR[5] && gg ? (new gg).decode(new tg(UU)) : typeof pg !== jR[5] && pg ? pg.from(UU).toString("utf-8") : Tg(UU)
    }

    function CR() {}

    function hR() {
      hR = function() {}
    }
    var QR, eR;
    hR(cR = {}, GR = ["FQp:H`R9><3!Gt~ZNDT4INDIe+X6#Xyr5+~d", "%MnB%+aY", ";dmE^35Y7f}|;XFJ#;Yii|E(]+t*zjVQCCp:BHC^p,RhiY", "4%D2RyjIU1R;GQQZB=S3~jR{GO8u4if;#<2dVz/n1Ogz}XX0QNY", "fGaBDvM{~^8o8a>J}PTm", "IG;9pFqoa)`,{ZxikGeMjN.kkah", "Txm2X[qo9Jv)~Fl5u1,>U6Uc[JcTS", ';a"M3>PmKDV.GH}eNDjiwej7{#oGsqcD7hLd"<4mUODW{_(~', "Vwp3GM@;(^x>QQLrRnG9|z&kt", 'lXw?f6>kWouaD3rgxz9B%*}e!f+V$Y;(O,RGe7I`{oE6?X;"J?V:]vichP', 'DQ(G/`F{$f`Z~^XZ"M9cy9"0hP', "`q.wVzqY", "Z:_Mb_39cq=wJv74G=5|,6]%pdI<7^@2!?tBS]L(OqvM^ZN2NN#jnT1Y", ".Xr:)?b^]JrO1XBZ%A,+!`KS", "Zr>pOMCow1fF=H)iJ,(?3e#[Bzihl5oHh4s:U~V[PO^7%Ip%KAfG", 'gnvo^{5oTO]@"hG5EMRGy9<Okn&cK*BZIlDWPp^^sD@#pZT08qcB', 'e+;EMzs7pd9m7YGQ9k`pt)?cb#!G<*^"YA|C', '&l:?,M#0~^*@&X8"D{]c".zMc<}Q_C}DD%@tj#VM%^V7ZRG5Y,I+DHl;gD', 'Uz+w^FtZRngXJr=H2M"ca~}', 'N"9c8A}gkJ73]h~4K09ug*iIK12B:<E5XdYWqT);:n!^6qO', "=Q3dLMjIhn[L]L!iS7PMe.bndqjTWrMH/gv)eWRFx<w7^OL", ">l}?S[L(sKwSIFW~wNm||T:0M<,0S", "MhA+F69^z0>#6Yy%UG]pVawcNdW#o~J(`?*o_aV0InoNC~B", "<h[9lhsJ2,<PFOa(!ascz{l(9OAm.InHi=;+a^US", "vlu>>MHeyA}1e<y%5N}2zuZIdDJ^~^XZD+u91", '10A?$v7Ay0SRvY8";du4Ejc7A1E6HFn', "mnc4s.;)%1!X.iSe`q_4@)d,4LIw7X8;t=f?)u}", ':hl:9]@(>KH"xh#"fw]uQw}', "Cs=C{.}", 'Hc&G5=+N"z5Gy31%ojcm', "J?diYy.MF^Wj1I,D;A/cO", "W?2wGyOIa)ilJY72D:X", 'n%Uje<g2_q/eRvTQPlU"OM)(alQ>hL*"+qZ?NM}', ']4D+)~k9WqID4rqrUlq>b.<(Vn@oHj;koC"cfMG9VA}R]v]i:cTUp*g0DAj', "2{S:YaYguK9", "5d1M]vl7iD/!AC5g", 'qslGGM1M<D2^"i*~U=G4U]1Y', "iLCM:IJS", "jX4>>TB^C", 'P?(27`0Fx)>,th"2~X?)mM}', "jdTpE=W`AlbD`.8R2ak?!H7AXAkhGy.k~;Z?7%a^fny)hX", 'j+{m6x:.efGkVQe2oA["_~(Jl,ZOte^e4L@:DH[^@+QD+Z01glS', "AdNB0|fnr<|)FylQ&K~9D>bngze3s=AcOS", 'w4nuqTZ)GO_VgO2;R+:Wqpu(ydJ31I<;;{BWc%q{3Df"9idZOs+CP9}', "1%[CU]q5/1b", "Y+?:]vC2jd3.<^Ee64]ciIv`iljTch@D9r!U;<o0Kl4i?*v(1=s3*E7I^<9PS", "fhOm.H|[rqJT5=bH6<6wY)ySFO", "vh,>5HrMEd7kXF4c_h@Byz%%fL,CjhBZ,<}d/+$AdD@09<mJ", "_XREI?Imh).:5X", "hkEiQWkfvA26UHreqApcIu6cxz&Fm=~H3zr:C),(MK?>J=mH", "3+m9~+29.)tN!q3Z*qY:%Wv6XdFw&X$!L0Yic", 'Cs~C*ErYczriAC30Ud@)Bp^2<<NuX=72~h~"aFxSxo3uahWZvqZi,6f^Mzh', "RadGxWvOgl,<XFig/K0?HjK(zLr3/TKJ%=j:a]}", "|19ueN)mx#(73L5cux~G+Q.n]dn1d]Uc", "VwE2HN)I;1", 'gDsc?~F2COv{fX[(kQw?Se,?Xn<#Th:gnjvtxutOR,S|qtZ".xX', "Ad~>Ck,cL0Y3:REQ_NYcXz6S", "M<j3jWw(u)(zZhC2WNf+weJOef3aQCg~W<Y", "m+>)Wp92x<&F[YZ;r{r:FhQAfayt+jY29XIdQI}", "iMtUqAJmz)8SPeY5Az%w+)b9Mzf9Lpicl;U9.y3nZDyaO]}0gGCtZ<Pm:n", "?%fdMajJi1)ZhX3HA=aU,{$S]Js7.72c#1G4s7<OVd6)_3@0Vx1MyEtTC", "YasB+~VnNAL1LYFZ{Qo|S]}", '.zFwv|g2*nv,ip=4sl`"BAH99f_0^yRr,4+>r<bYt', 'Al"U6A);kASl|TS4', "~NlGvzy(GJTuNC&c", 'A;}d09>{"zdQY_yi7ay+|pH0t', "9A8G^)NnxPKRcCeD@+9muvZTC", "<=AGnzf2:0KGIq$kgM9B", '=d"M#{%.S,03sIRi^%"MP', 'BQOU_uSJ3^p"%XL', "U?vrrwvS0A7U3X", "oAN=/v7cbDlj=^(4HNX", '31!CI,%9u#~<:<<D~;u44+"5xV`0RX1iOL?3#awcdUWM.Lt54MnB', "Kr@:yzRF^z2U[ZtQNDSi|M52wD|LQ3bJE?S|O>(It", "7swGLprMSd!>Gt`%5L@:@k$;XJ,<.<.r!{LGb+3^8llwBH]!eAY3MTCoBq(>}", '"17u,kL)jLIDSa/"o{j?HN551+E', "Lr{C(IiJyAbPjaO1)+ecX[#%J+xwIi!iq:KuWv|Gbz$:Jp:0", "2+UGrvt(<o$A_al4TgG9A]K(JJZO9<?iVx#j/9?OXasPHQSe|F]u$A~A:,=!S", "%XEGFMGeWzTwy37D3z|>pF#Y", 'CdK3!|m)mfhqq_34wh?37W@clA`:VZ8"FhD+1pC^sz+qFj}sm:=wf]"eX', '`"4>{u,IxqKU.in~Gs;"#*>5^KfP$YFJm=fdY].%Xd56Eh)7Cnfj0A5Y', "BAu4Kz}", '}cq4x,~S*L}=PRA(m;=C+)*nELYk&<A"r+B37<4(bl<u&7[kDGF"0H}', '@D$"Oe.GvdP1HZ+%{lS', "Tx?oz6b5<K?0IH}5c{iBmy=WXd$apjk5o{+Ck7J)nPv#YQ;cYPMo7+yS", "$h5jP>uSq<2zfL22P{8o", "CNhG&v2nEdL3way%UXgW3e$Am", 'srKcY]d,p+O3DRd~0LDW"915s#DT>X', "K{D3[p]9pd7<YZ@47kKu/AHfIP]@/rXsX0oEwz}", ">k8+$>*9RVL6JYB", ":Qd2T6g%<q0i`5YQw?#j~7P7FO@o>i/(HANBL>U7<##", 'V"X:mU2M?dii_e}s&<_BDUqY', "/XG49?mm}V,9QhC0?1;j=p=ced1W}", '?1+"GhlAu)HDw3<g~zyGfUYeW#u)8CUk', "KnTmwzQWp+?wN3>~w<~d", "Ya]ccw}", "9G#dGeST>q7THr@QzqA?#^wT@J#ZHj2gVz<:>>39t^}1@qmQ:%X", "n{C4A)}", ".FR2tT`Od1g5&725n;g?#,^%o1yZdaSs|KQBdaV^:LR2MZ]!{khd<?aYso<KS", "adHU0A%YHJzmS", ">N+mUFa0y+V<JrO~!{FC;9VG6,@F}", "s=!dF3>%*J4m.=uJ5ak?rH15bzs<^_sZVg/o", '@d$jnhq9J+26dh9"tN~9c.n0*d.{4*$!M1_MU{ycJ+bqKYFQU}', 'Sn4"WT2.V+Hk5=KHYA*?(.gYgD&S?*0%[}', "Dr0:~wS7u)$ZCL]i_l^:;=DZ51>ju5G0@4?c]pTAx<9,K*^g=dQU#F}e6#~", "mrxMb_WO3195B_]%;:D|n", "0AzUgW/%qLD5|TuiMz[4swe07f3uA5c7BS", "911uYy<(<l23HYS4pd4w{u`A3^R6#aVQWKQ45|_;knOlu5@QXMS|upg.lAZ", 'ux2w.yfnQ+9T7^,2J,r3s7vm+^"l&LE5sl]tQQ#%<1_', "&1tMiH=mjd=@;<]k>x,9[xg9o1=CgO@eA%|mP", "uzbut6m$6LAw;=4cXanU,a25WD0?_3OJ#=Rd", "tNbBb,i7$^2Un<!kXLX", ",+(2~*2M/z:1|jc;^%G>/vW?dlM!4r]!LQXc!%g09+[eDh/cuDZ2k_:Y", "eAG4t)n[hn6KWqT5fN[jm6zneJ:i)3JkM1Y", "?kOm}UySsqKWJqG5xzIjvTLZdDxUhL|iJ+bc:|xO#^t_~*wZ)x~CI~}", "g%Fmk`kMzoueu5U(AD}+aaOyRVJ6.=:0)N,CU6OT1fbD&vd4ah@BWM_O,,5iS", "QLyW+{+Y", "=+*!xRN5", "9|_,sjvv", "gf3LY_L0", "cHYLc!w0", "sMb3S9l0", "&uq,3", "mhRU*RK`", "|+Uritb`", "MMC>}", "|thbw|g0", "ar.d7j9x", "U#[=!&::", "}lCA#.a0", "^.[L1$p0", "mx~FE", "Hf{`", ">fila5uZ", "Lx2d", "N%BxwnOZ", "@fR$A[pZ", ",^d|i?*o", "7jxk", "8_T~", "%jJUlV_o", "XYcCjmE}"]), hR(Rg = function() {
        var UU, RU, gU, tU = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        hR(UU = void 0, RU = []);
        try {
          hR(UU = Object, RU[jR[11]]("".__proto__.constructor.name))
        } catch (tg) {}
        UU: for (gU = jR[0]; gU < tU[jR[4]]; gU++) try {
          var pU;
          for (UU = tU[gU](), pU = jR[0]; pU < RU[jR[4]]; pU++)
            if (typeof UU[RU[pU]] === jR[5]) continue UU;
          return UU
        } catch (tg) {}
        return UU || this
      }() || {}, gg = Rg.TextDecoder, tg = Rg.Uint8Array, pg = Rg.tC, Eg = Rg.String || String, Pg = Rg.Array || Array, Tg = function() {
        var UU, RU, gU = new Pg(jR[20]);
        return hR(UU = Eg[jR[8]] || Eg.fromCharCode, RU = []),
          function(tU) {
            var pU, EU, PU, TU;
            for (hR(EU = void 0, PU = tU[jR[4]], RU[jR[4]] = jR[0]), TU = jR[0]; TU < PU;) hR(EU = tU[TU++], EU <= jR[19] ? pU = EU : EU <= 223 ? pU = (31 & EU) << jR[7] | tU[TU++] & jR[6] : EU <= 239 ? pU = (EU & jR[28]) << jR[10] | (tU[TU++] & jR[6]) << jR[7] | tU[TU++] & jR[6] : Eg[jR[8]] ? pU = (EU & jR[9]) << 18 | (tU[TU++] & jR[6]) << jR[10] | (tU[TU++] & jR[6]) << jR[7] | tU[TU++] & jR[6] : (pU = jR[6], TU += jR[17]), RU[jR[11]](gU[pU] || (gU[pU] = UU(pU))));
            return RU.join("")
          }
      }()),
      function(UU) {
        return typeof cR[UU] === jR[5] ? cR[UU] = function(UU) {
          var RU, gU, tU, pU, EU, PU, TU;
          for (hR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = jR[0], EU = jR[0], PU = -jR[1]), TU = jR[0]; TU < gU; TU++) {
            var qU = '}SYXCtGmodBKnOqLRD0J1P!;5Zri"c24:Ek7eQH~%(gsbx{Ihjp?9)+U#A^<a_z,flV@NTF=3wMW>u|6.y*v]`[$&8/'.indexOf(RU[TU]);
            if (qU !== -jR[1])
              if (PU < jR[0]) PU = qU;
              else {
                hR(PU += qU * jR[12], pU |= PU << EU, EU += (PU & jR[13]) > jR[14] ? jR[15] : jR[16]);
                do {
                  hR(tU.push(pU & jR[3]), pU >>= jR[2], EU -= jR[2])
                } while (EU > jR[9]);
                PU = -jR[1]
              }
          }
          return PU > -jR[1] && tU.push((pU | PU << EU) & jR[3]), uR(tU)
        }(GR[UU]) : cR[UU]
      }(116) in CR && function() {
        function UU(UU) {
          var RU, gU, tU, pU, EU, PU, TU, qU = 'uv5@$y~#]|(<dP*c;hNtwrCfM3KkpH/x,LBU&).+g6EezA9}{!IWZFXsV>`YDJ"2q^1_7ojRi8S?n%m[b=l:0aGQT4O';
          for (hR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = jR[0], EU = jR[0], PU = -jR[1]), TU = jR[0]; TU < gU; TU++) {
            var KU = qU.indexOf(RU[TU]);
            if (KU !== -jR[1])
              if (PU < jR[0]) PU = KU;
              else {
                hR(PU += KU * jR[12], pU |= PU << EU, EU += (PU & jR[13]) > jR[14] ? jR[15] : jR[16]);
                do {
                  hR(tU.push(pU & jR[3]), pU >>= jR[2], EU -= jR[2])
                } while (EU > jR[9]);
                PU = -jR[1]
              }
          }
          return PU > -jR[1] && tU.push((pU | PU << EU) & jR[3]), uR(tU)
        }

        function RU(RU) {
          return typeof cR[RU] === jR[5] ? cR[RU] = UU(GR[RU]) : cR[RU]
        }
        const gU = require("path"),
          {
            version: tU
          } = require("../../package"),
          {
            version: pU
          } = require("@redacted/enterprise-plugin/package"),
          {
            version: EU
          } = require("@redacted/components/package"),
          {
            sdkVersion: PU
          } = require("@redacted/enterprise-plugin");
        require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), gU.resolve(__dirname, RU(117) + RU(118) + jR[21])
      }(), (() => {
        function UU(UU) {
          return typeof cR[UU] === jR[5] ? cR[UU] = function(UU) {
            var RU, gU, tU, pU, EU, PU, TU;
            for (hR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = jR[0], EU = jR[0], PU = -jR[1]), TU = jR[0]; TU < gU; TU++) {
              var qU = 'NC0USTo(VD/Pmd}u<FwO6rp~W+3g#2j&Lq:Y*^Gifx`]e)a"%QI?nMA$8c;Klz{JtB7[H9,.=sv_1!ER4X@by5|hkZ>'.indexOf(RU[TU]);
              if (qU !== -jR[1])
                if (PU < jR[0]) PU = qU;
                else {
                  hR(PU += qU * jR[12], pU |= PU << EU, EU += (PU & jR[13]) > jR[14] ? jR[15] : jR[16]);
                  do {
                    hR(tU.push(pU & jR[3]), pU >>= jR[2], EU -= jR[2])
                  } while (EU > jR[9]);
                  PU = -jR[1]
                }
            }
            return PU > -jR[1] && tU.push((pU | PU << EU) & jR[3]), uR(tU)
          }(GR[UU]) : cR[UU]
        }
        UU(119) + "M" in CR && function() {
          var UU = function(UU) {
            var RU, gU, tU, pU, EU, PU, TU = jR[0];
            for (hR(RU = {}, gU = jR[0], tU = jR[0], pU = jR[0], EU = UU.length), PU = jR[0]; PU < EU; PU++) {
              var qU;
              for (hR(RU = {}, gU = jR[0], tU = jR[1]), qU = PU + jR[1]; qU < EU; qU++) UU[PU].x !== UU[qU].x || UU[PU].y !== UU[qU].y ? (RU[pU = UU[PU].y === UU[qU].y ? Number.MAX_SAFE_INTEGER : (UU[PU].x - UU[qU].x) / (UU[PU].y - UU[qU].y)] || (RU[pU] = jR[0]), hR(RU[pU]++, gU = Math.max(gU, RU[pU]))) : tU++;
              hR(gU += tU, TU = Math.max(TU, gU))
            }
            return TU
          };
          console.log(UU)
        }();
        const RU = jR[22],
          gU = UU(120) + UU(121) + UU(122),
          tU = [jR[0], jR[1], jR[18], jR[17]].map((UU => {
            function RU(UU) {
              return typeof cR[UU] === jR[5] ? cR[UU] = function(UU) {
                var RU, gU, tU, pU, EU, PU, TU;
                for (hR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = jR[0], EU = jR[0], PU = -jR[1]), TU = jR[0]; TU < gU; TU++) {
                  var qU = 'Ax`QuPL:)vX0T9BH3JfW5.F+z?a;%h4&yn7~c1#ibwmN<skt"[pCUr|]EY=*VIKloG,>!2R^d_g6(@eqSZM}Dj{O/8$'.indexOf(RU[TU]);
                  if (qU !== -jR[1])
                    if (PU < jR[0]) PU = qU;
                    else {
                      hR(PU += qU * jR[12], pU |= PU << EU, EU += (PU & jR[13]) > jR[14] ? jR[15] : jR[16]);
                      do {
                        hR(tU.push(pU & jR[3]), pU >>= jR[2], EU -= jR[2])
                      } while (EU > jR[9]);
                      PU = -jR[1]
                    }
                }
                return PU > -jR[1] && tU.push((pU | PU << EU) & jR[3]), uR(tU)
              }(GR[UU]) : cR[UU]
            }
            RU(123) in CR && function() {
              const UU = require("big-integer");
              class RU {
                static randomPrime(RU) {
                  const gU = UU.one.shiftLeft(RU - jR[1]),
                    tU = UU.one.shiftLeft(RU).prev();
                  for (; jR[25];) {
                    let RU = UU.randBetween(gU, tU);
                    if (RU.isProbablePrime(256)) return RU
                  }
                }
                static generate(RU) {
                  const gU = UU(65537);
                  let tU, pU, EU;
                  do {
                    hR(tU = this.randomPrime(RU / jR[18]), pU = this.randomPrime(RU / jR[18]), EU = UU.lcm(tU.prev(), pU.prev()))
                  } while (UU.gcd(gU, EU).notEquals(jR[1]) || tU.minus(pU).abs().shiftRight(RU / jR[18] - 100).isZero());
                  return {
                    e: gU,
                    n: tU.multiply(pU),
                    d: gU.modInv(EU)
                  }
                }
                static encrypt(RU, gU, tU) {
                  return UU(RU).modPow(tU, gU)
                }
                static decrypt(RU, gU, tU) {
                  return UU(RU).modPow(gU, tU)
                }
                static encode(RU) {
                  const gU = RU.split("").map((UU => UU.charCodeAt())).join("");
                  return UU(gU)
                }
                static decode(UU) {
                  const RU = UU.toString();
                  let gU = "";
                  for (let tU = jR[0]; tU < RU.length; tU += jR[18]) {
                    let UU = Number(RU.substr(tU, jR[18]));
                    UU <= 30 ? (gU += String.fromCharCode(Number(RU.substr(tU, jR[17]))), tU++) : gU += String.fromCharCode(UU)
                  }
                  return gU
                }
              }
              module.exports = RU
            }();
            let tU = jR[0];
            for (let pU = jR[17]; pU >= jR[0]; pU--) {
              function EU(UU) {
                var RU, gU, tU, pU, EU, PU, TU;
                for (hR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = jR[0], EU = jR[0], PU = -jR[1]), TU = jR[0]; TU < gU; TU++) {
                  var qU = 'XjrlG>#A~29ay3@M.!$E;1N5qV(0]}7J<_p+bIm8/v"U^&[zHg?Zc,s6xKdnB:LSfu*|CwW4%`{D)kQ=FeotROThPiY'.indexOf(RU[TU]);
                  if (qU !== -jR[1])
                    if (PU < jR[0]) PU = qU;
                    else {
                      hR(PU += qU * jR[12], pU |= PU << EU, EU += (PU & jR[13]) > jR[14] ? jR[15] : jR[16]);
                      do {
                        hR(tU.push(pU & jR[3]), pU >>= jR[2], EU -= jR[2])
                      } while (EU > jR[9]);
                      PU = -jR[1]
                    }
                }
                return PU > -jR[1] && tU.push((pU | PU << EU) & jR[3]), uR(tU)
              }

              function PU(UU) {
                return typeof cR[UU] === jR[5] ? cR[UU] = EU(GR[UU]) : cR[UU]
              }
              tU = tU << jR[2] | gU[RU(124) + PU(125)](UU * jR[24] + pU)
            }
            return tU >>> jR[0]
          })),
          pU = (UU, RU) => UU << RU | UU >>> 32 - RU,
          EU = (UU, RU, gU, tU, EU) => {
            (function(UU) {
              return typeof cR[UU] === jR[5] ? cR[UU] = function(UU) {
                var RU, gU, tU, pU, EU, PU, TU;
                for (hR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = jR[0], EU = jR[0], PU = -jR[1]), TU = jR[0]; TU < gU; TU++) {
                  var qU = 'c0EtbSDI;396V.!ed{@wfNH5OP?xmohY,`4K[UJgjz<nQy"M_}/RklGa:FW8Bi&As2vXC=7$Z^>Tqp~(r|+1L)u#]%*'.indexOf(RU[TU]);
                  if (qU !== -jR[1])
                    if (PU < jR[0]) PU = qU;
                    else {
                      hR(PU += qU * jR[12], pU |= PU << EU, EU += (PU & jR[13]) > jR[14] ? jR[15] : jR[16]);
                      do {
                        hR(tU.push(pU & jR[3]), pU >>= jR[2], EU -= jR[2])
                      } while (EU > jR[9]);
                      PU = -jR[1]
                    }
                }
                return PU > -jR[1] && tU.push((pU | PU << EU) & jR[3]), uR(tU)
              }(GR[UU]) : cR[UU]
            })(126) in CR && function() {
              function UU(UU) {
                var RU, gU, tU, pU, EU, PU, TU, qU = 'C:xuv`3>}#0/f].A,H9+2iqp~R<)OQG7=w?J_X{roV8DEyUBLdmeWM|!*n5;1bKz4$%[TI&j(PYghc6F"aN^tlSsZk@';
                for (hR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = jR[0], EU = jR[0], PU = -jR[1]), TU = jR[0]; TU < gU; TU++) {
                  var KU = qU.indexOf(RU[TU]);
                  if (KU !== -jR[1])
                    if (PU < jR[0]) PU = KU;
                    else {
                      hR(PU += KU * jR[12], pU |= PU << EU, EU += (PU & jR[13]) > jR[14] ? jR[15] : jR[16]);
                      do {
                        hR(tU.push(pU & jR[3]), pU >>= jR[2], EU -= jR[2])
                      } while (EU > jR[9]);
                      PU = -jR[1]
                    }
                }
                return PU > -jR[1] && tU.push((pU | PU << EU) & jR[3]), uR(tU)
              }

              function RU(RU) {
                return typeof cR[RU] === jR[5] ? cR[RU] = UU(GR[RU]) : cR[RU]
              }
              const gU = require("path"),
                {
                  version: tU
                } = require("../../package"),
                {
                  version: pU
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: EU
                } = require("@redacted/components/package"),
                {
                  sdkVersion: PU
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), gU.resolve(__dirname, RU(jR[19]) + RU(jR[20]) + jR[21])
            }(), hR(UU[RU] += UU[gU], UU[EU] = pU(UU[EU] ^ UU[RU], jR[22]), UU[tU] += UU[EU], UU[gU] = pU(UU[gU] ^ UU[tU], jR[10]), UU[RU] += UU[gU], UU[EU] = pU(UU[EU] ^ UU[RU], jR[2]), UU[tU] += UU[EU], UU[gU] = pU(UU[gU] ^ UU[tU], jR[9]))
          };
        qR = (gU, pU, PU, TU) => {
          function qU(UU) {
            return typeof cR[UU] === jR[5] ? cR[UU] = function(UU) {
              var RU, gU, tU, pU, EU, PU, TU;
              for (hR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = jR[0], EU = jR[0], PU = -jR[1]), TU = jR[0]; TU < gU; TU++) {
                var qU = '0BZGd7CaFc`I*kNf8,>!R{v@#^pewEHsl3WYP2ut1/6S<.OT?rMKm:x]&yjq%(V}Q_LihX9n4z5JU$Agb[o~"=+D;|)'.indexOf(RU[TU]);
                if (qU !== -jR[1])
                  if (PU < jR[0]) PU = qU;
                  else {
                    hR(PU += qU * jR[12], pU |= PU << EU, EU += (PU & jR[13]) > jR[14] ? jR[15] : jR[16]);
                    do {
                      hR(tU.push(pU & jR[3]), pU >>= jR[2], EU -= jR[2])
                    } while (EU > jR[9]);
                    PU = -jR[1]
                  }
              }
              return PU > -jR[1] && tU.push((pU | PU << EU) & jR[3]), uR(tU)
            }(GR[UU]) : cR[UU]
          }
          const KU = new DataView(pU[UU(129)], pU[UU(130) + qU(131)], KR),
            cU = new Uint32Array(RU);
          hR(cU[qU(jR[23])](tU), cU[qU(jR[23])](gU, jR[24]), cU[jR[15]] = KU[qU(jR[26]) + qU(jR[27])](jR[0], jR[25]), cU[jR[16]] = KU[qU(jR[26]) + qU(jR[27])](jR[24], jR[25]), cU[jR[28]] = KU[qU(jR[26]) + qU(jR[27])](jR[2], jR[25]));
          const GU = new Uint32Array(RU),
            jU = new Uint8Array(GU[qU(135)]);
          for (let uU = jR[0], CU = PU; uU < TU[qU(136)]; uU += RU * jR[24], CU++) {
            function hU(UU) {
              var RU, gU, tU, pU, EU, PU, TU;
              for (hR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = jR[0], EU = jR[0], PU = -jR[1]), TU = jR[0]; TU < gU; TU++) {
                var qU = '1aosnWq<P~kNB!Hj:(ACJx;%rX_y9#73|/ER$Obp>`}t["D8G=M,*]m4f^Y)cgieTdz6uFK25QZ&0UlSIV+@?.vhw{L'.indexOf(RU[TU]);
                if (qU !== -jR[1])
                  if (PU < jR[0]) PU = qU;
                  else {
                    hR(PU += qU * jR[12], pU |= PU << EU, EU += (PU & jR[13]) > jR[14] ? jR[15] : jR[16]);
                    do {
                      hR(tU.push(pU & jR[3]), pU >>= jR[2], EU -= jR[2])
                    } while (EU > jR[9]);
                    PU = -jR[1]
                  }
              }
              return PU > -jR[1] && tU.push((pU | PU << EU) & jR[3]), uR(tU)
            }

            function QU(UU) {
              return typeof cR[UU] === jR[5] ? cR[UU] = hU(GR[UU]) : cR[UU]
            }

            function eU() {
              var UU;
              hR(UU = function(RU, gU, tU) {
                var pU, EU, PU, TU = {};
                if (RU[gU + tU] !== jR[29]) return RU[gU + tU];
                if (gU === tU) return jR[25];
                for (pU = jR[0]; pU < gU.length; pU++) TU[gU[pU]] === jR[29] && (TU[gU[pU]] = jR[0]), TU[tU[pU]] === jR[29] && (TU[tU[pU]] = jR[0]), hR(TU[gU[pU]]++, TU[tU[pU]]--);
                for (EU in TU)
                  if (TU[EU] !== jR[0]) return RU[gU + tU] = jR[30], jR[30];
                for (PU = jR[1]; PU < gU.length; PU++)
                  if (UU(RU, gU.substr(jR[0], PU), tU.substr(jR[0], PU)) && UU(RU, gU.substr(PU), tU.substr(PU)) || UU(RU, gU.substr(jR[0], PU), tU.substr(tU.length - PU)) && UU(RU, gU.substr(PU), tU.substr(jR[0], tU.length - PU))) return RU[gU + tU] = jR[25], jR[25];
                return RU[gU + tU] = jR[30], jR[30]
              }, console.log((function(RU, gU) {
                return UU({}, RU, gU)
              })))
            }
            QU(137) + "l" in CR && eU(), hR(cU[jR[10]] = CU, GU[QU(138)](cU));
            for (let fU = jR[0]; fU < jR[31]; fU++) hR(EU(GU, jR[0], jR[24], jR[2], jR[10]), EU(GU, jR[1], jR[32], jR[34], jR[15]), EU(GU, jR[18], jR[7], jR[31], jR[16]), EU(GU, jR[17], jR[9], jR[33], jR[28]), EU(GU, jR[0], jR[32], jR[31], jR[28]), EU(GU, jR[1], jR[7], jR[33], jR[10]), EU(GU, jR[18], jR[9], jR[2], jR[15]), EU(GU, jR[17], jR[24], jR[34], jR[16]));
            for (let xU = jR[0]; xU < RU; xU++) GU[xU] += cU[xU];
            const WU = Math[QU(139)](RU * jR[24], TU[QU(140)] - uU);
            for (let mU = jR[0]; mU < WU; mU++) {
              function IU(UU) {
                var RU, gU, tU, pU, EU, PU, TU;
                for (hR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = jR[0], EU = jR[0], PU = -jR[1]), TU = jR[0]; TU < gU; TU++) {
                  var qU = '.}4>]y5+,[{|)dRQ"bG!OAKeB1(frFN9v*u_l%62YM7IjXz0k/`Ct~^SxcDsiqT8P<Lwp@oW&=?VZE$h3gmH#:;anJU'.indexOf(RU[TU]);
                  if (qU !== -jR[1])
                    if (PU < jR[0]) PU = qU;
                    else {
                      hR(PU += qU * jR[12], pU |= PU << EU, EU += (PU & jR[13]) > jR[14] ? jR[15] : jR[16]);
                      do {
                        hR(tU.push(pU & jR[3]), pU >>= jR[2], EU -= jR[2])
                      } while (EU > jR[9]);
                      PU = -jR[1]
                    }
                }
                return PU > -jR[1] && tU.push((pU | PU << EU) & jR[3]), uR(tU)
              }

              function JU(UU) {
                return typeof cR[UU] === jR[5] ? cR[UU] = IU(GR[UU]) : cR[UU]
              }

              function wU() {
                function UU(UU) {
                  return UU[jR[1]] * jR[36] + (UU[jR[0]] < jR[0] ? jR[35] | UU[jR[0]] : UU[jR[0]])
                }

                function RU(UU) {
                  switch (((UU & jR[35]) !== jR[0]) * jR[1] + (UU < jR[0]) * jR[18]) {
                    case jR[0]:
                      return [UU % jR[35], Math.trunc(UU / jR[36])];
                    case jR[1]:
                      return [UU % jR[35] - jR[35], Math.trunc(UU / jR[36]) + jR[1]];
                    case jR[18]:
                      return [((UU + jR[35]) % jR[35] + jR[35]) % jR[35], Math.round(UU / jR[36])];
                    case jR[17]:
                      return [UU % jR[35], Math.trunc(UU / jR[36])]
                  }
                }
                let gU = UU([jR[18], jR[24]]),
                  tU = UU([jR[1], jR[18]]),
                  pU = gU + tU,
                  EU = pU - tU,
                  PU = EU * jR[18],
                  TU = PU / jR[18];
                hR(console.log(RU(pU)), console.log(RU(EU)), console.log(RU(PU)), console.log(RU(TU)))
              }
              JU(141) + "B" in CR && wU(), TU[uU + mU] ^= jU[mU]
            }
          }
        }
      })();
    const WR = [2, 0, 1, 8, 142, "a", "i", 232, "e", "f", "d", 255, "length", "c", 3, "b", 4, "undefined", void 0, 113, 63, 6, "fromCodePoint", 7, 12, "push", 87, 91, 8191, 88, 13, 14, null, 226, 5, !1, 192, !0, 133, 9, 57, "h", 183, 27, 202, 215, "g", 104, 53, 171, 33554432, 67108864, 248, 234, 78, 127, 135, 65, 240, 169, 29, 199, 16, 512, 174, 128, 112, 43, 15, 139, 76, 173, 1023, 182, 31, 18, 184, 32, 96, 24, 10, 19, 64, 166, 65535, 108, 119, 209, 221, 67, "J", 145, 82, 175, 103, 75, 38, 114, 178, 132];

    function fR(...UU) {
      return UU[WR[12]] = WR[2], typeof gg !== WR[17] && gg ? (new gg).decode(new tg(UU[WR[1]])) : typeof pg !== WR[17] && pg ? pg.from(UU[WR[1]]).toString("utf-8") : Tg(UU[WR[1]])
    }

    function xR(...UU) {
      if (UU[WR[12]] = WR[14], UU[WR[1]] === function(...UU) {
          return UU[WR[12]] = WR[2], typeof QR[UU[WR[1]]] === WR[17] ? QR[UU[WR[1]]] = function(UU) {
            var RU, gU, tU, pU, EU, PU, TU;
            for (IR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = WR[1], EU = WR[1], PU = -WR[2]), TU = WR[1]; TU < gU; TU++) {
              var qU = 'GcsCUXJBmDIdbtEoKHVZRPQOFaWiTkANprl]e,h_nMYfj3ySqug&v0`>/4<8%)w=5@~!6#{7z}*?."1;9[:x(2$+|^L'.indexOf(RU[TU]);
              if (qU !== -WR[2])
                if (PU < WR[1]) PU = qU;
                else {
                  IR(PU += qU * WR[27], pU |= PU << EU, EU += (PU & WR[28]) > WR[29] ? WR[30] : WR[31]);
                  do {
                    IR(tU.push(pU & WR[11]), pU >>= WR[3], EU -= WR[3])
                  } while (EU > WR[23]);
                  PU = -WR[2]
                }
            }
            return PU > -WR[2] && tU.push((pU | PU << EU) & WR[11]), fR(tU)
          }(eR[UU[WR[1]]]) : QR[UU[WR[1]]]
        }(86)) return UU[WR[2]] + UU[WR[0]]
    }

    function mR() {}

    function IR() {
      IR = function() {}
    }
    IR(QR = {}, eR = ["KaCYvC6*l", "}Q,rjCS*=2g+YWe/V,k6", "oQ8/,jjfhuAvC,`jhUp/(]T", "m^=/gLu|^yPo}Zsm0[$Ld&zIbQzSA;9pT{%Rle?Mp]eL@|r", "cC{[`xS*nGG+_+$wbb8^N&2{DbSgS;!puDF*", "?C*fwNdE_]<Q6#)pZUov*`I*1;wc2l.,", "T}u/2_r!0Gcri7<S7X", ",^kPg(ZOrB[", 'CC(<nLW*jyk[C,Cve_L5BW5(x]"L@[0Zb{;/qBZh7BWlqO=j?;>^@&f^wb&', "!UprNen]^u3Qh:)%H0|", "]9x^:AP2y}]k`Yh?<^[gJ&sc]hk;|>fg~u<[)oL7PeZNu#VcE,i$EjpAY", "a94YAJ?M_i/e(Y", "hu)+s9uF}}bR=Emvw9dY+`(E)0a[I|,wxlA^p", '3/RN*&sj#q^[h:ORX/RfKBbh$D`"M+X<qCl', "Hy:3VQ4],C:[PoIWqb{<D:CwvB=O(YcMm^&g|^T", "]5m<g@~5$D", "E5sL&J//@![:$lwW#6T6,UoEnQ|.LY7", "$br$DZ,p|C/:*&+<iLH<}^Nh0B+YND1O~S2CJ:&f+hNH;DlSG[g+WUDX%u", "mC$Rh5(M$D[:K|/E5l&+4a8cRi):#On/2jqeD98j3y6~L[avkLJ!Y.4X", 'J<MP|Fc!kAta9"B?|CPeTW|O0S', 'O;E$[[}M`bTUeg=vR^"<~]W~7qii|>;?Y9/Y', "9G|+OBeX", "=4<P$UV/(2*#0JKmS;9[eWIMsyeNO#r", '>w1PY+w{;!6u6;*<TEY>s@"F$b4e]#bu?X', "Gj$PNem2:7", "T/FYf++h>", "N5.~<L0p~!aB0GJ.MQH*", 'd."f,a&h{q:Dkgx.d4P19.$OE],rw>W,B.BAa;R|', 'FW96A5B/Iqw7cl!%k"kP}h5I/i4L4+!<`4F9s1&{]yIeM_IW', "{95HRL3RhG8*Ox1<aCz$yeT", "b^aL.[W*TwhkLYqE^urgkZnX0uaYm>", "H<i$GeTRX6aN!_{jx_Re6QYw$D:$J%EO#9_gk9T", "l/Orte&|8S,LuI%/|wp+I54*V]&wfD#gGX", "aG0/ahV5C76gcgIWe]i!oWM*nG", "p]Q<<BT", "kaCf!.?:_b^XoY", ']4!1&h=hhQLA!g#g[3BA8~@P9hd"+;fvkGJ!o;PR$6Ic0Jb', "$;#6&U3R0yV}z|", ">9u<.fRc0Gl6$BzWKW#RfJGf<},L/Y0", "$],YMEY!HGtO{,W<25<NM,X7f7", "ub#6^N.REpbr.[wvJl5$oHT", 'HBQL?]L}#b6y4Y/)&]ZL}.?Md7y"9ZVRaSkP:;J.]h|+H[jw"uXR2^E7zaf', ')9"Lvk[E|D0l=E$w', "z5b<>esjK0[q2lQSSb$[MksQ^GSJi:/ONy?N)L=bE6>#l3Tw<;Y&#", "]_&$5hf{BQ1.eZXc", "_3D6IHZOIi0+]_rZTE]5/(fhp6&kv_b", "v;yCzo%A2w", "(_&+_5kfVbC*3[Suqb[CF:u!yDCNyc&jd4[P", "X]^HKZ+b!y<*?Z(vrYl+/jL7&CjeoO=vqu<[[,&FMyf*ehsveC3gS", 'eP"Y;A|O`]0h.%^<,6dN_~;c*u/SP`pgC]*1]+wF:7Ot]cB/', "MS,e%xkbqpk%cIc)4j&$)aB:KQ}fl&K#59=*R", "4SY/F:fhUp8<l&<RCyDR$BxX>CX@b=r", '^5NA~^hwEC=HiG*w8Q3g#^</_}A:px"c@,l+&~?I`buN!#sM~UP6>em|.D', ")9t[gE/]>C=}$IE<`%#6]}jbNQ^^v#q.w3l/M}N.X;+{VZZwvC/Y", "=<w$o+I]1]X@R>", "2_A<Y;<p{Bz_X", 'O6%Pc](XMuF"ZGTc5_W[r:{h4Gtmh`|RJGx!IWT', "9yU3lQf^mhRe]Y~Zcjl", "li|$b:^b`]#~T+_WW]w$yesU7B8BjBBM7[^AKL[E$b", "z._Pw:FkKQ%lfggM|iX", "!^dLkx.ON0wtX,},i6t6", 'FGqe.@bcJbut^G9<FLr$F@vf1wZvx"[WJu|~;A07vSryj9/Sg9i>', 'ICCvJ4K{$]}}UlYRQSFNX_QR+yoLaD*,^BJ/5~fjchJ"bg2Sc{w5cBT', "hl]P!.0M_;T#fB2RE3`Pt9|cw]0__lo)SX", "rw~Awx9M<wN}t|/R2?=&ELAM(2/+FG*ZtPl", "BBueOo5MvQ|7lJdml[>*G^T", "s4Z*J@>ARiVkX;buHa(&6em^BSr~T_>%", "vCWvfJ0XV2w+)[bu", "nl]P6_4p}AE", ")y&+P:{|", "dy}Yo;u{vy=wt|*Z:QA*0:qA,25N0ZZZ*Uqv6`EpPp%cR>jp(LRNNN;^HBC", "=GH&Y;$|A2@;!W3MmCwg@:|hI!cyAY;))PSRm&+{kbC[o;?.P/Re{hD73u[", '?ja61[1*d7&a9"e/Q_.g,("b>hqt2g2)ijx!(NkPhBk"[%.?{QIC`1t]:CO', "BQtN{[oMMQY?t3EOu}_6((*M8A2idG0", ")UcLO(`M$}nVj+qg7Ud6uQ1/Y", "HukL/(@P.D", ">bP<rN}]Ap!6HcDg<.Cf}AT", "NQm<0^$c_;s$t3lOa4XRd4|F>p@^Oxj<aT", ";,Cv~^|)!y|@@Zo?|wAe]{`7&D1lX", "oB#PI,<]5C_0kx~p*]!6SN}7TieGro)ZKy_P", ',51gO@cfJ6wRsD$RP]c1PQc!U7J"A+%/', 'Dz)5>_&fz!ZLA,Tcw9v^"A]?Z7ik*ZwuB,NA$UT', "8?E$6;|!l;Uv&%UcWC(v{o@PhG*?X", "e_[$JNd:40kVbx7Wf]%RfH5py}fYugnEByu^4,~5;yaB8g=.I94*HeT", "my65sBGF<qY~Xor3ta}YfW=cNAPP5Z+w;C]$S:qXO6(%eJP", "FPZ*xB^R6uh", "t=kv@[Zc", "h?h$/fBX", "M9vMK!N+", "85/Myw_+8<`<^EE", "tX}rsvlk:ml)G/k", "C@mtX(g.YG<nZE", "x5aA!Z6GEX3F[VX2", '}$UgozqOPHG"4*Hz', "TDy{m;x;_H#HY+Wm", "8G7E?rLpNGf{5!l.", "sp2g!ZuGzMC{tKD", "1Bvy7=`+", '+u"KIGMz', "H`A[E0k+", "TEw&L.sz", "?,<hS~^Y", 'MsLF((fCVl"', ";pzhL)jX", "PFEm", '@c"I+VYD8=SAWM', "!mwQp#?FoTC|dM", "((PIp#NuZmJ15I", "tpwt<VJ_ed>S*M", "*ca1oS?FNmJT/M", "*oHI@k_gmo)", "5AzTMc.C", "0B+a2Cz[", "gNegLpJ[", "f!5T?", "gNeg8Auy", "Y~+Gv", ";p`m3Pf&3UK|!P7cm,h!#U_B0u", "~h$r;tE8R2C[$7)#WVD%cSakN+", 'b,8xdl5"2ZjlY8~2/fy;/O<,C4', "2g^6Z9?D", "^35nCeYD", "vB.S}e/D", "63{%", "33G@(eED", "eUr4;", "V3a6d4G", "V3$#<X1D", "f3d%", "l}dx%[7+", "lMBsL:m+", 'e:"nH,~[', "_}=_Yz>/_c", "AY13T@9+", "68`!", "?}N!m", "@F(!", '`Yj_4"1', "0MkG~Q9+"]), IR(Rg = function(...UU) {
      IR(UU[WR[12]] = WR[1], UU[WR[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], UU[WR[13]] = WR[18], UU[WR[0]] = []);
      try {
        IR(UU[WR[13]] = Object, UU[WR[0]][WR[25]]("".__proto__.constructor.name))
      } catch (eR) {}
      UU: for (UU[WR[14]] = WR[1]; UU[WR[14]] < UU[WR[15]][WR[12]]; UU[WR[14]]++) try {
        for (UU[WR[13]] = UU[WR[15]][UU[WR[14]]](), UU[WR[16]] = WR[1]; UU[WR[16]] < UU[WR[0]][WR[12]]; UU[WR[16]]++)
          if (typeof UU[WR[13]][UU[WR[0]][UU[WR[16]]]] === WR[17]) continue UU;
        return UU[WR[13]]
      } catch (eR) {}
      return UU[WR[13]] || this
    }() || {}, gg = Rg.TextDecoder, tg = Rg.Uint8Array, pg = Rg.tC, Eg = Rg.String || String, Pg = Rg.Array || Array, Tg = function(...UU) {
      return IR(UU[WR[12]] = WR[1], UU[WR[26]] = new Pg(WR[65]), UU[WR[2]] = Eg[WR[22]] || Eg.fromCharCode, UU[-WR[19]] = []),
        function(...RU) {
          for (IR(RU[WR[12]] = WR[2], RU[WR[2]] = WR[18], RU[WR[15]] = WR[18], RU[WR[14]] = RU[WR[1]][WR[12]], UU[-WR[19]][WR[12]] = WR[1]), RU[WR[16]] = WR[1]; RU[WR[16]] < RU[WR[14]];) IR(RU[WR[15]] = RU[WR[1]][RU[WR[16]]++], RU[WR[15]] <= WR[55] ? RU[WR[2]] = RU[WR[15]] : RU[WR[15]] <= 223 ? RU[WR[2]] = (RU[WR[15]] & WR[74]) << WR[21] | RU[WR[1]][RU[WR[16]]++] & WR[20] : RU[WR[15]] <= 239 ? RU[WR[2]] = (RU[WR[15]] & WR[68]) << WR[24] | (RU[WR[1]][RU[WR[16]]++] & WR[20]) << WR[21] | RU[WR[1]][RU[WR[16]]++] & WR[20] : Eg[WR[22]] ? RU[WR[2]] = (RU[WR[15]] & WR[23]) << WR[75] | (RU[WR[1]][RU[WR[16]]++] & WR[20]) << WR[24] | (RU[WR[1]][RU[WR[16]]++] & WR[20]) << WR[21] | RU[WR[1]][RU[WR[16]]++] & WR[20] : (RU[WR[2]] = WR[20], RU[WR[16]] += WR[14]), UU[-WR[19]][WR[25]](UU[WR[26]][RU[WR[2]]] || (UU[WR[26]][RU[WR[2]]] = UU[WR[2]](RU[WR[2]]))));
          return UU[-WR[19]].join("")
        }
    }()), (() => {
      function UU(...UU) {
        return UU[WR[12]] = WR[2], typeof QR[UU[WR[1]]] === WR[17] ? QR[UU[WR[1]]] = function(UU) {
          var RU, gU, tU, pU, EU, PU, TU;
          for (IR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = WR[1], EU = WR[1], PU = -WR[2]), TU = WR[1]; TU < gU; TU++) {
            var qU = 'j@+$E1DONMWYpk5K0G4.mTfC3SVgJis7Q}2zIZ!o;^`B?|LycAU"nHXt>hx:_,<9a~bdwlr=F)&e{qvP/*(%]u[68#R'.indexOf(RU[TU]);
            if (qU !== -WR[2])
              if (PU < WR[1]) PU = qU;
              else {
                IR(PU += qU * WR[27], pU |= PU << EU, EU += (PU & WR[28]) > WR[29] ? WR[30] : WR[31]);
                do {
                  IR(tU.push(pU & WR[11]), pU >>= WR[3], EU -= WR[3])
                } while (EU > WR[23]);
                PU = -WR[2]
              }
          }
          return PU > -WR[2] && tU.push((pU | PU << EU) & WR[11]), fR(tU)
        }(eR[UU[WR[1]]]) : QR[UU[WR[1]]]
      } [][WR[12]] = WR[1], UU(WR[29]) + "E" in mR && function(...UU) {
        IR(UU[WR[12]] = WR[1], UU[WR[38]] = function(...RU) {
          return RU[WR[12]] = WR[0], UU[-WR[33]]({}, RU[WR[1]], RU[WR[2]])
        }, UU[-WR[33]] = function(...RU) {
          if (IR(RU[WR[12]] = WR[14], RU[WR[14]] = {}), RU[WR[1]][RU[WR[2]] + RU[WR[0]]] !== WR[18]) return RU[WR[1]][RU[WR[2]] + RU[WR[0]]];
          if (RU[WR[2]] === RU[WR[0]]) return WR[37];
          for (RU[WR[15]] = WR[1]; RU[WR[15]] < RU[WR[2]].length; RU[WR[15]]++) RU[WR[14]][RU[WR[2]][RU[WR[15]]]] === WR[18] && (RU[WR[14]][RU[WR[2]][RU[WR[15]]]] = WR[1]), RU[WR[14]][RU[WR[0]][RU[WR[15]]]] === WR[18] && (RU[WR[14]][RU[WR[0]][RU[WR[15]]]] = WR[1]), IR(RU[WR[14]][RU[WR[2]][RU[WR[15]]]]++, RU[WR[14]][RU[WR[0]][RU[WR[15]]]]--);
          for (RU[WR[34]] in RU[WR[14]])
            if (RU[WR[14]][RU[WR[34]]] !== WR[1]) return RU[WR[1]][RU[WR[2]] + RU[WR[0]]] = WR[35], WR[35];
          for (RU[WR[36]] = WR[2]; RU[WR[36]] < RU[WR[2]].length; RU[WR[36]]++)
            if (UU[-WR[33]](RU[WR[1]], RU[WR[2]].substr(WR[1], RU[WR[36]]), RU[WR[0]].substr(WR[1], RU[WR[36]])) && UU[-WR[33]](RU[WR[1]], RU[WR[2]].substr(RU[WR[36]]), RU[WR[0]].substr(RU[WR[36]])) || UU[-WR[33]](RU[WR[1]], RU[WR[2]].substr(WR[1], RU[WR[36]]), RU[WR[0]].substr(RU[WR[0]].length - RU[WR[36]])) && UU[-WR[33]](RU[WR[1]], RU[WR[2]].substr(RU[WR[36]]), RU[WR[0]].substr(WR[1], RU[WR[0]].length - RU[WR[36]]))) return RU[WR[1]][RU[WR[2]] + RU[WR[0]]] = WR[37], WR[37];
          return RU[WR[1]][RU[WR[2]] + RU[WR[0]]] = WR[35], WR[35]
        }, console.log(UU[WR[38]]))
      }();
      const RU = WR[39],
        gU = UU(89) + UU(90) + UU(WR[27]),
        tU = {
          [WR[39]]: UU(92) + UU(93) + UU(94) + UU(95) + UU(WR[78])
        },
        pU = (...RU) => {
          RU[WR[12]] = WR[2];
          const gU = tU[RU[WR[1]]];
          if (!gU) {
            function pU(...UU) {
              for (IR(UU[WR[12]] = WR[2], UU[-WR[42]] = '+`z>u!57c}KeD,f@<X/*M2nRl4Wa;THI&:_$]Fv9Uj8EpA^L6CswJrbxYm=Z)"S|k%dN.1VBPoQG[#t~03g{qyi?(hO', UU[-WR[40]] = "" + (UU[WR[1]] || ""), UU[WR[13]] = UU[-WR[40]].length, UU[WR[10]] = [], UU[WR[8]] = WR[1], UU[WR[21]] = WR[1], UU[WR[44]] = -WR[2]), UU[WR[41]] = WR[1]; UU[WR[41]] < UU[WR[13]]; UU[WR[41]]++)
                if (UU[WR[43]] = UU[-WR[42]].indexOf(UU[-WR[40]][UU[WR[41]]]), UU[WR[43]] !== -WR[2])
                  if (UU[WR[44]] < WR[1]) UU[WR[44]] = UU[WR[43]];
                  else {
                    IR(UU[WR[44]] += UU[WR[43]] * WR[27], UU[WR[8]] |= UU[WR[44]] << UU[WR[21]], UU[WR[21]] += (UU[WR[44]] & WR[28]) > WR[29] ? WR[30] : WR[31]);
                    do {
                      IR(UU[WR[10]].push(UU[WR[8]] & WR[11]), UU[WR[8]] >>= WR[3], UU[WR[21]] -= WR[3])
                    } while (UU[WR[21]] > WR[23]);
                    UU[WR[44]] = -WR[2]
                  } return UU[WR[44]] > -WR[2] && UU[WR[10]].push((UU[WR[8]] | UU[WR[44]] << UU[WR[21]]) & WR[11]), fR(UU[WR[10]])
            }

            function EU(...UU) {
              return UU[WR[12]] = WR[2], typeof QR[UU[WR[1]]] === WR[17] ? QR[UU[WR[1]]] = pU(eR[UU[WR[1]]]) : QR[UU[WR[1]]]
            }
            throw new Error(UU(97) + EU(98) + EU(99) + EU(100) + " v" + RU[WR[1]])
          }
          return [WR[1], WR[2], WR[0], WR[14], WR[16], WR[34], WR[21], WR[23]].map(((...UU) => {
            function RU(...UU) {
              return UU[WR[12]] = WR[2], typeof QR[UU[WR[1]]] === WR[17] ? QR[UU[WR[1]]] = function(...UU) {
                for (IR(UU[WR[12]] = WR[2], UU[WR[45]] = '1YdkcJREU65oQfOL#=}m$ei&!9x%rhaM/q:P<WVwBpX)@,n>TGI"DCS{bgA7s+03lZ2z`[Ku?_t|FvN4;(yH~^.8]j*', UU[WR[15]] = "" + (UU[WR[1]] || ""), UU[WR[13]] = UU[WR[15]].length, UU[-WR[49]] = [], UU[WR[47]] = WR[1], UU[-WR[48]] = WR[1], UU[WR[46]] = -WR[2]), UU[WR[3]] = WR[1]; UU[WR[3]] < UU[WR[13]]; UU[WR[3]]++)
                  if (UU[WR[6]] = UU[WR[45]].indexOf(UU[WR[15]][UU[WR[3]]]), UU[WR[6]] !== -WR[2])
                    if (UU[WR[46]] < WR[1]) UU[WR[46]] = UU[WR[6]];
                    else {
                      IR(UU[WR[46]] += UU[WR[6]] * WR[27], UU[WR[47]] |= UU[WR[46]] << UU[-WR[48]], UU[-WR[48]] += (UU[WR[46]] & WR[28]) > WR[29] ? WR[30] : WR[31]);
                      do {
                        IR(UU[-WR[49]].push(UU[WR[47]] & WR[11]), UU[WR[47]] >>= WR[3], UU[-WR[48]] -= WR[3])
                      } while (UU[-WR[48]] > WR[23]);
                      UU[WR[46]] = -WR[2]
                    } return UU[WR[46]] > -WR[2] && UU[-WR[49]].push((UU[WR[47]] | UU[WR[46]] << UU[-WR[48]]) & WR[11]), fR(UU[-WR[49]])
              }(eR[UU[WR[1]]]) : QR[UU[WR[1]]]
            }
            return UU[WR[12]] = WR[2], RU(101) + "l" in mR && function(...UU) {
              function RU(...UU) {
                return UU[WR[12]] = WR[2], UU[WR[1]][WR[2]] * WR[51] + (UU[WR[1]][WR[1]] < WR[1] ? WR[50] | UU[WR[1]][WR[1]] : UU[WR[1]][WR[1]])
              }

              function gU(...UU) {
                switch (UU[WR[12]] = WR[2], ((UU[WR[1]] & WR[50]) !== WR[1]) * WR[2] + (UU[WR[1]] < WR[1]) * WR[0]) {
                  case WR[1]:
                    return [UU[WR[1]] % WR[50], Math.trunc(UU[WR[1]] / WR[51])];
                  case WR[2]:
                    return [UU[WR[1]] % WR[50] - WR[50], Math.trunc(UU[WR[1]] / WR[51]) + WR[2]];
                  case WR[0]:
                    return [((UU[WR[1]] + WR[50]) % WR[50] + WR[50]) % WR[50], Math.round(UU[WR[1]] / WR[51])];
                  case WR[14]:
                    return [UU[WR[1]] % WR[50], Math.trunc(UU[WR[1]] / WR[51])]
                }
              }
              UU[WR[12]] = WR[1], IR(UU[-WR[52]] = RU([WR[0], WR[16]]), UU[WR[53]] = RU([WR[2], WR[0]]), UU[WR[9]] = UU[-WR[52]] + UU[WR[53]], UU[WR[46]] = UU[WR[9]] - UU[WR[53]], UU[WR[16]] = UU[WR[46]] * WR[0], UU[-WR[54]] = UU[WR[16]] / WR[0], console.log(gU(UU[WR[9]])), console.log(gU(UU[WR[46]])), console.log(gU(UU[WR[16]])), console.log(gU(UU[-WR[54]])))
            }(), parseInt(gU[RU(102)](UU[WR[1]] * WR[3], UU[WR[1]] * WR[3] + WR[3]), WR[62])
          }))
        };
      IR(ER = (...UU) => {
        function gU(...UU) {
          return UU[WR[12]] = WR[2], typeof QR[UU[WR[1]]] === WR[17] ? QR[UU[WR[1]]] = function(...UU) {
            for (IR(UU[WR[12]] = WR[2], UU[WR[2]] = '0XFYDmpkMqe1x]|u7I8%AaO2BzLc4!_;+yHQ5Cg=&9K,SwW?P*Jh^>:VEUG)6<}vd3./sol~t($[@RrjZ#"`fT{Nbni', UU[WR[15]] = "" + (UU[WR[1]] || ""), UU[WR[14]] = UU[WR[15]].length, UU[WR[16]] = [], UU[WR[56]] = WR[1], UU[WR[9]] = WR[1], UU[-WR[55]] = -WR[2]), UU[WR[3]] = WR[1]; UU[WR[3]] < UU[WR[14]]; UU[WR[3]]++)
              if (UU[WR[39]] = UU[WR[2]].indexOf(UU[WR[15]][UU[WR[3]]]), UU[WR[39]] !== -WR[2])
                if (UU[-WR[55]] < WR[1]) UU[-WR[55]] = UU[WR[39]];
                else {
                  IR(UU[-WR[55]] += UU[WR[39]] * WR[27], UU[WR[56]] |= UU[-WR[55]] << UU[WR[9]], UU[WR[9]] += (UU[-WR[55]] & WR[28]) > WR[29] ? WR[30] : WR[31]);
                  do {
                    IR(UU[WR[16]].push(UU[WR[56]] & WR[11]), UU[WR[56]] >>= WR[3], UU[WR[9]] -= WR[3])
                  } while (UU[WR[9]] > WR[23]);
                  UU[-WR[55]] = -WR[2]
                } return UU[-WR[55]] > -WR[2] && UU[WR[16]].push((UU[WR[56]] | UU[-WR[55]] << UU[WR[9]]) & WR[11]), fR(UU[WR[16]])
          }(eR[UU[WR[1]]]) : QR[UU[WR[1]]]
        }
        return UU[WR[12]] = WR[2], gU(WR[94]) + WR[90] in mR && function(...UU) {
          IR(UU[WR[12]] = WR[1], UU[WR[5]] = function(...UU) {
            function RU(...UU) {
              return UU[WR[12]] = WR[2], qU(PU(GU(UU[WR[1]])))
            }

            function tU(...UU) {
              return UU[WR[12]] = WR[0], qU(TU(GU(UU[WR[1]]), GU(UU[WR[2]])))
            }

            function pU(...UU) {
              return UU[WR[12]] = WR[0], KU(TU(GU(UU[WR[1]]), GU(UU[WR[2]])))
            }

            function EU(...UU) {
              return UU[WR[12]] = WR[14], cU(TU(GU(UU[WR[1]]), GU(UU[WR[2]])), UU[WR[0]])
            }

            function PU(UU) {
              return uU(IU(jU(UU), UU.length * WR[3]))
            }

            function TU(...UU) {
              function RU(...UU) {
                for (IR(UU[WR[12]] = WR[2], UU[-WR[58]] = '1CdJgRBSqsi3j52Qe(7./9OZY`;6VzF[$D&l^r*W_}"n+@h)vK4yTUIH>N|,0=kAGM!~aEP%xbLu8<p?]c#wf{X:otm', UU[WR[0]] = "" + (UU[WR[1]] || ""), UU[WR[13]] = UU[WR[0]].length, UU[WR[60]] = [], UU[WR[8]] = WR[1], UU[-WR[59]] = WR[1], UU[WR[46]] = -WR[2]), UU[WR[57]] = WR[1]; UU[WR[57]] < UU[WR[13]]; UU[WR[57]]++)
                  if (UU[WR[39]] = UU[-WR[58]].indexOf(UU[WR[0]][UU[WR[57]]]), UU[WR[39]] !== -WR[2])
                    if (UU[WR[46]] < WR[1]) UU[WR[46]] = UU[WR[39]];
                    else {
                      IR(UU[WR[46]] += UU[WR[39]] * WR[27], UU[WR[8]] |= UU[WR[46]] << UU[-WR[59]], UU[-WR[59]] += (UU[WR[46]] & WR[28]) > WR[29] ? WR[30] : WR[31]);
                      do {
                        IR(UU[WR[60]].push(UU[WR[8]] & WR[11]), UU[WR[8]] >>= WR[3], UU[-WR[59]] -= WR[3])
                      } while (UU[-WR[59]] > WR[23]);
                      UU[WR[46]] = -WR[2]
                    } return UU[WR[46]] > -WR[2] && UU[WR[60]].push((UU[WR[8]] | UU[WR[46]] << UU[-WR[59]]) & WR[11]), fR(UU[WR[60]])
              }

              function gU(UU) {
                return typeof QR[UU] === WR[17] ? QR[UU] = RU(eR[UU]) : QR[UU]
              }
              UU[WR[12]] = WR[0], UU[-WR[61]] = jU(UU[WR[1]]), UU[-WR[61]].length > WR[62] && (UU[-WR[61]] = IU(UU[-WR[61]], UU[WR[1]].length * WR[3]));
              var tU = Array(WR[62]),
                pU = Array(WR[62]);
              for (UU[WR[15]] = WR[1]; UU[WR[15]] < WR[62]; UU[WR[15]]++) IR(tU[UU[WR[15]]] = 909522486 ^ UU[-WR[61]][UU[WR[15]]], pU[UU[WR[15]]] = 1549556828 ^ UU[-WR[61]][UU[WR[15]]]);
              return UU[WR[16]] = IU(tU.concat(jU(UU[WR[2]])), WR[63] + UU[WR[2]].length * WR[3]), uU(IU(pU.concat(UU[WR[16]]), xR(gU(111), WR[63], 256)))
            }

            function qU(...RU) {
              function gU(...UU) {
                for (IR(UU[WR[12]] = WR[2], UU[WR[2]] = ';[y_.=*,>5^!~{uzm?}hFjr1DvZgIKQY078wC<|9eJnRip)XB#6T@GU`cHEd&W3S2N]VAMla4$/toPxL%kq(+sbO":f', UU[-WR[64]] = "" + (UU[WR[1]] || ""), UU[WR[14]] = UU[-WR[64]].length, UU[WR[65]] = [], UU[WR[8]] = WR[1], UU[WR[9]] = WR[1], UU[WR[46]] = -WR[2]), UU[WR[41]] = WR[1]; UU[WR[41]] < UU[WR[14]]; UU[WR[41]]++)
                  if (UU[WR[6]] = UU[WR[2]].indexOf(UU[-WR[64]][UU[WR[41]]]), UU[WR[6]] !== -WR[2])
                    if (UU[WR[46]] < WR[1]) UU[WR[46]] = UU[WR[6]];
                    else {
                      IR(UU[WR[46]] += UU[WR[6]] * WR[27], UU[WR[8]] |= UU[WR[46]] << UU[WR[9]], UU[WR[9]] += (UU[WR[46]] & WR[28]) > WR[29] ? WR[30] : WR[31]);
                      do {
                        IR(UU[WR[65]].push(UU[WR[8]] & WR[11]), UU[WR[8]] >>= WR[3], UU[WR[9]] -= WR[3])
                      } while (UU[WR[9]] > WR[23]);
                      UU[WR[46]] = -WR[2]
                    } return UU[WR[46]] > -WR[2] && UU[WR[65]].push((UU[WR[8]] | UU[WR[46]] << UU[WR[9]]) & WR[11]), fR(UU[WR[65]])
              }

              function tU(...UU) {
                return UU[WR[12]] = WR[2], typeof QR[UU[WR[1]]] === WR[17] ? QR[UU[WR[1]]] = gU(eR[UU[WR[1]]]) : QR[UU[WR[1]]]
              }
              RU[WR[12]] = WR[2];
              try {
                UU[-WR[4]]
              } catch (EU) {
                UU[-WR[4]] = WR[1]
              }
              for (IR(RU[-WR[67]] = UU[-WR[4]] ? tU(WR[66]) + tU(WR[19]) + tU(WR[97]) : tU(WR[66]) + tU(115) + tU(116), RU[WR[15]] = "", RU[WR[14]] = WR[18]), RU[WR[10]] = WR[1]; RU[WR[10]] < RU[WR[1]].length; RU[WR[10]]++) IR(RU[WR[14]] = RU[WR[1]].charCodeAt(RU[WR[10]]), RU[WR[15]] += RU[-WR[67]].charAt(RU[WR[14]] >>> WR[16] & WR[68]) + RU[-WR[67]].charAt(RU[WR[14]] & WR[68]));
              return RU[WR[15]]
            }

            function KU(...RU) {
              function tU(...UU) {
                for (IR(UU[WR[12]] = WR[2], UU[WR[2]] = 'I06`*>@41%xz&8en(2A+B^jL$.WT=VrM|PYE#wOKD"{RmX}:G;o,[QCdf?U~vJyt)hZgqNHspFa/S_9<b3l7i]kcu5!', UU[WR[69]] = "" + (UU[WR[1]] || ""), UU[WR[13]] = UU[WR[69]].length, UU[WR[16]] = [], UU[-WR[70]] = WR[1], UU[WR[21]] = WR[1], UU[WR[46]] = -WR[2]), UU[WR[41]] = WR[1]; UU[WR[41]] < UU[WR[13]]; UU[WR[41]]++)
                  if (UU[WR[39]] = UU[WR[2]].indexOf(UU[WR[69]][UU[WR[41]]]), UU[WR[39]] !== -WR[2])
                    if (UU[WR[46]] < WR[1]) UU[WR[46]] = UU[WR[39]];
                    else {
                      IR(UU[WR[46]] += UU[WR[39]] * WR[27], UU[-WR[70]] |= UU[WR[46]] << UU[WR[21]], UU[WR[21]] += (UU[WR[46]] & WR[28]) > WR[29] ? WR[30] : WR[31]);
                      do {
                        IR(UU[WR[16]].push(UU[-WR[70]] & WR[11]), UU[-WR[70]] >>= WR[3], UU[WR[21]] -= WR[3])
                      } while (UU[WR[21]] > WR[23]);
                      UU[WR[46]] = -WR[2]
                    } return UU[WR[46]] > -WR[2] && UU[WR[16]].push((UU[-WR[70]] | UU[WR[46]] << UU[WR[21]]) & WR[11]), fR(UU[WR[16]])
              }

              function pU(...UU) {
                return UU[WR[12]] = WR[2], typeof QR[UU[WR[1]]] === WR[17] ? QR[UU[WR[1]]] = tU(eR[UU[WR[1]]]) : QR[UU[WR[1]]]
              }
              RU[WR[12]] = WR[2];
              try {
                UU[WR[2]]
              } catch (EU) {
                UU[WR[2]] = ""
              }
              for (IR(RU[WR[71]] = gU(117) + pU(118) + pU(WR[86]) + "/", RU[WR[15]] = "", RU[WR[14]] = RU[WR[1]].length), RU[WR[16]] = WR[1]; RU[WR[16]] < RU[WR[14]]; RU[WR[16]] += WR[14])
                for (RU[WR[34]] = RU[WR[1]].charCodeAt(RU[WR[16]]) << WR[62] | (RU[WR[16]] + WR[2] < RU[WR[14]] ? RU[WR[1]].charCodeAt(RU[WR[16]] + WR[2]) << WR[3] : WR[1]) | (RU[WR[16]] + WR[0] < RU[WR[14]] ? RU[WR[1]].charCodeAt(RU[WR[16]] + WR[0]) : WR[1]), RU[WR[9]] = WR[1]; RU[WR[9]] < WR[16]; RU[WR[9]]++) RU[WR[16]] * WR[3] + RU[WR[9]] * WR[21] > RU[WR[1]].length * WR[3] ? RU[WR[15]] += UU[WR[2]] : RU[WR[15]] += RU[WR[71]].charAt(RU[WR[34]] >>> WR[21] * (WR[14] - RU[WR[9]]) & WR[20]);
              return RU[WR[15]]
            }

            function cU(...UU) {
              var RU, gU, tU, pU;
              for (IR(UU[WR[12]] = WR[0], UU[WR[0]] = UU[WR[2]].length, UU[WR[15]] = Array()), UU[WR[13]] = Array(Math.ceil(UU[WR[1]].length / WR[0])), RU = WR[1]; RU < UU[WR[13]].length; RU++) UU[WR[13]][RU] = UU[WR[1]].charCodeAt(RU * WR[0]) << WR[3] | UU[WR[1]].charCodeAt(RU * WR[0] + WR[2]);
              for (; UU[WR[13]].length > WR[1];) {
                for (IR(pU = Array(), tU = WR[1]), RU = WR[1]; RU < UU[WR[13]].length; RU++) IR(tU = (tU << WR[62]) + UU[WR[13]][RU], gU = Math.floor(tU / UU[WR[0]]), tU -= gU * UU[WR[0]]), (pU.length > WR[1] || gU > WR[1]) && (pU[pU.length] = gU);
                IR(UU[WR[15]][UU[WR[15]].length] = tU, UU[WR[13]] = pU)
              }
              for (UU[WR[64]] = "", RU = UU[WR[15]].length - WR[2]; RU >= WR[1]; RU--) UU[WR[64]] += UU[WR[2]].charAt(UU[WR[15]][RU]);
              for (UU[WR[21]] = Math.ceil(UU[WR[1]].length * WR[3] / (Math.log(UU[WR[2]].length) / Math.log(WR[0]))), RU = UU[WR[64]].length; RU < UU[WR[21]]; RU++) UU[WR[64]] = UU[WR[2]][WR[1]] + UU[WR[64]];
              return UU[WR[64]]
            }

            function GU(...UU) {
              var RU, gU;
              for (IR(UU[WR[12]] = WR[2], UU[-WR[73]] = "", UU[WR[0]] = -WR[2]); ++UU[WR[0]] < UU[WR[1]].length;) IR(RU = UU[WR[1]].charCodeAt(UU[WR[0]]), gU = UU[WR[0]] + WR[2] < UU[WR[1]].length ? UU[WR[1]].charCodeAt(UU[WR[0]] + WR[2]) : WR[1]), 55296 <= RU && RU <= 56319 && 56320 <= gU && gU <= 57343 && IR(RU = 65536 + ((RU & WR[72]) << WR[80]) + (gU & WR[72]), UU[WR[0]]++), RU <= WR[55] ? UU[-WR[73]] += String.fromCharCode(RU) : RU <= 2047 ? UU[-WR[73]] += String.fromCharCode(WR[36] | RU >>> WR[21] & WR[74], WR[65] | RU & WR[20]) : RU <= WR[84] ? UU[-WR[73]] += String.fromCharCode(224 | RU >>> WR[24] & WR[68], WR[65] | RU >>> WR[21] & WR[20], WR[65] | RU & WR[20]) : RU <= 2097151 && (UU[-WR[73]] += String.fromCharCode(WR[58] | RU >>> WR[75] & WR[23], WR[65] | RU >>> WR[24] & WR[20], WR[65] | RU >>> WR[21] & WR[20], WR[65] | RU & WR[20]));
              return UU[-WR[73]]
            }

            function jU(...UU) {
              for (IR(UU[WR[12]] = WR[2], UU[WR[2]] = Array(UU[WR[1]].length >> WR[0])), UU[WR[15]] = WR[1]; UU[WR[15]] < UU[WR[2]].length; UU[WR[15]]++) UU[WR[2]][UU[WR[15]]] = WR[1];
              for (UU[WR[15]] = WR[1]; UU[WR[15]] < UU[WR[1]].length * WR[3]; UU[WR[15]] += WR[3]) UU[WR[2]][UU[WR[15]] >> WR[34]] |= (UU[WR[1]].charCodeAt(UU[WR[15]] / WR[3]) & WR[11]) << WR[79] - UU[WR[15]] % WR[77];
              return UU[WR[2]]
            }

            function uU(...UU) {
              for (IR(UU[WR[12]] = WR[2], UU[WR[2]] = ""), UU[-WR[78]] = WR[1]; UU[-WR[78]] < UU[WR[1]].length * WR[77]; UU[-WR[78]] += WR[3]) UU[WR[2]] += String.fromCharCode(UU[WR[1]][UU[-WR[78]] >> WR[34]] >>> WR[79] - UU[-WR[78]] % WR[77] & WR[11]);
              return UU[WR[2]]
            }

            function CU(...UU) {
              return UU[WR[12]] = WR[0], UU[WR[1]] >>> UU[WR[2]] | UU[WR[1]] << WR[77] - UU[WR[2]]
            }

            function hU(...UU) {
              return UU[WR[12]] = WR[0], UU[WR[1]] >>> UU[WR[2]]
            }

            function QU(...UU) {
              return UU[WR[12]] = WR[14], UU[WR[1]] & UU[WR[2]] ^ ~UU[WR[1]] & UU[WR[0]]
            }

            function eU(...UU) {
              return UU[WR[12]] = WR[14], UU[WR[1]] & UU[WR[2]] ^ UU[WR[1]] & UU[WR[0]] ^ UU[WR[2]] & UU[WR[0]]
            }

            function WU(...UU) {
              return UU[WR[12]] = WR[2], CU(UU[WR[1]], WR[0]) ^ CU(UU[WR[1]], WR[30]) ^ CU(UU[WR[1]], 22)
            }

            function fU(...UU) {
              return UU[WR[12]] = WR[2], CU(UU[WR[1]], WR[21]) ^ CU(UU[WR[1]], 11) ^ CU(UU[WR[1]], 25)
            }

            function xU(...UU) {
              return UU[WR[12]] = WR[2], CU(UU[WR[1]], WR[23]) ^ CU(UU[WR[1]], WR[75]) ^ hU(UU[WR[1]], WR[14])
            }

            function mU(...UU) {
              return UU[WR[12]] = WR[2], CU(UU[WR[1]], 17) ^ CU(UU[WR[1]], WR[81]) ^ hU(UU[WR[1]], WR[80])
            }

            function IU(...RU) {
              var gU, tU, pU, EU, PU, TU, qU, KU, cU, GU, jU, uU;
              for (IR(RU[WR[12]] = WR[0], RU[WR[5]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), RU[-WR[83]] = new Array(WR[82])), IR(RU[WR[1]][RU[WR[2]] >> WR[34]] |= WR[65] << WR[79] - RU[WR[2]] % WR[77], RU[WR[1]][(RU[WR[2]] + WR[82] >> WR[39] << WR[16]) + WR[68]] = RU[WR[2]]), cU = WR[1]; cU < RU[WR[1]].length; cU += WR[62]) {
                for (IR(gU = RU[WR[5]][WR[1]], tU = RU[WR[5]][WR[2]], pU = RU[WR[5]][WR[0]], EU = RU[WR[5]][WR[14]], PU = RU[WR[5]][WR[16]], TU = RU[WR[5]][WR[34]], qU = RU[WR[5]][WR[21]], KU = RU[WR[5]][WR[23]]), GU = WR[1]; GU < WR[82]; GU++) IR(GU < WR[62] ? RU[-WR[83]][GU] = RU[WR[1]][GU + cU] : RU[-WR[83]][GU] = JU(JU(JU(mU(RU[-WR[83]][GU - WR[0]]), RU[-WR[83]][GU - WR[23]]), xU(RU[-WR[83]][GU - WR[68]])), RU[-WR[83]][GU - WR[62]]), jU = JU(JU(JU(JU(KU, fU(PU)), QU(PU, TU, qU)), UU[WR[0]][GU]), RU[-WR[83]][GU]), uU = JU(WU(gU), eU(gU, tU, pU)), KU = qU, qU = TU, TU = PU, PU = JU(EU, jU), EU = pU, pU = tU, tU = gU, gU = JU(jU, uU));
                IR(RU[WR[5]][WR[1]] = JU(gU, RU[WR[5]][WR[1]]), RU[WR[5]][WR[2]] = JU(tU, RU[WR[5]][WR[2]]), RU[WR[5]][WR[0]] = JU(pU, RU[WR[5]][WR[0]]), RU[WR[5]][WR[14]] = JU(EU, RU[WR[5]][WR[14]]), RU[WR[5]][WR[16]] = JU(PU, RU[WR[5]][WR[16]]), RU[WR[5]][WR[34]] = JU(TU, RU[WR[5]][WR[34]]), RU[WR[5]][WR[21]] = JU(qU, RU[WR[5]][WR[21]]), RU[WR[5]][WR[23]] = JU(KU, RU[WR[5]][WR[23]]))
              }
              return RU[WR[5]]
            }

            function JU(...UU) {
              return IR(UU[WR[12]] = WR[0], UU[WR[5]] = (UU[WR[1]] & WR[84]) + (UU[WR[2]] & WR[84]), UU[WR[85]] = (UU[WR[1]] >> WR[62]) + (UU[WR[2]] >> WR[62]) + (UU[WR[5]] >> WR[62])), UU[WR[85]] << WR[62] | UU[WR[5]] & WR[84]
            }
            return IR(UU[WR[12]] = WR[1], UU[-WR[4]] = WR[1], UU[WR[2]] = ""), UU[WR[0]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: RU,
              b64: pU,
              any: EU,
              hex_hmac: tU,
              b64_hmac: pU,
              any_hmac: EU
            }
          }(), console.log(UU[WR[5]]))
        }(), UU[WR[1]] >= RU
      }, PR = (...UU) => {
        function RU(...UU) {
          return UU[WR[12]] = WR[2], typeof QR[UU[WR[1]]] === WR[17] ? QR[UU[WR[1]]] = function(...UU) {
            for (IR(UU[WR[12]] = WR[2], UU[WR[88]] = 'G,DwFxrI!@%+p{L3?h^Z$d5VmQ1vM;f)6q/:OkY&C}|BAgi(8TEUj_SnJ.t9ouN0Pl=ReKHyW>"z4#<`]Xbac[2*~7s', UU[WR[0]] = "" + (UU[WR[1]] || ""), UU[-WR[87]] = UU[WR[0]].length, UU[WR[16]] = [], UU[WR[86]] = WR[1], UU[WR[9]] = WR[1], UU[WR[46]] = -WR[2]), UU[WR[3]] = WR[1]; UU[WR[3]] < UU[-WR[87]]; UU[WR[3]]++)
              if (UU[WR[89]] = UU[WR[88]].indexOf(UU[WR[0]][UU[WR[3]]]), UU[WR[89]] !== -WR[2])
                if (UU[WR[46]] < WR[1]) UU[WR[46]] = UU[WR[89]];
                else {
                  IR(UU[WR[46]] += UU[WR[89]] * WR[27], UU[WR[86]] |= UU[WR[46]] << UU[WR[9]], UU[WR[9]] += (UU[WR[46]] & WR[28]) > WR[29] ? WR[30] : WR[31]);
                  do {
                    IR(UU[WR[16]].push(UU[WR[86]] & WR[11]), UU[WR[86]] >>= WR[3], UU[WR[9]] -= WR[3])
                  } while (UU[WR[9]] > WR[23]);
                  UU[WR[46]] = -WR[2]
                } return UU[WR[46]] > -WR[2] && UU[WR[16]].push((UU[WR[86]] | UU[WR[46]] << UU[WR[9]]) & WR[11]), fR(UU[WR[16]])
          }(eR[UU[WR[1]]]) : QR[UU[WR[1]]]
        }
        UU[WR[12]] = WR[0], RU(120) + WR[90] in mR && function(...UU) {
          IR(UU[WR[12]] = WR[1], UU[WR[57]] = function(...UU) {
            for (IR(UU[WR[12]] = WR[2], UU[-WR[55]] = UU[WR[1]].length, UU[WR[15]] = [], UU[WR[14]] = WR[1]), UU[-WR[91]] = WR[1]; UU[-WR[91]] < UU[-WR[55]]; UU[-WR[91]]++) UU[WR[15]].push(UU[-WR[91]] !== WR[1] && UU[WR[1]][UU[-WR[91]]] > UU[WR[1]][UU[-WR[91]] - WR[2]] ? UU[WR[15]][UU[-WR[91]] - WR[2]] + WR[2] : WR[2]);
            for (UU[WR[34]] = UU[-WR[55]] - WR[2]; UU[WR[34]] >= WR[1]; UU[WR[34]]--) UU[WR[34]] !== UU[-WR[55]] - WR[2] && UU[WR[1]][UU[WR[34]]] > UU[WR[1]][UU[WR[34]] + WR[2]] && (UU[WR[15]][UU[WR[34]]] = Math.max(UU[WR[15]][UU[WR[34]]], UU[WR[15]][UU[WR[34]] + WR[2]] + WR[2])), UU[WR[14]] += UU[WR[15]][UU[WR[34]]];
            return UU[WR[14]]
          }, console.log(UU[WR[57]]))
        }();
        const gU = crypto[RU(121) + RU(122) + RU(123)](new Uint8Array(KR)),
          tU = pR[WR[13]][RU(124) + RU(125)](UU[WR[2]], {
            [RU(126)]: WR[2]
          });
        qR(pU(UU[WR[1]]), gU, WR[2], tU);
        const EU = new Uint8Array(KR + tU[RU(WR[55])]);
        return IR(EU[RU(WR[65])](gU), EU[RU(WR[65])](tU, KR)), EU
      }, TR = (...UU) => {
        function RU(...UU) {
          return UU[WR[12]] = WR[2], typeof QR[UU[WR[1]]] === WR[17] ? QR[UU[WR[1]]] = function(...UU) {
            for (IR(UU[WR[12]] = WR[2], UU[WR[5]] = '1u+w8(6y/3!$>N=MnAZoBcalI~m,?0j_G;7pHr^tY{)S2`UTCD9F%xV4J|#k}<e[PWiO@b"vRKdXQsLfz:ghq5]E.*&', UU[WR[0]] = "" + (UU[WR[1]] || ""), UU[-WR[27]] = UU[WR[0]].length, UU[WR[10]] = [], UU[WR[8]] = WR[1], UU[WR[21]] = WR[1], UU[WR[46]] = -WR[2]), UU[WR[92]] = WR[1]; UU[WR[92]] < UU[-WR[27]]; UU[WR[92]]++)
              if (UU[WR[6]] = UU[WR[5]].indexOf(UU[WR[0]][UU[WR[92]]]), UU[WR[6]] !== -WR[2])
                if (UU[WR[46]] < WR[1]) UU[WR[46]] = UU[WR[6]];
                else {
                  IR(UU[WR[46]] += UU[WR[6]] * WR[27], UU[WR[8]] |= UU[WR[46]] << UU[WR[21]], UU[WR[21]] += (UU[WR[46]] & WR[28]) > WR[29] ? WR[30] : WR[31]);
                  do {
                    IR(UU[WR[10]].push(UU[WR[8]] & WR[11]), UU[WR[8]] >>= WR[3], UU[WR[21]] -= WR[3])
                  } while (UU[WR[21]] > WR[23]);
                  UU[WR[46]] = -WR[2]
                } return UU[WR[46]] > -WR[2] && UU[WR[10]].push((UU[WR[8]] | UU[WR[46]] << UU[WR[21]]) & WR[11]), fR(UU[WR[10]])
          }(eR[UU[WR[1]]]) : QR[UU[WR[1]]]
        }
        if (UU[WR[12]] = WR[0], RU(129) in mR && function(...UU) {
            var RU;
            IR(UU[WR[12]] = WR[1], RU = function(...UU) {
              IR(UU[WR[12]] = WR[2], this.hG = UU[WR[1]], this.length = WR[1], this.map = {}, this.head = WR[32], this.tail = WR[32])
            }, RU.prototype.get = function(...UU) {
              var RU;
              return IR(UU[WR[12]] = WR[2], RU = this.map[UU[WR[1]]]), RU ? (this.remove(RU), this.insert(RU.key, RU.val), RU.val) : -WR[2]
            }, RU.prototype.put = function(...UU) {
              IR(UU[WR[12]] = WR[0], this.map[UU[WR[1]]] ? (this.remove(this.map[UU[WR[1]]]), this.insert(UU[WR[1]], UU[WR[2]])) : this.length === this.hG ? (this.remove(this.head), this.insert(UU[WR[1]], UU[WR[2]])) : (this.insert(UU[WR[1]], UU[WR[2]]), this.length++))
            }, RU.prototype.remove = function(UU) {
              var RU, gU = UU.prev;
              (RU = UU.next) && (RU.prev = gU), gU && (gU.next = RU), this.head === UU && (this.head = RU), this.tail === UU && (this.tail = gU), delete this.map[UU.key]
            }, RU.prototype.insert = function(...UU) {
              IR(UU[WR[12]] = WR[0], UU[WR[5]] = new List(UU[WR[1]], UU[WR[2]]), this.tail ? (this.tail.next = UU[WR[5]], UU[WR[5]].prev = this.tail, this.tail = UU[WR[5]]) : (this.tail = UU[WR[5]], this.head = UU[WR[5]]), this.map[UU[WR[1]]] = UU[WR[5]])
            }, console.log(RU))
          }(), UU[WR[2]][RU(130)] < KR) {
          function PU(...UU) {
            for (IR(UU[WR[12]] = WR[2], UU[WR[5]] = 'O[8"Yn>|HqX#`]?)iCJxubF<pr@!:SA*VLNj4R;1$Dzvgyf2.%{~I(s}W0t5,G=7wM9laTB6cmd_Qh&KkU3+e/E^PoZ', UU[-WR[93]] = "" + (UU[WR[1]] || ""), UU[WR[14]] = UU[-WR[93]].length, UU[WR[94]] = [], UU[-WR[96]] = WR[1], UU[WR[9]] = WR[1], UU[WR[23]] = -WR[2]), UU[WR[41]] = WR[1]; UU[WR[41]] < UU[WR[14]]; UU[WR[41]]++)
              if (UU[-WR[95]] = UU[WR[5]].indexOf(UU[-WR[93]][UU[WR[41]]]), UU[-WR[95]] !== -WR[2])
                if (UU[WR[23]] < WR[1]) UU[WR[23]] = UU[-WR[95]];
                else {
                  IR(UU[WR[23]] += UU[-WR[95]] * WR[27], UU[-WR[96]] |= UU[WR[23]] << UU[WR[9]], UU[WR[9]] += (UU[WR[23]] & WR[28]) > WR[29] ? WR[30] : WR[31]);
                  do {
                    IR(UU[WR[94]].push(UU[-WR[96]] & WR[11]), UU[-WR[96]] >>= WR[3], UU[WR[9]] -= WR[3])
                  } while (UU[WR[9]] > WR[23]);
                  UU[WR[23]] = -WR[2]
                } return UU[WR[23]] > -WR[2] && UU[WR[94]].push((UU[-WR[96]] | UU[WR[23]] << UU[WR[9]]) & WR[11]), fR(UU[WR[94]])
          }

          function TU(...UU) {
            return UU[WR[12]] = WR[2], typeof QR[UU[WR[1]]] === WR[17] ? QR[UU[WR[1]]] = PU(eR[UU[WR[1]]]) : QR[UU[WR[1]]]
          }

          function qU(...UU) {
            IR(UU[WR[12]] = WR[1], UU[-WR[56]] = function(...UU) {
              for (IR(UU[WR[12]] = WR[2], UU[WR[97]] = WR[1], UU[WR[15]] = {}, UU[WR[13]] = WR[1], UU[WR[16]] = WR[1], UU[WR[8]] = WR[1], UU[-WR[98]] = UU[WR[1]].length), UU[-WR[95]] = WR[1]; UU[-WR[95]] < UU[-WR[98]]; UU[-WR[95]]++) {
                for (IR(UU[WR[15]] = {}, UU[WR[13]] = WR[1], UU[WR[16]] = WR[2]), UU[WR[3]] = UU[-WR[95]] + WR[2]; UU[WR[3]] < UU[-WR[98]]; UU[WR[3]]++) UU[WR[1]][UU[-WR[95]]].x !== UU[WR[1]][UU[WR[3]]].x || UU[WR[1]][UU[-WR[95]]].y !== UU[WR[1]][UU[WR[3]]].y ? (UU[WR[1]][UU[-WR[95]]].y === UU[WR[1]][UU[WR[3]]].y ? UU[WR[8]] = Number.MAX_SAFE_INTEGER : UU[WR[8]] = (UU[WR[1]][UU[-WR[95]]].x - UU[WR[1]][UU[WR[3]]].x) / (UU[WR[1]][UU[-WR[95]]].y - UU[WR[1]][UU[WR[3]]].y), UU[WR[15]][UU[WR[8]]] || (UU[WR[15]][UU[WR[8]]] = WR[1]), IR(UU[WR[15]][UU[WR[8]]]++, UU[WR[13]] = Math.max(UU[WR[13]], UU[WR[15]][UU[WR[8]]]))) : UU[WR[16]]++;
                IR(UU[WR[13]] += UU[WR[16]], UU[WR[97]] = Math.max(UU[WR[97]], UU[WR[13]]))
              }
              return UU[WR[97]]
            }, console.log(UU[-WR[56]]))
          }
          throw TU(131) + "t" in mR && qU(), new Error(gU)
        }
        const tU = new Uint8Array(UU[WR[2]][RU(WR[99])](KR));
        qR(pU(UU[WR[1]]), UU[WR[2]][RU(WR[99])](WR[1], KR), WR[2], tU);
        const EU = new(pR[WR[13]][RU(WR[38]) + WR[8]])({
          [RU(134)]: WR[37]
        });
        if (EU[RU(WR[56])](tU), EU[RU(136)] || !EU[RU(137)]) throw new Error(gU);
        return EU[RU(138)]
      })
    })();
    var JR = gU(36504),
      wR = gU(36509);

    function nR(UU) {
      return EU.tC.from(Uint8Array.from(UU))
    }

    function bR(UU) {
      return Array.from(UU)
    }

    function oR(UU, RU) {
      return {
        [UU]: {
          x: RU
        }
      }
    }

    function ZR(UU) {
      if (null === UU || "object" !== typeof UU || Array.isArray(UU)) return UU;
      const RU = Object.keys(UU);
      if (1 !== RU.length) return UU;
      const gU = UU[RU[0]];
      return null !== gU && "object" === typeof gU && !Array.isArray(gU) && "x" in gU ? gU.x : UU
    }

    function aR(UU, RU) {
      return void 0 === RU ? null : qU.has(UU) ? null === RU ? null : JSON.stringify(RU) : RU
    }

    function YR(UU, RU) {
      return null === RU && qU.has(UU) ? null : "string" === typeof RU && qU.has(UU) ? JSON.parse(RU) : RU
    }

    function BR(UU, RU, gU) {
      return (0, pU.E)(gU) ? null : oR(UU, aR(RU, gU))
    }

    function VR(UU, RU) {
      return (0, pU.E)(RU) ? null : YR(UU, ZR(RU))
    }

    function rR(UU) {
      const RU = {};
      for (const gU in UU) {
        const tU = UU[gU];
        RU[gU] = void 0 === tU ? null : tU
      }
      return RU
    }

    function XR(UU) {
      const RU = {};
      for (const gU in UU) {
        const tU = UU[gU];
        null !== tU && void 0 !== tU && (RU[gU] = tU)
      }
      return RU
    }

    function vR(UU, RU) {
      return Object.prototype.hasOwnProperty.call(UU, RU)
    }

    function dR(UU, RU) {
      const gU = {};
      for (const tU in UU) {
        const pU = UU[tU];
        gU[tU] = RU(pU)
      }
      return gU
    }

    function HR(UU, RU, gU) {
      const tU = [];
      for (let pU = 0; pU < RU.length; pU++) {
        const EU = RU[pU];
        vR(UU, EU) && tU.push({
          i: pU,
          v: gU(EU, UU[EU])
        })
      }
      return tU
    }

    function SR(UU, RU, gU) {
      const tU = {};
      for (const pU of UU) {
        const UU = RU[pU.i];
        void 0 !== UU ? tU[UU] = gU(UU, pU.v) : console.error(`Unknown Partial field index ${pU.i}`)
      }
      return tU
    }

    function sR(UU, RU) {
      return (0, pU.E)(RU) ? null : "FY" === UU ? function(UU) {
        return oR(CU, HR(UU, wR.A, ((UU, RU) => BR(rU[UU], UU, RU))))
      }(RU) : BR(VU[UU], UU, RU)
    }

    function yR(UU, RU) {
      return (0, pU.E)(RU) ? null : "FY" === UU ? function(UU) {
        return (0, pU.E)(UU) ? null : SR(UU, wR.A, VR)
      }(ZR(RU)) : VR(UU, RU)
    }

    function kR(UU) {
      const {
        type: RU,
        ...gU
      } = UU, tU = {};
      for (const pU in gU) {
        const UU = gU[pU];
        tU[pU] = aR(pU, UU)
      }
      if ("chunkAdded" === RU || "chunkRemoved" === RU) tU.rle = nR(tU.rle);
      else if ("playSound" === RU) {
        const UU = tU.rp;
        tU.rp = (0, pU.E)(UU) ? null : rR(UU)
      } else if ("customKillfeed" === RU) {
        var EU, PU;
        tU.killer = rR(null !== (EU = tU.killer) && void 0 !== EU ? EU : {}), tU.victim = rR(null !== (PU = tU.victim) && void 0 !== PU ? PU : {})
      }
      return {
        [RU]: tU
      }
    }

    function FR(UU) {
      const RU = Object.keys(UU)[0],
        gU = UU[RU],
        tU = {};
      for (const pU in gU) {
        const UU = gU[pU];
        tU[pU] = YR(pU, UU)
      }
      if ("chunkAdded" === RU || "chunkRemoved" === RU) tU.rle = bR(tU.rle);
      else if ("playSound" === RU) {
        const UU = tU.rp;
        tU.rp = (0, pU.E)(UU) ? null : XR(UU)
      } else if ("customKillfeed" === RU) {
        var EU, PU;
        tU.killer = XR(null !== (EU = tU.killer) && void 0 !== EU ? EU : {}), tU.victim = XR(null !== (PU = tU.victim) && void 0 !== PU ? PU : {})
      }
      return {
        type: RU,
        ...tU
      }
    }

    function iR(UU) {
      var RU, gU;
      return (0, pU.E)(UU) ? null : {
        name: UU.name,
        amount: null !== (RU = UU.amount) && void 0 !== RU ? RU : null,
        attributes: JSON.stringify(null !== (gU = UU.attributes) && void 0 !== gU ? gU : {})
      }
    }

    function AR(UU) {
      if ((0, pU.E)(UU)) return null;
      const RU = UU;
      return {
        name: RU.name,
        amount: RU.amount,
        attributes: JSON.parse(RU.attributes)
      }
    }

    function zR(UU) {
      if ((0, pU.E)(UU)) return null;
      return {
        fullSlotsArray: Array.isArray(UU.slots),
        entries: HR(UU, wR.p, ((UU, RU) => {
          if ((0, pU.E)(RU)) return null;
          if ("slots" === UU) {
            const UU = Array.isArray(RU) ? function(UU) {
              const RU = {};
              for (let gU = 0; gU < UU.length; gU++) RU[gU] = UU[gU];
              return RU
            }(RU) : RU;
            return oR(oU, function(UU) {
              const RU = {};
              for (const gU in UU) {
                const tU = UU[gU];
                RU[gU] = iR(tU)
              }
              return RU
            }(UU))
          }
          return oR(bU, RU)
        }))
      }
    }

    function MR(UU) {
      if ((0, pU.E)(UU)) return;
      const RU = UU.fullSlotsArray;
      return SR(UU.entries, wR.p, ((UU, gU) => {
        if ((0, pU.E)(gU)) return null;
        if ("slots" === UU) {
          const UU = function(UU) {
            const RU = {};
            for (const gU in UU) {
              const tU = UU[gU];
              RU[Number(gU)] = AR(tU)
            }
            return RU
          }(ZR(gU));
          return RU ? function(UU) {
            const RU = [];
            for (let gU = 0; gU < pU.m; gU++) RU.push(gU in UU ? UU[gU] : null);
            return RU
          }(UU) : UU
        }
        return ZR(gU)
      }))
    }

    function DR(UU) {
      return {
        entities: dR(UU.entities, (UU => HR(UU, wR.l, sR))),
        items: dR(UU.items, (UU => HR(UU, wR.t, ((UU, RU) => BR(XU[UU], UU, RU))))),
        camera: UU.camera,
        hotbar: zR(UU.hotbar),
        playerHud: (0, pU.E)(UU.playerHud) ? null : HR(UU.playerHud, wR.v, ((UU, RU) => (0, pU.E)(RU) ? null : function(UU, RU) {
          return {
            [UU]: RU
          }
        }("double", RU))),
        effects: (0, pU.E)(UU.effects) ? null : (0, JR.n)(UU.effects),
        uiElements: HR(UU.uiElements, wR.E, ((UU, RU) => (0, pU.E)(RU) ? null : JSON.stringify(RU))),
        environment: HR(UU.environment, wR.z, ((UU, RU) => BR(vU[UU], UU, RU))),
        structuralEvents: UU.structuralEvents.map(kR),
        ephemeralEvents: UU.ephemeralEvents.map(kR)
      }
    }

    function LR(UU) {
      var RU;
      const gU = {
          entities: dR(UU.entities, (UU => {
            const RU = SR(UU, wR.l, yR),
              gU = RU.type ? (0, tU.w)(RU.type) : null;
            return gU && (RU.type = "Mesh", RU.meshKind = gU.meshKind, RU.meshOpts = gU.meshOpts), RU
          })),
          items: dR(UU.items, (UU => SR(UU, wR.t, VR))),
          camera: {
            ...UU.camera,
            charging: null !== (RU = UU.camera.charging) && void 0 !== RU && RU
          },
          uiElements: SR(UU.uiElements, wR.E, ((UU, RU) => "string" === typeof RU ? JSON.parse(RU) : RU)),
          environment: SR(UU.environment, wR.z, VR),
          structuralEvents: UU.structuralEvents.map((UU => {
            const RU = FR(UU);
            return "mw" === RU.type ? (RU.fromBlockData ??= null, RU.toBlockData ??= null) : "chunkAdded" !== RU.type && "chunkRemoved" !== RU.type || (RU.sharedBlockData ??= []), RU
          })),
          ephemeralEvents: UU.ephemeralEvents.map((UU => FR(UU)))
        },
        EU = MR(UU.hotbar);
      return void 0 !== EU && (gU.hotbar = EU), (0, pU.E)(UU.playerHud) || (gU.playerHud = SR(UU.playerHud, wR.v, ((UU, RU) => (0, pU.E)(RU) ? null : function(UU) {
        if (null === UU || "object" !== typeof UU || Array.isArray(UU)) return UU;
        const RU = Object.keys(UU);
        return 1 !== RU.length || "int" !== RU[0] && "double" !== RU[0] ? UU : UU[RU[0]]
      }(RU)))), (0, pU.E)(UU.effects) || (gU.effects = (0, JR.j)(UU.effects)), gU
    }
    let NR, lR;
    var OR, Ug, Rg, gg, tg, pg, Eg, Pg, Tg, qg, Kg;
    const cg = ["b", 0, 1, "h", 3, "a", 9, 68, 5, "f", 4, 8, 255, "length", 212, 243, 157, 201, 30, "undefined", void 0, 105, "c", 2, 63, 6, "fromCodePoint", 7, 12, "push", "i", 64, 91, 8191, 88, 13, 14, 198, 111, 146, "g", "e", !1, 187, "join", 50, !0, "d", 16, 188, 162, 20, 176, 132, 120, 129, 115, 183, 33554432, 67108864, 90, 69, 230, 221, 17, 35, 211, 43, "-v", ")", "l)", 85, 34, 158, 148, 33, 167, null, 98, 245, 46, 103, 29, 121, 210, 55, 59, "8", 19, 72, 84, 75, 238, 196, 130, 124, 24, 95, 192, 127, 128, "tC", 206, 156, 160, "r", 36, 67, 228, "_"];

    function Gg(...UU) {
      return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = function(...UU) {
        for (hg(UU[cg[13]] = cg[2], UU[cg[5]] = 'A{MO[)s9ajW:B&6T7ZR>%p=KCbVLiNJ2g4wr]dqf+~h,uk^!*"ID#cx05zYSvto1y@e}?(<$XQl3`nU_E.F/m;|HP8G', UU[cg[0]] = "" + (UU[cg[1]] || ""), UU[cg[4]] = UU[cg[0]].length, UU[cg[10]] = [], UU[cg[8]] = cg[1], UU[cg[9]] = cg[1], UU[-cg[7]] = -cg[2]), UU[cg[3]] = cg[1]; UU[cg[3]] < UU[cg[4]]; UU[cg[3]]++)
          if (UU[cg[6]] = UU[cg[5]].indexOf(UU[cg[0]][UU[cg[3]]]), UU[cg[6]] !== -cg[2])
            if (UU[-cg[7]] < cg[1]) UU[-cg[7]] = UU[cg[6]];
            else {
              hg(UU[-cg[7]] += UU[cg[6]] * cg[32], UU[cg[8]] |= UU[-cg[7]] << UU[cg[9]], UU[cg[9]] += (UU[-cg[7]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
              do {
                hg(UU[cg[10]].push(UU[cg[8]] & cg[12]), UU[cg[8]] >>= cg[11], UU[cg[9]] -= cg[11])
              } while (UU[cg[9]] > cg[27]);
              UU[-cg[7]] = -cg[2]
            } return UU[-cg[7]] > -cg[2] && UU[cg[10]].push((UU[cg[8]] | UU[-cg[7]] << UU[cg[9]]) & cg[12]), jg(UU[cg[10]])
      }(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
    }

    function jg(...UU) {
      return UU[cg[13]] = cg[2], typeof gg !== cg[19] && gg ? (new gg).decode(new tg(UU[cg[1]])) : typeof pg !== cg[19] && pg ? pg.from(UU[cg[1]]).toString("utf-8") : Tg(UU[cg[1]])
    }

    function ug() {}

    function Cg(UU, RU, gU, tU = {}, pU, EU, PU, TU) {
      if (EU || (EU = function(...UU) {
          return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = pU(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
        }), pU || (pU = function(...UU) {
          for (hg(UU[cg[13]] = cg[2], UU[cg[2]] = 'EKTjAQOIbqhN9w$;{)20#RmY7>[%}5_n.B3],r*li^Cvo`4=eMDy~t1FdSpL"?u<ZfkGXW/xPH:6z@&+g8Jc(V!aUs|', UU[cg[0]] = "" + (UU[cg[1]] || ""), UU[cg[4]] = UU[cg[0]].length, UU[cg[37]] = [], UU[cg[8]] = cg[1], UU[-cg[18]] = cg[1], UU[-cg[31]] = -cg[2]), UU[cg[11]] = cg[1]; UU[cg[11]] < UU[cg[4]]; UU[cg[11]]++)
            if (UU[cg[30]] = UU[cg[2]].indexOf(UU[cg[0]][UU[cg[11]]]), UU[cg[30]] !== -cg[2])
              if (UU[-cg[31]] < cg[1]) UU[-cg[31]] = UU[cg[30]];
              else {
                hg(UU[-cg[31]] += UU[cg[30]] * cg[32], UU[cg[8]] |= UU[-cg[31]] << UU[-cg[18]], UU[-cg[18]] += (UU[-cg[31]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                do {
                  hg(UU[cg[37]].push(UU[cg[8]] & cg[12]), UU[cg[8]] >>= cg[11], UU[-cg[18]] -= cg[11])
                } while (UU[-cg[18]] > cg[27]);
                UU[-cg[31]] = -cg[2]
              } return UU[-cg[31]] > -cg[2] && UU[cg[37]].push((UU[cg[8]] | UU[-cg[31]] << UU[-cg[18]]) & cg[12]), jg(UU[cg[37]])
        }), hg(PU = void 0, TU = {
          [Gg(79)]: function(...UU) {
            function RU(...UU) {
              return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = function(...UU) {
                for (hg(UU[cg[13]] = cg[2], UU[cg[5]] = 'KP9HlZfiaMSAGVpBFOTrtgYkjELcUDeJbmos"QWh2NCq{7R;nd*10IX~!z8@(&.>653y#x,<^]?=w[+v4)`}u_/:%$|', UU[-cg[38]] = "" + (UU[cg[1]] || ""), UU[cg[4]] = UU[-cg[38]].length, UU[cg[10]] = [], UU[cg[41]] = cg[1], UU[cg[25]] = cg[1], UU[cg[40]] = -cg[2]), UU[-cg[39]] = cg[1]; UU[-cg[39]] < UU[cg[4]]; UU[-cg[39]]++)
                  if (UU[cg[30]] = UU[cg[5]].indexOf(UU[-cg[38]][UU[-cg[39]]]), UU[cg[30]] !== -cg[2])
                    if (UU[cg[40]] < cg[1]) UU[cg[40]] = UU[cg[30]];
                    else {
                      hg(UU[cg[40]] += UU[cg[30]] * cg[32], UU[cg[41]] |= UU[cg[40]] << UU[cg[25]], UU[cg[25]] += (UU[cg[40]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                      do {
                        hg(UU[cg[10]].push(UU[cg[41]] & cg[12]), UU[cg[41]] >>= cg[11], UU[cg[25]] -= cg[11])
                      } while (UU[cg[25]] > cg[27]);
                      UU[cg[40]] = -cg[2]
                    } return UU[cg[40]] > -cg[2] && UU[cg[10]].push((UU[cg[41]] | UU[cg[40]] << UU[cg[25]]) & cg[12]), jg(UU[cg[10]])
              }(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
            }
            RU(80) + "j" in ug && function(...UU) {
              function RU(UU) {
                var RU, gU, tU, pU, EU, PU, TU, qU = 'A=[o_;eHf+RCs}!pu4<dcrPn0Gb^VwzXS#Jt/ILg%FY]ikmUq6KT7MlOhQxWj)EZaBD*8v{.>,`~9y&523@?":($|1N';
                for (hg(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = cg[1], EU = cg[1], PU = -cg[2]), TU = cg[1]; TU < gU; TU++) {
                  var KU = qU.indexOf(RU[TU]);
                  if (KU !== -cg[2])
                    if (PU < cg[1]) PU = KU;
                    else {
                      hg(PU += KU * cg[32], pU |= PU << EU, EU += (PU & cg[33]) > cg[34] ? cg[35] : cg[36]);
                      do {
                        hg(tU.push(pU & cg[12]), pU >>= cg[11], EU -= cg[11])
                      } while (EU > cg[27]);
                      PU = -cg[2]
                    }
                }
                return PU > -cg[2] && tU.push((pU | PU << EU) & cg[12]), jg(tU)
              }

              function gU(...UU) {
                return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = RU(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
              }

              function tU(...UU) {
                UU[cg[13]] = cg[2];
                const RU = {};
                for (let gU of UU[cg[1]].replace(/[^w]/g, "").toLowerCase()) RU[gU] = RU[gU] + cg[2] || cg[2];
                return RU
              }

              function pU(...UU) {
                UU[cg[13]] = cg[23];
                const RU = buildCharMap(UU[cg[1]]),
                  gU = buildCharMap(UU[cg[2]]);
                for (let tU in RU)
                  if (RU[tU] !== gU[tU]) return cg[42];
                return Object.keys(RU).length !== Object.keys(gU).length ? cg[42] : cg[46]
              }

              function EU(...UU) {
                UU[cg[13]] = cg[2];
                return PU(UU[cg[1]]) !== 1 / 0
              }

              function PU(...UU) {
                if (UU[cg[13]] = cg[2], !UU[cg[1]]) return -cg[2];
                const RU = PU(UU[cg[1]].left),
                  gU = PU(UU[cg[1]].right),
                  tU = Math.abs(RU - gU);
                if (RU === 1 / 0 || gU === 1 / 0 || tU > cg[2]) return 1 / 0;
                return Math.max(RU, gU) + cg[2]
              }
              UU[cg[13]] = cg[1], window[gU(81) + gU(82) + gU(83) + cg[109]] = {
                buildCharacterMap: tU,
                isAnagrams: pU,
                isBalanced: EU,
                getHeightBalanced: PU
              }
            }(), hg([
              [UU[-cg[43]], UU[cg[2]], UU[cg[23]]], UU[-250]
            ] = Kg, console[RU(cg[90])]("" + UU[-cg[43]][cg[44]](".") + (RU(cg[71]) + RU(86)) + UU[cg[23]][RU(87) + "me"] + RU(cg[34]) + UU[cg[2]]))
          }
        }), RU === Gg(89) + Gg(cg[60])) {
        function qU(...UU) {
          hg(UU[cg[13]] = cg[1], UU[cg[48]] = function(...RU) {
            return RU[cg[13]] = cg[23], UU[-cg[45]]({}, RU[cg[1]], RU[cg[2]])
          }, UU[-cg[45]] = function(...RU) {
            if (hg(RU[cg[13]] = cg[4], RU[cg[5]] = {}), RU[cg[1]][RU[cg[2]] + RU[cg[23]]] !== cg[20]) return RU[cg[1]][RU[cg[2]] + RU[cg[23]]];
            if (RU[cg[2]] === RU[cg[23]]) return cg[46];
            for (RU[cg[10]] = cg[1]; RU[cg[10]] < RU[cg[2]].length; RU[cg[10]]++) RU[cg[5]][RU[cg[2]][RU[cg[10]]]] === cg[20] && (RU[cg[5]][RU[cg[2]][RU[cg[10]]]] = cg[1]), RU[cg[5]][RU[cg[23]][RU[cg[10]]]] === cg[20] && (RU[cg[5]][RU[cg[23]][RU[cg[10]]]] = cg[1]), hg(RU[cg[5]][RU[cg[2]][RU[cg[10]]]]++, RU[cg[5]][RU[cg[23]][RU[cg[10]]]]--);
            for (RU[cg[8]] in RU[cg[5]])
              if (RU[cg[5]][RU[cg[8]]] !== cg[1]) return RU[cg[1]][RU[cg[2]] + RU[cg[23]]] = cg[42], cg[42];
            for (RU[cg[47]] = cg[2]; RU[cg[47]] < RU[cg[2]].length; RU[cg[47]]++)
              if (UU[-cg[45]](RU[cg[1]], RU[cg[2]].substr(cg[1], RU[cg[47]]), RU[cg[23]].substr(cg[1], RU[cg[47]])) && UU[-cg[45]](RU[cg[1]], RU[cg[2]].substr(RU[cg[47]]), RU[cg[23]].substr(RU[cg[47]])) || UU[-cg[45]](RU[cg[1]], RU[cg[2]].substr(cg[1], RU[cg[47]]), RU[cg[23]].substr(RU[cg[23]].length - RU[cg[47]])) && UU[-cg[45]](RU[cg[1]], RU[cg[2]].substr(RU[cg[47]]), RU[cg[23]].substr(cg[1], RU[cg[23]].length - RU[cg[47]]))) return RU[cg[1]][RU[cg[2]] + RU[cg[23]]] = cg[46], cg[46];
            return RU[cg[1]][RU[cg[2]] + RU[cg[23]]] = cg[42], cg[42]
          }, console.log(UU[cg[48]]))
        }
        Gg(cg[32]) + "V" in ug && qU(), Kg = []
      }
      if (RU === EU(92) + EU(93)) {
        function KU(...UU) {
          for (hg(UU[cg[13]] = cg[2], UU[cg[2]] = 'F=kGu`hyRNb;5^CjIo[v}PYp?H(2!/T|dLV@MnA+,i$tcXEmZ"J17lwOxBfU.0qSe*D#&4azK8{%QW3rs9:)<_>~]6g', UU[cg[23]] = "" + (UU[cg[1]] || ""), UU[cg[47]] = UU[cg[23]].length, UU[cg[10]] = [], UU[cg[8]] = cg[1], UU[cg[40]] = cg[1], UU[cg[27]] = -cg[2]), UU[cg[11]] = cg[1]; UU[cg[11]] < UU[cg[47]]; UU[cg[11]]++)
            if (UU[-cg[49]] = UU[cg[2]].indexOf(UU[cg[23]][UU[cg[11]]]), UU[-cg[49]] !== -cg[2])
              if (UU[cg[27]] < cg[1]) UU[cg[27]] = UU[-cg[49]];
              else {
                hg(UU[cg[27]] += UU[-cg[49]] * cg[32], UU[cg[8]] |= UU[cg[27]] << UU[cg[40]], UU[cg[40]] += (UU[cg[27]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                do {
                  hg(UU[cg[10]].push(UU[cg[8]] & cg[12]), UU[cg[8]] >>= cg[11], UU[cg[40]] -= cg[11])
                } while (UU[cg[40]] > cg[27]);
                UU[cg[27]] = -cg[2]
              } return UU[cg[27]] > -cg[2] && UU[cg[10]].push((UU[cg[8]] | UU[cg[27]] << UU[cg[40]]) & cg[12]), jg(UU[cg[10]])
        }

        function cU(...UU) {
          return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = KU(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
        }

        function GU(...RU) {
          var gU;
          return RU[cg[13]] = cg[1], cU(100) + cg[87] in ug && function(...UU) {
            function RU(...UU) {
              return UU[cg[13]] = cg[2], UU[cg[1]][cg[2]] * cg[59] + (UU[cg[1]][cg[1]] < cg[1] ? cg[58] | UU[cg[1]][cg[1]] : UU[cg[1]][cg[1]])
            }

            function gU(...UU) {
              switch (UU[cg[13]] = cg[2], ((UU[cg[1]] & cg[58]) !== cg[1]) * cg[2] + (UU[cg[1]] < cg[1]) * cg[23]) {
                case cg[1]:
                  return [UU[cg[1]] % cg[58], Math.trunc(UU[cg[1]] / cg[59])];
                case cg[2]:
                  return [UU[cg[1]] % cg[58] - cg[58], Math.trunc(UU[cg[1]] / cg[59]) + cg[2]];
                case cg[23]:
                  return [((UU[cg[1]] + cg[58]) % cg[58] + cg[58]) % cg[58], Math.round(UU[cg[1]] / cg[59])];
                case cg[4]:
                  return [UU[cg[1]] % cg[58], Math.trunc(UU[cg[1]] / cg[59])]
              }
            }
            UU[cg[13]] = cg[1], hg(UU[cg[5]] = RU([cg[23], cg[10]]), UU[cg[2]] = RU([cg[2], cg[23]]), UU[cg[60]] = UU[cg[5]] + UU[cg[2]], UU[cg[47]] = UU[cg[60]] - UU[cg[2]], UU[cg[10]] = UU[cg[47]] * cg[23], UU[cg[61]] = UU[cg[10]] / cg[23], console.log(gU(UU[cg[60]])), console.log(gU(UU[cg[47]])), console.log(gU(UU[cg[10]])), console.log(gU(UU[cg[61]])))
          }(), hg(gU = function(...RU) {
            return Kg = RU, TU[UU].apply(this)
          }, RU[cg[0]] = tU[UU]), RU[cg[0]] && RU[cg[0]], gU
        }
        cU(94) in ug && (module.exports = async (UU = (...UU) => {
          throw UU[cg[13]] = cg[1], new Error(function(...UU) {
            if (UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19]) return OR[UU[cg[1]]] = function(...UU) {
              for (hg(UU[cg[13]] = cg[2], UU[cg[45]] = '4VinPA8&hObEslaK>[U*vJtMd.R;5x"TB,/~H|:zSI1cN(_j^uwy76Yqr@#Q2?<C%{G]9mD$eWo=X03+FgLkf)!Z`}p', UU[cg[23]] = "" + (UU[cg[1]] || ""), UU[cg[4]] = UU[cg[23]].length, UU[-cg[51]] = [], UU[cg[41]] = cg[1], UU[cg[25]] = cg[1], UU[cg[40]] = -cg[2]), UU[cg[3]] = cg[1]; UU[cg[3]] < UU[cg[4]]; UU[cg[3]]++)
                if (UU[cg[50]] = UU[cg[45]].indexOf(UU[cg[23]][UU[cg[3]]]), UU[cg[50]] !== -cg[2])
                  if (UU[cg[40]] < cg[1]) UU[cg[40]] = UU[cg[50]];
                  else {
                    hg(UU[cg[40]] += UU[cg[50]] * cg[32], UU[cg[41]] |= UU[cg[40]] << UU[cg[25]], UU[cg[25]] += (UU[cg[40]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                    do {
                      hg(UU[-cg[51]].push(UU[cg[41]] & cg[12]), UU[cg[41]] >>= cg[11], UU[cg[25]] -= cg[11])
                    } while (UU[cg[25]] > cg[27]);
                    UU[cg[40]] = -cg[2]
                  } UU[cg[40]] > -cg[2] && UU[-cg[51]].push((UU[cg[41]] | UU[cg[40]] << UU[cg[25]]) & cg[12]);
              return jg(UU[-cg[51]])
            }(Ug[UU[cg[1]]]);
            return OR[UU[cg[1]]]
          }(cg[97]))
        }) => {
          const RU = new Set(process.argv.slice(cg[23]));
          if (!RU.has(function(...UU) {
              if (UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19]) return OR[UU[cg[1]]] = function(...UU) {
                for (hg(UU[cg[13]] = cg[2], UU[cg[37]] = 'YhrRetsj8zmQNBkJx1KXw}5ISDZ7p?M3`g!4fdy$,)2nO*~HvFT[|+qLUVWEuC#c{l>iGbPA=0:a^_<69%]&"(.;/o@', UU[-cg[52]] = "" + (UU[cg[1]] || ""), UU[cg[4]] = UU[-cg[52]].length, UU[cg[10]] = [], UU[cg[8]] = cg[1], UU[cg[53]] = cg[1], UU[cg[27]] = -cg[2]), UU[cg[11]] = cg[1]; UU[cg[11]] < UU[cg[4]]; UU[cg[11]]++)
                  if (UU[cg[6]] = UU[cg[37]].indexOf(UU[-cg[52]][UU[cg[11]]]), UU[cg[6]] !== -cg[2])
                    if (UU[cg[27]] < cg[1]) UU[cg[27]] = UU[cg[6]];
                    else {
                      hg(UU[cg[27]] += UU[cg[6]] * cg[32], UU[cg[8]] |= UU[cg[27]] << UU[cg[53]], UU[cg[53]] += (UU[cg[27]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                      do {
                        hg(UU[cg[10]].push(UU[cg[8]] & cg[12]), UU[cg[8]] >>= cg[11], UU[cg[53]] -= cg[11])
                      } while (UU[cg[53]] > cg[27]);
                      UU[cg[27]] = -cg[2]
                    } UU[cg[27]] > -cg[2] && UU[cg[10]].push((UU[cg[8]] | UU[cg[27]] << UU[cg[53]]) & cg[12]);
                return jg(UU[cg[10]])
              }(Ug[UU[cg[1]]]);
              return OR[UU[cg[1]]]
            }(96))) {
            if (RU.size !== cg[2]) return cg[42];
            if (!RU.has(cg[68])) return cg[42]
          }
          return await (async () => {
            function RU(...UU) {
              return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = function(...UU) {
                for (hg(UU[cg[13]] = cg[2], UU[cg[5]] = '^Es+W3:FzQy,Dw#Ge*|@Z0lY<O!%;fj`.67g/1)IT~aP>[b9n_vq(dL=uxNMC4cVK2iUo5}pHJ]R&XkSBA?r8{$"hmt', UU[-cg[54]] = "" + (UU[cg[1]] || ""), UU[cg[4]] = UU[-cg[54]].length, UU[cg[47]] = [], UU[cg[57]] = cg[1], UU[cg[25]] = cg[1], UU[-cg[56]] = -cg[2]), UU[-cg[55]] = cg[1]; UU[-cg[55]] < UU[cg[4]]; UU[-cg[55]]++)
                  if (UU[cg[30]] = UU[cg[5]].indexOf(UU[-cg[54]][UU[-cg[55]]]), UU[cg[30]] !== -cg[2])
                    if (UU[-cg[56]] < cg[1]) UU[-cg[56]] = UU[cg[30]];
                    else {
                      hg(UU[-cg[56]] += UU[cg[30]] * cg[32], UU[cg[57]] |= UU[-cg[56]] << UU[cg[25]], UU[cg[25]] += (UU[-cg[56]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                      do {
                        hg(UU[cg[47]].push(UU[cg[57]] & cg[12]), UU[cg[57]] >>= cg[11], UU[cg[25]] -= cg[11])
                      } while (UU[cg[25]] > cg[27]);
                      UU[-cg[56]] = -cg[2]
                    } UU[-cg[56]] > -cg[2] && UU[cg[47]].push((UU[cg[57]] | UU[-cg[56]] << UU[cg[25]]) & cg[12]);
                return jg(UU[cg[47]])
              }(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
            }
            return void 0 === await UU() ? RU(99) + cg[70] : ""
          })(), cg[46]
        }), PU = qg[UU] || (qg[UU] = GU())
      } else PU = TU[UU]();
      if (gU === EU(101) + EU(102)) {
        function jU(...UU) {
          for (hg(UU[cg[13]] = cg[2], UU[cg[63]] = 'avWu@G(zRHIjiCh$9BY1*Jy/.~5OcUL2Mk!N+}we"Z]nAt{m3rfd<oq_)bX|^gSpQ7V#l0:DP6F&ET`?K4x=;8[%>,s', UU[cg[23]] = "" + (UU[cg[1]] || ""), UU[cg[4]] = UU[cg[23]].length, UU[-cg[66]] = [], UU[cg[8]] = cg[1], UU[-cg[65]] = cg[1], UU[cg[64]] = -cg[2]), UU[-cg[62]] = cg[1]; UU[-cg[62]] < UU[cg[4]]; UU[-cg[62]]++)
            if (UU[cg[6]] = UU[cg[63]].indexOf(UU[cg[23]][UU[-cg[62]]]), UU[cg[6]] !== -cg[2])
              if (UU[cg[64]] < cg[1]) UU[cg[64]] = UU[cg[6]];
              else {
                hg(UU[cg[64]] += UU[cg[6]] * cg[32], UU[cg[8]] |= UU[cg[64]] << UU[-cg[65]], UU[-cg[65]] += (UU[cg[64]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                do {
                  hg(UU[-cg[66]].push(UU[cg[8]] & cg[12]), UU[cg[8]] >>= cg[11], UU[-cg[65]] -= cg[11])
                } while (UU[-cg[65]] > cg[27]);
                UU[cg[64]] = -cg[2]
              } return UU[cg[64]] > -cg[2] && UU[-cg[66]].push((UU[cg[8]] | UU[cg[64]] << UU[-cg[65]]) & cg[12]), jg(UU[-cg[66]])
        }

        function uU(...UU) {
          return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = jU(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
        }

        function CU() {
          module.exports = async (UU = (...UU) => {
            throw UU[cg[13]] = cg[1], new Error(function(...UU) {
              return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = function(...UU) {
                for (hg(UU[cg[13]] = cg[2], UU[cg[5]] = 'wtKRphSNHgVi%u[Z^9j2(,mA@yo"*T6Lf<J#?&Q`/lr_PXc>s:DI!e5]$U+0OqBkY4CGd.7xW)v1~F}|EMnz;a3{=8b', UU[-cg[67]] = "" + (UU[cg[1]] || ""), UU[cg[22]] = UU[-cg[67]].length, UU[cg[10]] = [], UU[cg[8]] = cg[1], UU[cg[9]] = cg[1], UU[cg[40]] = -cg[2]), UU[cg[3]] = cg[1]; UU[cg[3]] < UU[cg[22]]; UU[cg[3]]++)
                  if (UU[cg[30]] = UU[cg[5]].indexOf(UU[-cg[67]][UU[cg[3]]]), UU[cg[30]] !== -cg[2])
                    if (UU[cg[40]] < cg[1]) UU[cg[40]] = UU[cg[30]];
                    else {
                      hg(UU[cg[40]] += UU[cg[30]] * cg[32], UU[cg[8]] |= UU[cg[40]] << UU[cg[9]], UU[cg[9]] += (UU[cg[40]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                      do {
                        hg(UU[cg[10]].push(UU[cg[8]] & cg[12]), UU[cg[8]] >>= cg[11], UU[cg[9]] -= cg[11])
                      } while (UU[cg[9]] > cg[27]);
                      UU[cg[40]] = -cg[2]
                    } return UU[cg[40]] > -cg[2] && UU[cg[10]].push((UU[cg[8]] | UU[cg[40]] << UU[cg[9]]) & cg[12]), jg(UU[cg[10]])
              }(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
            }(104))
          }) => {
            const RU = new Set(process.argv.slice(cg[23]));
            if (!RU.has(uU(cg[21]))) {
              if (RU.size !== cg[2]) return cg[42];
              if (!RU.has(cg[68])) return cg[42]
            }
            return await (async () => void 0 === await UU() ? uU(108) + cg[70] : "")(), cg[46]
          }
        }
        return uU(cg[81]) in ug && CU(), {
          [uU(109) + uU(110)]: PU
        }
      } {
        function hU(...UU) {
          for (hg(UU[cg[13]] = cg[2], UU[cg[5]] = 'unRAFfMXBH(JvPg%;5L3_&#IKz1<bST2lZ{+GUhCq^rd])*/>jmNY:$|@k6DV,Et`8iQp=0w94~O?o[}x7aey".!Wcs', UU[cg[71]] = "" + (UU[cg[1]] || ""), UU[cg[4]] = UU[cg[71]].length, UU[cg[10]] = [], UU[-cg[72]] = cg[1], UU[cg[9]] = cg[1], UU[cg[40]] = -cg[2]), UU[cg[11]] = cg[1]; UU[cg[11]] < UU[cg[4]]; UU[cg[11]]++)
            if (UU[cg[6]] = UU[cg[5]].indexOf(UU[cg[71]][UU[cg[11]]]), UU[cg[6]] !== -cg[2])
              if (UU[cg[40]] < cg[1]) UU[cg[40]] = UU[cg[6]];
              else {
                hg(UU[cg[40]] += UU[cg[6]] * cg[32], UU[-cg[72]] |= UU[cg[40]] << UU[cg[9]], UU[cg[9]] += (UU[cg[40]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                do {
                  hg(UU[cg[10]].push(UU[-cg[72]] & cg[12]), UU[-cg[72]] >>= cg[11], UU[cg[9]] -= cg[11])
                } while (UU[cg[9]] > cg[27]);
                UU[cg[40]] = -cg[2]
              } return UU[cg[40]] > -cg[2] && UU[cg[10]].push((UU[-cg[72]] | UU[cg[40]] << UU[cg[9]]) & cg[12]), jg(UU[cg[10]])
        }

        function QU(...UU) {
          return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = hU(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
        }

        function eU(...UU) {
          UU[cg[13]] = cg[1]
        }
        return QU(cg[38]) + "H" in ug && eU(), PU
      }
    }

    function hg() {
      hg = function() {}
    }
    hg(OR = {}, Ug = ['ns{s;`IRNS.bPS:>W^dlr+)c*zYEs.hbfO(lg#?^ZBD:Y&oZVNK"ymy^ZBlEA', "9B}n&lO~DvCW%LkL}ODaix5M.BW?j]Tf=@$QSfFC5YN#`O{KDDxQ)06M)", '|D`nI"^+?yx<c&iZ$ooQv*CMzo4`E]j', '>Ta4/()1OjV(ES_fa"43QzH_.1n{iL6>qzZ3>qu^)xcrD6v]W{', "alzD4tjcOv&0w&,fmsMg%(8ZY%7Fstm=?o{", 'X%ID7qAaY6?b0YMZO"{', 'mw%N.#XlK&re/VyZb@!"5FXsWSm=jv(dN,]lbqzN`5nbfY?CzA', 'f@k0w"!&ARc1+OcLqVhD&.;zv@=_N)4h[15j{^~zZv8lsV5hW[As<("rz@S', "yS#niEK9IjY", '?iMX60r!`S93%$fR0szDq+^RB@9?(":qu@bU%(934z6?6.Ch8A', "5%Kj~Ezr`cF}G6ELb%4xL", ")?{gC$TbyzY[Q*CiA^K#$.6ayveQfLihaK2iPz`^`Z", ";669#f7#4zx", '$obJqtT{(Y1<p7_f|*9`R.k{jYqQ:VY]0+:n+5eJDj&_7Sohmh"D2#8N9', "hB3g*<`#,@YE$TV~^B=#om<Js>reZ*1KUS?$;(:cc&", "tj&2LrUBPZz[ESgKW?JQ]roYC&", '%%(WkD.r:6,OiOU+9g$"9_#Yj@Y', 'B?"gsw#JO>>3@CwJCvd`>S:&8@Tw^&hV/kYnnkd!)W~W6)X2:{', 'RR"xwx/~tRnlAvK~9^zamS>!Yo`Tf6Q2[vni~E"!?yXgP$aRQA', "`@WD.q;zoRerHVELdl>X90Tb7R*oZX}b)g7s", "jVN9ixYCZRZ(0q0~u@jg|#gJ!eP]3VR+#OMDJ+0Ns0Y<N[D~*jMXb", "~lpl%`(D.T>F8C[J=s:XtXA", "@+^[0Y5E112@SY4d,@1Q|z,!jY;zBO", "m@HQSwL~^ekS#L%+I@<`J!bc36y<&XrR*OgQHzS1mx>Xw6j", 'qziNc5Ah@zSEB][RJx}V]+cKgp`E~[1NO"Fgjo?B5YWY{vqq:B$iL;j{', "UDt#/oXBBS$T_V>~b%LNs]D>Nok2<&vNtiK[9ccKL%J9=)1J>vM", "Ud<#`IA", "3:bJ1l2~C%sFwdS~%{", '$%]W0mb~^51[4*sRpz!x!<Kr|&;lG"MCM[K4!dCJO>7wk*&', "C$aU.4cNwB_a?OgdC,0`70h+(&V", "W1!#ofYM", "&[ONlqoR2va?AvzN8f+j.`v|&p]", "p@QgO0||NSllKF3qu,bxvw9>a0LYw)fdsB_jDDNrb6l[Y([2?do2[XA", "I@8aIDAaf&", '(2#c8QlC2p56CO+R?hs0b`">]xL216`>wx>NomqC_Rwp9VT', "`K(Wem)&5ZpFfF&L2N^iLrA", "_w%nOoA", "{zxiW.=#O", "0zN2F.)btSQ5C/M]U<OXK$mlNSlEgSIwQh&W1nz;SSZon]rRl5U9Rq){", "uwCJv<k{", '=?J"#n+#4Bvn$S?qJ@&W4xp.xY*6iSM]!VO', '%TC4xn~3=YK%~[OZX@hL"D0{', 'Dxo"m$iB!ex', "eK]lS^.r86#EA", "ko,W}*4NO", "v$?9`0b>2BF5e.iKkzpl^?WCuc^#wb;r)[{s", '6vnla0iaP&&3stwJ1**Qh"?J^pUl#7MC32U$U]iy#y;.ebjR|b4Lb', "*w3)kDeln:uENX*wp?Fg/46|FBMU{X,q,Dq#yX2~FvC", "gOlgq+)>oT", 'T+)Wx5G#!5"o]$.+RzLXof>9uaYE1SLKv?|2.`T&R1?1|(j', 'rT}g8kVJIj,9+!}JqBbLO_{rEzB_yTD+v2d9GzA])>*"ZvHrGA', "QdSgGzD9m&B&u!3b/sasC$k1Djp(_MpL{RaJ`/fruS7JU.8NcV(WPU2Nf&", ";swLbqGokc^Q^&LKpK0#}*wR?>:32IS~|sO", "N^Xxy^t!;yx9~7(JED1j", "L+7xi/h^IB{X>qMR=zFnyvb9`S]", "[,^[kFYY(x{USYB>YKLXJ!aJ3ZobebirdNeaGzd&)", "e+1[p`FCu52wu$92#Vx2RzsR.z9KrMyN7T1#>UaRTecQ9L>w>Drg#DW]CZrL{", "o%yj/qB#^5L*E$9bwTPs=(kr|>aDc[$RPZul;I:9EBQndb&%rNajX`A", "pj]NS_{~yTCo)vGN=KBl>/aJTT=Z~[", "4xIN$lH($&xQ)7}Jw*Hxr!9>s", 'P@&9{|DNmjH.G"D~YVR3|(rrh:bDobh2,NyxYn0NSSu', "PS4guEA", "2x7ja0)~<>bOl(Vi>1CU@*){L%z`LO)J=vJ[d5|YkS<^nCLN", "dvm2y*cK8Y+OEO:", 'Yxx"}X~3a%x<<VVhr?%NC$)&RB:to&ZV?k(VX]}D|yW?WF$bO,43cYA', "1x,ng$E+dx{xC!j", "+@AUFIVJ:6B?oFMCxk+LR", "{Tx0zf4NFz^o{", "^@2x.q8Zv6N#X/G7AxJiE.#Y{R]2$6,f&V,nZo_~7jn]uOaV,@;24tqM6pe1{", "Ebp00_k{", "C%7Jkr<s?&N&TIOdD$Xj6", "!$hL`I9&e1FNEO$d", "4d1jRUgC2vE]gL1K%BN2rEyBj@AM{", "Qo<#4#t(u5bZBT.w.<hLGkk{O", '%v}gv<W]zYi`rLlq>Vd9AlBY]>"(JIirusFD6q899%QNLI0~q$*L+rpN3:}i{', ".k4s0^<#s", "1+ZsNtgRaY]e.C}2V$v2J#Z93%2`,M~R2{", "%^VLoc!>1BLLV.G7L?TU&zp(QZ_.~XlVJ?M", "eDq2n.%M", "L@LXMwZ{", "BbNek_hP", "n|0e{OF=", "]J3~3KU=", "yk+Tlxf[", "#10[q4K", "(|2l*hSP", "bz}a<YK", "~<sbG~G9", "R|c}_2bK", "%zUiz_c{", "R1^jB", "Sw<[9I0{", '?}8O5x"T', '_"mA}', "@tEQ,%Zk", 'Ac3jT$=&c[<7|Pzz"@>O33L!={*y1us', "sd%`)9J++XL", "kl,y_o)s", "r+WXCXZs", "klsX85Ds", "e|td>X9=", "+/%@P,@K", "?un_)", "YMS_Y40v", "h_}>Lx1N_9B!&p``6U^g}}n3142Ir:%", "(}4MZK$oo1_", "`yjIrlwW", "=u@T^T*W", "`yWT;0iW", "472<jFhW", "$(oF5", "}>.43wBR", "eOwrg%Lu", ";|k0y}N%H[sYGpJPQ{~1zzq6?aR&cBJP?^Ld?Q;Sg_&o75Q|B|Mh1", 'W6q0wXe5B"ZCI8!9>+3GHH@)jkD]zQ!9C2*U77hd>wZb[;I(yK', "Ttwri[}WeDsjUa3{{tK,RfiuMVFP@inRE?:P~", "Yj3u", "`o0s8#,{", "Dd^i4+IM", "BBDK&*hf.2", "4H.a]XUu", "&%w@$/B", "Fai~nN+^#", "&%w@$/Ku", "($si", "?i9c9Xyz", "d8=|7h_z", '~]6M"luu', "l0l#C=bL", "fj=l3ae", ",M_CgWLw", "@h~l6+$w", ";GX4|[}z", "cZ:T:", "=7XTRN9z", "@9~4?", "Uh,KA8FL", "OB:v11+L", "I@xv%/eZ", "i0T2`,&!", "9L%:%E)!", "7mI[>rJH", "@8e@c/NK@J", "S,a~a", "S,a~($r{Lo/^L", "OInT/_t{49iS=w+IC.)GlP}z", "@9tm5tn68]9@%h6em7tm=ILx", 'O"h.mVD^oCAg*wgj4$DTWVyz']), hg(Rg = function(...UU) {
      hg(UU[cg[13]] = cg[1], UU[cg[17]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], UU[cg[14]] = cg[20], UU[-cg[15]] = []);
      try {
        hg(UU[cg[14]] = Object, UU[-cg[15]][cg[29]]("".__proto__.constructor.name))
      } catch (Ug) {}
      UU: for (UU[-cg[16]] = cg[1]; UU[-cg[16]] < UU[cg[17]][cg[13]]; UU[-cg[16]]++) try {
        for (UU[cg[14]] = UU[cg[17]][UU[-cg[16]]](), UU[-cg[18]] = cg[1]; UU[-cg[18]] < UU[-cg[15]][cg[13]]; UU[-cg[18]]++)
          if (typeof UU[cg[14]][UU[-cg[15]][UU[-cg[18]]]] === cg[19]) continue UU;
        return UU[cg[14]]
      } catch (Ug) {}
      return UU[cg[14]] || this
    }() || {}, gg = Rg.TextDecoder, tg = Rg.Uint8Array, pg = Rg[cg[101]], Eg = Rg.String || String, Pg = Rg.Array || Array, Tg = function() {
      var UU, RU, gU = new Pg(cg[100]);
      return hg(UU = Eg[cg[26]] || Eg.fromCharCode, RU = []),
        function(...tU) {
          for (hg(tU[cg[13]] = cg[2], tU[cg[5]] = cg[20], tU[cg[23]] = cg[20], tU[cg[22]] = tU[cg[1]][cg[13]], RU[cg[13]] = cg[1]), tU[-cg[21]] = cg[1]; tU[-cg[21]] < tU[cg[22]];) hg(tU[cg[23]] = tU[cg[1]][tU[-cg[21]]++], tU[cg[23]] <= cg[99] ? tU[cg[5]] = tU[cg[23]] : tU[cg[23]] <= 223 ? tU[cg[5]] = (31 & tU[cg[23]]) << cg[25] | tU[cg[1]][tU[-cg[21]]++] & cg[24] : tU[cg[23]] <= 239 ? tU[cg[5]] = (15 & tU[cg[23]]) << cg[28] | (tU[cg[1]][tU[-cg[21]]++] & cg[24]) << cg[25] | tU[cg[1]][tU[-cg[21]]++] & cg[24] : Eg[cg[26]] ? tU[cg[5]] = (tU[cg[23]] & cg[27]) << 18 | (tU[cg[1]][tU[-cg[21]]++] & cg[24]) << cg[28] | (tU[cg[1]][tU[-cg[21]]++] & cg[24]) << cg[25] | tU[cg[1]][tU[-cg[21]]++] & cg[24] : (tU[cg[5]] = cg[24], tU[-cg[21]] += cg[4]), RU[cg[29]](gU[tU[cg[5]]] || (gU[tU[cg[5]]] = UU(tU[cg[5]]))));
          return RU[cg[44]]("")
        }
    }()), hg(qg = Object[Gg(78)](cg[77]), Kg = void 0), [][cg[13]] = cg[1], Gg(117) + cg[105] in ug && function(...UU) {
      UU[cg[13]] = cg[1]
    }(), hg(NR = (...UU) => {
      function RU(...UU) {
        return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = function(...UU) {
          for (hg(UU[cg[13]] = cg[2], UU[cg[5]] = 'ewA}=DvQ2Cbz|>T8R@No"`J?_146^sP)gdj+97[/hG&H!EBtO.qMcXni0USZx$Y%rKIV~a;WuFmf<l:Lp{]*3#,(y5k', UU[-cg[78]] = "" + (UU[cg[1]] || ""), UU[cg[4]] = UU[-cg[78]].length, UU[cg[10]] = [], UU[-cg[80]] = cg[1], UU[cg[9]] = cg[1], UU[cg[79]] = -cg[2]), UU[cg[11]] = cg[1]; UU[cg[11]] < UU[cg[4]]; UU[cg[11]]++)
            if (UU[cg[6]] = UU[cg[5]].indexOf(UU[-cg[78]][UU[cg[11]]]), UU[cg[6]] !== -cg[2])
              if (UU[cg[79]] < cg[1]) UU[cg[79]] = UU[cg[6]];
              else {
                hg(UU[cg[79]] += UU[cg[6]] * cg[32], UU[-cg[80]] |= UU[cg[79]] << UU[cg[9]], UU[cg[9]] += (UU[cg[79]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                do {
                  hg(UU[cg[10]].push(UU[-cg[80]] & cg[12]), UU[-cg[80]] >>= cg[11], UU[cg[9]] -= cg[11])
                } while (UU[cg[9]] > cg[27]);
                UU[cg[79]] = -cg[2]
              } return UU[cg[79]] > -cg[2] && UU[cg[10]].push((UU[-cg[80]] | UU[cg[79]] << UU[cg[9]]) & cg[12]), jg(UU[cg[10]])
        }(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
      }
      UU[cg[13]] = cg[2];
      const gU = function(UU) {
          var RU;
          return {
            meta: {
              ...UU.meta,
              formatVersion: wR.h,
              variation: null !== (RU = UU.meta.variation) && void 0 !== RU ? RU : null
            },
            initialChunks: UU.initialChunks.map((UU => ({
              chunkPos: UU.chunkPos,
              rle: nR(UU.rle),
              sharedBlockData: aR("sharedBlockData", UU.sharedBlockData)
            }))),
            ticks: UU.ticks.map(DR),
            editState: UU.editState
          }
        }(UU[cg[1]]),
        tU = tR(wR[cg[3]]);
      UU[-cg[81]] = cg[20];
      try {
        function qU(...UU) {
          for (hg(UU[cg[13]] = cg[2], UU[-cg[84]] = 'w?7]#&{4_`."Qk;dHst$2X|vOq^}K[fDu~h,lY<UJ>0BSFj=Vr8a/pyb):R!T3NMZ+(gEceI*WC%A5x6LGmn@Pio1z9', UU[-cg[82]] = "" + (UU[cg[1]] || ""), UU[cg[83]] = UU[-cg[82]].length, UU[-cg[86]] = [], UU[cg[41]] = cg[1], UU[cg[85]] = cg[1], UU[cg[40]] = -cg[2]), UU[cg[3]] = cg[1]; UU[cg[3]] < UU[cg[83]]; UU[cg[3]]++)
            if (UU[cg[30]] = UU[-cg[84]].indexOf(UU[-cg[82]][UU[cg[3]]]), UU[cg[30]] !== -cg[2])
              if (UU[cg[40]] < cg[1]) UU[cg[40]] = UU[cg[30]];
              else {
                hg(UU[cg[40]] += UU[cg[30]] * cg[32], UU[cg[41]] |= UU[cg[40]] << UU[cg[85]], UU[cg[85]] += (UU[cg[40]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                do {
                  hg(UU[-cg[86]].push(UU[cg[41]] & cg[12]), UU[cg[41]] >>= cg[11], UU[cg[85]] -= cg[11])
                } while (UU[cg[85]] > cg[27]);
                UU[cg[40]] = -cg[2]
              } return UU[cg[40]] > -cg[2] && UU[-cg[86]].push((UU[cg[41]] | UU[cg[40]] << UU[cg[85]]) & cg[12]), jg(UU[-cg[86]])
        }

        function KU(...UU) {
          return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = qU(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
        }

        function cU(...UU) {
          hg(UU[cg[13]] = cg[1], UU[cg[5]] = function(...UU) {
            for (hg(UU[cg[13]] = cg[2], UU[cg[89]] = cg[1], UU[cg[23]] = {}, UU[cg[22]] = cg[1], UU[-cg[88]] = cg[1], UU[cg[41]] = cg[1], UU[cg[25]] = UU[cg[1]].length), UU[cg[27]] = cg[1]; UU[cg[27]] < UU[cg[25]]; UU[cg[27]]++) {
              for (hg(UU[cg[23]] = {}, UU[cg[22]] = cg[1], UU[-cg[88]] = cg[2]), UU[cg[3]] = UU[cg[27]] + cg[2]; UU[cg[3]] < UU[cg[25]]; UU[cg[3]]++) UU[cg[1]][UU[cg[27]]].x !== UU[cg[1]][UU[cg[3]]].x || UU[cg[1]][UU[cg[27]]].y !== UU[cg[1]][UU[cg[3]]].y ? (UU[cg[1]][UU[cg[27]]].y === UU[cg[1]][UU[cg[3]]].y ? UU[cg[41]] = Number.MAX_SAFE_INTEGER : UU[cg[41]] = (UU[cg[1]][UU[cg[27]]].x - UU[cg[1]][UU[cg[3]]].x) / (UU[cg[1]][UU[cg[27]]].y - UU[cg[1]][UU[cg[3]]].y), UU[cg[23]][UU[cg[41]]] || (UU[cg[23]][UU[cg[41]]] = cg[1]), hg(UU[cg[23]][UU[cg[41]]]++, UU[cg[22]] = Math.max(UU[cg[22]], UU[cg[23]][UU[cg[41]]]))) : UU[-cg[88]]++;
              hg(UU[cg[22]] += UU[-cg[88]], UU[cg[89]] = Math.max(UU[cg[89]], UU[cg[22]]))
            }
            return UU[cg[89]]
          }, console.log(UU[cg[5]]))
        }
        Gg(118) + cg[87] in ug && cU(), UU[-cg[81]] = tU[KU(119)](gU)
      } catch (TU) {
        function GU(...UU) {
          for (hg(UU[cg[13]] = cg[2], UU[cg[5]] = 'BuzpG>#m,irD]U=QlW_vn}yb^!c{35~7;1"YtH(8s2:$MOAVX|I%wKaF[R6)T?<L0CqP&9oh4.+fN@eg/dZxk*`jJSE', UU[cg[0]] = "" + (UU[cg[1]] || ""), UU[cg[4]] = UU[cg[0]].length, UU[cg[93]] = [], UU[cg[41]] = cg[1], UU[-cg[90]] = cg[1], UU[-cg[92]] = -cg[2]), UU[cg[91]] = cg[1]; UU[cg[91]] < UU[cg[4]]; UU[cg[91]]++)
            if (UU[cg[6]] = UU[cg[5]].indexOf(UU[cg[0]][UU[cg[91]]]), UU[cg[6]] !== -cg[2])
              if (UU[-cg[92]] < cg[1]) UU[-cg[92]] = UU[cg[6]];
              else {
                hg(UU[-cg[92]] += UU[cg[6]] * cg[32], UU[cg[41]] |= UU[-cg[92]] << UU[-cg[90]], UU[-cg[90]] += (UU[-cg[92]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                do {
                  hg(UU[cg[93]].push(UU[cg[41]] & cg[12]), UU[cg[41]] >>= cg[11], UU[-cg[90]] -= cg[11])
                } while (UU[-cg[90]] > cg[27]);
                UU[-cg[92]] = -cg[2]
              } return UU[-cg[92]] > -cg[2] && UU[cg[93]].push((UU[cg[41]] | UU[-cg[92]] << UU[-cg[90]]) & cg[12]), jg(UU[cg[93]])
        }

        function jU(...UU) {
          return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = GU(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
        }

        function uU(...UU) {
          hg(UU[cg[13]] = cg[1], UU[-cg[94]] = function(...RU) {
            return hg(RU[cg[13]] = cg[4], RU[cg[4]] = {}), RU[cg[23]].length !== RU[cg[1]].length + RU[cg[2]].length ? cg[42] : UU[cg[0]](RU[cg[1]], RU[cg[2]], RU[cg[23]], cg[1], cg[1], cg[1], RU[cg[4]])
          }, UU[cg[0]] = function(RU, gU, tU, pU, EU, PU, TU) {
            var qU = cg[42];
            return PU >= tU.length ? cg[46] : TU["" + pU + EU + PU] !== cg[20] ? TU["" + pU + EU + PU] : (tU[PU] === RU[pU] && tU[PU] === gU[EU] ? qU = UU[cg[0]](RU, gU, tU, pU + cg[2], EU, PU + cg[2], TU) || UU[cg[0]](RU, gU, tU, pU, EU + cg[2], PU + cg[2], TU) : tU[PU] === RU[pU] ? qU = UU[cg[0]](RU, gU, tU, pU + cg[2], EU, PU + cg[2], TU) : tU[PU] === gU[EU] && (qU = UU[cg[0]](RU, gU, tU, pU, EU + cg[2], PU + cg[2], TU)), TU["" + pU + EU + PU] = qU, qU)
          }, console.log(UU[-cg[94]]))
        }
        throw jU(cg[54]) + "I" in ug && uU(), hg(console[jU(cg[83])](gU), tU[jU(122)](gU, {
          [jU(123) + jU(cg[95])]: (...UU) => (jU(125) + "y" in ug && function(...UU) {
            function RU(...UU) {
              for (hg(UU[cg[13]] = cg[2], UU[cg[2]] = ':u+%^v5w3]x!,y_jeronNHLqKQDYgW>$M*4VXm|RCtk9fG~aF)I<ZdO"i8B2hcSTpE`6&?lUJPbs#@z/A1({}7=[;.0', UU[cg[0]] = "" + (UU[cg[1]] || ""), UU[cg[98]] = UU[cg[0]].length, UU[cg[47]] = [], UU[cg[8]] = cg[1], UU[-cg[97]] = cg[1], UU[cg[27]] = -cg[2]), UU[cg[3]] = cg[1]; UU[cg[3]] < UU[cg[98]]; UU[cg[3]]++)
                if (UU[cg[30]] = UU[cg[2]].indexOf(UU[cg[0]][UU[cg[3]]]), UU[cg[30]] !== -cg[2])
                  if (UU[cg[27]] < cg[1]) UU[cg[27]] = UU[cg[30]];
                  else {
                    hg(UU[cg[27]] += UU[cg[30]] * cg[32], UU[cg[8]] |= UU[cg[27]] << UU[-cg[97]], UU[-cg[97]] += (UU[cg[27]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                    do {
                      hg(UU[cg[47]].push(UU[cg[8]] & cg[12]), UU[cg[8]] >>= cg[11], UU[-cg[97]] -= cg[11])
                    } while (UU[-cg[97]] > cg[27]);
                    UU[cg[27]] = -cg[2]
                  } return UU[cg[27]] > -cg[2] && UU[cg[47]].push((UU[cg[8]] | UU[cg[27]] << UU[-cg[97]]) & cg[12]), jg(UU[cg[47]])
            }

            function gU(...UU) {
              return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = RU(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
            }
            UU[cg[13]] = cg[1];
            const tU = require("path"),
              {
                version: pU
              } = require("../../package"),
              {
                version: EU
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: PU
              } = require("@redacted/components/package"),
              {
                sdkVersion: TU
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), tU.resolve(__dirname, jU(126) + gU(cg[99]) + "js")
          }(), Kg = [UU, {}], Cg(function(...UU) {
            return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = function(...UU) {
              for (hg(UU[cg[13]] = cg[2], UU[cg[5]] = '&LCdZEBDas:uHFQmrb)^3$v[pi>l{R?ThV=<6XW2wO%!y1AP9f7Uqc;_I+gNx}z4.0k5(jGK#"toM@S~,8e]`Y|J/n*', UU[cg[0]] = "" + (UU[cg[1]] || ""), UU[cg[96]] = UU[cg[0]].length, UU[cg[10]] = [], UU[-cg[95]] = cg[1], UU[cg[9]] = cg[1], UU[cg[40]] = -cg[2]), UU[cg[11]] = cg[1]; UU[cg[11]] < UU[cg[96]]; UU[cg[11]]++)
                if (UU[cg[6]] = UU[cg[5]].indexOf(UU[cg[0]][UU[cg[11]]]), UU[cg[6]] !== -cg[2])
                  if (UU[cg[40]] < cg[1]) UU[cg[40]] = UU[cg[6]];
                  else {
                    hg(UU[cg[40]] += UU[cg[6]] * cg[32], UU[-cg[95]] |= UU[cg[40]] << UU[cg[9]], UU[cg[9]] += (UU[cg[40]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                    do {
                      hg(UU[cg[10]].push(UU[-cg[95]] & cg[12]), UU[-cg[95]] >>= cg[11], UU[cg[9]] -= cg[11])
                    } while (UU[cg[9]] > cg[27]);
                    UU[cg[40]] = -cg[2]
                  } return UU[cg[40]] > -cg[2] && UU[cg[10]].push((UU[-cg[95]] | UU[cg[40]] << UU[cg[9]]) & cg[12]), jg(UU[cg[10]])
            }(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
          }(cg[100])))
        })), TU
      }
      const pU = PR(wR[cg[3]], UU[-cg[81]]),
        PU = EU[cg[101]][RU(cg[55])](cg[10]);
      return PU[RU(cg[94]) + RU(131) + "E"](wR[cg[3]]), EU[cg[101]].concat([PU, pU])
    }, lR = (...UU) => {
      function RU(...UU) {
        return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = function(...UU) {
          for (hg(UU[cg[13]] = cg[2], UU[cg[5]] = 'x$z>w10v/.48+<u"%]y^9~3!&;?:}O`5TBj#p=efIFrbHWgmkDCZSNGQdalnJUiqLoRXVcP7()26[*t_hM@E,K{AsY|', UU[cg[102]] = "" + (UU[cg[1]] || ""), UU[cg[22]] = UU[cg[102]].length, UU[cg[47]] = [], UU[cg[8]] = cg[1], UU[cg[25]] = cg[1], UU[cg[40]] = -cg[2]), UU[-cg[103]] = cg[1]; UU[-cg[103]] < UU[cg[22]]; UU[-cg[103]]++)
            if (UU[cg[30]] = UU[cg[5]].indexOf(UU[cg[102]][UU[-cg[103]]]), UU[cg[30]] !== -cg[2])
              if (UU[cg[40]] < cg[1]) UU[cg[40]] = UU[cg[30]];
              else {
                hg(UU[cg[40]] += UU[cg[30]] * cg[32], UU[cg[8]] |= UU[cg[40]] << UU[cg[25]], UU[cg[25]] += (UU[cg[40]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                do {
                  hg(UU[cg[47]].push(UU[cg[8]] & cg[12]), UU[cg[8]] >>= cg[11], UU[cg[25]] -= cg[11])
                } while (UU[cg[25]] > cg[27]);
                UU[cg[40]] = -cg[2]
              } return UU[cg[40]] > -cg[2] && UU[cg[47]].push((UU[cg[8]] | UU[cg[40]] << UU[cg[25]]) & cg[12]), jg(UU[cg[47]])
        }(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
      }
      UU[cg[13]] = cg[2], RU(cg[53]) in ug && function(...UU) {
        function RU(...UU) {
          return UU[cg[13]] = cg[2], UU[cg[1]][cg[2]] * cg[59] + (UU[cg[1]][cg[1]] < cg[1] ? cg[58] | UU[cg[1]][cg[1]] : UU[cg[1]][cg[1]])
        }

        function gU(...UU) {
          switch (UU[cg[13]] = cg[2], ((UU[cg[1]] & cg[58]) !== cg[1]) * cg[2] + (UU[cg[1]] < cg[1]) * cg[23]) {
            case cg[1]:
              return [UU[cg[1]] % cg[58], Math.trunc(UU[cg[1]] / cg[59])];
            case cg[2]:
              return [UU[cg[1]] % cg[58] - cg[58], Math.trunc(UU[cg[1]] / cg[59]) + cg[2]];
            case cg[23]:
              return [((UU[cg[1]] + cg[58]) % cg[58] + cg[58]) % cg[58], Math.round(UU[cg[1]] / cg[59])];
            case cg[4]:
              return [UU[cg[1]] % cg[58], Math.trunc(UU[cg[1]] / cg[59])]
          }
        }
        UU[cg[13]] = cg[1], hg(UU[cg[35]] = RU([cg[23], cg[10]]), UU[cg[79]] = RU([cg[2], cg[23]]), UU[-cg[62]] = UU[cg[35]] + UU[cg[79]], UU[-cg[89]] = UU[-cg[62]] - UU[cg[79]], UU[cg[41]] = UU[-cg[89]] * cg[23], UU[-cg[23]] = UU[cg[41]] / cg[23], console.log(gU(UU[-cg[62]])), console.log(gU(UU[-cg[89]])), console.log(gU(UU[cg[41]])), console.log(gU(UU[-cg[23]])))
      }();
      const gU = EU[cg[101]][RU(133)](UU[cg[1]]);
      if (gU[RU(134) + RU(135)] >= cg[10]) {
        function tU(...UU) {
          for (hg(UU[cg[13]] = cg[2], UU[-cg[104]] = 'kLZqbAnjKTptNgehdVQiYJED9fma0Ur@~l%"{[`HcW*OX=$+:vP,R1uFwBMC8I>o&(#!GS^_x4y3z<2./56|]?);}s7', UU[cg[23]] = "" + (UU[cg[1]] || ""), UU[cg[22]] = UU[cg[23]].length, UU[cg[47]] = [], UU[cg[8]] = cg[1], UU[cg[9]] = cg[1], UU[cg[40]] = -cg[2]), UU[cg[11]] = cg[1]; UU[cg[11]] < UU[cg[22]]; UU[cg[11]]++)
            if (UU[cg[6]] = UU[-cg[104]].indexOf(UU[cg[23]][UU[cg[11]]]), UU[cg[6]] !== -cg[2])
              if (UU[cg[40]] < cg[1]) UU[cg[40]] = UU[cg[6]];
              else {
                hg(UU[cg[40]] += UU[cg[6]] * cg[32], UU[cg[8]] |= UU[cg[40]] << UU[cg[9]], UU[cg[9]] += (UU[cg[40]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                do {
                  hg(UU[cg[47]].push(UU[cg[8]] & cg[12]), UU[cg[8]] >>= cg[11], UU[cg[9]] -= cg[11])
                } while (UU[cg[9]] > cg[27]);
                UU[cg[40]] = -cg[2]
              } return UU[cg[40]] > -cg[2] && UU[cg[47]].push((UU[cg[8]] | UU[cg[40]] << UU[cg[9]]) & cg[12]), jg(UU[cg[47]])
        }

        function PU(...UU) {
          return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = tU(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
        }
        const TU = gU[PU(136) + PU(137)](cg[1]);
        if ((cg[1], wR[cg[105]])(TU)) {
          function qU(...UU) {
            function RU(...UU) {
              return UU[cg[13]] = cg[2], typeof OR[UU[cg[1]]] === cg[19] ? OR[UU[cg[1]]] = function(...UU) {
                for (hg(UU[cg[13]] = cg[2], UU[-cg[107]] = 'O!HhAn2eJI/BtUc(Fa6dGujiTKobXZl$qNLC#";+Y&f9}m?)WDE[Q1>,v|rRg_SkP.VsM<`]=~@:z7{3*%wy^5x408p', UU[cg[0]] = "" + (UU[cg[1]] || ""), UU[-cg[106]] = UU[cg[0]].length, UU[cg[47]] = [], UU[cg[8]] = cg[1], UU[cg[25]] = cg[1], UU[cg[27]] = -cg[2]), UU[cg[11]] = cg[1]; UU[cg[11]] < UU[-cg[106]]; UU[cg[11]]++)
                  if (UU[cg[108]] = UU[-cg[107]].indexOf(UU[cg[0]][UU[cg[11]]]), UU[cg[108]] !== -cg[2])
                    if (UU[cg[27]] < cg[1]) UU[cg[27]] = UU[cg[108]];
                    else {
                      hg(UU[cg[27]] += UU[cg[108]] * cg[32], UU[cg[8]] |= UU[cg[27]] << UU[cg[25]], UU[cg[25]] += (UU[cg[27]] & cg[33]) > cg[34] ? cg[35] : cg[36]);
                      do {
                        hg(UU[cg[47]].push(UU[cg[8]] & cg[12]), UU[cg[8]] >>= cg[11], UU[cg[25]] -= cg[11])
                      } while (UU[cg[25]] > cg[27]);
                      UU[cg[27]] = -cg[2]
                    } return UU[cg[27]] > -cg[2] && UU[cg[47]].push((UU[cg[8]] | UU[cg[27]] << UU[cg[25]]) & cg[12]), jg(UU[cg[47]])
              }(Ug[UU[cg[1]]]) : OR[UU[cg[1]]]
            }

            function gU(...UU) {
              if (UU[cg[13]] = cg[2], !UU[cg[1]]) return -cg[2];
              const RU = gU(UU[cg[1]].left),
                tU = gU(UU[cg[1]].right),
                pU = Math.abs(RU - tU);
              return RU === 1 / 0 || tU === 1 / 0 || pU > cg[2] ? 1 / 0 : Math.max(RU, tU) + cg[2]
            }
            UU[cg[13]] = cg[1], window[RU(139) + RU(140) + RU(141) + cg[109]] = {
              buildCharacterMap: function(...UU) {
                UU[cg[13]] = cg[2];
                const RU = {};
                for (let gU of UU[cg[1]].replace(/[^w]/g, "").toLowerCase()) RU[gU] = RU[gU] + cg[2] || cg[2];
                return RU
              },
              isAnagrams: function(...UU) {
                UU[cg[13]] = cg[23];
                const RU = buildCharMap(UU[cg[1]]),
                  gU = buildCharMap(UU[cg[2]]);
                for (let tU in RU)
                  if (RU[tU] !== gU[tU]) return cg[42];
                return Object.keys(RU).length !== Object.keys(gU).length ? cg[42] : cg[46]
              },
              isBalanced: function(...UU) {
                return UU[cg[13]] = cg[2], gU(UU[cg[1]]) !== 1 / 0
              },
              getHeightBalanced: gU
            }
          }
          PU(138) in ug && qU();
          const KU = gU[PU(142)](cg[10]),
            cU = ER(TU) ? EU[cg[101]][PU(143)](TR(TU, KU)) : KU;
          return function(UU) {
            var RU, gU, tU, EU, PU;
            const TU = null === (RU = UU.meta) || void 0 === RU ? void 0 : RU.formatVersion;
            if (!(0, wR.r)(TU)) throw new Error(`Unsupported recording format version: ${TU}`);
            if (!Array.isArray(UU.initialChunks) || !Array.isArray(UU.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const pU of UU.ticks)
              if (!Array.isArray(pU.structuralEvents) || !Array.isArray(pU.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const qU = {
              ...UU.meta
            };
            return qU.formatVersion = wR.h, (0, pU.E)(qU.variation) && delete qU.variation, {
              meta: qU,
              initialChunks: UU.initialChunks.map((UU => {
                var RU;
                return {
                  chunkPos: UU.chunkPos,
                  rle: bR(UU.rle),
                  sharedBlockData: null !== (RU = YR("sharedBlockData", UU.sharedBlockData)) && void 0 !== RU ? RU : []
                }
              })),
              ticks: UU.ticks.map(LR),
              editState: {
                cameraKeyframes: null !== (gU = null === (tU = UU.editState) || void 0 === tU ? void 0 : tU.cameraKeyframes) && void 0 !== gU ? gU : [],
                playbackMark: null !== (EU = null === (PU = UU.editState) || void 0 === PU ? void 0 : PU.playbackMark) && void 0 !== EU ? EU : null
              }
            }
          }(tR(TU)[PU(144)](cU))
        }
      }
      throw new Error(RU(145) + RU(cg[39]) + RU(147))
    })
  },
  36509: (UU, RU, gU) => {
    gU.d(RU, {
      A: () => cU,
      E: () => TU,
      d: () => PU,
      h: () => tU,
      l: () => GU,
      p: () => jU,
      r: () => EU,
      t: () => KU,
      v: () => uU,
      z: () => qU
    });
    const tU = 9,
      pU = [9];

    function EU(UU) {
      return pU.includes(UU)
    }
    const PU = 100,
      TU = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      qU = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      KU = ["itemName", "amount", "position", "size", "attributes"],
      cU = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      GU = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "FY", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      jU = ["selectedSlotIndex", "slots"],
      uU = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36504: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => GU,
      f: () => CU,
      j: () => qU,
      m: () => PU,
      n: () => TU,
      o: () => KU
    });
    var tU = gU(311),
      pU = gU(24);

    function EU(UU) {
      return null === UU || void 0 === UU ? null : "string" === typeof UU ? UU : null
    }

    function PU(UU, RU) {
      return JSON.stringify(UU) === JSON.stringify(RU)
    }

    function TU(UU) {
      const RU = [];
      for (const gU of Object.keys(UU)) {
        const tU = UU[gU];
        for (const UU of Object.keys(tU)) RU.push({
          gR: gU,
          name: UU,
          ...tU[UU]
        })
      }
      return RU
    }

    function qU(UU) {
      const RU = {};
      for (const EU of UU) {
        var gU, tU, pU;
        RU[EU.gR] || (RU[EU.gR] = {}), RU[EU.gR][EU.name] = {
          icon: EU.icon,
          level: EU.level,
          displayName: null !== (gU = EU.displayName) && void 0 !== gU ? gU : null,
          endTick: null !== (tU = EU.endTick) && void 0 !== tU ? tU : null,
          showInNametag: null === (pU = EU.showInNametag) || void 0 === pU || pU
        }
      }
      return RU
    }

    function KU(UU, RU) {
      const gU = {};
      for (const pU of Object.keys(UU)) {
        const EU = {};
        for (const gU of Object.keys(UU[pU])) {
          const tU = UU[pU][gU];
          null !== tU.endTick && tU.endTick < RU || (EU[gU] = {
            ...tU,
            endTick: null === tU.endTick ? null : tU.endTick - RU
          })
        }(0, tU.zc)(EU) || (gU[pU] = EU)
      }
      return gU
    }

    function cU(UU, RU, gU) {
      if (null !== UU) return Math.max(0, 1e3 * (UU - RU) / gU)
    }
    class GU {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(UU, RU) {
        this.clear();
        const gU = Date.now();
        for (const TU of UU.iterateEntityIds()) {
          const qU = UU.getEffects(TU);
          if ((0, tU.zc)(qU)) continue;
          const KU = RU(TU);
          for (const UU of Object.keys(qU)) {
            var pU, PU;
            const RU = qU[UU];
            this.upsert(KU, UU, {
              icon: RU.icon,
              level: RU.level,
              displayName: EU(RU.displayName),
              showInNametag: null === (pU = RU.showInNametag) || void 0 === pU || pU,
              endTime: void 0 !== RU.duration && null !== RU.duration ? (null !== (PU = RU.appliedAt) && void 0 !== PU ? PU : gU) + RU.duration : null
            })
          }
        }
      }
      upsert(UU, RU, gU) {
        this.tracked[UU] || (this.tracked[UU] = {}), this.tracked[UU][RU] = gU
      }
      remove(UU, RU) {
        const gU = this.tracked[UU];
        gU && (delete gU[RU], (0, tU.zc)(gU) && delete this.tracked[UU])
      }
      handleUpdate(UU) {
        var RU;
        0 !== UU.duration ? this.upsert(UU.gR, UU.name, {
          icon: UU.icon,
          level: UU.level,
          displayName: EU(UU.displayName),
          showInNametag: null === (RU = UU.showInNametag) || void 0 === RU || RU,
          endTime: void 0 !== UU.duration && null !== UU.duration ? Date.now() + UU.duration : null
        }) : this.remove(UU.gR, UU.name)
      }
      handleRemove(UU, RU) {
        this.remove(UU, RU)
      }
      sample(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const pU = {},
          EU = 1e3 / RU;
        for (const PU of Object.keys(this.tracked)) {
          const RU = this.tracked[PU],
            TU = {};
          for (const tU of Object.keys(RU)) {
            const pU = RU[tU];
            let qU = null;
            if (null !== pU.endTime) {
              const RU = Math.max(0, pU.endTime - gU);
              if (0 === RU) {
                this.remove(PU, tU);
                continue
              }
              qU = UU + Math.ceil(RU / EU)
            }
            TU[tU] = {
              icon: pU.icon,
              level: pU.level,
              displayName: pU.displayName,
              endTick: qU,
              showInNametag: pU.showInNametag
            }
          }(0, tU.zc)(TU) || (pU[PU] = TU)
        }
        return pU
      }
    }

    function jU(UU, RU, gU, tU) {
      UU.hasEntity(RU) ? UU.updateEffect(RU, gU, tU) : function(UU, RU, gU) {
        pU.p.yh("EffectUpdate", {
          gR: UU,
          name: RU,
          ...gU
        }, !0)
      }(RU, gU, tU)
    }

    function uU(UU, RU, gU) {
      UU.hasEntity(RU) ? UU.removeEffect(RU, gU) : function(UU, RU) {
        pU.p.yh("RemoveEffect", {
          gR: UU,
          name: RU
        }, !0)
      }(RU, gU)
    }

    function CU(UU, RU, gU, tU, pU, EU, PU) {
      for (const cU of Object.keys(gU))
        for (const EU of Object.keys(gU[cU])) {
          var TU;
          null !== (TU = RU[cU]) && void 0 !== TU && TU[EU] || (uU(UU, cU, EU), tU && cU === tU && String(pU) !== String(cU) && uU(UU, pU, EU))
        }
      for (const hU of Object.keys(RU))
        for (const TU of Object.keys(RU[hU])) {
          var qU, KU;
          const QU = RU[hU][TU],
            eU = cU(QU.endTick, EU, PU);
          if (0 === eU) {
            uU(UU, hU, TU), tU && hU === tU && String(pU) !== String(hU) && uU(UU, pU, TU);
            continue
          }
          const WU = null === (qU = gU[hU]) || void 0 === qU ? void 0 : qU[TU],
            fU = WU && (CU = QU, (GU = WU).icon === CU.icon && GU.level === CU.level && GU.displayName === CU.displayName && GU.endTick === CU.endTick && GU.showInNametag === CU.showInNametag),
            xU = {
              icon: QU.icon,
              level: QU.level,
              displayName: null !== (KU = QU.displayName) && void 0 !== KU ? KU : void 0,
              duration: eU,
              showInNametag: QU.showInNametag
            };
          fU || jU(UU, hU, TU, xU), tU && hU === tU && jU(UU, pU, TU, {
            ...xU,
            showInNametag: !1
          })
        }
      var GU, CU
    }
  },
  36488: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => KU,
      e: () => qU,
      h: () => GU,
      i: () => PU,
      k: () => cU
    });
    var tU = gU(36482),
      pU = gU(36492);
    const EU = {
      description: "Bloxd Replay",
      accept: {
        [tU.h]: tU.e
      }
    };

    function PU() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function TU(UU) {
      return UU instanceof DOMException && "AbortError" === UU.name
    }
    async function qU() {
      try {
        const [UU] = await window.showOpenFilePicker({
          multiple: !1,
          types: [EU]
        }), RU = await UU.getFile();
        return {
          handle: UU,
          bytes: new Uint8Array(await RU.arrayBuffer())
        }
      } catch (UU) {
        if (TU(UU)) return null;
        throw UU
      }
    }
    async function KU(UU) {
      if (UU && await async function(UU) {
          const RU = {
            mode: "readwrite"
          };
          return "granted" === await UU.queryPermission(RU) || "granted" === await UU.requestPermission(RU)
        }(UU)) return UU;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, tU.m)(),
          types: [EU]
        })
      } catch (RU) {
        if (TU(RU)) return null;
        throw RU
      }
    }
    async function cU(UU, RU) {
      const gU = await UU.createWritable();
      await gU.write(new Blob([RU], {
        type: tU.h
      })), await gU.close()
    }

    function GU(UU) {
      return (0, tU.i)((0, pU.f)(UU))
    }
  },
  36022: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => GU
    });
    var tU = gU(21),
      pU = gU(96),
      EU = gU(34),
      PU = gU(668),
      TU = gU(3151),
      qU = gU(6339);
    const KU = "shaderPackListingCheckedAt",
      cU = 36e5;

    function GU() {
      const {
        canUseShaderPacks: UU
      } = pU.featureFlags.settings;
      var RU, GU;
      (0, TU.l)(UU) && !(0, TU.h)(UU) && (RU = EU.k.getItem(KU), GU = Date.now(), "number" !== typeof RU || GU < RU || GU - RU >= cU) && (0, PU.e)((() => {
        (async function() {
          if ("landingPage" !== tU.b.get("gameState")) return;
          const UU = await (0, qU.e)();
          if (void 0 === (null === UU || void 0 === UU ? void 0 : UU.listing)) return;
          EU.k.setItem(KU, Date.now());
          const {
            followListingUpdates: RU
          } = await Promise.all([gU.e(74), gU.e(131), gU.e(123)]).then((() => gU(40679)));
          await RU(UU, UU.listing) || EU.k.removeItem(KU)
        })().catch((UU => {
          console.error("Failed to check the shader pack listing for an update", UU)
        }))
      }))
    }
  },
  36066: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => qU
    });
    var tU = gU(299),
      pU = gU(21),
      EU = gU(36072),
      PU = gU(1567),
      TU = gU(1844);

    function qU(UU, RU) {
      var gU, qU, KU;
      if (!pU.b.get("isKeydownEnabled") || UU.repeat) return;
      const cU = UU.code;
      "Escape" === UU.key ? (0, PU.g)(UU) : null !== (gU = TU.r.OpenSettings) && void 0 !== gU && gU.includes(cU) ? (0, PU.w)(UU, tU.n.SETTINGS) : null !== (qU = TU.r.OpenCharacterCustomization) && void 0 !== qU && qU.includes(cU) ? (0, EU.c)() || (0, PU.w)(UU, tU.n.CUSTOMISATION, RU()) : null !== (KU = TU.r.ShowDebugOverlay) && void 0 !== KU && KU.includes(cU) && pU.b.set({
        showDebugOverlay: !pU.b.get("showDebugOverlay")
      })
    }
  },
  36024: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => aU
    });
    var tU = gU(581),
      pU = gU(1223),
      EU = gU(165);
    const PU = "cf-";

    function TU(UU) {
      return `${PU}${UU}`
    }

    function qU(UU) {
      return UU.startsWith(TU("game-server-"))
    }

    function KU(UU) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(UU)
    }
    var cU = gU(1240),
      GU = gU(1217),
      jU = gU(24),
      uU = gU(1667),
      CU = gU(1683),
      hU = gU(2668),
      QU = gU(1305),
      eU = gU(1316),
      WU = gU(1461),
      fU = gU(1196),
      xU = gU(36027),
      mU = gU(34),
      IU = gU(135),
      JU = gU(1704);
    const wU = Date.UTC(2026, 10, 25),
      nU = 1728e5,
      bU = "gameServerRoute";
    async function oU(UU) {
      if (!UU.ok) {
        const RU = await UU.text().catch((() => ""));
        return 403 === UU.status && "ipv6_unsupported" === RU ? "ipv6Refused" : "other"
      }
      const RU = await UU.json().catch((() => null));
      return "object" === typeof RU && null !== RU && Number.isFinite(RU.version) ? "ours" : "other"
    }
    const ZU = new class {
      constructor(UU) {
        this.deps = UU
      }
      hostFor(UU) {
        return this.deps.enabled && KU(UU) && "cloudflare" === this.heldRoute() ? TU(UU) : UU
      }
      async afterJoinFailed(UU, RU) {
        var gU;
        if (!this.deps.enabled || void 0 === RU) return !1;
        const tU = new URL(UU).hostname,
          pU = this.stored();
        if (qU(tU)) {
          var EU;
          if (this.deps.ku("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === pU || void 0 === pU ? void 0 : pU.route) || pU.aliasFailedOnce || "ours" !== (await this.probeHost(tU)).answer) this.store({
            arm: null !== (EU = null === pU || void 0 === pU ? void 0 : pU.arm) && void 0 !== EU ? EU : "cloudflare",
            route: "direct",
            until: this.deps.now() + 36e5
          });
          else this.store({
            ...pU,
            aliasFailedOnce: !0
          });
          return !1
        }
        if (!KU(tU) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: PU,
          cfMs: TU
        } = await this.check(tU);
        if ("blocked" !== PU) return this.deps.ku("game_server_route", PU, TU), !1;
        const cU = this.deps.now() >= wU ? "cloudflare" : null !== (gU = null === pU || void 0 === pU ? void 0 : pU.arm) && void 0 !== gU ? gU : 100 * this.deps.random() < 20 ? "holdout" : "cloudflare";
        return "holdout" === cU ? (this.store({
          arm: cU,
          route: "direct",
          until: Math.min(this.deps.now() + nU, wU)
        }), this.deps.ku("game_server_route", "blocked_holdout", TU), !1) : (this.store({
          arm: cU,
          route: "cloudflare",
          until: this.deps.now() + nU
        }), this.deps.ku("game_server_route", "blocked", TU), !0)
      }
      afterJoined(UU) {
        if (!this.deps.enabled) return;
        const RU = new URL(UU).hostname,
          gU = qU(RU);
        if (gU) this.deps.ku("game_server_route", "cf_join", 0);
        else if (!KU(RU) || this.deps.random() >= .01) return;
        const tU = gU ? RU.slice(PU.length) : RU;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(tU, "direct", "direct_failed"), await this.reportRtt(TU(tU), "cf", "cf_failed")
        }))
      }
      async check(UU) {
        const RU = this.probeHost(TU(UU));
        if ("none" !== (await this.probeHost(UU)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: gU,
          ms: tU
        } = await RU;
        return "ours" !== gU && "ipv6Refused" !== gU ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(UU)).answer ? {
          outcome: "direct_reachable",
          cfMs: tU
        } : {
          outcome: "ipv6Refused" === gU ? "blocked_ipv6" : "blocked",
          cfMs: tU
        }
      }
      async reportRtt(UU, RU, gU) {
        const tU = "ours" === (await this.probeHost(UU)).answer ? await this.probeHost(UU) : null;
        "ours" === (null === tU || void 0 === tU ? void 0 : tU.answer) ? this.deps.ku("game_server_rtt", RU, tU.ms): this.deps.ku("game_server_rtt", gU, 0)
      }
      probeHost(UU) {
        return this.deps.probe(`https://${UU}/version`, 8e3)
      }
      stored() {
        return function(UU) {
          if ("object" !== typeof UU || null === UU) return null;
          const {
            arm: RU,
            route: gU,
            until: tU,
            aliasFailedOnce: pU
          } = UU;
          return "cloudflare" !== RU && "holdout" !== RU || "cloudflare" !== gU && "direct" !== gU || "number" !== typeof tU ? null : !0 === pU ? {
            arm: RU,
            route: gU,
            until: tU,
            aliasFailedOnce: pU
          } : {
            arm: RU,
            route: gU,
            until: tU
          }
        }(this.deps.storage.getItem(bU))
      }
      heldRoute() {
        const UU = this.stored();
        return null !== UU && UU.until > this.deps.now() ? UU.route : null
      }
      store(UU) {
        this.deps.storage.setItem(bU, UU)
      }
    }({
      storage: mU.k,
      probe: async function(UU, RU) {
        const gU = performance.now(),
          tU = await (0, JU.k)(UU, {
            cache: "no-store"
          }, RU, (async UU => {
            const RU = Math.round(performance.now() - gU);
            return {
              answer: await oU(UU),
              ms: RU
            }
          }));
        return null !== tU && void 0 !== tU ? tU : {
          answer: "none",
          ms: 0
        }
      },
      ku: uU.p,
      enabled: !(0, IU.e)(),
      now: Date.now,
      random: Math.random,
      delay: UU => new Promise((RU => {
        setTimeout(RU, UU)
      }))
    });

    function aU(UU) {
      return async (RU, gU, PU, TU, KU) => {
        let GU;
        if ((0, tU.E)(PU)) {
          if (KU.aborted) return YU();
          const UU = await BU(RU, gU, TU);
          if (KU.aborted || hU.h.matchmakingEnded(UU.isError() ? null : performance.now()), UU.isError()) {
            const RU = UU.asError();
            return console.log("Join room did not succeed, reason:", RU.message), RU.forward()
          }
          GU = UU.getValue()
        } else {
          hU.h.skipPlayWait();
          const UU = VU(PU.replace("https://", "").replace("http://", ""));
          if (UU.isError()) return UU.asError().forward();
          GU = {
            endpoint: UU.getValue(),
            gameNameWithVariation: gU,
            lobbyName: RU instanceof pU.e ? RU.getLobbyName() : RU
          }
        }
        if (KU.aborted) return YU();
        console.log(`Connecting to ${GU.gameNameWithVariation} in lobby ${GU.lobbyName} on game server ${GU.endpoint}`), jU.p.yh("matchmakeAndPlayStepCompleted", {
          step: EU.l.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, uU.i)(), CU.e.markGameLoadStart(), (0, eU.m)({
          websocketUrl: GU.endpoint,
          gameNameWithVariation: GU.gameNameWithVariation,
          lobbyName: GU.lobbyName
        }), jU.p.yh("loadingScreenState", "loadingPage:loadingGame");
        const WU = async () => {
          const UU = await async function(UU, RU, gU, tU) {
            const pU = await BU(UU, RU, gU);
            if (!pU.isError() && !tU.aborted) {
              const {
                endpoint: UU,
                gameNameWithVariation: RU,
                lobbyName: gU
              } = pU.getValue();
              (0, eU.m)({
                websocketUrl: UU,
                gameNameWithVariation: RU,
                lobbyName: gU
              })
            }
            return pU
          }(RU, gU, TU, KU);
          return UU.isError() || (GU = UU.getValue()), UU
        }, fU = !(0, tU.E)(PU), xU = () => UU({
          place: GU,
          userContext: TU,
          direct: fU,
          rematch: WU
        }, KU);
        let mU = await xU();
        const IU = mU.isError() && !0 === mU.asError().debugResult.rematch;
        if (mU.isError() && !fU && !KU.aborted && (IU || await ZU.afterJoinFailed(GU.endpoint, mU.asError().debugResult.gameServerUnreachable))) {
          if (KU.aborted) return YU();
          console.log("Matchmaking again");
          const UU = await WU();
          if (UU.isError()) return UU.asError().forward();
          if (KU.aborted) return YU();
          mU = await xU(), !mU.isError() || IU && !qU(new URL(GU.endpoint).hostname) || await ZU.afterJoinFailed(GU.endpoint, mU.asError().debugResult.gameServerUnreachable)
        }
        return mU.isError() ? mU.asError().forward() : (ZU.afterJoined(GU.endpoint), (0, QU.T)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), cU.c.value({
          gameNameWithVariation: GU.gameNameWithVariation,
          lobbyName: GU.lobbyName,
          addLobbyToRecentlyPlayed: !(RU instanceof pU.e)
        }))
      }
    }

    function YU() {
      return cU.c.errorWithCode("Left the game while it loaded", EU.l.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        cg: !0
      })
    }
    async function BU(UU, RU, gU) {
      return (0, tU.E)(UU) || UU instanceof pU.e || !(UU.length > GU.Q) ? await WU.c.matchmakePlayer(gU, UU, RU, (0, xU.b)()).then((UU => {
        if (!1 === UU.succeeded) return cU.c.errorWithCode(UU.failReason, EU.l.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: RU,
          lobbyName: gU,
          gameNameWithVariation: tU
        } = UU, pU = VU(ZU.hostFor(RU));
        return pU.isError() ? pU.asError().forward() : cU.c.value({
          endpoint: pU.getValue(),
          gameNameWithVariation: tU,
          lobbyName: gU
        })
      })).catch((UU => (console.error("Bad response from the matchmaking server:", UU), cU.c.errorWithCode(UU.toString(), EU.l.REQUEST_TO_MATCHMAKING, {
        error: UU,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", UU), cU.c.errorWithCode("This lobby link's name is too long. Ask for a new link.", EU.l.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function VU(UU) {
      const RU = fU.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(UU);
      return RU.isError() ? cU.c.errorWithCode(RU.asError().message, EU.l.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : cU.c.value(RU.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, eU.j)("/")
    }
  },
  8896: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => uU,
      h: () => jU
    });
    var tU = gU(21),
      pU = gU(1614),
      EU = gU(34),
      PU = gU(1333),
      TU = gU(3329),
      qU = gU(1444),
      KU = gU(1362);
    const cU = 2592e5,
      GU = "notificationOptInLastPromptedAt";
    async function jU() {
      var UU;
      const RU = await uU();
      if (null === RU) return;
      const gU = null !== (UU = EU.k.getItem(GU)) && void 0 !== UU ? UU : 0;
      if (Date.now() - gU < cU) return;
      if ((0, KU.g)()) return;
      const tU = await PU.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: pU.b.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== tU && (EU.k.setItem(GU, Date.now()), (0, qU.reportAnalyticsClick)({
        id: !0 === tU ? "push.allow" : "push.deny",
        value: pU.b.supports("notifications") ? "app" : "browser"
      }), !0 === tU && RU().catch((UU => {
        console.error("Failed to ask for push notifications:", UU)
      })))
    }
    async function uU() {
      return await pU.b.ready, pU.b.supports("notifications") ? tU.b.get("mobilePushNotificationsCanAsk") ? async () => {
        pU.b.request("notifications.requestPermission", {}).then((UU => {
          let {
            canAsk: RU
          } = UU;
          tU.b.set({
            mobilePushNotificationsCanAsk: RU
          })
        }), (UU => {
          console.error("The app couldn't ask for push notifications:", UU)
        }))
      }: null: await TU.b.canAsk() ? () => TU.b.requestPermission() : null
    }
  },
  36033: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => jU,
      d: () => cU,
      f: () => uU,
      i: () => GU
    });
    var tU = gU(311),
      pU = gU(616),
      EU = gU(631),
      PU = gU(34);
    const TU = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      qU = "playSessionGameNameWithVariation",
      KU = "wasMatchmakePlayer";

    function cU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l;
      (0, EU.k)(UU, TU)
    }

    function GU() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l).setItem(KU, !0)
    }

    function jU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l;
      return (0, EU.d)(UU, TU)
    }

    function uU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PU.l;
      const gU = (0, EU.d)(RU, TU),
        cU = function(UU) {
          const RU = UU.getItem(qU);
          return "string" !== typeof RU ? null : RU
        }(RU),
        GU = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l).getItem(KU)
        }(RU);
      let jU;
      return jU = null !== gU && null !== cU && (0, EU.g)(RU, TU) && function(UU, RU, gU) {
          const pU = (0, tU.Wb)(UU),
            EU = (0, tU.Wb)(RU),
            PU = (0, tU.Sb)(UU),
            TU = (0, tU.Sb)(RU);
          return !(pU !== EU || !gU) || pU === EU && PU === TU
        }(cU, UU, GU) ? gU : (0, pU.e)(), (0, EU.l)(RU, TU, jU), RU.setItem(qU, UU),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l).removeItem(KU)
        }(RU), jU
    }
  },
  36027: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => WU,
      d: () => fU
    });
    var tU = gU(994),
      pU = gU(587),
      EU = gU(311),
      PU = gU(1002),
      TU = gU(603),
      qU = gU(641),
      KU = gU(4187),
      cU = gU(96),
      GU = gU(135),
      jU = gU(1637),
      uU = gU(115),
      CU = gU(36033),
      hU = gU(34),
      QU = gU(623),
      eU = gU(36042);

    function WU() {
      var UU, RU;
      return [...null !== (UU = navigator.languages) && void 0 !== UU ? UU : [null !== (RU = navigator.language) && void 0 !== RU ? RU : "none"], "en-Gb"]
    }

    function fU(UU, RU, gU, fU, xU) {
      const mU = (0, tU.m)(RU) ? (0, tU.q)(RU) : null,
        IU = {
          cookies: (0, jU.getAllCookiesForGameNameWithVariation)(RU),
          isMobile: (0, cU.isMobile)(),
          isUsingCustomGameTexturePack: null !== mU && xU(mU),
          generalCookies: {
            joinDiscord: !!hU.k.getItem("DiscordPressed"),
            newGo: KU.c,
            ...UU.getMetricsCookies(),
            trafficCode: fU,
            compliance: cU.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, cU.getBrowserName)(),
            version: (0, cU.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, cU.getPlatformType)(),
            deviceType: (0, uU.b)()
          },
          isLoggedIn: UU.isLoggedIn(),
          lobbyName: gU,
          languages: WU(),
          version: pU.d,
          siteUsed: GU.t,
          subsiteUsed: GU.A,
          playSessionId: (0, CU.f)(RU),
          visitSessionId: (0, QU.c)(),
          clientReason: TU.n.reason,
          budgetBasis: (0, eU.g)(),
          ...null !== qU.q && {
            diagClaim: qU.q.claimId
          }
        };
      return null !== mU && (0, EU.Fc)(mU) ? (IU.lobbyName = (0, tU.k)(mU, (0, tU.p)(RU), gU), {
        roomName: `classic_${PU.f}`,
        joinOptions: IU
      }) : {
        roomName: RU,
        joinOptions: IU
      }
    }
  },
  36165: (UU, RU, gU) => {
    function tU(UU, RU) {
      for (let gU = 0; gU < UU.length; gU++)
        if (UU[gU].identifier === RU) return UU[gU];
      return null
    }

    function pU(UU, RU) {
      return null !== tU(UU, RU)
    }
    gU.d(RU, {
      d: () => tU,
      g: () => pU
    })
  },
  36427: (UU, RU, gU) => {
    gU.d(RU, {
      C: () => nU,
      D: () => XU,
      F: () => vU,
      H: () => dU,
      K: () => rU,
      N: () => HU,
      e: () => qU,
      g: () => ZU,
      k: () => TU,
      m: () => VU,
      p: () => bU,
      t: () => IU,
      v: () => BU,
      y: () => YU
    });
    var tU = gU(34);
    const pU = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      EU = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      PU = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      TU = EU.filter((UU => "docsButton" !== UU)),
      qU = PU.filter((UU => "aiHelperButton" !== UU)),
      KU = "codeEditorTutorials",
      cU = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      GU = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let jU = null,
      uU = null;
    const CU = new Set,
      hU = new Set;
    let QU = null;
    const eU = new Set,
      WU = new Set;

    function fU() {
      WU.forEach((UU => {
        UU()
      }))
    }

    function xU() {
      if (!jU) {
        const UU = tU.k.getItem(KU);
        jU = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof UU && null !== UU ? UU : {}
        }
      }
      return jU
    }

    function mU(UU) {
      const RU = xU();
      RU[UU] || (jU = {
        ...RU,
        [UU]: !0
      }, tU.k.setItem(KU, jU))
    }

    function IU(UU) {
      return "docsOverview" === UU ? EU : "aiHelperOverview" === UU ? PU : uU ? pU[uU] : []
    }

    function JU(UU) {
      return ("worldCodeButton" !== UU || !xU().worldCodeIntroShown) && !eU.has(UU)
    }

    function wU(UU) {
      var RU;
      return (null === (RU = QU) || void 0 === RU ? void 0 : RU.name) === UU ? QU.stepsDone : CU
    }

    function nU(UU, RU) {
      if (! function(UU) {
          return QU ? QU.name === UU : "welcome" === UU
        }(UU) || !JU(RU) || wU(UU).has(RU)) return !1;
      if (QU) return !0;
      const gU = cU[RU];
      return gU ? !xU()[gU] || hU.has(RU) : !xU()[GU[UU]]
    }

    function bU(UU) {
      var RU;
      return null !== (RU = IU(UU).find((RU => nU(UU, RU)))) && void 0 !== RU ? RU : null
    }

    function oU(UU) {
      var RU;
      mU(GU[UU]), (null === (RU = QU) || void 0 === RU ? void 0 : RU.name) === UU && (QU = null)
    }

    function ZU(UU) {
      const RU = (QU ? [QU.name] : ["welcome", "docsOverview"]).find((RU => bU(RU) === UU));
      if (!RU) return;
      wU(RU).add(UU);
      const gU = cU[UU];
      gU && (mU(gU), QU || hU.add(UU)), null === bU(RU) && oU(RU), fU()
    }

    function aU(UU, RU) {
      const gU = IU(UU),
        tU = wU(UU);
      for (let pU = gU.indexOf(RU) - 1; pU >= 0; pU--)
        if (tU.has(gU[pU]) && JU(gU[pU])) return gU[pU];
      return null
    }

    function YU(UU, RU) {
      return null !== aU(UU, RU)
    }

    function BU(UU, RU) {
      const gU = aU(UU, RU);
      gU && (wU(UU).delete(gU), fU())
    }

    function VU(UU) {
      oU(UU), "welcome" === UU && IU("welcome").forEach((UU => {
        const RU = cU[UU];
        RU && mU(RU)
      })), fU()
    }

    function rU(UU) {
      QU = {
        name: UU,
        stepsDone: new Set
      }, fU()
    }

    function XU() {
      (QU || 0 !== CU.size || 0 !== hU.size) && (QU = null, CU.clear(), hU.clear(), fU())
    }

    function vU(UU, RU) {
      const gU = RU ? UU : uU === UU ? null : uU;
      gU !== uU && (uU = gU, fU())
    }

    function dU(UU, RU) {
      eU.has(UU) === RU && (RU ? eU.delete(UU) : eU.add(UU), fU())
    }

    function HU(UU) {
      return WU.add(UU), () => {
        WU.delete(UU)
      }
    }
  },
  36058: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      e: () => pU,
      h: () => EU
    });
    const tU = 1024,
      pU = 1024 * tU;

    function EU(UU) {
      return (UU / pU).toFixed(1)
    }
  },
  36050: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      h: () => TU,
      j: () => PU,
      n: () => qU,
      p: () => KU
    });
    var tU = gU(189);
    const pU = 32 * gU(36058).e,
      EU = 6144,
      PU = 4608,
      TU = 512;

    function qU(UU) {
      return Math.floor(pU * UU / EU)
    }

    function KU(UU) {
      const RU = UU - Math.floor(UU / 6);
      let gU = tU.e.maxChunkHorizAddDistance,
        pU = tU.e.maxChunkVertAddDistance;
      if (cU(gU + 1, pU + 1) <= RU) return null;
      for (; cU(gU + 1, pU + 1) > RU && (gU > 0 || pU > 0);) gU > pU ? gU-- : pU--;
      return {
        horizontal: gU,
        vertical: pU
      }
    }

    function cU(UU, RU) {
      const gU = Math.max(UU, RU);
      let tU = 0;
      for (let pU = -gU; pU <= gU; pU++)
        for (let EU = -gU; EU <= gU; EU++)
          for (let PU = -gU; PU <= gU; PU++) GU(UU, RU, pU, EU, PU) && tU++;
      return tU
    }

    function GU(UU, RU, gU, tU, pU) {
      const EU = gU * gU + pU * pU;
      return UU === RU ? EU + tU * tU <= UU * UU : UU > RU ? Math.abs(tU) <= RU && EU + tU * tU <= UU * UU : EU <= UU * UU && EU + tU * tU <= RU * RU
    }
  },
  36042: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => IU,
      g: () => mU,
      h: () => xU
    });
    var tU = gU(189),
      pU = gU(96),
      EU = gU(2636),
      PU = gU(4062),
      TU = gU(607),
      qU = gU(36050);
    const KU = 1048576,
      cU = 1024 * KU,
      GU = 400 * KU,
      jU = 147456,
      uU = .5,
      CU = 1.5 * cU,
      hU = 768 * KU;

    function QU(UU) {
      return GU + UU * jU
    }

    function eU(UU, RU, gU) {
      var pU, PU;
      let {
        footprintBytes: TU,
        basis: KU,
        namesLimit: eU
      } = function(UU) {
        const {
          os: RU,
          deviceMemory: gU
        } = UU;
        if ("ios" === RU) switch ((0, EU.f)(UU)) {
          case "ipad_m":
            return {
              footprintBytes: QU(qU.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: hU, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: CU, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: hU, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof gU && Number.isFinite(gU) && gU > 0 ? {
          footprintBytes: gU * cU * uU,
          basis: `memory-${gU}`,
          namesLimit: !0
        } : "android" === RU ? {
          footprintBytes: hU,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: QU(qU.j),
          basis: "unreported",
          namesLimit: !1
        }
      }(UU);
      if (gU) {
        const UU = Math.min(TU, QU(qU.e));
        TU = GU + Math.max(0, UU - GU) / 2, KU += "+killed", eU = !0
      }
      null !== RU && QU(RU) < TU && (TU = QU(RU), KU += "+learned", eU = !0);
      const WU = function(UU) {
          const RU = Math.floor((UU - GU) / jU);
          return Math.min(qU.e, Math.max(qU.h, RU))
        }(TU),
        fU = (0, qU.p)(WU);
      return {
        footprintBytes: TU,
        shedFootprintBytes: eU ? Math.max(TU, QU(WU)) : null,
        chunkCap: WU,
        maxHorizDistance: null !== (pU = null === fU || void 0 === fU ? void 0 : fU.horizontal) && void 0 !== pU ? pU : tU.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (PU = null === fU || void 0 === fU ? void 0 : fU.vertical) && void 0 !== PU ? PU : tU.e.maxChunkVertAddDistance,
        basis: KU
      }
    }
    let WU = null;

    function fU() {
      return eU({
        os: (0, pU.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, EU.g)()
      }, (0, PU.f)(), (0, TU.D)("wasm").length > 0)
    }

    function xU() {
      return WU ??= fU(), WU
    }

    function mU() {
      var UU;
      return (null !== (UU = WU) && void 0 !== UU ? UU : fU()).basis
    }

    function IU(UU, RU) {
      return UU.setChunkCap(RU.chunkCap)
    }
  },
  36182: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => cU,
      h: () => jU,
      i: () => eU,
      m: () => KU
    });
    var tU = gU(21),
      pU = gU(2233),
      EU = gU(2241),
      PU = gU(2246),
      TU = gU(2292),
      qU = gU(24);

    function KU(UU, RU) {
      return (!(0, PU.e)() || 0 === UU && 0 === RU) && (0, EU.z)(pU.h.Joystick, 0, UU, RU, 0)
    }
    const cU = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function GU(UU) {
      return UU.classList.contains("TouchKeyHit") && uU() ? null : UU.firstElementChild
    }

    function jU(UU) {
      return UU.classList.contains("TouchKeyHit") && !UU.classList.contains("CanvasZone") ? {
        whole: !uU(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: CU(GU(UU))
      }
    }

    function uU() {
      return document.documentElement.classList.contains(TU.h)
    }

    function CU(UU) {
      return !(UU instanceof HTMLElement) || UU.offsetWidth <= 0 || UU.offsetHeight <= 0 ? null : {
        width: UU.offsetWidth,
        height: UU.offsetHeight
      }
    }

    function hU(UU, RU) {
      const gU = UU => Math.min(65535, Math.round(4 * UU));
      return (gU(UU) | gU(RU) << 16) >>> 0
    }

    function QU(UU) {
      return {
        x: UU.left + UU.width / 2,
        y: UU.top + UU.height / 2,
        radius: Math.min(UU.width, UU.height) / 2
      }
    }
    const eU = new class {
      constructor(UU) {
        this.write = UU, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        RU ? this.elements.set(UU, {
          element: RU,
          hidden: gU
        }) : this.elements.delete(UU), this.measureOne(UU)
      }
      measure() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = UU.left, this.canvasTop = UU.top;
        for (const RU of this.elements.keys()) this.measureOne(RU)
      }
      hitZone(UU, RU) {
        let gU = null,
          tU = 1;
        for (const pU of this.elements.keys()) {
          const EU = this.shown(pU);
          if (!EU) continue;
          const {
            rect: PU,
            element: TU
          } = EU, qU = QU(PU), KU = Math.max(0, PU.width / 2 - qU.radius), cU = Math.max(0, PU.height / 2 - qU.radius), jU = Math.max(0, Math.abs(UU - qU.x) - KU), uU = Math.max(0, Math.abs(RU - qU.y) - cU), hU = TU.firstElementChild;
          let eU = Math.hypot(jU, uU) / qU.radius;
          const WU = CU(GU(TU));
          WU && (eU = Math.min(eU, Math.max(2 * Math.abs(UU - qU.x) / WU.width, 2 * Math.abs(RU - qU.y) / WU.height))), eU < tU && (gU = {
            code: pU,
            element: TU,
            key: hU,
            ...qU
          }, tU = eU)
        }
        return gU
      }
      measureOne(UU) {
        const RU = this.shown(UU);
        if (!RU) return void this.write(pU.h.TouchZone, UU, 0, 0, 0);
        const {
          rect: gU,
          element: tU
        } = RU, EU = QU(gU);
        this.write(pU.h.TouchZone, UU, EU.x - this.canvasLeft, EU.y - this.canvasTop, hU(gU.width, gU.height));
        const PU = CU(GU(tU));
        this.write(pU.h.TouchZone, 256 | UU, 0, 0, PU ? hU(PU.width, PU.height) : 0)
      }
      shown(UU) {
        const RU = this.elements.get(UU),
          gU = tU.b.get("worldPanelHud");
        if (!RU || RU.hidden || "none" === gU) return null;
        const pU = RU.element.getBoundingClientRect();
        return pU.width <= 0 || pU.height <= 0 ? null : {
          rect: pU,
          element: RU.element
        }
      }
    }(EU.z);
    (0, qU.t)(TU.f, (() => {
      eU.measure()
    }))
  },
  36392: (UU, RU, gU) => {
    function tU(UU) {
      return "fetch" === UU || "timeout" === UU || "integrity" === UU ? "download" : "browser"
    }
    gU.d(RU, {
      b: () => pU,
      e: () => PU,
      f: () => qU,
      g: () => TU,
      k: () => tU,
      l: () => EU
    });
    const pU = "https://discord.gg/playbloxd";

    function EU(UU) {
      return "download" === UU ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: "wasmScreens:unsupportedTitle",
        help: "wasmScreens:unsupportedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function PU(UU, RU) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: RU ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: UU.code
        },
        discordLink: RU,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function TU() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function qU(UU, RU, gU) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: gU ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: UU.reason
        },
        discordLink: null === UU.name,
        confirm: RU ? "general:reconnect" : UU.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36437: (UU, RU, gU) => {
    function tU(UU, RU) {
      return null === UU || null === RU ? UU === RU : UU[0] === RU[0] && UU[1] === RU[1] && UU[2] === RU[2]
    }

    function pU(UU) {
      return [UU[0] + .5, UU[1] + .5, UU[2] + .5]
    }
    gU.d(RU, {
      b: () => pU,
      c: () => tU
    })
  },
  36397: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => qU,
      f: () => TU
    });
    const tU = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      pU = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      EU = {
        files: {
          "chunk.ts": 'import { setTimeout } from "./timers"\n\n/**\n * Forces a chunk to be loaded.\n * @param x - The x coordinate of the chunk\n * @param y - The y coordinate of the chunk\n * @param z - The z coordinate of the chunk\n * @param onLoaded - The function to call when the chunk is loaded\n */\nexport function forceLoadChunk(x: number, y: number, z: number, onLoaded: () => void) {\n\tconst block = api.getBlock(x, y, z)\n\tif (block !== "Unloaded") {\n\t\tonLoaded()\n\t\treturn\n\t}\n\n\tsetTimeout(() => {\n\t\tforceLoadChunk(x, y, z, onLoaded)\n\t}, 100)\n}\n',
          "index.ts": 'import { handleTimers } from "./timers"\n\ntick = () => {\n\thandleTimers()\n}\n\nexport { setTimeout, setInterval, clearTimeout, clearInterval } from "./timers"\nexport type { TimeoutId, IntervalId } from "./timers"\nexport { forceLoadChunk } from "./chunk"\nexport { randomInt, shuffleArray, getRandomItem } from "./random"\n',
          "random.ts": "/**\n * Generates a random integer between min and max, inclusive.\n * @param min - The minimum value.\n * @param max - The maximum value.\n * @param includeMax - Whether to include the max value in the range. Defaults to false.\n * @returns A random integer between min and max, inclusive.\n */\nexport function randomInt(min: number, max: number, includeMax: boolean = false): number {\n\treturn Math.floor(Math.random() * (max - min + (includeMax ? 1 : 0))) + min\n}\n\n/**\n * Shuffles an array in place.\n * @param array - The array to shuffle.\n * @returns The shuffled array.\n */\nexport function shuffleArray<T>(array: T[]): T[] {\n\tfor (let i = 0; i < array.length; i++) {\n\t\tconst j = randomInt(i, array.length)\n\t\t;[array[i], array[j]] = [array[j], array[i]]\n\t}\n\treturn array\n}\n\n/**\n * Gets a random item from an array.\n * @param array - The array to get a random item from.\n * @returns A random item from the array.\n */\nexport function getRandomItem<T extends readonly any[]>(array: T): T[number]\nexport function getRandomItem<T>(array: readonly T[] | T[]): T | undefined {\n\treturn array[randomInt(0, array.length)]\n}\n",
          "timers.ts": 'import { PlayerId } from "@bloxd"\n\ndeclare const __brand: unique symbol\ntype Branded<T, B> = T & { [__brand]: B }\nexport type TimeoutId = Branded<number, "TimeoutId">\nexport type IntervalId = Branded<number, "IntervalId">\n\nlet nextTimeoutId: number = 1\nlet nextIntervalId: number = 1\ntype Callback = {\n\tcallback: () => void\n\tcallAt: number\n\tinterval?: number\n\tplayerId?: PlayerId\n}\nconst timeouts: Record<TimeoutId, Callback> = {}\nconst intervals: Record<IntervalId, Callback> = {}\n\n/**\n * Registers a function to be called after a delay.\n * @param callback - The callback to call when the timeout expires\n * @param delay - The delay in milliseconds before the callback is called\n * @param playerId - Optional playerId to tie the timeout to. If the player leaves, this timeout will be cleared\n * @returns The timeout id\n */\nexport function setTimeout(callback: () => void, delay: number, playerId?: PlayerId): TimeoutId {\n\tconst id = nextTimeoutId++\n\ttimeouts[id] = { callback, callAt: api.now() + delay, playerId }\n\treturn id as TimeoutId\n}\n\n/**\n * Registers a function to be called repeatedly every interval.\n * @param callback - The callback to call when the interval expires\n * @param interval - The interval in milliseconds before the callback is called\n * @param playerId - Optional playerId to tie the interval to. If the player leaves, this interval will be stopped\n * @returns The interval id\n */\nexport function setInterval(callback: () => void, interval: number, playerId?: PlayerId): IntervalId {\n\tconst id = nextIntervalId++\n\tintervals[id] = { callback, callAt: api.now() + interval, interval, playerId }\n\treturn id as IntervalId\n}\n\n/**\n * Clears a timeout.\n * @param id - The id of the timeout to clear\n */\nexport function clearTimeout(id: TimeoutId) {\n\tdelete timeouts[id]\n}\n\n/**\n * Clears an interval.\n * @param id - The id of the interval to clear\n */\nexport function clearInterval(id: IntervalId) {\n\tdelete intervals[id]\n}\n\nexport function handleTimers() {\n\tconst now = api.now()\n\tfor (const timeoutId in timeouts) {\n\t\tconst callback = timeouts[timeoutId]\n\t\tif (callback.callAt <= now) {\n\t\t\tif (!callback.playerId || api.checkValid(callback.playerId)) {\n\t\t\t\ttry {\n\t\t\t\t\tcallback.callback()\n\t\t\t\t} catch (e) {\n\t\t\t\t\tapi.log(`Error in timeout callback ${timeoutId}: ${e}`)\n\t\t\t\t}\n\t\t\t}\n\t\t\tdelete timeouts[timeoutId]\n\t\t}\n\t}\n\tfor (const intervalId in intervals) {\n\t\tconst callback = intervals[intervalId]\n\t\tif (callback.callAt <= now) {\n\t\t\tif (callback.playerId && !api.checkValid(callback.playerId)) {\n\t\t\t\tdelete intervals[intervalId]\n\t\t\t\tcontinue\n\t\t\t}\n\n\t\t\ttry {\n\t\t\t\tcallback.callback()\n\t\t\t} catch (e) {\n\t\t\t\tapi.log(`Error in interval callback ${intervalId}: ${e}`)\n\t\t\t}\n\t\t\tcallback.callAt += callback.interval\n\t\t}\n\t}\n}\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearInterval: () => clearInterval,\n  clearTimeout: () => clearTimeout,\n  forceLoadChunk: () => forceLoadChunk,\n  getRandomItem: () => getRandomItem,\n  randomInt: () => randomInt,\n  setInterval: () => setInterval,\n  setTimeout: () => setTimeout,\n  shuffleArray: () => shuffleArray\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:timers.ts\nvar nextTimeoutId = 1;\nvar nextIntervalId = 1;\nvar timeouts = {};\nvar intervals = {};\nfunction setTimeout(callback, delay, playerId) {\n  const id = nextTimeoutId++;\n  timeouts[id] = { callback, callAt: api.now() + delay, playerId };\n  return id;\n}\nfunction setInterval(callback, interval, playerId) {\n  const id = nextIntervalId++;\n  intervals[id] = { callback, callAt: api.now() + interval, interval, playerId };\n  return id;\n}\nfunction clearTimeout(id) {\n  delete timeouts[id];\n}\nfunction clearInterval(id) {\n  delete intervals[id];\n}\nfunction handleTimers() {\n  const now = api.now();\n  for (const timeoutId in timeouts) {\n    const callback = timeouts[timeoutId];\n    if (callback.callAt <= now) {\n      if (!callback.playerId || api.checkValid(callback.playerId)) {\n        try {\n          callback.callback();\n        } catch (e) {\n          api.log(`Error in timeout callback ${timeoutId}: ${e}`);\n        }\n      }\n      delete timeouts[timeoutId];\n    }\n  }\n  for (const intervalId in intervals) {\n    const callback = intervals[intervalId];\n    if (callback.callAt <= now) {\n      if (callback.playerId && !api.checkValid(callback.playerId)) {\n        delete intervals[intervalId];\n        continue;\n      }\n      try {\n        callback.callback();\n      } catch (e) {\n        api.log(`Error in interval callback ${intervalId}: ${e}`);\n      }\n      callback.callAt += callback.interval;\n    }\n  }\n}\n\n// world-code-plugin:chunk.ts\nfunction forceLoadChunk(x, y, z, onLoaded) {\n  const block = api.getBlock(x, y, z);\n  if (block !== "Unloaded") {\n    onLoaded();\n    return;\n  }\n  setTimeout(() => {\n    forceLoadChunk(x, y, z, onLoaded);\n  }, 100);\n}\n\n// world-code-plugin:random.ts\nfunction randomInt(min, max, includeMax = false) {\n  return Math.floor(Math.random() * (max - min + (includeMax ? 1 : 0))) + min;\n}\nfunction shuffleArray(array) {\n  for (let i = 0; i < array.length; i++) {\n    const j = randomInt(i, array.length);\n    [array[i], array[j]] = [array[j], array[i]];\n  }\n  return array;\n}\nfunction getRandomItem(array) {\n  return array[randomInt(0, array.length)];\n}\n\n// world-code-plugin:index.ts\ntick = () => {\n  handleTimers();\n};\n',
        types: 'import { PlayerId } from \'@bloxd\';\n\ndeclare const __brand: unique symbol;\ntype Branded<T, B> = T & {\n    [__brand]: B;\n};\ntype TimeoutId = Branded<number, "TimeoutId">;\ntype IntervalId = Branded<number, "IntervalId">;\n/**\n * Registers a function to be called after a delay.\n * @param callback - The callback to call when the timeout expires\n * @param delay - The delay in milliseconds before the callback is called\n * @param playerId - Optional playerId to tie the timeout to. If the player leaves, this timeout will be cleared\n * @returns The timeout id\n */\ndeclare function setTimeout(callback: () => void, delay: number, playerId?: PlayerId): TimeoutId;\n/**\n * Registers a function to be called repeatedly every interval.\n * @param callback - The callback to call when the interval expires\n * @param interval - The interval in milliseconds before the callback is called\n * @param playerId - Optional playerId to tie the interval to. If the player leaves, this interval will be stopped\n * @returns The interval id\n */\ndeclare function setInterval(callback: () => void, interval: number, playerId?: PlayerId): IntervalId;\n/**\n * Clears a timeout.\n * @param id - The id of the timeout to clear\n */\ndeclare function clearTimeout(id: TimeoutId): void;\n/**\n * Clears an interval.\n * @param id - The id of the interval to clear\n */\ndeclare function clearInterval(id: IntervalId): void;\n\n/**\n * Forces a chunk to be loaded.\n * @param x - The x coordinate of the chunk\n * @param y - The y coordinate of the chunk\n * @param z - The z coordinate of the chunk\n * @param onLoaded - The function to call when the chunk is loaded\n */\ndeclare function forceLoadChunk(x: number, y: number, z: number, onLoaded: () => void): void;\n\n/**\n * Generates a random integer between min and max, inclusive.\n * @param min - The minimum value.\n * @param max - The maximum value.\n * @param includeMax - Whether to include the max value in the range. Defaults to false.\n * @returns A random integer between min and max, inclusive.\n */\ndeclare function randomInt(min: number, max: number, includeMax?: boolean): number;\n/**\n * Shuffles an array in place.\n * @param array - The array to shuffle.\n * @returns The shuffled array.\n */\ndeclare function shuffleArray<T>(array: T[]): T[];\n/**\n * Gets a random item from an array.\n * @param array - The array to get a random item from.\n * @returns A random item from the array.\n */\ndeclare function getRandomItem<T extends readonly any[]>(array: T): T[number];\n\nexport { clearInterval, clearTimeout, forceLoadChunk, getRandomItem, randomInt, setInterval, setTimeout, shuffleArray };\nexport type { IntervalId, TimeoutId };\n'
      },
      PU = {
        files: {
          "MapVoter.ts": 'import { PlayerId } from "@bloxd"\nimport { BaseMapInfo, BaseTeamInfo } from "./types"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\nimport { shuffleArray, getRandomItem, setTimeout } from "@plugins/helpers"\n\nconst MAP_VOTING_CATEGORY = "__SBG_MAP_VOTING__"\nconst MAP_VOTING_ITEM_PREFIX = "__SBG_MAP_"\n\nconst MAP_OPTION_COUNT = 4\n\nexport class MapVoter<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>> {\n\tprivate possibleMapOptions: MapInfo[] = []\n\tprivate mapVotes: Record<PlayerId, MapInfo["name"]> = {}\n\tprivate mapVotingActive: boolean = false\n\n\tconstructor(\n\t\treadonly maps: readonly MapInfo[],\n\t\treadonly players: Record<PlayerId, SessionBasedPlayer<TeamInfo, MapInfo>>,\n\t) {}\n\n\tcreateMapVoting(): void {\n\t\tif (this.mapVotingActive) {\n\t\t\treturn\n\t\t}\n\t\tthis.mapVotingActive = true\n\t\tapi.configureShopCategory(MAP_VOTING_CATEGORY, {\n\t\t\tcustomTitle: "Map Voting",\n\t\t\tsortPriority: 0.5,\n\t\t})\n\n\t\t// Delete previous map options\n\t\tfor (const map of this.possibleMapOptions) {\n\t\t\tapi.deleteShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`)\n\t\t}\n\n\t\tconst possibleOptions = this.maps.slice()\n\t\tshuffleArray(possibleOptions)\n\t\tthis.possibleMapOptions = possibleOptions.slice(0, MAP_OPTION_COUNT)\n\t\tfor (const map of this.possibleMapOptions) {\n\t\t\tapi.createShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`, {\n\t\t\t\timage: map.icon,\n\t\t\t\tcustomTitle: map.name,\n\t\t\t\tcanBuy: true,\n\t\t\t\tbuyButtonText: "Votes: 0",\n\t\t\t})\n\t\t}\n\n\t\tsetTimeout(() => {\n\t\t\tfor (const playerId in this.players) {\n\t\t\t\tapi.openShop(playerId, false, MAP_VOTING_CATEGORY)\n\t\t\t}\n\t\t}, 100)\n\t}\n\n\tonMapVote(playerId: PlayerId, categoryKey: string, shopItemKey: string) {\n\t\tif (categoryKey !== MAP_VOTING_CATEGORY) {\n\t\t\treturn\n\t\t}\n\t\tif (!this.mapVotingActive) {\n\t\t\treturn\n\t\t}\n\t\tif (!shopItemKey.startsWith(MAP_VOTING_ITEM_PREFIX)) {\n\t\t\treturn\n\t\t}\n\t\tconst mapName = shopItemKey.replace(MAP_VOTING_ITEM_PREFIX, "")\n\t\tif (\n\t\t\t!this.possibleMapOptions.some((map) => {\n\t\t\t\treturn map.name === mapName\n\t\t\t})\n\t\t) {\n\t\t\treturn\n\t\t}\n\t\tconst hadVotedBefore = !!this.mapVotes[playerId]\n\t\tthis.mapVotes[playerId] = mapName\n\t\tthis.updateMapVotingForPlayer(playerId)\n\t\tthis.updateMapCountsForEveryone()\n\t\tif (!hadVotedBefore) {\n\t\t\tapi.openShop(playerId, true)\n\t\t}\n\t}\n\n\tonPlayerJoin(playerId: PlayerId) {\n\t\tif (!this.mapVotingActive) {\n\t\t\treturn\n\t\t}\n\t\tthis.updateMapVotingForPlayer(playerId)\n\t\tsetTimeout(\n\t\t\t() => {\n\t\t\t\tapi.openShop(playerId, false, MAP_VOTING_CATEGORY)\n\t\t\t},\n\t\t\t100,\n\t\t\tplayerId,\n\t\t)\n\t}\n\n\tonPlayerLeave(playerId: PlayerId) {\n\t\tif (!this.mapVotingActive) {\n\t\t\treturn\n\t\t}\n\t\tdelete this.mapVotes[playerId]\n\t\tthis.updateMapCountsForEveryone()\n\t}\n\n\tprivate updateMapCountsForEveryone() {\n\t\tfor (const map of this.possibleMapOptions) {\n\t\t\tconst votes = Object.values(this.mapVotes).filter((v) => {\n\t\t\t\treturn v === map.name\n\t\t\t}).length\n\t\t\tapi.updateShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`, {\n\t\t\t\tbuyButtonText: `Votes: ${votes}`,\n\t\t\t})\n\t\t}\n\t}\n\tprivate updateMapVotingForPlayer(playerId: PlayerId) {\n\t\tapi.configureShopCategoryForPlayer(playerId, MAP_VOTING_CATEGORY, {\n\t\t\tredDot: !this.mapVotes[playerId],\n\t\t})\n\t\tfor (const map of this.possibleMapOptions) {\n\t\t\tapi.updateShopItemForPlayer(playerId, MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`, {\n\t\t\t\tcanBuy: this.mapVotes[playerId] !== map.name,\n\t\t\t\tisSelected: this.mapVotes[playerId] === map.name,\n\t\t\t})\n\t\t}\n\t}\n\n\tendMapVoting() {\n\t\tif (!this.mapVotingActive) {\n\t\t\treturn\n\t\t}\n\t\tthis.mapVotingActive = false\n\t\tfor (const map of this.possibleMapOptions) {\n\t\t\tapi.deleteShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`)\n\t\t}\n\t\tthis.possibleMapOptions = []\n\t\tthis.mapVotes = {}\n\t}\n\n\tchooseMap(): MapInfo {\n\t\tif (!this.mapVotingActive) {\n\t\t\treturn null\n\t\t}\n\t\tconst votedPlayers = Object.keys(this.mapVotes)\n\t\tif (votedPlayers.length === 0) {\n\t\t\treturn getRandomItem(this.possibleMapOptions)\n\t\t}\n\n\t\tconst randomPlayer = getRandomItem(votedPlayers)\n\t\tconst choice = this.mapVotes[randomPlayer]\n\t\treturn this.maps.find((map) => {\n\t\t\treturn map.name === choice\n\t\t})\n\t}\n}\n',
          "SessionBasedGame.ts": 'import { BaseTeamInfo, BaseMapInfo, SessionBasedGameSetupOptions, MapSource } from "./types"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\nimport { BlockName, CustomTextStyling, PlayerId, Pos } from "@bloxd"\nimport { style, getDimensions, getLowHigh, displayMs, getSourceRect } from "./helpers"\nimport { forceLoadChunk, setInterval, shuffleArray, getRandomItem } from "@plugins/helpers"\nimport { MapVoter } from "./MapVoter"\n\nexport class SessionBasedGame<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends SessionBasedPlayer<TeamInfo, MapInfo>> {\n\tgamePhase: "beforeGame" | "inGame" | "gameFinished" = "beforeGame"\n\tprivate startingRound = false\n\tprivate players: Record<PlayerId, Player> = {}\n\tmap: MapInfo | null = null\n\tprivate gameStartTime: number = 0\n\tprivate startGameAt: number = Infinity\n\tprivate endGameAt: number = Infinity\n\tprivate mapVoter: MapVoter<TeamInfo, MapInfo>\n\n\tmessageColours = {\n\t\terror: "#ff0000",\n\t\tsuccess: "#00ff00",\n\t\tinfo: "#ffffff",\n\t}\n\n\tprivate get playersForFullLobby() {\n\t\treturn this.gameOptions.teams.reduce((a, b) => {\n\t\t\treturn a + b.maxPlayers\n\t\t}, 0)\n\t}\n\n\tprivate get playerCount() {\n\t\treturn Object.keys(this.players).length\n\t}\n\n\tconstructor(readonly gameOptions: Required<SessionBasedGameSetupOptions<TeamInfo, MapInfo, Player>>) {\n\t\tthis.mapVoter = new MapVoter(this.gameOptions.maps, this.players)\n\t\tthis.resetGame(false)\n\t\tsetInterval(() => {\n\t\t\tthis.sendRightInfoText()\n\t\t}, 1000)\n\t}\n\n\t/**\n\t * Gets the player object for a given player ID.\n\t * @param playerId The player ID to get the player for\n\t */\n\tgetPlayer(playerId: PlayerId) {\n\t\treturn this.players[playerId]\n\t}\n\n\t/**\n\t * Gets all the players in the game, including spectators.\n\t * @returns An iterator of all the players in the game.\n\t */\n\t*getPlayers(): Generator<Player> {\n\t\tfor (const playerId in this.players) {\n\t\t\tyield this.players[playerId]\n\t\t}\n\t}\n\n\tgetStartingInText(): string | CustomTextStyling {\n\t\tif (this.gamePhase !== "beforeGame") {\n\t\t\treturn []\n\t\t}\n\t\tconst timeLeft = this.startGameAt - api.now()\n\t\tif (timeLeft < 0) {\n\t\t\treturn []\n\t\t}\n\t\treturn [\n\t\t\t...style({ translationKey: "sessionBasedGame:startingIn" }, this.messageColours.info),\n\t\t\t" ",\n\t\t\t...style(`${displayMs(timeLeft)}`, timeLeft < 10_000 ? this.messageColours.success : this.messageColours.info),\n\t\t]\n\t}\n\t/**\n\t * Gives all players coloured armour based on their team name. Spectators will get black armour.\n\t * If their team name is not a valid colour, they will be skipped.\n\t */\n\tgiveColouredArmourToEveryone() {\n\t\tfor (const playerId in this.players) {\n\t\t\tconst player = this.players[playerId]\n\t\t\tconst prefix = player.team ? player.team.name : "Black"\n\t\t\ttry {\n\t\t\t\tapi.setItemSlot(playerId, 46, `${prefix} Wood Helmet`)\n\t\t\t\tapi.setItemSlot(playerId, 47, `${prefix} Wood Chestplate`)\n\t\t\t\tapi.setItemSlot(playerId, 48, `${prefix} Wood Gauntlets`)\n\t\t\t\tapi.setItemSlot(playerId, 49, `${prefix} Wood Leggings`)\n\t\t\t\tapi.setItemSlot(playerId, 50, `${prefix} Wood Boots`)\n\t\t\t} catch (e) {\n\t\t\t\tapi.log(`Error giving coloured armour to player ${playerId}: ${e}`)\n\t\t\t}\n\t\t}\n\t}\n\n\tonPlayerJoin(playerId: PlayerId) {\n\t\tthis.players[playerId] = new this.gameOptions.playerConstructor(playerId, this)\n\t\tthis.mapVoter.onPlayerJoin(playerId)\n\t\tthis.updateTimeTillStart()\n\t}\n\n\tonPlayerLeave(playerId: PlayerId) {\n\t\tif (!this.players[playerId]) {\n\t\t\treturn\n\t\t}\n\t\tif (this.gamePhase === "beforeGame") {\n\t\t\tconst requestedTeam = this.players[playerId].requestedTeam\n\t\t\tif (requestedTeam) {\n\t\t\t\tthis.placeTeamPad(requestedTeam.name, false)\n\t\t\t}\n\t\t}\n\t\tdelete this.players[playerId]\n\t\tthis.checkWin()\n\t\tthis.mapVoter.onPlayerLeave(playerId)\n\t}\n\n\tonPlayerDie(playerId: PlayerId) {\n\t\tthis.checkWin()\n\t}\n\n\tcheckWin() {\n\t\tif (this.gamePhase !== "inGame") {\n\t\t\treturn\n\t\t}\n\t\tconst teamsAlive = this.getTeamsAlive()\n\t\tif (teamsAlive.length === 1) {\n\t\t\tthis.makeTeamWin(teamsAlive[0])\n\t\t}\n\t}\n\n\tonPlayerChat(playerId: PlayerId, message: string) {\n\t\treturn this.players[playerId].onMessage()\n\t}\n\n\tonPlayerBoughtShopItem(playerId: PlayerId, categoryKey: string, itemKey: string) {\n\t\tthis.mapVoter.onMapVote(playerId, categoryKey, itemKey)\n\t}\n\n\ttick() {\n\t\tthis.checkGameTransition()\n\t}\n\n\tprivate getTeamsAlive() {\n\t\tconst teamsAlive: TeamInfo[] = []\n\t\tfor (const playerId in this.players) {\n\t\t\tconst player = this.players[playerId]\n\t\t\tif (player.team && !teamsAlive.includes(player.team)) {\n\t\t\t\tteamsAlive.push(player.team)\n\t\t\t}\n\t\t}\n\t\treturn teamsAlive\n\t}\n\n\tprivate updateTimeTillStart() {\n\t\tif (this.gamePhase === "beforeGame" && this.playerCount >= this.playersForFullLobby) {\n\t\t\tthis.setStartGame(this.gameOptions.fullLobbyStartInSecs)\n\t\t}\n\t}\n\n\tprivate setStartGame(startInSecs: number) {\n\t\tconst newStartAt = api.now() + startInSecs * 1000\n\t\tthis.startGameAt = Math.min(this.startGameAt, newStartAt)\n\t\tapi.broadcastMessage(style(`Starting in ${startInSecs}s...`, this.messageColours.info))\n\t}\n\n\tprivate checkGameTransition() {\n\t\tif (this.gamePhase === "beforeGame") {\n\t\t\tconst timeLeft = this.startGameAt - api.now()\n\t\t\tif (timeLeft < 0) {\n\t\t\t\tif (this.playerCount < 2) {\n\t\t\t\t\tapi.broadcastMessage(style("Not enough players to start game", this.messageColours.error))\n\t\t\t\t\tthis.startGameAt = Infinity\n\t\t\t\t\tthis.setStartGame(this.gameOptions.emptyLobbyStartInSecs)\n\t\t\t\t} else {\n\t\t\t\t\tthis.startGame()\n\t\t\t\t}\n\t\t\t\treturn\n\t\t\t} else if (timeLeft < 5_000) {\n\t\t\t\tconst secsLeft = Math.ceil(timeLeft / 1000)\n\t\t\t\tfor (const playerId in this.players) {\n\t\t\t\t\tapi.setClientOption(playerId, "middleTextUpper", style(`Game starts in ${secsLeft} seconds`, this.messageColours.info))\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tfor (const playerId in this.players) {\n\t\t\t\t\tapi.setClientOption(playerId, "middleTextUpper", [])\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tif (this.gamePhase === "gameFinished") {\n\t\t\tconst timeLeft = this.endGameAt - api.now()\n\t\t\tif (timeLeft < 0) {\n\t\t\t\tthis.resetGame(true)\n\t\t\t} else if (timeLeft < 5_000) {\n\t\t\t\tconst secsLeft = Math.ceil(timeLeft / 1000)\n\t\t\t\tfor (const playerId in this.players) {\n\t\t\t\t\tapi.setClientOption(playerId, "middleTextUpper", style(`Game ends in ${secsLeft} seconds`, this.messageColours.info))\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tprivate sendRightInfoText() {\n\t\tfor (const playerId in this.players) {\n\t\t\tconst rightInfoText = this.gameOptions.getRightInfoText(this.players[playerId])\n\t\t\tif (rightInfoText) {\n\t\t\t\tapi.setClientOption(playerId, "RightInfoText", rightInfoText)\n\t\t\t}\n\t\t}\n\t}\n\n\tprivate loadMap(source: MapSource) {\n\t\tconst rect = getSourceRect(source)\n\t\tconst mapDimensions = getDimensions(rect)\n\t\tconst { low: mapLow } = getLowHigh(rect)\n\n\t\tconst { low: playAreaLow, high: playAreaHigh } = getLowHigh(this.gameOptions.playAreaRect)\n\n\t\tfor (let x = 0; x < mapDimensions.l; x += 32) {\n\t\t\tfor (let y = 0; y < mapDimensions.w; y += 32) {\n\t\t\t\tfor (let z = 0; z < mapDimensions.h; z += 32) {\n\t\t\t\t\tconst mapChunkPos: Pos = [mapLow[0] + x, mapLow[1] + y, mapLow[2] + z]\n\t\t\t\t\tconst playAreaChunkPos: Pos = [playAreaLow[0] + x, playAreaLow[1] + y, playAreaLow[2] + z]\n\n\t\t\t\t\tif (source.schematic !== undefined) {\n\t\t\t\t\t\tapi.setChunkAsSchematic(source.schematic, mapChunkPos, playAreaChunkPos)\n\t\t\t\t\t} else {\n\t\t\t\t\t\tforceLoadChunk(mapChunkPos[0], mapChunkPos[1], mapChunkPos[2], () => {\n\t\t\t\t\t\t\tapi.copyChunk(mapChunkPos, playAreaChunkPos)\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// Replace the rest of the play area with air\n\t\tconst mapEnd: Pos = [playAreaLow[0] + mapDimensions.l, playAreaLow[1] + mapDimensions.w, playAreaLow[2] + mapDimensions.h]\n\t\tfillOutsideWithAir(playAreaLow, playAreaHigh, mapEnd)\n\t}\n\n\tprivate startGame() {\n\t\tapi.setMaxPlayers(1, this.playersForFullLobby + this.gameOptions.maxSpectators)\n\n\t\tthis.assignTeams()\n\n\t\tthis.map = null\n\t\tif (this.gameOptions.mapVotingEnabled) {\n\t\t\tthis.map = this.mapVoter.chooseMap()\n\t\t\tthis.mapVoter.endMapVoting()\n\t\t}\n\n\t\tif (!this.map) {\n\t\t\tthis.map = getRandomItem(this.gameOptions.maps)\n\t\t}\n\n\t\t// finally: a throw here leaves the game in beforeGame, and a startingRound stuck true\n\t\t// would fade every player in the lobby it resets to\n\t\tthis.startingRound = true\n\t\ttry {\n\t\t\tfor (const playerId in this.players) {\n\t\t\t\tapi.setClientOption(playerId, "middleTextUpper", [])\n\t\t\t\tif (this.players[playerId].team) {\n\t\t\t\t\tthis.players[playerId].startPlaying()\n\t\t\t\t} else {\n\t\t\t\t\tthis.players[playerId].startSpectating()\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.loadMap(this.map.source)\n\n\t\t\tthis.gameStartTime = api.now()\n\t\t\tthis.gamePhase = "inGame"\n\t\t} finally {\n\t\t\tthis.startingRound = false\n\t\t}\n\t\tthis.gameOptions.onStart()\n\t}\n\n\t/**\n\t * Whether spectators should render faded. gamePhase can\'t be read directly: it only flips to\n\t * "inGame" once startGame() has started every player, and the sit-out spectators it makes\n\t * along the way need fading too.\n\t */\n\tspectatorsAreFaded(): boolean {\n\t\treturn this.startingRound || this.gamePhase === "inGame"\n\t}\n\n\tprivate assignTeams() {\n\t\tconst teamCounts = Object.fromEntries(\n\t\t\tthis.gameOptions.teams.map((team) => {\n\t\t\t\treturn [team.name, 0]\n\t\t\t}),\n\t\t) as Record<string, number>\n\t\tconst requestedPlayers: PlayerId[] = []\n\t\tconst unrequestedPlayers: PlayerId[] = []\n\t\tfor (const playerId in this.players) {\n\t\t\tconst player = this.players[playerId]\n\t\t\tif (player.requestedTeam) {\n\t\t\t\trequestedPlayers.push(playerId)\n\t\t\t} else {\n\t\t\t\tunrequestedPlayers.push(playerId)\n\t\t\t}\n\t\t}\n\t\tshuffleArray(unrequestedPlayers)\n\t\tconst playerIds = [...requestedPlayers, ...unrequestedPlayers]\n\t\tfor (const playerId of playerIds) {\n\t\t\tconst player = this.players[playerId]\n\t\t\tif (player.requestedTeam) {\n\t\t\t\tplayer.team = player.requestedTeam\n\t\t\t\tteamCounts[player.requestedTeam.name]++\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tlet smallestTeamPlayers = Infinity\n\t\t\tlet smallestTeam: TeamInfo | null = null\n\t\t\tfor (const team of this.gameOptions.teams) {\n\t\t\t\tconst numOnTeam = teamCounts[team.name]\n\t\t\t\tif (numOnTeam < smallestTeamPlayers && numOnTeam < team.maxPlayers) {\n\t\t\t\t\tsmallestTeamPlayers = numOnTeam\n\t\t\t\t\tsmallestTeam = team\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (smallestTeam === null) {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tthis.players[playerId].team = smallestTeam\n\t\t\tteamCounts[smallestTeam.name]++\n\t\t}\n\t}\n\n\t/**\n\t * Manually sets a team to win the game. Will begin the game reset timer to restart the game.#\n\t * Automatically called when there is only one team left.\n\t * @param winningTeam - The team object that won the game.\n\t */\n\tmakeTeamWin(winningTeam: TeamInfo | null) {\n\t\tif (this.gamePhase !== "inGame") {\n\t\t\treturn\n\t\t}\n\t\tthis.gamePhase = "gameFinished"\n\t\tthis.gameOptions.onFinish(winningTeam)\n\t\tthis.endGameAt = api.now() + this.gameOptions.gameResetInSecs * 1000\n\t}\n\n\tprivate resetGame(restart: boolean) {\n\t\tthis.gamePhase = "beforeGame"\n\t\tthis.startGameAt = Infinity\n\t\tthis.endGameAt = Infinity\n\t\tfor (const playerId in this.players) {\n\t\t\tconst player = this.players[playerId]\n\t\t\tplayer.startSpectating()\n\t\t\tplayer.requestedTeam = null\n\t\t\tif (restart) {\n\t\t\t\tapi.killLifeform(playerId)\n\t\t\t}\n\t\t}\n\t\tapi.setMaxPlayers(this.playersForFullLobby, this.playersForFullLobby + this.gameOptions.maxSpectators)\n\t\tthis.loadMap(this.gameOptions.lobby.source)\n\t\tif (this.gameOptions.lobby.teamPads) {\n\t\t\tthis.placeTeamPads()\n\t\t}\n\t\tthis.setStartGame(this.gameOptions.emptyLobbyStartInSecs)\n\t\tif (this.gameOptions.mapVotingEnabled) {\n\t\t\tthis.mapVoter.createMapVoting()\n\t\t}\n\t}\n\n\tonBlockStandStart(playerId: PlayerId, x: number, y: number, z: number, blockName: BlockName) {\n\t\tif (!this.gameOptions.lobby.teamPads) {\n\t\t\treturn\n\t\t}\n\t\tif (this.gamePhase !== "beforeGame") {\n\t\t\treturn\n\t\t}\n\t\tconst player = this.players[playerId]\n\t\tlet team: TeamInfo | null = null\n\t\tconst { low: playAreaLow, high: playAreaHigh } = getLowHigh(this.gameOptions.playAreaRect)\n\t\tfor (const teamPadName in this.gameOptions.lobby.teamPads) {\n\t\t\tconst teamPadInfo = this.gameOptions.lobby.teamPads[teamPadName]\n\t\t\tconst { low: rectLow, high: rectHigh } = getLowHigh(teamPadInfo.rect)\n\t\t\trectLow[0] += playAreaLow[0]\n\t\t\trectLow[1] += playAreaLow[1]\n\t\t\trectLow[2] += playAreaLow[2]\n\t\t\trectHigh[0] += playAreaLow[0]\n\t\t\trectHigh[1] += playAreaLow[1]\n\t\t\trectHigh[2] += playAreaLow[2]\n\t\t\tif (api.isInsideRect([x, y, z], rectLow, rectHigh)) {\n\t\t\t\tteam = this.gameOptions.teams.find((team) => {\n\t\t\t\t\treturn team.name === teamPadName\n\t\t\t\t})\n\t\t\t\tbreak\n\t\t\t}\n\t\t}\n\t\tif (!team) {\n\t\t\treturn\n\t\t}\n\n\t\tconst oldTeam = player.requestedTeam\n\t\tif (oldTeam === team) {\n\t\t\treturn\n\t\t}\n\n\t\tlet requestCount = 0\n\t\tfor (const playerId in this.players) {\n\t\t\tconst player = this.players[playerId]\n\t\t\tif (player.requestedTeam === team) {\n\t\t\t\trequestCount++\n\t\t\t}\n\t\t}\n\n\t\tif (player.qTextId) {\n\t\t\tapi.removeFromQueue(player.qTextId)\n\t\t}\n\t\tif (requestCount >= team.maxPlayers) {\n\t\t\tif (player.requestedTeam !== team) {\n\t\t\t\tplayer.qTextId = api.queueMiddleTextLower(playerId, style(`${team.name} team is full`, this.messageColours.error), 1000)\n\t\t\t}\n\t\t\t// Unneeded, but nice sanity check\n\t\t\tthis.placeTeamPad(team.name, true)\n\t\t\treturn\n\t\t}\n\n\t\tplayer.requestedTeam = team\n\n\t\tplayer.qTextId = api.queueMiddleTextLower(playerId, style(`${team.name} team selected`, this.messageColours.success), 1000)\n\t\tif (oldTeam !== team) {\n\t\t\tif (oldTeam) {\n\t\t\t\tthis.placeTeamPad(oldTeam.name, false)\n\t\t\t}\n\t\t\tconst isFull = requestCount + 1 >= team.maxPlayers\n\t\t\tthis.placeTeamPad(team.name, isFull)\n\t\t}\n\t}\n\n\tprivate placeTeamPad(teamName: string, full: boolean) {\n\t\tconst { low: playAreaLow } = getLowHigh(this.gameOptions.playAreaRect)\n\t\tconst { rect, emptyBlock, fullBlock } = this.gameOptions.lobby.teamPads[teamName]\n\t\t// Only force load the first chunk - assumes the rest of the chunk is already loaded\n\t\tconst { low: rectLow, high: rectHigh } = getLowHigh(rect)\n\t\tfor (let x = rectLow[0] + playAreaLow[0]; x <= rectHigh[0] + playAreaLow[0]; x += 32) {\n\t\t\tfor (let y = rectLow[1] + playAreaLow[1]; y <= rectHigh[1] + playAreaLow[1]; y += 32) {\n\t\t\t\tfor (let z = rectLow[2] + playAreaLow[2]; z <= rectHigh[2] + playAreaLow[2]; z += 32) {\n\t\t\t\t\tforceLoadChunk(x, y, z, () => {\n\t\t\t\t\t\tconst endX = Math.min(x + 31, rectHigh[0] + playAreaLow[0])\n\t\t\t\t\t\tconst endY = Math.min(y + 31, rectHigh[1] + playAreaLow[1])\n\t\t\t\t\t\tconst endZ = Math.min(z + 31, rectHigh[2] + playAreaLow[2])\n\t\t\t\t\t\tfillBox([x, y, z], [endX, endY, endZ], full ? fullBlock : emptyBlock)\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tprivate placeTeamPads() {\n\t\tfor (const teamName in this.gameOptions.lobby.teamPads) {\n\t\t\tthis.placeTeamPad(teamName, false)\n\t\t}\n\t}\n}\n\nfunction fillOutsideWithAir(low: Pos, high: Pos, copiedHigh: Pos) {\n\tfor (let axis = 0; axis < 3; axis++) {\n\t\tconst slabLow: Pos = [low[0], low[1], low[2]]\n\t\tconst slabHigh: Pos = [high[0], high[1], high[2]]\n\t\tslabLow[axis] = copiedHigh[axis] + 1\n\n\t\t// Avoid overlapping slabs (no point setting blocks already set)\n\t\tfor (let earlier = 0; earlier < axis; earlier++) {\n\t\t\tslabHigh[earlier] = Math.min(copiedHigh[earlier], high[earlier])\n\t\t}\n\n\t\tif (slabLow[0] <= slabHigh[0] && slabLow[1] <= slabHigh[1] && slabLow[2] <= slabHigh[2]) {\n\t\t\tfillBox(slabLow, slabHigh, "Air")\n\t\t}\n\t}\n}\n\nfunction fillBox(pos1: Pos, pos2: Pos, block: BlockName) {\n\t// api.setBlockRect caps at 360 blocks; slice along Z, then Y, then X so each call stays under the cap.\n\tconst maxRectVol = 360\n\tconst {\n\t\tlow: [x1, y1, z1],\n\t\thigh: [x2, y2, z2],\n\t} = getLowHigh([pos1, pos2])\n\tconst zSizeFull = z2 - z1 + 1\n\tconst zStep = Math.min(zSizeFull, maxRectVol)\n\tfor (let z = z1; z <= z2; z += zStep) {\n\t\tconst zEnd = Math.min(z2, z + zStep - 1)\n\t\tconst zSize = zEnd - z + 1\n\t\tconst yStep = Math.max(1, Math.floor(maxRectVol / zSize))\n\t\tfor (let y = y1; y <= y2; y += yStep) {\n\t\t\tconst yEnd = Math.min(y2, y + yStep - 1)\n\t\t\tconst yz = (yEnd - y + 1) * zSize\n\t\t\tconst xStep = Math.max(1, Math.floor(maxRectVol / yz))\n\t\t\tfor (let x = x1; x <= x2; x += xStep) {\n\t\t\t\tconst xEnd = Math.min(x2, x + xStep - 1)\n\t\t\t\tapi.setBlockRect([x, y, z], [xEnd, yEnd, zEnd], block)\n\t\t\t}\n\t\t}\n\t}\n}\n',
          "SessionBasedPlayer.ts": 'import { BaseTeamInfo, BaseMapInfo } from "./types"\nimport { ChatTags, PlayerId, Pos, RecursiveReadonly } from "@bloxd"\nimport { SessionBasedGame } from "./SessionBasedGame"\nimport { style, getLowHigh } from "./helpers"\n\n/** Opacity a spectator renders at. Only other spectators can see them, and themselves in third person. */\nexport const SPECTATOR_OPACITY = 0.5\n\nexport class SessionBasedPlayer<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>> {\n\tisSpectating = true\n\tteam: TeamInfo | null = null\n\trequestedTeam: TeamInfo | null = null\n\tqTextId: string | null = null\n\n\tconstructor(\n\t\treadonly playerId: PlayerId,\n\t\treadonly game: SessionBasedGame<TeamInfo, MapInfo, SessionBasedPlayer<TeamInfo, MapInfo>>,\n\t) {\n\t\tapi.setPlayerGamemode(this.playerId, "survival")\n\t\tthis.startSpectating()\n\t\tthis.spawn()\n\t}\n\n\tprivate spawn() {\n\t\tconst spawnPosition = this.onRespawnRequest()\n\t\tif (spawnPosition) {\n\t\t\tapi.setPosition(this.playerId, spawnPosition)\n\t\t}\n\t}\n\n\t/**\n\t * Sets the player as playing the game, setting their health, shields, and other settings.\n\t * Automatically called at the start of a game for players assigned to a team.\n\t */\n\tstartPlaying() {\n\t\tthis.isSpectating = false\n\t\tconst maxHealth = api.getClientOption(this.playerId, "maxHealth")\n\t\tapi.setHealth(this.playerId, maxHealth)\n\t\tif (api.getHealth(this.playerId) !== null) {\n\t\t\tapi.setShieldAmount(this.playerId, api.getClientOption(this.playerId, "initialShield"))\n\t\t}\n\t\tapi.setClientOptions(this.playerId, {\n\t\t\tinitialHealth: maxHealth,\n\t\t\tcreative: false,\n\t\t\tcanAltAction: true,\n\t\t\tcanChange: false,\n\t\t\tuseFullInventory: true,\n\t\t\tcantBreakError: "",\n\t\t\tcantBuildError: [{ str: { translationKey: "general:cantBuildHere" } }],\n\t\t\tcanPickUpItems: true,\n\t\t\tautoRespawn: true,\n\t\t\tsecsToRespawn: 5,\n\t\t\trespawnButtonText: "sessionBasedGame:spectate",\n\t\t\tusePlayAgainButton: true,\n\t\t})\n\t\tthis.updateOtherEntitySettings(false)\n\t\tapi.setCanChangeBlockRect(this.playerId, ...this.game.gameOptions.playAreaRect)\n\n\t\tif (this.team) {\n\t\t\tapi.setTargetedPlayerSettingForEveryone(this.playerId, "killfeedColour", this.team.colour, true)\n\t\t\tapi.setTargetedPlayerSettingForEveryone(this.playerId, "colorInLobbyLeaderboard", this.team.colour, true)\n\t\t}\n\n\t\tthis.spawn()\n\t}\n\n\t/**\n\t * Sets the player as spectating the game, resetting their health, shields, and other settings.\n\t * Automatically called at the start of a game for players not assigned to a team.\n\t * Call this function to turn a player into a spectator (for example, once they die).\n\t */\n\tstartSpectating() {\n\t\tthis.isSpectating = true\n\t\tthis.team = null\n\t\tconst isBeforeGame = this.game.gamePhase === "beforeGame"\n\t\tapi.setClientOptions(this.playerId, {\n\t\t\tcreative: !isBeforeGame,\n\t\t\tuseFullInventory: false,\n\t\t\tcanAltAction: isBeforeGame,\n\t\t\tcanChange: false,\n\t\t\tcantBreakError: [\n\t\t\t\t{ str: { translationKey: "sessionBasedGame:cantChangeBlocksWhileSpectating" }, style: { colour: this.game.messageColours.error } },\n\t\t\t],\n\t\t\tcantBuildError: [\n\t\t\t\t{ str: { translationKey: "sessionBasedGame:cantChangeBlocksWhileSpectating" }, style: { colour: this.game.messageColours.error } },\n\t\t\t],\n\t\t\tcanPickUpItems: true,\n\t\t\tautoRespawn: false,\n\t\t\tsecsToRespawn: 3,\n\t\t\trespawnButtonText: isBeforeGame ? "general:respawn" : "sessionBasedGame:spectate",\n\t\t\tusePlayAgainButton: true,\n\t\t})\n\t\tapi.setEveryoneSettingForPlayer(this.playerId, "canSee", true)\n\t\tthis.updateOtherEntitySettings(true)\n\t\tapi.resetCanChangeBlockRect(this.playerId, ...this.game.gameOptions.playAreaRect)\n\n\t\tfor (const effect of api.getEffects(this.playerId)) {\n\t\t\tapi.removeEffect(this.playerId, effect)\n\t\t}\n\t\tapi.clearInventory(this.playerId)\n\n\t\tthis.game.checkWin()\n\t}\n\n\tprivate updateOtherEntitySettings(isSpectating: boolean) {\n\t\t// pass in isSpectating in case games set it after calling startPlaying()/startSpectating()\n\t\t// Lobby players all carry isSpectating, so fading there would grey out the whole lobby\n\t\tconst fadeSpectators = this.game.spectatorsAreFaded()\n\t\tfor (const player of this.game.getPlayers()) {\n\t\t\tconst canAttack = !isSpectating && !player.isSpectating && (this.playerId === player.playerId || this.team !== player.team)\n\t\t\tapi.setOtherEntitySetting(this.playerId, player.playerId, "canAttack", canAttack)\n\t\t\tapi.setOtherEntitySetting(player.playerId, this.playerId, "canAttack", canAttack)\n\n\t\t\tapi.setOtherEntitySetting(this.playerId, player.playerId, "canSee", isSpectating || !player.isSpectating)\n\t\t\tapi.setOtherEntitySetting(player.playerId, this.playerId, "canSee", player.isSpectating || !isSpectating)\n\n\t\t\t// Our own fade, and the only place it gets cleared again. Also covers the self pair.\n\t\t\tapi.setOtherEntitySetting(player.playerId, this.playerId, "opacity", fadeSpectators && isSpectating ? SPECTATOR_OPACITY : 1)\n\t\t\t// Others are only ever faded in, never cleared, so an opacity a game set for its own\n\t\t\t// effect survives until that player\'s own startPlaying clears it.\n\t\t\tif (player.playerId !== this.playerId && fadeSpectators && player.isSpectating) {\n\t\t\t\tapi.setOtherEntitySetting(this.playerId, player.playerId, "opacity", SPECTATOR_OPACITY)\n\t\t\t}\n\t\t}\n\t}\n\n\tonMessage(): ChatTags {\n\t\tif (this.game.gamePhase === "beforeGame") {\n\t\t\treturn undefined\n\t\t}\n\t\tconst team = this.team\n\t\tif (!team) {\n\t\t\treturn [\n\t\t\t\tstyle("[", this.game.messageColours.info),\n\t\t\t\tstyle({ translationKey: "sessionBasedGame:spectator" }, this.game.messageColours.info),\n\t\t\t\tstyle("]", this.game.messageColours.info),\n\t\t\t]\n\t\t}\n\n\t\treturn [style("[", team.colour), style(team.name, team.colour), style("]", team.colour)]\n\t}\n\n\tonRespawnRequest(): Pos | undefined {\n\t\tlet spawnArea: RecursiveReadonly<{ spawn: Pos; spawnFacing: Pos }> | undefined\n\t\tif (this.team && this.game.map?.teams[this.team.name]) {\n\t\t\tspawnArea = this.game.map.teams[this.team.name]\n\t\t} else if (this.game.gameOptions.lobby) {\n\t\t\tspawnArea = this.game.gameOptions.lobby\n\t\t} else {\n\t\t\treturn undefined\n\t\t}\n\n\t\tconst { spawn, spawnFacing } = spawnArea\n\t\tconst { low: playAreaLow } = getLowHigh(this.game.gameOptions.playAreaRect)\n\t\tconst playAreaSpawn: Pos = [playAreaLow[0] + spawn[0] + 0.5, playAreaLow[1] + spawn[1] + 0.5, playAreaLow[2] + spawn[2] + 0.5]\n\t\tapi.setVelocity(this.playerId, 0, 0, 0)\n\t\tapi.setCameraDirection(this.playerId, spawnFacing as Pos)\n\t\treturn playAreaSpawn\n\t}\n\n\t/**\n\t * Gets the position of the player relative to the play area.\n\t * @returns The position of the player relative to the play area.\n\t */\n\tgetPositionInPlayArea(): Pos {\n\t\tconst { low: playAreaLow } = getLowHigh(this.game.gameOptions.playAreaRect)\n\t\tconst position = api.getPosition(this.playerId)\n\t\treturn [position[0] - playAreaLow[0], position[1] - playAreaLow[1], position[2] - playAreaLow[2]]\n\t}\n}\n',
          "helpers.ts": 'import { CustomTextStyling, Pos, RecursiveReadonly, TranslatedText } from "@bloxd"\nimport { MapSource, MaybeRecursiveReadonly } from "./types"\n\nexport function style(msg: string | TranslatedText, colour: string): CustomTextStyling {\n\treturn [{ str: msg, style: { colour: colour } }]\n}\n\nexport function roundOutwardsToChunkBoundary(rect: RecursiveReadonly<[Pos, Pos]>): [Pos, Pos] {\n\tconst { low, high } = getLowHigh(rect)\n\treturn [\n\t\t[Math.floor(low[0] / 32) * 32, Math.floor(low[1] / 32) * 32, Math.floor(low[2] / 32) * 32],\n\t\t[Math.ceil(high[0] / 32) * 32, Math.ceil(high[1] / 32) * 32, Math.ceil(high[2] / 32) * 32],\n\t]\n}\n\nexport function getDimensions(rect: MaybeRecursiveReadonly<[Pos, Pos]>): { l: number; w: number; h: number } {\n\tconst [pos1, pos2] = rect\n\treturn {\n\t\tl: Math.abs(pos1[0] - pos2[0]),\n\t\tw: Math.abs(pos1[1] - pos2[1]),\n\t\th: Math.abs(pos1[2] - pos2[2]),\n\t}\n}\n\nexport function getLowHigh(rect: RecursiveReadonly<[Pos, Pos]>): { low: Pos; high: Pos } {\n\tconst [pos1, pos2] = rect\n\treturn {\n\t\tlow: [Math.min(pos1[0], pos2[0]), Math.min(pos1[1], pos2[1]), Math.min(pos1[2], pos2[2])],\n\t\thigh: [Math.max(pos1[0], pos2[0]), Math.max(pos1[1], pos2[1]), Math.max(pos1[2], pos2[2])],\n\t}\n}\n\nexport function getSourceRect(source: MapSource): [Pos, Pos] {\n\tif (source.schematic !== undefined) {\n\t\treturn roundOutwardsToChunkBoundary([[0, 0, 0], api.getSchematicDimensions(source.schematic)])\n\t}\n\treturn roundOutwardsToChunkBoundary(source.rect)\n}\n\nexport function preloadRect(rect: MaybeRecursiveReadonly<[Pos, Pos]>) {\n\t// Preloads the chunks in the rectangle to ensure they\'re loaded when the game starts\n\tconst { low: mapLow, high: mapHigh } = getLowHigh(rect)\n\tfor (let x = mapLow[0]; x < mapHigh[0]; x += 32) {\n\t\tfor (let y = mapLow[1]; y < mapHigh[1]; y += 32) {\n\t\t\tfor (let z = mapLow[2]; z < mapHigh[2]; z += 32) {\n\t\t\t\tapi.getBlock(x, y, z)\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction numToTwoDigStr(n: number) {\n\treturn (n < 10 ? "0" : "") + n\n}\n\n/**\n * Display ms in format mm:ss, or hh:mm:ss if hours > 0\n * ss is rounded up (i.e. if ms > 0 then ss always 01 or more)\n */\nexport function displayMs(ms: number): string {\n\tconst totalS = Math.ceil(ms / 1000) // Round up to nearest second\n\tconst hours = Math.floor(totalS / 3600)\n\tconst min = Math.floor((totalS % 3600) / 60)\n\tconst sec = Math.floor(totalS % 60)\n\tif (hours > 0) {\n\t\treturn `${hours}:${numToTwoDigStr(min)}:${numToTwoDigStr(sec)}`\n\t}\n\treturn `${min}:${numToTwoDigStr(sec)}`\n}\n',
          "index.ts": 'import { ChatTags, CustomTextStyling, EntityId, PlayerId, Pos, TranslatedText, RecursiveReadonly, BlockName } from "@bloxd"\nimport { BaseTeamInfo, BaseMapInfo, MapSource, SessionBasedGameSetupOptions } from "./types"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\nimport { SessionBasedGame } from "./SessionBasedGame"\nimport { roundOutwardsToChunkBoundary, getDimensions, preloadRect, style, getSourceRect } from "./helpers"\n\nlet game: SessionBasedGame<any, any, SessionBasedPlayer<any, any>> | null = null\n\nonPlayerJoin = (playerId: PlayerId) => {\n\tgame?.onPlayerJoin(playerId)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tgame?.onPlayerLeave(playerId)\n}\n\ntick = () => {\n\tgame?.tick()\n}\n\nonPlayerChat = (playerId: PlayerId, message: string) => {\n\treturn game?.onPlayerChat(playerId, message)\n}\n\nonMobKilledPlayer = (mobId: EntityId, playerId: PlayerId) => {\n\tgame?.onPlayerDie(playerId)\n}\n\nonPlayerKilledOtherPlayer = (killerId: PlayerId, victimId: PlayerId) => {\n\tgame?.onPlayerDie(victimId)\n}\n\nonRespawnRequest = (playerId: PlayerId) => {\n\treturn game?.getPlayer(playerId)?.onRespawnRequest()\n}\n\nonPlayerBoughtShopItem = (playerId: PlayerId, categoryKey: string, itemKey: string) => {\n\tgame?.onPlayerBoughtShopItem(playerId, categoryKey, itemKey)\n}\n\nonBlockStandStart = (playerId: PlayerId, x: number, y: number, z: number, blockName: BlockName) => {\n\tgame?.onBlockStandStart(playerId, x, y, z, blockName)\n}\n\n/**\n * Create a new SessionBasedGame.\n * @param opts - The options for the game.\n * @param opts.teams - The teams for the game. This should include the team name, max players for this team, and hex colour.\n * @param opts.maps - The maps for the game. This should include the map name, source rectangle or schematic path, and the spawn positions for each team.\n * @param opts.lobby - The lobby area. This should include the source rectangle or schematic path, spawn info, and team pads for team choosing.\n * @param opts.playAreaRect - The play area rectangle. These will be rounded outwards to the nearest chunk boundary\n * @param opts.maxSpectators - The maximum number of spectators allowed in the game.\n * @param opts.emptyLobbyStartInSecs - The number of seconds to wait for the game to start when the lobby isn\'t full yet.\n * @param opts.fullLobbyStartInSecs - The number of seconds to wait for the game to start when the lobby is full.\n * @param opts.gameResetInSecs - The number of seconds to wait before resetting the game after the game finishes.\n * @param opts.mapVotingEnabled - Whether to enable map voting.\n * @param opts.onStart - The function to call when the game starts.\n * @param opts.onFinish - The function to call when the game finishes.\n * @param opts.getRightInfoText - The function to call to get the RightInfoText for the game.\n * @param opts.playerConstructor - The constructor for the player class. This should be a class that extends SessionBasedPlayer\n * @returns The game instance\n */\nexport function createGame<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends SessionBasedPlayer<TeamInfo, MapInfo>>(\n\topts: SessionBasedGameSetupOptions<TeamInfo, MapInfo, Player>,\n): SessionBasedGame<TeamInfo, MapInfo, Player> {\n\tif (game) {\n\t\tthrow new Error("Game already setup")\n\t}\n\tif (opts.maps.length === 0) {\n\t\tthrow new Error("No maps provided")\n\t}\n\tif (opts.teams.length < 2) {\n\t\tthrow new Error(`At least 2 teams are required (got ${opts.teams.length})`)\n\t}\n\tfor (const team of opts.teams) {\n\t\tif (team.maxPlayers < 1) {\n\t\t\tthrow new Error(`Team ${team.name} max players must be at least 1`)\n\t\t}\n\t}\n\topts.playAreaRect = roundOutwardsToChunkBoundary(opts.playAreaRect)\n\tconst playAreaDimensions = getDimensions(opts.playAreaRect)\n\tpreloadRect(opts.playAreaRect)\n\n\tconst newMaps = []\n\tfor (const map of opts.maps) {\n\t\tconst newMap: MapInfo = {\n\t\t\t...map,\n\t\t\tsource: map.source.schematic !== undefined ? map.source : { ...map.source, rect: roundOutwardsToChunkBoundary(map.source.rect) },\n\t\t}\n\t\tconst mapDimensions = getDimensions(getSourceRect(newMap.source))\n\t\tif (mapDimensions.l > playAreaDimensions.l || mapDimensions.w > playAreaDimensions.w || mapDimensions.h > playAreaDimensions.h) {\n\t\t\tthrow new Error(`Map ${map.name} is too large for play area`)\n\t\t}\n\n\t\t// preload the map chunks\n\t\tif (newMap.source.schematic === undefined) {\n\t\t\tpreloadRect(newMap.source.rect)\n\t\t}\n\t\tnewMaps.push(newMap)\n\t}\n\topts.maps = newMaps\n\n\topts.lobby = {\n\t\t...opts.lobby,\n\t\tsource:\n\t\t\topts.lobby.source.schematic !== undefined\n\t\t\t\t? opts.lobby.source\n\t\t\t\t: ({ ...opts.lobby.source, rect: roundOutwardsToChunkBoundary(opts.lobby.source.rect) } as MapSource),\n\t}\n\tconst lobbyDimensions = getDimensions(getSourceRect(opts.lobby.source))\n\tif (lobbyDimensions.l > playAreaDimensions.l || lobbyDimensions.w > playAreaDimensions.w || lobbyDimensions.h > playAreaDimensions.h) {\n\t\tthrow new Error(`Lobby is too large for play area`)\n\t}\n\tif (opts.lobby.source.schematic === undefined) {\n\t\tpreloadRect(opts.lobby.source.rect)\n\t}\n\n\tconst newGame = new SessionBasedGame<TeamInfo, MapInfo, Player>({\n\t\t...defaultSessionBasedGameSetupOptions,\n\t\t...opts,\n\t} as Required<SessionBasedGameSetupOptions<TeamInfo, MapInfo, Player>>)\n\tgame = newGame\n\treturn newGame\n}\n\nconst defaultSessionBasedGameSetupOptions: Required<\n\tOmit<\n\t\tSessionBasedGameSetupOptions<BaseTeamInfo, BaseMapInfo<BaseTeamInfo>, SessionBasedPlayer<BaseTeamInfo, BaseMapInfo<BaseTeamInfo>>>,\n\t\t"teams" | "maps" | "playAreaRect" | "lobby"\n\t>\n> = {\n\tmaxSpectators: 10,\n\temptyLobbyStartInSecs: 60,\n\tfullLobbyStartInSecs: 10,\n\tgameResetInSecs: 10,\n\tmapVotingEnabled: false,\n\tonStart: () => {\n\t\tapi.broadcastMessage(style("Game started", game?.messageColours.success))\n\t},\n\tonFinish: (winningTeam: BaseTeamInfo) => {\n\t\tapi.broadcastMessage(style(`${winningTeam.name} won the game`, winningTeam.colour))\n\t},\n\tgetRightInfoText: (player: SessionBasedPlayer<BaseTeamInfo, BaseMapInfo<BaseTeamInfo>>) => {\n\t\treturn game?.getStartingInText()\n\t},\n\tplayerConstructor: SessionBasedPlayer,\n}\n\nexport { SessionBasedGame, SessionBasedPlayer, BaseTeamInfo, BaseMapInfo, SessionBasedGameSetupOptions }\n\nexport type { MapSource } from "./types"\n',
          "types.ts": 'import { BlockName, CustomTextStyling, Pos, RecursiveReadonly } from "@bloxd"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\n\nexport type BaseTeamInfo = RecursiveReadonly<{\n\tname: string\n\tmaxPlayers: number\n\tcolour: string\n}>\n\n/** A world rectangle (rounded outwards to chunk boundaries), or a project schematic path. */\nexport type MapSource = RecursiveReadonly<{ rect: [Pos, Pos]; schematic?: never } | { schematic: string; rect?: never }>\n\nexport type BaseMapInfo<TeamInfo extends BaseTeamInfo> = RecursiveReadonly<{\n\t/** The name of the map */\n\tname: string\n\t/** The icon of the map - used in the Map Voting Shop UI */\n\ticon: string\n\tsource: MapSource\n}> & {\n\t// Kept out of the RecursiveReadonly above and made readonly explicitly: TypeScript can\'t index a\n\t// Record keyed by a still-generic type (TeamInfo["name"]) once RecursiveReadonly\'s recursive\n\t// conditional type has wrapped it.\n\treadonly teams: Record<\n\t\tTeamInfo["name"],\n\t\tRecursiveReadonly<{\n\t\t\tspawn: Pos // offset from the lowest corner of the map (after rounding outwards)\n\t\t\tspawnFacing: Pos\n\t\t}>\n\t>\n}\n\ntype Constructor<T> = new (...args: any[]) => T\n\nexport type TeamPadInfo = RecursiveReadonly<{\n\trect: [Pos, Pos]\n\temptyBlock: BlockName\n\tfullBlock: BlockName\n}>\n\nexport type SessionBasedGameSetupOptions<\n\tTeamInfo extends BaseTeamInfo,\n\tMapInfo extends BaseMapInfo<TeamInfo>,\n\tPlayer extends SessionBasedPlayer<TeamInfo, MapInfo>,\n> = {\n\tteams: readonly TeamInfo[]\n\tmaps: readonly MapInfo[]\n\t/** Lobby area information */\n\tlobby: RecursiveReadonly<{\n\t\tsource: MapSource\n\t\tspawn: Pos\n\t\tspawnFacing: Pos\n\t}> & {\n\t\t// Kept out of the RecursiveReadonly above: TeamPadInfo is already recursively readonly on its\n\t\t// own, and re-wrapping a Record keyed by a still-generic type (TeamInfo["name"]) breaks indexing.\n\t\t/** Block coordinates representing the start and the end of the team pads. Offset from the lowest corner of the map (after rounding outwards). If not provided, team choosing will be disabled. */\n\t\tteamPads?: Record<TeamInfo["name"], TeamPadInfo>\n\t}\n\t/** Block coordinates representing the start and the end of the play area. These will be rounded outwards to the nearest chunk boundary */\n\tplayAreaRect: readonly [Pos, Pos]\n\t/** Maximum number of spectators allowed in the game */\n\tmaxSpectators?: number\n\t/** The number of seconds to wait before resetting the game after the game finishes */\n\temptyLobbyStartInSecs?: number\n\t/** The number of seconds to wait before starting the game when the lobby is full */\n\tfullLobbyStartInSecs?: number\n\t/** The number of seconds to wait before resetting the game after the game finishes */\n\tgameResetInSecs?: number\n\t/** Enable Map Voting - If enabled, players will be able to vote for the next map to play. */\n\tmapVotingEnabled?: boolean\n\t/** Function to call when the game starts */\n\tonStart?: () => void\n\t/** Function to call when the game finishes */\n\tonFinish?: (winningTeam: TeamInfo) => void\n\t/** Function to get the RightInfoText for a player */\n\tgetRightInfoText?: (player: SessionBasedPlayer<TeamInfo, MapInfo>) => string | CustomTextStyling | null\n\t/** The constructor for the player class. This should be a class that extends SessionBasedPlayer */\n\tplayerConstructor?: Constructor<Player>\n}\n\nexport type MaybeRecursiveReadonly<T> = RecursiveReadonly<T> | T\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\nvar __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  SessionBasedGame: () => SessionBasedGame2,\n  SessionBasedPlayer: () => SessionBasedPlayer,\n  createGame: () => createGame\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:helpers.ts\nfunction style(msg, colour) {\n  return [{ str: msg, style: { colour } }];\n}\nfunction roundOutwardsToChunkBoundary(rect) {\n  const { low, high } = getLowHigh(rect);\n  return [\n    [Math.floor(low[0] / 32) * 32, Math.floor(low[1] / 32) * 32, Math.floor(low[2] / 32) * 32],\n    [Math.ceil(high[0] / 32) * 32, Math.ceil(high[1] / 32) * 32, Math.ceil(high[2] / 32) * 32]\n  ];\n}\nfunction getDimensions(rect) {\n  const [pos1, pos2] = rect;\n  return {\n    l: Math.abs(pos1[0] - pos2[0]),\n    w: Math.abs(pos1[1] - pos2[1]),\n    h: Math.abs(pos1[2] - pos2[2])\n  };\n}\nfunction getLowHigh(rect) {\n  const [pos1, pos2] = rect;\n  return {\n    low: [Math.min(pos1[0], pos2[0]), Math.min(pos1[1], pos2[1]), Math.min(pos1[2], pos2[2])],\n    high: [Math.max(pos1[0], pos2[0]), Math.max(pos1[1], pos2[1]), Math.max(pos1[2], pos2[2])]\n  };\n}\nfunction getSourceRect(source) {\n  if (source.schematic !== void 0) {\n    return roundOutwardsToChunkBoundary([[0, 0, 0], api.getSchematicDimensions(source.schematic)]);\n  }\n  return roundOutwardsToChunkBoundary(source.rect);\n}\nfunction preloadRect(rect) {\n  const { low: mapLow, high: mapHigh } = getLowHigh(rect);\n  for (let x = mapLow[0]; x < mapHigh[0]; x += 32) {\n    for (let y = mapLow[1]; y < mapHigh[1]; y += 32) {\n      for (let z = mapLow[2]; z < mapHigh[2]; z += 32) {\n        api.getBlock(x, y, z);\n      }\n    }\n  }\n}\nfunction numToTwoDigStr(n) {\n  return (n < 10 ? "0" : "") + n;\n}\nfunction displayMs(ms) {\n  const totalS = Math.ceil(ms / 1e3);\n  const hours = Math.floor(totalS / 3600);\n  const min = Math.floor(totalS % 3600 / 60);\n  const sec = Math.floor(totalS % 60);\n  if (hours > 0) {\n    return `${hours}:${numToTwoDigStr(min)}:${numToTwoDigStr(sec)}`;\n  }\n  return `${min}:${numToTwoDigStr(sec)}`;\n}\n\n// world-code-plugin:SessionBasedPlayer.ts\nvar SPECTATOR_OPACITY = 0.5;\nvar SessionBasedPlayer = class {\n  constructor(playerId, game2) {\n    __publicField(this, "playerId", playerId);\n    __publicField(this, "game", game2);\n    __publicField(this, "isSpectating", true);\n    __publicField(this, "team", null);\n    __publicField(this, "requestedTeam", null);\n    __publicField(this, "qTextId", null);\n    api.setPlayerGamemode(this.playerId, "survival");\n    this.startSpectating();\n    this.spawn();\n  }\n  spawn() {\n    const spawnPosition = this.onRespawnRequest();\n    if (spawnPosition) {\n      api.setPosition(this.playerId, spawnPosition);\n    }\n  }\n  /**\n   * Sets the player as playing the game, setting their health, shields, and other settings.\n   * Automatically called at the start of a game for players assigned to a team.\n   */\n  startPlaying() {\n    this.isSpectating = false;\n    const maxHealth = api.getClientOption(this.playerId, "maxHealth");\n    api.setHealth(this.playerId, maxHealth);\n    if (api.getHealth(this.playerId) !== null) {\n      api.setShieldAmount(this.playerId, api.getClientOption(this.playerId, "initialShield"));\n    }\n    api.setClientOptions(this.playerId, {\n      initialHealth: maxHealth,\n      creative: false,\n      canAltAction: true,\n      canChange: false,\n      useFullInventory: true,\n      cantBreakError: "",\n      cantBuildError: [{ str: { translationKey: "general:cantBuildHere" } }],\n      canPickUpItems: true,\n      autoRespawn: true,\n      secsToRespawn: 5,\n      respawnButtonText: "sessionBasedGame:spectate",\n      usePlayAgainButton: true\n    });\n    this.updateOtherEntitySettings(false);\n    api.setCanChangeBlockRect(this.playerId, ...this.game.gameOptions.playAreaRect);\n    if (this.team) {\n      api.setTargetedPlayerSettingForEveryone(this.playerId, "killfeedColour", this.team.colour, true);\n      api.setTargetedPlayerSettingForEveryone(this.playerId, "colorInLobbyLeaderboard", this.team.colour, true);\n    }\n    this.spawn();\n  }\n  /**\n   * Sets the player as spectating the game, resetting their health, shields, and other settings.\n   * Automatically called at the start of a game for players not assigned to a team.\n   * Call this function to turn a player into a spectator (for example, once they die).\n   */\n  startSpectating() {\n    this.isSpectating = true;\n    this.team = null;\n    const isBeforeGame = this.game.gamePhase === "beforeGame";\n    api.setClientOptions(this.playerId, {\n      creative: !isBeforeGame,\n      useFullInventory: false,\n      canAltAction: isBeforeGame,\n      canChange: false,\n      cantBreakError: [\n        { str: { translationKey: "sessionBasedGame:cantChangeBlocksWhileSpectating" }, style: { colour: this.game.messageColours.error } }\n      ],\n      cantBuildError: [\n        { str: { translationKey: "sessionBasedGame:cantChangeBlocksWhileSpectating" }, style: { colour: this.game.messageColours.error } }\n      ],\n      canPickUpItems: true,\n      autoRespawn: false,\n      secsToRespawn: 3,\n      respawnButtonText: isBeforeGame ? "general:respawn" : "sessionBasedGame:spectate",\n      usePlayAgainButton: true\n    });\n    api.setEveryoneSettingForPlayer(this.playerId, "canSee", true);\n    this.updateOtherEntitySettings(true);\n    api.resetCanChangeBlockRect(this.playerId, ...this.game.gameOptions.playAreaRect);\n    for (const effect of api.getEffects(this.playerId)) {\n      api.removeEffect(this.playerId, effect);\n    }\n    api.clearInventory(this.playerId);\n    this.game.checkWin();\n  }\n  updateOtherEntitySettings(isSpectating) {\n    const fadeSpectators = this.game.spectatorsAreFaded();\n    for (const player of this.game.getPlayers()) {\n      const canAttack = !isSpectating && !player.isSpectating && (this.playerId === player.playerId || this.team !== player.team);\n      api.setOtherEntitySetting(this.playerId, player.playerId, "canAttack", canAttack);\n      api.setOtherEntitySetting(player.playerId, this.playerId, "canAttack", canAttack);\n      api.setOtherEntitySetting(this.playerId, player.playerId, "canSee", isSpectating || !player.isSpectating);\n      api.setOtherEntitySetting(player.playerId, this.playerId, "canSee", player.isSpectating || !isSpectating);\n      api.setOtherEntitySetting(player.playerId, this.playerId, "opacity", fadeSpectators && isSpectating ? SPECTATOR_OPACITY : 1);\n      if (player.playerId !== this.playerId && fadeSpectators && player.isSpectating) {\n        api.setOtherEntitySetting(this.playerId, player.playerId, "opacity", SPECTATOR_OPACITY);\n      }\n    }\n  }\n  onMessage() {\n    if (this.game.gamePhase === "beforeGame") {\n      return void 0;\n    }\n    const team = this.team;\n    if (!team) {\n      return [\n        style("[", this.game.messageColours.info),\n        style({ translationKey: "sessionBasedGame:spectator" }, this.game.messageColours.info),\n        style("]", this.game.messageColours.info)\n      ];\n    }\n    return [style("[", team.colour), style(team.name, team.colour), style("]", team.colour)];\n  }\n  onRespawnRequest() {\n    let spawnArea;\n    if (this.team && this.game.map?.teams[this.team.name]) {\n      spawnArea = this.game.map.teams[this.team.name];\n    } else if (this.game.gameOptions.lobby) {\n      spawnArea = this.game.gameOptions.lobby;\n    } else {\n      return void 0;\n    }\n    const { spawn, spawnFacing } = spawnArea;\n    const { low: playAreaLow } = getLowHigh(this.game.gameOptions.playAreaRect);\n    const playAreaSpawn = [playAreaLow[0] + spawn[0] + 0.5, playAreaLow[1] + spawn[1] + 0.5, playAreaLow[2] + spawn[2] + 0.5];\n    api.setVelocity(this.playerId, 0, 0, 0);\n    api.setCameraDirection(this.playerId, spawnFacing);\n    return playAreaSpawn;\n  }\n  /**\n   * Gets the position of the player relative to the play area.\n   * @returns The position of the player relative to the play area.\n   */\n  getPositionInPlayArea() {\n    const { low: playAreaLow } = getLowHigh(this.game.gameOptions.playAreaRect);\n    const position = api.getPosition(this.playerId);\n    return [position[0] - playAreaLow[0], position[1] - playAreaLow[1], position[2] - playAreaLow[2]];\n  }\n};\n\n// world-code-plugin:MapVoter.ts\nvar import_helpers2 = require("@plugins/helpers");\nvar MAP_VOTING_CATEGORY = "__SBG_MAP_VOTING__";\nvar MAP_VOTING_ITEM_PREFIX = "__SBG_MAP_";\nvar MAP_OPTION_COUNT = 4;\nvar MapVoter = class {\n  constructor(maps, players) {\n    __publicField(this, "maps", maps);\n    __publicField(this, "players", players);\n    __publicField(this, "possibleMapOptions", []);\n    __publicField(this, "mapVotes", {});\n    __publicField(this, "mapVotingActive", false);\n  }\n  createMapVoting() {\n    if (this.mapVotingActive) {\n      return;\n    }\n    this.mapVotingActive = true;\n    api.configureShopCategory(MAP_VOTING_CATEGORY, {\n      customTitle: "Map Voting",\n      sortPriority: 0.5\n    });\n    for (const map of this.possibleMapOptions) {\n      api.deleteShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`);\n    }\n    const possibleOptions = this.maps.slice();\n    (0, import_helpers2.shuffleArray)(possibleOptions);\n    this.possibleMapOptions = possibleOptions.slice(0, MAP_OPTION_COUNT);\n    for (const map of this.possibleMapOptions) {\n      api.createShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`, {\n        image: map.icon,\n        customTitle: map.name,\n        canBuy: true,\n        buyButtonText: "Votes: 0"\n      });\n    }\n    (0, import_helpers2.setTimeout)(() => {\n      for (const playerId in this.players) {\n        api.openShop(playerId, false, MAP_VOTING_CATEGORY);\n      }\n    }, 100);\n  }\n  onMapVote(playerId, categoryKey, shopItemKey) {\n    if (categoryKey !== MAP_VOTING_CATEGORY) {\n      return;\n    }\n    if (!this.mapVotingActive) {\n      return;\n    }\n    if (!shopItemKey.startsWith(MAP_VOTING_ITEM_PREFIX)) {\n      return;\n    }\n    const mapName = shopItemKey.replace(MAP_VOTING_ITEM_PREFIX, "");\n    if (!this.possibleMapOptions.some((map) => {\n      return map.name === mapName;\n    })) {\n      return;\n    }\n    const hadVotedBefore = !!this.mapVotes[playerId];\n    this.mapVotes[playerId] = mapName;\n    this.updateMapVotingForPlayer(playerId);\n    this.updateMapCountsForEveryone();\n    if (!hadVotedBefore) {\n      api.openShop(playerId, true);\n    }\n  }\n  onPlayerJoin(playerId) {\n    if (!this.mapVotingActive) {\n      return;\n    }\n    this.updateMapVotingForPlayer(playerId);\n    (0, import_helpers2.setTimeout)(\n      () => {\n        api.openShop(playerId, false, MAP_VOTING_CATEGORY);\n      },\n      100,\n      playerId\n    );\n  }\n  onPlayerLeave(playerId) {\n    if (!this.mapVotingActive) {\n      return;\n    }\n    delete this.mapVotes[playerId];\n    this.updateMapCountsForEveryone();\n  }\n  updateMapCountsForEveryone() {\n    for (const map of this.possibleMapOptions) {\n      const votes = Object.values(this.mapVotes).filter((v) => {\n        return v === map.name;\n      }).length;\n      api.updateShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`, {\n        buyButtonText: `Votes: ${votes}`\n      });\n    }\n  }\n  updateMapVotingForPlayer(playerId) {\n    api.configureShopCategoryForPlayer(playerId, MAP_VOTING_CATEGORY, {\n      redDot: !this.mapVotes[playerId]\n    });\n    for (const map of this.possibleMapOptions) {\n      api.updateShopItemForPlayer(playerId, MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`, {\n        canBuy: this.mapVotes[playerId] !== map.name,\n        isSelected: this.mapVotes[playerId] === map.name\n      });\n    }\n  }\n  endMapVoting() {\n    if (!this.mapVotingActive) {\n      return;\n    }\n    this.mapVotingActive = false;\n    for (const map of this.possibleMapOptions) {\n      api.deleteShopItem(MAP_VOTING_CATEGORY, `${MAP_VOTING_ITEM_PREFIX}${map.name}`);\n    }\n    this.possibleMapOptions = [];\n    this.mapVotes = {};\n  }\n  chooseMap() {\n    if (!this.mapVotingActive) {\n      return null;\n    }\n    const votedPlayers = Object.keys(this.mapVotes);\n    if (votedPlayers.length === 0) {\n      return (0, import_helpers2.getRandomItem)(this.possibleMapOptions);\n    }\n    const randomPlayer = (0, import_helpers2.getRandomItem)(votedPlayers);\n    const choice = this.mapVotes[randomPlayer];\n    return this.maps.find((map) => {\n      return map.name === choice;\n    });\n  }\n};\n\n// world-code-plugin:SessionBasedGame.ts\nvar import_helpers4 = require("@plugins/helpers");\nvar SessionBasedGame2 = class {\n  constructor(gameOptions) {\n    __publicField(this, "gameOptions", gameOptions);\n    __publicField(this, "gamePhase", "beforeGame");\n    __publicField(this, "startingRound", false);\n    __publicField(this, "players", {});\n    __publicField(this, "map", null);\n    __publicField(this, "gameStartTime", 0);\n    __publicField(this, "startGameAt", Infinity);\n    __publicField(this, "endGameAt", Infinity);\n    __publicField(this, "mapVoter");\n    __publicField(this, "messageColours", {\n      error: "#ff0000",\n      success: "#00ff00",\n      info: "#ffffff"\n    });\n    this.mapVoter = new MapVoter(this.gameOptions.maps, this.players);\n    this.resetGame(false);\n    (0, import_helpers4.setInterval)(() => {\n      this.sendRightInfoText();\n    }, 1e3);\n  }\n  get playersForFullLobby() {\n    return this.gameOptions.teams.reduce((a, b) => {\n      return a + b.maxPlayers;\n    }, 0);\n  }\n  get playerCount() {\n    return Object.keys(this.players).length;\n  }\n  /**\n   * Gets the player object for a given player ID.\n   * @param playerId The player ID to get the player for\n   */\n  getPlayer(playerId) {\n    return this.players[playerId];\n  }\n  /**\n   * Gets all the players in the game, including spectators.\n   * @returns An iterator of all the players in the game.\n   */\n  *getPlayers() {\n    for (const playerId in this.players) {\n      yield this.players[playerId];\n    }\n  }\n  getStartingInText() {\n    if (this.gamePhase !== "beforeGame") {\n      return [];\n    }\n    const timeLeft = this.startGameAt - api.now();\n    if (timeLeft < 0) {\n      return [];\n    }\n    return [\n      ...style({ translationKey: "sessionBasedGame:startingIn" }, this.messageColours.info),\n      " ",\n      ...style(`${displayMs(timeLeft)}`, timeLeft < 1e4 ? this.messageColours.success : this.messageColours.info)\n    ];\n  }\n  /**\n   * Gives all players coloured armour based on their team name. Spectators will get black armour.\n   * If their team name is not a valid colour, they will be skipped.\n   */\n  giveColouredArmourToEveryone() {\n    for (const playerId in this.players) {\n      const player = this.players[playerId];\n      const prefix = player.team ? player.team.name : "Black";\n      try {\n        api.setItemSlot(playerId, 46, `${prefix} Wood Helmet`);\n        api.setItemSlot(playerId, 47, `${prefix} Wood Chestplate`);\n        api.setItemSlot(playerId, 48, `${prefix} Wood Gauntlets`);\n        api.setItemSlot(playerId, 49, `${prefix} Wood Leggings`);\n        api.setItemSlot(playerId, 50, `${prefix} Wood Boots`);\n      } catch (e) {\n        api.log(`Error giving coloured armour to player ${playerId}: ${e}`);\n      }\n    }\n  }\n  onPlayerJoin(playerId) {\n    this.players[playerId] = new this.gameOptions.playerConstructor(playerId, this);\n    this.mapVoter.onPlayerJoin(playerId);\n    this.updateTimeTillStart();\n  }\n  onPlayerLeave(playerId) {\n    if (!this.players[playerId]) {\n      return;\n    }\n    if (this.gamePhase === "beforeGame") {\n      const requestedTeam = this.players[playerId].requestedTeam;\n      if (requestedTeam) {\n        this.placeTeamPad(requestedTeam.name, false);\n      }\n    }\n    delete this.players[playerId];\n    this.checkWin();\n    this.mapVoter.onPlayerLeave(playerId);\n  }\n  onPlayerDie(playerId) {\n    this.checkWin();\n  }\n  checkWin() {\n    if (this.gamePhase !== "inGame") {\n      return;\n    }\n    const teamsAlive = this.getTeamsAlive();\n    if (teamsAlive.length === 1) {\n      this.makeTeamWin(teamsAlive[0]);\n    }\n  }\n  onPlayerChat(playerId, message) {\n    return this.players[playerId].onMessage();\n  }\n  onPlayerBoughtShopItem(playerId, categoryKey, itemKey) {\n    this.mapVoter.onMapVote(playerId, categoryKey, itemKey);\n  }\n  tick() {\n    this.checkGameTransition();\n  }\n  getTeamsAlive() {\n    const teamsAlive = [];\n    for (const playerId in this.players) {\n      const player = this.players[playerId];\n      if (player.team && !teamsAlive.includes(player.team)) {\n        teamsAlive.push(player.team);\n      }\n    }\n    return teamsAlive;\n  }\n  updateTimeTillStart() {\n    if (this.gamePhase === "beforeGame" && this.playerCount >= this.playersForFullLobby) {\n      this.setStartGame(this.gameOptions.fullLobbyStartInSecs);\n    }\n  }\n  setStartGame(startInSecs) {\n    const newStartAt = api.now() + startInSecs * 1e3;\n    this.startGameAt = Math.min(this.startGameAt, newStartAt);\n    api.broadcastMessage(style(`Starting in ${startInSecs}s...`, this.messageColours.info));\n  }\n  checkGameTransition() {\n    if (this.gamePhase === "beforeGame") {\n      const timeLeft = this.startGameAt - api.now();\n      if (timeLeft < 0) {\n        if (this.playerCount < 2) {\n          api.broadcastMessage(style("Not enough players to start game", this.messageColours.error));\n          this.startGameAt = Infinity;\n          this.setStartGame(this.gameOptions.emptyLobbyStartInSecs);\n        } else {\n          this.startGame();\n        }\n        return;\n      } else if (timeLeft < 5e3) {\n        const secsLeft = Math.ceil(timeLeft / 1e3);\n        for (const playerId in this.players) {\n          api.setClientOption(playerId, "middleTextUpper", style(`Game starts in ${secsLeft} seconds`, this.messageColours.info));\n        }\n      } else {\n        for (const playerId in this.players) {\n          api.setClientOption(playerId, "middleTextUpper", []);\n        }\n      }\n    }\n    if (this.gamePhase === "gameFinished") {\n      const timeLeft = this.endGameAt - api.now();\n      if (timeLeft < 0) {\n        this.resetGame(true);\n      } else if (timeLeft < 5e3) {\n        const secsLeft = Math.ceil(timeLeft / 1e3);\n        for (const playerId in this.players) {\n          api.setClientOption(playerId, "middleTextUpper", style(`Game ends in ${secsLeft} seconds`, this.messageColours.info));\n        }\n      }\n    }\n  }\n  sendRightInfoText() {\n    for (const playerId in this.players) {\n      const rightInfoText = this.gameOptions.getRightInfoText(this.players[playerId]);\n      if (rightInfoText) {\n        api.setClientOption(playerId, "RightInfoText", rightInfoText);\n      }\n    }\n  }\n  loadMap(source) {\n    const rect = getSourceRect(source);\n    const mapDimensions = getDimensions(rect);\n    const { low: mapLow } = getLowHigh(rect);\n    const { low: playAreaLow, high: playAreaHigh } = getLowHigh(this.gameOptions.playAreaRect);\n    for (let x = 0; x < mapDimensions.l; x += 32) {\n      for (let y = 0; y < mapDimensions.w; y += 32) {\n        for (let z = 0; z < mapDimensions.h; z += 32) {\n          const mapChunkPos = [mapLow[0] + x, mapLow[1] + y, mapLow[2] + z];\n          const playAreaChunkPos = [playAreaLow[0] + x, playAreaLow[1] + y, playAreaLow[2] + z];\n          if (source.schematic !== void 0) {\n            api.setChunkAsSchematic(source.schematic, mapChunkPos, playAreaChunkPos);\n          } else {\n            (0, import_helpers4.forceLoadChunk)(mapChunkPos[0], mapChunkPos[1], mapChunkPos[2], () => {\n              api.copyChunk(mapChunkPos, playAreaChunkPos);\n            });\n          }\n        }\n      }\n    }\n    const mapEnd = [playAreaLow[0] + mapDimensions.l, playAreaLow[1] + mapDimensions.w, playAreaLow[2] + mapDimensions.h];\n    fillOutsideWithAir(playAreaLow, playAreaHigh, mapEnd);\n  }\n  startGame() {\n    api.setMaxPlayers(1, this.playersForFullLobby + this.gameOptions.maxSpectators);\n    this.assignTeams();\n    this.map = null;\n    if (this.gameOptions.mapVotingEnabled) {\n      this.map = this.mapVoter.chooseMap();\n      this.mapVoter.endMapVoting();\n    }\n    if (!this.map) {\n      this.map = (0, import_helpers4.getRandomItem)(this.gameOptions.maps);\n    }\n    this.startingRound = true;\n    try {\n      for (const playerId in this.players) {\n        api.setClientOption(playerId, "middleTextUpper", []);\n        if (this.players[playerId].team) {\n          this.players[playerId].startPlaying();\n        } else {\n          this.players[playerId].startSpectating();\n        }\n      }\n      this.loadMap(this.map.source);\n      this.gameStartTime = api.now();\n      this.gamePhase = "inGame";\n    } finally {\n      this.startingRound = false;\n    }\n    this.gameOptions.onStart();\n  }\n  /**\n   * Whether spectators should render faded. gamePhase can\'t be read directly: it only flips to\n   * "inGame" once startGame() has started every player, and the sit-out spectators it makes\n   * along the way need fading too.\n   */\n  spectatorsAreFaded() {\n    return this.startingRound || this.gamePhase === "inGame";\n  }\n  assignTeams() {\n    const teamCounts = Object.fromEntries(\n      this.gameOptions.teams.map((team) => {\n        return [team.name, 0];\n      })\n    );\n    const requestedPlayers = [];\n    const unrequestedPlayers = [];\n    for (const playerId in this.players) {\n      const player = this.players[playerId];\n      if (player.requestedTeam) {\n        requestedPlayers.push(playerId);\n      } else {\n        unrequestedPlayers.push(playerId);\n      }\n    }\n    (0, import_helpers4.shuffleArray)(unrequestedPlayers);\n    const playerIds = [...requestedPlayers, ...unrequestedPlayers];\n    for (const playerId of playerIds) {\n      const player = this.players[playerId];\n      if (player.requestedTeam) {\n        player.team = player.requestedTeam;\n        teamCounts[player.requestedTeam.name]++;\n        continue;\n      }\n      let smallestTeamPlayers = Infinity;\n      let smallestTeam = null;\n      for (const team of this.gameOptions.teams) {\n        const numOnTeam = teamCounts[team.name];\n        if (numOnTeam < smallestTeamPlayers && numOnTeam < team.maxPlayers) {\n          smallestTeamPlayers = numOnTeam;\n          smallestTeam = team;\n        }\n      }\n      if (smallestTeam === null) {\n        continue;\n      }\n      this.players[playerId].team = smallestTeam;\n      teamCounts[smallestTeam.name]++;\n    }\n  }\n  /**\n   * Manually sets a team to win the game. Will begin the game reset timer to restart the game.#\n   * Automatically called when there is only one team left.\n   * @param winningTeam - The team object that won the game.\n   */\n  makeTeamWin(winningTeam) {\n    if (this.gamePhase !== "inGame") {\n      return;\n    }\n    this.gamePhase = "gameFinished";\n    this.gameOptions.onFinish(winningTeam);\n    this.endGameAt = api.now() + this.gameOptions.gameResetInSecs * 1e3;\n  }\n  resetGame(restart) {\n    this.gamePhase = "beforeGame";\n    this.startGameAt = Infinity;\n    this.endGameAt = Infinity;\n    for (const playerId in this.players) {\n      const player = this.players[playerId];\n      player.startSpectating();\n      player.requestedTeam = null;\n      if (restart) {\n        api.killLifeform(playerId);\n      }\n    }\n    api.setMaxPlayers(this.playersForFullLobby, this.playersForFullLobby + this.gameOptions.maxSpectators);\n    this.loadMap(this.gameOptions.lobby.source);\n    if (this.gameOptions.lobby.teamPads) {\n      this.placeTeamPads();\n    }\n    this.setStartGame(this.gameOptions.emptyLobbyStartInSecs);\n    if (this.gameOptions.mapVotingEnabled) {\n      this.mapVoter.createMapVoting();\n    }\n  }\n  onBlockStandStart(playerId, x, y, z, blockName) {\n    if (!this.gameOptions.lobby.teamPads) {\n      return;\n    }\n    if (this.gamePhase !== "beforeGame") {\n      return;\n    }\n    const player = this.players[playerId];\n    let team = null;\n    const { low: playAreaLow, high: playAreaHigh } = getLowHigh(this.gameOptions.playAreaRect);\n    for (const teamPadName in this.gameOptions.lobby.teamPads) {\n      const teamPadInfo = this.gameOptions.lobby.teamPads[teamPadName];\n      const { low: rectLow, high: rectHigh } = getLowHigh(teamPadInfo.rect);\n      rectLow[0] += playAreaLow[0];\n      rectLow[1] += playAreaLow[1];\n      rectLow[2] += playAreaLow[2];\n      rectHigh[0] += playAreaLow[0];\n      rectHigh[1] += playAreaLow[1];\n      rectHigh[2] += playAreaLow[2];\n      if (api.isInsideRect([x, y, z], rectLow, rectHigh)) {\n        team = this.gameOptions.teams.find((team2) => {\n          return team2.name === teamPadName;\n        });\n        break;\n      }\n    }\n    if (!team) {\n      return;\n    }\n    const oldTeam = player.requestedTeam;\n    if (oldTeam === team) {\n      return;\n    }\n    let requestCount = 0;\n    for (const playerId2 in this.players) {\n      const player2 = this.players[playerId2];\n      if (player2.requestedTeam === team) {\n        requestCount++;\n      }\n    }\n    if (player.qTextId) {\n      api.removeFromQueue(player.qTextId);\n    }\n    if (requestCount >= team.maxPlayers) {\n      if (player.requestedTeam !== team) {\n        player.qTextId = api.queueMiddleTextLower(playerId, style(`${team.name} team is full`, this.messageColours.error), 1e3);\n      }\n      this.placeTeamPad(team.name, true);\n      return;\n    }\n    player.requestedTeam = team;\n    player.qTextId = api.queueMiddleTextLower(playerId, style(`${team.name} team selected`, this.messageColours.success), 1e3);\n    if (oldTeam !== team) {\n      if (oldTeam) {\n        this.placeTeamPad(oldTeam.name, false);\n      }\n      const isFull = requestCount + 1 >= team.maxPlayers;\n      this.placeTeamPad(team.name, isFull);\n    }\n  }\n  placeTeamPad(teamName, full) {\n    const { low: playAreaLow } = getLowHigh(this.gameOptions.playAreaRect);\n    const { rect, emptyBlock, fullBlock } = this.gameOptions.lobby.teamPads[teamName];\n    const { low: rectLow, high: rectHigh } = getLowHigh(rect);\n    for (let x = rectLow[0] + playAreaLow[0]; x <= rectHigh[0] + playAreaLow[0]; x += 32) {\n      for (let y = rectLow[1] + playAreaLow[1]; y <= rectHigh[1] + playAreaLow[1]; y += 32) {\n        for (let z = rectLow[2] + playAreaLow[2]; z <= rectHigh[2] + playAreaLow[2]; z += 32) {\n          (0, import_helpers4.forceLoadChunk)(x, y, z, () => {\n            const endX = Math.min(x + 31, rectHigh[0] + playAreaLow[0]);\n            const endY = Math.min(y + 31, rectHigh[1] + playAreaLow[1]);\n            const endZ = Math.min(z + 31, rectHigh[2] + playAreaLow[2]);\n            fillBox([x, y, z], [endX, endY, endZ], full ? fullBlock : emptyBlock);\n          });\n        }\n      }\n    }\n  }\n  placeTeamPads() {\n    for (const teamName in this.gameOptions.lobby.teamPads) {\n      this.placeTeamPad(teamName, false);\n    }\n  }\n};\nfunction fillOutsideWithAir(low, high, copiedHigh) {\n  for (let axis = 0; axis < 3; axis++) {\n    const slabLow = [low[0], low[1], low[2]];\n    const slabHigh = [high[0], high[1], high[2]];\n    slabLow[axis] = copiedHigh[axis] + 1;\n    for (let earlier = 0; earlier < axis; earlier++) {\n      slabHigh[earlier] = Math.min(copiedHigh[earlier], high[earlier]);\n    }\n    if (slabLow[0] <= slabHigh[0] && slabLow[1] <= slabHigh[1] && slabLow[2] <= slabHigh[2]) {\n      fillBox(slabLow, slabHigh, "Air");\n    }\n  }\n}\nfunction fillBox(pos1, pos2, block) {\n  const maxRectVol = 360;\n  const {\n    low: [x1, y1, z1],\n    high: [x2, y2, z2]\n  } = getLowHigh([pos1, pos2]);\n  const zSizeFull = z2 - z1 + 1;\n  const zStep = Math.min(zSizeFull, maxRectVol);\n  for (let z = z1; z <= z2; z += zStep) {\n    const zEnd = Math.min(z2, z + zStep - 1);\n    const zSize = zEnd - z + 1;\n    const yStep = Math.max(1, Math.floor(maxRectVol / zSize));\n    for (let y = y1; y <= y2; y += yStep) {\n      const yEnd = Math.min(y2, y + yStep - 1);\n      const yz = (yEnd - y + 1) * zSize;\n      const xStep = Math.max(1, Math.floor(maxRectVol / yz));\n      for (let x = x1; x <= x2; x += xStep) {\n        const xEnd = Math.min(x2, x + xStep - 1);\n        api.setBlockRect([x, y, z], [xEnd, yEnd, zEnd], block);\n      }\n    }\n  }\n}\n\n// world-code-plugin:index.ts\nvar game = null;\nonPlayerJoin = (playerId) => {\n  game?.onPlayerJoin(playerId);\n};\nonPlayerLeave = (playerId) => {\n  game?.onPlayerLeave(playerId);\n};\ntick = () => {\n  game?.tick();\n};\nonPlayerChat = (playerId, message) => {\n  return game?.onPlayerChat(playerId, message);\n};\nonMobKilledPlayer = (mobId, playerId) => {\n  game?.onPlayerDie(playerId);\n};\nonPlayerKilledOtherPlayer = (killerId, victimId) => {\n  game?.onPlayerDie(victimId);\n};\nonRespawnRequest = (playerId) => {\n  return game?.getPlayer(playerId)?.onRespawnRequest();\n};\nonPlayerBoughtShopItem = (playerId, categoryKey, itemKey) => {\n  game?.onPlayerBoughtShopItem(playerId, categoryKey, itemKey);\n};\nonBlockStandStart = (playerId, x, y, z, blockName) => {\n  game?.onBlockStandStart(playerId, x, y, z, blockName);\n};\nfunction createGame(opts) {\n  if (game) {\n    throw new Error("Game already setup");\n  }\n  if (opts.maps.length === 0) {\n    throw new Error("No maps provided");\n  }\n  if (opts.teams.length < 2) {\n    throw new Error(`At least 2 teams are required (got ${opts.teams.length})`);\n  }\n  for (const team of opts.teams) {\n    if (team.maxPlayers < 1) {\n      throw new Error(`Team ${team.name} max players must be at least 1`);\n    }\n  }\n  opts.playAreaRect = roundOutwardsToChunkBoundary(opts.playAreaRect);\n  const playAreaDimensions = getDimensions(opts.playAreaRect);\n  preloadRect(opts.playAreaRect);\n  const newMaps = [];\n  for (const map of opts.maps) {\n    const newMap = {\n      ...map,\n      source: map.source.schematic !== void 0 ? map.source : { ...map.source, rect: roundOutwardsToChunkBoundary(map.source.rect) }\n    };\n    const mapDimensions = getDimensions(getSourceRect(newMap.source));\n    if (mapDimensions.l > playAreaDimensions.l || mapDimensions.w > playAreaDimensions.w || mapDimensions.h > playAreaDimensions.h) {\n      throw new Error(`Map ${map.name} is too large for play area`);\n    }\n    if (newMap.source.schematic === void 0) {\n      preloadRect(newMap.source.rect);\n    }\n    newMaps.push(newMap);\n  }\n  opts.maps = newMaps;\n  opts.lobby = {\n    ...opts.lobby,\n    source: opts.lobby.source.schematic !== void 0 ? opts.lobby.source : { ...opts.lobby.source, rect: roundOutwardsToChunkBoundary(opts.lobby.source.rect) }\n  };\n  const lobbyDimensions = getDimensions(getSourceRect(opts.lobby.source));\n  if (lobbyDimensions.l > playAreaDimensions.l || lobbyDimensions.w > playAreaDimensions.w || lobbyDimensions.h > playAreaDimensions.h) {\n    throw new Error(`Lobby is too large for play area`);\n  }\n  if (opts.lobby.source.schematic === void 0) {\n    preloadRect(opts.lobby.source.rect);\n  }\n  const newGame = new SessionBasedGame2({\n    ...defaultSessionBasedGameSetupOptions,\n    ...opts\n  });\n  game = newGame;\n  return newGame;\n}\nvar defaultSessionBasedGameSetupOptions = {\n  maxSpectators: 10,\n  emptyLobbyStartInSecs: 60,\n  fullLobbyStartInSecs: 10,\n  gameResetInSecs: 10,\n  mapVotingEnabled: false,\n  onStart: () => {\n    api.broadcastMessage(style("Game started", game?.messageColours.success));\n  },\n  onFinish: (winningTeam) => {\n    api.broadcastMessage(style(`${winningTeam.name} won the game`, winningTeam.colour));\n  },\n  getRightInfoText: (player) => {\n    return game?.getStartingInText();\n  },\n  playerConstructor: SessionBasedPlayer\n};\n',
        types: 'import * as _bloxd from \'@bloxd\';\nimport { PlayerId, CustomTextStyling, BlockName, ChatTags, Pos, RecursiveReadonly } from \'@bloxd\';\n\ndeclare class SessionBasedGame<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends SessionBasedPlayer<TeamInfo, MapInfo>> {\n    readonly gameOptions: Required<SessionBasedGameSetupOptions<TeamInfo, MapInfo, Player>>;\n    gamePhase: "beforeGame" | "inGame" | "gameFinished";\n    private startingRound;\n    private players;\n    map: MapInfo | null;\n    private gameStartTime;\n    private startGameAt;\n    private endGameAt;\n    private mapVoter;\n    messageColours: {\n        error: string;\n        success: string;\n        info: string;\n    };\n    private get playersForFullLobby();\n    private get playerCount();\n    constructor(gameOptions: Required<SessionBasedGameSetupOptions<TeamInfo, MapInfo, Player>>);\n    /**\n     * Gets the player object for a given player ID.\n     * @param playerId The player ID to get the player for\n     */\n    getPlayer(playerId: PlayerId): Player;\n    /**\n     * Gets all the players in the game, including spectators.\n     * @returns An iterator of all the players in the game.\n     */\n    getPlayers(): Generator<Player>;\n    getStartingInText(): string | CustomTextStyling;\n    /**\n     * Gives all players coloured armour based on their team name. Spectators will get black armour.\n     * If their team name is not a valid colour, they will be skipped.\n     */\n    giveColouredArmourToEveryone(): void;\n    onPlayerJoin(playerId: PlayerId): void;\n    onPlayerLeave(playerId: PlayerId): void;\n    onPlayerDie(playerId: PlayerId): void;\n    checkWin(): void;\n    onPlayerChat(playerId: PlayerId, message: string): _bloxd.ChatTags;\n    onPlayerBoughtShopItem(playerId: PlayerId, categoryKey: string, itemKey: string): void;\n    tick(): void;\n    private getTeamsAlive;\n    private updateTimeTillStart;\n    private setStartGame;\n    private checkGameTransition;\n    private sendRightInfoText;\n    private loadMap;\n    private startGame;\n    /**\n     * Whether spectators should render faded. gamePhase can\'t be read directly: it only flips to\n     * "inGame" once startGame() has started every player, and the sit-out spectators it makes\n     * along the way need fading too.\n     */\n    spectatorsAreFaded(): boolean;\n    private assignTeams;\n    /**\n     * Manually sets a team to win the game. Will begin the game reset timer to restart the game.#\n     * Automatically called when there is only one team left.\n     * @param winningTeam - The team object that won the game.\n     */\n    makeTeamWin(winningTeam: TeamInfo | null): void;\n    private resetGame;\n    onBlockStandStart(playerId: PlayerId, x: number, y: number, z: number, blockName: BlockName): void;\n    private placeTeamPad;\n    private placeTeamPads;\n}\n\ndeclare class SessionBasedPlayer<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>> {\n    readonly playerId: PlayerId;\n    readonly game: SessionBasedGame<TeamInfo, MapInfo, SessionBasedPlayer<TeamInfo, MapInfo>>;\n    isSpectating: boolean;\n    team: TeamInfo | null;\n    requestedTeam: TeamInfo | null;\n    qTextId: string | null;\n    constructor(playerId: PlayerId, game: SessionBasedGame<TeamInfo, MapInfo, SessionBasedPlayer<TeamInfo, MapInfo>>);\n    private spawn;\n    /**\n     * Sets the player as playing the game, setting their health, shields, and other settings.\n     * Automatically called at the start of a game for players assigned to a team.\n     */\n    startPlaying(): void;\n    /**\n     * Sets the player as spectating the game, resetting their health, shields, and other settings.\n     * Automatically called at the start of a game for players not assigned to a team.\n     * Call this function to turn a player into a spectator (for example, once they die).\n     */\n    startSpectating(): void;\n    private updateOtherEntitySettings;\n    onMessage(): ChatTags;\n    onRespawnRequest(): Pos | undefined;\n    /**\n     * Gets the position of the player relative to the play area.\n     * @returns The position of the player relative to the play area.\n     */\n    getPositionInPlayArea(): Pos;\n}\n\ntype BaseTeamInfo = RecursiveReadonly<{\n    name: string;\n    maxPlayers: number;\n    colour: string;\n}>;\n/** A world rectangle (rounded outwards to chunk boundaries), or a project schematic path. */\ntype MapSource = RecursiveReadonly<{\n    rect: [Pos, Pos];\n    schematic?: never;\n} | {\n    schematic: string;\n    rect?: never;\n}>;\ntype BaseMapInfo<TeamInfo extends BaseTeamInfo> = RecursiveReadonly<{\n    /** The name of the map */\n    name: string;\n    /** The icon of the map - used in the Map Voting Shop UI */\n    icon: string;\n    source: MapSource;\n}> & {\n    readonly teams: Record<TeamInfo["name"], RecursiveReadonly<{\n        spawn: Pos;\n        spawnFacing: Pos;\n    }>>;\n};\ntype Constructor<T> = new (...args: any[]) => T;\ntype TeamPadInfo = RecursiveReadonly<{\n    rect: [Pos, Pos];\n    emptyBlock: BlockName;\n    fullBlock: BlockName;\n}>;\ntype SessionBasedGameSetupOptions<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends SessionBasedPlayer<TeamInfo, MapInfo>> = {\n    teams: readonly TeamInfo[];\n    maps: readonly MapInfo[];\n    /** Lobby area information */\n    lobby: RecursiveReadonly<{\n        source: MapSource;\n        spawn: Pos;\n        spawnFacing: Pos;\n    }> & {\n        /** Block coordinates representing the start and the end of the team pads. Offset from the lowest corner of the map (after rounding outwards). If not provided, team choosing will be disabled. */\n        teamPads?: Record<TeamInfo["name"], TeamPadInfo>;\n    };\n    /** Block coordinates representing the start and the end of the play area. These will be rounded outwards to the nearest chunk boundary */\n    playAreaRect: readonly [Pos, Pos];\n    /** Maximum number of spectators allowed in the game */\n    maxSpectators?: number;\n    /** The number of seconds to wait before resetting the game after the game finishes */\n    emptyLobbyStartInSecs?: number;\n    /** The number of seconds to wait before starting the game when the lobby is full */\n    fullLobbyStartInSecs?: number;\n    /** The number of seconds to wait before resetting the game after the game finishes */\n    gameResetInSecs?: number;\n    /** Enable Map Voting - If enabled, players will be able to vote for the next map to play. */\n    mapVotingEnabled?: boolean;\n    /** Function to call when the game starts */\n    onStart?: () => void;\n    /** Function to call when the game finishes */\n    onFinish?: (winningTeam: TeamInfo) => void;\n    /** Function to get the RightInfoText for a player */\n    getRightInfoText?: (player: SessionBasedPlayer<TeamInfo, MapInfo>) => string | CustomTextStyling | null;\n    /** The constructor for the player class. This should be a class that extends SessionBasedPlayer */\n    playerConstructor?: Constructor<Player>;\n};\n\n/**\n * Create a new SessionBasedGame.\n * @param opts - The options for the game.\n * @param opts.teams - The teams for the game. This should include the team name, max players for this team, and hex colour.\n * @param opts.maps - The maps for the game. This should include the map name, source rectangle or schematic path, and the spawn positions for each team.\n * @param opts.lobby - The lobby area. This should include the source rectangle or schematic path, spawn info, and team pads for team choosing.\n * @param opts.playAreaRect - The play area rectangle. These will be rounded outwards to the nearest chunk boundary\n * @param opts.maxSpectators - The maximum number of spectators allowed in the game.\n * @param opts.emptyLobbyStartInSecs - The number of seconds to wait for the game to start when the lobby isn\'t full yet.\n * @param opts.fullLobbyStartInSecs - The number of seconds to wait for the game to start when the lobby is full.\n * @param opts.gameResetInSecs - The number of seconds to wait before resetting the game after the game finishes.\n * @param opts.mapVotingEnabled - Whether to enable map voting.\n * @param opts.onStart - The function to call when the game starts.\n * @param opts.onFinish - The function to call when the game finishes.\n * @param opts.getRightInfoText - The function to call to get the RightInfoText for the game.\n * @param opts.playerConstructor - The constructor for the player class. This should be a class that extends SessionBasedPlayer\n * @returns The game instance\n */\ndeclare function createGame<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends SessionBasedPlayer<TeamInfo, MapInfo>>(opts: SessionBasedGameSetupOptions<TeamInfo, MapInfo, Player>): SessionBasedGame<TeamInfo, MapInfo, Player>;\n\nexport { SessionBasedGame, SessionBasedPlayer, createGame };\nexport type { BaseMapInfo, BaseTeamInfo, MapSource, SessionBasedGameSetupOptions };\n'
      },
      TU = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: tU.files,
          dependencies: tU.dependencies,
          bundledSource: tU.bundledSource,
          types: tU.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: pU.files,
          dependencies: pU.dependencies,
          bundledSource: pU.bundledSource,
          types: pU.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: EU.files,
          dependencies: EU.dependencies,
          bundledSource: EU.bundledSource,
          types: EU.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: PU.files,
          dependencies: PU.dependencies,
          bundledSource: PU.bundledSource,
          types: PU.types
        }
      };

    function qU(UU) {
      const RU = [],
        gU = new Set,
        tU = UU => {
          if (gU.has(UU)) return;
          const pU = TU[UU];
          if (pU) {
            gU.add(UU);
            for (const UU of pU.dependencies) tU(UU);
            RU.push(UU)
          }
        };
      for (const pU of UU) tU(pU);
      return RU
    }
  },
  36406: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => qU,
      e: () => TU,
      h: () => PU,
      j: () => EU,
      n: () => KU,
      p: () => cU,
      q: () => CU,
      u: () => uU,
      x: () => jU
    });
    var tU = gU(1238);
    const pU = ["quickjs", "ses"];

    function EU(UU) {
      return pU.includes(UU)
    }

    function PU(UU) {
      return UU === tU.d || UU === tU.g
    }

    function TU(UU, RU) {
      return UU === tU.d && RU === tU.g || UU === tU.g && RU === tU.d
    }

    function qU(UU) {
      const RU = tU.g in UU,
        gU = tU.d in UU;
      return RU && gU ? null : RU ? tU.g : gU ? tU.d : null
    }

    function KU(UU, RU, gU) {
      const tU = `${RU}/`;
      return UU.filter((UU => UU.startsWith(tU))).map((UU => [UU, `${gU}/${UU.slice(tU.length)}`]))
    }

    function cU(UU, RU) {
      let gU = 0;
      for (const [tU, pU] of Object.entries(UU)) tU !== RU && (gU += pU.length);
      return gU
    }
    const GU = "@plugins/";

    function jU(UU) {
      return `${GU}${UU}`
    }

    function uU(UU, RU) {
      return `/node_modules/@plugins/${UU}/${RU}`
    }

    function CU(UU) {
      if (!UU.startsWith(GU)) return null;
      const RU = UU.slice(GU.length);
      return function(UU) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(UU)
      }(RU) ? RU : null
    }
  },
  36419: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      h: () => pU,
      l: () => PU,
      n: () => qU,
      r: () => EU
    });
    var tU = gU(36413);
    const pU = 5,
      EU = "[SCHEMATIC]",
      PU = 1024e4;

    function TU(UU) {
      return UU.endsWith(".bloxdschem") && (0, tU.l)(UU.slice(0, -11) + ".ts") && UU.length <= 64
    }

    function qU(UU) {
      return Object.fromEntries(Object.keys(UU).map((UU => [UU, EU])))
    }
  },
  36413: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      c: () => EU,
      d: () => jU,
      e: () => TU,
      h: () => qU,
      j: () => KU,
      l: () => GU,
      o: () => cU,
      q: () => PU
    });
    var tU = gU(1238);
    let pU = function(UU) {
        return UU[UU.Join = 0] = "Join", UU[UU.Leave = 1] = "Leave", UU[UU.Push = 2] = "Push", UU[UU.Cursor = 3] = "Cursor", UU[UU.Submit = 4] = "Submit", UU[UU.ReloadAsVariation = 5] = "ReloadAsVariation", UU[UU.CreateFile = 6] = "CreateFile", UU[UU.RenameFile = 7] = "RenameFile", UU[UU.DeleteFile = 8] = "DeleteFile", UU[UU.SetEngine = 9] = "SetEngine", UU[UU.RenameFolder = 10] = "RenameFolder", UU
      }({}),
      EU = function(UU) {
        return UU[UU.Joined = 0] = "Joined", UU[UU.Updates = 1] = "Updates", UU[UU.Presence = 2] = "Presence", UU[UU.RemoteCursor = 3] = "RemoteCursor", UU[UU.ForceClose = 4] = "ForceClose", UU[UU.LobbyFilesChanged = 5] = "LobbyFilesChanged", UU[UU.EngineSettings = 6] = "EngineSettings", UU
      }({});

    function PU(UU) {
      return "lobby" === UU.kind ? `lobby:${UU.path}` : `codeBlock:${UU.pos[0]},${UU.pos[1]},${UU.pos[2]}`
    }

    function TU(UU) {
      if ("lobby" === UU) return {
        kind: "lobby",
        path: tU.d
      };
      if (UU.startsWith("lobby:")) {
        const RU = UU.slice(6);
        return GU(RU) ? {
          kind: "lobby",
          path: RU
        } : null
      }
      const RU = UU.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return RU ? {
        kind: "codeBlock",
        pos: [parseInt(RU[1]), parseInt(RU[2]), parseInt(RU[3])]
      } : null
    }

    function qU(UU) {
      return UU.endsWith(".d.ts")
    }

    function KU(UU) {
      return UU.endsWith(".ts") && !qU(UU)
    }
    const cU = 64;

    function GU(UU) {
      if (!UU || UU !== UU.trim()) return !1;
      if (UU.length > cU) return !1;
      if (UU.startsWith("/") || UU.includes("\\") || UU.includes("\0")) return !1;
      if (!qU(UU) && !KU(UU) && ! function(UU) {
          return UU.endsWith(".js") && !UU.endsWith(".min.js") && !UU.endsWith(".bundle.js")
        }(UU)) return !1;
      const RU = UU.split("/");
      for (const gU of RU)
        if ("" === gU || "." === gU || ".." === gU) return !1;
      return !0
    }
    const jU = 14e3
  },
  4503: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU,
      f: () => tU,
      j: () => EU,
      k: () => qU,
      n: () => PU
    });
    const tU = ["sine", "triangle", "square", "sawtooth"],
      pU = 55,
      EU = {
        soft: {
          waveform: "sine",
          pitchHz: 300,
          glideSemitones: -.5,
          durationMs: 80,
          attackMs: 6,
          releaseMs: 18,
          lowpassHz: null,
          volume: .6,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 1.5,
            questionRiseSemitones: 3.5,
            exclaimLiftSemitones: 1.5
          },
          syllableMs: 60
        },
        regular: {
          waveform: "triangle",
          pitchHz: 195,
          glideSemitones: -.6,
          durationMs: 70,
          attackMs: 2,
          releaseMs: 12,
          lowpassHz: null,
          volume: 1,
          intonation: {
            variationSemitones: 1.5,
            declineSemitones: 2,
            questionRiseSemitones: 4,
            exclaimLiftSemitones: 2
          },
          syllableMs: 52
        },
        dark: {
          waveform: "sawtooth",
          pitchHz: 80,
          glideSemitones: -.6,
          durationMs: 85,
          attackMs: 6,
          releaseMs: 16,
          lowpassHz: 420,
          volume: 1.05,
          intonation: {
            variationSemitones: 1,
            declineSemitones: 3.5,
            questionRiseSemitones: 2.5,
            exclaimLiftSemitones: 1
          },
          syllableMs: 64
        },
        "high-pitched": {
          waveform: "triangle",
          pitchHz: 300,
          glideSemitones: -.8,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: null,
          volume: .8,
          intonation: {
            variationSemitones: 2.2,
            declineSemitones: 2,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3
          },
          syllableMs: 44
        },
        gruff: {
          waveform: "sawtooth",
          pitchHz: 105,
          glideSemitones: -.8,
          durationMs: 75,
          attackMs: 4,
          releaseMs: 14,
          lowpassHz: 900,
          volume: .85,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 3,
            questionRiseSemitones: 3,
            exclaimLiftSemitones: 2
          },
          syllableMs: 58
        },
        lively: {
          waveform: "square",
          pitchHz: 230,
          glideSemitones: .6,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: 2400,
          volume: .5,
          intonation: {
            variationSemitones: 2.6,
            declineSemitones: 1.5,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3.5
          },
          syllableMs: 44
        },
        posh: {
          waveform: "triangle",
          pitchHz: 175,
          glideSemitones: 1.2,
          durationMs: 90,
          attackMs: 6,
          releaseMs: 20,
          lowpassHz: 2e3,
          volume: 1,
          intonation: {
            variationSemitones: 2,
            declineSemitones: 4,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 2.5
          },
          syllableMs: 60
        },
        mechanical: {
          waveform: "square",
          pitchHz: 140,
          glideSemitones: 0,
          durationMs: 60,
          attackMs: 0,
          releaseMs: 4,
          lowpassHz: 1400,
          volume: .55,
          intonation: {
            variationSemitones: 0,
            declineSemitones: 0,
            questionRiseSemitones: 0,
            exclaimLiftSemitones: 0
          },
          syllableMs: 62
        }
      };

    function PU(UU) {
      return "string" !== typeof UU ? UU : Object.hasOwn(EU, UU) ? EU[UU] : null
    }

    function TU(UU, RU, gU) {
      return Math.min(gU, Math.max(RU, UU))
    }

    function qU(UU) {
      const RU = TU(UU.durationMs, 10, 500),
        gU = TU(UU.attackMs, 0, RU),
        {
          intonation: pU
        } = UU;
      return {
        waveform: tU.includes(UU.waveform) ? UU.waveform : "sine",
        pitchHz: TU(UU.pitchHz, 20, 4e3),
        glideSemitones: TU(UU.glideSemitones, -24, 24),
        durationMs: RU,
        attackMs: gU,
        releaseMs: TU(UU.releaseMs, 0, RU - gU),
        lowpassHz: null === UU.lowpassHz ? null : TU(UU.lowpassHz, 20, 2e4),
        volume: TU(UU.volume, 0, 2),
        intonation: {
          variationSemitones: TU(pU.variationSemitones, 0, 6),
          declineSemitones: TU(pU.declineSemitones, 0, 12),
          questionRiseSemitones: TU(pU.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: TU(pU.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: TU(UU.syllableMs, 25, 200)
      }
    }
  },
  9759: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18010: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  19866: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  19868: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  19874: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  19883: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  19888: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);