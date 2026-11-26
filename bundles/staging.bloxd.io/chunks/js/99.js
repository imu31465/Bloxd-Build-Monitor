export const id = 99;
export const ids = [99];
export const modules = {
  37204: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => hB,
      f: () => EB
    });
    var YB = GB(56),
      DB = GB(2023),
      QB = GB(37206),
      oB = GB.n(QB),
      jB = GB(4956),
      yB = GB(2e3),
      JB = GB(1480),
      MB = GB(92),
      PB = GB(104),
      zB = GB(353),
      lB = GB(1090),
      pB = GB.n(lB),
      qB = GB(16),
      ZB = GB(1383),
      NB = GB(1699),
      RB = GB(1822),
      WB = GB(1739),
      AB = GB(2107),
      VB = GB(1450),
      SB = GB(2170),
      nB = GB(1434),
      UB = GB(3039),
      fB = GB(37214),
      kB = GB(37233),
      dB = GB(1510),
      KB = GB(2659),
      uB = GB(1175),
      mB = GB(37242);
    var IB = GB(34737),
      FB = GB(1273);
    const iB = ["touchstart", "touchend", "touchcancel"];
    const LB = new class {
      constructor() {
        this.saved = null, this.touchesDown = 0, this.due = !1, this.settled = !1, this.countTouches = BB => {
          this.touchesDown = BB.touches.length, this.due && 0 === this.touchesDown && this.putBack()
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
          for (const BB of iB) window.addEventListener(BB, this.countTouches, {
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
          x: BB,
          y: OB,
          viewportTop: GB,
          viewportLeft: YB
        } = this.saved, DB = window.visualViewport;
        if (window.scrollX === BB && window.scrollY === OB && DB.offsetTop === GB && DB.offsetLeft === YB || window.scrollTo(BB, OB), this.settled) {
          this.saved = null, this.settled = !1;
          for (const BB of iB) window.removeEventListener(BB, this.countTouches, {
            capture: !0
          })
        }
      }
    };
    IB.b.onRelease((() => {
      LB.keyboardSettled()
    }));
    var gB = GB(1282);
    const rB = GB(37244),
      XB = ["enter", "t", "/"];
    let wB = !1;

    function EB() {
      return wB || (0, RB.isTextEntry)(document.activeElement)
    }

    function cB() {
      var BB, OB;
      (0, SB.b)();
      const GB = null !== (BB = null === (OB = (0, VB.f)()) || void 0 === OB ? void 0 : OB.getBoundButton("keyboardChannel")) && void 0 !== BB ? BB : null;
      return GB ? (0, gB.jsx)(AB.c, {
        className: "ChatInputChannelGlyph",
        glyph: GB
      }) : null
    }

    function hB() {
      const {
        t: BB
      } = (0, uB.H)(), {
        isTouchScreen: OB
      } = (0, qB.o)(["isTouchScreen"]), GB = (0, nB.s)(), [QB, lB] = (0, YB.useState)(!1), AB = (0, YB.useRef)(QB), VB = (0, YB.useRef)(null), {
        messages: SB,
        reportedPlayers: iB,
        channel: EB
      } = (0, UB.m)(), hB = (0, YB.useRef)(0), eB = (0, YB.useRef)(""), TB = (0, YB.useRef)(null);
      var bB;
      bB = TB, (0, YB.useEffect)((() => {
        if (!(0, MB.isIOS)()) return;
        const BB = bB.current;
        let OB = null;
        const GB = GB => {
            const YB = GB.changedTouches[0];
            OB = "none" === getComputedStyle(BB).pointerEvents ? {
              id: YB.identifier,
              y: YB.clientY
            } : null
          },
          YB = GB => {
            const YB = OB,
              DB = YB && (0, mB.c)(GB.changedTouches, YB.id);
            DB && (GB.preventDefault(), BB.scrollBy({
              top: YB.y - DB.clientY,
              behavior: "instant"
            }), YB.y = DB.clientY)
          };
        return BB.addEventListener("touchstart", GB, {
          passive: !0
        }), BB.addEventListener("touchmove", YB, {
          passive: !1
        }), () => {
          BB.removeEventListener("touchstart", GB), BB.removeEventListener("touchmove", YB)
        }
      }), [bB]);
      const [CB, HB] = (0, YB.useState)(!1), [vB, sB] = (0, YB.useState)(!1), xB = (0, YB.useRef)(CB), tB = (0, YB.useRef)(null), BO = (0, YB.useRef)(!1), OO = (0, YB.useRef)(null), GO = (0, YB.useRef)(null), YO = (0, YB.useRef)(null), DO = (0, YB.useRef)(yO);
      DO.current = yO;
      const QO = (0, KB.l)();

      function oO() {
        AB.current = !1, lB(!1), GO.current.blur()
      }

      function jO(BB) {
        xB.current = BB, HB(BB)
      }

      function yO() {
        const BB = GO.current.value;
        GO.current.value = "", JO(BB)
      }

      function JO(BB) {
        (0, UB.l)(BB), hB.current = 0, jO(!1)
      }

      function MO(BB, OB) {
        0 === hB.current && (eB.current = GO.current.value);
        const GB = (0, UB.h)(hB.current + BB, OB);
        hB.current = GB.stepsBack, GO.current.value = 0 === GB.stepsBack ? eB.current : GB.text, setTimeout((() => {
          GO.current && GO.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function PO() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        TB.current && (!BB && xB.current || (TB.current.scrollTop = 1e5))
      }
      return (0, jB.e)(!0, QB, "ChatComponent"), (0, YB.useEffect)((() => (wB = QB, () => {
          wB = !1
        })), [QB]), (0, JB.f)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, NB.u)() && lB(!1)
        })), (0, YB.useEffect)((() => {
          GO.current.addEventListener("blur", (BB => {
            if (null === GO.current) return;
            Array.from(document.querySelectorAll(":hover")).some((BB => BB.classList.contains("ChatInputChannel") || BB.classList.contains("ChatMsgSelectWrapper"))) || ((0, MB.isMobile)() && AB.current && "" !== GO.current.value && DO.current(), lB(!1))
          }));
          const BB = BB => {
            VB.current.contains(BB.target) || (0, WB.k)(BB.target) || lB(!1)
          };
          document.addEventListener("touchstart", BB, {
            capture: !0
          });
          const OB = BB => {
            (0, kB.f)(BB.target) && (AB.current = !1, lB(!1))
          };
          document.addEventListener("mousedown", OB, {
            capture: !0
          });
          const GB = () => {
              clearTimeout(tB.current), jO(!0)
            },
            YB = () => {
              clearTimeout(tB.current), tB.current = setTimeout((() => {
                jO(!1), PO()
              }), 4e3)
            },
            QB = () => {
              document.pointerLockElement ? (lB(!1), sB(!0), BO.current = !1, jO(!1), PO()) : sB(!1)
            };
          TB.current.addEventListener("pointermove", (BB => {
            "touch" === BB.pointerType || BO.current || document.pointerLockElement || (BO.current = !0, clearTimeout(tB.current))
          })), TB.current.addEventListener("pointerleave", (BB => {
            "touch" !== BB.pointerType && (BO.current = !1, xB.current && YB())
          })), TB.current.addEventListener("pointerdown", (BB => {
            "touch" === BB.pointerType || document.pointerLockElement || (BO.current = !0, GB())
          })), TB.current.addEventListener("wheel", (BB => {
            document.pointerLockElement || BB.deltaY >= 0 && Math.abs(TB.current.scrollTop) < 1 || (GB(), BO.current || (tB.current = setTimeout((() => {
              jO(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), TB.current.addEventListener("touchstart", GB), TB.current.addEventListener("touchend", YB), TB.current.addEventListener("touchcancel", YB), document.addEventListener("pointerlockchange", QB);
          const jB = BB => {
            if (QO.shown && (AB.current || ! function(BB) {
                if ((0, RB.isTypingInInput)()) return !0;
                const OB = document.activeElement;
                return (OB instanceof HTMLButtonElement || "button" === (null === OB || void 0 === OB ? void 0 : OB.getAttribute("role"))) && ["Enter", " "].includes(BB.key)
              }(BB)) && "codeEditor" !== qB.c.get("openInGameMenuName") && "lobbyCodeEditor" !== qB.c.get("openInGameMenuName") && !DB.gameBridge.latest("connectedGame").replay)
              if (AB.current || !(0, NB.u)()) {
                if (AB.current) {
                  if ("ArrowUp" === BB.code || "ArrowDown" === BB.code) return MO("ArrowUp" === BB.code ? 1 : -1, !1), void BB.stopPropagation();
                  if ("Tab" === BB.code) return UB.c.selectNextChannel(), BB.stopPropagation(), void BB.preventDefault();
                  if (BB.ctrlKey && aB.includes(rB[BB.keyCode])) return BB.preventDefault(), void BB.stopPropagation()
                }
                if ([...XB, "esc"].includes(oB()(BB)))
                  if ("esc" !== oB()(BB)) {
                    if (!AB.current || "/" !== oB()(BB)) {
                      if ("t" === oB()(BB)) {
                        if (AB.current) return void BB.stopPropagation();
                        BB.preventDefault()
                      }
                      AB.current && "" !== GO.current.value && DO.current(), BB.repeat || (AB.current || "/" === oB()(BB) && (GO.current.value = "/", BB.preventDefault()), lB(!AB.current))
                    }
                  } else AB.current && (lB(!1), BB.stopPropagation());
                else AB.current && BB.stopPropagation()
              } else XB.includes(oB()(BB)) && (BB.preventDefault(), BB.stopPropagation(), (0, NB.d)(BB))
          };
          document.addEventListener("keydown", jB, {
            capture: !0
          });
          const yB = TB.current;
          let JB = !1;
          const PB = new ResizeObserver((() => {
              JB && (JB = !1, PO())
            })),
            zB = () => {
              JB = !0, PB.unobserve(yB), PB.observe(yB)
            };
          OO.current = zB;
          const pB = new MutationObserver(zB);
          return pB.observe(yB, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", jB, {
              capture: !0
            }), document.removeEventListener("touchstart", BB, {
              capture: !0
            }), document.removeEventListener("mousedown", OB, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", QB), OO.current = null, pB.disconnect(), PB.disconnect(), clearTimeout(tB.current)
          }
        }), []), (0, WB.q)(GO, {
          open: () => {
            lB(!0)
          },
          close: () => {
            oO()
          },
          submit: () => {
            "" !== GO.current.value && yO(), oO()
          },
          stepHistory: () => {
            MO(1, !0)
          },
          sendLine: BB => {
            JO(BB), oO()
          },
          selectNextChannel: () => {
            UB.c.selectNextChannel()
          }
        }), (0, YB.useEffect)((() => {
          var BB;
          (AB.current = QB, GO.current) && (QB ? (hB.current = 0, GO.current.focus()) : (GO.current.blur(), null === (BB = OO.current) || void 0 === BB || BB.call(OO)))
        }), [QB]),
        function(BB, OB) {
          (0, YB.useLayoutEffect)((() => {
            if (!OB) return;
            IB.b.hold(), LB.keyboardUp();
            const GB = BB.current.closest(".InGameHeaderAndChat"),
              YB = (0, FB.e)((BB => {
                let {
                  top: OB,
                  height: YB
                } = BB;
                GB.style.setProperty("--keyboard-top", `${OB+YB}px`)
              }));
            return () => {
              YB(), GB.style.removeProperty("--keyboard-top"), IB.b.release(), LB.keyboardDown()
            }
          }), [BB, OB])
        }(VB, QB && OB), (0, gB.jsx)(gB.Fragment, {
          children: (0, gB.jsxs)("div", {
            ref: VB,
            className: pB()("Chat", {
              Chatting: QB
            }),
            "data-camera-keeper": QB ? "" : void 0,
            children: [(0, gB.jsx)("div", {
              ref: TB,
              className: pB()("ChatMessages", {
                HideScrollbar: !CB && !QB,
                NoScrolling: !(0, MB.isMobile)() && vB
              }),
              children: (0, gB.jsx)(fB.e, {
                messages: SB,
                reportedPlayers: iB
              })
            }), OB && !QB && (0, gB.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": BB("general:chat"),
              ...(0, dB.g)((() => {
                lB(!0), YO.current.style.display = "flex", (0, MB.isIOS)() && GO.current.focus()
              }), "pointerup"),
              children: (0, gB.jsx)(ZB.b, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, gB.jsxs)("div", {
              ref: YO,
              className: "ChatInputWrapper",
              style: {
                display: "" + (QB ? "flex" : "none")
              },
              children: [EB && (0, gB.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: EB.elementBgColor
                },
                onClick: BB => {
                  UB.c.selectNextChannel(), GO.current.focus()
                },
                children: (0, gB.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, gB.jsx)(yB.b, {
                    text: EB.elementContent
                  })
                })
              }), EB && GB && (0, gB.jsx)(cB, {}), (0, gB.jsx)("input", {
                className: "ChatInput",
                maxLength: zB.ud,
                ref: GO,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": BB("general:chat"),
                placeholder: EB ? `${EB.channelName} Chat${"touchOnly"===(0,PB.d)()||GB?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const aB = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  37214: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => fB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(3046),
      jB = GB(25),
      yB = GB(2560),
      JB = GB(4031),
      MB = GB(2131),
      PB = GB(16),
      zB = GB(2e3),
      lB = GB(37220),
      pB = GB(2289),
      qB = GB(3053),
      ZB = GB(2912),
      NB = GB(2887),
      RB = GB(2879),
      WB = GB(4050),
      AB = GB(37223),
      VB = GB(3257),
      SB = GB(2063),
      nB = GB(1282);

    function UB(BB) {
      for (let GB = BB.length - 1; GB >= 0; GB--) {
        const YB = "string" === typeof(OB = BB[GB]) ? OB : "str" in OB && "string" === typeof OB.str ? OB.str : "";
        if ("" !== YB.trim()) return YB
      }
      var OB;
      return ""
    }

    function fB(BB) {
      let {
        messages: OB,
        reportedPlayers: GB
      } = BB;
      return (0, nB.jsx)(nB.Fragment, {
        children: OB.map((BB => (0, nB.jsx)(kB, {
          message: BB,
          reportedPlayers: GB
        }, BB.clientChatMsgId)))
      })
    }
    const kB = (0, YB.memo)((function(BB) {
      var OB;
      let {
        message: GB,
        reportedPlayers: DB
      } = BB;
      const fB = (0, YB.useRef)(null),
        [kB] = (0, YB.useState)(VB.h),
        {
          author: dB
        } = GB,
        KB = null === dB || void 0 === dB ? void 0 : dB.id,
        uB = null !== (OB = null === dB || void 0 === dB ? void 0 : dB.name) && void 0 !== OB ? OB : void 0,
        mB = (0, MB.b)(uB),
        IB = null !== dB && void 0 !== dB && dB.profileEffect ? pB.h[dB.profileEffect] : void 0,
        FB = null !== dB && !dB.local,
        {
          worldCodeLineId: iB
        } = GB,
        LB = (0, SB.f)("hiddenPlayerNames", (BB => (0, qB.i)(FB, uB, BB))),
        gB = null === GB.serverChatMsgId || null === dB ? null : {
          text: UB(GB.content),
          hiddenFromReplay: GB.hiddenFromReplay,
          serverChatMsgId: GB.serverChatMsgId,
          authorId: dB.id
        },
        rB = (0, JB.j)(FB && null !== uB && void 0 !== uB ? uB : null),
        XB = (0, RB.e)(fB);
      (0, YB.useEffect)((() => () => {
        RB.b.closeIfOwner(fB)
      }), []);
      const wB = null !== dB && null !== iB,
        EB = [];
      FB && null !== gB && !DB.includes(KB) && EB.push({
        icon: "flag",
        text: wB ? "general:reportPlayer" : "general:report",
        onClick: () => {
          jB.o.tM("OpenReportMenu", {
            playerEId: KB,
            playerName: uB,
            ty: gB,
            serverChatMsgId: gB.serverChatMsgId
          })
        }
      }), null !== iB && EB.push({
        icon: "flag",
        text: wB ? "general:reportGameMessage" : "general:report",
        onClick: () => {
          jB.o.tM("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            ty: {
              text: (0, oB.b)(GB.content),
              hiddenFromReplay: GB.hiddenFromReplay
            },
            serverChatMsgId: iB
          })
        }
      });
      const cB = FB && void 0 !== uB ? (0, WB.b)(rB, uB, gB) : [];
      return (0, nB.jsxs)("div", {
        ref: fB,
        className: QB()("MessageWrapper", {
          ChatMsgSelectWrapper: KB,
          Still: kB
        }),
        "data-replay-hidden": GB.hiddenFromReplay ? "" : void 0,
        onContextMenu: LB ? BB => {
          (0, ZB.c)(fB, BB, {
            ...(0, qB.g)(KB, uB),
            showLocation: !1,
            status: null,
            extraActions: EB,
            moderationActions: (0, AB.b)(uB),
            friendRequestSource: "chat"
          }, PB.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: LB ? BB => {
          (0, NB.d)(BB, (() => (0, qB.g)(KB, uB).playerSocialPreview))
        } : void 0,
        children: [IB && (0, nB.jsx)(IB, {
          className: "ChatMessageBackground",
          simple: !0
        }), (FB || null !== iB) && !XB && (0, nB.jsx)(lB.e, {
          className: "ChatFloatingActions",
          triggerElementRef: fB,
          options: [...EB.map((BB => {
            let {
              icon: OB,
              text: GB,
              onClick: YB
            } = BB;
            return {
              icon: OB,
              text: GB,
              onPointerDown: YB
            }
          })), ...cB, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: BB => {
              (0, yB.g)(uB, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: LB && "blocked" !== rB
          }]
        }), (0, nB.jsx)(zB.b, {
          text: GB.content,
          friendBadgeFor: mB ? uB : void 0
        }, GB.clientChatMsgId)]
      }, GB.clientChatMsgId)
    }))
  },
  37580: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      f: () => MB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(1485),
      jB = GB(1282);
    const yB = 200,
      JB = 160;

    function MB() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function PB(BB) {
      let {
        side: OB,
        defaultSize: GB,
        covers: DB,
        onClose: MB,
        children: PB
      } = BB;
      const zB = (0, YB.useRef)(null),
        [lB, pB] = (0, YB.useState)(null),
        [qB, ZB] = (0, YB.useState)(GB);
      qB !== GB && (ZB(GB), pB(null));
      const NB = (0, YB.useRef)(null),
        RB = "top" === OB,
        WB = BB => RB ? BB.clientY : BB.clientX,
        AB = () => {
          NB.current = null
        };
      return (0, jB.jsxs)("div", {
        ref: zB,
        className: QB()("ResizableSidePanel", OB && `ResizableSidePanel-${OB}`, {
          Covers: "always" === DB,
          CoversWhenNarrow: "narrow" === DB,
          Dragged: null !== lB
        }),
        style: {
          [RB ? "height" : "width"]: null !== lB && void 0 !== lB ? lB : GB
        },
        children: [PB, OB && (0, jB.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": RB ? "horizontal" : "vertical",
          onPointerDown: BB => {
            if (0 !== BB.button) return;
            BB.preventDefault();
            const OB = zB.current,
              GB = Array.from(OB.parentElement.children).reduce(((BB, GB) => GB !== OB && "0" !== getComputedStyle(GB).flexGrow ? BB + (BB => RB ? BB.clientHeight : BB.clientWidth)(GB) : BB), 0),
              YB = RB ? OB.offsetHeight : OB.offsetWidth,
              DB = Math.min(yB, YB),
              QB = Math.max(DB, YB + Math.max(0, GB - JB));
            NB.current = {
              start: WB(BB),
              startSize: YB,
              minSize: DB,
              maxSize: QB
            }, BB.currentTarget.setPointerCapture(BB.pointerId)
          },
          onPointerMove: BB => {
            const GB = NB.current;
            if (!GB) return;
            const YB = "right" === OB ? GB.start - BB.clientX : WB(BB) - GB.start;
            pB(Math.min(GB.maxSize, Math.max(GB.minSize, GB.startSize + YB)))
          },
          onPointerUp: AB,
          onPointerCancel: AB,
          onLostPointerCapture: AB
        }), MB && (0, jB.jsx)(oB.m, {
          className: "ResizableSidePanelClose",
          onClick: MB
        })]
      })
    }
  },
  37608: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => UB,
      C: () => DB,
      D: () => nB,
      c: () => WB,
      d: () => ZB,
      h: () => pB,
      l: () => lB,
      m: () => RB,
      o: () => fB,
      s: () => AB,
      u: () => SB,
      w: () => VB
    });
    var YB = GB(56);
    const DB = 5e3,
      QB = 500,
      oB = 3e3;
    let jB = null,
      yB = null,
      JB = null;
    const MB = new Set;

    function PB(BB) {
      jB = BB;
      for (const OB of MB) OB()
    }

    function zB() {
      if (!jB || void 0 !== jB.endedAt) return;
      null !== yB && (clearTimeout(yB), yB = null), PB({
        ...jB,
        endedAt: Date.now()
      });
      const BB = JB;
      JB = null, null === BB || void 0 === BB || BB()
    }

    function lB(BB, OB) {
      let {
        submit: GB,
        reopen: YB
      } = OB;
      null !== yB && clearTimeout(yB), JB = YB, PB({
        ...BB,
        startedAt: Date.now(),
        errors: []
      }), yB = setTimeout(zB, oB), GB()
    }

    function pB() {
      jB && void 0 === jB.endedAt && void 0 === jB.ranAt && (null !== yB && clearTimeout(yB), PB({
        ...jB,
        ranAt: Date.now()
      }), yB = setTimeout(zB, DB))
    }
    const qB = 3;

    function ZB(BB) {
      if (!jB || void 0 === jB.ranAt || void 0 !== jB.endedAt || jB.errors.includes(BB) || jB.errors.length >= qB) return;
      const OB = 0 === jB.errors.length;
      PB({
        ...jB,
        errors: [...jB.errors, BB]
      }), OB && (null !== yB && clearTimeout(yB), yB = setTimeout(zB, QB))
    }

    function NB(BB) {
      var OB;
      return (null === (OB = jB) || void 0 === OB ? void 0 : OB.chatKey) === BB ? jB : null
    }

    function RB(BB) {
      const OB = NB(BB);
      return OB && void 0 !== OB.endedAt ? (PB(null), OB) : null
    }

    function WB(BB) {
      var OB;
      (null === (OB = jB) || void 0 === OB ? void 0 : OB.chatKey) === BB && (null !== yB && (clearTimeout(yB), yB = null), JB = null, PB(null))
    }
    const AB = "These changes from your last answer didn't go in. Make them again.";

    function VB(BB) {
      const OB = [...new Set(BB)].slice(0, qB);
      return `Fix this in your change: when it ran, the world showed ${1===OB.length?"this error":"these errors"}: ${OB.join(" ")}`
    }

    function SB(BB) {
      return `Your change didn't go in, because the code wouldn't run at all: ${BB.join(" ")} Send the whole change again with that fixed.`
    }

    function nB(BB) {
      return `Fix this in your change: ${BB.join(" ")}`
    }

    function UB(BB) {
      var OB;
      if (void 0 === BB.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const GB = Math.max(1, Math.round(((null !== (OB = BB.endedAt) && void 0 !== OB ? OB : BB.ranAt) - BB.ranAt) / 1e3)),
        YB = `Your change ran in your world for ${GB} ${1===GB?"second":"seconds"}`;
      return 0 === BB.errors.length ? {
        title: "Tested: no errors",
        text: `${YB} without an error.`
      } : {
        title: 1 === BB.errors.length ? "Tested: it showed an error" : `Tested: it showed ${BB.errors.length} errors`,
        text: `${YB} and showed: ${BB.errors.join(" ")}`
      }
    }

    function fB(BB) {
      const [OB, GB] = (0, YB.useState)((() => NB(BB)));
      return (0, YB.useEffect)((() => {
        const OB = () => {
          GB(NB(BB))
        };
        return OB(), MB.add(OB), () => {
          MB.delete(OB)
        }
      }), [BB]), OB
    }
  },
  37612: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      e: () => YB
    });
    const YB = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function DB(BB, OB, GB) {
      return {
        key: BB,
        label: `Code block at ${OB.join(", ")}`,
        codeBlock: !0,
        pos: OB,
        canChangePos: GB
      }
    }
  },
  37601: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB,
      f: () => QB,
      g: () => oB,
      i: () => DB
    });
    const YB = "code block",
      DB = "World Code/";

    function QB(BB) {
      return BB.trim().toLowerCase().startsWith(DB.toLowerCase())
    }

    function oB(BB) {
      return BB.trim().slice(DB.length).replace(/^\.?\//, "")
    }
  },
  37566: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB,
      h: () => JB,
      j: () => jB,
      l: () => MB
    });
    var YB = GB(56),
      DB = GB(31),
      QB = GB(92);
    class oB {
      constructor(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = BB, this.defaultValue = OB, this.canChange = GB, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const BB = DB.g.getItem(this.storageKey);
            this.value = "boolean" === typeof BB ? BB : this.defaultValue
          }
          return this.value
        }, this.set = BB => {
          this.value = BB, DB.g.setItem(this.storageKey, BB);
          for (const OB of this.listeners) OB(BB)
        }
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    }
    const jB = new oB("codeEditorLightMode", !1),
      yB = new oB("codeEditorAiHints", !0),
      JB = new oB("codeEditorAiKeySafetyCheck", !0, QB.featureFlags.isOwnTopLevelSite);

    function MB(BB) {
      const [OB, GB] = (0, YB.useState)(BB.get);
      return (0, YB.useEffect)((() => {
        const OB = BB.subscribe(GB);
        return GB(BB.get()), OB
      }), [BB]), [OB, BB.set]
    }
  },
  37543: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    const YB = "CodeEditorPopup"
  },
  37562: (BB, OB, GB) => {
    GB.d(OB, {
      D: () => KB,
      E: () => kB,
      G: () => zB,
      H: () => FB,
      J: () => UB,
      N: () => fB,
      O: () => IB,
      d: () => pB,
      g: () => yB,
      j: () => qB,
      m: () => dB,
      p: () => jB,
      s: () => MB,
      t: () => lB,
      x: () => ZB,
      z: () => AB
    });
    var YB = GB(2646),
      DB = GB(37555);
    const QB = "bloxd-world-code-directory-sync",
      oB = "handles",
      jB = "[INVALID SCHEMATIC PLACEHOLDER]";

    function yB(BB, OB) {
      return `${BB}::${OB}`
    }
    const JB = new Set(["node_modules", ".git"]);

    function MB() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function PB() {
      return new Promise(((BB, OB) => {
        const GB = indexedDB.open(QB, 1);
        GB.onupgradeneeded = () => {
          const BB = GB.result;
          BB.objectStoreNames.contains(oB) || BB.createObjectStore(oB)
        }, GB.onsuccess = () => {
          BB(GB.result)
        }, GB.onerror = () => {
          var BB;
          OB(null !== (BB = GB.error) && void 0 !== BB ? BB : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function zB(BB, OB) {
      const GB = await PB();
      try {
        await new Promise(((YB, DB) => {
          const QB = GB.transaction(oB, "readwrite");
          QB.objectStore(oB).put(OB, BB), QB.oncomplete = () => {
            YB()
          }, QB.onerror = () => {
            var BB;
            DB(null !== (BB = QB.error) && void 0 !== BB ? BB : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        GB.close()
      }
    }
    async function lB(BB) {
      const OB = await PB();
      try {
        return await new Promise(((GB, YB) => {
          const DB = OB.transaction(oB, "readonly").objectStore(oB).get(BB);
          DB.onsuccess = () => {
            var BB;
            GB(null !== (BB = DB.result) && void 0 !== BB ? BB : null)
          }, DB.onerror = () => {
            var BB;
            YB(null !== (BB = DB.error) && void 0 !== BB ? BB : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        OB.close()
      }
    }
    async function pB(BB) {
      const OB = await PB();
      try {
        await new Promise(((GB, YB) => {
          const DB = OB.transaction(oB, "readwrite");
          DB.objectStore(oB).delete(BB), DB.oncomplete = () => {
            GB()
          }, DB.onerror = () => {
            var BB;
            YB(null !== (BB = DB.error) && void 0 !== BB ? BB : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        OB.close()
      }
    }
    async function qB(BB) {
      const OB = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await BB.queryPermission(OB) || "granted" === await BB.requestPermission(OB)
    }
    async function ZB(BB) {
      if (!MB()) return null;
      try {
        const OB = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await zB(BB, OB), OB
      } catch (OB) {
        if (function(BB) {
            return BB instanceof DOMException && "AbortError" === BB.name
          }(OB)) return null;
        throw OB
      }
    }

    function NB(BB) {
      return BB.startsWith(".") || JB.has(BB)
    }

    function RB(BB) {
      if (!BB) return !0;
      const OB = BB.split("/");
      for (const GB of OB)
        if ("" === GB || "." === GB || ".." === GB) return !1;
      return !0
    }
    async function WB(BB, OB, GB) {
      for await (const [QB, oB] of BB.entries()) {
        if ("directory" === oB.kind) {
          if (NB(QB)) continue;
          const BB = OB ? `${OB}/${QB}` : QB;
          if (!RB(BB)) continue;
          await WB(oB, BB, GB);
          continue
        }
        const BB = OB ? `${OB}/${QB}` : QB;
        if (!(0, YB.q)(BB) && !(0, DB.b)(BB)) continue;
        const jB = await oB.getFile();
        GB[BB] = (0, DB.b)(BB) ? await uB(jB) : await jB.text()
      }
    }
    async function AB(BB) {
      const OB = {};
      return await WB(BB, "", OB), OB
    }

    function VB(BB) {
      return !(!BB || BB !== BB.trim() || BB.startsWith("/") || BB.includes("\\") || BB.includes("\0")) && RB(BB)
    }
    async function SB(BB, OB, GB) {
      const YB = OB.split("/"),
        DB = YB[YB.length - 1];
      let QB = BB;
      for (let oB = 0; oB < YB.length - 1; oB++) QB = await QB.getDirectoryHandle(YB[oB], {
        create: GB
      });
      return {
        dir: QB,
        fileName: DB
      }
    }
    async function nB(BB, OB, GB) {
      if (!VB(OB)) throw new Error(`Refusing to write unsafe path: ${OB}`);
      const {
        dir: YB,
        fileName: DB
      } = await SB(BB, OB, !0), QB = await YB.getFileHandle(DB, {
        create: !0
      }), oB = await QB.createWritable();
      await oB.write(GB), await oB.close()
    }
    async function UB(BB, OB, GB) {
      const YB = await async function(BB, OB) {
        if (!VB(OB)) return null;
        try {
          const {
            dir: GB,
            fileName: YB
          } = await SB(BB, OB, !1), DB = await GB.getFileHandle(YB), QB = await DB.getFile();
          return await QB.text()
        } catch (GB) {
          if (GB instanceof DOMException && ("NotFoundError" === GB.name || "NotAllowedError" === GB.name)) return null;
          throw GB
        }
      }(BB, OB);
      YB !== GB && await nB(BB, OB, GB)
    }
    async function fB(BB, OB, GB) {
      if (!(0, YB.q)(OB) && !(0, DB.b)(OB)) throw new Error(`Refusing to write non-allowlisted path: ${OB}`);
      if ((0, DB.b)(OB)) {
        if (await mB(BB, OB) === jB) throw new Error(`Move the binary schematic ${OB} outside the linked folder before syncing its placeholder`)
      }
      await nB(BB, OB, GB)
    }
    async function kB(BB, OB) {
      if (!VB(OB)) throw new Error(`Refusing to remove unsafe path: ${OB}`);
      try {
        const {
          dir: GB,
          fileName: YB
        } = await SB(BB, OB, !1);
        await GB.removeEntry(YB)
      } catch (GB) {
        if (GB instanceof DOMException && ("NotFoundError" === GB.name || "NotAllowedError" === GB.name)) return;
        throw GB
      }
    }
    async function dB(BB, OB) {
      if (!VB(OB)) return null;
      try {
        const GB = OB.split("/");
        let YB = BB;
        for (const BB of GB) YB = await YB.getDirectoryHandle(BB);
        return YB
      } catch (GB) {
        if (GB instanceof DOMException && ("NotFoundError" === GB.name || "NotAllowedError" === GB.name)) return null;
        throw GB
      }
    }
    async function KB(BB, OB) {
      if ((0, YB.q)(OB) || (0, DB.b)(OB)) {
        if ((0, DB.b)(OB)) {
          if (await mB(BB, OB) === jB) throw new Error(`Refusing to remove a binary schematic: ${OB}`)
        }
        await kB(BB, OB)
      }
    }
    async function uB(BB) {
      if (BB.size > 64) return jB;
      const OB = await BB.text();
      return Array.from(OB).some((BB => {
        const OB = BB.charCodeAt(0);
        return OB < 9 || OB > 13 && OB < 32 || 65533 === OB
      })) ? jB : OB
    }
    async function mB(BB, OB) {
      try {
        const {
          dir: GB,
          fileName: YB
        } = await SB(BB, OB, !1);
        return await uB(await (await GB.getFileHandle(YB)).getFile())
      } catch (GB) {
        if (GB instanceof DOMException && "NotFoundError" === GB.name) return null;
        throw GB
      }
    }
    async function IB(BB, OB) {
      const GB = await AB(BB);
      for (const YB of Object.keys(GB)) YB in OB || (0, DB.b)(YB) || await KB(BB, YB);
      for (const [QB, oB] of Object.entries(OB))((0, YB.q)(QB) || (0, DB.b)(QB)) && await fB(BB, QB, oB)
    }

    function FB(BB, OB) {
      var GB, YB;
      let DB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const QB = null !== (GB = DB.debounceMs) && void 0 !== GB ? GB : 300,
        oB = null !== (YB = DB.pollMs) && void 0 !== YB ? YB : 1e3;
      let jB = !1,
        yB = null,
        JB = null,
        MB = null;
      const PB = () => {
          jB || (yB && clearTimeout(yB), yB = setTimeout((() => {
            yB = null, zB()
          }), QB))
        },
        zB = async () => {
          if (!jB) try {
            if (!await qB(BB, "readwrite")) return;
            const GB = await AB(BB);
            jB || OB(GB)
          } catch (GB) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", GB)
          }
        };
      zB();
      const lB = window.FileSystemObserver;
      if (lB) try {
        MB = new lB((() => {
          PB()
        })), MB.observe(BB, {
          recursive: !0
        })
      } catch (pB) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", pB), MB = null
      }
      return MB || (JB = setInterval((() => {
        PB()
      }), oB)), () => {
        jB = !0, yB && clearTimeout(yB), JB && clearInterval(JB), MB && MB.disconnect()
      }
    }
  },
  37180: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => kB,
      f: () => nB,
      j: () => UB,
      n: () => VB,
      o: () => SB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(3528),
      jB = GB(331),
      yB = GB(2653),
      JB = GB(25),
      MB = GB(2050),
      PB = GB(31),
      zB = GB(2063),
      lB = GB(16),
      pB = GB(2076),
      qB = GB(1434),
      ZB = GB(9485),
      NB = GB(2111),
      RB = GB(1175),
      WB = GB(1282);
    const AB = 7e3;

    function VB() {
      const {
        loadingOverlayVisible: BB,
        openInGameMenuName: OB,
        openEverythingMenuName: GB
      } = (0, lB.o)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return BB || null !== OB || null !== GB
    }

    function SB(BB, OB, GB) {
      const DB = (0, YB.useRef)(GB);
      DB.current = GB;
      const QB = (0, YB.useRef)({
        card: BB,
        ms: 0
      });
      (0, YB.useEffect)((() => {
        if (OB || null === BB) return;
        QB.current.card !== BB && (QB.current = {
          card: BB,
          ms: 0
        });
        const GB = QB.current,
          YB = performance.now(),
          oB = setTimeout((() => {
            DB.current()
          }), AB - GB.ms);
        return () => {
          clearTimeout(oB), GB.ms += performance.now() - YB
        }
      }), [OB, BB])
    }
    const nB = (0, YB.memo)((function() {
      const {
        isTouchScreen: BB
      } = (0, lB.o)(["isTouchScreen"]), OB = (0, qB.s)();
      (0, oB.e)();
      const GB = (0, yB.g)("showBasicMovementControls"),
        [DB, MB] = (0, YB.useState)("movement"),
        zB = "movement" === DB,
        pB = OB && !1 !== GB;
      (0, YB.useEffect)((() => {
        "padActions" !== DB || pB || MB("done")
      }), [DB, pB]);
      const ZB = VB();
      SB("done" === DB ? null : DB, ZB, (() => {
        MB("movement" === DB && (0, qB.j)() ? "padActions" : "done")
      }));
      const NB = PB.g.getItem(jB.Mb) > 2,
        RB = !NB && (!BB || OB) && zB && !1 !== GB;
      return (0, YB.useEffect)((() => {
        RB && !ZB && JB.o.tM("controlsTutorialShown", "movement")
      }), [RB, ZB]), NB ? (0, WB.jsx)(dB, {
        showingMovementControls: !1
      }) : (0, WB.jsxs)(WB.Fragment, {
        children: [RB ? (0, WB.jsxs)("div", {
          className: QB()("ControlsTutorialDiv", {
            Covered: ZB
          }),
          children: [(0, WB.jsx)(UB, {}), (0, WB.jsx)(kB, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, WB.jsx)(kB, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, "padActions" === DB && pB && (0, WB.jsx)(fB, {
          covered: ZB
        }), (0, WB.jsx)(dB, {
          showingMovementControls: "done" !== DB
        })]
      })
    }));

    function UB() {
      const BB = (0, qB.s)();
      return (0, WB.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, WB.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), BB && (0, WB.jsx)(pB.c, {
          noaAction: "forward"
        }), !BB && (0, WB.jsxs)(WB.Fragment, {
          children: [(0, WB.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, WB.jsx)(pB.c, {
              noaAction: "forward"
            })
          }), (0, WB.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, WB.jsx)(pB.c, {
              noaAction: "left"
            }), (0, WB.jsx)(pB.c, {
              noaAction: "backward"
            }), (0, WB.jsx)(pB.c, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function fB(BB) {
      let {
        covered: OB
      } = BB;
      const {
        t: GB
      } = (0, RB.H)(), YB = (0, yB.g)("useInventory");
      return (0, WB.jsxs)("div", {
        className: QB()("ControlsTutorialDiv", {
          Covered: OB
        }),
        children: [(0, WB.jsx)(kB, {
          header: GB("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, WB.jsx)(kB, {
          header: GB("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== YB && (0, WB.jsx)(kB, {
          header: GB("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, WB.jsx)(kB, {
          header: GB("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function kB(BB) {
      let {
        header: OB,
        noaAction: GB
      } = BB;
      return (0, WB.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, WB.jsx)("div", {
          className: "KeyHeader",
          children: OB
        }), (0, WB.jsx)(pB.c, {
          noaAction: GB
        })]
      })
    }

    function dB(BB) {
      let {
        showingMovementControls: OB
      } = BB;
      const {
        isTouchScreen: GB
      } = (0, lB.o)(["isTouchScreen"]), DB = (0, qB.s)(), QB = (0, NB.b)("OpenShop"), [oB, jB] = (0, YB.useState)(!1), pB = `SeenShopControls|${(0,zB.f)("connectedGame",(BB=>BB.gameNameWithVariation))}`, RB = () => (!(0, qB.j)() || null !== (0, ZB.c)("OpenShop")) && !PB.g.getItem(pB) && MB.e.get("shopInfo") && !OB, AB = () => (jB(!0), PB.g.setItem(pB, !0), (0, qB.j)() || JB.o.tM("showShopTouchTutorial"), setTimeout((() => {
        jB(!1)
      }), 7e3));
      (0, YB.useEffect)((() => {
        let BB;
        const OB = JB.o.subscribe("showShopTutorial", (() => {
          RB() && (BB = AB())
        }));
        return () => {
          clearTimeout(BB), JB.o.unsubscribe(OB)
        }
      }), [OB]);
      const VB = (0, YB.useRef)();
      return (0, yB.f)("currencyAmounts", (BB => {
        if (RB()) {
          let GB = !1;
          const YB = MB.e.get("shopInfo");
          for (const DB in YB) {
            for (const QB in YB[DB].items) {
              var OB;
              const oB = YB[DB].items[QB];
              if (void 0 !== oB.currency && BB[oB.currency] && oB.cost <= BB[oB.currency].amount && (null === (OB = oB.hidden) || void 0 === OB || !OB)) {
                GB = !0;
                break
              }
            }
            if (GB) break
          }
          GB && (VB.current = AB())
        }
      })), (0, YB.useEffect)((() => () => {
        clearTimeout(VB.current)
      }), [OB]), !oB || DB && !QB ? null : (0, WB.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: GB && !DB ? null : (0, WB.jsx)(kB, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  5326: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => ZB,
      i: () => NB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(56),
      oB = GB(1175),
      jB = GB(5335),
      yB = GB(2e3),
      JB = GB(2653),
      MB = GB(5337),
      PB = GB(1282);
    const zB = new WeakMap;
    let lB = 0;

    function pB(BB) {
      let OB = zB.get(BB);
      return void 0 === OB && (OB = lB++, zB.set(BB, OB)), OB
    }

    function qB(BB) {
      let {
        piece: OB
      } = BB;
      return "space" === OB.kind ? (0, PB.jsx)(PB.Fragment, {
        children: OB.text
      }) : (0, PB.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${OB.delayMs}ms`
        },
        children: (0, PB.jsx)(jB.c, {
          text: "icon" === OB.kind ? `[[${OB.icon}]]` : OB.text
        })
      })
    }

    function ZB(BB) {
      let {
        display: OB
      } = BB;
      const {
        selectedLanguage: GB
      } = (0, oB.H)(), YB = (0, QB.useMemo)((() => (0, MB.b)((0, MB.c)(OB).plan.pieces)), [OB, GB.code]);
      return (0, PB.jsxs)("div", {
        className: DB()("Dialogue", {
          DialogueAnimateIn: !1 !== OB.animateIn
        }),
        children: [OB.speakerName && (0, PB.jsx)(yB.b, {
          text: OB.speakerName,
          className: "DialogueSpeaker"
        }), (0, PB.jsx)("p", {
          className: "DialogueLine",
          children: YB.map(((BB, OB) => 1 === BB.length && "space" === BB[0].kind ? BB[0].text : (0, PB.jsx)("span", {
            className: "DialogueGlue",
            children: BB.map(((BB, OB) => (0, PB.jsx)(qB, {
              piece: BB
            }, OB)))
          }, OB)))
        })]
      })
    }
    const NB = (0, QB.memo)((function() {
      const BB = (0, JB.g)("dialogue");
      return (0, PB.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: BB && (0, PB.jsx)(ZB, {
          display: BB
        }, pB(BB))
      })
    }))
  },
  37353: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => qB,
      e: () => ZB
    });
    var YB = GB(56),
      DB = GB(1480),
      QB = GB(2063),
      oB = GB(37292),
      jB = GB(641),
      yB = GB(1090),
      JB = GB.n(yB),
      MB = GB(1282);
    const PB = [zB()];

    function zB() {
      return {
        source: null,
        direction: null,
        aE: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function lB(BB) {
      return PB.find((OB => null !== OB.source && OB.source === BB))
    }

    function pB(BB) {
      clearTimeout(BB.timeout), BB.source = null, BB.direction = null, BB.writtenAngle = null, BB.aE && (BB.aE.style.rotate = "")
    }
    const qB = (0, YB.memo)((function() {
      const [, BB] = (0, YB.useReducer)((BB => BB + 1), 0);
      return (0, DB.f)("damagedByOtherPlayer", (OB => {
        let {
          kY: GB,
          direction: YB
        } = OB;
        const DB = GB || "nonDirectional",
          QB = function(BB) {
            var OB;
            const GB = null !== (OB = lB(BB)) && void 0 !== OB ? OB : PB.find((BB => null === BB.source));
            if (GB) return GB;
            const YB = {
              source: null,
              direction: null,
              aE: null,
              timeout: void 0,
              writtenAngle: null
            };
            return PB.push(YB), YB
          }(DB);
        clearTimeout(QB.timeout), QB.source = DB, QB.direction = YB, QB.timeout = setTimeout((() => {
          pB(QB), BB()
        }), 800), BB()
      })), (0, QB.b)("kill", (OB => {
        let {
          killer: GB,
          victim: YB
        } = OB;
        const DB = GB.local && lB(YB.id);
        DB && (pB(DB), BB())
      })), (0, YB.useEffect)((() => {
        const BB = (0, oB.g)("turnDamageIndicators", ZB);
        return () => {
          BB(), PB.forEach(pB)
        }
      }), []), (0, MB.jsx)("div", {
        className: "DirectionalDamage",
        children: PB.map(((BB, OB) => (0, MB.jsx)("div", {
          ref: OB => {
            BB.aE = OB
          },
          className: JB()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, jB.Q)(BB.direction),
            DamageIndicatorIdle: null === BB.source
          })
        }, OB)))
      })
    }));

    function ZB(BB) {
      for (const OB of PB) {
        if (null === OB.source || (0, jB.Q)(OB.direction)) continue;
        const GB = OB.direction - BB;
        GB !== OB.writtenAngle && (OB.writtenAngle = GB, OB.aE.style.rotate = `${GB}rad`)
      }
    }
  },
  9457: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => IB,
      f: () => dB,
      h: () => KB
    });
    var YB = GB(56),
      DB = GB(4956),
      QB = GB(1112),
      oB = GB(1480),
      jB = GB(25),
      yB = GB(3848),
      JB = GB(2397),
      MB = GB(1238),
      PB = GB(2787),
      zB = GB(2023),
      lB = GB(2063),
      pB = GB(1175),
      qB = GB(16),
      ZB = GB(1699),
      NB = GB(1090),
      RB = GB.n(NB),
      WB = GB(9460),
      AB = GB(9469),
      VB = GB(9472),
      SB = GB(9384),
      nB = GB(9478),
      UB = GB(3516),
      fB = (GB(9482), GB(1282));
    let kB = null;

    function dB() {
      return null !== kB
    }

    function KB() {
      return "pad" === kB
    }

    function uB() {
      return "inGame" === qB.c.get("gameState") && !(0, ZB.r)()
    }

    function mB(BB) {
      return (0, AB.r)(BB, MB.j, AB.f, AB.g, AB.i)
    }
    const IB = (0, YB.memo)((function() {
      const {
        t: BB
      } = (0, pB.H)(), {
        userContext: OB
      } = (0, QB.d)(), [GB, qB] = (0, YB.useState)(null), [NB, dB] = (0, YB.useState)(null), KB = (0, YB.useRef)(null), IB = (0, YB.useCallback)((BB => {
        KB.current = BB, dB(BB)
      }), []), FB = (0, YB.useRef)(0), iB = (0, YB.useRef)(null), LB = (0, YB.useRef)({
        x: 0,
        y: 0
      }), [gB, rB] = (0, YB.useState)(0), XB = (0, YB.useMemo)((() => function(BB) {
        const OB = [];
        for (let YB = 0; YB < MB.j; YB++) {
          var GB;
          OB.push(null !== (GB = BB[YB]) && void 0 !== GB ? GB : null)
        }
        return OB
      }((0, PB.g)(OB.getPlayerCosmetics().emote))), [OB, gB]);
      (0, lB.b)("cosmeticsUpdated", (BB => {
        BB.some((BB => BB.local && "emote" === BB.UB)) && rB((BB => BB + 1))
      }));
      const wB = (0, YB.useRef)(!1),
        EB = (0, YB.useCallback)((function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === BB && (0, VB.h)(), wB.current = OB, LB.current = {
            x: 0,
            y: 0
          }, IB(null), qB(BB)
        }), [IB]),
        cB = (0, YB.useCallback)((() => {
          qB(null), IB(null), LB.current = {
            x: 0,
            y: 0
          }
        }), [IB]),
        hB = (0, YB.useCallback)((BB => {
          if (Date.now() < FB.current) return;
          const OB = (0, JB.k)(BB),
            GB = !!OB.holdUntilMove,
            YB = GB ? 600 : Math.ceil(1e3 * OB.animation.animation_length / JB.e) + 200;
          FB.current = Date.now() + YB, iB.current = BB, zB.gameBridge.send("playEmote", BB), zB.gameBridge.send("applyTemporaryThirdPerson", GB ? {} : {
            durationMs: YB
          })
        }), []);
      (0, oB.f)("requestToggleEmoteWheel", (() => {
        null === GB ? uB() && EB("click") : cB()
      })), (0, oB.f)("requestEmoteWheelHoldOpen", (() => {
        null === GB && uB() && EB((0, WB.b)() ? "hold" : "click")
      })), (0, oB.f)("requestEmoteWheelPadOpen", (BB => {
        null !== GB || !uB() || (0, SB.e)() || (0, nB.q)() || EB("pad", BB)
      })), (0, oB.f)("requestEmoteRepeatLast", (() => {
        if (null !== GB || !uB() || (0, SB.e)() || (0, nB.q)()) return;
        const BB = iB.current;
        null !== BB && XB.includes(BB) ? hB(BB) : EB("pad", !0)
      }));
      const aB = () => {
        const BB = KB.current,
          OB = null !== BB ? XB[BB] : null;
        null !== OB && "pad" === GB && Date.now() < FB.current || (cB(), null !== OB && hB(OB))
      };
      (0, oB.f)("emoteWheelPadAim", (BB => {
        if ("pad" !== GB) return;
        const OB = (0, AB.C)(BB, MB.j, KB.current);
        IB(null !== OB && null !== XB[OB] ? OB : null)
      })), (0, oB.f)("requestEmoteWheelPadCommit", (BB => {
        "pad" !== GB || BB && wB.current || aB()
      })), (0, oB.f)("appManagerUpdated|activeInputDevice", (BB => {
        null !== GB && "pad" === GB !== ("gamepad" === BB) && cB()
      })), (0, YB.useLayoutEffect)((() => (kB = GB, (0, yB.q)("emoteWheel", "pad" === GB), jB.o.tM(yB.l), () => {
        kB = null, (0, yB.q)("emoteWheel", !1), jB.o.tM(yB.l)
      })), [GB]), (0, oB.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === GB && aB()
      })), (0, oB.f)("requestEmoteWheelClose", (() => {
        null !== GB && cB()
      })), (0, oB.f)("appManagerUpdated|gameState", (BB => {
        "inGame" !== BB && cB()
      }));
      const eB = () => {
        (0, ZB.r)() && cB()
      };
      if ((0, oB.f)("appManagerUpdated|openEverythingMenuName", eB), (0, oB.f)("appManagerUpdated|openInGameMenuName", eB), (0, oB.f)("pointerLockUpdate", (BB => {
          BB || "hold" !== GB || cB()
        })), (0, YB.useEffect)((() => {
          if (null === GB) return;
          const BB = BB => {
            "Escape" === BB.key && (BB.stopImmediatePropagation(), BB.preventDefault(), cB())
          };
          return document.addEventListener("keydown", BB, !0), () => {
            document.removeEventListener("keydown", BB, !0)
          }
        }), [GB, cB]), (0, DB.e)(!0, "click" === GB, "EmoteWheelOverlay"), (0, YB.useEffect)((() => {
          if ("hold" === GB) return zB.gameBridge.send("holdEmoteWheel", !0), () => {
            zB.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [GB]), (0, YB.useEffect)((() => {
          if ("hold" !== GB) return;
          const BB = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            OB = AB.o * BB,
            YB = AB.l * BB,
            DB = BB => {
              let GB = LB.current.x + BB.movementX,
                DB = LB.current.y + BB.movementY;
              const QB = Math.hypot(GB, DB);
              if (QB > OB) {
                const BB = OB / QB;
                GB *= BB, DB *= BB
              }
              LB.current = {
                x: GB,
                y: DB
              }, IB(function(BB, OB, GB, YB) {
                if (Math.hypot(BB, OB) < GB) return null;
                const DB = (0, AB.u)(BB, OB, MB.j);
                return null === YB[DB] ? null : DB
              }(GB, DB, YB, XB))
            };
          return document.addEventListener("mousemove", DB), () => {
            document.removeEventListener("mousemove", DB)
          }
        }), [GB, XB, IB]), null === GB) return null;
      const TB = "hold" === GB || "pad" === GB,
        bB = null !== NB ? XB[NB] : null,
        CB = null !== bB ? (0, JB.k)(bB).displayName : BB("emotes:pickEmote");
      return (0, fB.jsx)("div", {
        className: RB()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === GB
        }),
        onMouseDown: BB => {
          BB.target === BB.currentTarget && cB()
        },
        children: (0, fB.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * AB.o + "rem",
            height: 2 * AB.o + "rem"
          },
          children: [(0, fB.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${AB.j} ${AB.j}`,
            children: [XB.map(((OB, GB) => {
              const YB = null !== OB,
                DB = TB && GB === NB;
              return (0, fB.jsx)("path", {
                d: mB(GB),
                className: RB()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: DB,
                  EmoteWheelWedgeDisabled: !YB
                }),
                onClick: BB => {
                  BB.stopPropagation(), null !== OB && (BB => {
                    cB(), hB(BB)
                  })(OB)
                },
                "aria-label": null !== OB ? (0, JB.k)(OB).displayName : BB("emotes:emptySlot")
              }, GB)
            })), (0, fB.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: AB.f,
              cy: AB.f,
              r: AB.i
            }), (0, fB.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: AB.f,
              cy: AB.f,
              r: AB.g
            }), TB && null !== NB && (0, fB.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: mB(NB)
            })]
          }), XB.map(((BB, OB) => {
            const GB = null !== BB,
              YB = TB && OB === NB,
              DB = (0, AB.x)(OB, MB.j),
              QB = AB.d * Math.cos(DB),
              oB = AB.d * Math.sin(DB);
            return (0, fB.jsx)("div", {
              className: RB()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: YB,
                EmoteWheelSlotIconDisabled: !GB
              }),
              style: {
                left: `calc(50% + ${QB}rem)`,
                top: `calc(50% + ${oB}rem)`,
                backgroundImage: GB ? `url(${(0,UB.f)("emote",BB)})` : void 0
              },
              "aria-hidden": !0
            }, OB)
          })), (0, fB.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: CB
          })]
        })
      })
    }))
  },
  37220: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => ZB
    });
    var YB = GB(56),
      DB = GB(70),
      QB = GB(1175),
      oB = GB(1090),
      jB = GB.n(oB),
      yB = GB(1822),
      JB = GB(1383),
      MB = GB(1268),
      PB = GB(1516),
      zB = GB(1730),
      lB = GB(1510),
      pB = GB(1282);
    const qB = 14;

    function ZB(BB) {
      let {
        className: OB,
        triggerElementRef: GB,
        options: oB
      } = BB;
      const {
        t: ZB
      } = (0, QB.H)(), [NB, RB] = (0, YB.useState)(!1), [WB, AB] = (0, YB.useState)({
        x: 0,
        y: 0
      }), VB = (0, YB.useRef)(null);
      (0, YB.useEffect)((() => {
        let BB = null;
        const OB = OB => {
            BB = {
              x: OB.clientX,
              y: OB.clientY
            }
          },
          YB = OB => {
            if (null === BB || !(0, lB.d)(BB, OB)) return;
            BB = null;
            const GB = qB * (0, yB.getRemInPx)();
            AB({
              x: Math.min(OB.clientX, window.innerWidth - GB - 5),
              y: OB.clientY
            }), RB((BB => !BB))
          },
          DB = BB => {
            var OB;
            null !== (OB = VB.current) && void 0 !== OB && OB.contains(BB.relatedTarget) || RB(!1)
          },
          QB = GB.current;
        return QB.addEventListener("pointerdown", OB), QB.addEventListener("pointerup", YB), QB.addEventListener("mouseleave", DB), () => {
          QB.removeEventListener("pointerdown", OB), QB.removeEventListener("pointerup", YB), QB.removeEventListener("mouseleave", DB)
        }
      }), [GB]), (0, YB.useEffect)((() => {
        if (NB) return (0, zB.c)("pointerdown", (BB => {
          !VB.current || VB.current.contains(BB.target) || GB.current.contains(BB.target) || RB(!1)
        }))
      }), [NB, GB]), (0, YB.useLayoutEffect)((() => {
        if (!NB || !VB.current) return;
        const BB = VB.current.getBoundingClientRect().height,
          OB = Math.max(5, window.innerHeight - BB - 5);
        WB.y > OB && AB({
          x: WB.x,
          y: OB
        })
      }), [NB, WB]), (0, MB.v)("popup", VB, (() => {
        RB(!1)
      }), NB);
      const SB = oB.filter((BB => !1 !== BB.show));
      return NB && 0 !== SB.length ? (0, DB.createPortal)((0, pB.jsx)("div", {
        ref: VB,
        className: jB()("FloatingActions", {
          [OB]: OB
        }),
        style: {
          width: `${qB}rem`,
          top: WB.y,
          left: WB.x
        },
        children: SB.map((BB => {
          let {
            icon: OB,
            text: GB,
            onPointerDown: YB,
            analyticsClick: DB
          } = BB;
          return (0, pB.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: BB => {
              void 0 !== DB && (0, PB.reportAnalyticsClick)(DB), YB(BB), RB(!1), BB.stopPropagation()
            },
            children: [(0, pB.jsx)(JB.b, {
              name: OB
            }), (0, pB.jsx)("div", {
              children: ZB(GB)
            })]
          }, GB)
        }))
      }), function() {
        var BB;
        return null !== (BB = document.querySelector(".WholeAppWrapperInner")) && void 0 !== BB ? BB : document.body
      }()) : null
    }
  },
  37374: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => No
    });
    var YB = GB(37263),
      DB = GB(56),
      QB = GB(2167),
      oB = GB(4946),
      jB = GB(4949),
      yB = GB(2653),
      JB = GB(2023),
      MB = GB(1282);

    function PB(BB) {
      let {
        className: OB,
        style: GB,
        vw: YB,
        maxPx: DB,
        children: QB
      } = BB;
      console.assert("number" === typeof YB && "number" === typeof DB, "vw and maxPx passed to Text must be numbers");
      const oB = window.innerWidth * (YB / 100) > DB ? `${DB}px` : `${YB}vw`;
      return (0, MB.jsx)("div", {
        className: OB,
        style: {
          ...GB,
          fontSize: oB
        },
        children: QB
      })
    }
    var zB = GB(37378),
      lB = GB(1485),
      pB = GB(25),
      qB = GB(2050),
      ZB = GB(1383);

    function NB(BB) {
      let {
        tasks: OB,
        lastDisplayedTasks: GB
      } = BB;
      return (0, MB.jsx)(MB.Fragment, {
        children: Object.keys(OB).map((BB => (0, MB.jsx)(RB, {
          task: OB[BB],
          lastDisplayedAs: GB[BB]
        }, OB[BB].text)))
      })
    }

    function RB(BB) {
      let {
        task: OB,
        lastDisplayedAs: GB
      } = BB;
      const [YB, QB] = (0, DB.useState)(null !== GB && void 0 !== GB && GB.progress ? GB.progress / OB.goal : 0), [oB, jB] = (0, DB.useState)(!1), [yB, JB] = (0, DB.useState)(OB.claimed || !1);
      return (0, DB.useEffect)((() => {
        QB(OB.progress / OB.goal)
      }), [OB.progress, OB.goal]), yB ? null : (0, MB.jsxs)("div", {
        className: "Task",
        children: [(0, MB.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, MB.jsx)(PB, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: OB.text
          })
        }), OB.progress < OB.goal ? (0, MB.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== YB ? (0, MB.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * YB + "%"
            }
          }) : null, (0, MB.jsx)("div", {
            className: "TaskProgressText",
            children: `${OB.progress}/${OB.goal}`
          })]
        }) : (0, MB.jsx)(lB.q, {
          className: "ClaimRewardButton",
          onClick: () => {
            jB(!0)
          },
          children: (0, MB.jsx)(PB, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), oB ? (0, MB.jsx)(WB, {
          task: OB,
          close: () => {
            OB.claimed = !0, JB(!0), jB(!1)
          }
        }) : null]
      })
    }

    function WB(BB) {
      let {
        task: OB,
        close: GB
      } = BB;
      const [YB, QB] = (0, DB.useState)({}), [oB, jB] = (0, DB.useState)("closed");
      (0, DB.useEffect)((() => {
        let BB;
        return "animStart" === oB && (BB = setTimeout((() => {
          jB("animEnd")
        }), 700)), () => {
          clearTimeout(BB)
        }
      }), [oB]), (0, zB.c)((() => {
        JB.gameBridge.send("completeTask", OB.text)
      }));
      const PB = (0, yB.g)("currencyAmounts");
      return (0, MB.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === oB)
            if (0 === OB.rewards.length) GB(), JB.gameBridge.send("completeTask", OB.text);
            else {
              const BB = {
                ...qB.e.get("currencyAmounts")
              };
              for (const OB in YB) BB[OB] = {
                ...BB[OB],
                amount: BB[OB].amount + YB[OB]
              };
              qB.e.apply({
                currencyAmounts: BB
              }), jB("closed")
            }
          else "closed" === oB && (QB(OB.rewards.pop()), jB("animStart"))
        },
        children: [(0, MB.jsx)("img", {
          className: "Chest",
          alt: "closed" !== oB ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==oB?"open":"closed"}.png`
        }), (0, MB.jsx)("div", {
          className: "Rewards",
          children: "closed" !== oB ? Object.keys(YB).map((BB => {
            const OB = null === PB || void 0 === PB ? void 0 : PB[BB];
            return !OB || OB.hidden ? null : (0, MB.jsxs)("div", {
              className: "Reward",
              children: [(0, MB.jsx)(ZB.b, {
                name: OB.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: OB.iconColour
                }
              }), (0, MB.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === oB ? 0 : YB[BB]
              })]
            }, BB)
          })) : null
        }), "animStart" === oB ? (0, MB.jsx)(AB, {}) : null, (0, MB.jsx)("div", {
          className: "ChestsLeft",
          children: OB.rewards.length
        })]
      })
    }

    function AB() {
      const [BB, OB] = (0, DB.useState)(0);
      (0, DB.useEffect)((() => {
        OB(1)
      }), []);
      return (0, MB.jsx)(MB.Fragment, {
        children: Array.from({
          length: 40
        }).map(((OB, GB) => (0, MB.jsx)(ZB.b, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * BB * Math.cos(GB / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * BB * Math.sin(GB / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === BB ? 1 : 0
          }
        }, GB)))
      })
    }
    pB.o.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const BB = new Image,
          OB = new Image;
        BB.src = "/textures/miscImages/Treasure Chest open.png", OB.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var VB = GB(3544),
      SB = GB(1112),
      nB = GB(2e3),
      UB = GB(1480),
      fB = GB(353),
      kB = GB(2063),
      dB = GB(1375);

    function KB(BB) {
      var OB, GB;
      let {
        byId: YB,
        localId: DB
      } = BB;
      return null === DB ? null : null !== (OB = null === (GB = YB[DB]) || void 0 === GB ? void 0 : GB.name) && void 0 !== OB ? OB : null
    }

    function uB(BB) {
      let {
        lbStats: OB,
        storedState: GB = {}
      } = BB;
      const {
        userContext: YB
      } = (0, SB.d)(), QB = (0, kB.f)("players", KB), [oB, jB] = (0, DB.useState)(GB.selectedCat || (null === OB || void 0 === OB ? void 0 : OB[0]) || null), [yB, PB] = (0, DB.useState)(GB.selectedTimeframe || "Today"), [zB, lB] = (0, DB.useState)(null);
      (0, DB.useEffect)((() => {
        null === oB && null !== OB && OB.length > 0 && jB(OB[0])
      }), [OB, oB]);
      const [pB, qB] = (0, DB.useState)(GB.seeingTop || !1), [ZB, NB] = (0, DB.useState)(!1), RB = (0, DB.useCallback)((() => {
        null !== oB && null !== yB && (JB.gameBridge.send("requestLeaderboard", {
          category: oB.value,
          timeframe: yB,
          seeTop: pB
        }), AB(!0), FB && iB(null))
      }), [oB, yB, GB, pB]);
      (0, DB.useEffect)((() => {
        RB(), GB.selectedCat = oB, GB.selectedTimeframe = yB, GB.seeingTop = pB
      }), [oB, yB, GB, pB, RB]), (0, DB.useEffect)((() => {
        if ((null === zB || void 0 === zB ? void 0 : zB.length) > 0)
          if (pB) pB && NB(null === uB(zB));
          else {
            for (const BB of zB)
              if (1 === BB.place) return void NB(!1);
            NB(!0)
          }
      }), [zB, pB]), (0, UB.f)("leaderboardResponse", (BB => {
        let {
          category: GB,
          timeframe: YB,
          data: DB
        } = BB;
        for (let QB = 0; QB < OB; QB++)
          if (OB[QB].value === GB) {
            jB(OB[QB]);
            break
          } PB(YB), lB(DB), AB(!1)
      }));
      const [WB, AB] = (0, DB.useState)(!0);

      function uB(BB) {
        const OB = KB(JB.gameBridge.latest("players"));
        for (let GB = 0; GB < BB.length; GB++)
          if (BB[GB].name === OB) return BB[GB].place;
        return null
      }
      const [mB, IB] = (0, DB.useState)(!1), [FB, iB] = (0, DB.useState)(null);
      (0, DB.useEffect)((() => {
        if (zB && !mB) {
          const BB = uB(zB);
          BB < (GB.lastSeenPlayerPlace || 0) && iB(GB.lastSeenPlayerPlace - BB), IB(!0)
        }
      }), [zB, GB, mB]), (0, DB.useEffect)((() => () => {
        zB && (GB.lastSeenPlayerPlace = uB(zB))
      }), [zB, GB]);
      const LB = (0, DB.useRef)(null),
        [gB, rB] = (0, DB.useState)(void 0);
      return (0, DB.useEffect)((() => {
        var BB, OB;
        gB !== (null === (BB = LB.current) || void 0 === BB ? void 0 : BB.offsetHeight) && rB(null === (OB = LB.current) || void 0 === OB ? void 0 : OB.offsetHeight)
      })), YB.isLoggedIn() ? (0, MB.jsxs)(MB.Fragment, {
        children: [(0, MB.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, MB.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, MB.jsx)(VB.c, {
              options: OB.map((BB => ({
                label: BB.label,
                value: BB.value
              }))),
              value: oB,
              onChange: BB => {
                jB(BB)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, MB.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, MB.jsx)(VB.c, {
              options: fB.cd.map((BB => ({
                value: BB,
                label: BB,
                className: "LBDropdownMenuItem"
              }))),
              value: yB,
              onChange: BB => {
                PB(BB.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), ZB ? (0, MB.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              qB(!pB)
            },
            children: pB ? "See Yourself" : "See Top"
          }) : null]
        }), (0, MB.jsx)("div", {
          className: "LBTableWrapper",
          children: WB ? (0, MB.jsx)("div", {
            className: "LoaderContainer",
            children: (0, MB.jsx)(dB.b, {})
          }) : null === FB ? (0, MB.jsx)(MB.Fragment, {
            children: (0, MB.jsxs)("table", {
              className: "LBTable",
              children: [(0, MB.jsx)("thead", {
                className: "LBTableTHead",
                ref: LB,
                children: (0, MB.jsxs)("tr", {
                  children: [(0, MB.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, MB.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, MB.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: oB.label.toUpperCase()
                  })]
                })
              }), (0, MB.jsx)("tbody", {
                children: zB.map((BB => (0, MB.jsxs)("tr", {
                  className: "LBTableTR " + (BB.name === QB ? "LBTableTRYou" : ""),
                  children: [(0, MB.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${BB.place}`
                  }), (0, MB.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, MB.jsx)(nB.b, {
                      text: [{
                        entityName: BB.name
                      }]
                    })
                  }), (0, MB.jsx)("td", {
                    className: "LBTableTD",
                    children: BB.stat
                  })]
                }, BB.name)))
              })]
            })
          }) : (0, MB.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              iB(null)
            },
            children: (0, MB.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, MB.jsx)("div", {
                className: "TriangleUp"
              }), (0, MB.jsx)("div", {
                className: "LBIncreaseText",
                children: `${FB} Place${FB>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, MB.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, MB.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, MB.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var mB = GB(3528),
      IB = GB(92),
      FB = GB(31),
      iB = GB(3843);
    const LB = (0, DB.memo)((function(BB) {
      let {
        show: OB,
        onClose: GB
      } = BB;
      (0, mB.e)();
      const YB = (0, yB.g)("_tasks"),
        QB = (0, yB.g)("_availableLeaderboards"),
        [JB, PB] = (0, DB.useState)({});
      YB && Object.keys(YB).length > 0 && 0 === Object.keys(JB).length && PB(YB);
      const [zB] = (0, DB.useState)({
        tasks: {},
        leaderboard: {}
      }), lB = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!YB && Object.keys(YB).length > 0,
          content: (0, MB.jsx)(NB, {
            tasks: YB,
            lastDisplayedTasks: JB
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === QB || void 0 === QB ? void 0 : QB.length) > 0,
          content: (0, MB.jsx)(uB, {
            lbStats: QB,
            storedState: zB.leaderboard
          })
        }
      };

      function pB() {
        for (const BB in lB)
          if (lB[BB].getIsDefined()) return BB;
        return null
      }
      const [qB, ZB] = (0, DB.useState)(pB());

      function RB() {
        PB({
          ...YB
        }), GB()
      }(0, DB.useEffect)((() => {
        qB || ZB(pB())
      }), [pB()]), (0, jB.c)(!0, qB && OB), (0, DB.useEffect)((() => {
        OB && !qB && (console.log("CLOSE"), RB())
      }), [OB, qB]);
      const [WB, AB] = (0, DB.useState)(!1);
      return (0, DB.useEffect)((() => {
        OB && qB && !WB && AB(!0)
      }), [OB, WB, qB]), (0, DB.useEffect)((() => {
        !WB && YB && "tasks" !== qB && ZB("tasks")
      }), [WB, YB, qB]), (0, MB.jsx)(MB.Fragment, {
        children: qB ? (0, MB.jsx)(iB.b, {
          className: "RetentionFeaturesWrapper",
          show: OB,
          children: (0, MB.jsxs)(oB.d, {
            close: RB,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, MB.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, MB.jsx)(rB, {}), (0, MB.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, MB.jsx)(gB, {
                  setCategory: ZB,
                  menuCategories: lB,
                  selectedCat: qB
                }), (0, MB.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: lB[qB].content
                })]
              })]
            }), (0, MB.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: IB.featureFlags.useDiscord && (0, MB.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, MB.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, MB.jsx)(XB, {
                    tasks: YB
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function gB(BB) {
      let {
        selectedCat: OB,
        setCategory: GB,
        menuCategories: YB
      } = BB;
      return (0, MB.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(YB).map((BB => YB[BB].getIsDefined() ? (0, MB.jsx)("div", {
          className: "MenuHeaderCategory " + (BB === OB ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            GB(BB)
          },
          children: YB[BB].Title
        }, BB) : null))
      })
    }

    function rB() {
      const BB = (0, yB.g)("currencyAmounts");
      return (0, MB.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== BB && void 0 !== BB ? BB : {}).map((OB => {
          const GB = BB[OB];
          return GB.hidden ? null : (0, MB.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, MB.jsx)(ZB.b, {
              name: GB.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: GB.iconColour
              }
            }), (0, MB.jsx)("div", {
              className: "UiCurrencyAmount",
              children: GB.amount
            })]
          }, OB)
        }))
      })
    }

    function XB(BB) {
      let {
        tasks: OB
      } = BB;
      return (0, MB.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, MB.jsx)(ZB.b, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            FB.g.setItem("DiscordPressed", !0), JB.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in OB && pB.o.tM("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, MB.jsx)(QB.c, {})]
      })
    }
    var wB = GB(16),
      EB = GB(1699),
      cB = GB(37204),
      hB = GB(34693),
      aB = GB(5047),
      eB = GB(162),
      TB = GB(1204),
      bB = GB(1405),
      CB = GB(2932),
      HB = GB(1175),
      vB = GB(1705),
      sB = GB(2604),
      xB = GB(2560),
      tB = GB(1964),
      BO = GB(2139),
      OO = GB(1260),
      GO = GB(1516),
      YO = GB(37386),
      DO = GB(37394),
      QO = GB(37398),
      oO = GB(37407),
      jO = GB(37414),
      yO = GB(2991);

    function JO(BB) {
      let {
        playersHere: OB,
        exclude: GB,
        OW: YB
      } = BB;
      const {
        t: QB
      } = (0, HB.H)(), oB = (0, yO.k)(yO.f), [jB, yB] = (0, DB.useState)([]), JB = [], PB = (BB, OB) => {
        const YB = [...GB, ...JB.map((BB => BB.player.name))];
        JB.length < 3 && !(0, DO.l)(YB, BB.name) && JB.push({
          player: BB,
          status: OB
        })
      };
      for (const DB of OB) PB((0, jO.i)(DB.name, DB.cosmetics, DB.ranks), QB("worldSocial:inThisWorld"));
      if ("loaded" === oB.state.status)
        for (const DB of oB.state.recentPlayers) DB.preview.name && !DB.preview.isError && PB({
          ...DB.preview,
          location: {
            status: "offline"
          }
        }, QB("worldSocial:playedWithYou"));
      const zB = BB => {
        yB((OB => [...OB, BB])), YB(BB).finally((() => {
          yB((OB => OB.filter((OB => OB !== BB))))
        }))
      };
      return (0, MB.jsx)(MB.Fragment, {
        children: JB.map(((BB, OB) => {
          let {
            player: GB,
            status: YB
          } = BB;
          return (0, MB.jsx)(jO.e, {
            zIndex: JB.length - OB,
            player: GB,
            status: YB,
            onSendFriendRequest: () => {
              zB(GB.name)
            },
            actions: (0, MB.jsx)(bB.g, {
              tooltipInner: (0, MB.jsx)(MB.Fragment, {
                children: QB("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, MB.jsx)(lB.f, {
                className: "FriendRequestButton",
                disabled: jB.includes(GB.name),
                ariaLabel: `${QB("recentPlayers:addFriend")} ${GB.name}`,
                onClick: () => {
                  zB(GB.name)
                },
                children: (0, MB.jsx)(ZB.b, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${GB.name}`)
        }))
      })
    }
    var MO = GB(37421),
      PO = GB(37426),
      zO = GB(1217),
      lO = GB(1535),
      pO = GB(4735),
      qO = GB(271),
      ZO = GB(5029);
    const NO = ["auto", "auto_existing"];

    function RO(BB) {
      return NO.includes(BB)
    }

    function WO(BB, OB) {
      const GB = (0, zO.vb)(BB);
      return null !== OB && (0, zO.vb)(OB) === GB || (0, ZO.e)().some((BB => (0, zO.vb)(BB.name) === GB))
    }
    const AO = new Set;

    function VO(BB) {
      return `worldSocialSeen:${BB}`
    }

    function SO(BB) {
      return !BB || AO.has(BB) || !0 === FB.g.getItem(VO(BB))
    }

    function nO(BB) {
      BB && !AO.has(BB) && (AO.add(BB), FB.g.setItem(VO(BB), !0))
    }
    var UO = GB(2663),
      fO = GB(2666);

    function kO(BB) {
      let {
        show: OB,
        onClose: GB,
        opener: YB
      } = BB;
      const {
        lobbyName: QB,
        shownLobbyName: jB
      } = (0, kB.g)("connectedGame");
      return (0, DB.useEffect)((() => {
        OB && (0, GO.reportAnalyticsClick)({
          id: "world_social.open",
          value: YB
        })
      }), [OB]), (0, MB.jsx)(oB.d, {
        show: OB && null !== QB,
        close: GB,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== YB,
        children: OB && null !== QB && (0, MB.jsx)(dO, {
          lobbyName: QB,
          worldCode: null !== jB && void 0 !== jB ? jB : QB,
          onClose: GB
        }, QB)
      })
    }

    function dO(BB) {
      var OB;
      let {
        lobbyName: GB,
        worldCode: YB,
        onClose: QB
      } = BB;
      const {
        t: oB
      } = (0, HB.H)(), jB = (0, DB.useRef)(null), {
        settings: yB,
        loading: JB,
        answered: PB,
        change: zB,
        retry: pB
      } = (0, YO.k)(GB), qB = (0, vB.h)(), NB = (0, kB.g)("players"), RB = (0, kB.g)("hiddenPlayerNames"), [WB, AB] = (0, DB.useState)([]), [VB, nB] = (0, DB.useState)([]), [UB, fB] = (0, DB.useState)(!1), KB = (0, UO.b)(), uB = (0, DB.useMemo)((() => {
        var BB, OB;
        const GB = null === NB.localId ? null : null !== (BB = null === (OB = NB.byId[NB.localId]) || void 0 === OB ? void 0 : OB.name) && void 0 !== BB ? BB : null;
        return NB.ids.flatMap((BB => {
          const OB = NB.byId[BB];
          return null !== OB && void 0 !== OB && OB.name && OB.name !== GB ? [{
            name: OB.name,
            cosmetics: OB.cosmetics,
            ranks: OB.ranks
          }] : []
        }))
      }), [NB]), mB = (0, DB.useMemo)((() => (0, DO.j)(qB.friends, GB, uB.map((BB => BB.name)))), [qB.friends, GB, uB]), FB = IB.featureFlags.canSeeRealPlayerNames ? uB.filter((BB => null === (0, OO.d)(BB.name, RB))) : [], iB = null !== yB && void 0 !== yB && yB.canManage ? yB : null, LB = null !== iB, gB = null !== (OB = null === yB || void 0 === yB ? void 0 : yB.visibility) && void 0 !== OB ? OB : null, rB = "whitelist" === (null === iB || void 0 === iB ? void 0 : iB.visibility), XB = "private" === gB || "whitelist" === gB && !LB, {
        userContext: wB
      } = (0, SB.d)();
      (0, DB.useEffect)((() => {
        LB && WO(GB, wB.getPersonalWorldLobbyName()) && nO(wB.whamm)
      }), [LB, GB, wB]);
      const EB = XB ? oB("whitelist" === gB ? "socialBar:inviteWorldManagersOnly" : LB ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        hB = null === EB;
      (0, DB.useEffect)((() => XB ? void 0 : tB.d.quietFriendAdded()), [XB]), (0, DB.useEffect)((() => tB.d.quietFriendRequests()), []);
      const yO = (0, DB.useRef)(!1);
      (0, DB.useEffect)((() => {
        const BB = jB.current,
          OB = !yO.current;
        yO.current = !0;
        const GB = null === document.activeElement || document.activeElement === document.body;
        null !== BB && void 0 !== BB && BB.contains(document.activeElement) || !OB && !GB || (0, cB.f)() || null === BB || void 0 === BB || BB.focus({
          preventScroll: !0
        })
      }), [hB]), (0, DB.useEffect)((() => {
        const BB = BB => {
          "Escape" !== BB.key || null !== document.activeElement && document.activeElement !== document.body || QB()
        };
        return document.addEventListener("keydown", BB), () => {
          document.removeEventListener("keydown", BB)
        }
      }), [QB]);
      const zO = null === yB && !PB,
        lO = (JB || qB.loading) && 0 === qB.friends.length,
        pO = qB.friends.flatMap((BB => BB.name ? [BB.name] : [])),
        qO = WB.filter((BB => !(0, DO.l)(pO, BB))),
        ZO = mB.length + 3,
        NO = qO.length + ZO,
        RO = UB ? qB.requests : qB.requests.slice(0, 1),
        AO = async function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const GB of (0, DO.m)(BB, aB.D)) {
            if (!await zB({
                whitelistAdd: GB
              }, (BB => (0, DO.s)(BB, GB, !0)), {
                quiet: OB
              })) return !1
          }
          return !0
        }, VO = BB => {
          if (rB && iB) return {
            on: (0, DO.l)(iB.whitelist, BB),
            onChange: OB => {
              (0, GO.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: OB ? "on" : "off"
              }), zB(OB ? {
                whitelistAdd: [BB]
              } : {
                whitelistRemove: BB
              }, (GB => (0, DO.s)(GB, [BB], OB)))
            }
          }
        }, SO = async (BB, OB) => {
          (0, GO.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: OB
          });
          const GB = await (0, xB.e)(BB, "world_social");
          return (0, xB.b)(GB, BB, {
            announceSent: !1
          }), "failed" !== GB.kind && ("sent" === GB.kind && AB((OB => (0, DO.l)(OB, BB) ? OB : [...OB, BB])), rB && await AO([BB]), !0)
        };
      return (0, MB.jsxs)("div", {
        ref: jB,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: BB => {
          BB.target === BB.currentTarget && " " === BB.key && BB.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, MB.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, MB.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: oB("worldSocial:title")
          }), (0, MB.jsx)(lB.m, {
            className: "WorldSocialClose",
            onClick: QB
          })]
        }), zO && (0, MB.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, MB.jsx)(dB.b, {})
        }), !zO && (0, MB.jsxs)(MB.Fragment, {
          children: [(0, MB.jsx)(QO.e, {
            worldCode: YB,
            message: EB
          }), null === yB && !JB && (0, MB.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: pB,
            children: oB("worldSocial:loadFailed")
          }), LB && null !== gB && (0, MB.jsx)(oO.d, {
            visibility: gB,
            onPick: BB => {
              (async BB => {
                if (BB === gB) return;
                (0, GO.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: BB
                });
                const OB = [...(0, PO.c)(GB), ...VB],
                  YB = "whitelist" === BB && yB ? (0, DO.h)(mB, OB, yB.whitelist) : [];
                await zB({
                  setVisibility: BB
                }, (OB => ({
                  ...OB,
                  visibility: BB
                }))) && await AO(YB)
              })(BB)
            }
          }), qB.requests.length > 0 && (0, MB.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, MB.jsx)(CB.d, {
              label: (0, MB.jsxs)(MB.Fragment, {
                children: [(0, MB.jsx)(ZB.b, {
                  name: BO.e
                }), " ", oB("socialBar:requests")]
              }),
              meta: (0, MB.jsxs)(MB.Fragment, {
                children: [qB.requests.length, qB.requests.length === TB.q && (0, MB.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: oB("socialBar:limitReached")
                }), !UB && qB.requests.length > 1 && (0, MB.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    fB(!0)
                  },
                  children: oB("worldSocial:moreRequests", {
                    count: qB.requests.length - 1
                  })
                })]
              })
            }), (0, MB.jsx)("div", {
              className: "PlayerRows",
              children: RO.map(((BB, OB) => (0, MB.jsx)(jO.e, {
                zIndex: RO.length - OB,
                player: BB,
                actions: (0, MB.jsxs)(MB.Fragment, {
                  children: [(0, MB.jsx)(bB.g, {
                    tooltipInner: (0, MB.jsx)(MB.Fragment, {
                      children: oB("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, MB.jsx)(lB.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${oB("general:accept")} ${BB.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, xB.c)(BB.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, MB.jsx)(ZB.b, {
                        name: "check"
                      })
                    })
                  }), (0, MB.jsx)(bB.g, {
                    tooltipInner: (0, MB.jsx)(MB.Fragment, {
                      children: oB("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, MB.jsx)(lB.j, {
                      className: "FriendRequestButton",
                      ariaLabel: `${oB("general:decline")} ${BB.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, xB.c)(BB.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, MB.jsx)(ZB.b, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${BB.name}`)))
            })]
          }), (0, MB.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, MB.jsx)(CB.d, {
              label: (0, MB.jsxs)(MB.Fragment, {
                children: [(0, MB.jsx)(ZB.b, {
                  name: BO.b
                }), " ", oB("socialBar:friends")]
              }),
              meta: qB.loaded && !XB ? qB.friends.length : void 0
            }), (0, MB.jsx)(MO.e, {
              label: oB("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: oB("worldSocial:addFriendPlaceholder"),
              onSubmit: async BB => await SO(BB, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), lO && (0, MB.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, MB.jsx)(dB.b, {})
            }), !lO && (0, MB.jsxs)(MB.Fragment, {
              children: [(0, MB.jsxs)("div", {
                className: "PlayerRows",
                children: [qO.map(((BB, OB) => (0, MB.jsx)(jO.e, {
                  zIndex: NO - OB,
                  player: (0, jO.i)(BB, null),
                  status: oB("worldSocial:requestSent"),
                  kP: VO(BB)
                }, `request:${BB}`))), !XB && mB.map(((BB, OB) => (0, MB.jsx)(jO.d, {
                  zIndex: ZO - OB,
                  row: BB,
                  kP: VO(BB.friend.name),
                  canInvite: (0, DO.e)(yB) && "here" !== BB.place,
                  invited: VB.includes(BB.friend.name),
                  onInvite: () => {
                    (async BB => {
                      (0, GO.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const OB = () => {
                        nB((OB => OB.filter((OB => OB !== BB))))
                      };
                      nB((OB => [...OB, BB]));
                      const YB = (0, DO.o)(yB, BB);
                      if ("none" !== YB) {
                        const GB = AO([BB], "quiet" === YB);
                        if ("required" === YB && !await GB) return void OB()
                      }
                      await (0, sB.i)(BB, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, PO.e)(GB, BB), setTimeout(OB, eB.u)) : OB()
                    })(BB.friend.name)
                  }
                }, BB.friend.name))), qB.loaded && 0 === qB.friends.length && (0, MB.jsx)(JO, {
                  playersHere: FB,
                  exclude: WB,
                  OW: BB => SO(BB, "suggestion")
                })]
              }), rB && qB.loaded && 0 === qB.friends.length && 0 === qO.length && (0, MB.jsx)("div", {
                className: "WorldSocialEmpty",
                children: oB("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), KB && (0, MB.jsxs)(lB.Z, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, fO.f)({
              page: "players",
              source: "invite_popup"
            }), QB()
          },
          children: [(0, MB.jsx)(ZB.b, {
            name: "users-gear"
          }), " ", oB("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var KO = GB(2689),
      uO = GB(2659);

    function mO(BB) {
      let {
        show: OB,
        onClose: GB,
        option: YB
      } = BB;
      const QB = (0, kB.f)("connectedGame", (BB => (0, KO.b)(BB) ? BB.lobbyName : null));
      return function(BB) {
        const {
          gameEntrySource: OB,
          loadingOverlayVisible: GB
        } = (0, wB.o)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: YB
        } = (0, SB.d)(), QB = (0, kB.g)("localPlayerAlive"), oB = (0, kB.f)("players", (BB => null !== BB.localId && void 0 !== BB.byId[BB.localId])), jB = (0, uO.l)(), yB = (0, DB.useRef)(null), JB = (0, DB.useRef)(null), MB = "worldCreation" === OB, PB = YB.whamm, zB = YB.getPersonalWorldLobbyName();
        (0, DB.useEffect)((() => {
          var OB;
          null !== BB && (null === (OB = JB.current) || void 0 === OB ? void 0 : OB.lobbyName) !== BB && null !== LO(BB, MB, PB, zB) && (JB.current = (0, YO.g)(BB))
        }), [MB, BB, PB, zB]), (0, DB.useEffect)((() => {
          if (null !== BB && (!GB && QB && oB)) return jB.whenShown((() => {
            var OB;
            const GB = yB.current === BB ? null : LO(BB, MB, PB, zB);
            if (null === GB) return;
            const YB = (null === (OB = JB.current) || void 0 === OB ? void 0 : OB.lobbyName) === BB ? JB.current : (0, YO.g)(BB);
            JB.current = null, yB.current = BB,
              function(BB, OB, GB, YB) {
                const {
                  lobbyName: DB
                } = BB, QB = () => {
                  ! function(BB, OB) {
                    if (!EO()) return void OB(!0);
                    const GB = performance.now() + XO;
                    let YB = 0;
                    const DB = () => {
                      YB = EO() ? 0 : YB + 1, YB >= 2 ? OB(!0) : !wO(BB) || performance.now() > GB ? OB(!1) : setTimeout(DB, rO)
                    };
                    setTimeout(DB, rO)
                  }(DB, (QB => {
                    YB();
                    const oB = "auto_existing" === OB && SO(GB);
                    QB && wO(DB) && !FO(DB) && !oB && (gO(BB) ? iO(DB) : (iO(DB), nO(GB), function(BB) {
                      const OB = qO.b.world_social_popup_v1;
                      return (0, qO.h)("world_social_popup_v1"), (0, GO.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${OB}:${(0,pO.d)()}:${BB}`
                      }), (0, lO.flushClientAnalyticsEvents)(), "auto_open" === OB
                    }(OB) && ((0, YO.c)(BB), pB.o.tM("toggleMenu", `inviteLink|${OB}`), "inviteLink" !== wB.c.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === OB && !gO(BB)) return void QB();
                BB.response.then((BB => {
                  if (!("error" in BB)) return BB.settings.canManage ? void QB() : (iO(DB), void YB());
                  YB()
                }))
              }(YB, GB, PB, (() => {
                yB.current === BB && (yB.current = null)
              }))
          }))
        }), [jB, MB, GB, BB, QB, oB, PB, zB])
      }(QB), (0, DB.useEffect)((() => {
        OB && null !== QB && iO(QB)
      }), [OB, QB]), null !== QB ? (0, MB.jsx)(kO, {
        show: OB,
        onClose: GB,
        opener: RO(YB) ? YB : "icon"
      }) : (0, MB.jsx)(hB.b, {
        show: OB,
        onClose: GB
      })
    }
    const IO = new Set;

    function FO(BB) {
      return IO.has(BB) || !!FB.i.getItem(`worldSocialShown:${BB}`)
    }

    function iO(BB) {
      IO.add(BB), FB.i.setItem(`worldSocialShown:${BB}`, !0)
    }

    function LO(BB, OB, GB, YB) {
      return FO(BB) ? null : function(BB) {
        let {
          justMade: OB,
          playerId: GB,
          lobbyName: YB,
          personalWorld: DB
        } = BB;
        return OB ? "auto" : !SO(GB) && WO(YB, DB) ? "auto_existing" : null
      }({
        justMade: OB,
        playerId: GB,
        lobbyName: BB,
        personalWorld: YB
      })
    }

    function gO(BB) {
      let {
        answer: OB
      } = BB;
      return null !== OB && "settings" in OB && !OB.settings.canManage
    }
    const rO = 500,
      XO = 3e4;

    function wO(BB) {
      return "inGame" === wB.c.get("gameState") && JB.gameBridge.latest("connectedGame").lobbyName === BB
    }

    function EO() {
      return (0, cB.f)() || wB.c.get("loadingOverlayVisible") || (0, EB.r)()
    }
    var cO = GB(36977),
      hO = GB(3580),
      aO = GB(2085),
      eO = GB(3573);

    function TO(BB, OB, GB) {
      return eO.c.overridesTexture(BB) ? eO.c.getTexture(BB, OB).url : GB
    }
    var bO = GB(10688);
    const CO = (BB, OB) => {
        (0, DB.useEffect)((() => {
          setTimeout((() => {
            BB && BB.current && BB.current.focus()
          }), 1)
        }), [OB])
      },
      HO = (0, DB.memo)((function(BB) {
        let {
          isInputActive: OB,
          onClose: GB,
          onChange: YB,
          textAreaRef: DB,
          fontSize: QB,
          lineHeight: oB,
          currText: jB
        } = BB;
        return (0, MB.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, MB.jsx)("img", {
            src: TO("board_full", hO.h.BLOCK, bO),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, MB.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: jB,
            ref: DB,
            style: {
              fontSize: `${QB}rem`,
              lineHeight: `${oB}rem`
            },
            onKeyDown: BB => {
              var OB;
              "Escape" !== BB.key && (BB.stopPropagation(), "Tab" === BB.key && function(BB) {
                BB.preventDefault();
                const OB = BB.target,
                  {
                    value: GB
                  } = OB;
                let YB = OB.selectionStart,
                  DB = OB.selectionEnd,
                  QB = GB.slice(YB, DB);
                if (!QB.includes("\n") && !BB.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; YB > 0 && "\n" !== GB[YB - 1];) YB--;
                const oB = "\n" === GB[DB - 1];
                oB && DB--;
                QB = GB.slice(YB, DB);
                const jB = QB.split("\n").map((OB => BB.shiftKey ? OB.replace(/^\t/, "") : "\t" + OB)).join("\n");
                if (BB.shiftKey && GB.slice(YB, DB) === jB) return;
                let {
                  selectionStart: yB
                } = OB;
                OB.setSelectionRange(YB, DB), yB > YB && (!BB.shiftKey || "\t" === QB[0]) && (yB += BB.shiftKey ? -1 : 1);
                DB = YB + jB.length + (oB ? 1 : 0), document.execCommand("insertText", !1, jB), OB.setSelectionRange(yB, DB)
              }(BB), /^F\d+$/i.test(BB.code) && null !== (OB = aO.t.OpenCodeEditor) && void 0 !== OB && OB.includes(BB.code) && GB())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: YB
          })]
        })
      }));

    function vO(BB) {
      return 1.3 * BB
    }
    var sO = GB(1739);
    const xO = (0, DB.memo)((function(BB) {
        let {
          show: OB,
          onOpen: GB,
          onClose: YB
        } = BB;
        const [QB, jB] = (0, DB.useState)(null), [yB, PB] = (0, DB.useState)(""), [zB, pB] = (0, DB.useState)(0), [qB, ZB] = (0, DB.useState)(null), [NB, RB] = (0, DB.useState)({
          text: "",
          textSize: 0
        }), WB = (BB, OB) => qB ? (0, cO.m)(BB, OB, qB.width, qB.height) : (0, cO.f)(BB, OB), AB = BB => {
          PB(WB(yB, BB)), pB(BB), FB.g.setItem("lastBoardTextSize", BB)
        }, VB = () => {
          YB(), qB && yB === NB.text && zB === NB.textSize || JB.gameBridge.send("writeOnBoard", {
            pos: QB,
            text: yB,
            textSize: zB
          })
        };
        (0, kB.b)("boardEditRequested", (BB => {
          var DB, QB;
          if (!IB.featureFlags.canSeePlayerWrittenText) return;
          if (null === BB) return jB(null), void(OB && YB());
          const {
            pos: oB,
            noticeboardSpan: yB,
            text: JB
          } = BB;
          jB(oB), ZB(yB), PB(JB);
          const MB = null !== (DB = null !== (QB = BB.textSize) && void 0 !== QB ? QB : FB.g.getItem("lastBoardTextSize")) && void 0 !== DB ? DB : 0;
          pB(MB), RB({
            text: JB,
            textSize: MB
          }), FB.g.setItem("lastBoardTextSize", MB), GB()
        }));
        const SB = (0, DB.useRef)(null);
        CO(SB, OB), (0, sO.s)(SB, {
          kind: "sign",
          submit: VB
        });
        const nB = function(BB, OB) {
            const GB = cO.b[BB];
            if (!OB) return GB.uiFontSize;
            const {
              numLines: YB,
              charsPerLine: DB
            } = (0, cO.x)(OB.width, OB.height, BB);
            return GB.uiFontSize * Math.min(GB.charsPerLine / DB, GB.numLines / YB)
          }(zB, qB),
          UB = vO(nB);
        return (0, MB.jsxs)(oB.d, {
          className: "WriteOnBoardBg",
          close: VB,
          escDoesExit: !0,
          show: OB,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, MB.jsx)(HO, {
            isInputActive: () => OB,
            onClose: VB,
            onChange: BB => {
              PB(WB(BB.target.value, zB))
            },
            textAreaRef: SB,
            fontSize: nB,
            lineHeight: UB,
            currText: yB
          }), (0, MB.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, MB.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, MB.jsx)(lB.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                AB(0)
              },
              disabled: 0 === zB,
              children: "Small"
            }), (0, MB.jsx)(lB.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                AB(1)
              },
              disabled: 1 === zB,
              children: "Medium"
            }), (0, MB.jsx)(lB.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                AB(2)
              },
              disabled: 2 === zB,
              children: "Large"
            })]
          })]
        })
      })),
      tO = (0, DB.memo)((function(BB) {
        let {
          show: OB,
          onOpen: GB,
          onClose: YB
        } = BB;
        const [QB, jB] = (0, DB.useState)(""), yB = () => {
          YB(), JB.gameBridge.send("writeNameTag", QB)
        };
        (0, UB.f)("EditNameTag", (BB => {
          IB.featureFlags.canSeePlayerWrittenText && null !== BB && (jB(BB), GB())
        }));
        const PB = (0, DB.useRef)(null);
        CO(PB, OB), (0, sO.s)(PB, {
          kind: "nameTag",
          submit: yB
        });
        const zB = cO.G.nameTag.uiFontSize,
          pB = vO(zB);
        return (0, MB.jsxs)(oB.d, {
          className: "WriteOnBoardBg",
          close: yB,
          escDoesExit: !0,
          show: OB,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, MB.jsx)("div", {
            className: "NameTagTrim",
            children: (0, MB.jsx)(HO, {
              isInputActive: () => OB,
              onClose: yB,
              onChange: BB => {
                const OB = BB.target.value.replaceAll("\n", "");
                jB((0, cO.q)(OB, "nameTag"))
              },
              textAreaRef: PB,
              fontSize: zB,
              lineHeight: pB,
              currText: QB
            })
          }), (0, MB.jsx)(lB.f, {
            onClick: yB,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var BG = GB(18784);
    const OG = (0, DB.memo)((function(BB) {
      let {
        show: OB,
        onOpen: GB,
        onClose: YB
      } = BB;
      const [QB, jB] = (0, DB.useState)(""), [yB, PB] = (0, DB.useState)(0), [zB, pB] = (0, DB.useState)(!1), [qB, ZB] = (0, DB.useState)(["", "", "", "", "", "", "", "", "", ""]), [NB, RB] = (0, DB.useState)("Title"), [WB, AB] = (0, DB.useState)(!0), [VB, SB] = (0, DB.useState)(!1);
      (0, UB.f)("EditBook", (BB => {
        let {
          pages: OB,
          title: YB,
          isPublished: DB
        } = BB;
        var QB;
        IB.featureFlags.canSeePlayerWrittenText && (null !== OB ? (ZB(OB), jB(null !== (QB = OB[0]) && void 0 !== QB ? QB : ""), RB(YB), PB(0), pB(!1), AB(!DB), SB(!1), GB()) : ZB(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const nB = (0, DB.useRef)(null),
        fB = (0, DB.useRef)(null);
      CO(nB, OB), (0, sO.s)(nB, {
        kind: "book"
      }), (0, sO.s)(fB, {
        kind: "KJ"
      });
      const kB = cO.G.book.uiFontSize,
        dB = vO(kB),
        KB = () => {
          (WB || VB) && JB.gameBridge.send("writeBook", {
            pages: [...qB],
            title: NB,
            published: !WB && VB
          })
        },
        uB = BB => {
          zB && (qB[yB] = QB, pB(!1)), jB(qB[BB]), PB(BB)
        };
      return (0, MB.jsxs)(oB.d, {
        className: "WriteOnBoardBg",
        close: () => {
          YB(), qB[yB] = QB, KB()
        },
        escDoesExit: !0,
        show: OB,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, MB.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, MB.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: NB,
            ref: fB,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${dB}rem`
            },
            onKeyDown: BB => {
              WB && BB.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: BB => {
              let OB = BB.target.value;
              OB = (0, cO.q)(OB, "KJ"), RB(OB)
            },
            readOnly: !WB
          }), (0, MB.jsx)("img", {
            src: TO("book_page", hO.h.ITEM, BG),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, MB.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, MB.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: QB,
              ref: nB,
              style: {
                fontSize: `${kB}rem`,
                lineHeight: `${dB}rem`
              },
              onKeyDown: BB => {
                WB && BB.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: BB => {
                const OB = BB.target.value;
                jB((0, cO.q)(OB, "book")), pB(!0)
              },
              readOnly: !WB
            })
          })]
        }), (0, MB.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, MB.jsx)(lB.f, {
            disabled: 0 === yB,
            onClick: () => {
              uB(yB - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, MB.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, MB.jsx)(lB.f, {
            disabled: 9 === yB,
            onClick: () => {
              uB(yB + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, MB.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, MB.jsx)(lB.f, {
            onClick: () => {
              AB(!WB), SB(!0)
            },
            className: "BookNavButton",
            children: WB ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var GG = GB(37270),
      YG = GB(9363),
      DG = GB(1434),
      QG = GB(2012);

    function oG(BB) {
      let {
        show: OB,
        buttons: GB
      } = BB;
      const {
        t: YB
      } = (0, HB.H)(), QB = (0, DB.useRef)(null);
      return (0, DB.useEffect)((() => {
        var BB, GB;
        const YB = OB ? (0, GG.G)() : null;
        if (!YB || !(0, DG.j)()) return;
        const DB = (0, GG.m)().findIndex((BB => BB.id === YB));
        (0, YG.n)(null !== (BB = null === (GB = QB.current) || void 0 === GB ? void 0 : GB.children[DB]) && void 0 !== BB ? BB : null)
      }), [OB]), 0 === GB.length ? null : (0, MB.jsx)("div", {
        ref: QB,
        className: "ClientGameInventoryButtons",
        onPointerDown: BB => {
          BB.stopPropagation()
        },
        onPointerUp: BB => {
          BB.stopPropagation()
        },
        children: GB.map((BB => {
          const OB = YB(BB.labelKey);
          return (0, MB.jsxs)(lB.q, {
            className: BB.className,
            disabled: BB.disabled,
            onClick: () => {
              (0, GG.y)(BB)
            },
            ariaLabel: BB.iconOnly ? OB : void 0,
            title: BB.iconOnly ? OB : void 0,
            children: [BB.icon && (0, MB.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === BB.icon.kind && (0, MB.jsx)(QG.c, {
                itemName: BB.icon.name,
                amount: 0
              }), "image" === BB.icon.kind && (0, MB.jsx)("img", {
                src: BB.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === BB.icon.kind && (0, MB.jsx)(ZB.b, {
                name: BB.icon.name
              })]
            }), !BB.iconOnly && OB]
          }, BB.id)
        }))
      })
    }
    var jG = GB(37434),
      yG = GB(3066),
      JG = GB(34807),
      MG = GB(37202),
      PG = GB(37198),
      zG = GB(1354);
    let lG = null;
    window.setShowInventoryAdsOverride = BB => {
      lG = BB
    };
    const pG = 24e4;
    var qG = GB(2018);

    function ZG(BB) {
      var OB;
      let {
        draggedInfo: {
          name: GB,
          attributes: YB,
          amount: DB
        },
        toAddRef: QB
      } = BB;
      return (0, MB.jsx)("div", {
        className: "DraggedInvenItem",
        ref: QB,
        children: (0, MB.jsx)(QG.c, {
          itemName: GB,
          amount: DB,
          enchantmentTier: null === YB || void 0 === YB || null === (OB = YB.customAttributes) || void 0 === OB ? void 0 : OB.enchantmentTier,
          bar: (0, qG.f)(YB)
        })
      })
    }

    function NG(BB) {
      let {
        className: OB = "",
        displayInfo: GB,
        domRef: YB
      } = BB;
      return (0, MB.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${OB}`,
        ref: YB,
        children: [(0, MB.jsx)(nB.b, {
          text: (0, fB.zb)(GB.name, {
            fontStyle: GB.fontStyle
          })
        }), (0, MB.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, MB.jsx)(nB.b, {
            text: GB.desc
          })
        })]
      })
    }

    function RG(BB) {
      let {
        info: OB,
        draggedInfo: GB
      } = BB;
      const YB = (0, DB.useRef)(null);
      return (0, DB.useLayoutEffect)((() => {
        const BB = YB.current,
          {
            left: GB,
            top: DB
          } = function(BB, OB, GB, YB) {
            const DB = YB.left * GB.width / 100 + 4,
              QB = GB.width - YB.right * GB.width / 100 - 4 - OB.width,
              oB = YB.top * GB.height / 100 + 4,
              jB = GB.height - 4 - OB.height;
            return {
              left: Math.max(DB, Math.min(BB.x - OB.width / 2, QB)),
              top: Math.max(oB, Math.min(BB.y - 48 - OB.height, jB))
            }
          }({
            x: OB.initTouchX,
            y: OB.initTouchY
          }, {
            width: BB.offsetWidth,
            height: BB.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, wB.c.get("notchSize"));
        BB.style.left = `${GB}px`, BB.style.top = `${DB}px`
      }), [OB]), (0, MB.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: YB,
        children: [(0, MB.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: GB.amount / OB.maxAmount * 100 + "%"
          }
        }), (0, MB.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [GB.amount, "/", OB.maxAmount]
        })]
      })
    }
    var WG = GB(1090),
      AG = GB.n(WG),
      VG = GB(192);
    const SG = (0, DB.memo)((function(BB) {
      let {
        show: OB,
        onOpen: GB,
        onClose: YB
      } = BB;
      const QB = (0, DB.useRef)({
          pos: null
        }),
        [jB, yB] = (0, DB.useState)([0, 0, 0, 0]),
        {
          userContext: PB
        } = (0, SB.d)();
      (0, kB.b)("ironChestOpenRequested", (BB => {
        let {
          pos: OB,
          ownerDbId: YB,
          cachedPasskey: DB
        } = BB;
        if (QB.current.pos = OB, YB !== PB.whamm) return null !== DB ? (yB(DB), void zB(DB)) : void GB();
        zB(jB)
      })), (0, kB.b)("localEffectUpdated", (BB => {
        "Thief" === BB && YB()
      }));
      const zB = BB => {
        const {
          pos: OB
        } = QB.current;
        JB.gameBridge.send("openIronChest", {
          pos: OB,
          xy: BB
        })
      };
      return (0, MB.jsx)(oB.d, {
        className: "IronChestPasskeyInputScreenOuter",
        close: YB,
        escDoesExit: !0,
        show: OB,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, MB.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, MB.jsx)(nG, {
            xy: jB,
            onPasskeyUpdated: yB,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              zB(jB)
            }
          })
        })
      })
    }));

    function nG(BB) {
      let {
        className: OB = "",
        xy: GB,
        onPasskeyUpdated: YB,
        confirmText: DB,
        onConfirm: QB
      } = BB;
      const {
        t: oB
      } = (0, HB.H)();
      return (0, MB.jsxs)("div", {
        className: `${OB} IronChestPasskeyInput`,
        children: [(0, MB.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: oB("ironChest:passkeyInputTitle")
        }), (0, MB.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(VG.f.ironChestPasskeyLength).fill(0).map(((BB, OB) => (0, MB.jsx)(UG, {
            digit: GB[OB],
            onPasskeyDigitUpdated: BB => {
              const DB = [...GB];
              DB[OB] = BB, YB(DB)
            }
          }, OB)))
        }), (0, MB.jsx)(lB.q, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: QB,
          children: oB(DB)
        })]
      })
    }

    function UG(BB) {
      let {
        digit: OB,
        onPasskeyDigitUpdated: GB
      } = BB;
      return (0, MB.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, MB.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, MB.jsx)(lB.q, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              GB(fB.b.mod(OB + 1, 10))
            },
            children: (0, MB.jsx)(ZB.b, {
              name: "angle-up"
            })
          }), (0, MB.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: OB
          }), (0, MB.jsx)(lB.q, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              GB(fB.b.mod(OB - 1, 10))
            },
            children: (0, MB.jsx)(ZB.b, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var fG = GB(34799),
      kG = GB(37495),
      dG = GB(37191);

    function KG(BB) {
      let {
        specialItemInfo: OB,
        setHovered: GB,
        pointerDown: YB,
        pointerUp: QB,
        enchantingTablePosition: oB,
        enchantingTableBlockName: jB
      } = BB;
      const {
        t: PB
      } = (0, HB.H)(), [zB, pB] = (0, DB.useState)(null), [qB, ZB] = (0, DB.useState)(null), NB = (0, yB.g)("auraPerLevel"), RB = Math.floor((0, kB.g)("aura") / NB);
      (0, DB.useEffect)((() => {
        if (!OB) return void pB(null);
        let BB = !0;
        return JB.gameBridge.query("enchantingOffer", {
          slot: OB.idx,
          name: OB.name,
          blockName: jB
        }).then((GB => {
          var YB, DB;
          let {
            perks: QB,
            options: oB
          } = GB;
          if (!BB) return;
          const jB = {
            isEnchantable: QB.length > 0,
            possibleEnchantments: QB,
            options: oB.map((BB => {
              let {
                level: OB,
                odds: GB
              } = BB;
              return {
                level: OB,
                possibilities: Object.fromEntries(GB.map(((BB, OB) => [`Tier ${OB+1}`, BB])))
              }
            })),
            isAlreadyEnchanted: QB.length > 0 && void 0 !== (null === (YB = OB.attributes) || void 0 === YB || null === (DB = YB.customAttributes) || void 0 === DB ? void 0 : DB.enchantmentTier)
          };
          pB(jB), (BB => {
            const OB = BB.options.map((BB => Object.entries(BB.possibilities).map((BB => {
              let [OB, GB] = BB;
              return {
                str: `${OB}: ${GB>0?GB<.01?GB.toPrecision(1):GB.toFixed(2):0}%\n`,
                style: {
                  color: fB.ub[OB]
                }
              }
            }))));
            ZB(OB)
          })(jB)
        })), () => {
          BB = !1
        }
      }), [OB, oB, jB]);
      const WB = [];
      for (let DB = 0; DB < kG.f; DB++) {
        const BB = null === zB || void 0 === zB ? void 0 : zB.options[DB],
          YB = !BB || BB.level > RB;
        WB.push((0, MB.jsx)(lB.f, {
          className: "EnchantmentButton",
          onPointerEnter: BB ? BB => null === GB || void 0 === GB ? void 0 : GB()(!0, {
            name: "",
            desc: qB[DB]
          }, BB) : void 0,
          onPointerLeave: BB ? () => null === GB || void 0 === GB ? void 0 : GB()(!1) : void 0,
          onClick: YB ? void 0 : () => {
            JB.gameBridge.send("enchantItem", {
              slot: OB.idx,
              level: BB.level,
              tablePos: oB
            }), pB(null)
          },
          disabled: YB,
          children: BB ? (0, MB.jsxs)(MB.Fragment, {
            children: [(0, MB.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, MB.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [PB("enchantments:cost"), ": "]
              }), " ", PB("enchantments:levels", {
                level: BB.level
              })]
            }), (0, MB.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, MB.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, MB.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: PB("enchantments:tier")
                }), Object.entries(BB.possibilities).map((BB => {
                  let [OB, GB] = BB;
                  return 0 === GB ? null : (0, MB.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: fB.ub[OB]
                    },
                    children: OB
                  }, OB)
                }))]
              }), (0, MB.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, MB.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: PB("enchantments:odds")
                }), Object.entries(BB.possibilities).map((BB => {
                  let [OB, GB] = BB;
                  return 0 === GB ? null : (0, MB.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: fB.ub[OB]
                    },
                    children: [GB > 0 && GB < .1 ? "<0.1" : GB.toFixed(0 < GB && GB < .95 ? 1 : 0), "%"]
                  }, OB)
                }))]
              })]
            })]
          }) : !1 === (null === zB || void 0 === zB ? void 0 : zB.isEnchantable) ? (0, MB.jsx)("h1", {
            className: "EnchantmentLevels",
            children: PB("enchantments:notEnchantable")
          }) : (0, MB.jsx)("h1", {
            className: "EnchantmentLevels",
            children: PB("enchantments:enterItem")
          })
        }, DB))
      }
      return (0, MB.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, MB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: jB
        }), (0, MB.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, MB.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, MB.jsx)(dG.c, {
              idx: PG.e,
              setHovered: BB => {
                null === GB || void 0 === GB || GB(PG.e)(BB)
              },
              pointerDown: YB,
              pointerUp: QB,
              draggedInfo: null,
              specialItemInfo: OB,
              variation: "Enchanting Table"
            }), zB && zB.possibleEnchantments.length > 0 && (0, MB.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, MB.jsx)("h2", {
                children: "Possible Perks:"
              }), zB.possibleEnchantments.map((BB => (0, MB.jsxs)(DB.Fragment, {
                children: [(0, MB.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, MB.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, MB.jsx)(QG.c, {
                      itemName: `${BB} Enchantment`,
                      amount: 1
                    })
                  }), (0, MB.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: BB
                  })]
                }), (0, MB.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: PB((0, fG.h)(BB).translationKey)
                })]
              }, BB)))]
            })]
          }), (0, MB.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [zB && zB.isAlreadyEnchanted && (0, MB.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: PB("enchantments:alreadyEnchanted")
            }), WB]
          })]
        })]
      })
    }
    var uG = GB(37500);

    function mG(BB) {
      var OB;
      let {
        specialItemInfo: GB,
        setSpecialItemInfo: YB,
        setHovered: QB,
        pointerDown: oB,
        pointerUp: jB
      } = BB;
      const {
        t: yB
      } = (0, HB.H)(), PB = (0, kB.f)("inventory", (BB => BB.freeSlots)), [zB, pB] = (0, DB.useState)(null);
      (0, DB.useEffect)((() => {
        if (GB) {
          const BB = (0, uG.e)(GB.name, GB.amount);
          pB({
            salvageable: !!BB,
            produces: BB
          })
        } else pB(null)
      }), [GB, null === GB || void 0 === GB ? void 0 : GB.name, null === GB || void 0 === GB ? void 0 : GB.amount]);
      const qB = !!GB && !(null === zB || void 0 === zB || !zB.salvageable) && !(null !== (OB = zB.produces) && void 0 !== OB && OB.some((BB => {
        let {
          amt: OB
        } = BB;
        return OB < 1
      })));
      return (0, MB.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, MB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: yB("item:salvagingTable")
        }), (0, MB.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, MB.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, MB.jsx)(dG.c, {
              idx: PG.e,
              setHovered: BB => {
                null === QB || void 0 === QB || QB(PG.e)(BB)
              },
              pointerDown: oB,
              pointerUp: jB,
              draggedInfo: null,
              specialItemInfo: GB,
              variation: "Salvaging Table"
            })
          }), (0, MB.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, MB.jsx)(lB.f, {
              className: "SalvageButton",
              onClick: qB ? () => {
                const {
                  idx: BB,
                  name: OB,
                  amount: DB
                } = GB;
                JB.gameBridge.send("salvageItem", {
                  slot: BB,
                  name: OB,
                  amount: DB
                }) && (pB(null), YB(null))
              } : void 0,
              disabled: !qB,
              children: zB ? zB.salvageable ? zB.produces.some((BB => {
                let {
                  amt: OB
                } = BB;
                return OB < 1
              })) ? (0, MB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, MB.jsx)("div", {
                  className: "SalvageText Error",
                  children: yB("salvagingTable:notEnoughResources")
                })
              }) : PB < zB.produces.length ? (0, MB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, MB.jsx)("div", {
                  className: "SalvageText Error",
                  children: yB("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, MB.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, MB.jsx)("div", {
                  className: "SalvageText",
                  children: yB("salvagingTable:salvage")
                }), (0, MB.jsx)("div", {
                  className: "SalvageIcons",
                  children: zB.produces.map(((BB, OB) => {
                    let {
                      item: GB,
                      amt: YB
                    } = BB;
                    return (0, MB.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, MB.jsx)(QG.c, {
                        itemName: GB,
                        amount: Math.floor(YB)
                      })
                    }, OB)
                  }))
                })]
              }) : (0, MB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, MB.jsx)("div", {
                  className: "SalvageText Error",
                  children: yB("salvagingTable:unsalvageable")
                })
              }) : (0, MB.jsx)(MB.Fragment, {})
            })
          })]
        })]
      })
    }
    var IG = GB(204),
      FG = GB(9927),
      iG = GB(2987),
      LG = GB(1735),
      gG = GB(9370),
      rG = GB(9365),
      XG = GB(1730),
      wG = GB(2107),
      EG = GB(1450),
      cG = GB(2170);

    function hG(BB, OB, GB) {
      const YB = BB.trim().toLowerCase();
      if ("" === YB) return 0;
      let DB = null;
      for (const QB of OB) {
        const BB = QB.toLowerCase().indexOf(YB);
        if (0 === BB) return 0;
        BB > 0 && (DB = 1)
      }
      if (null !== DB) return DB;
      for (const QB of GB)
        if (QB.toLowerCase().includes(YB)) return 2;
      return null
    }

    function aG(BB) {
      return BB.map((BB => {
        var OB;
        return BB ? {
          name: BB.name,
          amount: null !== (OB = BB.amount) && void 0 !== OB ? OB : 1
        } : null
      }))
    }

    function eG(BB) {
      return BB < 1e3 ? `${BB}` : BB < 1e4 ? Math.floor(BB / 100) / 10 + "k" : `${Math.floor(BB/1e3)}k`
    }
    var TG = GB(37508);
    const bG = lB.f,
      CG = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      HG = () => {
        const BB = (0, EG.f)();
        return BB ? BB.getPadRepeatTiming(CG) : CG
      };

    function vG(BB, OB, GB) {
      var YB, DB;
      const QB = (0, JG.x)(OB, BB);
      let oB = null === (YB = OB[BB]) || void 0 === YB ? void 0 : YB.description;
      if (GB && (null === (DB = (0, TG.g)().get(BB)) || void 0 === DB || !DB.hideIngredients)) {
        oB ? (oB = (0, fB.zb)(oB), oB.push({
          str: "\n"
        })) : oB = [], oB.push({
          str: "\n"
        }), oB.push({
          str: "Can be crafted from:\n"
        });
        for (const BB of GB) "string" === typeof BB && (oB.push({
          icon: BB,
          style: {
            fontSize: "1.5em"
          }
        }), oB.push({
          str: " "
        }), oB.push(...(0, fB.zb)((0, JG.x)(OB, BB))), oB.push({
          str: "\n"
        }))
      }
      return {
        name: QB,
        desc: oB
      }
    }

    function sG(BB) {
      let {
        name: OB,
        HM: GB
      } = BB;
      return `${OB}_${GB}`
    }

    function xG(BB) {
      var OB;
      let {
        onClick: GB,
        itemName: YB,
        recipeId: QB,
        isSelected: oB,
        haveIngredients: jB,
        craftable: yB,
        setHovered: JB,
        padActions: PB,
        marked: zB,
        lock: lB,
        itemInfo: pB
      } = BB;
      const qB = (0, DB.useRef)(null);
      return (0, gG.e)(qB, {
        press: BB => !jB || "secondary" === BB && !yB ? (PB.refuse(), !1) : "primary" === BB ? (PB.choose(), !0) : PB.craft(),
        release: PB.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, MB.jsxs)("div", {
        ref: qB,
        className: AG()("InvenItem", {
          CraftableItemNotEnoughIngredients: !jB && !lB,
          CraftableItemMarked: zB,
          CraftableItemLocked: void 0 !== lB,
          CraftableItemLockedFar: (null !== (OB = null === lB || void 0 === lB ? void 0 : lB.stepsAway) && void 0 !== OB ? OB : 1) > 1
        }),
        "data-recipe-key": QB,
        "data-pad-inventory-default": oB ? "" : void 0,
        onClick: GB,
        style: {
          cursor: oB ? null : "pointer"
        },
        onPointerEnter: BB => {
          null === JB || void 0 === JB || JB(!0, vG(YB, pB)), !oB && (0, XG.r)(BB.nativeEvent) && (0, rG.j)() && GB()
        },
        onPointerLeave: () => {
          null === JB || void 0 === JB || JB(!1)
        },
        children: [(0, MB.jsx)(QG.c, {
          itemName: YB,
          amount: 1
        }), zB && (0, MB.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), lB && (0, MB.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, MB.jsx)(ZB.b, {
            name: "lock"
          }), (0, MB.jsx)(nB.b, {
            text: lB.tag
          })]
        })]
      })
    }

    function tG(BB) {
      let {
        idx: OB,
        status: GB,
        shownItem: YB,
        dim: QB,
        onHoverStart: oB,
        onHoverEnd: jB,
        onPadBack: yB
      } = BB;
      const JB = (0, DB.useRef)(null);
      (0, gG.e)(JB, {
        press: () => !1,
        back: yB,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const PB = GB.need > 0 ? Math.min(GB.have / GB.need, 1) : 1;
      return (0, MB.jsxs)("div", {
        ref: JB,
        className: AG()("CupTile", {
          Short: GB.missing > 0
        }),
        style: {
          width: QB,
          height: QB
        },
        "data-craft-ingredient": OB,
        onPointerEnter: oB,
        onPointerLeave: jB,
        children: [(0, MB.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${PB})`
          }
        }), (0, MB.jsx)(QG.c, {
          itemName: YB,
          amount: 0
        }), (0, MB.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [eG(GB.have), "/", eG(GB.need)]
        })]
      })
    }

    function BY(BB) {
      var OB, GB, YB, QB, oB;
      let {
        show: jB,
        recipeItem: {
          name: yB,
          HM: PB,
          requires: zB,
          produces: lB,
          haveIngredients: pB
        },
        detail: qB,
        onCraft: ZB,
        setHovered: NB,
        craftButtonRef: RB,
        onPadBack: WB,
        showPadShortcut: AB,
        refusedCount: VB,
        lock: SB,
        itemInfo: UB
      } = BB;
      const {
        t: fB
      } = (0, HB.H)(), kB = null !== qB && !qB.roomForOne, dB = null !== (OB = null === qB || void 0 === qB ? void 0 : qB.craftAllTimes) && void 0 !== OB ? OB : 0, KB = function(BB, OB) {
        return BB.map((BB => {
          let {
            items: GB,
            amt: YB
          } = BB, DB = 0;
          const QB = [];
          for (const oB of GB) {
            const BB = OB(oB);
            DB += BB, BB > 0 && QB.push(oB)
          }
          return 0 === QB.length && QB.push(GB[0]), {
            shownItems: QB,
            need: YB,
            have: DB,
            missing: Math.max(YB - DB, 0)
          }
        }))
      }(zB, (BB => {
        var OB;
        return null !== (OB = null === qB || void 0 === qB ? void 0 : qB.amounts[BB]) && void 0 !== OB ? OB : 0
      }));
      let uB = "4rem",
        mB = 4;
      3 === zB.length || 4 === zB.length ? uB = "3.75rem" : zB.length >= 5 && (uB = "3rem"), 4 === zB.length ? mB = 2 : zB.length <= 6 && (mB = 3);
      const IB = `calc(${mB} * ${uB} + ${mB-1} * 0.4rem + 1px)`,
        FB = (0, DB.useRef)(null),
        iB = (0, DB.useRef)(null);
      (0, DB.useLayoutEffect)((() => {
        FB.current.scrollTop = 0
      }), [yB, PB]);
      const LB = (0, DB.useRef)(VB);
      (0, DB.useEffect)((() => {
        if (VB === LB.current) return;
        LB.current = VB;
        const BB = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const YB of null !== (OB = null === (GB = FB.current) || void 0 === GB ? void 0 : GB.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== OB ? OB : []) {
          var OB, GB;
          YB.animate(BB, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [VB]);
      const gB = (BB, OB, GB) => {
          var YB;
          if ((0, TG.g)().has(yB)) return void(GB && clearInterval(rB.current));
          const DB = null !== (YB = null === qB || void 0 === qB ? void 0 : qB.resultStackable) && void 0 !== YB && YB,
            QB = aG(JB.gameBridge.latest("inventory").player),
            {
              vM: oB,
              WJ: jB,
              amountAddedToSlot: MB
            } = JB.gameBridge.send("craftRecipe", {
              name: yB,
              HM: PB,
              times: OB || BB && DB ? null : 1
            });
          if (oB > 0) {
            const OB = [],
              YB = new Set(zB.flatMap((BB => {
                let {
                  items: OB
                } = BB;
                return OB
              }))),
              oB = function(BB, OB, GB) {
                const YB = [];
                for (let DB = 0; DB < BB.length; DB++) {
                  const QB = BB[DB];
                  if (!QB || !GB.has(QB.name)) continue;
                  const oB = OB[DB],
                    jB = (null === oB || void 0 === oB ? void 0 : oB.name) === QB.name ? oB.amount : 0;
                  jB < QB.amount && YB.push({
                    idx: DB,
                    itemName: QB.name,
                    amount: QB.amount - jB
                  })
                }
                return YB
              }(QB, aG(JB.gameBridge.latest("inventory").player), YB).slice(0, 12),
              PB = GB ? 0 : Math.min(50, 400 / oB.length),
              pB = GB ? 220 : 320;
            for (const BB of oB) {
              var lB;
              const GB = zB.findIndex((OB => {
                  let {
                    items: GB
                  } = OB;
                  return GB.includes(BB.itemName)
                })),
                YB = null === (lB = FB.current) || void 0 === lB ? void 0 : lB.querySelector(`[data-craft-ingredient="${GB}"]`),
                DB = (0, JG.f)(BB.idx);
              YB && DB && OB.push({
                kind: "ingredient",
                itemName: BB.itemName,
                amount: BB.amount,
                WJ: BB.idx,
                from: DB,
                to: (0, JG.f)(YB),
                delayMs: Math.round(OB.length * PB),
                durationMs: pB
              })
            }
            let qB;
            if (null !== jB && MB > 0 && iB.current) {
              const BB = OB.length > 0 ? OB[OB.length - 1].delayMs + .6 * pB : 0;
              qB = {
                itemName: yB,
                amount: MB,
                WJ: jB,
                from: (0, JG.f)(iB.current),
                delayMs: Math.round(BB)
              }
            }
            ZB(qB, BB && !DB ? jB : null, OB), jG.b.play("wood1", .5).rate(1.75)
          }
        },
        rB = (0, DB.useRef)(null);
      (0, DB.useEffect)((() => () => {
        clearInterval(rB.current)
      }), []);
      const XB = (BB, OB) => {
          gB(BB, !1, !1), clearInterval(rB.current), OB && (rB.current = setTimeout((() => {
            rB.current = setInterval((() => {
              gB(BB, !1, !0)
            }), OB.intervalMs)
          }), OB.initialDelayMs))
        },
        wB = () => {
          clearInterval(rB.current)
        },
        EB = !pB || kB || Boolean(SB),
        cB = (0, DB.useRef)(null),
        hB = null !== (GB = null === (YB = (0, cG.b)()) || void 0 === YB ? void 0 : YB.hideButtonHints) && void 0 !== GB && GB,
        aB = null !== (QB = null === (oB = (0, EG.f)()) || void 0 === oB ? void 0 : oB.getBoundButton("inventorySecondary")) && void 0 !== QB ? QB : null,
        eB = () => !EB && (gB(!1, !0, !1), !0);
      (0, gG.e)(RB, {
        press: BB => "secondary" === BB ? eB() : !EB && (XB(!1, HG()), !0),
        release: wB,
        back: WB,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, gG.e)(cB, {
        press: eB,
        back: WB,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [TB, bB] = (0, DB.useState)(0), [CB, vB] = (0, DB.useState)(null);
      (0, DB.useEffect)((() => {
        if (!0 === jB) {
          bB(0);
          const BB = setInterval((() => {
            bB((BB => BB + 1))
          }), 1e3);
          return () => {
            clearInterval(BB)
          }
        }
        return () => {}
      }), [jB]);
      const sB = null === qB || void 0 === qB ? void 0 : qB.ingredientsCraftedFrom,
        xB = (0, DB.useRef)(NB);
      (0, DB.useEffect)((() => {
        xB.current = NB
      }), [NB]);
      const tB = !(null === SB || void 0 === SB || !SB.hideIngredients);
      (0, DB.useEffect)((() => {
        var BB, OB;
        if (!CB) return;
        if (tB) return vB(null), void(null === (OB = xB.current) || void 0 === OB || OB.call(xB, !1));
        const GB = CB[TB % CB.length];
        null === (BB = xB.current) || void 0 === BB || BB.call(xB, !0, vG(GB, UB, null === sB || void 0 === sB ? void 0 : sB[GB]))
      }), [CB, TB, UB, sB, tB]);
      const BO = !!SB,
        OO = (0, DB.useRef)(!1);
      (0, DB.useEffect)((() => {
        var BB;
        BO && (clearInterval(rB.current), tB && OO.current && (OO.current = !1, null === (BB = xB.current) || void 0 === BB || BB.call(xB, !1)))
      }), [BO, tB]);
      const GO = (0, JG.x)(UB, yB);
      return (0, MB.jsxs)("div", {
        ref: FB,
        className: "CraftableInfo SmallTextBold",
        children: [(0, MB.jsx)("div", {
          className: "CraftableHeader",
          children: (0, MB.jsx)(nB.b, {
            text: GO
          })
        }), !tB && (0, MB.jsx)("div", {
          className: AG()("CraftableIngredients", {
            Compact: zB.length >= 5
          }),
          style: {
            maxWidth: IB
          },
          children: KB.map(((BB, OB) => {
            const GB = BB.shownItems[TB % BB.shownItems.length];
            return (0, MB.jsx)(tG, {
              idx: OB,
              status: BB,
              shownItem: GB,
              dim: uB,
              onHoverStart: () => {
                vB(BB.shownItems)
              },
              onHoverEnd: () => {
                vB(null), null === NB || void 0 === NB || NB(!1)
              },
              onPadBack: WB
            }, OB)
          }))
        }), SB && (0, MB.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, MB.jsx)(nB.b, {
            text: SB.reason
          })
        }), !SB && (!pB || kB) && (0, MB.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!pB && "Missing ingredients", (0, MB.jsx)("br", {}), kB && "Inventory is full"]
        }), !tB && (0, MB.jsxs)(MB.Fragment, {
          children: [(0, MB.jsxs)(bG, {
            ref: RB,
            className: "DoCraftButton",
            onPointerDown: BB => {
              XB((0, JG.A)(BB), (0, XG.r)(BB.nativeEvent) ? HG() : CG)
            },
            onPointerUp: wB,
            onPointerLeave: wB,
            disabled: EB,
            children: [AB && aB && !EB && !hB && (0, MB.jsx)(wG.c, {
              className: "CraftShortcutGlyph",
              glyph: aB
            }), (0, MB.jsx)("div", {
              ref: iB,
              className: "DoCraftItem",
              onPointerEnter: () => {
                OO.current = !0, null === NB || void 0 === NB || NB(!0, vG(yB, UB))
              },
              onPointerLeave: () => {
                OO.current = !1, null === NB || void 0 === NB || NB(!1)
              },
              children: (0, MB.jsx)(QG.c, {
                itemName: yB,
                amount: lB
              })
            })]
          }), (0, MB.jsxs)(bG, {
            ref: cB,
            className: "DoCraftAllButton",
            onPointerDown: BB => {
              gB((0, JG.A)(BB), !0, !1)
            },
            disabled: EB,
            children: [(0, MB.jsx)("span", {
              className: "CraftAllLabel",
              children: fB("general:craftAll")
            }), dB > 0 && (0, MB.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", eG(dB)]
            })]
          })]
        })]
      })
    }

    function OY(BB) {
      let {
        selectedIdx: OB,
        hidden: GB
      } = BB;
      const YB = (0, DG.s)(),
        QB = (0, DB.useRef)(null);
      return (0, DB.useLayoutEffect)((() => {
        const BB = QB.current,
          YB = null === BB || void 0 === BB ? void 0 : BB.parentElement;
        if (!YB || !BB) return;
        const DB = YB.querySelector(".CraftableItems"),
          oB = () => {
            var QB, oB;
            if (GB) return void(BB.style.opacity = "0");
            const jB = null === DB || void 0 === DB ? void 0 : DB.children[OB],
              yB = null === (QB = null !== (oB = null === jB || void 0 === jB ? void 0 : jB.querySelector(".InvenItem")) && void 0 !== oB ? oB : jB) || void 0 === QB ? void 0 : QB.getBoundingClientRect();
            if (!yB || 0 === yB.width) return void(BB.style.opacity = "0");
            const JB = YB.getBoundingClientRect();
            BB.style.opacity = "1", BB.style.width = `${yB.width}px`, BB.style.height = `${yB.height}px`, BB.style.transform = `translate(${yB.left-JB.left+YB.scrollLeft}px, ${yB.top-JB.top+YB.scrollTop}px)`
          };
        oB();
        const jB = new MutationObserver(oB),
          yB = new ResizeObserver(oB);
        return yB.observe(YB), DB && (jB.observe(DB, {
          childList: !0,
          subtree: !0
        }), yB.observe(DB)), () => {
          jB.disconnect(), yB.disconnect()
        }
      }), [OB, GB]), (0, MB.jsx)("div", {
        ref: QB,
        className: AG()("SelectionReticle", {
          Secondary: YB
        })
      })
    }

    function GY(BB, OB, GB) {
      return BB ? (0, IG.c)(FG.h, BB) ? YY(BB, OB, GB) : BB : GB("classicGame:handCrafting")
    }

    function YY(BB, OB, GB) {
      var YB;
      const DB = null === (YB = OB[BB]) || void 0 === YB ? void 0 : YB.displayName;
      if ("string" === typeof DB) return GB(DB);
      const QB = JB.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(DB) ? DB.map((BB => {
        if ("string" === typeof BB) return BB;
        if ("translationKey" in BB) return GB(BB.translationKey, (0, HB.v)(BB.params, QB));
        if ("str" in BB) {
          if ("string" === typeof BB.str) return BB.str;
          if ("translationKey" in BB.str) return GB(BB.str.translationKey, (0, HB.v)(BB.str.params, QB))
        }
        return ""
      })).join("") : DB && "translationKey" in DB ? GB(DB.translationKey, (0, HB.v)(DB.params, QB)) : BB
    }

    function DY(BB, OB) {
      return BB === OB || null !== BB && null !== OB && BB.name === OB.name && BB.HM === OB.HM
    }

    function QY(BB) {
      var OB, GB, YB;
      let {
        show: QB,
        onCraft: oB,
        dispatchSelectedCraftable: jB,
        selectedCraftable: yB,
        craftingStation: PB,
        setHovered: zB
      } = BB;
      const {
        t: lB
      } = (0, HB.H)(), [pB, qB] = (0, DB.useState)(""), [ZB, NB] = (0, DB.useState)(0);
      (0, DB.useEffect)((() => {
        QB || (qB(""), NB((BB => BB + 1)))
      }), [QB]);
      const [RB, WB] = (0, DB.useState)(PB);
      RB !== PB && (WB(PB), "" !== pB && (qB(""), NB((BB => BB + 1))));
      const AB = (0, DB.useRef)(null),
        VB = (0, DB.useRef)(null),
        SB = (0, rG.l)(),
        nB = SB.showing && "recipe" === SB.kind,
        [UB, fB] = (0, DB.useState)(0),
        dB = null !== PB && void 0 !== PB ? PB : null,
        KB = (0, DB.useRef)(null),
        uB = BB => {
          return !((OB = KB.current) === (GB = BB) || null !== OB && null !== GB && OB.station === GB.station && DY(OB.recipe, GB.recipe)) && (KB.current = BB, JB.gameBridge.send("focusCrafting", BB), !0);
          var OB, GB
        };
      uB(QB ? {
        station: dB,
        recipe: (null === (OB = KB.current) || void 0 === OB ? void 0 : OB.station) === dB ? KB.current.recipe : null
      } : null);
      let mB = JB.gameBridge.latest("crafting");
      const IB = (0, kB.g)("itemInfo"),
        FB = "" !== pB.trim(),
        iB = (0, TG.B)(),
        LB = (0, TG.z)(),
        gB = (0, TG.C)(),
        rB = function(BB, OB) {
          const [GB, YB] = (0, DB.useState)(!1);
          (0, DB.useEffect)((() => {
            if (!BB) return void YB(!1);
            const OB = setTimeout((() => {
              YB(!0)
            }), 0);
            return () => {
              clearTimeout(OB)
            }
          }), [BB]);
          const QB = BB && GB,
            oB = (0, DB.useRef)({
              station: OB,
              at: new Map
            });
          return (oB.current.station !== OB || !QB && oB.current.at.size > 0) && (oB.current = {
            station: OB,
            at: new Map
          }), QB ? oB.current.at : null
        }(QB, PB);
      let XB = mB.recipes.filter((BB => {
        let {
          listed: OB
        } = BB;
        return OB
      }));
      if (FB) {
        const BB = [];
        for (const OB of mB.recipes) {
          var wB;
          const GB = null !== (wB = LB.get(OB.name)) && void 0 !== wB && wB.hideIngredients ? [] : OB.requires.flatMap((BB => {
              let {
                items: OB
              } = BB;
              return OB.flatMap((BB => [BB, YY(BB, IB, lB)]))
            })),
            YB = hG(pB, [OB.name, YY(OB.name, IB, lB)], GB);
          null !== YB && BB.push({
            item: OB,
            rank: YB
          })
        }
        BB.sort(((BB, OB) => BB.rank - OB.rank)), XB = BB.map((BB => {
          let {
            item: OB
          } = BB;
          return OB
        }))
      } else {
        if (rB && rB.size > 0) {
          const BB = mB.recipes.filter((BB => !BB.listed && rB.has(sG(BB))));
          XB = XB.concat(BB)
        }
        XB = (0, TG.k)(XB, iB, LB, gB), rB && (XB = (0, TG.h)(XB, rB, sG))
      }
      const EB = BB => XB.find((OB => sG(OB) === BB)),
        cB = `${PB}|${pB}`,
        [hB, aB] = (0, DB.useState)(null),
        eB = (null === hB || void 0 === hB ? void 0 : hB.context) === cB ? hB.key : null,
        TB = yB ? sG(yB) : null,
        bB = null !== (GB = null !== (YB = EB(TB)) && void 0 !== YB ? YB : EB(eB)) && void 0 !== GB ? GB : XB[0],
        CB = bB ? sG(bB) : null,
        vB = bB ? {
          name: bB.name,
          HM: bB.HM
        } : null;
      QB && uB({
        station: dB,
        recipe: vB
      }) && (mB = JB.gameBridge.latest("crafting")), CB !== TB && CB !== eB && aB(CB ? {
        context: cB,
        key: CB
      } : null), (0, DB.useEffect)((() => () => {
        KB.current = null, JB.gameBridge.send("focusCrafting", null)
      }), []);
      const sB = DY(mB.detail, vB) ? mB.detail : null,
        xB = null !== sB && !sB.roomForOne,
        tB = XB.findIndex((BB => sG(BB) === sG(bB))),
        BO = () => VB.current ? (0, gG.c)(VB.current) : null,
        OO = (0, DB.useRef)(null),
        GO = (0, DB.useRef)(0);
      GO.current++;
      const YO = GO.current;
      (0, DB.useEffect)((() => {
        const BB = OO.current;
        if (!BB || YO <= BB.afterRender) return;
        if (OO.current = null, BB.key !== CB) return;
        const OB = BO();
        var GB;
        null !== OB && void 0 !== OB && OB.press("primary") && !BB.sJ && (null === (GB = OB.release) || void 0 === GB || GB.call(OB))
      }));
      const DO = BB => {
          const OB = {
            name: BB.name,
            HM: BB.HM
          };
          return {
            choose: () => {
              jB(OB), (0, YG.n)(VB.current)
            },
            craft: () => {
              var BB, GB;
              return jB(OB), sG(OB) !== sG(bB) ? (OO.current = {
                key: sG(OB),
                sJ: !0,
                afterRender: GO.current
              }, !0) : null !== (BB = null === (GB = BO()) || void 0 === GB ? void 0 : GB.press("primary")) && void 0 !== BB && BB
            },
            stopCraft: () => {
              var BB, OB;
              OO.current ? OO.current.sJ = !1 : null === (BB = BO()) || void 0 === BB || null === (OB = BB.release) || void 0 === OB || OB.call(BB)
            },
            refuse: () => {
              sG(OB) !== sG(bB) && jB(OB), fB((BB => BB + 1))
            }
          }
        },
        QO = () => {
          var BB, OB, GB;
          (0, YG.n)(null !== (BB = null === (OB = AB.current) || void 0 === OB || null === (GB = OB.querySelector(".CraftableItems")) || void 0 === GB ? void 0 : GB.children[tB]) && void 0 !== BB ? BB : null)
        },
        oO = XB.map(sG).join("|"),
        jO = (0, DB.useRef)(oO);
      return (0, DB.useEffect)((() => {
        jO.current !== oO && (jO.current = oO, nB && tB >= 0 && (0, rG.j)() && QO())
      })), (0, MB.jsxs)("div", {
        className: "Craftables",
        children: [(0, MB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: GY(PB, IB, lB)
        }), (0, MB.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, MB.jsx)(LG.b, {
            className: "CraftingSearch",
            placeholderText: lB("general:searchRecipes"),
            defaultValue: pB,
            maxLength: 100,
            onValueChange: BB => {
              qB(BB)
            },
            blurOnEnter: !0
          }, ZB), 0 === XB.length && FB && (0, MB.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: lB("general:noRecipesMatchSearch")
          }), XB.length > 0 && (0, MB.jsxs)(MB.Fragment, {
            children: [(0, MB.jsxs)("div", {
              ref: AB,
              className: "CraftablesLeftSide",
              children: [(0, MB.jsx)(iG.b, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(XB.map((BB => {
                  let {
                    name: OB,
                    HM: GB,
                    haveIngredients: YB
                  } = BB;
                  return {
                    name: OB,
                    HM: GB,
                    haveIngredients: YB
                  }
                })))],
                observing: QB,
                children: XB.map((BB => {
                  const {
                    name: OB,
                    HM: GB,
                    haveIngredients: YB
                  } = BB, DB = sG(BB);
                  return (0, MB.jsx)(xG, {
                    recipeId: DB,
                    itemName: OB,
                    onClick: () => {
                      jB({
                        name: OB,
                        HM: GB
                      })
                    },
                    isSelected: sG(bB) === DB,
                    haveIngredients: YB,
                    craftable: YB && !LB.has(OB) && !(sG(bB) === DB && xB),
                    setHovered: zB,
                    padActions: DO(BB),
                    marked: iB.has(OB),
                    lock: LB.get(OB),
                    itemInfo: IB
                  }, DB)
                }))
              }), (0, MB.jsx)(OY, {
                selectedIdx: tB,
                hidden: nB && SB.steppingSlots
              })]
            }), (0, MB.jsx)(BY, {
              show: QB,
              recipeItem: bB,
              detail: sB,
              onCraft: oB,
              setHovered: zB,
              craftButtonRef: VB,
              onPadBack: QO,
              showPadShortcut: nB,
              refusedCount: UB,
              lock: LB.get(bB.name),
              itemInfo: IB
            })]
          })]
        })]
      })
    }
    var oY = GB(34813),
      jY = GB(3708),
      yY = GB(2211),
      JY = GB(9346);
    class MY {
      constructor(BB, OB, GB) {
        this.commit = BB, this.delayMs = OB, this.defers = GB, this.pending = null, this.timer = void 0, this.sJ = !1, this.flush = () => {
          clearTimeout(this.timer);
          const BB = this.pending;
          null !== BB && (this.pending = null, this.commit(BB))
        }
      }
      type(BB) {
        this.pending = BB, clearTimeout(this.timer), this.sJ || this.defers() ? this.sJ || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(BB) {
        var OB;
        return null !== (OB = this.pending) && void 0 !== OB ? OB : BB
      }
      isHeld() {
        return this.sJ
      }
      setHeld(BB) {
        this.sJ = BB, BB || this.flush()
      }
    }

    function PY(BB) {
      return null === BB ? "creativeInventory:all" : `creativeInventory:${BB}`
    }

    function zY(BB) {
      let {
        category: OB
      } = BB;
      return null === OB ? (0, MB.jsx)(ZB.b, {
        name: "layer-group"
      }) : (0, MB.jsx)(QG.c, {
        itemName: oY.creativeItemCategoryIcons[OB],
        amount: 0
      })
    }

    function lY(BB) {
      let {
        labelKey: OB,
        isSelected: GB,
        onSelect: YB,
        setHovered: DB,
        children: QB
      } = BB;
      return (0, MB.jsx)("div", {
        className: AG()("CreativeCategoryTab", {
          Selected: GB
        }),
        onClick: YB,
        onPointerEnter: BB => {
          (0, JG.t)(BB) || DB(!0, {
            name: {
              translationKey: OB
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          DB(!1)
        },
        children: QB
      })
    }

    function pY(BB) {
      let {
        categories: OB,
        selectedCategory: GB,
        onSelect: YB
      } = BB;
      const {
        t: QB
      } = (0, HB.H)(), [oB, jB] = (0, DB.useState)(!1), yB = (0, DB.useRef)(null), JB = (0, DB.useCallback)((() => {
        jB(!1)
      }), []);
      return (0, yY.c)(yB, JB), (0, MB.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: yB,
        children: [(0, MB.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            jB(!oB)
          },
          children: [(0, MB.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, MB.jsx)(zY, {
              category: GB
            })
          }), (0, MB.jsx)("span", {
            children: QB(PY(GB))
          }), (0, MB.jsx)(ZB.b, {
            name: oB ? "caret-up" : "caret-down"
          })]
        }), oB && (0, MB.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: OB.map((BB => (0, MB.jsxs)("div", {
            className: AG()("CreativeCategoryDropdownOption", {
              Selected: GB === BB
            }),
            onClick: () => {
              YB(BB), jB(!1)
            },
            children: [(0, MB.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, MB.jsx)(zY, {
                category: BB
              })
            }), (0, MB.jsx)("span", {
              children: QB(PY(BB))
            })]
          }, null !== BB && void 0 !== BB ? BB : "all")))
        })]
      })
    }
    const qY = (0, DB.memo)((function(BB) {
      let {
        creativeScrollDiv: OB,
        playerInvenNumSlots: GB,
        getSetHoveringForIdx: YB,
        getPointerDownForIdx: QB,
        getPointerUpForIdx: oB,
        creativeSearchVal: jB,
        setCreativeSearchVal: PB,
        creativeCategory: zB,
        setCreativeCategory: lB,
        show: pB
      } = BB;
      const {
        t: qB
      } = (0, HB.H)(), NB = (0, kB.g)("creativeVisibility"), {
        userContext: RB
      } = (0, SB.d)(), WB = (0, yB.g)("canUseDevCreativeItems"), AB = RB.playerHasRank("developer") || !!WB, VB = (0, DB.useMemo)((() => NY("", NB, AB)), [NB, AB]);
      (0, DB.useEffect)((() => {
        const BB = (0, oY.creativeItemIds)();
        JB.gameBridge.send("prewarmCreativeIcons", VB.filter((OB => !(0, oY.showOnlyInCreativeCategory)(BB[OB]))).slice(0, 63).map((OB => String(BB[OB]))))
      }), [VB]);
      const nB = (0, DB.useMemo)((() => {
          const BB = (0, oY.creativeItemIds)(),
            OB = new Set(VB.map((OB => (0, oY.creativeCategoryOf)(BB[OB]))));
          return oY.creativeItemCategories.filter((BB => OB.has(BB)))
        }), [VB]),
        fB = null !== zB && nB.includes(zB) ? zB : null,
        dB = (0, DB.useMemo)((() => "" === jB ? VB : NY(jB, NB, AB)), [VB, jB, NB, AB]),
        KB = (0, DB.useMemo)((() => {
          const BB = (0, oY.creativeItemIds)();
          return null !== fB ? dB.filter((OB => (0, oY.creativeCategoryOf)(BB[OB]) === fB)) : "" === jB ? dB.filter((OB => !(0, oY.showOnlyInCreativeCategory)(BB[OB]))) : dB
        }), [dB, fB, jB]),
        uB = YB();

      function mB(BB) {
        lB(BB), OB.current.scrollTop = 0
      }
      const IB = [null, ...nB],
        {
          isTouchScreen: FB
        } = (0, wB.o)(["isTouchScreen"]),
        iB = !FB,
        LB = (0, DB.useRef)(null),
        [gB, rB] = (0, DB.useState)(0);
      (0, DB.useEffect)((() => {
        const BB = LB.current;
        if (!BB) return;
        const OB = new ResizeObserver((BB => {
          rB(BB[0].contentRect.height)
        }));
        return OB.observe(BB), () => {
          OB.disconnect()
        }
      }), [iB]);
      const XB = (0, DB.useRef)(null),
        EB = (0, DB.useCallback)((function BB() {
          "up" === XB.current ? OB.current.scrollTop -= 10 : "down" === XB.current && (OB.current.scrollTop += 10), XB.current && requestAnimationFrame(BB)
        }), [OB]),
        cB = (0, DB.useCallback)((function(BB) {
          XB.current || (XB.current = BB, EB())
        }), [EB]);

      function hB() {
        XB.current = null
      }
      const aB = (0, DB.useRef)({
        creativeSearchVal: jB,
        setCreativeSearchVal: PB
      });
      aB.current = {
        creativeSearchVal: jB,
        setCreativeSearchVal: PB
      };
      const [eB] = (0, DB.useState)((() => new MY((BB => {
        aB.current.setCreativeSearchVal(BB)
      }), 250, DG.j))), TB = BB => {
        var GB;
        null === (GB = OB.current) || void 0 === GB || GB.classList.toggle("CreativeItemSlotsStale", BB)
      };
      (0, UB.f)(JY.d, (BB => {
        eB.setHeld(BB), BB || TB(!1)
      })), (0, DB.useEffect)((() => eB.flush), [eB]);
      const bB = (0, MB.jsx)(LG.b, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: jB,
          maxLength: 1e4,
          onValueChange: (BB, OB) => {
            "" === eB.getTyped(aB.current.creativeSearchVal) && "" !== BB && lB(null), eB.type(BB), TB(eB.isHeld())
          },
          onEnter: eB.flush,
          blurOnEnter: !0
        }),
        CB = (0, MB.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [FB && (0, MB.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, MB.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                cB("up")
              },
              onPointerLeave: hB,
              onPointerUp: hB,
              children: (0, MB.jsx)(ZB.b, {
                name: "arrow-up"
              })
            }), (0, MB.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                cB("down")
              },
              onPointerLeave: hB,
              onPointerUp: hB,
              children: (0, MB.jsx)(ZB.b, {
                name: "arrow-up"
              })
            })]
          }), (0, MB.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: OB,
            children: [0 === KB.length && "" !== jB && (0, MB.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: qB("general:noResults")
            }), (0, MB.jsx)(iG.b, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [jB, fB],
              observerRoot: "CreativeItemSlots",
              observing: pB,
              children: KB.map((BB => {
                const OB = GB + BB;
                return (0, MB.jsx)(dG.c, {
                  idx: OB,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: YB(OB),
                  pointerDown: QB(OB),
                  pointerUp: oB(OB)
                }, OB)
              }))
            })]
          })]
        });
      return (0, MB.jsxs)("div", {
        className: AG()("CreativeItemSlotsWrapper", iB ? "WithRail" : "WithDropdown"),
        children: [iB && (0, MB.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: LB,
          style: {
            "--rail-height": gB > 0 ? `${gB}px` : void 0,
            "--tab-rows": Math.ceil(IB.length / 2)
          },
          children: IB.map((BB => (0, MB.jsx)(lY, {
            labelKey: PY(BB),
            isSelected: fB === BB,
            onSelect: () => {
              mB(BB)
            },
            setHovered: uB,
            children: (0, MB.jsx)(zY, {
              category: BB
            })
          }, null !== BB && void 0 !== BB ? BB : "all")))
        }), (0, MB.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, MB.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [bB, !iB && (0, MB.jsx)(pY, {
              categories: IB,
              selectedCategory: fB,
              onSelect: mB
            })]
          }), CB]
        })]
      })
    }));

    function ZY(BB) {
      var OB;
      return null !== (OB = (0, jY.g)(BB)) && void 0 !== OB ? OB : ""
    }

    function NY(BB, OB, GB) {
      let {
        publicLobby: YB,
        shownInGame: DB
      } = OB;
      const QB = BB.toLowerCase(),
        oB = (0, oY.creativeItemIds)(),
        jB = BB => {
          var OB;
          const QB = oB[BB];
          return !(0, oY.itemIsDisabled)(QB, YB, null === (OB = DB[ZY(QB)]) || void 0 === OB || OB, GB)
        };
      if ("" === QB) return oB.map(((BB, OB) => OB)).filter((BB => !(0, oY.showOnlyInCreativeSearch)(oB[BB]))).filter(jB);
      const yB = [];
      for (let JB = 0; JB < oB.length; JB++) ZY(oB[JB]).toLowerCase().includes(QB) && yB.push(JB);
      yB.sort(((BB, OB) => {
        const GB = ZY(oB[BB]).toLowerCase(),
          YB = ZY(oB[OB]).toLowerCase();
        return GB.indexOf(QB) - YB.indexOf(QB)
      }));
      for (const [JB, MB] of(0, oY.creativeAltNames)())
        for (const BB of MB)
          if (BB.toLowerCase().includes(QB)) {
            const BB = oB.indexOf(JB);
            yB.includes(BB) || yB.push(BB)
          } return yB.filter(jB)
    }
    var RY = GB(37523),
      WY = GB(641);

    function AY(BB) {
      return BB > WY.p
    }

    function VY(BB) {
      const OB = BB / 2,
        GB = [];
      for (let YB = 0; YB < OB / 6; YB++)
        for (let BB = 0; BB < 12; BB++) {
          const DB = BB < 6 ? 0 : OB;
          GB.push(DB + 6 * YB + BB % 6)
        }
      return GB
    }

    function SY(BB) {
      let {
        numSlots: OB,
        renderSlot: GB
      } = BB;
      const {
        t: YB
      } = (0, HB.H)(), QB = (0, DB.useRef)(null);
      var oB;
      return oB = QB, (0, DB.useLayoutEffect)((() => {
        var BB;
        const OB = null === (BB = oB.current) || void 0 === BB ? void 0 : BB.closest(".InvenBody");
        if (!OB) return;
        const GB = () => {
          OB.style.zoom = "";
          const BB = parseFloat(getComputedStyle(document.documentElement).fontSize),
            GB = window.innerWidth - 2 * BB,
            YB = OB.getBoundingClientRect().width;
          YB > GB && (OB.style.zoom = "" + GB / YB)
        };
        return GB(), window.addEventListener("resize", GB), () => {
          window.removeEventListener("resize", GB), OB.style.zoom = ""
        }
      }), [oB]), (0, MB.jsxs)("div", {
        ref: QB,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, MB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: YB("doubleChest:title")
        }), (0, MB.jsx)("div", {
          className: "GridItemSlots",
          children: VY(OB).map((BB => GB(BB)))
        })]
      })
    }

    function nY(BB) {
      let {
        ZO: OB,
        initialPasskey: GB
      } = BB;
      const {
        t: YB
      } = (0, HB.H)(), [QB, oB] = (0, DB.useState)(GB), [jB, yB] = (0, DB.useState)(GB);
      (0, DB.useEffect)((() => {
        oB(GB), yB(GB)
      }), [...OB]);
      return (0, MB.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, MB.jsx)("div", {
          className: "SmallTextBold",
          children: YB("ironChest:currentPasskey", {
            currentPasskey: QB.join("")
          })
        }), (0, MB.jsx)(nG, {
          className: "IronChestPasskeyEditor",
          xy: jB,
          onPasskeyUpdated: yB,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            JB.gameBridge.send("changeIronChestPasskey", {
              pos: [...OB],
              xy: [...jB]
            }), oB([...jB])
          }
        })]
      })
    }

    function UY(BB, OB) {
      return "Iron" === BB.type && BB.ironChest.ownerDbId === OB
    }

    function fY(BB) {
      let {
        variation: OB,
        canCraft: GB,
        show: YB,
        creativeMounted: DB,
        specialItemRef: QB,
        draggedInfo: oB,
        getSetHovering: jB,
        getPointerDownForIdx: yB,
        getPointerUpForIdx: JB,
        enchantingTablePosition: PB,
        enchantingTableBlockName: zB,
        selectedCraftable: lB,
        dispatchSelectedCraftable: pB,
        creativeScrollDiv: qB,
        creativeSearchVal: ZB,
        setCreativeSearchVal: NB,
        creativeCategory: RB,
        setCreativeCategory: WB,
        onCraft: AB
      } = BB;
      const {
        userContext: VB
      } = (0, SB.d)(), {
        t: nB
      } = (0, HB.H)(), UB = (0, kB.f)("inventory", (BB => BB.chest)), fB = (0, kB.f)("inventory", (BB => BB.player.length)), dB = (0, kB.f)("inventory", (BB => BB.creative));
      if (0 === fB) return null;
      let KB, uB;
      const mB = BB => {
          const OB = fB + BB;
          return (0, MB.jsx)(dG.c, {
            idx: OB,
            draggedInfo: oB,
            specialItemInfo: QB.current,
            setHovered: jB(OB),
            pointerDown: yB(OB),
            pointerUp: JB(OB)
          }, OB)
        },
        IB = UB ? (0, RY.e)(UB.type) : null;
      if (IB) KB = AG()("InvenLeftSideChestCustom", IB.className), uB = (0, MB.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: IB.render({
          ZO: UB.pos,
          renderSlot: mB
        })
      });
      else if (UB) {
        const BB = UB.pos,
          OB = "Iron" === UB.type || "Moonstone" === UB.type ? UB.type : "Standard";
        KB = `InvenLeftSideChest${OB}`;
        const GB = AY(UB.numSlots);
        uB = (0, MB.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [UY(UB, VB.whamm) && (0, MB.jsx)(nY, {
            ZO: BB,
            initialPasskey: UB.ironChest.xy
          }), GB && (0, MB.jsx)(SY, {
            numSlots: UB.numSlots,
            renderSlot: mB
          }), !GB && (0, MB.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, MB.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: nB("Moonstone" === OB ? "item:moonstoneChest" : "Iron" === OB ? "item:ironChest" : "item:chest")
            }), (0, MB.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(UB.numSlots).fill(0).map(((BB, OB) => mB(OB)))
            })]
          })]
        })
      } else if (!dB || OB && GB)
        if (GB && "Enchanting Table" === OB) KB = `InvenLeftSide${(null!==zB&&void 0!==zB?zB:"").replace(/ /gi,"")}`, uB = (0, MB.jsx)(KG, {
          specialItemInfo: QB.current,
          setHovered: jB,
          pointerDown: yB(PG.e),
          pointerUp: JB(PG.e),
          enchantingTablePosition: PB,
          enchantingTableBlockName: zB
        });
        else if (GB && "Salvaging Table" === OB) KB = "InvenLeftSideSalvagingTable", uB = (0, MB.jsx)(mG, {
        specialItemInfo: QB.current,
        setSpecialItemInfo: BB => {
          QB.current = BB
        },
        setHovered: jB,
        pointerDown: yB(PG.e),
        pointerUp: JB(PG.e)
      });
      else {
        if (!GB) return null;
        KB = `InvenLeftSide${(null!==OB&&void 0!==OB?OB:"HandCrafting").replace(/ /gi,"")}`, uB = (0, MB.jsx)(QY, {
          show: YB,
          onCraft: AB,
          craftingStation: OB,
          selectedCraftable: lB,
          dispatchSelectedCraftable: pB,
          setHovered: jB()
        })
      } else KB = "InvenLeftSideCreative", uB = DB ? (0, MB.jsx)(qY, {
        creativeScrollDiv: qB,
        playerInvenNumSlots: fB,
        getSetHoveringForIdx: jB,
        getPointerDownForIdx: yB,
        getPointerUpForIdx: JB,
        creativeSearchVal: ZB,
        setCreativeSearchVal: NB,
        creativeCategory: RB,
        setCreativeCategory: WB,
        show: YB
      }) : null;
      const FB = !!UB || GB && !!OB;
      return (0, MB.jsx)("div", {
        className: `InvenLeftSide ${KB}`,
        "data-pad-inventory-start": FB ? "" : void 0,
        children: uB
      })
    }
    var kY = GB(633),
      dY = GB(20707),
      KY = GB(20714),
      uY = GB(20722);
    const mY = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: GB(20726)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: KY
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: uY
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: GB(20728)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: dY
      }
    };

    function IY(BB) {
      const {
        sprite: OB,
        image: GB
      } = mY[BB];
      return TO(OB, hO.h.ITEM, GB)
    }

    function FY(BB) {
      let {
        draggedInfo: OB,
        specialItemInfo: GB,
        craftFlyAnims: YB,
        getSetHovering: DB,
        getPointerDownForIdx: QB,
        getPointerUpForIdx: oB,
        variation: jB,
        canCraft: yB,
        isNewSlot: JB
      } = BB;
      const PB = (0, kB.f)("inventory", (BB => BB.player.length));
      return 0 === PB ? null : (0, MB.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, MB.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(kY.c.length).fill(0).map(((BB, zB) => {
            const lB = PB - kY.c.length + zB;
            return (0, MB.jsx)(dG.c, {
              idx: lB,
              draggedInfo: OB,
              specialItemInfo: GB,
              craftFlyHoldbackInfo: (0, MG.h)(YB, lB),
              setHovered: DB(lB),
              pointerDown: QB(lB),
              pointerUp: oB(lB),
              defaultIconB64: IY(kY.c[zB]),
              variation: yB ? jB : void 0,
              showNewDot: JB(lB)
            }, lB)
          }))
        }), (0, MB.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(PB - 10 - kY.c.length).fill(0).map(((BB, zB) => {
            const lB = PB - kY.c.length - zB - 1;
            return (0, MB.jsx)(dG.c, {
              idx: lB,
              draggedInfo: OB,
              specialItemInfo: GB,
              craftFlyHoldbackInfo: (0, MG.h)(YB, lB),
              setHovered: DB(lB),
              pointerDown: QB(lB),
              pointerUp: oB(lB),
              variation: yB ? jB : void 0,
              showNewDot: JB(lB)
            }, lB)
          }))
        })]
      })
    }
    var iY = GB(37529),
      LY = GB(37533);

    function gY(BB) {
      const {
        e: OB,
        idx: GB
      } = BB, YB = (0, JG.m)(BB.readInventory(), GB), DB = (0, JG.p)(OB);
      GB === PG.d ? function(BB, OB) {
        const {
          draggedInfoRef: GB,
          removeItem: YB,
          removeDraggedInfoRef: DB,
          close: QB
        } = BB;
        if (GB.current) {
          const BB = OB && GB.current.amount || 1;
          YB(GB.current.idx, BB, !0) && (GB.current.amount -= BB, GB.current.amount <= 0 && DB())
        } else OB && QB()
      }(BB, DB) : GB === PG.e ? function(BB, OB) {
        const {
          e: GB,
          draggedInfoRef: YB,
          specialItemRef: DB,
          moveAmtIntoSlot: QB,
          removeDraggedInfoRef: oB
        } = BB;
        if ((0, JG.A)(GB) && DB.current) DB.current = null;
        else if (YB.current && DB.current && (YB.current.idx === DB.current.idx || (0, LY.e)(YB.current, DB.current)) && YB.current.amount > 0 && DB.current.amount > 0 && DB.current.amount < VG.f.maxItemStackSize)
          if (YB.current.idx === DB.current.idx) {
            if (OB) {
              const BB = Math.min(YB.current.amount, VG.f.maxItemStackSize - DB.current.amount);
              DB.current.amount += BB, YB.current.amount -= BB
            } else YB.current.amount--, DB.current.amount++;
            YB.current.amount <= 0 && oB()
          } else if (OB) {
          const BB = Math.min(YB.current.amount, VG.f.maxItemStackSize - DB.current.amount);
          QB(DB.current.idx, BB) && (DB.current.amount += BB)
        } else {
          QB(DB.current.idx, 1) && DB.current.amount++
        } else if (YB.current && !DB.current && !OB && YB.current.amount > 0) YB.current.amount--, DB.current = {
          idx: YB.current.idx,
          name: YB.current.name,
          attributes: YB.current.attributes,
          amount: 1
        }, YB.current.amount <= 0 && oB();
        else {
          const BB = YB.current;
          YB.current = DB.current, DB.current = BB
        }
      }(BB, DB) : (0, JG.A)(OB) ? function(BB, OB) {
        var GB, YB;
        const {
          idx: DB,
          draggedInfoRef: QB,
          specialItemRef: oB,
          canCraft: jB,
          variation: yB,
          swapSlots: JB,
          moveIntoSlots: MB
        } = BB;
        if (!OB) return;
        let PB = OB.amount;
        DB === (null === (GB = QB.current) || void 0 === GB ? void 0 : GB.idx) && (PB = QB.current.amount <= 0 ? 0 : OB.amount - QB.current.amount);
        DB === (null === (YB = oB.current) || void 0 === YB ? void 0 : YB.idx) && (PB = oB.current.amount <= 0 ? 0 : OB.amount - oB.current.amount);
        if (0 === PB) return;
        const zB = BB.readInventory(),
          lB = zB.player.length,
          pB = zB.chest,
          qB = lB - kY.c.length,
          ZB = () => {
            if (!(0, DG.j)()) return void MB(10, qB, DB, PB);
            const BB = BB => {
              const GB = (0, JG.m)(zB, BB);
              return GB ? {
                amount: GB.amount,
                stacksWithMoved: (0, LY.e)(GB, OB)
              } : null
            };
            for (const OB of ((BB, OB, GB, YB, DB) => {
                const QB = [];
                let oB = YB;
                if (null !== YB) {
                  let jB = 0;
                  for (let YB = OB; YB < GB; YB++) {
                    const OB = BB(YB);
                    null !== OB && void 0 !== OB && OB.stacksWithMoved && null !== OB.amount && OB.amount > 0 && (jB += Math.max(0, DB - OB.amount))
                  }
                  const yB = Math.min(YB, jB);
                  if (yB > 0 && (QB.push({
                      start: OB,
                      end: GB,
                      amount: yB
                    }), oB = YB - yB), oB <= 0) return QB
                }
                for (let jB = GB - 1; jB >= OB; jB--)
                  if (null === BB(jB)) {
                    QB.push({
                      start: jB,
                      end: jB + 1,
                      amount: oB
                    });
                    break
                  } return QB
              })(BB, 10, qB, PB, VG.f.maxItemStackSize)) MB(OB.start, OB.end, DB, OB.amount)
          };
        if (!jB || "Enchanting Table" !== yB && "Salvaging Table" !== yB) {
          const GB = (0, fB.Ib)(OB.name),
            YB = GB ? (0, fB.Eb)(GB) : null;
          if (!kY.c.includes(GB) || DB !== YB && (0, JG.n)(zB, BB.itemInfo, YB, DB))
            if (pB)
              if (DB < lB) {
                var NB, RB;
                const [BB, OB] = null !== (NB = null === (RB = (0, RY.e)(pB.type)) || void 0 === RB ? void 0 : RB.quickMoveRange) && void 0 !== NB ? NB : [0, pB.numSlots];
                MB(lB + BB, lB + OB, DB, PB)
              } else MB(0, lB - kY.c.length, DB, PB);
          else zB.creative ? DB < 10 ? ZB() : DB < lB ? MB(0, 10, DB, PB) : MB(0, lB - kY.c.length, DB, null !== OB.amount ? VG.f.maxItemStackSize : null) : DB < 10 ? ZB() : MB(0, 10, DB, PB);
          else DB < lB - kY.c.length || DB >= lB ? JB(YB, DB) : (MB(0, lB - kY.c.length, YB, PB), jG.b.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else oB.current = {
          idx: DB,
          name: OB.name,
          attributes: OB.attributes,
          amount: null !== OB.amount ? PB : 0
        }
      }(BB, YB) : BB.draggedInfoRef.current ? function(BB, OB, GB, YB) {
        const {
          draggedInfoRef: DB,
          specialItemRef: QB,
          moveAmtIntoSlot: oB,
          swapSlots: jB,
          removeItem: yB,
          removeDraggedInfoRef: JB
        } = BB, MB = BB.readInventory(), PB = DB.current.idx;
        if (GB && (OB === PB || (0, LY.e)(DB.current, GB)) && DB.current.amount > 0 && (0, JG.d)(GB) > 0 && (GB.amount < VG.f.maxItemStackSize || OB === PB)) YB ? GB.amount + DB.current.amount <= VG.f.maxItemStackSize || OB === PB ? oB(OB, DB.current.amount) : oB(OB, VG.f.maxItemStackSize - GB.amount) : oB(OB, 1);
        else if (DB.current.amount > 0 && !GB) oB(OB, YB ? DB.current.amount : 1);
        else if (YB || GB || 0 === DB.current.amount)
          if (MB.creative && !MB.chest && OB >= MB.player.length) {
            const BB = 0 === DB.current.amount ? 1 : DB.current.amount;
            yB(DB.current.idx, BB, !1) && JB()
          } else {
            var zB;
            const GB = (null === (zB = QB.current) || void 0 === zB ? void 0 : zB.idx) === OB;
            if (jB(OB, DB.current.idx)) {
              const YB = BB.readInventory(),
                oB = (0, JG.m)(YB, PB),
                jB = !YB.chest && YB.creative && DB.current.idx >= YB.player.length;
              if (oB && DB.current.idx !== OB && !jB) {
                let BB = (0, JG.d)(oB);
                GB && (BB -= QB.current.amount), DB.current = GB && 0 === BB ? null : {
                  idx: DB.current.idx,
                  name: oB.name,
                  attributes: oB.attributes,
                  amount: BB
                }
              } else JB()
            }
          }
        else oB(OB, 1)
      }(BB, GB, YB, DB) : function(BB, OB, GB, YB) {
        var DB;
        const {
          draggedInfoRef: QB,
          specialItemRef: oB
        } = BB;
        if (!GB) return;
        let jB = (0, JG.d)(GB);
        const yB = (null === (DB = oB.current) || void 0 === DB ? void 0 : DB.idx) === OB;
        yB && (jB -= oB.current.amount);
        YB || (jB = Math.ceil(jB / 2));
        QB.current = yB && 0 === jB ? null : {
          idx: OB,
          name: GB.name,
          attributes: GB.attributes,
          amount: jB
        }
      }(BB, GB, YB, DB)
    }
    var rY = GB(2697);

    function XY(BB, OB, GB) {
      return Math.round((OB + BB) * GB) / GB - OB
    }
    const wY = new WeakMap;

    function EY(BB) {
      const OB = window.devicePixelRatio || 1,
        GB = wY.get(BB);
      if (GB && GB.pixelRatio === OB && GB.width === window.innerWidth && GB.height === window.innerHeight) return GB;
      let YB = 0,
        DB = 0;
      const QB = BB.offsetParent;
      if (QB) {
        const BB = QB.getBoundingClientRect();
        YB = BB.left + QB.clientLeft, DB = BB.top + QB.clientTop
      }
      const oB = {
        left: YB,
        top: DB,
        pixelRatio: OB,
        width: window.innerWidth,
        height: window.innerHeight,
        halfRem: .5 * (0, rY.M)(document)
      };
      return wY.set(BB, oB), oB
    }

    function cY(BB, OB, GB) {
      const {
        left: YB,
        top: DB,
        pixelRatio: QB
      } = EY(BB);
      return `translate(${XY(OB,YB,QB)}px, ${XY(GB,DB,QB)}px)`
    }

    function hY(BB) {
      const {
        halfRem: OB
      } = EY(BB);
      return cY(BB, OB, OB)
    }

    function aY(BB, OB) {
      return !!OB && OB.name === BB.name
    }

    function eY() {
      return JB.gameBridge.latest("inventory")
    }

    function TY(BB, OB, GB) {
      return JB.gameBridge.send("removeInventoryItem", {
        slot: BB,
        amount: OB,
        drop: GB
      })
    }

    function bY(BB) {
      return (0, JG.j)(BB, JB.gameBridge.latest("itemInfo"), JB.gameBridge.latest("stationItems").enchantable)
    }

    function CY(BB) {
      let {
        show: OB,
        close: GB,
        canCraft: YB,
        variation: QB,
        inventoryItemsMoveable: oB,
        setCraftFlyAnims: jB
      } = BB;
      (0, kB.g)("itemInfo");
      const [yB, MB] = (0, DB.useState)(null), [PB, zB] = (0, DB.useState)(null), [lB, pB] = (0, DB.useState)(!1), qB = (0, DB.useRef)(null), ZB = (0, DB.useRef)(null), NB = (0, DB.useRef)(null), RB = (0, DB.useRef)(null), [WB, AB] = (0, DB.useReducer)((BB => BB + 1), 0), VB = (0, DB.useCallback)((() => {
        OB && AB()
      }), [OB, AB]), SB = (0, DB.useCallback)((() => {
        ZB.current = null, LB.current = null, VB()
      }), [VB]), nB = (0, DB.useCallback)(((BB, OB) => {
        jB((GB => GB.map((GB => "ingredient" === GB.kind ? GB : GB.WJ === BB ? {
          ...GB,
          WJ: OB,
          to: (0, JG.f)(OB)
        } : GB.WJ === OB ? {
          ...GB,
          WJ: BB,
          to: (0, JG.f)(BB)
        } : GB))))
      }), [jB]), UB = (0, DB.useCallback)(((BB, OB) => {
        const GB = XB.current;
        if (GB.x = BB, GB.y = OB, qB.current) !wB.current.isTouch || wB.current.itemBeingDragged && !LB.current ? (qB.current.style.transform = cY(qB.current, GB.x, GB.y), pB(wB.current.isTouch && !LB.current)) : (qB.current.style.transform = hY(qB.current), pB(!0));
        else if (RB.current) {
          const GB = RB.current;
          let YB = BB + 10,
            DB = OB + 10;
          const QB = GB.offsetWidth,
            oB = GB.offsetHeight;
          YB + QB > window.innerWidth && (YB = BB - QB - 10), DB + oB > window.innerHeight && (DB = OB - oB - 10), YB < 0 && (YB = 0), DB < 0 && (DB = 0), RB.current.style.transform = `translate(${YB}px, ${DB}px)`
        }
      }), []), dB = (0, DB.useCallback)((BB => (OB, GB, YB) => {
        if (MB(OB && void 0 !== BB ? BB : null), OB) {
          if (void 0 === BB && !GB) return void(0, iY.e)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== BB) {
            var DB;
            const OB = eY();
            let GB;
            if (GB = BB === PG.e ? NB.current ? (0, JG.m)(OB, NB.current.idx) : null : (0, JG.m)(OB, BB), !GB) return void zB(null);
            if ((null === (DB = NB.current) || void 0 === DB ? void 0 : DB.idx) === BB) {
              if (0 === (0, JG.d)(GB) - NB.current.amount) return void zB(null)
            }
            zB(bY(GB))
          } else zB({
            name: GB.name,
            desc: GB.desc,
            fontStyle: "normal"
          })
        } else zB(null);
        YB && setTimeout((() => {
          UB(YB.pageX, YB.pageY)
        }), 0)
      }), [UB]), KB = (0, DB.useCallback)(((BB, OB) => {
        const GB = JB.gameBridge.send("moveInventoryItem", {
          from: ZB.current.idx,
          to: BB,
          amount: OB
        });
        return GB ? (ZB.current.amount -= OB, ZB.current.amount <= 0 && SB()) : console.error("moveInventoryItem failed"), GB
      }), [SB]), uB = (0, DB.useCallback)(((BB, OB) => {
        const GB = NB.current,
          YB = null === GB || void 0 === GB ? void 0 : GB.idx;
        GB && (GB.idx = function(BB, OB, GB) {
          return BB === OB ? GB : BB === GB ? OB : BB
        }(YB, BB, OB));
        const DB = JB.gameBridge.send("swapInventorySlots", {
          a: BB,
          b: OB
        });
        return DB ? nB(BB, OB) : GB && (GB.idx = YB), DB
      }), [nB]), mB = (0, DB.useCallback)(((BB, OB, GB, YB) => {
        const DB = JB.gameBridge.send("quickMoveInventoryItem", {
          slot: GB,
          start: BB,
          end: OB,
          amount: YB
        });
        null !== DB && nB(GB, DB)
      }), [nB]), IB = (0, DB.useCallback)(((BB, OB) => {
        var DB;
        ((BB, OB, GB) => {
          const YB = BB - (GB - kY.c.length);
          return !(!OB || YB < 0 || YB >= kY.c.length) && (0, fB.Ib)(OB) !== kY.c[YB]
        })(OB, null === (DB = ZB.current) || void 0 === DB ? void 0 : DB.name, eY().player.length) || (gY({
          e: BB,
          idx: OB,
          readInventory: eY,
          itemInfo: JB.gameBridge.latest("itemInfo"),
          draggedInfoRef: ZB,
          specialItemRef: NB,
          moveAmtIntoSlot: KB,
          swapSlots: uB,
          moveIntoSlots: mB,
          removeItem: TY,
          removeDraggedInfoRef: SB,
          close: GB,
          canCraft: YB,
          variation: QB
        }), VB())
      }), [YB, GB, KB, mB, SB, uB, QB, VB]), FB = (0, DB.useRef)(0), iB = (0, DB.useRef)(null), LB = (0, DB.useRef)(null), gB = (0, DB.useRef)(null), rB = (0, DB.useRef)(new Set), XB = (0, DB.useRef)({
        x: 0,
        y: 0
      }), wB = (0, DB.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), EB = (0, DB.useCallback)((() => (gB.current = null, wB.current.itemBeingDragged = !1, clearTimeout(iB.current), !!LB.current && (LB.current = null, VB(), !0))), [VB]);
      (0, DB.useEffect)((() => {
        EB(), rB.current.clear()
      }), [OB]);
      const cB = BB => void 0 !== BB && (rB.current.has(BB) || null !== gB.current && BB !== gB.current),
        hB = BB => {
          wB.current.isTouch = (0, JG.t)(BB)
        },
        aB = (0, DB.useCallback)((BB => OB => {
          const YB = (0, JG.t)(OB);
          if (YB || UB(OB.pageX, OB.pageY), oB)
            if (cB(OB.pointerId)) void 0 !== OB.pointerId && rB.current.add(OB.pointerId);
            else {
              if (hB(OB), YB) {
                FB.current = OB.timeStamp, wB.current.itemBeingDragged = !0, gB.current = OB.pointerId;
                const GB = (0, JG.m)(eY(), BB);
                if (GB && GB.amount && GB.amount > 0) {
                  const GB = OB.pageX,
                    YB = OB.pageY,
                    DB = XB.current.x,
                    QB = XB.current.y;
                  clearTimeout(iB.current), iB.current = setTimeout((() => {
                    if (ZB.current && ZB.current.idx === BB && (Math.abs(GB - XB.current.x) < 20 && Math.abs(YB - XB.current.y) < 20 || DB === XB.current.x && QB === XB.current.y) && wB.current.itemBeingDragged) {
                      const BB = eY(),
                        GB = BB.creative && !BB.chest && ZB.current.idx >= VG.f.numInvenSlots && null !== (0, JG.m)(BB, ZB.current.idx).amount ? VG.f.maxItemStackSize : ZB.current.amount;
                      LB.current = {
                        initTouchX: OB.pageX,
                        initTouchY: OB.pageY,
                        maxAmount: GB
                      }, ZB.current.amount = Math.ceil(ZB.current.amount / 2), qB.current.style.transform = hY(qB.current), pB(!0), VB()
                    }
                  }), 500)
                }
              }
              IB(OB, BB)
            }
          else BB === PG.d && (0, JG.p)(OB) && GB()
        }), [UB, IB, oB, GB, VB]),
        eB = (0, DB.useCallback)((BB => BB => {
          if (cB(BB.pointerId)) return;
          const OB = (0, JG.t)(BB);
          if (hB(BB), !EB()) {
            if (OB && ZB.current && BB.timeStamp - FB.current > 150) {
              const OB = document.elementFromPoint(BB.clientX, BB.clientY);
              if (null !== OB) {
                const GB = OB.getAttribute("data-inven-idx");
                null !== GB ? IB(BB, parseInt(GB)) : OB.classList.contains("InventoryBackgroundScreen") && IB(BB, -1)
              }
            }
            UB(BB.pageX, BB.pageY)
          }
        }), [UB, IB, EB]);
      (0, DB.useEffect)((() => {
        let BB;
        const GB = ["pointerup", "pointercancel"],
          YB = BB => {
            rB.current.has(BB.pointerId) ? setTimeout((() => {
              rB.current.delete(BB.pointerId)
            }), 0) : BB.pointerId === gB.current && setTimeout((() => {
              gB.current === BB.pointerId && EB()
            }), 0)
          };
        if (OB) {
          for (const BB of GB) document.addEventListener(BB, YB, !0);
          if (!wB.current.isTouch) {
            const BB = XB.current;
            UB(BB.x, BB.y)
          }
          BB = BB => {
            BB.preventDefault(), cB(BB.pointerId) || (hB(BB), UB(BB.pageX, BB.pageY), LB.current && BB.pointerId === gB.current && (BB => {
              if (!ZB.current) return LB.current = null, void VB();
              const {
                initTouchX: OB,
                maxAmount: GB
              } = LB.current, YB = (BB.pageX - OB) * LB.current.maxAmount / 160, DB = Math.ceil(GB / 2) + Math.ceil(YB);
              ZB.current.amount = Math.min(GB, Math.max(1, DB)), VB()
            })(BB))
          }, document.addEventListener("pointermove", BB, !0)
        }
        return () => {
          document.removeEventListener("pointermove", BB, !0);
          for (const BB of GB) document.removeEventListener(BB, YB, !0)
        }
      }));
      const TB = (0, DB.useCallback)((() => {
          if (ZB.current) {
            const BB = (0, JG.m)(eY(), ZB.current.idx);
            (!aY(ZB.current, BB) || BB.amount < ZB.current.amount) && SB()
          }
        }), [SB]),
        bB = (0, DB.useCallback)((() => {
          const BB = ZB.current;
          if (BB) {
            const OB = (0, JG.m)(eY(), BB.idx);
            aY(BB, OB) && (BB.attributes = OB.attributes)
          }
        }), []);
      return {
        draggedDomRef: qB,
        draggedInfoRef: ZB,
        specialItemRef: NB,
        hoverInfoDomRef: RB,
        longHoldSplitInfoRef: LB,
        currHoveredIdx: yB,
        currHoveredDisplayInfo: PB,
        displayDraggedItemName: lB,
        forceRerenderIfVisible: VB,
        removeDraggedInfoRef: SB,
        checkDraggedItemConsistencyWithInven: TB,
        refreshDraggedAttributes: bB,
        swapSlots: uB,
        getPointerDownForIdx: aB,
        getPointerUpForIdx: eB,
        getSetHovering: dB,
        setCurrHoveredDisplayInfo: zB,
        moveFollowerTo: UB
      }
    }
    class HY {
      constructor(BB) {
        this.snapshot = [], this.newSlots = new Set, this.update(BB, !1)
      }
      update(BB, OB) {
        const GB = BB.map((BB => {
          var OB;
          return BB ? {
            name: BB.name,
            amount: null !== (OB = BB.amount) && void 0 !== OB ? OB : 1
          } : null
        }));
        GB.forEach(((BB, GB) => {
          const YB = this.snapshot[GB],
            DB = (null === BB || void 0 === BB ? void 0 : BB.name) !== (null === YB || void 0 === YB ? void 0 : YB.name);
          (!BB || DB || BB.amount < YB.amount) && this.newSlots.delete(GB), OB && BB && (DB || BB.amount > YB.amount) && this.newSlots.add(GB)
        })), this.snapshot = GB
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(BB) {
        return this.newSlots.has(BB)
      }
    }
    const vY = (BB, OB, GB) => ({
      button: OB,
      shiftKey: GB,
      pageX: BB.clientX,
      pageY: BB.clientY,
      clientX: BB.clientX,
      clientY: BB.clientY,
      pointerType: "mouse"
    });

    function sY(BB) {
      const [OB, GB] = (0, DB.useState)(BB);
      return BB && !OB && GB(!0), (0, DB.useEffect)((() => {
        if (OB) return;
        let BB = !0;
        const YB = () => {
            BB && (BB = !1, GB(!0))
          },
          DB = "function" === typeof window.requestIdleCallback,
          QB = DB ? window.requestIdleCallback(YB, {
            timeout: 2e3
          }) : void 0,
          oB = setTimeout(YB, DB ? 2e3 : 1e3);
        return () => {
          BB = !1, clearTimeout(oB), void 0 !== QB && window.cancelIdleCallback(QB)
        }
      }), [OB]), OB
    }
    var xY = GB(3299);
    const tY = (0, DB.memo)((function(BB) {
      var OB;
      let {
        show: GB,
        onOpen: YB,
        onClose: QB,
        variation: jB
      } = BB;
      const PB = (0, DB.useRef)(null),
        zB = (0, DB.useRef)(null),
        lB = function(BB) {
          const [OB, GB] = (0, DB.useState)(!0), [YB, QB] = (0, DB.useState)(!1), oB = (0, DB.useRef)(null), jB = (0, DB.useRef)(null), JB = (0, yB.g)("_shield"), MB = (0, DB.useRef)(null), PB = (0, yB.g)("_health"), zB = (0, DB.useRef)(null);

          function lB(BB) {
            const OB = Date.now() + BB;
            OB < jB.current || (GB(!1), clearTimeout(oB.current), jB.current = OB, oB.current = setTimeout((() => {
              GB(!0)
            }), BB))
          }
          return (0, DB.useEffect)((() => {
            lB(pG);
            const BB = zG.c.subscribe("requestingPlayVideoAd", (() => {
              lB(pG)
            }));
            return () => {
              clearTimeout(oB.current), zG.c.unsubscribe(BB)
            }
          }), []), (0, DB.useEffect)((() => {
            (MB.current > JB || zB.current > PB) && lB(6e4), MB.current = JB, zB.current = PB
          }), [JB, PB]), (0, DB.useEffect)((() => {
            let OB = null;
            return BB ? OB = setTimeout((() => {
              QB(!0)
            }), 250) : QB(!1), () => {
              clearTimeout(OB)
            }
          }), [BB]), OB && YB
        }(GB);
      (0, UB.i)(GG.e, null);
      const qB = (0, GG.m)(),
        ZB = qB.some((BB => BB.panel)),
        {
          userContext: NB
        } = (0, SB.d)(),
        RB = (0, kB.f)("inventory", (BB => {
          const OB = BB.chest;
          return null !== OB && (AY(OB.numSlots) || UY(OB, NB.whamm))
        })),
        WB = sY(GB),
        AB = sY(GB),
        [VB, nB] = (0, DB.useState)([]),
        dB = (0, DB.useCallback)((BB => {
          nB((OB => OB.filter((OB => OB.id !== BB))))
        }), []),
        KB = (0, DB.useRef)(null),
        uB = (0, DB.useRef)(0),
        mB = (0, DB.useCallback)((() => {
          KB.current && (uB.current = KB.current.scrollTop), QB()
        }), [QB]),
        IB = (0, yB.g)("inventoryItemsMoveable"),
        FB = (0, yB.g)("canCraft"),
        {
          clientEscMenuOptions: LB
        } = (0, wB.o)(["clientEscMenuOptions"]),
        gB = (0, DB.useRef)(null);
      gB.current || (gB.current = new HY(JB.gameBridge.latest("inventory").player));
      const rB = gB.current,
        {
          draggedDomRef: XB,
          draggedInfoRef: EB,
          specialItemRef: cB,
          hoverInfoDomRef: hB,
          longHoldSplitInfoRef: aB,
          currHoveredIdx: eB,
          currHoveredDisplayInfo: TB,
          displayDraggedItemName: bB,
          forceRerenderIfVisible: CB,
          removeDraggedInfoRef: HB,
          checkDraggedItemConsistencyWithInven: vB,
          refreshDraggedAttributes: sB,
          swapSlots: xB,
          getPointerDownForIdx: tB,
          getPointerUpForIdx: BO,
          getSetHovering: OO,
          setCurrHoveredDisplayInfo: GO,
          moveFollowerTo: YO
        } = CY({
          show: GB,
          close: mB,
          canCraft: FB,
          variation: jB,
          inventoryItemsMoveable: IB,
          setCraftFlyAnims: nB
        });
      (0, DB.useEffect)((() => {
        const BB = !GB && null !== JB.gameBridge.latest("inventory").chest;
        if (BB && JB.gameBridge.send("closeChest", null), GB || (rB.clearMarks(), OO(null)(!1)), BB) {
          jG.b.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [GB]), (0, kB.b)("chestToggled", (BB => {
        if (BB ? YB() : GB && mB(), BB) {
          jG.b.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const DO = (0, uO.l)();
      (0, kB.b)("inventory", (BB => {
        let {
          player: OB
        } = BB;
        var YB, DB, QB;
        (rB.update(OB, !GB && DO.shown), cB.current) && (cB.current = (DB = cB.current, QB = null !== (YB = OB[cB.current.idx]) && void 0 !== YB ? YB : null, aY(DB, QB) ? (DB.attributes = QB.attributes, null !== QB.amount && DB.amount > QB.amount && (DB.amount = QB.amount), DB) : null));
        sB(), null !== eB && OO(eB)(!0), CB()
      })), (0, DB.useEffect)((() => (JB.gameBridge.send("setInventoryOpen", GB), () => {
        JB.gameBridge.send("setInventoryOpen", !1)
      })), [GB]);
      const QO = (BB, OB) => {
        if (BB === PG.e) return void(BB => {
          const OB = cB.current;
          if (!OB || null === (0, JG.m)(JB.gameBridge.latest("inventory"), OB.idx)) return;
          const GB = BB ? Math.max(OB.amount, 1) : 1,
            YB = OB.amount - GB;
          if (!JB.gameBridge.send("removeInventoryItem", {
              slot: OB.idx,
              amount: GB,
              drop: !0
            })) return;
          const DB = cB.current;
          DB && (DB.amount = Math.min(DB.amount, YB), DB.amount <= 0 && (cB.current = null)), CB()
        })(OB);
        const GB = null === BB ? null : (0, JG.m)(JB.gameBridge.latest("inventory"), BB);
        if (null !== GB) {
          var YB, DB, QB;
          const oB = OB && null !== (YB = GB.amount) && void 0 !== YB ? YB : 1;
          JB.gameBridge.send("removeInventoryItem", {
            slot: BB,
            amount: oB,
            drop: !0
          }), BB === (null === (DB = EB.current) || void 0 === DB ? void 0 : DB.idx) && (EB.current.amount -= oB, EB.current.amount <= 0 && HB(), CB()), BB === (null === (QB = cB.current) || void 0 === QB ? void 0 : QB.idx) && (cB.current = null, CB())
        }
      };
      (0, kB.b)("inventoryDropRequested", (BB => {
        GB && eB !== PG.e && QO(eB, BB)
      }));
      const oO = (BB, OB) => {
        let GB = OB;
        if (OB === PG.e) {
          if (!cB.current) return;
          GB = cB.current.idx
        }
        const YB = xB(BB, GB);
        if (YB && EB.current && (EB.current.idx === GB ? EB.current.idx = BB : EB.current.idx === BB && (EB.current.idx = GB)), YB && OB === PG.e) {
          const BB = (0, JG.m)(JB.gameBridge.latest("inventory"), GB);
          cB.current = BB ? {
            idx: GB,
            name: BB.name,
            attributes: BB.attributes,
            amount: (0, JG.d)(BB)
          } : null
        }
        CB()
      };
      (0, kB.b)("numberKeyPressed", (BB => {
        null !== eB && GB && oO(BB - 1, eB)
      })), (0, DB.useEffect)((() => {
        GB || (cB.current = null, HB(), GO(null))
      }), [GB, HB, GO, cB]);
      const jO = cB.current;
      (0, DB.useEffect)((() => {
        eB === PG.e && OO(PG.e)(!0)
      }), [jO, eB, OO]);
      const yO = () => {
        vB(), sB(), CB()
      };
      (0, kB.b)("chestRefreshed", yO), (0, kB.b)("inventorySynced", yO);
      const [JO, MO] = (0, DB.useState)(new Map), PO = null !== (OB = JO.get(jB)) && void 0 !== OB ? OB : null, zO = (BB, OB) => {
        MO((GB => {
          const YB = GB.get(BB);
          return YB && YB.name === OB.name && YB.HM === OB.HM ? GB : new Map(GB).set(BB, OB)
        }))
      };
      (0, UB.f)("craftingRecipesEdited", (() => {
        CB()
      })), (0, UB.f)(TG.c, (BB => {
        let {
          variation: OB,
          itemName: GB
        } = BB;
        zO(OB, {
          name: GB,
          HM: 0
        })
      }));
      const [lO, pO] = (0, DB.useState)(null), [qO, ZO] = (0, DB.useState)(null);
      (0, kB.b)("enchantingTableOpened", (BB => {
        let {
          position: OB,
          blockName: GB
        } = BB;
        pO(OB), ZO(GB)
      }));
      const [NO, RO] = (0, DB.useState)(""), [WO, AO] = (0, DB.useState)(null);
      (0, DB.useEffect)((() => {
        GB && KB.current && (KB.current.scrollTop = uB.current)
      }), [GB]);
      return (BB => {
        const OB = (0, DB.useRef)(BB);
        OB.current = BB, (0, DB.useEffect)((() => {
          if (!BB.show) return;
          const GB = (BB, GB, YB, DB) => {
              const {
                getPointerDownForIdx: QB,
                getPointerUpForIdx: oB
              } = OB.current;
              QB(BB)(vY(GB, YB, DB)), oB(BB)(vY(GB, YB, DB))
            },
            YB = {
              primary: (BB, OB) => {
                GB(BB, OB, 0, !1)
              },
              secondary: (BB, OB) => {
                GB(BB, OB, 2, !1)
              },
              quickMove: (BB, OB) => {
                GB(BB, OB, 0, !0)
              },
              dropHeld: (BB, GB) => {
                OB.current.getPointerDownForIdx(PG.d)(vY(GB, BB ? 0 : 2, !1))
              },
              dropSlot: (BB, GB) => {
                OB.current.dropFromIdx(BB, GB)
              },
              swapWithHotbar: (BB, GB) => {
                OB.current.swapWithHotbar(BB, GB)
              },
              cancel: () => {
                OB.current.removeDraggedInfoRef()
              },
              isHolding: () => !!OB.current.draggedInfoRef.current,
              hasItemAt: BB => {
                const {
                  draggedInfoRef: GB,
                  specialItemRef: YB
                } = OB.current;
                if (BB === PG.e) return !!YB.current;
                const DB = (0, JG.m)(JB.gameBridge.latest("inventory"), BB);
                return !!DB && (0, dG.g)(BB, (0, JG.d)(DB), [GB.current, YB.current]).shown
              },
              hover: (BB, GB) => {
                const {
                  moveFollowerTo: YB,
                  getSetHovering: DB
                } = OB.current;
                YB(GB.clientX, GB.clientY), DB(null !== BB && void 0 !== BB ? BB : void 0)(null !== BB, void 0, {
                  pageX: GB.clientX,
                  pageY: GB.clientY
                })
              },
              moveTo: BB => {
                OB.current.moveFollowerTo(BB.clientX, BB.clientY)
              },
              close: () => {
                OB.current.close()
              }
            };
          return (0, YG.m)(YB)
        }), [BB.show])
      })({
        show: GB,
        close: mB,
        draggedInfoRef: EB,
        specialItemRef: cB,
        getPointerDownForIdx: tB,
        getPointerUpForIdx: BO,
        getSetHovering: OO,
        moveFollowerTo: YO,
        removeDraggedInfoRef: HB,
        dropFromIdx: QO,
        swapWithHotbar: oO
      }), (0, DB.useEffect)((() => {
        pB.o.tM("inventoryDraggedItemUpdated", {
          draggedInfo: EB.current,
          specialItemInfo: cB.current,
          setHovered: OO,
          pointerDown: tB,
          pointerUp: BO,
          variation: FB ? jB : void 0,
          craftFlyAnims: VB
        })
      })), (0, MB.jsxs)(iB.b, {
        show: GB,
        style: {
          touchAction: GB ? "none" : void 0
        },
        children: [EB.current && (0, MB.jsx)(ZG, {
          draggedInfo: EB.current,
          toAddRef: XB
        }), EB.current && bB && (0, MB.jsx)(NG, {
          className: "DraggedInvenItemName",
          displayInfo: bY(EB.current),
          domRef: null
        }), !EB.current && TB && (0, MB.jsx)(NG, {
          displayInfo: TB,
          domRef: hB
        }), aB.current && EB.current && (0, MB.jsx)(RG, {
          info: aB.current,
          draggedInfo: EB.current
        }), VB.map((BB => (0, MB.jsx)(MG.b, {
          anim: BB,
          onComplete: dB
        }, BB.id))), (0, MB.jsx)(oB.d, {
          show: GB,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: mB,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: tB(PG.d),
          pointerUp: BO(PG.d),
          doGameplayStartStopOnShow: !0
        }), WB && (0, MB.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, MB.jsx)("div", {
            ref: PB,
            className: "InventoryAdOuter",
            children: (0, xY.m)() && (0, MB.jsx)(yG.e, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: PB
              },
              verticalAlign: "start",
              showing: GB && lB,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, MB.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, MB.jsxs)("div", {
              className: AG()("Inventory", {
                WithGameButtons: qB.length > 0,
                WithPanelButtons: ZB,
                WideChestOpen: RB
              }),
              children: [(0, MB.jsx)("div", {
                className: "InventoryFiller"
              }), (0, MB.jsx)(oG, {
                show: GB,
                buttons: qB
              }), (0, MB.jsxs)("div", {
                className: "InvenBody",
                children: [(0, MB.jsx)(fY, {
                  variation: jB,
                  canCraft: FB,
                  show: GB,
                  creativeMounted: AB,
                  specialItemRef: cB,
                  draggedInfo: EB.current,
                  getSetHovering: OO,
                  getPointerDownForIdx: tB,
                  getPointerUpForIdx: BO,
                  enchantingTablePosition: lO,
                  enchantingTableBlockName: qO,
                  selectedCraftable: PO,
                  dispatchSelectedCraftable: BB => {
                    zO(jB, BB)
                  },
                  creativeScrollDiv: KB,
                  creativeSearchVal: NO,
                  setCreativeSearchVal: RO,
                  creativeCategory: WO,
                  setCreativeCategory: AO,
                  onCraft: function(BB, OB) {
                    let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (vB(), (BB || GB.length > 0) && nB((OB => {
                        const YB = [...OB],
                          DB = OB.filter((BB => "ingredient" === BB.kind)).length;
                        for (const BB of GB.slice(0, Math.max(0, 24 - DB))) YB.push({
                          id: (0, MG.e)(),
                          ...BB,
                          to: BB.to
                        });
                        return BB && YB.push({
                          id: (0, MG.e)(),
                          ...BB,
                          to: (0, JG.f)(BB.WJ)
                        }), YB
                      })), null !== OB) {
                      var YB;
                      const BB = JB.gameBridge.latest("inventory");
                      (0, fB.Ib)(null === (YB = (0, JG.m)(BB, OB)) || void 0 === YB ? void 0 : YB.name) ? tB(OB)({
                        button: 0,
                        shiftKey: !0
                      }): xB(OB, BB.selectedSlot)
                    }
                  }
                }), (0, MB.jsx)(FY, {
                  draggedInfo: EB.current,
                  specialItemInfo: cB.current,
                  craftFlyAnims: VB,
                  getSetHovering: OO,
                  getPointerDownForIdx: tB,
                  getPointerUpForIdx: BO,
                  variation: jB,
                  canCraft: FB,
                  isNewSlot: BB => LB.showNewItemIndicator && rB.isNew(BB)
                })]
              })]
            }), (0, MB.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, MB.jsx)("div", {
                ref: zB,
                className: "InventoryAd",
                children: (0, MB.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var BD = GB(1468),
      OD = GB(120);
    const GD = (0, DB.memo)((function(BB) {
      let {
        show: OB,
        onOpen: GB,
        onClose: YB
      } = BB;
      const QB = (0, DB.useRef)(0),
        jB = () => (0, BD.h)() && !(0, BD.q)() && QB.current <= 2;
      OB = jB() && OB;
      const yB = () => {
        QB.current++, YB()
      };
      (0, UB.f)("ctrlCrouchWithoutFullscreen", (() => {
        jB() && GB()
      })), (0, UB.f)("displaymodeFullscreenChange", (BB => {
        OB && BB && yB()
      }));
      const JB = "crazygames" === OD.siteUsed;
      return (0, MB.jsx)(oB.d, {
        close: yB,
        escDoesExit: !0,
        show: OB,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, MB.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, MB.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), JB && (0, MB.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, MB.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, MB.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!JB && (0, MB.jsx)(lB.q, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, BD.v)(), yB()
              },
              children: (0, MB.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, MB.jsx)(lB.Q, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                yB()
              },
              children: (0, MB.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var YD = GB(3016),
      DD = GB(3031),
      QD = GB(1400),
      oD = GB(4031),
      jD = GB(1403),
      yD = GB(3053),
      JD = GB(4041),
      MD = GB(4050);

    function PD(BB, OB) {
      return (0, yD.i)(!0, BB, OB) ? () => {
        !async function(BB) {
          await oD.d.refresh();
          const {
            data: OB,
            failed: GB
          } = oD.d.getState();
          if (null === OB || GB) return;
          const YB = oD.d.getExclusion(BB);
          if ("blocked" === YB) return;
          const DB = null === YB;
          QD.NotificationProvider.showCustomPopup({
            body: OB => {
              const GB = GB => ({
                text: JD.g[GB].text,
                onClick: () => {
                  OB(), (0, MD.c)(GB, BB, null)
                }
              });
              return (0, MB.jsx)(jD.g, {
                title: DB ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: BB
                  }
                },
                secondary: DB ? GB("ignore") : void 0,
                confirm: GB("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: OB
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(BB)
      } : null
    }
    GB(3029);
    const zD = (0, DB.memo)((function(BB) {
      let {
        show: OB,
        onOpen: GB,
        onClose: YB
      } = BB;
      const [QB, jB] = (0, DB.useState)(""), [yB, PB] = (0, DB.useState)(""), [zB, lB] = (0, DB.useState)(null), [pB, qB] = (0, DB.useState)(null), ZB = (0, kB.g)("hiddenPlayerNames"), NB = {
        kind: "worldCodeLine",
        onSubmit: (BB, OB) => {
          YB(), JB.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: pB,
            policy: BB,
            details: OB
          })
        }
      }, RB = {
        kind: "player",
        shownPlayerName: (0, OO.g)(QB, ZB),
        onSubmit: (BB, OB) => {
          YB(), (0, DD.b)({
            playerId: yB,
            playerName: QB,
            chatMsgId: pB,
            policyId: BB,
            details: OB,
            onAccepted: PD(QB, ZB)
          })
        }
      };
      return (0, UB.f)("OpenReportMenu", (BB => {
        let {
          playerEId: OB,
          playerName: YB,
          ty: DB,
          serverChatMsgId: QB
        } = BB;
        PB(OB), jB(YB), lB(DB), qB(QB), GB()
      })), (0, MB.jsx)(oB.d, {
        show: OB,
        close: YB,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, MB.jsx)("div", {
          className: "ReportPanel",
          children: OB && (0, MB.jsx)(YD.d, {
            reported: null === yB ? NB : RB,
            chatMessage: zB,
            inGame: !0,
            onCancel: YB
          })
        })
      })
    }));
    var lD = GB(37536),
      pD = GB(3021);
    const qD = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      ZD = (0, DB.memo)((function(BB) {
        var OB, GB;
        let {
          show: YB,
          onOpen: QB,
          onClose: jB
        } = BB;
        const {
          t: yB
        } = (0, HB.H)(), [PB, zB] = (0, DB.useState)(null), [pB, qB] = (0, DB.useState)(0);
        (0, UB.f)("OpenDiscordReportBox", (BB => {
          JB.gameBridge.send("requestDiscordReportKey", BB), zB(null), qB(0), QB()
        })), (0, UB.f)("setDiscordReportKey", zB);
        const ZB = YB && null === PB;
        (0, DB.useEffect)((() => {
          if (!ZB) return;
          const BB = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), zB({
              SY: null,
              nY: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(BB)
          }
        }), [ZB]);
        const NB = null !== (OB = null === PB || void 0 === PB ? void 0 : PB.SY) && void 0 !== OB ? OB : null,
          RB = null !== (GB = null === PB || void 0 === PB ? void 0 : PB.nY) && void 0 !== GB ? GB : null;
        return (0, MB.jsx)(oB.d, {
          show: YB,
          close: jB,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, MB.jsx)("div", {
            className: "ReportPanel",
            children: (0, MB.jsxs)(jD.g, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === RB ? "report:discordReportDescription" : void 0,
              confirm: null === RB ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(lD.b, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === RB ? "general:cancel" : "general:ok",
                onClick: jB
              },
              padStartsOn: "cancel",
              children: [null !== RB && (0, MB.jsx)(pD.d, {
                children: yB(qD[RB])
              }), null === RB && (0, MB.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, MB.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== NB && void 0 !== NB ? NB : yB("report:loadingReportKey")
                }), (0, MB.jsx)(lB.f, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(NB).catch((BB => {
                      console.error("Failed to copy report key:", BB)
                    })), qB(Date.now())
                  },
                  disabled: Date.now() - pB < 1e3 || !NB,
                  children: Date.now() - pB < 1e3 ? yB("general:copied") : yB("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var ND = GB(1293);
    const RD = {
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
      WD = (0, DB.memo)((function(BB) {
        let {
          show: OB,
          onOpen: GB,
          onClose: YB
        } = BB;
        const [QB, jB] = (0, DB.useState)(null), yB = (0, DB.useRef)(0), PB = (0, DB.useRef)(null), {
          t: zB
        } = (0, HB.H)();
        (0, UB.f)("EditCustomLobbyBlock", (BB => {
          let {
            pos: OB
          } = BB;
          jB(OB), null !== OB && GB(), PB.current.scrollTo(0, yB.current)
        }));
        const lB = BB => {
          JB.gameBridge.send("setCustomLobbyBlock", {
            pos: QB,
            blockName: BB
          }), YB()
        };
        return (0, MB.jsx)(oB.d, {
          className: "CustomLobbyBlockEditorOuter",
          close: YB,
          escDoesExit: !0,
          show: OB,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, MB.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: PB,
            onScroll: () => {
              yB.current = PB.current.scrollTop
            },
            children: (0, MB.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(RD).map((BB => {
                let [OB, GB] = BB;
                return (0, MB.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, MB.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: zB(OB)
                  }), (0, MB.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(GB).map((BB => {
                      let [OB, {
                        tooltip: GB,
                        blocks: YB
                      }] = BB;
                      return (0, MB.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, MB.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [zB(OB), (0, MB.jsx)(bB.c, {
                            hoverInfo: zB(GB),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, MB.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: YB.map((BB => (0, MB.jsx)(AD, {
                            blockName: BB,
                            selectBlock: lB
                          }, BB)))
                        })]
                      }, OB)
                    }))
                  })]
                }, OB)
              }))
            })
          })
        })
      })),
      AD = (0, DB.memo)((function(BB) {
        var OB;
        let {
          blockName: GB,
          selectBlock: YB
        } = BB;
        const DB = (0, jY.c)(GB),
          QB = null !== (OB = void 0 === DB ? void 0 : (0, oY.displayNameOf)(DB)) && void 0 !== OB ? OB : GB,
          oB = void 0 === DB ? void 0 : (0, oY.descriptionOf)(DB);
        return (0, MB.jsx)(bB.g, {
          tooltipInner: (0, MB.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, MB.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, MB.jsx)(nB.b, {
                text: QB
              })
            }), oB && (0, MB.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, MB.jsx)(nB.b, {
                text: oB
              })
            })]
          }),
          children: (0, MB.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => YB(GB),
            children: (0, MB.jsx)(QG.c, {
              itemName: GB,
              amount: 1
            })
          })
        }, GB)
      }));
    var VD = GB(2839),
      SD = GB(4634),
      nD = GB(34828);

    function UD() {
      const BB = (0, kB.g)("itemInfo");
      return (0, DB.useMemo)((() => function(BB) {
        return {
          getDefaultItemStat(OB, GB) {
            var YB;
            const DB = BB[OB];
            return "description" === GB ? null === DB || void 0 === DB ? void 0 : DB.description : null !== (YB = null === DB || void 0 === DB ? void 0 : DB.displayName) && void 0 !== YB ? YB : OB
          }
        }
      }(BB)), [BB])
    }
    const fD = (0, DB.memo)((function(BB) {
        var OB, GB, YB, QB, jB, yB, JB, PB, zB, lB, pB, qB, NB, RB, WB, AB, VB, SB, nB, fB, kB, dB, KB;
        let {
          togglePointerLock: uB,
          show: mB,
          onOpen: IB,
          onClose: FB
        } = BB;
        const {
          t: iB
        } = (0, HB.H)(), LB = UD(), gB = (0, DB.useRef)(null), rB = (0, DB.useRef)(SD.d.MobHungerLevel.Hungry), XB = (0, DB.useRef)(null), wB = (0, VD.c)(), EB = (0, DB.useRef)(null), cB = (0, DB.useRef)(null), hB = gB.current;
        (0, DB.useEffect)((() => {
          if (!mB) return;
          const BB = nD.g.openPet(EB.current);
          return cB.current = BB, () => {
            BB.close(), cB.current = null
          }
        }), [mB]), (0, DB.useEffect)((() => {
          mB && hB && cB.current.show(function(BB) {
            var OB;
            let {
              mobType: GB,
              mobSettings: YB
            } = BB;
            return {
              mobType: GB,
              variation: null !== (OB = YB.variation) && void 0 !== OB ? OB : "default",
              metaInfo: YB.metaInfo,
              tamed: !(0, WY.Q)(YB.ownerDbId)
            }
          }(hB))
        }), [mB, hB]), (0, DB.useEffect)((() => {
          const BB = () => {
            var BB;
            const OB = SD.d.getMobHungerLevel(null === (BB = gB.current) || void 0 === BB ? void 0 : BB.mobSettings.petInfo.lastFedAt);
            if (OB !== rB.current && (rB.current = OB, wB()), XB.current) {
              var GB;
              const BB = Date.now(),
                OB = SD.d.getNextStateAt(null === (GB = gB.current) || void 0 === GB ? void 0 : GB.mobSettings.petInfo.lastFedAt);
              let YB = Math.floor((OB - BB) / 1e3),
                DB = "";
              if (YB > 3600) {
                DB += Math.floor(YB / 60 / 60).toString().padStart(2, "0"), DB += ":", YB %= 3600
              }
              const QB = YB % 60;
              DB += Math.floor(YB / 60).toString().padStart(2, "0"), DB += ":", DB += QB.toString().padStart(2, "0"), XB.current.textContent = DB
            }
          };
          BB();
          const OB = setInterval(BB, 250);
          return () => {
            clearInterval(OB)
          }
        }), [hB, wB]), (0, UB.f)("showPetUi", (BB => {
          let {
            mobType: OB,
            mobSettings: GB
          } = BB;
          gB.current = {
            mobType: OB,
            mobSettings: GB
          }, mB || IB()
        }));
        const aB = null === (OB = gB.current) || void 0 === OB ? void 0 : OB.mobSettings.health,
          eB = null === (GB = gB.current) || void 0 === GB ? void 0 : GB.mobSettings.maxHealth,
          TB = SD.d.getFriendshipLevelInfo(null !== (YB = null === (QB = gB.current) || void 0 === QB ? void 0 : QB.mobSettings.petInfo.friendshipPoints) && void 0 !== YB ? YB : 0);
        return (0, MB.jsx)(oB.d, {
          className: "PetUIOuter",
          close: FB,
          escDoesExit: !0,
          show: mB,
          togglePointerLock: uB,
          forcePointerUnlock: mB,
          globallyUniqueKey: "PetUI",
          children: (0, MB.jsx)("div", {
            className: "PetUI",
            children: (0, MB.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, MB.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, MB.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (jB = null === (yB = gB.current) || void 0 === yB ? void 0 : yB.mobSettings.name) && void 0 !== jB ? jB : "Your Pet"
                }), (0, MB.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: EB
                })]
              }), (0, MB.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, WY.Q)(null === (JB = gB.current) || void 0 === JB ? void 0 : JB.mobSettings.petInfo.friendshipPoints) && (0, MB.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, MB.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: iB("mobAiPlugin:friendshipTitle")
                  }), (0, MB.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: SD.d.getIconsFromFriendshipPoints(null !== (PB = gB.current.mobSettings.petInfo.friendshipPoints) && void 0 !== PB ? PB : 0).map(((BB, OB) => (0, MB.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, MB.jsx)(QG.c, {
                        itemName: BB,
                        amount: 1
                      })
                    }, OB)))
                  }), (0, MB.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, MB.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, MB.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${TB.totalPointsForNextLevel>0?Math.max(TB.pointsIntoCurrentLevel/TB.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, MB.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: SD.d.getFriendshipBarText(TB)
                      })]
                    })
                  })]
                }), (0, MB.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, MB.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: iB("mobAiPlugin:hungerTitle")
                  }), (0, MB.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: SD.d.hungerLevelIcons[rB.current].map(((BB, OB) => (0, MB.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, MB.jsx)(QG.c, {
                        itemName: BB,
                        amount: 1
                      })
                    }, OB)))
                  }), (0, MB.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [iB(SD.d.hungerLevelTranslations[rB.current].translationKey), rB.current !== SD.d.MobHungerLevel.Starving && !(0, WY.Q)(null === (zB = gB.current) || void 0 === zB ? void 0 : zB.mobSettings.petInfo.lastFedAt) && (0, MB.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [iB("mobAiPlugin:nextFeedIn", {
                        state: iB(SD.d.hungerLevelTranslations[rB.current + 1].translationKey)
                      }), ":", " ", (0, MB.jsx)("span", {
                        ref: XB
                      })]
                    })]
                  })]
                }), (0, MB.jsx)(bB.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, MB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: iB("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, MB.jsxs)("div", {
                    className: AG()("PetUIQuickStatsItem", {
                      Disabled: (0, WY.Q)(aB) || (0, WY.Q)(eB)
                    }),
                    children: [(0, MB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, MB.jsx)(QG.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, MB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, WY.Q)(aB) || (0, WY.Q)(eB) ? "" : (0, MB.jsxs)(MB.Fragment, {
                        children: [Math.ceil(aB), (0, MB.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(eB)]
                        })]
                      })
                    })]
                  })
                }), (0, MB.jsx)(bB.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, MB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: iB("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, MB.jsxs)("div", {
                    className: AG()("PetUIQuickStatsItem", {
                      Disabled: (0, WY.Q)(null === (lB = gB.current) || void 0 === lB ? void 0 : lB.mobSettings.attackDamage) || gB.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, MB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, MB.jsx)(QG.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, MB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (pB = gB.current) || void 0 === pB ? void 0 : pB.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, MB.jsx)(bB.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, MB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: iB("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, MB.jsxs)("div", {
                    className: AG()("PetUIQuickStatsItem", {
                      Disabled: (0, WY.Q)(null === (qB = gB.current) || void 0 === qB ? void 0 : qB.mobSettings.secondaryAttackDamage) || gB.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, MB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, MB.jsx)(QG.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, MB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (NB = gB.current) || void 0 === NB ? void 0 : NB.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, MB.jsx)(bB.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, MB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: iB("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, MB.jsxs)("div", {
                    className: AG()("PetUIQuickStatsItem", {
                      Disabled: (0, WY.Q)(null === (RB = gB.current) || void 0 === RB ? void 0 : RB.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, MB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, MB.jsx)(QG.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, MB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (WB = null === (AB = gB.current) || void 0 === AB || null === (VB = AB.mobSettings.baseRunningSpeed) || void 0 === VB ? void 0 : VB.toFixed(2)) && void 0 !== WB ? WB : ""
                    })]
                  })
                }), (0, MB.jsx)(bB.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, MB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: iB("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, MB.jsxs)("div", {
                    className: AG()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (SB = gB.current) || void 0 === SB ? void 0 : SB.mobSettings.metaInfo)
                    }),
                    children: [(0, MB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, MB.jsx)(QG.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, MB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (nB = gB.current) || void 0 === nB ? void 0 : nB.mobSettings.metaInfo) ? (0, MB.jsx)(ZB.b, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, WY.Q)(null === (fB = gB.current) || void 0 === fB ? void 0 : fB.mobSettings.tameInfo) && (0, MB.jsxs)(MB.Fragment, {
                  children: [(0, MB.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, MB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, MB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, MB.jsx)(dD, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: SD.d.feedTextColours[SD.d.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, MB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, MB.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: gB.current.mobSettings.petInfo.superlikedFoodKnown ? (0, MB.jsx)(kD, {
                            food: gB.current.mobSettings.petInfo.superlikedFood
                          }) : (0, MB.jsx)(dD, {
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
                    }), (0, MB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, MB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, MB.jsx)(dD, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: SD.d.feedTextColours[SD.d.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, MB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (kB = gB.current.mobSettings.tameInfo.likedFoods) || void 0 === kB ? void 0 : kB.filter((BB => !gB.current.mobSettings.petInfo.superlikedFoodKnown || BB !== gB.current.mobSettings.petInfo.superlikedFood)).map((BB => (0, MB.jsx)(kD, {
                          food: BB
                        }, BB)))
                      })]
                    }), (0, MB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, MB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, MB.jsx)(dD, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: SD.d.feedTextColours[SD.d.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, MB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (dB = gB.current.mobSettings.tameInfo.neutralFoods) || void 0 === dB ? void 0 : dB.map((BB => (0, MB.jsx)(kD, {
                          food: BB
                        }, BB)))
                      })]
                    }), (0, MB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, MB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, MB.jsx)(dD, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: SD.d.feedTextColours[SD.d.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, MB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (KB = gB.current.mobSettings.tameInfo.dislikedFoods) || void 0 === KB ? void 0 : KB.map((BB => (0, MB.jsx)(kD, {
                          food: BB
                        }, BB)))
                      })]
                    })]
                  }), gB.current.mobSettings.tameInfo.levelUpBonuses && (0, MB.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: SD.d.MAX_LEVEL + 1
                    }).map(((BB, OB) => {
                      const GB = OB;
                      if (0 === GB) return null;
                      const YB = gB.current.mobSettings.tameInfo.levelUpBonuses[GB],
                        DB = SD.d.getBonusDisplayInfo(LB, gB.current.mobSettings, gB.current.mobType, YB);
                      return (0, MB.jsxs)("div", {
                        className: AG()("PetUIFeedDropContainer", {
                          Selected: GB === SD.d.getFriendshipLevelInfo(gB.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, MB.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: GB
                          }).map(((BB, OB) => (0, MB.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, MB.jsx)(QG.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${GB}-${OB}`)))
                        }), (0, MB.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: DB && (0, MB.jsx)(dD, {
                            icon: DB.icon,
                            displayName: DB.displayName,
                            description: DB.description
                          })
                        })]
                      }, GB)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      kD = (0, DB.memo)((function(BB) {
        let {
          food: OB,
          includeDescription: GB = !1
        } = BB;
        const YB = UD(),
          DB = YB.getDefaultItemStat(OB, "displayName"),
          QB = YB.getDefaultItemStat(OB, "description");
        return (0, MB.jsx)(dD, {
          icon: OB,
          displayName: DB,
          description: GB ? QB : null
        })
      })),
      dD = (0, DB.memo)((function(BB) {
        let {
          icon: OB,
          displayName: GB,
          description: YB,
          tintColor: DB,
          className: QB = "PetUIFoodItem"
        } = BB;
        return (0, MB.jsx)(bB.g, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, MB.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, MB.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, MB.jsx)(nB.b, {
                text: GB
              })
            }), YB && (0, MB.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, MB.jsx)(nB.b, {
                text: YB
              })
            })]
          }),
          children: (0, MB.jsx)("div", {
            className: QB,
            children: (0, MB.jsx)(QG.c, {
              itemName: OB,
              amount: 1,
              tintColor: DB
            })
          })
        })
      }));
    var KD = GB(4166),
      uD = GB(1121),
      mD = GB(1238),
      ID = GB(2646),
      FD = GB(37547),
      iD = GB(1049),
      LD = GB(2554);

    function gD(BB) {
      let {
        peers: OB
      } = BB;
      const [GB, YB] = (0, DB.useState)(null), QB = (0, kB.g)("players");
      return (0, MB.jsx)("div", {
        className: "CodeEditorPresence",
        children: OB.map((BB => {
          var OB, DB;
          const oB = null !== (OB = null === (DB = QB.byId[BB.playerId]) || void 0 === DB ? void 0 : DB.cosmetics) && void 0 !== OB ? OB : {};
          return (0, MB.jsxs)("div", {
            className: AG()("PresenceIcon", {
              Viewer: !BB.isEditor
            }),
            style: {
              backgroundColor: BB.colour
            },
            onMouseEnter: () => {
              YB(BB.playerId)
            },
            onMouseLeave: () => {
              YB(null)
            },
            children: [(0, MB.jsx)(LD.b, {
              cosmetics: oB
            }), GB === BB.playerId && (0, MB.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: BB.colour
              },
              children: BB.playerName
            })]
          }, BB.playerId)
        }))
      })
    }
    var rD = GB(675),
      XD = GB(37541),
      wD = GB(37220),
      ED = GB(37555);

    function cD(BB) {
      const OB = BB.split("/"),
        GB = [];
      for (let YB = 1; YB < OB.length; YB++) GB.push(OB.slice(0, YB).join("/"));
      return GB
    }

    function hD(BB) {
      return BB.slice(BB.lastIndexOf("/") + 1)
    }
    var aD = GB(37543);
    const eD = (0, DB.memo)((function(BB) {
      var OB;
      let {
        files: GB,
        activePath: YB,
        canEdit: QB,
        directoryLinked: oB,
        pluginNames: jB,
        activePluginName: yB,
        activePluginFile: JB,
        onSelect: PB,
        onSelectPlugin: zB,
        onCreate: pB,
        onRename: qB,
        onRenameFolder: NB,
        onDelete: RB,
        onToggleDirectorySync: WB,
        schematics: AB,
        onManageSchematic: VB
      } = BB;
      const {
        t: SB
      } = (0, HB.H)(), nB = null !== (OB = (0, FD.e)(GB)) && void 0 !== OB ? OB : mD.f, UB = Object.keys(GB), [fB, kB] = (0, DB.useState)((() => new Set)), dB = function(BB, OB, GB) {
        const YB = {
          folders: new Map,
          files: []
        };
        for (const oB of BB) {
          if (oB === OB) continue;
          let BB = YB;
          for (const OB of cD(oB)) {
            let GB = BB.folders.get(OB);
            GB || (GB = {
              folders: new Map,
              files: []
            }, BB.folders.set(OB, GB)), BB = GB
          }
          BB.files.push(oB)
        }
        const DB = [];
        BB.includes(OB) && DB.push({
          kind: "file",
          path: OB,
          name: hD(OB),
          depth: 0
        });
        const QB = (BB, OB) => {
          const YB = [...BB.folders.entries()].sort(((BB, OB) => {
            let [GB] = BB, [YB] = OB;
            return GB.localeCompare(YB)
          }));
          for (const [oB, jB] of YB) {
            const BB = GB.has(oB);
            DB.push({
              kind: "folder",
              path: oB,
              name: hD(oB),
              depth: OB,
              collapsed: BB
            }), BB || QB(jB, OB + 1)
          }
          BB.files.sort(((BB, OB) => BB.localeCompare(OB)));
          for (const GB of BB.files) DB.push({
            kind: "file",
            path: GB,
            name: hD(GB),
            depth: OB
          })
        };
        return QB(YB, 0), DB
      }(UB, nB, fB);
      (0, DB.useEffect)((() => {
        kB((BB => {
          const OB = new Set(BB);
          let GB = !1;
          for (const DB of cD(YB)) GB = OB.delete(DB) || GB;
          return GB ? OB : BB
        }))
      }), [YB]);
      const KB = UB.length >= cO.C,
        uB = (BB, OB) => {
          if (BB.length > ID.u) return `Path must be at most ${ID.u} characters`;
          if (!(0, ID.q)(BB)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === BB) return "index.d.ts cannot be the world-code entry";
          const YB = !!OB && (0, FD.i)(OB, BB);
          if (OB && (0, FD.m)(OB) && !YB) return `Cannot rename ${OB} (only swapping ${mD.f} and ${mD.i} is allowed)`;
          if (BB in GB) return "A file with that path already exists";
          if ((0, FD.m)(BB) && !YB) {
            if ((BB === mD.f ? mD.i : mD.f) in GB) return `World code cannot have both ${mD.f} and ${mD.i}`
          }
          return null
        },
        mB = BB => {
          QD.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === BB ? void 0 : `${BB}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: `FileTreePathPopup ${aD.e}`,
            validate: BB => uB(BB)
          }).getResult().then((BB => {
            "notificationTornDown" !== BB && null !== BB && "submit" === BB.type && pB(BB.value)
          }))
        },
        IB = BB => {
          QD.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: BB,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: `FileTreePathPopup ${aD.e}`,
            validate: OB => OB === BB ? "That is already the file's path" : uB(OB, BB)
          }).getResult().then((OB => {
            "notificationTornDown" !== OB && null !== OB && "submit" === OB.type && qB(BB, OB.value)
          }))
        },
        FB = BB => {
          const OB = BB => BB.replace(/\/+$/, "");
          QD.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: BB,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: `FileTreePathPopup ${aD.e}`,
            validate: GB => {
              const YB = OB(GB);
              if (YB === BB) return "That is already the folder's path";
              for (const [OB, DB] of(0, FD.p)(UB, BB, YB)) {
                const BB = uB(DB, OB);
                if (null !== BB) return BB
              }
              return null
            }
          }).getResult().then((GB => {
            "notificationTornDown" !== GB && null !== GB && "submit" === GB.type && NB(BB, OB(GB.value))
          }))
        },
        iB = BB => {
          QD.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: BB
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel",
            middleScreenPopupContainerClassName: aD.e
          }).getResult().then((OB => {
            !0 === OB && RB(BB)
          }))
        };
      return (0, MB.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, MB.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, MB.jsx)("span", {
            children: "Files"
          }), QB && !KB && (0, MB.jsx)(lB.v, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              mB()
            },
            children: (0, MB.jsx)(ZB.b, {
              name: "plus"
            })
          })]
        }), (0, MB.jsxs)("div", {
          className: "FileTreeList",
          children: [dB.map((BB => {
            const OB = BB.path;
            if ("folder" === BB.kind) return (0, MB.jsx)(CD, {
              path: OB,
              name: BB.name,
              depth: BB.depth,
              collapsed: BB.collapsed,
              onToggle: () => {
                var BB;
                BB = OB, kB((OB => {
                  const GB = new Set(OB);
                  return GB.delete(BB) || GB.add(BB), GB
                }))
              },
              canCreate: QB && !KB,
              canRename: QB,
              onCreate: mB,
              onRename: FB
            }, `folder:${OB}`);
            const DB = (0, FD.m)(OB),
              oB = mD.f in GB && mD.i in GB,
              jB = !DB || oB,
              JB = null === yB && OB === YB;
            return (0, MB.jsx)(vD, {
              path: OB,
              label: BB.name,
              depth: BB.depth,
              isActive: JB,
              canRename: QB,
              onSelect: PB,
              onRename: IB,
              onDelete: iB,
              canDelete: jB && QB
            }, OB)
          })), (0, MB.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, MB.jsxs)("span", {
              children: ["Schematics (", Object.keys(AB).length, "/", ED.e, ")"]
            }), QB && (0, MB.jsx)(lB.v, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(AB).length >= ED.e,
              onClick: () => {
                VB("")
              },
              children: (0, MB.jsx)(ZB.b, {
                name: "plus"
              })
            })]
          }), Object.keys(AB).sort().map((BB => (0, MB.jsx)(vD, {
            path: BB,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: VB
          }, BB))), jB.length > 0 && (0, MB.jsxs)(MB.Fragment, {
            children: [(0, MB.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, MB.jsx)("span", {
                children: "Plugins"
              })
            }), jB.map((BB => {
              var OB;
              const GB = XD.f[BB],
                YB = Object.keys(null !== (OB = null === GB || void 0 === GB ? void 0 : GB.files) && void 0 !== OB ? OB : {
                  "index.ts": ""
                }).sort(((BB, OB) => "index.ts" === BB ? -1 : "index.ts" === OB ? 1 : BB.localeCompare(OB)));
              return (0, MB.jsxs)("div", {
                children: [(0, MB.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, FD.v)(BB)
                }), YB.map((OB => (0, MB.jsx)(vD, {
                  path: OB,
                  nested: !0,
                  isActive: yB === BB && JB === OB,
                  canRename: !1,
                  onSelect: () => {
                    zB(BB, OB)
                  },
                  canDelete: !1
                }, OB)))]
              }, BB)
            }))]
          })]
        }), (0, MB.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, MB.jsx)(lB.f, {
            className: "FileTreeFooterButton",
            onClick: WB,
            children: SB(oB ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function TD(BB) {
      return BB > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": BB
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function bD(BB) {
      let {
        depth: OB
      } = BB;
      return (0, MB.jsx)(MB.Fragment, {
        children: Array.from({
          length: OB
        }, ((BB, OB) => (0, MB.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": OB
          }
        }, OB)))
      })
    }

    function CD(BB) {
      let {
        path: OB,
        name: GB,
        depth: YB,
        collapsed: DB,
        onToggle: QB,
        canCreate: oB,
        canRename: jB,
        onCreate: yB,
        onRename: JB
      } = BB;
      const PB = [];
      oB && PB.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          yB(OB)
        }
      }), jB && PB.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          JB(OB)
        }
      });
      const zB = TD(YB);
      return (0, MB.jsxs)("div", {
        className: AG()("FileTreeItem FileTreeFolder", zB.className),
        style: zB.style,
        children: [(0, MB.jsx)(bD, {
          depth: YB
        }), (0, MB.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !DB,
          onClick: QB,
          children: [(0, MB.jsx)(ZB.b, {
            className: "FileTreeFolderCaret",
            name: DB ? "caret-right" : "caret-down"
          }), (0, MB.jsx)(ZB.b, {
            className: "FileTreeFolderIcon",
            name: DB ? "folder" : "folder-open"
          }), GB]
        }), (0, MB.jsx)(HD, {
          path: OB,
          actions: PB
        })]
      })
    }

    function HD(BB) {
      let {
        path: OB,
        actions: GB
      } = BB;
      const YB = (0, DB.useRef)(null);
      return 0 === GB.length ? null : (0, MB.jsxs)("div", {
        ref: YB,
        className: "FileTreeItemActions",
        children: [(0, MB.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${OB}`,
          children: (0, MB.jsx)(ZB.b, {
            name: "ellipsis"
          })
        }), (0, MB.jsx)(wD.e, {
          triggerElementRef: YB,
          options: GB
        })]
      })
    }

    function vD(BB) {
      let {
        path: OB,
        label: GB = OB,
        depth: YB = 0,
        isActive: DB,
        canRename: QB,
        onSelect: oB,
        onRename: jB,
        onDelete: yB,
        canDelete: JB,
        nested: PB
      } = BB;
      const zB = [];
      QB && jB && zB.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          jB(OB)
        }
      }), JB && yB && zB.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          yB(OB)
        }
      });
      const lB = TD(YB);
      return (0, MB.jsxs)("div", {
        className: AG()("FileTreeItem", lB.className, {
          Active: DB,
          Nested: PB
        }),
        style: lB.style,
        children: [(0, MB.jsx)(bD, {
          depth: YB
        }), (0, MB.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: GB === OB ? void 0 : OB,
          onClick: () => {
            oB(OB)
          },
          children: GB
        }), (0, MB.jsx)(HD, {
          path: OB,
          actions: zB
        })]
      })
    }
    async function sD(BB) {
      const OB = (0, FD.e)(BB);
      if (!OB || "" === BB[OB].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: YB
      } = await Promise.all([GB.e(608), GB.e(609)]).then((() => GB(44634)));
      return (0, XD.c)(YB(BB))
    }
    var xD = GB(37562);

    function tD(BB, OB) {
      const GB = Object.keys(BB),
        YB = Object.keys(OB);
      if (GB.length !== YB.length) return !1;
      for (const DB of GB)
        if (!(DB in OB) || BB[DB] !== OB[DB]) return !1;
      return !0
    }

    function BQ(BB, OB) {
      const GB = [],
        YB = [],
        DB = [];
      for (const QB of Object.keys(OB)) QB in BB ? BB[QB] !== OB[QB] && DB.push(QB) : GB.push(QB);
      for (const QB of Object.keys(BB)) QB in OB || YB.push(QB);
      return GB.sort(), YB.sort(), DB.sort(), {
        creates: GB,
        deletes: YB,
        updates: DB
      }
    }

    function OQ(BB, OB) {
      var GB;
      const YB = {
          ...BB
        },
        DB = (0, FD.e)(OB),
        QB = (0, FD.e)(YB);
      if (mD.f in YB && mD.i in YB) {
        const BB = null !== DB && void 0 !== DB ? DB : mD.i,
          GB = BB === mD.f ? mD.i : mD.f;
        var oB;
        if (!(BB in YB)) YB[BB] = null !== (oB = OB[BB]) && void 0 !== oB ? oB : "";
        return delete YB[GB], YB
      }
      var jB;
      return DB && !(DB in YB) ? (QB || (YB[DB] = null !== (jB = OB[DB]) && void 0 !== jB ? jB : ""), YB) : (QB || DB || (YB[mD.f] = null !== (GB = YB[mD.f]) && void 0 !== GB ? GB : "", delete YB[mD.i]), YB)
    }

    function GQ(BB, OB) {
      const GB = (0, FD.e)(OB),
        YB = mD.f in OB && mD.i in OB;
      return BB.filter((BB => !(0, FD.m)(BB) || (!!YB || GB !== BB)))
    }
    async function YQ(BB, OB, YB) {
      const DB = BB.getLobbyFiles(),
        QB = (0, cO.i)(YB, (0, FD.s)(DB, OB)),
        oB = await BB.ensureJoined(OB),
        jB = (0, ID.w)(oB.docKey);
      if (oB.doc === QB) return;
      for (let GB = 0; GB < 100; GB++) {
        const GB = BB.getCollabSnapshot();
        if (GB && (0, ID.w)(GB.docKey) === jB && BB.getActivePath() === OB) {
          if (BB.replaceActiveDoc(jB, QB)) return;
          await (0, WY.U)(40)
        } else await (0, WY.U)(40)
      }
      const {
        ChangeSet: yB
      } = await GB.e(604).then((() => GB(44470))), MB = BB.getCollabSnapshot(), PB = MB && (0, ID.w)(MB.docKey) === jB ? MB : oB;
      await async function(BB, OB, GB, YB) {
        const DB = BB.of({
            from: 0,
            to: GB.length,
            insert: YB
          }, GB.length),
          QB = JSON.stringify([{
            clientID: OB.clientID,
            changes: DB.toJSON()
          }]),
          oB = (0, ID.w)(OB.docKey);
        QB.length <= ID.g ? JB.gameBridge.send("sendCodeCollab", {
          XB: ID.c.Push,
          wB: oB,
          EB: OB.version,
          aB: QB
        }) : await (0, uD.postJsonWithMetricsCookiesAndJsonResponse)(`${OB.httpConfig.gsUrl}/code/collab-push`, KD.r["collab-push"].toBuffer({
          gameNameWithVariation: OB.httpConfig.gameNameWithVariation,
          lobbyName: OB.httpConfig.lobbyName,
          docKey: oB,
          version: OB.version,
          updates: QB
        }), {
          retries: 0
        })
      }(yB, PB, PB.doc, QB)
    }
    class DQ {
      constructor(BB) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = BB
      }
      async writeLobbyFiles(BB) {
        const OB = {
            ...this.bridge.getLobbyFiles()
          },
          GB = {
            ...OB
          };
        for (const {
            path: QB,
            text: oB
          }
          of BB) GB[QB] = oB;
        if (!BB.every((BB => {
            let {
              path: OB,
              text: YB
            } = BB;
            return (0, cO.i)(YB, (0, FD.s)(GB, OB)) === YB
          }))) return !1;
        const YB = [];
        try {
          for (const {
              path: OB,
              text: GB
            }
            of BB) YB.push(OB), OB in this.bridge.getLobbyFiles() || (this.bridge.createFile(OB, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(OB, !0)), await YQ(this.bridge, OB, GB)
        } catch (DB) {
          for (const BB of YB) BB in OB ? await YQ(this.bridge, BB, OB[BB]).catch((OB => {
            console.error("World Code AI: couldn't put back", BB, OB)
          })) : this.bridge.deleteFile(BB);
          throw DB
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const BB = await (0, xD.x)(this.bridge.getStorageKey());
        return !!BB && (this.handle = BB, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(BB), !0)
      }
      async unlinkFolder() {
        const BB = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, xD.d)(BB), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const BB = this.bridge.getStorageKey(),
          OB = await (0, xD.t)(BB);
        return !!OB && (!!await (0, xD.j)(OB, "readwrite") && (this.handle = OB, this.linked = !0, await (0, xD.G)(BB, OB), await this.scaffoldLocalTypes(OB), !0))
      }
      scaffoldLocalTypes(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const YB = (await sD(OB)).map((BB => XD.f[BB])),
              DB = YB.map((BB => {
                var OB;
                return `${BB.name}:${Object.keys(null!==(OB=null===BB||void 0===BB?void 0:BB.files)&&void 0!==OB?OB:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === DB) return;
            const {
              ensureLocalBloxdTypes: QB
            } = await Promise.all([GB.e(98), GB.e(606), GB.e(611)]).then((() => GB(44639)));
            await QB(BB, YB), this.scaffoldedPluginNamesKey = DB
          } catch (YB) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", YB)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(BB) {
        this.handle && await this.scaffoldLocalTypes(this.handle, BB), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(BB)
      }
      async onDocTextChanged(BB, OB) {
        if (!this.handle) return;
        const GB = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [BB]: OB
        })];
        this.running && (this.pendingDocText.set(BB, OB), GB.push(this.flushDocTextToDisk())), await Promise.all(GB)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const BB = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const OB = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [GB, YB] of OB) this.lastSynced[GB] !== YB && (await (0, xD.N)(BB, GB, YB), this.lastSynced = {
              ...this.lastSynced,
              [GB]: YB
            })
          }
        } catch (OB) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", OB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, xD.z)(this.handle))
          } catch (BB) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", BB)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, xD.j)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const OB = this.bridge.getLobbyFiles(),
              GB = await (0, xD.z)(this.handle);
            for (const BB of Object.keys(OB).filter(ED.b)) {
              if (GB[BB] === xD.p) return void this.bridge.setMessage(`Move ${BB} outside the linked folder before syncing its placeholder.`, "warning");
              GB[BB] = ED.n
            }
            if (tD(GB, OB)) {
              for (const BB of Object.keys(OB).filter(ED.b)) await (0, xD.N)(this.handle, BB, ED.n);
              return this.lastSynced = {
                ...GB
              }, void this.beginWatch()
            }
            const YB = await this.promptReconcile(function(BB) {
              return null !== (0, FD.e)(BB)
            }(GB));
            if ("unlink" === YB) return void await this.unlinkFolder();
            if ("dismissed" === YB) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === YB) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(GB);
                for (const BB of Object.keys(OB).filter(ED.b)) await (0, xD.N)(this.handle, BB, ED.n);
                this.lastSynced = {
                  ...await (0, xD.z)(this.handle)
                }
              } else await (0, xD.O)(this.handle, OB), this.lastSynced = {
                ...OB
              }
            } catch (BB) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", BB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(BB) {
        return await new Promise((OB => {
          const GB = [{
              choice: "local",
              Button: lB.f,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: lB.f,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: lB.f,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            YB = (0, MB.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, MB.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, MB.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: BB ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, MB.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: GB.filter((OB => "local" !== OB.choice || BB)).map((BB => {
                  let {
                    choice: GB,
                    Button: YB,
                    labelKey: QB,
                    descriptionKey: oB
                  } = BB;
                  return (0, MB.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, MB.jsx)(YB, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (BB => {
                          DB.tearDownNotification(), OB(BB)
                        })(GB)
                      },
                      children: this.bridge.t(`codeEditor:${QB}`)
                    }), (0, MB.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${oB}`)
                    })]
                  }, GB)
                }))
              })]
            }),
            DB = QD.NotificationProvider.showCustomPopup({
              body: YB,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync",
              middleScreenPopupContainerClassName: aD.e
            });
          DB.getResult().then((BB => {
            "notificationTornDown" === BB && OB("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, xD.H)(this.handle, (BB => {
          this.onDiskFilesChanged(BB)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (BB) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", BB)
        }
      }
      async onDiskFilesChanged(BB) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const OB = this.bridge.getLobbyFiles();
        let GB = OQ(BB, this.lastSynced);
        for (const QB in OB)
          if ((0, ED.b)(QB) && GB[QB] === xD.p) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const YB = Object.keys(GB).filter((BB => (0, ED.b)(BB) && !(BB in OB)));
        YB.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const QB of Object.keys(OB).filter(ED.b))(QB in GB || YB.length > 0 || !(QB in this.lastSynced)) && (GB[QB] = ED.n);
        if (!tD(GB, BB)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(BB, GB), GB = OQ(await (0, xD.z)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!tD(GB, this.lastSynced)) {
          this.applying = !0;
          try {
            const BB = BQ(this.lastSynced, GB);
            if (await this.pushDiskDeltaToLobby(GB, OB), null !== this.lastLobbySeen)
              for (const GB of [...BB.creates, ...BB.updates, ...BB.deletes])(0, ED.b)(GB) || (GB in OB ? this.lastLobbySeen[GB] = OB[GB] : delete this.lastLobbySeen[GB]);
            this.lastSynced = {
              ...GB
            }
          } catch (DB) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", DB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(BB, OB) {
        if (this.handle) {
          for (const GB of Object.keys(BB)) GB in OB || await (0, xD.D)(this.handle, GB);
          for (const [GB, YB] of Object.entries(OB)) BB[GB] !== YB && await (0, xD.N)(this.handle, GB, YB)
        }
      }
      async applyRemoteTreeToDisk(BB) {
        if (!this.handle) return;
        const OB = this.lastLobbySeen;
        if (null === OB) return void(this.lastLobbySeen = {
          ...BB
        });
        const GB = Object.keys(BB).filter((GB => OB[GB] !== BB[GB])),
          YB = Object.keys(OB).filter((OB => !(OB in BB)));
        if (0 !== GB.length || 0 !== YB.length) {
          this.applying = !0;
          try {
            for (const OB of [...YB, ...GB]) try {
              if (OB in BB) await (0, xD.N)(this.handle, OB, BB[OB]), this.lastSynced = {
                ...this.lastSynced,
                [OB]: BB[OB]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [OB]: BB[OB]
              };
              else {
                await (0, xD.D)(this.handle, OB);
                const BB = {
                  ...this.lastSynced
                };
                delete BB[OB], this.lastSynced = BB;
                const GB = {
                  ...this.lastLobbySeen
                };
                delete GB[OB], this.lastLobbySeen = GB
              }
            } catch (DB) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", DB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(BB, OB) {
        const GB = function(BB, OB) {
          const GB = (0, FD.e)(BB),
            YB = (0, FD.e)(OB);
          return GB && YB && GB !== YB ? {
            from: GB,
            to: YB
          } : null
        }(BB, OB);
        return !!GB && (this.bridge.renameFile(GB.from, GB.to), await this.bridge.waitForLobbyPath(GB.to, !0), !0)
      }
      async applyLocalTreeToLobby(BB) {
        var OB;
        const GB = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), BB);
        const YB = this.bridge.getLobbyFiles(),
          DB = BQ(YB, BB),
          QB = GQ(DB.deletes, YB);
        for (const JB of DB.creates)(0, ED.b)(JB) || (this.bridge.createFile(JB, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(JB, !0));
        for (const JB of QB)(0, ED.b)(JB) || (this.bridge.deleteFile(JB), await this.bridge.waitForLobbyPath(JB, !1));
        if (!(0, FD.e)(this.bridge.getLobbyFiles()) && !(0, FD.e)(BB)) {
          if (this.bridge.createFile(mD.f, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(mD.f, !0), !this.handle) return;
          await (0, xD.N)(this.handle, mD.f, ""), BB = {
            ...BB,
            [mD.f]: ""
          }
        }
        const oB = this.bridge.getLobbyFiles();
        for (const JB of Object.keys(BB))(0, ED.b)(JB) || oB[JB] !== BB[JB] && await YQ(this.bridge, JB, BB[JB]);
        const jB = this.bridge.getLobbyFiles(),
          yB = GB in jB ? GB : null !== (OB = (0, FD.e)(jB)) && void 0 !== OB ? OB : mD.f;
        await this.bridge.ensureJoined(yB)
      }
      async pushDiskDeltaToLobby(BB, OB) {
        const GB = this.bridge.getActivePath(),
          YB = await this.renameLobbyEntryIfSwitched(OB, BB) ? this.bridge.getLobbyFiles() : OB,
          DB = BQ(this.lastSynced, BB),
          QB = GQ(DB.deletes, YB).filter((BB => BB in YB));
        for (const oB of DB.creates)(0, ED.b)(oB) || (oB in this.bridge.getLobbyFiles() || (this.bridge.createFile(oB, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(oB, !0)), await YQ(this.bridge, oB, BB[oB]));
        for (const oB of QB)(0, ED.b)(oB) ? await this.bridge.deleteSchematic(oB) : (this.bridge.deleteFile(oB), await this.bridge.waitForLobbyPath(oB, !1));
        for (const oB of DB.updates)(0, ED.b)(oB) || await YQ(this.bridge, oB, BB[oB]);
        GB in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== GB && await this.bridge.ensureJoined(GB)
      }
    }
    var QQ = GB(1186);

    function oQ() {
      const {
        websocketUrl: BB,
        gameNameWithVariation: OB,
        lobbyName: GB
      } = JB.gameBridge.latest("connectedGame");
      return {
        gsUrl: QQ.clientSideServerUrls.getHttpUrlFromWebSocketUrl(BB),
        gameNameWithVariation: OB,
        lobbyName: GB
      }
    }
    async function jQ(BB) {
      const {
        gsUrl: OB,
        gameNameWithVariation: GB,
        lobbyName: YB
      } = oQ();
      return await (0, uD.postBinaryWithMetricsCookiesAndCustomResponse)(`${OB}/code/schematics`, KD.gk.schematics.toBuffer({
        gameNameWithVariation: GB,
        lobbyName: YB,
        request: JSON.stringify(BB)
      }), {
        retries: 0
      }, uD.HttpPayloadType.json)
    }
    var yQ = GB(37041);

    function JQ(BB) {
      let {
        path: OB,
        revision: GB
      } = BB;
      const [YB, QB] = (0, DB.useState)(""), [oB, jB] = (0, DB.useState)(!1), [yB, JB] = (0, DB.useState)(0);
      return (0, DB.useEffect)((() => {
        let BB = !1;
        return QB(""), jB(!1), jQ({
          action: "preview",
          path: OB
        }).then((OB => {
          BB || QB(`data:image/webp;base64,${OB.previewBase64}`)
        })).catch((OB => {
          console.error("Could not load schematic preview", OB), BB || jB(!0)
        })), () => {
          BB = !0
        }
      }), [OB, GB, yB]), (0, MB.jsxs)("div", {
        className: "SchematicPreview",
        children: [YB && (0, MB.jsx)("img", {
          src: YB,
          alt: `Preview of ${OB}`
        }), !YB && !oB && (0, MB.jsx)(dB.b, {
          loaderType: "Secondary"
        }), oB && (0, MB.jsxs)(MB.Fragment, {
          children: [(0, MB.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, MB.jsx)(lB.f, {
            onClick: () => {
              JB(yB + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var MQ = GB(3558);

    function PQ(BB) {
      var OB;
      let {
        initialPath: GB,
        onChanged: YB,
        onClose: QB
      } = BB;
      const oB = "" === GB,
        [jB, yB] = (0, DB.useState)(null),
        [JB, PB] = (0, DB.useState)(GB),
        [zB, pB] = (0, DB.useState)(!1),
        [qB, ZB] = (0, DB.useState)(!1),
        [NB, RB] = (0, DB.useState)(null),
        [WB, AB] = (0, DB.useState)(!1),
        [VB, SB] = (0, DB.useState)(""),
        nB = (0, DB.useRef)(null),
        UB = (0, DB.useRef)(!1),
        fB = (0, DB.useRef)(!0);
      (0, DB.useEffect)((() => (fB.current = !0, jQ({
        action: "state"
      }).then((BB => {
        fB.current && yB(BB)
      })).catch((BB => {
        console.error("Could not load schematic assets", BB), fB.current && SB("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        fB.current = !1
      })), []);
      const kB = null === jB || void 0 === jB ? void 0 : jB.assets[GB],
        dB = Object.keys(null !== (OB = null === jB || void 0 === jB ? void 0 : jB.assets) && void 0 !== OB ? OB : {}).length,
        KB = JB.trim(),
        uB = KB ? (0, ED.b)(KB) ? null !== jB && void 0 !== jB && jB.assets[KB] && (oB || KB !== GB) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        mB = !!KB && !uB && (oB ? dB < ED.e : KB !== GB),
        IB = WB || !jB;
      async function FB(BB) {
        if (!UB.current && fB.current) {
          UB.current = !0, AB(!0), SB("");
          try {
            const OB = await jQ({
              ...BB,
              expectedRevision: jB.revision
            });
            YB(OB), fB.current && QB()
          } catch (GB) {
            var OB;
            if (console.error("Schematic asset operation failed", GB), fB.current) SB(GB instanceof eB.d ? null !== (OB = GB.errorMessageForUser) && void 0 !== OB ? OB : GB.message : String(GB));
            try {
              const BB = await jQ({
                action: "state"
              });
              YB(BB), fB.current && yB(BB)
            } catch (DB) {
              console.error("Could not refresh schematic assets", DB)
            }
          } finally {
            UB.current = !1, fB.current && AB(!1)
          }
        }
      }
      return (0, MB.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, MB.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: oB ? "New schematic" : zB ? "Rename schematic" : "Schematic"
        }), VB && (0, MB.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: VB
        }), !jB && !VB && (0, MB.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, MB.jsxs)("fieldset", {
          disabled: IB,
          children: [oB || zB ? (0, MB.jsxs)("label", {
            className: "SchematicField",
            children: [(0, MB.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, MB.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, MB.jsx)(LG.b, {
                className: "InputGenericPopupInput",
                defaultValue: GB,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: PB
              }, zB ? "rename" : "create")
            })]
          }) : (0, MB.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: GB
          }), (oB || zB) && uB && (0, MB.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: uB
          }), oB ? (0, MB.jsxs)(MB.Fragment, {
            children: [dB >= ED.e && (0, MB.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", ED.e, " maximum)."]
            }), qB ? (0, MB.jsxs)(MB.Fragment, {
              children: [(0, MB.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, MB.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": IB || !mB,
                children: (0, MB.jsx)(yQ.d, {
                  loading: null === NB,
                  schematics: null !== NB && void 0 !== NB ? NB : [],
                  disableAutoExport: !0,
                  onSchematicPicked: BB => {
                    !IB && mB && FB({
                      action: "profile",
                      path: KB,
                      schematicId: BB.schematicId
                    })
                  }
                })
              }), (0, MB.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, MB.jsx)(lB.f, {
                  className: "InputGenericPopupButton",
                  disabled: IB,
                  onClick: () => {
                    ZB(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, MB.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, MB.jsx)(lB.f, {
                className: "InputGenericPopupButton",
                disabled: IB || !mB,
                onClick: () => {
                  (0, MQ.e)(nB.current)
                },
                children: "Upload Schematic"
              }), (0, MB.jsx)(lB.f, {
                className: "InputGenericPopupButton",
                disabled: IB || !mB,
                onClick: () => {
                  !async function() {
                    if (ZB(!0), SB(""), !NB) try {
                      const BB = await (0, uD.postJsonWithMetricsCookiesAndJsonResponse)(`${QQ.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      fB.current && RB(BB)
                    } catch (BB) {
                      console.error("Could not load profile schematics", BB), fB.current && (ZB(!1), SB("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, MB.jsx)("input", {
              ref: nB,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: BB => {
                var OB;
                const GB = null === (OB = BB.target.files) || void 0 === OB ? void 0 : OB[0];
                if (BB.target.value = "", !GB) return;
                if (GB.size > ED.g) return void SB("The schematic file is too large.");
                const YB = KB;
                AB(!0);
                const DB = new FileReader;
                DB.onload = () => {
                  FB({
                    action: "upload",
                    path: YB,
                    base64: String(DB.result).split(",")[1]
                  })
                }, DB.onerror = () => {
                  console.error("Could not read schematic file", DB.error), fB.current && (AB(!1), SB("Could not read the selected file."))
                }, DB.readAsDataURL(GB)
              }
            })]
          }) : kB ? (0, MB.jsxs)(MB.Fragment, {
            children: [!zB && (0, MB.jsx)(JQ, {
              path: GB,
              revision: jB.revision
            }), !zB && (0, MB.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(kB.byteSize / 1024), " KB \xb7 ", kB.dimensions.join(" \xd7 "), " blocks"]
            }), (0, MB.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: zB ? (0, MB.jsxs)(MB.Fragment, {
                children: [(0, MB.jsx)(lB.f, {
                  className: "InputGenericPopupButton",
                  disabled: IB || !mB,
                  onClick: () => {
                    FB({
                      action: "rename",
                      path: GB,
                      newPath: KB
                    })
                  },
                  children: "Rename"
                }), (0, MB.jsx)(lB.f, {
                  className: "InputGenericPopupButton",
                  disabled: IB,
                  onClick: () => {
                    pB(!1), PB(GB)
                  },
                  children: "Cancel"
                })]
              }) : (0, MB.jsxs)(MB.Fragment, {
                children: [(0, MB.jsx)(lB.f, {
                  className: "InputGenericPopupButton",
                  disabled: IB,
                  onClick: () => {
                    pB(!0)
                  },
                  children: "Rename"
                }), (0, MB.jsx)(lB.Q, {
                  className: "InputGenericPopupButton",
                  disabled: IB,
                  onClick: () => {
                    FB({
                      action: "remove",
                      path: GB
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : jB && (0, MB.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function zQ(BB) {
      if ("string" !== typeof BB) return null;
      try {
        const OB = JSON.parse(BB);
        return (0, FD.n)(null === OB || void 0 === OB ? void 0 : OB.worldCodeEngine) && "boolean" === typeof OB.engineLocked && function(BB) {
          if (null === BB) return !0;
          const OB = null === BB || void 0 === BB ? void 0 : BB.location;
          return "string" === typeof(null === BB || void 0 === BB ? void 0 : BB.reason) && (null === OB || "string" === typeof(null === OB || void 0 === OB ? void 0 : OB.path) && Number.isInteger(OB.line))
        }(OB.fallback) ? OB : (console.error("[CodeCollab] Malformed engine settings", BB), null)
      } catch (OB) {
        return console.error("[CodeCollab] Failed to parse engine settings", OB), null
      }
    }

    function lQ(BB) {
      let {
        length: OB
      } = BB;
      const {
        t: GB,
        selectedLanguage: YB
      } = (0, HB.H)(), DB = function(BB) {
        return BB >= cO.e ? "full" : BB >= 3e4 ? "counter" : "none"
      }(OB), QB = "full" === DB ? "codeEditor:codeBlockFull" : "codeEditor:codeBlockLength", oB = (0, HB.s)(YB.code, QB), jB = cO.e.toLocaleString(oB);
      return (0, MB.jsxs)(MB.Fragment, {
        children: ["counter" === DB && (0, MB.jsx)("div", {
          className: "CodeEditorLengthNotice CodeEditorLengthCounter",
          children: GB(QB, {
            length: OB.toLocaleString(oB),
            max: jB
          })
        }), (0, MB.jsx)("div", {
          className: "full" === DB ? "CodeEditorLengthNotice" : void 0,
          role: "status",
          children: "full" === DB && GB(QB, {
            max: jB
          })
        })]
      })
    }

    function pQ(BB) {
      let {
        fallback: OB,
        onGoToLine: GB
      } = BB;
      const {
        t: YB
      } = (0, HB.H)(), {
        location: DB
      } = OB;
      return (0, MB.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [YB("codeEditorEngine:notice", {
          reason: OB.reason
        }), DB && (0, MB.jsxs)(MB.Fragment, {
          children: [" ", (0, MB.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              GB(DB.path, DB.line)
            },
            children: YB("codeEditorEngine:goToLine", {
              line: String(DB.line)
            })
          })]
        })]
      })
    }
    var qQ = GB(5418),
      ZQ = GB(4777),
      NQ = GB(37566);

    function RQ(BB) {
      let {
        label: OB,
        hint: GB,
        checked: YB,
        onChange: DB
      } = BB;
      return (0, MB.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, MB.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, MB.jsx)("span", {
            children: OB
          }), (0, MB.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: GB
          })]
        }), (0, MB.jsx)("span", {
          className: "SwitchContainer",
          children: (0, MB.jsx)(ZQ.e, {
            className: "SwitchCheckbox",
            checked: YB,
            onChange: BB => {
              DB(BB.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function WQ(BB) {
      let {
        engine: OB,
        onSetEngine: GB,
        aiHints: YB,
        variation: DB
      } = BB;
      const {
        t: QB
      } = (0, HB.H)(), [oB, jB] = (0, NQ.l)(NQ.h);
      return (0, MB.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, MB.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: QB("codeEditor:moreOptions")
        }), OB && (0, MB.jsx)(RQ, {
          label: QB("codeEditorEngine:toggle"),
          hint: QB("codeEditorEngine:toggleHint"),
          checked: "ses" === OB,
          onChange: BB => {
            GB(BB ? "ses" : "quickjs")
          }
        }), YB && (0, MB.jsx)(RQ, {
          label: QB("codeEditorAiHints:toggle"),
          hint: QB("codeEditorAiHints:toggleHint"),
          checked: YB.shown,
          onChange: YB.setShown
        }), YB && NQ.h.canChange && (0, MB.jsx)(RQ, {
          label: QB("codeEditorAiKeySafetyCheck:toggle"),
          hint: QB("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: oB,
          onChange: BB => {
            BB ? jB(!0) : QD.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no",
              middleScreenPopupContainerClassName: aD.e
            }).getResult().then((BB => {
              !0 === BB && jB(!1)
            }))
          }
        }), DB && (0, MB.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, MB.jsx)(qQ.d, {
            label: "codeEditor:variationLabel",
            children: (0, MB.jsx)(LG.b, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: DB.name,
              onValueChange: DB.setName,
              onEnter: DB.reload
            })
          }), (0, MB.jsx)(lB.C, {
            className: "CodeEditorButton",
            onClick: DB.reload,
            children: QB("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var AQ = GB(37572),
      VQ = GB(37576);

    function SQ(BB) {
      let {
        close: OB
      } = BB;
      const {
        t: GB
      } = (0, HB.H)(), YB = [{
        name: GB("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: GB("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: GB("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, MB.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, MB.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: GB("codeEditor:tutorialsTitle")
        }), (0, MB.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: YB.map((BB => (0, MB.jsx)(lB.f, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              OB(), (0, VQ.G)(BB.tutorial)
            },
            children: BB.name
          }, BB.tutorial)))
        })]
      })
    }
    var nQ = GB(104),
      UQ = GB(37214),
      fQ = GB(3039);
    const kQ = (0, DB.forwardRef)((function(BB, OB) {
      let {
        value: GB,
        onChange: YB,
        onSubmit: DB,
        placeholder: QB,
        maxLength: oB,
        rows: jB = 2,
        allowNewLines: yB = !1,
        onKeyDown: JB,
        before: PB
      } = BB;
      const {
        t: zB
      } = (0, HB.H)(), pB = "" !== GB.trim(), qB = () => {
        pB && DB()
      };
      return (0, MB.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [PB, (0, MB.jsx)("textarea", {
          ref: OB,
          className: "PanelPromptInput",
          value: GB,
          maxLength: oB,
          rows: jB,
          placeholder: QB,
          spellCheck: !1,
          autoComplete: "off",
          onChange: BB => {
            YB(yB ? BB.target.value : BB.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: BB => {
            BB.nativeEvent.isComposing || 229 === BB.nativeEvent.keyCode ? BB.stopPropagation() : "Escape" !== BB.key && (BB.stopPropagation(), null === JB || void 0 === JB || JB(BB), BB.defaultPrevented || "Enter" !== BB.key || yB && BB.shiftKey || (BB.preventDefault(), qB()))
          }
        }), (0, MB.jsx)(lB.f, {
          className: "PanelPromptSend",
          disabled: !pB,
          onClick: qB,
          ariaLabel: zB("codeEditorPanels:send"),
          children: (0, MB.jsx)(ZB.b, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function dQ(BB) {
      let {
        inputRef: OB
      } = BB;
      const {
        t: GB
      } = (0, HB.H)(), {
        messages: YB,
        reportedPlayers: QB,
        channel: oB
      } = (0, fQ.m)(), [jB, yB] = (0, DB.useState)(""), JB = (0, DB.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, MB.jsxs)("div", {
        className: "CodeEditorChatPanel",
        "data-replay-redact": !0,
        children: [(0, MB.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, MB.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: GB("codeEditorChat:title")
          })
        }), 0 === YB.length ? (0, MB.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: GB("codeEditorChat:empty")
        }) : (0, MB.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, MB.jsx)(UQ.e, {
            messages: YB,
            reportedPlayers: QB
          })
        }), (0, MB.jsx)(kQ, {
          ref: OB,
          value: jB,
          onChange: yB,
          onSubmit: () => {
            (0, fQ.l)(jB), yB(""), JB.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: fB.ud,
          rows: 1,
          placeholder: oB ? GB("touchOnly" === (0, nQ.d)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: oB.channelName
          }) : GB("codeEditorChat:placeholder"),
          before: oB && (0, MB.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: oB.elementBgColor
            },
            onClick: () => {
              fQ.c.selectNextChannel(), OB.current.focus()
            },
            children: (0, MB.jsx)(nB.b, {
              text: oB.elementContent
            })
          }),
          onKeyDown: BB => {
            const OB = jB === JB.current.text;
            if ("ArrowUp" !== BB.key && "ArrowDown" !== BB.key || !OB && "" !== jB) "Tab" === BB.key && !BB.shiftKey && oB && (BB.preventDefault(), fQ.c.selectNextChannel());
            else {
              BB.preventDefault();
              const GB = OB ? JB.current.stepsBack : 0;
              JB.current = (0, fQ.h)(GB + ("ArrowUp" === BB.key ? 1 : -1)), yB(JB.current.text)
            }
          }
        })]
      })
    }
    var KQ = GB(37580);

    function uQ(BB) {
      return "expanded" === BB ? "always" : "shown" === BB ? "narrow" : void 0
    }

    function mQ(BB) {
      var OB;
      let {
        mP: GB,
        worldPanel: YB,
        closeWorld: DB,
        aiShown: QB,
        defaultWidth: oB,
        children: jB
      } = BB;
      const yB = "hidden" !== GB;
      return (0, MB.jsx)(KQ.b, {
        side: "right",
        defaultSize: yB ? "max(18rem, 40%)" : oB,
        covers: null !== (OB = uQ(GB)) && void 0 !== OB ? OB : QB ? "narrow" : void 0,
        children: (0, MB.jsxs)("div", {
          className: AG()("CodeEditorRightColumn", {
            WorldShown: yB,
            WorldExpanded: "expanded" === GB
          }),
          children: [yB && (0, MB.jsx)(KQ.b, {
            side: "top",
            onClose: DB,
            children: YB
          }), jB]
        })
      })
    }
    var IQ = GB(2076),
      FQ = GB(1108),
      iQ = GB(1299);
    class LQ {
      constructor(BB, OB, GB) {
        this.measure = BB, this.apply = OB, this.now = GB, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var BB, OB;
        return null !== (BB = null === (OB = this.last) || void 0 === OB ? void 0 : OB.rect) && void 0 !== BB ? BB : null
      }
      sync() {
        const BB = function(BB) {
          const OB = Math.round(BB.left),
            GB = Math.round(BB.top);
          return {
            left: OB,
            top: GB,
            width: Math.round(BB.right) - OB,
            height: Math.round(BB.bottom) - GB
          }
        }(this.measure());
        if (BB.width <= 0 || BB.height <= 0) return;
        const OB = this.now(),
          GB = this.last;
        let YB = {
          width: BB.width,
          height: BB.height
        };
        null === GB || BB.width === GB.rect.width && BB.height === GB.rect.height || (this.resizing = OB - this.resizedAt < 100, this.resizedAt = OB);
        const DB = null !== GB && this.resizing && OB - this.resizedAt < 100 && (BB.width !== GB.bufferSize.width || BB.height !== GB.bufferSize.height);
        DB && (this.stretchedAt ??= OB), DB && OB - this.stretchedAt < 250 ? YB = GB.bufferSize : this.stretchedAt = null;
        const QB = {
          rect: BB,
          bufferSize: YB
        };
        var oB, jB;
        null !== GB && (jB = QB, (oB = GB).rect.left === jB.rect.left && oB.rect.top === jB.rect.top && oB.rect.width === jB.rect.width && oB.rect.height === jB.rect.height && oB.bufferSize.width === jB.bufferSize.width && oB.bufferSize.height === jB.bufferSize.height) || (this.last = QB, this.apply(QB))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function gQ(BB) {
      const {
        style: OB
      } = document.documentElement;
      for (const [GB, YB] of [
          ["--worldViewLeft", null === BB || void 0 === BB ? void 0 : BB.left],
          ["--worldViewTop", null === BB || void 0 === BB ? void 0 : BB.top],
          ["--worldViewWidth", null === BB || void 0 === BB ? void 0 : BB.width],
          ["--worldViewHeight", null === BB || void 0 === BB ? void 0 : BB.height]
        ]) void 0 === YB ? OB.removeProperty(GB) : OB.setProperty(GB, `${YB}px`)
    }
    var rQ = GB(1822),
      XQ = GB(2091);

    function wQ(BB, OB) {
      (0, DB.useEffect)((() => {
        if (!BB) return;
        const GB = BB => {
          var GB;
          "Escape" === BB.key ? (BB.stopPropagation(), BB.preventDefault(), OB()) : (GB = BB.code, Object.entries(aO.t).some((BB => {
            let [OB, YB] = BB;
            const DB = XQ.d[OB];
            return DB.includes("ui") && !DB.includes("core") && YB.includes(GB)
          })) && !(0, rQ.isTextEntry)(BB.target) && BB.preventDefault())
        };
        window.addEventListener("keydown", GB, !0);
        const YB = (0, EB.n)(OB);
        return () => {
          window.removeEventListener("keydown", GB, !0), YB()
        }
      }), [BB, OB])
    }

    function EQ() {
      return (0, ND.n)().some((BB => BB !== ND.b))
    }

    function cQ(BB, OB) {
      return BB.map((BB => OB ? String(BB) : BB.toFixed(1))).join(", ")
    }

    function hQ(BB) {
      let {
        freeCamera: OB,
        picking: GB,
        hovered: YB
      } = BB;
      const {
        t: QB
      } = (0, HB.H)(), oB = (0, DB.useRef)(null), jB = (0, DB.useRef)(null);
      return (0, DB.useEffect)((() => {
        const BB = (BB, OB) => {
            BB.textContent !== OB && (BB.textContent = OB)
          },
          GB = () => {
            const GB = OB ? JB.gameBridge.lookup("freeCameraPos", null) : null;
            BB(oB.current, cQ(null !== GB && void 0 !== GB ? GB : JB.gameBridge.lookup("localPos", null), !1));
            const YB = JB.gameBridge.lookup("targetedBlockPos", null);
            BB(jB.current, YB ? cQ(YB, !0) : "-")
          };
        return GB(), (0, iQ.z)(GB)
      }), [OB]), (0, MB.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, MB.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: QB(OB ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, MB.jsx)("span", {
          ref: oB
        }), (0, MB.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: QB("codeEditorWorld:lookingAt")
        }), (0, MB.jsx)("span", {
          ref: jB,
          hidden: GB
        }), GB && (0, MB.jsxs)(MB.Fragment, {
          children: [(0, MB.jsx)("span", {
            children: YB ? cQ(YB.pos, !0) : "-"
          }), YB && (0, MB.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: YB.name
          })]
        })]
      })
    }
    var aQ = GB(37584),
      eQ = GB(1510);

    function TQ(BB) {
      const OB = BB.currentTarget.getBoundingClientRect();
      return {
        x: (BB.clientX - OB.left) / OB.width,
        y: (BB.clientY - OB.top) / OB.height
      }
    }

    function bQ(BB) {
      const [OB, GB] = (0, DB.useState)(!1), [YB, QB] = (0, DB.useState)(null), oB = (0, DB.useRef)(null);
      (0, DB.useEffect)((() => {
        if (!OB) return;
        let BB = null,
          GB = null,
          YB = 1 / 0;
        const DB = (0, iQ.u)((OB => {
          YB += OB;
          const DB = oB.current;
          if (DB === GB && YB < 100) return;
          GB = DB, YB = 0;
          const jB = DB && JB.gameBridge.lookup("blockAtViewPoint", DB);
          var yB, MB;
          (yB = jB) === (MB = BB) || null !== yB && null !== MB && yB.name === MB.name && (0, aQ.d)(yB.pos, MB.pos) && (0, aQ.d)(yB.normal, MB.normal) || (BB = jB, QB(jB), JB.gameBridge.send("setBlockHighlight", jB))
        }));
        return () => {
          DB(), null !== BB && JB.gameBridge.send("setBlockHighlight", null), QB(null)
        }
      }), [OB]);
      const jB = (0, DB.useCallback)((() => {
        GB(!1)
      }), []);
      wQ(OB, jB);
      const yB = YB => {
          if (!OB) return;
          const DB = JB.gameBridge.lookup("blockAtViewPoint", TQ(YB));
          null !== DB && (GB(!1), BB(DB.pos))
        },
        MB = OB ? (0, eQ.g)(yB, "pointerup") : null,
        PB = {
          onPointerDown: BB => {
            null === MB || void 0 === MB || MB.onPointerDown(BB)
          },
          onPointerMove: BB => {
            oB.current = TQ(BB)
          },
          onPointerLeave: () => {
            oB.current = null
          },
          onPointerUp: null === MB || void 0 === MB ? void 0 : MB.onPointerUp,
          onClick: BB => {
            "pointerType" in BB.nativeEvent && "touch" === BB.nativeEvent.pointerType || yB(BB)
          }
        };
      return {
        picking: OB,
        setPicking: GB,
        hovered: YB,
        slotHandlers: PB
      }
    }

    function CQ(BB) {
      JB.gameBridge.send("setFreeCameraMovesFly", BB)
    }

    function HQ(BB) {
      let {
        shown: OB,
        setShown: GB,
        canInsertCode: YB
      } = BB;
      const {
        t: QB
      } = (0, HB.H)(), {
        isTouchScreen: oB
      } = (0, wB.o)(["isTouchScreen"]), jB = (0, DB.useRef)(null), JB = (0, DB.useCallback)((() => {
        var BB;
        null === (BB = jB.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === BB || BB.focus()
      }), []), {
        control: PB,
        take: zB,
        release: qB,
        blocked: NB
      } = function(BB) {
        const [OB, GB] = (0, DB.useState)("none"), YB = (0, DB.useRef)("none"), [QB, oB] = (0, DB.useState)(!1), jB = BB => {
          YB.current = BB, GB(BB)
        }, yB = (0, DB.useCallback)((() => {
          const OB = YB.current;
          "none" !== OB && (jB("none"), (0, ND.p)(ND.b), "mouse" === OB && BB())
        }), [BB]), JB = (0, DB.useCallback)((BB => {
          EQ() ? oB(!0) : (jB("mouse" === BB && "touchOnly" !== (0, nQ.d)() ? "mouse" : "touch"), (0, ND.o)(ND.b))
        }), []);
        return (0, UB.f)("pointerLockUpdate", (BB => {
          BB && "touch" === YB.current && "touchOnly" !== (0, nQ.d)() ? jB("mouse") : BB || "mouse" !== YB.current || yB()
        })), (0, DB.useEffect)((() => {
          if (!QB) return;
          const BB = () => {
            EQ() || oB(!1)
          };
          return BB(), (0, ND.j)(BB)
        }), [QB]), wQ("none" !== OB, yB), (0, DB.useEffect)((() => {
          if ("none" === OB) return;
          const BB = BB => {
            (0, rQ.isTextEntry)(BB.target) && yB()
          };
          return document.addEventListener("focusin", BB), () => {
            document.removeEventListener("focusin", BB)
          }
        }), [OB, yB]), (0, DB.useEffect)((() => (document.addEventListener("pointerlockerror", yB), () => {
          document.removeEventListener("pointerlockerror", yB)
        })), [yB]), (0, DB.useEffect)((() => () => {
          "none" !== YB.current && null !== wB.c.get("openInGameMenuName") && (0, ND.p)(ND.b)
        }), []), {
          control: OB,
          take: JB,
          release: yB,
          blocked: QB
        }
      }(JB), RB = (0, FQ.h)(KQ.f);
      (0, DB.useEffect)((() => {
        "touch" !== PB || "shown" !== OB || RB ? "none" === PB && "expanded" === OB && GB("shown") : GB("expanded")
      }), [PB, RB]),
      function(BB, OB) {
        const GB = (0, DB.useRef)(OB);
        GB.current = OB;
        const YB = (0, DB.useRef)(null);
        (0, DB.useLayoutEffect)((() => {
          const OB = new LQ((() => BB.current.getBoundingClientRect()), (BB => {
            var OB;
            "none" !== GB.current && gQ(null !== (OB = null === BB || void 0 === BB ? void 0 : BB.rect) && void 0 !== OB ? OB : null), (0, iQ.D)().setGameView(BB)
          }), (() => performance.now()));
          YB.current = OB, OB.sync();
          const DB = (0, iQ.q)((() => {
            OB.sync()
          }));
          return () => {
            DB(), wB.c.set({
              worldPanelHud: null
            }), OB.stop()
          }
        }), [BB]), (0, DB.useLayoutEffect)((() => {
          YB.current.sync(), gQ("none" === OB ? null : YB.current.rect), wB.c.set({
            worldPanelHud: OB
          })
        }), [OB])
      }(jB, "touch" === PB ? "touchControls" : "none");
      const {
        picking: WB,
        setPicking: AB,
        hovered: VB,
        slotHandlers: {
          onPointerDown: SB,
          ...nB
        }
      } = bQ((BB => {
        pB.o.tM("CodeEditorInsertText", {
          text: `[${BB.join(", ")}]`,
          focus: !oB
        }), (0, KQ.f)() && GB("hidden")
      })), fB = function() {
        const {
          allowed: BB,
          movesFly: OB
        } = (0, kB.g)("freeCamera"), GB = (0, DB.useRef)(OB), YB = (0, DB.useRef)(OB);
        return YB.current !== OB && (YB.current = OB, GB.current = OB), (0, DB.useEffect)((() => () => {
          GB.current && CQ(!1)
        }), []), {
          allowed: BB,
          on: OB,
          toggle: () => {
            GB.current = !OB, CQ(!OB)
          }
        }
      }(), dB = (0, yB.g)("hideCoordinates"), KB = (0, kB.g)("localPlayerAlive"), uB = !KB || NB;
      (0, DB.useEffect)((() => {
        KB || qB()
      }), [KB, qB]), (0, DB.useEffect)((() => {
        !uB && YB || AB(!1)
      }), [uB, YB, AB]);
      const mB = fB.on ? lB.q : lB.f,
        IB = WB ? lB.q : lB.f;
      return (0, MB.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, MB.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, MB.jsx)("span", {
            className: "WorldPanelTitle",
            children: QB("codeEditorWorld:title")
          }), "touch" === PB && !RB && (0, MB.jsx)(lB.f, {
            className: "WorldPanelButton",
            onClick: qB,
            children: QB("codeEditorWorld:backToCode")
          }), !uB && fB.allowed && !oB && (0, MB.jsx)(bB.g, {
            tooltipInner: QB("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, MB.jsx)(mB, {
              className: "WorldPanelButton",
              ariaPressed: fB.on,
              ariaLabel: QB("codeEditorWorld:freeCamera"),
              onClick: fB.toggle,
              children: (0, MB.jsx)(ZB.b, {
                name: "video"
              })
            })
          }), !uB && YB && (0, MB.jsx)(bB.g, {
            tooltipInner: QB("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, MB.jsxs)(IB, {
              className: "WorldPanelButton",
              ariaPressed: WB,
              onClick: () => {
                qB(), AB(!WB)
              },
              children: [(0, MB.jsx)(ZB.b, {
                name: "crosshairs"
              }), QB("codeEditorWorld:pick")]
            })
          })]
        }), !dB && (0, MB.jsx)(hQ, {
          freeCamera: fB.on,
          picking: WB,
          hovered: VB
        }), (0, MB.jsxs)("div", {
          ref: jB,
          className: AG()("WorldPanelSlot", {
            TouchControl: "touch" === PB,
            Picking: WB
          }),
          onPointerDown: BB => {
            0 !== BB.button || uB || WB || zB(BB.pointerType), SB(BB)
          },
          ...nB,
          children: [!uB && !WB && (0, MB.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !uB && "touch" !== PB && (0, MB.jsxs)("div", {
            className: "WorldPanelHint",
            children: [WB && QB(oB ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !WB && "none" === PB && !fB.on && QB(oB ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !WB && "none" === PB && fB.on && QB("codeEditorWorld:clickToFly"), "mouse" === PB && (0, MB.jsxs)(MB.Fragment, {
              children: [(0, MB.jsx)(IQ.c, {
                noaAction: "OpenLobbyLeaderboard"
              }), QB("codeEditorWorld:backToCode")]
            })]
          }), uB && (0, MB.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, MB.jsx)("span", {
              children: QB(KB ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, MB.jsx)(lB.f, {
              onClick: EB.f,
              children: QB("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var vQ = GB(5512);

    function sQ(BB) {
      let {
        mP: OB,
        setWorld: GB,
        toggleWorld: YB,
        aiShown: DB,
        closeAi: QB
      } = BB;
      const {
        t: oB
      } = (0, HB.H)(), jB = DB ? "ai" : "hidden" !== OB ? "world" : "code", yB = [{
        value: "code",
        label: oB("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: oB("codeEditorWorld:title")
      }];
      DB && yB.push({
        value: "ai",
        label: oB("codeEditorWorld:aiPane")
      });
      return (0, MB.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, MB.jsx)(vQ.c, {
          options: yB,
          value: jB,
          onChange: BB => {
            "world" !== BB ? (DB && QB(), GB("hidden")) : "hidden" === OB ? YB() : QB()
          },
          ariaLabel: oB("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var xQ = GB(37593),
      tQ = GB(37601),
      Bo = GB(37608),
      Oo = GB(37612);
    const Go = (0, DB.lazy)((() => Promise.all([GB.e(608), GB.e(604), GB.e(607), GB.e(603), GB.e(98), GB.e(606), GB.e(605), GB.e(602)]).then((() => GB(44461))))),
      Yo = (0, DB.lazy)((() => Promise.all([GB.e(93), GB.e(96), GB.e(97), GB.e(95), GB.e(610)]).then((() => GB(44627))))),
      Do = (0, DB.lazy)((() => Promise.all([GB.e(608), GB.e(607), GB.e(98), GB.e(96), GB.e(97), GB.e(95), GB.e(606), GB.e(605), GB.e(94), GB.e(105)]).then((() => GB(44629)))));

    function Qo(BB) {
      return JB.gameBridge.query("worldCodeAiChunk", BB)
    }

    function oo() {
      return JB.gameBridge.query("worldCodeAiGameState", null)
    }

    function jo(BB) {
      const {
        gsUrl: OB,
        gameNameWithVariation: GB,
        lobbyName: YB
      } = oQ();
      return (0, uD.postJsonWithMetricsCookiesAndJsonResponse)(`${OB}/code/get-lobby-code`, KD.gk["get-lobby-code"].toBuffer({
        gameNameWithVariation: GB,
        lobbyName: YB,
        path: BB
      }), {
        retries: 1
      })
    }
    let yo = !1;
    const Jo = [],
      Mo = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      Po = (0, DB.memo)((function(BB) {
        var OB, GB;
        let {
          show: YB,
          onOpen: QB,
          onClose: jB,
          isLobbyCode: PB
        } = BB;
        const zB = (0, DB.useRef)(""),
          [qB, NB] = (0, DB.useState)(null),
          RB = (0, DB.useRef)(PB),
          [WB, AB] = (0, DB.useState)({
            message: null,
            type: null
          }),
          [VB, SB] = (0, DB.useState)(""),
          nB = WB.message ? WB : {
            message: VB,
            type: "warning"
          },
          [KB, uB] = (0, DB.useState)(!0),
          [mB, FB] = (0, NQ.l)(NQ.j),
          [iB, LB] = (0, NQ.l)(NQ.e),
          [gB, rB] = (0, DB.useState)(!1),
          [XB, cB] = (0, DB.useState)(!1),
          hB = (0, DB.useRef)(null),
          aB = (0, DB.useRef)(!1);
        (0, DB.useEffect)((() => {
          var BB;
          XB && aB.current && (aB.current = !1, null === (BB = hB.current) || void 0 === BB || BB.focus())
        }), [XB]);
        const eB = (0, xQ.c)(),
          TB = (0, DB.useRef)(null),
          CB = (0, DB.useRef)(null),
          {
            openInGameMenuName: vB,
            openEverythingMenuName: sB,
            worldPanelHud: xB
          } = (0, wB.o)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          tB = BB => {
            YB && (TB.current = BB, kO.current = !0)
          };
        (0, UB.f)("OpenReportMenu", (() => {
          tB("jP")
        })), (0, UB.f)("OpenStoreFromCodeEditor", (() => {
          tB("store")
        })), (0, DB.useEffect)((() => {
          const BB = TB.current;
          null === BB || "jP" === BB && ("makeReport" === vB || "makeDiscordReport" === vB) || "store" === BB && null !== sB || (TB.current = null, null === vB && null === sB ? PB ? (CB.current = YG.current, pB.o.tM("EditLobbyCode", qB)) : pB.o.tM("EditCodeBlock", {
            pos: qB,
            canChangePos: RB.current
          }) : (0, VQ.z)())
        }), [vB, sB, PB, qB]), (0, DB.useEffect)((() => {
          if (YB) return () => {
            CB.current = null
          }
        }), [YB]);
        const [BO, OO] = function() {
          const [BB, OB] = (0, DB.useState)(yo);
          return (0, UB.f)("CodeEditorAiHelperShown", (BB => {
            OB(BB)
          })), [BB, (0, DB.useCallback)((BB => {
            yo = BB, pB.o.tM("CodeEditorAiHelperShown", BB)
          }), [])]
        }(), [GO, YO] = (0, DB.useState)(null), [DO, QO] = (0, DB.useState)([]), [oO, jO] = (0, DB.useState)(0), [yO, JO] = (0, DB.useState)(0), [MO, PO] = (0, DB.useState)(""), lO = (0, DB.useRef)(null), [pO, qO] = (0, DB.useState)(PB ? Oo.e : null), ZO = PB || null !== qB, NO = (0, yB.g)("canEditCode"), RO = (0, yB.g)("canUseDevCreativeItems"), WO = (0, AQ.m)("welcome"), AO = (0, AQ.m)("docsOverview"), VO = AO ? "docsOverview" : "welcome", SO = null !== AO && void 0 !== AO ? AO : WO, nO = (0, AQ.m)("aiHelperOverview"), UO = nO ? "aiHelperOverview" : "welcome", fO = null !== nO && void 0 !== nO ? nO : WO, kO = (0, DB.useRef)(!1), dO = (0, DB.useRef)(!1), KO = (0, DB.useRef)(null), [uO, mO] = (0, DB.useState)(""), [IO, FO] = (0, DB.useState)(!1), [iO, LO] = (0, DB.useState)(null), gO = (0, kB.g)("connectedGame"), rO = PB && NO && "classic" === gO.gameNameWithVariation && !(0, zO.Q)(gO.lobbyName), [XO, wO] = (0, DB.useState)(null), [EO, hO] = (0, DB.useState)({
          [mD.f]: ""
        }), [eO, TO] = (0, DB.useState)({
          assets: {},
          revision: 0
        }), bO = (0, DB.useRef)(eO), CO = (0, DB.useCallback)((BB => {
          var OB;
          BB.revision < bO.current.revision || (bO.current = BB, TO(BB), SB(BB.startupError ? `Schematics could not load: ${BB.startupError}` : ""), null === (OB = qG.current) || void 0 === OB || OB.onLobbyFilesChanged({
            ...yG.current,
            ...(0, ED.k)(BB.assets)
          }))
        }), []), [HO, vO] = (0, DB.useState)(mD.f), [sO, xO] = (0, DB.useState)(null), [tO, BG] = (0, DB.useState)(null), OG = (0, DB.useRef)(!1), GG = (0, DB.useRef)(null), YG = (0, DB.useRef)(HO);
        YG.current = HO;
        const DG = (0, DB.useRef)(sO);
        DG.current = sO;
        const QG = sO ? null : iO,
          oG = QG && !QG.engineLocked ? QG.worldCodeEngine : null,
          jG = (0, DB.useRef)(tO);
        jG.current = tO;
        const yG = (0, DB.useRef)(EO);
        yG.current = EO;
        const JG = (0, DB.useRef)(null),
          MG = (0, DB.useRef)(null),
          [PG, zG] = (0, DB.useState)(!1),
          lG = (0, xD.s)(),
          pG = (0, DB.useRef)([]),
          qG = (0, DB.useRef)(null),
          ZG = (0, DB.useRef)(null),
          NG = (0, DB.useRef)(null);

        function RG(BB) {
          AB(BB), clearTimeout(KO.current), KO.current = setTimeout((() => {
            AB({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const WG = (0, DB.useCallback)((function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            OG.current && GG.current && (JB.gameBridge.send("sendCodeCollab", {
              XB: ID.c.Leave,
              wB: (0, ID.w)(GG.current),
              Ay: !!BB || null
            }), OG.current = !1, GG.current = null), wO(null)
          }), []),
          VG = (0, DB.useCallback)((BB => {
            const OB = {
              kind: "lobby",
              path: BB
            };
            GG.current = OB, vO(BB), zB.current = "", JB.gameBridge.send("sendCodeCollab", {
              XB: ID.c.Join,
              wB: (0, ID.w)(OB)
            }), OG.current = !0
          }), []),
          SG = (0, DB.useCallback)((BB => {
            var OB;
            const GB = null === (OB = ZG.current) || void 0 === OB ? void 0 : OB.collabState;
            return GB && "lobby" === GB.docKey.kind && GB.docKey.path === BB && YG.current === BB ? Promise.resolve({
              doc: GB.doc,
              version: GB.version,
              clientID: GB.clientID,
              docKey: GB.docKey,
              httpConfig: GB.httpConfig
            }) : new Promise(((OB, GB) => {
              const YB = setTimeout((() => {
                  pG.current = pG.current.filter((BB => BB !== DB)), GB(new Error(`Timed out joining ${BB}`))
                }), 15e3),
                DB = GB => {
                  "lobby" === GB.docKey.kind && GB.docKey.path === BB && (clearTimeout(YB), pG.current = pG.current.filter((BB => BB !== DB)), OB(GB))
                };
              pG.current.push(DB), YG.current !== BB ? (WG(!0), VG(BB)) : OG.current || VG(BB)
            }))
          }), [VG, WG]),
          nG = (0, DB.useCallback)((async function(BB, OB) {
            let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const YB = Date.now();
            let DB = BB in yG.current;
            for (; DB !== OB;) {
              if (Date.now() - YB > GB) throw new Error(`Timed out waiting for lobby path ${BB} present=${OB}`);
              await (0, WY.U)(50), DB = BB in yG.current
            }
          }), []),
          UG = (0, DB.useCallback)((BB => {
            const OB = yG.current,
              GB = mD.f in OB && mD.i in OB;
            if (!(0, FD.m)(BB) || GB) {
              if (YG.current === BB) {
                var YB;
                const DB = GB && (0, FD.m)(BB) ? BB === mD.f ? mD.i : mD.f : null !== (YB = (0, FD.e)(OB)) && void 0 !== YB ? YB : mD.f;
                MG.current = {
                  fromPath: BB,
                  toPath: DB
                }, vO(DB)
              }
              JB.gameBridge.send("sendCodeCollab", {
                XB: ID.c.DeleteFile,
                wB: (0, ID.w)({
                  kind: "lobby",
                  path: YG.current
                }),
                Vy: BB
              })
            }
          }), []),
          fG = (0, DB.useCallback)((BB => {
            CB.current = null, xO(null), BG(null), !PB || BB === YG.current && OG.current || (WG(!0), VG(BB))
          }), [PB, WG, VG]),
          kG = (0, DB.useCallback)(((BB, OB) => {
            const GB = XD.f[BB],
              YB = GB && OB in GB.files ? OB : "index.ts";
            if (BB !== DG.current || YB !== jG.current) {
              var DB;
              if (BB !== DG.current) null === (DB = qG.current) || void 0 === DB || DB.stopContinuousSync(), WG(!0);
              xO(BB), BG(YB)
            }
          }), [WG]),
          dG = (0, DB.useCallback)((BB => {
            var OB;
            const GB = YG.current,
              YB = yG.current[GB],
              DB = OG.current && !DG.current && GB in BB && void 0 !== YB ? {
                ...BB,
                [GB]: YB
              } : BB;
            hO(DB);
            const QB = JG.current;
            if (QB && QB in BB) JG.current = null, QB !== YG.current && fG(QB);
            else if (!(YG.current in BB) && OG.current && !DG.current) {
              var oB;
              fG(null !== (oB = (0, FD.e)(BB)) && void 0 !== oB ? oB : mD.f)
            }
            null === (OB = qG.current) || void 0 === OB || OB.onLobbyFilesChanged({
              ...DB,
              ...(0, ED.k)(bO.current.assets)
            })
          }), [fG]),
          KG = (0, DB.useCallback)((() => jo(YG.current).then((async BB => {
            if (!OG.current || !BB.files) return null;
            dG(BB.files);
            const OB = await jQ({
              action: "state"
            });
            return CO(OB), {
              ...BB.files,
              ...(0, ED.k)(OB.assets)
            }
          })).catch((BB => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", BB), RG({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [dG, CO]),
          uG = () => {
            jB()
          };
        (0, DB.useEffect)((() => {
          if (SB(""), !YB || !PB) return;
          let BB = !1;
          return bO.current = {
            assets: {},
            revision: 0
          }, TO(bO.current), jQ({
            action: "state"
          }).then((OB => {
            BB || CO(OB)
          })).catch((OB => {
            console.error("Could not load project schematics", OB), BB || SB("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            BB = !0
          }
        }), [YB, PB, CO]);
        const mG = (0, DB.useCallback)((function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            GG.current && JB.gameBridge.send("sendCodeCollab", {
              XB: ID.c.Submit,
              wB: (0, ID.w)(GG.current),
              ...BB ? {
                aB: "keepOpen"
              } : {}
            })
          }), []),
          IG = (0, DB.useCallback)((() => {
            if (!GG.current || "lobby" !== GG.current.kind) return;
            const BB = uO.trim();
            (0, iD.s)(BB) ? (JB.gameBridge.send("sendCodeCollab", {
              XB: ID.c.ReloadAsVariation,
              wB: (0, ID.w)(GG.current),
              aB: BB
            }), FO(!1)) : RG({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [uO]),
          FG = (0, DB.useCallback)((BB => {
            JB.gameBridge.send("sendCodeCollab", {
              XB: ID.c.SetEngine,
              wB: (0, ID.w)({
                kind: "lobby",
                path: YG.current
              }),
              aB: BB
            })
          }), []),
          iG = (0, DB.useCallback)((BB => {
            if (!DG.current && NO && (RB.current || PB)) {
              if (PB) {
                var OB;
                const GB = (0, FD.s)(yG.current, YG.current),
                  YB = Math.min(cO.B, Math.max(0, cO.F - GB)),
                  DB = BB.slice(0, YB);
                return zB.current = DB, hO((BB => ({
                  ...BB,
                  [YG.current]: DB
                }))), void(null === (OB = qG.current) || void 0 === OB || OB.onDocTextChanged(YG.current, DB))
              }
              zB.current = BB, PO(BB)
            }
          }), [NO, PB]);
        (0, UB.f)("EditLobbyCode", (BB => {
          var OB;
          IB.featureFlags.canSeePlayerWrittenText && PB && (WG(), NB(BB), zB.current = "", hO({
            [mD.f]: ""
          }), LO(null), vO(mD.f), xO(null), BG(null), JG.current = null, MG.current = null, null === (OB = qG.current) || void 0 === OB || OB.stopContinuousSync(), QB(), VG(mD.f))
        })), (0, UB.f)("EditCodeBlock", (BB => {
          let {
            pos: OB,
            canChangePos: GB
          } = BB;
          if (IB.featureFlags.canSeePlayerWrittenText && !PB)
            if (WG(), null !== OB && (OB = [...OB]), NB(OB), RB.current = GB, null !== OB) {
              zB.current = "", PO(""), QB();
              const BB = {
                  kind: "codeBlock",
                  pos: OB
                },
                YB = (0, ID.w)(BB);
              lO.current !== YB && (lO.current = YB, QO([]), JO(oO)), qO((0, Oo.c)(YB, [OB[0], OB[1], OB[2]], !!GB)), GG.current = BB, JB.gameBridge.send("sendCodeCollab", {
                XB: ID.c.Join,
                wB: (0, ID.w)(BB)
              }), OG.current = !0
            } else YB && jB()
        })), (0, UB.f)("codeCollabRejoin", (BB => {
          const OB = GG.current ? (0, ID.w)(GG.current) : null;
          OB && BB.docKey === OB && (zB.current = BB.doc, PB || PO(BB.doc), wO((OB => OB ? {
            ...OB,
            doc: BB.doc,
            version: BB.version,
            clientID: (0, rD.d)()
          } : OB)))
        })), (0, UB.f)("codeCollab", (BB => {
          var OB;
          const GB = GG.current ? (0, ID.w)(GG.current) : null;
          if (BB.type === ID.f.LobbyFilesChanged && PB) {
            if ("string" !== typeof BB.files) return void KG();
            try {
              dG(JSON.parse(BB.files))
            } catch (JB) {
              console.error("[CodeCollab] Failed to parse lobby files", JB), KG()
            }
            return
          }
          if (BB.type === ID.f.EngineSettings && PB) return void LO(zQ(BB.engineSettings));
          const DB = BB.type === ID.f.Joined ? (0, ID.j)(BB.docKey) : null,
            QB = PB && "lobby" === (null === (OB = GG.current) || void 0 === OB ? void 0 : OB.kind) && (0, FD.m)(GG.current.path) && "lobby" === (null === DB || void 0 === DB ? void 0 : DB.kind) && (0, FD.m)(DB.path);
          if (!GB || BB.docKey === GB || QB)
            if (BB.type !== ID.f.ForceClose) {
              if (YB)
                if (BB.type === ID.f.Joined) {
                  var oB;
                  const MB = JSON.parse(BB.peers),
                    lB = BB.existingCursors ? JSON.parse(BB.existingCursors) : [],
                    ZB = (0, rD.d)(),
                    NB = oQ(),
                    {
                      gsUrl: RB,
                      gameNameWithVariation: WB,
                      lobbyName: VB
                    } = NB,
                    SB = null !== (oB = (0, ID.j)(BB.docKey)) && void 0 !== oB ? oB : GG.current;
                  SB && (GG.current = SB, "lobby" === SB.kind && (vO(SB.path), YG.current = SB.path));
                  const nB = SB || (PB ? {
                    kind: "lobby",
                    path: YG.current
                  } : {
                    kind: "codeBlock",
                    pos: qB
                  });

                  function UB(OB) {
                    var GB, YB;
                    if (!OG.current) return;
                    const DB = null !== (GB = OB.code) && void 0 !== GB ? GB : "",
                      QB = null !== (YB = OB.collabVersion) && void 0 !== YB ? YB : 0;
                    zB.current = DB, PB || PO(DB), PB && OB.files ? hO(OB.files) : PB && hO((BB => ({
                      ...BB,
                      [YG.current]: DB
                    })));
                    const oB = {
                      doc: DB,
                      version: QB,
                      clientID: ZB,
                      docKey: nB,
                      peers: MB,
                      editorCount: BB.editorCount,
                      existingCursors: lB,
                      httpConfig: NB
                    };
                    if (wO(oB), "lobby" === nB.kind) {
                      var jB;
                      const BB = {
                        doc: DB,
                        version: QB,
                        clientID: ZB,
                        docKey: nB,
                        httpConfig: NB
                      };
                      for (const OB of [...pG.current]) OB(BB);
                      null === (jB = qG.current) || void 0 === jB || jB.startWhenReady()
                    }
                    OB.canSeeCode ? (clearTimeout(KO.current), AB({
                      message: null,
                      type: null
                    })) : function(BB) {
                      clearTimeout(KO.current), AB(BB)
                    }(Mo);
                    const yB = CB.current;
                    CB.current = null, PB && yB && OB.files && yB in OB.files && yB !== YG.current && fG(yB)
                  }
                  PB ? jo(YG.current).then(UB).catch((BB => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", BB), WG()
                  })) : (0, uD.postJsonWithMetricsCookiesAndJsonResponse)(`${RB}/code/get-code-block`, KD.gk["get-code-block"].toBuffer({
                    gameNameWithVariation: WB,
                    lobbyName: VB,
                    pos: qB
                  }), {
                    retries: 1
                  }).then(UB).catch((BB => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", BB), WG()
                  }))
                } else if (BB.type === ID.f.Presence) {
                if (!GB) return;
                const fB = JSON.parse(BB.peers);
                wO((OB => OB ? {
                  ...OB,
                  peers: fB,
                  editorCount: BB.editorCount
                } : OB))
              }
            } else {
              var yB;
              if (!GB) return;
              YB && PB && "keptOpen" === BB.updates && pB.o.tM("CodeEditorKeepEdits");
              const kB = GG.current;
              OG.current = !1, GG.current = null, wO(null);
              if (!PB || "close" === BB.updates) return (0, Bo.h)(), void(YB && jB());
              if (!YB) return;
              const dB = yG.current,
                KB = MG.current;
              MG.current = null;
              const uB = "lobby" === (null === kB || void 0 === kB ? void 0 : kB.kind) && kB.path === (null === KB || void 0 === KB ? void 0 : KB.fromPath),
                mB = KB && (uB || KB.toPath in dB || (0, FD.m)(KB.toPath)) ? KB.toPath : YG.current in dB ? YG.current : null !== (yB = (0, FD.e)(dB)) && void 0 !== yB ? yB : mD.f;
              VG(mB)
            }
        })), (0, UB.f)("refetchCode", (() => {
          IB.featureFlags.canSeePlayerWrittenText && YB && OG.current && (NO || (WG(), PB ? pB.o.tM("EditLobbyCode", qB) : pB.o.tM("EditCodeBlock", {
            pos: qB,
            canChangePos: RB.current
          })))
        }));
        const LG = (0, DB.useCallback)((() => {
            YB && (rB(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [YB]),
          gG = (0, DB.useCallback)((() => {
            rB(!1)
          }), []);
        (0, DB.useEffect)((() => {
          YB && NO && ("docsButton" === SO && gB ? (0, VQ.h)("docsButton") : SO && VQ.j.includes(SO) && !gB && (rB(!0), OO(!1)))
        }), [YB, NO, SO, gB, OO]);
        const rG = (0, DB.useCallback)((() => {
          OO(!1)
        }), [OO]);
        (0, DB.useEffect)((() => {
          YB && NO && ZO && ("aiHelperButton" === fO && BO ? (0, VQ.h)("aiHelperButton") : fO && VQ.d.includes(fO) && !BO && (OO(!0), rB(!1)))
        }), [YB, NO, ZO, fO, BO, OO]), (0, DB.useEffect)((() => {
          if (!YB || !NO) return;
          const BB = PB ? "worldCode" : "codeBlock";
          return (0, VQ.B)(BB, !0), () => {
            (0, VQ.B)(BB, !1)
          }
        }), [YB, NO, PB]), (0, DB.useEffect)((() => {
          if (YB) return () => {
            kO.current ? kO.current = !1 : (0, VQ.z)()
          }
        }), [YB]), (0, DB.useEffect)((() => {
          (0, VQ.D)("exportButton", !!RO)
        }), [RO]);
        const {
          t: XG
        } = (0, HB.H)(), wG = !BO && oO > yO, EG = wG ? lB.Q : lB.C, cG = (0, DB.useCallback)(((BB, OB) => {
          pB.o.tM("CodeEditorGoToLine", {
            path: BB,
            line: OB
          }), fG(BB)
        }), [fG]), hG = (0, DB.useCallback)((BB => {
          NG.current = BB
        }), []), aG = function(BB, OB) {
          const [GB, YB] = (0, DB.useState)(null);
          return (0, DB.useEffect)((() => {
            if (!OB) return void YB(null);
            let GB = !1;
            return sD(BB).then((BB => {
              GB || YB(BB)
            }), (BB => {
              console.error("[CodeEditor] could not collect the imported plugins", BB), GB || YB(null)
            })), () => {
              GB = !0
            }
          }), [BB, OB]), GB
        }(EO, YB);
        (0, DB.useEffect)((() => {
          aG && sO && !aG.includes(sO) && (xO(null), BG(null), PB && !OG.current && VG(YG.current))
        }), [sO, aG, PB, VG]), ZG.current = {
          collabState: XO,
          ensureJoinedPath: SG,
          waitForLobbyPath: nG,
          pullLobbyFiles: KG,
          t: XG,
          canEditCode: !!NO
        }, qG.current || (qG.current = new DQ({
          getLobbyFiles: () => ({
            ...yG.current,
            ...(0, ED.k)(bO.current.assets)
          }),
          deleteSchematic: async BB => {
            const OB = await jQ({
              action: "remove",
              path: BB,
              expectedRevision: bO.current.revision
            });
            CO(OB)
          },
          getActivePath: () => YG.current,
          getCollabSnapshot: () => {
            var BB;
            if (DG.current) return null;
            const OB = null === (BB = ZG.current) || void 0 === BB ? void 0 : BB.collabState;
            return OB ? {
              doc: OB.doc,
              version: OB.version,
              clientID: OB.clientID,
              docKey: OB.docKey,
              httpConfig: OB.httpConfig
            } : null
          },
          replaceActiveDoc: (BB, OB) => {
            var GB, YB;
            return null !== (GB = null === (YB = NG.current) || void 0 === YB ? void 0 : YB.call(NG, BB, OB)) && void 0 !== GB && GB
          },
          ensureJoined: BB => ZG.current.ensureJoinedPath(BB),
          createFile: (BB, OB) => {
            !1 !== (null === OB || void 0 === OB ? void 0 : OB.focus) && (JG.current = BB), JB.gameBridge.send("sendCodeCollab", {
              XB: ID.c.CreateFile,
              wB: (0, ID.w)({
                kind: "lobby",
                path: YG.current
              }),
              Vy: BB
            })
          },
          renameFile: (BB, OB) => {
            const GB = (0, ID.w)({
              kind: "lobby",
              path: YG.current
            });
            YG.current === BB && (MG.current = {
              fromPath: BB,
              toPath: OB
            }, vO(OB)), JB.gameBridge.send("sendCodeCollab", {
              XB: ID.c.RenameFile,
              wB: GB,
              Vy: BB,
              Sy: OB
            })
          },
          deleteFile: BB => {
            UG(BB)
          },
          waitForLobbyPath: (BB, OB, GB) => ZG.current.waitForLobbyPath(BB, OB, GB),
          pullLobbyFiles: () => ZG.current.pullLobbyFiles(),
          setMessage: (BB, OB) => {
            RG({
              message: BB,
              type: OB
            })
          },
          onUnlinked: () => {
            zG(!1)
          },
          t: BB => ZG.current.t(BB),
          canEditCode: () => ZG.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: BB,
              lobbyName: OB
            } = JB.gameBridge.latest("connectedGame");
            return (0, xD.g)(BB, OB)
          }
        }));
        const eG = (0, DB.useCallback)((async BB => {
            const OB = qG.current;
            if (!OB) return !1;
            try {
              return await OB.writeLobbyFiles(BB)
            } catch (GB) {
              return console.error("World Code AI: couldn't write the change", GB), !1
            }
          }), []),
          TG = (0, DB.useCallback)((async BB => {
            var OB, GB;
            const YB = null === (OB = BB.find((BB => BB.path === tQ.c))) || void 0 === OB ? void 0 : OB.text,
              DB = GG.current;
            return void 0 !== YB && "codeBlock" === (null === DB || void 0 === DB ? void 0 : DB.kind) && (!(null === (GB = NG.current) || void 0 === GB || !GB.call(NG, (0, ID.w)(DB), YB)) && (zB.current = YB, PO(YB), !0))
          }), []),
          bG = (0, DB.useCallback)((async () => {
            try {
              var BB, OB;
              const GB = await jo(mD.f);
              return !1 === GB.canSeeCode ? null : null !== (BB = GB.files) && void 0 !== BB ? BB : {
                [mD.f]: null !== (OB = GB.code) && void 0 !== OB ? OB : ""
              }
            } catch (GB) {
              return console.error("World Code AI: couldn't read World Code for a code block", GB), null
            }
          }), []),
          CG = (0, DB.useMemo)((() => ({
            [tQ.c]: MO
          })), [MO]),
          HG = (0, DB.useCallback)(((BB, OB) => {
            pB.o.tM("CodeEditorGoToLine", {
              path: tQ.c,
              line: OB
            })
          }), []);
        (0, DB.useEffect)((() => {
          BO && YB && JO(oO)
        }), [BO, YB, oO]);
        const vG = (0, DB.useCallback)((() => {
            var BB, OB;
            mG();
            const GB = (0, IB.isTouchscreen)() ? "open World Code again" : `press ${null!==(BB=null===(OB=aO.t.OpenCodeEditor)||void 0===OB?void 0:OB[0])&&void 0!==BB?BB:"F8"}`,
              YB = PB ? `\ud83e\udd16 Try out your change, then ${GB} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            pB.o.tM("chat", {
              content: [{
                str: YB,
                style: {
                  color: fB.J.cyanUiText
                }
              }]
            })
          }), [mG, PB]),
          sG = (0, DB.useCallback)((BB => {
            const OB = qB,
              GB = RB.current;
            PB || !OB || JB.gameBridge.lookup("codeBlockClickable", OB) ? (0, Bo.l)(BB, {
              submit: () => {
                mG(), pB.o.tM("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: fB.J.cyanUiText
                    }
                  }]
                }), !PB && OB && setTimeout((() => {
                  JB.gameBridge.send("clickCodeBlock", OB)
                }), 1e3)
              },
              reopen: () => {
                (0, EB.r)() || (PB ? pB.o.tM("EditLobbyCode", OB) : pB.o.tM("EditCodeBlock", {
                  pos: OB,
                  canChangePos: GB
                }))
              }
            }) : vG()
          }), [mG, PB, qB, vG]),
          xG = (0, DB.useCallback)((() => {
            OO(!1)
          }), [OO]),
          tG = (0, DB.useRef)(uG);
        tG.current = uG;
        const BY = (0, DB.useCallback)((function(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            pB.o.tM("WorldCodeAiDraft", {
              text: BB,
              send: OB
            }), tG.current(), pB.o.tM("EditLobbyCode", qB)
          }), [qB]),
          OY = (0, DB.useCallback)((BB => {
            tG.current(), BB.codeBlock ? pB.o.tM("EditCodeBlock", {
              pos: [...BB.pos],
              canChangePos: BB.canChangePos
            }) : pB.o.tM("EditLobbyCode", qB)
          }), [qB]);
        (0, UB.f)("WorldCodeAiDraft", (BB => {
          PB && (YO(BB), OO(!0))
        }));
        const GY = !!NO && !!SO && VQ.j.includes(SO),
          YY = !!NO && !!fO && VQ.d.includes(fO);
        (0, DB.useEffect)((() => {
          YB && BO && ZO && !GY && rB(!1)
        }), [YB, BO, ZO, GY]);
        const DY = (0, DB.useCallback)((() => {
            OO(!1), rB(!1)
          }), [OO]),
          {
            mP: QY,
            setWorld: oY,
            toggleWorld: jY
          } = function(BB) {
            let {
              showAi: OB,
              showDocs: GB,
              showChat: YB,
              hideOtherRightPanels: QB
            } = BB;
            const [oB, jB] = (0, DB.useState)("hidden"), yB = (0, DB.useRef)(null), JB = (0, DB.useCallback)((() => {
              yB.current = null, jB((BB => "hidden" === BB ? BB : (0, KQ.f)() ? "hidden" : "shown"))
            }), []);
            (0, DB.useEffect)((() => {
              (OB || GB) && JB()
            }), [OB, GB, JB]), (0, DB.useEffect)((() => {
              YB && JB()
            }), [YB, JB]);
            const MB = "hidden" !== oB && (0, KQ.f)();
            (0, DB.useLayoutEffect)((() => {
              if (MB) {
                const BB = document.activeElement;
                BB instanceof HTMLElement && BB.closest(".cm-content") && (yB.current = BB, BB.blur())
              } else {
                var BB;
                null === (BB = yB.current) || void 0 === BB || BB.focus(), yB.current = null
              }
            }), [MB]);
            const PB = (0, DB.useCallback)((() => {
              "hidden" === oB ? (jB("shown"), (0, KQ.f)() && QB()) : jB("hidden")
            }), [oB, QB]);
            return {
              mP: oB,
              setWorld: jB,
              toggleWorld: PB
            }
          }({
            showAi: BO,
            showDocs: gB,
            showChat: XB,
            hideOtherRightPanels: DY
          }),
          yY = BO && null !== pO && ZO,
          JY = (0, DB.useCallback)((() => {
            YO(null)
          }), []),
          [MY, PY] = (0, DB.useState)(null);
        (0, UB.f)("WorldCodeAiSelection", (BB => {
          YB && (PY(BB), OO(!0), rB(!1))
        }));
        const zY = (0, DB.useCallback)((() => {
          PY(null)
        }), []);
        (0, UB.f)("chat", (BB => {
          let {
            content: OB
          } = BB;
          if (!PB && null === lO.current) return;
          const GB = Array.isArray(OB) ? OB : [OB],
            YB = GB.some((BB => {
              var OB;
              return (null === BB || void 0 === BB || null === (OB = BB.style) || void 0 === OB ? void 0 : OB.color) === fB.J.redUiText
            })),
            DB = GB.map((BB => {
              var OB;
              const GB = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.str) && void 0 !== OB ? OB : BB;
              return "string" === typeof GB ? GB : ""
            })).join("");
          YB && /world code|error/i.test(DB) && (QO((BB => [...BB, DB].slice(-10))), jO((BB => BB + 1)), (0, Bo.d)(DB))
        })), (0, DB.useEffect)((() => {
          if (!YB || !PB || !lG) return;
          let BB = !1;
          return (async (OB, GB) => {
            const YB = await (null === (OB = qG.current) || void 0 === OB ? void 0 : OB.tryRestoreHandle());
            !BB && YB && (zG(!0), null === (GB = qG.current) || void 0 === GB || GB.startWhenReady())
          })(), () => {
            BB = !0
          }
        }), [YB, PB, lG]), (0, DB.useEffect)((() => {
          var BB;
          YB || (null === (BB = qG.current) || void 0 === BB || BB.stopContinuousSync(), WG(!1), dO.current && (dO.current = !1, JB.gameBridge.send("sendChatMessage", {
            ty: "//export",
            channelName: null
          })))
        }), [YB, WG]);
        const lY = (0, DB.useCallback)((async () => {
            if (lG && qG.current) try {
              if (!await qG.current.linkFolder()) return;
              zG(!0), await qG.current.startWhenReady()
            } catch (BB) {
              console.error("[WorldCodeDirectorySync] Link failed", BB), RG({
                message: XG("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [lG, XG]),
          pY = (0, DB.useCallback)((async () => {
            qG.current && await qG.current.unlinkFolder()
          }), []),
          qY = (0, DB.useCallback)((() => {
            lG ? PG ? pY() : lY() : QD.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok",
              middleScreenPopupContainerClassName: aD.e
            })
          }), [lG, PG, lY, pY]),
          ZY = PB && "hidden" !== QY;
        return (0, MB.jsxs)(oB.d, {
          className: AG()("CodeEditorBg", {
            CodeEditorLight: mB,
            WorldShown: "hidden" !== QY,
            WorldTouchControl: "touchControls" === xB
          }),
          close: uG,
          escDoesExit: !0,
          show: YB,
          togglePointerLock: !1,
          globallyUniqueKey: PB ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, MB.jsx)(AQ.b, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: XG("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!NO && !PB
          }), (0, MB.jsx)(AQ.b, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, MB.jsxs)(MB.Fragment, {
              children: [(0, MB.jsx)("p", {
                children: XG("codeEditor:tutorialWorldCodeWelcome")
              }), (0, MB.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, MB.jsx)("li", {
                  children: XG("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, MB.jsx)("li", {
                  children: XG("codeEditor:tutorialWorldCodeUseReact")
                }), (0, MB.jsx)("li", {
                  children: XG("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!NO && PB
          }), (0, MB.jsx)("div", {
            className: "CodeEditorTitle",
            children: PB ? "World Code" : "Code Block"
          }), (0, MB.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, MB.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, MB.jsx)(bB.g, {
                tooltipInner: XG(RO ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: RO ? void 0 : 0,
                hideTooltip: "exportButton" === WO,
                children: (0, MB.jsx)(AQ.j, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: XG("codeEditor:tutorialExport"),
                  enabled: !!NO,
                  children: (0, MB.jsx)(lB.q, {
                    className: "CodeEditorButton",
                    disabled: !RO,
                    onClick: () => {
                      "exportButton" === WO && ((0, VQ.h)("exportButton"), kO.current = !0), dO.current = !0, uG()
                    },
                    padDestructive: !0,
                    children: XG("codeEditor:exportWorld")
                  })
                })
              }), (0, MB.jsx)(sQ, {
                mP: QY,
                setWorld: oY,
                toggleWorld: jY,
                aiShown: yY,
                closeAi: xG
              })]
            }), (0, MB.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [NO && (0, MB.jsx)(bB.g, {
                tooltipInner: XG("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === WO,
                children: (0, MB.jsx)(AQ.j, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: XG("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, MB.jsx)(lB.f, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: XG("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, VQ.h)("helpButton"), QD.NotificationProvider.showCustomPopup({
                        body: BB => (0, MB.jsx)(SQ, {
                          close: BB
                        }),
                        unlockPointerKey: "codeEditorTutorials",
                        middleScreenPopupContainerClassName: aD.e
                      })
                    },
                    children: (0, MB.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, MB.jsx)(ZB.b, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, MB.jsx)(bB.g, {
                tooltipInner: XG("codeEditor:closeTooltip"),
                children: (0, MB.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    uG()
                  },
                  children: (0, MB.jsx)(lB.m, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, MB.jsx)(gD, {
            peers: null !== (OB = null === XO || void 0 === XO ? void 0 : XO.peers) && void 0 !== OB ? OB : []
          }), (0, MB.jsxs)("div", {
            className: AG()("CodeEditorMainArea", {
              WorldCovers: "always" === uQ(QY),
              WorldCoversWhenNarrow: "narrow" === uQ(QY)
            }),
            children: [XB && eB && (0, MB.jsx)(KQ.b, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                cB(!1)
              },
              children: (0, MB.jsx)(dQ, {
                inputRef: hB
              })
            }), PB && (0, MB.jsx)(eD, {
              schematics: eO.assets,
              onManageSchematic: BB => {
                NO && QD.NotificationProvider.showCustomPopup({
                  body: OB => (0, MB.jsx)(PQ, {
                    initialPath: BB,
                    onChanged: CO,
                    onClose: OB
                  }),
                  unlockPointerKey: "worldCodeSchematics",
                  middleScreenPopupContainerClassName: aD.e
                })
              },
              files: EO,
              activePath: HO,
              canEdit: !!NO,
              directoryLinked: PG,
              pluginNames: null !== aG && void 0 !== aG ? aG : Jo,
              activePluginName: sO,
              activePluginFile: tO,
              onSelect: fG,
              onSelectPlugin: kG,
              onToggleDirectorySync: qY,
              onCreate: BB => {
                JG.current = BB, JB.gameBridge.send("sendCodeCollab", {
                  XB: ID.c.CreateFile,
                  wB: (0, ID.w)({
                    kind: "lobby",
                    path: YG.current
                  }),
                  Vy: BB
                })
              },
              onRename: (BB, OB) => {
                YG.current === BB && (MG.current = {
                  fromPath: BB,
                  toPath: OB
                }, vO(OB)), JB.gameBridge.send("sendCodeCollab", {
                  XB: ID.c.RenameFile,
                  wB: (0, ID.w)({
                    kind: "lobby",
                    path: YG.current
                  }),
                  Vy: BB,
                  Sy: OB
                })
              },
              onRenameFolder: (BB, OB) => {
                const [GB] = (0, FD.p)([YG.current], BB, OB);
                GB && (MG.current = {
                  fromPath: GB[0],
                  toPath: GB[1]
                }, vO(GB[1])), JB.gameBridge.send("sendCodeCollab", {
                  XB: ID.c.RenameFolder,
                  wB: (0, ID.w)({
                    kind: "lobby",
                    path: YG.current
                  }),
                  Vy: BB,
                  Sy: OB
                })
              },
              onDelete: UG
            }), (0, MB.jsx)("div", {
              className: AG()("CodeEditorMessage", {
                CodeEditorMessageHidden: !nB.message,
                CodeEditorMessageSuccess: "success" === nB.type
              }),
              children: nB.message && (0, MB.jsx)("div", {
                className: "CodeEditorMessageText",
                children: nB.message
              })
            }), (0, MB.jsx)(DB.Suspense, {
              fallback: (0, MB.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, MB.jsx)(dB.b, {})
              }),
              children: (0, MB.jsx)(Go, {
                isLobbyCode: PB,
                code: XO ? XO.doc : zB.current,
                files: PB ? EO : void 0,
                activePath: PB ? HO : void 0,
                pluginName: sO,
                pluginFile: tO,
                pluginSource: sO && tO ? null === (GB = XD.f[sO]) || void 0 === GB ? void 0 : GB.files[tO] : void 0,
                onChange: iG,
                canEditCode: NO,
                setTemporaryMessage: RG,
                close: uG,
                showTooltips: KB,
                lightMode: mB,
                collabState: XO,
                setActiveDocReplacer: hG,
                showAiHints: ZO && iB,
                canAiChangeCode: !!NO && (PB || !!RB.current),
                onRemoteDocChange: BB => {
                  var OB;
                  (zB.current = BB, PB) ? (hO((OB => ({
                    ...OB,
                    [YG.current]: BB
                  }))), null === (OB = qG.current) || void 0 === OB || OB.onDocTextChanged(YG.current, BB)) : PO(BB)
                }
              })
            }), (gB || yY || "hidden" !== QY) && (0, MB.jsxs)(mQ, {
              mP: QY,
              worldPanel: (0, MB.jsx)(HQ, {
                shown: QY,
                setShown: oY,
                canInsertCode: !!NO && !sO
              }),
              closeWorld: () => {
                oY("hidden")
              },
              aiShown: yY,
              defaultWidth: gB ? "40%" : "max(18rem, 36%)",
              children: [gB && (0, MB.jsx)(KQ.b, {
                onClose: GY ? void 0 : gG,
                children: (0, MB.jsx)(DB.Suspense, {
                  fallback: (0, MB.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, MB.jsx)(dB.b, {})
                  }),
                  children: (0, MB.jsx)(Yo, {
                    popOutDocs: LG,
                    hideDocs: gG,
                    tutorialEnabled: !!NO
                  })
                })
              }), yY && (0, MB.jsx)(KQ.b, {
                onClose: YY ? void 0 : xG,
                children: (0, MB.jsx)(DB.Suspense, {
                  fallback: (0, MB.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, MB.jsx)(dB.b, {})
                  }),
                  children: (0, MB.jsx)(Do, {
                    target: pO,
                    chatKey: `${gO.gameNameWithVariation}/${gO.lobbyName}/aiHelper`,
                    historyKey: `${gO.gameNameWithVariation}/${gO.lobbyName}/${pO.key}`,
                    files: pO.codeBlock ? CG : EO,
                    activePath: pO.codeBlock ? tQ.c : HO,
                    canEdit: !!NO && (pO.codeBlock ? !!RB.current : !sO),
                    isLoaded: null !== XO,
                    errors: DO,
                    errorCount: oO,
                    applyFiles: pO.codeBlock ? TG : eG,
                    submit: vG,
                    testRun: sG,
                    close: xG,
                    goToLine: pO.codeBlock ? HG : cG,
                    openWorldCode: pO.codeBlock ? BY : void 0,
                    readWorldCode: pO.codeBlock ? bG : void 0,
                    viewChunk: Qo,
                    viewGameState: oo,
                    openTarget: NO ? OY : void 0,
                    draft: GO,
                    onDraftUsed: JY,
                    selection: MY,
                    onSelectionUsed: zY
                  }, pO.key)
                })
              })]
            })]
          }), !PB && NO && RB.current && (0, MB.jsx)(lQ, {
            length: MO.length
          }), (null === QG || void 0 === QG ? void 0 : QG.fallback) && (0, MB.jsx)(pQ, {
            fallback: QG.fallback,
            onGoToLine: cG
          }), (0, MB.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, MB.jsx)(bB.g, {
              tooltipInner: XG(mB ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, MB.jsx)(lB.f, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: XG(mB ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  FB(!mB)
                },
                children: (0, MB.jsx)(ZB.b, {
                  name: mB ? "moon" : "sun-bright"
                })
              })
            }), (0, MB.jsx)(bB.g, {
              tooltipInner: XG(ZY ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, MB.jsx)(lB.q, {
                className: "CodeEditorButton",
                onClick: () => {
                  mG(ZY)
                },
                padDefaultFocus: !0,
                children: XG("codeEditor:submitCode")
              })
            }), (0, MB.jsx)(bB.g, {
              tooltipInner: XG(gB ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === SO || "hideDocsButton" === SO,
              children: (0, MB.jsx)(AQ.j, {
                tutorial: VO,
                step: gB ? "hideDocsButton" : "docsButton",
                text: XG(gB ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!NO,
                placement: "top",
                waitForClick: !0,
                onPrevious: gB && "welcome" === VO ? gG : void 0,
                children: (0, MB.jsx)(lB.C, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, VQ.h)(gB ? "hideDocsButton" : "docsButton"), rB(!gB), OO(!1)
                  },
                  children: XG(gB ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), ZO && (0, MB.jsx)(AQ.j, {
              tutorial: UO,
              step: BO ? "hideAiHelperButton" : "aiHelperButton",
              text: XG(BO ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === UO ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!NO,
              placement: "top",
              waitForClick: !0,
              onPrevious: BO && "welcome" === UO ? rG : void 0,
              children: (0, MB.jsx)(EG, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, VQ.h)(BO ? "hideAiHelperButton" : "aiHelperButton"), OO(!BO), rB(!1)
                },
                children: BO ? "Hide AI Helper" : wG ? "Fix error with AI" : "AI Helper"
              })
            }), eB && (0, MB.jsx)(bB.g, {
              tooltipInner: XG(XB ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, MB.jsx)(lB.C, {
                className: "CodeEditorButton",
                onClick: () => {
                  aB.current = !XB, cB(!XB)
                },
                children: XG(XB ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, MB.jsx)(bB.g, {
              tooltipInner: XG("hidden" === QY ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, MB.jsx)(lB.C, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: jY,
                children: XG("hidden" === QY ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, MB.jsx)(bB.g, {
              tooltipInner: XG("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, MB.jsx)(lB.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  pB.o.tM("FormatCode")
                },
                children: XG("codeEditor:formatCode")
              })
            }), (0, MB.jsx)(bB.g, {
              tooltipInner: XG("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, MB.jsx)(lB.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(zB.current).then((() => {
                    RG({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    RG({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: XG("codeEditor:copyCode")
              })
            }), (0, MB.jsx)(bB.g, {
              tooltipInner: XG(KB ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, MB.jsx)(lB.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  uB(!KB)
                },
                children: XG(KB ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !PB && (0, MB.jsx)(bB.g, {
              tooltipInner: XG("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === WO,
              children: (0, MB.jsx)(AQ.j, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: XG("codeEditor:tutorialWorldCodeButton"),
                enabled: !!NO,
                placement: "top",
                waitForClick: !0,
                children: (0, MB.jsx)(lB.C, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === WO && ((0, VQ.h)("worldCodeButton"), kO.current = !0), uG(), pB.o.tM("EditLobbyCode", qB)
                  },
                  children: XG("codeEditor:worldCode")
                })
              })
            }), (rO || oG || ZO) && (0, MB.jsx)(bB.g, {
              tooltipInner: XG("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, MB.jsx)(lB.f, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  FO(!0)
                },
                children: (0, MB.jsx)(ZB.b, {
                  name: "ellipsis"
                })
              })
            })]
          }), IO && (0, MB.jsx)(jD.c, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              FO(!1)
            },
            body: (0, MB.jsx)(WQ, {
              engine: oG,
              onSetEngine: FG,
              aiHints: ZO ? {
                shown: iB,
                setShown: LB
              } : null,
              variation: rO ? {
                name: uO,
                setName: mO,
                reload: IG
              } : null
            })
          })]
        })
      }));
    var zo = GB(37267);
    const po = new Set(["inventory", "ironChestPasskeyInput"]);
    const qo = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function Zo(BB) {
      return "inventory" === BB
    }
    const No = (0, DB.memo)((function() {
      const {
        openEverythingMenuName: BB,
        openInGameMenuName: OB
      } = (0, wB.o)(["openEverythingMenuName", "openInGameMenuName"]), GB = (0, kB.g)("fullInventory"), QB = (0, DB.useRef)(null), oB = (0, uO.l)();
      (0, UB.f)("toggleMenu", (BB => {
        var OB;
        if (!oB.shown) return;
        const GB = wB.c.get("openInGameMenuName");
        let YB = BB.split("|")[0];
        const DB = null !== (OB = BB.split("|")[1]) && void 0 !== OB ? OB : null;
        if (("closeCurrentMenu" === DB && GB || YB === GB) && (QB.current = null, YB = null), null !== YB && (jB = !JB.gameBridge.latest("localPlayerAlive"), yB = YB, jB && po.has(yB))) return void(null !== JB.gameBridge.latest("inventory").chest && JB.gameBridge.send("closeChest", null));
        var jB, yB;
        const MB = "closeCurrentMenu" === DB ? null : DB;
        QB.current !== MB && (QB.current = MB), null !== YB && (0, ND.p)(ND.b, {
          keepsMovement: Zo(YB)
        }), wB.c.set({
          openInGameMenuName: YB
        })
      })), (0, kB.b)("localPlayerAliveSet", (BB => {
        BB || function() {
          (0, zo.f)();
          const BB = wB.c.get("openInGameMenuName");
          null !== BB && po.has(BB) && wB.c.set({
            openInGameMenuName: null
          })
        }()
      }));
      const jB = (0, DB.useCallback)((BB => () => {
          pB.o.tM("toggleMenu", BB)
        }), []),
        yB = (0, DB.useRef)({
          cantCrouchIfNotFullscreen: jB("cantCrouchIfNotFullscreen"),
          makeReport: jB("makeReport"),
          makeDiscordReport: jB("makeDiscordReport"),
          editBook: jB("editBook"),
          editNameTag: jB("editNameTag"),
          inventory: jB("inventory"),
          inviteLink: jB("inviteLink"),
          writeOnBoard: jB("writeOnBoard"),
          codeEditor: jB("codeEditor"),
          lobbyCodeEditor: jB("lobbyCodeEditor"),
          customLobbyBlockEditor: jB("customLobbyBlockEditor"),
          ironChestPasskeyInput: jB("ironChestPasskeyInput"),
          petUi: jB("petUi")
        }),
        PB = (0, DB.useCallback)((() => {
          wB.c.set({
            openInGameMenuName: null
          })
        }), []),
        zB = (0, DB.useRef)(null);
      return (0, DB.useEffect)((() => {
        if (OB) {
          var BB;
          (0, ND.p)(ND.b, {
            keepsMovement: Zo(OB)
          }), zB.current = qo.has(OB) ? null !== (BB = wB.c.get("openEverythingMenuName")) && void 0 !== BB ? BB : zB.current : null, wB.c.set({
            openEverythingMenuName: null
          })
        } else {
          const BB = zB.current;
          zB.current = null, null !== BB && null === wB.c.get("openEverythingMenuName") && wB.c.set({
            openEverythingMenuName: BB
          }), QB.current = null, (0, ND.o)(ND.b)
        }
      }), [OB]), (0, DB.useEffect)((() => {
        null !== BB && PB()
      }), [BB, PB]), (0, MB.jsxs)(MB.Fragment, {
        children: [(0, MB.jsx)(YB.h, {
          show: "clientGame" === OB
        }), (0, MB.jsx)(GD, {
          show: "cantCrouchIfNotFullscreen" === OB,
          onOpen: yB.current.cantCrouchIfNotFullscreen,
          onClose: PB
        }), (0, MB.jsx)(zD, {
          show: "makeReport" === OB,
          onOpen: yB.current.makeReport,
          onClose: PB
        }), (0, MB.jsx)(ZD, {
          show: "makeDiscordReport" === OB,
          onOpen: yB.current.makeDiscordReport,
          onClose: PB
        }), (0, MB.jsx)(OG, {
          show: "editBook" === OB,
          onOpen: yB.current.editBook,
          onClose: PB
        }), (0, MB.jsx)(tO, {
          show: "editNameTag" === OB,
          onOpen: yB.current.editNameTag,
          onClose: PB
        }), GB && (0, MB.jsx)(tY, {
          show: "inventory" === OB,
          onOpen: yB.current.inventory,
          onClose: PB,
          variation: QB.current
        }), (0, MB.jsx)(mO, {
          show: "inviteLink" === OB,
          onClose: PB,
          option: QB.current
        }), (0, MB.jsx)(LB, {
          show: "retentionFeatures" === OB,
          onClose: PB
        }), (0, MB.jsx)(xO, {
          show: "writeOnBoard" === OB,
          onOpen: yB.current.writeOnBoard,
          onClose: PB
        }), (0, MB.jsx)(Po, {
          show: "lobbyCodeEditor" === OB,
          onOpen: yB.current.lobbyCodeEditor,
          onClose: PB,
          isLobbyCode: !0
        }), (0, MB.jsx)(Po, {
          show: "codeEditor" === OB,
          onOpen: yB.current.codeEditor,
          onClose: PB,
          isLobbyCode: !1
        }), (0, MB.jsx)(WD, {
          show: "customLobbyBlockEditor" === OB,
          onOpen: yB.current.customLobbyBlockEditor,
          onClose: PB
        }), (0, MB.jsx)(SG, {
          show: "ironChestPasskeyInput" === OB,
          onOpen: yB.current.ironChestPasskeyInput,
          onClose: PB
        }), (0, MB.jsx)(fD, {
          togglePointerLock: !0,
          show: "petUi" === OB,
          onOpen: yB.current.petUi,
          onClose: PB
        })]
      })
    }))
  },
  37170: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => Eo
    });
    GB(37173);
    var YB = GB(1908),
      DB = GB(56),
      QB = GB(1090),
      oB = GB.n(QB),
      jB = GB(4147),
      yB = GB(1480),
      JB = GB(2e3),
      MB = GB(1282);

    function PB() {
      const BB = 2e3,
        [OB, GB] = (0, DB.useState)(null),
        [YB, QB] = (0, DB.useState)(null),
        PB = (0, DB.useRef)(null);
      (0, yB.f)("showBottomMessage", (OB => {
        let {
          message: GB,
          timeoutLength: YB = BB,
          type: DB
        } = OB;
        QB({
          message: GB,
          type: DB
        }), clearTimeout(PB.current), PB.current = setTimeout((() => {
          QB(null)
        }), YB)
      })), (0, yB.f)("showPermanentBottomMessage", (BB => {
        GB(BB)
      })), (0, DB.useEffect)((() => ((0, jB.e)((() => {
        GB(null)
      })), () => {
        clearTimeout(PB.current)
      })), []);
      const zB = YB || OB;
      return zB ? (0, MB.jsx)("div", {
        className: oB()("BottomScreenMessage", zB.type),
        children: (0, MB.jsx)(JB.b, {
          text: zB.message
        })
      }) : null
    }
    var zB = GB(2544),
      lB = GB(25),
      pB = GB(2023),
      qB = GB(1560),
      ZB = GB(2659);

    function NB() {
      let BB;
      const OB = () => {
          clearTimeout(BB), BB = setTimeout((() => {
            pB.gameBridge.latest("connectedGame").replay || (lB.o.tM("kickedForAfk"), pB.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, qB.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        GB = () => {
          clearTimeout(BB)
        };
      return window.addEventListener("focus", GB), window.addEventListener("blur", OB), () => {
        window.removeEventListener("blur", OB), window.removeEventListener("focus", GB), clearTimeout(BB)
      }
    }
    var RB = GB(1112),
      WB = GB(37180),
      AB = GB(2653),
      VB = GB(1405),
      SB = GB(3528),
      nB = GB(1383);
    const UB = (0, DB.memo)((function() {
      return (0, SB.e)(), (0, MB.jsx)(fB, {})
    }));
    class fB extends DB.Component {
      constructor(BB) {
        super(BB), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = lB.o.subscribe("TopRightHelper", (BB => {
          this.showQueue.push(BB), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        lB.o.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(BB, OB) {
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
        let BB, OB, GB, YB, DB, QB = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, BB = "slideIn") : "slideOut" === this.state.currState ? BB = "slideOut" : null === this.currMessage && (QB = !1), this.currMessage) {
          const QB = this.currMessage.color || "rgb(102, 102, 102)";
          OB = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === BB ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, GB = {
            backgroundColor: QB
          }, YB = {
            animation: "2s " + ("slideOut" === BB ? "CloseNotification" : "ExpandNotification")
          }, DB = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === BB ? "textDisappear" : "textAppear")
          }
        }
        return QB ? (0, MB.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...OB
          },
          children: [(0, MB.jsx)("div", {
            className: "LeftSide",
            style: GB,
            children: (0, MB.jsx)(nB.b, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, MB.jsx)("div", {
            className: "RightSide",
            style: YB,
            children: (0, MB.jsx)("div", {
              className: "HelperText",
              style: DB,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var kB = GB(37183),
      dB = GB(1450);
    const KB = (0, dB.h)((BB => BB.PadSneakChip));

    function uB(BB) {
      const [OB, GB, YB] = function(BB) {
        const OB = parseInt(BB.substring(1), 16),
          GB = (OB >> 16) / 255,
          YB = (OB >> 8 & 255) / 255,
          DB = (255 & OB) / 255,
          QB = Math.max(GB, YB, DB),
          oB = Math.min(GB, YB, DB),
          jB = (QB + oB) / 2,
          yB = QB - oB;
        if (0 === yB) return [0, 0, jB];
        const JB = yB / (1 - Math.abs(2 * jB - 1));
        let MB;
        MB = QB === GB ? (YB - DB) / yB % 6 : QB === YB ? (DB - GB) / yB + 2 : (GB - YB) / yB + 4;
        return [(60 * MB + 360) % 360, JB, jB]
      }(BB), DB = 0 === GB ? 0 : Math.min(.6, GB + .03), QB = YB > .5 ? -1 : 1, oB = mB(YB + .09 * QB);
      return {
        panel: BB,
        slot: IB(OB, DB, oB),
        slotSelected: IB(OB, DB, mB(oB + .2 * QB)),
        slotUnavailable: IB(OB, DB, mB(YB + -.1 * QB))
      }
    }

    function mB(BB) {
      return Math.min(1, Math.max(0, BB))
    }

    function IB(BB, OB, GB) {
      const YB = (1 - Math.abs(2 * GB - 1)) * OB,
        DB = YB * (1 - Math.abs(BB / 60 % 2 - 1)),
        QB = GB - YB / 2;
      let oB;
      return oB = BB < 60 ? [YB, DB, 0] : BB < 120 ? [DB, YB, 0] : BB < 180 ? [0, YB, DB] : BB < 240 ? [0, DB, YB] : BB < 300 ? [DB, 0, YB] : [YB, 0, DB], "#" + oB.map((BB => function(BB) {
        return Math.round(255 * BB).toString(16).padStart(2, "0")
      }(BB + QB))).join("")
    }
    var FB = GB(37204),
      iB = GB(16),
      LB = GB(2063),
      gB = GB(4678),
      rB = GB(1434),
      XB = GB(2617),
      wB = GB(2619),
      EB = GB(37248),
      cB = GB(5313),
      hB = GB(1508),
      aB = GB(1175),
      eB = GB(641);

    function TB(BB, OB, GB, YB) {
      BB.style.display = "";
      const DB = BB.offsetWidth,
        QB = BB.offsetHeight,
        oB = Math.min(Math.max((OB.left + OB.right) / 2 - DB / 2, 8), window.innerWidth - 8 - DB);
      let jB = OB.top - GB - QB;
      const yB = [...YB].sort(((BB, OB) => OB.top - BB.top));
      for (const JB of yB) oB < JB.right && oB + DB > JB.left && jB < JB.bottom && jB + QB > JB.top && (jB = JB.top - 8 - QB);
      return jB < 8 ? (BB.style.display = "none", null) : (BB.style.transform = `translate(${oB-OB.left}px, ${jB-OB.top}px)`, {
        left: oB,
        top: jB,
        right: oB + DB,
        bottom: jB + QB
      })
    }

    function bB(BB) {
      const OB = [];
      for (const GB of document.querySelectorAll(BB)) {
        const BB = GB.getBoundingClientRect();
        BB.width > 0 && "visible" === getComputedStyle(GB).visibility && OB.push(BB)
      }
      return OB
    }

    function CB(BB, OB) {
      return BB.clientX >= OB.left - 8 && BB.clientX <= OB.right + 8 && BB.clientY >= OB.top - 8 && BB.clientY <= OB.bottom + 8
    }
    var HB = GB(9545);
    class vB {
      constructor(BB) {
        this.deps = BB, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(BB) {
        BB && "armed" === this.phase ? this.setPhase("ready") : BB || "ready" !== this.phase || this.setPhase("armed")
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
      hold(BB, OB) {
        this.suspended || (this.offered ? OB || this.setPhase("idle") : BB && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : BB || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(BB) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const OB = this.phase;
        this.phase = BB, this.deps.onPhase(BB, OB)
      }
    }
    const sB = 25 * Math.PI / 180,
      xB = 45 * Math.PI / 180;
    class tB extends vB {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(BB, OB, GB) {
        this.speed = GB;
        const YB = Math.hypot(BB, OB),
          DB = YB > 0 ? Math.acos(Math.min(1, -OB / YB)) : Math.PI;
        this.hold(YB >= .8 && DB <= sB, YB >= .5 && DB <= xB)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var BO = GB(1293);

    function OO(BB, OB) {
      const GB = (0, DB.useRef)(null),
        YB = (0, DB.useRef)(OB);
      return YB.current = OB, (0, DB.useEffect)((() => {
        if (!BB) return;
        const {
          create: OB,
          elementRef: DB,
          ringRef: QB,
          classPrefix: oB,
          keptBehindMovementPanels: jB,
          resizeEnds: yB
        } = YB.current, JB = {
          charging: `${oB}Charging`,
          armed: `${oB}Armed`,
          ready: `${oB}Ready`,
          locked: `${oB}Locked`
        };
        let MB = null;
        const PB = OB({
          onPhase: (BB, OB) => {
            const GB = DB.current;
            if (null !== GB) {
              for (const [OB, YB] of Object.entries(JB)) GB.classList.toggle(YB, OB === BB);
              if ("charging" === BB) MB = QB.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === BB) {
                var oB;
                null === (oB = MB) || void 0 === oB || oB.cancel(), MB = null
              }
              var jB, yB;
              if ("armed" === BB && "charging" === OB && YB.current.onArmed(), "ready" === BB && HB.h.play("lockReady"), "locked" === BB) HB.h.play("lockLocked"), null === (jB = (yB = YB.current).onLocked) || void 0 === jB || jB.call(yB);
              "locked" === OB && YB.current.onUnlocked()
            }
          }
        });
        GB.current = PB;
        const zB = () => {
            PB.suspend()
          },
          lB = () => {
            "hidden" === document.visibilityState && zB()
          },
          pB = () => {
            yB ? PB.suspend() : PB.suspendArming()
          },
          qB = (0, BO.k)((BB => {
            let {
              keepsMovement: OB
            } = BB;
            OB && jB ? PB.suspendArming() : zB()
          }));
        return document.addEventListener("visibilitychange", lB), window.addEventListener("blur", zB), window.addEventListener("resize", pB), () => {
          qB(), document.removeEventListener("visibilitychange", lB), window.removeEventListener("blur", zB), window.removeEventListener("resize", pB), PB.cancel(), GB.current = null
        }
      }), [BB]), (0, LB.b)("localPlayerAliveSet", (() => {
        var BB;
        null === (BB = GB.current) || void 0 === BB || BB.suspend()
      })), GB
    }
    const GO = "data-joystick-tap";

    function YO(BB) {
      var OB, GB;
      const YB = null === (OB = (GB = BB).closest) || void 0 === OB ? void 0 : OB.call(GB, `[${GO}]`);
      return YB instanceof HTMLElement ? YB : null
    }
    class DO {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var BB, OB;
        return null !== (BB = null === (OB = this.tap) || void 0 === OB ? void 0 : OB.id) && void 0 !== BB ? BB : null
      }
      land(BB, OB) {
        null === this.tap && (this.tap = {
          key: BB,
          id: OB.identifier,
          x: OB.clientX,
          y: OB.clientY
        }, (0, hB.m)(BB, !0))
      }
      slidFrom(BB) {
        const OB = this.tap,
          GB = OB ? BB.find((BB => BB.identifier === OB.id)) : void 0;
        return !GB || Math.hypot(GB.clientX - OB.x, GB.clientY - OB.y) <= 12 ? null : (this.end(!1), {
          identifier: OB.id,
          clientX: OB.x,
          clientY: OB.y
        })
      }
      end(BB) {
        const OB = this.tap;
        OB && (this.tap = null, (0, hB.m)(OB.key, !1), BB && OB.key.click())
      }
    }
    var QO = GB(2679),
      oO = GB(2691),
      jO = GB(1106),
      yO = GB(3831),
      JO = GB(2697);

    function MO(BB, OB, GB) {
      const YB = function(BB, OB, GB) {
        const YB = GB.map((GB => ({
            left: Math.max(0, GB.left),
            top: Math.max(0, GB.top),
            right: Math.min(BB, GB.right),
            bottom: Math.min(OB, GB.bottom)
          }))).filter((BB => BB.right > BB.left && BB.bottom > BB.top)),
          DB = [...new Set([0, OB, ...YB.flatMap((BB => [BB.top, BB.bottom]))])].sort(((BB, OB) => BB - OB)),
          QB = [];
        for (let oB = 0; oB < DB.length - 1; oB++) {
          const OB = DB[oB],
            GB = DB[oB + 1],
            jB = YB.filter((BB => BB.top <= OB && BB.bottom >= GB)).map((BB => [BB.left, BB.right])).sort(((BB, OB) => BB[0] - OB[0]));
          let yB = 0;
          for (const [BB, YB] of jB) BB > yB && QB.push({
            left: yB,
            top: OB,
            right: BB,
            bottom: GB
          }), yB = Math.max(yB, YB);
          yB < BB && QB.push({
            left: yB,
            top: OB,
            right: BB,
            bottom: GB
          })
        }
        return QB
      }(BB, OB, GB);
      if (0 === YB.length) return 'path("M0 0Z")';
      if (1 === YB.length && 0 === YB[0].left && 0 === YB[0].top && YB[0].right === BB && YB[0].bottom === OB) return "";
      const DB = BB => Math.round(10 * BB) / 10;
      return `path("${YB.map((BB=>`M${DB(BB.left)} ${DB(BB.top)}H${DB(BB.right)}V${DB(BB.bottom)}H${DB(BB.left)}Z`)).join("")}")`
    }

    function PO(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const DB = [],
        QB = 2 * GB / YB;
      for (let oB = 0; oB < YB; oB++) {
        const YB = OB - GB + oB * QB,
          jB = YB + QB,
          yB = Math.min(Math.max(OB, YB), jB) - OB,
          JB = Math.sqrt(Math.max(0, GB * GB - yB * yB));
        DB.push({
          left: BB - JB,
          top: YB,
          right: BB + JB,
          bottom: jB
        })
      }
      return DB
    }
    var zO = GB(9553),
      lO = GB(37233);

    function pO(BB) {
      const OB = BB.getBoundingClientRect(),
        GB = {
          left: OB.left,
          top: OB.top,
          right: OB.right,
          bottom: OB.bottom
        },
        YB = (0, EB.d)(BB);
      if (YB.whole) return [GB];
      const DB = function(BB) {
          const OB = BB.right - BB.left,
            GB = BB.bottom - BB.top,
            YB = Math.min(OB, GB) / 2,
            DB = (BB.left + BB.right) / 2,
            QB = (BB.top + BB.bottom) / 2;
          return OB >= GB ? [{
            left: BB.left + YB,
            top: BB.top,
            right: BB.right - YB,
            bottom: BB.bottom
          }, ...PO(BB.left + YB, QB, YB), ...PO(BB.right - YB, QB, YB)] : [{
            left: BB.left,
            top: BB.top + YB,
            right: BB.right,
            bottom: BB.bottom - YB
          }, ...PO(DB, BB.top + YB, YB), ...PO(DB, BB.bottom - YB, YB)]
        }(GB),
        QB = YB.keyBox;
      if (QB) {
        const BB = (GB.left + GB.right) / 2,
          OB = (GB.top + GB.bottom) / 2;
        DB.push({
          left: BB - QB.width / 2,
          top: OB - QB.height / 2,
          right: BB + QB.width / 2,
          bottom: OB + QB.height / 2
        })
      }
      return DB
    }

    function qO(BB) {
      const OB = BB.getBoundingClientRect();
      return 0 === OB.width && 0 === OB.height || "visible" !== getComputedStyle(BB).visibility ? [] : [(0, zO.v)(OB, 44)]
    }

    function ZO(BB, OB) {
      (0, DB.useEffect)((() => {
        const GB = BB.current;
        if (!OB || !GB) return;
        const YB = () => {
          const BB = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            OB = BB.find((BB => BB.classList.contains("TouchInteractHit")));
          OB !== DB && (DB && QB.unobserve(DB), DB = OB, OB && QB.observe(OB));
          const YB = Array.from(document.querySelectorAll(JO.d)),
            oB = [...BB.flatMap((BB => pO(BB))), ...YB.flatMap(qO)],
            jB = function(BB, OB) {
              const GB = OB.map((OB => ({
                left: OB.left - BB.left,
                top: OB.top - BB.top,
                right: OB.right - BB.left,
                bottom: OB.bottom - BB.top
              })));
              return MO(Math.ceil(BB.width), Math.ceil(BB.height), GB)
            }(GB.getBoundingClientRect(), oB);
          GB.style.clipPath !== jB && (GB.style.clipPath = jB)
        };
        let DB;
        const QB = new ResizeObserver((() => {
          YB()
        }));
        YB(), QB.observe(GB);
        const oB = GB.closest(".InGameUi"),
          jB = new MutationObserver(YB);
        oB && jB.observe(oB, {
          attributes: !0,
          attributeFilter: ["class", lO.e]
        });
        const yB = [(0, lB.p)(yO.c, YB), (0, lB.p)(JO.n, YB), (0, lB.p)(JO.e, YB)];
        return () => {
          QB.disconnect(), jB.disconnect();
          for (const BB of yB) BB();
          GB.style.clipPath = ""
        }
      }), [BB, OB])
    }
    var NO = GB(4839);

    function RO(BB) {
      var OB;
      let {
        onMove: GB,
        mode: YB,
        speedCurve: QB,
        autorun: oB = !1,
        keys: jB
      } = BB;
      const yB = (0, DB.useRef)(null),
        JB = (0, DB.useRef)(null),
        PB = (0, DB.useRef)(null),
        zB = (0, DB.useRef)(null),
        lB = (0, DB.useRef)(null),
        qB = (0, DB.useRef)(null),
        ZB = (0, DB.useRef)(new DO).current,
        NB = (0, DB.useRef)(null),
        RB = (0, DB.useRef)(null),
        WB = (0, DB.useRef)(null),
        AB = (0, DB.useRef)(!1),
        VB = (0, DB.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: SB
        } = (0, aB.H)(),
        UB = (0, NO.p)(YB),
        fB = (0, iB.o)(["notchSize"]).notchSize,
        kB = fB.left,
        dB = (0, DB.useRef)(16),
        KB = (0, oO.f)(),
        [uB, mB, IB] = "pinned" === YB ? QO.p : null !== (OB = KB.hudElements.joystick) && void 0 !== OB ? OB : QO.p,
        FB = "pinned" === YB ? null : KB.hudSafe,
        LB = Math.max(NO.j, NO.m * IB);
      ZO(JB, "pinned" !== YB);
      const gB = function(BB, OB, GB, YB, QB) {
        const oB = (0, DB.useRef)(null),
          jB = () => {
            clearInterval(oB.current), oB.current = null
          },
          yB = OO(BB, {
            create: BB => new tB(BB),
            elementRef: OB,
            ringRef: GB,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: QB,
            onLocked: () => {
              oB.current = setInterval((() => {
                pB.gameBridge.lookup("dropAhead", null) && (HB.h.play("autorunLedgeStop"), yB.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              jB(), YB()
            }
          });
        return (0, DB.useEffect)((() => jB), []), yB
      }(oB, PB, NB, (() => {
        vB(), hB()
      }), (() => {
        rB(), null === WB.current && gB.current.suspend()
      }));

      function rB() {
        const BB = PB.current.getBoundingClientRect();
        WB.current = TB(RB.current, BB, 80, bB(`.TouchInventoryKey, .TouchSprintKey, ${JO.d}`)), AB.current = null !== WB.current && CB(VB.current, WB.current)
      }

      function XB() {
        const {
          innerWidth: BB,
          innerHeight: OB
        } = window, GB = (0, JO.C)(FB, BB, OB, (0, JO.J)(fB, BB, OB), dB.current);
        return {
          left: GB[3],
          bottom: GB[2]
        }
      }

      function wB(BB) {
        PB.current.style.transform = `translate(${BB.x-LB}px, ${BB.y-LB}px)`
      }

      function EB(BB) {
        const OB = PB.current;
        OB.classList.add("Resting"), OB.classList.toggle("Returning", BB), OB.style.display = "fixed_hidden" === YB ? "none" : "block", wB(function() {
          const {
            innerWidth: BB,
            innerHeight: OB
          } = window, GB = XB(), YB = kB * BB / 100 + GB.left, DB = yB.current.offsetHeight || OB, QB = ((0, jO.b)(BB, OB) ? NO.g : NO.c) + GB.bottom;
          return {
            x: Math.min(BB - LB, Math.max(LB, YB + NO.h + uB * BB)),
            y: Math.min(DB - LB, Math.max(LB, DB - QB + mB * DB))
          }
        }())
      }
      const cB = (0, DB.useRef)({
        restFixed: EB,
        release: sB
      });

      function hB() {
        UB ? EB("fixed_shown" === YB) : "floating" === YB && (PB.current.style.display = "none"), GB({
          x: 0,
          y: 0
        })
      }

      function vB() {
        qB.current = null, lB.current = null, zB.current.style.transform = "translate(-50%, -50%)"
      }

      function sB(BB) {
        vB();
        const OB = gB.current;
        BB && null !== OB && void 0 !== OB && OB.lift() ? GB({
          x: 0,
          y: -OB.lockedSpeed
        }) : (null === OB || void 0 === OB || OB.cancel(), hB())
      }

      function xB(BB) {
        var OB;
        if (null === (OB = gB.current) || void 0 === OB || OB.startTouch(), "pinned" === YB) {
          const BB = PB.current.getBoundingClientRect();
          lB.current = {
            x: BB.left + BB.width / 2,
            y: BB.top + BB.height / 2
          }
        } else {
          lB.current = {
            x: BB.clientX,
            y: BB.clientY
          }, PB.current.classList.remove("Resting", "Returning"), PB.current.style.display = "block";
          const OB = yB.current.getBoundingClientRect();
          wB({
            x: BB.clientX - OB.left,
            y: BB.clientY - OB.top
          }), oB && (VB.current = {
            clientX: BB.clientX,
            clientY: BB.clientY
          }, rB())
        }
      }

      function GO(BB) {
        const OB = ZB.slidFrom(Array.from(BB.touches));
        OB && null === qB.current && (qB.current = OB.identifier, xB(OB));
        const YB = Array.from(BB.touches).find((BB => BB.identifier === qB.current));
        if (null === lB.current || null === qB.current || (0, eB.Q)(YB)) return;
        const DB = gB.current,
          oB = YB.clientX - lB.current.x,
          jB = YB.clientY - lB.current.y,
          yB = Math.hypot(oB, jB),
          JB = yB > 0 ? Math.min(1, LB / yB) : 0,
          MB = oB * JB,
          PB = jB * JB,
          pB = Math.hypot(MB, PB) / LB,
          NB = QB && pB > 0 ? QB(pB) / pB : 1;
        zB.current.style.transform = `translate(calc(-50% + ${MB}px), calc(-50% + ${PB}px))`;
        const RB = MB / LB,
          SB = PB / LB;
        if (GB({
            x: RB * NB,
            y: SB * NB
          }), null !== DB && null !== WB.current) {
          DB.move(RB, SB, pB * NB), VB.current = {
            clientX: YB.clientX,
            clientY: YB.clientY
          };
          const BB = AB.current;
          AB.current = CB(YB, WB.current), AB.current !== BB && DB.target(AB.current)
        }
      }
      return cB.current = {
        restFixed: EB,
        release: sB
      }, (0, DB.useLayoutEffect)((() => {
        if (!UB) return;
        const BB = () => {
          dB.current = (0, JO.M)(document)
        };
        BB(), null === qB.current && cB.current.restFixed(!1);
        const OB = new ResizeObserver((() => {
          BB(), null === qB.current && cB.current.restFixed(!1)
        }));
        OB.observe(yB.current);
        const GB = PB.current;
        return () => {
          OB.disconnect(), GB.classList.remove("Resting", "Returning"), null === qB.current && (GB.style.display = "", GB.style.transform = "")
        }
      }), [UB, YB, fB, uB, mB, LB, FB]), (0, DB.useEffect)((() => {
        const BB = (BB, OB) => void 0 === OB || null === OB || Array.from(BB.touches).some((BB => BB.identifier === OB)) ? null : {
            lifted: "touchend" === BB.type && Array.from(BB.changedTouches).some((BB => BB.identifier === OB))
          },
          OB = OB => {
            const GB = BB(OB, qB.current);
            GB && cB.current.release(GB.lifted);
            const YB = BB(OB, ZB.touchId);
            YB && ZB.end(YB.lifted)
          },
          GB = () => {
            null !== qB.current && cB.current.release(!1), ZB.end(!1)
          },
          YB = () => {
            "hidden" === document.visibilityState && GB()
          };
        document.addEventListener("touchstart", OB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", OB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", OB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", OB, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", GB), document.addEventListener("visibilitychange", YB);
        const DB = (0, BO.k)((BB => {
          let {
            keepsMovement: OB
          } = BB;
          OB || GB()
        }));
        return () => {
          DB(), document.removeEventListener("touchstart", OB, {
            capture: !0
          }), document.removeEventListener("touchmove", OB, {
            capture: !0
          }), document.removeEventListener("touchend", OB, {
            capture: !0
          }), document.removeEventListener("touchcancel", OB, {
            capture: !0
          }), window.removeEventListener("blur", GB), document.removeEventListener("visibilitychange", YB)
        }
      }), []), (0, DB.useEffect)((() => {
        const BB = yB.current,
          OB = BB => {
            BB.preventDefault()
          };
        return BB.addEventListener("touchstart", OB, {
          passive: !1
        }), () => {
          BB.removeEventListener("touchstart", OB)
        }
      }), []), (0, MB.jsxs)("div", {
        ref: yB,
        className: "JoystickZone",
        style: UB && (uB > 0 || IB > 1 || XB().left > 0) ? {
          width: `max(35vw, calc(${kB+100*uB}vw + ${XB().left+NO.h+LB+24}px))`
        } : void 0,
        onTouchStart: function(BB) {
          const OB = Array.from(BB.changedTouches).filter((BB => {
            var OB;
            return null === (OB = yB.current) || void 0 === OB ? void 0 : OB.contains(BB.target)
          }));
          for (const YB of OB) {
            const BB = YO(YB.target);
            BB && ZB.land(BB, YB)
          }
          const GB = OB.find((BB => null === YO(BB.target)));
          GB && null === qB.current && (qB.current = GB.identifier, xB(GB), GO(BB))
        },
        onTouchMove: GO,
        children: [(0, MB.jsx)("div", {
          ref: JB,
          className: "JoystickTouchLayer"
        }), (0, MB.jsxs)("div", {
          ref: PB,
          className: "Joystick",
          style: {
            width: 2 * LB + "px",
            height: 2 * LB + "px",
            transform: "pinned" === YB ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, MB.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * LB + "px",
              height: 2 * LB + "px"
            }
          }), oB && (0, MB.jsxs)(MB.Fragment, {
            children: [(0, MB.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, MB.jsx)("circle", {
                ref: NB,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, MB.jsxs)("div", {
              ref: RB,
              className: "AutorunTarget",
              children: [(0, MB.jsx)(nB.b, {
                name: "lock"
              }), SB("settingsMenu:autoRun")]
            })]
          }), (0, MB.jsx)("div", {
            ref: zB,
            className: "JoystickKnob",
            style: {
              width: `${LB}px`,
              height: `${LB}px`
            }
          })]
        }), jB]
      })
    }
    var WO = GB(271);
    const AO = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      VO = {
        short_creep: {
          ...AO,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...AO,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...AO,
          deadZone: .05
        },
        control: AO
      };

    function SO(BB) {
      return function(BB, OB) {
        const {
          deadZone: GB,
          creepEnd: YB,
          fullSpeedAt: DB,
          creepMin: QB,
          creepMax: oB
        } = BB;
        if (OB < GB) return 0;
        if (OB < YB) {
          const BB = (OB - GB) / (YB - GB);
          return QB + (oB - QB) * BB * BB
        }
        return OB < DB ? oB + (1 - oB) * (OB - YB) / (DB - YB) : 1
      }(VO[WO.b.mobile_walk_curve_v1], BB)
    }

    function nO(BB, OB) {
      const GB = (0, DB.useRef)(null);
      return (0, DB.useLayoutEffect)((() => (EB.f.set(BB, GB.current, OB), () => {
        EB.f.set(BB, null)
      })), [BB, OB]), GB
    }
    const UO = "C",
      fO = "J",
      kO = "U",
      dO = "A",
      KO = "G",
      uO = "X",
      mO = (0, DB.forwardRef)((function(BB, OB) {
        let {
          slot: GB,
          canvasZone: YB = !1,
          lit: QB = !1,
          label: jB,
          className: yB,
          children: JB,
          ...PB
        } = BB;
        return (0, DB.useEffect)((() => (lB.o.tM(yO.c), () => {
          lB.o.tM(yO.c)
        })), []), (0, MB.jsx)("div", {
          ref: OB,
          className: oB()("TouchKeyHit", `TouchSlot${GB}`, yB, {
            CanvasZone: YB
          }),
          ...PB,
          children: (0, MB.jsxs)("div", {
            className: oB()("TouchKey", {
              Lit: QB,
              Labelled: void 0 !== jB
            }),
            children: [JB, void 0 !== jB && (0, MB.jsx)("span", {
              className: "TouchKeyLabel",
              children: jB
            })]
          })
        })
      }));

    function IO(BB, OB) {
      (0, DB.useEffect)((() => () => {
        OB.current && (OB.current = !1, (0, wB.t)(BB, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }
    var FO = GB(37242);
    class iO extends vB {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(BB, OB) {
        this.start = {
          x: BB,
          y: OB
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(BB, OB, GB) {
        const YB = Math.hypot(BB - this.start.x, OB - this.start.y) <= 12;
        this.moved ||= !YB;
        const DB = null !== GB && OB < this.start.y - 12 && CB({
          clientX: BB,
          clientY: OB
        }, GB);
        this.hold(!this.moved, YB || DB)
      }
    }
    const LO = new Set;

    function gO(BB) {
      const OB = new Set(Array.from(BB.touches, (BB => BB.identifier)));
      for (const GB of LO) {
        for (const BB of GB.ids) OB.has(BB) || GB.ids.delete(BB);
        if (0 === GB.ids.size) {
          LO.delete(GB);
          GB.pressesOnPointerDown && "touchstart" === BB.type && Array.from(BB.changedTouches).some((BB => BB.target instanceof Node && GB.element.contains(BB.target))) || GB.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const so of ["touchstart", "touchmove"]) window.addEventListener(so, gO, {
        capture: !0,
        passive: !0
      });

    function rO(BB) {
      let {
        pressesOnPointerDown: OB = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const GB = (0, DB.useRef)(BB);
      GB.current = BB;
      const YB = (0, DB.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: OB,
        release: () => {
          GB.current()
        }
      });
      (0, DB.useEffect)((() => {
        const BB = YB.current;
        return () => {
          LO.delete(BB), BB.ids.clear()
        }
      }), []);
      const QB = BB => {
        const OB = YB.current;
        for (const GB of Array.from(BB.changedTouches)) OB.ids.delete(GB.identifier);
        0 === OB.ids.size && LO.delete(OB)
      };
      return {
        onTouchStart: BB => {
          const OB = YB.current;
          OB.element = BB.currentTarget;
          for (const GB of Array.from(BB.changedTouches)) GB.target instanceof Node && BB.currentTarget.contains(GB.target) && OB.ids.add(GB.identifier);
          OB.ids.size > 0 && LO.add(OB)
        },
        onTouchEnd: QB,
        onTouchCancel: QB
      }
    }

    function XO(BB, OB) {
      return null === OB ? null : (0, FO.c)(BB.nativeEvent.changedTouches, OB.id)
    }

    function wO(BB) {
      let {
        lockable: OB
      } = BB;
      const {
        t: GB
      } = (0, aB.H)(), YB = "round" === (0, QO.eb)().hudShape, QB = (0, DB.useRef)(!1);
      IO(XB.u.Jump, QB);
      const oB = (0, DB.useRef)(null),
        jB = (0, DB.useRef)(null),
        yB = (0, DB.useRef)(null),
        JB = (0, DB.useRef)(null),
        PB = (0, DB.useRef)(null),
        zB = (0, DB.useRef)(null),
        lB = (0, DB.useRef)(!1),
        pB = (BB, OB) => {
          QB.current = BB, (0, wB.t)(XB.u.Jump, BB, OB)
        },
        qB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          QB.current && (oB.current && (0, hB.m)(oB.current, !1), pB(!1, BB))
        },
        ZB = OO(OB, {
          create: BB => new iO(BB),
          elementRef: oB,
          ringRef: jB,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const BB = oB.current.getBoundingClientRect(),
              OB = yB.current.parentElement,
              GB = OB.getBoundingClientRect(),
              YB = {
                left: GB.left + OB.clientLeft,
                top: GB.top + OB.clientTop,
                right: GB.right - OB.clientLeft,
                bottom: GB.bottom - OB.clientTop
              };
            if (PB.current = TB(yB.current, YB, 16, bB(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${JO.d}`)), null === PB.current) return void ZB.current.suspend();
            const DB = PB.current;
            zB.current = {
              left: Math.min(BB.left, DB.left),
              top: DB.top,
              right: Math.max(BB.right, DB.right),
              bottom: BB.bottom
            }, lB.current = null !== JB.current && CB({
              clientX: JB.current.x,
              clientY: JB.current.y
            }, DB)
          },
          onUnlocked: () => {
            null === JB.current && qB()
          }
        }),
        NB = BB => {
          var OB;
          JB.current = null, null === (OB = ZB.current) || void 0 === OB || OB.cancel(), qB(BB)
        },
        RB = rO((() => {
          NB()
        })),
        WB = BB => {
          const OB = JB.current;
          var GB;
          return null === OB ? null !== (GB = ZB.current) && void 0 !== GB && GB.locked ? null : "lifted" : XO(BB, OB) ? "lifted" : (0, FO.e)(BB.nativeEvent.touches, OB.id) ? null : "dropped"
        };
      return (0, MB.jsxs)(mO, {
        ref: oB,
        slot: fO,
        className: "JumpKey",
        onTouchStart: BB => {
          RB.onTouchStart(BB), (0, hB.m)(BB.currentTarget, !0), null === JB.current || (0, FO.e)(BB.nativeEvent.touches, JB.current.id) || NB();
          const OB = BB.changedTouches[0];
          var GB;
          null === JB.current && OB && (JB.current = {
            id: OB.identifier,
            x: OB.clientX,
            y: OB.clientY
          }, null === (GB = ZB.current) || void 0 === GB || GB.press(OB.clientX, OB.clientY));
          QB.current || pB(!0, BB.nativeEvent)
        },
        onTouchMove: BB => {
          const OB = JB.current,
            GB = XO(BB, OB);
          if (!GB) return;
          const YB = ZB.current;
          if (null === YB || void 0 === YB || YB.move(GB.clientX, GB.clientY, zB.current), null !== YB && void 0 !== YB && YB.offered) {
            const BB = CB(GB, PB.current);
            BB !== lB.current && (lB.current = BB, YB.target(BB))
          }
          OB.x = GB.clientX, OB.y = GB.clientY
        },
        onTouchEnd: BB => {
          var OB;
          RB.onTouchEnd(BB);
          const GB = WB(BB);
          null !== GB && ("dropped" !== GB ? (JB.current = null, null !== (OB = ZB.current) && void 0 !== OB && OB.lift() ? (0, hB.m)(BB.currentTarget, !1) : qB(BB.nativeEvent)) : NB(BB.nativeEvent))
        },
        onTouchCancel: BB => {
          RB.onTouchCancel(BB), null !== WB(BB) && NB(BB.nativeEvent)
        },
        children: [(0, MB.jsx)(nB.b, {
          name: "arrow-up-from-line"
        }), OB && (0, MB.jsxs)(MB.Fragment, {
          children: [(0, MB.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, MB.jsx)(nB.b, {
              name: "lock"
            })
          }), (0, MB.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, MB.jsx)("rect", {
              ref: jB,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: YB ? 48 : 0,
              pathLength: 1
            })
          }), (0, MB.jsxs)("div", {
            ref: yB,
            className: "JumpLockTarget",
            children: [(0, MB.jsx)(nB.b, {
              name: "lock"
            }), GB("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var EO = GB(37254);

    function cO(BB) {
      let {
        atHome: OB
      } = BB;
      const {
        t: GB
      } = (0, aB.H)(), YB = (QB = (0, AB.g)("runningSpeed"), jB = (0, AB.g)("walkingSpeed"), null !== QB && null !== jB && QB > jB);
      var QB, jB;
      const JB = (0, QO.t)((0, oO.f)().hudElements, "sprint"),
        PB = (0, yB.i)(EO.e, (0, EO.i)());
      return (0, DB.useEffect)((() => {
        YB && !JB || (0, EO.k)(!0)
      }), [YB, JB]), (0, DB.useEffect)((() => () => {
        (0, EO.k)(!0)
      }), []), YB ? (0, MB.jsx)("div", {
        className: oB()("TouchSprintHit", {
          AtHome: OB
        }),
        role: "switch",
        "aria-checked": PB,
        "aria-label": GB("touchKeys:sprint"),
        [GO]: "",
        onClick: () => {
          (0, EO.k)(!(0, EO.i)())
        },
        children: (0, MB.jsx)("div", {
          className: oB()("TouchKey TouchSprintKey", {
            Lit: PB
          }),
          children: (0, MB.jsx)(nB.b, {
            name: PB ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    var hO = GB(9566),
      aO = GB(9562);

    function eO(BB) {
      const OB = BB.getBoundingClientRect();
      return OB.width > 0 && OB.height > 0 ? (0, zO.h)(OB) : null
    }

    function TO(BB) {
      const OB = BB.ownerDocument.documentElement.classList,
        GB = BB.classList.contains("ShopKey") ? "HudHide-shop" : BB.classList.contains("BagKey") ? "HudHide-bag" : null;
      return null !== GB && (OB.contains(GB) || OB.contains("HudHide-inventory")) ? null : eO(BB)
    }

    function bO(BB) {
      const OB = eO(BB),
        GB = BB.firstElementChild;
      if (null === OB) return null;
      const {
        x: YB,
        y: DB
      } = (0, zO.d)(OB), QB = GB.offsetWidth / 2, oB = GB.offsetHeight / 2;
      return {
        left: YB - QB,
        top: DB - oB,
        right: YB + QB,
        bottom: DB + oB
      }
    }

    function CO(BB, OB) {
      const GB = BB.ownerDocument.createElement("div");
      GB.className = `TouchSlotProbe TouchSlot${OB}`, BB.append(GB);
      const YB = eO(GB);
      return GB.remove(), YB
    }
    const HO = `.TouchInventoryKey, .TouchSprintKey, ${JO.d}`;

    function vO(BB, OB) {
      const GB = OB.map((OB => ({
        slot: OB,
        face: CO(BB, OB)
      })));
      if (GB.every((BB => {
          let {
            face: OB
          } = BB;
          return null === OB
        }))) return null;
      return function(BB, OB) {
        const GB = [...OB],
          YB = [],
          DB = [];
        for (const {
            face: oB,
            slot: jB
          }
          of BB) null !== oB && (GB.some((BB => (0, zO.o)(oB, BB, aO.c))) ? DB.push(jB) : (YB.push(jB), GB.push(oB)));
        const QB = [...YB, ...DB];
        return BB.map((BB => {
          let {
            slot: OB,
            face: GB
          } = BB;
          return null === GB ? OB : QB.shift()
        }))
      }(GB, [...[...BB.querySelectorAll(":scope > .TouchKeyHit")].filter((BB => BB.classList.contains("BoostKey") || !OB.some((OB => BB.classList.contains(`TouchSlot${OB}`))))).map(bO), ...[...BB.ownerDocument.querySelectorAll(HO)].map(TO)].filter((BB => null !== BB)))
    }
    const sO = new WeakMap;
    class xO {
      constructor(BB) {
        this.zones = BB, this.followed = new Map, this.onStart = BB => {
          if (this.releaseMissing(BB.touches), BB.target instanceof HTMLCanvasElement)
            for (let GB = 0; GB < BB.changedTouches.length; GB++) {
              var OB;
              const {
                identifier: YB,
                clientX: DB,
                clientY: QB
              } = BB.changedTouches[GB];
              this.release(YB);
              const oB = this.zones.hitZone(DB, QB);
              if (!oB) continue;
              const {
                key: jB
              } = oB;
              null === (OB = sO.get(jB)) || void 0 === OB || OB.cancel();
              const yB = {
                hit: oB.element,
                key: jB,
                x: oB.x,
                y: oB.y,
                reach: .6 * oB.radius
              };
              this.followed.set(YB, yB), (0, hB.m)(oB.element, !0), tO(yB, DB, QB)
            }
        }, this.onMove = BB => {
          this.releaseMissing(BB.touches);
          for (let OB = 0; OB < BB.changedTouches.length; OB++) {
            const {
              identifier: GB,
              clientX: YB,
              clientY: DB
            } = BB.changedTouches[OB], QB = this.followed.get(GB);
            QB && tO(QB, YB, DB)
          }
        }, this.onEnd = BB => {
          for (let OB = 0; OB < BB.changedTouches.length; OB++) this.release(BB.changedTouches[OB].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const BB = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, BB), document.addEventListener("touchmove", this.onMove, BB), document.addEventListener("touchend", this.onEnd, BB), document.addEventListener("touchcancel", this.onEnd, BB), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(BB) {
        for (const OB of [...this.followed.keys()])(0, FO.e)(BB, OB) || this.release(OB)
      }
      releaseAll() {
        for (const BB of [...this.followed.keys()]) this.release(BB)
      }
      release(BB) {
        const OB = this.followed.get(BB);
        if (!OB) return;
        this.followed.delete(BB);
        for (const DB of this.followed.values())
          if (DB.key === OB.key) return;
        (0, hB.m)(OB.hit, !1);
        const {
          key: GB
        } = OB, YB = GB.style.translate;
        GB.style.translate = "", YB && sO.set(GB, GB.animate({
          translate: [YB, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function tO(BB, OB, GB) {
      let {
        key: YB,
        x: DB,
        y: QB,
        reach: oB
      } = BB;
      const jB = OB - DB,
        yB = GB - QB,
        JB = Math.min(1, oB / (Math.hypot(jB, yB) || 1));
      YB.style.translate = `${jB*JB}px ${yB*JB}px`
    }
    var BG = GB(1516),
      OG = GB(92),
      GG = GB(1400),
      YG = GB(31);
    const DG = "threeFingerHintShown",
      QG = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let oG = 0,
      jG = !1;

    function yG() {
      const BB = new Set;
      let OB = -1 / 0,
        GB = -1 / 0,
        YB = null,
        DB = 0;
      const QB = () => {
          BB.clear()
        },
        oB = QB => {
          if (QB.touches.length > 0) return;
          for (let OB = 0; OB < QB.changedTouches.length; OB++) BB.add(QB.changedTouches[OB].identifier);
          const oB = BB.size;
          if (oB < 3 || !(0, BO.q)()) return;
          if (DB = oB, null !== YB) return;
          const jB = performance.now(),
            yB = OB >= jB - 200;
          YB = setTimeout((() => {
            if (YB = null, !(0, BO.q)()) return;
            const BB = GB >= jB - 200 || document.hidden;
            ! function(BB, OB) {
              var GB;
              const YB = (0, OG.getOperatingSystem)();
              oG < 5 && (oG++, (0, BG.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === OB ? `${YB}:${BB}` : `${YB}:${BB}:${OB}`
              })), null === OB && (jG || !0 === YG.g.getItem(DG) || (jG = !0, YG.g.setItem(DG, !0), GG.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (GB = QG[YB]) && void 0 !== GB ? GB : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(DB, BB ? "hide" : yB ? "blur" : null)
          }), 500)
        },
        jB = () => {
          GB = performance.now()
        },
        yB = () => {
          OB = performance.now()
        },
        JB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", QB, JB), document.addEventListener("touchcancel", oB, JB), document.addEventListener("visibilitychange", jB), window.addEventListener("blur", yB), window.addEventListener("resize", jB), window.addEventListener("orientationchange", jB), () => {
        document.removeEventListener("touchstart", QB, JB), document.removeEventListener("touchcancel", oB, JB), document.removeEventListener("visibilitychange", jB), window.removeEventListener("blur", yB), window.removeEventListener("resize", jB), window.removeEventListener("orientationchange", jB), null !== YB && clearTimeout(YB)
      }
    }
    const JG = () => {
      const BB = (0, gB.k)(),
        OB = (0, rB.v)();
      return BB || OB
    };

    function MG(BB) {
      (0, EB.i)(BB.x, BB.y), 0 === BB.x && 0 === BB.y || lB.o.tM("stickMoved")
    }
    const PG = (0, DB.memo)((function() {
        const BB = JG(),
          {
            joystickMode: OB,
            touchSpeedCurve: GB,
            autorun: YB
          } = (0, iB.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, DB.useEffect)((() => ((0, cB.m)(XB.y.TouchControls, XB.y.TouchControls), () => {
          (0, cB.m)(XB.y.TouchControls, 0), (0, EB.i)(0, 0)
        })), []), (0, DB.useEffect)(yG, []), (0, MB.jsx)("div", {
          className: oB()("TouchMovementWrapper", {
            Hidden: BB
          }),
          "data-camera-keeper": "",
          children: (0, MB.jsx)(RO, {
            onMove: MG,
            mode: OB,
            speedCurve: GB ? SO : void 0,
            autorun: YB,
            keys: (0, MB.jsx)(cO, {
              atHome: !(0, NO.p)(OB)
            })
          })
        })
      })),
      zG = (0, DB.memo)((function() {
        const BB = JG(),
          {
            clientEscMenuOptions: OB
          } = (0, iB.o)(["clientEscMenuOptions"]),
          GB = OB.touchActionButtons;
        (0, DB.useEffect)((() => new xO(EB.f).start()), []), (0, DB.useEffect)((() => {
          lB.o.tM(yO.c)
        }), [BB]);
        const YB = (0, DB.useRef)(null),
          QB = function(BB, OB) {
            const [GB, YB] = (0, DB.useState)((() => (0, hO.j)(BB)));
            return (0, DB.useLayoutEffect)((() => {
              var GB;
              const DB = OB.current;
              if (!DB) return;
              const QB = (0, hO.j)(BB),
                oB = () => {
                  const BB = vO(DB, QB);
                  YB((OB => {
                    const GB = null !== BB && void 0 !== BB ? BB : OB.length === QB.length ? OB : QB;
                    return GB.join() === OB.join() ? OB : GB
                  }))
                };
              oB(), window.addEventListener("resize", oB);
              const jB = "undefined" === typeof ResizeObserver ? null : new ResizeObserver(oB);
              null === jB || void 0 === jB || jB.observe(null !== (GB = DB.closest(".BottomRightElements")) && void 0 !== GB ? GB : DB);
              const yB = [(0, lB.p)(JO.e, oB), (0, lB.p)(yO.c, oB), (0, lB.p)(JO.n, oB)];
              return () => {
                window.removeEventListener("resize", oB), null === jB || void 0 === jB || jB.disconnect();
                for (const BB of yB) BB()
              }
            }), [BB, OB]), GB.length === (0, hO.j)(BB).length ? GB : (0, hO.j)(BB)
          }(GB, YB);
        return (0, MB.jsxs)("div", {
          ref: YB,
          className: oB()("TouchComponentsButtons", {
            Hidden: BB
          }),
          "data-camera-keeper": "",
          children: [(0, MB.jsx)(wO, {
            lockable: OB.jumpLock && !BB
          }), (0, MB.jsx)(UG, {
            hidden: BB,
            actionButtons: GB,
            contextSlots: QB
          }), (0, MB.jsx)(pG, {})]
        })
      }));

    function lG(BB) {
      const OB = OB => GB => {
        (0, hB.m)(GB.currentTarget, OB), BB(OB, GB.nativeEvent)
      };
      return {
        onPointerDown: OB(!0),
        onPointerUp: OB(!1),
        onPointerCancel: OB(!1)
      }
    }

    function pG() {
      const BB = (0, AB.g)("canCrouch"),
        OB = (0, LB.g)("crouching"),
        GB = (0, DB.useRef)(!1);
      IO(XB.u.Crouch, GB);
      const YB = (BB, OB) => {
          GB.current = BB, (0, wB.t)(XB.u.Crouch, BB, OB)
        },
        QB = (0, DB.useRef)(null),
        oB = () => {
          GB.current && (QB.current && (0, hB.m)(QB.current, !1), YB(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        jB = rO(oB);
      return (0, DB.useEffect)((() => {
        !1 === BB && oB()
      }), [BB]), !1 === BB ? null : (0, MB.jsx)(mO, {
        ref: QB,
        slot: UO,
        className: "CrouchKey",
        lit: OB,
        ...jB,
        ...lG(YB),
        children: (0, MB.jsx)(nB.b, {
          name: "arrow-down-to-line"
        })
      })
    }
    const qG = [{
        icon: "arrows-rotate"
      }],
      ZG = [{
        icon: "Arrow"
      }],
      NG = [{
        icon: "crosshairs"
      }],
      RG = [{
        icon: "swords"
      }],
      WG = [{
        icon: "hand-back-point-up"
      }],
      AG = [{
        icon: "Firecracker"
      }];

    function VG(BB, OB, GB, YB) {
      return {
        id: JSON.stringify(OB),
        render: DB => (0, MB.jsx)(fG, {
          code: BB,
          slot: DB,
          icon: OB,
          label: YB,
          hidden: GB
        })
      }
    }

    function SG(BB, OB) {
      return {
        id: "fly",
        render: GB => (0, MB.jsx)(nG, {
          slot: GB,
          flying: BB,
          label: OB
        })
      }
    }

    function nG(BB) {
      let {
        slot: OB,
        flying: GB,
        label: YB
      } = BB;
      return (0, MB.jsx)(mO, {
        slot: OB,
        className: "FlyKey",
        lit: GB,
        label: YB,
        ...lG(((BB, OB) => {
          (0, wB.t)(XB.u.Fly, BB, OB)
        })),
        children: (0, MB.jsx)(nB.b, {
          name: "feather-pointed"
        })
      })
    }

    function UG(BB) {
      var OB, GB;
      let {
        hidden: YB,
        actionButtons: QB,
        contextSlots: oB
      } = BB;
      const {
        t: jB
      } = (0, aB.H)(), {
        gun: yB,
        aimable: JB,
        chargeName: PB
      } = (0, LB.g)("heldItemAim"), zB = (0, LB.g)("gliderBoostFuel"), {
        canFly: lB,
        flying: pB
      } = (0, LB.g)("flight"), qB = (0, AB.g)("touchscreenActionButton"), ZB = yB ? qG : qB, NB = JB ? {
        icon: ZG,
        label: jB("touchKeys:aim")
      } : null, RB = null !== PB ? {
        icon: [{
          icon: PB
        }]
      } : null, WB = null !== NB && void 0 !== NB ? NB : RB, VB = null !== (OB = null === (GB = yB ? NB : null !== RB && void 0 !== RB ? RB : NB) || void 0 === GB ? void 0 : GB.icon) && void 0 !== OB ? OB : WG, SB = [!QB && WB ? VG(EB.b.Action2, WB.icon, YB, WB.label) : null, yB ? VG(EB.b.Action3, NG, YB, jB("touchKeys:scope")) : null, lB ? SG(pB, jB("touchKeys:fly")) : null];
      return (0, MB.jsxs)(MB.Fragment, {
        children: [ZB && (0, MB.jsx)(fG, {
          code: EB.b.Action1,
          slot: KO,
          icon: ZB,
          label: yB ? jB("touchKeys:reload") : void 0,
          hidden: YB
        }, JSON.stringify(ZB)), QB && (0, MB.jsxs)(MB.Fragment, {
          children: [(0, MB.jsx)(fG, {
            code: EB.b.Attack,
            slot: dO,
            icon: RG,
            name: jB("touchKeys:attack"),
            hidden: YB
          }), (0, MB.jsx)(fG, {
            code: EB.b.Use,
            slot: kO,
            icon: VB,
            name: jB("touchKeys:use"),
            hidden: YB
          })]
        }), (nB = SB, UB = oB, nB.filter((BB => null !== BB)).slice(0, UB.length).map(((BB, OB) => {
          const GB = UB[OB];
          return (0, MB.jsx)(DB.Fragment, {
            children: BB.render(GB)
          }, `${BB.id}:${GB}`)
        }))), zB > 0 && (0, MB.jsx)(fG, {
          code: EB.b.Boost,
          slot: uO,
          className: "BoostKey",
          icon: AG,
          label: jB("touchKeys:boost", {
            fuel: zB > 99 ? "99+" : zB
          }),
          hidden: YB
        })]
      });
      var nB, UB
    }

    function fG(BB) {
      let {
        code: OB,
        slot: GB,
        icon: YB,
        label: DB,
        name: QB,
        hidden: jB,
        className: yB
      } = BB;
      const PB = nO(OB, jB);
      return (0, MB.jsx)(mO, {
        ref: PB,
        slot: GB,
        className: oB()("TouchActionKey", yB),
        canvasZone: !0,
        label: DB,
        role: void 0 !== QB ? "img" : void 0,
        "aria-label": QB,
        children: (0, MB.jsx)(JB.b, {
          text: YB
        })
      })
    }
    var kG = GB(4662),
      dG = GB(2839),
      KG = GB(675);
    const uG = (0, DB.memo)((function() {
      (0, SB.e)();
      const BB = (0, DB.useRef)([]),
        OB = (0, dG.c)(),
        GB = (0, DB.useRef)(0),
        YB = (0, DB.useRef)(0),
        QB = (0, DB.useRef)([]),
        oB = (0, DB.useRef)(null);

      function jB(GB, YB, DB, QB) {
        const oB = (0, KG.d)(),
          jB = setTimeout((() => {
            BB.current = BB.current.filter((BB => BB.id !== oB)), OB()
          }), QB);
        pB.gameBridge.send("recordFlyingMiddleText", {
          content: GB,
          VB: YB,
          angle: DB,
          SB: QB
        }), BB.current.push({
          id: oB,
          content: GB,
          VB: YB,
          SB: QB,
          removeTimeout: jB,
          angle: DB
        }), OB()
      }
      return (0, LB.b)("shotDamageToShow", (BB => {
        let {
          damage: OB,
          wasCrit: GB,
          distance: YB
        } = BB;
        const DB = -Math.PI / 4 + Math.random() * Math.PI / 2;
        jB(GB ? [{
          str: OB.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [OB.toString()], YB, DB, 1e3)
      })), (0, yB.f)("flyingMiddleMessage", (BB => {
        let {
          content: OB,
          VB: DB,
          SB: yB
        } = BB;
        QB.current.push({
          content: OB,
          VB: DB,
          SB: yB
        });
        const JB = () => {
          const {
            content: BB,
            VB: OB,
            SB: DB
          } = QB.current.shift(), oB = function(BB) {
            const OB = -Math.PI / 4,
              GB = Math.PI / 4,
              YB = GB - OB,
              DB = (1 + Math.sqrt(5)) / 2,
              QB = 2 * Math.PI / (DB * DB);
            let oB = BB + QB;
            for (; oB > GB;) oB -= YB;
            for (; oB < OB;) oB += YB;
            const jB = Math.PI / 6;
            if (Math.abs(oB - BB) < jB) {
              oB = BB + (Math.sign(oB - BB) || 1) * jB, oB > GB && (oB = BB - jB), oB < OB && (oB = BB + jB)
            }
            return oB
          }(YB.current);
          YB.current = oB, GB.current = Date.now(), jB(BB, OB, oB, DB)
        };
        if (!oB.current) {
          const BB = () => {
            QB.current.length > 0 && JB(), 0 === QB.current.length && (clearInterval(oB.current), oB.current = null)
          };
          oB.current = setInterval(BB, 200), GB.current + 200 < Date.now() && BB()
        }
        for (; QB.current.length > 4;) JB()
      })), (0, yB.f)("forceFlyingMiddleMessage", (BB => {
        let {
          content: OB,
          VB: GB,
          angle: YB,
          SB: DB
        } = BB;
        jB(OB, GB, YB, DB)
      })), (0, DB.useEffect)((() => () => {
        clearInterval(oB.current), oB.current = null;
        for (const OB of BB.current) clearTimeout(OB.removeTimeout)
      }), []), (0, MB.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: BB.current.map((BB => {
          const {
            id: OB,
            content: GB,
            VB: YB,
            SB: DB,
            angle: QB
          } = BB;
          return BB.pos || (BB.pos = function(BB, OB) {
            const GB = 50 / (BB ** .7 * .35);
            return {
              x: GB * Math.sin(OB),
              y: -GB * Math.cos(OB)
            }
          }(YB, QB)), (0, MB.jsx)(mG, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: DB,
            enterActiveStyle: {
              transform: `translate(${BB.pos.x}vw, ${BB.pos.y}vh)`,
              transition: `transform ${DB}ms ease-out`
            },
            children: (0, MB.jsx)("div", {
              children: (0, MB.jsx)(JB.b, {
                text: GB
              })
            })
          }, OB)
        }))
      })
    }));

    function mG(BB) {
      let {
        children: OB,
        className: GB,
        classNames: YB,
        timeout: QB,
        enterActiveStyle: oB
      } = BB;
      const [jB, yB] = (0, DB.useState)(!1), [JB, PB] = (0, DB.useState)(!1), zB = (0, DB.useRef)(null);
      return (0, DB.useEffect)((() => {
        yB(!0)
      }), []), (0, MB.jsx)(kG.e, {
        className: GB,
        classNames: YB || GB,
        in: jB,
        timeout: QB,
        nodeRef: zB,
        onEntering: () => {
          PB(!0)
        },
        children: (0, DB.cloneElement)(OB, {
          ref: zB,
          style: JB && oB || void 0
        })
      })
    }
    var IG = GB(37263);

    function FG() {
      const BB = (0, LB.g)("health");
      return (0, MB.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, MB.jsx)(IG.c, {
          placement: "statBars"
        }), (0, MB.jsx)(iG, {
          actualValue: BB.shield,
          maxValue: BB.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, MB.jsx)(iG, {
          actualValue: BB.health,
          maxValue: BB.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function iG(BB) {
      let {
        actualValue: OB,
        maxValue: GB,
        hideAtValue: YB,
        icon: DB,
        className: QB
      } = BB;
      return (0, SB.h)(), null === OB || null === GB || OB === YB || GB === YB ? null : (0, MB.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, MB.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, MB.jsx)("div", {
            className: `BottomScreenStatBar ${QB}`,
            style: {
              transform: `scaleX(${Math.max(OB/GB,0)})`,
              transformOrigin: "left center"
            }
          }), (0, MB.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, MB.jsx)(nB.b, {
              name: DB
            }), ` ${Math.ceil(OB)}/${GB}`]
          })]
        })
      })
    }
    var LG = GB(34790),
      gG = GB(4946),
      rG = GB(1360),
      XG = GB(3066),
      wG = GB(1485),
      EG = GB(1338),
      cG = GB(3843),
      hG = GB(3351),
      aG = GB(2050),
      eG = GB(2247),
      TG = GB(791),
      bG = GB(3926),
      CG = GB(120),
      HG = GB(353);

    function vG(BB, OB) {
      let {
        shownName: GB,
        lifeformType: YB
      } = BB;
      return null !== GB ? GB : null !== YB ? OB(`lifeform:${(0,HG.ef)(YB)}`) : null
    }
    var sG = GB(1624),
      xG = GB(4067),
      tG = GB(4065),
      BY = GB(4088),
      OY = GB(4086),
      GY = GB(4688),
      YY = GB(34848);

    function DY(BB) {
      let {
        config: OB,
        track: GB,
        xp: YB,
        tileState: DB
      } = BB;
      const {
        t: QB
      } = (0, aB.H)(), jB = (0, OY.j)(OB, YB), yB = (0, OY.n)(OB, YB), JB = jB < OB.tierCount ? jB + 1 : null, PB = Math.min(4, OB.tierCount), zB = Math.max(1, Math.min(jB - 1, OB.tierCount - PB + 1)), lB = null !== JB ? JB - zB : jB - zB, pB = null !== JB && JB > zB ? JB - zB : lB + 1, qB = yB.xpForNextTier - yB.xpIntoTier, ZB = yB.xpForNextTier > 0 ? yB.xpIntoTier / yB.xpForNextTier : 1, NB = {
        "--road-cols": PB,
        "--road-fill": lB,
        "--road-chip": pB
      }, RB = [];
      for (let oB = 0; oB < PB; oB++) RB.push(zB + oB);
      return (0, MB.jsxs)("div", {
        className: "SeasonPassRoad",
        style: NB,
        children: [(0, MB.jsxs)("div", {
          className: "SeasonPassRoadColumns",
          children: [(0, MB.jsx)("div", {
            className: "SeasonPassRoadLine"
          }), (0, MB.jsx)("div", {
            className: "SeasonPassRoadLine SeasonPassRoadLineFill"
          }), RB.map((BB => (0, MB.jsxs)("div", {
            className: oB()("SeasonPassRoadColumn", {
              SeasonPassRoadColumnEarning: BB === JB,
              SeasonPassRoadColumnAhead: null !== JB && BB > JB
            }),
            children: [(0, MB.jsx)(GY.f, {
              reward: (0, OY.f)(OB, {
                tier: BB,
                track: GB
              }),
              tileState: DB(BB),
              track: GB,
              size: "small"
            }), (0, MB.jsx)(YY.c, {
              tier: BB,
              state: BB === JB ? "earning" : BB <= jB ? "reached" : "locked",
              progress: ZB,
              size: "small"
            })]
          }, BB))), null !== JB && (0, MB.jsx)("span", {
            className: "SeasonPassRoadChip SmallTextBold",
            children: QB("seasonPass:xpToGo", {
              xp: qB
            })
          })]
        }), zB + PB - 1 < OB.tierCount && (0, MB.jsxs)("span", {
          className: "SeasonPassRoadEnd SmallTextBold",
          children: ["\u2026 ", OB.tierCount]
        })]
      })
    }
    const QY = (0, DB.memo)((function() {
      const {
        t: BB
      } = (0, aB.H)(), OB = (0, BY.b)(), GB = (0, tG.h)("listen");
      if (null === OB || OB.seasonPassRoomXp <= 0) return null;
      const YB = "loaded" === GB.status ? GB.view : null,
        DB = YB ? YB.config : (0, sG.e)(Date.now()),
        QB = tG.g.getProvisionalXp(OB),
        oB = OB.seasonPassLifeXp > 0 ? BB("seasonPass:xpThisLife", {
          xp: OB.seasonPassLifeXp
        }) : BB("seasonPass:xpThisGame", {
          xp: OB.seasonPassRoomXp
        });
      return (0, MB.jsxs)("div", {
        className: "SeasonPassRespawnBanner",
        children: [(0, MB.jsx)("div", {
          className: "SeasonPassRespawnBannerGained FullyFancyText",
          children: oB
        }), DB && null !== QB && (0, MB.jsx)(oY, {
          config: DB,
          view: YB,
          xp: QB
        }), OB.seasonPassXpCapped && (0, MB.jsx)("div", {
          className: "SeasonPassRespawnBannerCapped SmallTextBold",
          children: BB("seasonPass:dailyCapReached")
        })]
      })
    }));

    function oY(BB) {
      var OB;
      let {
        config: GB,
        view: YB,
        xp: DB
      } = BB;
      const QB = null !== YB && void 0 !== YB && YB.state.hasHyperRank ? "hyper" : "free",
        oB = YB ? {
          ...YB.state,
          xp: Math.max(DB, YB.state.xp)
        } : null;
      return (0, MB.jsx)(DY, {
        config: GB,
        track: QB,
        xp: null !== (OB = null === oB || void 0 === oB ? void 0 : oB.xp) && void 0 !== OB ? OB : DB,
        tileState: BB => oB ? (0, xG.g)(GB, oB, {
          tier: BB,
          track: QB
        }) : "locked"
      })
    }
    var jY = GB(3857),
      yY = GB(3866),
      JY = GB(3299);
    const MY = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      PY = (0, DB.memo)((function() {
        var BB, OB;
        const GB = (0, SB.e)(),
          YB = (0, qB.useNavigatePreserveSearch)(),
          {
            t: QB
          } = (0, aB.H)(),
          {
            loadingOverlayVisible: jB
          } = (0, iB.o)(["loadingOverlayVisible"]),
          JB = (0, rB.s)(),
          [PB, zB] = (0, DB.useState)(!1),
          [lB, ZB] = (0, DB.useState)(!0),
          [NB, RB] = (0, DB.useState)(null),
          WB = (0, dG.c)(),
          VB = (0, AB.g)("respawnButtonText"),
          UB = (0, AB.g)("usePlayAgainButton"),
          fB = (0, AB.g)("useRespawnButton"),
          {
            gameNameWithVariation: kB
          } = (0, LB.g)("connectedGame"),
          KB = (0, DB.useRef)(aG.e.get("secsToRespawn")),
          uB = (0, DB.useRef)(pB.gameBridge.latest("localPlayerAlive")),
          mB = (0, DB.useRef)(aG.e.get("secsToRespawn")),
          IB = (0, DB.useRef)(aG.e.get("autoRespawn")),
          FB = (0, DB.useRef)(null),
          gB = (0, DB.useRef)(0),
          XB = (0, DB.useRef)(0),
          [wB, EB] = (0, DB.useState)(!1),
          cB = (0, DB.useRef)(null),
          hB = (0, DB.useRef)(null),
          eB = (0, DB.useRef)(null);
        (0, AB.f)("secsToRespawn", (BB => {
          console.log("Received new secsToRespawn with", BB, "and current canRespawn value of ", IB.current), mB.current = BB, HB()
        })), (0, AB.f)("autoRespawn", (BB => {
          console.log("Received autorespawn", BB, "current canRespawn value of ", KB.current), IB.current = BB, HB()
        }));
        const TB = BB => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", BB), BB || gB.current++, uB.current = BB, HB()
        };
        (0, LB.b)("localPlayerAliveSet", TB), (0, yB.f)(hG.k, (BB => {
          "connected" === BB && !uB.current && IB.current && KB.current <= 0 && (XB.current = 0, vB())
        })), (0, DB.useEffect)((() => {
          const BB = pB.gameBridge.latest("localPlayerAlive");
          BB === uB.current ? (console.log("Updating respawn component from initial mount"), HB()) : TB(BB)
        }), []), (0, DB.useEffect)((() => {
          if (PB) {
            EB(!1);
            const BB = setTimeout((() => {
              EB(!0)
            }), 600);
            return () => {
              clearTimeout(BB)
            }
          }
          return () => {}
        }), [PB]);
        (0, LB.b)("kill", (BB => {
          let {
            killer: OB,
            victim: GB,
            withItem: YB
          } = BB;
          if (!GB.local) return;
          const DB = ((BB, OB) => {
            if (BB.local) {
              const BB = MY[OB];
              return BB ? QB(BB) : null
            }
            const GB = vG(BB, QB);
            return GB ? QB("respawnPage:killedBy", {
              name: GB
            }) : null
          })(OB, YB);
          DB && RB({
            text: DB,
            deathCount: uB.current ? gB.current + 1 : gB.current
          })
        }));
        const bB = () => {
            PB && IB.current && uB.current && wB && zB(!1)
          },
          CB = PB && IB.current && uB.current && wB && !jB;
        (0, yB.f)("usedKeyboard", (() => {
          bB()
        })), (0, yY.e)("respawn", CB, bB);
        const HB = () => {
            ZB(mB.current >= 3 || !IB.current), uB.current ? (clearInterval(FB.current), FB.current = null, IB.current ? WB() : zB(!1)) : (zB(!0), KB.current = mB.current, WB(), console.log("Running respawn stats updated", IB.current, KB.current), IB.current && KB.current <= 0 && vB(), clearInterval(FB.current), KB.current > 0 && (FB.current = setInterval((() => {
              KB.current = Math.max(KB.current - 1, 0), WB(), KB.current <= 0 && (clearInterval(FB.current), FB.current = null, aG.e.get("autoRespawn") && vB())
            }), 1e3)))
          },
          vB = () => {
            if (Date.now() - XB.current > 1e3) {
              const BB = () => {
                pB.gameBridge.send("respawn", null), XB.current = Date.now()
              };
              aG.e.get("autoRespawn") ? BB() : (0, EG.X)((() => {
                BB()
              }), "video_respawn")
            }
          },
          sB = (0, DB.useMemo)((() => {
            var BB;
            return null === (BB = (0, TG.j)(kB)) || void 0 === BB ? void 0 : BB.otherGameLinksOnRespawnPage
          }), [kB]),
          xB = 0 === KB.current,
          tB = (null === NB || void 0 === NB ? void 0 : NB.deathCount) === gB.current ? NB.text : null,
          BO = PB && lB && !jB,
          OO = JB && CB && null !== (BB = null === (OB = (0, dB.f)()) || void 0 === OB ? void 0 : OB.getBoundButton("menuConfirm")) && void 0 !== BB ? BB : null,
          GO = BB => xB ? BB : QB("respawnPage:actionInSeconds", {
            action: BB,
            seconds: KB.current
          });
        return (0, MB.jsx)(LG.d, {
          showing: PB,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, MB.jsx)(cG.b, {
            show: PB,
            "data-holds-camera-keeper": "",
            children: (0, MB.jsxs)(gG.d, {
              close: () => {
                zB(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: IB.current || jB ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, CG.is99NightsCrazyGamesBundle)() && (0, MB.jsx)(wG.c, {
                onClick: eG.d,
                children: QB("homePage:backToGames")
              }), (0, MB.jsxs)("div", {
                className: "RespawnContainer",
                onClick: bB,
                children: [(0, MB.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, MB.jsx)("div", {
                    ref: hB,
                    className: "RespawnSideSquareBannerDiv",
                    children: GB[0] > 925 && (0, JY.m)() && (0, MB.jsx)(XG.e, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: hB
                      },
                      showing: BO,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, MB.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, MB.jsxs)("div", {
                      className: oB()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: JB
                      }),
                      children: [IB.current && (0, MB.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, MB.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, MB.jsx)(nB.b, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), QB("respawnPage:youDied")]
                        }), (0, MB.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === OO && (uB.current ? QB("respawnPage:pressAnywhereToContinue") : xB ? QB("respawnPage:respawning") : GO(QB("general:respawn"))), null !== OO && (0, MB.jsx)(jY.d, {
                            text: QB("controller:screensPressToContinue", {
                              button: jY.f
                            }),
                            glyph: OO,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), tB && (0, MB.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: tB
                        })]
                      }), !IB.current && (0, MB.jsxs)(MB.Fragment, {
                        children: [(0, MB.jsxs)("div", {
                          className: oB()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !sB
                          }),
                          children: [UB && (0, MB.jsx)(wG.q, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, EG.X)((() => {
                                (0, iB.m)("inGameReplay");
                                const BB = (0, rG.c)(kB);
                                YB(BB)
                              }), "video_start")
                            },
                            disabled: !xB || !wB,
                            touchPressOn: "pointerup",
                            children: GO(QB("respawnPage:playAgain"))
                          }), fB && (0, MB.jsx)(wG.f, {
                            className: "RespawnPageButton",
                            onClick: vB,
                            padDefaultFocus: !UB,
                            padBack: "sessionBasedGame:stayInLobby" === VB,
                            disabled: !xB || !wB,
                            touchPressOn: "pointerup",
                            children: GO(QB(VB))
                          }), !(0, CG.is99NightsCrazyGamesBundle)() && (0, MB.jsx)(wG.Q, {
                            className: "RespawnPageButton",
                            onClick: eG.d,
                            disabled: !xB || !wB,
                            touchPressOn: "pointerup",
                            children: GO(QB("respawnPage:exitGame"))
                          })]
                        }), sB && (0, MB.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, MB.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: QB("respawnPage:orTry")
                          }), (0, MB.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: sB.map((BB => (0, MB.jsx)(bG.h, {
                              source: {
                                type: "game",
                                gameNameWithVariation: BB
                              },
                              disabled: !xB || !wB,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, iB.m)("inGameReplay");
                                const OB = (0, rG.c)(BB);
                                YB(OB)
                              }
                            }, BB)))
                          })]
                        })]
                      }), PB && (0, MB.jsx)(QY, {})]
                    })
                  }), (0, MB.jsx)("div", {
                    ref: eB,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, MB.jsx)("div", {
                  ref: cB,
                  className: "RespawnBottom",
                  children: (0, JY.m)() && (0, MB.jsx)(XG.e, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: cB
                    },
                    showing: BO,
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
    var zY = GB(37279);
    const lY = [{
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
      pY = [{
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
      qY = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      ZY = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      NY = (0, DB.memo)((function() {
        const BB = (0, DB.useRef)(null),
          OB = (0, DB.useRef)(null);

        function GB(GB) {
          var YB;
          let {
            GD: DB,
            screenPos: QB
          } = GB;
          const oB = BB.current;
          null === (YB = OB.current) || void 0 === YB || YB.cancel(), oB.classList.remove("HitmarkerCrit"), QB ? (oB.style.left = `${QB.x}%`, oB.style.top = `${QB.y}%`) : (oB.style.left = "50%", oB.style.top = "50%"), oB.style.rotate = 16 * (Math.random() - .5) + "deg", DB && oB.classList.add("HitmarkerCrit");
          const jB = oB.animate(DB ? pY : lY, DB ? ZY : qY);
          OB.current = jB, jB.onfinish = () => {
            oB.classList.remove("HitmarkerCrit")
          }
        }
        return (0, yB.f)("localGunHitmarker", (BB => {
          let {
            GD: OB
          } = BB;
          GB({
            GD: OB
          })
        })), (0, yB.f)("yourAttackHit", (BB => {
          let {
            GD: OB,
            screenPos: YB
          } = BB;
          GB({
            GD: OB,
            screenPos: iB.c.get("isTouchScreen") ? YB : void 0
          })
        })), (0, yB.f)("sendHitmarker", (BB => {
          let {
            GD: OB,
            screenPos: YB
          } = BB;
          GB({
            GD: OB,
            screenPos: YB
          })
        })), (0, MB.jsxs)("div", {
          ref: BB,
          className: "Hitmarker",
          children: [(0, MB.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, MB.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, MB.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, MB.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function RY() {
      const BB = (0, DB.useRef)(!0);
      return (0, yB.f)("localBlockMined", (() => {
        HB.h.play("blockMined")
      })), (0, yB.f)("yourAttackHit", (() => {
        HB.h.play("hitLanded")
      })), (0, yB.f)("localGunHitmarker", (() => {
        HB.h.play("hitLanded")
      })), (0, yB.f)("damagedByOtherPlayer", (() => {
        HB.h.play("damageTaken")
      })), (0, LB.b)("localPlayerAliveSet", (OB => {
        !OB && BB.current && HB.h.play("death"), BB.current = OB
      })), null
    }
    var WY = GB(2012),
      AY = GB(37300),
      VY = GB.n(AY),
      SY = GB(2134),
      nY = GB(2125),
      UY = GB(3708),
      fY = GB(34813);
    const kY = HG.Oe ? 7e7 : 7e3,
      dY = VY()("#ffffff").alpha(.5).string();

    function KY(BB) {
      const OB = (0, UY.c)(BB);
      return void 0 !== OB && "Gun" === (0, fY.itemTypeOf)(OB)
    }

    function uY(BB) {
      if (!BB) return console.error(`Killfeed colour was ${BB}`), dY;
      try {
        return VY()(BB).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${BB} is not a colour`), dY
      }
    }
    const mY = (0, DB.memo)((function() {
      const {
        t: BB
      } = (0, aB.H)(), OB = (0, DB.useRef)([]), GB = (0, dG.c)();
      return (0, LB.b)("kill", (function(YB) {
        var DB, QB;
        let {
          killer: oB,
          victim: jB,
          withItem: yB,
          killstreak: JB
        } = YB;
        const MB = OB.current;
        if (MB.length >= 3) {
          const BB = MB.shift();
          clearTimeout(BB.timeout)
        }
        const PB = pB.gameBridge.latest("hiddenPlayerNames"),
          zB = {
            deadName: vG(jB, BB),
            killerName: vG(oB, BB),
            isFriend: {
              killer: (0, SY.h)(oB.realName, PB),
              dead: (0, SY.h)(jB.realName, PB)
            },
            withItem: yB,
            wasHeadshot: !1,
            killstreak: JB,
            timeout: setTimeout((() => {
              MB.shift(), GB()
            }), kY),
            reactId: `${null!==(DB=oB.id)&&void 0!==DB?DB:oB.shownName}|${null!==(QB=jB.id)&&void 0!==QB?QB:jB.shownName}|${Date.now()}`,
            killerBackground: uY(oB.colour),
            deadBackground: uY(jB.colour)
          };
        MB.push(zB), GB()
      })), (0, DB.useEffect)((() => {
        const BB = OB.current;
        return () => {
          for (; BB.length > 0;) {
            const {
              timeout: OB
            } = BB.pop();
            clearTimeout(OB)
          }
        }
      }), []), (0, MB.jsx)("div", {
        className: "Killfeed",
        children: OB.current.map((BB => {
          let {
            deadName: OB,
            killerName: GB,
            withItem: YB,
            wasHeadshot: DB,
            killstreak: QB,
            killerBackground: oB,
            deadBackground: jB,
            reactId: yB,
            isFriend: JB
          } = BB;
          return (0, MB.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${oB} calc(100% - 10rem), ${jB} 100%)`
            },
            children: [QB >= 2 ? (0, MB.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, HG.S)(QB)
            }) : null, (0, MB.jsx)("div", {
              className: "KillfeedKillerName",
              children: GB
            }), JB.killer && (0, MB.jsx)(nY.e, {}), (0, MB.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: KY(YB) ? "7.5vmin" : "5vmin"
              },
              children: (0, MB.jsx)(WY.c, {
                itemName: YB,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), DB ? (0, MB.jsx)(nB.b, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, MB.jsx)("div", {
              className: "KillfeedDeadName",
              children: OB
            }), JB.dead && (0, MB.jsx)(nY.e, {})]
          }, yB)
        }))
      })
    }));
    var IY = GB(37353),
      FY = GB(1127),
      iY = GB.n(FY),
      LY = GB(331),
      gY = GB(3824),
      rY = GB(37361),
      XY = GB(1299);
    const wY = {},
      EY = (0, DB.memo)((function() {
        const BB = (0, DB.useRef)({}),
          [, OB] = (0, DB.useReducer)((BB => BB + 1), 0);
        (0, yB.f)("setDirectionArrow", (GB => {
          let {
            id: YB,
            position: DB,
            style: QB,
            text: oB,
            oO: jB
          } = GB;
          const yB = BB.current,
            JB = QB || wY,
            MB = oB,
            PB = yB[YB];
          if (!PB) return yB[YB] = {
            position: DB,
            style: JB,
            text: MB,
            shouldShowDistance: jB,
            aE: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void OB();
          const zB = !iY()(PB.style, JB) || !iY()(PB.text, MB) || PB.shouldShowDistance !== jB;
          PB.position = DB, PB.style = JB, PB.text = MB, PB.shouldShowDistance = jB, zB && OB()
        })), (0, yB.f)("clearDirectionArrow", (GB => {
          let {
            id: YB
          } = GB;
          const DB = BB.current;
          if (null === YB)
            for (const BB in DB) delete DB[BB];
          else delete DB[YB];
          OB()
        })), (0, DB.useEffect)((() => {
          const OB = BB.current,
            GB = (0, XY.u)((() => {
              ! function(BB) {
                const OB = pB.gameBridge.lookup("localPos", null),
                  GB = gY.b - cY,
                  YB = (0, gY.g)() - cY;
                for (const DB in BB) {
                  const QB = BB[DB];
                  if (!QB.aE) continue;
                  const oB = pB.gameBridge.lookup("screenPos", QB.position),
                    jB = oB.x - 50,
                    yB = oB.y - 50;
                  oB.x === QB.lastScreenX && oB.y === QB.lastScreenY || (QB.lastScreenX = oB.x, QB.lastScreenY = oB.y, QB.aE.style.translate = `${oB.x}vw ${oB.y}vh`, QB.chevronElement && (QB.chevronElement.style.rotate = `${HG.b.fastATan2(yB,jB)}rad`));
                  const JB = Math.abs(jB) < GB && Math.abs(yB) < YB;
                  if (JB !== QB.onScreen && (QB.onScreen = JB, QB.aE.classList.toggle("DirectionArrowOnScreen", JB)), QB.shouldShowDistance && QB.distanceElement) {
                    const BB = QB.position[0] - OB[0],
                      GB = QB.position[1] - OB[1],
                      YB = QB.position[2] - OB[2],
                      DB = Math.round(Math.sqrt(BB * BB + GB * GB + YB * YB));
                    (-1 === QB.lastRenderedDist || (0, rY.b)(DB, QB.lastRenderedDist, QB.lastDistUpdateTime)) && (QB.distanceElement.textContent = `${DB}m`, QB.lastRenderedDist = DB, QB.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(OB)
            }));
          return () => {
            GB();
            for (const BB in OB) delete OB[BB]
          }
        }), []);
        const GB = BB.current;
        return (0, MB.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(GB).map((BB => {
            var OB;
            let [YB, DB] = BB;
            const QB = null !== (OB = (0, LY.cc)(DB.style)) && void 0 !== OB ? OB : "#ffffff";
            return (0, MB.jsxs)("div", {
              ref: BB => {
                GB[YB] && (GB[YB].aE = BB)
              },
              className: "DirectionArrow",
              style: {
                fontSize: DB.style.fontSize,
                opacity: DB.style.opacity
              },
              children: [(0, MB.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: BB => {
                  GB[YB] && (GB[YB].chevronElement = BB)
                },
                children: [(0, MB.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, MB.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, MB.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, MB.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, MB.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: QB
                    }
                  }), (0, MB.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: QB
                    }
                  })]
                })]
              }), (0, MB.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: QB,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${QB}`
                }
              }), DB.text && (0, MB.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: QB,
                  fontWeight: DB.style.fontWeight,
                  fontStyle: DB.style.fontStyle
                },
                children: (0, MB.jsx)(JB.b, {
                  text: DB.text
                })
              }), DB.shouldShowDistance && (0, MB.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: BB => {
                  GB[YB] && (GB[YB].distanceElement = BB)
                },
                style: {
                  color: QB,
                  fontWeight: DB.style.fontWeight,
                  fontStyle: DB.style.fontStyle
                }
              })]
            }, YB)
          }))
        })
      })),
      cY = .5;
    const hY = (0, DB.memo)((function(BB) {
        let {
          isTouchScreen: OB
        } = BB;
        return (0, MB.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, MB.jsx)(bY, {}), OB && (0, MB.jsx)(zG, {})]
        })
      })),
      aY = {
        readyForNext: 0,
        running: 1
      },
      eY = 50;

    function TY(BB) {
      console.assert(BB.state.current === aY.readyForNext);
      const OB = BB.queue.current,
        GB = BB.foreground.current;
      if (OB.length > 0 && GB) {
        const {
          toFraction: YB,
          toDuration: DB
        } = OB.shift();
        BB.state.current = aY.running, GB.style.transition = `transform ${Math.max(DB-eY,0)}ms linear`, GB.classList.remove("Complete"), BB.timeout.current = setTimeout((() => {
          GB.style.transform = `scaleX(${YB})`, BB.timeout.current = setTimeout((() => {
            1 === YB && GB.classList.add("Complete"), BB.state.current = aY.readyForNext, TY(BB)
          }), Math.max(DB - eY, 0))
        }), eY)
      }
    }

    function bY() {
      const BB = (0, DB.useRef)([]),
        OB = (0, DB.useRef)(aY.readyForNext),
        GB = (0, DB.useRef)(void 0),
        YB = (0, DB.useRef)(null),
        QB = (0, DB.useRef)({
          queue: BB,
          state: OB,
          timeout: GB,
          foreground: YB
        }),
        oB = (0, AB.g)("showProgressBar");
      if ((0, DB.useLayoutEffect)((() => (oB && OB.current === aY.readyForNext && TY(QB.current), () => {
          OB.current = aY.readyForNext, clearTimeout(GB.current), oB && (BB.current.length = 0)
        })), [oB]), (0, yB.f)("progressBarUpdate", (GB => {
          let {
            toFraction: YB,
            toDuration: DB
          } = GB;
          BB.current.push({
            toFraction: YB,
            toDuration: DB
          }), OB.current === aY.readyForNext && TY(QB.current)
        })), !oB) return null;
      return (0, MB.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, MB.jsx)("div", {
          className: "ProgressBarForeground",
          ref: YB,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var CY = GB(37367),
      HY = GB(2682);
    const vY = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function sY(BB) {
      let {
        classes: OB,
        gone: GB
      } = BB;
      const YB = document.documentElement;
      YB.classList.remove(...OB);
      for (const DB of GB) DB.style.display = "block";
      return () => {
        YB.classList.add(...OB);
        for (const BB of GB) BB.style.display = ""
      }
    }

    function xY(BB) {
      const {
        isTouchScreen: OB
      } = (0, iB.o)(["isTouchScreen"]);
      (0, DB.useLayoutEffect)((() => {
        if (!OB) return;
        const GB = BB.current,
          YB = document.querySelector(`.${CY.k}`),
          DB = BB => {
            const OB = () => {
              const OB = BB.querySelector(HY.g),
                YB = function(BB) {
                  const OB = document.documentElement;
                  return {
                    classes: QO.F.map(JO.t).filter((BB => OB.classList.contains(BB))),
                    gone: [...BB.querySelectorAll(`.TopRightTrayToggle.${HY.k}`)]
                  }
                }(BB);
              OB && function(BB, OB) {
                (0, HY.B)(BB, OB.classes.length > 0 || OB.gone.length > 0, (() => sY(OB)))
              }(OB, YB);
              const DB = `${Math.floor(function(BB,OB,GB){const YB=document.documentElement,DB=YB.classList.contains((0,JO.y)("menu")),QB=YB.style.getPropertyValue((0,JO.G)("menu"));if(!DB&&""===QB)return BB.getBoundingClientRect().left;const oB=OB?(0,HY.r)(OB):()=>{},jB=sY(GB);YB.classList.remove((0,JO.y)("menu")),YB.style.removeProperty((0,JO.G)("menu"));const yB=BB.getBoundingClientRect().left;return jB(),oB(),DB&&YB.classList.add((0,JO.y)("menu")),""!==QB&&YB.style.setProperty((0,JO.G)("menu"),QB),yB}(BB,OB,YB)-GB.getBoundingClientRect().left-4)}px`;
              GB.style.getPropertyValue("--InGameHeaderMaxWidth") !== DB && GB.style.setProperty("--InGameHeaderMaxWidth", DB)
            };
            OB();
            const DB = new ResizeObserver(OB);
            DB.observe(BB), DB.observe(YB), window.addEventListener("resize", OB);
            const QB = () => vY.map((BB => document.documentElement.style.getPropertyValue(BB))).join();
            let oB = QB();
            const jB = new MutationObserver((() => {
              const BB = QB();
              BB !== oB && (oB = BB, OB())
            }));
            jB.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const yB = (0, lB.p)(JO.e, OB),
              JB = new MutationObserver(OB);
            return JB.observe(BB, {
              childList: !0,
              subtree: !0
            }), () => {
              DB.disconnect(), jB.disconnect(), JB.disconnect(), yB(), window.removeEventListener("resize", OB);
              const GB = BB.querySelector(HY.g);
              GB && (0, HY.r)(GB)
            }
          },
          QB = () => YB.querySelector(".TopRightIconsContainer"),
          oB = QB();
        let jB;
        if (oB) jB = DB(oB);
        else {
          const BB = new MutationObserver((() => {
            const OB = QB();
            OB && (BB.disconnect(), jB = DB(OB))
          }));
          BB.observe(YB, {
            childList: !0,
            subtree: !0
          }), jB = () => {
            BB.disconnect()
          }
        }
        return () => {
          jB(), GB.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [OB, BB])
    }
    var tY = GB(4107),
      BD = GB(4101),
      OD = GB(1699),
      GD = GB(1540),
      YD = GB(1705),
      DD = GB(1822),
      QD = GB(1964),
      oD = GB(1121),
      jD = GB(4682),
      yD = GB(1403);
    const JD = 2e4,
      MD = 6e5,
      PD = new Set;

    function zD() {
      const {
        gameEntrySource: BB,
        loadingOverlayVisible: OB
      } = (0, iB.o)(["gameEntrySource", "loadingOverlayVisible"]), GB = (0, LB.f)("connectedGame", (BB => (0, jD.k)(BB) ? BB.lobbyName : null)), YB = (0, LB.g)("localPlayerAlive"), QB = (0, LB.f)("players", (BB => null !== BB.localId && void 0 !== BB.byId[BB.localId])), [oB, jB] = (0, DB.useState)(null);
      return !OB && YB && QB && null !== GB && oB !== GB && jB(GB), (0, DB.useEffect)((() => {
        if (!(0, jD.l)(BB) || null === oB || oB !== GB || PD.has(oB)) return;
        const OB = setTimeout((() => {
          PD.add(oB), async function(BB) {
            const OB = await oD.userContextManager.getCurrentUserContext();
            let GB;
            try {
              GB = (await GD.b.getWorldOwnerFriendOffer(OB)).owner
            } catch (DB) {
              return void console.warn("Couldn't ask who owns this world", DB)
            }
            if (!GB || (0, jD.s)(GB.name, Date.now())) return;
            const YB = GB;
            ! function(BB, OB) {
              const GB = Date.now() + MD;
              let YB = Date.now(),
                DB = 0;
              const QB = () => {
                const oB = Date.now(),
                  jB = pB.gameBridge.latest("connectedGame");
                jB.lobbyName !== BB || oB > GB || (null === jB.websocketUrl ? YB = 1 / 0 : YB === 1 / 0 && !iB.c.get("loadingOverlayVisible") && pB.gameBridge.latest("localPlayerAlive") && (YB = oB + JD), DB = oB < YB || !pB.gameBridge.latest("localPlayerAlive") || iB.c.get("isUiHidden") || iB.c.get("isUiHiddenByCamera") || (0, DD.isTypingInInput)() || iB.c.get("loadingOverlayVisible") || (0, OD.r)() || (0, tY.g)() || (0, yD.k)() ? 0 : DB + 1, DB >= 2 ? OB() : setTimeout(QB, 500))
              };
              QB()
            }(BB, (() => {
              (0, jD.h)(YD.b.getSocialState().friends, YB.name) || ((0, jD.o)(YB.name, Date.now()), QD.d.showWorldOwnerOffer(YB), (0, BG.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(oB).catch((BB => {
            console.error("Failed to offer the world's owner as a friend", BB)
          }))
        }), JD);
        return () => {
          clearTimeout(OB)
        }
      }), [BB, oB, GB]), null
    }
    var lD = GB(2002);
    const pD = (0, DB.memo)((function(BB) {
        let {
          durationMs: OB,
          endsAtMs: GB
        } = BB;
        const [, YB] = (0, DB.useReducer)((BB => BB + 1), 0), QB = null === GB ? OB : Math.max(GB - Date.now(), 0);
        return (0, DB.useEffect)((() => {
          if (null === GB || QB <= 0) return;
          const BB = setTimeout(YB, QB - 1e3 * (Math.ceil(QB / 1e3) - 1));
          return () => {
            clearTimeout(BB)
          }
        })), (0, MB.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, HG.ib)(QB)
        })
      })),
      qD = (0, DB.memo)((function() {
        const BB = (0, LB.g)("localEffects");
        return (0, MB.jsxs)("div", {
          className: "EffectInfosWrapper",
          children: [Object.entries(BB).map((BB => {
            let [OB, {
              icon: GB,
              displayName: YB,
              durationMs: DB,
              endsAtMs: QB,
              level: oB
            }] = BB;
            return (0, MB.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, MB.jsx)(lD.d, {
                icon: GB,
                className: "EffectInfoIcon"
              }), (0, MB.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== DB ? "0" : "1rem"
                },
                children: [(0, MB.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, MB.jsx)(JB.b, {
                    text: null !== YB && void 0 !== YB ? YB : OB,
                    className: "EffectInfoName SmallTextBold"
                  }), oB > 1 && (0, MB.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, HG.S)(oB)
                  })]
                }), null !== DB && (0, MB.jsx)(pD, {
                  durationMs: DB,
                  endsAtMs: QB
                })]
              })]
            }, OB)
          })), (0, MB.jsx)(IG.c, {
            placement: "bottomLeft"
          })]
        })
      }));
    var ZD = GB(37374),
      ND = GB(37593),
      RD = GB(192),
      WD = GB(3085);
    var AD = GB(3279);

    function VD(BB, OB) {
      (0, DB.useLayoutEffect)((() => {
        let OB, GB;
        const YB = requestAnimationFrame((() => {
          GB = setTimeout((() => {
            GB = void 0;
            const YB = BB();
            OB = "function" === typeof YB ? YB : void 0
          }), 0)
        }));
        return () => {
          var BB;
          cancelAnimationFrame(YB), clearTimeout(GB), null === (BB = OB) || void 0 === BB || BB()
        }
      }), OB)
    }
    const SD = [5, 5, 5],
      nD = [7, 4, 4, 4];

    function UD(BB) {
      return BB.reduce(((BB, OB) => BB + OB), 0)
    }

    function fD(BB, OB, GB, YB, DB) {
      const QB = BB.getContext("2d");
      if (!QB) return null;
      const oB = OB.color,
        jB = `${OB.fontWeight} ${DB}px ${OB.fontFamily}`,
        yB = () => {
          BB.width = GB, BB.height = YB, QB.fillStyle = oB, QB.textAlign = "center", QB.textBaseline = "middle", QB.font = jB
        };
      return yB(), {
        ctx: QB,
        reset: yB
      }
    }
    const kD = (0, DB.memo)((function(BB) {
      let {
        show: OB,
        asText: GB
      } = BB;
      const YB = (0, DB.useRef)(null),
        QB = (0, DB.useRef)(null),
        oB = (0, DB.useRef)(null),
        jB = (0, DB.useRef)(null),
        yB = (0, ZB.l)();
      return (0, DB.useEffect)((() => yB.whenShown((() => {
        let BB = 0,
          OB = 0,
          GB = performance.now(),
          YB = 0;
        const DB = (0, XY.u)((() => {
          var DB, QB, yB;
          BB++, OB++;
          const JB = performance.now();
          if (JB - GB < 1e3) return;
          const MB = Math.round(BB / (JB - GB) * 1e3);
          if (oB.current = MB, null === (DB = jB.current) || void 0 === DB || DB.call(jB, MB), BB = 0, GB = JB, MB >= 55) return void(YB = 0);
          if (YB += 1, YB < 15) return;
          const PB = null !== (QB = YG.g.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== QB ? QB : 0,
            [zB, qB] = aG.e.get("minChunkAddDist");
          if (function(BB, OB) {
              const GB = pB.gameBridge.lookup("bR", null);
              return null !== GB && (GB.horizontal > BB || GB.vertical > OB)
            }(zB, qB) && (null !== (yB = YG.g.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== yB ? yB : 0) + 432e5 < Date.now() && PB < 3) {
            YG.g.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            GG.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((BB => {
              "notificationTornDown" !== BB && (BB ? (pB.gameBridge.send("setChunkAddDistance", {
                horizontal: zB,
                vertical: qB
              }), YG.g.setItem("chunkHorizAddDist", zB), YG.g.setItem("chunkVertAddDist", qB), lB.o.tM("updatedChunkLoadDist"), YG.g.setItem("decreaseLoadDistPromptDeniedCount", 0)) : YG.g.setItem("decreaseLoadDistPromptDeniedCount", PB + 1))
            }))
          }
        }));
        let QB = performance.now();
        OB = 0;
        let yB = null,
          JB = !document.hidden,
          MB = !1;

        function PB() {
          const BB = performance.now() - QB,
            GB = 1e3 * OB / BB;
          JB && !MB && (null === yB && (yB = GB), WD.b.setFps(GB, yB)), OB = 0, QB = performance.now()
        }
        let zB = setInterval(PB, AD.b);

        function qB() {
          OB = 0, QB = performance.now(), clearInterval(zB), zB = setInterval(PB, AD.b)
        }

        function ZB() {
          const BB = JB;
          JB = !document.hidden, !BB && JB && qB()
        }
        document.addEventListener("visibilitychange", ZB);
        const NB = (0, lB.p)(hG.k, (BB => {
          const OB = MB;
          MB = (0, hG.m)(BB), OB && !MB && qB()
        }));
        return () => {
          DB(), document.removeEventListener("visibilitychange", ZB), NB(), clearInterval(zB)
        }
      }))), [yB]), VD((() => {
        var BB;
        if (GB) {
          const BB = document.createTextNode("");
          QB.current.appendChild(BB);
          const OB = function(BB) {
            return OB => {
              const GB = OB.toString();
              BB.data !== GB && (BB.data = GB)
            }
          }(BB);
          return jB.current = OB, null !== oB.current && OB(oB.current), () => {
            BB.remove(), jB.current = null
          }
        }
        if (!OB || jB.current) return;
        const DB = YB.current,
          yB = window.getComputedStyle(DB.parentElement),
          JB = null !== (BB = window.devicePixelRatio) && void 0 !== BB ? BB : 1,
          MB = parseFloat(yB.fontSize) * JB,
          PB = Math.round(3 * MB),
          zB = Math.round(MB),
          lB = fD(DB, yB, PB, zB, MB);
        if (!lB) return;
        const {
          ctx: pB,
          reset: qB
        } = lB, ZB = BB => {
          qB(), pB.fillText(BB.toString(), DB.width / 2, DB.height / 2)
        };
        jB.current = ZB, null !== oB.current && ZB(oB.current)
      }), [OB, GB]), (0, MB.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: OB ? "flex" : "none"
        },
        children: [(0, MB.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), GB && (0, MB.jsx)("span", {
          className: "FpsText",
          ref: QB
        }), !GB && (0, MB.jsx)("canvas", {
          className: "FpsCanvas",
          ref: YB,
          width: 48,
          height: 16
        })]
      })
    }));

    function dD(BB) {
      return Math.sign(BB) * Math.round(100 * Math.abs(BB))
    }

    function KD(BB) {
      let {
        getCoordinates: OB,
        showChunkCoords: GB,
        columns: YB
      } = BB;
      const QB = (0, DB.useRef)(null);
      return VD((() => {
        var BB;
        const DB = QB.current,
          oB = window.getComputedStyle(DB.parentElement),
          jB = null !== (BB = window.devicePixelRatio) && void 0 !== BB ? BB : 1,
          yB = parseFloat(oB.fontSize) * jB,
          JB = Math.round(yB * UD(YB)),
          MB = Math.round(yB),
          PB = fD(DB, oB, JB, MB, yB);
        if (!PB) return;
        const {
          ctx: zB,
          reset: lB
        } = PB;
        let qB = !0,
          ZB = 0,
          NB = 0,
          RB = 0,
          WB = 0,
          AB = 0,
          VB = 0;
        const SB = () => {
          qB = !0
        };
        document.fonts.load(zB.font).then(SB, SB);
        const nB = () => {
          lB(), SB()
        };
        DB.addEventListener("contextrestored", nB);
        let UB = performance.now();
        const fB = (0, XY.z)((() => {
          var BB, QB, oB, jB, JB, MB;
          const PB = performance.now();
          PB - UB >= 1e3 && (UB = PB, lB(), SB());
          const [nB, fB, kB] = OB(), dB = dD(nB), KB = dD(fB), uB = dD(kB);
          let mB = null;
          if (GB) {
            const BB = pB.gameBridge.lookup("localPos", null);
            mB = (0, eB.bb)(BB[0], BB[1], BB[2])
          }
          const IB = null !== (BB = null === (QB = mB) || void 0 === QB ? void 0 : QB[0]) && void 0 !== BB ? BB : 0,
            FB = null !== (oB = null === (jB = mB) || void 0 === jB ? void 0 : jB[1]) && void 0 !== oB ? oB : 0,
            iB = null !== (JB = null === (MB = mB) || void 0 === MB ? void 0 : MB[2]) && void 0 !== JB ? JB : 0;
          if (!qB && dB === ZB && KB === NB && uB === RB && IB === WB && FB === AB && iB === VB) return;
          qB = !1, ZB = dB, NB = KB, RB = uB, WB = IB, AB = FB, VB = iB;
          const LB = [(dB / 100).toFixed(2), (KB / 100).toFixed(2), (uB / 100).toFixed(2)];
          mB && LB.unshift(`${IB} ${FB} ${iB}`), zB.clearRect(0, 0, DB.width, DB.height);
          const gB = DB.height / 2;
          let rB = 0;
          for (let OB = 0; OB < LB.length; OB++) {
            const BB = yB * YB[OB];
            zB.fillText(LB[OB], rB + BB / 2, gB, BB), rB += BB
          }
        }));
        return () => {
          fB(), DB.removeEventListener("contextrestored", nB)
        }
      }), [OB, GB, YB]), (0, MB.jsx)("div", {
        className: "CoordinateUI",
        children: (0, MB.jsx)("canvas", {
          ref: QB,
          className: "CoordinateCanvas",
          width: 16 * UD(YB),
          height: 16
        })
      })
    }
    const uD = (0, DB.memo)((function() {
        const BB = (0, DB.useCallback)((() => {
          const BB = pB.gameBridge.lookup("localPos", null);
          return [BB[0], BB[1], BB[2]]
        }), []);
        return (0, MB.jsx)(KD, {
          getCoordinates: BB,
          showChunkCoords: !1,
          columns: SD
        })
      })),
      mD = (0, DB.memo)((function() {
        const BB = (0, DB.useCallback)((() => {
          const BB = pB.gameBridge.lookup("localPos", null),
            OB = RD.f.pP;
          let GB = BB[0] % OB,
            YB = BB[1] % OB,
            DB = BB[2] % OB;
          return GB < 0 && (GB += OB), YB < 0 && (YB += OB), DB < 0 && (DB += OB), [GB, YB, DB]
        }), []);
        return (0, MB.jsx)(KD, {
          getCoordinates: BB,
          showChunkCoords: !0,
          columns: nD
        })
      }));
    var ID = GB(2160),
      FD = GB(1375),
      iD = GB(1049),
      LD = GB(1217),
      gD = GB(37434),
      rD = GB(1493),
      XD = GB(3573);
    const wD = (0, DB.memo)((function() {
      const BB = (0, AB.g)("maxAuraLevel");
      return 0 === BB ? null : (0, MB.jsx)(ED, {
        maxLevel: BB
      })
    }));

    function ED(BB) {
      let {
        maxLevel: OB
      } = BB;
      const GB = (0, AB.g)("auraPerLevel"),
        [YB, QB] = (0, DB.useState)((() => {
          var BB;
          return null !== (BB = pB.gameBridge.latest("aura")) && void 0 !== BB ? BB : void 0
        })),
        [oB, jB] = (0, DB.useState)((() => RB(YB))),
        [yB, JB] = (0, DB.useReducer)((BB => BB + 1), 0),
        PB = (0, DB.useRef)(null),
        zB = (0, DB.useRef)([]),
        lB = (0, DB.useRef)({
          width: 0,
          level: 0
        }),
        qB = (0, DB.useRef)(null),
        ZB = (0, DB.useRef)(null);

      function NB() {
        if (null !== qB.current) return;
        if (0 === zB.current.length) return;
        const {
          width: BB,
          level: OB
        } = zB.current.shift();
        let GB;
        if (OB !== lB.current.level && OB > lB.current.level !== BB > lB.current.width) {
          const YB = OB > lB.current.level;
          GB = YB ? BB : 100 - BB, PB.current.style.transition = "none", PB.current.style.width = YB ? "0%" : "100%", PB.current.offsetWidth
        } else GB = Math.abs(BB - lB.current.width);
        const YB = 100 * GB / 20;
        PB.current.style.transition = `width ${YB}ms linear`, jB(BB), lB.current = {
          width: BB,
          level: OB
        }, zB.current.length > 0 && (qB.current = setTimeout((() => {
          qB.current = null, NB()
        }), YB))
      }

      function RB(BB) {
        return Math.floor(BB / GB) === OB ? 100 : BB % GB / GB * 100
      }
      return (0, DB.useEffect)((() => () => {
        clearTimeout(qB.current), clearTimeout(ZB.current), qB.current = null, ZB.current = null
      }), []), (0, LB.b)("aura", (BB => {
        if (ZB.current && clearTimeout(ZB.current), null === BB) return clearTimeout(qB.current), ZB.current = null, qB.current = null, zB.current = [], lB.current = {
          width: 0,
          level: 0
        }, QB(void 0), void jB(0);
        ZB.current = setTimeout((() => {
          const OB = Math.floor(YB / GB),
            DB = Math.floor(BB / GB),
            oB = RB(BB);
          BB > YB && gD.b.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), DB > OB ? (DB % 5 === 0 && gD.b.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), JB(), zB.current.push({
            width: 100,
            level: OB
          })) : DB < OB && zB.current.push({
            width: 0,
            level: OB
          }), BB === YB && DB === OB || zB.current.push({
            width: oB,
            level: DB
          }), QB(BB), NB()
        }), 50)
      })), (0, SB.h)(), (0, MB.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, MB.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, MB.jsx)(rD.c, {
            showSignal: yB,
            particleElement: (0, MB.jsx)("img", {
              src: (0, XD.g)("glint"),
              alt: ""
            })
          }), (0, MB.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, XD.g)("glint"),
            alt: "aura"
          }), (0, MB.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== YB && void 0 !== YB ? YB : 0) / GB)
          })]
        }), (0, MB.jsx)("div", {
          className: "AuraBar",
          children: (0, MB.jsx)("div", {
            ref: PB,
            className: "AuraBarBackground",
            style: {
              width: `${oB}%`
            }
          })
        })]
      })
    }
    var cD = GB(2847);

    function hD(BB) {
      BB.timed && (BB.endedAnimation = BB.timed.animation, BB.timed = null)
    }
    const aD = (0, DB.memo)((function() {
      const BB = (0, DB.useRef)(null),
        OB = (0, DB.useRef)(null),
        GB = (0, DB.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, yB.f)("middleScreenBarInitiate", (BB => {
        var YB;
        let {
          duration: DB,
          BY: QB,
          horizBarRemOffset: oB
        } = BB;
        const jB = GB.current;
        hD(jB);
        const yB = OB.current;
        if (!(DB >= 0) || !yB) return;
        null === (YB = jB.endedAnimation) || void 0 === YB || YB.cancel(), jB.endedAnimation = null;
        const JB = yB.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: DB,
          fill: "forwards"
        });
        jB.timed = {
          BY: QB,
          horizBarRemOffset: oB,
          animation: JB
        }
      })), (0, yB.f)("middleScreenBarRemove", (() => {
        hD(GB.current)
      })), (0, DB.useEffect)((() => {
        const YB = GB.current;
        let DB = Number.NaN,
          QB = Number.NaN,
          oB = Number.NaN;
        return (0, XY.q)((() => {
          var GB, jB, yB, JB;
          const MB = BB.current,
            PB = OB.current;
          if (!MB || !PB) return;
          null !== (GB = YB.timed) && void 0 !== GB && GB.BY && "finished" === YB.timed.animation.playState && hD(YB), null === (jB = YB.endedAnimation) || void 0 === jB || jB.cancel(), YB.endedAnimation = null;
          let zB = YB.timed ? 1 : 0;
          if (!YB.timed) {
            const BB = pB.gameBridge.lookup("momentumFrac", null);
            zB = BB > 0 ? 1 : 0, BB !== oB && (oB = BB, PB.style.transform = `scaleX(${BB})`)
          }
          const lB = null !== (yB = null === (JB = YB.timed) || void 0 === JB ? void 0 : JB.horizBarRemOffset) && void 0 !== yB ? yB : 0;
          lB === DB && zB === QB || (DB = lB, QB = zB, MB.style.transform = `translateX(calc(-50% + ${lB}rem)) scaleX(${zB})`)
        }))
      }), []), (0, MB.jsx)("div", {
        className: "MiddleScreenBar",
        ref: BB,
        children: (0, MB.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: OB
        })
      })
    }));
    var eD = GB(5150),
      TD = GB(3058);

    function bD() {
      const {
        t: BB
      } = (0, aB.H)(), OB = (0, yB.i)("serverUpdating", null), GB = (0, TD.c)(250, null !== OB);
      return null === OB || GB - OB > 3e4 ? null : (0, MB.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, MB.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: BB("updateWaiting:updatingIn", {
            countdown: (0, eD.o)(OB - GB)
          })
        }), (0, MB.jsx)("div", {
          children: BB("updateWaiting:bringYouBack")
        })]
      })
    }
    var CD = GB(37619),
      HD = GB(2085),
      vD = GB(2111),
      sD = GB(2076);
    const xD = [{
        translationKey: "general:interact"
      }],
      tD = (0, DB.memo)((function() {
        const BB = (0, AB.g)("crosshairText"),
          {
            interactPrompt: OB,
            blockText: GB,
            neededTool: YB
          } = (0, LB.g)("crosshairTarget"),
          {
            isTouchScreen: QB
          } = (0, iB.o)(["isTouchScreen"]),
          oB = (0, rB.s)(),
          jB = (0, vD.b)("alt-fire");
        (0, DB.useEffect)((() => {
          pB.gameBridge.send("setCrosshairInteractPrompt", !QB || oB ? "key" : "touch")
        }), [QB, oB]);
        const [PB, zB] = (0, DB.useReducer)((BB => BB + 1), 0);
        (0, yB.f)("customBindingsChanged", zB);
        var lB;
        if (null !== OB && (oB && null !== jB || !QB && null !== (0, HD.n)("alt-fire"))) return (0, MB.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, MB.jsx)(sD.c, {
            noaAction: "alt-fire"
          }), (0, MB.jsx)(JB.b, {
            text: null !== (lB = OB.label) && void 0 !== lB ? lB : xD
          })]
        });
        let qB = null;
        return null !== GB ? qB = GB : null !== BB && "" !== BB ? qB = BB : null !== YB && (qB = [{
          icon: YB,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), qB ? (0, MB.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, MB.jsx)(JB.b, {
            text: qB
          })
        }) : null
      }));
    var BQ = GB(2854);
    const OQ = (0, DB.memo)((function() {
      var BB;
      const {
        interactPrompt: OB
      } = (0, LB.g)("crosshairTarget"), {
        openInGameMenuName: GB,
        openEverythingMenuName: YB
      } = (0, iB.o)(["openInGameMenuName", "openEverythingMenuName"]), DB = (0, yB.i)("aimingOverlay", "none"), QB = (0, gB.k)(), oB = (0, BQ.d)();
      return null === OB || null !== GB || null !== YB || "sniper" === DB || QB || oB ? null : (0, MB.jsx)(GQ, {
        label: null !== (BB = OB.label) && void 0 !== BB ? BB : xD
      })
    }));

    function GQ(BB) {
      let {
        label: OB
      } = BB;
      const GB = nO(EB.b.Interact, !1);
      return (0, DB.useEffect)((() => (lB.o.tM(JO.n), () => {
        lB.o.tM(JO.n)
      })), []), (0, MB.jsx)("div", {
        ref: GB,
        className: "TouchInteractHit",
        children: (0, MB.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, MB.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, MB.jsx)(nB.b, {
              name: "hand-back-point-up"
            })
          }), (0, MB.jsx)(JB.b, {
            text: OB
          })]
        })
      })
    }
    var YQ = GB(70),
      DQ = GB(34702),
      QQ = GB(1834),
      oQ = GB(34713);
    const jQ = "ScreenshotMode";
    let yQ = [];
    const JQ = new Set;

    function MQ(BB) {
      yQ = BB;
      for (const OB of JQ) OB(BB)
    }
    const PQ = (0, DB.memo)((function() {
      const {
        screenshotMode: BB,
        isTouchScreen: OB,
        openEverythingMenuName: GB,
        openInGameMenuName: YB
      } = (0, iB.o)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), QB = null !== GB || null !== YB, oB = (0, LB.g)("localPlayerAlive");
      return (0, DB.useEffect)((() => {
        !BB || !QB && OB && oB || (0, DQ.h)()
      }), [BB, QB, OB, oB]), (0, DB.useEffect)((() => DQ.h), []), (0, DB.useEffect)((() => {
        if (BB) return document.documentElement.classList.add(jQ), (0, cB.m)(XB.y.ScreenshotMode, XB.y.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(jQ), (0, cB.m)(XB.y.ScreenshotMode, 0, "screenshotMode")
        }
      }), [BB]), BB ? (0, YQ.createPortal)((0, MB.jsx)(zQ, {}), document.body) : null
    }));

    function zQ() {
      const {
        t: BB
      } = (0, aB.H)(), [OB, GB] = (0, DB.useState)(!1), [YB, QB] = (0, DB.useState)(0), [oB, jB] = (0, DB.useState)(null), yB = function() {
        const [BB, OB] = (0, DB.useState)(yQ);
        return (0, DB.useEffect)((() => (JQ.add(OB), OB(yQ), () => {
          JQ.delete(OB)
        })), []), BB
      }(), JB = (0, DB.useRef)(), PB = (0, DB.useRef)(!1);
      (0, DB.useEffect)((() => () => {
        clearTimeout(JB.current)
      }), []);
      const zB = BB => {
          clearTimeout(JB.current), jB(BB), BB && (JB.current = setTimeout((() => {
            jB(null)
          }), 2e3))
        },
        lB = (OB, GB) => {
          switch (OB) {
            case "saved":
              zB(BB("screenshotMode:saved"));
              break;
            case "denied":
              zB(BB("screenshotMode:denied"));
              break;
            case "needsTap":
              yQ.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), zB(BB("screenshotMode:saveWaitingFirst"))) : MQ([...yQ, GB])
          }
        },
        pB = OB => {
          console.error("Screenshot mode: the photo wasn't saved", OB), zB(BB("screenshotMode:failed"))
        };
      return (0, MB.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, MB.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, MB.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), YB > 0 && (0, MB.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, YB), (0, MB.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": BB("screenshotMode:back"),
          onClick: DQ.h,
          children: (0, MB.jsx)(nB.b, {
            name: "arrow-left"
          })
        }), (0, MB.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": BB("screenshotMode:takePhoto"),
          "aria-busy": OB,
          onClick: () => {
            (async () => {
              if (!OB) {
                GB(!0), zB(null);
                try {
                  const BB = await (0, DQ.k)();
                  QB((BB => BB + 1)), lB(await (0, oQ.e)(BB), BB)
                } catch (BB) {
                  pB(BB)
                } finally {
                  GB(!1)
                }
              }
            })()
          },
          children: (0, MB.jsx)(nB.b, {
            name: "camera-alt"
          })
        }), null !== oB ? (0, MB.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: oB
        }) : yB.length > 0 && (0, MB.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (PB.current) return;
            PB.current = !0;
            const [BB] = yQ;
            MQ(yQ.slice(1));
            const OB = OB => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", OB), (0, QQ.c)(BB, BB.name), lB("saved", BB)
            };
            (0, oQ.i)(BB).then((GB => {
              "needsTap" === GB ? OB(GB) : lB(GB, BB)
            }), OB).catch(pB).finally((() => {
              PB.current = !1
            }))
          },
          children: [(0, MB.jsx)(nB.b, {
            name: "image"
          }), BB("screenshotMode:savePhoto"), yB.length > 1 && ` (${yB.length})`]
        })]
      })
    }
    var lQ = GB(5261),
      pQ = GB(5326);
    const qQ = (0, DB.forwardRef)((function(BB, OB) {
        let {
          text: GB,
          className: YB,
          children: DB
        } = BB;
        return GB.hasText ? (0, MB.jsx)("div", {
          ref: OB,
          className: oB()("HudTextPanel", YB, {
            NoBackground: !GB.showBackground
          }),
          children: null !== DB && void 0 !== DB ? DB : (0, MB.jsx)(JB.b, {
            text: GB.content
          })
        }) : null
      })),
      ZQ = (0, DB.memo)((function() {
        const BB = (0, AB.h)("middleTextTop"),
          [OB, GB] = (0, DB.useState)(null),
          YB = (0, CY.n)(OB);
        return BB.hasText ? (0, MB.jsx)("div", {
          className: oB()("MiddleTextTopContainer", {
            MiddleTextTopBelow: YB
          }),
          children: (0, MB.jsx)(qQ, {
            ref: GB,
            className: "MiddleTextTop",
            text: BB
          })
        }) : null
      })),
      NQ = (0, DB.memo)((function() {
        const BB = (0, AB.c)();
        return (0, MB.jsx)(MB.Fragment, {
          children: BB.map(((BB, OB) => (0, MB.jsx)(qQ, {
            className: "HeaderChip",
            text: BB
          }, OB)))
        })
      }));
    var RQ = GB(5023);
    const WQ = (0, DB.memo)((function() {
      const {
        t: BB
      } = (0, aB.H)(), [OB, GB] = (0, DB.useState)(!1), YB = (0, DB.useRef)(!1), QB = function(BB) {
        let {
          gameNameWithVariation: OB,
          lobbyName: GB
        } = BB;
        if ((0, iD.l)(OB)) return "customGame";
        if ((0, LD.L)(GB)) return "lobby";
        return null
      }((0, LB.g)("connectedGame"));
      if (!QB || OB) return null;
      const oB = RQ.b[QB];
      return (0, MB.jsx)(VB.g, {
        tooltipInner: (0, MB.jsx)("div", {
          children: BB(oB.reportButtonTooltip)
        }),
        children: (0, MB.jsx)("div", {
          children: (0, MB.jsx)(wG.V, {
            onClick: () => {
              YB.current || (YB.current = !0, (0, RQ.c)(oB).then((BB => {
                null !== BB && void 0 !== BB && BB.selectedPolicyId && (pB.gameBridge.send("reportLobbyOrGame", {
                  target: QB,
                  policy: BB.selectedPolicyId,
                  details: BB.Jy
                }), GB(!0))
              })).finally((() => {
                YB.current = !1
              })))
            }
          })
        })
      })
    }));
    var AQ = GB(9457),
      VQ = GB(37638),
      SQ = GB(37650),
      nQ = GB(37655),
      UQ = GB(37660),
      fQ = GB(37641);
    let kQ = !1;
    async function dQ(BB, OB) {
      var GB, YB;
      const {
        files: DB
      } = OB, QB = DB.replayKey();
      if (null === QB) return "none";
      if (kQ) throw new Error(fQ.e.saveBusy.text);
      const oB = null !== (GB = null === (YB = DB.saveRefusal) || void 0 === YB ? void 0 : YB.call(DB)) && void 0 !== GB ? GB : null;
      if (null !== oB) throw new Error(oB);
      kQ = !0;
      try {
        return await async function(BB, OB, GB) {
          const {
            files: YB
          } = OB, DB = () => YB.replayKey() === GB, QB = (BB, OB) => {
            DB() && YB.markSaved(BB, OB)
          };
          let oB = null;
          if (OB.pickerSupported()) {
            try {
              if (oB = await OB.chooseFile(BB ? null : YB.fileHandle()), null === oB) return "rB"
            } catch (yB) {
              OB.onFallback(yB)
            }
            if (!DB()) throw new Error(fQ.e.saveClosed.text)
          }
          const jB = await YB.encode();
          if (null === jB) {
            if (null !== oB) throw new Error(fQ.e.saveClosed.text);
            return "none"
          }
          if (null !== oB) try {
            return await OB.write(oB, jB), QB(oB), "written"
          } catch (yB) {
            OB.onFallback(yB)
          }
          return QB(null, OB.download(jB)), "downloaded"
        }(BB, OB, QB)
      } finally {
        kQ = !1
      }
    }
    var KQ = GB(37685),
      uQ = GB(4956);
    const mQ = [1, 2, 4, 8, 16, 32, 64];

    function IQ(BB, OB) {
      return Math.max(0, Math.min(BB, OB))
    }

    function FQ(BB, OB, GB) {
      return GB <= OB ? 0 : (BB - OB) / (GB - OB) * 100
    }

    function iQ(BB, OB, GB) {
      const YB = GB - OB;
      return Math.round(OB + BB / 100 * YB)
    }

    function LQ(BB, OB) {
      const GB = Math.floor(BB / OB / 60),
        YB = Math.floor(BB / OB % 60),
        DB = BB % OB;
      return `${GB.toString().padStart(2,"0")}:${YB.toString().padStart(2,"0")}:${DB.toString().padStart(2,"0")}`
    }

    function gQ(BB) {
      return Number.isInteger(BB) || mQ.includes(BB) ? `${Math.round(BB)}\xd7` : `${BB.toFixed(1)}\xd7`
    }

    function rQ(BB, OB) {
      const GB = mQ.indexOf(BB);
      if (-1 !== GB) return "in" === OB ? mQ[Math.min(GB + 1, mQ.length - 1)] : mQ[Math.max(GB - 1, 0)];
      if ("in" === OB) {
        for (const OB of mQ)
          if (OB >= BB) return OB;
        return BB
      }
      for (let YB = mQ.length - 1; YB >= 0; YB--)
        if (mQ[YB] <= BB) return mQ[YB];
      return mQ[0]
    }

    function XQ(BB, OB) {
      const GB = OB.getBoundingClientRect();
      if (GB.width <= 0) return 0;
      const YB = (BB - GB.left) / GB.width * 100;
      return Math.max(0, Math.min(100, YB))
    }

    function wQ(BB, OB) {
      return OB <= 0 ? 0 : BB / OB * 100
    }

    function EQ(BB, OB, GB) {
      const YB = [];
      let DB = Math.ceil(BB / GB) * GB;
      for (; DB <= OB;) YB.push(DB), DB += GB;
      return YB
    }
    var cQ = GB(37687);
    const hQ = [{
        label: "Linear",
        easing: cQ.n
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: cQ.h
      }, {
        label: "Ease Out",
        easing: cQ.j
      }, {
        label: "Ease In Out",
        easing: cQ.e
      }],
      aQ = 200,
      eQ = 150;

    function TQ(BB) {
      const OB = BB => Number(BB.toFixed(3)).toString();
      return `cubic-bezier(${OB(BB[0])}, ${OB(BB[1])}, ${OB(BB[2])}, ${OB(BB[3])})`
    }

    function bQ(BB, OB) {
      return {
        cx: 25 + BB * eQ,
        cy: 25 + (1 - OB) * eQ
      }
    }

    function CQ(BB, OB, GB) {
      const YB = BB - GB.left,
        DB = OB - GB.top;
      return {
        x: HG.b.clamp((YB - 25) / eQ, 0, 1),
        y: HG.b.clamp(1 - (DB - 25) / eQ, -1, 2)
      }
    }

    function HQ(BB, OB, GB, YB, DB) {
      return {
        x: (0, cQ.u)(BB, GB, DB),
        y: (0, cQ.u)(OB, YB, DB)
      }
    }
    const vQ = (0, DB.memo)((function(BB) {
      let {
        value: OB,
        onChange: GB
      } = BB;
      const YB = (0, DB.useRef)(null),
        QB = (0, DB.useRef)(null),
        [oB, jB] = (0, DB.useState)(null),
        yB = (0, DB.useCallback)((() => {
          const BB = YB.current;
          if (!BB) return;
          const GB = BB.getContext("2d");
          if (!GB) return;
          const DB = window.devicePixelRatio || 1;
          BB.width = aQ * DB, BB.height = aQ * DB, GB.setTransform(DB, 0, 0, DB, 0, 0), GB.clearRect(0, 0, aQ, aQ), GB.fillStyle = "rgba(38, 52, 93, 0.85)", GB.fillRect(0, 0, aQ, aQ), GB.beginPath();
          const QB = bQ(0, 0),
            jB = bQ(1, 1);
          GB.moveTo(QB.cx, QB.cy), GB.lineTo(jB.cx, jB.cy), GB.strokeStyle = "rgba(164, 164, 164, 0.35)", GB.setLineDash([3, 3]), GB.stroke(), GB.setLineDash([]);
          const [yB, JB, MB, PB] = OB, zB = bQ(yB, JB), lB = bQ(MB, PB);
          GB.strokeStyle = "rgba(252, 211, 115, 0.55)", GB.lineWidth = 1.5, GB.beginPath(), GB.moveTo(QB.cx, QB.cy), GB.lineTo(zB.cx, zB.cy), GB.moveTo(jB.cx, jB.cy), GB.lineTo(lB.cx, lB.cy), GB.stroke(), GB.strokeStyle = "#fcd373", GB.lineWidth = 2, GB.beginPath();
          for (let OB = 0; OB <= 50; OB++) {
            const BB = HQ(yB, JB, MB, PB, OB / 50),
              YB = bQ(BB.x, BB.y);
            0 === OB ? GB.moveTo(YB.cx, YB.cy) : GB.lineTo(YB.cx, YB.cy)
          }
          GB.stroke();
          const pB = (BB, OB, YB) => {
            GB.beginPath(), GB.arc(BB, OB, YB ? 6 : 5, 0, 2 * Math.PI), GB.fillStyle = YB ? "#ffb914" : "#fcd373", GB.fill(), GB.strokeStyle = "#1a1f2e", GB.lineWidth = 1.5, GB.stroke()
          };
          pB(zB.cx, zB.cy, "p1" === oB), pB(lB.cx, lB.cy, "p2" === oB)
        }), [oB, OB]);
      (0, DB.useEffect)((() => {
        yB()
      }), [yB]);
      const JB = (0, DB.useCallback)(((BB, DB) => {
          const oB = YB.current,
            jB = QB.current;
          if (!oB || !jB) return;
          const yB = oB.getBoundingClientRect(),
            {
              x: JB,
              y: MB
            } = CQ(BB, DB, yB);
          GB("p1" === jB ? [JB, MB, OB[2], OB[3]] : [OB[0], OB[1], JB, MB])
        }), [GB, OB]),
        PB = (0, DB.useCallback)((BB => {
          const GB = YB.current;
          if (!GB) return;
          const DB = GB.getBoundingClientRect();
          let {
            x: oB,
            y: yB
          } = CQ(BB.clientX, BB.clientY, DB);
          oB = HG.b.clamp(oB, 0, 1), yB = HG.b.clamp(yB, 0, 1);
          const [MB, PB, zB, lB] = OB.map((BB => HG.b.clamp(BB, 0, 1))), pB = Math.hypot(oB - MB, yB - PB), qB = Math.hypot(oB - zB, yB - lB), ZB = pB <= qB ? "p1" : "p2";
          ("p1" === ZB ? pB : qB) > .12 || (QB.current = ZB, jB(ZB), GB.setPointerCapture(BB.pointerId), JB(BB.clientX, BB.clientY))
        }), [JB, OB]),
        zB = (0, DB.useCallback)((BB => {
          QB.current && JB(BB.clientX, BB.clientY)
        }), [JB]),
        lB = (0, DB.useCallback)((BB => {
          QB.current = null, jB(null), BB.currentTarget.hasPointerCapture(BB.pointerId) && BB.currentTarget.releasePointerCapture(BB.pointerId)
        }), []);
      return (0, MB.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, MB.jsx)("canvas", {
          ref: YB,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: aQ,
            height: aQ
          },
          onPointerDown: PB,
          onPointerMove: zB,
          onPointerUp: lB,
          onPointerCancel: lB
        }), (0, MB.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: TQ(OB)
        })]
      })
    }));
    var sQ = GB(1739),
      xQ = GB(1730);
    const tQ = 12;

    function Bo(BB) {
      return {
        left: BB.left + BB.width / 2,
        top: BB.top - 8
      }
    }

    function Oo(BB, OB) {
      const [GB, YB] = (0, DB.useState)(null);
      return (0, DB.useLayoutEffect)((() => {
        const GB = BB.current;
        if (!GB) return;
        const {
          width: DB,
          height: QB
        } = GB.getBoundingClientRect();
        YB(function(BB, OB, GB) {
          const YB = window.innerWidth,
            DB = window.innerHeight,
            QB = OB / 2;
          let oB = BB.left + BB.width / 2;
          oB = Math.max(tQ + QB, Math.min(oB, YB - tQ - QB));
          const jB = BB.top - 8 - tQ,
            yB = DB - BB.bottom - 8 - tQ,
            JB = jB < GB && yB >= jB;
          let MB;
          JB ? (MB = BB.bottom + 8, MB + GB > DB - tQ && (MB = DB - tQ - GB), MB = Math.max(tQ, MB)) : (MB = BB.top - 8, MB - GB < tQ && (MB = tQ + GB));
          return {
            left: oB,
            top: MB,
            placeBelow: JB
          }
        }(OB, DB, QB))
      }), [OB, BB]), GB
    }

    function Go(BB, OB, GB) {
      (0, DB.useEffect)((() => (0, xQ.c)("pointerdown", (YB => {
        var DB, QB;
        const oB = YB.target;
        oB instanceof Node && (null !== (DB = BB.current) && void 0 !== DB && DB.contains(oB) || null !== GB && void 0 !== GB && null !== (QB = GB.current) && void 0 !== QB && QB.contains(oB) || (0, sQ.k)(oB) || OB())
      }))), [GB, OB, BB])
    }

    function Yo(BB) {
      let {
        label: OB,
        value: GB,
        onChange: YB
      } = BB;
      return (0, MB.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, MB.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: OB
        }), (0, MB.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((BB, OB) => (0, MB.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, MB.jsx)("span", {
              children: BB
            }), (0, MB.jsx)("input", {
              type: "number",
              step: "any",
              value: GB[OB],
              onChange: BB => {
                const DB = Number.parseFloat(BB.target.value);
                if (Number.isNaN(DB)) return;
                const QB = [GB[0], GB[1], GB[2]];
                QB[OB] = DB, YB(QB)
              }
            })]
          }, BB)))
        })]
      })
    }
    const Do = (0, DB.memo)((function(BB) {
        var OB, GB, YB;
        let {
          keyframe: QB,
          anchor: jB,
          hasOutgoingSegment: yB,
          onClose: JB,
          onApply: PB,
          onDelete: zB,
          onUseCurrentCamera: lB
        } = BB;
        const pB = (0, DB.useRef)(null),
          qB = Oo(pB, jB.rect),
          [ZB, NB] = (0, DB.useState)((() => [QB.position[0], QB.position[1], QB.position[2]])),
          [RB, WB] = (0, DB.useState)((() => [QB.direction[0], QB.direction[1], QB.direction[2]])),
          [AB, VB] = (0, DB.useState)((() => QB.easing));
        (0, DB.useEffect)((() => {
          NB([QB.position[0], QB.position[1], QB.position[2]]), WB([QB.direction[0], QB.direction[1], QB.direction[2]]), VB(QB.easing)
        }), [QB]), Go(pB, JB);
        const SB = (0, DB.useCallback)((() => {
            PB({
              kP: QB.kP,
              position: ZB,
              direction: RB,
              easing: AB
            }), JB()
          }), [RB, AB, QB.kP, PB, JB, ZB]),
          nB = (0, DB.useCallback)((() => {
            zB(QB.kP), JB()
          }), [QB.kP, zB, JB]),
          UB = (0, DB.useCallback)((() => {
            const BB = lB();
            BB && (NB([BB.position[0], BB.position[1], BB.position[2]]), WB([BB.direction[0], BB.direction[1], BB.direction[2]]))
          }), [lB]),
          fB = Bo(jB.rect);
        return (0, MB.jsxs)("div", {
          ref: pB,
          className: oB()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (OB = null === qB || void 0 === qB ? void 0 : qB.placeBelow) && void 0 !== OB && OB,
            Positioned: null !== qB
          }),
          style: {
            left: `${null!==(GB=null===qB||void 0===qB?void 0:qB.left)&&void 0!==GB?GB:fB.left}px`,
            top: `${null!==(YB=null===qB||void 0===qB?void 0:qB.top)&&void 0!==YB?YB:fB.top}px`
          },
          onPointerDown: BB => {
            BB.stopPropagation()
          },
          children: [(0, MB.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, MB.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, MB.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", jB.kP]
            })]
          }), (0, MB.jsx)(Yo, {
            label: "Position",
            value: ZB,
            onChange: NB
          }), (0, MB.jsx)(Yo, {
            label: "Direction",
            value: RB,
            onChange: WB
          }), yB && (0, MB.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, MB.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, MB.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: hQ.map((BB => {
                const OB = (GB = AB, YB = BB.easing, GB[0] === YB[0] && GB[1] === YB[1] && GB[2] === YB[2] && GB[3] === YB[3]);
                var GB, YB;
                return (0, MB.jsx)(wG.Z, {
                  className: oB()("ReplayKeyframePopoverPreset", {
                    Active: OB
                  }),
                  onClick: () => {
                    VB(BB.easing)
                  },
                  children: BB.label
                }, BB.label)
              }))
            }), (0, MB.jsx)(vQ, {
              value: AB,
              onChange: VB
            })]
          }), (0, MB.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, MB.jsx)(wG.f, {
              className: "ReplayViewerCompactButton",
              onClick: UB,
              children: "Use current view"
            }), (0, MB.jsx)(wG.q, {
              className: "ReplayViewerCompactButton",
              onClick: SB,
              children: "Apply"
            }), (0, MB.jsx)(wG.Q, {
              className: "ReplayViewerCompactButton",
              onClick: nB,
              children: "Delete"
            })]
          })]
        })
      })),
      Qo = (0, DB.memo)((function(BB) {
        var OB, GB, YB;
        let {
          anchor: QB,
          hasPlaybackMark: jB,
          onClose: yB,
          onMark: JB,
          onZoom: PB,
          onCrop: zB,
          onDeleteKeyframes: lB,
          onClearMark: pB
        } = BB;
        const qB = (0, DB.useRef)(null),
          ZB = Oo(qB, QB.rect),
          NB = Bo(QB.rect),
          RB = {
            startTick: QB.startTick,
            endTick: QB.endTick
          },
          WB = QB.endTick > QB.startTick;
        return Go(qB, yB), (0, MB.jsx)("div", {
          ref: qB,
          className: oB()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (OB = null === ZB || void 0 === ZB ? void 0 : ZB.placeBelow) && void 0 !== OB && OB,
            Positioned: null !== ZB
          }),
          style: {
            left: `${null!==(GB=null===ZB||void 0===ZB?void 0:ZB.left)&&void 0!==GB?GB:NB.left}px`,
            top: `${null!==(YB=null===ZB||void 0===ZB?void 0:ZB.top)&&void 0!==YB?YB:NB.top}px`
          },
          onPointerDown: BB => {
            BB.stopPropagation()
          },
          children: (0, MB.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, MB.jsx)(wG.q, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                JB(RB)
              },
              disabled: !WB,
              children: (0, MB.jsx)("span", {
                children: " Play range "
              })
            }), (0, MB.jsx)(wG.f, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                PB(RB)
              },
              children: (0, MB.jsx)("span", {
                children: " Zoom "
              })
            }), (0, MB.jsx)(wG.Z, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                zB(RB)
              },
              disabled: !WB,
              children: (0, MB.jsx)("span", {
                children: " Crop "
              })
            }), (0, MB.jsx)(wG.Z, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                lB(RB)
              },
              children: (0, MB.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), jB && (0, MB.jsx)(wG.Z, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                pB()
              },
              children: (0, MB.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      oo = (0, DB.memo)((function(BB) {
        var OB, GB;
        let {
          maxTick: YB,
          displayTick: QB,
          pI: jB,
          cameraKeyframes: yB,
          playbackMark: JB,
          onSeek: PB,
          onPause: zB,
          onScrubTickChange: lB,
          onMoveCameraKeyframe: pB,
          onUpdateCameraKeyframe: qB,
          onDeleteCameraKeyframe: ZB,
          onUseCurrentCamera: NB,
          onMarkRange: RB,
          onCropRange: WB,
          onDeleteKeyframesInRange: AB,
          onClearMark: VB,
          zoomLevel: SB,
          onZoomLevelChange: nB
        } = BB;
        const UB = (0, DB.useRef)(null),
          fB = (0, DB.useRef)(null),
          kB = (0, DB.useRef)(!1),
          dB = (0, DB.useRef)(!1),
          KB = (0, DB.useRef)(SB),
          uB = (0, DB.useRef)(null),
          mB = (0, DB.useRef)(null),
          IB = (0, DB.useRef)(null),
          FB = (0, DB.useRef)(null),
          [iB, LB] = (0, DB.useState)(null),
          [gB, rB] = (0, DB.useState)(QB),
          [XB, wB] = (0, DB.useState)(null),
          [EB, cB] = (0, DB.useState)(null),
          [hB, aB] = (0, DB.useState)(null),
          [eB, TB] = (0, DB.useState)(null),
          bB = (0, DB.useMemo)((() => yB.map((BB => BB.kP))), [yB]),
          CB = null !== iB && void 0 !== iB ? iB : QB,
          {
            viewStart: HB,
            viewEnd: vB
          } = (0, DB.useMemo)((() => function(BB) {
            const OB = BB.maxTick + 1,
              GB = Math.max(1, Math.ceil(OB / BB.zoomLevel)),
              YB = Math.floor(GB / 2);
            let DB = BB.centerTick - YB;
            return DB = Math.max(0, Math.min(DB, BB.maxTick - GB + 1)), {
              viewStart: DB,
              viewEnd: Math.min(BB.maxTick, DB + GB - 1)
            }
          }({
            maxTick: YB,
            zoomLevel: SB,
            centerTick: gB
          })), [YB, SB, gB]);
        (0, DB.useEffect)((() => {
          if (null !== iB || null !== mB.current || null !== IB.current || null !== FB.current) return;
          if (kB.current) return void(kB.current = !1);
          if (dB.current) return void(dB.current = !1);
          const BB = KB.current !== SB;
          KB.current = SB, BB && rB(QB)
        }), [SB, QB, iB]);
        const sB = (0, DB.useCallback)((BB => {
            let OB = IQ(BB, YB);
            return JB && (OB = Math.max(JB.inTick, Math.min(OB, JB.outTick))), OB
          }), [YB, JB]),
          xB = (0, DB.useCallback)(((BB, OB) => {
            const GB = sB(BB);
            PB(GB), OB && rB(GB)
          }), [sB, PB]),
          tB = (0, DB.useCallback)(((BB, OB) => {
            const GB = sB(BB);
            LB(GB), lB(GB), xB(GB, OB)
          }), [sB, xB, lB]),
          BO = (0, DB.useCallback)((() => {
            LB((BB => (null !== BB && rB(BB), null))), lB(null)
          }), [lB]),
          OO = (0, DB.useCallback)((() => {
            aB(null), TB(null)
          }), []),
          GO = (0, DB.useCallback)((BB => {
            const OB = UB.current;
            if (!OB) return 0;
            return IQ(iQ(XQ(BB, OB), HB, vB), YB)
          }), [YB, vB, HB]),
          YO = (0, DB.useCallback)((BB => {
            const OB = fB.current;
            if (!OB) return 0;
            return IQ(iQ(XQ(BB, OB), 0, YB), YB)
          }), [YB]),
          DO = (0, DB.useMemo)((() => {
            if (!XB) return [...bB];
            const BB = bB.filter((BB => BB !== XB.fromTick));
            return BB.push(XB.previewTick), BB.sort(((BB, OB) => BB - OB)), BB
          }), [bB, XB]),
          QO = (0, DB.useMemo)((() => {
            var BB;
            return EB && null !== (BB = yB.find((BB => BB.kP === EB.kP))) && void 0 !== BB ? BB : null
          }), [yB, EB]),
          oO = (0, DB.useMemo)((() => !!QO && yB.some((BB => BB.kP > QO.kP))), [yB, QO]);
        (0, DB.useEffect)((() => {
          EB && !QO && cB(null)
        }), [EB, QO]), (0, DB.useEffect)((() => {
          if (!eB) return () => {};
          const BB = BB => {
            "Escape" === BB.key && OO()
          };
          return window.addEventListener("keydown", BB), () => {
            window.removeEventListener("keydown", BB)
          }
        }), [OO, eB]);
        const jO = (0, DB.useCallback)(((BB, OB) => {
            OO(), zB(), PB(BB, {
              ignorePlaybackMark: !0
            }), cB({
              kP: BB,
              rect: OB.getBoundingClientRect()
            })
          }), [OO, zB, PB]),
          yO = (0, DB.useCallback)(((BB, OB) => GB => {
            0 === GB.button && (GB.stopPropagation(), cB(null), OO(), zB(), uB.current = {
              fromTick: BB,
              startX: GB.clientX,
              startY: GB.clientY,
              didDrag: !1,
              track: OB
            }, wB({
              fromTick: BB,
              previewTick: BB,
              track: OB
            }), GB.currentTarget.setPointerCapture(GB.pointerId))
          }), [OO, zB]),
          JO = (0, DB.useCallback)((BB => {
            if (!XB) return;
            BB.stopPropagation();
            const OB = uB.current;
            if (OB && !OB.didDrag) {
              const GB = BB.clientX - OB.startX,
                YB = BB.clientY - OB.startY;
              Math.hypot(GB, YB) > 5 && (OB.didDrag = !0)
            }
            const GB = "detail" === XB.track ? GO(BB.clientX) : YO(BB.clientX);
            GB !== XB.previewTick && wB({
              ...XB,
              previewTick: GB
            })
          }), [XB, GO, YO]),
          MO = (0, DB.useCallback)((BB => {
            if (!XB) return;
            BB.stopPropagation();
            const OB = uB.current,
              GB = "detail" === XB.track ? GO(BB.clientX) : YO(BB.clientX);
            OB && !OB.didDrag ? jO(OB.fromTick, BB.currentTarget) : GB !== XB.fromTick && pB(XB.fromTick, GB), wB(null), uB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId)
          }), [XB, pB, jO, GO, YO]),
          PO = (0, DB.useCallback)((BB => {
            if (0 !== BB.button) return;
            cB(null), zB();
            const OB = GO(BB.clientX);
            mB.current = {
              pointerId: BB.pointerId,
              startX: BB.clientX,
              startY: BB.clientY,
              startTick: OB,
              currentTick: OB,
              didSelect: !1
            }, aB(null), TB(null), BB.currentTarget.setPointerCapture(BB.pointerId)
          }), [zB, GO]),
          zO = (0, DB.useCallback)((BB => {
            const OB = mB.current;
            if (!OB || OB.pointerId !== BB.pointerId) return;
            const GB = GO(BB.clientX);
            if (OB.currentTick = GB, !OB.didSelect) {
              const GB = BB.clientX - OB.startX,
                YB = BB.clientY - OB.startY;
              if (Math.hypot(GB, YB) <= 5) return;
              OB.didSelect = !0
            }
            const YB = Math.min(OB.startTick, GB),
              DB = Math.max(OB.startTick, GB);
            aB({
              startTick: YB,
              endTick: DB
            })
          }), [GO]),
          lO = (0, DB.useCallback)((BB => {
            const OB = mB.current;
            if (!OB || OB.pointerId !== BB.pointerId) return;
            if (mB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId), !OB.didSelect) return OO(), void xB(OB.startTick, !0);
            const GB = GO(BB.clientX),
              YB = Math.min(OB.startTick, GB),
              DB = Math.max(OB.startTick, GB),
              QB = {
                startTick: YB,
                endTick: DB
              };
            aB(QB);
            const oB = UB.current;
            if (!oB) return;
            const jB = oB.getBoundingClientRect(),
              yB = FQ(YB, HB, vB) / 100,
              JB = FQ(DB, HB, vB) / 100,
              MB = jB.left + yB * jB.width,
              PB = jB.left + JB * jB.width;
            TB({
              ...QB,
              rect: new DOMRect(MB, jB.top, Math.max(PB - MB, 1), jB.height)
            })
          }), [OO, xB, GO, vB, HB]),
          pO = (0, DB.useCallback)((BB => OB => {
            if (0 !== OB.button) return;
            OB.stopPropagation(), cB(null), OO(), zB(), IB.current = {
              pointerId: OB.pointerId,
              track: BB
            }, OB.currentTarget.setPointerCapture(OB.pointerId);
            const GB = "detail" === BB ? GO(OB.clientX) : YO(OB.clientX);
            tB(GB, !1)
          }), [OO, zB, tB, GO, YO]),
          qO = (0, DB.useCallback)((BB => {
            const OB = IB.current;
            if (!OB || OB.pointerId !== BB.pointerId) return;
            BB.stopPropagation();
            const GB = "detail" === OB.track ? GO(BB.clientX) : YO(BB.clientX);
            tB(GB, !1)
          }), [tB, GO, YO]),
          ZO = (0, DB.useCallback)((BB => {
            const OB = IB.current;
            OB && OB.pointerId === BB.pointerId && (BB.stopPropagation(), IB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId), BO())
          }), [BO]),
          NO = (0, DB.useCallback)((BB => {
            0 === BB.button && (OO(), zB(), FB.current = {
              pointerId: BB.pointerId
            }, BB.currentTarget.setPointerCapture(BB.pointerId), tB(YO(BB.clientX), !0))
          }), [OO, zB, tB, YO]),
          RO = (0, DB.useCallback)((BB => {
            const OB = FB.current;
            OB && OB.pointerId === BB.pointerId && tB(YO(BB.clientX), !0)
          }), [tB, YO]),
          WO = (0, DB.useCallback)((BB => {
            const OB = FB.current;
            OB && OB.pointerId === BB.pointerId && (FB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId), BO())
          }), [BO]),
          AO = (0, DB.useCallback)((BB => {
            const OB = Math.max(1, BB.endTick - BB.startTick + 1),
              GB = YB + 1,
              DB = GB / OB,
              QB = Math.max(1, Math.ceil(GB / DB)),
              oB = BB.startTick + Math.floor((QB - 1) / 2);
            dB.current = !0, KB.current = DB, rB(IQ(oB, YB)), nB(DB), OO()
          }), [OO, YB, nB]),
          VO = (0, DB.useCallback)((BB => {
            RB(BB), OO()
          }), [OO, RB]),
          SO = (0, DB.useCallback)((BB => {
            WB(BB), OO()
          }), [OO, WB]),
          nO = (0, DB.useCallback)((BB => {
            AB(BB), OO()
          }), [OO, AB]),
          UO = (0, DB.useCallback)((() => {
            VB(), OO()
          }), [OO, VB]);
        (0, DB.useEffect)((() => {
          const BB = UB.current;
          if (!BB) return () => {};
          const OB = OB => {
            OB.preventDefault();
            const GB = IQ(iQ(XQ(OB.clientX, BB), HB, vB), YB),
              DB = OB.deltaY < 0 ? "in" : "out",
              QB = rQ(SB, DB);
            QB !== SB && (kB.current = !0, rB(GB), nB(QB))
          };
          return BB.addEventListener("wheel", OB, {
            passive: !1
          }), () => {
            BB.removeEventListener("wheel", OB)
          }
        }), [YB, nB, vB, HB, SB]);
        const fO = FQ(CB, HB, vB),
          kO = wQ(CB, YB),
          dO = wQ(HB, YB),
          KO = YB > 0 ? wQ(vB, YB) : 100,
          uO = null !== JB,
          mO = null !== (OB = null === JB || void 0 === JB ? void 0 : JB.inTick) && void 0 !== OB ? OB : 0,
          IO = null !== (GB = null === JB || void 0 === JB ? void 0 : JB.outTick) && void 0 !== GB ? GB : YB,
          FO = wQ(mO, YB),
          iO = Math.max(wQ(IO, YB) - FO, 0),
          LO = FQ(Math.max(mO, HB), HB, vB),
          gO = FQ(Math.min(IO, vB), HB, vB),
          rO = Math.max(gO - LO, 0),
          XO = uO && IO >= HB && mO <= vB,
          wO = FQ(mO, HB, vB),
          EO = FQ(IO, HB, vB),
          cO = uO && mO >= HB && mO <= vB,
          hO = uO && IO >= HB && IO <= vB,
          aO = wQ(mO, YB),
          eO = wQ(IO, YB),
          TO = null !== hB && void 0 !== hB ? hB : eB ? {
            startTick: eB.startTick,
            endTick: eB.endTick
          } : null,
          bO = TO ? FQ(Math.max(TO.startTick, HB), HB, vB) : 0,
          CO = TO ? FQ(Math.min(TO.endTick, vB), HB, vB) : 0,
          HO = Math.max(CO - bO, 0),
          vO = null !== TO && TO.endTick >= HB && TO.startTick <= vB,
          sO = (0, DB.useMemo)((() => EQ(0, YB, jB)), [YB, jB]),
          xO = (0, DB.useMemo)((() => EQ(HB, vB, jB)), [HB, vB, jB]),
          tO = (0, DB.useMemo)((() => DO.filter((BB => BB >= HB && BB <= vB))), [DO, vB, HB]),
          BG = (0, DB.useCallback)(((BB, OB, GB) => {
            const DB = "detail" === OB ? FQ(BB, HB, vB) : wQ(BB, YB),
              QB = null !== XB && GB === XB.fromTick,
              jB = null !== EB && EB.kP === GB;
            return (0, MB.jsx)("button", {
              type: "button",
              className: oB()("ReplayTimelineCameraKeyframeMarker", "detail" === OB ? "Detail" : "Overview", {
                Dragging: QB,
                Selected: jB
              }),
              style: {
                left: `${DB}%`
              },
              onPointerDown: yO(GB, OB),
              onPointerMove: JO,
              onPointerUp: MO,
              onPointerCancel: MO,
              "aria-label": `Camera keyframe at tick ${GB}`
            }, `cam-${OB}-${GB}`)
          }), [yO, EB, MO, XB, YB, JO, vB, HB]),
          OG = (0, DB.useCallback)((BB => XB && BB === XB.previewTick ? XB.fromTick : BB), [XB]);
        return YB <= 0 ? null : (0, MB.jsxs)("div", {
          className: "ReplayTimeline",
          children: [EB && QO && (0, YQ.createPortal)((0, MB.jsx)(Do, {
            keyframe: QO,
            anchor: EB,
            hasOutgoingSegment: oO,
            onClose: () => {
              cB(null)
            },
            onApply: qB,
            onDelete: ZB,
            onUseCurrentCamera: NB
          }), document.body), eB && (0, YQ.createPortal)((0, MB.jsx)(Qo, {
            anchor: eB,
            hasPlaybackMark: uO,
            onClose: OO,
            onMark: VO,
            onZoom: AO,
            onCrop: SO,
            onDeleteKeyframes: nO,
            onClearMark: UO
          }), document.body), (0, MB.jsxs)("div", {
            className: oB()("ReplayTimelineOverviewSection", {
              Hidden: SB <= 1
            }),
            children: [(0, MB.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, MB.jsxs)("div", {
              ref: fB,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: NO,
              onPointerMove: RO,
              onPointerUp: WO,
              onPointerCancel: WO,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": YB,
              "aria-valuenow": CB,
              tabIndex: 0,
              children: [sO.map((BB => {
                const OB = wQ(BB, YB);
                return (0, MB.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${OB}%`
                  }
                }, BB)
              })), uO && (0, MB.jsxs)(MB.Fragment, {
                children: [(0, MB.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${FO}%`,
                    width: `${iO}%`
                  }
                }), (0, MB.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${aO}%`
                  },
                  "aria-hidden": !0
                }), (0, MB.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${eO}%`
                  },
                  "aria-hidden": !0
                })]
              }), DO.map((BB => BG(BB, "overview", OG(BB)))), (0, MB.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${dO}%`,
                  width: `${Math.max(KO-dO,.5)}%`
                }
              }), (0, MB.jsx)("button", {
                type: "button",
                className: oB()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== iB
                }),
                style: {
                  left: `${kO}%`
                },
                onPointerDown: pO("overview"),
                onPointerMove: qO,
                onPointerUp: ZO,
                onPointerCancel: ZO,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, MB.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, MB.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, MB.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, MB.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [LQ(HB, jB), " \u2013 ", LQ(vB, jB), SB > 1 && (0, MB.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: gQ(SB)
                })]
              })]
            }), (0, MB.jsxs)("div", {
              ref: UB,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: PO,
              onPointerMove: zO,
              onPointerUp: lO,
              onPointerCancel: lO,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": HB,
              "aria-valuemax": vB,
              "aria-valuenow": CB,
              tabIndex: 0,
              children: [xO.map((BB => {
                const OB = FQ(BB, HB, vB);
                return (0, MB.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${OB}%`
                  }
                }, BB)
              })), XO && (0, MB.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${LO}%`,
                  width: `${rO}%`
                }
              }), cO && (0, MB.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${wO}%`
                },
                "aria-label": `Play range start at tick ${mO}`
              }), hO && (0, MB.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${EO}%`
                },
                "aria-label": `Play range end at tick ${IO}`
              }), vO && TO && (0, MB.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${bO}%`,
                  width: `${HO}%`
                }
              }), tO.map((BB => BG(BB, "detail", OG(BB)))), (0, MB.jsx)("button", {
                type: "button",
                className: oB()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== iB
                }),
                style: {
                  left: `${fO}%`
                },
                onPointerDown: pO("detail"),
                onPointerMove: qO,
                onPointerUp: ZO,
                onPointerCancel: ZO,
                "aria-label": "Scrub playhead"
              })]
            }), (0, MB.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, MB.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      jo = (0, DB.memo)((function(BB) {
        let {
          enabled: OB
        } = BB;
        const GB = (0, DB.useRef)(!1),
          YB = (0, DB.useRef)(null),
          [QB, jB] = (0, DB.useState)(!1),
          yB = (0, DB.useCallback)((BB => {
            OB && 0 === BB.button && (GB.current = !0, jB(!0), YB.current = {
              x: BB.clientX,
              y: BB.clientY
            }, BB.currentTarget.setPointerCapture(BB.pointerId))
          }), [OB]),
          JB = (0, DB.useCallback)((BB => {
            if (!OB || !GB.current || !YB.current) return;
            const DB = BB.clientX - YB.current.x,
              QB = BB.clientY - YB.current.y;
            YB.current = {
              x: BB.clientX,
              y: BB.clientY
            }, pB.gameBridge.send("dragReplayCamera", {
              dx: DB,
              dy: QB
            })
          }), [OB]),
          PB = (0, DB.useCallback)((BB => {
            GB.current && (GB.current = !1, jB(!1), YB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId))
          }), []);
        return OB ? (0, MB.jsx)("div", {
          className: oB()("ReplayViewerCameraDragSurface", {
            Dragging: QB
          }),
          onPointerDown: yB,
          onPointerMove: JB,
          onPointerUp: PB,
          onPointerCancel: PB,
          "aria-hidden": !0
        }) : null
      }));
    var yo = GB(37692),
      Jo = GB(37694);
    const Mo = (0, DB.memo)((function(BB) {
        var OB, GB, YB;
        let {
          anchorRect: QB,
          anchorRef: jB,
          onClose: JB
        } = BB;
        const PB = (0, DB.useRef)(null),
          zB = Oo(PB, QB),
          [lB, pB] = (0, DB.useState)(Jo.c),
          qB = (0, DB.useMemo)((() => Object.values(lB).every((BB => BB))), [lB]);
        (0, yB.f)("replayViewer|uiVisibilityChanged", (() => {
          pB((0, Jo.c)())
        })), Go(PB, JB, jB);
        const ZB = (0, DB.useCallback)(((BB, OB) => {
            (0, Jo.i)(BB, OB), pB((0, Jo.c)())
          }), []),
          NB = (0, DB.useCallback)((BB => {
            for (const {
                group: OB
              }
              of yo.c)(0, Jo.i)(OB, BB);
            pB((0, Jo.c)())
          }), []),
          RB = Bo(QB);
        return (0, YQ.createPortal)((0, MB.jsxs)("div", {
          ref: PB,
          className: oB()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (OB = null === zB || void 0 === zB ? void 0 : zB.placeBelow) && void 0 !== OB && OB,
            Positioned: null !== zB
          }),
          style: {
            left: `${null!==(GB=null===zB||void 0===zB?void 0:zB.left)&&void 0!==GB?GB:RB.left}px`,
            top: `${null!==(YB=null===zB||void 0===zB?void 0:zB.top)&&void 0!==YB?YB:RB.top}px`
          },
          onPointerDown: BB => {
            BB.stopPropagation()
          },
          children: [(0, MB.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, MB.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, MB.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, MB.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, MB.jsx)("input", {
                type: "checkbox",
                checked: qB,
                onChange: BB => {
                  NB(BB.target.checked)
                }
              }), (0, MB.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), yo.c.map((BB => {
              let {
                group: OB,
                label: GB
              } = BB;
              return (0, MB.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, MB.jsx)("input", {
                  type: "checkbox",
                  checked: lB[OB],
                  onChange: BB => {
                    ZB(OB, BB.target.checked)
                  }
                }), (0, MB.jsx)("span", {
                  children: GB
                })]
              }, OB)
            }))]
          })]
        }), document.body)
      })),
      Po = (0, DB.memo)((function(BB) {
        let {
          disabled: OB
        } = BB;
        const GB = (0, DB.useRef)(null),
          [YB, QB] = (0, DB.useState)(!1),
          [oB, jB] = (0, DB.useState)(null),
          yB = (0, DB.useCallback)((() => {
            GB.current && (jB(GB.current.getBoundingClientRect()), QB((BB => !BB)))
          }), []),
          JB = (0, DB.useCallback)((() => {
            QB(!1)
          }), []);
        return (0, MB.jsxs)(MB.Fragment, {
          children: [(0, MB.jsx)("div", {
            ref: GB,
            children: (0, MB.jsx)(wG.f, {
              className: "ReplayViewerActionButton",
              onClick: yB,
              disabled: OB,
              children: (0, MB.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), YB && oB && (0, MB.jsx)(Mo, {
            anchorRect: oB,
            anchorRef: GB,
            onClose: JB
          })]
        })
      })),
      zo = ["freeCamUp", "freeCamDown"];

    function po(BB, OB) {
      pB.gameBridge.send("holdReplayFreecamVertical", {
        action: BB,
        sJ: OB
      })
    }
    const qo = (0, DB.memo)((function() {
      (0, DB.useEffect)((() => () => {
        ! function() {
          pB.gameBridge.send("moveReplayFreecam", null);
          for (const BB of zo) po(BB, !1)
        }()
      }), []);
      const BB = (0, DB.useCallback)((BB => {
          pB.gameBridge.send("moveReplayFreecam", BB)
        }), []),
        OB = (0, DB.useCallback)((BB => ({
          onTouchStart: OB => {
            OB.preventDefault(), OB.stopPropagation(), po(BB, !0)
          },
          onTouchEnd: OB => {
            OB.preventDefault(), OB.stopPropagation(), po(BB, !1)
          },
          onTouchCancel: OB => {
            OB.preventDefault(), OB.stopPropagation(), po(BB, !1)
          }
        })), []);
      return (0, MB.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, MB.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, MB.jsx)(RO, {
            onMove: BB,
            mode: "pinned"
          })
        }), (0, MB.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, MB.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...OB("freeCamUp"),
            children: (0, MB.jsx)(nB.b, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, MB.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...OB("freeCamDown"),
            children: (0, MB.jsx)(nB.b, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var Zo = GB(3558);
    const No = [],
      Ro = "Failed to load recording";

    function Wo(BB, OB, GB) {
      var YB;
      console.error(OB), GG.NotificationProvider.showAlertPopup({
        title: BB,
        subtitle: null !== (YB = (0, fQ.j)(OB)) && void 0 !== YB ? YB : GB,
        confirmText: "OK"
      })
    }

    function Ao(BB) {
      Wo(Ro, BB, fQ.e.cantOpen.text)
    }
    const Vo = (0, DB.memo)((function() {
        const BB = (0, gB.k)(),
          {
            gameState: OB
          } = (0, iB.o)(["gameState"]),
          GB = "inGame" === OB;
        return (0, LB.b)("replayViewerRequested", (BB => {
          (0, gB.j)("toggle" === BB ? !(0, gB.i)() : "open" === BB)
        })), (0, DB.useEffect)((() => {
          GB && (0, KQ.c)().then((BB => {
            if (null !== BB) return (0, gB.j)(!0), (0, VQ.d)().open(BB.bytes, BB.source)
          })).catch((BB => {
            (0, gB.j)(!0), Ao(BB)
          }))
        }), [GB]), BB ? (0, MB.jsx)(So, {}) : null
      })),
      So = (0, DB.memo)((function() {
        var BB, OB, GB, YB, QB, jB, yB, JB, PB, zB, lB, qB;
        const ZB = DB.useRef(null),
          [NB, RB] = (0, DB.useState)(1),
          [WB, AB] = (0, DB.useState)(null),
          [SB, UB] = (0, DB.useState)(!1),
          {
            isTouchScreen: fB
          } = (0, iB.o)(["isTouchScreen"]),
          kB = (0, LB.g)("replay"),
          dB = (0, LB.g)("replayEdits"),
          KB = null !== kB,
          uB = null !== (BB = null === kB || void 0 === kB ? void 0 : kB.kP) && void 0 !== BB ? BB : 0,
          mB = null !== (OB = null === kB || void 0 === kB ? void 0 : kB.totalTicks) && void 0 !== OB ? OB : 0,
          IB = Math.max(0, mB - 1),
          FB = null !== (GB = null === kB || void 0 === kB ? void 0 : kB.playing) && void 0 !== GB && GB,
          rB = null !== (YB = null === kB || void 0 === kB ? void 0 : kB.speed) && void 0 !== YB ? YB : 1,
          XB = null !== (QB = null === kB || void 0 === kB ? void 0 : kB.pI) && void 0 !== QB ? QB : 20,
          wB = null !== WB && void 0 !== WB ? WB : uB,
          EB = null !== (jB = null === kB || void 0 === kB ? void 0 : kB.freecam) && void 0 !== jB && jB,
          cB = null !== (yB = null === kB || void 0 === kB ? void 0 : kB.cameraMode) && void 0 !== yB ? yB : "recording",
          hB = null !== (JB = null === dB || void 0 === dB ? void 0 : dB.cameraKeyframes) && void 0 !== JB ? JB : No,
          aB = null !== (PB = null === dB || void 0 === dB ? void 0 : dB.playbackMark) && void 0 !== PB ? PB : null,
          eB = null !== (zB = null === dB || void 0 === dB ? void 0 : dB.fileName) && void 0 !== zB ? zB : null,
          TB = null !== (lB = null === dB || void 0 === dB ? void 0 : dB.unsavedChanges) && void 0 !== lB && lB,
          bB = null !== (qB = null === dB || void 0 === dB ? void 0 : dB.suggestSaveAs) && void 0 !== qB && qB,
          CB = (0, LB.g)("replayVideoExporting"),
          HB = !CB && KB && ("freecam" === cB || ("recording" === cB || "keyframe" === cB) && !FB),
          vB = fB && KB && "freecam" === cB && !CB && !SB;
        (0, uQ.e)(!0, !0, "ReplayViewerOverlay"), (0, DB.useEffect)((() => {
          pB.gameBridge.send("syncReplayCameraMode", null)
        }), [EB]);
        const sB = (0, DB.useCallback)(((BB, OB) => {
            pB.gameBridge.send("seekReplay", {
              kP: BB,
              ignorePlaybackMark: null === OB || void 0 === OB ? void 0 : OB.ignorePlaybackMark
            })
          }), []),
          xB = (0, DB.useCallback)((() => {
            pB.gameBridge.send("setReplayPlaying", !1)
          }), []),
          tB = (0, DB.useCallback)(((BB, OB) => {
            pB.gameBridge.send("moveReplayCameraKeyframe", {
              from: BB,
              to: OB
            })
          }), []),
          BO = (0, DB.useCallback)((BB => {
            pB.gameBridge.send("setReplayCameraKeyframe", BB)
          }), []),
          OO = (0, DB.useCallback)((BB => {
            pB.gameBridge.send("deleteReplayCameraKeyframes", {
              start: BB,
              end: BB
            })
          }), []),
          GO = (0, DB.useCallback)((BB => {
            pB.gameBridge.send("deleteReplayCameraKeyframes", {
              start: BB.startTick,
              end: BB.endTick
            })
          }), []),
          YO = (0, DB.useCallback)((() => pB.gameBridge.lookup("replayCamera", null)), []),
          DO = (0, DB.useCallback)((BB => {
            AB(BB)
          }), []),
          QO = (0, DB.useCallback)((BB => {
            pB.gameBridge.send("setReplayPlaybackMark", {
              inTick: BB.startTick,
              outTick: BB.endTick
            })
          }), []),
          oO = (0, DB.useCallback)((() => {
            pB.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          jO = (0, DB.useCallback)((BB => {
            const OB = pB.gameBridge.latest("replay");
            if (null === OB || BB.endTick <= BB.startTick) return;
            const GB = BB.startTick,
              YB = BB.endTick;
            GG.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((BB => {
              var DB;
              if (!0 !== BB) return;
              if ((null === (DB = pB.gameBridge.latest("replay")) || void 0 === DB ? void 0 : DB.id) !== OB.id) return;
              pB.gameBridge.send("cropReplay", {
                start: GB,
                end: YB
              }) && (AB(null), RB(1))
            }))
          }), []),
          yO = (0, DB.useCallback)(((BB, OB) => {
            RB(1), AB(null), (0, VQ.d)().open(BB, OB).catch(Ao)
          }), []),
          JO = (0, DB.useCallback)(((BB, OB) => {
            null !== pB.gameBridge.latest("connectedGame").websocketUrl ? GG.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((GB => {
              !0 === GB && yO(BB, OB)
            })) : yO(BB, OB)
          }), [yO]),
          MO = (0, DB.useCallback)((BB => {
            var OB;
            const GB = null === (OB = BB.target.files) || void 0 === OB ? void 0 : OB[0];
            if (BB.target.value = "", !GB) return;
            const YB = new FileReader;
            YB.onload = () => {
              JO(new Uint8Array(YB.result), {
                fileName: GB.name
              })
            }, YB.onerror = () => {
              Ao(YB.error)
            }, YB.readAsArrayBuffer(GB)
          }), [JO]),
          PO = (0, DB.useCallback)((() => {
            const BB = () => {
              null !== ZB.current && (0, Zo.e)(ZB.current)
            };
            (0, UQ.k)() ? (0, UQ.f)().then((BB => {
              BB && JO(BB.bytes, {
                fileHandle: BB.handle
              })
            })).catch((OB => {
              console.error(OB), GG.NotificationProvider.showPromptPopup({
                title: Ro,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((OB => {
                !0 === OB && BB()
              }))
            })): BB()
          }), [JO]),
          zO = (0, DB.useCallback)((async function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let OB;
            try {
              OB = await dQ(BB, {
                files: (0, VQ.d)(),
                pickerSupported: UQ.k,
                chooseFile: UQ.d,
                write: UQ.n,
                download: nQ.i,
                onFallback: console.error
              })
            } catch (GB) {
              return void Wo("Failed to save recording", GB)
            }
            "written" !== OB && "downloaded" !== OB || (() => {
              const BB = GG.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                BB.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          lO = (0, DB.useCallback)((BB => {
            pB.gameBridge.send("replayAction", BB)
          }), []),
          pO = (0, DB.useCallback)((BB => {
            RB((OB => rQ(OB, BB)))
          }), []),
          qO = (0, DB.useCallback)((BB => {
            if (!pB.gameBridge.latest("replayVideoExporting")) switch (BB) {
              case "replayLoad":
                PO();
                break;
              case "replaySave":
                zO(!1);
                break;
              case "replaySaveAs":
                zO(!0);
                break;
              case "replayTimelineZoomIn":
                pO("in");
                break;
              case "replayTimelineZoomOut":
                pO("out")
            }
          }), [PO, zO, pO]);
        (0, LB.b)("replayUiActionRequested", qO);
        const ZO = (0, DB.useCallback)((BB => {
            pB.gameBridge.send("setReplayCameraMode", BB)
          }), []),
          NO = KB ? wG.f : wG.q,
          RO = TB && !bB ? wG.q : wG.f,
          WO = TB && bB ? wG.q : wG.f;
        return (0, MB.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, MB.jsx)(jo, {
            enabled: HB
          }), vB && (0, MB.jsx)(qo, {}), (0, MB.jsx)("input", {
            ref: ZB,
            type: "file",
            accept: nQ.d,
            className: "ReplayViewerFileInput",
            onChange: MO
          }), (0, MB.jsxs)("div", {
            className: oB()("ReplayViewerBar", {
              Collapsed: SB
            }),
            children: [(0, MB.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                SB ? UB(!1) : KB ? UB(!0) : (0, gB.e)()
              },
              "aria-expanded": !SB,
              "aria-label": SB ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, MB.jsx)(nB.b, {
                name: SB ? "angle-up" : "angle-down"
              })
            }), !SB && (0, MB.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [KB && mB > 0 && (0, MB.jsx)(oo, {
                maxTick: IB,
                displayTick: wB,
                pI: XB,
                cameraKeyframes: hB,
                playbackMark: aB,
                onSeek: sB,
                onPause: xB,
                onScrubTickChange: DO,
                onMoveCameraKeyframe: tB,
                onUpdateCameraKeyframe: BO,
                onDeleteCameraKeyframe: OO,
                onUseCurrentCamera: YO,
                onMarkRange: QO,
                onCropRange: jO,
                onDeleteKeyframesInRange: GO,
                onClearMark: oO,
                zoomLevel: NB,
                onZoomLevelChange: RB
              }, IB), (0, MB.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, MB.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, MB.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [KB && (0, MB.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== eB && void 0 !== eB ? eB : "Unsaved recording", TB ? " *" : ""]
                    }), (0, MB.jsxs)(NO, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        qO("replayLoad")
                      },
                      children: [(0, MB.jsx)(sD.c, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, MB.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, MB.jsxs)(wG.f, {
                      className: "ReplayViewerActionButton",
                      onClick: gB.e,
                      children: [(0, MB.jsx)(sD.c, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, MB.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, MB.jsxs)(RO, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        qO("replaySave")
                      },
                      disabled: !KB,
                      children: [(0, MB.jsx)(sD.c, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, MB.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, MB.jsxs)(wG.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        pB.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !KB,
                      children: [(0, MB.jsx)(sD.c, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, MB.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, MB.jsxs)(WO, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        qO("replaySaveAs")
                      },
                      disabled: !KB,
                      children: [(0, MB.jsx)(sD.c, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, MB.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, MB.jsxs)(wG.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        pB.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !KB || 0 === mB || CB,
                      children: [(0, MB.jsx)(sD.c, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, MB.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, MB.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, MB.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, MB.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, MB.jsx)(sD.c, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, MB.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, MB.jsx)(VB.g, {
                        tooltipInner: (0, MB.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, MB.jsxs)(wG.Z, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === cB,
                          onClick: () => {
                            ZO("recording")
                          },
                          disabled: !KB,
                          children: ["Recorded ", (0, MB.jsx)(nB.b, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, MB.jsx)(VB.g, {
                        tooltipInner: (0, MB.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, MB.jsxs)(wG.Z, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === cB,
                          onClick: () => {
                            ZO("freecam")
                          },
                          disabled: !KB,
                          children: ["Free ", (0, MB.jsx)(nB.b, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, MB.jsx)(VB.g, {
                        tooltipInner: (0, MB.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, MB.jsxs)(wG.Z, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === cB,
                          onClick: () => {
                            ZO("keyframe")
                          },
                          disabled: !KB,
                          children: ["Preview ", (0, MB.jsx)(nB.b, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, MB.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, MB.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, MB.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, MB.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: LQ(wB, XB)
                      }), (0, MB.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, MB.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: LQ(IB, XB)
                      })]
                    }), (0, MB.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", wB, " / ", IB]
                    })]
                  }), (0, MB.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, MB.jsxs)(wG.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        lO("replaySkipBack")
                      },
                      disabled: !KB,
                      children: [(0, MB.jsxs)("span", {
                        children: [" ", (0, MB.jsx)(nB.b, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, MB.jsx)(sD.c, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, MB.jsxs)(wG.q, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        pB.gameBridge.send("setReplayPlaying", !FB)
                      },
                      disabled: !KB,
                      children: [(0, MB.jsxs)("span", {
                        children: [" ", FB ? (0, MB.jsx)(nB.b, {
                          name: "pause"
                        }) : (0, MB.jsx)(nB.b, {
                          name: "play"
                        }), " "]
                      }), (0, MB.jsx)(sD.c, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, MB.jsxs)(wG.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        lO("replaySkipForward")
                      },
                      disabled: !KB,
                      children: [(0, MB.jsxs)("span", {
                        children: [" ", (0, MB.jsx)(nB.b, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, MB.jsx)(sD.c, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, MB.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, MB.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, MB.jsxs)(wG.q, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        lO("replayRecordKeyframe")
                      },
                      disabled: !KB,
                      children: [(0, MB.jsx)(sD.c, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, MB.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, MB.jsx)(Po, {
                      disabled: !KB
                    }), aB && (0, MB.jsx)(wG.Z, {
                      className: "ReplayViewerActionButton",
                      onClick: oO,
                      disabled: !KB,
                      children: (0, MB.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, MB.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, MB.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, MB.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, MB.jsx)(wG.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          lO("replaySpeedDown")
                        },
                        disabled: !KB || (0, SQ.c)(rB),
                        children: (0, MB.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, MB.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [rB, "\xd7"]
                      }), (0, MB.jsx)(wG.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          lO("replaySpeedUp")
                        },
                        disabled: !KB || (0, SQ.b)(rB),
                        children: (0, MB.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, MB.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, MB.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, MB.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, MB.jsxs)(wG.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          qO("replayTimelineZoomOut")
                        },
                        disabled: !KB || NB <= mQ[0],
                        children: [(0, MB.jsx)("span", {
                          children: " \u2212 "
                        }), (0, MB.jsx)(sD.c, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, MB.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: gQ(NB)
                      }), (0, MB.jsxs)(wG.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          qO("replayTimelineZoomIn")
                        },
                        disabled: !KB || NB >= mQ[mQ.length - 1],
                        children: [(0, MB.jsx)("span", {
                          children: " + "
                        }), (0, MB.jsx)(sD.c, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, MB.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !KB && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var no = GB(1350);

    function Uo() {
      const [, BB] = (0, DB.useState)(0);
      return (0, yB.f)("replayViewer|uiVisibilityChanged", (() => {
          BB((BB => BB + 1))
        })), (0, yB.f)("replayViewer|replayLoaded", (() => {
          BB((BB => BB + 1))
        })),
        function() {
          if (!(0, no.f)()) return {};
          const BB = {
              [yo.b]: "true"
            },
            OB = (0, Jo.c)();
          for (const {
              group: GB,
              dataAttr: YB
            }
            of yo.c) YB && !OB[GB] && (BB[YB] = "true");
          return BB
        }()
    }
    var fo = GB(34785),
      ko = GB(2164),
      Ko = GB(9414),
      uo = GB(9402),
      mo = GB(2170);
    const Io = (0, DB.memo)((function() {
      var BB, OB, GB;
      const YB = (0, AB.g)("customButtons");
      (0, DB.useEffect)((() => YB ? (pB.gameBridge.send("bindCustomButtonKeys", YB.filter(Ko.e).map((BB => {
        let {
          id: OB,
          keycode: GB
        } = BB;
        return {
          id: OB,
          keycode: GB
        }
      }))), () => {
        pB.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [YB]);
      const QB = null !== (BB = null === YB || void 0 === YB ? void 0 : YB.filter(Ko.e)) && void 0 !== BB ? BB : [],
        oB = (0, uo.i)(),
        jB = null !== (OB = null === (GB = (0, mo.b)()) || void 0 === GB ? void 0 : GB.hideButtonHints) && void 0 !== OB && OB,
        yB = "customButton" !== (null === oB || void 0 === oB ? void 0 : oB.kind) || jB ? null : oB.id,
        JB = QB.length > 0,
        PB = (0, DB.useRef)(null);
      return (0, DB.useLayoutEffect)((() => {
        if (!JB) return () => {};
        const BB = PB.current,
          OB = BB.closest(".InGameUi"),
          GB = () => {
            OB.style.setProperty("--custom-buttons-top", `${BB.offsetTop}px`)
          };
        GB();
        const YB = new ResizeObserver(GB);
        return YB.observe(BB), YB.observe(BB.parentElement), () => {
          YB.disconnect(), OB.style.removeProperty("--custom-buttons-top")
        }
      }), [JB]), (0, MB.jsx)("div", {
        ref: PB,
        className: "" + ((0, OG.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: QB.map((BB => {
          var OB, GB;
          return (0, MB.jsx)(Fo, {
            button: BB,
            padGlyph: BB.id === yB && null !== (OB = null === (GB = (0, dB.f)()) || void 0 === GB ? void 0 : GB.getBoundButton("actionButton")) && void 0 !== OB ? OB : null
          }, BB.id)
        }))
      })
    }));

    function Fo(BB) {
      let {
        button: OB,
        padGlyph: GB
      } = BB;
      const YB = (0, DB.useRef)(null),
        QB = () => {
          null !== YB.current && (YB.current = null, pB.gameBridge.send("pressCustomButton", {
            id: OB.id,
            down: !1
          }))
        };
      (0, DB.useEffect)((() => QB), []);
      const oB = rO(QB, {
          pressesOnPointerDown: !0
        }),
        jB = BB => {
          YB.current === BB.pointerId && QB()
        };
      return (0, MB.jsxs)("div", {
        className: "CustomIcon",
        ...oB,
        onLostPointerCapture: jB,
        children: [(0, MB.jsx)(ko.e, {
          icon: OB.icon,
          keyboardHint: (0, Ko.d)(OB.keycode),
          padGlyph: GB,
          onPointerDown: BB => {
            try {
              BB.currentTarget.setPointerCapture(BB.pointerId)
            } catch {
              return
            }
            null === YB.current && pB.gameBridge.send("pressCustomButton", {
              id: OB.id,
              down: !0
            }), YB.current = BB.pointerId
          },
          onPointerUp: jB,
          onPointerCancel: jB,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), OB.description && (0, MB.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: OB.description
        })]
      })
    }
    var io = GB(2635),
      Lo = GB(244);
    const go = {
      frame: BB => {
        const OB = requestAnimationFrame((() => {
          BB()
        }));
        return () => {
          cancelAnimationFrame(OB)
        }
      },
      afterFrame: BB => {
        const OB = setTimeout(BB, 0);
        return () => {
          clearTimeout(OB)
        }
      }
    };
    class ro {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lo.b,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : go,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = BB, this.frames = OB, this.onHiddenMount = GB, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (BB(), () => {}) : (OB ? this.waiting.unshift(BB) : this.waiting.push(BB), this.schedule(), () => {
          const OB = this.waiting.indexOf(BB);
          OB >= 0 && (this.waiting.splice(OB, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((BB => {
          for (this.cancelIdle = null; this.waiting.length > 0 && BB.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const BB = this.waiting.shift(),
          OB = !this.shown,
          GB = performance.now();
        try {
          BB()
        } finally {
          OB && this.onHiddenMount(performance.now() - GB), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var BB, OB, GB;
        null === (BB = this.cancelIdle) || void 0 === BB || BB.call(this), this.cancelIdle = null, null === (OB = this.cancelFrame) || void 0 === OB || OB.call(this), this.cancelFrame = null, null === (GB = this.cancelAfterFrame) || void 0 === GB || GB.call(this), this.cancelAfterFrame = null
      }
    }
    const Xo = (0, DB.createContext)(null);

    function wo(BB) {
      let {
        children: OB,
        first: GB = !1
      } = BB;
      const YB = (0, DB.useContext)(Xo),
        [QB, oB] = (0, DB.useState)(null === YB);
      return (0, DB.useEffect)((() => {
        if (!QB && null !== YB) return YB.request((() => {
          oB(!0)
        }), GB)
      }), [GB, QB, YB]), QB ? (0, DB.createElement)(DB.Fragment, null, OB) : null
    }
    const Eo = (0, DB.memo)((function(BB) {
        let {
          shown: OB
        } = BB;
        const [GB] = (0, DB.useState)((() => new ZB.h(OB))), [QB] = (0, DB.useState)((() => OB ? null : new ro(void 0, void 0, (BB => {
          YB.b.noteWorkDuringAdmissionWait(BB)
        }))));
        return (0, DB.useLayoutEffect)((() => {
          OB && (null === QB || void 0 === QB || QB.show(), GB.show())
        }), [OB, GB, QB]), (0, MB.jsx)(ZB.d.Provider, {
          value: GB,
          children: (0, MB.jsx)(Xo.Provider, {
            value: QB,
            children: (0, MB.jsx)(co, {})
          })
        })
      })),
      co = (0, DB.memo)((function() {
        const {
          isUiHidden: BB,
          isUiHiddenByCamera: OB,
          worldPanelHud: GB,
          isTouchScreen: YB
        } = (0, iB.o)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), QB = (0, ND.c)(), jB = Uo(), yB = (0, ZB.l)(), JB = (0, DB.useRef)(null), PB = (0, AB.g)("showKillfeed");
        return function() {
            const BB = (0, ZB.l)();
            (0, DB.useEffect)((() => BB.whenShown(NB)), [BB])
          }(),
          function() {
            const BB = (0, AB.g)("inventoryColourOverride");
            (0, DB.useEffect)((() => {
              if (!BB) return;
              const {
                panel: OB,
                slot: GB,
                slotSelected: YB,
                slotUnavailable: DB
              } = uB(BB), QB = document.documentElement.style;
              return QB.setProperty("--InventoryPanelColour", OB), QB.setProperty("--InventorySlotColour", GB), QB.setProperty("--InventorySlotSelectedColour", YB), QB.setProperty("--InventorySlotUnavailableColour", DB), () => {
                QB.removeProperty("--InventoryPanelColour"), QB.removeProperty("--InventorySlotColour"), QB.removeProperty("--InventorySlotSelectedColour"), QB.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [BB])
          }(), (0, DB.useLayoutEffect)((() => yB.whenShown((() => {
            var BB;
            null === (BB = JB.current) || void 0 === BB || BB.classList.remove("PreMounted")
          }))), [yB]), (0, MB.jsxs)(MB.Fragment, {
            children: [(0, MB.jsxs)("div", {
              ref: JB,
              className: oB()("InGameUi", {
                PreMounted: !yB.shown,
                Hidden: BB,
                HiddenByCamera: OB,
                HiddenByWorldPanel: null !== GB,
                WorldPanelTouchControl: "touchControls" === GB
              }),
              ...jB,
              children: [(0, MB.jsxs)(wo, {
                children: [(0, MB.jsx)(zY.e, {}), (0, MB.jsx)(NY, {})]
              }), (0, MB.jsx)(ZB.j, {
                children: (0, MB.jsx)(RY, {})
              }), (0, MB.jsxs)(wo, {
                children: [(0, MB.jsx)(aD, {}), (0, MB.jsx)(tD, {}), YB && (0, MB.jsx)(OQ, {})]
              }), (0, MB.jsxs)(wo, {
                children: [(0, MB.jsx)(uG, {}), (0, MB.jsx)(IY.b, {}), (0, MB.jsx)(EY, {})]
              }), (0, MB.jsx)(ZB.j, {
                children: (0, MB.jsx)(PY, {})
              }), (0, MB.jsxs)(wo, {
                children: [(0, MB.jsx)(CD.b, {}), (0, MB.jsx)(Vo, {})]
              }), null, (0, MB.jsxs)(wo, {
                children: [(0, MB.jsx)(lQ.f, {}), (0, MB.jsx)(pQ.i, {})]
              }), (0, MB.jsx)(wo, {
                children: (0, MB.jsx)(IG.l, {})
              }), (0, MB.jsx)(wo, {
                children: (0, MB.jsx)(Ho, {
                  showChat: QB
                })
              }), (0, MB.jsxs)(wo, {
                children: [(0, MB.jsx)(ZQ, {}), (0, MB.jsx)(bD, {})]
              }), (0, MB.jsxs)("div", {
                className: oB()("RightElements", {
                  RightElementsTouchscreen: YB
                }),
                "data-camera-keeper-host": "",
                children: [(0, MB.jsxs)("div", {
                  className: CY.k,
                  "data-holds-camera-keeper": "",
                  children: [(0, MB.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, MB.jsx)(wo, {
                      children: (0, MB.jsx)(ID.c, {})
                    }), (0, MB.jsxs)(wo, {
                      children: [(0, MB.jsx)(UB, {}), (0, MB.jsx)(tY.c, {})]
                    }), OG.featureFlags.useSocialFeatures && (0, MB.jsx)(ZB.j, {
                      children: (0, MB.jsx)(BD.c, {
                        placement: "inGame"
                      })
                    }), OG.featureFlags.useSocialFeatures && (0, MB.jsx)(ZB.j, {
                      children: (0, MB.jsx)(zD, {})
                    }), PB && (0, MB.jsx)(ZB.j, {
                      children: (0, MB.jsx)(mY, {})
                    }), (0, MB.jsx)(wo, {
                      children: (0, MB.jsx)(fo.d, {})
                    })]
                  }), OG.featureFlags.useSocialFeatures && (0, MB.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, MB.jsx)(wo, {
                      children: (0, MB.jsx)(cD.e, {})
                    })
                  })]
                }), (0, MB.jsxs)(wo, {
                  children: [(0, MB.jsx)(IG.c, {
                    placement: "topRight"
                  }), (0, MB.jsx)(vo, {})]
                })]
              }), (0, MB.jsx)("div", {
                className: "LeftCentre",
                children: (0, MB.jsx)(wo, {
                  children: (0, MB.jsx)(Io, {})
                })
              }), (0, MB.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": YB ? "" : void 0,
                children: [(0, MB.jsx)(ZB.j, {
                  children: (0, MB.jsx)(WB.f, {})
                }), (0, MB.jsx)(wo, {
                  children: (0, MB.jsx)(ao, {})
                }), (0, MB.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": YB ? "" : void 0,
                  children: [(0, MB.jsx)("div", {
                    className: oB()("BottomLeftElements", {
                      Touch: YB
                    }),
                    children: (0, MB.jsxs)(wo, {
                      children: [(0, MB.jsx)(qD, {}), !YB && (0, MB.jsx)(io.e, {})]
                    })
                  }), (0, MB.jsx)(wo, {
                    children: (0, MB.jsx)(Co, {})
                  }), (0, MB.jsx)(wo, {
                    children: (0, MB.jsx)(hY, {
                      isTouchScreen: YB
                    })
                  })]
                })]
              }), (0, MB.jsx)("div", {
                className: "MiddleLeft"
              }), YB && (0, MB.jsx)(wo, {
                children: (0, MB.jsx)(PG, {})
              }), (0, MB.jsx)("div", {
                className: "CameraFadeHost",
                ref: lO.h
              })]
            }), (0, MB.jsx)(ZB.j, {
              children: (0, MB.jsx)(AQ.c, {})
            }), (0, MB.jsx)(ZB.j, {
              children: (0, MB.jsx)(PQ, {})
            }), (0, MB.jsx)(wo, {
              first: !0,
              children: (0, MB.jsx)(ZD.c, {})
            }), (0, MB.jsx)(ZB.j, {
              children: (0, MB.jsx)(ho, {})
            })]
          })
      }));

    function ho() {
      return (0, DB.useEffect)((() => {
        const BB = setTimeout((() => {
          (0, lB.k)()
        }), 0);
        return () => {
          clearTimeout(BB), lB.o.ZN(!1)
        }
      }), []), null
    }
    const ao = (0, DB.memo)((function() {
        const BB = (0, yB.i)("aimingOverlay", "none");
        (0, SB.e)();
        const OB = (0, AB.h)("middleTextUpper"),
          GB = (0, AB.h)("middleTextLower");
        return (0, MB.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === BB ? {
            visibility: "hidden"
          } : {},
          children: [(0, MB.jsx)(bo, {
            text: OB,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: eo
          }), (0, MB.jsx)(bo, {
            text: GB,
            className: "MiddleText",
            maxHeightFraction: To
          })]
        })
      })),
      eo = .3,
      To = .2;

    function bo(BB) {
      let {
        text: OB,
        className: GB,
        maxHeightFraction: YB
      } = BB;
      const QB = (0, DB.useRef)(null),
        oB = (0, DB.useRef)(null);
      return function(BB, OB, GB, YB) {
        (0, DB.useLayoutEffect)((() => {
          const YB = BB.current,
            DB = OB.current;
          if (!YB || !DB) return;
          let QB = -1,
            oB = -1;
          const jB = BB => (DB.style.setProperty("zoom", String(BB)), YB.getBoundingClientRect().height),
            yB = () => {
              const BB = document.documentElement.clientHeight * GB;
              let OB = 1;
              if (jB(1) > BB) {
                let GB = .5,
                  YB = 1;
                for (let OB = 0; OB < 6; OB++) {
                  const OB = (GB + YB) / 2;
                  jB(OB) <= BB ? GB = OB : YB = OB
                }
                OB = GB
              }
              oB = jB(OB), QB = YB.getBoundingClientRect().width
            };
          yB();
          let JB = 0;
          const MB = () => {
              cancelAnimationFrame(JB), JB = requestAnimationFrame(yB)
            },
            PB = new ResizeObserver((() => {
              const {
                width: BB,
                height: OB
              } = YB.getBoundingClientRect();
              BB === QB && OB === oB || MB()
            }));
          return PB.observe(YB), window.addEventListener("resize", MB), () => {
            PB.disconnect(), window.removeEventListener("resize", MB), cancelAnimationFrame(JB), DB.style.removeProperty("zoom")
          }
        }), [BB, OB, GB, YB])
      }(QB, oB, YB, OB.content), (0, MB.jsx)("div", {
        ref: QB,
        className: "MiddleTextFit",
        children: (0, MB.jsx)(qQ, {
          ref: oB,
          text: OB,
          className: GB
        })
      })
    }
    const Co = (0, DB.memo)((function() {
        const BB = (0, yB.i)("aimingOverlay", "none");
        (0, SB.e)();
        const OB = (0, AB.g)("useInventory");
        return (0, MB.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === BB ? {
            visibility: "hidden"
          } : {},
          children: [(0, MB.jsx)(PB, {}), (0, MB.jsx)(IG.c, {}), (0, MB.jsx)(FG, {}), (0, MB.jsx)(ZB.j, {
            children: (0, MB.jsx)(wD, {})
          }), (0, MB.jsxs)("div", {
            className: "HotBarRow",
            children: [OB ? (0, MB.jsx)(kB.c, {}) : (0, MB.jsx)(kB.e, {}), (0, MB.jsx)(KB, {})]
          })]
        })
      })),
      Ho = (0, DB.memo)((function(BB) {
        let {
          showChat: OB
        } = BB;
        const {
          t: GB
        } = (0, aB.H)(), {
          clientEscMenuOptions: YB,
          sessionReplayRecording: QB,
          isTouchScreen: jB
        } = (0, iB.o)(["clientEscMenuOptions", "sessionReplayRecording", "isTouchScreen"]);
        (0, SB.e)();
        const {
          userContext: yB,
          isUserContextUpdating: JB
        } = (0, RB.d)(), PB = (0, AB.g)("hideCoordinates"), lB = (0, AB.g)("customVariationTitle"), {
          requestedGameNameWithVariation: pB,
          gameNameWithVariation: qB,
          lobbyName: ZB,
          shownLobbyName: NB
        } = (0, LB.g)("connectedGame"), WB = (0, zB.b)(pB, ZB, !1), [nB, UB] = (0, DB.useState)(null), fB = (0, iD.n)(qB || pB || ""), kB = lB || fB || "";
        (0, DB.useEffect)((() => {
          JB || GD.b.getFavouriteLobbies(yB).then((BB => {
            console.log("Got favourite lobbies", BB), UB(BB)
          }))
        }), [JB, yB]);
        const dB = (0, DB.useRef)(null);
        return (0, DB.useLayoutEffect)((() => {
          const BB = dB.current,
            OB = document.documentElement,
            GB = new ResizeObserver((() => {
              OB.style.setProperty("--InGameHeaderRowsHeight", `${BB.offsetHeight}px`)
            }));
          return GB.observe(BB), () => {
            GB.disconnect(), OB.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), xY(dB), (0, MB.jsxs)(MB.Fragment, {
          children: [(0, MB.jsxs)("div", {
            className: oB()(CY.i, {
              Touchscreen: jB
            }),
            ref: dB,
            children: [(0, MB.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, MB.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: BB => {
                  BB.stopPropagation(), BB.preventDefault()
                },
                onClick: () => {
                  iB.c.set({
                    openEverythingMenuName: LY.p.SETTINGS
                  })
                },
                children: [(0, MB.jsx)(FD.b, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, MB.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, MB.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === WB && (0, MB.jsx)(FD.b, {}), null !== WB && (0, MB.jsxs)(MB.Fragment, {
                  children: [WB, kB && ` ${kB}`]
                })]
              }), (0, MB.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, MB.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: NB
              }), (0, LD.L)(ZB) && (0, MB.jsx)(VB.g, {
                tooltipInner: (0, MB.jsx)("div", {
                  children: GB(null !== nB && nB.includes(ZB) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, MB.jsx)("div", {
                  children: (0, MB.jsx)(wG.z, {
                    isLiked: null !== nB && nB.includes(ZB),
                    onClick: () => {
                      try {
                        if (!nB) return;
                        nB.includes(ZB) ? (GD.b.unfavouriteLobby(yB, ZB).catch((BB => {
                          console.error("Failed to favourite lobby", BB)
                        })), UB(nB.filter((BB => BB !== ZB)))) : (GD.b.favouriteLobby(yB, ZB).catch((BB => {
                          console.error("Failed to favourite lobby", BB)
                        })), UB([...nB, ZB]))
                      } catch (BB) {
                        console.error("Failed to like lobby", BB)
                      }
                    },
                    isLoading: null === nB
                  })
                })
              }), (0, MB.jsx)(WQ, {})]
            }), (0, MB.jsx)(kD, {
              show: YB.showFPS,
              asText: QB
            }), !PB && YB.showCoordinates && (0, MB.jsx)(uD, {}), !PB && YB.showChunkCoordinates && (0, MB.jsx)(mD, {}), (0, MB.jsx)(NQ, {})]
          }), (0, MB.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, MB.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: OB && (0, MB.jsx)(FB.b, {})
            })
          })]
        })
      })),
      vo = (0, DB.memo)((function() {
        (0, SB.e)();
        const BB = (0, AB.h)("RightInfoText"),
          [OB, GB] = (0, DB.useState)(null);
        return (0, yO.m)(OB, ".RightElements"), BB.hasText ? (0, MB.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, MB.jsx)(qQ, {
            ref: GB,
            text: BB,
            className: "RightInfoDiv",
            children: (0, MB.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, MB.jsx)(JB.b, {
                text: BB.content
              })
            })
          })
        }) : null
      }))
  },
  5335: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB
    });
    var YB = GB(56),
      DB = GB(331),
      QB = GB(2012),
      oB = GB(1282);

    function jB(BB) {
      let {
        text: OB
      } = BB;
      const GB = [];
      let jB = "";
      return (0, DB.hc)(OB).forEach(((BB, OB) => {
        if ("string" === typeof BB || !(0, QB.d)(BB.icon)) return void(jB += "string" === typeof BB ? BB : BB.icon);
        const DB = Math.max(0, jB.trimEnd().search(/\S{1,12}$/));
        GB.push((0, oB.jsxs)(YB.Fragment, {
          children: [jB.slice(0, DB), (0, oB.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [jB.slice(DB), (0, oB.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": BB.icon,
              children: (0, oB.jsx)(QB.c, {
                itemName: BB.icon,
                amount: 0
              })
            })]
          })]
        }, OB)), jB = ""
      })), GB.push(jB), (0, oB.jsx)(oB.Fragment, {
        children: GB
      })
    }
  },
  37202: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => zB,
      e: () => MB,
      h: () => PB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(2012),
      jB = GB(1282);
    const yB = 350;
    let JB = 0;

    function MB() {
      return JB += 1, JB
    }

    function PB(BB, OB) {
      let GB = 0;
      for (const YB of BB) "ingredient" !== YB.kind && YB.WJ === OB && (GB += YB.amount);
      return GB > 0 ? {
        idx: OB,
        amount: GB
      } : null
    }

    function zB(BB) {
      var OB, GB;
      let {
        anim: DB,
        onComplete: JB
      } = BB;
      const MB = null !== (OB = DB.delayMs) && void 0 !== OB ? OB : 0,
        PB = null !== (GB = DB.durationMs) && void 0 !== GB ? GB : yB,
        [zB, lB] = (0, YB.useState)(DB.from),
        [pB, qB] = (0, YB.useState)(0 === MB),
        [ZB, NB] = (0, YB.useState)(!1),
        RB = (0, YB.useRef)(!1);
      return (0, YB.useEffect)((() => {
        let BB, OB;
        const GB = () => {
            RB.current = !0, qB(!0), BB = requestAnimationFrame((() => {
              OB = requestAnimationFrame((() => {
                lB({
                  x: DB.to.x,
                  y: DB.to.y
                }), NB(!0)
              }))
            }))
          },
          YB = RB.current ? 0 : MB;
        let QB;
        YB > 0 ? QB = setTimeout(GB, YB) : GB();
        const oB = setTimeout((() => {
          JB(DB.id)
        }), YB + PB + 50);
        return () => {
          clearTimeout(QB), cancelAnimationFrame(BB), cancelAnimationFrame(OB), clearTimeout(oB)
        }
      }), [DB.id, DB.to.x, DB.to.y, JB, MB, PB]), (0, jB.jsx)("div", {
        className: QB()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === DB.kind,
          Waiting: !pB,
          Arrived: ZB
        }),
        style: {
          left: zB.x,
          top: zB.y,
          "--fly-duration": `${PB}ms`
        },
        children: (0, jB.jsx)(oB.c, {
          itemName: DB.itemName,
          amount: DB.amount
        })
      })
    }
  },
  37183: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => gB,
      e: () => wB
    });
    var YB = GB(56),
      DB = GB(2839),
      QB = GB(7122),
      oB = GB(2164),
      jB = GB(2653),
      yB = GB(9498),
      JB = GB(353),
      MB = GB(25),
      PB = GB(1480),
      zB = GB(31),
      lB = GB(1090),
      pB = GB.n(lB),
      qB = GB(331),
      ZB = GB(37191),
      NB = GB(2e3),
      RB = GB(2063),
      WB = GB(9365),
      AB = GB(1282);

    function VB(BB) {
      var OB, GB;
      let {
        slotIdx: QB
      } = BB;
      const oB = (0, RB.f)("hotbar", (BB => {
          var OB;
          return null !== (OB = BB.items[QB]) && void 0 !== OB ? OB : null
        })),
        yB = (0, RB.f)("hotbar", (BB => BB.ammo)),
        [MB, PB] = (0, YB.useState)(!1),
        zB = (0, YB.useRef)(null),
        [lB, qB] = (0, YB.useState)(null),
        [ZB, VB] = (0, YB.useState)(null),
        SB = (0, jB.g)("maxAuraLevel"),
        nB = (0, DB.c)(),
        UB = (0, YB.useCallback)((() => {
          if (clearTimeout(zB.current), oB) {
            var BB, OB, GB, YB;
            const yB = oB.displayName,
              MB = [],
              PB = Array.isArray(yB) ? yB : [yB],
              zB = {
                fontStyle: null !== (BB = oB.attributes.customAttributes) && void 0 !== BB && BB.author ? "italic" : "normal"
              };
            for (const BB of PB) BB.str ? MB.push(BB) : MB.push({
              str: BB,
              style: zB
            });
            if (null !== (OB = oB.attributes.customAttributes) && void 0 !== OB && OB.enchantments) {
              MB.push(" ");
              const BB = Object.entries(oB.attributes.customAttributes.enchantments).sort(((BB, OB) => OB[1] - BB[1])),
                OB = oB.attributes.customAttributes.enchantmentData;
              for (const [GB, YB] of BB) {
                var DB, QB;
                const BB = null !== (DB = null === OB || void 0 === OB || null === (QB = OB[GB]) || void 0 === QB ? void 0 : QB.icon) && void 0 !== DB ? DB : `${GB} Enchantment`;
                var jB;
                if (YB < 4)
                  for (let OB = 0; OB < YB; OB++) MB.push({
                    icon: BB,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else MB.push({
                  icon: BB,
                  style: {
                    fontSize: "1.5em"
                  }
                }), MB.push(null !== (jB = (0, JB.S)(YB)) && void 0 !== jB ? jB : YB.toString())
              }
            }
            qB(MB), VB(null !== (GB = null === (YB = oB.attributes.customAttributes) || void 0 === YB ? void 0 : YB.enchantmentTier) && void 0 !== GB ? GB : null)
          } else qB(null), VB(null);
          PB(!0), nB();
          const yB = null === oB || void 0 === oB ? void 0 : oB.attributes.customAttributes;
          void 0 === (null === yB || void 0 === yB ? void 0 : yB.shotsLeft) && (zB.current = setTimeout((() => {
            PB(!1)
          }), 2e3))
        }), [null === oB || void 0 === oB ? void 0 : oB.name, QB, null === oB || void 0 === oB ? void 0 : oB.instance, null === oB || void 0 === oB ? void 0 : oB.displayName]);
      (0, YB.useEffect)((() => (UB(), () => {
        clearTimeout(zB.current), PB(!1)
      })), [null === oB || void 0 === oB ? void 0 : oB.name, QB, null === oB || void 0 === oB ? void 0 : oB.instance, UB]);
      const fB = null === oB || void 0 === oB || null === (OB = oB.attributes.customAttributes) || void 0 === OB ? void 0 : OB.shotsLeft,
        kB = void 0 === fB ? null : (0, AB.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${fB}|${oB.requiresAmmo?`${yB}x${oB.clipSize}`:oB.clipSize}`
        }),
        dB = (0, WB.l)();
      return (0, AB.jsx)(AB.Fragment, {
        children: MB && oB && !dB.showing ? (0, AB.jsxs)("div", {
          className: pB()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === SB,
            Enchanted: null !== ZB
          }),
          style: {
            "--enchantmentColour": null !== (GB = JB.ub[ZB]) && void 0 !== GB ? GB : JB.ub.None,
            "--duration": ZB ? (0, JB.nb)(ZB) + "s" : void 0
          },
          children: [ZB && (0, AB.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, AB.jsx)(NB.b, {
              text: lB
            }), kB]
          }), (0, AB.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, AB.jsx)(NB.b, {
              text: lB
            }), kB]
          })]
        }) : null
      })
    }
    var SB = GB(37202),
      nB = GB(16),
      UB = GB(2023),
      fB = GB(641),
      kB = GB(2659),
      dB = GB(3824),
      KB = GB(3831);
    var uB = GB(1108),
      mB = GB(1106),
      IB = GB(2697);

    function FB() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var iB = GB(9570),
      LB = GB(1508);
    const gB = (0, YB.memo)((function() {
      const [BB, OB] = (0, YB.useState)(0), GB = (0, jB.g)("useFullInventory"), oB = (0, jB.g)("highlightedHotbarSlots"), {
        isTouchScreen: yB,
        openInGameMenuName: JB
      } = (0, nB.o)(["isTouchScreen", "openInGameMenuName"]), zB = null !== JB && "inventory" !== JB, lB = (0, RB.g)("fullInventory") && "inventory" === JB, qB = function() {
        const BB = (0, uB.h)(((BB, OB) => `${BB}:${(0,mB.b)(BB,OB)?"portrait":"landscape"}`)),
          [OB, GB] = (0, YB.useState)(FB);
        return (0, YB.useLayoutEffect)((() => {
          GB(FB())
        }), [BB]), (0, PB.f)(IB.e, (() => {
          GB(FB())
        })), OB
      }(), NB = yB && !qB;
      ! function(BB, OB, GB) {
        (0, YB.useLayoutEffect)((() => {
          const YB = document.documentElement.classList;
          return BB && (YB.add("TouchHotbar"), YB.toggle("TouchHotbarKeysAbove", OB), YB.toggle("TouchHotbarHasBag", GB)), (0, dB.d)(), MB.o.tM(KB.c), () => {
            YB.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, dB.d)(), MB.o.tM(KB.c)
          }
        }), [BB, OB, GB])
      }(yB, NB, GB);
      const [WB, kB] = (0, QB.e)("changedHotbarUsingNumkeys", !0), iB = (0, RB.f)("hotbar", (BB => BB.selectedSlot)), LB = null !== iB && void 0 !== iB ? iB : BB, gB = (0, DB.c)(), EB = (0, YB.useRef)(null), cB = (0, PB.i)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, PB.f)("inventoryDraggedItemUpdated", (BB => {
        EB.current = BB, gB()
      })), (0, RB.b)("hotbarScrolled", (BB => {
        null === iB && eB(BB)
      })), (0, RB.b)("hotbarSlotRequested", (BB => {
        aB(BB), kB(!1)
      })), (0, RB.b)("numberKeyPressed", (() => {
        kB(!1)
      })), (0, RB.b)("hotbarDropRequested", (BB => {
        const OB = UB.gameBridge.latest("hotbar").items[LB];
        if (OB) {
          var GB;
          const YB = BB && null !== (GB = OB.amount) && void 0 !== GB ? GB : 1;
          UB.gameBridge.send("removeInventoryItem", {
            slot: LB,
            amount: YB,
            drop: !0
          })
        }
      }));
      const aB = BB => {
          UB.gameBridge.send("selectHotbarSlot", BB), OB(BB)
        },
        eB = BB => {
          aB((LB + BB + fB.r) % fB.r)
        };
      let TB, bB = null,
        CB = null,
        HB = BB => BB => {},
        vB = BB => OB => {
          aB(BB)
        },
        sB = BB => BB => {},
        xB = [];
      if (lB) {
        var tB;
        const BB = EB.current;
        if (null === BB || void 0 === BB || !BB.setHovered) return (0, AB.jsx)("div", {
          className: pB()("HotBarContainer", {
            Touch: yB,
            KeysAbove: NB
          }),
          children: (0, AB.jsx)("div", {
            className: "HotBar"
          })
        });
        bB = BB.draggedInfo, CB = BB.specialItemInfo, HB = BB.setHovered, vB = BB.pointerDown, sB = BB.pointerUp, TB = BB.variation, xB = null !== (tB = BB.craftFlyAnims) && void 0 !== tB ? tB : []
      }
      return (0, AB.jsxs)("div", {
        className: pB()("HotBarContainer", {
          Touch: yB,
          PopupOpen: yB && zB,
          KeysAbove: NB
        }),
        children: [(0, AB.jsxs)("div", {
          className: pB()("HotBar", {
            HoverDisabled: cB
          }),
          children: [yB && (0, AB.jsxs)(AB.Fragment, {
            children: [(0, AB.jsx)(XB, {
              useFullInventory: GB,
              inventoryOpen: lB
            }), (0, AB.jsx)(rB, {
              direction: "Previous",
              onPress: () => {
                eB(-1)
              }
            })]
          }), !yB && (0, AB.jsxs)(AB.Fragment, {
            children: [(0, AB.jsx)(wB, {}), (0, AB.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, AB.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((BB, OB) => (0, AB.jsx)(ZB.c, {
              idx: OB,
              draggedInfo: bB,
              specialItemInfo: CB,
              craftFlyHoldbackInfo: (0, SB.h)(xB, OB),
              setHovered: HB(OB),
              pointerDown: vB(OB),
              pointerUp: sB(OB),
              variation: TB,
              isSelected: OB === LB,
              hotbarHighlighted: !0 === (null === oB || void 0 === oB ? void 0 : oB.includes(OB)),
              hoverDisabled: cB,
              showNumber: WB && !yB
            }, OB)))
          }), yB && (0, AB.jsx)(rB, {
            direction: "Next",
            onPress: () => {
              eB(1)
            }
          }), !yB && (0, AB.jsxs)(AB.Fragment, {
            children: [(0, AB.jsx)("div", {
              className: "HotBarFiller"
            }), (0, AB.jsx)("div", {
              className: pB()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !GB
              }),
              onPointerDown: () => {
                MB.o.tM("toggleMenu", "inventory")
              },
              children: (0, AB.jsx)(hB, {})
            })]
          })]
        }), (0, AB.jsx)(VB, {
          slotIdx: LB
        })]
      })
    }));

    function rB(BB) {
      let {
        direction: OB,
        onPress: GB
      } = BB;
      return (0, AB.jsx)("div", {
        className: pB()("HotBarArrow", OB),
        ...LB.i,
        children: (0, AB.jsx)(oB.e, {
          icon: "Previous" === OB ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: GB
        })
      })
    }
    const XB = (0, YB.memo)((function(BB) {
        let {
          useFullInventory: OB,
          inventoryOpen: GB
        } = BB;
        const DB = (0, jB.g)("maxAuraLevel"),
          QB = (0, YB.useRef)(null),
          oB = (0, yB.e)();
        return function(BB, OB, GB) {
          (0, YB.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", OB), MB.o.tM(KB.c), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [OB]), (0, YB.useLayoutEffect)((() => {
            const OB = BB.current.closest(".BottomMiddleElements");
            return OB.classList.toggle("TouchInventoryOpen", GB), () => {
              OB.classList.remove("TouchInventoryOpen")
            }
          }), [BB, GB])
        }(QB, oB, GB), (0, iB.h)(QB, oB, GB), (0, AB.jsxs)("div", {
          ref: QB,
          className: pB()("TouchInventoryKeys", {
            NoAuraBar: 0 === DB,
            InventoryOpen: GB
          }),
          children: [(0, AB.jsx)(wB, {
            touchKey: !0
          }), (0, AB.jsx)("div", {
            className: pB()("TouchInventoryKey BagKey", {
              Hidden: !OB
            }),
            ...LB.i,
            children: (0, AB.jsx)(hB, {
              touchKey: !0
            })
          })]
        })
      })),
      wB = (0, YB.memo)((function(BB) {
        let {
          touchKey: OB = !1
        } = BB;
        const GB = (0, yB.e)();
        return (0, AB.jsx)("div", {
          className: OB ? pB()("TouchInventoryKey ShopKey", {
            Hidden: !GB
          }) : pB()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !GB
          }),
          ...OB ? LB.i : {},
          children: (0, AB.jsx)(oB.e, {
            icon: (0, JB.pc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              GB && nB.c.set({
                openEverythingMenuName: qB.p.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function EB(BB) {
      let {
        player: OB
      } = BB;
      return OB.some((BB => null !== BB && JB.jd.includes(BB.name)))
    }

    function cB(BB) {
      BB.creative || zB.g.getItem("LogInInventoryRedDotTutorialComplete") || (EB(BB) ? (MB.o.tM("RedDotOpenInventoryIcon", !0), MB.o.tM("TouchTutorialOpenInventoryIcon", !0)) : (MB.o.tM("RedDotOpenInventoryIcon", !1), MB.o.tM("TouchTutorialOpenInventoryIcon", !1)))
    }
    const hB = (0, YB.memo)((function(BB) {
      let {
        touchKey: OB = !1
      } = BB;
      (0, YB.useEffect)((() => {
        cB(UB.gameBridge.latest("inventory"))
      }), []), (0, RB.b)("inventory", cB);
      const GB = (0, kB.l)();
      return (0, PB.f)("toggleMenu", (BB => {
        GB.shown && (null !== BB && void 0 !== BB && BB.startsWith("inventory") && EB(UB.gameBridge.latest("inventory")) ? (zB.g.setItem("LogInInventoryRedDotTutorialComplete", !0), MB.o.tM("RedDotOpenInventoryIcon", !1), MB.o.tM("TouchTutorialOpenInventoryIcon", !1)) : "shop" === BB && MB.o.tM("showShopTouchTutorial", !1))
      })), OB ? (0, AB.jsx)(oB.e, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          MB.o.tM("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, AB.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          MB.o.tM("toggleMenu", "inventory")
        },
        children: (0, AB.jsx)(oB.e, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: BB => {
            MB.o.tM("toggleMenu", "inventory"), BB.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  37191: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => ZB,
      g: () => pB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(2018),
      jB = GB(2012),
      yB = GB(2023),
      JB = GB(2063),
      MB = GB(37198),
      PB = GB(34807),
      zB = GB(1434),
      lB = GB(1282);
    const pB = (BB, OB, GB) => {
      let YB = OB,
        DB = !1;
      for (const QB of GB)(null === QB || void 0 === QB ? void 0 : QB.idx) === BB && (DB = !0, YB > 0 && (YB -= QB.amount));
      return {
        displayedAmt: YB,
        shown: !DB || YB > 0
      }
    };
    const qB = BB => {
        let {
          idx: OB
        } = BB;
        return (0, zB.s)() ? null : (0, lB.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: OB < 9 ? OB + 1 : 0
        })
      },
      ZB = (0, YB.memo)((function(BB) {
        var OB, GB, YB;
        let {
          idx: DB,
          setHovered: zB,
          pointerDown: ZB,
          pointerUp: NB,
          draggedInfo: RB,
          specialItemInfo: WB,
          craftFlyHoldbackInfo: AB,
          defaultIconB64: VB = null,
          variation: SB,
          isSelected: nB = !1,
          hotbarHighlighted: UB = !1,
          hoverDisabled: fB = !1,
          showNumber: kB = !1,
          showNewDot: dB = !1
        } = BB;
        const KB = (0, JB.f)("inventory", (BB => DB === MB.e ? null : (0, PB.m)(BB, DB)));
        let uB, mB, IB, FB;
        if (DB === MB.e) WB && (uB = WB.name, IB = WB.amount, FB = WB.attributes);
        else if (KB) {
          var iB;
          uB = KB.name, mB = KB.icon, IB = null !== (iB = KB.amount) && void 0 !== iB ? iB : 0, FB = KB.attributes
        }
        const LB = null === (OB = FB) || void 0 === OB || null === (GB = OB.customAttributes) || void 0 === GB ? void 0 : GB.enchantmentTier,
          gB = (0, oB.f)(FB),
          {
            displayedAmt: rB,
            shown: XB
          } = pB(DB, IB, [RB, WB, AB]),
          wB = uB && XB,
          EB = void 0 !== SB && function(BB, OB) {
            const {
              enchantable: GB,
              salvageable: YB
            } = yB.gameBridge.latest("stationItems");
            return "Enchanting Table" === BB ? !0 === GB[OB] : "Salvaging Table" === BB && !0 === YB[OB]
          }(SB, uB);
        return (0, lB.jsxs)("div", {
          className: QB()("InvenItem", {
            Highlighted: wB && EB,
            Selected: nB,
            HotbarHighlighted: UB,
            HoverDisabled: fB
          }),
          onPointerEnter: () => {
            null === zB || void 0 === zB || zB(!0)
          },
          onPointerLeave: () => {
            null === zB || void 0 === zB || zB(!1)
          },
          onPointerDown: ZB,
          onPointerUp: NB,
          "data-inven-idx": DB,
          children: [wB && (0, lB.jsx)(jB.c, {
            itemName: null !== (YB = mB) && void 0 !== YB ? YB : uB,
            amount: rB,
            enchantmentTier: LB,
            bar: gB
          }), wB && dB && (0, lB.jsx)("div", {
            className: "InvenItemNewDot"
          }), kB && (0, lB.jsx)(qB, {
            idx: DB
          }), VB && !wB && (0, lB.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${VB})`
            }
          })]
        })
      }))
  },
  37198: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      e: () => DB
    });
    const YB = -1,
      DB = -2
  },
  37701: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => fB
    });
    var YB = GB(56),
      DB = GB(37706),
      QB = GB(2e3),
      oB = GB(627),
      jB = GB(25),
      yB = GB(1090),
      JB = GB.n(yB),
      MB = GB(37220),
      PB = GB(2879),
      zB = GB(3053),
      lB = GB(2912),
      pB = GB(2887),
      qB = GB(4050),
      ZB = GB(37223),
      NB = GB(16),
      RB = GB(2134),
      WB = GB(2554),
      AB = GB(1217),
      VB = GB(5396),
      SB = GB(2063),
      nB = GB(92),
      UB = GB(1282);
    const fB = (0, YB.memo)((function() {
      const BB = (0, DB.d)(),
        OB = (0, SB.g)("players"),
        GB = (0, SB.g)("lobbyLeaderboardRows"),
        jB = (0, SB.g)("hiddenPlayerNames"),
        yB = (0, YB.useRef)(null),
        [JB, MB] = (0, YB.useReducer)((BB => BB + 1), 0);
      return (0, YB.useEffect)((() => (0, RB.d)((() => {
        MB()
      }))), []), (0, UB.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, UB.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!BB) return (0, UB.jsx)(UB.Fragment, {});
            const YB = [...OB.ids],
              DB = {},
              JB = {};
            for (const BB of YB) {
              var MB, PB;
              DB[BB] = null === (MB = GB[BB]) || void 0 === MB ? void 0 : MB.colour;
              const OB = null === (PB = GB[BB]) || void 0 === PB ? void 0 : PB.values;
              OB && (JB[BB] = {
                ...OB
              })
            }
            const lB = Object.keys(BB);
            lB.sort(((OB, GB) => BB[OB].sortPriority - BB[GB].sortPriority)), YB.sort(((OB, GB) => {
              if (!JB[OB] || !JB[GB]) return 0;
              for (const YB of lB) {
                const DB = JB[OB][YB],
                  QB = JB[GB][YB];
                let oB = 0;
                if ("string" == typeof DB && "string" == typeof QB ? oB = DB.localeCompare(QB) : "number" == typeof DB && "number" == typeof QB ? oB = DB - QB : "number" == typeof DB && "string" == typeof QB ? oB = 1 : "string" == typeof DB && "number" == typeof QB && (oB = -1), oB) return oB * ("ascending" === BB[YB].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const BB of YB) {
              var pB, qB, ZB;
              const {
                name: YB,
                ranks: DB,
                cosmetics: QB
              } = OB.byId[BB], jB = [], yB = null !== (pB = null === (qB = GB[BB]) || void 0 === qB || null === (ZB = qB.tags) || void 0 === ZB ? void 0 : ZB.flatMap((BB => 0 === BB.length ? BB : [...BB, String.fromCharCode(8198)]))) && void 0 !== pB ? pB : [];
              jB.push(...yB), jB.push(...(0, AB.D)(DB, YB, (null === QB || void 0 === QB ? void 0 : QB.nameColour) === oB.b || null === QB || void 0 === QB ? void 0 : QB.nameColour)), JB[BB] ??= {}, JB[BB].name = jB
            }

            function NB(BB, GB) {
              if (JB[BB] && void 0 !== JB[BB][GB]) {
                if ("name" === GB) {
                  const {
                    name: YB,
                    cosmetics: DB
                  } = OB.byId[BB];
                  return (0, UB.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [DB && (0, UB.jsx)(WB.b, {
                      cosmetics: DB
                    }), " ", (0, UB.jsx)(QB.b, {
                      text: JB[BB][GB],
                      friendBadgeFor: (0, RB.h)(YB, jB) ? YB : void 0
                    })]
                  })
                }
                return (0, UB.jsx)(QB.b, {
                  text: JB[BB][GB]
                })
              }
              return ""
            }
            const SB = Object.keys(BB).filter((OB => !0 !== BB[OB].hidden)).map((OB => {
              var GB;
              return {
                key: OB,
                header: (0, UB.jsx)(QB.b, {
                  text: null !== (GB = BB[OB].displayName) && void 0 !== GB ? GB : ""
                })
              }
            }));
            return (0, UB.jsx)("div", {
              ref: yB,
              className: "LobbyLeaderboard",
              children: (0, UB.jsx)(VB.d, {
                columns: SB,
                rows: YB,
                getRowKey: BB => BB,
                renderRow: GB => {
                  const YB = GB !== OB.localId;
                  return (0, UB.jsx)(kB, {
                    playerId: GB,
                    playerName: OB.byId[GB].name,
                    isOtherPlayer: YB,
                    opensProfileCard: (0, zB.i)(YB, OB.byId[GB].name, jB),
                    lobbyLeaderboardInfo: BB,
                    getPlayerValue: NB,
                    playerColors: DB
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function kB(BB) {
      let {
        playerId: OB,
        playerName: GB,
        isOtherPlayer: DB,
        opensProfileCard: QB,
        lobbyLeaderboardInfo: oB,
        getPlayerValue: yB,
        playerColors: RB
      } = BB;
      const WB = (0, YB.useRef)(null);
      (0, YB.useEffect)((() => () => {
        PB.b.closeIfOwner(WB)
      }), []);
      const AB = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            jB.o.tM("OpenReportMenu", {
              playerEId: OB,
              playerName: GB,
              ty: null,
              serverChatMsgId: null
            })
          }
        },
        VB = () => ({
          ...(0, zB.g)(OB, GB),
          showLocation: !1,
          status: null,
          extraActions: [AB],
          moderationActions: null === GB ? [] : (0, ZB.b)(GB),
          friendRequestSource: "leaderboard"
        });
      return (0, UB.jsxs)("tr", {
        ref: WB,
        "data-pad-focusable": QB || void 0,
        [PB.c]: QB || void 0,
        onClick: QB ? () => {
          var BB;
          PB.b.toggle(WB, {
            ...VB(),
            anchor: null !== (BB = WB.current.querySelector(".PlayerPfpAndName")) && void 0 !== BB ? BB : WB.current
          })
        } : void 0,
        onContextMenu: QB ? BB => {
          (0, lB.c)(WB, BB, VB(), NB.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: QB ? BB => {
          (0, pB.d)(BB, (() => (0, zB.g)(OB, GB).playerSocialPreview))
        } : void 0,
        children: [Object.keys(oB).map((BB => !0 === oB[BB].hidden ? null : (0, UB.jsxs)("td", {
          className: JB()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !DB
          }),
          children: [(0, UB.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: yB(OB, BB)
          }), (0, UB.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: RB[OB]
            }
          })]
        }, BB))), DB && !QB && (0, UB.jsx)(MB.e, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: WB,
          options: [{
            icon: AB.icon,
            text: AB.text,
            onPointerDown: AB.onClick
          }, ...null === GB || nB.featureFlags.useSocialFeatures ? [] : (0, qB.b)(null, GB)]
        })]
      })
    }
  },
  37223: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB
    });
    var YB = GB(2050),
      DB = GB(2666),
      QB = GB(37229);
    const oB = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function jB(BB, OB) {
      return async () => function(BB, OB, GB) {
        return null === OB ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : OB.ok ? {
          message: {
            key: oB[BB.type]
          },
          next: GB
        } : {
          message: {
            fromServer: OB.message
          },
          next: null
        }
      }(BB, await (0, QB.i)(BB), OB())
    }

    function yB(BB) {
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
        run: jB({
          type: "ban",
          name: BB
        }, (() => function(BB) {
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
            run: jB({
              type: "unban",
              name: BB
            }, (() => null))
          }
        }(BB)))
      }
    }

    function JB(BB, OB) {
      if (null === BB) return [];
      const GB = [],
        YB = function(BB, OB) {
          var GB, YB;
          return null !== (GB = null !== (YB = BB.here.find((BB => BB.name === OB))) && void 0 !== YB ? YB : BB.away.find((BB => BB.name === OB))) && void 0 !== GB ? GB : null
        }(BB, OB);
      var QB, oB;
      return null !== YB && void 0 !== YB && YB.can.kick && GB.push((QB = OB, oB = YB.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: jB({
          type: "kick",
          name: QB
        }, (() => oB ? yB(QB) : null))
      })), null !== YB && void 0 !== YB && YB.can.ban && GB.push(yB(OB)), GB.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, DB.f)({
            page: "players",
            focusName: OB,
            source: "profile_card"
          })
        }
      }), GB
    }

    function MB(BB) {
      var OB;
      return JB(null !== (OB = YB.e.get("lobbyManage")) && void 0 !== OB ? OB : null, BB)
    }
  },
  37229: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => MB,
      i: () => yB
    });
    var YB = GB(1516),
      DB = GB(2050),
      QB = GB(2023);
    const oB = 1e4;
    let jB = 0;

    function yB(BB) {
      const OB = ++jB;
      return new Promise((GB => {
        const jB = OB => {
            yB(), clearTimeout(JB), !1 === (null === OB || void 0 === OB ? void 0 : OB.ok) && (0, YB.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: BB.type
            }), GB(OB)
          },
          yB = DB.e.subscribe("lobbyManage", (BB => {
            const GB = function(BB, OB) {
              var GB;
              return null !== (GB = null === BB || void 0 === BB ? void 0 : BB.results.find((BB => BB.requestId === OB))) && void 0 !== GB ? GB : null
            }(BB, OB);
            null !== GB && jB(GB)
          })),
          JB = setTimeout((() => {
            jB(null)
          }), oB);
        QB.gameBridge.send("lobbyManage", {
          ...BB,
          requestId: OB
        })
      }))
    }
    const JB = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class MB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yB;
        this.onChange = BB, this.sendAction = OB, this.pending = new Map, this.statuses = new Map
      }
      send(BB, OB, GB) {
        var YB;
        return this.statuses.delete(OB), this.pending.set(OB, (null !== (YB = this.pending.get(OB)) && void 0 !== YB ? YB : 0) + 1), this.sendAction(BB).then((BB => {
          var YB;
          const DB = null !== BB && void 0 !== BB ? BB : {
              requestId: -1,
              ok: !1,
              message: JB
            },
            QB = (null !== (YB = this.pending.get(OB)) && void 0 !== YB ? YB : 1) - 1;
          QB > 0 ? this.pending.set(OB, QB) : this.pending.delete(OB);
          const oB = !DB.ok || DB.message.length > 0 ? DB.message : null === GB ? null : [GB];
          return null !== oB && this.statuses.set(OB, {
            ok: DB.ok,
            text: oB,
            until: Date.now() + 4e3
          }), this.onChange(), DB
        }))
      }
      show(BB, OB) {
        this.statuses.set(BB, {
          ...OB,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(BB) {
        for (const [OB, GB] of this.statuses) GB.until <= BB && this.statuses.delete(OB)
      }
      nextDeadline() {
        let BB = null;
        for (const GB of this.statuses.values()) {
          var OB;
          BB = Math.min(null !== (OB = BB) && void 0 !== OB ? OB : 1 / 0, GB.until)
        }
        return BB
      }
      statusOf(BB, OB) {
        const GB = this.statuses.get(BB);
        return !GB || GB.until <= OB ? null : {
          ok: GB.ok,
          text: GB.text
        }
      }
      isPending(BB) {
        return this.pending.has(BB)
      }
    }
  },
  5261: (BB, OB, GB) => {
    GB.d(OB, {
      f: () => RB,
      b: () => NB
    });
    var YB = GB(56),
      DB = GB(1480),
      QB = GB(2e3),
      oB = GB(5266),
      jB = GB(1282);
    const yB = (0, YB.memo)((function(BB) {
      let {
        initialParameters: OB
      } = BB;
      const GB = (0, YB.useRef)(null),
        DB = (0, YB.useRef)(null),
        yB = (0, YB.useRef)(0),
        JB = (0, YB.useRef)(null),
        MB = OB.description,
        PB = OB.EO,
        {
          scale: zB,
          rotation: lB
        } = null !== OB && void 0 !== OB ? OB : {},
        pB = (0, oB.f)();
      return (0, YB.useEffect)((() => {
        const BB = pB.onFrame((() => {
          const BB = pB.getState();
          if (!BB.isActive || !GB.current || !DB.current) return;
          const OB = BB.state;
          if (GB.current.value = OB.progress, OB.clickCount > yB.current) {
            yB.current = OB.clickCount;
            const BB = DB.current;
            BB.classList.add("pulse"), JB.current = setTimeout((() => {
              BB.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(JB.current), BB()
        }
      }), [pB]), (0, jB.jsx)(jB.Fragment, {
        children: (0, jB.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== zB && {
              "--scale": zB
            },
            ...null !== lB && {
              "--rotation": `${lB}deg`
            }
          },
          children: [(0, jB.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: GB
          }), (0, jB.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: DB,
            children: (0, jB.jsx)(QB.b, {
              text: [{
                icon: PB
              }]
            })
          }), (0, jB.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, jB.jsx)(QB.b, {
              text: MB
            })
          })]
        })
      })
    }));
    var JB = GB(1090),
      MB = GB.n(JB);
    const PB = 2 * Math.PI * 90,
      zB = (0, YB.memo)((function(BB) {
        let {
          initialParameters: OB
        } = BB;
        const GB = (0, YB.useRef)(null),
          DB = (0, YB.useRef)(null),
          yB = (0, YB.useRef)(null),
          JB = OB.label,
          zB = OB.icon,
          lB = OB.aO,
          {
            scale: pB,
            rotation: qB,
            eO: ZB
          } = null !== OB && void 0 !== OB ? OB : {},
          NB = (0, oB.f)();
        return (0, YB.useEffect)((() => {
          const BB = NB.onFrame((() => {
            var BB, OB;
            const YB = NB.getState();
            if (!YB.isActive || !DB.current) return;
            const QB = YB.state,
              oB = null !== (BB = QB.timeRemaining) && void 0 !== BB ? BB : 0,
              jB = null !== (OB = QB.hO) && void 0 !== OB ? OB : 1,
              JB = PB * (1 - oB / jB);
            DB.current.style.strokeDashoffset = `${JB}`, GB.current && (GB.current.style.opacity = oB > 0 ? "1" : "0"), yB.current && lB && (yB.current.textContent = `${(oB/1e3).toFixed(1)}s`)
          }));
          return () => {
            BB()
          }
        }), [NB, lB]), (0, jB.jsxs)("div", {
          className: "QTETimedClick",
          ref: GB,
          style: {
            ...null !== pB && {
              "--scale": pB
            },
            ...null !== qB && {
              "--rotation": `${qB}deg`
            }
          },
          children: [(0, jB.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, jB.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, jB.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, jB.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: PB,
                ref: DB
              })]
            }), (0, jB.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, jB.jsx)(QB.b, {
                text: [{
                  icon: zB
                }],
                className: MB()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: ZB
                })
              })
            })]
          }), (0, jB.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, jB.jsx)(QB.b, {
              text: JB,
              className: "QTETimedClickLabelText"
            }), lB && (0, jB.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: yB
            })]
          })]
        })
      })),
      lB = (0, YB.memo)((function(BB) {
        let {
          initialParameters: OB
        } = BB;
        const GB = (0, YB.useRef)(null),
          DB = (0, YB.useRef)(null),
          yB = (0, YB.useRef)(null),
          JB = (0, YB.useRef)(!1),
          MB = OB.description,
          PB = null === OB || void 0 === OB ? void 0 : OB.icon,
          zB = (0, oB.f)();
        return (0, YB.useEffect)((() => {
          const BB = zB.onFrame((() => {
            const BB = zB.getState();
            if (!BB.isActive) return;
            const OB = BB.state;
            if (GB.current) {
              const BB = 100 * (OB.catchZonePosition - OB.CO / 2);
              GB.current.style.left = `${BB}%`, GB.current.style.width = 100 * OB.CO + "%", OB.isCatching !== JB.current && (JB.current = OB.isCatching, OB.isCatching ? GB.current.classList.add("catching") : GB.current.classList.remove("catching"))
            }
            DB.current && (DB.current.style.left = 100 * OB.moverPosition + "%"), yB.current && (yB.current.value = OB.progress)
          }));
          return () => {
            BB()
          }
        }), [zB]), (0, jB.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, jB.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, jB.jsx)(QB.b, {
              text: MB
            })
          }), (0, jB.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: yB
          }), (0, jB.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, jB.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: GB
            }), (0, jB.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: DB,
              children: (0, jB.jsx)("span", {
                children: PB && (0, jB.jsx)(QB.b, {
                  text: [{
                    icon: PB,
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
    var pB = GB(641);
    const qB = (0, YB.memo)((function(BB) {
        let {
          initialParameters: OB
        } = BB;
        const GB = (0, YB.useRef)(null),
          DB = OB.label,
          yB = OB.GG,
          {
            icon: JB,
            scale: MB,
            rotation: PB
          } = null !== OB && void 0 !== OB ? OB : {},
          zB = 100 * (.5 - yB / 2),
          lB = 100 * yB,
          qB = (0, oB.f)();
        return (0, YB.useEffect)((() => {
          const BB = qB.onFrame((() => {
            const BB = qB.getState();
            if (!BB.isActive || !GB.current) return;
            const OB = BB.state;
            GB.current.style.left = 100 * OB.markerPosition + "%"
          }));
          return () => {
            BB()
          }
        }), [qB]), (0, jB.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, pB.Q)(MB) && {
              "--scale": MB
            },
            ...!(0, pB.Q)(PB) && {
              "--rotation": `${PB}deg`
            }
          },
          children: [JB && (0, jB.jsx)(QB.b, {
            text: [{
              icon: JB
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, jB.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, jB.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${zB}%`,
                width: `${lB}%`
              }
            }), (0, jB.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: GB
            })]
          }), (0, jB.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, jB.jsx)(QB.b, {
              text: DB
            })
          })]
        })
      })),
      ZB = (0, YB.memo)((function(BB) {
        let {
          initialParameters: OB
        } = BB;
        const GB = (0, YB.useRef)(null),
          [DB, yB] = (0, YB.useState)((() => new Array(OB.DG).fill("pending"))),
          [JB, MB] = (0, YB.useState)((() => {
            const BB = OB.jG;
            return (0, pB.Q)(BB) || BB <= 0 ? [] : new Array(BB).fill("pending")
          })),
          PB = OB.label,
          {
            icon: zB
          } = OB,
          lB = (0, YB.useRef)(0),
          qB = (0, YB.useRef)(0),
          ZB = (0, YB.useRef)([]),
          NB = (0, oB.f)();
        return (0, YB.useEffect)((() => {
          const BB = NB.onFrame((() => {
            const BB = NB.getState();
            if (!BB.isActive || !GB.current) return;
            const OB = BB.state,
              YB = 30 + 60 * OB.outerCircleProgress;
            if (GB.current.setAttribute("r", String(YB)), !0 === OB.lastClickResult && OB.successes > lB.current) {
              GB.current.classList.remove("QTERhythmClickOuterCircle--miss"), GB.current.classList.add("QTERhythmClickOuterCircle--hit");
              const BB = setTimeout((() => {
                var BB;
                null === (BB = GB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              ZB.current.push(BB)
            } else if (!1 === OB.lastClickResult && OB.misses > qB.current) {
              GB.current.classList.remove("QTERhythmClickOuterCircle--hit"), GB.current.classList.add("QTERhythmClickOuterCircle--miss");
              const BB = setTimeout((() => {
                var BB;
                null === (BB = GB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              ZB.current.push(BB)
            }
            OB.successes === lB.current && OB.misses === qB.current || (lB.current = OB.successes, qB.current = OB.misses, yB((BB => {
              const GB = [...BB];
              for (let YB = 0; YB < OB.DG; YB++) GB[YB] = YB < OB.successes ? "success" : "pending";
              return GB
            })), MB((BB => {
              if (0 === BB.length) return BB;
              const GB = [...BB];
              for (let YB = 0; YB < GB.length; YB++) GB[YB] = YB < OB.misses ? "miss" : "pending";
              return GB
            })))
          }));
          return () => {
            BB();
            for (const BB of ZB.current) clearTimeout(BB);
            ZB.current = []
          }
        }), [NB]), (0, jB.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, jB.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: DB.map(((BB, OB) => (0, jB.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === BB ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, OB)))
          }), (0, jB.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, jB.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, jB.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, jB.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: GB
              })]
            }), zB && (0, jB.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, jB.jsx)(QB.b, {
                text: [{
                  icon: zB
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), JB.length > 0 && (0, jB.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: JB.map(((BB, OB) => (0, jB.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === BB ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, OB)))
          }), (0, jB.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, jB.jsx)(QB.b, {
              text: PB
            })
          })]
        })
      }));

    function NB(BB) {
      let {
        qte: OB
      } = BB;
      switch (OB.type) {
        case "progressBar":
          return (0, jB.jsx)(yB, {
            initialParameters: OB.parameters
          });
        case "timedClick":
          return (0, jB.jsx)(zB, {
            initialParameters: OB.parameters
          });
        case "gravityBar":
          return (0, jB.jsx)(lB, {
            initialParameters: OB.parameters
          });
        case "precisionBar":
          return (0, jB.jsx)(qB, {
            initialParameters: OB.parameters
          });
        case "rhythmClick":
          return (0, jB.jsx)(ZB, {
            initialParameters: OB.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const RB = (0, YB.memo)((function() {
      const [BB, OB] = (0, YB.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, DB.f)("qteStateUpdated", (BB => {
        OB(BB)
      })), BB.isActive && BB.type ? (0, jB.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, jB.jsx)(NB, {
          qte: BB
        })
      }) : null
    }))
  },
  5266: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      f: () => yB
    });
    var YB = GB(56),
      DB = GB(1299),
      QB = GB(5269);
    const oB = {
        getState: () => QB.d.getCurrentState(),
        onFrame: DB.q
      },
      jB = (0, YB.createContext)(oB);

    function yB() {
      return (0, YB.useContext)(jB)
    }
  },
  37041: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      f: () => zB
    });
    var YB = GB(56),
      DB = GB(1400),
      QB = GB(1175),
      oB = GB(1375),
      jB = GB(3926),
      yB = GB(5414),
      JB = GB(1282);

    function MB(BB) {
      let {
        loading: OB,
        schematics: GB,
        onSchematicPicked: YB,
        selectedSchematicIdList: DB = [],
        disableAutoExport: yB
      } = BB;
      const {
        t: MB
      } = (0, QB.H)();
      return (0, JB.jsxs)("div", {
        className: "SchematicList",
        children: [OB && (0, JB.jsx)(oB.b, {}), !OB && 0 === GB.length && (0, JB.jsx)("div", {
          className: "NoSchematicsText",
          children: MB("worldBuilder:noSavedSchematic")
        }), !OB && GB.map((BB => (0, JB.jsx)(jB.h, {
          source: {
            type: "schematic",
            schematic: BB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            YB(BB)
          },
          isSelected: DB.includes(BB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: BB.isAutoExported && yB,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, BB.schematicId)))]
      })
    }

    function PB(BB) {
      let {
        ownedSchematics: OB,
        currentWorldSchematicId: GB,
        onClose: DB
      } = BB;
      const {
        t: oB
      } = (0, QB.H)(), [jB, PB] = (0, YB.useState)(null);
      return (0, JB.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === jB && (0, JB.jsxs)(JB.Fragment, {
          children: [(0, JB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: oB("worldBuilder:schematicList")
          }), (0, JB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: oB("worldBuilder:clickSchematicForOptions")
          }), (0, JB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, JB.jsx)(MB, {
              loading: !1,
              schematics: OB,
              onSchematicPicked: BB => {
                PB(BB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== jB && (0, JB.jsx)(yB.k, {
          schematic: jB,
          inSourceWorld: jB.schematicId === GB,
          onSchematicUpdate: BB => {
            PB(BB)
          },
          onClose: () => {
            PB(null), DB()
          }
        })]
      })
    }

    function zB(BB) {
      let {
        ownedSchematics: OB,
        currentWorldSchematicId: GB,
        onClose: YB
      } = BB;
      DB.NotificationProvider.showCustomPopup({
        body: BB => (0, JB.jsx)(PB, {
          ownedSchematics: OB,
          currentWorldSchematicId: GB,
          onClose: BB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: YB,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37619: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => VB,
      f: () => AB
    });
    var YB = GB(4662),
      DB = GB(1480),
      QB = GB(56),
      oB = GB(6991),
      jB = GB(4649),
      yB = GB(1293),
      JB = GB(2023),
      MB = GB(2e3),
      PB = GB(1485),
      zB = GB(1175),
      lB = GB(37627),
      pB = GB(1090),
      qB = GB.n(pB),
      ZB = GB(1338),
      NB = GB(1383),
      RB = GB(1268),
      WB = GB(1282);
    const AB = "SleepingOverlay";

    function VB() {
      const {
        t: BB
      } = (0, zB.H)(), [OB, GB] = (0, QB.useState)(!1), [pB, VB] = (0, QB.useState)(null), [nB, UB] = (0, QB.useState)(1), [fB, kB] = (0, QB.useState)(!1), [dB, KB] = (0, QB.useState)(!1), uB = (0, QB.useRef)(0), mB = (0, QB.useRef)(!1), IB = (0, QB.useRef)(!1), FB = (0, QB.useRef)(), iB = (0, QB.useRef)(null);

      function LB() {
        const BB = null !== pB && void 0 !== pB ? pB : "Rested Speed";
        JB.gameBridge.send("wakeUp", dB ? BB : null), iB.current = null, GB(!1), VB(null), UB(1), kB(!1), KB(!1)
      }

      function gB() {
        return !fB && (LB(), !0)
      }
      return (0, DB.f)("PlayerPhysicsTypeUpdate", (BB => {
        BB !== iB.current && (iB.current = BB, BB === oB.o.SLEEPING ? (IB.current || (uB.current = JB.gameBridge.lookup("cameraZoom", null), IB.current = !0), mB.current = !0, JB.gameBridge.send("setCameraZoom", 3), GB(!0), UB(function() {
          for (const BB of JB.gameBridge.lookup("blocksStandingOn", null)) {
            if (lB.d.leafBeds.includes(BB)) return console.log(`Found leaf bed: ${BB}`), 1;
            if (lB.d.woolBeds.includes(BB)) return console.log(`Found woold bed: ${BB}`), 2;
            if (lB.d.strongBeds.includes(BB)) return console.log(`Found strong bed ${BB}`), 3
          }
          return 1
        }())) : (IB.current = !1, GB(!1), VB(null), UB(1)))
      })), (0, QB.useEffect)((() => () => {
        (0, yB.o)(AB)
      }), []), (0, QB.useEffect)((() => {
        OB ? (0, yB.p)(AB) : ((0, yB.o)(AB), mB.current && (JB.gameBridge.send("setCameraZoom", uB.current), mB.current = !1))
      }), [OB]), (0, RB.v)("overlay", FB, gB, OB), (0, WB.jsx)(YB.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: OB,
        timeout: 300,
        nodeRef: FB,
        unmountOnExit: !0,
        children: (0, WB.jsx)("div", {
          ref: FB,
          onClick: BB => {
            gB() && BB.stopPropagation()
          },
          children: (0, WB.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, WB.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: jB.i.map((OB => (0, WB.jsxs)(SB, {
                restedEffect: OB,
                fJ: pB,
                setChosenRestedEffect: VB,
                children: [(0, WB.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, WB.jsx)(MB.b, {
                    text: [{
                      icon: OB
                    }]
                  }), jB.e[OB].shortName]
                }), (0, WB.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: BB(jB.e[OB].description, {
                    time: jB.e[OB].effectLevelDurations[nB] / 6e4
                  })
                })]
              }, OB)))
            }), (0, WB.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, WB.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, WB.jsxs)(PB.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: BB => {
                  dB ? LB() : (kB(!0), (0, ZB.V)((() => {
                    kB(!1), KB(!0)
                  }), !0)), BB.stopPropagation()
                },
                loading: fB,
                children: [!dB && (0, WB.jsxs)(WB.Fragment, {
                  children: [(0, WB.jsx)(NB.b, {
                    name: "film"
                  }), " ", BB("classicGame:watchAdToGetRestedPerk")]
                }), dB && BB("classicGame:wakeUp")]
              }), (0, WB.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, WB.jsx)("div", {
                  className: qB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === nB
                  }),
                  children: (0, WB.jsx)(MB.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, WB.jsx)("div", {
                  className: qB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === nB
                  }),
                  children: (0, WB.jsx)(MB.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, WB.jsx)("div", {
                  className: qB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === nB
                  }),
                  children: (0, WB.jsx)(MB.b, {
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
    const SB = (0, QB.memo)((function(BB) {
      let {
        children: OB,
        restedEffect: GB,
        fJ: YB,
        setChosenRestedEffect: DB
      } = BB;
      return GB === YB ? (0, WB.jsx)(PB.q, {
        onClick: BB => {
          BB.stopPropagation()
        },
        children: OB
      }) : (0, WB.jsx)(PB.j, {
        onClick: BB => {
          DB(GB), BB.stopPropagation()
        },
        children: OB
      })
    }))
  },
  5396: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(1282);

    function jB(BB) {
      let {
        columns: OB,
        rows: GB,
        getRowKey: DB,
        renderRow: jB,
        className: yB
      } = BB;
      return (0, oB.jsxs)("table", {
        className: QB()("Table", yB),
        children: [(0, oB.jsx)("thead", {
          children: (0, oB.jsx)("tr", {
            children: OB.map((BB => (0, oB.jsx)("th", {
              children: BB.header
            }, BB.key)))
          })
        }), (0, oB.jsx)("tbody", {
          children: GB.map((BB => (0, oB.jsx)(YB.Fragment, {
            children: jB(BB)
          }, DB(BB))))
        })]
      })
    }
  },
  37367: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      i: () => oB,
      k: () => jB,
      n: () => yB
    });
    var YB = GB(56),
      DB = GB(3528);
    const QB = 8,
      oB = "InGameHeaderContainer",
      jB = "TopRightElements";

    function yB(BB) {
      const [OB] = (0, DB.e)(), [GB, yB] = (0, YB.useState)(!1);
      return (0, YB.useLayoutEffect)((() => {
        if (!BB) return;
        const OB = document.querySelector(`.${oB}`),
          GB = document.querySelector(`.${jB}`),
          YB = () => {
            const YB = BB.getBoundingClientRect(),
              DB = OB ? OB.getBoundingClientRect().right : 0,
              oB = GB ? GB.getBoundingClientRect().left : window.innerWidth,
              jB = YB.left < DB + QB,
              JB = YB.right > oB - QB;
            yB(jB || JB)
          };
        YB();
        const DB = new ResizeObserver(YB);
        return DB.observe(BB), OB && DB.observe(OB), GB && DB.observe(GB), () => {
          DB.disconnect()
        }
      }), [BB, OB]), GB
    }
  },
  37421: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => PB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(1735),
      jB = GB(1485),
      yB = GB(1375),
      JB = GB(1383),
      MB = GB(1282);

    function PB(BB) {
      let {
        label: OB,
        icon: GB,
        placeholder: DB,
        onSubmit: PB
      } = BB;
      const zB = (0, YB.useRef)(null),
        [lB, pB] = (0, YB.useState)(""),
        [qB, ZB] = (0, YB.useState)("Enter"),
        [NB, RB] = (0, YB.useState)(null);
      (0, YB.useEffect)((() => {
        if ("Success" !== qB && "Error" !== qB) return;
        const BB = setTimeout((() => {
          "Success" === qB && zB.current && (zB.current.value = "", pB("")), ZB("Enter")
        }), "Success" === qB ? 1e3 : 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [qB]);
      const WB = () => {
        const BB = lB.trim();
        "" !== BB && "Enter" === qB && (ZB("Loading"), PB(BB).then((BB => {
          zB.current && ("error" in BB ? null === BB.error ? ZB("Enter") : (RB(BB.error), ZB("Error")) : ZB("Success"))
        })))
      };
      return (0, MB.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: BB => {
          BB.target === zB.current && "Escape" !== BB.key && BB.stopPropagation()
        },
        children: [(0, MB.jsxs)("div", {
          className: QB()("AddFriendBodyOverlay", `AddFriendBodyOverlay${qB}`),
          children: ["Loading" === qB && (0, MB.jsx)(yB.b, {}), "Success" === qB && (0, MB.jsx)(JB.b, {
            name: "check"
          }), "Error" === qB && NB]
        }), (0, MB.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, MB.jsx)(oB.b, {
            className: "PlayerSearchInput",
            domRef: zB,
            maxLength: 32,
            placeholderText: DB,
            ariaLabel: DB,
            stopPropagation: !1,
            onValueChange: BB => {
              pB(BB)
            },
            onEnter: WB
          }), (0, MB.jsxs)(jB.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== qB || "" === lB.trim(),
            onClick: WB,
            children: [(0, MB.jsx)(JB.b, {
              name: GB
            }), " ", OB]
          })]
        })]
      })
    }
  },
  37407: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => PB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(1175),
      jB = GB(1383),
      yB = GB(1282);
    const JB = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      MB = ["unlisted", "public", "whitelist", "private"];

    function PB(BB) {
      let {
        visibility: OB,
        onPick: GB
      } = BB;
      const {
        t: DB
      } = (0, oB.H)(), PB = (0, YB.useRef)([]);
      return (0, yB.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": DB("worldSocial:whoCanJoin"),
        children: MB.map(((BB, YB) => {
          const oB = BB === OB;
          return (0, yB.jsxs)("button", {
            ref: BB => {
              PB.current[YB] = BB
            },
            type: "button",
            className: QB()("WorldSocialTile", {
              WorldSocialTileSelected: oB
            }),
            "aria-pressed": oB,
            tabIndex: oB ? 0 : -1,
            onKeyDown: BB => {
              ((BB, OB) => {
                const GB = "ArrowRight" === BB.key || "ArrowDown" === BB.key ? 1 : "ArrowLeft" === BB.key || "ArrowUp" === BB.key ? -1 : 0;
                var YB;
                0 !== GB && (BB.preventDefault(), null === (YB = PB.current[(OB + GB + MB.length) % MB.length]) || void 0 === YB || YB.focus())
              })(BB, YB)
            },
            onClick: () => {
              GB(BB)
            },
            children: [(0, yB.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, yB.jsx)(jB.b, {
                name: JB[BB]
              })
            }), (0, yB.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, yB.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: DB(`worldSocial:${BB}`)
              }), (0, yB.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: DB(`worldSocial:${BB}Description`)
              })]
            })]
          }, BB)
        }))
      })
    }
  },
  37418: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB
    });
    var YB = GB(1175),
      DB = GB(2928),
      QB = GB(4777),
      oB = GB(1282);

    function jB(BB) {
      let {
        kP: OB,
        children: GB,
        ...jB
      } = BB;
      const {
        t: yB
      } = (0, YB.H)();
      return (0, oB.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          OB.onChange(!OB.on)
        },
        children: (0, oB.jsx)(DB.e, {
          ...jB,
          opensProfileCard: !1,
          children: (0, oB.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: BB => {
              BB.stopPropagation()
            },
            children: [GB, (0, oB.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, oB.jsx)(QB.e, {
                checked: OB.on,
                disabled: !1,
                ariaLabel: yB("worldSocial:letJoin", {
                  playerName: jB.playerSocialPreview.name
                }),
                onChange: BB => {
                  OB.onChange(BB.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37398: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => pB
    });
    var YB = GB(56),
      DB = GB(1175),
      QB = GB(1964),
      oB = GB(92),
      jB = GB(16),
      yB = GB(1516),
      JB = GB(2953),
      MB = GB(34693),
      PB = GB(1485),
      zB = GB(1383),
      lB = GB(1282);

    function pB(BB) {
      let {
        worldCode: OB,
        message: GB
      } = BB;
      const {
        t: pB
      } = (0, DB.H)(), {
        isTouchScreen: qB
      } = (0, jB.o)(["isTouchScreen"]), ZB = oB.featureFlags.canUseInviteLinks, NB = (0, MB.i)(ZB && null === GB), [RB, WB] = (0, JB.j)(), AB = (0, YB.useRef)(null);
      if (null !== GB) return (0, lB.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, lB.jsx)(zB.b, {
          name: "lock"
        }), (0, lB.jsx)("span", {
          children: GB
        })]
      });
      const VB = ZB ? NB : OB,
        SB = qB && ZB && (0, JB.e)();
      return (0, lB.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!ZB && (0, lB.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: pB("worldSocial:worldCode")
        }), (0, lB.jsx)("input", {
          ref: AB,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== VB && void 0 !== VB ? VB : "",
          "aria-label": pB(ZB ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: BB => {
            BB.currentTarget.select()
          }
        }), (0, lB.jsxs)(PB.f, {
          className: "WorldSocialCopy",
          disabled: null === VB,
          onClick: () => {
            null !== VB && (0, JB.h)(VB, {
              useShareSheet: SB,
              onOutcome: BB => {
                if ((0, yB.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== BB || ZB ? BB : "code"
                  }), "copied" === BB) WB();
                else if ("failed" === BB) {
                  var OB;
                  null === (OB = AB.current) || void 0 === OB || OB.focus(), QB.d.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, lB.jsx)(zB.b, {
            name: RB ? "check" : SB ? "up-from-bracket" : "copy"
          }), " ", pB(RB ? "general:copied" : SB ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37414: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => lB,
      e: () => zB,
      i: () => PB
    });
    var YB = GB(627),
      DB = GB(1175),
      QB = GB(1705),
      oB = GB(2928),
      jB = GB(2874),
      yB = GB(1485),
      JB = GB(37418),
      MB = GB(1282);

    function PB(BB, OB) {
      var GB;
      return {
        isError: !1,
        name: BB,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== OB && void 0 !== OB ? OB : {},
        nameColour: null !== (GB = null === OB || void 0 === OB ? void 0 : OB.nameColour) && void 0 !== GB ? GB : YB.b,
        location: {
          status: "offline"
        }
      }
    }

    function zB(BB) {
      let {
        player: OB,
        isFriend: GB = !1,
        status: YB,
        showLocation: yB = void 0 === YB,
        kP: PB,
        onSendFriendRequest: zB,
        actions: lB,
        zIndex: pB
      } = BB;
      const {
        t: qB
      } = (0, DB.H)();
      let ZB = YB;
      null !== PB && void 0 !== PB && PB.on && (ZB = (0, MB.jsxs)(MB.Fragment, {
        children: [null !== YB && void 0 !== YB ? YB : (0, MB.jsx)(jB.e, {
          socialPreview: OB
        }), (0, MB.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", qB("worldSocial:canJoin")]
        })]
      }));
      const NB = {
        playerSocialPreview: OB,
        isFriend: GB,
        hideFriendBadge: !0,
        onFriendRemoved: GB ? BB => {
          QB.b.removeFriendFromState(BB)
        } : void 0,
        status: ZB,
        showLocation: yB,
        onSendFriendRequest: zB,
        zIndex: pB
      };
      return PB ? (0, MB.jsx)(JB.d, {
        ...NB,
        kP: PB,
        children: lB
      }) : (0, MB.jsx)(oB.e, {
        ...NB,
        opensProfileCard: !1,
        children: lB || void 0
      })
    }

    function lB(BB) {
      let {
        row: OB,
        kP: GB,
        canInvite: YB,
        invited: QB,
        onInvite: oB,
        zIndex: jB
      } = BB;
      const {
        t: JB
      } = (0, DB.H)(), PB = "online" === OB.place ? yB.f : yB.j;
      return (0, MB.jsx)(zB, {
        player: OB.friend,
        isFriend: !0,
        status: "here" === OB.place ? JB("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        kP: GB,
        zIndex: jB,
        actions: YB && (0, MB.jsx)(PB, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: QB,
          onClick: oB,
          ariaLabel: `${JB("worldSocial:invite")} ${OB.friend.name}`,
          children: JB(QB ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37386: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB,
      g: () => oB,
      k: () => JB
    });
    var YB = GB(56),
      DB = GB(5011),
      QB = GB(1964);

    function oB(BB) {
      const OB = {
        lobbyName: BB,
        answer: null,
        response: DB.c.getSocialSettings(BB)
      };
      return OB.response.then((BB => {
        OB.answer = BB
      })), OB
    }
    const jB = new Map;

    function yB(BB) {
      jB.set(BB.lobbyName, BB)
    }

    function JB(BB) {
      const [OB] = (0, YB.useState)((() => function(BB) {
        var OB;
        const GB = null !== (OB = jB.get(BB)) && void 0 !== OB ? OB : null;
        return null !== GB && void 0 !== GB && GB.answer && "error" in GB.answer ? null : GB
      }(BB))), [GB, oB] = (0, YB.useState)((() => null !== OB && void 0 !== OB && OB.answer && "settings" in OB.answer ? OB.answer.settings : null)), [yB, JB] = (0, YB.useState)(!0), [MB, PB] = (0, YB.useState)(null !== GB), zB = (0, YB.useRef)(GB);
      zB.current = GB;
      const lB = (0, YB.useRef)(0),
        pB = (0, YB.useRef)(0),
        qB = (0, YB.useRef)(!1),
        ZB = (0, YB.useRef)(!0),
        NB = (0, YB.useCallback)((async OB => {
          const GB = ++lB.current,
            YB = await (null !== OB && void 0 !== OB ? OB : DB.c.getSocialSettings(BB));
          ZB.current && GB === lB.current && (PB(!0), JB(!1), "error" in YB || oB(YB.settings))
        }), [BB]),
        RB = (0, YB.useCallback)((() => {
          JB(!0), NB()
        }), [NB]),
        WB = (0, YB.useCallback)((() => {
          pB.current > 0 ? qB.current = !0 : NB()
        }), [NB]);
      (0, YB.useEffect)((() => (ZB.current = !0, jB.delete(BB), JB(!0), NB(null === OB || void 0 === OB ? void 0 : OB.response), () => {
        ZB.current = !1
      })), [NB, BB, OB]);
      const AB = BB => {
        lB.current++, JB(!1), zB.current = BB, oB(BB)
      };
      return {
        settings: GB,
        loading: yB,
        answered: MB,
        retry: RB,
        refresh: WB,
        change: async function(OB, GB) {
          let {
            quiet: YB = !1,
            onAnswer: oB
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const jB = zB.current;
          if (null === jB) return !1;
          AB(GB(jB)), pB.current > 0 && (qB.current = !0), pB.current++;
          const yB = await DB.c.setSocialSettings(BB, OB);
          pB.current--;
          const JB = !("error" in yB);
          if (!ZB.current) return JB;
          if (null === oB || void 0 === oB || oB(yB), YB);
          else if ("error" in yB) QB.d.showMessage({
            translationKey: yB.error
          });
          else
            for (const BB of yB.notFound) QB.d.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: BB
              }
            });
          if (pB.current > 0) return JB;
          const MB = qB.current;
          return qB.current = !1, !MB && "settings" in yB ? AB(yB.settings) : (MB || AB(jB), NB()), JB
        }
      }
    }
  },
  37426: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      e: () => QB
    });
    var YB = GB(162);
    const DB = new Map;

    function QB(BB, OB) {
      var GB;
      const YB = null !== (GB = DB.get(BB)) && void 0 !== GB ? GB : new Map;
      YB.set(OB, Date.now()), DB.set(BB, YB)
    }

    function oB(BB) {
      const OB = DB.get(BB);
      if (!OB) return [];
      const GB = Date.now();
      for (const [DB, QB] of OB) GB - QB >= YB.r && OB.delete(DB);
      return [...OB.keys()]
    }
  },
  37394: (BB, OB, GB) => {
    function YB(BB, OB) {
      const GB = OB.toLowerCase();
      for (const YB of BB)
        if (YB.toLowerCase() === GB) return !0;
      return !1
    }

    function DB(BB, OB, GB) {
      const DB = [],
        QB = [],
        oB = [];
      for (const jB of BB) !jB.isError && jB.name && ("inGame" === jB.location.status && jB.location.inLobbyName === OB || YB(GB, jB.name) ? QB.push({
        friend: jB,
        place: "here"
      }) : "offline" === jB.location.status ? oB.push({
        friend: jB,
        place: "offline"
      }) : DB.push({
        friend: jB,
        place: "online"
      }));
      return [...DB, ...QB, ...oB]
    }

    function QB(BB, OB, GB) {
      const DB = [],
        QB = BB.flatMap((BB => "here" === BB.place ? [BB.friend.name] : []));
      for (const oB of [...QB, ...OB]) YB(DB, oB) || YB(GB, oB) || DB.push(oB);
      return DB
    }

    function oB(BB, OB) {
      return null === BB || void 0 === BB || !BB.canManage || YB(BB.whitelist, OB) ? "none" : "whitelist" === BB.visibility ? "required" : "quiet"
    }

    function jB(BB) {
      if (null === BB) return !0;
      const {
        visibility: OB
      } = BB;
      return "public" === OB || "unlisted" === OB || "whitelist" === OB && BB.canManage
    }

    function yB(BB, OB, GB) {
      if (GB) {
        const GB = OB.filter((OB => !YB(BB.whitelist, OB)));
        return {
          ...BB,
          whitelist: [...BB.whitelist, ...GB]
        }
      }
      return {
        ...BB,
        whitelist: BB.whitelist.filter((BB => !YB(OB, BB)))
      }
    }

    function JB(BB, OB) {
      const GB = [];
      for (let YB = 0; YB < BB.length; YB += OB) GB.push(BB.slice(YB, YB + OB));
      return GB
    }
    GB.d(OB, {
      e: () => jB,
      h: () => QB,
      j: () => DB,
      l: () => YB,
      m: () => JB,
      o: () => oB,
      s: () => yB
    })
  },
  9414: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      e: () => QB
    });
    var YB = GB(2098);
    const DB = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      QB = BB => "string" === typeof BB.icon && "" !== BB.icon && "string" === typeof BB.keycode && DB.test(BB.keycode),
      oB = BB => "Space" === BB ? "_" : YB.h[BB]
  },
  9460: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(16);

    function DB() {
      return !YB.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9469: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => zB,
      C: () => lB,
      d: () => QB,
      f: () => jB,
      g: () => JB,
      i: () => yB,
      j: () => oB,
      l: () => DB,
      o: () => YB,
      r: () => pB,
      u: () => PB,
      x: () => MB
    });
    const YB = 14,
      DB = 6,
      QB = (YB + DB) / 2,
      oB = 200,
      jB = oB / 2,
      yB = oB / 2 - 1,
      JB = DB / YB * (oB / 2),
      MB = (BB, OB) => -Math.PI / 2 + 2 * BB * Math.PI / OB,
      PB = (BB, OB, GB) => {
        const YB = 2 * Math.PI / GB;
        return (Math.round((Math.atan2(OB, BB) + Math.PI / 2) / YB) % GB + GB) % GB
      },
      zB = .5,
      lB = (BB, OB, GB) => Math.hypot(BB.x, BB.y) < zB ? GB : PB(BB.x, BB.y, OB),
      pB = (BB, OB, GB, YB, DB) => {
        const QB = Math.PI / OB,
          oB = MB(BB, OB),
          jB = oB - QB,
          yB = oB + QB,
          JB = (BB, OB) => `${GB+BB*Math.cos(OB)} ${GB+BB*Math.sin(OB)}`;
        return [`M ${JB(YB,jB)}`, `L ${JB(DB,jB)}`, `A ${DB} ${DB} 0 0 1 ${JB(DB,yB)}`, `L ${JB(YB,yB)}`, `A ${YB} ${YB} 0 0 0 ${JB(YB,jB)}`, "Z"].join(" ")
      }
  },
  37593: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB
    });
    var YB = GB(16),
      DB = GB(1338);

    function QB() {
      const {
        clientEscMenuOptions: BB
      } = (0, YB.o)(["clientEscMenuOptions"]);
      return (0, DB.s)() && BB.showChat
    }
  },
  9498: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(56),
      DB = GB(9439),
      QB = GB(2653);

    function oB() {
      const BB = (0, QB.g)("shopInfo"),
        [, OB] = (0, YB.useReducer)((BB => BB + 1), 0);
      return (0, QB.f)("shopInfo", OB), !(0, DB.e)(BB)
    }
  },
  37706: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(56),
      DB = GB(2653);

    function QB() {
      const BB = (0, DB.g)("lobbyLeaderboardInfo");
      return (0, YB.useMemo)((() => function(BB) {
        if (null === BB) return null;
        const OB = Object.entries(BB),
          GB = OB.filter((BB => {
            let [, OB] = BB;
            return void 0 !== OB
          }));
        if (GB.length === OB.length) return BB;
        const YB = Object.fromEntries(GB),
          DB = Object.keys(BB).filter((BB => !Object.hasOwn(YB, BB)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${DB.join(", ")}`), YB
      }(BB)), [BB])
    }
  },
  37529: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB
    });
    var YB = GB(3088),
      DB = GB(4111),
      QB = GB(3262);
    const oB = ["Unable to create vertex buffer"];
    let jB = {};

    function yB(BB, OB) {
      const GB = new Date;
      console.error(`${GB.getUTCHours()}:${GB.getUTCMinutes()}:${GB.getUTCSeconds()}`, BB, OB, null === OB || void 0 === OB ? void 0 : OB.stack), oB.includes(null === OB || void 0 === OB ? void 0 : OB.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, YB.d)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${OB.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, QB.logError)("warning", `${BB}\n ${OB} "\n" ${null===OB||void 0===OB?void 0:OB.stack}`);
      const DB = BB + OB + (null === OB || void 0 === OB ? void 0 : OB.stack);
      DB in jB || ((0, QB.logError)("error", `${BB}\n ${OB} "\n" ${null===OB||void 0===OB?void 0:OB.stack}`), jB[DB] = !0)
    }(0, DB.onGameReset)((() => {
      jB = {}
    }))
  },
  5337: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => iB,
      c: () => FB
    });
    var YB = GB(5345),
      DB = GB(331);
    const QB = 120,
      oB = 260,
      jB = 1.15,
      yB = 1.2,
      JB = 2,
      MB = 1.08,
      PB = .8,
      zB = .95,
      lB = 8,
      pB = "[\"')\\]\u300d\u300f\uff09]*",
      qB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${pB}$`),
      ZB = new RegExp(`[?\uff1f]${pB}$`),
      NB = new RegExp(`[!\uff01]${pB}$`),
      RB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      WB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      AB = new RegExp(`[${WB}]`),
      VB = new RegExp(`[${WB}]|[^${WB}]+`, "g"),
      SB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function nB(BB) {
      let OB = 2166136261;
      for (let GB = 0; GB < BB.length; GB++) OB ^= BB.charCodeAt(GB), OB = Math.imul(OB, 16777619);
      return (OB >>> 0) / 4294967295 * 2 - 1
    }

    function UB(BB) {
      var OB;
      if (AB.test(BB)) return 1;
      const GB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        YB = GB.replace(/[^0-9]/g, "");
      if (YB.length > 0 && !/\p{L}/u.test(GB)) return Math.min(YB.length, 4);
      const DB = null !== (OB = GB.match(SB)) && void 0 !== OB ? OB : [];
      if (0 === DB.length) {
        var QB, oB;
        const BB = null !== (QB = null === (oB = GB.match(/\p{L}/gu)) || void 0 === oB ? void 0 : oB.length) && void 0 !== QB ? QB : 0;
        return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), lB)
      }
      const jB = GB.replace(/[^\p{L}]/gu, ""),
        yB = DB.length > 1 && "e" === DB.at(-1) && jB.endsWith("e") && !jB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
      return Math.min(DB.length - (yB ? 1 : 0), lB)
    }

    function fB(BB) {
      return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function kB(BB) {
      const OB = BB.replace(/[^\p{L}]/gu, "");
      return OB.length >= 2 && OB === OB.toUpperCase() && OB !== OB.toLowerCase()
    }

    function dB(BB, OB) {
      var GB;
      const lB = OB && (0, YB.j)(OB),
        pB = null !== (GB = null === lB || void 0 === lB ? void 0 : lB.syllableMs) && void 0 !== GB ? GB : YB.d,
        WB = function(BB) {
          const OB = [];
          for (const YB of (0, DB.hc)(BB))
            if ("string" === typeof YB)
              for (const BB of YB.split(/(\s+)/)) {
                if ("" === BB) continue;
                if (/^\s+$/.test(BB)) {
                  OB.push({
                    kind: "space",
                    text: BB
                  });
                  continue
                }
                if (!AB.test(BB)) {
                  OB.push({
                    kind: "word",
                    text: BB,
                    delayMs: 0
                  });
                  continue
                }
                let YB = !0;
                for (const DB of null !== (GB = BB.match(VB)) && void 0 !== GB ? GB : []) {
                  var GB;
                  const BB = OB.at(-1);
                  YB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || AB.test(DB) || /[\p{L}\p{N}]/u.test(DB) ? (YB || OB.push({
                    kind: "space",
                    text: "\u200b"
                  }), OB.push({
                    kind: "word",
                    text: DB,
                    delayMs: 0
                  }), YB = !1) : BB.text += DB
                }
              } else OB.push({
                kind: "icon",
                text: YB.icon,
                delayMs: 0
              });
          return OB
        }(BB),
        SB = [];
      let dB = [];
      for (const YB of WB) "space" !== YB.kind && (dB.push(YB), qB.test(YB.text) && (SB.push(dB), dB = []));
      SB.push(dB);
      const KB = [];
      let uB = 0;
      for (const YB of SB) {
        var mB, IB;
        const BB = null !== (mB = null === (IB = YB.at(-1)) || void 0 === IB ? void 0 : IB.text) && void 0 !== mB ? mB : "",
          OB = ZB.test(BB),
          GB = NB.test(BB),
          DB = YB.map((BB => "word" === BB.kind ? UB(BB.text) : 1)),
          WB = DB.findLastIndex((BB => BB > 0));
        for (const [ZB, NB] of YB.entries()) {
          const BB = "word" === NB.kind,
            YB = DB[ZB];
          NB.delayMs = uB;
          for (let DB = 0; lB && DB < YB; DB++) {
            const {
              intonation: QB
            } = lB;
            let oB = WB > 0 ? -QB.declineSemitones * (ZB / WB) : 0;
            oB += nB(`${fB(NB.text)}|${DB}`) * QB.variationSemitones;
            const qB = Math.min(1, QB.variationSemitones);
            let RB = lB.glideSemitones,
              AB = 1;
            GB && (oB += QB.exclaimLiftSemitones, AB *= jB), OB && ZB === WB && (oB += QB.questionRiseSemitones * (YB > 1 ? .5 + .5 * DB / (YB - 1) : 1), DB === YB - 1 && (RB = Math.abs(RB) + QB.questionRiseSemitones / 2)), BB && kB(NB.text) && (oB += JB * qB, AB *= yB), YB > 1 && 0 === DB && (oB += PB * qB, AB *= MB), KB.push({
              atMs: uB + DB * pB,
              semitones: oB,
              glideSemitones: RB,
              durationMs: DB < YB - 1 ? Math.min(lB.durationMs, pB * zB) : lB.durationMs,
              level: AB
            })
          }
          uB += YB * pB + (qB.test(NB.text) ? oB : RB.test(NB.text) ? QB : 0)
        }
      }
      return {
        pieces: WB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
          kind: "icon",
          icon: BB.text,
          delayMs: BB.delayMs
        } : {
          kind: "word",
          text: BB.text,
          delayMs: BB.delayMs
        })),
        blips: KB
      }
    }
    var KB = GB(1175),
      uB = GB(1253),
      mB = GB(2027);

    function IB(BB) {
      if ("string" === typeof BB) return BB;
      const OB = uB.e.get().getCurrentLanguageCode();
      return (0, KB.x)(OB, BB.translationKey, (0, KB.v)(BB.params, mB.d.shown))
    }

    function FB(BB) {
      const OB = void 0 === BB.voice ? null : (0, YB.k)(BB.voice),
        GB = OB && (0, YB.j)(OB);
      return {
        plan: dB(IB(BB.line), GB),
        synth: GB
      }
    }

    function iB(BB) {
      const OB = [];
      let GB = [];
      for (const [DB, QB] of BB.entries()) {
        var YB;
        "space" === QB.kind && (" " !== QB.text || "icon" !== (null === (YB = BB[DB + 1]) || void 0 === YB ? void 0 : YB.kind)) ? (GB.length > 0 && OB.push(GB), OB.push([QB]), GB = []) : GB.push(QB)
      }
      return GB.length > 0 && OB.push(GB), OB
    }
  },
  37361: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    const YB = [{
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

    function DB(BB, OB, GB) {
      const DB = Math.abs(BB - OB),
        QB = Date.now() - GB;
      for (const oB of YB)
        if (BB < oB.maxDist) return DB >= oB.hardUpdateDist || QB > oB.timeBetweenSoftChecks && DB >= oB.softUpdateDist;
      return !1
    }
  },
  37685: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      c: () => zB
    });
    var YB = GB(641),
      DB = GB(31),
      QB = GB(37641);
    const oB = "replayFileKeptForReload",
      jB = "replayFileKeptForReloadAt",
      yB = "replayFileKeptForReloadTab",
      JB = 3e5,
      MB = 5e3;
    async function PB(BB, OB) {
      const GB = Date.now(),
        QB = {
          at: GB,
          bytes: BB,
          source: OB
        },
        JB = await Promise.race([(async () => await DB.d.setItem(jB, GB) && DB.d.setItem(oB, QB))(), (0, YB.U)(MB).then((() => !1))]);
      JB || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const PB = {
        at: GB,
        GP: JB
      };
      DB.i.setItem(yB, PB)
    }
    async function zB() {
      var BB;
      const OB = DB.i.getItem(yB);
      null !== OB && DB.i.removeItem(yB);
      const GB = Date.now(),
        YB = await DB.d.getItem(jB),
        MB = null !== OB && GB - OB.at <= JB,
        PB = null !== OB && YB === OB.at;
      let zB = null;
      if (null !== YB && (PB || ("number" !== typeof YB || GB - YB > JB)) && (zB = MB && PB && OB.GP ? await DB.d.getItem(oB) : null, await Promise.all([DB.d.removeItem(jB), DB.d.removeItem(oB)])), !MB) return null;
      if ((null === (BB = zB) || void 0 === BB ? void 0 : BB.at) !== OB.at) throw new Error(QB.e.replayNotKept.text);
      return {
        bytes: zB.bytes,
        source: zB.source
      }
    }
  },
  37682: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      g: () => QB,
      k: () => DB
    });
    const YB = [9];

    function DB(BB) {
      return YB.includes(BB)
    }

    function QB(BB) {
      return null !== BB && BB >= 3 && BB < YB[0]
    }
  },
  37650: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB,
      c: () => QB,
      d: () => DB
    });
    const YB = [.25, .5, 1, 2, 4, 8, 16];

    function DB(BB, OB) {
      const GB = YB;
      let DB = GB.indexOf(BB);
      return -1 === DB && (DB = GB.findIndex((OB => OB >= BB)), -1 === DB && (DB = GB.length - 1)), "up" === OB ? GB[Math.min(DB + 1, GB.length - 1)] : GB[Math.max(DB - 1, 0)]
    }

    function QB(BB) {
      return BB <= YB[0]
    }

    function oB(BB) {
      return BB >= YB[YB.length - 1]
    }
  },
  37692: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB,
      c: () => DB
    });
    const YB = "data-replay-ui-active",
      DB = [{
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
  37694: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB,
      f: () => PB,
      i: () => MB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(37692);

    function oB() {
      const BB = {};
      for (const {
          group: OB
        }
        of QB.c) BB[OB] = !0;
      return BB
    }
    let jB = oB();

    function yB() {
      DB.o.tM("replayViewer|uiVisibilityChanged")
    }

    function JB() {
      return jB
    }

    function MB(BB, OB) {
      jB[BB] !== OB && (jB = {
        ...jB,
        [BB]: OB
      }, "nametag" === BB && YB.c.set({
        areNametagsHidden: !OB
      }), yB())
    }

    function PB() {
      jB = oB(), YB.c.set({
        areNametagsHidden: !1
      }), yB()
    }
  },
  9410: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB,
      e: () => oB,
      i: () => jB,
      m: () => DB
    });
    var YB = GB(9414);
    const DB = BB => {
        const OB = [];
        BB.holdingGun && OB.push({
          kind: "reload"
        }), BB.touchscreenActionButton && OB.push({
          kind: "touchButton",
          label: BB.touchscreenActionButton
        });
        for (const QB of null !== (GB = null === (DB = BB.customButtons) || void 0 === DB ? void 0 : DB.filter(YB.e)) && void 0 !== GB ? GB : []) {
          var GB, DB;
          OB.push({
            kind: "customButton",
            id: QB.id,
            icon: QB.icon,
            description: QB.description
          })
        }
        return OB
      },
      QB = BB => BB.length >= 2,
      oB = BB => "specialAction" !== BB.kind,
      jB = (BB, OB) => {
        if (null === BB || null === OB) return BB === OB;
        if (BB.kind !== OB.kind) return !1;
        switch (BB.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return BB.action === OB.action;
          case "customButton":
            return BB.id === OB.id && BB.icon === OB.icon;
          case "touchButton":
            return BB.label === OB.label
        }
      }
  },
  9402: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => MB,
      h: () => lB,
      i: () => PB,
      j: () => pB
    });
    var YB = GB(56),
      DB = GB(25),
      QB = GB(1480),
      oB = GB(9410),
      jB = GB(9418);
    let yB = null;
    const JB = () => yB,
      MB = BB => {
        (0, oB.i)(yB, BB) || (yB = BB, DB.o.tM(jB.h, yB))
      },
      PB = () => {
        const [BB, OB] = (0, YB.useState)(JB);
        return (0, QB.f)(jB.h, OB), BB
      };
    let zB = !1;
    const lB = BB => {
        BB !== zB && (zB = BB, DB.o.tM(jB.i, BB))
      },
      pB = () => {
        const [BB, OB] = (0, YB.useState)(zB);
        return (0, QB.f)(jB.i, OB), BB
      }
  },
  9418: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      h: () => YB,
      i: () => DB,
      l: () => jB,
      m: () => yB,
      n: () => JB,
      q: () => oB
    });
    const YB = "controllerActionHintChanged",
      DB = "controllerActionWheelHintChanged",
      QB = "controllerOpenChat",
      oB = "controllerSneakToggledChanged",
      jB = "controllerAttackLatchedChanged",
      yB = "controllerDropStackHoldChanged",
      JB = "controllerPickBlockHintChanged"
  },
  9365: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      i: () => QB,
      j: () => yB,
      l: () => jB
    });
    var YB = GB(1480),
      DB = GB(1450);
    const QB = "controllerInventoryCursorChanged",
      oB = {
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
      jB = () => {
        var BB, OB;
        return (0, YB.i)(QB, null !== (BB = null === (OB = (0, DB.f)()) || void 0 === OB ? void 0 : OB.getInventoryCursorState()) && void 0 !== BB ? BB : oB)
      },
      yB = () => {
        var BB, OB;
        return null !== (BB = null === (OB = (0, DB.f)()) || void 0 === OB ? void 0 : OB.isPadSteppingSlots()) && void 0 !== BB && BB
      }
  },
  9363: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => zB,
      e: () => jB,
      i: () => yB,
      j: () => oB,
      m: () => QB,
      n: () => MB,
      o: () => PB
    });
    let YB = null;
    const DB = new Set,
      QB = BB => (YB = BB, () => {
        if (YB === BB) {
          YB = null;
          for (const BB of DB) BB()
        }
      }),
      oB = BB => (DB.add(BB), () => {
        DB.delete(BB)
      }),
      jB = () => YB,
      yB = () => null !== YB;
    let JB = null;
    const MB = BB => {
        JB = BB
      },
      PB = () => {
        const BB = JB;
        return JB = null, BB
      },
      zB = (BB, OB) => {
        var GB, YB;
        return null !== (GB = null !== (YB = BB.find((BB => BB.element === OB))) && void 0 !== YB ? YB : BB.find((BB => BB.element.contains(OB)))) && void 0 !== GB ? GB : null
      }
  },
  9370: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      e: () => oB
    });
    var YB = GB(56);
    const DB = new WeakMap,
      QB = BB => {
        var OB, GB;
        return null !== (OB = null === (GB = DB.get(BB)) || void 0 === GB ? void 0 : GB.current) && void 0 !== OB ? OB : null
      },
      oB = (BB, OB) => {
        const GB = (0, YB.useRef)(OB);
        GB.current = OB;
        const QB = (0, YB.useRef)(null);
        (0, YB.useEffect)((() => {
          const OB = BB.current,
            YB = QB.current;
          OB !== YB && (YB && DB.get(YB) === GB && DB.delete(YB), QB.current = OB, OB && DB.set(OB, GB))
        })), (0, YB.useEffect)((() => () => {
          const BB = QB.current;
          BB && DB.get(BB) === GB && DB.delete(BB), QB.current = null
        }), [])
      }
  },
  9485: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      d: () => JB,
      f: () => PB,
      h: () => MB,
      j: () => yB,
      l: () => lB
    });
    var YB = GB(25),
      DB = GB(2117),
      QB = GB(1450),
      oB = GB(1434);
    const jB = BB => {
        var OB, GB;
        return (0, oB.j)() && null !== (OB = null === (GB = (0, QB.f)()) || void 0 === GB ? void 0 : GB.getGlyphForNoaAction(BB)) && void 0 !== OB ? OB : null
      },
      yB = "controllerGlyph:",
      JB = BB => {
        var OB, GB;
        return null !== (OB = null === (GB = (0, QB.f)()) || void 0 === GB ? void 0 : GB.getPadGlyphIconName(BB)) && void 0 !== OB ? OB : `${yB}xbox/${BB}`
      },
      MB = BB => BB.startsWith(yB),
      PB = BB => {
        var OB, GB;
        return MB(BB) && null !== (OB = null === (GB = (0, QB.f)()) || void 0 === GB ? void 0 : GB.getPadGlyphIconUrl(BB)) && void 0 !== OB ? OB : null
      },
      zB = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", oB.d, DB.h, DB.e],
      lB = BB => {
        const OB = zB.map((OB => YB.o.subscribe(OB, BB)));
        return () => {
          for (const BB of OB) YB.o.unsubscribe(BB)
        }
      }
  },
  9478: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      f: () => oB,
      i: () => QB,
      m: () => YB,
      p: () => jB,
      q: () => JB,
      s: () => MB
    });
    const YB = "controllerActionWheelOpen",
      DB = "controllerActionWheelAim",
      QB = "controllerActionWheelCommit",
      oB = "controllerActionWheelClose",
      jB = "controllerActionWheelPick";
    let yB = !1;
    const JB = () => yB,
      MB = BB => {
        yB = BB
      }
  },
  9472: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      h: () => DB
    });
    let YB = 0;
    const DB = () => {
        YB++
      },
      QB = () => YB
  },
  9384: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB,
      i: () => DB,
      k: () => oB,
      n: () => QB,
      r: () => YB,
      t: () => JB
    });
    const YB = "controllerQuickChatWheelOpen",
      DB = "controllerQuickChatWheelAim",
      QB = "controllerQuickChatWheelCommit",
      oB = "controllerQuickChatWheelClose";
    let jB = !1;
    const yB = () => jB,
      JB = BB => {
        jB = BB
      }
  },
  37523: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB,
      h: () => QB
    });
    const YB = new Map;

    function DB(BB) {
      var OB;
      return null === BB ? null : null !== (OB = YB.get(BB)) && void 0 !== OB ? OB : null
    }

    function QB(BB, OB) {
      return YB.set(BB, OB), () => {
        YB.get(BB) === OB && YB.delete(BB)
      }
    }
  },
  37668: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => xO,
      g: () => sO
    });
    var YB = GB(4642),
      DB = GB(641),
      QB = GB(4150),
      oB = GB(4174),
      jB = GB.n(oB);
    const yB = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      JB = "EV_boolean",
      MB = "EV_double",
      PB = "EV_string",
      zB = "EV_doubleArr",
      lB = "EV_armour",
      pB = "EV_other",
      qB = "EV_cosmetics",
      ZB = "OEV_boolean",
      NB = "OEV_int",
      RB = "OEV_double",
      WB = "OEV_string",
      AB = "OEV_stringArr",
      VB = "OEV_meshScaling",
      SB = "IV_int",
      nB = "IV_string",
      UB = "IV_doubleArr",
      fB = "IV_double",
      kB = "HV_int",
      dB = "HV_slots",
      KB = "EnvV_string",
      uB = "EnvV_double",
      mB = "EnvV_doubleArr",
      IB = "EnvV_boolean",
      FB = {
        type: PB,
        name: PB,
        position: zB,
        rotation: zB,
        scale: MB,
        speed: MB,
        jumping: JB,
        crouching: JB,
        cameraPitch: MB,
        armSwinging: JB,
        heldItemName: PB,
        heldItemEnchantmentTier: PB,
        pose: PB,
        followingEId: PB,
        ridingVehicleEId: PB,
        leaderboardTop: PB,
        meshKind: PB,
        meshOpts: PB,
        followingOffset: zB,
        shouldMatchFollowingEntityRotation: JB,
        meshOffset: zB,
        baseRenderHeading: MB,
        armour: lB,
        FX: pB,
        playerCustomisations: qB,
        variation: PB,
        metaInfo: PB,
        soundName: PB,
        volume: MB,
        refDistance: MB,
        maxHearDist: MB,
        rate: MB,
        aiState: PB
      },
      iB = {
        opacity: RB,
        zIndex: NB,
        overlayColour: WB,
        canSee: ZB,
        meshScaling: VB,
        nameTagInfo: WB,
        multilineTextBox: WB,
        hasPriorityNametag: ZB,
        ranks: AB,
        nameColour: WB,
        _isAlive: ZB,
        _invisibleEffect: ZB,
        _invincible: ZB,
        killfeedColour: WB,
        hideNameSeed: NB,
        _glowingEffect: ZB,
        lockHeadToBody: ZB
      },
      LB = {
        itemName: nB,
        amount: SB,
        position: UB,
        size: fB,
        attributes: nB
      },
      gB = {
        skyBox: KB,
        fogColourOverride: KB,
        fogChunkDistanceOverride: uB,
        cameraTint: mB,
        fogOnSkybox: IB,
        fogBlockDistanceOverride: uB
      },
      rB = {
        type: "array",
        items: "double"
      },
      XB = {
        type: "array",
        items: "int"
      },
      wB = {
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
      EB = {
        type: "map",
        values: rB
      };

    function cB(BB, OB) {
      return {
        type: "record",
        name: BB,
        fields: [{
          name: "x",
          type: OB
        }]
      }
    }
    const hB = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", cB(ZB, "boolean"), cB(NB, "int"), cB(RB, "double"), cB(WB, "string"), cB(AB, {
              type: "array",
              items: "string"
            }), cB(VB, EB)]
          }]
        }
      },
      aB = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", cB(JB, "boolean"), cB(MB, "double"), cB(PB, "string"), cB(zB, rB), cB(lB, wB), cB(pB, hB), cB(qB, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      eB = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", cB(SB, "int"), cB(nB, "string"), cB(fB, "double"), cB(UB, rB)]
          }]
        }
      },
      TB = {
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
      bB = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", cB(kB, "int"), cB(dB, TB)]
        }]
      },
      CB = {
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
      HB = {
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
      vB = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", cB(KB, "string"), cB(uB, "double"), cB(mB, rB), cB(IB, "boolean")]
          }]
        }
      },
      sB = [{
        name: "qm",
        type: "record",
        fields: [{
          name: "pos",
          type: XB
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
          type: XB
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
      xB = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "VD",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "UD",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "fD",
              type: ["null", "string", rB],
              default: null
            }, {
              name: "kD",
              type: ["null", "double"],
              default: null
            }, {
              name: "dD",
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
          name: "MG",
          type: "string"
        }, {
          name: "PG",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "zG",
          type: "double"
        }, {
          name: "lG",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "kY",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: rB
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "pY",
          type: "string"
        }, {
          name: "BD",
          type: ["null", "double"],
          default: null
        }, {
          name: "OD",
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
          name: "VB",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "SB",
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
      tB = [{
        name: "position",
        type: rB
      }, {
        name: "direction",
        type: rB
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

    function BO() {
      const BB = [{
        name: "entities",
        type: {
          type: "map",
          values: aB
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: eB
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: tB
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
              items: bB
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", CB],
        default: null
      }];
      return BB.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "pY",
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
      }), BB.push({
        name: "uiElements",
        type: HB
      }, {
        name: "environment",
        type: vB
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: sB
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: xB
        }
      }), BB
    }
    const OO = {
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
                name: "kP",
                type: "int"
              }, {
                name: "position",
                type: rB
              }, {
                name: "direction",
                type: rB
              }, {
                name: "easing",
                type: rB
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
    let GO;

    function YO(BB) {
      if (9 === BB) return GO ??= (OB = [{
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
            name: "pI",
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
              type: XB
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
            fields: BO()
          }
        }
      }, OO], jB().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: OB
      }, {
        JP: Object.create(null)
      })), GO;
      var OB
    }
    var DO = GB(3143);
    let QO, oO, jO, yO;
    const JO = 12;
    var MO, PO;
    const zO = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 60, 127, !1, 128, 3, null, 16, 141, 4, !0, 142, 143, 15, 138, 2, 10, 5, 11, 9, "=", ";"];

    function lO(BB) {
      return typeof GG !== zO[5] && GG ? (new GG).decode(new YG(BB)) : typeof DG !== zO[5] && DG ? DG.from(BB).toString("utf-8") : jG(BB)
    }

    function pO() {}

    function qO() {
      qO = function() {}
    }
    var ZO, NO;
    qO(MO = {}, PO = ["dD<^g%ko?fv6igtmN<,=t6vs@ft@4.j]{|&b.Icddivhc9nm+eD[0h/sSGB", "(V?U!CSfgisOqrh{y8O;&z=v", "l8Q5RL!", "<Z|R%b}RZu[@8.g", 'oi+[kV4z"DlbHX*tYT9L_IrshD?Yz@kt`BH8wHcaIry', "=Zf22QL?L/6M(VO#>g$SQCVy0_m&Pk^d3Q%|", "MQ[~$j(v", "X_*6AwkOp%{{_&XW0{ob|z[xkTgt&H<t", "V)!D6cd,Ro7CyI~", 'de^z#"gyKoyS"pH:cBs[r', "Dg6$0V8f4_Mubt4WTlw[4UApFl|NltW9@[JzFz^dyXo)v", "ceO^@N]X#*BgfG(Y=TmM}D%kyrzKK&Q)We8tFqTr,D0^9P?^`s,", "ejbh@Buw~*<$ak;99v", "nI~dWQ`%|r", '^Q4hjXEAso~1jp2:Qh{b@JuXTO"KW)3nQ|Q=|B?n!F&L?J#5weC;jMEL|fh', 'u5ER6B+m"T_U/EG#CG+Cl', "xDZM*.~v7s/rxBv]v~ydE?Kv", "Az)C%b|q|", "1BK5Ppguwoy", ";eUH3Q>qcr{+UGEc/)wAq)^l&orr51c)(Bk~(3BiU/}9w@[x", "aV5tss!]~j3GUT$ZMgrC>I8fqi;MYgstR5Qx{aEvlGpJ=B5]cld$FJ!", "SIeu4kyapO@9yGm)", "M^)[/.Ha&~Mpb&", "vDYA.<{lk0iNi1TtKB$MsOM?diS~RG[nglj^Y?oA9X^", "*ZBD5.4R!F+en,=d|lVRB>Km,Dln!&>{+z1z+:pW:eC", "{zxCTc%xsX0V}c^d<|)S+", ".B5tQzOhL/6qZ,", '"{uDQ{?m|', "zh%8=C)rG/E&^&", "PT7z]0pAx+pJKgBtm{rS", "dT>zhETs[Ob$_k/E<I@H7QNv", "bQY;`;$#]%A1g=,[9qV[gUr9&lIK{1j*@|@5uNu](XHi{2S9b09Dd", "@&*tLj?x)o<Uv", ";0X8*cqRNsD;|5c[g)8DJ{_,", "iIKz8m)r9X,b#g%xb_n3LH.rBi`xsJdySx+[{av9G/,)v", 'Uh*LAJxkjO}q9P":Ejy;i', "<:;hGVXagii):&oWt)=[MBji*O6z[I|", ',J(~{1URljrX4&C{*h@zS%?r&lLV/5$c3hcRgz)%JeI2&"65', '|D"xHLclgT<[jp8]Zh+R*COr6u5t;$', "__aDxG+rpJc", "I*{t);Vw8lut1J,]1:d^`UR:dFvP[g2EV|j$CM#yt_Fii)3y*%,", "OQ:deNxxGg10Pk7oP~?Aojl,", 'liy;[;iy?DsFEg25)z@C..Y]"JwK5)]d&Z_z9', "mlZ8|JMhnf8y#r(Y.<02=N0,br8g]kaE0Ihz+%cy<u<U8PfiY:9LqQY,", "K<$H{:Uq%g_tv", "Y8phmDKn5g_L!>E9", "0nD[JN1@|", '&T)[5:~s/jBy"9^W}#u~', "2DM^c2px:XRiQG=[", "<Z%Dt?~pKo#&nHjdO&P3VjLN60oNpB>YJ{Sb4U|yfiz2m55]", '3T#t^I|dXj:m]&"ER5,', "6Qv87Q!", "Qnib:LQl$fwz22ciTh82wIsWTiR@/Tyxs{h8JXMAN0]U#g*tH%F8uzPVHD:;!", "zn9t9:TWb_eqeBI[~O_A:O?rvTC;$Izca&|[2h#ldGihut|", 'B_F8g],#of_CA"u5J~LMl.!', "XIFu)0Fi?o,~cr@9[|!dCs1WFOtri=ei&OV2KNKWbr.V+P&9D:Rz9:!", "kl;|ncAv<gsFMBlcFQ@A,wILnrAemVA9N!", "}_$S20,ikij2/,J*LGFu3G0,0es$/c%W;ej[jbkkfOD$Gg;[R!", "Q)=S2hRq>oS&Wbnxtx:;jz|R3i)[t,:9K~ib=s~@Wezm&V|yJIPh`c+v&", "bQ~hm:,d[TUa2JG#SI?[;]ns3i$Pv]S5xT8~acOL$", "?|lS0qzq>~5S>krEdJHht%PRIr", "k~jRQb!", ";nVI]0^RVo_@@bfif;|RCM!", "S)C;HMSi|S*e62!iV~3t.3{]<u`9v", "YJSx#Q::QrpqCgG]xJ|Cf{kA`g!hJ.%xphydSH*v", "dT|U<2ji10:S_t79MGlST@*kP+x@FX*_m&$S5:!X]%>z&Er", 'KDXu^GVq{%b2Z"R^A2T3}UEofJF8Octnbjv|', "[qa~3Rzy8~GF$&vi*J/zoGIvz*UasJD{XD5trp?m;*", "CGqC@B/WurTev", "vmD^BL)A4*", 'R|VI8R_X?re$<$j*r::~E"QlVfXa<9$ZH!', "1e^A+HyR=Sytn,Ky/x3hnHXdb_`fKg+mDD&", "Ee.xgHqRFJEj_G[*0IE|{6sr=Xdgo,O](*U5EL[W8TLi:IZE:h,", ";e<[n.zRk0@^u.>Y;/*L/jskQfzM0t!#q)P3mk+kLG!6`p8i", "L)Rs,zK@+rR+PTc)z!", 'SlxSs"O%1uMzeJx]s<)UR"L@0_zMj)u[DIFMB2oo<jD2$&]):D&=', "D~N$LzELUuSB.,f#vm82r", "w9!|#VIA>D./IgY:$zZbgz:l.lXV7IEc(G&", "~z{8Y:uuOlWU#gv[jgvDw6+v1ggt{1D:U<,", "H[XhD><rSeA~kX|", "8{MI$BxACXn_Xpjx&nnRxk:qPF7+Y=JnK#>H71LAfOne$Eg", '"{f2=@hvg+wl0GLc$x_xnHNW(XdUF9"t.h(^3;k?#gg*"2ccxz+S', "bj0hB0|dmJegt,4#cD6Rt:PXXgQiX9xm(e/MzpCk60+|1BbiH<L=kXH,", "(*JS$syu.oNuY=7ovO[R6B0:YfSLl.4#5JdA3a5d=", "xz8|xmkmVXXiCgv#mDT3fBz|Ms8N?J>^$$q^v>Ek|XS{9],i>!", "p9f22hTW=", "v+lxbzOOOT<+Zg%^+D5bZ0Om,T]", "Sqa2/cpAlg@$Z,McWe<C[;nASg?um,8)P~_z8I`WYrjgOXpEYI&xUcqq&", 'f;.s,BI@9*dyj)B:"<I^UHqa)oD^,)7Eli:2}D!i$', "7_G8shBXvl:Si1y#$$qA", ":BDCM%@%5eGm%$^m~l?5,j,uue_yhV!]yDY$MHFlvObMggu", "a[N2^?&o&~A_8tn^G&QxWOyybe*&_.vZBI]C;BRiaT:Ncc+^5v", "1IN2bj2r2Opqeb/c=n|AzUB:~ju~nH=)dQL=1EQi|", '9Qtb.H*mtjE&K";[?V*8yR{dOO.O)$Xmf)7xi6Bqz_,L.kS_z<E~{:r94r', "gT(2<MAv2Jm+7G|9~m%h[m}{5e1$IX}WLe&", "w{JS[kJX~SJR*P9#%_w[O>SfK~O9l&", "ag:Du]Pu{l0", '8~NUv>8z<GUTc)Z5TI*LY%~rG/T{H99Wc_ZxIJ"{RrMa92>Y8Dj~', "OeZS0XQiErR+5p=Zr%uL(Hl,", "<*[^q2+W2Dvd+B&Z3h3|i", "lqE~h0%O/*o|m,*5I)|C4cRd=", "hhd$><4a_frnXr,*V<k~z]Tva~/BXpB5^Dk;Zh!", '+eSt]aMr<jea:$:cJ*f~sOokZ0t@j"8yi5&', "Res^EkW%;Xc*8I/Ew!", "wgRS^Grv", "g$`|A]!", 'f*KuHh1WA_WmZg"EGGO^i', "jeP6v>IATTxN`]L51Ga~RbSqkFc;Zg^m_ik^i", '*O@$RqlV"JG', "^IE$mLguI_7@RBl5:n|UMH@@flIKS5^#gIStvp{iu_", 'B)`h&NDite8{7G!i5T^SXM[W,%Fm}2at75D$r]hWa~o[;B.t,TxA<";v', '8BC$9:oW8+7aM9b)9IJzUHWkAfsUTg`m"hHbIp9A)ry_v', "I*4;tG5y*D>xBk[)|~,t8I7i:_5@s10{,DHthEKhf~B/n,xmoIgU^", "[x4DDqFq|", "}&qUWm]]6u&{.cS5RBY^xR+v1gLMVXI[Q!", "W_vhkV!", ":l{tF{mLK%G", "%<6^kEp%#e/Q)rAiT%v", 'ED&Hs"Zolj/tmcB:', ";[?Ik26y&o7a:kQinJ[;acoANT9", "PlB|vq+rKDMJIcR{@[d[aHTv", "u54~sMHdUGuQrJ4{H5a~", "vxG8(?,dz*08kg#E^qF=t6FlhDBaa&}]", "@)P6ANuub_/B_.F)>efDx:nA_fijlIjdxen;GN^,pJ.u~BZo|I#LRh=Wj//Dv", "~5a2SJ5,", "%Qm8#a_,", "0c:5iS%&", "r@5U#$]x", 'F"QKN,>q', ">THkHeL_", "6q]yxG+4", "2s5J20*x", "m_7@CV+x", "DHgN@", "(Pi.ls@x", "%}y,yVjP", "`/Vgk|HP", "[[<WY", '"NXjsQIq', "2Q;C?=:q", "$j>m5", "FzpA", ".z;C`Y3q", "gj2(", ")z@0|,7q", "Dds]", "$Qpu", "9d6`b=QG", "WtPL]<TQ"]), qO(OG = function() {
        var BB, OB, GB, YB = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        qO(BB = void 0, OB = []);
        try {
          qO(BB = Object, OB[zO[11]]("".__proto__.constructor.name))
        } catch (YG) {}
        BB: for (GB = zO[0]; GB < YB[zO[4]]; GB++) try {
          var DB;
          for (BB = YB[GB](), DB = zO[0]; DB < OB[zO[4]]; DB++)
            if (typeof BB[OB[DB]] === zO[5]) continue BB;
          return BB
        } catch (YG) {}
        return BB || this
      }() || {}, GG = OG.TextDecoder, YG = OG.Uint8Array, DG = OG.BP, QG = OG.String || String, oG = OG.Array || Array, jG = function() {
        var BB, OB, GB = new oG(zO[20]);
        return qO(BB = QG[zO[8]] || QG.fromCharCode, OB = []),
          function(YB) {
            var DB, QB, oB, jB;
            for (qO(QB = void 0, oB = YB[zO[4]], OB[zO[4]] = zO[0]), jB = zO[0]; jB < oB;) qO(QB = YB[jB++], QB <= zO[18] ? DB = QB : QB <= 223 ? DB = (31 & QB) << zO[7] | YB[jB++] & zO[6] : QB <= 239 ? DB = (QB & zO[29]) << zO[10] | (YB[jB++] & zO[6]) << zO[7] | YB[jB++] & zO[6] : QG[zO[8]] ? DB = (QB & zO[9]) << 18 | (YB[jB++] & zO[6]) << zO[10] | (YB[jB++] & zO[6]) << zO[7] | YB[jB++] & zO[6] : (DB = zO[6], jB += zO[21]), OB[zO[11]](GB[DB] || (GB[DB] = BB(DB))));
            return OB.join("")
          }
      }()),
      function(BB) {
        typeof MO[BB] === zO[5] ? MO[BB] = function(BB) {
          var OB, GB, YB, DB, QB, oB, jB;
          for (qO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = zO[0], QB = zO[0], oB = -zO[1]), jB = zO[0]; jB < GB; jB++) {
            var yB = '!v,&$=|Au~S/lrgTP*io_+Yny95t^xd[83{m])cE:W#Z7<qkB2HhRsDC0%XGJ1jOfeFKQ@VIb;zLUM6Nap".>?w(4`}'.indexOf(OB[jB]);
            if (yB !== -zO[1])
              if (oB < zO[0]) oB = yB;
              else {
                qO(oB += yB * zO[12], DB |= oB << QB, QB += (oB & zO[13]) > zO[14] ? zO[15] : zO[16]);
                do {
                  qO(YB.push(DB & zO[3]), DB >>= zO[2], QB -= zO[2])
                } while (QB > zO[9]);
                oB = -zO[1]
              }
          }
          return oB > -zO[1] && YB.push((DB | oB << QB) & zO[3]), lO(YB)
        }(PO[BB]) : MO[BB]
      }(124), (() => {
        function BB(BB) {
          return typeof MO[BB] === zO[5] ? MO[BB] = function(BB) {
            var OB, GB, YB, DB, QB, oB, jB;
            for (qO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = zO[0], QB = zO[0], oB = -zO[1]), jB = zO[0]; jB < GB; jB++) {
              var yB = 'bqxWChKSUj.6]YkH`e*Zp?wFQT@/d#9DJg&5Rl)^3>B!iaX1tGEPM_I,r2y8+=:ofAnLsVN<Om|;[0~}$z{74v%("cu'.indexOf(OB[jB]);
              if (yB !== -zO[1])
                if (oB < zO[0]) oB = yB;
                else {
                  qO(oB += yB * zO[12], DB |= oB << QB, QB += (oB & zO[13]) > zO[14] ? zO[15] : zO[16]);
                  do {
                    qO(YB.push(DB & zO[3]), DB >>= zO[2], QB -= zO[2])
                  } while (QB > zO[9]);
                  oB = -zO[1]
                }
            }
            return oB > -zO[1] && YB.push((DB | oB << QB) & zO[3]), lO(YB)
          }(PO[BB]) : MO[BB]
        }
        BB(zO[18]) in pO && function() {
          function OB(BB) {
            var OB, GB, YB, DB, QB, oB, jB, yB = '5_4:^}&"+]%!,97?#/)1*@[8oCuPsQB.SdTv{=wOZK(>aqgL;leyFhx|j2GIbtMi<pVDEJ0$3fYkW6AnNH~Rz`mXUrc';
            for (qO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = zO[0], QB = zO[0], oB = -zO[1]), jB = zO[0]; jB < GB; jB++) {
              var JB = yB.indexOf(OB[jB]);
              if (JB !== -zO[1])
                if (oB < zO[0]) oB = JB;
                else {
                  qO(oB += JB * zO[12], DB |= oB << QB, QB += (oB & zO[13]) > zO[14] ? zO[15] : zO[16]);
                  do {
                    qO(YB.push(DB & zO[3]), DB >>= zO[2], QB -= zO[2])
                  } while (QB > zO[9]);
                  oB = -zO[1]
                }
            }
            return oB > -zO[1] && YB.push((DB | oB << QB) & zO[3]), lO(YB)
          }

          function GB(BB) {
            return typeof MO[BB] === zO[5] ? MO[BB] = OB(PO[BB]) : MO[BB]
          }

          function YB(BB) {
            const OB = {};
            for (let GB of BB.replace(/[^w]/g, "").toLowerCase()) OB[GB] = OB[GB] + zO[1] || zO[1];
            return OB
          }

          function DB(BB, OB) {
            const GB = buildCharMap(BB),
              YB = buildCharMap(OB);
            for (let DB in GB)
              if (GB[DB] !== YB[DB]) return zO[19];
            return Object.keys(GB).length !== Object.keys(YB).length ? zO[19] : zO[26]
          }

          function QB(BB) {
            return oB(BB) !== 1 / 0
          }

          function oB(BB) {
            if (!BB) return -zO[1];
            const OB = oB(BB.left),
              GB = oB(BB.right),
              YB = Math.abs(OB - GB);
            if (OB === 1 / 0 || GB === 1 / 0 || YB > zO[1]) return 1 / 0;
            return Math.max(OB, GB) + zO[1]
          }
          window[BB(zO[20]) + GB(129) + GB(130) + "_"] = {
            buildCharacterMap: YB,
            isAnagrams: DB,
            isBalanced: QB,
            getHeightBalanced: oB
          }
        }();
        const OB = zO[23],
          GB = BB(131) + BB(132) + BB(133),
          YB = [zO[0], zO[1], zO[31], zO[21]].map((OB => {
            BB(134);
            let YB = zO[0];
            for (let DB = zO[21]; DB >= zO[0]; DB--) {
              function QB(BB) {
                var OB, GB, YB, DB, QB, oB, jB;
                for (qO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = zO[0], QB = zO[0], oB = -zO[1]), jB = zO[0]; jB < GB; jB++) {
                  var yB = '^SPGhWctN%Cq0Z)[=y]OBQz/Dr7!RYwEp8jvn4(kHeMusa.|m$X,Vg`5+Fi?_@1lKA{b<2IJ>UxT";Lo:f&~9*#3}d6'.indexOf(OB[jB]);
                  if (yB !== -zO[1])
                    if (oB < zO[0]) oB = yB;
                    else {
                      qO(oB += yB * zO[12], DB |= oB << QB, QB += (oB & zO[13]) > zO[14] ? zO[15] : zO[16]);
                      do {
                        qO(YB.push(DB & zO[3]), DB >>= zO[2], QB -= zO[2])
                      } while (QB > zO[9]);
                      oB = -zO[1]
                    }
                }
                return oB > -zO[1] && YB.push((DB | oB << QB) & zO[3]), lO(YB)
              }

              function oB(BB) {
                return typeof MO[BB] === zO[5] ? MO[BB] = QB(PO[BB]) : MO[BB]
              }

              function jB() {
                console.log((function(BB) {
                  var OB, GB, YB, DB, QB = BB.length;
                  for (qO(OB = [], GB = zO[0]), YB = zO[0]; YB < QB; YB++) OB.push(YB !== zO[0] && BB[YB] > BB[YB - zO[1]] ? OB[YB - zO[1]] + zO[1] : zO[1]);
                  for (DB = QB - zO[1]; DB >= zO[0]; DB--) DB !== QB - zO[1] && BB[DB] > BB[DB + zO[1]] && (OB[DB] = Math.max(OB[DB], OB[DB + zO[1]] + zO[1])), GB += OB[DB];
                  return GB
                }))
              }
              oB(135) + "E" in pO && jB(), YB = YB << zO[2] | GB[oB(136) + oB(137)](OB * zO[25] + DB)
            }
            return YB >>> zO[0]
          })),
          DB = (BB, OB) => BB << OB | BB >>> 32 - OB,
          QB = (BB, OB, GB, YB, QB) => {
            qO(BB[OB] += BB[GB], BB[QB] = DB(BB[QB] ^ BB[OB], zO[23]), BB[YB] += BB[QB], BB[GB] = DB(BB[GB] ^ BB[YB], zO[10]), BB[OB] += BB[GB], BB[QB] = DB(BB[QB] ^ BB[OB], zO[2]), BB[YB] += BB[QB], BB[GB] = DB(BB[GB] ^ BB[YB], zO[9]))
          };
        yO = (BB, GB, DB, oB) => {
          function jB(BB) {
            return typeof MO[BB] === zO[5] ? MO[BB] = function(BB) {
              var OB, GB, YB, DB, QB, oB, jB;
              for (qO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = zO[0], QB = zO[0], oB = -zO[1]), jB = zO[0]; jB < GB; jB++) {
                var yB = 'rXqn(u^`mMAL]U"zOB.i@p:)V~7%s5FeCdWyS23fcZvJ/*IHPak1$bj=xhlRNoG9wDg;!ETQ+#Yt?0|_<,8>{[64}&K'.indexOf(OB[jB]);
                if (yB !== -zO[1])
                  if (oB < zO[0]) oB = yB;
                  else {
                    qO(oB += yB * zO[12], DB |= oB << QB, QB += (oB & zO[13]) > zO[14] ? zO[15] : zO[16]);
                    do {
                      qO(YB.push(DB & zO[3]), DB >>= zO[2], QB -= zO[2])
                    } while (QB > zO[9]);
                    oB = -zO[1]
                  }
              }
              return oB > -zO[1] && YB.push((DB | oB << QB) & zO[3]), lO(YB)
            }(PO[BB]) : MO[BB]
          }
          const yB = new DataView(GB[jB(zO[30])], GB[jB(139) + jB(140)], JO),
            JB = new Uint32Array(OB);
          qO(JB[jB(zO[24])](YB), JB[jB(zO[24])](BB, zO[25]), JB[zO[15]] = yB[jB(zO[27]) + jB(zO[28])](zO[0], zO[26]), JB[zO[16]] = yB[jB(zO[27]) + jB(zO[28])](zO[25], zO[26]), JB[zO[29]] = yB[jB(zO[27]) + jB(zO[28])](zO[2], zO[26]));
          const MB = new Uint32Array(OB),
            PB = new Uint8Array(MB[jB(zO[30])]);
          for (let zB = zO[0], lB = DB; zB < oB[jB(144)]; zB += OB * zO[25], lB++) {
            function pB(BB) {
              var OB, GB, YB, DB, QB, oB, jB;
              for (qO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = zO[0], QB = zO[0], oB = -zO[1]), jB = zO[0]; jB < GB; jB++) {
                var yB = 'g1GWa:jB{u]cNRSdJlvX6sI9oYQhP)D20k%@r[!LxV3_}M?$TwF<,OU;i"m~/f(KpC7nZHE8eqA4+`b&#=*^>z5.y|t'.indexOf(OB[jB]);
                if (yB !== -zO[1])
                  if (oB < zO[0]) oB = yB;
                  else {
                    qO(oB += yB * zO[12], DB |= oB << QB, QB += (oB & zO[13]) > zO[14] ? zO[15] : zO[16]);
                    do {
                      qO(YB.push(DB & zO[3]), DB >>= zO[2], QB -= zO[2])
                    } while (QB > zO[9]);
                    oB = -zO[1]
                  }
              }
              return oB > -zO[1] && YB.push((DB | oB << QB) & zO[3]), lO(YB)
            }

            function qB(BB) {
              return typeof MO[BB] === zO[5] ? MO[BB] = pB(PO[BB]) : MO[BB]
            }
            qO(JB[zO[10]] = lB, MB[qB(145)](JB));
            for (let NB = zO[0]; NB < zO[32]; NB++) qO(QB(MB, zO[0], zO[25], zO[2], zO[10]), QB(MB, zO[1], zO[33], zO[35], zO[15]), QB(MB, zO[31], zO[7], zO[32], zO[16]), QB(MB, zO[21], zO[9], zO[34], zO[29]), QB(MB, zO[0], zO[33], zO[32], zO[29]), QB(MB, zO[1], zO[7], zO[34], zO[10]), QB(MB, zO[31], zO[9], zO[2], zO[15]), QB(MB, zO[21], zO[25], zO[35], zO[16]));
            for (let RB = zO[0]; RB < OB; RB++) MB[RB] += JB[RB];
            const ZB = Math[qB(146)](OB * zO[25], oB[qB(147)] - zB);
            for (let WB = zO[0]; WB < ZB; WB++) {
              function AB(BB) {
                var OB, GB, YB, DB, QB, oB, jB;
                for (qO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = zO[0], QB = zO[0], oB = -zO[1]), jB = zO[0]; jB < GB; jB++) {
                  var yB = 'dQAgiVCclKxX/#EJH+w!BWF"9{tb2v7L,3&`u.;ospkDfh*]>81<y~0|$[=64_^z@5:(%jUGaISrRTPMmNnOeqZY)?}'.indexOf(OB[jB]);
                  if (yB !== -zO[1])
                    if (oB < zO[0]) oB = yB;
                    else {
                      qO(oB += yB * zO[12], DB |= oB << QB, QB += (oB & zO[13]) > zO[14] ? zO[15] : zO[16]);
                      do {
                        qO(YB.push(DB & zO[3]), DB >>= zO[2], QB -= zO[2])
                      } while (QB > zO[9]);
                      oB = -zO[1]
                    }
                }
                return oB > -zO[1] && YB.push((DB | oB << QB) & zO[3]), lO(YB)
              }

              function VB(BB) {
                return typeof MO[BB] === zO[5] ? MO[BB] = AB(PO[BB]) : MO[BB]
              }
              VB(148), oB[zB + WB] ^= PB[WB]
            }
          }
        }
      })();
    const RO = ["b", 0, 1, 8, 117, 141, "i", 7, 5, 95, 207, 255, "length", "d", 2, 224, "c", "g", "undefined", void 0, 4, "a", 63, 6, "fromCodePoint", 12, "push", 24, 122, 151, 134, 83, 177, 91, "e", 172, 8191, 88, 13, 14, 9, 3, "h", 157, 98, 104, 228, 36, 190, 118, 206, 100, 127, 128, 133, 175, 126, 18, "f", 135, !0, 108, 152, 205, 248, 77];

    function WO(...BB) {
      return BB[RO[12]] = RO[2], typeof GG !== RO[18] && GG ? (new GG).decode(new YG(BB[RO[1]])) : typeof DG !== RO[18] && DG ? DG.from(BB[RO[1]]).toString("utf-8") : jG(BB[RO[1]])
    }

    function AO() {}

    function VO() {
      VO = function() {}
    }
    VO(ZO = {}, NO = ["$1}.;`l|%$O*(hS$feN", "BWA@72b|J2Z^GUsUwu<GX,G|8i/FE,iB_1/R#?MWj2qV%N}L;Y?idtL[|$aa^", 'yuit:Fe9($/RB,;8A?kiTcNo%MM4[EjWVkQ@.`W")r*[aefe&edV', "tc:Wn<];kr6)7L9B>u+S,{yZ/(6p^", "(euW8t!96l:)Z[:", "5zj.zRyW/25h,LBXyS^.2)q:W,%", '*BXF|Du|CY;+%E|COa"_Ay4l.sq{K;GYvs;D[/i1n', "YraDA9hfPS78^", 'At?AZ,B;$i5FJ4sUhtji?Ob$}sN=LUEU0C}7B1h"1&GG^', 'Ww=|$_)?"o2M0b/jFzuhVF1Xv(Kr&~".6F)_:<%$D([t^', "maRF(?08UPA|&X2Cmax/M!;A|MZ$D;;8#D9ED2#;)kDaQ", 'y+<>^"41T:{IY,iB+w}Hj', "8wgRkFL:QMEau.BXGeNReDVCJs6)XEGLOzRB+7ebIkYN3.Fo9pbceqh^h", 'UYPS:`f}K"xfRXAee%9>@8*;K";', "T27!8,:_%$kyj~/L{e^qg)Q", "5&|/8,a_!*:Uga,W9&AHWER)al0W1E:d]C3H", "+Y3ia+/1l2_>Hh3}Iu3S", 'NFVhH"kn)3f)zfipqJR!LuFH*(RJ?VQ&n?;.mzE^2J,Ietdj)Q', "vefG0?:{]J3", "eijqD/rWf2UDaj}dXio%x!i[NSK", "@1rBgF!1>$+yLf]x*u>Vb+&fN", "VFH>]?gr`Sa%^", 'D2;@gmI$~sj&N4iBxxkSa~l;gS|2D*2XrSV!;?tn@$F[6!"1{?THM`{|V', "qjn@Vp6A}YrI/.,8hW2V5?w8FJ1/w4ELleu!Pp1{kI<t^", "xxq_$mO__o_Bkb!BSuqn", ";u1.ApQ", '^?)D4@Q;{$5?S=5B&U7WiO>Wvs)X?V".]sfyS<W<z,#X@=u>`Q', ':UBWA+DrRJWs"~p;KuSHG?4_"ia%{jhUh%LV`,Aa3lNHk(Jo>^', "wep~mL2:&ip,?*;Cf*q_o,@?&SSN@~y8_HYFm@=XN", "nu{V@,qFV", '@STSG2<71Y3Vet3pxF:F{a6PqAm39<Aoj*,A5LZx^IT/_.qoFCu"XZ|;S2/FQ', ';SN%S2RfCJSxyai}5c_nqX`?>kEIJekYyepcct,^_?["dek.?x$c6', 'dc)SJ+${=kqJv`EowEMnWZ7f=:%<FerCVII"Dm{b', "PH=SjDFF[:d>S=@XKiWGH![:ny56XTO1>wj.h<#2dfo<g,^w]Db", "J:+HA!xTAyU+B`s&U:1D~2,W1f", "E>Z>0LqFMfOR8LY1;1l%=yfTH", ")ay_5Zx8:(_MN!rxGeRe<p7<kM", 'gUwW%8wn;&k&3NZ8wpKF?"eANS(u=`gU@u)ta"D^T:%pafvo.*^', 'uu~iu"~HhP.+,4uL/(&iqLs}`S7aQ', 'zuED"r&WH', "NwPi(?I|c*nTdeh$o{^", "Q?&.b*L_Y?C;M=|&|pTByOD?t?qXYk(", 'F,j7WKrx2"#RX.dj*s^%Nm:$_o4a),dUnEmcX8.}n', "9atH!{7ZYP}DY.NjhSxSZ!@<!iQU#k>&(E]RC[kTC2jf%N4.", 'wHtcztbC&IV)=.c}J%ESay7c^?!BamN|[aF"w3:9R"YG3kS', "rS]A]i^m%$hiBE^Uk{Ynrdm<S&8M)blx", "DCAS)?MfmSvy/EnLmQ", "}UuWi~~{P:D%uNZ1{>@.=`.of(", "#c4W=X?^", "Zcq/F+m8As*3OkM1~U>S8[h0^k", "wuyBydv|Xfr,ZVUoIHJ%&", "YFhGzU:$nPcDifVwKSinE*Jf)*n.+N", "4+&7LK];j(VKkb}>,p$7duQ", "Cw4%//|;C(>l>(z.>uxS]`I|f$b|N!5}|wOhL1+_XfWGo!pU", "Wx~H_UxoXi!/5<]X9N&.9z#pz33tSO?ByE>t6?oWn", "o:p~+Ow7ilsJdl(eHW,W+dVA}2k7&*ho$*{>W,rc7,!/8e:e", '(rlct3G;{"mg/NB|;ug"Fm}f`?bSAkFez2X>@[1:UP6GVEipHVAHK)Q', 'Fu`%%[."k*N7k!L;OCMnGL2$RAOg;~2C', '{e1Dc4v_,&bS.!B8pxi>X[$Xq"L2!f98UwoR$!W?bkbT~,lC', "^*>tR?#_e,iapLf.F&}Hq<5WW(U", "YcfyCtg}df}_MXNj!?iV%q99H", "z1}|@tY{j(QES=J", "3iAcF2.<wJ8)ajjBR(hnD+GAZl;/A`?B8cRVTt;{&iO!u,+e<c?H", "v&3S=?X$pk0F^OM1Xkb7Z@g^", "f$b%L[yZC(gAh~}oEzytj_c8uSS7O,3BgiVyW,Zn($+VmV8$?sOe//2{)AmJ^", "D26nS9Q", "=rsin*DWXibp0e#6ZHn/P)1;YPRFtf5pSw3S{[7^", "5&z>D)|:,,)gs+)e", "|?c~M/6PRJrD|!q1q&3iLtn^,(4kuk.WSV;tn!^02$", 'xH"FS/`W<o:)3=8&hkPi17(A>rmt^', 'A?Uy/X0?rk}/?~/dgS(>5Dnfe&(YkLfo(rNWXZN"{A', "%1{>f<&8{$c", "BSxV`<)WCY(UJbMB9j`AD?Sj?sMUImWWF2^", "wu%D:yQ", "xih>TRC1+?1_HKX$:t{y@D8f.(!>(Ko}VxinF+I|)*}2ifg|~Q", 'n$9>:<cT],@p_ks;Ii.Fu*v|>r+,oe|Wf?KV;?OpW$3%vE_pWpDcLZu{Oo"_^', "_1_R5@ZnAGP,4t$B@S~Hr)6XcST/.N#W6k~tKd1lV?k4x(eWv:,R;Tv_[rUB^", "msJW;Txnh", "spPSPFcZ$ibc4jH", 'axL/camc|IxG/NrCz?[tkXSjq"xcItI;8x)V6_?8!kBGylfYyz?HY', "h8;ir)Z&Q?QuZVfYZY2yG?d^", "YiTS)<yZe(#ankWC{caVJ`Woafia+k.XmQ", "rNx@3r{{aov2qjrxK,1HQ*!$,&t,)Ln>DcxS?c&je&", ':tu>irS"dP7$YN#}S8E_rp1l!:AfbmVw(Ul%>Z!96PDg1,S>9HN', "%pQ|UtFl)3#*{tCLgud|w8YbYSx)^", 'i(@7k23|I?hbCjkdf{scEFy^"lC[|tI$', 'Ww+Hw7KxEl~D,.g&72^HTa}n`:^UK~Qw<Ugh8Kk"kMK', "b81tVXgcmr#o,LA>,+ORhpG;>:", "8Nk/$<B:*3TMGh%&Aeyt(2E^xPPIY`g$hS|Vs+R?MoM~fXkd9Q", "LE<G&y,x?&&cRV", "(Vytgp41t$zBeK0}cS6>LK}nprfxyl:LM*FWW", "&:6n0ZH;@?,V>bSeZ>dV=FXl7,Cnm*D>#zuE=E9;Oit>#,Q$J^", 'sDYWirQ$3s/"s+|X$?ReM/C[&r7gstK8Cs_FuXu{,&t/VX$1M^', "Lx=@/`Z}^?ppwl*C)sN", ">*l%[yXb", "J3x9PFIb", "H]|9S6[2", "fl1?St0b", "SIx9kB_b", "ZVLfleYb", 'eqU"f?2', "}3[oYh{]Gl|RQ8l/1qGg", "[,4j>zd|Flji$|24<?bg", ">!;aq/5,_]A7vPcL1qfG", "&#PGp7au1lKU(IgCq9jG", "<)l`L:/;f,n", "jL|Lkvs>*.?", "4)Op`ot}2.", "Z{`pK>2c", "S2zqPOS1", "|!R9/yQ`", 'jft^"(a`', "gRWqCfJ`", "xvteanM;", "7[XpnKB;", "[.t^D~DU0FhY;]hC{7|{h#^Ou", "Liw02jB9yDEfj]>NuM|ekGUi?", "BIY*$Q&41MmB/y86Li|eq[jT;", 'Lk=*bS_;)G"gfwi*5ICeNWVT[:98rU9', "5G@eyY%f,yoBJ7PvU8fg)h7.W5cB}:i", '&&/Kq+9+CD"g;gMHL88qlh!F5RPF<S9', "VrF}Ih9+eR]jw]bHmw7KU+,P4EWSj]|", "mw}g`sgT[:GBJ7PvU8mg)h7.2?!34x?", "/I}gO_q!&RPFo[4Zm>(uwh&9Z$c31", "O|{wmmgD8tl", "BBUI6ZP0", ",a/lLrF|", "b#+)XrQ|", ".a`>", "aa1[ir!|", "r6@?A", "5aE.P?1", "5a7Nkz4|", "IaP>", "ZsL&t<8b", "jI3j_x+XjH", "IO:gXQ0N", "tAvp", "%.Cp<", "QURp", "vO(/PG:", "{i4S&s{d", "5*qBmF0N"]), VO(OG = function(...BB) {
        VO(BB[RO[12]] = RO[1], BB[RO[16]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], BB[RO[13]] = RO[19], BB[RO[14]] = []);
        try {
          VO(BB[RO[13]] = Object, BB[RO[14]][RO[26]]("".__proto__.constructor.name))
        } catch (NO) {}
        BB: for (BB[RO[15]] = RO[1]; BB[RO[15]] < BB[RO[16]][RO[12]]; BB[RO[15]]++) try {
          for (BB[RO[13]] = BB[RO[16]][BB[RO[15]]](), BB[RO[17]] = RO[1]; BB[RO[17]] < BB[RO[14]][RO[12]]; BB[RO[17]]++)
            if (typeof BB[RO[13]][BB[RO[14]][BB[RO[17]]]] === RO[18]) continue BB;
          return BB[RO[13]]
        } catch (NO) {}
        return BB[RO[13]] || this
      }() || {}, GG = OG.TextDecoder, YG = OG.Uint8Array, DG = OG.BP, QG = OG.String || String, oG = OG.Array || Array, jG = function(...BB) {
        return VO(BB[RO[12]] = RO[1], BB[RO[0]] = new oG(RO[53]), BB[RO[2]] = QG[RO[24]] || QG.fromCharCode, BB[RO[14]] = []),
          function(...OB) {
            for (VO(OB[RO[12]] = RO[2], OB[RO[21]] = RO[19], OB[RO[0]] = RO[19], OB[RO[16]] = OB[RO[1]][RO[12]], BB[RO[14]][RO[12]] = RO[1]), OB[RO[20]] = RO[1]; OB[RO[20]] < OB[RO[16]];) VO(OB[RO[0]] = OB[RO[1]][OB[RO[20]]++], OB[RO[0]] <= RO[52] ? OB[RO[21]] = OB[RO[0]] : OB[RO[0]] <= 223 ? OB[RO[21]] = (31 & OB[RO[0]]) << RO[23] | OB[RO[1]][OB[RO[20]]++] & RO[22] : OB[RO[0]] <= 239 ? OB[RO[21]] = (15 & OB[RO[0]]) << RO[25] | (OB[RO[1]][OB[RO[20]]++] & RO[22]) << RO[23] | OB[RO[1]][OB[RO[20]]++] & RO[22] : QG[RO[24]] ? OB[RO[21]] = (OB[RO[0]] & RO[7]) << RO[57] | (OB[RO[1]][OB[RO[20]]++] & RO[22]) << RO[25] | (OB[RO[1]][OB[RO[20]]++] & RO[22]) << RO[23] | OB[RO[1]][OB[RO[20]]++] & RO[22] : (OB[RO[21]] = RO[22], OB[RO[20]] += RO[41]), BB[RO[14]][RO[26]](BB[RO[0]][OB[RO[21]]] || (BB[RO[0]][OB[RO[21]]] = BB[RO[2]](OB[RO[21]]))));
            return BB[RO[14]].join("")
          }
      }()),
      function(...BB) {
        return BB[RO[12]] = RO[2], typeof ZO[BB[RO[1]]] === RO[18] ? ZO[BB[RO[1]]] = function(...BB) {
          for (VO(BB[RO[12]] = RO[2], BB[RO[5]] = 'Q^bNVhHnASGJ:f(k=&$oYM6x;je.BW|>%@p8XULd1}Cwvz{T+t!c_"iy3?l,*K2rPsIgu<aE~DF7/Rq)[m4`OZ90#5]', BB[RO[0]] = "" + (BB[RO[1]] || ""), BB[RO[4]] = BB[RO[0]].length, BB[-RO[10]] = [], BB[RO[8]] = RO[1], BB[RO[9]] = RO[1], BB[RO[7]] = -RO[2]), BB[RO[3]] = RO[1]; BB[RO[3]] < BB[RO[4]]; BB[RO[3]]++)
            if (BB[RO[6]] = BB[RO[5]].indexOf(BB[RO[0]][BB[RO[3]]]), BB[RO[6]] !== -RO[2])
              if (BB[RO[7]] < RO[1]) BB[RO[7]] = BB[RO[6]];
              else {
                VO(BB[RO[7]] += BB[RO[6]] * RO[33], BB[RO[8]] |= BB[RO[7]] << BB[RO[9]], BB[RO[9]] += (BB[RO[7]] & RO[36]) > RO[37] ? RO[38] : RO[39]);
                do {
                  VO(BB[-RO[10]].push(BB[RO[8]] & RO[11]), BB[RO[8]] >>= RO[3], BB[RO[9]] -= RO[3])
                } while (BB[RO[9]] > RO[7]);
                BB[RO[7]] = -RO[2]
              } return BB[RO[7]] > -RO[2] && BB[-RO[10]].push((BB[RO[8]] | BB[RO[7]] << BB[RO[9]]) & RO[11]), WO(BB[-RO[10]])
        }(NO[BB[RO[1]]]) : ZO[BB[RO[1]]]
      }(94) + "w" in AO && function(...BB) {
        VO(BB[RO[12]] = RO[1], BB[-RO[27]] = function(BB) {
          var OB, GB, YB, DB, QB, oB, jB = RO[1];
          for (VO(OB = {}, GB = RO[1], YB = RO[1], DB = RO[1], QB = BB.length), oB = RO[1]; oB < QB; oB++) {
            var yB;
            for (VO(OB = {}, GB = RO[1], YB = RO[2]), yB = oB + RO[2]; yB < QB; yB++) BB[oB].x !== BB[yB].x || BB[oB].y !== BB[yB].y ? (OB[DB = BB[oB].y === BB[yB].y ? Number.MAX_SAFE_INTEGER : (BB[oB].x - BB[yB].x) / (BB[oB].y - BB[yB].y)] || (OB[DB] = RO[1]), VO(OB[DB]++, GB = Math.max(GB, OB[DB]))) : YB++;
            VO(GB += YB, jB = Math.max(jB, GB))
          }
          return jB
        }, console.log(BB[-RO[27]]))
      }(), (() => {
        function BB(...BB) {
          return BB[RO[12]] = RO[2], typeof ZO[BB[RO[1]]] === RO[18] ? ZO[BB[RO[1]]] = function(...BB) {
            for (VO(BB[RO[12]] = RO[2], BB[RO[30]] = '2VbqGgDpX9O#+y3sc].CLHBZ|n8~WESj"1/z4hY>_u:vAM0P!o;,ialf()}rI=*5[TdUF7?6RK@km&t`x<e^w$Q{J%N', BB[RO[0]] = "" + (BB[RO[1]] || ""), BB[-RO[29]] = BB[RO[0]].length, BB[RO[20]] = [], BB[RO[34]] = RO[1], BB[-RO[35]] = RO[1], BB[RO[32]] = -RO[2]), BB[RO[28]] = RO[1]; BB[RO[28]] < BB[-RO[29]]; BB[RO[28]]++)
              if (BB[RO[31]] = BB[RO[30]].indexOf(BB[RO[0]][BB[RO[28]]]), BB[RO[31]] !== -RO[2])
                if (BB[RO[32]] < RO[1]) BB[RO[32]] = BB[RO[31]];
                else {
                  VO(BB[RO[32]] += BB[RO[31]] * RO[33], BB[RO[34]] |= BB[RO[32]] << BB[-RO[35]], BB[-RO[35]] += (BB[RO[32]] & RO[36]) > RO[37] ? RO[38] : RO[39]);
                  do {
                    VO(BB[RO[20]].push(BB[RO[34]] & RO[11]), BB[RO[34]] >>= RO[3], BB[-RO[35]] -= RO[3])
                  } while (BB[-RO[35]] > RO[7]);
                  BB[RO[32]] = -RO[2]
                } return BB[RO[32]] > -RO[2] && BB[RO[20]].push((BB[RO[34]] | BB[RO[32]] << BB[-RO[35]]) & RO[11]), WO(BB[RO[20]])
          }(NO[BB[RO[1]]]) : ZO[BB[RO[1]]]
        } [][RO[12]] = RO[1];
        const OB = RO[40],
          GB = BB(RO[9]) + BB(96) + BB(97) + BB(RO[44]) + BB(99) + BB(RO[51]),
          YB = {
            [RO[40]]: BB(101) + BB(102) + BB(103) + BB(RO[45])
          },
          DB = (...BB) => {
            BB[RO[12]] = RO[2];
            const OB = YB[BB[RO[1]]];
            if (!OB) {
              function GB(...BB) {
                for (VO(BB[RO[12]] = RO[2], BB[RO[2]] = 'aD}w~<1uTW*GfVKY?0J{.SvcU!HjF4XLpm]Ze6|["_()3ir`QxtOR#P5+BshnC,yq$@Eo;2:M^bAk=lI9g8Nd&>z%/7', BB[-RO[3]] = "" + (BB[RO[1]] || ""), BB[RO[41]] = BB[-RO[3]].length, BB[-RO[43]] = [], BB[RO[8]] = RO[1], BB[RO[23]] = RO[1], BB[RO[7]] = -RO[2]), BB[RO[42]] = RO[1]; BB[RO[42]] < BB[RO[41]]; BB[RO[42]]++)
                  if (BB[RO[40]] = BB[RO[2]].indexOf(BB[-RO[3]][BB[RO[42]]]), BB[RO[40]] !== -RO[2])
                    if (BB[RO[7]] < RO[1]) BB[RO[7]] = BB[RO[40]];
                    else {
                      VO(BB[RO[7]] += BB[RO[40]] * RO[33], BB[RO[8]] |= BB[RO[7]] << BB[RO[23]], BB[RO[23]] += (BB[RO[7]] & RO[36]) > RO[37] ? RO[38] : RO[39]);
                      do {
                        VO(BB[-RO[43]].push(BB[RO[8]] & RO[11]), BB[RO[8]] >>= RO[3], BB[RO[23]] -= RO[3])
                      } while (BB[RO[23]] > RO[7]);
                      BB[RO[7]] = -RO[2]
                    } return BB[RO[7]] > -RO[2] && BB[-RO[43]].push((BB[RO[8]] | BB[RO[7]] << BB[RO[23]]) & RO[11]), WO(BB[-RO[43]])
              }

              function DB(...BB) {
                return BB[RO[12]] = RO[2], typeof ZO[BB[RO[1]]] === RO[18] ? ZO[BB[RO[1]]] = GB(NO[BB[RO[1]]]) : ZO[BB[RO[1]]]
              }
              throw new Error(DB(105) + DB(106) + DB(107) + BB[RO[1]])
            }
            return [RO[1], RO[2], RO[14], RO[41], RO[20], RO[8], RO[23], RO[7]].map(((...BB) => {
              function GB(...BB) {
                return BB[RO[12]] = RO[2], typeof ZO[BB[RO[1]]] === RO[18] ? ZO[BB[RO[1]]] = function(...BB) {
                  for (VO(BB[RO[12]] = RO[2], BB[RO[21]] = ';cYM/nHsG9ef@g6{Q#RVT!XLj(WrpZbOC]BSzo8du_Nq*"E%yPFl7DI1[3=x|a>vt)}&i~+`.k5KwA<2:m$04^U,h?J', BB[RO[0]] = "" + (BB[RO[1]] || ""), BB[RO[41]] = BB[RO[0]].length, BB[RO[48]] = [], BB[RO[34]] = RO[1], BB[-RO[47]] = RO[1], BB[-RO[44]] = -RO[2]), BB[RO[45]] = RO[1]; BB[RO[45]] < BB[RO[41]]; BB[RO[45]]++)
                    if (BB[-RO[46]] = BB[RO[21]].indexOf(BB[RO[0]][BB[RO[45]]]), BB[-RO[46]] !== -RO[2])
                      if (BB[-RO[44]] < RO[1]) BB[-RO[44]] = BB[-RO[46]];
                      else {
                        VO(BB[-RO[44]] += BB[-RO[46]] * RO[33], BB[RO[34]] |= BB[-RO[44]] << BB[-RO[47]], BB[-RO[47]] += (BB[-RO[44]] & RO[36]) > RO[37] ? RO[38] : RO[39]);
                        do {
                          VO(BB[RO[48]].push(BB[RO[34]] & RO[11]), BB[RO[34]] >>= RO[3], BB[-RO[47]] -= RO[3])
                        } while (BB[-RO[47]] > RO[7]);
                        BB[-RO[44]] = -RO[2]
                      } return BB[-RO[44]] > -RO[2] && BB[RO[48]].push((BB[RO[34]] | BB[-RO[44]] << BB[-RO[47]]) & RO[11]), WO(BB[RO[48]])
                }(NO[BB[RO[1]]]) : ZO[BB[RO[1]]]
              }
              return BB[RO[12]] = RO[2], GB(RO[61]) + "Y" in AO && function(...BB) {
                function OB(BB) {
                  var OB, GB, YB, DB, QB, oB, jB, yB = '1`;u7|9?2${@i]HkZRM,N6%IUreqhL}^*av[sw_XWJdCtbBP8g0TE/m5&3xGy:DF+Y"=#jfKA>.Op~nQSVzo<!4c()l';
                  for (VO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = RO[1], QB = RO[1], oB = -RO[2]), jB = RO[1]; jB < GB; jB++) {
                    var JB = yB.indexOf(OB[jB]);
                    if (JB !== -RO[2])
                      if (oB < RO[1]) oB = JB;
                      else {
                        VO(oB += JB * RO[33], DB |= oB << QB, QB += (oB & RO[36]) > RO[37] ? RO[38] : RO[39]);
                        do {
                          VO(YB.push(DB & RO[11]), DB >>= RO[3], QB -= RO[3])
                        } while (QB > RO[7]);
                        oB = -RO[2]
                      }
                  }
                  return oB > -RO[2] && YB.push((DB | oB << QB) & RO[11]), WO(YB)
                }

                function GB(...BB) {
                  return BB[RO[12]] = RO[2], typeof ZO[BB[RO[1]]] === RO[18] ? ZO[BB[RO[1]]] = OB(NO[BB[RO[1]]]) : ZO[BB[RO[1]]]
                }
                BB[RO[12]] = RO[1], VO(BB[-RO[50]] = GB(109) + GB(110) + GB(111) + GB(112) + GB(113) + GB(114) + "om", BB[RO[2]] = GB(115) + GB(116) + GB(RO[4]) + "?", BB[RO[49]] = GB(RO[49]) + GB(119) + GB(120) + GB(121) + GB(RO[28]) + GB(123), BB[-RO[50]].match(BB[RO[2]] + BB[RO[49]]))
              }(), parseInt(OB[GB(124)](BB[RO[1]] * RO[3], BB[RO[1]] * RO[3] + RO[3]), 16)
            }))
          };
        VO(QO = (...BB) => (BB[RO[12]] = RO[2], BB[RO[1]] >= OB), oO = (...BB) => {
          function OB(...BB) {
            return BB[RO[12]] = RO[2], typeof ZO[BB[RO[1]]] === RO[18] ? ZO[BB[RO[1]]] = function(BB) {
              var OB, GB, YB, DB, QB, oB, jB;
              for (VO(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = RO[1], QB = RO[1], oB = -RO[2]), jB = RO[1]; jB < GB; jB++) {
                var yB = '10|829@^&[>=;`ha_M,V7P/5oU4bKAI}.HQ~q{FSLXT#n3ZisW!6Ot)lY+eu<%B"gywprDJfvdxC?Nk$]zmEG:(c*Rj'.indexOf(OB[jB]);
                if (yB !== -RO[2])
                  if (oB < RO[1]) oB = yB;
                  else {
                    VO(oB += yB * RO[33], DB |= oB << QB, QB += (oB & RO[36]) > RO[37] ? RO[38] : RO[39]);
                    do {
                      VO(YB.push(DB & RO[11]), DB >>= RO[3], QB -= RO[3])
                    } while (QB > RO[7]);
                    oB = -RO[2]
                  }
              }
              return oB > -RO[2] && YB.push((DB | oB << QB) & RO[11]), WO(YB)
            }(NO[BB[RO[1]]]) : ZO[BB[RO[1]]]
          }
          BB[RO[12]] = RO[14], OB(125) in AO && function(...BB) {
            BB[RO[12]] = RO[1];
            const OB = require("big-integer");
            VO(BB[RO[16]] = class {
              static randomPrime(...BB) {
                BB[RO[12]] = RO[2];
                const GB = OB.one.shiftLeft(BB[RO[1]] - RO[2]),
                  YB = OB.one.shiftLeft(BB[RO[1]]).prev();
                for (; RO[60];) {
                  let BB = OB.randBetween(GB, YB);
                  if (BB.isProbablePrime(256)) return BB
                }
              }
              static generate(...BB) {
                BB[RO[12]] = RO[2];
                const GB = OB(65537);
                let YB, DB;
                BB[RO[2]] = RO[19];
                do {
                  VO(YB = this.randomPrime(BB[RO[1]] / RO[14]), DB = this.randomPrime(BB[RO[1]] / RO[14]), BB[RO[2]] = OB.lcm(YB.prev(), DB.prev()))
                } while (OB.gcd(GB, BB[RO[2]]).notEquals(RO[2]) || YB.minus(DB).abs().shiftRight(BB[RO[1]] / RO[14] - RO[51]).isZero());
                return {
                  e: GB,
                  n: YB.multiply(DB),
                  d: GB.modInv(BB[RO[2]])
                }
              }
              static encrypt(BB, GB, YB) {
                return OB(BB).modPow(YB, GB)
              }
              static decrypt(BB, GB, YB) {
                return OB(BB).modPow(GB, YB)
              }
              static encode(BB) {
                const GB = BB.split("").map((BB => BB.charCodeAt())).join("");
                return OB(GB)
              }
              static decode(...BB) {
                BB[RO[12]] = RO[2];
                const OB = BB[RO[1]].toString();
                BB[RO[2]] = "";
                for (let GB = RO[1]; GB < OB.length; GB += RO[14]) {
                  let YB = Number(OB.substr(GB, RO[14]));
                  YB <= 30 ? (BB[RO[2]] += String.fromCharCode(Number(OB.substr(GB, RO[41]))), GB++) : BB[RO[2]] += String.fromCharCode(YB)
                }
                return BB[RO[2]]
              }
            }, module.exports = BB[RO[16]])
          }();
          const GB = crypto[OB(RO[56]) + OB(RO[52]) + OB(RO[53])](new Uint8Array(JO)),
            YB = DO[RO[16]][OB(129) + OB(130)](BB[RO[2]], {
              [OB(131)]: RO[2]
            });
          yO(DB(BB[RO[1]]), GB, RO[2], YB);
          const QB = new Uint8Array(JO + YB[OB(132)]);
          return VO(QB[OB(RO[54])](GB), QB[OB(RO[54])](YB, JO)), QB
        }, jO = (...OB) => {
          function YB(...BB) {
            return BB[RO[12]] = RO[2], typeof ZO[BB[RO[1]]] === RO[18] ? ZO[BB[RO[1]]] = function(...BB) {
              for (VO(BB[RO[12]] = RO[2], BB[RO[21]] = ':KNWARthHgpJjC!*oIrlx[#Z_m<"%5(/Bk9w]cs6Oz;{`vnXdf0UeSYP31uq.=Ty~L4^QVG7$>8MFaE|+b)D&2?,@}i', BB[-RO[55]] = "" + (BB[RO[1]] || ""), BB[RO[41]] = BB[-RO[55]].length, BB[RO[13]] = [], BB[-RO[56]] = RO[1], BB[RO[58]] = RO[1], BB[RO[17]] = -RO[2]), BB[RO[42]] = RO[1]; BB[RO[42]] < BB[RO[41]]; BB[RO[42]]++)
                if (BB[-RO[57]] = BB[RO[21]].indexOf(BB[-RO[55]][BB[RO[42]]]), BB[-RO[57]] !== -RO[2])
                  if (BB[RO[17]] < RO[1]) BB[RO[17]] = BB[-RO[57]];
                  else {
                    VO(BB[RO[17]] += BB[-RO[57]] * RO[33], BB[-RO[56]] |= BB[RO[17]] << BB[RO[58]], BB[RO[58]] += (BB[RO[17]] & RO[36]) > RO[37] ? RO[38] : RO[39]);
                    do {
                      VO(BB[RO[13]].push(BB[-RO[56]] & RO[11]), BB[-RO[56]] >>= RO[3], BB[RO[58]] -= RO[3])
                    } while (BB[RO[58]] > RO[7]);
                    BB[RO[17]] = -RO[2]
                  } return BB[RO[17]] > -RO[2] && BB[RO[13]].push((BB[-RO[56]] | BB[RO[17]] << BB[RO[58]]) & RO[11]), WO(BB[RO[13]])
            }(NO[BB[RO[1]]]) : ZO[BB[RO[1]]]
          }
          if (OB[RO[12]] = RO[14], OB[RO[2]][BB(RO[30])] < JO) throw new Error(GB);
          const QB = new Uint8Array(OB[RO[2]][BB(RO[59])](JO));
          yO(DB(OB[RO[1]]), OB[RO[2]][BB(RO[59])](RO[1], JO), RO[2], QB);
          const oB = new(DO[RO[16]][YB(136) + RO[34]])({
            [YB(137)]: RO[60]
          });
          if (oB[YB(138)](QB), oB[YB(139)] || !oB[YB(140)]) {
            function jB(...BB) {
              for (VO(BB[RO[12]] = RO[2], BB[RO[63]] = '+d~*`4"Z1W(AJU:g;&Pne,}>^%!Dy.R8=Fxpj/#lt3IGL$6@V_NX5mHS)shTcwBkK7ofi[b{<OQY?CqEvM09u]2|zra', BB[RO[14]] = "" + (BB[RO[1]] || ""), BB[RO[41]] = BB[RO[14]].length, BB[RO[20]] = [], BB[RO[61]] = RO[1], BB[-RO[65]] = RO[1], BB[RO[64]] = -RO[2]), BB[RO[62]] = RO[1]; BB[RO[62]] < BB[RO[41]]; BB[RO[62]]++)
                if (BB[RO[6]] = BB[RO[63]].indexOf(BB[RO[14]][BB[RO[62]]]), BB[RO[6]] !== -RO[2])
                  if (BB[RO[64]] < RO[1]) BB[RO[64]] = BB[RO[6]];
                  else {
                    VO(BB[RO[64]] += BB[RO[6]] * RO[33], BB[RO[61]] |= BB[RO[64]] << BB[-RO[65]], BB[-RO[65]] += (BB[RO[64]] & RO[36]) > RO[37] ? RO[38] : RO[39]);
                    do {
                      VO(BB[RO[20]].push(BB[RO[61]] & RO[11]), BB[RO[61]] >>= RO[3], BB[-RO[65]] -= RO[3])
                    } while (BB[-RO[65]] > RO[7]);
                    BB[RO[64]] = -RO[2]
                  } return BB[RO[64]] > -RO[2] && BB[RO[20]].push((BB[RO[61]] | BB[RO[64]] << BB[-RO[65]]) & RO[11]), WO(BB[RO[20]])
            }

            function yB(...BB) {
              return BB[RO[12]] = RO[2], typeof ZO[BB[RO[1]]] === RO[18] ? ZO[BB[RO[1]]] = jB(NO[BB[RO[1]]]) : ZO[BB[RO[1]]]
            }

            function JB(...BB) {
              BB[RO[12]] = RO[1]
            }
            throw yB(RO[5]) in AO && JB(), new Error(GB)
          }
          return oB[YB(142)]
        })
      })();
    var SO = GB(37675),
      nO = GB(37678),
      UO = GB(37682);

    function fO(BB) {
      return QB.BP.from(Uint8Array.from(BB))
    }

    function kO(BB) {
      return Array.from(BB)
    }

    function dO(BB, OB) {
      return {
        [BB]: {
          x: OB
        }
      }
    }

    function KO(BB) {
      if (null === BB || "object" !== typeof BB || Array.isArray(BB)) return BB;
      const OB = Object.keys(BB);
      if (1 !== OB.length) return BB;
      const GB = BB[OB[0]];
      return null !== GB && "object" === typeof GB && !Array.isArray(GB) && "x" in GB ? GB.x : BB
    }

    function uO(BB, OB) {
      return void 0 === OB ? null : yB.has(BB) ? null === OB ? null : JSON.stringify(OB) : OB
    }

    function mO(BB, OB) {
      return null === OB && yB.has(BB) ? null : "string" === typeof OB && yB.has(BB) ? JSON.parse(OB) : OB
    }

    function IO(BB, OB, GB) {
      return (0, DB.Q)(GB) ? null : dO(BB, uO(OB, GB))
    }

    function FO(BB, OB) {
      return (0, DB.Q)(OB) ? null : mO(BB, KO(OB))
    }

    function iO(BB) {
      const OB = {};
      for (const GB in BB) {
        const YB = BB[GB];
        OB[GB] = void 0 === YB ? null : YB
      }
      return OB
    }

    function LO(BB) {
      const OB = {};
      for (const GB in BB) {
        const YB = BB[GB];
        null !== YB && void 0 !== YB && (OB[GB] = YB)
      }
      return OB
    }

    function gO(BB, OB) {
      return Object.prototype.hasOwnProperty.call(BB, OB)
    }

    function rO(BB, OB) {
      const GB = {};
      for (const YB in BB) {
        const DB = BB[YB];
        GB[YB] = OB(DB)
      }
      return GB
    }

    function XO(BB, OB, GB) {
      const YB = [];
      for (let DB = 0; DB < OB.length; DB++) {
        const QB = OB[DB];
        gO(BB, QB) && YB.push({
          i: DB,
          v: GB(QB, BB[QB])
        })
      }
      return YB
    }

    function wO(BB, OB, GB) {
      const YB = {};
      for (const DB of BB) {
        const BB = OB[DB.i];
        void 0 !== BB ? YB[BB] = GB(BB, DB.v) : console.error(`Unknown Partial field index ${DB.i}`)
      }
      return YB
    }

    function EO(BB, OB) {
      return (0, DB.Q)(OB) ? null : "FX" === BB ? function(BB) {
        return dO(pB, XO(BB, nO.B, ((BB, OB) => IO(iB[BB], BB, OB))))
      }(OB) : IO(FB[BB], BB, OB)
    }

    function cO(BB, OB) {
      return (0, DB.Q)(OB) ? null : "FX" === BB ? function(BB) {
        return (0, DB.Q)(BB) ? null : wO(BB, nO.B, FO)
      }(KO(OB)) : FO(BB, OB)
    }

    function hO(BB) {
      const {
        type: OB,
        ...GB
      } = BB, YB = {};
      for (const DB in GB) {
        const BB = GB[DB];
        YB[DB] = uO(DB, BB)
      }
      if ("chunkAdded" === OB || "chunkRemoved" === OB) YB.rle = fO(YB.rle);
      else if ("playSound" === OB) {
        const BB = YB.UD;
        YB.UD = (0, DB.Q)(BB) ? null : iO(BB)
      } else if ("customKillfeed" === OB) {
        var QB, oB;
        YB.killer = iO(null !== (QB = YB.killer) && void 0 !== QB ? QB : {}), YB.victim = iO(null !== (oB = YB.victim) && void 0 !== oB ? oB : {})
      }
      return {
        [OB]: YB
      }
    }

    function aO(BB) {
      const OB = Object.keys(BB)[0],
        GB = BB[OB],
        YB = {};
      for (const DB in GB) {
        const BB = GB[DB];
        YB[DB] = mO(DB, BB)
      }
      if ("chunkAdded" === OB || "chunkRemoved" === OB) YB.rle = kO(YB.rle);
      else if ("playSound" === OB) {
        const BB = YB.UD;
        YB.UD = (0, DB.Q)(BB) ? null : LO(BB)
      } else if ("customKillfeed" === OB) {
        var QB, oB;
        YB.killer = LO(null !== (QB = YB.killer) && void 0 !== QB ? QB : {}), YB.victim = LO(null !== (oB = YB.victim) && void 0 !== oB ? oB : {})
      } else "animateEntity" === OB && function(BB) {
        const OB = null === BB || void 0 === BB ? void 0 : BB.AG;
        if ((0, DB.Q)(OB)) return;
        for (const GB in OB) OB[GB].scale ??= []
      }(YB.animationScript);
      return {
        type: OB,
        ...YB
      }
    }

    function eO(BB) {
      var OB, GB;
      return (0, DB.Q)(BB) ? null : {
        name: BB.name,
        amount: null !== (OB = BB.amount) && void 0 !== OB ? OB : null,
        attributes: JSON.stringify(null !== (GB = BB.attributes) && void 0 !== GB ? GB : {})
      }
    }

    function TO(BB) {
      if ((0, DB.Q)(BB)) return null;
      const OB = BB;
      return {
        name: OB.name,
        amount: OB.amount,
        attributes: JSON.parse(OB.attributes)
      }
    }

    function bO(BB) {
      if ((0, DB.Q)(BB)) return null;
      return {
        fullSlotsArray: Array.isArray(BB.slots),
        entries: XO(BB, nO.q, ((BB, OB) => {
          if ((0, DB.Q)(OB)) return null;
          if ("slots" === BB) {
            const BB = Array.isArray(OB) ? function(BB) {
              const OB = {};
              for (let GB = 0; GB < BB.length; GB++) OB[GB] = BB[GB];
              return OB
            }(OB) : OB;
            return dO(dB, function(BB) {
              const OB = {};
              for (const GB in BB) {
                const YB = BB[GB];
                OB[GB] = eO(YB)
              }
              return OB
            }(BB))
          }
          return dO(kB, OB)
        }))
      }
    }

    function CO(BB) {
      if ((0, DB.Q)(BB)) return;
      const OB = BB.fullSlotsArray;
      return wO(BB.entries, nO.q, ((BB, GB) => {
        if ((0, DB.Q)(GB)) return null;
        if ("slots" === BB) {
          const BB = function(BB) {
            const OB = {};
            for (const GB in BB) {
              const YB = BB[GB];
              OB[Number(GB)] = TO(YB)
            }
            return OB
          }(KO(GB));
          return OB ? function(BB) {
            const OB = [];
            for (let GB = 0; GB < DB.r; GB++) OB.push(GB in BB ? BB[GB] : null);
            return OB
          }(BB) : BB
        }
        return KO(GB)
      }))
    }

    function HO(BB) {
      return {
        entities: rO(BB.entities, (BB => XO(BB, nO.o, EO))),
        items: rO(BB.items, (BB => XO(BB, nO.t, ((BB, OB) => IO(LB[BB], BB, OB))))),
        camera: BB.camera,
        hotbar: bO(BB.hotbar),
        playerHud: (0, DB.Q)(BB.playerHud) ? null : XO(BB.playerHud, nO.w, ((BB, OB) => (0, DB.Q)(OB) ? null : function(BB, OB) {
          return {
            [BB]: OB
          }
        }("double", OB))),
        effects: (0, DB.Q)(BB.effects) ? null : (0, SO.l)(BB.effects),
        uiElements: XO(BB.uiElements, nO.F, ((BB, OB) => (0, DB.Q)(OB) ? null : JSON.stringify(OB))),
        environment: XO(BB.environment, nO.z, ((BB, OB) => IO(gB[BB], BB, OB))),
        structuralEvents: BB.structuralEvents.map(hO),
        ephemeralEvents: BB.ephemeralEvents.map(hO)
      }
    }

    function vO(BB) {
      var OB;
      const GB = {
          entities: rO(BB.entities, (BB => {
            const OB = wO(BB, nO.o, cO),
              GB = OB.type ? (0, YB.u)(OB.type) : null;
            return GB && (OB.type = "Mesh", OB.meshKind = GB.meshKind, OB.meshOpts = GB.meshOpts), OB
          })),
          items: rO(BB.items, (BB => wO(BB, nO.t, FO))),
          camera: {
            ...BB.camera,
            charging: null !== (OB = BB.camera.charging) && void 0 !== OB && OB
          },
          uiElements: wO(BB.uiElements, nO.F, ((BB, OB) => "string" === typeof OB ? JSON.parse(OB) : OB)),
          environment: wO(BB.environment, nO.z, FO),
          structuralEvents: BB.structuralEvents.map((BB => {
            const OB = aO(BB);
            return "qm" === OB.type ? (OB.fromBlockData ??= null, OB.toBlockData ??= null) : "chunkAdded" !== OB.type && "chunkRemoved" !== OB.type || (OB.sharedBlockData ??= []), OB
          })),
          ephemeralEvents: BB.ephemeralEvents.map((BB => aO(BB)))
        },
        QB = CO(BB.hotbar);
      return void 0 !== QB && (GB.hotbar = QB), (0, DB.Q)(BB.playerHud) || (GB.playerHud = wO(BB.playerHud, nO.w, ((BB, OB) => (0, DB.Q)(OB) ? null : function(BB) {
        if (null === BB || "object" !== typeof BB || Array.isArray(BB)) return BB;
        const OB = Object.keys(BB);
        return 1 !== OB.length || "int" !== OB[0] && "double" !== OB[0] ? BB : BB[OB[0]]
      }(OB)))), (0, DB.Q)(BB.effects) || (GB.effects = (0, SO.h)(BB.effects)), GB
    }
    let sO, xO;
    var tO, BG, OG, GG, YG, DG, QG, oG, jG, yG, JG;
    const MG = [2, 0, 1, 8, "c", 72, 9, "g", 5, 37, 4, 255, "length", "d", 132, 249, "undefined", void 0, "f", 3, 124, 39, 63, 6, "fromCodePoint", 7, 12, "push", "e", 140, "h", 69, "a", 219, 91, 8191, 88, 13, 14, 238, 118, 187, 40, 237, 1023, "b", 65536, 10, 55296, 56320, 57, 128, 31, 15, 18, 92, 192, 129, 204, 224, "i", 75, 240, 113, !1, 158, 223, 33554432, 67108864, 194, 96, 116, 138, 191, 181, 66, 123, 127, 135, null, 167, 152, 250, 211, 60, 119, 205, 70, 175, 44, 143, 23, 172, 244, "BP", 71, 105, 161, 35, "k"];

    function PG(...BB) {
      return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = function(...BB) {
        for (qG(BB[MG[12]] = MG[2], BB[-MG[5]] = 'kjGEfJ%ItSXqCcOK>eV6g=uZ:hn1`"QA^|mNP9Ho7)5Lb3TRrWs/x(BUa2lY&M]*4v_{d8#D;p<Fiw$.@!y[}+z?0,~', BB[MG[0]] = "" + (BB[MG[1]] || ""), BB[MG[4]] = BB[MG[0]].length, BB[MG[10]] = [], BB[MG[8]] = MG[1], BB[-MG[9]] = MG[1], BB[MG[7]] = -MG[2]), BB[MG[3]] = MG[1]; BB[MG[3]] < BB[MG[4]]; BB[MG[3]]++)
          if (BB[MG[6]] = BB[-MG[5]].indexOf(BB[MG[0]][BB[MG[3]]]), BB[MG[6]] !== -MG[2])
            if (BB[MG[7]] < MG[1]) BB[MG[7]] = BB[MG[6]];
            else {
              qG(BB[MG[7]] += BB[MG[6]] * MG[34], BB[MG[8]] |= BB[MG[7]] << BB[-MG[9]], BB[-MG[9]] += (BB[MG[7]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
              do {
                qG(BB[MG[10]].push(BB[MG[8]] & MG[11]), BB[MG[8]] >>= MG[3], BB[-MG[9]] -= MG[3])
              } while (BB[-MG[9]] > MG[25]);
              BB[MG[7]] = -MG[2]
            } return BB[MG[7]] > -MG[2] && BB[MG[10]].push((BB[MG[8]] | BB[MG[7]] << BB[-MG[9]]) & MG[11]), zG(BB[MG[10]])
      }(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
    }

    function zG(...BB) {
      return BB[MG[12]] = MG[2], typeof GG !== MG[16] && GG ? (new GG).decode(new YG(BB[MG[1]])) : typeof DG !== MG[16] && DG ? DG.from(BB[MG[1]]).toString("utf-8") : jG(BB[MG[1]])
    }

    function lG() {}

    function pG(BB, OB, GB, YB = {}, DB, QB, oB, jB, yB) {
      if (oB || (oB = function(...BB) {
          function OB(...BB) {
            return BB[MG[12]] = MG[2], BB[MG[1]][MG[2]] * MG[68] + (BB[MG[1]][MG[1]] < MG[1] ? MG[67] | BB[MG[1]][MG[1]] : BB[MG[1]][MG[1]])
          }

          function GB(...BB) {
            switch (BB[MG[12]] = MG[2], ((BB[MG[1]] & MG[67]) !== MG[1]) * MG[2] + (BB[MG[1]] < MG[1]) * MG[0]) {
              case MG[1]:
                return [BB[MG[1]] % MG[67], Math.trunc(BB[MG[1]] / MG[68])];
              case MG[2]:
                return [BB[MG[1]] % MG[67] - MG[67], Math.trunc(BB[MG[1]] / MG[68]) + MG[2]];
              case MG[0]:
                return [((BB[MG[1]] + MG[67]) % MG[67] + MG[67]) % MG[67], Math.round(BB[MG[1]] / MG[68])];
              case MG[19]:
                return [BB[MG[1]] % MG[67], Math.trunc(BB[MG[1]] / MG[68])]
            }
          }
          BB[MG[12]] = MG[1], qG(BB[MG[69]] = OB([MG[0], MG[10]]), BB[MG[70]] = OB([MG[2], MG[0]]), BB[MG[13]] = BB[MG[69]] + BB[MG[70]], BB[-MG[71]] = BB[MG[13]] - BB[MG[70]], BB[MG[72]] = BB[-MG[71]] * MG[0], BB[MG[8]] = BB[MG[72]] / MG[0], console.log(GB(BB[MG[13]])), console.log(GB(BB[-MG[71]])), console.log(GB(BB[MG[72]])), console.log(GB(BB[MG[8]])))
        }), QB || (QB = function(...BB) {
          return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = DB(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
        }), DB || (DB = function(...BB) {
          for (qG(BB[MG[12]] = MG[2], BB[MG[32]] = 'WJ!6#;e5)mx,rP|kg_wa:>hG1p`0^ln=i+fK@$AoNy&RCFuO~"<c8/}7.QZ(sB?9%]dYv{LzjM[3I2HXUDTbV*qESt4', BB[MG[65]] = "" + (BB[MG[1]] || ""), BB[MG[19]] = BB[MG[65]].length, BB[MG[13]] = [], BB[MG[8]] = MG[1], BB[MG[66]] = MG[1], BB[MG[25]] = -MG[2]), BB[MG[30]] = MG[1]; BB[MG[30]] < BB[MG[19]]; BB[MG[30]]++)
            if (BB[MG[60]] = BB[MG[32]].indexOf(BB[MG[65]][BB[MG[30]]]), BB[MG[60]] !== -MG[2])
              if (BB[MG[25]] < MG[1]) BB[MG[25]] = BB[MG[60]];
              else {
                qG(BB[MG[25]] += BB[MG[60]] * MG[34], BB[MG[8]] |= BB[MG[25]] << BB[MG[66]], BB[MG[66]] += (BB[MG[25]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                do {
                  qG(BB[MG[13]].push(BB[MG[8]] & MG[11]), BB[MG[8]] >>= MG[3], BB[MG[66]] -= MG[3])
                } while (BB[MG[66]] > MG[25]);
                BB[MG[25]] = -MG[2]
              } return BB[MG[25]] > -MG[2] && BB[MG[13]].push((BB[MG[8]] | BB[MG[25]] << BB[MG[66]]) & MG[11]), zG(BB[MG[13]])
        }), PG(121) + "B" in lG && oB(), qG(jB = void 0, yB = {
          [PG(122)]: function(...BB) {
            function OB(...BB) {
              return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = function(...BB) {
                for (qG(BB[MG[12]] = MG[2], BB[-MG[74]] = 'p9NhbULAmPjzxFBki1:&<vd*Tro~Y4J/`)3S6W$[MD}y5%;KH2G{fC?|OZn0I_u,QqRV@wga!=X8e^+.tc>(El#s"]7', BB[MG[0]] = "" + (BB[MG[1]] || ""), BB[MG[19]] = BB[MG[0]].length, BB[-MG[75]] = [], BB[MG[28]] = MG[1], BB[MG[23]] = MG[1], BB[MG[25]] = -MG[2]), BB[MG[73]] = MG[1]; BB[MG[73]] < BB[MG[19]]; BB[MG[73]]++)
                  if (BB[MG[6]] = BB[-MG[74]].indexOf(BB[MG[0]][BB[MG[73]]]), BB[MG[6]] !== -MG[2])
                    if (BB[MG[25]] < MG[1]) BB[MG[25]] = BB[MG[6]];
                    else {
                      qG(BB[MG[25]] += BB[MG[6]] * MG[34], BB[MG[28]] |= BB[MG[25]] << BB[MG[23]], BB[MG[23]] += (BB[MG[25]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                      do {
                        qG(BB[-MG[75]].push(BB[MG[28]] & MG[11]), BB[MG[28]] >>= MG[3], BB[MG[23]] -= MG[3])
                      } while (BB[MG[23]] > MG[25]);
                      BB[MG[25]] = -MG[2]
                    } return BB[MG[25]] > -MG[2] && BB[-MG[75]].push((BB[MG[28]] | BB[MG[25]] << BB[MG[23]]) & MG[11]), zG(BB[-MG[75]])
              }(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
            }
            qG([
              [BB[MG[55]], BB[MG[76]], BB[MG[0]]], BB[85]
            ] = JG, console[OB(MG[76])]("" + BB[MG[55]][OB(MG[20])](".") + (OB(125) + OB(126)) + BB[MG[0]][OB(MG[77]) + "me"] + OB(MG[51]) + BB[MG[76]]))
          }
        }), OB === QB(MG[57]) + QB(130) && (JG = []), OB === QB(131) + QB(MG[14])) {
        function JB(...OB) {
          var GB;
          if (qG(OB[MG[12]] = MG[1], GB = function(...OB) {
              return JG = OB, yB[BB].apply(this)
            }, OB[MG[45]] = YB[BB]), OB[MG[45]]) {
            function DB(...BB) {
              for (qG(BB[MG[12]] = MG[2], BB[MG[2]] = 'b~hPAGOEBrJcYUeZQazHNVFlC(m72vx<you6&n][8_.DRs9;T@i`t}M,+4?5LX":=dS$gkjqIfwp|/^0W3K#{*)!>1%', BB[-MG[53]] = "" + (BB[MG[1]] || ""), BB[MG[19]] = BB[-MG[53]].length, BB[MG[13]] = [], BB[MG[78]] = MG[1], BB[MG[23]] = MG[1], BB[MG[25]] = -MG[2]), BB[MG[30]] = MG[1]; BB[MG[30]] < BB[MG[19]]; BB[MG[30]]++)
                if (BB[MG[6]] = BB[MG[2]].indexOf(BB[-MG[53]][BB[MG[30]]]), BB[MG[6]] !== -MG[2])
                  if (BB[MG[25]] < MG[1]) BB[MG[25]] = BB[MG[6]];
                  else {
                    qG(BB[MG[25]] += BB[MG[6]] * MG[34], BB[MG[78]] |= BB[MG[25]] << BB[MG[23]], BB[MG[23]] += (BB[MG[25]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                    do {
                      qG(BB[MG[13]].push(BB[MG[78]] & MG[11]), BB[MG[78]] >>= MG[3], BB[MG[23]] -= MG[3])
                    } while (BB[MG[23]] > MG[25]);
                    BB[MG[25]] = -MG[2]
                  } return BB[MG[25]] > -MG[2] && BB[MG[13]].push((BB[MG[78]] | BB[MG[25]] << BB[MG[23]]) & MG[11]), zG(BB[MG[13]])
            }

            function QB(...BB) {
              return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = DB(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
            }

            function oB(...BB) {
              var OB;
              qG(BB[MG[12]] = MG[1], OB = function(...BB) {
                qG(BB[MG[12]] = MG[2], this.CP = BB[MG[1]], this.length = MG[1], this.map = {}, this.head = MG[79], this.tail = MG[79])
              }, OB.prototype.get = function(...BB) {
                var OB;
                return qG(BB[MG[12]] = MG[2], OB = this.map[BB[MG[1]]]), OB ? (this.remove(OB), this.insert(OB.key, OB.val), OB.val) : -MG[2]
              }, OB.prototype.put = function(...BB) {
                qG(BB[MG[12]] = MG[0], this.map[BB[MG[1]]] ? (this.remove(this.map[BB[MG[1]]]), this.insert(BB[MG[1]], BB[MG[2]])) : this.length === this.CP ? (this.remove(this.head), this.insert(BB[MG[1]], BB[MG[2]])) : (this.insert(BB[MG[1]], BB[MG[2]]), this.length++))
              }, OB.prototype.remove = function(...BB) {
                qG(BB[MG[12]] = MG[2], BB[MG[2]] = BB[MG[1]].prev, BB[MG[0]] = BB[MG[1]].next), BB[MG[0]] && (BB[MG[0]].prev = BB[MG[2]]), BB[MG[2]] && (BB[MG[2]].next = BB[MG[0]]), this.head === BB[MG[1]] && (this.head = BB[MG[0]]), this.tail === BB[MG[1]] && (this.tail = BB[MG[2]]), delete this.map[BB[MG[1]].key]
              }, OB.prototype.insert = function(...BB) {
                qG(BB[MG[12]] = MG[0], BB[MG[55]] = new List(BB[MG[1]], BB[MG[2]]), this.tail ? (this.tail.next = BB[MG[55]], BB[MG[55]].prev = this.tail, this.tail = BB[MG[55]]) : (this.tail = BB[MG[55]], this.head = BB[MG[55]]), this.map[BB[MG[1]]] = BB[MG[55]])
              }, console.log(OB))
            }
            QB(133) in lG && oB(), OB[MG[45]]
          }
          return GB
        }
        jB = yG[BB] || (yG[BB] = JB())
      } else jB = yB[BB]();
      if (GB === QB(134) + QB(MG[78])) {
        function MB(...BB) {
          for (qG(BB[MG[12]] = MG[2], BB[MG[2]] = 'ov)u`[79X!TM<h>;_5+ifnxY}|R3^@,FZHVt?J%2$QLI=bSPGA*0pw/Dd8r4jeNOgWs.:1]#CE(K"aq{kmUBy&~lzc6', BB[MG[45]] = "" + (BB[MG[1]] || ""), BB[MG[80]] = BB[MG[45]].length, BB[-MG[80]] = [], BB[MG[28]] = MG[1], BB[MG[18]] = MG[1], BB[MG[7]] = -MG[2]), BB[MG[30]] = MG[1]; BB[MG[30]] < BB[MG[80]]; BB[MG[30]]++)
            if (BB[MG[8]] = BB[MG[2]].indexOf(BB[MG[45]][BB[MG[30]]]), BB[MG[8]] !== -MG[2])
              if (BB[MG[7]] < MG[1]) BB[MG[7]] = BB[MG[8]];
              else {
                qG(BB[MG[7]] += BB[MG[8]] * MG[34], BB[MG[28]] |= BB[MG[7]] << BB[MG[18]], BB[MG[18]] += (BB[MG[7]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                do {
                  qG(BB[-MG[80]].push(BB[MG[28]] & MG[11]), BB[MG[28]] >>= MG[3], BB[MG[18]] -= MG[3])
                } while (BB[MG[18]] > MG[25]);
                BB[MG[7]] = -MG[2]
              } return BB[MG[7]] > -MG[2] && BB[-MG[80]].push((BB[MG[28]] | BB[MG[7]] << BB[MG[18]]) & MG[11]), zG(BB[-MG[80]])
        }

        function PB(...BB) {
          return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = MB(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
        }
        return {
          [PB(136) + PB(137)]: jB
        }
      }
      return jB
    }

    function qG() {
      qG = function() {}
    }
    qG(tO = {}, BG = ["n^IxX]xVLq3", 'K/E;R#Y"T*&*!r%', "3LQf9RiT*VR82;io*`SQB*_Q|_pf@[fVNBaW;!RIK=", ")vAp59eh$Kd^ROtAVB9X", '_].i?xfPb]A8!h:m]g;BX]|"WB{#qKs7n<mF*.54IclaLyAZ5v]f"78j', "=^RSwiDIG*IS4K&Z&]CwKU7QFqm;(9oHBC4%", 'h"_t;i4dr&^8u9XgnBofWFF*N2*pmnc6wA|F;iXTE&58EE', 'OfhQ*m,epOMWZy?uK&"U`H5:$t^].GDH{Zl^X8/"le', "aB*p=2QPr=+aRG_9cD~^4&4dG&4jS>(1;As;(}Yj", ",a,/ir~mf2qrnM:`gT6X!!XVFe", ',]k/R#!+A=#w41c1[/"f', "3DMif(i:rKyqIH1)2DtSM(F)3(hv{HXnTg.S", "mZjFY/^x}BIMQWA5", "`vs(h$kQIlh%0[z`BOeQ)Fu4fBa", "+v{^C8]Vbt0K0Yy`Gfc<LM0TWCYORl7V", "Nd8X#(#VB6?</l=)sA,%H@O:7g", '#]`"nptQ.*]#ProV23dwE;$T`OOgX9?)dd^%Bl.j', "JS+DO!f#{Shl);YN4pG", '@/N"pU")Ic8^!fU`@E6^.!f5/2J9:E', "PBqwoW+N*(*Vc>e7AKuU>sTlV*KF@;w1k2BUKU2ZKK2WBM=)8BE", 'mZB`h+v2T_C.M&PV"9Y^iHMF*(Ec1s`QeL(<17Xx%6aIuM&P^70SjrY)2e7', "W%e1@]&:6BNm_8r7N&NXn7HCW*Bpc&jPP/oQPMH4qvm8C>iH&g]`lwk", 'ie*xQBZ6pv*pCYjL{d#Ie[:PeK<"sh?`JV`Xp!(RW2qMbE', "}%Y(0sdQ>_qvlckegC5FL9<m/&;@l8[mXd[tD!.)`v)]s9Jhv`]iF<Xl^K", 'cC#A4}""k=tQlc6gU]k%xaJj3t,tmc"">n1"zi|8"Y:', "k<eB%(vj$q8&qyo9", "IB:%,i8c3t&@PYCg8/BA.2hI]Y1A+r{Qyh.`?|7QJ", 'fVTi"p#QB6uvS>N:mS]f*}zTfc<f2Px1^/fwQBY8GB=r=>SVgg#D>', 'uZH`QB4%/2^E{O[mo9QA2w_:8l>.^R?"Ij', 'F3L;&/"*Bl=AHW;nbeW1&/)+]a~P!P_eR/E', '9gMA)a,)mS=.D[J9"SrW)M/ZLa1r.O<h/ELwf.e!%', "!#ui#&)2tU5xj", '`n#fx9IcT_vTJ>Z"FdF"2}BV}6P8aE#h|BEwZHglGC8p<HB7@OMA.PzxI', 'A&n":YdTpO0PrKenVTwDkomVV2fm6sYNWS%xmNi<al(', "QK)%p.T4>V*WsW>oSVAS$i32nvTigD99>*AiAxPx,gb82W&QGNxX_;@%/6", "{/[JT9dl.(Mh>[g19DIi/9TQ94m]UlpAG<mFZYvFl]rNUymezrFt", "SDlt//~7)vgybEK7w/|1.U7G)]dN]9X", "<3:Q,HE?ag>.+f|VA&7Se[,ed2tr@[Xn,]Fn)NeR4K@jCK<oigG^V", "k=5^sa=(y*6A(&x1TdI%lT#CR*>v5c2)K/+f.33*rCqvtE3HhDzf", '_Z&XNYTlbt6A41=`%&+s;P|"(l[q"r8:w%|FY/ilMYZ.$Wc', "@O}(Hp3IE", "e*M<^7OPr=_pIoeoO%(X", '%*^%mxA2?c#Vr[`5r7stm$gG>="ly!On#5yt)R=I5O', "TD#fV$6!62>1X9U)tn*WJ&DcA&S9<hq", "_5xw>xa@mBk|l!XHQvF(UmNNba6cLG|A83wI1H4d$V~{`DX", 'K*X"Mw%Qj&fdIE', "^LTip8L8H4N:+f~)2n^Wgxe6;eFTV9FH|9aBc8k", "VTn^.[h!r&D*ROI6f<Hia#9cg6lpDKDhDEzD(;(R<es=qG", ';9OiBlF"ogdh=PXH%&*iE.@CGKeFGnW1fnG', '!/J<HBh6H4<a8;n)c7Qfi8,Z|V58}f&)>KC"&#q)z6fGj', "[3uIOsNNrS^;MfjZ(dj", "i39<[$k", "#d%|ci!IG6tvX9I9", ")v7S.3[286(_y8|PMStS^$tQit6moG%", '_pd(X2^Piq2^2Pp6^Zq;IP=(XeHAEnIhNKF"D&p/EStR_W1NW3BUY.KI<e&', "4BOU>D.2yKp@qy_9FA*fA$o!Le1UE#[)iZIS2#<CIX", 'G*3UE<D".*##:12)u/{"S8}72v5r;D]eWv%i<Hu4btn%S>pApa>F^N{j', '#g:W}]iVK&`IHM%:&mOI&rv"MYa#Lyh)P9)B8m>:qgl', "{m?fDmO4V&d*@YcoMYQWnYOtYeGQ#8NhGWj", "Hr4W,$%#|S`x,rOg2DhB<r(c~vI12:g1", '9CapPMGPm&";c>IAQ<IxHp!j', "or=xS2FcGCpf9>Jh(D^F&&;<>V^gj", "ITUiC8QG", "%^n;6H=I*C", "Uv&<,+++_&l#eJaN!Y@/W#3FGB9`j", "|2xw)pflJ6k$j", 'bA:|=Y.j*&Ffi[~":dHI', "9/Dpf.5lP6Mqy8+)wv>S~i/6,e9`3f", "MejB?Dk", "!A^pM&5G=Bwt`E)6ITDp!ixT`Ywf!:)h)nQ`.i?eI40tpfyoAKG", 'A9jBR#5x64!wp;SA;do`^xU"tXaO,:{9', 'hS;%F[Ctv&#_%9ZmfdFJ@PY"R_}wbfu)mC0S;<4VjC{*j', "2YgIePj(eCUOIH>1cdE", ']gh%mB|6lgx_#W:`6"uxxa[c9lb', 'f*}"!Pglitc.7rW7b/O|h7}<(cdaj', 'W/RSbM)6E4[<Dn96Jfc<ei`V1e$!0Dn"PnBiH9M"E', "rC51<&$<Uc", 'S"Zx5WUN4KuvH9#HHd{sHdZ)6CK1`Y/)=%(I6HVG', "3Zn^TasGRC;^`[`5>L>|h", "RBKxw!&G", "fSl/Pd!I.VCckEso3Dx(1+&:u6", '0]Dx>HY"0gQmqy@7eD9`UygGj&b8<8GV:d`USPgTvC4IHc)H^d?x|Bk', '83n"RM~70g(`4[61xr@p2/BQ{2KF!8fL~3X^Bw6N[C$!i[~us2`<l(7GI', '}`is@PJhECB_sMh"H9j/!!A)Xv0<RE', '$#EJYm*ZM]<j1OYe+YfAG&v2CeB#@YMeC*HS>Hbxl]u.{#]"rL["?2UFjK&', "<rt/EU>l%", 'v9b"*&CTV*^xOMl`S*$SziU"RCdKVJ0N]B*Su', 'j^wIP@mG*t@!j&n"lOX^n', "(dFs:Dbxm&<#/yk5MYE", ';/is#8ZRg6!a]8K1#/tBI(*)F][#Con";O~^|D9I]qA;DKXg`&OIe', "an{^%mhN]KvtqshZ[9JICz32,l$P=rl)%j", "uBOxmpCGCY4NxKJ9yv8<T*E)@C", "lnE;xoY)b]/N)>]:udswC", "#5K|6]HC.&H_gE05{]LXPNqhvCpj]8,`wAaSDUG@,e", "4dD`]&Ct0e2p?D4Z;/zi2#]G", "!#y(JUCTrVqmfDt", "?OKS>i7V~q{`9;kLvZl/d(UI[S~ha[61fK~/J!gG3a`8k", 'GLstZi+2|&=lJ>w1^LUx0R)2!K}u;DQ5OCHA,p$V!B`vkKU"zhAp6', ',]V^J8;:fSV9nW)AMp6"g]U*4Ch:ROZ""&4SVxxT3O', "Dv8A6s}mKV6Q?nGZ^SS$dm[jc]9pj", "pZdJ$rt:FY1mXJM5XdEX", "27G;W/2N2g1l`[S", 'y3%ie[9c}2##<njZS"wI?+mz<O4OF#4:c7HUi8<xA=jBKG', "|Es/|@R2M(%/YOFnqd{<ui=j", "kNfwEzqj", "Zk#UR<}S", "o>bj^@HS", '*.U"kXy', '?"1B2jzS', '"Fsif_xS', "6lbq/<nS", '6l6U"', "e7[^gi<:*Jv@mMNqW7QAM}k", "e7[^gi<:4sY_$WI9n&/tK<6!*Jv@mMC", "UE_g+el]?z$4V{PG5Exo{^Z", 'A/"],$R#dh1=0Cfe[nrq@RPJ3Us{Hcx', "e7[^gi<:4sB`^Yd6Uq[t^D]:ies", "}V=9sru", "6ByYO5t7", "sr.|", "_/HAw!gG", "A<6^NBQG", "Z^Rp{<TG", "@{f^ytp", ")yr?~", "I7MbG[j9", "`Z(madp", "|aS`x|xN", ";7~(lM`p", ".G!0}VN!", "ir%e^", "5zd2L[/J", "GQWe0", "/nbx>]/~", "uQhII7>J", "t(Nm>", "LN~^9{%)", "v8@9n", "TgUxu+Wj", "2dN^5@gG", "&3/t5pAj", "LLA`J;mQXg", 'k54RN"QW', "dR<zy.w", "&ZOI[Vusp", "dR<zy.jk", "lymO", "(T!E<8n1", "g%ny{{E#", "{Y?Q)", "nBl,,ui#", "/JZpi", 'mS"Ox^;1', "#Bhxi", "Fmfw}8k", "3~w}@ik(", "#Udj]2T(", "8/1^1", "u,*/9XMA", "%MPrl", "Rp?iIS1W", "]O#gXX}W", "qU~zC!?w", ",s[,&#/a,D", "9;N2N", "9;N2H%1|wg#kw"]), qG(OG = function(...BB) {
      qG(BB[MG[12]] = MG[1], BB[MG[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], BB[MG[4]] = MG[17], BB[MG[13]] = []);
      try {
        qG(BB[MG[4]] = Object, BB[MG[13]][MG[27]]("".__proto__.constructor.name))
      } catch (BG) {}
      BB: for (BB[-MG[3]] = MG[1]; BB[-MG[3]] < BB[MG[14]][MG[12]]; BB[-MG[3]]++) try {
        for (BB[MG[4]] = BB[MG[14]][BB[-MG[3]]](), BB[MG[15]] = MG[1]; BB[MG[15]] < BB[MG[13]][MG[12]]; BB[MG[15]]++)
          if (typeof BB[MG[4]][BB[MG[13]][BB[MG[15]]]] === MG[16]) continue BB;
        return BB[MG[4]]
      } catch (BG) {}
      return BB[MG[4]] || this
    }() || {}, GG = OG.TextDecoder, YG = OG.Uint8Array, DG = OG[MG[94]], QG = OG.String || String, oG = OG.Array || Array, jG = function(...BB) {
      return qG(BB[MG[12]] = MG[1], BB[MG[13]] = new oG(MG[51]), BB[MG[28]] = QG[MG[24]] || QG.fromCharCode, BB[MG[18]] = []),
        function(...OB) {
          for (qG(OB[MG[12]] = MG[2], OB[MG[21]] = MG[17], OB[MG[20]] = MG[17], OB[MG[19]] = OB[MG[1]][MG[12]], BB[MG[18]][MG[12]] = MG[1]), OB[MG[13]] = MG[1]; OB[MG[13]] < OB[MG[19]];) qG(OB[MG[20]] = OB[MG[1]][OB[MG[13]]++], OB[MG[20]] <= MG[77] ? OB[MG[21]] = OB[MG[20]] : OB[MG[20]] <= MG[66] ? OB[MG[21]] = (OB[MG[20]] & MG[52]) << MG[23] | OB[MG[1]][OB[MG[13]]++] & MG[22] : OB[MG[20]] <= 239 ? OB[MG[21]] = (OB[MG[20]] & MG[53]) << MG[26] | (OB[MG[1]][OB[MG[13]]++] & MG[22]) << MG[23] | OB[MG[1]][OB[MG[13]]++] & MG[22] : QG[MG[24]] ? OB[MG[21]] = (OB[MG[20]] & MG[25]) << MG[54] | (OB[MG[1]][OB[MG[13]]++] & MG[22]) << MG[26] | (OB[MG[1]][OB[MG[13]]++] & MG[22]) << MG[23] | OB[MG[1]][OB[MG[13]]++] & MG[22] : (OB[MG[21]] = MG[22], OB[MG[13]] += MG[19]), BB[MG[18]][MG[27]](BB[MG[13]][OB[MG[21]]] || (BB[MG[13]][OB[MG[21]]] = BB[MG[28]](OB[MG[21]]))));
          return BB[MG[18]].join("")
        }
    }()), PG(104) + "I" in lG && function(...BB) {
      function OB(...BB) {
        for (qG(BB[MG[12]] = MG[2], BB[MG[32]] = 'lO71,Im<|$CjG*Tr"UxN?JF~fsLQt/yY!q>e^DuMB`]ghanX03RHvK;):c%=d6+pEVS@ZP{z5bW.Ai8ow42(}#9[&_k', BB[-MG[29]] = "" + (BB[MG[1]] || ""), BB[-MG[31]] = BB[-MG[29]].length, BB[MG[10]] = [], BB[MG[8]] = MG[1], BB[MG[18]] = MG[1], BB[MG[7]] = -MG[2]), BB[MG[30]] = MG[1]; BB[MG[30]] < BB[-MG[31]]; BB[MG[30]]++)
          if (BB[-MG[33]] = BB[MG[32]].indexOf(BB[-MG[29]][BB[MG[30]]]), BB[-MG[33]] !== -MG[2])
            if (BB[MG[7]] < MG[1]) BB[MG[7]] = BB[-MG[33]];
            else {
              qG(BB[MG[7]] += BB[-MG[33]] * MG[34], BB[MG[8]] |= BB[MG[7]] << BB[MG[18]], BB[MG[18]] += (BB[MG[7]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
              do {
                qG(BB[MG[10]].push(BB[MG[8]] & MG[11]), BB[MG[8]] >>= MG[3], BB[MG[18]] -= MG[3])
              } while (BB[MG[18]] > MG[25]);
              BB[MG[7]] = -MG[2]
            } return BB[MG[7]] > -MG[2] && BB[MG[10]].push((BB[MG[8]] | BB[MG[7]] << BB[MG[18]]) & MG[11]), zG(BB[MG[10]])
      }

      function GB(...BB) {
        return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = OB(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
      }
      BB[MG[12]] = MG[1],
        function(...BB) {
          function OB(...BB) {
            for (qG(BB[MG[12]] = MG[2], BB[MG[2]] = 'u<{z.]_(|w7?8KPRC#0N5*=>c^jBF)v@WrEqIXDVdGptx21A!9OUM3oTyaY6n;J/g"+L[%Zm:&k$`he,sSHbQf}4il~', BB[-MG[39]] = "" + (BB[MG[1]] || ""), BB[MG[40]] = BB[-MG[39]].length, BB[MG[10]] = [], BB[MG[28]] = MG[1], BB[MG[23]] = MG[1], BB[MG[7]] = -MG[2]), BB[MG[3]] = MG[1]; BB[MG[3]] < BB[MG[40]]; BB[MG[3]]++)
              if (BB[MG[41]] = BB[MG[2]].indexOf(BB[-MG[39]][BB[MG[3]]]), BB[MG[41]] !== -MG[2])
                if (BB[MG[7]] < MG[1]) BB[MG[7]] = BB[MG[41]];
                else {
                  qG(BB[MG[7]] += BB[MG[41]] * MG[34], BB[MG[28]] |= BB[MG[7]] << BB[MG[23]], BB[MG[23]] += (BB[MG[7]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                  do {
                    qG(BB[MG[10]].push(BB[MG[28]] & MG[11]), BB[MG[28]] >>= MG[3], BB[MG[23]] -= MG[3])
                  } while (BB[MG[23]] > MG[25]);
                  BB[MG[7]] = -MG[2]
                } return BB[MG[7]] > -MG[2] && BB[MG[10]].push((BB[MG[28]] | BB[MG[7]] << BB[MG[23]]) & MG[11]), zG(BB[MG[10]])
          }

          function GB(...BB) {
            return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = OB(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
          }

          function YB(...BB) {
            for (qG(BB[MG[12]] = MG[2], BB[MG[43]] = [], BB[MG[0]] = MG[1], BB[-MG[42]] = BB[MG[1]].length, BB[MG[13]] = MG[17], BB[MG[8]] = MG[17]); BB[MG[0]] < BB[-MG[42]];) qG(BB[MG[13]] = BB[MG[1]].charCodeAt(BB[MG[0]]++), BB[MG[13]] >= MG[48] && BB[MG[13]] <= 56319 && BB[MG[0]] < BB[-MG[42]] ? (BB[MG[8]] = BB[MG[1]].charCodeAt(BB[MG[0]]++), (64512 & BB[MG[8]]) == MG[49] ? BB[MG[43]].push(((BB[MG[13]] & MG[44]) << MG[47]) + (BB[MG[8]] & MG[44]) + MG[46]) : (BB[MG[43]].push(BB[MG[13]]), BB[MG[0]]--)) : BB[MG[43]].push(BB[MG[13]]));
            return BB[MG[43]]
          }

          function DB(...OB) {
            for (qG(OB[MG[12]] = MG[2], OB[MG[2]] = OB[MG[1]].length, OB[MG[45]] = -MG[2], OB[MG[4]] = MG[17], OB[MG[10]] = ""); ++OB[MG[45]] < OB[MG[2]];) OB[MG[4]] = OB[MG[1]][OB[MG[45]]], OB[MG[4]] > 65535 && qG(OB[MG[4]] -= MG[46], OB[MG[10]] += BB[MG[32]](OB[MG[4]] >>> MG[47] & MG[44] | MG[48]), OB[MG[4]] = MG[49] | OB[MG[4]] & MG[44]), OB[MG[10]] += BB[MG[32]](OB[MG[4]]);
            return OB[MG[10]]
          }

          function QB(...BB) {
            if (BB[MG[12]] = MG[2], BB[MG[1]] >= MG[48] && BB[MG[1]] <= 57343) {
              function OB(...BB) {
                for (qG(BB[MG[12]] = MG[2], BB[MG[32]] = 'yFSZtpANiLB=H1O.xgV#]:<rP"8!I;X*UCl,&w+az2Qk4E[h}s$>bqnK9(d)3?Tev`%^c5JR@D/6GjY0_{7Wou~|fMm', BB[MG[45]] = "" + (BB[MG[1]] || ""), BB[MG[4]] = BB[MG[45]].length, BB[-MG[50]] = [], BB[MG[28]] = MG[1], BB[MG[23]] = MG[1], BB[MG[7]] = -MG[2]), BB[MG[30]] = MG[1]; BB[MG[30]] < BB[MG[4]]; BB[MG[30]]++)
                  if (BB[MG[6]] = BB[MG[32]].indexOf(BB[MG[45]][BB[MG[30]]]), BB[MG[6]] !== -MG[2])
                    if (BB[MG[7]] < MG[1]) BB[MG[7]] = BB[MG[6]];
                    else {
                      qG(BB[MG[7]] += BB[MG[6]] * MG[34], BB[MG[28]] |= BB[MG[7]] << BB[MG[23]], BB[MG[23]] += (BB[MG[7]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                      do {
                        qG(BB[-MG[50]].push(BB[MG[28]] & MG[11]), BB[MG[28]] >>= MG[3], BB[MG[23]] -= MG[3])
                      } while (BB[MG[23]] > MG[25]);
                      BB[MG[7]] = -MG[2]
                    } return BB[MG[7]] > -MG[2] && BB[-MG[50]].push((BB[MG[28]] | BB[MG[7]] << BB[MG[23]]) & MG[11]), zG(BB[-MG[50]])
              }

              function GB(...BB) {
                return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = OB(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
              }
              throw Error(GB(MG[96]) + GB(106) + GB(107) + BB[MG[1]].toString(16).toUpperCase() + (GB(108) + GB(109) + GB(110) + GB(111)))
            }
          }

          function oB(...OB) {
            return OB[MG[12]] = MG[0], BB[MG[32]](OB[MG[1]] >> OB[MG[2]] & MG[22] | MG[51])
          }

          function jB(...OB) {
            return OB[MG[12]] = MG[2], (4294967168 & OB[MG[1]]) == MG[1] ? BB[MG[32]](OB[MG[1]]) : (OB[MG[32]] = "", (4294965248 & OB[MG[1]]) == MG[1] ? OB[MG[32]] = BB[MG[32]](OB[MG[1]] >> MG[23] & MG[52] | MG[56]) : (4294901760 & OB[MG[1]]) == MG[1] ? qG(QB(OB[MG[1]]), OB[MG[32]] = BB[MG[32]](OB[MG[1]] >> MG[26] & MG[53] | MG[59]), OB[MG[32]] += oB(OB[MG[1]], MG[23])) : (4292870144 & OB[MG[1]]) == MG[1] && qG(OB[MG[32]] = BB[MG[32]](OB[MG[1]] >> MG[54] & MG[25] | MG[62]), OB[MG[32]] += oB(OB[MG[1]], MG[26]), OB[MG[32]] += oB(OB[MG[1]], MG[23])), OB[MG[32]] += BB[MG[32]](OB[MG[1]] & MG[22] | MG[51]), OB[MG[32]])
          }

          function yB(BB) {
            var OB, GB, DB, QB, oB = YB(BB);
            for (qG(OB = oB.length, GB = -MG[2], DB = void 0, QB = ""); ++GB < OB;) qG(DB = oB[GB], QB += jB(DB));
            return QB
          }

          function JB(...OB) {
            if (OB[MG[12]] = MG[1], BB[MG[0]] >= BB[MG[14]]) throw Error(PG(112));
            if (qG(OB[-MG[55]] = BB[MG[58]][BB[MG[0]]] & MG[11], BB[MG[0]]++), (OB[-MG[55]] & MG[56]) == MG[51]) return OB[-MG[55]] & MG[22];
            throw Error(PG(MG[63]))
          }

          function MB(...OB) {
            if (qG(OB[MG[12]] = MG[1], OB[MG[45]] = MG[17], OB[MG[2]] = MG[17], OB[MG[13]] = MG[17], OB[MG[19]] = MG[17], OB[MG[10]] = MG[17]), BB[MG[0]] > BB[MG[14]]) {
              function GB(...BB) {
                for (qG(BB[MG[12]] = MG[2], BB[MG[32]] = 'ZC#wOz[&FAHGIR}b3U%,+KW)]:;pqjxogvVP2ayLEfsYd<0`~5"6(TScDm1XB{*?M$>8N!nQihlJe9kr4@/_^.u7|t=', BB[MG[45]] = "" + (BB[MG[1]] || ""), BB[MG[19]] = BB[MG[45]].length, BB[MG[10]] = [], BB[MG[8]] = MG[1], BB[MG[23]] = MG[1], BB[-MG[57]] = -MG[2]), BB[MG[30]] = MG[1]; BB[MG[30]] < BB[MG[19]]; BB[MG[30]]++)
                  if (BB[MG[6]] = BB[MG[32]].indexOf(BB[MG[45]][BB[MG[30]]]), BB[MG[6]] !== -MG[2])
                    if (BB[-MG[57]] < MG[1]) BB[-MG[57]] = BB[MG[6]];
                    else {
                      qG(BB[-MG[57]] += BB[MG[6]] * MG[34], BB[MG[8]] |= BB[-MG[57]] << BB[MG[23]], BB[MG[23]] += (BB[-MG[57]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                      do {
                        qG(BB[MG[10]].push(BB[MG[8]] & MG[11]), BB[MG[8]] >>= MG[3], BB[MG[23]] -= MG[3])
                      } while (BB[MG[23]] > MG[25]);
                      BB[-MG[57]] = -MG[2]
                    } return BB[-MG[57]] > -MG[2] && BB[MG[10]].push((BB[MG[8]] | BB[-MG[57]] << BB[MG[23]]) & MG[11]), zG(BB[MG[10]])
              }

              function YB(...BB) {
                return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = GB(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
              }
              throw Error(YB(114))
            }
            if (BB[MG[0]] == BB[MG[14]]) return MG[64];
            if (qG(OB[MG[45]] = BB[MG[58]][BB[MG[0]]] & MG[11], BB[MG[0]]++), (OB[MG[45]] & MG[51]) == MG[1]) return OB[MG[45]];
            if ((OB[MG[45]] & MG[59]) == MG[56]) {
              if (qG(OB[MG[2]] = JB(), OB[MG[10]] = (OB[MG[45]] & MG[52]) << MG[23] | OB[MG[2]]), OB[MG[10]] >= MG[51]) return OB[MG[10]];
              {
                function DB(...BB) {
                  for (qG(BB[MG[12]] = MG[2], BB[MG[2]] = 'vNLVoUifq5G+x)j@|AkP,~6F#4[wO%Xl]KH&Qeb7/y!Dt.}WBChrpaSM8g;1nc23ds=<Z?*I(ER9$T0:{J`"mY>^zu_', BB[MG[45]] = "" + (BB[MG[1]] || ""), BB[MG[4]] = BB[MG[45]].length, BB[-MG[61]] = [], BB[MG[28]] = MG[1], BB[MG[18]] = MG[1], BB[MG[7]] = -MG[2]), BB[MG[30]] = MG[1]; BB[MG[30]] < BB[MG[4]]; BB[MG[30]]++)
                    if (BB[MG[60]] = BB[MG[2]].indexOf(BB[MG[45]][BB[MG[30]]]), BB[MG[60]] !== -MG[2])
                      if (BB[MG[7]] < MG[1]) BB[MG[7]] = BB[MG[60]];
                      else {
                        qG(BB[MG[7]] += BB[MG[60]] * MG[34], BB[MG[28]] |= BB[MG[7]] << BB[MG[18]], BB[MG[18]] += (BB[MG[7]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                        do {
                          qG(BB[-MG[61]].push(BB[MG[28]] & MG[11]), BB[MG[28]] >>= MG[3], BB[MG[18]] -= MG[3])
                        } while (BB[MG[18]] > MG[25]);
                        BB[MG[7]] = -MG[2]
                      } return BB[MG[7]] > -MG[2] && BB[-MG[61]].push((BB[MG[28]] | BB[MG[7]] << BB[MG[18]]) & MG[11]), zG(BB[-MG[61]])
                }

                function oB(BB) {
                  return typeof tO[BB] === MG[16] ? tO[BB] = DB(BG[BB]) : tO[BB]
                }
                throw Error(oB(115))
              }
            }
            if ((OB[MG[45]] & MG[62]) == MG[59]) {
              if (qG(OB[MG[2]] = JB(), OB[MG[13]] = JB(), OB[MG[10]] = (OB[MG[45]] & MG[53]) << MG[26] | OB[MG[2]] << MG[23] | OB[MG[13]]), OB[MG[10]] >= 2048) return QB(OB[MG[10]]), OB[MG[10]];
              throw Error(PG(MG[63]))
            }
            if ((248 & OB[MG[45]]) == MG[62] && (qG(OB[MG[2]] = JB(), OB[MG[13]] = JB(), OB[MG[19]] = JB(), OB[MG[10]] = (OB[MG[45]] & MG[25]) << MG[54] | OB[MG[2]] << MG[26] | OB[MG[13]] << MG[23] | OB[MG[19]]), OB[MG[10]] >= MG[46] && OB[MG[10]] <= 1114111)) return OB[MG[10]];
            throw Error(PG(MG[71]))
          }

          function PB(...OB) {
            for (qG(OB[MG[12]] = MG[2], BB[MG[58]] = YB(OB[MG[1]]), BB[MG[14]] = BB[MG[58]].length, BB[MG[0]] = MG[1], OB[MG[32]] = [], OB[MG[45]] = MG[17]);
              (OB[MG[45]] = MB()) !== MG[64];) OB[MG[32]].push(OB[MG[45]]);
            return DB(OB[MG[32]])
          }
          BB[MG[12]] = MG[2], BB[MG[32]] = String.fromCharCode, qG(BB[MG[58]] = MG[17], BB[MG[14]] = MG[17], BB[MG[0]] = MG[17]), qG(BB[MG[1]].version = GB(117), BB[MG[1]].encode = yB, BB[MG[1]].decode = PB)
        }(typeof exports === GB(MG[40]) + GB(MG[85]) ? this.utf8 = {} : exports)
    }(), qG(yG = Object[PG(120)](MG[79]), JG = void 0), qG(sO = (...BB) => {
      function OB(...BB) {
        return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = function(...BB) {
          for (qG(BB[MG[12]] = MG[2], BB[MG[32]] = '7(`&"1vu%}<|={/xA#mBW>;Qwy9]HE08@5p2IaZ+UXVs_,:*4)L~Nr6$^h?cMTCDYtgqdeFibRGzfjlk!J[.SP3oOnK', BB[MG[81]] = "" + (BB[MG[1]] || ""), BB[MG[4]] = BB[MG[81]].length, BB[-MG[83]] = [], BB[MG[28]] = MG[1], BB[-MG[82]] = MG[1], BB[MG[7]] = -MG[2]), BB[MG[30]] = MG[1]; BB[MG[30]] < BB[MG[4]]; BB[MG[30]]++)
            if (BB[MG[29]] = BB[MG[32]].indexOf(BB[MG[81]][BB[MG[30]]]), BB[MG[29]] !== -MG[2])
              if (BB[MG[7]] < MG[1]) BB[MG[7]] = BB[MG[29]];
              else {
                qG(BB[MG[7]] += BB[MG[29]] * MG[34], BB[MG[28]] |= BB[MG[7]] << BB[-MG[82]], BB[-MG[82]] += (BB[MG[7]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                do {
                  qG(BB[-MG[83]].push(BB[MG[28]] & MG[11]), BB[MG[28]] >>= MG[3], BB[-MG[82]] -= MG[3])
                } while (BB[-MG[82]] > MG[25]);
                BB[MG[7]] = -MG[2]
              } return BB[MG[7]] > -MG[2] && BB[-MG[83]].push((BB[MG[28]] | BB[MG[7]] << BB[-MG[82]]) & MG[11]), zG(BB[-MG[83]])
        }(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
      }
      BB[MG[12]] = MG[2];
      const GB = function(BB) {
          var OB;
          return {
            meta: {
              ...BB.meta,
              formatVersion: nO.g,
              variation: null !== (OB = BB.meta.variation) && void 0 !== OB ? OB : null
            },
            initialChunks: BB.initialChunks.map((BB => ({
              chunkPos: BB.chunkPos,
              rle: fO(BB.rle),
              sharedBlockData: uO("sharedBlockData", BB.sharedBlockData)
            }))),
            ticks: BB.ticks.map(HO),
            editState: BB.editState
          }
        }(BB[MG[1]]),
        YB = YO(nO[MG[7]]);
      BB[MG[2]] = MG[17];
      try {
        function jB(...BB) {
          BB[MG[12]] = MG[1]
        }
        PG(MG[72]) + "y" in lG && jB(), BB[MG[2]] = YB[PG(141)](GB)
      } catch (jG) {
        function JB(...BB) {
          for (qG(BB[MG[12]] = MG[2], BB[MG[2]] = 'wkWNnKpAQOFBStPqfHxD[5]9s4(XaYIo+2#/^vl!mMgy?h"J;C)R<jZ&G8T=b,_$`U:idce}E{u|Vz10.~L%>r*3@67', BB[MG[76]] = "" + (BB[MG[1]] || ""), BB[MG[4]] = BB[MG[76]].length, BB[MG[88]] = [], BB[MG[87]] = MG[1], BB[MG[18]] = MG[1], BB[MG[25]] = -MG[2]), BB[MG[86]] = MG[1]; BB[MG[86]] < BB[MG[4]]; BB[MG[86]]++)
            if (BB[MG[6]] = BB[MG[2]].indexOf(BB[MG[76]][BB[MG[86]]]), BB[MG[6]] !== -MG[2])
              if (BB[MG[25]] < MG[1]) BB[MG[25]] = BB[MG[6]];
              else {
                qG(BB[MG[25]] += BB[MG[6]] * MG[34], BB[MG[87]] |= BB[MG[25]] << BB[MG[18]], BB[MG[18]] += (BB[MG[25]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                do {
                  qG(BB[MG[88]].push(BB[MG[87]] & MG[11]), BB[MG[87]] >>= MG[3], BB[MG[18]] -= MG[3])
                } while (BB[MG[18]] > MG[25]);
                BB[MG[25]] = -MG[2]
              } return BB[MG[25]] > -MG[2] && BB[MG[88]].push((BB[MG[87]] | BB[MG[25]] << BB[MG[18]]) & MG[11]), zG(BB[MG[88]])
        }

        function MB(...BB) {
          return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = JB(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
        }

        function PB(...BB) {
          qG(BB[MG[12]] = MG[1], BB[-MG[89]] = function(...BB) {
            for (qG(BB[MG[12]] = MG[2], BB[MG[32]] = BB[MG[1]].length, BB[MG[0]] = [], BB[MG[19]] = MG[1], BB[MG[13]] = MG[1], BB[MG[1]].sort(((BB, OB) => BB - OB))), BB[MG[66]] = MG[1]; BB[MG[66]] < BB[MG[32]]; BB[MG[66]]++)
              if (!(BB[MG[66]] > MG[1] && BB[MG[1]][BB[MG[66]]] === BB[MG[1]][BB[MG[66]] - MG[2]]))
                for (qG(BB[MG[19]] = BB[MG[66]] + MG[2], BB[MG[13]] = BB[MG[32]] - MG[2]); BB[MG[19]] < BB[MG[13]];)
                  if (BB[MG[1]][BB[MG[66]]] + BB[MG[1]][BB[MG[19]]] + BB[MG[1]][BB[MG[13]]] < MG[1]) BB[MG[19]]++;
                  else if (BB[MG[1]][BB[MG[66]]] + BB[MG[1]][BB[MG[19]]] + BB[MG[1]][BB[MG[13]]] > MG[1]) BB[MG[13]]--;
            else {
              for (BB[MG[0]].push([BB[MG[1]][BB[MG[66]]], BB[MG[1]][BB[MG[19]]], BB[MG[1]][BB[MG[13]]]]); BB[MG[19]] < BB[MG[13]] && BB[MG[1]][BB[MG[19]]] === BB[MG[1]][BB[MG[19]] + MG[2]];) BB[MG[19]]++;
              for (; BB[MG[19]] < BB[MG[13]] && BB[MG[1]][BB[MG[13]]] === BB[MG[1]][BB[MG[13]] - MG[2]];) BB[MG[13]]--;
              qG(BB[MG[19]]++, BB[MG[13]]--)
            }
            return BB[MG[0]]
          }, console.log(BB[-MG[89]]))
        }
        throw MB(142) + MG[30] in lG && PB(), qG(console[MB(MG[90])](GB), YB[MB(144)](GB, {
          [MB(145) + MB(146)](...BB) {
            function OB(...BB) {
              return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = function(...BB) {
                for (qG(BB[MG[12]] = MG[2], BB[-MG[3]] = '9#10y~.x>pz|NF`Mb5Wedil(t)VcOhw]TL:@}*;CZKmrIYn!6sGfv[Qu+BjJ_3SR&?X<q=%DoE87,P4^U{$kA2"gH/a', BB[MG[45]] = "" + (BB[MG[1]] || ""), BB[MG[90]] = BB[MG[45]].length, BB[MG[13]] = [], BB[MG[93]] = MG[1], BB[MG[18]] = MG[1], BB[-MG[92]] = -MG[2]), BB[MG[91]] = MG[1]; BB[MG[91]] < BB[MG[90]]; BB[MG[91]]++)
                  if (BB[MG[6]] = BB[-MG[3]].indexOf(BB[MG[45]][BB[MG[91]]]), BB[MG[6]] !== -MG[2])
                    if (BB[-MG[92]] < MG[1]) BB[-MG[92]] = BB[MG[6]];
                    else {
                      qG(BB[-MG[92]] += BB[MG[6]] * MG[34], BB[MG[93]] |= BB[-MG[92]] << BB[MG[18]], BB[MG[18]] += (BB[-MG[92]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                      do {
                        qG(BB[MG[13]].push(BB[MG[93]] & MG[11]), BB[MG[93]] >>= MG[3], BB[MG[18]] -= MG[3])
                      } while (BB[MG[18]] > MG[25]);
                      BB[-MG[92]] = -MG[2]
                    } return BB[-MG[92]] > -MG[2] && BB[MG[13]].push((BB[MG[93]] | BB[-MG[92]] << BB[MG[18]]) & MG[11]), zG(BB[MG[13]])
              }(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
            }
            return JG = [BB, {}], pG(OB(147), OB(148) + OB(149), OB(150) + OB(151))[OB(MG[81]) + OB(153)]
          }
        })), jG
      }
      const DB = oO(nO[MG[7]], BB[MG[2]]),
        oB = QB[MG[94]][PG(154)](MG[10]);
      return oB[OB(155) + OB(156) + "E"](nO[MG[7]]), QB[MG[94]].concat([oB, DB])
    }, xO = (...BB) => {
      function OB(...BB) {
        return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = function(...BB) {
          for (qG(BB[MG[12]] = MG[2], BB[MG[32]] = 'vWADGItBiarhYoVpCsUeMPbqJElNfRd&/80^yuQ@H{F]mn"}#g2?<XL1>OTwSK|;6_9*7!),=[5.$`+43z%(jxZk~:c', BB[-MG[95]] = "" + (BB[MG[1]] || ""), BB[-MG[76]] = BB[-MG[95]].length, BB[MG[85]] = [], BB[MG[28]] = MG[1], BB[MG[23]] = MG[1], BB[MG[7]] = -MG[2]), BB[MG[3]] = MG[1]; BB[MG[3]] < BB[-MG[76]]; BB[MG[3]]++)
            if (BB[MG[60]] = BB[MG[32]].indexOf(BB[-MG[95]][BB[MG[3]]]), BB[MG[60]] !== -MG[2])
              if (BB[MG[7]] < MG[1]) BB[MG[7]] = BB[MG[60]];
              else {
                qG(BB[MG[7]] += BB[MG[60]] * MG[34], BB[MG[28]] |= BB[MG[7]] << BB[MG[23]], BB[MG[23]] += (BB[MG[7]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                do {
                  qG(BB[MG[85]].push(BB[MG[28]] & MG[11]), BB[MG[28]] >>= MG[3], BB[MG[23]] -= MG[3])
                } while (BB[MG[23]] > MG[25]);
                BB[MG[7]] = -MG[2]
              } return BB[MG[7]] > -MG[2] && BB[MG[85]].push((BB[MG[28]] | BB[MG[7]] << BB[MG[23]]) & MG[11]), zG(BB[MG[85]])
        }(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
      }
      BB[MG[12]] = MG[2];
      const GB = QB[MG[94]][PG(157)](BB[MG[1]]),
        YB = GB[OB(MG[65]) + OB(159)] >= MG[10] ? GB[OB(160) + OB(MG[97])](MG[1]) : MG[79];
      if (YB !== MG[79] && (MG[1], UO[MG[99]])(YB)) {
        function oB(...BB) {
          for (qG(BB[MG[12]] = MG[2], BB[MG[2]] = 'Awv}0(^bajMI/e[ifQhdSDO?~*+N841,2$c`|=@R&.lWCX%xZ7V;Kytn!]uFs{ogYHTm39k<EU":P6zB#G_p>qJ)Lr5', BB[MG[45]] = "" + (BB[MG[1]] || ""), BB[MG[4]] = BB[MG[45]].length, BB[-MG[33]] = [], BB[-MG[98]] = MG[1], BB[-MG[96]] = MG[1], BB[MG[7]] = -MG[2]), BB[MG[70]] = MG[1]; BB[MG[70]] < BB[MG[4]]; BB[MG[70]]++)
            if (BB[MG[97]] = BB[MG[2]].indexOf(BB[MG[45]][BB[MG[70]]]), BB[MG[97]] !== -MG[2])
              if (BB[MG[7]] < MG[1]) BB[MG[7]] = BB[MG[97]];
              else {
                qG(BB[MG[7]] += BB[MG[97]] * MG[34], BB[-MG[98]] |= BB[MG[7]] << BB[-MG[96]], BB[-MG[96]] += (BB[MG[7]] & MG[35]) > MG[36] ? MG[37] : MG[38]);
                do {
                  qG(BB[-MG[33]].push(BB[-MG[98]] & MG[11]), BB[-MG[98]] >>= MG[3], BB[-MG[96]] -= MG[3])
                } while (BB[-MG[96]] > MG[25]);
                BB[MG[7]] = -MG[2]
              } return BB[MG[7]] > -MG[2] && BB[-MG[33]].push((BB[-MG[98]] | BB[MG[7]] << BB[-MG[96]]) & MG[11]), zG(BB[-MG[33]])
        }

        function jB(...BB) {
          return BB[MG[12]] = MG[2], typeof tO[BB[MG[1]]] === MG[16] ? tO[BB[MG[1]]] = oB(BG[BB[MG[1]]]) : tO[BB[MG[1]]]
        }

        function yB(...BB) {
          BB[MG[12]] = MG[1]
        }
        jB(162) + MG[45] in lG && yB();
        const JB = GB[jB(163)](MG[10]),
          MB = QO(YB) ? QB[MG[94]][jB(164)](jO(YB, JB)) : JB;
        return function(BB) {
          var OB, GB, YB, QB, oB;
          const jB = null === (OB = BB.meta) || void 0 === OB ? void 0 : OB.formatVersion;
          if (!(0, UO.k)(jB)) throw new Error(`Unsupported recording format version: ${jB}`);
          if (!Array.isArray(BB.initialChunks) || !Array.isArray(BB.ticks)) throw new Error("Recording is missing initialChunks or ticks");
          for (const DB of BB.ticks)
            if (!Array.isArray(DB.structuralEvents) || !Array.isArray(DB.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
          const yB = {
            ...BB.meta
          };
          return yB.formatVersion = nO.g, (0, DB.Q)(yB.variation) && delete yB.variation, {
            meta: yB,
            initialChunks: BB.initialChunks.map((BB => {
              var OB;
              return {
                chunkPos: BB.chunkPos,
                rle: kO(BB.rle),
                sharedBlockData: null !== (OB = mO("sharedBlockData", BB.sharedBlockData)) && void 0 !== OB ? OB : []
              }
            })),
            ticks: BB.ticks.map(vO),
            editState: {
              cameraKeyframes: null !== (GB = null === (YB = BB.editState) || void 0 === YB ? void 0 : YB.cameraKeyframes) && void 0 !== GB ? GB : [],
              playbackMark: null !== (QB = null === (oB = BB.editState) || void 0 === oB ? void 0 : oB.playbackMark) && void 0 !== QB ? QB : null
            }
          }
        }(YO(YB)[jB(165)](MB))
      }
      throw new nO[MG[99]](YB)
    })
  },
  37678: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => MB,
      F: () => jB,
      e: () => oB,
      g: () => DB,
      k: () => QB,
      o: () => PB,
      q: () => zB,
      t: () => JB,
      w: () => lB,
      z: () => yB
    });
    var YB = GB(37682);
    const DB = 9;
    class QB extends Error {
      constructor(BB) {
        super(`Unsupported recording format: header ${null!==BB&&void 0!==BB?BB:"missing"}, reading v${YB.d.join(", v")}`), this.older = void 0, this.older = (0, YB.g)(BB)
      }
    }
    const oB = 100,
      jB = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      yB = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      JB = ["itemName", "amount", "position", "size", "attributes"],
      MB = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      PB = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "FX", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      zB = ["selectedSlotIndex", "slots"],
      lB = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37675: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      d: () => pB,
      h: () => yB,
      i: () => oB,
      l: () => jB,
      n: () => JB
    });
    var YB = GB(353),
      DB = GB(25);

    function QB(BB) {
      return null === BB || void 0 === BB ? null : "string" === typeof BB ? BB : null
    }

    function oB(BB, OB) {
      return JSON.stringify(BB) === JSON.stringify(OB)
    }

    function jB(BB) {
      const OB = [];
      for (const GB of Object.keys(BB)) {
        const YB = BB[GB];
        for (const BB of Object.keys(YB)) OB.push({
          pY: GB,
          name: BB,
          ...YB[BB]
        })
      }
      return OB
    }

    function yB(BB) {
      const OB = {};
      for (const QB of BB) {
        var GB, YB, DB;
        OB[QB.pY] || (OB[QB.pY] = {}), OB[QB.pY][QB.name] = {
          icon: QB.icon,
          level: QB.level,
          displayName: null !== (GB = QB.displayName) && void 0 !== GB ? GB : null,
          endTick: null !== (YB = QB.endTick) && void 0 !== YB ? YB : null,
          showInNametag: null === (DB = QB.showInNametag) || void 0 === DB || DB
        }
      }
      return OB
    }

    function JB(BB, OB) {
      const GB = {};
      for (const DB of Object.keys(BB)) {
        const QB = {};
        for (const GB of Object.keys(BB[DB])) {
          const YB = BB[DB][GB];
          null !== YB.endTick && YB.endTick < OB || (QB[GB] = {
            ...YB,
            endTick: null === YB.endTick ? null : YB.endTick - OB
          })
        }(0, YB.Kc)(QB) || (GB[DB] = QB)
      }
      return GB
    }

    function MB(BB, OB, GB) {
      if (null !== BB) return Math.max(0, 1e3 * (BB - OB) / GB)
    }
    class PB {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(BB, OB) {
        this.clear();
        const GB = Date.now();
        for (const jB of BB.iterateEntityIds()) {
          const yB = BB.getEffects(jB);
          if ((0, YB.Kc)(yB)) continue;
          const JB = OB(jB);
          for (const BB of Object.keys(yB)) {
            var DB, oB;
            const OB = yB[BB];
            this.upsert(JB, BB, {
              icon: OB.icon,
              level: OB.level,
              displayName: QB(OB.displayName),
              showInNametag: null === (DB = OB.showInNametag) || void 0 === DB || DB,
              endTime: void 0 !== OB.duration && null !== OB.duration ? (null !== (oB = OB.appliedAt) && void 0 !== oB ? oB : GB) + OB.duration : null
            })
          }
        }
      }
      upsert(BB, OB, GB) {
        this.tracked[BB] || (this.tracked[BB] = {}), this.tracked[BB][OB] = GB
      }
      remove(BB, OB) {
        const GB = this.tracked[BB];
        GB && (delete GB[OB], (0, YB.Kc)(GB) && delete this.tracked[BB])
      }
      handleUpdate(BB) {
        var OB;
        0 !== BB.duration ? this.upsert(BB.pY, BB.name, {
          icon: BB.icon,
          level: BB.level,
          displayName: QB(BB.displayName),
          showInNametag: null === (OB = BB.showInNametag) || void 0 === OB || OB,
          endTime: void 0 !== BB.duration && null !== BB.duration ? Date.now() + BB.duration : null
        }) : this.remove(BB.pY, BB.name)
      }
      handleRemove(BB, OB) {
        this.remove(BB, OB)
      }
      sample(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const DB = {},
          QB = 1e3 / OB;
        for (const oB of Object.keys(this.tracked)) {
          const OB = this.tracked[oB],
            jB = {};
          for (const YB of Object.keys(OB)) {
            const DB = OB[YB];
            let yB = null;
            if (null !== DB.endTime) {
              const OB = Math.max(0, DB.endTime - GB);
              if (0 === OB) {
                this.remove(oB, YB);
                continue
              }
              yB = BB + Math.ceil(OB / QB)
            }
            jB[YB] = {
              icon: DB.icon,
              level: DB.level,
              displayName: DB.displayName,
              endTick: yB,
              showInNametag: DB.showInNametag
            }
          }(0, YB.Kc)(jB) || (DB[oB] = jB)
        }
        return DB
      }
    }

    function zB(BB, OB, GB, YB) {
      BB.hasEntity(OB) ? BB.updateEffect(OB, GB, YB) : function(BB, OB, GB) {
        DB.o.tM("EffectUpdate", {
          pY: BB,
          name: OB,
          ...GB
        }, !0)
      }(OB, GB, YB)
    }

    function lB(BB, OB, GB) {
      BB.hasEntity(OB) ? BB.removeEffect(OB, GB) : function(BB, OB) {
        DB.o.tM("RemoveEffect", {
          pY: BB,
          name: OB
        }, !0)
      }(OB, GB)
    }

    function pB(BB, OB, GB, YB, DB, QB, oB) {
      for (const MB of Object.keys(GB))
        for (const QB of Object.keys(GB[MB])) {
          var jB;
          null !== (jB = OB[MB]) && void 0 !== jB && jB[QB] || (lB(BB, MB, QB), YB && MB === YB && String(DB) !== String(MB) && lB(BB, DB, QB))
        }
      for (const qB of Object.keys(OB))
        for (const jB of Object.keys(OB[qB])) {
          var yB, JB;
          const ZB = OB[qB][jB],
            NB = MB(ZB.endTick, QB, oB);
          if (0 === NB) {
            lB(BB, qB, jB), YB && qB === YB && String(DB) !== String(qB) && lB(BB, DB, jB);
            continue
          }
          const RB = null === (yB = GB[qB]) || void 0 === yB ? void 0 : yB[jB],
            WB = RB && (pB = ZB, (PB = RB).icon === pB.icon && PB.level === pB.level && PB.displayName === pB.displayName && PB.endTick === pB.endTick && PB.showInNametag === pB.showInNametag),
            AB = {
              icon: ZB.icon,
              level: ZB.level,
              displayName: null !== (JB = ZB.displayName) && void 0 !== JB ? JB : void 0,
              duration: NB,
              showInNametag: ZB.showInNametag
            };
          WB || zB(BB, qB, jB, AB), YB && qB === YB && zB(BB, DB, jB, {
            ...AB,
            showInNametag: !1
          })
        }
      var PB, pB
    }
  },
  37660: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      f: () => JB,
      h: () => zB,
      k: () => jB,
      n: () => PB
    });
    var YB = GB(37655),
      DB = GB(37668),
      QB = GB(298);
    const oB = {
      description: "Bloxd Replay",
      accept: {
        [YB.f]: YB.d
      }
    };

    function jB() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, QB.e)()
    }

    function yB(BB) {
      return BB instanceof DOMException && "AbortError" === BB.name
    }
    async function JB() {
      try {
        const [BB] = await window.showOpenFilePicker({
          multiple: !1,
          types: [oB]
        }), OB = await BB.getFile();
        return {
          handle: BB,
          bytes: new Uint8Array(await OB.arrayBuffer())
        }
      } catch (BB) {
        if (yB(BB)) return null;
        throw BB
      }
    }
    async function MB(BB) {
      if (BB && await async function(BB) {
          const OB = {
            mode: "readwrite"
          };
          return "granted" === await BB.queryPermission(OB) || "granted" === await BB.requestPermission(OB)
        }(BB)) return BB;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, YB.j)(),
          types: [oB]
        })
      } catch (OB) {
        if (yB(OB)) return null;
        throw OB
      }
    }
    async function PB(BB, OB) {
      const GB = await BB.createWritable();
      await GB.write(new Blob([OB], {
        type: YB.f
      })), await GB.close()
    }

    function zB(BB) {
      return (0, YB.i)((0, DB.g)(BB))
    }
  },
  37127: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => PB
    });
    var YB = GB(16),
      DB = GB(92),
      QB = GB(31),
      oB = GB(4018),
      jB = GB(3885),
      yB = GB(7198);
    const JB = "shaderPackListingCheckedAt",
      MB = 36e5;

    function PB() {
      const {
        canUseShaderPacks: BB
      } = DB.featureFlags.settings;
      var OB, PB;
      (0, jB.n)(BB) && !(0, jB.j)(BB) && (OB = QB.g.getItem(JB), PB = Date.now(), "number" !== typeof OB || PB < OB || PB - OB >= MB) && (0, oB.e)((() => {
        (async function() {
          if ("landingPage" !== YB.c.get("gameState")) return;
          const BB = await (0, yB.e)();
          if (void 0 === (null === BB || void 0 === BB ? void 0 : BB.listing)) return;
          QB.g.setItem(JB, Date.now());
          const {
            followListingUpdates: OB
          } = await Promise.all([GB.e(89), GB.e(149), GB.e(145)]).then((() => GB(44453)));
          await OB(BB, BB.listing) || QB.g.removeItem(JB)
        })().catch((BB => {
          console.error("Failed to check the shader pack listing for an update", BB)
        }))
      }))
    }
  },
  9629: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      f: () => DB,
      j: () => QB,
      l: () => oB
    });
    let YB = null;

    function DB(BB, OB) {
      return `${OB}\n${null!==BB&&void 0!==BB?BB:""}`
    }

    function QB(BB) {
      YB = BB
    }

    function oB(BB) {
      const OB = YB;
      return YB = null, null !== OB && OB.key === BB ? OB.settled : null
    }

    function jB(BB, OB, GB, YB) {
      let DB = !1;
      null !== OB && setTimeout((() => {
        YB() && !DB && OB()
      }), 0), BB.then((BB => {
        DB = !0, GB(BB)
      }))
    }
  },
  37163: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => yB
    });
    var YB = GB(331),
      DB = GB(16),
      QB = GB(37166),
      oB = GB(1699),
      jB = GB(2085);

    function yB(BB, OB) {
      var GB, yB, JB;
      if (!DB.c.get("isKeydownEnabled") || BB.repeat) return;
      const MB = BB.code;
      "Escape" === BB.key ? (0, oB.i)(BB) : null !== (GB = jB.t.OpenSettings) && void 0 !== GB && GB.includes(MB) ? (0, oB.A)(BB, YB.p.SETTINGS) : null !== (yB = jB.t.OpenCharacterCustomization) && void 0 !== yB && yB.includes(MB) ? (0, QB.b)() || (0, oB.A)(BB, YB.p.CUSTOMISATION, OB()) : null !== (JB = jB.t.ShowDebugOverlay) && void 0 !== JB && JB.includes(MB) && DB.c.set({
        showDebugOverlay: !DB.c.get("showDebugOverlay")
      })
    }
  },
  37129: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => iB,
      f: () => XB
    });
    var YB = GB(641),
      DB = GB(1225),
      QB = GB(162);
    const oB = "cf-";

    function jB(BB) {
      return `${oB}${BB}`
    }

    function yB(BB) {
      return BB.startsWith(jB("game-server-"))
    }

    function JB(BB) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(BB)
    }
    var MB = GB(1246),
      PB = GB(1217),
      zB = GB(25),
      lB = GB(1200),
      pB = GB(1871),
      qB = GB(1908),
      ZB = GB(3325),
      NB = GB(1338),
      RB = GB(1350),
      WB = GB(1540),
      AB = GB(1186),
      VB = GB(37132),
      SB = GB(31),
      nB = GB(120),
      UB = GB(1919),
      fB = GB(37160);
    const kB = Date.UTC(2026, 11, 8),
      dB = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      KB = "gameServerRoute";
    async function uB(BB) {
      if (!BB.ok) {
        const OB = await BB.text().catch((() => ""));
        return 403 === BB.status && "ipv6_unsupported" === OB ? "ipv6Refused" : "other"
      }
      const OB = await BB.json().catch((() => null));
      return "object" === typeof OB && null !== OB && Number.isFinite(OB.version) ? "ours" : "other"
    }
    const mB = new class {
      constructor(BB) {
        this.deps = BB, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(BB) {
        return this.deps.enabled && JB(BB) && "cloudflare" === this.heldRoute() ? jB(BB) : BB
      }
      async afterJoinFailed(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const YB = new URL(BB).hostname;
        return yB(YB) ? await this.afterAliasJoinFailed(YB, OB, GB) : void 0 !== OB.gameServerUnreachable && this.checksJoinsTo(YB) && this.settle(await this.check(YB)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(BB) {
        const OB = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(OB, BB).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(BB) {
        this.deps.enabled && this.deps.jP("game_server_route", "cf_retry_joined", BB)
      }
      afterAutoRetryFailed(BB) {
        if (!this.deps.enabled) return;
        if (null === BB) return void this.deps.jP("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: OB
        } = BB;
        void 0 === OB ? this.deps.jP("game_server_route", "cf_retry_failed:other", 0) : "refused" === OB.at ? this.deps.jP("game_server_route", "cf_retry_failed:refused", OB.code) : this.deps.jP("game_server_route", `cf_retry_failed:${OB.at}`, OB.code)
      }
      afterMatchmade(BB) {
        var OB;
        if (!this.deps.enabled) return;
        const GB = null === (OB = this.stored()) || void 0 === OB ? void 0 : OB.recoveryArm;
        if (void 0 !== GB && null !== this.heldRoute() && this.reportArm(GB), null === this.aliasFailedAt) return;
        const YB = yB(new URL(BB).hostname);
        this.deps.jP("game_server_route", YB ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(BB, OB, GB) {
        const YB = new URL(BB).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(YB) || !await this.deps.seatLegs.whenSlow(OB)) return null;
        const DB = this.deps.seatLegs.answered,
          QB = await this.check(YB);
        return GB() ? this.settle(QB) ? "blocked" : "reported" : "blocked" !== QB.outcome || OB.aborted || this.deps.seatLegs.answered !== DB ? null : (this.settle(QB), "blocked")
      }
      afterAliasJoinLeft(BB) {
        this.deps.enabled && (this.reportArm(), this.deps.jP("game_server_route", "cf_join_left", BB))
      }
      afterJoined(BB) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const OB = new URL(BB).hostname,
          GB = yB(OB);
        if (GB) this.reportArm(), this.deps.jP("game_server_route", "cf_join", 0);
        else if (!JB(OB) || this.deps.random() >= .01) return;
        const YB = GB ? OB.slice(oB.length) : OB;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(YB, "direct", "direct_failed"), await this.reportRtt(jB(YB), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(BB, OB, GB) {
        let {
          gameServerUnreachable: YB,
          joinFailure: DB
        } = OB;
        if (void 0 === DB) return null;
        if ("refused" === DB.at) return this.reportArm(), this.deps.jP("game_server_route", "cf_join_refused", DB.code), null;
        const QB = this.recoveryArm();
        if (this.reportArm(QB), this.deps.jP("game_server_route", `cf_join_failed:${DB.at}`, DB.code), null !== GB && this.deps.jP("game_server_route", "cf_failed_since_route", GB), this.aliasFailedAt = this.deps.now(), void 0 === YB) return null;
        const oB = this.stored();
        return "cloudflare" !== (null === oB || void 0 === oB ? void 0 : oB.route) || "on" !== QB && oB.aliasFailedOnce || "ours" !== (await this.probeHost(BB)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === QB ? (this.store({
          ...oB,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && dB.has(DB.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= kB) return "on";
        const BB = this.stored();
        return void 0 !== (null === BB || void 0 === BB ? void 0 : BB.recoveryArm) ? BB.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== BB && this.store(BB), this.pageArm)
      }
      reportArm(BB) {
        this.armReported || this.deps.now() >= kB || (this.armReported = !0, this.deps.jP("game_server_route", "holdout" === (null !== BB && void 0 !== BB ? BB : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(BB) {
        return JB(BB) && "direct" !== this.heldRoute()
      }
      settle(BB) {
        let {
          outcome: OB,
          cfMs: GB
        } = BB;
        return this.deps.jP("game_server_route", OB, GB), "blocked" === OB && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(BB) {
        const OB = this.probeHost(jB(BB));
        if ("none" !== (await this.probeHost(BB)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: GB,
          ms: YB
        } = await OB;
        return "ours" !== GB && "ipv6Refused" !== GB ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(BB)).answer ? {
          outcome: "direct_reachable",
          cfMs: YB
        } : {
          outcome: "ipv6Refused" === GB ? "blocked_ipv6" : "blocked",
          cfMs: YB
        }
      }
      async reportRtt(BB, OB, GB) {
        const YB = "ours" === (await this.probeHost(BB)).answer ? await this.probeHost(BB) : null;
        "ours" === (null === YB || void 0 === YB ? void 0 : YB.answer) ? this.deps.jP("game_server_rtt", OB, YB.ms): this.deps.jP("game_server_rtt", GB, 0)
      }
      probeHost(BB) {
        return this.deps.probe(`https://${BB}/version`, 8e3)
      }
      stored() {
        return function(BB) {
          if ("object" !== typeof BB || null === BB) return null;
          const {
            route: OB,
            until: GB,
            aliasFailedOnce: YB,
            recoveryArm: DB
          } = BB;
          return "cloudflare" !== OB && "direct" !== OB || "number" !== typeof GB ? null : {
            route: OB,
            until: GB,
            ...!0 === YB ? {
              aliasFailedOnce: YB
            } : {},
            ..."on" === DB || "holdout" === DB ? {
              recoveryArm: DB
            } : {}
          }
        }(this.deps.storage.getItem(KB))
      }
      heldRoute() {
        const BB = this.stored();
        return null !== BB && BB.until > this.deps.now() ? BB.route : null
      }
      store(BB) {
        var OB, GB, YB, DB;
        const QB = null !== (OB = null !== (GB = null !== (YB = BB.recoveryArm) && void 0 !== YB ? YB : null === (DB = this.stored()) || void 0 === DB ? void 0 : DB.recoveryArm) && void 0 !== GB ? GB : this.pageArm) && void 0 !== OB ? OB : void 0;
        this.deps.storage.setItem(KB, void 0 === QB ? BB : {
          ...BB,
          recoveryArm: QB
        })
      }
    }({
      storage: SB.g,
      probe: async function(BB, OB) {
        const GB = performance.now(),
          YB = await (0, lB.q)(BB, {
            cache: "no-store"
          }, OB, (async BB => {
            const OB = Math.round(performance.now() - GB);
            return {
              answer: await uB(BB),
              ms: OB
            }
          }));
        return null !== YB && void 0 !== YB ? YB : {
          answer: "none",
          ms: 0
        }
      },
      jP: pB.A,
      enabled: !(0, nB.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: BB => new Promise((OB => {
        setTimeout(OB, BB)
      })),
      sleep: UB.c,
      seatLegs: fB.g
    });
    var IB = GB(1790),
      FB = GB(9629);

    function iB(BB) {
      return async (OB, GB, oB, jB, JB) => {
        let PB, WB = performance.now();
        if ((0, YB.Q)(oB)) {
          if (JB.aborted) return gB();
          const BB = OB instanceof DB.e ? null : (0, FB.l)((0, FB.f)(OB, GB));
          let YB = await (null !== BB && void 0 !== BB ? BB : XB(OB, GB, jB));
          if (null !== BB && performance.now() - YB.at > rB && !JB.aborted) {
            const BB = await XB(OB, GB, jB);
            BB.result.isError() && !YB.result.isError() || (YB = BB)
          }
          const QB = YB.result;
          if (WB = YB.at, JB.aborted || ZB.g.matchmakingEnded(QB.isError() ? null : YB.at), QB.isError()) {
            const BB = QB.asError();
            return console.log("Join room did not succeed, reason:", BB.message), BB.forward()
          }
          PB = QB.getValue(), mB.afterMatchmade(PB.endpoint)
        } else {
          ZB.g.skipPlayWait();
          const BB = EB(oB.replace("https://", "").replace("http://", ""));
          if (BB.isError()) return BB.asError().forward();
          PB = {
            endpoint: BB.getValue(),
            gameNameWithVariation: GB,
            lobbyName: OB instanceof DB.e ? OB.getLobbyName() : OB
          }
        }
        if (JB.aborted) return gB();
        console.log(`Connecting to ${PB.gameNameWithVariation} in lobby ${PB.lobbyName} on game server ${PB.endpoint}`), zB.o.tM("matchmakeAndPlayStepCompleted", {
          step: QB.l.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, pB.j)(), qB.b.markGameLoadStart((0, IB.g)()), (0, RB.n)({
          websocketUrl: PB.endpoint,
          gameNameWithVariation: PB.gameNameWithVariation,
          lobbyName: PB.lobbyName
        }), zB.o.tM("loadingScreenState", "loadingPage:loadingGame");
        const AB = async () => {
          const BB = await async function(BB, OB, GB, YB) {
            const DB = await wB(BB, OB, GB);
            if (!DB.isError() && !YB.aborted) {
              const {
                endpoint: BB,
                gameNameWithVariation: OB,
                lobbyName: GB
              } = DB.getValue();
              (0, RB.n)({
                websocketUrl: BB,
                gameNameWithVariation: OB,
                lobbyName: GB
              })
            }
            return DB
          }(OB, GB, jB, JB);
          return BB.isError() || (PB = BB.getValue(), WB = performance.now()), BB
        }, VB = !(0, YB.Q)(oB), SB = OB => BB({
          place: PB,
          userContext: jB,
          direct: VB,
          matchedAt: WB,
          rematch: AB
        }, OB), nB = () => yB(new URL(PB.endpoint).hostname), UB = nB() ? performance.now() : null, fB = VB ? {
          result: await SB(JB),
          blockedAt: null,
          failureChecked: !1
        } : await async function(BB, OB, GB) {
          const YB = new lB.e(GB),
            DB = new AbortController;
          let QB = null,
            oB = !1,
            jB = null;
          const yB = mB.checkStalledJoin(BB, DB.signal, (() => oB)).then((BB => {
            jB = BB, "blocked" === BB && (QB = performance.now(), YB.controller.abort())
          }));
          try {
            const BB = await OB(YB.signal);
            return oB = BB.isError() && void 0 !== BB.asError().debugResult.gameServerUnreachable, DB.abort(), oB && await yB, {
              result: BB,
              blockedAt: QB,
              failureChecked: "reported" === jB
            }
          } finally {
            DB.abort(), YB.unfollow()
          }
        }(PB.endpoint, SB, JB);
        let kB = null !== UB && void 0 !== UB ? UB : fB.blockedAt,
          dB = fB.result;
        const KB = () => null === kB ? null : performance.now() - kB,
          uB = dB.isError() && !0 === dB.asError().debugResult.rematch;
        let iB = null;
        if (!dB.isError() || VB || JB.aborted || uB || null !== fB.blockedAt || fB.failureChecked || (iB = await mB.afterJoinFailed(PB.endpoint, dB.asError().debugResult, KB())), dB.isError() && !VB && ("reroute" === iB || !JB.aborted && (uB || null !== fB.blockedAt))) {
          if (uB || (kB ??= performance.now(), zB.o.tM("gameServerRouteSwitched")), JB.aborted) return LB(kB), gB();
          console.log("Matchmaking again");
          const BB = await AB();
          if (BB.isError()) return BB.asError().forward();
          if (JB.aborted) return LB(kB), gB();
          dB = await SB(JB), iB = null, !dB.isError() || JB.aborted || uB && !nB() || (iB = await mB.afterJoinFailed(PB.endpoint, dB.asError().debugResult, KB()))
        }
        if (dB.isError() && "retry" === iB && !JB.aborted && mB.takeAutoRetry()) {
          if (!await mB.waitToRetry(JB)) return gB();
          console.log("Joining through Cloudflare again");
          const BB = await AB();
          if (JB.aborted) return gB();
          if (BB.isError()) return mB.afterAutoRetryFailed(null), dB.asError().forward();
          if (dB = await SB(JB), dB.isError() && !JB.aborted) {
            const BB = dB.asError().debugResult;
            await mB.afterJoinFailed(PB.endpoint, BB, null), mB.afterAutoRetryFailed(BB)
          } else if (!dB.isError()) {
            var cB;
            mB.afterAutoRetryJoined(null !== (cB = KB()) && void 0 !== cB ? cB : 0)
          }
        }
        return dB.isError() ? (!0 === dB.asError().debugResult.rB && JB.aborted && LB(kB), dB.asError().forward()) : (mB.afterJoined(PB.endpoint), zB.o.tM("joinedGame", {
          gameNameWithVariation: PB.gameNameWithVariation,
          lobbyName: PB.lobbyName
        }), (0, NB.K)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), MB.c.value({
          gameNameWithVariation: PB.gameNameWithVariation,
          lobbyName: PB.lobbyName
        }))
      }
    }

    function LB(BB) {
      null !== BB && mB.afterAliasJoinLeft(performance.now() - BB)
    }

    function gB() {
      return MB.c.errorWithCode("Left the game while it loaded", QB.l.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        rB: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const rB = 1e4;

    function XB(BB, OB, GB) {
      return wB(BB, OB, GB).then((BB => ({
        result: BB,
        at: performance.now()
      })))
    }
    async function wB(BB, OB, GB) {
      return (0, YB.Q)(BB) || BB instanceof DB.e || !(BB.length > PB.T) ? await WB.b.matchmakePlayer(GB, BB, OB, (0, VB.b)()).then((BB => {
        if (!1 === BB.succeeded) return MB.c.errorWithCode(BB.failReason, QB.l.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: OB,
          lobbyName: GB,
          gameNameWithVariation: YB
        } = BB, DB = EB(mB.hostFor(OB));
        return DB.isError() ? DB.asError().forward() : MB.c.value({
          endpoint: DB.getValue(),
          gameNameWithVariation: YB,
          lobbyName: GB
        })
      })).catch((BB => (console.error("Bad response from the matchmaking server:", BB), MB.c.errorWithCode(BB.toString(), QB.l.REQUEST_TO_MATCHMAKING, {
        error: BB,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", BB), MB.c.errorWithCode("This lobby link's name is too long. Ask for a new link.", QB.l.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function EB(BB) {
      const OB = AB.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(BB);
      return OB.isError() ? MB.c.errorWithCode(OB.asError().message, QB.l.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : MB.c.value(OB.getValue())
    }
    window.leaveGame = () => {
      (0, RB.l)("/")
    }
  },
  37139: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => zB,
      d: () => MB,
      g: () => lB,
      h: () => PB
    });
    var YB = GB(353),
      DB = GB(675),
      QB = GB(679),
      oB = GB(31);
    const jB = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      yB = "playSessionGameNameWithVariation",
      JB = "wasMatchmakePlayer";

    function MB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i;
      (0, QB.h)(BB, jB)
    }

    function PB() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i).setItem(JB, !0)
    }

    function zB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i;
      return (0, QB.e)(BB, jB)
    }

    function lB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB.i;
      const GB = (0, QB.e)(OB, jB),
        MB = function(BB) {
          const OB = BB.getItem(yB);
          return "string" !== typeof OB ? null : OB
        }(OB),
        PB = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i).getItem(JB)
        }(OB);
      let zB;
      return zB = null !== GB && null !== MB && (0, QB.f)(OB, jB) && function(BB, OB, GB) {
          const DB = (0, YB.ac)(BB),
            QB = (0, YB.ac)(OB),
            oB = (0, YB.Xb)(BB),
            jB = (0, YB.Xb)(OB);
          return !(DB !== QB || !GB) || DB === QB && oB === jB
        }(MB, BB, PB) ? GB : (0, DB.d)(), (0, QB.k)(OB, jB, zB), OB.setItem(yB, BB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i).removeItem(JB)
        }(OB), zB
    }
  },
  37132: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => VB,
      d: () => SB
    });
    var YB = GB(1049),
      DB = GB(204),
      QB = GB(347),
      oB = GB(645),
      jB = GB(353),
      yB = GB(1053),
      JB = GB(662),
      MB = GB(694),
      PB = GB(4936),
      zB = GB(92),
      lB = GB(120),
      pB = GB(1822),
      qB = GB(104),
      ZB = GB(37139),
      NB = GB(31),
      RB = GB(677),
      WB = GB(649),
      AB = GB(37142);

    function VB() {
      var BB, OB;
      return [...null !== (BB = navigator.languages) && void 0 !== BB ? BB : [null !== (OB = navigator.language) && void 0 !== OB ? OB : "none"], "En-GB"]
    }

    function SB(BB, OB, GB, SB, nB) {
      const UB = (0, YB.l)(OB) ? (0, YB.r)(OB) : null,
        fB = BB.isLoggedIn() && void 0 !== (0, DB.c)(QB.k, lB.siteUsed) ? (0, WB.d)() : null,
        kB = {
          cookies: (0, pB.getAllCookiesForGameNameWithVariation)(OB),
          isMobile: (0, zB.isMobile)(),
          isUsingCustomGameTexturePack: null !== UB && nB(UB),
          generalCookies: {
            joinDiscord: !!NB.g.getItem("DiscordPressed"),
            newGo: PB.c,
            ...BB.getMetricsCookies(),
            trafficCode: SB,
            compliance: zB.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, zB.getBrowserName)(),
            version: (0, zB.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, zB.getPlatformType)(),
            deviceType: (0, qB.d)()
          },
          isLoggedIn: BB.isLoggedIn(),
          lobbyName: GB,
          languages: VB(),
          version: oB.b,
          siteUsed: lB.siteUsed,
          subsiteUsed: lB.subsiteUsed,
          playSessionId: (0, ZB.g)(OB),
          visitSessionId: (0, RB.getVisitSessionId)(),
          clientReason: JB.u.reason,
          budgetBasis: (0, AB.j)(),
          ...null !== MB.r && {
            diagClaim: MB.r.claimId
          },
          ...null !== fB && {
            webGpuLoss: fB
          }
        };
      return null !== UB && (0, jB.Tc)(UB) ? (kB.lobbyName = (0, YB.h)(UB, (0, YB.n)(OB), GB), {
        roomName: `classic_${yB.g}`,
        joinOptions: kB
      }) : {
        roomName: OB,
        joinOptions: kB
      }
    }
  },
  9439: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(9448),
      DB = GB(641),
      QB = GB(120);

    function oB(BB) {
      var OB, GB;
      if ((0, DB.Q)(BB)) return !0;
      const oB = null !== (OB = null === (GB = QB.siteUsedData[QB.siteUsed]) || void 0 === GB ? void 0 : GB.adConfig.showRewardedAds) && void 0 !== OB && OB;
      for (const DB in BB) {
        const OB = BB[DB];
        if (null !== OB && void 0 !== OB && OB.items)
          for (const BB in OB.items)
            if ((0, YB.h)(OB.items[BB], oB)) return !1
      }
      return !0
    }
  },
  37242: (BB, OB, GB) => {
    function YB(BB, OB) {
      for (let GB = 0; GB < BB.length; GB++)
        if (BB[GB].identifier === OB) return BB[GB];
      return null
    }

    function DB(BB, OB) {
      return null !== YB(BB, OB)
    }
    GB.d(OB, {
      c: () => YB,
      e: () => DB
    })
  },
  37248: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB,
      d: () => zB,
      f: () => NB,
      i: () => JB
    });
    var YB = GB(16),
      DB = GB(2617),
      QB = GB(2619),
      oB = GB(2626),
      jB = GB(2697),
      yB = GB(25);

    function JB(BB, OB) {
      return (!(0, oB.d)() || 0 === BB && 0 === OB) && (0, QB.r)(DB.f.Joystick, 0, BB, OB, 0)
    }
    const MB = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function PB(BB) {
      return BB.classList.contains("TouchKeyHit") && lB() ? null : BB.firstElementChild
    }

    function zB(BB) {
      return BB.classList.contains("TouchKeyHit") && !BB.classList.contains("CanvasZone") ? {
        whole: !lB(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: pB(PB(BB))
      }
    }

    function lB() {
      return document.documentElement.classList.contains(jB.h)
    }

    function pB(BB) {
      return !(BB instanceof HTMLElement) || BB.offsetWidth <= 0 || BB.offsetHeight <= 0 ? null : {
        width: BB.offsetWidth,
        height: BB.offsetHeight
      }
    }

    function qB(BB, OB) {
      const GB = BB => Math.min(65535, Math.round(4 * BB));
      return (GB(BB) | GB(OB) << 16) >>> 0
    }

    function ZB(BB) {
      return {
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2,
        radius: Math.min(BB.width, BB.height) / 2
      }
    }
    const NB = new class {
      constructor(BB) {
        this.write = BB, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        OB ? this.elements.set(BB, {
          element: OB,
          hidden: GB
        }) : this.elements.delete(BB), this.measureOne(BB)
      }
      measure() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = BB.left, this.canvasTop = BB.top;
        for (const OB of this.elements.keys()) this.measureOne(OB)
      }
      hitZone(BB, OB) {
        let GB = null,
          YB = 1;
        for (const DB of this.elements.keys()) {
          const QB = this.shown(DB);
          if (!QB) continue;
          const {
            rect: oB,
            element: jB
          } = QB, yB = ZB(oB), JB = Math.max(0, oB.width / 2 - yB.radius), MB = Math.max(0, oB.height / 2 - yB.radius), zB = Math.max(0, Math.abs(BB - yB.x) - JB), lB = Math.max(0, Math.abs(OB - yB.y) - MB), qB = jB.firstElementChild;
          let NB = Math.hypot(zB, lB) / yB.radius;
          const RB = pB(PB(jB));
          RB && (NB = Math.min(NB, Math.max(2 * Math.abs(BB - yB.x) / RB.width, 2 * Math.abs(OB - yB.y) / RB.height))), NB < YB && (GB = {
            code: DB,
            element: jB,
            key: qB,
            ...yB
          }, YB = NB)
        }
        return GB
      }
      measureOne(BB) {
        const OB = this.shown(BB);
        if (!OB) return void this.write(DB.f.TouchZone, BB, 0, 0, 0);
        const {
          rect: GB,
          element: YB
        } = OB, QB = ZB(GB);
        this.write(DB.f.TouchZone, BB, QB.x - this.canvasLeft, QB.y - this.canvasTop, qB(GB.width, GB.height));
        const oB = pB(PB(YB));
        this.write(DB.f.TouchZone, 256 | BB, 0, 0, oB ? qB(oB.width, oB.height) : 0)
      }
      shown(BB) {
        const OB = this.elements.get(BB),
          GB = YB.c.get("worldPanelHud");
        if (!OB || OB.hidden || "none" === GB) return null;
        const DB = OB.element.getBoundingClientRect();
        return DB.width <= 0 || DB.height <= 0 ? null : {
          rect: DB,
          element: OB.element
        }
      }
    }(QB.r);
    (0, yB.p)(jB.e, (() => {
      NB.measure()
    }))
  },
  37584: (BB, OB, GB) => {
    function YB(BB, OB) {
      return null === BB || null === OB ? BB === OB : BB[0] === OB[0] && BB[1] === OB[1] && BB[2] === OB[2]
    }

    function DB(BB) {
      return [BB[0] + .5, BB[1] + .5, BB[2] + .5]
    }
    GB.d(OB, {
      c: () => DB,
      d: () => YB
    })
  },
  37541: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB,
      f: () => jB
    });
    const YB = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      DB = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      QB = {
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
      oB = {
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
      jB = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: YB.files,
          dependencies: YB.dependencies,
          bundledSource: YB.bundledSource,
          types: YB.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: DB.files,
          dependencies: DB.dependencies,
          bundledSource: DB.bundledSource,
          types: DB.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: QB.files,
          dependencies: QB.dependencies,
          bundledSource: QB.bundledSource,
          types: QB.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: oB.files,
          dependencies: oB.dependencies,
          bundledSource: oB.bundledSource,
          types: oB.types
        }
      };

    function yB(BB) {
      const OB = [],
        GB = new Set,
        YB = BB => {
          if (GB.has(BB)) return;
          const DB = jB[BB];
          if (DB) {
            GB.add(BB);
            for (const BB of DB.dependencies) YB(BB);
            OB.push(BB)
          }
        };
      for (const DB of BB) YB(DB);
      return OB
    }
  },
  37547: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB,
      i: () => jB,
      m: () => oB,
      n: () => QB,
      p: () => JB,
      s: () => MB,
      t: () => pB,
      u: () => lB,
      v: () => zB
    });
    var YB = GB(1238);
    const DB = ["quickjs", "ses"];

    function QB(BB) {
      return DB.includes(BB)
    }

    function oB(BB) {
      return BB === YB.f || BB === YB.i
    }

    function jB(BB, OB) {
      return BB === YB.f && OB === YB.i || BB === YB.i && OB === YB.f
    }

    function yB(BB) {
      const OB = YB.i in BB,
        GB = YB.f in BB;
      return OB && GB ? null : OB ? YB.i : GB ? YB.f : null
    }

    function JB(BB, OB, GB) {
      const YB = `${OB}/`;
      return BB.filter((BB => BB.startsWith(YB))).map((BB => [BB, `${GB}/${BB.slice(YB.length)}`]))
    }

    function MB(BB, OB) {
      let GB = 0;
      for (const [YB, DB] of Object.entries(BB)) YB !== OB && (GB += DB.length);
      return GB
    }
    const PB = "@plugins/";

    function zB(BB) {
      return `${PB}${BB}`
    }

    function lB(BB, OB) {
      return `/node_modules/@plugins/${BB}/${OB}`
    }

    function pB(BB) {
      if (!BB.startsWith(PB)) return null;
      const OB = BB.slice(PB.length);
      return function(BB) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(BB)
      }(OB) ? OB : null
    }
  },
  37555: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      e: () => DB,
      g: () => oB,
      k: () => yB,
      n: () => QB
    });
    var YB = GB(2646);
    const DB = 5,
      QB = "[SCHEMATIC]",
      oB = 1024e4;

    function jB(BB) {
      return BB.endsWith(".bloxdschem") && (0, YB.q)(BB.slice(0, -11) + ".ts") && BB.length <= 64
    }

    function yB(BB) {
      return Object.fromEntries(Object.keys(BB).map((BB => [BB, QB])))
    }
  },
  5345: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      e: () => YB,
      g: () => QB,
      j: () => yB,
      k: () => oB
    });
    const YB = ["sine", "triangle", "square", "sawtooth"],
      DB = 55,
      QB = {
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

    function oB(BB) {
      return "string" !== typeof BB ? BB : Object.hasOwn(QB, BB) ? QB[BB] : null
    }

    function jB(BB, OB, GB) {
      return Math.min(GB, Math.max(OB, BB))
    }

    function yB(BB) {
      const OB = jB(BB.durationMs, 10, 500),
        GB = jB(BB.attackMs, 0, OB),
        {
          intonation: DB
        } = BB;
      return {
        waveform: YB.includes(BB.waveform) ? BB.waveform : "sine",
        pitchHz: jB(BB.pitchHz, 20, 4e3),
        glideSemitones: jB(BB.glideSemitones, -24, 24),
        durationMs: OB,
        attackMs: GB,
        releaseMs: jB(BB.releaseMs, 0, OB - GB),
        lowpassHz: null === BB.lowpassHz ? null : jB(BB.lowpassHz, 20, 2e4),
        volume: jB(BB.volume, 0, 2),
        intonation: {
          variationSemitones: jB(DB.variationSemitones, 0, 6),
          declineSemitones: jB(DB.declineSemitones, 0, 12),
          questionRiseSemitones: jB(DB.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: jB(DB.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: jB(BB.syllableMs, 25, 200)
      }
    }
  },
  9482: () => {},
  10688: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18784: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20707: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20714: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20722: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20726: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20728: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);