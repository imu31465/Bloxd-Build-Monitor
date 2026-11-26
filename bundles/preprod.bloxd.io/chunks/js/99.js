export const id = 99;
export const ids = [99];
export const modules = {
  37244: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => sU,
      e: () => vU
    });
    var cU = zU(61),
      yU = zU(2005),
      QU = zU(37250),
      AU = zU.n(QU),
      FU = zU(4982),
      oU = zU(1978),
      DU = zU(1492),
      EU = zU(97),
      YU = zU(114),
      NU = zU(344),
      IU = zU(1106),
      pU = zU.n(IU),
      aU = zU(27),
      tU = zU(1390),
      gU = zU(1680),
      kU = zU(1800),
      GU = zU(1732),
      BU = zU(2071),
      ZU = zU(1457),
      RU = zU(2139),
      PU = zU(1444),
      WU = zU(2988),
      dU = zU(37259),
      LU = zU(37281),
      eU = zU(1515),
      CU = zU(2621),
      wU = zU(1193),
      qU = zU(37293);
    var OU = zU(34809),
      SU = zU(1303);
    const rU = ["touchstart", "touchend", "touchcancel"];
    const uU = new class {
      constructor() {
        this.saved = null, this.touchesDown = 0, this.due = !1, this.settled = !1, this.countTouches = UU => {
          this.touchesDown = UU.touches.length, this.due && 0 === this.touchesDown && this.putBack()
        }
      }
      keyboardUp() {
        if (!this.saved) {
          this.saved = {
            x: window.scrollX,
            y: window.scrollY,
            viewportTop: window.visualViewport.offsetTop,
            viewportLeft: window.visualViewport.offsetLeft
          };
          for (const UU of rU) window.addEventListener(UU, this.countTouches, {
            capture: !0,
            passive: !0
          })
        }
        this.due = !1, this.settled = !1
      }
      keyboardDown() {
        this.putBack()
      }
      keyboardSettled() {
        this.saved && (this.settled = !0, this.putBack())
      }
      putBack() {
        if (!this.saved) return;
        if (this.touchesDown > 0) return void(this.due = !0);
        this.due = !1;
        const {
          x: UU,
          y: XU,
          viewportTop: zU,
          viewportLeft: cU
        } = this.saved, yU = window.visualViewport;
        if (window.scrollX === UU && window.scrollY === XU && yU.offsetTop === zU && yU.offsetLeft === cU || window.scrollTo(UU, XU), this.settled) {
          this.saved = null, this.settled = !1;
          for (const UU of rU) window.removeEventListener(UU, this.countTouches, {
            capture: !0
          })
        }
      }
    };
    OU.c.onRelease((() => {
      uU.keyboardSettled()
    }));
    var fU = zU(1305);
    const iU = zU(37301),
      HU = ["enter", "t", "/"];
    let MU = !1;

    function vU() {
      return MU || (0, kU.isTextEntry)(document.activeElement)
    }

    function VU() {
      var UU, XU;
      (0, RU.c)();
      const zU = null !== (UU = null === (XU = (0, ZU.e)()) || void 0 === XU ? void 0 : XU.getBoundButton("keyboardChannel")) && void 0 !== UU ? UU : null;
      return zU ? (0, fU.jsx)(BU.b, {
        className: "ChatInputChannelGlyph",
        glyph: zU
      }) : null
    }

    function sU() {
      const {
        t: UU
      } = (0, wU.I)(), {
        isTouchScreen: XU
      } = (0, aU.q)(["isTouchScreen"]), zU = (0, PU.F)(), [QU, IU] = (0, cU.useState)(!1), BU = (0, cU.useRef)(QU), ZU = (0, cU.useRef)(null), {
        messages: RU,
        reportedPlayers: rU,
        channel: vU
      } = (0, WU.l)(), sU = (0, cU.useRef)(0), mU = (0, cU.useRef)(""), lU = (0, cU.useRef)(null);
      var xU;
      xU = lU, (0, cU.useEffect)((() => {
        if (!(0, EU.isIOS)()) return;
        const UU = xU.current;
        let XU = null;
        const zU = zU => {
            const cU = zU.changedTouches[0];
            XU = "none" === getComputedStyle(UU).pointerEvents ? {
              id: cU.identifier,
              y: cU.clientY
            } : null
          },
          cU = zU => {
            const cU = XU,
              yU = cU && (0, qU.e)(zU.changedTouches, cU.id);
            yU && (zU.preventDefault(), UU.scrollBy({
              top: cU.y - yU.clientY,
              behavior: "instant"
            }), cU.y = yU.clientY)
          };
        return UU.addEventListener("touchstart", zU, {
          passive: !0
        }), UU.addEventListener("touchmove", cU, {
          passive: !1
        }), () => {
          UU.removeEventListener("touchstart", zU), UU.removeEventListener("touchmove", cU)
        }
      }), [xU]);
      const [JU, jU] = (0, cU.useState)(!1), [KU, bU] = (0, cU.useState)(!1), TU = (0, cU.useRef)(JU), hU = (0, cU.useRef)(null), UX = (0, cU.useRef)(!1), XX = (0, cU.useRef)(null), zX = (0, cU.useRef)(null), cX = (0, cU.useRef)(null), yX = (0, cU.useRef)(oX);
      yX.current = oX;
      const QX = (0, CU.k)();

      function AX() {
        BU.current = !1, IU(!1), zX.current.blur()
      }

      function FX(UU) {
        TU.current = UU, jU(UU)
      }

      function oX() {
        const UU = zX.current.value;
        zX.current.value = "", DX(UU)
      }

      function DX(UU) {
        (0, WU.k)(UU), sU.current = 0, FX(!1)
      }

      function EX(UU, XU) {
        0 === sU.current && (mU.current = zX.current.value);
        const zU = (0, WU.g)(sU.current + UU, XU);
        sU.current = zU.stepsBack, zX.current.value = 0 === zU.stepsBack ? mU.current : zU.text, setTimeout((() => {
          zX.current && zX.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function YX() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        lU.current && (!UU && TU.current || (lU.current.scrollTop = 1e5))
      }
      return (0, FU.c)(!0, QU, "ChatComponent"), (0, cU.useEffect)((() => (MU = QU, () => {
          MU = !1
        })), [QU]), (0, DU.f)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, gU.q)() && IU(!1)
        })), (0, cU.useEffect)((() => {
          zX.current.addEventListener("blur", (UU => {
            if (null === zX.current) return;
            Array.from(document.querySelectorAll(":hover")).some((UU => UU.classList.contains("ChatInputChannel") || UU.classList.contains("ChatMsgSelectWrapper"))) || ((0, EU.isMobile)() && BU.current && "" !== zX.current.value && yX.current(), IU(!1))
          }));
          const UU = UU => {
            ZU.current.contains(UU.target) || (0, GU.h)(UU.target) || IU(!1)
          };
          document.addEventListener("touchstart", UU, {
            capture: !0
          });
          const XU = UU => {
            (0, LU.o)(UU.target) && (BU.current = !1, IU(!1))
          };
          document.addEventListener("mousedown", XU, {
            capture: !0
          });
          const zU = () => {
              clearTimeout(hU.current), FX(!0)
            },
            cU = () => {
              clearTimeout(hU.current), hU.current = setTimeout((() => {
                FX(!1), YX()
              }), 4e3)
            },
            QU = () => {
              document.pointerLockElement ? (IU(!1), bU(!0), UX.current = !1, FX(!1), YX()) : bU(!1)
            };
          lU.current.addEventListener("pointermove", (UU => {
            "touch" === UU.pointerType || UX.current || document.pointerLockElement || (UX.current = !0, clearTimeout(hU.current))
          })), lU.current.addEventListener("pointerleave", (UU => {
            "touch" !== UU.pointerType && (UX.current = !1, TU.current && cU())
          })), lU.current.addEventListener("pointerdown", (UU => {
            "touch" === UU.pointerType || document.pointerLockElement || (UX.current = !0, zU())
          })), lU.current.addEventListener("wheel", (UU => {
            document.pointerLockElement || UU.deltaY >= 0 && Math.abs(lU.current.scrollTop) < 1 || (zU(), UX.current || (hU.current = setTimeout((() => {
              FX(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), lU.current.addEventListener("touchstart", zU), lU.current.addEventListener("touchend", cU), lU.current.addEventListener("touchcancel", cU), document.addEventListener("pointerlockchange", QU);
          const FU = UU => {
            if (QX.shown && (BU.current || ! function(UU) {
                if ((0, kU.isTypingInInput)()) return !0;
                const XU = document.activeElement;
                return (XU instanceof HTMLButtonElement || "button" === (null === XU || void 0 === XU ? void 0 : XU.getAttribute("role"))) && ["Enter", " "].includes(UU.key)
              }(UU)) && "codeEditor" !== aU.e.get("openInGameMenuName") && "lobbyCodeEditor" !== aU.e.get("openInGameMenuName") && !yU.gameBridge.latest("connectedGame").replay)
              if (BU.current || !(0, gU.q)()) {
                if (BU.current) {
                  if ("ArrowUp" === UU.code || "ArrowDown" === UU.code) return EX("ArrowUp" === UU.code ? 1 : -1, !1), void UU.stopPropagation();
                  if ("Tab" === UU.code) return WU.c.selectNextChannel(), UU.stopPropagation(), void UU.preventDefault();
                  if (UU.ctrlKey && nU.includes(iU[UU.keyCode])) return UU.preventDefault(), void UU.stopPropagation()
                }
                if ([...HU, "esc"].includes(AU()(UU)))
                  if ("esc" !== AU()(UU)) {
                    if (!BU.current || "/" !== AU()(UU)) {
                      if ("t" === AU()(UU)) {
                        if (BU.current) return void UU.stopPropagation();
                        UU.preventDefault()
                      }
                      BU.current && "" !== zX.current.value && yX.current(), UU.repeat || (BU.current || "/" === AU()(UU) && (zX.current.value = "/", UU.preventDefault()), IU(!BU.current))
                    }
                  } else BU.current && (IU(!1), UU.stopPropagation());
                else BU.current && UU.stopPropagation()
              } else HU.includes(AU()(UU)) && (UU.preventDefault(), UU.stopPropagation(), (0, gU.b)(UU))
          };
          document.addEventListener("keydown", FU, {
            capture: !0
          });
          const oU = lU.current;
          let DU = !1;
          const YU = new ResizeObserver((() => {
              DU && (DU = !1, YX())
            })),
            NU = () => {
              DU = !0, YU.unobserve(oU), YU.observe(oU)
            };
          XX.current = NU;
          const pU = new MutationObserver(NU);
          return pU.observe(oU, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", FU, {
              capture: !0
            }), document.removeEventListener("touchstart", UU, {
              capture: !0
            }), document.removeEventListener("mousedown", XU, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", QU), XX.current = null, pU.disconnect(), YU.disconnect(), clearTimeout(hU.current)
          }
        }), []), (0, GU.m)(zX, {
          open: () => {
            IU(!0)
          },
          close: () => {
            AX()
          },
          submit: () => {
            "" !== zX.current.value && oX(), AX()
          },
          stepHistory: () => {
            EX(1, !0)
          },
          sendLine: UU => {
            DX(UU), AX()
          },
          selectNextChannel: () => {
            WU.c.selectNextChannel()
          }
        }), (0, cU.useEffect)((() => {
          var UU;
          (BU.current = QU, zX.current) && (QU ? (sU.current = 0, zX.current.focus()) : (zX.current.blur(), null === (UU = XX.current) || void 0 === UU || UU.call(XX)))
        }), [QU]),
        function(UU, XU) {
          (0, cU.useLayoutEffect)((() => {
            if (!XU) return;
            OU.c.hold(), uU.keyboardUp();
            const zU = UU.current.closest(".InGameHeaderAndChat"),
              cU = (0, SU.c)((UU => {
                let {
                  top: XU,
                  height: cU
                } = UU;
                zU.style.setProperty("--keyboard-top", `${XU+cU}px`)
              }));
            return () => {
              cU(), zU.style.removeProperty("--keyboard-top"), OU.c.release(), uU.keyboardDown()
            }
          }), [UU, XU])
        }(ZU, QU && XU), (0, fU.jsx)(fU.Fragment, {
          children: (0, fU.jsxs)("div", {
            ref: ZU,
            className: pU()("Chat", {
              Chatting: QU
            }),
            "data-camera-keeper": QU ? "" : void 0,
            children: [(0, fU.jsx)("div", {
              ref: lU,
              className: pU()("ChatMessages", {
                HideScrollbar: !JU && !QU,
                NoScrolling: !(0, EU.isMobile)() && KU
              }),
              children: (0, fU.jsx)(dU.c, {
                messages: RU,
                reportedPlayers: rU
              })
            }), XU && !QU && (0, fU.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": UU("general:chat"),
              ...(0, eU.f)((() => {
                IU(!0), cX.current.style.display = "flex", (0, EU.isIOS)() && zX.current.focus()
              }), "pointerup"),
              children: (0, fU.jsx)(tU.d, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, fU.jsxs)("div", {
              ref: cX,
              className: "ChatInputWrapper",
              style: {
                display: "" + (QU ? "flex" : "none")
              },
              children: [vU && (0, fU.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: vU.elementBgColor
                },
                onClick: UU => {
                  WU.c.selectNextChannel(), zX.current.focus()
                },
                children: (0, fU.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, fU.jsx)(oU.d, {
                    text: vU.elementContent
                  })
                })
              }), vU && zU && (0, fU.jsx)(VU, {}), (0, fU.jsx)("input", {
                className: "ChatInput",
                maxLength: NU.jd,
                ref: zX,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": UU("general:chat"),
                placeholder: vU ? `${vU.channelName} Chat${"touchOnly"===(0,YU.c)()||zU?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const nU = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  37259: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => dU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(2997),
      FU = zU(31),
      oU = zU(2509),
      DU = zU(3972),
      EU = zU(2099),
      YU = zU(27),
      NU = zU(1978),
      IU = zU(37266),
      pU = zU(2236),
      aU = zU(3004),
      tU = zU(2868),
      gU = zU(2845),
      kU = zU(2843),
      GU = zU(3982),
      BU = zU(37275),
      ZU = zU(3217),
      RU = zU(2047),
      PU = zU(1305);

    function WU(UU) {
      for (let zU = UU.length - 1; zU >= 0; zU--) {
        const cU = "string" === typeof(XU = UU[zU]) ? XU : "str" in XU && "string" === typeof XU.str ? XU.str : "";
        if ("" !== cU.trim()) return cU
      }
      var XU;
      return ""
    }

    function dU(UU) {
      let {
        messages: XU,
        reportedPlayers: zU
      } = UU;
      return (0, PU.jsx)(PU.Fragment, {
        children: XU.map((UU => (0, PU.jsx)(LU, {
          message: UU,
          reportedPlayers: zU
        }, UU.clientChatMsgId)))
      })
    }
    const LU = (0, cU.memo)((function(UU) {
      var XU;
      let {
        message: zU,
        reportedPlayers: yU
      } = UU;
      const dU = (0, cU.useRef)(null),
        [LU] = (0, cU.useState)(ZU.i),
        {
          author: eU
        } = zU,
        CU = null === eU || void 0 === eU ? void 0 : eU.id,
        wU = null !== (XU = null === eU || void 0 === eU ? void 0 : eU.name) && void 0 !== XU ? XU : void 0,
        qU = (0, EU.b)(wU),
        OU = null !== eU && void 0 !== eU && eU.profileEffect ? pU.h[eU.profileEffect] : void 0,
        SU = null !== eU && !eU.local,
        {
          worldCodeLineId: rU
        } = zU,
        uU = (0, RU.e)("hiddenPlayerNames", (UU => (0, aU.g)(SU, wU, UU))),
        fU = null === zU.serverChatMsgId || null === eU ? null : {
          text: WU(zU.content),
          hiddenFromReplay: zU.hiddenFromReplay,
          serverChatMsgId: zU.serverChatMsgId,
          authorId: eU.id
        },
        iU = (0, DU.i)(SU && null !== wU && void 0 !== wU ? wU : null),
        HU = (0, kU.k)(dU);
      (0, cU.useEffect)((() => () => {
        kU.d.closeIfOwner(dU)
      }), []);
      const MU = null !== eU && null !== rU,
        vU = [];
      SU && null !== fU && !yU.includes(CU) && vU.push({
        icon: "flag",
        text: MU ? "general:reportPlayer" : "general:report",
        onClick: () => {
          FU.k.UY("OpenReportMenu", {
            playerEId: CU,
            playerName: wU,
            TE: fU,
            serverChatMsgId: fU.serverChatMsgId
          })
        }
      }), null !== rU && vU.push({
        icon: "flag",
        text: MU ? "general:reportGameMessage" : "general:report",
        onClick: () => {
          FU.k.UY("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            TE: {
              text: (0, AU.e)(zU.content),
              hiddenFromReplay: zU.hiddenFromReplay
            },
            serverChatMsgId: rU
          })
        }
      });
      const VU = SU && void 0 !== wU ? (0, GU.d)(iU, wU, fU) : [];
      return (0, PU.jsxs)("div", {
        ref: dU,
        className: QU()("MessageWrapper", {
          ChatMsgSelectWrapper: CU,
          Still: LU
        }),
        "data-replay-hidden": zU.hiddenFromReplay ? "" : void 0,
        onContextMenu: uU ? UU => {
          (0, tU.d)(dU, UU, {
            ...(0, aU.d)(CU, wU),
            showLocation: !1,
            status: null,
            extraActions: vU,
            moderationActions: (0, BU.d)(wU),
            friendRequestSource: "chat"
          }, YU.e.get("isTouchScreen"))
        } : void 0,
        onPointerDown: uU ? UU => {
          (0, gU.c)(UU, (() => (0, aU.d)(CU, wU).playerSocialPreview))
        } : void 0,
        children: [OU && (0, PU.jsx)(OU, {
          className: "ChatMessageBackground",
          simple: !0
        }), (SU || null !== rU) && !HU && (0, PU.jsx)(IU.d, {
          className: "ChatFloatingActions",
          triggerElementRef: dU,
          options: [...vU.map((UU => {
            let {
              icon: XU,
              text: zU,
              onClick: cU
            } = UU;
            return {
              icon: XU,
              text: zU,
              onPointerDown: cU
            }
          })), ...VU, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: UU => {
              (0, oU.j)(wU, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: uU && "blocked" !== iU
          }]
        }), (0, PU.jsx)(NU.d, {
          text: zU.content,
          friendBadgeFor: qU ? wU : void 0
        }, zU.clientChatMsgId)]
      }, zU.clientChatMsgId)
    }))
  },
  37621: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU,
      d: () => EU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1494),
      FU = zU(1305);
    const oU = 200,
      DU = 160;

    function EU() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function YU(UU) {
      let {
        side: XU,
        defaultSize: zU,
        covers: yU,
        onClose: EU,
        children: YU
      } = UU;
      const NU = (0, cU.useRef)(null),
        [IU, pU] = (0, cU.useState)(null),
        [aU, tU] = (0, cU.useState)(zU);
      aU !== zU && (tU(zU), pU(null));
      const gU = (0, cU.useRef)(null),
        kU = "top" === XU,
        GU = UU => kU ? UU.clientY : UU.clientX,
        BU = () => {
          gU.current = null
        };
      return (0, FU.jsxs)("div", {
        ref: NU,
        className: QU()("ResizableSidePanel", XU && `ResizableSidePanel-${XU}`, {
          Covers: "always" === yU,
          CoversWhenNarrow: "narrow" === yU,
          Dragged: null !== IU
        }),
        style: {
          [kU ? "height" : "width"]: null !== IU && void 0 !== IU ? IU : zU
        },
        children: [YU, XU && (0, FU.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": kU ? "horizontal" : "vertical",
          onPointerDown: UU => {
            if (0 !== UU.button) return;
            UU.preventDefault();
            const XU = NU.current,
              zU = Array.from(XU.parentElement.children).reduce(((UU, zU) => zU !== XU && "0" !== getComputedStyle(zU).flexGrow ? UU + (UU => kU ? UU.clientHeight : UU.clientWidth)(zU) : UU), 0),
              cU = kU ? XU.offsetHeight : XU.offsetWidth,
              yU = Math.min(oU, cU),
              QU = Math.max(yU, cU + Math.max(0, zU - DU));
            gU.current = {
              start: GU(UU),
              startSize: cU,
              minSize: yU,
              maxSize: QU
            }, UU.currentTarget.setPointerCapture(UU.pointerId)
          },
          onPointerMove: UU => {
            const zU = gU.current;
            if (!zU) return;
            const cU = "right" === XU ? zU.start - UU.clientX : GU(UU) - zU.start;
            pU(Math.min(zU.maxSize, Math.max(zU.minSize, zU.startSize + cU)))
          },
          onPointerUp: BU,
          onPointerCancel: BU,
          onLostPointerCapture: BU
        }), EU && (0, FU.jsx)(AU.k, {
          className: "ResizableSidePanelClose",
          onClick: EU
        })]
      })
    }
  },
  37643: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => ZU,
      F: () => WU,
      J: () => yU,
      M: () => PU,
      e: () => GU,
      g: () => tU,
      h: () => pU,
      l: () => IU,
      p: () => kU,
      t: () => dU,
      w: () => BU,
      z: () => RU
    });
    var cU = zU(61);
    const yU = 5e3,
      QU = 500,
      AU = 3e3;
    let FU = null,
      oU = null,
      DU = null;
    const EU = new Set;

    function YU(UU) {
      FU = UU;
      for (const XU of EU) XU()
    }

    function NU() {
      if (!FU || void 0 !== FU.endedAt) return;
      null !== oU && (clearTimeout(oU), oU = null), YU({
        ...FU,
        endedAt: Date.now()
      });
      const UU = DU;
      DU = null, null === UU || void 0 === UU || UU()
    }

    function IU(UU, XU) {
      let {
        submit: zU,
        reopen: cU
      } = XU;
      null !== oU && clearTimeout(oU), DU = cU, YU({
        ...UU,
        startedAt: Date.now(),
        errors: []
      }), oU = setTimeout(NU, AU), zU()
    }

    function pU() {
      FU && void 0 === FU.endedAt && void 0 === FU.ranAt && (null !== oU && clearTimeout(oU), YU({
        ...FU,
        ranAt: Date.now()
      }), oU = setTimeout(NU, yU))
    }
    const aU = 3;

    function tU(UU) {
      if (!FU || void 0 === FU.ranAt || void 0 !== FU.endedAt || FU.errors.includes(UU) || FU.errors.length >= aU) return;
      const XU = 0 === FU.errors.length;
      YU({
        ...FU,
        errors: [...FU.errors, UU]
      }), XU && (null !== oU && clearTimeout(oU), oU = setTimeout(NU, QU))
    }

    function gU(UU) {
      var XU;
      return (null === (XU = FU) || void 0 === XU ? void 0 : XU.chatKey) === UU ? FU : null
    }

    function kU(UU) {
      const XU = gU(UU);
      return XU && void 0 !== XU.endedAt ? (YU(null), XU) : null
    }

    function GU(UU) {
      var XU;
      (null === (XU = FU) || void 0 === XU ? void 0 : XU.chatKey) === UU && (null !== oU && (clearTimeout(oU), oU = null), DU = null, YU(null))
    }
    const BU = "These changes from your last answer didn't go in. Make them again.";

    function ZU(UU) {
      const XU = [...new Set(UU)].slice(0, aU);
      return `Fix this in your change: when it ran, the world showed ${1===XU.length?"this error":"these errors"}: ${XU.join(" ")}`
    }

    function RU(UU) {
      return `Your change didn't go in, because the code wouldn't run at all: ${UU.join(" ")} Send the whole change again with that fixed.`
    }

    function PU(UU) {
      return `Fix this in your change: ${UU.join(" ")}`
    }

    function WU(UU) {
      var XU;
      if (void 0 === UU.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const zU = Math.max(1, Math.round(((null !== (XU = UU.endedAt) && void 0 !== XU ? XU : UU.ranAt) - UU.ranAt) / 1e3)),
        cU = `Your change ran in your world for ${zU} ${1===zU?"second":"seconds"}`;
      return 0 === UU.errors.length ? {
        title: "Tested: no errors",
        text: `${cU} without an error.`
      } : {
        title: 1 === UU.errors.length ? "Tested: it showed an error" : `Tested: it showed ${UU.errors.length} errors`,
        text: `${cU} and showed: ${UU.errors.join(" ")}`
      }
    }

    function dU(UU) {
      const [XU, zU] = (0, cU.useState)((() => gU(UU)));
      return (0, cU.useEffect)((() => {
        const XU = () => {
          zU(gU(UU))
        };
        return XU(), EU.add(XU), () => {
          EU.delete(XU)
        }
      }), [UU]), XU
    }
  },
  37646: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU,
      c: () => cU
    });
    const cU = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function yU(UU, XU, zU) {
      return {
        key: UU,
        label: `Code block at ${XU.join(", ")}`,
        codeBlock: !0,
        pos: XU,
        canChangePos: zU
      }
    }
  },
  37637: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU,
      c: () => QU,
      e: () => AU,
      h: () => yU
    });
    const cU = "code block",
      yU = "World Code/";

    function QU(UU) {
      return UU.trim().toLowerCase().startsWith(yU.toLowerCase())
    }

    function AU(UU) {
      return UU.trim().slice(yU.length).replace(/^\.?\//, "")
    }
  },
  37598: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU,
      h: () => DU,
      k: () => FU,
      l: () => EU
    });
    var cU = zU(61),
      yU = zU(42),
      QU = zU(97);
    class AU {
      constructor(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = UU, this.defaultValue = XU, this.canChange = zU, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const UU = yU.k.getItem(this.storageKey);
            this.value = "boolean" === typeof UU ? UU : this.defaultValue
          }
          return this.value
        }, this.set = UU => {
          this.value = UU, yU.k.setItem(this.storageKey, UU);
          for (const XU of this.listeners) XU(UU)
        }
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
    }
    const FU = new AU("codeEditorLightMode", !1),
      oU = new AU("codeEditorAiHints", !0),
      DU = new AU("codeEditorAiKeySafetyCheck", !0, QU.featureFlags.isOwnTopLevelSite);

    function EU(UU) {
      const [XU, zU] = (0, cU.useState)(UU.get);
      return (0, cU.useEffect)((() => {
        const XU = UU.subscribe(zU);
        return zU(UU.get()), XU
      }), [UU]), [XU, UU.set]
    }
  },
  37570: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    const cU = "CodeEditorPopup"
  },
  37591: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => LU,
      C: () => NU,
      E: () => SU,
      H: () => WU,
      J: () => dU,
      N: () => OU,
      c: () => pU,
      e: () => oU,
      i: () => aU,
      k: () => eU,
      m: () => FU,
      o: () => EU,
      s: () => IU,
      t: () => tU,
      x: () => BU,
      z: () => CU
    });
    var cU = zU(2609),
      yU = zU(37588);
    const QU = "bloxd-world-code-directory-sync",
      AU = "handles",
      FU = "[INVALID SCHEMATIC PLACEHOLDER]";

    function oU(UU, XU) {
      return `${UU}::${XU}`
    }
    const DU = new Set(["node_modules", ".git"]);

    function EU() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function YU() {
      return new Promise(((UU, XU) => {
        const zU = indexedDB.open(QU, 1);
        zU.onupgradeneeded = () => {
          const UU = zU.result;
          UU.objectStoreNames.contains(AU) || UU.createObjectStore(AU)
        }, zU.onsuccess = () => {
          UU(zU.result)
        }, zU.onerror = () => {
          var UU;
          XU(null !== (UU = zU.error) && void 0 !== UU ? UU : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function NU(UU, XU) {
      const zU = await YU();
      try {
        await new Promise(((cU, yU) => {
          const QU = zU.transaction(AU, "readwrite");
          QU.objectStore(AU).put(XU, UU), QU.oncomplete = () => {
            cU()
          }, QU.onerror = () => {
            var UU;
            yU(null !== (UU = QU.error) && void 0 !== UU ? UU : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        zU.close()
      }
    }
    async function IU(UU) {
      const XU = await YU();
      try {
        return await new Promise(((zU, cU) => {
          const yU = XU.transaction(AU, "readonly").objectStore(AU).get(UU);
          yU.onsuccess = () => {
            var UU;
            zU(null !== (UU = yU.result) && void 0 !== UU ? UU : null)
          }, yU.onerror = () => {
            var UU;
            cU(null !== (UU = yU.error) && void 0 !== UU ? UU : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        XU.close()
      }
    }
    async function pU(UU) {
      const XU = await YU();
      try {
        await new Promise(((zU, cU) => {
          const yU = XU.transaction(AU, "readwrite");
          yU.objectStore(AU).delete(UU), yU.oncomplete = () => {
            zU()
          }, yU.onerror = () => {
            var UU;
            cU(null !== (UU = yU.error) && void 0 !== UU ? UU : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        XU.close()
      }
    }
    async function aU(UU) {
      const XU = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await UU.queryPermission(XU) || "granted" === await UU.requestPermission(XU)
    }
    async function tU(UU) {
      if (!EU()) return null;
      try {
        const XU = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await NU(UU, XU), XU
      } catch (XU) {
        if (function(UU) {
            return UU instanceof DOMException && "AbortError" === UU.name
          }(XU)) return null;
        throw XU
      }
    }

    function gU(UU) {
      return UU.startsWith(".") || DU.has(UU)
    }

    function kU(UU) {
      if (!UU) return !0;
      const XU = UU.split("/");
      for (const zU of XU)
        if ("" === zU || "." === zU || ".." === zU) return !1;
      return !0
    }
    async function GU(UU, XU, zU) {
      for await (const [QU, AU] of UU.entries()) {
        if ("directory" === AU.kind) {
          if (gU(QU)) continue;
          const UU = XU ? `${XU}/${QU}` : QU;
          if (!kU(UU)) continue;
          await GU(AU, UU, zU);
          continue
        }
        const UU = XU ? `${XU}/${QU}` : QU;
        if (!(0, cU.n)(UU) && !(0, yU.e)(UU)) continue;
        const FU = await AU.getFile();
        zU[UU] = (0, yU.e)(UU) ? await wU(FU) : await FU.text()
      }
    }
    async function BU(UU) {
      const XU = {};
      return await GU(UU, "", XU), XU
    }

    function ZU(UU) {
      return !(!UU || UU !== UU.trim() || UU.startsWith("/") || UU.includes("\\") || UU.includes("\0")) && kU(UU)
    }
    async function RU(UU, XU, zU) {
      const cU = XU.split("/"),
        yU = cU[cU.length - 1];
      let QU = UU;
      for (let AU = 0; AU < cU.length - 1; AU++) QU = await QU.getDirectoryHandle(cU[AU], {
        create: zU
      });
      return {
        dir: QU,
        fileName: yU
      }
    }
    async function PU(UU, XU, zU) {
      if (!ZU(XU)) throw new Error(`Refusing to write unsafe path: ${XU}`);
      const {
        dir: cU,
        fileName: yU
      } = await RU(UU, XU, !0), QU = await cU.getFileHandle(yU, {
        create: !0
      }), AU = await QU.createWritable();
      await AU.write(zU), await AU.close()
    }
    async function WU(UU, XU, zU) {
      const cU = await async function(UU, XU) {
        if (!ZU(XU)) return null;
        try {
          const {
            dir: zU,
            fileName: cU
          } = await RU(UU, XU, !1), yU = await zU.getFileHandle(cU), QU = await yU.getFile();
          return await QU.text()
        } catch (zU) {
          if (zU instanceof DOMException && ("NotFoundError" === zU.name || "NotAllowedError" === zU.name)) return null;
          throw zU
        }
      }(UU, XU);
      cU !== zU && await PU(UU, XU, zU)
    }
    async function dU(UU, XU, zU) {
      if (!(0, cU.n)(XU) && !(0, yU.e)(XU)) throw new Error(`Refusing to write non-allowlisted path: ${XU}`);
      if ((0, yU.e)(XU)) {
        if (await qU(UU, XU) === FU) throw new Error(`Move the binary schematic ${XU} outside the linked folder before syncing its placeholder`)
      }
      await PU(UU, XU, zU)
    }
    async function LU(UU, XU) {
      if (!ZU(XU)) throw new Error(`Refusing to remove unsafe path: ${XU}`);
      try {
        const {
          dir: zU,
          fileName: cU
        } = await RU(UU, XU, !1);
        await zU.removeEntry(cU)
      } catch (zU) {
        if (zU instanceof DOMException && ("NotFoundError" === zU.name || "NotAllowedError" === zU.name)) return;
        throw zU
      }
    }
    async function eU(UU, XU) {
      if (!ZU(XU)) return null;
      try {
        const zU = XU.split("/");
        let cU = UU;
        for (const UU of zU) cU = await cU.getDirectoryHandle(UU);
        return cU
      } catch (zU) {
        if (zU instanceof DOMException && ("NotFoundError" === zU.name || "NotAllowedError" === zU.name)) return null;
        throw zU
      }
    }
    async function CU(UU, XU) {
      if ((0, cU.n)(XU) || (0, yU.e)(XU)) {
        if ((0, yU.e)(XU)) {
          if (await qU(UU, XU) === FU) throw new Error(`Refusing to remove a binary schematic: ${XU}`)
        }
        await LU(UU, XU)
      }
    }
    async function wU(UU) {
      if (UU.size > 64) return FU;
      const XU = await UU.text();
      return Array.from(XU).some((UU => {
        const XU = UU.charCodeAt(0);
        return XU < 9 || XU > 13 && XU < 32 || 65533 === XU
      })) ? FU : XU
    }
    async function qU(UU, XU) {
      try {
        const {
          dir: zU,
          fileName: cU
        } = await RU(UU, XU, !1);
        return await wU(await (await zU.getFileHandle(cU)).getFile())
      } catch (zU) {
        if (zU instanceof DOMException && "NotFoundError" === zU.name) return null;
        throw zU
      }
    }
    async function OU(UU, XU) {
      const zU = await BU(UU);
      for (const cU of Object.keys(zU)) cU in XU || (0, yU.e)(cU) || await CU(UU, cU);
      for (const [QU, AU] of Object.entries(XU))((0, cU.n)(QU) || (0, yU.e)(QU)) && await dU(UU, QU, AU)
    }

    function SU(UU, XU) {
      var zU, cU;
      let yU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const QU = null !== (zU = yU.debounceMs) && void 0 !== zU ? zU : 300,
        AU = null !== (cU = yU.pollMs) && void 0 !== cU ? cU : 1e3;
      let FU = !1,
        oU = null,
        DU = null,
        EU = null;
      const YU = () => {
          FU || (oU && clearTimeout(oU), oU = setTimeout((() => {
            oU = null, NU()
          }), QU))
        },
        NU = async () => {
          if (!FU) try {
            if (!await aU(UU, "readwrite")) return;
            const zU = await BU(UU);
            FU || XU(zU)
          } catch (zU) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", zU)
          }
        };
      NU();
      const IU = window.FileSystemObserver;
      if (IU) try {
        EU = new IU((() => {
          YU()
        })), EU.observe(UU, {
          recursive: !0
        })
      } catch (pU) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", pU), EU = null
      }
      return EU || (DU = setInterval((() => {
        YU()
      }), AU)), () => {
        FU = !0, oU && clearTimeout(oU), DU && clearInterval(DU), EU && EU.disconnect()
      }
    }
  },
  37222: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => LU,
      f: () => PU,
      h: () => WU,
      i: () => ZU,
      m: () => RU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(3478),
      FU = zU(320),
      oU = zU(2616),
      DU = zU(31),
      EU = zU(2032),
      YU = zU(42),
      NU = zU(2047),
      IU = zU(27),
      pU = zU(2053),
      aU = zU(1444),
      tU = zU(9395),
      gU = zU(2077),
      kU = zU(1193),
      GU = zU(1305);
    const BU = 7e3;

    function ZU() {
      const {
        loadingOverlayVisible: UU,
        openInGameMenuName: XU,
        openEverythingMenuName: zU
      } = (0, IU.q)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return UU || null !== XU || null !== zU
    }

    function RU(UU, XU, zU) {
      const yU = (0, cU.useRef)(zU);
      yU.current = zU;
      const QU = (0, cU.useRef)({
        card: UU,
        ms: 0
      });
      (0, cU.useEffect)((() => {
        if (XU || null === UU) return;
        QU.current.card !== UU && (QU.current = {
          card: UU,
          ms: 0
        });
        const zU = QU.current,
          cU = performance.now(),
          AU = setTimeout((() => {
            yU.current()
          }), BU - zU.ms);
        return () => {
          clearTimeout(AU), zU.ms += performance.now() - cU
        }
      }), [XU, UU])
    }
    const PU = (0, cU.memo)((function() {
      const {
        isTouchScreen: UU
      } = (0, IU.q)(["isTouchScreen"]), XU = (0, aU.F)();
      (0, AU.e)();
      const zU = (0, oU.f)("showBasicMovementControls"),
        [yU, EU] = (0, cU.useState)("movement"),
        NU = "movement" === yU,
        pU = XU && !1 !== zU;
      (0, cU.useEffect)((() => {
        "padActions" !== yU || pU || EU("done")
      }), [yU, pU]);
      const tU = ZU();
      RU("done" === yU ? null : yU, tU, (() => {
        EU("movement" === yU && (0, aU.n)() ? "padActions" : "done")
      }));
      const gU = YU.k.getItem(FU.Rb) > 2,
        kU = !gU && (!UU || XU) && NU && !1 !== zU;
      return (0, cU.useEffect)((() => {
        kU && !tU && DU.k.UY("controlsTutorialShown", "movement")
      }), [kU, tU]), gU ? (0, GU.jsx)(eU, {
        showingMovementControls: !1
      }) : (0, GU.jsxs)(GU.Fragment, {
        children: [kU ? (0, GU.jsxs)("div", {
          className: QU()("ControlsTutorialDiv", {
            Covered: tU
          }),
          children: [(0, GU.jsx)(WU, {}), (0, GU.jsx)(LU, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, GU.jsx)(LU, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, "padActions" === yU && pU && (0, GU.jsx)(dU, {
          covered: tU
        }), (0, GU.jsx)(eU, {
          showingMovementControls: "done" !== yU
        })]
      })
    }));

    function WU() {
      const UU = (0, aU.F)();
      return (0, GU.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, GU.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), UU && (0, GU.jsx)(pU.c, {
          noaAction: "forward"
        }), !UU && (0, GU.jsxs)(GU.Fragment, {
          children: [(0, GU.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, GU.jsx)(pU.c, {
              noaAction: "forward"
            })
          }), (0, GU.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, GU.jsx)(pU.c, {
              noaAction: "left"
            }), (0, GU.jsx)(pU.c, {
              noaAction: "backward"
            }), (0, GU.jsx)(pU.c, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function dU(UU) {
      let {
        covered: XU
      } = UU;
      const {
        t: zU
      } = (0, kU.I)(), cU = (0, oU.f)("useInventory");
      return (0, GU.jsxs)("div", {
        className: QU()("ControlsTutorialDiv", {
          Covered: XU
        }),
        children: [(0, GU.jsx)(LU, {
          header: zU("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, GU.jsx)(LU, {
          header: zU("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== cU && (0, GU.jsx)(LU, {
          header: zU("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, GU.jsx)(LU, {
          header: zU("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function LU(UU) {
      let {
        header: XU,
        noaAction: zU
      } = UU;
      return (0, GU.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, GU.jsx)("div", {
          className: "KeyHeader",
          children: XU
        }), (0, GU.jsx)(pU.c, {
          noaAction: zU
        })]
      })
    }

    function eU(UU) {
      let {
        showingMovementControls: XU
      } = UU;
      const {
        isTouchScreen: zU
      } = (0, IU.q)(["isTouchScreen"]), yU = (0, aU.F)(), QU = (0, gU.d)("OpenShop"), [AU, FU] = (0, cU.useState)(!1), pU = `SeenShopControls|${(0,NU.e)("connectedGame",(UU=>UU.gameNameWithVariation))}`, kU = () => (!(0, aU.n)() || null !== (0, tU.c)("OpenShop")) && !YU.k.getItem(pU) && EU.d.get("shopInfo") && !XU, BU = () => (FU(!0), YU.k.setItem(pU, !0), (0, aU.n)() || DU.k.UY("showShopTouchTutorial"), setTimeout((() => {
        FU(!1)
      }), 7e3));
      (0, cU.useEffect)((() => {
        let UU;
        const XU = DU.k.subscribe("showShopTutorial", (() => {
          kU() && (UU = BU())
        }));
        return () => {
          clearTimeout(UU), DU.k.unsubscribe(XU)
        }
      }), [XU]);
      const ZU = (0, cU.useRef)();
      return (0, oU.e)("currencyAmounts", (UU => {
        if (kU()) {
          let zU = !1;
          const cU = EU.d.get("shopInfo");
          for (const yU in cU) {
            for (const QU in cU[yU].items) {
              var XU;
              const AU = cU[yU].items[QU];
              if (void 0 !== AU.currency && UU[AU.currency] && AU.cost <= UU[AU.currency].amount && (null === (XU = AU.hidden) || void 0 === XU || !XU)) {
                zU = !0;
                break
              }
            }
            if (zU) break
          }
          zU && (ZU.current = BU())
        }
      })), (0, cU.useEffect)((() => () => {
        clearTimeout(ZU.current)
      }), [XU]), !AU || yU && !QU ? null : (0, GU.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: zU && !yU ? null : (0, GU.jsx)(LU, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  5358: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => tU,
      f: () => gU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(61),
      AU = zU(1193),
      FU = zU(5360),
      oU = zU(1978),
      DU = zU(2616),
      EU = zU(5364),
      YU = zU(1305);
    const NU = new WeakMap;
    let IU = 0;

    function pU(UU) {
      let XU = NU.get(UU);
      return void 0 === XU && (XU = IU++, NU.set(UU, XU)), XU
    }

    function aU(UU) {
      let {
        piece: XU
      } = UU;
      return "space" === XU.kind ? (0, YU.jsx)(YU.Fragment, {
        children: XU.text
      }) : (0, YU.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${XU.delayMs}ms`
        },
        children: (0, YU.jsx)(FU.e, {
          text: "icon" === XU.kind ? `[[${XU.icon}]]` : XU.text
        })
      })
    }

    function tU(UU) {
      let {
        display: XU
      } = UU;
      const {
        selectedLanguage: zU
      } = (0, AU.I)(), cU = (0, QU.useMemo)((() => (0, EU.d)((0, EU.g)(XU).plan.pieces)), [XU, zU.code]);
      return (0, YU.jsxs)("div", {
        className: yU()("Dialogue", {
          DialogueAnimateIn: !1 !== XU.animateIn
        }),
        children: [XU.speakerName && (0, YU.jsx)(oU.d, {
          text: XU.speakerName,
          className: "DialogueSpeaker"
        }), (0, YU.jsx)("p", {
          className: "DialogueLine",
          children: cU.map(((UU, XU) => 1 === UU.length && "space" === UU[0].kind ? UU[0].text : (0, YU.jsx)("span", {
            className: "DialogueGlue",
            children: UU.map(((UU, XU) => (0, YU.jsx)(aU, {
              piece: UU
            }, XU)))
          }, XU)))
        })]
      })
    }
    const gU = (0, QU.memo)((function() {
      const UU = (0, DU.f)("dialogue");
      return (0, YU.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: UU && (0, YU.jsx)(tU, {
          display: UU
        }, pU(UU))
      })
    }))
  },
  37405: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => aU,
      f: () => tU
    });
    var cU = zU(61),
      yU = zU(1492),
      QU = zU(2047),
      AU = zU(37354),
      FU = zU(646),
      oU = zU(1106),
      DU = zU.n(oU),
      EU = zU(1305);
    const YU = [NU()];

    function NU() {
      return {
        source: null,
        direction: null,
        HV: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function IU(UU) {
      return YU.find((XU => null !== XU.source && XU.source === UU))
    }

    function pU(UU) {
      clearTimeout(UU.timeout), UU.source = null, UU.direction = null, UU.writtenAngle = null, UU.HV && (UU.HV.style.rotate = "")
    }
    const aU = (0, cU.memo)((function() {
      const [, UU] = (0, cU.useReducer)((UU => UU + 1), 0);
      return (0, yU.f)("damagedByOtherPlayer", (XU => {
        let {
          fQ: zU,
          direction: cU
        } = XU;
        const yU = zU || "nonDirectional",
          QU = function(UU) {
            var XU;
            const zU = null !== (XU = IU(UU)) && void 0 !== XU ? XU : YU.find((UU => null === UU.source));
            if (zU) return zU;
            const cU = {
              source: null,
              direction: null,
              HV: null,
              timeout: void 0,
              writtenAngle: null
            };
            return YU.push(cU), cU
          }(yU);
        clearTimeout(QU.timeout), QU.source = yU, QU.direction = cU, QU.timeout = setTimeout((() => {
          pU(QU), UU()
        }), 800), UU()
      })), (0, QU.b)("kill", (XU => {
        let {
          killer: zU,
          victim: cU
        } = XU;
        const yU = zU.local && IU(cU.id);
        yU && (pU(yU), UU())
      })), (0, cU.useEffect)((() => {
        const UU = (0, AU.d)("turnDamageIndicators", tU);
        return () => {
          UU(), YU.forEach(pU)
        }
      }), []), (0, EU.jsx)("div", {
        className: "DirectionalDamage",
        children: YU.map(((UU, XU) => (0, EU.jsx)("div", {
          ref: XU => {
            UU.HV = XU
          },
          className: DU()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, FU.P)(UU.direction),
            DamageIndicatorIdle: null === UU.source
          })
        }, XU)))
      })
    }));

    function tU(UU) {
      for (const XU of YU) {
        if (null === XU.source || (0, FU.P)(XU.direction)) continue;
        const zU = XU.direction - UU;
        zU !== XU.writtenAngle && (XU.writtenAngle = zU, XU.HV.style.rotate = `${zU}rad`)
      }
    }
  },
  9355: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => OU,
      e: () => eU,
      i: () => CU
    });
    var cU = zU(61),
      yU = zU(4982),
      QU = zU(1129),
      AU = zU(1492),
      FU = zU(31),
      oU = zU(3820),
      DU = zU(2338),
      EU = zU(1258),
      YU = zU(2772),
      NU = zU(2005),
      IU = zU(2047),
      pU = zU(1193),
      aU = zU(27),
      tU = zU(1680),
      gU = zU(1106),
      kU = zU.n(gU),
      GU = zU(9364),
      BU = zU(9373),
      ZU = zU(9381),
      RU = zU(9273),
      PU = zU(9383),
      WU = zU(3464),
      dU = (zU(9392), zU(1305));
    let LU = null;

    function eU() {
      return null !== LU
    }

    function CU() {
      return "pad" === LU
    }

    function wU() {
      return "inGame" === aU.e.get("gameState") && !(0, tU.p)()
    }

    function qU(UU) {
      return (0, BU.r)(UU, EU.k, BU.c, BU.e, BU.i)
    }
    const OU = (0, cU.memo)((function() {
      const {
        t: UU
      } = (0, pU.I)(), {
        userContext: XU
      } = (0, QU.d)(), [zU, aU] = (0, cU.useState)(null), [gU, eU] = (0, cU.useState)(null), CU = (0, cU.useRef)(null), OU = (0, cU.useCallback)((UU => {
        CU.current = UU, eU(UU)
      }), []), SU = (0, cU.useRef)(0), rU = (0, cU.useRef)(null), uU = (0, cU.useRef)({
        x: 0,
        y: 0
      }), [fU, iU] = (0, cU.useState)(0), HU = (0, cU.useMemo)((() => function(UU) {
        const XU = [];
        for (let cU = 0; cU < EU.k; cU++) {
          var zU;
          XU.push(null !== (zU = UU[cU]) && void 0 !== zU ? zU : null)
        }
        return XU
      }((0, YU.j)(XU.getPlayerCosmetics().emote))), [XU, fU]);
      (0, IU.b)("cosmeticsUpdated", (UU => {
        UU.some((UU => UU.local && "emote" === UU.FU)) && iU((UU => UU + 1))
      }));
      const MU = (0, cU.useRef)(!1),
        vU = (0, cU.useCallback)((function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === UU && (0, ZU.e)(), MU.current = XU, uU.current = {
            x: 0,
            y: 0
          }, OU(null), aU(UU)
        }), [OU]),
        VU = (0, cU.useCallback)((() => {
          aU(null), OU(null), uU.current = {
            x: 0,
            y: 0
          }
        }), [OU]),
        sU = (0, cU.useCallback)((UU => {
          if (Date.now() < SU.current) return;
          const XU = (0, DU.g)(UU),
            zU = !!XU.holdUntilMove,
            cU = zU ? 600 : Math.ceil(1e3 * XU.animation.animation_length / DU.b) + 200;
          SU.current = Date.now() + cU, rU.current = UU, NU.gameBridge.send("playEmote", UU), NU.gameBridge.send("applyTemporaryThirdPerson", zU ? {} : {
            durationMs: cU
          })
        }), []);
      (0, AU.f)("requestToggleEmoteWheel", (() => {
        null === zU ? wU() && vU("click") : VU()
      })), (0, AU.f)("requestEmoteWheelHoldOpen", (() => {
        null === zU && wU() && vU((0, GU.e)() ? "hold" : "click")
      })), (0, AU.f)("requestEmoteWheelPadOpen", (UU => {
        null !== zU || !wU() || (0, RU.c)() || (0, PU.q)() || vU("pad", UU)
      })), (0, AU.f)("requestEmoteRepeatLast", (() => {
        if (null !== zU || !wU() || (0, RU.c)() || (0, PU.q)()) return;
        const UU = rU.current;
        null !== UU && HU.includes(UU) ? sU(UU) : vU("pad", !0)
      }));
      const nU = () => {
        const UU = CU.current,
          XU = null !== UU ? HU[UU] : null;
        null !== XU && "pad" === zU && Date.now() < SU.current || (VU(), null !== XU && sU(XU))
      };
      (0, AU.f)("emoteWheelPadAim", (UU => {
        if ("pad" !== zU) return;
        const XU = (0, BU.z)(UU, EU.k, CU.current);
        OU(null !== XU && null !== HU[XU] ? XU : null)
      })), (0, AU.f)("requestEmoteWheelPadCommit", (UU => {
        "pad" !== zU || UU && MU.current || nU()
      })), (0, AU.f)("appManagerUpdated|activeInputDevice", (UU => {
        null !== zU && "pad" === zU !== ("gamepad" === UU) && VU()
      })), (0, cU.useLayoutEffect)((() => (LU = zU, (0, oU.v)("emoteWheel", "pad" === zU), FU.k.UY(oU.n), () => {
        LU = null, (0, oU.v)("emoteWheel", !1), FU.k.UY(oU.n)
      })), [zU]), (0, AU.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === zU && nU()
      })), (0, AU.f)("requestEmoteWheelClose", (() => {
        null !== zU && VU()
      })), (0, AU.f)("appManagerUpdated|gameState", (UU => {
        "inGame" !== UU && VU()
      }));
      const mU = () => {
        (0, tU.p)() && VU()
      };
      if ((0, AU.f)("appManagerUpdated|openEverythingMenuName", mU), (0, AU.f)("appManagerUpdated|openInGameMenuName", mU), (0, AU.f)("pointerLockUpdate", (UU => {
          UU || "hold" !== zU || VU()
        })), (0, cU.useEffect)((() => {
          if (null === zU) return;
          const UU = UU => {
            "Escape" === UU.key && (UU.stopImmediatePropagation(), UU.preventDefault(), VU())
          };
          return document.addEventListener("keydown", UU, !0), () => {
            document.removeEventListener("keydown", UU, !0)
          }
        }), [zU, VU]), (0, yU.c)(!0, "click" === zU, "EmoteWheelOverlay"), (0, cU.useEffect)((() => {
          if ("hold" === zU) return NU.gameBridge.send("holdEmoteWheel", !0), () => {
            NU.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [zU]), (0, cU.useEffect)((() => {
          if ("hold" !== zU) return;
          const UU = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            XU = BU.q * UU,
            cU = BU.m * UU,
            yU = UU => {
              let zU = uU.current.x + UU.movementX,
                yU = uU.current.y + UU.movementY;
              const QU = Math.hypot(zU, yU);
              if (QU > XU) {
                const UU = XU / QU;
                zU *= UU, yU *= UU
              }
              uU.current = {
                x: zU,
                y: yU
              }, OU(function(UU, XU, zU, cU) {
                if (Math.hypot(UU, XU) < zU) return null;
                const yU = (0, BU.t)(UU, XU, EU.k);
                return null === cU[yU] ? null : yU
              }(zU, yU, cU, HU))
            };
          return document.addEventListener("mousemove", yU), () => {
            document.removeEventListener("mousemove", yU)
          }
        }), [zU, HU, OU]), null === zU) return null;
      const lU = "hold" === zU || "pad" === zU,
        xU = null !== gU ? HU[gU] : null,
        JU = null !== xU ? (0, DU.g)(xU).displayName : UU("emotes:pickEmote");
      return (0, dU.jsx)("div", {
        className: kU()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === zU
        }),
        onMouseDown: UU => {
          UU.target === UU.currentTarget && VU()
        },
        children: (0, dU.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * BU.q + "rem",
            height: 2 * BU.q + "rem"
          },
          children: [(0, dU.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${BU.l} ${BU.l}`,
            children: [HU.map(((XU, zU) => {
              const cU = null !== XU,
                yU = lU && zU === gU;
              return (0, dU.jsx)("path", {
                d: qU(zU),
                className: kU()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: yU,
                  EmoteWheelWedgeDisabled: !cU
                }),
                onClick: UU => {
                  UU.stopPropagation(), null !== XU && (UU => {
                    VU(), sU(UU)
                  })(XU)
                },
                "aria-label": null !== XU ? (0, DU.g)(XU).displayName : UU("emotes:emptySlot")
              }, zU)
            })), (0, dU.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: BU.c,
              cy: BU.c,
              r: BU.i
            }), (0, dU.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: BU.c,
              cy: BU.c,
              r: BU.e
            }), lU && null !== gU && (0, dU.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: qU(gU)
            })]
          }), HU.map(((UU, XU) => {
            const zU = null !== UU,
              cU = lU && XU === gU,
              yU = (0, BU.x)(XU, EU.k),
              QU = BU.b * Math.cos(yU),
              AU = BU.b * Math.sin(yU);
            return (0, dU.jsx)("div", {
              className: kU()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: cU,
                EmoteWheelSlotIconDisabled: !zU
              }),
              style: {
                left: `calc(50% + ${QU}rem)`,
                top: `calc(50% + ${AU}rem)`,
                backgroundImage: zU ? `url(${(0,WU.h)("emote",UU)})` : void 0
              },
              "aria-hidden": !0
            }, XU)
          })), (0, dU.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: JU
          })]
        })
      })
    }))
  },
  37266: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => tU
    });
    var cU = zU(61),
      yU = zU(73),
      QU = zU(1193),
      AU = zU(1106),
      FU = zU.n(AU),
      oU = zU(1800),
      DU = zU(1390),
      EU = zU(1294),
      YU = zU(1521),
      NU = zU(1715),
      IU = zU(1515),
      pU = zU(1305);
    const aU = 14;

    function tU(UU) {
      let {
        className: XU,
        triggerElementRef: zU,
        options: AU
      } = UU;
      const {
        t: tU
      } = (0, QU.I)(), [gU, kU] = (0, cU.useState)(!1), [GU, BU] = (0, cU.useState)({
        x: 0,
        y: 0
      }), ZU = (0, cU.useRef)(null);
      (0, cU.useEffect)((() => {
        let UU = null;
        const XU = XU => {
            UU = {
              x: XU.clientX,
              y: XU.clientY
            }
          },
          cU = XU => {
            if (null === UU || !(0, IU.b)(UU, XU)) return;
            UU = null;
            const zU = aU * (0, oU.getRemInPx)();
            BU({
              x: Math.min(XU.clientX, window.innerWidth - zU - 5),
              y: XU.clientY
            }), kU((UU => !UU))
          },
          yU = UU => {
            var XU;
            null !== (XU = ZU.current) && void 0 !== XU && XU.contains(UU.relatedTarget) || kU(!1)
          },
          QU = zU.current;
        return QU.addEventListener("pointerdown", XU), QU.addEventListener("pointerup", cU), QU.addEventListener("mouseleave", yU), () => {
          QU.removeEventListener("pointerdown", XU), QU.removeEventListener("pointerup", cU), QU.removeEventListener("mouseleave", yU)
        }
      }), [zU]), (0, cU.useEffect)((() => {
        if (gU) return (0, NU.d)("pointerdown", (UU => {
          !ZU.current || ZU.current.contains(UU.target) || zU.current.contains(UU.target) || kU(!1)
        }))
      }), [gU, zU]), (0, cU.useLayoutEffect)((() => {
        if (!gU || !ZU.current) return;
        const UU = ZU.current.getBoundingClientRect().height,
          XU = Math.max(5, window.innerHeight - UU - 5);
        GU.y > XU && BU({
          x: GU.x,
          y: XU
        })
      }), [gU, GU]), (0, EU.t)("popup", ZU, (() => {
        kU(!1)
      }), gU);
      const RU = AU.filter((UU => !1 !== UU.show));
      return gU && 0 !== RU.length ? (0, yU.createPortal)((0, pU.jsx)("div", {
        ref: ZU,
        className: FU()("FloatingActions", {
          [XU]: XU
        }),
        style: {
          width: `${aU}rem`,
          top: GU.y,
          left: GU.x
        },
        children: RU.map((UU => {
          let {
            icon: XU,
            text: zU,
            onPointerDown: cU,
            analyticsClick: yU
          } = UU;
          return (0, pU.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: UU => {
              void 0 !== yU && (0, YU.reportAnalyticsClick)(yU), cU(UU), kU(!1), UU.stopPropagation()
            },
            children: [(0, pU.jsx)(DU.d, {
              name: XU
            }), (0, pU.jsx)("div", {
              children: tU(zU)
            })]
          }, zU)
        }))
      }), function() {
        var UU;
        return null !== (UU = document.querySelector(".WholeAppWrapperInner")) && void 0 !== UU ? UU : document.body
      }()) : null
    }
  },
  37427: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => tA
    });
    var cU = zU(37318),
      yU = zU(61),
      QU = zU(2136),
      AU = zU(4968),
      FU = zU(4977),
      oU = zU(2616),
      DU = zU(2005),
      EU = zU(1305);

    function YU(UU) {
      let {
        className: XU,
        style: zU,
        vw: cU,
        maxPx: yU,
        children: QU
      } = UU;
      console.assert("number" === typeof cU && "number" === typeof yU, "vw and maxPx passed to Text must be numbers");
      const AU = window.innerWidth * (cU / 100) > yU ? `${yU}px` : `${cU}vw`;
      return (0, EU.jsx)("div", {
        className: XU,
        style: {
          ...zU,
          fontSize: AU
        },
        children: QU
      })
    }
    var NU = zU(37429),
      IU = zU(1494),
      pU = zU(31),
      aU = zU(2032),
      tU = zU(1390);

    function gU(UU) {
      let {
        tasks: XU,
        lastDisplayedTasks: zU
      } = UU;
      return (0, EU.jsx)(EU.Fragment, {
        children: Object.keys(XU).map((UU => (0, EU.jsx)(kU, {
          task: XU[UU],
          lastDisplayedAs: zU[UU]
        }, XU[UU].text)))
      })
    }

    function kU(UU) {
      let {
        task: XU,
        lastDisplayedAs: zU
      } = UU;
      const [cU, QU] = (0, yU.useState)(null !== zU && void 0 !== zU && zU.progress ? zU.progress / XU.goal : 0), [AU, FU] = (0, yU.useState)(!1), [oU, DU] = (0, yU.useState)(XU.claimed || !1);
      return (0, yU.useEffect)((() => {
        QU(XU.progress / XU.goal)
      }), [XU.progress, XU.goal]), oU ? null : (0, EU.jsxs)("div", {
        className: "Task",
        children: [(0, EU.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, EU.jsx)(YU, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: XU.text
          })
        }), XU.progress < XU.goal ? (0, EU.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== cU ? (0, EU.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * cU + "%"
            }
          }) : null, (0, EU.jsx)("div", {
            className: "TaskProgressText",
            children: `${XU.progress}/${XU.goal}`
          })]
        }) : (0, EU.jsx)(IU.l, {
          className: "ClaimRewardButton",
          onClick: () => {
            FU(!0)
          },
          children: (0, EU.jsx)(YU, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), AU ? (0, EU.jsx)(GU, {
          task: XU,
          close: () => {
            XU.claimed = !0, DU(!0), FU(!1)
          }
        }) : null]
      })
    }

    function GU(UU) {
      let {
        task: XU,
        close: zU
      } = UU;
      const [cU, QU] = (0, yU.useState)({}), [AU, FU] = (0, yU.useState)("closed");
      (0, yU.useEffect)((() => {
        let UU;
        return "animStart" === AU && (UU = setTimeout((() => {
          FU("animEnd")
        }), 700)), () => {
          clearTimeout(UU)
        }
      }), [AU]), (0, NU.e)((() => {
        DU.gameBridge.send("completeTask", XU.text)
      }));
      const YU = (0, oU.f)("currencyAmounts");
      return (0, EU.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === AU)
            if (0 === XU.rewards.length) zU(), DU.gameBridge.send("completeTask", XU.text);
            else {
              const UU = {
                ...aU.d.get("currencyAmounts")
              };
              for (const XU in cU) UU[XU] = {
                ...UU[XU],
                amount: UU[XU].amount + cU[XU]
              };
              aU.d.apply({
                currencyAmounts: UU
              }), FU("closed")
            }
          else "closed" === AU && (QU(XU.rewards.pop()), FU("animStart"))
        },
        children: [(0, EU.jsx)("img", {
          className: "Chest",
          alt: "closed" !== AU ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==AU?"open":"closed"}.png`
        }), (0, EU.jsx)("div", {
          className: "Rewards",
          children: "closed" !== AU ? Object.keys(cU).map((UU => {
            const XU = null === YU || void 0 === YU ? void 0 : YU[UU];
            return !XU || XU.hidden ? null : (0, EU.jsxs)("div", {
              className: "Reward",
              children: [(0, EU.jsx)(tU.d, {
                name: XU.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: XU.iconColour
                }
              }), (0, EU.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === AU ? 0 : cU[UU]
              })]
            }, UU)
          })) : null
        }), "animStart" === AU ? (0, EU.jsx)(BU, {}) : null, (0, EU.jsx)("div", {
          className: "ChestsLeft",
          children: XU.rewards.length
        })]
      })
    }

    function BU() {
      const [UU, XU] = (0, yU.useState)(0);
      (0, yU.useEffect)((() => {
        XU(1)
      }), []);
      return (0, EU.jsx)(EU.Fragment, {
        children: Array.from({
          length: 40
        }).map(((XU, zU) => (0, EU.jsx)(tU.d, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * UU * Math.cos(zU / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * UU * Math.sin(zU / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === UU ? 1 : 0
          }
        }, zU)))
      })
    }
    pU.k.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const UU = new Image,
          XU = new Image;
        UU.src = "/textures/miscImages/Treasure Chest open.png", XU.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var ZU = zU(3490),
      RU = zU(1129),
      PU = zU(1978),
      WU = zU(1492),
      dU = zU(344),
      LU = zU(2047),
      eU = zU(1384);

    function CU(UU) {
      var XU, zU;
      let {
        byId: cU,
        localId: yU
      } = UU;
      return null === yU ? null : null !== (XU = null === (zU = cU[yU]) || void 0 === zU ? void 0 : zU.name) && void 0 !== XU ? XU : null
    }

    function wU(UU) {
      let {
        lbStats: XU,
        storedState: zU = {}
      } = UU;
      const {
        userContext: cU
      } = (0, RU.d)(), QU = (0, LU.e)("players", CU), [AU, FU] = (0, yU.useState)(zU.selectedCat || (null === XU || void 0 === XU ? void 0 : XU[0]) || null), [oU, YU] = (0, yU.useState)(zU.selectedTimeframe || "Today"), [NU, IU] = (0, yU.useState)(null);
      (0, yU.useEffect)((() => {
        null === AU && null !== XU && XU.length > 0 && FU(XU[0])
      }), [XU, AU]);
      const [pU, aU] = (0, yU.useState)(zU.seeingTop || !1), [tU, gU] = (0, yU.useState)(!1), kU = (0, yU.useCallback)((() => {
        null !== AU && null !== oU && (DU.gameBridge.send("requestLeaderboard", {
          category: AU.value,
          timeframe: oU,
          seeTop: pU
        }), BU(!0), SU && rU(null))
      }), [AU, oU, zU, pU]);
      (0, yU.useEffect)((() => {
        kU(), zU.selectedCat = AU, zU.selectedTimeframe = oU, zU.seeingTop = pU
      }), [AU, oU, zU, pU, kU]), (0, yU.useEffect)((() => {
        if ((null === NU || void 0 === NU ? void 0 : NU.length) > 0)
          if (pU) pU && gU(null === wU(NU));
          else {
            for (const UU of NU)
              if (1 === UU.place) return void gU(!1);
            gU(!0)
          }
      }), [NU, pU]), (0, WU.f)("leaderboardResponse", (UU => {
        let {
          category: zU,
          timeframe: cU,
          data: yU
        } = UU;
        for (let QU = 0; QU < XU; QU++)
          if (XU[QU].value === zU) {
            FU(XU[QU]);
            break
          } YU(cU), IU(yU), BU(!1)
      }));
      const [GU, BU] = (0, yU.useState)(!0);

      function wU(UU) {
        const XU = CU(DU.gameBridge.latest("players"));
        for (let zU = 0; zU < UU.length; zU++)
          if (UU[zU].name === XU) return UU[zU].place;
        return null
      }
      const [qU, OU] = (0, yU.useState)(!1), [SU, rU] = (0, yU.useState)(null);
      (0, yU.useEffect)((() => {
        if (NU && !qU) {
          const UU = wU(NU);
          UU < (zU.lastSeenPlayerPlace || 0) && rU(zU.lastSeenPlayerPlace - UU), OU(!0)
        }
      }), [NU, zU, qU]), (0, yU.useEffect)((() => () => {
        NU && (zU.lastSeenPlayerPlace = wU(NU))
      }), [NU, zU]);
      const uU = (0, yU.useRef)(null),
        [fU, iU] = (0, yU.useState)(void 0);
      return (0, yU.useEffect)((() => {
        var UU, XU;
        fU !== (null === (UU = uU.current) || void 0 === UU ? void 0 : UU.offsetHeight) && iU(null === (XU = uU.current) || void 0 === XU ? void 0 : XU.offsetHeight)
      })), cU.isLoggedIn() ? (0, EU.jsxs)(EU.Fragment, {
        children: [(0, EU.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, EU.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, EU.jsx)(ZU.d, {
              options: XU.map((UU => ({
                label: UU.label,
                value: UU.value
              }))),
              value: AU,
              onChange: UU => {
                FU(UU)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, EU.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, EU.jsx)(ZU.d, {
              options: dU.Uc.map((UU => ({
                value: UU,
                label: UU,
                className: "LBDropdownMenuItem"
              }))),
              value: oU,
              onChange: UU => {
                YU(UU.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), tU ? (0, EU.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              aU(!pU)
            },
            children: pU ? "See Yourself" : "See Top"
          }) : null]
        }), (0, EU.jsx)("div", {
          className: "LBTableWrapper",
          children: GU ? (0, EU.jsx)("div", {
            className: "LoaderContainer",
            children: (0, EU.jsx)(eU.b, {})
          }) : null === SU ? (0, EU.jsx)(EU.Fragment, {
            children: (0, EU.jsxs)("table", {
              className: "LBTable",
              children: [(0, EU.jsx)("thead", {
                className: "LBTableTHead",
                ref: uU,
                children: (0, EU.jsxs)("tr", {
                  children: [(0, EU.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, EU.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, EU.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: AU.label.toUpperCase()
                  })]
                })
              }), (0, EU.jsx)("tbody", {
                children: NU.map((UU => (0, EU.jsxs)("tr", {
                  className: "LBTableTR " + (UU.name === QU ? "LBTableTRYou" : ""),
                  children: [(0, EU.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${UU.place}`
                  }), (0, EU.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, EU.jsx)(PU.d, {
                      text: [{
                        entityName: UU.name
                      }]
                    })
                  }), (0, EU.jsx)("td", {
                    className: "LBTableTD",
                    children: UU.stat
                  })]
                }, UU.name)))
              })]
            })
          }) : (0, EU.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              rU(null)
            },
            children: (0, EU.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, EU.jsx)("div", {
                className: "TriangleUp"
              }), (0, EU.jsx)("div", {
                className: "LBIncreaseText",
                children: `${SU} Place${SU>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, EU.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, EU.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, EU.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var qU = zU(3478),
      OU = zU(97),
      SU = zU(42),
      rU = zU(3813);
    const uU = (0, yU.memo)((function(UU) {
      let {
        show: XU,
        onClose: zU
      } = UU;
      (0, qU.e)();
      const cU = (0, oU.f)("_tasks"),
        QU = (0, oU.f)("_availableLeaderboards"),
        [DU, YU] = (0, yU.useState)({});
      cU && Object.keys(cU).length > 0 && 0 === Object.keys(DU).length && YU(cU);
      const [NU] = (0, yU.useState)({
        tasks: {},
        leaderboard: {}
      }), IU = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!cU && Object.keys(cU).length > 0,
          content: (0, EU.jsx)(gU, {
            tasks: cU,
            lastDisplayedTasks: DU
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === QU || void 0 === QU ? void 0 : QU.length) > 0,
          content: (0, EU.jsx)(wU, {
            lbStats: QU,
            storedState: NU.leaderboard
          })
        }
      };

      function pU() {
        for (const UU in IU)
          if (IU[UU].getIsDefined()) return UU;
        return null
      }
      const [aU, tU] = (0, yU.useState)(pU());

      function kU() {
        YU({
          ...cU
        }), zU()
      }(0, yU.useEffect)((() => {
        aU || tU(pU())
      }), [pU()]), (0, FU.d)(!0, aU && XU), (0, yU.useEffect)((() => {
        XU && !aU && (console.log("CLOSE"), kU())
      }), [XU, aU]);
      const [GU, BU] = (0, yU.useState)(!1);
      return (0, yU.useEffect)((() => {
        XU && aU && !GU && BU(!0)
      }), [XU, GU, aU]), (0, yU.useEffect)((() => {
        !GU && cU && "tasks" !== aU && tU("tasks")
      }), [GU, cU, aU]), (0, EU.jsx)(EU.Fragment, {
        children: aU ? (0, EU.jsx)(rU.b, {
          className: "RetentionFeaturesWrapper",
          show: XU,
          children: (0, EU.jsxs)(AU.c, {
            close: kU,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, EU.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, EU.jsx)(iU, {}), (0, EU.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, EU.jsx)(fU, {
                  setCategory: tU,
                  menuCategories: IU,
                  selectedCat: aU
                }), (0, EU.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: IU[aU].content
                })]
              })]
            }), (0, EU.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: OU.featureFlags.useDiscord && (0, EU.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, EU.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, EU.jsx)(HU, {
                    tasks: cU
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function fU(UU) {
      let {
        selectedCat: XU,
        setCategory: zU,
        menuCategories: cU
      } = UU;
      return (0, EU.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(cU).map((UU => cU[UU].getIsDefined() ? (0, EU.jsx)("div", {
          className: "MenuHeaderCategory " + (UU === XU ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            zU(UU)
          },
          children: cU[UU].Title
        }, UU) : null))
      })
    }

    function iU() {
      const UU = (0, oU.f)("currencyAmounts");
      return (0, EU.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== UU && void 0 !== UU ? UU : {}).map((XU => {
          const zU = UU[XU];
          return zU.hidden ? null : (0, EU.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, EU.jsx)(tU.d, {
              name: zU.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: zU.iconColour
              }
            }), (0, EU.jsx)("div", {
              className: "UiCurrencyAmount",
              children: zU.amount
            })]
          }, XU)
        }))
      })
    }

    function HU(UU) {
      let {
        tasks: XU
      } = UU;
      return (0, EU.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, EU.jsx)(tU.d, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            SU.k.setItem("DiscordPressed", !0), DU.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in XU && pU.k.UY("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, EU.jsx)(QU.c, {})]
      })
    }
    var MU = zU(27),
      vU = zU(1680),
      VU = zU(37244),
      sU = zU(34767),
      nU = zU(5057),
      mU = zU(173),
      lU = zU(1224),
      xU = zU(1420),
      JU = zU(2884),
      jU = zU(1193),
      KU = zU(1685),
      bU = zU(2563),
      TU = zU(2509),
      hU = zU(1936),
      UX = zU(2106),
      XX = zU(1274),
      zX = zU(1521),
      cX = zU(37434),
      yX = zU(37436),
      QX = zU(37443),
      AX = zU(37448),
      FX = zU(37453),
      oX = zU(2943);

    function DX(UU) {
      let {
        playersHere: XU,
        exclude: zU,
        lG: cU
      } = UU;
      const {
        t: QU
      } = (0, jU.I)(), AU = (0, oX.o)(oX.i), [FU, oU] = (0, yU.useState)([]), DU = [], YU = (UU, XU) => {
        const cU = [...zU, ...DU.map((UU => UU.player.name))];
        DU.length < 3 && !(0, yX.m)(cU, UU.name) && DU.push({
          player: UU,
          status: XU
        })
      };
      for (const yU of XU) YU((0, FX.i)(yU.name, yU.cosmetics, yU.ranks), QU("worldSocial:inThisWorld"));
      if ("loaded" === AU.state.status)
        for (const yU of AU.state.recentPlayers) yU.preview.name && !yU.preview.isError && YU({
          ...yU.preview,
          location: {
            status: "offline"
          }
        }, QU("worldSocial:playedWithYou"));
      const NU = UU => {
        oU((XU => [...XU, UU])), cU(UU).finally((() => {
          oU((XU => XU.filter((XU => XU !== UU))))
        }))
      };
      return (0, EU.jsx)(EU.Fragment, {
        children: DU.map(((UU, XU) => {
          let {
            player: zU,
            status: cU
          } = UU;
          return (0, EU.jsx)(FX.g, {
            zIndex: DU.length - XU,
            player: zU,
            status: cU,
            onSendFriendRequest: () => {
              NU(zU.name)
            },
            actions: (0, EU.jsx)(xU.d, {
              tooltipInner: (0, EU.jsx)(EU.Fragment, {
                children: QU("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, EU.jsx)(IU.f, {
                className: "FriendRequestButton",
                disabled: FU.includes(zU.name),
                ariaLabel: `${QU("recentPlayers:addFriend")} ${zU.name}`,
                onClick: () => {
                  NU(zU.name)
                },
                children: (0, EU.jsx)(tU.d, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${zU.name}`)
        }))
      })
    }
    var EX = zU(37464),
      YX = zU(37468),
      NX = zU(1236),
      IX = zU(1537),
      pX = zU(4721),
      aX = zU(287),
      tX = zU(5045);
    const gX = ["auto", "auto_existing"];

    function kX(UU) {
      return gX.includes(UU)
    }

    function GX(UU, XU) {
      const zU = (0, NX.ib)(UU);
      return null !== XU && (0, NX.ib)(XU) === zU || (0, tX.b)().some((UU => (0, NX.ib)(UU.name) === zU))
    }
    const BX = new Set;

    function ZX(UU) {
      return `worldSocialSeen:${UU}`
    }

    function RX(UU) {
      return !UU || BX.has(UU) || !0 === SU.k.getItem(ZX(UU))
    }

    function PX(UU) {
      UU && !BX.has(UU) && (BX.add(UU), SU.k.setItem(ZX(UU), !0))
    }
    var WX = zU(2623),
      dX = zU(2627);

    function LX(UU) {
      let {
        show: XU,
        onClose: zU,
        opener: cU
      } = UU;
      const {
        lobbyName: QU,
        shownLobbyName: FU
      } = (0, LU.i)("connectedGame");
      return (0, yU.useEffect)((() => {
        XU && (0, zX.reportAnalyticsClick)({
          id: "world_social.open",
          value: cU
        })
      }), [XU]), (0, EU.jsx)(AU.c, {
        show: XU && null !== QU,
        close: zU,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== cU,
        children: XU && null !== QU && (0, EU.jsx)(eX, {
          lobbyName: QU,
          worldCode: null !== FU && void 0 !== FU ? FU : QU,
          onClose: zU
        }, QU)
      })
    }

    function eX(UU) {
      var XU;
      let {
        lobbyName: zU,
        worldCode: cU,
        onClose: QU
      } = UU;
      const {
        t: AU
      } = (0, jU.I)(), FU = (0, yU.useRef)(null), {
        settings: oU,
        loading: DU,
        answered: YU,
        change: NU,
        retry: pU
      } = (0, cX.i)(zU), aU = (0, KU.o)(), gU = (0, LU.i)("players"), kU = (0, LU.i)("hiddenPlayerNames"), [GU, BU] = (0, yU.useState)([]), [ZU, PU] = (0, yU.useState)([]), [WU, dU] = (0, yU.useState)(!1), CU = (0, WX.b)(), wU = (0, yU.useMemo)((() => {
        var UU, XU;
        const zU = null === gU.localId ? null : null !== (UU = null === (XU = gU.byId[gU.localId]) || void 0 === XU ? void 0 : XU.name) && void 0 !== UU ? UU : null;
        return gU.ids.flatMap((UU => {
          const XU = gU.byId[UU];
          return null !== XU && void 0 !== XU && XU.name && XU.name !== zU ? [{
            name: XU.name,
            cosmetics: XU.cosmetics,
            ranks: XU.ranks
          }] : []
        }))
      }), [gU]), qU = (0, yU.useMemo)((() => (0, yX.i)(aU.friends, zU, wU.map((UU => UU.name)))), [aU.friends, zU, wU]), SU = OU.featureFlags.canSeeRealPlayerNames ? wU.filter((UU => null === (0, XX.b)(UU.name, kU))) : [], rU = null !== oU && void 0 !== oU && oU.canManage ? oU : null, uU = null !== rU, fU = null !== (XU = null === oU || void 0 === oU ? void 0 : oU.visibility) && void 0 !== XU ? XU : null, iU = "whitelist" === (null === rU || void 0 === rU ? void 0 : rU.visibility), HU = "private" === fU || "whitelist" === fU && !uU, {
        userContext: MU
      } = (0, RU.d)();
      (0, yU.useEffect)((() => {
        uU && GX(zU, MU.getPersonalWorldLobbyName()) && PX(MU.whamm)
      }), [uU, zU, MU]);
      const vU = HU ? AU("whitelist" === fU ? "socialBar:inviteWorldManagersOnly" : uU ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        sU = null === vU;
      (0, yU.useEffect)((() => HU ? void 0 : hU.f.quietFriendAdded()), [HU]), (0, yU.useEffect)((() => hU.f.quietFriendRequests()), []);
      const oX = (0, yU.useRef)(!1);
      (0, yU.useEffect)((() => {
        const UU = FU.current,
          XU = !oX.current;
        oX.current = !0;
        const zU = null === document.activeElement || document.activeElement === document.body;
        null !== UU && void 0 !== UU && UU.contains(document.activeElement) || !XU && !zU || (0, VU.e)() || null === UU || void 0 === UU || UU.focus({
          preventScroll: !0
        })
      }), [sU]), (0, yU.useEffect)((() => {
        const UU = UU => {
          "Escape" !== UU.key || null !== document.activeElement && document.activeElement !== document.body || QU()
        };
        return document.addEventListener("keydown", UU), () => {
          document.removeEventListener("keydown", UU)
        }
      }), [QU]);
      const NX = null === oU && !YU,
        IX = (DU || aU.loading) && 0 === aU.friends.length,
        pX = aU.friends.flatMap((UU => UU.name ? [UU.name] : [])),
        aX = GU.filter((UU => !(0, yX.m)(pX, UU))),
        tX = qU.length + 3,
        gX = aX.length + tX,
        kX = WU ? aU.requests : aU.requests.slice(0, 1),
        BX = async function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const zU of (0, yX.p)(UU, nU.A)) {
            if (!await NU({
                whitelistAdd: zU
              }, (UU => (0, yX.w)(UU, zU, !0)), {
                quiet: XU
              })) return !1
          }
          return !0
        }, ZX = UU => {
          if (iU && rU) return {
            on: (0, yX.m)(rU.whitelist, UU),
            onChange: XU => {
              (0, zX.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: XU ? "on" : "off"
              }), NU(XU ? {
                whitelistAdd: [UU]
              } : {
                whitelistRemove: UU
              }, (zU => (0, yX.w)(zU, [UU], XU)))
            }
          }
        }, RX = async (UU, XU) => {
          (0, zX.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: XU
          });
          const zU = await (0, TU.g)(UU, "world_social");
          return (0, TU.d)(zU, UU, {
            announceSent: !1
          }), "failed" !== zU.kind && ("sent" === zU.kind && BU((XU => (0, yX.m)(XU, UU) ? XU : [...XU, UU])), iU && await BX([UU]), !0)
        };
      return (0, EU.jsxs)("div", {
        ref: FU,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: UU => {
          UU.target === UU.currentTarget && " " === UU.key && UU.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, EU.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, EU.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: AU("worldSocial:title")
          }), (0, EU.jsx)(IU.k, {
            className: "WorldSocialClose",
            onClick: QU
          })]
        }), NX && (0, EU.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, EU.jsx)(eU.b, {})
        }), !NX && (0, EU.jsxs)(EU.Fragment, {
          children: [(0, EU.jsx)(QX.c, {
            worldCode: cU,
            message: vU
          }), null === oU && !DU && (0, EU.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: pU,
            children: AU("worldSocial:loadFailed")
          }), uU && null !== fU && (0, EU.jsx)(AX.c, {
            visibility: fU,
            onPick: UU => {
              (async UU => {
                if (UU === fU) return;
                (0, zX.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: UU
                });
                const XU = [...(0, YX.b)(zU), ...ZU],
                  cU = "whitelist" === UU && oU ? (0, yX.h)(qU, XU, oU.whitelist) : [];
                await NU({
                  setVisibility: UU
                }, (XU => ({
                  ...XU,
                  visibility: UU
                }))) && await BX(cU)
              })(UU)
            }
          }), aU.requests.length > 0 && (0, EU.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, EU.jsx)(JU.b, {
              label: (0, EU.jsxs)(EU.Fragment, {
                children: [(0, EU.jsx)(tU.d, {
                  name: UX.e
                }), " ", AU("socialBar:requests")]
              }),
              meta: (0, EU.jsxs)(EU.Fragment, {
                children: [aU.requests.length, aU.requests.length === lU.n && (0, EU.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: AU("socialBar:limitReached")
                }), !WU && aU.requests.length > 1 && (0, EU.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    dU(!0)
                  },
                  children: AU("worldSocial:moreRequests", {
                    count: aU.requests.length - 1
                  })
                })]
              })
            }), (0, EU.jsx)("div", {
              className: "PlayerRows",
              children: kX.map(((UU, XU) => (0, EU.jsx)(FX.g, {
                zIndex: kX.length - XU,
                player: UU,
                actions: (0, EU.jsxs)(EU.Fragment, {
                  children: [(0, EU.jsx)(xU.d, {
                    tooltipInner: (0, EU.jsx)(EU.Fragment, {
                      children: AU("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, EU.jsx)(IU.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${AU("general:accept")} ${UU.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, TU.f)(UU.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, EU.jsx)(tU.d, {
                        name: "check"
                      })
                    })
                  }), (0, EU.jsx)(xU.d, {
                    tooltipInner: (0, EU.jsx)(EU.Fragment, {
                      children: AU("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, EU.jsx)(IU.j, {
                      className: "FriendRequestButton",
                      ariaLabel: `${AU("general:decline")} ${UU.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, TU.f)(UU.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, EU.jsx)(tU.d, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${UU.name}`)))
            })]
          }), (0, EU.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, EU.jsx)(JU.b, {
              label: (0, EU.jsxs)(EU.Fragment, {
                children: [(0, EU.jsx)(tU.d, {
                  name: UX.c
                }), " ", AU("socialBar:friends")]
              }),
              meta: aU.loaded && !HU ? aU.friends.length : void 0
            }), (0, EU.jsx)(EX.d, {
              label: AU("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: AU("worldSocial:addFriendPlaceholder"),
              onSubmit: async UU => await RX(UU, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), IX && (0, EU.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, EU.jsx)(eU.b, {})
            }), !IX && (0, EU.jsxs)(EU.Fragment, {
              children: [(0, EU.jsxs)("div", {
                className: "PlayerRows",
                children: [aX.map(((UU, XU) => (0, EU.jsx)(FX.g, {
                  zIndex: gX - XU,
                  player: (0, FX.i)(UU, null),
                  status: AU("worldSocial:requestSent"),
                  LY: ZX(UU)
                }, `request:${UU}`))), !HU && qU.map(((UU, XU) => (0, EU.jsx)(FX.c, {
                  zIndex: tX - XU,
                  row: UU,
                  LY: ZX(UU.friend.name),
                  canInvite: (0, yX.e)(oU) && "here" !== UU.place,
                  invited: ZU.includes(UU.friend.name),
                  onInvite: () => {
                    (async UU => {
                      (0, zX.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const XU = () => {
                        PU((XU => XU.filter((XU => XU !== UU))))
                      };
                      PU((XU => [...XU, UU]));
                      const cU = (0, yX.t)(oU, UU);
                      if ("none" !== cU) {
                        const zU = BX([UU], "quiet" === cU);
                        if ("required" === cU && !await zU) return void XU()
                      }
                      await (0, bU.j)(UU, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, YX.e)(zU, UU), setTimeout(XU, mU.u)) : XU()
                    })(UU.friend.name)
                  }
                }, UU.friend.name))), aU.loaded && 0 === aU.friends.length && (0, EU.jsx)(DX, {
                  playersHere: SU,
                  exclude: GU,
                  lG: UU => RX(UU, "suggestion")
                })]
              }), iU && aU.loaded && 0 === aU.friends.length && 0 === aX.length && (0, EU.jsx)("div", {
                className: "WorldSocialEmpty",
                children: AU("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), CU && (0, EU.jsxs)(IU.O, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, dX.f)({
              page: "players",
              source: "invite_popup"
            }), QU()
          },
          children: [(0, EU.jsx)(tU.d, {
            name: "users-gear"
          }), " ", AU("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var CX = zU(2658),
      wX = zU(2621);

    function qX(UU) {
      let {
        show: XU,
        onClose: zU,
        option: cU
      } = UU;
      const QU = (0, LU.e)("connectedGame", (UU => (0, CX.b)(UU) ? UU.lobbyName : null));
      return function(UU) {
        const {
          gameEntrySource: XU,
          loadingOverlayVisible: zU
        } = (0, MU.q)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: cU
        } = (0, RU.d)(), QU = (0, LU.i)("localPlayerAlive"), AU = (0, LU.e)("players", (UU => null !== UU.localId && void 0 !== UU.byId[UU.localId])), FU = (0, wX.k)(), oU = (0, yU.useRef)(null), DU = (0, yU.useRef)(null), EU = "worldCreation" === XU, YU = cU.whamm, NU = cU.getPersonalWorldLobbyName();
        (0, yU.useEffect)((() => {
          var XU;
          null !== UU && (null === (XU = DU.current) || void 0 === XU ? void 0 : XU.lobbyName) !== UU && null !== uX(UU, EU, YU, NU) && (DU.current = (0, cX.e)(UU))
        }), [EU, UU, YU, NU]), (0, yU.useEffect)((() => {
          if (null !== UU && (!zU && QU && AU)) return FU.whenShown((() => {
            var XU;
            const zU = oU.current === UU ? null : uX(UU, EU, YU, NU);
            if (null === zU) return;
            const cU = (null === (XU = DU.current) || void 0 === XU ? void 0 : XU.lobbyName) === UU ? DU.current : (0, cX.e)(UU);
            DU.current = null, oU.current = UU,
              function(UU, XU, zU, cU) {
                const {
                  lobbyName: yU
                } = UU, QU = () => {
                  ! function(UU, XU) {
                    if (!vX()) return void XU(!0);
                    const zU = performance.now() + HX;
                    let cU = 0;
                    const yU = () => {
                      cU = vX() ? 0 : cU + 1, cU >= 2 ? XU(!0) : !MX(UU) || performance.now() > zU ? XU(!1) : setTimeout(yU, iX)
                    };
                    setTimeout(yU, iX)
                  }(yU, (QU => {
                    cU();
                    const AU = "auto_existing" === XU && RX(zU);
                    QU && MX(yU) && !SX(yU) && !AU && (fX(UU) ? rX(yU) : (rX(yU), PX(zU), function(UU) {
                      const XU = aX.d.world_social_popup_v1;
                      return (0, aX.k)("world_social_popup_v1"), (0, zX.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${XU}:${(0,pX.c)()}:${UU}`
                      }), (0, IX.flushClientAnalyticsEvents)(), "auto_open" === XU
                    }(XU) && ((0, cX.d)(UU), pU.k.UY("toggleMenu", `inviteLink|${XU}`), "inviteLink" !== MU.e.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === XU && !fX(UU)) return void QU();
                UU.response.then((UU => {
                  if (!("error" in UU)) return UU.settings.canManage ? void QU() : (rX(yU), void cU());
                  cU()
                }))
              }(cU, zU, YU, (() => {
                oU.current === UU && (oU.current = null)
              }))
          }))
        }), [FU, EU, zU, UU, QU, AU, YU, NU])
      }(QU), (0, yU.useEffect)((() => {
        XU && null !== QU && rX(QU)
      }), [XU, QU]), null !== QU ? (0, EU.jsx)(LX, {
        show: XU,
        onClose: zU,
        opener: kX(cU) ? cU : "icon"
      }) : (0, EU.jsx)(sU.e, {
        show: XU,
        onClose: zU
      })
    }
    const OX = new Set;

    function SX(UU) {
      return OX.has(UU) || !!SU.n.getItem(`worldSocialShown:${UU}`)
    }

    function rX(UU) {
      OX.add(UU), SU.n.setItem(`worldSocialShown:${UU}`, !0)
    }

    function uX(UU, XU, zU, cU) {
      return SX(UU) ? null : function(UU) {
        let {
          justMade: XU,
          playerId: zU,
          lobbyName: cU,
          personalWorld: yU
        } = UU;
        return XU ? "auto" : !RX(zU) && GX(cU, yU) ? "auto_existing" : null
      }({
        justMade: XU,
        playerId: zU,
        lobbyName: UU,
        personalWorld: cU
      })
    }

    function fX(UU) {
      let {
        answer: XU
      } = UU;
      return null !== XU && "settings" in XU && !XU.settings.canManage
    }
    const iX = 500,
      HX = 3e4;

    function MX(UU) {
      return "inGame" === MU.e.get("gameState") && DU.gameBridge.latest("connectedGame").lobbyName === UU
    }

    function vX() {
      return (0, VU.e)() || MU.e.get("loadingOverlayVisible") || (0, vU.p)()
    }
    var VX = zU(37471),
      sX = zU(3526),
      nX = zU(2058),
      mX = zU(3519);

    function lX(UU, XU, zU) {
      return mX.c.overridesTexture(UU) ? mX.c.getTexture(UU, XU).url : zU
    }
    var xX = zU(10577);
    const JX = (UU, XU) => {
        (0, yU.useEffect)((() => {
          setTimeout((() => {
            UU && UU.current && UU.current.focus()
          }), 1)
        }), [XU])
      },
      jX = (0, yU.memo)((function(UU) {
        let {
          isInputActive: XU,
          onClose: zU,
          onChange: cU,
          textAreaRef: yU,
          fontSize: QU,
          lineHeight: AU,
          currText: FU
        } = UU;
        return (0, EU.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, EU.jsx)("img", {
            src: lX("board_full", sX.j.BLOCK, xX),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, EU.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: FU,
            ref: yU,
            style: {
              fontSize: `${QU}rem`,
              lineHeight: `${AU}rem`
            },
            onKeyDown: UU => {
              var XU;
              "Escape" !== UU.key && (UU.stopPropagation(), "Tab" === UU.key && function(UU) {
                UU.preventDefault();
                const XU = UU.target,
                  {
                    value: zU
                  } = XU;
                let cU = XU.selectionStart,
                  yU = XU.selectionEnd,
                  QU = zU.slice(cU, yU);
                if (!QU.includes("\n") && !UU.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; cU > 0 && "\n" !== zU[cU - 1];) cU--;
                const AU = "\n" === zU[yU - 1];
                AU && yU--;
                QU = zU.slice(cU, yU);
                const FU = QU.split("\n").map((XU => UU.shiftKey ? XU.replace(/^\t/, "") : "\t" + XU)).join("\n");
                if (UU.shiftKey && zU.slice(cU, yU) === FU) return;
                let {
                  selectionStart: oU
                } = XU;
                XU.setSelectionRange(cU, yU), oU > cU && (!UU.shiftKey || "\t" === QU[0]) && (oU += UU.shiftKey ? -1 : 1);
                yU = cU + FU.length + (AU ? 1 : 0), document.execCommand("insertText", !1, FU), XU.setSelectionRange(oU, yU)
              }(UU), /^F\d+$/i.test(UU.code) && null !== (XU = nX.w.OpenCodeEditor) && void 0 !== XU && XU.includes(UU.code) && zU())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: cU
          })]
        })
      }));

    function KX(UU) {
      return 1.3 * UU
    }
    var bX = zU(1732);
    const TX = (0, yU.memo)((function(UU) {
        let {
          show: XU,
          onOpen: zU,
          onClose: cU
        } = UU;
        const [QU, FU] = (0, yU.useState)(null), [oU, YU] = (0, yU.useState)(""), [NU, pU] = (0, yU.useState)(0), [aU, tU] = (0, yU.useState)(null), [gU, kU] = (0, yU.useState)({
          text: "",
          textSize: 0
        }), GU = (UU, XU) => aU ? (0, VX.n)(UU, XU, aU.width, aU.height) : (0, VX.f)(UU, XU), BU = UU => {
          YU(GU(oU, UU)), pU(UU), SU.k.setItem("lastBoardTextSize", UU)
        }, ZU = () => {
          cU(), aU && oU === gU.text && NU === gU.textSize || DU.gameBridge.send("writeOnBoard", {
            pos: QU,
            text: oU,
            textSize: NU
          })
        };
        (0, LU.b)("boardEditRequested", (UU => {
          var yU, QU;
          if (!OU.featureFlags.canSeePlayerWrittenText) return;
          if (null === UU) return FU(null), void(XU && cU());
          const {
            pos: AU,
            noticeboardSpan: oU,
            text: DU
          } = UU;
          FU(AU), tU(oU), YU(DU);
          const EU = null !== (yU = null !== (QU = UU.textSize) && void 0 !== QU ? QU : SU.k.getItem("lastBoardTextSize")) && void 0 !== yU ? yU : 0;
          pU(EU), kU({
            text: DU,
            textSize: EU
          }), SU.k.setItem("lastBoardTextSize", EU), zU()
        }));
        const RU = (0, yU.useRef)(null);
        JX(RU, XU), (0, bX.q)(RU, {
          kind: "sign",
          submit: ZU
        });
        const PU = function(UU, XU) {
            const zU = VX.c[UU];
            if (!XU) return zU.uiFontSize;
            const {
              numLines: cU,
              charsPerLine: yU
            } = (0, VX.v)(XU.width, XU.height, UU);
            return zU.uiFontSize * Math.min(zU.charsPerLine / yU, zU.numLines / cU)
          }(NU, aU),
          WU = KX(PU);
        return (0, EU.jsxs)(AU.c, {
          className: "WriteOnBoardBg",
          close: ZU,
          escDoesExit: !0,
          show: XU,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, EU.jsx)(jX, {
            isInputActive: () => XU,
            onClose: ZU,
            onChange: UU => {
              YU(GU(UU.target.value, NU))
            },
            textAreaRef: RU,
            fontSize: PU,
            lineHeight: WU,
            currText: oU
          }), (0, EU.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, EU.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, EU.jsx)(IU.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                BU(0)
              },
              disabled: 0 === NU,
              children: "Small"
            }), (0, EU.jsx)(IU.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                BU(1)
              },
              disabled: 1 === NU,
              children: "Medium"
            }), (0, EU.jsx)(IU.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                BU(2)
              },
              disabled: 2 === NU,
              children: "Large"
            })]
          })]
        })
      })),
      hX = (0, yU.memo)((function(UU) {
        let {
          show: XU,
          onOpen: zU,
          onClose: cU
        } = UU;
        const [QU, FU] = (0, yU.useState)(""), oU = () => {
          cU(), DU.gameBridge.send("writeNameTag", QU)
        };
        (0, WU.f)("EditNameTag", (UU => {
          OU.featureFlags.canSeePlayerWrittenText && null !== UU && (FU(UU), zU())
        }));
        const YU = (0, yU.useRef)(null);
        JX(YU, XU), (0, bX.q)(YU, {
          kind: "nameTag",
          submit: oU
        });
        const NU = VX.F.nameTag.uiFontSize,
          pU = KX(NU);
        return (0, EU.jsxs)(AU.c, {
          className: "WriteOnBoardBg",
          close: oU,
          escDoesExit: !0,
          show: XU,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, EU.jsx)("div", {
            className: "NameTagTrim",
            children: (0, EU.jsx)(jX, {
              isInputActive: () => XU,
              onClose: oU,
              onChange: UU => {
                const XU = UU.target.value.replaceAll("\n", "");
                FU((0, VX.p)(XU, "nameTag"))
              },
              textAreaRef: YU,
              fontSize: NU,
              lineHeight: pU,
              currText: QU
            })
          }), (0, EU.jsx)(IU.f, {
            onClick: oU,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var Uz = zU(18828);
    const Xz = (0, yU.memo)((function(UU) {
      let {
        show: XU,
        onOpen: zU,
        onClose: cU
      } = UU;
      const [QU, FU] = (0, yU.useState)(""), [oU, YU] = (0, yU.useState)(0), [NU, pU] = (0, yU.useState)(!1), [aU, tU] = (0, yU.useState)(["", "", "", "", "", "", "", "", "", ""]), [gU, kU] = (0, yU.useState)("Title"), [GU, BU] = (0, yU.useState)(!0), [ZU, RU] = (0, yU.useState)(!1);
      (0, WU.f)("EditBook", (UU => {
        let {
          pages: XU,
          title: cU,
          isPublished: yU
        } = UU;
        var QU;
        OU.featureFlags.canSeePlayerWrittenText && (null !== XU ? (tU(XU), FU(null !== (QU = XU[0]) && void 0 !== QU ? QU : ""), kU(cU), YU(0), pU(!1), BU(!yU), RU(!1), zU()) : tU(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const PU = (0, yU.useRef)(null),
        dU = (0, yU.useRef)(null);
      JX(PU, XU), (0, bX.q)(PU, {
        kind: "book"
      }), (0, bX.q)(dU, {
        kind: "YD"
      });
      const LU = VX.F.book.uiFontSize,
        eU = KX(LU),
        CU = () => {
          (GU || ZU) && DU.gameBridge.send("writeBook", {
            pages: [...aU],
            title: gU,
            published: !GU && ZU
          })
        },
        wU = UU => {
          NU && (aU[oU] = QU, pU(!1)), FU(aU[UU]), YU(UU)
        };
      return (0, EU.jsxs)(AU.c, {
        className: "WriteOnBoardBg",
        close: () => {
          cU(), aU[oU] = QU, CU()
        },
        escDoesExit: !0,
        show: XU,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, EU.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, EU.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: gU,
            ref: dU,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${eU}rem`
            },
            onKeyDown: UU => {
              GU && UU.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: UU => {
              let XU = UU.target.value;
              XU = (0, VX.p)(XU, "YD"), kU(XU)
            },
            readOnly: !GU
          }), (0, EU.jsx)("img", {
            src: lX("book_page", sX.j.ITEM, Uz),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, EU.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, EU.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: QU,
              ref: PU,
              style: {
                fontSize: `${LU}rem`,
                lineHeight: `${eU}rem`
              },
              onKeyDown: UU => {
                GU && UU.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: UU => {
                const XU = UU.target.value;
                FU((0, VX.p)(XU, "book")), pU(!0)
              },
              readOnly: !GU
            })
          })]
        }), (0, EU.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, EU.jsx)(IU.f, {
            disabled: 0 === oU,
            onClick: () => {
              wU(oU - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, EU.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, EU.jsx)(IU.f, {
            disabled: 9 === oU,
            onClick: () => {
              wU(oU + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, EU.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, EU.jsx)(IU.f, {
            onClick: () => {
              BU(!GU), RU(!0)
            },
            className: "BookNavButton",
            children: GU ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var zz = zU(37334),
      cz = zU(9256),
      yz = zU(1444),
      Qz = zU(1993);

    function Az(UU) {
      let {
        show: XU,
        buttons: zU
      } = UU;
      const {
        t: cU
      } = (0, jU.I)(), QU = (0, yU.useRef)(null);
      return (0, yU.useEffect)((() => {
        var UU, zU;
        const cU = XU ? (0, zz.y)() : null;
        if (!cU || !(0, yz.n)()) return;
        const yU = (0, zz.o)().findIndex((UU => UU.id === cU));
        (0, cz.p)(null !== (UU = null === (zU = QU.current) || void 0 === zU ? void 0 : zU.children[yU]) && void 0 !== UU ? UU : null)
      }), [XU]), 0 === zU.length ? null : (0, EU.jsx)("div", {
        ref: QU,
        className: "ClientGameInventoryButtons",
        onPointerDown: UU => {
          UU.stopPropagation()
        },
        onPointerUp: UU => {
          UU.stopPropagation()
        },
        children: zU.map((UU => {
          const XU = cU(UU.labelKey);
          return (0, EU.jsxs)(IU.l, {
            className: UU.className,
            disabled: UU.disabled,
            onClick: () => {
              (0, zz.v)(UU)
            },
            ariaLabel: UU.iconOnly ? XU : void 0,
            title: UU.iconOnly ? XU : void 0,
            children: [UU.icon && (0, EU.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === UU.icon.kind && (0, EU.jsx)(Qz.c, {
                itemName: UU.icon.name,
                amount: 0
              }), "image" === UU.icon.kind && (0, EU.jsx)("img", {
                src: UU.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === UU.icon.kind && (0, EU.jsx)(tU.d, {
                name: UU.icon.name
              })]
            }), !UU.iconOnly && XU]
          }, UU.id)
        }))
      })
    }
    var Fz = zU(37478),
      oz = zU(3016),
      Dz = zU(34878),
      Ez = zU(37238),
      Yz = zU(37234),
      Nz = zU(1369);
    let Iz = null;
    window.setShowInventoryAdsOverride = UU => {
      Iz = UU
    };
    const pz = 24e4;
    var az = zU(1998);

    function tz(UU) {
      var XU;
      let {
        draggedInfo: {
          name: zU,
          attributes: cU,
          amount: yU
        },
        toAddRef: QU
      } = UU;
      return (0, EU.jsx)("div", {
        className: "DraggedInvenItem",
        ref: QU,
        children: (0, EU.jsx)(Qz.c, {
          itemName: zU,
          amount: yU,
          enchantmentTier: null === cU || void 0 === cU || null === (XU = cU.customAttributes) || void 0 === XU ? void 0 : XU.enchantmentTier,
          bar: (0, az.g)(cU)
        })
      })
    }

    function gz(UU) {
      let {
        className: XU = "",
        displayInfo: zU,
        domRef: cU
      } = UU;
      return (0, EU.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${XU}`,
        ref: cU,
        children: [(0, EU.jsx)(PU.d, {
          text: (0, dU.tb)(zU.name, {
            fontStyle: zU.fontStyle
          })
        }), (0, EU.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, EU.jsx)(PU.d, {
            text: zU.desc
          })
        })]
      })
    }

    function kz(UU) {
      let {
        info: XU,
        draggedInfo: zU
      } = UU;
      const cU = (0, yU.useRef)(null);
      return (0, yU.useLayoutEffect)((() => {
        const UU = cU.current,
          {
            left: zU,
            top: yU
          } = function(UU, XU, zU, cU) {
            const yU = cU.left * zU.width / 100 + 4,
              QU = zU.width - cU.right * zU.width / 100 - 4 - XU.width,
              AU = cU.top * zU.height / 100 + 4,
              FU = zU.height - 4 - XU.height;
            return {
              left: Math.max(yU, Math.min(UU.x - XU.width / 2, QU)),
              top: Math.max(AU, Math.min(UU.y - 48 - XU.height, FU))
            }
          }({
            x: XU.initTouchX,
            y: XU.initTouchY
          }, {
            width: UU.offsetWidth,
            height: UU.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, MU.e.get("notchSize"));
        UU.style.left = `${zU}px`, UU.style.top = `${yU}px`
      }), [XU]), (0, EU.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: cU,
        children: [(0, EU.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: zU.amount / XU.maxAmount * 100 + "%"
          }
        }), (0, EU.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [zU.amount, "/", XU.maxAmount]
        })]
      })
    }
    var Gz = zU(1106),
      Bz = zU.n(Gz),
      Zz = zU(212);
    const Rz = (0, yU.memo)((function(UU) {
      let {
        show: XU,
        onOpen: zU,
        onClose: cU
      } = UU;
      const QU = (0, yU.useRef)({
          pos: null
        }),
        [FU, oU] = (0, yU.useState)([0, 0, 0, 0]),
        {
          userContext: YU
        } = (0, RU.d)();
      (0, LU.b)("ironChestOpenRequested", (UU => {
        let {
          pos: XU,
          ownerDbId: cU,
          cachedPasskey: yU
        } = UU;
        if (QU.current.pos = XU, cU !== YU.whamm) return null !== yU ? (oU(yU), void NU(yU)) : void zU();
        NU(FU)
      })), (0, LU.b)("localEffectUpdated", (UU => {
        "Thief" === UU && cU()
      }));
      const NU = UU => {
        const {
          pos: XU
        } = QU.current;
        DU.gameBridge.send("openIronChest", {
          pos: XU,
          uA: UU
        })
      };
      return (0, EU.jsx)(AU.c, {
        className: "IronChestPasskeyInputScreenOuter",
        close: cU,
        escDoesExit: !0,
        show: XU,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, EU.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, EU.jsx)(Pz, {
            uA: FU,
            onPasskeyUpdated: oU,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              NU(FU)
            }
          })
        })
      })
    }));

    function Pz(UU) {
      let {
        className: XU = "",
        uA: zU,
        onPasskeyUpdated: cU,
        confirmText: yU,
        onConfirm: QU
      } = UU;
      const {
        t: AU
      } = (0, jU.I)();
      return (0, EU.jsxs)("div", {
        className: `${XU} IronChestPasskeyInput`,
        children: [(0, EU.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: AU("ironChest:passkeyInputTitle")
        }), (0, EU.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(Zz.f.ironChestPasskeyLength).fill(0).map(((UU, XU) => (0, EU.jsx)(Wz, {
            digit: zU[XU],
            onPasskeyDigitUpdated: UU => {
              const yU = [...zU];
              yU[XU] = UU, cU(yU)
            }
          }, XU)))
        }), (0, EU.jsx)(IU.l, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: QU,
          children: AU(yU)
        })]
      })
    }

    function Wz(UU) {
      let {
        digit: XU,
        onPasskeyDigitUpdated: zU
      } = UU;
      return (0, EU.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, EU.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, EU.jsx)(IU.l, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              zU(dU.d.mod(XU + 1, 10))
            },
            children: (0, EU.jsx)(tU.d, {
              name: "angle-up"
            })
          }), (0, EU.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: XU
          }), (0, EU.jsx)(IU.l, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              zU(dU.d.mod(XU - 1, 10))
            },
            children: (0, EU.jsx)(tU.d, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var dz = zU(34875),
      Lz = zU(37535),
      ez = zU(37226);

    function Cz(UU) {
      let {
        specialItemInfo: XU,
        setHovered: zU,
        pointerDown: cU,
        pointerUp: QU,
        enchantingTablePosition: AU,
        enchantingTableBlockName: FU
      } = UU;
      const {
        t: YU
      } = (0, jU.I)(), [NU, pU] = (0, yU.useState)(null), [aU, tU] = (0, yU.useState)(null), gU = (0, oU.f)("auraPerLevel"), kU = Math.floor((0, LU.i)("aura") / gU);
      (0, yU.useEffect)((() => {
        if (!XU) return void pU(null);
        let UU = !0;
        return DU.gameBridge.query("enchantingOffer", {
          slot: XU.idx,
          name: XU.name,
          blockName: FU
        }).then((zU => {
          var cU, yU;
          let {
            perks: QU,
            options: AU
          } = zU;
          if (!UU) return;
          const FU = {
            isEnchantable: QU.length > 0,
            possibleEnchantments: QU,
            options: AU.map((UU => {
              let {
                level: XU,
                odds: zU
              } = UU;
              return {
                level: XU,
                possibilities: Object.fromEntries(zU.map(((UU, XU) => [`Tier ${XU+1}`, UU])))
              }
            })),
            isAlreadyEnchanted: QU.length > 0 && void 0 !== (null === (cU = XU.attributes) || void 0 === cU || null === (yU = cU.customAttributes) || void 0 === yU ? void 0 : yU.enchantmentTier)
          };
          pU(FU), (UU => {
            const XU = UU.options.map((UU => Object.entries(UU.possibilities).map((UU => {
              let [XU, zU] = UU;
              return {
                str: `${XU}: ${zU>0?zU<.01?zU.toPrecision(1):zU.toFixed(2):0}%\n`,
                style: {
                  color: dU.pb[XU]
                }
              }
            }))));
            tU(XU)
          })(FU)
        })), () => {
          UU = !1
        }
      }), [XU, AU, FU]);
      const GU = [];
      for (let yU = 0; yU < Lz.f; yU++) {
        const UU = null === NU || void 0 === NU ? void 0 : NU.options[yU],
          cU = !UU || UU.level > kU;
        GU.push((0, EU.jsx)(IU.f, {
          className: "EnchantmentButton",
          onPointerEnter: UU ? UU => null === zU || void 0 === zU ? void 0 : zU()(!0, {
            name: "",
            desc: aU[yU]
          }, UU) : void 0,
          onPointerLeave: UU ? () => null === zU || void 0 === zU ? void 0 : zU()(!1) : void 0,
          onClick: cU ? void 0 : () => {
            DU.gameBridge.send("enchantItem", {
              slot: XU.idx,
              level: UU.level,
              tablePos: AU
            }), pU(null)
          },
          disabled: cU,
          children: UU ? (0, EU.jsxs)(EU.Fragment, {
            children: [(0, EU.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, EU.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [YU("enchantments:cost"), ": "]
              }), " ", YU("enchantments:levels", {
                level: UU.level
              })]
            }), (0, EU.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, EU.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, EU.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: YU("enchantments:tier")
                }), Object.entries(UU.possibilities).map((UU => {
                  let [XU, zU] = UU;
                  return 0 === zU ? null : (0, EU.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: dU.pb[XU]
                    },
                    children: XU
                  }, XU)
                }))]
              }), (0, EU.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, EU.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: YU("enchantments:odds")
                }), Object.entries(UU.possibilities).map((UU => {
                  let [XU, zU] = UU;
                  return 0 === zU ? null : (0, EU.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: dU.pb[XU]
                    },
                    children: [zU > 0 && zU < .1 ? "<0.1" : zU.toFixed(0 < zU && zU < .95 ? 1 : 0), "%"]
                  }, XU)
                }))]
              })]
            })]
          }) : !1 === (null === NU || void 0 === NU ? void 0 : NU.isEnchantable) ? (0, EU.jsx)("h1", {
            className: "EnchantmentLevels",
            children: YU("enchantments:notEnchantable")
          }) : (0, EU.jsx)("h1", {
            className: "EnchantmentLevels",
            children: YU("enchantments:enterItem")
          })
        }, yU))
      }
      return (0, EU.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, EU.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: FU
        }), (0, EU.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, EU.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, EU.jsx)(ez.e, {
              idx: Yz.e,
              setHovered: UU => {
                null === zU || void 0 === zU || zU(Yz.e)(UU)
              },
              pointerDown: cU,
              pointerUp: QU,
              draggedInfo: null,
              specialItemInfo: XU,
              variation: "Enchanting Table"
            }), NU && NU.possibleEnchantments.length > 0 && (0, EU.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, EU.jsx)("h2", {
                children: "Possible Perks:"
              }), NU.possibleEnchantments.map((UU => (0, EU.jsxs)(yU.Fragment, {
                children: [(0, EU.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, EU.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, EU.jsx)(Qz.c, {
                      itemName: `${UU} Enchantment`,
                      amount: 1
                    })
                  }), (0, EU.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: UU
                  })]
                }), (0, EU.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: YU((0, dz.o)(UU).translationKey)
                })]
              }, UU)))]
            })]
          }), (0, EU.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [NU && NU.isAlreadyEnchanted && (0, EU.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: YU("enchantments:alreadyEnchanted")
            }), GU]
          })]
        })]
      })
    }
    var wz = zU(37538);

    function qz(UU) {
      var XU;
      let {
        specialItemInfo: zU,
        setSpecialItemInfo: cU,
        setHovered: QU,
        pointerDown: AU,
        pointerUp: FU
      } = UU;
      const {
        t: oU
      } = (0, jU.I)(), YU = (0, LU.e)("inventory", (UU => UU.freeSlots)), [NU, pU] = (0, yU.useState)(null);
      (0, yU.useEffect)((() => {
        if (zU) {
          const UU = (0, wz.e)(zU.name, zU.amount);
          pU({
            salvageable: !!UU,
            produces: UU
          })
        } else pU(null)
      }), [zU, null === zU || void 0 === zU ? void 0 : zU.name, null === zU || void 0 === zU ? void 0 : zU.amount]);
      const aU = !!zU && !(null === NU || void 0 === NU || !NU.salvageable) && !(null !== (XU = NU.produces) && void 0 !== XU && XU.some((UU => {
        let {
          amt: XU
        } = UU;
        return XU < 1
      })));
      return (0, EU.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, EU.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: oU("item:salvagingTable")
        }), (0, EU.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, EU.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, EU.jsx)(ez.e, {
              idx: Yz.e,
              setHovered: UU => {
                null === QU || void 0 === QU || QU(Yz.e)(UU)
              },
              pointerDown: AU,
              pointerUp: FU,
              draggedInfo: null,
              specialItemInfo: zU,
              variation: "Salvaging Table"
            })
          }), (0, EU.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, EU.jsx)(IU.f, {
              className: "SalvageButton",
              onClick: aU ? () => {
                const {
                  idx: UU,
                  name: XU,
                  amount: yU
                } = zU;
                DU.gameBridge.send("salvageItem", {
                  slot: UU,
                  name: XU,
                  amount: yU
                }) && (pU(null), cU(null))
              } : void 0,
              disabled: !aU,
              children: NU ? NU.salvageable ? NU.produces.some((UU => {
                let {
                  amt: XU
                } = UU;
                return XU < 1
              })) ? (0, EU.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, EU.jsx)("div", {
                  className: "SalvageText Error",
                  children: oU("salvagingTable:notEnoughResources")
                })
              }) : YU < NU.produces.length ? (0, EU.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, EU.jsx)("div", {
                  className: "SalvageText Error",
                  children: oU("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, EU.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, EU.jsx)("div", {
                  className: "SalvageText",
                  children: oU("salvagingTable:salvage")
                }), (0, EU.jsx)("div", {
                  className: "SalvageIcons",
                  children: NU.produces.map(((UU, XU) => {
                    let {
                      item: zU,
                      amt: cU
                    } = UU;
                    return (0, EU.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, EU.jsx)(Qz.c, {
                        itemName: zU,
                        amount: Math.floor(cU)
                      })
                    }, XU)
                  }))
                })]
              }) : (0, EU.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, EU.jsx)("div", {
                  className: "SalvageText Error",
                  children: oU("salvagingTable:unsalvageable")
                })
              }) : (0, EU.jsx)(EU.Fragment, {})
            })
          })]
        })]
      })
    }
    var Oz = zU(220),
      Sz = zU(9782),
      rz = zU(2933),
      uz = zU(1726),
      fz = zU(9261),
      iz = zU(9258),
      Hz = zU(1715),
      Mz = zU(2071),
      vz = zU(1457),
      Vz = zU(2139);

    function sz(UU, XU, zU) {
      const cU = UU.trim().toLowerCase();
      if ("" === cU) return 0;
      let yU = null;
      for (const QU of XU) {
        const UU = QU.toLowerCase().indexOf(cU);
        if (0 === UU) return 0;
        UU > 0 && (yU = 1)
      }
      if (null !== yU) return yU;
      for (const QU of zU)
        if (QU.toLowerCase().includes(cU)) return 2;
      return null
    }

    function nz(UU) {
      return UU.map((UU => {
        var XU;
        return UU ? {
          name: UU.name,
          amount: null !== (XU = UU.amount) && void 0 !== XU ? XU : 1
        } : null
      }))
    }

    function mz(UU) {
      return UU < 1e3 ? `${UU}` : UU < 1e4 ? Math.floor(UU / 100) / 10 + "k" : `${Math.floor(UU/1e3)}k`
    }
    var lz = zU(37540);
    const xz = IU.f,
      Jz = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      jz = () => {
        const UU = (0, vz.e)();
        return UU ? UU.getPadRepeatTiming(Jz) : Jz
      };

    function Kz(UU, XU, zU) {
      var cU, yU;
      const QU = (0, Dz.x)(XU, UU);
      let AU = null === (cU = XU[UU]) || void 0 === cU ? void 0 : cU.description;
      if (zU && (null === (yU = (0, lz.g)().get(UU)) || void 0 === yU || !yU.hideIngredients)) {
        AU ? (AU = (0, dU.tb)(AU), AU.push({
          str: "\n"
        })) : AU = [], AU.push({
          str: "\n"
        }), AU.push({
          str: "Can be crafted from:\n"
        });
        for (const UU of zU) "string" === typeof UU && (AU.push({
          icon: UU,
          style: {
            fontSize: "1.5em"
          }
        }), AU.push({
          str: " "
        }), AU.push(...(0, dU.tb)((0, Dz.x)(XU, UU))), AU.push({
          str: "\n"
        }))
      }
      return {
        name: QU,
        desc: AU
      }
    }

    function bz(UU) {
      let {
        name: XU,
        YA: zU
      } = UU;
      return `${XU}_${zU}`
    }

    function Tz(UU) {
      var XU;
      let {
        onClick: zU,
        itemName: cU,
        recipeId: QU,
        isSelected: AU,
        haveIngredients: FU,
        craftable: oU,
        setHovered: DU,
        padActions: YU,
        marked: NU,
        lock: IU,
        itemInfo: pU
      } = UU;
      const aU = (0, yU.useRef)(null);
      return (0, fz.d)(aU, {
        press: UU => !FU || "secondary" === UU && !oU ? (YU.refuse(), !1) : "primary" === UU ? (YU.choose(), !0) : YU.craft(),
        release: YU.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, EU.jsxs)("div", {
        ref: aU,
        className: Bz()("InvenItem", {
          CraftableItemNotEnoughIngredients: !FU && !IU,
          CraftableItemMarked: NU,
          CraftableItemLocked: void 0 !== IU,
          CraftableItemLockedFar: (null !== (XU = null === IU || void 0 === IU ? void 0 : IU.stepsAway) && void 0 !== XU ? XU : 1) > 1
        }),
        "data-recipe-key": QU,
        "data-pad-inventory-default": AU ? "" : void 0,
        onClick: zU,
        style: {
          cursor: AU ? null : "pointer"
        },
        onPointerEnter: UU => {
          null === DU || void 0 === DU || DU(!0, Kz(cU, pU)), !AU && (0, Hz.x)(UU.nativeEvent) && (0, iz.h)() && zU()
        },
        onPointerLeave: () => {
          null === DU || void 0 === DU || DU(!1)
        },
        children: [(0, EU.jsx)(Qz.c, {
          itemName: cU,
          amount: 1
        }), NU && (0, EU.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), IU && (0, EU.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, EU.jsx)(tU.d, {
            name: "lock"
          }), (0, EU.jsx)(PU.d, {
            text: IU.tag
          })]
        })]
      })
    }

    function hz(UU) {
      let {
        idx: XU,
        status: zU,
        shownItem: cU,
        dim: QU,
        onHoverStart: AU,
        onHoverEnd: FU,
        onPadBack: oU
      } = UU;
      const DU = (0, yU.useRef)(null);
      (0, fz.d)(DU, {
        press: () => !1,
        back: oU,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const YU = zU.need > 0 ? Math.min(zU.have / zU.need, 1) : 1;
      return (0, EU.jsxs)("div", {
        ref: DU,
        className: Bz()("CupTile", {
          Short: zU.missing > 0
        }),
        style: {
          width: QU,
          height: QU
        },
        "data-craft-ingredient": XU,
        onPointerEnter: AU,
        onPointerLeave: FU,
        children: [(0, EU.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${YU})`
          }
        }), (0, EU.jsx)(Qz.c, {
          itemName: cU,
          amount: 0
        }), (0, EU.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [mz(zU.have), "/", mz(zU.need)]
        })]
      })
    }

    function Uc(UU) {
      var XU, zU, cU, QU, AU;
      let {
        show: FU,
        recipeItem: {
          name: oU,
          YA: YU,
          requires: NU,
          produces: IU,
          haveIngredients: pU
        },
        detail: aU,
        onCraft: tU,
        setHovered: gU,
        craftButtonRef: kU,
        onPadBack: GU,
        showPadShortcut: BU,
        refusedCount: ZU,
        lock: RU,
        itemInfo: WU
      } = UU;
      const {
        t: dU
      } = (0, jU.I)(), LU = null !== aU && !aU.roomForOne, eU = null !== (XU = null === aU || void 0 === aU ? void 0 : aU.craftAllTimes) && void 0 !== XU ? XU : 0, CU = function(UU, XU) {
        return UU.map((UU => {
          let {
            items: zU,
            amt: cU
          } = UU, yU = 0;
          const QU = [];
          for (const AU of zU) {
            const UU = XU(AU);
            yU += UU, UU > 0 && QU.push(AU)
          }
          return 0 === QU.length && QU.push(zU[0]), {
            shownItems: QU,
            need: cU,
            have: yU,
            missing: Math.max(cU - yU, 0)
          }
        }))
      }(NU, (UU => {
        var XU;
        return null !== (XU = null === aU || void 0 === aU ? void 0 : aU.amounts[UU]) && void 0 !== XU ? XU : 0
      }));
      let wU = "4rem",
        qU = 4;
      3 === NU.length || 4 === NU.length ? wU = "3.75rem" : NU.length >= 5 && (wU = "3rem"), 4 === NU.length ? qU = 2 : NU.length <= 6 && (qU = 3);
      const OU = `calc(${qU} * ${wU} + ${qU-1} * 0.4rem + 1px)`,
        SU = (0, yU.useRef)(null),
        rU = (0, yU.useRef)(null);
      (0, yU.useLayoutEffect)((() => {
        SU.current.scrollTop = 0
      }), [oU, YU]);
      const uU = (0, yU.useRef)(ZU);
      (0, yU.useEffect)((() => {
        if (ZU === uU.current) return;
        uU.current = ZU;
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
        for (const cU of null !== (XU = null === (zU = SU.current) || void 0 === zU ? void 0 : zU.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== XU ? XU : []) {
          var XU, zU;
          cU.animate(UU, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [ZU]);
      const fU = (UU, XU, zU) => {
          var cU;
          if ((0, lz.g)().has(oU)) return void(zU && clearInterval(iU.current));
          const yU = null !== (cU = null === aU || void 0 === aU ? void 0 : aU.resultStackable) && void 0 !== cU && cU,
            QU = nz(DU.gameBridge.latest("inventory").player),
            {
              NA: AU,
              DE: FU,
              amountAddedToSlot: EU
            } = DU.gameBridge.send("craftRecipe", {
              name: oU,
              YA: YU,
              times: XU || UU && yU ? null : 1
            });
          if (AU > 0) {
            const XU = [],
              cU = new Set(NU.flatMap((UU => {
                let {
                  items: XU
                } = UU;
                return XU
              }))),
              AU = function(UU, XU, zU) {
                const cU = [];
                for (let yU = 0; yU < UU.length; yU++) {
                  const QU = UU[yU];
                  if (!QU || !zU.has(QU.name)) continue;
                  const AU = XU[yU],
                    FU = (null === AU || void 0 === AU ? void 0 : AU.name) === QU.name ? AU.amount : 0;
                  FU < QU.amount && cU.push({
                    idx: yU,
                    itemName: QU.name,
                    amount: QU.amount - FU
                  })
                }
                return cU
              }(QU, nz(DU.gameBridge.latest("inventory").player), cU).slice(0, 12),
              YU = zU ? 0 : Math.min(50, 400 / AU.length),
              pU = zU ? 220 : 320;
            for (const UU of AU) {
              var IU;
              const zU = NU.findIndex((XU => {
                  let {
                    items: zU
                  } = XU;
                  return zU.includes(UU.itemName)
                })),
                cU = null === (IU = SU.current) || void 0 === IU ? void 0 : IU.querySelector(`[data-craft-ingredient="${zU}"]`),
                yU = (0, Dz.g)(UU.idx);
              cU && yU && XU.push({
                kind: "ingredient",
                itemName: UU.itemName,
                amount: UU.amount,
                DE: UU.idx,
                from: yU,
                to: (0, Dz.g)(cU),
                delayMs: Math.round(XU.length * YU),
                durationMs: pU
              })
            }
            let aU;
            if (null !== FU && EU > 0 && rU.current) {
              const UU = XU.length > 0 ? XU[XU.length - 1].delayMs + .6 * pU : 0;
              aU = {
                itemName: oU,
                amount: EU,
                DE: FU,
                from: (0, Dz.g)(rU.current),
                delayMs: Math.round(UU)
              }
            }
            tU(aU, UU && !yU ? FU : null, XU), Fz.e.play("wood1", .5).rate(1.75)
          }
        },
        iU = (0, yU.useRef)(null);
      (0, yU.useEffect)((() => () => {
        clearInterval(iU.current)
      }), []);
      const HU = (UU, XU) => {
          fU(UU, !1, !1), clearInterval(iU.current), XU && (iU.current = setTimeout((() => {
            iU.current = setInterval((() => {
              fU(UU, !1, !0)
            }), XU.intervalMs)
          }), XU.initialDelayMs))
        },
        MU = () => {
          clearInterval(iU.current)
        },
        vU = !pU || LU || Boolean(RU),
        VU = (0, yU.useRef)(null),
        sU = null !== (zU = null === (cU = (0, Vz.c)()) || void 0 === cU ? void 0 : cU.hideButtonHints) && void 0 !== zU && zU,
        nU = null !== (QU = null === (AU = (0, vz.e)()) || void 0 === AU ? void 0 : AU.getBoundButton("inventorySecondary")) && void 0 !== QU ? QU : null,
        mU = () => !vU && (fU(!1, !0, !1), !0);
      (0, fz.d)(kU, {
        press: UU => "secondary" === UU ? mU() : !vU && (HU(!1, jz()), !0),
        release: MU,
        back: GU,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, fz.d)(VU, {
        press: mU,
        back: GU,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [lU, xU] = (0, yU.useState)(0), [JU, KU] = (0, yU.useState)(null);
      (0, yU.useEffect)((() => {
        if (!0 === FU) {
          xU(0);
          const UU = setInterval((() => {
            xU((UU => UU + 1))
          }), 1e3);
          return () => {
            clearInterval(UU)
          }
        }
        return () => {}
      }), [FU]);
      const bU = null === aU || void 0 === aU ? void 0 : aU.ingredientsCraftedFrom,
        TU = (0, yU.useRef)(gU);
      (0, yU.useEffect)((() => {
        TU.current = gU
      }), [gU]);
      const hU = !(null === RU || void 0 === RU || !RU.hideIngredients);
      (0, yU.useEffect)((() => {
        var UU, XU;
        if (!JU) return;
        if (hU) return KU(null), void(null === (XU = TU.current) || void 0 === XU || XU.call(TU, !1));
        const zU = JU[lU % JU.length];
        null === (UU = TU.current) || void 0 === UU || UU.call(TU, !0, Kz(zU, WU, null === bU || void 0 === bU ? void 0 : bU[zU]))
      }), [JU, lU, WU, bU, hU]);
      const UX = !!RU,
        XX = (0, yU.useRef)(!1);
      (0, yU.useEffect)((() => {
        var UU;
        UX && (clearInterval(iU.current), hU && XX.current && (XX.current = !1, null === (UU = TU.current) || void 0 === UU || UU.call(TU, !1)))
      }), [UX, hU]);
      const zX = (0, Dz.x)(WU, oU);
      return (0, EU.jsxs)("div", {
        ref: SU,
        className: "CraftableInfo SmallTextBold",
        children: [(0, EU.jsx)("div", {
          className: "CraftableHeader",
          children: (0, EU.jsx)(PU.d, {
            text: zX
          })
        }), !hU && (0, EU.jsx)("div", {
          className: Bz()("CraftableIngredients", {
            Compact: NU.length >= 5
          }),
          style: {
            maxWidth: OU
          },
          children: CU.map(((UU, XU) => {
            const zU = UU.shownItems[lU % UU.shownItems.length];
            return (0, EU.jsx)(hz, {
              idx: XU,
              status: UU,
              shownItem: zU,
              dim: wU,
              onHoverStart: () => {
                KU(UU.shownItems)
              },
              onHoverEnd: () => {
                KU(null), null === gU || void 0 === gU || gU(!1)
              },
              onPadBack: GU
            }, XU)
          }))
        }), RU && (0, EU.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, EU.jsx)(PU.d, {
            text: RU.reason
          })
        }), !RU && (!pU || LU) && (0, EU.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!pU && "Missing ingredients", (0, EU.jsx)("br", {}), LU && "Inventory is full"]
        }), !hU && (0, EU.jsxs)(EU.Fragment, {
          children: [(0, EU.jsxs)(xz, {
            ref: kU,
            className: "DoCraftButton",
            onPointerDown: UU => {
              HU((0, Dz.z)(UU), (0, Hz.x)(UU.nativeEvent) ? jz() : Jz)
            },
            onPointerUp: MU,
            onPointerLeave: MU,
            disabled: vU,
            children: [BU && nU && !vU && !sU && (0, EU.jsx)(Mz.b, {
              className: "CraftShortcutGlyph",
              glyph: nU
            }), (0, EU.jsx)("div", {
              ref: rU,
              className: "DoCraftItem",
              onPointerEnter: () => {
                XX.current = !0, null === gU || void 0 === gU || gU(!0, Kz(oU, WU))
              },
              onPointerLeave: () => {
                XX.current = !1, null === gU || void 0 === gU || gU(!1)
              },
              children: (0, EU.jsx)(Qz.c, {
                itemName: oU,
                amount: IU
              })
            })]
          }), (0, EU.jsxs)(xz, {
            ref: VU,
            className: "DoCraftAllButton",
            onPointerDown: UU => {
              fU((0, Dz.z)(UU), !0, !1)
            },
            disabled: vU,
            children: [(0, EU.jsx)("span", {
              className: "CraftAllLabel",
              children: dU("general:craftAll")
            }), eU > 0 && (0, EU.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", mz(eU)]
            })]
          })]
        })]
      })
    }

    function Xc(UU) {
      let {
        selectedIdx: XU,
        hidden: zU
      } = UU;
      const cU = (0, yz.F)(),
        QU = (0, yU.useRef)(null);
      return (0, yU.useLayoutEffect)((() => {
        const UU = QU.current,
          cU = null === UU || void 0 === UU ? void 0 : UU.parentElement;
        if (!cU || !UU) return;
        const yU = cU.querySelector(".CraftableItems"),
          AU = () => {
            var QU, AU;
            if (zU) return void(UU.style.opacity = "0");
            const FU = null === yU || void 0 === yU ? void 0 : yU.children[XU],
              oU = null === (QU = null !== (AU = null === FU || void 0 === FU ? void 0 : FU.querySelector(".InvenItem")) && void 0 !== AU ? AU : FU) || void 0 === QU ? void 0 : QU.getBoundingClientRect();
            if (!oU || 0 === oU.width) return void(UU.style.opacity = "0");
            const DU = cU.getBoundingClientRect();
            UU.style.opacity = "1", UU.style.width = `${oU.width}px`, UU.style.height = `${oU.height}px`, UU.style.transform = `translate(${oU.left-DU.left+cU.scrollLeft}px, ${oU.top-DU.top+cU.scrollTop}px)`
          };
        AU();
        const FU = new MutationObserver(AU),
          oU = new ResizeObserver(AU);
        return oU.observe(cU), yU && (FU.observe(yU, {
          childList: !0,
          subtree: !0
        }), oU.observe(yU)), () => {
          FU.disconnect(), oU.disconnect()
        }
      }), [XU, zU]), (0, EU.jsx)("div", {
        ref: QU,
        className: Bz()("SelectionReticle", {
          Secondary: cU
        })
      })
    }

    function zc(UU, XU, zU) {
      return UU ? (0, Oz.b)(Sz.h, UU) ? cc(UU, XU, zU) : UU : zU("classicGame:handCrafting")
    }

    function cc(UU, XU, zU) {
      var cU;
      const yU = null === (cU = XU[UU]) || void 0 === cU ? void 0 : cU.displayName;
      if ("string" === typeof yU) return zU(yU);
      const QU = DU.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(yU) ? yU.map((UU => {
        if ("string" === typeof UU) return UU;
        if ("translationKey" in UU) return zU(UU.translationKey, (0, jU.p)(UU.params, QU));
        if ("str" in UU) {
          if ("string" === typeof UU.str) return UU.str;
          if ("translationKey" in UU.str) return zU(UU.str.translationKey, (0, jU.p)(UU.str.params, QU))
        }
        return ""
      })).join("") : yU && "translationKey" in yU ? zU(yU.translationKey, (0, jU.p)(yU.params, QU)) : UU
    }

    function yc(UU, XU) {
      return UU === XU || null !== UU && null !== XU && UU.name === XU.name && UU.YA === XU.YA
    }

    function Qc(UU) {
      var XU, zU, cU;
      let {
        show: QU,
        onCraft: AU,
        dispatchSelectedCraftable: FU,
        selectedCraftable: oU,
        craftingStation: YU,
        setHovered: NU
      } = UU;
      const {
        t: IU
      } = (0, jU.I)(), [pU, aU] = (0, yU.useState)(""), [tU, gU] = (0, yU.useState)(0);
      (0, yU.useEffect)((() => {
        QU || (aU(""), gU((UU => UU + 1)))
      }), [QU]);
      const [kU, GU] = (0, yU.useState)(YU);
      kU !== YU && (GU(YU), "" !== pU && (aU(""), gU((UU => UU + 1))));
      const BU = (0, yU.useRef)(null),
        ZU = (0, yU.useRef)(null),
        RU = (0, iz.k)(),
        PU = RU.showing && "recipe" === RU.kind,
        [WU, dU] = (0, yU.useState)(0),
        eU = null !== YU && void 0 !== YU ? YU : null,
        CU = (0, yU.useRef)(null),
        wU = UU => {
          return !((XU = CU.current) === (zU = UU) || null !== XU && null !== zU && XU.station === zU.station && yc(XU.recipe, zU.recipe)) && (CU.current = UU, DU.gameBridge.send("focusCrafting", UU), !0);
          var XU, zU
        };
      wU(QU ? {
        station: eU,
        recipe: (null === (XU = CU.current) || void 0 === XU ? void 0 : XU.station) === eU ? CU.current.recipe : null
      } : null);
      let qU = DU.gameBridge.latest("crafting");
      const OU = (0, LU.i)("itemInfo"),
        SU = "" !== pU.trim(),
        rU = (0, lz.B)(),
        uU = (0, lz.A)(),
        fU = (0, lz.F)(),
        iU = function(UU, XU) {
          const [zU, cU] = (0, yU.useState)(!1);
          (0, yU.useEffect)((() => {
            if (!UU) return void cU(!1);
            const XU = setTimeout((() => {
              cU(!0)
            }), 0);
            return () => {
              clearTimeout(XU)
            }
          }), [UU]);
          const QU = UU && zU,
            AU = (0, yU.useRef)({
              station: XU,
              at: new Map
            });
          return (AU.current.station !== XU || !QU && AU.current.at.size > 0) && (AU.current = {
            station: XU,
            at: new Map
          }), QU ? AU.current.at : null
        }(QU, YU);
      let HU = qU.recipes.filter((UU => {
        let {
          listed: XU
        } = UU;
        return XU
      }));
      if (SU) {
        const UU = [];
        for (const XU of qU.recipes) {
          var MU;
          const zU = null !== (MU = uU.get(XU.name)) && void 0 !== MU && MU.hideIngredients ? [] : XU.requires.flatMap((UU => {
              let {
                items: XU
              } = UU;
              return XU.flatMap((UU => [UU, cc(UU, OU, IU)]))
            })),
            cU = sz(pU, [XU.name, cc(XU.name, OU, IU)], zU);
          null !== cU && UU.push({
            item: XU,
            rank: cU
          })
        }
        UU.sort(((UU, XU) => UU.rank - XU.rank)), HU = UU.map((UU => {
          let {
            item: XU
          } = UU;
          return XU
        }))
      } else {
        if (iU && iU.size > 0) {
          const UU = qU.recipes.filter((UU => !UU.listed && iU.has(bz(UU))));
          HU = HU.concat(UU)
        }
        HU = (0, lz.j)(HU, rU, uU, fU), iU && (HU = (0, lz.i)(HU, iU, bz))
      }
      const vU = UU => HU.find((XU => bz(XU) === UU)),
        VU = `${YU}|${pU}`,
        [sU, nU] = (0, yU.useState)(null),
        mU = (null === sU || void 0 === sU ? void 0 : sU.context) === VU ? sU.key : null,
        lU = oU ? bz(oU) : null,
        xU = null !== (zU = null !== (cU = vU(lU)) && void 0 !== cU ? cU : vU(mU)) && void 0 !== zU ? zU : HU[0],
        JU = xU ? bz(xU) : null,
        KU = xU ? {
          name: xU.name,
          YA: xU.YA
        } : null;
      QU && wU({
        station: eU,
        recipe: KU
      }) && (qU = DU.gameBridge.latest("crafting")), JU !== lU && JU !== mU && nU(JU ? {
        context: VU,
        key: JU
      } : null), (0, yU.useEffect)((() => () => {
        CU.current = null, DU.gameBridge.send("focusCrafting", null)
      }), []);
      const bU = yc(qU.detail, KU) ? qU.detail : null,
        TU = null !== bU && !bU.roomForOne,
        hU = HU.findIndex((UU => bz(UU) === bz(xU))),
        UX = () => ZU.current ? (0, fz.b)(ZU.current) : null,
        XX = (0, yU.useRef)(null),
        zX = (0, yU.useRef)(0);
      zX.current++;
      const cX = zX.current;
      (0, yU.useEffect)((() => {
        const UU = XX.current;
        if (!UU || cX <= UU.afterRender) return;
        if (XX.current = null, UU.key !== JU) return;
        const XU = UX();
        var zU;
        null !== XU && void 0 !== XU && XU.press("primary") && !UU.uD && (null === (zU = XU.release) || void 0 === zU || zU.call(XU))
      }));
      const yX = UU => {
          const XU = {
            name: UU.name,
            YA: UU.YA
          };
          return {
            choose: () => {
              FU(XU), (0, cz.p)(ZU.current)
            },
            craft: () => {
              var UU, zU;
              return FU(XU), bz(XU) !== bz(xU) ? (XX.current = {
                key: bz(XU),
                uD: !0,
                afterRender: zX.current
              }, !0) : null !== (UU = null === (zU = UX()) || void 0 === zU ? void 0 : zU.press("primary")) && void 0 !== UU && UU
            },
            stopCraft: () => {
              var UU, XU;
              XX.current ? XX.current.uD = !1 : null === (UU = UX()) || void 0 === UU || null === (XU = UU.release) || void 0 === XU || XU.call(UU)
            },
            refuse: () => {
              bz(XU) !== bz(xU) && FU(XU), dU((UU => UU + 1))
            }
          }
        },
        QX = () => {
          var UU, XU, zU;
          (0, cz.p)(null !== (UU = null === (XU = BU.current) || void 0 === XU || null === (zU = XU.querySelector(".CraftableItems")) || void 0 === zU ? void 0 : zU.children[hU]) && void 0 !== UU ? UU : null)
        },
        AX = HU.map(bz).join("|"),
        FX = (0, yU.useRef)(AX);
      return (0, yU.useEffect)((() => {
        FX.current !== AX && (FX.current = AX, PU && hU >= 0 && (0, iz.h)() && QX())
      })), (0, EU.jsxs)("div", {
        className: "Craftables",
        children: [(0, EU.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: zc(YU, OU, IU)
        }), (0, EU.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, EU.jsx)(uz.e, {
            className: "CraftingSearch",
            placeholderText: IU("general:searchRecipes"),
            defaultValue: pU,
            maxLength: 100,
            onValueChange: UU => {
              aU(UU)
            },
            blurOnEnter: !0
          }, tU), 0 === HU.length && SU && (0, EU.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: IU("general:noRecipesMatchSearch")
          }), HU.length > 0 && (0, EU.jsxs)(EU.Fragment, {
            children: [(0, EU.jsxs)("div", {
              ref: BU,
              className: "CraftablesLeftSide",
              children: [(0, EU.jsx)(rz.d, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(HU.map((UU => {
                  let {
                    name: XU,
                    YA: zU,
                    haveIngredients: cU
                  } = UU;
                  return {
                    name: XU,
                    YA: zU,
                    haveIngredients: cU
                  }
                })))],
                observing: QU,
                children: HU.map((UU => {
                  const {
                    name: XU,
                    YA: zU,
                    haveIngredients: cU
                  } = UU, yU = bz(UU);
                  return (0, EU.jsx)(Tz, {
                    recipeId: yU,
                    itemName: XU,
                    onClick: () => {
                      FU({
                        name: XU,
                        YA: zU
                      })
                    },
                    isSelected: bz(xU) === yU,
                    haveIngredients: cU,
                    craftable: cU && !uU.has(XU) && !(bz(xU) === yU && TU),
                    setHovered: NU,
                    padActions: yX(UU),
                    marked: rU.has(XU),
                    lock: uU.get(XU),
                    itemInfo: OU
                  }, yU)
                }))
              }), (0, EU.jsx)(Xc, {
                selectedIdx: hU,
                hidden: PU && RU.steppingSlots
              })]
            }), (0, EU.jsx)(Uc, {
              show: QU,
              recipeItem: xU,
              detail: bU,
              onCraft: AU,
              setHovered: NU,
              craftButtonRef: ZU,
              onPadBack: QX,
              showPadShortcut: PU,
              refusedCount: WU,
              lock: uU.get(xU.name),
              itemInfo: OU
            })]
          })]
        })]
      })
    }
    var Ac = zU(34884),
      Fc = zU(3660),
      oc = zU(2177),
      Dc = zU(9245);
    class Ec {
      constructor(UU, XU, zU) {
        this.commit = UU, this.delayMs = XU, this.defers = zU, this.pending = null, this.timer = void 0, this.uD = !1, this.flush = () => {
          clearTimeout(this.timer);
          const UU = this.pending;
          null !== UU && (this.pending = null, this.commit(UU))
        }
      }
      type(UU) {
        this.pending = UU, clearTimeout(this.timer), this.uD || this.defers() ? this.uD || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(UU) {
        var XU;
        return null !== (XU = this.pending) && void 0 !== XU ? XU : UU
      }
      isHeld() {
        return this.uD
      }
      setHeld(UU) {
        this.uD = UU, UU || this.flush()
      }
    }

    function Yc(UU) {
      return null === UU ? "creativeInventory:all" : `creativeInventory:${UU}`
    }

    function Nc(UU) {
      let {
        category: XU
      } = UU;
      return null === XU ? (0, EU.jsx)(tU.d, {
        name: "layer-group"
      }) : (0, EU.jsx)(Qz.c, {
        itemName: Ac.creativeItemCategoryIcons[XU],
        amount: 0
      })
    }

    function Ic(UU) {
      let {
        labelKey: XU,
        isSelected: zU,
        onSelect: cU,
        setHovered: yU,
        children: QU
      } = UU;
      return (0, EU.jsx)("div", {
        className: Bz()("CreativeCategoryTab", {
          Selected: zU
        }),
        onClick: cU,
        onPointerEnter: UU => {
          (0, Dz.t)(UU) || yU(!0, {
            name: {
              translationKey: XU
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          yU(!1)
        },
        children: QU
      })
    }

    function pc(UU) {
      let {
        categories: XU,
        selectedCategory: zU,
        onSelect: cU
      } = UU;
      const {
        t: QU
      } = (0, jU.I)(), [AU, FU] = (0, yU.useState)(!1), oU = (0, yU.useRef)(null), DU = (0, yU.useCallback)((() => {
        FU(!1)
      }), []);
      return (0, oc.e)(oU, DU), (0, EU.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: oU,
        children: [(0, EU.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            FU(!AU)
          },
          children: [(0, EU.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, EU.jsx)(Nc, {
              category: zU
            })
          }), (0, EU.jsx)("span", {
            children: QU(Yc(zU))
          }), (0, EU.jsx)(tU.d, {
            name: AU ? "caret-up" : "caret-down"
          })]
        }), AU && (0, EU.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: XU.map((UU => (0, EU.jsxs)("div", {
            className: Bz()("CreativeCategoryDropdownOption", {
              Selected: zU === UU
            }),
            onClick: () => {
              cU(UU), FU(!1)
            },
            children: [(0, EU.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, EU.jsx)(Nc, {
                category: UU
              })
            }), (0, EU.jsx)("span", {
              children: QU(Yc(UU))
            })]
          }, null !== UU && void 0 !== UU ? UU : "all")))
        })]
      })
    }
    const ac = (0, yU.memo)((function(UU) {
      let {
        creativeScrollDiv: XU,
        playerInvenNumSlots: zU,
        getSetHoveringForIdx: cU,
        getPointerDownForIdx: QU,
        getPointerUpForIdx: AU,
        creativeSearchVal: FU,
        setCreativeSearchVal: YU,
        creativeCategory: NU,
        setCreativeCategory: IU,
        show: pU
      } = UU;
      const {
        t: aU
      } = (0, jU.I)(), gU = (0, LU.i)("creativeVisibility"), {
        userContext: kU
      } = (0, RU.d)(), GU = (0, oU.f)("canUseDevCreativeItems"), BU = kU.playerHasRank("developer") || !!GU, ZU = (0, yU.useMemo)((() => gc("", gU, BU)), [gU, BU]);
      (0, yU.useEffect)((() => {
        const UU = (0, Ac.creativeItemIds)();
        DU.gameBridge.send("prewarmCreativeIcons", ZU.filter((XU => !(0, Ac.showOnlyInCreativeCategory)(UU[XU]))).slice(0, 63).map((XU => String(UU[XU]))))
      }), [ZU]);
      const PU = (0, yU.useMemo)((() => {
          const UU = (0, Ac.creativeItemIds)(),
            XU = new Set(ZU.map((XU => (0, Ac.creativeCategoryOf)(UU[XU]))));
          return Ac.creativeItemCategories.filter((UU => XU.has(UU)))
        }), [ZU]),
        dU = null !== NU && PU.includes(NU) ? NU : null,
        eU = (0, yU.useMemo)((() => "" === FU ? ZU : gc(FU, gU, BU)), [ZU, FU, gU, BU]),
        CU = (0, yU.useMemo)((() => {
          const UU = (0, Ac.creativeItemIds)();
          return null !== dU ? eU.filter((XU => (0, Ac.creativeCategoryOf)(UU[XU]) === dU)) : "" === FU ? eU.filter((XU => !(0, Ac.showOnlyInCreativeCategory)(UU[XU]))) : eU
        }), [eU, dU, FU]),
        wU = cU();

      function qU(UU) {
        IU(UU), XU.current.scrollTop = 0
      }
      const OU = [null, ...PU],
        {
          isTouchScreen: SU
        } = (0, MU.q)(["isTouchScreen"]),
        rU = !SU,
        uU = (0, yU.useRef)(null),
        [fU, iU] = (0, yU.useState)(0);
      (0, yU.useEffect)((() => {
        const UU = uU.current;
        if (!UU) return;
        const XU = new ResizeObserver((UU => {
          iU(UU[0].contentRect.height)
        }));
        return XU.observe(UU), () => {
          XU.disconnect()
        }
      }), [rU]);
      const HU = (0, yU.useRef)(null),
        vU = (0, yU.useCallback)((function UU() {
          "up" === HU.current ? XU.current.scrollTop -= 10 : "down" === HU.current && (XU.current.scrollTop += 10), HU.current && requestAnimationFrame(UU)
        }), [XU]),
        VU = (0, yU.useCallback)((function(UU) {
          HU.current || (HU.current = UU, vU())
        }), [vU]);

      function sU() {
        HU.current = null
      }
      const nU = (0, yU.useRef)({
        creativeSearchVal: FU,
        setCreativeSearchVal: YU
      });
      nU.current = {
        creativeSearchVal: FU,
        setCreativeSearchVal: YU
      };
      const [mU] = (0, yU.useState)((() => new Ec((UU => {
        nU.current.setCreativeSearchVal(UU)
      }), 250, yz.n))), lU = UU => {
        var zU;
        null === (zU = XU.current) || void 0 === zU || zU.classList.toggle("CreativeItemSlotsStale", UU)
      };
      (0, WU.f)(Dc.c, (UU => {
        mU.setHeld(UU), UU || lU(!1)
      })), (0, yU.useEffect)((() => mU.flush), [mU]);
      const xU = (0, EU.jsx)(uz.e, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: FU,
          maxLength: 1e4,
          onValueChange: (UU, XU) => {
            "" === mU.getTyped(nU.current.creativeSearchVal) && "" !== UU && IU(null), mU.type(UU), lU(mU.isHeld())
          },
          onEnter: mU.flush,
          blurOnEnter: !0
        }),
        JU = (0, EU.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [SU && (0, EU.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, EU.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                VU("up")
              },
              onPointerLeave: sU,
              onPointerUp: sU,
              children: (0, EU.jsx)(tU.d, {
                name: "arrow-up"
              })
            }), (0, EU.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                VU("down")
              },
              onPointerLeave: sU,
              onPointerUp: sU,
              children: (0, EU.jsx)(tU.d, {
                name: "arrow-up"
              })
            })]
          }), (0, EU.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: XU,
            children: [0 === CU.length && "" !== FU && (0, EU.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: aU("general:noResults")
            }), (0, EU.jsx)(rz.d, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [FU, dU],
              observerRoot: "CreativeItemSlots",
              observing: pU,
              children: CU.map((UU => {
                const XU = zU + UU;
                return (0, EU.jsx)(ez.e, {
                  idx: XU,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: cU(XU),
                  pointerDown: QU(XU),
                  pointerUp: AU(XU)
                }, XU)
              }))
            })]
          })]
        });
      return (0, EU.jsxs)("div", {
        className: Bz()("CreativeItemSlotsWrapper", rU ? "WithRail" : "WithDropdown"),
        children: [rU && (0, EU.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: uU,
          style: {
            "--rail-height": fU > 0 ? `${fU}px` : void 0,
            "--tab-rows": Math.ceil(OU.length / 2)
          },
          children: OU.map((UU => (0, EU.jsx)(Ic, {
            labelKey: Yc(UU),
            isSelected: dU === UU,
            onSelect: () => {
              qU(UU)
            },
            setHovered: wU,
            children: (0, EU.jsx)(Nc, {
              category: UU
            })
          }, null !== UU && void 0 !== UU ? UU : "all")))
        }), (0, EU.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, EU.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [xU, !rU && (0, EU.jsx)(pc, {
              categories: OU,
              selectedCategory: dU,
              onSelect: qU
            })]
          }), JU]
        })]
      })
    }));

    function tc(UU) {
      var XU;
      return null !== (XU = (0, Fc.f)(UU)) && void 0 !== XU ? XU : ""
    }

    function gc(UU, XU, zU) {
      let {
        publicLobby: cU,
        shownInGame: yU
      } = XU;
      const QU = UU.toLowerCase(),
        AU = (0, Ac.creativeItemIds)(),
        FU = UU => {
          var XU;
          const QU = AU[UU];
          return !(0, Ac.itemIsDisabled)(QU, cU, null === (XU = yU[tc(QU)]) || void 0 === XU || XU, zU)
        };
      if ("" === QU) return AU.map(((UU, XU) => XU)).filter((UU => !(0, Ac.showOnlyInCreativeSearch)(AU[UU]))).filter(FU);
      const oU = [];
      for (let DU = 0; DU < AU.length; DU++) tc(AU[DU]).toLowerCase().includes(QU) && oU.push(DU);
      oU.sort(((UU, XU) => {
        const zU = tc(AU[UU]).toLowerCase(),
          cU = tc(AU[XU]).toLowerCase();
        return zU.indexOf(QU) - cU.indexOf(QU)
      }));
      for (const [DU, EU] of(0, Ac.creativeAltNames)())
        for (const UU of EU)
          if (UU.toLowerCase().includes(QU)) {
            const UU = AU.indexOf(DU);
            oU.includes(UU) || oU.push(UU)
          } return oU.filter(FU)
    }
    var kc = zU(37550),
      Gc = zU(646);

    function Bc(UU) {
      return UU > Gc.k
    }

    function Zc(UU) {
      const XU = UU / 2,
        zU = [];
      for (let cU = 0; cU < XU / 6; cU++)
        for (let UU = 0; UU < 12; UU++) {
          const yU = UU < 6 ? 0 : XU;
          zU.push(yU + 6 * cU + UU % 6)
        }
      return zU
    }

    function Rc(UU) {
      let {
        numSlots: XU,
        renderSlot: zU
      } = UU;
      const {
        t: cU
      } = (0, jU.I)(), QU = (0, yU.useRef)(null);
      var AU;
      return AU = QU, (0, yU.useLayoutEffect)((() => {
        var UU;
        const XU = null === (UU = AU.current) || void 0 === UU ? void 0 : UU.closest(".InvenBody");
        if (!XU) return;
        const zU = () => {
          XU.style.zoom = "";
          const UU = parseFloat(getComputedStyle(document.documentElement).fontSize),
            zU = window.innerWidth - 2 * UU,
            cU = XU.getBoundingClientRect().width;
          cU > zU && (XU.style.zoom = "" + zU / cU)
        };
        return zU(), window.addEventListener("resize", zU), () => {
          window.removeEventListener("resize", zU), XU.style.zoom = ""
        }
      }), [AU]), (0, EU.jsxs)("div", {
        ref: QU,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, EU.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: cU("doubleChest:title")
        }), (0, EU.jsx)("div", {
          className: "GridItemSlots",
          children: Zc(XU).map((UU => zU(UU)))
        })]
      })
    }

    function Pc(UU) {
      let {
        jU: XU,
        initialPasskey: zU
      } = UU;
      const {
        t: cU
      } = (0, jU.I)(), [QU, AU] = (0, yU.useState)(zU), [FU, oU] = (0, yU.useState)(zU);
      (0, yU.useEffect)((() => {
        AU(zU), oU(zU)
      }), [...XU]);
      return (0, EU.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, EU.jsx)("div", {
          className: "SmallTextBold",
          children: cU("ironChest:currentPasskey", {
            currentPasskey: QU.join("")
          })
        }), (0, EU.jsx)(Pz, {
          className: "IronChestPasskeyEditor",
          uA: FU,
          onPasskeyUpdated: oU,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            DU.gameBridge.send("changeIronChestPasskey", {
              pos: [...XU],
              uA: [...FU]
            }), AU([...FU])
          }
        })]
      })
    }

    function Wc(UU, XU) {
      return "Iron" === UU.type && UU.ironChest.ownerDbId === XU
    }

    function dc(UU) {
      let {
        variation: XU,
        canCraft: zU,
        show: cU,
        creativeMounted: yU,
        specialItemRef: QU,
        draggedInfo: AU,
        getSetHovering: FU,
        getPointerDownForIdx: oU,
        getPointerUpForIdx: DU,
        enchantingTablePosition: YU,
        enchantingTableBlockName: NU,
        selectedCraftable: IU,
        dispatchSelectedCraftable: pU,
        creativeScrollDiv: aU,
        creativeSearchVal: tU,
        setCreativeSearchVal: gU,
        creativeCategory: kU,
        setCreativeCategory: GU,
        onCraft: BU
      } = UU;
      const {
        userContext: ZU
      } = (0, RU.d)(), {
        t: PU
      } = (0, jU.I)(), WU = (0, LU.e)("inventory", (UU => UU.chest)), dU = (0, LU.e)("inventory", (UU => UU.player.length)), eU = (0, LU.e)("inventory", (UU => UU.creative));
      if (0 === dU) return null;
      let CU, wU;
      const qU = UU => {
          const XU = dU + UU;
          return (0, EU.jsx)(ez.e, {
            idx: XU,
            draggedInfo: AU,
            specialItemInfo: QU.current,
            setHovered: FU(XU),
            pointerDown: oU(XU),
            pointerUp: DU(XU)
          }, XU)
        },
        OU = WU ? (0, kc.b)(WU.type) : null;
      if (OU) CU = Bz()("InvenLeftSideChestCustom", OU.className), wU = (0, EU.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: OU.render({
          jU: WU.pos,
          renderSlot: qU
        })
      });
      else if (WU) {
        const UU = WU.pos,
          XU = "Iron" === WU.type || "Moonstone" === WU.type ? WU.type : "Standard";
        CU = `InvenLeftSideChest${XU}`;
        const zU = Bc(WU.numSlots);
        wU = (0, EU.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [Wc(WU, ZU.whamm) && (0, EU.jsx)(Pc, {
            jU: UU,
            initialPasskey: WU.ironChest.uA
          }), zU && (0, EU.jsx)(Rc, {
            numSlots: WU.numSlots,
            renderSlot: qU
          }), !zU && (0, EU.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, EU.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: PU("Moonstone" === XU ? "item:moonstoneChest" : "Iron" === XU ? "item:ironChest" : "item:chest")
            }), (0, EU.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(WU.numSlots).fill(0).map(((UU, XU) => qU(XU)))
            })]
          })]
        })
      } else if (!eU || XU && zU)
        if (zU && "Enchanting Table" === XU) CU = `InvenLeftSide${(null!==NU&&void 0!==NU?NU:"").replace(/ /gi,"")}`, wU = (0, EU.jsx)(Cz, {
          specialItemInfo: QU.current,
          setHovered: FU,
          pointerDown: oU(Yz.e),
          pointerUp: DU(Yz.e),
          enchantingTablePosition: YU,
          enchantingTableBlockName: NU
        });
        else if (zU && "Salvaging Table" === XU) CU = "InvenLeftSideSalvagingTable", wU = (0, EU.jsx)(qz, {
        specialItemInfo: QU.current,
        setSpecialItemInfo: UU => {
          QU.current = UU
        },
        setHovered: FU,
        pointerDown: oU(Yz.e),
        pointerUp: DU(Yz.e)
      });
      else {
        if (!zU) return null;
        CU = `InvenLeftSide${(null!==XU&&void 0!==XU?XU:"HandCrafting").replace(/ /gi,"")}`, wU = (0, EU.jsx)(Qc, {
          show: cU,
          onCraft: BU,
          craftingStation: XU,
          selectedCraftable: IU,
          dispatchSelectedCraftable: pU,
          setHovered: FU()
        })
      } else CU = "InvenLeftSideCreative", wU = yU ? (0, EU.jsx)(ac, {
        creativeScrollDiv: aU,
        playerInvenNumSlots: dU,
        getSetHoveringForIdx: FU,
        getPointerDownForIdx: oU,
        getPointerUpForIdx: DU,
        creativeSearchVal: tU,
        setCreativeSearchVal: gU,
        creativeCategory: kU,
        setCreativeCategory: GU,
        show: cU
      }) : null;
      const SU = !!WU || zU && !!XU;
      return (0, EU.jsx)("div", {
        className: `InvenLeftSide ${CU}`,
        "data-pad-inventory-start": SU ? "" : void 0,
        children: wU
      })
    }
    var Lc = zU(633),
      ec = zU(20799),
      Cc = zU(20806),
      wc = zU(20811);
    const qc = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: zU(20818)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: Cc
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: wc
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: zU(20825)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: ec
      }
    };

    function Oc(UU) {
      const {
        sprite: XU,
        image: zU
      } = qc[UU];
      return lX(XU, sX.j.ITEM, zU)
    }

    function Sc(UU) {
      let {
        draggedInfo: XU,
        specialItemInfo: zU,
        craftFlyAnims: cU,
        getSetHovering: yU,
        getPointerDownForIdx: QU,
        getPointerUpForIdx: AU,
        variation: FU,
        canCraft: oU,
        isNewSlot: DU
      } = UU;
      const YU = (0, LU.e)("inventory", (UU => UU.player.length));
      return 0 === YU ? null : (0, EU.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, EU.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(Lc.d.length).fill(0).map(((UU, NU) => {
            const IU = YU - Lc.d.length + NU;
            return (0, EU.jsx)(ez.e, {
              idx: IU,
              draggedInfo: XU,
              specialItemInfo: zU,
              craftFlyHoldbackInfo: (0, Ez.h)(cU, IU),
              setHovered: yU(IU),
              pointerDown: QU(IU),
              pointerUp: AU(IU),
              defaultIconB64: Oc(Lc.d[NU]),
              variation: oU ? FU : void 0,
              showNewDot: DU(IU)
            }, IU)
          }))
        }), (0, EU.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(YU - 10 - Lc.d.length).fill(0).map(((UU, NU) => {
            const IU = YU - Lc.d.length - NU - 1;
            return (0, EU.jsx)(ez.e, {
              idx: IU,
              draggedInfo: XU,
              specialItemInfo: zU,
              craftFlyHoldbackInfo: (0, Ez.h)(cU, IU),
              setHovered: yU(IU),
              pointerDown: QU(IU),
              pointerUp: AU(IU),
              variation: oU ? FU : void 0,
              showNewDot: DU(IU)
            }, IU)
          }))
        })]
      })
    }
    var rc = zU(37557),
      uc = zU(37562);

    function fc(UU) {
      const {
        e: XU,
        idx: zU
      } = UU, cU = (0, Dz.k)(UU.readInventory(), zU), yU = (0, Dz.p)(XU);
      zU === Yz.d ? function(UU, XU) {
        const {
          draggedInfoRef: zU,
          removeItem: cU,
          removeDraggedInfoRef: yU,
          close: QU
        } = UU;
        if (zU.current) {
          const UU = XU && zU.current.amount || 1;
          cU(zU.current.idx, UU, !0) && (zU.current.amount -= UU, zU.current.amount <= 0 && yU())
        } else XU && QU()
      }(UU, yU) : zU === Yz.e ? function(UU, XU) {
        const {
          e: zU,
          draggedInfoRef: cU,
          specialItemRef: yU,
          moveAmtIntoSlot: QU,
          removeDraggedInfoRef: AU
        } = UU;
        if ((0, Dz.z)(zU) && yU.current) yU.current = null;
        else if (cU.current && yU.current && (cU.current.idx === yU.current.idx || (0, uc.d)(cU.current, yU.current)) && cU.current.amount > 0 && yU.current.amount > 0 && yU.current.amount < Zz.f.maxItemStackSize)
          if (cU.current.idx === yU.current.idx) {
            if (XU) {
              const UU = Math.min(cU.current.amount, Zz.f.maxItemStackSize - yU.current.amount);
              yU.current.amount += UU, cU.current.amount -= UU
            } else cU.current.amount--, yU.current.amount++;
            cU.current.amount <= 0 && AU()
          } else if (XU) {
          const UU = Math.min(cU.current.amount, Zz.f.maxItemStackSize - yU.current.amount);
          QU(yU.current.idx, UU) && (yU.current.amount += UU)
        } else {
          QU(yU.current.idx, 1) && yU.current.amount++
        } else if (cU.current && !yU.current && !XU && cU.current.amount > 0) cU.current.amount--, yU.current = {
          idx: cU.current.idx,
          name: cU.current.name,
          attributes: cU.current.attributes,
          amount: 1
        }, cU.current.amount <= 0 && AU();
        else {
          const UU = cU.current;
          cU.current = yU.current, yU.current = UU
        }
      }(UU, yU) : (0, Dz.z)(XU) ? function(UU, XU) {
        var zU, cU;
        const {
          idx: yU,
          draggedInfoRef: QU,
          specialItemRef: AU,
          canCraft: FU,
          variation: oU,
          swapSlots: DU,
          moveIntoSlots: EU
        } = UU;
        if (!XU) return;
        let YU = XU.amount;
        yU === (null === (zU = QU.current) || void 0 === zU ? void 0 : zU.idx) && (YU = QU.current.amount <= 0 ? 0 : XU.amount - QU.current.amount);
        yU === (null === (cU = AU.current) || void 0 === cU ? void 0 : cU.idx) && (YU = AU.current.amount <= 0 ? 0 : XU.amount - AU.current.amount);
        if (0 === YU) return;
        const NU = UU.readInventory(),
          IU = NU.player.length,
          pU = NU.chest,
          aU = IU - Lc.d.length,
          tU = () => {
            if (!(0, yz.n)()) return void EU(10, aU, yU, YU);
            const UU = UU => {
              const zU = (0, Dz.k)(NU, UU);
              return zU ? {
                amount: zU.amount,
                stacksWithMoved: (0, uc.d)(zU, XU)
              } : null
            };
            for (const XU of ((UU, XU, zU, cU, yU) => {
                const QU = [];
                let AU = cU;
                if (null !== cU) {
                  let FU = 0;
                  for (let cU = XU; cU < zU; cU++) {
                    const XU = UU(cU);
                    null !== XU && void 0 !== XU && XU.stacksWithMoved && null !== XU.amount && XU.amount > 0 && (FU += Math.max(0, yU - XU.amount))
                  }
                  const oU = Math.min(cU, FU);
                  if (oU > 0 && (QU.push({
                      start: XU,
                      end: zU,
                      amount: oU
                    }), AU = cU - oU), AU <= 0) return QU
                }
                for (let FU = zU - 1; FU >= XU; FU--)
                  if (null === UU(FU)) {
                    QU.push({
                      start: FU,
                      end: FU + 1,
                      amount: AU
                    });
                    break
                  } return QU
              })(UU, 10, aU, YU, Zz.f.maxItemStackSize)) EU(XU.start, XU.end, yU, XU.amount)
          };
        if (!FU || "Enchanting Table" !== oU && "Salvaging Table" !== oU) {
          const zU = (0, dU.zb)(XU.name),
            cU = zU ? (0, dU.yb)(zU) : null;
          if (!Lc.d.includes(zU) || yU !== cU && (0, Dz.m)(NU, UU.itemInfo, cU, yU))
            if (pU)
              if (yU < IU) {
                var gU, kU;
                const [UU, XU] = null !== (gU = null === (kU = (0, kc.b)(pU.type)) || void 0 === kU ? void 0 : kU.quickMoveRange) && void 0 !== gU ? gU : [0, pU.numSlots];
                EU(IU + UU, IU + XU, yU, YU)
              } else EU(0, IU - Lc.d.length, yU, YU);
          else NU.creative ? yU < 10 ? tU() : yU < IU ? EU(0, 10, yU, YU) : EU(0, IU - Lc.d.length, yU, null !== XU.amount ? Zz.f.maxItemStackSize : null) : yU < 10 ? tU() : EU(0, 10, yU, YU);
          else yU < IU - Lc.d.length || yU >= IU ? DU(cU, yU) : (EU(0, IU - Lc.d.length, cU, YU), Fz.e.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else AU.current = {
          idx: yU,
          name: XU.name,
          attributes: XU.attributes,
          amount: null !== XU.amount ? YU : 0
        }
      }(UU, cU) : UU.draggedInfoRef.current ? function(UU, XU, zU, cU) {
        const {
          draggedInfoRef: yU,
          specialItemRef: QU,
          moveAmtIntoSlot: AU,
          swapSlots: FU,
          removeItem: oU,
          removeDraggedInfoRef: DU
        } = UU, EU = UU.readInventory(), YU = yU.current.idx;
        if (zU && (XU === YU || (0, uc.d)(yU.current, zU)) && yU.current.amount > 0 && (0, Dz.d)(zU) > 0 && (zU.amount < Zz.f.maxItemStackSize || XU === YU)) cU ? zU.amount + yU.current.amount <= Zz.f.maxItemStackSize || XU === YU ? AU(XU, yU.current.amount) : AU(XU, Zz.f.maxItemStackSize - zU.amount) : AU(XU, 1);
        else if (yU.current.amount > 0 && !zU) AU(XU, cU ? yU.current.amount : 1);
        else if (cU || zU || 0 === yU.current.amount)
          if (EU.creative && !EU.chest && XU >= EU.player.length) {
            const UU = 0 === yU.current.amount ? 1 : yU.current.amount;
            oU(yU.current.idx, UU, !1) && DU()
          } else {
            var NU;
            const zU = (null === (NU = QU.current) || void 0 === NU ? void 0 : NU.idx) === XU;
            if (FU(XU, yU.current.idx)) {
              const cU = UU.readInventory(),
                AU = (0, Dz.k)(cU, YU),
                FU = !cU.chest && cU.creative && yU.current.idx >= cU.player.length;
              if (AU && yU.current.idx !== XU && !FU) {
                let UU = (0, Dz.d)(AU);
                zU && (UU -= QU.current.amount), yU.current = zU && 0 === UU ? null : {
                  idx: yU.current.idx,
                  name: AU.name,
                  attributes: AU.attributes,
                  amount: UU
                }
              } else DU()
            }
          }
        else AU(XU, 1)
      }(UU, zU, cU, yU) : function(UU, XU, zU, cU) {
        var yU;
        const {
          draggedInfoRef: QU,
          specialItemRef: AU
        } = UU;
        if (!zU) return;
        let FU = (0, Dz.d)(zU);
        const oU = (null === (yU = AU.current) || void 0 === yU ? void 0 : yU.idx) === XU;
        oU && (FU -= AU.current.amount);
        cU || (FU = Math.ceil(FU / 2));
        QU.current = oU && 0 === FU ? null : {
          idx: XU,
          name: zU.name,
          attributes: zU.attributes,
          amount: FU
        }
      }(UU, zU, cU, yU)
    }
    var ic = zU(2668);

    function Hc(UU, XU, zU) {
      return Math.round((XU + UU) * zU) / zU - XU
    }
    const Mc = new WeakMap;

    function vc(UU) {
      const XU = window.devicePixelRatio || 1,
        zU = Mc.get(UU);
      if (zU && zU.pixelRatio === XU && zU.width === window.innerWidth && zU.height === window.innerHeight) return zU;
      let cU = 0,
        yU = 0;
      const QU = UU.offsetParent;
      if (QU) {
        const UU = QU.getBoundingClientRect();
        cU = UU.left + QU.clientLeft, yU = UU.top + QU.clientTop
      }
      const AU = {
        left: cU,
        top: yU,
        pixelRatio: XU,
        width: window.innerWidth,
        height: window.innerHeight,
        halfRem: .5 * (0, ic.db)(document)
      };
      return Mc.set(UU, AU), AU
    }

    function Vc(UU, XU, zU) {
      const {
        left: cU,
        top: yU,
        pixelRatio: QU
      } = vc(UU);
      return `translate(${Hc(XU,cU,QU)}px, ${Hc(zU,yU,QU)}px)`
    }

    function sc(UU) {
      const {
        halfRem: XU
      } = vc(UU);
      return Vc(UU, XU, XU)
    }

    function nc(UU, XU) {
      return !!XU && XU.name === UU.name
    }

    function mc() {
      return DU.gameBridge.latest("inventory")
    }

    function lc(UU, XU, zU) {
      return DU.gameBridge.send("removeInventoryItem", {
        slot: UU,
        amount: XU,
        drop: zU
      })
    }

    function xc(UU) {
      return (0, Dz.i)(UU, DU.gameBridge.latest("itemInfo"), DU.gameBridge.latest("stationItems").enchantable)
    }

    function Jc(UU) {
      let {
        show: XU,
        close: zU,
        canCraft: cU,
        variation: QU,
        inventoryItemsMoveable: AU,
        setCraftFlyAnims: FU
      } = UU;
      (0, LU.i)("itemInfo");
      const [oU, EU] = (0, yU.useState)(null), [YU, NU] = (0, yU.useState)(null), [IU, pU] = (0, yU.useState)(!1), aU = (0, yU.useRef)(null), tU = (0, yU.useRef)(null), gU = (0, yU.useRef)(null), kU = (0, yU.useRef)(null), [GU, BU] = (0, yU.useReducer)((UU => UU + 1), 0), ZU = (0, yU.useCallback)((() => {
        XU && BU()
      }), [XU, BU]), RU = (0, yU.useCallback)((() => {
        tU.current = null, uU.current = null, ZU()
      }), [ZU]), PU = (0, yU.useCallback)(((UU, XU) => {
        FU((zU => zU.map((zU => "ingredient" === zU.kind ? zU : zU.DE === UU ? {
          ...zU,
          DE: XU,
          to: (0, Dz.g)(XU)
        } : zU.DE === XU ? {
          ...zU,
          DE: UU,
          to: (0, Dz.g)(UU)
        } : zU))))
      }), [FU]), WU = (0, yU.useCallback)(((UU, XU) => {
        const zU = HU.current;
        if (zU.x = UU, zU.y = XU, aU.current) !MU.current.isTouch || MU.current.itemBeingDragged && !uU.current ? (aU.current.style.transform = Vc(aU.current, zU.x, zU.y), pU(MU.current.isTouch && !uU.current)) : (aU.current.style.transform = sc(aU.current), pU(!0));
        else if (kU.current) {
          const zU = kU.current;
          let cU = UU + 10,
            yU = XU + 10;
          const QU = zU.offsetWidth,
            AU = zU.offsetHeight;
          cU + QU > window.innerWidth && (cU = UU - QU - 10), yU + AU > window.innerHeight && (yU = XU - AU - 10), cU < 0 && (cU = 0), yU < 0 && (yU = 0), kU.current.style.transform = `translate(${cU}px, ${yU}px)`
        }
      }), []), eU = (0, yU.useCallback)((UU => (XU, zU, cU) => {
        if (EU(XU && void 0 !== UU ? UU : null), XU) {
          if (void 0 === UU && !zU) return void(0, rc.b)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== UU) {
            var yU;
            const XU = mc();
            let zU;
            if (zU = UU === Yz.e ? gU.current ? (0, Dz.k)(XU, gU.current.idx) : null : (0, Dz.k)(XU, UU), !zU) return void NU(null);
            if ((null === (yU = gU.current) || void 0 === yU ? void 0 : yU.idx) === UU) {
              if (0 === (0, Dz.d)(zU) - gU.current.amount) return void NU(null)
            }
            NU(xc(zU))
          } else NU({
            name: zU.name,
            desc: zU.desc,
            fontStyle: "normal"
          })
        } else NU(null);
        cU && setTimeout((() => {
          WU(cU.pageX, cU.pageY)
        }), 0)
      }), [WU]), CU = (0, yU.useCallback)(((UU, XU) => {
        const zU = DU.gameBridge.send("moveInventoryItem", {
          from: tU.current.idx,
          to: UU,
          amount: XU
        });
        return zU ? (tU.current.amount -= XU, tU.current.amount <= 0 && RU()) : console.error("moveInventoryItem failed"), zU
      }), [RU]), wU = (0, yU.useCallback)(((UU, XU) => {
        const zU = gU.current,
          cU = null === zU || void 0 === zU ? void 0 : zU.idx;
        zU && (zU.idx = function(UU, XU, zU) {
          return UU === XU ? zU : UU === zU ? XU : UU
        }(cU, UU, XU));
        const yU = DU.gameBridge.send("swapInventorySlots", {
          a: UU,
          b: XU
        });
        return yU ? PU(UU, XU) : zU && (zU.idx = cU), yU
      }), [PU]), qU = (0, yU.useCallback)(((UU, XU, zU, cU) => {
        const yU = DU.gameBridge.send("quickMoveInventoryItem", {
          slot: zU,
          start: UU,
          end: XU,
          amount: cU
        });
        null !== yU && PU(zU, yU)
      }), [PU]), OU = (0, yU.useCallback)(((UU, XU) => {
        var yU;
        ((UU, XU, zU) => {
          const cU = UU - (zU - Lc.d.length);
          return !(!XU || cU < 0 || cU >= Lc.d.length) && (0, dU.zb)(XU) !== Lc.d[cU]
        })(XU, null === (yU = tU.current) || void 0 === yU ? void 0 : yU.name, mc().player.length) || (fc({
          e: UU,
          idx: XU,
          readInventory: mc,
          itemInfo: DU.gameBridge.latest("itemInfo"),
          draggedInfoRef: tU,
          specialItemRef: gU,
          moveAmtIntoSlot: CU,
          swapSlots: wU,
          moveIntoSlots: qU,
          removeItem: lc,
          removeDraggedInfoRef: RU,
          close: zU,
          canCraft: cU,
          variation: QU
        }), ZU())
      }), [cU, zU, CU, qU, RU, wU, QU, ZU]), SU = (0, yU.useRef)(0), rU = (0, yU.useRef)(null), uU = (0, yU.useRef)(null), fU = (0, yU.useRef)(null), iU = (0, yU.useRef)(new Set), HU = (0, yU.useRef)({
        x: 0,
        y: 0
      }), MU = (0, yU.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), vU = (0, yU.useCallback)((() => (fU.current = null, MU.current.itemBeingDragged = !1, clearTimeout(rU.current), !!uU.current && (uU.current = null, ZU(), !0))), [ZU]);
      (0, yU.useEffect)((() => {
        vU(), iU.current.clear()
      }), [XU]);
      const VU = UU => void 0 !== UU && (iU.current.has(UU) || null !== fU.current && UU !== fU.current),
        sU = UU => {
          MU.current.isTouch = (0, Dz.t)(UU)
        },
        nU = (0, yU.useCallback)((UU => XU => {
          const cU = (0, Dz.t)(XU);
          if (cU || WU(XU.pageX, XU.pageY), AU)
            if (VU(XU.pointerId)) void 0 !== XU.pointerId && iU.current.add(XU.pointerId);
            else {
              if (sU(XU), cU) {
                SU.current = XU.timeStamp, MU.current.itemBeingDragged = !0, fU.current = XU.pointerId;
                const zU = (0, Dz.k)(mc(), UU);
                if (zU && zU.amount && zU.amount > 0) {
                  const zU = XU.pageX,
                    cU = XU.pageY,
                    yU = HU.current.x,
                    QU = HU.current.y;
                  clearTimeout(rU.current), rU.current = setTimeout((() => {
                    if (tU.current && tU.current.idx === UU && (Math.abs(zU - HU.current.x) < 20 && Math.abs(cU - HU.current.y) < 20 || yU === HU.current.x && QU === HU.current.y) && MU.current.itemBeingDragged) {
                      const UU = mc(),
                        zU = UU.creative && !UU.chest && tU.current.idx >= Zz.f.numInvenSlots && null !== (0, Dz.k)(UU, tU.current.idx).amount ? Zz.f.maxItemStackSize : tU.current.amount;
                      uU.current = {
                        initTouchX: XU.pageX,
                        initTouchY: XU.pageY,
                        maxAmount: zU
                      }, tU.current.amount = Math.ceil(tU.current.amount / 2), aU.current.style.transform = sc(aU.current), pU(!0), ZU()
                    }
                  }), 500)
                }
              }
              OU(XU, UU)
            }
          else UU === Yz.d && (0, Dz.p)(XU) && zU()
        }), [WU, OU, AU, zU, ZU]),
        mU = (0, yU.useCallback)((UU => UU => {
          if (VU(UU.pointerId)) return;
          const XU = (0, Dz.t)(UU);
          if (sU(UU), !vU()) {
            if (XU && tU.current && UU.timeStamp - SU.current > 150) {
              const XU = document.elementFromPoint(UU.clientX, UU.clientY);
              if (null !== XU) {
                const zU = XU.getAttribute("data-inven-idx");
                null !== zU ? OU(UU, parseInt(zU)) : XU.classList.contains("InventoryBackgroundScreen") && OU(UU, -1)
              }
            }
            WU(UU.pageX, UU.pageY)
          }
        }), [WU, OU, vU]);
      (0, yU.useEffect)((() => {
        let UU;
        const zU = ["pointerup", "pointercancel"],
          cU = UU => {
            iU.current.has(UU.pointerId) ? setTimeout((() => {
              iU.current.delete(UU.pointerId)
            }), 0) : UU.pointerId === fU.current && setTimeout((() => {
              fU.current === UU.pointerId && vU()
            }), 0)
          };
        if (XU) {
          for (const UU of zU) document.addEventListener(UU, cU, !0);
          if (!MU.current.isTouch) {
            const UU = HU.current;
            WU(UU.x, UU.y)
          }
          UU = UU => {
            UU.preventDefault(), VU(UU.pointerId) || (sU(UU), WU(UU.pageX, UU.pageY), uU.current && UU.pointerId === fU.current && (UU => {
              if (!tU.current) return uU.current = null, void ZU();
              const {
                initTouchX: XU,
                maxAmount: zU
              } = uU.current, cU = (UU.pageX - XU) * uU.current.maxAmount / 160, yU = Math.ceil(zU / 2) + Math.ceil(cU);
              tU.current.amount = Math.min(zU, Math.max(1, yU)), ZU()
            })(UU))
          }, document.addEventListener("pointermove", UU, !0)
        }
        return () => {
          document.removeEventListener("pointermove", UU, !0);
          for (const UU of zU) document.removeEventListener(UU, cU, !0)
        }
      }));
      const lU = (0, yU.useCallback)((() => {
          if (tU.current) {
            const UU = (0, Dz.k)(mc(), tU.current.idx);
            (!nc(tU.current, UU) || UU.amount < tU.current.amount) && RU()
          }
        }), [RU]),
        xU = (0, yU.useCallback)((() => {
          const UU = tU.current;
          if (UU) {
            const XU = (0, Dz.k)(mc(), UU.idx);
            nc(UU, XU) && (UU.attributes = XU.attributes)
          }
        }), []);
      return {
        draggedDomRef: aU,
        draggedInfoRef: tU,
        specialItemRef: gU,
        hoverInfoDomRef: kU,
        longHoldSplitInfoRef: uU,
        currHoveredIdx: oU,
        currHoveredDisplayInfo: YU,
        displayDraggedItemName: IU,
        forceRerenderIfVisible: ZU,
        removeDraggedInfoRef: RU,
        checkDraggedItemConsistencyWithInven: lU,
        refreshDraggedAttributes: xU,
        swapSlots: wU,
        getPointerDownForIdx: nU,
        getPointerUpForIdx: mU,
        getSetHovering: eU,
        setCurrHoveredDisplayInfo: NU,
        moveFollowerTo: WU
      }
    }
    class jc {
      constructor(UU) {
        this.snapshot = [], this.newSlots = new Set, this.update(UU, !1)
      }
      update(UU, XU) {
        const zU = UU.map((UU => {
          var XU;
          return UU ? {
            name: UU.name,
            amount: null !== (XU = UU.amount) && void 0 !== XU ? XU : 1
          } : null
        }));
        zU.forEach(((UU, zU) => {
          const cU = this.snapshot[zU],
            yU = (null === UU || void 0 === UU ? void 0 : UU.name) !== (null === cU || void 0 === cU ? void 0 : cU.name);
          (!UU || yU || UU.amount < cU.amount) && this.newSlots.delete(zU), XU && UU && (yU || UU.amount > cU.amount) && this.newSlots.add(zU)
        })), this.snapshot = zU
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(UU) {
        return this.newSlots.has(UU)
      }
    }
    const Kc = (UU, XU, zU) => ({
      button: XU,
      shiftKey: zU,
      pageX: UU.clientX,
      pageY: UU.clientY,
      clientX: UU.clientX,
      clientY: UU.clientY,
      pointerType: "mouse"
    });

    function bc(UU) {
      const [XU, zU] = (0, yU.useState)(UU);
      return UU && !XU && zU(!0), (0, yU.useEffect)((() => {
        if (XU) return;
        let UU = !0;
        const cU = () => {
            UU && (UU = !1, zU(!0))
          },
          yU = "function" === typeof window.requestIdleCallback,
          QU = yU ? window.requestIdleCallback(cU, {
            timeout: 2e3
          }) : void 0,
          AU = setTimeout(cU, yU ? 2e3 : 1e3);
        return () => {
          UU = !1, clearTimeout(AU), void 0 !== QU && window.cancelIdleCallback(QU)
        }
      }), [XU]), XU
    }
    var Tc = zU(3251);
    const hc = (0, yU.memo)((function(UU) {
      var XU;
      let {
        show: zU,
        onOpen: cU,
        onClose: QU,
        variation: FU
      } = UU;
      const YU = (0, yU.useRef)(null),
        NU = (0, yU.useRef)(null),
        IU = function(UU) {
          const [XU, zU] = (0, yU.useState)(!0), [cU, QU] = (0, yU.useState)(!1), AU = (0, yU.useRef)(null), FU = (0, yU.useRef)(null), DU = (0, oU.f)("_shield"), EU = (0, yU.useRef)(null), YU = (0, oU.f)("_health"), NU = (0, yU.useRef)(null);

          function IU(UU) {
            const XU = Date.now() + UU;
            XU < FU.current || (zU(!1), clearTimeout(AU.current), FU.current = XU, AU.current = setTimeout((() => {
              zU(!0)
            }), UU))
          }
          return (0, yU.useEffect)((() => {
            IU(pz);
            const UU = Nz.d.subscribe("requestingPlayVideoAd", (() => {
              IU(pz)
            }));
            return () => {
              clearTimeout(AU.current), Nz.d.unsubscribe(UU)
            }
          }), []), (0, yU.useEffect)((() => {
            (EU.current > DU || NU.current > YU) && IU(6e4), EU.current = DU, NU.current = YU
          }), [DU, YU]), (0, yU.useEffect)((() => {
            let XU = null;
            return UU ? XU = setTimeout((() => {
              QU(!0)
            }), 250) : QU(!1), () => {
              clearTimeout(XU)
            }
          }), [UU]), XU && cU
        }(zU);
      (0, WU.j)(zz.e, null);
      const aU = (0, zz.o)(),
        tU = aU.some((UU => UU.panel)),
        {
          userContext: gU
        } = (0, RU.d)(),
        kU = (0, LU.e)("inventory", (UU => {
          const XU = UU.chest;
          return null !== XU && (Bc(XU.numSlots) || Wc(XU, gU.whamm))
        })),
        GU = bc(zU),
        BU = bc(zU),
        [ZU, PU] = (0, yU.useState)([]),
        eU = (0, yU.useCallback)((UU => {
          PU((XU => XU.filter((XU => XU.id !== UU))))
        }), []),
        CU = (0, yU.useRef)(null),
        wU = (0, yU.useRef)(0),
        qU = (0, yU.useCallback)((() => {
          CU.current && (wU.current = CU.current.scrollTop), QU()
        }), [QU]),
        OU = (0, oU.f)("inventoryItemsMoveable"),
        SU = (0, oU.f)("canCraft"),
        {
          clientEscMenuOptions: uU
        } = (0, MU.q)(["clientEscMenuOptions"]),
        fU = (0, yU.useRef)(null);
      fU.current || (fU.current = new jc(DU.gameBridge.latest("inventory").player));
      const iU = fU.current,
        {
          draggedDomRef: HU,
          draggedInfoRef: vU,
          specialItemRef: VU,
          hoverInfoDomRef: sU,
          longHoldSplitInfoRef: nU,
          currHoveredIdx: mU,
          currHoveredDisplayInfo: lU,
          displayDraggedItemName: xU,
          forceRerenderIfVisible: JU,
          removeDraggedInfoRef: jU,
          checkDraggedItemConsistencyWithInven: KU,
          refreshDraggedAttributes: bU,
          swapSlots: TU,
          getPointerDownForIdx: hU,
          getPointerUpForIdx: UX,
          getSetHovering: XX,
          setCurrHoveredDisplayInfo: zX,
          moveFollowerTo: cX
        } = Jc({
          show: zU,
          close: qU,
          canCraft: SU,
          variation: FU,
          inventoryItemsMoveable: OU,
          setCraftFlyAnims: PU
        });
      (0, yU.useEffect)((() => {
        const UU = !zU && null !== DU.gameBridge.latest("inventory").chest;
        if (UU && DU.gameBridge.send("closeChest", null), zU || (iU.clearMarks(), XX(null)(!1)), UU) {
          Fz.e.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [zU]), (0, LU.b)("chestToggled", (UU => {
        if (UU ? cU() : zU && qU(), UU) {
          Fz.e.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const yX = (0, wX.k)();
      (0, LU.b)("inventory", (UU => {
        let {
          player: XU
        } = UU;
        var cU, yU, QU;
        (iU.update(XU, !zU && yX.shown), VU.current) && (VU.current = (yU = VU.current, QU = null !== (cU = XU[VU.current.idx]) && void 0 !== cU ? cU : null, nc(yU, QU) ? (yU.attributes = QU.attributes, null !== QU.amount && yU.amount > QU.amount && (yU.amount = QU.amount), yU) : null));
        bU(), null !== mU && XX(mU)(!0), JU()
      })), (0, yU.useEffect)((() => (DU.gameBridge.send("setInventoryOpen", zU), () => {
        DU.gameBridge.send("setInventoryOpen", !1)
      })), [zU]);
      const QX = (UU, XU) => {
        if (UU === Yz.e) return void(UU => {
          const XU = VU.current;
          if (!XU || null === (0, Dz.k)(DU.gameBridge.latest("inventory"), XU.idx)) return;
          const zU = UU ? Math.max(XU.amount, 1) : 1,
            cU = XU.amount - zU;
          if (!DU.gameBridge.send("removeInventoryItem", {
              slot: XU.idx,
              amount: zU,
              drop: !0
            })) return;
          const yU = VU.current;
          yU && (yU.amount = Math.min(yU.amount, cU), yU.amount <= 0 && (VU.current = null)), JU()
        })(XU);
        const zU = null === UU ? null : (0, Dz.k)(DU.gameBridge.latest("inventory"), UU);
        if (null !== zU) {
          var cU, yU, QU;
          const AU = XU && null !== (cU = zU.amount) && void 0 !== cU ? cU : 1;
          DU.gameBridge.send("removeInventoryItem", {
            slot: UU,
            amount: AU,
            drop: !0
          }), UU === (null === (yU = vU.current) || void 0 === yU ? void 0 : yU.idx) && (vU.current.amount -= AU, vU.current.amount <= 0 && jU(), JU()), UU === (null === (QU = VU.current) || void 0 === QU ? void 0 : QU.idx) && (VU.current = null, JU())
        }
      };
      (0, LU.b)("inventoryDropRequested", (UU => {
        zU && mU !== Yz.e && QX(mU, UU)
      }));
      const AX = (UU, XU) => {
        let zU = XU;
        if (XU === Yz.e) {
          if (!VU.current) return;
          zU = VU.current.idx
        }
        const cU = TU(UU, zU);
        if (cU && vU.current && (vU.current.idx === zU ? vU.current.idx = UU : vU.current.idx === UU && (vU.current.idx = zU)), cU && XU === Yz.e) {
          const UU = (0, Dz.k)(DU.gameBridge.latest("inventory"), zU);
          VU.current = UU ? {
            idx: zU,
            name: UU.name,
            attributes: UU.attributes,
            amount: (0, Dz.d)(UU)
          } : null
        }
        JU()
      };
      (0, LU.b)("numberKeyPressed", (UU => {
        null !== mU && zU && AX(UU - 1, mU)
      })), (0, yU.useEffect)((() => {
        zU || (VU.current = null, jU(), zX(null))
      }), [zU, jU, zX, VU]);
      const FX = VU.current;
      (0, yU.useEffect)((() => {
        mU === Yz.e && XX(Yz.e)(!0)
      }), [FX, mU, XX]);
      const oX = () => {
        KU(), bU(), JU()
      };
      (0, LU.b)("chestRefreshed", oX), (0, LU.b)("inventorySynced", oX);
      const [DX, EX] = (0, yU.useState)(new Map), YX = null !== (XU = DX.get(FU)) && void 0 !== XU ? XU : null, NX = (UU, XU) => {
        EX((zU => {
          const cU = zU.get(UU);
          return cU && cU.name === XU.name && cU.YA === XU.YA ? zU : new Map(zU).set(UU, XU)
        }))
      };
      (0, WU.f)("craftingRecipesEdited", (() => {
        JU()
      })), (0, WU.f)(lz.c, (UU => {
        let {
          variation: XU,
          itemName: zU
        } = UU;
        NX(XU, {
          name: zU,
          YA: 0
        })
      }));
      const [IX, pX] = (0, yU.useState)(null), [aX, tX] = (0, yU.useState)(null);
      (0, LU.b)("enchantingTableOpened", (UU => {
        let {
          position: XU,
          blockName: zU
        } = UU;
        pX(XU), tX(zU)
      }));
      const [gX, kX] = (0, yU.useState)(""), [GX, BX] = (0, yU.useState)(null);
      (0, yU.useEffect)((() => {
        zU && CU.current && (CU.current.scrollTop = wU.current)
      }), [zU]);
      return (UU => {
        const XU = (0, yU.useRef)(UU);
        XU.current = UU, (0, yU.useEffect)((() => {
          if (!UU.show) return;
          const zU = (UU, zU, cU, yU) => {
              const {
                getPointerDownForIdx: QU,
                getPointerUpForIdx: AU
              } = XU.current;
              QU(UU)(Kc(zU, cU, yU)), AU(UU)(Kc(zU, cU, yU))
            },
            cU = {
              primary: (UU, XU) => {
                zU(UU, XU, 0, !1)
              },
              secondary: (UU, XU) => {
                zU(UU, XU, 2, !1)
              },
              quickMove: (UU, XU) => {
                zU(UU, XU, 0, !0)
              },
              dropHeld: (UU, zU) => {
                XU.current.getPointerDownForIdx(Yz.d)(Kc(zU, UU ? 0 : 2, !1))
              },
              dropSlot: (UU, zU) => {
                XU.current.dropFromIdx(UU, zU)
              },
              swapWithHotbar: (UU, zU) => {
                XU.current.swapWithHotbar(UU, zU)
              },
              cancel: () => {
                XU.current.removeDraggedInfoRef()
              },
              isHolding: () => !!XU.current.draggedInfoRef.current,
              hasItemAt: UU => {
                const {
                  draggedInfoRef: zU,
                  specialItemRef: cU
                } = XU.current;
                if (UU === Yz.e) return !!cU.current;
                const yU = (0, Dz.k)(DU.gameBridge.latest("inventory"), UU);
                return !!yU && (0, ez.g)(UU, (0, Dz.d)(yU), [zU.current, cU.current]).shown
              },
              hover: (UU, zU) => {
                const {
                  moveFollowerTo: cU,
                  getSetHovering: yU
                } = XU.current;
                cU(zU.clientX, zU.clientY), yU(null !== UU && void 0 !== UU ? UU : void 0)(null !== UU, void 0, {
                  pageX: zU.clientX,
                  pageY: zU.clientY
                })
              },
              moveTo: UU => {
                XU.current.moveFollowerTo(UU.clientX, UU.clientY)
              },
              close: () => {
                XU.current.close()
              }
            };
          return (0, cz.m)(cU)
        }), [UU.show])
      })({
        show: zU,
        close: qU,
        draggedInfoRef: vU,
        specialItemRef: VU,
        getPointerDownForIdx: hU,
        getPointerUpForIdx: UX,
        getSetHovering: XX,
        moveFollowerTo: cX,
        removeDraggedInfoRef: jU,
        dropFromIdx: QX,
        swapWithHotbar: AX
      }), (0, yU.useEffect)((() => {
        pU.k.UY("inventoryDraggedItemUpdated", {
          draggedInfo: vU.current,
          specialItemInfo: VU.current,
          setHovered: XX,
          pointerDown: hU,
          pointerUp: UX,
          variation: SU ? FU : void 0,
          craftFlyAnims: ZU
        })
      })), (0, EU.jsxs)(rU.b, {
        show: zU,
        style: {
          touchAction: zU ? "none" : void 0
        },
        children: [vU.current && (0, EU.jsx)(tz, {
          draggedInfo: vU.current,
          toAddRef: HU
        }), vU.current && xU && (0, EU.jsx)(gz, {
          className: "DraggedInvenItemName",
          displayInfo: xc(vU.current),
          domRef: null
        }), !vU.current && lU && (0, EU.jsx)(gz, {
          displayInfo: lU,
          domRef: sU
        }), nU.current && vU.current && (0, EU.jsx)(kz, {
          info: nU.current,
          draggedInfo: vU.current
        }), ZU.map((UU => (0, EU.jsx)(Ez.b, {
          anim: UU,
          onComplete: eU
        }, UU.id))), (0, EU.jsx)(AU.c, {
          show: zU,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: qU,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: hU(Yz.d),
          pointerUp: UX(Yz.d),
          doGameplayStartStopOnShow: !0
        }), GU && (0, EU.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, EU.jsx)("div", {
            ref: YU,
            className: "InventoryAdOuter",
            children: (0, Tc.l)() && (0, EU.jsx)(oz.b, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: YU
              },
              verticalAlign: "start",
              showing: zU && IU,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, EU.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, EU.jsxs)("div", {
              className: Bz()("Inventory", {
                WithGameButtons: aU.length > 0,
                WithPanelButtons: tU,
                WideChestOpen: kU
              }),
              children: [(0, EU.jsx)("div", {
                className: "InventoryFiller"
              }), (0, EU.jsx)(Az, {
                show: zU,
                buttons: aU
              }), (0, EU.jsxs)("div", {
                className: "InvenBody",
                children: [(0, EU.jsx)(dc, {
                  variation: FU,
                  canCraft: SU,
                  show: zU,
                  creativeMounted: BU,
                  specialItemRef: VU,
                  draggedInfo: vU.current,
                  getSetHovering: XX,
                  getPointerDownForIdx: hU,
                  getPointerUpForIdx: UX,
                  enchantingTablePosition: IX,
                  enchantingTableBlockName: aX,
                  selectedCraftable: YX,
                  dispatchSelectedCraftable: UU => {
                    NX(FU, UU)
                  },
                  creativeScrollDiv: CU,
                  creativeSearchVal: gX,
                  setCreativeSearchVal: kX,
                  creativeCategory: GX,
                  setCreativeCategory: BX,
                  onCraft: function(UU, XU) {
                    let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (KU(), (UU || zU.length > 0) && PU((XU => {
                        const cU = [...XU],
                          yU = XU.filter((UU => "ingredient" === UU.kind)).length;
                        for (const UU of zU.slice(0, Math.max(0, 24 - yU))) cU.push({
                          id: (0, Ez.d)(),
                          ...UU,
                          to: UU.to
                        });
                        return UU && cU.push({
                          id: (0, Ez.d)(),
                          ...UU,
                          to: (0, Dz.g)(UU.DE)
                        }), cU
                      })), null !== XU) {
                      var cU;
                      const UU = DU.gameBridge.latest("inventory");
                      (0, dU.zb)(null === (cU = (0, Dz.k)(UU, XU)) || void 0 === cU ? void 0 : cU.name) ? hU(XU)({
                        button: 0,
                        shiftKey: !0
                      }): TU(XU, UU.selectedSlot)
                    }
                  }
                }), (0, EU.jsx)(Sc, {
                  draggedInfo: vU.current,
                  specialItemInfo: VU.current,
                  craftFlyAnims: ZU,
                  getSetHovering: XX,
                  getPointerDownForIdx: hU,
                  getPointerUpForIdx: UX,
                  variation: FU,
                  canCraft: SU,
                  isNewSlot: UU => uU.showNewItemIndicator && iU.isNew(UU)
                })]
              })]
            }), (0, EU.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, EU.jsx)("div", {
                ref: NU,
                className: "InventoryAd",
                children: (0, EU.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var Uy = zU(1482),
      Xy = zU(142);
    const zy = (0, yU.memo)((function(UU) {
      let {
        show: XU,
        onOpen: zU,
        onClose: cU
      } = UU;
      const QU = (0, yU.useRef)(0),
        FU = () => (0, Uy.e)() && !(0, Uy.o)() && QU.current <= 2;
      XU = FU() && XU;
      const oU = () => {
        QU.current++, cU()
      };
      (0, WU.f)("ctrlCrouchWithoutFullscreen", (() => {
        FU() && zU()
      })), (0, WU.f)("displaymodeFullscreenChange", (UU => {
        XU && UU && oU()
      }));
      const DU = "crazygames" === Xy.siteUsed;
      return (0, EU.jsx)(AU.c, {
        close: oU,
        escDoesExit: !0,
        show: XU,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, EU.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, EU.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), DU && (0, EU.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, EU.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, EU.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!DU && (0, EU.jsx)(IU.l, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, Uy.r)(), oU()
              },
              children: (0, EU.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, EU.jsx)(IU.G, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                oU()
              },
              children: (0, EU.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var cy = zU(2969),
      yy = zU(2985),
      Qy = zU(1410),
      Ay = zU(3972),
      Fy = zU(1414),
      oy = zU(3004),
      Dy = zU(3976),
      Ey = zU(3982);

    function Yy(UU, XU) {
      return (0, oy.g)(!0, UU, XU) ? () => {
        !async function(UU) {
          await Ay.d.refresh();
          const {
            data: XU,
            failed: zU
          } = Ay.d.getState();
          if (null === XU || zU) return;
          const cU = Ay.d.getExclusion(UU);
          if ("blocked" === cU) return;
          const yU = null === cU;
          Qy.NotificationProvider.showCustomPopup({
            body: XU => {
              const zU = zU => ({
                text: Dy.i[zU].text,
                onClick: () => {
                  XU(), (0, Ey.g)(zU, UU, null)
                }
              });
              return (0, EU.jsx)(Fy.k, {
                title: yU ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: UU
                  }
                },
                secondary: yU ? zU("ignore") : void 0,
                confirm: zU("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: XU
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
    zU(2982);
    const Ny = (0, yU.memo)((function(UU) {
      let {
        show: XU,
        onOpen: zU,
        onClose: cU
      } = UU;
      const [QU, FU] = (0, yU.useState)(""), [oU, YU] = (0, yU.useState)(""), [NU, IU] = (0, yU.useState)(null), [pU, aU] = (0, yU.useState)(null), tU = (0, LU.i)("hiddenPlayerNames"), gU = {
        kind: "worldCodeLine",
        onSubmit: (UU, XU) => {
          cU(), DU.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: pU,
            policy: UU,
            details: XU
          })
        }
      }, kU = {
        kind: "player",
        shownPlayerName: (0, XX.c)(QU, tU),
        onSubmit: (UU, XU) => {
          cU(), (0, yy.c)({
            playerId: oU,
            playerName: QU,
            chatMsgId: pU,
            policyId: UU,
            details: XU,
            onAccepted: Yy(QU, tU)
          })
        }
      };
      return (0, WU.f)("OpenReportMenu", (UU => {
        let {
          playerEId: XU,
          playerName: cU,
          TE: yU,
          serverChatMsgId: QU
        } = UU;
        YU(XU), FU(cU), IU(yU), aU(QU), zU()
      })), (0, EU.jsx)(AU.c, {
        show: XU,
        close: cU,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, EU.jsx)("div", {
          className: "ReportPanel",
          children: XU && (0, EU.jsx)(cy.c, {
            reported: null === oU ? gU : kU,
            chatMessage: NU,
            inGame: !0,
            onCancel: cU
          })
        })
      })
    }));
    var Iy = zU(37564),
      py = zU(2977);
    const ay = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      ty = (0, yU.memo)((function(UU) {
        var XU, zU;
        let {
          show: cU,
          onOpen: QU,
          onClose: FU
        } = UU;
        const {
          t: oU
        } = (0, jU.I)(), [YU, NU] = (0, yU.useState)(null), [pU, aU] = (0, yU.useState)(0);
        (0, WU.f)("OpenDiscordReportBox", (UU => {
          DU.gameBridge.send("requestDiscordReportKey", UU), NU(null), aU(0), QU()
        })), (0, WU.f)("setDiscordReportKey", NU);
        const tU = cU && null === YU;
        (0, yU.useEffect)((() => {
          if (!tU) return;
          const UU = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), NU({
              Ec: null,
              Yc: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(UU)
          }
        }), [tU]);
        const gU = null !== (XU = null === YU || void 0 === YU ? void 0 : YU.Ec) && void 0 !== XU ? XU : null,
          kU = null !== (zU = null === YU || void 0 === YU ? void 0 : YU.Yc) && void 0 !== zU ? zU : null;
        return (0, EU.jsx)(AU.c, {
          show: cU,
          close: FU,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, EU.jsx)("div", {
            className: "ReportPanel",
            children: (0, EU.jsxs)(Fy.k, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === kU ? "report:discordReportDescription" : void 0,
              confirm: null === kU ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(Iy.e, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === kU ? "general:cancel" : "general:ok",
                onClick: FU
              },
              padStartsOn: "cancel",
              children: [null !== kU && (0, EU.jsx)(py.d, {
                children: oU(ay[kU])
              }), null === kU && (0, EU.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, EU.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== gU && void 0 !== gU ? gU : oU("report:loadingReportKey")
                }), (0, EU.jsx)(IU.f, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(gU).catch((UU => {
                      console.error("Failed to copy report key:", UU)
                    })), aU(Date.now())
                  },
                  disabled: Date.now() - pU < 1e3 || !gU,
                  children: Date.now() - pU < 1e3 ? oU("general:copied") : oU("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var gy = zU(1310);
    const ky = {
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
      Gy = (0, yU.memo)((function(UU) {
        let {
          show: XU,
          onOpen: zU,
          onClose: cU
        } = UU;
        const [QU, FU] = (0, yU.useState)(null), oU = (0, yU.useRef)(0), YU = (0, yU.useRef)(null), {
          t: NU
        } = (0, jU.I)();
        (0, WU.f)("EditCustomLobbyBlock", (UU => {
          let {
            pos: XU
          } = UU;
          FU(XU), null !== XU && zU(), YU.current.scrollTo(0, oU.current)
        }));
        const IU = UU => {
          DU.gameBridge.send("setCustomLobbyBlock", {
            pos: QU,
            blockName: UU
          }), cU()
        };
        return (0, EU.jsx)(AU.c, {
          className: "CustomLobbyBlockEditorOuter",
          close: cU,
          escDoesExit: !0,
          show: XU,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, EU.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: YU,
            onScroll: () => {
              oU.current = YU.current.scrollTop
            },
            children: (0, EU.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(ky).map((UU => {
                let [XU, zU] = UU;
                return (0, EU.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, EU.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: NU(XU)
                  }), (0, EU.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(zU).map((UU => {
                      let [XU, {
                        tooltip: zU,
                        blocks: cU
                      }] = UU;
                      return (0, EU.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, EU.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [NU(XU), (0, EU.jsx)(xU.c, {
                            hoverInfo: NU(zU),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, EU.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: cU.map((UU => (0, EU.jsx)(By, {
                            blockName: UU,
                            selectBlock: IU
                          }, UU)))
                        })]
                      }, XU)
                    }))
                  })]
                }, XU)
              }))
            })
          })
        })
      })),
      By = (0, yU.memo)((function(UU) {
        var XU;
        let {
          blockName: zU,
          selectBlock: cU
        } = UU;
        const yU = (0, Fc.c)(zU),
          QU = null !== (XU = void 0 === yU ? void 0 : (0, Ac.displayNameOf)(yU)) && void 0 !== XU ? XU : zU,
          AU = void 0 === yU ? void 0 : (0, Ac.descriptionOf)(yU);
        return (0, EU.jsx)(xU.d, {
          tooltipInner: (0, EU.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, EU.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, EU.jsx)(PU.d, {
                text: QU
              })
            }), AU && (0, EU.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, EU.jsx)(PU.d, {
                text: AU
              })
            })]
          }),
          children: (0, EU.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => cU(zU),
            children: (0, EU.jsx)(Qz.c, {
              itemName: zU,
              amount: 1
            })
          })
        }, zU)
      }));
    var Zy = zU(2818),
      Ry = zU(4598),
      Py = zU(34900);

    function Wy() {
      const UU = (0, LU.i)("itemInfo");
      return (0, yU.useMemo)((() => function(UU) {
        return {
          getDefaultItemStat(XU, zU) {
            var cU;
            const yU = UU[XU];
            return "description" === zU ? null === yU || void 0 === yU ? void 0 : yU.description : null !== (cU = null === yU || void 0 === yU ? void 0 : yU.displayName) && void 0 !== cU ? cU : XU
          }
        }
      }(UU)), [UU])
    }
    const dy = (0, yU.memo)((function(UU) {
        var XU, zU, cU, QU, FU, oU, DU, YU, NU, IU, pU, aU, gU, kU, GU, BU, ZU, RU, PU, dU, LU, eU, CU;
        let {
          togglePointerLock: wU,
          show: qU,
          onOpen: OU,
          onClose: SU
        } = UU;
        const {
          t: rU
        } = (0, jU.I)(), uU = Wy(), fU = (0, yU.useRef)(null), iU = (0, yU.useRef)(Ry.e.MobHungerLevel.Hungry), HU = (0, yU.useRef)(null), MU = (0, Zy.c)(), vU = (0, yU.useRef)(null), VU = (0, yU.useRef)(null), sU = fU.current;
        (0, yU.useEffect)((() => {
          if (!qU) return;
          const UU = Py.h.openPet(vU.current);
          return VU.current = UU, () => {
            UU.close(), VU.current = null
          }
        }), [qU]), (0, yU.useEffect)((() => {
          qU && sU && VU.current.show(function(UU) {
            var XU;
            let {
              mobType: zU,
              mobSettings: cU
            } = UU;
            return {
              mobType: zU,
              variation: null !== (XU = cU.variation) && void 0 !== XU ? XU : "default",
              metaInfo: cU.metaInfo,
              tamed: !(0, Gc.P)(cU.ownerDbId)
            }
          }(sU))
        }), [qU, sU]), (0, yU.useEffect)((() => {
          const UU = () => {
            var UU;
            const XU = Ry.e.getMobHungerLevel(null === (UU = fU.current) || void 0 === UU ? void 0 : UU.mobSettings.petInfo.lastFedAt);
            if (XU !== iU.current && (iU.current = XU, MU()), HU.current) {
              var zU;
              const UU = Date.now(),
                XU = Ry.e.getNextStateAt(null === (zU = fU.current) || void 0 === zU ? void 0 : zU.mobSettings.petInfo.lastFedAt);
              let cU = Math.floor((XU - UU) / 1e3),
                yU = "";
              if (cU > 3600) {
                yU += Math.floor(cU / 60 / 60).toString().padStart(2, "0"), yU += ":", cU %= 3600
              }
              const QU = cU % 60;
              yU += Math.floor(cU / 60).toString().padStart(2, "0"), yU += ":", yU += QU.toString().padStart(2, "0"), HU.current.textContent = yU
            }
          };
          UU();
          const XU = setInterval(UU, 250);
          return () => {
            clearInterval(XU)
          }
        }), [sU, MU]), (0, WU.f)("showPetUi", (UU => {
          let {
            mobType: XU,
            mobSettings: zU
          } = UU;
          fU.current = {
            mobType: XU,
            mobSettings: zU
          }, qU || OU()
        }));
        const nU = null === (XU = fU.current) || void 0 === XU ? void 0 : XU.mobSettings.health,
          mU = null === (zU = fU.current) || void 0 === zU ? void 0 : zU.mobSettings.maxHealth,
          lU = Ry.e.getFriendshipLevelInfo(null !== (cU = null === (QU = fU.current) || void 0 === QU ? void 0 : QU.mobSettings.petInfo.friendshipPoints) && void 0 !== cU ? cU : 0);
        return (0, EU.jsx)(AU.c, {
          className: "PetUIOuter",
          close: SU,
          escDoesExit: !0,
          show: qU,
          togglePointerLock: wU,
          forcePointerUnlock: qU,
          globallyUniqueKey: "PetUI",
          children: (0, EU.jsx)("div", {
            className: "PetUI",
            children: (0, EU.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, EU.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, EU.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (FU = null === (oU = fU.current) || void 0 === oU ? void 0 : oU.mobSettings.name) && void 0 !== FU ? FU : "Your Pet"
                }), (0, EU.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: vU
                })]
              }), (0, EU.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, Gc.P)(null === (DU = fU.current) || void 0 === DU ? void 0 : DU.mobSettings.petInfo.friendshipPoints) && (0, EU.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, EU.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: rU("mobAiPlugin:friendshipTitle")
                  }), (0, EU.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: Ry.e.getIconsFromFriendshipPoints(null !== (YU = fU.current.mobSettings.petInfo.friendshipPoints) && void 0 !== YU ? YU : 0).map(((UU, XU) => (0, EU.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, EU.jsx)(Qz.c, {
                        itemName: UU,
                        amount: 1
                      })
                    }, XU)))
                  }), (0, EU.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, EU.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, EU.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${lU.totalPointsForNextLevel>0?Math.max(lU.pointsIntoCurrentLevel/lU.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, EU.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: Ry.e.getFriendshipBarText(lU)
                      })]
                    })
                  })]
                }), (0, EU.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, EU.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: rU("mobAiPlugin:hungerTitle")
                  }), (0, EU.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: Ry.e.hungerLevelIcons[iU.current].map(((UU, XU) => (0, EU.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, EU.jsx)(Qz.c, {
                        itemName: UU,
                        amount: 1
                      })
                    }, XU)))
                  }), (0, EU.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [rU(Ry.e.hungerLevelTranslations[iU.current].translationKey), iU.current !== Ry.e.MobHungerLevel.Starving && !(0, Gc.P)(null === (NU = fU.current) || void 0 === NU ? void 0 : NU.mobSettings.petInfo.lastFedAt) && (0, EU.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [rU("mobAiPlugin:nextFeedIn", {
                        state: rU(Ry.e.hungerLevelTranslations[iU.current + 1].translationKey)
                      }), ":", " ", (0, EU.jsx)("span", {
                        ref: HU
                      })]
                    })]
                  })]
                }), (0, EU.jsx)(xU.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, EU.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: rU("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, EU.jsxs)("div", {
                    className: Bz()("PetUIQuickStatsItem", {
                      Disabled: (0, Gc.P)(nU) || (0, Gc.P)(mU)
                    }),
                    children: [(0, EU.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, EU.jsx)(Qz.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, EU.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, Gc.P)(nU) || (0, Gc.P)(mU) ? "" : (0, EU.jsxs)(EU.Fragment, {
                        children: [Math.ceil(nU), (0, EU.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(mU)]
                        })]
                      })
                    })]
                  })
                }), (0, EU.jsx)(xU.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, EU.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: rU("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, EU.jsxs)("div", {
                    className: Bz()("PetUIQuickStatsItem", {
                      Disabled: (0, Gc.P)(null === (IU = fU.current) || void 0 === IU ? void 0 : IU.mobSettings.attackDamage) || fU.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, EU.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, EU.jsx)(Qz.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, EU.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (pU = fU.current) || void 0 === pU ? void 0 : pU.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, EU.jsx)(xU.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, EU.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: rU("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, EU.jsxs)("div", {
                    className: Bz()("PetUIQuickStatsItem", {
                      Disabled: (0, Gc.P)(null === (aU = fU.current) || void 0 === aU ? void 0 : aU.mobSettings.secondaryAttackDamage) || fU.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, EU.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, EU.jsx)(Qz.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, EU.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (gU = fU.current) || void 0 === gU ? void 0 : gU.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, EU.jsx)(xU.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, EU.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: rU("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, EU.jsxs)("div", {
                    className: Bz()("PetUIQuickStatsItem", {
                      Disabled: (0, Gc.P)(null === (kU = fU.current) || void 0 === kU ? void 0 : kU.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, EU.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, EU.jsx)(Qz.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, EU.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (GU = null === (BU = fU.current) || void 0 === BU || null === (ZU = BU.mobSettings.baseRunningSpeed) || void 0 === ZU ? void 0 : ZU.toFixed(2)) && void 0 !== GU ? GU : ""
                    })]
                  })
                }), (0, EU.jsx)(xU.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, EU.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: rU("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, EU.jsxs)("div", {
                    className: Bz()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (RU = fU.current) || void 0 === RU ? void 0 : RU.mobSettings.metaInfo)
                    }),
                    children: [(0, EU.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, EU.jsx)(Qz.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, EU.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (PU = fU.current) || void 0 === PU ? void 0 : PU.mobSettings.metaInfo) ? (0, EU.jsx)(tU.d, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, Gc.P)(null === (dU = fU.current) || void 0 === dU ? void 0 : dU.mobSettings.tameInfo) && (0, EU.jsxs)(EU.Fragment, {
                  children: [(0, EU.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, EU.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, EU.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, EU.jsx)(ey, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: Ry.e.feedTextColours[Ry.e.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, EU.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, EU.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: fU.current.mobSettings.petInfo.superlikedFoodKnown ? (0, EU.jsx)(Ly, {
                            food: fU.current.mobSettings.petInfo.superlikedFood
                          }) : (0, EU.jsx)(ey, {
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
                    }), (0, EU.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, EU.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, EU.jsx)(ey, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: Ry.e.feedTextColours[Ry.e.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, EU.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (LU = fU.current.mobSettings.tameInfo.likedFoods) || void 0 === LU ? void 0 : LU.filter((UU => !fU.current.mobSettings.petInfo.superlikedFoodKnown || UU !== fU.current.mobSettings.petInfo.superlikedFood)).map((UU => (0, EU.jsx)(Ly, {
                          food: UU
                        }, UU)))
                      })]
                    }), (0, EU.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, EU.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, EU.jsx)(ey, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: Ry.e.feedTextColours[Ry.e.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, EU.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (eU = fU.current.mobSettings.tameInfo.neutralFoods) || void 0 === eU ? void 0 : eU.map((UU => (0, EU.jsx)(Ly, {
                          food: UU
                        }, UU)))
                      })]
                    }), (0, EU.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, EU.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, EU.jsx)(ey, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: Ry.e.feedTextColours[Ry.e.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, EU.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (CU = fU.current.mobSettings.tameInfo.dislikedFoods) || void 0 === CU ? void 0 : CU.map((UU => (0, EU.jsx)(Ly, {
                          food: UU
                        }, UU)))
                      })]
                    })]
                  }), fU.current.mobSettings.tameInfo.levelUpBonuses && (0, EU.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: Ry.e.MAX_LEVEL + 1
                    }).map(((UU, XU) => {
                      const zU = XU;
                      if (0 === zU) return null;
                      const cU = fU.current.mobSettings.tameInfo.levelUpBonuses[zU],
                        yU = Ry.e.getBonusDisplayInfo(uU, fU.current.mobSettings, fU.current.mobType, cU);
                      return (0, EU.jsxs)("div", {
                        className: Bz()("PetUIFeedDropContainer", {
                          Selected: zU === Ry.e.getFriendshipLevelInfo(fU.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, EU.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: zU
                          }).map(((UU, XU) => (0, EU.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, EU.jsx)(Qz.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${zU}-${XU}`)))
                        }), (0, EU.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: yU && (0, EU.jsx)(ey, {
                            icon: yU.icon,
                            displayName: yU.displayName,
                            description: yU.description
                          })
                        })]
                      }, zU)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      Ly = (0, yU.memo)((function(UU) {
        let {
          food: XU,
          includeDescription: zU = !1
        } = UU;
        const cU = Wy(),
          yU = cU.getDefaultItemStat(XU, "displayName"),
          QU = cU.getDefaultItemStat(XU, "description");
        return (0, EU.jsx)(ey, {
          icon: XU,
          displayName: yU,
          description: zU ? QU : null
        })
      })),
      ey = (0, yU.memo)((function(UU) {
        let {
          icon: XU,
          displayName: zU,
          description: cU,
          tintColor: yU,
          className: QU = "PetUIFoodItem"
        } = UU;
        return (0, EU.jsx)(xU.d, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, EU.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, EU.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, EU.jsx)(PU.d, {
                text: zU
              })
            }), cU && (0, EU.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, EU.jsx)(PU.d, {
                text: cU
              })
            })]
          }),
          children: (0, EU.jsx)("div", {
            className: QU,
            children: (0, EU.jsx)(Qz.c, {
              itemName: XU,
              amount: 1,
              tintColor: yU
            })
          })
        })
      }));
    var Cy = zU(4139),
      wy = zU(1131),
      qy = zU(1258),
      Oy = zU(2609),
      Sy = zU(37579),
      ry = zU(1079),
      uy = zU(2500);

    function fy(UU) {
      let {
        peers: XU
      } = UU;
      const [zU, cU] = (0, yU.useState)(null), QU = (0, LU.i)("players");
      return (0, EU.jsx)("div", {
        className: "CodeEditorPresence",
        children: XU.map((UU => {
          var XU, yU;
          const AU = null !== (XU = null === (yU = QU.byId[UU.playerId]) || void 0 === yU ? void 0 : yU.cosmetics) && void 0 !== XU ? XU : {};
          return (0, EU.jsxs)("div", {
            className: Bz()("PresenceIcon", {
              Viewer: !UU.isEditor
            }),
            style: {
              backgroundColor: UU.colour
            },
            onMouseEnter: () => {
              cU(UU.playerId)
            },
            onMouseLeave: () => {
              cU(null)
            },
            children: [(0, EU.jsx)(uy.b, {
              cosmetics: AU
            }), zU === UU.playerId && (0, EU.jsx)("div", {
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
    var iy = zU(698),
      Hy = zU(37568),
      My = zU(37266),
      vy = zU(37588);

    function Vy(UU) {
      const XU = UU.split("/"),
        zU = [];
      for (let cU = 1; cU < XU.length; cU++) zU.push(XU.slice(0, cU).join("/"));
      return zU
    }

    function sy(UU) {
      return UU.slice(UU.lastIndexOf("/") + 1)
    }
    var ny = zU(37570);
    const my = (0, yU.memo)((function(UU) {
      var XU;
      let {
        files: zU,
        activePath: cU,
        canEdit: QU,
        directoryLinked: AU,
        pluginNames: FU,
        activePluginName: oU,
        activePluginFile: DU,
        onSelect: YU,
        onSelectPlugin: NU,
        onCreate: pU,
        onRename: aU,
        onRenameFolder: gU,
        onDelete: kU,
        onToggleDirectorySync: GU,
        schematics: BU,
        onManageSchematic: ZU
      } = UU;
      const {
        t: RU
      } = (0, jU.I)(), PU = null !== (XU = (0, Sy.e)(zU)) && void 0 !== XU ? XU : qy.d, WU = Object.keys(zU), [dU, LU] = (0, yU.useState)((() => new Set)), eU = function(UU, XU, zU) {
        const cU = {
          folders: new Map,
          files: []
        };
        for (const AU of UU) {
          if (AU === XU) continue;
          let UU = cU;
          for (const XU of Vy(AU)) {
            let zU = UU.folders.get(XU);
            zU || (zU = {
              folders: new Map,
              files: []
            }, UU.folders.set(XU, zU)), UU = zU
          }
          UU.files.push(AU)
        }
        const yU = [];
        UU.includes(XU) && yU.push({
          kind: "file",
          path: XU,
          name: sy(XU),
          depth: 0
        });
        const QU = (UU, XU) => {
          const cU = [...UU.folders.entries()].sort(((UU, XU) => {
            let [zU] = UU, [cU] = XU;
            return zU.localeCompare(cU)
          }));
          for (const [AU, FU] of cU) {
            const UU = zU.has(AU);
            yU.push({
              kind: "folder",
              path: AU,
              name: sy(AU),
              depth: XU,
              collapsed: UU
            }), UU || QU(FU, XU + 1)
          }
          UU.files.sort(((UU, XU) => UU.localeCompare(XU)));
          for (const zU of UU.files) yU.push({
            kind: "file",
            path: zU,
            name: sy(zU),
            depth: XU
          })
        };
        return QU(cU, 0), yU
      }(WU, PU, dU);
      (0, yU.useEffect)((() => {
        LU((UU => {
          const XU = new Set(UU);
          let zU = !1;
          for (const yU of Vy(cU)) zU = XU.delete(yU) || zU;
          return zU ? XU : UU
        }))
      }), [cU]);
      const CU = WU.length >= VX.A,
        wU = (UU, XU) => {
          if (UU.length > Oy.p) return `Path must be at most ${Oy.p} characters`;
          if (!(0, Oy.n)(UU)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === UU) return "index.d.ts cannot be the world-code entry";
          const cU = !!XU && (0, Sy.g)(XU, UU);
          if (XU && (0, Sy.i)(XU) && !cU) return `Cannot rename ${XU} (only swapping ${qy.d} and ${qy.h} is allowed)`;
          if (UU in zU) return "A file with that path already exists";
          if ((0, Sy.i)(UU) && !cU) {
            if ((UU === qy.d ? qy.h : qy.d) in zU) return `World code cannot have both ${qy.d} and ${qy.h}`
          }
          return null
        },
        qU = UU => {
          Qy.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === UU ? void 0 : `${UU}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: `FileTreePathPopup ${ny.b}`,
            validate: UU => wU(UU)
          }).getResult().then((UU => {
            "notificationTornDown" !== UU && null !== UU && "submit" === UU.type && pU(UU.value)
          }))
        },
        OU = UU => {
          Qy.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: UU,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: `FileTreePathPopup ${ny.b}`,
            validate: XU => XU === UU ? "That is already the file's path" : wU(XU, UU)
          }).getResult().then((XU => {
            "notificationTornDown" !== XU && null !== XU && "submit" === XU.type && aU(UU, XU.value)
          }))
        },
        SU = UU => {
          const XU = UU => UU.replace(/\/+$/, "");
          Qy.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: UU,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: `FileTreePathPopup ${ny.b}`,
            validate: zU => {
              const cU = XU(zU);
              if (cU === UU) return "That is already the folder's path";
              for (const [XU, yU] of(0, Sy.m)(WU, UU, cU)) {
                const UU = wU(yU, XU);
                if (null !== UU) return UU
              }
              return null
            }
          }).getResult().then((zU => {
            "notificationTornDown" !== zU && null !== zU && "submit" === zU.type && gU(UU, XU(zU.value))
          }))
        },
        rU = UU => {
          Qy.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: UU
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel",
            middleScreenPopupContainerClassName: ny.b
          }).getResult().then((XU => {
            !0 === XU && kU(UU)
          }))
        };
      return (0, EU.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, EU.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, EU.jsx)("span", {
            children: "Files"
          }), QU && !CU && (0, EU.jsx)(IU.n, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              qU()
            },
            children: (0, EU.jsx)(tU.d, {
              name: "plus"
            })
          })]
        }), (0, EU.jsxs)("div", {
          className: "FileTreeList",
          children: [eU.map((UU => {
            const XU = UU.path;
            if ("folder" === UU.kind) return (0, EU.jsx)(Jy, {
              path: XU,
              name: UU.name,
              depth: UU.depth,
              collapsed: UU.collapsed,
              onToggle: () => {
                var UU;
                UU = XU, LU((XU => {
                  const zU = new Set(XU);
                  return zU.delete(UU) || zU.add(UU), zU
                }))
              },
              canCreate: QU && !CU,
              canRename: QU,
              onCreate: qU,
              onRename: SU
            }, `folder:${XU}`);
            const yU = (0, Sy.i)(XU),
              AU = qy.d in zU && qy.h in zU,
              FU = !yU || AU,
              DU = null === oU && XU === cU;
            return (0, EU.jsx)(Ky, {
              path: XU,
              label: UU.name,
              depth: UU.depth,
              isActive: DU,
              canRename: QU,
              onSelect: YU,
              onRename: OU,
              onDelete: rU,
              canDelete: FU && QU
            }, XU)
          })), (0, EU.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, EU.jsxs)("span", {
              children: ["Schematics (", Object.keys(BU).length, "/", vy.h, ")"]
            }), QU && (0, EU.jsx)(IU.n, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(BU).length >= vy.h,
              onClick: () => {
                ZU("")
              },
              children: (0, EU.jsx)(tU.d, {
                name: "plus"
              })
            })]
          }), Object.keys(BU).sort().map((UU => (0, EU.jsx)(Ky, {
            path: UU,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: ZU
          }, UU))), FU.length > 0 && (0, EU.jsxs)(EU.Fragment, {
            children: [(0, EU.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, EU.jsx)("span", {
                children: "Plugins"
              })
            }), FU.map((UU => {
              var XU;
              const zU = Hy.i[UU],
                cU = Object.keys(null !== (XU = null === zU || void 0 === zU ? void 0 : zU.files) && void 0 !== XU ? XU : {
                  "index.ts": ""
                }).sort(((UU, XU) => "index.ts" === UU ? -1 : "index.ts" === XU ? 1 : UU.localeCompare(XU)));
              return (0, EU.jsxs)("div", {
                children: [(0, EU.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, Sy.u)(UU)
                }), cU.map((XU => (0, EU.jsx)(Ky, {
                  path: XU,
                  nested: !0,
                  isActive: oU === UU && DU === XU,
                  canRename: !1,
                  onSelect: () => {
                    NU(UU, XU)
                  },
                  canDelete: !1
                }, XU)))]
              }, UU)
            }))]
          })]
        }), (0, EU.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, EU.jsx)(IU.f, {
            className: "FileTreeFooterButton",
            onClick: GU,
            children: RU(AU ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function ly(UU) {
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

    function xy(UU) {
      let {
        depth: XU
      } = UU;
      return (0, EU.jsx)(EU.Fragment, {
        children: Array.from({
          length: XU
        }, ((UU, XU) => (0, EU.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": XU
          }
        }, XU)))
      })
    }

    function Jy(UU) {
      let {
        path: XU,
        name: zU,
        depth: cU,
        collapsed: yU,
        onToggle: QU,
        canCreate: AU,
        canRename: FU,
        onCreate: oU,
        onRename: DU
      } = UU;
      const YU = [];
      AU && YU.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          oU(XU)
        }
      }), FU && YU.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          DU(XU)
        }
      });
      const NU = ly(cU);
      return (0, EU.jsxs)("div", {
        className: Bz()("FileTreeItem FileTreeFolder", NU.className),
        style: NU.style,
        children: [(0, EU.jsx)(xy, {
          depth: cU
        }), (0, EU.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !yU,
          onClick: QU,
          children: [(0, EU.jsx)(tU.d, {
            className: "FileTreeFolderCaret",
            name: yU ? "caret-right" : "caret-down"
          }), (0, EU.jsx)(tU.d, {
            className: "FileTreeFolderIcon",
            name: yU ? "folder" : "folder-open"
          }), zU]
        }), (0, EU.jsx)(jy, {
          path: XU,
          actions: YU
        })]
      })
    }

    function jy(UU) {
      let {
        path: XU,
        actions: zU
      } = UU;
      const cU = (0, yU.useRef)(null);
      return 0 === zU.length ? null : (0, EU.jsxs)("div", {
        ref: cU,
        className: "FileTreeItemActions",
        children: [(0, EU.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${XU}`,
          children: (0, EU.jsx)(tU.d, {
            name: "ellipsis"
          })
        }), (0, EU.jsx)(My.d, {
          triggerElementRef: cU,
          options: zU
        })]
      })
    }

    function Ky(UU) {
      let {
        path: XU,
        label: zU = XU,
        depth: cU = 0,
        isActive: yU,
        canRename: QU,
        onSelect: AU,
        onRename: FU,
        onDelete: oU,
        canDelete: DU,
        nested: YU
      } = UU;
      const NU = [];
      QU && FU && NU.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          FU(XU)
        }
      }), DU && oU && NU.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          oU(XU)
        }
      });
      const IU = ly(cU);
      return (0, EU.jsxs)("div", {
        className: Bz()("FileTreeItem", IU.className, {
          Active: yU,
          Nested: YU
        }),
        style: IU.style,
        children: [(0, EU.jsx)(xy, {
          depth: cU
        }), (0, EU.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: zU === XU ? void 0 : XU,
          onClick: () => {
            AU(XU)
          },
          children: zU
        }), (0, EU.jsx)(jy, {
          path: XU,
          actions: NU
        })]
      })
    }
    async function by(UU) {
      const XU = (0, Sy.e)(UU);
      if (!XU || "" === UU[XU].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: cU
      } = await Promise.all([zU.e(605), zU.e(606)]).then((() => zU(44165)));
      return (0, Hy.e)(cU(UU))
    }
    var Ty = zU(37591);

    function hy(UU, XU) {
      const zU = Object.keys(UU),
        cU = Object.keys(XU);
      if (zU.length !== cU.length) return !1;
      for (const yU of zU)
        if (!(yU in XU) || UU[yU] !== XU[yU]) return !1;
      return !0
    }

    function UQ(UU, XU) {
      const zU = [],
        cU = [],
        yU = [];
      for (const QU of Object.keys(XU)) QU in UU ? UU[QU] !== XU[QU] && yU.push(QU) : zU.push(QU);
      for (const QU of Object.keys(UU)) QU in XU || cU.push(QU);
      return zU.sort(), cU.sort(), yU.sort(), {
        creates: zU,
        deletes: cU,
        updates: yU
      }
    }

    function XQ(UU, XU) {
      var zU;
      const cU = {
          ...UU
        },
        yU = (0, Sy.e)(XU),
        QU = (0, Sy.e)(cU);
      if (qy.d in cU && qy.h in cU) {
        const UU = null !== yU && void 0 !== yU ? yU : qy.h,
          zU = UU === qy.d ? qy.h : qy.d;
        var AU;
        if (!(UU in cU)) cU[UU] = null !== (AU = XU[UU]) && void 0 !== AU ? AU : "";
        return delete cU[zU], cU
      }
      var FU;
      return yU && !(yU in cU) ? (QU || (cU[yU] = null !== (FU = XU[yU]) && void 0 !== FU ? FU : ""), cU) : (QU || yU || (cU[qy.d] = null !== (zU = cU[qy.d]) && void 0 !== zU ? zU : "", delete cU[qy.h]), cU)
    }

    function zQ(UU, XU) {
      const zU = (0, Sy.e)(XU),
        cU = qy.d in XU && qy.h in XU;
      return UU.filter((UU => !(0, Sy.i)(UU) || (!!cU || zU !== UU)))
    }
    async function cQ(UU, XU, cU) {
      const yU = UU.getLobbyFiles(),
        QU = (0, VX.j)(cU, (0, Sy.o)(yU, XU)),
        AU = await UU.ensureJoined(XU),
        FU = (0, Oy.t)(AU.docKey);
      if (AU.doc === QU) return;
      for (let zU = 0; zU < 100; zU++) {
        const zU = UU.getCollabSnapshot();
        if (zU && (0, Oy.t)(zU.docKey) === FU && UU.getActivePath() === XU) {
          if (UU.replaceActiveDoc(FU, QU)) return;
          await (0, Gc.S)(40)
        } else await (0, Gc.S)(40)
      }
      const {
        ChangeSet: oU
      } = await zU.e(601).then((() => zU(44009))), EU = UU.getCollabSnapshot(), YU = EU && (0, Oy.t)(EU.docKey) === FU ? EU : AU;
      await async function(UU, XU, zU, cU) {
        const yU = UU.of({
            from: 0,
            to: zU.length,
            insert: cU
          }, zU.length),
          QU = JSON.stringify([{
            clientID: XU.clientID,
            changes: yU.toJSON()
          }]),
          AU = (0, Oy.t)(XU.docKey);
        QU.length <= Oy.h ? DU.gameBridge.send("sendCodeCollab", {
          Ey: Oy.c.Push,
          Yy: AU,
          Ny: XU.version,
          ty: QU
        }) : await (0, wy.postJsonWithMetricsCookiesAndJsonResponse)(`${XU.httpConfig.gsUrl}/code/collab-push`, Cy.p["collab-push"].toBuffer({
          gameNameWithVariation: XU.httpConfig.gameNameWithVariation,
          lobbyName: XU.httpConfig.lobbyName,
          docKey: AU,
          version: XU.version,
          updates: QU
        }), {
          retries: 0
        })
      }(oU, YU, YU.doc, QU)
    }
    class yQ {
      constructor(UU) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = UU
      }
      async writeLobbyFiles(UU) {
        const XU = {
            ...this.bridge.getLobbyFiles()
          },
          zU = {
            ...XU
          };
        for (const {
            path: QU,
            text: AU
          }
          of UU) zU[QU] = AU;
        if (!UU.every((UU => {
            let {
              path: XU,
              text: cU
            } = UU;
            return (0, VX.j)(cU, (0, Sy.o)(zU, XU)) === cU
          }))) return !1;
        const cU = [];
        try {
          for (const {
              path: XU,
              text: zU
            }
            of UU) cU.push(XU), XU in this.bridge.getLobbyFiles() || (this.bridge.createFile(XU, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(XU, !0)), await cQ(this.bridge, XU, zU)
        } catch (yU) {
          for (const UU of cU) UU in XU ? await cQ(this.bridge, UU, XU[UU]).catch((XU => {
            console.error("World Code AI: couldn't put back", UU, XU)
          })) : this.bridge.deleteFile(UU);
          throw yU
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const UU = await (0, Ty.t)(this.bridge.getStorageKey());
        return !!UU && (this.handle = UU, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(UU), !0)
      }
      async unlinkFolder() {
        const UU = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, Ty.c)(UU), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const UU = this.bridge.getStorageKey(),
          XU = await (0, Ty.s)(UU);
        return !!XU && (!!await (0, Ty.i)(XU, "readwrite") && (this.handle = XU, this.linked = !0, await (0, Ty.C)(UU, XU), await this.scaffoldLocalTypes(XU), !0))
      }
      scaffoldLocalTypes(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const cU = (await by(XU)).map((UU => Hy.i[UU])),
              yU = cU.map((UU => {
                var XU;
                return `${UU.name}:${Object.keys(null!==(XU=null===UU||void 0===UU?void 0:UU.files)&&void 0!==XU?XU:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === yU) return;
            const {
              ensureLocalBloxdTypes: QU
            } = await Promise.all([zU.e(98), zU.e(603), zU.e(608)]).then((() => zU(44173)));
            await QU(UU, cU), this.scaffoldedPluginNamesKey = yU
          } catch (cU) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", cU)
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
      async onDocTextChanged(UU, XU) {
        if (!this.handle) return;
        const zU = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [UU]: XU
        })];
        this.running && (this.pendingDocText.set(UU, XU), zU.push(this.flushDocTextToDisk())), await Promise.all(zU)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const UU = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const XU = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [zU, cU] of XU) this.lastSynced[zU] !== cU && (await (0, Ty.J)(UU, zU, cU), this.lastSynced = {
              ...this.lastSynced,
              [zU]: cU
            })
          }
        } catch (XU) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", XU), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, Ty.x)(this.handle))
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
            if (!await (0, Ty.i)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const XU = this.bridge.getLobbyFiles(),
              zU = await (0, Ty.x)(this.handle);
            for (const UU of Object.keys(XU).filter(vy.e)) {
              if (zU[UU] === Ty.m) return void this.bridge.setMessage(`Move ${UU} outside the linked folder before syncing its placeholder.`, "warning");
              zU[UU] = vy.q
            }
            if (hy(zU, XU)) {
              for (const UU of Object.keys(XU).filter(vy.e)) await (0, Ty.J)(this.handle, UU, vy.q);
              return this.lastSynced = {
                ...zU
              }, void this.beginWatch()
            }
            const cU = await this.promptReconcile(function(UU) {
              return null !== (0, Sy.e)(UU)
            }(zU));
            if ("unlink" === cU) return void await this.unlinkFolder();
            if ("dismissed" === cU) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === cU) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(zU);
                for (const UU of Object.keys(XU).filter(vy.e)) await (0, Ty.J)(this.handle, UU, vy.q);
                this.lastSynced = {
                  ...await (0, Ty.x)(this.handle)
                }
              } else await (0, Ty.N)(this.handle, XU), this.lastSynced = {
                ...XU
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
        return await new Promise((XU => {
          const zU = [{
              choice: "local",
              Button: IU.f,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: IU.f,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: IU.f,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            cU = (0, EU.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, EU.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, EU.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: UU ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, EU.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: zU.filter((XU => "local" !== XU.choice || UU)).map((UU => {
                  let {
                    choice: zU,
                    Button: cU,
                    labelKey: QU,
                    descriptionKey: AU
                  } = UU;
                  return (0, EU.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, EU.jsx)(cU, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (UU => {
                          yU.tearDownNotification(), XU(UU)
                        })(zU)
                      },
                      children: this.bridge.t(`codeEditor:${QU}`)
                    }), (0, EU.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${AU}`)
                    })]
                  }, zU)
                }))
              })]
            }),
            yU = Qy.NotificationProvider.showCustomPopup({
              body: cU,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync",
              middleScreenPopupContainerClassName: ny.b
            });
          yU.getResult().then((UU => {
            "notificationTornDown" === UU && XU("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, Ty.E)(this.handle, (UU => {
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
        const XU = this.bridge.getLobbyFiles();
        let zU = XQ(UU, this.lastSynced);
        for (const QU in XU)
          if ((0, vy.e)(QU) && zU[QU] === Ty.m) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const cU = Object.keys(zU).filter((UU => (0, vy.e)(UU) && !(UU in XU)));
        cU.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const QU of Object.keys(XU).filter(vy.e))(QU in zU || cU.length > 0 || !(QU in this.lastSynced)) && (zU[QU] = vy.q);
        if (!hy(zU, UU)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(UU, zU), zU = XQ(await (0, Ty.x)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!hy(zU, this.lastSynced)) {
          this.applying = !0;
          try {
            const UU = UQ(this.lastSynced, zU);
            if (await this.pushDiskDeltaToLobby(zU, XU), null !== this.lastLobbySeen)
              for (const zU of [...UU.creates, ...UU.updates, ...UU.deletes])(0, vy.e)(zU) || (zU in XU ? this.lastLobbySeen[zU] = XU[zU] : delete this.lastLobbySeen[zU]);
            this.lastSynced = {
              ...zU
            }
          } catch (yU) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", yU), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(UU, XU) {
        if (this.handle) {
          for (const zU of Object.keys(UU)) zU in XU || await (0, Ty.z)(this.handle, zU);
          for (const [zU, cU] of Object.entries(XU)) UU[zU] !== cU && await (0, Ty.J)(this.handle, zU, cU)
        }
      }
      async applyRemoteTreeToDisk(UU) {
        if (!this.handle) return;
        const XU = this.lastLobbySeen;
        if (null === XU) return void(this.lastLobbySeen = {
          ...UU
        });
        const zU = Object.keys(UU).filter((zU => XU[zU] !== UU[zU])),
          cU = Object.keys(XU).filter((XU => !(XU in UU)));
        if (0 !== zU.length || 0 !== cU.length) {
          this.applying = !0;
          try {
            for (const XU of [...cU, ...zU]) try {
              if (XU in UU) await (0, Ty.J)(this.handle, XU, UU[XU]), this.lastSynced = {
                ...this.lastSynced,
                [XU]: UU[XU]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [XU]: UU[XU]
              };
              else {
                await (0, Ty.z)(this.handle, XU);
                const UU = {
                  ...this.lastSynced
                };
                delete UU[XU], this.lastSynced = UU;
                const zU = {
                  ...this.lastLobbySeen
                };
                delete zU[XU], this.lastLobbySeen = zU
              }
            } catch (yU) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", yU), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(UU, XU) {
        const zU = function(UU, XU) {
          const zU = (0, Sy.e)(UU),
            cU = (0, Sy.e)(XU);
          return zU && cU && zU !== cU ? {
            from: zU,
            to: cU
          } : null
        }(UU, XU);
        return !!zU && (this.bridge.renameFile(zU.from, zU.to), await this.bridge.waitForLobbyPath(zU.to, !0), !0)
      }
      async applyLocalTreeToLobby(UU) {
        var XU;
        const zU = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), UU);
        const cU = this.bridge.getLobbyFiles(),
          yU = UQ(cU, UU),
          QU = zQ(yU.deletes, cU);
        for (const DU of yU.creates)(0, vy.e)(DU) || (this.bridge.createFile(DU, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(DU, !0));
        for (const DU of QU)(0, vy.e)(DU) || (this.bridge.deleteFile(DU), await this.bridge.waitForLobbyPath(DU, !1));
        if (!(0, Sy.e)(this.bridge.getLobbyFiles()) && !(0, Sy.e)(UU)) {
          if (this.bridge.createFile(qy.d, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(qy.d, !0), !this.handle) return;
          await (0, Ty.J)(this.handle, qy.d, ""), UU = {
            ...UU,
            [qy.d]: ""
          }
        }
        const AU = this.bridge.getLobbyFiles();
        for (const DU of Object.keys(UU))(0, vy.e)(DU) || AU[DU] !== UU[DU] && await cQ(this.bridge, DU, UU[DU]);
        const FU = this.bridge.getLobbyFiles(),
          oU = zU in FU ? zU : null !== (XU = (0, Sy.e)(FU)) && void 0 !== XU ? XU : qy.d;
        await this.bridge.ensureJoined(oU)
      }
      async pushDiskDeltaToLobby(UU, XU) {
        const zU = this.bridge.getActivePath(),
          cU = await this.renameLobbyEntryIfSwitched(XU, UU) ? this.bridge.getLobbyFiles() : XU,
          yU = UQ(this.lastSynced, UU),
          QU = zQ(yU.deletes, cU).filter((UU => UU in cU));
        for (const AU of yU.creates)(0, vy.e)(AU) || (AU in this.bridge.getLobbyFiles() || (this.bridge.createFile(AU, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(AU, !0)), await cQ(this.bridge, AU, UU[AU]));
        for (const AU of QU)(0, vy.e)(AU) ? await this.bridge.deleteSchematic(AU) : (this.bridge.deleteFile(AU), await this.bridge.waitForLobbyPath(AU, !1));
        for (const AU of yU.updates)(0, vy.e)(AU) || await cQ(this.bridge, AU, UU[AU]);
        zU in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== zU && await this.bridge.ensureJoined(zU)
      }
    }
    var QQ = zU(1203);

    function AQ() {
      const {
        websocketUrl: UU,
        gameNameWithVariation: XU,
        lobbyName: zU
      } = DU.gameBridge.latest("connectedGame");
      return {
        gsUrl: QQ.clientSideServerUrls.getHttpUrlFromWebSocketUrl(UU),
        gameNameWithVariation: XU,
        lobbyName: zU
      }
    }
    async function FQ(UU) {
      const {
        gsUrl: XU,
        gameNameWithVariation: zU,
        lobbyName: cU
      } = AQ();
      return await (0, wy.postBinaryWithMetricsCookiesAndCustomResponse)(`${XU}/code/schematics`, Cy.Bj.schematics.toBuffer({
        gameNameWithVariation: zU,
        lobbyName: cU,
        request: JSON.stringify(UU)
      }), {
        retries: 0
      }, wy.HttpPayloadType.json)
    }
    var oQ = zU(37046);

    function DQ(UU) {
      let {
        path: XU,
        revision: zU
      } = UU;
      const [cU, QU] = (0, yU.useState)(""), [AU, FU] = (0, yU.useState)(!1), [oU, DU] = (0, yU.useState)(0);
      return (0, yU.useEffect)((() => {
        let UU = !1;
        return QU(""), FU(!1), FQ({
          action: "preview",
          path: XU
        }).then((XU => {
          UU || QU(`data:image/webp;base64,${XU.previewBase64}`)
        })).catch((XU => {
          console.error("Could not load schematic preview", XU), UU || FU(!0)
        })), () => {
          UU = !0
        }
      }), [XU, zU, oU]), (0, EU.jsxs)("div", {
        className: "SchematicPreview",
        children: [cU && (0, EU.jsx)("img", {
          src: cU,
          alt: `Preview of ${XU}`
        }), !cU && !AU && (0, EU.jsx)(eU.b, {
          loaderType: "Secondary"
        }), AU && (0, EU.jsxs)(EU.Fragment, {
          children: [(0, EU.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, EU.jsx)(IU.f, {
            onClick: () => {
              DU(oU + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var EQ = zU(3498);

    function YQ(UU) {
      var XU;
      let {
        initialPath: zU,
        onChanged: cU,
        onClose: QU
      } = UU;
      const AU = "" === zU,
        [FU, oU] = (0, yU.useState)(null),
        [DU, YU] = (0, yU.useState)(zU),
        [NU, pU] = (0, yU.useState)(!1),
        [aU, tU] = (0, yU.useState)(!1),
        [gU, kU] = (0, yU.useState)(null),
        [GU, BU] = (0, yU.useState)(!1),
        [ZU, RU] = (0, yU.useState)(""),
        PU = (0, yU.useRef)(null),
        WU = (0, yU.useRef)(!1),
        dU = (0, yU.useRef)(!0);
      (0, yU.useEffect)((() => (dU.current = !0, FQ({
        action: "state"
      }).then((UU => {
        dU.current && oU(UU)
      })).catch((UU => {
        console.error("Could not load schematic assets", UU), dU.current && RU("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        dU.current = !1
      })), []);
      const LU = null === FU || void 0 === FU ? void 0 : FU.assets[zU],
        eU = Object.keys(null !== (XU = null === FU || void 0 === FU ? void 0 : FU.assets) && void 0 !== XU ? XU : {}).length,
        CU = DU.trim(),
        wU = CU ? (0, vy.e)(CU) ? null !== FU && void 0 !== FU && FU.assets[CU] && (AU || CU !== zU) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        qU = !!CU && !wU && (AU ? eU < vy.h : CU !== zU),
        OU = GU || !FU;
      async function SU(UU) {
        if (!WU.current && dU.current) {
          WU.current = !0, BU(!0), RU("");
          try {
            const XU = await FQ({
              ...UU,
              expectedRevision: FU.revision
            });
            cU(XU), dU.current && QU()
          } catch (zU) {
            var XU;
            if (console.error("Schematic asset operation failed", zU), dU.current) RU(zU instanceof mU.e ? null !== (XU = zU.errorMessageForUser) && void 0 !== XU ? XU : zU.message : String(zU));
            try {
              const UU = await FQ({
                action: "state"
              });
              cU(UU), dU.current && oU(UU)
            } catch (yU) {
              console.error("Could not refresh schematic assets", yU)
            }
          } finally {
            WU.current = !1, dU.current && BU(!1)
          }
        }
      }
      return (0, EU.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, EU.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: AU ? "New schematic" : NU ? "Rename schematic" : "Schematic"
        }), ZU && (0, EU.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: ZU
        }), !FU && !ZU && (0, EU.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, EU.jsxs)("fieldset", {
          disabled: OU,
          children: [AU || NU ? (0, EU.jsxs)("label", {
            className: "SchematicField",
            children: [(0, EU.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, EU.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, EU.jsx)(uz.e, {
                className: "InputGenericPopupInput",
                defaultValue: zU,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: YU
              }, NU ? "rename" : "create")
            })]
          }) : (0, EU.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: zU
          }), (AU || NU) && wU && (0, EU.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: wU
          }), AU ? (0, EU.jsxs)(EU.Fragment, {
            children: [eU >= vy.h && (0, EU.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", vy.h, " maximum)."]
            }), aU ? (0, EU.jsxs)(EU.Fragment, {
              children: [(0, EU.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, EU.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": OU || !qU,
                children: (0, EU.jsx)(oQ.d, {
                  loading: null === gU,
                  schematics: null !== gU && void 0 !== gU ? gU : [],
                  disableAutoExport: !0,
                  onSchematicPicked: UU => {
                    !OU && qU && SU({
                      action: "profile",
                      path: CU,
                      schematicId: UU.schematicId
                    })
                  }
                })
              }), (0, EU.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, EU.jsx)(IU.f, {
                  className: "InputGenericPopupButton",
                  disabled: OU,
                  onClick: () => {
                    tU(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, EU.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, EU.jsx)(IU.f, {
                className: "InputGenericPopupButton",
                disabled: OU || !qU,
                onClick: () => {
                  (0, EQ.g)(PU.current)
                },
                children: "Upload Schematic"
              }), (0, EU.jsx)(IU.f, {
                className: "InputGenericPopupButton",
                disabled: OU || !qU,
                onClick: () => {
                  !async function() {
                    if (tU(!0), RU(""), !gU) try {
                      const UU = await (0, wy.postJsonWithMetricsCookiesAndJsonResponse)(`${QQ.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      dU.current && kU(UU)
                    } catch (UU) {
                      console.error("Could not load profile schematics", UU), dU.current && (tU(!1), RU("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, EU.jsx)("input", {
              ref: PU,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: UU => {
                var XU;
                const zU = null === (XU = UU.target.files) || void 0 === XU ? void 0 : XU[0];
                if (UU.target.value = "", !zU) return;
                if (zU.size > vy.l) return void RU("The schematic file is too large.");
                const cU = CU;
                BU(!0);
                const yU = new FileReader;
                yU.onload = () => {
                  SU({
                    action: "upload",
                    path: cU,
                    base64: String(yU.result).split(",")[1]
                  })
                }, yU.onerror = () => {
                  console.error("Could not read schematic file", yU.error), dU.current && (BU(!1), RU("Could not read the selected file."))
                }, yU.readAsDataURL(zU)
              }
            })]
          }) : LU ? (0, EU.jsxs)(EU.Fragment, {
            children: [!NU && (0, EU.jsx)(DQ, {
              path: zU,
              revision: FU.revision
            }), !NU && (0, EU.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(LU.byteSize / 1024), " KB \xb7 ", LU.dimensions.join(" \xd7 "), " blocks"]
            }), (0, EU.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: NU ? (0, EU.jsxs)(EU.Fragment, {
                children: [(0, EU.jsx)(IU.f, {
                  className: "InputGenericPopupButton",
                  disabled: OU || !qU,
                  onClick: () => {
                    SU({
                      action: "rename",
                      path: zU,
                      newPath: CU
                    })
                  },
                  children: "Rename"
                }), (0, EU.jsx)(IU.f, {
                  className: "InputGenericPopupButton",
                  disabled: OU,
                  onClick: () => {
                    pU(!1), YU(zU)
                  },
                  children: "Cancel"
                })]
              }) : (0, EU.jsxs)(EU.Fragment, {
                children: [(0, EU.jsx)(IU.f, {
                  className: "InputGenericPopupButton",
                  disabled: OU,
                  onClick: () => {
                    pU(!0)
                  },
                  children: "Rename"
                }), (0, EU.jsx)(IU.G, {
                  className: "InputGenericPopupButton",
                  disabled: OU,
                  onClick: () => {
                    SU({
                      action: "remove",
                      path: zU
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : FU && (0, EU.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function NQ(UU) {
      if ("string" !== typeof UU) return null;
      try {
        const XU = JSON.parse(UU);
        return (0, Sy.k)(null === XU || void 0 === XU ? void 0 : XU.worldCodeEngine) && "boolean" === typeof XU.engineLocked && function(UU) {
          if (null === UU) return !0;
          const XU = null === UU || void 0 === UU ? void 0 : UU.location;
          return "string" === typeof(null === UU || void 0 === UU ? void 0 : UU.reason) && (null === XU || "string" === typeof(null === XU || void 0 === XU ? void 0 : XU.path) && Number.isInteger(XU.line))
        }(XU.fallback) ? XU : (console.error("[CodeCollab] Malformed engine settings", UU), null)
      } catch (XU) {
        return console.error("[CodeCollab] Failed to parse engine settings", XU), null
      }
    }

    function IQ(UU) {
      let {
        length: XU
      } = UU;
      const {
        t: zU,
        selectedLanguage: cU
      } = (0, jU.I)(), yU = function(UU) {
        return UU >= VX.e ? "full" : UU >= 3e4 ? "counter" : "none"
      }(XU), QU = "full" === yU ? "codeEditor:codeBlockFull" : "codeEditor:codeBlockLength", AU = (0, jU.l)(cU.code, QU), FU = VX.e.toLocaleString(AU);
      return (0, EU.jsxs)(EU.Fragment, {
        children: ["counter" === yU && (0, EU.jsx)("div", {
          className: "CodeEditorLengthNotice CodeEditorLengthCounter",
          children: zU(QU, {
            length: XU.toLocaleString(AU),
            max: FU
          })
        }), (0, EU.jsx)("div", {
          className: "full" === yU ? "CodeEditorLengthNotice" : void 0,
          role: "status",
          children: "full" === yU && zU(QU, {
            max: FU
          })
        })]
      })
    }

    function pQ(UU) {
      let {
        fallback: XU,
        onGoToLine: zU
      } = UU;
      const {
        t: cU
      } = (0, jU.I)(), {
        location: yU
      } = XU;
      return (0, EU.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [cU("codeEditorEngine:notice", {
          reason: XU.reason
        }), yU && (0, EU.jsxs)(EU.Fragment, {
          children: [" ", (0, EU.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              zU(yU.path, yU.line)
            },
            children: cU("codeEditorEngine:goToLine", {
              line: String(yU.line)
            })
          })]
        })]
      })
    }
    var aQ = zU(5458),
      tQ = zU(4775),
      gQ = zU(37598);

    function kQ(UU) {
      let {
        label: XU,
        hint: zU,
        checked: cU,
        onChange: yU
      } = UU;
      return (0, EU.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, EU.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, EU.jsx)("span", {
            children: XU
          }), (0, EU.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: zU
          })]
        }), (0, EU.jsx)("span", {
          className: "SwitchContainer",
          children: (0, EU.jsx)(tQ.d, {
            className: "SwitchCheckbox",
            checked: cU,
            onChange: UU => {
              yU(UU.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function GQ(UU) {
      let {
        engine: XU,
        onSetEngine: zU,
        aiHints: cU,
        variation: yU
      } = UU;
      const {
        t: QU
      } = (0, jU.I)(), [AU, FU] = (0, gQ.l)(gQ.h);
      return (0, EU.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, EU.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: QU("codeEditor:moreOptions")
        }), XU && (0, EU.jsx)(kQ, {
          label: QU("codeEditorEngine:toggle"),
          hint: QU("codeEditorEngine:toggleHint"),
          checked: "ses" === XU,
          onChange: UU => {
            zU(UU ? "ses" : "quickjs")
          }
        }), cU && (0, EU.jsx)(kQ, {
          label: QU("codeEditorAiHints:toggle"),
          hint: QU("codeEditorAiHints:toggleHint"),
          checked: cU.shown,
          onChange: cU.setShown
        }), cU && gQ.h.canChange && (0, EU.jsx)(kQ, {
          label: QU("codeEditorAiKeySafetyCheck:toggle"),
          hint: QU("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: AU,
          onChange: UU => {
            UU ? FU(!0) : Qy.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no",
              middleScreenPopupContainerClassName: ny.b
            }).getResult().then((UU => {
              !0 === UU && FU(!1)
            }))
          }
        }), yU && (0, EU.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, EU.jsx)(aQ.g, {
            label: "codeEditor:variationLabel",
            children: (0, EU.jsx)(uz.e, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: yU.name,
              onValueChange: yU.setName,
              onEnter: yU.reload
            })
          }), (0, EU.jsx)(IU.r, {
            className: "CodeEditorButton",
            onClick: yU.reload,
            children: QU("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var BQ = zU(37604),
      ZQ = zU(37612);

    function RQ(UU) {
      let {
        close: XU
      } = UU;
      const {
        t: zU
      } = (0, jU.I)(), cU = [{
        name: zU("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: zU("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: zU("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, EU.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, EU.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: zU("codeEditor:tutorialsTitle")
        }), (0, EU.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: cU.map((UU => (0, EU.jsx)(IU.f, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              XU(), (0, ZQ.J)(UU.tutorial)
            },
            children: UU.name
          }, UU.tutorial)))
        })]
      })
    }
    var PQ = zU(114),
      WQ = zU(37259),
      dQ = zU(2988);
    const LQ = (0, yU.forwardRef)((function(UU, XU) {
      let {
        value: zU,
        onChange: cU,
        onSubmit: yU,
        placeholder: QU,
        maxLength: AU,
        rows: FU = 2,
        allowNewLines: oU = !1,
        onKeyDown: DU,
        before: YU
      } = UU;
      const {
        t: NU
      } = (0, jU.I)(), pU = "" !== zU.trim(), aU = () => {
        pU && yU()
      };
      return (0, EU.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [YU, (0, EU.jsx)("textarea", {
          ref: XU,
          className: "PanelPromptInput",
          value: zU,
          maxLength: AU,
          rows: FU,
          placeholder: QU,
          spellCheck: !1,
          autoComplete: "off",
          onChange: UU => {
            cU(oU ? UU.target.value : UU.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: UU => {
            UU.nativeEvent.isComposing || 229 === UU.nativeEvent.keyCode ? UU.stopPropagation() : "Escape" !== UU.key && (UU.stopPropagation(), null === DU || void 0 === DU || DU(UU), UU.defaultPrevented || "Enter" !== UU.key || oU && UU.shiftKey || (UU.preventDefault(), aU()))
          }
        }), (0, EU.jsx)(IU.f, {
          className: "PanelPromptSend",
          disabled: !pU,
          onClick: aU,
          ariaLabel: NU("codeEditorPanels:send"),
          children: (0, EU.jsx)(tU.d, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function eQ(UU) {
      let {
        inputRef: XU
      } = UU;
      const {
        t: zU
      } = (0, jU.I)(), {
        messages: cU,
        reportedPlayers: QU,
        channel: AU
      } = (0, dQ.l)(), [FU, oU] = (0, yU.useState)(""), DU = (0, yU.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, EU.jsxs)("div", {
        className: "CodeEditorChatPanel",
        "data-replay-redact": !0,
        children: [(0, EU.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, EU.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: zU("codeEditorChat:title")
          })
        }), 0 === cU.length ? (0, EU.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: zU("codeEditorChat:empty")
        }) : (0, EU.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, EU.jsx)(WQ.c, {
            messages: cU,
            reportedPlayers: QU
          })
        }), (0, EU.jsx)(LQ, {
          ref: XU,
          value: FU,
          onChange: oU,
          onSubmit: () => {
            (0, dQ.k)(FU), oU(""), DU.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: dU.jd,
          rows: 1,
          placeholder: AU ? zU("touchOnly" === (0, PQ.c)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: AU.channelName
          }) : zU("codeEditorChat:placeholder"),
          before: AU && (0, EU.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: AU.elementBgColor
            },
            onClick: () => {
              dQ.c.selectNextChannel(), XU.current.focus()
            },
            children: (0, EU.jsx)(PU.d, {
              text: AU.elementContent
            })
          }),
          onKeyDown: UU => {
            const XU = FU === DU.current.text;
            if ("ArrowUp" !== UU.key && "ArrowDown" !== UU.key || !XU && "" !== FU) "Tab" === UU.key && !UU.shiftKey && AU && (UU.preventDefault(), dQ.c.selectNextChannel());
            else {
              UU.preventDefault();
              const zU = XU ? DU.current.stepsBack : 0;
              DU.current = (0, dQ.g)(zU + ("ArrowUp" === UU.key ? 1 : -1)), oU(DU.current.text)
            }
          }
        })]
      })
    }
    var CQ = zU(37621);

    function wQ(UU) {
      return "expanded" === UU ? "always" : "shown" === UU ? "narrow" : void 0
    }

    function qQ(UU) {
      var XU;
      let {
        qY: zU,
        worldPanel: cU,
        closeWorld: yU,
        aiShown: QU,
        defaultWidth: AU,
        children: FU
      } = UU;
      const oU = "hidden" !== zU;
      return (0, EU.jsx)(CQ.b, {
        side: "right",
        defaultSize: oU ? "max(18rem, 40%)" : AU,
        covers: null !== (XU = wQ(zU)) && void 0 !== XU ? XU : QU ? "narrow" : void 0,
        children: (0, EU.jsxs)("div", {
          className: Bz()("CodeEditorRightColumn", {
            WorldShown: oU,
            WorldExpanded: "expanded" === zU
          }),
          children: [oU && (0, EU.jsx)(CQ.b, {
            side: "top",
            onClose: yU,
            children: cU
          }), FU]
        })
      })
    }
    var OQ = zU(2053),
      SQ = zU(1124),
      rQ = zU(1322);
    class uQ {
      constructor(UU, XU, zU) {
        this.measure = UU, this.apply = XU, this.now = zU, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var UU, XU;
        return null !== (UU = null === (XU = this.last) || void 0 === XU ? void 0 : XU.rect) && void 0 !== UU ? UU : null
      }
      sync() {
        const UU = function(UU) {
          const XU = Math.round(UU.left),
            zU = Math.round(UU.top);
          return {
            left: XU,
            top: zU,
            width: Math.round(UU.right) - XU,
            height: Math.round(UU.bottom) - zU
          }
        }(this.measure());
        if (UU.width <= 0 || UU.height <= 0) return;
        const XU = this.now(),
          zU = this.last;
        let cU = {
          width: UU.width,
          height: UU.height
        };
        null === zU || UU.width === zU.rect.width && UU.height === zU.rect.height || (this.resizing = XU - this.resizedAt < 100, this.resizedAt = XU);
        const yU = null !== zU && this.resizing && XU - this.resizedAt < 100 && (UU.width !== zU.bufferSize.width || UU.height !== zU.bufferSize.height);
        yU && (this.stretchedAt ??= XU), yU && XU - this.stretchedAt < 250 ? cU = zU.bufferSize : this.stretchedAt = null;
        const QU = {
          rect: UU,
          bufferSize: cU
        };
        var AU, FU;
        null !== zU && (FU = QU, (AU = zU).rect.left === FU.rect.left && AU.rect.top === FU.rect.top && AU.rect.width === FU.rect.width && AU.rect.height === FU.rect.height && AU.bufferSize.width === FU.bufferSize.width && AU.bufferSize.height === FU.bufferSize.height) || (this.last = QU, this.apply(QU))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function fQ(UU) {
      const {
        style: XU
      } = document.documentElement;
      for (const [zU, cU] of [
          ["--worldViewLeft", null === UU || void 0 === UU ? void 0 : UU.left],
          ["--worldViewTop", null === UU || void 0 === UU ? void 0 : UU.top],
          ["--worldViewWidth", null === UU || void 0 === UU ? void 0 : UU.width],
          ["--worldViewHeight", null === UU || void 0 === UU ? void 0 : UU.height]
        ]) void 0 === cU ? XU.removeProperty(zU) : XU.setProperty(zU, `${cU}px`)
    }
    var iQ = zU(1800),
      HQ = zU(2064);

    function MQ(UU, XU) {
      (0, yU.useEffect)((() => {
        if (!UU) return;
        const zU = UU => {
          var zU;
          "Escape" === UU.key ? (UU.stopPropagation(), UU.preventDefault(), XU()) : (zU = UU.code, Object.entries(nX.w).some((UU => {
            let [XU, cU] = UU;
            const yU = HQ.i[XU];
            return yU.includes("ui") && !yU.includes("core") && cU.includes(zU)
          })) && !(0, iQ.isTextEntry)(UU.target) && UU.preventDefault())
        };
        window.addEventListener("keydown", zU, !0);
        const cU = (0, vU.l)(XU);
        return () => {
          window.removeEventListener("keydown", zU, !0), cU()
        }
      }), [UU, XU])
    }

    function vQ() {
      return (0, gy.p)().some((UU => UU !== gy.c))
    }

    function VQ(UU, XU) {
      return UU.map((UU => XU ? String(UU) : UU.toFixed(1))).join(", ")
    }

    function sQ(UU) {
      let {
        freeCamera: XU,
        picking: zU,
        hovered: cU
      } = UU;
      const {
        t: QU
      } = (0, jU.I)(), AU = (0, yU.useRef)(null), FU = (0, yU.useRef)(null);
      return (0, yU.useEffect)((() => {
        const UU = (UU, XU) => {
            UU.textContent !== XU && (UU.textContent = XU)
          },
          zU = () => {
            const zU = XU ? DU.gameBridge.lookup("freeCameraPos", null) : null;
            UU(AU.current, VQ(null !== zU && void 0 !== zU ? zU : DU.gameBridge.lookup("localPos", null), !1));
            const cU = DU.gameBridge.lookup("targetedBlockPos", null);
            UU(FU.current, cU ? VQ(cU, !0) : "-")
          };
        return zU(), (0, rQ.y)(zU)
      }), [XU]), (0, EU.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, EU.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: QU(XU ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, EU.jsx)("span", {
          ref: AU
        }), (0, EU.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: QU("codeEditorWorld:lookingAt")
        }), (0, EU.jsx)("span", {
          ref: FU,
          hidden: zU
        }), zU && (0, EU.jsxs)(EU.Fragment, {
          children: [(0, EU.jsx)("span", {
            children: cU ? VQ(cU.pos, !0) : "-"
          }), cU && (0, EU.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: cU.name
          })]
        })]
      })
    }
    var nQ = zU(37624),
      mQ = zU(1515);

    function lQ(UU) {
      const XU = UU.currentTarget.getBoundingClientRect();
      return {
        x: (UU.clientX - XU.left) / XU.width,
        y: (UU.clientY - XU.top) / XU.height
      }
    }

    function xQ(UU) {
      const [XU, zU] = (0, yU.useState)(!1), [cU, QU] = (0, yU.useState)(null), AU = (0, yU.useRef)(null);
      (0, yU.useEffect)((() => {
        if (!XU) return;
        let UU = null,
          zU = null,
          cU = 1 / 0;
        const yU = (0, rQ.t)((XU => {
          cU += XU;
          const yU = AU.current;
          if (yU === zU && cU < 100) return;
          zU = yU, cU = 0;
          const FU = yU && DU.gameBridge.lookup("blockAtViewPoint", yU);
          var oU, EU;
          (oU = FU) === (EU = UU) || null !== oU && null !== EU && oU.name === EU.name && (0, nQ.h)(oU.pos, EU.pos) && (0, nQ.h)(oU.normal, EU.normal) || (UU = FU, QU(FU), DU.gameBridge.send("setBlockHighlight", FU))
        }));
        return () => {
          yU(), null !== UU && DU.gameBridge.send("setBlockHighlight", null), QU(null)
        }
      }), [XU]);
      const FU = (0, yU.useCallback)((() => {
        zU(!1)
      }), []);
      MQ(XU, FU);
      const oU = cU => {
          if (!XU) return;
          const yU = DU.gameBridge.lookup("blockAtViewPoint", lQ(cU));
          null !== yU && (zU(!1), UU(yU.pos))
        },
        EU = XU ? (0, mQ.f)(oU, "pointerup") : null,
        YU = {
          onPointerDown: UU => {
            null === EU || void 0 === EU || EU.onPointerDown(UU)
          },
          onPointerMove: UU => {
            AU.current = lQ(UU)
          },
          onPointerLeave: () => {
            AU.current = null
          },
          onPointerUp: null === EU || void 0 === EU ? void 0 : EU.onPointerUp,
          onClick: UU => {
            "pointerType" in UU.nativeEvent && "touch" === UU.nativeEvent.pointerType || oU(UU)
          }
        };
      return {
        picking: XU,
        setPicking: zU,
        hovered: cU,
        slotHandlers: YU
      }
    }

    function JQ(UU) {
      DU.gameBridge.send("setFreeCameraMovesFly", UU)
    }

    function jQ(UU) {
      let {
        shown: XU,
        setShown: zU,
        canInsertCode: cU
      } = UU;
      const {
        t: QU
      } = (0, jU.I)(), {
        isTouchScreen: AU
      } = (0, MU.q)(["isTouchScreen"]), FU = (0, yU.useRef)(null), DU = (0, yU.useCallback)((() => {
        var UU;
        null === (UU = FU.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === UU || UU.focus()
      }), []), {
        control: YU,
        take: NU,
        release: aU,
        blocked: gU
      } = function(UU) {
        const [XU, zU] = (0, yU.useState)("none"), cU = (0, yU.useRef)("none"), [QU, AU] = (0, yU.useState)(!1), FU = UU => {
          cU.current = UU, zU(UU)
        }, oU = (0, yU.useCallback)((() => {
          const XU = cU.current;
          "none" !== XU && (FU("none"), (0, gy.u)(gy.c), "mouse" === XU && UU())
        }), [UU]), DU = (0, yU.useCallback)((UU => {
          vQ() ? AU(!0) : (FU("mouse" === UU && "touchOnly" !== (0, PQ.c)() ? "mouse" : "touch"), (0, gy.s)(gy.c))
        }), []);
        return (0, WU.f)("pointerLockUpdate", (UU => {
          UU && "touch" === cU.current && "touchOnly" !== (0, PQ.c)() ? FU("mouse") : UU || "mouse" !== cU.current || oU()
        })), (0, yU.useEffect)((() => {
          if (!QU) return;
          const UU = () => {
            vQ() || AU(!1)
          };
          return UU(), (0, gy.j)(UU)
        }), [QU]), MQ("none" !== XU, oU), (0, yU.useEffect)((() => {
          if ("none" === XU) return;
          const UU = UU => {
            (0, iQ.isTextEntry)(UU.target) && oU()
          };
          return document.addEventListener("focusin", UU), () => {
            document.removeEventListener("focusin", UU)
          }
        }), [XU, oU]), (0, yU.useEffect)((() => (document.addEventListener("pointerlockerror", oU), () => {
          document.removeEventListener("pointerlockerror", oU)
        })), [oU]), (0, yU.useEffect)((() => () => {
          "none" !== cU.current && null !== MU.e.get("openInGameMenuName") && (0, gy.u)(gy.c)
        }), []), {
          control: XU,
          take: DU,
          release: oU,
          blocked: QU
        }
      }(DU), kU = (0, SQ.l)(CQ.d);
      (0, yU.useEffect)((() => {
        "touch" !== YU || "shown" !== XU || kU ? "none" === YU && "expanded" === XU && zU("shown") : zU("expanded")
      }), [YU, kU]),
      function(UU, XU) {
        const zU = (0, yU.useRef)(XU);
        zU.current = XU;
        const cU = (0, yU.useRef)(null);
        (0, yU.useLayoutEffect)((() => {
          const XU = new uQ((() => UU.current.getBoundingClientRect()), (UU => {
            var XU;
            "none" !== zU.current && fQ(null !== (XU = null === UU || void 0 === UU ? void 0 : UU.rect) && void 0 !== XU ? XU : null), (0, rQ.B)().setGameView(UU)
          }), (() => performance.now()));
          cU.current = XU, XU.sync();
          const yU = (0, rQ.r)((() => {
            XU.sync()
          }));
          return () => {
            yU(), MU.e.set({
              worldPanelHud: null
            }), XU.stop()
          }
        }), [UU]), (0, yU.useLayoutEffect)((() => {
          cU.current.sync(), fQ("none" === XU ? null : cU.current.rect), MU.e.set({
            worldPanelHud: XU
          })
        }), [XU])
      }(FU, "touch" === YU ? "touchControls" : "none");
      const {
        picking: GU,
        setPicking: BU,
        hovered: ZU,
        slotHandlers: {
          onPointerDown: RU,
          ...PU
        }
      } = xQ((UU => {
        pU.k.UY("CodeEditorInsertText", {
          text: `[${UU.join(", ")}]`,
          focus: !AU
        }), (0, CQ.d)() && zU("hidden")
      })), dU = function() {
        const {
          allowed: UU,
          movesFly: XU
        } = (0, LU.i)("freeCamera"), zU = (0, yU.useRef)(XU), cU = (0, yU.useRef)(XU);
        return cU.current !== XU && (cU.current = XU, zU.current = XU), (0, yU.useEffect)((() => () => {
          zU.current && JQ(!1)
        }), []), {
          allowed: UU,
          on: XU,
          toggle: () => {
            zU.current = !XU, JQ(!XU)
          }
        }
      }(), eU = (0, oU.f)("hideCoordinates"), CU = (0, LU.i)("localPlayerAlive"), wU = !CU || gU;
      (0, yU.useEffect)((() => {
        CU || aU()
      }), [CU, aU]), (0, yU.useEffect)((() => {
        !wU && cU || BU(!1)
      }), [wU, cU, BU]);
      const qU = dU.on ? IU.l : IU.f,
        OU = GU ? IU.l : IU.f;
      return (0, EU.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, EU.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, EU.jsx)("span", {
            className: "WorldPanelTitle",
            children: QU("codeEditorWorld:title")
          }), "touch" === YU && !kU && (0, EU.jsx)(IU.f, {
            className: "WorldPanelButton",
            onClick: aU,
            children: QU("codeEditorWorld:backToCode")
          }), !wU && dU.allowed && !AU && (0, EU.jsx)(xU.d, {
            tooltipInner: QU("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, EU.jsx)(qU, {
              className: "WorldPanelButton",
              ariaPressed: dU.on,
              ariaLabel: QU("codeEditorWorld:freeCamera"),
              onClick: dU.toggle,
              children: (0, EU.jsx)(tU.d, {
                name: "video"
              })
            })
          }), !wU && cU && (0, EU.jsx)(xU.d, {
            tooltipInner: QU("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, EU.jsxs)(OU, {
              className: "WorldPanelButton",
              ariaPressed: GU,
              onClick: () => {
                aU(), BU(!GU)
              },
              children: [(0, EU.jsx)(tU.d, {
                name: "crosshairs"
              }), QU("codeEditorWorld:pick")]
            })
          })]
        }), !eU && (0, EU.jsx)(sQ, {
          freeCamera: dU.on,
          picking: GU,
          hovered: ZU
        }), (0, EU.jsxs)("div", {
          ref: FU,
          className: Bz()("WorldPanelSlot", {
            TouchControl: "touch" === YU,
            Picking: GU
          }),
          onPointerDown: UU => {
            0 !== UU.button || wU || GU || NU(UU.pointerType), RU(UU)
          },
          ...PU,
          children: [!wU && !GU && (0, EU.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !wU && "touch" !== YU && (0, EU.jsxs)("div", {
            className: "WorldPanelHint",
            children: [GU && QU(AU ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !GU && "none" === YU && !dU.on && QU(AU ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !GU && "none" === YU && dU.on && QU("codeEditorWorld:clickToFly"), "mouse" === YU && (0, EU.jsxs)(EU.Fragment, {
              children: [(0, EU.jsx)(OQ.c, {
                noaAction: "OpenLobbyLeaderboard"
              }), QU("codeEditorWorld:backToCode")]
            })]
          }), wU && (0, EU.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, EU.jsx)("span", {
              children: QU(CU ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, EU.jsx)(IU.f, {
              onClick: vU.f,
              children: QU("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var KQ = zU(5581);

    function bQ(UU) {
      let {
        qY: XU,
        setWorld: zU,
        toggleWorld: cU,
        aiShown: yU,
        closeAi: QU
      } = UU;
      const {
        t: AU
      } = (0, jU.I)(), FU = yU ? "ai" : "hidden" !== XU ? "world" : "code", oU = [{
        value: "code",
        label: AU("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: AU("codeEditorWorld:title")
      }];
      yU && oU.push({
        value: "ai",
        label: AU("codeEditorWorld:aiPane")
      });
      return (0, EU.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, EU.jsx)(KQ.d, {
          options: oU,
          value: FU,
          onChange: UU => {
            "world" !== UU ? (yU && QU(), zU("hidden")) : "hidden" === XU ? cU() : QU()
          },
          ariaLabel: AU("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var TQ = zU(37629),
      hQ = zU(37637),
      UA = zU(37643),
      XA = zU(37646);
    const zA = (0, yU.lazy)((() => Promise.all([zU.e(605), zU.e(601), zU.e(604), zU.e(600), zU.e(98), zU.e(603), zU.e(602), zU.e(599)]).then((() => zU(43998))))),
      cA = (0, yU.lazy)((() => Promise.all([zU.e(93), zU.e(96), zU.e(97), zU.e(95), zU.e(607)]).then((() => zU(44152))))),
      yA = (0, yU.lazy)((() => Promise.all([zU.e(605), zU.e(604), zU.e(98), zU.e(96), zU.e(97), zU.e(95), zU.e(603), zU.e(602), zU.e(94), zU.e(105)]).then((() => zU(44154)))));

    function QA(UU) {
      return DU.gameBridge.query("worldCodeAiChunk", UU)
    }

    function AA() {
      return DU.gameBridge.query("worldCodeAiGameState", null)
    }

    function FA(UU) {
      const {
        gsUrl: XU,
        gameNameWithVariation: zU,
        lobbyName: cU
      } = AQ();
      return (0, wy.postJsonWithMetricsCookiesAndJsonResponse)(`${XU}/code/get-lobby-code`, Cy.Bj["get-lobby-code"].toBuffer({
        gameNameWithVariation: zU,
        lobbyName: cU,
        path: UU
      }), {
        retries: 1
      })
    }
    let oA = !1;
    const DA = [],
      EA = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      YA = (0, yU.memo)((function(UU) {
        var XU, zU;
        let {
          show: cU,
          onOpen: QU,
          onClose: FU,
          isLobbyCode: YU
        } = UU;
        const NU = (0, yU.useRef)(""),
          [aU, gU] = (0, yU.useState)(null),
          kU = (0, yU.useRef)(YU),
          [GU, BU] = (0, yU.useState)({
            message: null,
            type: null
          }),
          [ZU, RU] = (0, yU.useState)(""),
          PU = GU.message ? GU : {
            message: ZU,
            type: "warning"
          },
          [CU, wU] = (0, yU.useState)(!0),
          [qU, SU] = (0, gQ.l)(gQ.k),
          [rU, uU] = (0, gQ.l)(gQ.e),
          [fU, iU] = (0, yU.useState)(!1),
          [HU, VU] = (0, yU.useState)(!1),
          sU = (0, yU.useRef)(null),
          nU = (0, yU.useRef)(!1);
        (0, yU.useEffect)((() => {
          var UU;
          HU && nU.current && (nU.current = !1, null === (UU = sU.current) || void 0 === UU || UU.focus())
        }), [HU]);
        const mU = (0, TQ.d)(),
          lU = (0, yU.useRef)(null),
          JU = (0, yU.useRef)(null),
          {
            openInGameMenuName: KU,
            openEverythingMenuName: bU,
            worldPanelHud: TU
          } = (0, MU.q)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          hU = UU => {
            cU && (lU.current = UU, LX.current = !0)
          };
        (0, WU.f)("OpenReportMenu", (() => {
          hU("oY")
        })), (0, WU.f)("OpenStoreFromCodeEditor", (() => {
          hU("store")
        })), (0, yU.useEffect)((() => {
          const UU = lU.current;
          null === UU || "oY" === UU && ("makeReport" === KU || "makeDiscordReport" === KU) || "store" === UU && null !== bU || (lU.current = null, null === KU && null === bU ? YU ? (JU.current = cz.current, pU.k.UY("EditLobbyCode", aU)) : pU.k.UY("EditCodeBlock", {
            pos: aU,
            canChangePos: kU.current
          }) : (0, ZQ.D)())
        }), [KU, bU, YU, aU]), (0, yU.useEffect)((() => {
          if (cU) return () => {
            JU.current = null
          }
        }), [cU]);
        const [UX, XX] = function() {
          const [UU, XU] = (0, yU.useState)(oA);
          return (0, WU.f)("CodeEditorAiHelperShown", (UU => {
            XU(UU)
          })), [UU, (0, yU.useCallback)((UU => {
            oA = UU, pU.k.UY("CodeEditorAiHelperShown", UU)
          }), [])]
        }(), [zX, cX] = (0, yU.useState)(null), [yX, QX] = (0, yU.useState)([]), [AX, FX] = (0, yU.useState)(0), [oX, DX] = (0, yU.useState)(0), [EX, YX] = (0, yU.useState)(""), IX = (0, yU.useRef)(null), [pX, aX] = (0, yU.useState)(YU ? XA.c : null), tX = YU || null !== aU, gX = (0, oU.f)("canEditCode"), kX = (0, oU.f)("canUseDevCreativeItems"), GX = (0, BQ.k)("welcome"), BX = (0, BQ.k)("docsOverview"), ZX = BX ? "docsOverview" : "welcome", RX = null !== BX && void 0 !== BX ? BX : GX, PX = (0, BQ.k)("aiHelperOverview"), WX = PX ? "aiHelperOverview" : "welcome", dX = null !== PX && void 0 !== PX ? PX : GX, LX = (0, yU.useRef)(!1), eX = (0, yU.useRef)(!1), CX = (0, yU.useRef)(null), [wX, qX] = (0, yU.useState)(""), [OX, SX] = (0, yU.useState)(!1), [rX, uX] = (0, yU.useState)(null), fX = (0, LU.i)("connectedGame"), iX = YU && gX && "classic" === fX.gameNameWithVariation && !(0, NX.G)(fX.lobbyName), [HX, MX] = (0, yU.useState)(null), [vX, sX] = (0, yU.useState)({
          [qy.d]: ""
        }), [mX, lX] = (0, yU.useState)({
          assets: {},
          revision: 0
        }), xX = (0, yU.useRef)(mX), JX = (0, yU.useCallback)((UU => {
          var XU;
          UU.revision < xX.current.revision || (xX.current = UU, lX(UU), RU(UU.startupError ? `Schematics could not load: ${UU.startupError}` : ""), null === (XU = az.current) || void 0 === XU || XU.onLobbyFilesChanged({
            ...oz.current,
            ...(0, vy.o)(UU.assets)
          }))
        }), []), [jX, KX] = (0, yU.useState)(qy.d), [bX, TX] = (0, yU.useState)(null), [hX, Uz] = (0, yU.useState)(null), Xz = (0, yU.useRef)(!1), zz = (0, yU.useRef)(null), cz = (0, yU.useRef)(jX);
        cz.current = jX;
        const yz = (0, yU.useRef)(bX);
        yz.current = bX;
        const Qz = bX ? null : rX,
          Az = Qz && !Qz.engineLocked ? Qz.worldCodeEngine : null,
          Fz = (0, yU.useRef)(hX);
        Fz.current = hX;
        const oz = (0, yU.useRef)(vX);
        oz.current = vX;
        const Dz = (0, yU.useRef)(null),
          Ez = (0, yU.useRef)(null),
          [Yz, Nz] = (0, yU.useState)(!1),
          Iz = (0, Ty.o)(),
          pz = (0, yU.useRef)([]),
          az = (0, yU.useRef)(null),
          tz = (0, yU.useRef)(null),
          gz = (0, yU.useRef)(null);

        function kz(UU) {
          BU(UU), clearTimeout(CX.current), CX.current = setTimeout((() => {
            BU({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const Gz = (0, yU.useCallback)((function() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Xz.current && zz.current && (DU.gameBridge.send("sendCodeCollab", {
              Ey: Oy.c.Leave,
              Yy: (0, Oy.t)(zz.current),
              zD: !!UU || null
            }), Xz.current = !1, zz.current = null), MX(null)
          }), []),
          Zz = (0, yU.useCallback)((UU => {
            const XU = {
              kind: "lobby",
              path: UU
            };
            zz.current = XU, KX(UU), NU.current = "", DU.gameBridge.send("sendCodeCollab", {
              Ey: Oy.c.Join,
              Yy: (0, Oy.t)(XU)
            }), Xz.current = !0
          }), []),
          Rz = (0, yU.useCallback)((UU => {
            var XU;
            const zU = null === (XU = tz.current) || void 0 === XU ? void 0 : XU.collabState;
            return zU && "lobby" === zU.docKey.kind && zU.docKey.path === UU && cz.current === UU ? Promise.resolve({
              doc: zU.doc,
              version: zU.version,
              clientID: zU.clientID,
              docKey: zU.docKey,
              httpConfig: zU.httpConfig
            }) : new Promise(((XU, zU) => {
              const cU = setTimeout((() => {
                  pz.current = pz.current.filter((UU => UU !== yU)), zU(new Error(`Timed out joining ${UU}`))
                }), 15e3),
                yU = zU => {
                  "lobby" === zU.docKey.kind && zU.docKey.path === UU && (clearTimeout(cU), pz.current = pz.current.filter((UU => UU !== yU)), XU(zU))
                };
              pz.current.push(yU), cz.current !== UU ? (Gz(!0), Zz(UU)) : Xz.current || Zz(UU)
            }))
          }), [Zz, Gz]),
          Pz = (0, yU.useCallback)((async function(UU, XU) {
            let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const cU = Date.now();
            let yU = UU in oz.current;
            for (; yU !== XU;) {
              if (Date.now() - cU > zU) throw new Error(`Timed out waiting for lobby path ${UU} present=${XU}`);
              await (0, Gc.S)(50), yU = UU in oz.current
            }
          }), []),
          Wz = (0, yU.useCallback)((UU => {
            const XU = oz.current,
              zU = qy.d in XU && qy.h in XU;
            if (!(0, Sy.i)(UU) || zU) {
              if (cz.current === UU) {
                var cU;
                const yU = zU && (0, Sy.i)(UU) ? UU === qy.d ? qy.h : qy.d : null !== (cU = (0, Sy.e)(XU)) && void 0 !== cU ? cU : qy.d;
                Ez.current = {
                  fromPath: UU,
                  toPath: yU
                }, KX(yU)
              }
              DU.gameBridge.send("sendCodeCollab", {
                Ey: Oy.c.DeleteFile,
                Yy: (0, Oy.t)({
                  kind: "lobby",
                  path: cz.current
                }),
                cD: UU
              })
            }
          }), []),
          dz = (0, yU.useCallback)((UU => {
            JU.current = null, TX(null), Uz(null), !YU || UU === cz.current && Xz.current || (Gz(!0), Zz(UU))
          }), [YU, Gz, Zz]),
          Lz = (0, yU.useCallback)(((UU, XU) => {
            const zU = Hy.i[UU],
              cU = zU && XU in zU.files ? XU : "index.ts";
            if (UU !== yz.current || cU !== Fz.current) {
              var yU;
              if (UU !== yz.current) null === (yU = az.current) || void 0 === yU || yU.stopContinuousSync(), Gz(!0);
              TX(UU), Uz(cU)
            }
          }), [Gz]),
          ez = (0, yU.useCallback)((UU => {
            var XU;
            const zU = cz.current,
              cU = oz.current[zU],
              yU = Xz.current && !yz.current && zU in UU && void 0 !== cU ? {
                ...UU,
                [zU]: cU
              } : UU;
            sX(yU);
            const QU = Dz.current;
            if (QU && QU in UU) Dz.current = null, QU !== cz.current && dz(QU);
            else if (!(cz.current in UU) && Xz.current && !yz.current) {
              var AU;
              dz(null !== (AU = (0, Sy.e)(UU)) && void 0 !== AU ? AU : qy.d)
            }
            null === (XU = az.current) || void 0 === XU || XU.onLobbyFilesChanged({
              ...yU,
              ...(0, vy.o)(xX.current.assets)
            })
          }), [dz]),
          Cz = (0, yU.useCallback)((() => FA(cz.current).then((async UU => {
            if (!Xz.current || !UU.files) return null;
            ez(UU.files);
            const XU = await FQ({
              action: "state"
            });
            return JX(XU), {
              ...UU.files,
              ...(0, vy.o)(XU.assets)
            }
          })).catch((UU => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", UU), kz({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [ez, JX]),
          wz = () => {
            FU()
          };
        (0, yU.useEffect)((() => {
          if (RU(""), !cU || !YU) return;
          let UU = !1;
          return xX.current = {
            assets: {},
            revision: 0
          }, lX(xX.current), FQ({
            action: "state"
          }).then((XU => {
            UU || JX(XU)
          })).catch((XU => {
            console.error("Could not load project schematics", XU), UU || RU("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            UU = !0
          }
        }), [cU, YU, JX]);
        const qz = (0, yU.useCallback)((function() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            zz.current && DU.gameBridge.send("sendCodeCollab", {
              Ey: Oy.c.Submit,
              Yy: (0, Oy.t)(zz.current),
              ...UU ? {
                ty: "keepOpen"
              } : {}
            })
          }), []),
          Oz = (0, yU.useCallback)((() => {
            if (!zz.current || "lobby" !== zz.current.kind) return;
            const UU = wX.trim();
            (0, ry.s)(UU) ? (DU.gameBridge.send("sendCodeCollab", {
              Ey: Oy.c.ReloadAsVariation,
              Yy: (0, Oy.t)(zz.current),
              ty: UU
            }), SX(!1)) : kz({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [wX]),
          Sz = (0, yU.useCallback)((UU => {
            DU.gameBridge.send("sendCodeCollab", {
              Ey: Oy.c.SetEngine,
              Yy: (0, Oy.t)({
                kind: "lobby",
                path: cz.current
              }),
              ty: UU
            })
          }), []),
          rz = (0, yU.useCallback)((UU => {
            if (!yz.current && gX && (kU.current || YU)) {
              if (YU) {
                var XU;
                const zU = (0, Sy.o)(oz.current, cz.current),
                  cU = Math.min(VX.z, Math.max(0, VX.D - zU)),
                  yU = UU.slice(0, cU);
                return NU.current = yU, sX((UU => ({
                  ...UU,
                  [cz.current]: yU
                }))), void(null === (XU = az.current) || void 0 === XU || XU.onDocTextChanged(cz.current, yU))
              }
              NU.current = UU, YX(UU)
            }
          }), [gX, YU]);
        (0, WU.f)("EditLobbyCode", (UU => {
          var XU;
          OU.featureFlags.canSeePlayerWrittenText && YU && (Gz(), gU(UU), NU.current = "", sX({
            [qy.d]: ""
          }), uX(null), KX(qy.d), TX(null), Uz(null), Dz.current = null, Ez.current = null, null === (XU = az.current) || void 0 === XU || XU.stopContinuousSync(), QU(), Zz(qy.d))
        })), (0, WU.f)("EditCodeBlock", (UU => {
          let {
            pos: XU,
            canChangePos: zU
          } = UU;
          if (OU.featureFlags.canSeePlayerWrittenText && !YU)
            if (Gz(), null !== XU && (XU = [...XU]), gU(XU), kU.current = zU, null !== XU) {
              NU.current = "", YX(""), QU();
              const UU = {
                  kind: "codeBlock",
                  pos: XU
                },
                cU = (0, Oy.t)(UU);
              IX.current !== cU && (IX.current = cU, QX([]), DX(AX)), aX((0, XA.b)(cU, [XU[0], XU[1], XU[2]], !!zU)), zz.current = UU, DU.gameBridge.send("sendCodeCollab", {
                Ey: Oy.c.Join,
                Yy: (0, Oy.t)(UU)
              }), Xz.current = !0
            } else cU && FU()
        })), (0, WU.f)("codeCollabRejoin", (UU => {
          const XU = zz.current ? (0, Oy.t)(zz.current) : null;
          XU && UU.docKey === XU && (NU.current = UU.doc, YU || YX(UU.doc), MX((XU => XU ? {
            ...XU,
            doc: UU.doc,
            version: UU.version,
            clientID: (0, iy.d)()
          } : XU)))
        })), (0, WU.f)("codeCollab", (UU => {
          var XU;
          const zU = zz.current ? (0, Oy.t)(zz.current) : null;
          if (UU.type === Oy.e.LobbyFilesChanged && YU) {
            if ("string" !== typeof UU.files) return void Cz();
            try {
              ez(JSON.parse(UU.files))
            } catch (DU) {
              console.error("[CodeCollab] Failed to parse lobby files", DU), Cz()
            }
            return
          }
          if (UU.type === Oy.e.EngineSettings && YU) return void uX(NQ(UU.engineSettings));
          const yU = UU.type === Oy.e.Joined ? (0, Oy.i)(UU.docKey) : null,
            QU = YU && "lobby" === (null === (XU = zz.current) || void 0 === XU ? void 0 : XU.kind) && (0, Sy.i)(zz.current.path) && "lobby" === (null === yU || void 0 === yU ? void 0 : yU.kind) && (0, Sy.i)(yU.path);
          if (!zU || UU.docKey === zU || QU)
            if (UU.type !== Oy.e.ForceClose) {
              if (cU)
                if (UU.type === Oy.e.Joined) {
                  var AU;
                  const EU = JSON.parse(UU.peers),
                    IU = UU.existingCursors ? JSON.parse(UU.existingCursors) : [],
                    tU = (0, iy.d)(),
                    gU = AQ(),
                    {
                      gsUrl: kU,
                      gameNameWithVariation: GU,
                      lobbyName: ZU
                    } = gU,
                    RU = null !== (AU = (0, Oy.i)(UU.docKey)) && void 0 !== AU ? AU : zz.current;
                  RU && (zz.current = RU, "lobby" === RU.kind && (KX(RU.path), cz.current = RU.path));
                  const PU = RU || (YU ? {
                    kind: "lobby",
                    path: cz.current
                  } : {
                    kind: "codeBlock",
                    pos: aU
                  });

                  function WU(XU) {
                    var zU, cU;
                    if (!Xz.current) return;
                    const yU = null !== (zU = XU.code) && void 0 !== zU ? zU : "",
                      QU = null !== (cU = XU.collabVersion) && void 0 !== cU ? cU : 0;
                    NU.current = yU, YU || YX(yU), YU && XU.files ? sX(XU.files) : YU && sX((UU => ({
                      ...UU,
                      [cz.current]: yU
                    })));
                    const AU = {
                      doc: yU,
                      version: QU,
                      clientID: tU,
                      docKey: PU,
                      peers: EU,
                      editorCount: UU.editorCount,
                      existingCursors: IU,
                      httpConfig: gU
                    };
                    if (MX(AU), "lobby" === PU.kind) {
                      var FU;
                      const UU = {
                        doc: yU,
                        version: QU,
                        clientID: tU,
                        docKey: PU,
                        httpConfig: gU
                      };
                      for (const XU of [...pz.current]) XU(UU);
                      null === (FU = az.current) || void 0 === FU || FU.startWhenReady()
                    }
                    XU.canSeeCode ? (clearTimeout(CX.current), BU({
                      message: null,
                      type: null
                    })) : function(UU) {
                      clearTimeout(CX.current), BU(UU)
                    }(EA);
                    const oU = JU.current;
                    JU.current = null, YU && oU && XU.files && oU in XU.files && oU !== cz.current && dz(oU)
                  }
                  YU ? FA(cz.current).then(WU).catch((UU => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", UU), Gz()
                  })) : (0, wy.postJsonWithMetricsCookiesAndJsonResponse)(`${kU}/code/get-code-block`, Cy.Bj["get-code-block"].toBuffer({
                    gameNameWithVariation: GU,
                    lobbyName: ZU,
                    pos: aU
                  }), {
                    retries: 1
                  }).then(WU).catch((UU => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", UU), Gz()
                  }))
                } else if (UU.type === Oy.e.Presence) {
                if (!zU) return;
                const dU = JSON.parse(UU.peers);
                MX((XU => XU ? {
                  ...XU,
                  peers: dU,
                  editorCount: UU.editorCount
                } : XU))
              }
            } else {
              var oU;
              if (!zU) return;
              cU && YU && "keptOpen" === UU.updates && pU.k.UY("CodeEditorKeepEdits");
              const LU = zz.current;
              Xz.current = !1, zz.current = null, MX(null);
              if (!YU || "close" === UU.updates) return (0, UA.h)(), void(cU && FU());
              if (!cU) return;
              const eU = oz.current,
                CU = Ez.current;
              Ez.current = null;
              const wU = "lobby" === (null === LU || void 0 === LU ? void 0 : LU.kind) && LU.path === (null === CU || void 0 === CU ? void 0 : CU.fromPath),
                qU = CU && (wU || CU.toPath in eU || (0, Sy.i)(CU.toPath)) ? CU.toPath : cz.current in eU ? cz.current : null !== (oU = (0, Sy.e)(eU)) && void 0 !== oU ? oU : qy.d;
              Zz(qU)
            }
        })), (0, WU.f)("refetchCode", (() => {
          OU.featureFlags.canSeePlayerWrittenText && cU && Xz.current && (gX || (Gz(), YU ? pU.k.UY("EditLobbyCode", aU) : pU.k.UY("EditCodeBlock", {
            pos: aU,
            canChangePos: kU.current
          })))
        }));
        const uz = (0, yU.useCallback)((() => {
            cU && (iU(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [cU]),
          fz = (0, yU.useCallback)((() => {
            iU(!1)
          }), []);
        (0, yU.useEffect)((() => {
          cU && gX && ("docsButton" === RX && fU ? (0, ZQ.d)("docsButton") : RX && ZQ.h.includes(RX) && !fU && (iU(!0), XX(!1)))
        }), [cU, gX, RX, fU, XX]);
        const iz = (0, yU.useCallback)((() => {
          XX(!1)
        }), [XX]);
        (0, yU.useEffect)((() => {
          cU && gX && tX && ("aiHelperButton" === dX && UX ? (0, ZQ.d)("aiHelperButton") : dX && ZQ.b.includes(dX) && !UX && (XX(!0), iU(!1)))
        }), [cU, gX, tX, dX, UX, XX]), (0, yU.useEffect)((() => {
          if (!cU || !gX) return;
          const UU = YU ? "worldCode" : "codeBlock";
          return (0, ZQ.G)(UU, !0), () => {
            (0, ZQ.G)(UU, !1)
          }
        }), [cU, gX, YU]), (0, yU.useEffect)((() => {
          if (cU) return () => {
            LX.current ? LX.current = !1 : (0, ZQ.D)()
          }
        }), [cU]), (0, yU.useEffect)((() => {
          (0, ZQ.I)("exportButton", !!kX)
        }), [kX]);
        const {
          t: Hz
        } = (0, jU.I)(), Mz = !UX && AX > oX, vz = Mz ? IU.G : IU.r, Vz = (0, yU.useCallback)(((UU, XU) => {
          pU.k.UY("CodeEditorGoToLine", {
            path: UU,
            line: XU
          }), dz(UU)
        }), [dz]), sz = (0, yU.useCallback)((UU => {
          gz.current = UU
        }), []), nz = function(UU, XU) {
          const [zU, cU] = (0, yU.useState)(null);
          return (0, yU.useEffect)((() => {
            if (!XU) return void cU(null);
            let zU = !1;
            return by(UU).then((UU => {
              zU || cU(UU)
            }), (UU => {
              console.error("[CodeEditor] could not collect the imported plugins", UU), zU || cU(null)
            })), () => {
              zU = !0
            }
          }), [UU, XU]), zU
        }(vX, cU);
        (0, yU.useEffect)((() => {
          nz && bX && !nz.includes(bX) && (TX(null), Uz(null), YU && !Xz.current && Zz(cz.current))
        }), [bX, nz, YU, Zz]), tz.current = {
          collabState: HX,
          ensureJoinedPath: Rz,
          waitForLobbyPath: Pz,
          pullLobbyFiles: Cz,
          t: Hz,
          canEditCode: !!gX
        }, az.current || (az.current = new yQ({
          getLobbyFiles: () => ({
            ...oz.current,
            ...(0, vy.o)(xX.current.assets)
          }),
          deleteSchematic: async UU => {
            const XU = await FQ({
              action: "remove",
              path: UU,
              expectedRevision: xX.current.revision
            });
            JX(XU)
          },
          getActivePath: () => cz.current,
          getCollabSnapshot: () => {
            var UU;
            if (yz.current) return null;
            const XU = null === (UU = tz.current) || void 0 === UU ? void 0 : UU.collabState;
            return XU ? {
              doc: XU.doc,
              version: XU.version,
              clientID: XU.clientID,
              docKey: XU.docKey,
              httpConfig: XU.httpConfig
            } : null
          },
          replaceActiveDoc: (UU, XU) => {
            var zU, cU;
            return null !== (zU = null === (cU = gz.current) || void 0 === cU ? void 0 : cU.call(gz, UU, XU)) && void 0 !== zU && zU
          },
          ensureJoined: UU => tz.current.ensureJoinedPath(UU),
          createFile: (UU, XU) => {
            !1 !== (null === XU || void 0 === XU ? void 0 : XU.focus) && (Dz.current = UU), DU.gameBridge.send("sendCodeCollab", {
              Ey: Oy.c.CreateFile,
              Yy: (0, Oy.t)({
                kind: "lobby",
                path: cz.current
              }),
              cD: UU
            })
          },
          renameFile: (UU, XU) => {
            const zU = (0, Oy.t)({
              kind: "lobby",
              path: cz.current
            });
            cz.current === UU && (Ez.current = {
              fromPath: UU,
              toPath: XU
            }, KX(XU)), DU.gameBridge.send("sendCodeCollab", {
              Ey: Oy.c.RenameFile,
              Yy: zU,
              cD: UU,
              yD: XU
            })
          },
          deleteFile: UU => {
            Wz(UU)
          },
          waitForLobbyPath: (UU, XU, zU) => tz.current.waitForLobbyPath(UU, XU, zU),
          pullLobbyFiles: () => tz.current.pullLobbyFiles(),
          setMessage: (UU, XU) => {
            kz({
              message: UU,
              type: XU
            })
          },
          onUnlinked: () => {
            Nz(!1)
          },
          t: UU => tz.current.t(UU),
          canEditCode: () => tz.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: UU,
              lobbyName: XU
            } = DU.gameBridge.latest("connectedGame");
            return (0, Ty.e)(UU, XU)
          }
        }));
        const mz = (0, yU.useCallback)((async UU => {
            const XU = az.current;
            if (!XU) return !1;
            try {
              return await XU.writeLobbyFiles(UU)
            } catch (zU) {
              return console.error("World Code AI: couldn't write the change", zU), !1
            }
          }), []),
          lz = (0, yU.useCallback)((async UU => {
            var XU, zU;
            const cU = null === (XU = UU.find((UU => UU.path === hQ.b))) || void 0 === XU ? void 0 : XU.text,
              yU = zz.current;
            return void 0 !== cU && "codeBlock" === (null === yU || void 0 === yU ? void 0 : yU.kind) && (!(null === (zU = gz.current) || void 0 === zU || !zU.call(gz, (0, Oy.t)(yU), cU)) && (NU.current = cU, YX(cU), !0))
          }), []),
          xz = (0, yU.useCallback)((async () => {
            try {
              var UU, XU;
              const zU = await FA(qy.d);
              return !1 === zU.canSeeCode ? null : null !== (UU = zU.files) && void 0 !== UU ? UU : {
                [qy.d]: null !== (XU = zU.code) && void 0 !== XU ? XU : ""
              }
            } catch (zU) {
              return console.error("World Code AI: couldn't read World Code for a code block", zU), null
            }
          }), []),
          Jz = (0, yU.useMemo)((() => ({
            [hQ.b]: EX
          })), [EX]),
          jz = (0, yU.useCallback)(((UU, XU) => {
            pU.k.UY("CodeEditorGoToLine", {
              path: hQ.b,
              line: XU
            })
          }), []);
        (0, yU.useEffect)((() => {
          UX && cU && DX(AX)
        }), [UX, cU, AX]);
        const Kz = (0, yU.useCallback)((() => {
            var UU, XU;
            qz();
            const zU = (0, OU.isTouchscreen)() ? "open World Code again" : `press ${null!==(UU=null===(XU=nX.w.OpenCodeEditor)||void 0===XU?void 0:XU[0])&&void 0!==UU?UU:"F8"}`,
              cU = YU ? `\ud83e\udd16 Try out your change, then ${zU} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            pU.k.UY("chat", {
              content: [{
                str: cU,
                style: {
                  color: dU.H.cyanUiText
                }
              }]
            })
          }), [qz, YU]),
          bz = (0, yU.useCallback)((UU => {
            const XU = aU,
              zU = kU.current;
            YU || !XU || DU.gameBridge.lookup("codeBlockClickable", XU) ? (0, UA.l)(UU, {
              submit: () => {
                qz(), pU.k.UY("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: dU.H.cyanUiText
                    }
                  }]
                }), !YU && XU && setTimeout((() => {
                  DU.gameBridge.send("clickCodeBlock", XU)
                }), 1e3)
              },
              reopen: () => {
                (0, vU.p)() || (YU ? pU.k.UY("EditLobbyCode", XU) : pU.k.UY("EditCodeBlock", {
                  pos: XU,
                  canChangePos: zU
                }))
              }
            }) : Kz()
          }), [qz, YU, aU, Kz]),
          Tz = (0, yU.useCallback)((() => {
            XX(!1)
          }), [XX]),
          hz = (0, yU.useRef)(wz);
        hz.current = wz;
        const Uc = (0, yU.useCallback)((function(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            pU.k.UY("WorldCodeAiDraft", {
              text: UU,
              send: XU
            }), hz.current(), pU.k.UY("EditLobbyCode", aU)
          }), [aU]),
          Xc = (0, yU.useCallback)((UU => {
            hz.current(), UU.codeBlock ? pU.k.UY("EditCodeBlock", {
              pos: [...UU.pos],
              canChangePos: UU.canChangePos
            }) : pU.k.UY("EditLobbyCode", aU)
          }), [aU]);
        (0, WU.f)("WorldCodeAiDraft", (UU => {
          YU && (cX(UU), XX(!0))
        }));
        const zc = !!gX && !!RX && ZQ.h.includes(RX),
          cc = !!gX && !!dX && ZQ.b.includes(dX);
        (0, yU.useEffect)((() => {
          cU && UX && tX && !zc && iU(!1)
        }), [cU, UX, tX, zc]);
        const yc = (0, yU.useCallback)((() => {
            XX(!1), iU(!1)
          }), [XX]),
          {
            qY: Qc,
            setWorld: Ac,
            toggleWorld: Fc
          } = function(UU) {
            let {
              showAi: XU,
              showDocs: zU,
              showChat: cU,
              hideOtherRightPanels: QU
            } = UU;
            const [AU, FU] = (0, yU.useState)("hidden"), oU = (0, yU.useRef)(null), DU = (0, yU.useCallback)((() => {
              oU.current = null, FU((UU => "hidden" === UU ? UU : (0, CQ.d)() ? "hidden" : "shown"))
            }), []);
            (0, yU.useEffect)((() => {
              (XU || zU) && DU()
            }), [XU, zU, DU]), (0, yU.useEffect)((() => {
              cU && DU()
            }), [cU, DU]);
            const EU = "hidden" !== AU && (0, CQ.d)();
            (0, yU.useLayoutEffect)((() => {
              if (EU) {
                const UU = document.activeElement;
                UU instanceof HTMLElement && UU.closest(".cm-content") && (oU.current = UU, UU.blur())
              } else {
                var UU;
                null === (UU = oU.current) || void 0 === UU || UU.focus(), oU.current = null
              }
            }), [EU]);
            const YU = (0, yU.useCallback)((() => {
              "hidden" === AU ? (FU("shown"), (0, CQ.d)() && QU()) : FU("hidden")
            }), [AU, QU]);
            return {
              qY: AU,
              setWorld: FU,
              toggleWorld: YU
            }
          }({
            showAi: UX,
            showDocs: fU,
            showChat: HU,
            hideOtherRightPanels: yc
          }),
          oc = UX && null !== pX && tX,
          Dc = (0, yU.useCallback)((() => {
            cX(null)
          }), []),
          [Ec, Yc] = (0, yU.useState)(null);
        (0, WU.f)("WorldCodeAiSelection", (UU => {
          cU && (Yc(UU), XX(!0), iU(!1))
        }));
        const Nc = (0, yU.useCallback)((() => {
          Yc(null)
        }), []);
        (0, WU.f)("chat", (UU => {
          let {
            content: XU
          } = UU;
          if (!YU && null === IX.current) return;
          const zU = Array.isArray(XU) ? XU : [XU],
            cU = zU.some((UU => {
              var XU;
              return (null === UU || void 0 === UU || null === (XU = UU.style) || void 0 === XU ? void 0 : XU.color) === dU.H.redUiText
            })),
            yU = zU.map((UU => {
              var XU;
              const zU = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.str) && void 0 !== XU ? XU : UU;
              return "string" === typeof zU ? zU : ""
            })).join("");
          cU && /world code|error/i.test(yU) && (QX((UU => [...UU, yU].slice(-10))), FX((UU => UU + 1)), (0, UA.g)(yU))
        })), (0, yU.useEffect)((() => {
          if (!cU || !YU || !Iz) return;
          let UU = !1;
          return (async (XU, zU) => {
            const cU = await (null === (XU = az.current) || void 0 === XU ? void 0 : XU.tryRestoreHandle());
            !UU && cU && (Nz(!0), null === (zU = az.current) || void 0 === zU || zU.startWhenReady())
          })(), () => {
            UU = !0
          }
        }), [cU, YU, Iz]), (0, yU.useEffect)((() => {
          var UU;
          cU || (null === (UU = az.current) || void 0 === UU || UU.stopContinuousSync(), Gz(!1), eX.current && (eX.current = !1, DU.gameBridge.send("sendChatMessage", {
            TE: "//export",
            channelName: null
          })))
        }), [cU, Gz]);
        const Ic = (0, yU.useCallback)((async () => {
            if (Iz && az.current) try {
              if (!await az.current.linkFolder()) return;
              Nz(!0), await az.current.startWhenReady()
            } catch (UU) {
              console.error("[WorldCodeDirectorySync] Link failed", UU), kz({
                message: Hz("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [Iz, Hz]),
          pc = (0, yU.useCallback)((async () => {
            az.current && await az.current.unlinkFolder()
          }), []),
          ac = (0, yU.useCallback)((() => {
            Iz ? Yz ? pc() : Ic() : Qy.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok",
              middleScreenPopupContainerClassName: ny.b
            })
          }), [Iz, Yz, Ic, pc]),
          tc = YU && "hidden" !== Qc;
        return (0, EU.jsxs)(AU.c, {
          className: Bz()("CodeEditorBg", {
            CodeEditorLight: qU,
            WorldShown: "hidden" !== Qc,
            WorldTouchControl: "touchControls" === TU
          }),
          close: wz,
          escDoesExit: !0,
          show: cU,
          togglePointerLock: !1,
          globallyUniqueKey: YU ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, EU.jsx)(BQ.c, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: Hz("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!gX && !YU
          }), (0, EU.jsx)(BQ.c, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, EU.jsxs)(EU.Fragment, {
              children: [(0, EU.jsx)("p", {
                children: Hz("codeEditor:tutorialWorldCodeWelcome")
              }), (0, EU.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, EU.jsx)("li", {
                  children: Hz("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, EU.jsx)("li", {
                  children: Hz("codeEditor:tutorialWorldCodeUseReact")
                }), (0, EU.jsx)("li", {
                  children: Hz("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!gX && YU
          }), (0, EU.jsx)("div", {
            className: "CodeEditorTitle",
            children: YU ? "World Code" : "Code Block"
          }), (0, EU.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, EU.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, EU.jsx)(xU.d, {
                tooltipInner: Hz(kX ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: kX ? void 0 : 0,
                hideTooltip: "exportButton" === GX,
                children: (0, EU.jsx)(BQ.h, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: Hz("codeEditor:tutorialExport"),
                  enabled: !!gX,
                  children: (0, EU.jsx)(IU.l, {
                    className: "CodeEditorButton",
                    disabled: !kX,
                    onClick: () => {
                      "exportButton" === GX && ((0, ZQ.d)("exportButton"), LX.current = !0), eX.current = !0, wz()
                    },
                    padDestructive: !0,
                    children: Hz("codeEditor:exportWorld")
                  })
                })
              }), (0, EU.jsx)(bQ, {
                qY: Qc,
                setWorld: Ac,
                toggleWorld: Fc,
                aiShown: oc,
                closeAi: Tz
              })]
            }), (0, EU.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [gX && (0, EU.jsx)(xU.d, {
                tooltipInner: Hz("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === GX,
                children: (0, EU.jsx)(BQ.h, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: Hz("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, EU.jsx)(IU.f, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: Hz("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, ZQ.d)("helpButton"), Qy.NotificationProvider.showCustomPopup({
                        body: UU => (0, EU.jsx)(RQ, {
                          close: UU
                        }),
                        unlockPointerKey: "codeEditorTutorials",
                        middleScreenPopupContainerClassName: ny.b
                      })
                    },
                    children: (0, EU.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, EU.jsx)(tU.d, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, EU.jsx)(xU.d, {
                tooltipInner: Hz("codeEditor:closeTooltip"),
                children: (0, EU.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    wz()
                  },
                  children: (0, EU.jsx)(IU.k, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, EU.jsx)(fy, {
            peers: null !== (XU = null === HX || void 0 === HX ? void 0 : HX.peers) && void 0 !== XU ? XU : []
          }), (0, EU.jsxs)("div", {
            className: Bz()("CodeEditorMainArea", {
              WorldCovers: "always" === wQ(Qc),
              WorldCoversWhenNarrow: "narrow" === wQ(Qc)
            }),
            children: [HU && mU && (0, EU.jsx)(CQ.b, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                VU(!1)
              },
              children: (0, EU.jsx)(eQ, {
                inputRef: sU
              })
            }), YU && (0, EU.jsx)(my, {
              schematics: mX.assets,
              onManageSchematic: UU => {
                gX && Qy.NotificationProvider.showCustomPopup({
                  body: XU => (0, EU.jsx)(YQ, {
                    initialPath: UU,
                    onChanged: JX,
                    onClose: XU
                  }),
                  unlockPointerKey: "worldCodeSchematics",
                  middleScreenPopupContainerClassName: ny.b
                })
              },
              files: vX,
              activePath: jX,
              canEdit: !!gX,
              directoryLinked: Yz,
              pluginNames: null !== nz && void 0 !== nz ? nz : DA,
              activePluginName: bX,
              activePluginFile: hX,
              onSelect: dz,
              onSelectPlugin: Lz,
              onToggleDirectorySync: ac,
              onCreate: UU => {
                Dz.current = UU, DU.gameBridge.send("sendCodeCollab", {
                  Ey: Oy.c.CreateFile,
                  Yy: (0, Oy.t)({
                    kind: "lobby",
                    path: cz.current
                  }),
                  cD: UU
                })
              },
              onRename: (UU, XU) => {
                cz.current === UU && (Ez.current = {
                  fromPath: UU,
                  toPath: XU
                }, KX(XU)), DU.gameBridge.send("sendCodeCollab", {
                  Ey: Oy.c.RenameFile,
                  Yy: (0, Oy.t)({
                    kind: "lobby",
                    path: cz.current
                  }),
                  cD: UU,
                  yD: XU
                })
              },
              onRenameFolder: (UU, XU) => {
                const [zU] = (0, Sy.m)([cz.current], UU, XU);
                zU && (Ez.current = {
                  fromPath: zU[0],
                  toPath: zU[1]
                }, KX(zU[1])), DU.gameBridge.send("sendCodeCollab", {
                  Ey: Oy.c.RenameFolder,
                  Yy: (0, Oy.t)({
                    kind: "lobby",
                    path: cz.current
                  }),
                  cD: UU,
                  yD: XU
                })
              },
              onDelete: Wz
            }), (0, EU.jsx)("div", {
              className: Bz()("CodeEditorMessage", {
                CodeEditorMessageHidden: !PU.message,
                CodeEditorMessageSuccess: "success" === PU.type
              }),
              children: PU.message && (0, EU.jsx)("div", {
                className: "CodeEditorMessageText",
                children: PU.message
              })
            }), (0, EU.jsx)(yU.Suspense, {
              fallback: (0, EU.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, EU.jsx)(eU.b, {})
              }),
              children: (0, EU.jsx)(zA, {
                isLobbyCode: YU,
                code: HX ? HX.doc : NU.current,
                files: YU ? vX : void 0,
                activePath: YU ? jX : void 0,
                pluginName: bX,
                pluginFile: hX,
                pluginSource: bX && hX ? null === (zU = Hy.i[bX]) || void 0 === zU ? void 0 : zU.files[hX] : void 0,
                onChange: rz,
                canEditCode: gX,
                setTemporaryMessage: kz,
                close: wz,
                showTooltips: CU,
                lightMode: qU,
                collabState: HX,
                setActiveDocReplacer: sz,
                showAiHints: tX && rU,
                canAiChangeCode: !!gX && (YU || !!kU.current),
                onRemoteDocChange: UU => {
                  var XU;
                  (NU.current = UU, YU) ? (sX((XU => ({
                    ...XU,
                    [cz.current]: UU
                  }))), null === (XU = az.current) || void 0 === XU || XU.onDocTextChanged(cz.current, UU)) : YX(UU)
                }
              })
            }), (fU || oc || "hidden" !== Qc) && (0, EU.jsxs)(qQ, {
              qY: Qc,
              worldPanel: (0, EU.jsx)(jQ, {
                shown: Qc,
                setShown: Ac,
                canInsertCode: !!gX && !bX
              }),
              closeWorld: () => {
                Ac("hidden")
              },
              aiShown: oc,
              defaultWidth: fU ? "40%" : "max(18rem, 36%)",
              children: [fU && (0, EU.jsx)(CQ.b, {
                onClose: zc ? void 0 : fz,
                children: (0, EU.jsx)(yU.Suspense, {
                  fallback: (0, EU.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, EU.jsx)(eU.b, {})
                  }),
                  children: (0, EU.jsx)(cA, {
                    popOutDocs: uz,
                    hideDocs: fz,
                    tutorialEnabled: !!gX
                  })
                })
              }), oc && (0, EU.jsx)(CQ.b, {
                onClose: cc ? void 0 : Tz,
                children: (0, EU.jsx)(yU.Suspense, {
                  fallback: (0, EU.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, EU.jsx)(eU.b, {})
                  }),
                  children: (0, EU.jsx)(yA, {
                    target: pX,
                    chatKey: `${fX.gameNameWithVariation}/${fX.lobbyName}/aiHelper`,
                    historyKey: `${fX.gameNameWithVariation}/${fX.lobbyName}/${pX.key}`,
                    files: pX.codeBlock ? Jz : vX,
                    activePath: pX.codeBlock ? hQ.b : jX,
                    canEdit: !!gX && (pX.codeBlock ? !!kU.current : !bX),
                    isLoaded: null !== HX,
                    errors: yX,
                    errorCount: AX,
                    applyFiles: pX.codeBlock ? lz : mz,
                    submit: Kz,
                    testRun: bz,
                    close: Tz,
                    goToLine: pX.codeBlock ? jz : Vz,
                    openWorldCode: pX.codeBlock ? Uc : void 0,
                    readWorldCode: pX.codeBlock ? xz : void 0,
                    viewChunk: QA,
                    viewGameState: AA,
                    openTarget: gX ? Xc : void 0,
                    draft: zX,
                    onDraftUsed: Dc,
                    selection: Ec,
                    onSelectionUsed: Nc
                  }, pX.key)
                })
              })]
            })]
          }), !YU && gX && kU.current && (0, EU.jsx)(IQ, {
            length: EX.length
          }), (null === Qz || void 0 === Qz ? void 0 : Qz.fallback) && (0, EU.jsx)(pQ, {
            fallback: Qz.fallback,
            onGoToLine: Vz
          }), (0, EU.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, EU.jsx)(xU.d, {
              tooltipInner: Hz(qU ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, EU.jsx)(IU.f, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: Hz(qU ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  SU(!qU)
                },
                children: (0, EU.jsx)(tU.d, {
                  name: qU ? "moon" : "sun-bright"
                })
              })
            }), (0, EU.jsx)(xU.d, {
              tooltipInner: Hz(tc ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, EU.jsx)(IU.l, {
                className: "CodeEditorButton",
                onClick: () => {
                  qz(tc)
                },
                padDefaultFocus: !0,
                children: Hz("codeEditor:submitCode")
              })
            }), (0, EU.jsx)(xU.d, {
              tooltipInner: Hz(fU ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === RX || "hideDocsButton" === RX,
              children: (0, EU.jsx)(BQ.h, {
                tutorial: ZX,
                step: fU ? "hideDocsButton" : "docsButton",
                text: Hz(fU ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!gX,
                placement: "top",
                waitForClick: !0,
                onPrevious: fU && "welcome" === ZX ? fz : void 0,
                children: (0, EU.jsx)(IU.r, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, ZQ.d)(fU ? "hideDocsButton" : "docsButton"), iU(!fU), XX(!1)
                  },
                  children: Hz(fU ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), tX && (0, EU.jsx)(BQ.h, {
              tutorial: WX,
              step: UX ? "hideAiHelperButton" : "aiHelperButton",
              text: Hz(UX ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === WX ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!gX,
              placement: "top",
              waitForClick: !0,
              onPrevious: UX && "welcome" === WX ? iz : void 0,
              children: (0, EU.jsx)(vz, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, ZQ.d)(UX ? "hideAiHelperButton" : "aiHelperButton"), XX(!UX), iU(!1)
                },
                children: UX ? "Hide AI Helper" : Mz ? "Fix error with AI" : "AI Helper"
              })
            }), mU && (0, EU.jsx)(xU.d, {
              tooltipInner: Hz(HU ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, EU.jsx)(IU.r, {
                className: "CodeEditorButton",
                onClick: () => {
                  nU.current = !HU, VU(!HU)
                },
                children: Hz(HU ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, EU.jsx)(xU.d, {
              tooltipInner: Hz("hidden" === Qc ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, EU.jsx)(IU.r, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: Fc,
                children: Hz("hidden" === Qc ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, EU.jsx)(xU.d, {
              tooltipInner: Hz("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, EU.jsx)(IU.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  pU.k.UY("FormatCode")
                },
                children: Hz("codeEditor:formatCode")
              })
            }), (0, EU.jsx)(xU.d, {
              tooltipInner: Hz("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, EU.jsx)(IU.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(NU.current).then((() => {
                    kz({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    kz({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: Hz("codeEditor:copyCode")
              })
            }), (0, EU.jsx)(xU.d, {
              tooltipInner: Hz(CU ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, EU.jsx)(IU.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  wU(!CU)
                },
                children: Hz(CU ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !YU && (0, EU.jsx)(xU.d, {
              tooltipInner: Hz("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === GX,
              children: (0, EU.jsx)(BQ.h, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: Hz("codeEditor:tutorialWorldCodeButton"),
                enabled: !!gX,
                placement: "top",
                waitForClick: !0,
                children: (0, EU.jsx)(IU.r, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === GX && ((0, ZQ.d)("worldCodeButton"), LX.current = !0), wz(), pU.k.UY("EditLobbyCode", aU)
                  },
                  children: Hz("codeEditor:worldCode")
                })
              })
            }), (iX || Az || tX) && (0, EU.jsx)(xU.d, {
              tooltipInner: Hz("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, EU.jsx)(IU.f, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  SX(!0)
                },
                children: (0, EU.jsx)(tU.d, {
                  name: "ellipsis"
                })
              })
            })]
          }), OX && (0, EU.jsx)(Fy.e, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              SX(!1)
            },
            body: (0, EU.jsx)(GQ, {
              engine: Az,
              onSetEngine: Sz,
              aiHints: tX ? {
                shown: rU,
                setShown: uU
              } : null,
              variation: iX ? {
                name: wX,
                setName: qX,
                reload: Oz
              } : null
            })
          })]
        })
      }));
    var NA = zU(37325);
    const IA = new Set(["inventory", "ironChestPasskeyInput"]);
    const pA = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function aA(UU) {
      return "inventory" === UU
    }
    const tA = (0, yU.memo)((function() {
      const {
        openEverythingMenuName: UU,
        openInGameMenuName: XU
      } = (0, MU.q)(["openEverythingMenuName", "openInGameMenuName"]), zU = (0, LU.i)("fullInventory"), QU = (0, yU.useRef)(null), AU = (0, wX.k)();
      (0, WU.f)("toggleMenu", (UU => {
        var XU;
        if (!AU.shown) return;
        const zU = MU.e.get("openInGameMenuName");
        let cU = UU.split("|")[0];
        const yU = null !== (XU = UU.split("|")[1]) && void 0 !== XU ? XU : null;
        if (("closeCurrentMenu" === yU && zU || cU === zU) && (QU.current = null, cU = null), null !== cU && (FU = !DU.gameBridge.latest("localPlayerAlive"), oU = cU, FU && IA.has(oU))) return void(null !== DU.gameBridge.latest("inventory").chest && DU.gameBridge.send("closeChest", null));
        var FU, oU;
        const EU = "closeCurrentMenu" === yU ? null : yU;
        QU.current !== EU && (QU.current = EU), null !== cU && (0, gy.u)(gy.c, {
          keepsMovement: aA(cU)
        }), MU.e.set({
          openInGameMenuName: cU
        })
      })), (0, LU.b)("localPlayerAliveSet", (UU => {
        UU || function() {
          (0, NA.h)();
          const UU = MU.e.get("openInGameMenuName");
          null !== UU && IA.has(UU) && MU.e.set({
            openInGameMenuName: null
          })
        }()
      }));
      const FU = (0, yU.useCallback)((UU => () => {
          pU.k.UY("toggleMenu", UU)
        }), []),
        oU = (0, yU.useRef)({
          cantCrouchIfNotFullscreen: FU("cantCrouchIfNotFullscreen"),
          makeReport: FU("makeReport"),
          makeDiscordReport: FU("makeDiscordReport"),
          editBook: FU("editBook"),
          editNameTag: FU("editNameTag"),
          inventory: FU("inventory"),
          inviteLink: FU("inviteLink"),
          writeOnBoard: FU("writeOnBoard"),
          codeEditor: FU("codeEditor"),
          lobbyCodeEditor: FU("lobbyCodeEditor"),
          customLobbyBlockEditor: FU("customLobbyBlockEditor"),
          ironChestPasskeyInput: FU("ironChestPasskeyInput"),
          petUi: FU("petUi")
        }),
        YU = (0, yU.useCallback)((() => {
          MU.e.set({
            openInGameMenuName: null
          })
        }), []),
        NU = (0, yU.useRef)(null);
      return (0, yU.useEffect)((() => {
        if (XU) {
          var UU;
          (0, gy.u)(gy.c, {
            keepsMovement: aA(XU)
          }), NU.current = pA.has(XU) ? null !== (UU = MU.e.get("openEverythingMenuName")) && void 0 !== UU ? UU : NU.current : null, MU.e.set({
            openEverythingMenuName: null
          })
        } else {
          const UU = NU.current;
          NU.current = null, null !== UU && null === MU.e.get("openEverythingMenuName") && MU.e.set({
            openEverythingMenuName: UU
          }), QU.current = null, (0, gy.s)(gy.c)
        }
      }), [XU]), (0, yU.useEffect)((() => {
        null !== UU && YU()
      }), [UU, YU]), (0, EU.jsxs)(EU.Fragment, {
        children: [(0, EU.jsx)(cU.f, {
          show: "clientGame" === XU
        }), (0, EU.jsx)(zy, {
          show: "cantCrouchIfNotFullscreen" === XU,
          onOpen: oU.current.cantCrouchIfNotFullscreen,
          onClose: YU
        }), (0, EU.jsx)(Ny, {
          show: "makeReport" === XU,
          onOpen: oU.current.makeReport,
          onClose: YU
        }), (0, EU.jsx)(ty, {
          show: "makeDiscordReport" === XU,
          onOpen: oU.current.makeDiscordReport,
          onClose: YU
        }), (0, EU.jsx)(Xz, {
          show: "editBook" === XU,
          onOpen: oU.current.editBook,
          onClose: YU
        }), (0, EU.jsx)(hX, {
          show: "editNameTag" === XU,
          onOpen: oU.current.editNameTag,
          onClose: YU
        }), zU && (0, EU.jsx)(hc, {
          show: "inventory" === XU,
          onOpen: oU.current.inventory,
          onClose: YU,
          variation: QU.current
        }), (0, EU.jsx)(qX, {
          show: "inviteLink" === XU,
          onClose: YU,
          option: QU.current
        }), (0, EU.jsx)(uU, {
          show: "retentionFeatures" === XU,
          onClose: YU
        }), (0, EU.jsx)(TX, {
          show: "writeOnBoard" === XU,
          onOpen: oU.current.writeOnBoard,
          onClose: YU
        }), (0, EU.jsx)(YA, {
          show: "lobbyCodeEditor" === XU,
          onOpen: oU.current.lobbyCodeEditor,
          onClose: YU,
          isLobbyCode: !0
        }), (0, EU.jsx)(YA, {
          show: "codeEditor" === XU,
          onOpen: oU.current.codeEditor,
          onClose: YU,
          isLobbyCode: !1
        }), (0, EU.jsx)(Gy, {
          show: "customLobbyBlockEditor" === XU,
          onOpen: oU.current.customLobbyBlockEditor,
          onClose: YU
        }), (0, EU.jsx)(Rz, {
          show: "ironChestPasskeyInput" === XU,
          onOpen: oU.current.ironChestPasskeyInput,
          onClose: YU
        }), (0, EU.jsx)(dy, {
          togglePointerLock: !0,
          show: "petUi" === XU,
          onOpen: oU.current.petUi,
          onClose: YU
        })]
      })
    }))
  },
  37213: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => HA
    });
    zU(37215);
    var cU = zU(1889),
      yU = zU(61),
      QU = zU(1106),
      AU = zU.n(QU),
      FU = zU(4113),
      oU = zU(1492),
      DU = zU(1978),
      EU = zU(1305);

    function YU() {
      const UU = 2e3,
        [XU, zU] = (0, yU.useState)(null),
        [cU, QU] = (0, yU.useState)(null),
        YU = (0, yU.useRef)(null);
      (0, oU.f)("showBottomMessage", (XU => {
        let {
          message: zU,
          timeoutLength: cU = UU,
          type: yU
        } = XU;
        QU({
          message: zU,
          type: yU
        }), clearTimeout(YU.current), YU.current = setTimeout((() => {
          QU(null)
        }), cU)
      })), (0, oU.f)("showPermanentBottomMessage", (UU => {
        zU(UU)
      })), (0, yU.useEffect)((() => ((0, FU.c)((() => {
        zU(null)
      })), () => {
        clearTimeout(YU.current)
      })), []);
      const NU = cU || XU;
      return NU ? (0, EU.jsx)("div", {
        className: AU()("BottomScreenMessage", NU.type),
        children: (0, EU.jsx)(DU.d, {
          text: NU.message
        })
      }) : null
    }
    var NU = zU(2485),
      IU = zU(31),
      pU = zU(2005),
      aU = zU(1568),
      tU = zU(2621);

    function gU() {
      let UU;
      const XU = () => {
          clearTimeout(UU), UU = setTimeout((() => {
            pU.gameBridge.latest("connectedGame").replay || (IU.k.UY("kickedForAfk"), pU.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, aU.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        zU = () => {
          clearTimeout(UU)
        };
      return window.addEventListener("focus", zU), window.addEventListener("blur", XU), () => {
        window.removeEventListener("blur", XU), window.removeEventListener("focus", zU), clearTimeout(UU)
      }
    }
    var kU = zU(1129),
      GU = zU(37222),
      BU = zU(2616),
      ZU = zU(1420),
      RU = zU(3478),
      PU = zU(1390);
    const WU = (0, yU.memo)((function() {
      return (0, RU.e)(), (0, EU.jsx)(dU, {})
    }));
    class dU extends yU.Component {
      constructor(UU) {
        super(UU), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = IU.k.subscribe("TopRightHelper", (UU => {
          this.showQueue.push(UU), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        IU.k.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(UU, XU) {
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
        let UU, XU, zU, cU, yU, QU = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, UU = "slideIn") : "slideOut" === this.state.currState ? UU = "slideOut" : null === this.currMessage && (QU = !1), this.currMessage) {
          const QU = this.currMessage.color || "rgb(102, 102, 102)";
          XU = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === UU ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, zU = {
            backgroundColor: QU
          }, cU = {
            animation: "2s " + ("slideOut" === UU ? "CloseNotification" : "ExpandNotification")
          }, yU = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === UU ? "textDisappear" : "textAppear")
          }
        }
        return QU ? (0, EU.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...XU
          },
          children: [(0, EU.jsx)("div", {
            className: "LeftSide",
            style: zU,
            children: (0, EU.jsx)(PU.d, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, EU.jsx)("div", {
            className: "RightSide",
            style: cU,
            children: (0, EU.jsx)("div", {
              className: "HelperText",
              style: yU,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var LU = zU(37224),
      eU = zU(1457);
    const CU = (0, eU.g)((UU => UU.PadSneakChip));

    function wU(UU) {
      const [XU, zU, cU] = function(UU) {
        const XU = parseInt(UU.substring(1), 16),
          zU = (XU >> 16) / 255,
          cU = (XU >> 8 & 255) / 255,
          yU = (255 & XU) / 255,
          QU = Math.max(zU, cU, yU),
          AU = Math.min(zU, cU, yU),
          FU = (QU + AU) / 2,
          oU = QU - AU;
        if (0 === oU) return [0, 0, FU];
        const DU = oU / (1 - Math.abs(2 * FU - 1));
        let EU;
        EU = QU === zU ? (cU - yU) / oU % 6 : QU === cU ? (yU - zU) / oU + 2 : (zU - cU) / oU + 4;
        return [(60 * EU + 360) % 360, DU, FU]
      }(UU), yU = 0 === zU ? 0 : Math.min(.6, zU + .03), QU = cU > .5 ? -1 : 1, AU = qU(cU + .09 * QU);
      return {
        panel: UU,
        slot: OU(XU, yU, AU),
        slotSelected: OU(XU, yU, qU(AU + .2 * QU)),
        slotUnavailable: OU(XU, yU, qU(cU + -.1 * QU))
      }
    }

    function qU(UU) {
      return Math.min(1, Math.max(0, UU))
    }

    function OU(UU, XU, zU) {
      const cU = (1 - Math.abs(2 * zU - 1)) * XU,
        yU = cU * (1 - Math.abs(UU / 60 % 2 - 1)),
        QU = zU - cU / 2;
      let AU;
      return AU = UU < 60 ? [cU, yU, 0] : UU < 120 ? [yU, cU, 0] : UU < 180 ? [0, cU, yU] : UU < 240 ? [0, yU, cU] : UU < 300 ? [yU, 0, cU] : [cU, 0, yU], "#" + AU.map((UU => function(UU) {
        return Math.round(255 * UU).toString(16).padStart(2, "0")
      }(UU + QU))).join("")
    }
    var SU = zU(37244),
      rU = zU(27),
      uU = zU(2047),
      fU = zU(4651),
      iU = zU(1444),
      HU = zU(2580),
      MU = zU(2588),
      vU = zU(37303),
      VU = zU(5342),
      sU = zU(1511),
      nU = zU(1193),
      mU = zU(646);

    function lU(UU, XU, zU, cU) {
      UU.style.display = "";
      const yU = UU.offsetWidth,
        QU = UU.offsetHeight,
        AU = Math.min(Math.max((XU.left + XU.right) / 2 - yU / 2, 8), window.innerWidth - 8 - yU);
      let FU = XU.top - zU - QU;
      const oU = [...cU].sort(((UU, XU) => XU.top - UU.top));
      for (const DU of oU) AU < DU.right && AU + yU > DU.left && FU < DU.bottom && FU + QU > DU.top && (FU = DU.top - 8 - QU);
      return FU < 8 ? (UU.style.display = "none", null) : (UU.style.transform = `translate(${AU-XU.left}px, ${FU-XU.top}px)`, {
        left: AU,
        top: FU,
        right: AU + yU,
        bottom: FU + QU
      })
    }

    function xU(UU) {
      const XU = [];
      for (const zU of document.querySelectorAll(UU)) {
        const UU = zU.getBoundingClientRect();
        UU.width > 0 && "visible" === getComputedStyle(zU).visibility && XU.push(UU)
      }
      return XU
    }

    function JU(UU, XU) {
      return UU.clientX >= XU.left - 8 && UU.clientX <= XU.right + 8 && UU.clientY >= XU.top - 8 && UU.clientY <= XU.bottom + 8
    }
    var jU = zU(9449);
    class KU {
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
      hold(UU, XU) {
        this.suspended || (this.offered ? XU || this.setPhase("idle") : UU && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : UU || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(UU) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const XU = this.phase;
        this.phase = UU, this.deps.onPhase(UU, XU)
      }
    }
    const bU = 25 * Math.PI / 180,
      TU = 45 * Math.PI / 180;
    class hU extends KU {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(UU, XU, zU) {
        this.speed = zU;
        const cU = Math.hypot(UU, XU),
          yU = cU > 0 ? Math.acos(Math.min(1, -XU / cU)) : Math.PI;
        this.hold(cU >= .8 && yU <= bU, cU >= .5 && yU <= TU)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var UX = zU(1310);

    function XX(UU, XU) {
      const zU = (0, yU.useRef)(null),
        cU = (0, yU.useRef)(XU);
      return cU.current = XU, (0, yU.useEffect)((() => {
        if (!UU) return;
        const {
          create: XU,
          elementRef: yU,
          ringRef: QU,
          classPrefix: AU,
          keptBehindMovementPanels: FU,
          resizeEnds: oU
        } = cU.current, DU = {
          charging: `${AU}Charging`,
          armed: `${AU}Armed`,
          ready: `${AU}Ready`,
          locked: `${AU}Locked`
        };
        let EU = null;
        const YU = XU({
          onPhase: (UU, XU) => {
            const zU = yU.current;
            if (null !== zU) {
              for (const [XU, cU] of Object.entries(DU)) zU.classList.toggle(cU, XU === UU);
              if ("charging" === UU) EU = QU.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === UU) {
                var AU;
                null === (AU = EU) || void 0 === AU || AU.cancel(), EU = null
              }
              var FU, oU;
              if ("armed" === UU && "charging" === XU && cU.current.onArmed(), "ready" === UU && jU.e.play("lockReady"), "locked" === UU) jU.e.play("lockLocked"), null === (FU = (oU = cU.current).onLocked) || void 0 === FU || FU.call(oU);
              "locked" === XU && cU.current.onUnlocked()
            }
          }
        });
        zU.current = YU;
        const NU = () => {
            YU.suspend()
          },
          IU = () => {
            "hidden" === document.visibilityState && NU()
          },
          pU = () => {
            oU ? YU.suspend() : YU.suspendArming()
          },
          aU = (0, UX.m)((UU => {
            let {
              keepsMovement: XU
            } = UU;
            XU && FU ? YU.suspendArming() : NU()
          }));
        return document.addEventListener("visibilitychange", IU), window.addEventListener("blur", NU), window.addEventListener("resize", pU), () => {
          aU(), document.removeEventListener("visibilitychange", IU), window.removeEventListener("blur", NU), window.removeEventListener("resize", pU), YU.cancel(), zU.current = null
        }
      }), [UU]), (0, uU.b)("localPlayerAliveSet", (() => {
        var UU;
        null === (UU = zU.current) || void 0 === UU || UU.suspend()
      })), zU
    }
    const zX = "data-joystick-tap";

    function cX(UU) {
      var XU, zU;
      const cU = null === (XU = (zU = UU).closest) || void 0 === XU ? void 0 : XU.call(zU, `[${zX}]`);
      return cU instanceof HTMLElement ? cU : null
    }
    class yX {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var UU, XU;
        return null !== (UU = null === (XU = this.tap) || void 0 === XU ? void 0 : XU.id) && void 0 !== UU ? UU : null
      }
      land(UU, XU) {
        null === this.tap && (this.tap = {
          key: UU,
          id: XU.identifier,
          x: XU.clientX,
          y: XU.clientY
        }, (0, sU.h)(UU, !0))
      }
      slidFrom(UU) {
        const XU = this.tap,
          zU = XU ? UU.find((UU => UU.identifier === XU.id)) : void 0;
        return !zU || Math.hypot(zU.clientX - XU.x, zU.clientY - XU.y) <= 12 ? null : (this.end(!1), {
          identifier: XU.id,
          clientX: XU.x,
          clientY: XU.y
        })
      }
      end(UU) {
        const XU = this.tap;
        XU && (this.tap = null, (0, sU.h)(XU.key, !1), UU && XU.key.click())
      }
    }
    var QX = zU(2645),
      AX = zU(2661),
      FX = zU(1115),
      oX = zU(3796),
      DX = zU(2668);

    function EX(UU, XU, zU) {
      const cU = function(UU, XU, zU) {
        const cU = zU.map((zU => ({
            left: Math.max(0, zU.left),
            top: Math.max(0, zU.top),
            right: Math.min(UU, zU.right),
            bottom: Math.min(XU, zU.bottom)
          }))).filter((UU => UU.right > UU.left && UU.bottom > UU.top)),
          yU = [...new Set([0, XU, ...cU.flatMap((UU => [UU.top, UU.bottom]))])].sort(((UU, XU) => UU - XU)),
          QU = [];
        for (let AU = 0; AU < yU.length - 1; AU++) {
          const XU = yU[AU],
            zU = yU[AU + 1],
            FU = cU.filter((UU => UU.top <= XU && UU.bottom >= zU)).map((UU => [UU.left, UU.right])).sort(((UU, XU) => UU[0] - XU[0]));
          let oU = 0;
          for (const [UU, cU] of FU) UU > oU && QU.push({
            left: oU,
            top: XU,
            right: UU,
            bottom: zU
          }), oU = Math.max(oU, cU);
          oU < UU && QU.push({
            left: oU,
            top: XU,
            right: UU,
            bottom: zU
          })
        }
        return QU
      }(UU, XU, zU);
      if (0 === cU.length) return 'path("M0 0Z")';
      if (1 === cU.length && 0 === cU[0].left && 0 === cU[0].top && cU[0].right === UU && cU[0].bottom === XU) return "";
      const yU = UU => Math.round(10 * UU) / 10;
      return `path("${cU.map((UU=>`M${yU(UU.left)} ${yU(UU.top)}H${yU(UU.right)}V${yU(UU.bottom)}H${yU(UU.left)}Z`)).join("")}")`
    }

    function YX(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const yU = [],
        QU = 2 * zU / cU;
      for (let AU = 0; AU < cU; AU++) {
        const cU = XU - zU + AU * QU,
          FU = cU + QU,
          oU = Math.min(Math.max(XU, cU), FU) - XU,
          DU = Math.sqrt(Math.max(0, zU * zU - oU * oU));
        yU.push({
          left: UU - DU,
          top: cU,
          right: UU + DU,
          bottom: FU
        })
      }
      return yU
    }
    var NX = zU(9461),
      IX = zU(37281);

    function pX(UU) {
      const XU = UU.getBoundingClientRect(),
        zU = {
          left: XU.left,
          top: XU.top,
          right: XU.right,
          bottom: XU.bottom
        },
        cU = (0, vU.g)(UU);
      if (cU.whole) return [zU];
      const yU = function(UU) {
          const XU = UU.right - UU.left,
            zU = UU.bottom - UU.top,
            cU = Math.min(XU, zU) / 2,
            yU = (UU.left + UU.right) / 2,
            QU = (UU.top + UU.bottom) / 2;
          return XU >= zU ? [{
            left: UU.left + cU,
            top: UU.top,
            right: UU.right - cU,
            bottom: UU.bottom
          }, ...YX(UU.left + cU, QU, cU), ...YX(UU.right - cU, QU, cU)] : [{
            left: UU.left,
            top: UU.top + cU,
            right: UU.right,
            bottom: UU.bottom - cU
          }, ...YX(yU, UU.top + cU, cU), ...YX(yU, UU.bottom - cU, cU)]
        }(zU),
        QU = cU.keyBox;
      if (QU) {
        const UU = (zU.left + zU.right) / 2,
          XU = (zU.top + zU.bottom) / 2;
        yU.push({
          left: UU - QU.width / 2,
          top: XU - QU.height / 2,
          right: UU + QU.width / 2,
          bottom: XU + QU.height / 2
        })
      }
      return yU
    }

    function aX(UU) {
      const XU = UU.getBoundingClientRect();
      return 0 === XU.width && 0 === XU.height || "visible" !== getComputedStyle(UU).visibility ? [] : [(0, NX.u)(XU, 44)]
    }

    function tX(UU, XU) {
      (0, yU.useEffect)((() => {
        const zU = UU.current;
        if (!XU || !zU) return;
        const cU = () => {
          const UU = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            XU = UU.find((UU => UU.classList.contains("TouchInteractHit")));
          XU !== yU && (yU && QU.unobserve(yU), yU = XU, XU && QU.observe(XU));
          const cU = Array.from(document.querySelectorAll(DX.d)),
            AU = [...UU.flatMap((UU => pX(UU))), ...cU.flatMap(aX)],
            FU = function(UU, XU) {
              const zU = XU.map((XU => ({
                left: XU.left - UU.left,
                top: XU.top - UU.top,
                right: XU.right - UU.left,
                bottom: XU.bottom - UU.top
              })));
              return EX(Math.ceil(UU.width), Math.ceil(UU.height), zU)
            }(zU.getBoundingClientRect(), AU);
          zU.style.clipPath !== FU && (zU.style.clipPath = FU)
        };
        let yU;
        const QU = new ResizeObserver((() => {
          cU()
        }));
        cU(), QU.observe(zU);
        const AU = zU.closest(".InGameUi"),
          FU = new MutationObserver(cU);
        AU && FU.observe(AU, {
          attributes: !0,
          attributeFilter: ["class", IX.m]
        });
        const oU = [(0, IU.n)(oX.e, cU), (0, IU.n)(DX.w, cU), (0, IU.n)(DX.h, cU)];
        return () => {
          QU.disconnect(), FU.disconnect();
          for (const UU of oU) UU();
          zU.style.clipPath = ""
        }
      }), [UU, XU])
    }
    var gX = zU(4835);

    function kX(UU) {
      var XU;
      let {
        onMove: zU,
        mode: cU,
        speedCurve: QU,
        autorun: AU = !1,
        keys: FU
      } = UU;
      const oU = (0, yU.useRef)(null),
        DU = (0, yU.useRef)(null),
        YU = (0, yU.useRef)(null),
        NU = (0, yU.useRef)(null),
        IU = (0, yU.useRef)(null),
        aU = (0, yU.useRef)(null),
        tU = (0, yU.useRef)(new yX).current,
        gU = (0, yU.useRef)(null),
        kU = (0, yU.useRef)(null),
        GU = (0, yU.useRef)(null),
        BU = (0, yU.useRef)(!1),
        ZU = (0, yU.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: RU
        } = (0, nU.I)(),
        WU = (0, gX.u)(cU),
        dU = (0, rU.q)(["notchSize"]).notchSize,
        LU = dU.left,
        eU = (0, yU.useRef)(16),
        CU = (0, AX.f)(),
        [wU, qU, OU] = "pinned" === cU ? QX.m : null !== (XU = CU.hudElements.joystick) && void 0 !== XU ? XU : QX.m,
        SU = "pinned" === cU ? null : CU.hudSafe,
        uU = Math.max(gX.o, gX.r * OU);
      tX(DU, "pinned" !== cU);
      const fU = function(UU, XU, zU, cU, QU) {
        const AU = (0, yU.useRef)(null),
          FU = () => {
            clearInterval(AU.current), AU.current = null
          },
          oU = XX(UU, {
            create: UU => new hU(UU),
            elementRef: XU,
            ringRef: zU,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: QU,
            onLocked: () => {
              AU.current = setInterval((() => {
                pU.gameBridge.lookup("dropAhead", null) && (jU.e.play("autorunLedgeStop"), oU.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              FU(), cU()
            }
          });
        return (0, yU.useEffect)((() => FU), []), oU
      }(AU, YU, gU, (() => {
        KU(), sU()
      }), (() => {
        iU(), null === GU.current && fU.current.suspend()
      }));

      function iU() {
        const UU = YU.current.getBoundingClientRect();
        GU.current = lU(kU.current, UU, 80, xU(`.TouchInventoryKey, .TouchSprintKey, ${DX.d}`)), BU.current = null !== GU.current && JU(ZU.current, GU.current)
      }

      function HU() {
        const {
          innerWidth: UU,
          innerHeight: XU
        } = window, zU = (0, DX.R)(SU, UU, XU, (0, DX.Z)(dU, UU, XU), eU.current);
        return {
          left: zU[3],
          bottom: zU[2]
        }
      }

      function MU(UU) {
        YU.current.style.transform = `translate(${UU.x-uU}px, ${UU.y-uU}px)`
      }

      function vU(UU) {
        const XU = YU.current;
        XU.classList.add("Resting"), XU.classList.toggle("Returning", UU), XU.style.display = "fixed_hidden" === cU ? "none" : "block", MU(function() {
          const {
            innerWidth: UU,
            innerHeight: XU
          } = window, zU = HU(), cU = LU * UU / 100 + zU.left, yU = oU.current.offsetHeight || XU, QU = ((0, FX.b)(UU, XU) ? gX.i : gX.e) + zU.bottom;
          return {
            x: Math.min(UU - uU, Math.max(uU, cU + gX.k + wU * UU)),
            y: Math.min(yU - uU, Math.max(uU, yU - QU + qU * yU))
          }
        }())
      }
      const VU = (0, yU.useRef)({
        restFixed: vU,
        release: bU
      });

      function sU() {
        WU ? vU("fixed_shown" === cU) : "floating" === cU && (YU.current.style.display = "none"), zU({
          x: 0,
          y: 0
        })
      }

      function KU() {
        aU.current = null, IU.current = null, NU.current.style.transform = "translate(-50%, -50%)"
      }

      function bU(UU) {
        KU();
        const XU = fU.current;
        UU && null !== XU && void 0 !== XU && XU.lift() ? zU({
          x: 0,
          y: -XU.lockedSpeed
        }) : (null === XU || void 0 === XU || XU.cancel(), sU())
      }

      function TU(UU) {
        var XU;
        if (null === (XU = fU.current) || void 0 === XU || XU.startTouch(), "pinned" === cU) {
          const UU = YU.current.getBoundingClientRect();
          IU.current = {
            x: UU.left + UU.width / 2,
            y: UU.top + UU.height / 2
          }
        } else {
          IU.current = {
            x: UU.clientX,
            y: UU.clientY
          }, YU.current.classList.remove("Resting", "Returning"), YU.current.style.display = "block";
          const XU = oU.current.getBoundingClientRect();
          MU({
            x: UU.clientX - XU.left,
            y: UU.clientY - XU.top
          }), AU && (ZU.current = {
            clientX: UU.clientX,
            clientY: UU.clientY
          }, iU())
        }
      }

      function zX(UU) {
        const XU = tU.slidFrom(Array.from(UU.touches));
        XU && null === aU.current && (aU.current = XU.identifier, TU(XU));
        const cU = Array.from(UU.touches).find((UU => UU.identifier === aU.current));
        if (null === IU.current || null === aU.current || (0, mU.P)(cU)) return;
        const yU = fU.current,
          AU = cU.clientX - IU.current.x,
          FU = cU.clientY - IU.current.y,
          oU = Math.hypot(AU, FU),
          DU = oU > 0 ? Math.min(1, uU / oU) : 0,
          EU = AU * DU,
          YU = FU * DU,
          pU = Math.hypot(EU, YU) / uU,
          gU = QU && pU > 0 ? QU(pU) / pU : 1;
        NU.current.style.transform = `translate(calc(-50% + ${EU}px), calc(-50% + ${YU}px))`;
        const kU = EU / uU,
          RU = YU / uU;
        if (zU({
            x: kU * gU,
            y: RU * gU
          }), null !== yU && null !== GU.current) {
          yU.move(kU, RU, pU * gU), ZU.current = {
            clientX: cU.clientX,
            clientY: cU.clientY
          };
          const UU = BU.current;
          BU.current = JU(cU, GU.current), BU.current !== UU && yU.target(BU.current)
        }
      }
      return VU.current = {
        restFixed: vU,
        release: bU
      }, (0, yU.useLayoutEffect)((() => {
        if (!WU) return;
        const UU = () => {
          eU.current = (0, DX.db)(document)
        };
        UU(), null === aU.current && VU.current.restFixed(!1);
        const XU = new ResizeObserver((() => {
          UU(), null === aU.current && VU.current.restFixed(!1)
        }));
        XU.observe(oU.current);
        const zU = YU.current;
        return () => {
          XU.disconnect(), zU.classList.remove("Resting", "Returning"), null === aU.current && (zU.style.display = "", zU.style.transform = "")
        }
      }), [WU, cU, dU, wU, qU, uU, SU]), (0, yU.useEffect)((() => {
        const UU = (UU, XU) => void 0 === XU || null === XU || Array.from(UU.touches).some((UU => UU.identifier === XU)) ? null : {
            lifted: "touchend" === UU.type && Array.from(UU.changedTouches).some((UU => UU.identifier === XU))
          },
          XU = XU => {
            const zU = UU(XU, aU.current);
            zU && VU.current.release(zU.lifted);
            const cU = UU(XU, tU.touchId);
            cU && tU.end(cU.lifted)
          },
          zU = () => {
            null !== aU.current && VU.current.release(!1), tU.end(!1)
          },
          cU = () => {
            "hidden" === document.visibilityState && zU()
          };
        document.addEventListener("touchstart", XU, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", XU, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", XU, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", XU, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", zU), document.addEventListener("visibilitychange", cU);
        const yU = (0, UX.m)((UU => {
          let {
            keepsMovement: XU
          } = UU;
          XU || zU()
        }));
        return () => {
          yU(), document.removeEventListener("touchstart", XU, {
            capture: !0
          }), document.removeEventListener("touchmove", XU, {
            capture: !0
          }), document.removeEventListener("touchend", XU, {
            capture: !0
          }), document.removeEventListener("touchcancel", XU, {
            capture: !0
          }), window.removeEventListener("blur", zU), document.removeEventListener("visibilitychange", cU)
        }
      }), []), (0, yU.useEffect)((() => {
        const UU = oU.current,
          XU = UU => {
            UU.preventDefault()
          };
        return UU.addEventListener("touchstart", XU, {
          passive: !1
        }), () => {
          UU.removeEventListener("touchstart", XU)
        }
      }), []), (0, EU.jsxs)("div", {
        ref: oU,
        className: "JoystickZone",
        style: WU && (wU > 0 || OU > 1 || HU().left > 0) ? {
          width: `max(35vw, calc(${LU+100*wU}vw + ${HU().left+gX.k+uU+24}px))`
        } : void 0,
        onTouchStart: function(UU) {
          const XU = Array.from(UU.changedTouches).filter((UU => {
            var XU;
            return null === (XU = oU.current) || void 0 === XU ? void 0 : XU.contains(UU.target)
          }));
          for (const cU of XU) {
            const UU = cX(cU.target);
            UU && tU.land(UU, cU)
          }
          const zU = XU.find((UU => null === cX(UU.target)));
          zU && null === aU.current && (aU.current = zU.identifier, TU(zU), zX(UU))
        },
        onTouchMove: zX,
        children: [(0, EU.jsx)("div", {
          ref: DU,
          className: "JoystickTouchLayer"
        }), (0, EU.jsxs)("div", {
          ref: YU,
          className: "Joystick",
          style: {
            width: 2 * uU + "px",
            height: 2 * uU + "px",
            transform: "pinned" === cU ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, EU.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * uU + "px",
              height: 2 * uU + "px"
            }
          }), AU && (0, EU.jsxs)(EU.Fragment, {
            children: [(0, EU.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, EU.jsx)("circle", {
                ref: gU,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, EU.jsxs)("div", {
              ref: kU,
              className: "AutorunTarget",
              children: [(0, EU.jsx)(PU.d, {
                name: "lock"
              }), RU("settingsMenu:autoRun")]
            })]
          }), (0, EU.jsx)("div", {
            ref: NU,
            className: "JoystickKnob",
            style: {
              width: `${uU}px`,
              height: `${uU}px`
            }
          })]
        }), FU]
      })
    }
    var GX = zU(287);
    const BX = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      ZX = {
        short_creep: {
          ...BX,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...BX,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...BX,
          deadZone: .05
        },
        control: BX
      };

    function RX(UU) {
      return function(UU, XU) {
        const {
          deadZone: zU,
          creepEnd: cU,
          fullSpeedAt: yU,
          creepMin: QU,
          creepMax: AU
        } = UU;
        if (XU < zU) return 0;
        if (XU < cU) {
          const UU = (XU - zU) / (cU - zU);
          return QU + (AU - QU) * UU * UU
        }
        return XU < yU ? AU + (1 - AU) * (XU - cU) / (yU - cU) : 1
      }(ZX[GX.d.mobile_walk_curve_v1], UU)
    }

    function PX(UU, XU) {
      const zU = (0, yU.useRef)(null);
      return (0, yU.useLayoutEffect)((() => (vU.j.set(UU, zU.current, XU), () => {
        vU.j.set(UU, null)
      })), [UU, XU]), zU
    }
    const WX = "C",
      dX = "J",
      LX = "U",
      eX = "A",
      CX = "G",
      wX = "X",
      qX = (0, yU.forwardRef)((function(UU, XU) {
        let {
          slot: zU,
          canvasZone: cU = !1,
          lit: QU = !1,
          label: FU,
          className: oU,
          children: DU,
          ...YU
        } = UU;
        return (0, yU.useEffect)((() => (IU.k.UY(oX.e), () => {
          IU.k.UY(oX.e)
        })), []), (0, EU.jsx)("div", {
          ref: XU,
          className: AU()("TouchKeyHit", `TouchSlot${zU}`, oU, {
            CanvasZone: cU
          }),
          ...YU,
          children: (0, EU.jsxs)("div", {
            className: AU()("TouchKey", {
              Lit: QU,
              Labelled: void 0 !== FU
            }),
            children: [DU, void 0 !== FU && (0, EU.jsx)("span", {
              className: "TouchKeyLabel",
              children: FU
            })]
          })
        })
      }));

    function OX(UU, XU) {
      (0, yU.useEffect)((() => () => {
        XU.current && (XU.current = !1, (0, MU.F)(UU, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }
    var SX = zU(37293);
    class rX extends KU {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(UU, XU) {
        this.start = {
          x: UU,
          y: XU
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(UU, XU, zU) {
        const cU = Math.hypot(UU - this.start.x, XU - this.start.y) <= 12;
        this.moved ||= !cU;
        const yU = null !== zU && XU < this.start.y - 12 && JU({
          clientX: UU,
          clientY: XU
        }, zU);
        this.hold(!this.moved, cU || yU)
      }
    }
    const uX = new Set;

    function fX(UU) {
      const XU = new Set(Array.from(UU.touches, (UU => UU.identifier)));
      for (const zU of uX) {
        for (const UU of zU.ids) XU.has(UU) || zU.ids.delete(UU);
        if (0 === zU.ids.size) {
          uX.delete(zU);
          zU.pressesOnPointerDown && "touchstart" === UU.type && Array.from(UU.changedTouches).some((UU => UU.target instanceof Node && zU.element.contains(UU.target))) || zU.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const jA of ["touchstart", "touchmove"]) window.addEventListener(jA, fX, {
        capture: !0,
        passive: !0
      });

    function iX(UU) {
      let {
        pressesOnPointerDown: XU = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const zU = (0, yU.useRef)(UU);
      zU.current = UU;
      const cU = (0, yU.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: XU,
        release: () => {
          zU.current()
        }
      });
      (0, yU.useEffect)((() => {
        const UU = cU.current;
        return () => {
          uX.delete(UU), UU.ids.clear()
        }
      }), []);
      const QU = UU => {
        const XU = cU.current;
        for (const zU of Array.from(UU.changedTouches)) XU.ids.delete(zU.identifier);
        0 === XU.ids.size && uX.delete(XU)
      };
      return {
        onTouchStart: UU => {
          const XU = cU.current;
          XU.element = UU.currentTarget;
          for (const zU of Array.from(UU.changedTouches)) zU.target instanceof Node && UU.currentTarget.contains(zU.target) && XU.ids.add(zU.identifier);
          XU.ids.size > 0 && uX.add(XU)
        },
        onTouchEnd: QU,
        onTouchCancel: QU
      }
    }

    function HX(UU, XU) {
      return null === XU ? null : (0, SX.e)(UU.nativeEvent.changedTouches, XU.id)
    }

    function MX(UU) {
      let {
        lockable: XU
      } = UU;
      const {
        t: zU
      } = (0, nU.I)(), cU = "round" === (0, QX.db)().hudShape, QU = (0, yU.useRef)(!1);
      OX(HU.D.Jump, QU);
      const AU = (0, yU.useRef)(null),
        FU = (0, yU.useRef)(null),
        oU = (0, yU.useRef)(null),
        DU = (0, yU.useRef)(null),
        YU = (0, yU.useRef)(null),
        NU = (0, yU.useRef)(null),
        IU = (0, yU.useRef)(!1),
        pU = (UU, XU) => {
          QU.current = UU, (0, MU.F)(HU.D.Jump, UU, XU)
        },
        aU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          QU.current && (AU.current && (0, sU.h)(AU.current, !1), pU(!1, UU))
        },
        tU = XX(XU, {
          create: UU => new rX(UU),
          elementRef: AU,
          ringRef: FU,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const UU = AU.current.getBoundingClientRect(),
              XU = oU.current.parentElement,
              zU = XU.getBoundingClientRect(),
              cU = {
                left: zU.left + XU.clientLeft,
                top: zU.top + XU.clientTop,
                right: zU.right - XU.clientLeft,
                bottom: zU.bottom - XU.clientTop
              };
            if (YU.current = lU(oU.current, cU, 16, xU(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${DX.d}`)), null === YU.current) return void tU.current.suspend();
            const yU = YU.current;
            NU.current = {
              left: Math.min(UU.left, yU.left),
              top: yU.top,
              right: Math.max(UU.right, yU.right),
              bottom: UU.bottom
            }, IU.current = null !== DU.current && JU({
              clientX: DU.current.x,
              clientY: DU.current.y
            }, yU)
          },
          onUnlocked: () => {
            null === DU.current && aU()
          }
        }),
        gU = UU => {
          var XU;
          DU.current = null, null === (XU = tU.current) || void 0 === XU || XU.cancel(), aU(UU)
        },
        kU = iX((() => {
          gU()
        })),
        GU = UU => {
          const XU = DU.current;
          var zU;
          return null === XU ? null !== (zU = tU.current) && void 0 !== zU && zU.locked ? null : "lifted" : HX(UU, XU) ? "lifted" : (0, SX.f)(UU.nativeEvent.touches, XU.id) ? null : "dropped"
        };
      return (0, EU.jsxs)(qX, {
        ref: AU,
        slot: dX,
        className: "JumpKey",
        onTouchStart: UU => {
          kU.onTouchStart(UU), (0, sU.h)(UU.currentTarget, !0), null === DU.current || (0, SX.f)(UU.nativeEvent.touches, DU.current.id) || gU();
          const XU = UU.changedTouches[0];
          var zU;
          null === DU.current && XU && (DU.current = {
            id: XU.identifier,
            x: XU.clientX,
            y: XU.clientY
          }, null === (zU = tU.current) || void 0 === zU || zU.press(XU.clientX, XU.clientY));
          QU.current || pU(!0, UU.nativeEvent)
        },
        onTouchMove: UU => {
          const XU = DU.current,
            zU = HX(UU, XU);
          if (!zU) return;
          const cU = tU.current;
          if (null === cU || void 0 === cU || cU.move(zU.clientX, zU.clientY, NU.current), null !== cU && void 0 !== cU && cU.offered) {
            const UU = JU(zU, YU.current);
            UU !== IU.current && (IU.current = UU, cU.target(UU))
          }
          XU.x = zU.clientX, XU.y = zU.clientY
        },
        onTouchEnd: UU => {
          var XU;
          kU.onTouchEnd(UU);
          const zU = GU(UU);
          null !== zU && ("dropped" !== zU ? (DU.current = null, null !== (XU = tU.current) && void 0 !== XU && XU.lift() ? (0, sU.h)(UU.currentTarget, !1) : aU(UU.nativeEvent)) : gU(UU.nativeEvent))
        },
        onTouchCancel: UU => {
          kU.onTouchCancel(UU), null !== GU(UU) && gU(UU.nativeEvent)
        },
        children: [(0, EU.jsx)(PU.d, {
          name: "arrow-up-from-line"
        }), XU && (0, EU.jsxs)(EU.Fragment, {
          children: [(0, EU.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, EU.jsx)(PU.d, {
              name: "lock"
            })
          }), (0, EU.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, EU.jsx)("rect", {
              ref: FU,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: cU ? 48 : 0,
              pathLength: 1
            })
          }), (0, EU.jsxs)("div", {
            ref: oU,
            className: "JumpLockTarget",
            children: [(0, EU.jsx)(PU.d, {
              name: "lock"
            }), zU("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var vX = zU(37311);

    function VX(UU) {
      let {
        atHome: XU
      } = UU;
      const {
        t: zU
      } = (0, nU.I)(), cU = (QU = (0, BU.f)("runningSpeed"), FU = (0, BU.f)("walkingSpeed"), null !== QU && null !== FU && QU > FU);
      var QU, FU;
      const DU = (0, QX.q)((0, AX.f)().hudElements, "sprint"),
        YU = (0, oU.j)(vX.c, (0, vX.g)());
      return (0, yU.useEffect)((() => {
        cU && !DU || (0, vX.h)(!0)
      }), [cU, DU]), (0, yU.useEffect)((() => () => {
        (0, vX.h)(!0)
      }), []), cU ? (0, EU.jsx)("div", {
        className: AU()("TouchSprintHit", {
          AtHome: XU
        }),
        role: "switch",
        "aria-checked": YU,
        "aria-label": zU("touchKeys:sprint"),
        [zX]: "",
        onClick: () => {
          (0, vX.h)(!(0, vX.g)())
        },
        children: (0, EU.jsx)("div", {
          className: AU()("TouchKey TouchSprintKey", {
            Lit: YU
          }),
          children: (0, EU.jsx)(PU.d, {
            name: YU ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    var sX = zU(9471),
      nX = zU(9466);

    function mX(UU) {
      const XU = UU.getBoundingClientRect();
      return XU.width > 0 && XU.height > 0 ? (0, NX.j)(XU) : null
    }

    function lX(UU) {
      const XU = UU.ownerDocument.documentElement.classList,
        zU = UU.classList.contains("ShopKey") ? "HudHide-shop" : UU.classList.contains("BagKey") ? "HudHide-bag" : null;
      return null !== zU && (XU.contains(zU) || XU.contains("HudHide-inventory")) ? null : mX(UU)
    }

    function xX(UU) {
      const XU = mX(UU),
        zU = UU.firstElementChild;
      if (null === XU) return null;
      const {
        x: cU,
        y: yU
      } = (0, NX.b)(XU), QU = zU.offsetWidth / 2, AU = zU.offsetHeight / 2;
      return {
        left: cU - QU,
        top: yU - AU,
        right: cU + QU,
        bottom: yU + AU
      }
    }

    function JX(UU, XU) {
      const zU = UU.ownerDocument.createElement("div");
      zU.className = `TouchSlotProbe TouchSlot${XU}`, UU.append(zU);
      const cU = mX(zU);
      return zU.remove(), cU
    }
    const jX = `.TouchInventoryKey, .TouchSprintKey, ${DX.d}`;

    function KX(UU, XU) {
      const zU = XU.map((XU => ({
        slot: XU,
        face: JX(UU, XU)
      })));
      if (zU.every((UU => {
          let {
            face: XU
          } = UU;
          return null === XU
        }))) return null;
      return function(UU, XU) {
        const zU = [...XU],
          cU = [],
          yU = [];
        for (const {
            face: AU,
            slot: FU
          }
          of UU) null !== AU && (zU.some((UU => (0, NX.o)(AU, UU, nX.c))) ? yU.push(FU) : (cU.push(FU), zU.push(AU)));
        const QU = [...cU, ...yU];
        return UU.map((UU => {
          let {
            slot: XU,
            face: zU
          } = UU;
          return null === zU ? XU : QU.shift()
        }))
      }(zU, [...[...UU.querySelectorAll(":scope > .TouchKeyHit")].filter((UU => UU.classList.contains("BoostKey") || !XU.some((XU => UU.classList.contains(`TouchSlot${XU}`))))).map(xX), ...[...UU.ownerDocument.querySelectorAll(jX)].map(lX)].filter((UU => null !== UU)))
    }
    const bX = new WeakMap;
    class TX {
      constructor(UU) {
        this.zones = UU, this.followed = new Map, this.onStart = UU => {
          if (this.releaseMissing(UU.touches), UU.target instanceof HTMLCanvasElement)
            for (let zU = 0; zU < UU.changedTouches.length; zU++) {
              var XU;
              const {
                identifier: cU,
                clientX: yU,
                clientY: QU
              } = UU.changedTouches[zU];
              this.release(cU);
              const AU = this.zones.hitZone(yU, QU);
              if (!AU) continue;
              const {
                key: FU
              } = AU;
              null === (XU = bX.get(FU)) || void 0 === XU || XU.cancel();
              const oU = {
                hit: AU.element,
                key: FU,
                x: AU.x,
                y: AU.y,
                reach: .6 * AU.radius
              };
              this.followed.set(cU, oU), (0, sU.h)(AU.element, !0), hX(oU, yU, QU)
            }
        }, this.onMove = UU => {
          this.releaseMissing(UU.touches);
          for (let XU = 0; XU < UU.changedTouches.length; XU++) {
            const {
              identifier: zU,
              clientX: cU,
              clientY: yU
            } = UU.changedTouches[XU], QU = this.followed.get(zU);
            QU && hX(QU, cU, yU)
          }
        }, this.onEnd = UU => {
          for (let XU = 0; XU < UU.changedTouches.length; XU++) this.release(UU.changedTouches[XU].identifier)
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
        for (const XU of [...this.followed.keys()])(0, SX.f)(UU, XU) || this.release(XU)
      }
      releaseAll() {
        for (const UU of [...this.followed.keys()]) this.release(UU)
      }
      release(UU) {
        const XU = this.followed.get(UU);
        if (!XU) return;
        this.followed.delete(UU);
        for (const yU of this.followed.values())
          if (yU.key === XU.key) return;
        (0, sU.h)(XU.hit, !1);
        const {
          key: zU
        } = XU, cU = zU.style.translate;
        zU.style.translate = "", cU && bX.set(zU, zU.animate({
          translate: [cU, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function hX(UU, XU, zU) {
      let {
        key: cU,
        x: yU,
        y: QU,
        reach: AU
      } = UU;
      const FU = XU - yU,
        oU = zU - QU,
        DU = Math.min(1, AU / (Math.hypot(FU, oU) || 1));
      cU.style.translate = `${FU*DU}px ${oU*DU}px`
    }
    var Uz = zU(1521),
      Xz = zU(97),
      zz = zU(1410),
      cz = zU(42);
    const yz = "threeFingerHintShown",
      Qz = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let Az = 0,
      Fz = !1;

    function oz() {
      const UU = new Set;
      let XU = -1 / 0,
        zU = -1 / 0,
        cU = null,
        yU = 0;
      const QU = () => {
          UU.clear()
        },
        AU = QU => {
          if (QU.touches.length > 0) return;
          for (let XU = 0; XU < QU.changedTouches.length; XU++) UU.add(QU.changedTouches[XU].identifier);
          const AU = UU.size;
          if (AU < 3 || !(0, UX.w)()) return;
          if (yU = AU, null !== cU) return;
          const FU = performance.now(),
            oU = XU >= FU - 200;
          cU = setTimeout((() => {
            if (cU = null, !(0, UX.w)()) return;
            const UU = zU >= FU - 200 || document.hidden;
            ! function(UU, XU) {
              var zU;
              const cU = (0, Xz.getOperatingSystem)();
              Az < 5 && (Az++, (0, Uz.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === XU ? `${cU}:${UU}` : `${cU}:${UU}:${XU}`
              })), null === XU && (Fz || !0 === cz.k.getItem(yz) || (Fz = !0, cz.k.setItem(yz, !0), zz.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (zU = Qz[cU]) && void 0 !== zU ? zU : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(yU, UU ? "hide" : oU ? "blur" : null)
          }), 500)
        },
        FU = () => {
          zU = performance.now()
        },
        oU = () => {
          XU = performance.now()
        },
        DU = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", QU, DU), document.addEventListener("touchcancel", AU, DU), document.addEventListener("visibilitychange", FU), window.addEventListener("blur", oU), window.addEventListener("resize", FU), window.addEventListener("orientationchange", FU), () => {
        document.removeEventListener("touchstart", QU, DU), document.removeEventListener("touchcancel", AU, DU), document.removeEventListener("visibilitychange", FU), window.removeEventListener("blur", oU), window.removeEventListener("resize", FU), window.removeEventListener("orientationchange", FU), null !== cU && clearTimeout(cU)
      }
    }
    const Dz = () => {
      const UU = (0, fU.m)(),
        XU = (0, iU.H)();
      return UU || XU
    };

    function Ez(UU) {
      (0, vU.l)(UU.x, UU.y), 0 === UU.x && 0 === UU.y || IU.k.UY("stickMoved")
    }
    const Yz = (0, yU.memo)((function() {
        const UU = Dz(),
          {
            joystickMode: XU,
            touchSpeedCurve: zU,
            autorun: cU
          } = (0, rU.q)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, yU.useEffect)((() => ((0, VU.f)(HU.F.TouchControls, HU.F.TouchControls), () => {
          (0, VU.f)(HU.F.TouchControls, 0), (0, vU.l)(0, 0)
        })), []), (0, yU.useEffect)(oz, []), (0, EU.jsx)("div", {
          className: AU()("TouchMovementWrapper", {
            Hidden: UU
          }),
          "data-camera-keeper": "",
          children: (0, EU.jsx)(kX, {
            onMove: Ez,
            mode: XU,
            speedCurve: zU ? RX : void 0,
            autorun: cU,
            keys: (0, EU.jsx)(VX, {
              atHome: !(0, gX.u)(XU)
            })
          })
        })
      })),
      Nz = (0, yU.memo)((function() {
        const UU = Dz(),
          {
            clientEscMenuOptions: XU
          } = (0, rU.q)(["clientEscMenuOptions"]),
          zU = XU.touchActionButtons;
        (0, yU.useEffect)((() => new TX(vU.j).start()), []), (0, yU.useEffect)((() => {
          IU.k.UY(oX.e)
        }), [UU]);
        const cU = (0, yU.useRef)(null),
          QU = function(UU, XU) {
            const [zU, cU] = (0, yU.useState)((() => (0, sX.l)(UU)));
            return (0, yU.useLayoutEffect)((() => {
              var zU;
              const yU = XU.current;
              if (!yU) return;
              const QU = (0, sX.l)(UU),
                AU = () => {
                  const UU = KX(yU, QU);
                  cU((XU => {
                    const zU = null !== UU && void 0 !== UU ? UU : XU.length === QU.length ? XU : QU;
                    return zU.join() === XU.join() ? XU : zU
                  }))
                };
              AU(), window.addEventListener("resize", AU);
              const FU = "undefined" === typeof ResizeObserver ? null : new ResizeObserver(AU);
              null === FU || void 0 === FU || FU.observe(null !== (zU = yU.closest(".BottomRightElements")) && void 0 !== zU ? zU : yU);
              const oU = [(0, IU.n)(DX.h, AU), (0, IU.n)(oX.e, AU), (0, IU.n)(DX.w, AU)];
              return () => {
                window.removeEventListener("resize", AU), null === FU || void 0 === FU || FU.disconnect();
                for (const UU of oU) UU()
              }
            }), [UU, XU]), zU.length === (0, sX.l)(UU).length ? zU : (0, sX.l)(UU)
          }(zU, cU);
        return (0, EU.jsxs)("div", {
          ref: cU,
          className: AU()("TouchComponentsButtons", {
            Hidden: UU
          }),
          "data-camera-keeper": "",
          children: [(0, EU.jsx)(MX, {
            lockable: XU.jumpLock && !UU
          }), (0, EU.jsx)(Wz, {
            hidden: UU,
            actionButtons: zU,
            contextSlots: QU
          }), (0, EU.jsx)(pz, {})]
        })
      }));

    function Iz(UU) {
      const XU = XU => zU => {
        (0, sU.h)(zU.currentTarget, XU), UU(XU, zU.nativeEvent)
      };
      return {
        onPointerDown: XU(!0),
        onPointerUp: XU(!1),
        onPointerCancel: XU(!1)
      }
    }

    function pz() {
      const UU = (0, BU.f)("canCrouch"),
        XU = (0, uU.i)("crouching"),
        zU = (0, yU.useRef)(!1);
      OX(HU.D.Crouch, zU);
      const cU = (UU, XU) => {
          zU.current = UU, (0, MU.F)(HU.D.Crouch, UU, XU)
        },
        QU = (0, yU.useRef)(null),
        AU = () => {
          zU.current && (QU.current && (0, sU.h)(QU.current, !1), cU(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        FU = iX(AU);
      return (0, yU.useEffect)((() => {
        !1 === UU && AU()
      }), [UU]), !1 === UU ? null : (0, EU.jsx)(qX, {
        ref: QU,
        slot: WX,
        className: "CrouchKey",
        lit: XU,
        ...FU,
        ...Iz(cU),
        children: (0, EU.jsx)(PU.d, {
          name: "arrow-down-to-line"
        })
      })
    }
    const az = [{
        icon: "arrows-rotate"
      }],
      tz = [{
        icon: "Arrow"
      }],
      gz = [{
        icon: "crosshairs"
      }],
      kz = [{
        icon: "swords"
      }],
      Gz = [{
        icon: "hand-back-point-up"
      }],
      Bz = [{
        icon: "Firecracker"
      }];

    function Zz(UU, XU, zU, cU) {
      return {
        id: JSON.stringify(XU),
        render: yU => (0, EU.jsx)(dz, {
          code: UU,
          slot: yU,
          icon: XU,
          label: cU,
          hidden: zU
        })
      }
    }

    function Rz(UU, XU) {
      return {
        id: "fly",
        render: zU => (0, EU.jsx)(Pz, {
          slot: zU,
          flying: UU,
          label: XU
        })
      }
    }

    function Pz(UU) {
      let {
        slot: XU,
        flying: zU,
        label: cU
      } = UU;
      return (0, EU.jsx)(qX, {
        slot: XU,
        className: "FlyKey",
        lit: zU,
        label: cU,
        ...Iz(((UU, XU) => {
          (0, MU.F)(HU.D.Fly, UU, XU)
        })),
        children: (0, EU.jsx)(PU.d, {
          name: "feather-pointed"
        })
      })
    }

    function Wz(UU) {
      var XU, zU;
      let {
        hidden: cU,
        actionButtons: QU,
        contextSlots: AU
      } = UU;
      const {
        t: FU
      } = (0, nU.I)(), {
        gun: oU,
        aimable: DU,
        chargeName: YU
      } = (0, uU.i)("heldItemAim"), NU = (0, uU.i)("gliderBoostFuel"), {
        canFly: IU,
        flying: pU
      } = (0, uU.i)("flight"), aU = (0, BU.f)("touchscreenActionButton"), tU = oU ? az : aU, gU = DU ? {
        icon: tz,
        label: FU("touchKeys:aim")
      } : null, kU = null !== YU ? {
        icon: [{
          icon: YU
        }]
      } : null, GU = null !== gU && void 0 !== gU ? gU : kU, ZU = null !== (XU = null === (zU = oU ? gU : null !== kU && void 0 !== kU ? kU : gU) || void 0 === zU ? void 0 : zU.icon) && void 0 !== XU ? XU : Gz, RU = [!QU && GU ? Zz(vU.e.Action2, GU.icon, cU, GU.label) : null, oU ? Zz(vU.e.Action3, gz, cU, FU("touchKeys:scope")) : null, IU ? Rz(pU, FU("touchKeys:fly")) : null];
      return (0, EU.jsxs)(EU.Fragment, {
        children: [tU && (0, EU.jsx)(dz, {
          code: vU.e.Action1,
          slot: CX,
          icon: tU,
          label: oU ? FU("touchKeys:reload") : void 0,
          hidden: cU
        }, JSON.stringify(tU)), QU && (0, EU.jsxs)(EU.Fragment, {
          children: [(0, EU.jsx)(dz, {
            code: vU.e.Attack,
            slot: eX,
            icon: kz,
            name: FU("touchKeys:attack"),
            hidden: cU
          }), (0, EU.jsx)(dz, {
            code: vU.e.Use,
            slot: LX,
            icon: ZU,
            name: FU("touchKeys:use"),
            hidden: cU
          })]
        }), (PU = RU, WU = AU, PU.filter((UU => null !== UU)).slice(0, WU.length).map(((UU, XU) => {
          const zU = WU[XU];
          return (0, EU.jsx)(yU.Fragment, {
            children: UU.render(zU)
          }, `${UU.id}:${zU}`)
        }))), NU > 0 && (0, EU.jsx)(dz, {
          code: vU.e.Boost,
          slot: wX,
          className: "BoostKey",
          icon: Bz,
          label: FU("touchKeys:boost", {
            fuel: NU > 99 ? "99+" : NU
          }),
          hidden: cU
        })]
      });
      var PU, WU
    }

    function dz(UU) {
      let {
        code: XU,
        slot: zU,
        icon: cU,
        label: yU,
        name: QU,
        hidden: FU,
        className: oU
      } = UU;
      const YU = PX(XU, FU);
      return (0, EU.jsx)(qX, {
        ref: YU,
        slot: zU,
        className: AU()("TouchActionKey", oU),
        canvasZone: !0,
        label: yU,
        role: void 0 !== QU ? "img" : void 0,
        "aria-label": QU,
        children: (0, EU.jsx)(DU.d, {
          text: cU
        })
      })
    }
    var Lz = zU(4622),
      ez = zU(2818),
      Cz = zU(698);
    const wz = (0, yU.memo)((function() {
      (0, RU.e)();
      const UU = (0, yU.useRef)([]),
        XU = (0, ez.c)(),
        zU = (0, yU.useRef)(0),
        cU = (0, yU.useRef)(0),
        QU = (0, yU.useRef)([]),
        AU = (0, yU.useRef)(null);

      function FU(zU, cU, yU, QU) {
        const AU = (0, Cz.d)(),
          FU = setTimeout((() => {
            UU.current = UU.current.filter((UU => UU.id !== AU)), XU()
          }), QU);
        pU.gameBridge.send("recordFlyingMiddleText", {
          content: zU,
          nX: cU,
          angle: yU,
          mX: QU
        }), UU.current.push({
          id: AU,
          content: zU,
          nX: cU,
          mX: QU,
          removeTimeout: FU,
          angle: yU
        }), XU()
      }
      return (0, uU.b)("shotDamageToShow", (UU => {
        let {
          damage: XU,
          wasCrit: zU,
          distance: cU
        } = UU;
        const yU = -Math.PI / 4 + Math.random() * Math.PI / 2;
        FU(zU ? [{
          str: XU.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [XU.toString()], cU, yU, 1e3)
      })), (0, oU.f)("flyingMiddleMessage", (UU => {
        let {
          content: XU,
          nX: yU,
          mX: oU
        } = UU;
        QU.current.push({
          content: XU,
          nX: yU,
          mX: oU
        });
        const DU = () => {
          const {
            content: UU,
            nX: XU,
            mX: yU
          } = QU.current.shift(), AU = function(UU) {
            const XU = -Math.PI / 4,
              zU = Math.PI / 4,
              cU = zU - XU,
              yU = (1 + Math.sqrt(5)) / 2,
              QU = 2 * Math.PI / (yU * yU);
            let AU = UU + QU;
            for (; AU > zU;) AU -= cU;
            for (; AU < XU;) AU += cU;
            const FU = Math.PI / 6;
            if (Math.abs(AU - UU) < FU) {
              AU = UU + (Math.sign(AU - UU) || 1) * FU, AU > zU && (AU = UU - FU), AU < XU && (AU = UU + FU)
            }
            return AU
          }(cU.current);
          cU.current = AU, zU.current = Date.now(), FU(UU, XU, AU, yU)
        };
        if (!AU.current) {
          const UU = () => {
            QU.current.length > 0 && DU(), 0 === QU.current.length && (clearInterval(AU.current), AU.current = null)
          };
          AU.current = setInterval(UU, 200), zU.current + 200 < Date.now() && UU()
        }
        for (; QU.current.length > 4;) DU()
      })), (0, oU.f)("forceFlyingMiddleMessage", (UU => {
        let {
          content: XU,
          nX: zU,
          angle: cU,
          mX: yU
        } = UU;
        FU(XU, zU, cU, yU)
      })), (0, yU.useEffect)((() => () => {
        clearInterval(AU.current), AU.current = null;
        for (const XU of UU.current) clearTimeout(XU.removeTimeout)
      }), []), (0, EU.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: UU.current.map((UU => {
          const {
            id: XU,
            content: zU,
            nX: cU,
            mX: yU,
            angle: QU
          } = UU;
          return UU.pos || (UU.pos = function(UU, XU) {
            const zU = 50 / (UU ** .7 * .35);
            return {
              x: zU * Math.sin(XU),
              y: -zU * Math.cos(XU)
            }
          }(cU, QU)), (0, EU.jsx)(qz, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: yU,
            enterActiveStyle: {
              transform: `translate(${UU.pos.x}vw, ${UU.pos.y}vh)`,
              transition: `transform ${yU}ms ease-out`
            },
            children: (0, EU.jsx)("div", {
              children: (0, EU.jsx)(DU.d, {
                text: zU
              })
            })
          }, XU)
        }))
      })
    }));

    function qz(UU) {
      let {
        children: XU,
        className: zU,
        classNames: cU,
        timeout: QU,
        enterActiveStyle: AU
      } = UU;
      const [FU, oU] = (0, yU.useState)(!1), [DU, YU] = (0, yU.useState)(!1), NU = (0, yU.useRef)(null);
      return (0, yU.useEffect)((() => {
        oU(!0)
      }), []), (0, EU.jsx)(Lz.c, {
        className: zU,
        classNames: cU || zU,
        in: FU,
        timeout: QU,
        nodeRef: NU,
        onEntering: () => {
          YU(!0)
        },
        children: (0, yU.cloneElement)(XU, {
          ref: NU,
          style: DU && AU || void 0
        })
      })
    }
    var Oz = zU(37318);

    function Sz() {
      const UU = (0, uU.i)("health");
      return (0, EU.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, EU.jsx)(Oz.b, {
          placement: "statBars"
        }), (0, EU.jsx)(rz, {
          actualValue: UU.shield,
          maxValue: UU.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, EU.jsx)(rz, {
          actualValue: UU.health,
          maxValue: UU.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function rz(UU) {
      let {
        actualValue: XU,
        maxValue: zU,
        hideAtValue: cU,
        icon: yU,
        className: QU
      } = UU;
      return (0, RU.h)(), null === XU || null === zU || XU === cU || zU === cU ? null : (0, EU.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, EU.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, EU.jsx)("div", {
            className: `BottomScreenStatBar ${QU}`,
            style: {
              transform: `scaleX(${Math.max(XU/zU,0)})`,
              transformOrigin: "left center"
            }
          }), (0, EU.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, EU.jsx)(PU.d, {
              name: yU
            }), ` ${Math.ceil(XU)}/${zU}`]
          })]
        })
      })
    }
    var uz = zU(34859),
      fz = zU(4968),
      iz = zU(1376),
      Hz = zU(3016),
      Mz = zU(1494),
      vz = zU(1349),
      Vz = zU(3813),
      sz = zU(3295),
      nz = zU(2032),
      mz = zU(2205),
      lz = zU(825),
      xz = zU(3869),
      Jz = zU(142),
      jz = zU(344);

    function Kz(UU, XU) {
      let {
        shownName: zU,
        lifeformType: cU
      } = UU;
      return null !== zU ? zU : null !== cU ? XU(`lifeform:${(0,jz.Ie)(cU)}`) : null
    }
    var bz = zU(4031),
      Tz = zU(4007),
      hz = zU(4005),
      Uc = zU(4037),
      Xc = zU(4029),
      zc = zU(4666),
      cc = zU(34933);

    function yc(UU) {
      let {
        config: XU,
        track: zU,
        xp: cU,
        tileState: yU
      } = UU;
      const {
        t: QU
      } = (0, nU.I)(), FU = (0, Xc.i)(XU, cU), oU = (0, Xc.m)(XU, cU), DU = FU < XU.tierCount ? FU + 1 : null, YU = Math.min(4, XU.tierCount), NU = Math.max(1, Math.min(FU - 1, XU.tierCount - YU + 1)), IU = null !== DU ? DU - NU : FU - NU, pU = null !== DU && DU > NU ? DU - NU : IU + 1, aU = oU.xpForNextTier - oU.xpIntoTier, tU = oU.xpForNextTier > 0 ? oU.xpIntoTier / oU.xpForNextTier : 1, gU = {
        "--road-cols": YU,
        "--road-fill": IU,
        "--road-chip": pU
      }, kU = [];
      for (let AU = 0; AU < YU; AU++) kU.push(NU + AU);
      return (0, EU.jsxs)("div", {
        className: "SeasonPassRoad",
        style: gU,
        children: [(0, EU.jsxs)("div", {
          className: "SeasonPassRoadColumns",
          children: [(0, EU.jsx)("div", {
            className: "SeasonPassRoadLine"
          }), (0, EU.jsx)("div", {
            className: "SeasonPassRoadLine SeasonPassRoadLineFill"
          }), kU.map((UU => (0, EU.jsxs)("div", {
            className: AU()("SeasonPassRoadColumn", {
              SeasonPassRoadColumnEarning: UU === DU,
              SeasonPassRoadColumnAhead: null !== DU && UU > DU
            }),
            children: [(0, EU.jsx)(zc.e, {
              reward: (0, Xc.f)(XU, {
                tier: UU,
                track: zU
              }),
              tileState: yU(UU),
              track: zU,
              size: "small"
            }), (0, EU.jsx)(cc.c, {
              tier: UU,
              state: UU === DU ? "earning" : UU <= FU ? "reached" : "locked",
              progress: tU,
              size: "small"
            })]
          }, UU))), null !== DU && (0, EU.jsx)("span", {
            className: "SeasonPassRoadChip SmallTextBold",
            children: QU("seasonPass:xpToGo", {
              xp: aU
            })
          })]
        }), NU + YU - 1 < XU.tierCount && (0, EU.jsxs)("span", {
          className: "SeasonPassRoadEnd SmallTextBold",
          children: ["\u2026 ", XU.tierCount]
        })]
      })
    }
    const Qc = (0, yU.memo)((function() {
      const {
        t: UU
      } = (0, nU.I)(), XU = (0, Uc.b)(), zU = (0, hz.e)("listen");
      if (null === XU || XU.seasonPassRoomXp <= 0) return null;
      const cU = "loaded" === zU.status ? zU.view : null,
        yU = cU ? cU.config : (0, bz.d)(Date.now()),
        QU = hz.c.getProvisionalXp(XU),
        AU = XU.seasonPassLifeXp > 0 ? UU("seasonPass:xpThisLife", {
          xp: XU.seasonPassLifeXp
        }) : UU("seasonPass:xpThisGame", {
          xp: XU.seasonPassRoomXp
        });
      return (0, EU.jsxs)("div", {
        className: "SeasonPassRespawnBanner",
        children: [(0, EU.jsx)("div", {
          className: "SeasonPassRespawnBannerGained FullyFancyText",
          children: AU
        }), yU && null !== QU && (0, EU.jsx)(Ac, {
          config: yU,
          view: cU,
          xp: QU
        }), XU.seasonPassXpCapped && (0, EU.jsx)("div", {
          className: "SeasonPassRespawnBannerCapped SmallTextBold",
          children: UU("seasonPass:dailyCapReached")
        })]
      })
    }));

    function Ac(UU) {
      var XU;
      let {
        config: zU,
        view: cU,
        xp: yU
      } = UU;
      const QU = null !== cU && void 0 !== cU && cU.state.hasSuperRank ? "super" : "free",
        AU = cU ? {
          ...cU.state,
          xp: Math.max(yU, cU.state.xp)
        } : null;
      return (0, EU.jsx)(yc, {
        config: zU,
        track: QU,
        xp: null !== (XU = null === AU || void 0 === AU ? void 0 : AU.xp) && void 0 !== XU ? XU : yU,
        tileState: UU => AU ? (0, Tz.g)(zU, AU, {
          tier: UU,
          track: QU
        }) : "locked"
      })
    }
    var Fc = zU(3822),
      oc = zU(3830),
      Dc = zU(3251);
    const Ec = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      Yc = (0, yU.memo)((function() {
        var UU, XU;
        const zU = (0, RU.e)(),
          cU = (0, aU.useNavigatePreserveSearch)(),
          {
            t: QU
          } = (0, nU.I)(),
          {
            loadingOverlayVisible: FU
          } = (0, rU.q)(["loadingOverlayVisible"]),
          DU = (0, iU.F)(),
          [YU, NU] = (0, yU.useState)(!1),
          [IU, tU] = (0, yU.useState)(!0),
          [gU, kU] = (0, yU.useState)(null),
          GU = (0, ez.c)(),
          ZU = (0, BU.f)("respawnButtonText"),
          WU = (0, BU.f)("usePlayAgainButton"),
          dU = (0, BU.f)("useRespawnButton"),
          {
            gameNameWithVariation: LU
          } = (0, uU.i)("connectedGame"),
          CU = (0, yU.useRef)(nz.d.get("secsToRespawn")),
          wU = (0, yU.useRef)(pU.gameBridge.latest("localPlayerAlive")),
          qU = (0, yU.useRef)(nz.d.get("secsToRespawn")),
          OU = (0, yU.useRef)(nz.d.get("autoRespawn")),
          SU = (0, yU.useRef)(null),
          fU = (0, yU.useRef)(0),
          HU = (0, yU.useRef)(0),
          [MU, vU] = (0, yU.useState)(!1),
          VU = (0, yU.useRef)(null),
          sU = (0, yU.useRef)(null),
          mU = (0, yU.useRef)(null);
        (0, BU.e)("secsToRespawn", (UU => {
          console.log("Received new secsToRespawn with", UU, "and current canRespawn value of ", OU.current), qU.current = UU, jU()
        })), (0, BU.e)("autoRespawn", (UU => {
          console.log("Received autorespawn", UU, "current canRespawn value of ", CU.current), OU.current = UU, jU()
        }));
        const lU = UU => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", UU), UU || fU.current++, wU.current = UU, jU()
        };
        (0, uU.b)("localPlayerAliveSet", lU), (0, oU.f)(sz.p, (UU => {
          "connected" === UU && !wU.current && OU.current && CU.current <= 0 && (HU.current = 0, KU())
        })), (0, yU.useEffect)((() => {
          const UU = pU.gameBridge.latest("localPlayerAlive");
          UU === wU.current ? (console.log("Updating respawn component from initial mount"), jU()) : lU(UU)
        }), []), (0, yU.useEffect)((() => {
          if (YU) {
            vU(!1);
            const UU = setTimeout((() => {
              vU(!0)
            }), 600);
            return () => {
              clearTimeout(UU)
            }
          }
          return () => {}
        }), [YU]);
        (0, uU.b)("kill", (UU => {
          let {
            killer: XU,
            victim: zU,
            withItem: cU
          } = UU;
          if (!zU.local) return;
          const yU = ((UU, XU) => {
            if (UU.local) {
              const UU = Ec[XU];
              return UU ? QU(UU) : null
            }
            const zU = Kz(UU, QU);
            return zU ? QU("respawnPage:killedBy", {
              name: zU
            }) : null
          })(XU, cU);
          yU && kU({
            text: yU,
            deathCount: wU.current ? fU.current + 1 : fU.current
          })
        }));
        const xU = () => {
            YU && OU.current && wU.current && MU && NU(!1)
          },
          JU = YU && OU.current && wU.current && MU && !FU;
        (0, oU.f)("usedKeyboard", (() => {
          xU()
        })), (0, oc.b)("respawn", JU, xU);
        const jU = () => {
            tU(qU.current >= 3 || !OU.current), wU.current ? (clearInterval(SU.current), SU.current = null, OU.current ? GU() : NU(!1)) : (NU(!0), CU.current = qU.current, GU(), console.log("Running respawn stats updated", OU.current, CU.current), OU.current && CU.current <= 0 && KU(), clearInterval(SU.current), CU.current > 0 && (SU.current = setInterval((() => {
              CU.current = Math.max(CU.current - 1, 0), GU(), CU.current <= 0 && (clearInterval(SU.current), SU.current = null, nz.d.get("autoRespawn") && KU())
            }), 1e3)))
          },
          KU = () => {
            if (Date.now() - HU.current > 1e3) {
              const UU = () => {
                pU.gameBridge.send("respawn", null), HU.current = Date.now()
              };
              nz.d.get("autoRespawn") ? UU() : (0, vz.bb)((() => {
                UU()
              }), "video_respawn")
            }
          },
          bU = (0, yU.useMemo)((() => {
            var UU;
            return null === (UU = (0, lz.m)(LU)) || void 0 === UU ? void 0 : UU.otherGameLinksOnRespawnPage
          }), [LU]),
          TU = 0 === CU.current,
          hU = (null === gU || void 0 === gU ? void 0 : gU.deathCount) === fU.current ? gU.text : null,
          UX = YU && IU && !FU,
          XX = DU && JU && null !== (UU = null === (XU = (0, eU.e)()) || void 0 === XU ? void 0 : XU.getBoundButton("menuConfirm")) && void 0 !== UU ? UU : null,
          zX = UU => TU ? UU : QU("respawnPage:actionInSeconds", {
            action: UU,
            seconds: CU.current
          });
        return (0, EU.jsx)(uz.e, {
          showing: YU,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, EU.jsx)(Vz.b, {
            show: YU,
            "data-holds-camera-keeper": "",
            children: (0, EU.jsxs)(fz.c, {
              close: () => {
                NU(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: OU.current || FU ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, Jz.is99NightsCrazyGamesBundle)() && (0, EU.jsx)(Mz.e, {
                onClick: mz.f,
                children: QU("homePage:backToGames")
              }), (0, EU.jsxs)("div", {
                className: "RespawnContainer",
                onClick: xU,
                children: [(0, EU.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, EU.jsx)("div", {
                    ref: sU,
                    className: "RespawnSideSquareBannerDiv",
                    children: zU[0] > 925 && (0, Dc.l)() && (0, EU.jsx)(Hz.b, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: sU
                      },
                      showing: UX,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, EU.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, EU.jsxs)("div", {
                      className: AU()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: DU
                      }),
                      children: [OU.current && (0, EU.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, EU.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, EU.jsx)(PU.d, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), QU("respawnPage:youDied")]
                        }), (0, EU.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === XX && (wU.current ? QU("respawnPage:pressAnywhereToContinue") : TU ? QU("respawnPage:respawning") : zX(QU("general:respawn"))), null !== XX && (0, EU.jsx)(Fc.e, {
                            text: QU("controller:screensPressToContinue", {
                              button: Fc.f
                            }),
                            glyph: XX,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), hU && (0, EU.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: hU
                        })]
                      }), !OU.current && (0, EU.jsxs)(EU.Fragment, {
                        children: [(0, EU.jsxs)("div", {
                          className: AU()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !bU
                          }),
                          children: [WU && (0, EU.jsx)(Mz.l, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, vz.bb)((() => {
                                (0, rU.n)("inGameReplay");
                                const UU = (0, iz.b)(LU);
                                cU(UU)
                              }), "video_start")
                            },
                            disabled: !TU || !MU,
                            touchPressOn: "pointerup",
                            children: zX(QU("respawnPage:playAgain"))
                          }), dU && (0, EU.jsx)(Mz.f, {
                            className: "RespawnPageButton",
                            onClick: KU,
                            padDefaultFocus: !WU,
                            padBack: "sessionBasedGame:stayInLobby" === ZU,
                            disabled: !TU || !MU,
                            touchPressOn: "pointerup",
                            children: zX(QU(ZU))
                          }), !(0, Jz.is99NightsCrazyGamesBundle)() && (0, EU.jsx)(Mz.G, {
                            className: "RespawnPageButton",
                            onClick: mz.f,
                            disabled: !TU || !MU,
                            touchPressOn: "pointerup",
                            children: zX(QU("respawnPage:exitGame"))
                          })]
                        }), bU && (0, EU.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, EU.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: QU("respawnPage:orTry")
                          }), (0, EU.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: bU.map((UU => (0, EU.jsx)(xz.g, {
                              source: {
                                type: "game",
                                gameNameWithVariation: UU
                              },
                              disabled: !TU || !MU,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, rU.n)("inGameReplay");
                                const XU = (0, iz.b)(UU);
                                cU(XU)
                              }
                            }, UU)))
                          })]
                        })]
                      }), YU && (0, EU.jsx)(Qc, {})]
                    })
                  }), (0, EU.jsx)("div", {
                    ref: mU,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, EU.jsx)("div", {
                  ref: VU,
                  className: "RespawnBottom",
                  children: (0, Dc.l)() && (0, EU.jsx)(Hz.b, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: VU
                    },
                    showing: UX,
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
    var Nc = zU(37342);
    const Ic = [{
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
      pc = [{
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
      ac = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      tc = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      gc = (0, yU.memo)((function() {
        const UU = (0, yU.useRef)(null),
          XU = (0, yU.useRef)(null);

        function zU(zU) {
          var cU;
          let {
            yX: yU,
            screenPos: QU
          } = zU;
          const AU = UU.current;
          null === (cU = XU.current) || void 0 === cU || cU.cancel(), AU.classList.remove("HitmarkerCrit"), QU ? (AU.style.left = `${QU.x}%`, AU.style.top = `${QU.y}%`) : (AU.style.left = "50%", AU.style.top = "50%"), AU.style.rotate = 16 * (Math.random() - .5) + "deg", yU && AU.classList.add("HitmarkerCrit");
          const FU = AU.animate(yU ? pc : Ic, yU ? tc : ac);
          XU.current = FU, FU.onfinish = () => {
            AU.classList.remove("HitmarkerCrit")
          }
        }
        return (0, oU.f)("localGunHitmarker", (UU => {
          let {
            yX: XU
          } = UU;
          zU({
            yX: XU
          })
        })), (0, oU.f)("yourAttackHit", (UU => {
          let {
            yX: XU,
            screenPos: cU
          } = UU;
          zU({
            yX: XU,
            screenPos: rU.e.get("isTouchScreen") ? cU : void 0
          })
        })), (0, oU.f)("sendHitmarker", (UU => {
          let {
            yX: XU,
            screenPos: cU
          } = UU;
          zU({
            yX: XU,
            screenPos: cU
          })
        })), (0, EU.jsxs)("div", {
          ref: UU,
          className: "Hitmarker",
          children: [(0, EU.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, EU.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, EU.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, EU.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function kc() {
      const UU = (0, yU.useRef)(!0);
      return (0, oU.f)("localBlockMined", (() => {
        jU.e.play("blockMined")
      })), (0, oU.f)("yourAttackHit", (() => {
        jU.e.play("hitLanded")
      })), (0, oU.f)("localGunHitmarker", (() => {
        jU.e.play("hitLanded")
      })), (0, oU.f)("damagedByOtherPlayer", (() => {
        jU.e.play("damageTaken")
      })), (0, uU.b)("localPlayerAliveSet", (XU => {
        !XU && UU.current && jU.e.play("death"), UU.current = XU
      })), null
    }
    var Gc = zU(1993),
      Bc = zU(37361),
      Zc = zU.n(Bc),
      Rc = zU(2101),
      Pc = zU(2091),
      Wc = zU(3660),
      dc = zU(34884);
    const Lc = jz.ue ? 7e7 : 7e3,
      ec = Zc()("#ffffff").alpha(.5).string();

    function Cc(UU) {
      const XU = (0, Wc.c)(UU);
      return void 0 !== XU && "Gun" === (0, dc.itemTypeOf)(XU)
    }

    function wc(UU) {
      if (!UU) return console.error(`Killfeed colour was ${UU}`), ec;
      try {
        return Zc()(UU).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${UU} is not a colour`), ec
      }
    }
    const qc = (0, yU.memo)((function() {
      const {
        t: UU
      } = (0, nU.I)(), XU = (0, yU.useRef)([]), zU = (0, ez.c)();
      return (0, uU.b)("kill", (function(cU) {
        var yU, QU;
        let {
          killer: AU,
          victim: FU,
          withItem: oU,
          killstreak: DU
        } = cU;
        const EU = XU.current;
        if (EU.length >= 3) {
          const UU = EU.shift();
          clearTimeout(UU.timeout)
        }
        const YU = pU.gameBridge.latest("hiddenPlayerNames"),
          NU = {
            deadName: Kz(FU, UU),
            killerName: Kz(AU, UU),
            isFriend: {
              killer: (0, Rc.i)(AU.realName, YU),
              dead: (0, Rc.i)(FU.realName, YU)
            },
            withItem: oU,
            wasHeadshot: !1,
            killstreak: DU,
            timeout: setTimeout((() => {
              EU.shift(), zU()
            }), Lc),
            reactId: `${null!==(yU=AU.id)&&void 0!==yU?yU:AU.shownName}|${null!==(QU=FU.id)&&void 0!==QU?QU:FU.shownName}|${Date.now()}`,
            killerBackground: wc(AU.colour),
            deadBackground: wc(FU.colour)
          };
        EU.push(NU), zU()
      })), (0, yU.useEffect)((() => {
        const UU = XU.current;
        return () => {
          for (; UU.length > 0;) {
            const {
              timeout: XU
            } = UU.pop();
            clearTimeout(XU)
          }
        }
      }), []), (0, EU.jsx)("div", {
        className: "Killfeed",
        children: XU.current.map((UU => {
          let {
            deadName: XU,
            killerName: zU,
            withItem: cU,
            wasHeadshot: yU,
            killstreak: QU,
            killerBackground: AU,
            deadBackground: FU,
            reactId: oU,
            isFriend: DU
          } = UU;
          return (0, EU.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${AU} calc(100% - 10rem), ${FU} 100%)`
            },
            children: [QU >= 2 ? (0, EU.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, jz.Q)(QU)
            }) : null, (0, EU.jsx)("div", {
              className: "KillfeedKillerName",
              children: zU
            }), DU.killer && (0, EU.jsx)(Pc.d, {}), (0, EU.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: Cc(cU) ? "7.5vmin" : "5vmin"
              },
              children: (0, EU.jsx)(Gc.c, {
                itemName: cU,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), yU ? (0, EU.jsx)(PU.d, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, EU.jsx)("div", {
              className: "KillfeedDeadName",
              children: XU
            }), DU.dead && (0, EU.jsx)(Pc.d, {})]
          }, oU)
        }))
      })
    }));
    var Oc = zU(37405),
      Sc = zU(1138),
      rc = zU.n(Sc),
      uc = zU(320),
      fc = zU(3791),
      ic = zU(37414),
      Hc = zU(1322);
    const Mc = {},
      vc = (0, yU.memo)((function() {
        const UU = (0, yU.useRef)({}),
          [, XU] = (0, yU.useReducer)((UU => UU + 1), 0);
        (0, oU.f)("setDirectionArrow", (zU => {
          let {
            id: cU,
            position: yU,
            style: QU,
            text: AU,
            dc: FU
          } = zU;
          const oU = UU.current,
            DU = QU || Mc,
            EU = AU,
            YU = oU[cU];
          if (!YU) return oU[cU] = {
            position: yU,
            style: DU,
            text: EU,
            shouldShowDistance: FU,
            HV: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void XU();
          const NU = !rc()(YU.style, DU) || !rc()(YU.text, EU) || YU.shouldShowDistance !== FU;
          YU.position = yU, YU.style = DU, YU.text = EU, YU.shouldShowDistance = FU, NU && XU()
        })), (0, oU.f)("clearDirectionArrow", (zU => {
          let {
            id: cU
          } = zU;
          const yU = UU.current;
          if (null === cU)
            for (const UU in yU) delete yU[UU];
          else delete yU[cU];
          XU()
        })), (0, yU.useEffect)((() => {
          const XU = UU.current,
            zU = (0, Hc.t)((() => {
              ! function(UU) {
                const XU = pU.gameBridge.lookup("localPos", null),
                  zU = fc.d - Vc,
                  cU = (0, fc.l)() - Vc;
                for (const yU in UU) {
                  const QU = UU[yU];
                  if (!QU.HV) continue;
                  const AU = pU.gameBridge.lookup("screenPos", QU.position),
                    FU = AU.x - 50,
                    oU = AU.y - 50;
                  AU.x === QU.lastScreenX && AU.y === QU.lastScreenY || (QU.lastScreenX = AU.x, QU.lastScreenY = AU.y, QU.HV.style.translate = `${AU.x}vw ${AU.y}vh`, QU.chevronElement && (QU.chevronElement.style.rotate = `${jz.d.fastATan2(oU,FU)}rad`));
                  const DU = Math.abs(FU) < zU && Math.abs(oU) < cU;
                  if (DU !== QU.onScreen && (QU.onScreen = DU, QU.HV.classList.toggle("DirectionArrowOnScreen", DU)), QU.shouldShowDistance && QU.distanceElement) {
                    const UU = QU.position[0] - XU[0],
                      zU = QU.position[1] - XU[1],
                      cU = QU.position[2] - XU[2],
                      yU = Math.round(Math.sqrt(UU * UU + zU * zU + cU * cU));
                    (-1 === QU.lastRenderedDist || (0, ic.b)(yU, QU.lastRenderedDist, QU.lastDistUpdateTime)) && (QU.distanceElement.textContent = `${yU}m`, QU.lastRenderedDist = yU, QU.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(XU)
            }));
          return () => {
            zU();
            for (const UU in XU) delete XU[UU]
          }
        }), []);
        const zU = UU.current;
        return (0, EU.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(zU).map((UU => {
            var XU;
            let [cU, yU] = UU;
            const QU = null !== (XU = (0, uc.fc)(yU.style)) && void 0 !== XU ? XU : "#ffffff";
            return (0, EU.jsxs)("div", {
              ref: UU => {
                zU[cU] && (zU[cU].HV = UU)
              },
              className: "DirectionArrow",
              style: {
                fontSize: yU.style.fontSize,
                opacity: yU.style.opacity
              },
              children: [(0, EU.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: UU => {
                  zU[cU] && (zU[cU].chevronElement = UU)
                },
                children: [(0, EU.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, EU.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, EU.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, EU.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, EU.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: QU
                    }
                  }), (0, EU.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: QU
                    }
                  })]
                })]
              }), (0, EU.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: QU,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${QU}`
                }
              }), yU.text && (0, EU.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: QU,
                  fontWeight: yU.style.fontWeight,
                  fontStyle: yU.style.fontStyle
                },
                children: (0, EU.jsx)(DU.d, {
                  text: yU.text
                })
              }), yU.shouldShowDistance && (0, EU.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: UU => {
                  zU[cU] && (zU[cU].distanceElement = UU)
                },
                style: {
                  color: QU,
                  fontWeight: yU.style.fontWeight,
                  fontStyle: yU.style.fontStyle
                }
              })]
            }, cU)
          }))
        })
      })),
      Vc = .5;
    const sc = (0, yU.memo)((function(UU) {
        let {
          isTouchScreen: XU
        } = UU;
        return (0, EU.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, EU.jsx)(xc, {}), XU && (0, EU.jsx)(Nz, {})]
        })
      })),
      nc = {
        readyForNext: 0,
        running: 1
      },
      mc = 50;

    function lc(UU) {
      console.assert(UU.state.current === nc.readyForNext);
      const XU = UU.queue.current,
        zU = UU.foreground.current;
      if (XU.length > 0 && zU) {
        const {
          toFraction: cU,
          toDuration: yU
        } = XU.shift();
        UU.state.current = nc.running, zU.style.transition = `transform ${Math.max(yU-mc,0)}ms linear`, zU.classList.remove("Complete"), UU.timeout.current = setTimeout((() => {
          zU.style.transform = `scaleX(${cU})`, UU.timeout.current = setTimeout((() => {
            1 === cU && zU.classList.add("Complete"), UU.state.current = nc.readyForNext, lc(UU)
          }), Math.max(yU - mc, 0))
        }), mc)
      }
    }

    function xc() {
      const UU = (0, yU.useRef)([]),
        XU = (0, yU.useRef)(nc.readyForNext),
        zU = (0, yU.useRef)(void 0),
        cU = (0, yU.useRef)(null),
        QU = (0, yU.useRef)({
          queue: UU,
          state: XU,
          timeout: zU,
          foreground: cU
        }),
        AU = (0, BU.f)("showProgressBar");
      if ((0, yU.useLayoutEffect)((() => (AU && XU.current === nc.readyForNext && lc(QU.current), () => {
          XU.current = nc.readyForNext, clearTimeout(zU.current), AU && (UU.current.length = 0)
        })), [AU]), (0, oU.f)("progressBarUpdate", (zU => {
          let {
            toFraction: cU,
            toDuration: yU
          } = zU;
          UU.current.push({
            toFraction: cU,
            toDuration: yU
          }), XU.current === nc.readyForNext && lc(QU.current)
        })), !AU) return null;
      return (0, EU.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, EU.jsx)("div", {
          className: "ProgressBarForeground",
          ref: cU,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var Jc = zU(37418),
      jc = zU(2651);
    const Kc = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function bc(UU) {
      let {
        classes: XU,
        gone: zU
      } = UU;
      const cU = document.documentElement;
      cU.classList.remove(...XU);
      for (const yU of zU) yU.style.display = "block";
      return () => {
        cU.classList.add(...XU);
        for (const UU of zU) UU.style.display = ""
      }
    }

    function Tc(UU) {
      const {
        isTouchScreen: XU
      } = (0, rU.q)(["isTouchScreen"]);
      (0, yU.useLayoutEffect)((() => {
        if (!XU) return;
        const zU = UU.current,
          cU = document.querySelector(`.${Jc.h}`),
          yU = UU => {
            const XU = () => {
              const XU = UU.querySelector(jc.k),
                cU = function(UU) {
                  const XU = document.documentElement;
                  return {
                    classes: QX.A.map(DX.I).filter((UU => XU.classList.contains(UU))),
                    gone: [...UU.querySelectorAll(`.TopRightTrayToggle.${jc.m}`)]
                  }
                }(UU);
              XU && function(UU, XU) {
                (0, jc.E)(UU, XU.classes.length > 0 || XU.gone.length > 0, (() => bc(XU)))
              }(XU, cU);
              const yU = `${Math.floor(function(UU,XU,zU){const cU=document.documentElement,yU=cU.classList.contains((0,DX.P)("menu")),QU=cU.style.getPropertyValue((0,DX.V)("menu"));if(!yU&&""===QU)return UU.getBoundingClientRect().left;const AU=XU?(0,jc.q)(XU):()=>{},FU=bc(zU);cU.classList.remove((0,DX.P)("menu")),cU.style.removeProperty((0,DX.V)("menu"));const oU=UU.getBoundingClientRect().left;return FU(),AU(),yU&&cU.classList.add((0,DX.P)("menu")),""!==QU&&cU.style.setProperty((0,DX.V)("menu"),QU),oU}(UU,XU,cU)-zU.getBoundingClientRect().left-4)}px`;
              zU.style.getPropertyValue("--InGameHeaderMaxWidth") !== yU && zU.style.setProperty("--InGameHeaderMaxWidth", yU)
            };
            XU();
            const yU = new ResizeObserver(XU);
            yU.observe(UU), yU.observe(cU), window.addEventListener("resize", XU);
            const QU = () => Kc.map((UU => document.documentElement.style.getPropertyValue(UU))).join();
            let AU = QU();
            const FU = new MutationObserver((() => {
              const UU = QU();
              UU !== AU && (AU = UU, XU())
            }));
            FU.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const oU = (0, IU.n)(DX.h, XU),
              DU = new MutationObserver(XU);
            return DU.observe(UU, {
              childList: !0,
              subtree: !0
            }), () => {
              yU.disconnect(), FU.disconnect(), DU.disconnect(), oU(), window.removeEventListener("resize", XU);
              const zU = UU.querySelector(jc.k);
              zU && (0, jc.q)(zU)
            }
          },
          QU = () => cU.querySelector(".TopRightIconsContainer"),
          AU = QU();
        let FU;
        if (AU) FU = yU(AU);
        else {
          const UU = new MutationObserver((() => {
            const XU = QU();
            XU && (UU.disconnect(), FU = yU(XU))
          }));
          UU.observe(cU, {
            childList: !0,
            subtree: !0
          }), FU = () => {
            UU.disconnect()
          }
        }
        return () => {
          FU(), zU.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [XU, UU])
    }
    var hc = zU(4057),
      Uy = zU(4052),
      Xy = zU(1680),
      zy = zU(1545),
      cy = zU(1685),
      yy = zU(1800),
      Qy = zU(1936),
      Ay = zU(1131),
      Fy = zU(4656),
      oy = zU(1414);
    const Dy = 2e4,
      Ey = 6e5,
      Yy = new Set;

    function Ny() {
      const {
        gameEntrySource: UU,
        loadingOverlayVisible: XU
      } = (0, rU.q)(["gameEntrySource", "loadingOverlayVisible"]), zU = (0, uU.e)("connectedGame", (UU => (0, Fy.f)(UU) ? UU.lobbyName : null)), cU = (0, uU.i)("localPlayerAlive"), QU = (0, uU.e)("players", (UU => null !== UU.localId && void 0 !== UU.byId[UU.localId])), [AU, FU] = (0, yU.useState)(null);
      return !XU && cU && QU && null !== zU && AU !== zU && FU(zU), (0, yU.useEffect)((() => {
        if (!(0, Fy.i)(UU) || null === AU || AU !== zU || Yy.has(AU)) return;
        const XU = setTimeout((() => {
          Yy.add(AU), async function(UU) {
            const XU = await Ay.userContextManager.getCurrentUserContext();
            let zU;
            try {
              zU = (await zy.c.getWorldOwnerFriendOffer(XU)).owner
            } catch (yU) {
              return void console.warn("Couldn't ask who owns this world", yU)
            }
            if (!zU || (0, Fy.n)(zU.name, Date.now())) return;
            const cU = zU;
            ! function(UU, XU) {
              const zU = Date.now() + Ey;
              let cU = Date.now(),
                yU = 0;
              const QU = () => {
                const AU = Date.now(),
                  FU = pU.gameBridge.latest("connectedGame");
                FU.lobbyName !== UU || AU > zU || (null === FU.websocketUrl ? cU = 1 / 0 : cU === 1 / 0 && !rU.e.get("loadingOverlayVisible") && pU.gameBridge.latest("localPlayerAlive") && (cU = AU + Dy), yU = AU < cU || !pU.gameBridge.latest("localPlayerAlive") || rU.e.get("isUiHidden") || rU.e.get("isUiHiddenByCamera") || (0, yy.isTypingInInput)() || rU.e.get("loadingOverlayVisible") || (0, Xy.p)() || (0, hc.d)() || (0, oy.l)() ? 0 : yU + 1, yU >= 2 ? XU() : setTimeout(QU, 500))
              };
              QU()
            }(UU, (() => {
              (0, Fy.d)(cy.d.getSocialState().friends, cU.name) || ((0, Fy.k)(cU.name, Date.now()), Qy.f.showWorldOwnerOffer(cU), (0, Uz.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(AU).catch((UU => {
            console.error("Failed to offer the world's owner as a friend", UU)
          }))
        }), Dy);
        return () => {
          clearTimeout(XU)
        }
      }), [UU, AU, zU]), null
    }
    var Iy = zU(1986);
    const py = (0, yU.memo)((function(UU) {
        let {
          durationMs: XU,
          endsAtMs: zU
        } = UU;
        const [, cU] = (0, yU.useReducer)((UU => UU + 1), 0), QU = null === zU ? XU : Math.max(zU - Date.now(), 0);
        return (0, yU.useEffect)((() => {
          if (null === zU || QU <= 0) return;
          const UU = setTimeout(cU, QU - 1e3 * (Math.ceil(QU / 1e3) - 1));
          return () => {
            clearTimeout(UU)
          }
        })), (0, EU.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, jz.fb)(QU)
        })
      })),
      ay = (0, yU.memo)((function() {
        const UU = (0, uU.i)("localEffects");
        return (0, EU.jsxs)("div", {
          className: "EffectInfosWrapper",
          children: [Object.entries(UU).map((UU => {
            let [XU, {
              icon: zU,
              displayName: cU,
              durationMs: yU,
              endsAtMs: QU,
              level: AU
            }] = UU;
            return (0, EU.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, EU.jsx)(Iy.c, {
                icon: zU,
                className: "EffectInfoIcon"
              }), (0, EU.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== yU ? "0" : "1rem"
                },
                children: [(0, EU.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, EU.jsx)(DU.d, {
                    text: null !== cU && void 0 !== cU ? cU : XU,
                    className: "EffectInfoName SmallTextBold"
                  }), AU > 1 && (0, EU.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, jz.Q)(AU)
                  })]
                }), null !== yU && (0, EU.jsx)(py, {
                  durationMs: yU,
                  endsAtMs: QU
                })]
              })]
            }, XU)
          })), (0, EU.jsx)(Oz.b, {
            placement: "bottomLeft"
          })]
        })
      }));
    var ty = zU(37427),
      gy = zU(37629),
      ky = zU(212),
      Gy = zU(3036);
    var By = zU(3242);

    function Zy(UU, XU) {
      (0, yU.useLayoutEffect)((() => {
        let XU, zU;
        const cU = requestAnimationFrame((() => {
          zU = setTimeout((() => {
            zU = void 0;
            const cU = UU();
            XU = "function" === typeof cU ? cU : void 0
          }), 0)
        }));
        return () => {
          var UU;
          cancelAnimationFrame(cU), clearTimeout(zU), null === (UU = XU) || void 0 === UU || UU()
        }
      }), XU)
    }
    const Ry = [5, 5, 5],
      Py = [7, 4, 4, 4];

    function Wy(UU) {
      return UU.reduce(((UU, XU) => UU + XU), 0)
    }

    function dy(UU, XU, zU, cU, yU) {
      const QU = UU.getContext("2d");
      if (!QU) return null;
      const AU = XU.color,
        FU = `${XU.fontWeight} ${yU}px ${XU.fontFamily}`,
        oU = () => {
          UU.width = zU, UU.height = cU, QU.fillStyle = AU, QU.textAlign = "center", QU.textBaseline = "middle", QU.font = FU
        };
      return oU(), {
        ctx: QU,
        reset: oU
      }
    }
    const Ly = (0, yU.memo)((function(UU) {
      let {
        show: XU,
        asText: zU
      } = UU;
      const cU = (0, yU.useRef)(null),
        QU = (0, yU.useRef)(null),
        AU = (0, yU.useRef)(null),
        FU = (0, yU.useRef)(null),
        oU = (0, tU.k)();
      return (0, yU.useEffect)((() => oU.whenShown((() => {
        let UU = 0,
          XU = 0,
          zU = performance.now(),
          cU = 0;
        const yU = (0, Hc.t)((() => {
          var yU, QU, oU;
          UU++, XU++;
          const DU = performance.now();
          if (DU - zU < 1e3) return;
          const EU = Math.round(UU / (DU - zU) * 1e3);
          if (AU.current = EU, null === (yU = FU.current) || void 0 === yU || yU.call(FU, EU), UU = 0, zU = DU, EU >= 55) return void(cU = 0);
          if (cU += 1, cU < 15) return;
          const YU = null !== (QU = cz.k.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== QU ? QU : 0,
            [NU, aU] = nz.d.get("minChunkAddDist");
          if (function(UU, XU) {
              const zU = pU.gameBridge.lookup("nG", null);
              return null !== zU && (zU.horizontal > UU || zU.vertical > XU)
            }(NU, aU) && (null !== (oU = cz.k.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== oU ? oU : 0) + 432e5 < Date.now() && YU < 3) {
            cz.k.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            zz.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((UU => {
              "notificationTornDown" !== UU && (UU ? (pU.gameBridge.send("setChunkAddDistance", {
                horizontal: NU,
                vertical: aU
              }), cz.k.setItem("chunkHorizAddDist", NU), cz.k.setItem("chunkVertAddDist", aU), IU.k.UY("updatedChunkLoadDist"), cz.k.setItem("decreaseLoadDistPromptDeniedCount", 0)) : cz.k.setItem("decreaseLoadDistPromptDeniedCount", YU + 1))
            }))
          }
        }));
        let QU = performance.now();
        XU = 0;
        let oU = null,
          DU = !document.hidden,
          EU = !1;

        function YU() {
          const UU = performance.now() - QU,
            zU = 1e3 * XU / UU;
          DU && !EU && (null === oU && (oU = zU), Gy.d.setFps(zU, oU)), XU = 0, QU = performance.now()
        }
        let NU = setInterval(YU, By.c);

        function aU() {
          XU = 0, QU = performance.now(), clearInterval(NU), NU = setInterval(YU, By.c)
        }

        function tU() {
          const UU = DU;
          DU = !document.hidden, !UU && DU && aU()
        }
        document.addEventListener("visibilitychange", tU);
        const gU = (0, IU.n)(sz.p, (UU => {
          const XU = EU;
          EU = (0, sz.q)(UU), XU && !EU && aU()
        }));
        return () => {
          yU(), document.removeEventListener("visibilitychange", tU), gU(), clearInterval(NU)
        }
      }))), [oU]), Zy((() => {
        var UU;
        if (zU) {
          const UU = document.createTextNode("");
          QU.current.appendChild(UU);
          const XU = function(UU) {
            return XU => {
              const zU = XU.toString();
              UU.data !== zU && (UU.data = zU)
            }
          }(UU);
          return FU.current = XU, null !== AU.current && XU(AU.current), () => {
            UU.remove(), FU.current = null
          }
        }
        if (!XU || FU.current) return;
        const yU = cU.current,
          oU = window.getComputedStyle(yU.parentElement),
          DU = null !== (UU = window.devicePixelRatio) && void 0 !== UU ? UU : 1,
          EU = parseFloat(oU.fontSize) * DU,
          YU = Math.round(3 * EU),
          NU = Math.round(EU),
          IU = dy(yU, oU, YU, NU, EU);
        if (!IU) return;
        const {
          ctx: pU,
          reset: aU
        } = IU, tU = UU => {
          aU(), pU.fillText(UU.toString(), yU.width / 2, yU.height / 2)
        };
        FU.current = tU, null !== AU.current && tU(AU.current)
      }), [XU, zU]), (0, EU.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: XU ? "flex" : "none"
        },
        children: [(0, EU.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), zU && (0, EU.jsx)("span", {
          className: "FpsText",
          ref: QU
        }), !zU && (0, EU.jsx)("canvas", {
          className: "FpsCanvas",
          ref: cU,
          width: 48,
          height: 16
        })]
      })
    }));

    function ey(UU) {
      return Math.sign(UU) * Math.round(100 * Math.abs(UU))
    }

    function Cy(UU) {
      let {
        getCoordinates: XU,
        showChunkCoords: zU,
        columns: cU
      } = UU;
      const QU = (0, yU.useRef)(null);
      return Zy((() => {
        var UU;
        const yU = QU.current,
          AU = window.getComputedStyle(yU.parentElement),
          FU = null !== (UU = window.devicePixelRatio) && void 0 !== UU ? UU : 1,
          oU = parseFloat(AU.fontSize) * FU,
          DU = Math.round(oU * Wy(cU)),
          EU = Math.round(oU),
          YU = dy(yU, AU, DU, EU, oU);
        if (!YU) return;
        const {
          ctx: NU,
          reset: IU
        } = YU;
        let aU = !0,
          tU = 0,
          gU = 0,
          kU = 0,
          GU = 0,
          BU = 0,
          ZU = 0;
        const RU = () => {
          aU = !0
        };
        document.fonts.load(NU.font).then(RU, RU);
        const PU = () => {
          IU(), RU()
        };
        yU.addEventListener("contextrestored", PU);
        let WU = performance.now();
        const dU = (0, Hc.y)((() => {
          var UU, QU, AU, FU, DU, EU;
          const YU = performance.now();
          YU - WU >= 1e3 && (WU = YU, IU(), RU());
          const [PU, dU, LU] = XU(), eU = ey(PU), CU = ey(dU), wU = ey(LU);
          let qU = null;
          if (zU) {
            const UU = pU.gameBridge.lookup("localPos", null);
            qU = (0, mU.gb)(UU[0], UU[1], UU[2])
          }
          const OU = null !== (UU = null === (QU = qU) || void 0 === QU ? void 0 : QU[0]) && void 0 !== UU ? UU : 0,
            SU = null !== (AU = null === (FU = qU) || void 0 === FU ? void 0 : FU[1]) && void 0 !== AU ? AU : 0,
            rU = null !== (DU = null === (EU = qU) || void 0 === EU ? void 0 : EU[2]) && void 0 !== DU ? DU : 0;
          if (!aU && eU === tU && CU === gU && wU === kU && OU === GU && SU === BU && rU === ZU) return;
          aU = !1, tU = eU, gU = CU, kU = wU, GU = OU, BU = SU, ZU = rU;
          const uU = [(eU / 100).toFixed(2), (CU / 100).toFixed(2), (wU / 100).toFixed(2)];
          qU && uU.unshift(`${OU} ${SU} ${rU}`), NU.clearRect(0, 0, yU.width, yU.height);
          const fU = yU.height / 2;
          let iU = 0;
          for (let XU = 0; XU < uU.length; XU++) {
            const UU = oU * cU[XU];
            NU.fillText(uU[XU], iU + UU / 2, fU, UU), iU += UU
          }
        }));
        return () => {
          dU(), yU.removeEventListener("contextrestored", PU)
        }
      }), [XU, zU, cU]), (0, EU.jsx)("div", {
        className: "CoordinateUI",
        children: (0, EU.jsx)("canvas", {
          ref: QU,
          className: "CoordinateCanvas",
          width: 16 * Wy(cU),
          height: 16
        })
      })
    }
    const wy = (0, yU.memo)((function() {
        const UU = (0, yU.useCallback)((() => {
          const UU = pU.gameBridge.lookup("localPos", null);
          return [UU[0], UU[1], UU[2]]
        }), []);
        return (0, EU.jsx)(Cy, {
          getCoordinates: UU,
          showChunkCoords: !1,
          columns: Ry
        })
      })),
      qy = (0, yU.memo)((function() {
        const UU = (0, yU.useCallback)((() => {
          const UU = pU.gameBridge.lookup("localPos", null),
            XU = ky.f.aY;
          let zU = UU[0] % XU,
            cU = UU[1] % XU,
            yU = UU[2] % XU;
          return zU < 0 && (zU += XU), cU < 0 && (cU += XU), yU < 0 && (yU += XU), [zU, cU, yU]
        }), []);
        return (0, EU.jsx)(Cy, {
          getCoordinates: UU,
          showChunkCoords: !0,
          columns: Py
        })
      }));
    var Oy = zU(2125),
      Sy = zU(1384),
      ry = zU(1079),
      uy = zU(1236),
      fy = zU(37478),
      iy = zU(1498),
      Hy = zU(3519);
    const My = (0, yU.memo)((function() {
      const UU = (0, BU.f)("maxAuraLevel");
      return 0 === UU ? null : (0, EU.jsx)(vy, {
        maxLevel: UU
      })
    }));

    function vy(UU) {
      let {
        maxLevel: XU
      } = UU;
      const zU = (0, BU.f)("auraPerLevel"),
        [cU, QU] = (0, yU.useState)((() => {
          var UU;
          return null !== (UU = pU.gameBridge.latest("aura")) && void 0 !== UU ? UU : void 0
        })),
        [AU, FU] = (0, yU.useState)((() => kU(cU))),
        [oU, DU] = (0, yU.useReducer)((UU => UU + 1), 0),
        YU = (0, yU.useRef)(null),
        NU = (0, yU.useRef)([]),
        IU = (0, yU.useRef)({
          width: 0,
          level: 0
        }),
        aU = (0, yU.useRef)(null),
        tU = (0, yU.useRef)(null);

      function gU() {
        if (null !== aU.current) return;
        if (0 === NU.current.length) return;
        const {
          width: UU,
          level: XU
        } = NU.current.shift();
        let zU;
        if (XU !== IU.current.level && XU > IU.current.level !== UU > IU.current.width) {
          const cU = XU > IU.current.level;
          zU = cU ? UU : 100 - UU, YU.current.style.transition = "none", YU.current.style.width = cU ? "0%" : "100%", YU.current.offsetWidth
        } else zU = Math.abs(UU - IU.current.width);
        const cU = 100 * zU / 20;
        YU.current.style.transition = `width ${cU}ms linear`, FU(UU), IU.current = {
          width: UU,
          level: XU
        }, NU.current.length > 0 && (aU.current = setTimeout((() => {
          aU.current = null, gU()
        }), cU))
      }

      function kU(UU) {
        return Math.floor(UU / zU) === XU ? 100 : UU % zU / zU * 100
      }
      return (0, yU.useEffect)((() => () => {
        clearTimeout(aU.current), clearTimeout(tU.current), aU.current = null, tU.current = null
      }), []), (0, uU.b)("aura", (UU => {
        if (tU.current && clearTimeout(tU.current), null === UU) return clearTimeout(aU.current), tU.current = null, aU.current = null, NU.current = [], IU.current = {
          width: 0,
          level: 0
        }, QU(void 0), void FU(0);
        tU.current = setTimeout((() => {
          const XU = Math.floor(cU / zU),
            yU = Math.floor(UU / zU),
            AU = kU(UU);
          UU > cU && fy.e.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), yU > XU ? (yU % 5 === 0 && fy.e.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), DU(), NU.current.push({
            width: 100,
            level: XU
          })) : yU < XU && NU.current.push({
            width: 0,
            level: XU
          }), UU === cU && yU === XU || NU.current.push({
            width: AU,
            level: yU
          }), QU(UU), gU()
        }), 50)
      })), (0, RU.h)(), (0, EU.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, EU.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, EU.jsx)(iy.e, {
            showSignal: oU,
            particleElement: (0, EU.jsx)("img", {
              src: (0, Hy.e)("glint"),
              alt: ""
            })
          }), (0, EU.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, Hy.e)("glint"),
            alt: "aura"
          }), (0, EU.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== cU && void 0 !== cU ? cU : 0) / zU)
          })]
        }), (0, EU.jsx)("div", {
          className: "AuraBar",
          children: (0, EU.jsx)("div", {
            ref: YU,
            className: "AuraBarBackground",
            style: {
              width: `${AU}%`
            }
          })
        })]
      })
    }
    var Vy = zU(2820);

    function sy(UU) {
      UU.timed && (UU.endedAnimation = UU.timed.animation, UU.timed = null)
    }
    const ny = (0, yU.memo)((function() {
      const UU = (0, yU.useRef)(null),
        XU = (0, yU.useRef)(null),
        zU = (0, yU.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, oU.f)("middleScreenBarInitiate", (UU => {
        var cU;
        let {
          duration: yU,
          vc: QU,
          horizBarRemOffset: AU
        } = UU;
        const FU = zU.current;
        sy(FU);
        const oU = XU.current;
        if (!(yU >= 0) || !oU) return;
        null === (cU = FU.endedAnimation) || void 0 === cU || cU.cancel(), FU.endedAnimation = null;
        const DU = oU.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: yU,
          fill: "forwards"
        });
        FU.timed = {
          vc: QU,
          horizBarRemOffset: AU,
          animation: DU
        }
      })), (0, oU.f)("middleScreenBarRemove", (() => {
        sy(zU.current)
      })), (0, yU.useEffect)((() => {
        const cU = zU.current;
        let yU = Number.NaN,
          QU = Number.NaN,
          AU = Number.NaN;
        return (0, Hc.r)((() => {
          var zU, FU, oU, DU;
          const EU = UU.current,
            YU = XU.current;
          if (!EU || !YU) return;
          null !== (zU = cU.timed) && void 0 !== zU && zU.vc && "finished" === cU.timed.animation.playState && sy(cU), null === (FU = cU.endedAnimation) || void 0 === FU || FU.cancel(), cU.endedAnimation = null;
          let NU = cU.timed ? 1 : 0;
          if (!cU.timed) {
            const UU = pU.gameBridge.lookup("momentumFrac", null);
            NU = UU > 0 ? 1 : 0, UU !== AU && (AU = UU, YU.style.transform = `scaleX(${UU})`)
          }
          const IU = null !== (oU = null === (DU = cU.timed) || void 0 === DU ? void 0 : DU.horizBarRemOffset) && void 0 !== oU ? oU : 0;
          IU === yU && NU === QU || (yU = IU, QU = NU, EU.style.transform = `translateX(calc(-50% + ${IU}rem)) scaleX(${NU})`)
        }))
      }), []), (0, EU.jsx)("div", {
        className: "MiddleScreenBar",
        ref: UU,
        children: (0, EU.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: XU
        })
      })
    }));
    var my = zU(5161),
      ly = zU(3007);

    function xy() {
      const {
        t: UU
      } = (0, nU.I)(), XU = (0, oU.j)("serverUpdating", null), zU = (0, ly.c)(250, null !== XU);
      return null === XU || zU - XU > 3e4 ? null : (0, EU.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, EU.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: UU("updateWaiting:updatingIn", {
            countdown: (0, my.p)(XU - zU)
          })
        }), (0, EU.jsx)("div", {
          children: UU("updateWaiting:bringYouBack")
        })]
      })
    }
    var Jy = zU(37653),
      jy = zU(2058),
      Ky = zU(2077),
      by = zU(2053);
    const Ty = [{
        translationKey: "general:interact"
      }],
      hy = (0, yU.memo)((function() {
        const UU = (0, BU.f)("crosshairText"),
          {
            interactPrompt: XU,
            blockText: zU,
            neededTool: cU
          } = (0, uU.i)("crosshairTarget"),
          {
            isTouchScreen: QU
          } = (0, rU.q)(["isTouchScreen"]),
          AU = (0, iU.F)(),
          FU = (0, Ky.d)("alt-fire");
        (0, yU.useEffect)((() => {
          pU.gameBridge.send("setCrosshairInteractPrompt", !QU || AU ? "key" : "touch")
        }), [QU, AU]);
        const [YU, NU] = (0, yU.useReducer)((UU => UU + 1), 0);
        (0, oU.f)("customBindingsChanged", NU);
        var IU;
        if (null !== XU && (AU && null !== FU || !QU && null !== (0, jy.q)("alt-fire"))) return (0, EU.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, EU.jsx)(by.c, {
            noaAction: "alt-fire"
          }), (0, EU.jsx)(DU.d, {
            text: null !== (IU = XU.label) && void 0 !== IU ? IU : Ty
          })]
        });
        let aU = null;
        return null !== zU ? aU = zU : null !== UU && "" !== UU ? aU = UU : null !== cU && (aU = [{
          icon: cU,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), aU ? (0, EU.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, EU.jsx)(DU.d, {
            text: aU
          })
        }) : null
      }));
    var UQ = zU(2827);
    const XQ = (0, yU.memo)((function() {
      var UU;
      const {
        interactPrompt: XU
      } = (0, uU.i)("crosshairTarget"), {
        openInGameMenuName: zU,
        openEverythingMenuName: cU
      } = (0, rU.q)(["openInGameMenuName", "openEverythingMenuName"]), yU = (0, oU.j)("aimingOverlay", "none"), QU = (0, fU.m)(), AU = (0, UQ.e)();
      return null === XU || null !== zU || null !== cU || "sniper" === yU || QU || AU ? null : (0, EU.jsx)(zQ, {
        label: null !== (UU = XU.label) && void 0 !== UU ? UU : Ty
      })
    }));

    function zQ(UU) {
      let {
        label: XU
      } = UU;
      const zU = PX(vU.e.Interact, !1);
      return (0, yU.useEffect)((() => (IU.k.UY(DX.w), () => {
        IU.k.UY(DX.w)
      })), []), (0, EU.jsx)("div", {
        ref: zU,
        className: "TouchInteractHit",
        children: (0, EU.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, EU.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, EU.jsx)(PU.d, {
              name: "hand-back-point-up"
            })
          }), (0, EU.jsx)(DU.d, {
            text: XU
          })]
        })
      })
    }
    var cQ = zU(73),
      yQ = zU(34771),
      QQ = zU(1817),
      AQ = zU(34782);
    const FQ = "ScreenshotMode";
    let oQ = [];
    const DQ = new Set;

    function EQ(UU) {
      oQ = UU;
      for (const XU of DQ) XU(UU)
    }
    const YQ = (0, yU.memo)((function() {
      const {
        screenshotMode: UU,
        isTouchScreen: XU,
        openEverythingMenuName: zU,
        openInGameMenuName: cU
      } = (0, rU.q)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), QU = null !== zU || null !== cU, AU = (0, uU.i)("localPlayerAlive");
      return (0, yU.useEffect)((() => {
        !UU || !QU && XU && AU || (0, yQ.h)()
      }), [UU, QU, XU, AU]), (0, yU.useEffect)((() => yQ.h), []), (0, yU.useEffect)((() => {
        if (UU) return document.documentElement.classList.add(FQ), (0, VU.f)(HU.F.ScreenshotMode, HU.F.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(FQ), (0, VU.f)(HU.F.ScreenshotMode, 0, "screenshotMode")
        }
      }), [UU]), UU ? (0, cQ.createPortal)((0, EU.jsx)(NQ, {}), document.body) : null
    }));

    function NQ() {
      const {
        t: UU
      } = (0, nU.I)(), [XU, zU] = (0, yU.useState)(!1), [cU, QU] = (0, yU.useState)(0), [AU, FU] = (0, yU.useState)(null), oU = function() {
        const [UU, XU] = (0, yU.useState)(oQ);
        return (0, yU.useEffect)((() => (DQ.add(XU), XU(oQ), () => {
          DQ.delete(XU)
        })), []), UU
      }(), DU = (0, yU.useRef)(), YU = (0, yU.useRef)(!1);
      (0, yU.useEffect)((() => () => {
        clearTimeout(DU.current)
      }), []);
      const NU = UU => {
          clearTimeout(DU.current), FU(UU), UU && (DU.current = setTimeout((() => {
            FU(null)
          }), 2e3))
        },
        IU = (XU, zU) => {
          switch (XU) {
            case "saved":
              NU(UU("screenshotMode:saved"));
              break;
            case "denied":
              NU(UU("screenshotMode:denied"));
              break;
            case "needsTap":
              oQ.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), NU(UU("screenshotMode:saveWaitingFirst"))) : EQ([...oQ, zU])
          }
        },
        pU = XU => {
          console.error("Screenshot mode: the photo wasn't saved", XU), NU(UU("screenshotMode:failed"))
        };
      return (0, EU.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, EU.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, EU.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), cU > 0 && (0, EU.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, cU), (0, EU.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": UU("screenshotMode:back"),
          onClick: yQ.h,
          children: (0, EU.jsx)(PU.d, {
            name: "arrow-left"
          })
        }), (0, EU.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": UU("screenshotMode:takePhoto"),
          "aria-busy": XU,
          onClick: () => {
            (async () => {
              if (!XU) {
                zU(!0), NU(null);
                try {
                  const UU = await (0, yQ.i)();
                  QU((UU => UU + 1)), IU(await (0, AQ.i)(UU), UU)
                } catch (UU) {
                  pU(UU)
                } finally {
                  zU(!1)
                }
              }
            })()
          },
          children: (0, EU.jsx)(PU.d, {
            name: "camera-alt"
          })
        }), null !== AU ? (0, EU.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: AU
        }) : oU.length > 0 && (0, EU.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (YU.current) return;
            YU.current = !0;
            const [UU] = oQ;
            EQ(oQ.slice(1));
            const XU = XU => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", XU), (0, QQ.c)(UU, UU.name), IU("saved", UU)
            };
            (0, AQ.m)(UU).then((zU => {
              "needsTap" === zU ? XU(zU) : IU(zU, UU)
            }), XU).catch(pU).finally((() => {
              YU.current = !1
            }))
          },
          children: [(0, EU.jsx)(PU.d, {
            name: "image"
          }), UU("screenshotMode:savePhoto"), oU.length > 1 && ` (${oU.length})`]
        })]
      })
    }
    var IQ = zU(5299),
      pQ = zU(5358);
    const aQ = (0, yU.forwardRef)((function(UU, XU) {
        let {
          text: zU,
          className: cU,
          children: yU
        } = UU;
        return zU.hasText ? (0, EU.jsx)("div", {
          ref: XU,
          className: AU()("HudTextPanel", cU, {
            NoBackground: !zU.showBackground
          }),
          children: null !== yU && void 0 !== yU ? yU : (0, EU.jsx)(DU.d, {
            text: zU.content
          })
        }) : null
      })),
      tQ = (0, yU.memo)((function() {
        const UU = (0, BU.i)("middleTextTop"),
          [XU, zU] = (0, yU.useState)(null),
          cU = (0, Jc.j)(XU);
        return UU.hasText ? (0, EU.jsx)("div", {
          className: AU()("MiddleTextTopContainer", {
            MiddleTextTopBelow: cU
          }),
          children: (0, EU.jsx)(aQ, {
            ref: zU,
            className: "MiddleTextTop",
            text: UU
          })
        }) : null
      })),
      gQ = (0, yU.memo)((function() {
        const UU = (0, BU.c)();
        return (0, EU.jsx)(EU.Fragment, {
          children: UU.map(((UU, XU) => (0, EU.jsx)(aQ, {
            className: "HeaderChip",
            text: UU
          }, XU)))
        })
      }));
    var kQ = zU(5043);
    const GQ = (0, yU.memo)((function() {
      const {
        t: UU
      } = (0, nU.I)(), [XU, zU] = (0, yU.useState)(!1), cU = (0, yU.useRef)(!1), QU = function(UU) {
        let {
          gameNameWithVariation: XU,
          lobbyName: zU
        } = UU;
        if ((0, ry.l)(XU)) return "customGame";
        if ((0, uy.A)(zU)) return "lobby";
        return null
      }((0, uU.i)("connectedGame"));
      if (!QU || XU) return null;
      const AU = kQ.b[QU];
      return (0, EU.jsx)(ZU.d, {
        tooltipInner: (0, EU.jsx)("div", {
          children: UU(AU.reportButtonTooltip)
        }),
        children: (0, EU.jsx)("div", {
          children: (0, EU.jsx)(Mz.M, {
            onClick: () => {
              cU.current || (cU.current = !0, (0, kQ.f)(AU).then((UU => {
                null !== UU && void 0 !== UU && UU.selectedPolicyId && (pU.gameBridge.send("reportLobbyOrGame", {
                  target: QU,
                  policy: UU.selectedPolicyId,
                  details: UU.ZD
                }), zU(!0))
              })).finally((() => {
                cU.current = !1
              })))
            }
          })
        })
      })
    }));
    var BQ = zU(9355),
      ZQ = zU(37669),
      RQ = zU(37677),
      PQ = zU(37685),
      WQ = zU(37687),
      dQ = zU(37674);
    let LQ = !1;
    async function eQ(UU, XU) {
      var zU, cU;
      const {
        files: yU
      } = XU, QU = yU.replayKey();
      if (null === QU) return "none";
      if (LQ) throw new Error(dQ.e.saveBusy.text);
      const AU = null !== (zU = null === (cU = yU.saveRefusal) || void 0 === cU ? void 0 : cU.call(yU)) && void 0 !== zU ? zU : null;
      if (null !== AU) throw new Error(AU);
      LQ = !0;
      try {
        return await async function(UU, XU, zU) {
          const {
            files: cU
          } = XU, yU = () => cU.replayKey() === zU, QU = (UU, XU) => {
            yU() && cU.markSaved(UU, XU)
          };
          let AU = null;
          if (XU.pickerSupported()) {
            try {
              if (AU = await XU.chooseFile(UU ? null : cU.fileHandle()), null === AU) return "QU"
            } catch (oU) {
              XU.onFallback(oU)
            }
            if (!yU()) throw new Error(dQ.e.saveClosed.text)
          }
          const FU = await cU.encode();
          if (null === FU) {
            if (null !== AU) throw new Error(dQ.e.saveClosed.text);
            return "none"
          }
          if (null !== AU) try {
            return await XU.write(AU, FU), QU(AU), "written"
          } catch (oU) {
            XU.onFallback(oU)
          }
          return QU(null, XU.download(FU)), "downloaded"
        }(UU, XU, QU)
      } finally {
        LQ = !1
      }
    }
    var CQ = zU(37717),
      wQ = zU(4982);
    const qQ = [1, 2, 4, 8, 16, 32, 64];

    function OQ(UU, XU) {
      return Math.max(0, Math.min(UU, XU))
    }

    function SQ(UU, XU, zU) {
      return zU <= XU ? 0 : (UU - XU) / (zU - XU) * 100
    }

    function rQ(UU, XU, zU) {
      const cU = zU - XU;
      return Math.round(XU + UU / 100 * cU)
    }

    function uQ(UU, XU) {
      const zU = Math.floor(UU / XU / 60),
        cU = Math.floor(UU / XU % 60),
        yU = UU % XU;
      return `${zU.toString().padStart(2,"0")}:${cU.toString().padStart(2,"0")}:${yU.toString().padStart(2,"0")}`
    }

    function fQ(UU) {
      return Number.isInteger(UU) || qQ.includes(UU) ? `${Math.round(UU)}\xd7` : `${UU.toFixed(1)}\xd7`
    }

    function iQ(UU, XU) {
      const zU = qQ.indexOf(UU);
      if (-1 !== zU) return "in" === XU ? qQ[Math.min(zU + 1, qQ.length - 1)] : qQ[Math.max(zU - 1, 0)];
      if ("in" === XU) {
        for (const XU of qQ)
          if (XU >= UU) return XU;
        return UU
      }
      for (let cU = qQ.length - 1; cU >= 0; cU--)
        if (qQ[cU] <= UU) return qQ[cU];
      return qQ[0]
    }

    function HQ(UU, XU) {
      const zU = XU.getBoundingClientRect();
      if (zU.width <= 0) return 0;
      const cU = (UU - zU.left) / zU.width * 100;
      return Math.max(0, Math.min(100, cU))
    }

    function MQ(UU, XU) {
      return XU <= 0 ? 0 : UU / XU * 100
    }

    function vQ(UU, XU, zU) {
      const cU = [];
      let yU = Math.ceil(UU / zU) * zU;
      for (; yU <= XU;) cU.push(yU), yU += zU;
      return cU
    }
    var VQ = zU(37723);
    const sQ = [{
        label: "Linear",
        easing: VQ.h
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: VQ.e
      }, {
        label: "Ease Out",
        easing: VQ.f
      }, {
        label: "Ease In Out",
        easing: VQ.b
      }],
      nQ = 200,
      mQ = 150;

    function lQ(UU) {
      const XU = UU => Number(UU.toFixed(3)).toString();
      return `cubic-bezier(${XU(UU[0])}, ${XU(UU[1])}, ${XU(UU[2])}, ${XU(UU[3])})`
    }

    function xQ(UU, XU) {
      return {
        cx: 25 + UU * mQ,
        cy: 25 + (1 - XU) * mQ
      }
    }

    function JQ(UU, XU, zU) {
      const cU = UU - zU.left,
        yU = XU - zU.top;
      return {
        x: jz.d.clamp((cU - 25) / mQ, 0, 1),
        y: jz.d.clamp(1 - (yU - 25) / mQ, -1, 2)
      }
    }

    function jQ(UU, XU, zU, cU, yU) {
      return {
        x: (0, VQ.q)(UU, zU, yU),
        y: (0, VQ.q)(XU, cU, yU)
      }
    }
    const KQ = (0, yU.memo)((function(UU) {
      let {
        value: XU,
        onChange: zU
      } = UU;
      const cU = (0, yU.useRef)(null),
        QU = (0, yU.useRef)(null),
        [AU, FU] = (0, yU.useState)(null),
        oU = (0, yU.useCallback)((() => {
          const UU = cU.current;
          if (!UU) return;
          const zU = UU.getContext("2d");
          if (!zU) return;
          const yU = window.devicePixelRatio || 1;
          UU.width = nQ * yU, UU.height = nQ * yU, zU.setTransform(yU, 0, 0, yU, 0, 0), zU.clearRect(0, 0, nQ, nQ), zU.fillStyle = "rgba(38, 52, 93, 0.85)", zU.fillRect(0, 0, nQ, nQ), zU.beginPath();
          const QU = xQ(0, 0),
            FU = xQ(1, 1);
          zU.moveTo(QU.cx, QU.cy), zU.lineTo(FU.cx, FU.cy), zU.strokeStyle = "rgba(164, 164, 164, 0.35)", zU.setLineDash([3, 3]), zU.stroke(), zU.setLineDash([]);
          const [oU, DU, EU, YU] = XU, NU = xQ(oU, DU), IU = xQ(EU, YU);
          zU.strokeStyle = "rgba(252, 211, 115, 0.55)", zU.lineWidth = 1.5, zU.beginPath(), zU.moveTo(QU.cx, QU.cy), zU.lineTo(NU.cx, NU.cy), zU.moveTo(FU.cx, FU.cy), zU.lineTo(IU.cx, IU.cy), zU.stroke(), zU.strokeStyle = "#fcd373", zU.lineWidth = 2, zU.beginPath();
          for (let XU = 0; XU <= 50; XU++) {
            const UU = jQ(oU, DU, EU, YU, XU / 50),
              cU = xQ(UU.x, UU.y);
            0 === XU ? zU.moveTo(cU.cx, cU.cy) : zU.lineTo(cU.cx, cU.cy)
          }
          zU.stroke();
          const pU = (UU, XU, cU) => {
            zU.beginPath(), zU.arc(UU, XU, cU ? 6 : 5, 0, 2 * Math.PI), zU.fillStyle = cU ? "#ffb914" : "#fcd373", zU.fill(), zU.strokeStyle = "#1a1f2e", zU.lineWidth = 1.5, zU.stroke()
          };
          pU(NU.cx, NU.cy, "p1" === AU), pU(IU.cx, IU.cy, "p2" === AU)
        }), [AU, XU]);
      (0, yU.useEffect)((() => {
        oU()
      }), [oU]);
      const DU = (0, yU.useCallback)(((UU, yU) => {
          const AU = cU.current,
            FU = QU.current;
          if (!AU || !FU) return;
          const oU = AU.getBoundingClientRect(),
            {
              x: DU,
              y: EU
            } = JQ(UU, yU, oU);
          zU("p1" === FU ? [DU, EU, XU[2], XU[3]] : [XU[0], XU[1], DU, EU])
        }), [zU, XU]),
        YU = (0, yU.useCallback)((UU => {
          const zU = cU.current;
          if (!zU) return;
          const yU = zU.getBoundingClientRect();
          let {
            x: AU,
            y: oU
          } = JQ(UU.clientX, UU.clientY, yU);
          AU = jz.d.clamp(AU, 0, 1), oU = jz.d.clamp(oU, 0, 1);
          const [EU, YU, NU, IU] = XU.map((UU => jz.d.clamp(UU, 0, 1))), pU = Math.hypot(AU - EU, oU - YU), aU = Math.hypot(AU - NU, oU - IU), tU = pU <= aU ? "p1" : "p2";
          ("p1" === tU ? pU : aU) > .12 || (QU.current = tU, FU(tU), zU.setPointerCapture(UU.pointerId), DU(UU.clientX, UU.clientY))
        }), [DU, XU]),
        NU = (0, yU.useCallback)((UU => {
          QU.current && DU(UU.clientX, UU.clientY)
        }), [DU]),
        IU = (0, yU.useCallback)((UU => {
          QU.current = null, FU(null), UU.currentTarget.hasPointerCapture(UU.pointerId) && UU.currentTarget.releasePointerCapture(UU.pointerId)
        }), []);
      return (0, EU.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, EU.jsx)("canvas", {
          ref: cU,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: nQ,
            height: nQ
          },
          onPointerDown: YU,
          onPointerMove: NU,
          onPointerUp: IU,
          onPointerCancel: IU
        }), (0, EU.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: lQ(XU)
        })]
      })
    }));
    var bQ = zU(1732),
      TQ = zU(1715);
    const hQ = 12;

    function UA(UU) {
      return {
        left: UU.left + UU.width / 2,
        top: UU.top - 8
      }
    }

    function XA(UU, XU) {
      const [zU, cU] = (0, yU.useState)(null);
      return (0, yU.useLayoutEffect)((() => {
        const zU = UU.current;
        if (!zU) return;
        const {
          width: yU,
          height: QU
        } = zU.getBoundingClientRect();
        cU(function(UU, XU, zU) {
          const cU = window.innerWidth,
            yU = window.innerHeight,
            QU = XU / 2;
          let AU = UU.left + UU.width / 2;
          AU = Math.max(hQ + QU, Math.min(AU, cU - hQ - QU));
          const FU = UU.top - 8 - hQ,
            oU = yU - UU.bottom - 8 - hQ,
            DU = FU < zU && oU >= FU;
          let EU;
          DU ? (EU = UU.bottom + 8, EU + zU > yU - hQ && (EU = yU - hQ - zU), EU = Math.max(hQ, EU)) : (EU = UU.top - 8, EU - zU < hQ && (EU = hQ + zU));
          return {
            left: AU,
            top: EU,
            placeBelow: DU
          }
        }(XU, yU, QU))
      }), [XU, UU]), zU
    }

    function zA(UU, XU, zU) {
      (0, yU.useEffect)((() => (0, TQ.d)("pointerdown", (cU => {
        var yU, QU;
        const AU = cU.target;
        AU instanceof Node && (null !== (yU = UU.current) && void 0 !== yU && yU.contains(AU) || null !== zU && void 0 !== zU && null !== (QU = zU.current) && void 0 !== QU && QU.contains(AU) || (0, bQ.h)(AU) || XU())
      }))), [zU, XU, UU])
    }

    function cA(UU) {
      let {
        label: XU,
        value: zU,
        onChange: cU
      } = UU;
      return (0, EU.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, EU.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: XU
        }), (0, EU.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((UU, XU) => (0, EU.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, EU.jsx)("span", {
              children: UU
            }), (0, EU.jsx)("input", {
              type: "number",
              step: "any",
              value: zU[XU],
              onChange: UU => {
                const yU = Number.parseFloat(UU.target.value);
                if (Number.isNaN(yU)) return;
                const QU = [zU[0], zU[1], zU[2]];
                QU[XU] = yU, cU(QU)
              }
            })]
          }, UU)))
        })]
      })
    }
    const yA = (0, yU.memo)((function(UU) {
        var XU, zU, cU;
        let {
          keyframe: QU,
          anchor: FU,
          hasOutgoingSegment: oU,
          onClose: DU,
          onApply: YU,
          onDelete: NU,
          onUseCurrentCamera: IU
        } = UU;
        const pU = (0, yU.useRef)(null),
          aU = XA(pU, FU.rect),
          [tU, gU] = (0, yU.useState)((() => [QU.position[0], QU.position[1], QU.position[2]])),
          [kU, GU] = (0, yU.useState)((() => [QU.direction[0], QU.direction[1], QU.direction[2]])),
          [BU, ZU] = (0, yU.useState)((() => QU.easing));
        (0, yU.useEffect)((() => {
          gU([QU.position[0], QU.position[1], QU.position[2]]), GU([QU.direction[0], QU.direction[1], QU.direction[2]]), ZU(QU.easing)
        }), [QU]), zA(pU, DU);
        const RU = (0, yU.useCallback)((() => {
            YU({
              LY: QU.LY,
              position: tU,
              direction: kU,
              easing: BU
            }), DU()
          }), [kU, BU, QU.LY, YU, DU, tU]),
          PU = (0, yU.useCallback)((() => {
            NU(QU.LY), DU()
          }), [QU.LY, NU, DU]),
          WU = (0, yU.useCallback)((() => {
            const UU = IU();
            UU && (gU([UU.position[0], UU.position[1], UU.position[2]]), GU([UU.direction[0], UU.direction[1], UU.direction[2]]))
          }), [IU]),
          dU = UA(FU.rect);
        return (0, EU.jsxs)("div", {
          ref: pU,
          className: AU()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (XU = null === aU || void 0 === aU ? void 0 : aU.placeBelow) && void 0 !== XU && XU,
            Positioned: null !== aU
          }),
          style: {
            left: `${null!==(zU=null===aU||void 0===aU?void 0:aU.left)&&void 0!==zU?zU:dU.left}px`,
            top: `${null!==(cU=null===aU||void 0===aU?void 0:aU.top)&&void 0!==cU?cU:dU.top}px`
          },
          onPointerDown: UU => {
            UU.stopPropagation()
          },
          children: [(0, EU.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, EU.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, EU.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", FU.LY]
            })]
          }), (0, EU.jsx)(cA, {
            label: "Position",
            value: tU,
            onChange: gU
          }), (0, EU.jsx)(cA, {
            label: "Direction",
            value: kU,
            onChange: GU
          }), oU && (0, EU.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, EU.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, EU.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: sQ.map((UU => {
                const XU = (zU = BU, cU = UU.easing, zU[0] === cU[0] && zU[1] === cU[1] && zU[2] === cU[2] && zU[3] === cU[3]);
                var zU, cU;
                return (0, EU.jsx)(Mz.O, {
                  className: AU()("ReplayKeyframePopoverPreset", {
                    Active: XU
                  }),
                  onClick: () => {
                    ZU(UU.easing)
                  },
                  children: UU.label
                }, UU.label)
              }))
            }), (0, EU.jsx)(KQ, {
              value: BU,
              onChange: ZU
            })]
          }), (0, EU.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, EU.jsx)(Mz.f, {
              className: "ReplayViewerCompactButton",
              onClick: WU,
              children: "Use current view"
            }), (0, EU.jsx)(Mz.l, {
              className: "ReplayViewerCompactButton",
              onClick: RU,
              children: "Apply"
            }), (0, EU.jsx)(Mz.G, {
              className: "ReplayViewerCompactButton",
              onClick: PU,
              children: "Delete"
            })]
          })]
        })
      })),
      QA = (0, yU.memo)((function(UU) {
        var XU, zU, cU;
        let {
          anchor: QU,
          hasPlaybackMark: FU,
          onClose: oU,
          onMark: DU,
          onZoom: YU,
          onCrop: NU,
          onDeleteKeyframes: IU,
          onClearMark: pU
        } = UU;
        const aU = (0, yU.useRef)(null),
          tU = XA(aU, QU.rect),
          gU = UA(QU.rect),
          kU = {
            startTick: QU.startTick,
            endTick: QU.endTick
          },
          GU = QU.endTick > QU.startTick;
        return zA(aU, oU), (0, EU.jsx)("div", {
          ref: aU,
          className: AU()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (XU = null === tU || void 0 === tU ? void 0 : tU.placeBelow) && void 0 !== XU && XU,
            Positioned: null !== tU
          }),
          style: {
            left: `${null!==(zU=null===tU||void 0===tU?void 0:tU.left)&&void 0!==zU?zU:gU.left}px`,
            top: `${null!==(cU=null===tU||void 0===tU?void 0:tU.top)&&void 0!==cU?cU:gU.top}px`
          },
          onPointerDown: UU => {
            UU.stopPropagation()
          },
          children: (0, EU.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, EU.jsx)(Mz.l, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                DU(kU)
              },
              disabled: !GU,
              children: (0, EU.jsx)("span", {
                children: " Play range "
              })
            }), (0, EU.jsx)(Mz.f, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                YU(kU)
              },
              children: (0, EU.jsx)("span", {
                children: " Zoom "
              })
            }), (0, EU.jsx)(Mz.O, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                NU(kU)
              },
              disabled: !GU,
              children: (0, EU.jsx)("span", {
                children: " Crop "
              })
            }), (0, EU.jsx)(Mz.O, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                IU(kU)
              },
              children: (0, EU.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), FU && (0, EU.jsx)(Mz.O, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                pU()
              },
              children: (0, EU.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      AA = (0, yU.memo)((function(UU) {
        var XU, zU;
        let {
          maxTick: cU,
          displayTick: QU,
          bq: FU,
          cameraKeyframes: oU,
          playbackMark: DU,
          onSeek: YU,
          onPause: NU,
          onScrubTickChange: IU,
          onMoveCameraKeyframe: pU,
          onUpdateCameraKeyframe: aU,
          onDeleteCameraKeyframe: tU,
          onUseCurrentCamera: gU,
          onMarkRange: kU,
          onCropRange: GU,
          onDeleteKeyframesInRange: BU,
          onClearMark: ZU,
          zoomLevel: RU,
          onZoomLevelChange: PU
        } = UU;
        const WU = (0, yU.useRef)(null),
          dU = (0, yU.useRef)(null),
          LU = (0, yU.useRef)(!1),
          eU = (0, yU.useRef)(!1),
          CU = (0, yU.useRef)(RU),
          wU = (0, yU.useRef)(null),
          qU = (0, yU.useRef)(null),
          OU = (0, yU.useRef)(null),
          SU = (0, yU.useRef)(null),
          [rU, uU] = (0, yU.useState)(null),
          [fU, iU] = (0, yU.useState)(QU),
          [HU, MU] = (0, yU.useState)(null),
          [vU, VU] = (0, yU.useState)(null),
          [sU, nU] = (0, yU.useState)(null),
          [mU, lU] = (0, yU.useState)(null),
          xU = (0, yU.useMemo)((() => oU.map((UU => UU.LY))), [oU]),
          JU = null !== rU && void 0 !== rU ? rU : QU,
          {
            viewStart: jU,
            viewEnd: KU
          } = (0, yU.useMemo)((() => function(UU) {
            const XU = UU.maxTick + 1,
              zU = Math.max(1, Math.ceil(XU / UU.zoomLevel)),
              cU = Math.floor(zU / 2);
            let yU = UU.centerTick - cU;
            return yU = Math.max(0, Math.min(yU, UU.maxTick - zU + 1)), {
              viewStart: yU,
              viewEnd: Math.min(UU.maxTick, yU + zU - 1)
            }
          }({
            maxTick: cU,
            zoomLevel: RU,
            centerTick: fU
          })), [cU, RU, fU]);
        (0, yU.useEffect)((() => {
          if (null !== rU || null !== qU.current || null !== OU.current || null !== SU.current) return;
          if (LU.current) return void(LU.current = !1);
          if (eU.current) return void(eU.current = !1);
          const UU = CU.current !== RU;
          CU.current = RU, UU && iU(QU)
        }), [RU, QU, rU]);
        const bU = (0, yU.useCallback)((UU => {
            let XU = OQ(UU, cU);
            return DU && (XU = Math.max(DU.inTick, Math.min(XU, DU.outTick))), XU
          }), [cU, DU]),
          TU = (0, yU.useCallback)(((UU, XU) => {
            const zU = bU(UU);
            YU(zU), XU && iU(zU)
          }), [bU, YU]),
          hU = (0, yU.useCallback)(((UU, XU) => {
            const zU = bU(UU);
            uU(zU), IU(zU), TU(zU, XU)
          }), [bU, TU, IU]),
          UX = (0, yU.useCallback)((() => {
            uU((UU => (null !== UU && iU(UU), null))), IU(null)
          }), [IU]),
          XX = (0, yU.useCallback)((() => {
            nU(null), lU(null)
          }), []),
          zX = (0, yU.useCallback)((UU => {
            const XU = WU.current;
            if (!XU) return 0;
            return OQ(rQ(HQ(UU, XU), jU, KU), cU)
          }), [cU, KU, jU]),
          cX = (0, yU.useCallback)((UU => {
            const XU = dU.current;
            if (!XU) return 0;
            return OQ(rQ(HQ(UU, XU), 0, cU), cU)
          }), [cU]),
          yX = (0, yU.useMemo)((() => {
            if (!HU) return [...xU];
            const UU = xU.filter((UU => UU !== HU.fromTick));
            return UU.push(HU.previewTick), UU.sort(((UU, XU) => UU - XU)), UU
          }), [xU, HU]),
          QX = (0, yU.useMemo)((() => {
            var UU;
            return vU && null !== (UU = oU.find((UU => UU.LY === vU.LY))) && void 0 !== UU ? UU : null
          }), [oU, vU]),
          AX = (0, yU.useMemo)((() => !!QX && oU.some((UU => UU.LY > QX.LY))), [oU, QX]);
        (0, yU.useEffect)((() => {
          vU && !QX && VU(null)
        }), [vU, QX]), (0, yU.useEffect)((() => {
          if (!mU) return () => {};
          const UU = UU => {
            "Escape" === UU.key && XX()
          };
          return window.addEventListener("keydown", UU), () => {
            window.removeEventListener("keydown", UU)
          }
        }), [XX, mU]);
        const FX = (0, yU.useCallback)(((UU, XU) => {
            XX(), NU(), YU(UU, {
              ignorePlaybackMark: !0
            }), VU({
              LY: UU,
              rect: XU.getBoundingClientRect()
            })
          }), [XX, NU, YU]),
          oX = (0, yU.useCallback)(((UU, XU) => zU => {
            0 === zU.button && (zU.stopPropagation(), VU(null), XX(), NU(), wU.current = {
              fromTick: UU,
              startX: zU.clientX,
              startY: zU.clientY,
              didDrag: !1,
              track: XU
            }, MU({
              fromTick: UU,
              previewTick: UU,
              track: XU
            }), zU.currentTarget.setPointerCapture(zU.pointerId))
          }), [XX, NU]),
          DX = (0, yU.useCallback)((UU => {
            if (!HU) return;
            UU.stopPropagation();
            const XU = wU.current;
            if (XU && !XU.didDrag) {
              const zU = UU.clientX - XU.startX,
                cU = UU.clientY - XU.startY;
              Math.hypot(zU, cU) > 5 && (XU.didDrag = !0)
            }
            const zU = "detail" === HU.track ? zX(UU.clientX) : cX(UU.clientX);
            zU !== HU.previewTick && MU({
              ...HU,
              previewTick: zU
            })
          }), [HU, zX, cX]),
          EX = (0, yU.useCallback)((UU => {
            if (!HU) return;
            UU.stopPropagation();
            const XU = wU.current,
              zU = "detail" === HU.track ? zX(UU.clientX) : cX(UU.clientX);
            XU && !XU.didDrag ? FX(XU.fromTick, UU.currentTarget) : zU !== HU.fromTick && pU(HU.fromTick, zU), MU(null), wU.current = null, UU.currentTarget.releasePointerCapture(UU.pointerId)
          }), [HU, pU, FX, zX, cX]),
          YX = (0, yU.useCallback)((UU => {
            if (0 !== UU.button) return;
            VU(null), NU();
            const XU = zX(UU.clientX);
            qU.current = {
              pointerId: UU.pointerId,
              startX: UU.clientX,
              startY: UU.clientY,
              startTick: XU,
              currentTick: XU,
              didSelect: !1
            }, nU(null), lU(null), UU.currentTarget.setPointerCapture(UU.pointerId)
          }), [NU, zX]),
          NX = (0, yU.useCallback)((UU => {
            const XU = qU.current;
            if (!XU || XU.pointerId !== UU.pointerId) return;
            const zU = zX(UU.clientX);
            if (XU.currentTick = zU, !XU.didSelect) {
              const zU = UU.clientX - XU.startX,
                cU = UU.clientY - XU.startY;
              if (Math.hypot(zU, cU) <= 5) return;
              XU.didSelect = !0
            }
            const cU = Math.min(XU.startTick, zU),
              yU = Math.max(XU.startTick, zU);
            nU({
              startTick: cU,
              endTick: yU
            })
          }), [zX]),
          IX = (0, yU.useCallback)((UU => {
            const XU = qU.current;
            if (!XU || XU.pointerId !== UU.pointerId) return;
            if (qU.current = null, UU.currentTarget.releasePointerCapture(UU.pointerId), !XU.didSelect) return XX(), void TU(XU.startTick, !0);
            const zU = zX(UU.clientX),
              cU = Math.min(XU.startTick, zU),
              yU = Math.max(XU.startTick, zU),
              QU = {
                startTick: cU,
                endTick: yU
              };
            nU(QU);
            const AU = WU.current;
            if (!AU) return;
            const FU = AU.getBoundingClientRect(),
              oU = SQ(cU, jU, KU) / 100,
              DU = SQ(yU, jU, KU) / 100,
              EU = FU.left + oU * FU.width,
              YU = FU.left + DU * FU.width;
            lU({
              ...QU,
              rect: new DOMRect(EU, FU.top, Math.max(YU - EU, 1), FU.height)
            })
          }), [XX, TU, zX, KU, jU]),
          pX = (0, yU.useCallback)((UU => XU => {
            if (0 !== XU.button) return;
            XU.stopPropagation(), VU(null), XX(), NU(), OU.current = {
              pointerId: XU.pointerId,
              track: UU
            }, XU.currentTarget.setPointerCapture(XU.pointerId);
            const zU = "detail" === UU ? zX(XU.clientX) : cX(XU.clientX);
            hU(zU, !1)
          }), [XX, NU, hU, zX, cX]),
          aX = (0, yU.useCallback)((UU => {
            const XU = OU.current;
            if (!XU || XU.pointerId !== UU.pointerId) return;
            UU.stopPropagation();
            const zU = "detail" === XU.track ? zX(UU.clientX) : cX(UU.clientX);
            hU(zU, !1)
          }), [hU, zX, cX]),
          tX = (0, yU.useCallback)((UU => {
            const XU = OU.current;
            XU && XU.pointerId === UU.pointerId && (UU.stopPropagation(), OU.current = null, UU.currentTarget.releasePointerCapture(UU.pointerId), UX())
          }), [UX]),
          gX = (0, yU.useCallback)((UU => {
            0 === UU.button && (XX(), NU(), SU.current = {
              pointerId: UU.pointerId
            }, UU.currentTarget.setPointerCapture(UU.pointerId), hU(cX(UU.clientX), !0))
          }), [XX, NU, hU, cX]),
          kX = (0, yU.useCallback)((UU => {
            const XU = SU.current;
            XU && XU.pointerId === UU.pointerId && hU(cX(UU.clientX), !0)
          }), [hU, cX]),
          GX = (0, yU.useCallback)((UU => {
            const XU = SU.current;
            XU && XU.pointerId === UU.pointerId && (SU.current = null, UU.currentTarget.releasePointerCapture(UU.pointerId), UX())
          }), [UX]),
          BX = (0, yU.useCallback)((UU => {
            const XU = Math.max(1, UU.endTick - UU.startTick + 1),
              zU = cU + 1,
              yU = zU / XU,
              QU = Math.max(1, Math.ceil(zU / yU)),
              AU = UU.startTick + Math.floor((QU - 1) / 2);
            eU.current = !0, CU.current = yU, iU(OQ(AU, cU)), PU(yU), XX()
          }), [XX, cU, PU]),
          ZX = (0, yU.useCallback)((UU => {
            kU(UU), XX()
          }), [XX, kU]),
          RX = (0, yU.useCallback)((UU => {
            GU(UU), XX()
          }), [XX, GU]),
          PX = (0, yU.useCallback)((UU => {
            BU(UU), XX()
          }), [XX, BU]),
          WX = (0, yU.useCallback)((() => {
            ZU(), XX()
          }), [XX, ZU]);
        (0, yU.useEffect)((() => {
          const UU = WU.current;
          if (!UU) return () => {};
          const XU = XU => {
            XU.preventDefault();
            const zU = OQ(rQ(HQ(XU.clientX, UU), jU, KU), cU),
              yU = XU.deltaY < 0 ? "in" : "out",
              QU = iQ(RU, yU);
            QU !== RU && (LU.current = !0, iU(zU), PU(QU))
          };
          return UU.addEventListener("wheel", XU, {
            passive: !1
          }), () => {
            UU.removeEventListener("wheel", XU)
          }
        }), [cU, PU, KU, jU, RU]);
        const dX = SQ(JU, jU, KU),
          LX = MQ(JU, cU),
          eX = MQ(jU, cU),
          CX = cU > 0 ? MQ(KU, cU) : 100,
          wX = null !== DU,
          qX = null !== (XU = null === DU || void 0 === DU ? void 0 : DU.inTick) && void 0 !== XU ? XU : 0,
          OX = null !== (zU = null === DU || void 0 === DU ? void 0 : DU.outTick) && void 0 !== zU ? zU : cU,
          SX = MQ(qX, cU),
          rX = Math.max(MQ(OX, cU) - SX, 0),
          uX = SQ(Math.max(qX, jU), jU, KU),
          fX = SQ(Math.min(OX, KU), jU, KU),
          iX = Math.max(fX - uX, 0),
          HX = wX && OX >= jU && qX <= KU,
          MX = SQ(qX, jU, KU),
          vX = SQ(OX, jU, KU),
          VX = wX && qX >= jU && qX <= KU,
          sX = wX && OX >= jU && OX <= KU,
          nX = MQ(qX, cU),
          mX = MQ(OX, cU),
          lX = null !== sU && void 0 !== sU ? sU : mU ? {
            startTick: mU.startTick,
            endTick: mU.endTick
          } : null,
          xX = lX ? SQ(Math.max(lX.startTick, jU), jU, KU) : 0,
          JX = lX ? SQ(Math.min(lX.endTick, KU), jU, KU) : 0,
          jX = Math.max(JX - xX, 0),
          KX = null !== lX && lX.endTick >= jU && lX.startTick <= KU,
          bX = (0, yU.useMemo)((() => vQ(0, cU, FU)), [cU, FU]),
          TX = (0, yU.useMemo)((() => vQ(jU, KU, FU)), [jU, KU, FU]),
          hX = (0, yU.useMemo)((() => yX.filter((UU => UU >= jU && UU <= KU))), [yX, KU, jU]),
          Uz = (0, yU.useCallback)(((UU, XU, zU) => {
            const yU = "detail" === XU ? SQ(UU, jU, KU) : MQ(UU, cU),
              QU = null !== HU && zU === HU.fromTick,
              FU = null !== vU && vU.LY === zU;
            return (0, EU.jsx)("button", {
              type: "button",
              className: AU()("ReplayTimelineCameraKeyframeMarker", "detail" === XU ? "Detail" : "Overview", {
                Dragging: QU,
                Selected: FU
              }),
              style: {
                left: `${yU}%`
              },
              onPointerDown: oX(zU, XU),
              onPointerMove: DX,
              onPointerUp: EX,
              onPointerCancel: EX,
              "aria-label": `Camera keyframe at tick ${zU}`
            }, `cam-${XU}-${zU}`)
          }), [oX, vU, EX, HU, cU, DX, KU, jU]),
          Xz = (0, yU.useCallback)((UU => HU && UU === HU.previewTick ? HU.fromTick : UU), [HU]);
        return cU <= 0 ? null : (0, EU.jsxs)("div", {
          className: "ReplayTimeline",
          children: [vU && QX && (0, cQ.createPortal)((0, EU.jsx)(yA, {
            keyframe: QX,
            anchor: vU,
            hasOutgoingSegment: AX,
            onClose: () => {
              VU(null)
            },
            onApply: aU,
            onDelete: tU,
            onUseCurrentCamera: gU
          }), document.body), mU && (0, cQ.createPortal)((0, EU.jsx)(QA, {
            anchor: mU,
            hasPlaybackMark: wX,
            onClose: XX,
            onMark: ZX,
            onZoom: BX,
            onCrop: RX,
            onDeleteKeyframes: PX,
            onClearMark: WX
          }), document.body), (0, EU.jsxs)("div", {
            className: AU()("ReplayTimelineOverviewSection", {
              Hidden: RU <= 1
            }),
            children: [(0, EU.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, EU.jsxs)("div", {
              ref: dU,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: gX,
              onPointerMove: kX,
              onPointerUp: GX,
              onPointerCancel: GX,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": cU,
              "aria-valuenow": JU,
              tabIndex: 0,
              children: [bX.map((UU => {
                const XU = MQ(UU, cU);
                return (0, EU.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${XU}%`
                  }
                }, UU)
              })), wX && (0, EU.jsxs)(EU.Fragment, {
                children: [(0, EU.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${SX}%`,
                    width: `${rX}%`
                  }
                }), (0, EU.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${nX}%`
                  },
                  "aria-hidden": !0
                }), (0, EU.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${mX}%`
                  },
                  "aria-hidden": !0
                })]
              }), yX.map((UU => Uz(UU, "overview", Xz(UU)))), (0, EU.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${eX}%`,
                  width: `${Math.max(CX-eX,.5)}%`
                }
              }), (0, EU.jsx)("button", {
                type: "button",
                className: AU()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== rU
                }),
                style: {
                  left: `${LX}%`
                },
                onPointerDown: pX("overview"),
                onPointerMove: aX,
                onPointerUp: tX,
                onPointerCancel: tX,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, EU.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, EU.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, EU.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, EU.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [uQ(jU, FU), " \u2013 ", uQ(KU, FU), RU > 1 && (0, EU.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: fQ(RU)
                })]
              })]
            }), (0, EU.jsxs)("div", {
              ref: WU,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: YX,
              onPointerMove: NX,
              onPointerUp: IX,
              onPointerCancel: IX,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": jU,
              "aria-valuemax": KU,
              "aria-valuenow": JU,
              tabIndex: 0,
              children: [TX.map((UU => {
                const XU = SQ(UU, jU, KU);
                return (0, EU.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${XU}%`
                  }
                }, UU)
              })), HX && (0, EU.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${uX}%`,
                  width: `${iX}%`
                }
              }), VX && (0, EU.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${MX}%`
                },
                "aria-label": `Play range start at tick ${qX}`
              }), sX && (0, EU.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${vX}%`
                },
                "aria-label": `Play range end at tick ${OX}`
              }), KX && lX && (0, EU.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${xX}%`,
                  width: `${jX}%`
                }
              }), hX.map((UU => Uz(UU, "detail", Xz(UU)))), (0, EU.jsx)("button", {
                type: "button",
                className: AU()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== rU
                }),
                style: {
                  left: `${dX}%`
                },
                onPointerDown: pX("detail"),
                onPointerMove: aX,
                onPointerUp: tX,
                onPointerCancel: tX,
                "aria-label": "Scrub playhead"
              })]
            }), (0, EU.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, EU.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      FA = (0, yU.memo)((function(UU) {
        let {
          enabled: XU
        } = UU;
        const zU = (0, yU.useRef)(!1),
          cU = (0, yU.useRef)(null),
          [QU, FU] = (0, yU.useState)(!1),
          oU = (0, yU.useCallback)((UU => {
            XU && 0 === UU.button && (zU.current = !0, FU(!0), cU.current = {
              x: UU.clientX,
              y: UU.clientY
            }, UU.currentTarget.setPointerCapture(UU.pointerId))
          }), [XU]),
          DU = (0, yU.useCallback)((UU => {
            if (!XU || !zU.current || !cU.current) return;
            const yU = UU.clientX - cU.current.x,
              QU = UU.clientY - cU.current.y;
            cU.current = {
              x: UU.clientX,
              y: UU.clientY
            }, pU.gameBridge.send("dragReplayCamera", {
              dx: yU,
              dy: QU
            })
          }), [XU]),
          YU = (0, yU.useCallback)((UU => {
            zU.current && (zU.current = !1, FU(!1), cU.current = null, UU.currentTarget.releasePointerCapture(UU.pointerId))
          }), []);
        return XU ? (0, EU.jsx)("div", {
          className: AU()("ReplayViewerCameraDragSurface", {
            Dragging: QU
          }),
          onPointerDown: oU,
          onPointerMove: DU,
          onPointerUp: YU,
          onPointerCancel: YU,
          "aria-hidden": !0
        }) : null
      }));
    var oA = zU(37728),
      DA = zU(37732);
    const EA = (0, yU.memo)((function(UU) {
        var XU, zU, cU;
        let {
          anchorRect: QU,
          anchorRef: FU,
          onClose: DU
        } = UU;
        const YU = (0, yU.useRef)(null),
          NU = XA(YU, QU),
          [IU, pU] = (0, yU.useState)(DA.d),
          aU = (0, yU.useMemo)((() => Object.values(IU).every((UU => UU))), [IU]);
        (0, oU.f)("replayViewer|uiVisibilityChanged", (() => {
          pU((0, DA.d)())
        })), zA(YU, DU, FU);
        const tU = (0, yU.useCallback)(((UU, XU) => {
            (0, DA.h)(UU, XU), pU((0, DA.d)())
          }), []),
          gU = (0, yU.useCallback)((UU => {
            for (const {
                group: XU
              }
              of oA.g)(0, DA.h)(XU, UU);
            pU((0, DA.d)())
          }), []),
          kU = UA(QU);
        return (0, cQ.createPortal)((0, EU.jsxs)("div", {
          ref: YU,
          className: AU()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (XU = null === NU || void 0 === NU ? void 0 : NU.placeBelow) && void 0 !== XU && XU,
            Positioned: null !== NU
          }),
          style: {
            left: `${null!==(zU=null===NU||void 0===NU?void 0:NU.left)&&void 0!==zU?zU:kU.left}px`,
            top: `${null!==(cU=null===NU||void 0===NU?void 0:NU.top)&&void 0!==cU?cU:kU.top}px`
          },
          onPointerDown: UU => {
            UU.stopPropagation()
          },
          children: [(0, EU.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, EU.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, EU.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, EU.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, EU.jsx)("input", {
                type: "checkbox",
                checked: aU,
                onChange: UU => {
                  gU(UU.target.checked)
                }
              }), (0, EU.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), oA.g.map((UU => {
              let {
                group: XU,
                label: zU
              } = UU;
              return (0, EU.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, EU.jsx)("input", {
                  type: "checkbox",
                  checked: IU[XU],
                  onChange: UU => {
                    tU(XU, UU.target.checked)
                  }
                }), (0, EU.jsx)("span", {
                  children: zU
                })]
              }, XU)
            }))]
          })]
        }), document.body)
      })),
      YA = (0, yU.memo)((function(UU) {
        let {
          disabled: XU
        } = UU;
        const zU = (0, yU.useRef)(null),
          [cU, QU] = (0, yU.useState)(!1),
          [AU, FU] = (0, yU.useState)(null),
          oU = (0, yU.useCallback)((() => {
            zU.current && (FU(zU.current.getBoundingClientRect()), QU((UU => !UU)))
          }), []),
          DU = (0, yU.useCallback)((() => {
            QU(!1)
          }), []);
        return (0, EU.jsxs)(EU.Fragment, {
          children: [(0, EU.jsx)("div", {
            ref: zU,
            children: (0, EU.jsx)(Mz.f, {
              className: "ReplayViewerActionButton",
              onClick: oU,
              disabled: XU,
              children: (0, EU.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), cU && AU && (0, EU.jsx)(EA, {
            anchorRect: AU,
            anchorRef: zU,
            onClose: DU
          })]
        })
      })),
      NA = ["freeCamUp", "freeCamDown"];

    function IA(UU, XU) {
      pU.gameBridge.send("holdReplayFreecamVertical", {
        action: UU,
        uD: XU
      })
    }
    const pA = (0, yU.memo)((function() {
      (0, yU.useEffect)((() => () => {
        ! function() {
          pU.gameBridge.send("moveReplayFreecam", null);
          for (const UU of NA) IA(UU, !1)
        }()
      }), []);
      const UU = (0, yU.useCallback)((UU => {
          pU.gameBridge.send("moveReplayFreecam", UU)
        }), []),
        XU = (0, yU.useCallback)((UU => ({
          onTouchStart: XU => {
            XU.preventDefault(), XU.stopPropagation(), IA(UU, !0)
          },
          onTouchEnd: XU => {
            XU.preventDefault(), XU.stopPropagation(), IA(UU, !1)
          },
          onTouchCancel: XU => {
            XU.preventDefault(), XU.stopPropagation(), IA(UU, !1)
          }
        })), []);
      return (0, EU.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, EU.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, EU.jsx)(kX, {
            onMove: UU,
            mode: "pinned"
          })
        }), (0, EU.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, EU.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...XU("freeCamUp"),
            children: (0, EU.jsx)(PU.d, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, EU.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...XU("freeCamDown"),
            children: (0, EU.jsx)(PU.d, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var aA = zU(3498);
    const tA = [],
      gA = "Failed to load recording";

    function kA(UU, XU, zU) {
      var cU;
      console.error(XU), zz.NotificationProvider.showAlertPopup({
        title: UU,
        subtitle: null !== (cU = (0, dQ.l)(XU)) && void 0 !== cU ? cU : zU,
        confirmText: "OK"
      })
    }

    function GA(UU) {
      kA(gA, UU, dQ.e.cantOpen.text)
    }
    const BA = (0, yU.memo)((function() {
        const UU = (0, fU.m)(),
          {
            gameState: XU
          } = (0, rU.q)(["gameState"]),
          zU = "inGame" === XU;
        return (0, uU.b)("replayViewerRequested", (UU => {
          (0, fU.i)("toggle" === UU ? !(0, fU.g)() : "open" === UU)
        })), (0, yU.useEffect)((() => {
          zU && (0, CQ.f)().then((UU => {
            if (null !== UU) return (0, fU.i)(!0), (0, ZQ.e)().open(UU.bytes, UU.source)
          })).catch((UU => {
            (0, fU.i)(!0), GA(UU)
          }))
        }), [zU]), UU ? (0, EU.jsx)(ZA, {}) : null
      })),
      ZA = (0, yU.memo)((function() {
        var UU, XU, zU, cU, QU, FU, oU, DU, YU, NU, IU, aU;
        const tU = yU.useRef(null),
          [gU, kU] = (0, yU.useState)(1),
          [GU, BU] = (0, yU.useState)(null),
          [RU, WU] = (0, yU.useState)(!1),
          {
            isTouchScreen: dU
          } = (0, rU.q)(["isTouchScreen"]),
          LU = (0, uU.i)("replay"),
          eU = (0, uU.i)("replayEdits"),
          CU = null !== LU,
          wU = null !== (UU = null === LU || void 0 === LU ? void 0 : LU.LY) && void 0 !== UU ? UU : 0,
          qU = null !== (XU = null === LU || void 0 === LU ? void 0 : LU.totalTicks) && void 0 !== XU ? XU : 0,
          OU = Math.max(0, qU - 1),
          SU = null !== (zU = null === LU || void 0 === LU ? void 0 : LU.playing) && void 0 !== zU && zU,
          iU = null !== (cU = null === LU || void 0 === LU ? void 0 : LU.speed) && void 0 !== cU ? cU : 1,
          HU = null !== (QU = null === LU || void 0 === LU ? void 0 : LU.bq) && void 0 !== QU ? QU : 20,
          MU = null !== GU && void 0 !== GU ? GU : wU,
          vU = null !== (FU = null === LU || void 0 === LU ? void 0 : LU.freecam) && void 0 !== FU && FU,
          VU = null !== (oU = null === LU || void 0 === LU ? void 0 : LU.cameraMode) && void 0 !== oU ? oU : "recording",
          sU = null !== (DU = null === eU || void 0 === eU ? void 0 : eU.cameraKeyframes) && void 0 !== DU ? DU : tA,
          nU = null !== (YU = null === eU || void 0 === eU ? void 0 : eU.playbackMark) && void 0 !== YU ? YU : null,
          mU = null !== (NU = null === eU || void 0 === eU ? void 0 : eU.fileName) && void 0 !== NU ? NU : null,
          lU = null !== (IU = null === eU || void 0 === eU ? void 0 : eU.unsavedChanges) && void 0 !== IU && IU,
          xU = null !== (aU = null === eU || void 0 === eU ? void 0 : eU.suggestSaveAs) && void 0 !== aU && aU,
          JU = (0, uU.i)("replayVideoExporting"),
          jU = !JU && CU && ("freecam" === VU || ("recording" === VU || "keyframe" === VU) && !SU),
          KU = dU && CU && "freecam" === VU && !JU && !RU;
        (0, wQ.c)(!0, !0, "ReplayViewerOverlay"), (0, yU.useEffect)((() => {
          pU.gameBridge.send("syncReplayCameraMode", null)
        }), [vU]);
        const bU = (0, yU.useCallback)(((UU, XU) => {
            pU.gameBridge.send("seekReplay", {
              LY: UU,
              ignorePlaybackMark: null === XU || void 0 === XU ? void 0 : XU.ignorePlaybackMark
            })
          }), []),
          TU = (0, yU.useCallback)((() => {
            pU.gameBridge.send("setReplayPlaying", !1)
          }), []),
          hU = (0, yU.useCallback)(((UU, XU) => {
            pU.gameBridge.send("moveReplayCameraKeyframe", {
              from: UU,
              to: XU
            })
          }), []),
          UX = (0, yU.useCallback)((UU => {
            pU.gameBridge.send("setReplayCameraKeyframe", UU)
          }), []),
          XX = (0, yU.useCallback)((UU => {
            pU.gameBridge.send("deleteReplayCameraKeyframes", {
              start: UU,
              end: UU
            })
          }), []),
          zX = (0, yU.useCallback)((UU => {
            pU.gameBridge.send("deleteReplayCameraKeyframes", {
              start: UU.startTick,
              end: UU.endTick
            })
          }), []),
          cX = (0, yU.useCallback)((() => pU.gameBridge.lookup("replayCamera", null)), []),
          yX = (0, yU.useCallback)((UU => {
            BU(UU)
          }), []),
          QX = (0, yU.useCallback)((UU => {
            pU.gameBridge.send("setReplayPlaybackMark", {
              inTick: UU.startTick,
              outTick: UU.endTick
            })
          }), []),
          AX = (0, yU.useCallback)((() => {
            pU.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          FX = (0, yU.useCallback)((UU => {
            const XU = pU.gameBridge.latest("replay");
            if (null === XU || UU.endTick <= UU.startTick) return;
            const zU = UU.startTick,
              cU = UU.endTick;
            zz.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((UU => {
              var yU;
              if (!0 !== UU) return;
              if ((null === (yU = pU.gameBridge.latest("replay")) || void 0 === yU ? void 0 : yU.id) !== XU.id) return;
              pU.gameBridge.send("cropReplay", {
                start: zU,
                end: cU
              }) && (BU(null), kU(1))
            }))
          }), []),
          oX = (0, yU.useCallback)(((UU, XU) => {
            kU(1), BU(null), (0, ZQ.e)().open(UU, XU).catch(GA)
          }), []),
          DX = (0, yU.useCallback)(((UU, XU) => {
            null !== pU.gameBridge.latest("connectedGame").websocketUrl ? zz.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((zU => {
              !0 === zU && oX(UU, XU)
            })) : oX(UU, XU)
          }), [oX]),
          EX = (0, yU.useCallback)((UU => {
            var XU;
            const zU = null === (XU = UU.target.files) || void 0 === XU ? void 0 : XU[0];
            if (UU.target.value = "", !zU) return;
            const cU = new FileReader;
            cU.onload = () => {
              DX(new Uint8Array(cU.result), {
                fileName: zU.name
              })
            }, cU.onerror = () => {
              GA(cU.error)
            }, cU.readAsArrayBuffer(zU)
          }), [DX]),
          YX = (0, yU.useCallback)((() => {
            const UU = () => {
              null !== tU.current && (0, aA.g)(tU.current)
            };
            (0, WQ.k)() ? (0, WQ.e)().then((UU => {
              UU && DX(UU.bytes, {
                fileHandle: UU.handle
              })
            })).catch((XU => {
              console.error(XU), zz.NotificationProvider.showPromptPopup({
                title: gA,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((XU => {
                !0 === XU && UU()
              }))
            })): UU()
          }), [DX]),
          NX = (0, yU.useCallback)((async function() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let XU;
            try {
              XU = await eQ(UU, {
                files: (0, ZQ.e)(),
                pickerSupported: WQ.k,
                chooseFile: WQ.b,
                write: WQ.o,
                download: PQ.d,
                onFallback: console.error
              })
            } catch (zU) {
              return void kA("Failed to save recording", zU)
            }
            "written" !== XU && "downloaded" !== XU || (() => {
              const UU = zz.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                UU.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          IX = (0, yU.useCallback)((UU => {
            pU.gameBridge.send("replayAction", UU)
          }), []),
          pX = (0, yU.useCallback)((UU => {
            kU((XU => iQ(XU, UU)))
          }), []),
          aX = (0, yU.useCallback)((UU => {
            if (!pU.gameBridge.latest("replayVideoExporting")) switch (UU) {
              case "replayLoad":
                YX();
                break;
              case "replaySave":
                NX(!1);
                break;
              case "replaySaveAs":
                NX(!0);
                break;
              case "replayTimelineZoomIn":
                pX("in");
                break;
              case "replayTimelineZoomOut":
                pX("out")
            }
          }), [YX, NX, pX]);
        (0, uU.b)("replayUiActionRequested", aX);
        const tX = (0, yU.useCallback)((UU => {
            pU.gameBridge.send("setReplayCameraMode", UU)
          }), []),
          gX = CU ? Mz.f : Mz.l,
          kX = lU && !xU ? Mz.l : Mz.f,
          GX = lU && xU ? Mz.l : Mz.f;
        return (0, EU.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, EU.jsx)(FA, {
            enabled: jU
          }), KU && (0, EU.jsx)(pA, {}), (0, EU.jsx)("input", {
            ref: tU,
            type: "file",
            accept: PQ.b,
            className: "ReplayViewerFileInput",
            onChange: EX
          }), (0, EU.jsxs)("div", {
            className: AU()("ReplayViewerBar", {
              Collapsed: RU
            }),
            children: [(0, EU.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                RU ? WU(!1) : CU ? WU(!0) : (0, fU.e)()
              },
              "aria-expanded": !RU,
              "aria-label": RU ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, EU.jsx)(PU.d, {
                name: RU ? "angle-up" : "angle-down"
              })
            }), !RU && (0, EU.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [CU && qU > 0 && (0, EU.jsx)(AA, {
                maxTick: OU,
                displayTick: MU,
                bq: HU,
                cameraKeyframes: sU,
                playbackMark: nU,
                onSeek: bU,
                onPause: TU,
                onScrubTickChange: yX,
                onMoveCameraKeyframe: hU,
                onUpdateCameraKeyframe: UX,
                onDeleteCameraKeyframe: XX,
                onUseCurrentCamera: cX,
                onMarkRange: QX,
                onCropRange: FX,
                onDeleteKeyframesInRange: zX,
                onClearMark: AX,
                zoomLevel: gU,
                onZoomLevelChange: kU
              }, OU), (0, EU.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, EU.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, EU.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [CU && (0, EU.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== mU && void 0 !== mU ? mU : "Unsaved recording", lU ? " *" : ""]
                    }), (0, EU.jsxs)(gX, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        aX("replayLoad")
                      },
                      children: [(0, EU.jsx)(by.c, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, EU.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, EU.jsxs)(Mz.f, {
                      className: "ReplayViewerActionButton",
                      onClick: fU.e,
                      children: [(0, EU.jsx)(by.c, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, EU.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, EU.jsxs)(kX, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        aX("replaySave")
                      },
                      disabled: !CU,
                      children: [(0, EU.jsx)(by.c, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, EU.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, EU.jsxs)(Mz.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        pU.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !CU,
                      children: [(0, EU.jsx)(by.c, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, EU.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, EU.jsxs)(GX, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        aX("replaySaveAs")
                      },
                      disabled: !CU,
                      children: [(0, EU.jsx)(by.c, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, EU.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, EU.jsxs)(Mz.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        pU.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !CU || 0 === qU || JU,
                      children: [(0, EU.jsx)(by.c, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, EU.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, EU.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, EU.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, EU.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, EU.jsx)(by.c, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, EU.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, EU.jsx)(ZU.d, {
                        tooltipInner: (0, EU.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, EU.jsxs)(Mz.O, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === VU,
                          onClick: () => {
                            tX("recording")
                          },
                          disabled: !CU,
                          children: ["Recorded ", (0, EU.jsx)(PU.d, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, EU.jsx)(ZU.d, {
                        tooltipInner: (0, EU.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, EU.jsxs)(Mz.O, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === VU,
                          onClick: () => {
                            tX("freecam")
                          },
                          disabled: !CU,
                          children: ["Free ", (0, EU.jsx)(PU.d, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, EU.jsx)(ZU.d, {
                        tooltipInner: (0, EU.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, EU.jsxs)(Mz.O, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === VU,
                          onClick: () => {
                            tX("keyframe")
                          },
                          disabled: !CU,
                          children: ["Preview ", (0, EU.jsx)(PU.d, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, EU.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, EU.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, EU.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, EU.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: uQ(MU, HU)
                      }), (0, EU.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, EU.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: uQ(OU, HU)
                      })]
                    }), (0, EU.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", MU, " / ", OU]
                    })]
                  }), (0, EU.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, EU.jsxs)(Mz.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        IX("replaySkipBack")
                      },
                      disabled: !CU,
                      children: [(0, EU.jsxs)("span", {
                        children: [" ", (0, EU.jsx)(PU.d, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, EU.jsx)(by.c, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, EU.jsxs)(Mz.l, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        pU.gameBridge.send("setReplayPlaying", !SU)
                      },
                      disabled: !CU,
                      children: [(0, EU.jsxs)("span", {
                        children: [" ", SU ? (0, EU.jsx)(PU.d, {
                          name: "pause"
                        }) : (0, EU.jsx)(PU.d, {
                          name: "play"
                        }), " "]
                      }), (0, EU.jsx)(by.c, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, EU.jsxs)(Mz.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        IX("replaySkipForward")
                      },
                      disabled: !CU,
                      children: [(0, EU.jsxs)("span", {
                        children: [" ", (0, EU.jsx)(PU.d, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, EU.jsx)(by.c, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, EU.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, EU.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, EU.jsxs)(Mz.l, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        IX("replayRecordKeyframe")
                      },
                      disabled: !CU,
                      children: [(0, EU.jsx)(by.c, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, EU.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, EU.jsx)(YA, {
                      disabled: !CU
                    }), nU && (0, EU.jsx)(Mz.O, {
                      className: "ReplayViewerActionButton",
                      onClick: AX,
                      disabled: !CU,
                      children: (0, EU.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, EU.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, EU.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, EU.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, EU.jsx)(Mz.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          IX("replaySpeedDown")
                        },
                        disabled: !CU || (0, RQ.d)(iU),
                        children: (0, EU.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, EU.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [iU, "\xd7"]
                      }), (0, EU.jsx)(Mz.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          IX("replaySpeedUp")
                        },
                        disabled: !CU || (0, RQ.b)(iU),
                        children: (0, EU.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, EU.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, EU.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, EU.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, EU.jsxs)(Mz.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          aX("replayTimelineZoomOut")
                        },
                        disabled: !CU || gU <= qQ[0],
                        children: [(0, EU.jsx)("span", {
                          children: " \u2212 "
                        }), (0, EU.jsx)(by.c, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, EU.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: fQ(gU)
                      }), (0, EU.jsxs)(Mz.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          aX("replayTimelineZoomIn")
                        },
                        disabled: !CU || gU >= qQ[qQ.length - 1],
                        children: [(0, EU.jsx)("span", {
                          children: " + "
                        }), (0, EU.jsx)(by.c, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, EU.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !CU && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var RA = zU(1360);

    function PA() {
      const [, UU] = (0, yU.useState)(0);
      return (0, oU.f)("replayViewer|uiVisibilityChanged", (() => {
          UU((UU => UU + 1))
        })), (0, oU.f)("replayViewer|replayLoaded", (() => {
          UU((UU => UU + 1))
        })),
        function() {
          if (!(0, RA.c)()) return {};
          const UU = {
              [oA.c]: "true"
            },
            XU = (0, DA.d)();
          for (const {
              group: zU,
              dataAttr: cU
            }
            of oA.g) cU && !XU[zU] && (UU[cU] = "true");
          return UU
        }()
    }
    var WA = zU(34856),
      dA = zU(2127),
      LA = zU(9305),
      eA = zU(9294),
      CA = zU(2139);
    const wA = (0, yU.memo)((function() {
      var UU, XU, zU;
      const cU = (0, BU.f)("customButtons");
      (0, yU.useEffect)((() => cU ? (pU.gameBridge.send("bindCustomButtonKeys", cU.filter(LA.d).map((UU => {
        let {
          id: XU,
          keycode: zU
        } = UU;
        return {
          id: XU,
          keycode: zU
        }
      }))), () => {
        pU.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [cU]);
      const QU = null !== (UU = null === cU || void 0 === cU ? void 0 : cU.filter(LA.d)) && void 0 !== UU ? UU : [],
        AU = (0, eA.g)(),
        FU = null !== (XU = null === (zU = (0, CA.c)()) || void 0 === zU ? void 0 : zU.hideButtonHints) && void 0 !== XU && XU,
        oU = "customButton" !== (null === AU || void 0 === AU ? void 0 : AU.kind) || FU ? null : AU.id,
        DU = QU.length > 0,
        YU = (0, yU.useRef)(null);
      return (0, yU.useLayoutEffect)((() => {
        if (!DU) return () => {};
        const UU = YU.current,
          XU = UU.closest(".InGameUi"),
          zU = () => {
            XU.style.setProperty("--custom-buttons-top", `${UU.offsetTop}px`)
          };
        zU();
        const cU = new ResizeObserver(zU);
        return cU.observe(UU), cU.observe(UU.parentElement), () => {
          cU.disconnect(), XU.style.removeProperty("--custom-buttons-top")
        }
      }), [DU]), (0, EU.jsx)("div", {
        ref: YU,
        className: "" + ((0, Xz.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: QU.map((UU => {
          var XU, zU;
          return (0, EU.jsx)(qA, {
            button: UU,
            padGlyph: UU.id === oU && null !== (XU = null === (zU = (0, eU.e)()) || void 0 === zU ? void 0 : zU.getBoundButton("actionButton")) && void 0 !== XU ? XU : null
          }, UU.id)
        }))
      })
    }));

    function qA(UU) {
      let {
        button: XU,
        padGlyph: zU
      } = UU;
      const cU = (0, yU.useRef)(null),
        QU = () => {
          null !== cU.current && (cU.current = null, pU.gameBridge.send("pressCustomButton", {
            id: XU.id,
            down: !1
          }))
        };
      (0, yU.useEffect)((() => QU), []);
      const AU = iX(QU, {
          pressesOnPointerDown: !0
        }),
        FU = UU => {
          cU.current === UU.pointerId && QU()
        };
      return (0, EU.jsxs)("div", {
        className: "CustomIcon",
        ...AU,
        onLostPointerCapture: FU,
        children: [(0, EU.jsx)(dA.d, {
          icon: XU.icon,
          keyboardHint: (0, LA.c)(XU.keycode),
          padGlyph: zU,
          onPointerDown: UU => {
            try {
              UU.currentTarget.setPointerCapture(UU.pointerId)
            } catch {
              return
            }
            null === cU.current && pU.gameBridge.send("pressCustomButton", {
              id: XU.id,
              down: !0
            }), cU.current = UU.pointerId
          },
          onPointerUp: FU,
          onPointerCancel: FU,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), XU.description && (0, EU.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: XU.description
        })]
      })
    }
    var OA = zU(2596),
      SA = zU(264);
    const rA = {
      frame: UU => {
        const XU = requestAnimationFrame((() => {
          UU()
        }));
        return () => {
          cancelAnimationFrame(XU)
        }
      },
      afterFrame: UU => {
        const XU = setTimeout(UU, 0);
        return () => {
          clearTimeout(XU)
        }
      }
    };
    class uA {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SA.b,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rA,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = UU, this.frames = XU, this.onHiddenMount = zU, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (UU(), () => {}) : (XU ? this.waiting.unshift(UU) : this.waiting.push(UU), this.schedule(), () => {
          const XU = this.waiting.indexOf(UU);
          XU >= 0 && (this.waiting.splice(XU, 1), this.settle())
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
        const UU = this.waiting.shift(),
          XU = !this.shown,
          zU = performance.now();
        try {
          UU()
        } finally {
          XU && this.onHiddenMount(performance.now() - zU), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var UU, XU, zU;
        null === (UU = this.cancelIdle) || void 0 === UU || UU.call(this), this.cancelIdle = null, null === (XU = this.cancelFrame) || void 0 === XU || XU.call(this), this.cancelFrame = null, null === (zU = this.cancelAfterFrame) || void 0 === zU || zU.call(this), this.cancelAfterFrame = null
      }
    }
    const fA = (0, yU.createContext)(null);

    function iA(UU) {
      let {
        children: XU,
        first: zU = !1
      } = UU;
      const cU = (0, yU.useContext)(fA),
        [QU, AU] = (0, yU.useState)(null === cU);
      return (0, yU.useEffect)((() => {
        if (!QU && null !== cU) return cU.request((() => {
          AU(!0)
        }), zU)
      }), [zU, QU, cU]), QU ? (0, yU.createElement)(yU.Fragment, null, XU) : null
    }
    const HA = (0, yU.memo)((function(UU) {
        let {
          shown: XU
        } = UU;
        const [zU] = (0, yU.useState)((() => new tU.f(XU))), [QU] = (0, yU.useState)((() => XU ? null : new uA(void 0, void 0, (UU => {
          cU.c.noteWorkDuringAdmissionWait(UU)
        }))));
        return (0, yU.useLayoutEffect)((() => {
          XU && (null === QU || void 0 === QU || QU.show(), zU.show())
        }), [XU, zU, QU]), (0, EU.jsx)(tU.d.Provider, {
          value: zU,
          children: (0, EU.jsx)(fA.Provider, {
            value: QU,
            children: (0, EU.jsx)(MA, {})
          })
        })
      })),
      MA = (0, yU.memo)((function() {
        const {
          isUiHidden: UU,
          isUiHiddenByCamera: XU,
          worldPanelHud: zU,
          isTouchScreen: cU
        } = (0, rU.q)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), QU = (0, gy.d)(), FU = PA(), oU = (0, tU.k)(), DU = (0, yU.useRef)(null), YU = (0, BU.f)("showKillfeed");
        return function() {
            const UU = (0, tU.k)();
            (0, yU.useEffect)((() => UU.whenShown(gU)), [UU])
          }(),
          function() {
            const UU = (0, BU.f)("inventoryColourOverride");
            (0, yU.useEffect)((() => {
              if (!UU) return;
              const {
                panel: XU,
                slot: zU,
                slotSelected: cU,
                slotUnavailable: yU
              } = wU(UU), QU = document.documentElement.style;
              return QU.setProperty("--InventoryPanelColour", XU), QU.setProperty("--InventorySlotColour", zU), QU.setProperty("--InventorySlotSelectedColour", cU), QU.setProperty("--InventorySlotUnavailableColour", yU), () => {
                QU.removeProperty("--InventoryPanelColour"), QU.removeProperty("--InventorySlotColour"), QU.removeProperty("--InventorySlotSelectedColour"), QU.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [UU])
          }(), (0, yU.useLayoutEffect)((() => oU.whenShown((() => {
            var UU;
            null === (UU = DU.current) || void 0 === UU || UU.classList.remove("PreMounted")
          }))), [oU]), (0, EU.jsxs)(EU.Fragment, {
            children: [(0, EU.jsxs)("div", {
              ref: DU,
              className: AU()("InGameUi", {
                PreMounted: !oU.shown,
                Hidden: UU,
                HiddenByCamera: XU,
                HiddenByWorldPanel: null !== zU,
                WorldPanelTouchControl: "touchControls" === zU
              }),
              ...FU,
              children: [(0, EU.jsxs)(iA, {
                children: [(0, EU.jsx)(Nc.e, {}), (0, EU.jsx)(gc, {})]
              }), (0, EU.jsx)(tU.h, {
                children: (0, EU.jsx)(kc, {})
              }), (0, EU.jsxs)(iA, {
                children: [(0, EU.jsx)(ny, {}), (0, EU.jsx)(hy, {}), cU && (0, EU.jsx)(XQ, {})]
              }), (0, EU.jsxs)(iA, {
                children: [(0, EU.jsx)(wz, {}), (0, EU.jsx)(Oc.d, {}), (0, EU.jsx)(vc, {})]
              }), (0, EU.jsx)(tU.h, {
                children: (0, EU.jsx)(Yc, {})
              }), (0, EU.jsxs)(iA, {
                children: [(0, EU.jsx)(Jy.c, {}), (0, EU.jsx)(BA, {})]
              }), null, (0, EU.jsxs)(iA, {
                children: [(0, EU.jsx)(IQ.g, {}), (0, EU.jsx)(pQ.f, {})]
              }), (0, EU.jsx)(iA, {
                children: (0, EU.jsx)(Oz.h, {})
              }), (0, EU.jsx)(iA, {
                children: (0, EU.jsx)(xA, {
                  showChat: QU
                })
              }), (0, EU.jsxs)(iA, {
                children: [(0, EU.jsx)(tQ, {}), (0, EU.jsx)(xy, {})]
              }), (0, EU.jsxs)("div", {
                className: AU()("RightElements", {
                  RightElementsTouchscreen: cU
                }),
                "data-camera-keeper-host": "",
                children: [(0, EU.jsxs)("div", {
                  className: Jc.h,
                  "data-holds-camera-keeper": "",
                  children: [(0, EU.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, EU.jsx)(iA, {
                      children: (0, EU.jsx)(Oy.d, {})
                    }), (0, EU.jsxs)(iA, {
                      children: [(0, EU.jsx)(WU, {}), (0, EU.jsx)(hc.c, {})]
                    }), Xz.featureFlags.useSocialFeatures && (0, EU.jsx)(tU.h, {
                      children: (0, EU.jsx)(Uy.d, {
                        placement: "inGame"
                      })
                    }), Xz.featureFlags.useSocialFeatures && (0, EU.jsx)(tU.h, {
                      children: (0, EU.jsx)(Ny, {})
                    }), YU && (0, EU.jsx)(tU.h, {
                      children: (0, EU.jsx)(qc, {})
                    }), (0, EU.jsx)(iA, {
                      children: (0, EU.jsx)(WA.c, {})
                    })]
                  }), Xz.featureFlags.useSocialFeatures && (0, EU.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, EU.jsx)(iA, {
                      children: (0, EU.jsx)(Vy.e, {})
                    })
                  })]
                }), (0, EU.jsxs)(iA, {
                  children: [(0, EU.jsx)(Oz.b, {
                    placement: "topRight"
                  }), (0, EU.jsx)(JA, {})]
                })]
              }), (0, EU.jsx)("div", {
                className: "LeftCentre",
                children: (0, EU.jsx)(iA, {
                  children: (0, EU.jsx)(wA, {})
                })
              }), (0, EU.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": cU ? "" : void 0,
                children: [(0, EU.jsx)(tU.h, {
                  children: (0, EU.jsx)(GU.f, {})
                }), (0, EU.jsx)(iA, {
                  children: (0, EU.jsx)(VA, {})
                }), (0, EU.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": cU ? "" : void 0,
                  children: [(0, EU.jsx)("div", {
                    className: AU()("BottomLeftElements", {
                      Touch: cU
                    }),
                    children: (0, EU.jsxs)(iA, {
                      children: [(0, EU.jsx)(ay, {}), !cU && (0, EU.jsx)(OA.c, {})]
                    })
                  }), (0, EU.jsx)(iA, {
                    children: (0, EU.jsx)(lA, {})
                  }), (0, EU.jsx)(iA, {
                    children: (0, EU.jsx)(sc, {
                      isTouchScreen: cU
                    })
                  })]
                })]
              }), (0, EU.jsx)("div", {
                className: "MiddleLeft"
              }), cU && (0, EU.jsx)(iA, {
                children: (0, EU.jsx)(Yz, {})
              }), (0, EU.jsx)("div", {
                className: "CameraFadeHost",
                ref: IX.q
              })]
            }), (0, EU.jsx)(tU.h, {
              children: (0, EU.jsx)(BQ.c, {})
            }), (0, EU.jsx)(tU.h, {
              children: (0, EU.jsx)(YQ, {})
            }), (0, EU.jsx)(iA, {
              first: !0,
              children: (0, EU.jsx)(ty.e, {})
            }), (0, EU.jsx)(tU.h, {
              children: (0, EU.jsx)(vA, {})
            })]
          })
      }));

    function vA() {
      return (0, yU.useEffect)((() => {
        const UU = setTimeout((() => {
          (0, IU.g)()
        }), 0);
        return () => {
          clearTimeout(UU), IU.k.Zk(!1)
        }
      }), []), null
    }
    const VA = (0, yU.memo)((function() {
        const UU = (0, oU.j)("aimingOverlay", "none");
        (0, RU.e)();
        const XU = (0, BU.i)("middleTextUpper"),
          zU = (0, BU.i)("middleTextLower");
        return (0, EU.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === UU ? {
            visibility: "hidden"
          } : {},
          children: [(0, EU.jsx)(mA, {
            text: XU,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: sA
          }), (0, EU.jsx)(mA, {
            text: zU,
            className: "MiddleText",
            maxHeightFraction: nA
          })]
        })
      })),
      sA = .3,
      nA = .2;

    function mA(UU) {
      let {
        text: XU,
        className: zU,
        maxHeightFraction: cU
      } = UU;
      const QU = (0, yU.useRef)(null),
        AU = (0, yU.useRef)(null);
      return function(UU, XU, zU, cU) {
        (0, yU.useLayoutEffect)((() => {
          const cU = UU.current,
            yU = XU.current;
          if (!cU || !yU) return;
          let QU = -1,
            AU = -1;
          const FU = UU => (yU.style.setProperty("zoom", String(UU)), cU.getBoundingClientRect().height),
            oU = () => {
              const UU = document.documentElement.clientHeight * zU;
              let XU = 1;
              if (FU(1) > UU) {
                let zU = .5,
                  cU = 1;
                for (let XU = 0; XU < 6; XU++) {
                  const XU = (zU + cU) / 2;
                  FU(XU) <= UU ? zU = XU : cU = XU
                }
                XU = zU
              }
              AU = FU(XU), QU = cU.getBoundingClientRect().width
            };
          oU();
          let DU = 0;
          const EU = () => {
              cancelAnimationFrame(DU), DU = requestAnimationFrame(oU)
            },
            YU = new ResizeObserver((() => {
              const {
                width: UU,
                height: XU
              } = cU.getBoundingClientRect();
              UU === QU && XU === AU || EU()
            }));
          return YU.observe(cU), window.addEventListener("resize", EU), () => {
            YU.disconnect(), window.removeEventListener("resize", EU), cancelAnimationFrame(DU), yU.style.removeProperty("zoom")
          }
        }), [UU, XU, zU, cU])
      }(QU, AU, cU, XU.content), (0, EU.jsx)("div", {
        ref: QU,
        className: "MiddleTextFit",
        children: (0, EU.jsx)(aQ, {
          ref: AU,
          text: XU,
          className: zU
        })
      })
    }
    const lA = (0, yU.memo)((function() {
        const UU = (0, oU.j)("aimingOverlay", "none");
        (0, RU.e)();
        const XU = (0, BU.f)("useInventory");
        return (0, EU.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === UU ? {
            visibility: "hidden"
          } : {},
          children: [(0, EU.jsx)(YU, {}), (0, EU.jsx)(Oz.b, {}), (0, EU.jsx)(Sz, {}), (0, EU.jsx)(tU.h, {
            children: (0, EU.jsx)(My, {})
          }), (0, EU.jsxs)("div", {
            className: "HotBarRow",
            children: [XU ? (0, EU.jsx)(LU.d, {}) : (0, EU.jsx)(LU.g, {}), (0, EU.jsx)(CU, {})]
          })]
        })
      })),
      xA = (0, yU.memo)((function(UU) {
        let {
          showChat: XU
        } = UU;
        const {
          t: zU
        } = (0, nU.I)(), {
          clientEscMenuOptions: cU,
          sessionReplayRecording: QU,
          isTouchScreen: FU
        } = (0, rU.q)(["clientEscMenuOptions", "sessionReplayRecording", "isTouchScreen"]);
        (0, RU.e)();
        const {
          userContext: oU,
          isUserContextUpdating: DU
        } = (0, kU.d)(), YU = (0, BU.f)("hideCoordinates"), IU = (0, BU.f)("customVariationTitle"), {
          requestedGameNameWithVariation: pU,
          gameNameWithVariation: aU,
          lobbyName: tU,
          shownLobbyName: gU
        } = (0, uU.i)("connectedGame"), GU = (0, NU.d)(pU, tU, !1), [PU, WU] = (0, yU.useState)(null), dU = (0, ry.n)(aU || pU || ""), LU = IU || dU || "";
        (0, yU.useEffect)((() => {
          DU || zy.c.getFavouriteLobbies(oU).then((UU => {
            console.log("Got favourite lobbies", UU), WU(UU)
          }))
        }), [DU, oU]);
        const eU = (0, yU.useRef)(null);
        return (0, yU.useLayoutEffect)((() => {
          const UU = eU.current,
            XU = document.documentElement,
            zU = new ResizeObserver((() => {
              XU.style.setProperty("--InGameHeaderRowsHeight", `${UU.offsetHeight}px`)
            }));
          return zU.observe(UU), () => {
            zU.disconnect(), XU.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), Tc(eU), (0, EU.jsxs)(EU.Fragment, {
          children: [(0, EU.jsxs)("div", {
            className: AU()(Jc.f, {
              Touchscreen: FU
            }),
            ref: eU,
            children: [(0, EU.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, EU.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: UU => {
                  UU.stopPropagation(), UU.preventDefault()
                },
                onClick: () => {
                  rU.e.set({
                    openEverythingMenuName: uc.s.SETTINGS
                  })
                },
                children: [(0, EU.jsx)(Sy.b, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, EU.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, EU.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === GU && (0, EU.jsx)(Sy.b, {}), null !== GU && (0, EU.jsxs)(EU.Fragment, {
                  children: [GU, LU && ` ${LU}`]
                })]
              }), (0, EU.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, EU.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: gU
              }), (0, uy.A)(tU) && (0, EU.jsx)(ZU.d, {
                tooltipInner: (0, EU.jsx)("div", {
                  children: zU(null !== PU && PU.includes(tU) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, EU.jsx)("div", {
                  children: (0, EU.jsx)(Mz.q, {
                    isLiked: null !== PU && PU.includes(tU),
                    onClick: () => {
                      try {
                        if (!PU) return;
                        PU.includes(tU) ? (zy.c.unfavouriteLobby(oU, tU).catch((UU => {
                          console.error("Failed to favourite lobby", UU)
                        })), WU(PU.filter((UU => UU !== tU)))) : (zy.c.favouriteLobby(oU, tU).catch((UU => {
                          console.error("Failed to favourite lobby", UU)
                        })), WU([...PU, tU]))
                      } catch (UU) {
                        console.error("Failed to like lobby", UU)
                      }
                    },
                    isLoading: null === PU
                  })
                })
              }), (0, EU.jsx)(GQ, {})]
            }), (0, EU.jsx)(Ly, {
              show: cU.showFPS,
              asText: QU
            }), !YU && cU.showCoordinates && (0, EU.jsx)(wy, {}), !YU && cU.showChunkCoordinates && (0, EU.jsx)(qy, {}), (0, EU.jsx)(gQ, {})]
          }), (0, EU.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, EU.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: XU && (0, EU.jsx)(SU.b, {})
            })
          })]
        })
      })),
      JA = (0, yU.memo)((function() {
        (0, RU.e)();
        const UU = (0, BU.i)("RightInfoText"),
          [XU, zU] = (0, yU.useState)(null);
        return (0, oX.l)(XU, ".RightElements"), UU.hasText ? (0, EU.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, EU.jsx)(aQ, {
            ref: zU,
            text: UU,
            className: "RightInfoDiv",
            children: (0, EU.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, EU.jsx)(DU.d, {
                text: UU.content
              })
            })
          })
        }) : null
      }))
  },
  5360: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU
    });
    var cU = zU(61),
      yU = zU(320),
      QU = zU(1993),
      AU = zU(1305);

    function FU(UU) {
      let {
        text: XU
      } = UU;
      const zU = [];
      let FU = "";
      return (0, yU.rc)(XU).forEach(((UU, XU) => {
        if ("string" === typeof UU || !(0, QU.g)(UU.icon)) return void(FU += "string" === typeof UU ? UU : UU.icon);
        const yU = Math.max(0, FU.trimEnd().search(/\S{1,12}$/));
        zU.push((0, AU.jsxs)(cU.Fragment, {
          children: [FU.slice(0, yU), (0, AU.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [FU.slice(yU), (0, AU.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": UU.icon,
              children: (0, AU.jsx)(QU.c, {
                itemName: UU.icon,
                amount: 0
              })
            })]
          })]
        }, XU)), FU = ""
      })), zU.push(FU), (0, AU.jsx)(AU.Fragment, {
        children: zU
      })
    }
  },
  37238: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => NU,
      d: () => EU,
      h: () => YU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1993),
      FU = zU(1305);
    const oU = 350;
    let DU = 0;

    function EU() {
      return DU += 1, DU
    }

    function YU(UU, XU) {
      let zU = 0;
      for (const cU of UU) "ingredient" !== cU.kind && cU.DE === XU && (zU += cU.amount);
      return zU > 0 ? {
        idx: XU,
        amount: zU
      } : null
    }

    function NU(UU) {
      var XU, zU;
      let {
        anim: yU,
        onComplete: DU
      } = UU;
      const EU = null !== (XU = yU.delayMs) && void 0 !== XU ? XU : 0,
        YU = null !== (zU = yU.durationMs) && void 0 !== zU ? zU : oU,
        [NU, IU] = (0, cU.useState)(yU.from),
        [pU, aU] = (0, cU.useState)(0 === EU),
        [tU, gU] = (0, cU.useState)(!1),
        kU = (0, cU.useRef)(!1);
      return (0, cU.useEffect)((() => {
        let UU, XU;
        const zU = () => {
            kU.current = !0, aU(!0), UU = requestAnimationFrame((() => {
              XU = requestAnimationFrame((() => {
                IU({
                  x: yU.to.x,
                  y: yU.to.y
                }), gU(!0)
              }))
            }))
          },
          cU = kU.current ? 0 : EU;
        let QU;
        cU > 0 ? QU = setTimeout(zU, cU) : zU();
        const AU = setTimeout((() => {
          DU(yU.id)
        }), cU + YU + 50);
        return () => {
          clearTimeout(QU), cancelAnimationFrame(UU), cancelAnimationFrame(XU), clearTimeout(AU)
        }
      }), [yU.id, yU.to.x, yU.to.y, DU, EU, YU]), (0, FU.jsx)("div", {
        className: QU()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === yU.kind,
          Waiting: !pU,
          Arrived: tU
        }),
        style: {
          left: NU.x,
          top: NU.y,
          "--fly-duration": `${YU}ms`
        },
        children: (0, FU.jsx)(AU.c, {
          itemName: yU.itemName,
          amount: yU.amount
        })
      })
    }
  },
  37224: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => fU,
      g: () => MU
    });
    var cU = zU(61),
      yU = zU(2818),
      QU = zU(7176),
      AU = zU(2127),
      FU = zU(2616),
      oU = zU(9411),
      DU = zU(344),
      EU = zU(31),
      YU = zU(1492),
      NU = zU(42),
      IU = zU(1106),
      pU = zU.n(IU),
      aU = zU(320),
      tU = zU(37226),
      gU = zU(1978),
      kU = zU(2047),
      GU = zU(9258),
      BU = zU(1305);

    function ZU(UU) {
      var XU, zU;
      let {
        slotIdx: QU
      } = UU;
      const AU = (0, kU.e)("hotbar", (UU => {
          var XU;
          return null !== (XU = UU.items[QU]) && void 0 !== XU ? XU : null
        })),
        oU = (0, kU.e)("hotbar", (UU => UU.ammo)),
        [EU, YU] = (0, cU.useState)(!1),
        NU = (0, cU.useRef)(null),
        [IU, aU] = (0, cU.useState)(null),
        [tU, ZU] = (0, cU.useState)(null),
        RU = (0, FU.f)("maxAuraLevel"),
        PU = (0, yU.c)(),
        WU = (0, cU.useCallback)((() => {
          if (clearTimeout(NU.current), AU) {
            var UU, XU, zU, cU;
            const oU = AU.displayName,
              EU = [],
              YU = Array.isArray(oU) ? oU : [oU],
              NU = {
                fontStyle: null !== (UU = AU.attributes.customAttributes) && void 0 !== UU && UU.author ? "italic" : "normal"
              };
            for (const UU of YU) UU.str ? EU.push(UU) : EU.push({
              str: UU,
              style: NU
            });
            if (null !== (XU = AU.attributes.customAttributes) && void 0 !== XU && XU.enchantments) {
              EU.push(" ");
              const UU = Object.entries(AU.attributes.customAttributes.enchantments).sort(((UU, XU) => XU[1] - UU[1])),
                XU = AU.attributes.customAttributes.enchantmentData;
              for (const [zU, cU] of UU) {
                var yU, QU;
                const UU = null !== (yU = null === XU || void 0 === XU || null === (QU = XU[zU]) || void 0 === QU ? void 0 : QU.icon) && void 0 !== yU ? yU : `${zU} Enchantment`;
                var FU;
                if (cU < 4)
                  for (let XU = 0; XU < cU; XU++) EU.push({
                    icon: UU,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else EU.push({
                  icon: UU,
                  style: {
                    fontSize: "1.5em"
                  }
                }), EU.push(null !== (FU = (0, DU.Q)(cU)) && void 0 !== FU ? FU : cU.toString())
              }
            }
            aU(EU), ZU(null !== (zU = null === (cU = AU.attributes.customAttributes) || void 0 === cU ? void 0 : cU.enchantmentTier) && void 0 !== zU ? zU : null)
          } else aU(null), ZU(null);
          YU(!0), PU();
          const oU = null === AU || void 0 === AU ? void 0 : AU.attributes.customAttributes;
          void 0 === (null === oU || void 0 === oU ? void 0 : oU.shotsLeft) && (NU.current = setTimeout((() => {
            YU(!1)
          }), 2e3))
        }), [null === AU || void 0 === AU ? void 0 : AU.name, QU, null === AU || void 0 === AU ? void 0 : AU.instance, null === AU || void 0 === AU ? void 0 : AU.displayName]);
      (0, cU.useEffect)((() => (WU(), () => {
        clearTimeout(NU.current), YU(!1)
      })), [null === AU || void 0 === AU ? void 0 : AU.name, QU, null === AU || void 0 === AU ? void 0 : AU.instance, WU]);
      const dU = null === AU || void 0 === AU || null === (XU = AU.attributes.customAttributes) || void 0 === XU ? void 0 : XU.shotsLeft,
        LU = void 0 === dU ? null : (0, BU.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${dU}|${AU.requiresAmmo?`${oU}x${AU.clipSize}`:AU.clipSize}`
        }),
        eU = (0, GU.k)();
      return (0, BU.jsx)(BU.Fragment, {
        children: EU && AU && !eU.showing ? (0, BU.jsxs)("div", {
          className: pU()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === RU,
            Enchanted: null !== tU
          }),
          style: {
            "--enchantmentColour": null !== (zU = DU.pb[tU]) && void 0 !== zU ? zU : DU.pb.None,
            "--duration": tU ? (0, DU.ib)(tU) + "s" : void 0
          },
          children: [tU && (0, BU.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, BU.jsx)(gU.d, {
              text: IU
            }), LU]
          }), (0, BU.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, BU.jsx)(gU.d, {
              text: IU
            }), LU]
          })]
        }) : null
      })
    }
    var RU = zU(37238),
      PU = zU(27),
      WU = zU(2005),
      dU = zU(646),
      LU = zU(2621),
      eU = zU(3791),
      CU = zU(3796);
    var wU = zU(1124),
      qU = zU(1115),
      OU = zU(2668);

    function SU() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var rU = zU(9475),
      uU = zU(1511);
    const fU = (0, cU.memo)((function() {
      const [UU, XU] = (0, cU.useState)(0), zU = (0, FU.f)("useFullInventory"), AU = (0, FU.f)("highlightedHotbarSlots"), {
        isTouchScreen: oU,
        openInGameMenuName: DU
      } = (0, PU.q)(["isTouchScreen", "openInGameMenuName"]), NU = null !== DU && "inventory" !== DU, IU = (0, kU.i)("fullInventory") && "inventory" === DU, aU = function() {
        const UU = (0, wU.l)(((UU, XU) => `${UU}:${(0,qU.b)(UU,XU)?"portrait":"landscape"}`)),
          [XU, zU] = (0, cU.useState)(SU);
        return (0, cU.useLayoutEffect)((() => {
          zU(SU())
        }), [UU]), (0, YU.f)(OU.h, (() => {
          zU(SU())
        })), XU
      }(), gU = oU && !aU;
      ! function(UU, XU, zU) {
        (0, cU.useLayoutEffect)((() => {
          const cU = document.documentElement.classList;
          return UU && (cU.add("TouchHotbar"), cU.toggle("TouchHotbarKeysAbove", XU), cU.toggle("TouchHotbarHasBag", zU)), (0, eU.j)(), EU.k.UY(CU.e), () => {
            cU.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, eU.j)(), EU.k.UY(CU.e)
          }
        }), [UU, XU, zU])
      }(oU, gU, zU);
      const [GU, LU] = (0, QU.d)("changedHotbarUsingNumkeys", !0), rU = (0, kU.e)("hotbar", (UU => UU.selectedSlot)), uU = null !== rU && void 0 !== rU ? rU : UU, fU = (0, yU.c)(), vU = (0, cU.useRef)(null), VU = (0, YU.j)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, YU.f)("inventoryDraggedItemUpdated", (UU => {
        vU.current = UU, fU()
      })), (0, kU.b)("hotbarScrolled", (UU => {
        null === rU && mU(UU)
      })), (0, kU.b)("hotbarSlotRequested", (UU => {
        nU(UU), LU(!1)
      })), (0, kU.b)("numberKeyPressed", (() => {
        LU(!1)
      })), (0, kU.b)("hotbarDropRequested", (UU => {
        const XU = WU.gameBridge.latest("hotbar").items[uU];
        if (XU) {
          var zU;
          const cU = UU && null !== (zU = XU.amount) && void 0 !== zU ? zU : 1;
          WU.gameBridge.send("removeInventoryItem", {
            slot: uU,
            amount: cU,
            drop: !0
          })
        }
      }));
      const nU = UU => {
          WU.gameBridge.send("selectHotbarSlot", UU), XU(UU)
        },
        mU = UU => {
          nU((uU + UU + dU.o) % dU.o)
        };
      let lU, xU = null,
        JU = null,
        jU = UU => UU => {},
        KU = UU => XU => {
          nU(UU)
        },
        bU = UU => UU => {},
        TU = [];
      if (IU) {
        var hU;
        const UU = vU.current;
        if (null === UU || void 0 === UU || !UU.setHovered) return (0, BU.jsx)("div", {
          className: pU()("HotBarContainer", {
            Touch: oU,
            KeysAbove: gU
          }),
          children: (0, BU.jsx)("div", {
            className: "HotBar"
          })
        });
        xU = UU.draggedInfo, JU = UU.specialItemInfo, jU = UU.setHovered, KU = UU.pointerDown, bU = UU.pointerUp, lU = UU.variation, TU = null !== (hU = UU.craftFlyAnims) && void 0 !== hU ? hU : []
      }
      return (0, BU.jsxs)("div", {
        className: pU()("HotBarContainer", {
          Touch: oU,
          PopupOpen: oU && NU,
          KeysAbove: gU
        }),
        children: [(0, BU.jsxs)("div", {
          className: pU()("HotBar", {
            HoverDisabled: VU
          }),
          children: [oU && (0, BU.jsxs)(BU.Fragment, {
            children: [(0, BU.jsx)(HU, {
              useFullInventory: zU,
              inventoryOpen: IU
            }), (0, BU.jsx)(iU, {
              direction: "Previous",
              onPress: () => {
                mU(-1)
              }
            })]
          }), !oU && (0, BU.jsxs)(BU.Fragment, {
            children: [(0, BU.jsx)(MU, {}), (0, BU.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, BU.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((UU, XU) => (0, BU.jsx)(tU.e, {
              idx: XU,
              draggedInfo: xU,
              specialItemInfo: JU,
              craftFlyHoldbackInfo: (0, RU.h)(TU, XU),
              setHovered: jU(XU),
              pointerDown: KU(XU),
              pointerUp: bU(XU),
              variation: lU,
              isSelected: XU === uU,
              hotbarHighlighted: !0 === (null === AU || void 0 === AU ? void 0 : AU.includes(XU)),
              hoverDisabled: VU,
              showNumber: GU && !oU
            }, XU)))
          }), oU && (0, BU.jsx)(iU, {
            direction: "Next",
            onPress: () => {
              mU(1)
            }
          }), !oU && (0, BU.jsxs)(BU.Fragment, {
            children: [(0, BU.jsx)("div", {
              className: "HotBarFiller"
            }), (0, BU.jsx)("div", {
              className: pU()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !zU
              }),
              onPointerDown: () => {
                EU.k.UY("toggleMenu", "inventory")
              },
              children: (0, BU.jsx)(sU, {})
            })]
          })]
        }), (0, BU.jsx)(ZU, {
          slotIdx: uU
        })]
      })
    }));

    function iU(UU) {
      let {
        direction: XU,
        onPress: zU
      } = UU;
      return (0, BU.jsx)("div", {
        className: pU()("HotBarArrow", XU),
        ...uU.g,
        children: (0, BU.jsx)(AU.d, {
          icon: "Previous" === XU ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: zU
        })
      })
    }
    const HU = (0, cU.memo)((function(UU) {
        let {
          useFullInventory: XU,
          inventoryOpen: zU
        } = UU;
        const yU = (0, FU.f)("maxAuraLevel"),
          QU = (0, cU.useRef)(null),
          AU = (0, oU.c)();
        return function(UU, XU, zU) {
          (0, cU.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", XU), EU.k.UY(CU.e), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [XU]), (0, cU.useLayoutEffect)((() => {
            const XU = UU.current.closest(".BottomMiddleElements");
            return XU.classList.toggle("TouchInventoryOpen", zU), () => {
              XU.classList.remove("TouchInventoryOpen")
            }
          }), [UU, zU])
        }(QU, AU, zU), (0, rU.d)(QU, AU, zU), (0, BU.jsxs)("div", {
          ref: QU,
          className: pU()("TouchInventoryKeys", {
            NoAuraBar: 0 === yU,
            InventoryOpen: zU
          }),
          children: [(0, BU.jsx)(MU, {
            touchKey: !0
          }), (0, BU.jsx)("div", {
            className: pU()("TouchInventoryKey BagKey", {
              Hidden: !XU
            }),
            ...uU.g,
            children: (0, BU.jsx)(sU, {
              touchKey: !0
            })
          })]
        })
      })),
      MU = (0, cU.memo)((function(UU) {
        let {
          touchKey: XU = !1
        } = UU;
        const zU = (0, oU.c)();
        return (0, BU.jsx)("div", {
          className: XU ? pU()("TouchInventoryKey ShopKey", {
            Hidden: !zU
          }) : pU()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !zU
          }),
          ...XU ? uU.g : {},
          children: (0, BU.jsx)(AU.d, {
            icon: (0, DU.kc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              zU && PU.e.set({
                openEverythingMenuName: aU.s.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function vU(UU) {
      let {
        player: XU
      } = UU;
      return XU.some((UU => null !== UU && DU._c.includes(UU.name)))
    }

    function VU(UU) {
      UU.creative || NU.k.getItem("LogInInventoryRedDotTutorialComplete") || (vU(UU) ? (EU.k.UY("RedDotOpenInventoryIcon", !0), EU.k.UY("TouchTutorialOpenInventoryIcon", !0)) : (EU.k.UY("RedDotOpenInventoryIcon", !1), EU.k.UY("TouchTutorialOpenInventoryIcon", !1)))
    }
    const sU = (0, cU.memo)((function(UU) {
      let {
        touchKey: XU = !1
      } = UU;
      (0, cU.useEffect)((() => {
        VU(WU.gameBridge.latest("inventory"))
      }), []), (0, kU.b)("inventory", VU);
      const zU = (0, LU.k)();
      return (0, YU.f)("toggleMenu", (UU => {
        zU.shown && (null !== UU && void 0 !== UU && UU.startsWith("inventory") && vU(WU.gameBridge.latest("inventory")) ? (NU.k.setItem("LogInInventoryRedDotTutorialComplete", !0), EU.k.UY("RedDotOpenInventoryIcon", !1), EU.k.UY("TouchTutorialOpenInventoryIcon", !1)) : "shop" === UU && EU.k.UY("showShopTouchTutorial", !1))
      })), XU ? (0, BU.jsx)(AU.d, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          EU.k.UY("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, BU.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          EU.k.UY("toggleMenu", "inventory")
        },
        children: (0, BU.jsx)(AU.d, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: UU => {
            EU.k.UY("toggleMenu", "inventory"), UU.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  37226: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => tU,
      g: () => pU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1998),
      FU = zU(1993),
      oU = zU(2005),
      DU = zU(2047),
      EU = zU(37234),
      YU = zU(34878),
      NU = zU(1444),
      IU = zU(1305);
    const pU = (UU, XU, zU) => {
      let cU = XU,
        yU = !1;
      for (const QU of zU)(null === QU || void 0 === QU ? void 0 : QU.idx) === UU && (yU = !0, cU > 0 && (cU -= QU.amount));
      return {
        displayedAmt: cU,
        shown: !yU || cU > 0
      }
    };
    const aU = UU => {
        let {
          idx: XU
        } = UU;
        return (0, NU.F)() ? null : (0, IU.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: XU < 9 ? XU + 1 : 0
        })
      },
      tU = (0, cU.memo)((function(UU) {
        var XU, zU, cU;
        let {
          idx: yU,
          setHovered: NU,
          pointerDown: tU,
          pointerUp: gU,
          draggedInfo: kU,
          specialItemInfo: GU,
          craftFlyHoldbackInfo: BU,
          defaultIconB64: ZU = null,
          variation: RU,
          isSelected: PU = !1,
          hotbarHighlighted: WU = !1,
          hoverDisabled: dU = !1,
          showNumber: LU = !1,
          showNewDot: eU = !1
        } = UU;
        const CU = (0, DU.e)("inventory", (UU => yU === EU.e ? null : (0, YU.k)(UU, yU)));
        let wU, qU, OU, SU;
        if (yU === EU.e) GU && (wU = GU.name, OU = GU.amount, SU = GU.attributes);
        else if (CU) {
          var rU;
          wU = CU.name, qU = CU.icon, OU = null !== (rU = CU.amount) && void 0 !== rU ? rU : 0, SU = CU.attributes
        }
        const uU = null === (XU = SU) || void 0 === XU || null === (zU = XU.customAttributes) || void 0 === zU ? void 0 : zU.enchantmentTier,
          fU = (0, AU.g)(SU),
          {
            displayedAmt: iU,
            shown: HU
          } = pU(yU, OU, [kU, GU, BU]),
          MU = wU && HU,
          vU = void 0 !== RU && function(UU, XU) {
            const {
              enchantable: zU,
              salvageable: cU
            } = oU.gameBridge.latest("stationItems");
            return "Enchanting Table" === UU ? !0 === zU[XU] : "Salvaging Table" === UU && !0 === cU[XU]
          }(RU, wU);
        return (0, IU.jsxs)("div", {
          className: QU()("InvenItem", {
            Highlighted: MU && vU,
            Selected: PU,
            HotbarHighlighted: WU,
            HoverDisabled: dU
          }),
          onPointerEnter: () => {
            null === NU || void 0 === NU || NU(!0)
          },
          onPointerLeave: () => {
            null === NU || void 0 === NU || NU(!1)
          },
          onPointerDown: tU,
          onPointerUp: gU,
          "data-inven-idx": yU,
          children: [MU && (0, IU.jsx)(FU.c, {
            itemName: null !== (cU = qU) && void 0 !== cU ? cU : wU,
            amount: iU,
            enchantmentTier: uU,
            bar: fU
          }), MU && eU && (0, IU.jsx)("div", {
            className: "InvenItemNewDot"
          }), LU && (0, IU.jsx)(aU, {
            idx: yU
          }), ZU && !MU && (0, IU.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${ZU})`
            }
          })]
        })
      }))
  },
  37234: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU,
      e: () => yU
    });
    const cU = -1,
      yU = -2
  },
  37737: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => dU
    });
    var cU = zU(61),
      yU = zU(37740),
      QU = zU(1978),
      AU = zU(625),
      FU = zU(31),
      oU = zU(1106),
      DU = zU.n(oU),
      EU = zU(37266),
      YU = zU(2843),
      NU = zU(3004),
      IU = zU(2868),
      pU = zU(2845),
      aU = zU(3982),
      tU = zU(37275),
      gU = zU(27),
      kU = zU(2101),
      GU = zU(2500),
      BU = zU(1236),
      ZU = zU(5433),
      RU = zU(2047),
      PU = zU(97),
      WU = zU(1305);
    const dU = (0, cU.memo)((function() {
      const UU = (0, yU.d)(),
        XU = (0, RU.i)("players"),
        zU = (0, RU.i)("lobbyLeaderboardRows"),
        FU = (0, RU.i)("hiddenPlayerNames"),
        oU = (0, cU.useRef)(null),
        [DU, EU] = (0, cU.useReducer)((UU => UU + 1), 0);
      return (0, cU.useEffect)((() => (0, kU.e)((() => {
        EU()
      }))), []), (0, WU.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, WU.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!UU) return (0, WU.jsx)(WU.Fragment, {});
            const cU = [...XU.ids],
              yU = {},
              DU = {};
            for (const UU of cU) {
              var EU, YU;
              yU[UU] = null === (EU = zU[UU]) || void 0 === EU ? void 0 : EU.colour;
              const XU = null === (YU = zU[UU]) || void 0 === YU ? void 0 : YU.values;
              XU && (DU[UU] = {
                ...XU
              })
            }
            const IU = Object.keys(UU);
            IU.sort(((XU, zU) => UU[XU].sortPriority - UU[zU].sortPriority)), cU.sort(((XU, zU) => {
              if (!DU[XU] || !DU[zU]) return 0;
              for (const cU of IU) {
                const yU = DU[XU][cU],
                  QU = DU[zU][cU];
                let AU = 0;
                if ("string" == typeof yU && "string" == typeof QU ? AU = yU.localeCompare(QU) : "number" == typeof yU && "number" == typeof QU ? AU = yU - QU : "number" == typeof yU && "string" == typeof QU ? AU = 1 : "string" == typeof yU && "number" == typeof QU && (AU = -1), AU) return AU * ("ascending" === UU[cU].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const UU of cU) {
              var pU, aU, tU;
              const {
                name: cU,
                ranks: yU,
                cosmetics: QU
              } = XU.byId[UU], FU = [], oU = null !== (pU = null === (aU = zU[UU]) || void 0 === aU || null === (tU = aU.tags) || void 0 === tU ? void 0 : tU.flatMap((UU => 0 === UU.length ? UU : [...UU, String.fromCharCode(8198)]))) && void 0 !== pU ? pU : [];
              FU.push(...oU), FU.push(...(0, BU.t)(yU, cU, (null === QU || void 0 === QU ? void 0 : QU.nameColour) === AU.e || null === QU || void 0 === QU ? void 0 : QU.nameColour)), DU[UU] ??= {}, DU[UU].name = FU
            }

            function gU(UU, zU) {
              if (DU[UU] && void 0 !== DU[UU][zU]) {
                if ("name" === zU) {
                  const {
                    name: cU,
                    cosmetics: yU
                  } = XU.byId[UU];
                  return (0, WU.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [yU && (0, WU.jsx)(GU.b, {
                      cosmetics: yU
                    }), " ", (0, WU.jsx)(QU.d, {
                      text: DU[UU][zU],
                      friendBadgeFor: (0, kU.i)(cU, FU) ? cU : void 0
                    })]
                  })
                }
                return (0, WU.jsx)(QU.d, {
                  text: DU[UU][zU]
                })
              }
              return ""
            }
            const RU = Object.keys(UU).filter((XU => !0 !== UU[XU].hidden)).map((XU => {
              var zU;
              return {
                key: XU,
                header: (0, WU.jsx)(QU.d, {
                  text: null !== (zU = UU[XU].displayName) && void 0 !== zU ? zU : ""
                })
              }
            }));
            return (0, WU.jsx)("div", {
              ref: oU,
              className: "LobbyLeaderboard",
              children: (0, WU.jsx)(ZU.b, {
                columns: RU,
                rows: cU,
                getRowKey: UU => UU,
                renderRow: zU => {
                  const cU = zU !== XU.localId;
                  return (0, WU.jsx)(LU, {
                    playerId: zU,
                    playerName: XU.byId[zU].name,
                    isOtherPlayer: cU,
                    opensProfileCard: (0, NU.g)(cU, XU.byId[zU].name, FU),
                    lobbyLeaderboardInfo: UU,
                    getPlayerValue: gU,
                    playerColors: yU
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function LU(UU) {
      let {
        playerId: XU,
        playerName: zU,
        isOtherPlayer: yU,
        opensProfileCard: QU,
        lobbyLeaderboardInfo: AU,
        getPlayerValue: oU,
        playerColors: kU
      } = UU;
      const GU = (0, cU.useRef)(null);
      (0, cU.useEffect)((() => () => {
        YU.d.closeIfOwner(GU)
      }), []);
      const BU = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            FU.k.UY("OpenReportMenu", {
              playerEId: XU,
              playerName: zU,
              TE: null,
              serverChatMsgId: null
            })
          }
        },
        ZU = () => ({
          ...(0, NU.d)(XU, zU),
          showLocation: !1,
          status: null,
          extraActions: [BU],
          moderationActions: null === zU ? [] : (0, tU.d)(zU),
          friendRequestSource: "leaderboard"
        });
      return (0, WU.jsxs)("tr", {
        ref: GU,
        "data-pad-focusable": QU || void 0,
        [YU.g]: QU || void 0,
        onClick: QU ? () => {
          var UU;
          YU.d.toggle(GU, {
            ...ZU(),
            anchor: null !== (UU = GU.current.querySelector(".PlayerPfpAndName")) && void 0 !== UU ? UU : GU.current
          })
        } : void 0,
        onContextMenu: QU ? UU => {
          (0, IU.d)(GU, UU, ZU(), gU.e.get("isTouchScreen"))
        } : void 0,
        onPointerDown: QU ? UU => {
          (0, pU.c)(UU, (() => (0, NU.d)(XU, zU).playerSocialPreview))
        } : void 0,
        children: [Object.keys(AU).map((UU => !0 === AU[UU].hidden ? null : (0, WU.jsxs)("td", {
          className: DU()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !yU
          }),
          children: [(0, WU.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: oU(XU, UU)
          }), (0, WU.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: kU[XU]
            }
          })]
        }, UU))), yU && !QU && (0, WU.jsx)(EU.d, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: GU,
          options: [{
            icon: BU.icon,
            text: BU.text,
            onPointerDown: BU.onClick
          }, ...null === zU || PU.featureFlags.useSocialFeatures ? [] : (0, aU.d)(null, zU)]
        })]
      })
    }
  },
  37275: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU
    });
    var cU = zU(2032),
      yU = zU(2627),
      QU = zU(37279);
    const AU = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function FU(UU, XU) {
      return async () => function(UU, XU, zU) {
        return null === XU ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : XU.ok ? {
          message: {
            key: AU[UU.type]
          },
          next: zU
        } : {
          message: {
            fromServer: XU.message
          },
          next: null
        }
      }(UU, await (0, QU.g)(UU), XU())
    }

    function oU(UU) {
      return {
        kind: "act",
        icon: "gavel",
        text: "lobbyManageEntry:ban",
        destructive: !0,
        confirm: "lobbyManageEntry:banConfirm",
        analyticsClick: {
          id: "lobby_manage.ban",
          value: "profile_card"
        },
        run: FU({
          type: "ban",
          name: UU
        }, (() => function(UU) {
          return {
            kind: "act",
            icon: "user-unlock",
            text: "lobbyManageEntry:unban",
            destructive: !1,
            confirm: null,
            analyticsClick: {
              id: "lobby_manage.unban",
              value: "profile_card"
            },
            run: FU({
              type: "unban",
              name: UU
            }, (() => null))
          }
        }(UU)))
      }
    }

    function DU(UU, XU) {
      if (null === UU) return [];
      const zU = [],
        cU = function(UU, XU) {
          var zU, cU;
          return null !== (zU = null !== (cU = UU.here.find((UU => UU.name === XU))) && void 0 !== cU ? cU : UU.away.find((UU => UU.name === XU))) && void 0 !== zU ? zU : null
        }(UU, XU);
      var QU, AU;
      return null !== cU && void 0 !== cU && cU.can.kick && zU.push((QU = XU, AU = cU.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: FU({
          type: "kick",
          name: QU
        }, (() => AU ? oU(QU) : null))
      })), null !== cU && void 0 !== cU && cU.can.ban && zU.push(oU(XU)), zU.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, yU.f)({
            page: "players",
            focusName: XU,
            source: "profile_card"
          })
        }
      }), zU
    }

    function EU(UU) {
      var XU;
      return DU(null !== (XU = cU.d.get("lobbyManage")) && void 0 !== XU ? XU : null, UU)
    }
  },
  37279: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      g: () => oU
    });
    var cU = zU(1521),
      yU = zU(2032),
      QU = zU(2005);
    const AU = 1e4;
    let FU = 0;

    function oU(UU) {
      const XU = ++FU;
      return new Promise((zU => {
        const FU = XU => {
            oU(), clearTimeout(DU), !1 === (null === XU || void 0 === XU ? void 0 : XU.ok) && (0, cU.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: UU.type
            }), zU(XU)
          },
          oU = yU.d.subscribe("lobbyManage", (UU => {
            const zU = function(UU, XU) {
              var zU;
              return null !== (zU = null === UU || void 0 === UU ? void 0 : UU.results.find((UU => UU.requestId === XU))) && void 0 !== zU ? zU : null
            }(UU, XU);
            null !== zU && FU(zU)
          })),
          DU = setTimeout((() => {
            FU(null)
          }), AU);
        QU.gameBridge.send("lobbyManage", {
          ...UU,
          requestId: XU
        })
      }))
    }
    const DU = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class EU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oU;
        this.onChange = UU, this.sendAction = XU, this.pending = new Map, this.statuses = new Map
      }
      send(UU, XU, zU) {
        var cU;
        return this.statuses.delete(XU), this.pending.set(XU, (null !== (cU = this.pending.get(XU)) && void 0 !== cU ? cU : 0) + 1), this.sendAction(UU).then((UU => {
          var cU;
          const yU = null !== UU && void 0 !== UU ? UU : {
              requestId: -1,
              ok: !1,
              message: DU
            },
            QU = (null !== (cU = this.pending.get(XU)) && void 0 !== cU ? cU : 1) - 1;
          QU > 0 ? this.pending.set(XU, QU) : this.pending.delete(XU);
          const AU = !yU.ok || yU.message.length > 0 ? yU.message : null === zU ? null : [zU];
          return null !== AU && this.statuses.set(XU, {
            ok: yU.ok,
            text: AU,
            until: Date.now() + 4e3
          }), this.onChange(), yU
        }))
      }
      show(UU, XU) {
        this.statuses.set(UU, {
          ...XU,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(UU) {
        for (const [XU, zU] of this.statuses) zU.until <= UU && this.statuses.delete(XU)
      }
      nextDeadline() {
        let UU = null;
        for (const zU of this.statuses.values()) {
          var XU;
          UU = Math.min(null !== (XU = UU) && void 0 !== XU ? XU : 1 / 0, zU.until)
        }
        return UU
      }
      statusOf(UU, XU) {
        const zU = this.statuses.get(UU);
        return !zU || zU.until <= XU ? null : {
          ok: zU.ok,
          text: zU.text
        }
      }
      isPending(UU) {
        return this.pending.has(UU)
      }
    }
  },
  5299: (UU, XU, zU) => {
    zU.d(XU, {
      g: () => kU,
      d: () => gU
    });
    var cU = zU(61),
      yU = zU(1492),
      QU = zU(1978),
      AU = zU(5301),
      FU = zU(1305);
    const oU = (0, cU.memo)((function(UU) {
      let {
        initialParameters: XU
      } = UU;
      const zU = (0, cU.useRef)(null),
        yU = (0, cU.useRef)(null),
        oU = (0, cU.useRef)(0),
        DU = (0, cU.useRef)(null),
        EU = XU.description,
        YU = XU.iz,
        {
          scale: NU,
          rotation: IU
        } = null !== XU && void 0 !== XU ? XU : {},
        pU = (0, AU.d)();
      return (0, cU.useEffect)((() => {
        const UU = pU.onFrame((() => {
          const UU = pU.getState();
          if (!UU.isActive || !zU.current || !yU.current) return;
          const XU = UU.state;
          if (zU.current.value = XU.progress, XU.clickCount > oU.current) {
            oU.current = XU.clickCount;
            const UU = yU.current;
            UU.classList.add("pulse"), DU.current = setTimeout((() => {
              UU.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(DU.current), UU()
        }
      }), [pU]), (0, FU.jsx)(FU.Fragment, {
        children: (0, FU.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== NU && {
              "--scale": NU
            },
            ...null !== IU && {
              "--rotation": `${IU}deg`
            }
          },
          children: [(0, FU.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: zU
          }), (0, FU.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: yU,
            children: (0, FU.jsx)(QU.d, {
              text: [{
                icon: YU
              }]
            })
          }), (0, FU.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, FU.jsx)(QU.d, {
              text: EU
            })
          })]
        })
      })
    }));
    var DU = zU(1106),
      EU = zU.n(DU);
    const YU = 2 * Math.PI * 90,
      NU = (0, cU.memo)((function(UU) {
        let {
          initialParameters: XU
        } = UU;
        const zU = (0, cU.useRef)(null),
          yU = (0, cU.useRef)(null),
          oU = (0, cU.useRef)(null),
          DU = XU.label,
          NU = XU.icon,
          IU = XU.Vz,
          {
            scale: pU,
            rotation: aU,
            sz: tU
          } = null !== XU && void 0 !== XU ? XU : {},
          gU = (0, AU.d)();
        return (0, cU.useEffect)((() => {
          const UU = gU.onFrame((() => {
            var UU, XU;
            const cU = gU.getState();
            if (!cU.isActive || !yU.current) return;
            const QU = cU.state,
              AU = null !== (UU = QU.timeRemaining) && void 0 !== UU ? UU : 0,
              FU = null !== (XU = QU.vz) && void 0 !== XU ? XU : 1,
              DU = YU * (1 - AU / FU);
            yU.current.style.strokeDashoffset = `${DU}`, zU.current && (zU.current.style.opacity = AU > 0 ? "1" : "0"), oU.current && IU && (oU.current.textContent = `${(AU/1e3).toFixed(1)}s`)
          }));
          return () => {
            UU()
          }
        }), [gU, IU]), (0, FU.jsxs)("div", {
          className: "QTETimedClick",
          ref: zU,
          style: {
            ...null !== pU && {
              "--scale": pU
            },
            ...null !== aU && {
              "--rotation": `${aU}deg`
            }
          },
          children: [(0, FU.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, FU.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, FU.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, FU.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: YU,
                ref: yU
              })]
            }), (0, FU.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, FU.jsx)(QU.d, {
                text: [{
                  icon: NU
                }],
                className: EU()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: tU
                })
              })
            })]
          }), (0, FU.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, FU.jsx)(QU.d, {
              text: DU,
              className: "QTETimedClickLabelText"
            }), IU && (0, FU.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: oU
            })]
          })]
        })
      })),
      IU = (0, cU.memo)((function(UU) {
        let {
          initialParameters: XU
        } = UU;
        const zU = (0, cU.useRef)(null),
          yU = (0, cU.useRef)(null),
          oU = (0, cU.useRef)(null),
          DU = (0, cU.useRef)(!1),
          EU = XU.description,
          YU = null === XU || void 0 === XU ? void 0 : XU.icon,
          NU = (0, AU.d)();
        return (0, cU.useEffect)((() => {
          const UU = NU.onFrame((() => {
            const UU = NU.getState();
            if (!UU.isActive) return;
            const XU = UU.state;
            if (zU.current) {
              const UU = 100 * (XU.catchZonePosition - XU.mz / 2);
              zU.current.style.left = `${UU}%`, zU.current.style.width = 100 * XU.mz + "%", XU.isCatching !== DU.current && (DU.current = XU.isCatching, XU.isCatching ? zU.current.classList.add("catching") : zU.current.classList.remove("catching"))
            }
            yU.current && (yU.current.style.left = 100 * XU.moverPosition + "%"), oU.current && (oU.current.value = XU.progress)
          }));
          return () => {
            UU()
          }
        }), [NU]), (0, FU.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, FU.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, FU.jsx)(QU.d, {
              text: EU
            })
          }), (0, FU.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: oU
          }), (0, FU.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, FU.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: zU
            }), (0, FU.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: yU,
              children: (0, FU.jsx)("span", {
                children: YU && (0, FU.jsx)(QU.d, {
                  text: [{
                    icon: YU,
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
    var pU = zU(646);
    const aU = (0, cU.memo)((function(UU) {
        let {
          initialParameters: XU
        } = UU;
        const zU = (0, cU.useRef)(null),
          yU = XU.label,
          oU = XU.Tz,
          {
            icon: DU,
            scale: EU,
            rotation: YU
          } = null !== XU && void 0 !== XU ? XU : {},
          NU = 100 * (.5 - oU / 2),
          IU = 100 * oU,
          aU = (0, AU.d)();
        return (0, cU.useEffect)((() => {
          const UU = aU.onFrame((() => {
            const UU = aU.getState();
            if (!UU.isActive || !zU.current) return;
            const XU = UU.state;
            zU.current.style.left = 100 * XU.markerPosition + "%"
          }));
          return () => {
            UU()
          }
        }), [aU]), (0, FU.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, pU.P)(EU) && {
              "--scale": EU
            },
            ...!(0, pU.P)(YU) && {
              "--rotation": `${YU}deg`
            }
          },
          children: [DU && (0, FU.jsx)(QU.d, {
            text: [{
              icon: DU
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, FU.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, FU.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${NU}%`,
                width: `${IU}%`
              }
            }), (0, FU.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: zU
            })]
          }), (0, FU.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, FU.jsx)(QU.d, {
              text: yU
            })
          })]
        })
      })),
      tU = (0, cU.memo)((function(UU) {
        let {
          initialParameters: XU
        } = UU;
        const zU = (0, cU.useRef)(null),
          [yU, oU] = (0, cU.useState)((() => new Array(XU.Uc).fill("pending"))),
          [DU, EU] = (0, cU.useState)((() => {
            const UU = XU.yc;
            return (0, pU.P)(UU) || UU <= 0 ? [] : new Array(UU).fill("pending")
          })),
          YU = XU.label,
          {
            icon: NU
          } = XU,
          IU = (0, cU.useRef)(0),
          aU = (0, cU.useRef)(0),
          tU = (0, cU.useRef)([]),
          gU = (0, AU.d)();
        return (0, cU.useEffect)((() => {
          const UU = gU.onFrame((() => {
            const UU = gU.getState();
            if (!UU.isActive || !zU.current) return;
            const XU = UU.state,
              cU = 30 + 60 * XU.outerCircleProgress;
            if (zU.current.setAttribute("r", String(cU)), !0 === XU.lastClickResult && XU.successes > IU.current) {
              zU.current.classList.remove("QTERhythmClickOuterCircle--miss"), zU.current.classList.add("QTERhythmClickOuterCircle--hit");
              const UU = setTimeout((() => {
                var UU;
                null === (UU = zU.current) || void 0 === UU || UU.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              tU.current.push(UU)
            } else if (!1 === XU.lastClickResult && XU.misses > aU.current) {
              zU.current.classList.remove("QTERhythmClickOuterCircle--hit"), zU.current.classList.add("QTERhythmClickOuterCircle--miss");
              const UU = setTimeout((() => {
                var UU;
                null === (UU = zU.current) || void 0 === UU || UU.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              tU.current.push(UU)
            }
            XU.successes === IU.current && XU.misses === aU.current || (IU.current = XU.successes, aU.current = XU.misses, oU((UU => {
              const zU = [...UU];
              for (let cU = 0; cU < XU.Uc; cU++) zU[cU] = cU < XU.successes ? "success" : "pending";
              return zU
            })), EU((UU => {
              if (0 === UU.length) return UU;
              const zU = [...UU];
              for (let cU = 0; cU < zU.length; cU++) zU[cU] = cU < XU.misses ? "miss" : "pending";
              return zU
            })))
          }));
          return () => {
            UU();
            for (const UU of tU.current) clearTimeout(UU);
            tU.current = []
          }
        }), [gU]), (0, FU.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, FU.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: yU.map(((UU, XU) => (0, FU.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === UU ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, XU)))
          }), (0, FU.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, FU.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, FU.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, FU.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: zU
              })]
            }), NU && (0, FU.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, FU.jsx)(QU.d, {
                text: [{
                  icon: NU
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), DU.length > 0 && (0, FU.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: DU.map(((UU, XU) => (0, FU.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === UU ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, XU)))
          }), (0, FU.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, FU.jsx)(QU.d, {
              text: YU
            })
          })]
        })
      }));

    function gU(UU) {
      let {
        qte: XU
      } = UU;
      switch (XU.type) {
        case "progressBar":
          return (0, FU.jsx)(oU, {
            initialParameters: XU.parameters
          });
        case "timedClick":
          return (0, FU.jsx)(NU, {
            initialParameters: XU.parameters
          });
        case "gravityBar":
          return (0, FU.jsx)(IU, {
            initialParameters: XU.parameters
          });
        case "precisionBar":
          return (0, FU.jsx)(aU, {
            initialParameters: XU.parameters
          });
        case "rhythmClick":
          return (0, FU.jsx)(tU, {
            initialParameters: XU.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const kU = (0, cU.memo)((function() {
      const [UU, XU] = (0, cU.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, yU.f)("qteStateUpdated", (UU => {
        XU(UU)
      })), UU.isActive && UU.type ? (0, FU.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, FU.jsx)(gU, {
          qte: UU
        })
      }) : null
    }))
  },
  5301: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU,
      d: () => oU
    });
    var cU = zU(61),
      yU = zU(1322),
      QU = zU(5303);
    const AU = {
        getState: () => QU.e.getCurrentState(),
        onFrame: yU.r
      },
      FU = (0, cU.createContext)(AU);

    function oU() {
      return (0, cU.useContext)(FU)
    }
  },
  37046: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU,
      f: () => NU
    });
    var cU = zU(61),
      yU = zU(1410),
      QU = zU(1193),
      AU = zU(1384),
      FU = zU(3869),
      oU = zU(5454),
      DU = zU(1305);

    function EU(UU) {
      let {
        loading: XU,
        schematics: zU,
        onSchematicPicked: cU,
        selectedSchematicIdList: yU = [],
        disableAutoExport: oU
      } = UU;
      const {
        t: EU
      } = (0, QU.I)();
      return (0, DU.jsxs)("div", {
        className: "SchematicList",
        children: [XU && (0, DU.jsx)(AU.b, {}), !XU && 0 === zU.length && (0, DU.jsx)("div", {
          className: "NoSchematicsText",
          children: EU("worldBuilder:noSavedSchematic")
        }), !XU && zU.map((UU => (0, DU.jsx)(FU.g, {
          source: {
            type: "schematic",
            schematic: UU
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            cU(UU)
          },
          isSelected: yU.includes(UU.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: UU.isAutoExported && oU,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, UU.schematicId)))]
      })
    }

    function YU(UU) {
      let {
        ownedSchematics: XU,
        currentWorldSchematicId: zU,
        onClose: yU
      } = UU;
      const {
        t: AU
      } = (0, QU.I)(), [FU, YU] = (0, cU.useState)(null);
      return (0, DU.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === FU && (0, DU.jsxs)(DU.Fragment, {
          children: [(0, DU.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: AU("worldBuilder:schematicList")
          }), (0, DU.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: AU("worldBuilder:clickSchematicForOptions")
          }), (0, DU.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, DU.jsx)(EU, {
              loading: !1,
              schematics: XU,
              onSchematicPicked: UU => {
                YU(UU)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== FU && (0, DU.jsx)(oU.e, {
          schematic: FU,
          inSourceWorld: FU.schematicId === zU,
          onSchematicUpdate: UU => {
            YU(UU)
          },
          onClose: () => {
            YU(null), yU()
          }
        })]
      })
    }

    function NU(UU) {
      let {
        ownedSchematics: XU,
        currentWorldSchematicId: zU,
        onClose: cU
      } = UU;
      yU.NotificationProvider.showCustomPopup({
        body: UU => (0, DU.jsx)(YU, {
          ownedSchematics: XU,
          currentWorldSchematicId: zU,
          onClose: UU
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: cU,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37653: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => ZU,
      e: () => BU
    });
    var cU = zU(4622),
      yU = zU(1492),
      QU = zU(61),
      AU = zU(7056),
      FU = zU(4612),
      oU = zU(1310),
      DU = zU(2005),
      EU = zU(1978),
      YU = zU(1494),
      NU = zU(1193),
      IU = zU(37659),
      pU = zU(1106),
      aU = zU.n(pU),
      tU = zU(1349),
      gU = zU(1390),
      kU = zU(1294),
      GU = zU(1305);
    const BU = "SleepingOverlay";

    function ZU() {
      const {
        t: UU
      } = (0, NU.I)(), [XU, zU] = (0, QU.useState)(!1), [pU, ZU] = (0, QU.useState)(null), [PU, WU] = (0, QU.useState)(1), [dU, LU] = (0, QU.useState)(!1), [eU, CU] = (0, QU.useState)(!1), wU = (0, QU.useRef)(0), qU = (0, QU.useRef)(!1), OU = (0, QU.useRef)(!1), SU = (0, QU.useRef)(), rU = (0, QU.useRef)(null);

      function uU() {
        const UU = null !== pU && void 0 !== pU ? pU : "Rested Speed";
        DU.gameBridge.send("wakeUp", eU ? UU : null), rU.current = null, zU(!1), ZU(null), WU(1), LU(!1), CU(!1)
      }

      function fU() {
        return !dU && (uU(), !0)
      }
      return (0, yU.f)("PlayerPhysicsTypeUpdate", (UU => {
        UU !== rU.current && (rU.current = UU, UU === AU.o.SLEEPING ? (OU.current || (wU.current = DU.gameBridge.lookup("cameraZoom", null), OU.current = !0), qU.current = !0, DU.gameBridge.send("setCameraZoom", 3), zU(!0), WU(function() {
          for (const UU of DU.gameBridge.lookup("blocksStandingOn", null)) {
            if (IU.b.leafBeds.includes(UU)) return console.log(`Found leaf bed: ${UU}`), 1;
            if (IU.b.woolBeds.includes(UU)) return console.log(`Found woold bed: ${UU}`), 2;
            if (IU.b.strongBeds.includes(UU)) return console.log(`Found strong bed ${UU}`), 3
          }
          return 1
        }())) : (OU.current = !1, zU(!1), ZU(null), WU(1)))
      })), (0, QU.useEffect)((() => () => {
        (0, oU.s)(BU)
      }), []), (0, QU.useEffect)((() => {
        XU ? (0, oU.u)(BU) : ((0, oU.s)(BU), qU.current && (DU.gameBridge.send("setCameraZoom", wU.current), qU.current = !1))
      }), [XU]), (0, kU.t)("overlay", SU, fU, XU), (0, GU.jsx)(cU.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: XU,
        timeout: 300,
        nodeRef: SU,
        unmountOnExit: !0,
        children: (0, GU.jsx)("div", {
          ref: SU,
          onClick: UU => {
            fU() && UU.stopPropagation()
          },
          children: (0, GU.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, GU.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: FU.f.map((XU => (0, GU.jsxs)(RU, {
                restedEffect: XU,
                xD: pU,
                setChosenRestedEffect: ZU,
                children: [(0, GU.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, GU.jsx)(EU.d, {
                    text: [{
                      icon: XU
                    }]
                  }), FU.d[XU].shortName]
                }), (0, GU.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: UU(FU.d[XU].description, {
                    time: FU.d[XU].effectLevelDurations[PU] / 6e4
                  })
                })]
              }, XU)))
            }), (0, GU.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, GU.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, GU.jsxs)(YU.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: UU => {
                  eU ? uU() : (LU(!0), (0, tU.Z)((() => {
                    LU(!1), CU(!0)
                  }), !0)), UU.stopPropagation()
                },
                loading: dU,
                children: [!eU && (0, GU.jsxs)(GU.Fragment, {
                  children: [(0, GU.jsx)(gU.d, {
                    name: "film"
                  }), " ", UU("classicGame:watchAdToGetRestedPerk")]
                }), eU && UU("classicGame:wakeUp")]
              }), (0, GU.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, GU.jsx)("div", {
                  className: aU()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === PU
                  }),
                  children: (0, GU.jsx)(EU.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, GU.jsx)("div", {
                  className: aU()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === PU
                  }),
                  children: (0, GU.jsx)(EU.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, GU.jsx)("div", {
                  className: aU()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === PU
                  }),
                  children: (0, GU.jsx)(EU.d, {
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
    const RU = (0, QU.memo)((function(UU) {
      let {
        children: XU,
        restedEffect: zU,
        xD: cU,
        setChosenRestedEffect: yU
      } = UU;
      return zU === cU ? (0, GU.jsx)(YU.l, {
        onClick: UU => {
          UU.stopPropagation()
        },
        children: XU
      }) : (0, GU.jsx)(YU.j, {
        onClick: UU => {
          yU(zU), UU.stopPropagation()
        },
        children: XU
      })
    }))
  },
  5433: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1305);

    function FU(UU) {
      let {
        columns: XU,
        rows: zU,
        getRowKey: yU,
        renderRow: FU,
        className: oU
      } = UU;
      return (0, AU.jsxs)("table", {
        className: QU()("Table", oU),
        children: [(0, AU.jsx)("thead", {
          children: (0, AU.jsx)("tr", {
            children: XU.map((UU => (0, AU.jsx)("th", {
              children: UU.header
            }, UU.key)))
          })
        }), (0, AU.jsx)("tbody", {
          children: zU.map((UU => (0, AU.jsx)(cU.Fragment, {
            children: FU(UU)
          }, yU(UU))))
        })]
      })
    }
  },
  37418: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      f: () => AU,
      h: () => FU,
      j: () => oU
    });
    var cU = zU(61),
      yU = zU(3478);
    const QU = 8,
      AU = "InGameHeaderContainer",
      FU = "TopRightElements";

    function oU(UU) {
      const [XU] = (0, yU.e)(), [zU, oU] = (0, cU.useState)(!1);
      return (0, cU.useLayoutEffect)((() => {
        if (!UU) return;
        const XU = document.querySelector(`.${AU}`),
          zU = document.querySelector(`.${FU}`),
          cU = () => {
            const cU = UU.getBoundingClientRect(),
              yU = XU ? XU.getBoundingClientRect().right : 0,
              AU = zU ? zU.getBoundingClientRect().left : window.innerWidth,
              FU = cU.left < yU + QU,
              DU = cU.right > AU - QU;
            oU(FU || DU)
          };
        cU();
        const yU = new ResizeObserver(cU);
        return yU.observe(UU), XU && yU.observe(XU), zU && yU.observe(zU), () => {
          yU.disconnect()
        }
      }), [UU, XU]), zU
    }
  },
  37464: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => YU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1726),
      FU = zU(1494),
      oU = zU(1384),
      DU = zU(1390),
      EU = zU(1305);

    function YU(UU) {
      let {
        label: XU,
        icon: zU,
        placeholder: yU,
        onSubmit: YU
      } = UU;
      const NU = (0, cU.useRef)(null),
        [IU, pU] = (0, cU.useState)(""),
        [aU, tU] = (0, cU.useState)("Enter"),
        [gU, kU] = (0, cU.useState)(null);
      (0, cU.useEffect)((() => {
        if ("Success" !== aU && "Error" !== aU) return;
        const UU = setTimeout((() => {
          "Success" === aU && NU.current && (NU.current.value = "", pU("")), tU("Enter")
        }), "Success" === aU ? 1e3 : 4e3);
        return () => {
          clearTimeout(UU)
        }
      }), [aU]);
      const GU = () => {
        const UU = IU.trim();
        "" !== UU && "Enter" === aU && (tU("Loading"), YU(UU).then((UU => {
          NU.current && ("error" in UU ? null === UU.error ? tU("Enter") : (kU(UU.error), tU("Error")) : tU("Success"))
        })))
      };
      return (0, EU.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: UU => {
          UU.target === NU.current && "Escape" !== UU.key && UU.stopPropagation()
        },
        children: [(0, EU.jsxs)("div", {
          className: QU()("AddFriendBodyOverlay", `AddFriendBodyOverlay${aU}`),
          children: ["Loading" === aU && (0, EU.jsx)(oU.b, {}), "Success" === aU && (0, EU.jsx)(DU.d, {
            name: "check"
          }), "Error" === aU && gU]
        }), (0, EU.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, EU.jsx)(AU.e, {
            className: "PlayerSearchInput",
            domRef: NU,
            maxLength: 32,
            placeholderText: yU,
            ariaLabel: yU,
            stopPropagation: !1,
            onValueChange: UU => {
              pU(UU)
            },
            onEnter: GU
          }), (0, EU.jsxs)(FU.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== aU || "" === IU.trim(),
            onClick: GU,
            children: [(0, EU.jsx)(DU.d, {
              name: zU
            }), " ", XU]
          })]
        })]
      })
    }
  },
  37448: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => YU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1193),
      FU = zU(1390),
      oU = zU(1305);
    const DU = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      EU = ["unlisted", "public", "whitelist", "private"];

    function YU(UU) {
      let {
        visibility: XU,
        onPick: zU
      } = UU;
      const {
        t: yU
      } = (0, AU.I)(), YU = (0, cU.useRef)([]);
      return (0, oU.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": yU("worldSocial:whoCanJoin"),
        children: EU.map(((UU, cU) => {
          const AU = UU === XU;
          return (0, oU.jsxs)("button", {
            ref: UU => {
              YU.current[cU] = UU
            },
            type: "button",
            className: QU()("WorldSocialTile", {
              WorldSocialTileSelected: AU
            }),
            "aria-pressed": AU,
            tabIndex: AU ? 0 : -1,
            onKeyDown: UU => {
              ((UU, XU) => {
                const zU = "ArrowRight" === UU.key || "ArrowDown" === UU.key ? 1 : "ArrowLeft" === UU.key || "ArrowUp" === UU.key ? -1 : 0;
                var cU;
                0 !== zU && (UU.preventDefault(), null === (cU = YU.current[(XU + zU + EU.length) % EU.length]) || void 0 === cU || cU.focus())
              })(UU, cU)
            },
            onClick: () => {
              zU(UU)
            },
            children: [(0, oU.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, oU.jsx)(FU.d, {
                name: DU[UU]
              })
            }), (0, oU.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, oU.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: yU(`worldSocial:${UU}`)
              }), (0, oU.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: yU(`worldSocial:${UU}Description`)
              })]
            })]
          }, UU)
        }))
      })
    }
  },
  37456: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU
    });
    var cU = zU(1193),
      yU = zU(2880),
      QU = zU(4775),
      AU = zU(1305);

    function FU(UU) {
      let {
        LY: XU,
        children: zU,
        ...FU
      } = UU;
      const {
        t: oU
      } = (0, cU.I)();
      return (0, AU.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          XU.onChange(!XU.on)
        },
        children: (0, AU.jsx)(yU.f, {
          ...FU,
          opensProfileCard: !1,
          children: (0, AU.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: UU => {
              UU.stopPropagation()
            },
            children: [zU, (0, AU.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, AU.jsx)(QU.d, {
                checked: XU.on,
                disabled: !1,
                ariaLabel: oU("worldSocial:letJoin", {
                  playerName: FU.playerSocialPreview.name
                }),
                onChange: UU => {
                  XU.onChange(UU.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37443: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => pU
    });
    var cU = zU(61),
      yU = zU(1193),
      QU = zU(1936),
      AU = zU(97),
      FU = zU(27),
      oU = zU(1521),
      DU = zU(2903),
      EU = zU(34767),
      YU = zU(1494),
      NU = zU(1390),
      IU = zU(1305);

    function pU(UU) {
      let {
        worldCode: XU,
        message: zU
      } = UU;
      const {
        t: pU
      } = (0, yU.I)(), {
        isTouchScreen: aU
      } = (0, FU.q)(["isTouchScreen"]), tU = AU.featureFlags.canUseInviteLinks, gU = (0, EU.j)(tU && null === zU), [kU, GU] = (0, DU.h)(), BU = (0, cU.useRef)(null);
      if (null !== zU) return (0, IU.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, IU.jsx)(NU.d, {
          name: "lock"
        }), (0, IU.jsx)("span", {
          children: zU
        })]
      });
      const ZU = tU ? gU : XU,
        RU = aU && tU && (0, DU.b)();
      return (0, IU.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!tU && (0, IU.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: pU("worldSocial:worldCode")
        }), (0, IU.jsx)("input", {
          ref: BU,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== ZU && void 0 !== ZU ? ZU : "",
          "aria-label": pU(tU ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: UU => {
            UU.currentTarget.select()
          }
        }), (0, IU.jsxs)(YU.f, {
          className: "WorldSocialCopy",
          disabled: null === ZU,
          onClick: () => {
            null !== ZU && (0, DU.e)(ZU, {
              useShareSheet: RU,
              onOutcome: UU => {
                if ((0, oU.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== UU || tU ? UU : "code"
                  }), "copied" === UU) GU();
                else if ("failed" === UU) {
                  var XU;
                  null === (XU = BU.current) || void 0 === XU || XU.focus(), QU.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, IU.jsx)(NU.d, {
            name: kU ? "check" : RU ? "up-from-bracket" : "copy"
          }), " ", pU(kU ? "general:copied" : RU ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37453: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => IU,
      g: () => NU,
      i: () => YU
    });
    var cU = zU(625),
      yU = zU(1193),
      QU = zU(1685),
      AU = zU(2880),
      FU = zU(2841),
      oU = zU(1494),
      DU = zU(37456),
      EU = zU(1305);

    function YU(UU, XU) {
      var zU;
      return {
        isError: !1,
        name: UU,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== XU && void 0 !== XU ? XU : {},
        nameColour: null !== (zU = null === XU || void 0 === XU ? void 0 : XU.nameColour) && void 0 !== zU ? zU : cU.e,
        location: {
          status: "offline"
        }
      }
    }

    function NU(UU) {
      let {
        player: XU,
        isFriend: zU = !1,
        status: cU,
        showLocation: oU = void 0 === cU,
        LY: YU,
        onSendFriendRequest: NU,
        actions: IU,
        zIndex: pU
      } = UU;
      const {
        t: aU
      } = (0, yU.I)();
      let tU = cU;
      null !== YU && void 0 !== YU && YU.on && (tU = (0, EU.jsxs)(EU.Fragment, {
        children: [null !== cU && void 0 !== cU ? cU : (0, EU.jsx)(FU.b, {
          socialPreview: XU
        }), (0, EU.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", aU("worldSocial:canJoin")]
        })]
      }));
      const gU = {
        playerSocialPreview: XU,
        isFriend: zU,
        hideFriendBadge: !0,
        onFriendRemoved: zU ? UU => {
          QU.d.removeFriendFromState(UU)
        } : void 0,
        status: tU,
        showLocation: oU,
        onSendFriendRequest: NU,
        zIndex: pU
      };
      return YU ? (0, EU.jsx)(DU.e, {
        ...gU,
        LY: YU,
        children: IU
      }) : (0, EU.jsx)(AU.f, {
        ...gU,
        opensProfileCard: !1,
        children: IU || void 0
      })
    }

    function IU(UU) {
      let {
        row: XU,
        LY: zU,
        canInvite: cU,
        invited: QU,
        onInvite: AU,
        zIndex: FU
      } = UU;
      const {
        t: DU
      } = (0, yU.I)(), YU = "online" === XU.place ? oU.f : oU.j;
      return (0, EU.jsx)(NU, {
        player: XU.friend,
        isFriend: !0,
        status: "here" === XU.place ? DU("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        LY: zU,
        zIndex: FU,
        actions: cU && (0, EU.jsx)(YU, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: QU,
          onClick: AU,
          ariaLabel: `${DU("worldSocial:invite")} ${XU.friend.name}`,
          children: DU(QU ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37434: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU,
      e: () => AU,
      i: () => DU
    });
    var cU = zU(61),
      yU = zU(5026),
      QU = zU(1936);

    function AU(UU) {
      const XU = {
        lobbyName: UU,
        answer: null,
        response: yU.d.getSocialSettings(UU)
      };
      return XU.response.then((UU => {
        XU.answer = UU
      })), XU
    }
    const FU = new Map;

    function oU(UU) {
      FU.set(UU.lobbyName, UU)
    }

    function DU(UU) {
      const [XU] = (0, cU.useState)((() => function(UU) {
        var XU;
        const zU = null !== (XU = FU.get(UU)) && void 0 !== XU ? XU : null;
        return null !== zU && void 0 !== zU && zU.answer && "error" in zU.answer ? null : zU
      }(UU))), [zU, AU] = (0, cU.useState)((() => null !== XU && void 0 !== XU && XU.answer && "settings" in XU.answer ? XU.answer.settings : null)), [oU, DU] = (0, cU.useState)(!0), [EU, YU] = (0, cU.useState)(null !== zU), NU = (0, cU.useRef)(zU);
      NU.current = zU;
      const IU = (0, cU.useRef)(0),
        pU = (0, cU.useRef)(0),
        aU = (0, cU.useRef)(!1),
        tU = (0, cU.useRef)(!0),
        gU = (0, cU.useCallback)((async XU => {
          const zU = ++IU.current,
            cU = await (null !== XU && void 0 !== XU ? XU : yU.d.getSocialSettings(UU));
          tU.current && zU === IU.current && (YU(!0), DU(!1), "error" in cU || AU(cU.settings))
        }), [UU]),
        kU = (0, cU.useCallback)((() => {
          DU(!0), gU()
        }), [gU]),
        GU = (0, cU.useCallback)((() => {
          pU.current > 0 ? aU.current = !0 : gU()
        }), [gU]);
      (0, cU.useEffect)((() => (tU.current = !0, FU.delete(UU), DU(!0), gU(null === XU || void 0 === XU ? void 0 : XU.response), () => {
        tU.current = !1
      })), [gU, UU, XU]);
      const BU = UU => {
        IU.current++, DU(!1), NU.current = UU, AU(UU)
      };
      return {
        settings: zU,
        loading: oU,
        answered: EU,
        retry: kU,
        refresh: GU,
        change: async function(XU, zU) {
          let {
            quiet: cU = !1,
            onAnswer: AU
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const FU = NU.current;
          if (null === FU) return !1;
          BU(zU(FU)), pU.current > 0 && (aU.current = !0), pU.current++;
          const oU = await yU.d.setSocialSettings(UU, XU);
          pU.current--;
          const DU = !("error" in oU);
          if (!tU.current) return DU;
          if (null === AU || void 0 === AU || AU(oU), cU);
          else if ("error" in oU) QU.f.showMessage({
            translationKey: oU.error
          });
          else
            for (const UU of oU.notFound) QU.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: UU
              }
            });
          if (pU.current > 0) return DU;
          const EU = aU.current;
          return aU.current = !1, !EU && "settings" in oU ? BU(oU.settings) : (EU || BU(FU), gU()), DU
        }
      }
    }
  },
  37468: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU,
      e: () => QU
    });
    var cU = zU(173);
    const yU = new Map;

    function QU(UU, XU) {
      var zU;
      const cU = null !== (zU = yU.get(UU)) && void 0 !== zU ? zU : new Map;
      cU.set(XU, Date.now()), yU.set(UU, cU)
    }

    function AU(UU) {
      const XU = yU.get(UU);
      if (!XU) return [];
      const zU = Date.now();
      for (const [yU, QU] of XU) zU - QU >= cU.q && XU.delete(yU);
      return [...XU.keys()]
    }
  },
  37436: (UU, XU, zU) => {
    function cU(UU, XU) {
      const zU = XU.toLowerCase();
      for (const cU of UU)
        if (cU.toLowerCase() === zU) return !0;
      return !1
    }

    function yU(UU, XU, zU) {
      const yU = [],
        QU = [],
        AU = [];
      for (const FU of UU) !FU.isError && FU.name && ("inGame" === FU.location.status && FU.location.inLobbyName === XU || cU(zU, FU.name) ? QU.push({
        friend: FU,
        place: "here"
      }) : "offline" === FU.location.status ? AU.push({
        friend: FU,
        place: "offline"
      }) : yU.push({
        friend: FU,
        place: "online"
      }));
      return [...yU, ...QU, ...AU]
    }

    function QU(UU, XU, zU) {
      const yU = [],
        QU = UU.flatMap((UU => "here" === UU.place ? [UU.friend.name] : []));
      for (const AU of [...QU, ...XU]) cU(yU, AU) || cU(zU, AU) || yU.push(AU);
      return yU
    }

    function AU(UU, XU) {
      return null === UU || void 0 === UU || !UU.canManage || cU(UU.whitelist, XU) ? "none" : "whitelist" === UU.visibility ? "required" : "quiet"
    }

    function FU(UU) {
      if (null === UU) return !0;
      const {
        visibility: XU
      } = UU;
      return "public" === XU || "unlisted" === XU || "whitelist" === XU && UU.canManage
    }

    function oU(UU, XU, zU) {
      if (zU) {
        const zU = XU.filter((XU => !cU(UU.whitelist, XU)));
        return {
          ...UU,
          whitelist: [...UU.whitelist, ...zU]
        }
      }
      return {
        ...UU,
        whitelist: UU.whitelist.filter((UU => !cU(XU, UU)))
      }
    }

    function DU(UU, XU) {
      const zU = [];
      for (let cU = 0; cU < UU.length; cU += XU) zU.push(UU.slice(cU, cU + XU));
      return zU
    }
    zU.d(XU, {
      e: () => FU,
      h: () => QU,
      i: () => yU,
      m: () => cU,
      p: () => DU,
      t: () => AU,
      w: () => oU
    })
  },
  9305: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      d: () => QU
    });
    var cU = zU(2067);
    const yU = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      QU = UU => "string" === typeof UU.icon && "" !== UU.icon && "string" === typeof UU.keycode && yU.test(UU.keycode),
      AU = UU => "Space" === UU ? "_" : cU.i[UU]
  },
  9364: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU
    });
    var cU = zU(27);

    function yU() {
      return !cU.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9373: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      c: () => FU,
      e: () => DU,
      i: () => oU,
      l: () => AU,
      m: () => yU,
      q: () => cU,
      r: () => pU,
      t: () => YU,
      x: () => EU,
      y: () => NU,
      z: () => IU
    });
    const cU = 14,
      yU = 6,
      QU = (cU + yU) / 2,
      AU = 200,
      FU = AU / 2,
      oU = AU / 2 - 1,
      DU = yU / cU * (AU / 2),
      EU = (UU, XU) => -Math.PI / 2 + 2 * UU * Math.PI / XU,
      YU = (UU, XU, zU) => {
        const cU = 2 * Math.PI / zU;
        return (Math.round((Math.atan2(XU, UU) + Math.PI / 2) / cU) % zU + zU) % zU
      },
      NU = .5,
      IU = (UU, XU, zU) => Math.hypot(UU.x, UU.y) < NU ? zU : YU(UU.x, UU.y, XU),
      pU = (UU, XU, zU, cU, yU) => {
        const QU = Math.PI / XU,
          AU = EU(UU, XU),
          FU = AU - QU,
          oU = AU + QU,
          DU = (UU, XU) => `${zU+UU*Math.cos(XU)} ${zU+UU*Math.sin(XU)}`;
        return [`M ${DU(cU,FU)}`, `L ${DU(yU,FU)}`, `A ${yU} ${yU} 0 0 1 ${DU(yU,oU)}`, `L ${DU(cU,oU)}`, `A ${cU} ${cU} 0 0 0 ${DU(cU,FU)}`, "Z"].join(" ")
      }
  },
  37629: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU
    });
    var cU = zU(27),
      yU = zU(1349);

    function QU() {
      const {
        clientEscMenuOptions: UU
      } = (0, cU.q)(["clientEscMenuOptions"]);
      return (0, yU.t)() && UU.showChat
    }
  },
  9411: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(61),
      yU = zU(9339),
      QU = zU(2616);

    function AU() {
      const UU = (0, QU.f)("shopInfo"),
        [, XU] = (0, cU.useReducer)((UU => UU + 1), 0);
      return (0, QU.e)("shopInfo", XU), !(0, yU.c)(UU)
    }
  },
  37740: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU
    });
    var cU = zU(61),
      yU = zU(2616);

    function QU() {
      const UU = (0, yU.f)("lobbyLeaderboardInfo");
      return (0, cU.useMemo)((() => function(UU) {
        if (null === UU) return null;
        const XU = Object.entries(UU),
          zU = XU.filter((UU => {
            let [, XU] = UU;
            return void 0 !== XU
          }));
        if (zU.length === XU.length) return UU;
        const cU = Object.fromEntries(zU),
          yU = Object.keys(UU).filter((UU => !Object.hasOwn(cU, UU)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${yU.join(", ")}`), cU
      }(UU)), [UU])
    }
  },
  37557: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => oU
    });
    var cU = zU(3043),
      yU = zU(4063),
      QU = zU(3221);
    const AU = ["Unable to create vertex buffer"];
    let FU = {};

    function oU(UU, XU) {
      const zU = new Date;
      console.error(`${zU.getUTCHours()}:${zU.getUTCMinutes()}:${zU.getUTCSeconds()}`, UU, XU, null === XU || void 0 === XU ? void 0 : XU.stack), AU.includes(null === XU || void 0 === XU ? void 0 : XU.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, cU.b)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${XU.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, QU.logError)("warning", `${UU}\n ${XU} "\n" ${null===XU||void 0===XU?void 0:XU.stack}`);
      const yU = UU + XU + (null === XU || void 0 === XU ? void 0 : XU.stack);
      yU in FU || ((0, QU.logError)("error", `${UU}\n ${XU} "\n" ${null===XU||void 0===XU?void 0:XU.stack}`), FU[yU] = !0)
    }(0, yU.onGameReset)((() => {
      FU = {}
    }))
  },
  5364: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => rU,
      g: () => SU
    });
    var cU = zU(5369),
      yU = zU(320);
    const QU = 120,
      AU = 260,
      FU = 1.15,
      oU = 1.2,
      DU = 2,
      EU = 1.08,
      YU = .8,
      NU = .95,
      IU = 8,
      pU = "[\"')\\]\u300d\u300f\uff09]*",
      aU = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${pU}$`),
      tU = new RegExp(`[?\uff1f]${pU}$`),
      gU = new RegExp(`[!\uff01]${pU}$`),
      kU = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      GU = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      BU = new RegExp(`[${GU}]`),
      ZU = new RegExp(`[${GU}]|[^${GU}]+`, "g"),
      RU = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function PU(UU) {
      let XU = 2166136261;
      for (let zU = 0; zU < UU.length; zU++) XU ^= UU.charCodeAt(zU), XU = Math.imul(XU, 16777619);
      return (XU >>> 0) / 4294967295 * 2 - 1
    }

    function WU(UU) {
      var XU;
      if (BU.test(UU)) return 1;
      const zU = UU.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        cU = zU.replace(/[^0-9]/g, "");
      if (cU.length > 0 && !/\p{L}/u.test(zU)) return Math.min(cU.length, 4);
      const yU = null !== (XU = zU.match(RU)) && void 0 !== XU ? XU : [];
      if (0 === yU.length) {
        var QU, AU;
        const UU = null !== (QU = null === (AU = zU.match(/\p{L}/gu)) || void 0 === AU ? void 0 : AU.length) && void 0 !== QU ? QU : 0;
        return 0 === UU ? 0 : Math.min(Math.max(1, Math.round(UU / 2.5)), IU)
      }
      const FU = zU.replace(/[^\p{L}]/gu, ""),
        oU = yU.length > 1 && "e" === yU.at(-1) && FU.endsWith("e") && !FU.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(UU.replace(/[^\p{L}]/gu, ""));
      return Math.min(yU.length - (oU ? 1 : 0), IU)
    }

    function dU(UU) {
      return UU.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function LU(UU) {
      const XU = UU.replace(/[^\p{L}]/gu, "");
      return XU.length >= 2 && XU === XU.toUpperCase() && XU !== XU.toLowerCase()
    }

    function eU(UU, XU) {
      var zU;
      const IU = XU && (0, cU.l)(XU),
        pU = null !== (zU = null === IU || void 0 === IU ? void 0 : IU.syllableMs) && void 0 !== zU ? zU : cU.e,
        GU = function(UU) {
          const XU = [];
          for (const cU of (0, yU.rc)(UU))
            if ("string" === typeof cU)
              for (const UU of cU.split(/(\s+)/)) {
                if ("" === UU) continue;
                if (/^\s+$/.test(UU)) {
                  XU.push({
                    kind: "space",
                    text: UU
                  });
                  continue
                }
                if (!BU.test(UU)) {
                  XU.push({
                    kind: "word",
                    text: UU,
                    delayMs: 0
                  });
                  continue
                }
                let cU = !0;
                for (const yU of null !== (zU = UU.match(ZU)) && void 0 !== zU ? zU : []) {
                  var zU;
                  const UU = XU.at(-1);
                  cU || "word" !== (null === UU || void 0 === UU ? void 0 : UU.kind) || BU.test(yU) || /[\p{L}\p{N}]/u.test(yU) ? (cU || XU.push({
                    kind: "space",
                    text: "\u200b"
                  }), XU.push({
                    kind: "word",
                    text: yU,
                    delayMs: 0
                  }), cU = !1) : UU.text += yU
                }
              } else XU.push({
                kind: "icon",
                text: cU.icon,
                delayMs: 0
              });
          return XU
        }(UU),
        RU = [];
      let eU = [];
      for (const cU of GU) "space" !== cU.kind && (eU.push(cU), aU.test(cU.text) && (RU.push(eU), eU = []));
      RU.push(eU);
      const CU = [];
      let wU = 0;
      for (const cU of RU) {
        var qU, OU;
        const UU = null !== (qU = null === (OU = cU.at(-1)) || void 0 === OU ? void 0 : OU.text) && void 0 !== qU ? qU : "",
          XU = tU.test(UU),
          zU = gU.test(UU),
          yU = cU.map((UU => "word" === UU.kind ? WU(UU.text) : 1)),
          GU = yU.findLastIndex((UU => UU > 0));
        for (const [tU, gU] of cU.entries()) {
          const UU = "word" === gU.kind,
            cU = yU[tU];
          gU.delayMs = wU;
          for (let yU = 0; IU && yU < cU; yU++) {
            const {
              intonation: QU
            } = IU;
            let AU = GU > 0 ? -QU.declineSemitones * (tU / GU) : 0;
            AU += PU(`${dU(gU.text)}|${yU}`) * QU.variationSemitones;
            const aU = Math.min(1, QU.variationSemitones);
            let kU = IU.glideSemitones,
              BU = 1;
            zU && (AU += QU.exclaimLiftSemitones, BU *= FU), XU && tU === GU && (AU += QU.questionRiseSemitones * (cU > 1 ? .5 + .5 * yU / (cU - 1) : 1), yU === cU - 1 && (kU = Math.abs(kU) + QU.questionRiseSemitones / 2)), UU && LU(gU.text) && (AU += DU * aU, BU *= oU), cU > 1 && 0 === yU && (AU += YU * aU, BU *= EU), CU.push({
              atMs: wU + yU * pU,
              semitones: AU,
              glideSemitones: kU,
              durationMs: yU < cU - 1 ? Math.min(IU.durationMs, pU * NU) : IU.durationMs,
              level: BU
            })
          }
          wU += cU * pU + (aU.test(gU.text) ? AU : kU.test(gU.text) ? QU : 0)
        }
      }
      return {
        pieces: GU.map((UU => "space" === UU.kind ? UU : "icon" === UU.kind ? {
          kind: "icon",
          icon: UU.text,
          delayMs: UU.delayMs
        } : {
          kind: "word",
          text: UU.text,
          delayMs: UU.delayMs
        })),
        blips: CU
      }
    }
    var CU = zU(1193),
      wU = zU(1266),
      qU = zU(2012);

    function OU(UU) {
      if ("string" === typeof UU) return UU;
      const XU = wU.h.get().getCurrentLanguageCode();
      return (0, CU.t)(XU, UU.translationKey, (0, CU.p)(UU.params, qU.c.shown))
    }

    function SU(UU) {
      const XU = void 0 === UU.voice ? null : (0, cU.o)(UU.voice),
        zU = XU && (0, cU.l)(XU);
      return {
        plan: eU(OU(UU.line), zU),
        synth: zU
      }
    }

    function rU(UU) {
      const XU = [];
      let zU = [];
      for (const [yU, QU] of UU.entries()) {
        var cU;
        "space" === QU.kind && (" " !== QU.text || "icon" !== (null === (cU = UU[yU + 1]) || void 0 === cU ? void 0 : cU.kind)) ? (zU.length > 0 && XU.push(zU), XU.push([QU]), zU = []) : zU.push(QU)
      }
      return zU.length > 0 && XU.push(zU), XU
    }
  },
  37414: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    const cU = [{
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

    function yU(UU, XU, zU) {
      const yU = Math.abs(UU - XU),
        QU = Date.now() - zU;
      for (const AU of cU)
        if (UU < AU.maxDist) return yU >= AU.hardUpdateDist || QU > AU.timeBetweenSoftChecks && yU >= AU.softUpdateDist;
      return !1
    }
  },
  37717: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU,
      f: () => NU
    });
    var cU = zU(646),
      yU = zU(42),
      QU = zU(37674);
    const AU = "replayFileKeptForReload",
      FU = "replayFileKeptForReloadAt",
      oU = "replayFileKeptForReloadTab",
      DU = 3e5,
      EU = 5e3;
    async function YU(UU, XU) {
      const zU = Date.now(),
        QU = {
          at: zU,
          bytes: UU,
          source: XU
        },
        DU = await Promise.race([(async () => await yU.g.setItem(FU, zU) && yU.g.setItem(AU, QU))(), (0, cU.S)(EU).then((() => !1))]);
      DU || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const YU = {
        at: zU,
        cY: DU
      };
      yU.n.setItem(oU, YU)
    }
    async function NU() {
      var UU;
      const XU = yU.n.getItem(oU);
      null !== XU && yU.n.removeItem(oU);
      const zU = Date.now(),
        cU = await yU.g.getItem(FU),
        EU = null !== XU && zU - XU.at <= DU,
        YU = null !== XU && cU === XU.at;
      let NU = null;
      if (null !== cU && (YU || ("number" !== typeof cU || zU - cU > DU)) && (NU = EU && YU && XU.cY ? await yU.g.getItem(AU) : null, await Promise.all([yU.g.removeItem(FU), yU.g.removeItem(AU)])), !EU) return null;
      if ((null === (UU = NU) || void 0 === UU ? void 0 : UU.at) !== XU.at) throw new Error(QU.e.replayNotKept.text);
      return {
        bytes: NU.bytes,
        source: NU.source
      }
    }
  },
  37708: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      e: () => QU,
      g: () => yU
    });
    const cU = [9];

    function yU(UU) {
      return cU.includes(UU)
    }

    function QU(UU) {
      return null !== UU && UU >= 3 && UU < cU[0]
    }
  },
  37677: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU,
      d: () => QU,
      h: () => yU
    });
    const cU = [.25, .5, 1, 2, 4, 8, 16];

    function yU(UU, XU) {
      const zU = cU;
      let yU = zU.indexOf(UU);
      return -1 === yU && (yU = zU.findIndex((XU => XU >= UU)), -1 === yU && (yU = zU.length - 1)), "up" === XU ? zU[Math.min(yU + 1, zU.length - 1)] : zU[Math.max(yU - 1, 0)]
    }

    function QU(UU) {
      return UU <= cU[0]
    }

    function AU(UU) {
      return UU >= cU[cU.length - 1]
    }
  },
  37728: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      g: () => yU
    });
    const cU = "data-replay-ui-active",
      yU = [{
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
  37732: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => DU,
      g: () => YU,
      h: () => EU
    });
    var cU = zU(27),
      yU = zU(31),
      QU = zU(37728);

    function AU() {
      const UU = {};
      for (const {
          group: XU
        }
        of QU.g) UU[XU] = !0;
      return UU
    }
    let FU = AU();

    function oU() {
      yU.k.UY("replayViewer|uiVisibilityChanged")
    }

    function DU() {
      return FU
    }

    function EU(UU, XU) {
      FU[UU] !== XU && (FU = {
        ...FU,
        [UU]: XU
      }, "nametag" === UU && cU.e.set({
        areNametagsHidden: !XU
      }), oU())
    }

    function YU() {
      FU = AU(), cU.e.set({
        areNametagsHidden: !1
      }), oU()
    }
  },
  9301: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      i: () => AU,
      m: () => FU,
      n: () => yU
    });
    var cU = zU(9305);
    const yU = UU => {
        const XU = [];
        UU.holdingGun && XU.push({
          kind: "reload"
        }), UU.touchscreenActionButton && XU.push({
          kind: "touchButton",
          label: UU.touchscreenActionButton
        });
        for (const QU of null !== (zU = null === (yU = UU.customButtons) || void 0 === yU ? void 0 : yU.filter(cU.d)) && void 0 !== zU ? zU : []) {
          var zU, yU;
          XU.push({
            kind: "customButton",
            id: QU.id,
            icon: QU.icon,
            description: QU.description
          })
        }
        return XU
      },
      QU = UU => UU.length >= 2,
      AU = UU => "specialAction" !== UU.kind,
      FU = (UU, XU) => {
        if (null === UU || null === XU) return UU === XU;
        if (UU.kind !== XU.kind) return !1;
        switch (UU.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return UU.action === XU.action;
          case "customButton":
            return UU.id === XU.id && UU.icon === XU.icon;
          case "touchButton":
            return UU.label === XU.label
        }
      }
  },
  9294: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU,
      f: () => IU,
      g: () => YU,
      k: () => pU
    });
    var cU = zU(61),
      yU = zU(31),
      QU = zU(1492),
      AU = zU(9301),
      FU = zU(9314);
    let oU = null;
    const DU = () => oU,
      EU = UU => {
        (0, AU.m)(oU, UU) || (oU = UU, yU.k.UY(FU.f, oU))
      },
      YU = () => {
        const [UU, XU] = (0, cU.useState)(DU);
        return (0, QU.f)(FU.f, XU), UU
      };
    let NU = !1;
    const IU = UU => {
        UU !== NU && (NU = UU, yU.k.UY(FU.i, UU))
      },
      pU = () => {
        const [UU, XU] = (0, cU.useState)(NU);
        return (0, QU.f)(FU.i, XU), UU
      }
  },
  9314: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      f: () => cU,
      i: () => yU,
      k: () => FU,
      l: () => oU,
      o: () => DU,
      q: () => AU
    });
    const cU = "controllerActionHintChanged",
      yU = "controllerActionWheelHintChanged",
      QU = "controllerOpenChat",
      AU = "controllerSneakToggledChanged",
      FU = "controllerAttackLatchedChanged",
      oU = "controllerDropStackHoldChanged",
      DU = "controllerPickBlockHintChanged"
  },
  9258: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      d: () => QU,
      h: () => oU,
      k: () => FU
    });
    var cU = zU(1492),
      yU = zU(1457);
    const QU = "controllerInventoryCursorChanged",
      AU = {
        showing: !1,
        kind: null,
        holding: !1,
        slotHasItem: !1,
        pressHints: null,
        hasCategories: !1,
        hasList: !1,
        openButtonCloses: !1,
        steppingSlots: !1,
        quickMoveToHotbar: !1,
        dropStackHold: null,
        hotbarPicking: !1
      },
      FU = () => {
        var UU, XU;
        return (0, cU.j)(QU, null !== (UU = null === (XU = (0, yU.e)()) || void 0 === XU ? void 0 : XU.getInventoryCursorState()) && void 0 !== UU ? UU : AU)
      },
      oU = () => {
        var UU, XU;
        return null !== (UU = null === (XU = (0, yU.e)()) || void 0 === XU ? void 0 : XU.isPadSteppingSlots()) && void 0 !== UU && UU
      }
  },
  9256: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => NU,
      g: () => FU,
      i: () => oU,
      k: () => AU,
      m: () => QU,
      p: () => EU,
      t: () => YU
    });
    let cU = null;
    const yU = new Set,
      QU = UU => (cU = UU, () => {
        if (cU === UU) {
          cU = null;
          for (const UU of yU) UU()
        }
      }),
      AU = UU => (yU.add(UU), () => {
        yU.delete(UU)
      }),
      FU = () => cU,
      oU = () => null !== cU;
    let DU = null;
    const EU = UU => {
        DU = UU
      },
      YU = () => {
        const UU = DU;
        return DU = null, UU
      },
      NU = (UU, XU) => {
        var zU, cU;
        return null !== (zU = null !== (cU = UU.find((UU => UU.element === XU))) && void 0 !== cU ? cU : UU.find((UU => UU.element.contains(XU)))) && void 0 !== zU ? zU : null
      }
  },
  9261: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      d: () => AU
    });
    var cU = zU(61);
    const yU = new WeakMap,
      QU = UU => {
        var XU, zU;
        return null !== (XU = null === (zU = yU.get(UU)) || void 0 === zU ? void 0 : zU.current) && void 0 !== XU ? XU : null
      },
      AU = (UU, XU) => {
        const zU = (0, cU.useRef)(XU);
        zU.current = XU;
        const QU = (0, cU.useRef)(null);
        (0, cU.useEffect)((() => {
          const XU = UU.current,
            cU = QU.current;
          XU !== cU && (cU && yU.get(cU) === zU && yU.delete(cU), QU.current = XU, XU && yU.set(XU, zU))
        })), (0, cU.useEffect)((() => () => {
          const UU = QU.current;
          UU && yU.get(UU) === zU && yU.delete(UU), QU.current = null
        }), [])
      }
  },
  9395: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      e: () => DU,
      i: () => YU,
      m: () => EU,
      o: () => oU,
      s: () => IU
    });
    var cU = zU(31),
      yU = zU(2082),
      QU = zU(1457),
      AU = zU(1444);
    const FU = UU => {
        var XU, zU;
        return (0, AU.n)() && null !== (XU = null === (zU = (0, QU.e)()) || void 0 === zU ? void 0 : zU.getGlyphForNoaAction(UU)) && void 0 !== XU ? XU : null
      },
      oU = "controllerGlyph:",
      DU = UU => {
        var XU, zU;
        return null !== (XU = null === (zU = (0, QU.e)()) || void 0 === zU ? void 0 : zU.getPadGlyphIconName(UU)) && void 0 !== XU ? XU : `${oU}xbox/${UU}`
      },
      EU = UU => UU.startsWith(oU),
      YU = UU => {
        var XU, zU;
        return EU(UU) && null !== (XU = null === (zU = (0, QU.e)()) || void 0 === zU ? void 0 : zU.getPadGlyphIconUrl(UU)) && void 0 !== XU ? XU : null
      },
      NU = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", AU.c, yU.d, yU.c],
      IU = UU => {
        const XU = NU.map((XU => cU.k.subscribe(XU, UU)));
        return () => {
          for (const UU of XU) cU.k.unsubscribe(UU)
        }
      }
  },
  9383: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      g: () => AU,
      j: () => QU,
      k: () => cU,
      m: () => FU,
      q: () => DU,
      t: () => EU
    });
    const cU = "controllerActionWheelOpen",
      yU = "controllerActionWheelAim",
      QU = "controllerActionWheelCommit",
      AU = "controllerActionWheelClose",
      FU = "controllerActionWheelPick";
    let oU = !1;
    const DU = () => oU,
      EU = UU => {
        oU = UU
      }
  },
  9381: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      e: () => yU
    });
    let cU = 0;
    const yU = () => {
        cU++
      },
      QU = () => cU
  },
  9273: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => oU,
      g: () => yU,
      k: () => AU,
      m: () => QU,
      p: () => cU,
      t: () => DU
    });
    const cU = "controllerQuickChatWheelOpen",
      yU = "controllerQuickChatWheelAim",
      QU = "controllerQuickChatWheelCommit",
      AU = "controllerQuickChatWheelClose";
    let FU = !1;
    const oU = () => FU,
      DU = UU => {
        FU = UU
      }
  },
  37550: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU,
      f: () => QU
    });
    const cU = new Map;

    function yU(UU) {
      var XU;
      return null === UU ? null : null !== (XU = cU.get(UU)) && void 0 !== XU ? XU : null
    }

    function QU(UU, XU) {
      return cU.set(UU, XU), () => {
        cU.get(UU) === XU && cU.delete(UU)
      }
    }
  },
  37689: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => TX,
      g: () => bX
    });
    var cU = zU(4608),
      yU = zU(646),
      QU = zU(4122),
      AU = zU(4142),
      FU = zU.n(AU);
    const oU = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      DU = "EV_boolean",
      EU = "EV_double",
      YU = "EV_string",
      NU = "EV_doubleArr",
      IU = "EV_armour",
      pU = "EV_other",
      aU = "EV_cosmetics",
      tU = "OEV_boolean",
      gU = "OEV_int",
      kU = "OEV_double",
      GU = "OEV_string",
      BU = "OEV_stringArr",
      ZU = "OEV_meshScaling",
      RU = "IV_int",
      PU = "IV_string",
      WU = "IV_doubleArr",
      dU = "IV_double",
      LU = "HV_int",
      eU = "HV_slots",
      CU = "EnvV_string",
      wU = "EnvV_double",
      qU = "EnvV_doubleArr",
      OU = "EnvV_boolean",
      SU = {
        type: YU,
        name: YU,
        position: NU,
        rotation: NU,
        scale: EU,
        speed: EU,
        jumping: DU,
        crouching: DU,
        cameraPitch: EU,
        armSwinging: DU,
        heldItemName: YU,
        heldItemEnchantmentTier: YU,
        pose: YU,
        followingEId: YU,
        ridingVehicleEId: YU,
        leaderboardTop: YU,
        meshKind: YU,
        meshOpts: YU,
        followingOffset: NU,
        shouldMatchFollowingEntityRotation: DU,
        meshOffset: NU,
        baseRenderHeading: EU,
        armour: IU,
        YM: pU,
        playerCustomisations: aU,
        variation: YU,
        metaInfo: YU,
        soundName: YU,
        volume: EU,
        refDistance: EU,
        maxHearDist: EU,
        rate: EU,
        aiState: YU
      },
      rU = {
        opacity: kU,
        zIndex: gU,
        overlayColour: GU,
        canSee: tU,
        meshScaling: ZU,
        nameTagInfo: GU,
        multilineTextBox: GU,
        hasPriorityNametag: tU,
        ranks: BU,
        nameColour: GU,
        _isAlive: tU,
        _invisibleEffect: tU,
        _invincible: tU,
        killfeedColour: GU,
        hideNameSeed: gU,
        _glowingEffect: tU,
        lockHeadToBody: tU
      },
      uU = {
        itemName: PU,
        amount: RU,
        position: WU,
        size: dU,
        attributes: PU
      },
      fU = {
        skyBox: CU,
        fogColourOverride: CU,
        fogChunkDistanceOverride: wU,
        cameraTint: qU,
        fogOnSkybox: OU,
        fogBlockDistanceOverride: wU
      },
      iU = {
        type: "array",
        items: "double"
      },
      HU = {
        type: "array",
        items: "int"
      },
      MU = {
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
      vU = {
        type: "map",
        values: iU
      };

    function VU(UU, XU) {
      return {
        type: "record",
        name: UU,
        fields: [{
          name: "x",
          type: XU
        }]
      }
    }
    const sU = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", VU(tU, "boolean"), VU(gU, "int"), VU(kU, "double"), VU(GU, "string"), VU(BU, {
              type: "array",
              items: "string"
            }), VU(ZU, vU)]
          }]
        }
      },
      nU = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", VU(DU, "boolean"), VU(EU, "double"), VU(YU, "string"), VU(NU, iU), VU(IU, MU), VU(pU, sU), VU(aU, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      mU = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", VU(RU, "int"), VU(PU, "string"), VU(dU, "double"), VU(WU, iU)]
          }]
        }
      },
      lU = {
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
      xU = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", VU(LU, "int"), VU(eU, lU)]
        }]
      },
      JU = {
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
      jU = {
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
      KU = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", VU(CU, "string"), VU(wU, "double"), VU(qU, iU), VU(OU, "boolean")]
          }]
        }
      },
      bU = [{
        name: "Jw",
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
      TU = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "Ly",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "wy",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "qy",
              type: ["null", "string", iU],
              default: null
            }, {
              name: "Oy",
              type: ["null", "double"],
              default: null
            }, {
              name: "Sy",
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
          name: "FX",
          type: "string"
        }, {
          name: "oX",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "DX",
          type: "double"
        }, {
          name: "EX",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "fQ",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: iU
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "iX",
          type: "string"
        }, {
          name: "gU",
          type: ["null", "double"],
          default: null
        }, {
          name: "kU",
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
          name: "nX",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "mX",
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
      hU = [{
        name: "position",
        type: iU
      }, {
        name: "direction",
        type: iU
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

    function UX() {
      const UU = [{
        name: "entities",
        type: {
          type: "map",
          values: nU
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: mU
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: hU
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
              items: xU
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", JU],
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
              name: "iX",
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
        type: jU
      }, {
        name: "environment",
        type: KU
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: bU
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: TU
        }
      }), UU
    }
    const XX = {
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
                name: "LY",
                type: "int"
              }, {
                name: "position",
                type: iU
              }, {
                name: "direction",
                type: iU
              }, {
                name: "easing",
                type: iU
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
    let zX;

    function cX(UU) {
      if (9 === UU) return zX ??= (XU = [{
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
            name: "bq",
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
            fields: UX()
          }
        }
      }, XX], FU().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: XU
      }, {
        EY: Object.create(null)
      })), zX;
      var XU
    }
    var yX = zU(3116);
    let QX, AX, FX, oX;
    const DX = 12;
    var EX, YX;
    const NX = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, !1, 16, 127, 128, 129, 4, !0, 130, 131, 15, 126, null, 2, 10, 5, 11, 9];

    function IX(UU) {
      return typeof zz !== NX[5] && zz ? (new zz).decode(new cz(UU)) : typeof yz !== NX[5] && yz ? yz.from(UU).toString("utf-8") : Fz(UU)
    }

    function pX() {}

    function aX() {
      aX = function() {}
    }
    var tX, gX;
    aX(EX = {}, YX = ["VPRfK#+O$cl!lxb(CF", "|hxw6_[~h;iDNp5Rm>NH)+6Z/;_yP@Gd[ce%c[@1", "#q]w=g>,jdKp%x@x9OZ3aEw5joU2T_@", "PaLt1T>?Z", "aPxG#}*R_9=G7+J)}P6EOGt8Zk;LR.s", "aM=GAli9>@5?L|t|nP:#SMFsDz.mJ;xYqXBH8$i0", "B*J*P~k~*=SrI+5e5e3f0SEnKopR^|>n;r0", 'LWoaNlP0"MtzDA_u', '%q{qY6G8]>u/c/J)!"0xTfsryIN:T_wNN9yCE?,?!r', "GcR(Eule%>HL#x`{|=$,bazd1O*Hz[%5Lcq5qTM~pOpqH]jvrOdw5A50", "@<R#`OGnQq", "eBDxDA??&=5[U0", 'pQJt{lfe&q<#x.mzU":,J#.Dx.', "lPtwZ_:O.Q15(x?^iHp", "~h)ZM6u:0>O3Dx2(pOEtNM20", "fRxws_@@Vdo$%+EeKcd,{^!~w9`j}py(oz#k", 'Z}H%/BnO"K!63|](', "M>Ikx+F", "vZ!q2XKAXIj^[p~{h/TaGO2!Z?;x{pvDPR>(%N`^msBy;|uyZ%!q0~}1", "Mp]*+Cv^Zo}y04|^>q0w|abzdO:S=pvDbMS%=G*3pO^7dx=^aP~#Y]=0", "XZGXR#}^g>fD9+=NqvT3I$i~tOoai/cNIIy*yC[ZJIrx24", "{/4E.&FDiKikmNQNbS<w4/Q!&>va[/fv;Op", "4eUwXS7rtO|:Y0=Y@}<,0Ti0szo^}6T(g/{anvt^&=l^#xT2|1", "}vL%RV9?is7sF;{|Mh3#,P&02di/1", 'zvT##]{~6?l;*.}5a/p&T#.?c}g&qg}R6>","B)~L}p)1', '["rw$u}^nc>yj.$N);A(2Ozdi$}tx0>x}P|w^>jnc9Baf@#nswPE1g{olWWc1', ">RlS`:zd0dUez/IhMhF5ML:R]>7N!pBVER+wyOF", "7$K%)VHdpOzpH0U^2Rekz_C#!Sz[fvL|y,H(3TF", "Q(WGdXLLvdNKK=N5LF", ")=6a^8t8m${", "iHr[#[,?>o#}iAkytI.3x+wrmWO$4)}5bPTaSGyAk.", "x~VtCV]{lMs[0&urPzeEY^a}[IeL;py^OB7&]Or0Gr?!7+)|", "P.&[U>dA:omKr4", "E>*GcS5T8@cS%X[|m{S,4hJDiKA7A]Q5IqNGF[cnfr=tO)U(Aqu%", "QRg|l:r0,W", "H</>BLDDS@Np?@^54eU*A}!#&q>:XX55e<_ZQPX}%", "Hqwap[9sbPwc(x$([zP#d", 'tXqwE]%YZ@Z)8NT(S"je<]cOqcv/{Xxz}>iGq/q}r9h', "{|6Hu8:n0}X6?@F5/*$ez:N9o}rk/;vvmpyx3:!{^oslF", "Z}N3/BBZ0;Z>/$)|", "mz23.,O^7c+6Fp6y>IbZxOEnyPbyDX5e$hXaPgl8$zx[8=#(xvm3_f.0", "gIfZoE(5!qz[<$uV.wV7<mh,f}Lrc=|NPpR7{tVN;r", "xRiep/55I>Zm_%Cd@=Aq", "!vsCbCfemM/WI;GdW%~%6EmR_9u#q/6VzO,wh8>#?c{", 'j"BSv!ID".vpUy$(OcrG`7#0szMyw$Ih,MDl{^Wn$IvQ6:/uEO=Es_g~p', "?.@k|8Re;rHIUyg(|=t>e8??)9$3PyKhjhFqYm)?wQ!jD[/h(RhwK", "D*MZ9,=rc=_~E.2{`(Ma)", "w*F*u>yexc[!FXOe{vL(utkDs?vE]yW", "bsXq~]P!/9Wmr4.I!P*w9,E8%", "TZN,j,h5t>X}Yv7u4>|[R&E}o=35D+bR6*u%s,~rS?qx1", "0=v(FLKdr}6Q~t$YNOS%JCF", "nBJt~!U{}sqqB;fH=vq56hjn8ds/`0nH.OL>.OB5zqA7M%", "I~0e)&uOe.0h&voDBh>%|$ZDq.rp#;uv#/[tb#U#$WJd+.>{x1", "k%43M?(9lspx8DMY+/)C<lQZK>ek~tNV](S,>vsrDc*", "e=%H2:(s%O(", "vZ+S4_%so}t7wXXv*v2#6[!Z_qS3IpW", "iBkx4=W_GS^", "1^4k/6OlA;BafymY,B:E4Nb3C}0?1)cH~B1", "PHE7$6mR];@cFuqd$>h[y", "7$<G/MlOHKRhz):y6Y{ZAu$8pd3]L|s", "!aUw6&!ZsIH$}.Zd!F", "BR>(rV*@4k4mCyW|{esq(XR3OcYpq)XD/qzZ[=~#xI3RL|J)6Z(G|", "He5H/}h#fq27:t3Vv<C7JO|5f;V", "C$~E^a2sFKY^8%`)2cBk7P65GWF]^&Ih=RgSP[7~7S.[EpQzCc5HK&_@vd", "h/f>nm0Yt>%)Z_058.5E*v[D}r}ypV|($BfZ28a1(K5L+0", "a*AtqEBZ7$MW1", 'mBm76_v^YWAWK/fDF^*sMg>!DItPONJ^8".f.', ";>YlDAv^`??$H0JY3Bxk~?OA~W>:wAI(r}Ma)", "AvLaq7Zst;Aa9NAu:B>(!NB9kIi.]:x^#9636S;1", "Xq6EB~U#H9<^K=Ix4<Sk,OF", "5RHtaL(#kP5D1[]{}(]*>Gz3A=]S2mZrRqcZzX@AP;3p)+9", "heP3_NeA_9=G3p*{TF", "LZ5HPSG1WPzh!AxY[$2#YaF", "XpNGT#c@&;JG~VcNk<0*xCZ#yc>($VbnNvF5|8Uhfq1>n/.", '%r/t&Mml&>&MJX"ur}ik[hCh&d%la/3V+$27`V]{.r', ":P`qUVe3]=Ljhvezn*=Ht}sD(cC,G[O(,Psq|$Z?Iq4BF", ";>je>S{rUW", "8Yn*c=G1", 'EIe3(V#Tc;"DM+"uPc1CPhP~sz=.b%!u|I}%', 'gHzxAvVrQ>Hh);zx>c`>f{INls9[Y|PewZP3%TDNh=Y!pXb(C")x4:UDM?b61', "r|G3x{_1rqCtJpoR<vG&aL3}zOq/H0fDNXIH&GW3M@X6]6$nyc6%", 'Z%!a9NTTor)LW;tu*"O*1uT9o97!!^r(qXu7jLankz', "F=2#zN%D9KjQhyRe2wiecEI?6dt", 'oBxwsN>{mWNpgppNNRG,__}}X@]ydVzx`"USG,%Yx$6!F', "ucTH`7|0!S9h._BD$hAad:h,6og,t=oDG.=kK7FrA9", "pw}qHmclu@d@8=ORUcR#A?q3Y.3Bg/sH_/bw,=r?3", ";=pGh>!DX?UGetK^V=dk0gxntr*a&VvHRI#Sh^6,o=]}~yZ", '9}H#X_g!o9/3|tbn]"B&Z,jO1}}6D+p<kt)fv{o5Jz=wbDzx9rp', "k,53qOV5qI@kDXhvcpnx==cn3o86w)URR{F59", "QvLtDV5,M?.]L|3vtI^e[P90q.$rB;kV1O,*]&M#W$]sJpM^peRq", '{|"3IPF', "(,JtrNxep>N[);45I;6(E?/0=SI]Mp+hrOc*/}1lGSD", "/Z!qrVF", "[HA%UCF", 'ZXTH*Gd^crkqg$=YxRD5C&"A|Iawh@Ihap`(G/fn)OC==xoe%%/Z}GJ~Bd=t1', 'NBm(ABeOR?z/"%@u&/b*/uD0', "D*bZ`#BZH}`_Y@Th`(:X<l$^Gr", "z|l4e{N9pOi!MpNze=H5AusowQ9vhtpH", "qX>%o,zyX?|?MpYHH,Ik", "GZylwX`O09a!=;QNXzu(rNFr1=%@bD9", 'X"L(u>t^ASG,F[cz51', '%9Y*$~s5iSC,`08^(vY[**Rn*o&a]0NH8(%e"}[9Nou#C_}eb/`7}?(r4', 'L*r*4=4yC$H::@?Y[Y"E}LuA0O?6Lp*(0t#e`O{Nn.kIBxAxGZG,mhF', 'E.Ffht2#YcPaMx3d5eCHk=M,DIx[7NfDIZS3>GRS"WWBE6zIOF', "h<9k~vHn`ob2`0|n/>3>NMc^7P|*o;(R=Ib>?[1d|z!tK/eN", '"Ocsr7FDvoYKK[yeuzMt1[K@4', "#OZEQ_g#w;&(D$fN[/)>$u1@Iq0[]_Z", "V=2tL&flv@O.s;g(pO}>K&sDP$:Qs+~{w/Bk", 'dZ~3$SplN>9Bw+"xeX.H^{[~3?BG0m9dpQCaK', "oP1[N8|5A;7S3&RhT6&s(CBZ>o71`.)|bF", "6&9)6tPI", "{ogRN47I", "`/uiR", "[_elhq3T", "1E}P_@2p", "!!kuT", "r&n};ux/", "PBDab$<k", "lU:)|4*8<[V!NDZR{ynT99EJ5PsrIpZR5Qzd5{l&v7rq@j{UpU=YT", 'mp5k4:hX^V8KE"eOY.Pv))6(!iL>?aeOKNST;;cMY48rIgEQDB', "R1Da|2Nk", "={8or{nB", "}AR^;InB", "EA#&uIky", "/hY9cd3y", "Xt%B", "1i/C;u|k", "!uTa4>Hk", "}CmwF", "E@[+", "j@Ta{r6k", "0C!f", "q@o$nVGk", "=QgxI!VI", "O8dr", "{CI|mRZI", "}eN#", "B8Qy{3ep"]), aX(Xz = function() {
      var UU, XU, zU, cU = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      aX(UU = void 0, XU = []);
      try {
        aX(UU = Object, XU[NX[11]]("".__proto__.constructor.name))
      } catch (cz) {}
      UU: for (zU = NX[0]; zU < cU[NX[4]]; zU++) try {
        var yU;
        for (UU = cU[zU](), yU = NX[0]; yU < XU[NX[4]]; yU++)
          if (typeof UU[XU[yU]] === NX[5]) continue UU;
        return UU
      } catch (cz) {}
      return UU || this
    }() || {}, zz = Xz.TextDecoder, cz = Xz.Uint8Array, yz = Xz.XY, Qz = Xz.String || String, Az = Xz.Array || Array, Fz = function() {
      var UU, XU, zU = new Az(NX[21]);
      return aX(UU = Qz[NX[8]] || Qz.fromCharCode, XU = []),
        function(cU) {
          var yU, QU, AU, FU;
          for (aX(QU = void 0, AU = cU[NX[4]], XU[NX[4]] = NX[0]), FU = NX[0]; FU < AU;) aX(QU = cU[FU++], QU <= NX[20] ? yU = QU : QU <= 223 ? yU = (31 & QU) << NX[7] | cU[FU++] & NX[6] : QU <= 239 ? yU = (QU & NX[27]) << NX[10] | (cU[FU++] & NX[6]) << NX[7] | cU[FU++] & NX[6] : Qz[NX[8]] ? yU = (QU & NX[9]) << 18 | (cU[FU++] & NX[6]) << NX[10] | (cU[FU++] & NX[6]) << NX[7] | cU[FU++] & NX[6] : (yU = NX[6], FU += NX[17]), XU[NX[11]](zU[yU] || (zU[yU] = UU(yU))));
          return XU.join("")
        }
    }()), (() => {
      function UU(UU) {
        return typeof EX[UU] === NX[5] ? EX[UU] = function(UU) {
          var XU, zU, cU, yU, QU, AU, FU;
          for (aX(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = NX[0], QU = NX[0], AU = -NX[1]), FU = NX[0]; FU < zU; FU++) {
            var oU = 'AGIvNhnD=BJHSM;/~,PE}UW?XYR[8e#`)u:9Lc_]F^1j|+QVa3$*foZb(6y!70w"%q@z&4ik5{<2xt>KCsdgm.TOrlp'.indexOf(XU[FU]);
            if (oU !== -NX[1])
              if (AU < NX[0]) AU = oU;
              else {
                aX(AU += oU * NX[12], yU |= AU << QU, QU += (AU & NX[13]) > NX[14] ? NX[15] : NX[16]);
                do {
                  aX(cU.push(yU & NX[3]), yU >>= NX[2], QU -= NX[2])
                } while (QU > NX[9]);
                AU = -NX[1]
              }
          }
          return AU > -NX[1] && cU.push((yU | AU << QU) & NX[3]), IX(cU)
        }(YX[UU]) : EX[UU]
      }
      const XU = NX[19],
        zU = UU(110) + UU(111) + UU(112),
        cU = [NX[0], NX[1], NX[30], NX[17]].map((UU => {
          (function(UU) {
            return typeof EX[UU] === NX[5] ? EX[UU] = function(UU) {
              var XU, zU, cU, yU, QU, AU, FU;
              for (aX(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = NX[0], QU = NX[0], AU = -NX[1]), FU = NX[0]; FU < zU; FU++) {
                var oU = 'JLTmRpoi8NAz_=F`|v7t]DGn4,*u;x>I#[.%~)5(?!"/6}:@3<w9d+X^$gy1{VrW&2B0sOkEflqjYPhSUcMHKCbQeaZ'.indexOf(XU[FU]);
                if (oU !== -NX[1])
                  if (AU < NX[0]) AU = oU;
                  else {
                    aX(AU += oU * NX[12], yU |= AU << QU, QU += (AU & NX[13]) > NX[14] ? NX[15] : NX[16]);
                    do {
                      aX(cU.push(yU & NX[3]), yU >>= NX[2], QU -= NX[2])
                    } while (QU > NX[9]);
                    AU = -NX[1]
                  }
              }
              return AU > -NX[1] && cU.push((yU | AU << QU) & NX[3]), IX(cU)
            }(YX[UU]) : EX[UU]
          })(113) in pX && function() {
            var UU, XU = function(XU, zU, cU) {
              var yU = {};
              return cU.length !== XU.length + zU.length ? NX[18] : UU(XU, zU, cU, NX[0], NX[0], NX[0], yU)
            };
            aX(UU = function(XU, zU, cU, yU, QU, AU, FU) {
              var oU = NX[18];
              return AU >= cU.length ? NX[24] : void 0 !== FU["" + yU + QU + AU] ? FU["" + yU + QU + AU] : (cU[AU] === XU[yU] && cU[AU] === zU[QU] ? oU = UU(XU, zU, cU, yU + NX[1], QU, AU + NX[1], FU) || UU(XU, zU, cU, yU, QU + NX[1], AU + NX[1], FU) : cU[AU] === XU[yU] ? oU = UU(XU, zU, cU, yU + NX[1], QU, AU + NX[1], FU) : cU[AU] === zU[QU] && (oU = UU(XU, zU, cU, yU, QU + NX[1], AU + NX[1], FU)), FU["" + yU + QU + AU] = oU, oU)
            }, console.log(XU))
          }();
          let XU = NX[0];
          for (let cU = NX[17]; cU >= NX[0]; cU--) {
            function yU(UU) {
              var XU, zU, cU, yU, QU, AU, FU;
              for (aX(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = NX[0], QU = NX[0], AU = -NX[1]), FU = NX[0]; FU < zU; FU++) {
                var oU = 'O+p~5u<AfB=C"Vr![wHW$D^Ev3?%NTbo(s|*Q8`_2F0cyRd@:t{L}P194SKe&J]hX>xUkni#q/m,l6YIZMGz7;aj)g.'.indexOf(XU[FU]);
                if (oU !== -NX[1])
                  if (AU < NX[0]) AU = oU;
                  else {
                    aX(AU += oU * NX[12], yU |= AU << QU, QU += (AU & NX[13]) > NX[14] ? NX[15] : NX[16]);
                    do {
                      aX(cU.push(yU & NX[3]), yU >>= NX[2], QU -= NX[2])
                    } while (QU > NX[9]);
                    AU = -NX[1]
                  }
              }
              return AU > -NX[1] && cU.push((yU | AU << QU) & NX[3]), IX(cU)
            }

            function QU(UU) {
              return typeof EX[UU] === NX[5] ? EX[UU] = yU(YX[UU]) : EX[UU]
            }
            XU = XU << NX[2] | zU[QU(114) + QU(115)](UU * NX[23] + cU)
          }
          return XU >>> NX[0]
        })),
        yU = (UU, XU) => UU << XU | UU >>> 32 - XU,
        QU = (UU, XU, zU, cU, QU) => {
          aX(UU[XU] += UU[zU], UU[QU] = yU(UU[QU] ^ UU[XU], NX[19]), UU[cU] += UU[QU], UU[zU] = yU(UU[zU] ^ UU[cU], NX[10]), UU[XU] += UU[zU], UU[QU] = yU(UU[QU] ^ UU[XU], NX[2]), UU[cU] += UU[QU], UU[zU] = yU(UU[zU] ^ UU[cU], NX[9]))
        };
      oX = (UU, zU, yU, AU) => {
        function FU(UU) {
          return typeof EX[UU] === NX[5] ? EX[UU] = function(UU) {
            var XU, zU, cU, yU, QU, AU, FU;
            for (aX(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = NX[0], QU = NX[0], AU = -NX[1]), FU = NX[0]; FU < zU; FU++) {
              var oU = '=/kzfx){w5+Ip,1@s&jOo[Hq<.G3;FE9aeN?8!6gJWc](_|QPhYD}lC>XBKbi%LZ*t0T2"7uvdr:4$n#MV^myA`~URS'.indexOf(XU[FU]);
              if (oU !== -NX[1])
                if (AU < NX[0]) AU = oU;
                else {
                  aX(AU += oU * NX[12], yU |= AU << QU, QU += (AU & NX[13]) > NX[14] ? NX[15] : NX[16]);
                  do {
                    aX(cU.push(yU & NX[3]), yU >>= NX[2], QU -= NX[2])
                  } while (QU > NX[9]);
                  AU = -NX[1]
                }
            }
            return AU > -NX[1] && cU.push((yU | AU << QU) & NX[3]), IX(cU)
          }(YX[UU]) : EX[UU]
        }
        FU(116);
        const oU = new DataView(zU[FU(NX[28])], zU[FU(NX[20]) + FU(NX[21])], DX),
          DU = new Uint32Array(XU);
        aX(DU[FU(NX[22])](cU), DU[FU(NX[22])](UU, NX[23]), DU[NX[15]] = oU[FU(NX[25]) + FU(NX[26])](NX[0], NX[24]), DU[NX[16]] = oU[FU(NX[25]) + FU(NX[26])](NX[23], NX[24]), DU[NX[27]] = oU[FU(NX[25]) + FU(NX[26])](NX[2], NX[24]));
        const EU = new Uint32Array(XU),
          YU = new Uint8Array(EU[FU(NX[28])]);
        for (let NU = NX[0], IU = yU; NU < AU[FU(132)]; NU += XU * NX[23], IU++) {
          function pU(UU) {
            var XU, zU, cU, yU, QU, AU, FU;
            for (aX(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = NX[0], QU = NX[0], AU = -NX[1]), FU = NX[0]; FU < zU; FU++) {
              var oU = 'PIpUYifu1#rc0H@8WCg+QdTB`Je~tmOM6jvDn_q%R2a")ws}GK>LXb|o.9h7?V/kNSFEAl<=](&x[y{^:3;$!Z4,z5*'.indexOf(XU[FU]);
              if (oU !== -NX[1])
                if (AU < NX[0]) AU = oU;
                else {
                  aX(AU += oU * NX[12], yU |= AU << QU, QU += (AU & NX[13]) > NX[14] ? NX[15] : NX[16]);
                  do {
                    aX(cU.push(yU & NX[3]), yU >>= NX[2], QU -= NX[2])
                  } while (QU > NX[9]);
                  AU = -NX[1]
                }
            }
            return AU > -NX[1] && cU.push((yU | AU << QU) & NX[3]), IX(cU)
          }

          function aU(UU) {
            return typeof EX[UU] === NX[5] ? EX[UU] = pU(YX[UU]) : EX[UU]
          }
          aU(133), aX(DU[NX[10]] = IU, EU[aU(134)](DU));
          for (let gU = NX[0]; gU < NX[31]; gU++) {
            function kU() {
              console.log((function(UU) {
                var XU, zU, cU, yU, QU, AU, FU = NX[0];
                for (aX(XU = {}, zU = NX[0], cU = NX[0], yU = NX[0], QU = UU.length), AU = NX[0]; AU < QU; AU++) {
                  var oU;
                  for (aX(XU = {}, zU = NX[0], cU = NX[1]), oU = AU + NX[1]; oU < QU; oU++) UU[AU].x !== UU[oU].x || UU[AU].y !== UU[oU].y ? (XU[yU = UU[AU].y === UU[oU].y ? Number.MAX_SAFE_INTEGER : (UU[AU].x - UU[oU].x) / (UU[AU].y - UU[oU].y)] || (XU[yU] = NX[0]), aX(XU[yU]++, zU = Math.max(zU, XU[yU]))) : cU++;
                  aX(zU += cU, FU = Math.max(FU, zU))
                }
                return FU
              }))
            }
            aU(135) in pX && kU(), aX(QU(EU, NX[0], NX[23], NX[2], NX[10]), QU(EU, NX[1], NX[32], NX[34], NX[15]), QU(EU, NX[30], NX[7], NX[31], NX[16]), QU(EU, NX[17], NX[9], NX[33], NX[27]), QU(EU, NX[0], NX[32], NX[31], NX[27]), QU(EU, NX[1], NX[7], NX[33], NX[10]), QU(EU, NX[30], NX[9], NX[2], NX[15]), QU(EU, NX[17], NX[23], NX[34], NX[16]))
          }
          for (let GU = NX[0]; GU < XU; GU++) EU[GU] += DU[GU];
          const tU = Math[aU(136)](XU * NX[23], AU[aU(137)] - NU);
          for (let BU = NX[0]; BU < tU; BU++) AU[NU + BU] ^= YU[BU]
        }
      }
    })();
    const kX = ["b", 0, 1, 95, 88, 152, 9, 23, "e", "f", "d", 8, 255, "length", 3, 10, 214, "undefined", void 0, 2, 12, 114, 11, 63, 6, "fromCodePoint", 7, "push", "a", 31, 115, "g", 91, 8191, 13, 14, 127, 128, 58, 226, 87, 215, 176, 211, 5, 4, null, "h", 47, 247, 166, 133, 29, 60, 96, "i", 92, 51, 131, 239, 216, 106, 35, ")", 130, 61, 54, 134, 228, 40, 145, "c", 108, 235, 124, 83, 120, 190, 229, 192, 24, 136, 194];

    function GX(...UU) {
      return UU[kX[13]] = kX[2], typeof zz !== kX[17] && zz ? (new zz).decode(new cz(UU[kX[1]])) : typeof yz !== kX[17] && yz ? yz.from(UU[kX[1]]).toString("utf-8") : Fz(UU[kX[1]])
    }

    function BX() {}

    function ZX() {
      ZX = function() {}
    }
    ZX(tX = {}, gX = ['rflz:p?wrR>g&?56brr(l!f[j4P7]K6^]T>(#Qi]+>`::"jp)s&zs[#[OiT', 'wJ*DU!GJ$t|S"xtTl.)Av(;wbKa*$&', "{jRF$lPZ0", "bj&abVkqLj}>jBvqBePDTL0=*K", "oJp.p1^Xf/.oj!zfW+IN*v15;jsA_!yq9n|LWoKwFcIK:", "_sgRI+LJCr(n3KRqK[gIJJ36e.QL!BendJD^m.9:", "?Dj#oJ+XYte4gKpq{JaDh_%[CbT", "]+r(6ZA~*@aK}<QTI+K02(!/66}8`}%^U+8Fr!P:=fQwz`CW9ccIN", "Wr<)^YqY]6^", ")b%wV*YX:3", "yc%*<b&gYtZ2]2WeTU1G.[}Nbb1:jlGq}Tpo@!@0`qZwmv$q+^{F>", "@M$InbQ]Z~Jq:", "kZG}klK[B,/o,lw^`FS)bpl~|7u?3hvn*A^DOr2XYZ,fwbl]L!`(/Ou8x,S):", "sD5g`)c5Yq{Pt3/?s]zInWk", "I!x^Frt?J6ci9Tz6yc).Glk", "HTi0GaJ6JlfhJh=E).k<S]$R#qt<;s=5bTR#xoc8fF_|XxE5/jkN&ik", "j3{LdWV5>r5zM2QpZk", "XF2(?;#A!,:<]2A", "yc>|;2XXa7h&:", "YsAwhr_5Bl.|fb2WFt#*>dV>Ot$N^<jymb!LwVx>*bO2F`?NqG,^hZ|g$t", '<cLA^9%~B3LLv>48?+r}"WWX7R', 'ZrhV"w]6nfqA9$IN{s/F', "KA}a.~/N}.,~]2:MIl3w{GrNw6KS$etT8J}&^Gyyk4#}{9An?AhRS12XTj", "0.).c)+Ai~N0hnGek7pAP!x5aZ=?Y<i]oFT<]LAw_7Cj>?p6", "xT[(Jok", "w.K(F!a~a3qOTefy$qXN/UP8jq", "}GtDI#Q7cZWLYG4XzIo.4dg0Rzi76K4j=S5<ee4qGfRAZX%S(+$", '1S@){9L>oFPn"x|C.SMI+!p>Pl4]wsped2z)jrZ]QR', 'UrcJd9$CL~[oze|jN+bVZJf%gbG28btWNUPI`lYXJ.LV"3(]OrmJd_*%kt', "j[R<Q]?taF5*TTk?pf*TBZNtlRS*OT3pIe*&", 'YboJhZL0>,tSOWsnSyRNf9=8(~AOZeUn"bpNN', ";Qygy]Z>!,", "b+]D:O1DRjw4(2:8kox.uwd5bfN(]$!<KA:AAvUA&/;", ">Ze}ph[[R>6Xk<a^EGNL2(1jjqZ}qeeXcys", "9ckg.2{wI4hV;!i];c^UyYDZMb*oHbt", "F}2|{**w<r}eMK/X_.pNdw*X9/0AI9|eJeQ|B?{[nj4]]K2nE3?DO94AkF?", "0Ia<.pEYgjbVM~mC#2,|f*Uq$t~}8atf.c$", '(F1|n#[/^r0NyG#y"LHVUv7v_3iv|KS|iFe0', "V81|;74Xbb~;v?2WpTK(tUb5q3a@^s", "]!(FclJxXjyzOK/?eZtzih:]PZf(R3N?0]FNB", "r8:<$U<Do.MsOKb5W+&w]`qYSt}h=2M6hn$", "WZ2LKd[wIl^OH9wyytV0CgmX|tUYP9yq", "AU:JXbV:tjUUe}6yC8c._Y_]yj,!oBuSP!,}sdk", "f7X.fGmY&6l],)!T@oR<,", "m;HVY(*SkF", "fG5goe}2v6GYQ>dyj[,};l>5m@4[:", "&G;ox`RqZKeS:", "2C5g3asgo3_Kz&", '?.mI8x]>YF)Erd"^[c).bJX?{f|(Td"^]+9T}(ujbfI*k)Nj', "vA3w]gc5+6!wOK5WpjY.BZ112/0x+9^]8Uj#zv$?K7l^7~Q<Zrn<P[ZxzrIS:", "QAF#t!(:", ")s&z<1D6gcW", "8.q)2lZ:R(J", "WJR_S1?Ymr%P?9<]xJ,|S]0dW/jOV)rNA.r*wJ:5|q/0F!|8}4|*8xJ7,>S", "sU=wJgexHj%ImoSjto/FY(`5x3}8H<.SuRMVG(v5tbCjF)t", "]+[^EG:5fFgYSngTPJURTWW$LK1iH<M6yU)L~V85A", "#SyNXGJ:", ".AFNV(:716e*:Bl]?!:AY*YSlr`0#vWe*jS<D", 'OryNli=v+.Q(&le|RqYA6#x]a6LE$&,S"^}DQ;%XVb,!Y]15mQJ)MYk', 'x|tV`"2w43k+Hs/qusgV#a~NcFcK6K]X3MoA~l`5C@0B$&WXBF+a_ok', "SMPRNy(1Yt&AD!<]s,gi(2I/+.B!SoA", "D+5N0lP]S7NrLlRT_85JdZ1OlrWS]ThpFIMI<yYy9lo", "{s`U=96]!Z&e2o,]AGJDD`.$", "4rR#5+{t~r`41X[y(bP&qrM]e/E(|abC$I/F.eW/N4^S)3CTrc{ow~57e>]", "ko`^RU.y}", "{sD|_w$NzK/oa>Sq=2UJvS>5!i449TxT&3}Vs(}CbR,AnB5pCM9&exk", "mi=*n#<0JZ,|hvb5jJ[*[+@v4.WKH9^N+.`wwe=ZdqaYS&EyEcBg0%N$", "7r/JX9%y}ZaXt<Cn)!]IFv]07t+2}s?nd^C<4)UN0", "vC`0?Y|Z|4Bgk", "R}JRYwAR}.Q}5Bc8mbE(%#s6YFar/b><!TOLhZ$CYt9R;s&M", "~!1G,*u5E61l^<=ERU%|u*I$r7CY>`NDg;~R@%<]>,", "#Qga@9![VKF8VXsn%b/oHh3d,>S</37Df[9DJpqXIqMYb34eAo:.*UP>gf", "GKO*k!J8!Zm[y9NC(+:<rlg1^r@B+9[y2F)oy+O0jF[(.>z", 'ffX_4d"y>K?', "W8E*x2bDQq}Oj);^", "Tc)o^1g5[i]X[>uBgk", ":./.mQk", "`c(F|`x]A", 'LJNoe]@v$txbxW0W?T#|JeGZrR"n>lBS(k', "EGSDi~wwe~a*2~~D7c.^B", "sF2G0O/qe6i^:", "kUTg8Wjxct6N:", "R]YFzlQ:qF]<T&YT;QoAWLnd5c$>>)YSpeqg1v|]&", "HrOo<#QvOix(horXwAtDg9lYw.=D5!3p$FFg{Zk", "Ao(*PiN/lKVUrvn]:lH0@rhX}F^)z$m?V@mJGa#Us6", "deK0Gd/XX>IvObRWUA.|%1i]y~I", "o.RNyYk", "T3jAl27:", "G@(}$rc]^,K~O$jSyJTD|xW/ucmi6KbCgJdJT*(:", "tZ|^t9PJ#;pK}3oTFtpw/)A[uf}~sT&XDc}&fr$CZcrb{G1]=Q^zw)G:", 'QS@)XWk?qlnX&?dp[J"|<xu:yj:Nv?AnUC%0$["w!,', "B7Q(>UQ:@rD~iBkqRZnN=a=:5~;YmWopAZWL7l%UA", "Qc!.VZM]Qrp0`})n3.=F", "KGGoH`k", "xfJI8xhw[i4VJ<eqd|wV3r;[riDj>BIj$lX.vdk", "9b:g1_F7ati", "!cPTN`L:", "Jy@)~JYAJF9U^)<DaJ6V.h&i?6n~:", 'ID|F@v@n;ftNJKK6X3#w4l367i!4C`"yBJyN`"&n~bHX^s8DETyL].o:', "0}wDrpj6I7O}F!G6YK<V*UM]9/sxV)XC0G|^S.??grO@r>!SByMVSyw$_t", "(8VGEa+NCbg:M~gnc.}&h*@:`R$N~dG|P!6zxhHt`r[*4omB8.?(si3:", "4F|^>*E[Kb!@5BK<2+3F~)}X778fD!FpJZxo+?w~sF&SV)ES9e[wO9j:", ')f"V`"rN1~Y?GKVTWlaVXw?XtK', "HeA|[Y!/;~}O*ssX%nfUwg75BZq!fsQp58j#fGq[6trLGKkN%JvTc!zq&", "5jwUlp*XlR", "pJnA|x6v]60+UW%BxcB<%G`:3q8~4vF|ge8}", '/bE_H2VD/7cKpT&MMr:gpL"wQ4kxZ}}j{cEoo;o1gb`@1}6S', "nU8wYwj:", '3.+(Vv:i5K0hM$lN[r"a9Z&vdZa', "07)J(Otw*Rb", 'jte0hw"X8~s<mo:X[G1U%_mS=fBf#dp6VSaJ]gvguj/2C>_C%j7^$S3i?6hn:', "HcXoWyJ0PtuUj?PjK:", 'pD"iDGw~7q`Ktx8];KIF^.vDJFi', "y+0wWyh[yj%:sW15ncd.$l/tv69RUvr?.+TVCg(>bbkxS`J5", 'd2bip`q[Bt?SN&T?D+:Nk"dZu~BO;Bm](rQ^qW@7:7M', "{jMIa[Wq#@/@+3yTKFmJROH$A>:F}<Z^`yx^0ivDC@_sCnL6~erw;Jk", "+Ar(Ar0:", "z0<+7lzp", "jD,5EXM:", "gymW=ho:", "K,P+*y%:", "!3m4o^)T", "Btdv^auT", "tFmWqrqH;xJZ:", "g8vIK(uT},>Gp", "VU_;0gu5XqQyp", "G8]+TNu5NsEy:", "uRZ>AM`Gp)ku:", "X<z+kyu5vEG$p", 'Vb.>1zYTe@=Ky_U>IR*4"P9S32', "C5Sn9o{Stc<|eN[>UbSn?Jv3nA", "y8]lag:/v,JJ{z#>Br6vMguHA}", "Vnn+~JDxI,7x|z>)O<eO.gR#A}", "onn+7ZpuPqUSO!4,fyC4<Wv3pA", "y8]lL(i7R,#g{gmsO<KOhJmFH,", "Hn8NeJ9R[Qbg6Tms/_{0gWER2A", "`:29M%3U", "Y1Q:u<pA", "arJ:Tym|", "!^PtTWKA", "TpQ:vCfA", "SZ;!^=[A", "=BiH!t|", ".1m@[MdrU^JFLV^xPB9&G(ojWg", "P,(Fhy},Z6#QDw&rLrSU;fI(+g", "b7k9H<=x0+Ub?@2Rpc<y@MLxfr", '?"r^}M_A', "10ZOi]U4", "&H7LiKAR", ">ozU2Veu", "_R|!XvFkH8", "+@EOS!z%nE", "}0!YIAb)b=", "{;IaPyOO9m", "#Kih;yF+", "%7IeV~VsYL$", "c)@}B]%QcY&", "V|UR5K?@gW&", "bp]ai#01M^o", "q?EU#u%)fJ?", "#KMC#k!vt$&", "$)OUMF!0<", "BDTfx_l+:ZrUtp@f$)Kao4`1;5", "=91&`P/1%b|.:Ggf@D1&F#w;&C", 'tnuv}"zmwH##/_Qf2~8w3"dsCE', 'B&&!i#0L$HXL._f^<|:<T")QCE', "P&&!XcMd4V@1<{aH>t=a|ew;MC", 'tnuvOkJX)HQ"/"I[<|U<,#I7sH', 's&nG:#`)gWD"8+I[mp/R"eh)5C', "40;]B%6E", "f=<1B>`E", "Uu#,0Mlf", "C0tN]7wE", ">f)OwP2Z", "sBCG??x1AD2", "9tGc#B_i", "vq:C7*]Y", ",V9C5<(]GIy6N@&n`rsP[[2X}t?:|H&n}^wD}`,SZJ:lQE`VHV!AP", "SB<Us~*W|X)KPF8NeT`Lyy(%@upA?/8NKbwm77[Hes)5DxPd9Y", "X0GkVwBUp*e{B", "k:@7j9PQ!S_+F", "`:Ag1(_Jl^T3F", "o{zK", "wc6atCj^", "4Kn$LCr^", "Tc?1", "ccp`@C#^", "CN%Mf", "0cST+Mp", "0csG}Zk^", "mc+1", "?KK5XN*Z", "SX;oWwVA", "k;nKkW;c", "wmnwM[)Rw&", "PM#k:Y?K", "CJ*s", '"mes6', "Y^0s", "*M+w!/#", "v`GTgV?K"]), ZX(Xz = function(...UU) {
        ZX(UU[kX[13]] = kX[1], UU[-kX[15]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], UU[kX[2]] = kX[18], UU[kX[10]] = []);
        try {
          ZX(UU[kX[2]] = Object, UU[kX[10]][kX[27]]("".__proto__.constructor.name))
        } catch (gX) {}
        UU: for (UU[kX[14]] = kX[1]; UU[kX[14]] < UU[-kX[15]][kX[13]]; UU[kX[14]]++) try {
          for (UU[kX[2]] = UU[-kX[15]][UU[kX[14]]](), UU[kX[16]] = kX[1]; UU[kX[16]] < UU[kX[10]][kX[13]]; UU[kX[16]]++)
            if (typeof UU[kX[2]][UU[kX[10]][UU[kX[16]]]] === kX[17]) continue UU;
          return UU[kX[2]]
        } catch (gX) {}
        return UU[kX[2]] || this
      }() || {}, zz = Xz.TextDecoder, cz = Xz.Uint8Array, yz = Xz.XY, Qz = Xz.String || String, Az = Xz.Array || Array, Fz = function(...UU) {
        return ZX(UU[kX[13]] = kX[1], UU[kX[28]] = new Az(kX[37]), UU[kX[0]] = Qz[kX[25]] || Qz.fromCharCode, UU[kX[19]] = []),
          function(...XU) {
            for (ZX(XU[kX[13]] = kX[2], XU[kX[22]] = kX[18], XU[kX[0]] = kX[18], XU[kX[21]] = XU[kX[1]][kX[13]], UU[kX[19]][kX[13]] = kX[1]), XU[kX[20]] = kX[1]; XU[kX[20]] < XU[kX[21]];) ZX(XU[kX[0]] = XU[kX[1]][XU[kX[20]]++], XU[kX[0]] <= kX[36] ? XU[kX[22]] = XU[kX[0]] : XU[kX[0]] <= 223 ? XU[kX[22]] = (XU[kX[0]] & kX[29]) << kX[24] | XU[kX[1]][XU[kX[20]]++] & kX[23] : XU[kX[0]] <= kX[59] ? XU[kX[22]] = (15 & XU[kX[0]]) << kX[20] | (XU[kX[1]][XU[kX[20]]++] & kX[23]) << kX[24] | XU[kX[1]][XU[kX[20]]++] & kX[23] : Qz[kX[25]] ? XU[kX[22]] = (XU[kX[0]] & kX[26]) << 18 | (XU[kX[1]][XU[kX[20]]++] & kX[23]) << kX[20] | (XU[kX[1]][XU[kX[20]]++] & kX[23]) << kX[24] | XU[kX[1]][XU[kX[20]]++] & kX[23] : (XU[kX[22]] = kX[23], XU[kX[20]] += kX[14]), UU[kX[19]][kX[27]](UU[kX[28]][XU[kX[22]]] || (UU[kX[28]][XU[kX[22]]] = UU[kX[0]](XU[kX[22]]))));
            return UU[kX[19]].join("")
          }
      }()),
      function(...UU) {
        return UU[kX[13]] = kX[2], typeof tX[UU[kX[1]]] === kX[17] ? tX[UU[kX[1]]] = function(...UU) {
          for (ZX(UU[kX[13]] = kX[2], UU[-kX[5]] = 'k:$s}&A0RFz@t>K3Bjq6f,E8XnT<^DN|I_S]?eWpy5CMHQ[x!oaJwi.(;Z~bl`r7/c4P+v2G)LUg*V#OYdh9"1%={um', UU[kX[0]] = "" + (UU[kX[1]] || ""), UU[-kX[4]] = UU[kX[0]].length, UU[kX[10]] = [], UU[kX[8]] = kX[1], UU[kX[9]] = kX[1], UU[kX[7]] = -kX[2]), UU[-kX[3]] = kX[1]; UU[-kX[3]] < UU[-kX[4]]; UU[-kX[3]]++)
            if (UU[kX[6]] = UU[-kX[5]].indexOf(UU[kX[0]][UU[-kX[3]]]), UU[kX[6]] !== -kX[2])
              if (UU[kX[7]] < kX[1]) UU[kX[7]] = UU[kX[6]];
              else {
                ZX(UU[kX[7]] += UU[kX[6]] * kX[32], UU[kX[8]] |= UU[kX[7]] << UU[kX[9]], UU[kX[9]] += (UU[kX[7]] & kX[33]) > kX[4] ? kX[34] : kX[35]);
                do {
                  ZX(UU[kX[10]].push(UU[kX[8]] & kX[12]), UU[kX[8]] >>= kX[11], UU[kX[9]] -= kX[11])
                } while (UU[kX[9]] > kX[26]);
                UU[kX[7]] = -kX[2]
              } return UU[kX[7]] > -kX[2] && UU[kX[10]].push((UU[kX[8]] | UU[kX[7]] << UU[kX[9]]) & kX[12]), GX(UU[kX[10]])
        }(gX[UU[kX[1]]]) : tX[UU[kX[1]]]
      }(116) + "2" in BX && function(...UU) {
        function XU(...UU) {
          for (ZX(UU[kX[13]] = kX[2], UU[kX[28]] = 'p:TOBj5}0A[CU#sb2,)/"i6RH84+JVLW>o3t?_YdP%&*m1u7nK;SQEkI`$!@Xcqx]Z=.(gyaN{Flvr^Mz9<w|DGfhe~', UU[kX[0]] = "" + (UU[kX[1]] || ""), UU[-kX[30]] = UU[kX[0]].length, UU[-kX[29]] = [], UU[kX[8]] = kX[1], UU[kX[9]] = kX[1], UU[kX[31]] = -kX[2]), UU[kX[11]] = kX[1]; UU[kX[11]] < UU[-kX[30]]; UU[kX[11]]++)
            if (UU[kX[6]] = UU[kX[28]].indexOf(UU[kX[0]][UU[kX[11]]]), UU[kX[6]] !== -kX[2])
              if (UU[kX[31]] < kX[1]) UU[kX[31]] = UU[kX[6]];
              else {
                ZX(UU[kX[31]] += UU[kX[6]] * kX[32], UU[kX[8]] |= UU[kX[31]] << UU[kX[9]], UU[kX[9]] += (UU[kX[31]] & kX[33]) > kX[4] ? kX[34] : kX[35]);
                do {
                  ZX(UU[-kX[29]].push(UU[kX[8]] & kX[12]), UU[kX[8]] >>= kX[11], UU[kX[9]] -= kX[11])
                } while (UU[kX[9]] > kX[26]);
                UU[kX[31]] = -kX[2]
              } return UU[kX[31]] > -kX[2] && UU[-kX[29]].push((UU[kX[8]] | UU[kX[31]] << UU[kX[9]]) & kX[12]), GX(UU[-kX[29]])
        }

        function zU(...UU) {
          return UU[kX[13]] = kX[2], typeof tX[UU[kX[1]]] === kX[17] ? tX[UU[kX[1]]] = XU(gX[UU[kX[1]]]) : tX[UU[kX[1]]]
        }
        UU[kX[13]] = kX[1], ZX(UU[kX[38]] = zU(117) + zU(118) + zU(119) + zU(kX[76]) + zU(121) + zU(122) + "om", UU[-kX[39]] = zU(123) + zU(kX[74]) + zU(125) + zU(126) + zU(kX[36]) + zU(kX[37]) + "?", UU[kX[40]] = zU(129) + zU(kX[64]) + zU(kX[58]) + zU(132) + zU(kX[51]) + zU(kX[67]) + zU(135) + kX[63], UU[kX[38]].match(UU[-kX[39]] + UU[kX[40]]))
      }(), (() => {
        function UU(UU) {
          return typeof tX[UU] === kX[17] ? tX[UU] = function(...UU) {
            for (ZX(UU[kX[13]] = kX[2], UU[-kX[38]] = '|ZABUkzjg:]7,)1Xhr`R;aCSJDV&e?TOHPx(NM[Gf#}2_%Kun@9l4>^!{0.cp8+6msEi</tyF5"v3oWbQw=~$ILdY*q', UU[kX[19]] = "" + (UU[kX[1]] || ""), UU[kX[48]] = UU[kX[19]].length, UU[-kX[50]] = [], UU[kX[44]] = kX[1], UU[kX[24]] = kX[1], UU[kX[26]] = -kX[2]), UU[kX[47]] = kX[1]; UU[kX[47]] < UU[kX[48]]; UU[kX[47]]++)
              if (UU[kX[49]] = UU[-kX[38]].indexOf(UU[kX[19]][UU[kX[47]]]), UU[kX[49]] !== -kX[2])
                if (UU[kX[26]] < kX[1]) UU[kX[26]] = UU[kX[49]];
                else {
                  ZX(UU[kX[26]] += UU[kX[49]] * kX[32], UU[kX[44]] |= UU[kX[26]] << UU[kX[24]], UU[kX[24]] += (UU[kX[26]] & kX[33]) > kX[4] ? kX[34] : kX[35]);
                  do {
                    ZX(UU[-kX[50]].push(UU[kX[44]] & kX[12]), UU[kX[44]] >>= kX[11], UU[kX[24]] -= kX[11])
                  } while (UU[kX[24]] > kX[26]);
                  UU[kX[26]] = -kX[2]
                } return UU[kX[26]] > -kX[2] && UU[-kX[50]].push((UU[kX[44]] | UU[kX[26]] << UU[kX[24]]) & kX[12]), GX(UU[-kX[50]])
          }(gX[UU]) : tX[UU]
        } [][kX[13]] = kX[1];
        const XU = kX[6],
          zU = UU(137) + UU(138) + UU(139) + UU(140) + UU(141) + UU(142),
          cU = {
            [kX[6]]: UU(143) + UU(144) + UU(kX[70]) + "1"
          },
          yU = (...XU) => {
            XU[kX[13]] = kX[2], UU(146) + "B" in BX && function(...UU) {
              UU[kX[13]] = kX[1]
            }();
            const zU = cU[XU[kX[1]]];
            if (!zU) {
              function yU(...UU) {
                for (ZX(UU[kX[13]] = kX[2], UU[-kX[54]] = 'fuEq=4DW$r1eFPXz(.iT`GO)Y/?[!CUBNLAQjhxId@60H#n]&mwt"acKR95~2<^Jlov37|g%Vky>,b;SM*8}+:spZ{_', UU[kX[19]] = "" + (UU[kX[1]] || ""), UU[kX[14]] = UU[kX[19]].length, UU[kX[10]] = [], UU[-kX[57]] = kX[1], UU[kX[24]] = kX[1], UU[kX[56]] = -kX[2]), UU[kX[47]] = kX[1]; UU[kX[47]] < UU[kX[14]]; UU[kX[47]]++)
                  if (UU[kX[55]] = UU[-kX[54]].indexOf(UU[kX[19]][UU[kX[47]]]), UU[kX[55]] !== -kX[2])
                    if (UU[kX[56]] < kX[1]) UU[kX[56]] = UU[kX[55]];
                    else {
                      ZX(UU[kX[56]] += UU[kX[55]] * kX[32], UU[-kX[57]] |= UU[kX[56]] << UU[kX[24]], UU[kX[24]] += (UU[kX[56]] & kX[33]) > kX[4] ? kX[34] : kX[35]);
                      do {
                        ZX(UU[kX[10]].push(UU[-kX[57]] & kX[12]), UU[-kX[57]] >>= kX[11], UU[kX[24]] -= kX[11])
                      } while (UU[kX[24]] > kX[26]);
                      UU[kX[56]] = -kX[2]
                    } return UU[kX[56]] > -kX[2] && UU[kX[10]].push((UU[-kX[57]] | UU[kX[56]] << UU[kX[24]]) & kX[12]), GX(UU[kX[10]])
              }

              function QU(UU) {
                return typeof tX[UU] === kX[17] ? tX[UU] = yU(gX[UU]) : tX[UU]
              }

              function AU() {
                var UU, XU, zU;

                function cU(UU) {
                  return typeof tX[UU] === kX[17] ? tX[UU] = function(...UU) {
                    for (ZX(UU[kX[13]] = kX[2], UU[kX[2]] = 'Mz+<2(9ERCg=@Q[D5H^moJ8)sna!#BOefP;%FplA4N*KIxdX&UY1Whj$?q{ZSbVLucrTk"t}G/7vw~y3_`|].06>,:i', UU[-kX[58]] = "" + (UU[kX[1]] || ""), UU[kX[60]] = UU[-kX[58]].length, UU[-kX[62]] = [], UU[kX[61]] = kX[1], UU[kX[59]] = kX[1], UU[kX[31]] = -kX[2]), UU[kX[11]] = kX[1]; UU[kX[11]] < UU[kX[60]]; UU[kX[11]]++)
                      if (UU[kX[55]] = UU[kX[2]].indexOf(UU[-kX[58]][UU[kX[11]]]), UU[kX[55]] !== -kX[2])
                        if (UU[kX[31]] < kX[1]) UU[kX[31]] = UU[kX[55]];
                        else {
                          ZX(UU[kX[31]] += UU[kX[55]] * kX[32], UU[kX[61]] |= UU[kX[31]] << UU[kX[59]], UU[kX[59]] += (UU[kX[31]] & kX[33]) > kX[4] ? kX[34] : kX[35]);
                          do {
                            ZX(UU[-kX[62]].push(UU[kX[61]] & kX[12]), UU[kX[61]] >>= kX[11], UU[kX[59]] -= kX[11])
                          } while (UU[kX[59]] > kX[26]);
                          UU[kX[31]] = -kX[2]
                        } return UU[kX[31]] > -kX[2] && UU[-kX[62]].push((UU[kX[61]] | UU[kX[31]] << UU[kX[59]]) & kX[12]), GX(UU[-kX[62]])
                  }(gX[UU]) : tX[UU]
                }
                ZX(UU = cU(150) + cU(151) + cU(kX[5]) + cU(153) + cU(154), XU = cU(155) + cU(156) + cU(157) + cU(158) + cU(159) + cU(160) + cU(161), zU = cU(162) + cU(163) + cU(164) + cU(165) + cU(kX[50]) + cU(167) + cU(168) + kX[63], UU.match(XU + zU))
              }
              throw QU(149) in BX && AU(), new Error(QU(169) + QU(170) + QU(171) + QU(172) + " v" + XU[kX[1]])
            }
            return [kX[1], kX[2], kX[19], kX[14], kX[45], kX[44], kX[24], kX[26]].map((XU => (UU(173) + "D" in BX && function(...UU) {
              function XU() {}
              UU[kX[13]] = kX[1], ZX(UU[-kX[69]] = function(...UU) {
                for (ZX(UU[kX[13]] = kX[19], UU[kX[28]] = kX[1], UU[kX[14]] = kX[1], UU[kX[45]] = new XU(kX[1]), UU[kX[44]] = UU[kX[45]], UU[-kX[67]] = UU[kX[1]], UU[kX[68]] = UU[kX[2]]); UU[-kX[67]] !== kX[46] || UU[kX[68]] !== kX[46];) ZX(UU[kX[14]] = (UU[-kX[67]] ? UU[-kX[67]].val : kX[1]) + (UU[kX[68]] ? UU[kX[68]].val : kX[1]) + UU[kX[28]], UU[kX[28]] = Math.floor(UU[kX[14]] / kX[15]), UU[kX[44]].next = new XU(UU[kX[14]] % kX[15]), UU[kX[44]] = UU[kX[44]].next, UU[-kX[67]] = UU[-kX[67]] ? UU[-kX[67]].next : kX[46], UU[kX[68]] = UU[kX[68]] ? UU[kX[68]].next : kX[46]);
                return UU[kX[28]] && (UU[kX[44]].next = new XU(UU[kX[28]])), UU[kX[45]].next
              }, console.log(UU[-kX[69]]))
            }(), parseInt(zU[function(...UU) {
              return UU[kX[13]] = kX[2], typeof tX[UU[kX[1]]] === kX[17] ? tX[UU[kX[1]]] = function(...UU) {
                for (ZX(UU[kX[13]] = kX[2], UU[kX[2]] = 'XqU_SIJE^8cu9xnC4kpYV+~aLFv|b.lsW)Kym>AOQeTgt,w{0]}2`17<(;=6BH!dDNi3#":jzPRhGM5/f?or$&*[%Z@', UU[kX[0]] = "" + (UU[kX[1]] || ""), UU[kX[64]] = UU[kX[0]].length, UU[kX[45]] = [], UU[kX[66]] = kX[1], UU[kX[9]] = kX[1], UU[-kX[65]] = -kX[2]), UU[kX[47]] = kX[1]; UU[kX[47]] < UU[kX[64]]; UU[kX[47]]++)
                  if (UU[kX[6]] = UU[kX[2]].indexOf(UU[kX[0]][UU[kX[47]]]), UU[kX[6]] !== -kX[2])
                    if (UU[-kX[65]] < kX[1]) UU[-kX[65]] = UU[kX[6]];
                    else {
                      ZX(UU[-kX[65]] += UU[kX[6]] * kX[32], UU[kX[66]] |= UU[-kX[65]] << UU[kX[9]], UU[kX[9]] += (UU[-kX[65]] & kX[33]) > kX[4] ? kX[34] : kX[35]);
                      do {
                        ZX(UU[kX[45]].push(UU[kX[66]] & kX[12]), UU[kX[66]] >>= kX[11], UU[kX[9]] -= kX[11])
                      } while (UU[kX[9]] > kX[26]);
                      UU[-kX[65]] = -kX[2]
                    } return UU[-kX[65]] > -kX[2] && UU[kX[45]].push((UU[kX[66]] | UU[-kX[65]] << UU[kX[9]]) & kX[12]), GX(UU[kX[45]])
              }(gX[UU[kX[1]]]) : tX[UU[kX[1]]]
            }(174)](XU * kX[11], XU * kX[11] + kX[11]), 16))))
          };
        ZX(QX = UU => (function(...UU) {
          return UU[kX[13]] = kX[2], typeof tX[UU[kX[1]]] === kX[17] ? tX[UU[kX[1]]] = function(...UU) {
            for (ZX(UU[kX[13]] = kX[2], UU[kX[2]] = 'uiYobIQfmDPnUWTr@,$?53`)].+RcLKACNg&=;x^VF|4zl6_vHE:~S!%/qO7as8GJtde{pjZwB(}<*[1M"29h>Xky#0', UU[kX[0]] = "" + (UU[kX[1]] || ""), UU[kX[71]] = UU[kX[0]].length, UU[kX[10]] = [], UU[kX[70]] = kX[1], UU[-kX[73]] = kX[1], UU[kX[72]] = -kX[2]), UU[kX[47]] = kX[1]; UU[kX[47]] < UU[kX[71]]; UU[kX[47]]++)
              if (UU[kX[55]] = UU[kX[2]].indexOf(UU[kX[0]][UU[kX[47]]]), UU[kX[55]] !== -kX[2])
                if (UU[kX[72]] < kX[1]) UU[kX[72]] = UU[kX[55]];
                else {
                  ZX(UU[kX[72]] += UU[kX[55]] * kX[32], UU[kX[70]] |= UU[kX[72]] << UU[-kX[73]], UU[-kX[73]] += (UU[kX[72]] & kX[33]) > kX[4] ? kX[34] : kX[35]);
                  do {
                    ZX(UU[kX[10]].push(UU[kX[70]] & kX[12]), UU[kX[70]] >>= kX[11], UU[-kX[73]] -= kX[11])
                  } while (UU[-kX[73]] > kX[26]);
                  UU[kX[72]] = -kX[2]
                } return UU[kX[72]] > -kX[2] && UU[kX[10]].push((UU[kX[70]] | UU[kX[72]] << UU[-kX[73]]) & kX[12]), GX(UU[kX[10]])
          }(gX[UU[kX[1]]]) : tX[UU[kX[1]]]
        }(175) + "3" in BX && function(...UU) {
          UU[kX[13]] = kX[1]
        }(), UU >= XU), AX = (...UU) => {
          function XU(...UU) {
            return UU[kX[13]] = kX[2], typeof tX[UU[kX[1]]] === kX[17] ? tX[UU[kX[1]]] = function(...UU) {
              for (ZX(UU[kX[13]] = kX[2], UU[-kX[76]] = 'pu^v3=%97`1A<?"cqXwBs+60&/k4xfm]T|r;~2j[tLUKyOz@.Q#N{W$ainbPD5Eo(gR!C,I8FVHlMG}>)ZJS:d_Yhe*', UU[kX[19]] = "" + (UU[kX[1]] || ""), UU[kX[71]] = UU[kX[19]].length, UU[kX[10]] = [], UU[kX[8]] = kX[1], UU[kX[9]] = kX[1], UU[kX[26]] = -kX[2]), UU[kX[47]] = kX[1]; UU[kX[47]] < UU[kX[71]]; UU[kX[47]]++)
                if (UU[kX[55]] = UU[-kX[76]].indexOf(UU[kX[19]][UU[kX[47]]]), UU[kX[55]] !== -kX[2])
                  if (UU[kX[26]] < kX[1]) UU[kX[26]] = UU[kX[55]];
                  else {
                    ZX(UU[kX[26]] += UU[kX[55]] * kX[32], UU[kX[8]] |= UU[kX[26]] << UU[kX[9]], UU[kX[9]] += (UU[kX[26]] & kX[33]) > kX[4] ? kX[34] : kX[35]);
                    do {
                      ZX(UU[kX[10]].push(UU[kX[8]] & kX[12]), UU[kX[8]] >>= kX[11], UU[kX[9]] -= kX[11])
                    } while (UU[kX[9]] > kX[26]);
                    UU[kX[26]] = -kX[2]
                  } return UU[kX[26]] > -kX[2] && UU[kX[10]].push((UU[kX[8]] | UU[kX[26]] << UU[kX[9]]) & kX[12]), GX(UU[kX[10]])
            }(gX[UU[kX[1]]]) : tX[UU[kX[1]]]
          }
          UU[kX[13]] = kX[19];
          const zU = crypto[XU(183) + XU(184) + XU(185)](new Uint8Array(DX)),
            cU = yX[kX[10]][XU(186) + XU(187)](UU[kX[2]], {
              [XU(188)]: kX[2]
            });
          oX(yU(UU[kX[1]]), zU, kX[2], cU);
          const QU = new Uint8Array(DX + cU[XU(189)]);
          return ZX(QU[XU(kX[77])](zU), QU[XU(kX[77])](cU, DX)), QU
        }, FX = (...XU) => {
          function cU(UU) {
            return typeof tX[UU] === kX[17] ? tX[UU] = function(UU) {
              var XU, zU, cU, yU, QU, AU, FU;
              for (ZX(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = kX[1], QU = kX[1], AU = -kX[2]), FU = kX[1]; FU < zU; FU++) {
                var oU = '#IKjJ0CcRkst)en`uPB7o&<A{g6]"v+wT2@3dUQyMhDqz*O:9>?^%rF!~ElGm;_XL=.HY4/NWx5aV,fi[b}1SZ8p$|('.indexOf(XU[FU]);
                if (oU !== -kX[2])
                  if (AU < kX[1]) AU = oU;
                  else {
                    ZX(AU += oU * kX[32], yU |= AU << QU, QU += (AU & kX[33]) > kX[4] ? kX[34] : kX[35]);
                    do {
                      ZX(cU.push(yU & kX[12]), yU >>= kX[11], QU -= kX[11])
                    } while (QU > kX[26]);
                    AU = -kX[2]
                  }
              }
              return AU > -kX[2] && cU.push((yU | AU << QU) & kX[12]), GX(cU)
            }(gX[UU]) : tX[UU]
          }
          if (XU[kX[13]] = kX[19], UU(191) in BX && function(...UU) {
              ZX(UU[kX[13]] = kX[1], UU[kX[28]] = function(...UU) {
                if (ZX(UU[kX[13]] = kX[2], UU[kX[28]] = UU[kX[1]].length), UU[kX[28]] < kX[19]) return kX[1];
                if (ZX(UU[kX[0]] = Math.max(...UU[kX[1]]), UU[kX[71]] = Math.min(...UU[kX[1]])), UU[kX[0]] === UU[kX[71]]) return kX[1];
                for (ZX(UU[kX[51]] = Array(UU[kX[28]] - kX[2]).fill(Number.MAX_SAFE_INTEGER), UU[kX[78]] = Array(UU[kX[28]] - kX[2]).fill(Number.MIN_SAFE_INTEGER), UU[kX[24]] = Math.ceil((UU[kX[0]] - UU[kX[71]]) / (UU[kX[28]] - kX[2])), UU[kX[31]] = kX[1]), UU[kX[11]] = kX[1]; UU[kX[11]] < UU[kX[28]]; UU[kX[11]]++) UU[kX[1]][UU[kX[11]]] !== UU[kX[71]] && UU[kX[1]][UU[kX[11]]] !== UU[kX[0]] && ZX(UU[kX[31]] = Math.floor((UU[kX[1]][UU[kX[11]]] - UU[kX[71]]) / UU[kX[24]]), UU[kX[51]][UU[kX[31]]] = Math.min(UU[kX[51]][UU[kX[31]]], UU[kX[1]][UU[kX[11]]]), UU[kX[78]][UU[kX[31]]] = Math.max(UU[kX[78]][UU[kX[31]]], UU[kX[1]][UU[kX[11]]]));
                for (ZX(UU[kX[55]] = Number.MIN_SAFE_INTEGER, UU[-kX[79]] = UU[kX[71]]), UU[kX[22]] = kX[1]; UU[kX[22]] < UU[kX[28]] - kX[2]; UU[kX[22]]++) UU[kX[51]][UU[kX[22]]] === Number.MAX_SAFE_INTEGER && UU[kX[78]][UU[kX[22]]] === Number.MIN_SAFE_INTEGER || ZX(UU[kX[55]] = Math.max(UU[kX[55]], UU[kX[51]][UU[kX[22]]] - UU[-kX[79]]), UU[-kX[79]] = UU[kX[78]][UU[kX[22]]]);
                return UU[kX[55]] = Math.max(UU[kX[55]], UU[kX[0]] - UU[-kX[79]]), UU[kX[55]]
              }, console.log(UU[kX[28]]))
            }(), XU[kX[2]][UU(kX[79])] < DX) {
            function FU(...UU) {
              for (ZX(UU[kX[13]] = kX[2], UU[kX[28]] = '_cTCEh<=>fz]{O3GQ%uHv$J.s!:[XKd@"S^i8Njew7ZPb;mr2Ba/qAxWFD(9tY?UL+,~nk5I|}4R`0ygV1p&6l#)*oM', UU[kX[0]] = "" + (UU[kX[1]] || ""), UU[kX[14]] = UU[kX[0]].length, UU[-kX[80]] = [], UU[kX[8]] = kX[1], UU[kX[54]] = kX[1], UU[kX[31]] = -kX[2]), UU[-kX[21]] = kX[1]; UU[-kX[21]] < UU[kX[14]]; UU[-kX[21]]++)
                if (UU[kX[6]] = UU[kX[28]].indexOf(UU[kX[0]][UU[-kX[21]]]), UU[kX[6]] !== -kX[2])
                  if (UU[kX[31]] < kX[1]) UU[kX[31]] = UU[kX[6]];
                  else {
                    ZX(UU[kX[31]] += UU[kX[6]] * kX[32], UU[kX[8]] |= UU[kX[31]] << UU[kX[54]], UU[kX[54]] += (UU[kX[31]] & kX[33]) > kX[4] ? kX[34] : kX[35]);
                    do {
                      ZX(UU[-kX[80]].push(UU[kX[8]] & kX[12]), UU[kX[8]] >>= kX[11], UU[kX[54]] -= kX[11])
                    } while (UU[kX[54]] > kX[26]);
                    UU[kX[31]] = -kX[2]
                  } return UU[kX[31]] > -kX[2] && UU[-kX[80]].push((UU[kX[8]] | UU[kX[31]] << UU[kX[54]]) & kX[12]), GX(UU[-kX[80]])
            }

            function oU(...UU) {
              return UU[kX[13]] = kX[2], typeof tX[UU[kX[1]]] === kX[17] ? tX[UU[kX[1]]] = FU(gX[UU[kX[1]]]) : tX[UU[kX[1]]]
            }

            function DU(...UU) {
              ZX(UU[kX[13]] = kX[1], UU[kX[28]] = function(...UU) {
                for (ZX(UU[kX[13]] = kX[2], UU[kX[28]] = kX[1], UU[kX[0]] = {}, UU[kX[71]] = kX[1], UU[kX[10]] = kX[1], UU[kX[44]] = kX[1], UU[kX[9]] = UU[kX[1]].length), UU[kX[31]] = kX[1]; UU[kX[31]] < UU[kX[9]]; UU[kX[31]]++) {
                  for (ZX(UU[kX[0]] = {}, UU[kX[71]] = kX[1], UU[kX[10]] = kX[2]), UU[kX[81]] = UU[kX[31]] + kX[2]; UU[kX[81]] < UU[kX[9]]; UU[kX[81]]++) UU[kX[1]][UU[kX[31]]].x !== UU[kX[1]][UU[kX[81]]].x || UU[kX[1]][UU[kX[31]]].y !== UU[kX[1]][UU[kX[81]]].y ? (UU[kX[1]][UU[kX[31]]].y === UU[kX[1]][UU[kX[81]]].y ? UU[kX[44]] = Number.MAX_SAFE_INTEGER : UU[kX[44]] = (UU[kX[1]][UU[kX[31]]].x - UU[kX[1]][UU[kX[81]]].x) / (UU[kX[1]][UU[kX[31]]].y - UU[kX[1]][UU[kX[81]]].y), UU[kX[0]][UU[kX[44]]] || (UU[kX[0]][UU[kX[44]]] = kX[1]), ZX(UU[kX[0]][UU[kX[44]]]++, UU[kX[71]] = Math.max(UU[kX[71]], UU[kX[0]][UU[kX[44]]]))) : UU[kX[10]]++;
                  ZX(UU[kX[71]] += UU[kX[10]], UU[kX[28]] = Math.max(UU[kX[28]], UU[kX[71]]))
                }
                return UU[kX[28]]
              }, console.log(UU[kX[28]]))
            }
            throw oU(193) in BX && DU(), new Error(zU)
          }
          const QU = new Uint8Array(XU[kX[2]][cU(kX[82])](DX));
          oX(yU(XU[kX[1]]), XU[kX[2]][cU(kX[82])](kX[1], DX), kX[2], QU);
          const AU = new(yX[kX[10]][cU(195) + kX[8]])({
            [cU(196)]: !0
          });
          if (AU[cU(197)](QU), AU[cU(198)] || !AU[cU(199)]) throw new Error(zU);
          return AU[cU(200)]
        })
      })();
    var RX = zU(37698),
      PX = zU(37706),
      WX = zU(37708);

    function dX(UU) {
      return QU.XY.from(Uint8Array.from(UU))
    }

    function LX(UU) {
      return Array.from(UU)
    }

    function eX(UU, XU) {
      return {
        [UU]: {
          x: XU
        }
      }
    }

    function CX(UU) {
      if (null === UU || "object" !== typeof UU || Array.isArray(UU)) return UU;
      const XU = Object.keys(UU);
      if (1 !== XU.length) return UU;
      const zU = UU[XU[0]];
      return null !== zU && "object" === typeof zU && !Array.isArray(zU) && "x" in zU ? zU.x : UU
    }

    function wX(UU, XU) {
      return void 0 === XU ? null : oU.has(UU) ? null === XU ? null : JSON.stringify(XU) : XU
    }

    function qX(UU, XU) {
      return null === XU && oU.has(UU) ? null : "string" === typeof XU && oU.has(UU) ? JSON.parse(XU) : XU
    }

    function OX(UU, XU, zU) {
      return (0, yU.P)(zU) ? null : eX(UU, wX(XU, zU))
    }

    function SX(UU, XU) {
      return (0, yU.P)(XU) ? null : qX(UU, CX(XU))
    }

    function rX(UU) {
      const XU = {};
      for (const zU in UU) {
        const cU = UU[zU];
        XU[zU] = void 0 === cU ? null : cU
      }
      return XU
    }

    function uX(UU) {
      const XU = {};
      for (const zU in UU) {
        const cU = UU[zU];
        null !== cU && void 0 !== cU && (XU[zU] = cU)
      }
      return XU
    }

    function fX(UU, XU) {
      return Object.prototype.hasOwnProperty.call(UU, XU)
    }

    function iX(UU, XU) {
      const zU = {};
      for (const cU in UU) {
        const yU = UU[cU];
        zU[cU] = XU(yU)
      }
      return zU
    }

    function HX(UU, XU, zU) {
      const cU = [];
      for (let yU = 0; yU < XU.length; yU++) {
        const QU = XU[yU];
        fX(UU, QU) && cU.push({
          i: yU,
          v: zU(QU, UU[QU])
        })
      }
      return cU
    }

    function MX(UU, XU, zU) {
      const cU = {};
      for (const yU of UU) {
        const UU = XU[yU.i];
        void 0 !== UU ? cU[UU] = zU(UU, yU.v) : console.error(`Unknown Partial field index ${yU.i}`)
      }
      return cU
    }

    function vX(UU, XU) {
      return (0, yU.P)(XU) ? null : "YM" === UU ? function(UU) {
        return eX(pU, HX(UU, PX.x, ((UU, XU) => OX(rU[UU], UU, XU))))
      }(XU) : OX(SU[UU], UU, XU)
    }

    function VX(UU, XU) {
      return (0, yU.P)(XU) ? null : "YM" === UU ? function(UU) {
        return (0, yU.P)(UU) ? null : MX(UU, PX.x, SX)
      }(CX(XU)) : SX(UU, XU)
    }

    function sX(UU) {
      const {
        type: XU,
        ...zU
      } = UU, cU = {};
      for (const yU in zU) {
        const UU = zU[yU];
        cU[yU] = wX(yU, UU)
      }
      if ("chunkAdded" === XU || "chunkRemoved" === XU) cU.rle = dX(cU.rle);
      else if ("playSound" === XU) {
        const UU = cU.wy;
        cU.wy = (0, yU.P)(UU) ? null : rX(UU)
      } else if ("customKillfeed" === XU) {
        var QU, AU;
        cU.killer = rX(null !== (QU = cU.killer) && void 0 !== QU ? QU : {}), cU.victim = rX(null !== (AU = cU.victim) && void 0 !== AU ? AU : {})
      }
      return {
        [XU]: cU
      }
    }

    function nX(UU) {
      const XU = Object.keys(UU)[0],
        zU = UU[XU],
        cU = {};
      for (const yU in zU) {
        const UU = zU[yU];
        cU[yU] = qX(yU, UU)
      }
      if ("chunkAdded" === XU || "chunkRemoved" === XU) cU.rle = LX(cU.rle);
      else if ("playSound" === XU) {
        const UU = cU.wy;
        cU.wy = (0, yU.P)(UU) ? null : uX(UU)
      } else if ("customKillfeed" === XU) {
        var QU, AU;
        cU.killer = uX(null !== (QU = cU.killer) && void 0 !== QU ? QU : {}), cU.victim = uX(null !== (AU = cU.victim) && void 0 !== AU ? AU : {})
      } else "animateEntity" === XU && function(UU) {
        const XU = null === UU || void 0 === UU ? void 0 : UU.tX;
        if ((0, yU.P)(XU)) return;
        for (const zU in XU) XU[zU].scale ??= []
      }(cU.animationScript);
      return {
        type: XU,
        ...cU
      }
    }

    function mX(UU) {
      var XU, zU;
      return (0, yU.P)(UU) ? null : {
        name: UU.name,
        amount: null !== (XU = UU.amount) && void 0 !== XU ? XU : null,
        attributes: JSON.stringify(null !== (zU = UU.attributes) && void 0 !== zU ? zU : {})
      }
    }

    function lX(UU) {
      if ((0, yU.P)(UU)) return null;
      const XU = UU;
      return {
        name: XU.name,
        amount: XU.amount,
        attributes: JSON.parse(XU.attributes)
      }
    }

    function xX(UU) {
      if ((0, yU.P)(UU)) return null;
      return {
        fullSlotsArray: Array.isArray(UU.slots),
        entries: HX(UU, PX.n, ((UU, XU) => {
          if ((0, yU.P)(XU)) return null;
          if ("slots" === UU) {
            const UU = Array.isArray(XU) ? function(UU) {
              const XU = {};
              for (let zU = 0; zU < UU.length; zU++) XU[zU] = UU[zU];
              return XU
            }(XU) : XU;
            return eX(eU, function(UU) {
              const XU = {};
              for (const zU in UU) {
                const cU = UU[zU];
                XU[zU] = mX(cU)
              }
              return XU
            }(UU))
          }
          return eX(LU, XU)
        }))
      }
    }

    function JX(UU) {
      if ((0, yU.P)(UU)) return;
      const XU = UU.fullSlotsArray;
      return MX(UU.entries, PX.n, ((UU, zU) => {
        if ((0, yU.P)(zU)) return null;
        if ("slots" === UU) {
          const UU = function(UU) {
            const XU = {};
            for (const zU in UU) {
              const cU = UU[zU];
              XU[Number(zU)] = lX(cU)
            }
            return XU
          }(CX(zU));
          return XU ? function(UU) {
            const XU = [];
            for (let zU = 0; zU < yU.o; zU++) XU.push(zU in UU ? UU[zU] : null);
            return XU
          }(UU) : UU
        }
        return CX(zU)
      }))
    }

    function jX(UU) {
      return {
        entities: iX(UU.entities, (UU => HX(UU, PX.l, vX))),
        items: iX(UU.items, (UU => HX(UU, PX.p, ((UU, XU) => OX(uU[UU], UU, XU))))),
        camera: UU.camera,
        hotbar: xX(UU.hotbar),
        playerHud: (0, yU.P)(UU.playerHud) ? null : HX(UU.playerHud, PX.q, ((UU, XU) => (0, yU.P)(XU) ? null : function(UU, XU) {
          return {
            [UU]: XU
          }
        }("double", XU))),
        effects: (0, yU.P)(UU.effects) ? null : (0, RX.m)(UU.effects),
        uiElements: HX(UU.uiElements, PX.y, ((UU, XU) => (0, yU.P)(XU) ? null : JSON.stringify(XU))),
        environment: HX(UU.environment, PX.t, ((UU, XU) => OX(fU[UU], UU, XU))),
        structuralEvents: UU.structuralEvents.map(sX),
        ephemeralEvents: UU.ephemeralEvents.map(sX)
      }
    }

    function KX(UU) {
      var XU;
      const zU = {
          entities: iX(UU.entities, (UU => {
            const XU = MX(UU, PX.l, VX),
              zU = XU.type ? (0, cU.t)(XU.type) : null;
            return zU && (XU.type = "Mesh", XU.meshKind = zU.meshKind, XU.meshOpts = zU.meshOpts), XU
          })),
          items: iX(UU.items, (UU => MX(UU, PX.p, SX))),
          camera: {
            ...UU.camera,
            charging: null !== (XU = UU.camera.charging) && void 0 !== XU && XU
          },
          uiElements: MX(UU.uiElements, PX.y, ((UU, XU) => "string" === typeof XU ? JSON.parse(XU) : XU)),
          environment: MX(UU.environment, PX.t, SX),
          structuralEvents: UU.structuralEvents.map((UU => {
            const XU = nX(UU);
            return "Jw" === XU.type ? (XU.fromBlockData ??= null, XU.toBlockData ??= null) : "chunkAdded" !== XU.type && "chunkRemoved" !== XU.type || (XU.sharedBlockData ??= []), XU
          })),
          ephemeralEvents: UU.ephemeralEvents.map((UU => nX(UU)))
        },
        QU = JX(UU.hotbar);
      return void 0 !== QU && (zU.hotbar = QU), (0, yU.P)(UU.playerHud) || (zU.playerHud = MX(UU.playerHud, PX.q, ((UU, XU) => (0, yU.P)(XU) ? null : function(UU) {
        if (null === UU || "object" !== typeof UU || Array.isArray(UU)) return UU;
        const XU = Object.keys(UU);
        return 1 !== XU.length || "int" !== XU[0] && "double" !== XU[0] ? UU : UU[XU[0]]
      }(XU)))), (0, yU.P)(UU.effects) || (zU.effects = (0, RX.h)(UU.effects)), zU
    }
    let bX, TX;
    var hX, Uz, Xz, zz, cz, yz, Qz, Az, Fz;
    const oz = [2, 0, 1, 8, "c", "a", 9, 7, "e", 167, "d", 255, "length", "undefined", void 0, 85, 3, 228, 63, 6, "fromCodePoint", 12, "push", 206, 214, 42, 231, 78, 226, 91, 172, 8191, 88, 13, 14, 4, 41, 185, 100, 58, 72, 73, 184, "g", 5, 170, 138, 57, 136, "j", 23, 49, 113, 193, 62, "h", 124, 232, 219, 114, 248, 60, "b", 227, 47, "i", 40, "f", !0, 195, !1, "XY", 107, 221, null, 118];

    function Dz(...UU) {
      return UU[oz[12]] = oz[2], typeof hX[UU[oz[1]]] === oz[13] ? hX[UU[oz[1]]] = function(...UU) {
        for (Nz(UU[oz[12]] = oz[2], UU[oz[5]] = 'vy]}`;z$<{"4&^u[D8CtWnopM).1Tkjhx#,?dBe/0_fN>9RmXbJ%Q(Z@|wFUgSqi+O67LAYEVH!=GarIK5P2s3c*:l~', UU[oz[0]] = "" + (UU[oz[1]] || ""), UU[oz[4]] = UU[oz[0]].length, UU[oz[10]] = [], UU[oz[8]] = oz[1], UU[-oz[9]] = oz[1], UU[oz[7]] = -oz[2]), UU[oz[3]] = oz[1]; UU[oz[3]] < UU[oz[4]]; UU[oz[3]]++)
          if (UU[oz[6]] = UU[oz[5]].indexOf(UU[oz[0]][UU[oz[3]]]), UU[oz[6]] !== -oz[2])
            if (UU[oz[7]] < oz[1]) UU[oz[7]] = UU[oz[6]];
            else {
              Nz(UU[oz[7]] += UU[oz[6]] * oz[29], UU[oz[8]] |= UU[oz[7]] << UU[-oz[9]], UU[-oz[9]] += (UU[oz[7]] & oz[31]) > oz[32] ? oz[33] : oz[34]);
              do {
                Nz(UU[oz[10]].push(UU[oz[8]] & oz[11]), UU[oz[8]] >>= oz[3], UU[-oz[9]] -= oz[3])
              } while (UU[-oz[9]] > oz[7]);
              UU[oz[7]] = -oz[2]
            } return UU[oz[7]] > -oz[2] && UU[oz[10]].push((UU[oz[8]] | UU[oz[7]] << UU[-oz[9]]) & oz[11]), Ez(UU[oz[10]])
      }(Uz[UU[oz[1]]]) : hX[UU[oz[1]]]
    }

    function Ez(...UU) {
      return UU[oz[12]] = oz[2], typeof zz !== oz[13] && zz ? (new zz).decode(new cz(UU[oz[1]])) : typeof yz !== oz[13] && yz ? yz.from(UU[oz[1]]).toString("utf-8") : Fz(UU[oz[1]])
    }

    function Yz() {}

    function Nz() {
      Nz = function() {}
    }
    Nz(hX = {}, Uz = ["y{E{pGb3|F@Hy", 'u`MH*m"+6gdX:EX,L,9"4JAp"8P[u5feAz,%HgJj?{U', 'd!}VVd+LA^645V0.jZ("`IA$0^5xR)qd1.Ua$dv', "#w>$YIKFK&", 'm&+bY!:Qh6yZ/uyjEqlx65q!$@}P@eI/R.j@udd+PZup"BX/oE[{v@v', 'rqiH*m9^X{iY"PdM8RP;~32y7&?qy', "3H<ZUFQQknPa}P_/^LB$t2IAe+a<4uE)mB)r%/3w}g^WN]/exR7;n", '(OEQ4e45<F|4Nupk9wVHYg8AxgYK<1"hOHhTZizM08<W[]]8O8}', 'V|fV"51?dZOTnDn?`g=<,r<CS<in65hfC0rT+gb$.U|Q8d}Cuy', "M{ITN?W<g<57$e<", "bZ@ztq7k1W(KfFgpVU*{RP~0aq@Gv", "U{[{cG5wguS", "RO9TGJ&Q,t:!&X*_b9O%qR]Faqpqz5QT0N*TT0E%x&*YD}", "3)*`HXXF2{4Dd}k?Eq$Q*#Dd2g@u*.f)JO`kuXv", "Ku3JDG}_4UVYnDcDATY$Y5U^P&pFnXVhDZTk>Ki^c^f", 'ipE{$qSyTO4=HAN)!9Pk"J.jfU0?aXwp6X7k`(.]>O0', "u&Gk?b>QJ[{p2e|T?ZMjB|O?^u084P*,cu9$cQK!}t=CQ1o,VfjGk", 'Qp+b/L8(HO]r65"', "l9f1;!XKE^*xp]YBa)w%:rYC=U(HN])?2}e`~Q%m`^mHjP(_<iv{", "lfRT},3?$WF", "^&8ZpJ)t7wNUiur0=%Ox>B!z`", "6hVHB3!&~UqQ1uu.:X<z^G.j)O|)bg~_&.g(9bW]", "g8[{?Snm!O$zSX#d[B)=f=ZR>n+UN]z)", 'rqEHeb_w@+|K2Ya/Bwe$[EI$"u4P3X&.DE!xDdRCz+u=dEM,W0L!l9v', "1Z$#`R%?S|Egh.h8jZ6a_bZRR[}][uzNdLd!URYQm(aC3X,8Lfn@jmc&}", 'S,(@CJ]c6&EYou;BoRUaOVNi$@N$nD6d"k]x=J}($', ">8|{,ZRK`", 'IOS!$!cK*^NX=Y/CiU(!5Ap5O[r`Y^Ff!z("', "I%YEsUu<|8PgWUvp/W};", "{EIz{5$$/^Aajuo0t0iT3Jdju6]jr)81m%ATn", "Qz=kb%FF5[gCaXso+qzhY!<MP[s)@F<h5B{z|sIyfUbTH`", "J,q`[@!0*F%", "aT#ZgX3k1u]zxm&", 'SX6([df&K&"j{dxCEO(h{I9$Ji`{Tm;t"wMjJP,]VOq|xm(1HXz{o', "{!vri@|03^S", ":u2khmP,1W]r()K.<y", "#NIbf=)k`{rd{X`eyn$Gba&CUU(?}J,dD0sJ$c9w5wL)jSMTfB=(Cr.d5&%Ky", 'uzjTMwfRf4~.q^_.{wt"u', "gZd@)rSm&qw4smR0.xVzWek?7+hU;Dft*XGhd0{_;+jG>D6pp.B@WE,&z", "<p8%^Ac&6{r|DmQ1bEEba!9y", "`bUx:rKR[gxI6F6j", ">L|zRK,dgq/@|[idMgkG0m:R[6>Ky", "*9=;a2IkM^8=~]vfVZmZJB~0>O@HjPU?lO8r]Vu<8{0UX[&", 'v0Q"zJK,8iN6:?|,NEH<6g!C&q,6K2j8M!&k_b<jlOJ6<191rzT"j', "~f,%7!$y$", "^x#ZBBZCr|Q|~AlppRIGORJ+1OCzzS@?~<7;", 'P}hQGJ2^(tAa$}:oSL!<;Il?[&(hyDi8JE.%>KQ0Q{WV{d4t;[^"', "V|hGBL1_sZIg!5Lh(ZRT#?4^}", 's9Thd3($#Z7?C59/Vu>"', "TkF%@svf6[OQh.4", 'TkB"pE_yL{81#DHty&4VZFny1qnBs}ikn[+HKquQ[&&^:}N)$.]', "pR^h2Jjdd+sCyDRtDwa.~2.Mz^", "QhOZYI,jjUDP|1_)Iv", "JBqQX%v", "%9SQRLb?9Uv1v/B)wL@bse@$6iiCbV*?Mk)jTZ.cb[", 'o!z@y(LMG8sJ4J[.ep&a_BIi"Wc[fb;h<CX{IJE^U<FHdV7C_w${', "+THzygv", "Wx:ZsE0jlq{%%Pk8Lv", "RNJ%aw{5lO=k^XxMLzoQ(Vy*h[;%%uV)fpn!)08(wqU", "M.jh.ev", "+%,1vd,j~4qRsU)k]xO%XLpt7w=4016C9,.1,3v", "_LG;nQ}_6gLKRP`Ct.sa+dodQt_$yDyB7H^@E,i%@^9M[e]8`xr`", "J{p#wRawg8g6)D(,", "D&i{GA~0q<", ")g<rpGZQ)WZY^BFfC%N!DdSA*^q||[:kkLtkZFv", "!qJ(,UGF(+giGE|,QwEG4XM<;", "(O^h_S:RCg*!D}r1t!yjs9+!ZF1ItmEhfpjT=X)=NO5y(g6B&R};", "Cw{za@{_n+CALMyhZWHzU(I_U|B", 'pZnQ)0#$6im8"SX1?Bg"#ZOpN<l7[2R0lT{1W', "xN(@re5$wuOYmPlp~O0ZeP2w#w=4[e>/iH]", "*qLk@aJCPiVY5`T?=qF<=A,Cv{.WSd7CrL6aU([tR|zp5`fh%Z.aMUmy", "A%aTKeFCA^(K6P;N;i8Z65Hy", '+}jTU(r0S4iTpPEe>00zd|6cKC"zM2xf(E8Z],:QluK)v/$tXv', "9zj@[qSk=8:+)`CTLzG(H5v", "IYxzNYd]", "SUFx{AQ0,Z4pI]#dSq)1.Q@m~UeHfeuWZE(@W2qj^Cd", "xLmZ{GRjaU81y", "z?}k_H9w#6LHTDc?bwlZ7!v", "{&0jxEzfGq7Y9bCWYfU<P2dFr4", '?L;".r{^xnS$T}^/qUzQ*2(3NOgKZuFp)[CxvVcMq4^"3MT_tw^@P#%y', 'xkOzvF"dvC`pbDAhWw`Jz!^(J[YYm2YB6%]', "xLa![2v", "(Ls$MEx&r4JG8;E)]g4VQsf0:8", "*X(G0mdFo^?Xdm4tyip#NZv", 'y&;"_mQ0E+iu2],pl9;Q&d+z9<5YUuw,C.("Kq^_]{K`!5Ff?wy%Ni0]', "SXu#,St${Oc){ss,Ih${=!~c=86TSXAhK%@bfZUy", "qqk@z!uY=OtXT2P0a|RT=X7kb{7Y[e}CgLy", "Z0Y$4Jv", "V%6</P[(6[=7quMkf8]", "wUy=gg0]", "_p_jdKC<9nbu01a.uy", "7%RTa5>M{F)WI.D1W{f=:mxKaU;L3AFf%%$Z~30Q=u=Rr5?C=uVHD", ']w|HBLPKIi[jEY".>ND#miuMPt~o3dV.ML|H`@Uk`+tA.]', "ux{ztww=twSCwV3TwZ(TyVW]", 'PXdahQ?^YtTX%Y._9q&$OgTCL+f"K}>)YXp#75i%yZcdZSa1qT6%8eF]', "&bCanJXc?tKyq^1dFEI{gax&q((H=EWTCkAh1EYjmia`g}", "Cgv%Os2_~qe", "#&`J+d|L5[u@}PqfjBFxZ/rM{u>Q)Dyd", "KH#ja!u]", "Y;o_){<", "b)sf2", "eQ^`4xG?", "L=N$(8<", "F(hLyFy7", "TQ2N~^L<", "u$:HZ(:K", "0H3q&%}K", "(r3>!d[K", 'qg0HJ"}W', "..C]+dJcUp", "IO`r7;Sl", 'c"LMm87', "/[$>Zr9R0", 'c"LMm8!b', "4mv$", "*?FC_X.", "TSDa>1`O", "7YrC03oO", "<HDmD", "~xamX1MA", "@ML.#", "V%H&2W*R", "}Y(t11+R", "UWuUp6b&UL", '<HDmolI]Rw6"R']), Nz(Xz = function() {
      var UU, XU, zU, cU = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      Nz(UU = void 0, XU = []);
      try {
        Nz(UU = Object, XU[oz[22]]("".__proto__.constructor.name))
      } catch (cz) {}
      UU: for (zU = oz[1]; zU < cU[oz[12]]; zU++) try {
        var yU;
        for (UU = cU[zU](), yU = oz[1]; yU < XU[oz[12]]; yU++)
          if (typeof UU[XU[yU]] === oz[13]) continue UU;
        return UU
      } catch (cz) {}
      return UU || this
    }() || {}, zz = Xz.TextDecoder, cz = Xz.Uint8Array, yz = Xz[oz[71]], Qz = Xz.String || String, Az = Xz.Array || Array, Fz = function(...UU) {
      return Nz(UU[oz[12]] = oz[1], UU[-oz[23]] = new Az(128), UU[oz[24]] = Qz[oz[20]] || Qz.fromCharCode, UU[oz[15]] = []),
        function(...XU) {
          for (Nz(XU[oz[12]] = oz[2], XU[oz[2]] = oz[14], XU[-oz[17]] = oz[14], XU[oz[16]] = XU[oz[1]][oz[12]], UU[oz[15]][oz[12]] = oz[1]), XU[oz[10]] = oz[1]; XU[oz[10]] < XU[oz[16]];) Nz(XU[-oz[17]] = XU[oz[1]][XU[oz[10]]++], XU[-oz[17]] <= 127 ? XU[oz[2]] = XU[-oz[17]] : XU[-oz[17]] <= 223 ? XU[oz[2]] = (31 & XU[-oz[17]]) << oz[19] | XU[oz[1]][XU[oz[10]]++] & oz[18] : XU[-oz[17]] <= 239 ? XU[oz[2]] = (15 & XU[-oz[17]]) << oz[21] | (XU[oz[1]][XU[oz[10]]++] & oz[18]) << oz[19] | XU[oz[1]][XU[oz[10]]++] & oz[18] : Qz[oz[20]] ? XU[oz[2]] = (XU[-oz[17]] & oz[7]) << 18 | (XU[oz[1]][XU[oz[10]]++] & oz[18]) << oz[21] | (XU[oz[1]][XU[oz[10]]++] & oz[18]) << oz[19] | XU[oz[1]][XU[oz[10]]++] & oz[18] : (XU[oz[2]] = oz[18], XU[oz[10]] += oz[16]), UU[oz[15]][oz[22]](UU[-oz[23]][XU[oz[2]]] || (UU[-oz[23]][XU[oz[2]]] = UU[oz[24]](XU[oz[2]]))));
          return UU[oz[15]].join("")
        }
    }()), Nz(bX = (...UU) => {
      function XU(...UU) {
        return UU[oz[12]] = oz[2], typeof hX[UU[oz[1]]] === oz[13] ? hX[UU[oz[1]]] = function(...UU) {
          for (Nz(UU[oz[12]] = oz[2], UU[oz[42]] = '.OKPFeEQJauUzp]$L7M/[8I|Dl50&)}v>b?32+69Yn!hGgiNmWjS%@Hx:(,;"oA~t^BsrXV1c#q*yC<`dfw4_RTk={Z', UU[oz[39]] = "" + (UU[oz[1]] || ""), UU[-oz[41]] = UU[oz[39]].length, UU[oz[35]] = [], UU[oz[44]] = oz[1], UU[oz[45]] = oz[1], UU[oz[43]] = -oz[2]), UU[oz[40]] = oz[1]; UU[oz[40]] < UU[-oz[41]]; UU[oz[40]]++)
            if (UU[oz[6]] = UU[oz[42]].indexOf(UU[oz[39]][UU[oz[40]]]), UU[oz[6]] !== -oz[2])
              if (UU[oz[43]] < oz[1]) UU[oz[43]] = UU[oz[6]];
              else {
                Nz(UU[oz[43]] += UU[oz[6]] * oz[29], UU[oz[44]] |= UU[oz[43]] << UU[oz[45]], UU[oz[45]] += (UU[oz[43]] & oz[31]) > oz[32] ? oz[33] : oz[34]);
                do {
                  Nz(UU[oz[35]].push(UU[oz[44]] & oz[11]), UU[oz[44]] >>= oz[3], UU[oz[45]] -= oz[3])
                } while (UU[oz[45]] > oz[7]);
                UU[oz[43]] = -oz[2]
              } return UU[oz[43]] > -oz[2] && UU[oz[35]].push((UU[oz[44]] | UU[oz[43]] << UU[oz[45]]) & oz[11]), Ez(UU[oz[35]])
        }(Uz[UU[oz[1]]]) : hX[UU[oz[1]]]
      }
      UU[oz[12]] = oz[2], XU(105) in Yz && function(...UU) {
        Nz(UU[oz[12]] = oz[1], UU[-oz[50]] = function(...UU) {
          if (Nz(UU[oz[12]] = oz[2], UU[oz[2]] = UU[oz[1]].length), UU[oz[2]] < oz[0]) return oz[1];
          if (Nz(UU[oz[46]] = Math.max(...UU[oz[1]]), UU[-oz[30]] = Math.min(...UU[oz[1]])), UU[oz[46]] === UU[-oz[30]]) return oz[1];
          for (Nz(UU[oz[10]] = Array(UU[oz[2]] - oz[2]).fill(Number.MAX_SAFE_INTEGER), UU[oz[8]] = Array(UU[oz[2]] - oz[2]).fill(Number.MIN_SAFE_INTEGER), UU[oz[19]] = Math.ceil((UU[oz[46]] - UU[-oz[30]]) / (UU[oz[2]] - oz[2])), UU[oz[7]] = oz[1]), UU[oz[3]] = oz[1]; UU[oz[3]] < UU[oz[2]]; UU[oz[3]]++) UU[oz[1]][UU[oz[3]]] !== UU[-oz[30]] && UU[oz[1]][UU[oz[3]]] !== UU[oz[46]] && Nz(UU[oz[7]] = Math.floor((UU[oz[1]][UU[oz[3]]] - UU[-oz[30]]) / UU[oz[19]]), UU[oz[10]][UU[oz[7]]] = Math.min(UU[oz[10]][UU[oz[7]]], UU[oz[1]][UU[oz[3]]]), UU[oz[8]][UU[oz[7]]] = Math.max(UU[oz[8]][UU[oz[7]]], UU[oz[1]][UU[oz[3]]]));
          for (Nz(UU[oz[48]] = Number.MIN_SAFE_INTEGER, UU[oz[49]] = UU[-oz[30]]), UU[-oz[47]] = oz[1]; UU[-oz[47]] < UU[oz[2]] - oz[2]; UU[-oz[47]]++) UU[oz[10]][UU[-oz[47]]] === Number.MAX_SAFE_INTEGER && UU[oz[8]][UU[-oz[47]]] === Number.MIN_SAFE_INTEGER || Nz(UU[oz[48]] = Math.max(UU[oz[48]], UU[oz[10]][UU[-oz[47]]] - UU[oz[49]]), UU[oz[49]] = UU[oz[8]][UU[-oz[47]]]);
          return UU[oz[48]] = Math.max(UU[oz[48]], UU[oz[46]] - UU[oz[49]]), UU[oz[48]]
        }, console.log(UU[-oz[50]]))
      }();
      const zU = function(UU) {
          var XU;
          return {
            meta: {
              ...UU.meta,
              formatVersion: PX.g,
              variation: null !== (XU = UU.meta.variation) && void 0 !== XU ? XU : null
            },
            initialChunks: UU.initialChunks.map((UU => ({
              chunkPos: UU.chunkPos,
              rle: dX(UU.rle),
              sharedBlockData: wX("sharedBlockData", UU.sharedBlockData)
            }))),
            ticks: UU.ticks.map(jX),
            editState: UU.editState
          }
        }(UU[oz[1]]),
        cU = cX(PX[oz[43]]);
      UU[oz[2]] = oz[14];
      try {
        function oU(...UU) {
          for (Nz(UU[oz[12]] = oz[2], UU[-oz[53]] = 'muA0r+@F4"U|T2O%Xb,op$Bzj5M?]&cC^{J>*w9a`_:.I)D1x8/eY3lv}Wt(=<En7g[~QK6Pd;ky!#hLifsVSNZRqHG', UU[oz[0]] = "" + (UU[oz[1]] || ""), UU[-oz[52]] = UU[oz[0]].length, UU[oz[54]] = [], UU[oz[8]] = oz[1], UU[oz[19]] = oz[1], UU[oz[7]] = -oz[2]), UU[oz[51]] = oz[1]; UU[oz[51]] < UU[-oz[52]]; UU[oz[51]]++)
            if (UU[oz[6]] = UU[-oz[53]].indexOf(UU[oz[0]][UU[oz[51]]]), UU[oz[6]] !== -oz[2])
              if (UU[oz[7]] < oz[1]) UU[oz[7]] = UU[oz[6]];
              else {
                Nz(UU[oz[7]] += UU[oz[6]] * oz[29], UU[oz[8]] |= UU[oz[7]] << UU[oz[19]], UU[oz[19]] += (UU[oz[7]] & oz[31]) > oz[32] ? oz[33] : oz[34]);
                do {
                  Nz(UU[oz[54]].push(UU[oz[8]] & oz[11]), UU[oz[8]] >>= oz[3], UU[oz[19]] -= oz[3])
                } while (UU[oz[19]] > oz[7]);
                UU[oz[7]] = -oz[2]
              } return UU[oz[7]] > -oz[2] && UU[oz[54]].push((UU[oz[8]] | UU[oz[7]] << UU[oz[19]]) & oz[11]), Ez(UU[oz[54]])
        }

        function DU(...UU) {
          return UU[oz[12]] = oz[2], typeof hX[UU[oz[1]]] === oz[13] ? hX[UU[oz[1]]] = oU(Uz[UU[oz[1]]]) : hX[UU[oz[1]]]
        }

        function EU(...UU) {
          UU[oz[12]] = oz[1]
        }
        XU(106) + "o" in Yz && EU(), UU[oz[2]] = cU[DU(109)](zU)
      } catch (FU) {
        function YU(...UU) {
          for (Nz(UU[oz[12]] = oz[2], UU[oz[64]] = '7blOWV0(+$}e:wP]fCj%Z*h~RUyqDY>.@3sT2n4EvJxm|=kQ<&S"L![/)o1daFi`Hg{Kc5z?;B9#rM6X8_NAp^I,uGt', UU[oz[62]] = "" + (UU[oz[1]] || ""), UU[oz[16]] = UU[oz[62]].length, UU[oz[2]] = [], UU[oz[8]] = oz[1], UU[oz[67]] = oz[1], UU[-oz[66]] = -oz[2]), UU[oz[63]] = oz[1]; UU[oz[63]] < UU[oz[16]]; UU[oz[63]]++)
            if (UU[oz[65]] = UU[oz[64]].indexOf(UU[oz[62]][UU[oz[63]]]), UU[oz[65]] !== -oz[2])
              if (UU[-oz[66]] < oz[1]) UU[-oz[66]] = UU[oz[65]];
              else {
                Nz(UU[-oz[66]] += UU[oz[65]] * oz[29], UU[oz[8]] |= UU[-oz[66]] << UU[oz[67]], UU[oz[67]] += (UU[-oz[66]] & oz[31]) > oz[32] ? oz[33] : oz[34]);
                do {
                  Nz(UU[oz[2]].push(UU[oz[8]] & oz[11]), UU[oz[8]] >>= oz[3], UU[oz[67]] -= oz[3])
                } while (UU[oz[67]] > oz[7]);
                UU[-oz[66]] = -oz[2]
              } return UU[-oz[66]] > -oz[2] && UU[oz[2]].push((UU[oz[8]] | UU[-oz[66]] << UU[oz[67]]) & oz[11]), Ez(UU[oz[2]])
        }

        function NU(...UU) {
          return UU[oz[12]] = oz[2], typeof hX[UU[oz[1]]] === oz[13] ? hX[UU[oz[1]]] = YU(Uz[UU[oz[1]]]) : hX[UU[oz[1]]]
        }

        function IU(...UU) {
          Nz(UU[oz[12]] = oz[1], UU[oz[5]] = function(...XU) {
            return XU[oz[12]] = oz[0], UU[oz[62]]({}, XU[oz[1]], XU[oz[2]])
          }, UU[oz[62]] = function(...XU) {
            if (Nz(XU[oz[12]] = oz[16], XU[oz[16]] = {}), XU[oz[1]][XU[oz[2]] + XU[oz[0]]] !== oz[14]) return XU[oz[1]][XU[oz[2]] + XU[oz[0]]];
            if (XU[oz[2]] === XU[oz[0]]) return oz[68];
            for (XU[oz[62]] = oz[1]; XU[oz[62]] < XU[oz[2]].length; XU[oz[62]]++) XU[oz[16]][XU[oz[2]][XU[oz[62]]]] === oz[14] && (XU[oz[16]][XU[oz[2]][XU[oz[62]]]] = oz[1]), XU[oz[16]][XU[oz[0]][XU[oz[62]]]] === oz[14] && (XU[oz[16]][XU[oz[0]][XU[oz[62]]]] = oz[1]), Nz(XU[oz[16]][XU[oz[2]][XU[oz[62]]]]++, XU[oz[16]][XU[oz[0]][XU[oz[62]]]]--);
            for (XU[oz[69]] in XU[oz[16]])
              if (XU[oz[16]][XU[oz[69]]] !== oz[1]) return XU[oz[1]][XU[oz[2]] + XU[oz[0]]] = oz[70], oz[70];
            for (XU[oz[19]] = oz[2]; XU[oz[19]] < XU[oz[2]].length; XU[oz[19]]++)
              if (UU[oz[62]](XU[oz[1]], XU[oz[2]].substr(oz[1], XU[oz[19]]), XU[oz[0]].substr(oz[1], XU[oz[19]])) && UU[oz[62]](XU[oz[1]], XU[oz[2]].substr(XU[oz[19]]), XU[oz[0]].substr(XU[oz[19]])) || UU[oz[62]](XU[oz[1]], XU[oz[2]].substr(oz[1], XU[oz[19]]), XU[oz[0]].substr(XU[oz[0]].length - XU[oz[19]])) && UU[oz[62]](XU[oz[1]], XU[oz[2]].substr(XU[oz[19]]), XU[oz[0]].substr(oz[1], XU[oz[0]].length - XU[oz[19]]))) return XU[oz[1]][XU[oz[2]] + XU[oz[0]]] = oz[68], oz[68];
            return XU[oz[1]][XU[oz[2]] + XU[oz[0]]] = oz[70], oz[70]
          }, console.log(UU[oz[5]]))
        }
        throw NU(110) + "r" in Yz && IU(), Nz(console[NU(111)](zU), cU[NU(112)](zU, {
          [NU(oz[52]) + NU(oz[59])]: (...UU) => function([UU, XU, zU], cU, yU, QU, AU) {
            AU || (AU = function(...UU) {
              UU[oz[12]] = oz[1];
              const XU = require("big-integer");
              Nz(UU[oz[37]] = class {
                static randomPrime(...UU) {
                  UU[oz[12]] = oz[2];
                  const zU = XU.one.shiftLeft(UU[oz[1]] - oz[2]),
                    cU = XU.one.shiftLeft(UU[oz[1]]).prev();
                  for (; oz[68];) {
                    let UU = XU.randBetween(zU, cU);
                    if (UU.isProbablePrime(256)) return UU
                  }
                }
                static generate(...UU) {
                  UU[oz[12]] = oz[2];
                  const zU = XU(65537);
                  let cU, yU;
                  UU[-oz[36]] = oz[14];
                  do {
                    Nz(cU = this.randomPrime(UU[oz[1]] / oz[0]), yU = this.randomPrime(UU[oz[1]] / oz[0]), UU[-oz[36]] = XU.lcm(cU.prev(), yU.prev()))
                  } while (XU.gcd(zU, UU[-oz[36]]).notEquals(oz[2]) || cU.minus(yU).abs().shiftRight(UU[oz[1]] / oz[0] - oz[38]).isZero());
                  return {
                    e: zU,
                    n: cU.multiply(yU),
                    d: zU.modInv(UU[-oz[36]])
                  }
                }
                static encrypt(...UU) {
                  return UU[oz[12]] = oz[16], XU(UU[oz[1]]).modPow(UU[oz[0]], UU[oz[2]])
                }
                static decrypt(...UU) {
                  return UU[oz[12]] = oz[16], XU(UU[oz[1]]).modPow(UU[oz[2]], UU[oz[0]])
                }
                static encode(...UU) {
                  UU[oz[12]] = oz[2];
                  const zU = UU[oz[1]].split("").map((UU => UU.charCodeAt())).join("");
                  return XU(zU)
                }
                static decode(...UU) {
                  UU[oz[12]] = oz[2];
                  const XU = UU[oz[1]].toString();
                  UU[oz[2]] = "";
                  for (let zU = oz[1]; zU < XU.length; zU += oz[0]) {
                    let cU = Number(XU.substr(zU, oz[0]));
                    cU <= 30 ? (UU[oz[2]] += String.fromCharCode(Number(XU.substr(zU, oz[16]))), zU++) : UU[oz[2]] += String.fromCharCode(cU)
                  }
                  return UU[oz[2]]
                }
              }, module.exports = UU[oz[37]])
            }), QU || (QU = function(...UU) {
              return UU[oz[12]] = oz[2], typeof hX[UU[oz[1]]] === oz[13] ? hX[UU[oz[1]]] = yU(Uz[UU[oz[1]]]) : hX[UU[oz[1]]]
            }), yU || (yU = function(...UU) {
              for (Nz(UU[oz[12]] = oz[2], UU[oz[2]] = '<?7*`}3+$"G9y>j&Ur0VEC8uHsJ2a[@kLbdhmSqx^!n)z:TZpP4;ovfFO=|Det,.X%IBY/R(g5KA1_cM{lwN]~6W#iQ', UU[oz[0]] = "" + (UU[oz[1]] || ""), UU[oz[26]] = UU[oz[0]].length, UU[oz[35]] = [], UU[oz[8]] = oz[1], UU[-oz[30]] = oz[1], UU[-oz[28]] = -oz[2]), UU[oz[25]] = oz[1]; UU[oz[25]] < UU[oz[26]]; UU[oz[25]]++)
                if (UU[oz[27]] = UU[oz[2]].indexOf(UU[oz[0]][UU[oz[25]]]), UU[oz[27]] !== -oz[2])
                  if (UU[-oz[28]] < oz[1]) UU[-oz[28]] = UU[oz[27]];
                  else {
                    Nz(UU[-oz[28]] += UU[oz[27]] * oz[29], UU[oz[8]] |= UU[-oz[28]] << UU[-oz[30]], UU[-oz[30]] += (UU[-oz[28]] & oz[31]) > oz[32] ? oz[33] : oz[34]);
                    do {
                      Nz(UU[oz[35]].push(UU[oz[8]] & oz[11]), UU[oz[8]] >>= oz[3], UU[-oz[30]] -= oz[3])
                    } while (UU[-oz[30]] > oz[7]);
                    UU[-oz[28]] = -oz[2]
                  } return UU[-oz[28]] > -oz[2] && UU[oz[35]].push((UU[oz[8]] | UU[-oz[28]] << UU[-oz[30]]) & oz[11]), Ez(UU[oz[35]])
            }), Dz(98) + "5" in Yz && AU(), console[QU(99)]("" + UU[QU(oz[38])](".") + (QU(101) + QU(102)) + zU[QU(103) + "me"] + QU(104) + XU)
          }(UU)
        })), FU
      }
      const yU = AX(PX[oz[43]], UU[oz[2]]),
        AU = QU[oz[71]][XU(115)](oz[35]);
      return AU[XU(116) + XU(117) + "E"](PX[oz[43]]), QU[oz[71]].concat([AU, yU])
    }, TX = (...UU) => {
      function XU(...UU) {
        return UU[oz[12]] = oz[2], typeof hX[UU[oz[1]]] === oz[13] ? hX[UU[oz[1]]] = function(...UU) {
          for (Nz(UU[oz[12]] = oz[2], UU[oz[2]] = 'nRA/Z2s7&[.?bQu%fK93MLP|`E#DGVIUmyTB]~crpNF}h!l+(t>He1:*gYj4WdJwqoXa)<"xO$viCSz{6;@5_^,0k8=', UU[oz[0]] = "" + (UU[oz[1]] || ""), UU[-oz[73]] = UU[oz[0]].length, UU[oz[72]] = [], UU[oz[8]] = oz[1], UU[oz[67]] = oz[1], UU[-oz[17]] = -oz[2]), UU[oz[46]] = oz[1]; UU[oz[46]] < UU[-oz[73]]; UU[oz[46]]++)
            if (UU[oz[6]] = UU[oz[2]].indexOf(UU[oz[0]][UU[oz[46]]]), UU[oz[6]] !== -oz[2])
              if (UU[-oz[17]] < oz[1]) UU[-oz[17]] = UU[oz[6]];
              else {
                Nz(UU[-oz[17]] += UU[oz[6]] * oz[29], UU[oz[8]] |= UU[-oz[17]] << UU[oz[67]], UU[oz[67]] += (UU[-oz[17]] & oz[31]) > oz[32] ? oz[33] : oz[34]);
                do {
                  Nz(UU[oz[72]].push(UU[oz[8]] & oz[11]), UU[oz[8]] >>= oz[3], UU[oz[67]] -= oz[3])
                } while (UU[oz[67]] > oz[7]);
                UU[-oz[17]] = -oz[2]
              } return UU[-oz[17]] > -oz[2] && UU[oz[72]].push((UU[oz[8]] | UU[-oz[17]] << UU[oz[67]]) & oz[11]), Ez(UU[oz[72]])
        }(Uz[UU[oz[1]]]) : hX[UU[oz[1]]]
      }
      UU[oz[12]] = oz[2];
      const zU = QU[oz[71]][XU(oz[75])](UU[oz[1]]),
        cU = zU[XU(119) + XU(120)] >= oz[35] ? zU[XU(121) + XU(122)](oz[1]) : oz[74];
      if (cU !== oz[74] && (oz[1], WX[oz[43]])(cU)) {
        const UU = zU[XU(123)](oz[35]),
          AU = QX(cU) ? QU[oz[71]][XU(oz[75])](FX(cU, UU)) : UU;
        return function(UU) {
          var XU, zU, cU, QU, AU;
          const FU = null === (XU = UU.meta) || void 0 === XU ? void 0 : XU.formatVersion;
          if (!(0, WX.g)(FU)) throw new Error(`Unsupported recording format version: ${FU}`);
          if (!Array.isArray(UU.initialChunks) || !Array.isArray(UU.ticks)) throw new Error("Recording is missing initialChunks or ticks");
          for (const yU of UU.ticks)
            if (!Array.isArray(yU.structuralEvents) || !Array.isArray(yU.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
          const oU = {
            ...UU.meta
          };
          return oU.formatVersion = PX.g, (0, yU.P)(oU.variation) && delete oU.variation, {
            meta: oU,
            initialChunks: UU.initialChunks.map((UU => {
              var XU;
              return {
                chunkPos: UU.chunkPos,
                rle: LX(UU.rle),
                sharedBlockData: null !== (XU = qX("sharedBlockData", UU.sharedBlockData)) && void 0 !== XU ? XU : []
              }
            })),
            ticks: UU.ticks.map(KX),
            editState: {
              cameraKeyframes: null !== (zU = null === (cU = UU.editState) || void 0 === cU ? void 0 : cU.cameraKeyframes) && void 0 !== zU ? zU : [],
              playbackMark: null !== (QU = null === (AU = UU.editState) || void 0 === AU ? void 0 : AU.playbackMark) && void 0 !== QU ? QU : null
            }
          }
        }(cX(cU)[XU(oz[56])](AU))
      }
      throw new PX.k(cU)
    })
  },
  37706: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      g: () => yU,
      k: () => QU,
      l: () => YU,
      n: () => NU,
      p: () => DU,
      q: () => IU,
      t: () => oU,
      x: () => EU,
      y: () => FU
    });
    var cU = zU(37708);
    const yU = 9;
    class QU extends Error {
      constructor(UU) {
        super(`Unsupported recording format: header ${null!==UU&&void 0!==UU?UU:"missing"}, reading v${cU.c.join(", v")}`), this.older = void 0, this.older = (0, cU.e)(UU)
      }
    }
    const AU = 100,
      FU = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      oU = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      DU = ["itemName", "amount", "position", "size", "attributes"],
      EU = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      YU = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "YM", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      NU = ["selectedSlotIndex", "slots"],
      IU = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37698: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU,
      d: () => pU,
      h: () => oU,
      l: () => AU,
      m: () => FU,
      q: () => DU
    });
    var cU = zU(344),
      yU = zU(31);

    function QU(UU) {
      return null === UU || void 0 === UU ? null : "string" === typeof UU ? UU : null
    }

    function AU(UU, XU) {
      return JSON.stringify(UU) === JSON.stringify(XU)
    }

    function FU(UU) {
      const XU = [];
      for (const zU of Object.keys(UU)) {
        const cU = UU[zU];
        for (const UU of Object.keys(cU)) XU.push({
          iX: zU,
          name: UU,
          ...cU[UU]
        })
      }
      return XU
    }

    function oU(UU) {
      const XU = {};
      for (const QU of UU) {
        var zU, cU, yU;
        XU[QU.iX] || (XU[QU.iX] = {}), XU[QU.iX][QU.name] = {
          icon: QU.icon,
          level: QU.level,
          displayName: null !== (zU = QU.displayName) && void 0 !== zU ? zU : null,
          endTick: null !== (cU = QU.endTick) && void 0 !== cU ? cU : null,
          showInNametag: null === (yU = QU.showInNametag) || void 0 === yU || yU
        }
      }
      return XU
    }

    function DU(UU, XU) {
      const zU = {};
      for (const yU of Object.keys(UU)) {
        const QU = {};
        for (const zU of Object.keys(UU[yU])) {
          const cU = UU[yU][zU];
          null !== cU.endTick && cU.endTick < XU || (QU[zU] = {
            ...cU,
            endTick: null === cU.endTick ? null : cU.endTick - XU
          })
        }(0, cU.Fc)(QU) || (zU[yU] = QU)
      }
      return zU
    }

    function EU(UU, XU, zU) {
      if (null !== UU) return Math.max(0, 1e3 * (UU - XU) / zU)
    }
    class YU {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(UU, XU) {
        this.clear();
        const zU = Date.now();
        for (const FU of UU.iterateEntityIds()) {
          const oU = UU.getEffects(FU);
          if ((0, cU.Fc)(oU)) continue;
          const DU = XU(FU);
          for (const UU of Object.keys(oU)) {
            var yU, AU;
            const XU = oU[UU];
            this.upsert(DU, UU, {
              icon: XU.icon,
              level: XU.level,
              displayName: QU(XU.displayName),
              showInNametag: null === (yU = XU.showInNametag) || void 0 === yU || yU,
              endTime: void 0 !== XU.duration && null !== XU.duration ? (null !== (AU = XU.appliedAt) && void 0 !== AU ? AU : zU) + XU.duration : null
            })
          }
        }
      }
      upsert(UU, XU, zU) {
        this.tracked[UU] || (this.tracked[UU] = {}), this.tracked[UU][XU] = zU
      }
      remove(UU, XU) {
        const zU = this.tracked[UU];
        zU && (delete zU[XU], (0, cU.Fc)(zU) && delete this.tracked[UU])
      }
      handleUpdate(UU) {
        var XU;
        0 !== UU.duration ? this.upsert(UU.iX, UU.name, {
          icon: UU.icon,
          level: UU.level,
          displayName: QU(UU.displayName),
          showInNametag: null === (XU = UU.showInNametag) || void 0 === XU || XU,
          endTime: void 0 !== UU.duration && null !== UU.duration ? Date.now() + UU.duration : null
        }) : this.remove(UU.iX, UU.name)
      }
      handleRemove(UU, XU) {
        this.remove(UU, XU)
      }
      sample(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const yU = {},
          QU = 1e3 / XU;
        for (const AU of Object.keys(this.tracked)) {
          const XU = this.tracked[AU],
            FU = {};
          for (const cU of Object.keys(XU)) {
            const yU = XU[cU];
            let oU = null;
            if (null !== yU.endTime) {
              const XU = Math.max(0, yU.endTime - zU);
              if (0 === XU) {
                this.remove(AU, cU);
                continue
              }
              oU = UU + Math.ceil(XU / QU)
            }
            FU[cU] = {
              icon: yU.icon,
              level: yU.level,
              displayName: yU.displayName,
              endTick: oU,
              showInNametag: yU.showInNametag
            }
          }(0, cU.Fc)(FU) || (yU[AU] = FU)
        }
        return yU
      }
    }

    function NU(UU, XU, zU, cU) {
      UU.hasEntity(XU) ? UU.updateEffect(XU, zU, cU) : function(UU, XU, zU) {
        yU.k.UY("EffectUpdate", {
          iX: UU,
          name: XU,
          ...zU
        }, !0)
      }(XU, zU, cU)
    }

    function IU(UU, XU, zU) {
      UU.hasEntity(XU) ? UU.removeEffect(XU, zU) : function(UU, XU) {
        yU.k.UY("RemoveEffect", {
          iX: UU,
          name: XU
        }, !0)
      }(XU, zU)
    }

    function pU(UU, XU, zU, cU, yU, QU, AU) {
      for (const EU of Object.keys(zU))
        for (const QU of Object.keys(zU[EU])) {
          var FU;
          null !== (FU = XU[EU]) && void 0 !== FU && FU[QU] || (IU(UU, EU, QU), cU && EU === cU && String(yU) !== String(EU) && IU(UU, yU, QU))
        }
      for (const aU of Object.keys(XU))
        for (const FU of Object.keys(XU[aU])) {
          var oU, DU;
          const tU = XU[aU][FU],
            gU = EU(tU.endTick, QU, AU);
          if (0 === gU) {
            IU(UU, aU, FU), cU && aU === cU && String(yU) !== String(aU) && IU(UU, yU, FU);
            continue
          }
          const kU = null === (oU = zU[aU]) || void 0 === oU ? void 0 : oU[FU],
            GU = kU && (pU = tU, (YU = kU).icon === pU.icon && YU.level === pU.level && YU.displayName === pU.displayName && YU.endTick === pU.endTick && YU.showInNametag === pU.showInNametag),
            BU = {
              icon: tU.icon,
              level: tU.level,
              displayName: null !== (DU = tU.displayName) && void 0 !== DU ? DU : void 0,
              duration: gU,
              showInNametag: tU.showInNametag
            };
          GU || NU(UU, aU, FU, BU), cU && aU === cU && NU(UU, yU, FU, {
            ...BU,
            showInNametag: !1
          })
        }
      var YU, pU
    }
  },
  37687: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => EU,
      e: () => DU,
      h: () => NU,
      k: () => FU,
      o: () => YU
    });
    var cU = zU(37685),
      yU = zU(37689),
      QU = zU(304);
    const AU = {
      description: "Bloxd Replay",
      accept: {
        [cU.c]: cU.b
      }
    };

    function FU() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, QU.e)()
    }

    function oU(UU) {
      return UU instanceof DOMException && "AbortError" === UU.name
    }
    async function DU() {
      try {
        const [UU] = await window.showOpenFilePicker({
          multiple: !1,
          types: [AU]
        }), XU = await UU.getFile();
        return {
          handle: UU,
          bytes: new Uint8Array(await XU.arrayBuffer())
        }
      } catch (UU) {
        if (oU(UU)) return null;
        throw UU
      }
    }
    async function EU(UU) {
      if (UU && await async function(UU) {
          const XU = {
            mode: "readwrite"
          };
          return "granted" === await UU.queryPermission(XU) || "granted" === await UU.requestPermission(XU)
        }(UU)) return UU;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, cU.e)(),
          types: [AU]
        })
      } catch (XU) {
        if (oU(XU)) return null;
        throw XU
      }
    }
    async function YU(UU, XU) {
      const zU = await UU.createWritable();
      await zU.write(new Blob([XU], {
        type: cU.c
      })), await zU.close()
    }

    function NU(UU) {
      return (0, cU.d)((0, yU.g)(UU))
    }
  },
  37159: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => YU
    });
    var cU = zU(27),
      yU = zU(97),
      QU = zU(42),
      AU = zU(3964),
      FU = zU(3849),
      oU = zU(7253);
    const DU = "shaderPackListingCheckedAt",
      EU = 36e5;

    function YU() {
      const {
        canUseShaderPacks: UU
      } = yU.featureFlags.settings;
      var XU, YU;
      (0, FU.k)(UU) && !(0, FU.h)(UU) && (XU = QU.k.getItem(DU), YU = Date.now(), "number" !== typeof XU || YU < XU || YU - XU >= EU) && (0, AU.g)((() => {
        (async function() {
          if ("landingPage" !== cU.e.get("gameState")) return;
          const UU = await (0, oU.f)();
          if (void 0 === (null === UU || void 0 === UU ? void 0 : UU.listing)) return;
          QU.k.setItem(DU, Date.now());
          const {
            followListingUpdates: XU
          } = await Promise.all([zU.e(89), zU.e(147), zU.e(143)]).then((() => zU(43994)));
          await XU(UU, UU.listing) || QU.k.removeItem(DU)
        })().catch((UU => {
          console.error("Failed to check the shader pack listing for an update", UU)
        }))
      }))
    }
  },
  9516: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU,
      e: () => yU,
      g: () => QU,
      h: () => AU
    });
    let cU = null;

    function yU(UU, XU) {
      return `${XU}\n${null!==UU&&void 0!==UU?UU:""}`
    }

    function QU(UU) {
      cU = UU
    }

    function AU(UU) {
      const XU = cU;
      return cU = null, null !== XU && XU.key === UU ? XU.settled : null
    }

    function FU(UU, XU, zU, cU) {
      let yU = !1;
      null !== XU && setTimeout((() => {
        cU() && !yU && XU()
      }), 0), UU.then((UU => {
        yU = !0, zU(UU)
      }))
    }
  },
  37203: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => oU
    });
    var cU = zU(320),
      yU = zU(27),
      QU = zU(37211),
      AU = zU(1680),
      FU = zU(2058);

    function oU(UU, XU) {
      var zU, oU, DU;
      if (!yU.e.get("isKeydownEnabled") || UU.repeat) return;
      const EU = UU.code;
      "Escape" === UU.key ? (0, AU.g)(UU) : null !== (zU = FU.w.OpenSettings) && void 0 !== zU && zU.includes(EU) ? (0, AU.x)(UU, cU.s.SETTINGS) : null !== (oU = FU.w.OpenCharacterCustomization) && void 0 !== oU && oU.includes(EU) ? (0, QU.e)() || (0, AU.x)(UU, cU.s.CUSTOMISATION, XU()) : null !== (DU = FU.w.ShowDebugOverlay) && void 0 !== DU && DU.includes(EU) && yU.e.set({
        showDebugOverlay: !yU.e.get("showDebugOverlay")
      })
    }
  },
  37167: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => rU,
      c: () => HU
    });
    var cU = zU(646),
      yU = zU(1241),
      QU = zU(173);
    const AU = "cf-";

    function FU(UU) {
      return `${AU}${UU}`
    }

    function oU(UU) {
      return UU.startsWith(FU("game-server-"))
    }

    function DU(UU) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(UU)
    }
    var EU = zU(1262),
      YU = zU(1236),
      NU = zU(31),
      IU = zU(1220),
      pU = zU(1857),
      aU = zU(1889),
      tU = zU(3270),
      gU = zU(1349),
      kU = zU(1360),
      GU = zU(1545),
      BU = zU(1203),
      ZU = zU(37172),
      RU = zU(42),
      PU = zU(142),
      WU = zU(1896),
      dU = zU(37201);
    const LU = Date.UTC(2026, 11, 8),
      eU = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      CU = "gameServerRoute";
    async function wU(UU) {
      if (!UU.ok) {
        const XU = await UU.text().catch((() => ""));
        return 403 === UU.status && "ipv6_unsupported" === XU ? "ipv6Refused" : "other"
      }
      const XU = await UU.json().catch((() => null));
      return "object" === typeof XU && null !== XU && Number.isFinite(XU.version) ? "ours" : "other"
    }
    const qU = new class {
      constructor(UU) {
        this.deps = UU, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(UU) {
        return this.deps.enabled && DU(UU) && "cloudflare" === this.heldRoute() ? FU(UU) : UU
      }
      async afterJoinFailed(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const cU = new URL(UU).hostname;
        return oU(cU) ? await this.afterAliasJoinFailed(cU, XU, zU) : void 0 !== XU.gameServerUnreachable && this.checksJoinsTo(cU) && this.settle(await this.check(cU)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(UU) {
        const XU = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(XU, UU).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(UU) {
        this.deps.enabled && this.deps.oY("game_server_route", "cf_retry_joined", UU)
      }
      afterAutoRetryFailed(UU) {
        if (!this.deps.enabled) return;
        if (null === UU) return void this.deps.oY("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: XU
        } = UU;
        void 0 === XU ? this.deps.oY("game_server_route", "cf_retry_failed:other", 0) : "refused" === XU.at ? this.deps.oY("game_server_route", "cf_retry_failed:refused", XU.code) : this.deps.oY("game_server_route", `cf_retry_failed:${XU.at}`, XU.code)
      }
      afterMatchmade(UU) {
        var XU;
        if (!this.deps.enabled) return;
        const zU = null === (XU = this.stored()) || void 0 === XU ? void 0 : XU.recoveryArm;
        if (void 0 !== zU && null !== this.heldRoute() && this.reportArm(zU), null === this.aliasFailedAt) return;
        const cU = oU(new URL(UU).hostname);
        this.deps.oY("game_server_route", cU ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(UU, XU, zU) {
        const cU = new URL(UU).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(cU) || !await this.deps.seatLegs.whenSlow(XU)) return null;
        const yU = this.deps.seatLegs.answered,
          QU = await this.check(cU);
        return zU() ? this.settle(QU) ? "blocked" : "reported" : "blocked" !== QU.outcome || XU.aborted || this.deps.seatLegs.answered !== yU ? null : (this.settle(QU), "blocked")
      }
      afterAliasJoinLeft(UU) {
        this.deps.enabled && (this.reportArm(), this.deps.oY("game_server_route", "cf_join_left", UU))
      }
      afterJoined(UU) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const XU = new URL(UU).hostname,
          zU = oU(XU);
        if (zU) this.reportArm(), this.deps.oY("game_server_route", "cf_join", 0);
        else if (!DU(XU) || this.deps.random() >= .01) return;
        const cU = zU ? XU.slice(AU.length) : XU;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(cU, "direct", "direct_failed"), await this.reportRtt(FU(cU), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(UU, XU, zU) {
        let {
          gameServerUnreachable: cU,
          joinFailure: yU
        } = XU;
        if (void 0 === yU) return null;
        if ("refused" === yU.at) return this.reportArm(), this.deps.oY("game_server_route", "cf_join_refused", yU.code), null;
        const QU = this.recoveryArm();
        if (this.reportArm(QU), this.deps.oY("game_server_route", `cf_join_failed:${yU.at}`, yU.code), null !== zU && this.deps.oY("game_server_route", "cf_failed_since_route", zU), this.aliasFailedAt = this.deps.now(), void 0 === cU) return null;
        const AU = this.stored();
        return "cloudflare" !== (null === AU || void 0 === AU ? void 0 : AU.route) || "on" !== QU && AU.aliasFailedOnce || "ours" !== (await this.probeHost(UU)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === QU ? (this.store({
          ...AU,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && eU.has(yU.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= LU) return "on";
        const UU = this.stored();
        return void 0 !== (null === UU || void 0 === UU ? void 0 : UU.recoveryArm) ? UU.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== UU && this.store(UU), this.pageArm)
      }
      reportArm(UU) {
        this.armReported || this.deps.now() >= LU || (this.armReported = !0, this.deps.oY("game_server_route", "holdout" === (null !== UU && void 0 !== UU ? UU : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(UU) {
        return DU(UU) && "direct" !== this.heldRoute()
      }
      settle(UU) {
        let {
          outcome: XU,
          cfMs: zU
        } = UU;
        return this.deps.oY("game_server_route", XU, zU), "blocked" === XU && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(UU) {
        const XU = this.probeHost(FU(UU));
        if ("none" !== (await this.probeHost(UU)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: zU,
          ms: cU
        } = await XU;
        return "ours" !== zU && "ipv6Refused" !== zU ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(UU)).answer ? {
          outcome: "direct_reachable",
          cfMs: cU
        } : {
          outcome: "ipv6Refused" === zU ? "blocked_ipv6" : "blocked",
          cfMs: cU
        }
      }
      async reportRtt(UU, XU, zU) {
        const cU = "ours" === (await this.probeHost(UU)).answer ? await this.probeHost(UU) : null;
        "ours" === (null === cU || void 0 === cU ? void 0 : cU.answer) ? this.deps.oY("game_server_rtt", XU, cU.ms): this.deps.oY("game_server_rtt", zU, 0)
      }
      probeHost(UU) {
        return this.deps.probe(`https://${UU}/version`, 8e3)
      }
      stored() {
        return function(UU) {
          if ("object" !== typeof UU || null === UU) return null;
          const {
            route: XU,
            until: zU,
            aliasFailedOnce: cU,
            recoveryArm: yU
          } = UU;
          return "cloudflare" !== XU && "direct" !== XU || "number" !== typeof zU ? null : {
            route: XU,
            until: zU,
            ...!0 === cU ? {
              aliasFailedOnce: cU
            } : {},
            ..."on" === yU || "holdout" === yU ? {
              recoveryArm: yU
            } : {}
          }
        }(this.deps.storage.getItem(CU))
      }
      heldRoute() {
        const UU = this.stored();
        return null !== UU && UU.until > this.deps.now() ? UU.route : null
      }
      store(UU) {
        var XU, zU, cU, yU;
        const QU = null !== (XU = null !== (zU = null !== (cU = UU.recoveryArm) && void 0 !== cU ? cU : null === (yU = this.stored()) || void 0 === yU ? void 0 : yU.recoveryArm) && void 0 !== zU ? zU : this.pageArm) && void 0 !== XU ? XU : void 0;
        this.deps.storage.setItem(CU, void 0 === QU ? UU : {
          ...UU,
          recoveryArm: QU
        })
      }
    }({
      storage: RU.k,
      probe: async function(UU, XU) {
        const zU = performance.now(),
          cU = await (0, IU.j)(UU, {
            cache: "no-store"
          }, XU, (async UU => {
            const XU = Math.round(performance.now() - zU);
            return {
              answer: await wU(UU),
              ms: XU
            }
          }));
        return null !== cU && void 0 !== cU ? cU : {
          answer: "none",
          ms: 0
        }
      },
      oY: pU.D,
      enabled: !(0, PU.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: UU => new Promise((XU => {
        setTimeout(XU, UU)
      })),
      sleep: WU.e,
      seatLegs: dU.e
    });
    var OU = zU(1769),
      SU = zU(9516);

    function rU(UU) {
      return async (XU, zU, AU, FU, DU) => {
        let YU, GU = performance.now();
        if ((0, cU.P)(AU)) {
          if (DU.aborted) return fU();
          const UU = XU instanceof yU.f ? null : (0, SU.h)((0, SU.e)(XU, zU));
          let cU = await (null !== UU && void 0 !== UU ? UU : HU(XU, zU, FU));
          if (null !== UU && performance.now() - cU.at > iU && !DU.aborted) {
            const UU = await HU(XU, zU, FU);
            UU.result.isError() && !cU.result.isError() || (cU = UU)
          }
          const QU = cU.result;
          if (GU = cU.at, DU.aborted || tU.i.matchmakingEnded(QU.isError() ? null : cU.at), QU.isError()) {
            const UU = QU.asError();
            return console.log("Join room did not succeed, reason:", UU.message), UU.forward()
          }
          YU = QU.getValue(), qU.afterMatchmade(YU.endpoint)
        } else {
          tU.i.skipPlayWait();
          const UU = vU(AU.replace("https://", "").replace("http://", ""));
          if (UU.isError()) return UU.asError().forward();
          YU = {
            endpoint: UU.getValue(),
            gameNameWithVariation: zU,
            lobbyName: XU instanceof yU.f ? XU.getLobbyName() : XU
          }
        }
        if (DU.aborted) return fU();
        console.log(`Connecting to ${YU.gameNameWithVariation} in lobby ${YU.lobbyName} on game server ${YU.endpoint}`), NU.k.UY("matchmakeAndPlayStepCompleted", {
          step: QU.m.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, pU.m)(), aU.c.markGameLoadStart((0, OU.e)()), (0, kU.o)({
          websocketUrl: YU.endpoint,
          gameNameWithVariation: YU.gameNameWithVariation,
          lobbyName: YU.lobbyName
        }), NU.k.UY("loadingScreenState", "loadingPage:loadingGame");
        const BU = async () => {
          const UU = await async function(UU, XU, zU, cU) {
            const yU = await MU(UU, XU, zU);
            if (!yU.isError() && !cU.aborted) {
              const {
                endpoint: UU,
                gameNameWithVariation: XU,
                lobbyName: zU
              } = yU.getValue();
              (0, kU.o)({
                websocketUrl: UU,
                gameNameWithVariation: XU,
                lobbyName: zU
              })
            }
            return yU
          }(XU, zU, FU, DU);
          return UU.isError() || (YU = UU.getValue(), GU = performance.now()), UU
        }, ZU = !(0, cU.P)(AU), RU = XU => UU({
          place: YU,
          userContext: FU,
          direct: ZU,
          matchedAt: GU,
          rematch: BU
        }, XU), PU = () => oU(new URL(YU.endpoint).hostname), WU = PU() ? performance.now() : null, dU = ZU ? {
          result: await RU(DU),
          blockedAt: null,
          failureChecked: !1
        } : await async function(UU, XU, zU) {
          const cU = new IU.d(zU),
            yU = new AbortController;
          let QU = null,
            AU = !1,
            FU = null;
          const oU = qU.checkStalledJoin(UU, yU.signal, (() => AU)).then((UU => {
            FU = UU, "blocked" === UU && (QU = performance.now(), cU.controller.abort())
          }));
          try {
            const UU = await XU(cU.signal);
            return AU = UU.isError() && void 0 !== UU.asError().debugResult.gameServerUnreachable, yU.abort(), AU && await oU, {
              result: UU,
              blockedAt: QU,
              failureChecked: "reported" === FU
            }
          } finally {
            yU.abort(), cU.unfollow()
          }
        }(YU.endpoint, RU, DU);
        let LU = null !== WU && void 0 !== WU ? WU : dU.blockedAt,
          eU = dU.result;
        const CU = () => null === LU ? null : performance.now() - LU,
          wU = eU.isError() && !0 === eU.asError().debugResult.rematch;
        let rU = null;
        if (!eU.isError() || ZU || DU.aborted || wU || null !== dU.blockedAt || dU.failureChecked || (rU = await qU.afterJoinFailed(YU.endpoint, eU.asError().debugResult, CU())), eU.isError() && !ZU && ("reroute" === rU || !DU.aborted && (wU || null !== dU.blockedAt))) {
          if (wU || (LU ??= performance.now(), NU.k.UY("gameServerRouteSwitched")), DU.aborted) return uU(LU), fU();
          console.log("Matchmaking again");
          const UU = await BU();
          if (UU.isError()) return UU.asError().forward();
          if (DU.aborted) return uU(LU), fU();
          eU = await RU(DU), rU = null, !eU.isError() || DU.aborted || wU && !PU() || (rU = await qU.afterJoinFailed(YU.endpoint, eU.asError().debugResult, CU()))
        }
        if (eU.isError() && "retry" === rU && !DU.aborted && qU.takeAutoRetry()) {
          if (!await qU.waitToRetry(DU)) return fU();
          console.log("Joining through Cloudflare again");
          const UU = await BU();
          if (DU.aborted) return fU();
          if (UU.isError()) return qU.afterAutoRetryFailed(null), eU.asError().forward();
          if (eU = await RU(DU), eU.isError() && !DU.aborted) {
            const UU = eU.asError().debugResult;
            await qU.afterJoinFailed(YU.endpoint, UU, null), qU.afterAutoRetryFailed(UU)
          } else if (!eU.isError()) {
            var VU;
            qU.afterAutoRetryJoined(null !== (VU = CU()) && void 0 !== VU ? VU : 0)
          }
        }
        return eU.isError() ? (!0 === eU.asError().debugResult.QU && DU.aborted && uU(LU), eU.asError().forward()) : (qU.afterJoined(YU.endpoint), NU.k.UY("joinedGame", {
          gameNameWithVariation: YU.gameNameWithVariation,
          lobbyName: YU.lobbyName
        }), (0, gU.Q)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), EU.c.value({
          gameNameWithVariation: YU.gameNameWithVariation,
          lobbyName: YU.lobbyName
        }))
      }
    }

    function uU(UU) {
      null !== UU && qU.afterAliasJoinLeft(performance.now() - UU)
    }

    function fU() {
      return EU.c.errorWithCode("Left the game while it loaded", QU.m.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        QU: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const iU = 1e4;

    function HU(UU, XU, zU) {
      return MU(UU, XU, zU).then((UU => ({
        result: UU,
        at: performance.now()
      })))
    }
    async function MU(UU, XU, zU) {
      return (0, cU.P)(UU) || UU instanceof yU.f || !(UU.length > YU.H) ? await GU.c.matchmakePlayer(zU, UU, XU, (0, ZU.c)()).then((UU => {
        if (!1 === UU.succeeded) return EU.c.errorWithCode(UU.failReason, QU.m.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: XU,
          lobbyName: zU,
          gameNameWithVariation: cU
        } = UU, yU = vU(qU.hostFor(XU));
        return yU.isError() ? yU.asError().forward() : EU.c.value({
          endpoint: yU.getValue(),
          gameNameWithVariation: cU,
          lobbyName: zU
        })
      })).catch((UU => (console.error("Bad response from the matchmaking server:", UU), EU.c.errorWithCode(UU.toString(), QU.m.REQUEST_TO_MATCHMAKING, {
        error: UU,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", UU), EU.c.errorWithCode("This lobby link's name is too long. Ask for a new link.", QU.m.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function vU(UU) {
      const XU = BU.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(UU);
      return XU.isError() ? EU.c.errorWithCode(XU.asError().message, QU.m.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : EU.c.value(XU.getValue())
    }
    window.leaveGame = () => {
      (0, kU.j)("/")
    }
  },
  37181: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => NU,
      h: () => EU,
      i: () => IU,
      l: () => YU
    });
    var cU = zU(344),
      yU = zU(698),
      QU = zU(708),
      AU = zU(42);
    const FU = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      oU = "playSessionGameNameWithVariation",
      DU = "wasMatchmakePlayer";

    function EU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n;
      (0, QU.k)(UU, FU)
    }

    function YU() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).setItem(DU, !0)
    }

    function NU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n;
      return (0, QU.e)(UU, FU)
    }

    function IU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU.n;
      const zU = (0, QU.e)(XU, FU),
        EU = function(UU) {
          const XU = UU.getItem(oU);
          return "string" !== typeof XU ? null : XU
        }(XU),
        YU = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).getItem(DU)
        }(XU);
      let NU;
      return NU = null !== zU && null !== EU && (0, QU.i)(XU, FU) && function(UU, XU, zU) {
          const yU = (0, cU.Tb)(UU),
            QU = (0, cU.Tb)(XU),
            AU = (0, cU.Nb)(UU),
            FU = (0, cU.Nb)(XU);
          return !(yU !== QU || !zU) || yU === QU && AU === FU
        }(EU, UU, YU) ? zU : (0, yU.d)(), (0, QU.m)(XU, FU, NU), XU.setItem(oU, UU),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).removeItem(DU)
        }(XU), NU
    }
  },
  37172: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => ZU,
      g: () => RU
    });
    var cU = zU(1079),
      yU = zU(220),
      QU = zU(337),
      AU = zU(654),
      FU = zU(344),
      oU = zU(1083),
      DU = zU(687),
      EU = zU(730),
      YU = zU(4959),
      NU = zU(97),
      IU = zU(142),
      pU = zU(1800),
      aU = zU(114),
      tU = zU(37181),
      gU = zU(42),
      kU = zU(702),
      GU = zU(661),
      BU = zU(37186);

    function ZU() {
      var UU, XU;
      return [...null !== (UU = navigator.languages) && void 0 !== UU ? UU : [null !== (XU = navigator.language) && void 0 !== XU ? XU : "none"], "en-Gb"]
    }

    function RU(UU, XU, zU, RU, PU) {
      const WU = (0, cU.l)(XU) ? (0, cU.p)(XU) : null,
        dU = UU.isLoggedIn() && void 0 !== (0, yU.b)(QU.l, IU.siteUsed) ? (0, GU.g)() : null,
        LU = {
          cookies: (0, pU.getAllCookiesForGameNameWithVariation)(XU),
          isMobile: (0, NU.isMobile)(),
          isUsingCustomGameTexturePack: null !== WU && PU(WU),
          generalCookies: {
            joinDiscord: !!gU.k.getItem("DiscordPressed"),
            newGo: YU.d,
            ...UU.getMetricsCookies(),
            trafficCode: RU,
            compliance: NU.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, NU.getBrowserName)(),
            version: (0, NU.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, NU.getPlatformType)(),
            deviceType: (0, aU.c)()
          },
          isLoggedIn: UU.isLoggedIn(),
          lobbyName: zU,
          languages: ZU(),
          version: AU.d,
          siteUsed: IU.siteUsed,
          subsiteUsed: IU.subsiteUsed,
          playSessionId: (0, tU.i)(XU),
          visitSessionId: (0, kU.g)(),
          clientReason: DU.s.reason,
          budgetBasis: (0, BU.h)(),
          ...null !== EU.m && {
            diagClaim: EU.m.claimId
          },
          ...null !== dU && {
            webGpuLoss: dU
          }
        };
      return null !== WU && (0, FU.Lc)(WU) ? (LU.lobbyName = (0, cU.h)(WU, (0, cU.n)(XU), zU), {
        roomName: `classic_${oU.d}`,
        joinOptions: LU
      }) : {
        roomName: XU,
        joinOptions: LU
      }
    }
  },
  9339: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(9348),
      yU = zU(646),
      QU = zU(142);

    function AU(UU) {
      var XU, zU;
      if ((0, yU.P)(UU)) return !0;
      const AU = null !== (XU = null === (zU = QU.siteUsedData[QU.siteUsed]) || void 0 === zU ? void 0 : zU.adConfig.showRewardedAds) && void 0 !== XU && XU;
      for (const yU in UU) {
        const XU = UU[yU];
        if (null !== XU && void 0 !== XU && XU.items)
          for (const UU in XU.items)
            if ((0, cU.o)(XU.items[UU], AU)) return !1
      }
      return !0
    }
  },
  37293: (UU, XU, zU) => {
    function cU(UU, XU) {
      for (let zU = 0; zU < UU.length; zU++)
        if (UU[zU].identifier === XU) return UU[zU];
      return null
    }

    function yU(UU, XU) {
      return null !== cU(UU, XU)
    }
    zU.d(XU, {
      e: () => cU,
      f: () => yU
    })
  },
  37303: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      g: () => NU,
      j: () => gU,
      l: () => DU
    });
    var cU = zU(27),
      yU = zU(2580),
      QU = zU(2588),
      AU = zU(2591),
      FU = zU(2668),
      oU = zU(31);

    function DU(UU, XU) {
      return (!(0, AU.b)() || 0 === UU && 0 === XU) && (0, QU.C)(yU.j.Joystick, 0, UU, XU, 0)
    }
    const EU = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function YU(UU) {
      return UU.classList.contains("TouchKeyHit") && IU() ? null : UU.firstElementChild
    }

    function NU(UU) {
      return UU.classList.contains("TouchKeyHit") && !UU.classList.contains("CanvasZone") ? {
        whole: !IU(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: pU(YU(UU))
      }
    }

    function IU() {
      return document.documentElement.classList.contains(FU.o)
    }

    function pU(UU) {
      return !(UU instanceof HTMLElement) || UU.offsetWidth <= 0 || UU.offsetHeight <= 0 ? null : {
        width: UU.offsetWidth,
        height: UU.offsetHeight
      }
    }

    function aU(UU, XU) {
      const zU = UU => Math.min(65535, Math.round(4 * UU));
      return (zU(UU) | zU(XU) << 16) >>> 0
    }

    function tU(UU) {
      return {
        x: UU.left + UU.width / 2,
        y: UU.top + UU.height / 2,
        radius: Math.min(UU.width, UU.height) / 2
      }
    }
    const gU = new class {
      constructor(UU) {
        this.write = UU, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        XU ? this.elements.set(UU, {
          element: XU,
          hidden: zU
        }) : this.elements.delete(UU), this.measureOne(UU)
      }
      measure() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = UU.left, this.canvasTop = UU.top;
        for (const XU of this.elements.keys()) this.measureOne(XU)
      }
      hitZone(UU, XU) {
        let zU = null,
          cU = 1;
        for (const yU of this.elements.keys()) {
          const QU = this.shown(yU);
          if (!QU) continue;
          const {
            rect: AU,
            element: FU
          } = QU, oU = tU(AU), DU = Math.max(0, AU.width / 2 - oU.radius), EU = Math.max(0, AU.height / 2 - oU.radius), NU = Math.max(0, Math.abs(UU - oU.x) - DU), IU = Math.max(0, Math.abs(XU - oU.y) - EU), aU = FU.firstElementChild;
          let gU = Math.hypot(NU, IU) / oU.radius;
          const kU = pU(YU(FU));
          kU && (gU = Math.min(gU, Math.max(2 * Math.abs(UU - oU.x) / kU.width, 2 * Math.abs(XU - oU.y) / kU.height))), gU < cU && (zU = {
            code: yU,
            element: FU,
            key: aU,
            ...oU
          }, cU = gU)
        }
        return zU
      }
      measureOne(UU) {
        const XU = this.shown(UU);
        if (!XU) return void this.write(yU.j.TouchZone, UU, 0, 0, 0);
        const {
          rect: zU,
          element: cU
        } = XU, QU = tU(zU);
        this.write(yU.j.TouchZone, UU, QU.x - this.canvasLeft, QU.y - this.canvasTop, aU(zU.width, zU.height));
        const AU = pU(YU(cU));
        this.write(yU.j.TouchZone, 256 | UU, 0, 0, AU ? aU(AU.width, AU.height) : 0)
      }
      shown(UU) {
        const XU = this.elements.get(UU),
          zU = cU.e.get("worldPanelHud");
        if (!XU || XU.hidden || "none" === zU) return null;
        const yU = XU.element.getBoundingClientRect();
        return yU.width <= 0 || yU.height <= 0 ? null : {
          rect: yU,
          element: XU.element
        }
      }
    }(QU.C);
    (0, oU.n)(FU.h, (() => {
      gU.measure()
    }))
  },
  37624: (UU, XU, zU) => {
    function cU(UU, XU) {
      return null === UU || null === XU ? UU === XU : UU[0] === XU[0] && UU[1] === XU[1] && UU[2] === XU[2]
    }

    function yU(UU) {
      return [UU[0] + .5, UU[1] + .5, UU[2] + .5]
    }
    zU.d(XU, {
      e: () => yU,
      h: () => cU
    })
  },
  37568: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU,
      i: () => FU
    });
    const cU = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      yU = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      QU = {
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
      AU = {
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
      FU = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: cU.files,
          dependencies: cU.dependencies,
          bundledSource: cU.bundledSource,
          types: cU.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: yU.files,
          dependencies: yU.dependencies,
          bundledSource: yU.bundledSource,
          types: yU.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: QU.files,
          dependencies: QU.dependencies,
          bundledSource: QU.bundledSource,
          types: QU.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: AU.files,
          dependencies: AU.dependencies,
          bundledSource: AU.bundledSource,
          types: AU.types
        }
      };

    function oU(UU) {
      const XU = [],
        zU = new Set,
        cU = UU => {
          if (zU.has(UU)) return;
          const yU = FU[UU];
          if (yU) {
            zU.add(UU);
            for (const UU of yU.dependencies) cU(UU);
            XU.push(UU)
          }
        };
      for (const yU of UU) cU(yU);
      return XU
    }
  },
  37579: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU,
      g: () => FU,
      i: () => AU,
      k: () => QU,
      m: () => DU,
      o: () => EU,
      p: () => pU,
      s: () => IU,
      u: () => NU
    });
    var cU = zU(1258);
    const yU = ["quickjs", "ses"];

    function QU(UU) {
      return yU.includes(UU)
    }

    function AU(UU) {
      return UU === cU.d || UU === cU.h
    }

    function FU(UU, XU) {
      return UU === cU.d && XU === cU.h || UU === cU.h && XU === cU.d
    }

    function oU(UU) {
      const XU = cU.h in UU,
        zU = cU.d in UU;
      return XU && zU ? null : XU ? cU.h : zU ? cU.d : null
    }

    function DU(UU, XU, zU) {
      const cU = `${XU}/`;
      return UU.filter((UU => UU.startsWith(cU))).map((UU => [UU, `${zU}/${UU.slice(cU.length)}`]))
    }

    function EU(UU, XU) {
      let zU = 0;
      for (const [cU, yU] of Object.entries(UU)) cU !== XU && (zU += yU.length);
      return zU
    }
    const YU = "@plugins/";

    function NU(UU) {
      return `${YU}${UU}`
    }

    function IU(UU, XU) {
      return `/node_modules/@plugins/${UU}/${XU}`
    }

    function pU(UU) {
      if (!UU.startsWith(YU)) return null;
      const XU = UU.slice(YU.length);
      return function(UU) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(UU)
      }(XU) ? XU : null
    }
  },
  37588: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      h: () => yU,
      l: () => AU,
      o: () => oU,
      q: () => QU
    });
    var cU = zU(2609);
    const yU = 5,
      QU = "[SCHEMATIC]",
      AU = 1024e4;

    function FU(UU) {
      return UU.endsWith(".bloxdschem") && (0, cU.n)(UU.slice(0, -11) + ".ts") && UU.length <= 64
    }

    function oU(UU) {
      return Object.fromEntries(Object.keys(UU).map((UU => [UU, QU])))
    }
  },
  5369: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      h: () => cU,
      i: () => QU,
      l: () => oU,
      o: () => AU
    });
    const cU = ["sine", "triangle", "square", "sawtooth"],
      yU = 55,
      QU = {
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

    function AU(UU) {
      return "string" !== typeof UU ? UU : Object.hasOwn(QU, UU) ? QU[UU] : null
    }

    function FU(UU, XU, zU) {
      return Math.min(zU, Math.max(XU, UU))
    }

    function oU(UU) {
      const XU = FU(UU.durationMs, 10, 500),
        zU = FU(UU.attackMs, 0, XU),
        {
          intonation: yU
        } = UU;
      return {
        waveform: cU.includes(UU.waveform) ? UU.waveform : "sine",
        pitchHz: FU(UU.pitchHz, 20, 4e3),
        glideSemitones: FU(UU.glideSemitones, -24, 24),
        durationMs: XU,
        attackMs: zU,
        releaseMs: FU(UU.releaseMs, 0, XU - zU),
        lowpassHz: null === UU.lowpassHz ? null : FU(UU.lowpassHz, 20, 2e4),
        volume: FU(UU.volume, 0, 2),
        intonation: {
          variationSemitones: FU(yU.variationSemitones, 0, 6),
          declineSemitones: FU(yU.declineSemitones, 0, 12),
          questionRiseSemitones: FU(yU.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: FU(yU.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: FU(UU.syllableMs, 25, 200)
      }
    }
  },
  9392: () => {},
  10577: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18828: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20799: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20806: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20811: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20818: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20825: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);