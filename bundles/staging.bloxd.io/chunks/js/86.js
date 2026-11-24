export const id = 86;
export const ids = [86];
export const modules = {
  36779: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => rt,
      g: () => zt
    });
    var Ot = Vt(63),
      qt = Vt(2024),
      Dt = Vt(36785),
      mt = Vt.n(Dt),
      dt = Vt(4677),
      jt = Vt(2001),
      Ht = Vt(1554),
      Xt = Vt(106),
      Qt = Vt(129),
      lt = Vt(391),
      Et = Vt(1140),
      ft = Vt.n(Et),
      wt = Vt(26),
      yt = Vt(1152),
      Nt = Vt(1732),
      Mt = Vt(1826),
      bt = Vt(1779),
      Jt = Vt(2084),
      Ct = Vt(1513),
      ut = Vt(2149),
      Kt = Vt(1492),
      ht = Vt(3695),
      vt = Vt(36788),
      Wt = Vt(36810),
      St = Vt(1574),
      ct = Vt(2504),
      Rt = Vt(1286),
      It = Vt(36823);
    var Pt = Vt(34326),
      Zt = Vt(1379);
    var Lt = Vt(1188);
    const Ft = Vt(36830),
      kt = ["enter", "t", "/"];
    let Gt = !1;

    function zt() {
      return Gt || (0, Mt.isTextEntry)(document.activeElement)
    }

    function ot() {
      var tt, et;
      (0, ut.b)();
      const Vt = null !== (tt = null === (et = (0, Ct.g)()) || void 0 === et ? void 0 : et.getBoundButton("keyboardChannel")) && void 0 !== tt ? tt : null;
      return Vt ? (0, Lt.jsx)(Jt.d, {
        className: "ChatInputChannelGlyph",
        glyph: Vt
      }) : null
    }

    function rt() {
      const {
        t: tt
      } = (0, Rt.H)(), {
        isTouchScreen: et
      } = (0, wt.k)(["isTouchScreen"]), Vt = (0, Kt.v)(), [Dt, Et] = (0, Ot.useState)(!1), Jt = (0, Ot.useRef)(Dt), Ct = (0, Ot.useRef)(null), {
        messages: ut,
        reportedPlayers: zt,
        channel: rt
      } = (0, ht.k)(), At = (0, Ot.useRef)(0), it = (0, Ot.useRef)(""), Yt = (0, Ot.useRef)(null);
      var Bt;
      Bt = Yt, (0, Ot.useEffect)((() => {
        if (!(0, Xt.isIOS)()) return;
        const tt = Bt.current;
        let et = null;
        const Vt = Vt => {
            const Ot = Vt.changedTouches[0];
            et = "none" === getComputedStyle(tt).pointerEvents ? {
              id: Ot.identifier,
              y: Ot.clientY
            } : null
          },
          Ot = Vt => {
            const Ot = et,
              qt = Ot && (0, It.c)(Vt.changedTouches, Ot.id);
            qt && (Vt.preventDefault(), tt.scrollBy({
              top: Ot.y - qt.clientY,
              behavior: "instant"
            }), Ot.y = qt.clientY)
          };
        return tt.addEventListener("touchstart", Vt, {
          passive: !0
        }), tt.addEventListener("touchmove", Ot, {
          passive: !1
        }), () => {
          tt.removeEventListener("touchstart", Vt), tt.removeEventListener("touchmove", Ot)
        }
      }), [Bt]);
      const [pt, xt] = (0, Ot.useState)(!1), [Tt, gt] = (0, Ot.useState)(!1), st = (0, Ot.useRef)(pt), nt = (0, Ot.useRef)(null), te = (0, Ot.useRef)(!1), ee = (0, Ot.useRef)(null), Ve = (0, Ot.useRef)(null), Oe = (0, Ot.useRef)(null), qe = (0, Ot.useRef)(je);
      qe.current = je;
      const De = (0, ct.g)();

      function me() {
        Jt.current = !1, Et(!1), Ve.current.blur()
      }

      function de(tt) {
        st.current = tt, xt(tt)
      }

      function je() {
        const tt = Ve.current.value;
        Ve.current.value = "", He(tt)
      }

      function He(tt) {
        (0, ht.h)(tt), At.current = 0, de(!1)
      }

      function Xe(tt, et) {
        0 === At.current && (it.current = Ve.current.value);
        const Vt = (0, ht.f)(At.current + tt, et);
        At.current = Vt.stepsBack, Ve.current.value = 0 === Vt.stepsBack ? it.current : Vt.text, setTimeout((() => {
          Ve.current && Ve.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function Qe() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        Yt.current && (!tt && st.current || (Yt.current.scrollTop = 1e5))
      }
      return (0, dt.d)(!0, Dt, "ChatComponent"), (0, Ot.useEffect)((() => (Gt = Dt, () => {
          Gt = !1
        })), [Dt]), (0, Ht.f)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, Nt.u)() && Et(!1)
        })), (0, Ot.useEffect)((() => {
          Ve.current.addEventListener("blur", (tt => {
            if (null === Ve.current) return;
            Array.from(document.querySelectorAll(":hover")).some((tt => tt.classList.contains("ChatInputChannel") || tt.classList.contains("ChatMsgSelectWrapper"))) || ((0, Xt.isMobile)() && Jt.current && "" !== Ve.current.value && qe.current(), Et(!1))
          }));
          const tt = tt => {
            Ct.current.contains(tt.target) || (0, bt.h)(tt.target) || Et(!1)
          };
          document.addEventListener("touchstart", tt, {
            capture: !0
          });
          const et = tt => {
            (0, Wt.j)(tt.target) && (Jt.current = !1, Et(!1))
          };
          document.addEventListener("mousedown", et, {
            capture: !0
          });
          const Vt = () => {
              clearTimeout(nt.current), de(!0)
            },
            Ot = () => {
              clearTimeout(nt.current), nt.current = setTimeout((() => {
                de(!1), Qe()
              }), 4e3)
            },
            Dt = () => {
              document.pointerLockElement ? (Et(!1), gt(!0), te.current = !1, de(!1), Qe()) : gt(!1)
            };
          Yt.current.addEventListener("pointermove", (tt => {
            "touch" === tt.pointerType || te.current || document.pointerLockElement || (te.current = !0, clearTimeout(nt.current))
          })), Yt.current.addEventListener("pointerleave", (tt => {
            "touch" !== tt.pointerType && (te.current = !1, st.current && Ot())
          })), Yt.current.addEventListener("pointerdown", (tt => {
            "touch" === tt.pointerType || document.pointerLockElement || (te.current = !0, Vt())
          })), Yt.current.addEventListener("wheel", (tt => {
            document.pointerLockElement || tt.deltaY >= 0 && Math.abs(Yt.current.scrollTop) < 1 || (Vt(), te.current || (nt.current = setTimeout((() => {
              de(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), Yt.current.addEventListener("touchstart", Vt), Yt.current.addEventListener("touchend", Ot), Yt.current.addEventListener("touchcancel", Ot), document.addEventListener("pointerlockchange", Dt);
          const dt = tt => {
            if (De.shown && (Jt.current || ! function(tt) {
                if ((0, Mt.isTypingInInput)()) return !0;
                const et = document.activeElement;
                return (et instanceof HTMLButtonElement || "button" === (null === et || void 0 === et ? void 0 : et.getAttribute("role"))) && ["Enter", " "].includes(tt.key)
              }(tt)) && "codeEditor" !== wt.b.get("openInGameMenuName") && "lobbyCodeEditor" !== wt.b.get("openInGameMenuName") && !qt.gameBridge.latest("connectedGame").replay)
              if (Jt.current || !(0, Nt.u)()) {
                if (Jt.current) {
                  if ("ArrowUp" === tt.code || "ArrowDown" === tt.code) return Xe("ArrowUp" === tt.code ? 1 : -1, !1), void tt.stopPropagation();
                  if ("Tab" === tt.code) return ht.d.selectNextChannel(), tt.stopPropagation(), void tt.preventDefault();
                  if (tt.ctrlKey && Ut.includes(Ft[tt.keyCode])) return tt.preventDefault(), void tt.stopPropagation()
                }
                if ([...kt, "esc"].includes(mt()(tt)))
                  if ("esc" !== mt()(tt)) {
                    if (!Jt.current || "/" !== mt()(tt)) {
                      if ("t" === mt()(tt)) {
                        if (Jt.current) return void tt.stopPropagation();
                        tt.preventDefault()
                      }
                      Jt.current && "" !== Ve.current.value && qe.current(), tt.repeat || (Jt.current || "/" === mt()(tt) && (Ve.current.value = "/", tt.preventDefault()), Et(!Jt.current))
                    }
                  } else Jt.current && (Et(!1), tt.stopPropagation());
                else Jt.current && tt.stopPropagation()
              } else kt.includes(mt()(tt)) && (tt.preventDefault(), tt.stopPropagation(), (0, Nt.c)(tt))
          };
          document.addEventListener("keydown", dt, {
            capture: !0
          });
          const jt = Yt.current;
          let Ht = !1;
          const Qt = new ResizeObserver((() => {
              Ht && (Ht = !1, Qe())
            })),
            lt = () => {
              Ht = !0, Qt.unobserve(jt), Qt.observe(jt)
            };
          ee.current = lt;
          const ft = new MutationObserver(lt);
          return ft.observe(jt, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", dt, {
              capture: !0
            }), document.removeEventListener("touchstart", tt, {
              capture: !0
            }), document.removeEventListener("mousedown", et, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", Dt), ee.current = null, ft.disconnect(), Qt.disconnect(), clearTimeout(nt.current)
          }
        }), []), (0, bt.m)(Ve, {
          open: () => {
            Et(!0)
          },
          close: () => {
            me()
          },
          submit: () => {
            "" !== Ve.current.value && je(), me()
          },
          stepHistory: () => {
            Xe(1, !0)
          },
          sendLine: tt => {
            He(tt), me()
          },
          selectNextChannel: () => {
            ht.d.selectNextChannel()
          }
        }), (0, Ot.useEffect)((() => {
          var tt;
          (Jt.current = Dt, Ve.current) && (Dt ? (At.current = 0, Ve.current.focus()) : (Ve.current.blur(), null === (tt = ee.current) || void 0 === tt || tt.call(ee)))
        }), [Dt]),
        function(tt, et) {
          (0, Ot.useLayoutEffect)((() => {
            if (!et) return;
            Pt.e.hold();
            const Vt = tt.current.closest(".InGameHeaderAndChat"),
              Ot = (0, Zt.d)((tt => {
                let {
                  top: et,
                  height: Ot
                } = tt;
                Vt.style.setProperty("--keyboard-top", `${et+Ot}px`)
              }));
            return () => {
              Ot(), Vt.style.removeProperty("--keyboard-top"), Pt.e.release()
            }
          }), [tt, et])
        }(Ct, Dt && et), (0, Lt.jsx)(Lt.Fragment, {
          children: (0, Lt.jsxs)("div", {
            ref: Ct,
            className: ft()("Chat", {
              Chatting: Dt
            }),
            "data-camera-keeper": Dt ? "" : void 0,
            children: [(0, Lt.jsx)("div", {
              ref: Yt,
              className: ft()("ChatMessages", {
                HideScrollbar: !pt && !Dt,
                NoScrolling: !(0, Xt.isMobile)() && Tt
              }),
              children: (0, Lt.jsx)(vt.d, {
                messages: ut,
                reportedPlayers: zt
              })
            }), et && !Dt && (0, Lt.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": tt("general:chat"),
              ...(0, St.e)((() => {
                Et(!0), Oe.current.style.display = "flex", (0, Xt.isIOS)() && Ve.current.focus()
              }), "pointerup"),
              children: (0, Lt.jsx)(yt.b, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, Lt.jsxs)("div", {
              ref: Oe,
              className: "ChatInputWrapper",
              style: {
                display: "" + (Dt ? "flex" : "none")
              },
              children: [rt && (0, Lt.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: rt.elementBgColor
                },
                onClick: tt => {
                  ht.d.selectNextChannel(), Ve.current.focus()
                },
                children: (0, Lt.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, Lt.jsx)(jt.e, {
                    text: rt.elementContent
                  })
                })
              }), rt && Vt && (0, Lt.jsx)(ot, {}), (0, Lt.jsx)("input", {
                className: "ChatInput",
                maxLength: lt.gd,
                ref: Ve,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": tt("general:chat"),
                placeholder: rt ? `${rt.channelName} Chat${"touchOnly"===(0,Qt.d)()||Vt?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const Ut = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36788: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => vt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(3700),
      dt = Vt(31),
      jt = Vt(2441),
      Ht = Vt(3649),
      Xt = Vt(2105),
      Qt = Vt(26),
      lt = Vt(2001),
      Et = Vt(36794),
      ft = Vt(2232),
      wt = Vt(36799),
      yt = Vt(2731),
      Nt = Vt(2708),
      Mt = Vt(2701),
      bt = Vt(3662),
      Jt = Vt(36802),
      Ct = Vt(3179),
      ut = Vt(2063),
      Kt = Vt(1188);

    function ht(tt) {
      for (let Vt = tt.length - 1; Vt >= 0; Vt--) {
        const Ot = "string" === typeof(et = tt[Vt]) ? et : "str" in et && "string" === typeof et.str ? et.str : "";
        if ("" !== Ot.trim()) return Ot
      }
      var et;
      return ""
    }

    function vt(tt) {
      let {
        messages: et,
        reportedPlayers: Vt
      } = tt;
      return (0, Kt.jsx)(Kt.Fragment, {
        children: et.map((tt => (0, Kt.jsx)(Wt, {
          message: tt,
          reportedPlayers: Vt
        }, tt.clientChatMsgId)))
      })
    }
    const Wt = (0, Ot.memo)((function(tt) {
      var et;
      let {
        message: Vt,
        reportedPlayers: qt
      } = tt;
      const vt = (0, Ot.useRef)(null),
        [Wt] = (0, Ot.useState)(Ct.f),
        {
          author: St
        } = Vt,
        ct = null === St || void 0 === St ? void 0 : St.id,
        Rt = null !== (et = null === St || void 0 === St ? void 0 : St.name) && void 0 !== et ? et : void 0,
        It = (0, Xt.c)(Rt),
        Pt = null !== St && void 0 !== St && St.profileEffect ? ft.f[St.profileEffect] : void 0,
        Zt = null !== St && !St.local,
        Lt = null === St && null !== Vt.serverChatMsgId,
        Ft = (0, ut.g)("hiddenPlayerNames", (tt => (0, wt.e)(Zt, Rt, tt))),
        kt = null === Vt.serverChatMsgId || null === St ? null : {
          text: ht(Vt.content),
          serverChatMsgId: Vt.serverChatMsgId,
          authorId: St.id
        },
        Gt = Lt || null !== kt && !qt.includes(ct),
        zt = (0, Ht.l)(Zt && null !== Rt && void 0 !== Rt ? Rt : null),
        ot = (0, Mt.k)(vt);
      (0, Ot.useEffect)((() => () => {
        Mt.d.closeIfOwner(vt)
      }), []);
      const rt = () => {
          Lt ? dt.j.sw("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            kX: (0, mt.d)(Vt.content),
            serverChatMsgId: Vt.serverChatMsgId
          }) : null !== kt ? dt.j.sw("OpenReportMenu", {
            playerEId: ct,
            playerName: Rt,
            kX: kt.text,
            serverChatMsgId: kt.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        Ut = void 0 === Rt ? [] : (0, bt.e)(zt, Rt, kt);
      return (0, Kt.jsxs)("div", {
        ref: vt,
        className: Dt()("MessageWrapper", {
          ChatMsgSelectWrapper: ct,
          Still: Wt
        }),
        onContextMenu: Ft ? tt => {
          (0, yt.h)(vt, tt, {
            ...(0, wt.c)(ct, Rt),
            showLocation: !1,
            status: null,
            extraActions: Gt ? [{
              icon: "flag",
              text: "Report",
              onClick: rt
            }] : [],
            moderationActions: (0, Jt.c)(Rt),
            friendRequestSource: "chat"
          }, Qt.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Ft ? tt => {
          (0, Nt.c)(tt, (() => (0, wt.c)(ct, Rt).playerSocialPreview))
        } : void 0,
        children: [Pt && (0, Kt.jsx)(Pt, {
          className: "ChatMessageBackground",
          simple: !0
        }), (Zt || Lt) && !ot && (0, Kt.jsx)(Et.e, {
          className: "ChatFloatingActions",
          triggerElementRef: vt,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: rt,
            show: Gt
          }, ...Ut, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: tt => {
              (0, jt.n)(Rt, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: Ft && "blocked" !== zt
          }]
        }), (0, Kt.jsx)(lt.e, {
          text: Vt.content,
          friendBadgeFor: It ? Rt : void 0
        }, Vt.clientChatMsgId)]
      }, Vt.clientChatMsgId)
    }))
  },
  36853: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Et,
      g: () => ft,
      i: () => lt,
      m: () => Qt
    });
    var Ot = Vt(34371),
      qt = Vt(36861),
      Dt = Vt(36867),
      mt = Vt(8936),
      dt = Vt(1554),
      jt = Vt(63),
      Ht = Vt(83),
      Xt = Vt(1188);

    function Qt() {
      var tt;
      return (0, dt.h)(qt.b, (0, qt.l)()), (0, Xt.jsx)(Xt.Fragment, {
        children: null === (tt = (0, qt.l)()) || void 0 === tt ? void 0 : tt.content
      })
    }

    function lt(tt) {
      var et;
      let {
        show: Vt
      } = tt;
      (0, dt.h)(qt.b, (0, qt.l)());
      const Ht = null === (et = (0, qt.l)()) || void 0 === et ? void 0 : et.menu;
      return (0, jt.useEffect)((() => {
        var tt;
        Vt || (null === Ht || void 0 === Ht || null === (tt = Ht.onClose) || void 0 === tt || tt.call(Ht), (0, Dt.t)())
      }), [Vt, Ht]), (0, jt.useEffect)((() => Vt ? (0, mt.g)(Dt.A, Dt.f) : void 0), [Vt]), (0, Xt.jsx)(Ot.b, {
        showing: Vt,
        globallyUniqueKey: "clientGameMenu",
        children: null === Ht || void 0 === Ht ? void 0 : Ht.content
      })
    }

    function Et(tt) {
      let {
        placement: et = "bottom"
      } = tt;
      return (0, Xt.jsx)("div", {
        id: `clientGameHud-${et}`,
        style: {
          display: "contents"
        }
      })
    }

    function ft(tt) {
      let {
        children: et,
        placement: Vt = "bottom"
      } = tt;
      const [Ot, qt] = (0, jt.useState)(null);
      return (0, jt.useEffect)((() => {
        qt(document.getElementById(`clientGameHud-${Vt}`))
      }), [Vt]), Ot ? (0, Ht.createPortal)(et, Ot) : null
    }
  },
  37115: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Qt,
      e: () => Xt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(1556),
      dt = Vt(1188);
    const jt = 200,
      Ht = 160;

    function Xt() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function Qt(tt) {
      let {
        side: et,
        defaultSize: Vt,
        covers: qt,
        onClose: Xt,
        children: Qt
      } = tt;
      const lt = (0, Ot.useRef)(null),
        [Et, ft] = (0, Ot.useState)(null),
        [wt, yt] = (0, Ot.useState)(Vt);
      wt !== Vt && (yt(Vt), ft(null));
      const Nt = (0, Ot.useRef)(null),
        Mt = "top" === et,
        bt = tt => Mt ? tt.clientY : tt.clientX,
        Jt = () => {
          Nt.current = null
        };
      return (0, dt.jsxs)("div", {
        ref: lt,
        className: Dt()("ResizableSidePanel", et && `ResizableSidePanel-${et}`, {
          Covers: "always" === qt,
          CoversWhenNarrow: "narrow" === qt,
          Dragged: null !== Et
        }),
        style: {
          [Mt ? "height" : "width"]: null !== Et && void 0 !== Et ? Et : Vt
        },
        children: [Qt, et && (0, dt.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": Mt ? "horizontal" : "vertical",
          onPointerDown: tt => {
            if (0 !== tt.button) return;
            tt.preventDefault();
            const et = lt.current,
              Vt = Array.from(et.parentElement.children).reduce(((tt, Vt) => Vt !== et && "0" !== getComputedStyle(Vt).flexGrow ? tt + (tt => Mt ? tt.clientHeight : tt.clientWidth)(Vt) : tt), 0),
              Ot = Mt ? et.offsetHeight : et.offsetWidth,
              qt = Math.min(jt, Ot),
              Dt = Math.max(qt, Ot + Math.max(0, Vt - Ht));
            Nt.current = {
              start: bt(tt),
              startSize: Ot,
              minSize: qt,
              maxSize: Dt
            }, tt.currentTarget.setPointerCapture(tt.pointerId)
          },
          onPointerMove: tt => {
            const Vt = Nt.current;
            if (!Vt) return;
            const Ot = "right" === et ? Vt.start - tt.clientX : bt(tt) - Vt.start;
            ft(Math.min(Vt.maxSize, Math.max(Vt.minSize, Vt.startSize + Ot)))
          },
          onPointerUp: Jt,
          onPointerCancel: Jt,
          onLostPointerCapture: Jt
        }), Xt && (0, dt.jsx)(mt.j, {
          className: "ResizableSidePanelClose",
          onClick: Xt
        })]
      })
    }
  },
  37140: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => ht,
      B: () => qt,
      E: () => Kt,
      b: () => bt,
      c: () => yt,
      d: () => ft,
      h: () => Et,
      i: () => Mt,
      m: () => vt,
      q: () => Jt,
      t: () => ut,
      w: () => Ct
    });
    var Ot = Vt(63);
    const qt = 5e3,
      Dt = 500,
      mt = 3e3;
    let dt = null,
      jt = null,
      Ht = null;
    const Xt = new Set;

    function Qt(tt) {
      dt = tt;
      for (const et of Xt) et()
    }

    function lt() {
      if (!dt || void 0 !== dt.endedAt) return;
      null !== jt && (clearTimeout(jt), jt = null), Qt({
        ...dt,
        endedAt: Date.now()
      });
      const tt = Ht;
      Ht = null, null === tt || void 0 === tt || tt()
    }

    function Et(tt, et) {
      let {
        submit: Vt,
        reopen: Ot
      } = et;
      null !== jt && clearTimeout(jt), Ht = Ot, Qt({
        ...tt,
        startedAt: Date.now(),
        errors: []
      }), jt = setTimeout(lt, mt), Vt()
    }

    function ft() {
      dt && void 0 === dt.endedAt && void 0 === dt.ranAt && (null !== jt && clearTimeout(jt), Qt({
        ...dt,
        ranAt: Date.now()
      }), jt = setTimeout(lt, qt))
    }
    const wt = 3;

    function yt(tt) {
      if (!dt || void 0 === dt.ranAt || void 0 !== dt.endedAt || dt.errors.includes(tt) || dt.errors.length >= wt) return;
      const et = 0 === dt.errors.length;
      Qt({
        ...dt,
        errors: [...dt.errors, tt]
      }), et && (null !== jt && clearTimeout(jt), jt = setTimeout(lt, Dt))
    }

    function Nt(tt) {
      var et;
      return (null === (et = dt) || void 0 === et ? void 0 : et.chatKey) === tt ? dt : null
    }

    function Mt(tt) {
      const et = Nt(tt);
      return et && void 0 !== et.endedAt ? (Qt(null), et) : null
    }

    function bt(tt) {
      var et;
      (null === (et = dt) || void 0 === et ? void 0 : et.chatKey) === tt && (null !== jt && (clearTimeout(jt), jt = null), Ht = null, Qt(null))
    }
    const Jt = "These changes from your last answer didn't go in. Make them again.";

    function Ct(tt) {
      const et = [...new Set(tt)].slice(0, wt);
      return `Fix this in your change: when it ran, the world showed ${1===et.length?"this error":"these errors"}: ${et.join(" ")}`
    }

    function ut(tt) {
      return `Your change didn't go in, because the code wouldn't run at all: ${tt.join(" ")} Send the whole change again with that fixed.`
    }

    function Kt(tt) {
      return `Fix this in your change: ${tt.join(" ")}`
    }

    function ht(tt) {
      var et;
      if (void 0 === tt.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const Vt = Math.max(1, Math.round(((null !== (et = tt.endedAt) && void 0 !== et ? et : tt.ranAt) - tt.ranAt) / 1e3)),
        Ot = `Your change ran in your world for ${Vt} ${1===Vt?"second":"seconds"}`;
      return 0 === tt.errors.length ? {
        title: "Tested: no errors",
        text: `${Ot} without an error.`
      } : {
        title: 1 === tt.errors.length ? "Tested: it showed an error" : `Tested: it showed ${tt.errors.length} errors`,
        text: `${Ot} and showed: ${tt.errors.join(" ")}`
      }
    }

    function vt(tt) {
      const [et, Vt] = (0, Ot.useState)((() => Nt(tt)));
      return (0, Ot.useEffect)((() => {
        const et = () => {
          Vt(Nt(tt))
        };
        return et(), Xt.add(et), () => {
          Xt.delete(et)
        }
      }), [tt]), et
    }
  },
  37146: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt,
      h: () => Ot
    });
    const Ot = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function qt(tt, et, Vt) {
      return {
        key: tt,
        label: `Code block at ${et.join(", ")}`,
        codeBlock: !0,
        pos: et,
        canChangePos: Vt
      }
    }
  },
  37133: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot,
      h: () => Dt,
      k: () => mt,
      l: () => qt
    });
    const Ot = "code block",
      qt = "World Code/";

    function Dt(tt) {
      return tt.trim().toLowerCase().startsWith(qt.toLowerCase())
    }

    function mt(tt) {
      return tt.trim().slice(qt.length).replace(/^\.?\//, "")
    }
  },
  37107: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => jt,
      d: () => Ht,
      f: () => dt,
      j: () => Xt
    });
    var Ot = Vt(63),
      qt = Vt(39),
      Dt = Vt(106);
    class mt {
      constructor(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = tt, this.defaultValue = et, this.canChange = Vt, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const tt = qt.e.getItem(this.storageKey);
            this.value = "boolean" === typeof tt ? tt : this.defaultValue
          }
          return this.value
        }, this.set = tt => {
          this.value = tt, qt.e.setItem(this.storageKey, tt);
          for (const et of this.listeners) et(tt)
        }
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
    }
    const dt = new mt("codeEditorLightMode", !1),
      jt = new mt("codeEditorAiHints", !0),
      Ht = new mt("codeEditorAiKeySafetyCheck", !0, Dt.featureFlags.isOwnTopLevelSite);

    function Xt(tt) {
      const [et, Vt] = (0, Ot.useState)(tt.get);
      return (0, Ot.useEffect)((() => {
        const et = tt.subscribe(Vt);
        return Vt(tt.get()), et
      }), [tt]), [et, tt.set]
    }
  },
  37104: (tt, et, Vt) => {
    Vt.d(et, {
      D: () => ct,
      F: () => Wt,
      G: () => lt,
      K: () => Zt,
      N: () => ht,
      O: () => vt,
      S: () => Pt,
      c: () => ft,
      f: () => jt,
      g: () => wt,
      j: () => St,
      n: () => dt,
      r: () => Xt,
      t: () => Et,
      v: () => yt,
      z: () => Jt
    });
    var Ot = Vt(2495),
      qt = Vt(37096);
    const Dt = "bloxd-world-code-directory-sync",
      mt = "handles",
      dt = "[INVALID SCHEMATIC PLACEHOLDER]";

    function jt(tt, et) {
      return `${tt}::${et}`
    }
    const Ht = new Set(["node_modules", ".git"]);

    function Xt() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function Qt() {
      return new Promise(((tt, et) => {
        const Vt = indexedDB.open(Dt, 1);
        Vt.onupgradeneeded = () => {
          const tt = Vt.result;
          tt.objectStoreNames.contains(mt) || tt.createObjectStore(mt)
        }, Vt.onsuccess = () => {
          tt(Vt.result)
        }, Vt.onerror = () => {
          var tt;
          et(null !== (tt = Vt.error) && void 0 !== tt ? tt : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function lt(tt, et) {
      const Vt = await Qt();
      try {
        await new Promise(((Ot, qt) => {
          const Dt = Vt.transaction(mt, "readwrite");
          Dt.objectStore(mt).put(et, tt), Dt.oncomplete = () => {
            Ot()
          }, Dt.onerror = () => {
            var tt;
            qt(null !== (tt = Dt.error) && void 0 !== tt ? tt : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        Vt.close()
      }
    }
    async function Et(tt) {
      const et = await Qt();
      try {
        return await new Promise(((Vt, Ot) => {
          const qt = et.transaction(mt, "readonly").objectStore(mt).get(tt);
          qt.onsuccess = () => {
            var tt;
            Vt(null !== (tt = qt.result) && void 0 !== tt ? tt : null)
          }, qt.onerror = () => {
            var tt;
            Ot(null !== (tt = qt.error) && void 0 !== tt ? tt : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        et.close()
      }
    }
    async function ft(tt) {
      const et = await Qt();
      try {
        await new Promise(((Vt, Ot) => {
          const qt = et.transaction(mt, "readwrite");
          qt.objectStore(mt).delete(tt), qt.oncomplete = () => {
            Vt()
          }, qt.onerror = () => {
            var tt;
            Ot(null !== (tt = qt.error) && void 0 !== tt ? tt : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        et.close()
      }
    }
    async function wt(tt) {
      const et = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await tt.queryPermission(et) || "granted" === await tt.requestPermission(et)
    }
    async function yt(tt) {
      if (!Xt()) return null;
      try {
        const et = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await lt(tt, et), et
      } catch (et) {
        if (function(tt) {
            return tt instanceof DOMException && "AbortError" === tt.name
          }(et)) return null;
        throw et
      }
    }

    function Nt(tt) {
      return tt.startsWith(".") || Ht.has(tt)
    }

    function Mt(tt) {
      if (!tt) return !0;
      const et = tt.split("/");
      for (const Vt of et)
        if ("" === Vt || "." === Vt || ".." === Vt) return !1;
      return !0
    }
    async function bt(tt, et, Vt) {
      for await (const [Dt, mt] of tt.entries()) {
        if ("directory" === mt.kind) {
          if (Nt(Dt)) continue;
          const tt = et ? `${et}/${Dt}` : Dt;
          if (!Mt(tt)) continue;
          await bt(mt, tt, Vt);
          continue
        }
        const tt = et ? `${et}/${Dt}` : Dt;
        if (!(0, Ot.v)(tt) && !(0, qt.b)(tt)) continue;
        const dt = await mt.getFile();
        Vt[tt] = (0, qt.b)(tt) ? await Rt(dt) : await dt.text()
      }
    }
    async function Jt(tt) {
      const et = {};
      return await bt(tt, "", et), et
    }

    function Ct(tt) {
      return !(!tt || tt !== tt.trim() || tt.startsWith("/") || tt.includes("\\") || tt.includes("\0")) && Mt(tt)
    }
    async function ut(tt, et, Vt) {
      const Ot = et.split("/"),
        qt = Ot[Ot.length - 1];
      let Dt = tt;
      for (let mt = 0; mt < Ot.length - 1; mt++) Dt = await Dt.getDirectoryHandle(Ot[mt], {
        create: Vt
      });
      return {
        dir: Dt,
        fileName: qt
      }
    }
    async function Kt(tt, et, Vt) {
      if (!Ct(et)) throw new Error(`Refusing to write unsafe path: ${et}`);
      const {
        dir: Ot,
        fileName: qt
      } = await ut(tt, et, !0), Dt = await Ot.getFileHandle(qt, {
        create: !0
      }), mt = await Dt.createWritable();
      await mt.write(Vt), await mt.close()
    }
    async function ht(tt, et, Vt) {
      const Ot = await async function(tt, et) {
        if (!Ct(et)) return null;
        try {
          const {
            dir: Vt,
            fileName: Ot
          } = await ut(tt, et, !1), qt = await Vt.getFileHandle(Ot), Dt = await qt.getFile();
          return await Dt.text()
        } catch (Vt) {
          if (Vt instanceof DOMException && ("NotFoundError" === Vt.name || "NotAllowedError" === Vt.name)) return null;
          throw Vt
        }
      }(tt, et);
      Ot !== Vt && await Kt(tt, et, Vt)
    }
    async function vt(tt, et, Vt) {
      if (!(0, Ot.v)(et) && !(0, qt.b)(et)) throw new Error(`Refusing to write non-allowlisted path: ${et}`);
      if ((0, qt.b)(et)) {
        if (await It(tt, et) === dt) throw new Error(`Move the binary schematic ${et} outside the linked folder before syncing its placeholder`)
      }
      await Kt(tt, et, Vt)
    }
    async function Wt(tt, et) {
      if (!Ct(et)) throw new Error(`Refusing to remove unsafe path: ${et}`);
      try {
        const {
          dir: Vt,
          fileName: Ot
        } = await ut(tt, et, !1);
        await Vt.removeEntry(Ot)
      } catch (Vt) {
        if (Vt instanceof DOMException && ("NotFoundError" === Vt.name || "NotAllowedError" === Vt.name)) return;
        throw Vt
      }
    }
    async function St(tt, et) {
      if (!Ct(et)) return null;
      try {
        const Vt = et.split("/");
        let Ot = tt;
        for (const tt of Vt) Ot = await Ot.getDirectoryHandle(tt);
        return Ot
      } catch (Vt) {
        if (Vt instanceof DOMException && ("NotFoundError" === Vt.name || "NotAllowedError" === Vt.name)) return null;
        throw Vt
      }
    }
    async function ct(tt, et) {
      if ((0, Ot.v)(et) || (0, qt.b)(et)) {
        if ((0, qt.b)(et)) {
          if (await It(tt, et) === dt) throw new Error(`Refusing to remove a binary schematic: ${et}`)
        }
        await Wt(tt, et)
      }
    }
    async function Rt(tt) {
      if (tt.size > 64) return dt;
      const et = await tt.text();
      return Array.from(et).some((tt => {
        const et = tt.charCodeAt(0);
        return et < 9 || et > 13 && et < 32 || 65533 === et
      })) ? dt : et
    }
    async function It(tt, et) {
      try {
        const {
          dir: Vt,
          fileName: Ot
        } = await ut(tt, et, !1);
        return await Rt(await (await Vt.getFileHandle(Ot)).getFile())
      } catch (Vt) {
        if (Vt instanceof DOMException && "NotFoundError" === Vt.name) return null;
        throw Vt
      }
    }
    async function Pt(tt, et) {
      const Vt = await Jt(tt);
      for (const Ot of Object.keys(Vt)) Ot in et || (0, qt.b)(Ot) || await ct(tt, Ot);
      for (const [Dt, mt] of Object.entries(et))((0, Ot.v)(Dt) || (0, qt.b)(Dt)) && await vt(tt, Dt, mt)
    }

    function Zt(tt, et) {
      var Vt, Ot;
      let qt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Dt = null !== (Vt = qt.debounceMs) && void 0 !== Vt ? Vt : 300,
        mt = null !== (Ot = qt.pollMs) && void 0 !== Ot ? Ot : 1e3;
      let dt = !1,
        jt = null,
        Ht = null,
        Xt = null;
      const Qt = () => {
          dt || (jt && clearTimeout(jt), jt = setTimeout((() => {
            jt = null, lt()
          }), Dt))
        },
        lt = async () => {
          if (!dt) try {
            if (!await wt(tt, "readwrite")) return;
            const Vt = await Jt(tt);
            dt || et(Vt)
          } catch (Vt) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", Vt)
          }
        };
      lt();
      const Et = window.FileSystemObserver;
      if (Et) try {
        Xt = new Et((() => {
          Qt()
        })), Xt.observe(tt, {
          recursive: !0
        })
      } catch (ft) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", ft), Xt = null
      }
      return Xt || (Ht = setInterval((() => {
        Qt()
      }), mt)), () => {
        dt = !0, jt && clearTimeout(jt), Ht && clearInterval(Ht), Xt && Xt.disconnect()
      }
    }
  },
  5e3: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => yt,
      f: () => Nt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(63),
      mt = Vt(1286),
      dt = Vt(5003),
      jt = Vt(2001),
      Ht = Vt(2498),
      Xt = Vt(5010),
      Qt = Vt(1188);
    const lt = new WeakMap;
    let Et = 0;

    function ft(tt) {
      let et = lt.get(tt);
      return void 0 === et && (et = Et++, lt.set(tt, et)), et
    }

    function wt(tt) {
      let {
        piece: et
      } = tt;
      return "space" === et.kind ? (0, Qt.jsx)(Qt.Fragment, {
        children: et.text
      }) : (0, Qt.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${et.delayMs}ms`
        },
        children: (0, Qt.jsx)(dt.d, {
          text: "icon" === et.kind ? `[[${et.icon}]]` : et.text
        })
      })
    }

    function yt(tt) {
      let {
        display: et
      } = tt;
      const {
        selectedLanguage: Vt
      } = (0, mt.H)(), Ot = (0, Dt.useMemo)((() => (0, Xt.e)((0, Xt.f)(et).plan.pieces)), [et, Vt.code]);
      return (0, Qt.jsxs)("div", {
        className: qt()("Dialogue", {
          DialogueAnimateIn: !1 !== et.animateIn
        }),
        children: [et.speakerName && (0, Qt.jsx)(jt.e, {
          text: et.speakerName,
          className: "DialogueSpeaker"
        }), (0, Qt.jsx)("p", {
          className: "DialogueLine",
          children: Ot.map(((tt, et) => 1 === tt.length && "space" === tt[0].kind ? tt[0].text : (0, Qt.jsx)("span", {
            className: "DialogueGlue",
            children: tt.map(((tt, et) => (0, Qt.jsx)(wt, {
              piece: tt
            }, et)))
          }, et)))
        })]
      })
    }
    const Nt = (0, Dt.memo)((function() {
      const tt = (0, Ht.i)("dialogue");
      return (0, Qt.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: tt && (0, Qt.jsx)(yt, {
          display: tt
        }, ft(tt))
      })
    }))
  },
  36925: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => wt,
      g: () => yt
    });
    var Ot = Vt(63),
      qt = Vt(1554),
      Dt = Vt(2063),
      mt = Vt(36880),
      dt = Vt(710),
      jt = Vt(1140),
      Ht = Vt.n(jt),
      Xt = Vt(1188);
    const Qt = [lt()];

    function lt() {
      return {
        source: null,
        direction: null,
        Vk: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Et(tt) {
      return Qt.find((et => null !== et.source && et.source === tt))
    }

    function ft(tt) {
      clearTimeout(tt.timeout), tt.source = null, tt.direction = null, tt.writtenAngle = null, tt.Vk && (tt.Vk.style.rotate = "")
    }
    const wt = (0, Ot.memo)((function() {
      const [, tt] = (0, Ot.useReducer)((tt => tt + 1), 0);
      return (0, qt.f)("damagedByOtherPlayer", (et => {
        let {
          WV: Vt,
          direction: Ot
        } = et;
        const qt = Vt || "nonDirectional",
          Dt = function(tt) {
            var et;
            const Vt = null !== (et = Et(tt)) && void 0 !== et ? et : Qt.find((tt => null === tt.source));
            if (Vt) return Vt;
            const Ot = {
              source: null,
              direction: null,
              Vk: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Qt.push(Ot), Ot
          }(qt);
        clearTimeout(Dt.timeout), Dt.source = qt, Dt.direction = Ot, Dt.timeout = setTimeout((() => {
          ft(Dt), tt()
        }), 800), tt()
      })), (0, Dt.e)("kill", (et => {
        let {
          killer: Vt,
          victim: Ot
        } = et;
        const qt = Vt.local && Et(Ot.id);
        qt && (ft(qt), tt())
      })), (0, Ot.useEffect)((() => {
        const tt = (0, mt.h)("turnDamageIndicators", yt);
        return () => {
          tt(), Qt.forEach(ft)
        }
      }), []), (0, Xt.jsx)("div", {
        className: "DirectionalDamage",
        children: Qt.map(((tt, et) => (0, Xt.jsx)("div", {
          ref: et => {
            tt.Vk = et
          },
          className: Ht()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, dt.B)(tt.direction),
            DamageIndicatorIdle: null === tt.source
          })
        }, et)))
      })
    }));

    function yt(tt) {
      for (const et of Qt) {
        if (null === et.source || (0, dt.B)(et.direction)) continue;
        const Vt = et.direction - tt;
        Vt !== et.writtenAngle && (et.writtenAngle = Vt, et.Vk.style.rotate = `${Vt}rad`)
      }
    }
  },
  9023: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => It,
      e: () => Wt,
      h: () => St
    });
    var Ot = Vt(63),
      qt = Vt(4677),
      Dt = Vt(1218),
      mt = Vt(1554),
      dt = Vt(31),
      jt = Vt(3490),
      Ht = Vt(2295),
      Xt = Vt(1325),
      Qt = Vt(2652),
      lt = Vt(2024),
      Et = Vt(2063),
      ft = Vt(1286),
      wt = Vt(26),
      yt = Vt(1732),
      Nt = Vt(1140),
      Mt = Vt.n(Nt),
      bt = Vt(9032),
      Jt = Vt(9035),
      Ct = Vt(9037),
      ut = Vt(8929),
      Kt = Vt(9039),
      ht = (Vt(9042), Vt(1188));
    let vt = null;

    function Wt() {
      return null !== vt
    }

    function St() {
      return "pad" === vt
    }

    function ct() {
      return "inGame" === wt.b.get("gameState") && !(0, yt.q)()
    }

    function Rt(tt) {
      return (0, Jt.t)(tt, Xt.r, Jt.e, Jt.f, Jt.i)
    }
    const It = (0, Ot.memo)((function() {
      const {
        t: tt
      } = (0, ft.H)(), {
        userContext: et
      } = (0, Dt.d)(), [Vt, wt] = (0, Ot.useState)(null), [Nt, Wt] = (0, Ot.useState)(null), St = (0, Ot.useRef)(null), It = (0, Ot.useCallback)((tt => {
        St.current = tt, Wt(tt)
      }), []), Pt = (0, Ot.useRef)(0), Zt = (0, Ot.useRef)(null), Lt = (0, Ot.useRef)({
        x: 0,
        y: 0
      }), [Ft, kt] = (0, Ot.useState)(0), Gt = (0, Ot.useMemo)((() => function(tt) {
        const et = [];
        for (let Ot = 0; Ot < Xt.r; Ot++) {
          var Vt;
          et.push(null !== (Vt = tt[Ot]) && void 0 !== Vt ? Vt : null)
        }
        return et
      }((0, Qt.h)(et.getPlayerCosmetics().emote))), [et, Ft]);
      (0, Et.e)("cosmeticsUpdated", (tt => {
        tt.some((tt => tt.local && "emote" === tt.kD)) && kt((tt => tt + 1))
      }));
      const zt = (0, Ot.useRef)(!1),
        ot = (0, Ot.useCallback)((function(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === tt && (0, Ct.e)(), zt.current = et, Lt.current = {
            x: 0,
            y: 0
          }, It(null), wt(tt)
        }), [It]),
        rt = (0, Ot.useCallback)((() => {
          wt(null), It(null), Lt.current = {
            x: 0,
            y: 0
          }
        }), [It]),
        Ut = (0, Ot.useCallback)((tt => {
          if (Date.now() < Pt.current) return;
          const et = (0, Ht.j)(tt),
            Vt = !!et.holdUntilMove,
            Ot = Vt ? 600 : Math.ceil(1e3 * et.animation.animation_length / Ht.d) + 200;
          Pt.current = Date.now() + Ot, Zt.current = tt, lt.gameBridge.send("playEmote", tt), lt.gameBridge.send("applyTemporaryThirdPerson", Vt ? {} : {
            durationMs: Ot
          })
        }), []);
      (0, mt.f)("requestToggleEmoteWheel", (() => {
        null === Vt ? ct() && ot("click") : rt()
      })), (0, mt.f)("requestEmoteWheelHoldOpen", (() => {
        null === Vt && ct() && ot((0, bt.b)() ? "hold" : "click")
      })), (0, mt.f)("requestEmoteWheelPadOpen", (tt => {
        null !== Vt || !ct() || (0, ut.b)() || (0, Kt.o)() || ot("pad", tt)
      })), (0, mt.f)("requestEmoteRepeatLast", (() => {
        if (null !== Vt || !ct() || (0, ut.b)() || (0, Kt.o)()) return;
        const tt = Zt.current;
        null !== tt && Gt.includes(tt) ? Ut(tt) : ot("pad", !0)
      }));
      const At = () => {
        const tt = St.current,
          et = null !== tt ? Gt[tt] : null;
        null !== et && "pad" === Vt && Date.now() < Pt.current || (rt(), null !== et && Ut(et))
      };
      (0, mt.f)("emoteWheelPadAim", (tt => {
        if ("pad" !== Vt) return;
        const et = (0, Jt.D)(tt, Xt.r, St.current);
        It(null !== et && null !== Gt[et] ? et : null)
      })), (0, mt.f)("requestEmoteWheelPadCommit", (tt => {
        "pad" !== Vt || tt && zt.current || At()
      })), (0, mt.f)("appManagerUpdated|activeInputDevice", (tt => {
        null !== Vt && "pad" === Vt !== ("gamepad" === tt) && rt()
      })), (0, Ot.useLayoutEffect)((() => (vt = Vt, (0, jt.w)("emoteWheel", "pad" === Vt), dt.j.sw(jt.o), () => {
        vt = null, (0, jt.w)("emoteWheel", !1), dt.j.sw(jt.o)
      })), [Vt]), (0, mt.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === Vt && At()
      })), (0, mt.f)("requestEmoteWheelClose", (() => {
        null !== Vt && rt()
      })), (0, mt.f)("appManagerUpdated|gameState", (tt => {
        "inGame" !== tt && rt()
      }));
      const it = () => {
        (0, yt.q)() && rt()
      };
      if ((0, mt.f)("appManagerUpdated|openEverythingMenuName", it), (0, mt.f)("appManagerUpdated|openInGameMenuName", it), (0, mt.f)("pointerLockUpdate", (tt => {
          tt || "hold" !== Vt || rt()
        })), (0, Ot.useEffect)((() => {
          if (null === Vt) return;
          const tt = tt => {
            "Escape" === tt.key && (tt.stopImmediatePropagation(), tt.preventDefault(), rt())
          };
          return document.addEventListener("keydown", tt, !0), () => {
            document.removeEventListener("keydown", tt, !0)
          }
        }), [Vt, rt]), (0, qt.d)(!0, "click" === Vt, "EmoteWheelOverlay"), (0, Ot.useEffect)((() => {
          if ("hold" === Vt) return lt.gameBridge.send("holdEmoteWheel", !0), () => {
            lt.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [Vt]), (0, Ot.useEffect)((() => {
          if ("hold" !== Vt) return;
          const tt = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            et = Jt.q * tt,
            Ot = Jt.m * tt,
            qt = tt => {
              let Vt = Lt.current.x + tt.movementX,
                qt = Lt.current.y + tt.movementY;
              const Dt = Math.hypot(Vt, qt);
              if (Dt > et) {
                const tt = et / Dt;
                Vt *= tt, qt *= tt
              }
              Lt.current = {
                x: Vt,
                y: qt
              }, It(function(tt, et, Vt, Ot) {
                if (Math.hypot(tt, et) < Vt) return null;
                const qt = (0, Jt.u)(tt, et, Xt.r);
                return null === Ot[qt] ? null : qt
              }(Vt, qt, Ot, Gt))
            };
          return document.addEventListener("mousemove", qt), () => {
            document.removeEventListener("mousemove", qt)
          }
        }), [Vt, Gt, It]), null === Vt) return null;
      const Yt = "hold" === Vt || "pad" === Vt,
        Bt = null !== Nt ? Gt[Nt] : null,
        pt = null !== Bt ? (0, Ht.j)(Bt).displayName : tt("emotes:pickEmote");
      return (0, ht.jsx)("div", {
        className: Mt()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === Vt
        }),
        onMouseDown: tt => {
          tt.target === tt.currentTarget && rt()
        },
        children: (0, ht.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * Jt.q + "rem",
            height: 2 * Jt.q + "rem"
          },
          children: [(0, ht.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${Jt.j} ${Jt.j}`,
            children: [Gt.map(((et, Vt) => {
              const Ot = null !== et,
                qt = Yt && Vt === Nt;
              return (0, ht.jsx)("path", {
                d: Rt(Vt),
                className: Mt()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: qt,
                  EmoteWheelWedgeDisabled: !Ot
                }),
                onClick: tt => {
                  tt.stopPropagation(), null !== et && (tt => {
                    rt(), Ut(tt)
                  })(et)
                },
                "aria-label": null !== et ? (0, Ht.j)(et).displayName : tt("emotes:emptySlot")
              }, Vt)
            })), (0, ht.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: Jt.e,
              cy: Jt.e,
              r: Jt.i
            }), (0, ht.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: Jt.e,
              cy: Jt.e,
              r: Jt.f
            }), Yt && null !== Nt && (0, ht.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Rt(Nt)
            })]
          }), Gt.map(((tt, et) => {
            const Vt = null !== tt,
              Ot = Yt && et === Nt,
              qt = (0, Jt.x)(et, Xt.r),
              Dt = Jt.c * Math.cos(qt),
              mt = Jt.c * Math.sin(qt);
            return (0, ht.jsx)("div", {
              className: Mt()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Ot,
                EmoteWheelSlotIconDisabled: !Vt
              }),
              style: {
                left: `calc(50% + ${Dt}rem)`,
                top: `calc(50% + ${mt}rem)`,
                backgroundImage: Vt ? `url(/textures/charSkins/previews/emote_${tt}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, et)
          })), (0, ht.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: pt
          })]
        })
      })
    }))
  },
  36794: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => yt
    });
    var Ot = Vt(63),
      qt = Vt(83),
      Dt = Vt(1286),
      mt = Vt(1140),
      dt = Vt.n(mt),
      jt = Vt(1826),
      Ht = Vt(1152),
      Xt = Vt(1371),
      Qt = Vt(1583),
      lt = Vt(1764),
      Et = Vt(1574),
      ft = Vt(1188);
    const wt = 14;

    function yt(tt) {
      let {
        className: et,
        triggerElementRef: Vt,
        options: mt
      } = tt;
      const {
        t: yt
      } = (0, Dt.H)(), [Nt, Mt] = (0, Ot.useState)(!1), [bt, Jt] = (0, Ot.useState)({
        x: 0,
        y: 0
      }), Ct = (0, Ot.useRef)(null);
      (0, Ot.useEffect)((() => {
        let tt = null;
        const et = et => {
            tt = {
              x: et.clientX,
              y: et.clientY
            }
          },
          Ot = et => {
            if (null === tt || !(0, Et.b)(tt, et)) return;
            tt = null;
            const Vt = wt * (0, jt.getRemInPx)();
            Jt({
              x: Math.min(et.clientX, window.innerWidth - Vt - 5),
              y: et.clientY
            }), Mt((tt => !tt))
          },
          qt = tt => {
            var et;
            null !== (et = Ct.current) && void 0 !== et && et.contains(tt.relatedTarget) || Mt(!1)
          },
          Dt = Vt.current;
        return Dt.addEventListener("pointerdown", et), Dt.addEventListener("pointerup", Ot), Dt.addEventListener("mouseleave", qt), () => {
          Dt.removeEventListener("pointerdown", et), Dt.removeEventListener("pointerup", Ot), Dt.removeEventListener("mouseleave", qt)
        }
      }), [Vt]), (0, Ot.useEffect)((() => {
        if (Nt) return (0, lt.b)("pointerdown", (tt => {
          !Ct.current || Ct.current.contains(tt.target) || Vt.current.contains(tt.target) || Mt(!1)
        }))
      }), [Nt, Vt]), (0, Ot.useLayoutEffect)((() => {
        if (!Nt || !Ct.current) return;
        const tt = Ct.current.getBoundingClientRect().height,
          et = Math.max(5, window.innerHeight - tt - 5);
        bt.y > et && Jt({
          x: bt.x,
          y: et
        })
      }), [Nt, bt]), (0, Xt.w)("popup", Ct, (() => {
        Mt(!1)
      }), Nt);
      const ut = mt.filter((tt => !1 !== tt.show));
      return Nt && 0 !== ut.length ? (0, qt.createPortal)((0, ft.jsx)("div", {
        ref: Ct,
        className: dt()("FloatingActions", {
          [et]: et
        }),
        style: {
          width: `${wt}rem`,
          top: bt.y,
          left: bt.x
        },
        children: ut.map((tt => {
          let {
            icon: et,
            text: Vt,
            onPointerDown: Ot,
            analyticsClick: qt
          } = tt;
          return (0, ft.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: tt => {
              void 0 !== qt && (0, Qt.reportAnalyticsClick)(qt), Ot(tt), Mt(!1), tt.stopPropagation()
            },
            children: [(0, ft.jsx)(Ht.b, {
              name: et
            }), (0, ft.jsx)("div", {
              children: yt(Vt)
            })]
          }, Vt)
        }))
      }), function() {
        var tt;
        return null !== (tt = document.querySelector(".WholeAppWrapperInner")) && void 0 !== tt ? tt : document.body
      }()) : null
    }
  },
  36944: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dm
    });
    var Ot = Vt(36853),
      qt = Vt(63),
      Dt = Vt(2147),
      mt = Vt(4665),
      dt = Vt(4668),
      jt = Vt(2498),
      Ht = Vt(2024),
      Xt = Vt(1188);

    function Qt(tt) {
      let {
        className: et,
        style: Vt,
        vw: Ot,
        maxPx: qt,
        children: Dt
      } = tt;
      console.assert("number" === typeof Ot && "number" === typeof qt, "vw and maxPx passed to Text must be numbers");
      const mt = window.innerWidth * (Ot / 100) > qt ? `${qt}px` : `${Ot}vw`;
      return (0, Xt.jsx)("div", {
        className: et,
        style: {
          ...Vt,
          fontSize: mt
        },
        children: Dt
      })
    }
    var lt = Vt(36950),
      Et = Vt(1556),
      ft = Vt(31),
      wt = Vt(2043),
      yt = Vt(1152);

    function Nt(tt) {
      let {
        tasks: et,
        lastDisplayedTasks: Vt
      } = tt;
      return (0, Xt.jsx)(Xt.Fragment, {
        children: Object.keys(et).map((tt => (0, Xt.jsx)(Mt, {
          task: et[tt],
          lastDisplayedAs: Vt[tt]
        }, et[tt].text)))
      })
    }

    function Mt(tt) {
      let {
        task: et,
        lastDisplayedAs: Vt
      } = tt;
      const [Ot, Dt] = (0, qt.useState)(null !== Vt && void 0 !== Vt && Vt.progress ? Vt.progress / et.goal : 0), [mt, dt] = (0, qt.useState)(!1), [jt, Ht] = (0, qt.useState)(et.claimed || !1);
      return (0, qt.useEffect)((() => {
        Dt(et.progress / et.goal)
      }), [et.progress, et.goal]), jt ? null : (0, Xt.jsxs)("div", {
        className: "Task",
        children: [(0, Xt.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, Xt.jsx)(Qt, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: et.text
          })
        }), et.progress < et.goal ? (0, Xt.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== Ot ? (0, Xt.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * Ot + "%"
            }
          }) : null, (0, Xt.jsx)("div", {
            className: "TaskProgressText",
            children: `${et.progress}/${et.goal}`
          })]
        }) : (0, Xt.jsx)(Et.m, {
          className: "ClaimRewardButton",
          onClick: () => {
            dt(!0)
          },
          children: (0, Xt.jsx)(Qt, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), mt ? (0, Xt.jsx)(bt, {
          task: et,
          close: () => {
            et.claimed = !0, Ht(!0), dt(!1)
          }
        }) : null]
      })
    }

    function bt(tt) {
      let {
        task: et,
        close: Vt
      } = tt;
      const [Ot, Dt] = (0, qt.useState)({}), [mt, dt] = (0, qt.useState)("closed");
      (0, qt.useEffect)((() => {
        let tt;
        return "animStart" === mt && (tt = setTimeout((() => {
          dt("animEnd")
        }), 700)), () => {
          clearTimeout(tt)
        }
      }), [mt]), (0, lt.d)((() => {
        Ht.gameBridge.send("completeTask", et.text)
      }));
      const Qt = (0, jt.i)("currencyAmounts");
      return (0, Xt.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === mt)
            if (0 === et.rewards.length) Vt(), Ht.gameBridge.send("completeTask", et.text);
            else {
              const tt = {
                ...wt.b.get("currencyAmounts")
              };
              for (const et in Ot) tt[et] = {
                ...tt[et],
                amount: tt[et].amount + Ot[et]
              };
              wt.b.apply({
                currencyAmounts: tt
              }), dt("closed")
            }
          else "closed" === mt && (Dt(et.rewards.pop()), dt("animStart"))
        },
        children: [(0, Xt.jsx)("img", {
          className: "Chest",
          alt: "closed" !== mt ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==mt?"open":"closed"}.png`
        }), (0, Xt.jsx)("div", {
          className: "Rewards",
          children: "closed" !== mt ? Object.keys(Ot).map((tt => {
            const et = null === Qt || void 0 === Qt ? void 0 : Qt[tt];
            return !et || et.hidden ? null : (0, Xt.jsxs)("div", {
              className: "Reward",
              children: [(0, Xt.jsx)(yt.b, {
                name: et.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: et.iconColour
                }
              }), (0, Xt.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === mt ? 0 : Ot[tt]
              })]
            }, tt)
          })) : null
        }), "animStart" === mt ? (0, Xt.jsx)(Jt, {}) : null, (0, Xt.jsx)("div", {
          className: "ChestsLeft",
          children: et.rewards.length
        })]
      })
    }

    function Jt() {
      const [tt, et] = (0, qt.useState)(0);
      (0, qt.useEffect)((() => {
        et(1)
      }), []);
      return (0, Xt.jsx)(Xt.Fragment, {
        children: Array.from({
          length: 40
        }).map(((et, Vt) => (0, Xt.jsx)(yt.b, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * tt * Math.cos(Vt / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * tt * Math.sin(Vt / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === tt ? 1 : 0
          }
        }, Vt)))
      })
    }
    ft.j.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const tt = new Image,
          et = new Image;
        tt.src = "/textures/miscImages/Treasure Chest open.png", et.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var Ct = Vt(3192),
      ut = Vt(1218),
      Kt = Vt(2001),
      ht = Vt(1554),
      vt = Vt(391),
      Wt = Vt(2063),
      St = Vt(1436);

    function ct(tt) {
      var et, Vt;
      let {
        byId: Ot,
        localId: qt
      } = tt;
      return null === qt ? null : null !== (et = null === (Vt = Ot[qt]) || void 0 === Vt ? void 0 : Vt.name) && void 0 !== et ? et : null
    }

    function Rt(tt) {
      let {
        lbStats: et,
        storedState: Vt = {}
      } = tt;
      const {
        userContext: Ot
      } = (0, ut.d)(), Dt = (0, Wt.g)("players", ct), [mt, dt] = (0, qt.useState)(Vt.selectedCat || (null === et || void 0 === et ? void 0 : et[0]) || null), [jt, Qt] = (0, qt.useState)(Vt.selectedTimeframe || "Today"), [lt, Et] = (0, qt.useState)(null);
      (0, qt.useEffect)((() => {
        null === mt && null !== et && et.length > 0 && dt(et[0])
      }), [et, mt]);
      const [ft, wt] = (0, qt.useState)(Vt.seeingTop || !1), [yt, Nt] = (0, qt.useState)(!1), Mt = (0, qt.useCallback)((() => {
        null !== mt && null !== jt && (Ht.gameBridge.send("requestLeaderboard", {
          category: mt.value,
          timeframe: jt,
          seeTop: ft
        }), Jt(!0), Zt && Lt(null))
      }), [mt, jt, Vt, ft]);
      (0, qt.useEffect)((() => {
        Mt(), Vt.selectedCat = mt, Vt.selectedTimeframe = jt, Vt.seeingTop = ft
      }), [mt, jt, Vt, ft, Mt]), (0, qt.useEffect)((() => {
        if ((null === lt || void 0 === lt ? void 0 : lt.length) > 0)
          if (ft) ft && Nt(null === Rt(lt));
          else {
            for (const tt of lt)
              if (1 === tt.place) return void Nt(!1);
            Nt(!0)
          }
      }), [lt, ft]), (0, ht.f)("leaderboardResponse", (tt => {
        let {
          category: Vt,
          timeframe: Ot,
          data: qt
        } = tt;
        for (let Dt = 0; Dt < et; Dt++)
          if (et[Dt].value === Vt) {
            dt(et[Dt]);
            break
          } Qt(Ot), Et(qt), Jt(!1)
      }));
      const [bt, Jt] = (0, qt.useState)(!0);

      function Rt(tt) {
        const et = ct(Ht.gameBridge.latest("players"));
        for (let Vt = 0; Vt < tt.length; Vt++)
          if (tt[Vt].name === et) return tt[Vt].place;
        return null
      }
      const [It, Pt] = (0, qt.useState)(!1), [Zt, Lt] = (0, qt.useState)(null);
      (0, qt.useEffect)((() => {
        if (lt && !It) {
          const tt = Rt(lt);
          tt < (Vt.lastSeenPlayerPlace || 0) && Lt(Vt.lastSeenPlayerPlace - tt), Pt(!0)
        }
      }), [lt, Vt, It]), (0, qt.useEffect)((() => () => {
        lt && (Vt.lastSeenPlayerPlace = Rt(lt))
      }), [lt, Vt]);
      const Ft = (0, qt.useRef)(null),
        [kt, Gt] = (0, qt.useState)(void 0);
      return (0, qt.useEffect)((() => {
        var tt, et;
        kt !== (null === (tt = Ft.current) || void 0 === tt ? void 0 : tt.offsetHeight) && Gt(null === (et = Ft.current) || void 0 === et ? void 0 : et.offsetHeight)
      })), Ot.isLoggedIn() ? (0, Xt.jsxs)(Xt.Fragment, {
        children: [(0, Xt.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, Xt.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Xt.jsx)(Ct.e, {
              options: et.map((tt => ({
                label: tt.label,
                value: tt.value
              }))),
              value: mt,
              onChange: tt => {
                dt(tt)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, Xt.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Xt.jsx)(Ct.e, {
              options: vt.Wc.map((tt => ({
                value: tt,
                label: tt,
                className: "LBDropdownMenuItem"
              }))),
              value: jt,
              onChange: tt => {
                Qt(tt.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), yt ? (0, Xt.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              wt(!ft)
            },
            children: ft ? "See Yourself" : "See Top"
          }) : null]
        }), (0, Xt.jsx)("div", {
          className: "LBTableWrapper",
          children: bt ? (0, Xt.jsx)("div", {
            className: "LoaderContainer",
            children: (0, Xt.jsx)(St.b, {})
          }) : null === Zt ? (0, Xt.jsx)(Xt.Fragment, {
            children: (0, Xt.jsxs)("table", {
              className: "LBTable",
              children: [(0, Xt.jsx)("thead", {
                className: "LBTableTHead",
                ref: Ft,
                children: (0, Xt.jsxs)("tr", {
                  children: [(0, Xt.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, Xt.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, Xt.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: mt.label.toUpperCase()
                  })]
                })
              }), (0, Xt.jsx)("tbody", {
                children: lt.map((tt => (0, Xt.jsxs)("tr", {
                  className: "LBTableTR " + (tt.name === Dt ? "LBTableTRYou" : ""),
                  children: [(0, Xt.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${tt.place}`
                  }), (0, Xt.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, Xt.jsx)(Kt.e, {
                      text: [{
                        entityName: tt.name
                      }]
                    })
                  }), (0, Xt.jsx)("td", {
                    className: "LBTableTD",
                    children: tt.stat
                  })]
                }, tt.name)))
              })]
            })
          }) : (0, Xt.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              Lt(null)
            },
            children: (0, Xt.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, Xt.jsx)("div", {
                className: "TriangleUp"
              }), (0, Xt.jsx)("div", {
                className: "LBIncreaseText",
                children: `${Zt} Place${Zt>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, Xt.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, Xt.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, Xt.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var It = Vt(3176),
      Pt = Vt(106),
      Zt = Vt(39),
      Lt = Vt(3487);
    const Ft = (0, qt.memo)((function(tt) {
      let {
        show: et,
        onClose: Vt
      } = tt;
      (0, It.c)();
      const Ot = (0, jt.i)("_tasks"),
        Dt = (0, jt.i)("_availableLeaderboards"),
        [Ht, Qt] = (0, qt.useState)({});
      Ot && Object.keys(Ot).length > 0 && 0 === Object.keys(Ht).length && Qt(Ot);
      const [lt] = (0, qt.useState)({
        tasks: {},
        leaderboard: {}
      }), Et = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!Ot && Object.keys(Ot).length > 0,
          content: (0, Xt.jsx)(Nt, {
            tasks: Ot,
            lastDisplayedTasks: Ht
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === Dt || void 0 === Dt ? void 0 : Dt.length) > 0,
          content: (0, Xt.jsx)(Rt, {
            lbStats: Dt,
            storedState: lt.leaderboard
          })
        }
      };

      function ft() {
        for (const tt in Et)
          if (Et[tt].getIsDefined()) return tt;
        return null
      }
      const [wt, yt] = (0, qt.useState)(ft());

      function Mt() {
        Qt({
          ...Ot
        }), Vt()
      }(0, qt.useEffect)((() => {
        wt || yt(ft())
      }), [ft()]), (0, dt.e)(!0, wt && et), (0, qt.useEffect)((() => {
        et && !wt && (console.log("CLOSE"), Mt())
      }), [et, wt]);
      const [bt, Jt] = (0, qt.useState)(!1);
      return (0, qt.useEffect)((() => {
        et && wt && !bt && Jt(!0)
      }), [et, bt, wt]), (0, qt.useEffect)((() => {
        !bt && Ot && "tasks" !== wt && yt("tasks")
      }), [bt, Ot, wt]), (0, Xt.jsx)(Xt.Fragment, {
        children: wt ? (0, Xt.jsx)(Lt.d, {
          className: "RetentionFeaturesWrapper",
          show: et,
          children: (0, Xt.jsxs)(mt.c, {
            close: Mt,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, Xt.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, Xt.jsx)(Gt, {}), (0, Xt.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, Xt.jsx)(kt, {
                  setCategory: yt,
                  menuCategories: Et,
                  selectedCat: wt
                }), (0, Xt.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: Et[wt].content
                })]
              })]
            }), (0, Xt.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: Pt.featureFlags.useDiscord && (0, Xt.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, Xt.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, Xt.jsx)(zt, {
                    tasks: Ot
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function kt(tt) {
      let {
        selectedCat: et,
        setCategory: Vt,
        menuCategories: Ot
      } = tt;
      return (0, Xt.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(Ot).map((tt => Ot[tt].getIsDefined() ? (0, Xt.jsx)("div", {
          className: "MenuHeaderCategory " + (tt === et ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            Vt(tt)
          },
          children: Ot[tt].Title
        }, tt) : null))
      })
    }

    function Gt() {
      const tt = (0, jt.i)("currencyAmounts");
      return (0, Xt.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== tt && void 0 !== tt ? tt : {}).map((et => {
          const Vt = tt[et];
          return Vt.hidden ? null : (0, Xt.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, Xt.jsx)(yt.b, {
              name: Vt.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: Vt.iconColour
              }
            }), (0, Xt.jsx)("div", {
              className: "UiCurrencyAmount",
              children: Vt.amount
            })]
          }, et)
        }))
      })
    }

    function zt(tt) {
      let {
        tasks: et
      } = tt;
      return (0, Xt.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, Xt.jsx)(yt.b, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            Zt.e.setItem("DiscordPressed", !0), Ht.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in et && ft.j.sw("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, Xt.jsx)(Dt.e, {})]
      })
    }
    var ot = Vt(26),
      rt = Vt(1732),
      Ut = Vt(36779),
      At = Vt(34278),
      it = Vt(4771),
      Yt = Vt(184),
      Bt = Vt(1303),
      pt = Vt(1464),
      xt = Vt(2745),
      Tt = Vt(1286),
      gt = Vt(1737),
      st = Vt(2449),
      nt = Vt(2441),
      te = Vt(1950),
      ee = Vt(2117),
      Ve = Vt(1354),
      Oe = Vt(1583),
      qe = Vt(36954),
      De = Vt(36959),
      me = Vt(36967),
      de = Vt(36973),
      je = Vt(36978),
      He = Vt(2790);

    function Xe(tt) {
      let {
        playersHere: et,
        exclude: Vt,
        qJ: Ot
      } = tt;
      const {
        t: Dt
      } = (0, Tt.H)(), mt = (0, He.m)(He.h), [dt, jt] = (0, qt.useState)([]), Ht = [], Qt = (tt, et) => {
        const Ot = [...Vt, ...Ht.map((tt => tt.player.name))];
        Ht.length < 3 && !(0, De.j)(Ot, tt.name) && Ht.push({
          player: tt,
          status: et
        })
      };
      for (const qt of et) Qt((0, je.j)(qt.name, qt.cosmetics, qt.ranks), Dt("worldSocial:inThisWorld"));
      if ("loaded" === mt.state.status)
        for (const qt of mt.state.recentPlayers) qt.preview.name && !qt.preview.isError && Qt({
          ...qt.preview,
          location: {
            status: "offline"
          }
        }, Dt("worldSocial:playedWithYou"));
      const lt = tt => {
        jt((et => [...et, tt])), Ot(tt).finally((() => {
          jt((et => et.filter((et => et !== tt))))
        }))
      };
      return (0, Xt.jsx)(Xt.Fragment, {
        children: Ht.map(((tt, et) => {
          let {
            player: Vt,
            status: Ot
          } = tt;
          return (0, Xt.jsx)(je.f, {
            zIndex: Ht.length - et,
            player: Vt,
            status: Ot,
            onSendFriendRequest: () => {
              lt(Vt.name)
            },
            actions: (0, Xt.jsx)(pt.g, {
              tooltipInner: (0, Xt.jsx)(Xt.Fragment, {
                children: Dt("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, Xt.jsx)(Et.f, {
                className: "FriendRequestButton",
                disabled: dt.includes(Vt.name),
                ariaLabel: `${Dt("recentPlayers:addFriend")} ${Vt.name}`,
                onClick: () => {
                  lt(Vt.name)
                },
                children: (0, Xt.jsx)(yt.b, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${Vt.name}`)
        }))
      })
    }
    var Qe = Vt(36984),
      le = Vt(36988),
      Ee = Vt(1308),
      fe = Vt(1597),
      we = Vt(4438),
      ye = Vt(318),
      Ne = Vt(4749);
    const ae = ["auto", "auto_existing"];

    function Me(tt) {
      return ae.includes(tt)
    }

    function be(tt, et) {
      const Vt = (0, Ee.vb)(tt);
      return null !== et && (0, Ee.vb)(et) === Vt || (0, Ne.b)().some((tt => (0, Ee.vb)(tt.name) === Vt))
    }
    const Je = new Set;

    function Ce(tt) {
      return `worldSocialSeen:${tt}`
    }

    function ue(tt) {
      return !tt || Je.has(tt) || !0 === Zt.e.getItem(Ce(tt))
    }

    function Ke(tt) {
      tt && !Je.has(tt) && (Je.add(tt), Zt.e.setItem(Ce(tt), !0))
    }
    var he = Vt(2511),
      ve = Vt(2516);

    function We(tt) {
      let {
        show: et,
        onClose: Vt,
        opener: Ot
      } = tt;
      const {
        lobbyName: Dt,
        shownLobbyName: dt
      } = (0, Wt.h)("connectedGame");
      return (0, qt.useEffect)((() => {
        et && (0, Oe.reportAnalyticsClick)({
          id: "world_social.open",
          value: Ot
        })
      }), [et]), (0, Xt.jsx)(mt.c, {
        show: et && null !== Dt,
        close: Vt,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== Ot,
        children: et && null !== Dt && (0, Xt.jsx)(Se, {
          lobbyName: Dt,
          worldCode: null !== dt && void 0 !== dt ? dt : Dt,
          onClose: Vt
        }, Dt)
      })
    }

    function Se(tt) {
      var et;
      let {
        lobbyName: Vt,
        worldCode: Ot,
        onClose: Dt
      } = tt;
      const {
        t: mt
      } = (0, Tt.H)(), dt = (0, qt.useRef)(null), {
        settings: jt,
        loading: Ht,
        answered: Qt,
        change: lt,
        retry: ft
      } = (0, qe.f)(Vt), wt = (0, gt.k)(), Nt = (0, Wt.h)("players"), Mt = (0, Wt.h)("hiddenPlayerNames"), [bt, Jt] = (0, qt.useState)([]), [Ct, Kt] = (0, qt.useState)([]), [ht, vt] = (0, qt.useState)(!1), ct = (0, he.e)(), Rt = (0, qt.useMemo)((() => {
        var tt, et;
        const Vt = null === Nt.localId ? null : null !== (tt = null === (et = Nt.byId[Nt.localId]) || void 0 === et ? void 0 : et.name) && void 0 !== tt ? tt : null;
        return Nt.ids.flatMap((tt => {
          const et = Nt.byId[tt];
          return null !== et && void 0 !== et && et.name && et.name !== Vt ? [{
            name: et.name,
            cosmetics: et.cosmetics,
            ranks: et.ranks
          }] : []
        }))
      }), [Nt]), It = (0, qt.useMemo)((() => (0, De.f)(wt.friends, Vt, Rt.map((tt => tt.name)))), [wt.friends, Vt, Rt]), Zt = Pt.featureFlags.canSeeRealPlayerNames ? Rt.filter((tt => null === (0, Ve.e)(tt.name, Mt))) : [], Lt = null !== jt && void 0 !== jt && jt.canManage ? jt : null, Ft = null !== Lt, kt = null !== (et = null === jt || void 0 === jt ? void 0 : jt.visibility) && void 0 !== et ? et : null, Gt = "whitelist" === (null === Lt || void 0 === Lt ? void 0 : Lt.visibility), zt = "private" === kt || "whitelist" === kt && !Ft, {
        userContext: ot
      } = (0, ut.d)();
      (0, qt.useEffect)((() => {
        Ft && be(Vt, ot.getPersonalWorldLobbyName()) && Ke(ot.whamm)
      }), [Ft, Vt, ot]);
      const rt = zt ? mt("whitelist" === kt ? "socialBar:inviteWorldManagersOnly" : Ft ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        At = null === rt;
      (0, qt.useEffect)((() => zt ? void 0 : te.f.quietFriendAdded()), [zt]), (0, qt.useEffect)((() => te.f.quietFriendRequests()), []);
      const He = (0, qt.useRef)(!1);
      (0, qt.useEffect)((() => {
        const tt = dt.current,
          et = !He.current;
        He.current = !0;
        const Vt = null === document.activeElement || document.activeElement === document.body;
        null !== tt && void 0 !== tt && tt.contains(document.activeElement) || !et && !Vt || (0, Ut.g)() || null === tt || void 0 === tt || tt.focus({
          preventScroll: !0
        })
      }), [At]), (0, qt.useEffect)((() => {
        const tt = tt => {
          "Escape" !== tt.key || null !== document.activeElement && document.activeElement !== document.body || Dt()
        };
        return document.addEventListener("keydown", tt), () => {
          document.removeEventListener("keydown", tt)
        }
      }), [Dt]);
      const Ee = null === jt && !Qt,
        fe = (Ht || wt.loading) && 0 === wt.friends.length,
        we = wt.friends.flatMap((tt => tt.name ? [tt.name] : [])),
        ye = bt.filter((tt => !(0, De.j)(we, tt))),
        Ne = It.length + 3,
        ae = ye.length + Ne,
        Me = ht ? wt.requests : wt.requests.slice(0, 1),
        Je = async function(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const Vt of (0, De.m)(tt, it.E)) {
            if (!await lt({
                whitelistAdd: Vt
              }, (tt => (0, De.r)(tt, Vt, !0)), {
                quiet: et
              })) return !1
          }
          return !0
        }, Ce = tt => {
          if (Gt && Lt) return {
            on: (0, De.j)(Lt.whitelist, tt),
            onChange: et => {
              (0, Oe.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: et ? "on" : "off"
              }), lt(et ? {
                whitelistAdd: [tt]
              } : {
                whitelistRemove: tt
              }, (Vt => (0, De.r)(Vt, [tt], et)))
            }
          }
        }, ue = async (tt, et) => {
          (0, Oe.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: et
          });
          const Vt = await (0, nt.l)(tt, "world_social");
          return (0, nt.d)(Vt, tt, {
            announceSent: !1
          }), "failed" !== Vt.kind && ("sent" === Vt.kind && Jt((et => (0, De.j)(et, tt) ? et : [...et, tt])), Gt && await Je([tt]), !0)
        };
      return (0, Xt.jsxs)("div", {
        ref: dt,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: tt => {
          tt.target === tt.currentTarget && " " === tt.key && tt.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, Xt.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, Xt.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: mt("worldSocial:title")
          }), (0, Xt.jsx)(Et.j, {
            className: "WorldSocialClose",
            onClick: Dt
          })]
        }), Ee && (0, Xt.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, Xt.jsx)(St.b, {})
        }), !Ee && (0, Xt.jsxs)(Xt.Fragment, {
          children: [(0, Xt.jsx)(me.b, {
            worldCode: Ot,
            message: rt
          }), null === jt && !Ht && (0, Xt.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: ft,
            children: mt("worldSocial:loadFailed")
          }), Ft && null !== kt && (0, Xt.jsx)(de.e, {
            visibility: kt,
            onPick: tt => {
              (async tt => {
                if (tt === kt) return;
                (0, Oe.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: tt
                });
                const et = [...(0, le.e)(Vt), ...Ct],
                  Ot = "whitelist" === tt && jt ? (0, De.e)(It, et, jt.whitelist) : [];
                await lt({
                  setVisibility: tt
                }, (et => ({
                  ...et,
                  visibility: tt
                }))) && await Je(Ot)
              })(tt)
            }
          }), wt.requests.length > 0 && (0, Xt.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Xt.jsx)(xt.d, {
              label: (0, Xt.jsxs)(Xt.Fragment, {
                children: [(0, Xt.jsx)(yt.b, {
                  name: ee.e
                }), " ", mt("socialBar:requests")]
              }),
              meta: (0, Xt.jsxs)(Xt.Fragment, {
                children: [wt.requests.length, wt.requests.length === Bt.n && (0, Xt.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: mt("socialBar:limitReached")
                }), !ht && wt.requests.length > 1 && (0, Xt.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    vt(!0)
                  },
                  children: mt("worldSocial:moreRequests", {
                    count: wt.requests.length - 1
                  })
                })]
              })
            }), (0, Xt.jsx)("div", {
              className: "PlayerRows",
              children: Me.map(((tt, et) => (0, Xt.jsx)(je.f, {
                zIndex: Me.length - et,
                player: tt,
                actions: (0, Xt.jsxs)(Xt.Fragment, {
                  children: [(0, Xt.jsx)(pt.g, {
                    tooltipInner: (0, Xt.jsx)(Xt.Fragment, {
                      children: mt("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Xt.jsx)(Et.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${mt("general:accept")} ${tt.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, nt.h)(tt.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, Xt.jsx)(yt.b, {
                        name: "check"
                      })
                    })
                  }), (0, Xt.jsx)(pt.g, {
                    tooltipInner: (0, Xt.jsx)(Xt.Fragment, {
                      children: mt("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Xt.jsx)(Et.g, {
                      className: "FriendRequestButton",
                      ariaLabel: `${mt("general:decline")} ${tt.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, nt.h)(tt.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, Xt.jsx)(yt.b, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${tt.name}`)))
            })]
          }), (0, Xt.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Xt.jsx)(xt.d, {
              label: (0, Xt.jsxs)(Xt.Fragment, {
                children: [(0, Xt.jsx)(yt.b, {
                  name: ee.b
                }), " ", mt("socialBar:friends")]
              }),
              meta: wt.loaded && !zt ? wt.friends.length : void 0
            }), (0, Xt.jsx)(Qe.d, {
              label: mt("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: mt("worldSocial:addFriendPlaceholder"),
              onSubmit: async tt => await ue(tt, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), fe && (0, Xt.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, Xt.jsx)(St.b, {})
            }), !fe && (0, Xt.jsxs)(Xt.Fragment, {
              children: [(0, Xt.jsxs)("div", {
                className: "PlayerRows",
                children: [ye.map(((tt, et) => (0, Xt.jsx)(je.f, {
                  zIndex: ae - et,
                  player: (0, je.j)(tt, null),
                  status: mt("worldSocial:requestSent"),
                  BQ: Ce(tt)
                }, `request:${tt}`))), !zt && It.map(((tt, et) => (0, Xt.jsx)(je.e, {
                  zIndex: Ne - et,
                  row: tt,
                  BQ: Ce(tt.friend.name),
                  canInvite: (0, De.b)(jt) && "here" !== tt.place,
                  invited: Ct.includes(tt.friend.name),
                  onInvite: () => {
                    (async tt => {
                      (0, Oe.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const et = () => {
                        Kt((et => et.filter((et => et !== tt))))
                      };
                      Kt((et => [...et, tt]));
                      const Ot = (0, De.o)(jt, tt);
                      if ("none" !== Ot) {
                        const Vt = Je([tt], "quiet" === Ot);
                        if ("required" === Ot && !await Vt) return void et()
                      }
                      await (0, st.g)(tt, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, le.i)(Vt, tt), setTimeout(et, Yt.q)) : et()
                    })(tt.friend.name)
                  }
                }, tt.friend.name))), wt.loaded && 0 === wt.friends.length && (0, Xt.jsx)(Xe, {
                  playersHere: Zt,
                  exclude: bt,
                  qJ: tt => ue(tt, "suggestion")
                })]
              }), Gt && wt.loaded && 0 === wt.friends.length && 0 === ye.length && (0, Xt.jsx)("div", {
                className: "WorldSocialEmpty",
                children: mt("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), ct && (0, Xt.jsxs)(Et.Q, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, ve.h)({
              page: "players",
              source: "invite_popup"
            }), Dt()
          },
          children: [(0, Xt.jsx)(yt.b, {
            name: "users-gear"
          }), " ", mt("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var ce = Vt(2555),
      Re = Vt(2504);

    function Ie(tt) {
      let {
        show: et,
        onClose: Vt,
        option: Ot
      } = tt;
      const Dt = (0, Wt.g)("connectedGame", (tt => (0, ce.c)(tt) ? tt.lobbyName : null));
      return function(tt) {
        const {
          gameEntrySource: et,
          loadingOverlayVisible: Vt
        } = (0, ot.k)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: Ot
        } = (0, ut.d)(), Dt = (0, Wt.h)("localPlayerAlive"), mt = (0, Wt.g)("players", (tt => null !== tt.localId && void 0 !== tt.byId[tt.localId])), dt = (0, Re.g)(), jt = (0, qt.useRef)(null), Ht = (0, qt.useRef)(null), Xt = "worldCreation" === et, Qt = Ot.whamm, lt = Ot.getPersonalWorldLobbyName();
        (0, qt.useEffect)((() => {
          var et;
          null !== tt && (null === (et = Ht.current) || void 0 === et ? void 0 : et.lobbyName) !== tt && null !== Fe(tt, Xt, Qt, lt) && (Ht.current = (0, qe.e)(tt))
        }), [Xt, tt, Qt, lt]), (0, qt.useEffect)((() => {
          if (null !== tt && (!Vt && Dt && mt)) return dt.whenShown((() => {
            var et;
            const Vt = jt.current === tt ? null : Fe(tt, Xt, Qt, lt);
            if (null === Vt) return;
            const Ot = (null === (et = Ht.current) || void 0 === et ? void 0 : et.lobbyName) === tt ? Ht.current : (0, qe.e)(tt);
            Ht.current = null, jt.current = tt,
              function(tt, et, Vt, Ot) {
                const {
                  lobbyName: qt
                } = tt, Dt = () => {
                  ! function(tt, et) {
                    if (!re()) return void et(!0);
                    const Vt = performance.now() + ze;
                    let Ot = 0;
                    const qt = () => {
                      Ot = re() ? 0 : Ot + 1, Ot >= 2 ? et(!0) : !oe(tt) || performance.now() > Vt ? et(!1) : setTimeout(qt, Ge)
                    };
                    setTimeout(qt, Ge)
                  }(qt, (Dt => {
                    Ot();
                    const mt = "auto_existing" === et && ue(Vt);
                    Dt && oe(qt) && !Ze(qt) && !mt && (ke(tt) ? Le(qt) : (Le(qt), Ke(Vt), function(tt) {
                      const et = ye.c.world_social_popup_v1;
                      return (0, ye.j)("world_social_popup_v1"), (0, Oe.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${et}:${(0,we.e)()}:${tt}`
                      }), (0, fe.flushClientAnalyticsEvents)(), "auto_open" === et
                    }(et) && ((0, qe.b)(tt), ft.j.sw("toggleMenu", `inviteLink|${et}`), "inviteLink" !== ot.b.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === et && !ke(tt)) return void Dt();
                tt.response.then((tt => {
                  if (!("error" in tt)) return tt.settings.canManage ? void Dt() : (Le(qt), void Ot());
                  Ot()
                }))
              }(Ot, Vt, Qt, (() => {
                jt.current === tt && (jt.current = null)
              }))
          }))
        }), [dt, Xt, Vt, tt, Dt, mt, Qt, lt])
      }(Dt), (0, qt.useEffect)((() => {
        et && null !== Dt && Le(Dt)
      }), [et, Dt]), null !== Dt ? (0, Xt.jsx)(We, {
        show: et,
        onClose: Vt,
        opener: Me(Ot) ? Ot : "icon"
      }) : (0, Xt.jsx)(At.d, {
        show: et,
        onClose: Vt
      })
    }
    const Pe = new Set;

    function Ze(tt) {
      return Pe.has(tt) || !!Zt.h.getItem(`worldSocialShown:${tt}`)
    }

    function Le(tt) {
      Pe.add(tt), Zt.h.setItem(`worldSocialShown:${tt}`, !0)
    }

    function Fe(tt, et, Vt, Ot) {
      return Ze(tt) ? null : function(tt) {
        let {
          justMade: et,
          playerId: Vt,
          lobbyName: Ot,
          personalWorld: qt
        } = tt;
        return et ? "auto" : !ue(Vt) && be(Ot, qt) ? "auto_existing" : null
      }({
        justMade: et,
        playerId: Vt,
        lobbyName: tt,
        personalWorld: Ot
      })
    }

    function ke(tt) {
      let {
        answer: et
      } = tt;
      return null !== et && "settings" in et && !et.settings.canManage
    }
    const Ge = 500,
      ze = 3e4;

    function oe(tt) {
      return "inGame" === ot.b.get("gameState") && Ht.gameBridge.latest("connectedGame").lobbyName === tt
    }

    function re() {
      return (0, Ut.g)() || ot.b.get("loadingOverlayVisible") || (0, rt.q)()
    }
    var Ue = Vt(36990),
      Ae = Vt(3219),
      ie = Vt(2074),
      Ye = Vt(3217);

    function Be(tt, et, Vt) {
      return Ye.e.overridesTexture(tt) ? Ye.e.getTexture(tt, et).url : Vt
    }
    var pe = Vt(10164);
    const xe = (tt, et) => {
        (0, qt.useEffect)((() => {
          setTimeout((() => {
            tt && tt.current && tt.current.focus()
          }), 1)
        }), [et])
      },
      Te = (0, qt.memo)((function(tt) {
        let {
          isInputActive: et,
          onClose: Vt,
          onChange: Ot,
          textAreaRef: qt,
          fontSize: Dt,
          lineHeight: mt,
          currText: dt
        } = tt;
        return (0, Xt.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, Xt.jsx)("img", {
            src: Be("board_full", Ae.k.BLOCK, pe),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, Xt.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: dt,
            ref: qt,
            style: {
              fontSize: `${Dt}rem`,
              lineHeight: `${mt}rem`
            },
            onKeyDown: tt => {
              var et;
              "Escape" !== tt.key && (tt.stopPropagation(), "Tab" === tt.key && function(tt) {
                tt.preventDefault();
                const et = tt.target,
                  {
                    value: Vt
                  } = et;
                let Ot = et.selectionStart,
                  qt = et.selectionEnd,
                  Dt = Vt.slice(Ot, qt);
                if (!Dt.includes("\n") && !tt.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; Ot > 0 && "\n" !== Vt[Ot - 1];) Ot--;
                const mt = "\n" === Vt[qt - 1];
                mt && qt--;
                Dt = Vt.slice(Ot, qt);
                const dt = Dt.split("\n").map((et => tt.shiftKey ? et.replace(/^\t/, "") : "\t" + et)).join("\n");
                if (tt.shiftKey && Vt.slice(Ot, qt) === dt) return;
                let {
                  selectionStart: jt
                } = et;
                et.setSelectionRange(Ot, qt), jt > Ot && (!tt.shiftKey || "\t" === Dt[0]) && (jt += tt.shiftKey ? -1 : 1);
                qt = Ot + dt.length + (mt ? 1 : 0), document.execCommand("insertText", !1, dt), et.setSelectionRange(jt, qt)
              }(tt), /^F\d+$/i.test(tt.code) && null !== (et = ie.r.OpenCodeEditor) && void 0 !== et && et.includes(tt.code) && Vt())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: Ot
          })]
        })
      }));

    function ge(tt) {
      return 1.3 * tt
    }
    var se = Vt(1779);
    const ne = (0, qt.memo)((function(tt) {
        let {
          show: et,
          onOpen: Vt,
          onClose: Ot
        } = tt;
        const [Dt, dt] = (0, qt.useState)(null), [jt, Qt] = (0, qt.useState)(""), [lt, ft] = (0, qt.useState)(0), [wt, yt] = (0, qt.useState)(null), [Nt, Mt] = (0, qt.useState)({
          text: "",
          textSize: 0
        }), bt = (tt, et) => wt ? (0, Ue.k)(tt, et, wt.width, wt.height) : (0, Ue.f)(tt, et), Jt = tt => {
          Qt(bt(jt, tt)), ft(tt), Zt.e.setItem("lastBoardTextSize", tt)
        }, Ct = () => {
          Ot(), wt && jt === Nt.text && lt === Nt.textSize || Ht.gameBridge.send("writeOnBoard", {
            pos: Dt,
            text: jt,
            textSize: lt
          })
        };
        (0, Wt.e)("boardEditRequested", (tt => {
          var qt, Dt;
          if (!Pt.featureFlags.canSeePlayerWrittenText) return;
          if (null === tt) return dt(null), void(et && Ot());
          const {
            pos: mt,
            noticeboardSpan: jt,
            text: Ht
          } = tt;
          dt(mt), yt(jt), Qt(Ht);
          const Xt = null !== (qt = null !== (Dt = tt.textSize) && void 0 !== Dt ? Dt : Zt.e.getItem("lastBoardTextSize")) && void 0 !== qt ? qt : 0;
          ft(Xt), Mt({
            text: Ht,
            textSize: Xt
          }), Zt.e.setItem("lastBoardTextSize", Xt), Vt()
        }));
        const ut = (0, qt.useRef)(null);
        xe(ut, et), (0, se.p)(ut, {
          kind: "sign",
          submit: Ct
        });
        const Kt = function(tt, et) {
            const Vt = Ue.d[tt];
            if (!et) return Vt.uiFontSize;
            const {
              numLines: Ot,
              charsPerLine: qt
            } = (0, Ue.t)(et.width, et.height, tt);
            return Vt.uiFontSize * Math.min(Vt.charsPerLine / qt, Vt.numLines / Ot)
          }(lt, wt),
          ht = ge(Kt);
        return (0, Xt.jsxs)(mt.c, {
          className: "WriteOnBoardBg",
          close: Ct,
          escDoesExit: !0,
          show: et,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Xt.jsx)(Te, {
            isInputActive: () => et,
            onClose: Ct,
            onChange: tt => {
              Qt(bt(tt.target.value, lt))
            },
            textAreaRef: ut,
            fontSize: Kt,
            lineHeight: ht,
            currText: jt
          }), (0, Xt.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, Xt.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, Xt.jsx)(Et.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Jt(0)
              },
              disabled: 0 === lt,
              children: "Small"
            }), (0, Xt.jsx)(Et.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Jt(1)
              },
              disabled: 1 === lt,
              children: "Medium"
            }), (0, Xt.jsx)(Et.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Jt(2)
              },
              disabled: 2 === lt,
              children: "Large"
            })]
          })]
        })
      })),
      tV = (0, qt.memo)((function(tt) {
        let {
          show: et,
          onOpen: Vt,
          onClose: Ot
        } = tt;
        const [Dt, dt] = (0, qt.useState)(""), jt = () => {
          Ot(), Ht.gameBridge.send("writeNameTag", Dt)
        };
        (0, ht.f)("EditNameTag", (tt => {
          Pt.featureFlags.canSeePlayerWrittenText && null !== tt && (dt(tt), Vt())
        }));
        const Qt = (0, qt.useRef)(null);
        xe(Qt, et), (0, se.p)(Qt, {
          kind: "nameTag",
          submit: jt
        });
        const lt = Ue.B.nameTag.uiFontSize,
          ft = ge(lt);
        return (0, Xt.jsxs)(mt.c, {
          className: "WriteOnBoardBg",
          close: jt,
          escDoesExit: !0,
          show: et,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Xt.jsx)("div", {
            className: "NameTagTrim",
            children: (0, Xt.jsx)(Te, {
              isInputActive: () => et,
              onClose: jt,
              onChange: tt => {
                const et = tt.target.value.replaceAll("\n", "");
                dt((0, Ue.n)(et, "nameTag"))
              },
              textAreaRef: Qt,
              fontSize: lt,
              lineHeight: ft,
              currText: Dt
            })
          }), (0, Xt.jsx)(Et.f, {
            onClick: jt,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var eV = Vt(18360);
    const VV = (0, qt.memo)((function(tt) {
      let {
        show: et,
        onOpen: Vt,
        onClose: Ot
      } = tt;
      const [Dt, dt] = (0, qt.useState)(""), [jt, Qt] = (0, qt.useState)(0), [lt, ft] = (0, qt.useState)(!1), [wt, yt] = (0, qt.useState)(["", "", "", "", "", "", "", "", "", ""]), [Nt, Mt] = (0, qt.useState)("Title"), [bt, Jt] = (0, qt.useState)(!0), [Ct, ut] = (0, qt.useState)(!1);
      (0, ht.f)("EditBook", (tt => {
        let {
          pages: et,
          title: Ot,
          isPublished: qt
        } = tt;
        var Dt;
        Pt.featureFlags.canSeePlayerWrittenText && (null !== et ? (yt(et), dt(null !== (Dt = et[0]) && void 0 !== Dt ? Dt : ""), Mt(Ot), Qt(0), ft(!1), Jt(!qt), ut(!1), Vt()) : yt(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const Kt = (0, qt.useRef)(null),
        vt = (0, qt.useRef)(null);
      xe(Kt, et), (0, se.p)(Kt, {
        kind: "book"
      }), (0, se.p)(vt, {
        kind: "td"
      });
      const Wt = Ue.B.book.uiFontSize,
        St = ge(Wt),
        ct = () => {
          (bt || Ct) && Ht.gameBridge.send("writeBook", {
            pages: [...wt],
            title: Nt,
            published: !bt && Ct
          })
        },
        Rt = tt => {
          lt && (wt[jt] = Dt, ft(!1)), dt(wt[tt]), Qt(tt)
        };
      return (0, Xt.jsxs)(mt.c, {
        className: "WriteOnBoardBg",
        close: () => {
          Ot(), wt[jt] = Dt, ct()
        },
        escDoesExit: !0,
        show: et,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, Xt.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, Xt.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: Nt,
            ref: vt,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${St}rem`
            },
            onKeyDown: tt => {
              bt && tt.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: tt => {
              let et = tt.target.value;
              et = (0, Ue.n)(et, "td"), Mt(et)
            },
            readOnly: !bt
          }), (0, Xt.jsx)("img", {
            src: Be("book_page", Ae.k.ITEM, eV),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, Xt.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, Xt.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: Dt,
              ref: Kt,
              style: {
                fontSize: `${Wt}rem`,
                lineHeight: `${St}rem`
              },
              onKeyDown: tt => {
                bt && tt.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: tt => {
                const et = tt.target.value;
                dt((0, Ue.n)(et, "book")), ft(!0)
              },
              readOnly: !bt
            })
          })]
        }), (0, Xt.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, Xt.jsx)(Et.f, {
            disabled: 0 === jt,
            onClick: () => {
              Rt(jt - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, Xt.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Xt.jsx)(Et.f, {
            disabled: 9 === jt,
            onClick: () => {
              Rt(jt + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, Xt.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Xt.jsx)(Et.f, {
            onClick: () => {
              Jt(!bt), ut(!0)
            },
            className: "BookNavButton",
            children: bt ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var OV = Vt(36867),
      qV = Vt(8899),
      DV = Vt(1492),
      mV = Vt(2018);

    function dV(tt) {
      let {
        show: et,
        buttons: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Tt.H)(), Dt = (0, qt.useRef)(null);
      return (0, qt.useEffect)((() => {
        var tt, Vt;
        const Ot = et ? (0, OV.E)() : null;
        if (!Ot || !(0, DV.j)()) return;
        const qt = (0, OV.n)().findIndex((tt => tt.id === Ot));
        (0, qV.r)(null !== (tt = null === (Vt = Dt.current) || void 0 === Vt ? void 0 : Vt.children[qt]) && void 0 !== tt ? tt : null)
      }), [et]), 0 === Vt.length ? null : (0, Xt.jsx)("div", {
        ref: Dt,
        className: "ClientGameInventoryButtons",
        onPointerDown: tt => {
          tt.stopPropagation()
        },
        onPointerUp: tt => {
          tt.stopPropagation()
        },
        children: Vt.map((tt => {
          const et = Ot(tt.labelKey);
          return (0, Xt.jsxs)(Et.m, {
            className: tt.className,
            disabled: tt.disabled,
            onClick: () => {
              (0, OV.w)(tt)
            },
            ariaLabel: tt.iconOnly ? et : void 0,
            title: tt.iconOnly ? et : void 0,
            children: [tt.icon && (0, Xt.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === tt.icon.kind && (0, Xt.jsx)(mV.e, {
                itemName: tt.icon.name,
                amount: 0
              }), "image" === tt.icon.kind && (0, Xt.jsx)("img", {
                src: tt.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === tt.icon.kind && (0, Xt.jsx)(yt.b, {
                name: tt.icon.name
              })]
            }), !tt.iconOnly && et]
          }, tt.id)
        }))
      })
    }
    var jV = Vt(36992),
      HV = Vt(2817),
      XV = Vt(34394),
      QV = Vt(36771),
      lV = Vt(36769);
    let EV = null;
    window.setShowInventoryAdsOverride = tt => {
      EV = tt
    };
    const fV = 24e4;
    var wV = Vt(2022);

    function yV(tt) {
      var et;
      let {
        draggedInfo: {
          name: Vt,
          attributes: Ot,
          amount: qt
        },
        toAddRef: Dt
      } = tt;
      return (0, Xt.jsx)("div", {
        className: "DraggedInvenItem",
        ref: Dt,
        children: (0, Xt.jsx)(mV.e, {
          itemName: Vt,
          amount: qt,
          enchantmentTier: null === Ot || void 0 === Ot || null === (et = Ot.customAttributes) || void 0 === et ? void 0 : et.enchantmentTier,
          bar: (0, wV.f)(Ot)
        })
      })
    }

    function NV(tt) {
      let {
        className: et = "",
        displayInfo: Vt,
        domRef: Ot
      } = tt;
      return (0, Xt.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${et}`,
        ref: Ot,
        children: [(0, Xt.jsx)(Kt.e, {
          text: (0, vt.Bb)(Vt.name, {
            fontStyle: Vt.fontStyle
          })
        }), (0, Xt.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, Xt.jsx)(Kt.e, {
            text: Vt.desc
          })
        })]
      })
    }

    function aV(tt) {
      let {
        info: et,
        draggedInfo: Vt
      } = tt;
      const Ot = (0, qt.useRef)(null);
      return (0, qt.useLayoutEffect)((() => {
        const tt = Ot.current,
          {
            left: Vt,
            top: qt
          } = function(tt, et, Vt, Ot) {
            const qt = Ot.left * Vt.width / 100 + 4,
              Dt = Vt.width - Ot.right * Vt.width / 100 - 4 - et.width,
              mt = Ot.top * Vt.height / 100 + 4,
              dt = Vt.height - 4 - et.height;
            return {
              left: Math.max(qt, Math.min(tt.x - et.width / 2, Dt)),
              top: Math.max(mt, Math.min(tt.y - 48 - et.height, dt))
            }
          }({
            x: et.initTouchX,
            y: et.initTouchY
          }, {
            width: tt.offsetWidth,
            height: tt.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, ot.b.get("notchSize"));
        tt.style.left = `${Vt}px`, tt.style.top = `${qt}px`
      }), [et]), (0, Xt.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: Ot,
        children: [(0, Xt.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: Vt.amount / et.maxAmount * 100 + "%"
          }
        }), (0, Xt.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [Vt.amount, "/", et.maxAmount]
        })]
      })
    }
    var MV = Vt(1140),
      bV = Vt.n(MV),
      JV = Vt(229);
    const CV = (0, qt.memo)((function(tt) {
      let {
        show: et,
        onOpen: Vt,
        onClose: Ot
      } = tt;
      const Dt = (0, qt.useRef)({
          pos: null
        }),
        [dt, jt] = (0, qt.useState)([0, 0, 0, 0]),
        {
          userContext: Qt
        } = (0, ut.d)();
      (0, Wt.e)("ironChestOpenRequested", (tt => {
        let {
          pos: et,
          ownerDbId: Ot,
          cachedPasskey: qt
        } = tt;
        if (Dt.current.pos = et, Ot !== Qt.whamm) return null !== qt ? (jt(qt), void lt(qt)) : void Vt();
        lt(dt)
      })), (0, Wt.e)("localEffectUpdated", (tt => {
        "Thief" === tt && Ot()
      }));
      const lt = tt => {
        const {
          pos: et
        } = Dt.current;
        Ht.gameBridge.send("openIronChest", {
          pos: et,
          Rd: tt
        })
      };
      return (0, Xt.jsx)(mt.c, {
        className: "IronChestPasskeyInputScreenOuter",
        close: Ot,
        escDoesExit: !0,
        show: et,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, Xt.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, Xt.jsx)(uV, {
            Rd: dt,
            onPasskeyUpdated: jt,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              lt(dt)
            }
          })
        })
      })
    }));

    function uV(tt) {
      let {
        className: et = "",
        Rd: Vt,
        onPasskeyUpdated: Ot,
        confirmText: qt,
        onConfirm: Dt
      } = tt;
      const {
        t: mt
      } = (0, Tt.H)();
      return (0, Xt.jsxs)("div", {
        className: `${et} IronChestPasskeyInput`,
        children: [(0, Xt.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: mt("ironChest:passkeyInputTitle")
        }), (0, Xt.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(JV.e.ironChestPasskeyLength).fill(0).map(((tt, et) => (0, Xt.jsx)(KV, {
            digit: Vt[et],
            onPasskeyDigitUpdated: tt => {
              const qt = [...Vt];
              qt[et] = tt, Ot(qt)
            }
          }, et)))
        }), (0, Xt.jsx)(Et.m, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: Dt,
          children: mt(qt)
        })]
      })
    }

    function KV(tt) {
      let {
        digit: et,
        onPasskeyDigitUpdated: Vt
      } = tt;
      return (0, Xt.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, Xt.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, Xt.jsx)(Et.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              Vt(vt.e.mod(et + 1, 10))
            },
            children: (0, Xt.jsx)(yt.b, {
              name: "angle-up"
            })
          }), (0, Xt.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: et
          }), (0, Xt.jsx)(Et.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              Vt(vt.e.mod(et - 1, 10))
            },
            children: (0, Xt.jsx)(yt.b, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var hV = Vt(34388),
      vV = Vt(37036),
      WV = Vt(36767);

    function SV(tt) {
      let {
        specialItemInfo: et,
        setHovered: Vt,
        pointerDown: Ot,
        pointerUp: Dt,
        enchantingTablePosition: mt,
        enchantingTableBlockName: dt
      } = tt;
      const {
        t: Qt
      } = (0, Tt.H)(), [lt, ft] = (0, qt.useState)(null), [wt, yt] = (0, qt.useState)(null), Nt = (0, jt.i)("auraPerLevel"), Mt = Math.floor((0, Wt.h)("aura") / Nt);
      (0, qt.useEffect)((() => {
        if (!et) return void ft(null);
        let tt = !0;
        return Ht.gameBridge.query("enchantingOffer", {
          slot: et.idx,
          name: et.name,
          blockName: dt
        }).then((Vt => {
          var Ot, qt;
          let {
            perks: Dt,
            options: mt
          } = Vt;
          if (!tt) return;
          const dt = {
            isEnchantable: Dt.length > 0,
            possibleEnchantments: Dt,
            options: mt.map((tt => {
              let {
                level: et,
                odds: Vt
              } = tt;
              return {
                level: et,
                possibilities: Object.fromEntries(Vt.map(((tt, et) => [`Tier ${et+1}`, tt])))
              }
            })),
            isAlreadyEnchanted: Dt.length > 0 && void 0 !== (null === (Ot = et.attributes) || void 0 === Ot || null === (qt = Ot.customAttributes) || void 0 === qt ? void 0 : qt.enchantmentTier)
          };
          ft(dt), (tt => {
            const et = tt.options.map((tt => Object.entries(tt.possibilities).map((tt => {
              let [et, Vt] = tt;
              return {
                str: `${et}: ${Vt>0?Vt<.01?Vt.toPrecision(1):Vt.toFixed(2):0}%\n`,
                style: {
                  color: vt.xb[et]
                }
              }
            }))));
            yt(et)
          })(dt)
        })), () => {
          tt = !1
        }
      }), [et, mt, dt]);
      const bt = [];
      for (let qt = 0; qt < vV.e; qt++) {
        const tt = null === lt || void 0 === lt ? void 0 : lt.options[qt],
          Ot = !tt || tt.level > Mt;
        bt.push((0, Xt.jsx)(Et.f, {
          className: "EnchantmentButton",
          onPointerEnter: tt ? tt => null === Vt || void 0 === Vt ? void 0 : Vt()(!0, {
            name: "",
            desc: wt[qt]
          }, tt) : void 0,
          onPointerLeave: tt ? () => null === Vt || void 0 === Vt ? void 0 : Vt()(!1) : void 0,
          onClick: Ot ? void 0 : () => {
            Ht.gameBridge.send("enchantItem", {
              slot: et.idx,
              level: tt.level,
              tablePos: mt
            }), ft(null)
          },
          disabled: Ot,
          children: tt ? (0, Xt.jsxs)(Xt.Fragment, {
            children: [(0, Xt.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, Xt.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [Qt("enchantments:cost"), ": "]
              }), " ", Qt("enchantments:levels", {
                level: tt.level
              })]
            }), (0, Xt.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, Xt.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Xt.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Qt("enchantments:tier")
                }), Object.entries(tt.possibilities).map((tt => {
                  let [et, Vt] = tt;
                  return 0 === Vt ? null : (0, Xt.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: vt.xb[et]
                    },
                    children: et
                  }, et)
                }))]
              }), (0, Xt.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Xt.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Qt("enchantments:odds")
                }), Object.entries(tt.possibilities).map((tt => {
                  let [et, Vt] = tt;
                  return 0 === Vt ? null : (0, Xt.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: vt.xb[et]
                    },
                    children: [Vt > 0 && Vt < .1 ? "<0.1" : Vt.toFixed(0 < Vt && Vt < .95 ? 1 : 0), "%"]
                  }, et)
                }))]
              })]
            })]
          }) : !1 === (null === lt || void 0 === lt ? void 0 : lt.isEnchantable) ? (0, Xt.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Qt("enchantments:notEnchantable")
          }) : (0, Xt.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Qt("enchantments:enterItem")
          })
        }, qt))
      }
      return (0, Xt.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, Xt.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: dt
        }), (0, Xt.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, Xt.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, Xt.jsx)(WV.d, {
              idx: lV.e,
              setHovered: tt => {
                null === Vt || void 0 === Vt || Vt(lV.e)(tt)
              },
              pointerDown: Ot,
              pointerUp: Dt,
              draggedInfo: null,
              specialItemInfo: et,
              variation: "Enchanting Table"
            }), lt && lt.possibleEnchantments.length > 0 && (0, Xt.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, Xt.jsx)("h2", {
                children: "Possible Perks:"
              }), lt.possibleEnchantments.map((tt => (0, Xt.jsxs)(qt.Fragment, {
                children: [(0, Xt.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, Xt.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, Xt.jsx)(mV.e, {
                      itemName: `${tt} Enchantment`,
                      amount: 1
                    })
                  }), (0, Xt.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: tt
                  })]
                }), (0, Xt.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: Qt((0, hV.n)(tt).translationKey)
                })]
              }, tt)))]
            })]
          }), (0, Xt.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [lt && lt.isAlreadyEnchanted && (0, Xt.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: Qt("enchantments:alreadyEnchanted")
            }), bt]
          })]
        })]
      })
    }
    var cV = Vt(37044);

    function RV(tt) {
      var et;
      let {
        specialItemInfo: Vt,
        setSpecialItemInfo: Ot,
        setHovered: Dt,
        pointerDown: mt,
        pointerUp: dt
      } = tt;
      const {
        t: jt
      } = (0, Tt.H)(), Qt = (0, Wt.g)("inventory", (tt => tt.freeSlots)), [lt, ft] = (0, qt.useState)(null);
      (0, qt.useEffect)((() => {
        if (Vt) {
          const tt = (0, cV.d)(Vt.name, Vt.amount);
          ft({
            salvageable: !!tt,
            produces: tt
          })
        } else ft(null)
      }), [Vt, null === Vt || void 0 === Vt ? void 0 : Vt.name, null === Vt || void 0 === Vt ? void 0 : Vt.amount]);
      const wt = !!Vt && !(null === lt || void 0 === lt || !lt.salvageable) && !(null !== (et = lt.produces) && void 0 !== et && et.some((tt => {
        let {
          amt: et
        } = tt;
        return et < 1
      })));
      return (0, Xt.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, Xt.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: jt("item:salvagingTable")
        }), (0, Xt.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, Xt.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, Xt.jsx)(WV.d, {
              idx: lV.e,
              setHovered: tt => {
                null === Dt || void 0 === Dt || Dt(lV.e)(tt)
              },
              pointerDown: mt,
              pointerUp: dt,
              draggedInfo: null,
              specialItemInfo: Vt,
              variation: "Salvaging Table"
            })
          }), (0, Xt.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, Xt.jsx)(Et.f, {
              className: "SalvageButton",
              onClick: wt ? () => {
                const {
                  idx: tt,
                  name: et,
                  amount: qt
                } = Vt;
                Ht.gameBridge.send("salvageItem", {
                  slot: tt,
                  name: et,
                  amount: qt
                }) && (ft(null), Ot(null))
              } : void 0,
              disabled: !wt,
              children: lt ? lt.salvageable ? lt.produces.some((tt => {
                let {
                  amt: et
                } = tt;
                return et < 1
              })) ? (0, Xt.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Xt.jsx)("div", {
                  className: "SalvageText Error",
                  children: jt("salvagingTable:notEnoughResources")
                })
              }) : Qt < lt.produces.length ? (0, Xt.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Xt.jsx)("div", {
                  className: "SalvageText Error",
                  children: jt("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, Xt.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, Xt.jsx)("div", {
                  className: "SalvageText",
                  children: jt("salvagingTable:salvage")
                }), (0, Xt.jsx)("div", {
                  className: "SalvageIcons",
                  children: lt.produces.map(((tt, et) => {
                    let {
                      item: Vt,
                      amt: Ot
                    } = tt;
                    return (0, Xt.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, Xt.jsx)(mV.e, {
                        itemName: Vt,
                        amount: Math.floor(Ot)
                      })
                    }, et)
                  }))
                })]
              }) : (0, Xt.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Xt.jsx)("div", {
                  className: "SalvageText Error",
                  children: jt("salvagingTable:unsalvageable")
                })
              }) : (0, Xt.jsx)(Xt.Fragment, {})
            })
          })]
        })]
      })
    }
    var IV = Vt(241),
      PV = Vt(9425),
      ZV = Vt(2784),
      LV = Vt(1770),
      FV = Vt(8912),
      kV = Vt(8908),
      GV = Vt(1764),
      zV = Vt(2084),
      oV = Vt(1513),
      rV = Vt(2149);

    function UV(tt, et, Vt) {
      const Ot = tt.trim().toLowerCase();
      if ("" === Ot) return 0;
      let qt = null;
      for (const Dt of et) {
        const tt = Dt.toLowerCase().indexOf(Ot);
        if (0 === tt) return 0;
        tt > 0 && (qt = 1)
      }
      if (null !== qt) return qt;
      for (const Dt of Vt)
        if (Dt.toLowerCase().includes(Ot)) return 2;
      return null
    }

    function AV(tt) {
      return tt.map((tt => {
        var et;
        return tt ? {
          name: tt.name,
          amount: null !== (et = tt.amount) && void 0 !== et ? et : 1
        } : null
      }))
    }

    function iV(tt) {
      return tt < 1e3 ? `${tt}` : tt < 1e4 ? Math.floor(tt / 100) / 10 + "k" : `${Math.floor(tt/1e3)}k`
    }
    var YV = Vt(37053);
    const BV = Et.f,
      pV = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      xV = () => {
        const tt = (0, oV.g)();
        return tt ? tt.getPadRepeatTiming(pV) : pV
      };

    function TV(tt, et, Vt) {
      var Ot, qt;
      const Dt = (0, XV.s)(et, tt);
      let mt = null === (Ot = et[tt]) || void 0 === Ot ? void 0 : Ot.description;
      if (Vt && (null === (qt = (0, YV.f)().get(tt)) || void 0 === qt || !qt.hideIngredients)) {
        mt ? (mt = (0, vt.Bb)(mt), mt.push({
          str: "\n"
        })) : mt = [], mt.push({
          str: "\n"
        }), mt.push({
          str: "Can be crafted from:\n"
        });
        for (const tt of Vt) "string" === typeof tt && (mt.push({
          icon: tt,
          style: {
            fontSize: "1.5em"
          }
        }), mt.push({
          str: " "
        }), mt.push(...(0, vt.Bb)((0, XV.s)(et, tt))), mt.push({
          str: "\n"
        }))
      }
      return {
        name: Dt,
        desc: mt
      }
    }

    function gV(tt) {
      let {
        name: et,
        SX: Vt
      } = tt;
      return `${et}_${Vt}`
    }

    function sV(tt) {
      var et;
      let {
        onClick: Vt,
        itemName: Ot,
        recipeId: Dt,
        isSelected: mt,
        haveIngredients: dt,
        craftable: jt,
        setHovered: Ht,
        padActions: Qt,
        marked: lt,
        lock: Et,
        itemInfo: ft
      } = tt;
      const wt = (0, qt.useRef)(null);
      return (0, FV.h)(wt, {
        press: tt => !dt || "secondary" === tt && !jt ? (Qt.refuse(), !1) : "primary" === tt ? (Qt.choose(), !0) : Qt.craft(),
        release: Qt.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, Xt.jsxs)("div", {
        ref: wt,
        className: bV()("InvenItem", {
          CraftableItemNotEnoughIngredients: !dt && !Et,
          CraftableItemMarked: lt,
          CraftableItemLocked: void 0 !== Et,
          CraftableItemLockedFar: (null !== (et = null === Et || void 0 === Et ? void 0 : Et.stepsAway) && void 0 !== et ? et : 1) > 1
        }),
        "data-recipe-key": Dt,
        "data-pad-inventory-default": mt ? "" : void 0,
        onClick: Vt,
        style: {
          cursor: mt ? null : "pointer"
        },
        onPointerEnter: tt => {
          null === Ht || void 0 === Ht || Ht(!0, TV(Ot, ft)), !mt && (0, GV.m)(tt.nativeEvent) && (0, kV.k)() && Vt()
        },
        onPointerLeave: () => {
          null === Ht || void 0 === Ht || Ht(!1)
        },
        children: [(0, Xt.jsx)(mV.e, {
          itemName: Ot,
          amount: 1
        }), lt && (0, Xt.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), Et && (0, Xt.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, Xt.jsx)(yt.b, {
            name: "lock"
          }), (0, Xt.jsx)(Kt.e, {
            text: Et.tag
          })]
        })]
      })
    }

    function nV(tt) {
      let {
        idx: et,
        status: Vt,
        shownItem: Ot,
        dim: Dt,
        onHoverStart: mt,
        onHoverEnd: dt,
        onPadBack: jt
      } = tt;
      const Ht = (0, qt.useRef)(null);
      (0, FV.h)(Ht, {
        press: () => !1,
        back: jt,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const Qt = Vt.need > 0 ? Math.min(Vt.have / Vt.need, 1) : 1;
      return (0, Xt.jsxs)("div", {
        ref: Ht,
        className: bV()("CupTile", {
          Short: Vt.missing > 0
        }),
        style: {
          width: Dt,
          height: Dt
        },
        "data-craft-ingredient": et,
        onPointerEnter: mt,
        onPointerLeave: dt,
        children: [(0, Xt.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${Qt})`
          }
        }), (0, Xt.jsx)(mV.e, {
          itemName: Ot,
          amount: 0
        }), (0, Xt.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [iV(Vt.have), "/", iV(Vt.need)]
        })]
      })
    }

    function tO(tt) {
      var et, Vt, Ot, Dt, mt;
      let {
        show: dt,
        recipeItem: {
          name: jt,
          SX: Qt,
          requires: lt,
          produces: Et,
          haveIngredients: ft
        },
        detail: wt,
        onCraft: yt,
        setHovered: Nt,
        craftButtonRef: Mt,
        onPadBack: bt,
        showPadShortcut: Jt,
        refusedCount: Ct,
        lock: ut,
        itemInfo: ht
      } = tt;
      const {
        t: vt
      } = (0, Tt.H)(), Wt = null !== wt && !wt.roomForOne, St = null !== (et = null === wt || void 0 === wt ? void 0 : wt.craftAllTimes) && void 0 !== et ? et : 0, ct = function(tt, et) {
        return tt.map((tt => {
          let {
            items: Vt,
            amt: Ot
          } = tt, qt = 0;
          const Dt = [];
          for (const mt of Vt) {
            const tt = et(mt);
            qt += tt, tt > 0 && Dt.push(mt)
          }
          return 0 === Dt.length && Dt.push(Vt[0]), {
            shownItems: Dt,
            need: Ot,
            have: qt,
            missing: Math.max(Ot - qt, 0)
          }
        }))
      }(lt, (tt => {
        var et;
        return null !== (et = null === wt || void 0 === wt ? void 0 : wt.amounts[tt]) && void 0 !== et ? et : 0
      }));
      let Rt = "4rem",
        It = 4;
      3 === lt.length || 4 === lt.length ? Rt = "3.75rem" : lt.length >= 5 && (Rt = "3rem"), 4 === lt.length ? It = 2 : lt.length <= 6 && (It = 3);
      const Pt = `calc(${It} * ${Rt} + ${It-1} * 0.4rem + 1px)`,
        Zt = (0, qt.useRef)(null),
        Lt = (0, qt.useRef)(null);
      (0, qt.useLayoutEffect)((() => {
        Zt.current.scrollTop = 0
      }), [jt, Qt]);
      const Ft = (0, qt.useRef)(Ct);
      (0, qt.useEffect)((() => {
        if (Ct === Ft.current) return;
        Ft.current = Ct;
        const tt = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const Ot of null !== (et = null === (Vt = Zt.current) || void 0 === Vt ? void 0 : Vt.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== et ? et : []) {
          var et, Vt;
          Ot.animate(tt, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [Ct]);
      const kt = (tt, et, Vt) => {
          var Ot;
          if ((0, YV.f)().has(jt)) return void(Vt && clearInterval(Gt.current));
          const qt = null !== (Ot = null === wt || void 0 === wt ? void 0 : wt.resultStackable) && void 0 !== Ot && Ot,
            Dt = AV(Ht.gameBridge.latest("inventory").player),
            {
              cX: mt,
              jj: dt,
              amountAddedToSlot: Xt
            } = Ht.gameBridge.send("craftRecipe", {
              name: jt,
              SX: Qt,
              times: et || tt && qt ? null : 1
            });
          if (mt > 0) {
            const et = [],
              Ot = new Set(lt.flatMap((tt => {
                let {
                  items: et
                } = tt;
                return et
              }))),
              mt = function(tt, et, Vt) {
                const Ot = [];
                for (let qt = 0; qt < tt.length; qt++) {
                  const Dt = tt[qt];
                  if (!Dt || !Vt.has(Dt.name)) continue;
                  const mt = et[qt],
                    dt = (null === mt || void 0 === mt ? void 0 : mt.name) === Dt.name ? mt.amount : 0;
                  dt < Dt.amount && Ot.push({
                    idx: qt,
                    itemName: Dt.name,
                    amount: Dt.amount - dt
                  })
                }
                return Ot
              }(Dt, AV(Ht.gameBridge.latest("inventory").player), Ot).slice(0, 12),
              Qt = Vt ? 0 : Math.min(50, 400 / mt.length),
              ft = Vt ? 220 : 320;
            for (const tt of mt) {
              var Et;
              const Vt = lt.findIndex((et => {
                  let {
                    items: Vt
                  } = et;
                  return Vt.includes(tt.itemName)
                })),
                Ot = null === (Et = Zt.current) || void 0 === Et ? void 0 : Et.querySelector(`[data-craft-ingredient="${Vt}"]`),
                qt = (0, XV.g)(tt.idx);
              Ot && qt && et.push({
                kind: "ingredient",
                itemName: tt.itemName,
                amount: tt.amount,
                jj: tt.idx,
                from: qt,
                to: (0, XV.g)(Ot),
                delayMs: Math.round(et.length * Qt),
                durationMs: ft
              })
            }
            let wt;
            if (null !== dt && Xt > 0 && Lt.current) {
              const tt = et.length > 0 ? et[et.length - 1].delayMs + .6 * ft : 0;
              wt = {
                itemName: jt,
                amount: Xt,
                jj: dt,
                from: (0, XV.g)(Lt.current),
                delayMs: Math.round(tt)
              }
            }
            yt(wt, tt && !qt ? dt : null, et), jV.e.play("wood1", .5).rate(1.75)
          }
        },
        Gt = (0, qt.useRef)(null);
      (0, qt.useEffect)((() => () => {
        clearInterval(Gt.current)
      }), []);
      const zt = (tt, et) => {
          kt(tt, !1, !1), clearInterval(Gt.current), et && (Gt.current = setTimeout((() => {
            Gt.current = setInterval((() => {
              kt(tt, !1, !0)
            }), et.intervalMs)
          }), et.initialDelayMs))
        },
        ot = () => {
          clearInterval(Gt.current)
        },
        rt = !ft || Wt || Boolean(ut),
        Ut = (0, qt.useRef)(null),
        At = null !== (Vt = null === (Ot = (0, rV.b)()) || void 0 === Ot ? void 0 : Ot.hideButtonHints) && void 0 !== Vt && Vt,
        it = null !== (Dt = null === (mt = (0, oV.g)()) || void 0 === mt ? void 0 : mt.getBoundButton("inventorySecondary")) && void 0 !== Dt ? Dt : null,
        Yt = () => !rt && (kt(!1, !0, !1), !0);
      (0, FV.h)(Mt, {
        press: tt => "secondary" === tt ? Yt() : !rt && (zt(!1, xV()), !0),
        release: ot,
        back: bt,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, FV.h)(Ut, {
        press: Yt,
        back: bt,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [Bt, pt] = (0, qt.useState)(0), [xt, gt] = (0, qt.useState)(null);
      (0, qt.useEffect)((() => {
        if (!0 === dt) {
          pt(0);
          const tt = setInterval((() => {
            pt((tt => tt + 1))
          }), 1e3);
          return () => {
            clearInterval(tt)
          }
        }
        return () => {}
      }), [dt]);
      const st = null === wt || void 0 === wt ? void 0 : wt.ingredientsCraftedFrom,
        nt = (0, qt.useRef)(Nt);
      (0, qt.useEffect)((() => {
        nt.current = Nt
      }), [Nt]);
      const te = !(null === ut || void 0 === ut || !ut.hideIngredients);
      (0, qt.useEffect)((() => {
        var tt, et;
        if (!xt) return;
        if (te) return gt(null), void(null === (et = nt.current) || void 0 === et || et.call(nt, !1));
        const Vt = xt[Bt % xt.length];
        null === (tt = nt.current) || void 0 === tt || tt.call(nt, !0, TV(Vt, ht, null === st || void 0 === st ? void 0 : st[Vt]))
      }), [xt, Bt, ht, st, te]);
      const ee = !!ut,
        Ve = (0, qt.useRef)(!1);
      (0, qt.useEffect)((() => {
        var tt;
        ee && (clearInterval(Gt.current), te && Ve.current && (Ve.current = !1, null === (tt = nt.current) || void 0 === tt || tt.call(nt, !1)))
      }), [ee, te]);
      const Oe = (0, XV.s)(ht, jt);
      return (0, Xt.jsxs)("div", {
        ref: Zt,
        className: "CraftableInfo SmallTextBold",
        children: [(0, Xt.jsx)("div", {
          className: "CraftableHeader",
          children: (0, Xt.jsx)(Kt.e, {
            text: Oe
          })
        }), !te && (0, Xt.jsx)("div", {
          className: bV()("CraftableIngredients", {
            Compact: lt.length >= 5
          }),
          style: {
            maxWidth: Pt
          },
          children: ct.map(((tt, et) => {
            const Vt = tt.shownItems[Bt % tt.shownItems.length];
            return (0, Xt.jsx)(nV, {
              idx: et,
              status: tt,
              shownItem: Vt,
              dim: Rt,
              onHoverStart: () => {
                gt(tt.shownItems)
              },
              onHoverEnd: () => {
                gt(null), null === Nt || void 0 === Nt || Nt(!1)
              },
              onPadBack: bt
            }, et)
          }))
        }), ut && (0, Xt.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, Xt.jsx)(Kt.e, {
            text: ut.reason
          })
        }), !ut && (!ft || Wt) && (0, Xt.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!ft && "Missing ingredients", (0, Xt.jsx)("br", {}), Wt && "Inventory is full"]
        }), !te && (0, Xt.jsxs)(Xt.Fragment, {
          children: [(0, Xt.jsxs)(BV, {
            ref: Mt,
            className: "DoCraftButton",
            onPointerDown: tt => {
              zt((0, XV.u)(tt), (0, GV.m)(tt.nativeEvent) ? xV() : pV)
            },
            onPointerUp: ot,
            onPointerLeave: ot,
            disabled: rt,
            children: [Jt && it && !rt && !At && (0, Xt.jsx)(zV.d, {
              className: "CraftShortcutGlyph",
              glyph: it
            }), (0, Xt.jsx)("div", {
              ref: Lt,
              className: "DoCraftItem",
              onPointerEnter: () => {
                Ve.current = !0, null === Nt || void 0 === Nt || Nt(!0, TV(jt, ht))
              },
              onPointerLeave: () => {
                Ve.current = !1, null === Nt || void 0 === Nt || Nt(!1)
              },
              children: (0, Xt.jsx)(mV.e, {
                itemName: jt,
                amount: Et
              })
            })]
          }), (0, Xt.jsxs)(BV, {
            ref: Ut,
            className: "DoCraftAllButton",
            onPointerDown: tt => {
              kt((0, XV.u)(tt), !0, !1)
            },
            disabled: rt,
            children: [(0, Xt.jsx)("span", {
              className: "CraftAllLabel",
              children: vt("general:craftAll")
            }), St > 0 && (0, Xt.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", iV(St)]
            })]
          })]
        })]
      })
    }

    function eO(tt) {
      let {
        selectedIdx: et,
        hidden: Vt
      } = tt;
      const Ot = (0, DV.v)(),
        Dt = (0, qt.useRef)(null);
      return (0, qt.useLayoutEffect)((() => {
        const tt = Dt.current,
          Ot = null === tt || void 0 === tt ? void 0 : tt.parentElement;
        if (!Ot || !tt) return;
        const qt = Ot.querySelector(".CraftableItems"),
          mt = () => {
            var Dt, mt;
            if (Vt) return void(tt.style.opacity = "0");
            const dt = null === qt || void 0 === qt ? void 0 : qt.children[et],
              jt = null === (Dt = null !== (mt = null === dt || void 0 === dt ? void 0 : dt.querySelector(".InvenItem")) && void 0 !== mt ? mt : dt) || void 0 === Dt ? void 0 : Dt.getBoundingClientRect();
            if (!jt || 0 === jt.width) return void(tt.style.opacity = "0");
            const Ht = Ot.getBoundingClientRect();
            tt.style.opacity = "1", tt.style.width = `${jt.width}px`, tt.style.height = `${jt.height}px`, tt.style.transform = `translate(${jt.left-Ht.left+Ot.scrollLeft}px, ${jt.top-Ht.top+Ot.scrollTop}px)`
          };
        mt();
        const dt = new MutationObserver(mt),
          jt = new ResizeObserver(mt);
        return jt.observe(Ot), qt && (dt.observe(qt, {
          childList: !0,
          subtree: !0
        }), jt.observe(qt)), () => {
          dt.disconnect(), jt.disconnect()
        }
      }), [et, Vt]), (0, Xt.jsx)("div", {
        ref: Dt,
        className: bV()("SelectionReticle", {
          Secondary: Ot
        })
      })
    }

    function VO(tt, et, Vt) {
      return tt ? (0, IV.c)(PV.h, tt) ? OO(tt, et, Vt) : tt : Vt("classicGame:handCrafting")
    }

    function OO(tt, et, Vt) {
      var Ot;
      const qt = null === (Ot = et[tt]) || void 0 === Ot ? void 0 : Ot.displayName;
      if ("string" === typeof qt) return Vt(qt);
      const Dt = Ht.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(qt) ? qt.map((tt => {
        if ("string" === typeof tt) return tt;
        if ("translationKey" in tt) return Vt(tt.translationKey, (0, Tt.p)(tt.params, Dt));
        if ("str" in tt) {
          if ("string" === typeof tt.str) return tt.str;
          if ("translationKey" in tt.str) return Vt(tt.str.translationKey, (0, Tt.p)(tt.str.params, Dt))
        }
        return ""
      })).join("") : qt && "translationKey" in qt ? Vt(qt.translationKey, (0, Tt.p)(qt.params, Dt)) : tt
    }

    function qO(tt, et) {
      return tt === et || null !== tt && null !== et && tt.name === et.name && tt.SX === et.SX
    }

    function DO(tt) {
      var et, Vt, Ot;
      let {
        show: Dt,
        onCraft: mt,
        dispatchSelectedCraftable: dt,
        selectedCraftable: jt,
        craftingStation: Qt,
        setHovered: lt
      } = tt;
      const {
        t: Et
      } = (0, Tt.H)(), [ft, wt] = (0, qt.useState)(""), [yt, Nt] = (0, qt.useState)(0);
      (0, qt.useEffect)((() => {
        Dt || (wt(""), Nt((tt => tt + 1)))
      }), [Dt]);
      const [Mt, bt] = (0, qt.useState)(Qt);
      Mt !== Qt && (bt(Qt), "" !== ft && (wt(""), Nt((tt => tt + 1))));
      const Jt = (0, qt.useRef)(null),
        Ct = (0, qt.useRef)(null),
        ut = (0, kV.l)(),
        Kt = ut.showing && "recipe" === ut.kind,
        [ht, vt] = (0, qt.useState)(0),
        St = null !== Qt && void 0 !== Qt ? Qt : null,
        ct = (0, qt.useRef)(null),
        Rt = tt => {
          return !((et = ct.current) === (Vt = tt) || null !== et && null !== Vt && et.station === Vt.station && qO(et.recipe, Vt.recipe)) && (ct.current = tt, Ht.gameBridge.send("focusCrafting", tt), !0);
          var et, Vt
        };
      Rt(Dt ? {
        station: St,
        recipe: (null === (et = ct.current) || void 0 === et ? void 0 : et.station) === St ? ct.current.recipe : null
      } : null);
      let It = Ht.gameBridge.latest("crafting");
      const Pt = (0, Wt.h)("itemInfo"),
        Zt = "" !== ft.trim(),
        Lt = (0, YV.C)(),
        Ft = (0, YV.z)(),
        kt = (0, YV.F)(),
        Gt = function(tt, et) {
          const [Vt, Ot] = (0, qt.useState)(!1);
          (0, qt.useEffect)((() => {
            if (!tt) return void Ot(!1);
            const et = setTimeout((() => {
              Ot(!0)
            }), 0);
            return () => {
              clearTimeout(et)
            }
          }), [tt]);
          const Dt = tt && Vt,
            mt = (0, qt.useRef)({
              station: et,
              at: new Map
            });
          return (mt.current.station !== et || !Dt && mt.current.at.size > 0) && (mt.current = {
            station: et,
            at: new Map
          }), Dt ? mt.current.at : null
        }(Dt, Qt);
      let zt = It.recipes.filter((tt => {
        let {
          listed: et
        } = tt;
        return et
      }));
      if (Zt) {
        const tt = [];
        for (const et of It.recipes) {
          var ot;
          const Vt = null !== (ot = Ft.get(et.name)) && void 0 !== ot && ot.hideIngredients ? [] : et.requires.flatMap((tt => {
              let {
                items: et
              } = tt;
              return et.flatMap((tt => [tt, OO(tt, Pt, Et)]))
            })),
            Ot = UV(ft, [et.name, OO(et.name, Pt, Et)], Vt);
          null !== Ot && tt.push({
            item: et,
            rank: Ot
          })
        }
        tt.sort(((tt, et) => tt.rank - et.rank)), zt = tt.map((tt => {
          let {
            item: et
          } = tt;
          return et
        }))
      } else {
        if (Gt && Gt.size > 0) {
          const tt = It.recipes.filter((tt => !tt.listed && Gt.has(gV(tt))));
          zt = zt.concat(tt)
        }
        zt = (0, YV.j)(zt, Lt, Ft, kt), Gt && (zt = (0, YV.i)(zt, Gt, gV))
      }
      const rt = tt => zt.find((et => gV(et) === tt)),
        Ut = `${Qt}|${ft}`,
        [At, it] = (0, qt.useState)(null),
        Yt = (null === At || void 0 === At ? void 0 : At.context) === Ut ? At.key : null,
        Bt = jt ? gV(jt) : null,
        pt = null !== (Vt = null !== (Ot = rt(Bt)) && void 0 !== Ot ? Ot : rt(Yt)) && void 0 !== Vt ? Vt : zt[0],
        xt = pt ? gV(pt) : null,
        gt = pt ? {
          name: pt.name,
          SX: pt.SX
        } : null;
      Dt && Rt({
        station: St,
        recipe: gt
      }) && (It = Ht.gameBridge.latest("crafting")), xt !== Bt && xt !== Yt && it(xt ? {
        context: Ut,
        key: xt
      } : null), (0, qt.useEffect)((() => () => {
        ct.current = null, Ht.gameBridge.send("focusCrafting", null)
      }), []);
      const st = qO(It.detail, gt) ? It.detail : null,
        nt = null !== st && !st.roomForOne,
        te = zt.findIndex((tt => gV(tt) === gV(pt))),
        ee = () => Ct.current ? (0, FV.d)(Ct.current) : null,
        Ve = (0, qt.useRef)(null),
        Oe = (0, qt.useRef)(0);
      Oe.current++;
      const qe = Oe.current;
      (0, qt.useEffect)((() => {
        const tt = Ve.current;
        if (!tt || qe <= tt.afterRender) return;
        if (Ve.current = null, tt.key !== xt) return;
        const et = ee();
        var Vt;
        null !== et && void 0 !== et && et.press("primary") && !tt.Pd && (null === (Vt = et.release) || void 0 === Vt || Vt.call(et))
      }));
      const De = tt => {
          const et = {
            name: tt.name,
            SX: tt.SX
          };
          return {
            choose: () => {
              dt(et), (0, qV.r)(Ct.current)
            },
            craft: () => {
              var tt, Vt;
              return dt(et), gV(et) !== gV(pt) ? (Ve.current = {
                key: gV(et),
                Pd: !0,
                afterRender: Oe.current
              }, !0) : null !== (tt = null === (Vt = ee()) || void 0 === Vt ? void 0 : Vt.press("primary")) && void 0 !== tt && tt
            },
            stopCraft: () => {
              var tt, et;
              Ve.current ? Ve.current.Pd = !1 : null === (tt = ee()) || void 0 === tt || null === (et = tt.release) || void 0 === et || et.call(tt)
            },
            refuse: () => {
              gV(et) !== gV(pt) && dt(et), vt((tt => tt + 1))
            }
          }
        },
        me = () => {
          var tt, et, Vt;
          (0, qV.r)(null !== (tt = null === (et = Jt.current) || void 0 === et || null === (Vt = et.querySelector(".CraftableItems")) || void 0 === Vt ? void 0 : Vt.children[te]) && void 0 !== tt ? tt : null)
        },
        de = zt.map(gV).join("|"),
        je = (0, qt.useRef)(de);
      return (0, qt.useEffect)((() => {
        je.current !== de && (je.current = de, Kt && te >= 0 && (0, kV.k)() && me())
      })), (0, Xt.jsxs)("div", {
        className: "Craftables",
        children: [(0, Xt.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: VO(Qt, Pt, Et)
        }), (0, Xt.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, Xt.jsx)(LV.d, {
            className: "CraftingSearch",
            placeholderText: Et("general:searchRecipes"),
            defaultValue: ft,
            maxLength: 100,
            onValueChange: tt => {
              wt(tt)
            },
            blurOnEnter: !0
          }, yt), 0 === zt.length && Zt && (0, Xt.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: Et("general:noRecipesMatchSearch")
          }), zt.length > 0 && (0, Xt.jsxs)(Xt.Fragment, {
            children: [(0, Xt.jsxs)("div", {
              ref: Jt,
              className: "CraftablesLeftSide",
              children: [(0, Xt.jsx)(ZV.d, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(zt.map((tt => {
                  let {
                    name: et,
                    SX: Vt,
                    haveIngredients: Ot
                  } = tt;
                  return {
                    name: et,
                    SX: Vt,
                    haveIngredients: Ot
                  }
                })))],
                observing: Dt,
                children: zt.map((tt => {
                  const {
                    name: et,
                    SX: Vt,
                    haveIngredients: Ot
                  } = tt, qt = gV(tt);
                  return (0, Xt.jsx)(sV, {
                    recipeId: qt,
                    itemName: et,
                    onClick: () => {
                      dt({
                        name: et,
                        SX: Vt
                      })
                    },
                    isSelected: gV(pt) === qt,
                    haveIngredients: Ot,
                    craftable: Ot && !Ft.has(et) && !(gV(pt) === qt && nt),
                    setHovered: lt,
                    padActions: De(tt),
                    marked: Lt.has(et),
                    lock: Ft.get(et),
                    itemInfo: Pt
                  }, qt)
                }))
              }), (0, Xt.jsx)(eO, {
                selectedIdx: te,
                hidden: Kt && ut.steppingSlots
              })]
            }), (0, Xt.jsx)(tO, {
              show: Dt,
              recipeItem: pt,
              detail: st,
              onCraft: mt,
              setHovered: lt,
              craftButtonRef: Ct,
              onPadBack: me,
              showPadShortcut: Kt,
              refusedCount: ht,
              lock: Ft.get(pt.name),
              itemInfo: Pt
            })]
          })]
        })]
      })
    }
    var mO = Vt(34399),
      dO = Vt(3346),
      jO = Vt(2172),
      HO = Vt(8880);
    class XO {
      constructor(tt, et, Vt) {
        this.commit = tt, this.delayMs = et, this.defers = Vt, this.pending = null, this.timer = void 0, this.Pd = !1, this.flush = () => {
          clearTimeout(this.timer);
          const tt = this.pending;
          null !== tt && (this.pending = null, this.commit(tt))
        }
      }
      type(tt) {
        this.pending = tt, clearTimeout(this.timer), this.Pd || this.defers() ? this.Pd || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(tt) {
        var et;
        return null !== (et = this.pending) && void 0 !== et ? et : tt
      }
      isHeld() {
        return this.Pd
      }
      setHeld(tt) {
        this.Pd = tt, tt || this.flush()
      }
    }

    function QO(tt) {
      return null === tt ? "creativeInventory:all" : `creativeInventory:${tt}`
    }

    function lO(tt) {
      let {
        category: et
      } = tt;
      return null === et ? (0, Xt.jsx)(yt.b, {
        name: "layer-group"
      }) : (0, Xt.jsx)(mV.e, {
        itemName: mO.creativeItemCategoryIcons[et],
        amount: 0
      })
    }

    function EO(tt) {
      let {
        labelKey: et,
        isSelected: Vt,
        onSelect: Ot,
        setHovered: qt,
        children: Dt
      } = tt;
      return (0, Xt.jsx)("div", {
        className: bV()("CreativeCategoryTab", {
          Selected: Vt
        }),
        onClick: Ot,
        onPointerEnter: tt => {
          (0, XV.q)(tt) || qt(!0, {
            name: {
              translationKey: et
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          qt(!1)
        },
        children: Dt
      })
    }

    function fO(tt) {
      let {
        categories: et,
        selectedCategory: Vt,
        onSelect: Ot
      } = tt;
      const {
        t: Dt
      } = (0, Tt.H)(), [mt, dt] = (0, qt.useState)(!1), jt = (0, qt.useRef)(null), Ht = (0, qt.useCallback)((() => {
        dt(!1)
      }), []);
      return (0, jO.e)(jt, Ht), (0, Xt.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: jt,
        children: [(0, Xt.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            dt(!mt)
          },
          children: [(0, Xt.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, Xt.jsx)(lO, {
              category: Vt
            })
          }), (0, Xt.jsx)("span", {
            children: Dt(QO(Vt))
          }), (0, Xt.jsx)(yt.b, {
            name: mt ? "caret-up" : "caret-down"
          })]
        }), mt && (0, Xt.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: et.map((tt => (0, Xt.jsxs)("div", {
            className: bV()("CreativeCategoryDropdownOption", {
              Selected: Vt === tt
            }),
            onClick: () => {
              Ot(tt), dt(!1)
            },
            children: [(0, Xt.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, Xt.jsx)(lO, {
                category: tt
              })
            }), (0, Xt.jsx)("span", {
              children: Dt(QO(tt))
            })]
          }, null !== tt && void 0 !== tt ? tt : "all")))
        })]
      })
    }
    const wO = (0, qt.memo)((function(tt) {
      let {
        creativeScrollDiv: et,
        playerInvenNumSlots: Vt,
        getSetHoveringForIdx: Ot,
        getPointerDownForIdx: Dt,
        getPointerUpForIdx: mt,
        creativeSearchVal: dt,
        setCreativeSearchVal: Ht,
        creativeCategory: Qt,
        setCreativeCategory: lt,
        show: Et
      } = tt;
      const {
        t: ft
      } = (0, Tt.H)(), wt = (0, Wt.h)("creativeVisibility"), {
        userContext: Nt
      } = (0, ut.d)(), Mt = (0, jt.i)("canUseDevCreativeItems"), bt = Nt.playerHasRank("developer") || !!Mt, Jt = (0, qt.useMemo)((() => NO("", wt, bt)), [wt, bt]), Ct = (0, qt.useMemo)((() => {
        const tt = (0, mO.creativeItemIds)(),
          et = new Set(Jt.map((et => (0, mO.creativeCategoryOf)(tt[et]))));
        return mO.creativeItemCategories.filter((tt => et.has(tt)))
      }), [Jt]), Kt = null !== Qt && Ct.includes(Qt) ? Qt : null, vt = (0, qt.useMemo)((() => "" === dt ? Jt : NO(dt, wt, bt)), [Jt, dt, wt, bt]), St = (0, qt.useMemo)((() => {
        const tt = (0, mO.creativeItemIds)();
        return null !== Kt ? vt.filter((et => (0, mO.creativeCategoryOf)(tt[et]) === Kt)) : "" === dt ? vt.filter((et => !(0, mO.showOnlyInCreativeCategory)(tt[et]))) : vt
      }), [vt, Kt, dt]), ct = Ot();

      function Rt(tt) {
        lt(tt), et.current.scrollTop = 0
      }
      const It = [null, ...Ct],
        {
          isTouchScreen: Pt
        } = (0, ot.k)(["isTouchScreen"]),
        Zt = !Pt,
        Lt = (0, qt.useRef)(null),
        [Ft, kt] = (0, qt.useState)(0);
      (0, qt.useEffect)((() => {
        const tt = Lt.current;
        if (!tt) return;
        const et = new ResizeObserver((tt => {
          kt(tt[0].contentRect.height)
        }));
        return et.observe(tt), () => {
          et.disconnect()
        }
      }), [Zt]);
      const Gt = (0, qt.useRef)(null),
        zt = (0, qt.useCallback)((function tt() {
          "up" === Gt.current ? et.current.scrollTop -= 10 : "down" === Gt.current && (et.current.scrollTop += 10), Gt.current && requestAnimationFrame(tt)
        }), [et]),
        rt = (0, qt.useCallback)((function(tt) {
          Gt.current || (Gt.current = tt, zt())
        }), [zt]);

      function Ut() {
        Gt.current = null
      }
      const At = (0, qt.useRef)({
        creativeSearchVal: dt,
        setCreativeSearchVal: Ht
      });
      At.current = {
        creativeSearchVal: dt,
        setCreativeSearchVal: Ht
      };
      const [it] = (0, qt.useState)((() => new XO((tt => {
        At.current.setCreativeSearchVal(tt)
      }), 250, DV.j))), Yt = tt => {
        var Vt;
        null === (Vt = et.current) || void 0 === Vt || Vt.classList.toggle("CreativeItemSlotsStale", tt)
      };
      (0, ht.f)(HO.e, (tt => {
        it.setHeld(tt), tt || Yt(!1)
      })), (0, qt.useEffect)((() => it.flush), [it]);
      const Bt = (0, Xt.jsx)(LV.d, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: dt,
          maxLength: 1e4,
          onValueChange: (tt, et) => {
            "" === it.getTyped(At.current.creativeSearchVal) && "" !== tt && lt(null), it.type(tt), Yt(it.isHeld())
          },
          onEnter: it.flush,
          blurOnEnter: !0
        }),
        pt = (0, Xt.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [Pt && (0, Xt.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, Xt.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                rt("up")
              },
              onPointerLeave: Ut,
              onPointerUp: Ut,
              children: (0, Xt.jsx)(yt.b, {
                name: "arrow-up"
              })
            }), (0, Xt.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                rt("down")
              },
              onPointerLeave: Ut,
              onPointerUp: Ut,
              children: (0, Xt.jsx)(yt.b, {
                name: "arrow-up"
              })
            })]
          }), (0, Xt.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: et,
            children: [0 === St.length && "" !== dt && (0, Xt.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: ft("general:noResults")
            }), (0, Xt.jsx)(ZV.d, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [dt, Kt],
              observerRoot: "CreativeItemSlots",
              observing: Et,
              children: St.map((tt => {
                const et = Vt + tt;
                return (0, Xt.jsx)(WV.d, {
                  idx: et,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: Ot(et),
                  pointerDown: Dt(et),
                  pointerUp: mt(et)
                }, et)
              }))
            })]
          })]
        });
      return (0, Xt.jsxs)("div", {
        className: bV()("CreativeItemSlotsWrapper", Zt ? "WithRail" : "WithDropdown"),
        children: [Zt && (0, Xt.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: Lt,
          style: {
            "--rail-height": Ft > 0 ? `${Ft}px` : void 0,
            "--tab-rows": Math.ceil(It.length / 2)
          },
          children: It.map((tt => (0, Xt.jsx)(EO, {
            labelKey: QO(tt),
            isSelected: Kt === tt,
            onSelect: () => {
              Rt(tt)
            },
            setHovered: ct,
            children: (0, Xt.jsx)(lO, {
              category: tt
            })
          }, null !== tt && void 0 !== tt ? tt : "all")))
        }), (0, Xt.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, Xt.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [Bt, !Zt && (0, Xt.jsx)(fO, {
              categories: It,
              selectedCategory: Kt,
              onSelect: Rt
            })]
          }), pt]
        })]
      })
    }));

    function yO(tt) {
      var et;
      return null !== (et = (0, dO.e)(tt)) && void 0 !== et ? et : ""
    }

    function NO(tt, et, Vt) {
      let {
        publicLobby: Ot,
        shownInGame: qt
      } = et;
      const Dt = tt.toLowerCase(),
        mt = (0, mO.creativeItemIds)(),
        dt = tt => {
          var et;
          const Dt = mt[tt];
          return !(0, mO.itemIsDisabled)(Dt, Ot, null === (et = qt[yO(Dt)]) || void 0 === et || et, Vt)
        };
      if ("" === Dt) return mt.map(((tt, et) => et)).filter((tt => !(0, mO.showOnlyInCreativeSearch)(mt[tt]))).filter(dt);
      const jt = [];
      for (let Ht = 0; Ht < mt.length; Ht++) yO(mt[Ht]).toLowerCase().includes(Dt) && jt.push(Ht);
      jt.sort(((tt, et) => {
        const Vt = yO(mt[tt]).toLowerCase(),
          Ot = yO(mt[et]).toLowerCase();
        return Vt.indexOf(Dt) - Ot.indexOf(Dt)
      }));
      for (const [Ht, Xt] of(0, mO.creativeAltNames)())
        for (const tt of Xt)
          if (tt.toLowerCase().includes(Dt)) {
            const tt = mt.indexOf(Ht);
            jt.includes(tt) || jt.push(tt)
          } return jt.filter(dt)
    }
    var aO = Vt(37060),
      MO = Vt(710);

    function bO(tt) {
      return tt > MO.j
    }

    function JO(tt) {
      const et = tt / 2,
        Vt = [];
      for (let Ot = 0; Ot < et / 6; Ot++)
        for (let tt = 0; tt < 12; tt++) {
          const qt = tt < 6 ? 0 : et;
          Vt.push(qt + 6 * Ot + tt % 6)
        }
      return Vt
    }

    function CO(tt) {
      let {
        numSlots: et,
        renderSlot: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Tt.H)(), Dt = (0, qt.useRef)(null);
      var mt;
      return mt = Dt, (0, qt.useLayoutEffect)((() => {
        var tt;
        const et = null === (tt = mt.current) || void 0 === tt ? void 0 : tt.closest(".InvenBody");
        if (!et) return;
        const Vt = () => {
          et.style.zoom = "";
          const tt = parseFloat(getComputedStyle(document.documentElement).fontSize),
            Vt = window.innerWidth - 2 * tt,
            Ot = et.getBoundingClientRect().width;
          Ot > Vt && (et.style.zoom = "" + Vt / Ot)
        };
        return Vt(), window.addEventListener("resize", Vt), () => {
          window.removeEventListener("resize", Vt), et.style.zoom = ""
        }
      }), [mt]), (0, Xt.jsxs)("div", {
        ref: Dt,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, Xt.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Ot("doubleChest:title")
        }), (0, Xt.jsx)("div", {
          className: "GridItemSlots",
          children: JO(et).map((tt => Vt(tt)))
        })]
      })
    }

    function uO(tt) {
      let {
        Tq: et,
        initialPasskey: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Tt.H)(), [Dt, mt] = (0, qt.useState)(Vt), [dt, jt] = (0, qt.useState)(Vt);
      (0, qt.useEffect)((() => {
        mt(Vt), jt(Vt)
      }), [...et]);
      return (0, Xt.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, Xt.jsx)("div", {
          className: "SmallTextBold",
          children: Ot("ironChest:currentPasskey", {
            currentPasskey: Dt.join("")
          })
        }), (0, Xt.jsx)(uV, {
          className: "IronChestPasskeyEditor",
          Rd: dt,
          onPasskeyUpdated: jt,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            Ht.gameBridge.send("changeIronChestPasskey", {
              pos: [...et],
              Rd: [...dt]
            }), mt([...dt])
          }
        })]
      })
    }

    function KO(tt, et) {
      return "Iron" === tt.type && tt.ironChest.ownerDbId === et
    }

    function hO(tt) {
      let {
        variation: et,
        canCraft: Vt,
        show: Ot,
        creativeMounted: qt,
        specialItemRef: Dt,
        draggedInfo: mt,
        getSetHovering: dt,
        getPointerDownForIdx: jt,
        getPointerUpForIdx: Ht,
        enchantingTablePosition: Qt,
        enchantingTableBlockName: lt,
        selectedCraftable: Et,
        dispatchSelectedCraftable: ft,
        creativeScrollDiv: wt,
        creativeSearchVal: yt,
        setCreativeSearchVal: Nt,
        creativeCategory: Mt,
        setCreativeCategory: bt,
        onCraft: Jt
      } = tt;
      const {
        userContext: Ct
      } = (0, ut.d)(), {
        t: Kt
      } = (0, Tt.H)(), ht = (0, Wt.g)("inventory", (tt => tt.chest)), vt = (0, Wt.g)("inventory", (tt => tt.player.length)), St = (0, Wt.g)("inventory", (tt => tt.creative));
      if (0 === vt) return null;
      let ct, Rt;
      const It = tt => {
          const et = vt + tt;
          return (0, Xt.jsx)(WV.d, {
            idx: et,
            draggedInfo: mt,
            specialItemInfo: Dt.current,
            setHovered: dt(et),
            pointerDown: jt(et),
            pointerUp: Ht(et)
          }, et)
        },
        Pt = ht ? (0, aO.b)(ht.type) : null;
      if (Pt) ct = bV()("InvenLeftSideChestCustom", Pt.className), Rt = (0, Xt.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: Pt.render({
          Tq: ht.pos,
          renderSlot: It
        })
      });
      else if (ht) {
        const tt = ht.pos,
          et = "Iron" === ht.type || "Moonstone" === ht.type ? ht.type : "Standard";
        ct = `InvenLeftSideChest${et}`;
        const Vt = bO(ht.numSlots);
        Rt = (0, Xt.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [KO(ht, Ct.whamm) && (0, Xt.jsx)(uO, {
            Tq: tt,
            initialPasskey: ht.ironChest.Rd
          }), Vt && (0, Xt.jsx)(CO, {
            numSlots: ht.numSlots,
            renderSlot: It
          }), !Vt && (0, Xt.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, Xt.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: Kt("Moonstone" === et ? "item:moonstoneChest" : "Iron" === et ? "item:ironChest" : "item:chest")
            }), (0, Xt.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(ht.numSlots).fill(0).map(((tt, et) => It(et)))
            })]
          })]
        })
      } else if (!St || et && Vt)
        if (Vt && "Enchanting Table" === et) ct = `InvenLeftSide${(null!==lt&&void 0!==lt?lt:"").replace(/ /gi,"")}`, Rt = (0, Xt.jsx)(SV, {
          specialItemInfo: Dt.current,
          setHovered: dt,
          pointerDown: jt(lV.e),
          pointerUp: Ht(lV.e),
          enchantingTablePosition: Qt,
          enchantingTableBlockName: lt
        });
        else if (Vt && "Salvaging Table" === et) ct = "InvenLeftSideSalvagingTable", Rt = (0, Xt.jsx)(RV, {
        specialItemInfo: Dt.current,
        setSpecialItemInfo: tt => {
          Dt.current = tt
        },
        setHovered: dt,
        pointerDown: jt(lV.e),
        pointerUp: Ht(lV.e)
      });
      else {
        if (!Vt) return null;
        ct = `InvenLeftSide${(null!==et&&void 0!==et?et:"HandCrafting").replace(/ /gi,"")}`, Rt = (0, Xt.jsx)(DO, {
          show: Ot,
          onCraft: Jt,
          craftingStation: et,
          selectedCraftable: Et,
          dispatchSelectedCraftable: ft,
          setHovered: dt()
        })
      } else ct = "InvenLeftSideCreative", Rt = qt ? (0, Xt.jsx)(wO, {
        creativeScrollDiv: wt,
        playerInvenNumSlots: vt,
        getSetHoveringForIdx: dt,
        getPointerDownForIdx: jt,
        getPointerUpForIdx: Ht,
        creativeSearchVal: yt,
        setCreativeSearchVal: Nt,
        creativeCategory: Mt,
        setCreativeCategory: bt,
        show: Ot
      }) : null;
      const Zt = !!ht || Vt && !!et;
      return (0, Xt.jsx)("div", {
        className: `InvenLeftSide ${ct}`,
        "data-pad-inventory-start": Zt ? "" : void 0,
        children: Rt
      })
    }
    var vO = Vt(705),
      WO = Vt(20271),
      SO = Vt(20278),
      cO = Vt(20280);
    const RO = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: Vt(20282)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: SO
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: cO
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: Vt(20284)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: WO
      }
    };

    function IO(tt) {
      const {
        sprite: et,
        image: Vt
      } = RO[tt];
      return Be(et, Ae.k.ITEM, Vt)
    }

    function PO(tt) {
      let {
        draggedInfo: et,
        specialItemInfo: Vt,
        craftFlyAnims: Ot,
        getSetHovering: qt,
        getPointerDownForIdx: Dt,
        getPointerUpForIdx: mt,
        variation: dt,
        canCraft: jt,
        isNewSlot: Ht
      } = tt;
      const Qt = (0, Wt.g)("inventory", (tt => tt.player.length));
      return 0 === Qt ? null : (0, Xt.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, Xt.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(vO.b.length).fill(0).map(((tt, lt) => {
            const Et = Qt - vO.b.length + lt;
            return (0, Xt.jsx)(WV.d, {
              idx: Et,
              draggedInfo: et,
              specialItemInfo: Vt,
              craftFlyHoldbackInfo: (0, QV.g)(Ot, Et),
              setHovered: qt(Et),
              pointerDown: Dt(Et),
              pointerUp: mt(Et),
              defaultIconB64: IO(vO.b[lt]),
              variation: jt ? dt : void 0,
              showNewDot: Ht(Et)
            }, Et)
          }))
        }), (0, Xt.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(Qt - 10 - vO.b.length).fill(0).map(((tt, lt) => {
            const Et = Qt - vO.b.length - lt - 1;
            return (0, Xt.jsx)(WV.d, {
              idx: Et,
              draggedInfo: et,
              specialItemInfo: Vt,
              craftFlyHoldbackInfo: (0, QV.g)(Ot, Et),
              setHovered: qt(Et),
              pointerDown: Dt(Et),
              pointerUp: mt(Et),
              variation: jt ? dt : void 0,
              showNewDot: Ht(Et)
            }, Et)
          }))
        })]
      })
    }
    var ZO = Vt(37065),
      LO = Vt(37073);

    function FO(tt) {
      const {
        e: et,
        idx: Vt
      } = tt, Ot = (0, XV.l)(tt.readInventory(), Vt), qt = (0, XV.o)(et);
      Vt === lV.c ? function(tt, et) {
        const {
          draggedInfoRef: Vt,
          removeItem: Ot,
          removeDraggedInfoRef: qt,
          close: Dt
        } = tt;
        if (Vt.current) {
          const tt = et && Vt.current.amount || 1;
          Ot(Vt.current.idx, tt, !0) && (Vt.current.amount -= tt, Vt.current.amount <= 0 && qt())
        } else et && Dt()
      }(tt, qt) : Vt === lV.e ? function(tt, et) {
        const {
          e: Vt,
          draggedInfoRef: Ot,
          specialItemRef: qt,
          moveAmtIntoSlot: Dt,
          removeDraggedInfoRef: mt
        } = tt;
        if ((0, XV.u)(Vt) && qt.current) qt.current = null;
        else if (Ot.current && qt.current && (Ot.current.idx === qt.current.idx || (0, LO.d)(Ot.current, qt.current)) && Ot.current.amount > 0 && qt.current.amount > 0 && qt.current.amount < JV.e.maxItemStackSize)
          if (Ot.current.idx === qt.current.idx) {
            if (et) {
              const tt = Math.min(Ot.current.amount, JV.e.maxItemStackSize - qt.current.amount);
              qt.current.amount += tt, Ot.current.amount -= tt
            } else Ot.current.amount--, qt.current.amount++;
            Ot.current.amount <= 0 && mt()
          } else if (et) {
          const tt = Math.min(Ot.current.amount, JV.e.maxItemStackSize - qt.current.amount);
          Dt(qt.current.idx, tt) && (qt.current.amount += tt)
        } else {
          Dt(qt.current.idx, 1) && qt.current.amount++
        } else if (Ot.current && !qt.current && !et && Ot.current.amount > 0) Ot.current.amount--, qt.current = {
          idx: Ot.current.idx,
          name: Ot.current.name,
          attributes: Ot.current.attributes,
          amount: 1
        }, Ot.current.amount <= 0 && mt();
        else {
          const tt = Ot.current;
          Ot.current = qt.current, qt.current = tt
        }
      }(tt, qt) : (0, XV.u)(et) ? function(tt, et) {
        var Vt, Ot;
        const {
          idx: qt,
          draggedInfoRef: Dt,
          specialItemRef: mt,
          canCraft: dt,
          variation: jt,
          swapSlots: Ht,
          moveIntoSlots: Xt
        } = tt;
        if (!et) return;
        let Qt = et.amount;
        qt === (null === (Vt = Dt.current) || void 0 === Vt ? void 0 : Vt.idx) && (Qt = Dt.current.amount <= 0 ? 0 : et.amount - Dt.current.amount);
        qt === (null === (Ot = mt.current) || void 0 === Ot ? void 0 : Ot.idx) && (Qt = mt.current.amount <= 0 ? 0 : et.amount - mt.current.amount);
        if (0 === Qt) return;
        const lt = tt.readInventory(),
          Et = lt.player.length,
          ft = lt.chest,
          wt = Et - vO.b.length,
          yt = () => {
            if (!(0, DV.j)()) return void Xt(10, wt, qt, Qt);
            const tt = tt => {
              const Vt = (0, XV.l)(lt, tt);
              return Vt ? {
                amount: Vt.amount,
                stacksWithMoved: (0, LO.d)(Vt, et)
              } : null
            };
            for (const et of ((tt, et, Vt, Ot, qt) => {
                const Dt = [];
                let mt = Ot;
                if (null !== Ot) {
                  let dt = 0;
                  for (let Ot = et; Ot < Vt; Ot++) {
                    const et = tt(Ot);
                    null !== et && void 0 !== et && et.stacksWithMoved && null !== et.amount && et.amount > 0 && (dt += Math.max(0, qt - et.amount))
                  }
                  const jt = Math.min(Ot, dt);
                  if (jt > 0 && (Dt.push({
                      start: et,
                      end: Vt,
                      amount: jt
                    }), mt = Ot - jt), mt <= 0) return Dt
                }
                for (let dt = Vt - 1; dt >= et; dt--)
                  if (null === tt(dt)) {
                    Dt.push({
                      start: dt,
                      end: dt + 1,
                      amount: mt
                    });
                    break
                  } return Dt
              })(tt, 10, wt, Qt, JV.e.maxItemStackSize)) Xt(et.start, et.end, qt, et.amount)
          };
        if (!dt || "Enchanting Table" !== jt && "Salvaging Table" !== jt) {
          const Vt = (0, vt.Kb)(et.name),
            Ot = Vt ? (0, vt.Jb)(Vt) : null;
          if (!vO.b.includes(Vt) || qt !== Ot && (0, XV.m)(lt, tt.itemInfo, Ot, qt))
            if (ft)
              if (qt < Et) {
                var Nt, Mt;
                const [tt, et] = null !== (Nt = null === (Mt = (0, aO.b)(ft.type)) || void 0 === Mt ? void 0 : Mt.quickMoveRange) && void 0 !== Nt ? Nt : [0, ft.numSlots];
                Xt(Et + tt, Et + et, qt, Qt)
              } else Xt(0, Et - vO.b.length, qt, Qt);
          else lt.creative ? qt < 10 ? yt() : qt < Et ? Xt(0, 10, qt, Qt) : Xt(0, Et - vO.b.length, qt, null !== et.amount ? JV.e.maxItemStackSize : null) : qt < 10 ? yt() : Xt(0, 10, qt, Qt);
          else qt < Et - vO.b.length || qt >= Et ? Ht(Ot, qt) : (Xt(0, Et - vO.b.length, Ot, Qt), jV.e.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else mt.current = {
          idx: qt,
          name: et.name,
          attributes: et.attributes,
          amount: null !== et.amount ? Qt : 0
        }
      }(tt, Ot) : tt.draggedInfoRef.current ? function(tt, et, Vt, Ot) {
        const {
          draggedInfoRef: qt,
          specialItemRef: Dt,
          moveAmtIntoSlot: mt,
          swapSlots: dt,
          removeItem: jt,
          removeDraggedInfoRef: Ht
        } = tt, Xt = tt.readInventory(), Qt = qt.current.idx;
        if (Vt && (et === Qt || (0, LO.d)(qt.current, Vt)) && qt.current.amount > 0 && (0, XV.e)(Vt) > 0 && (Vt.amount < JV.e.maxItemStackSize || et === Qt)) Ot ? Vt.amount + qt.current.amount <= JV.e.maxItemStackSize || et === Qt ? mt(et, qt.current.amount) : mt(et, JV.e.maxItemStackSize - Vt.amount) : mt(et, 1);
        else if (qt.current.amount > 0 && !Vt) mt(et, Ot ? qt.current.amount : 1);
        else if (Ot || Vt || 0 === qt.current.amount)
          if (Xt.creative && !Xt.chest && et >= Xt.player.length) {
            const tt = 0 === qt.current.amount ? 1 : qt.current.amount;
            jt(qt.current.idx, tt, !1) && Ht()
          } else {
            var lt;
            const Vt = (null === (lt = Dt.current) || void 0 === lt ? void 0 : lt.idx) === et;
            if (dt(et, qt.current.idx)) {
              const Ot = tt.readInventory(),
                mt = (0, XV.l)(Ot, Qt),
                dt = !Ot.chest && Ot.creative && qt.current.idx >= Ot.player.length;
              if (mt && qt.current.idx !== et && !dt) {
                let tt = (0, XV.e)(mt);
                Vt && (tt -= Dt.current.amount), qt.current = Vt && 0 === tt ? null : {
                  idx: qt.current.idx,
                  name: mt.name,
                  attributes: mt.attributes,
                  amount: tt
                }
              } else Ht()
            }
          }
        else mt(et, 1)
      }(tt, Vt, Ot, qt) : function(tt, et, Vt, Ot) {
        var qt;
        const {
          draggedInfoRef: Dt,
          specialItemRef: mt
        } = tt;
        if (!Vt) return;
        let dt = (0, XV.e)(Vt);
        const jt = (null === (qt = mt.current) || void 0 === qt ? void 0 : qt.idx) === et;
        jt && (dt -= mt.current.amount);
        Ot || (dt = Math.ceil(dt / 2));
        Dt.current = jt && 0 === dt ? null : {
          idx: et,
          name: Vt.name,
          attributes: Vt.attributes,
          amount: dt
        }
      }(tt, Vt, Ot, qt)
    }

    function kO(tt, et) {
      return !!et && et.name === tt.name
    }

    function GO() {
      return Ht.gameBridge.latest("inventory")
    }

    function zO(tt, et, Vt) {
      return Ht.gameBridge.send("removeInventoryItem", {
        slot: tt,
        amount: et,
        drop: Vt
      })
    }

    function oO(tt) {
      return (0, XV.j)(tt, Ht.gameBridge.latest("itemInfo"), Ht.gameBridge.latest("stationItems").enchantable)
    }

    function rO(tt) {
      let {
        show: et,
        close: Vt,
        canCraft: Ot,
        variation: Dt,
        inventoryItemsMoveable: mt,
        setCraftFlyAnims: dt
      } = tt;
      (0, Wt.h)("itemInfo");
      const [jt, Xt] = (0, qt.useState)(null), [Qt, lt] = (0, qt.useState)(null), [Et, ft] = (0, qt.useState)(!1), wt = (0, qt.useRef)(null), yt = (0, qt.useRef)(null), Nt = (0, qt.useRef)(null), Mt = (0, qt.useRef)(null), [bt, Jt] = (0, qt.useReducer)((tt => tt + 1), 0), Ct = (0, qt.useCallback)((() => {
        et && Jt()
      }), [et, Jt]), ut = (0, qt.useCallback)((() => {
        yt.current = null, Ft.current = null, Ct()
      }), [Ct]), Kt = (0, qt.useCallback)(((tt, et) => {
        dt((Vt => Vt.map((Vt => "ingredient" === Vt.kind ? Vt : Vt.jj === tt ? {
          ...Vt,
          jj: et,
          to: (0, XV.g)(et)
        } : Vt.jj === et ? {
          ...Vt,
          jj: tt,
          to: (0, XV.g)(tt)
        } : Vt))))
      }), [dt]), ht = (0, qt.useCallback)(((tt, et) => {
        const Vt = zt.current;
        if (Vt.x = tt, Vt.y = et, wt.current) !ot.current.isTouch || ot.current.itemBeingDragged && !Ft.current ? (wt.current.style.transform = `translate(${Vt.x}px, ${Vt.y}px)`, ft(ot.current.isTouch && !Ft.current)) : (wt.current.style.transform = "translate(0.5rem, 0.5rem)", ft(!0));
        else if (Mt.current) {
          const Vt = Mt.current;
          let Ot = tt + 10,
            qt = et + 10;
          const Dt = Vt.offsetWidth,
            mt = Vt.offsetHeight;
          Ot + Dt > window.innerWidth && (Ot = tt - Dt - 10), qt + mt > window.innerHeight && (qt = et - mt - 10), Ot < 0 && (Ot = 0), qt < 0 && (qt = 0), Mt.current.style.transform = `translate(${Ot}px, ${qt}px)`
        }
      }), []), St = (0, qt.useCallback)((tt => (et, Vt, Ot) => {
        if (Xt(et && void 0 !== tt ? tt : null), et) {
          if (void 0 === tt && !Vt) return void(0, ZO.b)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== tt) {
            var qt;
            const et = GO();
            let Vt;
            if (Vt = tt === lV.e ? Nt.current ? (0, XV.l)(et, Nt.current.idx) : null : (0, XV.l)(et, tt), !Vt) return void lt(null);
            if ((null === (qt = Nt.current) || void 0 === qt ? void 0 : qt.idx) === tt) {
              if (0 === (0, XV.e)(Vt) - Nt.current.amount) return void lt(null)
            }
            lt(oO(Vt))
          } else lt({
            name: Vt.name,
            desc: Vt.desc,
            fontStyle: "normal"
          })
        } else lt(null);
        Ot && setTimeout((() => {
          ht(Ot.pageX, Ot.pageY)
        }), 0)
      }), [ht]), ct = (0, qt.useCallback)(((tt, et) => {
        const Vt = Ht.gameBridge.send("moveInventoryItem", {
          from: yt.current.idx,
          to: tt,
          amount: et
        });
        return Vt ? (yt.current.amount -= et, yt.current.amount <= 0 && ut()) : console.error("moveInventoryItem failed"), Vt
      }), [ut]), Rt = (0, qt.useCallback)(((tt, et) => {
        const Vt = Nt.current,
          Ot = null === Vt || void 0 === Vt ? void 0 : Vt.idx;
        Vt && (Vt.idx = function(tt, et, Vt) {
          return tt === et ? Vt : tt === Vt ? et : tt
        }(Ot, tt, et));
        const qt = Ht.gameBridge.send("swapInventorySlots", {
          a: tt,
          b: et
        });
        return qt ? Kt(tt, et) : Vt && (Vt.idx = Ot), qt
      }), [Kt]), It = (0, qt.useCallback)(((tt, et, Vt, Ot) => {
        const qt = Ht.gameBridge.send("quickMoveInventoryItem", {
          slot: Vt,
          start: tt,
          end: et,
          amount: Ot
        });
        null !== qt && Kt(Vt, qt)
      }), [Kt]), Pt = (0, qt.useCallback)(((tt, et) => {
        var qt;
        ((tt, et, Vt) => {
          const Ot = tt - (Vt - vO.b.length);
          return !(!et || Ot < 0 || Ot >= vO.b.length) && (0, vt.Kb)(et) !== vO.b[Ot]
        })(et, null === (qt = yt.current) || void 0 === qt ? void 0 : qt.name, GO().player.length) || (FO({
          e: tt,
          idx: et,
          readInventory: GO,
          itemInfo: Ht.gameBridge.latest("itemInfo"),
          draggedInfoRef: yt,
          specialItemRef: Nt,
          moveAmtIntoSlot: ct,
          swapSlots: Rt,
          moveIntoSlots: It,
          removeItem: zO,
          removeDraggedInfoRef: ut,
          close: Vt,
          canCraft: Ot,
          variation: Dt
        }), Ct())
      }), [Ot, Vt, ct, It, ut, Rt, Dt, Ct]), Zt = (0, qt.useRef)(0), Lt = (0, qt.useRef)(null), Ft = (0, qt.useRef)(null), kt = (0, qt.useRef)(null), Gt = (0, qt.useRef)(new Set), zt = (0, qt.useRef)({
        x: 0,
        y: 0
      }), ot = (0, qt.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), rt = (0, qt.useCallback)((() => (kt.current = null, ot.current.itemBeingDragged = !1, clearTimeout(Lt.current), !!Ft.current && (Ft.current = null, Ct(), !0))), [Ct]);
      (0, qt.useEffect)((() => {
        rt(), Gt.current.clear()
      }), [et]);
      const Ut = tt => void 0 !== tt && (Gt.current.has(tt) || null !== kt.current && tt !== kt.current),
        At = tt => {
          ot.current.isTouch = (0, XV.q)(tt)
        },
        it = (0, qt.useCallback)((tt => et => {
          const Ot = (0, XV.q)(et);
          if (Ot || ht(et.pageX, et.pageY), mt)
            if (Ut(et.pointerId)) void 0 !== et.pointerId && Gt.current.add(et.pointerId);
            else {
              if (At(et), Ot) {
                Zt.current = et.timeStamp, ot.current.itemBeingDragged = !0, kt.current = et.pointerId;
                const Vt = (0, XV.l)(GO(), tt);
                if (Vt && Vt.amount && Vt.amount > 0) {
                  const Vt = et.pageX,
                    Ot = et.pageY,
                    qt = zt.current.x,
                    Dt = zt.current.y;
                  clearTimeout(Lt.current), Lt.current = setTimeout((() => {
                    if (yt.current && yt.current.idx === tt && (Math.abs(Vt - zt.current.x) < 20 && Math.abs(Ot - zt.current.y) < 20 || qt === zt.current.x && Dt === zt.current.y) && ot.current.itemBeingDragged) {
                      const tt = GO(),
                        Vt = tt.creative && !tt.chest && yt.current.idx >= JV.e.numInvenSlots && null !== (0, XV.l)(tt, yt.current.idx).amount ? JV.e.maxItemStackSize : yt.current.amount;
                      Ft.current = {
                        initTouchX: et.pageX,
                        initTouchY: et.pageY,
                        maxAmount: Vt
                      }, yt.current.amount = Math.ceil(yt.current.amount / 2), wt.current.style.transform = "translate(0.5rem, 0.5rem)", ft(!0), Ct()
                    }
                  }), 500)
                }
              }
              Pt(et, tt)
            }
          else tt === lV.c && (0, XV.o)(et) && Vt()
        }), [ht, Pt, mt, Vt, Ct]),
        Yt = (0, qt.useCallback)((tt => tt => {
          if (Ut(tt.pointerId)) return;
          const et = (0, XV.q)(tt);
          if (At(tt), !rt()) {
            if (et && yt.current && tt.timeStamp - Zt.current > 150) {
              const et = document.elementFromPoint(tt.clientX, tt.clientY);
              if (null !== et) {
                const Vt = et.getAttribute("data-inven-idx");
                null !== Vt ? Pt(tt, parseInt(Vt)) : et.classList.contains("InventoryBackgroundScreen") && Pt(tt, -1)
              }
            }
            ht(tt.pageX, tt.pageY)
          }
        }), [ht, Pt, rt]);
      (0, qt.useEffect)((() => {
        let tt;
        const Vt = ["pointerup", "pointercancel"],
          Ot = tt => {
            Gt.current.has(tt.pointerId) ? setTimeout((() => {
              Gt.current.delete(tt.pointerId)
            }), 0) : tt.pointerId === kt.current && setTimeout((() => {
              kt.current === tt.pointerId && rt()
            }), 0)
          };
        if (et) {
          for (const tt of Vt) document.addEventListener(tt, Ot, !0);
          if (!ot.current.isTouch) {
            const tt = zt.current;
            ht(tt.x, tt.y)
          }
          tt = tt => {
            tt.preventDefault(), Ut(tt.pointerId) || (At(tt), ht(tt.pageX, tt.pageY), Ft.current && tt.pointerId === kt.current && (tt => {
              if (!yt.current) return Ft.current = null, void Ct();
              const {
                initTouchX: et,
                maxAmount: Vt
              } = Ft.current, Ot = (tt.pageX - et) * Ft.current.maxAmount / 160, qt = Math.ceil(Vt / 2) + Math.ceil(Ot);
              yt.current.amount = Math.min(Vt, Math.max(1, qt)), Ct()
            })(tt))
          }, document.addEventListener("pointermove", tt, !0)
        }
        return () => {
          document.removeEventListener("pointermove", tt, !0);
          for (const tt of Vt) document.removeEventListener(tt, Ot, !0)
        }
      }));
      const Bt = (0, qt.useCallback)((() => {
          if (yt.current) {
            const tt = (0, XV.l)(GO(), yt.current.idx);
            (!kO(yt.current, tt) || tt.amount < yt.current.amount) && ut()
          }
        }), [ut]),
        pt = (0, qt.useCallback)((() => {
          const tt = yt.current;
          if (tt) {
            const et = (0, XV.l)(GO(), tt.idx);
            kO(tt, et) && (tt.attributes = et.attributes)
          }
        }), []);
      return {
        draggedDomRef: wt,
        draggedInfoRef: yt,
        specialItemRef: Nt,
        hoverInfoDomRef: Mt,
        longHoldSplitInfoRef: Ft,
        currHoveredIdx: jt,
        currHoveredDisplayInfo: Qt,
        displayDraggedItemName: Et,
        forceRerenderIfVisible: Ct,
        removeDraggedInfoRef: ut,
        checkDraggedItemConsistencyWithInven: Bt,
        refreshDraggedAttributes: pt,
        swapSlots: Rt,
        getPointerDownForIdx: it,
        getPointerUpForIdx: Yt,
        getSetHovering: St,
        setCurrHoveredDisplayInfo: lt,
        moveFollowerTo: ht
      }
    }
    class UO {
      constructor(tt) {
        this.snapshot = [], this.newSlots = new Set, this.update(tt, !1)
      }
      update(tt, et) {
        const Vt = tt.map((tt => {
          var et;
          return tt ? {
            name: tt.name,
            amount: null !== (et = tt.amount) && void 0 !== et ? et : 1
          } : null
        }));
        Vt.forEach(((tt, Vt) => {
          const Ot = this.snapshot[Vt],
            qt = (null === tt || void 0 === tt ? void 0 : tt.name) !== (null === Ot || void 0 === Ot ? void 0 : Ot.name);
          (!tt || qt || tt.amount < Ot.amount) && this.newSlots.delete(Vt), et && tt && (qt || tt.amount > Ot.amount) && this.newSlots.add(Vt)
        })), this.snapshot = Vt
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(tt) {
        return this.newSlots.has(tt)
      }
    }
    const AO = (tt, et, Vt) => ({
      button: et,
      shiftKey: Vt,
      pageX: tt.clientX,
      pageY: tt.clientY,
      clientX: tt.clientX,
      clientY: tt.clientY,
      pointerType: "mouse"
    });

    function iO(tt) {
      const [et, Vt] = (0, qt.useState)(tt);
      return tt && !et && Vt(!0), (0, qt.useEffect)((() => {
        if (et) return;
        let tt = !0;
        const Ot = () => {
            tt && (tt = !1, Vt(!0))
          },
          qt = "function" === typeof window.requestIdleCallback,
          Dt = qt ? window.requestIdleCallback(Ot, {
            timeout: 2e3
          }) : void 0,
          mt = setTimeout(Ot, qt ? 2e3 : 1e3);
        return () => {
          tt = !1, clearTimeout(mt), void 0 !== Dt && window.cancelIdleCallback(Dt)
        }
      }), [et]), et
    }
    const YO = (0, qt.memo)((function(tt) {
      var et;
      let {
        show: Vt,
        onOpen: Ot,
        onClose: Dt,
        variation: dt
      } = tt;
      const Qt = (0, qt.useRef)(null),
        lt = (0, qt.useRef)(null),
        Et = function(tt) {
          const [et, Vt] = (0, qt.useState)(!0), [Ot, Dt] = (0, qt.useState)(!1), mt = (0, qt.useRef)(null), dt = (0, qt.useRef)(null), Ht = (0, jt.i)("_shield"), Xt = (0, qt.useRef)(null), Qt = (0, jt.i)("_health"), lt = (0, qt.useRef)(null);

          function Et(tt) {
            const et = Date.now() + tt;
            et < dt.current || (Vt(!1), clearTimeout(mt.current), dt.current = et, mt.current = setTimeout((() => {
              Vt(!0)
            }), tt))
          }
          return (0, qt.useEffect)((() => {
            Et(fV);
            const tt = ft.j.subscribe("requestingPlayVideoAd", (() => {
              Et(fV)
            }));
            return () => {
              clearTimeout(mt.current), ft.j.unsubscribe(tt)
            }
          }), []), (0, qt.useEffect)((() => {
            (Xt.current > Ht || lt.current > Qt) && Et(6e4), Xt.current = Ht, lt.current = Qt
          }), [Ht, Qt]), (0, qt.useEffect)((() => {
            let et = null;
            return tt ? et = setTimeout((() => {
              Dt(!0)
            }), 250) : Dt(!1), () => {
              clearTimeout(et)
            }
          }), [tt]), et && Ot
        }(Vt);
      (0, ht.h)(OV.d, null);
      const wt = (0, OV.n)(),
        yt = wt.some((tt => tt.panel)),
        {
          userContext: Nt
        } = (0, ut.d)(),
        Mt = (0, Wt.g)("inventory", (tt => {
          const et = tt.chest;
          return null !== et && (bO(et.numSlots) || KO(et, Nt.whamm))
        })),
        bt = iO(Vt),
        Jt = iO(Vt),
        [Ct, Kt] = (0, qt.useState)([]),
        St = (0, qt.useCallback)((tt => {
          Kt((et => et.filter((et => et.id !== tt))))
        }), []),
        ct = (0, qt.useRef)(null),
        Rt = (0, qt.useRef)(0),
        It = (0, qt.useCallback)((() => {
          ct.current && (Rt.current = ct.current.scrollTop), Dt()
        }), [Dt]),
        Pt = (0, jt.i)("inventoryItemsMoveable"),
        Zt = (0, jt.i)("canCraft"),
        {
          clientEscMenuOptions: Ft
        } = (0, ot.k)(["clientEscMenuOptions"]),
        kt = (0, qt.useRef)(null);
      kt.current || (kt.current = new UO(Ht.gameBridge.latest("inventory").player));
      const Gt = kt.current,
        {
          draggedDomRef: zt,
          draggedInfoRef: rt,
          specialItemRef: Ut,
          hoverInfoDomRef: At,
          longHoldSplitInfoRef: it,
          currHoveredIdx: Yt,
          currHoveredDisplayInfo: Bt,
          displayDraggedItemName: pt,
          forceRerenderIfVisible: xt,
          removeDraggedInfoRef: Tt,
          checkDraggedItemConsistencyWithInven: gt,
          refreshDraggedAttributes: st,
          swapSlots: nt,
          getPointerDownForIdx: te,
          getPointerUpForIdx: ee,
          getSetHovering: Ve,
          setCurrHoveredDisplayInfo: Oe,
          moveFollowerTo: qe
        } = rO({
          show: Vt,
          close: It,
          canCraft: Zt,
          variation: dt,
          inventoryItemsMoveable: Pt,
          setCraftFlyAnims: Kt
        });
      (0, qt.useEffect)((() => {
        const tt = !Vt && null !== Ht.gameBridge.latest("inventory").chest;
        if (tt && Ht.gameBridge.send("closeChest", null), Vt || (Gt.clearMarks(), Ve(null)(!1)), tt) {
          jV.e.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [Vt]), (0, Wt.e)("chestToggled", (tt => {
        if (tt ? Ot() : Vt && It(), tt) {
          jV.e.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const De = (0, Re.g)();
      (0, Wt.e)("inventory", (tt => {
        let {
          player: et
        } = tt;
        var Ot, qt, Dt;
        (Gt.update(et, !Vt && De.shown), Ut.current) && (Ut.current = (qt = Ut.current, Dt = null !== (Ot = et[Ut.current.idx]) && void 0 !== Ot ? Ot : null, kO(qt, Dt) ? (qt.attributes = Dt.attributes, null !== Dt.amount && qt.amount > Dt.amount && (qt.amount = Dt.amount), qt) : null));
        st(), null !== Yt && Ve(Yt)(!0), xt()
      })), (0, qt.useEffect)((() => (Ht.gameBridge.send("setInventoryOpen", Vt), () => {
        Ht.gameBridge.send("setInventoryOpen", !1)
      })), [Vt]);
      const me = (tt, et) => {
        if (tt === lV.e) return void(tt => {
          const et = Ut.current;
          if (!et || null === (0, XV.l)(Ht.gameBridge.latest("inventory"), et.idx)) return;
          const Vt = tt ? Math.max(et.amount, 1) : 1,
            Ot = et.amount - Vt;
          if (!Ht.gameBridge.send("removeInventoryItem", {
              slot: et.idx,
              amount: Vt,
              drop: !0
            })) return;
          const qt = Ut.current;
          qt && (qt.amount = Math.min(qt.amount, Ot), qt.amount <= 0 && (Ut.current = null)), xt()
        })(et);
        const Vt = null === tt ? null : (0, XV.l)(Ht.gameBridge.latest("inventory"), tt);
        if (null !== Vt) {
          var Ot, qt, Dt;
          const mt = et && null !== (Ot = Vt.amount) && void 0 !== Ot ? Ot : 1;
          Ht.gameBridge.send("removeInventoryItem", {
            slot: tt,
            amount: mt,
            drop: !0
          }), tt === (null === (qt = rt.current) || void 0 === qt ? void 0 : qt.idx) && (rt.current.amount -= mt, rt.current.amount <= 0 && Tt(), xt()), tt === (null === (Dt = Ut.current) || void 0 === Dt ? void 0 : Dt.idx) && (Ut.current = null, xt())
        }
      };
      (0, Wt.e)("inventoryDropRequested", (tt => {
        Vt && Yt !== lV.e && me(Yt, tt)
      }));
      const de = (tt, et) => {
        let Vt = et;
        if (et === lV.e) {
          if (!Ut.current) return;
          Vt = Ut.current.idx
        }
        const Ot = nt(tt, Vt);
        if (Ot && rt.current && (rt.current.idx === Vt ? rt.current.idx = tt : rt.current.idx === tt && (rt.current.idx = Vt)), Ot && et === lV.e) {
          const tt = (0, XV.l)(Ht.gameBridge.latest("inventory"), Vt);
          Ut.current = tt ? {
            idx: Vt,
            name: tt.name,
            attributes: tt.attributes,
            amount: (0, XV.e)(tt)
          } : null
        }
        xt()
      };
      (0, Wt.e)("numberKeyPressed", (tt => {
        null !== Yt && Vt && de(tt - 1, Yt)
      })), (0, qt.useEffect)((() => {
        Vt || (Ut.current = null, Tt(), Oe(null))
      }), [Vt, Tt, Oe, Ut]);
      const je = Ut.current;
      (0, qt.useEffect)((() => {
        Yt === lV.e && Ve(lV.e)(!0)
      }), [je, Yt, Ve]);
      const He = () => {
        gt(), st(), xt()
      };
      (0, Wt.e)("chestRefreshed", He), (0, Wt.e)("inventorySynced", He);
      const [Xe, Qe] = (0, qt.useState)(new Map), le = null !== (et = Xe.get(dt)) && void 0 !== et ? et : null, Ee = (tt, et) => {
        Qe((Vt => {
          const Ot = Vt.get(tt);
          return Ot && Ot.name === et.name && Ot.SX === et.SX ? Vt : new Map(Vt).set(tt, et)
        }))
      };
      (0, ht.f)("craftingRecipesEdited", (() => {
        xt()
      })), (0, ht.f)(YV.e, (tt => {
        let {
          variation: et,
          itemName: Vt
        } = tt;
        Ee(et, {
          name: Vt,
          SX: 0
        })
      }));
      const [fe, we] = (0, qt.useState)(null), [ye, Ne] = (0, qt.useState)(null);
      (0, Wt.e)("enchantingTableOpened", (tt => {
        let {
          position: et,
          blockName: Vt
        } = tt;
        we(et), Ne(Vt)
      }));
      const [ae, Me] = (0, qt.useState)(""), [be, Je] = (0, qt.useState)(null);
      (0, qt.useEffect)((() => {
        Vt && ct.current && (ct.current.scrollTop = Rt.current)
      }), [Vt]);
      return (tt => {
        const et = (0, qt.useRef)(tt);
        et.current = tt, (0, qt.useEffect)((() => {
          if (!tt.show) return;
          const Vt = (tt, Vt, Ot, qt) => {
              const {
                getPointerDownForIdx: Dt,
                getPointerUpForIdx: mt
              } = et.current;
              Dt(tt)(AO(Vt, Ot, qt)), mt(tt)(AO(Vt, Ot, qt))
            },
            Ot = {
              primary: (tt, et) => {
                Vt(tt, et, 0, !1)
              },
              secondary: (tt, et) => {
                Vt(tt, et, 2, !1)
              },
              quickMove: (tt, et) => {
                Vt(tt, et, 0, !0)
              },
              dropHeld: (tt, Vt) => {
                et.current.getPointerDownForIdx(lV.c)(AO(Vt, tt ? 0 : 2, !1))
              },
              dropSlot: (tt, Vt) => {
                et.current.dropFromIdx(tt, Vt)
              },
              swapWithHotbar: (tt, Vt) => {
                et.current.swapWithHotbar(tt, Vt)
              },
              cancel: () => {
                et.current.removeDraggedInfoRef()
              },
              isHolding: () => !!et.current.draggedInfoRef.current,
              hasItemAt: tt => {
                const {
                  draggedInfoRef: Vt,
                  specialItemRef: Ot
                } = et.current;
                if (tt === lV.e) return !!Ot.current;
                const qt = (0, XV.l)(Ht.gameBridge.latest("inventory"), tt);
                return !!qt && (0, WV.e)(tt, (0, XV.e)(qt), [Vt.current, Ot.current]).shown
              },
              hover: (tt, Vt) => {
                const {
                  moveFollowerTo: Ot,
                  getSetHovering: qt
                } = et.current;
                Ot(Vt.clientX, Vt.clientY), qt(null !== tt && void 0 !== tt ? tt : void 0)(null !== tt, void 0, {
                  pageX: Vt.clientX,
                  pageY: Vt.clientY
                })
              },
              moveTo: tt => {
                et.current.moveFollowerTo(tt.clientX, tt.clientY)
              },
              close: () => {
                et.current.close()
              }
            };
          return (0, qV.p)(Ot)
        }), [tt.show])
      })({
        show: Vt,
        close: It,
        draggedInfoRef: rt,
        specialItemRef: Ut,
        getPointerDownForIdx: te,
        getPointerUpForIdx: ee,
        getSetHovering: Ve,
        moveFollowerTo: qe,
        removeDraggedInfoRef: Tt,
        dropFromIdx: me,
        swapWithHotbar: de
      }), (0, qt.useEffect)((() => {
        ft.j.sw("inventoryDraggedItemUpdated", {
          draggedInfo: rt.current,
          specialItemInfo: Ut.current,
          setHovered: Ve,
          pointerDown: te,
          pointerUp: ee,
          variation: Zt ? dt : void 0,
          craftFlyAnims: Ct
        })
      })), (0, Xt.jsxs)(Lt.d, {
        show: Vt,
        style: {
          touchAction: Vt ? "none" : void 0
        },
        children: [rt.current && (0, Xt.jsx)(yV, {
          draggedInfo: rt.current,
          toAddRef: zt
        }), rt.current && pt && (0, Xt.jsx)(NV, {
          className: "DraggedInvenItemName",
          displayInfo: oO(rt.current),
          domRef: null
        }), !rt.current && Bt && (0, Xt.jsx)(NV, {
          displayInfo: Bt,
          domRef: At
        }), it.current && rt.current && (0, Xt.jsx)(aV, {
          info: it.current,
          draggedInfo: rt.current
        }), Ct.map((tt => (0, Xt.jsx)(QV.d, {
          anim: tt,
          onComplete: St
        }, tt.id))), (0, Xt.jsx)(mt.c, {
          show: Vt,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: It,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: te(lV.c),
          pointerUp: ee(lV.c),
          doGameplayStartStopOnShow: !0
        }), bt && (0, Xt.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, Xt.jsx)("div", {
            ref: Qt,
            className: "InventoryAdOuter",
            children: (0, Xt.jsx)(HV.c, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: Qt
              },
              verticalAlign: "start",
              showing: Vt && Et,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, Xt.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, Xt.jsxs)("div", {
              className: bV()("Inventory", {
                WithGameButtons: wt.length > 0,
                WithPanelButtons: yt,
                WideChestOpen: Mt
              }),
              children: [(0, Xt.jsx)("div", {
                className: "InventoryFiller"
              }), (0, Xt.jsx)(dV, {
                show: Vt,
                buttons: wt
              }), (0, Xt.jsxs)("div", {
                className: "InvenBody",
                children: [(0, Xt.jsx)(hO, {
                  variation: dt,
                  canCraft: Zt,
                  show: Vt,
                  creativeMounted: Jt,
                  specialItemRef: Ut,
                  draggedInfo: rt.current,
                  getSetHovering: Ve,
                  getPointerDownForIdx: te,
                  getPointerUpForIdx: ee,
                  enchantingTablePosition: fe,
                  enchantingTableBlockName: ye,
                  selectedCraftable: le,
                  dispatchSelectedCraftable: tt => {
                    Ee(dt, tt)
                  },
                  creativeScrollDiv: ct,
                  creativeSearchVal: ae,
                  setCreativeSearchVal: Me,
                  creativeCategory: be,
                  setCreativeCategory: Je,
                  onCraft: function(tt, et) {
                    let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (gt(), (tt || Vt.length > 0) && Kt((et => {
                        const Ot = [...et],
                          qt = et.filter((tt => "ingredient" === tt.kind)).length;
                        for (const tt of Vt.slice(0, Math.max(0, 24 - qt))) Ot.push({
                          id: (0, QV.e)(),
                          ...tt,
                          to: tt.to
                        });
                        return tt && Ot.push({
                          id: (0, QV.e)(),
                          ...tt,
                          to: (0, XV.g)(tt.jj)
                        }), Ot
                      })), null !== et) {
                      var Ot;
                      const tt = Ht.gameBridge.latest("inventory");
                      (0, vt.Kb)(null === (Ot = (0, XV.l)(tt, et)) || void 0 === Ot ? void 0 : Ot.name) ? te(et)({
                        button: 0,
                        shiftKey: !0
                      }): nt(et, tt.selectedSlot)
                    }
                  }
                }), (0, Xt.jsx)(PO, {
                  draggedInfo: rt.current,
                  specialItemInfo: Ut.current,
                  craftFlyAnims: Ct,
                  getSetHovering: Ve,
                  getPointerDownForIdx: te,
                  getPointerUpForIdx: ee,
                  variation: dt,
                  canCraft: Zt,
                  isNewSlot: tt => Ft.showNewItemIndicator && Gt.isNew(tt)
                })]
              })]
            }), (0, Xt.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, Xt.jsx)("div", {
                ref: lt,
                className: "InventoryAd",
                children: (0, Xt.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var BO = Vt(1543),
      pO = Vt(153);
    const xO = (0, qt.memo)((function(tt) {
      let {
        show: et,
        onOpen: Vt,
        onClose: Ot
      } = tt;
      const Dt = (0, qt.useRef)(0),
        dt = () => (0, BO.i)() && !(0, BO.o)() && Dt.current <= 2;
      et = dt() && et;
      const jt = () => {
        Dt.current++, Ot()
      };
      (0, ht.f)("ctrlCrouchWithoutFullscreen", (() => {
        dt() && Vt()
      })), (0, ht.f)("displaymodeFullscreenChange", (tt => {
        et && tt && jt()
      }));
      const Ht = "crazygames" === pO.siteUsed;
      return (0, Xt.jsx)(mt.c, {
        close: jt,
        escDoesExit: !0,
        show: et,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, Xt.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, Xt.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), Ht && (0, Xt.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, Xt.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, Xt.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!Ht && (0, Xt.jsx)(Et.m, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, BO.r)(), jt()
              },
              children: (0, Xt.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, Xt.jsx)(Et.G, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                jt()
              },
              children: (0, Xt.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var TO = Vt(3666),
      gO = Vt(3693),
      sO = Vt(1450),
      nO = Vt(3649),
      tq = Vt(1458),
      eq = Vt(36799),
      Vq = Vt(3655),
      Oq = Vt(3662);

    function qq(tt, et) {
      return (0, eq.e)(!0, tt, et) ? () => {
        !async function(tt) {
          await nO.e.refresh();
          const {
            data: et,
            failed: Vt
          } = nO.e.getState();
          if (null === et || Vt) return;
          const Ot = nO.e.getExclusion(tt);
          if ("blocked" === Ot) return;
          const qt = null === Ot;
          sO.NotificationProvider.showCustomPopup({
            body: et => {
              const Vt = Vt => ({
                text: Vq.j[Vt].text,
                onClick: () => {
                  et(), (0, Oq.i)(Vt, tt, null)
                }
              });
              return (0, Xt.jsx)(tq.l, {
                title: qt ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: tt
                  }
                },
                secondary: qt ? Vt("ignore") : void 0,
                confirm: Vt("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: et
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(tt)
      } : null
    }
    Vt(3676);
    const Dq = (0, qt.memo)((function(tt) {
      let {
        show: et,
        onOpen: Vt,
        onClose: Ot
      } = tt;
      const [Dt, dt] = (0, qt.useState)(""), [jt, Qt] = (0, qt.useState)(""), [lt, Et] = (0, qt.useState)(null), [ft, wt] = (0, qt.useState)(null), yt = (0, Wt.h)("hiddenPlayerNames"), Nt = {
        kind: "worldCodeLine",
        onSubmit: (tt, et) => {
          Ot(), Ht.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: ft,
            Ed: tt,
            details: et
          })
        }
      }, Mt = {
        kind: "player",
        shownPlayerName: (0, Ve.f)(Dt, yt),
        onSubmit: (tt, et) => {
          Ot(), (0, gO.b)({
            playerId: jt,
            playerName: Dt,
            chatMsgId: ft,
            policyId: tt,
            details: et,
            onAccepted: qq(Dt, yt)
          })
        }
      };
      return (0, ht.f)("OpenReportMenu", (tt => {
        let {
          playerEId: et,
          playerName: Ot,
          kX: qt,
          serverChatMsgId: Dt
        } = tt;
        Qt(et), dt(Ot), Et(qt), wt(Dt), Vt()
      })), (0, Xt.jsx)(mt.c, {
        show: et,
        close: Ot,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, Xt.jsx)("div", {
          className: "ReportPanel",
          children: et && (0, Xt.jsx)(TO.c, {
            reported: null === jt ? Nt : Mt,
            chatMessage: lt,
            inGame: !0,
            onCancel: Ot
          })
        })
      })
    }));
    var mq = Vt(37078),
      dq = Vt(3669);
    const jq = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      Hq = (0, qt.memo)((function(tt) {
        var et, Vt;
        let {
          show: Ot,
          onOpen: Dt,
          onClose: dt
        } = tt;
        const {
          t: jt
        } = (0, Tt.H)(), [Qt, lt] = (0, qt.useState)(null), [ft, wt] = (0, qt.useState)(0);
        (0, ht.f)("OpenDiscordReportBox", (tt => {
          Ht.gameBridge.send("requestDiscordReportKey", tt), lt(null), wt(0), Dt()
        })), (0, ht.f)("setDiscordReportKey", lt);
        const yt = Ot && null === Qt;
        (0, qt.useEffect)((() => {
          if (!yt) return;
          const tt = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), lt({
              Dm: null,
              dm: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(tt)
          }
        }), [yt]);
        const Nt = null !== (et = null === Qt || void 0 === Qt ? void 0 : Qt.Dm) && void 0 !== et ? et : null,
          Mt = null !== (Vt = null === Qt || void 0 === Qt ? void 0 : Qt.dm) && void 0 !== Vt ? Vt : null;
        return (0, Xt.jsx)(mt.c, {
          show: Ot,
          close: dt,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, Xt.jsx)("div", {
            className: "ReportPanel",
            children: (0, Xt.jsxs)(tq.l, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === Mt ? "report:discordReportDescription" : void 0,
              confirm: null === Mt ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(mq.d, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === Mt ? "general:cancel" : "general:ok",
                onClick: dt
              },
              padStartsOn: "cancel",
              children: [null !== Mt && (0, Xt.jsx)(dq.e, {
                children: jt(jq[Mt])
              }), null === Mt && (0, Xt.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, Xt.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== Nt && void 0 !== Nt ? Nt : jt("report:loadingReportKey")
                }), (0, Xt.jsx)(Et.f, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(Nt).catch((tt => {
                      console.error("Failed to copy report key:", tt)
                    })), wt(Date.now())
                  },
                  disabled: Date.now() - ft < 1e3 || !Nt,
                  children: Date.now() - ft < 1e3 ? jt("general:copied") : jt("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var Xq = Vt(1387);
    const Qq = {
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
      lq = (0, qt.memo)((function(tt) {
        let {
          show: et,
          onOpen: Vt,
          onClose: Ot
        } = tt;
        const [Dt, dt] = (0, qt.useState)(null), jt = (0, qt.useRef)(0), Qt = (0, qt.useRef)(null), {
          t: lt
        } = (0, Tt.H)();
        (0, ht.f)("EditCustomLobbyBlock", (tt => {
          let {
            pos: et
          } = tt;
          dt(et), null !== et && Vt(), Qt.current.scrollTo(0, jt.current)
        }));
        const Et = tt => {
          Ht.gameBridge.send("setCustomLobbyBlock", {
            pos: Dt,
            blockName: tt
          }), Ot()
        };
        return (0, Xt.jsx)(mt.c, {
          className: "CustomLobbyBlockEditorOuter",
          close: Ot,
          escDoesExit: !0,
          show: et,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, Xt.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: Qt,
            onScroll: () => {
              jt.current = Qt.current.scrollTop
            },
            children: (0, Xt.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(Qq).map((tt => {
                let [et, Vt] = tt;
                return (0, Xt.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, Xt.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: lt(et)
                  }), (0, Xt.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(Vt).map((tt => {
                      let [et, {
                        tooltip: Vt,
                        blocks: Ot
                      }] = tt;
                      return (0, Xt.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, Xt.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [lt(et), (0, Xt.jsx)(pt.c, {
                            hoverInfo: lt(Vt),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, Xt.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: Ot.map((tt => (0, Xt.jsx)(Eq, {
                            blockName: tt,
                            selectBlock: Et
                          }, tt)))
                        })]
                      }, et)
                    }))
                  })]
                }, et)
              }))
            })
          })
        })
      })),
      Eq = (0, qt.memo)((function(tt) {
        var et;
        let {
          blockName: Vt,
          selectBlock: Ot
        } = tt;
        const qt = (0, dO.b)(Vt),
          Dt = null !== (et = void 0 === qt ? void 0 : (0, mO.displayNameOf)(qt)) && void 0 !== et ? et : Vt,
          mt = void 0 === qt ? void 0 : (0, mO.descriptionOf)(qt);
        return (0, Xt.jsx)(pt.g, {
          tooltipInner: (0, Xt.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, Xt.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, Xt.jsx)(Kt.e, {
                text: Dt
              })
            }), mt && (0, Xt.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, Xt.jsx)(Kt.e, {
                text: mt
              })
            })]
          }),
          children: (0, Xt.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => Ot(Vt),
            children: (0, Xt.jsx)(mV.e, {
              itemName: Vt,
              amount: 1
            })
          })
        }, Vt)
      }));
    var fq = Vt(3081),
      wq = Vt(4328),
      yq = Vt(34412);

    function Nq() {
      const tt = (0, Wt.h)("itemInfo");
      return (0, qt.useMemo)((() => function(tt) {
        return {
          getDefaultItemStat(et, Vt) {
            var Ot;
            const qt = tt[et];
            return "description" === Vt ? null === qt || void 0 === qt ? void 0 : qt.description : null !== (Ot = null === qt || void 0 === qt ? void 0 : qt.displayName) && void 0 !== Ot ? Ot : et
          }
        }
      }(tt)), [tt])
    }
    const aq = (0, qt.memo)((function(tt) {
        var et, Vt, Ot, Dt, dt, jt, Ht, Qt, lt, Et, ft, wt, Nt, Mt, bt, Jt, Ct, ut, Kt, vt, Wt, St, ct;
        let {
          togglePointerLock: Rt,
          show: It,
          onOpen: Pt,
          onClose: Zt
        } = tt;
        const {
          t: Lt
        } = (0, Tt.H)(), Ft = Nq(), kt = (0, qt.useRef)(null), Gt = (0, qt.useRef)(wq.e.MobHungerLevel.Hungry), zt = (0, qt.useRef)(null), ot = (0, fq.c)(), rt = (0, qt.useRef)(null), Ut = (0, qt.useRef)(null), At = kt.current;
        (0, qt.useEffect)((() => {
          if (!It) return;
          const tt = yq.l.openPet(rt.current);
          return Ut.current = tt, () => {
            tt.close(), Ut.current = null
          }
        }), [It]), (0, qt.useEffect)((() => {
          It && At && Ut.current.show(function(tt) {
            var et;
            let {
              mobType: Vt,
              mobSettings: Ot
            } = tt;
            return {
              mobType: Vt,
              variation: null !== (et = Ot.variation) && void 0 !== et ? et : "default",
              metaInfo: Ot.metaInfo,
              tamed: !(0, MO.B)(Ot.ownerDbId)
            }
          }(At))
        }), [It, At]), (0, qt.useEffect)((() => {
          const tt = () => {
            var tt;
            const et = wq.e.getMobHungerLevel(null === (tt = kt.current) || void 0 === tt ? void 0 : tt.mobSettings.petInfo.lastFedAt);
            if (et !== Gt.current && (Gt.current = et, ot()), zt.current) {
              var Vt;
              const tt = Date.now(),
                et = wq.e.getNextStateAt(null === (Vt = kt.current) || void 0 === Vt ? void 0 : Vt.mobSettings.petInfo.lastFedAt);
              let Ot = Math.floor((et - tt) / 1e3),
                qt = "";
              if (Ot > 3600) {
                qt += Math.floor(Ot / 60 / 60).toString().padStart(2, "0"), qt += ":", Ot %= 3600
              }
              const Dt = Ot % 60;
              qt += Math.floor(Ot / 60).toString().padStart(2, "0"), qt += ":", qt += Dt.toString().padStart(2, "0"), zt.current.textContent = qt
            }
          };
          tt();
          const et = setInterval(tt, 250);
          return () => {
            clearInterval(et)
          }
        }), [At, ot]), (0, ht.f)("showPetUi", (tt => {
          let {
            mobType: et,
            mobSettings: Vt
          } = tt;
          kt.current = {
            mobType: et,
            mobSettings: Vt
          }, It || Pt()
        }));
        const it = null === (et = kt.current) || void 0 === et ? void 0 : et.mobSettings.health,
          Yt = null === (Vt = kt.current) || void 0 === Vt ? void 0 : Vt.mobSettings.maxHealth,
          Bt = wq.e.getFriendshipLevelInfo(null !== (Ot = null === (Dt = kt.current) || void 0 === Dt ? void 0 : Dt.mobSettings.petInfo.friendshipPoints) && void 0 !== Ot ? Ot : 0);
        return (0, Xt.jsx)(mt.c, {
          className: "PetUIOuter",
          close: Zt,
          escDoesExit: !0,
          show: It,
          togglePointerLock: Rt,
          forcePointerUnlock: It,
          globallyUniqueKey: "PetUI",
          children: (0, Xt.jsx)("div", {
            className: "PetUI",
            children: (0, Xt.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, Xt.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, Xt.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (dt = null === (jt = kt.current) || void 0 === jt ? void 0 : jt.mobSettings.name) && void 0 !== dt ? dt : "Your Pet"
                }), (0, Xt.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: rt
                })]
              }), (0, Xt.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, MO.B)(null === (Ht = kt.current) || void 0 === Ht ? void 0 : Ht.mobSettings.petInfo.friendshipPoints) && (0, Xt.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, Xt.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: Lt("mobAiPlugin:friendshipTitle")
                  }), (0, Xt.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: wq.e.getIconsFromFriendshipPoints(null !== (Qt = kt.current.mobSettings.petInfo.friendshipPoints) && void 0 !== Qt ? Qt : 0).map(((tt, et) => (0, Xt.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, Xt.jsx)(mV.e, {
                        itemName: tt,
                        amount: 1
                      })
                    }, et)))
                  }), (0, Xt.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, Xt.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, Xt.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${Bt.totalPointsForNextLevel>0?Math.max(Bt.pointsIntoCurrentLevel/Bt.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, Xt.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: Bt.totalPointsForNextLevel > 0 ? ` ${Math.ceil(Bt.pointsIntoCurrentLevel)}/${Math.ceil(Bt.totalPointsForNextLevel)}` : Math.ceil(Bt.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, Xt.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, Xt.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: Lt("mobAiPlugin:hungerTitle")
                  }), (0, Xt.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: wq.e.hungerLevelIcons[Gt.current].map(((tt, et) => (0, Xt.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, Xt.jsx)(mV.e, {
                        itemName: tt,
                        amount: 1
                      })
                    }, et)))
                  }), (0, Xt.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [Lt(wq.e.hungerLevelTranslations[Gt.current].translationKey), Gt.current !== wq.e.MobHungerLevel.Starving && !(0, MO.B)(null === (lt = kt.current) || void 0 === lt ? void 0 : lt.mobSettings.petInfo.lastFedAt) && (0, Xt.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [Lt("mobAiPlugin:nextFeedIn", {
                        state: Lt(wq.e.hungerLevelTranslations[Gt.current + 1].translationKey)
                      }), ":", " ", (0, Xt.jsx)("span", {
                        ref: zt
                      })]
                    })]
                  })]
                }), (0, Xt.jsx)(pt.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Xt.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Lt("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, Xt.jsxs)("div", {
                    className: bV()("PetUIQuickStatsItem", {
                      Disabled: (0, MO.B)(it) || (0, MO.B)(Yt)
                    }),
                    children: [(0, Xt.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Xt.jsx)(mV.e, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, Xt.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, MO.B)(it) || (0, MO.B)(Yt) ? "" : (0, Xt.jsxs)(Xt.Fragment, {
                        children: [Math.ceil(it), (0, Xt.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(Yt)]
                        })]
                      })
                    })]
                  })
                }), (0, Xt.jsx)(pt.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Xt.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Lt("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, Xt.jsxs)("div", {
                    className: bV()("PetUIQuickStatsItem", {
                      Disabled: (0, MO.B)(null === (Et = kt.current) || void 0 === Et ? void 0 : Et.mobSettings.attackDamage) || kt.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, Xt.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Xt.jsx)(mV.e, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, Xt.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (ft = kt.current) || void 0 === ft ? void 0 : ft.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, Xt.jsx)(pt.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Xt.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Lt("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, Xt.jsxs)("div", {
                    className: bV()("PetUIQuickStatsItem", {
                      Disabled: (0, MO.B)(null === (wt = kt.current) || void 0 === wt ? void 0 : wt.mobSettings.secondaryAttackDamage) || kt.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, Xt.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Xt.jsx)(mV.e, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, Xt.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Nt = kt.current) || void 0 === Nt ? void 0 : Nt.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, Xt.jsx)(pt.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Xt.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Lt("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, Xt.jsxs)("div", {
                    className: bV()("PetUIQuickStatsItem", {
                      Disabled: (0, MO.B)(null === (Mt = kt.current) || void 0 === Mt ? void 0 : Mt.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, Xt.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Xt.jsx)(mV.e, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, Xt.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (bt = null === (Jt = kt.current) || void 0 === Jt || null === (Ct = Jt.mobSettings.baseRunningSpeed) || void 0 === Ct ? void 0 : Ct.toFixed(2)) && void 0 !== bt ? bt : ""
                    })]
                  })
                }), (0, Xt.jsx)(pt.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Xt.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Lt("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, Xt.jsxs)("div", {
                    className: bV()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (ut = kt.current) || void 0 === ut ? void 0 : ut.mobSettings.metaInfo)
                    }),
                    children: [(0, Xt.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Xt.jsx)(mV.e, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, Xt.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (Kt = kt.current) || void 0 === Kt ? void 0 : Kt.mobSettings.metaInfo) ? (0, Xt.jsx)(yt.b, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, MO.B)(null === (vt = kt.current) || void 0 === vt ? void 0 : vt.mobSettings.tameInfo) && (0, Xt.jsxs)(Xt.Fragment, {
                  children: [(0, Xt.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, Xt.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Xt.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Xt.jsx)(bq, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: wq.e.feedTextColours[wq.e.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Xt.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, Xt.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: kt.current.mobSettings.petInfo.superlikedFoodKnown ? (0, Xt.jsx)(Mq, {
                            food: kt.current.mobSettings.petInfo.superlikedFood
                          }) : (0, Xt.jsx)(bq, {
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
                    }), (0, Xt.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Xt.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Xt.jsx)(bq, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: wq.e.feedTextColours[wq.e.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Xt.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Wt = kt.current.mobSettings.tameInfo.likedFoods) || void 0 === Wt ? void 0 : Wt.filter((tt => !kt.current.mobSettings.petInfo.superlikedFoodKnown || tt !== kt.current.mobSettings.petInfo.superlikedFood)).map((tt => (0, Xt.jsx)(Mq, {
                          food: tt
                        }, tt)))
                      })]
                    }), (0, Xt.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Xt.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Xt.jsx)(bq, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: wq.e.feedTextColours[wq.e.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Xt.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (St = kt.current.mobSettings.tameInfo.neutralFoods) || void 0 === St ? void 0 : St.map((tt => (0, Xt.jsx)(Mq, {
                          food: tt
                        }, tt)))
                      })]
                    }), (0, Xt.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Xt.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Xt.jsx)(bq, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: wq.e.feedTextColours[wq.e.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Xt.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (ct = kt.current.mobSettings.tameInfo.dislikedFoods) || void 0 === ct ? void 0 : ct.map((tt => (0, Xt.jsx)(Mq, {
                          food: tt
                        }, tt)))
                      })]
                    })]
                  }), kt.current.mobSettings.tameInfo.levelUpBonuses && (0, Xt.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: wq.e.MAX_LEVEL + 1
                    }).map(((tt, et) => {
                      const Vt = et;
                      if (0 === Vt) return null;
                      const Ot = kt.current.mobSettings.tameInfo.levelUpBonuses[Vt],
                        qt = wq.e.getBonusDisplayInfo(Ft, kt.current.mobSettings, kt.current.mobType, Ot);
                      return (0, Xt.jsxs)("div", {
                        className: bV()("PetUIFeedDropContainer", {
                          Selected: Vt === wq.e.getFriendshipLevelInfo(kt.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, Xt.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: Vt
                          }).map(((tt, et) => (0, Xt.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, Xt.jsx)(mV.e, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${Vt}-${et}`)))
                        }), (0, Xt.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: qt && (0, Xt.jsx)(bq, {
                            icon: qt.icon,
                            displayName: qt.displayName,
                            description: qt.description
                          })
                        })]
                      }, Vt)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      Mq = (0, qt.memo)((function(tt) {
        let {
          food: et,
          includeDescription: Vt = !1
        } = tt;
        const Ot = Nq(),
          qt = Ot.getDefaultItemStat(et, "displayName"),
          Dt = Ot.getDefaultItemStat(et, "description");
        return (0, Xt.jsx)(bq, {
          icon: et,
          displayName: qt,
          description: Vt ? Dt : null
        })
      })),
      bq = (0, qt.memo)((function(tt) {
        let {
          icon: et,
          displayName: Vt,
          description: Ot,
          tintColor: qt,
          className: Dt = "PetUIFoodItem"
        } = tt;
        return (0, Xt.jsx)(pt.g, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, Xt.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, Xt.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, Xt.jsx)(Kt.e, {
                text: Vt
              })
            }), Ot && (0, Xt.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, Xt.jsx)(Kt.e, {
                text: Ot
              })
            })]
          }),
          children: (0, Xt.jsx)("div", {
            className: Dt,
            children: (0, Xt.jsx)(mV.e, {
              itemName: et,
              amount: 1,
              tintColor: qt
            })
          })
        })
      }));
    var Jq = Vt(3820),
      Cq = Vt(1223),
      uq = Vt(1325),
      Kq = Vt(2495),
      hq = Vt(37093),
      vq = Vt(1103),
      Wq = Vt(2435);

    function Sq(tt) {
      let {
        peers: et
      } = tt;
      const [Vt, Ot] = (0, qt.useState)(null), Dt = (0, Wt.h)("players");
      return (0, Xt.jsx)("div", {
        className: "CodeEditorPresence",
        children: et.map((tt => {
          var et, qt;
          const mt = null !== (et = null === (qt = Dt.byId[tt.playerId]) || void 0 === qt ? void 0 : qt.cosmetics) && void 0 !== et ? et : {};
          return (0, Xt.jsxs)("div", {
            className: bV()("PresenceIcon", {
              Viewer: !tt.isEditor
            }),
            style: {
              backgroundColor: tt.colour
            },
            onMouseEnter: () => {
              Ot(tt.playerId)
            },
            onMouseLeave: () => {
              Ot(null)
            },
            children: [(0, Xt.jsx)(Wq.c, {
              cosmetics: mt
            }), Vt === tt.playerId && (0, Xt.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: tt.colour
              },
              children: tt.playerName
            })]
          }, tt.playerId)
        }))
      })
    }
    var cq = Vt(736),
      Rq = Vt(37084),
      Iq = Vt(36794),
      Pq = Vt(37096);

    function Zq(tt) {
      const et = tt.split("/"),
        Vt = [];
      for (let Ot = 1; Ot < et.length; Ot++) Vt.push(et.slice(0, Ot).join("/"));
      return Vt
    }

    function Lq(tt) {
      return tt.slice(tt.lastIndexOf("/") + 1)
    }
    const Fq = (0, qt.memo)((function(tt) {
      var et;
      let {
        files: Vt,
        activePath: Ot,
        canEdit: Dt,
        directoryLinked: mt,
        pluginNames: dt,
        activePluginName: jt,
        activePluginFile: Ht,
        onSelect: Qt,
        onSelectPlugin: lt,
        onCreate: ft,
        onRename: wt,
        onRenameFolder: Nt,
        onDelete: Mt,
        onToggleDirectorySync: bt,
        schematics: Jt,
        onManageSchematic: Ct
      } = tt;
      const {
        t: ut
      } = (0, Tt.H)(), Kt = null !== (et = (0, hq.d)(Vt)) && void 0 !== et ? et : uq.k, ht = Object.keys(Vt), [vt, Wt] = (0, qt.useState)((() => new Set)), St = function(tt, et, Vt) {
        const Ot = {
          folders: new Map,
          files: []
        };
        for (const mt of tt) {
          if (mt === et) continue;
          let tt = Ot;
          for (const et of Zq(mt)) {
            let Vt = tt.folders.get(et);
            Vt || (Vt = {
              folders: new Map,
              files: []
            }, tt.folders.set(et, Vt)), tt = Vt
          }
          tt.files.push(mt)
        }
        const qt = [];
        tt.includes(et) && qt.push({
          kind: "file",
          path: et,
          name: Lq(et),
          depth: 0
        });
        const Dt = (tt, et) => {
          const Ot = [...tt.folders.entries()].sort(((tt, et) => {
            let [Vt] = tt, [Ot] = et;
            return Vt.localeCompare(Ot)
          }));
          for (const [mt, dt] of Ot) {
            const tt = Vt.has(mt);
            qt.push({
              kind: "folder",
              path: mt,
              name: Lq(mt),
              depth: et,
              collapsed: tt
            }), tt || Dt(dt, et + 1)
          }
          tt.files.sort(((tt, et) => tt.localeCompare(et)));
          for (const Vt of tt.files) qt.push({
            kind: "file",
            path: Vt,
            name: Lq(Vt),
            depth: et
          })
        };
        return Dt(Ot, 0), qt
      }(ht, Kt, vt);
      (0, qt.useEffect)((() => {
        Wt((tt => {
          const et = new Set(tt);
          let Vt = !1;
          for (const qt of Zq(Ot)) Vt = et.delete(qt) || Vt;
          return Vt ? et : tt
        }))
      }), [Ot]);
      const ct = ht.length >= Ue.y,
        Rt = (tt, et) => {
          if (tt.length > Kq.w) return `Path must be at most ${Kq.w} characters`;
          if (!(0, Kq.v)(tt)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === tt) return "index.d.ts cannot be the world-code entry";
          const Ot = !!et && (0, hq.f)(et, tt);
          if (et && (0, hq.h)(et) && !Ot) return `Cannot rename ${et} (only swapping ${uq.k} and ${uq.n} is allowed)`;
          if (tt in Vt) return "A file with that path already exists";
          if ((0, hq.h)(tt) && !Ot) {
            if ((tt === uq.k ? uq.n : uq.k) in Vt) return `World code cannot have both ${uq.k} and ${uq.n}`
          }
          return null
        },
        It = tt => {
          sO.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === tt ? void 0 : `${tt}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: tt => Rt(tt)
          }).getResult().then((tt => {
            "notificationTornDown" !== tt && null !== tt && "submit" === tt.type && ft(tt.value)
          }))
        },
        Pt = tt => {
          sO.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: tt,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: et => et === tt ? "That is already the file's path" : Rt(et, tt)
          }).getResult().then((et => {
            "notificationTornDown" !== et && null !== et && "submit" === et.type && wt(tt, et.value)
          }))
        },
        Zt = tt => {
          const et = tt => tt.replace(/\/+$/, "");
          sO.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: tt,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: Vt => {
              const Ot = et(Vt);
              if (Ot === tt) return "That is already the folder's path";
              for (const [et, qt] of(0, hq.m)(ht, tt, Ot)) {
                const tt = Rt(qt, et);
                if (null !== tt) return tt
              }
              return null
            }
          }).getResult().then((Vt => {
            "notificationTornDown" !== Vt && null !== Vt && "submit" === Vt.type && Nt(tt, et(Vt.value))
          }))
        },
        Lt = tt => {
          sO.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: tt
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((et => {
            !0 === et && Mt(tt)
          }))
        };
      return (0, Xt.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, Xt.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, Xt.jsx)("span", {
            children: "Files"
          }), Dt && !ct && (0, Xt.jsx)(Et.s, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              It()
            },
            children: (0, Xt.jsx)(yt.b, {
              name: "plus"
            })
          })]
        }), (0, Xt.jsxs)("div", {
          className: "FileTreeList",
          children: [St.map((tt => {
            const et = tt.path;
            if ("folder" === tt.kind) return (0, Xt.jsx)(zq, {
              path: et,
              name: tt.name,
              depth: tt.depth,
              collapsed: tt.collapsed,
              onToggle: () => {
                var tt;
                tt = et, Wt((et => {
                  const Vt = new Set(et);
                  return Vt.delete(tt) || Vt.add(tt), Vt
                }))
              },
              canCreate: Dt && !ct,
              canRename: Dt,
              onCreate: It,
              onRename: Zt
            }, `folder:${et}`);
            const qt = (0, hq.h)(et),
              mt = uq.k in Vt && uq.n in Vt,
              dt = !qt || mt,
              Ht = null === jt && et === Ot;
            return (0, Xt.jsx)(rq, {
              path: et,
              label: tt.name,
              depth: tt.depth,
              isActive: Ht,
              canRename: Dt,
              onSelect: Qt,
              onRename: Pt,
              onDelete: Lt,
              canDelete: dt && Dt
            }, et)
          })), (0, Xt.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, Xt.jsxs)("span", {
              children: ["Schematics (", Object.keys(Jt).length, "/", Pq.d, ")"]
            }), Dt && (0, Xt.jsx)(Et.s, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(Jt).length >= Pq.d,
              onClick: () => {
                Ct("")
              },
              children: (0, Xt.jsx)(yt.b, {
                name: "plus"
              })
            })]
          }), Object.keys(Jt).sort().map((tt => (0, Xt.jsx)(rq, {
            path: tt,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: Ct
          }, tt))), dt.length > 0 && (0, Xt.jsxs)(Xt.Fragment, {
            children: [(0, Xt.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, Xt.jsx)("span", {
                children: "Plugins"
              })
            }), dt.map((tt => {
              var et;
              const Vt = Rq.d[tt],
                Ot = Object.keys(null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.files) && void 0 !== et ? et : {
                  "index.ts": ""
                }).sort(((tt, et) => "index.ts" === tt ? -1 : "index.ts" === et ? 1 : tt.localeCompare(et)));
              return (0, Xt.jsxs)("div", {
                children: [(0, Xt.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, hq.q)(tt)
                }), Ot.map((et => (0, Xt.jsx)(rq, {
                  path: et,
                  nested: !0,
                  isActive: jt === tt && Ht === et,
                  canRename: !1,
                  onSelect: () => {
                    lt(tt, et)
                  },
                  canDelete: !1
                }, et)))]
              }, tt)
            }))]
          })]
        }), (0, Xt.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, Xt.jsx)(Et.f, {
            className: "FileTreeFooterButton",
            onClick: bt,
            children: ut(mt ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function kq(tt) {
      return tt > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": tt
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function Gq(tt) {
      let {
        depth: et
      } = tt;
      return (0, Xt.jsx)(Xt.Fragment, {
        children: Array.from({
          length: et
        }, ((tt, et) => (0, Xt.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": et
          }
        }, et)))
      })
    }

    function zq(tt) {
      let {
        path: et,
        name: Vt,
        depth: Ot,
        collapsed: qt,
        onToggle: Dt,
        canCreate: mt,
        canRename: dt,
        onCreate: jt,
        onRename: Ht
      } = tt;
      const Qt = [];
      mt && Qt.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          jt(et)
        }
      }), dt && Qt.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          Ht(et)
        }
      });
      const lt = kq(Ot);
      return (0, Xt.jsxs)("div", {
        className: bV()("FileTreeItem FileTreeFolder", lt.className),
        style: lt.style,
        children: [(0, Xt.jsx)(Gq, {
          depth: Ot
        }), (0, Xt.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !qt,
          onClick: Dt,
          children: [(0, Xt.jsx)(yt.b, {
            className: "FileTreeFolderCaret",
            name: qt ? "caret-right" : "caret-down"
          }), (0, Xt.jsx)(yt.b, {
            className: "FileTreeFolderIcon",
            name: qt ? "folder" : "folder-open"
          }), Vt]
        }), (0, Xt.jsx)(oq, {
          path: et,
          actions: Qt
        })]
      })
    }

    function oq(tt) {
      let {
        path: et,
        actions: Vt
      } = tt;
      const Ot = (0, qt.useRef)(null);
      return 0 === Vt.length ? null : (0, Xt.jsxs)("div", {
        ref: Ot,
        className: "FileTreeItemActions",
        children: [(0, Xt.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${et}`,
          children: (0, Xt.jsx)(yt.b, {
            name: "ellipsis"
          })
        }), (0, Xt.jsx)(Iq.e, {
          triggerElementRef: Ot,
          options: Vt
        })]
      })
    }

    function rq(tt) {
      let {
        path: et,
        label: Vt = et,
        depth: Ot = 0,
        isActive: qt,
        canRename: Dt,
        onSelect: mt,
        onRename: dt,
        onDelete: jt,
        canDelete: Ht,
        nested: Qt
      } = tt;
      const lt = [];
      Dt && dt && lt.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          dt(et)
        }
      }), Ht && jt && lt.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          jt(et)
        }
      });
      const Et = kq(Ot);
      return (0, Xt.jsxs)("div", {
        className: bV()("FileTreeItem", Et.className, {
          Active: qt,
          Nested: Qt
        }),
        style: Et.style,
        children: [(0, Xt.jsx)(Gq, {
          depth: Ot
        }), (0, Xt.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: Vt === et ? void 0 : et,
          onClick: () => {
            mt(et)
          },
          children: Vt
        }), (0, Xt.jsx)(oq, {
          path: et,
          actions: lt
        })]
      })
    }
    async function Uq(tt) {
      const et = (0, hq.d)(tt);
      if (!et || "" === tt[et].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: Ot
      } = await Promise.all([Vt.e(303), Vt.e(304)]).then((() => Vt(41728)));
      return (0, Rq.c)(Ot(tt))
    }
    var Aq = Vt(37104);

    function iq(tt, et) {
      const Vt = Object.keys(tt),
        Ot = Object.keys(et);
      if (Vt.length !== Ot.length) return !1;
      for (const qt of Vt)
        if (!(qt in et) || tt[qt] !== et[qt]) return !1;
      return !0
    }

    function Yq(tt, et) {
      const Vt = [],
        Ot = [],
        qt = [];
      for (const Dt of Object.keys(et)) Dt in tt ? tt[Dt] !== et[Dt] && qt.push(Dt) : Vt.push(Dt);
      for (const Dt of Object.keys(tt)) Dt in et || Ot.push(Dt);
      return Vt.sort(), Ot.sort(), qt.sort(), {
        creates: Vt,
        deletes: Ot,
        updates: qt
      }
    }

    function Bq(tt, et) {
      var Vt;
      const Ot = {
          ...tt
        },
        qt = (0, hq.d)(et),
        Dt = (0, hq.d)(Ot);
      if (uq.k in Ot && uq.n in Ot) {
        const tt = null !== qt && void 0 !== qt ? qt : uq.n,
          Vt = tt === uq.k ? uq.n : uq.k;
        var mt;
        if (!(tt in Ot)) Ot[tt] = null !== (mt = et[tt]) && void 0 !== mt ? mt : "";
        return delete Ot[Vt], Ot
      }
      var dt;
      return qt && !(qt in Ot) ? (Dt || (Ot[qt] = null !== (dt = et[qt]) && void 0 !== dt ? dt : ""), Ot) : (Dt || qt || (Ot[uq.k] = null !== (Vt = Ot[uq.k]) && void 0 !== Vt ? Vt : "", delete Ot[uq.n]), Ot)
    }

    function pq(tt, et) {
      const Vt = (0, hq.d)(et),
        Ot = uq.k in et && uq.n in et;
      return tt.filter((tt => !(0, hq.h)(tt) || (!!Ot || Vt !== tt)))
    }
    async function xq(tt, et, Ot) {
      const qt = tt.getLobbyFiles(),
        Dt = (0, Ue.i)(Ot, (0, hq.n)(qt, et)),
        mt = await tt.ensureJoined(et),
        dt = (0, Kq.y)(mt.docKey);
      if (mt.doc === Dt) return;
      for (let Vt = 0; Vt < 100; Vt++) {
        const Vt = tt.getCollabSnapshot();
        if (Vt && (0, Kq.y)(Vt.docKey) === dt && tt.getActivePath() === et) {
          if (tt.replaceActiveDoc(dt, Dt)) return;
          await (0, MO.G)(40)
        } else await (0, MO.G)(40)
      }
      const {
        ChangeSet: jt
      } = await Vt.e(299).then((() => Vt(41540))), Xt = tt.getCollabSnapshot(), Qt = Xt && (0, Kq.y)(Xt.docKey) === dt ? Xt : mt;
      await async function(tt, et, Vt, Ot) {
        const qt = tt.of({
            from: 0,
            to: Vt.length,
            insert: Ot
          }, Vt.length),
          Dt = JSON.stringify([{
            clientID: et.clientID,
            changes: qt.toJSON()
          }]),
          mt = (0, Kq.y)(et.docKey);
        Dt.length <= Kq.j ? Ht.gameBridge.send("sendCodeCollab", {
          mD: Kq.e.Push,
          dD: mt,
          jD: et.version,
          QD: Dt
        }) : await (0, Cq.postJsonWithMetricsCookiesAndJsonResponse)(`${et.httpConfig.gsUrl}/code/collab-push`, Jq.s["collab-push"].toBuffer({
          gameNameWithVariation: et.httpConfig.gameNameWithVariation,
          lobbyName: et.httpConfig.lobbyName,
          docKey: mt,
          version: et.version,
          updates: Dt
        }), {
          retries: 0
        })
      }(jt, Qt, Qt.doc, Dt)
    }
    class Tq {
      constructor(tt) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = tt
      }
      async writeLobbyFiles(tt) {
        const et = {
            ...this.bridge.getLobbyFiles()
          },
          Vt = {
            ...et
          };
        for (const {
            path: Dt,
            text: mt
          }
          of tt) Vt[Dt] = mt;
        if (!tt.every((tt => {
            let {
              path: et,
              text: Ot
            } = tt;
            return (0, Ue.i)(Ot, (0, hq.n)(Vt, et)) === Ot
          }))) return !1;
        const Ot = [];
        try {
          for (const {
              path: et,
              text: Vt
            }
            of tt) Ot.push(et), et in this.bridge.getLobbyFiles() || (this.bridge.createFile(et, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(et, !0)), await xq(this.bridge, et, Vt)
        } catch (qt) {
          for (const tt of Ot) tt in et ? await xq(this.bridge, tt, et[tt]).catch((et => {
            console.error("World Code AI: couldn't put back", tt, et)
          })) : this.bridge.deleteFile(tt);
          throw qt
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const tt = await (0, Aq.v)(this.bridge.getStorageKey());
        return !!tt && (this.handle = tt, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(tt), !0)
      }
      async unlinkFolder() {
        const tt = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, Aq.c)(tt), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const tt = this.bridge.getStorageKey(),
          et = await (0, Aq.t)(tt);
        return !!et && (!!await (0, Aq.g)(et, "readwrite") && (this.handle = et, this.linked = !0, await (0, Aq.G)(tt, et), await this.scaffoldLocalTypes(et), !0))
      }
      scaffoldLocalTypes(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const Ot = (await Uq(et)).map((tt => Rq.d[tt])),
              qt = Ot.map((tt => {
                var et;
                return `${tt.name}:${Object.keys(null!==(et=null===tt||void 0===tt?void 0:tt.files)&&void 0!==et?et:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === qt) return;
            const {
              ensureLocalBloxdTypes: Dt
            } = await Promise.all([Vt.e(85), Vt.e(301), Vt.e(306)]).then((() => Vt(41730)));
            await Dt(tt, Ot), this.scaffoldedPluginNamesKey = qt
          } catch (Ot) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", Ot)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(tt) {
        this.handle && await this.scaffoldLocalTypes(this.handle, tt), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(tt)
      }
      async onDocTextChanged(tt, et) {
        if (!this.handle) return;
        const Vt = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [tt]: et
        })];
        this.running && (this.pendingDocText.set(tt, et), Vt.push(this.flushDocTextToDisk())), await Promise.all(Vt)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const tt = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const et = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [Vt, Ot] of et) this.lastSynced[Vt] !== Ot && (await (0, Aq.O)(tt, Vt, Ot), this.lastSynced = {
              ...this.lastSynced,
              [Vt]: Ot
            })
          }
        } catch (et) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", et), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, Aq.z)(this.handle))
          } catch (tt) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", tt)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, Aq.g)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const et = this.bridge.getLobbyFiles(),
              Vt = await (0, Aq.z)(this.handle);
            for (const tt of Object.keys(et).filter(Pq.b)) {
              if (Vt[tt] === Aq.n) return void this.bridge.setMessage(`Move ${tt} outside the linked folder before syncing its placeholder.`, "warning");
              Vt[tt] = Pq.n
            }
            if (iq(Vt, et)) {
              for (const tt of Object.keys(et).filter(Pq.b)) await (0, Aq.O)(this.handle, tt, Pq.n);
              return this.lastSynced = {
                ...Vt
              }, void this.beginWatch()
            }
            const Ot = await this.promptReconcile(function(tt) {
              return null !== (0, hq.d)(tt)
            }(Vt));
            if ("unlink" === Ot) return void await this.unlinkFolder();
            if ("dismissed" === Ot) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === Ot) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(Vt);
                for (const tt of Object.keys(et).filter(Pq.b)) await (0, Aq.O)(this.handle, tt, Pq.n);
                this.lastSynced = {
                  ...await (0, Aq.z)(this.handle)
                }
              } else await (0, Aq.S)(this.handle, et), this.lastSynced = {
                ...et
              }
            } catch (tt) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", tt), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(tt) {
        return await new Promise((et => {
          const Vt = [{
              choice: "local",
              Button: Et.f,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: Et.f,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: Et.f,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            Ot = (0, Xt.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, Xt.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, Xt.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: tt ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, Xt.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: Vt.filter((et => "local" !== et.choice || tt)).map((tt => {
                  let {
                    choice: Vt,
                    Button: Ot,
                    labelKey: Dt,
                    descriptionKey: mt
                  } = tt;
                  return (0, Xt.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, Xt.jsx)(Ot, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (tt => {
                          qt.tearDownNotification(), et(tt)
                        })(Vt)
                      },
                      children: this.bridge.t(`codeEditor:${Dt}`)
                    }), (0, Xt.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${mt}`)
                    })]
                  }, Vt)
                }))
              })]
            }),
            qt = sO.NotificationProvider.showCustomPopup({
              body: Ot,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          qt.getResult().then((tt => {
            "notificationTornDown" === tt && et("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, Aq.K)(this.handle, (tt => {
          this.onDiskFilesChanged(tt)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (tt) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", tt)
        }
      }
      async onDiskFilesChanged(tt) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const et = this.bridge.getLobbyFiles();
        let Vt = Bq(tt, this.lastSynced);
        for (const Dt in et)
          if ((0, Pq.b)(Dt) && Vt[Dt] === Aq.n) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const Ot = Object.keys(Vt).filter((tt => (0, Pq.b)(tt) && !(tt in et)));
        Ot.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const Dt of Object.keys(et).filter(Pq.b))(Dt in Vt || Ot.length > 0 || !(Dt in this.lastSynced)) && (Vt[Dt] = Pq.n);
        if (!iq(Vt, tt)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(tt, Vt), Vt = Bq(await (0, Aq.z)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!iq(Vt, this.lastSynced)) {
          this.applying = !0;
          try {
            const tt = Yq(this.lastSynced, Vt);
            if (await this.pushDiskDeltaToLobby(Vt, et), null !== this.lastLobbySeen)
              for (const Vt of [...tt.creates, ...tt.updates, ...tt.deletes])(0, Pq.b)(Vt) || (Vt in et ? this.lastLobbySeen[Vt] = et[Vt] : delete this.lastLobbySeen[Vt]);
            this.lastSynced = {
              ...Vt
            }
          } catch (qt) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", qt), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(tt, et) {
        if (this.handle) {
          for (const Vt of Object.keys(tt)) Vt in et || await (0, Aq.D)(this.handle, Vt);
          for (const [Vt, Ot] of Object.entries(et)) tt[Vt] !== Ot && await (0, Aq.O)(this.handle, Vt, Ot)
        }
      }
      async applyRemoteTreeToDisk(tt) {
        if (!this.handle) return;
        const et = this.lastLobbySeen;
        if (null === et) return void(this.lastLobbySeen = {
          ...tt
        });
        const Vt = Object.keys(tt).filter((Vt => et[Vt] !== tt[Vt])),
          Ot = Object.keys(et).filter((et => !(et in tt)));
        if (0 !== Vt.length || 0 !== Ot.length) {
          this.applying = !0;
          try {
            for (const et of [...Ot, ...Vt]) try {
              if (et in tt) await (0, Aq.O)(this.handle, et, tt[et]), this.lastSynced = {
                ...this.lastSynced,
                [et]: tt[et]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [et]: tt[et]
              };
              else {
                await (0, Aq.D)(this.handle, et);
                const tt = {
                  ...this.lastSynced
                };
                delete tt[et], this.lastSynced = tt;
                const Vt = {
                  ...this.lastLobbySeen
                };
                delete Vt[et], this.lastLobbySeen = Vt
              }
            } catch (qt) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", qt), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(tt, et) {
        const Vt = function(tt, et) {
          const Vt = (0, hq.d)(tt),
            Ot = (0, hq.d)(et);
          return Vt && Ot && Vt !== Ot ? {
            from: Vt,
            to: Ot
          } : null
        }(tt, et);
        return !!Vt && (this.bridge.renameFile(Vt.from, Vt.to), await this.bridge.waitForLobbyPath(Vt.to, !0), !0)
      }
      async applyLocalTreeToLobby(tt) {
        var et;
        const Vt = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), tt);
        const Ot = this.bridge.getLobbyFiles(),
          qt = Yq(Ot, tt),
          Dt = pq(qt.deletes, Ot);
        for (const Ht of qt.creates)(0, Pq.b)(Ht) || (this.bridge.createFile(Ht, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Ht, !0));
        for (const Ht of Dt)(0, Pq.b)(Ht) || (this.bridge.deleteFile(Ht), await this.bridge.waitForLobbyPath(Ht, !1));
        if (!(0, hq.d)(this.bridge.getLobbyFiles()) && !(0, hq.d)(tt)) {
          if (this.bridge.createFile(uq.k, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(uq.k, !0), !this.handle) return;
          await (0, Aq.O)(this.handle, uq.k, ""), tt = {
            ...tt,
            [uq.k]: ""
          }
        }
        const mt = this.bridge.getLobbyFiles();
        for (const Ht of Object.keys(tt))(0, Pq.b)(Ht) || mt[Ht] !== tt[Ht] && await xq(this.bridge, Ht, tt[Ht]);
        const dt = this.bridge.getLobbyFiles(),
          jt = Vt in dt ? Vt : null !== (et = (0, hq.d)(dt)) && void 0 !== et ? et : uq.k;
        await this.bridge.ensureJoined(jt)
      }
      async pushDiskDeltaToLobby(tt, et) {
        const Vt = this.bridge.getActivePath(),
          Ot = await this.renameLobbyEntryIfSwitched(et, tt) ? this.bridge.getLobbyFiles() : et,
          qt = Yq(this.lastSynced, tt),
          Dt = pq(qt.deletes, Ot).filter((tt => tt in Ot));
        for (const mt of qt.creates)(0, Pq.b)(mt) || (mt in this.bridge.getLobbyFiles() || (this.bridge.createFile(mt, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(mt, !0)), await xq(this.bridge, mt, tt[mt]));
        for (const mt of Dt)(0, Pq.b)(mt) ? await this.bridge.deleteSchematic(mt) : (this.bridge.deleteFile(mt), await this.bridge.waitForLobbyPath(mt, !1));
        for (const mt of qt.updates)(0, Pq.b)(mt) || await xq(this.bridge, mt, tt[mt]);
        Vt in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== Vt && await this.bridge.ensureJoined(Vt)
      }
    }
    var gq = Vt(1293);

    function sq() {
      const {
        websocketUrl: tt,
        gameNameWithVariation: et,
        lobbyName: Vt
      } = Ht.gameBridge.latest("connectedGame");
      return {
        gsUrl: gq.clientSideServerUrls.getHttpUrlFromWebSocketUrl(tt),
        gameNameWithVariation: et,
        lobbyName: Vt
      }
    }
    async function nq(tt) {
      const {
        gsUrl: et,
        gameNameWithVariation: Vt,
        lobbyName: Ot
      } = sq();
      return await (0, Cq.postBinaryWithMetricsCookiesAndCustomResponse)(`${et}/code/schematics`, Jq.fk.schematics.toBuffer({
        gameNameWithVariation: Vt,
        lobbyName: Ot,
        request: JSON.stringify(tt)
      }), {
        retries: 0
      }, Cq.HttpPayloadType.json)
    }
    var tD = Vt(36569);

    function eD(tt) {
      let {
        path: et,
        revision: Vt
      } = tt;
      const [Ot, Dt] = (0, qt.useState)(""), [mt, dt] = (0, qt.useState)(!1), [jt, Ht] = (0, qt.useState)(0);
      return (0, qt.useEffect)((() => {
        let tt = !1;
        return Dt(""), dt(!1), nq({
          action: "preview",
          path: et
        }).then((et => {
          tt || Dt(`data:image/webp;base64,${et.previewBase64}`)
        })).catch((et => {
          console.error("Could not load schematic preview", et), tt || dt(!0)
        })), () => {
          tt = !0
        }
      }), [et, Vt, jt]), (0, Xt.jsxs)("div", {
        className: "SchematicPreview",
        children: [Ot && (0, Xt.jsx)("img", {
          src: Ot,
          alt: `Preview of ${et}`
        }), !Ot && !mt && (0, Xt.jsx)(St.b, {
          loaderType: "Secondary"
        }), mt && (0, Xt.jsxs)(Xt.Fragment, {
          children: [(0, Xt.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, Xt.jsx)(Et.f, {
            onClick: () => {
              Ht(jt + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var VD = Vt(3207);

    function OD(tt) {
      var et;
      let {
        initialPath: Vt,
        onChanged: Ot,
        onClose: Dt
      } = tt;
      const mt = "" === Vt,
        [dt, jt] = (0, qt.useState)(null),
        [Ht, Qt] = (0, qt.useState)(Vt),
        [lt, ft] = (0, qt.useState)(!1),
        [wt, yt] = (0, qt.useState)(!1),
        [Nt, Mt] = (0, qt.useState)(null),
        [bt, Jt] = (0, qt.useState)(!1),
        [Ct, ut] = (0, qt.useState)(""),
        Kt = (0, qt.useRef)(null),
        ht = (0, qt.useRef)(!1),
        vt = (0, qt.useRef)(!0);
      (0, qt.useEffect)((() => (vt.current = !0, nq({
        action: "state"
      }).then((tt => {
        vt.current && jt(tt)
      })).catch((tt => {
        console.error("Could not load schematic assets", tt), vt.current && ut("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        vt.current = !1
      })), []);
      const Wt = null === dt || void 0 === dt ? void 0 : dt.assets[Vt],
        St = Object.keys(null !== (et = null === dt || void 0 === dt ? void 0 : dt.assets) && void 0 !== et ? et : {}).length,
        ct = Ht.trim(),
        Rt = ct ? (0, Pq.b)(ct) ? null !== dt && void 0 !== dt && dt.assets[ct] && (mt || ct !== Vt) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        It = !!ct && !Rt && (mt ? St < Pq.d : ct !== Vt),
        Pt = bt || !dt;
      async function Zt(tt) {
        if (!ht.current && vt.current) {
          ht.current = !0, Jt(!0), ut("");
          try {
            const et = await nq({
              ...tt,
              expectedRevision: dt.revision
            });
            Ot(et), vt.current && Dt()
          } catch (Vt) {
            var et;
            if (console.error("Schematic asset operation failed", Vt), vt.current) ut(Vt instanceof Yt.e ? null !== (et = Vt.errorMessageForUser) && void 0 !== et ? et : Vt.message : String(Vt));
            try {
              const tt = await nq({
                action: "state"
              });
              Ot(tt), vt.current && jt(tt)
            } catch (qt) {
              console.error("Could not refresh schematic assets", qt)
            }
          } finally {
            ht.current = !1, vt.current && Jt(!1)
          }
        }
      }
      return (0, Xt.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, Xt.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: mt ? "New schematic" : lt ? "Rename schematic" : "Schematic"
        }), Ct && (0, Xt.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: Ct
        }), !dt && !Ct && (0, Xt.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, Xt.jsxs)("fieldset", {
          disabled: Pt,
          children: [mt || lt ? (0, Xt.jsxs)("label", {
            className: "SchematicField",
            children: [(0, Xt.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, Xt.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, Xt.jsx)(LV.d, {
                className: "InputGenericPopupInput",
                defaultValue: Vt,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: Qt
              }, lt ? "rename" : "create")
            })]
          }) : (0, Xt.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: Vt
          }), (mt || lt) && Rt && (0, Xt.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: Rt
          }), mt ? (0, Xt.jsxs)(Xt.Fragment, {
            children: [St >= Pq.d && (0, Xt.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", Pq.d, " maximum)."]
            }), wt ? (0, Xt.jsxs)(Xt.Fragment, {
              children: [(0, Xt.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, Xt.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": Pt || !It,
                children: (0, Xt.jsx)(tD.e, {
                  loading: null === Nt,
                  schematics: null !== Nt && void 0 !== Nt ? Nt : [],
                  disableAutoExport: !0,
                  onSchematicPicked: tt => {
                    !Pt && It && Zt({
                      action: "profile",
                      path: ct,
                      schematicId: tt.schematicId
                    })
                  }
                })
              }), (0, Xt.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, Xt.jsx)(Et.f, {
                  className: "InputGenericPopupButton",
                  disabled: Pt,
                  onClick: () => {
                    yt(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, Xt.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, Xt.jsx)(Et.f, {
                className: "InputGenericPopupButton",
                disabled: Pt || !It,
                onClick: () => {
                  (0, VD.f)(Kt.current)
                },
                children: "Upload Schematic"
              }), (0, Xt.jsx)(Et.f, {
                className: "InputGenericPopupButton",
                disabled: Pt || !It,
                onClick: () => {
                  !async function() {
                    if (yt(!0), ut(""), !Nt) try {
                      const tt = await (0, Cq.postJsonWithMetricsCookiesAndJsonResponse)(`${gq.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      vt.current && Mt(tt)
                    } catch (tt) {
                      console.error("Could not load profile schematics", tt), vt.current && (yt(!1), ut("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, Xt.jsx)("input", {
              ref: Kt,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: tt => {
                var et;
                const Vt = null === (et = tt.target.files) || void 0 === et ? void 0 : et[0];
                if (tt.target.value = "", !Vt) return;
                if (Vt.size > Pq.h) return void ut("The schematic file is too large.");
                const Ot = ct;
                Jt(!0);
                const qt = new FileReader;
                qt.onload = () => {
                  Zt({
                    action: "upload",
                    path: Ot,
                    base64: String(qt.result).split(",")[1]
                  })
                }, qt.onerror = () => {
                  console.error("Could not read schematic file", qt.error), vt.current && (Jt(!1), ut("Could not read the selected file."))
                }, qt.readAsDataURL(Vt)
              }
            })]
          }) : Wt ? (0, Xt.jsxs)(Xt.Fragment, {
            children: [!lt && (0, Xt.jsx)(eD, {
              path: Vt,
              revision: dt.revision
            }), !lt && (0, Xt.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(Wt.byteSize / 1024), " KB \xb7 ", Wt.dimensions.join(" \xd7 "), " blocks"]
            }), (0, Xt.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: lt ? (0, Xt.jsxs)(Xt.Fragment, {
                children: [(0, Xt.jsx)(Et.f, {
                  className: "InputGenericPopupButton",
                  disabled: Pt || !It,
                  onClick: () => {
                    Zt({
                      action: "rename",
                      path: Vt,
                      newPath: ct
                    })
                  },
                  children: "Rename"
                }), (0, Xt.jsx)(Et.f, {
                  className: "InputGenericPopupButton",
                  disabled: Pt,
                  onClick: () => {
                    ft(!1), Qt(Vt)
                  },
                  children: "Cancel"
                })]
              }) : (0, Xt.jsxs)(Xt.Fragment, {
                children: [(0, Xt.jsx)(Et.f, {
                  className: "InputGenericPopupButton",
                  disabled: Pt,
                  onClick: () => {
                    ft(!0)
                  },
                  children: "Rename"
                }), (0, Xt.jsx)(Et.G, {
                  className: "InputGenericPopupButton",
                  disabled: Pt,
                  onClick: () => {
                    Zt({
                      action: "remove",
                      path: Vt
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : dt && (0, Xt.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function qD(tt) {
      if ("string" !== typeof tt) return null;
      try {
        const et = JSON.parse(tt);
        return (0, hq.k)(null === et || void 0 === et ? void 0 : et.worldCodeEngine) && "boolean" === typeof et.engineLocked && function(tt) {
          if (null === tt) return !0;
          const et = null === tt || void 0 === tt ? void 0 : tt.location;
          return "string" === typeof(null === tt || void 0 === tt ? void 0 : tt.reason) && (null === et || "string" === typeof(null === et || void 0 === et ? void 0 : et.path) && Number.isInteger(et.line))
        }(et.fallback) ? et : (console.error("[CodeCollab] Malformed engine settings", tt), null)
      } catch (et) {
        return console.error("[CodeCollab] Failed to parse engine settings", et), null
      }
    }

    function DD(tt) {
      let {
        fallback: et,
        onGoToLine: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Tt.H)(), {
        location: qt
      } = et;
      return (0, Xt.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [Ot("codeEditorEngine:notice", {
          reason: et.reason
        }), qt && (0, Xt.jsxs)(Xt.Fragment, {
          children: [" ", (0, Xt.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              Vt(qt.path, qt.line)
            },
            children: Ot("codeEditorEngine:goToLine", {
              line: String(qt.line)
            })
          })]
        })]
      })
    }
    var mD = Vt(5104),
      dD = Vt(4475),
      jD = Vt(37107);

    function HD(tt) {
      let {
        label: et,
        hint: Vt,
        checked: Ot,
        onChange: qt
      } = tt;
      return (0, Xt.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, Xt.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, Xt.jsx)("span", {
            children: et
          }), (0, Xt.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: Vt
          })]
        }), (0, Xt.jsx)("span", {
          className: "SwitchContainer",
          children: (0, Xt.jsx)(dD.b, {
            className: "SwitchCheckbox",
            checked: Ot,
            onChange: tt => {
              qt(tt.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function XD(tt) {
      let {
        engine: et,
        onSetEngine: Vt,
        aiHints: Ot,
        variation: qt
      } = tt;
      const {
        t: Dt
      } = (0, Tt.H)(), [mt, dt] = (0, jD.j)(jD.d);
      return (0, Xt.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, Xt.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: Dt("codeEditor:moreOptions")
        }), et && (0, Xt.jsx)(HD, {
          label: Dt("codeEditorEngine:toggle"),
          hint: Dt("codeEditorEngine:toggleHint"),
          checked: "ses" === et,
          onChange: tt => {
            Vt(tt ? "ses" : "quickjs")
          }
        }), Ot && (0, Xt.jsx)(HD, {
          label: Dt("codeEditorAiHints:toggle"),
          hint: Dt("codeEditorAiHints:toggleHint"),
          checked: Ot.shown,
          onChange: Ot.setShown
        }), Ot && jD.d.canChange && (0, Xt.jsx)(HD, {
          label: Dt("codeEditorAiKeySafetyCheck:toggle"),
          hint: Dt("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: mt,
          onChange: tt => {
            tt ? dt(!0) : sO.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((tt => {
              !0 === tt && dt(!1)
            }))
          }
        }), qt && (0, Xt.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, Xt.jsx)(mD.i, {
            label: "codeEditor:variationLabel",
            children: (0, Xt.jsx)(LV.d, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: qt.name,
              onValueChange: qt.setName,
              onEnter: qt.reload
            })
          }), (0, Xt.jsx)(Et.w, {
            className: "CodeEditorButton",
            onClick: qt.reload,
            children: Dt("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var QD = Vt(37110),
      lD = Vt(37112);

    function ED(tt) {
      let {
        close: et
      } = tt;
      const {
        t: Vt
      } = (0, Tt.H)(), Ot = [{
        name: Vt("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: Vt("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: Vt("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, Xt.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, Xt.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Vt("codeEditor:tutorialsTitle")
        }), (0, Xt.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: Ot.map((tt => (0, Xt.jsx)(Et.f, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              et(), (0, lD.F)(tt.tutorial)
            },
            children: tt.name
          }, tt.tutorial)))
        })]
      })
    }
    var fD = Vt(129),
      wD = Vt(36788),
      yD = Vt(3695);
    const ND = (0, qt.forwardRef)((function(tt, et) {
      let {
        value: Vt,
        onChange: Ot,
        onSubmit: qt,
        placeholder: Dt,
        maxLength: mt,
        rows: dt = 2,
        allowNewLines: jt = !1,
        onKeyDown: Ht,
        before: Qt
      } = tt;
      const {
        t: lt
      } = (0, Tt.H)(), ft = "" !== Vt.trim(), wt = () => {
        ft && qt()
      };
      return (0, Xt.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [Qt, (0, Xt.jsx)("textarea", {
          ref: et,
          className: "PanelPromptInput",
          value: Vt,
          maxLength: mt,
          rows: dt,
          placeholder: Dt,
          spellCheck: !1,
          autoComplete: "off",
          onChange: tt => {
            Ot(jt ? tt.target.value : tt.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: tt => {
            tt.nativeEvent.isComposing || 229 === tt.nativeEvent.keyCode ? tt.stopPropagation() : "Escape" !== tt.key && (tt.stopPropagation(), null === Ht || void 0 === Ht || Ht(tt), tt.defaultPrevented || "Enter" !== tt.key || jt && tt.shiftKey || (tt.preventDefault(), wt()))
          }
        }), (0, Xt.jsx)(Et.f, {
          className: "PanelPromptSend",
          disabled: !ft,
          onClick: wt,
          ariaLabel: lt("codeEditorPanels:send"),
          children: (0, Xt.jsx)(yt.b, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function aD(tt) {
      let {
        inputRef: et
      } = tt;
      const {
        t: Vt
      } = (0, Tt.H)(), {
        messages: Ot,
        reportedPlayers: Dt,
        channel: mt
      } = (0, yD.k)(), [dt, jt] = (0, qt.useState)(""), Ht = (0, qt.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, Xt.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, Xt.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, Xt.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: Vt("codeEditorChat:title")
          })
        }), 0 === Ot.length ? (0, Xt.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: Vt("codeEditorChat:empty")
        }) : (0, Xt.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, Xt.jsx)(wD.d, {
            messages: Ot,
            reportedPlayers: Dt
          })
        }), (0, Xt.jsx)(ND, {
          ref: et,
          value: dt,
          onChange: jt,
          onSubmit: () => {
            (0, yD.h)(dt), jt(""), Ht.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: vt.gd,
          rows: 1,
          placeholder: mt ? Vt("touchOnly" === (0, fD.d)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: mt.channelName
          }) : Vt("codeEditorChat:placeholder"),
          before: mt && (0, Xt.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: mt.elementBgColor
            },
            onClick: () => {
              yD.d.selectNextChannel(), et.current.focus()
            },
            children: (0, Xt.jsx)(Kt.e, {
              text: mt.elementContent
            })
          }),
          onKeyDown: tt => {
            const et = dt === Ht.current.text;
            if ("ArrowUp" !== tt.key && "ArrowDown" !== tt.key || !et && "" !== dt) "Tab" === tt.key && !tt.shiftKey && mt && (tt.preventDefault(), yD.d.selectNextChannel());
            else {
              tt.preventDefault();
              const Vt = et ? Ht.current.stepsBack : 0;
              Ht.current = (0, yD.f)(Vt + ("ArrowUp" === tt.key ? 1 : -1)), jt(Ht.current.text)
            }
          }
        })]
      })
    }
    var MD = Vt(37115);

    function bD(tt) {
      return "expanded" === tt ? "always" : "shown" === tt ? "narrow" : void 0
    }

    function JD(tt) {
      var et;
      let {
        sQ: Vt,
        worldPanel: Ot,
        closeWorld: qt,
        aiShown: Dt,
        defaultWidth: mt,
        children: dt
      } = tt;
      const jt = "hidden" !== Vt;
      return (0, Xt.jsx)(MD.c, {
        side: "right",
        defaultSize: jt ? "max(18rem, 40%)" : mt,
        covers: null !== (et = bD(Vt)) && void 0 !== et ? et : Dt ? "narrow" : void 0,
        children: (0, Xt.jsxs)("div", {
          className: bV()("CodeEditorRightColumn", {
            WorldShown: jt,
            WorldExpanded: "expanded" === Vt
          }),
          children: [jt && (0, Xt.jsx)(MD.c, {
            side: "top",
            onClose: qt,
            children: Ot
          }), dt]
        })
      })
    }
    var CD = Vt(2066),
      uD = Vt(1213),
      KD = Vt(1397);
    class hD {
      constructor(tt, et, Vt) {
        this.measure = tt, this.apply = et, this.now = Vt, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var tt, et;
        return null !== (tt = null === (et = this.last) || void 0 === et ? void 0 : et.rect) && void 0 !== tt ? tt : null
      }
      sync() {
        const tt = function(tt) {
          const et = Math.round(tt.left),
            Vt = Math.round(tt.top);
          return {
            left: et,
            top: Vt,
            width: Math.round(tt.right) - et,
            height: Math.round(tt.bottom) - Vt
          }
        }(this.measure());
        if (tt.width <= 0 || tt.height <= 0) return;
        const et = this.now(),
          Vt = this.last;
        let Ot = {
          width: tt.width,
          height: tt.height
        };
        null === Vt || tt.width === Vt.rect.width && tt.height === Vt.rect.height || (this.resizing = et - this.resizedAt < 100, this.resizedAt = et);
        const qt = null !== Vt && this.resizing && et - this.resizedAt < 100 && (tt.width !== Vt.bufferSize.width || tt.height !== Vt.bufferSize.height);
        qt && (this.stretchedAt ??= et), qt && et - this.stretchedAt < 250 ? Ot = Vt.bufferSize : this.stretchedAt = null;
        const Dt = {
          rect: tt,
          bufferSize: Ot
        };
        var mt, dt;
        null !== Vt && (dt = Dt, (mt = Vt).rect.left === dt.rect.left && mt.rect.top === dt.rect.top && mt.rect.width === dt.rect.width && mt.rect.height === dt.rect.height && mt.bufferSize.width === dt.bufferSize.width && mt.bufferSize.height === dt.bufferSize.height) || (this.last = Dt, this.apply(Dt))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function vD(tt) {
      const {
        style: et
      } = document.documentElement;
      for (const [Vt, Ot] of [
          ["--worldViewLeft", null === tt || void 0 === tt ? void 0 : tt.left],
          ["--worldViewTop", null === tt || void 0 === tt ? void 0 : tt.top],
          ["--worldViewWidth", null === tt || void 0 === tt ? void 0 : tt.width],
          ["--worldViewHeight", null === tt || void 0 === tt ? void 0 : tt.height]
        ]) void 0 === Ot ? et.removeProperty(Vt) : et.setProperty(Vt, `${Ot}px`)
    }
    var WD = Vt(1826),
      SD = Vt(2078);

    function cD(tt, et) {
      (0, qt.useEffect)((() => {
        if (!tt) return;
        const Vt = tt => {
          var Vt;
          "Escape" === tt.key ? (tt.stopPropagation(), tt.preventDefault(), et()) : (Vt = tt.code, Object.entries(ie.r).some((tt => {
            let [et, Ot] = tt;
            const qt = SD.c[et];
            return qt.includes("ui") && !qt.includes("core") && Ot.includes(Vt)
          })) && !(0, WD.isTextEntry)(tt.target) && tt.preventDefault())
        };
        window.addEventListener("keydown", Vt, !0);
        const Ot = (0, rt.m)(et);
        return () => {
          window.removeEventListener("keydown", Vt, !0), Ot()
        }
      }), [tt, et])
    }

    function RD() {
      return (0, Xq.k)().some((tt => tt !== Xq.c))
    }

    function ID(tt, et) {
      return tt.map((tt => et ? String(tt) : tt.toFixed(1))).join(", ")
    }

    function PD(tt) {
      let {
        freeCamera: et,
        picking: Vt,
        hovered: Ot
      } = tt;
      const {
        t: Dt
      } = (0, Tt.H)(), mt = (0, qt.useRef)(null), dt = (0, qt.useRef)(null);
      return (0, qt.useEffect)((() => {
        const tt = (tt, et) => {
            tt.textContent !== et && (tt.textContent = et)
          },
          Vt = () => {
            const Vt = et ? Ht.gameBridge.lookup("freeCameraPos", null) : null;
            tt(mt.current, ID(null !== Vt && void 0 !== Vt ? Vt : Ht.gameBridge.lookup("localPos", null), !1));
            const Ot = Ht.gameBridge.lookup("targetedBlockPos", null);
            tt(dt.current, Ot ? ID(Ot, !0) : "-")
          };
        return Vt(), (0, KD.B)(Vt)
      }), [et]), (0, Xt.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, Xt.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Dt(et ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, Xt.jsx)("span", {
          ref: mt
        }), (0, Xt.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Dt("codeEditorWorld:lookingAt")
        }), (0, Xt.jsx)("span", {
          ref: dt,
          hidden: Vt
        }), Vt && (0, Xt.jsxs)(Xt.Fragment, {
          children: [(0, Xt.jsx)("span", {
            children: Ot ? ID(Ot.pos, !0) : "-"
          }), Ot && (0, Xt.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: Ot.name
          })]
        })]
      })
    }
    var ZD = Vt(37117),
      LD = Vt(1574);

    function FD(tt) {
      const et = tt.currentTarget.getBoundingClientRect();
      return {
        x: (tt.clientX - et.left) / et.width,
        y: (tt.clientY - et.top) / et.height
      }
    }

    function kD(tt) {
      const [et, Vt] = (0, qt.useState)(!1), [Ot, Dt] = (0, qt.useState)(null), mt = (0, qt.useRef)(null);
      (0, qt.useEffect)((() => {
        if (!et) return;
        let tt = null,
          Vt = null,
          Ot = 1 / 0;
        const qt = (0, KD.t)((et => {
          Ot += et;
          const qt = mt.current;
          if (qt === Vt && Ot < 100) return;
          Vt = qt, Ot = 0;
          const dt = qt && Ht.gameBridge.lookup("blockAtViewPoint", qt);
          var jt, Xt;
          (jt = dt) === (Xt = tt) || null !== jt && null !== Xt && jt.name === Xt.name && (0, ZD.d)(jt.pos, Xt.pos) && (0, ZD.d)(jt.normal, Xt.normal) || (tt = dt, Dt(dt), Ht.gameBridge.send("setBlockHighlight", dt))
        }));
        return () => {
          qt(), null !== tt && Ht.gameBridge.send("setBlockHighlight", null), Dt(null)
        }
      }), [et]);
      const dt = (0, qt.useCallback)((() => {
        Vt(!1)
      }), []);
      cD(et, dt);
      const jt = Ot => {
          if (!et) return;
          const qt = Ht.gameBridge.lookup("blockAtViewPoint", FD(Ot));
          null !== qt && (Vt(!1), tt(qt.pos))
        },
        Xt = et ? (0, LD.e)(jt, "pointerup") : null,
        Qt = {
          onPointerDown: tt => {
            null === Xt || void 0 === Xt || Xt.onPointerDown(tt)
          },
          onPointerMove: tt => {
            mt.current = FD(tt)
          },
          onPointerLeave: () => {
            mt.current = null
          },
          onPointerUp: null === Xt || void 0 === Xt ? void 0 : Xt.onPointerUp,
          onClick: tt => {
            "pointerType" in tt.nativeEvent && "touch" === tt.nativeEvent.pointerType || jt(tt)
          }
        };
      return {
        picking: et,
        setPicking: Vt,
        hovered: Ot,
        slotHandlers: Qt
      }
    }

    function GD(tt) {
      Ht.gameBridge.send("setFreeCameraMovesFly", tt)
    }

    function zD(tt) {
      let {
        shown: et,
        setShown: Vt,
        canInsertCode: Ot
      } = tt;
      const {
        t: Dt
      } = (0, Tt.H)(), {
        isTouchScreen: mt
      } = (0, ot.k)(["isTouchScreen"]), dt = (0, qt.useRef)(null), Ht = (0, qt.useCallback)((() => {
        var tt;
        null === (tt = dt.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === tt || tt.focus()
      }), []), {
        control: Qt,
        take: lt,
        release: wt,
        blocked: Nt
      } = function(tt) {
        const [et, Vt] = (0, qt.useState)("none"), Ot = (0, qt.useRef)("none"), [Dt, mt] = (0, qt.useState)(!1), dt = tt => {
          Ot.current = tt, Vt(tt)
        }, jt = (0, qt.useCallback)((() => {
          const et = Ot.current;
          "none" !== et && (dt("none"), (0, Xq.p)(Xq.c), "mouse" === et && tt())
        }), [tt]), Ht = (0, qt.useCallback)((tt => {
          RD() ? mt(!0) : (dt("mouse" === tt && "touchOnly" !== (0, fD.d)() ? "mouse" : "touch"), (0, Xq.m)(Xq.c))
        }), []);
        return (0, ht.f)("pointerLockUpdate", (tt => {
          tt && "touch" === Ot.current && "touchOnly" !== (0, fD.d)() ? dt("mouse") : tt || "mouse" !== Ot.current || jt()
        })), (0, qt.useEffect)((() => {
          if (!Dt) return;
          const tt = () => {
            RD() || mt(!1)
          };
          return tt(), (0, Xq.i)(tt)
        }), [Dt]), cD("none" !== et, jt), (0, qt.useEffect)((() => {
          if ("none" === et) return;
          const tt = tt => {
            (0, WD.isTextEntry)(tt.target) && jt()
          };
          return document.addEventListener("focusin", tt), () => {
            document.removeEventListener("focusin", tt)
          }
        }), [et, jt]), (0, qt.useEffect)((() => (document.addEventListener("pointerlockerror", jt), () => {
          document.removeEventListener("pointerlockerror", jt)
        })), [jt]), (0, qt.useEffect)((() => () => {
          "none" !== Ot.current && null !== ot.b.get("openInGameMenuName") && (0, Xq.p)(Xq.c)
        }), []), {
          control: et,
          take: Ht,
          release: jt,
          blocked: Dt
        }
      }(Ht), Mt = (0, uD.o)(MD.e);
      (0, qt.useEffect)((() => {
        "touch" !== Qt || "shown" !== et || Mt ? "none" === Qt && "expanded" === et && Vt("shown") : Vt("expanded")
      }), [Qt, Mt]),
      function(tt, et) {
        const Vt = (0, qt.useRef)(et);
        Vt.current = et;
        const Ot = (0, qt.useRef)(null);
        (0, qt.useLayoutEffect)((() => {
          const et = new hD((() => tt.current.getBoundingClientRect()), (tt => {
            var et;
            "none" !== Vt.current && vD(null !== (et = null === tt || void 0 === tt ? void 0 : tt.rect) && void 0 !== et ? et : null), (0, KD.I)().setGameView(tt)
          }), (() => performance.now()));
          Ot.current = et, et.sync();
          const qt = (0, KD.r)((() => {
            et.sync()
          }));
          return () => {
            qt(), ot.b.set({
              worldPanelHud: null
            }), et.stop()
          }
        }), [tt]), (0, qt.useLayoutEffect)((() => {
          Ot.current.sync(), vD("none" === et ? null : Ot.current.rect), ot.b.set({
            worldPanelHud: et
          })
        }), [et])
      }(dt, "touch" === Qt ? "touchControls" : "none");
      const {
        picking: bt,
        setPicking: Jt,
        hovered: Ct,
        slotHandlers: {
          onPointerDown: ut,
          ...Kt
        }
      } = kD((tt => {
        ft.j.sw("CodeEditorInsertText", {
          text: `[${tt.join(", ")}]`,
          focus: !mt
        }), (0, MD.e)() && Vt("hidden")
      })), vt = function() {
        const {
          allowed: tt,
          movesFly: et
        } = (0, Wt.h)("freeCamera"), Vt = (0, qt.useRef)(et), Ot = (0, qt.useRef)(et);
        return Ot.current !== et && (Ot.current = et, Vt.current = et), (0, qt.useEffect)((() => () => {
          Vt.current && GD(!1)
        }), []), {
          allowed: tt,
          on: et,
          toggle: () => {
            Vt.current = !et, GD(!et)
          }
        }
      }(), St = (0, jt.i)("hideCoordinates"), ct = (0, Wt.h)("localPlayerAlive"), Rt = !ct || Nt;
      (0, qt.useEffect)((() => {
        ct || wt()
      }), [ct, wt]), (0, qt.useEffect)((() => {
        !Rt && Ot || Jt(!1)
      }), [Rt, Ot, Jt]);
      const It = vt.on ? Et.m : Et.f,
        Pt = bt ? Et.m : Et.f;
      return (0, Xt.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, Xt.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, Xt.jsx)("span", {
            className: "WorldPanelTitle",
            children: Dt("codeEditorWorld:title")
          }), "touch" === Qt && !Mt && (0, Xt.jsx)(Et.f, {
            className: "WorldPanelButton",
            onClick: wt,
            children: Dt("codeEditorWorld:backToCode")
          }), !Rt && vt.allowed && !mt && (0, Xt.jsx)(pt.g, {
            tooltipInner: Dt("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, Xt.jsx)(It, {
              className: "WorldPanelButton",
              ariaPressed: vt.on,
              ariaLabel: Dt("codeEditorWorld:freeCamera"),
              onClick: vt.toggle,
              children: (0, Xt.jsx)(yt.b, {
                name: "video"
              })
            })
          }), !Rt && Ot && (0, Xt.jsx)(pt.g, {
            tooltipInner: Dt("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, Xt.jsxs)(Pt, {
              className: "WorldPanelButton",
              ariaPressed: bt,
              onClick: () => {
                wt(), Jt(!bt)
              },
              children: [(0, Xt.jsx)(yt.b, {
                name: "crosshairs"
              }), Dt("codeEditorWorld:pick")]
            })
          })]
        }), !St && (0, Xt.jsx)(PD, {
          freeCamera: vt.on,
          picking: bt,
          hovered: Ct
        }), (0, Xt.jsxs)("div", {
          ref: dt,
          className: bV()("WorldPanelSlot", {
            TouchControl: "touch" === Qt,
            Picking: bt
          }),
          onPointerDown: tt => {
            0 !== tt.button || Rt || bt || lt(tt.pointerType), ut(tt)
          },
          ...Kt,
          children: [!Rt && !bt && (0, Xt.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !Rt && "touch" !== Qt && (0, Xt.jsxs)("div", {
            className: "WorldPanelHint",
            children: [bt && Dt(mt ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !bt && "none" === Qt && !vt.on && Dt(mt ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !bt && "none" === Qt && vt.on && Dt("codeEditorWorld:clickToFly"), "mouse" === Qt && (0, Xt.jsxs)(Xt.Fragment, {
              children: [(0, Xt.jsx)(CD.d, {
                noaAction: "OpenLobbyLeaderboard"
              }), Dt("codeEditorWorld:backToCode")]
            })]
          }), Rt && (0, Xt.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, Xt.jsx)("span", {
              children: Dt(ct ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, Xt.jsx)(Et.f, {
              onClick: rt.f,
              children: Dt("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var oD = Vt(5186);

    function rD(tt) {
      let {
        sQ: et,
        setWorld: Vt,
        toggleWorld: Ot,
        aiShown: qt,
        closeAi: Dt
      } = tt;
      const {
        t: mt
      } = (0, Tt.H)(), dt = qt ? "ai" : "hidden" !== et ? "world" : "code", jt = [{
        value: "code",
        label: mt("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: mt("codeEditorWorld:title")
      }];
      qt && jt.push({
        value: "ai",
        label: mt("codeEditorWorld:aiPane")
      });
      return (0, Xt.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, Xt.jsx)(oD.c, {
          options: jt,
          value: dt,
          onChange: tt => {
            "world" !== tt ? (qt && Dt(), Vt("hidden")) : "hidden" === et ? Ot() : Dt()
          },
          ariaLabel: mt("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var UD = Vt(37126),
      AD = Vt(37133),
      iD = Vt(37140),
      YD = Vt(37146);
    const BD = (0, qt.lazy)((() => Promise.all([Vt.e(303), Vt.e(299), Vt.e(302), Vt.e(298), Vt.e(85), Vt.e(301), Vt.e(300), Vt.e(297)]).then((() => Vt(41525))))),
      pD = (0, qt.lazy)((() => Promise.all([Vt.e(80), Vt.e(83), Vt.e(84), Vt.e(82), Vt.e(305)]).then((() => Vt(41711))))),
      xD = (0, qt.lazy)((() => Promise.all([Vt.e(303), Vt.e(302), Vt.e(85), Vt.e(83), Vt.e(84), Vt.e(82), Vt.e(301), Vt.e(300), Vt.e(81), Vt.e(92)]).then((() => Vt(41713)))));

    function TD(tt) {
      return Ht.gameBridge.query("worldCodeAiChunk", tt)
    }

    function gD() {
      return Ht.gameBridge.query("worldCodeAiGameState", null)
    }

    function sD(tt) {
      const {
        gsUrl: et,
        gameNameWithVariation: Vt,
        lobbyName: Ot
      } = sq();
      return (0, Cq.postJsonWithMetricsCookiesAndJsonResponse)(`${et}/code/get-lobby-code`, Jq.fk["get-lobby-code"].toBuffer({
        gameNameWithVariation: Vt,
        lobbyName: Ot,
        path: tt
      }), {
        retries: 1
      })
    }
    let nD = !1;
    const tm = [],
      em = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      Vm = (0, qt.memo)((function(tt) {
        var et, Vt;
        let {
          show: Ot,
          onOpen: Dt,
          onClose: dt,
          isLobbyCode: Qt
        } = tt;
        const lt = (0, qt.useRef)(""),
          [wt, Nt] = (0, qt.useState)(null),
          Mt = (0, qt.useRef)(Qt),
          [bt, Jt] = (0, qt.useState)({
            message: null,
            type: null
          }),
          [Ct, ut] = (0, qt.useState)(""),
          Kt = bt.message ? bt : {
            message: Ct,
            type: "warning"
          },
          [ct, Rt] = (0, qt.useState)(!0),
          [It, Zt] = (0, jD.j)(jD.f),
          [Lt, Ft] = (0, jD.j)(jD.c),
          [kt, Gt] = (0, qt.useState)(!1),
          [zt, Ut] = (0, qt.useState)(!1),
          At = (0, qt.useRef)(null),
          it = (0, qt.useRef)(!1);
        (0, qt.useEffect)((() => {
          var tt;
          zt && it.current && (it.current = !1, null === (tt = At.current) || void 0 === tt || tt.focus())
        }), [zt]);
        const Yt = (0, UD.d)(),
          Bt = (0, qt.useRef)(null),
          xt = (0, qt.useRef)(null),
          {
            openInGameMenuName: gt,
            openEverythingMenuName: st,
            worldPanelHud: nt
          } = (0, ot.k)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          te = tt => {
            Ot && (Bt.current = tt, We.current = !0)
          };
        (0, ht.f)("OpenReportMenu", (() => {
          te("iE")
        })), (0, ht.f)("OpenStoreFromCodeEditor", (() => {
          te("store")
        })), (0, qt.useEffect)((() => {
          const tt = Bt.current;
          null === tt || "iE" === tt && ("makeReport" === gt || "makeDiscordReport" === gt) || "store" === tt && null !== st || (Bt.current = null, null === gt && null === st ? Qt ? (xt.current = qV.current, ft.j.sw("EditLobbyCode", wt)) : ft.j.sw("EditCodeBlock", {
            pos: wt,
            canChangePos: Mt.current
          }) : (0, lD.v)())
        }), [gt, st, Qt, wt]), (0, qt.useEffect)((() => {
          if (Ot) return () => {
            xt.current = null
          }
        }), [Ot]);
        const [ee, Ve] = function() {
          const [tt, et] = (0, qt.useState)(nD);
          return (0, ht.f)("CodeEditorAiHelperShown", (tt => {
            et(tt)
          })), [tt, (0, qt.useCallback)((tt => {
            nD = tt, ft.j.sw("CodeEditorAiHelperShown", tt)
          }), [])]
        }(), [Oe, qe] = (0, qt.useState)(null), [De, me] = (0, qt.useState)([]), [de, je] = (0, qt.useState)(0), [He, Xe] = (0, qt.useState)(0), [Qe, le] = (0, qt.useState)(""), fe = (0, qt.useRef)(null), [we, ye] = (0, qt.useState)(Qt ? YD.h : null), Ne = Qt || null !== wt, ae = (0, jt.i)("canEditCode"), Me = (0, jt.i)("canUseDevCreativeItems"), be = (0, QD.k)("welcome"), Je = (0, QD.k)("docsOverview"), Ce = Je ? "docsOverview" : "welcome", ue = null !== Je && void 0 !== Je ? Je : be, Ke = (0, QD.k)("aiHelperOverview"), he = Ke ? "aiHelperOverview" : "welcome", ve = null !== Ke && void 0 !== Ke ? Ke : be, We = (0, qt.useRef)(!1), Se = (0, qt.useRef)(!1), ce = (0, qt.useRef)(null), [Re, Ie] = (0, qt.useState)(""), [Pe, Ze] = (0, qt.useState)(!1), [Le, Fe] = (0, qt.useState)(null), ke = (0, Wt.h)("connectedGame"), Ge = Qt && ae && "classic" === ke.gameNameWithVariation && !(0, Ee.P)(ke.lobbyName), [ze, oe] = (0, qt.useState)(null), [re, Ae] = (0, qt.useState)({
          [uq.k]: ""
        }), [Ye, Be] = (0, qt.useState)({
          assets: {},
          revision: 0
        }), pe = (0, qt.useRef)(Ye), xe = (0, qt.useCallback)((tt => {
          var et;
          tt.revision < pe.current.revision || (pe.current = tt, Be(tt), ut(tt.startupError ? `Schematics could not load: ${tt.startupError}` : ""), null === (et = yV.current) || void 0 === et || et.onLobbyFilesChanged({
            ...HV.current,
            ...(0, Pq.l)(tt.assets)
          }))
        }), []), [Te, ge] = (0, qt.useState)(uq.k), [se, ne] = (0, qt.useState)(null), [tV, eV] = (0, qt.useState)(null), VV = (0, qt.useRef)(!1), OV = (0, qt.useRef)(null), qV = (0, qt.useRef)(Te);
        qV.current = Te;
        const DV = (0, qt.useRef)(se);
        DV.current = se;
        const mV = se ? null : Le,
          dV = mV && !mV.engineLocked ? mV.worldCodeEngine : null,
          jV = (0, qt.useRef)(tV);
        jV.current = tV;
        const HV = (0, qt.useRef)(re);
        HV.current = re;
        const XV = (0, qt.useRef)(null),
          QV = (0, qt.useRef)(null),
          [lV, EV] = (0, qt.useState)(!1),
          fV = (0, Aq.r)(),
          wV = (0, qt.useRef)([]),
          yV = (0, qt.useRef)(null),
          NV = (0, qt.useRef)(null),
          aV = (0, qt.useRef)(null);

        function MV(tt) {
          Jt(tt), clearTimeout(ce.current), ce.current = setTimeout((() => {
            Jt({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const JV = (0, qt.useCallback)((function() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            VV.current && OV.current && (Ht.gameBridge.send("sendCodeCollab", {
              mD: Kq.e.Leave,
              dD: (0, Kq.y)(OV.current),
              ZX: !!tt || null
            }), VV.current = !1, OV.current = null), oe(null)
          }), []),
          CV = (0, qt.useCallback)((tt => {
            const et = {
              kind: "lobby",
              path: tt
            };
            OV.current = et, ge(tt), lt.current = "", Ht.gameBridge.send("sendCodeCollab", {
              mD: Kq.e.Join,
              dD: (0, Kq.y)(et)
            }), VV.current = !0
          }), []),
          uV = (0, qt.useCallback)((tt => {
            var et;
            const Vt = null === (et = NV.current) || void 0 === et ? void 0 : et.collabState;
            return Vt && "lobby" === Vt.docKey.kind && Vt.docKey.path === tt && qV.current === tt ? Promise.resolve({
              doc: Vt.doc,
              version: Vt.version,
              clientID: Vt.clientID,
              docKey: Vt.docKey,
              httpConfig: Vt.httpConfig
            }) : new Promise(((et, Vt) => {
              const Ot = setTimeout((() => {
                  wV.current = wV.current.filter((tt => tt !== qt)), Vt(new Error(`Timed out joining ${tt}`))
                }), 15e3),
                qt = Vt => {
                  "lobby" === Vt.docKey.kind && Vt.docKey.path === tt && (clearTimeout(Ot), wV.current = wV.current.filter((tt => tt !== qt)), et(Vt))
                };
              wV.current.push(qt), qV.current !== tt ? (JV(!0), CV(tt)) : VV.current || CV(tt)
            }))
          }), [CV, JV]),
          KV = (0, qt.useCallback)((async function(tt, et) {
            let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const Ot = Date.now();
            let qt = tt in HV.current;
            for (; qt !== et;) {
              if (Date.now() - Ot > Vt) throw new Error(`Timed out waiting for lobby path ${tt} present=${et}`);
              await (0, MO.G)(50), qt = tt in HV.current
            }
          }), []),
          hV = (0, qt.useCallback)((tt => {
            const et = HV.current,
              Vt = uq.k in et && uq.n in et;
            if (!(0, hq.h)(tt) || Vt) {
              if (qV.current === tt) {
                var Ot;
                const qt = Vt && (0, hq.h)(tt) ? tt === uq.k ? uq.n : uq.k : null !== (Ot = (0, hq.d)(et)) && void 0 !== Ot ? Ot : uq.k;
                QV.current = {
                  fromPath: tt,
                  toPath: qt
                }, ge(qt)
              }
              Ht.gameBridge.send("sendCodeCollab", {
                mD: Kq.e.DeleteFile,
                dD: (0, Kq.y)({
                  kind: "lobby",
                  path: qV.current
                }),
                LX: tt
              })
            }
          }), []),
          vV = (0, qt.useCallback)((tt => {
            xt.current = null, ne(null), eV(null), !Qt || tt === qV.current && VV.current || (JV(!0), CV(tt))
          }), [Qt, JV, CV]),
          WV = (0, qt.useCallback)(((tt, et) => {
            const Vt = Rq.d[tt],
              Ot = Vt && et in Vt.files ? et : "index.ts";
            if (tt !== DV.current || Ot !== jV.current) {
              var qt;
              if (tt !== DV.current) null === (qt = yV.current) || void 0 === qt || qt.stopContinuousSync(), JV(!0);
              ne(tt), eV(Ot)
            }
          }), [JV]),
          SV = (0, qt.useCallback)((tt => {
            var et;
            const Vt = qV.current,
              Ot = HV.current[Vt],
              qt = VV.current && !DV.current && Vt in tt && void 0 !== Ot ? {
                ...tt,
                [Vt]: Ot
              } : tt;
            Ae(qt);
            const Dt = XV.current;
            if (Dt && Dt in tt) XV.current = null, Dt !== qV.current && vV(Dt);
            else if (!(qV.current in tt) && VV.current && !DV.current) {
              var mt;
              vV(null !== (mt = (0, hq.d)(tt)) && void 0 !== mt ? mt : uq.k)
            }
            null === (et = yV.current) || void 0 === et || et.onLobbyFilesChanged({
              ...qt,
              ...(0, Pq.l)(pe.current.assets)
            })
          }), [vV]),
          cV = (0, qt.useCallback)((() => sD(qV.current).then((async tt => {
            if (!VV.current || !tt.files) return null;
            SV(tt.files);
            const et = await nq({
              action: "state"
            });
            return xe(et), {
              ...tt.files,
              ...(0, Pq.l)(et.assets)
            }
          })).catch((tt => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", tt), MV({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [SV, xe]),
          RV = () => {
            dt()
          };
        (0, qt.useEffect)((() => {
          if (ut(""), !Ot || !Qt) return;
          let tt = !1;
          return pe.current = {
            assets: {},
            revision: 0
          }, Be(pe.current), nq({
            action: "state"
          }).then((et => {
            tt || xe(et)
          })).catch((et => {
            console.error("Could not load project schematics", et), tt || ut("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            tt = !0
          }
        }), [Ot, Qt, xe]);
        const IV = (0, qt.useCallback)((function() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            OV.current && Ht.gameBridge.send("sendCodeCollab", {
              mD: Kq.e.Submit,
              dD: (0, Kq.y)(OV.current),
              ...tt ? {
                QD: "keepOpen"
              } : {}
            })
          }), []),
          PV = (0, qt.useCallback)((() => {
            if (!OV.current || "lobby" !== OV.current.kind) return;
            const tt = Re.trim();
            (0, vq.t)(tt) ? (Ht.gameBridge.send("sendCodeCollab", {
              mD: Kq.e.ReloadAsVariation,
              dD: (0, Kq.y)(OV.current),
              QD: tt
            }), Ze(!1)) : MV({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Re]),
          ZV = (0, qt.useCallback)((tt => {
            Ht.gameBridge.send("sendCodeCollab", {
              mD: Kq.e.SetEngine,
              dD: (0, Kq.y)({
                kind: "lobby",
                path: qV.current
              }),
              QD: tt
            })
          }), []),
          LV = (0, qt.useCallback)((tt => {
            if (!DV.current && ae && (Mt.current || Qt)) {
              if (Qt) {
                var et;
                const Vt = (0, hq.n)(HV.current, qV.current),
                  Ot = Math.min(Ue.v, Math.max(0, Ue.z - Vt)),
                  qt = tt.slice(0, Ot);
                return lt.current = qt, Ae((tt => ({
                  ...tt,
                  [qV.current]: qt
                }))), void(null === (et = yV.current) || void 0 === et || et.onDocTextChanged(qV.current, qt))
              }
              lt.current = tt, le(tt)
            }
          }), [ae, Qt]);
        (0, ht.f)("EditLobbyCode", (tt => {
          var et;
          Pt.featureFlags.canSeePlayerWrittenText && Qt && (JV(), Nt(tt), lt.current = "", Ae({
            [uq.k]: ""
          }), Fe(null), ge(uq.k), ne(null), eV(null), XV.current = null, QV.current = null, null === (et = yV.current) || void 0 === et || et.stopContinuousSync(), Dt(), CV(uq.k))
        })), (0, ht.f)("EditCodeBlock", (tt => {
          let {
            pos: et,
            canChangePos: Vt
          } = tt;
          if (Pt.featureFlags.canSeePlayerWrittenText && !Qt)
            if (JV(), null !== et && (et = [...et]), Nt(et), Mt.current = Vt, null !== et) {
              lt.current = "", le(""), Dt();
              const tt = {
                  kind: "codeBlock",
                  pos: et
                },
                Ot = (0, Kq.y)(tt);
              fe.current !== Ot && (fe.current = Ot, me([]), Xe(de)), ye((0, YD.d)(Ot, [et[0], et[1], et[2]], !!Vt)), OV.current = tt, Ht.gameBridge.send("sendCodeCollab", {
                mD: Kq.e.Join,
                dD: (0, Kq.y)(tt)
              }), VV.current = !0
            } else Ot && dt()
        })), (0, ht.f)("codeCollabRejoin", (tt => {
          const et = OV.current ? (0, Kq.y)(OV.current) : null;
          et && tt.docKey === et && (lt.current = tt.doc, Qt || le(tt.doc), oe((et => et ? {
            ...et,
            doc: tt.doc,
            version: tt.version,
            clientID: (0, cq.b)()
          } : et)))
        })), (0, ht.f)("codeCollab", (tt => {
          var et;
          const Vt = OV.current ? (0, Kq.y)(OV.current) : null;
          if (tt.type === Kq.g.LobbyFilesChanged && Qt) {
            if ("string" !== typeof tt.files) return void cV();
            try {
              SV(JSON.parse(tt.files))
            } catch (Ht) {
              console.error("[CodeCollab] Failed to parse lobby files", Ht), cV()
            }
            return
          }
          if (tt.type === Kq.g.EngineSettings && Qt) return void Fe(qD(tt.engineSettings));
          const qt = tt.type === Kq.g.Joined ? (0, Kq.n)(tt.docKey) : null,
            Dt = Qt && "lobby" === (null === (et = OV.current) || void 0 === et ? void 0 : et.kind) && (0, hq.h)(OV.current.path) && "lobby" === (null === qt || void 0 === qt ? void 0 : qt.kind) && (0, hq.h)(qt.path);
          if (!Vt || tt.docKey === Vt || Dt)
            if (tt.type !== Kq.g.ForceClose) {
              if (Ot)
                if (tt.type === Kq.g.Joined) {
                  var mt;
                  const Xt = JSON.parse(tt.peers),
                    Et = tt.existingCursors ? JSON.parse(tt.existingCursors) : [],
                    yt = (0, cq.b)(),
                    Nt = sq(),
                    {
                      gsUrl: Mt,
                      gameNameWithVariation: bt,
                      lobbyName: Ct
                    } = Nt,
                    ut = null !== (mt = (0, Kq.n)(tt.docKey)) && void 0 !== mt ? mt : OV.current;
                  ut && (OV.current = ut, "lobby" === ut.kind && (ge(ut.path), qV.current = ut.path));
                  const Kt = ut || (Qt ? {
                    kind: "lobby",
                    path: qV.current
                  } : {
                    kind: "codeBlock",
                    pos: wt
                  });

                  function ht(et) {
                    var Vt, Ot;
                    if (!VV.current) return;
                    const qt = null !== (Vt = et.code) && void 0 !== Vt ? Vt : "",
                      Dt = null !== (Ot = et.collabVersion) && void 0 !== Ot ? Ot : 0;
                    lt.current = qt, Qt || le(qt), Qt && et.files ? Ae(et.files) : Qt && Ae((tt => ({
                      ...tt,
                      [qV.current]: qt
                    })));
                    const mt = {
                      doc: qt,
                      version: Dt,
                      clientID: yt,
                      docKey: Kt,
                      peers: Xt,
                      editorCount: tt.editorCount,
                      existingCursors: Et,
                      httpConfig: Nt
                    };
                    if (oe(mt), "lobby" === Kt.kind) {
                      var dt;
                      const tt = {
                        doc: qt,
                        version: Dt,
                        clientID: yt,
                        docKey: Kt,
                        httpConfig: Nt
                      };
                      for (const et of [...wV.current]) et(tt);
                      null === (dt = yV.current) || void 0 === dt || dt.startWhenReady()
                    }
                    et.canSeeCode ? (clearTimeout(ce.current), Jt({
                      message: null,
                      type: null
                    })) : function(tt) {
                      clearTimeout(ce.current), Jt(tt)
                    }(em);
                    const jt = xt.current;
                    xt.current = null, Qt && jt && et.files && jt in et.files && jt !== qV.current && vV(jt)
                  }
                  Qt ? sD(qV.current).then(ht).catch((tt => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", tt), JV()
                  })) : (0, Cq.postJsonWithMetricsCookiesAndJsonResponse)(`${Mt}/code/get-code-block`, Jq.fk["get-code-block"].toBuffer({
                    gameNameWithVariation: bt,
                    lobbyName: Ct,
                    pos: wt
                  }), {
                    retries: 1
                  }).then(ht).catch((tt => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", tt), JV()
                  }))
                } else if (tt.type === Kq.g.Presence) {
                if (!Vt) return;
                const vt = JSON.parse(tt.peers);
                oe((et => et ? {
                  ...et,
                  peers: vt,
                  editorCount: tt.editorCount
                } : et))
              }
            } else {
              var jt;
              if (!Vt) return;
              Ot && Qt && "keptOpen" === tt.updates && ft.j.sw("CodeEditorKeepEdits");
              const Wt = OV.current;
              VV.current = !1, OV.current = null, oe(null);
              if (!Qt || "close" === tt.updates) return (0, iD.d)(), void(Ot && dt());
              if (!Ot) return;
              const St = HV.current,
                ct = QV.current;
              QV.current = null;
              const Rt = "lobby" === (null === Wt || void 0 === Wt ? void 0 : Wt.kind) && Wt.path === (null === ct || void 0 === ct ? void 0 : ct.fromPath),
                It = ct && (Rt || ct.toPath in St || (0, hq.h)(ct.toPath)) ? ct.toPath : qV.current in St ? qV.current : null !== (jt = (0, hq.d)(St)) && void 0 !== jt ? jt : uq.k;
              CV(It)
            }
        })), (0, ht.f)("refetchCode", (() => {
          Pt.featureFlags.canSeePlayerWrittenText && Ot && VV.current && (ae || (JV(), Qt ? ft.j.sw("EditLobbyCode", wt) : ft.j.sw("EditCodeBlock", {
            pos: wt,
            canChangePos: Mt.current
          })))
        }));
        const FV = (0, qt.useCallback)((() => {
            Ot && (Gt(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [Ot]),
          kV = (0, qt.useCallback)((() => {
            Gt(!1)
          }), []);
        (0, qt.useEffect)((() => {
          Ot && ae && ("docsButton" === ue && kt ? (0, lD.d)("docsButton") : ue && lD.g.includes(ue) && !kt && (Gt(!0), Ve(!1)))
        }), [Ot, ae, ue, kt, Ve]);
        const GV = (0, qt.useCallback)((() => {
          Ve(!1)
        }), [Ve]);
        (0, qt.useEffect)((() => {
          Ot && ae && Ne && ("aiHelperButton" === ve && ee ? (0, lD.d)("aiHelperButton") : ve && lD.b.includes(ve) && !ee && (Ve(!0), Gt(!1)))
        }), [Ot, ae, Ne, ve, ee, Ve]), (0, qt.useEffect)((() => {
          if (!Ot || !ae) return;
          const tt = Qt ? "worldCode" : "codeBlock";
          return (0, lD.y)(tt, !0), () => {
            (0, lD.y)(tt, !1)
          }
        }), [Ot, ae, Qt]), (0, qt.useEffect)((() => {
          if (Ot) return () => {
            We.current ? We.current = !1 : (0, lD.v)()
          }
        }), [Ot]), (0, qt.useEffect)((() => {
          (0, lD.B)("exportButton", !!Me)
        }), [Me]);
        const {
          t: zV
        } = (0, Tt.H)(), oV = !ee && de > He, rV = oV ? Et.G : Et.w, UV = (0, qt.useCallback)(((tt, et) => {
          ft.j.sw("CodeEditorGoToLine", {
            path: tt,
            line: et
          }), vV(tt)
        }), [vV]), AV = (0, qt.useCallback)((tt => {
          aV.current = tt
        }), []), iV = function(tt, et) {
          const [Vt, Ot] = (0, qt.useState)(null);
          return (0, qt.useEffect)((() => {
            if (!et) return void Ot(null);
            let Vt = !1;
            return Uq(tt).then((tt => {
              Vt || Ot(tt)
            }), (tt => {
              console.error("[CodeEditor] could not collect the imported plugins", tt), Vt || Ot(null)
            })), () => {
              Vt = !0
            }
          }), [tt, et]), Vt
        }(re, Ot);
        (0, qt.useEffect)((() => {
          iV && se && !iV.includes(se) && (ne(null), eV(null), Qt && !VV.current && CV(qV.current))
        }), [se, iV, Qt, CV]), NV.current = {
          collabState: ze,
          ensureJoinedPath: uV,
          waitForLobbyPath: KV,
          pullLobbyFiles: cV,
          t: zV,
          canEditCode: !!ae
        }, yV.current || (yV.current = new Tq({
          getLobbyFiles: () => ({
            ...HV.current,
            ...(0, Pq.l)(pe.current.assets)
          }),
          deleteSchematic: async tt => {
            const et = await nq({
              action: "remove",
              path: tt,
              expectedRevision: pe.current.revision
            });
            xe(et)
          },
          getActivePath: () => qV.current,
          getCollabSnapshot: () => {
            var tt;
            if (DV.current) return null;
            const et = null === (tt = NV.current) || void 0 === tt ? void 0 : tt.collabState;
            return et ? {
              doc: et.doc,
              version: et.version,
              clientID: et.clientID,
              docKey: et.docKey,
              httpConfig: et.httpConfig
            } : null
          },
          replaceActiveDoc: (tt, et) => {
            var Vt, Ot;
            return null !== (Vt = null === (Ot = aV.current) || void 0 === Ot ? void 0 : Ot.call(aV, tt, et)) && void 0 !== Vt && Vt
          },
          ensureJoined: tt => NV.current.ensureJoinedPath(tt),
          createFile: (tt, et) => {
            !1 !== (null === et || void 0 === et ? void 0 : et.focus) && (XV.current = tt), Ht.gameBridge.send("sendCodeCollab", {
              mD: Kq.e.CreateFile,
              dD: (0, Kq.y)({
                kind: "lobby",
                path: qV.current
              }),
              LX: tt
            })
          },
          renameFile: (tt, et) => {
            const Vt = (0, Kq.y)({
              kind: "lobby",
              path: qV.current
            });
            qV.current === tt && (QV.current = {
              fromPath: tt,
              toPath: et
            }, ge(et)), Ht.gameBridge.send("sendCodeCollab", {
              mD: Kq.e.RenameFile,
              dD: Vt,
              LX: tt,
              FX: et
            })
          },
          deleteFile: tt => {
            hV(tt)
          },
          waitForLobbyPath: (tt, et, Vt) => NV.current.waitForLobbyPath(tt, et, Vt),
          pullLobbyFiles: () => NV.current.pullLobbyFiles(),
          setMessage: (tt, et) => {
            MV({
              message: tt,
              type: et
            })
          },
          onUnlinked: () => {
            EV(!1)
          },
          t: tt => NV.current.t(tt),
          canEditCode: () => NV.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: tt,
              lobbyName: et
            } = Ht.gameBridge.latest("connectedGame");
            return (0, Aq.f)(tt, et)
          }
        }));
        const YV = (0, qt.useCallback)((async tt => {
            const et = yV.current;
            if (!et) return !1;
            try {
              return await et.writeLobbyFiles(tt)
            } catch (Vt) {
              return console.error("World Code AI: couldn't write the change", Vt), !1
            }
          }), []),
          BV = (0, qt.useCallback)((async tt => {
            var et, Vt;
            const Ot = null === (et = tt.find((tt => tt.path === AD.e))) || void 0 === et ? void 0 : et.text,
              qt = OV.current;
            return void 0 !== Ot && "codeBlock" === (null === qt || void 0 === qt ? void 0 : qt.kind) && (!(null === (Vt = aV.current) || void 0 === Vt || !Vt.call(aV, (0, Kq.y)(qt), Ot)) && (lt.current = Ot, le(Ot), !0))
          }), []),
          pV = (0, qt.useCallback)((async () => {
            try {
              var tt, et;
              const Vt = await sD(uq.k);
              return !1 === Vt.canSeeCode ? null : null !== (tt = Vt.files) && void 0 !== tt ? tt : {
                [uq.k]: null !== (et = Vt.code) && void 0 !== et ? et : ""
              }
            } catch (Vt) {
              return console.error("World Code AI: couldn't read World Code for a code block", Vt), null
            }
          }), []),
          xV = (0, qt.useMemo)((() => ({
            [AD.e]: Qe
          })), [Qe]),
          TV = (0, qt.useCallback)(((tt, et) => {
            ft.j.sw("CodeEditorGoToLine", {
              path: AD.e,
              line: et
            })
          }), []);
        (0, qt.useEffect)((() => {
          ee && Ot && Xe(de)
        }), [ee, Ot, de]);
        const gV = (0, qt.useCallback)((() => {
            var tt, et;
            IV();
            const Vt = (0, Pt.isTouchscreen)() ? "open World Code again" : `press ${null!==(tt=null===(et=ie.r.OpenCodeEditor)||void 0===et?void 0:et[0])&&void 0!==tt?tt:"F8"}`,
              Ot = Qt ? `\ud83e\udd16 Try out your change, then ${Vt} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            ft.j.sw("chat", {
              content: [{
                str: Ot,
                style: {
                  color: vt.P.cyanUiText
                }
              }]
            })
          }), [IV, Qt]),
          sV = (0, qt.useCallback)((tt => {
            const et = wt,
              Vt = Mt.current;
            Qt || !et || Ht.gameBridge.lookup("codeBlockClickable", et) ? (0, iD.h)(tt, {
              submit: () => {
                IV(), ft.j.sw("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: vt.P.cyanUiText
                    }
                  }]
                }), !Qt && et && setTimeout((() => {
                  Ht.gameBridge.send("clickCodeBlock", et)
                }), 1e3)
              },
              reopen: () => {
                (0, rt.q)() || (Qt ? ft.j.sw("EditLobbyCode", et) : ft.j.sw("EditCodeBlock", {
                  pos: et,
                  canChangePos: Vt
                }))
              }
            }) : gV()
          }), [IV, Qt, wt, gV]),
          nV = (0, qt.useCallback)((() => {
            Ve(!1)
          }), [Ve]),
          tO = (0, qt.useRef)(RV);
        tO.current = RV;
        const eO = (0, qt.useCallback)((function(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            ft.j.sw("WorldCodeAiDraft", {
              text: tt,
              send: et
            }), tO.current(), ft.j.sw("EditLobbyCode", wt)
          }), [wt]),
          VO = (0, qt.useCallback)((tt => {
            tO.current(), tt.codeBlock ? ft.j.sw("EditCodeBlock", {
              pos: [...tt.pos],
              canChangePos: tt.canChangePos
            }) : ft.j.sw("EditLobbyCode", wt)
          }), [wt]);
        (0, ht.f)("WorldCodeAiDraft", (tt => {
          Qt && (qe(tt), Ve(!0))
        }));
        const OO = !!ae && !!ue && lD.g.includes(ue),
          qO = !!ae && !!ve && lD.b.includes(ve);
        (0, qt.useEffect)((() => {
          Ot && ee && Ne && !OO && Gt(!1)
        }), [Ot, ee, Ne, OO]);
        const DO = (0, qt.useCallback)((() => {
            Ve(!1), Gt(!1)
          }), [Ve]),
          {
            sQ: mO,
            setWorld: dO,
            toggleWorld: jO
          } = function(tt) {
            let {
              showAi: et,
              showDocs: Vt,
              showChat: Ot,
              hideOtherRightPanels: Dt
            } = tt;
            const [mt, dt] = (0, qt.useState)("hidden"), jt = (0, qt.useRef)(null), Ht = (0, qt.useCallback)((() => {
              jt.current = null, dt((tt => "hidden" === tt ? tt : (0, MD.e)() ? "hidden" : "shown"))
            }), []);
            (0, qt.useEffect)((() => {
              (et || Vt) && Ht()
            }), [et, Vt, Ht]), (0, qt.useEffect)((() => {
              Ot && Ht()
            }), [Ot, Ht]);
            const Xt = "hidden" !== mt && (0, MD.e)();
            (0, qt.useLayoutEffect)((() => {
              if (Xt) {
                const tt = document.activeElement;
                tt instanceof HTMLElement && tt.closest(".cm-content") && (jt.current = tt, tt.blur())
              } else {
                var tt;
                null === (tt = jt.current) || void 0 === tt || tt.focus(), jt.current = null
              }
            }), [Xt]);
            const Qt = (0, qt.useCallback)((() => {
              "hidden" === mt ? (dt("shown"), (0, MD.e)() && Dt()) : dt("hidden")
            }), [mt, Dt]);
            return {
              sQ: mt,
              setWorld: dt,
              toggleWorld: Qt
            }
          }({
            showAi: ee,
            showDocs: kt,
            showChat: zt,
            hideOtherRightPanels: DO
          }),
          HO = ee && null !== we && Ne,
          XO = (0, qt.useCallback)((() => {
            qe(null)
          }), []),
          [QO, lO] = (0, qt.useState)(null);
        (0, ht.f)("WorldCodeAiSelection", (tt => {
          Ot && (lO(tt), Ve(!0), Gt(!1))
        }));
        const EO = (0, qt.useCallback)((() => {
          lO(null)
        }), []);
        (0, ht.f)("chat", (tt => {
          let {
            content: et
          } = tt;
          if (!Qt && null === fe.current) return;
          const Vt = Array.isArray(et) ? et : [et],
            Ot = Vt.some((tt => {
              var et;
              return (null === tt || void 0 === tt || null === (et = tt.style) || void 0 === et ? void 0 : et.color) === vt.P.redUiText
            })),
            qt = Vt.map((tt => {
              var et;
              const Vt = null !== (et = null === tt || void 0 === tt ? void 0 : tt.str) && void 0 !== et ? et : tt;
              return "string" === typeof Vt ? Vt : ""
            })).join("");
          Ot && /world code|error/i.test(qt) && (me((tt => [...tt, qt].slice(-10))), je((tt => tt + 1)), (0, iD.c)(qt))
        })), (0, qt.useEffect)((() => {
          if (!Ot || !Qt || !fV) return;
          let tt = !1;
          return (async (et, Vt) => {
            const Ot = await (null === (et = yV.current) || void 0 === et ? void 0 : et.tryRestoreHandle());
            !tt && Ot && (EV(!0), null === (Vt = yV.current) || void 0 === Vt || Vt.startWhenReady())
          })(), () => {
            tt = !0
          }
        }), [Ot, Qt, fV]), (0, qt.useEffect)((() => {
          var tt;
          Ot || (null === (tt = yV.current) || void 0 === tt || tt.stopContinuousSync(), JV(!1), Se.current && (Se.current = !1, Ht.gameBridge.send("sendChatMessage", {
            kX: "//export",
            channelName: null
          })))
        }), [Ot, JV]);
        const fO = (0, qt.useCallback)((async () => {
            if (fV && yV.current) try {
              if (!await yV.current.linkFolder()) return;
              EV(!0), await yV.current.startWhenReady()
            } catch (tt) {
              console.error("[WorldCodeDirectorySync] Link failed", tt), MV({
                message: zV("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [fV, zV]),
          wO = (0, qt.useCallback)((async () => {
            yV.current && await yV.current.unlinkFolder()
          }), []),
          yO = (0, qt.useCallback)((() => {
            fV ? lV ? wO() : fO() : sO.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [fV, lV, fO, wO]),
          NO = Qt && "hidden" !== mO;
        return (0, Xt.jsxs)(mt.c, {
          className: bV()("CodeEditorBg", {
            CodeEditorLight: It,
            WorldShown: "hidden" !== mO,
            WorldTouchControl: "touchControls" === nt
          }),
          close: RV,
          escDoesExit: !0,
          show: Ot,
          togglePointerLock: !1,
          globallyUniqueKey: Qt ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, Xt.jsx)(QD.e, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: zV("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!ae && !Qt
          }), (0, Xt.jsx)(QD.e, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, Xt.jsxs)(Xt.Fragment, {
              children: [(0, Xt.jsx)("p", {
                children: zV("codeEditor:tutorialWorldCodeWelcome")
              }), (0, Xt.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, Xt.jsx)("li", {
                  children: zV("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, Xt.jsx)("li", {
                  children: zV("codeEditor:tutorialWorldCodeUseReact")
                }), (0, Xt.jsx)("li", {
                  children: zV("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!ae && Qt
          }), (0, Xt.jsx)("div", {
            className: "CodeEditorTitle",
            children: Qt ? "World Code" : "Code Block"
          }), (0, Xt.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, Xt.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, Xt.jsx)(pt.g, {
                tooltipInner: zV(Me ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: Me ? void 0 : 0,
                hideTooltip: "exportButton" === be,
                children: (0, Xt.jsx)(QD.i, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: zV("codeEditor:tutorialExport"),
                  enabled: !!ae,
                  children: (0, Xt.jsx)(Et.m, {
                    className: "CodeEditorButton",
                    disabled: !Me,
                    onClick: () => {
                      "exportButton" === be && ((0, lD.d)("exportButton"), We.current = !0), Se.current = !0, RV()
                    },
                    padDestructive: !0,
                    children: zV("codeEditor:exportWorld")
                  })
                })
              }), (0, Xt.jsx)(rD, {
                sQ: mO,
                setWorld: dO,
                toggleWorld: jO,
                aiShown: HO,
                closeAi: nV
              })]
            }), (0, Xt.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [ae && (0, Xt.jsx)(pt.g, {
                tooltipInner: zV("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === be,
                children: (0, Xt.jsx)(QD.i, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: zV("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, Xt.jsx)(Et.f, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: zV("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, lD.d)("helpButton"), sO.NotificationProvider.showCustomPopup({
                        body: tt => (0, Xt.jsx)(ED, {
                          close: tt
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, Xt.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, Xt.jsx)(yt.b, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, Xt.jsx)(pt.g, {
                tooltipInner: zV("codeEditor:closeTooltip"),
                children: (0, Xt.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    RV()
                  },
                  children: (0, Xt.jsx)(Et.j, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, Xt.jsx)(Sq, {
            peers: null !== (et = null === ze || void 0 === ze ? void 0 : ze.peers) && void 0 !== et ? et : []
          }), (0, Xt.jsxs)("div", {
            className: bV()("CodeEditorMainArea", {
              WorldCovers: "always" === bD(mO),
              WorldCoversWhenNarrow: "narrow" === bD(mO)
            }),
            children: [zt && Yt && (0, Xt.jsx)(MD.c, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                Ut(!1)
              },
              children: (0, Xt.jsx)(aD, {
                inputRef: At
              })
            }), Qt && (0, Xt.jsx)(Fq, {
              schematics: Ye.assets,
              onManageSchematic: tt => {
                ae && sO.NotificationProvider.showCustomPopup({
                  body: et => (0, Xt.jsx)(OD, {
                    initialPath: tt,
                    onChanged: xe,
                    onClose: et
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: re,
              activePath: Te,
              canEdit: !!ae,
              directoryLinked: lV,
              pluginNames: null !== iV && void 0 !== iV ? iV : tm,
              activePluginName: se,
              activePluginFile: tV,
              onSelect: vV,
              onSelectPlugin: WV,
              onToggleDirectorySync: yO,
              onCreate: tt => {
                XV.current = tt, Ht.gameBridge.send("sendCodeCollab", {
                  mD: Kq.e.CreateFile,
                  dD: (0, Kq.y)({
                    kind: "lobby",
                    path: qV.current
                  }),
                  LX: tt
                })
              },
              onRename: (tt, et) => {
                qV.current === tt && (QV.current = {
                  fromPath: tt,
                  toPath: et
                }, ge(et)), Ht.gameBridge.send("sendCodeCollab", {
                  mD: Kq.e.RenameFile,
                  dD: (0, Kq.y)({
                    kind: "lobby",
                    path: qV.current
                  }),
                  LX: tt,
                  FX: et
                })
              },
              onRenameFolder: (tt, et) => {
                const [Vt] = (0, hq.m)([qV.current], tt, et);
                Vt && (QV.current = {
                  fromPath: Vt[0],
                  toPath: Vt[1]
                }, ge(Vt[1])), Ht.gameBridge.send("sendCodeCollab", {
                  mD: Kq.e.RenameFolder,
                  dD: (0, Kq.y)({
                    kind: "lobby",
                    path: qV.current
                  }),
                  LX: tt,
                  FX: et
                })
              },
              onDelete: hV
            }), (0, Xt.jsx)("div", {
              className: bV()("CodeEditorMessage", {
                CodeEditorMessageHidden: !Kt.message,
                CodeEditorMessageSuccess: "success" === Kt.type
              }),
              children: Kt.message && (0, Xt.jsx)("div", {
                className: "CodeEditorMessageText",
                children: Kt.message
              })
            }), (0, Xt.jsx)(qt.Suspense, {
              fallback: (0, Xt.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, Xt.jsx)(St.b, {})
              }),
              children: (0, Xt.jsx)(BD, {
                isLobbyCode: Qt,
                code: ze ? ze.doc : lt.current,
                files: Qt ? re : void 0,
                activePath: Qt ? Te : void 0,
                pluginName: se,
                pluginFile: tV,
                pluginSource: se && tV ? null === (Vt = Rq.d[se]) || void 0 === Vt ? void 0 : Vt.files[tV] : void 0,
                onChange: LV,
                canEditCode: ae,
                setTemporaryMessage: MV,
                close: RV,
                showTooltips: ct,
                lightMode: It,
                collabState: ze,
                setActiveDocReplacer: AV,
                showAiHints: Ne && Lt,
                canAiChangeCode: !!ae && (Qt || !!Mt.current),
                onRemoteDocChange: tt => {
                  var et;
                  (lt.current = tt, Qt) ? (Ae((et => ({
                    ...et,
                    [qV.current]: tt
                  }))), null === (et = yV.current) || void 0 === et || et.onDocTextChanged(qV.current, tt)) : le(tt)
                }
              })
            }), (kt || HO || "hidden" !== mO) && (0, Xt.jsxs)(JD, {
              sQ: mO,
              worldPanel: (0, Xt.jsx)(zD, {
                shown: mO,
                setShown: dO,
                canInsertCode: !!ae && !se
              }),
              closeWorld: () => {
                dO("hidden")
              },
              aiShown: HO,
              defaultWidth: kt ? "40%" : "max(18rem, 36%)",
              children: [kt && (0, Xt.jsx)(MD.c, {
                onClose: OO ? void 0 : kV,
                children: (0, Xt.jsx)(qt.Suspense, {
                  fallback: (0, Xt.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, Xt.jsx)(St.b, {})
                  }),
                  children: (0, Xt.jsx)(pD, {
                    popOutDocs: FV,
                    hideDocs: kV,
                    tutorialEnabled: !!ae
                  })
                })
              }), HO && (0, Xt.jsx)(MD.c, {
                onClose: qO ? void 0 : nV,
                children: (0, Xt.jsx)(qt.Suspense, {
                  fallback: (0, Xt.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, Xt.jsx)(St.b, {})
                  }),
                  children: (0, Xt.jsx)(xD, {
                    target: we,
                    chatKey: `${ke.gameNameWithVariation}/${ke.lobbyName}/aiHelper`,
                    historyKey: `${ke.gameNameWithVariation}/${ke.lobbyName}/${we.key}`,
                    files: we.codeBlock ? xV : re,
                    activePath: we.codeBlock ? AD.e : Te,
                    canEdit: !!ae && (we.codeBlock ? !!Mt.current : !se),
                    isLoaded: null !== ze,
                    errors: De,
                    errorCount: de,
                    applyFiles: we.codeBlock ? BV : YV,
                    submit: gV,
                    testRun: sV,
                    close: nV,
                    goToLine: we.codeBlock ? TV : UV,
                    openWorldCode: we.codeBlock ? eO : void 0,
                    readWorldCode: we.codeBlock ? pV : void 0,
                    viewChunk: TD,
                    viewGameState: gD,
                    openTarget: ae ? VO : void 0,
                    draft: Oe,
                    onDraftUsed: XO,
                    selection: QO,
                    onSelectionUsed: EO
                  }, we.key)
                })
              })]
            })]
          }), (null === mV || void 0 === mV ? void 0 : mV.fallback) && (0, Xt.jsx)(DD, {
            fallback: mV.fallback,
            onGoToLine: UV
          }), (0, Xt.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, Xt.jsx)(pt.g, {
              tooltipInner: zV(It ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, Xt.jsx)(Et.f, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: zV(It ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  Zt(!It)
                },
                children: (0, Xt.jsx)(yt.b, {
                  name: It ? "moon" : "sun-bright"
                })
              })
            }), (0, Xt.jsx)(pt.g, {
              tooltipInner: zV(NO ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, Xt.jsx)(Et.m, {
                className: "CodeEditorButton",
                onClick: () => {
                  IV(NO)
                },
                padDefaultFocus: !0,
                children: zV("codeEditor:submitCode")
              })
            }), (0, Xt.jsx)(pt.g, {
              tooltipInner: zV(kt ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === ue || "hideDocsButton" === ue,
              children: (0, Xt.jsx)(QD.i, {
                tutorial: Ce,
                step: kt ? "hideDocsButton" : "docsButton",
                text: zV(kt ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!ae,
                placement: "top",
                waitForClick: !0,
                onPrevious: kt && "welcome" === Ce ? kV : void 0,
                children: (0, Xt.jsx)(Et.w, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, lD.d)(kt ? "hideDocsButton" : "docsButton"), Gt(!kt), Ve(!1)
                  },
                  children: zV(kt ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), Ne && (0, Xt.jsx)(QD.i, {
              tutorial: he,
              step: ee ? "hideAiHelperButton" : "aiHelperButton",
              text: zV(ee ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === he ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!ae,
              placement: "top",
              waitForClick: !0,
              onPrevious: ee && "welcome" === he ? GV : void 0,
              children: (0, Xt.jsx)(rV, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, lD.d)(ee ? "hideAiHelperButton" : "aiHelperButton"), Ve(!ee), Gt(!1)
                },
                children: ee ? "Hide AI Helper" : oV ? "Fix error with AI" : "AI Helper"
              })
            }), Yt && (0, Xt.jsx)(pt.g, {
              tooltipInner: zV(zt ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, Xt.jsx)(Et.w, {
                className: "CodeEditorButton",
                onClick: () => {
                  it.current = !zt, Ut(!zt)
                },
                children: zV(zt ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, Xt.jsx)(pt.g, {
              tooltipInner: zV("hidden" === mO ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, Xt.jsx)(Et.w, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: jO,
                children: zV("hidden" === mO ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, Xt.jsx)(pt.g, {
              tooltipInner: zV("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, Xt.jsx)(Et.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  ft.j.sw("FormatCode")
                },
                children: zV("codeEditor:formatCode")
              })
            }), (0, Xt.jsx)(pt.g, {
              tooltipInner: zV("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, Xt.jsx)(Et.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(lt.current).then((() => {
                    MV({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    MV({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: zV("codeEditor:copyCode")
              })
            }), (0, Xt.jsx)(pt.g, {
              tooltipInner: zV(ct ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, Xt.jsx)(Et.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  Rt(!ct)
                },
                children: zV(ct ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !Qt && (0, Xt.jsx)(pt.g, {
              tooltipInner: zV("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === be,
              children: (0, Xt.jsx)(QD.i, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: zV("codeEditor:tutorialWorldCodeButton"),
                enabled: !!ae,
                placement: "top",
                waitForClick: !0,
                children: (0, Xt.jsx)(Et.w, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === be && ((0, lD.d)("worldCodeButton"), We.current = !0), RV(), ft.j.sw("EditLobbyCode", wt)
                  },
                  children: zV("codeEditor:worldCode")
                })
              })
            }), (Ge || dV || Ne) && (0, Xt.jsx)(pt.g, {
              tooltipInner: zV("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, Xt.jsx)(Et.f, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  Ze(!0)
                },
                children: (0, Xt.jsx)(yt.b, {
                  name: "ellipsis"
                })
              })
            })]
          }), Pe && (0, Xt.jsx)(tq.d, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              Ze(!1)
            },
            body: (0, Xt.jsx)(XD, {
              engine: dV,
              onSetEngine: ZV,
              aiHints: Ne ? {
                shown: Lt,
                setShown: Ft
              } : null,
              variation: Ge ? {
                name: Re,
                setName: Ie,
                reload: PV
              } : null
            })
          })]
        })
      })),
      Om = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function qm(tt) {
      return "inventory" === tt
    }
    const Dm = (0, qt.memo)((function() {
      const {
        openEverythingMenuName: tt,
        openInGameMenuName: et
      } = (0, ot.k)(["openEverythingMenuName", "openInGameMenuName"]), Vt = (0, Wt.h)("fullInventory"), Dt = (0, qt.useRef)(null), mt = (0, Re.g)();
      (0, ht.f)("toggleMenu", (tt => {
        var et;
        if (!mt.shown) return;
        const Vt = ot.b.get("openInGameMenuName");
        let Ot = tt.split("|")[0];
        const qt = null !== (et = tt.split("|")[1]) && void 0 !== et ? et : null;
        ("closeCurrentMenu" === qt && Vt || Ot === Vt) && (Dt.current = null, Ot = null);
        const dt = "closeCurrentMenu" === qt ? null : qt;
        Dt.current !== dt && (Dt.current = dt), null !== Ot && (0, Xq.p)(Xq.c, {
          keepsMovement: qm(Ot)
        }), ot.b.set({
          openInGameMenuName: Ot
        })
      }));
      const dt = (0, qt.useCallback)((tt => () => {
          ft.j.sw("toggleMenu", tt)
        }), []),
        jt = (0, qt.useRef)({
          cantCrouchIfNotFullscreen: dt("cantCrouchIfNotFullscreen"),
          makeReport: dt("makeReport"),
          makeDiscordReport: dt("makeDiscordReport"),
          editBook: dt("editBook"),
          editNameTag: dt("editNameTag"),
          inventory: dt("inventory"),
          inviteLink: dt("inviteLink"),
          writeOnBoard: dt("writeOnBoard"),
          codeEditor: dt("codeEditor"),
          lobbyCodeEditor: dt("lobbyCodeEditor"),
          customLobbyBlockEditor: dt("customLobbyBlockEditor"),
          ironChestPasskeyInput: dt("ironChestPasskeyInput"),
          petUi: dt("petUi")
        }),
        Ht = (0, qt.useCallback)((() => {
          ot.b.set({
            openInGameMenuName: null
          })
        }), []),
        Qt = (0, qt.useRef)(null);
      return (0, qt.useEffect)((() => {
        if (et) {
          var tt;
          (0, Xq.p)(Xq.c, {
            keepsMovement: qm(et)
          }), Qt.current = Om.has(et) ? null !== (tt = ot.b.get("openEverythingMenuName")) && void 0 !== tt ? tt : Qt.current : null, ot.b.set({
            openEverythingMenuName: null
          })
        } else {
          const tt = Qt.current;
          Qt.current = null, null !== tt && null === ot.b.get("openEverythingMenuName") && ot.b.set({
            openEverythingMenuName: tt
          }), Dt.current = null, (0, Xq.m)(Xq.c)
        }
      }), [et]), (0, qt.useEffect)((() => {
        null !== tt && Ht()
      }), [tt, Ht]), (0, Xt.jsxs)(Xt.Fragment, {
        children: [(0, Xt.jsx)(Ot.i, {
          show: "clientGame" === et
        }), (0, Xt.jsx)(xO, {
          show: "cantCrouchIfNotFullscreen" === et,
          onOpen: jt.current.cantCrouchIfNotFullscreen,
          onClose: Ht
        }), (0, Xt.jsx)(Dq, {
          show: "makeReport" === et,
          onOpen: jt.current.makeReport,
          onClose: Ht
        }), (0, Xt.jsx)(Hq, {
          show: "makeDiscordReport" === et,
          onOpen: jt.current.makeDiscordReport,
          onClose: Ht
        }), (0, Xt.jsx)(VV, {
          show: "editBook" === et,
          onOpen: jt.current.editBook,
          onClose: Ht
        }), (0, Xt.jsx)(tV, {
          show: "editNameTag" === et,
          onOpen: jt.current.editNameTag,
          onClose: Ht
        }), Vt && (0, Xt.jsx)(YO, {
          show: "inventory" === et,
          onOpen: jt.current.inventory,
          onClose: Ht,
          variation: Dt.current
        }), (0, Xt.jsx)(Ie, {
          show: "inviteLink" === et,
          onClose: Ht,
          option: Dt.current
        }), (0, Xt.jsx)(Ft, {
          show: "retentionFeatures" === et,
          onClose: Ht
        }), (0, Xt.jsx)(ne, {
          show: "writeOnBoard" === et,
          onOpen: jt.current.writeOnBoard,
          onClose: Ht
        }), (0, Xt.jsx)(Vm, {
          show: "lobbyCodeEditor" === et,
          onOpen: jt.current.lobbyCodeEditor,
          onClose: Ht,
          isLobbyCode: !0
        }), (0, Xt.jsx)(Vm, {
          show: "codeEditor" === et,
          onOpen: jt.current.codeEditor,
          onClose: Ht,
          isLobbyCode: !1
        }), (0, Xt.jsx)(lq, {
          show: "customLobbyBlockEditor" === et,
          onOpen: jt.current.customLobbyBlockEditor,
          onClose: Ht
        }), (0, Xt.jsx)(CV, {
          show: "ironChestPasskeyInput" === et,
          onOpen: jt.current.ironChestPasskeyInput,
          onClose: Ht
        }), (0, Xt.jsx)(aq, {
          togglePointerLock: !0,
          show: "petUi" === et,
          onOpen: jt.current.petUi,
          onClose: Ht
        })]
      })
    }))
  },
  36753: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Zm
    });
    Vt(36757);
    var Ot = Vt(1894),
      qt = Vt(63),
      Dt = Vt(1140),
      mt = Vt.n(Dt),
      dt = Vt(3792),
      jt = Vt(1554),
      Ht = Vt(2001),
      Xt = Vt(1188);

    function Qt() {
      const tt = 2e3,
        [et, Vt] = (0, qt.useState)(null),
        [Ot, Dt] = (0, qt.useState)(null),
        Qt = (0, qt.useRef)(null);
      (0, jt.f)("showBottomMessage", (et => {
        let {
          message: Vt,
          timeoutLength: Ot = tt,
          type: qt
        } = et;
        Dt({
          message: Vt,
          type: qt
        }), clearTimeout(Qt.current), Qt.current = setTimeout((() => {
          Dt(null)
        }), Ot)
      })), (0, jt.f)("showPermanentBottomMessage", (tt => {
        Vt(tt)
      })), (0, qt.useEffect)((() => ((0, dt.c)((() => {
        Vt(null)
      })), () => {
        clearTimeout(Qt.current)
      })), []);
      const lt = Ot || et;
      return lt ? (0, Xt.jsx)("div", {
        className: mt()("BottomScreenMessage", lt.type),
        children: (0, Xt.jsx)(Ht.e, {
          text: lt.message
        })
      }) : null
    }
    var lt = Vt(2419),
      Et = Vt(2024),
      ft = Vt(1613),
      wt = Vt(2504);

    function yt() {
      let tt;
      const et = () => {
          clearTimeout(tt), tt = setTimeout((() => {
            Et.gameBridge.latest("connectedGame").replay || (Et.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, ft.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        Vt = () => {
          clearTimeout(tt)
        };
      return window.addEventListener("focus", Vt), window.addEventListener("blur", et), () => {
        window.removeEventListener("blur", et), window.removeEventListener("focus", Vt), clearTimeout(tt)
      }
    }
    var Nt = Vt(1218),
      Mt = Vt(3176),
      bt = Vt(377),
      Jt = Vt(2498),
      Ct = Vt(31),
      ut = Vt(2043),
      Kt = Vt(39),
      ht = Vt(2063),
      vt = Vt(26),
      Wt = Vt(2066),
      St = Vt(1492),
      ct = Vt(9050),
      Rt = Vt(2088),
      It = Vt(1286);
    const Pt = (0, qt.memo)((function() {
      const {
        isTouchScreen: tt,
        loadingOverlayVisible: et,
        openInGameMenuName: Vt,
        openEverythingMenuName: Ot
      } = (0, vt.k)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), Dt = (0, St.v)();
      (0, Mt.c)();
      const dt = (0, Jt.i)("showBasicMovementControls"),
        [jt, Ht] = (0, qt.useState)("movement"),
        Qt = "movement" === jt,
        lt = Dt && !1 !== dt;
      (0, qt.useEffect)((() => {
        "padActions" !== jt || lt || Ht("done")
      }), [jt, lt]);
      const Et = et || null !== Vt || null !== Ot,
        ft = (0, qt.useRef)({
          step: jt,
          ms: 0
        });
      return (0, qt.useEffect)((() => {
        if (Et || "done" === jt) return;
        ft.current.step !== jt && (ft.current = {
          step: jt,
          ms: 0
        });
        const tt = ft.current,
          et = performance.now(),
          Vt = setTimeout((() => {
            Ht("movement" === jt && (0, St.j)() ? "padActions" : "done")
          }), 7e3 - tt.ms);
        return () => {
          clearTimeout(Vt), tt.ms += performance.now() - et
        }
      }), [Et, jt]), Kt.e.getItem(bt.vb) > 2 ? (0, Xt.jsx)(kt, {
        showingMovementControls: !1
      }) : (0, Xt.jsxs)(Xt.Fragment, {
        children: [tt && !Dt || !Qt || !1 === dt ? null : (0, Xt.jsxs)("div", {
          className: mt()("ControlsTutorialDiv", {
            Covered: Et
          }),
          children: [(0, Xt.jsx)(Zt, {}), (0, Xt.jsx)(Ft, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Xt.jsx)(Ft, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === jt && lt && (0, Xt.jsx)(Lt, {
          covered: Et
        }), (0, Xt.jsx)(kt, {
          showingMovementControls: "done" !== jt
        })]
      })
    }));

    function Zt() {
      const tt = (0, St.v)();
      return (0, Xt.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Xt.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), tt && (0, Xt.jsx)(Wt.d, {
          noaAction: "forward"
        }), !tt && (0, Xt.jsxs)(Xt.Fragment, {
          children: [(0, Xt.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Xt.jsx)(Wt.d, {
              noaAction: "forward"
            })
          }), (0, Xt.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Xt.jsx)(Wt.d, {
              noaAction: "left"
            }), (0, Xt.jsx)(Wt.d, {
              noaAction: "backward"
            }), (0, Xt.jsx)(Wt.d, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function Lt(tt) {
      let {
        covered: et
      } = tt;
      const {
        t: Vt
      } = (0, It.H)(), Ot = (0, Jt.i)("useInventory");
      return (0, Xt.jsxs)("div", {
        className: mt()("ControlsTutorialDiv", {
          Covered: et
        }),
        children: [(0, Xt.jsx)(Ft, {
          header: Vt("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Xt.jsx)(Ft, {
          header: Vt("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== Ot && (0, Xt.jsx)(Ft, {
          header: Vt("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Xt.jsx)(Ft, {
          header: Vt("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Ft(tt) {
      let {
        header: et,
        noaAction: Vt
      } = tt;
      return (0, Xt.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Xt.jsx)("div", {
          className: "KeyHeader",
          children: et
        }), (0, Xt.jsx)(Wt.d, {
          noaAction: Vt
        })]
      })
    }

    function kt(tt) {
      let {
        showingMovementControls: et
      } = tt;
      const {
        isTouchScreen: Vt
      } = (0, vt.k)(["isTouchScreen"]), Ot = (0, St.v)(), Dt = (0, Rt.e)("OpenShop"), [mt, dt] = (0, qt.useState)(!1), jt = `SeenShopControls|${(0,ht.g)("connectedGame",(tt=>tt.gameNameWithVariation))}`, Ht = () => (!(0, St.j)() || null !== (0, ct.c)("OpenShop")) && !Kt.e.getItem(jt) && ut.b.get("shopInfo") && !et, Qt = () => (dt(!0), Kt.e.setItem(jt, !0), (0, St.j)() || Ct.j.sw("showShopTouchTutorial"), setTimeout((() => {
        dt(!1)
      }), 7e3));
      (0, qt.useEffect)((() => {
        let tt;
        const et = Ct.j.subscribe("showShopTutorial", (() => {
          Ht() && (tt = Qt())
        }));
        return () => {
          clearTimeout(tt), Ct.j.unsubscribe(et)
        }
      }), [et]);
      const lt = (0, qt.useRef)();
      return (0, Jt.h)("currencyAmounts", (tt => {
        if (Ht()) {
          let Vt = !1;
          const Ot = ut.b.get("shopInfo");
          for (const qt in Ot) {
            for (const Dt in Ot[qt].items) {
              var et;
              const mt = Ot[qt].items[Dt];
              if (void 0 !== mt.currency && tt[mt.currency] && mt.cost <= tt[mt.currency].amount && (null === (et = mt.hidden) || void 0 === et || !et)) {
                Vt = !0;
                break
              }
            }
            if (Vt) break
          }
          Vt && (lt.current = Qt())
        }
      })), (0, qt.useEffect)((() => () => {
        clearTimeout(lt.current)
      }), [et]), !mt || Ot && !Dt ? null : (0, Xt.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: Vt && !Ot ? null : (0, Xt.jsx)(Ft, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var Gt = Vt(1464),
      zt = Vt(1152);
    const ot = (0, qt.memo)((function() {
      return (0, Mt.c)(), (0, Xt.jsx)(rt, {})
    }));
    class rt extends qt.Component {
      constructor(tt) {
        super(tt), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = Ct.j.subscribe("TopRightHelper", (tt => {
          this.showQueue.push(tt), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        Ct.j.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(tt, et) {
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
        let tt, et, Vt, Ot, qt, Dt = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, tt = "slideIn") : "slideOut" === this.state.currState ? tt = "slideOut" : null === this.currMessage && (Dt = !1), this.currMessage) {
          const Dt = this.currMessage.color || "rgb(102, 102, 102)";
          et = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === tt ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, Vt = {
            backgroundColor: Dt
          }, Ot = {
            animation: "2s " + ("slideOut" === tt ? "CloseNotification" : "ExpandNotification")
          }, qt = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === tt ? "textDisappear" : "textAppear")
          }
        }
        return Dt ? (0, Xt.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...et
          },
          children: [(0, Xt.jsx)("div", {
            className: "LeftSide",
            style: Vt,
            children: (0, Xt.jsx)(zt.b, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, Xt.jsx)("div", {
            className: "RightSide",
            style: Ot,
            children: (0, Xt.jsx)("div", {
              className: "HelperText",
              style: qt,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var Ut = Vt(36765),
      At = Vt(1513);
    const it = (0, At.i)((tt => tt.PadSneakChip));

    function Yt(tt) {
      const [et, Vt, Ot] = function(tt) {
        const et = parseInt(tt.substring(1), 16),
          Vt = (et >> 16) / 255,
          Ot = (et >> 8 & 255) / 255,
          qt = (255 & et) / 255,
          Dt = Math.max(Vt, Ot, qt),
          mt = Math.min(Vt, Ot, qt),
          dt = (Dt + mt) / 2,
          jt = Dt - mt;
        if (0 === jt) return [0, 0, dt];
        const Ht = jt / (1 - Math.abs(2 * dt - 1));
        let Xt;
        Xt = Dt === Vt ? (Ot - qt) / jt % 6 : Dt === Ot ? (qt - Vt) / jt + 2 : (Vt - Ot) / jt + 4;
        return [(60 * Xt + 360) % 360, Ht, dt]
      }(tt), qt = 0 === Vt ? 0 : Math.min(.6, Vt + .03), Dt = Ot > .5 ? -1 : 1, mt = Bt(Ot + .09 * Dt);
      return {
        panel: tt,
        slot: pt(et, qt, mt),
        slotSelected: pt(et, qt, Bt(mt + .2 * Dt)),
        slotUnavailable: pt(et, qt, Bt(Ot + -.1 * Dt))
      }
    }

    function Bt(tt) {
      return Math.min(1, Math.max(0, tt))
    }

    function pt(tt, et, Vt) {
      const Ot = (1 - Math.abs(2 * Vt - 1)) * et,
        qt = Ot * (1 - Math.abs(tt / 60 % 2 - 1)),
        Dt = Vt - Ot / 2;
      let mt;
      return mt = tt < 60 ? [Ot, qt, 0] : tt < 120 ? [qt, Ot, 0] : tt < 180 ? [0, Ot, qt] : tt < 240 ? [0, qt, Ot] : tt < 300 ? [qt, 0, Ot] : [Ot, 0, qt], "#" + mt.map((tt => function(tt) {
        return Math.round(255 * tt).toString(16).padStart(2, "0")
      }(tt + Dt))).join("")
    }
    var xt = Vt(36779),
      Tt = Vt(4376),
      gt = Vt(2458),
      st = Vt(2465),
      nt = Vt(36839),
      te = Vt(4980),
      ee = Vt(1571),
      Ve = Vt(710);

    function Oe(tt, et, Vt, Ot) {
      tt.style.display = "";
      const qt = tt.offsetWidth,
        Dt = tt.offsetHeight,
        mt = Math.min(Math.max((et.left + et.right) / 2 - qt / 2, 8), window.innerWidth - 8 - qt);
      let dt = et.top - Vt - Dt;
      const jt = [...Ot].sort(((tt, et) => et.top - tt.top));
      for (const Ht of jt) mt < Ht.right && mt + qt > Ht.left && dt < Ht.bottom && dt + Dt > Ht.top && (dt = Ht.top - 8 - Dt);
      return dt < 8 ? (tt.style.display = "none", null) : (tt.style.transform = `translate(${mt-et.left}px, ${dt-et.top}px)`, {
        left: mt,
        top: dt,
        right: mt + qt,
        bottom: dt + Dt
      })
    }

    function qe(tt) {
      const et = [];
      for (const Vt of document.querySelectorAll(tt)) {
        const tt = Vt.getBoundingClientRect();
        tt.width > 0 && "visible" === getComputedStyle(Vt).visibility && et.push(tt)
      }
      return et
    }

    function De(tt, et) {
      return tt.clientX >= et.left - 8 && tt.clientX <= et.right + 8 && tt.clientY >= et.top - 8 && tt.clientY <= et.bottom + 8
    }
    var me = Vt(9101);
    class de {
      constructor(tt) {
        this.deps = tt, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(tt) {
        tt && "armed" === this.phase ? this.setPhase("ready") : tt || "ready" !== this.phase || this.setPhase("armed")
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
      hold(tt, et) {
        this.suspended || (this.offered ? et || this.setPhase("idle") : tt && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : tt || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(tt) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const et = this.phase;
        this.phase = tt, this.deps.onPhase(tt, et)
      }
    }
    const je = 25 * Math.PI / 180,
      He = 45 * Math.PI / 180;
    class Xe extends de {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(tt, et, Vt) {
        this.speed = Vt;
        const Ot = Math.hypot(tt, et),
          qt = Ot > 0 ? Math.acos(Math.min(1, -et / Ot)) : Math.PI;
        this.hold(Ot >= .8 && qt <= je, Ot >= .5 && qt <= He)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var Qe = Vt(1387);

    function le(tt, et) {
      const Vt = (0, qt.useRef)(null),
        Ot = (0, qt.useRef)(et);
      return Ot.current = et, (0, qt.useEffect)((() => {
        if (!tt) return;
        const {
          create: et,
          elementRef: qt,
          ringRef: Dt,
          classPrefix: mt,
          keptBehindMovementPanels: dt,
          resizeEnds: jt
        } = Ot.current, Ht = {
          charging: `${mt}Charging`,
          armed: `${mt}Armed`,
          ready: `${mt}Ready`,
          locked: `${mt}Locked`
        };
        let Xt = null;
        const Qt = et({
          onPhase: (tt, et) => {
            const Vt = qt.current;
            if (null !== Vt) {
              for (const [et, Ot] of Object.entries(Ht)) Vt.classList.toggle(Ot, et === tt);
              if ("charging" === tt) Xt = Dt.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === tt) {
                var mt;
                null === (mt = Xt) || void 0 === mt || mt.cancel(), Xt = null
              }
              var dt, jt;
              if ("armed" === tt && "charging" === et && Ot.current.onArmed(), "ready" === tt && me.d.play("lockReady"), "locked" === tt) me.d.play("lockLocked"), null === (dt = (jt = Ot.current).onLocked) || void 0 === dt || dt.call(jt);
              "locked" === et && Ot.current.onUnlocked()
            }
          }
        });
        Vt.current = Qt;
        const lt = () => {
            Qt.suspend()
          },
          Et = () => {
            "hidden" === document.visibilityState && lt()
          },
          ft = () => {
            jt ? Qt.suspend() : Qt.suspendArming()
          },
          wt = (0, Qe.j)((tt => {
            let {
              keepsMovement: et
            } = tt;
            et && dt ? Qt.suspendArming() : lt()
          }));
        return document.addEventListener("visibilitychange", Et), window.addEventListener("blur", lt), window.addEventListener("resize", ft), () => {
          wt(), document.removeEventListener("visibilitychange", Et), window.removeEventListener("blur", lt), window.removeEventListener("resize", ft), Qt.cancel(), Vt.current = null
        }
      }), [tt]), (0, ht.e)("localPlayerAliveSet", (() => {
        var tt;
        null === (tt = Vt.current) || void 0 === tt || tt.suspend()
      })), Vt
    }
    const Ee = "data-joystick-tap";

    function fe(tt) {
      var et, Vt;
      const Ot = null === (et = (Vt = tt).closest) || void 0 === et ? void 0 : et.call(Vt, `[${Ee}]`);
      return Ot instanceof HTMLElement ? Ot : null
    }
    class we {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var tt, et;
        return null !== (tt = null === (et = this.tap) || void 0 === et ? void 0 : et.id) && void 0 !== tt ? tt : null
      }
      land(tt, et) {
        null === this.tap && (this.tap = {
          key: tt,
          id: et.identifier,
          x: et.clientX,
          y: et.clientY
        }, (0, ee.i)(tt, !0))
      }
      slidFrom(tt) {
        const et = this.tap,
          Vt = et ? tt.find((tt => tt.identifier === et.id)) : void 0;
        return !Vt || Math.hypot(Vt.clientX - et.x, Vt.clientY - et.y) <= 12 ? null : (this.end(!1), {
          identifier: et.id,
          clientX: et.x,
          clientY: et.y
        })
      }
      end(tt) {
        const et = this.tap;
        et && (this.tap = null, (0, ee.i)(et.key, !1), tt && et.key.click())
      }
    }
    var ye = Vt(2537),
      Ne = Vt(2559),
      ae = Vt(1204),
      Me = Vt(3478),
      be = Vt(2569);

    function Je(tt, et, Vt) {
      const Ot = function(tt, et, Vt) {
        const Ot = Vt.map((Vt => ({
            left: Math.max(0, Vt.left),
            top: Math.max(0, Vt.top),
            right: Math.min(tt, Vt.right),
            bottom: Math.min(et, Vt.bottom)
          }))).filter((tt => tt.right > tt.left && tt.bottom > tt.top)),
          qt = [...new Set([0, et, ...Ot.flatMap((tt => [tt.top, tt.bottom]))])].sort(((tt, et) => tt - et)),
          Dt = [];
        for (let mt = 0; mt < qt.length - 1; mt++) {
          const et = qt[mt],
            Vt = qt[mt + 1],
            dt = Ot.filter((tt => tt.top <= et && tt.bottom >= Vt)).map((tt => [tt.left, tt.right])).sort(((tt, et) => tt[0] - et[0]));
          let jt = 0;
          for (const [tt, Ot] of dt) tt > jt && Dt.push({
            left: jt,
            top: et,
            right: tt,
            bottom: Vt
          }), jt = Math.max(jt, Ot);
          jt < tt && Dt.push({
            left: jt,
            top: et,
            right: tt,
            bottom: Vt
          })
        }
        return Dt
      }(tt, et, Vt);
      if (0 === Ot.length) return 'path("M0 0Z")';
      if (1 === Ot.length && 0 === Ot[0].left && 0 === Ot[0].top && Ot[0].right === tt && Ot[0].bottom === et) return "";
      const qt = tt => Math.round(10 * tt) / 10;
      return `path("${Ot.map((tt=>`M${qt(tt.left)} ${qt(tt.top)}H${qt(tt.right)}V${qt(tt.bottom)}H${qt(tt.left)}Z`)).join("")}")`
    }

    function Ce(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const qt = [],
        Dt = 2 * Vt / Ot;
      for (let mt = 0; mt < Ot; mt++) {
        const Ot = et - Vt + mt * Dt,
          dt = Ot + Dt,
          jt = Math.min(Math.max(et, Ot), dt) - et,
          Ht = Math.sqrt(Math.max(0, Vt * Vt - jt * jt));
        qt.push({
          left: tt - Ht,
          top: Ot,
          right: tt + Ht,
          bottom: dt
        })
      }
      return qt
    }
    var ue = Vt(9114),
      Ke = Vt(36810);

    function he(tt) {
      const et = tt.getBoundingClientRect(),
        Vt = {
          left: et.left,
          top: et.top,
          right: et.right,
          bottom: et.bottom
        },
        Ot = (0, nt.e)(tt);
      if (Ot.whole) return [Vt];
      const qt = function(tt) {
          const et = tt.right - tt.left,
            Vt = tt.bottom - tt.top,
            Ot = Math.min(et, Vt) / 2,
            qt = (tt.left + tt.right) / 2,
            Dt = (tt.top + tt.bottom) / 2;
          return et >= Vt ? [{
            left: tt.left + Ot,
            top: tt.top,
            right: tt.right - Ot,
            bottom: tt.bottom
          }, ...Ce(tt.left + Ot, Dt, Ot), ...Ce(tt.right - Ot, Dt, Ot)] : [{
            left: tt.left,
            top: tt.top + Ot,
            right: tt.right,
            bottom: tt.bottom - Ot
          }, ...Ce(qt, tt.top + Ot, Ot), ...Ce(qt, tt.bottom - Ot, Ot)]
        }(Vt),
        Dt = Ot.keyBox;
      if (Dt) {
        const tt = (Vt.left + Vt.right) / 2,
          et = (Vt.top + Vt.bottom) / 2;
        qt.push({
          left: tt - Dt.width / 2,
          top: et - Dt.height / 2,
          right: tt + Dt.width / 2,
          bottom: et + Dt.height / 2
        })
      }
      return qt
    }

    function ve(tt) {
      const et = tt.getBoundingClientRect();
      return 0 === et.width && 0 === et.height || "visible" !== getComputedStyle(tt).visibility ? [] : [(0, ue.o)(et, 44)]
    }

    function We(tt, et) {
      (0, qt.useEffect)((() => {
        const Vt = tt.current;
        if (!et || !Vt) return;
        const Ot = () => {
          const tt = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            et = tt.find((tt => tt.classList.contains("TouchInteractHit")));
          et !== qt && (qt && Dt.unobserve(qt), qt = et, et && Dt.observe(et));
          const Ot = Array.from(document.querySelectorAll(be.e)),
            mt = [...tt.flatMap((tt => he(tt))), ...Ot.flatMap(ve)],
            dt = function(tt, et) {
              const Vt = et.map((et => ({
                left: et.left - tt.left,
                top: et.top - tt.top,
                right: et.right - tt.left,
                bottom: et.bottom - tt.top
              })));
              return Je(Math.ceil(tt.width), Math.ceil(tt.height), Vt)
            }(Vt.getBoundingClientRect(), mt);
          Vt.style.clipPath !== dt && (Vt.style.clipPath = dt)
        };
        let qt;
        const Dt = new ResizeObserver((() => {
          Ot()
        }));
        Ot(), Dt.observe(Vt);
        const mt = Vt.closest(".InGameUi"),
          dt = new MutationObserver(Ot);
        mt && dt.observe(mt, {
          attributes: !0,
          attributeFilter: ["class", Ke.f]
        });
        const jt = [(0, Ct.n)(Me.c, Ot), (0, Ct.n)(be.u, Ot), (0, Ct.n)(be.h, Ot)];
        return () => {
          Dt.disconnect(), dt.disconnect();
          for (const tt of jt) tt();
          Vt.style.clipPath = ""
        }
      }), [tt, et])
    }
    var Se = Vt(4537);

    function ce(tt) {
      var et;
      let {
        onMove: Vt,
        mode: Ot,
        speedCurve: Dt,
        autorun: mt = !1,
        keys: dt
      } = tt;
      const jt = (0, qt.useRef)(null),
        Ht = (0, qt.useRef)(null),
        Qt = (0, qt.useRef)(null),
        lt = (0, qt.useRef)(null),
        ft = (0, qt.useRef)(null),
        wt = (0, qt.useRef)(null),
        yt = (0, qt.useRef)(new we).current,
        Nt = (0, qt.useRef)(null),
        Mt = (0, qt.useRef)(null),
        bt = (0, qt.useRef)(null),
        Jt = (0, qt.useRef)(!1),
        Ct = (0, qt.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: ut
        } = (0, It.H)(),
        Kt = (0, Se.t)(Ot),
        ht = (0, vt.k)(["notchSize"]).notchSize,
        Wt = ht.left,
        St = (0, qt.useRef)(16),
        ct = (0, Ne.g)(),
        [Rt, Pt, Zt] = "pinned" === Ot ? ye.l : null !== (et = ct.hudElements.joystick) && void 0 !== et ? et : ye.l,
        Lt = "pinned" === Ot ? null : ct.hudSafe,
        Ft = Math.max(Se.l, Se.p * Zt);
      We(Ht, "pinned" !== Ot);
      const kt = function(tt, et, Vt, Ot, Dt) {
        const mt = (0, qt.useRef)(null),
          dt = () => {
            clearInterval(mt.current), mt.current = null
          },
          jt = le(tt, {
            create: tt => new Xe(tt),
            elementRef: et,
            ringRef: Vt,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: Dt,
            onLocked: () => {
              mt.current = setInterval((() => {
                Et.gameBridge.lookup("dropAhead", null) && (me.d.play("autorunLedgeStop"), jt.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              dt(), Ot()
            }
          });
        return (0, qt.useEffect)((() => dt), []), jt
      }(mt, Qt, Nt, (() => {
        Yt(), it()
      }), (() => {
        Gt(), null === bt.current && kt.current.suspend()
      }));

      function Gt() {
        const tt = Qt.current.getBoundingClientRect();
        bt.current = Oe(Mt.current, tt, 80, qe(`.TouchInventoryKey, .TouchSprintKey, ${be.e}`)), Jt.current = null !== bt.current && De(Ct.current, bt.current)
      }

      function ot() {
        const {
          innerWidth: tt,
          innerHeight: et
        } = window, Vt = (0, be.H)(Lt, tt, et, (0, be.J)(ht, tt, et), St.current);
        return {
          left: Vt[3],
          bottom: Vt[2]
        }
      }

      function rt(tt) {
        Qt.current.style.transform = `translate(${tt.x-Ft}px, ${tt.y-Ft}px)`
      }

      function Ut(tt) {
        const et = Qt.current;
        et.classList.add("Resting"), et.classList.toggle("Returning", tt), et.style.display = "fixed_hidden" === Ot ? "none" : "block", rt(function() {
          const {
            innerWidth: tt,
            innerHeight: et
          } = window, Vt = ot(), Ot = Wt * tt / 100 + Vt.left, qt = jt.current.offsetHeight || et, Dt = ((0, ae.d)(tt, et) ? Se.g : Se.e) + Vt.bottom;
          return {
            x: Math.min(tt - Ft, Math.max(Ft, Ot + Se.i + Rt * tt)),
            y: Math.min(qt - Ft, Math.max(Ft, qt - Dt + Pt * qt))
          }
        }())
      }
      const At = (0, qt.useRef)({
        restFixed: Ut,
        release: Bt
      });

      function it() {
        Kt ? Ut("fixed_shown" === Ot) : "floating" === Ot && (Qt.current.style.display = "none"), Vt({
          x: 0,
          y: 0
        })
      }

      function Yt() {
        wt.current = null, ft.current = null, lt.current.style.transform = "translate(-50%, -50%)"
      }

      function Bt(tt) {
        Yt();
        const et = kt.current;
        tt && null !== et && void 0 !== et && et.lift() ? Vt({
          x: 0,
          y: -et.lockedSpeed
        }) : (null === et || void 0 === et || et.cancel(), it())
      }

      function pt(tt) {
        var et;
        if (null === (et = kt.current) || void 0 === et || et.startTouch(), "pinned" === Ot) {
          const tt = Qt.current.getBoundingClientRect();
          ft.current = {
            x: tt.left + tt.width / 2,
            y: tt.top + tt.height / 2
          }
        } else {
          ft.current = {
            x: tt.clientX,
            y: tt.clientY
          }, Qt.current.classList.remove("Resting", "Returning"), Qt.current.style.display = "block";
          const et = jt.current.getBoundingClientRect();
          rt({
            x: tt.clientX - et.left,
            y: tt.clientY - et.top
          }), mt && (Ct.current = {
            clientX: tt.clientX,
            clientY: tt.clientY
          }, Gt())
        }
      }

      function xt(tt) {
        const et = yt.slidFrom(Array.from(tt.touches));
        et && null === wt.current && (wt.current = et.identifier, pt(et));
        const Ot = Array.from(tt.touches).find((tt => tt.identifier === wt.current));
        if (null === ft.current || null === wt.current || (0, Ve.B)(Ot)) return;
        const qt = kt.current,
          mt = Ot.clientX - ft.current.x,
          dt = Ot.clientY - ft.current.y,
          jt = Math.hypot(mt, dt),
          Ht = jt > 0 ? Math.min(1, Ft / jt) : 0,
          Xt = mt * Ht,
          Qt = dt * Ht,
          Et = Math.hypot(Xt, Qt) / Ft,
          Nt = Dt && Et > 0 ? Dt(Et) / Et : 1;
        lt.current.style.transform = `translate(calc(-50% + ${Xt}px), calc(-50% + ${Qt}px))`;
        const Mt = Xt / Ft,
          ut = Qt / Ft;
        if (Vt({
            x: Mt * Nt,
            y: ut * Nt
          }), null !== qt && null !== bt.current) {
          qt.move(Mt, ut, Et * Nt), Ct.current = {
            clientX: Ot.clientX,
            clientY: Ot.clientY
          };
          const tt = Jt.current;
          Jt.current = De(Ot, bt.current), Jt.current !== tt && qt.target(Jt.current)
        }
      }
      return At.current = {
        restFixed: Ut,
        release: Bt
      }, (0, qt.useLayoutEffect)((() => {
        if (!Kt) return;
        const tt = () => {
          St.current = (0, be.N)(document)
        };
        tt(), null === wt.current && At.current.restFixed(!1);
        const et = new ResizeObserver((() => {
          tt(), null === wt.current && At.current.restFixed(!1)
        }));
        et.observe(jt.current);
        const Vt = Qt.current;
        return () => {
          et.disconnect(), Vt.classList.remove("Resting", "Returning"), null === wt.current && (Vt.style.display = "", Vt.style.transform = "")
        }
      }), [Kt, Ot, ht, Rt, Pt, Ft, Lt]), (0, qt.useEffect)((() => {
        const tt = (tt, et) => void 0 === et || null === et || Array.from(tt.touches).some((tt => tt.identifier === et)) ? null : {
            lifted: "touchend" === tt.type && Array.from(tt.changedTouches).some((tt => tt.identifier === et))
          },
          et = et => {
            const Vt = tt(et, wt.current);
            Vt && At.current.release(Vt.lifted);
            const Ot = tt(et, yt.touchId);
            Ot && yt.end(Ot.lifted)
          },
          Vt = () => {
            null !== wt.current && At.current.release(!1), yt.end(!1)
          },
          Ot = () => {
            "hidden" === document.visibilityState && Vt()
          };
        document.addEventListener("touchstart", et, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", et, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", et, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", et, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", Vt), document.addEventListener("visibilitychange", Ot);
        const qt = (0, Qe.j)((tt => {
          let {
            keepsMovement: et
          } = tt;
          et || Vt()
        }));
        return () => {
          qt(), document.removeEventListener("touchstart", et, {
            capture: !0
          }), document.removeEventListener("touchmove", et, {
            capture: !0
          }), document.removeEventListener("touchend", et, {
            capture: !0
          }), document.removeEventListener("touchcancel", et, {
            capture: !0
          }), window.removeEventListener("blur", Vt), document.removeEventListener("visibilitychange", Ot)
        }
      }), []), (0, qt.useEffect)((() => {
        const tt = jt.current,
          et = tt => {
            tt.preventDefault()
          };
        return tt.addEventListener("touchstart", et, {
          passive: !1
        }), () => {
          tt.removeEventListener("touchstart", et)
        }
      }), []), (0, Xt.jsxs)("div", {
        ref: jt,
        className: "JoystickZone",
        style: Kt && (Rt > 0 || Zt > 1 || ot().left > 0) ? {
          width: `max(35vw, calc(${Wt+100*Rt}vw + ${ot().left+Se.i+Ft+24}px))`
        } : void 0,
        onTouchStart: function(tt) {
          const et = Array.from(tt.changedTouches).filter((tt => {
            var et;
            return null === (et = jt.current) || void 0 === et ? void 0 : et.contains(tt.target)
          }));
          for (const Ot of et) {
            const tt = fe(Ot.target);
            tt && yt.land(tt, Ot)
          }
          const Vt = et.find((tt => null === fe(tt.target)));
          Vt && null === wt.current && (wt.current = Vt.identifier, pt(Vt), xt(tt))
        },
        onTouchMove: xt,
        children: [(0, Xt.jsx)("div", {
          ref: Ht,
          className: "JoystickTouchLayer"
        }), (0, Xt.jsxs)("div", {
          ref: Qt,
          className: "Joystick",
          style: {
            width: 2 * Ft + "px",
            height: 2 * Ft + "px",
            transform: "pinned" === Ot ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, Xt.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * Ft + "px",
              height: 2 * Ft + "px"
            }
          }), mt && (0, Xt.jsxs)(Xt.Fragment, {
            children: [(0, Xt.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, Xt.jsx)("circle", {
                ref: Nt,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, Xt.jsxs)("div", {
              ref: Mt,
              className: "AutorunTarget",
              children: [(0, Xt.jsx)(zt.b, {
                name: "lock"
              }), ut("settingsMenu:autoRun")]
            })]
          }), (0, Xt.jsx)("div", {
            ref: lt,
            className: "JoystickKnob",
            style: {
              width: `${Ft}px`,
              height: `${Ft}px`
            }
          })]
        }), dt]
      })
    }
    var Re = Vt(318);
    const Ie = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      Pe = {
        short_creep: {
          ...Ie,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...Ie,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...Ie,
          deadZone: .05
        },
        control: Ie
      };

    function Ze(tt) {
      return function(tt, et) {
        const {
          deadZone: Vt,
          creepEnd: Ot,
          fullSpeedAt: qt,
          creepMin: Dt,
          creepMax: mt
        } = tt;
        if (et < Vt) return 0;
        if (et < Ot) {
          const tt = (et - Vt) / (Ot - Vt);
          return Dt + (mt - Dt) * tt * tt
        }
        return et < qt ? mt + (1 - mt) * (et - Ot) / (qt - Ot) : 1
      }(Pe[Re.c.mobile_walk_curve_v1], tt)
    }
    var Le = Vt(9120);

    function Fe(tt, et) {
      const Vt = (0, qt.useRef)(null);
      return (0, qt.useLayoutEffect)((() => (nt.h.set(tt, Vt.current, et), () => {
        nt.h.set(tt, null)
      })), [tt, et]), Vt
    }
    const ke = "C",
      Ge = "J",
      ze = "U",
      oe = "A",
      re = "G",
      Ue = "X",
      Ae = (0, qt.forwardRef)((function(tt, et) {
        let {
          slot: Vt,
          canvasZone: Ot = !1,
          lit: Dt = !1,
          label: dt,
          className: jt,
          children: Ht,
          ...Qt
        } = tt;
        return (0, qt.useEffect)((() => (Ct.j.sw(Me.c), () => {
          Ct.j.sw(Me.c)
        })), []), (0, Xt.jsx)("div", {
          ref: et,
          className: mt()("TouchKeyHit", `TouchSlot${Vt}`, jt, {
            CanvasZone: Ot
          }),
          ...Qt,
          children: (0, Xt.jsxs)("div", {
            className: mt()("TouchKey", {
              Lit: Dt,
              Labelled: void 0 !== dt
            }),
            children: [Ht, void 0 !== dt && (0, Xt.jsx)("span", {
              className: "TouchKeyLabel",
              children: dt
            })]
          })
        })
      }));

    function ie(tt, et) {
      (0, qt.useEffect)((() => () => {
        et.current && (et.current = !1, (0, st.y)(tt, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function Ye(tt, et) {
      const Vt = (0, Le.i)(et);
      return tt.filter((tt => null !== tt)).slice(0, Vt.length).map(((tt, et) => {
        const Ot = Vt[et];
        return (0, Xt.jsx)(qt.Fragment, {
          children: tt.render(Ot)
        }, `${tt.id}:${Ot}`)
      }))
    }
    var Be = Vt(36823);
    class pe extends de {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(tt, et) {
        this.start = {
          x: tt,
          y: et
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(tt, et, Vt) {
        const Ot = Math.hypot(tt - this.start.x, et - this.start.y) <= 12;
        this.moved ||= !Ot;
        const qt = null !== Vt && et < this.start.y - 12 && De({
          clientX: tt,
          clientY: et
        }, Vt);
        this.hold(!this.moved, Ot || qt)
      }
    }
    const xe = new Set;

    function Te(tt) {
      const et = new Set(Array.from(tt.touches, (tt => tt.identifier)));
      for (const Vt of xe) {
        for (const tt of Vt.ids) et.has(tt) || Vt.ids.delete(tt);
        if (0 === Vt.ids.size) {
          xe.delete(Vt);
          Vt.pressesOnPointerDown && "touchstart" === tt.type && Array.from(tt.changedTouches).some((tt => tt.target instanceof Node && Vt.element.contains(tt.target))) || Vt.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const im of ["touchstart", "touchmove"]) window.addEventListener(im, Te, {
        capture: !0,
        passive: !0
      });

    function ge(tt) {
      let {
        pressesOnPointerDown: et = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Vt = (0, qt.useRef)(tt);
      Vt.current = tt;
      const Ot = (0, qt.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: et,
        release: () => {
          Vt.current()
        }
      });
      (0, qt.useEffect)((() => {
        const tt = Ot.current;
        return () => {
          xe.delete(tt), tt.ids.clear()
        }
      }), []);
      const Dt = tt => {
        const et = Ot.current;
        for (const Vt of Array.from(tt.changedTouches)) et.ids.delete(Vt.identifier);
        0 === et.ids.size && xe.delete(et)
      };
      return {
        onTouchStart: tt => {
          const et = Ot.current;
          et.element = tt.currentTarget;
          for (const Vt of Array.from(tt.changedTouches)) Vt.target instanceof Node && tt.currentTarget.contains(Vt.target) && et.ids.add(Vt.identifier);
          et.ids.size > 0 && xe.add(et)
        },
        onTouchEnd: Dt,
        onTouchCancel: Dt
      }
    }

    function se(tt, et) {
      return null === et ? null : (0, Be.c)(tt.nativeEvent.changedTouches, et.id)
    }

    function ne(tt) {
      let {
        lockable: et
      } = tt;
      const {
        t: Vt
      } = (0, It.H)(), Ot = "round" === (0, ye.$)().hudShape, Dt = (0, qt.useRef)(!1);
      ie(gt.t.Jump, Dt);
      const mt = (0, qt.useRef)(null),
        dt = (0, qt.useRef)(null),
        jt = (0, qt.useRef)(null),
        Ht = (0, qt.useRef)(null),
        Qt = (0, qt.useRef)(null),
        lt = (0, qt.useRef)(null),
        Et = (0, qt.useRef)(!1),
        ft = (tt, et) => {
          Dt.current = tt, (0, st.y)(gt.t.Jump, tt, et)
        },
        wt = function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          Dt.current && (mt.current && (0, ee.i)(mt.current, !1), ft(!1, tt))
        },
        yt = le(et, {
          create: tt => new pe(tt),
          elementRef: mt,
          ringRef: dt,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const tt = mt.current.getBoundingClientRect(),
              et = jt.current.parentElement,
              Vt = et.getBoundingClientRect(),
              Ot = {
                left: Vt.left + et.clientLeft,
                top: Vt.top + et.clientTop,
                right: Vt.right - et.clientLeft,
                bottom: Vt.bottom - et.clientTop
              };
            if (Qt.current = Oe(jt.current, Ot, 16, qe(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${be.e}`)), null === Qt.current) return void yt.current.suspend();
            const qt = Qt.current;
            lt.current = {
              left: Math.min(tt.left, qt.left),
              top: qt.top,
              right: Math.max(tt.right, qt.right),
              bottom: tt.bottom
            }, Et.current = null !== Ht.current && De({
              clientX: Ht.current.x,
              clientY: Ht.current.y
            }, qt)
          },
          onUnlocked: () => {
            null === Ht.current && wt()
          }
        }),
        Nt = tt => {
          var et;
          Ht.current = null, null === (et = yt.current) || void 0 === et || et.cancel(), wt(tt)
        },
        Mt = ge((() => {
          Nt()
        })),
        bt = tt => {
          const et = Ht.current;
          var Vt;
          return null === et ? null !== (Vt = yt.current) && void 0 !== Vt && Vt.locked ? null : "lifted" : se(tt, et) ? "lifted" : (0, Be.d)(tt.nativeEvent.touches, et.id) ? null : "dropped"
        };
      return (0, Xt.jsxs)(Ae, {
        ref: mt,
        slot: Ge,
        className: "JumpKey",
        onTouchStart: tt => {
          Mt.onTouchStart(tt), (0, ee.i)(tt.currentTarget, !0), null === Ht.current || (0, Be.d)(tt.nativeEvent.touches, Ht.current.id) || Nt();
          const et = tt.changedTouches[0];
          var Vt;
          null === Ht.current && et && (Ht.current = {
            id: et.identifier,
            x: et.clientX,
            y: et.clientY
          }, null === (Vt = yt.current) || void 0 === Vt || Vt.press(et.clientX, et.clientY));
          Dt.current || ft(!0, tt.nativeEvent)
        },
        onTouchMove: tt => {
          const et = Ht.current,
            Vt = se(tt, et);
          if (!Vt) return;
          const Ot = yt.current;
          if (null === Ot || void 0 === Ot || Ot.move(Vt.clientX, Vt.clientY, lt.current), null !== Ot && void 0 !== Ot && Ot.offered) {
            const tt = De(Vt, Qt.current);
            tt !== Et.current && (Et.current = tt, Ot.target(tt))
          }
          et.x = Vt.clientX, et.y = Vt.clientY
        },
        onTouchEnd: tt => {
          var et;
          Mt.onTouchEnd(tt);
          const Vt = bt(tt);
          null !== Vt && ("dropped" !== Vt ? (Ht.current = null, null !== (et = yt.current) && void 0 !== et && et.lift() ? (0, ee.i)(tt.currentTarget, !1) : wt(tt.nativeEvent)) : Nt(tt.nativeEvent))
        },
        onTouchCancel: tt => {
          Mt.onTouchCancel(tt), null !== bt(tt) && Nt(tt.nativeEvent)
        },
        children: [(0, Xt.jsx)(zt.b, {
          name: "arrow-up-from-line"
        }), et && (0, Xt.jsxs)(Xt.Fragment, {
          children: [(0, Xt.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, Xt.jsx)(zt.b, {
              name: "lock"
            })
          }), (0, Xt.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, Xt.jsx)("rect", {
              ref: dt,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: Ot ? 48 : 0,
              pathLength: 1
            })
          }), (0, Xt.jsxs)("div", {
            ref: jt,
            className: "JumpLockTarget",
            children: [(0, Xt.jsx)(zt.b, {
              name: "lock"
            }), Vt("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var tV = Vt(36844);

    function eV(tt) {
      let {
        atHome: et
      } = tt;
      const {
        t: Vt
      } = (0, It.H)(), Ot = (Dt = (0, Jt.i)("runningSpeed"), dt = (0, Jt.i)("walkingSpeed"), null !== Dt && null !== dt && Dt > dt);
      var Dt, dt;
      const Ht = (0, ye.q)((0, Ne.g)().hudElements, "sprint"),
        Qt = (0, jt.h)(tV.d, (0, tV.h)());
      return (0, qt.useEffect)((() => {
        Ot && !Ht || (0, tV.i)(!0)
      }), [Ot, Ht]), (0, qt.useEffect)((() => () => {
        (0, tV.i)(!0)
      }), []), Ot ? (0, Xt.jsx)("div", {
        className: mt()("TouchSprintHit", {
          AtHome: et
        }),
        role: "switch",
        "aria-checked": Qt,
        "aria-label": Vt("touchKeys:sprint"),
        [Ee]: "",
        onClick: () => {
          (0, tV.i)(!(0, tV.h)())
        },
        children: (0, Xt.jsx)("div", {
          className: mt()("TouchKey TouchSprintKey", {
            Lit: Qt
          }),
          children: (0, Xt.jsx)(zt.b, {
            name: Qt ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    const VV = new WeakMap;
    class OV {
      constructor(tt) {
        this.zones = tt, this.followed = new Map, this.onStart = tt => {
          if (this.releaseMissing(tt.touches), tt.target instanceof HTMLCanvasElement)
            for (let Vt = 0; Vt < tt.changedTouches.length; Vt++) {
              var et;
              const {
                identifier: Ot,
                clientX: qt,
                clientY: Dt
              } = tt.changedTouches[Vt];
              this.release(Ot);
              const mt = this.zones.hitZone(qt, Dt);
              if (!mt) continue;
              const {
                key: dt
              } = mt;
              null === (et = VV.get(dt)) || void 0 === et || et.cancel();
              const jt = {
                hit: mt.element,
                key: dt,
                x: mt.x,
                y: mt.y,
                reach: .6 * mt.radius
              };
              this.followed.set(Ot, jt), (0, ee.i)(mt.element, !0), qV(jt, qt, Dt)
            }
        }, this.onMove = tt => {
          this.releaseMissing(tt.touches);
          for (let et = 0; et < tt.changedTouches.length; et++) {
            const {
              identifier: Vt,
              clientX: Ot,
              clientY: qt
            } = tt.changedTouches[et], Dt = this.followed.get(Vt);
            Dt && qV(Dt, Ot, qt)
          }
        }, this.onEnd = tt => {
          for (let et = 0; et < tt.changedTouches.length; et++) this.release(tt.changedTouches[et].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const tt = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, tt), document.addEventListener("touchmove", this.onMove, tt), document.addEventListener("touchend", this.onEnd, tt), document.addEventListener("touchcancel", this.onEnd, tt), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(tt) {
        for (const et of [...this.followed.keys()])(0, Be.d)(tt, et) || this.release(et)
      }
      releaseAll() {
        for (const tt of [...this.followed.keys()]) this.release(tt)
      }
      release(tt) {
        const et = this.followed.get(tt);
        if (!et) return;
        this.followed.delete(tt);
        for (const qt of this.followed.values())
          if (qt.key === et.key) return;
        (0, ee.i)(et.hit, !1);
        const {
          key: Vt
        } = et, Ot = Vt.style.translate;
        Vt.style.translate = "", Ot && VV.set(Vt, Vt.animate({
          translate: [Ot, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function qV(tt, et, Vt) {
      let {
        key: Ot,
        x: qt,
        y: Dt,
        reach: mt
      } = tt;
      const dt = et - qt,
        jt = Vt - Dt,
        Ht = Math.min(1, mt / (Math.hypot(dt, jt) || 1));
      Ot.style.translate = `${dt*Ht}px ${jt*Ht}px`
    }
    var DV = Vt(1583),
      mV = Vt(106),
      dV = Vt(1450);
    const jV = "threeFingerHintShown",
      HV = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let XV = 0,
      QV = !1;

    function lV() {
      const tt = new Set;
      let et = -1 / 0,
        Vt = -1 / 0,
        Ot = null,
        qt = 0;
      const Dt = () => {
          tt.clear()
        },
        mt = Dt => {
          if (Dt.touches.length > 0) return;
          for (let et = 0; et < Dt.changedTouches.length; et++) tt.add(Dt.changedTouches[et].identifier);
          const mt = tt.size;
          if (mt < 3 || !(0, Qe.r)()) return;
          if (qt = mt, null !== Ot) return;
          const dt = performance.now(),
            jt = et >= dt - 200;
          Ot = setTimeout((() => {
            if (Ot = null, !(0, Qe.r)()) return;
            const tt = Vt >= dt - 200 || document.hidden;
            ! function(tt, et) {
              var Vt;
              const Ot = (0, mV.getOperatingSystem)();
              XV < 5 && (XV++, (0, DV.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === et ? `${Ot}:${tt}` : `${Ot}:${tt}:${et}`
              })), null === et && (QV || !0 === Kt.e.getItem(jV) || (QV = !0, Kt.e.setItem(jV, !0), dV.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (Vt = HV[Ot]) && void 0 !== Vt ? Vt : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(qt, tt ? "hide" : jt ? "blur" : null)
          }), 500)
        },
        dt = () => {
          Vt = performance.now()
        },
        jt = () => {
          et = performance.now()
        },
        Ht = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", Dt, Ht), document.addEventListener("touchcancel", mt, Ht), document.addEventListener("visibilitychange", dt), window.addEventListener("blur", jt), window.addEventListener("resize", dt), window.addEventListener("orientationchange", dt), () => {
        document.removeEventListener("touchstart", Dt, Ht), document.removeEventListener("touchcancel", mt, Ht), document.removeEventListener("visibilitychange", dt), window.removeEventListener("blur", jt), window.removeEventListener("resize", dt), window.removeEventListener("orientationchange", dt), null !== Ot && clearTimeout(Ot)
      }
    }
    const EV = () => {
      const tt = (0, Tt.j)(),
        et = (0, St.y)();
      return tt || et
    };

    function fV(tt) {
      (0, nt.j)(tt.x, tt.y)
    }
    const wV = (0, qt.memo)((function() {
        const tt = EV(),
          {
            joystickMode: et,
            touchSpeedCurve: Vt,
            autorun: Ot
          } = (0, vt.k)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, qt.useEffect)((() => ((0, te.g)(gt.u.TouchControls, gt.u.TouchControls), () => {
          (0, te.g)(gt.u.TouchControls, 0), (0, nt.j)(0, 0)
        })), []), (0, qt.useEffect)(lV, []), (0, Xt.jsx)("div", {
          className: mt()("TouchMovementWrapper", {
            Hidden: tt
          }),
          "data-camera-keeper": "",
          children: (0, Xt.jsx)(ce, {
            onMove: fV,
            mode: et,
            speedCurve: Vt ? Ze : void 0,
            autorun: Ot,
            keys: (0, Xt.jsx)(eV, {
              atHome: !(0, Se.t)(et)
            })
          })
        })
      })),
      yV = (0, qt.memo)((function() {
        const tt = EV(),
          {
            clientEscMenuOptions: et
          } = (0, vt.k)(["clientEscMenuOptions"]),
          Vt = et.touchActionButtons;
        return (0, qt.useEffect)((() => new OV(nt.h).start()), []), (0, qt.useEffect)((() => {
          Ct.j.sw(Me.c)
        }), [tt]), (0, Xt.jsxs)("div", {
          className: mt()("TouchComponentsButtons", {
            Hidden: tt
          }),
          "data-camera-keeper": "",
          children: [(0, Xt.jsx)(ne, {
            lockable: et.jumpLock && !tt
          }), (0, Xt.jsx)(SV, {
            hidden: tt,
            actionButtons: Vt
          }), (0, Xt.jsx)(aV, {})]
        })
      }));

    function NV(tt) {
      const et = et => Vt => {
        (0, ee.i)(Vt.currentTarget, et), tt(et, Vt.nativeEvent)
      };
      return {
        onPointerDown: et(!0),
        onPointerUp: et(!1),
        onPointerCancel: et(!1)
      }
    }

    function aV() {
      const tt = (0, Jt.i)("canCrouch"),
        et = (0, ht.h)("crouching"),
        Vt = (0, qt.useRef)(!1);
      ie(gt.t.Crouch, Vt);
      const Ot = (tt, et) => {
          Vt.current = tt, (0, st.y)(gt.t.Crouch, tt, et)
        },
        Dt = (0, qt.useRef)(null),
        mt = () => {
          Vt.current && (Dt.current && (0, ee.i)(Dt.current, !1), Ot(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        dt = ge(mt);
      return (0, qt.useEffect)((() => {
        !1 === tt && mt()
      }), [tt]), !1 === tt ? null : (0, Xt.jsx)(Ae, {
        ref: Dt,
        slot: ke,
        className: "CrouchKey",
        lit: et,
        ...dt,
        ...NV(Ot),
        children: (0, Xt.jsx)(zt.b, {
          name: "arrow-down-to-line"
        })
      })
    }
    const MV = [{
        icon: "arrows-rotate"
      }],
      bV = [{
        icon: "Arrow"
      }],
      JV = [{
        icon: "crosshairs"
      }],
      CV = [{
        icon: "swords"
      }],
      uV = [{
        icon: "hand-back-point-up"
      }],
      KV = [{
        icon: "Firecracker"
      }];

    function hV(tt, et, Vt, Ot) {
      return {
        id: JSON.stringify(et),
        render: qt => (0, Xt.jsx)(cV, {
          code: tt,
          slot: qt,
          icon: et,
          label: Ot,
          hidden: Vt
        })
      }
    }

    function vV(tt, et) {
      return {
        id: "fly",
        render: Vt => (0, Xt.jsx)(WV, {
          slot: Vt,
          flying: tt,
          label: et
        })
      }
    }

    function WV(tt) {
      let {
        slot: et,
        flying: Vt,
        label: Ot
      } = tt;
      return (0, Xt.jsx)(Ae, {
        slot: et,
        className: "FlyKey",
        lit: Vt,
        label: Ot,
        ...NV(((tt, et) => {
          (0, st.y)(gt.t.Fly, tt, et)
        })),
        children: (0, Xt.jsx)(zt.b, {
          name: "feather-pointed"
        })
      })
    }

    function SV(tt) {
      var et, Vt;
      let {
        hidden: Ot,
        actionButtons: qt
      } = tt;
      const {
        t: Dt
      } = (0, It.H)(), {
        gun: mt,
        aimable: dt,
        chargeName: jt
      } = (0, ht.h)("heldItemAim"), Ht = (0, ht.h)("gliderBoostFuel"), {
        canFly: Qt,
        flying: lt
      } = (0, ht.h)("flight"), Et = (0, Jt.i)("touchscreenActionButton"), ft = mt ? MV : Et, wt = dt ? {
        icon: bV,
        label: Dt("touchKeys:aim")
      } : null, yt = null !== jt ? {
        icon: [{
          icon: jt
        }]
      } : null, Nt = null !== wt && void 0 !== wt ? wt : yt, Mt = null !== (et = null === (Vt = mt ? wt : null !== yt && void 0 !== yt ? yt : wt) || void 0 === Vt ? void 0 : Vt.icon) && void 0 !== et ? et : uV, bt = [!qt && Nt ? hV(nt.d.Action2, Nt.icon, Ot, Nt.label) : null, mt ? hV(nt.d.Action3, JV, Ot, Dt("touchKeys:scope")) : null, Qt ? vV(lt, Dt("touchKeys:fly")) : null];
      return (0, Xt.jsxs)(Xt.Fragment, {
        children: [ft && (0, Xt.jsx)(cV, {
          code: nt.d.Action1,
          slot: re,
          icon: ft,
          label: mt ? Dt("touchKeys:reload") : void 0,
          hidden: Ot
        }, JSON.stringify(ft)), qt && (0, Xt.jsxs)(Xt.Fragment, {
          children: [(0, Xt.jsx)(cV, {
            code: nt.d.Attack,
            slot: oe,
            icon: CV,
            name: Dt("touchKeys:attack"),
            hidden: Ot
          }), (0, Xt.jsx)(cV, {
            code: nt.d.Use,
            slot: ze,
            icon: Mt,
            name: Dt("touchKeys:use"),
            hidden: Ot
          })]
        }), Ye(bt, qt), Ht > 0 && (0, Xt.jsx)(cV, {
          code: nt.d.Boost,
          slot: Ue,
          icon: KV,
          label: Dt("touchKeys:boost", {
            fuel: Ht > 99 ? "99+" : Ht
          }),
          hidden: Ot
        })]
      })
    }

    function cV(tt) {
      let {
        code: et,
        slot: Vt,
        icon: Ot,
        label: qt,
        name: Dt,
        hidden: mt
      } = tt;
      const dt = Fe(et, mt);
      return (0, Xt.jsx)(Ae, {
        ref: dt,
        slot: Vt,
        className: "TouchActionKey",
        canvasZone: !0,
        label: qt,
        role: void 0 !== Dt ? "img" : void 0,
        "aria-label": Dt,
        children: (0, Xt.jsx)(Ht.e, {
          text: Ot
        })
      })
    }
    var RV = Vt(4354),
      IV = Vt(3081),
      PV = Vt(736);
    const ZV = (0, qt.memo)((function() {
      (0, Mt.c)();
      const tt = (0, qt.useRef)([]),
        et = (0, IV.c)(),
        Vt = (0, qt.useRef)(0),
        Ot = (0, qt.useRef)(0),
        Dt = (0, qt.useRef)([]),
        mt = (0, qt.useRef)(null);

      function dt(Vt, Ot, qt, Dt) {
        const mt = (0, PV.b)(),
          dt = setTimeout((() => {
            tt.current = tt.current.filter((tt => tt.id !== mt)), et()
          }), Dt);
        Et.gameBridge.send("recordFlyingMiddleText", {
          content: Vt,
          oD: Ot,
          angle: qt,
          rD: Dt
        }), tt.current.push({
          id: mt,
          content: Vt,
          oD: Ot,
          rD: Dt,
          removeTimeout: dt,
          angle: qt
        }), et()
      }
      return (0, ht.e)("shotDamageToShow", (tt => {
        let {
          damage: et,
          wasCrit: Vt,
          distance: Ot
        } = tt;
        const qt = -Math.PI / 4 + Math.random() * Math.PI / 2;
        dt(Vt ? [{
          str: et.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [et.toString()], Ot, qt, 1e3)
      })), (0, jt.f)("flyingMiddleMessage", (tt => {
        let {
          content: et,
          oD: qt,
          rD: jt
        } = tt;
        Dt.current.push({
          content: et,
          oD: qt,
          rD: jt
        });
        const Ht = () => {
          const {
            content: tt,
            oD: et,
            rD: qt
          } = Dt.current.shift(), mt = function(tt) {
            const et = -Math.PI / 4,
              Vt = Math.PI / 4,
              Ot = Vt - et,
              qt = (1 + Math.sqrt(5)) / 2,
              Dt = 2 * Math.PI / (qt * qt);
            let mt = tt + Dt;
            for (; mt > Vt;) mt -= Ot;
            for (; mt < et;) mt += Ot;
            const dt = Math.PI / 6;
            if (Math.abs(mt - tt) < dt) {
              mt = tt + (Math.sign(mt - tt) || 1) * dt, mt > Vt && (mt = tt - dt), mt < et && (mt = tt + dt)
            }
            return mt
          }(Ot.current);
          Ot.current = mt, Vt.current = Date.now(), dt(tt, et, mt, qt)
        };
        if (!mt.current) {
          const tt = () => {
            Dt.current.length > 0 && Ht(), 0 === Dt.current.length && (clearInterval(mt.current), mt.current = null)
          };
          mt.current = setInterval(tt, 200), Vt.current + 200 < Date.now() && tt()
        }
        for (; Dt.current.length > 4;) Ht()
      })), (0, jt.f)("forceFlyingMiddleMessage", (tt => {
        let {
          content: et,
          oD: Vt,
          angle: Ot,
          rD: qt
        } = tt;
        dt(et, Vt, Ot, qt)
      })), (0, qt.useEffect)((() => () => {
        clearInterval(mt.current), mt.current = null;
        for (const et of tt.current) clearTimeout(et.removeTimeout)
      }), []), (0, Xt.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: tt.current.map((tt => {
          const {
            id: et,
            content: Vt,
            oD: Ot,
            rD: qt,
            angle: Dt
          } = tt;
          return tt.pos || (tt.pos = function(tt, et) {
            const Vt = 50 / (tt ** .7 * .35);
            return {
              x: Vt * Math.sin(et),
              y: -Vt * Math.cos(et)
            }
          }(Ot, Dt)), (0, Xt.jsx)(LV, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: qt,
            enterActiveStyle: {
              transform: `translate(${tt.pos.x}vw, ${tt.pos.y}vh)`,
              transition: `transform ${qt}ms ease-out`
            },
            children: (0, Xt.jsx)("div", {
              children: (0, Xt.jsx)(Ht.e, {
                text: Vt
              })
            })
          }, et)
        }))
      })
    }));

    function LV(tt) {
      let {
        children: et,
        className: Vt,
        classNames: Ot,
        timeout: Dt,
        enterActiveStyle: mt
      } = tt;
      const [dt, jt] = (0, qt.useState)(!1), [Ht, Qt] = (0, qt.useState)(!1), lt = (0, qt.useRef)(null);
      return (0, qt.useEffect)((() => {
        jt(!0)
      }), []), (0, Xt.jsx)(RV.b, {
        className: Vt,
        classNames: Ot || Vt,
        in: dt,
        timeout: Dt,
        nodeRef: lt,
        onEntering: () => {
          Qt(!0)
        },
        children: (0, qt.cloneElement)(et, {
          ref: lt,
          style: Ht && mt || void 0
        })
      })
    }
    var FV = Vt(36853);

    function kV() {
      const tt = (0, ht.h)("health");
      return (0, Xt.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, Xt.jsx)(FV.e, {
          placement: "statBars"
        }), (0, Xt.jsx)(GV, {
          actualValue: tt.shield,
          maxValue: tt.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, Xt.jsx)(GV, {
          actualValue: tt.health,
          maxValue: tt.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function GV(tt) {
      let {
        actualValue: et,
        maxValue: Vt,
        hideAtValue: Ot,
        icon: qt,
        className: Dt
      } = tt;
      return (0, Mt.f)(), null === et || null === Vt || et === Ot || Vt === Ot ? null : (0, Xt.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, Xt.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, Xt.jsx)("div", {
            className: `BottomScreenStatBar ${Dt}`,
            style: {
              transform: `scaleX(${Math.max(et/Vt,0)})`,
              transformOrigin: "left center"
            }
          }), (0, Xt.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, Xt.jsx)(zt.b, {
              name: qt
            }), ` ${Math.ceil(et)}/${Vt}`]
          })]
        })
      })
    }
    var zV = Vt(34371),
      oV = Vt(4665),
      rV = Vt(1429),
      UV = Vt(2817),
      AV = Vt(1556),
      iV = Vt(1410),
      YV = Vt(3487),
      BV = Vt(3055),
      pV = Vt(2203),
      xV = Vt(839),
      TV = Vt(3544),
      gV = Vt(153),
      sV = Vt(1784),
      nV = Vt(34303);

    function tO(tt) {
      let {
        showing: et,
        enabled: Vt,
        autoRespawn: Ot
      } = tt;
      const {
        t: Dt
      } = (0, It.H)(), mt = (0, St.v)(), {
        mobilePushNotificationsCanAsk: dt
      } = (0, vt.k)(["mobilePushNotificationsCanAsk"]), [jt, Ht] = (0, qt.useState)(null), [Qt, lt] = (0, qt.useState)(!1), [Et, ft] = (0, qt.useState)(null);
      et && null === Et ? ft(mt) : et || null === Et || ft(null);
      const wt = et && null !== jt && !1 === Et;
      if ((0, qt.useEffect)((() => {
          if (et) return;
          Ht(null), lt(!1);
          let tt = !0;
          return (0, nV.d)().then((et => {
            tt && Ht((() => et))
          }), (tt => {
            console.error("Failed to tell whether to offer push notifications:", tt)
          })), () => {
            tt = !1
          }
        }), [et, dt]), (0, qt.useEffect)((() => {
          wt && !Ot && (0, nV.j)()
        }), [wt, Ot]), !wt) return null;
      const yt = () => {
          (0, nV.j)(), lt(!0)
        },
        Nt = sV.c.supports("notifications") ? "app" : "browser";
      return (0, Xt.jsxs)("div", {
        className: "RespawnNotificationOptIn",
        style: Qt ? {
          visibility: "hidden"
        } : void 0,
        children: [(0, Xt.jsxs)("div", {
          className: "RespawnPanelSectionTitle",
          children: [(0, Xt.jsx)(zt.b, {
            name: "bell"
          }), Dt("mobilePushNotifications:optInTitle")]
        }), (0, Xt.jsxs)("div", {
          className: "RespawnNotificationOptInButtons",
          children: [(0, Xt.jsx)(AV.f, {
            onClick: () => {
              yt(), jt().catch((tt => {
                console.error("Failed to ask for push notifications:", tt)
              }))
            },
            disabled: !Vt || Qt,
            analyticsClick: {
              id: "push.allow",
              value: Nt
            },
            touchPressOn: "pointerup",
            children: Dt("mobilePushNotifications:optInConfirm")
          }), (0, Xt.jsx)(AV.g, {
            onClick: yt,
            disabled: !Vt || Qt,
            analyticsClick: {
              id: "push.deny",
              value: Nt
            },
            touchPressOn: "pointerup",
            children: Dt("mobilePushNotifications:optInCancel")
          })]
        })]
      })
    }
    var eO = Vt(391);

    function VO(tt, et) {
      let {
        shownName: Vt,
        lifeformType: Ot
      } = tt;
      return null !== Vt ? Vt : null !== Ot ? et(`lifeform:${(0,eO.Pe)(Ot)}`) : null
    }
    var OO = Vt(3493),
      qO = Vt(3501);
    const DO = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      mO = (0, qt.memo)((function() {
        var tt, et;
        const Vt = (0, Mt.c)(),
          Ot = (0, ft.useNavigatePreserveSearch)(),
          {
            t: Dt
          } = (0, It.H)(),
          {
            loadingOverlayVisible: dt
          } = (0, vt.k)(["loadingOverlayVisible"]),
          Ht = (0, St.v)(),
          [Qt, lt] = (0, qt.useState)(!1),
          [wt, yt] = (0, qt.useState)(!0),
          [Nt, bt] = (0, qt.useState)(null),
          Ct = (0, IV.c)(),
          Kt = (0, Jt.i)("respawnButtonText"),
          Wt = (0, Jt.i)("usePlayAgainButton"),
          ct = (0, Jt.i)("useRespawnButton"),
          {
            gameNameWithVariation: Rt
          } = (0, ht.h)("connectedGame"),
          Pt = (0, qt.useRef)(ut.b.get("secsToRespawn")),
          Zt = (0, qt.useRef)(Et.gameBridge.latest("localPlayerAlive")),
          Lt = (0, qt.useRef)(ut.b.get("secsToRespawn")),
          Ft = (0, qt.useRef)(ut.b.get("autoRespawn")),
          kt = (0, qt.useRef)(null),
          Gt = (0, qt.useRef)(0),
          ot = (0, qt.useRef)(0),
          [rt, Ut] = (0, qt.useState)(!1),
          it = (0, qt.useRef)(null),
          Yt = (0, qt.useRef)(null),
          Bt = (0, qt.useRef)(null);
        (0, Jt.h)("secsToRespawn", (tt => {
          console.log("Received new secsToRespawn with", tt, "and current canRespawn value of ", Ft.current), Lt.current = tt, gt()
        })), (0, Jt.h)("autoRespawn", (tt => {
          console.log("Received autorespawn", tt, "current canRespawn value of ", Pt.current), Ft.current = tt, gt()
        }));
        const pt = tt => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", tt), tt || Gt.current++, Zt.current = tt, gt()
        };
        (0, ht.e)("localPlayerAliveSet", pt), (0, jt.f)(BV.l, (tt => {
          "connected" === tt && !Zt.current && Ft.current && Pt.current <= 0 && (ot.current = 0, st())
        })), (0, qt.useEffect)((() => {
          const tt = Et.gameBridge.latest("localPlayerAlive");
          tt === Zt.current ? (console.log("Updating respawn component from initial mount"), gt()) : pt(tt)
        }), []), (0, qt.useEffect)((() => {
          if (Qt) {
            Ut(!1);
            const tt = setTimeout((() => {
              Ut(!0)
            }), 600);
            return () => {
              clearTimeout(tt)
            }
          }
          return () => {}
        }), [Qt]);
        (0, ht.e)("kill", (tt => {
          let {
            killer: et,
            victim: Vt,
            withItem: Ot
          } = tt;
          if (!Vt.local) return;
          const qt = ((tt, et) => {
            if (tt.local) {
              const tt = DO[et];
              return tt ? Dt(tt) : null
            }
            const Vt = VO(tt, Dt);
            return Vt ? Dt("respawnPage:killedBy", {
              name: Vt
            }) : null
          })(et, Ot);
          qt && bt({
            text: qt,
            deathCount: Zt.current ? Gt.current + 1 : Gt.current
          })
        }));
        const xt = () => {
            Qt && Ft.current && Zt.current && rt && lt(!1)
          },
          Tt = Qt && Ft.current && Zt.current && rt && !dt;
        (0, jt.f)("usedKeyboard", (() => {
          xt()
        })), (0, qO.c)("respawn", Tt, xt);
        const gt = () => {
            yt(Lt.current >= 3 || !Ft.current), Zt.current ? (clearInterval(kt.current), kt.current = null, Ft.current ? Ct() : lt(!1)) : (lt(!0), Pt.current = Lt.current, Ct(), console.log("Running respawn stats updated", Ft.current, Pt.current), Ft.current && Pt.current <= 0 && st(), clearInterval(kt.current), Pt.current > 0 && (kt.current = setInterval((() => {
              Pt.current = Math.max(Pt.current - 1, 0), Ct(), Pt.current <= 0 && (clearInterval(kt.current), kt.current = null, ut.b.get("autoRespawn") && st())
            }), 1e3)))
          },
          st = () => {
            if (Date.now() - ot.current > 1e3) {
              const tt = () => {
                Et.gameBridge.send("respawn", null), ot.current = Date.now()
              };
              ut.b.get("autoRespawn") ? tt() : (0, iV.ab)((() => {
                tt()
              }), "video_respawn")
            }
          },
          nt = (0, qt.useMemo)((() => {
            var tt;
            return null === (tt = (0, xV.k)(Rt)) || void 0 === tt ? void 0 : tt.otherGameLinksOnRespawnPage
          }), [Rt]),
          te = 0 === Pt.current,
          ee = (null === Nt || void 0 === Nt ? void 0 : Nt.deathCount) === Gt.current ? Nt.text : null,
          Ve = Qt && wt && !dt,
          Oe = Ht && Tt && null !== (tt = null === (et = (0, At.g)()) || void 0 === et ? void 0 : et.getBoundButton("menuConfirm")) && void 0 !== tt ? tt : null,
          qe = tt => te ? tt : Dt("respawnPage:actionInSeconds", {
            action: tt,
            seconds: Pt.current
          });
        return (0, Xt.jsx)(zV.b, {
          showing: Qt,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, Xt.jsx)(YV.d, {
            show: Qt,
            "data-holds-camera-keeper": "",
            children: (0, Xt.jsxs)(oV.c, {
              close: () => {
                lt(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: Ft.current || dt ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, gV.is99NightsCrazyGamesBundle)() && (0, Xt.jsx)(AV.d, {
                onClick: pV.e,
                children: Dt("homePage:backToGames")
              }), (0, Xt.jsxs)("div", {
                className: "RespawnContainer",
                onClick: xt,
                children: [(0, Xt.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, Xt.jsx)("div", {
                    ref: Yt,
                    className: "RespawnSideSquareBannerDiv",
                    children: Vt[0] > 925 && (0, Xt.jsx)(UV.c, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: Yt
                      },
                      showing: Ve,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, Xt.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, Xt.jsxs)("div", {
                      className: mt()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: Ht
                      }),
                      children: [Ft.current && (0, Xt.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, Xt.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, Xt.jsx)(zt.b, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), Dt("respawnPage:youDied")]
                        }), (0, Xt.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === Oe && (Zt.current ? Dt("respawnPage:pressAnywhereToContinue") : te ? Dt("respawnPage:respawning") : qe(Dt("general:respawn"))), null !== Oe && (0, Xt.jsx)(OO.b, {
                            text: Dt("controller:screensPressToContinue", {
                              button: OO.f
                            }),
                            glyph: Oe,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), ee && (0, Xt.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: ee
                        })]
                      }), !Ft.current && (0, Xt.jsxs)(Xt.Fragment, {
                        children: [(0, Xt.jsxs)("div", {
                          className: mt()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !nt
                          }),
                          children: [Wt && (0, Xt.jsx)(AV.m, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, iV.ab)((() => {
                                (0, vt.i)("inGameReplay");
                                const tt = (0, rV.c)(Rt);
                                Ot(tt)
                              }), "video_start")
                            },
                            disabled: !te || !rt,
                            touchPressOn: "pointerup",
                            children: qe(Dt("respawnPage:playAgain"))
                          }), ct && (0, Xt.jsx)(AV.f, {
                            className: "RespawnPageButton",
                            onClick: st,
                            padDefaultFocus: !Wt,
                            padBack: "sessionBasedGame:stayInLobby" === Kt,
                            disabled: !te || !rt,
                            touchPressOn: "pointerup",
                            children: qe(Dt(Kt))
                          }), !(0, gV.is99NightsCrazyGamesBundle)() && (0, Xt.jsx)(AV.G, {
                            className: "RespawnPageButton",
                            onClick: pV.e,
                            disabled: !te || !rt,
                            touchPressOn: "pointerup",
                            children: qe(Dt("respawnPage:exitGame"))
                          })]
                        }), nt && (0, Xt.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, Xt.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: Dt("respawnPage:orTry")
                          }), (0, Xt.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: nt.map((tt => (0, Xt.jsx)(TV.h, {
                              source: {
                                type: "game",
                                gameNameWithVariation: tt
                              },
                              disabled: !te || !rt,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, vt.i)("inGameReplay");
                                const et = (0, rV.c)(tt);
                                Ot(et)
                              }
                            }, tt)))
                          })]
                        })]
                      }), (0, Xt.jsx)(tO, {
                        showing: Qt,
                        enabled: rt,
                        autoRespawn: Ft.current
                      })]
                    })
                  }), (0, Xt.jsx)("div", {
                    ref: Bt,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, Xt.jsx)("div", {
                  ref: it,
                  className: "RespawnBottom",
                  children: (0, Xt.jsx)(UV.c, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: it
                    },
                    showing: Ve,
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
    var dO = Vt(36870);
    const jO = [{
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
      HO = [{
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
      XO = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      QO = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      lO = (0, qt.memo)((function() {
        const tt = (0, qt.useRef)(null),
          et = (0, qt.useRef)(null);

        function Vt(Vt) {
          var Ot;
          let {
            ne: qt,
            screenPos: Dt
          } = Vt;
          const mt = tt.current;
          null === (Ot = et.current) || void 0 === Ot || Ot.cancel(), mt.classList.remove("HitmarkerCrit"), Dt ? (mt.style.left = `${Dt.x}%`, mt.style.top = `${Dt.y}%`) : (mt.style.left = "50%", mt.style.top = "50%"), mt.style.rotate = 16 * (Math.random() - .5) + "deg", qt && mt.classList.add("HitmarkerCrit");
          const dt = mt.animate(qt ? HO : jO, qt ? QO : XO);
          et.current = dt, dt.onfinish = () => {
            mt.classList.remove("HitmarkerCrit")
          }
        }
        return (0, jt.f)("localGunHitmarker", (tt => {
          let {
            ne: et
          } = tt;
          Vt({
            ne: et
          })
        })), (0, jt.f)("yourAttackHit", (tt => {
          let {
            ne: et,
            screenPos: Ot
          } = tt;
          Vt({
            ne: et,
            screenPos: vt.b.get("isTouchScreen") ? Ot : void 0
          })
        })), (0, jt.f)("sendHitmarker", (tt => {
          let {
            ne: et,
            screenPos: Ot
          } = tt;
          Vt({
            ne: et,
            screenPos: Ot
          })
        })), (0, Xt.jsxs)("div", {
          ref: tt,
          className: "Hitmarker",
          children: [(0, Xt.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Xt.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Xt.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Xt.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function EO() {
      const tt = (0, qt.useRef)(!0);
      return (0, jt.f)("localBlockMined", (() => {
        me.d.play("blockMined")
      })), (0, jt.f)("yourAttackHit", (() => {
        me.d.play("hitLanded")
      })), (0, jt.f)("localGunHitmarker", (() => {
        me.d.play("hitLanded")
      })), (0, jt.f)("damagedByOtherPlayer", (() => {
        me.d.play("damageTaken")
      })), (0, ht.e)("localPlayerAliveSet", (et => {
        !et && tt.current && me.d.play("death"), tt.current = et
      })), null
    }
    var fO = Vt(2018),
      wO = Vt(36885),
      yO = Vt.n(wO),
      NO = Vt(2108),
      aO = Vt(2102),
      MO = Vt(3346),
      bO = Vt(34399);
    const JO = eO.ze ? 7e7 : 7e3,
      CO = yO()("#ffffff").alpha(.5).string();

    function uO(tt) {
      const et = (0, MO.b)(tt);
      return void 0 !== et && "Gun" === (0, bO.itemTypeOf)(et)
    }

    function KO(tt) {
      if (!tt) return console.error(`Killfeed colour was ${tt}`), CO;
      try {
        return yO()(tt).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${tt} is not a colour`), CO
      }
    }
    const hO = (0, qt.memo)((function() {
      const {
        t: tt
      } = (0, It.H)(), et = (0, qt.useRef)([]), Vt = (0, IV.c)();
      return (0, ht.e)("kill", (function(Ot) {
        var qt, Dt;
        let {
          killer: mt,
          victim: dt,
          withItem: jt,
          killstreak: Ht
        } = Ot;
        const Xt = et.current;
        if (Xt.length >= 3) {
          const tt = Xt.shift();
          clearTimeout(tt.timeout)
        }
        const Qt = Et.gameBridge.latest("hiddenPlayerNames"),
          lt = {
            deadName: VO(dt, tt),
            killerName: VO(mt, tt),
            isFriend: {
              killer: (0, NO.e)(mt.realName, Qt),
              dead: (0, NO.e)(dt.realName, Qt)
            },
            withItem: jt,
            wasHeadshot: !1,
            killstreak: Ht,
            timeout: setTimeout((() => {
              Xt.shift(), Vt()
            }), JO),
            reactId: `${null!==(qt=mt.id)&&void 0!==qt?qt:mt.shownName}|${null!==(Dt=dt.id)&&void 0!==Dt?Dt:dt.shownName}|${Date.now()}`,
            killerBackground: KO(mt.colour),
            deadBackground: KO(dt.colour)
          };
        Xt.push(lt), Vt()
      })), (0, qt.useEffect)((() => {
        const tt = et.current;
        return () => {
          for (; tt.length > 0;) {
            const {
              timeout: et
            } = tt.pop();
            clearTimeout(et)
          }
        }
      }), []), (0, Xt.jsx)("div", {
        className: "Killfeed",
        children: et.current.map((tt => {
          let {
            deadName: et,
            killerName: Vt,
            withItem: Ot,
            wasHeadshot: qt,
            killstreak: Dt,
            killerBackground: mt,
            deadBackground: dt,
            reactId: jt,
            isFriend: Ht
          } = tt;
          return (0, Xt.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${mt} calc(100% - 10rem), ${dt} 100%)`
            },
            children: [Dt >= 2 ? (0, Xt.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, eO.Y)(Dt)
            }) : null, (0, Xt.jsx)("div", {
              className: "KillfeedKillerName",
              children: Vt
            }), Ht.killer && (0, Xt.jsx)(aO.d, {}), (0, Xt.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: uO(Ot) ? "7.5vmin" : "5vmin"
              },
              children: (0, Xt.jsx)(fO.e, {
                itemName: Ot,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), qt ? (0, Xt.jsx)(zt.b, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, Xt.jsx)("div", {
              className: "KillfeedDeadName",
              children: et
            }), Ht.dead && (0, Xt.jsx)(aO.d, {})]
          }, jt)
        }))
      })
    }));
    var vO = Vt(36925),
      WO = Vt(1227),
      SO = Vt.n(WO),
      cO = Vt(3470),
      RO = Vt(36932),
      IO = Vt(1397);
    const PO = {},
      ZO = (0, qt.memo)((function() {
        const tt = (0, qt.useRef)({}),
          [, et] = (0, qt.useReducer)((tt => tt + 1), 0);
        (0, jt.f)("setDirectionArrow", (Vt => {
          let {
            id: Ot,
            position: qt,
            style: Dt,
            text: mt,
            Ye: dt
          } = Vt;
          const jt = tt.current,
            Ht = Dt || PO,
            Xt = mt,
            Qt = jt[Ot];
          if (!Qt) return jt[Ot] = {
            position: qt,
            style: Ht,
            text: Xt,
            shouldShowDistance: dt,
            Vk: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void et();
          const lt = !SO()(Qt.style, Ht) || !SO()(Qt.text, Xt) || Qt.shouldShowDistance !== dt;
          Qt.position = qt, Qt.style = Ht, Qt.text = Xt, Qt.shouldShowDistance = dt, lt && et()
        })), (0, jt.f)("clearDirectionArrow", (Vt => {
          let {
            id: Ot
          } = Vt;
          const qt = tt.current;
          if (null === Ot)
            for (const tt in qt) delete qt[tt];
          else delete qt[Ot];
          et()
        })), (0, qt.useEffect)((() => {
          const et = tt.current,
            Vt = (0, IO.t)((() => {
              ! function(tt) {
                const et = Et.gameBridge.lookup("localPos", null),
                  Vt = cO.d - LO,
                  Ot = (0, cO.m)() - LO;
                for (const qt in tt) {
                  const Dt = tt[qt];
                  if (!Dt.Vk) continue;
                  const mt = Et.gameBridge.lookup("screenPos", Dt.position),
                    dt = mt.x - 50,
                    jt = mt.y - 50;
                  mt.x === Dt.lastScreenX && mt.y === Dt.lastScreenY || (Dt.lastScreenX = mt.x, Dt.lastScreenY = mt.y, Dt.Vk.style.translate = `${mt.x}vw ${mt.y}vh`, Dt.chevronElement && (Dt.chevronElement.style.rotate = `${eO.e.fastATan2(jt,dt)}rad`));
                  const Ht = Math.abs(dt) < Vt && Math.abs(jt) < Ot;
                  if (Ht !== Dt.onScreen && (Dt.onScreen = Ht, Dt.Vk.classList.toggle("DirectionArrowOnScreen", Ht)), Dt.shouldShowDistance && Dt.distanceElement) {
                    const tt = Dt.position[0] - et[0],
                      Vt = Dt.position[1] - et[1],
                      Ot = Dt.position[2] - et[2],
                      qt = Math.round(Math.sqrt(tt * tt + Vt * Vt + Ot * Ot));
                    (-1 === Dt.lastRenderedDist || (0, RO.e)(qt, Dt.lastRenderedDist, Dt.lastDistUpdateTime)) && (Dt.distanceElement.textContent = `${qt}m`, Dt.lastRenderedDist = qt, Dt.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(et)
            }));
          return () => {
            Vt();
            for (const tt in et) delete et[tt]
          }
        }), []);
        const Vt = tt.current;
        return (0, Xt.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(Vt).map((tt => {
            var et;
            let [Ot, qt] = tt;
            const Dt = null !== (et = (0, bt.Ib)(qt.style)) && void 0 !== et ? et : "#ffffff";
            return (0, Xt.jsxs)("div", {
              ref: tt => {
                Vt[Ot] && (Vt[Ot].Vk = tt)
              },
              className: "DirectionArrow",
              style: {
                fontSize: qt.style.fontSize,
                opacity: qt.style.opacity
              },
              children: [(0, Xt.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: tt => {
                  Vt[Ot] && (Vt[Ot].chevronElement = tt)
                },
                children: [(0, Xt.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, Xt.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, Xt.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, Xt.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, Xt.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Dt
                    }
                  }), (0, Xt.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Dt
                    }
                  })]
                })]
              }), (0, Xt.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: Dt,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${Dt}`
                }
              }), qt.text && (0, Xt.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: Dt,
                  fontWeight: qt.style.fontWeight,
                  fontStyle: qt.style.fontStyle
                },
                children: (0, Xt.jsx)(Ht.e, {
                  text: qt.text
                })
              }), qt.shouldShowDistance && (0, Xt.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: tt => {
                  Vt[Ot] && (Vt[Ot].distanceElement = tt)
                },
                style: {
                  color: Dt,
                  fontWeight: qt.style.fontWeight,
                  fontStyle: qt.style.fontStyle
                }
              })]
            }, Ot)
          }))
        })
      })),
      LO = .5;
    const FO = (0, qt.memo)((function(tt) {
        let {
          isTouchScreen: et
        } = tt;
        return (0, Xt.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, Xt.jsx)(oO, {}), et && (0, Xt.jsx)(yV, {})]
        })
      })),
      kO = {
        readyForNext: 0,
        running: 1
      },
      GO = 50;

    function zO(tt) {
      console.assert(tt.state.current === kO.readyForNext);
      const et = tt.queue.current,
        Vt = tt.foreground.current;
      if (et.length > 0 && Vt) {
        const {
          toFraction: Ot,
          toDuration: qt
        } = et.shift();
        tt.state.current = kO.running, Vt.style.transition = `transform ${Math.max(qt-GO,0)}ms linear`, Vt.classList.remove("Complete"), tt.timeout.current = setTimeout((() => {
          Vt.style.transform = `scaleX(${Ot})`, tt.timeout.current = setTimeout((() => {
            1 === Ot && Vt.classList.add("Complete"), tt.state.current = kO.readyForNext, zO(tt)
          }), Math.max(qt - GO, 0))
        }), GO)
      }
    }

    function oO() {
      const tt = (0, qt.useRef)([]),
        et = (0, qt.useRef)(kO.readyForNext),
        Vt = (0, qt.useRef)(void 0),
        Ot = (0, qt.useRef)(null),
        Dt = (0, qt.useRef)({
          queue: tt,
          state: et,
          timeout: Vt,
          foreground: Ot
        }),
        mt = (0, Jt.i)("showProgressBar");
      if ((0, qt.useLayoutEffect)((() => (mt && et.current === kO.readyForNext && zO(Dt.current), () => {
          et.current = kO.readyForNext, clearTimeout(Vt.current), mt && (tt.current.length = 0)
        })), [mt]), (0, jt.f)("progressBarUpdate", (Vt => {
          let {
            toFraction: Ot,
            toDuration: qt
          } = Vt;
          tt.current.push({
            toFraction: Ot,
            toDuration: qt
          }), et.current === kO.readyForNext && zO(Dt.current)
        })), !mt) return null;
      return (0, Xt.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, Xt.jsx)("div", {
          className: "ProgressBarForeground",
          ref: Ot,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var rO = Vt(36941),
      UO = Vt(2546);
    const AO = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function iO(tt) {
      let {
        classes: et,
        gone: Vt
      } = tt;
      const Ot = document.documentElement;
      Ot.classList.remove(...et);
      for (const qt of Vt) qt.style.display = "block";
      return () => {
        Ot.classList.add(...et);
        for (const tt of Vt) tt.style.display = ""
      }
    }

    function YO(tt) {
      const {
        isTouchScreen: et
      } = (0, vt.k)(["isTouchScreen"]);
      (0, qt.useLayoutEffect)((() => {
        if (!et) return;
        const Vt = tt.current,
          Ot = document.querySelector(`.${rO.h}`),
          qt = tt => {
            const et = () => {
              const et = tt.querySelector(UO.i),
                Ot = function(tt) {
                  const et = document.documentElement;
                  return {
                    classes: ye.y.map(be.A).filter((tt => et.classList.contains(tt))),
                    gone: [...tt.querySelectorAll(`.TopRightTrayToggle.${UO.k}`)]
                  }
                }(tt);
              et && function(tt, et) {
                (0, UO.w)(tt, et.classes.length > 0 || et.gone.length > 0, (() => iO(et)))
              }(et, Ot);
              const qt = `${Math.floor(function(tt,et,Vt){const Ot=document.documentElement,qt=Ot.classList.contains((0,be.E)("menu")),Dt=Ot.style.getPropertyValue((0,be.I)("menu"));if(!qt&&""===Dt)return tt.getBoundingClientRect().left;const mt=et?(0,UO.q)(et):()=>{},dt=iO(Vt);Ot.classList.remove((0,be.E)("menu")),Ot.style.removeProperty((0,be.I)("menu"));const jt=tt.getBoundingClientRect().left;return dt(),mt(),qt&&Ot.classList.add((0,be.E)("menu")),""!==Dt&&Ot.style.setProperty((0,be.I)("menu"),Dt),jt}(tt,et,Ot)-Vt.getBoundingClientRect().left-4)}px`;
              Vt.style.getPropertyValue("--InGameHeaderMaxWidth") !== qt && Vt.style.setProperty("--InGameHeaderMaxWidth", qt)
            };
            et();
            const qt = new ResizeObserver(et);
            qt.observe(tt), qt.observe(Ot), window.addEventListener("resize", et);
            const Dt = () => AO.map((tt => document.documentElement.style.getPropertyValue(tt))).join();
            let mt = Dt();
            const dt = new MutationObserver((() => {
              const tt = Dt();
              tt !== mt && (mt = tt, et())
            }));
            dt.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const jt = (0, Ct.n)(be.h, et),
              Ht = new MutationObserver(et);
            return Ht.observe(tt, {
              childList: !0,
              subtree: !0
            }), () => {
              qt.disconnect(), dt.disconnect(), Ht.disconnect(), jt(), window.removeEventListener("resize", et);
              const Vt = tt.querySelector(UO.i);
              Vt && (0, UO.q)(Vt)
            }
          },
          Dt = () => Ot.querySelector(".TopRightIconsContainer"),
          mt = Dt();
        let dt;
        if (mt) dt = qt(mt);
        else {
          const tt = new MutationObserver((() => {
            const et = Dt();
            et && (tt.disconnect(), dt = qt(et))
          }));
          tt.observe(Ot, {
            childList: !0,
            subtree: !0
          }), dt = () => {
            tt.disconnect()
          }
        }
        return () => {
          dt(), Vt.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [et, tt])
    }
    var BO = Vt(3749),
      pO = Vt(3744),
      xO = Vt(1732),
      TO = Vt(1600),
      gO = Vt(1737),
      sO = Vt(1826),
      nO = Vt(1950),
      tq = Vt(1223),
      eq = Vt(4383),
      Vq = Vt(1458);
    const Oq = 2e4,
      qq = 6e5,
      Dq = new Set;

    function mq() {
      const {
        gameEntrySource: tt,
        loadingOverlayVisible: et
      } = (0, vt.k)(["gameEntrySource", "loadingOverlayVisible"]), Vt = (0, ht.g)("connectedGame", (tt => (0, eq.f)(tt) ? tt.lobbyName : null)), Ot = (0, ht.h)("localPlayerAlive"), Dt = (0, ht.g)("players", (tt => null !== tt.localId && void 0 !== tt.byId[tt.localId])), [mt, dt] = (0, qt.useState)(null);
      return !et && Ot && Dt && null !== Vt && mt !== Vt && dt(Vt), (0, qt.useEffect)((() => {
        if (!(0, eq.g)(tt) || null === mt || mt !== Vt || Dq.has(mt)) return;
        const et = setTimeout((() => {
          Dq.add(mt), async function(tt) {
            const et = await tq.userContextManager.getCurrentUserContext();
            let Vt;
            try {
              Vt = (await TO.e.getWorldOwnerFriendOffer(et)).owner
            } catch (qt) {
              return void console.warn("Couldn't ask who owns this world", qt)
            }
            if (!Vt || (0, eq.j)(Vt.name, Date.now())) return;
            const Ot = Vt;
            ! function(tt, et) {
              const Vt = Date.now() + qq;
              let Ot = Date.now(),
                qt = 0;
              const Dt = () => {
                const mt = Date.now(),
                  dt = Et.gameBridge.latest("connectedGame");
                dt.lobbyName !== tt || mt > Vt || (null === dt.websocketUrl ? Ot = 1 / 0 : Ot === 1 / 0 && !vt.b.get("loadingOverlayVisible") && Et.gameBridge.latest("localPlayerAlive") && (Ot = mt + Oq), qt = mt < Ot || !Et.gameBridge.latest("localPlayerAlive") || vt.b.get("isUiHidden") || vt.b.get("isUiHiddenByCamera") || (0, sO.isTypingInInput)() || vt.b.get("loadingOverlayVisible") || (0, xO.q)() || (0, BO.i)() || (0, Vq.n)() ? 0 : qt + 1, qt >= 2 ? et() : setTimeout(Dt, 500))
              };
              Dt()
            }(tt, (() => {
              (0, eq.e)(gO.e.getSocialState().friends, Ot.name) || ((0, eq.h)(Ot.name, Date.now()), nO.f.showWorldOwnerOffer(Ot), (0, DV.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(mt).catch((tt => {
            console.error("Failed to offer the world's owner as a friend", tt)
          }))
        }), Oq);
        return () => {
          clearTimeout(et)
        }
      }), [tt, mt, Vt]), null
    }
    var dq = Vt(2006);
    const jq = (0, qt.memo)((function(tt) {
        let {
          durationMs: et,
          endsAtMs: Vt
        } = tt;
        const [, Ot] = (0, qt.useReducer)((tt => tt + 1), 0), Dt = null === Vt ? et : Math.max(Vt - Date.now(), 0);
        return (0, qt.useEffect)((() => {
          if (null === Vt || Dt <= 0) return;
          const tt = setTimeout(Ot, Dt - 1e3 * (Math.ceil(Dt / 1e3) - 1));
          return () => {
            clearTimeout(tt)
          }
        })), (0, Xt.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, eO.pb)(Dt)
        })
      })),
      Hq = (0, qt.memo)((function() {
        const tt = (0, ht.h)("localEffects");
        return (0, Xt.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(tt).map((tt => {
            let [et, {
              icon: Vt,
              displayName: Ot,
              durationMs: qt,
              endsAtMs: Dt,
              level: mt
            }] = tt;
            return (0, Xt.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, Xt.jsx)(dq.e, {
                icon: Vt,
                className: "EffectInfoIcon"
              }), (0, Xt.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== qt ? "0" : "1rem"
                },
                children: [(0, Xt.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, Xt.jsx)(Ht.e, {
                    text: null !== Ot && void 0 !== Ot ? Ot : et,
                    className: "EffectInfoName SmallTextBold"
                  }), mt > 1 && (0, Xt.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, eO.Y)(mt)
                  })]
                }), null !== qt && (0, Xt.jsx)(jq, {
                  durationMs: qt,
                  endsAtMs: Dt
                })]
              })]
            }, et)
          }))
        })
      }));
    var Xq = Vt(36944),
      Qq = Vt(37126),
      lq = Vt(229),
      Eq = Vt(2839),
      fq = Vt(3008);

    function wq(tt, et) {
      (0, qt.useLayoutEffect)((() => {
        let et, Vt;
        const Ot = requestAnimationFrame((() => {
          Vt = setTimeout((() => {
            Vt = void 0;
            const Ot = tt();
            et = "function" === typeof Ot ? Ot : void 0
          }), 0)
        }));
        return () => {
          var tt;
          cancelAnimationFrame(Ot), clearTimeout(Vt), null === (tt = et) || void 0 === tt || tt()
        }
      }), et)
    }
    const yq = [5, 5, 5],
      Nq = [7, 4, 4, 4];

    function aq(tt) {
      return tt.reduce(((tt, et) => tt + et), 0)
    }

    function Mq(tt, et, Vt, Ot, qt) {
      const Dt = tt.getContext("2d");
      if (!Dt) return null;
      const mt = et.color,
        dt = `${et.fontWeight} ${qt}px ${et.fontFamily}`,
        jt = () => {
          tt.width = Vt, tt.height = Ot, Dt.fillStyle = mt, Dt.textAlign = "center", Dt.textBaseline = "middle", Dt.font = dt
        };
      return jt(), {
        ctx: Dt,
        reset: jt
      }
    }
    const bq = (0, qt.memo)((function(tt) {
      let {
        show: et
      } = tt;
      const Vt = (0, qt.useRef)(null),
        Ot = (0, qt.useRef)(null),
        Dt = (0, qt.useRef)(null),
        mt = (0, wt.g)();
      return (0, qt.useEffect)((() => mt.whenShown((() => {
        let tt = 0,
          et = 0,
          Vt = performance.now(),
          qt = 0;
        const mt = (0, IO.t)((() => {
          var mt, dt, jt;
          tt++, et++;
          const Ht = performance.now();
          if (Ht - Vt < 1e3) return;
          const Xt = Math.round(tt / (Ht - Vt) * 1e3);
          if (Ot.current = Xt, null === (mt = Dt.current) || void 0 === mt || mt.call(Dt, Xt), tt = 0, Vt = Ht, Xt >= 55) return void(qt = 0);
          if (qt += 1, qt < 15) return;
          const Qt = null !== (dt = Kt.e.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== dt ? dt : 0,
            [lt, ft] = ut.b.get("minChunkAddDist");
          if (function(tt, et) {
              const Vt = Et.gameBridge.lookup("VJ", null);
              return null !== Vt && (Vt.horizontal > tt || Vt.vertical > et)
            }(lt, ft) && (null !== (jt = Kt.e.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== jt ? jt : 0) + 432e5 < Date.now() && Qt < 3) {
            Kt.e.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            dV.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((tt => {
              "notificationTornDown" !== tt && (tt ? (Et.gameBridge.send("setChunkAddDistance", {
                horizontal: lt,
                vertical: ft
              }), Kt.e.setItem("chunkHorizAddDist", lt), Kt.e.setItem("chunkVertAddDist", ft), Ct.j.sw("updatedChunkLoadDist"), Kt.e.setItem("decreaseLoadDistPromptDeniedCount", 0)) : Kt.e.setItem("decreaseLoadDistPromptDeniedCount", Qt + 1))
            }))
          }
        }));
        let dt = performance.now();
        et = 0;
        let jt = null,
          Ht = !document.hidden,
          Xt = !1;

        function Qt() {
          const tt = performance.now() - dt,
            Vt = 1e3 * et / tt;
          Ht && !Xt && (null === jt && (jt = Vt), Eq.c.setFps(Vt, jt)), et = 0, dt = performance.now()
        }
        let lt = setInterval(Qt, fq.b);

        function ft() {
          et = 0, dt = performance.now(), clearInterval(lt), lt = setInterval(Qt, fq.b)
        }

        function wt() {
          const tt = Ht;
          Ht = !document.hidden, !tt && Ht && ft()
        }
        document.addEventListener("visibilitychange", wt);
        const yt = (0, Ct.n)(BV.l, (tt => {
          const et = Xt;
          Xt = (0, BV.m)(tt), et && !Xt && ft()
        }));
        return () => {
          mt(), document.removeEventListener("visibilitychange", wt), yt(), clearInterval(lt)
        }
      }))), [mt]), wq((() => {
        var tt;
        if (!et || Dt.current) return;
        const qt = Vt.current,
          mt = window.getComputedStyle(qt.parentElement),
          dt = null !== (tt = window.devicePixelRatio) && void 0 !== tt ? tt : 1,
          jt = parseFloat(mt.fontSize) * dt,
          Ht = Math.round(3 * jt),
          Xt = Math.round(jt),
          Qt = Mq(qt, mt, Ht, Xt, jt);
        if (!Qt) return;
        const {
          ctx: lt,
          reset: Et
        } = Qt, ft = tt => {
          Et(), lt.fillText(tt.toString(), qt.width / 2, qt.height / 2)
        };
        Dt.current = ft, null !== Ot.current && ft(Ot.current)
      }), [et]), (0, Xt.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: et ? "flex" : "none"
        },
        children: [(0, Xt.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, Xt.jsx)("canvas", {
          className: "FpsCanvas",
          ref: Vt,
          width: 48,
          height: 16
        })]
      })
    }));

    function Jq(tt) {
      return Math.sign(tt) * Math.round(100 * Math.abs(tt))
    }

    function Cq(tt) {
      let {
        getCoordinates: et,
        showChunkCoords: Vt,
        columns: Ot
      } = tt;
      const Dt = (0, qt.useRef)(null);
      return wq((() => {
        var tt;
        const qt = Dt.current,
          mt = window.getComputedStyle(qt.parentElement),
          dt = null !== (tt = window.devicePixelRatio) && void 0 !== tt ? tt : 1,
          jt = parseFloat(mt.fontSize) * dt,
          Ht = Math.round(jt * aq(Ot)),
          Xt = Math.round(jt),
          Qt = Mq(qt, mt, Ht, Xt, jt);
        if (!Qt) return;
        const {
          ctx: lt,
          reset: ft
        } = Qt;
        let wt = !0,
          yt = 0,
          Nt = 0,
          Mt = 0,
          bt = 0,
          Jt = 0,
          Ct = 0;
        const ut = () => {
          wt = !0
        };
        document.fonts.load(lt.font).then(ut, ut);
        const Kt = () => {
          ft(), ut()
        };
        qt.addEventListener("contextrestored", Kt);
        let ht = performance.now();
        const vt = (0, IO.B)((() => {
          var tt, Dt, mt, dt, Ht, Xt;
          const Qt = performance.now();
          Qt - ht >= 1e3 && (ht = Qt, ft(), ut());
          const [Kt, vt, Wt] = et(), St = Jq(Kt), ct = Jq(vt), Rt = Jq(Wt);
          let It = null;
          if (Vt) {
            const tt = Et.gameBridge.lookup("localPos", null);
            It = (0, Ve.R)(tt[0], tt[1], tt[2])
          }
          const Pt = null !== (tt = null === (Dt = It) || void 0 === Dt ? void 0 : Dt[0]) && void 0 !== tt ? tt : 0,
            Zt = null !== (mt = null === (dt = It) || void 0 === dt ? void 0 : dt[1]) && void 0 !== mt ? mt : 0,
            Lt = null !== (Ht = null === (Xt = It) || void 0 === Xt ? void 0 : Xt[2]) && void 0 !== Ht ? Ht : 0;
          if (!wt && St === yt && ct === Nt && Rt === Mt && Pt === bt && Zt === Jt && Lt === Ct) return;
          wt = !1, yt = St, Nt = ct, Mt = Rt, bt = Pt, Jt = Zt, Ct = Lt;
          const Ft = [(St / 100).toFixed(2), (ct / 100).toFixed(2), (Rt / 100).toFixed(2)];
          It && Ft.unshift(`${Pt} ${Zt} ${Lt}`), lt.clearRect(0, 0, qt.width, qt.height);
          const kt = qt.height / 2;
          let Gt = 0;
          for (let et = 0; et < Ft.length; et++) {
            const tt = jt * Ot[et];
            lt.fillText(Ft[et], Gt + tt / 2, kt, tt), Gt += tt
          }
        }));
        return () => {
          vt(), qt.removeEventListener("contextrestored", Kt)
        }
      }), [et, Vt, Ot]), (0, Xt.jsx)("div", {
        className: "CoordinateUI",
        children: (0, Xt.jsx)("canvas", {
          ref: Dt,
          className: "CoordinateCanvas",
          width: 16 * aq(Ot),
          height: 16
        })
      })
    }
    const uq = (0, qt.memo)((function() {
        const tt = (0, qt.useCallback)((() => {
          const tt = Et.gameBridge.lookup("localPos", null);
          return [tt[0], tt[1], tt[2]]
        }), []);
        return (0, Xt.jsx)(Cq, {
          getCoordinates: tt,
          showChunkCoords: !1,
          columns: yq
        })
      })),
      Kq = (0, qt.memo)((function() {
        const tt = (0, qt.useCallback)((() => {
          const tt = Et.gameBridge.lookup("localPos", null),
            et = lq.e.ff;
          let Vt = tt[0] % et,
            Ot = tt[1] % et,
            qt = tt[2] % et;
          return Vt < 0 && (Vt += et), Ot < 0 && (Ot += et), qt < 0 && (qt += et), [Vt, Ot, qt]
        }), []);
        return (0, Xt.jsx)(Cq, {
          getCoordinates: tt,
          showChunkCoords: !0,
          columns: Nq
        })
      }));
    var hq = Vt(2137),
      vq = Vt(1436),
      Wq = Vt(1103),
      Sq = Vt(1308),
      cq = Vt(36992),
      Rq = Vt(1564),
      Iq = Vt(3217);
    const Pq = (0, qt.memo)((function() {
      const tt = (0, Jt.i)("maxAuraLevel");
      return 0 === tt ? null : (0, Xt.jsx)(Zq, {
        maxLevel: tt
      })
    }));

    function Zq(tt) {
      let {
        maxLevel: et
      } = tt;
      const Vt = (0, Jt.i)("auraPerLevel"),
        [Ot, Dt] = (0, qt.useState)((() => {
          var tt;
          return null !== (tt = Et.gameBridge.latest("aura")) && void 0 !== tt ? tt : void 0
        })),
        [mt, dt] = (0, qt.useState)((() => bt(Ot))),
        [jt, Ht] = (0, qt.useReducer)((tt => tt + 1), 0),
        Qt = (0, qt.useRef)(null),
        lt = (0, qt.useRef)([]),
        ft = (0, qt.useRef)({
          width: 0,
          level: 0
        }),
        wt = (0, qt.useRef)(null),
        yt = (0, qt.useRef)(null);

      function Nt() {
        if (null !== wt.current) return;
        if (0 === lt.current.length) return;
        const {
          width: tt,
          level: et
        } = lt.current.shift();
        let Vt;
        if (et !== ft.current.level && et > ft.current.level !== tt > ft.current.width) {
          const Ot = et > ft.current.level;
          Vt = Ot ? tt : 100 - tt, Qt.current.style.transition = "none", Qt.current.style.width = Ot ? "0%" : "100%", Qt.current.offsetWidth
        } else Vt = Math.abs(tt - ft.current.width);
        const Ot = 100 * Vt / 20;
        Qt.current.style.transition = `width ${Ot}ms linear`, dt(tt), ft.current = {
          width: tt,
          level: et
        }, lt.current.length > 0 && (wt.current = setTimeout((() => {
          wt.current = null, Nt()
        }), Ot))
      }

      function bt(tt) {
        return Math.floor(tt / Vt) === et ? 100 : tt % Vt / Vt * 100
      }
      return (0, qt.useEffect)((() => () => {
        clearTimeout(wt.current), clearTimeout(yt.current), wt.current = null, yt.current = null
      }), []), (0, ht.e)("aura", (tt => {
        if (yt.current && clearTimeout(yt.current), null === tt) return clearTimeout(wt.current), yt.current = null, wt.current = null, lt.current = [], ft.current = {
          width: 0,
          level: 0
        }, Dt(void 0), void dt(0);
        yt.current = setTimeout((() => {
          const et = Math.floor(Ot / Vt),
            qt = Math.floor(tt / Vt),
            mt = bt(tt);
          tt > Ot && cq.e.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), qt > et ? (qt % 5 === 0 && cq.e.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), Ht(), lt.current.push({
            width: 100,
            level: et
          })) : qt < et && lt.current.push({
            width: 0,
            level: et
          }), tt === Ot && qt === et || lt.current.push({
            width: mt,
            level: qt
          }), Dt(tt), Nt()
        }), 50)
      })), (0, Mt.f)(), (0, Xt.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, Xt.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, Xt.jsx)(Rq.e, {
            showSignal: jt,
            particleElement: (0, Xt.jsx)("img", {
              src: (0, Iq.g)("glint"),
              alt: ""
            })
          }), (0, Xt.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, Iq.g)("glint"),
            alt: "aura"
          }), (0, Xt.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== Ot && void 0 !== Ot ? Ot : 0) / Vt)
          })]
        }), (0, Xt.jsx)("div", {
          className: "AuraBar",
          children: (0, Xt.jsx)("div", {
            ref: Qt,
            className: "AuraBarBackground",
            style: {
              width: `${mt}%`
            }
          })
        })]
      })
    }
    var Lq = Vt(2673);

    function Fq(tt) {
      tt.timed && (tt.endedAnimation = tt.timed.animation, tt.timed = null)
    }
    const kq = (0, qt.memo)((function() {
      const tt = (0, qt.useRef)(null),
        et = (0, qt.useRef)(null),
        Vt = (0, qt.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, jt.f)("middleScreenBarInitiate", (tt => {
        var Ot;
        let {
          duration: qt,
          oq: Dt,
          horizBarRemOffset: mt
        } = tt;
        const dt = Vt.current;
        Fq(dt);
        const jt = et.current;
        if (!(qt >= 0) || !jt) return;
        null === (Ot = dt.endedAnimation) || void 0 === Ot || Ot.cancel(), dt.endedAnimation = null;
        const Ht = jt.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: qt,
          fill: "forwards"
        });
        dt.timed = {
          oq: Dt,
          horizBarRemOffset: mt,
          animation: Ht
        }
      })), (0, jt.f)("middleScreenBarRemove", (() => {
        Fq(Vt.current)
      })), (0, qt.useEffect)((() => {
        const Ot = Vt.current;
        let qt = Number.NaN,
          Dt = Number.NaN,
          mt = Number.NaN;
        return (0, IO.r)((() => {
          var Vt, dt, jt, Ht;
          const Xt = tt.current,
            Qt = et.current;
          if (!Xt || !Qt) return;
          null !== (Vt = Ot.timed) && void 0 !== Vt && Vt.oq && "finished" === Ot.timed.animation.playState && Fq(Ot), null === (dt = Ot.endedAnimation) || void 0 === dt || dt.cancel(), Ot.endedAnimation = null;
          let lt = Ot.timed ? 1 : 0;
          if (!Ot.timed) {
            const tt = Et.gameBridge.lookup("momentumFrac", null);
            lt = tt > 0 ? 1 : 0, tt !== mt && (mt = tt, Qt.style.transform = `scaleX(${tt})`)
          }
          const ft = null !== (jt = null === (Ht = Ot.timed) || void 0 === Ht ? void 0 : Ht.horizBarRemOffset) && void 0 !== jt ? jt : 0;
          ft === qt && lt === Dt || (qt = ft, Dt = lt, Xt.style.transform = `translateX(calc(-50% + ${ft}rem)) scaleX(${lt})`)
        }))
      }), []), (0, Xt.jsx)("div", {
        className: "MiddleScreenBar",
        ref: tt,
        children: (0, Xt.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: et
        })
      })
    }));
    var Gq = Vt(4830),
      zq = Vt(2812);

    function oq() {
      const {
        t: tt
      } = (0, It.H)(), et = (0, jt.h)("serverUpdating", null), Vt = (0, zq.e)(250, null !== et);
      return null === et || Vt - et > 3e4 ? null : (0, Xt.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, Xt.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: tt("updateWaiting:updatingIn", {
            countdown: (0, Gq.n)(et - Vt)
          })
        }), (0, Xt.jsx)("div", {
          children: tt("updateWaiting:bringYouBack")
        })]
      })
    }
    var rq = Vt(37155),
      Uq = Vt(2074);
    const Aq = [{
        translationKey: "general:interact"
      }],
      iq = (0, qt.memo)((function() {
        const tt = (0, Jt.i)("crosshairText"),
          {
            interactPrompt: et,
            blockText: Vt,
            neededTool: Ot
          } = (0, ht.h)("crosshairTarget"),
          {
            isTouchScreen: Dt
          } = (0, vt.k)(["isTouchScreen"]),
          mt = (0, St.v)(),
          dt = (0, Rt.e)("alt-fire");
        (0, qt.useEffect)((() => {
          Et.gameBridge.send("setCrosshairInteractPrompt", !Dt || mt ? "key" : "touch")
        }), [Dt, mt]);
        const [Qt, lt] = (0, qt.useReducer)((tt => tt + 1), 0);
        (0, jt.f)("customBindingsChanged", lt);
        var ft;
        if (null !== et && (mt && null !== dt || !Dt && null !== (0, Uq.o)("alt-fire"))) return (0, Xt.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, Xt.jsx)(Wt.d, {
            noaAction: "alt-fire"
          }), (0, Xt.jsx)(Ht.e, {
            text: null !== (ft = et.label) && void 0 !== ft ? ft : Aq
          })]
        });
        let wt = null;
        return null !== Vt ? wt = Vt : null !== tt && "" !== tt ? wt = tt : null !== Ot && (wt = [{
          icon: Ot,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), wt ? (0, Xt.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, Xt.jsx)(Ht.e, {
            text: wt
          })
        }) : null
      }));
    var Yq = Vt(2681);
    const Bq = (0, qt.memo)((function() {
      var tt;
      const {
        interactPrompt: et
      } = (0, ht.h)("crosshairTarget"), {
        openInGameMenuName: Vt,
        openEverythingMenuName: Ot
      } = (0, vt.k)(["openInGameMenuName", "openEverythingMenuName"]), qt = (0, jt.h)("aimingOverlay", "none"), Dt = (0, Tt.j)(), mt = (0, Yq.e)();
      return null === et || null !== Vt || null !== Ot || "sniper" === qt || Dt || mt ? null : (0, Xt.jsx)(pq, {
        label: null !== (tt = et.label) && void 0 !== tt ? tt : Aq
      })
    }));

    function pq(tt) {
      let {
        label: et
      } = tt;
      const Vt = Fe(nt.d.Interact, !1);
      return (0, qt.useEffect)((() => (Ct.j.sw(be.u), () => {
        Ct.j.sw(be.u)
      })), []), (0, Xt.jsx)("div", {
        ref: Vt,
        className: "TouchInteractHit",
        children: (0, Xt.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, Xt.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, Xt.jsx)(zt.b, {
              name: "hand-back-point-up"
            })
          }), (0, Xt.jsx)(Ht.e, {
            text: et
          })]
        })
      })
    }
    var xq = Vt(83),
      Tq = Vt(34286),
      gq = Vt(1842),
      sq = Vt(34301);
    const nq = "ScreenshotMode";
    let tD = [];
    const eD = new Set;

    function VD(tt) {
      tD = tt;
      for (const et of eD) et(tt)
    }
    const OD = (0, qt.memo)((function() {
      const {
        screenshotMode: tt,
        isTouchScreen: et,
        openEverythingMenuName: Vt,
        openInGameMenuName: Ot
      } = (0, vt.k)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), Dt = null !== Vt || null !== Ot, mt = (0, ht.h)("localPlayerAlive");
      return (0, qt.useEffect)((() => {
        !tt || !Dt && et && mt || (0, Tq.c)()
      }), [tt, Dt, et, mt]), (0, qt.useEffect)((() => Tq.c), []), (0, qt.useEffect)((() => {
        if (tt) return document.documentElement.classList.add(nq), (0, te.g)(gt.u.ScreenshotMode, gt.u.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(nq), (0, te.g)(gt.u.ScreenshotMode, 0, "screenshotMode")
        }
      }), [tt]), tt ? (0, xq.createPortal)((0, Xt.jsx)(qD, {}), document.body) : null
    }));

    function qD() {
      const {
        t: tt
      } = (0, It.H)(), [et, Vt] = (0, qt.useState)(!1), [Ot, Dt] = (0, qt.useState)(0), [mt, dt] = (0, qt.useState)(null), jt = function() {
        const [tt, et] = (0, qt.useState)(tD);
        return (0, qt.useEffect)((() => (eD.add(et), et(tD), () => {
          eD.delete(et)
        })), []), tt
      }(), Ht = (0, qt.useRef)(), Qt = (0, qt.useRef)(!1);
      (0, qt.useEffect)((() => () => {
        clearTimeout(Ht.current)
      }), []);
      const lt = tt => {
          clearTimeout(Ht.current), dt(tt), tt && (Ht.current = setTimeout((() => {
            dt(null)
          }), 2e3))
        },
        Et = (et, Vt) => {
          switch (et) {
            case "saved":
              lt(tt("screenshotMode:saved"));
              break;
            case "denied":
              lt(tt("screenshotMode:denied"));
              break;
            case "needsTap":
              tD.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), lt(tt("screenshotMode:saveWaitingFirst"))) : VD([...tD, Vt])
          }
        },
        ft = et => {
          console.error("Screenshot mode: the photo wasn't saved", et), lt(tt("screenshotMode:failed"))
        };
      return (0, Xt.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, Xt.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, Xt.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), Ot > 0 && (0, Xt.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, Ot), (0, Xt.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": tt("screenshotMode:back"),
          onClick: Tq.c,
          children: (0, Xt.jsx)(zt.b, {
            name: "arrow-left"
          })
        }), (0, Xt.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": tt("screenshotMode:takePhoto"),
          "aria-busy": et,
          onClick: () => {
            (async () => {
              if (!et) {
                Vt(!0), lt(null);
                try {
                  const tt = await (0, Tq.d)();
                  Dt((tt => tt + 1)), Et(await (0, sq.g)(tt), tt)
                } catch (tt) {
                  ft(tt)
                } finally {
                  Vt(!1)
                }
              }
            })()
          },
          children: (0, Xt.jsx)(zt.b, {
            name: "camera-alt"
          })
        }), null !== mt ? (0, Xt.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: mt
        }) : jt.length > 0 && (0, Xt.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (Qt.current) return;
            Qt.current = !0;
            const [tt] = tD;
            VD(tD.slice(1));
            const et = et => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", et), (0, gq.c)(tt, tt.name), Et("saved", tt)
            };
            (0, sq.i)(tt).then((Vt => {
              "needsTap" === Vt ? et(Vt) : Et(Vt, tt)
            }), et).catch(ft).finally((() => {
              Qt.current = !1
            }))
          },
          children: [(0, Xt.jsx)(zt.b, {
            name: "image"
          }), tt("screenshotMode:savePhoto"), jt.length > 1 && ` (${jt.length})`]
        })]
      })
    }
    var DD = Vt(4938),
      mD = Vt(5e3);
    const dD = (0, qt.forwardRef)((function(tt, et) {
        let {
          text: Vt,
          className: Ot,
          children: qt
        } = tt;
        return Vt.hasText ? (0, Xt.jsx)("div", {
          ref: et,
          className: mt()("HudTextPanel", Ot, {
            NoBackground: !Vt.showBackground
          }),
          children: null !== qt && void 0 !== qt ? qt : (0, Xt.jsx)(Ht.e, {
            text: Vt.content
          })
        }) : null
      })),
      jD = (0, qt.memo)((function() {
        const tt = (0, Jt.j)("middleTextTop"),
          [et, Vt] = (0, qt.useState)(null),
          Ot = (0, rO.j)(et);
        return tt.hasText ? (0, Xt.jsx)("div", {
          className: mt()("MiddleTextTopContainer", {
            MiddleTextTopBelow: Ot
          }),
          children: (0, Xt.jsx)(dD, {
            ref: Vt,
            className: "MiddleTextTop",
            text: tt
          })
        }) : null
      })),
      HD = (0, qt.memo)((function() {
        const tt = (0, Jt.d)();
        return (0, Xt.jsx)(Xt.Fragment, {
          children: tt.map(((tt, et) => (0, Xt.jsx)(dD, {
            className: "HeaderChip",
            text: tt
          }, et)))
        })
      }));
    var XD = Vt(3685),
      QD = Vt(4746);
    const lD = (0, qt.memo)((function() {
      const {
        t: tt
      } = (0, It.H)(), [et, Vt] = (0, qt.useState)(!1), Ot = (0, qt.useRef)(!1), Dt = function(tt) {
        let {
          gameNameWithVariation: et,
          lobbyName: Vt
        } = tt;
        if ((0, Wq.k)(et)) return ED;
        if ((0, Sq.K)(Vt)) return fD;
        return null
      }((0, ht.h)("connectedGame"));
      if (!Dt || et) return null;
      const mt = QD.e[Dt.target];
      return (0, Xt.jsx)(Gt.g, {
        tooltipInner: (0, Xt.jsx)("div", {
          children: tt(mt.reportButtonTooltip)
        }),
        children: (0, Xt.jsx)("div", {
          children: (0, Xt.jsx)(AV.N, {
            onClick: () => {
              Ot.current || (Ot.current = !0, (0, QD.h)(Dt.reportPolicyIds, mt).then((tt => {
                null !== tt && void 0 !== tt && tt.selectedPolicyId && (Et.gameBridge.send("reportLobbyOrGame", {
                  target: Dt.target,
                  Ed: tt.selectedPolicyId,
                  details: tt.fd
                }), Vt(!0))
              })).finally((() => {
                Ot.current = !1
              })))
            }
          })
        })
      })
    }));
    const ED = {
        target: "customGame",
        reportPolicyIds: XD.f
      },
      fD = {
        target: "lobby",
        reportPolicyIds: XD.g
      };
    var wD = Vt(9023),
      yD = Vt(37176),
      ND = Vt(37185),
      aD = Vt(37194),
      MD = Vt(37202),
      bD = Vt(37182);
    let JD = !1;
    async function CD(tt, et) {
      var Vt, Ot;
      const {
        files: qt
      } = et, Dt = qt.replayKey();
      if (null === Dt) return "none";
      if (JD) throw new Error(bD.d.saveBusy.text);
      const mt = null !== (Vt = null === (Ot = qt.saveRefusal) || void 0 === Ot ? void 0 : Ot.call(qt)) && void 0 !== Vt ? Vt : null;
      if (null !== mt) throw new Error(mt);
      JD = !0;
      try {
        return await async function(tt, et, Vt) {
          const {
            files: Ot
          } = et, qt = () => Ot.replayKey() === Vt, Dt = (tt, et) => {
            qt() && Ot.markSaved(tt, et)
          };
          let mt = null;
          if (et.pickerSupported()) {
            try {
              if (mt = await et.chooseFile(tt ? null : Ot.fileHandle()), null === mt) return "nV"
            } catch (jt) {
              et.onFallback(jt)
            }
            if (!qt()) throw new Error(bD.d.saveClosed.text)
          }
          const dt = await Ot.encode();
          if (null === dt) {
            if (null !== mt) throw new Error(bD.d.saveClosed.text);
            return "none"
          }
          if (null !== mt) try {
            return await et.write(mt, dt), Dt(mt), "written"
          } catch (jt) {
            et.onFallback(jt)
          }
          return Dt(null, et.download(dt)), "downloaded"
        }(tt, et, Dt)
      } finally {
        JD = !1
      }
    }
    var uD = Vt(37226),
      KD = Vt(4677);
    const hD = [1, 2, 4, 8, 16, 32, 64];

    function vD(tt, et) {
      return Math.max(0, Math.min(tt, et))
    }

    function WD(tt, et, Vt) {
      return Vt <= et ? 0 : (tt - et) / (Vt - et) * 100
    }

    function SD(tt, et, Vt) {
      const Ot = Vt - et;
      return Math.round(et + tt / 100 * Ot)
    }

    function cD(tt, et) {
      const Vt = Math.floor(tt / et / 60),
        Ot = Math.floor(tt / et % 60),
        qt = tt % et;
      return `${Vt.toString().padStart(2,"0")}:${Ot.toString().padStart(2,"0")}:${qt.toString().padStart(2,"0")}`
    }

    function RD(tt) {
      return Number.isInteger(tt) || hD.includes(tt) ? `${Math.round(tt)}\xd7` : `${tt.toFixed(1)}\xd7`
    }

    function ID(tt, et) {
      const Vt = hD.indexOf(tt);
      if (-1 !== Vt) return "in" === et ? hD[Math.min(Vt + 1, hD.length - 1)] : hD[Math.max(Vt - 1, 0)];
      if ("in" === et) {
        for (const et of hD)
          if (et >= tt) return et;
        return tt
      }
      for (let Ot = hD.length - 1; Ot >= 0; Ot--)
        if (hD[Ot] <= tt) return hD[Ot];
      return hD[0]
    }

    function PD(tt, et) {
      const Vt = et.getBoundingClientRect();
      if (Vt.width <= 0) return 0;
      const Ot = (tt - Vt.left) / Vt.width * 100;
      return Math.max(0, Math.min(100, Ot))
    }

    function ZD(tt, et) {
      return et <= 0 ? 0 : tt / et * 100
    }

    function LD(tt, et, Vt) {
      const Ot = [];
      let qt = Math.ceil(tt / Vt) * Vt;
      for (; qt <= et;) Ot.push(qt), qt += Vt;
      return Ot
    }
    var FD = Vt(37234);
    const kD = [{
        label: "Linear",
        easing: FD.m
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: FD.e
      }, {
        label: "Ease Out",
        easing: FD.i
      }, {
        label: "Ease In Out",
        easing: FD.d
      }],
      GD = 200,
      zD = 150;

    function oD(tt) {
      const et = tt => Number(tt.toFixed(3)).toString();
      return `cubic-bezier(${et(tt[0])}, ${et(tt[1])}, ${et(tt[2])}, ${et(tt[3])})`
    }

    function rD(tt, et) {
      return {
        cx: 25 + tt * zD,
        cy: 25 + (1 - et) * zD
      }
    }

    function UD(tt, et, Vt) {
      const Ot = tt - Vt.left,
        qt = et - Vt.top;
      return {
        x: eO.e.clamp((Ot - 25) / zD, 0, 1),
        y: eO.e.clamp(1 - (qt - 25) / zD, -1, 2)
      }
    }

    function AD(tt, et, Vt, Ot, qt) {
      return {
        x: (0, FD.s)(tt, Vt, qt),
        y: (0, FD.s)(et, Ot, qt)
      }
    }
    const iD = (0, qt.memo)((function(tt) {
      let {
        value: et,
        onChange: Vt
      } = tt;
      const Ot = (0, qt.useRef)(null),
        Dt = (0, qt.useRef)(null),
        [mt, dt] = (0, qt.useState)(null),
        jt = (0, qt.useCallback)((() => {
          const tt = Ot.current;
          if (!tt) return;
          const Vt = tt.getContext("2d");
          if (!Vt) return;
          const qt = window.devicePixelRatio || 1;
          tt.width = GD * qt, tt.height = GD * qt, Vt.setTransform(qt, 0, 0, qt, 0, 0), Vt.clearRect(0, 0, GD, GD), Vt.fillStyle = "rgba(38, 52, 93, 0.85)", Vt.fillRect(0, 0, GD, GD), Vt.beginPath();
          const Dt = rD(0, 0),
            dt = rD(1, 1);
          Vt.moveTo(Dt.cx, Dt.cy), Vt.lineTo(dt.cx, dt.cy), Vt.strokeStyle = "rgba(164, 164, 164, 0.35)", Vt.setLineDash([3, 3]), Vt.stroke(), Vt.setLineDash([]);
          const [jt, Ht, Xt, Qt] = et, lt = rD(jt, Ht), Et = rD(Xt, Qt);
          Vt.strokeStyle = "rgba(252, 211, 115, 0.55)", Vt.lineWidth = 1.5, Vt.beginPath(), Vt.moveTo(Dt.cx, Dt.cy), Vt.lineTo(lt.cx, lt.cy), Vt.moveTo(dt.cx, dt.cy), Vt.lineTo(Et.cx, Et.cy), Vt.stroke(), Vt.strokeStyle = "#fcd373", Vt.lineWidth = 2, Vt.beginPath();
          for (let et = 0; et <= 50; et++) {
            const tt = AD(jt, Ht, Xt, Qt, et / 50),
              Ot = rD(tt.x, tt.y);
            0 === et ? Vt.moveTo(Ot.cx, Ot.cy) : Vt.lineTo(Ot.cx, Ot.cy)
          }
          Vt.stroke();
          const ft = (tt, et, Ot) => {
            Vt.beginPath(), Vt.arc(tt, et, Ot ? 6 : 5, 0, 2 * Math.PI), Vt.fillStyle = Ot ? "#ffb914" : "#fcd373", Vt.fill(), Vt.strokeStyle = "#1a1f2e", Vt.lineWidth = 1.5, Vt.stroke()
          };
          ft(lt.cx, lt.cy, "p1" === mt), ft(Et.cx, Et.cy, "p2" === mt)
        }), [mt, et]);
      (0, qt.useEffect)((() => {
        jt()
      }), [jt]);
      const Ht = (0, qt.useCallback)(((tt, qt) => {
          const mt = Ot.current,
            dt = Dt.current;
          if (!mt || !dt) return;
          const jt = mt.getBoundingClientRect(),
            {
              x: Ht,
              y: Xt
            } = UD(tt, qt, jt);
          Vt("p1" === dt ? [Ht, Xt, et[2], et[3]] : [et[0], et[1], Ht, Xt])
        }), [Vt, et]),
        Qt = (0, qt.useCallback)((tt => {
          const Vt = Ot.current;
          if (!Vt) return;
          const qt = Vt.getBoundingClientRect();
          let {
            x: mt,
            y: jt
          } = UD(tt.clientX, tt.clientY, qt);
          mt = eO.e.clamp(mt, 0, 1), jt = eO.e.clamp(jt, 0, 1);
          const [Xt, Qt, lt, Et] = et.map((tt => eO.e.clamp(tt, 0, 1))), ft = Math.hypot(mt - Xt, jt - Qt), wt = Math.hypot(mt - lt, jt - Et), yt = ft <= wt ? "p1" : "p2";
          ("p1" === yt ? ft : wt) > .12 || (Dt.current = yt, dt(yt), Vt.setPointerCapture(tt.pointerId), Ht(tt.clientX, tt.clientY))
        }), [Ht, et]),
        lt = (0, qt.useCallback)((tt => {
          Dt.current && Ht(tt.clientX, tt.clientY)
        }), [Ht]),
        Et = (0, qt.useCallback)((tt => {
          Dt.current = null, dt(null), tt.currentTarget.hasPointerCapture(tt.pointerId) && tt.currentTarget.releasePointerCapture(tt.pointerId)
        }), []);
      return (0, Xt.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, Xt.jsx)("canvas", {
          ref: Ot,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: GD,
            height: GD
          },
          onPointerDown: Qt,
          onPointerMove: lt,
          onPointerUp: Et,
          onPointerCancel: Et
        }), (0, Xt.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: oD(et)
        })]
      })
    }));
    var YD = Vt(1779),
      BD = Vt(1764);
    const pD = 12;

    function xD(tt) {
      return {
        left: tt.left + tt.width / 2,
        top: tt.top - 8
      }
    }

    function TD(tt, et) {
      const [Vt, Ot] = (0, qt.useState)(null);
      return (0, qt.useLayoutEffect)((() => {
        const Vt = tt.current;
        if (!Vt) return;
        const {
          width: qt,
          height: Dt
        } = Vt.getBoundingClientRect();
        Ot(function(tt, et, Vt) {
          const Ot = window.innerWidth,
            qt = window.innerHeight,
            Dt = et / 2;
          let mt = tt.left + tt.width / 2;
          mt = Math.max(pD + Dt, Math.min(mt, Ot - pD - Dt));
          const dt = tt.top - 8 - pD,
            jt = qt - tt.bottom - 8 - pD,
            Ht = dt < Vt && jt >= dt;
          let Xt;
          Ht ? (Xt = tt.bottom + 8, Xt + Vt > qt - pD && (Xt = qt - pD - Vt), Xt = Math.max(pD, Xt)) : (Xt = tt.top - 8, Xt - Vt < pD && (Xt = pD + Vt));
          return {
            left: mt,
            top: Xt,
            placeBelow: Ht
          }
        }(et, qt, Dt))
      }), [et, tt]), Vt
    }

    function gD(tt, et, Vt) {
      (0, qt.useEffect)((() => (0, BD.b)("pointerdown", (Ot => {
        var qt, Dt;
        const mt = Ot.target;
        mt instanceof Node && (null !== (qt = tt.current) && void 0 !== qt && qt.contains(mt) || null !== Vt && void 0 !== Vt && null !== (Dt = Vt.current) && void 0 !== Dt && Dt.contains(mt) || (0, YD.h)(mt) || et())
      }))), [Vt, et, tt])
    }

    function sD(tt) {
      let {
        label: et,
        value: Vt,
        onChange: Ot
      } = tt;
      return (0, Xt.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, Xt.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: et
        }), (0, Xt.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((tt, et) => (0, Xt.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, Xt.jsx)("span", {
              children: tt
            }), (0, Xt.jsx)("input", {
              type: "number",
              step: "any",
              value: Vt[et],
              onChange: tt => {
                const qt = Number.parseFloat(tt.target.value);
                if (Number.isNaN(qt)) return;
                const Dt = [Vt[0], Vt[1], Vt[2]];
                Dt[et] = qt, Ot(Dt)
              }
            })]
          }, tt)))
        })]
      })
    }
    const nD = (0, qt.memo)((function(tt) {
        var et, Vt, Ot;
        let {
          keyframe: Dt,
          anchor: dt,
          hasOutgoingSegment: jt,
          onClose: Ht,
          onApply: Qt,
          onDelete: lt,
          onUseCurrentCamera: Et
        } = tt;
        const ft = (0, qt.useRef)(null),
          wt = TD(ft, dt.rect),
          [yt, Nt] = (0, qt.useState)((() => [Dt.position[0], Dt.position[1], Dt.position[2]])),
          [Mt, bt] = (0, qt.useState)((() => [Dt.direction[0], Dt.direction[1], Dt.direction[2]])),
          [Jt, Ct] = (0, qt.useState)((() => Dt.easing));
        (0, qt.useEffect)((() => {
          Nt([Dt.position[0], Dt.position[1], Dt.position[2]]), bt([Dt.direction[0], Dt.direction[1], Dt.direction[2]]), Ct(Dt.easing)
        }), [Dt]), gD(ft, Ht);
        const ut = (0, qt.useCallback)((() => {
            Qt({
              BQ: Dt.BQ,
              position: yt,
              direction: Mt,
              easing: Jt
            }), Ht()
          }), [Mt, Jt, Dt.BQ, Qt, Ht, yt]),
          Kt = (0, qt.useCallback)((() => {
            lt(Dt.BQ), Ht()
          }), [Dt.BQ, lt, Ht]),
          ht = (0, qt.useCallback)((() => {
            const tt = Et();
            tt && (Nt([tt.position[0], tt.position[1], tt.position[2]]), bt([tt.direction[0], tt.direction[1], tt.direction[2]]))
          }), [Et]),
          vt = xD(dt.rect);
        return (0, Xt.jsxs)("div", {
          ref: ft,
          className: mt()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (et = null === wt || void 0 === wt ? void 0 : wt.placeBelow) && void 0 !== et && et,
            Positioned: null !== wt
          }),
          style: {
            left: `${null!==(Vt=null===wt||void 0===wt?void 0:wt.left)&&void 0!==Vt?Vt:vt.left}px`,
            top: `${null!==(Ot=null===wt||void 0===wt?void 0:wt.top)&&void 0!==Ot?Ot:vt.top}px`
          },
          onPointerDown: tt => {
            tt.stopPropagation()
          },
          children: [(0, Xt.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, Xt.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, Xt.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", dt.BQ]
            })]
          }), (0, Xt.jsx)(sD, {
            label: "Position",
            value: yt,
            onChange: Nt
          }), (0, Xt.jsx)(sD, {
            label: "Direction",
            value: Mt,
            onChange: bt
          }), jt && (0, Xt.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, Xt.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, Xt.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: kD.map((tt => {
                const et = (Vt = Jt, Ot = tt.easing, Vt[0] === Ot[0] && Vt[1] === Ot[1] && Vt[2] === Ot[2] && Vt[3] === Ot[3]);
                var Vt, Ot;
                return (0, Xt.jsx)(AV.Q, {
                  className: mt()("ReplayKeyframePopoverPreset", {
                    Active: et
                  }),
                  onClick: () => {
                    Ct(tt.easing)
                  },
                  children: tt.label
                }, tt.label)
              }))
            }), (0, Xt.jsx)(iD, {
              value: Jt,
              onChange: Ct
            })]
          }), (0, Xt.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, Xt.jsx)(AV.f, {
              className: "ReplayViewerCompactButton",
              onClick: ht,
              children: "Use current view"
            }), (0, Xt.jsx)(AV.m, {
              className: "ReplayViewerCompactButton",
              onClick: ut,
              children: "Apply"
            }), (0, Xt.jsx)(AV.G, {
              className: "ReplayViewerCompactButton",
              onClick: Kt,
              children: "Delete"
            })]
          })]
        })
      })),
      tm = (0, qt.memo)((function(tt) {
        var et, Vt, Ot;
        let {
          anchor: Dt,
          hasPlaybackMark: dt,
          onClose: jt,
          onMark: Ht,
          onZoom: Qt,
          onCrop: lt,
          onDeleteKeyframes: Et,
          onClearMark: ft
        } = tt;
        const wt = (0, qt.useRef)(null),
          yt = TD(wt, Dt.rect),
          Nt = xD(Dt.rect),
          Mt = {
            startTick: Dt.startTick,
            endTick: Dt.endTick
          },
          bt = Dt.endTick > Dt.startTick;
        return gD(wt, jt), (0, Xt.jsx)("div", {
          ref: wt,
          className: mt()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (et = null === yt || void 0 === yt ? void 0 : yt.placeBelow) && void 0 !== et && et,
            Positioned: null !== yt
          }),
          style: {
            left: `${null!==(Vt=null===yt||void 0===yt?void 0:yt.left)&&void 0!==Vt?Vt:Nt.left}px`,
            top: `${null!==(Ot=null===yt||void 0===yt?void 0:yt.top)&&void 0!==Ot?Ot:Nt.top}px`
          },
          onPointerDown: tt => {
            tt.stopPropagation()
          },
          children: (0, Xt.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, Xt.jsx)(AV.m, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Ht(Mt)
              },
              disabled: !bt,
              children: (0, Xt.jsx)("span", {
                children: " Play range "
              })
            }), (0, Xt.jsx)(AV.f, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Qt(Mt)
              },
              children: (0, Xt.jsx)("span", {
                children: " Zoom "
              })
            }), (0, Xt.jsx)(AV.Q, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                lt(Mt)
              },
              disabled: !bt,
              children: (0, Xt.jsx)("span", {
                children: " Crop "
              })
            }), (0, Xt.jsx)(AV.Q, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Et(Mt)
              },
              children: (0, Xt.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), dt && (0, Xt.jsx)(AV.Q, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                ft()
              },
              children: (0, Xt.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      em = (0, qt.memo)((function(tt) {
        var et, Vt;
        let {
          maxTick: Ot,
          displayTick: Dt,
          bI: dt,
          cameraKeyframes: jt,
          playbackMark: Ht,
          onSeek: Qt,
          onPause: lt,
          onScrubTickChange: Et,
          onMoveCameraKeyframe: ft,
          onUpdateCameraKeyframe: wt,
          onDeleteCameraKeyframe: yt,
          onUseCurrentCamera: Nt,
          onMarkRange: Mt,
          onCropRange: bt,
          onDeleteKeyframesInRange: Jt,
          onClearMark: Ct,
          zoomLevel: ut,
          onZoomLevelChange: Kt
        } = tt;
        const ht = (0, qt.useRef)(null),
          vt = (0, qt.useRef)(null),
          Wt = (0, qt.useRef)(!1),
          St = (0, qt.useRef)(!1),
          ct = (0, qt.useRef)(ut),
          Rt = (0, qt.useRef)(null),
          It = (0, qt.useRef)(null),
          Pt = (0, qt.useRef)(null),
          Zt = (0, qt.useRef)(null),
          [Lt, Ft] = (0, qt.useState)(null),
          [kt, Gt] = (0, qt.useState)(Dt),
          [zt, ot] = (0, qt.useState)(null),
          [rt, Ut] = (0, qt.useState)(null),
          [At, it] = (0, qt.useState)(null),
          [Yt, Bt] = (0, qt.useState)(null),
          pt = (0, qt.useMemo)((() => jt.map((tt => tt.BQ))), [jt]),
          xt = null !== Lt && void 0 !== Lt ? Lt : Dt,
          {
            viewStart: Tt,
            viewEnd: gt
          } = (0, qt.useMemo)((() => function(tt) {
            const et = tt.maxTick + 1,
              Vt = Math.max(1, Math.ceil(et / tt.zoomLevel)),
              Ot = Math.floor(Vt / 2);
            let qt = tt.centerTick - Ot;
            return qt = Math.max(0, Math.min(qt, tt.maxTick - Vt + 1)), {
              viewStart: qt,
              viewEnd: Math.min(tt.maxTick, qt + Vt - 1)
            }
          }({
            maxTick: Ot,
            zoomLevel: ut,
            centerTick: kt
          })), [Ot, ut, kt]);
        (0, qt.useEffect)((() => {
          if (null !== Lt || null !== It.current || null !== Pt.current || null !== Zt.current) return;
          if (Wt.current) return void(Wt.current = !1);
          if (St.current) return void(St.current = !1);
          const tt = ct.current !== ut;
          ct.current = ut, tt && Gt(Dt)
        }), [ut, Dt, Lt]);
        const st = (0, qt.useCallback)((tt => {
            let et = vD(tt, Ot);
            return Ht && (et = Math.max(Ht.inTick, Math.min(et, Ht.outTick))), et
          }), [Ot, Ht]),
          nt = (0, qt.useCallback)(((tt, et) => {
            const Vt = st(tt);
            Qt(Vt), et && Gt(Vt)
          }), [st, Qt]),
          te = (0, qt.useCallback)(((tt, et) => {
            const Vt = st(tt);
            Ft(Vt), Et(Vt), nt(Vt, et)
          }), [st, nt, Et]),
          ee = (0, qt.useCallback)((() => {
            Ft((tt => (null !== tt && Gt(tt), null))), Et(null)
          }), [Et]),
          Ve = (0, qt.useCallback)((() => {
            it(null), Bt(null)
          }), []),
          Oe = (0, qt.useCallback)((tt => {
            const et = ht.current;
            if (!et) return 0;
            return vD(SD(PD(tt, et), Tt, gt), Ot)
          }), [Ot, gt, Tt]),
          qe = (0, qt.useCallback)((tt => {
            const et = vt.current;
            if (!et) return 0;
            return vD(SD(PD(tt, et), 0, Ot), Ot)
          }), [Ot]),
          De = (0, qt.useMemo)((() => {
            if (!zt) return [...pt];
            const tt = pt.filter((tt => tt !== zt.fromTick));
            return tt.push(zt.previewTick), tt.sort(((tt, et) => tt - et)), tt
          }), [pt, zt]),
          me = (0, qt.useMemo)((() => {
            var tt;
            return rt && null !== (tt = jt.find((tt => tt.BQ === rt.BQ))) && void 0 !== tt ? tt : null
          }), [jt, rt]),
          de = (0, qt.useMemo)((() => !!me && jt.some((tt => tt.BQ > me.BQ))), [jt, me]);
        (0, qt.useEffect)((() => {
          rt && !me && Ut(null)
        }), [rt, me]), (0, qt.useEffect)((() => {
          if (!Yt) return () => {};
          const tt = tt => {
            "Escape" === tt.key && Ve()
          };
          return window.addEventListener("keydown", tt), () => {
            window.removeEventListener("keydown", tt)
          }
        }), [Ve, Yt]);
        const je = (0, qt.useCallback)(((tt, et) => {
            Ve(), lt(), Qt(tt, {
              ignorePlaybackMark: !0
            }), Ut({
              BQ: tt,
              rect: et.getBoundingClientRect()
            })
          }), [Ve, lt, Qt]),
          He = (0, qt.useCallback)(((tt, et) => Vt => {
            0 === Vt.button && (Vt.stopPropagation(), Ut(null), Ve(), lt(), Rt.current = {
              fromTick: tt,
              startX: Vt.clientX,
              startY: Vt.clientY,
              didDrag: !1,
              track: et
            }, ot({
              fromTick: tt,
              previewTick: tt,
              track: et
            }), Vt.currentTarget.setPointerCapture(Vt.pointerId))
          }), [Ve, lt]),
          Xe = (0, qt.useCallback)((tt => {
            if (!zt) return;
            tt.stopPropagation();
            const et = Rt.current;
            if (et && !et.didDrag) {
              const Vt = tt.clientX - et.startX,
                Ot = tt.clientY - et.startY;
              Math.hypot(Vt, Ot) > 5 && (et.didDrag = !0)
            }
            const Vt = "detail" === zt.track ? Oe(tt.clientX) : qe(tt.clientX);
            Vt !== zt.previewTick && ot({
              ...zt,
              previewTick: Vt
            })
          }), [zt, Oe, qe]),
          Qe = (0, qt.useCallback)((tt => {
            if (!zt) return;
            tt.stopPropagation();
            const et = Rt.current,
              Vt = "detail" === zt.track ? Oe(tt.clientX) : qe(tt.clientX);
            et && !et.didDrag ? je(et.fromTick, tt.currentTarget) : Vt !== zt.fromTick && ft(zt.fromTick, Vt), ot(null), Rt.current = null, tt.currentTarget.releasePointerCapture(tt.pointerId)
          }), [zt, ft, je, Oe, qe]),
          le = (0, qt.useCallback)((tt => {
            if (0 !== tt.button) return;
            Ut(null), lt();
            const et = Oe(tt.clientX);
            It.current = {
              pointerId: tt.pointerId,
              startX: tt.clientX,
              startY: tt.clientY,
              startTick: et,
              currentTick: et,
              didSelect: !1
            }, it(null), Bt(null), tt.currentTarget.setPointerCapture(tt.pointerId)
          }), [lt, Oe]),
          Ee = (0, qt.useCallback)((tt => {
            const et = It.current;
            if (!et || et.pointerId !== tt.pointerId) return;
            const Vt = Oe(tt.clientX);
            if (et.currentTick = Vt, !et.didSelect) {
              const Vt = tt.clientX - et.startX,
                Ot = tt.clientY - et.startY;
              if (Math.hypot(Vt, Ot) <= 5) return;
              et.didSelect = !0
            }
            const Ot = Math.min(et.startTick, Vt),
              qt = Math.max(et.startTick, Vt);
            it({
              startTick: Ot,
              endTick: qt
            })
          }), [Oe]),
          fe = (0, qt.useCallback)((tt => {
            const et = It.current;
            if (!et || et.pointerId !== tt.pointerId) return;
            if (It.current = null, tt.currentTarget.releasePointerCapture(tt.pointerId), !et.didSelect) return Ve(), void nt(et.startTick, !0);
            const Vt = Oe(tt.clientX),
              Ot = Math.min(et.startTick, Vt),
              qt = Math.max(et.startTick, Vt),
              Dt = {
                startTick: Ot,
                endTick: qt
              };
            it(Dt);
            const mt = ht.current;
            if (!mt) return;
            const dt = mt.getBoundingClientRect(),
              jt = WD(Ot, Tt, gt) / 100,
              Ht = WD(qt, Tt, gt) / 100,
              Xt = dt.left + jt * dt.width,
              Qt = dt.left + Ht * dt.width;
            Bt({
              ...Dt,
              rect: new DOMRect(Xt, dt.top, Math.max(Qt - Xt, 1), dt.height)
            })
          }), [Ve, nt, Oe, gt, Tt]),
          we = (0, qt.useCallback)((tt => et => {
            if (0 !== et.button) return;
            et.stopPropagation(), Ut(null), Ve(), lt(), Pt.current = {
              pointerId: et.pointerId,
              track: tt
            }, et.currentTarget.setPointerCapture(et.pointerId);
            const Vt = "detail" === tt ? Oe(et.clientX) : qe(et.clientX);
            te(Vt, !1)
          }), [Ve, lt, te, Oe, qe]),
          ye = (0, qt.useCallback)((tt => {
            const et = Pt.current;
            if (!et || et.pointerId !== tt.pointerId) return;
            tt.stopPropagation();
            const Vt = "detail" === et.track ? Oe(tt.clientX) : qe(tt.clientX);
            te(Vt, !1)
          }), [te, Oe, qe]),
          Ne = (0, qt.useCallback)((tt => {
            const et = Pt.current;
            et && et.pointerId === tt.pointerId && (tt.stopPropagation(), Pt.current = null, tt.currentTarget.releasePointerCapture(tt.pointerId), ee())
          }), [ee]),
          ae = (0, qt.useCallback)((tt => {
            0 === tt.button && (Ve(), lt(), Zt.current = {
              pointerId: tt.pointerId
            }, tt.currentTarget.setPointerCapture(tt.pointerId), te(qe(tt.clientX), !0))
          }), [Ve, lt, te, qe]),
          Me = (0, qt.useCallback)((tt => {
            const et = Zt.current;
            et && et.pointerId === tt.pointerId && te(qe(tt.clientX), !0)
          }), [te, qe]),
          be = (0, qt.useCallback)((tt => {
            const et = Zt.current;
            et && et.pointerId === tt.pointerId && (Zt.current = null, tt.currentTarget.releasePointerCapture(tt.pointerId), ee())
          }), [ee]),
          Je = (0, qt.useCallback)((tt => {
            const et = Math.max(1, tt.endTick - tt.startTick + 1),
              Vt = Ot + 1,
              qt = Vt / et,
              Dt = Math.max(1, Math.ceil(Vt / qt)),
              mt = tt.startTick + Math.floor((Dt - 1) / 2);
            St.current = !0, ct.current = qt, Gt(vD(mt, Ot)), Kt(qt), Ve()
          }), [Ve, Ot, Kt]),
          Ce = (0, qt.useCallback)((tt => {
            Mt(tt), Ve()
          }), [Ve, Mt]),
          ue = (0, qt.useCallback)((tt => {
            bt(tt), Ve()
          }), [Ve, bt]),
          Ke = (0, qt.useCallback)((tt => {
            Jt(tt), Ve()
          }), [Ve, Jt]),
          he = (0, qt.useCallback)((() => {
            Ct(), Ve()
          }), [Ve, Ct]);
        (0, qt.useEffect)((() => {
          const tt = ht.current;
          if (!tt) return () => {};
          const et = et => {
            et.preventDefault();
            const Vt = vD(SD(PD(et.clientX, tt), Tt, gt), Ot),
              qt = et.deltaY < 0 ? "in" : "out",
              Dt = ID(ut, qt);
            Dt !== ut && (Wt.current = !0, Gt(Vt), Kt(Dt))
          };
          return tt.addEventListener("wheel", et, {
            passive: !1
          }), () => {
            tt.removeEventListener("wheel", et)
          }
        }), [Ot, Kt, gt, Tt, ut]);
        const ve = WD(xt, Tt, gt),
          We = ZD(xt, Ot),
          Se = ZD(Tt, Ot),
          ce = Ot > 0 ? ZD(gt, Ot) : 100,
          Re = null !== Ht,
          Ie = null !== (et = null === Ht || void 0 === Ht ? void 0 : Ht.inTick) && void 0 !== et ? et : 0,
          Pe = null !== (Vt = null === Ht || void 0 === Ht ? void 0 : Ht.outTick) && void 0 !== Vt ? Vt : Ot,
          Ze = ZD(Ie, Ot),
          Le = Math.max(ZD(Pe, Ot) - Ze, 0),
          Fe = WD(Math.max(Ie, Tt), Tt, gt),
          ke = WD(Math.min(Pe, gt), Tt, gt),
          Ge = Math.max(ke - Fe, 0),
          ze = Re && Pe >= Tt && Ie <= gt,
          oe = WD(Ie, Tt, gt),
          re = WD(Pe, Tt, gt),
          Ue = Re && Ie >= Tt && Ie <= gt,
          Ae = Re && Pe >= Tt && Pe <= gt,
          ie = ZD(Ie, Ot),
          Ye = ZD(Pe, Ot),
          Be = null !== At && void 0 !== At ? At : Yt ? {
            startTick: Yt.startTick,
            endTick: Yt.endTick
          } : null,
          pe = Be ? WD(Math.max(Be.startTick, Tt), Tt, gt) : 0,
          xe = Be ? WD(Math.min(Be.endTick, gt), Tt, gt) : 0,
          Te = Math.max(xe - pe, 0),
          ge = null !== Be && Be.endTick >= Tt && Be.startTick <= gt,
          se = (0, qt.useMemo)((() => LD(0, Ot, dt)), [Ot, dt]),
          ne = (0, qt.useMemo)((() => LD(Tt, gt, dt)), [Tt, gt, dt]),
          tV = (0, qt.useMemo)((() => De.filter((tt => tt >= Tt && tt <= gt))), [De, gt, Tt]),
          eV = (0, qt.useCallback)(((tt, et, Vt) => {
            const qt = "detail" === et ? WD(tt, Tt, gt) : ZD(tt, Ot),
              Dt = null !== zt && Vt === zt.fromTick,
              dt = null !== rt && rt.BQ === Vt;
            return (0, Xt.jsx)("button", {
              type: "button",
              className: mt()("ReplayTimelineCameraKeyframeMarker", "detail" === et ? "Detail" : "Overview", {
                Dragging: Dt,
                Selected: dt
              }),
              style: {
                left: `${qt}%`
              },
              onPointerDown: He(Vt, et),
              onPointerMove: Xe,
              onPointerUp: Qe,
              onPointerCancel: Qe,
              "aria-label": `Camera keyframe at tick ${Vt}`
            }, `cam-${et}-${Vt}`)
          }), [He, rt, Qe, zt, Ot, Xe, gt, Tt]),
          VV = (0, qt.useCallback)((tt => zt && tt === zt.previewTick ? zt.fromTick : tt), [zt]);
        return Ot <= 0 ? null : (0, Xt.jsxs)("div", {
          className: "ReplayTimeline",
          children: [rt && me && (0, xq.createPortal)((0, Xt.jsx)(nD, {
            keyframe: me,
            anchor: rt,
            hasOutgoingSegment: de,
            onClose: () => {
              Ut(null)
            },
            onApply: wt,
            onDelete: yt,
            onUseCurrentCamera: Nt
          }), document.body), Yt && (0, xq.createPortal)((0, Xt.jsx)(tm, {
            anchor: Yt,
            hasPlaybackMark: Re,
            onClose: Ve,
            onMark: Ce,
            onZoom: Je,
            onCrop: ue,
            onDeleteKeyframes: Ke,
            onClearMark: he
          }), document.body), (0, Xt.jsxs)("div", {
            className: mt()("ReplayTimelineOverviewSection", {
              Hidden: ut <= 1
            }),
            children: [(0, Xt.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, Xt.jsxs)("div", {
              ref: vt,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: ae,
              onPointerMove: Me,
              onPointerUp: be,
              onPointerCancel: be,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": Ot,
              "aria-valuenow": xt,
              tabIndex: 0,
              children: [se.map((tt => {
                const et = ZD(tt, Ot);
                return (0, Xt.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${et}%`
                  }
                }, tt)
              })), Re && (0, Xt.jsxs)(Xt.Fragment, {
                children: [(0, Xt.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${Ze}%`,
                    width: `${Le}%`
                  }
                }), (0, Xt.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${ie}%`
                  },
                  "aria-hidden": !0
                }), (0, Xt.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${Ye}%`
                  },
                  "aria-hidden": !0
                })]
              }), De.map((tt => eV(tt, "overview", VV(tt)))), (0, Xt.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${Se}%`,
                  width: `${Math.max(ce-Se,.5)}%`
                }
              }), (0, Xt.jsx)("button", {
                type: "button",
                className: mt()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== Lt
                }),
                style: {
                  left: `${We}%`
                },
                onPointerDown: we("overview"),
                onPointerMove: ye,
                onPointerUp: Ne,
                onPointerCancel: Ne,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, Xt.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, Xt.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, Xt.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, Xt.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [cD(Tt, dt), " \u2013 ", cD(gt, dt), ut > 1 && (0, Xt.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: RD(ut)
                })]
              })]
            }), (0, Xt.jsxs)("div", {
              ref: ht,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: le,
              onPointerMove: Ee,
              onPointerUp: fe,
              onPointerCancel: fe,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": Tt,
              "aria-valuemax": gt,
              "aria-valuenow": xt,
              tabIndex: 0,
              children: [ne.map((tt => {
                const et = WD(tt, Tt, gt);
                return (0, Xt.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${et}%`
                  }
                }, tt)
              })), ze && (0, Xt.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${Fe}%`,
                  width: `${Ge}%`
                }
              }), Ue && (0, Xt.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${oe}%`
                },
                "aria-label": `Play range start at tick ${Ie}`
              }), Ae && (0, Xt.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${re}%`
                },
                "aria-label": `Play range end at tick ${Pe}`
              }), ge && Be && (0, Xt.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${pe}%`,
                  width: `${Te}%`
                }
              }), tV.map((tt => eV(tt, "detail", VV(tt)))), (0, Xt.jsx)("button", {
                type: "button",
                className: mt()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== Lt
                }),
                style: {
                  left: `${ve}%`
                },
                onPointerDown: we("detail"),
                onPointerMove: ye,
                onPointerUp: Ne,
                onPointerCancel: Ne,
                "aria-label": "Scrub playhead"
              })]
            }), (0, Xt.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, Xt.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      Vm = (0, qt.memo)((function(tt) {
        let {
          enabled: et
        } = tt;
        const Vt = (0, qt.useRef)(!1),
          Ot = (0, qt.useRef)(null),
          [Dt, dt] = (0, qt.useState)(!1),
          jt = (0, qt.useCallback)((tt => {
            et && 0 === tt.button && (Vt.current = !0, dt(!0), Ot.current = {
              x: tt.clientX,
              y: tt.clientY
            }, tt.currentTarget.setPointerCapture(tt.pointerId))
          }), [et]),
          Ht = (0, qt.useCallback)((tt => {
            if (!et || !Vt.current || !Ot.current) return;
            const qt = tt.clientX - Ot.current.x,
              Dt = tt.clientY - Ot.current.y;
            Ot.current = {
              x: tt.clientX,
              y: tt.clientY
            }, Et.gameBridge.send("dragReplayCamera", {
              dx: qt,
              dy: Dt
            })
          }), [et]),
          Qt = (0, qt.useCallback)((tt => {
            Vt.current && (Vt.current = !1, dt(!1), Ot.current = null, tt.currentTarget.releasePointerCapture(tt.pointerId))
          }), []);
        return et ? (0, Xt.jsx)("div", {
          className: mt()("ReplayViewerCameraDragSurface", {
            Dragging: Dt
          }),
          onPointerDown: jt,
          onPointerMove: Ht,
          onPointerUp: Qt,
          onPointerCancel: Qt,
          "aria-hidden": !0
        }) : null
      }));
    var Om = Vt(37238),
      qm = Vt(37243);
    const Dm = (0, qt.memo)((function(tt) {
        var et, Vt, Ot;
        let {
          anchorRect: Dt,
          anchorRef: dt,
          onClose: Ht
        } = tt;
        const Qt = (0, qt.useRef)(null),
          lt = TD(Qt, Dt),
          [Et, ft] = (0, qt.useState)(qm.e),
          wt = (0, qt.useMemo)((() => Object.values(Et).every((tt => tt))), [Et]);
        (0, jt.f)("replayViewer|uiVisibilityChanged", (() => {
          ft((0, qm.e)())
        })), gD(Qt, Ht, dt);
        const yt = (0, qt.useCallback)(((tt, et) => {
            (0, qm.i)(tt, et), ft((0, qm.e)())
          }), []),
          Nt = (0, qt.useCallback)((tt => {
            for (const {
                group: et
              }
              of Om.g)(0, qm.i)(et, tt);
            ft((0, qm.e)())
          }), []),
          Mt = xD(Dt);
        return (0, xq.createPortal)((0, Xt.jsxs)("div", {
          ref: Qt,
          className: mt()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (et = null === lt || void 0 === lt ? void 0 : lt.placeBelow) && void 0 !== et && et,
            Positioned: null !== lt
          }),
          style: {
            left: `${null!==(Vt=null===lt||void 0===lt?void 0:lt.left)&&void 0!==Vt?Vt:Mt.left}px`,
            top: `${null!==(Ot=null===lt||void 0===lt?void 0:lt.top)&&void 0!==Ot?Ot:Mt.top}px`
          },
          onPointerDown: tt => {
            tt.stopPropagation()
          },
          children: [(0, Xt.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, Xt.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, Xt.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, Xt.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, Xt.jsx)("input", {
                type: "checkbox",
                checked: wt,
                onChange: tt => {
                  Nt(tt.target.checked)
                }
              }), (0, Xt.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), Om.g.map((tt => {
              let {
                group: et,
                label: Vt
              } = tt;
              return (0, Xt.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, Xt.jsx)("input", {
                  type: "checkbox",
                  checked: Et[et],
                  onChange: tt => {
                    yt(et, tt.target.checked)
                  }
                }), (0, Xt.jsx)("span", {
                  children: Vt
                })]
              }, et)
            }))]
          })]
        }), document.body)
      })),
      mm = (0, qt.memo)((function(tt) {
        let {
          disabled: et
        } = tt;
        const Vt = (0, qt.useRef)(null),
          [Ot, Dt] = (0, qt.useState)(!1),
          [mt, dt] = (0, qt.useState)(null),
          jt = (0, qt.useCallback)((() => {
            Vt.current && (dt(Vt.current.getBoundingClientRect()), Dt((tt => !tt)))
          }), []),
          Ht = (0, qt.useCallback)((() => {
            Dt(!1)
          }), []);
        return (0, Xt.jsxs)(Xt.Fragment, {
          children: [(0, Xt.jsx)("div", {
            ref: Vt,
            children: (0, Xt.jsx)(AV.f, {
              className: "ReplayViewerActionButton",
              onClick: jt,
              disabled: et,
              children: (0, Xt.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), Ot && mt && (0, Xt.jsx)(Dm, {
            anchorRect: mt,
            anchorRef: Vt,
            onClose: Ht
          })]
        })
      })),
      dm = ["freeCamUp", "freeCamDown"];

    function jm(tt, et) {
      Et.gameBridge.send("holdReplayFreecamVertical", {
        action: tt,
        Pd: et
      })
    }
    const Hm = (0, qt.memo)((function() {
      (0, qt.useEffect)((() => () => {
        ! function() {
          Et.gameBridge.send("moveReplayFreecam", null);
          for (const tt of dm) jm(tt, !1)
        }()
      }), []);
      const tt = (0, qt.useCallback)((tt => {
          Et.gameBridge.send("moveReplayFreecam", tt)
        }), []),
        et = (0, qt.useCallback)((tt => ({
          onTouchStart: et => {
            et.preventDefault(), et.stopPropagation(), jm(tt, !0)
          },
          onTouchEnd: et => {
            et.preventDefault(), et.stopPropagation(), jm(tt, !1)
          },
          onTouchCancel: et => {
            et.preventDefault(), et.stopPropagation(), jm(tt, !1)
          }
        })), []);
      return (0, Xt.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, Xt.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, Xt.jsx)(ce, {
            onMove: tt,
            mode: "pinned"
          })
        }), (0, Xt.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, Xt.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...et("freeCamUp"),
            children: (0, Xt.jsx)(zt.b, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, Xt.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...et("freeCamDown"),
            children: (0, Xt.jsx)(zt.b, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var Xm = Vt(3207);
    const Qm = [],
      lm = "Failed to load recording";

    function Em(tt, et, Vt) {
      var Ot;
      console.error(et), dV.NotificationProvider.showAlertPopup({
        title: tt,
        subtitle: null !== (Ot = (0, bD.j)(et)) && void 0 !== Ot ? Ot : Vt,
        confirmText: "OK"
      })
    }

    function fm(tt) {
      Em(lm, tt, bD.d.cantOpen.text)
    }
    const wm = (0, qt.memo)((function() {
        const tt = (0, Tt.j)(),
          {
            gameState: et
          } = (0, vt.k)(["gameState"]),
          Vt = "inGame" === et;
        return (0, ht.e)("replayViewerRequested", (tt => {
          (0, Tt.f)("toggle" === tt ? !(0, Tt.e)() : "open" === tt)
        })), (0, qt.useEffect)((() => {
          Vt && (0, uD.g)().then((tt => {
            if (null !== tt) return (0, Tt.f)(!0), (0, yD.c)().open(tt.bytes, tt.source)
          })).catch((tt => {
            (0, Tt.f)(!0), fm(tt)
          }))
        }), [Vt]), tt ? (0, Xt.jsx)(ym, {}) : null
      })),
      ym = (0, qt.memo)((function() {
        var tt, et, Vt, Ot, Dt, dt, jt, Ht, Qt, lt, ft, wt;
        const yt = qt.useRef(null),
          [Nt, Mt] = (0, qt.useState)(1),
          [bt, Jt] = (0, qt.useState)(null),
          [Ct, ut] = (0, qt.useState)(!1),
          {
            isTouchScreen: Kt
          } = (0, vt.k)(["isTouchScreen"]),
          St = (0, ht.h)("replay"),
          ct = (0, ht.h)("replayEdits"),
          Rt = null !== St,
          It = null !== (tt = null === St || void 0 === St ? void 0 : St.BQ) && void 0 !== tt ? tt : 0,
          Pt = null !== (et = null === St || void 0 === St ? void 0 : St.totalTicks) && void 0 !== et ? et : 0,
          Zt = Math.max(0, Pt - 1),
          Lt = null !== (Vt = null === St || void 0 === St ? void 0 : St.playing) && void 0 !== Vt && Vt,
          Ft = null !== (Ot = null === St || void 0 === St ? void 0 : St.speed) && void 0 !== Ot ? Ot : 1,
          kt = null !== (Dt = null === St || void 0 === St ? void 0 : St.bI) && void 0 !== Dt ? Dt : 20,
          ot = null !== bt && void 0 !== bt ? bt : It,
          rt = null !== (dt = null === St || void 0 === St ? void 0 : St.freecam) && void 0 !== dt && dt,
          Ut = null !== (jt = null === St || void 0 === St ? void 0 : St.cameraMode) && void 0 !== jt ? jt : "recording",
          At = null !== (Ht = null === ct || void 0 === ct ? void 0 : ct.cameraKeyframes) && void 0 !== Ht ? Ht : Qm,
          it = null !== (Qt = null === ct || void 0 === ct ? void 0 : ct.playbackMark) && void 0 !== Qt ? Qt : null,
          Yt = null !== (lt = null === ct || void 0 === ct ? void 0 : ct.fileName) && void 0 !== lt ? lt : null,
          Bt = null !== (ft = null === ct || void 0 === ct ? void 0 : ct.unsavedChanges) && void 0 !== ft && ft,
          pt = null !== (wt = null === ct || void 0 === ct ? void 0 : ct.suggestSaveAs) && void 0 !== wt && wt,
          xt = (0, ht.h)("replayVideoExporting"),
          gt = !xt && Rt && ("freecam" === Ut || ("recording" === Ut || "keyframe" === Ut) && !Lt),
          st = Kt && Rt && "freecam" === Ut && !xt && !Ct;
        (0, KD.d)(!0, !0, "ReplayViewerOverlay"), (0, qt.useEffect)((() => {
          Et.gameBridge.send("syncReplayCameraMode", null)
        }), [rt]);
        const nt = (0, qt.useCallback)(((tt, et) => {
            Et.gameBridge.send("seekReplay", {
              BQ: tt,
              ignorePlaybackMark: null === et || void 0 === et ? void 0 : et.ignorePlaybackMark
            })
          }), []),
          te = (0, qt.useCallback)((() => {
            Et.gameBridge.send("setReplayPlaying", !1)
          }), []),
          ee = (0, qt.useCallback)(((tt, et) => {
            Et.gameBridge.send("moveReplayCameraKeyframe", {
              from: tt,
              to: et
            })
          }), []),
          Ve = (0, qt.useCallback)((tt => {
            Et.gameBridge.send("setReplayCameraKeyframe", tt)
          }), []),
          Oe = (0, qt.useCallback)((tt => {
            Et.gameBridge.send("deleteReplayCameraKeyframes", {
              start: tt,
              end: tt
            })
          }), []),
          qe = (0, qt.useCallback)((tt => {
            Et.gameBridge.send("deleteReplayCameraKeyframes", {
              start: tt.startTick,
              end: tt.endTick
            })
          }), []),
          De = (0, qt.useCallback)((() => Et.gameBridge.lookup("replayCamera", null)), []),
          me = (0, qt.useCallback)((tt => {
            Jt(tt)
          }), []),
          de = (0, qt.useCallback)((tt => {
            Et.gameBridge.send("setReplayPlaybackMark", {
              inTick: tt.startTick,
              outTick: tt.endTick
            })
          }), []),
          je = (0, qt.useCallback)((() => {
            Et.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          He = (0, qt.useCallback)((tt => {
            const et = Et.gameBridge.latest("replay");
            if (null === et || tt.endTick <= tt.startTick) return;
            const Vt = tt.startTick,
              Ot = tt.endTick;
            dV.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((tt => {
              var qt;
              if (!0 !== tt) return;
              if ((null === (qt = Et.gameBridge.latest("replay")) || void 0 === qt ? void 0 : qt.id) !== et.id) return;
              Et.gameBridge.send("cropReplay", {
                start: Vt,
                end: Ot
              }) && (Jt(null), Mt(1))
            }))
          }), []),
          Xe = (0, qt.useCallback)(((tt, et) => {
            Mt(1), Jt(null), (0, yD.c)().open(tt, et).catch(fm)
          }), []),
          Qe = (0, qt.useCallback)(((tt, et) => {
            null !== Et.gameBridge.latest("connectedGame").websocketUrl ? dV.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((Vt => {
              !0 === Vt && Xe(tt, et)
            })) : Xe(tt, et)
          }), [Xe]),
          le = (0, qt.useCallback)((tt => {
            var et;
            const Vt = null === (et = tt.target.files) || void 0 === et ? void 0 : et[0];
            if (tt.target.value = "", !Vt) return;
            const Ot = new FileReader;
            Ot.onload = () => {
              Qe(new Uint8Array(Ot.result), {
                fileName: Vt.name
              })
            }, Ot.onerror = () => {
              fm(Ot.error)
            }, Ot.readAsArrayBuffer(Vt)
          }), [Qe]),
          Ee = (0, qt.useCallback)((() => {
            const tt = () => {
              null !== yt.current && (0, Xm.f)(yt.current)
            };
            (0, MD.j)() ? (0, MD.e)().then((tt => {
              tt && Qe(tt.bytes, {
                fileHandle: tt.handle
              })
            })).catch((et => {
              console.error(et), dV.NotificationProvider.showPromptPopup({
                title: lm,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((et => {
                !0 === et && tt()
              }))
            })): tt()
          }), [Qe]),
          fe = (0, qt.useCallback)((async function() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let et;
            try {
              et = await CD(tt, {
                files: (0, yD.c)(),
                pickerSupported: MD.j,
                chooseFile: MD.c,
                write: MD.n,
                download: aD.f,
                onFallback: console.error
              })
            } catch (Vt) {
              return void Em("Failed to save recording", Vt)
            }
            "written" !== et && "downloaded" !== et || (() => {
              const tt = dV.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                tt.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          we = (0, qt.useCallback)((tt => {
            Et.gameBridge.send("replayAction", tt)
          }), []),
          ye = (0, qt.useCallback)((tt => {
            Mt((et => ID(et, tt)))
          }), []),
          Ne = (0, qt.useCallback)((tt => {
            if (!Et.gameBridge.latest("replayVideoExporting")) switch (tt) {
              case "replayLoad":
                Ee();
                break;
              case "replaySave":
                fe(!1);
                break;
              case "replaySaveAs":
                fe(!0);
                break;
              case "replayTimelineZoomIn":
                ye("in");
                break;
              case "replayTimelineZoomOut":
                ye("out")
            }
          }), [Ee, fe, ye]);
        (0, ht.e)("replayUiActionRequested", Ne);
        const ae = (0, qt.useCallback)((tt => {
            Et.gameBridge.send("setReplayCameraMode", tt)
          }), []),
          Me = Rt ? AV.f : AV.m,
          be = Bt && !pt ? AV.m : AV.f,
          Je = Bt && pt ? AV.m : AV.f;
        return (0, Xt.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, Xt.jsx)(Vm, {
            enabled: gt
          }), st && (0, Xt.jsx)(Hm, {}), (0, Xt.jsx)("input", {
            ref: yt,
            type: "file",
            accept: aD.c,
            className: "ReplayViewerFileInput",
            onChange: le
          }), (0, Xt.jsxs)("div", {
            className: mt()("ReplayViewerBar", {
              Collapsed: Ct
            }),
            children: [(0, Xt.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                Ct ? ut(!1) : Rt ? ut(!0) : (0, Tt.b)()
              },
              "aria-expanded": !Ct,
              "aria-label": Ct ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, Xt.jsx)(zt.b, {
                name: Ct ? "angle-up" : "angle-down"
              })
            }), !Ct && (0, Xt.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [Rt && Pt > 0 && (0, Xt.jsx)(em, {
                maxTick: Zt,
                displayTick: ot,
                bI: kt,
                cameraKeyframes: At,
                playbackMark: it,
                onSeek: nt,
                onPause: te,
                onScrubTickChange: me,
                onMoveCameraKeyframe: ee,
                onUpdateCameraKeyframe: Ve,
                onDeleteCameraKeyframe: Oe,
                onUseCurrentCamera: De,
                onMarkRange: de,
                onCropRange: He,
                onDeleteKeyframesInRange: qe,
                onClearMark: je,
                zoomLevel: Nt,
                onZoomLevelChange: Mt
              }, Zt), (0, Xt.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, Xt.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, Xt.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [Rt && (0, Xt.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== Yt && void 0 !== Yt ? Yt : "Unsaved recording", Bt ? " *" : ""]
                    }), (0, Xt.jsxs)(Me, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Ne("replayLoad")
                      },
                      children: [(0, Xt.jsx)(Wt.d, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, Xt.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, Xt.jsxs)(AV.f, {
                      className: "ReplayViewerActionButton",
                      onClick: Tt.b,
                      children: [(0, Xt.jsx)(Wt.d, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, Xt.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, Xt.jsxs)(be, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Ne("replaySave")
                      },
                      disabled: !Rt,
                      children: [(0, Xt.jsx)(Wt.d, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, Xt.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, Xt.jsxs)(AV.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Et.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !Rt,
                      children: [(0, Xt.jsx)(Wt.d, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, Xt.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, Xt.jsxs)(Je, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Ne("replaySaveAs")
                      },
                      disabled: !Rt,
                      children: [(0, Xt.jsx)(Wt.d, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, Xt.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, Xt.jsxs)(AV.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Et.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !Rt || 0 === Pt || xt,
                      children: [(0, Xt.jsx)(Wt.d, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, Xt.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, Xt.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Xt.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, Xt.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, Xt.jsx)(Wt.d, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, Xt.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, Xt.jsx)(Gt.g, {
                        tooltipInner: (0, Xt.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, Xt.jsxs)(AV.Q, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === Ut,
                          onClick: () => {
                            ae("recording")
                          },
                          disabled: !Rt,
                          children: ["Recorded ", (0, Xt.jsx)(zt.b, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Xt.jsx)(Gt.g, {
                        tooltipInner: (0, Xt.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, Xt.jsxs)(AV.Q, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === Ut,
                          onClick: () => {
                            ae("freecam")
                          },
                          disabled: !Rt,
                          children: ["Free ", (0, Xt.jsx)(zt.b, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Xt.jsx)(Gt.g, {
                        tooltipInner: (0, Xt.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, Xt.jsxs)(AV.Q, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === Ut,
                          onClick: () => {
                            ae("keyframe")
                          },
                          disabled: !Rt,
                          children: ["Preview ", (0, Xt.jsx)(zt.b, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, Xt.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, Xt.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, Xt.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, Xt.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: cD(ot, kt)
                      }), (0, Xt.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, Xt.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: cD(Zt, kt)
                      })]
                    }), (0, Xt.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", ot, " / ", Zt]
                    })]
                  }), (0, Xt.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, Xt.jsxs)(AV.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        we("replaySkipBack")
                      },
                      disabled: !Rt,
                      children: [(0, Xt.jsxs)("span", {
                        children: [" ", (0, Xt.jsx)(zt.b, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, Xt.jsx)(Wt.d, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, Xt.jsxs)(AV.m, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        Et.gameBridge.send("setReplayPlaying", !Lt)
                      },
                      disabled: !Rt,
                      children: [(0, Xt.jsxs)("span", {
                        children: [" ", Lt ? (0, Xt.jsx)(zt.b, {
                          name: "pause"
                        }) : (0, Xt.jsx)(zt.b, {
                          name: "play"
                        }), " "]
                      }), (0, Xt.jsx)(Wt.d, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, Xt.jsxs)(AV.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        we("replaySkipForward")
                      },
                      disabled: !Rt,
                      children: [(0, Xt.jsxs)("span", {
                        children: [" ", (0, Xt.jsx)(zt.b, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, Xt.jsx)(Wt.d, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, Xt.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, Xt.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, Xt.jsxs)(AV.m, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        we("replayRecordKeyframe")
                      },
                      disabled: !Rt,
                      children: [(0, Xt.jsx)(Wt.d, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, Xt.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, Xt.jsx)(mm, {
                      disabled: !Rt
                    }), it && (0, Xt.jsx)(AV.Q, {
                      className: "ReplayViewerActionButton",
                      onClick: je,
                      disabled: !Rt,
                      children: (0, Xt.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, Xt.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Xt.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, Xt.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Xt.jsx)(AV.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          we("replaySpeedDown")
                        },
                        disabled: !Rt || (0, ND.f)(Ft),
                        children: (0, Xt.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, Xt.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [Ft, "\xd7"]
                      }), (0, Xt.jsx)(AV.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          we("replaySpeedUp")
                        },
                        disabled: !Rt || (0, ND.e)(Ft),
                        children: (0, Xt.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, Xt.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Xt.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, Xt.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Xt.jsxs)(AV.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Ne("replayTimelineZoomOut")
                        },
                        disabled: !Rt || Nt <= hD[0],
                        children: [(0, Xt.jsx)("span", {
                          children: " \u2212 "
                        }), (0, Xt.jsx)(Wt.d, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, Xt.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: RD(Nt)
                      }), (0, Xt.jsxs)(AV.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Ne("replayTimelineZoomIn")
                        },
                        disabled: !Rt || Nt >= hD[hD.length - 1],
                        children: [(0, Xt.jsx)("span", {
                          children: " + "
                        }), (0, Xt.jsx)(Wt.d, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, Xt.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !Rt && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var Nm = Vt(1423);

    function am() {
      const [, tt] = (0, qt.useState)(0);
      return (0, jt.f)("replayViewer|uiVisibilityChanged", (() => {
          tt((tt => tt + 1))
        })), (0, jt.f)("replayViewer|replayLoaded", (() => {
          tt((tt => tt + 1))
        })),
        function() {
          if (!(0, Nm.d)()) return {};
          const tt = {
              [Om.c]: "true"
            },
            et = (0, qm.e)();
          for (const {
              group: Vt,
              dataAttr: Ot
            }
            of Om.g) Ot && !et[Vt] && (tt[Ot] = "true");
          return tt
        }()
    }
    var Mm = Vt(34367),
      bm = Vt(2141),
      Jm = Vt(8972),
      Cm = Vt(8959),
      um = Vt(2149);
    const Km = (0, qt.memo)((function() {
      var tt, et, Vt;
      const Ot = (0, Jt.i)("customButtons");
      (0, qt.useEffect)((() => Ot ? (Et.gameBridge.send("bindCustomButtonKeys", Ot.filter(Jm.h).map((tt => {
        let {
          id: et,
          keycode: Vt
        } = tt;
        return {
          id: et,
          keycode: Vt
        }
      }))), () => {
        Et.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [Ot]);
      const Dt = null !== (tt = null === Ot || void 0 === Ot ? void 0 : Ot.filter(Jm.h)) && void 0 !== tt ? tt : [],
        mt = (0, Cm.l)(),
        dt = null !== (et = null === (Vt = (0, um.b)()) || void 0 === Vt ? void 0 : Vt.hideButtonHints) && void 0 !== et && et,
        jt = "customButton" !== (null === mt || void 0 === mt ? void 0 : mt.kind) || dt ? null : mt.id,
        Ht = Dt.length > 0,
        Qt = (0, qt.useRef)(null);
      return (0, qt.useLayoutEffect)((() => {
        if (!Ht) return () => {};
        const tt = Qt.current,
          et = tt.closest(".InGameUi"),
          Vt = () => {
            et.style.setProperty("--custom-buttons-top", `${tt.offsetTop}px`)
          };
        Vt();
        const Ot = new ResizeObserver(Vt);
        return Ot.observe(tt), Ot.observe(tt.parentElement), () => {
          Ot.disconnect(), et.style.removeProperty("--custom-buttons-top")
        }
      }), [Ht]), (0, Xt.jsx)("div", {
        ref: Qt,
        className: "" + ((0, mV.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: Dt.map((tt => {
          var et, Vt;
          return (0, Xt.jsx)(hm, {
            button: tt,
            padGlyph: tt.id === jt && null !== (et = null === (Vt = (0, At.g)()) || void 0 === Vt ? void 0 : Vt.getBoundButton("actionButton")) && void 0 !== et ? et : null
          }, tt.id)
        }))
      })
    }));

    function hm(tt) {
      let {
        button: et,
        padGlyph: Vt
      } = tt;
      const Ot = (0, qt.useRef)(null),
        Dt = () => {
          null !== Ot.current && (Ot.current = null, Et.gameBridge.send("pressCustomButton", {
            id: et.id,
            down: !1
          }))
        };
      (0, qt.useEffect)((() => Dt), []);
      const mt = ge(Dt, {
          pressesOnPointerDown: !0
        }),
        dt = tt => {
          Ot.current === tt.pointerId && Dt()
        };
      return (0, Xt.jsxs)("div", {
        className: "CustomIcon",
        ...mt,
        onLostPointerCapture: dt,
        children: [(0, Xt.jsx)(bm.b, {
          icon: et.icon,
          keyboardHint: (0, Jm.e)(et.keycode),
          padGlyph: Vt,
          onPointerDown: tt => {
            try {
              tt.currentTarget.setPointerCapture(tt.pointerId)
            } catch {
              return
            }
            null === Ot.current && Et.gameBridge.send("pressCustomButton", {
              id: et.id,
              down: !0
            }), Ot.current = tt.pointerId
          },
          onPointerUp: dt,
          onPointerCancel: dt,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), et.description && (0, Xt.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: et.description
        })]
      })
    }
    var Wm = Vt(2478),
      Sm = Vt(287);
    const cm = {
      frame: tt => {
        const et = requestAnimationFrame((() => {
          tt()
        }));
        return () => {
          cancelAnimationFrame(et)
        }
      },
      afterFrame: tt => {
        const et = setTimeout(tt, 0);
        return () => {
          clearTimeout(et)
        }
      }
    };
    class Rm {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sm.c,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cm,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = tt, this.frames = et, this.onHiddenMount = Vt, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (tt(), () => {}) : (et ? this.waiting.unshift(tt) : this.waiting.push(tt), this.schedule(), () => {
          const et = this.waiting.indexOf(tt);
          et >= 0 && (this.waiting.splice(et, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((tt => {
          for (this.cancelIdle = null; this.waiting.length > 0 && tt.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const tt = this.waiting.shift(),
          et = !this.shown,
          Vt = performance.now();
        try {
          tt()
        } finally {
          et && this.onHiddenMount(performance.now() - Vt), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var tt, et, Vt;
        null === (tt = this.cancelIdle) || void 0 === tt || tt.call(this), this.cancelIdle = null, null === (et = this.cancelFrame) || void 0 === et || et.call(this), this.cancelFrame = null, null === (Vt = this.cancelAfterFrame) || void 0 === Vt || Vt.call(this), this.cancelAfterFrame = null
      }
    }
    const Im = (0, qt.createContext)(null);

    function Pm(tt) {
      let {
        children: et,
        first: Vt = !1
      } = tt;
      const Ot = (0, qt.useContext)(Im),
        [Dt, mt] = (0, qt.useState)(null === Ot);
      return (0, qt.useEffect)((() => {
        if (!Dt && null !== Ot) return Ot.request((() => {
          mt(!0)
        }), Vt)
      }), [Vt, Dt, Ot]), Dt ? (0, qt.createElement)(qt.Fragment, null, et) : null
    }
    const Zm = (0, qt.memo)((function(tt) {
        let {
          shown: et
        } = tt;
        const [Vt] = (0, qt.useState)((() => new wt.c(et))), [Dt] = (0, qt.useState)((() => et ? null : new Rm(void 0, void 0, (tt => {
          Ot.c.noteWorkDuringAdmissionWait(tt)
        }))));
        return (0, qt.useLayoutEffect)((() => {
          et && (null === Dt || void 0 === Dt || Dt.show(), Vt.show())
        }), [et, Vt, Dt]), (0, Xt.jsx)(wt.b.Provider, {
          value: Vt,
          children: (0, Xt.jsx)(Im.Provider, {
            value: Dt,
            children: (0, Xt.jsx)(Lm, {})
          })
        })
      })),
      Lm = (0, qt.memo)((function() {
        const {
          isUiHidden: tt,
          isUiHiddenByCamera: et,
          worldPanelHud: Vt,
          isTouchScreen: Ot
        } = (0, vt.k)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), Dt = (0, Qq.d)(), dt = am(), jt = (0, wt.g)(), Ht = (0, qt.useRef)(null), Qt = (0, Jt.i)("showKillfeed");
        return function() {
            const tt = (0, wt.g)();
            (0, qt.useEffect)((() => tt.whenShown(yt)), [tt])
          }(),
          function() {
            const tt = (0, Jt.i)("inventoryColourOverride");
            (0, qt.useEffect)((() => {
              if (!tt) return;
              const {
                panel: et,
                slot: Vt,
                slotSelected: Ot,
                slotUnavailable: qt
              } = Yt(tt), Dt = document.documentElement.style;
              return Dt.setProperty("--InventoryPanelColour", et), Dt.setProperty("--InventorySlotColour", Vt), Dt.setProperty("--InventorySlotSelectedColour", Ot), Dt.setProperty("--InventorySlotUnavailableColour", qt), () => {
                Dt.removeProperty("--InventoryPanelColour"), Dt.removeProperty("--InventorySlotColour"), Dt.removeProperty("--InventorySlotSelectedColour"), Dt.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [tt])
          }(), (0, qt.useLayoutEffect)((() => jt.whenShown((() => {
            var tt;
            null === (tt = Ht.current) || void 0 === tt || tt.classList.remove("PreMounted")
          }))), [jt]), (0, Xt.jsxs)(Xt.Fragment, {
            children: [(0, Xt.jsxs)("div", {
              ref: Ht,
              className: mt()("InGameUi", {
                PreMounted: !jt.shown,
                Hidden: tt,
                HiddenByCamera: et,
                HiddenByWorldPanel: null !== Vt,
                WorldPanelTouchControl: "touchControls" === Vt
              }),
              ...dt,
              children: [(0, Xt.jsxs)(Pm, {
                children: [(0, Xt.jsx)(dO.c, {}), (0, Xt.jsx)(lO, {})]
              }), (0, Xt.jsx)(wt.d, {
                children: (0, Xt.jsx)(EO, {})
              }), (0, Xt.jsxs)(Pm, {
                children: [(0, Xt.jsx)(kq, {}), (0, Xt.jsx)(iq, {}), Ot && (0, Xt.jsx)(Bq, {})]
              }), (0, Xt.jsxs)(Pm, {
                children: [(0, Xt.jsx)(ZV, {}), (0, Xt.jsx)(vO.e, {}), (0, Xt.jsx)(ZO, {})]
              }), (0, Xt.jsx)(wt.d, {
                children: (0, Xt.jsx)(mO, {})
              }), (0, Xt.jsxs)(Pm, {
                children: [(0, Xt.jsx)(rq.b, {}), (0, Xt.jsx)(wm, {})]
              }), (0, Xt.jsxs)(Pm, {
                children: [(0, Xt.jsx)(DD.e, {}), (0, Xt.jsx)(mD.f, {})]
              }), (0, Xt.jsx)(Pm, {
                children: (0, Xt.jsx)(FV.m, {})
              }), (0, Xt.jsx)(Pm, {
                children: (0, Xt.jsx)(Um, {
                  showChat: Dt
                })
              }), (0, Xt.jsxs)(Pm, {
                children: [(0, Xt.jsx)(jD, {}), (0, Xt.jsx)(oq, {})]
              }), (0, Xt.jsxs)("div", {
                className: mt()("RightElements", {
                  RightElementsTouchscreen: Ot
                }),
                "data-camera-keeper-host": "",
                children: [(0, Xt.jsxs)("div", {
                  className: rO.h,
                  "data-holds-camera-keeper": "",
                  children: [(0, Xt.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, Xt.jsx)(Pm, {
                      children: (0, Xt.jsx)(hq.e, {})
                    }), (0, Xt.jsxs)(Pm, {
                      children: [(0, Xt.jsx)(ot, {}), (0, Xt.jsx)(BO.e, {})]
                    }), mV.featureFlags.useSocialFeatures && (0, Xt.jsx)(wt.d, {
                      children: (0, Xt.jsx)(pO.c, {
                        placement: "inGame"
                      })
                    }), mV.featureFlags.useSocialFeatures && (0, Xt.jsx)(wt.d, {
                      children: (0, Xt.jsx)(mq, {})
                    }), Qt && (0, Xt.jsx)(wt.d, {
                      children: (0, Xt.jsx)(hO, {})
                    }), (0, Xt.jsx)(Pm, {
                      children: (0, Xt.jsx)(Mm.d, {})
                    })]
                  }), mV.featureFlags.useSocialFeatures && (0, Xt.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, Xt.jsx)(Pm, {
                      children: (0, Xt.jsx)(Lq.b, {})
                    })
                  })]
                }), (0, Xt.jsxs)(Pm, {
                  children: [(0, Xt.jsx)(FV.e, {
                    placement: "topRight"
                  }), (0, Xt.jsx)(Am, {})]
                })]
              }), (0, Xt.jsx)("div", {
                className: "LeftCentre",
                children: (0, Xt.jsx)(Pm, {
                  children: (0, Xt.jsx)(Km, {})
                })
              }), (0, Xt.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": Ot ? "" : void 0,
                children: [(0, Xt.jsx)(wt.d, {
                  children: (0, Xt.jsx)(Pt, {})
                }), (0, Xt.jsx)(Pm, {
                  children: (0, Xt.jsx)(km, {})
                }), (0, Xt.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": Ot ? "" : void 0,
                  children: [(0, Xt.jsx)("div", {
                    className: mt()("BottomLeftElements", {
                      Touch: Ot
                    }),
                    children: (0, Xt.jsxs)(Pm, {
                      children: [(0, Xt.jsx)(Hq, {}), !Ot && (0, Xt.jsx)(Wm.d, {})]
                    })
                  }), (0, Xt.jsx)(Pm, {
                    children: (0, Xt.jsx)(rm, {})
                  }), (0, Xt.jsx)(Pm, {
                    children: (0, Xt.jsx)(FO, {
                      isTouchScreen: Ot
                    })
                  })]
                })]
              }), (0, Xt.jsx)("div", {
                className: "MiddleLeft"
              }), Ot && (0, Xt.jsx)(Pm, {
                children: (0, Xt.jsx)(wV, {})
              }), (0, Xt.jsx)("div", {
                className: "CameraFadeHost",
                ref: Ke.m
              })]
            }), (0, Xt.jsx)(wt.d, {
              children: (0, Xt.jsx)(wD.b, {})
            }), (0, Xt.jsx)(wt.d, {
              children: (0, Xt.jsx)(OD, {})
            }), (0, Xt.jsx)(Pm, {
              first: !0,
              children: (0, Xt.jsx)(Xq.b, {})
            }), (0, Xt.jsx)(wt.d, {
              children: (0, Xt.jsx)(Fm, {})
            })]
          })
      }));

    function Fm() {
      return (0, qt.useEffect)((() => {
        const tt = setTimeout((() => {
          (0, Ct.f)()
        }), 0);
        return () => {
          clearTimeout(tt), Ct.j.aN(!1)
        }
      }), []), null
    }
    const km = (0, qt.memo)((function() {
        const tt = (0, jt.h)("aimingOverlay", "none");
        (0, Mt.c)();
        const et = (0, Jt.j)("middleTextUpper"),
          Vt = (0, Jt.j)("middleTextLower");
        return (0, Xt.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === tt ? {
            visibility: "hidden"
          } : {},
          children: [(0, Xt.jsx)(om, {
            text: et,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: Gm
          }), (0, Xt.jsx)(om, {
            text: Vt,
            className: "MiddleText",
            maxHeightFraction: zm
          })]
        })
      })),
      Gm = .3,
      zm = .2;

    function om(tt) {
      let {
        text: et,
        className: Vt,
        maxHeightFraction: Ot
      } = tt;
      const Dt = (0, qt.useRef)(null),
        mt = (0, qt.useRef)(null);
      return function(tt, et, Vt, Ot) {
        (0, qt.useLayoutEffect)((() => {
          const Ot = tt.current,
            qt = et.current;
          if (!Ot || !qt) return;
          let Dt = -1,
            mt = -1;
          const dt = tt => (qt.style.setProperty("zoom", String(tt)), Ot.getBoundingClientRect().height),
            jt = () => {
              const tt = document.documentElement.clientHeight * Vt;
              let et = 1;
              if (dt(1) > tt) {
                let Vt = .5,
                  Ot = 1;
                for (let et = 0; et < 6; et++) {
                  const et = (Vt + Ot) / 2;
                  dt(et) <= tt ? Vt = et : Ot = et
                }
                et = Vt
              }
              mt = dt(et), Dt = Ot.getBoundingClientRect().width
            };
          jt();
          let Ht = 0;
          const Xt = () => {
              cancelAnimationFrame(Ht), Ht = requestAnimationFrame(jt)
            },
            Qt = new ResizeObserver((() => {
              const {
                width: tt,
                height: et
              } = Ot.getBoundingClientRect();
              tt === Dt && et === mt || Xt()
            }));
          return Qt.observe(Ot), window.addEventListener("resize", Xt), () => {
            Qt.disconnect(), window.removeEventListener("resize", Xt), cancelAnimationFrame(Ht), qt.style.removeProperty("zoom")
          }
        }), [tt, et, Vt, Ot])
      }(Dt, mt, Ot, et.content), (0, Xt.jsx)("div", {
        ref: Dt,
        className: "MiddleTextFit",
        children: (0, Xt.jsx)(dD, {
          ref: mt,
          text: et,
          className: Vt
        })
      })
    }
    const rm = (0, qt.memo)((function() {
        const tt = (0, jt.h)("aimingOverlay", "none");
        (0, Mt.c)();
        const et = (0, Jt.i)("useInventory");
        return (0, Xt.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === tt ? {
            visibility: "hidden"
          } : {},
          children: [(0, Xt.jsx)(Qt, {}), (0, Xt.jsx)(FV.e, {}), (0, Xt.jsx)(kV, {}), (0, Xt.jsx)(wt.d, {
            children: (0, Xt.jsx)(Pq, {})
          }), (0, Xt.jsxs)("div", {
            className: "HotBarRow",
            children: [et ? (0, Xt.jsx)(Ut.c, {}) : (0, Xt.jsx)(Ut.g, {}), (0, Xt.jsx)(it, {})]
          })]
        })
      })),
      Um = (0, qt.memo)((function(tt) {
        let {
          showChat: et
        } = tt;
        const {
          t: Vt
        } = (0, It.H)(), {
          clientEscMenuOptions: Ot,
          isTouchScreen: Dt
        } = (0, vt.k)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, Mt.c)();
        const {
          userContext: dt,
          isUserContextUpdating: jt
        } = (0, Nt.d)(), Ht = (0, Jt.i)("hideCoordinates"), Qt = (0, Jt.i)("customVariationTitle"), {
          requestedGameNameWithVariation: Et,
          gameNameWithVariation: ft,
          lobbyName: wt,
          shownLobbyName: yt
        } = (0, ht.h)("connectedGame"), Ct = (0, lt.e)(Et, wt, !1), [ut, Kt] = (0, qt.useState)(null), Wt = (0, Wq.o)(ft || Et || ""), St = Qt || Wt || "";
        (0, qt.useEffect)((() => {
          jt || TO.e.getFavouriteLobbies(dt).then((tt => {
            console.log("Got favourite lobbies", tt), Kt(tt)
          }))
        }), [jt, dt]);
        const ct = (0, qt.useRef)(null);
        return (0, qt.useLayoutEffect)((() => {
          const tt = ct.current,
            et = document.documentElement,
            Vt = new ResizeObserver((() => {
              et.style.setProperty("--InGameHeaderRowsHeight", `${tt.offsetHeight}px`)
            }));
          return Vt.observe(tt), () => {
            Vt.disconnect(), et.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), YO(ct), (0, Xt.jsxs)(Xt.Fragment, {
          children: [(0, Xt.jsxs)("div", {
            className: mt()(rO.d, {
              Touchscreen: Dt
            }),
            ref: ct,
            children: [(0, Xt.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, Xt.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: tt => {
                  tt.stopPropagation(), tt.preventDefault()
                },
                onClick: () => {
                  vt.b.set({
                    openEverythingMenuName: bt.o.SETTINGS
                  })
                },
                children: [(0, Xt.jsx)(vq.b, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, Xt.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Xt.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === Ct && (0, Xt.jsx)(vq.b, {}), null !== Ct && (0, Xt.jsxs)(Xt.Fragment, {
                  children: [Ct, St && ` ${St}`]
                })]
              }), (0, Xt.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Xt.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: yt
              }), (0, Sq.K)(wt) && (0, Xt.jsx)(Gt.g, {
                tooltipInner: (0, Xt.jsx)("div", {
                  children: Vt(null !== ut && ut.includes(wt) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, Xt.jsx)("div", {
                  children: (0, Xt.jsx)(AV.t, {
                    isLiked: null !== ut && ut.includes(wt),
                    onClick: () => {
                      try {
                        if (!ut) return;
                        ut.includes(wt) ? (TO.e.unfavouriteLobby(dt, wt).catch((tt => {
                          console.error("Failed to favourite lobby", tt)
                        })), Kt(ut.filter((tt => tt !== wt)))) : (TO.e.favouriteLobby(dt, wt).catch((tt => {
                          console.error("Failed to favourite lobby", tt)
                        })), Kt([...ut, wt]))
                      } catch (tt) {
                        console.error("Failed to like lobby", tt)
                      }
                    },
                    isLoading: null === ut
                  })
                })
              }), (0, Xt.jsx)(lD, {})]
            }), (0, Xt.jsx)(bq, {
              show: Ot.showFPS
            }), !Ht && Ot.showCoordinates && (0, Xt.jsx)(uq, {}), !Ht && Ot.showChunkCoordinates && (0, Xt.jsx)(Kq, {}), (0, Xt.jsx)(HD, {})]
          }), (0, Xt.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, Xt.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: et && (0, Xt.jsx)(xt.e, {})
            })
          })]
        })
      })),
      Am = (0, qt.memo)((function() {
        (0, Mt.c)();
        const tt = (0, Jt.j)("RightInfoText"),
          [et, Vt] = (0, qt.useState)(null);
        return (0, Me.j)(et, ".RightElements"), tt.hasText ? (0, Xt.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, Xt.jsx)(dD, {
            ref: Vt,
            text: tt,
            className: "RightInfoDiv",
            children: (0, Xt.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, Xt.jsx)(Ht.e, {
                text: tt.content
              })
            })
          })
        }) : null
      }))
  },
  5003: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt
    });
    var Ot = Vt(63),
      qt = Vt(377),
      Dt = Vt(2018),
      mt = Vt(1188);

    function dt(tt) {
      let {
        text: et
      } = tt;
      const Vt = [];
      let dt = "";
      return (0, qt.Ob)(et).forEach(((tt, et) => {
        if ("string" === typeof tt || !(0, Dt.g)(tt.icon)) return void(dt += "string" === typeof tt ? tt : tt.icon);
        const qt = Math.max(0, dt.trimEnd().search(/\S{1,12}$/));
        Vt.push((0, mt.jsxs)(Ot.Fragment, {
          children: [dt.slice(0, qt), (0, mt.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [dt.slice(qt), (0, mt.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": tt.icon,
              children: (0, mt.jsx)(Dt.e, {
                itemName: tt.icon,
                amount: 0
              })
            })]
          })]
        }, et)), dt = ""
      })), Vt.push(dt), (0, mt.jsx)(mt.Fragment, {
        children: Vt
      })
    }
  },
  36771: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => lt,
      e: () => Xt,
      g: () => Qt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(2018),
      dt = Vt(1188);
    const jt = 350;
    let Ht = 0;

    function Xt() {
      return Ht += 1, Ht
    }

    function Qt(tt, et) {
      let Vt = 0;
      for (const Ot of tt) "ingredient" !== Ot.kind && Ot.jj === et && (Vt += Ot.amount);
      return Vt > 0 ? {
        idx: et,
        amount: Vt
      } : null
    }

    function lt(tt) {
      var et, Vt;
      let {
        anim: qt,
        onComplete: Ht
      } = tt;
      const Xt = null !== (et = qt.delayMs) && void 0 !== et ? et : 0,
        Qt = null !== (Vt = qt.durationMs) && void 0 !== Vt ? Vt : jt,
        [lt, Et] = (0, Ot.useState)(qt.from),
        [ft, wt] = (0, Ot.useState)(0 === Xt),
        [yt, Nt] = (0, Ot.useState)(!1),
        Mt = (0, Ot.useRef)(!1);
      return (0, Ot.useEffect)((() => {
        let tt, et;
        const Vt = () => {
            Mt.current = !0, wt(!0), tt = requestAnimationFrame((() => {
              et = requestAnimationFrame((() => {
                Et({
                  x: qt.to.x,
                  y: qt.to.y
                }), Nt(!0)
              }))
            }))
          },
          Ot = Mt.current ? 0 : Xt;
        let Dt;
        Ot > 0 ? Dt = setTimeout(Vt, Ot) : Vt();
        const mt = setTimeout((() => {
          Ht(qt.id)
        }), Ot + Qt + 50);
        return () => {
          clearTimeout(Dt), cancelAnimationFrame(tt), cancelAnimationFrame(et), clearTimeout(mt)
        }
      }), [qt.id, qt.to.x, qt.to.y, Ht, Xt, Qt]), (0, dt.jsx)("div", {
        className: Dt()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === qt.kind,
          Waiting: !ft,
          Arrived: yt
        }),
        style: {
          left: lt.x,
          top: lt.y,
          "--fly-duration": `${Qt}ms`
        },
        children: (0, dt.jsx)(mt.e, {
          itemName: qt.itemName,
          amount: qt.amount
        })
      })
    }
  },
  36765: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => kt,
      g: () => ot
    });
    var Ot = Vt(63),
      qt = Vt(3081),
      Dt = Vt(6776),
      mt = Vt(2141),
      dt = Vt(2498),
      jt = Vt(9056),
      Ht = Vt(391),
      Xt = Vt(31),
      Qt = Vt(1554),
      lt = Vt(39),
      Et = Vt(1140),
      ft = Vt.n(Et),
      wt = Vt(377),
      yt = Vt(36767),
      Nt = Vt(2001),
      Mt = Vt(2063),
      bt = Vt(8908),
      Jt = Vt(1188);

    function Ct(tt) {
      var et, Vt;
      let {
        slotIdx: Dt
      } = tt;
      const mt = (0, Mt.g)("hotbar", (tt => {
          var et;
          return null !== (et = tt.items[Dt]) && void 0 !== et ? et : null
        })),
        jt = (0, Mt.g)("hotbar", (tt => tt.ammo)),
        [Xt, Qt] = (0, Ot.useState)(!1),
        lt = (0, Ot.useRef)(null),
        [Et, wt] = (0, Ot.useState)(null),
        [yt, Ct] = (0, Ot.useState)(null),
        ut = (0, dt.i)("maxAuraLevel"),
        Kt = (0, qt.c)(),
        ht = (0, Ot.useCallback)((() => {
          if (clearTimeout(lt.current), mt) {
            var tt, et, Vt, Ot;
            const jt = mt.displayName,
              Xt = [],
              Qt = Array.isArray(jt) ? jt : [jt],
              lt = {
                fontStyle: null !== (tt = mt.attributes.customAttributes) && void 0 !== tt && tt.author ? "italic" : "normal"
              };
            for (const tt of Qt) tt.str ? Xt.push(tt) : Xt.push({
              str: tt,
              style: lt
            });
            if (null !== (et = mt.attributes.customAttributes) && void 0 !== et && et.enchantments) {
              Xt.push(" ");
              const tt = Object.entries(mt.attributes.customAttributes.enchantments).sort(((tt, et) => et[1] - tt[1])),
                et = mt.attributes.customAttributes.enchantmentData;
              for (const [Vt, Ot] of tt) {
                var qt, Dt;
                const tt = null !== (qt = null === et || void 0 === et || null === (Dt = et[Vt]) || void 0 === Dt ? void 0 : Dt.icon) && void 0 !== qt ? qt : `${Vt} Enchantment`;
                var dt;
                if (Ot < 4)
                  for (let et = 0; et < Ot; et++) Xt.push({
                    icon: tt,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else Xt.push({
                  icon: tt,
                  style: {
                    fontSize: "1.5em"
                  }
                }), Xt.push(null !== (dt = (0, Ht.Y)(Ot)) && void 0 !== dt ? dt : Ot.toString())
              }
            }
            wt(Xt), Ct(null !== (Vt = null === (Ot = mt.attributes.customAttributes) || void 0 === Ot ? void 0 : Ot.enchantmentTier) && void 0 !== Vt ? Vt : null)
          } else wt(null), Ct(null);
          Qt(!0), Kt();
          const jt = null === mt || void 0 === mt ? void 0 : mt.attributes.customAttributes;
          void 0 === (null === jt || void 0 === jt ? void 0 : jt.shotsLeft) && (lt.current = setTimeout((() => {
            Qt(!1)
          }), 2e3))
        }), [null === mt || void 0 === mt ? void 0 : mt.name, Dt, null === mt || void 0 === mt ? void 0 : mt.instance, null === mt || void 0 === mt ? void 0 : mt.displayName]);
      (0, Ot.useEffect)((() => (ht(), () => {
        clearTimeout(lt.current), Qt(!1)
      })), [null === mt || void 0 === mt ? void 0 : mt.name, Dt, null === mt || void 0 === mt ? void 0 : mt.instance, ht]);
      const vt = null === mt || void 0 === mt || null === (et = mt.attributes.customAttributes) || void 0 === et ? void 0 : et.shotsLeft,
        Wt = void 0 === vt ? null : (0, Jt.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${vt}|${mt.requiresAmmo?`${jt}x${mt.clipSize}`:mt.clipSize}`
        }),
        St = (0, bt.l)();
      return (0, Jt.jsx)(Jt.Fragment, {
        children: Xt && mt && !St.showing ? (0, Jt.jsxs)("div", {
          className: ft()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === ut,
            Enchanted: null !== yt
          }),
          style: {
            "--enchantmentColour": null !== (Vt = Ht.xb[yt]) && void 0 !== Vt ? Vt : Ht.xb.None,
            "--duration": yt ? (0, Ht.tb)(yt) + "s" : void 0
          },
          children: [yt && (0, Jt.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, Jt.jsx)(Nt.e, {
              text: Et
            }), Wt]
          }), (0, Jt.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, Jt.jsx)(Nt.e, {
              text: Et
            }), Wt]
          })]
        }) : null
      })
    }
    var ut = Vt(36771),
      Kt = Vt(26),
      ht = Vt(2024),
      vt = Vt(710),
      Wt = Vt(2504),
      St = Vt(3470),
      ct = Vt(3478);
    var Rt = Vt(1213),
      It = Vt(1204),
      Pt = Vt(2569);

    function Zt() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var Lt = Vt(9126),
      Ft = Vt(1571);
    const kt = (0, Ot.memo)((function() {
      const [tt, et] = (0, Ot.useState)(0), Vt = (0, dt.i)("useFullInventory"), mt = (0, dt.i)("highlightedHotbarSlots"), {
        isTouchScreen: jt,
        openInGameMenuName: Ht
      } = (0, Kt.k)(["isTouchScreen", "openInGameMenuName"]), lt = null !== Ht && "inventory" !== Ht, Et = (0, Mt.h)("fullInventory") && "inventory" === Ht, wt = function() {
        const tt = (0, Rt.o)(((tt, et) => `${tt}:${(0,It.d)(tt,et)?"portrait":"landscape"}`)),
          [et, Vt] = (0, Ot.useState)(Zt);
        return (0, Ot.useLayoutEffect)((() => {
          Vt(Zt())
        }), [tt]), (0, Qt.f)(Pt.h, (() => {
          Vt(Zt())
        })), et
      }(), Nt = jt && !wt;
      ! function(tt, et, Vt) {
        (0, Ot.useLayoutEffect)((() => {
          const Ot = document.documentElement.classList;
          return tt && (Ot.add("TouchHotbar"), Ot.toggle("TouchHotbarKeysAbove", et), Ot.toggle("TouchHotbarHasBag", Vt)), (0, St.i)(), Xt.j.sw(ct.c), () => {
            Ot.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, St.i)(), Xt.j.sw(ct.c)
          }
        }), [tt, et, Vt])
      }(jt, Nt, Vt);
      const [bt, Wt] = (0, Dt.c)("changedHotbarUsingNumkeys", !0), Lt = (0, Mt.g)("hotbar", (tt => tt.selectedSlot)), Ft = null !== Lt && void 0 !== Lt ? Lt : tt, kt = (0, qt.c)(), rt = (0, Ot.useRef)(null), Ut = (0, Qt.h)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, Qt.f)("inventoryDraggedItemUpdated", (tt => {
        rt.current = tt, kt()
      })), (0, Mt.e)("hotbarScrolled", (tt => {
        null === Lt && Yt(tt)
      })), (0, Mt.e)("hotbarSlotRequested", (tt => {
        it(tt), Wt(!1)
      })), (0, Mt.e)("numberKeyPressed", (() => {
        Wt(!1)
      })), (0, Mt.e)("hotbarDropRequested", (tt => {
        const et = ht.gameBridge.latest("hotbar").items[Ft];
        if (et) {
          var Vt;
          const Ot = tt && null !== (Vt = et.amount) && void 0 !== Vt ? Vt : 1;
          ht.gameBridge.send("removeInventoryItem", {
            slot: Ft,
            amount: Ot,
            drop: !0
          })
        }
      }));
      const it = tt => {
          ht.gameBridge.send("selectHotbarSlot", tt), et(tt)
        },
        Yt = tt => {
          it((Ft + tt + vt.m) % vt.m)
        };
      let Bt, pt = null,
        xt = null,
        Tt = tt => tt => {},
        gt = tt => et => {
          it(tt)
        },
        st = tt => tt => {},
        nt = [];
      if (Et) {
        var te;
        const tt = rt.current;
        if (null === tt || void 0 === tt || !tt.setHovered) return (0, Jt.jsx)("div", {
          className: ft()("HotBarContainer", {
            Touch: jt,
            KeysAbove: Nt
          }),
          children: (0, Jt.jsx)("div", {
            className: "HotBar"
          })
        });
        pt = tt.draggedInfo, xt = tt.specialItemInfo, Tt = tt.setHovered, gt = tt.pointerDown, st = tt.pointerUp, Bt = tt.variation, nt = null !== (te = tt.craftFlyAnims) && void 0 !== te ? te : []
      }
      return (0, Jt.jsxs)("div", {
        className: ft()("HotBarContainer", {
          Touch: jt,
          PopupOpen: jt && lt,
          KeysAbove: Nt
        }),
        children: [(0, Jt.jsxs)("div", {
          className: ft()("HotBar", {
            HoverDisabled: Ut
          }),
          children: [jt && (0, Jt.jsxs)(Jt.Fragment, {
            children: [(0, Jt.jsx)(zt, {
              useFullInventory: Vt,
              inventoryOpen: Et
            }), (0, Jt.jsx)(Gt, {
              direction: "Previous",
              onPress: () => {
                Yt(-1)
              }
            })]
          }), !jt && (0, Jt.jsxs)(Jt.Fragment, {
            children: [(0, Jt.jsx)(ot, {}), (0, Jt.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, Jt.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((tt, et) => (0, Jt.jsx)(yt.d, {
              idx: et,
              draggedInfo: pt,
              specialItemInfo: xt,
              craftFlyHoldbackInfo: (0, ut.g)(nt, et),
              setHovered: Tt(et),
              pointerDown: gt(et),
              pointerUp: st(et),
              variation: Bt,
              isSelected: et === Ft,
              hotbarHighlighted: !0 === (null === mt || void 0 === mt ? void 0 : mt.includes(et)),
              hoverDisabled: Ut,
              showNumber: bt && !jt
            }, et)))
          }), jt && (0, Jt.jsx)(Gt, {
            direction: "Next",
            onPress: () => {
              Yt(1)
            }
          }), !jt && (0, Jt.jsxs)(Jt.Fragment, {
            children: [(0, Jt.jsx)("div", {
              className: "HotBarFiller"
            }), (0, Jt.jsx)("div", {
              className: ft()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !Vt
              }),
              onPointerDown: () => {
                Xt.j.sw("toggleMenu", "inventory")
              },
              children: (0, Jt.jsx)(At, {})
            })]
          })]
        }), (0, Jt.jsx)(Ct, {
          slotIdx: Ft
        })]
      })
    }));

    function Gt(tt) {
      let {
        direction: et,
        onPress: Vt
      } = tt;
      return (0, Jt.jsx)("div", {
        className: ft()("HotBarArrow", et),
        ...Ft.g,
        children: (0, Jt.jsx)(mt.b, {
          icon: "Previous" === et ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: Vt
        })
      })
    }
    const zt = (0, Ot.memo)((function(tt) {
        let {
          useFullInventory: et,
          inventoryOpen: Vt
        } = tt;
        const qt = (0, dt.i)("maxAuraLevel"),
          Dt = (0, Ot.useRef)(null),
          mt = (0, jt.e)();
        return function(tt, et, Vt) {
          (0, Ot.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", et), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [et]), (0, Ot.useLayoutEffect)((() => {
            const et = tt.current.closest(".BottomMiddleElements");
            return et.classList.toggle("TouchInventoryOpen", Vt), () => {
              et.classList.remove("TouchInventoryOpen")
            }
          }), [tt, Vt])
        }(Dt, mt, Vt), (0, Lt.f)(Dt, mt, Vt), (0, Jt.jsxs)("div", {
          ref: Dt,
          className: ft()("TouchInventoryKeys", {
            NoAuraBar: 0 === qt,
            InventoryOpen: Vt
          }),
          children: [(0, Jt.jsx)(ot, {
            touchKey: !0
          }), (0, Jt.jsx)("div", {
            className: ft()("TouchInventoryKey BagKey", {
              Hidden: !et
            }),
            ...Ft.g,
            children: (0, Jt.jsx)(At, {
              touchKey: !0
            })
          })]
        })
      })),
      ot = (0, Ot.memo)((function(tt) {
        let {
          touchKey: et = !1
        } = tt;
        const Vt = (0, jt.e)();
        return (0, Jt.jsx)("div", {
          className: et ? ft()("TouchInventoryKey ShopKey", {
            Hidden: !Vt
          }) : ft()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !Vt
          }),
          ...et ? Ft.g : {},
          children: (0, Jt.jsx)(mt.b, {
            icon: (0, Ht.nc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              Vt && Kt.b.set({
                openEverythingMenuName: wt.o.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function rt(tt) {
      let {
        player: et
      } = tt;
      return et.some((tt => null !== tt && Ht._c.includes(tt.name)))
    }

    function Ut(tt) {
      tt.creative || lt.e.getItem("LogInInventoryRedDotTutorialComplete") || (rt(tt) ? (Xt.j.sw("RedDotOpenInventoryIcon", !0), Xt.j.sw("TouchTutorialOpenInventoryIcon", !0)) : (Xt.j.sw("RedDotOpenInventoryIcon", !1), Xt.j.sw("TouchTutorialOpenInventoryIcon", !1)))
    }
    const At = (0, Ot.memo)((function(tt) {
      let {
        touchKey: et = !1
      } = tt;
      (0, Ot.useEffect)((() => {
        Ut(ht.gameBridge.latest("inventory"))
      }), []), (0, Mt.e)("inventory", Ut);
      const Vt = (0, Wt.g)();
      return (0, Qt.f)("toggleMenu", (tt => {
        Vt.shown && (null !== tt && void 0 !== tt && tt.startsWith("inventory") && rt(ht.gameBridge.latest("inventory")) ? (lt.e.setItem("LogInInventoryRedDotTutorialComplete", !0), Xt.j.sw("RedDotOpenInventoryIcon", !1), Xt.j.sw("TouchTutorialOpenInventoryIcon", !1)) : "shop" === tt && Xt.j.sw("showShopTouchTutorial", !1))
      })), et ? (0, Jt.jsx)(mt.b, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          Xt.j.sw("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, Jt.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          Xt.j.sw("toggleMenu", "inventory")
        },
        children: (0, Jt.jsx)(mt.b, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: tt => {
            Xt.j.sw("toggleMenu", "inventory"), tt.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36767: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => yt,
      e: () => ft
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(2022),
      dt = Vt(2018),
      jt = Vt(2024),
      Ht = Vt(2063),
      Xt = Vt(36769),
      Qt = Vt(34394),
      lt = Vt(1492),
      Et = Vt(1188);
    const ft = (tt, et, Vt) => {
      let Ot = et,
        qt = !1;
      for (const Dt of Vt)(null === Dt || void 0 === Dt ? void 0 : Dt.idx) === tt && (qt = !0, Ot > 0 && (Ot -= Dt.amount));
      return {
        displayedAmt: Ot,
        shown: !qt || Ot > 0
      }
    };
    const wt = tt => {
        let {
          idx: et
        } = tt;
        return (0, lt.v)() ? null : (0, Et.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: et < 9 ? et + 1 : 0
        })
      },
      yt = (0, Ot.memo)((function(tt) {
        var et, Vt, Ot;
        let {
          idx: qt,
          setHovered: lt,
          pointerDown: yt,
          pointerUp: Nt,
          draggedInfo: Mt,
          specialItemInfo: bt,
          craftFlyHoldbackInfo: Jt,
          defaultIconB64: Ct = null,
          variation: ut,
          isSelected: Kt = !1,
          hotbarHighlighted: ht = !1,
          hoverDisabled: vt = !1,
          showNumber: Wt = !1,
          showNewDot: St = !1
        } = tt;
        const ct = (0, Ht.g)("inventory", (tt => qt === Xt.e ? null : (0, Qt.l)(tt, qt)));
        let Rt, It, Pt, Zt;
        if (qt === Xt.e) bt && (Rt = bt.name, Pt = bt.amount, Zt = bt.attributes);
        else if (ct) {
          var Lt;
          Rt = ct.name, It = ct.icon, Pt = null !== (Lt = ct.amount) && void 0 !== Lt ? Lt : 0, Zt = ct.attributes
        }
        const Ft = null === (et = Zt) || void 0 === et || null === (Vt = et.customAttributes) || void 0 === Vt ? void 0 : Vt.enchantmentTier,
          kt = (0, mt.f)(Zt),
          {
            displayedAmt: Gt,
            shown: zt
          } = ft(qt, Pt, [Mt, bt, Jt]),
          ot = Rt && zt,
          rt = void 0 !== ut && function(tt, et) {
            const {
              enchantable: Vt,
              salvageable: Ot
            } = jt.gameBridge.latest("stationItems");
            return "Enchanting Table" === tt ? !0 === Vt[et] : "Salvaging Table" === tt && !0 === Ot[et]
          }(ut, Rt);
        return (0, Et.jsxs)("div", {
          className: Dt()("InvenItem", {
            Highlighted: ot && rt,
            Selected: Kt,
            HotbarHighlighted: ht,
            HoverDisabled: vt
          }),
          onPointerEnter: () => {
            null === lt || void 0 === lt || lt(!0)
          },
          onPointerLeave: () => {
            null === lt || void 0 === lt || lt(!1)
          },
          onPointerDown: yt,
          onPointerUp: Nt,
          "data-inven-idx": qt,
          children: [ot && (0, Et.jsx)(dt.e, {
            itemName: null !== (Ot = It) && void 0 !== Ot ? Ot : Rt,
            amount: Gt,
            enchantmentTier: Ft,
            bar: kt
          }), ot && St && (0, Et.jsx)("div", {
            className: "InvenItemNewDot"
          }), Wt && (0, Et.jsx)(wt, {
            idx: qt
          }), Ct && !ot && (0, Et.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${Ct})`
            }
          })]
        })
      }))
  },
  36769: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot,
      e: () => qt
    });
    const Ot = -1,
      qt = -2
  },
  37247: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => vt
    });
    var Ot = Vt(63),
      qt = Vt(37252),
      Dt = Vt(2001),
      mt = Vt(697),
      dt = Vt(31),
      jt = Vt(1140),
      Ht = Vt.n(jt),
      Xt = Vt(36794),
      Qt = Vt(2701),
      lt = Vt(36799),
      Et = Vt(2731),
      ft = Vt(2708),
      wt = Vt(3662),
      yt = Vt(36802),
      Nt = Vt(26),
      Mt = Vt(2108),
      bt = Vt(2435),
      Jt = Vt(1308),
      Ct = Vt(5086),
      ut = Vt(2063),
      Kt = Vt(106),
      ht = Vt(1188);
    const vt = (0, Ot.memo)((function() {
      const tt = (0, qt.c)(),
        et = (0, ut.h)("players"),
        Vt = (0, ut.h)("lobbyLeaderboardRows"),
        dt = (0, ut.h)("hiddenPlayerNames"),
        jt = (0, Ot.useRef)(null),
        [Ht, Xt] = (0, Ot.useReducer)((tt => tt + 1), 0);
      return (0, Ot.useEffect)((() => (0, Mt.d)((() => {
        Xt()
      }))), []), (0, ht.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, ht.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!tt) return (0, ht.jsx)(ht.Fragment, {});
            const Ot = [...et.ids],
              qt = {},
              Ht = {};
            for (const tt of Ot) {
              var Xt, Qt;
              qt[tt] = null === (Xt = Vt[tt]) || void 0 === Xt ? void 0 : Xt.colour;
              const et = null === (Qt = Vt[tt]) || void 0 === Qt ? void 0 : Qt.values;
              et && (Ht[tt] = {
                ...et
              })
            }
            const Et = Object.keys(tt);
            Et.sort(((et, Vt) => tt[et].sortPriority - tt[Vt].sortPriority)), Ot.sort(((et, Vt) => {
              if (!Ht[et] || !Ht[Vt]) return 0;
              for (const Ot of Et) {
                const qt = Ht[et][Ot],
                  Dt = Ht[Vt][Ot];
                let mt = 0;
                if ("string" == typeof qt && "string" == typeof Dt ? mt = qt.localeCompare(Dt) : "number" == typeof qt && "number" == typeof Dt ? mt = qt - Dt : "number" == typeof qt && "string" == typeof Dt ? mt = 1 : "string" == typeof qt && "number" == typeof Dt && (mt = -1), mt) return mt * ("ascending" === tt[Ot].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const tt of Ot) {
              var ft, wt, yt;
              const {
                name: Ot,
                ranks: qt,
                cosmetics: Dt
              } = et.byId[tt], dt = [], jt = null !== (ft = null === (wt = Vt[tt]) || void 0 === wt || null === (yt = wt.tags) || void 0 === yt ? void 0 : yt.flatMap((tt => 0 === tt.length ? tt : [...tt, String.fromCharCode(8198)]))) && void 0 !== ft ? ft : [];
              dt.push(...jt), dt.push(...(0, Jt.x)(qt, Ot, (null === Dt || void 0 === Dt ? void 0 : Dt.nameColour) === mt.c || null === Dt || void 0 === Dt ? void 0 : Dt.nameColour)), Ht[tt] ??= {}, Ht[tt].name = dt
            }

            function Nt(tt, Vt) {
              if (Ht[tt] && void 0 !== Ht[tt][Vt]) {
                if ("name" === Vt) {
                  const {
                    name: Ot,
                    cosmetics: qt
                  } = et.byId[tt];
                  return (0, ht.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [qt && (0, ht.jsx)(bt.c, {
                      cosmetics: qt
                    }), " ", (0, ht.jsx)(Dt.e, {
                      text: Ht[tt][Vt],
                      friendBadgeFor: (0, Mt.e)(Ot, dt) ? Ot : void 0
                    })]
                  })
                }
                return (0, ht.jsx)(Dt.e, {
                  text: Ht[tt][Vt]
                })
              }
              return ""
            }
            const ut = Object.keys(tt).filter((et => !0 !== tt[et].hidden)).map((et => {
              var Vt;
              return {
                key: et,
                header: (0, ht.jsx)(Dt.e, {
                  text: null !== (Vt = tt[et].displayName) && void 0 !== Vt ? Vt : ""
                })
              }
            }));
            return (0, ht.jsx)("div", {
              ref: jt,
              className: "LobbyLeaderboard",
              children: (0, ht.jsx)(Ct.b, {
                columns: ut,
                rows: Ot,
                getRowKey: tt => tt,
                renderRow: Vt => {
                  const Ot = Vt !== et.localId;
                  return (0, ht.jsx)(Wt, {
                    playerId: Vt,
                    playerName: et.byId[Vt].name,
                    isOtherPlayer: Ot,
                    opensProfileCard: (0, lt.e)(Ot, et.byId[Vt].name, dt),
                    lobbyLeaderboardInfo: tt,
                    getPlayerValue: Nt,
                    playerColors: qt
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function Wt(tt) {
      let {
        playerId: et,
        playerName: Vt,
        isOtherPlayer: qt,
        opensProfileCard: Dt,
        lobbyLeaderboardInfo: mt,
        getPlayerValue: jt,
        playerColors: Mt
      } = tt;
      const bt = (0, Ot.useRef)(null);
      (0, Ot.useEffect)((() => () => {
        Qt.d.closeIfOwner(bt)
      }), []);
      const Jt = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            dt.j.sw("OpenReportMenu", {
              playerEId: et,
              playerName: Vt,
              kX: null,
              serverChatMsgId: null
            })
          }
        },
        Ct = () => ({
          ...(0, lt.c)(et, Vt),
          showLocation: !1,
          status: null,
          extraActions: [Jt],
          moderationActions: null === Vt ? [] : (0, yt.c)(Vt),
          friendRequestSource: "leaderboard"
        });
      return (0, ht.jsxs)("tr", {
        ref: bt,
        "data-pad-focusable": Dt || void 0,
        [Qt.g]: Dt || void 0,
        onClick: Dt ? () => {
          var tt;
          Qt.d.toggle(bt, {
            ...Ct(),
            anchor: null !== (tt = bt.current.querySelector(".PlayerPfpAndName")) && void 0 !== tt ? tt : bt.current
          })
        } : void 0,
        onContextMenu: Dt ? tt => {
          (0, Et.h)(bt, tt, Ct(), Nt.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Dt ? tt => {
          (0, ft.c)(tt, (() => (0, lt.c)(et, Vt).playerSocialPreview))
        } : void 0,
        children: [Object.keys(mt).map((tt => !0 === mt[tt].hidden ? null : (0, ht.jsxs)("td", {
          className: Ht()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !qt
          }),
          children: [(0, ht.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: jt(et, tt)
          }), (0, ht.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: Mt[et]
            }
          })]
        }, tt))), qt && !Dt && (0, ht.jsx)(Xt.e, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: bt,
          options: [{
            icon: Jt.icon,
            text: Jt.text,
            onPointerDown: Jt.onClick
          }, ...null === Vt || Kt.featureFlags.useSocialFeatures ? [] : (0, wt.e)(null, Vt)]
        })]
      })
    }
  },
  36802: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Xt
    });
    var Ot = Vt(2043),
      qt = Vt(2516),
      Dt = Vt(36804);
    const mt = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function dt(tt, et) {
      return async () => function(tt, et, Vt) {
        return null === et ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : et.ok ? {
          message: {
            key: mt[tt.type]
          },
          next: Vt
        } : {
          message: {
            fromServer: et.message
          },
          next: null
        }
      }(tt, await (0, Dt.h)(tt), et())
    }

    function jt(tt) {
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
        run: dt({
          type: "ban",
          name: tt
        }, (() => function(tt) {
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
            run: dt({
              type: "unban",
              name: tt
            }, (() => null))
          }
        }(tt)))
      }
    }

    function Ht(tt, et) {
      if (null === tt) return [];
      const Vt = [],
        Ot = function(tt, et) {
          var Vt, Ot;
          return null !== (Vt = null !== (Ot = tt.here.find((tt => tt.name === et))) && void 0 !== Ot ? Ot : tt.away.find((tt => tt.name === et))) && void 0 !== Vt ? Vt : null
        }(tt, et);
      var Dt, mt;
      return null !== Ot && void 0 !== Ot && Ot.can.kick && Vt.push((Dt = et, mt = Ot.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: dt({
          type: "kick",
          name: Dt
        }, (() => mt ? jt(Dt) : null))
      })), null !== Ot && void 0 !== Ot && Ot.can.ban && Vt.push(jt(et)), Vt.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, qt.h)({
            page: "players",
            focusName: et,
            source: "profile_card"
          })
        }
      }), Vt
    }

    function Xt(tt) {
      var et;
      return Ht(null !== (et = Ot.b.get("lobbyManage")) && void 0 !== et ? et : null, tt)
    }
  },
  36804: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt,
      h: () => jt
    });
    var Ot = Vt(1583),
      qt = Vt(2043),
      Dt = Vt(2024);
    const mt = 1e4;
    let dt = 0;

    function jt(tt) {
      const et = ++dt;
      return new Promise((Vt => {
        const dt = et => {
            jt(), clearTimeout(Ht), !1 === (null === et || void 0 === et ? void 0 : et.ok) && (0, Ot.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: tt.type
            }), Vt(et)
          },
          jt = qt.b.subscribe("lobbyManage", (tt => {
            const Vt = function(tt, et) {
              var Vt;
              return null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.results.find((tt => tt.requestId === et))) && void 0 !== Vt ? Vt : null
            }(tt, et);
            null !== Vt && dt(Vt)
          })),
          Ht = setTimeout((() => {
            dt(null)
          }), mt);
        Dt.gameBridge.send("lobbyManage", {
          ...tt,
          requestId: et
        })
      }))
    }
    const Ht = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Xt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jt;
        this.onChange = tt, this.sendAction = et, this.pending = new Map, this.statuses = new Map
      }
      send(tt, et, Vt) {
        var Ot;
        return this.statuses.delete(et), this.pending.set(et, (null !== (Ot = this.pending.get(et)) && void 0 !== Ot ? Ot : 0) + 1), this.sendAction(tt).then((tt => {
          var Ot;
          const qt = null !== tt && void 0 !== tt ? tt : {
              requestId: -1,
              ok: !1,
              message: Ht
            },
            Dt = (null !== (Ot = this.pending.get(et)) && void 0 !== Ot ? Ot : 1) - 1;
          Dt > 0 ? this.pending.set(et, Dt) : this.pending.delete(et);
          const mt = !qt.ok || qt.message.length > 0 ? qt.message : null === Vt ? null : [Vt];
          return null !== mt && this.statuses.set(et, {
            ok: qt.ok,
            text: mt,
            until: Date.now() + 4e3
          }), this.onChange(), qt
        }))
      }
      show(tt, et) {
        this.statuses.set(tt, {
          ...et,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(tt) {
        for (const [et, Vt] of this.statuses) Vt.until <= tt && this.statuses.delete(et)
      }
      nextDeadline() {
        let tt = null;
        for (const Vt of this.statuses.values()) {
          var et;
          tt = Math.min(null !== (et = tt) && void 0 !== et ? et : 1 / 0, Vt.until)
        }
        return tt
      }
      statusOf(tt, et) {
        const Vt = this.statuses.get(tt);
        return !Vt || Vt.until <= et ? null : {
          ok: Vt.ok,
          text: Vt.text
        }
      }
      isPending(tt) {
        return this.pending.has(tt)
      }
    }
  },
  4938: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Mt,
      b: () => Nt
    });
    var Ot = Vt(63),
      qt = Vt(1554),
      Dt = Vt(2001),
      mt = Vt(4943),
      dt = Vt(1188);
    const jt = (0, Ot.memo)((function(tt) {
      let {
        initialParameters: et
      } = tt;
      const Vt = (0, Ot.useRef)(null),
        qt = (0, Ot.useRef)(null),
        jt = (0, Ot.useRef)(0),
        Ht = (0, Ot.useRef)(null),
        Xt = et.description,
        Qt = et.He,
        {
          scale: lt,
          rotation: Et
        } = null !== et && void 0 !== et ? et : {},
        ft = (0, mt.d)();
      return (0, Ot.useEffect)((() => {
        const tt = ft.onFrame((() => {
          const tt = ft.getState();
          if (!tt.isActive || !Vt.current || !qt.current) return;
          const et = tt.state;
          if (Vt.current.value = et.progress, et.clickCount > jt.current) {
            jt.current = et.clickCount;
            const tt = qt.current;
            tt.classList.add("pulse"), Ht.current = setTimeout((() => {
              tt.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(Ht.current), tt()
        }
      }), [ft]), (0, dt.jsx)(dt.Fragment, {
        children: (0, dt.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== lt && {
              "--scale": lt
            },
            ...null !== Et && {
              "--rotation": `${Et}deg`
            }
          },
          children: [(0, dt.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: Vt
          }), (0, dt.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: qt,
            children: (0, dt.jsx)(Dt.e, {
              text: [{
                icon: Qt
              }]
            })
          }), (0, dt.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, dt.jsx)(Dt.e, {
              text: Xt
            })
          })]
        })
      })
    }));
    var Ht = Vt(1140),
      Xt = Vt.n(Ht);
    const Qt = 2 * Math.PI * 90,
      lt = (0, Ot.memo)((function(tt) {
        let {
          initialParameters: et
        } = tt;
        const Vt = (0, Ot.useRef)(null),
          qt = (0, Ot.useRef)(null),
          jt = (0, Ot.useRef)(null),
          Ht = et.label,
          lt = et.icon,
          Et = et.le,
          {
            scale: ft,
            rotation: wt,
            Ee: yt
          } = null !== et && void 0 !== et ? et : {},
          Nt = (0, mt.d)();
        return (0, Ot.useEffect)((() => {
          const tt = Nt.onFrame((() => {
            var tt, et;
            const Ot = Nt.getState();
            if (!Ot.isActive || !qt.current) return;
            const Dt = Ot.state,
              mt = null !== (tt = Dt.timeRemaining) && void 0 !== tt ? tt : 0,
              dt = null !== (et = Dt.Qe) && void 0 !== et ? et : 1,
              Ht = Qt * (1 - mt / dt);
            qt.current.style.strokeDashoffset = `${Ht}`, Vt.current && (Vt.current.style.opacity = mt > 0 ? "1" : "0"), jt.current && Et && (jt.current.textContent = `${(mt/1e3).toFixed(1)}s`)
          }));
          return () => {
            tt()
          }
        }), [Nt, Et]), (0, dt.jsxs)("div", {
          className: "QTETimedClick",
          ref: Vt,
          style: {
            ...null !== ft && {
              "--scale": ft
            },
            ...null !== wt && {
              "--rotation": `${wt}deg`
            }
          },
          children: [(0, dt.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, dt.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, dt.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, dt.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: Qt,
                ref: qt
              })]
            }), (0, dt.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, dt.jsx)(Dt.e, {
                text: [{
                  icon: lt
                }],
                className: Xt()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: yt
                })
              })
            })]
          }), (0, dt.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, dt.jsx)(Dt.e, {
              text: Ht,
              className: "QTETimedClickLabelText"
            }), Et && (0, dt.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: jt
            })]
          })]
        })
      })),
      Et = (0, Ot.memo)((function(tt) {
        let {
          initialParameters: et
        } = tt;
        const Vt = (0, Ot.useRef)(null),
          qt = (0, Ot.useRef)(null),
          jt = (0, Ot.useRef)(null),
          Ht = (0, Ot.useRef)(!1),
          Xt = et.description,
          Qt = null === et || void 0 === et ? void 0 : et.icon,
          lt = (0, mt.d)();
        return (0, Ot.useEffect)((() => {
          const tt = lt.onFrame((() => {
            const tt = lt.getState();
            if (!tt.isActive) return;
            const et = tt.state;
            if (Vt.current) {
              const tt = 100 * (et.catchZonePosition - et.ye / 2);
              Vt.current.style.left = `${tt}%`, Vt.current.style.width = 100 * et.ye + "%", et.isCatching !== Ht.current && (Ht.current = et.isCatching, et.isCatching ? Vt.current.classList.add("catching") : Vt.current.classList.remove("catching"))
            }
            qt.current && (qt.current.style.left = 100 * et.moverPosition + "%"), jt.current && (jt.current.value = et.progress)
          }));
          return () => {
            tt()
          }
        }), [lt]), (0, dt.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, dt.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, dt.jsx)(Dt.e, {
              text: Xt
            })
          }), (0, dt.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: jt
          }), (0, dt.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, dt.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: Vt
            }), (0, dt.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: qt,
              children: (0, dt.jsx)("span", {
                children: Qt && (0, dt.jsx)(Dt.e, {
                  text: [{
                    icon: Qt,
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
    var ft = Vt(710);
    const wt = (0, Ot.memo)((function(tt) {
        let {
          initialParameters: et
        } = tt;
        const Vt = (0, Ot.useRef)(null),
          qt = et.label,
          jt = et.Ke,
          {
            icon: Ht,
            scale: Xt,
            rotation: Qt
          } = null !== et && void 0 !== et ? et : {},
          lt = 100 * (.5 - jt / 2),
          Et = 100 * jt,
          wt = (0, mt.d)();
        return (0, Ot.useEffect)((() => {
          const tt = wt.onFrame((() => {
            const tt = wt.getState();
            if (!tt.isActive || !Vt.current) return;
            const et = tt.state;
            Vt.current.style.left = 100 * et.markerPosition + "%"
          }));
          return () => {
            tt()
          }
        }), [wt]), (0, dt.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, ft.B)(Xt) && {
              "--scale": Xt
            },
            ...!(0, ft.B)(Qt) && {
              "--rotation": `${Qt}deg`
            }
          },
          children: [Ht && (0, dt.jsx)(Dt.e, {
            text: [{
              icon: Ht
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, dt.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, dt.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${lt}%`,
                width: `${Et}%`
              }
            }), (0, dt.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: Vt
            })]
          }), (0, dt.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, dt.jsx)(Dt.e, {
              text: qt
            })
          })]
        })
      })),
      yt = (0, Ot.memo)((function(tt) {
        let {
          initialParameters: et
        } = tt;
        const Vt = (0, Ot.useRef)(null),
          [qt, jt] = (0, Ot.useState)((() => new Array(et.ve).fill("pending"))),
          [Ht, Xt] = (0, Ot.useState)((() => {
            const tt = et.Ie;
            return (0, ft.B)(tt) || tt <= 0 ? [] : new Array(tt).fill("pending")
          })),
          Qt = et.label,
          {
            icon: lt
          } = et,
          Et = (0, Ot.useRef)(0),
          wt = (0, Ot.useRef)(0),
          yt = (0, Ot.useRef)([]),
          Nt = (0, mt.d)();
        return (0, Ot.useEffect)((() => {
          const tt = Nt.onFrame((() => {
            const tt = Nt.getState();
            if (!tt.isActive || !Vt.current) return;
            const et = tt.state,
              Ot = 30 + 60 * et.outerCircleProgress;
            if (Vt.current.setAttribute("r", String(Ot)), !0 === et.lastClickResult && et.successes > Et.current) {
              Vt.current.classList.remove("QTERhythmClickOuterCircle--miss"), Vt.current.classList.add("QTERhythmClickOuterCircle--hit");
              const tt = setTimeout((() => {
                var tt;
                null === (tt = Vt.current) || void 0 === tt || tt.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              yt.current.push(tt)
            } else if (!1 === et.lastClickResult && et.misses > wt.current) {
              Vt.current.classList.remove("QTERhythmClickOuterCircle--hit"), Vt.current.classList.add("QTERhythmClickOuterCircle--miss");
              const tt = setTimeout((() => {
                var tt;
                null === (tt = Vt.current) || void 0 === tt || tt.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              yt.current.push(tt)
            }
            et.successes === Et.current && et.misses === wt.current || (Et.current = et.successes, wt.current = et.misses, jt((tt => {
              const Vt = [...tt];
              for (let Ot = 0; Ot < et.ve; Ot++) Vt[Ot] = Ot < et.successes ? "success" : "pending";
              return Vt
            })), Xt((tt => {
              if (0 === tt.length) return tt;
              const Vt = [...tt];
              for (let Ot = 0; Ot < Vt.length; Ot++) Vt[Ot] = Ot < et.misses ? "miss" : "pending";
              return Vt
            })))
          }));
          return () => {
            tt();
            for (const tt of yt.current) clearTimeout(tt);
            yt.current = []
          }
        }), [Nt]), (0, dt.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, dt.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: qt.map(((tt, et) => (0, dt.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === tt ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, et)))
          }), (0, dt.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, dt.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, dt.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, dt.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: Vt
              })]
            }), lt && (0, dt.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, dt.jsx)(Dt.e, {
                text: [{
                  icon: lt
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), Ht.length > 0 && (0, dt.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Ht.map(((tt, et) => (0, dt.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === tt ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, et)))
          }), (0, dt.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, dt.jsx)(Dt.e, {
              text: Qt
            })
          })]
        })
      }));

    function Nt(tt) {
      let {
        qte: et
      } = tt;
      switch (et.type) {
        case "progressBar":
          return (0, dt.jsx)(jt, {
            initialParameters: et.parameters
          });
        case "timedClick":
          return (0, dt.jsx)(lt, {
            initialParameters: et.parameters
          });
        case "gravityBar":
          return (0, dt.jsx)(Et, {
            initialParameters: et.parameters
          });
        case "precisionBar":
          return (0, dt.jsx)(wt, {
            initialParameters: et.parameters
          });
        case "rhythmClick":
          return (0, dt.jsx)(yt, {
            initialParameters: et.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const Mt = (0, Ot.memo)((function() {
      const [tt, et] = (0, Ot.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, qt.f)("qteStateUpdated", (tt => {
        et(tt)
      })), tt.isActive && tt.type ? (0, dt.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, dt.jsx)(Nt, {
          qte: tt
        })
      }) : null
    }))
  },
  4943: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      d: () => jt
    });
    var Ot = Vt(63),
      qt = Vt(1397),
      Dt = Vt(4948);
    const mt = {
        getState: () => Dt.d.getCurrentState(),
        onFrame: qt.r
      },
      dt = (0, Ot.createContext)(mt);

    function jt() {
      return (0, Ot.useContext)(dt)
    }
  },
  36569: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      g: () => lt
    });
    var Ot = Vt(63),
      qt = Vt(1450),
      Dt = Vt(1286),
      mt = Vt(1436),
      dt = Vt(3544),
      jt = Vt(5101),
      Ht = Vt(1188);

    function Xt(tt) {
      let {
        loading: et,
        schematics: Vt,
        onSchematicPicked: Ot,
        selectedSchematicIdList: qt = [],
        disableAutoExport: jt
      } = tt;
      const {
        t: Xt
      } = (0, Dt.H)();
      return (0, Ht.jsxs)("div", {
        className: "SchematicList",
        children: [et && (0, Ht.jsx)(mt.b, {}), !et && 0 === Vt.length && (0, Ht.jsx)("div", {
          className: "NoSchematicsText",
          children: Xt("worldBuilder:noSavedSchematic")
        }), !et && Vt.map((tt => (0, Ht.jsx)(dt.h, {
          source: {
            type: "schematic",
            schematic: tt
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Ot(tt)
          },
          isSelected: qt.includes(tt.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: tt.isAutoExported && jt,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, tt.schematicId)))]
      })
    }

    function Qt(tt) {
      let {
        ownedSchematics: et,
        currentWorldSchematicId: Vt,
        onClose: qt
      } = tt;
      const {
        t: mt
      } = (0, Dt.H)(), [dt, Qt] = (0, Ot.useState)(null);
      return (0, Ht.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === dt && (0, Ht.jsxs)(Ht.Fragment, {
          children: [(0, Ht.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: mt("worldBuilder:schematicList")
          }), (0, Ht.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: mt("worldBuilder:clickSchematicForOptions")
          }), (0, Ht.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Ht.jsx)(Xt, {
              loading: !1,
              schematics: et,
              onSchematicPicked: tt => {
                Qt(tt)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== dt && (0, Ht.jsx)(jt.k, {
          schematic: dt,
          inSourceWorld: dt.schematicId === Vt,
          onSchematicUpdate: tt => {
            Qt(tt)
          },
          onClose: () => {
            Qt(null), qt()
          }
        })]
      })
    }

    function lt(tt) {
      let {
        ownedSchematics: et,
        currentWorldSchematicId: Vt,
        onClose: Ot
      } = tt;
      qt.NotificationProvider.showCustomPopup({
        body: tt => (0, Ht.jsx)(Qt, {
          ownedSchematics: et,
          currentWorldSchematicId: Vt,
          onClose: tt
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Ot,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37155: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ct,
      f: () => Jt
    });
    var Ot = Vt(4354),
      qt = Vt(1554),
      Dt = Vt(63),
      mt = Vt(6667),
      dt = Vt(4345),
      jt = Vt(1387),
      Ht = Vt(2024),
      Xt = Vt(2001),
      Qt = Vt(1556),
      lt = Vt(1286),
      Et = Vt(37164),
      ft = Vt(1140),
      wt = Vt.n(ft),
      yt = Vt(1410),
      Nt = Vt(1152),
      Mt = Vt(1371),
      bt = Vt(1188);
    const Jt = "SleepingOverlay";

    function Ct() {
      const {
        t: tt
      } = (0, lt.H)(), [et, Vt] = (0, Dt.useState)(!1), [ft, Ct] = (0, Dt.useState)(null), [Kt, ht] = (0, Dt.useState)(1), [vt, Wt] = (0, Dt.useState)(!1), [St, ct] = (0, Dt.useState)(!1), Rt = (0, Dt.useRef)(0), It = (0, Dt.useRef)(!1), Pt = (0, Dt.useRef)(!1), Zt = (0, Dt.useRef)(), Lt = (0, Dt.useRef)(null);

      function Ft() {
        const tt = null !== ft && void 0 !== ft ? ft : "Rested Speed";
        Ht.gameBridge.send("wakeUp", St ? tt : null), Lt.current = null, Vt(!1), Ct(null), ht(1), Wt(!1), ct(!1)
      }

      function kt() {
        return !vt && (Ft(), !0)
      }
      return (0, qt.f)("PlayerPhysicsTypeUpdate", (tt => {
        tt !== Lt.current && (Lt.current = tt, tt === mt.n.SLEEPING ? (Pt.current || (Rt.current = Ht.gameBridge.lookup("cameraZoom", null), Pt.current = !0), It.current = !0, Ht.gameBridge.send("setCameraZoom", 3), Vt(!0), ht(function() {
          for (const tt of Ht.gameBridge.lookup("blocksStandingOn", null)) {
            if (Et.b.leafBeds.includes(tt)) return console.log(`Found leaf bed: ${tt}`), 1;
            if (Et.b.woolBeds.includes(tt)) return console.log(`Found woold bed: ${tt}`), 2;
            if (Et.b.strongBeds.includes(tt)) return console.log(`Found strong bed ${tt}`), 3
          }
          return 1
        }())) : (Pt.current = !1, Vt(!1), Ct(null), ht(1)))
      })), (0, Dt.useEffect)((() => () => {
        (0, jt.m)(Jt)
      }), []), (0, Dt.useEffect)((() => {
        et ? (0, jt.p)(Jt) : ((0, jt.m)(Jt), It.current && (Ht.gameBridge.send("setCameraZoom", Rt.current), It.current = !1))
      }), [et]), (0, Mt.w)("overlay", Zt, kt, et), (0, bt.jsx)(Ot.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: et,
        timeout: 300,
        nodeRef: Zt,
        unmountOnExit: !0,
        children: (0, bt.jsx)("div", {
          ref: Zt,
          onClick: tt => {
            kt() && tt.stopPropagation()
          },
          children: (0, bt.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, bt.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: dt.h.map((et => (0, bt.jsxs)(ut, {
                restedEffect: et,
                Zj: ft,
                setChosenRestedEffect: Ct,
                children: [(0, bt.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, bt.jsx)(Xt.e, {
                    text: [{
                      icon: et
                    }]
                  }), dt.f[et].shortName]
                }), (0, bt.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: tt(dt.f[et].description, {
                    time: dt.f[et].effectLevelDurations[Kt] / 6e4
                  })
                })]
              }, et)))
            }), (0, bt.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, bt.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, bt.jsxs)(Qt.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: tt => {
                  St ? Ft() : (Wt(!0), (0, yt.$)((() => {
                    Wt(!1), ct(!0)
                  }), !0)), tt.stopPropagation()
                },
                loading: vt,
                children: [!St && (0, bt.jsxs)(bt.Fragment, {
                  children: [(0, bt.jsx)(Nt.b, {
                    name: "film"
                  }), " ", tt("classicGame:watchAdToGetRestedPerk")]
                }), St && tt("classicGame:wakeUp")]
              }), (0, bt.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, bt.jsx)("div", {
                  className: wt()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Kt
                  }),
                  children: (0, bt.jsx)(Xt.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, bt.jsx)("div", {
                  className: wt()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Kt
                  }),
                  children: (0, bt.jsx)(Xt.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, bt.jsx)("div", {
                  className: wt()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Kt
                  }),
                  children: (0, bt.jsx)(Xt.e, {
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
    const ut = (0, Dt.memo)((function(tt) {
      let {
        children: et,
        restedEffect: Vt,
        Zj: Ot,
        setChosenRestedEffect: qt
      } = tt;
      return Vt === Ot ? (0, bt.jsx)(Qt.m, {
        onClick: tt => {
          tt.stopPropagation()
        },
        children: et
      }) : (0, bt.jsx)(Qt.g, {
        onClick: tt => {
          qt(Vt), tt.stopPropagation()
        },
        children: et
      })
    }))
  },
  36799: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht,
      e: () => jt
    });
    var Ot = Vt(697),
      qt = Vt(2024),
      Dt = Vt(1737),
      mt = Vt(106),
      dt = Vt(1354);

    function jt(tt, et, Vt) {
      return mt.featureFlags.useSocialFeatures && tt && null === (0, dt.e)(et, Vt)
    }

    function Ht(tt, et) {
      var Vt, mt;
      const dt = Dt.e.getSocialState().friends.find((tt => tt.name.toLowerCase() === et.toLowerCase())),
        jt = qt.gameBridge.latest("players").byId[tt],
        Ht = void 0 !== jt && jt.name === et,
        Xt = Ht && null !== (Vt = jt.cosmetics) && void 0 !== Vt ? Vt : void 0,
        Qt = dt && Xt ? {
          ...dt,
          cosmetics: Xt
        } : dt;
      return {
        playerSocialPreview: null !== Qt && void 0 !== Qt ? Qt : {
          isError: !1,
          name: et,
          ranks: Ht ? [...jt.ranks] : [],
          cosmetics: null !== Xt && void 0 !== Xt ? Xt : {},
          nameColour: null !== (mt = null === Xt || void 0 === Xt ? void 0 : Xt.nameColour) && void 0 !== mt ? mt : Ot.c,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== dt
      }
    }
  },
  5086: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(1188);

    function dt(tt) {
      let {
        columns: et,
        rows: Vt,
        getRowKey: qt,
        renderRow: dt,
        className: jt
      } = tt;
      return (0, mt.jsxs)("table", {
        className: Dt()("Table", jt),
        children: [(0, mt.jsx)("thead", {
          children: (0, mt.jsx)("tr", {
            children: et.map((tt => (0, mt.jsx)("th", {
              children: tt.header
            }, tt.key)))
          })
        }), (0, mt.jsx)("tbody", {
          children: Vt.map((tt => (0, mt.jsx)(Ot.Fragment, {
            children: dt(tt)
          }, qt(tt))))
        })]
      })
    }
  },
  36941: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      d: () => mt,
      h: () => dt,
      j: () => jt
    });
    var Ot = Vt(63),
      qt = Vt(3176);
    const Dt = 8,
      mt = "InGameHeaderContainer",
      dt = "TopRightElements";

    function jt(tt) {
      const [et] = (0, qt.c)(), [Vt, jt] = (0, Ot.useState)(!1);
      return (0, Ot.useLayoutEffect)((() => {
        if (!tt) return;
        const et = document.querySelector(`.${mt}`),
          Vt = document.querySelector(`.${dt}`),
          Ot = () => {
            const Ot = tt.getBoundingClientRect(),
              qt = et ? et.getBoundingClientRect().right : 0,
              mt = Vt ? Vt.getBoundingClientRect().left : window.innerWidth,
              dt = Ot.left < qt + Dt,
              Ht = Ot.right > mt - Dt;
            jt(dt || Ht)
          };
        Ot();
        const qt = new ResizeObserver(Ot);
        return qt.observe(tt), et && qt.observe(et), Vt && qt.observe(Vt), () => {
          qt.disconnect()
        }
      }), [tt, et]), Vt
    }
  },
  36984: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Qt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(1770),
      dt = Vt(1556),
      jt = Vt(1436),
      Ht = Vt(1152),
      Xt = Vt(1188);

    function Qt(tt) {
      let {
        label: et,
        icon: Vt,
        placeholder: qt,
        onSubmit: Qt
      } = tt;
      const lt = (0, Ot.useRef)(null),
        [Et, ft] = (0, Ot.useState)(""),
        [wt, yt] = (0, Ot.useState)("Enter"),
        [Nt, Mt] = (0, Ot.useState)(null);
      (0, Ot.useEffect)((() => {
        if ("Success" !== wt && "Error" !== wt) return;
        const tt = setTimeout((() => {
          "Success" === wt && lt.current && (lt.current.value = "", ft("")), yt("Enter")
        }), "Success" === wt ? 1e3 : 4e3);
        return () => {
          clearTimeout(tt)
        }
      }), [wt]);
      const bt = () => {
        const tt = Et.trim();
        "" !== tt && "Enter" === wt && (yt("Loading"), Qt(tt).then((tt => {
          lt.current && ("error" in tt ? null === tt.error ? yt("Enter") : (Mt(tt.error), yt("Error")) : yt("Success"))
        })))
      };
      return (0, Xt.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: tt => {
          tt.target === lt.current && "Escape" !== tt.key && tt.stopPropagation()
        },
        children: [(0, Xt.jsxs)("div", {
          className: Dt()("AddFriendBodyOverlay", `AddFriendBodyOverlay${wt}`),
          children: ["Loading" === wt && (0, Xt.jsx)(jt.b, {}), "Success" === wt && (0, Xt.jsx)(Ht.b, {
            name: "check"
          }), "Error" === wt && Nt]
        }), (0, Xt.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Xt.jsx)(mt.d, {
            className: "PlayerSearchInput",
            domRef: lt,
            maxLength: 32,
            placeholderText: qt,
            ariaLabel: qt,
            stopPropagation: !1,
            onValueChange: tt => {
              ft(tt)
            },
            onEnter: bt
          }), (0, Xt.jsxs)(dt.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== wt || "" === Et.trim(),
            onClick: bt,
            children: [(0, Xt.jsx)(Ht.b, {
              name: Vt
            }), " ", et]
          })]
        })]
      })
    }
  },
  36973: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Qt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(1286),
      dt = Vt(1152),
      jt = Vt(1188);
    const Ht = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Xt = ["unlisted", "public", "whitelist", "private"];

    function Qt(tt) {
      let {
        visibility: et,
        onPick: Vt
      } = tt;
      const {
        t: qt
      } = (0, mt.H)(), Qt = (0, Ot.useRef)([]);
      return (0, jt.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": qt("worldSocial:whoCanJoin"),
        children: Xt.map(((tt, Ot) => {
          const mt = tt === et;
          return (0, jt.jsxs)("button", {
            ref: tt => {
              Qt.current[Ot] = tt
            },
            type: "button",
            className: Dt()("WorldSocialTile", {
              WorldSocialTileSelected: mt
            }),
            "aria-pressed": mt,
            tabIndex: mt ? 0 : -1,
            onKeyDown: tt => {
              ((tt, et) => {
                const Vt = "ArrowRight" === tt.key || "ArrowDown" === tt.key ? 1 : "ArrowLeft" === tt.key || "ArrowUp" === tt.key ? -1 : 0;
                var Ot;
                0 !== Vt && (tt.preventDefault(), null === (Ot = Qt.current[(et + Vt + Xt.length) % Xt.length]) || void 0 === Ot || Ot.focus())
              })(tt, Ot)
            },
            onClick: () => {
              Vt(tt)
            },
            children: [(0, jt.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, jt.jsx)(dt.b, {
                name: Ht[tt]
              })
            }), (0, jt.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, jt.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: qt(`worldSocial:${tt}`)
              }), (0, jt.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: qt(`worldSocial:${tt}Description`)
              })]
            })]
          }, tt)
        }))
      })
    }
  },
  36982: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt
    });
    var Ot = Vt(1286),
      qt = Vt(2742),
      Dt = Vt(4475),
      mt = Vt(1188);

    function dt(tt) {
      let {
        BQ: et,
        children: Vt,
        ...dt
      } = tt;
      const {
        t: jt
      } = (0, Ot.H)();
      return (0, mt.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          et.onChange(!et.on)
        },
        children: (0, mt.jsx)(qt.f, {
          ...dt,
          opensProfileCard: !1,
          children: (0, mt.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: tt => {
              tt.stopPropagation()
            },
            children: [Vt, (0, mt.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, mt.jsx)(Dt.b, {
                checked: et.on,
                disabled: !1,
                ariaLabel: jt("worldSocial:letJoin", {
                  playerName: dt.playerSocialPreview.name
                }),
                onChange: tt => {
                  et.onChange(tt.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36967: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => ft
    });
    var Ot = Vt(63),
      qt = Vt(1286),
      Dt = Vt(1950),
      mt = Vt(106),
      dt = Vt(26),
      jt = Vt(1583),
      Ht = Vt(2755),
      Xt = Vt(34278),
      Qt = Vt(1556),
      lt = Vt(1152),
      Et = Vt(1188);

    function ft(tt) {
      let {
        worldCode: et,
        message: Vt
      } = tt;
      const {
        t: ft
      } = (0, qt.H)(), {
        isTouchScreen: wt
      } = (0, dt.k)(["isTouchScreen"]), yt = mt.featureFlags.canUseInviteLinks, Nt = (0, Xt.k)(yt && null === Vt), [Mt, bt] = (0, Ht.k)(), Jt = (0, Ot.useRef)(null);
      if (null !== Vt) return (0, Et.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Et.jsx)(lt.b, {
          name: "lock"
        }), (0, Et.jsx)("span", {
          children: Vt
        })]
      });
      const Ct = yt ? Nt : et,
        ut = wt && yt && (0, Ht.e)();
      return (0, Et.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!yt && (0, Et.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: ft("worldSocial:worldCode")
        }), (0, Et.jsx)("input", {
          ref: Jt,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Ct && void 0 !== Ct ? Ct : "",
          "aria-label": ft(yt ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: tt => {
            tt.currentTarget.select()
          }
        }), (0, Et.jsxs)(Qt.f, {
          className: "WorldSocialCopy",
          disabled: null === Ct,
          onClick: () => {
            null !== Ct && (0, Ht.h)(Ct, {
              useShareSheet: ut,
              onOutcome: tt => {
                if ((0, jt.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== tt || yt ? tt : "code"
                  }), "copied" === tt) bt();
                else if ("failed" === tt) {
                  var et;
                  null === (et = Jt.current) || void 0 === et || et.focus(), Dt.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Et.jsx)(lt.b, {
            name: Mt ? "check" : ut ? "up-from-bracket" : "copy"
          }), " ", ft(Mt ? "general:copied" : ut ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36978: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Et,
      f: () => lt,
      j: () => Qt
    });
    var Ot = Vt(697),
      qt = Vt(1286),
      Dt = Vt(1737),
      mt = Vt(2742),
      dt = Vt(2693),
      jt = Vt(1556),
      Ht = Vt(36982),
      Xt = Vt(1188);

    function Qt(tt, et) {
      var Vt;
      return {
        isError: !1,
        name: tt,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== et && void 0 !== et ? et : {},
        nameColour: null !== (Vt = null === et || void 0 === et ? void 0 : et.nameColour) && void 0 !== Vt ? Vt : Ot.c,
        location: {
          status: "offline"
        }
      }
    }

    function lt(tt) {
      let {
        player: et,
        isFriend: Vt = !1,
        status: Ot,
        showLocation: jt = void 0 === Ot,
        BQ: Qt,
        onSendFriendRequest: lt,
        actions: Et,
        zIndex: ft
      } = tt;
      const {
        t: wt
      } = (0, qt.H)();
      let yt = Ot;
      null !== Qt && void 0 !== Qt && Qt.on && (yt = (0, Xt.jsxs)(Xt.Fragment, {
        children: [null !== Ot && void 0 !== Ot ? Ot : (0, Xt.jsx)(dt.e, {
          socialPreview: et
        }), (0, Xt.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", wt("worldSocial:canJoin")]
        })]
      }));
      const Nt = {
        playerSocialPreview: et,
        isFriend: Vt,
        hideFriendBadge: !0,
        onFriendRemoved: Vt ? tt => {
          Dt.e.removeFriendFromState(tt)
        } : void 0,
        status: yt,
        showLocation: jt,
        onSendFriendRequest: lt,
        zIndex: ft
      };
      return Qt ? (0, Xt.jsx)(Ht.c, {
        ...Nt,
        BQ: Qt,
        children: Et
      }) : (0, Xt.jsx)(mt.f, {
        ...Nt,
        opensProfileCard: !1,
        children: Et || void 0
      })
    }

    function Et(tt) {
      let {
        row: et,
        BQ: Vt,
        canInvite: Ot,
        invited: Dt,
        onInvite: mt,
        zIndex: dt
      } = tt;
      const {
        t: Ht
      } = (0, qt.H)(), Qt = "online" === et.place ? jt.f : jt.g;
      return (0, Xt.jsx)(lt, {
        player: et.friend,
        isFriend: !0,
        status: "here" === et.place ? Ht("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        BQ: Vt,
        zIndex: dt,
        actions: Ot && (0, Xt.jsx)(Qt, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Dt,
          onClick: mt,
          ariaLabel: `${Ht("worldSocial:invite")} ${et.friend.name}`,
          children: Ht(Dt ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36954: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      e: () => mt,
      f: () => Ht
    });
    var Ot = Vt(63),
      qt = Vt(4725),
      Dt = Vt(1950);

    function mt(tt) {
      const et = {
        lobbyName: tt,
        answer: null,
        response: qt.e.getSocialSettings(tt)
      };
      return et.response.then((tt => {
        et.answer = tt
      })), et
    }
    const dt = new Map;

    function jt(tt) {
      dt.set(tt.lobbyName, tt)
    }

    function Ht(tt) {
      const [et] = (0, Ot.useState)((() => function(tt) {
        var et;
        const Vt = null !== (et = dt.get(tt)) && void 0 !== et ? et : null;
        return null !== Vt && void 0 !== Vt && Vt.answer && "error" in Vt.answer ? null : Vt
      }(tt))), [Vt, mt] = (0, Ot.useState)((() => null !== et && void 0 !== et && et.answer && "settings" in et.answer ? et.answer.settings : null)), [jt, Ht] = (0, Ot.useState)(!0), [Xt, Qt] = (0, Ot.useState)(null !== Vt), lt = (0, Ot.useRef)(Vt);
      lt.current = Vt;
      const Et = (0, Ot.useRef)(0),
        ft = (0, Ot.useRef)(0),
        wt = (0, Ot.useRef)(!1),
        yt = (0, Ot.useRef)(!0),
        Nt = (0, Ot.useCallback)((async et => {
          const Vt = ++Et.current,
            Ot = await (null !== et && void 0 !== et ? et : qt.e.getSocialSettings(tt));
          yt.current && Vt === Et.current && (Qt(!0), Ht(!1), "error" in Ot || mt(Ot.settings))
        }), [tt]),
        Mt = (0, Ot.useCallback)((() => {
          Ht(!0), Nt()
        }), [Nt]),
        bt = (0, Ot.useCallback)((() => {
          ft.current > 0 ? wt.current = !0 : Nt()
        }), [Nt]);
      (0, Ot.useEffect)((() => (yt.current = !0, dt.delete(tt), Ht(!0), Nt(null === et || void 0 === et ? void 0 : et.response), () => {
        yt.current = !1
      })), [Nt, tt, et]);
      const Jt = tt => {
        Et.current++, Ht(!1), lt.current = tt, mt(tt)
      };
      return {
        settings: Vt,
        loading: jt,
        answered: Xt,
        retry: Mt,
        refresh: bt,
        change: async function(et, Vt) {
          let {
            quiet: Ot = !1,
            onAnswer: mt
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const dt = lt.current;
          if (null === dt) return !1;
          Jt(Vt(dt)), ft.current > 0 && (wt.current = !0), ft.current++;
          const jt = await qt.e.setSocialSettings(tt, et);
          ft.current--;
          const Ht = !("error" in jt);
          if (!yt.current) return Ht;
          if (null === mt || void 0 === mt || mt(jt), Ot);
          else if ("error" in jt) Dt.f.showMessage({
            translationKey: jt.error
          });
          else
            for (const tt of jt.notFound) Dt.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: tt
              }
            });
          if (ft.current > 0) return Ht;
          const Xt = wt.current;
          return wt.current = !1, !Xt && "settings" in jt ? Jt(jt.settings) : (Xt || Jt(dt), Nt()), Ht
        }
      }
    }
  },
  36988: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      i: () => Dt
    });
    var Ot = Vt(184);
    const qt = new Map;

    function Dt(tt, et) {
      var Vt;
      const Ot = null !== (Vt = qt.get(tt)) && void 0 !== Vt ? Vt : new Map;
      Ot.set(et, Date.now()), qt.set(tt, Ot)
    }

    function mt(tt) {
      const et = qt.get(tt);
      if (!et) return [];
      const Vt = Date.now();
      for (const [qt, Dt] of et) Vt - Dt >= Ot.o && et.delete(qt);
      return [...et.keys()]
    }
  },
  36959: (tt, et, Vt) => {
    function Ot(tt, et) {
      const Vt = et.toLowerCase();
      for (const Ot of tt)
        if (Ot.toLowerCase() === Vt) return !0;
      return !1
    }

    function qt(tt, et, Vt) {
      const qt = [],
        Dt = [],
        mt = [];
      for (const dt of tt) !dt.isError && dt.name && ("inGame" === dt.location.status && dt.location.inLobbyName === et || Ot(Vt, dt.name) ? Dt.push({
        friend: dt,
        place: "here"
      }) : "offline" === dt.location.status ? mt.push({
        friend: dt,
        place: "offline"
      }) : qt.push({
        friend: dt,
        place: "online"
      }));
      return [...qt, ...Dt, ...mt]
    }

    function Dt(tt, et, Vt) {
      const qt = [],
        Dt = tt.flatMap((tt => "here" === tt.place ? [tt.friend.name] : []));
      for (const mt of [...Dt, ...et]) Ot(qt, mt) || Ot(Vt, mt) || qt.push(mt);
      return qt
    }

    function mt(tt, et) {
      return null === tt || void 0 === tt || !tt.canManage || Ot(tt.whitelist, et) ? "none" : "whitelist" === tt.visibility ? "required" : "quiet"
    }

    function dt(tt) {
      if (null === tt) return !0;
      const {
        visibility: et
      } = tt;
      return "public" === et || "unlisted" === et || "whitelist" === et && tt.canManage
    }

    function jt(tt, et, Vt) {
      if (Vt) {
        const Vt = et.filter((et => !Ot(tt.whitelist, et)));
        return {
          ...tt,
          whitelist: [...tt.whitelist, ...Vt]
        }
      }
      return {
        ...tt,
        whitelist: tt.whitelist.filter((tt => !Ot(et, tt)))
      }
    }

    function Ht(tt, et) {
      const Vt = [];
      for (let Ot = 0; Ot < tt.length; Ot += et) Vt.push(tt.slice(Ot, Ot + et));
      return Vt
    }
    Vt.d(et, {
      b: () => dt,
      e: () => Dt,
      f: () => qt,
      j: () => Ot,
      m: () => Ht,
      o: () => mt,
      r: () => jt
    })
  },
  8972: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      h: () => Dt
    });
    var Ot = Vt(2082);
    const qt = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Dt = tt => "string" === typeof tt.icon && "" !== tt.icon && "string" === typeof tt.keycode && qt.test(tt.keycode),
      mt = tt => "Space" === tt ? "_" : Ot.j[tt]
  },
  9032: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    var Ot = Vt(26);

    function qt() {
      return !Ot.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9035: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => lt,
      D: () => Et,
      c: () => Dt,
      e: () => dt,
      f: () => Ht,
      i: () => jt,
      j: () => mt,
      m: () => qt,
      q: () => Ot,
      t: () => ft,
      u: () => Qt,
      x: () => Xt
    });
    const Ot = 14,
      qt = 6,
      Dt = (Ot + qt) / 2,
      mt = 200,
      dt = mt / 2,
      jt = mt / 2 - 1,
      Ht = qt / Ot * (mt / 2),
      Xt = (tt, et) => -Math.PI / 2 + 2 * tt * Math.PI / et,
      Qt = (tt, et, Vt) => {
        const Ot = 2 * Math.PI / Vt;
        return (Math.round((Math.atan2(et, tt) + Math.PI / 2) / Ot) % Vt + Vt) % Vt
      },
      lt = .5,
      Et = (tt, et, Vt) => Math.hypot(tt.x, tt.y) < lt ? Vt : Qt(tt.x, tt.y, et),
      ft = (tt, et, Vt, Ot, qt) => {
        const Dt = Math.PI / et,
          mt = Xt(tt, et),
          dt = mt - Dt,
          jt = mt + Dt,
          Ht = (tt, et) => `${Vt+tt*Math.cos(et)} ${Vt+tt*Math.sin(et)}`;
        return [`M ${Ht(Ot,dt)}`, `L ${Ht(qt,dt)}`, `A ${qt} ${qt} 0 0 1 ${Ht(qt,jt)}`, `L ${Ht(Ot,jt)}`, `A ${Ot} ${Ot} 0 0 0 ${Ht(Ot,dt)}`, "Z"].join(" ")
      }
  },
  37126: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt
    });
    var Ot = Vt(26),
      qt = Vt(1410);

    function Dt() {
      const {
        clientEscMenuOptions: tt
      } = (0, Ot.k)(["clientEscMenuOptions"]);
      return (0, qt.B)() && tt.showChat
    }
  },
  9056: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt
    });
    var Ot = Vt(63),
      qt = Vt(9005),
      Dt = Vt(2498);

    function mt() {
      const tt = (0, Dt.i)("shopInfo"),
        [, et] = (0, Ot.useReducer)((tt => tt + 1), 0);
      return (0, Dt.h)("shopInfo", et), !(0, qt.c)(tt)
    }
  },
  37252: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt
    });
    var Ot = Vt(63),
      qt = Vt(2498);

    function Dt() {
      const tt = (0, qt.i)("lobbyLeaderboardInfo");
      return (0, Ot.useMemo)((() => function(tt) {
        if (null === tt) return null;
        const et = Object.entries(tt),
          Vt = et.filter((tt => {
            let [, et] = tt;
            return void 0 !== et
          }));
        if (Vt.length === et.length) return tt;
        const Ot = Object.fromEntries(Vt),
          qt = Object.keys(tt).filter((tt => !Object.hasOwn(Ot, tt)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${qt.join(", ")}`), Ot
      }(tt)), [tt])
    }
  },
  37065: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt
    });
    var Ot = Vt(2848),
      qt = Vt(3751),
      Dt = Vt(2990);
    const mt = ["Unable to create vertex buffer"];
    let dt = {};

    function jt(tt, et) {
      const Vt = new Date;
      console.error(`${Vt.getUTCHours()}:${Vt.getUTCMinutes()}:${Vt.getUTCSeconds()}`, tt, et, null === et || void 0 === et ? void 0 : et.stack), mt.includes(null === et || void 0 === et ? void 0 : et.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, Ot.c)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${et.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, Dt.logError)("warning", `${tt}\n ${et} "\n" ${null===et||void 0===et?void 0:et.stack}`);
      const qt = tt + et + (null === et || void 0 === et ? void 0 : et.stack);
      qt in dt || ((0, Dt.logError)("error", `${tt}\n ${et} "\n" ${null===et||void 0===et?void 0:et.stack}`), dt[qt] = !0)
    }(0, qt.onGameReset)((() => {
      dt = {}
    }))
  },
  5010: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Lt,
      f: () => Zt
    });
    var Ot = Vt(5015),
      qt = Vt(377);
    const Dt = 120,
      mt = 260,
      dt = 1.15,
      jt = 1.2,
      Ht = 2,
      Xt = 1.08,
      Qt = .8,
      lt = .95,
      Et = 8,
      ft = "[\"')\\]\u300d\u300f\uff09]*",
      wt = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ft}$`),
      yt = new RegExp(`[?\uff1f]${ft}$`),
      Nt = new RegExp(`[!\uff01]${ft}$`),
      Mt = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      bt = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Jt = new RegExp(`[${bt}]`),
      Ct = new RegExp(`[${bt}]|[^${bt}]+`, "g"),
      ut = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Kt(tt) {
      let et = 2166136261;
      for (let Vt = 0; Vt < tt.length; Vt++) et ^= tt.charCodeAt(Vt), et = Math.imul(et, 16777619);
      return (et >>> 0) / 4294967295 * 2 - 1
    }

    function ht(tt) {
      var et;
      if (Jt.test(tt)) return 1;
      const Vt = tt.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Ot = Vt.replace(/[^0-9]/g, "");
      if (Ot.length > 0 && !/\p{L}/u.test(Vt)) return Math.min(Ot.length, 4);
      const qt = null !== (et = Vt.match(ut)) && void 0 !== et ? et : [];
      if (0 === qt.length) {
        var Dt, mt;
        const tt = null !== (Dt = null === (mt = Vt.match(/\p{L}/gu)) || void 0 === mt ? void 0 : mt.length) && void 0 !== Dt ? Dt : 0;
        return 0 === tt ? 0 : Math.min(Math.max(1, Math.round(tt / 2.5)), Et)
      }
      const dt = Vt.replace(/[^\p{L}]/gu, ""),
        jt = qt.length > 1 && "e" === qt.at(-1) && dt.endsWith("e") && !dt.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(tt.replace(/[^\p{L}]/gu, ""));
      return Math.min(qt.length - (jt ? 1 : 0), Et)
    }

    function vt(tt) {
      return tt.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Wt(tt) {
      const et = tt.replace(/[^\p{L}]/gu, "");
      return et.length >= 2 && et === et.toUpperCase() && et !== et.toLowerCase()
    }

    function St(tt, et) {
      var Vt;
      const Et = et && (0, Ot.i)(et),
        ft = null !== (Vt = null === Et || void 0 === Et ? void 0 : Et.syllableMs) && void 0 !== Vt ? Vt : Ot.c,
        bt = function(tt) {
          const et = [];
          for (const Ot of (0, qt.Ob)(tt))
            if ("string" === typeof Ot)
              for (const tt of Ot.split(/(\s+)/)) {
                if ("" === tt) continue;
                if (/^\s+$/.test(tt)) {
                  et.push({
                    kind: "space",
                    text: tt
                  });
                  continue
                }
                if (!Jt.test(tt)) {
                  et.push({
                    kind: "word",
                    text: tt,
                    delayMs: 0
                  });
                  continue
                }
                let Ot = !0;
                for (const qt of null !== (Vt = tt.match(Ct)) && void 0 !== Vt ? Vt : []) {
                  var Vt;
                  const tt = et.at(-1);
                  Ot || "word" !== (null === tt || void 0 === tt ? void 0 : tt.kind) || Jt.test(qt) || /[\p{L}\p{N}]/u.test(qt) ? (Ot || et.push({
                    kind: "space",
                    text: "\u200b"
                  }), et.push({
                    kind: "word",
                    text: qt,
                    delayMs: 0
                  }), Ot = !1) : tt.text += qt
                }
              } else et.push({
                kind: "icon",
                text: Ot.icon,
                delayMs: 0
              });
          return et
        }(tt),
        ut = [];
      let St = [];
      for (const Ot of bt) "space" !== Ot.kind && (St.push(Ot), wt.test(Ot.text) && (ut.push(St), St = []));
      ut.push(St);
      const ct = [];
      let Rt = 0;
      for (const Ot of ut) {
        var It, Pt;
        const tt = null !== (It = null === (Pt = Ot.at(-1)) || void 0 === Pt ? void 0 : Pt.text) && void 0 !== It ? It : "",
          et = yt.test(tt),
          Vt = Nt.test(tt),
          qt = Ot.map((tt => "word" === tt.kind ? ht(tt.text) : 1)),
          bt = qt.findLastIndex((tt => tt > 0));
        for (const [yt, Nt] of Ot.entries()) {
          const tt = "word" === Nt.kind,
            Ot = qt[yt];
          Nt.delayMs = Rt;
          for (let qt = 0; Et && qt < Ot; qt++) {
            const {
              intonation: Dt
            } = Et;
            let mt = bt > 0 ? -Dt.declineSemitones * (yt / bt) : 0;
            mt += Kt(`${vt(Nt.text)}|${qt}`) * Dt.variationSemitones;
            const wt = Math.min(1, Dt.variationSemitones);
            let Mt = Et.glideSemitones,
              Jt = 1;
            Vt && (mt += Dt.exclaimLiftSemitones, Jt *= dt), et && yt === bt && (mt += Dt.questionRiseSemitones * (Ot > 1 ? .5 + .5 * qt / (Ot - 1) : 1), qt === Ot - 1 && (Mt = Math.abs(Mt) + Dt.questionRiseSemitones / 2)), tt && Wt(Nt.text) && (mt += Ht * wt, Jt *= jt), Ot > 1 && 0 === qt && (mt += Qt * wt, Jt *= Xt), ct.push({
              atMs: Rt + qt * ft,
              semitones: mt,
              glideSemitones: Mt,
              durationMs: qt < Ot - 1 ? Math.min(Et.durationMs, ft * lt) : Et.durationMs,
              level: Jt
            })
          }
          Rt += Ot * ft + (wt.test(Nt.text) ? mt : Mt.test(Nt.text) ? Dt : 0)
        }
      }
      return {
        pieces: bt.map((tt => "space" === tt.kind ? tt : "icon" === tt.kind ? {
          kind: "icon",
          icon: tt.text,
          delayMs: tt.delayMs
        } : {
          kind: "word",
          text: tt.text,
          delayMs: tt.delayMs
        })),
        blips: ct
      }
    }
    var ct = Vt(1286),
      Rt = Vt(1338),
      It = Vt(2026);

    function Pt(tt) {
      if ("string" === typeof tt) return tt;
      const et = Rt.e.get().getCurrentLanguageCode();
      return (0, ct.t)(et, tt.translationKey, (0, ct.p)(tt.params, It.d.shown))
    }

    function Zt(tt) {
      const et = void 0 === tt.voice ? null : (0, Ot.l)(tt.voice),
        Vt = et && (0, Ot.i)(et);
      return {
        plan: St(Pt(tt.line), Vt),
        synth: Vt
      }
    }

    function Lt(tt) {
      const et = [];
      let Vt = [];
      for (const [qt, Dt] of tt.entries()) {
        var Ot;
        "space" === Dt.kind && (" " !== Dt.text || "icon" !== (null === (Ot = tt[qt + 1]) || void 0 === Ot ? void 0 : Ot.kind)) ? (Vt.length > 0 && et.push(Vt), et.push([Dt]), Vt = []) : Vt.push(Dt)
      }
      return Vt.length > 0 && et.push(Vt), et
    }
  },
  36932: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    const Ot = [{
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

    function qt(tt, et, Vt) {
      const qt = Math.abs(tt - et),
        Dt = Date.now() - Vt;
      for (const mt of Ot)
        if (tt < mt.maxDist) return qt >= mt.hardUpdateDist || Dt > mt.timeBetweenSoftChecks && qt >= mt.softUpdateDist;
      return !1
    }
  },
  37226: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Qt,
      g: () => lt
    });
    var Ot = Vt(710),
      qt = Vt(39),
      Dt = Vt(37182);
    const mt = "replayFileKeptForReload",
      dt = "replayFileKeptForReloadAt",
      jt = "replayFileKeptForReloadTab",
      Ht = 3e5,
      Xt = 5e3;
    async function Qt(tt, et) {
      const Vt = Date.now(),
        Dt = {
          at: Vt,
          bytes: tt,
          source: et
        },
        Ht = await Promise.race([(async () => await qt.c.setItem(dt, Vt) && qt.c.setItem(mt, Dt))(), (0, Ot.G)(Xt).then((() => !1))]);
      Ht || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const Qt = {
        at: Vt,
        hE: Ht
      };
      qt.h.setItem(jt, Qt)
    }
    async function lt() {
      var tt;
      const et = qt.h.getItem(jt);
      null !== et && qt.h.removeItem(jt);
      const Vt = Date.now(),
        Ot = await qt.c.getItem(dt),
        Xt = null !== et && Vt - et.at <= Ht,
        Qt = null !== et && Ot === et.at;
      let lt = null;
      if (null !== Ot && (Qt || ("number" !== typeof Ot || Vt - Ot > Ht)) && (lt = Xt && Qt && et.hE ? await qt.c.getItem(mt) : null, await Promise.all([qt.c.removeItem(dt), qt.c.removeItem(mt)])), !Xt) return null;
      if ((null === (tt = lt) || void 0 === tt ? void 0 : tt.at) !== et.at) throw new Error(Dt.d.replayNotKept.text);
      return {
        bytes: lt.bytes,
        source: lt.source
      }
    }
  },
  37220: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot,
      g: () => Dt,
      j: () => qt
    });
    const Ot = [9];

    function qt(tt) {
      return Ot.includes(tt)
    }

    function Dt(tt) {
      return null !== tt && tt >= 3 && tt < Ot[0]
    }
  },
  37185: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      f: () => Dt,
      i: () => qt
    });
    const Ot = [.25, .5, 1, 2, 4, 8, 16];

    function qt(tt, et) {
      const Vt = Ot;
      let qt = Vt.indexOf(tt);
      return -1 === qt && (qt = Vt.findIndex((et => et >= tt)), -1 === qt && (qt = Vt.length - 1)), "up" === et ? Vt[Math.min(qt + 1, Vt.length - 1)] : Vt[Math.max(qt - 1, 0)]
    }

    function Dt(tt) {
      return tt <= Ot[0]
    }

    function mt(tt) {
      return tt >= Ot[Ot.length - 1]
    }
  },
  37238: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot,
      g: () => qt
    });
    const Ot = "data-replay-ui-active",
      qt = [{
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
  37243: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht,
      g: () => Qt,
      i: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(37238);

    function mt() {
      const tt = {};
      for (const {
          group: et
        }
        of Dt.g) tt[et] = !0;
      return tt
    }
    let dt = mt();

    function jt() {
      qt.j.sw("replayViewer|uiVisibilityChanged")
    }

    function Ht() {
      return dt
    }

    function Xt(tt, et) {
      dt[tt] !== et && (dt = {
        ...dt,
        [tt]: et
      }, "nametag" === tt && Ot.b.set({
        areNametagsHidden: !et
      }), jt())
    }

    function Qt() {
      dt = mt(), Ot.b.set({
        areNametagsHidden: !1
      }), jt()
    }
  },
  8964: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      g: () => mt,
      k: () => dt,
      m: () => qt
    });
    var Ot = Vt(8972);
    const qt = tt => {
        const et = [];
        tt.holdingGun && et.push({
          kind: "reload"
        }), tt.touchscreenActionButton && et.push({
          kind: "touchButton",
          label: tt.touchscreenActionButton
        });
        for (const Dt of null !== (Vt = null === (qt = tt.customButtons) || void 0 === qt ? void 0 : qt.filter(Ot.h)) && void 0 !== Vt ? Vt : []) {
          var Vt, qt;
          et.push({
            kind: "customButton",
            id: Dt.id,
            icon: Dt.icon,
            description: Dt.description
          })
        }
        return et
      },
      Dt = tt => tt.length >= 2,
      mt = tt => "specialAction" !== tt.kind,
      dt = (tt, et) => {
        if (null === tt || null === et) return tt === et;
        if (tt.kind !== et.kind) return !1;
        switch (tt.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return tt.action === et.action;
          case "customButton":
            return tt.id === et.id && tt.icon === et.icon;
          case "touchButton":
            return tt.label === et.label
        }
      }
  },
  8959: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      h: () => Et,
      l: () => Qt,
      p: () => ft
    });
    var Ot = Vt(63),
      qt = Vt(31),
      Dt = Vt(1554),
      mt = Vt(8964),
      dt = Vt(8980);
    let jt = null;
    const Ht = () => jt,
      Xt = tt => {
        (0, mt.k)(jt, tt) || (jt = tt, qt.j.sw(dt.e, jt))
      },
      Qt = () => {
        const [tt, et] = (0, Ot.useState)(Ht);
        return (0, Dt.f)(dt.e, et), tt
      };
    let lt = !1;
    const Et = tt => {
        tt !== lt && (lt = tt, qt.j.sw(dt.i, tt))
      },
      ft = () => {
        const [tt, et] = (0, Ot.useState)(lt);
        return (0, Dt.f)(dt.i, et), tt
      }
  },
  8980: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      e: () => Ot,
      i: () => qt,
      k: () => dt,
      m: () => jt,
      n: () => Ht,
      p: () => mt
    });
    const Ot = "controllerActionHintChanged",
      qt = "controllerActionWheelHintChanged",
      Dt = "controllerOpenChat",
      mt = "controllerSneakToggledChanged",
      dt = "controllerAttackLatchedChanged",
      jt = "controllerDropStackHoldChanged",
      Ht = "controllerPickBlockHintChanged"
  },
  8908: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      g: () => Dt,
      k: () => jt,
      l: () => dt
    });
    var Ot = Vt(1554),
      qt = Vt(1513);
    const Dt = "controllerInventoryCursorChanged",
      mt = {
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
      dt = () => {
        var tt, et;
        return (0, Ot.h)(Dt, null !== (tt = null === (et = (0, qt.g)()) || void 0 === et ? void 0 : et.getInventoryCursorState()) && void 0 !== tt ? tt : mt)
      },
      jt = () => {
        var tt, et;
        return null !== (tt = null === (et = (0, qt.g)()) || void 0 === et ? void 0 : et.isPadSteppingSlots()) && void 0 !== tt && tt
      }
  },
  8899: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => lt,
      i: () => dt,
      m: () => jt,
      o: () => mt,
      p: () => Dt,
      r: () => Xt,
      t: () => Qt
    });
    let Ot = null;
    const qt = new Set,
      Dt = tt => (Ot = tt, () => {
        if (Ot === tt) {
          Ot = null;
          for (const tt of qt) tt()
        }
      }),
      mt = tt => (qt.add(tt), () => {
        qt.delete(tt)
      }),
      dt = () => Ot,
      jt = () => null !== Ot;
    let Ht = null;
    const Xt = tt => {
        Ht = tt
      },
      Qt = () => {
        const tt = Ht;
        return Ht = null, tt
      },
      lt = (tt, et) => {
        var Vt, Ot;
        return null !== (Vt = null !== (Ot = tt.find((tt => tt.element === et))) && void 0 !== Ot ? Ot : tt.find((tt => tt.element.contains(et)))) && void 0 !== Vt ? Vt : null
      }
  },
  8912: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      h: () => mt
    });
    var Ot = Vt(63);
    const qt = new WeakMap,
      Dt = tt => {
        var et, Vt;
        return null !== (et = null === (Vt = qt.get(tt)) || void 0 === Vt ? void 0 : Vt.current) && void 0 !== et ? et : null
      },
      mt = (tt, et) => {
        const Vt = (0, Ot.useRef)(et);
        Vt.current = et;
        const Dt = (0, Ot.useRef)(null);
        (0, Ot.useEffect)((() => {
          const et = tt.current,
            Ot = Dt.current;
          et !== Ot && (Ot && qt.get(Ot) === Vt && qt.delete(Ot), Dt.current = et, et && qt.set(et, Vt))
        })), (0, Ot.useEffect)((() => () => {
          const tt = Dt.current;
          tt && qt.get(tt) === Vt && qt.delete(tt), Dt.current = null
        }), [])
      }
  },
  9050: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt,
      e: () => Ht,
      f: () => Qt,
      j: () => Xt,
      l: () => jt,
      n: () => Et
    });
    var Ot = Vt(31),
      qt = Vt(2096),
      Dt = Vt(1513),
      mt = Vt(1492);
    const dt = tt => {
        var et, Vt;
        return (0, mt.j)() && null !== (et = null === (Vt = (0, Dt.g)()) || void 0 === Vt ? void 0 : Vt.getGlyphForNoaAction(tt)) && void 0 !== et ? et : null
      },
      jt = "controllerGlyph:",
      Ht = tt => {
        var et, Vt;
        return null !== (et = null === (Vt = (0, Dt.g)()) || void 0 === Vt ? void 0 : Vt.getPadGlyphIconName(tt)) && void 0 !== et ? et : `${jt}xbox/${tt}`
      },
      Xt = tt => tt.startsWith(jt),
      Qt = tt => {
        var et, Vt;
        return Xt(tt) && null !== (et = null === (Vt = (0, Dt.g)()) || void 0 === Vt ? void 0 : Vt.getPadGlyphIconUrl(tt)) && void 0 !== et ? et : null
      },
      lt = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", mt.c, qt.f, qt.e],
      Et = tt => {
        const et = lt.map((et => Ot.j.subscribe(et, tt)));
        return () => {
          for (const tt of et) Ot.j.unsubscribe(tt)
        }
      }
  },
  8936: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      g: () => qt
    });
    let Ot = null;
    const qt = function(tt) {
        const et = {
          cycle: tt,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ot = et, () => {
          Ot === et && (Ot = null)
        }
      },
      Dt = () => {
        var tt;
        return null !== (tt = Ot) && void 0 !== tt && tt.canCycle() ? Ot.cycle : null
      }
  },
  9039: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt,
      g: () => mt,
      h: () => Dt,
      i: () => Ot,
      l: () => dt,
      o: () => Ht,
      r: () => Xt
    });
    const Ot = "controllerActionWheelOpen",
      qt = "controllerActionWheelAim",
      Dt = "controllerActionWheelCommit",
      mt = "controllerActionWheelClose",
      dt = "controllerActionWheelPick";
    let jt = !1;
    const Ht = () => jt,
      Xt = tt => {
        jt = tt
      }
  },
  9037: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      e: () => qt
    });
    let Ot = 0;
    const qt = () => {
        Ot++
      },
      Dt = () => Ot
  },
  8929: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      d: () => qt,
      e: () => mt,
      g: () => Dt,
      j: () => Ot,
      n: () => Ht
    });
    const Ot = "controllerQuickChatWheelOpen",
      qt = "controllerQuickChatWheelAim",
      Dt = "controllerQuickChatWheelCommit",
      mt = "controllerQuickChatWheelClose";
    let dt = !1;
    const jt = () => dt,
      Ht = tt => {
        dt = tt
      }
  },
  37060: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt,
      c: () => Dt
    });
    const Ot = new Map;

    function qt(tt) {
      var et;
      return null === tt ? null : null !== (et = Ot.get(tt)) && void 0 !== et ? et : null
    }

    function Dt(tt, et) {
      return Ot.set(tt, et), () => {
        Ot.get(tt) === et && Ot.delete(tt)
      }
    }
  },
  37211: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => tV,
      g: () => ne
    });
    var Ot = Vt(4339),
      qt = Vt(710),
      Dt = Vt(3800),
      mt = Vt(3824),
      dt = Vt.n(mt);
    const jt = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      Ht = "EV_boolean",
      Xt = "EV_double",
      Qt = "EV_string",
      lt = "EV_doubleArr",
      Et = "EV_armour",
      ft = "EV_other",
      wt = "EV_cosmetics",
      yt = "OEV_boolean",
      Nt = "OEV_int",
      Mt = "OEV_double",
      bt = "OEV_string",
      Jt = "OEV_stringArr",
      Ct = "OEV_meshScaling",
      ut = "IV_int",
      Kt = "IV_string",
      ht = "IV_doubleArr",
      vt = "IV_double",
      Wt = "HV_int",
      St = "HV_slots",
      ct = "EnvV_string",
      Rt = "EnvV_double",
      It = "EnvV_doubleArr",
      Pt = "EnvV_boolean",
      Zt = {
        type: Qt,
        name: Qt,
        position: lt,
        rotation: lt,
        scale: Xt,
        speed: Xt,
        jumping: Ht,
        crouching: Ht,
        cameraPitch: Xt,
        armSwinging: Ht,
        heldItemName: Qt,
        heldItemEnchantmentTier: Qt,
        pose: Qt,
        followingEId: Qt,
        ridingVehicleEId: Qt,
        leaderboardTop: Qt,
        meshKind: Qt,
        meshOpts: Qt,
        followingOffset: lt,
        shouldMatchFollowingEntityRotation: Ht,
        meshOffset: lt,
        baseRenderHeading: Xt,
        armour: Et,
        dL: ft,
        playerCustomisations: wt,
        variation: Qt,
        metaInfo: Qt,
        soundName: Qt,
        volume: Xt,
        refDistance: Xt,
        maxHearDist: Xt,
        rate: Xt,
        aiState: Qt
      },
      Lt = {
        opacity: Mt,
        zIndex: Nt,
        overlayColour: bt,
        canSee: yt,
        meshScaling: Ct,
        nameTagInfo: bt,
        multilineTextBox: bt,
        hasPriorityNametag: yt,
        ranks: Jt,
        nameColour: bt,
        _isAlive: yt,
        _invisibleEffect: yt,
        _invincible: yt,
        killfeedColour: bt,
        hideNameSeed: Nt,
        _glowingEffect: yt,
        lockHeadToBody: yt
      },
      Ft = {
        itemName: Kt,
        amount: ut,
        position: ht,
        size: vt,
        attributes: Kt
      },
      kt = {
        skyBox: ct,
        fogColourOverride: ct,
        fogChunkDistanceOverride: Rt,
        cameraTint: It,
        fogOnSkybox: Pt,
        fogBlockDistanceOverride: Rt
      },
      Gt = {
        type: "array",
        items: "double"
      },
      zt = {
        type: "array",
        items: "int"
      },
      ot = {
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
      rt = {
        type: "map",
        values: Gt
      };

    function Ut(tt, et) {
      return {
        type: "record",
        name: tt,
        fields: [{
          name: "x",
          type: et
        }]
      }
    }
    const At = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Ut(yt, "boolean"), Ut(Nt, "int"), Ut(Mt, "double"), Ut(bt, "string"), Ut(Jt, {
              type: "array",
              items: "string"
            }), Ut(Ct, rt)]
          }]
        }
      },
      it = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Ut(Ht, "boolean"), Ut(Xt, "double"), Ut(Qt, "string"), Ut(lt, Gt), Ut(Et, ot), Ut(ft, At), Ut(wt, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      Yt = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Ut(ut, "int"), Ut(Kt, "string"), Ut(vt, "double"), Ut(ht, Gt)]
          }]
        }
      },
      Bt = {
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
      pt = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", Ut(Wt, "int"), Ut(St, Bt)]
        }]
      },
      xt = {
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
      Tt = {
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
      gt = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Ut(ct, "string"), Ut(Rt, "double"), Ut(It, Gt), Ut(Pt, "boolean")]
          }]
        }
      },
      st = [{
        name: "fR",
        type: "record",
        fields: [{
          name: "pos",
          type: zt
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
          type: zt
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
      nt = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "tt",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "Ot",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "qt",
              type: ["null", "string", Gt],
              default: null
            }, {
              name: "Dt",
              type: ["null", "double"],
              default: null
            }, {
              name: "dt",
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
          name: "pO",
          type: "string"
        }, {
          name: "xO",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "TO",
          type: "double"
        }, {
          name: "gO",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "WV",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: Gt
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "Ft",
          type: "string"
        }, {
          name: "Fe",
          type: ["null", "double"],
          default: null
        }, {
          name: "ke",
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
          name: "oD",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "rD",
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
      te = [{
        name: "position",
        type: Gt
      }, {
        name: "direction",
        type: Gt
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

    function ee() {
      const tt = [{
        name: "entities",
        type: {
          type: "map",
          values: it
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: Yt
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: te
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
              items: pt
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", xt],
        default: null
      }];
      return tt.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "Ft",
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
      }), tt.push({
        name: "uiElements",
        type: Tt
      }, {
        name: "environment",
        type: gt
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: st
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: nt
        }
      }), tt
    }
    const Ve = {
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
                name: "BQ",
                type: "int"
              }, {
                name: "position",
                type: Gt
              }, {
                name: "direction",
                type: Gt
              }, {
                name: "easing",
                type: Gt
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
    let Oe;

    function qe(tt) {
      if (9 === tt) return Oe ??= (et = [{
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
            name: "bI",
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
              type: zt
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
            fields: ee()
          }
        }
      }, Ve], dt().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: et
      }, {
        tE: Object.create(null)
      })), Oe;
      var et
    }
    var De = Vt(2915);
    let me, de, je, He;
    const Xe = 12;
    var Qe, le;
    const Ee = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, null, 1023, 65536, 10, 55296, 56320, 127, 128, 16, 31, 15, 18, 192, !1, 224, 240, 136, 2, 146, 4, !0, 147, 148, 143, 56319, 64512, 65535, 57343, 4294967168, 4294965248, 4294901760, 4292870144, 2048, 248, 1114111, 5, 11, 9];

    function fe(tt) {
      return typeof qV !== Ee[5] && qV ? (new qV).decode(new DV(tt)) : typeof mV !== Ee[5] && mV ? mV.from(tt).toString("utf-8") : HV(tt)
    }

    function we() {}

    function ye() {
      ye = function() {}
    }
    var Ne, ae;
    ye(Qe = {}, le = ['G(b<58h,PJ`D<?=KS3)To|pr#Gf<A{$XF(FlW~(aWw|HZ{)"9Y', "}ffOP>KK+::[/x42J3mEW>$Z", "@>82&M#Q:Pf(exyx`^e,=BS", "V(<~:)Ex$>3~4`D2mQ6%c=Sa~d5U;E", "oP#,!|BrF3jc[cl1C#!~j}S", "iF9ICgln1H|FV/$x;?6%N4[WRHxiu`wxb4wFt>F~gP;[Y", '~I)TQ$xZ;fAFLi;p`$m"R$wQeRxq/XYX', ")B,WA5r_v?", "13C&uM;,x+kNXM{n,A{P}+?x7Jzv.`OO", 'nfVI*ulr.wAD}?B`"PU<?/TU/Ga}c?PgT9cC#(S', 'v"aWrIS', '$g2"GH#a(Qa10{M{uN]P#}"W*R', "/:9O*u[W(0C_exeXDIQ,#A1y!?!|T)w!s:+[neAZT", "]iT}ZACaW_H?(r3s_M*qJ8wzP+2l+eL!iL8@GvDO8R.N?%_sTHE2~}IJT", ';$xaW)/oNJ%>2ZLn7t="3`6Y', 'T^Jv$UzA0Q;OAFt{SGN^"', 'x32^INpoiQd(9/d`:"9l6MDOvdQaElznhp4IzW*Z', "xL6EJ8:nrR2ll%72v#Hqp8lo<?n}6L:1*IqW%5MG%Q", "zInqY=QCD+F@wLzmCQcOOel,O?_+Kl?", "H2m,Z)^nWwh7BE`2%gy9QzKQ0JoyR9)gn:1l9D;6<$B?)o+O#IgvZ(,Y", '|"y2y4%|j^*p&*jXj"MW98}Og^o0>i]OyPo[PgAaJJ3=R/KR', "pM9v#k|q=3", 'O35I=%JJFHCP[M6"aL5T~yu,h__p;X,7e7i', 'O#0C@43rV$t1*3]"B#62}=)g41rxxlG"atfvKH#R^:L"wl"po75[Q', "xL@TrsQWHL;w$__JO:ND.`Lxi", "{P1qlP4a&Rg:kl.O7IS8U+2O]1", "kcf,C=_{?cY~ucQ9zi$2&oO,v$ZkGxbJ}i$,8@;Ysw:CY*GpA#v9A|(Z", "IMFkd}?A]1;{/k?f", "EHM^;&yn>+PNdl]!+Mx~0(WaLUK", "AM0Ihu~_M_T=3MepzNL}xGGo41", '23zME}(AFLR+"u/sWGo<EUh,t$0DQkxoaA/IlK@AD?7D]rK28$8"*%7r=R}', "dM4IsojneUnDBF7{qtsFQ(Ex)^i~vE", "TPb<M/S", "{4)Uq4=O@UFcY", "bM*PLvt,:Pi=C*Oo:gEOzWS", 'TQ(P98rJ/Lw||ioRAK%C1W0+|RW"d%6naA1q5G1Y', 'KIv4BHYnh+`@h(zm[OrF<4$q"h2};x|9G(HW3`%a`_x}p`+"y!i', "+KaWig7o41|Ai5s`ecb}!~PZ", 'b2"<MLfCZPA,|o&12AwDxG^,g^RI}?p"8$BW6&2GKfHDoi', "eMMqxMgWaHF>(u&1Ft{PfW[RSL2@Es:1x[]PyX[x~1U,l?GO", "iF$DwXmxm+o(ZT", "+My9=}fW?hTfl5ug5(NWQyTU$R", "n$FIm8NRc$z%:E", "k#c[C=z$F^vvCi", "4>:C~u}HgQQ#ek(s)!HEHv{oMf_~[i", "=2u[T(Unpf22d`vsU:h,jk+#Wwll4yGOAfAEF~M,N_4|$F8KV>Ykh%c6$R", "iHc[Be.y]+u4KkNx+9HWHLKx,", 'N^ZlcNoO[33=lMitJR."1', "fHS^ocdH7J/3$_ExC#n[toqAs+?a$/BsLc2E0$NA9$g2V{%sD:}P*", "QFpase^n?cV/P{[O~dT}^LDY;+<7>ccn", "xONW5@6ouJt", "rtU4^Gmxy_r<Gxy7)!8,", 'XPnqte!+2h"=|M(sVS', "2Qq,YznG&R1fp?pO(:JO:}*z_h1=dr``", "%MuUg6Ww[L@3sZ_frIivJyLA7J", "N^.^Gkf|k+T#^*~`c:eW;`Z!w3l_#3M`1RT,OMJnLUHAu?Et_E}Fp@$ztdt", "?^8Ey4gQ=C)LuN+OXqYIeLlO@U@H/|[R8NJOXKx4|QN0=?3", 'yP6"srCwJJK(l5ia}gJ[nP>W9fQ:t`b`FKkq', "WfP@4yMY", '|>/qCXwqbdak((ts]B:P/$8+!1SafuH7?3rD%F(Z5GWyn_kR"t3&D(no#GQeY', "TG&q7|F_P+G|4{Ea=B5U=yZ!*0?a;(mnYoz2sHQZ", ":PlO9GWR|36R)i{oT9XO>gV$m+Skl9Pl;1i", 'WiwP`P_ybCzQj+2a~flk`D0xACO@9%dJR7S^oKzQ^$ik^*z"2ti', "+cT4!~fZ:RW@n_&pG:pavBN#6_", "FMp&Z(`RM+cHoZ@J/S", "D$ZlikHIi", 'fpIOTyq!wQ^+^*u"`9~CW~zKg^&fL3,2M718TLGo=R;No9d', "q[i[`|8Q8RCag{4`>:<k]c:GFQy|*rt`zcSlWkzx;$uNGk1s(7@%.&s,jw&", '=2nIHA%aRGFy3`aO]"}Dte#+tcbhY', ':"q}"6.18dgi]3}obKkF)`cY', 'nG)U|@7GC_Lo>3IK0#jOWNPzD1>Dy_6"GBVO0A%AL>c', "NB+Ock;pK+}F!7!`", "RIk^mWNA|H)j+_OoyfT,LUxZP_Gv}?@skIZ", "gG0IB7{JFG<#xX@JIi5C", "]?kP$Uba*Q%hXlDsj$]Dn|kWcfo(?Tk{g3)4%7YU%3", ';"64>N:Y', "oIFkGv`xw^E*k3ug[i0[u`o/Y3", '5g%[lMqaBdhy=?+XmOe}7F"Xg3FDS', '"4L4,="WAR<*]3ml&tjT', "SF=^vBUp_c9xbM;*9#I4TgOrL:m+aTq", "a#),>AOHj^ncN/Bl]sy%R@4W[Q/[FEoa47~CW7tY", "c$uUp@/6Bdhg(ck2JGOWreBr+dv>QM@s~S", 'C[U4n|UO~C2c(u77;:)%pc[XaR"gzyeXXPZ[yk>Z', 'd90CgDZC$3(>H+R"0$$}j}WRVc]{@i', "IG<kPgtY/QqPFk/l", "CHp@F7oGILp:@c?", "j$dvqU0+o^7x(cZ7Y[[Ft5i_,fg", "b4Jvuy<a83Py+F~s:$a};DHnM_zm%7;n<FzFgo^UOh=d*u*9+(j4Q", "x3Fq5`rG8C;Oc5o1M({[j$l/zwAD>XYxTPSl1", "i3v9B~ka8UdI[c.O3FiO,yu,TJ/{RT", "$(OWRy#R3LdfDk*9n$d[=`QXhw]jR721g(QvJchUE", "c9A}*uRCK1zH~`g1!pz,uyRZ", "UMx&~4:_ZJF", "#qO4xKU6/G`D%+s{c?zW_%Ew23", '|2@%LN)+C<o<29[RYL#TD/q+tf@dxM"ajDB2iA3r*32:sZ', '"pFPGNZX&PikKi', "y10I1ypO`+&=0_d", 'TH_}8BI_tfQk&EZxwK0[S)o_+$x+brH14p"v,g2oyPud.9}KX7![h', ']"gl~}ZC)w`', "Vs18^yX+SQj3I?PoT9U}R", "R9FIYk5QE_4|:k:x7#Sl:AUr<fDEbrY7y7a,g8lrB06N@3.mmOxaooS", "B:1qR82r(hqZ29^{p:zWNg|AH3zN0+pg%($DsF++}+A@_LSaFB1q", "JPJ<%~_roLE#&_#{S4GPHLgW[L`?j5|gJGlkXK>Kh+9kj`=9R9fvQ@ln&0:>Y", "rPY[5B*Z", "]gJO.WDH8CXls9/sq9$,U79ChPSqAF^JM?mWzGWaq", 'C#bv`7QN|Lz%d?02423^_@kR*LyvN?WK#pHWxKhn:Qzv"r{o{Oe<"', 'JQ?}^@KA?Hedex}K"gsWGU~=:Gpq|c72qPi', '0p[F?ynJLCP"br&2}({lws.YcfFDt549wc$,fM{U)_h=Xul!', 'ERnId$>ahJ_1[u@JE[pWlodJZ^J~.NV"', "BIq^ZXrrEP6[A_8J`I.PreAZs+Xg9exgv>U,;utr(UwCFL9nRQO}1", "H#1l>gjGWPV%o5Pn3PrF@4S", "gGy@i(pJL?AhY", "<M!IU5On^}CeO(rl5{lkx", "Dd,@Ru.p/Q:D:7waW2P,wLbK>_7(_*zo_3B2BFgZHLAW]i9p23nPYk,Y<}X", "Vig%gCgA", ".~g>4=N!", "BCp>I#uN52TyZ`iD|z$*&&8lS<wg30iDS7{OS|BP(Kg?q;|C0ChF*", "BCp>I#uN52TyZ`iD|z$*&&8lS<wg30iDyQ+O}},!|ITEa{ZoAd", "?@No+f2&xv9dJ6thh@_T.0+D|WVUp+G.R:)U,", "bdtD", "vTjev7ox", "r_Wns4>x", ".z?0n", '9!(75"lG', "I/Daqfmv", "!!MwU", "wpXzxCfy", "}.3z7D4+", "TvgS+NA*", "o<IB7aw", "HBE4/Sl{6", '<=."d;R;%', "kv}>teKa6", 'qr^VxJk?%+"U,<TwsrOh<EN', "B$EHSlsL.}QcG7<UOzp=1sR5k64g|!>", "Jncyu<Wt]b_?Sd!.0nwDd1:", "I$Pzwkd2`XLn^eiaHCbBmd3G?&Fo~{]", "I$Pzwkd2`XENzLY3RcPBz7h2kIX", '*"DeoK@', "mIE$Aa*d", "py9L", "<#?d.ZPB", "fMmvAk(R", "asq?Xc)R", 'Acy"b~(R', "]?.IN", "p5F9", 'u5y"+r;R', "O?Am", "Q56BUj8R", "_^_3z@q~", "x3<G2#_K", "9Hlsy@BK", "0LGu3c/", "+u1Afs!K", 'uj"Z^U[K', "=(lem#%K", "=(=Gu", "ci,Kt|>rCXwmV)I#5ix+)S&", '~W"7]>z1I4_{0N#AO)3yBzP(Hb@Lo:|', '`8EKk1?:h)"+a/G5j8rS/nA', '`8EKk1?:{HxXgjR@vMzCi?pbh)"+a/N', 'Yn#Sp[/I=X54@zsMk:"rW/Fu)Gw^J&D', "`8EKk1?:{H.uKxZp35ECK^#:1`H", "m7(j+;A", "/8rS~|uf", "wiUC", "riTI", "ExIwLRCA", "=6:s9(vH", "`*>0/)z3", "IvMVpLd3", "h10_*e!", "Q_,^ZVP3", "_2Gi];O3", "[CMlt)N3", "[C[0_", "2>3&C6I[{Z~Aeh5%t>rShMu", "f%~3S$i/*b?Fetg(#=HV}i7hxQcm]yG", "M{=qD)yT9b<>J/LhI{rB/[u", "`oA#YtZ1FNbsBz^3G?r_QZ9&~dwT/uP", "M{=qD)yT%e6w]IGSP(kmYyO&9b<>J/d", "M{=qD)yT%e3Vq6RO:h=mq*xT)Me", ";qxUfpl", "59?aE&rP", "lc<|", "ev{=", "qikygbvf"]), ye(OV = function() {
      var tt, et, Vt, Ot = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      ye(tt = void 0, et = []);
      try {
        ye(tt = Object, et[Ee[11]]("".__proto__.constructor.name))
      } catch (DV) {}
      tt: for (Vt = Ee[0]; Vt < Ot[Ee[4]]; Vt++) try {
        var qt;
        for (tt = Ot[Vt](), qt = Ee[0]; qt < et[Ee[4]]; qt++)
          if (typeof tt[et[qt]] === Ee[5]) continue tt;
        return tt
      } catch (DV) {}
      return tt || this
    }() || {}, qV = OV.TextDecoder, DV = OV.Uint8Array, mV = OV.mf, dV = OV.String || String, jV = OV.Array || Array, HV = function() {
      var tt, et, Vt = new jV(Ee[25]);
      return ye(tt = dV[Ee[8]] || dV.fromCharCode, et = []),
        function(Ot) {
          var qt, Dt, mt, dt;
          for (ye(Dt = void 0, mt = Ot[Ee[4]], et[Ee[4]] = Ee[0]), dt = Ee[0]; dt < mt;) ye(Dt = Ot[dt++], Dt <= Ee[24] ? qt = Dt : Dt <= 223 ? qt = (Dt & Ee[27]) << Ee[7] | Ot[dt++] & Ee[6] : Dt <= 239 ? qt = (Dt & Ee[28]) << Ee[10] | (Ot[dt++] & Ee[6]) << Ee[7] | Ot[dt++] & Ee[6] : dV[Ee[8]] ? qt = (Dt & Ee[9]) << Ee[29] | (Ot[dt++] & Ee[6]) << Ee[10] | (Ot[dt++] & Ee[6]) << Ee[7] | Ot[dt++] & Ee[6] : (qt = Ee[6], dt += Ee[17]), et[Ee[11]](Vt[qt] || (Vt[qt] = tt(qt))));
          return et.join("")
        }
    }()), (() => {
      function tt(tt) {
        return typeof Qe[tt] === Ee[5] ? Qe[tt] = function(tt) {
          var et, Vt, Ot, qt, Dt, mt, dt;
          for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
            var jt = '=Axms"{~5GX@twuz#Ro31d/}(cn]*K`.e?yjSQ[;VMkP9IBl8+|F%_LC,vH6>NUgEi2!T40hqraJb7$p&YZW^:D)<Of'.indexOf(et[dt]);
            if (jt !== -Ee[1])
              if (mt < Ee[0]) mt = jt;
              else {
                ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                do {
                  ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                } while (Dt > Ee[9]);
                mt = -Ee[1]
              }
          }
          return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
        }(le[tt]) : Qe[tt]
      }
      tt(114);
      const et = Ee[26],
        Vt = tt(120) + tt(121) + tt(122),
        Ot = [Ee[0], Ee[1], Ee[35], Ee[17]].map((tt => {
          ! function(tt) {
            typeof Qe[tt] === Ee[5] ? Qe[tt] = function(tt) {
              var et, Vt, Ot, qt, Dt, mt, dt;
              for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                var jt = 'qLG5,d?p]C7Vl#{=BPJ%m8*aO+:A(bju$[")Y>Ny2voM3|9g;4tnWKe1w!H6RT/z.ZDx&SIcXrFEQ^Uk0<@}ish_~`f'.indexOf(et[dt]);
                if (jt !== -Ee[1])
                  if (mt < Ee[0]) mt = jt;
                  else {
                    ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                    do {
                      ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                    } while (Dt > Ee[9]);
                    mt = -Ee[1]
                  }
              }
              return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
            }(le[tt]) : Qe[tt]
          }(123);
          let et = Ee[0];
          for (let Ot = Ee[17]; Ot >= Ee[0]; Ot--) {
            function qt(tt) {
              var et, Vt, Ot, qt, Dt, mt, dt;
              for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                var jt = 'u|v5#w2]%x{"?~}!*[93o8./HJAB)UdFN^j4CEGqml<LW(ifY;y`DaIPtQzp$Os>1_S:MRKTr,0eV=XZk&6gh7n@cb+'.indexOf(et[dt]);
                if (jt !== -Ee[1])
                  if (mt < Ee[0]) mt = jt;
                  else {
                    ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                    do {
                      ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                    } while (Dt > Ee[9]);
                    mt = -Ee[1]
                  }
              }
              return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
            }

            function Dt(tt) {
              return typeof Qe[tt] === Ee[5] ? Qe[tt] = qt(le[tt]) : Qe[tt]
            }
            et = et << Ee[2] | Vt[Dt(124) + Dt(125)](tt * Ee[37] + Ot)
          }
          return et >>> Ee[0]
        })),
        qt = (tt, et) => {
          function Vt(tt) {
            return typeof Qe[tt] === Ee[5] ? Qe[tt] = function(tt) {
              var et, Vt, Ot, qt, Dt, mt, dt;
              for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                var jt = '@y+}u&<iB=tc]jqmsIO3wgDf2)HVNp[lzK~Ura/"$!J.(TS%4eXb#;ERZ|5LC{h?`Fn9Y6v7Mxd>kA^_oGWP,0*81Q:'.indexOf(et[dt]);
                if (jt !== -Ee[1])
                  if (mt < Ee[0]) mt = jt;
                  else {
                    ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                    do {
                      ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                    } while (Dt > Ee[9]);
                    mt = -Ee[1]
                  }
              }
              return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
            }(le[tt]) : Qe[tt]
          }
          return Vt(126) + "7" in we && function() {
            function tt(tt) {
              var et, Vt, Ot, qt, Dt, mt, dt, jt = ')AdTGMoQLkYPHWSyBNU<z;6+3p@,*1E$]b{Ou=rFIJe?87Zc"sK.nCqlv}Rh&m`wf%xi#/tXa^59>2~[_04V(j!|Dg:';
              for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                var Ht = jt.indexOf(et[dt]);
                if (Ht !== -Ee[1])
                  if (mt < Ee[0]) mt = Ht;
                  else {
                    ye(mt += Ht * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                    do {
                      ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                    } while (Dt > Ee[9]);
                    mt = -Ee[1]
                  }
              }
              return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
            }

            function et(et) {
              return typeof Qe[et] === Ee[5] ? Qe[et] = tt(le[et]) : Qe[et]
            }! function(tt) {
              var et, Ot, qt, Dt = String.fromCharCode;

              function mt(tt) {
                var et, Vt, Ot, qt, Dt = [];
                for (ye(et = Ee[0], Vt = tt.length, Ot = void 0, qt = void 0); et < Vt;) ye(Ot = tt.charCodeAt(et++), Ot >= Ee[22] && Ot <= Ee[42] && et < Vt ? ((qt = tt.charCodeAt(et++)) & Ee[43]) == Ee[23] ? Dt.push(((Ot & Ee[19]) << Ee[21]) + (qt & Ee[19]) + Ee[20]) : (Dt.push(Ot), et--) : Dt.push(Ot));
                return Dt
              }

              function dt(tt) {
                var et, Vt, Ot, qt = tt.length;
                for (ye(et = -Ee[1], Vt = void 0, Ot = ""); ++et < qt;)(Vt = tt[et]) > Ee[44] && ye(Vt -= Ee[20], Ot += Dt(Vt >>> Ee[21] & Ee[19] | Ee[22]), Vt = Ee[23] | Vt & Ee[19]), Ot += Dt(Vt);
                return Ot
              }

              function jt(tt) {
                if (tt >= Ee[22] && tt <= Ee[45]) {
                  function et(tt) {
                    var et, Vt, Ot, qt, Dt, mt, dt, jt = 'w9*=u$%6@_4pAE3<j)yW#Fqs{B:G,8aoI.OcX]x2n/17M^K>&tCvgi!b?L`RzHfJkm[+e;"ZN|hQUS}V(~P0TdlrDY5';
                    for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                      var Ht = jt.indexOf(et[dt]);
                      if (Ht !== -Ee[1])
                        if (mt < Ee[0]) mt = Ht;
                        else {
                          ye(mt += Ht * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                          do {
                            ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                          } while (Dt > Ee[9]);
                          mt = -Ee[1]
                        }
                    }
                    return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                  }

                  function Ot(tt) {
                    return typeof Qe[tt] === Ee[5] ? Qe[tt] = et(le[tt]) : Qe[tt]
                  }
                  throw Error(Vt(Ee[24]) + Ot(Ee[25]) + Ot(129) + tt.toString(Ee[26]).toUpperCase() + (Ot(130) + Ot(131) + Ot(132) + "e"))
                }
              }

              function Ht(tt, et) {
                return Dt(tt >> et & Ee[6] | Ee[25])
              }

              function Xt(tt) {
                var et;
                return (tt & Ee[46]) == Ee[0] ? Dt(tt) : (et = "", (tt & Ee[47]) == Ee[0] ? et = Dt(tt >> Ee[7] & Ee[27] | Ee[30]) : (tt & Ee[48]) == Ee[0] ? ye(jt(tt), et = Dt(tt >> Ee[10] & Ee[28] | Ee[32]), et += Ht(tt, Ee[7])) : (tt & Ee[49]) == Ee[0] && ye(et = Dt(tt >> Ee[29] & Ee[9] | Ee[33]), et += Ht(tt, Ee[10]), et += Ht(tt, Ee[7])), et += Dt(tt & Ee[6] | Ee[25]))
              }

              function Qt(tt) {
                var et, Vt, Ot, qt, Dt = mt(tt);
                for (ye(et = Dt.length, Vt = -Ee[1], Ot = void 0, qt = ""); ++Vt < et;) ye(Ot = Dt[Vt], qt += Xt(Ot));
                return qt
              }

              function lt() {
                var tt;

                function Vt(tt) {
                  var et, Vt, Ot, qt, Dt, mt, dt, jt = 'Z{(%_6&<=y9u>+`1CBYRS^:?L*O@0NvnHF|3jU])$J[WhKX2;7}p~d#ro"tQz!/k.4cPbIAMiDsTlxGVg5fEewm8qa,';
                  for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                    var Ht = jt.indexOf(et[dt]);
                    if (Ht !== -Ee[1])
                      if (mt < Ee[0]) mt = Ht;
                      else {
                        ye(mt += Ht * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                        do {
                          ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                        } while (Dt > Ee[9]);
                        mt = -Ee[1]
                      }
                  }
                  return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                }

                function Dt(tt) {
                  return typeof Qe[tt] === Ee[5] ? Qe[tt] = Vt(le[tt]) : Qe[tt]
                }
                if (qt >= Ot) {
                  function mt(tt) {
                    var et, Vt, Ot, qt, Dt, mt, dt, jt = 'Nu.v`+#_)pDwRiC|Fqb{xQB/?2;:H(OhVt,T[~fWrjy>zeZo3s$aL]5AG904P<K%c"IYSdMX=6kgJl17U&*^E!8nm@}';
                    for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                      var Ht = jt.indexOf(et[dt]);
                      if (Ht !== -Ee[1])
                        if (mt < Ee[0]) mt = Ht;
                        else {
                          ye(mt += Ht * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                          do {
                            ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                          } while (Dt > Ee[9]);
                          mt = -Ee[1]
                        }
                    }
                    return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                  }

                  function dt(tt) {
                    return typeof Qe[tt] === Ee[5] ? Qe[tt] = mt(le[tt]) : Qe[tt]
                  }
                  throw Error(dt(133))
                }
                if (ye(tt = et[qt] & Ee[3], qt++), (tt & Ee[30]) == Ee[25]) return tt & Ee[6];
                throw Error(Dt(134))
              }

              function Et() {
                var tt, Dt, mt, dt, Ht;
                if (ye(Dt = void 0, mt = void 0, dt = void 0, Ht = void 0), qt > Ot) {
                  function Xt(tt) {
                    var et, Vt, Ot, qt, Dt, mt, dt, jt = ':ABhpbMaNLq.7%Ck/J*^uQ+6to|{FjwDy9S!=XY3nsO;[>x280v&eTGzV@EgId4]}_)fH(ZKURW$<#ir?`lc1P,5~m"';
                    for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                      var Ht = jt.indexOf(et[dt]);
                      if (Ht !== -Ee[1])
                        if (mt < Ee[0]) mt = Ht;
                        else {
                          ye(mt += Ht * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                          do {
                            ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                          } while (Dt > Ee[9]);
                          mt = -Ee[1]
                        }
                    }
                    return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                  }

                  function Qt(tt) {
                    return typeof Qe[tt] === Ee[5] ? Qe[tt] = Xt(le[tt]) : Qe[tt]
                  }
                  throw Error(Qt(135))
                }
                if (qt == Ot) return Ee[31];
                if (ye(tt = et[qt] & Ee[3], qt++), (tt & Ee[25]) == Ee[0]) return tt;
                if ((tt & Ee[32]) == Ee[30]) {
                  if (ye(Dt = lt(), Ht = (tt & Ee[27]) << Ee[7] | Dt), Ht >= Ee[25]) return Ht;
                  throw Error(Vt(Ee[34]))
                }
                if ((tt & Ee[33]) == Ee[32]) {
                  if (ye(Dt = lt(), mt = lt(), Ht = (tt & Ee[28]) << Ee[10] | Dt << Ee[7] | mt), Ht >= Ee[50]) return jt(Ht), Ht;
                  throw Error(Vt(Ee[34]))
                }
                if ((tt & Ee[51]) == Ee[33] && (ye(Dt = lt(), mt = lt(), dt = lt(), Ht = (tt & Ee[9]) << Ee[29] | Dt << Ee[10] | mt << Ee[7] | dt), Ht >= Ee[20] && Ht <= Ee[52])) return Ht;
                throw Error(Vt(137))
              }

              function ft(tt) {
                var Vt, Dt;
                for (ye(et = mt(tt), Ot = et.length, qt = Ee[0], Vt = [], Dt = void 0);
                  (Dt = Et()) !== Ee[31];) Vt.push(Dt);
                return dt(Vt)
              }
              ye(et = void 0, Ot = void 0, qt = void 0), ye(tt.version = Vt(138), tt.encode = Qt, tt.decode = ft)
            }(typeof exports === et(139) + et(140) ? this.utf8 = {} : exports)
          }(), tt << et | tt >>> 32 - et
        },
        Dt = (tt, et, Vt, Ot, Dt) => {
          (function(tt) {
            return typeof Qe[tt] === Ee[5] ? Qe[tt] = function(tt) {
              var et, Vt, Ot, qt, Dt, mt, dt;
              for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                var jt = 'RGB=XnKTVUhDSJkbopHAMiLjglPeEWIdOCFQ[1sN#];tau9rq)Z{Y/&"v@fmc<0!6(7w}?`x%4>|y_8+35,*:z^~.$2'.indexOf(et[dt]);
                if (jt !== -Ee[1])
                  if (mt < Ee[0]) mt = jt;
                  else {
                    ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                    do {
                      ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                    } while (Dt > Ee[9]);
                    mt = -Ee[1]
                  }
              }
              return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
            }(le[tt]) : Qe[tt]
          })(141) + "n" in we && function() {
            const tt = require("big-integer");
            class et {
              static randomPrime(et) {
                const Vt = tt.one.shiftLeft(et - Ee[1]),
                  Ot = tt.one.shiftLeft(et).prev();
                for (; Ee[38];) {
                  let et = tt.randBetween(Vt, Ot);
                  if (et.isProbablePrime(256)) return et
                }
              }
              static generate(et) {
                const Vt = tt(65537);
                let Ot, qt, Dt;
                do {
                  ye(Ot = this.randomPrime(et / Ee[35]), qt = this.randomPrime(et / Ee[35]), Dt = tt.lcm(Ot.prev(), qt.prev()))
                } while (tt.gcd(Vt, Dt).notEquals(Ee[1]) || Ot.minus(qt).abs().shiftRight(et / Ee[35] - 100).isZero());
                return {
                  e: Vt,
                  n: Ot.multiply(qt),
                  d: Vt.modInv(Dt)
                }
              }
              static encrypt(et, Vt, Ot) {
                return tt(et).modPow(Ot, Vt)
              }
              static decrypt(et, Vt, Ot) {
                return tt(et).modPow(Vt, Ot)
              }
              static encode(et) {
                const Vt = et.split("").map((tt => tt.charCodeAt())).join("");
                return tt(Vt)
              }
              static decode(tt) {
                const et = tt.toString();
                let Vt = "";
                for (let Ot = Ee[0]; Ot < et.length; Ot += Ee[35]) {
                  let tt = Number(et.substr(Ot, Ee[35]));
                  tt <= 30 ? (Vt += String.fromCharCode(Number(et.substr(Ot, Ee[17]))), Ot++) : Vt += String.fromCharCode(tt)
                }
                return Vt
              }
            }
            module.exports = et
          }(), ye(tt[et] += tt[Vt], tt[Dt] = qt(tt[Dt] ^ tt[et], Ee[26]), tt[Ot] += tt[Dt], tt[Vt] = qt(tt[Vt] ^ tt[Ot], Ee[10]), tt[et] += tt[Vt], tt[Dt] = qt(tt[Dt] ^ tt[et], Ee[2]), tt[Ot] += tt[Dt], tt[Vt] = qt(tt[Vt] ^ tt[Ot], Ee[9]))
        };
      He = (tt, Vt, qt, mt) => {
        function dt(tt) {
          return typeof Qe[tt] === Ee[5] ? Qe[tt] = function(tt) {
            var et, Vt, Ot, qt, Dt, mt, dt;
            for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
              var jt = 'zqREmDl+I094=Ja5hiu36F(Qo%8GXNp&"|,21A;fL`W}>[)P{xve]t?~K#Hks@T_*7OyMgZcnCr<bBU^!jd./$wVYS:'.indexOf(et[dt]);
              if (jt !== -Ee[1])
                if (mt < Ee[0]) mt = jt;
                else {
                  ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                  do {
                    ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                  } while (Dt > Ee[9]);
                  mt = -Ee[1]
                }
            }
            return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
          }(le[tt]) : Qe[tt]
        }
        dt(142) + "d" in we && function() {
          var tt = function(tt) {
            var et, Vt, Ot, qt, Dt = tt.length;
            for (ye(et = [], Vt = Ee[0]), Ot = Ee[0]; Ot < Dt; Ot++) et.push(Ot !== Ee[0] && tt[Ot] > tt[Ot - Ee[1]] ? et[Ot - Ee[1]] + Ee[1] : Ee[1]);
            for (qt = Dt - Ee[1]; qt >= Ee[0]; qt--) qt !== Dt - Ee[1] && tt[qt] > tt[qt + Ee[1]] && (et[qt] = Math.max(et[qt], et[qt + Ee[1]] + Ee[1])), Vt += et[qt];
            return Vt
          };
          console.log(tt)
        }();
        const jt = new DataView(Vt[dt(Ee[41])], Vt[dt(144) + dt(145)], Xe),
          Ht = new Uint32Array(et);
        ye(Ht[dt(Ee[36])](Ot), Ht[dt(Ee[36])](tt, Ee[37]), Ht[Ee[15]] = jt[dt(Ee[39]) + dt(Ee[40])](Ee[0], Ee[38]), Ht[Ee[16]] = jt[dt(Ee[39]) + dt(Ee[40])](Ee[37], Ee[38]), Ht[Ee[28]] = jt[dt(Ee[39]) + dt(Ee[40])](Ee[2], Ee[38]));
        const Xt = new Uint32Array(et),
          Qt = new Uint8Array(Xt[dt(Ee[41])]);
        for (let lt = Ee[0], Et = qt; lt < mt[dt(149)]; lt += et * Ee[37], Et++) {
          function ft(tt) {
            var et, Vt, Ot, qt, Dt, mt, dt;
            for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
              var jt = 'A~fL_)BRC=I5Nl*i9`$pkT(q:wv0usrSK;aG4@O78Jo<>%Ve2jHz&!.36[PxM/#h{"XWZ],^|Q?U1yg}+btEndmDFYc'.indexOf(et[dt]);
              if (jt !== -Ee[1])
                if (mt < Ee[0]) mt = jt;
                else {
                  ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                  do {
                    ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                  } while (Dt > Ee[9]);
                  mt = -Ee[1]
                }
            }
            return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
          }

          function wt(tt) {
            return typeof Qe[tt] === Ee[5] ? Qe[tt] = ft(le[tt]) : Qe[tt]
          }

          function yt() {
            ! function(tt) {
              var et, Vt, Ot, qt = String.fromCharCode;

              function Dt(tt) {
                var et, Vt, Ot, qt, Dt = [];
                for (ye(et = Ee[0], Vt = tt.length, Ot = void 0, qt = void 0); et < Vt;) ye(Ot = tt.charCodeAt(et++), Ot >= Ee[22] && Ot <= Ee[42] && et < Vt ? ((qt = tt.charCodeAt(et++)) & Ee[43]) == Ee[23] ? Dt.push(((Ot & Ee[19]) << Ee[21]) + (qt & Ee[19]) + Ee[20]) : (Dt.push(Ot), et--) : Dt.push(Ot));
                return Dt
              }

              function mt(tt) {
                var et, Vt, Ot, Dt = tt.length;
                for (ye(et = -Ee[1], Vt = void 0, Ot = ""); ++et < Dt;)(Vt = tt[et]) > Ee[44] && ye(Vt -= Ee[20], Ot += qt(Vt >>> Ee[21] & Ee[19] | Ee[22]), Vt = Ee[23] | Vt & Ee[19]), Ot += qt(Vt);
                return Ot
              }

              function dt(tt) {
                if (tt >= Ee[22] && tt <= Ee[45]) {
                  function et(tt) {
                    var et, Vt, Ot, qt, Dt, mt, dt;
                    for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                      var jt = '/jKxp$z)ZWAvB1CL[D.<n?#E&u>~}]c0GM(JNTw;!f73{itS_"*Hle%I5odbF+:4ha`y8kr2@Qm=YsqOUPXR96gV^|,'.indexOf(et[dt]);
                      if (jt !== -Ee[1])
                        if (mt < Ee[0]) mt = jt;
                        else {
                          ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                          do {
                            ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                          } while (Dt > Ee[9]);
                          mt = -Ee[1]
                        }
                    }
                    return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                  }

                  function Vt(tt) {
                    return typeof Qe[tt] === Ee[5] ? Qe[tt] = et(le[tt]) : Qe[tt]
                  }
                  throw Error(Vt(151) + Vt(152) + Vt(153) + tt.toString(Ee[26]).toUpperCase() + (Vt(154) + Vt(155) + Vt(156) + Vt(157)))
                }
              }

              function jt(tt, et) {
                return qt(tt >> et & Ee[6] | Ee[25])
              }

              function Ht(tt) {
                var et;
                return (tt & Ee[46]) == Ee[0] ? qt(tt) : (et = "", (tt & Ee[47]) == Ee[0] ? et = qt(tt >> Ee[7] & Ee[27] | Ee[30]) : (tt & Ee[48]) == Ee[0] ? ye(dt(tt), et = qt(tt >> Ee[10] & Ee[28] | Ee[32]), et += jt(tt, Ee[7])) : (tt & Ee[49]) == Ee[0] && ye(et = qt(tt >> Ee[29] & Ee[9] | Ee[33]), et += jt(tt, Ee[10]), et += jt(tt, Ee[7])), et += qt(tt & Ee[6] | Ee[25]))
              }

              function Xt() {
                var tt;
                if (Ot >= Vt) {
                  function qt(tt) {
                    var et, Vt, Ot, qt, Dt, mt, dt;
                    for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                      var jt = '&7@HeXB:}=k#Q?!J`c(*t8TErR%9dLx+KMVIzg4]is.DuZF2~5lbo;ApqjU{n)"CPwahY$3v/^>1|yf0m[6,S<NWG_O'.indexOf(et[dt]);
                      if (jt !== -Ee[1])
                        if (mt < Ee[0]) mt = jt;
                        else {
                          ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                          do {
                            ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                          } while (Dt > Ee[9]);
                          mt = -Ee[1]
                        }
                    }
                    return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                  }

                  function Dt(tt) {
                    return typeof Qe[tt] === Ee[5] ? Qe[tt] = qt(le[tt]) : Qe[tt]
                  }
                  throw Error(Dt(158))
                }
                if (ye(tt = et[Ot] & Ee[3], Ot++), (tt & Ee[30]) == Ee[25]) return tt & Ee[6];
                throw Error(function(tt) {
                  return typeof Qe[tt] === Ee[5] ? Qe[tt] = function(tt) {
                    var et, Vt, Ot, qt, Dt, mt, dt;
                    for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                      var jt = 'f8,9&b`#y^.r|GVBx~eP]Dhc1lOm/![%7wo}CAvTWSQu5Kn<EN436=F+*kd_):?HI@{JUR2jYMzs>t0iL(Z"Xa$;pqg'.indexOf(et[dt]);
                      if (jt !== -Ee[1])
                        if (mt < Ee[0]) mt = jt;
                        else {
                          ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                          do {
                            ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                          } while (Dt > Ee[9]);
                          mt = -Ee[1]
                        }
                    }
                    return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                  }(le[tt]) : Qe[tt]
                }(159))
              }

              function Qt() {
                var tt, qt, Dt, mt, jt;
                if (ye(qt = void 0, Dt = void 0, mt = void 0, jt = void 0), Ot > Vt) throw Error(wt(160));
                if (Ot == Vt) return Ee[31];
                if (ye(tt = et[Ot] & Ee[3], Ot++), (tt & Ee[25]) == Ee[0]) return tt;
                if ((tt & Ee[32]) == Ee[30]) {
                  if (ye(qt = Xt(), jt = (tt & Ee[27]) << Ee[7] | qt), jt >= Ee[25]) return jt;
                  throw Error(wt(161))
                }
                if ((tt & Ee[33]) == Ee[32]) {
                  if (ye(qt = Xt(), Dt = Xt(), jt = (tt & Ee[28]) << Ee[10] | qt << Ee[7] | Dt), jt >= Ee[50]) return dt(jt), jt;
                  {
                    function Ht(tt) {
                      var et, Vt, Ot, qt, Dt, mt, dt;
                      for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                        var jt = 'A1BClGtsrHRODadWEYbFpcmVILkKNfejSqJThMZonU,P$giQ0zX"y>}98+!5:&x)=w4{3*]_v7/.[~@<^u|#?%;2`(6'.indexOf(et[dt]);
                        if (jt !== -Ee[1])
                          if (mt < Ee[0]) mt = jt;
                          else {
                            ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                            do {
                              ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                            } while (Dt > Ee[9]);
                            mt = -Ee[1]
                          }
                      }
                      return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                    }

                    function Qt(tt) {
                      return typeof Qe[tt] === Ee[5] ? Qe[tt] = Ht(le[tt]) : Qe[tt]
                    }
                    throw Error(Qt(162))
                  }
                }
                if ((tt & Ee[51]) == Ee[33] && (ye(qt = Xt(), Dt = Xt(), mt = Xt(), jt = (tt & Ee[9]) << Ee[29] | qt << Ee[10] | Dt << Ee[7] | mt), jt >= Ee[20] && jt <= Ee[52])) return jt;
                throw Error(wt(163))
              }
              ye(et = void 0, Vt = void 0, Ot = void 0), ye(tt.version = wt(164), tt.encode = function(tt) {
                var et, Vt, Ot, qt, mt = Dt(tt);
                for (ye(et = mt.length, Vt = -Ee[1], Ot = void 0, qt = ""); ++Vt < et;) ye(Ot = mt[Vt], qt += Ht(Ot));
                return qt
              }, tt.decode = function(tt) {
                var qt, dt;
                for (ye(et = Dt(tt), Vt = et.length, Ot = Ee[0], qt = [], dt = void 0);
                  (dt = Qt()) !== Ee[31];) qt.push(dt);
                return mt(qt)
              })
            }(typeof exports === wt(165) + wt(166) ? this.utf8 = {} : exports)
          }
          wt(150) in we && yt(), ye(Ht[Ee[10]] = Et, Xt[wt(167)](Ht));
          for (let Mt = Ee[0]; Mt < Ee[21]; Mt++) {
            function bt(tt) {
              var et, Vt, Ot, qt, Dt, mt, dt;
              for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                var jt = '8As=U<[fXDZr@OHLdxbB?]qFk|P}>JhI^3~4G#":tyzS{p2M9_.,wu;7TQjVvo$n*!)C&EY6eiNlgaK`W01R5(%m+c/'.indexOf(et[dt]);
                if (jt !== -Ee[1])
                  if (mt < Ee[0]) mt = jt;
                  else {
                    ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                    do {
                      ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                    } while (Dt > Ee[9]);
                    mt = -Ee[1]
                  }
              }
              return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
            }

            function Jt(tt) {
              return typeof Qe[tt] === Ee[5] ? Qe[tt] = bt(le[tt]) : Qe[tt]
            }
            Jt(168), ye(Dt(Xt, Ee[0], Ee[37], Ee[2], Ee[10]), Dt(Xt, Ee[1], Ee[53], Ee[55], Ee[15]), Dt(Xt, Ee[35], Ee[7], Ee[21], Ee[16]), Dt(Xt, Ee[17], Ee[9], Ee[54], Ee[28]), Dt(Xt, Ee[0], Ee[53], Ee[21], Ee[28]), Dt(Xt, Ee[1], Ee[7], Ee[54], Ee[10]), Dt(Xt, Ee[35], Ee[9], Ee[2], Ee[15]), Dt(Xt, Ee[17], Ee[37], Ee[55], Ee[16]))
          }
          for (let Ct = Ee[0]; Ct < et; Ct++) {
            function ut(tt) {
              var et, Vt, Ot, qt, Dt, mt, dt;
              for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                var jt = 'uNHlCbsGmUKhdifYcMpODWEZTAPXVtrBqFJLQS7n{^;_z,@o0Iek+53:agv6(/x9%<wjR}!*8#y`)1]2>&.=[?|4"$~'.indexOf(et[dt]);
                if (jt !== -Ee[1])
                  if (mt < Ee[0]) mt = jt;
                  else {
                    ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                    do {
                      ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                    } while (Dt > Ee[9]);
                    mt = -Ee[1]
                  }
              }
              return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
            }

            function Kt(tt) {
              return typeof Qe[tt] === Ee[5] ? Qe[tt] = ut(le[tt]) : Qe[tt]
            }

            function ht() {
              function tt(tt) {
                return typeof Qe[tt] === Ee[5] ? Qe[tt] = function(tt) {
                  var et, Vt, Ot, qt, Dt, mt, dt;
                  for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                    var jt = '0EPbSq8d|7@ONs!cFGzykT)pJlV%rh?a.#eW~A"x9t*Kw;]=M:jHIU36v4ZRL5/(2fQXoB^u&,`<Cg}{DY[>1i$_+mn'.indexOf(et[dt]);
                    if (jt !== -Ee[1])
                      if (mt < Ee[0]) mt = jt;
                      else {
                        ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                        do {
                          ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                        } while (Dt > Ee[9]);
                        mt = -Ee[1]
                      }
                  }
                  return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                }(le[tt]) : Qe[tt]
              }! function(tt) {
                var et, Vt, Ot, qt;

                function Dt(tt) {
                  var et, Vt, Ot, qt, Dt = [];
                  for (ye(et = Ee[0], Vt = tt.length, Ot = void 0, qt = void 0); et < Vt;) ye(Ot = tt.charCodeAt(et++), Ot >= Ee[22] && Ot <= Ee[42] && et < Vt ? ((qt = tt.charCodeAt(et++)) & Ee[43]) == Ee[23] ? Dt.push(((Ot & Ee[19]) << Ee[21]) + (qt & Ee[19]) + Ee[20]) : (Dt.push(Ot), et--) : Dt.push(Ot));
                  return Dt
                }

                function mt(tt) {
                  var Vt, Ot, qt, Dt = tt.length;
                  for (ye(Vt = -Ee[1], Ot = void 0, qt = ""); ++Vt < Dt;)(Ot = tt[Vt]) > Ee[44] && ye(Ot -= Ee[20], qt += et(Ot >>> Ee[21] & Ee[19] | Ee[22]), Ot = Ee[23] | Ot & Ee[19]), qt += et(Ot);
                  return qt
                }

                function dt(tt) {
                  if (tt >= Ee[22] && tt <= Ee[45]) {
                    function et(tt) {
                      var et, Vt, Ot, qt, Dt, mt, dt;
                      for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                        var jt = '!23`of8SiR^Hd,41OXy>"5)UE_$D76eh0&CYW#:{PZK*}+rkzGavMlN=qF(?@Qx.JBupA|~/L%t[gVms;bwTIjn9]<c'.indexOf(et[dt]);
                        if (jt !== -Ee[1])
                          if (mt < Ee[0]) mt = jt;
                          else {
                            ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                            do {
                              ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                            } while (Dt > Ee[9]);
                            mt = -Ee[1]
                          }
                      }
                      return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                    }

                    function Vt(tt) {
                      return typeof Qe[tt] === Ee[5] ? Qe[tt] = et(le[tt]) : Qe[tt]
                    }
                    throw Error(Vt(170) + Vt(171) + Vt(172) + tt.toString(Ee[26]).toUpperCase() + (Vt(173) + Vt(174) + Vt(175) + Vt(176)))
                  }
                }

                function jt(tt, Vt) {
                  return et(tt >> Vt & Ee[6] | Ee[25])
                }

                function Ht(tt) {
                  var Vt;
                  return (tt & Ee[46]) == Ee[0] ? et(tt) : (Vt = "", (tt & Ee[47]) == Ee[0] ? Vt = et(tt >> Ee[7] & Ee[27] | Ee[30]) : (tt & Ee[48]) == Ee[0] ? ye(dt(tt), Vt = et(tt >> Ee[10] & Ee[28] | Ee[32]), Vt += jt(tt, Ee[7])) : (tt & Ee[49]) == Ee[0] && ye(Vt = et(tt >> Ee[29] & Ee[9] | Ee[33]), Vt += jt(tt, Ee[10]), Vt += jt(tt, Ee[7])), Vt += et(tt & Ee[6] | Ee[25]))
                }

                function Xt() {
                  var tt;
                  if (qt >= Ot) {
                    function et(tt) {
                      var et, Vt, Ot, qt, Dt, mt, dt;
                      for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                        var jt = 'uHdglZDJkN(%qv@wO21bCYX}[Q/;a)rS&|e5Gc?0>+Ff.B$9stLmxj:,nz#="h4{]~yU*E8`TKI_6R<pA^W3M7oV!Pi'.indexOf(et[dt]);
                        if (jt !== -Ee[1])
                          if (mt < Ee[0]) mt = jt;
                          else {
                            ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                            do {
                              ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                            } while (Dt > Ee[9]);
                            mt = -Ee[1]
                          }
                      }
                      return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                    }

                    function Dt(tt) {
                      return typeof Qe[tt] === Ee[5] ? Qe[tt] = et(le[tt]) : Qe[tt]
                    }
                    throw Error(Dt(177))
                  }
                  if (ye(tt = Vt[qt] & Ee[3], qt++), (tt & Ee[30]) == Ee[25]) return tt & Ee[6];
                  throw Error(function(tt) {
                    return typeof Qe[tt] === Ee[5] ? Qe[tt] = function(tt) {
                      var et, Vt, Ot, qt, Dt, mt, dt;
                      for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                        var jt = '{KYALQUgVpvjGOs}1f&7SBu</5#,knP93+]8W(>R%2|:qz"^TtbH.JM`;)C?=yDx*cFZIa!EdriN$le_mh6~4X@0wo['.indexOf(et[dt]);
                        if (jt !== -Ee[1])
                          if (mt < Ee[0]) mt = jt;
                          else {
                            ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                            do {
                              ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                            } while (Dt > Ee[9]);
                            mt = -Ee[1]
                          }
                      }
                      return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                    }(le[tt]) : Qe[tt]
                  }(178))
                }

                function Qt() {
                  var tt, et, Dt, mt, jt;
                  if (ye(et = void 0, Dt = void 0, mt = void 0, jt = void 0), qt > Ot) throw Error(Kt(179));
                  if (qt == Ot) return Ee[31];
                  if (ye(tt = Vt[qt] & Ee[3], qt++), (tt & Ee[25]) == Ee[0]) return tt;
                  if ((tt & Ee[32]) == Ee[30]) {
                    if (ye(et = Xt(), jt = (tt & Ee[27]) << Ee[7] | et), jt >= Ee[25]) return jt;
                    {
                      function Ht(tt) {
                        var et, Vt, Ot, qt, Dt, mt, dt;
                        for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                          var jt = '<nJISdK^_=VUPE"Qg`29Ye)D1$G{>v78#j/,%3kMo:Wq!6l|hzNrL4]C[+(b?uH~FwsXyx*5fcZ.tRB@T&OAamp;}i0'.indexOf(et[dt]);
                          if (jt !== -Ee[1])
                            if (mt < Ee[0]) mt = jt;
                            else {
                              ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                              do {
                                ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                              } while (Dt > Ee[9]);
                              mt = -Ee[1]
                            }
                        }
                        return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                      }

                      function Qt(tt) {
                        return typeof Qe[tt] === Ee[5] ? Qe[tt] = Ht(le[tt]) : Qe[tt]
                      }
                      throw Error(Qt(180))
                    }
                  }
                  if ((tt & Ee[33]) == Ee[32]) {
                    if (ye(et = Xt(), Dt = Xt(), jt = (tt & Ee[28]) << Ee[10] | et << Ee[7] | Dt), jt >= Ee[50]) return dt(jt), jt;
                    throw Error(Kt(181))
                  }
                  if ((tt & Ee[51]) == Ee[33] && (ye(et = Xt(), Dt = Xt(), mt = Xt(), jt = (tt & Ee[9]) << Ee[29] | et << Ee[10] | Dt << Ee[7] | mt), jt >= Ee[20] && jt <= Ee[52])) return jt;
                  throw Error(Kt(182))
                }
                et = String.fromCharCode, ye(Vt = void 0, Ot = void 0, qt = void 0), ye(tt.version = function(tt) {
                  return typeof Qe[tt] === Ee[5] ? Qe[tt] = function(tt) {
                    var et, Vt, Ot, qt, Dt, mt, dt;
                    for (ye(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Ee[0], Dt = Ee[0], mt = -Ee[1]), dt = Ee[0]; dt < Vt; dt++) {
                      var jt = 'lA`2u>=(zYvD[jMTE+m}!ox8K#d"9Ranip1sQ6*qVB{O4)Z:yUI]HW~$cNF5SC@&GrJ0w3L%hb.?7P/Xfkeg,^;t|<_'.indexOf(et[dt]);
                      if (jt !== -Ee[1])
                        if (mt < Ee[0]) mt = jt;
                        else {
                          ye(mt += jt * Ee[12], qt |= mt << Dt, Dt += (mt & Ee[13]) > Ee[14] ? Ee[15] : Ee[16]);
                          do {
                            ye(Ot.push(qt & Ee[3]), qt >>= Ee[2], Dt -= Ee[2])
                          } while (Dt > Ee[9]);
                          mt = -Ee[1]
                        }
                    }
                    return mt > -Ee[1] && Ot.push((qt | mt << Dt) & Ee[3]), fe(Ot)
                  }(le[tt]) : Qe[tt]
                }(183), tt.encode = function(tt) {
                  var et, Vt, Ot, qt, mt = Dt(tt);
                  for (ye(et = mt.length, Vt = -Ee[1], Ot = void 0, qt = ""); ++Vt < et;) ye(Ot = mt[Vt], qt += Ht(Ot));
                  return qt
                }, tt.decode = function(tt) {
                  var et, dt;
                  for (ye(Vt = Dt(tt), Ot = Vt.length, qt = Ee[0], et = [], dt = void 0);
                    (dt = Qt()) !== Ee[31];) et.push(dt);
                  return mt(et)
                })
              }(typeof exports === tt(184) + tt(185) ? this.utf8 = {} : exports)
            }
            Kt(169) in we && ht(), Xt[Ct] += Ht[Ct]
          }
          const Nt = Math[wt(186)](et * Ee[37], mt[wt(187)] - lt);
          for (let vt = Ee[0]; vt < Nt; vt++) mt[lt + vt] ^= Qt[vt]
        }
      }
    })();
    const Me = [2, 0, 1, "h", "c", "a", 9, 7, 24, 6, 4, 8, 255, "length", 178, 188, "undefined", void 0, "b", 138, 177, 63, "fromCodePoint", 12, "push", 3, 16, 13, 45, 91, 113, "f", 8191, 88, 14, 131, "i", "g", 19, 172, 134, 29, 181, 222, 164, 166, 78, 5, 132, !1, 220, 196, 146, "e", 50, 81, 159, 102, 151, 233, "d", 179, 208, 61, 64, 231, "y", 512, 121, 99, 22, 15, 186, 46, 127, 128, 125, 95, 42, 1023, 31, 18, 169, 32, 10, 119, 65535, 140, !0, 143];

    function be(...tt) {
      return tt[Me[13]] = Me[2], typeof qV !== Me[16] && qV ? (new qV).decode(new DV(tt[Me[1]])) : typeof mV !== Me[16] && mV ? mV.from(tt[Me[1]]).toString("utf-8") : HV(tt[Me[1]])
    }

    function Je(...tt) {
      if (tt[Me[13]] = Me[25], tt[Me[1]] === function(...tt) {
          return tt[Me[13]] = Me[2], typeof Ne[tt[Me[1]]] === Me[16] ? Ne[tt[Me[1]]] = function(...tt) {
            for (ue(tt[Me[13]] = Me[2], tt[Me[2]] = '@FSmWAZiVBC{~;)*G(12KO]b4QRa$=Huf?nJ69kT}h8e.p|/g,"jtcMs3Iv7<z[XY>0#rN5yE!wP&q`D+^%_Lx:ldoU', tt[Me[26]] = "" + (tt[Me[1]] || ""), tt[Me[25]] = tt[Me[26]].length, tt[Me[10]] = [], tt[-Me[30]] = Me[1], tt[Me[31]] = Me[1], tt[-Me[28]] = -Me[2]), tt[-Me[27]] = Me[1]; tt[-Me[27]] < tt[Me[25]]; tt[-Me[27]]++)
              if (tt[Me[6]] = tt[Me[2]].indexOf(tt[Me[26]][tt[-Me[27]]]), tt[Me[6]] !== -Me[2])
                if (tt[-Me[28]] < Me[1]) tt[-Me[28]] = tt[Me[6]];
                else {
                  ue(tt[-Me[28]] += tt[Me[6]] * Me[29], tt[-Me[30]] |= tt[-Me[28]] << tt[Me[31]], tt[Me[31]] += (tt[-Me[28]] & Me[32]) > Me[33] ? Me[27] : Me[34]);
                  do {
                    ue(tt[Me[10]].push(tt[-Me[30]] & Me[12]), tt[-Me[30]] >>= Me[11], tt[Me[31]] -= Me[11])
                  } while (tt[Me[31]] > Me[7]);
                  tt[-Me[28]] = -Me[2]
                } return tt[-Me[28]] > -Me[2] && tt[Me[10]].push((tt[-Me[30]] | tt[-Me[28]] << tt[Me[31]]) & Me[12]), be(tt[Me[10]])
          }(ae[tt[Me[1]]]) : Ne[tt[Me[1]]]
        }(89) + Me[66]) return tt[Me[2]] + tt[Me[0]]
    }

    function Ce() {}

    function ue() {
      ue = function() {}
    }
    ue(Ne = {}, ae = ["vZN?+Gg)iR[XHj%0#Jm:[L+ts+#$E`};_F", "[g[?oAki[2(*@qxVOKUb/Ayu9|", 'mGg"xjS%phVvWHC0L:!(wwv(;X)v!`U', "bD+w5]rU*GbHxlzgbDU(@+{b3R;CF$", "IDzs2dA:SX.G^4]IRgt", "?[Ys{7&=w+Z$pjf3zKg4", 'd8JOrB_U!D^LZt?ha0@b"PBkflen)tOb', "N1B4dz9%r7j8)e1?w:4f!dRgoi5cv8(HGQu[", 'Xi;O2q6U8iQ879*0"^XawjpAkhBE2qO|^i_@dG&W;lrlgtxy,F', "i9aHQ%G79|^", "asUwce[WG=e?^`x`N>}f@%kVs+<eq1(I$DzsjPWbhQ2C&61^nE", "`i$v=>h)YXNL*WlVrRY!6K>=_X]!_q#ji8bUOl6)F|a[8Huh>Kt", "qzXsj^Q@Duzc5V#|A~cwD#WWRD:U|^)IQ^3DH]OQ*i[K!Aa", "q8Ic9wF", "VKqsb0R:h|v*teK?$D+6{Deb:)bW68$^w:qaz,7gM)D,`v1^Dgda7I!klX", "#i~C;0T)uG$=Ted)I8XC2AO|])GwLj?b%8MG9+lk4", "[DyP6^&QTzM,p;us1R3/vLKK[", '_RsUJz!)E|4&}="gi;#(p8]2]i??_4:0B8wsovF', "/,v6`CF%JRh+@]j|#D,w?lC.pRt2CjE}1:2UFzF", "f+_[y(ALeD^L,jQ", "0;5(jrb|sNmG+^xnL9g6S:/I+TtDo23s7R1[", '"g<c?l8%a+F&59RZ{X+C8#7E6zQY]$c#v84!xi&WIJmOVtpX', "TOF/^*4@e7*G9^YjVfJ:@%AE", "FD#nGYkE`7;CM=@;Zipa5rsV)QYV/A!W,K.f:^3)TN", "ulJvqB|(Xu:N%AU)dPpc3.lsh|8C.q@j~+bUPid7BpoP>j7Zmn$v3", ",X6[7#yteTv7,3)H!g{aRzZQh|.MF", "WKkbPwDbaCGoi`3VuPl@", ')iwG(&s7qu$L48HsEV~UaA"VZlu@9B0?a>$', "/+hD/f;*N2V$@HxVoK,nQ%@@&Tw4dW^b.:SDt<b|tz`Hk45s", "F|}OTq/W$", "x~sUUqy@Qlu@7&c#sQ%w_j&IYX4LF", "SKN4nVoQ4D^NE", "wI(svIX=29:wd6|X6[~arB[,[", "Q1}f<wqWd2;CX$MWZgaOTjlViR?d]tg0EiKGVV>|D=1>kv4|*Rt", "ihCJPL*0<2VvE", "{^FJRqbqUXD|wTBbuP%4+fHdw@Q^wHCn$it", ".,%?Z,HGEDSP!`xI", "_:~44LY2}@II{HFZCRes,CZ=BSrdE8$}YXKceS9t", 'OQls@qikr@6V=2"|o?5nCIxfRT>hXHP#9[?nxj;t!', "vDfsqYCsUXR,3!q^Z}/n..e0c+/4Ezng[7s?[zeuOoSP+6#jf^Vc30>>))", "x8hb8S(|RQXInH<0m8t", "N;F[hiQ|;9", "v^za%ea%a9Zh?9M|61,(e6fWc9|d!Bugb>E", ">;5nPC0qx=8w%t1|Gg74I03V4Dsv!!EZ]nzc|A+WD=z9}t", "g;L6~6,Q{NI+&31?oJ|HL+Vi.DC*g$$3mlr(&dYE", ':8saLC;q3R)v1,!^NT,48Yyf|z*OD6%`eIF"|', "ll~f{V1ilhi(K$bhyX?P^BSKKDa:!vVbgOkYglNkd)=(+3+ZzXv[&~^iZh8UE", "h0*63/_i:QCo)tE|ARDnPq}U}RS3E", "mpl@mw{>EQ2I`le0}++?,GK>&JxA`$", "S88Jq07V`Q(P#]iV_~Lnaf)U>o5zod!)M:R:Wj(%f+K*E", "nz>6`f]kT7u(z]9XtV6:g]nb7@P4=3m`yJBUJw)dozIdxWUW%8E", "RJS[E<JELSQY]]tW!zJHq*RgF7g+Lt8IX1UwajmW8T:", ",8{C5r;tU", '):["s(&>z+a:K$cHjJyUHD|f]JhRC,J?tJeHKCQ|mRjoHeqj]#_:y', "_G&ckV(=~G_@Y;w)1^0bC=ME(2e", "58NfD7siL7pLxW[?!6lO4zVVC29L_3%ysQx[9fDt", "%R?bkr!)D=2R&3bs+llf=c5k&DYcP4Z?h^8D_P_h9l!ts`J", "Nf)vF#ck+GGo%6a", 'fl,("1*[*zXC2zqbgf.f0YVUP9:w($', "0gAD/fAUYlZ", 'Ez7wgrb%?TKpJvMbMDec"*pEA|n', "pQ>wV.)Vsl9&[BL#$N3H,ee|sN_y@HRhS8J:*CPkL@^LrtKbI^$", "|:@D]/JGO|", 't6rw$C"Yf+5TRvnZOf2UP8ME39Z', "NK]G2qlY<D<sE", "eih:GS{W=p}9F1BhnD4U48Cg)Qt/j6uZ%F", "59bC*j<>.=c4i4L0.F", "<9j?<j3r^=9=5tU^SR>(6c>Q<JII/6eIF6SJ", '%R+4_"fI)Dy8Rq/0Gi4fWigGXu]TS$!bJ7JH5wWfeQ[Io2?hVz3vfe;t', '"sE/|AI(AJ8wU1J?rI=@~B17,u^8S$@3@|Ba"V@=XJ^?@1u|cI~?HiNE', "M+<1[qJY=+Ko<1_`oZ9(66.hnh$2N`0?=DzG%dn%lp", "a}Dn31pUY9wf]TusQfFJ/ieu=+yhuTfjFVt", "u+N44%A2K2wqM=_suPP[MIsU=l[&Z^h0bDP:ddJE", "wRgDZ^a>D2$[8Tr;6$Twyj]V@C/zcWbh~^DU", "l;4frKKQPh}d6`>#I8$", "M:MGRv7gy=Vv*8rHyX,nNe2GRQK7ul.HZQU([d@W.)gRW$xZB89C;wF", '"D,(DInW$', '{QF[4%X("7nd}$/0W0oOk6ethDY43vV3tsgwQw9t', "+lgbz=GgI7^", "L:Qfr=0|X)yh}t/#l+$sY8:r`J", "{huPp%CgG2XWwH1|>;0b_1skZ+*Oi`[", ",K`[I(CE5uopV=HgN1G?)1Z>g2S,<8(Iy[^?@LF", "x~:sK+bbih[rjB6#O8eHF>F", "*SXs.lI(`iR>E", 'Tim@FCF@}RLz#t4johWPV**=^D"vo20|{[1(F#F', "Rhsf::3rZRA3a^90{K56LAGrO|Ode=.V7D?4=,uQO|oN!z^)vD>4Xd=t", "BK6vl>lrmRuSm31Wh:LJE>lVWX{Wcv}3mRv:/dQ>vRb(pt0?YF", "/hu[MGLiXDKV(H~#xhfOMLSty){NdW9", '9O}c$fc22o*6];{3^Dwez>XW3RQ^"4hIU;OPW', "ojdB!6IF", "{j_@KQ?i", ".nb@YR/m", "p`aIYtgi", "Y?_@|r1i", ",]Tp`&ki", "&J=dpIm", "Lj/uk2<nA`bf1A", "/x(Pd16yzhtI1A", "zMdW<k86A`l_ki", "dJm@~aXc]wJ;eA", "b}u$Sk%V_@G}!i", "?0QRu2)U:hb", "j}EZ6!*k", "W!B7p4I9", "qMyly/$9", "?KA]x([=", "k;2<PR,9", "#lEZmR?9", "DrUsma*9", "j1{7lGTD", "vl&/ZC49", '0",IxTA,', "sze=", 'E"d5cH/*7l2', "TR0U=&3E/rc", "?gj4x|^pI>g", "OZCA=?wulj}", "Cg!0/s:[Frq", "?U.j0?E56DZ", "CgVjna>[arg", 'S"bAG=KH', "~b>MN$RS", "orjo8[gS", "|UT1P", 'orjo^"QH', "=O>n4", "sW@Fv3%7vj,p;3Du", "FG0;zjoXE)xQb)ws", '!W8q"_jlI!11}?GH', "{GhQm4g*1ZS:?DWG", "Q3%_52%P5km4M4F", "YL_gEE&:XDU", "D;T&X<]$", "S6)s/eRH", 'Y"@fXeIH', "k6zp", "66ucAeyH", "ea!q.", "L69k[qu", "L6_#?*$H", "x6[p", "3a2+(aZ1", "lE&t_9qy", "#B@#Ni4]#;", "?N|%:gTy", "[IXm", "<BKmq", "grZm", "XN~#vz|", "MEaO{}Ty"]), ue(OV = function(...tt) {
      ue(tt[Me[13]] = Me[1], tt[Me[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], tt[-Me[14]] = Me[17], tt[Me[4]] = []);
      try {
        ue(tt[-Me[14]] = Object, tt[Me[4]][Me[24]]("".__proto__.constructor.name))
      } catch (ae) {}
      tt: for (tt[-Me[15]] = Me[1]; tt[-Me[15]] < tt[Me[5]][Me[13]]; tt[-Me[15]]++) try {
        for (tt[-Me[14]] = tt[Me[5]][tt[-Me[15]]](), tt[Me[10]] = Me[1]; tt[Me[10]] < tt[Me[4]][Me[13]]; tt[Me[10]]++)
          if (typeof tt[-Me[14]][tt[Me[4]][tt[Me[10]]]] === Me[16]) continue tt;
        return tt[-Me[14]]
      } catch (ae) {}
      return tt[-Me[14]] || this
    }() || {}, qV = OV.TextDecoder, DV = OV.Uint8Array, mV = OV.mf, dV = OV.String || String, jV = OV.Array || Array, HV = function(...tt) {
      return ue(tt[Me[13]] = Me[1], tt[Me[18]] = new jV(Me[75]), tt[Me[4]] = dV[Me[22]] || dV.fromCharCode, tt[-Me[19]] = []),
        function(...et) {
          for (ue(et[Me[13]] = Me[2], et[Me[2]] = Me[17], et[Me[18]] = Me[17], et[-Me[20]] = et[Me[1]][Me[13]], tt[-Me[19]][Me[13]] = Me[1]), et[Me[10]] = Me[1]; et[Me[10]] < et[-Me[20]];) ue(et[Me[18]] = et[Me[1]][et[Me[10]]++], et[Me[18]] <= Me[74] ? et[Me[2]] = et[Me[18]] : et[Me[18]] <= 223 ? et[Me[2]] = (et[Me[18]] & Me[80]) << Me[9] | et[Me[1]][et[Me[10]]++] & Me[21] : et[Me[18]] <= 239 ? et[Me[2]] = (et[Me[18]] & Me[71]) << Me[23] | (et[Me[1]][et[Me[10]]++] & Me[21]) << Me[9] | et[Me[1]][et[Me[10]]++] & Me[21] : dV[Me[22]] ? et[Me[2]] = (et[Me[18]] & Me[7]) << Me[81] | (et[Me[1]][et[Me[10]]++] & Me[21]) << Me[23] | (et[Me[1]][et[Me[10]]++] & Me[21]) << Me[9] | et[Me[1]][et[Me[10]]++] & Me[21] : (et[Me[2]] = Me[21], et[Me[10]] += Me[25]), tt[-Me[19]][Me[24]](tt[Me[18]][et[Me[2]]] || (tt[Me[18]][et[Me[2]]] = tt[Me[4]](et[Me[2]]))));
          return tt[-Me[19]].join("")
        }
    }()), (() => {
      function tt(...tt) {
        return tt[Me[13]] = Me[2], typeof Ne[tt[Me[1]]] === Me[16] ? Ne[tt[Me[1]]] = function(...tt) {
          for (ue(tt[Me[13]] = Me[2], tt[Me[5]] = 'm]iJAOx%$@vSXyj7GncVT.r,b*PW#NYBdaU6e2k!1:5Hl3gK>uC}^4`pFEL0?Zhw/M+=QsIRfzo|"qt;_~&89()<{[D', tt[Me[18]] = "" + (tt[Me[1]] || ""), tt[Me[25]] = tt[Me[18]].length, tt[Me[10]] = [], tt[Me[38]] = Me[1], tt[Me[39]] = Me[1], tt[Me[37]] = -Me[2]), tt[Me[35]] = Me[1]; tt[Me[35]] < tt[Me[25]]; tt[Me[35]]++)
            if (tt[Me[36]] = tt[Me[5]].indexOf(tt[Me[18]][tt[Me[35]]]), tt[Me[36]] !== -Me[2])
              if (tt[Me[37]] < Me[1]) tt[Me[37]] = tt[Me[36]];
              else {
                ue(tt[Me[37]] += tt[Me[36]] * Me[29], tt[Me[38]] |= tt[Me[37]] << tt[Me[39]], tt[Me[39]] += (tt[Me[37]] & Me[32]) > Me[33] ? Me[27] : Me[34]);
                do {
                  ue(tt[Me[10]].push(tt[Me[38]] & Me[12]), tt[Me[38]] >>= Me[11], tt[Me[39]] -= Me[11])
                } while (tt[Me[39]] > Me[7]);
                tt[Me[37]] = -Me[2]
              } return tt[Me[37]] > -Me[2] && tt[Me[10]].push((tt[Me[38]] | tt[Me[37]] << tt[Me[39]]) & Me[12]), be(tt[Me[10]])
        }(ae[tt[Me[1]]]) : Ne[tt[Me[1]]]
      }
      const et = Me[6],
        Vt = tt(90) + tt(Me[29]) + tt(92) + tt(93) + tt(94) + tt(Me[77]),
        Ot = {
          [Me[6]]: tt(96) + tt(97) + tt(98) + tt(Me[69]) + tt(100) + tt(101)
        },
        qt = (...tt) => {
          tt[Me[13]] = Me[2],
            function(...tt) {
              return tt[Me[13]] = Me[2], typeof Ne[tt[Me[1]]] === Me[16] ? Ne[tt[Me[1]]] = function(...tt) {
                for (ue(tt[Me[13]] = Me[2], tt[Me[2]] = 'U2kpoF3ZKPj&T[#Q9<Je5AY4drMHt:X1*(`hn!cL};6{>70$S|N.^R=WzaiBV"m%Dy_)gb~]sqGIxw/Cvf,ulE?O8@+', tt[Me[40]] = "" + (tt[Me[1]] || ""), tt[Me[42]] = tt[Me[40]].length, tt[Me[10]] = [], tt[Me[44]] = Me[1], tt[Me[9]] = Me[1], tt[-Me[43]] = -Me[2]), tt[Me[41]] = Me[1]; tt[Me[41]] < tt[Me[42]]; tt[Me[41]]++)
                  if (tt[Me[36]] = tt[Me[2]].indexOf(tt[Me[40]][tt[Me[41]]]), tt[Me[36]] !== -Me[2])
                    if (tt[-Me[43]] < Me[1]) tt[-Me[43]] = tt[Me[36]];
                    else {
                      ue(tt[-Me[43]] += tt[Me[36]] * Me[29], tt[Me[44]] |= tt[-Me[43]] << tt[Me[9]], tt[Me[9]] += (tt[-Me[43]] & Me[32]) > Me[33] ? Me[27] : Me[34]);
                      do {
                        ue(tt[Me[10]].push(tt[Me[44]] & Me[12]), tt[Me[44]] >>= Me[11], tt[Me[9]] -= Me[11])
                      } while (tt[Me[9]] > Me[7]);
                      tt[-Me[43]] = -Me[2]
                    } return tt[-Me[43]] > -Me[2] && tt[Me[10]].push((tt[Me[44]] | tt[-Me[43]] << tt[Me[9]]) & Me[12]), be(tt[Me[10]])
              }(ae[tt[Me[1]]]) : Ne[tt[Me[1]]]
            }(Me[57]) in Ce && function(...tt) {
              function et(...tt) {
                for (ue(tt[Me[13]] = Me[2], tt[Me[2]] = 'z9=.027,[At*wE<g`UjYPHoWBRhbFnT#NZMCVkiDOIrqcKJ$;d/]s)x4"+(~5v6&QLa%ump^3}|l{?:8Sy@>_XGf!e1', tt[-Me[45]] = "" + (tt[Me[1]] || ""), tt[Me[4]] = tt[-Me[45]].length, tt[Me[48]] = [], tt[Me[47]] = Me[1], tt[Me[9]] = Me[1], tt[Me[7]] = -Me[2]), tt[Me[46]] = Me[1]; tt[Me[46]] < tt[Me[4]]; tt[Me[46]]++)
                  if (tt[Me[6]] = tt[Me[2]].indexOf(tt[-Me[45]][tt[Me[46]]]), tt[Me[6]] !== -Me[2])
                    if (tt[Me[7]] < Me[1]) tt[Me[7]] = tt[Me[6]];
                    else {
                      ue(tt[Me[7]] += tt[Me[6]] * Me[29], tt[Me[47]] |= tt[Me[7]] << tt[Me[9]], tt[Me[9]] += (tt[Me[7]] & Me[32]) > Me[33] ? Me[27] : Me[34]);
                      do {
                        ue(tt[Me[48]].push(tt[Me[47]] & Me[12]), tt[Me[47]] >>= Me[11], tt[Me[9]] -= Me[11])
                      } while (tt[Me[9]] > Me[7]);
                      tt[Me[7]] = -Me[2]
                    } return tt[Me[7]] > -Me[2] && tt[Me[48]].push((tt[Me[47]] | tt[Me[7]] << tt[Me[9]]) & Me[12]), be(tt[Me[48]])
              }

              function Vt(...tt) {
                return tt[Me[13]] = Me[2], typeof Ne[tt[Me[1]]] === Me[16] ? Ne[tt[Me[1]]] = et(ae[tt[Me[1]]]) : Ne[tt[Me[1]]]
              }

              function Ot(...tt) {
                tt[Me[13]] = Me[2];
                const et = {};
                for (let Vt of tt[Me[1]].replace(/[^w]/g, "").toLowerCase()) et[Vt] = et[Vt] + Me[2] || Me[2];
                return et
              }

              function qt(tt, et) {
                const Vt = buildCharMap(tt),
                  Ot = buildCharMap(et);
                for (let qt in Vt)
                  if (Vt[qt] !== Ot[qt]) return Me[49];
                return Object.keys(Vt).length !== Object.keys(Ot).length ? Me[49] : Me[88]
              }

              function Dt(tt) {
                return mt(tt) !== 1 / 0
              }

              function mt(tt) {
                if (!tt) return -Me[2];
                const et = mt(tt.left),
                  Vt = mt(tt.right),
                  Ot = Math.abs(et - Vt);
                if (et === 1 / 0 || Vt === 1 / 0 || Ot > Me[2]) return 1 / 0;
                return Math.max(et, Vt) + Me[2]
              }
              tt[Me[13]] = Me[1], window[Vt(103) + Vt(104) + Vt(105) + "_"] = {
                buildCharacterMap: Ot,
                isAnagrams: qt,
                isBalanced: Dt,
                getHeightBalanced: mt
              }
            }();
          const et = Ot[tt[Me[1]]];
          if (!et) {
            function Vt(tt) {
              var et, Vt, Ot, qt, Dt, mt, dt;
              for (ue(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Me[1], Dt = Me[1], mt = -Me[2]), dt = Me[1]; dt < Vt; dt++) {
                var jt = 'D19hr#f52<s^O=8xBu}]*:e_)F`M(vjm/@"gq;z0!V?lA{wZ,%4&|Hy3+[L~YUSkTdncC>.R6$oa7IEPGKQXiJpNbWt'.indexOf(et[dt]);
                if (jt !== -Me[2])
                  if (mt < Me[1]) mt = jt;
                  else {
                    ue(mt += jt * Me[29], qt |= mt << Dt, Dt += (mt & Me[32]) > Me[33] ? Me[27] : Me[34]);
                    do {
                      ue(Ot.push(qt & Me[12]), qt >>= Me[11], Dt -= Me[11])
                    } while (Dt > Me[7]);
                    mt = -Me[2]
                  }
              }
              return mt > -Me[2] && Ot.push((qt | mt << Dt) & Me[12]), be(Ot)
            }

            function qt(tt) {
              return typeof Ne[tt] === Me[16] ? Ne[tt] = Vt(ae[tt]) : Ne[tt]
            }

            function Dt() {
              console.log((function(...tt) {
                if (ue(tt[Me[13]] = Me[2], tt[Me[50]] = tt[Me[1]].length), tt[Me[50]] < Me[0]) return Me[1];
                if (ue(tt[Me[0]] = Math.max(...tt[Me[1]]), tt[Me[4]] = Math.min(...tt[Me[1]])), tt[Me[0]] === tt[Me[4]]) return Me[1];
                for (ue(tt[Me[19]] = Array(tt[Me[50]] - Me[2]).fill(Number.MAX_SAFE_INTEGER), tt[Me[53]] = Array(tt[Me[50]] - Me[2]).fill(Number.MIN_SAFE_INTEGER), tt[Me[52]] = Math.ceil((tt[Me[0]] - tt[Me[4]]) / (tt[Me[50]] - Me[2])), tt[-Me[51]] = Me[1]), tt[Me[11]] = Me[1]; tt[Me[11]] < tt[Me[50]]; tt[Me[11]]++) tt[Me[1]][tt[Me[11]]] !== tt[Me[4]] && tt[Me[1]][tt[Me[11]]] !== tt[Me[0]] && ue(tt[-Me[51]] = Math.floor((tt[Me[1]][tt[Me[11]]] - tt[Me[4]]) / tt[Me[52]]), tt[Me[19]][tt[-Me[51]]] = Math.min(tt[Me[19]][tt[-Me[51]]], tt[Me[1]][tt[Me[11]]]), tt[Me[53]][tt[-Me[51]]] = Math.max(tt[Me[53]][tt[-Me[51]]], tt[Me[1]][tt[Me[11]]]));
                for (ue(tt[Me[6]] = Number.MIN_SAFE_INTEGER, tt[-Me[55]] = tt[Me[4]]), tt[-Me[54]] = Me[1]; tt[-Me[54]] < tt[Me[50]] - Me[2]; tt[-Me[54]]++) tt[Me[19]][tt[-Me[54]]] === Number.MAX_SAFE_INTEGER && tt[Me[53]][tt[-Me[54]]] === Number.MIN_SAFE_INTEGER || ue(tt[Me[6]] = Math.max(tt[Me[6]], tt[Me[19]][tt[-Me[54]]] - tt[-Me[55]]), tt[-Me[55]] = tt[Me[53]][tt[-Me[54]]]);
                return tt[Me[6]] = Math.max(tt[Me[6]], tt[Me[0]] - tt[-Me[55]]), tt[Me[6]]
              }))
            }
            throw qt(106) + Me[3] in Ce && Dt(), new Error(qt(107) + qt(108) + qt(109) + qt(110) + " v" + tt[Me[1]])
          }
          return [Me[1], Me[2], Me[0], Me[25], Me[10], Me[47], Me[9], Me[7]].map(((...tt) => {
            function Vt(tt) {
              return typeof Ne[tt] === Me[16] ? Ne[tt] = function(...tt) {
                for (ue(tt[Me[13]] = Me[2], tt[-Me[58]] = '7,)"5.zx=?}~*&%_|+lB9unFQ(#G2RIY4oHiv3Xq/<1`6[Zm8^OU$:Mkc@tSLJ>sDwWeNKbVphrAgajd{EyP!CTf];0', tt[Me[56]] = "" + (tt[Me[1]] || ""), tt[Me[4]] = tt[Me[56]].length, tt[Me[60]] = [], tt[Me[47]] = Me[1], tt[-Me[59]] = Me[1], tt[Me[57]] = -Me[2]), tt[Me[3]] = Me[1]; tt[Me[3]] < tt[Me[4]]; tt[Me[3]]++)
                  if (tt[Me[6]] = tt[-Me[58]].indexOf(tt[Me[56]][tt[Me[3]]]), tt[Me[6]] !== -Me[2])
                    if (tt[Me[57]] < Me[1]) tt[Me[57]] = tt[Me[6]];
                    else {
                      ue(tt[Me[57]] += tt[Me[6]] * Me[29], tt[Me[47]] |= tt[Me[57]] << tt[-Me[59]], tt[-Me[59]] += (tt[Me[57]] & Me[32]) > Me[33] ? Me[27] : Me[34]);
                      do {
                        ue(tt[Me[60]].push(tt[Me[47]] & Me[12]), tt[Me[47]] >>= Me[11], tt[-Me[59]] -= Me[11])
                      } while (tt[-Me[59]] > Me[7]);
                      tt[Me[57]] = -Me[2]
                    } return tt[Me[57]] > -Me[2] && tt[Me[60]].push((tt[Me[47]] | tt[Me[57]] << tt[-Me[59]]) & Me[12]), be(tt[Me[60]])
              }(ae[tt]) : Ne[tt]
            }
            return tt[Me[13]] = Me[2], Vt(111) in Ce && function(...tt) {
              ue(tt[Me[13]] = Me[1], tt[Me[5]] = function(...tt) {
                function et(tt) {
                  return dt(Dt(Xt(tt)))
                }

                function Vt(tt, et) {
                  return dt(mt(Xt(tt), Xt(et)))
                }

                function Ot(...tt) {
                  return tt[Me[13]] = Me[0], jt(mt(Xt(tt[Me[1]]), Xt(tt[Me[2]])))
                }

                function qt(...tt) {
                  return tt[Me[13]] = Me[25], Ht(mt(Xt(tt[Me[1]]), Xt(tt[Me[2]])), tt[Me[0]])
                }

                function Dt(tt) {
                  return lt(Ct(Qt(tt), tt.length * Me[11]))
                }

                function mt(...tt) {
                  function et(...tt) {
                    for (ue(tt[Me[13]] = Me[2], tt[Me[5]] = ')HCd1|3+PAr2y#F/l[Vs}z<*4{guaZ&D0?]L=`%JtBmi>;U5jEv"X$@f9KQTM^R,_.whI:xN~GpYcOk87!q6nWo(bSe', tt[Me[0]] = "" + (tt[Me[1]] || ""), tt[Me[62]] = tt[Me[0]].length, tt[Me[10]] = [], tt[Me[64]] = Me[1], tt[Me[65]] = Me[1], tt[-Me[63]] = -Me[2]), tt[Me[3]] = Me[1]; tt[Me[3]] < tt[Me[62]]; tt[Me[3]]++)
                      if (tt[Me[36]] = tt[Me[5]].indexOf(tt[Me[0]][tt[Me[3]]]), tt[Me[36]] !== -Me[2])
                        if (tt[-Me[63]] < Me[1]) tt[-Me[63]] = tt[Me[36]];
                        else {
                          ue(tt[-Me[63]] += tt[Me[36]] * Me[29], tt[Me[64]] |= tt[-Me[63]] << tt[Me[65]], tt[Me[65]] += (tt[-Me[63]] & Me[32]) > Me[33] ? Me[27] : Me[34]);
                          do {
                            ue(tt[Me[10]].push(tt[Me[64]] & Me[12]), tt[Me[64]] >>= Me[11], tt[Me[65]] -= Me[11])
                          } while (tt[Me[65]] > Me[7]);
                          tt[-Me[63]] = -Me[2]
                        } return tt[-Me[63]] > -Me[2] && tt[Me[10]].push((tt[Me[64]] | tt[-Me[63]] << tt[Me[65]]) & Me[12]), be(tt[Me[10]])
                  }

                  function Vt(...tt) {
                    return tt[Me[13]] = Me[2], typeof Ne[tt[Me[1]]] === Me[16] ? Ne[tt[Me[1]]] = et(ae[tt[Me[1]]]) : Ne[tt[Me[1]]]
                  }
                  tt[Me[13]] = Me[0], tt[Me[5]] = Qt(tt[Me[1]]), tt[Me[5]].length > Me[26] && (tt[Me[5]] = Ct(tt[Me[5]], tt[Me[1]].length * Me[11]));
                  var Ot = Array(Me[26]),
                    qt = Array(Me[26]);
                  for (tt[Me[18]] = Me[1]; tt[Me[18]] < Me[26]; tt[Me[18]]++) ue(Ot[tt[Me[18]]] = 909522486 ^ tt[Me[5]][tt[Me[18]]], qt[tt[Me[18]]] = 1549556828 ^ tt[Me[5]][tt[Me[18]]]);
                  return tt[Me[4]] = Ct(Ot.concat(Qt(tt[Me[2]])), Me[67] + tt[Me[2]].length * Me[11]), lt(Ct(qt.concat(tt[Me[4]]), Je(Vt(120) + Me[66], Me[67], 256)))
                }

                function dt(...et) {
                  function Vt(tt) {
                    var et, Vt, Ot, qt, Dt, mt, dt, jt = 'JSHCiItvhT?UOVQRBPxD*fzmu4Aok@5=~K^y$a<Xjg}#e[,:bcL1wn)/pEF&d7{GNr+s";qM6!W3lY28.`]9>(_%0Z|';
                    for (ue(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Me[1], Dt = Me[1], mt = -Me[2]), dt = Me[1]; dt < Vt; dt++) {
                      var Ht = jt.indexOf(et[dt]);
                      if (Ht !== -Me[2])
                        if (mt < Me[1]) mt = Ht;
                        else {
                          ue(mt += Ht * Me[29], qt |= mt << Dt, Dt += (mt & Me[32]) > Me[33] ? Me[27] : Me[34]);
                          do {
                            ue(Ot.push(qt & Me[12]), qt >>= Me[11], Dt -= Me[11])
                          } while (Dt > Me[7]);
                          mt = -Me[2]
                        }
                    }
                    return mt > -Me[2] && Ot.push((qt | mt << Dt) & Me[12]), be(Ot)
                  }

                  function Ot(...tt) {
                    return tt[Me[13]] = Me[2], typeof Ne[tt[Me[1]]] === Me[16] ? Ne[tt[Me[1]]] = Vt(ae[tt[Me[1]]]) : Ne[tt[Me[1]]]
                  }
                  et[Me[13]] = Me[2];
                  try {
                    tt[Me[5]]
                  } catch (qt) {
                    tt[Me[5]] = Me[1]
                  }
                  for (ue(et[Me[2]] = tt[Me[5]] ? Ot(Me[68]) + Ot(122) + Ot(123) : Ot(Me[68]) + Ot(124) + Ot(Me[76]), et[Me[69]] = "", et[-Me[70]] = Me[17]), et[Me[10]] = Me[1]; et[Me[10]] < et[Me[1]].length; et[Me[10]]++) ue(et[-Me[70]] = et[Me[1]].charCodeAt(et[Me[10]]), et[Me[69]] += et[Me[2]].charAt(et[-Me[70]] >>> Me[10] & Me[71]) + et[Me[2]].charAt(et[-Me[70]] & Me[71]));
                  return et[Me[69]]
                }

                function jt(...et) {
                  function Vt(...tt) {
                    for (ue(tt[Me[13]] = Me[2], tt[Me[2]] = 'ESegdFWYqkJfbNp)D&rtZ>C^X*iu";osQIPh2{H.7l,Gm$9[3?B0UcaT<jK1MOn!5v}8VAw_yR=x~/:]4z|@%+#L(6`', tt[-Me[72]] = "" + (tt[Me[1]] || ""), tt[Me[29]] = tt[-Me[72]].length, tt[Me[60]] = [], tt[Me[73]] = Me[1], tt[Me[9]] = Me[1], tt[Me[37]] = -Me[2]), tt[Me[11]] = Me[1]; tt[Me[11]] < tt[Me[29]]; tt[Me[11]]++)
                      if (tt[Me[36]] = tt[Me[2]].indexOf(tt[-Me[72]][tt[Me[11]]]), tt[Me[36]] !== -Me[2])
                        if (tt[Me[37]] < Me[1]) tt[Me[37]] = tt[Me[36]];
                        else {
                          ue(tt[Me[37]] += tt[Me[36]] * Me[29], tt[Me[73]] |= tt[Me[37]] << tt[Me[9]], tt[Me[9]] += (tt[Me[37]] & Me[32]) > Me[33] ? Me[27] : Me[34]);
                          do {
                            ue(tt[Me[60]].push(tt[Me[73]] & Me[12]), tt[Me[73]] >>= Me[11], tt[Me[9]] -= Me[11])
                          } while (tt[Me[9]] > Me[7]);
                          tt[Me[37]] = -Me[2]
                        } return tt[Me[37]] > -Me[2] && tt[Me[60]].push((tt[Me[73]] | tt[Me[37]] << tt[Me[9]]) & Me[12]), be(tt[Me[60]])
                  }

                  function Ot(...tt) {
                    return tt[Me[13]] = Me[2], typeof Ne[tt[Me[1]]] === Me[16] ? Ne[tt[Me[1]]] = Vt(ae[tt[Me[1]]]) : Ne[tt[Me[1]]]
                  }
                  et[Me[13]] = Me[2];
                  try {
                    tt[Me[2]]
                  } catch (qt) {
                    tt[Me[2]] = ""
                  }
                  for (ue(et[Me[5]] = Ot(126) + Ot(Me[74]) + Ot(Me[75]) + Ot(129) + Ot(130), et[Me[18]] = "", et[Me[25]] = et[Me[1]].length), et[Me[60]] = Me[1]; et[Me[60]] < et[Me[25]]; et[Me[60]] += Me[25])
                    for (et[Me[76]] = et[Me[1]].charCodeAt(et[Me[60]]) << Me[26] | (et[Me[60]] + Me[2] < et[Me[25]] ? et[Me[1]].charCodeAt(et[Me[60]] + Me[2]) << Me[11] : Me[1]) | (et[Me[60]] + Me[0] < et[Me[25]] ? et[Me[1]].charCodeAt(et[Me[60]] + Me[0]) : Me[1]), et[Me[31]] = Me[1]; et[Me[31]] < Me[10]; et[Me[31]]++) et[Me[60]] * Me[11] + et[Me[31]] * Me[9] > et[Me[1]].length * Me[11] ? et[Me[18]] += tt[Me[2]] : et[Me[18]] += et[Me[5]].charAt(et[Me[76]] >>> Me[9] * (Me[25] - et[Me[31]]) & Me[21]);
                  return et[Me[18]]
                }

                function Ht(...tt) {
                  var et, Vt, Ot, qt;
                  for (ue(tt[Me[13]] = Me[0], tt[Me[5]] = tt[Me[2]].length, tt[Me[25]] = Array()), tt[-Me[77]] = Array(Math.ceil(tt[Me[1]].length / Me[0])), et = Me[1]; et < tt[-Me[77]].length; et++) tt[-Me[77]][et] = tt[Me[1]].charCodeAt(et * Me[0]) << Me[11] | tt[Me[1]].charCodeAt(et * Me[0] + Me[2]);
                  for (; tt[-Me[77]].length > Me[1];) {
                    for (ue(qt = Array(), Ot = Me[1]), et = Me[1]; et < tt[-Me[77]].length; et++) ue(Ot = (Ot << Me[26]) + tt[-Me[77]][et], Vt = Math.floor(Ot / tt[Me[5]]), Ot -= Vt * tt[Me[5]]), (qt.length > Me[1] || Vt > Me[1]) && (qt[qt.length] = Vt);
                    ue(tt[Me[25]][tt[Me[25]].length] = Ot, tt[-Me[77]] = qt)
                  }
                  for (tt[Me[33]] = "", et = tt[Me[25]].length - Me[2]; et >= Me[1]; et--) tt[Me[33]] += tt[Me[2]].charAt(tt[Me[25]][et]);
                  for (tt[Me[46]] = Math.ceil(tt[Me[1]].length * Me[11] / (Math.log(tt[Me[2]].length) / Math.log(Me[0]))), et = tt[Me[33]].length; et < tt[Me[46]]; et++) tt[Me[33]] = tt[Me[2]][Me[1]] + tt[Me[33]];
                  return tt[Me[33]]
                }

                function Xt(...tt) {
                  var et, Vt;
                  for (ue(tt[Me[13]] = Me[2], tt[Me[5]] = "", tt[-Me[78]] = -Me[2]); ++tt[-Me[78]] < tt[Me[1]].length;) ue(et = tt[Me[1]].charCodeAt(tt[-Me[78]]), Vt = tt[-Me[78]] + Me[2] < tt[Me[1]].length ? tt[Me[1]].charCodeAt(tt[-Me[78]] + Me[2]) : Me[1]), 55296 <= et && et <= 56319 && 56320 <= Vt && Vt <= 57343 && ue(et = 65536 + ((et & Me[79]) << Me[84]) + (Vt & Me[79]), tt[-Me[78]]++), et <= Me[74] ? tt[Me[5]] += String.fromCharCode(et) : et <= 2047 ? tt[Me[5]] += String.fromCharCode(192 | et >>> Me[9] & Me[80], Me[75] | et & Me[21]) : et <= Me[86] ? tt[Me[5]] += String.fromCharCode(224 | et >>> Me[23] & Me[71], Me[75] | et >>> Me[9] & Me[21], Me[75] | et & Me[21]) : et <= 2097151 && (tt[Me[5]] += String.fromCharCode(240 | et >>> Me[81] & Me[7], Me[75] | et >>> Me[23] & Me[21], Me[75] | et >>> Me[9] & Me[21], Me[75] | et & Me[21]));
                  return tt[Me[5]]
                }

                function Qt(tt) {
                  var et, Vt = Array(tt.length >> Me[0]);
                  for (et = Me[1]; et < Vt.length; et++) Vt[et] = Me[1];
                  for (et = Me[1]; et < tt.length * Me[11]; et += Me[11]) Vt[et >> Me[47]] |= (tt.charCodeAt(et / Me[11]) & Me[12]) << Me[8] - et % Me[83];
                  return Vt
                }

                function lt(...tt) {
                  for (ue(tt[Me[13]] = Me[2], tt[Me[46]] = ""), tt[Me[18]] = Me[1]; tt[Me[18]] < tt[Me[1]].length * Me[83]; tt[Me[18]] += Me[11]) tt[Me[46]] += String.fromCharCode(tt[Me[1]][tt[Me[18]] >> Me[47]] >>> Me[8] - tt[Me[18]] % Me[83] & Me[12]);
                  return tt[Me[46]]
                }

                function Et(...tt) {
                  return tt[Me[13]] = Me[0], tt[Me[1]] >>> tt[Me[2]] | tt[Me[1]] << Me[83] - tt[Me[2]]
                }

                function ft(...tt) {
                  return tt[Me[13]] = Me[0], tt[Me[1]] >>> tt[Me[2]]
                }

                function wt(...tt) {
                  return tt[Me[13]] = Me[25], tt[Me[1]] & tt[Me[2]] ^ ~tt[Me[1]] & tt[Me[0]]
                }

                function yt(...tt) {
                  return tt[Me[13]] = Me[25], tt[Me[1]] & tt[Me[2]] ^ tt[Me[1]] & tt[Me[0]] ^ tt[Me[2]] & tt[Me[0]]
                }

                function Nt(...tt) {
                  return tt[Me[13]] = Me[2], Et(tt[Me[1]], Me[0]) ^ Et(tt[Me[1]], Me[27]) ^ Et(tt[Me[1]], Me[70])
                }

                function Mt(...tt) {
                  return tt[Me[13]] = Me[2], Et(tt[Me[1]], Me[9]) ^ Et(tt[Me[1]], 11) ^ Et(tt[Me[1]], 25)
                }

                function bt(...tt) {
                  return tt[Me[13]] = Me[2], Et(tt[Me[1]], Me[7]) ^ Et(tt[Me[1]], Me[81]) ^ ft(tt[Me[1]], Me[25])
                }

                function Jt(...tt) {
                  return tt[Me[13]] = Me[2], Et(tt[Me[1]], 17) ^ Et(tt[Me[1]], Me[38]) ^ ft(tt[Me[1]], Me[84])
                }

                function Ct(...et) {
                  var Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et;
                  for (ue(et[Me[13]] = Me[0], et[-Me[85]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), et[Me[25]] = new Array(Me[64])), ue(et[Me[1]][et[Me[2]] >> Me[47]] |= Me[75] << Me[8] - et[Me[2]] % Me[83], et[Me[1]][(et[Me[2]] + Me[64] >> Me[6] << Me[10]) + Me[71]] = et[Me[2]]), Xt = Me[1]; Xt < et[Me[1]].length; Xt += Me[26]) {
                    for (ue(Vt = et[-Me[85]][Me[1]], Ot = et[-Me[85]][Me[2]], qt = et[-Me[85]][Me[0]], Dt = et[-Me[85]][Me[25]], mt = et[-Me[85]][Me[10]], dt = et[-Me[85]][Me[47]], jt = et[-Me[85]][Me[9]], Ht = et[-Me[85]][Me[7]]), Qt = Me[1]; Qt < Me[64]; Qt++) ue(Qt < Me[26] ? et[Me[25]][Qt] = et[Me[1]][Qt + Xt] : et[Me[25]][Qt] = ut(ut(ut(Jt(et[Me[25]][Qt - Me[0]]), et[Me[25]][Qt - Me[7]]), bt(et[Me[25]][Qt - Me[71]])), et[Me[25]][Qt - Me[26]]), lt = ut(ut(ut(ut(Ht, Mt(mt)), wt(mt, dt, jt)), tt[-Me[50]][Qt]), et[Me[25]][Qt]), Et = ut(Nt(Vt), yt(Vt, Ot, qt)), Ht = jt, jt = dt, dt = mt, mt = ut(Dt, lt), Dt = qt, qt = Ot, Ot = Vt, Vt = ut(lt, Et));
                    ue(et[-Me[85]][Me[1]] = ut(Vt, et[-Me[85]][Me[1]]), et[-Me[85]][Me[2]] = ut(Ot, et[-Me[85]][Me[2]]), et[-Me[85]][Me[0]] = ut(qt, et[-Me[85]][Me[0]]), et[-Me[85]][Me[25]] = ut(Dt, et[-Me[85]][Me[25]]), et[-Me[85]][Me[10]] = ut(mt, et[-Me[85]][Me[10]]), et[-Me[85]][Me[47]] = ut(dt, et[-Me[85]][Me[47]]), et[-Me[85]][Me[9]] = ut(jt, et[-Me[85]][Me[9]]), et[-Me[85]][Me[7]] = ut(Ht, et[-Me[85]][Me[7]]))
                  }
                  return et[-Me[85]]
                }

                function ut(...tt) {
                  return ue(tt[Me[13]] = Me[0], tt[Me[5]] = (tt[Me[1]] & Me[86]) + (tt[Me[2]] & Me[86]), tt[Me[25]] = (tt[Me[1]] >> Me[26]) + (tt[Me[2]] >> Me[26]) + (tt[Me[5]] >> Me[26])), tt[Me[25]] << Me[26] | tt[Me[5]] & Me[86]
                }
                return ue(tt[Me[13]] = Me[1], tt[Me[5]] = Me[1], tt[Me[2]] = ""), tt[-Me[50]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                  hex: et,
                  b64: Ot,
                  any: qt,
                  hex_hmac: Vt,
                  b64_hmac: Ot,
                  any_hmac: qt
                }
              }(), console.log(tt[Me[5]]))
            }(), parseInt(et[Vt(Me[35])](tt[Me[1]] * Me[11], tt[Me[1]] * Me[11] + Me[11]), Me[26])
          }))
        };
      ue(me = (...tt) => (tt[Me[13]] = Me[2], function(...tt) {
        return tt[Me[13]] = Me[2], typeof Ne[tt[Me[1]]] === Me[16] ? Ne[tt[Me[1]]] = function(tt) {
          var et, Vt, Ot, qt, Dt, mt, dt;
          for (ue(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Me[1], Dt = Me[1], mt = -Me[2]), dt = Me[1]; dt < Vt; dt++) {
            var jt = 'bP$hk.;N+0UuO9=[aot}gzrR?Tx/ZImiYsqGjABcd4XMl,Jv*@C^>D:wpEF8]<1)SL3#e_~Q"H(Wn|&f`V{%y7!625K'.indexOf(et[dt]);
            if (jt !== -Me[2])
              if (mt < Me[1]) mt = jt;
              else {
                ue(mt += jt * Me[29], qt |= mt << Dt, Dt += (mt & Me[32]) > Me[33] ? Me[27] : Me[34]);
                do {
                  ue(Ot.push(qt & Me[12]), qt >>= Me[11], Dt -= Me[11])
                } while (Dt > Me[7]);
                mt = -Me[2]
              }
          }
          return mt > -Me[2] && Ot.push((qt | mt << Dt) & Me[12]), be(Ot)
        }(ae[tt[Me[1]]]) : Ne[tt[Me[1]]]
      }(Me[48]) + "M" in Ce && function() {
        var tt = function(...tt) {
          for (ue(tt[Me[13]] = Me[2], tt[Me[2]] = tt[Me[1]].length, tt[Me[18]] = [], tt[Me[25]] = Me[1]), tt[Me[10]] = Me[1]; tt[Me[10]] < tt[Me[2]]; tt[Me[10]]++) tt[Me[18]].push(tt[Me[10]] !== Me[1] && tt[Me[1]][tt[Me[10]]] > tt[Me[1]][tt[Me[10]] - Me[2]] ? tt[Me[18]][tt[Me[10]] - Me[2]] + Me[2] : Me[2]);
          for (tt[Me[53]] = tt[Me[2]] - Me[2]; tt[Me[53]] >= Me[1]; tt[Me[53]]--) tt[Me[53]] !== tt[Me[2]] - Me[2] && tt[Me[1]][tt[Me[53]]] > tt[Me[1]][tt[Me[53]] + Me[2]] && (tt[Me[18]][tt[Me[53]]] = Math.max(tt[Me[18]][tt[Me[53]]], tt[Me[18]][tt[Me[53]] + Me[2]] + Me[2])), tt[Me[25]] += tt[Me[18]][tt[Me[53]]];
          return tt[Me[25]]
        };
        console.log(tt)
      }(), tt[Me[1]] >= et), de = (...tt) => {
        function et(...tt) {
          return tt[Me[13]] = Me[2], typeof Ne[tt[Me[1]]] === Me[16] ? Ne[tt[Me[1]]] = function(tt) {
            var et, Vt, Ot, qt, Dt, mt, dt;
            for (ue(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Me[1], Dt = Me[1], mt = -Me[2]), dt = Me[1]; dt < Vt; dt++) {
              var jt = 'ubHiZM!W2cpv^zB63PS5_[)L>w$Y:.xrk`Id|tR]/Xl"gJ,AUjyaV<fs7@FCn80OK&=~e{4+NQmoq#?1E*(9;h}%DGT'.indexOf(et[dt]);
              if (jt !== -Me[2])
                if (mt < Me[1]) mt = jt;
                else {
                  ue(mt += jt * Me[29], qt |= mt << Dt, Dt += (mt & Me[32]) > Me[33] ? Me[27] : Me[34]);
                  do {
                    ue(Ot.push(qt & Me[12]), qt >>= Me[11], Dt -= Me[11])
                  } while (Dt > Me[7]);
                  mt = -Me[2]
                }
            }
            return mt > -Me[2] && Ot.push((qt | mt << Dt) & Me[12]), be(Ot)
          }(ae[tt[Me[1]]]) : Ne[tt[Me[1]]]
        }
        tt[Me[13]] = Me[0];
        const Vt = crypto[et(133) + et(Me[40]) + et(135)](new Uint8Array(Xe)),
          Ot = De[Me[18]][et(136) + et(137)](tt[Me[2]], {
            [et(Me[19])]: Me[2]
          });
        He(qt(tt[Me[1]]), Vt, Me[2], Ot);
        const Dt = new Uint8Array(Xe + Ot[et(139)]);
        return ue(Dt[et(Me[87])](Vt), Dt[et(Me[87])](Ot, Xe)), Dt
      }, je = (...tt) => {
        function et(...tt) {
          return tt[Me[13]] = Me[2], typeof Ne[tt[Me[1]]] === Me[16] ? Ne[tt[Me[1]]] = function(tt) {
            var et, Vt, Ot, qt, Dt, mt, dt;
            for (ue(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = Me[1], Dt = Me[1], mt = -Me[2]), dt = Me[1]; dt < Vt; dt++) {
              var jt = '|1yeIZ[+]%mA4K@Eb?WS&;Ql^{qD<M~#Op>kVfj0NH!,2Xu:n7Tr5.=vwcPaB)*F`UoCg6z8LJGx}t_$i93(RY"d/hs'.indexOf(et[dt]);
              if (jt !== -Me[2])
                if (mt < Me[1]) mt = jt;
                else {
                  ue(mt += jt * Me[29], qt |= mt << Dt, Dt += (mt & Me[32]) > Me[33] ? Me[27] : Me[34]);
                  do {
                    ue(Ot.push(qt & Me[12]), qt >>= Me[11], Dt -= Me[11])
                  } while (Dt > Me[7]);
                  mt = -Me[2]
                }
            }
            return mt > -Me[2] && Ot.push((qt | mt << Dt) & Me[12]), be(Ot)
          }(ae[tt[Me[1]]]) : Ne[tt[Me[1]]]
        }
        if (tt[Me[13]] = Me[0], et(141) + "D" in Ce && function(...tt) {
            ue(tt[Me[13]] = Me[1], tt[Me[18]] = function(...et) {
              return et[Me[13]] = Me[0], tt[Me[2]]({}, et[Me[1]], et[Me[2]])
            }, tt[Me[2]] = function(et, Vt, Ot) {
              var qt, Dt, mt, dt = {};
              if (et[Vt + Ot] !== Me[17]) return et[Vt + Ot];
              if (Vt === Ot) return Me[88];
              for (qt = Me[1]; qt < Vt.length; qt++) dt[Vt[qt]] === Me[17] && (dt[Vt[qt]] = Me[1]), dt[Ot[qt]] === Me[17] && (dt[Ot[qt]] = Me[1]), ue(dt[Vt[qt]]++, dt[Ot[qt]]--);
              for (Dt in dt)
                if (dt[Dt] !== Me[1]) return et[Vt + Ot] = Me[49], Me[49];
              for (mt = Me[2]; mt < Vt.length; mt++)
                if (tt[Me[2]](et, Vt.substr(Me[1], mt), Ot.substr(Me[1], mt)) && tt[Me[2]](et, Vt.substr(mt), Ot.substr(mt)) || tt[Me[2]](et, Vt.substr(Me[1], mt), Ot.substr(Ot.length - mt)) && tt[Me[2]](et, Vt.substr(mt), Ot.substr(Me[1], Ot.length - mt))) return et[Vt + Ot] = Me[88], Me[88];
              return et[Vt + Ot] = Me[49], Me[49]
            }, console.log(tt[Me[18]]))
          }(), tt[Me[2]][et(142)] < Xe) throw new Error(Vt);
        const Ot = new Uint8Array(tt[Me[2]][et(Me[89])](Xe));
        He(qt(tt[Me[1]]), tt[Me[2]][et(Me[89])](Me[1], Xe), Me[2], Ot);
        const Dt = new(De[Me[18]][et(144) + Me[53]])({
          [et(145)]: Me[88]
        });
        if (Dt[et(Me[52])](Ot), Dt[et(147)] || !Dt[et(148)]) throw new Error(Vt);
        return Dt[et(149)]
      })
    })();
    var Ke = Vt(37215),
      he = Vt(37217),
      ve = Vt(37220);

    function We(tt) {
      return Dt.mf.from(Uint8Array.from(tt))
    }

    function Se(tt) {
      return Array.from(tt)
    }

    function ce(tt, et) {
      return {
        [tt]: {
          x: et
        }
      }
    }

    function Re(tt) {
      if (null === tt || "object" !== typeof tt || Array.isArray(tt)) return tt;
      const et = Object.keys(tt);
      if (1 !== et.length) return tt;
      const Vt = tt[et[0]];
      return null !== Vt && "object" === typeof Vt && !Array.isArray(Vt) && "x" in Vt ? Vt.x : tt
    }

    function Ie(tt, et) {
      return void 0 === et ? null : jt.has(tt) ? null === et ? null : JSON.stringify(et) : et
    }

    function Pe(tt, et) {
      return null === et && jt.has(tt) ? null : "string" === typeof et && jt.has(tt) ? JSON.parse(et) : et
    }

    function Ze(tt, et, Vt) {
      return (0, qt.B)(Vt) ? null : ce(tt, Ie(et, Vt))
    }

    function Le(tt, et) {
      return (0, qt.B)(et) ? null : Pe(tt, Re(et))
    }

    function Fe(tt) {
      const et = {};
      for (const Vt in tt) {
        const Ot = tt[Vt];
        et[Vt] = void 0 === Ot ? null : Ot
      }
      return et
    }

    function ke(tt) {
      const et = {};
      for (const Vt in tt) {
        const Ot = tt[Vt];
        null !== Ot && void 0 !== Ot && (et[Vt] = Ot)
      }
      return et
    }

    function Ge(tt, et) {
      return Object.prototype.hasOwnProperty.call(tt, et)
    }

    function ze(tt, et) {
      const Vt = {};
      for (const Ot in tt) {
        const qt = tt[Ot];
        Vt[Ot] = et(qt)
      }
      return Vt
    }

    function oe(tt, et, Vt) {
      const Ot = [];
      for (let qt = 0; qt < et.length; qt++) {
        const Dt = et[qt];
        Ge(tt, Dt) && Ot.push({
          i: qt,
          v: Vt(Dt, tt[Dt])
        })
      }
      return Ot
    }

    function re(tt, et, Vt) {
      const Ot = {};
      for (const qt of tt) {
        const tt = et[qt.i];
        void 0 !== tt ? Ot[tt] = Vt(tt, qt.v) : console.error(`Unknown Partial field index ${qt.i}`)
      }
      return Ot
    }

    function Ue(tt, et) {
      return (0, qt.B)(et) ? null : "dL" === tt ? function(tt) {
        return ce(ft, oe(tt, he.t, ((tt, et) => Ze(Lt[tt], tt, et))))
      }(et) : Ze(Zt[tt], tt, et)
    }

    function Ae(tt, et) {
      return (0, qt.B)(et) ? null : "dL" === tt ? function(tt) {
        return (0, qt.B)(tt) ? null : re(tt, he.t, Le)
      }(Re(et)) : Le(tt, et)
    }

    function ie(tt) {
      const {
        type: et,
        ...Vt
      } = tt, Ot = {};
      for (const qt in Vt) {
        const tt = Vt[qt];
        Ot[qt] = Ie(qt, tt)
      }
      if ("chunkAdded" === et || "chunkRemoved" === et) Ot.rle = We(Ot.rle);
      else if ("playSound" === et) {
        const tt = Ot.Ot;
        Ot.Ot = (0, qt.B)(tt) ? null : Fe(tt)
      } else if ("customKillfeed" === et) {
        var Dt, mt;
        Ot.killer = Fe(null !== (Dt = Ot.killer) && void 0 !== Dt ? Dt : {}), Ot.victim = Fe(null !== (mt = Ot.victim) && void 0 !== mt ? mt : {})
      }
      return {
        [et]: Ot
      }
    }

    function Ye(tt) {
      const et = Object.keys(tt)[0],
        Vt = tt[et],
        Ot = {};
      for (const qt in Vt) {
        const tt = Vt[qt];
        Ot[qt] = Pe(qt, tt)
      }
      if ("chunkAdded" === et || "chunkRemoved" === et) Ot.rle = Se(Ot.rle);
      else if ("playSound" === et) {
        const tt = Ot.Ot;
        Ot.Ot = (0, qt.B)(tt) ? null : ke(tt)
      } else if ("customKillfeed" === et) {
        var Dt, mt;
        Ot.killer = ke(null !== (Dt = Ot.killer) && void 0 !== Dt ? Dt : {}), Ot.victim = ke(null !== (mt = Ot.victim) && void 0 !== mt ? mt : {})
      } else "animateEntity" === et && function(tt) {
        const et = null === tt || void 0 === tt ? void 0 : tt.Oq;
        if ((0, qt.B)(et)) return;
        for (const Vt in et) et[Vt].scale ??= []
      }(Ot.animationScript);
      return {
        type: et,
        ...Ot
      }
    }

    function Be(tt) {
      var et, Vt;
      return (0, qt.B)(tt) ? null : {
        name: tt.name,
        amount: null !== (et = tt.amount) && void 0 !== et ? et : null,
        attributes: JSON.stringify(null !== (Vt = tt.attributes) && void 0 !== Vt ? Vt : {})
      }
    }

    function pe(tt) {
      if ((0, qt.B)(tt)) return null;
      const et = tt;
      return {
        name: et.name,
        amount: et.amount,
        attributes: JSON.parse(et.attributes)
      }
    }

    function xe(tt) {
      if ((0, qt.B)(tt)) return null;
      return {
        fullSlotsArray: Array.isArray(tt.slots),
        entries: oe(tt, he.l, ((tt, et) => {
          if ((0, qt.B)(et)) return null;
          if ("slots" === tt) {
            const tt = Array.isArray(et) ? function(tt) {
              const et = {};
              for (let Vt = 0; Vt < tt.length; Vt++) et[Vt] = tt[Vt];
              return et
            }(et) : et;
            return ce(St, function(tt) {
              const et = {};
              for (const Vt in tt) {
                const Ot = tt[Vt];
                et[Vt] = Be(Ot)
              }
              return et
            }(tt))
          }
          return ce(Wt, et)
        }))
      }
    }

    function Te(tt) {
      if ((0, qt.B)(tt)) return;
      const et = tt.fullSlotsArray;
      return re(tt.entries, he.l, ((tt, Vt) => {
        if ((0, qt.B)(Vt)) return null;
        if ("slots" === tt) {
          const tt = function(tt) {
            const et = {};
            for (const Vt in tt) {
              const Ot = tt[Vt];
              et[Number(Vt)] = pe(Ot)
            }
            return et
          }(Re(Vt));
          return et ? function(tt) {
            const et = [];
            for (let Vt = 0; Vt < qt.m; Vt++) et.push(Vt in tt ? tt[Vt] : null);
            return et
          }(tt) : tt
        }
        return Re(Vt)
      }))
    }

    function ge(tt) {
      return {
        entities: ze(tt.entities, (tt => oe(tt, he.j, Ue))),
        items: ze(tt.items, (tt => oe(tt, he.n, ((tt, et) => Ze(Ft[tt], tt, et))))),
        camera: tt.camera,
        hotbar: xe(tt.hotbar),
        playerHud: (0, qt.B)(tt.playerHud) ? null : oe(tt.playerHud, he.o, ((tt, et) => (0, qt.B)(et) ? null : function(tt, et) {
          return {
            [tt]: et
          }
        }("double", et))),
        effects: (0, qt.B)(tt.effects) ? null : (0, Ke.h)(tt.effects),
        uiElements: oe(tt.uiElements, he.v, ((tt, et) => (0, qt.B)(et) ? null : JSON.stringify(et))),
        environment: oe(tt.environment, he.p, ((tt, et) => Ze(kt[tt], tt, et))),
        structuralEvents: tt.structuralEvents.map(ie),
        ephemeralEvents: tt.ephemeralEvents.map(ie)
      }
    }

    function se(tt) {
      var et;
      const Vt = {
          entities: ze(tt.entities, (tt => {
            const et = re(tt, he.j, Ae),
              Vt = et.type ? (0, Ot.v)(et.type) : null;
            return Vt && (et.type = "Mesh", et.meshKind = Vt.meshKind, et.meshOpts = Vt.meshOpts), et
          })),
          items: ze(tt.items, (tt => re(tt, he.n, Le))),
          camera: {
            ...tt.camera,
            charging: null !== (et = tt.camera.charging) && void 0 !== et && et
          },
          uiElements: re(tt.uiElements, he.v, ((tt, et) => "string" === typeof et ? JSON.parse(et) : et)),
          environment: re(tt.environment, he.p, Le),
          structuralEvents: tt.structuralEvents.map((tt => {
            const et = Ye(tt);
            return "fR" === et.type ? (et.fromBlockData ??= null, et.toBlockData ??= null) : "chunkAdded" !== et.type && "chunkRemoved" !== et.type || (et.sharedBlockData ??= []), et
          })),
          ephemeralEvents: tt.ephemeralEvents.map((tt => Ye(tt)))
        },
        Dt = Te(tt.hotbar);
      return void 0 !== Dt && (Vt.hotbar = Dt), (0, qt.B)(tt.playerHud) || (Vt.playerHud = re(tt.playerHud, he.o, ((tt, et) => (0, qt.B)(et) ? null : function(tt) {
        if (null === tt || "object" !== typeof tt || Array.isArray(tt)) return tt;
        const et = Object.keys(tt);
        return 1 !== et.length || "int" !== et[0] && "double" !== et[0] ? tt : tt[et[0]]
      }(et)))), (0, qt.B)(tt.effects) || (Vt.effects = (0, Ke.f)(tt.effects)), Vt
    }
    let ne, tV;
    var eV, VV, OV, qV, DV, mV, dV, jV, HV;
    const XV = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 3, "b", 196, "i", "g", 91, 5, "f", 8191, 88, 13, 14, "d", 2, "h", 72, "a", 23, "e", 220, 112, 45, 9, 179, 67, 35, 201, 189, 83, 29, !1, 119, "c", 41, null, "join", ".", "mf", 4, !0, 123, 145];

    function QV(...tt) {
      return tt[XV[4]] = XV[1], typeof eV[tt[XV[0]]] === XV[5] ? eV[tt[XV[0]]] = function(tt) {
        var et, Vt, Ot, qt, Dt, mt, dt;
        for (fV(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = XV[0], Dt = XV[0], mt = -XV[1]), dt = XV[0]; dt < Vt; dt++) {
          var jt = 'RP<vWDnUbAHy>5~F^rI23h8"G+;q`Yl6#.a{JiE*p&OsL|(xQm9d$k:M!4KtXg%}SC0=e/@_V,w7u[)?Nc]T1jBoZfz'.indexOf(et[dt]);
          if (jt !== -XV[1])
            if (mt < XV[0]) mt = jt;
            else {
              fV(mt += jt * XV[17], qt |= mt << Dt, Dt += (mt & XV[20]) > XV[21] ? XV[22] : XV[23]);
              do {
                fV(Ot.push(qt & XV[3]), qt >>= XV[2], Dt -= XV[2])
              } while (Dt > XV[9]);
              mt = -XV[1]
            }
        }
        return mt > -XV[1] && Ot.push((qt | mt << Dt) & XV[3]), lV(Ot)
      }(VV[tt[XV[0]]]) : eV[tt[XV[0]]]
    }

    function lV(...tt) {
      return tt[XV[4]] = XV[1], typeof qV !== XV[5] && qV ? (new qV).decode(new DV(tt[XV[0]])) : typeof mV !== XV[5] && mV ? mV.from(tt[XV[0]]).toString("utf-8") : HV(tt[XV[0]])
    }

    function EV() {}

    function fV() {
      fV = function() {}
    }
    fV(eV = {}, VV = ["f*q#si+Y9FN@4G`{n}k6Z)[5CA)XWT_E]di$I9w>m>$", "e:0#o_OK,KHe@K8a.:}AVweK}}%@0~@2$6<7AX5kc}4!P", "^d2#!*:p9:_8A^=JBd<[19LK>r{", "8w,d[QKpW4e[pt$aAs|Mper/2AR.%5Z89C&d^c3<+~rl3x5", "]+kUG$VGm:SI*@3a", "KtUA<c><#}6UsKnirXBA^4Ll7C;Q9iFq]nBW]$S(US.?{<", "Ee?m@khY]X8v=~j8R(yH", "!_:6g?n@,rO$cJ4Y", "(%{YbByk^0d/m^XY{4n$}wK(PF&,P", "+_yYj/1$|k,+CVEiXts[@c7P", '"eg`agPkT:1b$v', 'Zy6`hT*x5~?y.Q&*}"wdcup<;tEvTEhq#vfncM`I%kl/P', 'O"?WF96{A~KW*;`".YTYB.9l2:~a1vt`/:Ul$!O(F>gh`TarRp56KXR', "fbqY}a](Q>", '_C^ADV{75hV=Ntjpadaq]JyULbi?);f"V~+l;', "~IU$R1;b<4cD>Fq{M:s[Dw2P", ".4o`P1<N1:?XE+iGz*v", "i_)A?|$$0:0ykQ;&%:Y`VX+kI2rliW|qIYv", "qa1YT_`lnH`$WFE2p:9d#{K<$26UA^[EVv+dRJR", '<wYH{g]p#XW"{9|2dp!,%KQNN>:WutSl@r!m6$!IO~Qyt]p2gp?uDw+&v:A7P', "u6Gl5w0B^>{V$Q#O#n/H&:%ItClHYW*Gpd2w*]IN0:`6CX%G", "#4j6k7_}trf4Bm.G>p9#L]EIK3j40/nE;ar:l:L>YI$/a5gY2}O#I/8<", "SAcnqp=47~z+M~iI_%<", 'V6M$+_I$bH[cfNqY|ayYo$unuC%WPQxqTi!,"TUo#>=tcGbIv4KYr%$lG5', "6a@6RKEK^>.", "MelmGxg{Y0gIfX5*", "E%xWB9>bU5HC3v06m6HVcuFkRF@#2~O6Ve^.B.9I^hOGfW", 'Ae/_I9j/gke[dTR"SeOYUX3SdAlK{~xq4QXw.,Q<', "!CvHUk}5AMT9o@!{~W19[4[Uwr9", "<#6m}MB>.0BFutj&aF8`P?p$T4*{O+Z`fR", 'riHdXXzGHtpG1t#le`hHou;bE5>MVq%Y+"Hqj4D+=2CNP', ';CG.+$h{(baGngH+T`"`YjJ>AKjDP', ")~UA%[,}rF", 'in"$Ep=79>;5KiIa>(uYO7bb&ra%P', "N~dkNEdUG5Tw<@SJy#.qpNQ<", 'Xt9kNu_7w3[I"96i2n".ABfUwtD?ZF<I|%o,*x4Yr06/]mVED>eHFE9<D', 'cv9d39&5fr3/QVRsxnj;1|jrnMDikW"Y', 'VQ^)bQ((fr"QR*rqJQ~$|mDP', '4"=k%(@e0:L0Sv;`c!_Wap/57b', "t_eHZxKe@KU7P", '"4BAQ@!KOCvat]&2mQOV>M:ez~IVNXS"uCYHv(5P', 'Vea#r_dU/:AvaiiiA_x`~/RI[!(GfW"&PIPqoxfjTA0[uv', '2(O[T|*UOCD"CW^*tilU*ge(%!VyuFJr/doW?caGwCg,?EE+e6nU', '>4RdE,(NdAth.V%G8"^ASMzG(I.6Sqj&u3Xw|m8<$4*', "B,xuI41$K%=@[/tr,~hMj$3GF>", "9i%U.erY]4MWs;2&", "],Nnz.orLth/R", "mCE,}*_Y@5I]%m_2;padl)F+<XZ@|Vb6}n.qyw(pSAbA1Tni(%P", "6X+qIc?YZK(ugG*E.w&:9ioY*3*", "?+?WXd:(~tmtP", 'zvyY?wK<2:4U,W"pVR', 'Ae}`ljU5MSH"@c%lTd<', "X%lm)M&c|tu!:iEEOp(unwQ<_3<:(+dq7%%W", "*_~.xmG$|%dID1iGc!a70aL<", "_Cw[&m558K[J>*A+u|3H3)DkA%nC69|2%CZn", "!tRAd[UonHH3;is*R{:W", "Amwknc*U_54,;g{6*s*u(}DU^h5CWvl{", "z,TYO@tjJ:3d4X_6.sq#vQ)>;%F?F<^abP", "bW6,_?]NW", "^_=D{7OGHtz[[/(;.sj;[QOl)I", 'o3B$GuE>=>o="~_2[%=94@+&T>1+etzY"eqY^', 'h}9YTt[Y6hpt0/}iq"b.,Xzaxbg[FEL2v#Xke?s2)!Lt"~2&UwJH"jq{#h', "zCp7([2{J5E`BmUIPFdk.:mU9:,{>_4YD;J[h", "N|w[L}`<", 'z|T;Z)9Sx}lVSFaIs"<dUMRJfCx%<gSGJ4zbh', 'od,:G_i/X%"d+WQ*D{UAz$2Uw%#Cx<*Id>/M3', "<:.nO@.c9XE`rXH", "iA&n|gl$(y)J|VEEO4rd_?Bp{SZSiV7*MR", 'EQ6,gX8GYt~V<9R".e1w2ta$m}bd[W52D}a#s{q&N4aufQ}l"w:6uTv/n', "}n|wBu><6>k/gQ180|_m}*kP", "He^q5w>KQI^%iW<rg,_A<QWK4Ca/m+<I,%EMig[5S}luc/o8l4fbn9]a]2X", "r}%69e{}^I?F#qu;*QsV^", "dCxmrJ0nSXy7%+<l*%P", "Mv/;2E{5f3`qrV6YDw4d;,Y{U", "d34n<%1(J2w@)<Q*DF*mnV,PLk_8)+b", "QaeDIu|4x0Xt=]r33YU$Ka~<", 'J"YM5/$Nj2.V_@WG%,IdDVm21S`%AVf")e|$0kvoW', ">wY6MKy/|yLU{@UinIId$dw$3SyV95mqMQ@uFwR", "kv$Y1_R", '+"}WMa`IQAGuW^q{Fdz[vwU5rFV,]<d`oR', "{:>[apHJW", 'Q>jwB$/"D', "u|`dnLkj", "l@]+/sWf", "j0(gt49RwU]FYVXZMb8A%%u:,/mkQ~XZ,=@C,MjO{vk7hzM0~0yfA", 'R}]B=Tjb{rJ)LCzd&fsE55.t>"kSp+zd)A|NZZOD&=J0l4Le3%', '|gD(i$uF!KZ6Twakkgb8UviG<?";7idUVX4;J', "@6aG", "RRcrAo1<i&", "Xo2#KC(G", "~S:vp.J", "Xb,m>+%eq", "~S:vp.7i", "Upx,", "Q<93<@UF", "cy1IQ7{", "T?<VhL]F", "l_q;EG{", "nE@lAnAS", "Z?(q!<l{", "f1T{zV?", "23^D[~(j", "h4a{57Lj", "4A|6R*3<", "F%<RdX;h", "emi[i2yh", "8!.GDO~@", "cIWYW", "{RPYN_ao", "xa9k`", "CtI%b)]m", "z+.:__Jm", "X>#+[zKZ", "(6*(2sNd(~", "7)o>o", "7)o>M=RjZGs#Z"]), fV(OV = function() {
      var tt, et, Vt, Ot = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      fV(tt = void 0, et = []);
      try {
        fV(tt = Object, et[XV[11]]("".__proto__.constructor.name))
      } catch (DV) {}
      tt: for (Vt = XV[0]; Vt < Ot[XV[4]]; Vt++) try {
        var qt;
        for (tt = Ot[Vt](), qt = XV[0]; qt < et[XV[4]]; qt++)
          if (typeof tt[et[qt]] === XV[5]) continue tt;
        return tt
      } catch (DV) {}
      return tt || this
    }() || {}, qV = OV.TextDecoder, DV = OV.Uint8Array, mV = OV[XV[49]], dV = OV.String || String, jV = OV.Array || Array, HV = function() {
      var tt, et, Vt = new jV(128);
      return fV(tt = dV[XV[8]] || dV.fromCharCode, et = []),
        function(Ot) {
          var qt, Dt, mt, dt;
          for (fV(Dt = void 0, mt = Ot[XV[4]], et[XV[4]] = XV[0]), dt = XV[0]; dt < mt;) fV(Dt = Ot[dt++], Dt <= 127 ? qt = Dt : Dt <= 223 ? qt = (31 & Dt) << XV[7] | Ot[dt++] & XV[6] : Dt <= 239 ? qt = (15 & Dt) << XV[10] | (Ot[dt++] & XV[6]) << XV[7] | Ot[dt++] & XV[6] : dV[XV[8]] ? qt = (Dt & XV[9]) << 18 | (Ot[dt++] & XV[6]) << XV[10] | (Ot[dt++] & XV[6]) << XV[7] | Ot[dt++] & XV[6] : (qt = XV[6], dt += XV[12]), et[XV[11]](Vt[qt] || (Vt[qt] = tt(qt))));
          return et[XV[47]]("")
        }
    }()), fV(ne = (...tt) => {
      function et(...tt) {
        return tt[XV[4]] = XV[1], typeof eV[tt[XV[0]]] === XV[5] ? eV[tt[XV[0]]] = function(...tt) {
          for (fV(tt[XV[4]] = XV[1], tt[XV[1]] = '?jbeTABPCDipgXEOFhsJ&@_:^u)5r"<c[U17N.H04!]RWnx$mdq3IMY;S/KkGL}`*yZ>aV8~o9%fv{l(t,wQz#26|=+', tt[XV[13]] = "" + (tt[XV[0]] || ""), tt[XV[12]] = tt[XV[13]].length, tt[XV[24]] = [], tt[XV[18]] = XV[0], tt[XV[19]] = XV[0], tt[XV[16]] = -XV[1]), tt[XV[14]] = XV[0]; tt[XV[14]] < tt[XV[12]]; tt[XV[14]]++)
            if (tt[XV[15]] = tt[XV[1]].indexOf(tt[XV[13]][tt[XV[14]]]), tt[XV[15]] !== -XV[1])
              if (tt[XV[16]] < XV[0]) tt[XV[16]] = tt[XV[15]];
              else {
                fV(tt[XV[16]] += tt[XV[15]] * XV[17], tt[XV[18]] |= tt[XV[16]] << tt[XV[19]], tt[XV[19]] += (tt[XV[16]] & XV[20]) > XV[21] ? XV[22] : XV[23]);
                do {
                  fV(tt[XV[24]].push(tt[XV[18]] & XV[3]), tt[XV[18]] >>= XV[2], tt[XV[19]] -= XV[2])
                } while (tt[XV[19]] > XV[9]);
                tt[XV[16]] = -XV[1]
              } return tt[XV[16]] > -XV[1] && tt[XV[24]].push((tt[XV[18]] | tt[XV[16]] << tt[XV[19]]) & XV[3]), lV(tt[XV[24]])
        }(VV[tt[XV[0]]]) : eV[tt[XV[0]]]
      }
      tt[XV[4]] = XV[1], et(82) in EV && function(...tt) {
        tt[XV[4]] = XV[0]
      }();
      const Vt = function(tt) {
          var et;
          return {
            meta: {
              ...tt.meta,
              formatVersion: he.g,
              variation: null !== (et = tt.meta.variation) && void 0 !== et ? et : null
            },
            initialChunks: tt.initialChunks.map((tt => ({
              chunkPos: tt.chunkPos,
              rle: We(tt.rle),
              sharedBlockData: Ie("sharedBlockData", tt.sharedBlockData)
            }))),
            ticks: tt.ticks.map(ge),
            editState: tt.editState
          }
        }(tt[XV[0]]),
        Ot = qe(he[XV[16]]);
      tt[XV[1]] = void 0;
      try {
        tt[XV[1]] = Ot[et(XV[21])](Vt)
      } catch (HV) {
        function jt(...tt) {
          for (fV(tt[XV[4]] = XV[1], tt[XV[28]] = 'JiGt=Qq9*,8RWV"DIo1!>0gBeKkc`2m#HlT?A{Ufxhnp)LwaOduS:7bXPFEM(&]j}r6;~4zCNZ%y+v^<.@Y$|[_/s35', tt[XV[25]] = "" + (tt[XV[0]] || ""), tt[XV[40]] = tt[XV[25]].length, tt[XV[24]] = [], tt[XV[41]] = XV[0], tt[XV[19]] = XV[0], tt[XV[16]] = -XV[1]), tt[XV[26]] = XV[0]; tt[XV[26]] < tt[XV[40]]; tt[XV[26]]++)
            if (tt[XV[34]] = tt[XV[28]].indexOf(tt[XV[25]][tt[XV[26]]]), tt[XV[34]] !== -XV[1])
              if (tt[XV[16]] < XV[0]) tt[XV[16]] = tt[XV[34]];
              else {
                fV(tt[XV[16]] += tt[XV[34]] * XV[17], tt[XV[41]] |= tt[XV[16]] << tt[XV[19]], tt[XV[19]] += (tt[XV[16]] & XV[20]) > XV[21] ? XV[22] : XV[23]);
                do {
                  fV(tt[XV[24]].push(tt[XV[41]] & XV[3]), tt[XV[41]] >>= XV[2], tt[XV[19]] -= XV[2])
                } while (tt[XV[19]] > XV[9]);
                tt[XV[16]] = -XV[1]
              } return tt[XV[16]] > -XV[1] && tt[XV[24]].push((tt[XV[41]] | tt[XV[16]] << tt[XV[19]]) & XV[3]), lV(tt[XV[24]])
        }

        function Ht(...tt) {
          return tt[XV[4]] = XV[1], typeof eV[tt[XV[0]]] === XV[5] ? eV[tt[XV[0]]] = jt(VV[tt[XV[0]]]) : eV[tt[XV[0]]]
        }

        function Xt(...tt) {
          fV(tt[XV[4]] = XV[0], tt[-XV[43]] = function(...et) {
            return fV(et[XV[4]] = XV[1], et[XV[1]] = []), (et[XV[0]] === XV[1] || et[XV[0]] >= XV[50]) && tt[XV[13]](et[XV[1]], [], et[XV[0]], XV[0]), et[XV[1]]
          }, tt[XV[13]] = function(et, Vt, Ot, qt) {
            var Dt;
            for (Dt = qt; Dt < Ot; Dt++) {
              var mt;
              if (Vt.length !== Dt) return;
              for (mt = XV[0]; mt < Ot; mt++) tt[XV[32]](Vt, [Dt, mt]) && (fV(Vt.push([Dt, mt]), tt[XV[13]](et, Vt, Ot, Dt + XV[1])), Vt.length === Ot && et.push(tt[XV[24]](Vt)), Vt.pop())
            }
          }, tt[XV[24]] = function(...tt) {
            for (fV(tt[XV[4]] = XV[1], tt[XV[28]] = [], tt[XV[13]] = tt[XV[0]].length), tt[XV[12]] = XV[0]; tt[XV[12]] < tt[XV[13]]; tt[XV[12]]++)
              for (tt[XV[28]][tt[XV[12]]] = "", tt[XV[24]] = XV[0]; tt[XV[24]] < tt[XV[13]]; tt[XV[24]]++) tt[XV[28]][tt[XV[12]]] += tt[XV[0]][tt[XV[12]]][XV[1]] === tt[XV[24]] ? "Q" : XV[48];
            return tt[XV[28]]
          }, tt[XV[32]] = function(...tt) {
            for (fV(tt[XV[4]] = XV[25], tt[XV[28]] = tt[XV[0]].length), tt[XV[12]] = XV[0]; tt[XV[12]] < tt[XV[28]]; tt[XV[12]]++) {
              if (tt[XV[0]][tt[XV[12]]][XV[0]] === tt[XV[1]][XV[0]] || tt[XV[0]][tt[XV[12]]][XV[1]] === tt[XV[1]][XV[1]]) return XV[42];
              if (Math.abs((tt[XV[0]][tt[XV[12]]][XV[0]] - tt[XV[1]][XV[0]]) / (tt[XV[0]][tt[XV[12]]][XV[1]] - tt[XV[1]][XV[1]])) === XV[1]) return XV[42]
            }
            return XV[51]
          }, console.log(tt[-XV[43]]))
        }
        throw Ht(89) + "U" in EV && Xt(), fV(console[Ht(90)](Vt), Ot[Ht(XV[17])](Vt, {
          [Ht(92) + Ht(93)](...tt) {
            function et(tt) {
              return typeof eV[tt] === XV[5] ? eV[tt] = function(...tt) {
                for (fV(tt[XV[4]] = XV[1], tt[XV[28]] = '{FSRVzP};8]oAfg`XBw:"HG+.Kt(5x^9lji@OvWL<|uQr$ZJMshy16&n*_DNT,Y~%>eCcUaE)d0[3Ib=72#qp!/k4m?', tt[XV[13]] = "" + (tt[XV[0]] || ""), tt[XV[44]] = tt[XV[13]].length, tt[XV[24]] = [], tt[XV[30]] = XV[0], tt[XV[7]] = XV[0], tt[XV[16]] = -XV[1]), tt[XV[2]] = XV[0]; tt[XV[2]] < tt[XV[44]]; tt[XV[2]]++)
                  if (tt[-XV[45]] = tt[XV[28]].indexOf(tt[XV[13]][tt[XV[2]]]), tt[-XV[45]] !== -XV[1])
                    if (tt[XV[16]] < XV[0]) tt[XV[16]] = tt[-XV[45]];
                    else {
                      fV(tt[XV[16]] += tt[-XV[45]] * XV[17], tt[XV[30]] |= tt[XV[16]] << tt[XV[7]], tt[XV[7]] += (tt[XV[16]] & XV[20]) > XV[21] ? XV[22] : XV[23]);
                      do {
                        fV(tt[XV[24]].push(tt[XV[30]] & XV[3]), tt[XV[30]] >>= XV[2], tt[XV[7]] -= XV[2])
                      } while (tt[XV[7]] > XV[9]);
                      tt[XV[16]] = -XV[1]
                    } return tt[XV[16]] > -XV[1] && tt[XV[24]].push((tt[XV[30]] | tt[XV[16]] << tt[XV[7]]) & XV[3]), lV(tt[XV[24]])
              }(VV[tt]) : eV[tt]
            }
            tt[XV[4]] = XV[12], et(94) + "m" in EV && function(...tt) {
              tt[XV[4]] = XV[0]
            }(), console[et(95)]("" + tt[XV[0]][XV[47]](XV[48]) + (et(96) + et(97)) + tt[XV[25]][et(98) + "me"] + et(99) + tt[XV[1]])
          }
        })), HV
      }
      const qt = de(he[XV[16]], tt[XV[1]]),
        mt = Dt[XV[49]][et(100)](XV[50]);
      return mt[et(101) + et(102) + "E"](he[XV[16]]), Dt[XV[49]].concat([mt, qt])
    }, tV = (...tt) => {
      function et(...tt) {
        return tt[XV[4]] = XV[1], typeof eV[tt[XV[0]]] === XV[5] ? eV[tt[XV[0]]] = function(...tt) {
          for (fV(tt[XV[4]] = XV[1], tt[XV[28]] = '$moGMbgX%Lkn}4,t@/fQa9#~hT`W^Cs[Y57!y{=*duez>qBJ.:AI6_1]&+v")HVDp|NPKc(RZ2jwr83;EixlF<0O?SU', tt[XV[25]] = "" + (tt[XV[0]] || ""), tt[XV[12]] = tt[XV[25]].length, tt[XV[50]] = [], tt[XV[18]] = XV[0], tt[XV[19]] = XV[0], tt[XV[16]] = -XV[1]), tt[XV[2]] = XV[0]; tt[XV[2]] < tt[XV[12]]; tt[XV[2]]++)
            if (tt[XV[34]] = tt[XV[28]].indexOf(tt[XV[25]][tt[XV[2]]]), tt[XV[34]] !== -XV[1])
              if (tt[XV[16]] < XV[0]) tt[XV[16]] = tt[XV[34]];
              else {
                fV(tt[XV[16]] += tt[XV[34]] * XV[17], tt[XV[18]] |= tt[XV[16]] << tt[XV[19]], tt[XV[19]] += (tt[XV[16]] & XV[20]) > XV[21] ? XV[22] : XV[23]);
                do {
                  fV(tt[XV[50]].push(tt[XV[18]] & XV[3]), tt[XV[18]] >>= XV[2], tt[XV[19]] -= XV[2])
                } while (tt[XV[19]] > XV[9]);
                tt[XV[16]] = -XV[1]
              } return tt[XV[16]] > -XV[1] && tt[XV[50]].push((tt[XV[18]] | tt[XV[16]] << tt[XV[19]]) & XV[3]), lV(tt[XV[50]])
        }(VV[tt[XV[0]]]) : eV[tt[XV[0]]]
      }
      tt[XV[4]] = XV[1], QV(103) in EV && function(...tt) {
        function et(tt) {
          var et, Vt, Ot, qt, Dt, mt, dt, jt = '6h@qz&RA~.,9|jI5}QB"kVLF<au^_+l]$Cmb3f1P`;geN!/y0:2GUxDX?cOt4#HMr>Zov*dJW(K[78pS=iT){wEY%ns';
          for (fV(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = XV[0], Dt = XV[0], mt = -XV[1]), dt = XV[0]; dt < Vt; dt++) {
            var Ht = jt.indexOf(et[dt]);
            if (Ht !== -XV[1])
              if (mt < XV[0]) mt = Ht;
              else {
                fV(mt += Ht * XV[17], qt |= mt << Dt, Dt += (mt & XV[20]) > XV[21] ? XV[22] : XV[23]);
                do {
                  fV(Ot.push(qt & XV[3]), qt >>= XV[2], Dt -= XV[2])
                } while (Dt > XV[9]);
                mt = -XV[1]
              }
          }
          return mt > -XV[1] && Ot.push((qt | mt << Dt) & XV[3]), lV(Ot)
        }

        function Vt(...tt) {
          return tt[XV[4]] = XV[1], typeof eV[tt[XV[0]]] === XV[5] ? eV[tt[XV[0]]] = et(VV[tt[XV[0]]]) : eV[tt[XV[0]]]
        }

        function Ot(...tt) {
          tt[XV[4]] = XV[1];
          const et = {};
          for (let Vt of tt[XV[0]].replace(/[^w]/g, "").toLowerCase()) et[Vt] = et[Vt] + XV[1] || XV[1];
          return et
        }

        function qt(...tt) {
          tt[XV[4]] = XV[25];
          const et = buildCharMap(tt[XV[0]]),
            Vt = buildCharMap(tt[XV[1]]);
          for (let Ot in et)
            if (et[Ot] !== Vt[Ot]) return XV[42];
          return Object.keys(et).length !== Object.keys(Vt).length ? XV[42] : XV[51]
        }

        function Dt(...tt) {
          return tt[XV[4]] = XV[1], mt(tt[XV[0]]) !== 1 / 0
        }

        function mt(tt) {
          if (!tt) return -XV[1];
          const et = mt(tt.left),
            Vt = mt(tt.right),
            Ot = Math.abs(et - Vt);
          return et === 1 / 0 || Vt === 1 / 0 || Ot > XV[1] ? 1 / 0 : Math.max(et, Vt) + XV[1]
        }
        tt[XV[4]] = XV[0], window[Vt(104) + Vt(105) + Vt(106) + "_"] = {
          buildCharacterMap: Ot,
          isAnagrams: qt,
          isBalanced: Dt,
          getHeightBalanced: mt
        }
      }();
      const Vt = Dt[XV[49]][et(107)](tt[XV[0]]),
        Ot = Vt[et(108) + et(109)] >= XV[50] ? Vt[et(110) + et(111)](XV[0]) : XV[46];
      if (Ot !== XV[46] && (0, ve.j)(Ot)) {
        function mt(...tt) {
          for (fV(tt[XV[4]] = XV[1], tt[XV[28]] = '1ZOBDSPXdfeTNw*K/[@<;~4xJ8{oQiR(>&"ljr%I2kaC.W=9`tz)LyV_^0cY6U5GAMvnp7#+Eum?,}|Fs]H3g$:h!qb', tt[XV[52]] = "" + (tt[XV[0]] || ""), tt[XV[12]] = tt[XV[52]].length, tt[XV[24]] = [], tt[XV[30]] = XV[0], tt[XV[19]] = XV[0], tt[XV[53]] = -XV[1]), tt[XV[26]] = XV[0]; tt[XV[26]] < tt[XV[12]]; tt[XV[26]]++)
            if (tt[XV[15]] = tt[XV[28]].indexOf(tt[XV[52]][tt[XV[26]]]), tt[XV[15]] !== -XV[1])
              if (tt[XV[53]] < XV[0]) tt[XV[53]] = tt[XV[15]];
              else {
                fV(tt[XV[53]] += tt[XV[15]] * XV[17], tt[XV[30]] |= tt[XV[53]] << tt[XV[19]], tt[XV[19]] += (tt[XV[53]] & XV[20]) > XV[21] ? XV[22] : XV[23]);
                do {
                  fV(tt[XV[24]].push(tt[XV[30]] & XV[3]), tt[XV[30]] >>= XV[2], tt[XV[19]] -= XV[2])
                } while (tt[XV[19]] > XV[9]);
                tt[XV[53]] = -XV[1]
              } return tt[XV[53]] > -XV[1] && tt[XV[24]].push((tt[XV[30]] | tt[XV[53]] << tt[XV[19]]) & XV[3]), lV(tt[XV[24]])
        }

        function dt(...tt) {
          return tt[XV[4]] = XV[1], typeof eV[tt[XV[0]]] === XV[5] ? eV[tt[XV[0]]] = mt(VV[tt[XV[0]]]) : eV[tt[XV[0]]]
        }

        function jt(...tt) {
          tt[XV[4]] = XV[0]
        }
        dt(XV[32]) in EV && jt();
        const Ht = Vt[dt(113)](XV[50]),
          Xt = me(Ot) ? Dt[XV[49]][dt(114)](je(Ot, Ht)) : Ht;
        return function(tt) {
          var et, Vt, Ot, Dt, mt;
          const dt = null === (et = tt.meta) || void 0 === et ? void 0 : et.formatVersion;
          if (!(0, ve.j)(dt)) throw new Error(`Unsupported recording format version: ${dt}`);
          if (!Array.isArray(tt.initialChunks) || !Array.isArray(tt.ticks)) throw new Error("Recording is missing initialChunks or ticks");
          for (const qt of tt.ticks)
            if (!Array.isArray(qt.structuralEvents) || !Array.isArray(qt.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
          const jt = {
            ...tt.meta
          };
          return jt.formatVersion = he.g, (0, qt.B)(jt.variation) && delete jt.variation, {
            meta: jt,
            initialChunks: tt.initialChunks.map((tt => {
              var et;
              return {
                chunkPos: tt.chunkPos,
                rle: Se(tt.rle),
                sharedBlockData: null !== (et = Pe("sharedBlockData", tt.sharedBlockData)) && void 0 !== et ? et : []
              }
            })),
            ticks: tt.ticks.map(se),
            editState: {
              cameraKeyframes: null !== (Vt = null === (Ot = tt.editState) || void 0 === Ot ? void 0 : Ot.cameraKeyframes) && void 0 !== Vt ? Vt : [],
              playbackMark: null !== (Dt = null === (mt = tt.editState) || void 0 === mt ? void 0 : mt.playbackMark) && void 0 !== Dt ? Dt : null
            }
          }
        }(qe(Ot)[dt(115)](Xt))
      }
      throw new he[XV[26]](Ot)
    })
  },
  37217: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      g: () => qt,
      h: () => Dt,
      j: () => Qt,
      l: () => lt,
      n: () => Ht,
      o: () => Et,
      p: () => jt,
      t: () => Xt,
      v: () => dt
    });
    var Ot = Vt(37220);
    const qt = 9;
    class Dt extends Error {
      constructor(tt) {
        super(`Unsupported recording format: header ${null!==tt&&void 0!==tt?tt:"missing"}, reading v${Ot.c.join(", v")}`), this.older = void 0, this.older = (0, Ot.g)(tt)
      }
    }
    const mt = 100,
      dt = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      jt = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      Ht = ["itemName", "amount", "position", "size", "attributes"],
      Xt = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      Qt = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "dL", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      lt = ["selectedSlotIndex", "slots"],
      Et = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37215: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Qt,
      c: () => ft,
      f: () => jt,
      g: () => mt,
      h: () => dt,
      i: () => Ht
    });
    var Ot = Vt(391),
      qt = Vt(31);

    function Dt(tt) {
      return null === tt || void 0 === tt ? null : "string" === typeof tt ? tt : null
    }

    function mt(tt, et) {
      return JSON.stringify(tt) === JSON.stringify(et)
    }

    function dt(tt) {
      const et = [];
      for (const Vt of Object.keys(tt)) {
        const Ot = tt[Vt];
        for (const tt of Object.keys(Ot)) et.push({
          Ft: Vt,
          name: tt,
          ...Ot[tt]
        })
      }
      return et
    }

    function jt(tt) {
      const et = {};
      for (const Dt of tt) {
        var Vt, Ot, qt;
        et[Dt.Ft] || (et[Dt.Ft] = {}), et[Dt.Ft][Dt.name] = {
          icon: Dt.icon,
          level: Dt.level,
          displayName: null !== (Vt = Dt.displayName) && void 0 !== Vt ? Vt : null,
          endTick: null !== (Ot = Dt.endTick) && void 0 !== Ot ? Ot : null,
          showInNametag: null === (qt = Dt.showInNametag) || void 0 === qt || qt
        }
      }
      return et
    }

    function Ht(tt, et) {
      const Vt = {};
      for (const qt of Object.keys(tt)) {
        const Dt = {};
        for (const Vt of Object.keys(tt[qt])) {
          const Ot = tt[qt][Vt];
          null !== Ot.endTick && Ot.endTick < et || (Dt[Vt] = {
            ...Ot,
            endTick: null === Ot.endTick ? null : Ot.endTick - et
          })
        }(0, Ot.Dc)(Dt) || (Vt[qt] = Dt)
      }
      return Vt
    }

    function Xt(tt, et, Vt) {
      if (null !== tt) return Math.max(0, 1e3 * (tt - et) / Vt)
    }
    class Qt {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(tt, et) {
        this.clear();
        const Vt = Date.now();
        for (const dt of tt.iterateEntityIds()) {
          const jt = tt.getEffects(dt);
          if ((0, Ot.Dc)(jt)) continue;
          const Ht = et(dt);
          for (const tt of Object.keys(jt)) {
            var qt, mt;
            const et = jt[tt];
            this.upsert(Ht, tt, {
              icon: et.icon,
              level: et.level,
              displayName: Dt(et.displayName),
              showInNametag: null === (qt = et.showInNametag) || void 0 === qt || qt,
              endTime: void 0 !== et.duration && null !== et.duration ? (null !== (mt = et.appliedAt) && void 0 !== mt ? mt : Vt) + et.duration : null
            })
          }
        }
      }
      upsert(tt, et, Vt) {
        this.tracked[tt] || (this.tracked[tt] = {}), this.tracked[tt][et] = Vt
      }
      remove(tt, et) {
        const Vt = this.tracked[tt];
        Vt && (delete Vt[et], (0, Ot.Dc)(Vt) && delete this.tracked[tt])
      }
      handleUpdate(tt) {
        var et;
        0 !== tt.duration ? this.upsert(tt.Ft, tt.name, {
          icon: tt.icon,
          level: tt.level,
          displayName: Dt(tt.displayName),
          showInNametag: null === (et = tt.showInNametag) || void 0 === et || et,
          endTime: void 0 !== tt.duration && null !== tt.duration ? Date.now() + tt.duration : null
        }) : this.remove(tt.Ft, tt.name)
      }
      handleRemove(tt, et) {
        this.remove(tt, et)
      }
      sample(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const qt = {},
          Dt = 1e3 / et;
        for (const mt of Object.keys(this.tracked)) {
          const et = this.tracked[mt],
            dt = {};
          for (const Ot of Object.keys(et)) {
            const qt = et[Ot];
            let jt = null;
            if (null !== qt.endTime) {
              const et = Math.max(0, qt.endTime - Vt);
              if (0 === et) {
                this.remove(mt, Ot);
                continue
              }
              jt = tt + Math.ceil(et / Dt)
            }
            dt[Ot] = {
              icon: qt.icon,
              level: qt.level,
              displayName: qt.displayName,
              endTick: jt,
              showInNametag: qt.showInNametag
            }
          }(0, Ot.Dc)(dt) || (qt[mt] = dt)
        }
        return qt
      }
    }

    function lt(tt, et, Vt, Ot) {
      tt.hasEntity(et) ? tt.updateEffect(et, Vt, Ot) : function(tt, et, Vt) {
        qt.j.sw("EffectUpdate", {
          Ft: tt,
          name: et,
          ...Vt
        }, !0)
      }(et, Vt, Ot)
    }

    function Et(tt, et, Vt) {
      tt.hasEntity(et) ? tt.removeEffect(et, Vt) : function(tt, et) {
        qt.j.sw("RemoveEffect", {
          Ft: tt,
          name: et
        }, !0)
      }(et, Vt)
    }

    function ft(tt, et, Vt, Ot, qt, Dt, mt) {
      for (const Xt of Object.keys(Vt))
        for (const Dt of Object.keys(Vt[Xt])) {
          var dt;
          null !== (dt = et[Xt]) && void 0 !== dt && dt[Dt] || (Et(tt, Xt, Dt), Ot && Xt === Ot && String(qt) !== String(Xt) && Et(tt, qt, Dt))
        }
      for (const wt of Object.keys(et))
        for (const dt of Object.keys(et[wt])) {
          var jt, Ht;
          const yt = et[wt][dt],
            Nt = Xt(yt.endTick, Dt, mt);
          if (0 === Nt) {
            Et(tt, wt, dt), Ot && wt === Ot && String(qt) !== String(wt) && Et(tt, qt, dt);
            continue
          }
          const Mt = null === (jt = Vt[wt]) || void 0 === jt ? void 0 : jt[dt],
            bt = Mt && (ft = yt, (Qt = Mt).icon === ft.icon && Qt.level === ft.level && Qt.displayName === ft.displayName && Qt.endTick === ft.endTick && Qt.showInNametag === ft.showInNametag),
            Jt = {
              icon: yt.icon,
              level: yt.level,
              displayName: null !== (Ht = yt.displayName) && void 0 !== Ht ? Ht : void 0,
              duration: Nt,
              showInNametag: yt.showInNametag
            };
          bt || lt(tt, wt, dt, Jt), Ot && wt === Ot && lt(tt, qt, dt, {
            ...Jt,
            showInNametag: !1
          })
        }
      var Qt, ft
    }
  },
  37202: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Xt,
      e: () => Ht,
      i: () => lt,
      j: () => dt,
      n: () => Qt
    });
    var Ot = Vt(37194),
      qt = Vt(37211),
      Dt = Vt(348);
    const mt = {
      description: "Bloxd Replay",
      accept: {
        [Ot.d]: Ot.c
      }
    };

    function dt() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, Dt.e)()
    }

    function jt(tt) {
      return tt instanceof DOMException && "AbortError" === tt.name
    }
    async function Ht() {
      try {
        const [tt] = await window.showOpenFilePicker({
          multiple: !1,
          types: [mt]
        }), et = await tt.getFile();
        return {
          handle: tt,
          bytes: new Uint8Array(await et.arrayBuffer())
        }
      } catch (tt) {
        if (jt(tt)) return null;
        throw tt
      }
    }
    async function Xt(tt) {
      if (tt && await async function(tt) {
          const et = {
            mode: "readwrite"
          };
          return "granted" === await tt.queryPermission(et) || "granted" === await tt.requestPermission(et)
        }(tt)) return tt;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, Ot.j)(),
          types: [mt]
        })
      } catch (et) {
        if (jt(et)) return null;
        throw et
      }
    }
    async function Qt(tt, et) {
      const Vt = await tt.createWritable();
      await Vt.write(new Blob([et], {
        type: Ot.d
      })), await Vt.close()
    }

    function lt(tt) {
      return (0, Ot.f)((0, qt.g)(tt))
    }
  },
  36695: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Qt
    });
    var Ot = Vt(26),
      qt = Vt(106),
      Dt = Vt(39),
      mt = Vt(3643),
      dt = Vt(3524),
      jt = Vt(6873);
    const Ht = "shaderPackListingCheckedAt",
      Xt = 36e5;

    function Qt() {
      const {
        canUseShaderPacks: tt
      } = qt.featureFlags.settings;
      var et, Qt;
      (0, dt.m)(tt) && !(0, dt.i)(tt) && (et = Dt.e.getItem(Ht), Qt = Date.now(), "number" !== typeof et || Qt < et || Qt - et >= Xt) && (0, mt.e)((() => {
        (async function() {
          if ("landingPage" !== Ot.b.get("gameState")) return;
          const tt = await (0, jt.g)();
          if (void 0 === (null === tt || void 0 === tt ? void 0 : tt.listing)) return;
          Dt.e.setItem(Ht, Date.now());
          const {
            followListingUpdates: et
          } = await Promise.all([Vt.e(78), Vt.e(136), Vt.e(132)]).then((() => Vt(41518)));
          await et(tt, tt.listing) || Dt.e.removeItem(Ht)
        })().catch((tt => {
          console.error("Failed to check the shader pack listing for an update", tt)
        }))
      }))
    }
  },
  9154: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      d: () => qt,
      e: () => Dt,
      f: () => mt
    });
    let Ot = null;

    function qt(tt, et) {
      return `${et}\n${null!==tt&&void 0!==tt?tt:""}`
    }

    function Dt(tt) {
      Ot = tt
    }

    function mt(tt) {
      const et = Ot;
      return Ot = null, null !== et && et.key === tt ? et.settled : null
    }

    function dt(tt, et, Vt, Ot) {
      let qt = !1;
      null !== et && setTimeout((() => {
        Ot() && !qt && et()
      }), 0), tt.then((tt => {
        qt = !0, Vt(tt)
      }))
    }
  },
  36742: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt
    });
    var Ot = Vt(377),
      qt = Vt(26),
      Dt = Vt(36745),
      mt = Vt(1732),
      dt = Vt(2074);

    function jt(tt, et) {
      var Vt, jt, Ht;
      if (!qt.b.get("isKeydownEnabled") || tt.repeat) return;
      const Xt = tt.code;
      "Escape" === tt.key ? (0, mt.h)(tt) : null !== (Vt = dt.r.OpenSettings) && void 0 !== Vt && Vt.includes(Xt) ? (0, mt.y)(tt, Ot.o.SETTINGS) : null !== (jt = dt.r.OpenCharacterCustomization) && void 0 !== jt && jt.includes(Xt) ? (0, Dt.e)() || (0, mt.y)(tt, Ot.o.CUSTOMISATION, et()) : null !== (Ht = dt.r.ShowDebugOverlay) && void 0 !== Ht && Ht.includes(Xt) && qt.b.set({
        showDebugOverlay: !qt.b.get("showDebugOverlay")
      })
    }
  },
  36697: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Lt,
      f: () => zt
    });
    var Ot = Vt(710),
      qt = Vt(1314),
      Dt = Vt(184);
    const mt = "cf-";

    function dt(tt) {
      return `${mt}${tt}`
    }

    function jt(tt) {
      return tt.startsWith(dt("game-server-"))
    }

    function Ht(tt) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(tt)
    }
    var Xt = Vt(1333),
      Qt = Vt(1308),
      lt = Vt(31),
      Et = Vt(1298),
      ft = Vt(1867),
      wt = Vt(1894),
      yt = Vt(3034),
      Nt = Vt(1410),
      Mt = Vt(1423),
      bt = Vt(1600),
      Jt = Vt(1293),
      Ct = Vt(36701),
      ut = Vt(39),
      Kt = Vt(153),
      ht = Vt(1908),
      vt = Vt(36738);
    const Wt = Date.UTC(2026, 11, 8),
      St = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      ct = "gameServerRoute";
    async function Rt(tt) {
      if (!tt.ok) {
        const et = await tt.text().catch((() => ""));
        return 403 === tt.status && "ipv6_unsupported" === et ? "ipv6Refused" : "other"
      }
      const et = await tt.json().catch((() => null));
      return "object" === typeof et && null !== et && Number.isFinite(et.version) ? "ours" : "other"
    }
    const It = new class {
      constructor(tt) {
        this.deps = tt, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(tt) {
        return this.deps.enabled && Ht(tt) && "cloudflare" === this.heldRoute() ? dt(tt) : tt
      }
      async afterJoinFailed(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const Ot = new URL(tt).hostname;
        return jt(Ot) ? await this.afterAliasJoinFailed(Ot, et, Vt) : void 0 !== et.gameServerUnreachable && this.checksJoinsTo(Ot) && this.settle(await this.check(Ot)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(tt) {
        const et = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(et, tt).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(tt) {
        this.deps.enabled && this.deps.iE("game_server_route", "cf_retry_joined", tt)
      }
      afterAutoRetryFailed(tt) {
        if (!this.deps.enabled) return;
        if (null === tt) return void this.deps.iE("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: et
        } = tt;
        void 0 === et ? this.deps.iE("game_server_route", "cf_retry_failed:other", 0) : "refused" === et.at ? this.deps.iE("game_server_route", "cf_retry_failed:refused", et.code) : this.deps.iE("game_server_route", `cf_retry_failed:${et.at}`, et.code)
      }
      afterMatchmade(tt) {
        var et;
        if (!this.deps.enabled) return;
        const Vt = null === (et = this.stored()) || void 0 === et ? void 0 : et.recoveryArm;
        if (void 0 !== Vt && null !== this.heldRoute() && this.reportArm(Vt), null === this.aliasFailedAt) return;
        const Ot = jt(new URL(tt).hostname);
        this.deps.iE("game_server_route", Ot ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(tt, et, Vt) {
        const Ot = new URL(tt).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(Ot) || !await this.deps.seatLegs.whenSlow(et)) return null;
        const qt = this.deps.seatLegs.answered,
          Dt = await this.check(Ot);
        return Vt() ? this.settle(Dt) ? "blocked" : "reported" : "blocked" !== Dt.outcome || et.aborted || this.deps.seatLegs.answered !== qt ? null : (this.settle(Dt), "blocked")
      }
      afterAliasJoinLeft(tt) {
        this.deps.enabled && (this.reportArm(), this.deps.iE("game_server_route", "cf_join_left", tt))
      }
      afterJoined(tt) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const et = new URL(tt).hostname,
          Vt = jt(et);
        if (Vt) this.reportArm(), this.deps.iE("game_server_route", "cf_join", 0);
        else if (!Ht(et) || this.deps.random() >= .01) return;
        const Ot = Vt ? et.slice(mt.length) : et;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(Ot, "direct", "direct_failed"), await this.reportRtt(dt(Ot), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(tt, et, Vt) {
        let {
          gameServerUnreachable: Ot,
          joinFailure: qt
        } = et;
        if (void 0 === qt) return null;
        if ("refused" === qt.at) return this.reportArm(), this.deps.iE("game_server_route", "cf_join_refused", qt.code), null;
        const Dt = this.recoveryArm();
        if (this.reportArm(Dt), this.deps.iE("game_server_route", `cf_join_failed:${qt.at}`, qt.code), null !== Vt && this.deps.iE("game_server_route", "cf_failed_since_route", Vt), this.aliasFailedAt = this.deps.now(), void 0 === Ot) return null;
        const mt = this.stored();
        return "cloudflare" !== (null === mt || void 0 === mt ? void 0 : mt.route) || "on" !== Dt && mt.aliasFailedOnce || "ours" !== (await this.probeHost(tt)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === Dt ? (this.store({
          ...mt,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && St.has(qt.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= Wt) return "on";
        const tt = this.stored();
        return void 0 !== (null === tt || void 0 === tt ? void 0 : tt.recoveryArm) ? tt.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== tt && this.store(tt), this.pageArm)
      }
      reportArm(tt) {
        this.armReported || this.deps.now() >= Wt || (this.armReported = !0, this.deps.iE("game_server_route", "holdout" === (null !== tt && void 0 !== tt ? tt : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(tt) {
        return Ht(tt) && "direct" !== this.heldRoute()
      }
      settle(tt) {
        let {
          outcome: et,
          cfMs: Vt
        } = tt;
        return this.deps.iE("game_server_route", et, Vt), "blocked" === et && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(tt) {
        const et = this.probeHost(dt(tt));
        if ("none" !== (await this.probeHost(tt)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: Vt,
          ms: Ot
        } = await et;
        return "ours" !== Vt && "ipv6Refused" !== Vt ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(tt)).answer ? {
          outcome: "direct_reachable",
          cfMs: Ot
        } : {
          outcome: "ipv6Refused" === Vt ? "blocked_ipv6" : "blocked",
          cfMs: Ot
        }
      }
      async reportRtt(tt, et, Vt) {
        const Ot = "ours" === (await this.probeHost(tt)).answer ? await this.probeHost(tt) : null;
        "ours" === (null === Ot || void 0 === Ot ? void 0 : Ot.answer) ? this.deps.iE("game_server_rtt", et, Ot.ms): this.deps.iE("game_server_rtt", Vt, 0)
      }
      probeHost(tt) {
        return this.deps.probe(`https://${tt}/version`, 8e3)
      }
      stored() {
        return function(tt) {
          if ("object" !== typeof tt || null === tt) return null;
          const {
            route: et,
            until: Vt,
            aliasFailedOnce: Ot,
            recoveryArm: qt
          } = tt;
          return "cloudflare" !== et && "direct" !== et || "number" !== typeof Vt ? null : {
            route: et,
            until: Vt,
            ...!0 === Ot ? {
              aliasFailedOnce: Ot
            } : {},
            ..."on" === qt || "holdout" === qt ? {
              recoveryArm: qt
            } : {}
          }
        }(this.deps.storage.getItem(ct))
      }
      heldRoute() {
        const tt = this.stored();
        return null !== tt && tt.until > this.deps.now() ? tt.route : null
      }
      store(tt) {
        var et, Vt, Ot, qt;
        const Dt = null !== (et = null !== (Vt = null !== (Ot = tt.recoveryArm) && void 0 !== Ot ? Ot : null === (qt = this.stored()) || void 0 === qt ? void 0 : qt.recoveryArm) && void 0 !== Vt ? Vt : this.pageArm) && void 0 !== et ? et : void 0;
        this.deps.storage.setItem(ct, void 0 === Dt ? tt : {
          ...tt,
          recoveryArm: Dt
        })
      }
    }({
      storage: ut.e,
      probe: async function(tt, et) {
        const Vt = performance.now(),
          Ot = await (0, Et.m)(tt, {
            cache: "no-store"
          }, et, (async tt => {
            const et = Math.round(performance.now() - Vt);
            return {
              answer: await Rt(tt),
              ms: et
            }
          }));
        return null !== Ot && void 0 !== Ot ? Ot : {
          answer: "none",
          ms: 0
        }
      },
      iE: ft.r,
      enabled: !(0, Kt.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: tt => new Promise((et => {
        setTimeout(et, tt)
      })),
      sleep: ht.d,
      seatLegs: vt.g
    });
    var Pt = Vt(1820),
      Zt = Vt(9154);

    function Lt(tt) {
      return async (et, Vt, mt, dt, Ht) => {
        let Qt, bt = performance.now();
        if ((0, Ot.B)(mt)) {
          if (Ht.aborted) return kt();
          const tt = et instanceof qt.h ? null : (0, Zt.f)((0, Zt.d)(et, Vt));
          let Ot = await (null !== tt && void 0 !== tt ? tt : zt(et, Vt, dt));
          if (null !== tt && performance.now() - Ot.at > Gt && !Ht.aborted) {
            const tt = await zt(et, Vt, dt);
            tt.result.isError() && !Ot.result.isError() || (Ot = tt)
          }
          const Dt = Ot.result;
          if (bt = Ot.at, Ht.aborted || yt.e.matchmakingEnded(Dt.isError() ? null : Ot.at), Dt.isError()) {
            const tt = Dt.asError();
            return console.log("Join room did not succeed, reason:", tt.message), tt.forward()
          }
          Qt = Dt.getValue(), It.afterMatchmade(Qt.endpoint)
        } else {
          yt.e.skipPlayWait();
          const tt = rt(mt.replace("https://", "").replace("http://", ""));
          if (tt.isError()) return tt.asError().forward();
          Qt = {
            endpoint: tt.getValue(),
            gameNameWithVariation: Vt,
            lobbyName: et instanceof qt.h ? et.getLobbyName() : et
          }
        }
        if (Ht.aborted) return kt();
        console.log(`Connecting to ${Qt.gameNameWithVariation} in lobby ${Qt.lobbyName} on game server ${Qt.endpoint}`), lt.j.sw("matchmakeAndPlayStepCompleted", {
          step: Dt.n.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, ft.i)(), wt.c.markGameLoadStart((0, Pt.h)()), (0, Mt.o)({
          websocketUrl: Qt.endpoint,
          gameNameWithVariation: Qt.gameNameWithVariation,
          lobbyName: Qt.lobbyName
        }), lt.j.sw("loadingScreenState", "loadingPage:loadingGame");
        const Jt = async () => {
          const tt = await async function(tt, et, Vt, Ot) {
            const qt = await ot(tt, et, Vt);
            if (!qt.isError() && !Ot.aborted) {
              const {
                endpoint: tt,
                gameNameWithVariation: et,
                lobbyName: Vt
              } = qt.getValue();
              (0, Mt.o)({
                websocketUrl: tt,
                gameNameWithVariation: et,
                lobbyName: Vt
              })
            }
            return qt
          }(et, Vt, dt, Ht);
          return tt.isError() || (Qt = tt.getValue(), bt = performance.now()), tt
        }, Ct = !(0, Ot.B)(mt), ut = et => tt({
          place: Qt,
          userContext: dt,
          direct: Ct,
          matchedAt: bt,
          rematch: Jt
        }, et), Kt = () => jt(new URL(Qt.endpoint).hostname), ht = Kt() ? performance.now() : null, vt = Ct ? {
          result: await ut(Ht),
          blockedAt: null,
          failureChecked: !1
        } : await async function(tt, et, Vt) {
          const Ot = new Et.d(Vt),
            qt = new AbortController;
          let Dt = null,
            mt = !1,
            dt = null;
          const jt = It.checkStalledJoin(tt, qt.signal, (() => mt)).then((tt => {
            dt = tt, "blocked" === tt && (Dt = performance.now(), Ot.controller.abort())
          }));
          try {
            const tt = await et(Ot.signal);
            return mt = tt.isError() && void 0 !== tt.asError().debugResult.gameServerUnreachable, qt.abort(), mt && await jt, {
              result: tt,
              blockedAt: Dt,
              failureChecked: "reported" === dt
            }
          } finally {
            qt.abort(), Ot.unfollow()
          }
        }(Qt.endpoint, ut, Ht);
        let Wt = null !== ht && void 0 !== ht ? ht : vt.blockedAt,
          St = vt.result;
        const ct = () => null === Wt ? null : performance.now() - Wt,
          Rt = St.isError() && !0 === St.asError().debugResult.rematch;
        let Lt = null;
        if (!St.isError() || Ct || Ht.aborted || Rt || null !== vt.blockedAt || vt.failureChecked || (Lt = await It.afterJoinFailed(Qt.endpoint, St.asError().debugResult, ct())), St.isError() && !Ct && ("reroute" === Lt || !Ht.aborted && (Rt || null !== vt.blockedAt))) {
          if (Rt || (Wt ??= performance.now(), lt.j.sw("gameServerRouteSwitched")), Ht.aborted) return Ft(Wt), kt();
          console.log("Matchmaking again");
          const tt = await Jt();
          if (tt.isError()) return tt.asError().forward();
          if (Ht.aborted) return Ft(Wt), kt();
          St = await ut(Ht), Lt = null, !St.isError() || Ht.aborted || Rt && !Kt() || (Lt = await It.afterJoinFailed(Qt.endpoint, St.asError().debugResult, ct()))
        }
        if (St.isError() && "retry" === Lt && !Ht.aborted && It.takeAutoRetry()) {
          if (!await It.waitToRetry(Ht)) return kt();
          console.log("Joining through Cloudflare again");
          const tt = await Jt();
          if (Ht.aborted) return kt();
          if (tt.isError()) return It.afterAutoRetryFailed(null), St.asError().forward();
          if (St = await ut(Ht), St.isError() && !Ht.aborted) {
            const tt = St.asError().debugResult;
            await It.afterJoinFailed(Qt.endpoint, tt, null), It.afterAutoRetryFailed(tt)
          } else if (!St.isError()) {
            var Ut;
            It.afterAutoRetryJoined(null !== (Ut = ct()) && void 0 !== Ut ? Ut : 0)
          }
        }
        return St.isError() ? (!0 === St.asError().debugResult.nV && Ht.aborted && Ft(Wt), St.asError().forward()) : (It.afterJoined(Qt.endpoint), (0, Nt.U)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), Xt.e.value({
          gameNameWithVariation: Qt.gameNameWithVariation,
          lobbyName: Qt.lobbyName
        }))
      }
    }

    function Ft(tt) {
      null !== tt && It.afterAliasJoinLeft(performance.now() - tt)
    }

    function kt() {
      return Xt.e.errorWithCode("Left the game while it loaded", Dt.n.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        nV: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const Gt = 1e4;

    function zt(tt, et, Vt) {
      return ot(tt, et, Vt).then((tt => ({
        result: tt,
        at: performance.now()
      })))
    }
    async function ot(tt, et, Vt) {
      return (0, Ot.B)(tt) || tt instanceof qt.h || !(tt.length > Qt.R) ? await bt.e.matchmakePlayer(Vt, tt, et, (0, Ct.d)()).then((tt => {
        if (!1 === tt.succeeded) return Xt.e.errorWithCode(tt.failReason, Dt.n.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: et,
          lobbyName: Vt,
          gameNameWithVariation: Ot
        } = tt, qt = rt(It.hostFor(et));
        return qt.isError() ? qt.asError().forward() : Xt.e.value({
          endpoint: qt.getValue(),
          gameNameWithVariation: Ot,
          lobbyName: Vt
        })
      })).catch((tt => (console.error("Bad response from the matchmaking server:", tt), Xt.e.errorWithCode(tt.toString(), Dt.n.REQUEST_TO_MATCHMAKING, {
        error: tt,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", tt), Xt.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", Dt.n.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function rt(tt) {
      const et = Jt.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(tt);
      return et.isError() ? Xt.e.errorWithCode(et.asError().message, Dt.n.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : Xt.e.value(et.getValue())
    }
    window.leaveGame = () => {
      (0, Mt.i)("/")
    }
  },
  9005: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(9014),
      qt = Vt(710),
      Dt = Vt(153);

    function mt(tt) {
      var et, Vt;
      if ((0, qt.B)(tt)) return !0;
      const mt = null !== (et = null === (Vt = Dt.siteUsedData[Dt.siteUsed]) || void 0 === Vt ? void 0 : Vt.adConfig.showRewardedAds) && void 0 !== et && et;
      for (const qt in tt) {
        const et = tt[qt];
        if (null !== et && void 0 !== et && et.items)
          for (const tt in et.items)
            if ((0, Ot.m)(et.items[tt], mt)) return !1
      }
      return !0
    }
  },
  36823: (tt, et, Vt) => {
    function Ot(tt, et) {
      for (let Vt = 0; Vt < tt.length; Vt++)
        if (tt[Vt].identifier === et) return tt[Vt];
      return null
    }

    function qt(tt, et) {
      return null !== Ot(tt, et)
    }
    Vt.d(et, {
      c: () => Ot,
      d: () => qt
    })
  },
  36839: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt,
      e: () => lt,
      h: () => Nt,
      j: () => Ht
    });
    var Ot = Vt(26),
      qt = Vt(2458),
      Dt = Vt(2465),
      mt = Vt(2471),
      dt = Vt(2569),
      jt = Vt(31);

    function Ht(tt, et) {
      return (!(0, mt.e)() || 0 === tt && 0 === et) && (0, Dt.w)(qt.g.Joystick, 0, tt, et, 0)
    }
    const Xt = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Qt(tt) {
      return tt.classList.contains("TouchKeyHit") && Et() ? null : tt.firstElementChild
    }

    function lt(tt) {
      return tt.classList.contains("TouchKeyHit") && !tt.classList.contains("CanvasZone") ? {
        whole: !Et(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: ft(Qt(tt))
      }
    }

    function Et() {
      return document.documentElement.classList.contains(dt.m)
    }

    function ft(tt) {
      return !(tt instanceof HTMLElement) || tt.offsetWidth <= 0 || tt.offsetHeight <= 0 ? null : {
        width: tt.offsetWidth,
        height: tt.offsetHeight
      }
    }

    function wt(tt, et) {
      const Vt = tt => Math.min(65535, Math.round(4 * tt));
      return (Vt(tt) | Vt(et) << 16) >>> 0
    }

    function yt(tt) {
      return {
        x: tt.left + tt.width / 2,
        y: tt.top + tt.height / 2,
        radius: Math.min(tt.width, tt.height) / 2
      }
    }
    const Nt = new class {
      constructor(tt) {
        this.write = tt, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        et ? this.elements.set(tt, {
          element: et,
          hidden: Vt
        }) : this.elements.delete(tt), this.measureOne(tt)
      }
      measure() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = tt.left, this.canvasTop = tt.top;
        for (const et of this.elements.keys()) this.measureOne(et)
      }
      hitZone(tt, et) {
        let Vt = null,
          Ot = 1;
        for (const qt of this.elements.keys()) {
          const Dt = this.shown(qt);
          if (!Dt) continue;
          const {
            rect: mt,
            element: dt
          } = Dt, jt = yt(mt), Ht = Math.max(0, mt.width / 2 - jt.radius), Xt = Math.max(0, mt.height / 2 - jt.radius), lt = Math.max(0, Math.abs(tt - jt.x) - Ht), Et = Math.max(0, Math.abs(et - jt.y) - Xt), wt = dt.firstElementChild;
          let Nt = Math.hypot(lt, Et) / jt.radius;
          const Mt = ft(Qt(dt));
          Mt && (Nt = Math.min(Nt, Math.max(2 * Math.abs(tt - jt.x) / Mt.width, 2 * Math.abs(et - jt.y) / Mt.height))), Nt < Ot && (Vt = {
            code: qt,
            element: dt,
            key: wt,
            ...jt
          }, Ot = Nt)
        }
        return Vt
      }
      measureOne(tt) {
        const et = this.shown(tt);
        if (!et) return void this.write(qt.g.TouchZone, tt, 0, 0, 0);
        const {
          rect: Vt,
          element: Ot
        } = et, Dt = yt(Vt);
        this.write(qt.g.TouchZone, tt, Dt.x - this.canvasLeft, Dt.y - this.canvasTop, wt(Vt.width, Vt.height));
        const mt = ft(Qt(Ot));
        this.write(qt.g.TouchZone, 256 | tt, 0, 0, mt ? wt(mt.width, mt.height) : 0)
      }
      shown(tt) {
        const et = this.elements.get(tt),
          Vt = Ot.b.get("worldPanelHud");
        if (!et || et.hidden || "none" === Vt) return null;
        const qt = et.element.getBoundingClientRect();
        return qt.width <= 0 || qt.height <= 0 ? null : {
          rect: qt,
          element: et.element
        }
      }
    }(Dt.w);
    (0, jt.n)(dt.h, (() => {
      Nt.measure()
    }))
  },
  37078: (tt, et, Vt) => {
    function Ot(tt) {
      return "fetch" === tt || "timeout" === tt || "integrity" === tt ? "download" : "browser"
    }
    Vt.d(et, {
      d: () => qt,
      h: () => mt,
      l: () => jt,
      n: () => dt,
      q: () => Ot,
      r: () => Dt
    });
    const qt = "https://discord.gg/playbloxd";

    function Dt(tt) {
      return "download" === tt ? {
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

    function mt(tt, et) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: et ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: tt.code
        },
        discordLink: et,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function dt() {
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

    function jt(tt, et, Vt) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: Vt ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: tt.reason
        },
        discordLink: null === tt.name,
        confirm: et ? "general:reconnect" : tt.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  37117: (tt, et, Vt) => {
    function Ot(tt, et) {
      return null === tt || null === et ? tt === et : tt[0] === et[0] && tt[1] === et[1] && tt[2] === et[2]
    }

    function qt(tt) {
      return [tt[0] + .5, tt[1] + .5, tt[2] + .5]
    }
    Vt.d(et, {
      b: () => qt,
      d: () => Ot
    })
  },
  37084: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => jt,
      d: () => dt
    });
    const Ot = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      qt = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      Dt = {
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
      mt = {
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
      dt = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: Ot.files,
          dependencies: Ot.dependencies,
          bundledSource: Ot.bundledSource,
          types: Ot.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: qt.files,
          dependencies: qt.dependencies,
          bundledSource: qt.bundledSource,
          types: qt.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: Dt.files,
          dependencies: Dt.dependencies,
          bundledSource: Dt.bundledSource,
          types: Dt.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: mt.files,
          dependencies: mt.dependencies,
          bundledSource: mt.bundledSource,
          types: mt.types
        }
      };

    function jt(tt) {
      const et = [],
        Vt = new Set,
        Ot = tt => {
          if (Vt.has(tt)) return;
          const qt = dt[tt];
          if (qt) {
            Vt.add(tt);
            for (const tt of qt.dependencies) Ot(tt);
            et.push(tt)
          }
        };
      for (const qt of tt) Ot(qt);
      return et
    }
  },
  37093: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => jt,
      f: () => dt,
      h: () => mt,
      k: () => Dt,
      m: () => Ht,
      n: () => Xt,
      o: () => ft,
      p: () => Et,
      q: () => lt
    });
    var Ot = Vt(1325);
    const qt = ["quickjs", "ses"];

    function Dt(tt) {
      return qt.includes(tt)
    }

    function mt(tt) {
      return tt === Ot.k || tt === Ot.n
    }

    function dt(tt, et) {
      return tt === Ot.k && et === Ot.n || tt === Ot.n && et === Ot.k
    }

    function jt(tt) {
      const et = Ot.n in tt,
        Vt = Ot.k in tt;
      return et && Vt ? null : et ? Ot.n : Vt ? Ot.k : null
    }

    function Ht(tt, et, Vt) {
      const Ot = `${et}/`;
      return tt.filter((tt => tt.startsWith(Ot))).map((tt => [tt, `${Vt}/${tt.slice(Ot.length)}`]))
    }

    function Xt(tt, et) {
      let Vt = 0;
      for (const [Ot, qt] of Object.entries(tt)) Ot !== et && (Vt += qt.length);
      return Vt
    }
    const Qt = "@plugins/";

    function lt(tt) {
      return `${Qt}${tt}`
    }

    function Et(tt, et) {
      return `/node_modules/@plugins/${tt}/${et}`
    }

    function ft(tt) {
      if (!tt.startsWith(Qt)) return null;
      const et = tt.slice(Qt.length);
      return function(tt) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(tt)
      }(et) ? et : null
    }
  },
  37096: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      d: () => qt,
      h: () => mt,
      l: () => jt,
      n: () => Dt
    });
    var Ot = Vt(2495);
    const qt = 5,
      Dt = "[SCHEMATIC]",
      mt = 1024e4;

    function dt(tt) {
      return tt.endsWith(".bloxdschem") && (0, Ot.v)(tt.slice(0, -11) + ".ts") && tt.length <= 64
    }

    function jt(tt) {
      return Object.fromEntries(Object.keys(tt).map((tt => [tt, Dt])))
    }
  },
  5015: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      d: () => Ot,
      g: () => Dt,
      i: () => jt,
      l: () => mt
    });
    const Ot = ["sine", "triangle", "square", "sawtooth"],
      qt = 55,
      Dt = {
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

    function mt(tt) {
      return "string" !== typeof tt ? tt : Object.hasOwn(Dt, tt) ? Dt[tt] : null
    }

    function dt(tt, et, Vt) {
      return Math.min(Vt, Math.max(et, tt))
    }

    function jt(tt) {
      const et = dt(tt.durationMs, 10, 500),
        Vt = dt(tt.attackMs, 0, et),
        {
          intonation: qt
        } = tt;
      return {
        waveform: Ot.includes(tt.waveform) ? tt.waveform : "sine",
        pitchHz: dt(tt.pitchHz, 20, 4e3),
        glideSemitones: dt(tt.glideSemitones, -24, 24),
        durationMs: et,
        attackMs: Vt,
        releaseMs: dt(tt.releaseMs, 0, et - Vt),
        lowpassHz: null === tt.lowpassHz ? null : dt(tt.lowpassHz, 20, 2e4),
        volume: dt(tt.volume, 0, 2),
        intonation: {
          variationSemitones: dt(qt.variationSemitones, 0, 6),
          declineSemitones: dt(qt.declineSemitones, 0, 12),
          questionRiseSemitones: dt(qt.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: dt(qt.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: dt(tt.syllableMs, 25, 200)
      }
    }
  },
  9042: () => {},
  10164: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18360: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20271: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20278: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20280: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20282: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20284: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);