export const id = 99;
export const ids = [99];
export const modules = {
  37354: (ee, ie, He) => {
    He.d(ie, {
      e: () => le,
      h: () => ue
    });
    var ye = He(59),
      be = He(1983),
      Me = He(37358),
      Ke = He.n(Me),
      Ue = He(4937),
      Fe = He(1956),
      Je = He(1432),
      oe = He(97),
      Re = He(107),
      ke = He(347),
      qe = He(1053),
      fe = He.n(qe),
      Te = He(18),
      pe = He(1323),
      Xe = He(1620),
      ze = He(1768),
      Be = He(1677),
      Ee = He(2059),
      ge = He(1403),
      Oe = He(2123),
      de = He(1385),
      We = He(2930),
      te = He(37362),
      Ze = He(37383),
      we = He(1455),
      De = He(2535),
      Pe = He(1127),
      Ae = He(37398);
    var Ye = He(34807),
      Ve = He(1220);
    const ae = ["touchstart", "touchend", "touchcancel"];
    const ce = new class {
      constructor() {
        this.saved = null, this.touchesDown = 0, this.due = !1, this.settled = !1, this.countTouches = ee => {
          this.touchesDown = ee.touches.length, this.due && 0 === this.touchesDown && this.putBack()
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
          for (const ee of ae) window.addEventListener(ee, this.countTouches, {
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
          x: ee,
          y: ie,
          viewportTop: He,
          viewportLeft: ye
        } = this.saved, be = window.visualViewport;
        if (window.scrollX === ee && window.scrollY === ie && be.offsetTop === He && be.offsetLeft === ye || window.scrollTo(ee, ie), this.settled) {
          this.saved = null, this.settled = !1;
          for (const ee of ae) window.removeEventListener(ee, this.countTouches, {
            capture: !0
          })
        }
      }
    };
    Ye.c.onRelease((() => {
      ce.keyboardSettled()
    }));
    var xe = He(1228);
    const Le = He(37400),
      Ce = ["enter", "t", "/"];
    let ve = !1;

    function ue() {
      return ve || (0, ze.isTextEntry)(document.activeElement)
    }

    function me() {
      var ee, ie;
      (0, Oe.e)();
      const He = null !== (ee = null === (ie = (0, ge.f)()) || void 0 === ie ? void 0 : ie.getBoundButton("keyboardChannel")) && void 0 !== ee ? ee : null;
      return He ? (0, xe.jsx)(Ee.b, {
        className: "ChatInputChannelGlyph",
        glyph: He
      }) : null
    }

    function le() {
      const {
        t: ee
      } = (0, Pe.v)(), {
        isTouchScreen: ie
      } = (0, Te.m)(["isTouchScreen"]), He = (0, de.A)(), [Me, qe] = (0, ye.useState)(!1), Ee = (0, ye.useRef)(Me), ge = (0, ye.useRef)(null), {
        messages: Oe,
        reportedPlayers: ae,
        channel: ue
      } = (0, We.o)(), le = (0, ye.useRef)(0), ne = (0, ye.useRef)(""), je = (0, ye.useRef)(null);
      var se;
      se = je, (0, ye.useEffect)((() => {
        if (!(0, oe.isIOS)()) return;
        const ee = se.current;
        let ie = null;
        const He = He => {
            const ye = He.changedTouches[0];
            ie = "none" === getComputedStyle(ee).pointerEvents ? {
              id: ye.identifier,
              y: ye.clientY
            } : null
          },
          ye = He => {
            const ye = ie,
              be = ye && (0, Ae.d)(He.changedTouches, ye.id);
            be && (He.preventDefault(), ee.scrollBy({
              top: ye.y - be.clientY,
              behavior: "instant"
            }), ye.y = be.clientY)
          };
        return ee.addEventListener("touchstart", He, {
          passive: !0
        }), ee.addEventListener("touchmove", ye, {
          passive: !1
        }), () => {
          ee.removeEventListener("touchstart", He), ee.removeEventListener("touchmove", ye)
        }
      }), [se]);
      const [Ie, he] = (0, ye.useState)(!1), [Ne, Ge] = (0, ye.useState)(!1), re = (0, ye.useRef)(Ie), Qe = (0, ye.useRef)(null), ei = (0, ye.useRef)(!1), ii = (0, ye.useRef)(null), Hi = (0, ye.useRef)(null), yi = (0, ye.useRef)(null), bi = (0, ye.useRef)(Fi);
      bi.current = Fi;
      const Mi = (0, De.f)();

      function Ki() {
        Ee.current = !1, qe(!1), Hi.current.blur()
      }

      function Ui(ee) {
        re.current = ee, he(ee)
      }

      function Fi() {
        const ee = Hi.current.value;
        Hi.current.value = "", Ji(ee)
      }

      function Ji(ee) {
        (0, We.m)(ee), le.current = 0, Ui(!1)
      }

      function oi(ee, ie) {
        0 === le.current && (ne.current = Hi.current.value);
        const He = (0, We.j)(le.current + ee, ie);
        le.current = He.stepsBack, Hi.current.value = 0 === He.stepsBack ? ne.current : He.text, setTimeout((() => {
          Hi.current && Hi.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function Ri() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        je.current && (!ee && re.current || (je.current.scrollTop = 1e5))
      }
      return (0, Ue.e)(!0, Me, "ChatComponent"), (0, ye.useEffect)((() => (ve = Me, () => {
          ve = !1
        })), [Me]), (0, Je.f)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, Xe.q)() && qe(!1)
        })), (0, ye.useEffect)((() => {
          Hi.current.addEventListener("blur", (ee => {
            if (null === Hi.current) return;
            Array.from(document.querySelectorAll(":hover")).some((ee => ee.classList.contains("ChatInputChannel") || ee.classList.contains("ChatMsgSelectWrapper"))) || ((0, oe.isMobile)() && Ee.current && "" !== Hi.current.value && bi.current(), qe(!1))
          }));
          const ee = ee => {
            ge.current.contains(ee.target) || (0, Be.h)(ee.target) || qe(!1)
          };
          document.addEventListener("touchstart", ee, {
            capture: !0
          });
          const ie = ee => {
            (0, Ze.m)(ee.target) && (Ee.current = !1, qe(!1))
          };
          document.addEventListener("mousedown", ie, {
            capture: !0
          });
          const He = () => {
              clearTimeout(Qe.current), Ui(!0)
            },
            ye = () => {
              clearTimeout(Qe.current), Qe.current = setTimeout((() => {
                Ui(!1), Ri()
              }), 4e3)
            },
            Me = () => {
              document.pointerLockElement ? (qe(!1), Ge(!0), ei.current = !1, Ui(!1), Ri()) : Ge(!1)
            };
          je.current.addEventListener("pointermove", (ee => {
            "touch" === ee.pointerType || ei.current || document.pointerLockElement || (ei.current = !0, clearTimeout(Qe.current))
          })), je.current.addEventListener("pointerleave", (ee => {
            "touch" !== ee.pointerType && (ei.current = !1, re.current && ye())
          })), je.current.addEventListener("pointerdown", (ee => {
            "touch" === ee.pointerType || document.pointerLockElement || (ei.current = !0, He())
          })), je.current.addEventListener("wheel", (ee => {
            document.pointerLockElement || ee.deltaY >= 0 && Math.abs(je.current.scrollTop) < 1 || (He(), ei.current || (Qe.current = setTimeout((() => {
              Ui(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), je.current.addEventListener("touchstart", He), je.current.addEventListener("touchend", ye), je.current.addEventListener("touchcancel", ye), document.addEventListener("pointerlockchange", Me);
          const Ue = ee => {
            if (Mi.shown && (Ee.current || ! function(ee) {
                if ((0, ze.isTypingInInput)()) return !0;
                const ie = document.activeElement;
                return (ie instanceof HTMLButtonElement || "button" === (null === ie || void 0 === ie ? void 0 : ie.getAttribute("role"))) && ["Enter", " "].includes(ee.key)
              }(ee)) && "codeEditor" !== Te.e.get("openInGameMenuName") && "lobbyCodeEditor" !== Te.e.get("openInGameMenuName") && !be.gameBridge.latest("connectedGame").replay)
              if (Ee.current || !(0, Xe.q)()) {
                if (Ee.current) {
                  if ("ArrowUp" === ee.code || "ArrowDown" === ee.code) return oi("ArrowUp" === ee.code ? 1 : -1, !1), void ee.stopPropagation();
                  if ("Tab" === ee.code) return We.e.selectNextChannel(), ee.stopPropagation(), void ee.preventDefault();
                  if (ee.ctrlKey && Se.includes(Le[ee.keyCode])) return ee.preventDefault(), void ee.stopPropagation()
                }
                if ([...Ce, "esc"].includes(Ke()(ee)))
                  if ("esc" !== Ke()(ee)) {
                    if (!Ee.current || "/" !== Ke()(ee)) {
                      if ("t" === Ke()(ee)) {
                        if (Ee.current) return void ee.stopPropagation();
                        ee.preventDefault()
                      }
                      Ee.current && "" !== Hi.current.value && bi.current(), ee.repeat || (Ee.current || "/" === Ke()(ee) && (Hi.current.value = "/", ee.preventDefault()), qe(!Ee.current))
                    }
                  } else Ee.current && (qe(!1), ee.stopPropagation());
                else Ee.current && ee.stopPropagation()
              } else Ce.includes(Ke()(ee)) && (ee.preventDefault(), ee.stopPropagation(), (0, Xe.c)(ee))
          };
          document.addEventListener("keydown", Ue, {
            capture: !0
          });
          const Fe = je.current;
          let Je = !1;
          const Re = new ResizeObserver((() => {
              Je && (Je = !1, Ri())
            })),
            ke = () => {
              Je = !0, Re.unobserve(Fe), Re.observe(Fe)
            };
          ii.current = ke;
          const fe = new MutationObserver(ke);
          return fe.observe(Fe, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", Ue, {
              capture: !0
            }), document.removeEventListener("touchstart", ee, {
              capture: !0
            }), document.removeEventListener("mousedown", ie, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", Me), ii.current = null, fe.disconnect(), Re.disconnect(), clearTimeout(Qe.current)
          }
        }), []), (0, Be.l)(Hi, {
          open: () => {
            qe(!0)
          },
          close: () => {
            Ki()
          },
          submit: () => {
            "" !== Hi.current.value && Fi(), Ki()
          },
          stepHistory: () => {
            oi(1, !0)
          },
          sendLine: ee => {
            Ji(ee), Ki()
          },
          selectNextChannel: () => {
            We.e.selectNextChannel()
          }
        }), (0, ye.useEffect)((() => {
          var ee;
          (Ee.current = Me, Hi.current) && (Me ? (le.current = 0, Hi.current.focus()) : (Hi.current.blur(), null === (ee = ii.current) || void 0 === ee || ee.call(ii)))
        }), [Me]),
        function(ee, ie) {
          (0, ye.useLayoutEffect)((() => {
            if (!ie) return;
            Ye.c.hold(), ce.keyboardUp();
            const He = ee.current.closest(".InGameHeaderAndChat"),
              ye = (0, Ve.d)((ee => {
                let {
                  top: ie,
                  height: ye
                } = ee;
                He.style.setProperty("--keyboard-top", `${ie+ye}px`)
              }));
            return () => {
              ye(), He.style.removeProperty("--keyboard-top"), Ye.c.release(), ce.keyboardDown()
            }
          }), [ee, ie])
        }(ge, Me && ie), (0, xe.jsx)(xe.Fragment, {
          children: (0, xe.jsxs)("div", {
            ref: ge,
            className: fe()("Chat", {
              Chatting: Me
            }),
            "data-camera-keeper": Me ? "" : void 0,
            children: [(0, xe.jsx)("div", {
              ref: je,
              className: fe()("ChatMessages", {
                HideScrollbar: !Ie && !Me,
                NoScrolling: !(0, oe.isMobile)() && Ne
              }),
              children: (0, xe.jsx)(te.e, {
                messages: Oe,
                reportedPlayers: ae
              })
            }), ie && !Me && (0, xe.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": ee("general:chat"),
              ...(0, we.f)((() => {
                qe(!0), yi.current.style.display = "flex", (0, oe.isIOS)() && Hi.current.focus()
              }), "pointerup"),
              children: (0, xe.jsx)(pe.e, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, xe.jsxs)("div", {
              ref: yi,
              className: "ChatInputWrapper",
              style: {
                display: "" + (Me ? "flex" : "none")
              },
              children: [ue && (0, xe.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: ue.elementBgColor
                },
                onClick: ee => {
                  We.e.selectNextChannel(), Hi.current.focus()
                },
                children: (0, xe.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, xe.jsx)(Fe.e, {
                    text: ue.elementContent
                  })
                })
              }), ue && He && (0, xe.jsx)(me, {}), (0, xe.jsx)("input", {
                className: "ChatInput",
                maxLength: ke.gd,
                ref: Hi,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": ee("general:chat"),
                placeholder: ue ? `${ue.channelName} Chat${"touchOnly"===(0,Re.b)()||He?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const Se = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  37362: (ee, ie, He) => {
    He.d(ie, {
      e: () => te
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(2936),
      Ue = He(27),
      Fe = He(2434),
      Je = He(3987),
      oe = He(2079),
      Re = He(18),
      ke = He(1956),
      qe = He(37367),
      fe = He(2202),
      Te = He(2938),
      pe = He(2790),
      Xe = He(2762),
      ze = He(2755),
      Be = He(4001),
      Ee = He(37372),
      ge = He(3136),
      Oe = He(2029),
      de = He(1228);

    function We(ee) {
      for (let He = ee.length - 1; He >= 0; He--) {
        const ye = "string" === typeof(ie = ee[He]) ? ie : "str" in ie && "string" === typeof ie.str ? ie.str : "";
        if ("" !== ye.trim()) return ye
      }
      var ie;
      return ""
    }

    function te(ee) {
      let {
        messages: ie,
        reportedPlayers: He
      } = ee;
      return (0, de.jsx)(de.Fragment, {
        children: ie.map((ee => (0, de.jsx)(Ze, {
          message: ee,
          reportedPlayers: He
        }, ee.clientChatMsgId)))
      })
    }
    const Ze = (0, ye.memo)((function(ee) {
      var ie;
      let {
        message: He,
        reportedPlayers: be
      } = ee;
      const te = (0, ye.useRef)(null),
        [Ze] = (0, ye.useState)(ge.g),
        {
          author: we
        } = He,
        De = null === we || void 0 === we ? void 0 : we.id,
        Pe = null !== (ie = null === we || void 0 === we ? void 0 : we.name) && void 0 !== ie ? ie : void 0,
        Ae = (0, oe.c)(Pe),
        Ye = null !== we && void 0 !== we && we.profileEffect ? fe.e[we.profileEffect] : void 0,
        Ve = null !== we && !we.local,
        {
          worldCodeLineId: ae
        } = He,
        ce = (0, Oe.g)("hiddenPlayerNames", (ee => (0, Te.h)(Ve, Pe, ee))),
        xe = null === He.serverChatMsgId || null === we ? null : {
          text: We(He.content),
          hiddenFromReplay: He.hiddenFromReplay,
          serverChatMsgId: He.serverChatMsgId,
          authorId: we.id
        },
        Le = (0, Je.f)(Ve && null !== Pe && void 0 !== Pe ? Pe : null),
        Ce = (0, ze.m)(te);
      (0, ye.useEffect)((() => () => {
        ze.e.closeIfOwner(te)
      }), []);
      const ve = null !== we && null !== ae,
        ue = [];
      Ve && null !== xe && !be.includes(De) && ue.push({
        icon: "flag",
        text: ve ? "general:reportPlayer" : "general:report",
        onClick: () => {
          Ue.h.yR("OpenReportMenu", {
            playerEId: De,
            playerName: Pe,
            nF: xe,
            serverChatMsgId: xe.serverChatMsgId
          })
        }
      }), null !== ae && ue.push({
        icon: "flag",
        text: ve ? "general:reportGameMessage" : "general:report",
        onClick: () => {
          Ue.h.yR("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            nF: {
              text: (0, Ke.e)(He.content),
              hiddenFromReplay: He.hiddenFromReplay
            },
            serverChatMsgId: ae
          })
        }
      });
      const me = Ve && void 0 !== Pe ? (0, Be.d)(Le, Pe, xe) : [];
      return (0, de.jsxs)("div", {
        ref: te,
        className: Me()("MessageWrapper", {
          ChatMsgSelectWrapper: De,
          Still: Ze
        }),
        "data-replay-hidden": He.hiddenFromReplay ? "" : void 0,
        onContextMenu: ce ? ee => {
          (0, pe.e)(te, ee, {
            ...(0, Te.f)(De, Pe),
            showLocation: !1,
            status: null,
            extraActions: ue,
            moderationActions: (0, Ee.d)(Pe),
            friendRequestSource: "chat"
          }, Re.e.get("isTouchScreen"))
        } : void 0,
        onPointerDown: ce ? ee => {
          (0, Xe.d)(ee, (() => (0, Te.f)(De, Pe).playerSocialPreview))
        } : void 0,
        children: [Ye && (0, de.jsx)(Ye, {
          className: "ChatMessageBackground",
          simple: !0
        }), (Ve || null !== ae) && !Ce && (0, de.jsx)(qe.d, {
          className: "ChatFloatingActions",
          triggerElementRef: te,
          options: [...ue.map((ee => {
            let {
              icon: ie,
              text: He,
              onClick: ye
            } = ee;
            return {
              icon: ie,
              text: He,
              onPointerDown: ye
            }
          })), ...me, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: ee => {
              (0, Fe.j)(Pe, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: ce && "blocked" !== Le
          }]
        }), (0, de.jsx)(ke.e, {
          text: He.content,
          friendBadgeFor: Ae ? Pe : void 0
        }, He.clientChatMsgId)]
      }, He.clientChatMsgId)
    }))
  },
  37724: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re,
      e: () => oe
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1438),
      Ue = He(1228);
    const Fe = 200,
      Je = 160;

    function oe() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function Re(ee) {
      let {
        side: ie,
        defaultSize: He,
        covers: be,
        onClose: oe,
        children: Re
      } = ee;
      const ke = (0, ye.useRef)(null),
        [qe, fe] = (0, ye.useState)(null),
        [Te, pe] = (0, ye.useState)(He);
      Te !== He && (pe(He), fe(null));
      const Xe = (0, ye.useRef)(null),
        ze = "top" === ie,
        Be = ee => ze ? ee.clientY : ee.clientX,
        Ee = () => {
          Xe.current = null
        };
      return (0, Ue.jsxs)("div", {
        ref: ke,
        className: Me()("ResizableSidePanel", ie && `ResizableSidePanel-${ie}`, {
          Covers: "always" === be,
          CoversWhenNarrow: "narrow" === be,
          Dragged: null !== qe
        }),
        style: {
          [ze ? "height" : "width"]: null !== qe && void 0 !== qe ? qe : He
        },
        children: [Re, ie && (0, Ue.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": ze ? "horizontal" : "vertical",
          onPointerDown: ee => {
            if (0 !== ee.button) return;
            ee.preventDefault();
            const ie = ke.current,
              He = Array.from(ie.parentElement.children).reduce(((ee, He) => He !== ie && "0" !== getComputedStyle(He).flexGrow ? ee + (ee => ze ? ee.clientHeight : ee.clientWidth)(He) : ee), 0),
              ye = ze ? ie.offsetHeight : ie.offsetWidth,
              be = Math.min(Fe, ye),
              Me = Math.max(be, ye + Math.max(0, He - Je));
            Xe.current = {
              start: Be(ee),
              startSize: ye,
              minSize: be,
              maxSize: Me
            }, ee.currentTarget.setPointerCapture(ee.pointerId)
          },
          onPointerMove: ee => {
            const He = Xe.current;
            if (!He) return;
            const ye = "right" === ie ? He.start - ee.clientX : Be(ee) - He.start;
            fe(Math.min(He.maxSize, Math.max(He.minSize, He.startSize + ye)))
          },
          onPointerUp: Ee,
          onPointerCancel: Ee,
          onLostPointerCapture: Ee
        }), oe && (0, Ue.jsx)(Ke.i, {
          className: "ResizableSidePanelClose",
          onClick: oe
        })]
      })
    }
  },
  37750: (ee, ie, He) => {
    He.d(ie, {
      A: () => ge,
      D: () => We,
      H: () => be,
      K: () => de,
      d: () => Be,
      e: () => pe,
      i: () => fe,
      l: () => qe,
      p: () => ze,
      r: () => te,
      v: () => Ee,
      x: () => Oe
    });
    var ye = He(59);
    const be = 5e3,
      Me = 500,
      Ke = 3e3;
    let Ue = null,
      Fe = null,
      Je = null;
    const oe = new Set;

    function Re(ee) {
      Ue = ee;
      for (const ie of oe) ie()
    }

    function ke() {
      if (!Ue || void 0 !== Ue.endedAt) return;
      null !== Fe && (clearTimeout(Fe), Fe = null), Re({
        ...Ue,
        endedAt: Date.now()
      });
      const ee = Je;
      Je = null, null === ee || void 0 === ee || ee()
    }

    function qe(ee, ie) {
      let {
        submit: He,
        reopen: ye
      } = ie;
      null !== Fe && clearTimeout(Fe), Je = ye, Re({
        ...ee,
        startedAt: Date.now(),
        errors: []
      }), Fe = setTimeout(ke, Ke), He()
    }

    function fe() {
      Ue && void 0 === Ue.endedAt && void 0 === Ue.ranAt && (null !== Fe && clearTimeout(Fe), Re({
        ...Ue,
        ranAt: Date.now()
      }), Fe = setTimeout(ke, be))
    }
    const Te = 3;

    function pe(ee) {
      if (!Ue || void 0 === Ue.ranAt || void 0 !== Ue.endedAt || Ue.errors.includes(ee) || Ue.errors.length >= Te) return;
      const ie = 0 === Ue.errors.length;
      Re({
        ...Ue,
        errors: [...Ue.errors, ee]
      }), ie && (null !== Fe && clearTimeout(Fe), Fe = setTimeout(ke, Me))
    }

    function Xe(ee) {
      var ie;
      return (null === (ie = Ue) || void 0 === ie ? void 0 : ie.chatKey) === ee ? Ue : null
    }

    function ze(ee) {
      const ie = Xe(ee);
      return ie && void 0 !== ie.endedAt ? (Re(null), ie) : null
    }

    function Be(ee) {
      var ie;
      (null === (ie = Ue) || void 0 === ie ? void 0 : ie.chatKey) === ee && (null !== Fe && (clearTimeout(Fe), Fe = null), Je = null, Re(null))
    }
    const Ee = "These changes from your last answer didn't go in. Make them again.";

    function ge(ee) {
      const ie = [...new Set(ee)].slice(0, Te);
      return `Fix this in your change: when it ran, the world showed ${1===ie.length?"this error":"these errors"}: ${ie.join(" ")}`
    }

    function Oe(ee) {
      return `Your change didn't go in, because the code wouldn't run at all: ${ee.join(" ")} Send the whole change again with that fixed.`
    }

    function de(ee) {
      return `Fix this in your change: ${ee.join(" ")}`
    }

    function We(ee) {
      var ie;
      if (void 0 === ee.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const He = Math.max(1, Math.round(((null !== (ie = ee.endedAt) && void 0 !== ie ? ie : ee.ranAt) - ee.ranAt) / 1e3)),
        ye = `Your change ran in your world for ${He} ${1===He?"second":"seconds"}`;
      return 0 === ee.errors.length ? {
        title: "Tested: no errors",
        text: `${ye} without an error.`
      } : {
        title: 1 === ee.errors.length ? "Tested: it showed an error" : `Tested: it showed ${ee.errors.length} errors`,
        text: `${ye} and showed: ${ee.errors.join(" ")}`
      }
    }

    function te(ee) {
      const [ie, He] = (0, ye.useState)((() => Xe(ee)));
      return (0, ye.useEffect)((() => {
        const ie = () => {
          He(Xe(ee))
        };
        return ie(), oe.add(ie), () => {
          oe.delete(ie)
        }
      }), [ee]), ie
    }
  },
  37752: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      g: () => ye
    });
    const ye = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function be(ee, ie, He) {
      return {
        key: ee,
        label: `Code block at ${ie.join(", ")}`,
        codeBlock: !0,
        pos: ie,
        canChangePos: He
      }
    }
  },
  37745: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      e: () => Me,
      f: () => Ke,
      i: () => be
    });
    const ye = "code block",
      be = "World Code/";

    function Me(ee) {
      return ee.trim().toLowerCase().startsWith(be.toLowerCase())
    }

    function Ke(ee) {
      return ee.trim().slice(be.length).replace(/^\.?\//, "")
    }
  },
  37701: (ee, ie, He) => {
    He.d(ie, {
      d: () => Fe,
      f: () => Je,
      i: () => Ue,
      m: () => oe
    });
    var ye = He(59),
      be = He(35),
      Me = He(97);
    class Ke {
      constructor(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = ee, this.defaultValue = ie, this.canChange = He, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const ee = be.i.getItem(this.storageKey);
            this.value = "boolean" === typeof ee ? ee : this.defaultValue
          }
          return this.value
        }, this.set = ee => {
          this.value = ee, be.i.setItem(this.storageKey, ee);
          for (const ie of this.listeners) ie(ee)
        }
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
    }
    const Ue = new Ke("codeEditorLightMode", !1),
      Fe = new Ke("codeEditorAiHints", !0),
      Je = new Ke("codeEditorAiKeySafetyCheck", !0, Me.featureFlags.isOwnTopLevelSite);

    function oe(ee) {
      const [ie, He] = (0, ye.useState)(ee.get);
      return (0, ye.useEffect)((() => {
        const ie = ee.subscribe(He);
        return He(ee.get()), ie
      }), [ee]), [ie, ee.set]
    }
  },
  37682: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    const ye = "CodeEditorPopup"
  },
  37699: (ee, ie, He) => {
    He.d(ie, {
      D: () => Ze,
      F: () => ke,
      I: () => Ve,
      J: () => We,
      L: () => te,
      O: () => Ye,
      b: () => fe,
      e: () => Fe,
      i: () => Te,
      l: () => we,
      o: () => Ue,
      r: () => oe,
      t: () => qe,
      w: () => pe,
      x: () => Ee,
      z: () => De
    });
    var ye = He(2523),
      be = He(37696);
    const Me = "bloxd-world-code-directory-sync",
      Ke = "handles",
      Ue = "[INVALID SCHEMATIC PLACEHOLDER]";

    function Fe(ee, ie) {
      return `${ee}::${ie}`
    }
    const Je = new Set(["node_modules", ".git"]);

    function oe() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function Re() {
      return new Promise(((ee, ie) => {
        const He = indexedDB.open(Me, 1);
        He.onupgradeneeded = () => {
          const ee = He.result;
          ee.objectStoreNames.contains(Ke) || ee.createObjectStore(Ke)
        }, He.onsuccess = () => {
          ee(He.result)
        }, He.onerror = () => {
          var ee;
          ie(null !== (ee = He.error) && void 0 !== ee ? ee : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function ke(ee, ie) {
      const He = await Re();
      try {
        await new Promise(((ye, be) => {
          const Me = He.transaction(Ke, "readwrite");
          Me.objectStore(Ke).put(ie, ee), Me.oncomplete = () => {
            ye()
          }, Me.onerror = () => {
            var ee;
            be(null !== (ee = Me.error) && void 0 !== ee ? ee : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        He.close()
      }
    }
    async function qe(ee) {
      const ie = await Re();
      try {
        return await new Promise(((He, ye) => {
          const be = ie.transaction(Ke, "readonly").objectStore(Ke).get(ee);
          be.onsuccess = () => {
            var ee;
            He(null !== (ee = be.result) && void 0 !== ee ? ee : null)
          }, be.onerror = () => {
            var ee;
            ye(null !== (ee = be.error) && void 0 !== ee ? ee : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        ie.close()
      }
    }
    async function fe(ee) {
      const ie = await Re();
      try {
        await new Promise(((He, ye) => {
          const be = ie.transaction(Ke, "readwrite");
          be.objectStore(Ke).delete(ee), be.oncomplete = () => {
            He()
          }, be.onerror = () => {
            var ee;
            ye(null !== (ee = be.error) && void 0 !== ee ? ee : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        ie.close()
      }
    }
    async function Te(ee) {
      const ie = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await ee.queryPermission(ie) || "granted" === await ee.requestPermission(ie)
    }
    async function pe(ee) {
      if (!oe()) return null;
      try {
        const ie = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await ke(ee, ie), ie
      } catch (ie) {
        if (function(ee) {
            return ee instanceof DOMException && "AbortError" === ee.name
          }(ie)) return null;
        throw ie
      }
    }

    function Xe(ee) {
      return ee.startsWith(".") || Je.has(ee)
    }

    function ze(ee) {
      if (!ee) return !0;
      const ie = ee.split("/");
      for (const He of ie)
        if ("" === He || "." === He || ".." === He) return !1;
      return !0
    }
    async function Be(ee, ie, He) {
      for await (const [Me, Ke] of ee.entries()) {
        if ("directory" === Ke.kind) {
          if (Xe(Me)) continue;
          const ee = ie ? `${ie}/${Me}` : Me;
          if (!ze(ee)) continue;
          await Be(Ke, ee, He);
          continue
        }
        const ee = ie ? `${ie}/${Me}` : Me;
        if (!(0, ye.s)(ee) && !(0, be.d)(ee)) continue;
        const Ue = await Ke.getFile();
        He[ee] = (0, be.d)(ee) ? await Pe(Ue) : await Ue.text()
      }
    }
    async function Ee(ee) {
      const ie = {};
      return await Be(ee, "", ie), ie
    }

    function ge(ee) {
      return !(!ee || ee !== ee.trim() || ee.startsWith("/") || ee.includes("\\") || ee.includes("\0")) && ze(ee)
    }
    async function Oe(ee, ie, He) {
      const ye = ie.split("/"),
        be = ye[ye.length - 1];
      let Me = ee;
      for (let Ke = 0; Ke < ye.length - 1; Ke++) Me = await Me.getDirectoryHandle(ye[Ke], {
        create: He
      });
      return {
        dir: Me,
        fileName: be
      }
    }
    async function de(ee, ie, He) {
      if (!ge(ie)) throw new Error(`Refusing to write unsafe path: ${ie}`);
      const {
        dir: ye,
        fileName: be
      } = await Oe(ee, ie, !0), Me = await ye.getFileHandle(be, {
        create: !0
      }), Ke = await Me.createWritable();
      await Ke.write(He), await Ke.close()
    }
    async function We(ee, ie, He) {
      const ye = await async function(ee, ie) {
        if (!ge(ie)) return null;
        try {
          const {
            dir: He,
            fileName: ye
          } = await Oe(ee, ie, !1), be = await He.getFileHandle(ye), Me = await be.getFile();
          return await Me.text()
        } catch (He) {
          if (He instanceof DOMException && ("NotFoundError" === He.name || "NotAllowedError" === He.name)) return null;
          throw He
        }
      }(ee, ie);
      ye !== He && await de(ee, ie, He)
    }
    async function te(ee, ie, He) {
      if (!(0, ye.s)(ie) && !(0, be.d)(ie)) throw new Error(`Refusing to write non-allowlisted path: ${ie}`);
      if ((0, be.d)(ie)) {
        if (await Ae(ee, ie) === Ue) throw new Error(`Move the binary schematic ${ie} outside the linked folder before syncing its placeholder`)
      }
      await de(ee, ie, He)
    }
    async function Ze(ee, ie) {
      if (!ge(ie)) throw new Error(`Refusing to remove unsafe path: ${ie}`);
      try {
        const {
          dir: He,
          fileName: ye
        } = await Oe(ee, ie, !1);
        await He.removeEntry(ye)
      } catch (He) {
        if (He instanceof DOMException && ("NotFoundError" === He.name || "NotAllowedError" === He.name)) return;
        throw He
      }
    }
    async function we(ee, ie) {
      if (!ge(ie)) return null;
      try {
        const He = ie.split("/");
        let ye = ee;
        for (const ee of He) ye = await ye.getDirectoryHandle(ee);
        return ye
      } catch (He) {
        if (He instanceof DOMException && ("NotFoundError" === He.name || "NotAllowedError" === He.name)) return null;
        throw He
      }
    }
    async function De(ee, ie) {
      if ((0, ye.s)(ie) || (0, be.d)(ie)) {
        if ((0, be.d)(ie)) {
          if (await Ae(ee, ie) === Ue) throw new Error(`Refusing to remove a binary schematic: ${ie}`)
        }
        await Ze(ee, ie)
      }
    }
    async function Pe(ee) {
      if (ee.size > 64) return Ue;
      const ie = await ee.text();
      return Array.from(ie).some((ee => {
        const ie = ee.charCodeAt(0);
        return ie < 9 || ie > 13 && ie < 32 || 65533 === ie
      })) ? Ue : ie
    }
    async function Ae(ee, ie) {
      try {
        const {
          dir: He,
          fileName: ye
        } = await Oe(ee, ie, !1);
        return await Pe(await (await He.getFileHandle(ye)).getFile())
      } catch (He) {
        if (He instanceof DOMException && "NotFoundError" === He.name) return null;
        throw He
      }
    }
    async function Ye(ee, ie) {
      const He = await Ee(ee);
      for (const ye of Object.keys(He)) ye in ie || (0, be.d)(ye) || await De(ee, ye);
      for (const [Me, Ke] of Object.entries(ie))((0, ye.s)(Me) || (0, be.d)(Me)) && await te(ee, Me, Ke)
    }

    function Ve(ee, ie) {
      var He, ye;
      let be = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Me = null !== (He = be.debounceMs) && void 0 !== He ? He : 300,
        Ke = null !== (ye = be.pollMs) && void 0 !== ye ? ye : 1e3;
      let Ue = !1,
        Fe = null,
        Je = null,
        oe = null;
      const Re = () => {
          Ue || (Fe && clearTimeout(Fe), Fe = setTimeout((() => {
            Fe = null, ke()
          }), Me))
        },
        ke = async () => {
          if (!Ue) try {
            if (!await Te(ee, "readwrite")) return;
            const He = await Ee(ee);
            Ue || ie(He)
          } catch (He) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", He)
          }
        };
      ke();
      const qe = window.FileSystemObserver;
      if (qe) try {
        oe = new qe((() => {
          Re()
        })), oe.observe(ee, {
          recursive: !0
        })
      } catch (fe) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", fe), oe = null
      }
      return oe || (Je = setInterval((() => {
        Re()
      }), Ke)), () => {
        Ue = !0, Fe && clearTimeout(Fe), Je && clearInterval(Je), oe && oe.disconnect()
      }
    }
  },
  37323: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ze,
      f: () => de,
      i: () => We,
      m: () => ge,
      o: () => Oe
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(3416),
      Ue = He(335),
      Fe = He(2532),
      Je = He(27),
      oe = He(2018),
      Re = He(35),
      ke = He(2029),
      qe = He(18),
      fe = He(2043),
      Te = He(1385),
      pe = He(9555),
      Xe = He(2061),
      ze = He(1127),
      Be = He(1228);
    const Ee = 7e3;

    function ge() {
      const {
        loadingOverlayVisible: ee,
        openInGameMenuName: ie,
        openEverythingMenuName: He
      } = (0, qe.m)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return ee || null !== ie || null !== He
    }

    function Oe(ee, ie, He) {
      const be = (0, ye.useRef)(He);
      be.current = He;
      const Me = (0, ye.useRef)({
        card: ee,
        ms: 0
      });
      (0, ye.useEffect)((() => {
        if (ie || null === ee) return;
        Me.current.card !== ee && (Me.current = {
          card: ee,
          ms: 0
        });
        const He = Me.current,
          ye = performance.now(),
          Ke = setTimeout((() => {
            be.current()
          }), Ee - He.ms);
        return () => {
          clearTimeout(Ke), He.ms += performance.now() - ye
        }
      }), [ie, ee])
    }
    const de = (0, ye.memo)((function() {
      const {
        isTouchScreen: ee
      } = (0, qe.m)(["isTouchScreen"]), ie = (0, Te.A)();
      (0, Ke.b)();
      const He = (0, Fe.i)("showBasicMovementControls"),
        [be, oe] = (0, ye.useState)("movement"),
        ke = "movement" === be,
        fe = ie && !1 !== He;
      (0, ye.useEffect)((() => {
        "padActions" !== be || fe || oe("done")
      }), [be, fe]);
      const pe = ge();
      Oe("done" === be ? null : be, pe, (() => {
        oe("movement" === be && (0, Te.n)() ? "padActions" : "done")
      }));
      const Xe = Re.i.getItem(Ue.Ob) > 2,
        ze = !Xe && (!ee || ie) && ke && !1 !== He;
      return (0, ye.useEffect)((() => {
        ze && !pe && Je.h.yR("controlsTutorialShown", "movement")
      }), [ze, pe]), Xe ? (0, Be.jsx)(we, {
        showingMovementControls: !1
      }) : (0, Be.jsxs)(Be.Fragment, {
        children: [ze ? (0, Be.jsxs)("div", {
          className: Me()("ControlsTutorialDiv", {
            Covered: pe
          }),
          children: [(0, Be.jsx)(We, {}), (0, Be.jsx)(Ze, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Be.jsx)(Ze, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, "padActions" === be && fe && (0, Be.jsx)(te, {
          covered: pe
        }), (0, Be.jsx)(we, {
          showingMovementControls: "done" !== be
        })]
      })
    }));

    function We() {
      const ee = (0, Te.A)();
      return (0, Be.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Be.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), ee && (0, Be.jsx)(fe.e, {
          noaAction: "forward"
        }), !ee && (0, Be.jsxs)(Be.Fragment, {
          children: [(0, Be.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Be.jsx)(fe.e, {
              noaAction: "forward"
            })
          }), (0, Be.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Be.jsx)(fe.e, {
              noaAction: "left"
            }), (0, Be.jsx)(fe.e, {
              noaAction: "backward"
            }), (0, Be.jsx)(fe.e, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function te(ee) {
      let {
        covered: ie
      } = ee;
      const {
        t: He
      } = (0, ze.v)(), ye = (0, Fe.i)("useInventory");
      return (0, Be.jsxs)("div", {
        className: Me()("ControlsTutorialDiv", {
          Covered: ie
        }),
        children: [(0, Be.jsx)(Ze, {
          header: He("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Be.jsx)(Ze, {
          header: He("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== ye && (0, Be.jsx)(Ze, {
          header: He("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Be.jsx)(Ze, {
          header: He("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Ze(ee) {
      let {
        header: ie,
        noaAction: He
      } = ee;
      return (0, Be.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Be.jsx)("div", {
          className: "KeyHeader",
          children: ie
        }), (0, Be.jsx)(fe.e, {
          noaAction: He
        })]
      })
    }

    function we(ee) {
      let {
        showingMovementControls: ie
      } = ee;
      const {
        isTouchScreen: He
      } = (0, qe.m)(["isTouchScreen"]), be = (0, Te.A)(), Me = (0, Xe.d)("OpenShop"), [Ke, Ue] = (0, ye.useState)(!1), fe = `SeenShopControls|${(0,ke.g)("connectedGame",(ee=>ee.gameNameWithVariation))}`, ze = () => (!(0, Te.n)() || null !== (0, pe.c)("OpenShop")) && !Re.i.getItem(fe) && oe.c.get("shopInfo") && !ie, Ee = () => (Ue(!0), Re.i.setItem(fe, !0), (0, Te.n)() || Je.h.yR("showShopTouchTutorial"), setTimeout((() => {
        Ue(!1)
      }), 7e3));
      (0, ye.useEffect)((() => {
        let ee;
        const ie = Je.h.subscribe("showShopTutorial", (() => {
          ze() && (ee = Ee())
        }));
        return () => {
          clearTimeout(ee), Je.h.unsubscribe(ie)
        }
      }), [ie]);
      const ge = (0, ye.useRef)();
      return (0, Fe.g)("currencyAmounts", (ee => {
        if (ze()) {
          let He = !1;
          const ye = oe.c.get("shopInfo");
          for (const be in ye) {
            for (const Me in ye[be].items) {
              var ie;
              const Ke = ye[be].items[Me];
              if (void 0 !== Ke.currency && ee[Ke.currency] && Ke.cost <= ee[Ke.currency].amount && (null === (ie = Ke.hidden) || void 0 === ie || !ie)) {
                He = !0;
                break
              }
            }
            if (He) break
          }
          He && (ge.current = Ee())
        }
      })), (0, ye.useEffect)((() => () => {
        clearTimeout(ge.current)
      }), [ie]), !Ke || be && !Me ? null : (0, Be.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: He && !be ? null : (0, Be.jsx)(Ze, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  5311: (ee, ie, He) => {
    He.d(ie, {
      d: () => pe,
      e: () => Xe
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(59),
      Ke = He(1127),
      Ue = He(5317),
      Fe = He(1956),
      Je = He(2532),
      oe = He(5319),
      Re = He(1228);
    const ke = new WeakMap;
    let qe = 0;

    function fe(ee) {
      let ie = ke.get(ee);
      return void 0 === ie && (ie = qe++, ke.set(ee, ie)), ie
    }

    function Te(ee) {
      let {
        piece: ie
      } = ee;
      return "space" === ie.kind ? (0, Re.jsx)(Re.Fragment, {
        children: ie.text
      }) : (0, Re.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${ie.delayMs}ms`
        },
        children: (0, Re.jsx)(Ue.c, {
          text: "icon" === ie.kind ? `[[${ie.icon}]]` : ie.text
        })
      })
    }

    function pe(ee) {
      let {
        display: ie
      } = ee;
      const {
        selectedLanguage: He
      } = (0, Ke.v)(), ye = (0, Me.useMemo)((() => (0, oe.e)((0, oe.g)(ie).plan.pieces)), [ie, He.code]);
      return (0, Re.jsxs)("div", {
        className: be()("Dialogue", {
          DialogueAnimateIn: !1 !== ie.animateIn
        }),
        children: [ie.speakerName && (0, Re.jsx)(Fe.e, {
          text: ie.speakerName,
          className: "DialogueSpeaker"
        }), (0, Re.jsx)("p", {
          className: "DialogueLine",
          children: ye.map(((ee, ie) => 1 === ee.length && "space" === ee[0].kind ? ee[0].text : (0, Re.jsx)("span", {
            className: "DialogueGlue",
            children: ee.map(((ee, ie) => (0, Re.jsx)(Te, {
              piece: ee
            }, ie)))
          }, ie)))
        })]
      })
    }
    const Xe = (0, Me.memo)((function() {
      const ee = (0, Je.i)("dialogue");
      return (0, Re.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: ee && (0, Re.jsx)(pe, {
          display: ee
        }, fe(ee))
      })
    }))
  },
  37501: (ee, ie, He) => {
    He.d(ie, {
      c: () => Te,
      f: () => pe
    });
    var ye = He(59),
      be = He(1432),
      Me = He(2029),
      Ke = He(37447),
      Ue = He(610),
      Fe = He(1053),
      Je = He.n(Fe),
      oe = He(1228);
    const Re = [ke()];

    function ke() {
      return {
        source: null,
        direction: null,
        Wm: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function qe(ee) {
      return Re.find((ie => null !== ie.source && ie.source === ee))
    }

    function fe(ee) {
      clearTimeout(ee.timeout), ee.source = null, ee.direction = null, ee.writtenAngle = null, ee.Wm && (ee.Wm.style.rotate = "")
    }
    const Te = (0, ye.memo)((function() {
      const [, ee] = (0, ye.useReducer)((ee => ee + 1), 0);
      return (0, be.f)("damagedByOtherPlayer", (ie => {
        let {
          Cy: He,
          direction: ye
        } = ie;
        const be = He || "nonDirectional",
          Me = function(ee) {
            var ie;
            const He = null !== (ie = qe(ee)) && void 0 !== ie ? ie : Re.find((ee => null === ee.source));
            if (He) return He;
            const ye = {
              source: null,
              direction: null,
              Wm: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Re.push(ye), ye
          }(be);
        clearTimeout(Me.timeout), Me.source = be, Me.direction = ye, Me.timeout = setTimeout((() => {
          fe(Me), ee()
        }), 800), ee()
      })), (0, Me.e)("kill", (ie => {
        let {
          killer: He,
          victim: ye
        } = ie;
        const be = He.local && qe(ye.id);
        be && (fe(be), ee())
      })), (0, ye.useEffect)((() => {
        const ee = (0, Ke.e)("turnDamageIndicators", pe);
        return () => {
          ee(), Re.forEach(fe)
        }
      }), []), (0, oe.jsx)("div", {
        className: "DirectionalDamage",
        children: Re.map(((ee, ie) => (0, oe.jsx)("div", {
          ref: ie => {
            ee.Wm = ie
          },
          className: Je()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, Ue.P)(ee.direction),
            DamageIndicatorIdle: null === ee.source
          })
        }, ie)))
      })
    }));

    function pe(ee) {
      for (const ie of Re) {
        if (null === ie.source || (0, Ue.P)(ie.direction)) continue;
        const He = ie.direction - ee;
        He !== ie.writtenAngle && (ie.writtenAngle = He, ie.Wm.style.rotate = `${He}rad`)
      }
    }
  },
  9518: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ye,
      f: () => we,
      g: () => De
    });
    var ye = He(59),
      be = He(4937),
      Me = He(1075),
      Ke = He(1432),
      Ue = He(27),
      Fe = He(3773),
      Je = He(2284),
      oe = He(1189),
      Re = He(2683),
      ke = He(1983),
      qe = He(2029),
      fe = He(1127),
      Te = He(18),
      pe = He(1620),
      Xe = He(1053),
      ze = He.n(Xe),
      Be = He(9521),
      Ee = He(9529),
      ge = He(9531),
      Oe = He(9443),
      de = He(9539),
      We = He(3406),
      te = (He(9548), He(1228));
    let Ze = null;

    function we() {
      return null !== Ze
    }

    function De() {
      return "pad" === Ze
    }

    function Pe() {
      return "inGame" === Te.e.get("gameState") && !(0, pe.o)()
    }

    function Ae(ee) {
      return (0, Ee.u)(ee, oe.n, Ee.g, Ee.i, Ee.m)
    }
    const Ye = (0, ye.memo)((function() {
      const {
        t: ee
      } = (0, fe.v)(), {
        userContext: ie
      } = (0, Me.b)(), [He, Te] = (0, ye.useState)(null), [Xe, we] = (0, ye.useState)(null), De = (0, ye.useRef)(null), Ye = (0, ye.useCallback)((ee => {
        De.current = ee, we(ee)
      }), []), Ve = (0, ye.useRef)(0), ae = (0, ye.useRef)(null), ce = (0, ye.useRef)({
        x: 0,
        y: 0
      }), [xe, Le] = (0, ye.useState)(0), Ce = (0, ye.useMemo)((() => function(ee) {
        const ie = [];
        for (let ye = 0; ye < oe.n; ye++) {
          var He;
          ie.push(null !== (He = ee[ye]) && void 0 !== He ? He : null)
        }
        return ie
      }((0, Re.i)(ie.getPlayerCosmetics().emote))), [ie, xe]);
      (0, qe.e)("cosmeticsUpdated", (ee => {
        ee.some((ee => ee.local && "emote" === ee.te)) && Le((ee => ee + 1))
      }));
      const ve = (0, ye.useRef)(!1),
        ue = (0, ye.useCallback)((function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === ee && (0, ge.g)(), ve.current = ie, ce.current = {
            x: 0,
            y: 0
          }, Ye(null), Te(ee)
        }), [Ye]),
        me = (0, ye.useCallback)((() => {
          Te(null), Ye(null), ce.current = {
            x: 0,
            y: 0
          }
        }), [Ye]),
        le = (0, ye.useCallback)((ee => {
          if (Date.now() < Ve.current) return;
          const ie = (0, Je.l)(ee),
            He = !!ie.holdUntilMove,
            ye = He ? 600 : Math.ceil(1e3 * ie.animation.animation_length / Je.e) + 200;
          Ve.current = Date.now() + ye, ae.current = ee, ke.gameBridge.send("playEmote", ee), ke.gameBridge.send("applyTemporaryThirdPerson", He ? {} : {
            durationMs: ye
          })
        }), []);
      (0, Ke.f)("requestToggleEmoteWheel", (() => {
        null === He ? Pe() && ue("click") : me()
      })), (0, Ke.f)("requestEmoteWheelHoldOpen", (() => {
        null === He && Pe() && ue((0, Be.e)() ? "hold" : "click")
      })), (0, Ke.f)("requestEmoteWheelPadOpen", (ee => {
        null !== He || !Pe() || (0, Oe.e)() || (0, de.q)() || ue("pad", ee)
      })), (0, Ke.f)("requestEmoteRepeatLast", (() => {
        if (null !== He || !Pe() || (0, Oe.e)() || (0, de.q)()) return;
        const ee = ae.current;
        null !== ee && Ce.includes(ee) ? le(ee) : ue("pad", !0)
      }));
      const Se = () => {
        const ee = De.current,
          ie = null !== ee ? Ce[ee] : null;
        null !== ie && "pad" === He && Date.now() < Ve.current || (me(), null !== ie && le(ie))
      };
      (0, Ke.f)("emoteWheelPadAim", (ee => {
        if ("pad" !== He) return;
        const ie = (0, Ee.E)(ee, oe.n, De.current);
        Ye(null !== ie && null !== Ce[ie] ? ie : null)
      })), (0, Ke.f)("requestEmoteWheelPadCommit", (ee => {
        "pad" !== He || ee && ve.current || Se()
      })), (0, Ke.f)("appManagerUpdated|activeInputDevice", (ee => {
        null !== He && "pad" === He !== ("gamepad" === ee) && me()
      })), (0, ye.useLayoutEffect)((() => (Ze = He, (0, Fe.q)("emoteWheel", "pad" === He), Ue.h.yR(Fe.l), () => {
        Ze = null, (0, Fe.q)("emoteWheel", !1), Ue.h.yR(Fe.l)
      })), [He]), (0, Ke.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === He && Se()
      })), (0, Ke.f)("requestEmoteWheelClose", (() => {
        null !== He && me()
      })), (0, Ke.f)("appManagerUpdated|gameState", (ee => {
        "inGame" !== ee && me()
      }));
      const ne = () => {
        (0, pe.o)() && me()
      };
      if ((0, Ke.f)("appManagerUpdated|openEverythingMenuName", ne), (0, Ke.f)("appManagerUpdated|openInGameMenuName", ne), (0, Ke.f)("pointerLockUpdate", (ee => {
          ee || "hold" !== He || me()
        })), (0, ye.useEffect)((() => {
          if (null === He) return;
          const ee = ee => {
            "Escape" === ee.key && (ee.stopImmediatePropagation(), ee.preventDefault(), me())
          };
          return document.addEventListener("keydown", ee, !0), () => {
            document.removeEventListener("keydown", ee, !0)
          }
        }), [He, me]), (0, be.e)(!0, "click" === He, "EmoteWheelOverlay"), (0, ye.useEffect)((() => {
          if ("hold" === He) return ke.gameBridge.send("holdEmoteWheel", !0), () => {
            ke.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [He]), (0, ye.useEffect)((() => {
          if ("hold" !== He) return;
          const ee = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            ie = Ee.s * ee,
            ye = Ee.q * ee,
            be = ee => {
              let He = ce.current.x + ee.movementX,
                be = ce.current.y + ee.movementY;
              const Me = Math.hypot(He, be);
              if (Me > ie) {
                const ee = ie / Me;
                He *= ee, be *= ee
              }
              ce.current = {
                x: He,
                y: be
              }, Ye(function(ee, ie, He, ye) {
                if (Math.hypot(ee, ie) < He) return null;
                const be = (0, Ee.x)(ee, ie, oe.n);
                return null === ye[be] ? null : be
              }(He, be, ye, Ce))
            };
          return document.addEventListener("mousemove", be), () => {
            document.removeEventListener("mousemove", be)
          }
        }), [He, Ce, Ye]), null === He) return null;
      const je = "hold" === He || "pad" === He,
        se = null !== Xe ? Ce[Xe] : null,
        Ie = null !== se ? (0, Je.l)(se).displayName : ee("emotes:pickEmote");
      return (0, te.jsx)("div", {
        className: ze()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === He
        }),
        onMouseDown: ee => {
          ee.target === ee.currentTarget && me()
        },
        children: (0, te.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * Ee.s + "rem",
            height: 2 * Ee.s + "rem"
          },
          children: [(0, te.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${Ee.p} ${Ee.p}`,
            children: [Ce.map(((ie, He) => {
              const ye = null !== ie,
                be = je && He === Xe;
              return (0, te.jsx)("path", {
                d: Ae(He),
                className: ze()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: be,
                  EmoteWheelWedgeDisabled: !ye
                }),
                onClick: ee => {
                  ee.stopPropagation(), null !== ie && (ee => {
                    me(), le(ee)
                  })(ie)
                },
                "aria-label": null !== ie ? (0, Je.l)(ie).displayName : ee("emotes:emptySlot")
              }, He)
            })), (0, te.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: Ee.g,
              cy: Ee.g,
              r: Ee.m
            }), (0, te.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: Ee.g,
              cy: Ee.g,
              r: Ee.i
            }), je && null !== Xe && (0, te.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Ae(Xe)
            })]
          }), Ce.map(((ee, ie) => {
            const He = null !== ee,
              ye = je && ie === Xe,
              be = (0, Ee.z)(ie, oe.n),
              Me = Ee.e * Math.cos(be),
              Ke = Ee.e * Math.sin(be);
            return (0, te.jsx)("div", {
              className: ze()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: ye,
                EmoteWheelSlotIconDisabled: !He
              }),
              style: {
                left: `calc(50% + ${Me}rem)`,
                top: `calc(50% + ${Ke}rem)`,
                backgroundImage: He ? `url(${(0,We.g)("emote",ee)})` : void 0
              },
              "aria-hidden": !0
            }, ie)
          })), (0, te.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Ie
          })]
        })
      })
    }))
  },
  37367: (ee, ie, He) => {
    He.d(ie, {
      d: () => pe
    });
    var ye = He(59),
      be = He(77),
      Me = He(1127),
      Ke = He(1053),
      Ue = He.n(Ke),
      Fe = He(1768),
      Je = He(1323),
      oe = He(1215),
      Re = He(1464),
      ke = He(1657),
      qe = He(1455),
      fe = He(1228);
    const Te = 14;

    function pe(ee) {
      let {
        className: ie,
        triggerElementRef: He,
        options: Ke
      } = ee;
      const {
        t: pe
      } = (0, Me.v)(), [Xe, ze] = (0, ye.useState)(!1), [Be, Ee] = (0, ye.useState)({
        x: 0,
        y: 0
      }), ge = (0, ye.useRef)(null);
      (0, ye.useEffect)((() => {
        let ee = null;
        const ie = ie => {
            ee = {
              x: ie.clientX,
              y: ie.clientY
            }
          },
          ye = ie => {
            if (null === ee || !(0, qe.d)(ee, ie)) return;
            ee = null;
            const He = Te * (0, Fe.getRemInPx)();
            Ee({
              x: Math.min(ie.clientX, window.innerWidth - He - 5),
              y: ie.clientY
            }), ze((ee => !ee))
          },
          be = ee => {
            var ie;
            null !== (ie = ge.current) && void 0 !== ie && ie.contains(ee.relatedTarget) || ze(!1)
          },
          Me = He.current;
        return Me.addEventListener("pointerdown", ie), Me.addEventListener("pointerup", ye), Me.addEventListener("mouseleave", be), () => {
          Me.removeEventListener("pointerdown", ie), Me.removeEventListener("pointerup", ye), Me.removeEventListener("mouseleave", be)
        }
      }), [He]), (0, ye.useEffect)((() => {
        if (Xe) return (0, ke.c)("pointerdown", (ee => {
          !ge.current || ge.current.contains(ee.target) || He.current.contains(ee.target) || ze(!1)
        }))
      }), [Xe, He]), (0, ye.useLayoutEffect)((() => {
        if (!Xe || !ge.current) return;
        const ee = ge.current.getBoundingClientRect().height,
          ie = Math.max(5, window.innerHeight - ee - 5);
        Be.y > ie && Ee({
          x: Be.x,
          y: ie
        })
      }), [Xe, Be]), (0, oe.t)("popup", ge, (() => {
        ze(!1)
      }), Xe);
      const Oe = Ke.filter((ee => !1 !== ee.show));
      return Xe && 0 !== Oe.length ? (0, be.createPortal)((0, fe.jsx)("div", {
        ref: ge,
        className: Ue()("FloatingActions", {
          [ie]: ie
        }),
        style: {
          width: `${Te}rem`,
          top: Be.y,
          left: Be.x
        },
        children: Oe.map((ee => {
          let {
            icon: ie,
            text: He,
            onPointerDown: ye,
            analyticsClick: be
          } = ee;
          return (0, fe.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: ee => {
              void 0 !== be && (0, Re.reportAnalyticsClick)(be), ye(ee), ze(!1), ee.stopPropagation()
            },
            children: [(0, fe.jsx)(Je.e, {
              name: ie
            }), (0, fe.jsx)("div", {
              children: pe(He)
            })]
          }, He)
        }))
      }), function() {
        var ee;
        return null !== (ee = document.querySelector(".WholeAppWrapperInner")) && void 0 !== ee ? ee : document.body
      }()) : null
    }
  },
  37524: (ee, ie, He) => {
    He.d(ie, {
      e: () => zK
    });
    var ye = He(37420),
      be = He(59),
      Me = He(2114),
      Ke = He(4922),
      Ue = He(4931),
      Fe = He(2532),
      Je = He(1983),
      oe = He(1228);

    function Re(ee) {
      let {
        className: ie,
        style: He,
        vw: ye,
        maxPx: be,
        children: Me
      } = ee;
      console.assert("number" === typeof ye && "number" === typeof be, "vw and maxPx passed to Text must be numbers");
      const Ke = window.innerWidth * (ye / 100) > be ? `${be}px` : `${ye}vw`;
      return (0, oe.jsx)("div", {
        className: ie,
        style: {
          ...He,
          fontSize: Ke
        },
        children: Me
      })
    }
    var ke = He(37529),
      qe = He(1438),
      fe = He(27),
      Te = He(2018),
      pe = He(1323);

    function Xe(ee) {
      let {
        tasks: ie,
        lastDisplayedTasks: He
      } = ee;
      return (0, oe.jsx)(oe.Fragment, {
        children: Object.keys(ie).map((ee => (0, oe.jsx)(ze, {
          task: ie[ee],
          lastDisplayedAs: He[ee]
        }, ie[ee].text)))
      })
    }

    function ze(ee) {
      let {
        task: ie,
        lastDisplayedAs: He
      } = ee;
      const [ye, Me] = (0, be.useState)(null !== He && void 0 !== He && He.progress ? He.progress / ie.goal : 0), [Ke, Ue] = (0, be.useState)(!1), [Fe, Je] = (0, be.useState)(ie.claimed || !1);
      return (0, be.useEffect)((() => {
        Me(ie.progress / ie.goal)
      }), [ie.progress, ie.goal]), Fe ? null : (0, oe.jsxs)("div", {
        className: "Task",
        children: [(0, oe.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, oe.jsx)(Re, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: ie.text
          })
        }), ie.progress < ie.goal ? (0, oe.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== ye ? (0, oe.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * ye + "%"
            }
          }) : null, (0, oe.jsx)("div", {
            className: "TaskProgressText",
            children: `${ie.progress}/${ie.goal}`
          })]
        }) : (0, oe.jsx)(qe.m, {
          className: "ClaimRewardButton",
          onClick: () => {
            Ue(!0)
          },
          children: (0, oe.jsx)(Re, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), Ke ? (0, oe.jsx)(Be, {
          task: ie,
          close: () => {
            ie.claimed = !0, Je(!0), Ue(!1)
          }
        }) : null]
      })
    }

    function Be(ee) {
      let {
        task: ie,
        close: He
      } = ee;
      const [ye, Me] = (0, be.useState)({}), [Ke, Ue] = (0, be.useState)("closed");
      (0, be.useEffect)((() => {
        let ee;
        return "animStart" === Ke && (ee = setTimeout((() => {
          Ue("animEnd")
        }), 700)), () => {
          clearTimeout(ee)
        }
      }), [Ke]), (0, ke.b)((() => {
        Je.gameBridge.send("completeTask", ie.text)
      }));
      const Re = (0, Fe.i)("currencyAmounts");
      return (0, oe.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === Ke)
            if (0 === ie.rewards.length) He(), Je.gameBridge.send("completeTask", ie.text);
            else {
              const ee = {
                ...Te.c.get("currencyAmounts")
              };
              for (const ie in ye) ee[ie] = {
                ...ee[ie],
                amount: ee[ie].amount + ye[ie]
              };
              Te.c.apply({
                currencyAmounts: ee
              }), Ue("closed")
            }
          else "closed" === Ke && (Me(ie.rewards.pop()), Ue("animStart"))
        },
        children: [(0, oe.jsx)("img", {
          className: "Chest",
          alt: "closed" !== Ke ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==Ke?"open":"closed"}.png`
        }), (0, oe.jsx)("div", {
          className: "Rewards",
          children: "closed" !== Ke ? Object.keys(ye).map((ee => {
            const ie = null === Re || void 0 === Re ? void 0 : Re[ee];
            return !ie || ie.hidden ? null : (0, oe.jsxs)("div", {
              className: "Reward",
              children: [(0, oe.jsx)(pe.e, {
                name: ie.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: ie.iconColour
                }
              }), (0, oe.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === Ke ? 0 : ye[ee]
              })]
            }, ee)
          })) : null
        }), "animStart" === Ke ? (0, oe.jsx)(Ee, {}) : null, (0, oe.jsx)("div", {
          className: "ChestsLeft",
          children: ie.rewards.length
        })]
      })
    }

    function Ee() {
      const [ee, ie] = (0, be.useState)(0);
      (0, be.useEffect)((() => {
        ie(1)
      }), []);
      return (0, oe.jsx)(oe.Fragment, {
        children: Array.from({
          length: 40
        }).map(((ie, He) => (0, oe.jsx)(pe.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * ee * Math.cos(He / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * ee * Math.sin(He / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === ee ? 1 : 0
          }
        }, He)))
      })
    }
    fe.h.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const ee = new Image,
          ie = new Image;
        ee.src = "/textures/miscImages/Treasure Chest open.png", ie.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var ge = He(3442),
      Oe = He(1075),
      de = He(1956),
      We = He(1432),
      te = He(347),
      Ze = He(2029),
      we = He(1320);

    function De(ee) {
      var ie, He;
      let {
        byId: ye,
        localId: be
      } = ee;
      return null === be ? null : null !== (ie = null === (He = ye[be]) || void 0 === He ? void 0 : He.name) && void 0 !== ie ? ie : null
    }

    function Pe(ee) {
      let {
        lbStats: ie,
        storedState: He = {}
      } = ee;
      const {
        userContext: ye
      } = (0, Oe.b)(), Me = (0, Ze.g)("players", De), [Ke, Ue] = (0, be.useState)(He.selectedCat || (null === ie || void 0 === ie ? void 0 : ie[0]) || null), [Fe, Re] = (0, be.useState)(He.selectedTimeframe || "Today"), [ke, qe] = (0, be.useState)(null);
      (0, be.useEffect)((() => {
        null === Ke && null !== ie && ie.length > 0 && Ue(ie[0])
      }), [ie, Ke]);
      const [fe, Te] = (0, be.useState)(He.seeingTop || !1), [pe, Xe] = (0, be.useState)(!1), ze = (0, be.useCallback)((() => {
        null !== Ke && null !== Fe && (Je.gameBridge.send("requestLeaderboard", {
          category: Ke.value,
          timeframe: Fe,
          seeTop: fe
        }), Ee(!0), Ve && ae(null))
      }), [Ke, Fe, He, fe]);
      (0, be.useEffect)((() => {
        ze(), He.selectedCat = Ke, He.selectedTimeframe = Fe, He.seeingTop = fe
      }), [Ke, Fe, He, fe, ze]), (0, be.useEffect)((() => {
        if ((null === ke || void 0 === ke ? void 0 : ke.length) > 0)
          if (fe) fe && Xe(null === Pe(ke));
          else {
            for (const ee of ke)
              if (1 === ee.place) return void Xe(!1);
            Xe(!0)
          }
      }), [ke, fe]), (0, We.f)("leaderboardResponse", (ee => {
        let {
          category: He,
          timeframe: ye,
          data: be
        } = ee;
        for (let Me = 0; Me < ie; Me++)
          if (ie[Me].value === He) {
            Ue(ie[Me]);
            break
          } Re(ye), qe(be), Ee(!1)
      }));
      const [Be, Ee] = (0, be.useState)(!0);

      function Pe(ee) {
        const ie = De(Je.gameBridge.latest("players"));
        for (let He = 0; He < ee.length; He++)
          if (ee[He].name === ie) return ee[He].place;
        return null
      }
      const [Ae, Ye] = (0, be.useState)(!1), [Ve, ae] = (0, be.useState)(null);
      (0, be.useEffect)((() => {
        if (ke && !Ae) {
          const ee = Pe(ke);
          ee < (He.lastSeenPlayerPlace || 0) && ae(He.lastSeenPlayerPlace - ee), Ye(!0)
        }
      }), [ke, He, Ae]), (0, be.useEffect)((() => () => {
        ke && (He.lastSeenPlayerPlace = Pe(ke))
      }), [ke, He]);
      const ce = (0, be.useRef)(null),
        [xe, Le] = (0, be.useState)(void 0);
      return (0, be.useEffect)((() => {
        var ee, ie;
        xe !== (null === (ee = ce.current) || void 0 === ee ? void 0 : ee.offsetHeight) && Le(null === (ie = ce.current) || void 0 === ie ? void 0 : ie.offsetHeight)
      })), ye.isLoggedIn() ? (0, oe.jsxs)(oe.Fragment, {
        children: [(0, oe.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, oe.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, oe.jsx)(ge.e, {
              options: ie.map((ee => ({
                label: ee.label,
                value: ee.value
              }))),
              value: Ke,
              onChange: ee => {
                Ue(ee)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, oe.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, oe.jsx)(ge.e, {
              options: te.Uc.map((ee => ({
                value: ee,
                label: ee,
                className: "LBDropdownMenuItem"
              }))),
              value: Fe,
              onChange: ee => {
                Re(ee.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), pe ? (0, oe.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              Te(!fe)
            },
            children: fe ? "See Yourself" : "See Top"
          }) : null]
        }), (0, oe.jsx)("div", {
          className: "LBTableWrapper",
          children: Be ? (0, oe.jsx)("div", {
            className: "LoaderContainer",
            children: (0, oe.jsx)(we.b, {})
          }) : null === Ve ? (0, oe.jsx)(oe.Fragment, {
            children: (0, oe.jsxs)("table", {
              className: "LBTable",
              children: [(0, oe.jsx)("thead", {
                className: "LBTableTHead",
                ref: ce,
                children: (0, oe.jsxs)("tr", {
                  children: [(0, oe.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, oe.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, oe.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: Ke.label.toUpperCase()
                  })]
                })
              }), (0, oe.jsx)("tbody", {
                children: ke.map((ee => (0, oe.jsxs)("tr", {
                  className: "LBTableTR " + (ee.name === Me ? "LBTableTRYou" : ""),
                  children: [(0, oe.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${ee.place}`
                  }), (0, oe.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, oe.jsx)(de.e, {
                      text: [{
                        entityName: ee.name
                      }]
                    })
                  }), (0, oe.jsx)("td", {
                    className: "LBTableTD",
                    children: ee.stat
                  })]
                }, ee.name)))
              })]
            })
          }) : (0, oe.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              ae(null)
            },
            children: (0, oe.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, oe.jsx)("div", {
                className: "TriangleUp"
              }), (0, oe.jsx)("div", {
                className: "LBIncreaseText",
                children: `${Ve} Place${Ve>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, oe.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, oe.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, oe.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var Ae = He(3416),
      Ye = He(97),
      Ve = He(35),
      ae = He(3771);
    const ce = (0, be.memo)((function(ee) {
      let {
        show: ie,
        onClose: He
      } = ee;
      (0, Ae.b)();
      const ye = (0, Fe.i)("_tasks"),
        Me = (0, Fe.i)("_availableLeaderboards"),
        [Je, Re] = (0, be.useState)({});
      ye && Object.keys(ye).length > 0 && 0 === Object.keys(Je).length && Re(ye);
      const [ke] = (0, be.useState)({
        tasks: {},
        leaderboard: {}
      }), qe = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!ye && Object.keys(ye).length > 0,
          content: (0, oe.jsx)(Xe, {
            tasks: ye,
            lastDisplayedTasks: Je
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === Me || void 0 === Me ? void 0 : Me.length) > 0,
          content: (0, oe.jsx)(Pe, {
            lbStats: Me,
            storedState: ke.leaderboard
          })
        }
      };

      function fe() {
        for (const ee in qe)
          if (qe[ee].getIsDefined()) return ee;
        return null
      }
      const [Te, pe] = (0, be.useState)(fe());

      function ze() {
        Re({
          ...ye
        }), He()
      }(0, be.useEffect)((() => {
        Te || pe(fe())
      }), [fe()]), (0, Ue.c)(!0, Te && ie), (0, be.useEffect)((() => {
        ie && !Te && (console.log("CLOSE"), ze())
      }), [ie, Te]);
      const [Be, Ee] = (0, be.useState)(!1);
      return (0, be.useEffect)((() => {
        ie && Te && !Be && Ee(!0)
      }), [ie, Be, Te]), (0, be.useEffect)((() => {
        !Be && ye && "tasks" !== Te && pe("tasks")
      }), [Be, ye, Te]), (0, oe.jsx)(oe.Fragment, {
        children: Te ? (0, oe.jsx)(ae.d, {
          className: "RetentionFeaturesWrapper",
          show: ie,
          children: (0, oe.jsxs)(Ke.e, {
            close: ze,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, oe.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, oe.jsx)(Le, {}), (0, oe.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, oe.jsx)(xe, {
                  setCategory: pe,
                  menuCategories: qe,
                  selectedCat: Te
                }), (0, oe.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: qe[Te].content
                })]
              })]
            }), (0, oe.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: Ye.featureFlags.useDiscord && (0, oe.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, oe.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, oe.jsx)(Ce, {
                    tasks: ye
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function xe(ee) {
      let {
        selectedCat: ie,
        setCategory: He,
        menuCategories: ye
      } = ee;
      return (0, oe.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(ye).map((ee => ye[ee].getIsDefined() ? (0, oe.jsx)("div", {
          className: "MenuHeaderCategory " + (ee === ie ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            He(ee)
          },
          children: ye[ee].Title
        }, ee) : null))
      })
    }

    function Le() {
      const ee = (0, Fe.i)("currencyAmounts");
      return (0, oe.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== ee && void 0 !== ee ? ee : {}).map((ie => {
          const He = ee[ie];
          return He.hidden ? null : (0, oe.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, oe.jsx)(pe.e, {
              name: He.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: He.iconColour
              }
            }), (0, oe.jsx)("div", {
              className: "UiCurrencyAmount",
              children: He.amount
            })]
          }, ie)
        }))
      })
    }

    function Ce(ee) {
      let {
        tasks: ie
      } = ee;
      return (0, oe.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, oe.jsx)(pe.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            Ve.i.setItem("DiscordPressed", !0), Je.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in ie && fe.h.yR("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, oe.jsx)(Me.e, {})]
      })
    }
    var ve = He(18),
      ue = He(1620),
      me = He(37354),
      le = He(34767),
      Se = He(5018),
      ne = He(153),
      je = He(1160),
      se = He(1351),
      Ie = He(2817),
      he = He(1127),
      Ne = He(1625),
      Ge = He(2482),
      re = He(2434),
      Qe = He(1913),
      ei = He(2086),
      ii = He(1205),
      Hi = He(1464),
      yi = He(37535),
      bi = He(37537),
      Mi = He(37540),
      Ki = He(37547),
      Ui = He(37550),
      Fi = He(2874);

    function Ji(ee) {
      let {
        playersHere: ie,
        exclude: He,
        lE: ye
      } = ee;
      const {
        t: Me
      } = (0, he.v)(), Ke = (0, Fi.l)(Fi.g), [Ue, Fe] = (0, be.useState)([]), Je = [], Re = (ee, ie) => {
        const ye = [...He, ...Je.map((ee => ee.player.name))];
        Je.length < 3 && !(0, bi.h)(ye, ee.name) && Je.push({
          player: ee,
          status: ie
        })
      };
      for (const be of ie) Re((0, Ui.k)(be.name, be.cosmetics, be.ranks), Me("worldSocial:inThisWorld"));
      if ("loaded" === Ke.state.status)
        for (const be of Ke.state.recentPlayers) be.preview.name && !be.preview.isError && Re({
          ...be.preview,
          location: {
            status: "offline"
          }
        }, Me("worldSocial:playedWithYou"));
      const ke = ee => {
        Fe((ie => [...ie, ee])), ye(ee).finally((() => {
          Fe((ie => ie.filter((ie => ie !== ee))))
        }))
      };
      return (0, oe.jsx)(oe.Fragment, {
        children: Je.map(((ee, ie) => {
          let {
            player: He,
            status: ye
          } = ee;
          return (0, oe.jsx)(Ui.g, {
            zIndex: Je.length - ie,
            player: He,
            status: ye,
            onSendFriendRequest: () => {
              ke(He.name)
            },
            actions: (0, oe.jsx)(se.g, {
              tooltipInner: (0, oe.jsx)(oe.Fragment, {
                children: Me("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, oe.jsx)(qe.c, {
                className: "FriendRequestButton",
                disabled: Ue.includes(He.name),
                ariaLabel: `${Me("recentPlayers:addFriend")} ${He.name}`,
                onClick: () => {
                  ke(He.name)
                },
                children: (0, oe.jsx)(pe.e, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${He.name}`)
        }))
      })
    }
    var oi = He(37563),
      Ri = He(37570),
      ki = He(1169),
      qi = He(1488),
      fi = He(4693),
      Ti = He(272),
      Xi = He(5e3);
    const zi = ["auto", "auto_existing"];

    function Bi(ee) {
      return zi.includes(ee)
    }

    function Ei(ee, ie) {
      const He = (0, ki.ub)(ee);
      return null !== ie && (0, ki.ub)(ie) === He || (0, Xi.c)().some((ee => (0, ki.ub)(ee.name) === He))
    }
    const gi = new Set;

    function Oi(ee) {
      return `worldSocialSeen:${ee}`
    }

    function di(ee) {
      return !ee || gi.has(ee) || !0 === Ve.i.getItem(Oi(ee))
    }

    function Wi(ee) {
      ee && !gi.has(ee) && (gi.add(ee), Ve.i.setItem(Oi(ee), !0))
    }
    var ti = He(2542),
      Zi = He(2545);

    function wi(ee) {
      let {
        show: ie,
        onClose: He,
        opener: ye
      } = ee;
      const {
        lobbyName: Me,
        shownLobbyName: Ue
      } = (0, Ze.k)("connectedGame");
      return (0, be.useEffect)((() => {
        ie && (0, Hi.reportAnalyticsClick)({
          id: "world_social.open",
          value: ye
        })
      }), [ie]), (0, oe.jsx)(Ke.e, {
        show: ie && null !== Me,
        close: He,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== ye,
        children: ie && null !== Me && (0, oe.jsx)(Di, {
          lobbyName: Me,
          worldCode: null !== Ue && void 0 !== Ue ? Ue : Me,
          onClose: He
        }, Me)
      })
    }

    function Di(ee) {
      var ie;
      let {
        lobbyName: He,
        worldCode: ye,
        onClose: Me
      } = ee;
      const {
        t: Ke
      } = (0, he.v)(), Ue = (0, be.useRef)(null), {
        settings: Fe,
        loading: Je,
        answered: Re,
        change: ke,
        retry: fe
      } = (0, yi.h)(He), Te = (0, Ne.k)(), Xe = (0, Ze.k)("players"), ze = (0, Ze.k)("hiddenPlayerNames"), [Be, Ee] = (0, be.useState)([]), [ge, de] = (0, be.useState)([]), [We, te] = (0, be.useState)(!1), De = (0, ti.d)(), Pe = (0, be.useMemo)((() => {
        var ee, ie;
        const He = null === Xe.localId ? null : null !== (ee = null === (ie = Xe.byId[Xe.localId]) || void 0 === ie ? void 0 : ie.name) && void 0 !== ee ? ee : null;
        return Xe.ids.flatMap((ee => {
          const ie = Xe.byId[ee];
          return null !== ie && void 0 !== ie && ie.name && ie.name !== He ? [{
            name: ie.name,
            cosmetics: ie.cosmetics,
            ranks: ie.ranks
          }] : []
        }))
      }), [Xe]), Ae = (0, be.useMemo)((() => (0, bi.g)(Te.friends, He, Pe.map((ee => ee.name)))), [Te.friends, He, Pe]), Ve = Ye.featureFlags.canSeeRealPlayerNames ? Pe.filter((ee => null === (0, ii.d)(ee.name, ze))) : [], ae = null !== Fe && void 0 !== Fe && Fe.canManage ? Fe : null, ce = null !== ae, xe = null !== (ie = null === Fe || void 0 === Fe ? void 0 : Fe.visibility) && void 0 !== ie ? ie : null, Le = "whitelist" === (null === ae || void 0 === ae ? void 0 : ae.visibility), Ce = "private" === xe || "whitelist" === xe && !ce, {
        userContext: ve
      } = (0, Oe.b)();
      (0, be.useEffect)((() => {
        ce && Ei(He, ve.getPersonalWorldLobbyName()) && Wi(ve.whamm)
      }), [ce, He, ve]);
      const ue = Ce ? Ke("whitelist" === xe ? "socialBar:inviteWorldManagersOnly" : ce ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        le = null === ue;
      (0, be.useEffect)((() => Ce ? void 0 : Qe.f.quietFriendAdded()), [Ce]), (0, be.useEffect)((() => Qe.f.quietFriendRequests()), []);
      const Fi = (0, be.useRef)(!1);
      (0, be.useEffect)((() => {
        const ee = Ue.current,
          ie = !Fi.current;
        Fi.current = !0;
        const He = null === document.activeElement || document.activeElement === document.body;
        null !== ee && void 0 !== ee && ee.contains(document.activeElement) || !ie && !He || (0, me.h)() || null === ee || void 0 === ee || ee.focus({
          preventScroll: !0
        })
      }), [le]), (0, be.useEffect)((() => {
        const ee = ee => {
          "Escape" !== ee.key || null !== document.activeElement && document.activeElement !== document.body || Me()
        };
        return document.addEventListener("keydown", ee), () => {
          document.removeEventListener("keydown", ee)
        }
      }), [Me]);
      const ki = null === Fe && !Re,
        qi = (Je || Te.loading) && 0 === Te.friends.length,
        fi = Te.friends.flatMap((ee => ee.name ? [ee.name] : [])),
        Ti = Be.filter((ee => !(0, bi.h)(fi, ee))),
        Xi = Ae.length + 3,
        zi = Ti.length + Xi,
        Bi = We ? Te.requests : Te.requests.slice(0, 1),
        gi = async function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const He of (0, bi.i)(ee, Se.A)) {
            if (!await ke({
                whitelistAdd: He
              }, (ee => (0, bi.o)(ee, He, !0)), {
                quiet: ie
              })) return !1
          }
          return !0
        }, Oi = ee => {
          if (Le && ae) return {
            on: (0, bi.h)(ae.whitelist, ee),
            onChange: ie => {
              (0, Hi.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: ie ? "on" : "off"
              }), ke(ie ? {
                whitelistAdd: [ee]
              } : {
                whitelistRemove: ee
              }, (He => (0, bi.o)(He, [ee], ie)))
            }
          }
        }, di = async (ee, ie) => {
          (0, Hi.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: ie
          });
          const He = await (0, re.f)(ee, "world_social");
          return (0, re.b)(He, ee, {
            announceSent: !1
          }), "failed" !== He.kind && ("sent" === He.kind && Ee((ie => (0, bi.h)(ie, ee) ? ie : [...ie, ee])), Le && await gi([ee]), !0)
        };
      return (0, oe.jsxs)("div", {
        ref: Ue,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: ee => {
          ee.target === ee.currentTarget && " " === ee.key && ee.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, oe.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, oe.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: Ke("worldSocial:title")
          }), (0, oe.jsx)(qe.i, {
            className: "WorldSocialClose",
            onClick: Me
          })]
        }), ki && (0, oe.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, oe.jsx)(we.b, {})
        }), !ki && (0, oe.jsxs)(oe.Fragment, {
          children: [(0, oe.jsx)(Mi.e, {
            worldCode: ye,
            message: ue
          }), null === Fe && !Je && (0, oe.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: fe,
            children: Ke("worldSocial:loadFailed")
          }), ce && null !== xe && (0, oe.jsx)(Ki.b, {
            visibility: xe,
            onPick: ee => {
              (async ee => {
                if (ee === xe) return;
                (0, Hi.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: ee
                });
                const ie = [...(0, Ri.c)(He), ...ge],
                  ye = "whitelist" === ee && Fe ? (0, bi.d)(Ae, ie, Fe.whitelist) : [];
                await ke({
                  setVisibility: ee
                }, (ie => ({
                  ...ie,
                  visibility: ee
                }))) && await gi(ye)
              })(ee)
            }
          }), Te.requests.length > 0 && (0, oe.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, oe.jsx)(Ie.c, {
              label: (0, oe.jsxs)(oe.Fragment, {
                children: [(0, oe.jsx)(pe.e, {
                  name: ei.g
                }), " ", Ke("socialBar:requests")]
              }),
              meta: (0, oe.jsxs)(oe.Fragment, {
                children: [Te.requests.length, Te.requests.length === je.m && (0, oe.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: Ke("socialBar:limitReached")
                }), !We && Te.requests.length > 1 && (0, oe.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    te(!0)
                  },
                  children: Ke("worldSocial:moreRequests", {
                    count: Te.requests.length - 1
                  })
                })]
              })
            }), (0, oe.jsx)("div", {
              className: "PlayerRows",
              children: Bi.map(((ee, ie) => (0, oe.jsx)(Ui.g, {
                zIndex: Bi.length - ie,
                player: ee,
                actions: (0, oe.jsxs)(oe.Fragment, {
                  children: [(0, oe.jsx)(se.g, {
                    tooltipInner: (0, oe.jsx)(oe.Fragment, {
                      children: Ke("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, oe.jsx)(qe.c, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Ke("general:accept")} ${ee.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, re.c)(ee.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, oe.jsx)(pe.e, {
                        name: "check"
                      })
                    })
                  }), (0, oe.jsx)(se.g, {
                    tooltipInner: (0, oe.jsx)(oe.Fragment, {
                      children: Ke("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, oe.jsx)(qe.e, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Ke("general:decline")} ${ee.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, re.c)(ee.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, oe.jsx)(pe.e, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${ee.name}`)))
            })]
          }), (0, oe.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, oe.jsx)(Ie.c, {
              label: (0, oe.jsxs)(oe.Fragment, {
                children: [(0, oe.jsx)(pe.e, {
                  name: ei.c
                }), " ", Ke("socialBar:friends")]
              }),
              meta: Te.loaded && !Ce ? Te.friends.length : void 0
            }), (0, oe.jsx)(oi.c, {
              label: Ke("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: Ke("worldSocial:addFriendPlaceholder"),
              onSubmit: async ee => await di(ee, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), qi && (0, oe.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, oe.jsx)(we.b, {})
            }), !qi && (0, oe.jsxs)(oe.Fragment, {
              children: [(0, oe.jsxs)("div", {
                className: "PlayerRows",
                children: [Ti.map(((ee, ie) => (0, oe.jsx)(Ui.g, {
                  zIndex: zi - ie,
                  player: (0, Ui.k)(ee, null),
                  status: Ke("worldSocial:requestSent"),
                  YR: Oi(ee)
                }, `request:${ee}`))), !Ce && Ae.map(((ee, ie) => (0, oe.jsx)(Ui.d, {
                  zIndex: Xi - ie,
                  row: ee,
                  YR: Oi(ee.friend.name),
                  canInvite: (0, bi.c)(Fe) && "here" !== ee.place,
                  invited: ge.includes(ee.friend.name),
                  onInvite: () => {
                    (async ee => {
                      (0, Hi.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const ie = () => {
                        de((ie => ie.filter((ie => ie !== ee))))
                      };
                      de((ie => [...ie, ee]));
                      const ye = (0, bi.l)(Fe, ee);
                      if ("none" !== ye) {
                        const He = gi([ee], "quiet" === ye);
                        if ("required" === ye && !await He) return void ie()
                      }
                      await (0, Ge.k)(ee, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, Ri.d)(He, ee), setTimeout(ie, ne.q)) : ie()
                    })(ee.friend.name)
                  }
                }, ee.friend.name))), Te.loaded && 0 === Te.friends.length && (0, oe.jsx)(Ji, {
                  playersHere: Ve,
                  exclude: Be,
                  lE: ee => di(ee, "suggestion")
                })]
              }), Le && Te.loaded && 0 === Te.friends.length && 0 === Ti.length && (0, oe.jsx)("div", {
                className: "WorldSocialEmpty",
                children: Ke("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), De && (0, oe.jsxs)(qe.M, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, Zi.h)({
              page: "players",
              source: "invite_popup"
            }), Me()
          },
          children: [(0, oe.jsx)(pe.e, {
            name: "users-gear"
          }), " ", Ke("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var Pi = He(2572),
      Ai = He(2535);

    function Yi(ee) {
      let {
        show: ie,
        onClose: He,
        option: ye
      } = ee;
      const Me = (0, Ze.g)("connectedGame", (ee => (0, Pi.c)(ee) ? ee.lobbyName : null));
      return function(ee) {
        const {
          gameEntrySource: ie,
          loadingOverlayVisible: He
        } = (0, ve.m)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: ye
        } = (0, Oe.b)(), Me = (0, Ze.k)("localPlayerAlive"), Ke = (0, Ze.g)("players", (ee => null !== ee.localId && void 0 !== ee.byId[ee.localId])), Ue = (0, Ai.f)(), Fe = (0, be.useRef)(null), Je = (0, be.useRef)(null), oe = "worldCreation" === ie, Re = ye.whamm, ke = ye.getPersonalWorldLobbyName();
        (0, be.useEffect)((() => {
          var ie;
          null !== ee && (null === (ie = Je.current) || void 0 === ie ? void 0 : ie.lobbyName) !== ee && null !== xi(ee, oe, Re, ke) && (Je.current = (0, yi.e)(ee))
        }), [oe, ee, Re, ke]), (0, be.useEffect)((() => {
          if (null !== ee && (!He && Me && Ke)) return Ue.whenShown((() => {
            var ie;
            const He = Fe.current === ee ? null : xi(ee, oe, Re, ke);
            if (null === He) return;
            const ye = (null === (ie = Je.current) || void 0 === ie ? void 0 : ie.lobbyName) === ee ? Je.current : (0, yi.e)(ee);
            Je.current = null, Fe.current = ee,
              function(ee, ie, He, ye) {
                const {
                  lobbyName: be
                } = ee, Me = () => {
                  ! function(ee, ie) {
                    if (!mi()) return void ie(!0);
                    const He = performance.now() + vi;
                    let ye = 0;
                    const be = () => {
                      ye = mi() ? 0 : ye + 1, ye >= 2 ? ie(!0) : !ui(ee) || performance.now() > He ? ie(!1) : setTimeout(be, Ci)
                    };
                    setTimeout(be, Ci)
                  }(be, (Me => {
                    ye();
                    const Ke = "auto_existing" === ie && di(He);
                    Me && ui(be) && !ai(be) && !Ke && (Li(ee) ? ci(be) : (ci(be), Wi(He), function(ee) {
                      const ie = Ti.c.world_social_popup_v1;
                      return (0, Ti.f)("world_social_popup_v1"), (0, Hi.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${ie}:${(0,fi.d)()}:${ee}`
                      }), (0, qi.flushClientAnalyticsEvents)(), "auto_open" === ie
                    }(ie) && ((0, yi.d)(ee), fe.h.yR("toggleMenu", `inviteLink|${ie}`), "inviteLink" !== ve.e.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === ie && !Li(ee)) return void Me();
                ee.response.then((ee => {
                  if (!("error" in ee)) return ee.settings.canManage ? void Me() : (ci(be), void ye());
                  ye()
                }))
              }(ye, He, Re, (() => {
                Fe.current === ee && (Fe.current = null)
              }))
          }))
        }), [Ue, oe, He, ee, Me, Ke, Re, ke])
      }(Me), (0, be.useEffect)((() => {
        ie && null !== Me && ci(Me)
      }), [ie, Me]), null !== Me ? (0, oe.jsx)(wi, {
        show: ie,
        onClose: He,
        opener: Bi(ye) ? ye : "icon"
      }) : (0, oe.jsx)(le.b, {
        show: ie,
        onClose: He
      })
    }
    const Vi = new Set;

    function ai(ee) {
      return Vi.has(ee) || !!Ve.m.getItem(`worldSocialShown:${ee}`)
    }

    function ci(ee) {
      Vi.add(ee), Ve.m.setItem(`worldSocialShown:${ee}`, !0)
    }

    function xi(ee, ie, He, ye) {
      return ai(ee) ? null : function(ee) {
        let {
          justMade: ie,
          playerId: He,
          lobbyName: ye,
          personalWorld: be
        } = ee;
        return ie ? "auto" : !di(He) && Ei(ye, be) ? "auto_existing" : null
      }({
        justMade: ie,
        playerId: He,
        lobbyName: ee,
        personalWorld: ye
      })
    }

    function Li(ee) {
      let {
        answer: ie
      } = ee;
      return null !== ie && "settings" in ie && !ie.settings.canManage
    }
    const Ci = 500,
      vi = 3e4;

    function ui(ee) {
      return "inGame" === ve.e.get("gameState") && Je.gameBridge.latest("connectedGame").lobbyName === ee
    }

    function mi() {
      return (0, me.h)() || ve.e.get("loadingOverlayVisible") || (0, ue.o)()
    }
    var li = He(37068),
      Si = He(3473),
      ni = He(2046),
      ji = He(3465);

    function si(ee, ie, He) {
      return ji.c.overridesTexture(ee) ? ji.c.getTexture(ee, ie).url : He
    }
    var Ii = He(10722);
    const Ni = (ee, ie) => {
        (0, be.useEffect)((() => {
          setTimeout((() => {
            ee && ee.current && ee.current.focus()
          }), 1)
        }), [ie])
      },
      Gi = (0, be.memo)((function(ee) {
        let {
          isInputActive: ie,
          onClose: He,
          onChange: ye,
          textAreaRef: be,
          fontSize: Me,
          lineHeight: Ke,
          currText: Ue
        } = ee;
        return (0, oe.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, oe.jsx)("img", {
            src: si("board_full", Si.j.BLOCK, Ii),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, oe.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: Ue,
            ref: be,
            style: {
              fontSize: `${Me}rem`,
              lineHeight: `${Ke}rem`
            },
            onKeyDown: ee => {
              var ie;
              "Escape" !== ee.key && (ee.stopPropagation(), "Tab" === ee.key && function(ee) {
                ee.preventDefault();
                const ie = ee.target,
                  {
                    value: He
                  } = ie;
                let ye = ie.selectionStart,
                  be = ie.selectionEnd,
                  Me = He.slice(ye, be);
                if (!Me.includes("\n") && !ee.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; ye > 0 && "\n" !== He[ye - 1];) ye--;
                const Ke = "\n" === He[be - 1];
                Ke && be--;
                Me = He.slice(ye, be);
                const Ue = Me.split("\n").map((ie => ee.shiftKey ? ie.replace(/^\t/, "") : "\t" + ie)).join("\n");
                if (ee.shiftKey && He.slice(ye, be) === Ue) return;
                let {
                  selectionStart: Fe
                } = ie;
                ie.setSelectionRange(ye, be), Fe > ye && (!ee.shiftKey || "\t" === Me[0]) && (Fe += ee.shiftKey ? -1 : 1);
                be = ye + Ue.length + (Ke ? 1 : 0), document.execCommand("insertText", !1, Ue), ie.setSelectionRange(Fe, be)
              }(ee), /^F\d+$/i.test(ee.code) && null !== (ie = ni.q.OpenCodeEditor) && void 0 !== ie && ie.includes(ee.code) && He())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: ye
          })]
        })
      }));

    function ri(ee) {
      return 1.3 * ee
    }
    var Qi = He(1677);
    const eH = (0, be.memo)((function(ee) {
        let {
          show: ie,
          onOpen: He,
          onClose: ye
        } = ee;
        const [Me, Ue] = (0, be.useState)(null), [Fe, Re] = (0, be.useState)(""), [ke, fe] = (0, be.useState)(0), [Te, pe] = (0, be.useState)(null), [Xe, ze] = (0, be.useState)({
          text: "",
          textSize: 0
        }), Be = (ee, ie) => Te ? (0, li.n)(ee, ie, Te.width, Te.height) : (0, li.h)(ee, ie), Ee = ee => {
          Re(Be(Fe, ee)), fe(ee), Ve.i.setItem("lastBoardTextSize", ee)
        }, ge = () => {
          ye(), Te && Fe === Xe.text && ke === Xe.textSize || Je.gameBridge.send("writeOnBoard", {
            pos: Me,
            text: Fe,
            textSize: ke
          })
        };
        (0, Ze.e)("boardEditRequested", (ee => {
          var be, Me;
          if (!Ye.featureFlags.canSeePlayerWrittenText) return;
          if (null === ee) return Ue(null), void(ie && ye());
          const {
            pos: Ke,
            noticeboardSpan: Fe,
            text: Je
          } = ee;
          Ue(Ke), pe(Fe), Re(Je);
          const oe = null !== (be = null !== (Me = ee.textSize) && void 0 !== Me ? Me : Ve.i.getItem("lastBoardTextSize")) && void 0 !== be ? be : 0;
          fe(oe), ze({
            text: Je,
            textSize: oe
          }), Ve.i.setItem("lastBoardTextSize", oe), He()
        }));
        const Oe = (0, be.useRef)(null);
        Ni(Oe, ie), (0, Qi.n)(Oe, {
          kind: "sign",
          submit: ge
        });
        const de = function(ee, ie) {
            const He = li.d[ee];
            if (!ie) return He.uiFontSize;
            const {
              numLines: ye,
              charsPerLine: be
            } = (0, li.y)(ie.width, ie.height, ee);
            return He.uiFontSize * Math.min(He.charsPerLine / be, He.numLines / ye)
          }(ke, Te),
          We = ri(de);
        return (0, oe.jsxs)(Ke.e, {
          className: "WriteOnBoardBg",
          close: ge,
          escDoesExit: !0,
          show: ie,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, oe.jsx)(Gi, {
            isInputActive: () => ie,
            onClose: ge,
            onChange: ee => {
              Re(Be(ee.target.value, ke))
            },
            textAreaRef: Oe,
            fontSize: de,
            lineHeight: We,
            currText: Fe
          }), (0, oe.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, oe.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, oe.jsx)(qe.c, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Ee(0)
              },
              disabled: 0 === ke,
              children: "Small"
            }), (0, oe.jsx)(qe.c, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Ee(1)
              },
              disabled: 1 === ke,
              children: "Medium"
            }), (0, oe.jsx)(qe.c, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Ee(2)
              },
              disabled: 2 === ke,
              children: "Large"
            })]
          })]
        })
      })),
      iH = (0, be.memo)((function(ee) {
        let {
          show: ie,
          onOpen: He,
          onClose: ye
        } = ee;
        const [Me, Ue] = (0, be.useState)(""), Fe = () => {
          ye(), Je.gameBridge.send("writeNameTag", Me)
        };
        (0, We.f)("EditNameTag", (ee => {
          Ye.featureFlags.canSeePlayerWrittenText && null !== ee && (Ue(ee), He())
        }));
        const Re = (0, be.useRef)(null);
        Ni(Re, ie), (0, Qi.n)(Re, {
          kind: "nameTag",
          submit: Fe
        });
        const ke = li.G.nameTag.uiFontSize,
          fe = ri(ke);
        return (0, oe.jsxs)(Ke.e, {
          className: "WriteOnBoardBg",
          close: Fe,
          escDoesExit: !0,
          show: ie,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, oe.jsx)("div", {
            className: "NameTagTrim",
            children: (0, oe.jsx)(Gi, {
              isInputActive: () => ie,
              onClose: Fe,
              onChange: ee => {
                const ie = ee.target.value.replaceAll("\n", "");
                Ue((0, li.r)(ie, "nameTag"))
              },
              textAreaRef: Re,
              fontSize: ke,
              lineHeight: fe,
              currText: Me
            })
          }), (0, oe.jsx)(qe.c, {
            onClick: Fe,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var HH = He(18888);
    const yH = (0, be.memo)((function(ee) {
      let {
        show: ie,
        onOpen: He,
        onClose: ye
      } = ee;
      const [Me, Ue] = (0, be.useState)(""), [Fe, Re] = (0, be.useState)(0), [ke, fe] = (0, be.useState)(!1), [Te, pe] = (0, be.useState)(["", "", "", "", "", "", "", "", "", ""]), [Xe, ze] = (0, be.useState)("Title"), [Be, Ee] = (0, be.useState)(!0), [ge, Oe] = (0, be.useState)(!1);
      (0, We.f)("EditBook", (ee => {
        let {
          pages: ie,
          title: ye,
          isPublished: be
        } = ee;
        var Me;
        Ye.featureFlags.canSeePlayerWrittenText && (null !== ie ? (pe(ie), Ue(null !== (Me = ie[0]) && void 0 !== Me ? Me : ""), ze(ye), Re(0), fe(!1), Ee(!be), Oe(!1), He()) : pe(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const de = (0, be.useRef)(null),
        te = (0, be.useRef)(null);
      Ni(de, ie), (0, Qi.n)(de, {
        kind: "book"
      }), (0, Qi.n)(te, {
        kind: "EJ"
      });
      const Ze = li.G.book.uiFontSize,
        we = ri(Ze),
        De = () => {
          (Be || ge) && Je.gameBridge.send("writeBook", {
            pages: [...Te],
            title: Xe,
            published: !Be && ge
          })
        },
        Pe = ee => {
          ke && (Te[Fe] = Me, fe(!1)), Ue(Te[ee]), Re(ee)
        };
      return (0, oe.jsxs)(Ke.e, {
        className: "WriteOnBoardBg",
        close: () => {
          ye(), Te[Fe] = Me, De()
        },
        escDoesExit: !0,
        show: ie,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, oe.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, oe.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: Xe,
            ref: te,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${we}rem`
            },
            onKeyDown: ee => {
              Be && ee.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: ee => {
              let ie = ee.target.value;
              ie = (0, li.r)(ie, "EJ"), ze(ie)
            },
            readOnly: !Be
          }), (0, oe.jsx)("img", {
            src: si("book_page", Si.j.ITEM, HH),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, oe.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, oe.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: Me,
              ref: de,
              style: {
                fontSize: `${Ze}rem`,
                lineHeight: `${we}rem`
              },
              onKeyDown: ee => {
                Be && ee.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: ee => {
                const ie = ee.target.value;
                Ue((0, li.r)(ie, "book")), fe(!0)
              },
              readOnly: !Be
            })
          })]
        }), (0, oe.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, oe.jsx)(qe.c, {
            disabled: 0 === Fe,
            onClick: () => {
              Pe(Fe - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, oe.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, oe.jsx)(qe.c, {
            disabled: 9 === Fe,
            onClick: () => {
              Pe(Fe + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, oe.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, oe.jsx)(qe.c, {
            onClick: () => {
              Ee(!Be), Oe(!0)
            },
            className: "BookNavButton",
            children: Be ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var bH = He(37427),
      MH = He(9426),
      KH = He(1385),
      UH = He(1970);

    function FH(ee) {
      let {
        show: ie,
        buttons: He
      } = ee;
      const {
        t: ye
      } = (0, he.v)(), Me = (0, be.useRef)(null);
      return (0, be.useEffect)((() => {
        var ee, He;
        const ye = ie ? (0, bH.u)() : null;
        if (!ye || !(0, KH.n)()) return;
        const be = (0, bH.h)().findIndex((ee => ee.id === ye));
        (0, MH.r)(null !== (ee = null === (He = Me.current) || void 0 === He ? void 0 : He.children[be]) && void 0 !== ee ? ee : null)
      }), [ie]), 0 === He.length ? null : (0, oe.jsx)("div", {
        ref: Me,
        className: "ClientGameInventoryButtons",
        onPointerDown: ee => {
          ee.stopPropagation()
        },
        onPointerUp: ee => {
          ee.stopPropagation()
        },
        children: He.map((ee => {
          const ie = ye(ee.labelKey);
          return (0, oe.jsxs)(qe.m, {
            className: ee.className,
            disabled: ee.disabled,
            onClick: () => {
              (0, bH.n)(ee)
            },
            ariaLabel: ee.iconOnly ? ie : void 0,
            title: ee.iconOnly ? ie : void 0,
            children: [ee.icon && (0, oe.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === ee.icon.kind && (0, oe.jsx)(UH.c, {
                itemName: ee.icon.name,
                amount: 0
              }), "image" === ee.icon.kind && (0, oe.jsx)("img", {
                src: ee.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === ee.icon.kind && (0, oe.jsx)(pe.e, {
                name: ee.icon.name
              })]
            }), !ee.iconOnly && ie]
          }, ee.id)
        }))
      })
    }
    var JH = He(37574),
      oH = He(2952),
      RH = He(34889),
      kH = He(37349),
      qH = He(37340),
      fH = He(1311);
    let TH = null;
    window.setShowInventoryAdsOverride = ee => {
      TH = ee
    };
    const pH = 24e4;
    var XH = He(1977);

    function zH(ee) {
      var ie;
      let {
        draggedInfo: {
          name: He,
          attributes: ye,
          amount: be
        },
        toAddRef: Me
      } = ee;
      return (0, oe.jsx)("div", {
        className: "DraggedInvenItem",
        ref: Me,
        children: (0, oe.jsx)(UH.c, {
          itemName: He,
          amount: be,
          enchantmentTier: null === ye || void 0 === ye || null === (ie = ye.customAttributes) || void 0 === ie ? void 0 : ie.enchantmentTier,
          bar: (0, XH.g)(ye)
        })
      })
    }

    function BH(ee) {
      let {
        className: ie = "",
        displayInfo: He,
        domRef: ye
      } = ee;
      return (0, oe.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${ie}`,
        ref: ye,
        children: [(0, oe.jsx)(de.e, {
          text: (0, te.Cb)(He.name, {
            fontStyle: He.fontStyle
          })
        }), (0, oe.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, oe.jsx)(de.e, {
            text: He.desc
          })
        })]
      })
    }

    function EH(ee) {
      let {
        info: ie,
        draggedInfo: He
      } = ee;
      const ye = (0, be.useRef)(null);
      return (0, be.useLayoutEffect)((() => {
        const ee = ye.current,
          {
            left: He,
            top: be
          } = function(ee, ie, He, ye) {
            const be = ye.left * He.width / 100 + 4,
              Me = He.width - ye.right * He.width / 100 - 4 - ie.width,
              Ke = ye.top * He.height / 100 + 4,
              Ue = He.height - 4 - ie.height;
            return {
              left: Math.max(be, Math.min(ee.x - ie.width / 2, Me)),
              top: Math.max(Ke, Math.min(ee.y - 48 - ie.height, Ue))
            }
          }({
            x: ie.initTouchX,
            y: ie.initTouchY
          }, {
            width: ee.offsetWidth,
            height: ee.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, ve.e.get("notchSize"));
        ee.style.left = `${He}px`, ee.style.top = `${be}px`
      }), [ie]), (0, oe.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: ye,
        children: [(0, oe.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: He.amount / ie.maxAmount * 100 + "%"
          }
        }), (0, oe.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [He.amount, "/", ie.maxAmount]
        })]
      })
    }
    var gH = He(1053),
      OH = He.n(gH),
      dH = He(186);
    const WH = (0, be.memo)((function(ee) {
      let {
        show: ie,
        onOpen: He,
        onClose: ye
      } = ee;
      const Me = (0, be.useRef)({
          pos: null
        }),
        [Ue, Fe] = (0, be.useState)([0, 0, 0, 0]),
        {
          userContext: Re
        } = (0, Oe.b)();
      (0, Ze.e)("ironChestOpenRequested", (ee => {
        let {
          pos: ie,
          ownerDbId: ye,
          cachedPasskey: be
        } = ee;
        if (Me.current.pos = ie, ye !== Re.whamm) return null !== be ? (Fe(be), void ke(be)) : void He();
        ke(Ue)
      })), (0, Ze.e)("localEffectUpdated", (ee => {
        "Thief" === ee && ye()
      }));
      const ke = ee => {
        const {
          pos: ie
        } = Me.current;
        Je.gameBridge.send("openIronChest", {
          pos: ie,
          SF: ee
        })
      };
      return (0, oe.jsx)(Ke.e, {
        className: "IronChestPasskeyInputScreenOuter",
        close: ye,
        escDoesExit: !0,
        show: ie,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, oe.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, oe.jsx)(tH, {
            SF: Ue,
            onPasskeyUpdated: Fe,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              ke(Ue)
            }
          })
        })
      })
    }));

    function tH(ee) {
      let {
        className: ie = "",
        SF: He,
        onPasskeyUpdated: ye,
        confirmText: be,
        onConfirm: Me
      } = ee;
      const {
        t: Ke
      } = (0, he.v)();
      return (0, oe.jsxs)("div", {
        className: `${ie} IronChestPasskeyInput`,
        children: [(0, oe.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: Ke("ironChest:passkeyInputTitle")
        }), (0, oe.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(dH.g.ironChestPasskeyLength).fill(0).map(((ee, ie) => (0, oe.jsx)(ZH, {
            digit: He[ie],
            onPasskeyDigitUpdated: ee => {
              const be = [...He];
              be[ie] = ee, ye(be)
            }
          }, ie)))
        }), (0, oe.jsx)(qe.m, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: Me,
          children: Ke(be)
        })]
      })
    }

    function ZH(ee) {
      let {
        digit: ie,
        onPasskeyDigitUpdated: He
      } = ee;
      return (0, oe.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, oe.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, oe.jsx)(qe.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              He(te.c.mod(ie + 1, 10))
            },
            children: (0, oe.jsx)(pe.e, {
              name: "angle-up"
            })
          }), (0, oe.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: ie
          }), (0, oe.jsx)(qe.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              He(te.c.mod(ie - 1, 10))
            },
            children: (0, oe.jsx)(pe.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var wH = He(34880),
      DH = He(37629),
      PH = He(37337);

    function AH(ee) {
      let {
        specialItemInfo: ie,
        setHovered: He,
        pointerDown: ye,
        pointerUp: Me,
        enchantingTablePosition: Ke,
        enchantingTableBlockName: Ue
      } = ee;
      const {
        t: Re
      } = (0, he.v)(), [ke, fe] = (0, be.useState)(null), [Te, pe] = (0, be.useState)(null), Xe = (0, Fe.i)("auraPerLevel"), ze = Math.floor((0, Ze.k)("aura") / Xe);
      (0, be.useEffect)((() => {
        if (!ie) return void fe(null);
        let ee = !0;
        return Je.gameBridge.query("enchantingOffer", {
          slot: ie.idx,
          name: ie.name,
          blockName: Ue
        }).then((He => {
          var ye, be;
          let {
            perks: Me,
            options: Ke
          } = He;
          if (!ee) return;
          const Ue = {
            isEnchantable: Me.length > 0,
            possibleEnchantments: Me,
            options: Ke.map((ee => {
              let {
                level: ie,
                odds: He
              } = ee;
              return {
                level: ie,
                possibilities: Object.fromEntries(He.map(((ee, ie) => [`Tier ${ie+1}`, ee])))
              }
            })),
            isAlreadyEnchanted: Me.length > 0 && void 0 !== (null === (ye = ie.attributes) || void 0 === ye || null === (be = ye.customAttributes) || void 0 === be ? void 0 : be.enchantmentTier)
          };
          fe(Ue), (ee => {
            const ie = ee.options.map((ee => Object.entries(ee.possibilities).map((ee => {
              let [ie, He] = ee;
              return {
                str: `${ie}: ${He>0?He<.01?He.toPrecision(1):He.toFixed(2):0}%\n`,
                style: {
                  color: te.xb[ie]
                }
              }
            }))));
            pe(ie)
          })(Ue)
        })), () => {
          ee = !1
        }
      }), [ie, Ke, Ue]);
      const Be = [];
      for (let be = 0; be < DH.d; be++) {
        const ee = null === ke || void 0 === ke ? void 0 : ke.options[be],
          ye = !ee || ee.level > ze;
        Be.push((0, oe.jsx)(qe.c, {
          className: "EnchantmentButton",
          onPointerEnter: ee ? ee => null === He || void 0 === He ? void 0 : He()(!0, {
            name: "",
            desc: Te[be]
          }, ee) : void 0,
          onPointerLeave: ee ? () => null === He || void 0 === He ? void 0 : He()(!1) : void 0,
          onClick: ye ? void 0 : () => {
            Je.gameBridge.send("enchantItem", {
              slot: ie.idx,
              level: ee.level,
              tablePos: Ke
            }), fe(null)
          },
          disabled: ye,
          children: ee ? (0, oe.jsxs)(oe.Fragment, {
            children: [(0, oe.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, oe.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [Re("enchantments:cost"), ": "]
              }), " ", Re("enchantments:levels", {
                level: ee.level
              })]
            }), (0, oe.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, oe.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, oe.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Re("enchantments:tier")
                }), Object.entries(ee.possibilities).map((ee => {
                  let [ie, He] = ee;
                  return 0 === He ? null : (0, oe.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: te.xb[ie]
                    },
                    children: ie
                  }, ie)
                }))]
              }), (0, oe.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, oe.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Re("enchantments:odds")
                }), Object.entries(ee.possibilities).map((ee => {
                  let [ie, He] = ee;
                  return 0 === He ? null : (0, oe.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: te.xb[ie]
                    },
                    children: [He > 0 && He < .1 ? "<0.1" : He.toFixed(0 < He && He < .95 ? 1 : 0), "%"]
                  }, ie)
                }))]
              })]
            })]
          }) : !1 === (null === ke || void 0 === ke ? void 0 : ke.isEnchantable) ? (0, oe.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Re("enchantments:notEnchantable")
          }) : (0, oe.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Re("enchantments:enterItem")
          })
        }, be))
      }
      return (0, oe.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, oe.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Ue
        }), (0, oe.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, oe.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, oe.jsx)(PH.b, {
              idx: qH.e,
              setHovered: ee => {
                null === He || void 0 === He || He(qH.e)(ee)
              },
              pointerDown: ye,
              pointerUp: Me,
              draggedInfo: null,
              specialItemInfo: ie,
              variation: "Enchanting Table"
            }), ke && ke.possibleEnchantments.length > 0 && (0, oe.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, oe.jsx)("h2", {
                children: "Possible Perks:"
              }), ke.possibleEnchantments.map((ee => (0, oe.jsxs)(be.Fragment, {
                children: [(0, oe.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, oe.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, oe.jsx)(UH.c, {
                      itemName: `${ee} Enchantment`,
                      amount: 1
                    })
                  }), (0, oe.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: ee
                  })]
                }), (0, oe.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: Re((0, wH.o)(ee).translationKey)
                })]
              }, ee)))]
            })]
          }), (0, oe.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [ke && ke.isAlreadyEnchanted && (0, oe.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: Re("enchantments:alreadyEnchanted")
            }), Be]
          })]
        })]
      })
    }
    var YH = He(37637);

    function VH(ee) {
      var ie;
      let {
        specialItemInfo: He,
        setSpecialItemInfo: ye,
        setHovered: Me,
        pointerDown: Ke,
        pointerUp: Ue
      } = ee;
      const {
        t: Fe
      } = (0, he.v)(), Re = (0, Ze.g)("inventory", (ee => ee.freeSlots)), [ke, fe] = (0, be.useState)(null);
      (0, be.useEffect)((() => {
        if (He) {
          const ee = (0, YH.d)(He.name, He.amount);
          fe({
            salvageable: !!ee,
            produces: ee
          })
        } else fe(null)
      }), [He, null === He || void 0 === He ? void 0 : He.name, null === He || void 0 === He ? void 0 : He.amount]);
      const Te = !!He && !(null === ke || void 0 === ke || !ke.salvageable) && !(null !== (ie = ke.produces) && void 0 !== ie && ie.some((ee => {
        let {
          amt: ie
        } = ee;
        return ie < 1
      })));
      return (0, oe.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, oe.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Fe("item:salvagingTable")
        }), (0, oe.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, oe.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, oe.jsx)(PH.b, {
              idx: qH.e,
              setHovered: ee => {
                null === Me || void 0 === Me || Me(qH.e)(ee)
              },
              pointerDown: Ke,
              pointerUp: Ue,
              draggedInfo: null,
              specialItemInfo: He,
              variation: "Salvaging Table"
            })
          }), (0, oe.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, oe.jsx)(qe.c, {
              className: "SalvageButton",
              onClick: Te ? () => {
                const {
                  idx: ee,
                  name: ie,
                  amount: be
                } = He;
                Je.gameBridge.send("salvageItem", {
                  slot: ee,
                  name: ie,
                  amount: be
                }) && (fe(null), ye(null))
              } : void 0,
              disabled: !Te,
              children: ke ? ke.salvageable ? ke.produces.some((ee => {
                let {
                  amt: ie
                } = ee;
                return ie < 1
              })) ? (0, oe.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, oe.jsx)("div", {
                  className: "SalvageText Error",
                  children: Fe("salvagingTable:notEnoughResources")
                })
              }) : Re < ke.produces.length ? (0, oe.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, oe.jsx)("div", {
                  className: "SalvageText Error",
                  children: Fe("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, oe.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, oe.jsx)("div", {
                  className: "SalvageText",
                  children: Fe("salvagingTable:salvage")
                }), (0, oe.jsx)("div", {
                  className: "SalvageIcons",
                  children: ke.produces.map(((ee, ie) => {
                    let {
                      item: He,
                      amt: ye
                    } = ee;
                    return (0, oe.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, oe.jsx)(UH.c, {
                        itemName: He,
                        amount: Math.floor(ye)
                      })
                    }, ie)
                  }))
                })]
              }) : (0, oe.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, oe.jsx)("div", {
                  className: "SalvageText Error",
                  children: Fe("salvagingTable:unsalvageable")
                })
              }) : (0, oe.jsx)(oe.Fragment, {})
            })
          })]
        })]
      })
    }
    var aH = He(198),
      cH = He(9961),
      xH = He(2869),
      LH = He(1674),
      CH = He(9430),
      vH = He(9428),
      uH = He(1657),
      mH = He(2059),
      lH = He(1403),
      SH = He(2123);

    function nH(ee, ie, He) {
      const ye = ee.trim().toLowerCase();
      if ("" === ye) return 0;
      let be = null;
      for (const Me of ie) {
        const ee = Me.toLowerCase().indexOf(ye);
        if (0 === ee) return 0;
        ee > 0 && (be = 1)
      }
      if (null !== be) return be;
      for (const Me of He)
        if (Me.toLowerCase().includes(ye)) return 2;
      return null
    }

    function jH(ee) {
      return ee.map((ee => {
        var ie;
        return ee ? {
          name: ee.name,
          amount: null !== (ie = ee.amount) && void 0 !== ie ? ie : 1
        } : null
      }))
    }

    function sH(ee) {
      return ee < 1e3 ? `${ee}` : ee < 1e4 ? Math.floor(ee / 100) / 10 + "k" : `${Math.floor(ee/1e3)}k`
    }
    var IH = He(37639);
    const hH = qe.c,
      NH = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      GH = () => {
        const ee = (0, lH.f)();
        return ee ? ee.getPadRepeatTiming(NH) : NH
      };

    function rH(ee, ie, He) {
      var ye, be;
      const Me = (0, RH.x)(ie, ee);
      let Ke = null === (ye = ie[ee]) || void 0 === ye ? void 0 : ye.description;
      if (He && (null === (be = (0, IH.g)().get(ee)) || void 0 === be || !be.hideIngredients)) {
        Ke ? (Ke = (0, te.Cb)(Ke), Ke.push({
          str: "\n"
        })) : Ke = [], Ke.push({
          str: "\n"
        }), Ke.push({
          str: "Can be crafted from:\n"
        });
        for (const ee of He) "string" === typeof ee && (Ke.push({
          icon: ee,
          style: {
            fontSize: "1.5em"
          }
        }), Ke.push({
          str: " "
        }), Ke.push(...(0, te.Cb)((0, RH.x)(ie, ee))), Ke.push({
          str: "\n"
        }))
      }
      return {
        name: Me,
        desc: Ke
      }
    }

    function QH(ee) {
      let {
        name: ie,
        Qo: He
      } = ee;
      return `${ie}_${He}`
    }

    function ey(ee) {
      var ie;
      let {
        onClick: He,
        itemName: ye,
        recipeId: Me,
        isSelected: Ke,
        haveIngredients: Ue,
        craftable: Fe,
        setHovered: Je,
        padActions: Re,
        marked: ke,
        lock: qe,
        itemInfo: fe
      } = ee;
      const Te = (0, be.useRef)(null);
      return (0, CH.g)(Te, {
        press: ee => !Ue || "secondary" === ee && !Fe ? (Re.refuse(), !1) : "primary" === ee ? (Re.choose(), !0) : Re.craft(),
        release: Re.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, oe.jsxs)("div", {
        ref: Te,
        className: OH()("InvenItem", {
          CraftableItemNotEnoughIngredients: !Ue && !qe,
          CraftableItemMarked: ke,
          CraftableItemLocked: void 0 !== qe,
          CraftableItemLockedFar: (null !== (ie = null === qe || void 0 === qe ? void 0 : qe.stepsAway) && void 0 !== ie ? ie : 1) > 1
        }),
        "data-recipe-key": Me,
        "data-pad-inventory-default": Ke ? "" : void 0,
        onClick: He,
        style: {
          cursor: Ke ? null : "pointer"
        },
        onPointerEnter: ee => {
          null === Je || void 0 === Je || Je(!0, rH(ye, fe)), !Ke && (0, uH.q)(ee.nativeEvent) && (0, vH.h)() && He()
        },
        onPointerLeave: () => {
          null === Je || void 0 === Je || Je(!1)
        },
        children: [(0, oe.jsx)(UH.c, {
          itemName: ye,
          amount: 1
        }), ke && (0, oe.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), qe && (0, oe.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, oe.jsx)(pe.e, {
            name: "lock"
          }), (0, oe.jsx)(de.e, {
            text: qe.tag
          })]
        })]
      })
    }

    function iy(ee) {
      let {
        idx: ie,
        status: He,
        shownItem: ye,
        dim: Me,
        onHoverStart: Ke,
        onHoverEnd: Ue,
        onPadBack: Fe
      } = ee;
      const Je = (0, be.useRef)(null);
      (0, CH.g)(Je, {
        press: () => !1,
        back: Fe,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const Re = He.need > 0 ? Math.min(He.have / He.need, 1) : 1;
      return (0, oe.jsxs)("div", {
        ref: Je,
        className: OH()("CupTile", {
          Short: He.missing > 0
        }),
        style: {
          width: Me,
          height: Me
        },
        "data-craft-ingredient": ie,
        onPointerEnter: Ke,
        onPointerLeave: Ue,
        children: [(0, oe.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${Re})`
          }
        }), (0, oe.jsx)(UH.c, {
          itemName: ye,
          amount: 0
        }), (0, oe.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [sH(He.have), "/", sH(He.need)]
        })]
      })
    }

    function Hy(ee) {
      var ie, He, ye, Me, Ke;
      let {
        show: Ue,
        recipeItem: {
          name: Fe,
          Qo: Re,
          requires: ke,
          produces: qe,
          haveIngredients: fe
        },
        detail: Te,
        onCraft: pe,
        setHovered: Xe,
        craftButtonRef: ze,
        onPadBack: Be,
        showPadShortcut: Ee,
        refusedCount: ge,
        lock: Oe,
        itemInfo: We
      } = ee;
      const {
        t: te
      } = (0, he.v)(), Ze = null !== Te && !Te.roomForOne, we = null !== (ie = null === Te || void 0 === Te ? void 0 : Te.craftAllTimes) && void 0 !== ie ? ie : 0, De = function(ee, ie) {
        return ee.map((ee => {
          let {
            items: He,
            amt: ye
          } = ee, be = 0;
          const Me = [];
          for (const Ke of He) {
            const ee = ie(Ke);
            be += ee, ee > 0 && Me.push(Ke)
          }
          return 0 === Me.length && Me.push(He[0]), {
            shownItems: Me,
            need: ye,
            have: be,
            missing: Math.max(ye - be, 0)
          }
        }))
      }(ke, (ee => {
        var ie;
        return null !== (ie = null === Te || void 0 === Te ? void 0 : Te.amounts[ee]) && void 0 !== ie ? ie : 0
      }));
      let Pe = "4rem",
        Ae = 4;
      3 === ke.length || 4 === ke.length ? Pe = "3.75rem" : ke.length >= 5 && (Pe = "3rem"), 4 === ke.length ? Ae = 2 : ke.length <= 6 && (Ae = 3);
      const Ye = `calc(${Ae} * ${Pe} + ${Ae-1} * 0.4rem + 1px)`,
        Ve = (0, be.useRef)(null),
        ae = (0, be.useRef)(null);
      (0, be.useLayoutEffect)((() => {
        Ve.current.scrollTop = 0
      }), [Fe, Re]);
      const ce = (0, be.useRef)(ge);
      (0, be.useEffect)((() => {
        if (ge === ce.current) return;
        ce.current = ge;
        const ee = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const ye of null !== (ie = null === (He = Ve.current) || void 0 === He ? void 0 : He.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== ie ? ie : []) {
          var ie, He;
          ye.animate(ee, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [ge]);
      const xe = (ee, ie, He) => {
          var ye;
          if ((0, IH.g)().has(Fe)) return void(He && clearInterval(Le.current));
          const be = null !== (ye = null === Te || void 0 === Te ? void 0 : Te.resultStackable) && void 0 !== ye && ye,
            Me = jH(Je.gameBridge.latest("inventory").player),
            {
              eR: Ke,
              RJ: Ue,
              amountAddedToSlot: oe
            } = Je.gameBridge.send("craftRecipe", {
              name: Fe,
              Qo: Re,
              times: ie || ee && be ? null : 1
            });
          if (Ke > 0) {
            const ie = [],
              ye = new Set(ke.flatMap((ee => {
                let {
                  items: ie
                } = ee;
                return ie
              }))),
              Ke = function(ee, ie, He) {
                const ye = [];
                for (let be = 0; be < ee.length; be++) {
                  const Me = ee[be];
                  if (!Me || !He.has(Me.name)) continue;
                  const Ke = ie[be],
                    Ue = (null === Ke || void 0 === Ke ? void 0 : Ke.name) === Me.name ? Ke.amount : 0;
                  Ue < Me.amount && ye.push({
                    idx: be,
                    itemName: Me.name,
                    amount: Me.amount - Ue
                  })
                }
                return ye
              }(Me, jH(Je.gameBridge.latest("inventory").player), ye).slice(0, 12),
              Re = He ? 0 : Math.min(50, 400 / Ke.length),
              fe = He ? 220 : 320;
            for (const ee of Ke) {
              var qe;
              const He = ke.findIndex((ie => {
                  let {
                    items: He
                  } = ie;
                  return He.includes(ee.itemName)
                })),
                ye = null === (qe = Ve.current) || void 0 === qe ? void 0 : qe.querySelector(`[data-craft-ingredient="${He}"]`),
                be = (0, RH.e)(ee.idx);
              ye && be && ie.push({
                kind: "ingredient",
                itemName: ee.itemName,
                amount: ee.amount,
                RJ: ee.idx,
                from: be,
                to: (0, RH.e)(ye),
                delayMs: Math.round(ie.length * Re),
                durationMs: fe
              })
            }
            let Te;
            if (null !== Ue && oe > 0 && ae.current) {
              const ee = ie.length > 0 ? ie[ie.length - 1].delayMs + .6 * fe : 0;
              Te = {
                itemName: Fe,
                amount: oe,
                RJ: Ue,
                from: (0, RH.e)(ae.current),
                delayMs: Math.round(ee)
              }
            }
            pe(Te, ee && !be ? Ue : null, ie), JH.d.play("wood1", .5).rate(1.75)
          }
        },
        Le = (0, be.useRef)(null);
      (0, be.useEffect)((() => () => {
        clearInterval(Le.current)
      }), []);
      const Ce = (ee, ie) => {
          xe(ee, !1, !1), clearInterval(Le.current), ie && (Le.current = setTimeout((() => {
            Le.current = setInterval((() => {
              xe(ee, !1, !0)
            }), ie.intervalMs)
          }), ie.initialDelayMs))
        },
        ve = () => {
          clearInterval(Le.current)
        },
        ue = !fe || Ze || Boolean(Oe),
        me = (0, be.useRef)(null),
        le = null !== (He = null === (ye = (0, SH.e)()) || void 0 === ye ? void 0 : ye.hideButtonHints) && void 0 !== He && He,
        Se = null !== (Me = null === (Ke = (0, lH.f)()) || void 0 === Ke ? void 0 : Ke.getBoundButton("inventorySecondary")) && void 0 !== Me ? Me : null,
        ne = () => !ue && (xe(!1, !0, !1), !0);
      (0, CH.g)(ze, {
        press: ee => "secondary" === ee ? ne() : !ue && (Ce(!1, GH()), !0),
        release: ve,
        back: Be,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, CH.g)(me, {
        press: ne,
        back: Be,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [je, se] = (0, be.useState)(0), [Ie, Ne] = (0, be.useState)(null);
      (0, be.useEffect)((() => {
        if (!0 === Ue) {
          se(0);
          const ee = setInterval((() => {
            se((ee => ee + 1))
          }), 1e3);
          return () => {
            clearInterval(ee)
          }
        }
        return () => {}
      }), [Ue]);
      const Ge = null === Te || void 0 === Te ? void 0 : Te.ingredientsCraftedFrom,
        re = (0, be.useRef)(Xe);
      (0, be.useEffect)((() => {
        re.current = Xe
      }), [Xe]);
      const Qe = !(null === Oe || void 0 === Oe || !Oe.hideIngredients);
      (0, be.useEffect)((() => {
        var ee, ie;
        if (!Ie) return;
        if (Qe) return Ne(null), void(null === (ie = re.current) || void 0 === ie || ie.call(re, !1));
        const He = Ie[je % Ie.length];
        null === (ee = re.current) || void 0 === ee || ee.call(re, !0, rH(He, We, null === Ge || void 0 === Ge ? void 0 : Ge[He]))
      }), [Ie, je, We, Ge, Qe]);
      const ei = !!Oe,
        ii = (0, be.useRef)(!1);
      (0, be.useEffect)((() => {
        var ee;
        ei && (clearInterval(Le.current), Qe && ii.current && (ii.current = !1, null === (ee = re.current) || void 0 === ee || ee.call(re, !1)))
      }), [ei, Qe]);
      const Hi = (0, RH.x)(We, Fe);
      return (0, oe.jsxs)("div", {
        ref: Ve,
        className: "CraftableInfo SmallTextBold",
        children: [(0, oe.jsx)("div", {
          className: "CraftableHeader",
          children: (0, oe.jsx)(de.e, {
            text: Hi
          })
        }), !Qe && (0, oe.jsx)("div", {
          className: OH()("CraftableIngredients", {
            Compact: ke.length >= 5
          }),
          style: {
            maxWidth: Ye
          },
          children: De.map(((ee, ie) => {
            const He = ee.shownItems[je % ee.shownItems.length];
            return (0, oe.jsx)(iy, {
              idx: ie,
              status: ee,
              shownItem: He,
              dim: Pe,
              onHoverStart: () => {
                Ne(ee.shownItems)
              },
              onHoverEnd: () => {
                Ne(null), null === Xe || void 0 === Xe || Xe(!1)
              },
              onPadBack: Be
            }, ie)
          }))
        }), Oe && (0, oe.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, oe.jsx)(de.e, {
            text: Oe.reason
          })
        }), !Oe && (!fe || Ze) && (0, oe.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!fe && "Missing ingredients", (0, oe.jsx)("br", {}), Ze && "Inventory is full"]
        }), !Qe && (0, oe.jsxs)(oe.Fragment, {
          children: [(0, oe.jsxs)(hH, {
            ref: ze,
            className: "DoCraftButton",
            onPointerDown: ee => {
              Ce((0, RH.B)(ee), (0, uH.q)(ee.nativeEvent) ? GH() : NH)
            },
            onPointerUp: ve,
            onPointerLeave: ve,
            disabled: ue,
            children: [Ee && Se && !ue && !le && (0, oe.jsx)(mH.b, {
              className: "CraftShortcutGlyph",
              glyph: Se
            }), (0, oe.jsx)("div", {
              ref: ae,
              className: "DoCraftItem",
              onPointerEnter: () => {
                ii.current = !0, null === Xe || void 0 === Xe || Xe(!0, rH(Fe, We))
              },
              onPointerLeave: () => {
                ii.current = !1, null === Xe || void 0 === Xe || Xe(!1)
              },
              children: (0, oe.jsx)(UH.c, {
                itemName: Fe,
                amount: qe
              })
            })]
          }), (0, oe.jsxs)(hH, {
            ref: me,
            className: "DoCraftAllButton",
            onPointerDown: ee => {
              xe((0, RH.B)(ee), !0, !1)
            },
            disabled: ue,
            children: [(0, oe.jsx)("span", {
              className: "CraftAllLabel",
              children: te("general:craftAll")
            }), we > 0 && (0, oe.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", sH(we)]
            })]
          })]
        })]
      })
    }

    function yy(ee) {
      let {
        selectedIdx: ie,
        hidden: He
      } = ee;
      const ye = (0, KH.A)(),
        Me = (0, be.useRef)(null);
      return (0, be.useLayoutEffect)((() => {
        const ee = Me.current,
          ye = null === ee || void 0 === ee ? void 0 : ee.parentElement;
        if (!ye || !ee) return;
        const be = ye.querySelector(".CraftableItems"),
          Ke = () => {
            var Me, Ke;
            if (He) return void(ee.style.opacity = "0");
            const Ue = null === be || void 0 === be ? void 0 : be.children[ie],
              Fe = null === (Me = null !== (Ke = null === Ue || void 0 === Ue ? void 0 : Ue.querySelector(".InvenItem")) && void 0 !== Ke ? Ke : Ue) || void 0 === Me ? void 0 : Me.getBoundingClientRect();
            if (!Fe || 0 === Fe.width) return void(ee.style.opacity = "0");
            const Je = ye.getBoundingClientRect();
            ee.style.opacity = "1", ee.style.width = `${Fe.width}px`, ee.style.height = `${Fe.height}px`, ee.style.transform = `translate(${Fe.left-Je.left+ye.scrollLeft}px, ${Fe.top-Je.top+ye.scrollTop}px)`
          };
        Ke();
        const Ue = new MutationObserver(Ke),
          Fe = new ResizeObserver(Ke);
        return Fe.observe(ye), be && (Ue.observe(be, {
          childList: !0,
          subtree: !0
        }), Fe.observe(be)), () => {
          Ue.disconnect(), Fe.disconnect()
        }
      }), [ie, He]), (0, oe.jsx)("div", {
        ref: Me,
        className: OH()("SelectionReticle", {
          Secondary: ye
        })
      })
    }

    function by(ee, ie, He) {
      return ee ? (0, aH.b)(cH.i, ee) ? My(ee, ie, He) : ee : He("classicGame:handCrafting")
    }

    function My(ee, ie, He) {
      var ye;
      const be = null === (ye = ie[ee]) || void 0 === ye ? void 0 : ye.displayName;
      if ("string" === typeof be) return He(be);
      const Me = Je.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(be) ? be.map((ee => {
        if ("string" === typeof ee) return ee;
        if ("translationKey" in ee) return He(ee.translationKey, (0, he.m)(ee.params, Me));
        if ("str" in ee) {
          if ("string" === typeof ee.str) return ee.str;
          if ("translationKey" in ee.str) return He(ee.str.translationKey, (0, he.m)(ee.str.params, Me))
        }
        return ""
      })).join("") : be && "translationKey" in be ? He(be.translationKey, (0, he.m)(be.params, Me)) : ee
    }

    function Ky(ee, ie) {
      return ee === ie || null !== ee && null !== ie && ee.name === ie.name && ee.Qo === ie.Qo
    }

    function Uy(ee) {
      var ie, He, ye;
      let {
        show: Me,
        onCraft: Ke,
        dispatchSelectedCraftable: Ue,
        selectedCraftable: Fe,
        craftingStation: Re,
        setHovered: ke
      } = ee;
      const {
        t: qe
      } = (0, he.v)(), [fe, Te] = (0, be.useState)(""), [pe, Xe] = (0, be.useState)(0);
      (0, be.useEffect)((() => {
        Me || (Te(""), Xe((ee => ee + 1)))
      }), [Me]);
      const [ze, Be] = (0, be.useState)(Re);
      ze !== Re && (Be(Re), "" !== fe && (Te(""), Xe((ee => ee + 1))));
      const Ee = (0, be.useRef)(null),
        ge = (0, be.useRef)(null),
        Oe = (0, vH.j)(),
        de = Oe.showing && "recipe" === Oe.kind,
        [We, te] = (0, be.useState)(0),
        we = null !== Re && void 0 !== Re ? Re : null,
        De = (0, be.useRef)(null),
        Pe = ee => {
          return !((ie = De.current) === (He = ee) || null !== ie && null !== He && ie.station === He.station && Ky(ie.recipe, He.recipe)) && (De.current = ee, Je.gameBridge.send("focusCrafting", ee), !0);
          var ie, He
        };
      Pe(Me ? {
        station: we,
        recipe: (null === (ie = De.current) || void 0 === ie ? void 0 : ie.station) === we ? De.current.recipe : null
      } : null);
      let Ae = Je.gameBridge.latest("crafting");
      const Ye = (0, Ze.k)("itemInfo"),
        Ve = "" !== fe.trim(),
        ae = (0, IH.A)(),
        ce = (0, IH.y)(),
        xe = (0, IH.C)(),
        Le = function(ee, ie) {
          const [He, ye] = (0, be.useState)(!1);
          (0, be.useEffect)((() => {
            if (!ee) return void ye(!1);
            const ie = setTimeout((() => {
              ye(!0)
            }), 0);
            return () => {
              clearTimeout(ie)
            }
          }), [ee]);
          const Me = ee && He,
            Ke = (0, be.useRef)({
              station: ie,
              at: new Map
            });
          return (Ke.current.station !== ie || !Me && Ke.current.at.size > 0) && (Ke.current = {
            station: ie,
            at: new Map
          }), Me ? Ke.current.at : null
        }(Me, Re);
      let Ce = Ae.recipes.filter((ee => {
        let {
          listed: ie
        } = ee;
        return ie
      }));
      if (Ve) {
        const ee = [];
        for (const ie of Ae.recipes) {
          var ve;
          const He = null !== (ve = ce.get(ie.name)) && void 0 !== ve && ve.hideIngredients ? [] : ie.requires.flatMap((ee => {
              let {
                items: ie
              } = ee;
              return ie.flatMap((ee => [ee, My(ee, Ye, qe)]))
            })),
            ye = nH(fe, [ie.name, My(ie.name, Ye, qe)], He);
          null !== ye && ee.push({
            item: ie,
            rank: ye
          })
        }
        ee.sort(((ee, ie) => ee.rank - ie.rank)), Ce = ee.map((ee => {
          let {
            item: ie
          } = ee;
          return ie
        }))
      } else {
        if (Le && Le.size > 0) {
          const ee = Ae.recipes.filter((ee => !ee.listed && Le.has(QH(ee))));
          Ce = Ce.concat(ee)
        }
        Ce = (0, IH.k)(Ce, ae, ce, xe), Le && (Ce = (0, IH.j)(Ce, Le, QH))
      }
      const ue = ee => Ce.find((ie => QH(ie) === ee)),
        me = `${Re}|${fe}`,
        [le, Se] = (0, be.useState)(null),
        ne = (null === le || void 0 === le ? void 0 : le.context) === me ? le.key : null,
        je = Fe ? QH(Fe) : null,
        se = null !== (He = null !== (ye = ue(je)) && void 0 !== ye ? ye : ue(ne)) && void 0 !== He ? He : Ce[0],
        Ie = se ? QH(se) : null,
        Ne = se ? {
          name: se.name,
          Qo: se.Qo
        } : null;
      Me && Pe({
        station: we,
        recipe: Ne
      }) && (Ae = Je.gameBridge.latest("crafting")), Ie !== je && Ie !== ne && Se(Ie ? {
        context: me,
        key: Ie
      } : null), (0, be.useEffect)((() => () => {
        De.current = null, Je.gameBridge.send("focusCrafting", null)
      }), []);
      const Ge = Ky(Ae.detail, Ne) ? Ae.detail : null,
        re = null !== Ge && !Ge.roomForOne,
        Qe = Ce.findIndex((ee => QH(ee) === QH(se))),
        ei = () => ge.current ? (0, CH.e)(ge.current) : null,
        ii = (0, be.useRef)(null),
        Hi = (0, be.useRef)(0);
      Hi.current++;
      const yi = Hi.current;
      (0, be.useEffect)((() => {
        const ee = ii.current;
        if (!ee || yi <= ee.afterRender) return;
        if (ii.current = null, ee.key !== Ie) return;
        const ie = ei();
        var He;
        null !== ie && void 0 !== ie && ie.press("primary") && !ee.lJ && (null === (He = ie.release) || void 0 === He || He.call(ie))
      }));
      const bi = ee => {
          const ie = {
            name: ee.name,
            Qo: ee.Qo
          };
          return {
            choose: () => {
              Ue(ie), (0, MH.r)(ge.current)
            },
            craft: () => {
              var ee, He;
              return Ue(ie), QH(ie) !== QH(se) ? (ii.current = {
                key: QH(ie),
                lJ: !0,
                afterRender: Hi.current
              }, !0) : null !== (ee = null === (He = ei()) || void 0 === He ? void 0 : He.press("primary")) && void 0 !== ee && ee
            },
            stopCraft: () => {
              var ee, ie;
              ii.current ? ii.current.lJ = !1 : null === (ee = ei()) || void 0 === ee || null === (ie = ee.release) || void 0 === ie || ie.call(ee)
            },
            refuse: () => {
              QH(ie) !== QH(se) && Ue(ie), te((ee => ee + 1))
            }
          }
        },
        Mi = () => {
          var ee, ie, He;
          (0, MH.r)(null !== (ee = null === (ie = Ee.current) || void 0 === ie || null === (He = ie.querySelector(".CraftableItems")) || void 0 === He ? void 0 : He.children[Qe]) && void 0 !== ee ? ee : null)
        },
        Ki = Ce.map(QH).join("|"),
        Ui = (0, be.useRef)(Ki);
      return (0, be.useEffect)((() => {
        Ui.current !== Ki && (Ui.current = Ki, de && Qe >= 0 && (0, vH.h)() && Mi())
      })), (0, oe.jsxs)("div", {
        className: "Craftables",
        children: [(0, oe.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: by(Re, Ye, qe)
        }), (0, oe.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, oe.jsx)(LH.d, {
            className: "CraftingSearch",
            placeholderText: qe("general:searchRecipes"),
            defaultValue: fe,
            maxLength: 100,
            onValueChange: ee => {
              Te(ee)
            },
            blurOnEnter: !0
          }, pe), 0 === Ce.length && Ve && (0, oe.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: qe("general:noRecipesMatchSearch")
          }), Ce.length > 0 && (0, oe.jsxs)(oe.Fragment, {
            children: [(0, oe.jsxs)("div", {
              ref: Ee,
              className: "CraftablesLeftSide",
              children: [(0, oe.jsx)(xH.c, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(Ce.map((ee => {
                  let {
                    name: ie,
                    Qo: He,
                    haveIngredients: ye
                  } = ee;
                  return {
                    name: ie,
                    Qo: He,
                    haveIngredients: ye
                  }
                })))],
                observing: Me,
                children: Ce.map((ee => {
                  const {
                    name: ie,
                    Qo: He,
                    haveIngredients: ye
                  } = ee, be = QH(ee);
                  return (0, oe.jsx)(ey, {
                    recipeId: be,
                    itemName: ie,
                    onClick: () => {
                      Ue({
                        name: ie,
                        Qo: He
                      })
                    },
                    isSelected: QH(se) === be,
                    haveIngredients: ye,
                    craftable: ye && !ce.has(ie) && !(QH(se) === be && re),
                    setHovered: ke,
                    padActions: bi(ee),
                    marked: ae.has(ie),
                    lock: ce.get(ie),
                    itemInfo: Ye
                  }, be)
                }))
              }), (0, oe.jsx)(yy, {
                selectedIdx: Qe,
                hidden: de && Oe.steppingSlots
              })]
            }), (0, oe.jsx)(Hy, {
              show: Me,
              recipeItem: se,
              detail: Ge,
              onCraft: Ke,
              setHovered: ke,
              craftButtonRef: ge,
              onPadBack: Mi,
              showPadShortcut: de,
              refusedCount: We,
              lock: ce.get(se.name),
              itemInfo: Ye
            })]
          })]
        })]
      })
    }
    var Fy = He(34897),
      Jy = He(3608),
      oy = He(2146),
      Ry = He(9413);
    class ky {
      constructor(ee, ie, He) {
        this.commit = ee, this.delayMs = ie, this.defers = He, this.pending = null, this.timer = void 0, this.lJ = !1, this.flush = () => {
          clearTimeout(this.timer);
          const ee = this.pending;
          null !== ee && (this.pending = null, this.commit(ee))
        }
      }
      type(ee) {
        this.pending = ee, clearTimeout(this.timer), this.lJ || this.defers() ? this.lJ || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(ee) {
        var ie;
        return null !== (ie = this.pending) && void 0 !== ie ? ie : ee
      }
      isHeld() {
        return this.lJ
      }
      setHeld(ee) {
        this.lJ = ee, ee || this.flush()
      }
    }

    function qy(ee) {
      return null === ee ? "creativeInventory:all" : `creativeInventory:${ee}`
    }

    function fy(ee) {
      let {
        category: ie
      } = ee;
      return null === ie ? (0, oe.jsx)(pe.e, {
        name: "layer-group"
      }) : (0, oe.jsx)(UH.c, {
        itemName: Fy.creativeItemCategoryIcons[ie],
        amount: 0
      })
    }

    function Ty(ee) {
      let {
        labelKey: ie,
        isSelected: He,
        onSelect: ye,
        setHovered: be,
        children: Me
      } = ee;
      return (0, oe.jsx)("div", {
        className: OH()("CreativeCategoryTab", {
          Selected: He
        }),
        onClick: ye,
        onPointerEnter: ee => {
          (0, RH.v)(ee) || be(!0, {
            name: {
              translationKey: ie
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          be(!1)
        },
        children: Me
      })
    }

    function py(ee) {
      let {
        categories: ie,
        selectedCategory: He,
        onSelect: ye
      } = ee;
      const {
        t: Me
      } = (0, he.v)(), [Ke, Ue] = (0, be.useState)(!1), Fe = (0, be.useRef)(null), Je = (0, be.useCallback)((() => {
        Ue(!1)
      }), []);
      return (0, oy.c)(Fe, Je), (0, oe.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: Fe,
        children: [(0, oe.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            Ue(!Ke)
          },
          children: [(0, oe.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, oe.jsx)(fy, {
              category: He
            })
          }), (0, oe.jsx)("span", {
            children: Me(qy(He))
          }), (0, oe.jsx)(pe.e, {
            name: Ke ? "caret-up" : "caret-down"
          })]
        }), Ke && (0, oe.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: ie.map((ee => (0, oe.jsxs)("div", {
            className: OH()("CreativeCategoryDropdownOption", {
              Selected: He === ee
            }),
            onClick: () => {
              ye(ee), Ue(!1)
            },
            children: [(0, oe.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, oe.jsx)(fy, {
                category: ee
              })
            }), (0, oe.jsx)("span", {
              children: Me(qy(ee))
            })]
          }, null !== ee && void 0 !== ee ? ee : "all")))
        })]
      })
    }
    const Xy = (0, be.memo)((function(ee) {
      let {
        creativeScrollDiv: ie,
        playerInvenNumSlots: He,
        getSetHoveringForIdx: ye,
        getPointerDownForIdx: Me,
        getPointerUpForIdx: Ke,
        creativeSearchVal: Ue,
        setCreativeSearchVal: Re,
        creativeCategory: ke,
        setCreativeCategory: qe,
        show: fe
      } = ee;
      const {
        t: Te
      } = (0, he.v)(), Xe = (0, Ze.k)("creativeVisibility"), {
        userContext: ze
      } = (0, Oe.b)(), Be = (0, Fe.i)("canUseDevCreativeItems"), Ee = ze.playerHasRank("developer") || !!Be, ge = (0, be.useMemo)((() => By("", Xe, Ee)), [Xe, Ee]);
      (0, be.useEffect)((() => {
        const ee = (0, Fy.creativeItemIds)();
        Je.gameBridge.send("prewarmCreativeIcons", ge.filter((ie => !(0, Fy.showOnlyInCreativeCategory)(ee[ie]))).slice(0, 63).map((ie => String(ee[ie]))))
      }), [ge]);
      const de = (0, be.useMemo)((() => {
          const ee = (0, Fy.creativeItemIds)(),
            ie = new Set(ge.map((ie => (0, Fy.creativeCategoryOf)(ee[ie]))));
          return Fy.creativeItemCategories.filter((ee => ie.has(ee)))
        }), [ge]),
        te = null !== ke && de.includes(ke) ? ke : null,
        we = (0, be.useMemo)((() => "" === Ue ? ge : By(Ue, Xe, Ee)), [ge, Ue, Xe, Ee]),
        De = (0, be.useMemo)((() => {
          const ee = (0, Fy.creativeItemIds)();
          return null !== te ? we.filter((ie => (0, Fy.creativeCategoryOf)(ee[ie]) === te)) : "" === Ue ? we.filter((ie => !(0, Fy.showOnlyInCreativeCategory)(ee[ie]))) : we
        }), [we, te, Ue]),
        Pe = ye();

      function Ae(ee) {
        qe(ee), ie.current.scrollTop = 0
      }
      const Ye = [null, ...de],
        {
          isTouchScreen: Ve
        } = (0, ve.m)(["isTouchScreen"]),
        ae = !Ve,
        ce = (0, be.useRef)(null),
        [xe, Le] = (0, be.useState)(0);
      (0, be.useEffect)((() => {
        const ee = ce.current;
        if (!ee) return;
        const ie = new ResizeObserver((ee => {
          Le(ee[0].contentRect.height)
        }));
        return ie.observe(ee), () => {
          ie.disconnect()
        }
      }), [ae]);
      const Ce = (0, be.useRef)(null),
        ue = (0, be.useCallback)((function ee() {
          "up" === Ce.current ? ie.current.scrollTop -= 10 : "down" === Ce.current && (ie.current.scrollTop += 10), Ce.current && requestAnimationFrame(ee)
        }), [ie]),
        me = (0, be.useCallback)((function(ee) {
          Ce.current || (Ce.current = ee, ue())
        }), [ue]);

      function le() {
        Ce.current = null
      }
      const Se = (0, be.useRef)({
        creativeSearchVal: Ue,
        setCreativeSearchVal: Re
      });
      Se.current = {
        creativeSearchVal: Ue,
        setCreativeSearchVal: Re
      };
      const [ne] = (0, be.useState)((() => new ky((ee => {
        Se.current.setCreativeSearchVal(ee)
      }), 250, KH.n))), je = ee => {
        var He;
        null === (He = ie.current) || void 0 === He || He.classList.toggle("CreativeItemSlotsStale", ee)
      };
      (0, We.f)(Ry.c, (ee => {
        ne.setHeld(ee), ee || je(!1)
      })), (0, be.useEffect)((() => ne.flush), [ne]);
      const se = (0, oe.jsx)(LH.d, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: Ue,
          maxLength: 1e4,
          onValueChange: (ee, ie) => {
            "" === ne.getTyped(Se.current.creativeSearchVal) && "" !== ee && qe(null), ne.type(ee), je(ne.isHeld())
          },
          onEnter: ne.flush,
          blurOnEnter: !0
        }),
        Ie = (0, oe.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [Ve && (0, oe.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, oe.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                me("up")
              },
              onPointerLeave: le,
              onPointerUp: le,
              children: (0, oe.jsx)(pe.e, {
                name: "arrow-up"
              })
            }), (0, oe.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                me("down")
              },
              onPointerLeave: le,
              onPointerUp: le,
              children: (0, oe.jsx)(pe.e, {
                name: "arrow-up"
              })
            })]
          }), (0, oe.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: ie,
            children: [0 === De.length && "" !== Ue && (0, oe.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: Te("general:noResults")
            }), (0, oe.jsx)(xH.c, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [Ue, te],
              observerRoot: "CreativeItemSlots",
              observing: fe,
              children: De.map((ee => {
                const ie = He + ee;
                return (0, oe.jsx)(PH.b, {
                  idx: ie,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: ye(ie),
                  pointerDown: Me(ie),
                  pointerUp: Ke(ie)
                }, ie)
              }))
            })]
          })]
        });
      return (0, oe.jsxs)("div", {
        className: OH()("CreativeItemSlotsWrapper", ae ? "WithRail" : "WithDropdown"),
        children: [ae && (0, oe.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: ce,
          style: {
            "--rail-height": xe > 0 ? `${xe}px` : void 0,
            "--tab-rows": Math.ceil(Ye.length / 2)
          },
          children: Ye.map((ee => (0, oe.jsx)(Ty, {
            labelKey: qy(ee),
            isSelected: te === ee,
            onSelect: () => {
              Ae(ee)
            },
            setHovered: Pe,
            children: (0, oe.jsx)(fy, {
              category: ee
            })
          }, null !== ee && void 0 !== ee ? ee : "all")))
        }), (0, oe.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, oe.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [se, !ae && (0, oe.jsx)(py, {
              categories: Ye,
              selectedCategory: te,
              onSelect: Ae
            })]
          }), Ie]
        })]
      })
    }));

    function zy(ee) {
      var ie;
      return null !== (ie = (0, Jy.g)(ee)) && void 0 !== ie ? ie : ""
    }

    function By(ee, ie, He) {
      let {
        publicLobby: ye,
        shownInGame: be
      } = ie;
      const Me = ee.toLowerCase(),
        Ke = (0, Fy.creativeItemIds)(),
        Ue = ee => {
          var ie;
          const Me = Ke[ee];
          return !(0, Fy.itemIsDisabled)(Me, ye, null === (ie = be[zy(Me)]) || void 0 === ie || ie, He)
        };
      if ("" === Me) return Ke.map(((ee, ie) => ie)).filter((ee => !(0, Fy.showOnlyInCreativeSearch)(Ke[ee]))).filter(Ue);
      const Fe = [];
      for (let Je = 0; Je < Ke.length; Je++) zy(Ke[Je]).toLowerCase().includes(Me) && Fe.push(Je);
      Fe.sort(((ee, ie) => {
        const He = zy(Ke[ee]).toLowerCase(),
          ye = zy(Ke[ie]).toLowerCase();
        return He.indexOf(Me) - ye.indexOf(Me)
      }));
      for (const [Je, oe] of(0, Fy.creativeAltNames)())
        for (const ee of oe)
          if (ee.toLowerCase().includes(Me)) {
            const ee = Ke.indexOf(Je);
            Fe.includes(ee) || Fe.push(ee)
          } return Fe.filter(Ue)
    }
    var Ey = He(37652),
      gy = He(610);

    function Oy(ee) {
      return ee > gy.n
    }

    function dy(ee) {
      const ie = ee / 2,
        He = [];
      for (let ye = 0; ye < ie / 6; ye++)
        for (let ee = 0; ee < 12; ee++) {
          const be = ee < 6 ? 0 : ie;
          He.push(be + 6 * ye + ee % 6)
        }
      return He
    }

    function Wy(ee) {
      let {
        numSlots: ie,
        renderSlot: He
      } = ee;
      const {
        t: ye
      } = (0, he.v)(), Me = (0, be.useRef)(null);
      var Ke;
      return Ke = Me, (0, be.useLayoutEffect)((() => {
        var ee;
        const ie = null === (ee = Ke.current) || void 0 === ee ? void 0 : ee.closest(".InvenBody");
        if (!ie) return;
        const He = () => {
          ie.style.zoom = "";
          const ee = parseFloat(getComputedStyle(document.documentElement).fontSize),
            He = window.innerWidth - 2 * ee,
            ye = ie.getBoundingClientRect().width;
          ye > He && (ie.style.zoom = "" + He / ye)
        };
        return He(), window.addEventListener("resize", He), () => {
          window.removeEventListener("resize", He), ie.style.zoom = ""
        }
      }), [Ke]), (0, oe.jsxs)("div", {
        ref: Me,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, oe.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: ye("doubleChest:title")
        }), (0, oe.jsx)("div", {
          className: "GridItemSlots",
          children: dy(ie).map((ee => He(ee)))
        })]
      })
    }

    function ty(ee) {
      let {
        di: ie,
        initialPasskey: He
      } = ee;
      const {
        t: ye
      } = (0, he.v)(), [Me, Ke] = (0, be.useState)(He), [Ue, Fe] = (0, be.useState)(He);
      (0, be.useEffect)((() => {
        Ke(He), Fe(He)
      }), [...ie]);
      return (0, oe.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, oe.jsx)("div", {
          className: "SmallTextBold",
          children: ye("ironChest:currentPasskey", {
            currentPasskey: Me.join("")
          })
        }), (0, oe.jsx)(tH, {
          className: "IronChestPasskeyEditor",
          SF: Ue,
          onPasskeyUpdated: Fe,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            Je.gameBridge.send("changeIronChestPasskey", {
              pos: [...ie],
              SF: [...Ue]
            }), Ke([...Ue])
          }
        })]
      })
    }

    function Zy(ee, ie) {
      return "Iron" === ee.type && ee.ironChest.ownerDbId === ie
    }

    function wy(ee) {
      let {
        variation: ie,
        canCraft: He,
        show: ye,
        creativeMounted: be,
        specialItemRef: Me,
        draggedInfo: Ke,
        getSetHovering: Ue,
        getPointerDownForIdx: Fe,
        getPointerUpForIdx: Je,
        enchantingTablePosition: Re,
        enchantingTableBlockName: ke,
        selectedCraftable: qe,
        dispatchSelectedCraftable: fe,
        creativeScrollDiv: Te,
        creativeSearchVal: pe,
        setCreativeSearchVal: Xe,
        creativeCategory: ze,
        setCreativeCategory: Be,
        onCraft: Ee
      } = ee;
      const {
        userContext: ge
      } = (0, Oe.b)(), {
        t: de
      } = (0, he.v)(), We = (0, Ze.g)("inventory", (ee => ee.chest)), te = (0, Ze.g)("inventory", (ee => ee.player.length)), we = (0, Ze.g)("inventory", (ee => ee.creative));
      if (0 === te) return null;
      let De, Pe;
      const Ae = ee => {
          const ie = te + ee;
          return (0, oe.jsx)(PH.b, {
            idx: ie,
            draggedInfo: Ke,
            specialItemInfo: Me.current,
            setHovered: Ue(ie),
            pointerDown: Fe(ie),
            pointerUp: Je(ie)
          }, ie)
        },
        Ye = We ? (0, Ey.c)(We.type) : null;
      if (Ye) De = OH()("InvenLeftSideChestCustom", Ye.className), Pe = (0, oe.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: Ye.render({
          di: We.pos,
          renderSlot: Ae
        })
      });
      else if (We) {
        const ee = We.pos,
          ie = "Iron" === We.type || "Moonstone" === We.type ? We.type : "Standard";
        De = `InvenLeftSideChest${ie}`;
        const He = Oy(We.numSlots);
        Pe = (0, oe.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [Zy(We, ge.whamm) && (0, oe.jsx)(ty, {
            di: ee,
            initialPasskey: We.ironChest.SF
          }), He && (0, oe.jsx)(Wy, {
            numSlots: We.numSlots,
            renderSlot: Ae
          }), !He && (0, oe.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, oe.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: de("Moonstone" === ie ? "item:moonstoneChest" : "Iron" === ie ? "item:ironChest" : "item:chest")
            }), (0, oe.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(We.numSlots).fill(0).map(((ee, ie) => Ae(ie)))
            })]
          })]
        })
      } else if (!we || ie && He)
        if (He && "Enchanting Table" === ie) De = `InvenLeftSide${(null!==ke&&void 0!==ke?ke:"").replace(/ /gi,"")}`, Pe = (0, oe.jsx)(AH, {
          specialItemInfo: Me.current,
          setHovered: Ue,
          pointerDown: Fe(qH.e),
          pointerUp: Je(qH.e),
          enchantingTablePosition: Re,
          enchantingTableBlockName: ke
        });
        else if (He && "Salvaging Table" === ie) De = "InvenLeftSideSalvagingTable", Pe = (0, oe.jsx)(VH, {
        specialItemInfo: Me.current,
        setSpecialItemInfo: ee => {
          Me.current = ee
        },
        setHovered: Ue,
        pointerDown: Fe(qH.e),
        pointerUp: Je(qH.e)
      });
      else {
        if (!He) return null;
        De = `InvenLeftSide${(null!==ie&&void 0!==ie?ie:"HandCrafting").replace(/ /gi,"")}`, Pe = (0, oe.jsx)(Uy, {
          show: ye,
          onCraft: Ee,
          craftingStation: ie,
          selectedCraftable: qe,
          dispatchSelectedCraftable: fe,
          setHovered: Ue()
        })
      } else De = "InvenLeftSideCreative", Pe = be ? (0, oe.jsx)(Xy, {
        creativeScrollDiv: Te,
        playerInvenNumSlots: te,
        getSetHoveringForIdx: Ue,
        getPointerDownForIdx: Fe,
        getPointerUpForIdx: Je,
        creativeSearchVal: pe,
        setCreativeSearchVal: Xe,
        creativeCategory: ze,
        setCreativeCategory: Be,
        show: ye
      }) : null;
      const Ve = !!We || He && !!ie;
      return (0, oe.jsx)("div", {
        className: `InvenLeftSide ${De}`,
        "data-pad-inventory-start": Ve ? "" : void 0,
        children: Pe
      })
    }
    var Dy = He(604),
      Py = He(20800),
      Ay = He(20806),
      Yy = He(20813);
    const Vy = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: He(20822)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: Ay
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: Yy
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: He(20829)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: Py
      }
    };

    function ay(ee) {
      const {
        sprite: ie,
        image: He
      } = Vy[ee];
      return si(ie, Si.j.ITEM, He)
    }

    function cy(ee) {
      let {
        draggedInfo: ie,
        specialItemInfo: He,
        craftFlyAnims: ye,
        getSetHovering: be,
        getPointerDownForIdx: Me,
        getPointerUpForIdx: Ke,
        variation: Ue,
        canCraft: Fe,
        isNewSlot: Je
      } = ee;
      const Re = (0, Ze.g)("inventory", (ee => ee.player.length));
      return 0 === Re ? null : (0, oe.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, oe.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(Dy.b.length).fill(0).map(((ee, ke) => {
            const qe = Re - Dy.b.length + ke;
            return (0, oe.jsx)(PH.b, {
              idx: qe,
              draggedInfo: ie,
              specialItemInfo: He,
              craftFlyHoldbackInfo: (0, kH.j)(ye, qe),
              setHovered: be(qe),
              pointerDown: Me(qe),
              pointerUp: Ke(qe),
              defaultIconB64: ay(Dy.b[ke]),
              variation: Fe ? Ue : void 0,
              showNewDot: Je(qe)
            }, qe)
          }))
        }), (0, oe.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(Re - 10 - Dy.b.length).fill(0).map(((ee, ke) => {
            const qe = Re - Dy.b.length - ke - 1;
            return (0, oe.jsx)(PH.b, {
              idx: qe,
              draggedInfo: ie,
              specialItemInfo: He,
              craftFlyHoldbackInfo: (0, kH.j)(ye, qe),
              setHovered: be(qe),
              pointerDown: Me(qe),
              pointerUp: Ke(qe),
              variation: Fe ? Ue : void 0,
              showNewDot: Je(qe)
            }, qe)
          }))
        })]
      })
    }
    var xy = He(37657),
      Ly = He(37666);

    function Cy(ee) {
      const {
        e: ie,
        idx: He
      } = ee, ye = (0, RH.m)(ee.readInventory(), He), be = (0, RH.s)(ie);
      He === qH.d ? function(ee, ie) {
        const {
          draggedInfoRef: He,
          removeItem: ye,
          removeDraggedInfoRef: be,
          close: Me
        } = ee;
        if (He.current) {
          const ee = ie && He.current.amount || 1;
          ye(He.current.idx, ee, !0) && (He.current.amount -= ee, He.current.amount <= 0 && be())
        } else ie && Me()
      }(ee, be) : He === qH.e ? function(ee, ie) {
        const {
          e: He,
          draggedInfoRef: ye,
          specialItemRef: be,
          moveAmtIntoSlot: Me,
          removeDraggedInfoRef: Ke
        } = ee;
        if ((0, RH.B)(He) && be.current) be.current = null;
        else if (ye.current && be.current && (ye.current.idx === be.current.idx || (0, Ly.d)(ye.current, be.current)) && ye.current.amount > 0 && be.current.amount > 0 && be.current.amount < dH.g.maxItemStackSize)
          if (ye.current.idx === be.current.idx) {
            if (ie) {
              const ee = Math.min(ye.current.amount, dH.g.maxItemStackSize - be.current.amount);
              be.current.amount += ee, ye.current.amount -= ee
            } else ye.current.amount--, be.current.amount++;
            ye.current.amount <= 0 && Ke()
          } else if (ie) {
          const ee = Math.min(ye.current.amount, dH.g.maxItemStackSize - be.current.amount);
          Me(be.current.idx, ee) && (be.current.amount += ee)
        } else {
          Me(be.current.idx, 1) && be.current.amount++
        } else if (ye.current && !be.current && !ie && ye.current.amount > 0) ye.current.amount--, be.current = {
          idx: ye.current.idx,
          name: ye.current.name,
          attributes: ye.current.attributes,
          amount: 1
        }, ye.current.amount <= 0 && Ke();
        else {
          const ee = ye.current;
          ye.current = be.current, be.current = ee
        }
      }(ee, be) : (0, RH.B)(ie) ? function(ee, ie) {
        var He, ye;
        const {
          idx: be,
          draggedInfoRef: Me,
          specialItemRef: Ke,
          canCraft: Ue,
          variation: Fe,
          swapSlots: Je,
          moveIntoSlots: oe
        } = ee;
        if (!ie) return;
        let Re = ie.amount;
        be === (null === (He = Me.current) || void 0 === He ? void 0 : He.idx) && (Re = Me.current.amount <= 0 ? 0 : ie.amount - Me.current.amount);
        be === (null === (ye = Ke.current) || void 0 === ye ? void 0 : ye.idx) && (Re = Ke.current.amount <= 0 ? 0 : ie.amount - Ke.current.amount);
        if (0 === Re) return;
        const ke = ee.readInventory(),
          qe = ke.player.length,
          fe = ke.chest,
          Te = qe - Dy.b.length,
          pe = () => {
            if (!(0, KH.n)()) return void oe(10, Te, be, Re);
            const ee = ee => {
              const He = (0, RH.m)(ke, ee);
              return He ? {
                amount: He.amount,
                stacksWithMoved: (0, Ly.d)(He, ie)
              } : null
            };
            for (const ie of ((ee, ie, He, ye, be) => {
                const Me = [];
                let Ke = ye;
                if (null !== ye) {
                  let Ue = 0;
                  for (let ye = ie; ye < He; ye++) {
                    const ie = ee(ye);
                    null !== ie && void 0 !== ie && ie.stacksWithMoved && null !== ie.amount && ie.amount > 0 && (Ue += Math.max(0, be - ie.amount))
                  }
                  const Fe = Math.min(ye, Ue);
                  if (Fe > 0 && (Me.push({
                      start: ie,
                      end: He,
                      amount: Fe
                    }), Ke = ye - Fe), Ke <= 0) return Me
                }
                for (let Ue = He - 1; Ue >= ie; Ue--)
                  if (null === ee(Ue)) {
                    Me.push({
                      start: Ue,
                      end: Ue + 1,
                      amount: Ke
                    });
                    break
                  } return Me
              })(ee, 10, Te, Re, dH.g.maxItemStackSize)) oe(ie.start, ie.end, be, ie.amount)
          };
        if (!Ue || "Enchanting Table" !== Fe && "Salvaging Table" !== Fe) {
          const He = (0, te.Hb)(ie.name),
            ye = He ? (0, te.Fb)(He) : null;
          if (!Dy.b.includes(He) || be !== ye && (0, RH.p)(ke, ee.itemInfo, ye, be))
            if (fe)
              if (be < qe) {
                var Xe, ze;
                const [ee, ie] = null !== (Xe = null === (ze = (0, Ey.c)(fe.type)) || void 0 === ze ? void 0 : ze.quickMoveRange) && void 0 !== Xe ? Xe : [0, fe.numSlots];
                oe(qe + ee, qe + ie, be, Re)
              } else oe(0, qe - Dy.b.length, be, Re);
          else ke.creative ? be < 10 ? pe() : be < qe ? oe(0, 10, be, Re) : oe(0, qe - Dy.b.length, be, null !== ie.amount ? dH.g.maxItemStackSize : null) : be < 10 ? pe() : oe(0, 10, be, Re);
          else be < qe - Dy.b.length || be >= qe ? Je(ye, be) : (oe(0, qe - Dy.b.length, ye, Re), JH.d.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else Ke.current = {
          idx: be,
          name: ie.name,
          attributes: ie.attributes,
          amount: null !== ie.amount ? Re : 0
        }
      }(ee, ye) : ee.draggedInfoRef.current ? function(ee, ie, He, ye) {
        const {
          draggedInfoRef: be,
          specialItemRef: Me,
          moveAmtIntoSlot: Ke,
          swapSlots: Ue,
          removeItem: Fe,
          removeDraggedInfoRef: Je
        } = ee, oe = ee.readInventory(), Re = be.current.idx;
        if (He && (ie === Re || (0, Ly.d)(be.current, He)) && be.current.amount > 0 && (0, RH.d)(He) > 0 && (He.amount < dH.g.maxItemStackSize || ie === Re)) ye ? He.amount + be.current.amount <= dH.g.maxItemStackSize || ie === Re ? Ke(ie, be.current.amount) : Ke(ie, dH.g.maxItemStackSize - He.amount) : Ke(ie, 1);
        else if (be.current.amount > 0 && !He) Ke(ie, ye ? be.current.amount : 1);
        else if (ye || He || 0 === be.current.amount)
          if (oe.creative && !oe.chest && ie >= oe.player.length) {
            const ee = 0 === be.current.amount ? 1 : be.current.amount;
            Fe(be.current.idx, ee, !1) && Je()
          } else {
            var ke;
            const He = (null === (ke = Me.current) || void 0 === ke ? void 0 : ke.idx) === ie;
            if (Ue(ie, be.current.idx)) {
              const ye = ee.readInventory(),
                Ke = (0, RH.m)(ye, Re),
                Ue = !ye.chest && ye.creative && be.current.idx >= ye.player.length;
              if (Ke && be.current.idx !== ie && !Ue) {
                let ee = (0, RH.d)(Ke);
                He && (ee -= Me.current.amount), be.current = He && 0 === ee ? null : {
                  idx: be.current.idx,
                  name: Ke.name,
                  attributes: Ke.attributes,
                  amount: ee
                }
              } else Je()
            }
          }
        else Ke(ie, 1)
      }(ee, He, ye, be) : function(ee, ie, He, ye) {
        var be;
        const {
          draggedInfoRef: Me,
          specialItemRef: Ke
        } = ee;
        if (!He) return;
        let Ue = (0, RH.d)(He);
        const Fe = (null === (be = Ke.current) || void 0 === be ? void 0 : be.idx) === ie;
        Fe && (Ue -= Ke.current.amount);
        ye || (Ue = Math.ceil(Ue / 2));
        Me.current = Fe && 0 === Ue ? null : {
          idx: ie,
          name: He.name,
          attributes: He.attributes,
          amount: Ue
        }
      }(ee, He, ye, be)
    }
    var vy = He(2591);

    function uy(ee, ie, He) {
      return Math.round((ie + ee) * He) / He - ie
    }
    const my = new WeakMap;

    function ly(ee) {
      const ie = window.devicePixelRatio || 1,
        He = my.get(ee);
      if (He && He.pixelRatio === ie && He.width === window.innerWidth && He.height === window.innerHeight) return He;
      let ye = 0,
        be = 0;
      const Me = ee.offsetParent;
      if (Me) {
        const ee = Me.getBoundingClientRect();
        ye = ee.left + Me.clientLeft, be = ee.top + Me.clientTop
      }
      const Ke = {
        left: ye,
        top: be,
        pixelRatio: ie,
        width: window.innerWidth,
        height: window.innerHeight,
        halfRem: .5 * (0, vy.Z)(document)
      };
      return my.set(ee, Ke), Ke
    }

    function Sy(ee, ie, He) {
      const {
        left: ye,
        top: be,
        pixelRatio: Me
      } = ly(ee);
      return `translate(${uy(ie,ye,Me)}px, ${uy(He,be,Me)}px)`
    }

    function ny(ee) {
      const {
        halfRem: ie
      } = ly(ee);
      return Sy(ee, ie, ie)
    }

    function jy(ee, ie) {
      return !!ie && ie.name === ee.name
    }

    function sy() {
      return Je.gameBridge.latest("inventory")
    }

    function Iy(ee, ie, He) {
      return Je.gameBridge.send("removeInventoryItem", {
        slot: ee,
        amount: ie,
        drop: He
      })
    }

    function hy(ee) {
      return (0, RH.i)(ee, Je.gameBridge.latest("itemInfo"), Je.gameBridge.latest("stationItems").enchantable)
    }

    function Ny(ee) {
      let {
        show: ie,
        close: He,
        canCraft: ye,
        variation: Me,
        inventoryItemsMoveable: Ke,
        setCraftFlyAnims: Ue
      } = ee;
      (0, Ze.k)("itemInfo");
      const [Fe, oe] = (0, be.useState)(null), [Re, ke] = (0, be.useState)(null), [qe, fe] = (0, be.useState)(!1), Te = (0, be.useRef)(null), pe = (0, be.useRef)(null), Xe = (0, be.useRef)(null), ze = (0, be.useRef)(null), [Be, Ee] = (0, be.useReducer)((ee => ee + 1), 0), ge = (0, be.useCallback)((() => {
        ie && Ee()
      }), [ie, Ee]), Oe = (0, be.useCallback)((() => {
        pe.current = null, ce.current = null, ge()
      }), [ge]), de = (0, be.useCallback)(((ee, ie) => {
        Ue((He => He.map((He => "ingredient" === He.kind ? He : He.RJ === ee ? {
          ...He,
          RJ: ie,
          to: (0, RH.e)(ie)
        } : He.RJ === ie ? {
          ...He,
          RJ: ee,
          to: (0, RH.e)(ee)
        } : He))))
      }), [Ue]), We = (0, be.useCallback)(((ee, ie) => {
        const He = Ce.current;
        if (He.x = ee, He.y = ie, Te.current) !ve.current.isTouch || ve.current.itemBeingDragged && !ce.current ? (Te.current.style.transform = Sy(Te.current, He.x, He.y), fe(ve.current.isTouch && !ce.current)) : (Te.current.style.transform = ny(Te.current), fe(!0));
        else if (ze.current) {
          const He = ze.current;
          let ye = ee + 10,
            be = ie + 10;
          const Me = He.offsetWidth,
            Ke = He.offsetHeight;
          ye + Me > window.innerWidth && (ye = ee - Me - 10), be + Ke > window.innerHeight && (be = ie - Ke - 10), ye < 0 && (ye = 0), be < 0 && (be = 0), ze.current.style.transform = `translate(${ye}px, ${be}px)`
        }
      }), []), we = (0, be.useCallback)((ee => (ie, He, ye) => {
        if (oe(ie && void 0 !== ee ? ee : null), ie) {
          if (void 0 === ee && !He) return void(0, xy.c)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== ee) {
            var be;
            const ie = sy();
            let He;
            if (He = ee === qH.e ? Xe.current ? (0, RH.m)(ie, Xe.current.idx) : null : (0, RH.m)(ie, ee), !He) return void ke(null);
            if ((null === (be = Xe.current) || void 0 === be ? void 0 : be.idx) === ee) {
              if (0 === (0, RH.d)(He) - Xe.current.amount) return void ke(null)
            }
            ke(hy(He))
          } else ke({
            name: He.name,
            desc: He.desc,
            fontStyle: "normal"
          })
        } else ke(null);
        ye && setTimeout((() => {
          We(ye.pageX, ye.pageY)
        }), 0)
      }), [We]), De = (0, be.useCallback)(((ee, ie) => {
        const He = Je.gameBridge.send("moveInventoryItem", {
          from: pe.current.idx,
          to: ee,
          amount: ie
        });
        return He ? (pe.current.amount -= ie, pe.current.amount <= 0 && Oe()) : console.error("moveInventoryItem failed"), He
      }), [Oe]), Pe = (0, be.useCallback)(((ee, ie) => {
        const He = Xe.current,
          ye = null === He || void 0 === He ? void 0 : He.idx;
        He && (He.idx = function(ee, ie, He) {
          return ee === ie ? He : ee === He ? ie : ee
        }(ye, ee, ie));
        const be = Je.gameBridge.send("swapInventorySlots", {
          a: ee,
          b: ie
        });
        return be ? de(ee, ie) : He && (He.idx = ye), be
      }), [de]), Ae = (0, be.useCallback)(((ee, ie, He, ye) => {
        const be = Je.gameBridge.send("quickMoveInventoryItem", {
          slot: He,
          start: ee,
          end: ie,
          amount: ye
        });
        null !== be && de(He, be)
      }), [de]), Ye = (0, be.useCallback)(((ee, ie) => {
        var be;
        ((ee, ie, He) => {
          const ye = ee - (He - Dy.b.length);
          return !(!ie || ye < 0 || ye >= Dy.b.length) && (0, te.Hb)(ie) !== Dy.b[ye]
        })(ie, null === (be = pe.current) || void 0 === be ? void 0 : be.name, sy().player.length) || (Cy({
          e: ee,
          idx: ie,
          readInventory: sy,
          itemInfo: Je.gameBridge.latest("itemInfo"),
          draggedInfoRef: pe,
          specialItemRef: Xe,
          moveAmtIntoSlot: De,
          swapSlots: Pe,
          moveIntoSlots: Ae,
          removeItem: Iy,
          removeDraggedInfoRef: Oe,
          close: He,
          canCraft: ye,
          variation: Me
        }), ge())
      }), [ye, He, De, Ae, Oe, Pe, Me, ge]), Ve = (0, be.useRef)(0), ae = (0, be.useRef)(null), ce = (0, be.useRef)(null), xe = (0, be.useRef)(null), Le = (0, be.useRef)(new Set), Ce = (0, be.useRef)({
        x: 0,
        y: 0
      }), ve = (0, be.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), ue = (0, be.useCallback)((() => (xe.current = null, ve.current.itemBeingDragged = !1, clearTimeout(ae.current), !!ce.current && (ce.current = null, ge(), !0))), [ge]);
      (0, be.useEffect)((() => {
        ue(), Le.current.clear()
      }), [ie]);
      const me = ee => void 0 !== ee && (Le.current.has(ee) || null !== xe.current && ee !== xe.current),
        le = ee => {
          ve.current.isTouch = (0, RH.v)(ee)
        },
        Se = (0, be.useCallback)((ee => ie => {
          const ye = (0, RH.v)(ie);
          if (ye || We(ie.pageX, ie.pageY), Ke)
            if (me(ie.pointerId)) void 0 !== ie.pointerId && Le.current.add(ie.pointerId);
            else {
              if (le(ie), ye) {
                Ve.current = ie.timeStamp, ve.current.itemBeingDragged = !0, xe.current = ie.pointerId;
                const He = (0, RH.m)(sy(), ee);
                if (He && He.amount && He.amount > 0) {
                  const He = ie.pageX,
                    ye = ie.pageY,
                    be = Ce.current.x,
                    Me = Ce.current.y;
                  clearTimeout(ae.current), ae.current = setTimeout((() => {
                    if (pe.current && pe.current.idx === ee && (Math.abs(He - Ce.current.x) < 20 && Math.abs(ye - Ce.current.y) < 20 || be === Ce.current.x && Me === Ce.current.y) && ve.current.itemBeingDragged) {
                      const ee = sy(),
                        He = ee.creative && !ee.chest && pe.current.idx >= dH.g.numInvenSlots && null !== (0, RH.m)(ee, pe.current.idx).amount ? dH.g.maxItemStackSize : pe.current.amount;
                      ce.current = {
                        initTouchX: ie.pageX,
                        initTouchY: ie.pageY,
                        maxAmount: He
                      }, pe.current.amount = Math.ceil(pe.current.amount / 2), Te.current.style.transform = ny(Te.current), fe(!0), ge()
                    }
                  }), 500)
                }
              }
              Ye(ie, ee)
            }
          else ee === qH.d && (0, RH.s)(ie) && He()
        }), [We, Ye, Ke, He, ge]),
        ne = (0, be.useCallback)((ee => ee => {
          if (me(ee.pointerId)) return;
          const ie = (0, RH.v)(ee);
          if (le(ee), !ue()) {
            if (ie && pe.current && ee.timeStamp - Ve.current > 150) {
              const ie = document.elementFromPoint(ee.clientX, ee.clientY);
              if (null !== ie) {
                const He = ie.getAttribute("data-inven-idx");
                null !== He ? Ye(ee, parseInt(He)) : ie.classList.contains("InventoryBackgroundScreen") && Ye(ee, -1)
              }
            }
            We(ee.pageX, ee.pageY)
          }
        }), [We, Ye, ue]);
      (0, be.useEffect)((() => {
        let ee;
        const He = ["pointerup", "pointercancel"],
          ye = ee => {
            Le.current.has(ee.pointerId) ? setTimeout((() => {
              Le.current.delete(ee.pointerId)
            }), 0) : ee.pointerId === xe.current && setTimeout((() => {
              xe.current === ee.pointerId && ue()
            }), 0)
          };
        if (ie) {
          for (const ee of He) document.addEventListener(ee, ye, !0);
          if (!ve.current.isTouch) {
            const ee = Ce.current;
            We(ee.x, ee.y)
          }
          ee = ee => {
            ee.preventDefault(), me(ee.pointerId) || (le(ee), We(ee.pageX, ee.pageY), ce.current && ee.pointerId === xe.current && (ee => {
              if (!pe.current) return ce.current = null, void ge();
              const {
                initTouchX: ie,
                maxAmount: He
              } = ce.current, ye = (ee.pageX - ie) * ce.current.maxAmount / 160, be = Math.ceil(He / 2) + Math.ceil(ye);
              pe.current.amount = Math.min(He, Math.max(1, be)), ge()
            })(ee))
          }, document.addEventListener("pointermove", ee, !0)
        }
        return () => {
          document.removeEventListener("pointermove", ee, !0);
          for (const ee of He) document.removeEventListener(ee, ye, !0)
        }
      }));
      const je = (0, be.useCallback)((() => {
          if (pe.current) {
            const ee = (0, RH.m)(sy(), pe.current.idx);
            (!jy(pe.current, ee) || ee.amount < pe.current.amount) && Oe()
          }
        }), [Oe]),
        se = (0, be.useCallback)((() => {
          const ee = pe.current;
          if (ee) {
            const ie = (0, RH.m)(sy(), ee.idx);
            jy(ee, ie) && (ee.attributes = ie.attributes)
          }
        }), []);
      return {
        draggedDomRef: Te,
        draggedInfoRef: pe,
        specialItemRef: Xe,
        hoverInfoDomRef: ze,
        longHoldSplitInfoRef: ce,
        currHoveredIdx: Fe,
        currHoveredDisplayInfo: Re,
        displayDraggedItemName: qe,
        forceRerenderIfVisible: ge,
        removeDraggedInfoRef: Oe,
        checkDraggedItemConsistencyWithInven: je,
        refreshDraggedAttributes: se,
        swapSlots: Pe,
        getPointerDownForIdx: Se,
        getPointerUpForIdx: ne,
        getSetHovering: we,
        setCurrHoveredDisplayInfo: ke,
        moveFollowerTo: We
      }
    }
    class Gy {
      constructor(ee) {
        this.snapshot = [], this.newSlots = new Set, this.update(ee, !1)
      }
      update(ee, ie) {
        const He = ee.map((ee => {
          var ie;
          return ee ? {
            name: ee.name,
            amount: null !== (ie = ee.amount) && void 0 !== ie ? ie : 1
          } : null
        }));
        He.forEach(((ee, He) => {
          const ye = this.snapshot[He],
            be = (null === ee || void 0 === ee ? void 0 : ee.name) !== (null === ye || void 0 === ye ? void 0 : ye.name);
          (!ee || be || ee.amount < ye.amount) && this.newSlots.delete(He), ie && ee && (be || ee.amount > ye.amount) && this.newSlots.add(He)
        })), this.snapshot = He
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(ee) {
        return this.newSlots.has(ee)
      }
    }
    const ry = (ee, ie, He) => ({
      button: ie,
      shiftKey: He,
      pageX: ee.clientX,
      pageY: ee.clientY,
      clientX: ee.clientX,
      clientY: ee.clientY,
      pointerType: "mouse"
    });

    function Qy(ee) {
      const [ie, He] = (0, be.useState)(ee);
      return ee && !ie && He(!0), (0, be.useEffect)((() => {
        if (ie) return;
        let ee = !0;
        const ye = () => {
            ee && (ee = !1, He(!0))
          },
          be = "function" === typeof window.requestIdleCallback,
          Me = be ? window.requestIdleCallback(ye, {
            timeout: 2e3
          }) : void 0,
          Ke = setTimeout(ye, be ? 2e3 : 1e3);
        return () => {
          ee = !1, clearTimeout(Ke), void 0 !== Me && window.cancelIdleCallback(Me)
        }
      }), [ie]), ie
    }
    var eb = He(3179);
    const ib = (0, be.memo)((function(ee) {
      var ie;
      let {
        show: He,
        onOpen: ye,
        onClose: Me,
        variation: Ue
      } = ee;
      const Re = (0, be.useRef)(null),
        ke = (0, be.useRef)(null),
        qe = function(ee) {
          const [ie, He] = (0, be.useState)(!0), [ye, Me] = (0, be.useState)(!1), Ke = (0, be.useRef)(null), Ue = (0, be.useRef)(null), Je = (0, Fe.i)("_shield"), oe = (0, be.useRef)(null), Re = (0, Fe.i)("_health"), ke = (0, be.useRef)(null);

          function qe(ee) {
            const ie = Date.now() + ee;
            ie < Ue.current || (He(!1), clearTimeout(Ke.current), Ue.current = ie, Ke.current = setTimeout((() => {
              He(!0)
            }), ee))
          }
          return (0, be.useEffect)((() => {
            qe(pH);
            const ee = fH.b.subscribe("requestingPlayVideoAd", (() => {
              qe(pH)
            }));
            return () => {
              clearTimeout(Ke.current), fH.b.unsubscribe(ee)
            }
          }), []), (0, be.useEffect)((() => {
            (oe.current > Je || ke.current > Re) && qe(6e4), oe.current = Je, ke.current = Re
          }), [Je, Re]), (0, be.useEffect)((() => {
            let ie = null;
            return ee ? ie = setTimeout((() => {
              Me(!0)
            }), 250) : Me(!1), () => {
              clearTimeout(ie)
            }
          }), [ee]), ie && ye
        }(He);
      (0, We.j)(bH.c, null);
      const Te = (0, bH.h)(),
        pe = Te.some((ee => ee.panel)),
        {
          userContext: Xe
        } = (0, Oe.b)(),
        ze = (0, Ze.g)("inventory", (ee => {
          const ie = ee.chest;
          return null !== ie && (Oy(ie.numSlots) || Zy(ie, Xe.whamm))
        })),
        Be = Qy(He),
        Ee = Qy(He),
        [ge, de] = (0, be.useState)([]),
        we = (0, be.useCallback)((ee => {
          de((ie => ie.filter((ie => ie.id !== ee))))
        }), []),
        De = (0, be.useRef)(null),
        Pe = (0, be.useRef)(0),
        Ae = (0, be.useCallback)((() => {
          De.current && (Pe.current = De.current.scrollTop), Me()
        }), [Me]),
        Ye = (0, Fe.i)("inventoryItemsMoveable"),
        Ve = (0, Fe.i)("canCraft"),
        {
          clientEscMenuOptions: ce
        } = (0, ve.m)(["clientEscMenuOptions"]),
        xe = (0, be.useRef)(null);
      xe.current || (xe.current = new Gy(Je.gameBridge.latest("inventory").player));
      const Le = xe.current,
        {
          draggedDomRef: Ce,
          draggedInfoRef: ue,
          specialItemRef: me,
          hoverInfoDomRef: le,
          longHoldSplitInfoRef: Se,
          currHoveredIdx: ne,
          currHoveredDisplayInfo: je,
          displayDraggedItemName: se,
          forceRerenderIfVisible: Ie,
          removeDraggedInfoRef: he,
          checkDraggedItemConsistencyWithInven: Ne,
          refreshDraggedAttributes: Ge,
          swapSlots: re,
          getPointerDownForIdx: Qe,
          getPointerUpForIdx: ei,
          getSetHovering: ii,
          setCurrHoveredDisplayInfo: Hi,
          moveFollowerTo: yi
        } = Ny({
          show: He,
          close: Ae,
          canCraft: Ve,
          variation: Ue,
          inventoryItemsMoveable: Ye,
          setCraftFlyAnims: de
        });
      (0, be.useEffect)((() => {
        const ee = !He && null !== Je.gameBridge.latest("inventory").chest;
        if (ee && Je.gameBridge.send("closeChest", null), He || (Le.clearMarks(), ii(null)(!1)), ee) {
          JH.d.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [He]), (0, Ze.e)("chestToggled", (ee => {
        if (ee ? ye() : He && Ae(), ee) {
          JH.d.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const bi = (0, Ai.f)();
      (0, Ze.e)("inventory", (ee => {
        let {
          player: ie
        } = ee;
        var ye, be, Me;
        (Le.update(ie, !He && bi.shown), me.current) && (me.current = (be = me.current, Me = null !== (ye = ie[me.current.idx]) && void 0 !== ye ? ye : null, jy(be, Me) ? (be.attributes = Me.attributes, null !== Me.amount && be.amount > Me.amount && (be.amount = Me.amount), be) : null));
        Ge(), null !== ne && ii(ne)(!0), Ie()
      })), (0, be.useEffect)((() => (Je.gameBridge.send("setInventoryOpen", He), () => {
        Je.gameBridge.send("setInventoryOpen", !1)
      })), [He]);
      const Mi = (ee, ie) => {
        if (ee === qH.e) return void(ee => {
          const ie = me.current;
          if (!ie || null === (0, RH.m)(Je.gameBridge.latest("inventory"), ie.idx)) return;
          const He = ee ? Math.max(ie.amount, 1) : 1,
            ye = ie.amount - He;
          if (!Je.gameBridge.send("removeInventoryItem", {
              slot: ie.idx,
              amount: He,
              drop: !0
            })) return;
          const be = me.current;
          be && (be.amount = Math.min(be.amount, ye), be.amount <= 0 && (me.current = null)), Ie()
        })(ie);
        const He = null === ee ? null : (0, RH.m)(Je.gameBridge.latest("inventory"), ee);
        if (null !== He) {
          var ye, be, Me;
          const Ke = ie && null !== (ye = He.amount) && void 0 !== ye ? ye : 1;
          Je.gameBridge.send("removeInventoryItem", {
            slot: ee,
            amount: Ke,
            drop: !0
          }), ee === (null === (be = ue.current) || void 0 === be ? void 0 : be.idx) && (ue.current.amount -= Ke, ue.current.amount <= 0 && he(), Ie()), ee === (null === (Me = me.current) || void 0 === Me ? void 0 : Me.idx) && (me.current = null, Ie())
        }
      };
      (0, Ze.e)("inventoryDropRequested", (ee => {
        He && ne !== qH.e && Mi(ne, ee)
      }));
      const Ki = (ee, ie) => {
        let He = ie;
        if (ie === qH.e) {
          if (!me.current) return;
          He = me.current.idx
        }
        const ye = re(ee, He);
        if (ye && ue.current && (ue.current.idx === He ? ue.current.idx = ee : ue.current.idx === ee && (ue.current.idx = He)), ye && ie === qH.e) {
          const ee = (0, RH.m)(Je.gameBridge.latest("inventory"), He);
          me.current = ee ? {
            idx: He,
            name: ee.name,
            attributes: ee.attributes,
            amount: (0, RH.d)(ee)
          } : null
        }
        Ie()
      };
      (0, Ze.e)("numberKeyPressed", (ee => {
        null !== ne && He && Ki(ee - 1, ne)
      })), (0, be.useEffect)((() => {
        He || (me.current = null, he(), Hi(null))
      }), [He, he, Hi, me]);
      const Ui = me.current;
      (0, be.useEffect)((() => {
        ne === qH.e && ii(qH.e)(!0)
      }), [Ui, ne, ii]);
      const Fi = () => {
        Ne(), Ge(), Ie()
      };
      (0, Ze.e)("chestRefreshed", Fi), (0, Ze.e)("inventorySynced", Fi);
      const [Ji, oi] = (0, be.useState)(new Map), Ri = null !== (ie = Ji.get(Ue)) && void 0 !== ie ? ie : null, ki = (ee, ie) => {
        oi((He => {
          const ye = He.get(ee);
          return ye && ye.name === ie.name && ye.Qo === ie.Qo ? He : new Map(He).set(ee, ie)
        }))
      };
      (0, We.f)("craftingRecipesEdited", (() => {
        Ie()
      })), (0, We.f)(IH.c, (ee => {
        let {
          variation: ie,
          itemName: He
        } = ee;
        ki(ie, {
          name: He,
          Qo: 0
        })
      }));
      const [qi, fi] = (0, be.useState)(null), [Ti, Xi] = (0, be.useState)(null);
      (0, Ze.e)("enchantingTableOpened", (ee => {
        let {
          position: ie,
          blockName: He
        } = ee;
        fi(ie), Xi(He)
      }));
      const [zi, Bi] = (0, be.useState)(""), [Ei, gi] = (0, be.useState)(null);
      (0, be.useEffect)((() => {
        He && De.current && (De.current.scrollTop = Pe.current)
      }), [He]);
      return (ee => {
        const ie = (0, be.useRef)(ee);
        ie.current = ee, (0, be.useEffect)((() => {
          if (!ee.show) return;
          const He = (ee, He, ye, be) => {
              const {
                getPointerDownForIdx: Me,
                getPointerUpForIdx: Ke
              } = ie.current;
              Me(ee)(ry(He, ye, be)), Ke(ee)(ry(He, ye, be))
            },
            ye = {
              primary: (ee, ie) => {
                He(ee, ie, 0, !1)
              },
              secondary: (ee, ie) => {
                He(ee, ie, 2, !1)
              },
              quickMove: (ee, ie) => {
                He(ee, ie, 0, !0)
              },
              dropHeld: (ee, He) => {
                ie.current.getPointerDownForIdx(qH.d)(ry(He, ee ? 0 : 2, !1))
              },
              dropSlot: (ee, He) => {
                ie.current.dropFromIdx(ee, He)
              },
              swapWithHotbar: (ee, He) => {
                ie.current.swapWithHotbar(ee, He)
              },
              cancel: () => {
                ie.current.removeDraggedInfoRef()
              },
              isHolding: () => !!ie.current.draggedInfoRef.current,
              hasItemAt: ee => {
                const {
                  draggedInfoRef: He,
                  specialItemRef: ye
                } = ie.current;
                if (ee === qH.e) return !!ye.current;
                const be = (0, RH.m)(Je.gameBridge.latest("inventory"), ee);
                return !!be && (0, PH.e)(ee, (0, RH.d)(be), [He.current, ye.current]).shown
              },
              hover: (ee, He) => {
                const {
                  moveFollowerTo: ye,
                  getSetHovering: be
                } = ie.current;
                ye(He.clientX, He.clientY), be(null !== ee && void 0 !== ee ? ee : void 0)(null !== ee, void 0, {
                  pageX: He.clientX,
                  pageY: He.clientY
                })
              },
              moveTo: ee => {
                ie.current.moveFollowerTo(ee.clientX, ee.clientY)
              },
              close: () => {
                ie.current.close()
              }
            };
          return (0, MH.o)(ye)
        }), [ee.show])
      })({
        show: He,
        close: Ae,
        draggedInfoRef: ue,
        specialItemRef: me,
        getPointerDownForIdx: Qe,
        getPointerUpForIdx: ei,
        getSetHovering: ii,
        moveFollowerTo: yi,
        removeDraggedInfoRef: he,
        dropFromIdx: Mi,
        swapWithHotbar: Ki
      }), (0, be.useEffect)((() => {
        fe.h.yR("inventoryDraggedItemUpdated", {
          draggedInfo: ue.current,
          specialItemInfo: me.current,
          setHovered: ii,
          pointerDown: Qe,
          pointerUp: ei,
          variation: Ve ? Ue : void 0,
          craftFlyAnims: ge
        })
      })), (0, oe.jsxs)(ae.d, {
        show: He,
        style: {
          touchAction: He ? "none" : void 0
        },
        children: [ue.current && (0, oe.jsx)(zH, {
          draggedInfo: ue.current,
          toAddRef: Ce
        }), ue.current && se && (0, oe.jsx)(BH, {
          className: "DraggedInvenItemName",
          displayInfo: hy(ue.current),
          domRef: null
        }), !ue.current && je && (0, oe.jsx)(BH, {
          displayInfo: je,
          domRef: le
        }), Se.current && ue.current && (0, oe.jsx)(EH, {
          info: Se.current,
          draggedInfo: ue.current
        }), ge.map((ee => (0, oe.jsx)(kH.d, {
          anim: ee,
          onComplete: we
        }, ee.id))), (0, oe.jsx)(Ke.e, {
          show: He,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: Ae,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: Qe(qH.d),
          pointerUp: ei(qH.d),
          doGameplayStartStopOnShow: !0
        }), Be && (0, oe.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, oe.jsx)("div", {
            ref: Re,
            className: "InventoryAdOuter",
            children: (0, eb.n)() && (0, oe.jsx)(oH.c, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: Re
              },
              verticalAlign: "start",
              showing: He && qe,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, oe.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, oe.jsxs)("div", {
              className: OH()("Inventory", {
                WithGameButtons: Te.length > 0,
                WithPanelButtons: pe,
                WideChestOpen: ze
              }),
              children: [(0, oe.jsx)("div", {
                className: "InventoryFiller"
              }), (0, oe.jsx)(FH, {
                show: He,
                buttons: Te
              }), (0, oe.jsxs)("div", {
                className: "InvenBody",
                children: [(0, oe.jsx)(wy, {
                  variation: Ue,
                  canCraft: Ve,
                  show: He,
                  creativeMounted: Ee,
                  specialItemRef: me,
                  draggedInfo: ue.current,
                  getSetHovering: ii,
                  getPointerDownForIdx: Qe,
                  getPointerUpForIdx: ei,
                  enchantingTablePosition: qi,
                  enchantingTableBlockName: Ti,
                  selectedCraftable: Ri,
                  dispatchSelectedCraftable: ee => {
                    ki(Ue, ee)
                  },
                  creativeScrollDiv: De,
                  creativeSearchVal: zi,
                  setCreativeSearchVal: Bi,
                  creativeCategory: Ei,
                  setCreativeCategory: gi,
                  onCraft: function(ee, ie) {
                    let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (Ne(), (ee || He.length > 0) && de((ie => {
                        const ye = [...ie],
                          be = ie.filter((ee => "ingredient" === ee.kind)).length;
                        for (const ee of He.slice(0, Math.max(0, 24 - be))) ye.push({
                          id: (0, kH.g)(),
                          ...ee,
                          to: ee.to
                        });
                        return ee && ye.push({
                          id: (0, kH.g)(),
                          ...ee,
                          to: (0, RH.e)(ee.RJ)
                        }), ye
                      })), null !== ie) {
                      var ye;
                      const ee = Je.gameBridge.latest("inventory");
                      (0, te.Hb)(null === (ye = (0, RH.m)(ee, ie)) || void 0 === ye ? void 0 : ye.name) ? Qe(ie)({
                        button: 0,
                        shiftKey: !0
                      }): re(ie, ee.selectedSlot)
                    }
                  }
                }), (0, oe.jsx)(cy, {
                  draggedInfo: ue.current,
                  specialItemInfo: me.current,
                  craftFlyAnims: ge,
                  getSetHovering: ii,
                  getPointerDownForIdx: Qe,
                  getPointerUpForIdx: ei,
                  variation: Ue,
                  canCraft: Ve,
                  isNewSlot: ee => ce.showNewItemIndicator && Le.isNew(ee)
                })]
              })]
            }), (0, oe.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, oe.jsx)("div", {
                ref: ke,
                className: "InventoryAd",
                children: (0, oe.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var Hb = He(1425),
      yb = He(125);
    const bb = (0, be.memo)((function(ee) {
      let {
        show: ie,
        onOpen: He,
        onClose: ye
      } = ee;
      const Me = (0, be.useRef)(0),
        Ue = () => (0, Hb.i)() && !(0, Hb.p)() && Me.current <= 2;
      ie = Ue() && ie;
      const Fe = () => {
        Me.current++, ye()
      };
      (0, We.f)("ctrlCrouchWithoutFullscreen", (() => {
        Ue() && He()
      })), (0, We.f)("displaymodeFullscreenChange", (ee => {
        ie && ee && Fe()
      }));
      const Je = "crazygames" === yb.siteUsed;
      return (0, oe.jsx)(Ke.e, {
        close: Fe,
        escDoesExit: !0,
        show: ie,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, oe.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, oe.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), Je && (0, oe.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, oe.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, oe.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!Je && (0, oe.jsx)(qe.m, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, Hb.w)(), Fe()
              },
              children: (0, oe.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, oe.jsx)(qe.G, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                Fe()
              },
              children: (0, oe.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var Mb = He(2901),
      Kb = He(2922),
      Ub = He(1340),
      Fb = He(3987),
      Jb = He(1342),
      ob = He(2938),
      Rb = He(3998),
      kb = He(4001);

    function qb(ee, ie) {
      return (0, ob.h)(!0, ee, ie) ? () => {
        !async function(ee) {
          await Fb.b.refresh();
          const {
            data: ie,
            failed: He
          } = Fb.b.getState();
          if (null === ie || He) return;
          const ye = Fb.b.getExclusion(ee);
          if ("blocked" === ye) return;
          const be = null === ye;
          Ub.NotificationProvider.showCustomPopup({
            body: ie => {
              const He = He => ({
                text: Rb.j[He].text,
                onClick: () => {
                  ie(), (0, kb.g)(He, ee, null)
                }
              });
              return (0, oe.jsx)(Jb.k, {
                title: be ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: ee
                  }
                },
                secondary: be ? He("ignore") : void 0,
                confirm: He("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: ie
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(ee)
      } : null
    }
    He(2915);
    const fb = (0, be.memo)((function(ee) {
      let {
        show: ie,
        onOpen: He,
        onClose: ye
      } = ee;
      const [Me, Ue] = (0, be.useState)(""), [Fe, Re] = (0, be.useState)(""), [ke, qe] = (0, be.useState)(null), [fe, Te] = (0, be.useState)(null), pe = (0, Ze.k)("hiddenPlayerNames"), Xe = {
        kind: "worldCodeLine",
        onSubmit: (ee, ie) => {
          ye(), Je.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: fe,
            policy: ee,
            details: ie
          })
        }
      }, ze = {
        kind: "player",
        shownPlayerName: (0, ii.h)(Me, pe),
        onSubmit: (ee, ie) => {
          ye(), (0, Kb.b)({
            playerId: Fe,
            playerName: Me,
            chatMsgId: fe,
            policyId: ee,
            details: ie,
            onAccepted: qb(Me, pe)
          })
        }
      };
      return (0, We.f)("OpenReportMenu", (ee => {
        let {
          playerEId: ie,
          playerName: ye,
          nF: be,
          serverChatMsgId: Me
        } = ee;
        Re(ie), Ue(ye), qe(be), Te(Me), He()
      })), (0, oe.jsx)(Ke.e, {
        show: ie,
        close: ye,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, oe.jsx)("div", {
          className: "ReportPanel",
          children: ie && (0, oe.jsx)(Mb.e, {
            reported: null === Fe ? Xe : ze,
            chatMessage: ke,
            inGame: !0,
            onCancel: ye
          })
        })
      })
    }));
    var Tb = He(37669),
      pb = He(2909);
    const Xb = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      zb = (0, be.memo)((function(ee) {
        var ie, He;
        let {
          show: ye,
          onOpen: Me,
          onClose: Ue
        } = ee;
        const {
          t: Fe
        } = (0, he.v)(), [Re, ke] = (0, be.useState)(null), [fe, Te] = (0, be.useState)(0);
        (0, We.f)("OpenDiscordReportBox", (ee => {
          Je.gameBridge.send("requestDiscordReportKey", ee), ke(null), Te(0), Me()
        })), (0, We.f)("setDiscordReportKey", ke);
        const pe = ye && null === Re;
        (0, be.useEffect)((() => {
          if (!pe) return;
          const ee = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), ke({
              Yy: null,
              Vy: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(ee)
          }
        }), [pe]);
        const Xe = null !== (ie = null === Re || void 0 === Re ? void 0 : Re.Yy) && void 0 !== ie ? ie : null,
          ze = null !== (He = null === Re || void 0 === Re ? void 0 : Re.Vy) && void 0 !== He ? He : null;
        return (0, oe.jsx)(Ke.e, {
          show: ye,
          close: Ue,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, oe.jsx)("div", {
            className: "ReportPanel",
            children: (0, oe.jsxs)(Jb.k, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === ze ? "report:discordReportDescription" : void 0,
              confirm: null === ze ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(Tb.c, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === ze ? "general:cancel" : "general:ok",
                onClick: Ue
              },
              padStartsOn: "cancel",
              children: [null !== ze && (0, oe.jsx)(pb.b, {
                children: Fe(Xb[ze])
              }), null === ze && (0, oe.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, oe.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== Xe && void 0 !== Xe ? Xe : Fe("report:loadingReportKey")
                }), (0, oe.jsx)(qe.c, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(Xe).catch((ee => {
                      console.error("Failed to copy report key:", ee)
                    })), Te(Date.now())
                  },
                  disabled: Date.now() - fe < 1e3 || !Xe,
                  children: Date.now() - fe < 1e3 ? Fe("general:copied") : Fe("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var Bb = He(1246);
    const Eb = {
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
      gb = (0, be.memo)((function(ee) {
        let {
          show: ie,
          onOpen: He,
          onClose: ye
        } = ee;
        const [Me, Ue] = (0, be.useState)(null), Fe = (0, be.useRef)(0), Re = (0, be.useRef)(null), {
          t: ke
        } = (0, he.v)();
        (0, We.f)("EditCustomLobbyBlock", (ee => {
          let {
            pos: ie
          } = ee;
          Ue(ie), null !== ie && He(), Re.current.scrollTo(0, Fe.current)
        }));
        const qe = ee => {
          Je.gameBridge.send("setCustomLobbyBlock", {
            pos: Me,
            blockName: ee
          }), ye()
        };
        return (0, oe.jsx)(Ke.e, {
          className: "CustomLobbyBlockEditorOuter",
          close: ye,
          escDoesExit: !0,
          show: ie,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, oe.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: Re,
            onScroll: () => {
              Fe.current = Re.current.scrollTop
            },
            children: (0, oe.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(Eb).map((ee => {
                let [ie, He] = ee;
                return (0, oe.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, oe.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: ke(ie)
                  }), (0, oe.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(He).map((ee => {
                      let [ie, {
                        tooltip: He,
                        blocks: ye
                      }] = ee;
                      return (0, oe.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, oe.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [ke(ie), (0, oe.jsx)(se.c, {
                            hoverInfo: ke(He),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, oe.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: ye.map((ee => (0, oe.jsx)(Ob, {
                            blockName: ee,
                            selectBlock: qe
                          }, ee)))
                        })]
                      }, ie)
                    }))
                  })]
                }, ie)
              }))
            })
          })
        })
      })),
      Ob = (0, be.memo)((function(ee) {
        var ie;
        let {
          blockName: He,
          selectBlock: ye
        } = ee;
        const be = (0, Jy.c)(He),
          Me = null !== (ie = void 0 === be ? void 0 : (0, Fy.displayNameOf)(be)) && void 0 !== ie ? ie : He,
          Ke = void 0 === be ? void 0 : (0, Fy.descriptionOf)(be);
        return (0, oe.jsx)(se.g, {
          tooltipInner: (0, oe.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, oe.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, oe.jsx)(de.e, {
                text: Me
              })
            }), Ke && (0, oe.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, oe.jsx)(de.e, {
                text: Ke
              })
            })]
          }),
          children: (0, oe.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => ye(He),
            children: (0, oe.jsx)(UH.c, {
              itemName: He,
              amount: 1
            })
          })
        }, He)
      }));
    var db = He(2722),
      Wb = He(4585),
      tb = He(34919);

    function Zb() {
      const ee = (0, Ze.k)("itemInfo");
      return (0, be.useMemo)((() => function(ee) {
        return {
          getDefaultItemStat(ie, He) {
            var ye;
            const be = ee[ie];
            return "description" === He ? null === be || void 0 === be ? void 0 : be.description : null !== (ye = null === be || void 0 === be ? void 0 : be.displayName) && void 0 !== ye ? ye : ie
          }
        }
      }(ee)), [ee])
    }
    const wb = (0, be.memo)((function(ee) {
        var ie, He, ye, Me, Ue, Fe, Je, Re, ke, qe, fe, Te, Xe, ze, Be, Ee, ge, Oe, de, te, Ze, we, De;
        let {
          togglePointerLock: Pe,
          show: Ae,
          onOpen: Ye,
          onClose: Ve
        } = ee;
        const {
          t: ae
        } = (0, he.v)(), ce = Zb(), xe = (0, be.useRef)(null), Le = (0, be.useRef)(Wb.d.MobHungerLevel.Hungry), Ce = (0, be.useRef)(null), ve = (0, db.c)(), ue = (0, be.useRef)(null), me = (0, be.useRef)(null), le = xe.current;
        (0, be.useEffect)((() => {
          if (!Ae) return;
          const ee = tb.i.openPet(ue.current);
          return me.current = ee, () => {
            ee.close(), me.current = null
          }
        }), [Ae]), (0, be.useEffect)((() => {
          Ae && le && me.current.show(function(ee) {
            var ie;
            let {
              mobType: He,
              mobSettings: ye
            } = ee;
            return {
              mobType: He,
              variation: null !== (ie = ye.variation) && void 0 !== ie ? ie : "default",
              metaInfo: ye.metaInfo,
              tamed: !(0, gy.P)(ye.ownerDbId)
            }
          }(le))
        }), [Ae, le]), (0, be.useEffect)((() => {
          const ee = () => {
            var ee;
            const ie = Wb.d.getMobHungerLevel(null === (ee = xe.current) || void 0 === ee ? void 0 : ee.mobSettings.petInfo.lastFedAt);
            if (ie !== Le.current && (Le.current = ie, ve()), Ce.current) {
              var He;
              const ee = Date.now(),
                ie = Wb.d.getNextStateAt(null === (He = xe.current) || void 0 === He ? void 0 : He.mobSettings.petInfo.lastFedAt);
              let ye = Math.floor((ie - ee) / 1e3),
                be = "";
              if (ye > 3600) {
                be += Math.floor(ye / 60 / 60).toString().padStart(2, "0"), be += ":", ye %= 3600
              }
              const Me = ye % 60;
              be += Math.floor(ye / 60).toString().padStart(2, "0"), be += ":", be += Me.toString().padStart(2, "0"), Ce.current.textContent = be
            }
          };
          ee();
          const ie = setInterval(ee, 250);
          return () => {
            clearInterval(ie)
          }
        }), [le, ve]), (0, We.f)("showPetUi", (ee => {
          let {
            mobType: ie,
            mobSettings: He
          } = ee;
          xe.current = {
            mobType: ie,
            mobSettings: He
          }, Ae || Ye()
        }));
        const Se = null === (ie = xe.current) || void 0 === ie ? void 0 : ie.mobSettings.health,
          ne = null === (He = xe.current) || void 0 === He ? void 0 : He.mobSettings.maxHealth,
          je = Wb.d.getFriendshipLevelInfo(null !== (ye = null === (Me = xe.current) || void 0 === Me ? void 0 : Me.mobSettings.petInfo.friendshipPoints) && void 0 !== ye ? ye : 0);
        return (0, oe.jsx)(Ke.e, {
          className: "PetUIOuter",
          close: Ve,
          escDoesExit: !0,
          show: Ae,
          togglePointerLock: Pe,
          forcePointerUnlock: Ae,
          globallyUniqueKey: "PetUI",
          children: (0, oe.jsx)("div", {
            className: "PetUI",
            children: (0, oe.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, oe.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, oe.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (Ue = null === (Fe = xe.current) || void 0 === Fe ? void 0 : Fe.mobSettings.name) && void 0 !== Ue ? Ue : "Your Pet"
                }), (0, oe.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: ue
                })]
              }), (0, oe.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, gy.P)(null === (Je = xe.current) || void 0 === Je ? void 0 : Je.mobSettings.petInfo.friendshipPoints) && (0, oe.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, oe.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: ae("mobAiPlugin:friendshipTitle")
                  }), (0, oe.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: Wb.d.getIconsFromFriendshipPoints(null !== (Re = xe.current.mobSettings.petInfo.friendshipPoints) && void 0 !== Re ? Re : 0).map(((ee, ie) => (0, oe.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, oe.jsx)(UH.c, {
                        itemName: ee,
                        amount: 1
                      })
                    }, ie)))
                  }), (0, oe.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, oe.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, oe.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${je.totalPointsForNextLevel>0?Math.max(je.pointsIntoCurrentLevel/je.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, oe.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: Wb.d.getFriendshipBarText(je)
                      })]
                    })
                  })]
                }), (0, oe.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, oe.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: ae("mobAiPlugin:hungerTitle")
                  }), (0, oe.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: Wb.d.hungerLevelIcons[Le.current].map(((ee, ie) => (0, oe.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, oe.jsx)(UH.c, {
                        itemName: ee,
                        amount: 1
                      })
                    }, ie)))
                  }), (0, oe.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [ae(Wb.d.hungerLevelTranslations[Le.current].translationKey), Le.current !== Wb.d.MobHungerLevel.Starving && !(0, gy.P)(null === (ke = xe.current) || void 0 === ke ? void 0 : ke.mobSettings.petInfo.lastFedAt) && (0, oe.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [ae("mobAiPlugin:nextFeedIn", {
                        state: ae(Wb.d.hungerLevelTranslations[Le.current + 1].translationKey)
                      }), ":", " ", (0, oe.jsx)("span", {
                        ref: Ce
                      })]
                    })]
                  })]
                }), (0, oe.jsx)(se.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, oe.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: ae("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, oe.jsxs)("div", {
                    className: OH()("PetUIQuickStatsItem", {
                      Disabled: (0, gy.P)(Se) || (0, gy.P)(ne)
                    }),
                    children: [(0, oe.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, oe.jsx)(UH.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, oe.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, gy.P)(Se) || (0, gy.P)(ne) ? "" : (0, oe.jsxs)(oe.Fragment, {
                        children: [Math.ceil(Se), (0, oe.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(ne)]
                        })]
                      })
                    })]
                  })
                }), (0, oe.jsx)(se.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, oe.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: ae("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, oe.jsxs)("div", {
                    className: OH()("PetUIQuickStatsItem", {
                      Disabled: (0, gy.P)(null === (qe = xe.current) || void 0 === qe ? void 0 : qe.mobSettings.attackDamage) || xe.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, oe.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, oe.jsx)(UH.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, oe.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (fe = xe.current) || void 0 === fe ? void 0 : fe.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, oe.jsx)(se.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, oe.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: ae("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, oe.jsxs)("div", {
                    className: OH()("PetUIQuickStatsItem", {
                      Disabled: (0, gy.P)(null === (Te = xe.current) || void 0 === Te ? void 0 : Te.mobSettings.secondaryAttackDamage) || xe.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, oe.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, oe.jsx)(UH.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, oe.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Xe = xe.current) || void 0 === Xe ? void 0 : Xe.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, oe.jsx)(se.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, oe.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: ae("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, oe.jsxs)("div", {
                    className: OH()("PetUIQuickStatsItem", {
                      Disabled: (0, gy.P)(null === (ze = xe.current) || void 0 === ze ? void 0 : ze.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, oe.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, oe.jsx)(UH.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, oe.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (Be = null === (Ee = xe.current) || void 0 === Ee || null === (ge = Ee.mobSettings.baseRunningSpeed) || void 0 === ge ? void 0 : ge.toFixed(2)) && void 0 !== Be ? Be : ""
                    })]
                  })
                }), (0, oe.jsx)(se.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, oe.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: ae("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, oe.jsxs)("div", {
                    className: OH()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (Oe = xe.current) || void 0 === Oe ? void 0 : Oe.mobSettings.metaInfo)
                    }),
                    children: [(0, oe.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, oe.jsx)(UH.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, oe.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (de = xe.current) || void 0 === de ? void 0 : de.mobSettings.metaInfo) ? (0, oe.jsx)(pe.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, gy.P)(null === (te = xe.current) || void 0 === te ? void 0 : te.mobSettings.tameInfo) && (0, oe.jsxs)(oe.Fragment, {
                  children: [(0, oe.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, oe.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, oe.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, oe.jsx)(Pb, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: Wb.d.feedTextColours[Wb.d.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, oe.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, oe.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: xe.current.mobSettings.petInfo.superlikedFoodKnown ? (0, oe.jsx)(Db, {
                            food: xe.current.mobSettings.petInfo.superlikedFood
                          }) : (0, oe.jsx)(Pb, {
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
                    }), (0, oe.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, oe.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, oe.jsx)(Pb, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: Wb.d.feedTextColours[Wb.d.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, oe.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Ze = xe.current.mobSettings.tameInfo.likedFoods) || void 0 === Ze ? void 0 : Ze.filter((ee => !xe.current.mobSettings.petInfo.superlikedFoodKnown || ee !== xe.current.mobSettings.petInfo.superlikedFood)).map((ee => (0, oe.jsx)(Db, {
                          food: ee
                        }, ee)))
                      })]
                    }), (0, oe.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, oe.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, oe.jsx)(Pb, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: Wb.d.feedTextColours[Wb.d.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, oe.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (we = xe.current.mobSettings.tameInfo.neutralFoods) || void 0 === we ? void 0 : we.map((ee => (0, oe.jsx)(Db, {
                          food: ee
                        }, ee)))
                      })]
                    }), (0, oe.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, oe.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, oe.jsx)(Pb, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: Wb.d.feedTextColours[Wb.d.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, oe.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (De = xe.current.mobSettings.tameInfo.dislikedFoods) || void 0 === De ? void 0 : De.map((ee => (0, oe.jsx)(Db, {
                          food: ee
                        }, ee)))
                      })]
                    })]
                  }), xe.current.mobSettings.tameInfo.levelUpBonuses && (0, oe.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: Wb.d.MAX_LEVEL + 1
                    }).map(((ee, ie) => {
                      const He = ie;
                      if (0 === He) return null;
                      const ye = xe.current.mobSettings.tameInfo.levelUpBonuses[He],
                        be = Wb.d.getBonusDisplayInfo(ce, xe.current.mobSettings, xe.current.mobType, ye);
                      return (0, oe.jsxs)("div", {
                        className: OH()("PetUIFeedDropContainer", {
                          Selected: He === Wb.d.getFriendshipLevelInfo(xe.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, oe.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: He
                          }).map(((ee, ie) => (0, oe.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, oe.jsx)(UH.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${He}-${ie}`)))
                        }), (0, oe.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: be && (0, oe.jsx)(Pb, {
                            icon: be.icon,
                            displayName: be.displayName,
                            description: be.description
                          })
                        })]
                      }, He)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      Db = (0, be.memo)((function(ee) {
        let {
          food: ie,
          includeDescription: He = !1
        } = ee;
        const ye = Zb(),
          be = ye.getDefaultItemStat(ie, "displayName"),
          Me = ye.getDefaultItemStat(ie, "description");
        return (0, oe.jsx)(Pb, {
          icon: ie,
          displayName: be,
          description: He ? Me : null
        })
      })),
      Pb = (0, be.memo)((function(ee) {
        let {
          icon: ie,
          displayName: He,
          description: ye,
          tintColor: be,
          className: Me = "PetUIFoodItem"
        } = ee;
        return (0, oe.jsx)(se.g, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, oe.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, oe.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, oe.jsx)(de.e, {
                text: He
              })
            }), ye && (0, oe.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, oe.jsx)(de.e, {
                text: ye
              })
            })]
          }),
          children: (0, oe.jsx)("div", {
            className: Me,
            children: (0, oe.jsx)(UH.c, {
              itemName: ie,
              amount: 1,
              tintColor: be
            })
          })
        })
      }));
    var Ab = He(4142),
      Yb = He(1083),
      Vb = He(1189),
      ab = He(2523),
      cb = He(37689),
      xb = He(1033),
      Lb = He(2425);

    function Cb(ee) {
      let {
        peers: ie
      } = ee;
      const [He, ye] = (0, be.useState)(null), Me = (0, Ze.k)("players");
      return (0, oe.jsx)("div", {
        className: "CodeEditorPresence",
        children: ie.map((ee => {
          var ie, be;
          const Ke = null !== (ie = null === (be = Me.byId[ee.playerId]) || void 0 === be ? void 0 : be.cosmetics) && void 0 !== ie ? ie : {};
          return (0, oe.jsxs)("div", {
            className: OH()("PresenceIcon", {
              Viewer: !ee.isEditor
            }),
            style: {
              backgroundColor: ee.colour
            },
            onMouseEnter: () => {
              ye(ee.playerId)
            },
            onMouseLeave: () => {
              ye(null)
            },
            children: [(0, oe.jsx)(Lb.c, {
              cosmetics: Ke
            }), He === ee.playerId && (0, oe.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: ee.colour
              },
              children: ee.playerName
            })]
          }, ee.playerId)
        }))
      })
    }
    var vb = He(656),
      ub = He(37675),
      mb = He(37367),
      lb = He(37696);

    function Sb(ee) {
      const ie = ee.split("/"),
        He = [];
      for (let ye = 1; ye < ie.length; ye++) He.push(ie.slice(0, ye).join("/"));
      return He
    }

    function nb(ee) {
      return ee.slice(ee.lastIndexOf("/") + 1)
    }
    var jb = He(37682);
    const sb = (0, be.memo)((function(ee) {
      var ie;
      let {
        files: He,
        activePath: ye,
        canEdit: Me,
        directoryLinked: Ke,
        pluginNames: Ue,
        activePluginName: Fe,
        activePluginFile: Je,
        onSelect: Re,
        onSelectPlugin: ke,
        onCreate: fe,
        onRename: Te,
        onRenameFolder: Xe,
        onDelete: ze,
        onToggleDirectorySync: Be,
        schematics: Ee,
        onManageSchematic: ge
      } = ee;
      const {
        t: Oe
      } = (0, he.v)(), de = null !== (ie = (0, cb.c)(He)) && void 0 !== ie ? ie : Vb.j, We = Object.keys(He), [te, Ze] = (0, be.useState)((() => new Set)), we = function(ee, ie, He) {
        const ye = {
          folders: new Map,
          files: []
        };
        for (const Ke of ee) {
          if (Ke === ie) continue;
          let ee = ye;
          for (const ie of Sb(Ke)) {
            let He = ee.folders.get(ie);
            He || (He = {
              folders: new Map,
              files: []
            }, ee.folders.set(ie, He)), ee = He
          }
          ee.files.push(Ke)
        }
        const be = [];
        ee.includes(ie) && be.push({
          kind: "file",
          path: ie,
          name: nb(ie),
          depth: 0
        });
        const Me = (ee, ie) => {
          const ye = [...ee.folders.entries()].sort(((ee, ie) => {
            let [He] = ee, [ye] = ie;
            return He.localeCompare(ye)
          }));
          for (const [Ke, Ue] of ye) {
            const ee = He.has(Ke);
            be.push({
              kind: "folder",
              path: Ke,
              name: nb(Ke),
              depth: ie,
              collapsed: ee
            }), ee || Me(Ue, ie + 1)
          }
          ee.files.sort(((ee, ie) => ee.localeCompare(ie)));
          for (const He of ee.files) be.push({
            kind: "file",
            path: He,
            name: nb(He),
            depth: ie
          })
        };
        return Me(ye, 0), be
      }(We, de, te);
      (0, be.useEffect)((() => {
        Ze((ee => {
          const ie = new Set(ee);
          let He = !1;
          for (const be of Sb(ye)) He = ie.delete(be) || He;
          return He ? ie : ee
        }))
      }), [ye]);
      const De = We.length >= li.D,
        Pe = (ee, ie) => {
          if (ee.length > ab.u) return `Path must be at most ${ab.u} characters`;
          if (!(0, ab.s)(ee)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === ee) return "index.d.ts cannot be the world-code entry";
          const ye = !!ie && (0, cb.f)(ie, ee);
          if (ie && (0, cb.i)(ie) && !ye) return `Cannot rename ${ie} (only swapping ${Vb.j} and ${Vb.k} is allowed)`;
          if (ee in He) return "A file with that path already exists";
          if ((0, cb.i)(ee) && !ye) {
            if ((ee === Vb.j ? Vb.k : Vb.j) in He) return `World code cannot have both ${Vb.j} and ${Vb.k}`
          }
          return null
        },
        Ae = ee => {
          Ub.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === ee ? void 0 : `${ee}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: `FileTreePathPopup ${jb.c}`,
            validate: ee => Pe(ee)
          }).getResult().then((ee => {
            "notificationTornDown" !== ee && null !== ee && "submit" === ee.type && fe(ee.value)
          }))
        },
        Ye = ee => {
          Ub.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: ee,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: `FileTreePathPopup ${jb.c}`,
            validate: ie => ie === ee ? "That is already the file's path" : Pe(ie, ee)
          }).getResult().then((ie => {
            "notificationTornDown" !== ie && null !== ie && "submit" === ie.type && Te(ee, ie.value)
          }))
        },
        Ve = ee => {
          const ie = ee => ee.replace(/\/+$/, "");
          Ub.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: ee,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: `FileTreePathPopup ${jb.c}`,
            validate: He => {
              const ye = ie(He);
              if (ye === ee) return "That is already the folder's path";
              for (const [ie, be] of(0, cb.q)(We, ee, ye)) {
                const ee = Pe(be, ie);
                if (null !== ee) return ee
              }
              return null
            }
          }).getResult().then((He => {
            "notificationTornDown" !== He && null !== He && "submit" === He.type && Xe(ee, ie(He.value))
          }))
        },
        ae = ee => {
          Ub.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: ee
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel",
            middleScreenPopupContainerClassName: jb.c
          }).getResult().then((ie => {
            !0 === ie && ze(ee)
          }))
        };
      return (0, oe.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, oe.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, oe.jsx)("span", {
            children: "Files"
          }), Me && !De && (0, oe.jsx)(qe.p, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              Ae()
            },
            children: (0, oe.jsx)(pe.e, {
              name: "plus"
            })
          })]
        }), (0, oe.jsxs)("div", {
          className: "FileTreeList",
          children: [we.map((ee => {
            const ie = ee.path;
            if ("folder" === ee.kind) return (0, oe.jsx)(Nb, {
              path: ie,
              name: ee.name,
              depth: ee.depth,
              collapsed: ee.collapsed,
              onToggle: () => {
                var ee;
                ee = ie, Ze((ie => {
                  const He = new Set(ie);
                  return He.delete(ee) || He.add(ee), He
                }))
              },
              canCreate: Me && !De,
              canRename: Me,
              onCreate: Ae,
              onRename: Ve
            }, `folder:${ie}`);
            const be = (0, cb.i)(ie),
              Ke = Vb.j in He && Vb.k in He,
              Ue = !be || Ke,
              Je = null === Fe && ie === ye;
            return (0, oe.jsx)(rb, {
              path: ie,
              label: ee.name,
              depth: ee.depth,
              isActive: Je,
              canRename: Me,
              onSelect: Re,
              onRename: Ye,
              onDelete: ae,
              canDelete: Ue && Me
            }, ie)
          })), (0, oe.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, oe.jsxs)("span", {
              children: ["Schematics (", Object.keys(Ee).length, "/", lb.f, ")"]
            }), Me && (0, oe.jsx)(qe.p, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(Ee).length >= lb.f,
              onClick: () => {
                ge("")
              },
              children: (0, oe.jsx)(pe.e, {
                name: "plus"
              })
            })]
          }), Object.keys(Ee).sort().map((ee => (0, oe.jsx)(rb, {
            path: ee,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: ge
          }, ee))), Ue.length > 0 && (0, oe.jsxs)(oe.Fragment, {
            children: [(0, oe.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, oe.jsx)("span", {
                children: "Plugins"
              })
            }), Ue.map((ee => {
              var ie;
              const He = ub.h[ee],
                ye = Object.keys(null !== (ie = null === He || void 0 === He ? void 0 : He.files) && void 0 !== ie ? ie : {
                  "index.ts": ""
                }).sort(((ee, ie) => "index.ts" === ee ? -1 : "index.ts" === ie ? 1 : ee.localeCompare(ie)));
              return (0, oe.jsxs)("div", {
                children: [(0, oe.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, cb.z)(ee)
                }), ye.map((ie => (0, oe.jsx)(rb, {
                  path: ie,
                  nested: !0,
                  isActive: Fe === ee && Je === ie,
                  canRename: !1,
                  onSelect: () => {
                    ke(ee, ie)
                  },
                  canDelete: !1
                }, ie)))]
              }, ee)
            }))]
          })]
        }), (0, oe.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, oe.jsx)(qe.c, {
            className: "FileTreeFooterButton",
            onClick: Be,
            children: Oe(Ke ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function Ib(ee) {
      return ee > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": ee
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function hb(ee) {
      let {
        depth: ie
      } = ee;
      return (0, oe.jsx)(oe.Fragment, {
        children: Array.from({
          length: ie
        }, ((ee, ie) => (0, oe.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": ie
          }
        }, ie)))
      })
    }

    function Nb(ee) {
      let {
        path: ie,
        name: He,
        depth: ye,
        collapsed: be,
        onToggle: Me,
        canCreate: Ke,
        canRename: Ue,
        onCreate: Fe,
        onRename: Je
      } = ee;
      const Re = [];
      Ke && Re.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          Fe(ie)
        }
      }), Ue && Re.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          Je(ie)
        }
      });
      const ke = Ib(ye);
      return (0, oe.jsxs)("div", {
        className: OH()("FileTreeItem FileTreeFolder", ke.className),
        style: ke.style,
        children: [(0, oe.jsx)(hb, {
          depth: ye
        }), (0, oe.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !be,
          onClick: Me,
          children: [(0, oe.jsx)(pe.e, {
            className: "FileTreeFolderCaret",
            name: be ? "caret-right" : "caret-down"
          }), (0, oe.jsx)(pe.e, {
            className: "FileTreeFolderIcon",
            name: be ? "folder" : "folder-open"
          }), He]
        }), (0, oe.jsx)(Gb, {
          path: ie,
          actions: Re
        })]
      })
    }

    function Gb(ee) {
      let {
        path: ie,
        actions: He
      } = ee;
      const ye = (0, be.useRef)(null);
      return 0 === He.length ? null : (0, oe.jsxs)("div", {
        ref: ye,
        className: "FileTreeItemActions",
        children: [(0, oe.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${ie}`,
          children: (0, oe.jsx)(pe.e, {
            name: "ellipsis"
          })
        }), (0, oe.jsx)(mb.d, {
          triggerElementRef: ye,
          options: He
        })]
      })
    }

    function rb(ee) {
      let {
        path: ie,
        label: He = ie,
        depth: ye = 0,
        isActive: be,
        canRename: Me,
        onSelect: Ke,
        onRename: Ue,
        onDelete: Fe,
        canDelete: Je,
        nested: Re
      } = ee;
      const ke = [];
      Me && Ue && ke.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          Ue(ie)
        }
      }), Je && Fe && ke.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          Fe(ie)
        }
      });
      const qe = Ib(ye);
      return (0, oe.jsxs)("div", {
        className: OH()("FileTreeItem", qe.className, {
          Active: be,
          Nested: Re
        }),
        style: qe.style,
        children: [(0, oe.jsx)(hb, {
          depth: ye
        }), (0, oe.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: He === ie ? void 0 : ie,
          onClick: () => {
            Ke(ie)
          },
          children: He
        }), (0, oe.jsx)(Gb, {
          path: ie,
          actions: ke
        })]
      })
    }
    async function Qb(ee) {
      const ie = (0, cb.c)(ee);
      if (!ie || "" === ee[ie].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: ye
      } = await Promise.all([He.e(608), He.e(609)]).then((() => He(44675)));
      return (0, ub.e)(ye(ee))
    }
    var eM = He(37699);

    function iM(ee, ie) {
      const He = Object.keys(ee),
        ye = Object.keys(ie);
      if (He.length !== ye.length) return !1;
      for (const be of He)
        if (!(be in ie) || ee[be] !== ie[be]) return !1;
      return !0
    }

    function HM(ee, ie) {
      const He = [],
        ye = [],
        be = [];
      for (const Me of Object.keys(ie)) Me in ee ? ee[Me] !== ie[Me] && be.push(Me) : He.push(Me);
      for (const Me of Object.keys(ee)) Me in ie || ye.push(Me);
      return He.sort(), ye.sort(), be.sort(), {
        creates: He,
        deletes: ye,
        updates: be
      }
    }

    function yM(ee, ie) {
      var He;
      const ye = {
          ...ee
        },
        be = (0, cb.c)(ie),
        Me = (0, cb.c)(ye);
      if (Vb.j in ye && Vb.k in ye) {
        const ee = null !== be && void 0 !== be ? be : Vb.k,
          He = ee === Vb.j ? Vb.k : Vb.j;
        var Ke;
        if (!(ee in ye)) ye[ee] = null !== (Ke = ie[ee]) && void 0 !== Ke ? Ke : "";
        return delete ye[He], ye
      }
      var Ue;
      return be && !(be in ye) ? (Me || (ye[be] = null !== (Ue = ie[be]) && void 0 !== Ue ? Ue : ""), ye) : (Me || be || (ye[Vb.j] = null !== (He = ye[Vb.j]) && void 0 !== He ? He : "", delete ye[Vb.k]), ye)
    }

    function bM(ee, ie) {
      const He = (0, cb.c)(ie),
        ye = Vb.j in ie && Vb.k in ie;
      return ee.filter((ee => !(0, cb.i)(ee) || (!!ye || He !== ee)))
    }
    async function MM(ee, ie, ye) {
      const be = ee.getLobbyFiles(),
        Me = (0, li.j)(ye, (0, cb.s)(be, ie)),
        Ke = await ee.ensureJoined(ie),
        Ue = (0, ab.x)(Ke.docKey);
      if (Ke.doc === Me) return;
      for (let He = 0; He < 100; He++) {
        const He = ee.getCollabSnapshot();
        if (He && (0, ab.x)(He.docKey) === Ue && ee.getActivePath() === ie) {
          if (ee.replaceActiveDoc(Ue, Me)) return;
          await (0, gy.U)(40)
        } else await (0, gy.U)(40)
      }
      const {
        ChangeSet: Fe
      } = await He.e(604).then((() => He(44509))), oe = ee.getCollabSnapshot(), Re = oe && (0, ab.x)(oe.docKey) === Ue ? oe : Ke;
      await async function(ee, ie, He, ye) {
        const be = ee.of({
            from: 0,
            to: He.length,
            insert: ye
          }, He.length),
          Me = JSON.stringify([{
            clientID: ie.clientID,
            changes: be.toJSON()
          }]),
          Ke = (0, ab.x)(ie.docKey);
        Me.length <= ab.i ? Je.gameBridge.send("sendCodeCollab", {
          ue: ab.c.Push,
          Se: Ke,
          ne: ie.version,
          Ie: Me
        }) : await (0, Yb.postJsonWithMetricsCookiesAndJsonResponse)(`${ie.httpConfig.gsUrl}/code/collab-push`, Ab.w["collab-push"].toBuffer({
          gameNameWithVariation: ie.httpConfig.gameNameWithVariation,
          lobbyName: ie.httpConfig.lobbyName,
          docKey: Ke,
          version: ie.version,
          updates: Me
        }), {
          retries: 0
        })
      }(Fe, Re, Re.doc, Me)
    }
    class KM {
      constructor(ee) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = ee
      }
      async writeLobbyFiles(ee) {
        const ie = {
            ...this.bridge.getLobbyFiles()
          },
          He = {
            ...ie
          };
        for (const {
            path: Me,
            text: Ke
          }
          of ee) He[Me] = Ke;
        if (!ee.every((ee => {
            let {
              path: ie,
              text: ye
            } = ee;
            return (0, li.j)(ye, (0, cb.s)(He, ie)) === ye
          }))) return !1;
        const ye = [];
        try {
          for (const {
              path: ie,
              text: He
            }
            of ee) ye.push(ie), ie in this.bridge.getLobbyFiles() || (this.bridge.createFile(ie, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(ie, !0)), await MM(this.bridge, ie, He)
        } catch (be) {
          for (const ee of ye) ee in ie ? await MM(this.bridge, ee, ie[ee]).catch((ie => {
            console.error("World Code AI: couldn't put back", ee, ie)
          })) : this.bridge.deleteFile(ee);
          throw be
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const ee = await (0, eM.w)(this.bridge.getStorageKey());
        return !!ee && (this.handle = ee, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(ee), !0)
      }
      async unlinkFolder() {
        const ee = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, eM.b)(ee), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const ee = this.bridge.getStorageKey(),
          ie = await (0, eM.t)(ee);
        return !!ie && (!!await (0, eM.i)(ie, "readwrite") && (this.handle = ie, this.linked = !0, await (0, eM.F)(ee, ie), await this.scaffoldLocalTypes(ie), !0))
      }
      scaffoldLocalTypes(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const ye = (await Qb(ie)).map((ee => ub.h[ee])),
              be = ye.map((ee => {
                var ie;
                return `${ee.name}:${Object.keys(null!==(ie=null===ee||void 0===ee?void 0:ee.files)&&void 0!==ie?ie:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === be) return;
            const {
              ensureLocalBloxdTypes: Me
            } = await Promise.all([He.e(98), He.e(606), He.e(611)]).then((() => He(44684)));
            await Me(ee, ye), this.scaffoldedPluginNamesKey = be
          } catch (ye) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", ye)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(ee) {
        this.handle && await this.scaffoldLocalTypes(this.handle, ee), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(ee)
      }
      async onDocTextChanged(ee, ie) {
        if (!this.handle) return;
        const He = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [ee]: ie
        })];
        this.running && (this.pendingDocText.set(ee, ie), He.push(this.flushDocTextToDisk())), await Promise.all(He)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const ee = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const ie = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [He, ye] of ie) this.lastSynced[He] !== ye && (await (0, eM.L)(ee, He, ye), this.lastSynced = {
              ...this.lastSynced,
              [He]: ye
            })
          }
        } catch (ie) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", ie), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, eM.x)(this.handle))
          } catch (ee) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", ee)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, eM.i)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const ie = this.bridge.getLobbyFiles(),
              He = await (0, eM.x)(this.handle);
            for (const ee of Object.keys(ie).filter(lb.d)) {
              if (He[ee] === eM.o) return void this.bridge.setMessage(`Move ${ee} outside the linked folder before syncing its placeholder.`, "warning");
              He[ee] = lb.m
            }
            if (iM(He, ie)) {
              for (const ee of Object.keys(ie).filter(lb.d)) await (0, eM.L)(this.handle, ee, lb.m);
              return this.lastSynced = {
                ...He
              }, void this.beginWatch()
            }
            const ye = await this.promptReconcile(function(ee) {
              return null !== (0, cb.c)(ee)
            }(He));
            if ("unlink" === ye) return void await this.unlinkFolder();
            if ("dismissed" === ye) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === ye) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(He);
                for (const ee of Object.keys(ie).filter(lb.d)) await (0, eM.L)(this.handle, ee, lb.m);
                this.lastSynced = {
                  ...await (0, eM.x)(this.handle)
                }
              } else await (0, eM.O)(this.handle, ie), this.lastSynced = {
                ...ie
              }
            } catch (ee) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", ee), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(ee) {
        return await new Promise((ie => {
          const He = [{
              choice: "local",
              Button: qe.c,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: qe.c,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: qe.c,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            ye = (0, oe.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, oe.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, oe.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: ee ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, oe.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: He.filter((ie => "local" !== ie.choice || ee)).map((ee => {
                  let {
                    choice: He,
                    Button: ye,
                    labelKey: Me,
                    descriptionKey: Ke
                  } = ee;
                  return (0, oe.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, oe.jsx)(ye, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (ee => {
                          be.tearDownNotification(), ie(ee)
                        })(He)
                      },
                      children: this.bridge.t(`codeEditor:${Me}`)
                    }), (0, oe.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${Ke}`)
                    })]
                  }, He)
                }))
              })]
            }),
            be = Ub.NotificationProvider.showCustomPopup({
              body: ye,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync",
              middleScreenPopupContainerClassName: jb.c
            });
          be.getResult().then((ee => {
            "notificationTornDown" === ee && ie("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, eM.I)(this.handle, (ee => {
          this.onDiskFilesChanged(ee)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (ee) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", ee)
        }
      }
      async onDiskFilesChanged(ee) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const ie = this.bridge.getLobbyFiles();
        let He = yM(ee, this.lastSynced);
        for (const Me in ie)
          if ((0, lb.d)(Me) && He[Me] === eM.o) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const ye = Object.keys(He).filter((ee => (0, lb.d)(ee) && !(ee in ie)));
        ye.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const Me of Object.keys(ie).filter(lb.d))(Me in He || ye.length > 0 || !(Me in this.lastSynced)) && (He[Me] = lb.m);
        if (!iM(He, ee)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(ee, He), He = yM(await (0, eM.x)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!iM(He, this.lastSynced)) {
          this.applying = !0;
          try {
            const ee = HM(this.lastSynced, He);
            if (await this.pushDiskDeltaToLobby(He, ie), null !== this.lastLobbySeen)
              for (const He of [...ee.creates, ...ee.updates, ...ee.deletes])(0, lb.d)(He) || (He in ie ? this.lastLobbySeen[He] = ie[He] : delete this.lastLobbySeen[He]);
            this.lastSynced = {
              ...He
            }
          } catch (be) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", be), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(ee, ie) {
        if (this.handle) {
          for (const He of Object.keys(ee)) He in ie || await (0, eM.z)(this.handle, He);
          for (const [He, ye] of Object.entries(ie)) ee[He] !== ye && await (0, eM.L)(this.handle, He, ye)
        }
      }
      async applyRemoteTreeToDisk(ee) {
        if (!this.handle) return;
        const ie = this.lastLobbySeen;
        if (null === ie) return void(this.lastLobbySeen = {
          ...ee
        });
        const He = Object.keys(ee).filter((He => ie[He] !== ee[He])),
          ye = Object.keys(ie).filter((ie => !(ie in ee)));
        if (0 !== He.length || 0 !== ye.length) {
          this.applying = !0;
          try {
            for (const ie of [...ye, ...He]) try {
              if (ie in ee) await (0, eM.L)(this.handle, ie, ee[ie]), this.lastSynced = {
                ...this.lastSynced,
                [ie]: ee[ie]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [ie]: ee[ie]
              };
              else {
                await (0, eM.z)(this.handle, ie);
                const ee = {
                  ...this.lastSynced
                };
                delete ee[ie], this.lastSynced = ee;
                const He = {
                  ...this.lastLobbySeen
                };
                delete He[ie], this.lastLobbySeen = He
              }
            } catch (be) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", be), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(ee, ie) {
        const He = function(ee, ie) {
          const He = (0, cb.c)(ee),
            ye = (0, cb.c)(ie);
          return He && ye && He !== ye ? {
            from: He,
            to: ye
          } : null
        }(ee, ie);
        return !!He && (this.bridge.renameFile(He.from, He.to), await this.bridge.waitForLobbyPath(He.to, !0), !0)
      }
      async applyLocalTreeToLobby(ee) {
        var ie;
        const He = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), ee);
        const ye = this.bridge.getLobbyFiles(),
          be = HM(ye, ee),
          Me = bM(be.deletes, ye);
        for (const Je of be.creates)(0, lb.d)(Je) || (this.bridge.createFile(Je, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Je, !0));
        for (const Je of Me)(0, lb.d)(Je) || (this.bridge.deleteFile(Je), await this.bridge.waitForLobbyPath(Je, !1));
        if (!(0, cb.c)(this.bridge.getLobbyFiles()) && !(0, cb.c)(ee)) {
          if (this.bridge.createFile(Vb.j, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(Vb.j, !0), !this.handle) return;
          await (0, eM.L)(this.handle, Vb.j, ""), ee = {
            ...ee,
            [Vb.j]: ""
          }
        }
        const Ke = this.bridge.getLobbyFiles();
        for (const Je of Object.keys(ee))(0, lb.d)(Je) || Ke[Je] !== ee[Je] && await MM(this.bridge, Je, ee[Je]);
        const Ue = this.bridge.getLobbyFiles(),
          Fe = He in Ue ? He : null !== (ie = (0, cb.c)(Ue)) && void 0 !== ie ? ie : Vb.j;
        await this.bridge.ensureJoined(Fe)
      }
      async pushDiskDeltaToLobby(ee, ie) {
        const He = this.bridge.getActivePath(),
          ye = await this.renameLobbyEntryIfSwitched(ie, ee) ? this.bridge.getLobbyFiles() : ie,
          be = HM(this.lastSynced, ee),
          Me = bM(be.deletes, ye).filter((ee => ee in ye));
        for (const Ke of be.creates)(0, lb.d)(Ke) || (Ke in this.bridge.getLobbyFiles() || (this.bridge.createFile(Ke, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Ke, !0)), await MM(this.bridge, Ke, ee[Ke]));
        for (const Ke of Me)(0, lb.d)(Ke) ? await this.bridge.deleteSchematic(Ke) : (this.bridge.deleteFile(Ke), await this.bridge.waitForLobbyPath(Ke, !1));
        for (const Ke of be.updates)(0, lb.d)(Ke) || await MM(this.bridge, Ke, ee[Ke]);
        He in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== He && await this.bridge.ensureJoined(He)
      }
    }
    var UM = He(1141);

    function FM() {
      const {
        websocketUrl: ee,
        gameNameWithVariation: ie,
        lobbyName: He
      } = Je.gameBridge.latest("connectedGame");
      return {
        gsUrl: UM.clientSideServerUrls.getHttpUrlFromWebSocketUrl(ee),
        gameNameWithVariation: ie,
        lobbyName: He
      }
    }
    async function JM(ee) {
      const {
        gsUrl: ie,
        gameNameWithVariation: He,
        lobbyName: ye
      } = FM();
      return await (0, Yb.postBinaryWithMetricsCookiesAndCustomResponse)(`${ie}/code/schematics`, Ab.pk.schematics.toBuffer({
        gameNameWithVariation: He,
        lobbyName: ye,
        request: JSON.stringify(ee)
      }), {
        retries: 0
      }, Yb.HttpPayloadType.json)
    }
    var oM = He(37138);

    function RM(ee) {
      let {
        path: ie,
        revision: He
      } = ee;
      const [ye, Me] = (0, be.useState)(""), [Ke, Ue] = (0, be.useState)(!1), [Fe, Je] = (0, be.useState)(0);
      return (0, be.useEffect)((() => {
        let ee = !1;
        return Me(""), Ue(!1), JM({
          action: "preview",
          path: ie
        }).then((ie => {
          ee || Me(`data:image/webp;base64,${ie.previewBase64}`)
        })).catch((ie => {
          console.error("Could not load schematic preview", ie), ee || Ue(!0)
        })), () => {
          ee = !0
        }
      }), [ie, He, Fe]), (0, oe.jsxs)("div", {
        className: "SchematicPreview",
        children: [ye && (0, oe.jsx)("img", {
          src: ye,
          alt: `Preview of ${ie}`
        }), !ye && !Ke && (0, oe.jsx)(we.b, {
          loaderType: "Secondary"
        }), Ke && (0, oe.jsxs)(oe.Fragment, {
          children: [(0, oe.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, oe.jsx)(qe.c, {
            onClick: () => {
              Je(Fe + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var kM = He(3447);

    function qM(ee) {
      var ie;
      let {
        initialPath: He,
        onChanged: ye,
        onClose: Me
      } = ee;
      const Ke = "" === He,
        [Ue, Fe] = (0, be.useState)(null),
        [Je, Re] = (0, be.useState)(He),
        [ke, fe] = (0, be.useState)(!1),
        [Te, pe] = (0, be.useState)(!1),
        [Xe, ze] = (0, be.useState)(null),
        [Be, Ee] = (0, be.useState)(!1),
        [ge, Oe] = (0, be.useState)(""),
        de = (0, be.useRef)(null),
        We = (0, be.useRef)(!1),
        te = (0, be.useRef)(!0);
      (0, be.useEffect)((() => (te.current = !0, JM({
        action: "state"
      }).then((ee => {
        te.current && Fe(ee)
      })).catch((ee => {
        console.error("Could not load schematic assets", ee), te.current && Oe("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        te.current = !1
      })), []);
      const Ze = null === Ue || void 0 === Ue ? void 0 : Ue.assets[He],
        we = Object.keys(null !== (ie = null === Ue || void 0 === Ue ? void 0 : Ue.assets) && void 0 !== ie ? ie : {}).length,
        De = Je.trim(),
        Pe = De ? (0, lb.d)(De) ? null !== Ue && void 0 !== Ue && Ue.assets[De] && (Ke || De !== He) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        Ae = !!De && !Pe && (Ke ? we < lb.f : De !== He),
        Ye = Be || !Ue;
      async function Ve(ee) {
        if (!We.current && te.current) {
          We.current = !0, Ee(!0), Oe("");
          try {
            const ie = await JM({
              ...ee,
              expectedRevision: Ue.revision
            });
            ye(ie), te.current && Me()
          } catch (He) {
            var ie;
            if (console.error("Schematic asset operation failed", He), te.current) Oe(He instanceof ne.b ? null !== (ie = He.errorMessageForUser) && void 0 !== ie ? ie : He.message : String(He));
            try {
              const ee = await JM({
                action: "state"
              });
              ye(ee), te.current && Fe(ee)
            } catch (be) {
              console.error("Could not refresh schematic assets", be)
            }
          } finally {
            We.current = !1, te.current && Ee(!1)
          }
        }
      }
      return (0, oe.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, oe.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Ke ? "New schematic" : ke ? "Rename schematic" : "Schematic"
        }), ge && (0, oe.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: ge
        }), !Ue && !ge && (0, oe.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, oe.jsxs)("fieldset", {
          disabled: Ye,
          children: [Ke || ke ? (0, oe.jsxs)("label", {
            className: "SchematicField",
            children: [(0, oe.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, oe.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, oe.jsx)(LH.d, {
                className: "InputGenericPopupInput",
                defaultValue: He,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: Re
              }, ke ? "rename" : "create")
            })]
          }) : (0, oe.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: He
          }), (Ke || ke) && Pe && (0, oe.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: Pe
          }), Ke ? (0, oe.jsxs)(oe.Fragment, {
            children: [we >= lb.f && (0, oe.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", lb.f, " maximum)."]
            }), Te ? (0, oe.jsxs)(oe.Fragment, {
              children: [(0, oe.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, oe.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": Ye || !Ae,
                children: (0, oe.jsx)(oM.c, {
                  loading: null === Xe,
                  schematics: null !== Xe && void 0 !== Xe ? Xe : [],
                  disableAutoExport: !0,
                  onSchematicPicked: ee => {
                    !Ye && Ae && Ve({
                      action: "profile",
                      path: De,
                      schematicId: ee.schematicId
                    })
                  }
                })
              }), (0, oe.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, oe.jsx)(qe.c, {
                  className: "InputGenericPopupButton",
                  disabled: Ye,
                  onClick: () => {
                    pe(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, oe.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, oe.jsx)(qe.c, {
                className: "InputGenericPopupButton",
                disabled: Ye || !Ae,
                onClick: () => {
                  (0, kM.f)(de.current)
                },
                children: "Upload Schematic"
              }), (0, oe.jsx)(qe.c, {
                className: "InputGenericPopupButton",
                disabled: Ye || !Ae,
                onClick: () => {
                  !async function() {
                    if (pe(!0), Oe(""), !Xe) try {
                      const ee = await (0, Yb.postJsonWithMetricsCookiesAndJsonResponse)(`${UM.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      te.current && ze(ee)
                    } catch (ee) {
                      console.error("Could not load profile schematics", ee), te.current && (pe(!1), Oe("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, oe.jsx)("input", {
              ref: de,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: ee => {
                var ie;
                const He = null === (ie = ee.target.files) || void 0 === ie ? void 0 : ie[0];
                if (ee.target.value = "", !He) return;
                if (He.size > lb.i) return void Oe("The schematic file is too large.");
                const ye = De;
                Ee(!0);
                const be = new FileReader;
                be.onload = () => {
                  Ve({
                    action: "upload",
                    path: ye,
                    base64: String(be.result).split(",")[1]
                  })
                }, be.onerror = () => {
                  console.error("Could not read schematic file", be.error), te.current && (Ee(!1), Oe("Could not read the selected file."))
                }, be.readAsDataURL(He)
              }
            })]
          }) : Ze ? (0, oe.jsxs)(oe.Fragment, {
            children: [!ke && (0, oe.jsx)(RM, {
              path: He,
              revision: Ue.revision
            }), !ke && (0, oe.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(Ze.byteSize / 1024), " KB \xb7 ", Ze.dimensions.join(" \xd7 "), " blocks"]
            }), (0, oe.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: ke ? (0, oe.jsxs)(oe.Fragment, {
                children: [(0, oe.jsx)(qe.c, {
                  className: "InputGenericPopupButton",
                  disabled: Ye || !Ae,
                  onClick: () => {
                    Ve({
                      action: "rename",
                      path: He,
                      newPath: De
                    })
                  },
                  children: "Rename"
                }), (0, oe.jsx)(qe.c, {
                  className: "InputGenericPopupButton",
                  disabled: Ye,
                  onClick: () => {
                    fe(!1), Re(He)
                  },
                  children: "Cancel"
                })]
              }) : (0, oe.jsxs)(oe.Fragment, {
                children: [(0, oe.jsx)(qe.c, {
                  className: "InputGenericPopupButton",
                  disabled: Ye,
                  onClick: () => {
                    fe(!0)
                  },
                  children: "Rename"
                }), (0, oe.jsx)(qe.G, {
                  className: "InputGenericPopupButton",
                  disabled: Ye,
                  onClick: () => {
                    Ve({
                      action: "remove",
                      path: He
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : Ue && (0, oe.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function fM(ee) {
      if ("string" !== typeof ee) return null;
      try {
        const ie = JSON.parse(ee);
        return (0, cb.m)(null === ie || void 0 === ie ? void 0 : ie.worldCodeEngine) && "boolean" === typeof ie.engineLocked && function(ee) {
          if (null === ee) return !0;
          const ie = null === ee || void 0 === ee ? void 0 : ee.location;
          return "string" === typeof(null === ee || void 0 === ee ? void 0 : ee.reason) && (null === ie || "string" === typeof(null === ie || void 0 === ie ? void 0 : ie.path) && Number.isInteger(ie.line))
        }(ie.fallback) ? ie : (console.error("[CodeCollab] Malformed engine settings", ee), null)
      } catch (ie) {
        return console.error("[CodeCollab] Failed to parse engine settings", ie), null
      }
    }

    function TM(ee) {
      let {
        length: ie
      } = ee;
      const {
        t: He,
        selectedLanguage: ye
      } = (0, he.v)(), be = function(ee) {
        return ee >= li.g ? "full" : ee >= 3e4 ? "counter" : "none"
      }(ie), Me = "full" === be ? "codeEditor:codeBlockFull" : "codeEditor:codeBlockLength", Ke = (0, he.l)(ye.code, Me), Ue = li.g.toLocaleString(Ke);
      return (0, oe.jsxs)(oe.Fragment, {
        children: ["counter" === be && (0, oe.jsx)("div", {
          className: "CodeEditorLengthNotice CodeEditorLengthCounter",
          children: He(Me, {
            length: ie.toLocaleString(Ke),
            max: Ue
          })
        }), (0, oe.jsx)("div", {
          className: "full" === be ? "CodeEditorLengthNotice" : void 0,
          role: "status",
          children: "full" === be && He(Me, {
            max: Ue
          })
        })]
      })
    }

    function pM(ee) {
      let {
        fallback: ie,
        onGoToLine: He
      } = ee;
      const {
        t: ye
      } = (0, he.v)(), {
        location: be
      } = ie;
      return (0, oe.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [ye("codeEditorEngine:notice", {
          reason: ie.reason
        }), be && (0, oe.jsxs)(oe.Fragment, {
          children: [" ", (0, oe.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              He(be.path, be.line)
            },
            children: ye("codeEditorEngine:goToLine", {
              line: String(be.line)
            })
          })]
        })]
      })
    }
    var XM = He(5415),
      zM = He(4729),
      BM = He(37701);

    function EM(ee) {
      let {
        label: ie,
        hint: He,
        checked: ye,
        onChange: be
      } = ee;
      return (0, oe.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, oe.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, oe.jsx)("span", {
            children: ie
          }), (0, oe.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: He
          })]
        }), (0, oe.jsx)("span", {
          className: "SwitchContainer",
          children: (0, oe.jsx)(zM.d, {
            className: "SwitchCheckbox",
            checked: ye,
            onChange: ee => {
              be(ee.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function gM(ee) {
      let {
        engine: ie,
        onSetEngine: He,
        aiHints: ye,
        variation: be
      } = ee;
      const {
        t: Me
      } = (0, he.v)(), [Ke, Ue] = (0, BM.m)(BM.f);
      return (0, oe.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, oe.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: Me("codeEditor:moreOptions")
        }), ie && (0, oe.jsx)(EM, {
          label: Me("codeEditorEngine:toggle"),
          hint: Me("codeEditorEngine:toggleHint"),
          checked: "ses" === ie,
          onChange: ee => {
            He(ee ? "ses" : "quickjs")
          }
        }), ye && (0, oe.jsx)(EM, {
          label: Me("codeEditorAiHints:toggle"),
          hint: Me("codeEditorAiHints:toggleHint"),
          checked: ye.shown,
          onChange: ye.setShown
        }), ye && BM.f.canChange && (0, oe.jsx)(EM, {
          label: Me("codeEditorAiKeySafetyCheck:toggle"),
          hint: Me("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: Ke,
          onChange: ee => {
            ee ? Ue(!0) : Ub.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no",
              middleScreenPopupContainerClassName: jb.c
            }).getResult().then((ee => {
              !0 === ee && Ue(!1)
            }))
          }
        }), be && (0, oe.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, oe.jsx)(XM.d, {
            label: "codeEditor:variationLabel",
            children: (0, oe.jsx)(LH.d, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: be.name,
              onValueChange: be.setName,
              onEnter: be.reload
            })
          }), (0, oe.jsx)(qe.u, {
            className: "CodeEditorButton",
            onClick: be.reload,
            children: Me("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var OM = He(37708),
      dM = He(37716);

    function WM(ee) {
      let {
        close: ie
      } = ee;
      const {
        t: He
      } = (0, he.v)(), ye = [{
        name: He("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: He("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: He("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, oe.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, oe.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: He("codeEditor:tutorialsTitle")
        }), (0, oe.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: ye.map((ee => (0, oe.jsx)(qe.c, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              ie(), (0, dM.K)(ee.tutorial)
            },
            children: ee.name
          }, ee.tutorial)))
        })]
      })
    }
    var tM = He(107),
      ZM = He(37362),
      wM = He(2930);
    const DM = (0, be.forwardRef)((function(ee, ie) {
      let {
        value: He,
        onChange: ye,
        onSubmit: be,
        placeholder: Me,
        maxLength: Ke,
        rows: Ue = 2,
        allowNewLines: Fe = !1,
        onKeyDown: Je,
        before: Re
      } = ee;
      const {
        t: ke
      } = (0, he.v)(), fe = "" !== He.trim(), Te = () => {
        fe && be()
      };
      return (0, oe.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [Re, (0, oe.jsx)("textarea", {
          ref: ie,
          className: "PanelPromptInput",
          value: He,
          maxLength: Ke,
          rows: Ue,
          placeholder: Me,
          spellCheck: !1,
          autoComplete: "off",
          onChange: ee => {
            ye(Fe ? ee.target.value : ee.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: ee => {
            ee.nativeEvent.isComposing || 229 === ee.nativeEvent.keyCode ? ee.stopPropagation() : "Escape" !== ee.key && (ee.stopPropagation(), null === Je || void 0 === Je || Je(ee), ee.defaultPrevented || "Enter" !== ee.key || Fe && ee.shiftKey || (ee.preventDefault(), Te()))
          }
        }), (0, oe.jsx)(qe.c, {
          className: "PanelPromptSend",
          disabled: !fe,
          onClick: Te,
          ariaLabel: ke("codeEditorPanels:send"),
          children: (0, oe.jsx)(pe.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function PM(ee) {
      let {
        inputRef: ie
      } = ee;
      const {
        t: He
      } = (0, he.v)(), {
        messages: ye,
        reportedPlayers: Me,
        channel: Ke
      } = (0, wM.o)(), [Ue, Fe] = (0, be.useState)(""), Je = (0, be.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, oe.jsxs)("div", {
        className: "CodeEditorChatPanel",
        "data-replay-redact": !0,
        children: [(0, oe.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, oe.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: He("codeEditorChat:title")
          })
        }), 0 === ye.length ? (0, oe.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: He("codeEditorChat:empty")
        }) : (0, oe.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, oe.jsx)(ZM.e, {
            messages: ye,
            reportedPlayers: Me
          })
        }), (0, oe.jsx)(DM, {
          ref: ie,
          value: Ue,
          onChange: Fe,
          onSubmit: () => {
            (0, wM.m)(Ue), Fe(""), Je.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: te.gd,
          rows: 1,
          placeholder: Ke ? He("touchOnly" === (0, tM.b)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: Ke.channelName
          }) : He("codeEditorChat:placeholder"),
          before: Ke && (0, oe.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: Ke.elementBgColor
            },
            onClick: () => {
              wM.e.selectNextChannel(), ie.current.focus()
            },
            children: (0, oe.jsx)(de.e, {
              text: Ke.elementContent
            })
          }),
          onKeyDown: ee => {
            const ie = Ue === Je.current.text;
            if ("ArrowUp" !== ee.key && "ArrowDown" !== ee.key || !ie && "" !== Ue) "Tab" === ee.key && !ee.shiftKey && Ke && (ee.preventDefault(), wM.e.selectNextChannel());
            else {
              ee.preventDefault();
              const He = ie ? Je.current.stepsBack : 0;
              Je.current = (0, wM.j)(He + ("ArrowUp" === ee.key ? 1 : -1)), Fe(Je.current.text)
            }
          }
        })]
      })
    }
    var AM = He(37724);

    function YM(ee) {
      return "expanded" === ee ? "always" : "shown" === ee ? "narrow" : void 0
    }

    function VM(ee) {
      var ie;
      let {
        xR: He,
        worldPanel: ye,
        closeWorld: be,
        aiShown: Me,
        defaultWidth: Ke,
        children: Ue
      } = ee;
      const Fe = "hidden" !== He;
      return (0, oe.jsx)(AM.c, {
        side: "right",
        defaultSize: Fe ? "max(18rem, 40%)" : Ke,
        covers: null !== (ie = YM(He)) && void 0 !== ie ? ie : Me ? "narrow" : void 0,
        children: (0, oe.jsxs)("div", {
          className: OH()("CodeEditorRightColumn", {
            WorldShown: Fe,
            WorldExpanded: "expanded" === He
          }),
          children: [Fe && (0, oe.jsx)(AM.c, {
            side: "top",
            onClose: be,
            children: ye
          }), Ue]
        })
      })
    }
    var aM = He(2043),
      cM = He(1070),
      xM = He(1260);
    class LM {
      constructor(ee, ie, He) {
        this.measure = ee, this.apply = ie, this.now = He, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var ee, ie;
        return null !== (ee = null === (ie = this.last) || void 0 === ie ? void 0 : ie.rect) && void 0 !== ee ? ee : null
      }
      sync() {
        const ee = function(ee) {
          const ie = Math.round(ee.left),
            He = Math.round(ee.top);
          return {
            left: ie,
            top: He,
            width: Math.round(ee.right) - ie,
            height: Math.round(ee.bottom) - He
          }
        }(this.measure());
        if (ee.width <= 0 || ee.height <= 0) return;
        const ie = this.now(),
          He = this.last;
        let ye = {
          width: ee.width,
          height: ee.height
        };
        null === He || ee.width === He.rect.width && ee.height === He.rect.height || (this.resizing = ie - this.resizedAt < 100, this.resizedAt = ie);
        const be = null !== He && this.resizing && ie - this.resizedAt < 100 && (ee.width !== He.bufferSize.width || ee.height !== He.bufferSize.height);
        be && (this.stretchedAt ??= ie), be && ie - this.stretchedAt < 250 ? ye = He.bufferSize : this.stretchedAt = null;
        const Me = {
          rect: ee,
          bufferSize: ye
        };
        var Ke, Ue;
        null !== He && (Ue = Me, (Ke = He).rect.left === Ue.rect.left && Ke.rect.top === Ue.rect.top && Ke.rect.width === Ue.rect.width && Ke.rect.height === Ue.rect.height && Ke.bufferSize.width === Ue.bufferSize.width && Ke.bufferSize.height === Ue.bufferSize.height) || (this.last = Me, this.apply(Me))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function CM(ee) {
      const {
        style: ie
      } = document.documentElement;
      for (const [He, ye] of [
          ["--worldViewLeft", null === ee || void 0 === ee ? void 0 : ee.left],
          ["--worldViewTop", null === ee || void 0 === ee ? void 0 : ee.top],
          ["--worldViewWidth", null === ee || void 0 === ee ? void 0 : ee.width],
          ["--worldViewHeight", null === ee || void 0 === ee ? void 0 : ee.height]
        ]) void 0 === ye ? ie.removeProperty(He) : ie.setProperty(He, `${ye}px`)
    }
    var vM = He(1768),
      uM = He(2048);

    function mM(ee, ie) {
      (0, be.useEffect)((() => {
        if (!ee) return;
        const He = ee => {
          var He;
          "Escape" === ee.key ? (ee.stopPropagation(), ee.preventDefault(), ie()) : (He = ee.code, Object.entries(ni.q).some((ee => {
            let [ie, ye] = ee;
            const be = uM.f[ie];
            return be.includes("ui") && !be.includes("core") && ye.includes(He)
          })) && !(0, vM.isTextEntry)(ee.target) && ee.preventDefault())
        };
        window.addEventListener("keydown", He, !0);
        const ye = (0, ue.m)(ie);
        return () => {
          window.removeEventListener("keydown", He, !0), ye()
        }
      }), [ee, ie])
    }

    function lM() {
      return (0, Bb.s)().some((ee => ee !== Bb.c))
    }

    function SM(ee, ie) {
      return ee.map((ee => ie ? String(ee) : ee.toFixed(1))).join(", ")
    }

    function nM(ee) {
      let {
        freeCamera: ie,
        picking: He,
        hovered: ye
      } = ee;
      const {
        t: Me
      } = (0, he.v)(), Ke = (0, be.useRef)(null), Ue = (0, be.useRef)(null);
      return (0, be.useEffect)((() => {
        const ee = (ee, ie) => {
            ee.textContent !== ie && (ee.textContent = ie)
          },
          He = () => {
            const He = ie ? Je.gameBridge.lookup("freeCameraPos", null) : null;
            ee(Ke.current, SM(null !== He && void 0 !== He ? He : Je.gameBridge.lookup("localPos", null), !1));
            const ye = Je.gameBridge.lookup("targetedBlockPos", null);
            ee(Ue.current, ye ? SM(ye, !0) : "-")
          };
        return He(), (0, xM.v)(He)
      }), [ie]), (0, oe.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, oe.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Me(ie ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, oe.jsx)("span", {
          ref: Ke
        }), (0, oe.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Me("codeEditorWorld:lookingAt")
        }), (0, oe.jsx)("span", {
          ref: Ue,
          hidden: He
        }), He && (0, oe.jsxs)(oe.Fragment, {
          children: [(0, oe.jsx)("span", {
            children: ye ? SM(ye.pos, !0) : "-"
          }), ye && (0, oe.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: ye.name
          })]
        })]
      })
    }
    var jM = He(37731),
      sM = He(1455);

    function IM(ee) {
      const ie = ee.currentTarget.getBoundingClientRect();
      return {
        x: (ee.clientX - ie.left) / ie.width,
        y: (ee.clientY - ie.top) / ie.height
      }
    }

    function hM(ee) {
      const [ie, He] = (0, be.useState)(!1), [ye, Me] = (0, be.useState)(null), Ke = (0, be.useRef)(null);
      (0, be.useEffect)((() => {
        if (!ie) return;
        let ee = null,
          He = null,
          ye = 1 / 0;
        const be = (0, xM.r)((ie => {
          ye += ie;
          const be = Ke.current;
          if (be === He && ye < 100) return;
          He = be, ye = 0;
          const Ue = be && Je.gameBridge.lookup("blockAtViewPoint", be);
          var Fe, oe;
          (Fe = Ue) === (oe = ee) || null !== Fe && null !== oe && Fe.name === oe.name && (0, jM.g)(Fe.pos, oe.pos) && (0, jM.g)(Fe.normal, oe.normal) || (ee = Ue, Me(Ue), Je.gameBridge.send("setBlockHighlight", Ue))
        }));
        return () => {
          be(), null !== ee && Je.gameBridge.send("setBlockHighlight", null), Me(null)
        }
      }), [ie]);
      const Ue = (0, be.useCallback)((() => {
        He(!1)
      }), []);
      mM(ie, Ue);
      const Fe = ye => {
          if (!ie) return;
          const be = Je.gameBridge.lookup("blockAtViewPoint", IM(ye));
          null !== be && (He(!1), ee(be.pos))
        },
        oe = ie ? (0, sM.f)(Fe, "pointerup") : null,
        Re = {
          onPointerDown: ee => {
            null === oe || void 0 === oe || oe.onPointerDown(ee)
          },
          onPointerMove: ee => {
            Ke.current = IM(ee)
          },
          onPointerLeave: () => {
            Ke.current = null
          },
          onPointerUp: null === oe || void 0 === oe ? void 0 : oe.onPointerUp,
          onClick: ee => {
            "pointerType" in ee.nativeEvent && "touch" === ee.nativeEvent.pointerType || Fe(ee)
          }
        };
      return {
        picking: ie,
        setPicking: He,
        hovered: ye,
        slotHandlers: Re
      }
    }

    function NM(ee) {
      Je.gameBridge.send("setFreeCameraMovesFly", ee)
    }

    function GM(ee) {
      let {
        shown: ie,
        setShown: He,
        canInsertCode: ye
      } = ee;
      const {
        t: Me
      } = (0, he.v)(), {
        isTouchScreen: Ke
      } = (0, ve.m)(["isTouchScreen"]), Ue = (0, be.useRef)(null), Je = (0, be.useCallback)((() => {
        var ee;
        null === (ee = Ue.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === ee || ee.focus()
      }), []), {
        control: Re,
        take: ke,
        release: Te,
        blocked: Xe
      } = function(ee) {
        const [ie, He] = (0, be.useState)("none"), ye = (0, be.useRef)("none"), [Me, Ke] = (0, be.useState)(!1), Ue = ee => {
          ye.current = ee, He(ee)
        }, Fe = (0, be.useCallback)((() => {
          const ie = ye.current;
          "none" !== ie && (Ue("none"), (0, Bb.w)(Bb.c), "mouse" === ie && ee())
        }), [ee]), Je = (0, be.useCallback)((ee => {
          lM() ? Ke(!0) : (Ue("mouse" === ee && "touchOnly" !== (0, tM.b)() ? "mouse" : "touch"), (0, Bb.v)(Bb.c))
        }), []);
        return (0, We.f)("pointerLockUpdate", (ee => {
          ee && "touch" === ye.current && "touchOnly" !== (0, tM.b)() ? Ue("mouse") : ee || "mouse" !== ye.current || Fe()
        })), (0, be.useEffect)((() => {
          if (!Me) return;
          const ee = () => {
            lM() || Ke(!1)
          };
          return ee(), (0, Bb.m)(ee)
        }), [Me]), mM("none" !== ie, Fe), (0, be.useEffect)((() => {
          if ("none" === ie) return;
          const ee = ee => {
            (0, vM.isTextEntry)(ee.target) && Fe()
          };
          return document.addEventListener("focusin", ee), () => {
            document.removeEventListener("focusin", ee)
          }
        }), [ie, Fe]), (0, be.useEffect)((() => (document.addEventListener("pointerlockerror", Fe), () => {
          document.removeEventListener("pointerlockerror", Fe)
        })), [Fe]), (0, be.useEffect)((() => () => {
          "none" !== ye.current && null !== ve.e.get("openInGameMenuName") && (0, Bb.w)(Bb.c)
        }), []), {
          control: ie,
          take: Je,
          release: Fe,
          blocked: Me
        }
      }(Je), ze = (0, cM.k)(AM.e);
      (0, be.useEffect)((() => {
        "touch" !== Re || "shown" !== ie || ze ? "none" === Re && "expanded" === ie && He("shown") : He("expanded")
      }), [Re, ze]),
      function(ee, ie) {
        const He = (0, be.useRef)(ie);
        He.current = ie;
        const ye = (0, be.useRef)(null);
        (0, be.useLayoutEffect)((() => {
          const ie = new LM((() => ee.current.getBoundingClientRect()), (ee => {
            var ie;
            "none" !== He.current && CM(null !== (ie = null === ee || void 0 === ee ? void 0 : ee.rect) && void 0 !== ie ? ie : null), (0, xM.A)().setGameView(ee)
          }), (() => performance.now()));
          ye.current = ie, ie.sync();
          const be = (0, xM.q)((() => {
            ie.sync()
          }));
          return () => {
            be(), ve.e.set({
              worldPanelHud: null
            }), ie.stop()
          }
        }), [ee]), (0, be.useLayoutEffect)((() => {
          ye.current.sync(), CM("none" === ie ? null : ye.current.rect), ve.e.set({
            worldPanelHud: ie
          })
        }), [ie])
      }(Ue, "touch" === Re ? "touchControls" : "none");
      const {
        picking: Be,
        setPicking: Ee,
        hovered: ge,
        slotHandlers: {
          onPointerDown: Oe,
          ...de
        }
      } = hM((ee => {
        fe.h.yR("CodeEditorInsertText", {
          text: `[${ee.join(", ")}]`,
          focus: !Ke
        }), (0, AM.e)() && He("hidden")
      })), te = function() {
        const {
          allowed: ee,
          movesFly: ie
        } = (0, Ze.k)("freeCamera"), He = (0, be.useRef)(ie), ye = (0, be.useRef)(ie);
        return ye.current !== ie && (ye.current = ie, He.current = ie), (0, be.useEffect)((() => () => {
          He.current && NM(!1)
        }), []), {
          allowed: ee,
          on: ie,
          toggle: () => {
            He.current = !ie, NM(!ie)
          }
        }
      }(), we = (0, Fe.i)("hideCoordinates"), De = (0, Ze.k)("localPlayerAlive"), Pe = !De || Xe;
      (0, be.useEffect)((() => {
        De || Te()
      }), [De, Te]), (0, be.useEffect)((() => {
        !Pe && ye || Ee(!1)
      }), [Pe, ye, Ee]);
      const Ae = te.on ? qe.m : qe.c,
        Ye = Be ? qe.m : qe.c;
      return (0, oe.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, oe.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, oe.jsx)("span", {
            className: "WorldPanelTitle",
            children: Me("codeEditorWorld:title")
          }), "touch" === Re && !ze && (0, oe.jsx)(qe.c, {
            className: "WorldPanelButton",
            onClick: Te,
            children: Me("codeEditorWorld:backToCode")
          }), !Pe && te.allowed && !Ke && (0, oe.jsx)(se.g, {
            tooltipInner: Me("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, oe.jsx)(Ae, {
              className: "WorldPanelButton",
              ariaPressed: te.on,
              ariaLabel: Me("codeEditorWorld:freeCamera"),
              onClick: te.toggle,
              children: (0, oe.jsx)(pe.e, {
                name: "video"
              })
            })
          }), !Pe && ye && (0, oe.jsx)(se.g, {
            tooltipInner: Me("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, oe.jsxs)(Ye, {
              className: "WorldPanelButton",
              ariaPressed: Be,
              onClick: () => {
                Te(), Ee(!Be)
              },
              children: [(0, oe.jsx)(pe.e, {
                name: "crosshairs"
              }), Me("codeEditorWorld:pick")]
            })
          })]
        }), !we && (0, oe.jsx)(nM, {
          freeCamera: te.on,
          picking: Be,
          hovered: ge
        }), (0, oe.jsxs)("div", {
          ref: Ue,
          className: OH()("WorldPanelSlot", {
            TouchControl: "touch" === Re,
            Picking: Be
          }),
          onPointerDown: ee => {
            0 !== ee.button || Pe || Be || ke(ee.pointerType), Oe(ee)
          },
          ...de,
          children: [!Pe && !Be && (0, oe.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !Pe && "touch" !== Re && (0, oe.jsxs)("div", {
            className: "WorldPanelHint",
            children: [Be && Me(Ke ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !Be && "none" === Re && !te.on && Me(Ke ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !Be && "none" === Re && te.on && Me("codeEditorWorld:clickToFly"), "mouse" === Re && (0, oe.jsxs)(oe.Fragment, {
              children: [(0, oe.jsx)(aM.e, {
                noaAction: "OpenLobbyLeaderboard"
              }), Me("codeEditorWorld:backToCode")]
            })]
          }), Pe && (0, oe.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, oe.jsx)("span", {
              children: Me(De ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, oe.jsx)(qe.c, {
              onClick: ue.e,
              children: Me("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var rM = He(5537);

    function QM(ee) {
      let {
        xR: ie,
        setWorld: He,
        toggleWorld: ye,
        aiShown: be,
        closeAi: Me
      } = ee;
      const {
        t: Ke
      } = (0, he.v)(), Ue = be ? "ai" : "hidden" !== ie ? "world" : "code", Fe = [{
        value: "code",
        label: Ke("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: Ke("codeEditorWorld:title")
      }];
      be && Fe.push({
        value: "ai",
        label: Ke("codeEditorWorld:aiPane")
      });
      return (0, oe.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, oe.jsx)(rM.b, {
          options: Fe,
          value: Ue,
          onChange: ee => {
            "world" !== ee ? (be && Me(), He("hidden")) : "hidden" === ie ? ye() : Me()
          },
          ariaLabel: Ke("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var eK = He(37739),
      iK = He(37745),
      HK = He(37750),
      yK = He(37752);
    const bK = (0, be.lazy)((() => Promise.all([He.e(608), He.e(604), He.e(607), He.e(603), He.e(98), He.e(606), He.e(605), He.e(602)]).then((() => He(44499))))),
      MK = (0, be.lazy)((() => Promise.all([He.e(93), He.e(96), He.e(97), He.e(95), He.e(610)]).then((() => He(44656))))),
      KK = (0, be.lazy)((() => Promise.all([He.e(608), He.e(607), He.e(98), He.e(96), He.e(97), He.e(95), He.e(606), He.e(605), He.e(94), He.e(105)]).then((() => He(44659)))));

    function UK(ee) {
      return Je.gameBridge.query("worldCodeAiChunk", ee)
    }

    function FK() {
      return Je.gameBridge.query("worldCodeAiGameState", null)
    }

    function JK(ee) {
      const {
        gsUrl: ie,
        gameNameWithVariation: He,
        lobbyName: ye
      } = FM();
      return (0, Yb.postJsonWithMetricsCookiesAndJsonResponse)(`${ie}/code/get-lobby-code`, Ab.pk["get-lobby-code"].toBuffer({
        gameNameWithVariation: He,
        lobbyName: ye,
        path: ee
      }), {
        retries: 1
      })
    }
    let oK = !1;
    const RK = [],
      kK = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      qK = (0, be.memo)((function(ee) {
        var ie, He;
        let {
          show: ye,
          onOpen: Me,
          onClose: Ue,
          isLobbyCode: Re
        } = ee;
        const ke = (0, be.useRef)(""),
          [Te, Xe] = (0, be.useState)(null),
          ze = (0, be.useRef)(Re),
          [Be, Ee] = (0, be.useState)({
            message: null,
            type: null
          }),
          [ge, Oe] = (0, be.useState)(""),
          de = Be.message ? Be : {
            message: ge,
            type: "warning"
          },
          [De, Pe] = (0, be.useState)(!0),
          [Ae, Ve] = (0, BM.m)(BM.i),
          [ae, ce] = (0, BM.m)(BM.d),
          [xe, Le] = (0, be.useState)(!1),
          [Ce, me] = (0, be.useState)(!1),
          le = (0, be.useRef)(null),
          Se = (0, be.useRef)(!1);
        (0, be.useEffect)((() => {
          var ee;
          Ce && Se.current && (Se.current = !1, null === (ee = le.current) || void 0 === ee || ee.focus())
        }), [Ce]);
        const ne = (0, eK.d)(),
          je = (0, be.useRef)(null),
          Ie = (0, be.useRef)(null),
          {
            openInGameMenuName: Ne,
            openEverythingMenuName: Ge,
            worldPanelHud: re
          } = (0, ve.m)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          Qe = ee => {
            ye && (je.current = ee, wi.current = !0)
          };
        (0, We.f)("OpenReportMenu", (() => {
          Qe("RR")
        })), (0, We.f)("OpenStoreFromCodeEditor", (() => {
          Qe("store")
        })), (0, be.useEffect)((() => {
          const ee = je.current;
          null === ee || "RR" === ee && ("makeReport" === Ne || "makeDiscordReport" === Ne) || "store" === ee && null !== Ge || (je.current = null, null === Ne && null === Ge ? Re ? (Ie.current = MH.current, fe.h.yR("EditLobbyCode", Te)) : fe.h.yR("EditCodeBlock", {
            pos: Te,
            canChangePos: ze.current
          }) : (0, dM.D)())
        }), [Ne, Ge, Re, Te]), (0, be.useEffect)((() => {
          if (ye) return () => {
            Ie.current = null
          }
        }), [ye]);
        const [ei, ii] = function() {
          const [ee, ie] = (0, be.useState)(oK);
          return (0, We.f)("CodeEditorAiHelperShown", (ee => {
            ie(ee)
          })), [ee, (0, be.useCallback)((ee => {
            oK = ee, fe.h.yR("CodeEditorAiHelperShown", ee)
          }), [])]
        }(), [Hi, yi] = (0, be.useState)(null), [bi, Mi] = (0, be.useState)([]), [Ki, Ui] = (0, be.useState)(0), [Fi, Ji] = (0, be.useState)(0), [oi, Ri] = (0, be.useState)(""), qi = (0, be.useRef)(null), [fi, Ti] = (0, be.useState)(Re ? yK.g : null), Xi = Re || null !== Te, zi = (0, Fe.i)("canEditCode"), Bi = (0, Fe.i)("canUseDevCreativeItems"), Ei = (0, OM.i)("welcome"), gi = (0, OM.i)("docsOverview"), Oi = gi ? "docsOverview" : "welcome", di = null !== gi && void 0 !== gi ? gi : Ei, Wi = (0, OM.i)("aiHelperOverview"), ti = Wi ? "aiHelperOverview" : "welcome", Zi = null !== Wi && void 0 !== Wi ? Wi : Ei, wi = (0, be.useRef)(!1), Di = (0, be.useRef)(!1), Pi = (0, be.useRef)(null), [Ai, Yi] = (0, be.useState)(""), [Vi, ai] = (0, be.useState)(!1), [ci, xi] = (0, be.useState)(null), Li = (0, Ze.k)("connectedGame"), Ci = Re && zi && "classic" === Li.gameNameWithVariation && !(0, ki.K)(Li.lobbyName), [vi, ui] = (0, be.useState)(null), [mi, Si] = (0, be.useState)({
          [Vb.j]: ""
        }), [ji, si] = (0, be.useState)({
          assets: {},
          revision: 0
        }), Ii = (0, be.useRef)(ji), Ni = (0, be.useCallback)((ee => {
          var ie;
          ee.revision < Ii.current.revision || (Ii.current = ee, si(ee), Oe(ee.startupError ? `Schematics could not load: ${ee.startupError}` : ""), null === (ie = XH.current) || void 0 === ie || ie.onLobbyFilesChanged({
            ...oH.current,
            ...(0, lb.l)(ee.assets)
          }))
        }), []), [Gi, ri] = (0, be.useState)(Vb.j), [Qi, eH] = (0, be.useState)(null), [iH, HH] = (0, be.useState)(null), yH = (0, be.useRef)(!1), bH = (0, be.useRef)(null), MH = (0, be.useRef)(Gi);
        MH.current = Gi;
        const KH = (0, be.useRef)(Qi);
        KH.current = Qi;
        const UH = Qi ? null : ci,
          FH = UH && !UH.engineLocked ? UH.worldCodeEngine : null,
          JH = (0, be.useRef)(iH);
        JH.current = iH;
        const oH = (0, be.useRef)(mi);
        oH.current = mi;
        const RH = (0, be.useRef)(null),
          kH = (0, be.useRef)(null),
          [qH, fH] = (0, be.useState)(!1),
          TH = (0, eM.r)(),
          pH = (0, be.useRef)([]),
          XH = (0, be.useRef)(null),
          zH = (0, be.useRef)(null),
          BH = (0, be.useRef)(null);

        function EH(ee) {
          Ee(ee), clearTimeout(Pi.current), Pi.current = setTimeout((() => {
            Ee({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const gH = (0, be.useCallback)((function() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            yH.current && bH.current && (Je.gameBridge.send("sendCodeCollab", {
              ue: ab.c.Leave,
              Se: (0, ab.x)(bH.current),
              zF: !!ee || null
            }), yH.current = !1, bH.current = null), ui(null)
          }), []),
          dH = (0, be.useCallback)((ee => {
            const ie = {
              kind: "lobby",
              path: ee
            };
            bH.current = ie, ri(ee), ke.current = "", Je.gameBridge.send("sendCodeCollab", {
              ue: ab.c.Join,
              Se: (0, ab.x)(ie)
            }), yH.current = !0
          }), []),
          WH = (0, be.useCallback)((ee => {
            var ie;
            const He = null === (ie = zH.current) || void 0 === ie ? void 0 : ie.collabState;
            return He && "lobby" === He.docKey.kind && He.docKey.path === ee && MH.current === ee ? Promise.resolve({
              doc: He.doc,
              version: He.version,
              clientID: He.clientID,
              docKey: He.docKey,
              httpConfig: He.httpConfig
            }) : new Promise(((ie, He) => {
              const ye = setTimeout((() => {
                  pH.current = pH.current.filter((ee => ee !== be)), He(new Error(`Timed out joining ${ee}`))
                }), 15e3),
                be = He => {
                  "lobby" === He.docKey.kind && He.docKey.path === ee && (clearTimeout(ye), pH.current = pH.current.filter((ee => ee !== be)), ie(He))
                };
              pH.current.push(be), MH.current !== ee ? (gH(!0), dH(ee)) : yH.current || dH(ee)
            }))
          }), [dH, gH]),
          tH = (0, be.useCallback)((async function(ee, ie) {
            let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const ye = Date.now();
            let be = ee in oH.current;
            for (; be !== ie;) {
              if (Date.now() - ye > He) throw new Error(`Timed out waiting for lobby path ${ee} present=${ie}`);
              await (0, gy.U)(50), be = ee in oH.current
            }
          }), []),
          ZH = (0, be.useCallback)((ee => {
            const ie = oH.current,
              He = Vb.j in ie && Vb.k in ie;
            if (!(0, cb.i)(ee) || He) {
              if (MH.current === ee) {
                var ye;
                const be = He && (0, cb.i)(ee) ? ee === Vb.j ? Vb.k : Vb.j : null !== (ye = (0, cb.c)(ie)) && void 0 !== ye ? ye : Vb.j;
                kH.current = {
                  fromPath: ee,
                  toPath: be
                }, ri(be)
              }
              Je.gameBridge.send("sendCodeCollab", {
                ue: ab.c.DeleteFile,
                Se: (0, ab.x)({
                  kind: "lobby",
                  path: MH.current
                }),
                BF: ee
              })
            }
          }), []),
          wH = (0, be.useCallback)((ee => {
            Ie.current = null, eH(null), HH(null), !Re || ee === MH.current && yH.current || (gH(!0), dH(ee))
          }), [Re, gH, dH]),
          DH = (0, be.useCallback)(((ee, ie) => {
            const He = ub.h[ee],
              ye = He && ie in He.files ? ie : "index.ts";
            if (ee !== KH.current || ye !== JH.current) {
              var be;
              if (ee !== KH.current) null === (be = XH.current) || void 0 === be || be.stopContinuousSync(), gH(!0);
              eH(ee), HH(ye)
            }
          }), [gH]),
          PH = (0, be.useCallback)((ee => {
            var ie;
            const He = MH.current,
              ye = oH.current[He],
              be = yH.current && !KH.current && He in ee && void 0 !== ye ? {
                ...ee,
                [He]: ye
              } : ee;
            Si(be);
            const Me = RH.current;
            if (Me && Me in ee) RH.current = null, Me !== MH.current && wH(Me);
            else if (!(MH.current in ee) && yH.current && !KH.current) {
              var Ke;
              wH(null !== (Ke = (0, cb.c)(ee)) && void 0 !== Ke ? Ke : Vb.j)
            }
            null === (ie = XH.current) || void 0 === ie || ie.onLobbyFilesChanged({
              ...be,
              ...(0, lb.l)(Ii.current.assets)
            })
          }), [wH]),
          AH = (0, be.useCallback)((() => JK(MH.current).then((async ee => {
            if (!yH.current || !ee.files) return null;
            PH(ee.files);
            const ie = await JM({
              action: "state"
            });
            return Ni(ie), {
              ...ee.files,
              ...(0, lb.l)(ie.assets)
            }
          })).catch((ee => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", ee), EH({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [PH, Ni]),
          YH = () => {
            Ue()
          };
        (0, be.useEffect)((() => {
          if (Oe(""), !ye || !Re) return;
          let ee = !1;
          return Ii.current = {
            assets: {},
            revision: 0
          }, si(Ii.current), JM({
            action: "state"
          }).then((ie => {
            ee || Ni(ie)
          })).catch((ie => {
            console.error("Could not load project schematics", ie), ee || Oe("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            ee = !0
          }
        }), [ye, Re, Ni]);
        const VH = (0, be.useCallback)((function() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            bH.current && Je.gameBridge.send("sendCodeCollab", {
              ue: ab.c.Submit,
              Se: (0, ab.x)(bH.current),
              ...ee ? {
                Ie: "keepOpen"
              } : {}
            })
          }), []),
          aH = (0, be.useCallback)((() => {
            if (!bH.current || "lobby" !== bH.current.kind) return;
            const ee = Ai.trim();
            (0, xb.u)(ee) ? (Je.gameBridge.send("sendCodeCollab", {
              ue: ab.c.ReloadAsVariation,
              Se: (0, ab.x)(bH.current),
              Ie: ee
            }), ai(!1)) : EH({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Ai]),
          cH = (0, be.useCallback)((ee => {
            Je.gameBridge.send("sendCodeCollab", {
              ue: ab.c.SetEngine,
              Se: (0, ab.x)({
                kind: "lobby",
                path: MH.current
              }),
              Ie: ee
            })
          }), []),
          xH = (0, be.useCallback)((ee => {
            if (!KH.current && zi && (ze.current || Re)) {
              if (Re) {
                var ie;
                const He = (0, cb.s)(oH.current, MH.current),
                  ye = Math.min(li.z, Math.max(0, li.E - He)),
                  be = ee.slice(0, ye);
                return ke.current = be, Si((ee => ({
                  ...ee,
                  [MH.current]: be
                }))), void(null === (ie = XH.current) || void 0 === ie || ie.onDocTextChanged(MH.current, be))
              }
              ke.current = ee, Ri(ee)
            }
          }), [zi, Re]);
        (0, We.f)("EditLobbyCode", (ee => {
          var ie;
          Ye.featureFlags.canSeePlayerWrittenText && Re && (gH(), Xe(ee), ke.current = "", Si({
            [Vb.j]: ""
          }), xi(null), ri(Vb.j), eH(null), HH(null), RH.current = null, kH.current = null, null === (ie = XH.current) || void 0 === ie || ie.stopContinuousSync(), Me(), dH(Vb.j))
        })), (0, We.f)("EditCodeBlock", (ee => {
          let {
            pos: ie,
            canChangePos: He
          } = ee;
          if (Ye.featureFlags.canSeePlayerWrittenText && !Re)
            if (gH(), null !== ie && (ie = [...ie]), Xe(ie), ze.current = He, null !== ie) {
              ke.current = "", Ri(""), Me();
              const ee = {
                  kind: "codeBlock",
                  pos: ie
                },
                ye = (0, ab.x)(ee);
              qi.current !== ye && (qi.current = ye, Mi([]), Ji(Ki)), Ti((0, yK.c)(ye, [ie[0], ie[1], ie[2]], !!He)), bH.current = ee, Je.gameBridge.send("sendCodeCollab", {
                ue: ab.c.Join,
                Se: (0, ab.x)(ee)
              }), yH.current = !0
            } else ye && Ue()
        })), (0, We.f)("codeCollabRejoin", (ee => {
          const ie = bH.current ? (0, ab.x)(bH.current) : null;
          ie && ee.docKey === ie && (ke.current = ee.doc, Re || Ri(ee.doc), ui((ie => ie ? {
            ...ie,
            doc: ee.doc,
            version: ee.version,
            clientID: (0, vb.d)()
          } : ie)))
        })), (0, We.f)("codeCollab", (ee => {
          var ie;
          const He = bH.current ? (0, ab.x)(bH.current) : null;
          if (ee.type === ab.e.LobbyFilesChanged && Re) {
            if ("string" !== typeof ee.files) return void AH();
            try {
              PH(JSON.parse(ee.files))
            } catch (Je) {
              console.error("[CodeCollab] Failed to parse lobby files", Je), AH()
            }
            return
          }
          if (ee.type === ab.e.EngineSettings && Re) return void xi(fM(ee.engineSettings));
          const be = ee.type === ab.e.Joined ? (0, ab.j)(ee.docKey) : null,
            Me = Re && "lobby" === (null === (ie = bH.current) || void 0 === ie ? void 0 : ie.kind) && (0, cb.i)(bH.current.path) && "lobby" === (null === be || void 0 === be ? void 0 : be.kind) && (0, cb.i)(be.path);
          if (!He || ee.docKey === He || Me)
            if (ee.type !== ab.e.ForceClose) {
              if (ye)
                if (ee.type === ab.e.Joined) {
                  var Ke;
                  const oe = JSON.parse(ee.peers),
                    qe = ee.existingCursors ? JSON.parse(ee.existingCursors) : [],
                    pe = (0, vb.d)(),
                    Xe = FM(),
                    {
                      gsUrl: ze,
                      gameNameWithVariation: Be,
                      lobbyName: ge
                    } = Xe,
                    Oe = null !== (Ke = (0, ab.j)(ee.docKey)) && void 0 !== Ke ? Ke : bH.current;
                  Oe && (bH.current = Oe, "lobby" === Oe.kind && (ri(Oe.path), MH.current = Oe.path));
                  const de = Oe || (Re ? {
                    kind: "lobby",
                    path: MH.current
                  } : {
                    kind: "codeBlock",
                    pos: Te
                  });

                  function We(ie) {
                    var He, ye;
                    if (!yH.current) return;
                    const be = null !== (He = ie.code) && void 0 !== He ? He : "",
                      Me = null !== (ye = ie.collabVersion) && void 0 !== ye ? ye : 0;
                    ke.current = be, Re || Ri(be), Re && ie.files ? Si(ie.files) : Re && Si((ee => ({
                      ...ee,
                      [MH.current]: be
                    })));
                    const Ke = {
                      doc: be,
                      version: Me,
                      clientID: pe,
                      docKey: de,
                      peers: oe,
                      editorCount: ee.editorCount,
                      existingCursors: qe,
                      httpConfig: Xe
                    };
                    if (ui(Ke), "lobby" === de.kind) {
                      var Ue;
                      const ee = {
                        doc: be,
                        version: Me,
                        clientID: pe,
                        docKey: de,
                        httpConfig: Xe
                      };
                      for (const ie of [...pH.current]) ie(ee);
                      null === (Ue = XH.current) || void 0 === Ue || Ue.startWhenReady()
                    }
                    ie.canSeeCode ? (clearTimeout(Pi.current), Ee({
                      message: null,
                      type: null
                    })) : function(ee) {
                      clearTimeout(Pi.current), Ee(ee)
                    }(kK);
                    const Fe = Ie.current;
                    Ie.current = null, Re && Fe && ie.files && Fe in ie.files && Fe !== MH.current && wH(Fe)
                  }
                  Re ? JK(MH.current).then(We).catch((ee => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", ee), gH()
                  })) : (0, Yb.postJsonWithMetricsCookiesAndJsonResponse)(`${ze}/code/get-code-block`, Ab.pk["get-code-block"].toBuffer({
                    gameNameWithVariation: Be,
                    lobbyName: ge,
                    pos: Te
                  }), {
                    retries: 1
                  }).then(We).catch((ee => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", ee), gH()
                  }))
                } else if (ee.type === ab.e.Presence) {
                if (!He) return;
                const te = JSON.parse(ee.peers);
                ui((ie => ie ? {
                  ...ie,
                  peers: te,
                  editorCount: ee.editorCount
                } : ie))
              }
            } else {
              var Fe;
              if (!He) return;
              ye && Re && "keptOpen" === ee.updates && fe.h.yR("CodeEditorKeepEdits");
              const Ze = bH.current;
              yH.current = !1, bH.current = null, ui(null);
              if (!Re || "close" === ee.updates) return (0, HK.i)(), void(ye && Ue());
              if (!ye) return;
              const we = oH.current,
                De = kH.current;
              kH.current = null;
              const Pe = "lobby" === (null === Ze || void 0 === Ze ? void 0 : Ze.kind) && Ze.path === (null === De || void 0 === De ? void 0 : De.fromPath),
                Ae = De && (Pe || De.toPath in we || (0, cb.i)(De.toPath)) ? De.toPath : MH.current in we ? MH.current : null !== (Fe = (0, cb.c)(we)) && void 0 !== Fe ? Fe : Vb.j;
              dH(Ae)
            }
        })), (0, We.f)("refetchCode", (() => {
          Ye.featureFlags.canSeePlayerWrittenText && ye && yH.current && (zi || (gH(), Re ? fe.h.yR("EditLobbyCode", Te) : fe.h.yR("EditCodeBlock", {
            pos: Te,
            canChangePos: ze.current
          })))
        }));
        const LH = (0, be.useCallback)((() => {
            ye && (Le(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [ye]),
          CH = (0, be.useCallback)((() => {
            Le(!1)
          }), []);
        (0, be.useEffect)((() => {
          ye && zi && ("docsButton" === di && xe ? (0, dM.f)("docsButton") : di && dM.i.includes(di) && !xe && (Le(!0), ii(!1)))
        }), [ye, zi, di, xe, ii]);
        const vH = (0, be.useCallback)((() => {
          ii(!1)
        }), [ii]);
        (0, be.useEffect)((() => {
          ye && zi && Xi && ("aiHelperButton" === Zi && ei ? (0, dM.f)("aiHelperButton") : Zi && dM.e.includes(Zi) && !ei && (ii(!0), Le(!1)))
        }), [ye, zi, Xi, Zi, ei, ii]), (0, be.useEffect)((() => {
          if (!ye || !zi) return;
          const ee = Re ? "worldCode" : "codeBlock";
          return (0, dM.G)(ee, !0), () => {
            (0, dM.G)(ee, !1)
          }
        }), [ye, zi, Re]), (0, be.useEffect)((() => {
          if (ye) return () => {
            wi.current ? wi.current = !1 : (0, dM.D)()
          }
        }), [ye]), (0, be.useEffect)((() => {
          (0, dM.J)("exportButton", !!Bi)
        }), [Bi]);
        const {
          t: uH
        } = (0, he.v)(), mH = !ei && Ki > Fi, lH = mH ? qe.G : qe.u, SH = (0, be.useCallback)(((ee, ie) => {
          fe.h.yR("CodeEditorGoToLine", {
            path: ee,
            line: ie
          }), wH(ee)
        }), [wH]), nH = (0, be.useCallback)((ee => {
          BH.current = ee
        }), []), jH = function(ee, ie) {
          const [He, ye] = (0, be.useState)(null);
          return (0, be.useEffect)((() => {
            if (!ie) return void ye(null);
            let He = !1;
            return Qb(ee).then((ee => {
              He || ye(ee)
            }), (ee => {
              console.error("[CodeEditor] could not collect the imported plugins", ee), He || ye(null)
            })), () => {
              He = !0
            }
          }), [ee, ie]), He
        }(mi, ye);
        (0, be.useEffect)((() => {
          jH && Qi && !jH.includes(Qi) && (eH(null), HH(null), Re && !yH.current && dH(MH.current))
        }), [Qi, jH, Re, dH]), zH.current = {
          collabState: vi,
          ensureJoinedPath: WH,
          waitForLobbyPath: tH,
          pullLobbyFiles: AH,
          t: uH,
          canEditCode: !!zi
        }, XH.current || (XH.current = new KM({
          getLobbyFiles: () => ({
            ...oH.current,
            ...(0, lb.l)(Ii.current.assets)
          }),
          deleteSchematic: async ee => {
            const ie = await JM({
              action: "remove",
              path: ee,
              expectedRevision: Ii.current.revision
            });
            Ni(ie)
          },
          getActivePath: () => MH.current,
          getCollabSnapshot: () => {
            var ee;
            if (KH.current) return null;
            const ie = null === (ee = zH.current) || void 0 === ee ? void 0 : ee.collabState;
            return ie ? {
              doc: ie.doc,
              version: ie.version,
              clientID: ie.clientID,
              docKey: ie.docKey,
              httpConfig: ie.httpConfig
            } : null
          },
          replaceActiveDoc: (ee, ie) => {
            var He, ye;
            return null !== (He = null === (ye = BH.current) || void 0 === ye ? void 0 : ye.call(BH, ee, ie)) && void 0 !== He && He
          },
          ensureJoined: ee => zH.current.ensureJoinedPath(ee),
          createFile: (ee, ie) => {
            !1 !== (null === ie || void 0 === ie ? void 0 : ie.focus) && (RH.current = ee), Je.gameBridge.send("sendCodeCollab", {
              ue: ab.c.CreateFile,
              Se: (0, ab.x)({
                kind: "lobby",
                path: MH.current
              }),
              BF: ee
            })
          },
          renameFile: (ee, ie) => {
            const He = (0, ab.x)({
              kind: "lobby",
              path: MH.current
            });
            MH.current === ee && (kH.current = {
              fromPath: ee,
              toPath: ie
            }, ri(ie)), Je.gameBridge.send("sendCodeCollab", {
              ue: ab.c.RenameFile,
              Se: He,
              BF: ee,
              EF: ie
            })
          },
          deleteFile: ee => {
            ZH(ee)
          },
          waitForLobbyPath: (ee, ie, He) => zH.current.waitForLobbyPath(ee, ie, He),
          pullLobbyFiles: () => zH.current.pullLobbyFiles(),
          setMessage: (ee, ie) => {
            EH({
              message: ee,
              type: ie
            })
          },
          onUnlinked: () => {
            fH(!1)
          },
          t: ee => zH.current.t(ee),
          canEditCode: () => zH.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: ee,
              lobbyName: ie
            } = Je.gameBridge.latest("connectedGame");
            return (0, eM.e)(ee, ie)
          }
        }));
        const sH = (0, be.useCallback)((async ee => {
            const ie = XH.current;
            if (!ie) return !1;
            try {
              return await ie.writeLobbyFiles(ee)
            } catch (He) {
              return console.error("World Code AI: couldn't write the change", He), !1
            }
          }), []),
          IH = (0, be.useCallback)((async ee => {
            var ie, He;
            const ye = null === (ie = ee.find((ee => ee.path === iK.c))) || void 0 === ie ? void 0 : ie.text,
              be = bH.current;
            return void 0 !== ye && "codeBlock" === (null === be || void 0 === be ? void 0 : be.kind) && (!(null === (He = BH.current) || void 0 === He || !He.call(BH, (0, ab.x)(be), ye)) && (ke.current = ye, Ri(ye), !0))
          }), []),
          hH = (0, be.useCallback)((async () => {
            try {
              var ee, ie;
              const He = await JK(Vb.j);
              return !1 === He.canSeeCode ? null : null !== (ee = He.files) && void 0 !== ee ? ee : {
                [Vb.j]: null !== (ie = He.code) && void 0 !== ie ? ie : ""
              }
            } catch (He) {
              return console.error("World Code AI: couldn't read World Code for a code block", He), null
            }
          }), []),
          NH = (0, be.useMemo)((() => ({
            [iK.c]: oi
          })), [oi]),
          GH = (0, be.useCallback)(((ee, ie) => {
            fe.h.yR("CodeEditorGoToLine", {
              path: iK.c,
              line: ie
            })
          }), []);
        (0, be.useEffect)((() => {
          ei && ye && Ji(Ki)
        }), [ei, ye, Ki]);
        const rH = (0, be.useCallback)((() => {
            var ee, ie;
            VH();
            const He = (0, Ye.isTouchscreen)() ? "open World Code again" : `press ${null!==(ee=null===(ie=ni.q.OpenCodeEditor)||void 0===ie?void 0:ie[0])&&void 0!==ee?ee:"F8"}`,
              ye = Re ? `\ud83e\udd16 Try out your change, then ${He} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            fe.h.yR("chat", {
              content: [{
                str: ye,
                style: {
                  color: te.L.cyanUiText
                }
              }]
            })
          }), [VH, Re]),
          QH = (0, be.useCallback)((ee => {
            const ie = Te,
              He = ze.current;
            Re || !ie || Je.gameBridge.lookup("codeBlockClickable", ie) ? (0, HK.l)(ee, {
              submit: () => {
                VH(), fe.h.yR("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: te.L.cyanUiText
                    }
                  }]
                }), !Re && ie && setTimeout((() => {
                  Je.gameBridge.send("clickCodeBlock", ie)
                }), 1e3)
              },
              reopen: () => {
                (0, ue.o)() || (Re ? fe.h.yR("EditLobbyCode", ie) : fe.h.yR("EditCodeBlock", {
                  pos: ie,
                  canChangePos: He
                }))
              }
            }) : rH()
          }), [VH, Re, Te, rH]),
          ey = (0, be.useCallback)((() => {
            ii(!1)
          }), [ii]),
          iy = (0, be.useRef)(YH);
        iy.current = YH;
        const Hy = (0, be.useCallback)((function(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            fe.h.yR("WorldCodeAiDraft", {
              text: ee,
              send: ie
            }), iy.current(), fe.h.yR("EditLobbyCode", Te)
          }), [Te]),
          yy = (0, be.useCallback)((ee => {
            iy.current(), ee.codeBlock ? fe.h.yR("EditCodeBlock", {
              pos: [...ee.pos],
              canChangePos: ee.canChangePos
            }) : fe.h.yR("EditLobbyCode", Te)
          }), [Te]);
        (0, We.f)("WorldCodeAiDraft", (ee => {
          Re && (yi(ee), ii(!0))
        }));
        const by = !!zi && !!di && dM.i.includes(di),
          My = !!zi && !!Zi && dM.e.includes(Zi);
        (0, be.useEffect)((() => {
          ye && ei && Xi && !by && Le(!1)
        }), [ye, ei, Xi, by]);
        const Ky = (0, be.useCallback)((() => {
            ii(!1), Le(!1)
          }), [ii]),
          {
            xR: Uy,
            setWorld: Fy,
            toggleWorld: Jy
          } = function(ee) {
            let {
              showAi: ie,
              showDocs: He,
              showChat: ye,
              hideOtherRightPanels: Me
            } = ee;
            const [Ke, Ue] = (0, be.useState)("hidden"), Fe = (0, be.useRef)(null), Je = (0, be.useCallback)((() => {
              Fe.current = null, Ue((ee => "hidden" === ee ? ee : (0, AM.e)() ? "hidden" : "shown"))
            }), []);
            (0, be.useEffect)((() => {
              (ie || He) && Je()
            }), [ie, He, Je]), (0, be.useEffect)((() => {
              ye && Je()
            }), [ye, Je]);
            const oe = "hidden" !== Ke && (0, AM.e)();
            (0, be.useLayoutEffect)((() => {
              if (oe) {
                const ee = document.activeElement;
                ee instanceof HTMLElement && ee.closest(".cm-content") && (Fe.current = ee, ee.blur())
              } else {
                var ee;
                null === (ee = Fe.current) || void 0 === ee || ee.focus(), Fe.current = null
              }
            }), [oe]);
            const Re = (0, be.useCallback)((() => {
              "hidden" === Ke ? (Ue("shown"), (0, AM.e)() && Me()) : Ue("hidden")
            }), [Ke, Me]);
            return {
              xR: Ke,
              setWorld: Ue,
              toggleWorld: Re
            }
          }({
            showAi: ei,
            showDocs: xe,
            showChat: Ce,
            hideOtherRightPanels: Ky
          }),
          oy = ei && null !== fi && Xi,
          Ry = (0, be.useCallback)((() => {
            yi(null)
          }), []),
          [ky, qy] = (0, be.useState)(null);
        (0, We.f)("WorldCodeAiSelection", (ee => {
          ye && (qy(ee), ii(!0), Le(!1))
        }));
        const fy = (0, be.useCallback)((() => {
          qy(null)
        }), []);
        (0, We.f)("chat", (ee => {
          let {
            content: ie
          } = ee;
          if (!Re && null === qi.current) return;
          const He = Array.isArray(ie) ? ie : [ie],
            ye = He.some((ee => {
              var ie;
              return (null === ee || void 0 === ee || null === (ie = ee.style) || void 0 === ie ? void 0 : ie.color) === te.L.redUiText
            })),
            be = He.map((ee => {
              var ie;
              const He = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.str) && void 0 !== ie ? ie : ee;
              return "string" === typeof He ? He : ""
            })).join("");
          ye && /world code|error/i.test(be) && (Mi((ee => [...ee, be].slice(-10))), Ui((ee => ee + 1)), (0, HK.e)(be))
        })), (0, be.useEffect)((() => {
          if (!ye || !Re || !TH) return;
          let ee = !1;
          return (async (ie, He) => {
            const ye = await (null === (ie = XH.current) || void 0 === ie ? void 0 : ie.tryRestoreHandle());
            !ee && ye && (fH(!0), null === (He = XH.current) || void 0 === He || He.startWhenReady())
          })(), () => {
            ee = !0
          }
        }), [ye, Re, TH]), (0, be.useEffect)((() => {
          var ee;
          ye || (null === (ee = XH.current) || void 0 === ee || ee.stopContinuousSync(), gH(!1), Di.current && (Di.current = !1, Je.gameBridge.send("sendChatMessage", {
            nF: "//export",
            channelName: null
          })))
        }), [ye, gH]);
        const Ty = (0, be.useCallback)((async () => {
            if (TH && XH.current) try {
              if (!await XH.current.linkFolder()) return;
              fH(!0), await XH.current.startWhenReady()
            } catch (ee) {
              console.error("[WorldCodeDirectorySync] Link failed", ee), EH({
                message: uH("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [TH, uH]),
          py = (0, be.useCallback)((async () => {
            XH.current && await XH.current.unlinkFolder()
          }), []),
          Xy = (0, be.useCallback)((() => {
            TH ? qH ? py() : Ty() : Ub.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok",
              middleScreenPopupContainerClassName: jb.c
            })
          }), [TH, qH, Ty, py]),
          zy = Re && "hidden" !== Uy;
        return (0, oe.jsxs)(Ke.e, {
          className: OH()("CodeEditorBg", {
            CodeEditorLight: Ae,
            WorldShown: "hidden" !== Uy,
            WorldTouchControl: "touchControls" === re
          }),
          close: YH,
          escDoesExit: !0,
          show: ye,
          togglePointerLock: !1,
          globallyUniqueKey: Re ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, oe.jsx)(OM.b, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: uH("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!zi && !Re
          }), (0, oe.jsx)(OM.b, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, oe.jsxs)(oe.Fragment, {
              children: [(0, oe.jsx)("p", {
                children: uH("codeEditor:tutorialWorldCodeWelcome")
              }), (0, oe.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, oe.jsx)("li", {
                  children: uH("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, oe.jsx)("li", {
                  children: uH("codeEditor:tutorialWorldCodeUseReact")
                }), (0, oe.jsx)("li", {
                  children: uH("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!zi && Re
          }), (0, oe.jsx)("div", {
            className: "CodeEditorTitle",
            children: Re ? "World Code" : "Code Block"
          }), (0, oe.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, oe.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, oe.jsx)(se.g, {
                tooltipInner: uH(Bi ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: Bi ? void 0 : 0,
                hideTooltip: "exportButton" === Ei,
                children: (0, oe.jsx)(OM.h, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: uH("codeEditor:tutorialExport"),
                  enabled: !!zi,
                  children: (0, oe.jsx)(qe.m, {
                    className: "CodeEditorButton",
                    disabled: !Bi,
                    onClick: () => {
                      "exportButton" === Ei && ((0, dM.f)("exportButton"), wi.current = !0), Di.current = !0, YH()
                    },
                    padDestructive: !0,
                    children: uH("codeEditor:exportWorld")
                  })
                })
              }), (0, oe.jsx)(QM, {
                xR: Uy,
                setWorld: Fy,
                toggleWorld: Jy,
                aiShown: oy,
                closeAi: ey
              })]
            }), (0, oe.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [zi && (0, oe.jsx)(se.g, {
                tooltipInner: uH("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === Ei,
                children: (0, oe.jsx)(OM.h, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: uH("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, oe.jsx)(qe.c, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: uH("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, dM.f)("helpButton"), Ub.NotificationProvider.showCustomPopup({
                        body: ee => (0, oe.jsx)(WM, {
                          close: ee
                        }),
                        unlockPointerKey: "codeEditorTutorials",
                        middleScreenPopupContainerClassName: jb.c
                      })
                    },
                    children: (0, oe.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, oe.jsx)(pe.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, oe.jsx)(se.g, {
                tooltipInner: uH("codeEditor:closeTooltip"),
                children: (0, oe.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    YH()
                  },
                  children: (0, oe.jsx)(qe.i, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, oe.jsx)(Cb, {
            peers: null !== (ie = null === vi || void 0 === vi ? void 0 : vi.peers) && void 0 !== ie ? ie : []
          }), (0, oe.jsxs)("div", {
            className: OH()("CodeEditorMainArea", {
              WorldCovers: "always" === YM(Uy),
              WorldCoversWhenNarrow: "narrow" === YM(Uy)
            }),
            children: [Ce && ne && (0, oe.jsx)(AM.c, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                me(!1)
              },
              children: (0, oe.jsx)(PM, {
                inputRef: le
              })
            }), Re && (0, oe.jsx)(sb, {
              schematics: ji.assets,
              onManageSchematic: ee => {
                zi && Ub.NotificationProvider.showCustomPopup({
                  body: ie => (0, oe.jsx)(qM, {
                    initialPath: ee,
                    onChanged: Ni,
                    onClose: ie
                  }),
                  unlockPointerKey: "worldCodeSchematics",
                  middleScreenPopupContainerClassName: jb.c
                })
              },
              files: mi,
              activePath: Gi,
              canEdit: !!zi,
              directoryLinked: qH,
              pluginNames: null !== jH && void 0 !== jH ? jH : RK,
              activePluginName: Qi,
              activePluginFile: iH,
              onSelect: wH,
              onSelectPlugin: DH,
              onToggleDirectorySync: Xy,
              onCreate: ee => {
                RH.current = ee, Je.gameBridge.send("sendCodeCollab", {
                  ue: ab.c.CreateFile,
                  Se: (0, ab.x)({
                    kind: "lobby",
                    path: MH.current
                  }),
                  BF: ee
                })
              },
              onRename: (ee, ie) => {
                MH.current === ee && (kH.current = {
                  fromPath: ee,
                  toPath: ie
                }, ri(ie)), Je.gameBridge.send("sendCodeCollab", {
                  ue: ab.c.RenameFile,
                  Se: (0, ab.x)({
                    kind: "lobby",
                    path: MH.current
                  }),
                  BF: ee,
                  EF: ie
                })
              },
              onRenameFolder: (ee, ie) => {
                const [He] = (0, cb.q)([MH.current], ee, ie);
                He && (kH.current = {
                  fromPath: He[0],
                  toPath: He[1]
                }, ri(He[1])), Je.gameBridge.send("sendCodeCollab", {
                  ue: ab.c.RenameFolder,
                  Se: (0, ab.x)({
                    kind: "lobby",
                    path: MH.current
                  }),
                  BF: ee,
                  EF: ie
                })
              },
              onDelete: ZH
            }), (0, oe.jsx)("div", {
              className: OH()("CodeEditorMessage", {
                CodeEditorMessageHidden: !de.message,
                CodeEditorMessageSuccess: "success" === de.type
              }),
              children: de.message && (0, oe.jsx)("div", {
                className: "CodeEditorMessageText",
                children: de.message
              })
            }), (0, oe.jsx)(be.Suspense, {
              fallback: (0, oe.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, oe.jsx)(we.b, {})
              }),
              children: (0, oe.jsx)(bK, {
                isLobbyCode: Re,
                code: vi ? vi.doc : ke.current,
                files: Re ? mi : void 0,
                activePath: Re ? Gi : void 0,
                pluginName: Qi,
                pluginFile: iH,
                pluginSource: Qi && iH ? null === (He = ub.h[Qi]) || void 0 === He ? void 0 : He.files[iH] : void 0,
                onChange: xH,
                canEditCode: zi,
                setTemporaryMessage: EH,
                close: YH,
                showTooltips: De,
                lightMode: Ae,
                collabState: vi,
                setActiveDocReplacer: nH,
                showAiHints: Xi && ae,
                canAiChangeCode: !!zi && (Re || !!ze.current),
                onRemoteDocChange: ee => {
                  var ie;
                  (ke.current = ee, Re) ? (Si((ie => ({
                    ...ie,
                    [MH.current]: ee
                  }))), null === (ie = XH.current) || void 0 === ie || ie.onDocTextChanged(MH.current, ee)) : Ri(ee)
                }
              })
            }), (xe || oy || "hidden" !== Uy) && (0, oe.jsxs)(VM, {
              xR: Uy,
              worldPanel: (0, oe.jsx)(GM, {
                shown: Uy,
                setShown: Fy,
                canInsertCode: !!zi && !Qi
              }),
              closeWorld: () => {
                Fy("hidden")
              },
              aiShown: oy,
              defaultWidth: xe ? "40%" : "max(18rem, 36%)",
              children: [xe && (0, oe.jsx)(AM.c, {
                onClose: by ? void 0 : CH,
                children: (0, oe.jsx)(be.Suspense, {
                  fallback: (0, oe.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, oe.jsx)(we.b, {})
                  }),
                  children: (0, oe.jsx)(MK, {
                    popOutDocs: LH,
                    hideDocs: CH,
                    tutorialEnabled: !!zi
                  })
                })
              }), oy && (0, oe.jsx)(AM.c, {
                onClose: My ? void 0 : ey,
                children: (0, oe.jsx)(be.Suspense, {
                  fallback: (0, oe.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, oe.jsx)(we.b, {})
                  }),
                  children: (0, oe.jsx)(KK, {
                    target: fi,
                    chatKey: `${Li.gameNameWithVariation}/${Li.lobbyName}/aiHelper`,
                    historyKey: `${Li.gameNameWithVariation}/${Li.lobbyName}/${fi.key}`,
                    files: fi.codeBlock ? NH : mi,
                    activePath: fi.codeBlock ? iK.c : Gi,
                    canEdit: !!zi && (fi.codeBlock ? !!ze.current : !Qi),
                    isLoaded: null !== vi,
                    errors: bi,
                    errorCount: Ki,
                    applyFiles: fi.codeBlock ? IH : sH,
                    submit: rH,
                    testRun: QH,
                    close: ey,
                    goToLine: fi.codeBlock ? GH : SH,
                    openWorldCode: fi.codeBlock ? Hy : void 0,
                    readWorldCode: fi.codeBlock ? hH : void 0,
                    viewChunk: UK,
                    viewGameState: FK,
                    openTarget: zi ? yy : void 0,
                    draft: Hi,
                    onDraftUsed: Ry,
                    selection: ky,
                    onSelectionUsed: fy
                  }, fi.key)
                })
              })]
            })]
          }), !Re && zi && ze.current && (0, oe.jsx)(TM, {
            length: oi.length
          }), (null === UH || void 0 === UH ? void 0 : UH.fallback) && (0, oe.jsx)(pM, {
            fallback: UH.fallback,
            onGoToLine: SH
          }), (0, oe.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, oe.jsx)(se.g, {
              tooltipInner: uH(Ae ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, oe.jsx)(qe.c, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: uH(Ae ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  Ve(!Ae)
                },
                children: (0, oe.jsx)(pe.e, {
                  name: Ae ? "moon" : "sun-bright"
                })
              })
            }), (0, oe.jsx)(se.g, {
              tooltipInner: uH(zy ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, oe.jsx)(qe.m, {
                className: "CodeEditorButton",
                onClick: () => {
                  VH(zy)
                },
                padDefaultFocus: !0,
                children: uH("codeEditor:submitCode")
              })
            }), (0, oe.jsx)(se.g, {
              tooltipInner: uH(xe ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === di || "hideDocsButton" === di,
              children: (0, oe.jsx)(OM.h, {
                tutorial: Oi,
                step: xe ? "hideDocsButton" : "docsButton",
                text: uH(xe ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!zi,
                placement: "top",
                waitForClick: !0,
                onPrevious: xe && "welcome" === Oi ? CH : void 0,
                children: (0, oe.jsx)(qe.u, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, dM.f)(xe ? "hideDocsButton" : "docsButton"), Le(!xe), ii(!1)
                  },
                  children: uH(xe ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), Xi && (0, oe.jsx)(OM.h, {
              tutorial: ti,
              step: ei ? "hideAiHelperButton" : "aiHelperButton",
              text: uH(ei ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === ti ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!zi,
              placement: "top",
              waitForClick: !0,
              onPrevious: ei && "welcome" === ti ? vH : void 0,
              children: (0, oe.jsx)(lH, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, dM.f)(ei ? "hideAiHelperButton" : "aiHelperButton"), ii(!ei), Le(!1)
                },
                children: ei ? "Hide AI Helper" : mH ? "Fix error with AI" : "AI Helper"
              })
            }), ne && (0, oe.jsx)(se.g, {
              tooltipInner: uH(Ce ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, oe.jsx)(qe.u, {
                className: "CodeEditorButton",
                onClick: () => {
                  Se.current = !Ce, me(!Ce)
                },
                children: uH(Ce ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, oe.jsx)(se.g, {
              tooltipInner: uH("hidden" === Uy ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, oe.jsx)(qe.u, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: Jy,
                children: uH("hidden" === Uy ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, oe.jsx)(se.g, {
              tooltipInner: uH("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, oe.jsx)(qe.c, {
                className: "CodeEditorButton",
                onClick: () => {
                  fe.h.yR("FormatCode")
                },
                children: uH("codeEditor:formatCode")
              })
            }), (0, oe.jsx)(se.g, {
              tooltipInner: uH("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, oe.jsx)(qe.c, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(ke.current).then((() => {
                    EH({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    EH({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: uH("codeEditor:copyCode")
              })
            }), (0, oe.jsx)(se.g, {
              tooltipInner: uH(De ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, oe.jsx)(qe.c, {
                className: "CodeEditorButton",
                onClick: () => {
                  Pe(!De)
                },
                children: uH(De ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !Re && (0, oe.jsx)(se.g, {
              tooltipInner: uH("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === Ei,
              children: (0, oe.jsx)(OM.h, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: uH("codeEditor:tutorialWorldCodeButton"),
                enabled: !!zi,
                placement: "top",
                waitForClick: !0,
                children: (0, oe.jsx)(qe.u, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === Ei && ((0, dM.f)("worldCodeButton"), wi.current = !0), YH(), fe.h.yR("EditLobbyCode", Te)
                  },
                  children: uH("codeEditor:worldCode")
                })
              })
            }), (Ci || FH || Xi) && (0, oe.jsx)(se.g, {
              tooltipInner: uH("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, oe.jsx)(qe.c, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  ai(!0)
                },
                children: (0, oe.jsx)(pe.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), Vi && (0, oe.jsx)(Jb.d, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              ai(!1)
            },
            body: (0, oe.jsx)(gM, {
              engine: FH,
              onSetEngine: cH,
              aiHints: Xi ? {
                shown: ae,
                setShown: ce
              } : null,
              variation: Ci ? {
                name: Ai,
                setName: Yi,
                reload: aH
              } : null
            })
          })]
        })
      }));
    var fK = He(37424);
    const TK = new Set(["inventory", "ironChestPasskeyInput"]);
    const pK = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function XK(ee) {
      return "inventory" === ee
    }
    const zK = (0, be.memo)((function() {
      const {
        openEverythingMenuName: ee,
        openInGameMenuName: ie
      } = (0, ve.m)(["openEverythingMenuName", "openInGameMenuName"]), He = (0, Ze.k)("fullInventory"), Me = (0, be.useRef)(null), Ke = (0, Ai.f)();
      (0, We.f)("toggleMenu", (ee => {
        var ie;
        if (!Ke.shown) return;
        const He = ve.e.get("openInGameMenuName");
        let ye = ee.split("|")[0];
        const be = null !== (ie = ee.split("|")[1]) && void 0 !== ie ? ie : null;
        if (("closeCurrentMenu" === be && He || ye === He) && (Me.current = null, ye = null), null !== ye && (Ue = !Je.gameBridge.latest("localPlayerAlive"), Fe = ye, Ue && TK.has(Fe))) return void(null !== Je.gameBridge.latest("inventory").chest && Je.gameBridge.send("closeChest", null));
        var Ue, Fe;
        const oe = "closeCurrentMenu" === be ? null : be;
        Me.current !== oe && (Me.current = oe), null !== ye && (0, Bb.w)(Bb.c, {
          keepsMovement: XK(ye)
        }), ve.e.set({
          openInGameMenuName: ye
        })
      })), (0, Ze.e)("localPlayerAliveSet", (ee => {
        ee || function() {
          (0, fK.d)();
          const ee = ve.e.get("openInGameMenuName");
          null !== ee && TK.has(ee) && ve.e.set({
            openInGameMenuName: null
          })
        }()
      }));
      const Ue = (0, be.useCallback)((ee => () => {
          fe.h.yR("toggleMenu", ee)
        }), []),
        Fe = (0, be.useRef)({
          cantCrouchIfNotFullscreen: Ue("cantCrouchIfNotFullscreen"),
          makeReport: Ue("makeReport"),
          makeDiscordReport: Ue("makeDiscordReport"),
          editBook: Ue("editBook"),
          editNameTag: Ue("editNameTag"),
          inventory: Ue("inventory"),
          inviteLink: Ue("inviteLink"),
          writeOnBoard: Ue("writeOnBoard"),
          codeEditor: Ue("codeEditor"),
          lobbyCodeEditor: Ue("lobbyCodeEditor"),
          customLobbyBlockEditor: Ue("customLobbyBlockEditor"),
          ironChestPasskeyInput: Ue("ironChestPasskeyInput"),
          petUi: Ue("petUi")
        }),
        Re = (0, be.useCallback)((() => {
          ve.e.set({
            openInGameMenuName: null
          })
        }), []),
        ke = (0, be.useRef)(null);
      return (0, be.useEffect)((() => {
        if (ie) {
          var ee;
          (0, Bb.w)(Bb.c, {
            keepsMovement: XK(ie)
          }), ke.current = pK.has(ie) ? null !== (ee = ve.e.get("openEverythingMenuName")) && void 0 !== ee ? ee : ke.current : null, ve.e.set({
            openEverythingMenuName: null
          })
        } else {
          const ee = ke.current;
          ke.current = null, null !== ee && null === ve.e.get("openEverythingMenuName") && ve.e.set({
            openEverythingMenuName: ee
          }), Me.current = null, (0, Bb.v)(Bb.c)
        }
      }), [ie]), (0, be.useEffect)((() => {
        null !== ee && Re()
      }), [ee, Re]), (0, oe.jsxs)(oe.Fragment, {
        children: [(0, oe.jsx)(ye.h, {
          show: "clientGame" === ie
        }), (0, oe.jsx)(bb, {
          show: "cantCrouchIfNotFullscreen" === ie,
          onOpen: Fe.current.cantCrouchIfNotFullscreen,
          onClose: Re
        }), (0, oe.jsx)(fb, {
          show: "makeReport" === ie,
          onOpen: Fe.current.makeReport,
          onClose: Re
        }), (0, oe.jsx)(zb, {
          show: "makeDiscordReport" === ie,
          onOpen: Fe.current.makeDiscordReport,
          onClose: Re
        }), (0, oe.jsx)(yH, {
          show: "editBook" === ie,
          onOpen: Fe.current.editBook,
          onClose: Re
        }), (0, oe.jsx)(iH, {
          show: "editNameTag" === ie,
          onOpen: Fe.current.editNameTag,
          onClose: Re
        }), He && (0, oe.jsx)(ib, {
          show: "inventory" === ie,
          onOpen: Fe.current.inventory,
          onClose: Re,
          variation: Me.current
        }), (0, oe.jsx)(Yi, {
          show: "inviteLink" === ie,
          onClose: Re,
          option: Me.current
        }), (0, oe.jsx)(ce, {
          show: "retentionFeatures" === ie,
          onClose: Re
        }), (0, oe.jsx)(eH, {
          show: "writeOnBoard" === ie,
          onOpen: Fe.current.writeOnBoard,
          onClose: Re
        }), (0, oe.jsx)(qK, {
          show: "lobbyCodeEditor" === ie,
          onOpen: Fe.current.lobbyCodeEditor,
          onClose: Re,
          isLobbyCode: !0
        }), (0, oe.jsx)(qK, {
          show: "codeEditor" === ie,
          onOpen: Fe.current.codeEditor,
          onClose: Re,
          isLobbyCode: !1
        }), (0, oe.jsx)(gb, {
          show: "customLobbyBlockEditor" === ie,
          onOpen: Fe.current.customLobbyBlockEditor,
          onClose: Re
        }), (0, oe.jsx)(WH, {
          show: "ironChestPasskeyInput" === ie,
          onOpen: Fe.current.ironChestPasskeyInput,
          onClose: Re
        }), (0, oe.jsx)(wb, {
          togglePointerLock: !0,
          show: "petUi" === ie,
          onOpen: Fe.current.petUi,
          onClose: Re
        })]
      })
    }))
  },
  37305: (ee, ie, He) => {
    He.d(ie, {
      b: () => uK
    });
    He(37314);
    var ye = He(1857),
      be = He(59),
      Me = He(1053),
      Ke = He.n(Me),
      Ue = He(4121),
      Fe = He(1432),
      Je = He(1956),
      oe = He(1228);

    function Re() {
      const ee = 2e3,
        [ie, He] = (0, be.useState)(null),
        [ye, Me] = (0, be.useState)(null),
        Re = (0, be.useRef)(null);
      (0, Fe.f)("showBottomMessage", (ie => {
        let {
          message: He,
          timeoutLength: ye = ee,
          type: be
        } = ie;
        Me({
          message: He,
          type: be
        }), clearTimeout(Re.current), Re.current = setTimeout((() => {
          Me(null)
        }), ye)
      })), (0, Fe.f)("showPermanentBottomMessage", (ee => {
        He(ee)
      })), (0, be.useEffect)((() => ((0, Ue.b)((() => {
        He(null)
      })), () => {
        clearTimeout(Re.current)
      })), []);
      const ke = ye || ie;
      return ke ? (0, oe.jsx)("div", {
        className: Ke()("BottomScreenMessage", ke.type),
        children: (0, oe.jsx)(Je.e, {
          text: ke.message
        })
      }) : null
    }
    var ke = He(2415),
      qe = He(27),
      fe = He(1983),
      Te = He(1502),
      pe = He(2535);

    function Xe() {
      let ee;
      const ie = () => {
          clearTimeout(ee), ee = setTimeout((() => {
            fe.gameBridge.latest("connectedGame").replay || (qe.h.yR("kickedForAfk"), fe.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Te.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        He = () => {
          clearTimeout(ee)
        };
      return window.addEventListener("focus", He), window.addEventListener("blur", ie), () => {
        window.removeEventListener("blur", ie), window.removeEventListener("focus", He), clearTimeout(ee)
      }
    }
    var ze = He(1075),
      Be = He(37323),
      Ee = He(2532),
      ge = He(1351),
      Oe = He(3416),
      de = He(1323);
    const We = (0, be.memo)((function() {
      return (0, Oe.b)(), (0, oe.jsx)(te, {})
    }));
    class te extends be.Component {
      constructor(ee) {
        super(ee), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = qe.h.subscribe("TopRightHelper", (ee => {
          this.showQueue.push(ee), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        qe.h.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(ee, ie) {
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
        let ee, ie, He, ye, be, Me = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, ee = "slideIn") : "slideOut" === this.state.currState ? ee = "slideOut" : null === this.currMessage && (Me = !1), this.currMessage) {
          const Me = this.currMessage.color || "rgb(102, 102, 102)";
          ie = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === ee ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, He = {
            backgroundColor: Me
          }, ye = {
            animation: "2s " + ("slideOut" === ee ? "CloseNotification" : "ExpandNotification")
          }, be = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === ee ? "textDisappear" : "textAppear")
          }
        }
        return Me ? (0, oe.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...ie
          },
          children: [(0, oe.jsx)("div", {
            className: "LeftSide",
            style: He,
            children: (0, oe.jsx)(de.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, oe.jsx)("div", {
            className: "RightSide",
            style: ye,
            children: (0, oe.jsx)("div", {
              className: "HelperText",
              style: be,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var Ze = He(37329),
      we = He(1403);
    const De = (0, we.h)((ee => ee.PadSneakChip));

    function Pe(ee) {
      const [ie, He, ye] = function(ee) {
        const ie = parseInt(ee.substring(1), 16),
          He = (ie >> 16) / 255,
          ye = (ie >> 8 & 255) / 255,
          be = (255 & ie) / 255,
          Me = Math.max(He, ye, be),
          Ke = Math.min(He, ye, be),
          Ue = (Me + Ke) / 2,
          Fe = Me - Ke;
        if (0 === Fe) return [0, 0, Ue];
        const Je = Fe / (1 - Math.abs(2 * Ue - 1));
        let oe;
        oe = Me === He ? (ye - be) / Fe % 6 : Me === ye ? (be - He) / Fe + 2 : (He - ye) / Fe + 4;
        return [(60 * oe + 360) % 360, Je, Ue]
      }(ee), be = 0 === He ? 0 : Math.min(.6, He + .03), Me = ye > .5 ? -1 : 1, Ke = Ae(ye + .09 * Me);
      return {
        panel: ee,
        slot: Ye(ie, be, Ke),
        slotSelected: Ye(ie, be, Ae(Ke + .2 * Me)),
        slotUnavailable: Ye(ie, be, Ae(ye + -.1 * Me))
      }
    }

    function Ae(ee) {
      return Math.min(1, Math.max(0, ee))
    }

    function Ye(ee, ie, He) {
      const ye = (1 - Math.abs(2 * He - 1)) * ie,
        be = ye * (1 - Math.abs(ee / 60 % 2 - 1)),
        Me = He - ye / 2;
      let Ke;
      return Ke = ee < 60 ? [ye, be, 0] : ee < 120 ? [be, ye, 0] : ee < 180 ? [0, ye, be] : ee < 240 ? [0, be, ye] : ee < 300 ? [be, 0, ye] : [ye, 0, be], "#" + Ke.map((ee => function(ee) {
        return Math.round(255 * ee).toString(16).padStart(2, "0")
      }(ee + Me))).join("")
    }
    var Ve = He(37354),
      ae = He(18),
      ce = He(2029),
      xe = He(4623),
      Le = He(1385),
      Ce = He(2492),
      ve = He(2495),
      ue = He(37409),
      me = He(5291),
      le = He(1447),
      Se = He(1127),
      ne = He(610);

    function je(ee, ie, He, ye) {
      ee.style.display = "";
      const be = ee.offsetWidth,
        Me = ee.offsetHeight,
        Ke = Math.min(Math.max((ie.left + ie.right) / 2 - be / 2, 8), window.innerWidth - 8 - be);
      let Ue = ie.top - He - Me;
      const Fe = [...ye].sort(((ee, ie) => ie.top - ee.top));
      for (const Je of Fe) Ke < Je.right && Ke + be > Je.left && Ue < Je.bottom && Ue + Me > Je.top && (Ue = Je.top - 8 - Me);
      return Ue < 8 ? (ee.style.display = "none", null) : (ee.style.transform = `translate(${Ke-ie.left}px, ${Ue-ie.top}px)`, {
        left: Ke,
        top: Ue,
        right: Ke + be,
        bottom: Ue + Me
      })
    }

    function se(ee) {
      const ie = [];
      for (const He of document.querySelectorAll(ee)) {
        const ee = He.getBoundingClientRect();
        ee.width > 0 && "visible" === getComputedStyle(He).visibility && ie.push(ee)
      }
      return ie
    }

    function Ie(ee, ie) {
      return ee.clientX >= ie.left - 8 && ee.clientX <= ie.right + 8 && ee.clientY >= ie.top - 8 && ee.clientY <= ie.bottom + 8
    }
    var he = He(9609);
    class Ne {
      constructor(ee) {
        this.deps = ee, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(ee) {
        ee && "armed" === this.phase ? this.setPhase("ready") : ee || "ready" !== this.phase || this.setPhase("armed")
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
      hold(ee, ie) {
        this.suspended || (this.offered ? ie || this.setPhase("idle") : ee && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : ee || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(ee) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const ie = this.phase;
        this.phase = ee, this.deps.onPhase(ee, ie)
      }
    }
    const Ge = 25 * Math.PI / 180,
      re = 45 * Math.PI / 180;
    class Qe extends Ne {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(ee, ie, He) {
        this.speed = He;
        const ye = Math.hypot(ee, ie),
          be = ye > 0 ? Math.acos(Math.min(1, -ie / ye)) : Math.PI;
        this.hold(ye >= .8 && be <= Ge, ye >= .5 && be <= re)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var ei = He(1246);

    function ii(ee, ie) {
      const He = (0, be.useRef)(null),
        ye = (0, be.useRef)(ie);
      return ye.current = ie, (0, be.useEffect)((() => {
        if (!ee) return;
        const {
          create: ie,
          elementRef: be,
          ringRef: Me,
          classPrefix: Ke,
          keptBehindMovementPanels: Ue,
          resizeEnds: Fe
        } = ye.current, Je = {
          charging: `${Ke}Charging`,
          armed: `${Ke}Armed`,
          ready: `${Ke}Ready`,
          locked: `${Ke}Locked`
        };
        let oe = null;
        const Re = ie({
          onPhase: (ee, ie) => {
            const He = be.current;
            if (null !== He) {
              for (const [ie, ye] of Object.entries(Je)) He.classList.toggle(ye, ie === ee);
              if ("charging" === ee) oe = Me.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === ee) {
                var Ke;
                null === (Ke = oe) || void 0 === Ke || Ke.cancel(), oe = null
              }
              var Ue, Fe;
              if ("armed" === ee && "charging" === ie && ye.current.onArmed(), "ready" === ee && he.h.play("lockReady"), "locked" === ee) he.h.play("lockLocked"), null === (Ue = (Fe = ye.current).onLocked) || void 0 === Ue || Ue.call(Fe);
              "locked" === ie && ye.current.onUnlocked()
            }
          }
        });
        He.current = Re;
        const ke = () => {
            Re.suspend()
          },
          qe = () => {
            "hidden" === document.visibilityState && ke()
          },
          fe = () => {
            Fe ? Re.suspend() : Re.suspendArming()
          },
          Te = (0, ei.q)((ee => {
            let {
              keepsMovement: ie
            } = ee;
            ie && Ue ? Re.suspendArming() : ke()
          }));
        return document.addEventListener("visibilitychange", qe), window.addEventListener("blur", ke), window.addEventListener("resize", fe), () => {
          Te(), document.removeEventListener("visibilitychange", qe), window.removeEventListener("blur", ke), window.removeEventListener("resize", fe), Re.cancel(), He.current = null
        }
      }), [ee]), (0, ce.e)("localPlayerAliveSet", (() => {
        var ee;
        null === (ee = He.current) || void 0 === ee || ee.suspend()
      })), He
    }
    const Hi = "data-joystick-tap";

    function yi(ee) {
      var ie, He;
      const ye = null === (ie = (He = ee).closest) || void 0 === ie ? void 0 : ie.call(He, `[${Hi}]`);
      return ye instanceof HTMLElement ? ye : null
    }
    class bi {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var ee, ie;
        return null !== (ee = null === (ie = this.tap) || void 0 === ie ? void 0 : ie.id) && void 0 !== ee ? ee : null
      }
      land(ee, ie) {
        null === this.tap && (this.tap = {
          key: ee,
          id: ie.identifier,
          x: ie.clientX,
          y: ie.clientY
        }, (0, le.h)(ee, !0))
      }
      slidFrom(ee) {
        const ie = this.tap,
          He = ie ? ee.find((ee => ee.identifier === ie.id)) : void 0;
        return !He || Math.hypot(He.clientX - ie.x, He.clientY - ie.y) <= 12 ? null : (this.end(!1), {
          identifier: ie.id,
          clientX: ie.x,
          clientY: ie.y
        })
      }
      end(ee) {
        const ie = this.tap;
        ie && (this.tap = null, (0, le.h)(ie.key, !1), ee && ie.key.click())
      }
    }
    var Mi = He(2560),
      Ki = He(2576),
      Ui = He(1062),
      Fi = He(3760),
      Ji = He(2591);

    function oi(ee, ie, He) {
      const ye = function(ee, ie, He) {
        const ye = He.map((He => ({
            left: Math.max(0, He.left),
            top: Math.max(0, He.top),
            right: Math.min(ee, He.right),
            bottom: Math.min(ie, He.bottom)
          }))).filter((ee => ee.right > ee.left && ee.bottom > ee.top)),
          be = [...new Set([0, ie, ...ye.flatMap((ee => [ee.top, ee.bottom]))])].sort(((ee, ie) => ee - ie)),
          Me = [];
        for (let Ke = 0; Ke < be.length - 1; Ke++) {
          const ie = be[Ke],
            He = be[Ke + 1],
            Ue = ye.filter((ee => ee.top <= ie && ee.bottom >= He)).map((ee => [ee.left, ee.right])).sort(((ee, ie) => ee[0] - ie[0]));
          let Fe = 0;
          for (const [ee, ye] of Ue) ee > Fe && Me.push({
            left: Fe,
            top: ie,
            right: ee,
            bottom: He
          }), Fe = Math.max(Fe, ye);
          Fe < ee && Me.push({
            left: Fe,
            top: ie,
            right: ee,
            bottom: He
          })
        }
        return Me
      }(ee, ie, He);
      if (0 === ye.length) return 'path("M0 0Z")';
      if (1 === ye.length && 0 === ye[0].left && 0 === ye[0].top && ye[0].right === ee && ye[0].bottom === ie) return "";
      const be = ee => Math.round(10 * ee) / 10;
      return `path("${ye.map((ee=>`M${be(ee.left)} ${be(ee.top)}H${be(ee.right)}V${be(ee.bottom)}H${be(ee.left)}Z`)).join("")}")`
    }

    function Ri(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const be = [],
        Me = 2 * He / ye;
      for (let Ke = 0; Ke < ye; Ke++) {
        const ye = ie - He + Ke * Me,
          Ue = ye + Me,
          Fe = Math.min(Math.max(ie, ye), Ue) - ie,
          Je = Math.sqrt(Math.max(0, He * He - Fe * Fe));
        be.push({
          left: ee - Je,
          top: ye,
          right: ee + Je,
          bottom: Ue
        })
      }
      return be
    }
    var ki = He(9629),
      qi = He(37383);

    function fi(ee) {
      const ie = ee.getBoundingClientRect(),
        He = {
          left: ie.left,
          top: ie.top,
          right: ie.right,
          bottom: ie.bottom
        },
        ye = (0, ue.c)(ee);
      if (ye.whole) return [He];
      const be = function(ee) {
          const ie = ee.right - ee.left,
            He = ee.bottom - ee.top,
            ye = Math.min(ie, He) / 2,
            be = (ee.left + ee.right) / 2,
            Me = (ee.top + ee.bottom) / 2;
          return ie >= He ? [{
            left: ee.left + ye,
            top: ee.top,
            right: ee.right - ye,
            bottom: ee.bottom
          }, ...Ri(ee.left + ye, Me, ye), ...Ri(ee.right - ye, Me, ye)] : [{
            left: ee.left,
            top: ee.top + ye,
            right: ee.right,
            bottom: ee.bottom - ye
          }, ...Ri(be, ee.top + ye, ye), ...Ri(be, ee.bottom - ye, ye)]
        }(He),
        Me = ye.keyBox;
      if (Me) {
        const ee = (He.left + He.right) / 2,
          ie = (He.top + He.bottom) / 2;
        be.push({
          left: ee - Me.width / 2,
          top: ie - Me.height / 2,
          right: ee + Me.width / 2,
          bottom: ie + Me.height / 2
        })
      }
      return be
    }

    function Ti(ee) {
      const ie = ee.getBoundingClientRect();
      return 0 === ie.width && 0 === ie.height || "visible" !== getComputedStyle(ee).visibility ? [] : [(0, ki.u)(ie, 44)]
    }

    function Xi(ee, ie) {
      (0, be.useEffect)((() => {
        const He = ee.current;
        if (!ie || !He) return;
        const ye = () => {
          const ee = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            ie = ee.find((ee => ee.classList.contains("TouchInteractHit")));
          ie !== be && (be && Me.unobserve(be), be = ie, ie && Me.observe(ie));
          const ye = Array.from(document.querySelectorAll(Ji.b)),
            Ke = [...ee.flatMap((ee => fi(ee))), ...ye.flatMap(Ti)],
            Ue = function(ee, ie) {
              const He = ie.map((ie => ({
                left: ie.left - ee.left,
                top: ie.top - ee.top,
                right: ie.right - ee.left,
                bottom: ie.bottom - ee.top
              })));
              return oi(Math.ceil(ee.width), Math.ceil(ee.height), He)
            }(He.getBoundingClientRect(), Ke);
          He.style.clipPath !== Ue && (He.style.clipPath = Ue)
        };
        let be;
        const Me = new ResizeObserver((() => {
          ye()
        }));
        ye(), Me.observe(He);
        const Ke = He.closest(".InGameUi"),
          Ue = new MutationObserver(ye);
        Ke && Ue.observe(Ke, {
          attributes: !0,
          attributeFilter: ["class", qi.i]
        });
        const Fe = [(0, qe.j)(Fi.c, ye), (0, qe.j)(Ji.u, ye), (0, qe.j)(Ji.f, ye)];
        return () => {
          Me.disconnect(), Ue.disconnect();
          for (const ee of Fe) ee();
          He.style.clipPath = ""
        }
      }), [ee, ie])
    }
    var zi = He(4806);

    function Bi(ee) {
      var ie;
      let {
        onMove: He,
        mode: ye,
        speedCurve: Me,
        autorun: Ke = !1,
        keys: Ue
      } = ee;
      const Fe = (0, be.useRef)(null),
        Je = (0, be.useRef)(null),
        Re = (0, be.useRef)(null),
        ke = (0, be.useRef)(null),
        qe = (0, be.useRef)(null),
        Te = (0, be.useRef)(null),
        pe = (0, be.useRef)(new bi).current,
        Xe = (0, be.useRef)(null),
        ze = (0, be.useRef)(null),
        Be = (0, be.useRef)(null),
        Ee = (0, be.useRef)(!1),
        ge = (0, be.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: Oe
        } = (0, Se.v)(),
        We = (0, zi.n)(ye),
        te = (0, ae.m)(["notchSize"]).notchSize,
        Ze = te.left,
        we = (0, be.useRef)(16),
        De = (0, Ki.f)(),
        [Pe, Ae, Ye] = "pinned" === ye ? Mi.k : null !== (ie = De.hudElements.joystick) && void 0 !== ie ? ie : Mi.k,
        Ve = "pinned" === ye ? null : De.hudSafe,
        ce = Math.max(zi.j, zi.k * Ye);
      Xi(Je, "pinned" !== ye);
      const xe = function(ee, ie, He, ye, Me) {
        const Ke = (0, be.useRef)(null),
          Ue = () => {
            clearInterval(Ke.current), Ke.current = null
          },
          Fe = ii(ee, {
            create: ee => new Qe(ee),
            elementRef: ie,
            ringRef: He,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: Me,
            onLocked: () => {
              Ke.current = setInterval((() => {
                fe.gameBridge.lookup("dropAhead", null) && (he.h.play("autorunLedgeStop"), Fe.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              Ue(), ye()
            }
          });
        return (0, be.useEffect)((() => Ue), []), Fe
      }(Ke, Re, Xe, (() => {
        Ne(), le()
      }), (() => {
        Le(), null === Be.current && xe.current.suspend()
      }));

      function Le() {
        const ee = Re.current.getBoundingClientRect();
        Be.current = je(ze.current, ee, 80, se(`.TouchInventoryKey, .TouchSprintKey, ${Ji.b}`)), Ee.current = null !== Be.current && Ie(ge.current, Be.current)
      }

      function Ce() {
        const {
          innerWidth: ee,
          innerHeight: ie
        } = window, He = (0, Ji.N)(Ve, ee, ie, (0, Ji.V)(te, ee, ie), we.current);
        return {
          left: He[3],
          bottom: He[2]
        }
      }

      function ve(ee) {
        Re.current.style.transform = `translate(${ee.x-ce}px, ${ee.y-ce}px)`
      }

      function ue(ee) {
        const ie = Re.current;
        ie.classList.add("Resting"), ie.classList.toggle("Returning", ee), ie.style.display = "fixed_hidden" === ye ? "none" : "block", ve(function() {
          const {
            innerWidth: ee,
            innerHeight: ie
          } = window, He = Ce(), ye = Ze * ee / 100 + He.left, be = Fe.current.offsetHeight || ie, Me = ((0, Ui.b)(ee, ie) ? zi.e : zi.b) + He.bottom;
          return {
            x: Math.min(ee - ce, Math.max(ce, ye + zi.f + Pe * ee)),
            y: Math.min(be - ce, Math.max(ce, be - Me + Ae * be))
          }
        }())
      }
      const me = (0, be.useRef)({
        restFixed: ue,
        release: Ge
      });

      function le() {
        We ? ue("fixed_shown" === ye) : "floating" === ye && (Re.current.style.display = "none"), He({
          x: 0,
          y: 0
        })
      }

      function Ne() {
        Te.current = null, qe.current = null, ke.current.style.transform = "translate(-50%, -50%)"
      }

      function Ge(ee) {
        Ne();
        const ie = xe.current;
        ee && null !== ie && void 0 !== ie && ie.lift() ? He({
          x: 0,
          y: -ie.lockedSpeed
        }) : (null === ie || void 0 === ie || ie.cancel(), le())
      }

      function re(ee) {
        var ie;
        if (null === (ie = xe.current) || void 0 === ie || ie.startTouch(), "pinned" === ye) {
          const ee = Re.current.getBoundingClientRect();
          qe.current = {
            x: ee.left + ee.width / 2,
            y: ee.top + ee.height / 2
          }
        } else {
          qe.current = {
            x: ee.clientX,
            y: ee.clientY
          }, Re.current.classList.remove("Resting", "Returning"), Re.current.style.display = "block";
          const ie = Fe.current.getBoundingClientRect();
          ve({
            x: ee.clientX - ie.left,
            y: ee.clientY - ie.top
          }), Ke && (ge.current = {
            clientX: ee.clientX,
            clientY: ee.clientY
          }, Le())
        }
      }

      function Hi(ee) {
        const ie = pe.slidFrom(Array.from(ee.touches));
        ie && null === Te.current && (Te.current = ie.identifier, re(ie));
        const ye = Array.from(ee.touches).find((ee => ee.identifier === Te.current));
        if (null === qe.current || null === Te.current || (0, ne.P)(ye)) return;
        const be = xe.current,
          Ke = ye.clientX - qe.current.x,
          Ue = ye.clientY - qe.current.y,
          Fe = Math.hypot(Ke, Ue),
          Je = Fe > 0 ? Math.min(1, ce / Fe) : 0,
          oe = Ke * Je,
          Re = Ue * Je,
          fe = Math.hypot(oe, Re) / ce,
          Xe = Me && fe > 0 ? Me(fe) / fe : 1;
        ke.current.style.transform = `translate(calc(-50% + ${oe}px), calc(-50% + ${Re}px))`;
        const ze = oe / ce,
          Oe = Re / ce;
        if (He({
            x: ze * Xe,
            y: Oe * Xe
          }), null !== be && null !== Be.current) {
          be.move(ze, Oe, fe * Xe), ge.current = {
            clientX: ye.clientX,
            clientY: ye.clientY
          };
          const ee = Ee.current;
          Ee.current = Ie(ye, Be.current), Ee.current !== ee && be.target(Ee.current)
        }
      }
      return me.current = {
        restFixed: ue,
        release: Ge
      }, (0, be.useLayoutEffect)((() => {
        if (!We) return;
        const ee = () => {
          we.current = (0, Ji.Z)(document)
        };
        ee(), null === Te.current && me.current.restFixed(!1);
        const ie = new ResizeObserver((() => {
          ee(), null === Te.current && me.current.restFixed(!1)
        }));
        ie.observe(Fe.current);
        const He = Re.current;
        return () => {
          ie.disconnect(), He.classList.remove("Resting", "Returning"), null === Te.current && (He.style.display = "", He.style.transform = "")
        }
      }), [We, ye, te, Pe, Ae, ce, Ve]), (0, be.useEffect)((() => {
        const ee = (ee, ie) => void 0 === ie || null === ie || Array.from(ee.touches).some((ee => ee.identifier === ie)) ? null : {
            lifted: "touchend" === ee.type && Array.from(ee.changedTouches).some((ee => ee.identifier === ie))
          },
          ie = ie => {
            const He = ee(ie, Te.current);
            He && me.current.release(He.lifted);
            const ye = ee(ie, pe.touchId);
            ye && pe.end(ye.lifted)
          },
          He = () => {
            null !== Te.current && me.current.release(!1), pe.end(!1)
          },
          ye = () => {
            "hidden" === document.visibilityState && He()
          };
        document.addEventListener("touchstart", ie, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", ie, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", ie, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", ie, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", He), document.addEventListener("visibilitychange", ye);
        const be = (0, ei.q)((ee => {
          let {
            keepsMovement: ie
          } = ee;
          ie || He()
        }));
        return () => {
          be(), document.removeEventListener("touchstart", ie, {
            capture: !0
          }), document.removeEventListener("touchmove", ie, {
            capture: !0
          }), document.removeEventListener("touchend", ie, {
            capture: !0
          }), document.removeEventListener("touchcancel", ie, {
            capture: !0
          }), window.removeEventListener("blur", He), document.removeEventListener("visibilitychange", ye)
        }
      }), []), (0, be.useEffect)((() => {
        const ee = Fe.current,
          ie = ee => {
            ee.preventDefault()
          };
        return ee.addEventListener("touchstart", ie, {
          passive: !1
        }), () => {
          ee.removeEventListener("touchstart", ie)
        }
      }), []), (0, oe.jsxs)("div", {
        ref: Fe,
        className: "JoystickZone",
        style: We && (Pe > 0 || Ye > 1 || Ce().left > 0) ? {
          width: `max(35vw, calc(${Ze+100*Pe}vw + ${Ce().left+zi.f+ce+24}px))`
        } : void 0,
        onTouchStart: function(ee) {
          const ie = Array.from(ee.changedTouches).filter((ee => {
            var ie;
            return null === (ie = Fe.current) || void 0 === ie ? void 0 : ie.contains(ee.target)
          }));
          for (const ye of ie) {
            const ee = yi(ye.target);
            ee && pe.land(ee, ye)
          }
          const He = ie.find((ee => null === yi(ee.target)));
          He && null === Te.current && (Te.current = He.identifier, re(He), Hi(ee))
        },
        onTouchMove: Hi,
        children: [(0, oe.jsx)("div", {
          ref: Je,
          className: "JoystickTouchLayer"
        }), (0, oe.jsxs)("div", {
          ref: Re,
          className: "Joystick",
          style: {
            width: 2 * ce + "px",
            height: 2 * ce + "px",
            transform: "pinned" === ye ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, oe.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * ce + "px",
              height: 2 * ce + "px"
            }
          }), Ke && (0, oe.jsxs)(oe.Fragment, {
            children: [(0, oe.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, oe.jsx)("circle", {
                ref: Xe,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, oe.jsxs)("div", {
              ref: ze,
              className: "AutorunTarget",
              children: [(0, oe.jsx)(de.e, {
                name: "lock"
              }), Oe("settingsMenu:autoRun")]
            })]
          }), (0, oe.jsx)("div", {
            ref: ke,
            className: "JoystickKnob",
            style: {
              width: `${ce}px`,
              height: `${ce}px`
            }
          })]
        }), Ue]
      })
    }
    var Ei = He(272);
    const gi = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      Oi = {
        short_creep: {
          ...gi,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...gi,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...gi,
          deadZone: .05
        },
        control: gi
      };

    function di(ee) {
      return function(ee, ie) {
        const {
          deadZone: He,
          creepEnd: ye,
          fullSpeedAt: be,
          creepMin: Me,
          creepMax: Ke
        } = ee;
        if (ie < He) return 0;
        if (ie < ye) {
          const ee = (ie - He) / (ye - He);
          return Me + (Ke - Me) * ee * ee
        }
        return ie < be ? Ke + (1 - Ke) * (ie - ye) / (be - ye) : 1
      }(Oi[Ei.c.mobile_walk_curve_v1], ee)
    }

    function Wi(ee, ie) {
      const He = (0, be.useRef)(null);
      return (0, be.useLayoutEffect)((() => (ue.g.set(ee, He.current, ie), () => {
        ue.g.set(ee, null)
      })), [ee, ie]), He
    }
    const ti = "C",
      Zi = "J",
      wi = "U",
      Di = "A",
      Pi = "G",
      Ai = "X",
      Yi = (0, be.forwardRef)((function(ee, ie) {
        let {
          slot: He,
          canvasZone: ye = !1,
          lit: Me = !1,
          label: Ue,
          className: Fe,
          children: Je,
          ...Re
        } = ee;
        return (0, be.useEffect)((() => (qe.h.yR(Fi.c), () => {
          qe.h.yR(Fi.c)
        })), []), (0, oe.jsx)("div", {
          ref: ie,
          className: Ke()("TouchKeyHit", `TouchSlot${He}`, Fe, {
            CanvasZone: ye
          }),
          ...Re,
          children: (0, oe.jsxs)("div", {
            className: Ke()("TouchKey", {
              Lit: Me,
              Labelled: void 0 !== Ue
            }),
            children: [Je, void 0 !== Ue && (0, oe.jsx)("span", {
              className: "TouchKeyLabel",
              children: Ue
            })]
          })
        })
      }));

    function Vi(ee, ie) {
      (0, be.useEffect)((() => () => {
        ie.current && (ie.current = !1, (0, ve.z)(ee, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }
    var ai = He(37398);
    class ci extends Ne {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(ee, ie) {
        this.start = {
          x: ee,
          y: ie
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(ee, ie, He) {
        const ye = Math.hypot(ee - this.start.x, ie - this.start.y) <= 12;
        this.moved ||= !ye;
        const be = null !== He && ie < this.start.y - 12 && Ie({
          clientX: ee,
          clientY: ie
        }, He);
        this.hold(!this.moved, ye || be)
      }
    }
    const xi = new Set;

    function Li(ee) {
      const ie = new Set(Array.from(ee.touches, (ee => ee.identifier)));
      for (const He of xi) {
        for (const ee of He.ids) ie.has(ee) || He.ids.delete(ee);
        if (0 === He.ids.size) {
          xi.delete(He);
          He.pressesOnPointerDown && "touchstart" === ee.type && Array.from(ee.changedTouches).some((ee => ee.target instanceof Node && He.element.contains(ee.target))) || He.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const GK of ["touchstart", "touchmove"]) window.addEventListener(GK, Li, {
        capture: !0,
        passive: !0
      });

    function Ci(ee) {
      let {
        pressesOnPointerDown: ie = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const He = (0, be.useRef)(ee);
      He.current = ee;
      const ye = (0, be.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: ie,
        release: () => {
          He.current()
        }
      });
      (0, be.useEffect)((() => {
        const ee = ye.current;
        return () => {
          xi.delete(ee), ee.ids.clear()
        }
      }), []);
      const Me = ee => {
        const ie = ye.current;
        for (const He of Array.from(ee.changedTouches)) ie.ids.delete(He.identifier);
        0 === ie.ids.size && xi.delete(ie)
      };
      return {
        onTouchStart: ee => {
          const ie = ye.current;
          ie.element = ee.currentTarget;
          for (const He of Array.from(ee.changedTouches)) He.target instanceof Node && ee.currentTarget.contains(He.target) && ie.ids.add(He.identifier);
          ie.ids.size > 0 && xi.add(ie)
        },
        onTouchEnd: Me,
        onTouchCancel: Me
      }
    }

    function vi(ee, ie) {
      return null === ie ? null : (0, ai.d)(ee.nativeEvent.changedTouches, ie.id)
    }

    function ui(ee) {
      let {
        lockable: ie
      } = ee;
      const {
        t: He
      } = (0, Se.v)(), ye = "round" === (0, Mi.$)().hudShape, Me = (0, be.useRef)(!1);
      Vi(Ce.o.Jump, Me);
      const Ke = (0, be.useRef)(null),
        Ue = (0, be.useRef)(null),
        Fe = (0, be.useRef)(null),
        Je = (0, be.useRef)(null),
        Re = (0, be.useRef)(null),
        ke = (0, be.useRef)(null),
        qe = (0, be.useRef)(!1),
        fe = (ee, ie) => {
          Me.current = ee, (0, ve.z)(Ce.o.Jump, ee, ie)
        },
        Te = function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          Me.current && (Ke.current && (0, le.h)(Ke.current, !1), fe(!1, ee))
        },
        pe = ii(ie, {
          create: ee => new ci(ee),
          elementRef: Ke,
          ringRef: Ue,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const ee = Ke.current.getBoundingClientRect(),
              ie = Fe.current.parentElement,
              He = ie.getBoundingClientRect(),
              ye = {
                left: He.left + ie.clientLeft,
                top: He.top + ie.clientTop,
                right: He.right - ie.clientLeft,
                bottom: He.bottom - ie.clientTop
              };
            if (Re.current = je(Fe.current, ye, 16, se(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${Ji.b}`)), null === Re.current) return void pe.current.suspend();
            const be = Re.current;
            ke.current = {
              left: Math.min(ee.left, be.left),
              top: be.top,
              right: Math.max(ee.right, be.right),
              bottom: ee.bottom
            }, qe.current = null !== Je.current && Ie({
              clientX: Je.current.x,
              clientY: Je.current.y
            }, be)
          },
          onUnlocked: () => {
            null === Je.current && Te()
          }
        }),
        Xe = ee => {
          var ie;
          Je.current = null, null === (ie = pe.current) || void 0 === ie || ie.cancel(), Te(ee)
        },
        ze = Ci((() => {
          Xe()
        })),
        Be = ee => {
          const ie = Je.current;
          var He;
          return null === ie ? null !== (He = pe.current) && void 0 !== He && He.locked ? null : "lifted" : vi(ee, ie) ? "lifted" : (0, ai.h)(ee.nativeEvent.touches, ie.id) ? null : "dropped"
        };
      return (0, oe.jsxs)(Yi, {
        ref: Ke,
        slot: Zi,
        className: "JumpKey",
        onTouchStart: ee => {
          ze.onTouchStart(ee), (0, le.h)(ee.currentTarget, !0), null === Je.current || (0, ai.h)(ee.nativeEvent.touches, Je.current.id) || Xe();
          const ie = ee.changedTouches[0];
          var He;
          null === Je.current && ie && (Je.current = {
            id: ie.identifier,
            x: ie.clientX,
            y: ie.clientY
          }, null === (He = pe.current) || void 0 === He || He.press(ie.clientX, ie.clientY));
          Me.current || fe(!0, ee.nativeEvent)
        },
        onTouchMove: ee => {
          const ie = Je.current,
            He = vi(ee, ie);
          if (!He) return;
          const ye = pe.current;
          if (null === ye || void 0 === ye || ye.move(He.clientX, He.clientY, ke.current), null !== ye && void 0 !== ye && ye.offered) {
            const ee = Ie(He, Re.current);
            ee !== qe.current && (qe.current = ee, ye.target(ee))
          }
          ie.x = He.clientX, ie.y = He.clientY
        },
        onTouchEnd: ee => {
          var ie;
          ze.onTouchEnd(ee);
          const He = Be(ee);
          null !== He && ("dropped" !== He ? (Je.current = null, null !== (ie = pe.current) && void 0 !== ie && ie.lift() ? (0, le.h)(ee.currentTarget, !1) : Te(ee.nativeEvent)) : Xe(ee.nativeEvent))
        },
        onTouchCancel: ee => {
          ze.onTouchCancel(ee), null !== Be(ee) && Xe(ee.nativeEvent)
        },
        children: [(0, oe.jsx)(de.e, {
          name: "arrow-up-from-line"
        }), ie && (0, oe.jsxs)(oe.Fragment, {
          children: [(0, oe.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, oe.jsx)(de.e, {
              name: "lock"
            })
          }), (0, oe.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, oe.jsx)("rect", {
              ref: Ue,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: ye ? 48 : 0,
              pathLength: 1
            })
          }), (0, oe.jsxs)("div", {
            ref: Fe,
            className: "JumpLockTarget",
            children: [(0, oe.jsx)(de.e, {
              name: "lock"
            }), He("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var mi = He(37415);

    function li(ee) {
      let {
        atHome: ie
      } = ee;
      const {
        t: He
      } = (0, Se.v)(), ye = (Me = (0, Ee.i)("runningSpeed"), Ue = (0, Ee.i)("walkingSpeed"), null !== Me && null !== Ue && Me > Ue);
      var Me, Ue;
      const Je = (0, Mi.m)((0, Ki.f)().hudElements, "sprint"),
        Re = (0, Fe.j)(mi.e, (0, mi.f)());
      return (0, be.useEffect)((() => {
        ye && !Je || (0, mi.i)(!0)
      }), [ye, Je]), (0, be.useEffect)((() => () => {
        (0, mi.i)(!0)
      }), []), ye ? (0, oe.jsx)("div", {
        className: Ke()("TouchSprintHit", {
          AtHome: ie
        }),
        role: "switch",
        "aria-checked": Re,
        "aria-label": He("touchKeys:sprint"),
        [Hi]: "",
        onClick: () => {
          (0, mi.i)(!(0, mi.f)())
        },
        children: (0, oe.jsx)("div", {
          className: Ke()("TouchKey TouchSprintKey", {
            Lit: Re
          }),
          children: (0, oe.jsx)(de.e, {
            name: Re ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    var Si = He(9645),
      ni = He(9637);

    function ji(ee) {
      const ie = ee.getBoundingClientRect();
      return ie.width > 0 && ie.height > 0 ? (0, ki.i)(ie) : null
    }

    function si(ee) {
      const ie = ee.ownerDocument.documentElement.classList,
        He = ee.classList.contains("ShopKey") ? "HudHide-shop" : ee.classList.contains("BagKey") ? "HudHide-bag" : null;
      return null !== He && (ie.contains(He) || ie.contains("HudHide-inventory")) ? null : ji(ee)
    }

    function Ii(ee) {
      const ie = ji(ee),
        He = ee.firstElementChild;
      if (null === ie) return null;
      const {
        x: ye,
        y: be
      } = (0, ki.d)(ie), Me = He.offsetWidth / 2, Ke = He.offsetHeight / 2;
      return {
        left: ye - Me,
        top: be - Ke,
        right: ye + Me,
        bottom: be + Ke
      }
    }

    function Ni(ee, ie) {
      const He = ee.ownerDocument.createElement("div");
      He.className = `TouchSlotProbe TouchSlot${ie}`, ee.append(He);
      const ye = ji(He);
      return He.remove(), ye
    }
    const Gi = `.TouchInventoryKey, .TouchSprintKey, ${Ji.b}`;

    function ri(ee, ie) {
      const He = ie.map((ie => ({
        slot: ie,
        face: Ni(ee, ie)
      })));
      if (He.every((ee => {
          let {
            face: ie
          } = ee;
          return null === ie
        }))) return null;
      return function(ee, ie) {
        const He = [...ie],
          ye = [],
          be = [];
        for (const {
            face: Ke,
            slot: Ue
          }
          of ee) null !== Ke && (He.some((ee => (0, ki.n)(Ke, ee, ni.c))) ? be.push(Ue) : (ye.push(Ue), He.push(Ke)));
        const Me = [...ye, ...be];
        return ee.map((ee => {
          let {
            slot: ie,
            face: He
          } = ee;
          return null === He ? ie : Me.shift()
        }))
      }(He, [...[...ee.querySelectorAll(":scope > .TouchKeyHit")].filter((ee => ee.classList.contains("BoostKey") || !ie.some((ie => ee.classList.contains(`TouchSlot${ie}`))))).map(Ii), ...[...ee.ownerDocument.querySelectorAll(Gi)].map(si)].filter((ee => null !== ee)))
    }
    const Qi = new WeakMap;
    class eH {
      constructor(ee) {
        this.zones = ee, this.followed = new Map, this.onStart = ee => {
          if (this.releaseMissing(ee.touches), ee.target instanceof HTMLCanvasElement)
            for (let He = 0; He < ee.changedTouches.length; He++) {
              var ie;
              const {
                identifier: ye,
                clientX: be,
                clientY: Me
              } = ee.changedTouches[He];
              this.release(ye);
              const Ke = this.zones.hitZone(be, Me);
              if (!Ke) continue;
              const {
                key: Ue
              } = Ke;
              null === (ie = Qi.get(Ue)) || void 0 === ie || ie.cancel();
              const Fe = {
                hit: Ke.element,
                key: Ue,
                x: Ke.x,
                y: Ke.y,
                reach: .6 * Ke.radius
              };
              this.followed.set(ye, Fe), (0, le.h)(Ke.element, !0), iH(Fe, be, Me)
            }
        }, this.onMove = ee => {
          this.releaseMissing(ee.touches);
          for (let ie = 0; ie < ee.changedTouches.length; ie++) {
            const {
              identifier: He,
              clientX: ye,
              clientY: be
            } = ee.changedTouches[ie], Me = this.followed.get(He);
            Me && iH(Me, ye, be)
          }
        }, this.onEnd = ee => {
          for (let ie = 0; ie < ee.changedTouches.length; ie++) this.release(ee.changedTouches[ie].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const ee = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, ee), document.addEventListener("touchmove", this.onMove, ee), document.addEventListener("touchend", this.onEnd, ee), document.addEventListener("touchcancel", this.onEnd, ee), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(ee) {
        for (const ie of [...this.followed.keys()])(0, ai.h)(ee, ie) || this.release(ie)
      }
      releaseAll() {
        for (const ee of [...this.followed.keys()]) this.release(ee)
      }
      release(ee) {
        const ie = this.followed.get(ee);
        if (!ie) return;
        this.followed.delete(ee);
        for (const be of this.followed.values())
          if (be.key === ie.key) return;
        (0, le.h)(ie.hit, !1);
        const {
          key: He
        } = ie, ye = He.style.translate;
        He.style.translate = "", ye && Qi.set(He, He.animate({
          translate: [ye, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function iH(ee, ie, He) {
      let {
        key: ye,
        x: be,
        y: Me,
        reach: Ke
      } = ee;
      const Ue = ie - be,
        Fe = He - Me,
        Je = Math.min(1, Ke / (Math.hypot(Ue, Fe) || 1));
      ye.style.translate = `${Ue*Je}px ${Fe*Je}px`
    }
    var HH = He(1464),
      yH = He(97),
      bH = He(1340),
      MH = He(35);
    const KH = "threeFingerHintShown",
      UH = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let FH = 0,
      JH = !1;

    function oH() {
      const ee = new Set;
      let ie = -1 / 0,
        He = -1 / 0,
        ye = null,
        be = 0;
      const Me = () => {
          ee.clear()
        },
        Ke = Me => {
          if (Me.touches.length > 0) return;
          for (let ie = 0; ie < Me.changedTouches.length; ie++) ee.add(Me.changedTouches[ie].identifier);
          const Ke = ee.size;
          if (Ke < 3 || !(0, ei.x)()) return;
          if (be = Ke, null !== ye) return;
          const Ue = performance.now(),
            Fe = ie >= Ue - 200;
          ye = setTimeout((() => {
            if (ye = null, !(0, ei.x)()) return;
            const ee = He >= Ue - 200 || document.hidden;
            ! function(ee, ie) {
              var He;
              const ye = (0, yH.getOperatingSystem)();
              FH < 5 && (FH++, (0, HH.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === ie ? `${ye}:${ee}` : `${ye}:${ee}:${ie}`
              })), null === ie && (JH || !0 === MH.i.getItem(KH) || (JH = !0, MH.i.setItem(KH, !0), bH.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (He = UH[ye]) && void 0 !== He ? He : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(be, ee ? "hide" : Fe ? "blur" : null)
          }), 500)
        },
        Ue = () => {
          He = performance.now()
        },
        Fe = () => {
          ie = performance.now()
        },
        Je = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", Me, Je), document.addEventListener("touchcancel", Ke, Je), document.addEventListener("visibilitychange", Ue), window.addEventListener("blur", Fe), window.addEventListener("resize", Ue), window.addEventListener("orientationchange", Ue), () => {
        document.removeEventListener("touchstart", Me, Je), document.removeEventListener("touchcancel", Ke, Je), document.removeEventListener("visibilitychange", Ue), window.removeEventListener("blur", Fe), window.removeEventListener("resize", Ue), window.removeEventListener("orientationchange", Ue), null !== ye && clearTimeout(ye)
      }
    }
    const RH = () => {
      const ee = (0, xe.i)(),
        ie = (0, Le.C)();
      return ee || ie
    };

    function kH(ee) {
      (0, ue.j)(ee.x, ee.y), 0 === ee.x && 0 === ee.y || qe.h.yR("stickMoved")
    }
    const qH = (0, be.memo)((function() {
        const ee = RH(),
          {
            joystickMode: ie,
            touchSpeedCurve: He,
            autorun: ye
          } = (0, ae.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, be.useEffect)((() => ((0, me.h)(Ce.p.TouchControls, Ce.p.TouchControls), () => {
          (0, me.h)(Ce.p.TouchControls, 0), (0, ue.j)(0, 0)
        })), []), (0, be.useEffect)(oH, []), (0, oe.jsx)("div", {
          className: Ke()("TouchMovementWrapper", {
            Hidden: ee
          }),
          "data-camera-keeper": "",
          children: (0, oe.jsx)(Bi, {
            onMove: kH,
            mode: ie,
            speedCurve: He ? di : void 0,
            autorun: ye,
            keys: (0, oe.jsx)(li, {
              atHome: !(0, zi.n)(ie)
            })
          })
        })
      })),
      fH = (0, be.memo)((function() {
        const ee = RH(),
          {
            clientEscMenuOptions: ie
          } = (0, ae.m)(["clientEscMenuOptions"]),
          He = ie.touchActionButtons;
        (0, be.useEffect)((() => new eH(ue.g).start()), []), (0, be.useEffect)((() => {
          qe.h.yR(Fi.c)
        }), [ee]);
        const ye = (0, be.useRef)(null),
          Me = function(ee, ie) {
            const [He, ye] = (0, be.useState)((() => (0, Si.g)(ee)));
            return (0, be.useLayoutEffect)((() => {
              var He;
              const be = ie.current;
              if (!be) return;
              const Me = (0, Si.g)(ee),
                Ke = () => {
                  const ee = ri(be, Me);
                  ye((ie => {
                    const He = null !== ee && void 0 !== ee ? ee : ie.length === Me.length ? ie : Me;
                    return He.join() === ie.join() ? ie : He
                  }))
                };
              Ke(), window.addEventListener("resize", Ke);
              const Ue = "undefined" === typeof ResizeObserver ? null : new ResizeObserver(Ke);
              null === Ue || void 0 === Ue || Ue.observe(null !== (He = be.closest(".BottomRightElements")) && void 0 !== He ? He : be);
              const Fe = [(0, qe.j)(Ji.f, Ke), (0, qe.j)(Fi.c, Ke), (0, qe.j)(Ji.u, Ke)];
              return () => {
                window.removeEventListener("resize", Ke), null === Ue || void 0 === Ue || Ue.disconnect();
                for (const ee of Fe) ee()
              }
            }), [ee, ie]), He.length === (0, Si.g)(ee).length ? He : (0, Si.g)(ee)
          }(He, ye);
        return (0, oe.jsxs)("div", {
          ref: ye,
          className: Ke()("TouchComponentsButtons", {
            Hidden: ee
          }),
          "data-camera-keeper": "",
          children: [(0, oe.jsx)(ui, {
            lockable: ie.jumpLock && !ee
          }), (0, oe.jsx)(ZH, {
            hidden: ee,
            actionButtons: He,
            contextSlots: Me
          }), (0, oe.jsx)(pH, {})]
        })
      }));

    function TH(ee) {
      const ie = ie => He => {
        (0, le.h)(He.currentTarget, ie), ee(ie, He.nativeEvent)
      };
      return {
        onPointerDown: ie(!0),
        onPointerUp: ie(!1),
        onPointerCancel: ie(!1)
      }
    }

    function pH() {
      const ee = (0, Ee.i)("canCrouch"),
        ie = (0, ce.k)("crouching"),
        He = (0, be.useRef)(!1);
      Vi(Ce.o.Crouch, He);
      const ye = (ee, ie) => {
          He.current = ee, (0, ve.z)(Ce.o.Crouch, ee, ie)
        },
        Me = (0, be.useRef)(null),
        Ke = () => {
          He.current && (Me.current && (0, le.h)(Me.current, !1), ye(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        Ue = Ci(Ke);
      return (0, be.useEffect)((() => {
        !1 === ee && Ke()
      }), [ee]), !1 === ee ? null : (0, oe.jsx)(Yi, {
        ref: Me,
        slot: ti,
        className: "CrouchKey",
        lit: ie,
        ...Ue,
        ...TH(ye),
        children: (0, oe.jsx)(de.e, {
          name: "arrow-down-to-line"
        })
      })
    }
    const XH = [{
        icon: "arrows-rotate"
      }],
      zH = [{
        icon: "Arrow"
      }],
      BH = [{
        icon: "crosshairs"
      }],
      EH = [{
        icon: "swords"
      }],
      gH = [{
        icon: "hand-back-point-up"
      }],
      OH = [{
        icon: "Firecracker"
      }];

    function dH(ee, ie, He, ye) {
      return {
        id: JSON.stringify(ie),
        render: be => (0, oe.jsx)(wH, {
          code: ee,
          slot: be,
          icon: ie,
          label: ye,
          hidden: He
        })
      }
    }

    function WH(ee, ie) {
      return {
        id: "fly",
        render: He => (0, oe.jsx)(tH, {
          slot: He,
          flying: ee,
          label: ie
        })
      }
    }

    function tH(ee) {
      let {
        slot: ie,
        flying: He,
        label: ye
      } = ee;
      return (0, oe.jsx)(Yi, {
        slot: ie,
        className: "FlyKey",
        lit: He,
        label: ye,
        ...TH(((ee, ie) => {
          (0, ve.z)(Ce.o.Fly, ee, ie)
        })),
        children: (0, oe.jsx)(de.e, {
          name: "feather-pointed"
        })
      })
    }

    function ZH(ee) {
      var ie, He;
      let {
        hidden: ye,
        actionButtons: Me,
        contextSlots: Ke
      } = ee;
      const {
        t: Ue
      } = (0, Se.v)(), {
        gun: Fe,
        aimable: Je,
        chargeName: Re
      } = (0, ce.k)("heldItemAim"), ke = (0, ce.k)("gliderBoostFuel"), {
        canFly: qe,
        flying: fe
      } = (0, ce.k)("flight"), Te = (0, Ee.i)("touchscreenActionButton"), pe = Fe ? XH : Te, Xe = Je ? {
        icon: zH,
        label: Ue("touchKeys:aim")
      } : null, ze = null !== Re ? {
        icon: [{
          icon: Re
        }]
      } : null, Be = null !== Xe && void 0 !== Xe ? Xe : ze, ge = null !== (ie = null === (He = Fe ? Xe : null !== ze && void 0 !== ze ? ze : Xe) || void 0 === He ? void 0 : He.icon) && void 0 !== ie ? ie : gH, Oe = [!Me && Be ? dH(ue.b.Action2, Be.icon, ye, Be.label) : null, Fe ? dH(ue.b.Action3, BH, ye, Ue("touchKeys:scope")) : null, qe ? WH(fe, Ue("touchKeys:fly")) : null];
      return (0, oe.jsxs)(oe.Fragment, {
        children: [pe && (0, oe.jsx)(wH, {
          code: ue.b.Action1,
          slot: Pi,
          icon: pe,
          label: Fe ? Ue("touchKeys:reload") : void 0,
          hidden: ye
        }, JSON.stringify(pe)), Me && (0, oe.jsxs)(oe.Fragment, {
          children: [(0, oe.jsx)(wH, {
            code: ue.b.Attack,
            slot: Di,
            icon: EH,
            name: Ue("touchKeys:attack"),
            hidden: ye
          }), (0, oe.jsx)(wH, {
            code: ue.b.Use,
            slot: wi,
            icon: ge,
            name: Ue("touchKeys:use"),
            hidden: ye
          })]
        }), (de = Oe, We = Ke, de.filter((ee => null !== ee)).slice(0, We.length).map(((ee, ie) => {
          const He = We[ie];
          return (0, oe.jsx)(be.Fragment, {
            children: ee.render(He)
          }, `${ee.id}:${He}`)
        }))), ke > 0 && (0, oe.jsx)(wH, {
          code: ue.b.Boost,
          slot: Ai,
          className: "BoostKey",
          icon: OH,
          label: Ue("touchKeys:boost", {
            fuel: ke > 99 ? "99+" : ke
          }),
          hidden: ye
        })]
      });
      var de, We
    }

    function wH(ee) {
      let {
        code: ie,
        slot: He,
        icon: ye,
        label: be,
        name: Me,
        hidden: Ue,
        className: Fe
      } = ee;
      const Re = Wi(ie, Ue);
      return (0, oe.jsx)(Yi, {
        ref: Re,
        slot: He,
        className: Ke()("TouchActionKey", Fe),
        canvasZone: !0,
        label: be,
        role: void 0 !== Me ? "img" : void 0,
        "aria-label": Me,
        children: (0, oe.jsx)(Je.e, {
          text: ye
        })
      })
    }
    var DH = He(4607),
      PH = He(2722),
      AH = He(656);
    const YH = (0, be.memo)((function() {
      (0, Oe.b)();
      const ee = (0, be.useRef)([]),
        ie = (0, PH.c)(),
        He = (0, be.useRef)(0),
        ye = (0, be.useRef)(0),
        Me = (0, be.useRef)([]),
        Ke = (0, be.useRef)(null);

      function Ue(He, ye, be, Me) {
        const Ke = (0, AH.d)(),
          Ue = setTimeout((() => {
            ee.current = ee.current.filter((ee => ee.id !== Ke)), ie()
          }), Me);
        fe.gameBridge.send("recordFlyingMiddleText", {
          content: He,
          ge: ye,
          angle: be,
          Oe: Me
        }), ee.current.push({
          id: Ke,
          content: He,
          ge: ye,
          Oe: Me,
          removeTimeout: Ue,
          angle: be
        }), ie()
      }
      return (0, ce.e)("shotDamageToShow", (ee => {
        let {
          damage: ie,
          wasCrit: He,
          distance: ye
        } = ee;
        const be = -Math.PI / 4 + Math.random() * Math.PI / 2;
        Ue(He ? [{
          str: ie.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [ie.toString()], ye, be, 1e3)
      })), (0, Fe.f)("flyingMiddleMessage", (ee => {
        let {
          content: ie,
          ge: be,
          Oe: Fe
        } = ee;
        Me.current.push({
          content: ie,
          ge: be,
          Oe: Fe
        });
        const Je = () => {
          const {
            content: ee,
            ge: ie,
            Oe: be
          } = Me.current.shift(), Ke = function(ee) {
            const ie = -Math.PI / 4,
              He = Math.PI / 4,
              ye = He - ie,
              be = (1 + Math.sqrt(5)) / 2,
              Me = 2 * Math.PI / (be * be);
            let Ke = ee + Me;
            for (; Ke > He;) Ke -= ye;
            for (; Ke < ie;) Ke += ye;
            const Ue = Math.PI / 6;
            if (Math.abs(Ke - ee) < Ue) {
              Ke = ee + (Math.sign(Ke - ee) || 1) * Ue, Ke > He && (Ke = ee - Ue), Ke < ie && (Ke = ee + Ue)
            }
            return Ke
          }(ye.current);
          ye.current = Ke, He.current = Date.now(), Ue(ee, ie, Ke, be)
        };
        if (!Ke.current) {
          const ee = () => {
            Me.current.length > 0 && Je(), 0 === Me.current.length && (clearInterval(Ke.current), Ke.current = null)
          };
          Ke.current = setInterval(ee, 200), He.current + 200 < Date.now() && ee()
        }
        for (; Me.current.length > 4;) Je()
      })), (0, Fe.f)("forceFlyingMiddleMessage", (ee => {
        let {
          content: ie,
          ge: He,
          angle: ye,
          Oe: be
        } = ee;
        Ue(ie, He, ye, be)
      })), (0, be.useEffect)((() => () => {
        clearInterval(Ke.current), Ke.current = null;
        for (const ie of ee.current) clearTimeout(ie.removeTimeout)
      }), []), (0, oe.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: ee.current.map((ee => {
          const {
            id: ie,
            content: He,
            ge: ye,
            Oe: be,
            angle: Me
          } = ee;
          return ee.pos || (ee.pos = function(ee, ie) {
            const He = 50 / (ee ** .7 * .35);
            return {
              x: He * Math.sin(ie),
              y: -He * Math.cos(ie)
            }
          }(ye, Me)), (0, oe.jsx)(VH, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: be,
            enterActiveStyle: {
              transform: `translate(${ee.pos.x}vw, ${ee.pos.y}vh)`,
              transition: `transform ${be}ms ease-out`
            },
            children: (0, oe.jsx)("div", {
              children: (0, oe.jsx)(Je.e, {
                text: He
              })
            })
          }, ie)
        }))
      })
    }));

    function VH(ee) {
      let {
        children: ie,
        className: He,
        classNames: ye,
        timeout: Me,
        enterActiveStyle: Ke
      } = ee;
      const [Ue, Fe] = (0, be.useState)(!1), [Je, Re] = (0, be.useState)(!1), ke = (0, be.useRef)(null);
      return (0, be.useEffect)((() => {
        Fe(!0)
      }), []), (0, oe.jsx)(DH.e, {
        className: He,
        classNames: ye || He,
        in: Ue,
        timeout: Me,
        nodeRef: ke,
        onEntering: () => {
          Re(!0)
        },
        children: (0, be.cloneElement)(ie, {
          ref: ke,
          style: Je && Ke || void 0
        })
      })
    }
    var aH = He(37420);

    function cH() {
      const ee = (0, ce.k)("health");
      return (0, oe.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, oe.jsx)(aH.b, {
          placement: "statBars"
        }), (0, oe.jsx)(xH, {
          actualValue: ee.shield,
          maxValue: ee.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, oe.jsx)(xH, {
          actualValue: ee.health,
          maxValue: ee.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function xH(ee) {
      let {
        actualValue: ie,
        maxValue: He,
        hideAtValue: ye,
        icon: be,
        className: Me
      } = ee;
      return (0, Oe.c)(), null === ie || null === He || ie === ye || He === ye ? null : (0, oe.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, oe.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, oe.jsx)("div", {
            className: `BottomScreenStatBar ${Me}`,
            style: {
              transform: `scaleX(${Math.max(ie/He,0)})`,
              transformOrigin: "left center"
            }
          }), (0, oe.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, oe.jsx)(de.e, {
              name: be
            }), ` ${Math.ceil(ie)}/${He}`]
          })]
        })
      })
    }
    var LH = He(34867),
      CH = He(4922),
      vH = He(1315),
      uH = He(2952),
      mH = He(1438),
      lH = He(1294),
      SH = He(3771),
      nH = He(3228),
      jH = He(2018),
      sH = He(2166),
      IH = He(780),
      hH = He(3865),
      NH = He(125),
      GH = He(347);

    function rH(ee, ie) {
      let {
        shownName: He,
        lifeformType: ye
      } = ee;
      return null !== He ? He : null !== ye ? ie(`lifeform:${(0,GH.ve)(ye)}`) : null
    }
    var QH = He(1567),
      ey = He(4020),
      iy = He(4014),
      Hy = He(4050),
      yy = He(4044),
      by = He(4645),
      My = He(34959);

    function Ky(ee) {
      let {
        config: ie,
        track: He,
        xp: ye,
        tileState: be
      } = ee;
      const {
        t: Me
      } = (0, Se.v)(), Ue = (0, yy.l)(ie, ye), Fe = (0, yy.m)(ie, ye), Je = Ue < ie.tierCount ? Ue + 1 : null, Re = Math.min(4, ie.tierCount), ke = Math.max(1, Math.min(Ue - 1, ie.tierCount - Re + 1)), qe = null !== Je ? Je - ke : Ue - ke, fe = null !== Je && Je > ke ? Je - ke : qe + 1, Te = Fe.xpForNextTier - Fe.xpIntoTier, pe = Fe.xpForNextTier > 0 ? Fe.xpIntoTier / Fe.xpForNextTier : 1, Xe = {
        "--road-cols": Re,
        "--road-fill": qe,
        "--road-chip": fe
      }, ze = [];
      for (let Ke = 0; Ke < Re; Ke++) ze.push(ke + Ke);
      return (0, oe.jsxs)("div", {
        className: "SeasonPassRoad",
        style: Xe,
        children: [(0, oe.jsxs)("div", {
          className: "SeasonPassRoadColumns",
          children: [(0, oe.jsx)("div", {
            className: "SeasonPassRoadLine"
          }), (0, oe.jsx)("div", {
            className: "SeasonPassRoadLine SeasonPassRoadLineFill"
          }), ze.map((ee => (0, oe.jsxs)("div", {
            className: Ke()("SeasonPassRoadColumn", {
              SeasonPassRoadColumnEarning: ee === Je,
              SeasonPassRoadColumnAhead: null !== Je && ee > Je
            }),
            children: [(0, oe.jsx)(by.e, {
              reward: (0, yy.h)(ie, {
                tier: ee,
                track: He
              }),
              tileState: be(ee),
              track: He,
              size: "small"
            }), (0, oe.jsx)(My.e, {
              tier: ee,
              state: ee === Je ? "earning" : ee <= Ue ? "reached" : "locked",
              progress: pe,
              size: "small"
            })]
          }, ee))), null !== Je && (0, oe.jsx)("span", {
            className: "SeasonPassRoadChip SmallTextBold",
            children: Me("seasonPass:xpToGo", {
              xp: Te
            })
          })]
        }), ke + Re - 1 < ie.tierCount && (0, oe.jsxs)("span", {
          className: "SeasonPassRoadEnd SmallTextBold",
          children: ["\u2026 ", ie.tierCount]
        })]
      })
    }
    const Uy = (0, be.memo)((function() {
      const {
        t: ee
      } = (0, Se.v)(), ie = (0, Hy.c)(), He = (0, iy.i)("listen");
      if (null === ie || ie.seasonPassRoomXp <= 0) return null;
      const ye = "loaded" === He.status ? He.view : null,
        be = ye ? ye.config : (0, QH.g)(Date.now()),
        Me = iy.f.getProvisionalXp(ie),
        Ke = ie.seasonPassLifeXp > 0 ? ee("seasonPass:xpThisLife", {
          xp: ie.seasonPassLifeXp
        }) : ee("seasonPass:xpThisGame", {
          xp: ie.seasonPassRoomXp
        });
      return (0, oe.jsxs)("div", {
        className: "SeasonPassRespawnBanner",
        children: [(0, oe.jsx)("div", {
          className: "SeasonPassRespawnBannerGained FullyFancyText",
          children: Ke
        }), be && null !== Me && (0, oe.jsx)(Fy, {
          config: be,
          view: ye,
          xp: Me
        }), ie.seasonPassXpCapped && (0, oe.jsx)("div", {
          className: "SeasonPassRespawnBannerCapped SmallTextBold",
          children: ee("seasonPass:dailyCapReached")
        })]
      })
    }));

    function Fy(ee) {
      var ie;
      let {
        config: He,
        view: ye,
        xp: be
      } = ee;
      const Me = null !== ye && void 0 !== ye && ye.state.hasHyperRank ? "hyper" : "free",
        Ke = ye ? {
          ...ye.state,
          xp: Math.max(be, ye.state.xp)
        } : null;
      return (0, oe.jsx)(Ky, {
        config: He,
        track: Me,
        xp: null !== (ie = null === Ke || void 0 === Ke ? void 0 : Ke.xp) && void 0 !== ie ? ie : be,
        tileState: ee => Ke ? (0, ey.i)(He, Ke, {
          tier: ee,
          track: Me
        }) : "locked"
      })
    }
    var Jy = He(3779),
      oy = He(3784),
      Ry = He(3179);
    const ky = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      qy = (0, be.memo)((function() {
        var ee, ie;
        const He = (0, Oe.b)(),
          ye = (0, Te.useNavigatePreserveSearch)(),
          {
            t: Me
          } = (0, Se.v)(),
          {
            loadingOverlayVisible: Ue
          } = (0, ae.m)(["loadingOverlayVisible"]),
          Je = (0, Le.A)(),
          [Re, ke] = (0, be.useState)(!1),
          [qe, pe] = (0, be.useState)(!0),
          [Xe, ze] = (0, be.useState)(null),
          Be = (0, PH.c)(),
          ge = (0, Ee.i)("respawnButtonText"),
          We = (0, Ee.i)("usePlayAgainButton"),
          te = (0, Ee.i)("useRespawnButton"),
          {
            gameNameWithVariation: Ze
          } = (0, ce.k)("connectedGame"),
          De = (0, be.useRef)(jH.c.get("secsToRespawn")),
          Pe = (0, be.useRef)(fe.gameBridge.latest("localPlayerAlive")),
          Ae = (0, be.useRef)(jH.c.get("secsToRespawn")),
          Ye = (0, be.useRef)(jH.c.get("autoRespawn")),
          Ve = (0, be.useRef)(null),
          xe = (0, be.useRef)(0),
          Ce = (0, be.useRef)(0),
          [ve, ue] = (0, be.useState)(!1),
          me = (0, be.useRef)(null),
          le = (0, be.useRef)(null),
          ne = (0, be.useRef)(null);
        (0, Ee.g)("secsToRespawn", (ee => {
          console.log("Received new secsToRespawn with", ee, "and current canRespawn value of ", Ye.current), Ae.current = ee, he()
        })), (0, Ee.g)("autoRespawn", (ee => {
          console.log("Received autorespawn", ee, "current canRespawn value of ", De.current), Ye.current = ee, he()
        }));
        const je = ee => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", ee), ee || xe.current++, Pe.current = ee, he()
        };
        (0, ce.e)("localPlayerAliveSet", je), (0, Fe.f)(nH.o, (ee => {
          "connected" === ee && !Pe.current && Ye.current && De.current <= 0 && (Ce.current = 0, Ne())
        })), (0, be.useEffect)((() => {
          const ee = fe.gameBridge.latest("localPlayerAlive");
          ee === Pe.current ? (console.log("Updating respawn component from initial mount"), he()) : je(ee)
        }), []), (0, be.useEffect)((() => {
          if (Re) {
            ue(!1);
            const ee = setTimeout((() => {
              ue(!0)
            }), 600);
            return () => {
              clearTimeout(ee)
            }
          }
          return () => {}
        }), [Re]);
        (0, ce.e)("kill", (ee => {
          let {
            killer: ie,
            victim: He,
            withItem: ye
          } = ee;
          if (!He.local) return;
          const be = ((ee, ie) => {
            if (ee.local) {
              const ee = ky[ie];
              return ee ? Me(ee) : null
            }
            const He = rH(ee, Me);
            return He ? Me("respawnPage:killedBy", {
              name: He
            }) : null
          })(ie, ye);
          be && ze({
            text: be,
            deathCount: Pe.current ? xe.current + 1 : xe.current
          })
        }));
        const se = () => {
            Re && Ye.current && Pe.current && ve && ke(!1)
          },
          Ie = Re && Ye.current && Pe.current && ve && !Ue;
        (0, Fe.f)("usedKeyboard", (() => {
          se()
        })), (0, oy.b)("respawn", Ie, se);
        const he = () => {
            pe(Ae.current >= 3 || !Ye.current), Pe.current ? (clearInterval(Ve.current), Ve.current = null, Ye.current ? Be() : ke(!1)) : (ke(!0), De.current = Ae.current, Be(), console.log("Running respawn stats updated", Ye.current, De.current), Ye.current && De.current <= 0 && Ne(), clearInterval(Ve.current), De.current > 0 && (Ve.current = setInterval((() => {
              De.current = Math.max(De.current - 1, 0), Be(), De.current <= 0 && (clearInterval(Ve.current), Ve.current = null, jH.c.get("autoRespawn") && Ne())
            }), 1e3)))
          },
          Ne = () => {
            if (Date.now() - Ce.current > 1e3) {
              const ee = () => {
                fe.gameBridge.send("respawn", null), Ce.current = Date.now()
              };
              jH.c.get("autoRespawn") ? ee() : (0, lH.db)((() => {
                ee()
              }), "video_respawn")
            }
          },
          Ge = (0, be.useMemo)((() => {
            var ee;
            return null === (ee = (0, IH.k)(Ze)) || void 0 === ee ? void 0 : ee.otherGameLinksOnRespawnPage
          }), [Ze]),
          re = 0 === De.current,
          Qe = (null === Xe || void 0 === Xe ? void 0 : Xe.deathCount) === xe.current ? Xe.text : null,
          ei = Re && qe && !Ue,
          ii = Je && Ie && null !== (ee = null === (ie = (0, we.f)()) || void 0 === ie ? void 0 : ie.getBoundButton("menuConfirm")) && void 0 !== ee ? ee : null,
          Hi = ee => re ? ee : Me("respawnPage:actionInSeconds", {
            action: ee,
            seconds: De.current
          });
        return (0, oe.jsx)(LH.e, {
          showing: Re,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, oe.jsx)(SH.d, {
            show: Re,
            "data-holds-camera-keeper": "",
            children: (0, oe.jsxs)(CH.e, {
              close: () => {
                ke(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: Ye.current || Ue ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, NH.is99NightsCrazyGamesBundle)() && (0, oe.jsx)(mH.b, {
                onClick: sH.d,
                children: Me("homePage:backToGames")
              }), (0, oe.jsxs)("div", {
                className: "RespawnContainer",
                onClick: se,
                children: [(0, oe.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, oe.jsx)("div", {
                    ref: le,
                    className: "RespawnSideSquareBannerDiv",
                    children: He[0] > 925 && (0, Ry.n)() && (0, oe.jsx)(uH.c, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: le
                      },
                      showing: ei,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, oe.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, oe.jsxs)("div", {
                      className: Ke()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: Je
                      }),
                      children: [Ye.current && (0, oe.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, oe.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, oe.jsx)(de.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), Me("respawnPage:youDied")]
                        }), (0, oe.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === ii && (Pe.current ? Me("respawnPage:pressAnywhereToContinue") : re ? Me("respawnPage:respawning") : Hi(Me("general:respawn"))), null !== ii && (0, oe.jsx)(Jy.e, {
                            text: Me("controller:screensPressToContinue", {
                              button: Jy.g
                            }),
                            glyph: ii,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), Qe && (0, oe.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: Qe
                        })]
                      }), !Ye.current && (0, oe.jsxs)(oe.Fragment, {
                        children: [(0, oe.jsxs)("div", {
                          className: Ke()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !Ge
                          }),
                          children: [We && (0, oe.jsx)(mH.m, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, lH.db)((() => {
                                (0, ae.l)("inGameReplay");
                                const ee = (0, vH.b)(Ze);
                                ye(ee)
                              }), "video_start")
                            },
                            disabled: !re || !ve,
                            touchPressOn: "pointerup",
                            children: Hi(Me("respawnPage:playAgain"))
                          }), te && (0, oe.jsx)(mH.c, {
                            className: "RespawnPageButton",
                            onClick: Ne,
                            padDefaultFocus: !We,
                            padBack: "sessionBasedGame:stayInLobby" === ge,
                            disabled: !re || !ve,
                            touchPressOn: "pointerup",
                            children: Hi(Me(ge))
                          }), !(0, NH.is99NightsCrazyGamesBundle)() && (0, oe.jsx)(mH.G, {
                            className: "RespawnPageButton",
                            onClick: sH.d,
                            disabled: !re || !ve,
                            touchPressOn: "pointerup",
                            children: Hi(Me("respawnPage:exitGame"))
                          })]
                        }), Ge && (0, oe.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, oe.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: Me("respawnPage:orTry")
                          }), (0, oe.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: Ge.map((ee => (0, oe.jsx)(hH.c, {
                              source: {
                                type: "game",
                                gameNameWithVariation: ee
                              },
                              disabled: !re || !ve,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, ae.l)("inGameReplay");
                                const ie = (0, vH.b)(ee);
                                ye(ie)
                              }
                            }, ee)))
                          })]
                        })]
                      }), Re && (0, oe.jsx)(Uy, {})]
                    })
                  }), (0, oe.jsx)("div", {
                    ref: ne,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, oe.jsx)("div", {
                  ref: me,
                  className: "RespawnBottom",
                  children: (0, Ry.n)() && (0, oe.jsx)(uH.c, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: me
                    },
                    showing: ei,
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
    var fy = He(37436);
    const Ty = [{
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
      py = [{
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
      Xy = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      zy = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      By = (0, be.memo)((function() {
        const ee = (0, be.useRef)(null),
          ie = (0, be.useRef)(null);

        function He(He) {
          var ye;
          let {
            Tb: be,
            screenPos: Me
          } = He;
          const Ke = ee.current;
          null === (ye = ie.current) || void 0 === ye || ye.cancel(), Ke.classList.remove("HitmarkerCrit"), Me ? (Ke.style.left = `${Me.x}%`, Ke.style.top = `${Me.y}%`) : (Ke.style.left = "50%", Ke.style.top = "50%"), Ke.style.rotate = 16 * (Math.random() - .5) + "deg", be && Ke.classList.add("HitmarkerCrit");
          const Ue = Ke.animate(be ? py : Ty, be ? zy : Xy);
          ie.current = Ue, Ue.onfinish = () => {
            Ke.classList.remove("HitmarkerCrit")
          }
        }
        return (0, Fe.f)("localGunHitmarker", (ee => {
          let {
            Tb: ie
          } = ee;
          He({
            Tb: ie
          })
        })), (0, Fe.f)("yourAttackHit", (ee => {
          let {
            Tb: ie,
            screenPos: ye
          } = ee;
          He({
            Tb: ie,
            screenPos: ae.e.get("isTouchScreen") ? ye : void 0
          })
        })), (0, Fe.f)("sendHitmarker", (ee => {
          let {
            Tb: ie,
            screenPos: ye
          } = ee;
          He({
            Tb: ie,
            screenPos: ye
          })
        })), (0, oe.jsxs)("div", {
          ref: ee,
          className: "Hitmarker",
          children: [(0, oe.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, oe.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, oe.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, oe.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function Ey() {
      const ee = (0, be.useRef)(!0);
      return (0, Fe.f)("localBlockMined", (() => {
        he.h.play("blockMined")
      })), (0, Fe.f)("yourAttackHit", (() => {
        he.h.play("hitLanded")
      })), (0, Fe.f)("localGunHitmarker", (() => {
        he.h.play("hitLanded")
      })), (0, Fe.f)("damagedByOtherPlayer", (() => {
        he.h.play("damageTaken")
      })), (0, ce.e)("localPlayerAliveSet", (ie => {
        !ie && ee.current && he.h.play("death"), ee.current = ie
      })), null
    }
    var gy = He(1970),
      Oy = He(37454),
      dy = He.n(Oy),
      Wy = He(2083),
      ty = He(2074),
      Zy = He(3608),
      wy = He(34897);
    const Dy = GH.me ? 7e7 : 7e3,
      Py = dy()("#ffffff").alpha(.5).string();

    function Ay(ee) {
      const ie = (0, Zy.c)(ee);
      return void 0 !== ie && "Gun" === (0, wy.itemTypeOf)(ie)
    }

    function Yy(ee) {
      if (!ee) return console.error(`Killfeed colour was ${ee}`), Py;
      try {
        return dy()(ee).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${ee} is not a colour`), Py
      }
    }
    const Vy = (0, be.memo)((function() {
      const {
        t: ee
      } = (0, Se.v)(), ie = (0, be.useRef)([]), He = (0, PH.c)();
      return (0, ce.e)("kill", (function(ye) {
        var be, Me;
        let {
          killer: Ke,
          victim: Ue,
          withItem: Fe,
          killstreak: Je
        } = ye;
        const oe = ie.current;
        if (oe.length >= 3) {
          const ee = oe.shift();
          clearTimeout(ee.timeout)
        }
        const Re = fe.gameBridge.latest("hiddenPlayerNames"),
          ke = {
            deadName: rH(Ue, ee),
            killerName: rH(Ke, ee),
            isFriend: {
              killer: (0, Wy.i)(Ke.realName, Re),
              dead: (0, Wy.i)(Ue.realName, Re)
            },
            withItem: Fe,
            wasHeadshot: !1,
            killstreak: Je,
            timeout: setTimeout((() => {
              oe.shift(), He()
            }), Dy),
            reactId: `${null!==(be=Ke.id)&&void 0!==be?be:Ke.shownName}|${null!==(Me=Ue.id)&&void 0!==Me?Me:Ue.shownName}|${Date.now()}`,
            killerBackground: Yy(Ke.colour),
            deadBackground: Yy(Ue.colour)
          };
        oe.push(ke), He()
      })), (0, be.useEffect)((() => {
        const ee = ie.current;
        return () => {
          for (; ee.length > 0;) {
            const {
              timeout: ie
            } = ee.pop();
            clearTimeout(ie)
          }
        }
      }), []), (0, oe.jsx)("div", {
        className: "Killfeed",
        children: ie.current.map((ee => {
          let {
            deadName: ie,
            killerName: He,
            withItem: ye,
            wasHeadshot: be,
            killstreak: Me,
            killerBackground: Ke,
            deadBackground: Ue,
            reactId: Fe,
            isFriend: Je
          } = ee;
          return (0, oe.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${Ke} calc(100% - 10rem), ${Ue} 100%)`
            },
            children: [Me >= 2 ? (0, oe.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, GH.T)(Me)
            }) : null, (0, oe.jsx)("div", {
              className: "KillfeedKillerName",
              children: He
            }), Je.killer && (0, oe.jsx)(ty.b, {}), (0, oe.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: Ay(ye) ? "7.5vmin" : "5vmin"
              },
              children: (0, oe.jsx)(gy.c, {
                itemName: ye,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), be ? (0, oe.jsx)(de.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, oe.jsx)("div", {
              className: "KillfeedDeadName",
              children: ie
            }), Je.dead && (0, oe.jsx)(ty.b, {})]
          }, Fe)
        }))
      })
    }));
    var ay = He(37501),
      cy = He(1087),
      xy = He.n(cy),
      Ly = He(335),
      Cy = He(3752),
      vy = He(37509),
      uy = He(1260);
    const my = {},
      ly = (0, be.memo)((function() {
        const ee = (0, be.useRef)({}),
          [, ie] = (0, be.useReducer)((ee => ee + 1), 0);
        (0, Fe.f)("setDirectionArrow", (He => {
          let {
            id: ye,
            position: be,
            style: Me,
            text: Ke,
            Ri: Ue
          } = He;
          const Fe = ee.current,
            Je = Me || my,
            oe = Ke,
            Re = Fe[ye];
          if (!Re) return Fe[ye] = {
            position: be,
            style: Je,
            text: oe,
            shouldShowDistance: Ue,
            Wm: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void ie();
          const ke = !xy()(Re.style, Je) || !xy()(Re.text, oe) || Re.shouldShowDistance !== Ue;
          Re.position = be, Re.style = Je, Re.text = oe, Re.shouldShowDistance = Ue, ke && ie()
        })), (0, Fe.f)("clearDirectionArrow", (He => {
          let {
            id: ye
          } = He;
          const be = ee.current;
          if (null === ye)
            for (const ee in be) delete be[ee];
          else delete be[ye];
          ie()
        })), (0, be.useEffect)((() => {
          const ie = ee.current,
            He = (0, uy.r)((() => {
              ! function(ee) {
                const ie = fe.gameBridge.lookup("localPos", null),
                  He = Cy.b - Sy,
                  ye = (0, Cy.h)() - Sy;
                for (const be in ee) {
                  const Me = ee[be];
                  if (!Me.Wm) continue;
                  const Ke = fe.gameBridge.lookup("screenPos", Me.position),
                    Ue = Ke.x - 50,
                    Fe = Ke.y - 50;
                  Ke.x === Me.lastScreenX && Ke.y === Me.lastScreenY || (Me.lastScreenX = Ke.x, Me.lastScreenY = Ke.y, Me.Wm.style.translate = `${Ke.x}vw ${Ke.y}vh`, Me.chevronElement && (Me.chevronElement.style.rotate = `${GH.c.fastATan2(Fe,Ue)}rad`));
                  const Je = Math.abs(Ue) < He && Math.abs(Fe) < ye;
                  if (Je !== Me.onScreen && (Me.onScreen = Je, Me.Wm.classList.toggle("DirectionArrowOnScreen", Je)), Me.shouldShowDistance && Me.distanceElement) {
                    const ee = Me.position[0] - ie[0],
                      He = Me.position[1] - ie[1],
                      ye = Me.position[2] - ie[2],
                      be = Math.round(Math.sqrt(ee * ee + He * He + ye * ye));
                    (-1 === Me.lastRenderedDist || (0, vy.e)(be, Me.lastRenderedDist, Me.lastDistUpdateTime)) && (Me.distanceElement.textContent = `${be}m`, Me.lastRenderedDist = be, Me.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(ie)
            }));
          return () => {
            He();
            for (const ee in ie) delete ie[ee]
          }
        }), []);
        const He = ee.current;
        return (0, oe.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(He).map((ee => {
            var ie;
            let [ye, be] = ee;
            const Me = null !== (ie = (0, Ly.ec)(be.style)) && void 0 !== ie ? ie : "#ffffff";
            return (0, oe.jsxs)("div", {
              ref: ee => {
                He[ye] && (He[ye].Wm = ee)
              },
              className: "DirectionArrow",
              style: {
                fontSize: be.style.fontSize,
                opacity: be.style.opacity
              },
              children: [(0, oe.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: ee => {
                  He[ye] && (He[ye].chevronElement = ee)
                },
                children: [(0, oe.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, oe.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, oe.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, oe.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, oe.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Me
                    }
                  }), (0, oe.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Me
                    }
                  })]
                })]
              }), (0, oe.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: Me,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${Me}`
                }
              }), be.text && (0, oe.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: Me,
                  fontWeight: be.style.fontWeight,
                  fontStyle: be.style.fontStyle
                },
                children: (0, oe.jsx)(Je.e, {
                  text: be.text
                })
              }), be.shouldShowDistance && (0, oe.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: ee => {
                  He[ye] && (He[ye].distanceElement = ee)
                },
                style: {
                  color: Me,
                  fontWeight: be.style.fontWeight,
                  fontStyle: be.style.fontStyle
                }
              })]
            }, ye)
          }))
        })
      })),
      Sy = .5;
    const ny = (0, be.memo)((function(ee) {
        let {
          isTouchScreen: ie
        } = ee;
        return (0, oe.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, oe.jsx)(hy, {}), ie && (0, oe.jsx)(fH, {})]
        })
      })),
      jy = {
        readyForNext: 0,
        running: 1
      },
      sy = 50;

    function Iy(ee) {
      console.assert(ee.state.current === jy.readyForNext);
      const ie = ee.queue.current,
        He = ee.foreground.current;
      if (ie.length > 0 && He) {
        const {
          toFraction: ye,
          toDuration: be
        } = ie.shift();
        ee.state.current = jy.running, He.style.transition = `transform ${Math.max(be-sy,0)}ms linear`, He.classList.remove("Complete"), ee.timeout.current = setTimeout((() => {
          He.style.transform = `scaleX(${ye})`, ee.timeout.current = setTimeout((() => {
            1 === ye && He.classList.add("Complete"), ee.state.current = jy.readyForNext, Iy(ee)
          }), Math.max(be - sy, 0))
        }), sy)
      }
    }

    function hy() {
      const ee = (0, be.useRef)([]),
        ie = (0, be.useRef)(jy.readyForNext),
        He = (0, be.useRef)(void 0),
        ye = (0, be.useRef)(null),
        Me = (0, be.useRef)({
          queue: ee,
          state: ie,
          timeout: He,
          foreground: ye
        }),
        Ke = (0, Ee.i)("showProgressBar");
      if ((0, be.useLayoutEffect)((() => (Ke && ie.current === jy.readyForNext && Iy(Me.current), () => {
          ie.current = jy.readyForNext, clearTimeout(He.current), Ke && (ee.current.length = 0)
        })), [Ke]), (0, Fe.f)("progressBarUpdate", (He => {
          let {
            toFraction: ye,
            toDuration: be
          } = He;
          ee.current.push({
            toFraction: ye,
            toDuration: be
          }), ie.current === jy.readyForNext && Iy(Me.current)
        })), !Ke) return null;
      return (0, oe.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, oe.jsx)("div", {
          className: "ProgressBarForeground",
          ref: ye,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var Ny = He(37516),
      Gy = He(2565);
    const ry = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Qy(ee) {
      let {
        classes: ie,
        gone: He
      } = ee;
      const ye = document.documentElement;
      ye.classList.remove(...ie);
      for (const be of He) be.style.display = "block";
      return () => {
        ye.classList.add(...ie);
        for (const ee of He) ee.style.display = ""
      }
    }

    function eb(ee) {
      const {
        isTouchScreen: ie
      } = (0, ae.m)(["isTouchScreen"]);
      (0, be.useLayoutEffect)((() => {
        if (!ie) return;
        const He = ee.current,
          ye = document.querySelector(`.${Ny.g}`),
          be = ee => {
            const ie = () => {
              const ie = ee.querySelector(Gy.h),
                ye = function(ee) {
                  const ie = document.documentElement;
                  return {
                    classes: Mi.A.map(Ji.G).filter((ee => ie.classList.contains(ee))),
                    gone: [...ee.querySelectorAll(`.TopRightTrayToggle.${Gy.l}`)]
                  }
                }(ee);
              ie && function(ee, ie) {
                (0, Gy.z)(ee, ie.classes.length > 0 || ie.gone.length > 0, (() => Qy(ie)))
              }(ie, ye);
              const be = `${Math.floor(function(ee,ie,He){const ye=document.documentElement,be=ye.classList.contains((0,Ji.K)("menu")),Me=ye.style.getPropertyValue((0,Ji.R)("menu"));if(!be&&""===Me)return ee.getBoundingClientRect().left;const Ke=ie?(0,Gy.n)(ie):()=>{},Ue=Qy(He);ye.classList.remove((0,Ji.K)("menu")),ye.style.removeProperty((0,Ji.R)("menu"));const Fe=ee.getBoundingClientRect().left;return Ue(),Ke(),be&&ye.classList.add((0,Ji.K)("menu")),""!==Me&&ye.style.setProperty((0,Ji.R)("menu"),Me),Fe}(ee,ie,ye)-He.getBoundingClientRect().left-4)}px`;
              He.style.getPropertyValue("--InGameHeaderMaxWidth") !== be && He.style.setProperty("--InGameHeaderMaxWidth", be)
            };
            ie();
            const be = new ResizeObserver(ie);
            be.observe(ee), be.observe(ye), window.addEventListener("resize", ie);
            const Me = () => ry.map((ee => document.documentElement.style.getPropertyValue(ee))).join();
            let Ke = Me();
            const Ue = new MutationObserver((() => {
              const ee = Me();
              ee !== Ke && (Ke = ee, ie())
            }));
            Ue.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const Fe = (0, qe.j)(Ji.f, ie),
              Je = new MutationObserver(ie);
            return Je.observe(ee, {
              childList: !0,
              subtree: !0
            }), () => {
              be.disconnect(), Ue.disconnect(), Je.disconnect(), Fe(), window.removeEventListener("resize", ie);
              const He = ee.querySelector(Gy.h);
              He && (0, Gy.n)(He)
            }
          },
          Me = () => ye.querySelector(".TopRightIconsContainer"),
          Ke = Me();
        let Ue;
        if (Ke) Ue = be(Ke);
        else {
          const ee = new MutationObserver((() => {
            const ie = Me();
            ie && (ee.disconnect(), Ue = be(ie))
          }));
          ee.observe(ye, {
            childList: !0,
            subtree: !0
          }), Ue = () => {
            ee.disconnect()
          }
        }
        return () => {
          Ue(), He.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [ie, ee])
    }
    var ib = He(4072),
      Hb = He(4063),
      yb = He(1620),
      bb = He(1490),
      Mb = He(1625),
      Kb = He(1768),
      Ub = He(1913),
      Fb = He(1083),
      Jb = He(4627),
      ob = He(1342);
    const Rb = 2e4,
      kb = 6e5,
      qb = new Set;

    function fb() {
      const {
        gameEntrySource: ee,
        loadingOverlayVisible: ie
      } = (0, ae.m)(["gameEntrySource", "loadingOverlayVisible"]), He = (0, ce.g)("connectedGame", (ee => (0, Jb.k)(ee) ? ee.lobbyName : null)), ye = (0, ce.k)("localPlayerAlive"), Me = (0, ce.g)("players", (ee => null !== ee.localId && void 0 !== ee.byId[ee.localId])), [Ke, Ue] = (0, be.useState)(null);
      return !ie && ye && Me && null !== He && Ke !== He && Ue(He), (0, be.useEffect)((() => {
        if (!(0, Jb.o)(ee) || null === Ke || Ke !== He || qb.has(Ke)) return;
        const ie = setTimeout((() => {
          qb.add(Ke), async function(ee) {
            const ie = await Fb.userContextManager.getCurrentUserContext();
            let He;
            try {
              He = (await bb.b.getWorldOwnerFriendOffer(ie)).owner
            } catch (be) {
              return void console.warn("Couldn't ask who owns this world", be)
            }
            if (!He || (0, Jb.w)(He.name, Date.now())) return;
            const ye = He;
            ! function(ee, ie) {
              const He = Date.now() + kb;
              let ye = Date.now(),
                be = 0;
              const Me = () => {
                const Ke = Date.now(),
                  Ue = fe.gameBridge.latest("connectedGame");
                Ue.lobbyName !== ee || Ke > He || (null === Ue.websocketUrl ? ye = 1 / 0 : ye === 1 / 0 && !ae.e.get("loadingOverlayVisible") && fe.gameBridge.latest("localPlayerAlive") && (ye = Ke + Rb), be = Ke < ye || !fe.gameBridge.latest("localPlayerAlive") || ae.e.get("isUiHidden") || ae.e.get("isUiHiddenByCamera") || (0, Kb.isTypingInInput)() || ae.e.get("loadingOverlayVisible") || (0, yb.o)() || (0, ib.i)() || (0, ob.l)() ? 0 : be + 1, be >= 2 ? ie() : setTimeout(Me, 500))
              };
              Me()
            }(ee, (() => {
              (0, Jb.h)(Mb.b.getSocialState().friends, ye.name) || ((0, Jb.s)(ye.name, Date.now()), Ub.f.showWorldOwnerOffer(ye), (0, HH.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(Ke).catch((ee => {
            console.error("Failed to offer the world's owner as a friend", ee)
          }))
        }), Rb);
        return () => {
          clearTimeout(ie)
        }
      }), [ee, Ke, He]), null
    }
    var Tb = He(1958);
    const pb = (0, be.memo)((function(ee) {
        let {
          durationMs: ie,
          endsAtMs: He
        } = ee;
        const [, ye] = (0, be.useReducer)((ee => ee + 1), 0), Me = null === He ? ie : Math.max(He - Date.now(), 0);
        return (0, be.useEffect)((() => {
          if (null === He || Me <= 0) return;
          const ee = setTimeout(ye, Me - 1e3 * (Math.ceil(Me / 1e3) - 1));
          return () => {
            clearTimeout(ee)
          }
        })), (0, oe.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, GH.mb)(Me)
        })
      })),
      Xb = (0, be.memo)((function() {
        const ee = (0, ce.k)("localEffects");
        return (0, oe.jsxs)("div", {
          className: "EffectInfosWrapper",
          children: [Object.entries(ee).map((ee => {
            let [ie, {
              icon: He,
              displayName: ye,
              durationMs: be,
              endsAtMs: Me,
              level: Ke
            }] = ee;
            return (0, oe.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, oe.jsx)(Tb.d, {
                icon: He,
                className: "EffectInfoIcon"
              }), (0, oe.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== be ? "0" : "1rem"
                },
                children: [(0, oe.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, oe.jsx)(Je.e, {
                    text: null !== ye && void 0 !== ye ? ye : ie,
                    className: "EffectInfoName SmallTextBold"
                  }), Ke > 1 && (0, oe.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, GH.T)(Ke)
                  })]
                }), null !== be && (0, oe.jsx)(pb, {
                  durationMs: be,
                  endsAtMs: Me
                })]
              })]
            }, ie)
          })), (0, oe.jsx)(aH.b, {
            placement: "bottomLeft"
          })]
        })
      }));
    var zb = He(37524),
      Bb = He(37739),
      Eb = He(186),
      gb = He(2966);
    var Ob = He(3163);

    function db(ee, ie) {
      (0, be.useLayoutEffect)((() => {
        let ie, He;
        const ye = requestAnimationFrame((() => {
          He = setTimeout((() => {
            He = void 0;
            const ye = ee();
            ie = "function" === typeof ye ? ye : void 0
          }), 0)
        }));
        return () => {
          var ee;
          cancelAnimationFrame(ye), clearTimeout(He), null === (ee = ie) || void 0 === ee || ee()
        }
      }), ie)
    }
    const Wb = [5, 5, 5],
      tb = [7, 4, 4, 4];

    function Zb(ee) {
      return ee.reduce(((ee, ie) => ee + ie), 0)
    }

    function wb(ee, ie, He, ye, be) {
      const Me = ee.getContext("2d");
      if (!Me) return null;
      const Ke = ie.color,
        Ue = `${ie.fontWeight} ${be}px ${ie.fontFamily}`,
        Fe = () => {
          ee.width = He, ee.height = ye, Me.fillStyle = Ke, Me.textAlign = "center", Me.textBaseline = "middle", Me.font = Ue
        };
      return Fe(), {
        ctx: Me,
        reset: Fe
      }
    }
    const Db = (0, be.memo)((function(ee) {
      let {
        show: ie,
        asText: He
      } = ee;
      const ye = (0, be.useRef)(null),
        Me = (0, be.useRef)(null),
        Ke = (0, be.useRef)(null),
        Ue = (0, be.useRef)(null),
        Fe = (0, pe.f)();
      return (0, be.useEffect)((() => Fe.whenShown((() => {
        let ee = 0,
          ie = 0,
          He = performance.now(),
          ye = 0;
        const be = (0, uy.r)((() => {
          var be, Me, Fe;
          ee++, ie++;
          const Je = performance.now();
          if (Je - He < 1e3) return;
          const oe = Math.round(ee / (Je - He) * 1e3);
          if (Ke.current = oe, null === (be = Ue.current) || void 0 === be || be.call(Ue, oe), ee = 0, He = Je, oe >= 55) return void(ye = 0);
          if (ye += 1, ye < 15) return;
          const Re = null !== (Me = MH.i.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== Me ? Me : 0,
            [ke, Te] = jH.c.get("minChunkAddDist");
          if (function(ee, ie) {
              const He = fe.gameBridge.lookup("aE", null);
              return null !== He && (He.horizontal > ee || He.vertical > ie)
            }(ke, Te) && (null !== (Fe = MH.i.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== Fe ? Fe : 0) + 432e5 < Date.now() && Re < 3) {
            MH.i.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            bH.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((ee => {
              "notificationTornDown" !== ee && (ee ? (fe.gameBridge.send("setChunkAddDistance", {
                horizontal: ke,
                vertical: Te
              }), MH.i.setItem("chunkHorizAddDist", ke), MH.i.setItem("chunkVertAddDist", Te), qe.h.yR("updatedChunkLoadDist"), MH.i.setItem("decreaseLoadDistPromptDeniedCount", 0)) : MH.i.setItem("decreaseLoadDistPromptDeniedCount", Re + 1))
            }))
          }
        }));
        let Me = performance.now();
        ie = 0;
        let Fe = null,
          Je = !document.hidden,
          oe = !1;

        function Re() {
          const ee = performance.now() - Me,
            He = 1e3 * ie / ee;
          Je && !oe && (null === Fe && (Fe = He), gb.c.setFps(He, Fe)), ie = 0, Me = performance.now()
        }
        let ke = setInterval(Re, Ob.b);

        function Te() {
          ie = 0, Me = performance.now(), clearInterval(ke), ke = setInterval(Re, Ob.b)
        }

        function pe() {
          const ee = Je;
          Je = !document.hidden, !ee && Je && Te()
        }
        document.addEventListener("visibilitychange", pe);
        const Xe = (0, qe.j)(nH.o, (ee => {
          const ie = oe;
          oe = (0, nH.s)(ee), ie && !oe && Te()
        }));
        return () => {
          be(), document.removeEventListener("visibilitychange", pe), Xe(), clearInterval(ke)
        }
      }))), [Fe]), db((() => {
        var ee;
        if (He) {
          const ee = document.createTextNode("");
          Me.current.appendChild(ee);
          const ie = function(ee) {
            return ie => {
              const He = ie.toString();
              ee.data !== He && (ee.data = He)
            }
          }(ee);
          return Ue.current = ie, null !== Ke.current && ie(Ke.current), () => {
            ee.remove(), Ue.current = null
          }
        }
        if (!ie || Ue.current) return;
        const be = ye.current,
          Fe = window.getComputedStyle(be.parentElement),
          Je = null !== (ee = window.devicePixelRatio) && void 0 !== ee ? ee : 1,
          oe = parseFloat(Fe.fontSize) * Je,
          Re = Math.round(3 * oe),
          ke = Math.round(oe),
          qe = wb(be, Fe, Re, ke, oe);
        if (!qe) return;
        const {
          ctx: fe,
          reset: Te
        } = qe, pe = ee => {
          Te(), fe.fillText(ee.toString(), be.width / 2, be.height / 2)
        };
        Ue.current = pe, null !== Ke.current && pe(Ke.current)
      }), [ie, He]), (0, oe.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: ie ? "flex" : "none"
        },
        children: [(0, oe.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), He && (0, oe.jsx)("span", {
          className: "FpsText",
          ref: Me
        }), !He && (0, oe.jsx)("canvas", {
          className: "FpsCanvas",
          ref: ye,
          width: 48,
          height: 16
        })]
      })
    }));

    function Pb(ee) {
      return Math.sign(ee) * Math.round(100 * Math.abs(ee))
    }

    function Ab(ee) {
      let {
        getCoordinates: ie,
        showChunkCoords: He,
        columns: ye
      } = ee;
      const Me = (0, be.useRef)(null);
      return db((() => {
        var ee;
        const be = Me.current,
          Ke = window.getComputedStyle(be.parentElement),
          Ue = null !== (ee = window.devicePixelRatio) && void 0 !== ee ? ee : 1,
          Fe = parseFloat(Ke.fontSize) * Ue,
          Je = Math.round(Fe * Zb(ye)),
          oe = Math.round(Fe),
          Re = wb(be, Ke, Je, oe, Fe);
        if (!Re) return;
        const {
          ctx: ke,
          reset: qe
        } = Re;
        let Te = !0,
          pe = 0,
          Xe = 0,
          ze = 0,
          Be = 0,
          Ee = 0,
          ge = 0;
        const Oe = () => {
          Te = !0
        };
        document.fonts.load(ke.font).then(Oe, Oe);
        const de = () => {
          qe(), Oe()
        };
        be.addEventListener("contextrestored", de);
        let We = performance.now();
        const te = (0, uy.v)((() => {
          var ee, Me, Ke, Ue, Je, oe;
          const Re = performance.now();
          Re - We >= 1e3 && (We = Re, qe(), Oe());
          const [de, te, Ze] = ie(), we = Pb(de), De = Pb(te), Pe = Pb(Ze);
          let Ae = null;
          if (He) {
            const ee = fe.gameBridge.lookup("localPos", null);
            Ae = (0, ne.db)(ee[0], ee[1], ee[2])
          }
          const Ye = null !== (ee = null === (Me = Ae) || void 0 === Me ? void 0 : Me[0]) && void 0 !== ee ? ee : 0,
            Ve = null !== (Ke = null === (Ue = Ae) || void 0 === Ue ? void 0 : Ue[1]) && void 0 !== Ke ? Ke : 0,
            ae = null !== (Je = null === (oe = Ae) || void 0 === oe ? void 0 : oe[2]) && void 0 !== Je ? Je : 0;
          if (!Te && we === pe && De === Xe && Pe === ze && Ye === Be && Ve === Ee && ae === ge) return;
          Te = !1, pe = we, Xe = De, ze = Pe, Be = Ye, Ee = Ve, ge = ae;
          const ce = [(we / 100).toFixed(2), (De / 100).toFixed(2), (Pe / 100).toFixed(2)];
          Ae && ce.unshift(`${Ye} ${Ve} ${ae}`), ke.clearRect(0, 0, be.width, be.height);
          const xe = be.height / 2;
          let Le = 0;
          for (let ie = 0; ie < ce.length; ie++) {
            const ee = Fe * ye[ie];
            ke.fillText(ce[ie], Le + ee / 2, xe, ee), Le += ee
          }
        }));
        return () => {
          te(), be.removeEventListener("contextrestored", de)
        }
      }), [ie, He, ye]), (0, oe.jsx)("div", {
        className: "CoordinateUI",
        children: (0, oe.jsx)("canvas", {
          ref: Me,
          className: "CoordinateCanvas",
          width: 16 * Zb(ye),
          height: 16
        })
      })
    }
    const Yb = (0, be.memo)((function() {
        const ee = (0, be.useCallback)((() => {
          const ee = fe.gameBridge.lookup("localPos", null);
          return [ee[0], ee[1], ee[2]]
        }), []);
        return (0, oe.jsx)(Ab, {
          getCoordinates: ee,
          showChunkCoords: !1,
          columns: Wb
        })
      })),
      Vb = (0, be.memo)((function() {
        const ee = (0, be.useCallback)((() => {
          const ee = fe.gameBridge.lookup("localPos", null),
            ie = Eb.g.BR;
          let He = ee[0] % ie,
            ye = ee[1] % ie,
            be = ee[2] % ie;
          return He < 0 && (He += ie), ye < 0 && (ye += ie), be < 0 && (be += ie), [He, ye, be]
        }), []);
        return (0, oe.jsx)(Ab, {
          getCoordinates: ee,
          showChunkCoords: !0,
          columns: tb
        })
      }));
    var ab = He(2110),
      cb = He(1320),
      xb = He(1033),
      Lb = He(1169),
      Cb = He(37574),
      vb = He(1441),
      ub = He(3465);
    const mb = (0, be.memo)((function() {
      const ee = (0, Ee.i)("maxAuraLevel");
      return 0 === ee ? null : (0, oe.jsx)(lb, {
        maxLevel: ee
      })
    }));

    function lb(ee) {
      let {
        maxLevel: ie
      } = ee;
      const He = (0, Ee.i)("auraPerLevel"),
        [ye, Me] = (0, be.useState)((() => {
          var ee;
          return null !== (ee = fe.gameBridge.latest("aura")) && void 0 !== ee ? ee : void 0
        })),
        [Ke, Ue] = (0, be.useState)((() => ze(ye))),
        [Fe, Je] = (0, be.useReducer)((ee => ee + 1), 0),
        Re = (0, be.useRef)(null),
        ke = (0, be.useRef)([]),
        qe = (0, be.useRef)({
          width: 0,
          level: 0
        }),
        Te = (0, be.useRef)(null),
        pe = (0, be.useRef)(null);

      function Xe() {
        if (null !== Te.current) return;
        if (0 === ke.current.length) return;
        const {
          width: ee,
          level: ie
        } = ke.current.shift();
        let He;
        if (ie !== qe.current.level && ie > qe.current.level !== ee > qe.current.width) {
          const ye = ie > qe.current.level;
          He = ye ? ee : 100 - ee, Re.current.style.transition = "none", Re.current.style.width = ye ? "0%" : "100%", Re.current.offsetWidth
        } else He = Math.abs(ee - qe.current.width);
        const ye = 100 * He / 20;
        Re.current.style.transition = `width ${ye}ms linear`, Ue(ee), qe.current = {
          width: ee,
          level: ie
        }, ke.current.length > 0 && (Te.current = setTimeout((() => {
          Te.current = null, Xe()
        }), ye))
      }

      function ze(ee) {
        return Math.floor(ee / He) === ie ? 100 : ee % He / He * 100
      }
      return (0, be.useEffect)((() => () => {
        clearTimeout(Te.current), clearTimeout(pe.current), Te.current = null, pe.current = null
      }), []), (0, ce.e)("aura", (ee => {
        if (pe.current && clearTimeout(pe.current), null === ee) return clearTimeout(Te.current), pe.current = null, Te.current = null, ke.current = [], qe.current = {
          width: 0,
          level: 0
        }, Me(void 0), void Ue(0);
        pe.current = setTimeout((() => {
          const ie = Math.floor(ye / He),
            be = Math.floor(ee / He),
            Ke = ze(ee);
          ee > ye && Cb.d.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), be > ie ? (be % 5 === 0 && Cb.d.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), Je(), ke.current.push({
            width: 100,
            level: ie
          })) : be < ie && ke.current.push({
            width: 0,
            level: ie
          }), ee === ye && be === ie || ke.current.push({
            width: Ke,
            level: be
          }), Me(ee), Xe()
        }), 50)
      })), (0, Oe.c)(), (0, oe.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, oe.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, oe.jsx)(vb.b, {
            showSignal: Fe,
            particleElement: (0, oe.jsx)("img", {
              src: (0, ub.g)("glint"),
              alt: ""
            })
          }), (0, oe.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, ub.g)("glint"),
            alt: "aura"
          }), (0, oe.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== ye && void 0 !== ye ? ye : 0) / He)
          })]
        }), (0, oe.jsx)("div", {
          className: "AuraBar",
          children: (0, oe.jsx)("div", {
            ref: Re,
            className: "AuraBarBackground",
            style: {
              width: `${Ke}%`
            }
          })
        })]
      })
    }
    var Sb = He(2729);

    function nb(ee) {
      ee.timed && (ee.endedAnimation = ee.timed.animation, ee.timed = null)
    }
    const jb = (0, be.memo)((function() {
      const ee = (0, be.useRef)(null),
        ie = (0, be.useRef)(null),
        He = (0, be.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, Fe.f)("middleScreenBarInitiate", (ee => {
        var ye;
        let {
          duration: be,
          Uy: Me,
          horizBarRemOffset: Ke
        } = ee;
        const Ue = He.current;
        nb(Ue);
        const Fe = ie.current;
        if (!(be >= 0) || !Fe) return;
        null === (ye = Ue.endedAnimation) || void 0 === ye || ye.cancel(), Ue.endedAnimation = null;
        const Je = Fe.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: be,
          fill: "forwards"
        });
        Ue.timed = {
          Uy: Me,
          horizBarRemOffset: Ke,
          animation: Je
        }
      })), (0, Fe.f)("middleScreenBarRemove", (() => {
        nb(He.current)
      })), (0, be.useEffect)((() => {
        const ye = He.current;
        let be = Number.NaN,
          Me = Number.NaN,
          Ke = Number.NaN;
        return (0, uy.q)((() => {
          var He, Ue, Fe, Je;
          const oe = ee.current,
            Re = ie.current;
          if (!oe || !Re) return;
          null !== (He = ye.timed) && void 0 !== He && He.Uy && "finished" === ye.timed.animation.playState && nb(ye), null === (Ue = ye.endedAnimation) || void 0 === Ue || Ue.cancel(), ye.endedAnimation = null;
          let ke = ye.timed ? 1 : 0;
          if (!ye.timed) {
            const ee = fe.gameBridge.lookup("momentumFrac", null);
            ke = ee > 0 ? 1 : 0, ee !== Ke && (Ke = ee, Re.style.transform = `scaleX(${ee})`)
          }
          const qe = null !== (Fe = null === (Je = ye.timed) || void 0 === Je ? void 0 : Je.horizBarRemOffset) && void 0 !== Fe ? Fe : 0;
          qe === be && ke === Me || (be = qe, Me = ke, oe.style.transform = `translateX(calc(-50% + ${qe}rem)) scaleX(${ke})`)
        }))
      }), []), (0, oe.jsx)("div", {
        className: "MiddleScreenBar",
        ref: ee,
        children: (0, oe.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: ie
        })
      })
    }));
    var sb = He(5129),
      Ib = He(2944);

    function hb() {
      const {
        t: ee
      } = (0, Se.v)(), ie = (0, Fe.j)("serverUpdating", null), He = (0, Ib.d)(250, null !== ie);
      return null === ie || He - ie > 3e4 ? null : (0, oe.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, oe.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: ee("updateWaiting:updatingIn", {
            countdown: (0, sb.m)(ie - He)
          })
        }), (0, oe.jsx)("div", {
          children: ee("updateWaiting:bringYouBack")
        })]
      })
    }
    var Nb = He(37761),
      Gb = He(2046),
      rb = He(2061),
      Qb = He(2043);
    const eM = [{
        translationKey: "general:interact"
      }],
      iM = (0, be.memo)((function() {
        const ee = (0, Ee.i)("crosshairText"),
          {
            interactPrompt: ie,
            blockText: He,
            neededTool: ye
          } = (0, ce.k)("crosshairTarget"),
          {
            isTouchScreen: Me
          } = (0, ae.m)(["isTouchScreen"]),
          Ke = (0, Le.A)(),
          Ue = (0, rb.d)("alt-fire");
        (0, be.useEffect)((() => {
          fe.gameBridge.send("setCrosshairInteractPrompt", !Me || Ke ? "key" : "touch")
        }), [Me, Ke]);
        const [Re, ke] = (0, be.useReducer)((ee => ee + 1), 0);
        (0, Fe.f)("customBindingsChanged", ke);
        var qe;
        if (null !== ie && (Ke && null !== Ue || !Me && null !== (0, Gb.o)("alt-fire"))) return (0, oe.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, oe.jsx)(Qb.e, {
            noaAction: "alt-fire"
          }), (0, oe.jsx)(Je.e, {
            text: null !== (qe = ie.label) && void 0 !== qe ? qe : eM
          })]
        });
        let Te = null;
        return null !== He ? Te = He : null !== ee && "" !== ee ? Te = ee : null !== ye && (Te = [{
          icon: ye,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), Te ? (0, oe.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, oe.jsx)(Je.e, {
            text: Te
          })
        }) : null
      }));
    var HM = He(2733);
    const yM = (0, be.memo)((function() {
      var ee;
      const {
        interactPrompt: ie
      } = (0, ce.k)("crosshairTarget"), {
        openInGameMenuName: He,
        openEverythingMenuName: ye
      } = (0, ae.m)(["openInGameMenuName", "openEverythingMenuName"]), be = (0, Fe.j)("aimingOverlay", "none"), Me = (0, xe.i)(), Ke = (0, HM.d)();
      return null === ie || null !== He || null !== ye || "sniper" === be || Me || Ke ? null : (0, oe.jsx)(bM, {
        label: null !== (ee = ie.label) && void 0 !== ee ? ee : eM
      })
    }));

    function bM(ee) {
      let {
        label: ie
      } = ee;
      const He = Wi(ue.b.Interact, !1);
      return (0, be.useEffect)((() => (qe.h.yR(Ji.u), () => {
        qe.h.yR(Ji.u)
      })), []), (0, oe.jsx)("div", {
        ref: He,
        className: "TouchInteractHit",
        children: (0, oe.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, oe.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, oe.jsx)(de.e, {
              name: "hand-back-point-up"
            })
          }), (0, oe.jsx)(Je.e, {
            text: ie
          })]
        })
      })
    }
    var MM = He(77),
      KM = He(34770),
      UM = He(1790),
      FM = He(34783);
    const JM = "ScreenshotMode";
    let oM = [];
    const RM = new Set;

    function kM(ee) {
      oM = ee;
      for (const ie of RM) ie(ee)
    }
    const qM = (0, be.memo)((function() {
      const {
        screenshotMode: ee,
        isTouchScreen: ie,
        openEverythingMenuName: He,
        openInGameMenuName: ye
      } = (0, ae.m)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), Me = null !== He || null !== ye, Ke = (0, ce.k)("localPlayerAlive");
      return (0, be.useEffect)((() => {
        !ee || !Me && ie && Ke || (0, KM.i)()
      }), [ee, Me, ie, Ke]), (0, be.useEffect)((() => KM.i), []), (0, be.useEffect)((() => {
        if (ee) return document.documentElement.classList.add(JM), (0, me.h)(Ce.p.ScreenshotMode, Ce.p.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(JM), (0, me.h)(Ce.p.ScreenshotMode, 0, "screenshotMode")
        }
      }), [ee]), ee ? (0, MM.createPortal)((0, oe.jsx)(fM, {}), document.body) : null
    }));

    function fM() {
      const {
        t: ee
      } = (0, Se.v)(), [ie, He] = (0, be.useState)(!1), [ye, Me] = (0, be.useState)(0), [Ke, Ue] = (0, be.useState)(null), Fe = function() {
        const [ee, ie] = (0, be.useState)(oM);
        return (0, be.useEffect)((() => (RM.add(ie), ie(oM), () => {
          RM.delete(ie)
        })), []), ee
      }(), Je = (0, be.useRef)(), Re = (0, be.useRef)(!1);
      (0, be.useEffect)((() => () => {
        clearTimeout(Je.current)
      }), []);
      const ke = ee => {
          clearTimeout(Je.current), Ue(ee), ee && (Je.current = setTimeout((() => {
            Ue(null)
          }), 2e3))
        },
        qe = (ie, He) => {
          switch (ie) {
            case "saved":
              ke(ee("screenshotMode:saved"));
              break;
            case "denied":
              ke(ee("screenshotMode:denied"));
              break;
            case "needsTap":
              oM.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), ke(ee("screenshotMode:saveWaitingFirst"))) : kM([...oM, He])
          }
        },
        fe = ie => {
          console.error("Screenshot mode: the photo wasn't saved", ie), ke(ee("screenshotMode:failed"))
        };
      return (0, oe.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, oe.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, oe.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), ye > 0 && (0, oe.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, ye), (0, oe.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": ee("screenshotMode:back"),
          onClick: KM.i,
          children: (0, oe.jsx)(de.e, {
            name: "arrow-left"
          })
        }), (0, oe.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": ee("screenshotMode:takePhoto"),
          "aria-busy": ie,
          onClick: () => {
            (async () => {
              if (!ie) {
                He(!0), ke(null);
                try {
                  const ee = await (0, KM.j)();
                  Me((ee => ee + 1)), qe(await (0, FM.g)(ee), ee)
                } catch (ee) {
                  fe(ee)
                } finally {
                  He(!1)
                }
              }
            })()
          },
          children: (0, oe.jsx)(de.e, {
            name: "camera-alt"
          })
        }), null !== Ke ? (0, oe.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: Ke
        }) : Fe.length > 0 && (0, oe.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (Re.current) return;
            Re.current = !0;
            const [ee] = oM;
            kM(oM.slice(1));
            const ie = ie => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", ie), (0, UM.e)(ee, ee.name), qe("saved", ee)
            };
            (0, FM.j)(ee).then((He => {
              "needsTap" === He ? ie(He) : qe(He, ee)
            }), ie).catch(fe).finally((() => {
              Re.current = !1
            }))
          },
          children: [(0, oe.jsx)(de.e, {
            name: "image"
          }), ee("screenshotMode:savePhoto"), Fe.length > 1 && ` (${Fe.length})`]
        })]
      })
    }
    var TM = He(5245),
      pM = He(5311);
    const XM = (0, be.forwardRef)((function(ee, ie) {
        let {
          text: He,
          className: ye,
          children: be
        } = ee;
        return He.hasText ? (0, oe.jsx)("div", {
          ref: ie,
          className: Ke()("HudTextPanel", ye, {
            NoBackground: !He.showBackground
          }),
          children: null !== be && void 0 !== be ? be : (0, oe.jsx)(Je.e, {
            text: He.content
          })
        }) : null
      })),
      zM = (0, be.memo)((function() {
        const ee = (0, Ee.l)("middleTextTop"),
          [ie, He] = (0, be.useState)(null),
          ye = (0, Ny.k)(ie);
        return ee.hasText ? (0, oe.jsx)("div", {
          className: Ke()("MiddleTextTopContainer", {
            MiddleTextTopBelow: ye
          }),
          children: (0, oe.jsx)(XM, {
            ref: He,
            className: "MiddleTextTop",
            text: ee
          })
        }) : null
      })),
      BM = (0, be.memo)((function() {
        const ee = (0, Ee.c)();
        return (0, oe.jsx)(oe.Fragment, {
          children: ee.map(((ee, ie) => (0, oe.jsx)(XM, {
            className: "HeaderChip",
            text: ee
          }, ie)))
        })
      }));
    var EM = He(4998);
    const gM = (0, be.memo)((function() {
      const {
        t: ee
      } = (0, Se.v)(), [ie, He] = (0, be.useState)(!1), ye = (0, be.useRef)(!1), Me = function(ee) {
        let {
          gameNameWithVariation: ie,
          lobbyName: He
        } = ee;
        if ((0, xb.k)(ie)) return "customGame";
        if ((0, Lb.I)(He)) return "lobby";
        return null
      }((0, ce.k)("connectedGame"));
      if (!Me || ie) return null;
      const Ke = EM.e[Me];
      return (0, oe.jsx)(ge.g, {
        tooltipInner: (0, oe.jsx)("div", {
          children: ee(Ke.reportButtonTooltip)
        }),
        children: (0, oe.jsx)("div", {
          children: (0, oe.jsx)(mH.K, {
            onClick: () => {
              ye.current || (ye.current = !0, (0, EM.g)(Ke).then((ee => {
                null !== ee && void 0 !== ee && ee.selectedPolicyId && (fe.gameBridge.send("reportLobbyOrGame", {
                  target: Me,
                  policy: ee.selectedPolicyId,
                  details: ee.UF
                }), He(!0))
              })).finally((() => {
                ye.current = !1
              })))
            }
          })
        })
      })
    }));
    var OM = He(9518),
      dM = He(37772),
      WM = He(37780),
      tM = He(37786),
      ZM = He(37788),
      wM = He(37775);
    let DM = !1;
    async function PM(ee, ie) {
      var He, ye;
      const {
        files: be
      } = ie, Me = be.replayKey();
      if (null === Me) return "none";
      if (DM) throw new Error(wM.d.saveBusy.text);
      const Ke = null !== (He = null === (ye = be.saveRefusal) || void 0 === ye ? void 0 : ye.call(be)) && void 0 !== He ? He : null;
      if (null !== Ke) throw new Error(Ke);
      DM = !0;
      try {
        return await async function(ee, ie, He) {
          const {
            files: ye
          } = ie, be = () => ye.replayKey() === He, Me = (ee, ie) => {
            be() && ye.markSaved(ee, ie)
          };
          let Ke = null;
          if (ie.pickerSupported()) {
            try {
              if (Ke = await ie.chooseFile(ee ? null : ye.fileHandle()), null === Ke) return "Ce"
            } catch (Fe) {
              ie.onFallback(Fe)
            }
            if (!be()) throw new Error(wM.d.saveClosed.text)
          }
          const Ue = await ye.encode();
          if (null === Ue) {
            if (null !== Ke) throw new Error(wM.d.saveClosed.text);
            return "none"
          }
          if (null !== Ke) try {
            return await ie.write(Ke, Ue), Me(Ke), "written"
          } catch (Fe) {
            ie.onFallback(Fe)
          }
          return Me(null, ie.download(Ue)), "downloaded"
        }(ee, ie, Me)
      } finally {
        DM = !1
      }
    }
    var AM = He(37813),
      YM = He(4937);
    const VM = [1, 2, 4, 8, 16, 32, 64];

    function aM(ee, ie) {
      return Math.max(0, Math.min(ee, ie))
    }

    function cM(ee, ie, He) {
      return He <= ie ? 0 : (ee - ie) / (He - ie) * 100
    }

    function xM(ee, ie, He) {
      const ye = He - ie;
      return Math.round(ie + ee / 100 * ye)
    }

    function LM(ee, ie) {
      const He = Math.floor(ee / ie / 60),
        ye = Math.floor(ee / ie % 60),
        be = ee % ie;
      return `${He.toString().padStart(2,"0")}:${ye.toString().padStart(2,"0")}:${be.toString().padStart(2,"0")}`
    }

    function CM(ee) {
      return Number.isInteger(ee) || VM.includes(ee) ? `${Math.round(ee)}\xd7` : `${ee.toFixed(1)}\xd7`
    }

    function vM(ee, ie) {
      const He = VM.indexOf(ee);
      if (-1 !== He) return "in" === ie ? VM[Math.min(He + 1, VM.length - 1)] : VM[Math.max(He - 1, 0)];
      if ("in" === ie) {
        for (const ie of VM)
          if (ie >= ee) return ie;
        return ee
      }
      for (let ye = VM.length - 1; ye >= 0; ye--)
        if (VM[ye] <= ee) return VM[ye];
      return VM[0]
    }

    function uM(ee, ie) {
      const He = ie.getBoundingClientRect();
      if (He.width <= 0) return 0;
      const ye = (ee - He.left) / He.width * 100;
      return Math.max(0, Math.min(100, ye))
    }

    function mM(ee, ie) {
      return ie <= 0 ? 0 : ee / ie * 100
    }

    function lM(ee, ie, He) {
      const ye = [];
      let be = Math.ceil(ee / He) * He;
      for (; be <= ie;) ye.push(be), be += He;
      return ye
    }
    var SM = He(37819);
    const nM = [{
        label: "Linear",
        easing: SM.k
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: SM.d
      }, {
        label: "Ease Out",
        easing: SM.h
      }, {
        label: "Ease In Out",
        easing: SM.b
      }],
      jM = 200,
      sM = 150;

    function IM(ee) {
      const ie = ee => Number(ee.toFixed(3)).toString();
      return `cubic-bezier(${ie(ee[0])}, ${ie(ee[1])}, ${ie(ee[2])}, ${ie(ee[3])})`
    }

    function hM(ee, ie) {
      return {
        cx: 25 + ee * sM,
        cy: 25 + (1 - ie) * sM
      }
    }

    function NM(ee, ie, He) {
      const ye = ee - He.left,
        be = ie - He.top;
      return {
        x: GH.c.clamp((ye - 25) / sM, 0, 1),
        y: GH.c.clamp(1 - (be - 25) / sM, -1, 2)
      }
    }

    function GM(ee, ie, He, ye, be) {
      return {
        x: (0, SM.s)(ee, He, be),
        y: (0, SM.s)(ie, ye, be)
      }
    }
    const rM = (0, be.memo)((function(ee) {
      let {
        value: ie,
        onChange: He
      } = ee;
      const ye = (0, be.useRef)(null),
        Me = (0, be.useRef)(null),
        [Ke, Ue] = (0, be.useState)(null),
        Fe = (0, be.useCallback)((() => {
          const ee = ye.current;
          if (!ee) return;
          const He = ee.getContext("2d");
          if (!He) return;
          const be = window.devicePixelRatio || 1;
          ee.width = jM * be, ee.height = jM * be, He.setTransform(be, 0, 0, be, 0, 0), He.clearRect(0, 0, jM, jM), He.fillStyle = "rgba(38, 52, 93, 0.85)", He.fillRect(0, 0, jM, jM), He.beginPath();
          const Me = hM(0, 0),
            Ue = hM(1, 1);
          He.moveTo(Me.cx, Me.cy), He.lineTo(Ue.cx, Ue.cy), He.strokeStyle = "rgba(164, 164, 164, 0.35)", He.setLineDash([3, 3]), He.stroke(), He.setLineDash([]);
          const [Fe, Je, oe, Re] = ie, ke = hM(Fe, Je), qe = hM(oe, Re);
          He.strokeStyle = "rgba(252, 211, 115, 0.55)", He.lineWidth = 1.5, He.beginPath(), He.moveTo(Me.cx, Me.cy), He.lineTo(ke.cx, ke.cy), He.moveTo(Ue.cx, Ue.cy), He.lineTo(qe.cx, qe.cy), He.stroke(), He.strokeStyle = "#fcd373", He.lineWidth = 2, He.beginPath();
          for (let ie = 0; ie <= 50; ie++) {
            const ee = GM(Fe, Je, oe, Re, ie / 50),
              ye = hM(ee.x, ee.y);
            0 === ie ? He.moveTo(ye.cx, ye.cy) : He.lineTo(ye.cx, ye.cy)
          }
          He.stroke();
          const fe = (ee, ie, ye) => {
            He.beginPath(), He.arc(ee, ie, ye ? 6 : 5, 0, 2 * Math.PI), He.fillStyle = ye ? "#ffb914" : "#fcd373", He.fill(), He.strokeStyle = "#1a1f2e", He.lineWidth = 1.5, He.stroke()
          };
          fe(ke.cx, ke.cy, "p1" === Ke), fe(qe.cx, qe.cy, "p2" === Ke)
        }), [Ke, ie]);
      (0, be.useEffect)((() => {
        Fe()
      }), [Fe]);
      const Je = (0, be.useCallback)(((ee, be) => {
          const Ke = ye.current,
            Ue = Me.current;
          if (!Ke || !Ue) return;
          const Fe = Ke.getBoundingClientRect(),
            {
              x: Je,
              y: oe
            } = NM(ee, be, Fe);
          He("p1" === Ue ? [Je, oe, ie[2], ie[3]] : [ie[0], ie[1], Je, oe])
        }), [He, ie]),
        Re = (0, be.useCallback)((ee => {
          const He = ye.current;
          if (!He) return;
          const be = He.getBoundingClientRect();
          let {
            x: Ke,
            y: Fe
          } = NM(ee.clientX, ee.clientY, be);
          Ke = GH.c.clamp(Ke, 0, 1), Fe = GH.c.clamp(Fe, 0, 1);
          const [oe, Re, ke, qe] = ie.map((ee => GH.c.clamp(ee, 0, 1))), fe = Math.hypot(Ke - oe, Fe - Re), Te = Math.hypot(Ke - ke, Fe - qe), pe = fe <= Te ? "p1" : "p2";
          ("p1" === pe ? fe : Te) > .12 || (Me.current = pe, Ue(pe), He.setPointerCapture(ee.pointerId), Je(ee.clientX, ee.clientY))
        }), [Je, ie]),
        ke = (0, be.useCallback)((ee => {
          Me.current && Je(ee.clientX, ee.clientY)
        }), [Je]),
        qe = (0, be.useCallback)((ee => {
          Me.current = null, Ue(null), ee.currentTarget.hasPointerCapture(ee.pointerId) && ee.currentTarget.releasePointerCapture(ee.pointerId)
        }), []);
      return (0, oe.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, oe.jsx)("canvas", {
          ref: ye,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: jM,
            height: jM
          },
          onPointerDown: Re,
          onPointerMove: ke,
          onPointerUp: qe,
          onPointerCancel: qe
        }), (0, oe.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: IM(ie)
        })]
      })
    }));
    var QM = He(1677),
      eK = He(1657);
    const iK = 12;

    function HK(ee) {
      return {
        left: ee.left + ee.width / 2,
        top: ee.top - 8
      }
    }

    function yK(ee, ie) {
      const [He, ye] = (0, be.useState)(null);
      return (0, be.useLayoutEffect)((() => {
        const He = ee.current;
        if (!He) return;
        const {
          width: be,
          height: Me
        } = He.getBoundingClientRect();
        ye(function(ee, ie, He) {
          const ye = window.innerWidth,
            be = window.innerHeight,
            Me = ie / 2;
          let Ke = ee.left + ee.width / 2;
          Ke = Math.max(iK + Me, Math.min(Ke, ye - iK - Me));
          const Ue = ee.top - 8 - iK,
            Fe = be - ee.bottom - 8 - iK,
            Je = Ue < He && Fe >= Ue;
          let oe;
          Je ? (oe = ee.bottom + 8, oe + He > be - iK && (oe = be - iK - He), oe = Math.max(iK, oe)) : (oe = ee.top - 8, oe - He < iK && (oe = iK + He));
          return {
            left: Ke,
            top: oe,
            placeBelow: Je
          }
        }(ie, be, Me))
      }), [ie, ee]), He
    }

    function bK(ee, ie, He) {
      (0, be.useEffect)((() => (0, eK.c)("pointerdown", (ye => {
        var be, Me;
        const Ke = ye.target;
        Ke instanceof Node && (null !== (be = ee.current) && void 0 !== be && be.contains(Ke) || null !== He && void 0 !== He && null !== (Me = He.current) && void 0 !== Me && Me.contains(Ke) || (0, QM.h)(Ke) || ie())
      }))), [He, ie, ee])
    }

    function MK(ee) {
      let {
        label: ie,
        value: He,
        onChange: ye
      } = ee;
      return (0, oe.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, oe.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: ie
        }), (0, oe.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((ee, ie) => (0, oe.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, oe.jsx)("span", {
              children: ee
            }), (0, oe.jsx)("input", {
              type: "number",
              step: "any",
              value: He[ie],
              onChange: ee => {
                const be = Number.parseFloat(ee.target.value);
                if (Number.isNaN(be)) return;
                const Me = [He[0], He[1], He[2]];
                Me[ie] = be, ye(Me)
              }
            })]
          }, ee)))
        })]
      })
    }
    const KK = (0, be.memo)((function(ee) {
        var ie, He, ye;
        let {
          keyframe: Me,
          anchor: Ue,
          hasOutgoingSegment: Fe,
          onClose: Je,
          onApply: Re,
          onDelete: ke,
          onUseCurrentCamera: qe
        } = ee;
        const fe = (0, be.useRef)(null),
          Te = yK(fe, Ue.rect),
          [pe, Xe] = (0, be.useState)((() => [Me.position[0], Me.position[1], Me.position[2]])),
          [ze, Be] = (0, be.useState)((() => [Me.direction[0], Me.direction[1], Me.direction[2]])),
          [Ee, ge] = (0, be.useState)((() => Me.easing));
        (0, be.useEffect)((() => {
          Xe([Me.position[0], Me.position[1], Me.position[2]]), Be([Me.direction[0], Me.direction[1], Me.direction[2]]), ge(Me.easing)
        }), [Me]), bK(fe, Je);
        const Oe = (0, be.useCallback)((() => {
            Re({
              YR: Me.YR,
              position: pe,
              direction: ze,
              easing: Ee
            }), Je()
          }), [ze, Ee, Me.YR, Re, Je, pe]),
          de = (0, be.useCallback)((() => {
            ke(Me.YR), Je()
          }), [Me.YR, ke, Je]),
          We = (0, be.useCallback)((() => {
            const ee = qe();
            ee && (Xe([ee.position[0], ee.position[1], ee.position[2]]), Be([ee.direction[0], ee.direction[1], ee.direction[2]]))
          }), [qe]),
          te = HK(Ue.rect);
        return (0, oe.jsxs)("div", {
          ref: fe,
          className: Ke()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (ie = null === Te || void 0 === Te ? void 0 : Te.placeBelow) && void 0 !== ie && ie,
            Positioned: null !== Te
          }),
          style: {
            left: `${null!==(He=null===Te||void 0===Te?void 0:Te.left)&&void 0!==He?He:te.left}px`,
            top: `${null!==(ye=null===Te||void 0===Te?void 0:Te.top)&&void 0!==ye?ye:te.top}px`
          },
          onPointerDown: ee => {
            ee.stopPropagation()
          },
          children: [(0, oe.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, oe.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, oe.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", Ue.YR]
            })]
          }), (0, oe.jsx)(MK, {
            label: "Position",
            value: pe,
            onChange: Xe
          }), (0, oe.jsx)(MK, {
            label: "Direction",
            value: ze,
            onChange: Be
          }), Fe && (0, oe.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, oe.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, oe.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: nM.map((ee => {
                const ie = (He = Ee, ye = ee.easing, He[0] === ye[0] && He[1] === ye[1] && He[2] === ye[2] && He[3] === ye[3]);
                var He, ye;
                return (0, oe.jsx)(mH.M, {
                  className: Ke()("ReplayKeyframePopoverPreset", {
                    Active: ie
                  }),
                  onClick: () => {
                    ge(ee.easing)
                  },
                  children: ee.label
                }, ee.label)
              }))
            }), (0, oe.jsx)(rM, {
              value: Ee,
              onChange: ge
            })]
          }), (0, oe.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, oe.jsx)(mH.c, {
              className: "ReplayViewerCompactButton",
              onClick: We,
              children: "Use current view"
            }), (0, oe.jsx)(mH.m, {
              className: "ReplayViewerCompactButton",
              onClick: Oe,
              children: "Apply"
            }), (0, oe.jsx)(mH.G, {
              className: "ReplayViewerCompactButton",
              onClick: de,
              children: "Delete"
            })]
          })]
        })
      })),
      UK = (0, be.memo)((function(ee) {
        var ie, He, ye;
        let {
          anchor: Me,
          hasPlaybackMark: Ue,
          onClose: Fe,
          onMark: Je,
          onZoom: Re,
          onCrop: ke,
          onDeleteKeyframes: qe,
          onClearMark: fe
        } = ee;
        const Te = (0, be.useRef)(null),
          pe = yK(Te, Me.rect),
          Xe = HK(Me.rect),
          ze = {
            startTick: Me.startTick,
            endTick: Me.endTick
          },
          Be = Me.endTick > Me.startTick;
        return bK(Te, Fe), (0, oe.jsx)("div", {
          ref: Te,
          className: Ke()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (ie = null === pe || void 0 === pe ? void 0 : pe.placeBelow) && void 0 !== ie && ie,
            Positioned: null !== pe
          }),
          style: {
            left: `${null!==(He=null===pe||void 0===pe?void 0:pe.left)&&void 0!==He?He:Xe.left}px`,
            top: `${null!==(ye=null===pe||void 0===pe?void 0:pe.top)&&void 0!==ye?ye:Xe.top}px`
          },
          onPointerDown: ee => {
            ee.stopPropagation()
          },
          children: (0, oe.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, oe.jsx)(mH.m, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Je(ze)
              },
              disabled: !Be,
              children: (0, oe.jsx)("span", {
                children: " Play range "
              })
            }), (0, oe.jsx)(mH.c, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Re(ze)
              },
              children: (0, oe.jsx)("span", {
                children: " Zoom "
              })
            }), (0, oe.jsx)(mH.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                ke(ze)
              },
              disabled: !Be,
              children: (0, oe.jsx)("span", {
                children: " Crop "
              })
            }), (0, oe.jsx)(mH.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                qe(ze)
              },
              children: (0, oe.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), Ue && (0, oe.jsx)(mH.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                fe()
              },
              children: (0, oe.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      FK = (0, be.memo)((function(ee) {
        var ie, He;
        let {
          maxTick: ye,
          displayTick: Me,
          lV: Ue,
          cameraKeyframes: Fe,
          playbackMark: Je,
          onSeek: Re,
          onPause: ke,
          onScrubTickChange: qe,
          onMoveCameraKeyframe: fe,
          onUpdateCameraKeyframe: Te,
          onDeleteCameraKeyframe: pe,
          onUseCurrentCamera: Xe,
          onMarkRange: ze,
          onCropRange: Be,
          onDeleteKeyframesInRange: Ee,
          onClearMark: ge,
          zoomLevel: Oe,
          onZoomLevelChange: de
        } = ee;
        const We = (0, be.useRef)(null),
          te = (0, be.useRef)(null),
          Ze = (0, be.useRef)(!1),
          we = (0, be.useRef)(!1),
          De = (0, be.useRef)(Oe),
          Pe = (0, be.useRef)(null),
          Ae = (0, be.useRef)(null),
          Ye = (0, be.useRef)(null),
          Ve = (0, be.useRef)(null),
          [ae, ce] = (0, be.useState)(null),
          [xe, Le] = (0, be.useState)(Me),
          [Ce, ve] = (0, be.useState)(null),
          [ue, me] = (0, be.useState)(null),
          [le, Se] = (0, be.useState)(null),
          [ne, je] = (0, be.useState)(null),
          se = (0, be.useMemo)((() => Fe.map((ee => ee.YR))), [Fe]),
          Ie = null !== ae && void 0 !== ae ? ae : Me,
          {
            viewStart: he,
            viewEnd: Ne
          } = (0, be.useMemo)((() => function(ee) {
            const ie = ee.maxTick + 1,
              He = Math.max(1, Math.ceil(ie / ee.zoomLevel)),
              ye = Math.floor(He / 2);
            let be = ee.centerTick - ye;
            return be = Math.max(0, Math.min(be, ee.maxTick - He + 1)), {
              viewStart: be,
              viewEnd: Math.min(ee.maxTick, be + He - 1)
            }
          }({
            maxTick: ye,
            zoomLevel: Oe,
            centerTick: xe
          })), [ye, Oe, xe]);
        (0, be.useEffect)((() => {
          if (null !== ae || null !== Ae.current || null !== Ye.current || null !== Ve.current) return;
          if (Ze.current) return void(Ze.current = !1);
          if (we.current) return void(we.current = !1);
          const ee = De.current !== Oe;
          De.current = Oe, ee && Le(Me)
        }), [Oe, Me, ae]);
        const Ge = (0, be.useCallback)((ee => {
            let ie = aM(ee, ye);
            return Je && (ie = Math.max(Je.inTick, Math.min(ie, Je.outTick))), ie
          }), [ye, Je]),
          re = (0, be.useCallback)(((ee, ie) => {
            const He = Ge(ee);
            Re(He), ie && Le(He)
          }), [Ge, Re]),
          Qe = (0, be.useCallback)(((ee, ie) => {
            const He = Ge(ee);
            ce(He), qe(He), re(He, ie)
          }), [Ge, re, qe]),
          ei = (0, be.useCallback)((() => {
            ce((ee => (null !== ee && Le(ee), null))), qe(null)
          }), [qe]),
          ii = (0, be.useCallback)((() => {
            Se(null), je(null)
          }), []),
          Hi = (0, be.useCallback)((ee => {
            const ie = We.current;
            if (!ie) return 0;
            return aM(xM(uM(ee, ie), he, Ne), ye)
          }), [ye, Ne, he]),
          yi = (0, be.useCallback)((ee => {
            const ie = te.current;
            if (!ie) return 0;
            return aM(xM(uM(ee, ie), 0, ye), ye)
          }), [ye]),
          bi = (0, be.useMemo)((() => {
            if (!Ce) return [...se];
            const ee = se.filter((ee => ee !== Ce.fromTick));
            return ee.push(Ce.previewTick), ee.sort(((ee, ie) => ee - ie)), ee
          }), [se, Ce]),
          Mi = (0, be.useMemo)((() => {
            var ee;
            return ue && null !== (ee = Fe.find((ee => ee.YR === ue.YR))) && void 0 !== ee ? ee : null
          }), [Fe, ue]),
          Ki = (0, be.useMemo)((() => !!Mi && Fe.some((ee => ee.YR > Mi.YR))), [Fe, Mi]);
        (0, be.useEffect)((() => {
          ue && !Mi && me(null)
        }), [ue, Mi]), (0, be.useEffect)((() => {
          if (!ne) return () => {};
          const ee = ee => {
            "Escape" === ee.key && ii()
          };
          return window.addEventListener("keydown", ee), () => {
            window.removeEventListener("keydown", ee)
          }
        }), [ii, ne]);
        const Ui = (0, be.useCallback)(((ee, ie) => {
            ii(), ke(), Re(ee, {
              ignorePlaybackMark: !0
            }), me({
              YR: ee,
              rect: ie.getBoundingClientRect()
            })
          }), [ii, ke, Re]),
          Fi = (0, be.useCallback)(((ee, ie) => He => {
            0 === He.button && (He.stopPropagation(), me(null), ii(), ke(), Pe.current = {
              fromTick: ee,
              startX: He.clientX,
              startY: He.clientY,
              didDrag: !1,
              track: ie
            }, ve({
              fromTick: ee,
              previewTick: ee,
              track: ie
            }), He.currentTarget.setPointerCapture(He.pointerId))
          }), [ii, ke]),
          Ji = (0, be.useCallback)((ee => {
            if (!Ce) return;
            ee.stopPropagation();
            const ie = Pe.current;
            if (ie && !ie.didDrag) {
              const He = ee.clientX - ie.startX,
                ye = ee.clientY - ie.startY;
              Math.hypot(He, ye) > 5 && (ie.didDrag = !0)
            }
            const He = "detail" === Ce.track ? Hi(ee.clientX) : yi(ee.clientX);
            He !== Ce.previewTick && ve({
              ...Ce,
              previewTick: He
            })
          }), [Ce, Hi, yi]),
          oi = (0, be.useCallback)((ee => {
            if (!Ce) return;
            ee.stopPropagation();
            const ie = Pe.current,
              He = "detail" === Ce.track ? Hi(ee.clientX) : yi(ee.clientX);
            ie && !ie.didDrag ? Ui(ie.fromTick, ee.currentTarget) : He !== Ce.fromTick && fe(Ce.fromTick, He), ve(null), Pe.current = null, ee.currentTarget.releasePointerCapture(ee.pointerId)
          }), [Ce, fe, Ui, Hi, yi]),
          Ri = (0, be.useCallback)((ee => {
            if (0 !== ee.button) return;
            me(null), ke();
            const ie = Hi(ee.clientX);
            Ae.current = {
              pointerId: ee.pointerId,
              startX: ee.clientX,
              startY: ee.clientY,
              startTick: ie,
              currentTick: ie,
              didSelect: !1
            }, Se(null), je(null), ee.currentTarget.setPointerCapture(ee.pointerId)
          }), [ke, Hi]),
          ki = (0, be.useCallback)((ee => {
            const ie = Ae.current;
            if (!ie || ie.pointerId !== ee.pointerId) return;
            const He = Hi(ee.clientX);
            if (ie.currentTick = He, !ie.didSelect) {
              const He = ee.clientX - ie.startX,
                ye = ee.clientY - ie.startY;
              if (Math.hypot(He, ye) <= 5) return;
              ie.didSelect = !0
            }
            const ye = Math.min(ie.startTick, He),
              be = Math.max(ie.startTick, He);
            Se({
              startTick: ye,
              endTick: be
            })
          }), [Hi]),
          qi = (0, be.useCallback)((ee => {
            const ie = Ae.current;
            if (!ie || ie.pointerId !== ee.pointerId) return;
            if (Ae.current = null, ee.currentTarget.releasePointerCapture(ee.pointerId), !ie.didSelect) return ii(), void re(ie.startTick, !0);
            const He = Hi(ee.clientX),
              ye = Math.min(ie.startTick, He),
              be = Math.max(ie.startTick, He),
              Me = {
                startTick: ye,
                endTick: be
              };
            Se(Me);
            const Ke = We.current;
            if (!Ke) return;
            const Ue = Ke.getBoundingClientRect(),
              Fe = cM(ye, he, Ne) / 100,
              Je = cM(be, he, Ne) / 100,
              oe = Ue.left + Fe * Ue.width,
              Re = Ue.left + Je * Ue.width;
            je({
              ...Me,
              rect: new DOMRect(oe, Ue.top, Math.max(Re - oe, 1), Ue.height)
            })
          }), [ii, re, Hi, Ne, he]),
          fi = (0, be.useCallback)((ee => ie => {
            if (0 !== ie.button) return;
            ie.stopPropagation(), me(null), ii(), ke(), Ye.current = {
              pointerId: ie.pointerId,
              track: ee
            }, ie.currentTarget.setPointerCapture(ie.pointerId);
            const He = "detail" === ee ? Hi(ie.clientX) : yi(ie.clientX);
            Qe(He, !1)
          }), [ii, ke, Qe, Hi, yi]),
          Ti = (0, be.useCallback)((ee => {
            const ie = Ye.current;
            if (!ie || ie.pointerId !== ee.pointerId) return;
            ee.stopPropagation();
            const He = "detail" === ie.track ? Hi(ee.clientX) : yi(ee.clientX);
            Qe(He, !1)
          }), [Qe, Hi, yi]),
          Xi = (0, be.useCallback)((ee => {
            const ie = Ye.current;
            ie && ie.pointerId === ee.pointerId && (ee.stopPropagation(), Ye.current = null, ee.currentTarget.releasePointerCapture(ee.pointerId), ei())
          }), [ei]),
          zi = (0, be.useCallback)((ee => {
            0 === ee.button && (ii(), ke(), Ve.current = {
              pointerId: ee.pointerId
            }, ee.currentTarget.setPointerCapture(ee.pointerId), Qe(yi(ee.clientX), !0))
          }), [ii, ke, Qe, yi]),
          Bi = (0, be.useCallback)((ee => {
            const ie = Ve.current;
            ie && ie.pointerId === ee.pointerId && Qe(yi(ee.clientX), !0)
          }), [Qe, yi]),
          Ei = (0, be.useCallback)((ee => {
            const ie = Ve.current;
            ie && ie.pointerId === ee.pointerId && (Ve.current = null, ee.currentTarget.releasePointerCapture(ee.pointerId), ei())
          }), [ei]),
          gi = (0, be.useCallback)((ee => {
            const ie = Math.max(1, ee.endTick - ee.startTick + 1),
              He = ye + 1,
              be = He / ie,
              Me = Math.max(1, Math.ceil(He / be)),
              Ke = ee.startTick + Math.floor((Me - 1) / 2);
            we.current = !0, De.current = be, Le(aM(Ke, ye)), de(be), ii()
          }), [ii, ye, de]),
          Oi = (0, be.useCallback)((ee => {
            ze(ee), ii()
          }), [ii, ze]),
          di = (0, be.useCallback)((ee => {
            Be(ee), ii()
          }), [ii, Be]),
          Wi = (0, be.useCallback)((ee => {
            Ee(ee), ii()
          }), [ii, Ee]),
          ti = (0, be.useCallback)((() => {
            ge(), ii()
          }), [ii, ge]);
        (0, be.useEffect)((() => {
          const ee = We.current;
          if (!ee) return () => {};
          const ie = ie => {
            ie.preventDefault();
            const He = aM(xM(uM(ie.clientX, ee), he, Ne), ye),
              be = ie.deltaY < 0 ? "in" : "out",
              Me = vM(Oe, be);
            Me !== Oe && (Ze.current = !0, Le(He), de(Me))
          };
          return ee.addEventListener("wheel", ie, {
            passive: !1
          }), () => {
            ee.removeEventListener("wheel", ie)
          }
        }), [ye, de, Ne, he, Oe]);
        const Zi = cM(Ie, he, Ne),
          wi = mM(Ie, ye),
          Di = mM(he, ye),
          Pi = ye > 0 ? mM(Ne, ye) : 100,
          Ai = null !== Je,
          Yi = null !== (ie = null === Je || void 0 === Je ? void 0 : Je.inTick) && void 0 !== ie ? ie : 0,
          Vi = null !== (He = null === Je || void 0 === Je ? void 0 : Je.outTick) && void 0 !== He ? He : ye,
          ai = mM(Yi, ye),
          ci = Math.max(mM(Vi, ye) - ai, 0),
          xi = cM(Math.max(Yi, he), he, Ne),
          Li = cM(Math.min(Vi, Ne), he, Ne),
          Ci = Math.max(Li - xi, 0),
          vi = Ai && Vi >= he && Yi <= Ne,
          ui = cM(Yi, he, Ne),
          mi = cM(Vi, he, Ne),
          li = Ai && Yi >= he && Yi <= Ne,
          Si = Ai && Vi >= he && Vi <= Ne,
          ni = mM(Yi, ye),
          ji = mM(Vi, ye),
          si = null !== le && void 0 !== le ? le : ne ? {
            startTick: ne.startTick,
            endTick: ne.endTick
          } : null,
          Ii = si ? cM(Math.max(si.startTick, he), he, Ne) : 0,
          Ni = si ? cM(Math.min(si.endTick, Ne), he, Ne) : 0,
          Gi = Math.max(Ni - Ii, 0),
          ri = null !== si && si.endTick >= he && si.startTick <= Ne,
          Qi = (0, be.useMemo)((() => lM(0, ye, Ue)), [ye, Ue]),
          eH = (0, be.useMemo)((() => lM(he, Ne, Ue)), [he, Ne, Ue]),
          iH = (0, be.useMemo)((() => bi.filter((ee => ee >= he && ee <= Ne))), [bi, Ne, he]),
          HH = (0, be.useCallback)(((ee, ie, He) => {
            const be = "detail" === ie ? cM(ee, he, Ne) : mM(ee, ye),
              Me = null !== Ce && He === Ce.fromTick,
              Ue = null !== ue && ue.YR === He;
            return (0, oe.jsx)("button", {
              type: "button",
              className: Ke()("ReplayTimelineCameraKeyframeMarker", "detail" === ie ? "Detail" : "Overview", {
                Dragging: Me,
                Selected: Ue
              }),
              style: {
                left: `${be}%`
              },
              onPointerDown: Fi(He, ie),
              onPointerMove: Ji,
              onPointerUp: oi,
              onPointerCancel: oi,
              "aria-label": `Camera keyframe at tick ${He}`
            }, `cam-${ie}-${He}`)
          }), [Fi, ue, oi, Ce, ye, Ji, Ne, he]),
          yH = (0, be.useCallback)((ee => Ce && ee === Ce.previewTick ? Ce.fromTick : ee), [Ce]);
        return ye <= 0 ? null : (0, oe.jsxs)("div", {
          className: "ReplayTimeline",
          children: [ue && Mi && (0, MM.createPortal)((0, oe.jsx)(KK, {
            keyframe: Mi,
            anchor: ue,
            hasOutgoingSegment: Ki,
            onClose: () => {
              me(null)
            },
            onApply: Te,
            onDelete: pe,
            onUseCurrentCamera: Xe
          }), document.body), ne && (0, MM.createPortal)((0, oe.jsx)(UK, {
            anchor: ne,
            hasPlaybackMark: Ai,
            onClose: ii,
            onMark: Oi,
            onZoom: gi,
            onCrop: di,
            onDeleteKeyframes: Wi,
            onClearMark: ti
          }), document.body), (0, oe.jsxs)("div", {
            className: Ke()("ReplayTimelineOverviewSection", {
              Hidden: Oe <= 1
            }),
            children: [(0, oe.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, oe.jsxs)("div", {
              ref: te,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: zi,
              onPointerMove: Bi,
              onPointerUp: Ei,
              onPointerCancel: Ei,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": ye,
              "aria-valuenow": Ie,
              tabIndex: 0,
              children: [Qi.map((ee => {
                const ie = mM(ee, ye);
                return (0, oe.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${ie}%`
                  }
                }, ee)
              })), Ai && (0, oe.jsxs)(oe.Fragment, {
                children: [(0, oe.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${ai}%`,
                    width: `${ci}%`
                  }
                }), (0, oe.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${ni}%`
                  },
                  "aria-hidden": !0
                }), (0, oe.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${ji}%`
                  },
                  "aria-hidden": !0
                })]
              }), bi.map((ee => HH(ee, "overview", yH(ee)))), (0, oe.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${Di}%`,
                  width: `${Math.max(Pi-Di,.5)}%`
                }
              }), (0, oe.jsx)("button", {
                type: "button",
                className: Ke()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== ae
                }),
                style: {
                  left: `${wi}%`
                },
                onPointerDown: fi("overview"),
                onPointerMove: Ti,
                onPointerUp: Xi,
                onPointerCancel: Xi,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, oe.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, oe.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, oe.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, oe.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [LM(he, Ue), " \u2013 ", LM(Ne, Ue), Oe > 1 && (0, oe.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: CM(Oe)
                })]
              })]
            }), (0, oe.jsxs)("div", {
              ref: We,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: Ri,
              onPointerMove: ki,
              onPointerUp: qi,
              onPointerCancel: qi,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": he,
              "aria-valuemax": Ne,
              "aria-valuenow": Ie,
              tabIndex: 0,
              children: [eH.map((ee => {
                const ie = cM(ee, he, Ne);
                return (0, oe.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${ie}%`
                  }
                }, ee)
              })), vi && (0, oe.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${xi}%`,
                  width: `${Ci}%`
                }
              }), li && (0, oe.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${ui}%`
                },
                "aria-label": `Play range start at tick ${Yi}`
              }), Si && (0, oe.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${mi}%`
                },
                "aria-label": `Play range end at tick ${Vi}`
              }), ri && si && (0, oe.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${Ii}%`,
                  width: `${Gi}%`
                }
              }), iH.map((ee => HH(ee, "detail", yH(ee)))), (0, oe.jsx)("button", {
                type: "button",
                className: Ke()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== ae
                }),
                style: {
                  left: `${Zi}%`
                },
                onPointerDown: fi("detail"),
                onPointerMove: Ti,
                onPointerUp: Xi,
                onPointerCancel: Xi,
                "aria-label": "Scrub playhead"
              })]
            }), (0, oe.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, oe.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      JK = (0, be.memo)((function(ee) {
        let {
          enabled: ie
        } = ee;
        const He = (0, be.useRef)(!1),
          ye = (0, be.useRef)(null),
          [Me, Ue] = (0, be.useState)(!1),
          Fe = (0, be.useCallback)((ee => {
            ie && 0 === ee.button && (He.current = !0, Ue(!0), ye.current = {
              x: ee.clientX,
              y: ee.clientY
            }, ee.currentTarget.setPointerCapture(ee.pointerId))
          }), [ie]),
          Je = (0, be.useCallback)((ee => {
            if (!ie || !He.current || !ye.current) return;
            const be = ee.clientX - ye.current.x,
              Me = ee.clientY - ye.current.y;
            ye.current = {
              x: ee.clientX,
              y: ee.clientY
            }, fe.gameBridge.send("dragReplayCamera", {
              dx: be,
              dy: Me
            })
          }), [ie]),
          Re = (0, be.useCallback)((ee => {
            He.current && (He.current = !1, Ue(!1), ye.current = null, ee.currentTarget.releasePointerCapture(ee.pointerId))
          }), []);
        return ie ? (0, oe.jsx)("div", {
          className: Ke()("ReplayViewerCameraDragSurface", {
            Dragging: Me
          }),
          onPointerDown: Fe,
          onPointerMove: Je,
          onPointerUp: Re,
          onPointerCancel: Re,
          "aria-hidden": !0
        }) : null
      }));
    var oK = He(37825),
      RK = He(37828);
    const kK = (0, be.memo)((function(ee) {
        var ie, He, ye;
        let {
          anchorRect: Me,
          anchorRef: Ue,
          onClose: Je
        } = ee;
        const Re = (0, be.useRef)(null),
          ke = yK(Re, Me),
          [qe, fe] = (0, be.useState)(RK.e),
          Te = (0, be.useMemo)((() => Object.values(qe).every((ee => ee))), [qe]);
        (0, Fe.f)("replayViewer|uiVisibilityChanged", (() => {
          fe((0, RK.e)())
        })), bK(Re, Je, Ue);
        const pe = (0, be.useCallback)(((ee, ie) => {
            (0, RK.i)(ee, ie), fe((0, RK.e)())
          }), []),
          Xe = (0, be.useCallback)((ee => {
            for (const {
                group: ie
              }
              of oK.d)(0, RK.i)(ie, ee);
            fe((0, RK.e)())
          }), []),
          ze = HK(Me);
        return (0, MM.createPortal)((0, oe.jsxs)("div", {
          ref: Re,
          className: Ke()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (ie = null === ke || void 0 === ke ? void 0 : ke.placeBelow) && void 0 !== ie && ie,
            Positioned: null !== ke
          }),
          style: {
            left: `${null!==(He=null===ke||void 0===ke?void 0:ke.left)&&void 0!==He?He:ze.left}px`,
            top: `${null!==(ye=null===ke||void 0===ke?void 0:ke.top)&&void 0!==ye?ye:ze.top}px`
          },
          onPointerDown: ee => {
            ee.stopPropagation()
          },
          children: [(0, oe.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, oe.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, oe.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, oe.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, oe.jsx)("input", {
                type: "checkbox",
                checked: Te,
                onChange: ee => {
                  Xe(ee.target.checked)
                }
              }), (0, oe.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), oK.d.map((ee => {
              let {
                group: ie,
                label: He
              } = ee;
              return (0, oe.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, oe.jsx)("input", {
                  type: "checkbox",
                  checked: qe[ie],
                  onChange: ee => {
                    pe(ie, ee.target.checked)
                  }
                }), (0, oe.jsx)("span", {
                  children: He
                })]
              }, ie)
            }))]
          })]
        }), document.body)
      })),
      qK = (0, be.memo)((function(ee) {
        let {
          disabled: ie
        } = ee;
        const He = (0, be.useRef)(null),
          [ye, Me] = (0, be.useState)(!1),
          [Ke, Ue] = (0, be.useState)(null),
          Fe = (0, be.useCallback)((() => {
            He.current && (Ue(He.current.getBoundingClientRect()), Me((ee => !ee)))
          }), []),
          Je = (0, be.useCallback)((() => {
            Me(!1)
          }), []);
        return (0, oe.jsxs)(oe.Fragment, {
          children: [(0, oe.jsx)("div", {
            ref: He,
            children: (0, oe.jsx)(mH.c, {
              className: "ReplayViewerActionButton",
              onClick: Fe,
              disabled: ie,
              children: (0, oe.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), ye && Ke && (0, oe.jsx)(kK, {
            anchorRect: Ke,
            anchorRef: He,
            onClose: Je
          })]
        })
      })),
      fK = ["freeCamUp", "freeCamDown"];

    function TK(ee, ie) {
      fe.gameBridge.send("holdReplayFreecamVertical", {
        action: ee,
        lJ: ie
      })
    }
    const pK = (0, be.memo)((function() {
      (0, be.useEffect)((() => () => {
        ! function() {
          fe.gameBridge.send("moveReplayFreecam", null);
          for (const ee of fK) TK(ee, !1)
        }()
      }), []);
      const ee = (0, be.useCallback)((ee => {
          fe.gameBridge.send("moveReplayFreecam", ee)
        }), []),
        ie = (0, be.useCallback)((ee => ({
          onTouchStart: ie => {
            ie.preventDefault(), ie.stopPropagation(), TK(ee, !0)
          },
          onTouchEnd: ie => {
            ie.preventDefault(), ie.stopPropagation(), TK(ee, !1)
          },
          onTouchCancel: ie => {
            ie.preventDefault(), ie.stopPropagation(), TK(ee, !1)
          }
        })), []);
      return (0, oe.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, oe.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, oe.jsx)(Bi, {
            onMove: ee,
            mode: "pinned"
          })
        }), (0, oe.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, oe.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...ie("freeCamUp"),
            children: (0, oe.jsx)(de.e, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, oe.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...ie("freeCamDown"),
            children: (0, oe.jsx)(de.e, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var XK = He(3447);
    const zK = [],
      BK = "Failed to load recording";

    function EK(ee, ie, He) {
      var ye;
      console.error(ie), bH.NotificationProvider.showAlertPopup({
        title: ee,
        subtitle: null !== (ye = (0, wM.k)(ie)) && void 0 !== ye ? ye : He,
        confirmText: "OK"
      })
    }

    function gK(ee) {
      EK(BK, ee, wM.d.cantOpen.text)
    }
    const OK = (0, be.memo)((function() {
        const ee = (0, xe.i)(),
          {
            gameState: ie
          } = (0, ae.m)(["gameState"]),
          He = "inGame" === ie;
        return (0, ce.e)("replayViewerRequested", (ee => {
          (0, xe.g)("toggle" === ee ? !(0, xe.d)() : "open" === ee)
        })), (0, be.useEffect)((() => {
          He && (0, AM.g)().then((ee => {
            if (null !== ee) return (0, xe.g)(!0), (0, dM.b)().open(ee.bytes, ee.source)
          })).catch((ee => {
            (0, xe.g)(!0), gK(ee)
          }))
        }), [He]), ee ? (0, oe.jsx)(dK, {}) : null
      })),
      dK = (0, be.memo)((function() {
        var ee, ie, He, ye, Me, Ue, Fe, Je, Re, ke, qe, Te;
        const pe = be.useRef(null),
          [Xe, ze] = (0, be.useState)(1),
          [Be, Ee] = (0, be.useState)(null),
          [Oe, We] = (0, be.useState)(!1),
          {
            isTouchScreen: te
          } = (0, ae.m)(["isTouchScreen"]),
          Ze = (0, ce.k)("replay"),
          we = (0, ce.k)("replayEdits"),
          De = null !== Ze,
          Pe = null !== (ee = null === Ze || void 0 === Ze ? void 0 : Ze.YR) && void 0 !== ee ? ee : 0,
          Ae = null !== (ie = null === Ze || void 0 === Ze ? void 0 : Ze.totalTicks) && void 0 !== ie ? ie : 0,
          Ye = Math.max(0, Ae - 1),
          Ve = null !== (He = null === Ze || void 0 === Ze ? void 0 : Ze.playing) && void 0 !== He && He,
          Le = null !== (ye = null === Ze || void 0 === Ze ? void 0 : Ze.speed) && void 0 !== ye ? ye : 1,
          Ce = null !== (Me = null === Ze || void 0 === Ze ? void 0 : Ze.lV) && void 0 !== Me ? Me : 20,
          ve = null !== Be && void 0 !== Be ? Be : Pe,
          ue = null !== (Ue = null === Ze || void 0 === Ze ? void 0 : Ze.freecam) && void 0 !== Ue && Ue,
          me = null !== (Fe = null === Ze || void 0 === Ze ? void 0 : Ze.cameraMode) && void 0 !== Fe ? Fe : "recording",
          le = null !== (Je = null === we || void 0 === we ? void 0 : we.cameraKeyframes) && void 0 !== Je ? Je : zK,
          Se = null !== (Re = null === we || void 0 === we ? void 0 : we.playbackMark) && void 0 !== Re ? Re : null,
          ne = null !== (ke = null === we || void 0 === we ? void 0 : we.fileName) && void 0 !== ke ? ke : null,
          je = null !== (qe = null === we || void 0 === we ? void 0 : we.unsavedChanges) && void 0 !== qe && qe,
          se = null !== (Te = null === we || void 0 === we ? void 0 : we.suggestSaveAs) && void 0 !== Te && Te,
          Ie = (0, ce.k)("replayVideoExporting"),
          he = !Ie && De && ("freecam" === me || ("recording" === me || "keyframe" === me) && !Ve),
          Ne = te && De && "freecam" === me && !Ie && !Oe;
        (0, YM.e)(!0, !0, "ReplayViewerOverlay"), (0, be.useEffect)((() => {
          fe.gameBridge.send("syncReplayCameraMode", null)
        }), [ue]);
        const Ge = (0, be.useCallback)(((ee, ie) => {
            fe.gameBridge.send("seekReplay", {
              YR: ee,
              ignorePlaybackMark: null === ie || void 0 === ie ? void 0 : ie.ignorePlaybackMark
            })
          }), []),
          re = (0, be.useCallback)((() => {
            fe.gameBridge.send("setReplayPlaying", !1)
          }), []),
          Qe = (0, be.useCallback)(((ee, ie) => {
            fe.gameBridge.send("moveReplayCameraKeyframe", {
              from: ee,
              to: ie
            })
          }), []),
          ei = (0, be.useCallback)((ee => {
            fe.gameBridge.send("setReplayCameraKeyframe", ee)
          }), []),
          ii = (0, be.useCallback)((ee => {
            fe.gameBridge.send("deleteReplayCameraKeyframes", {
              start: ee,
              end: ee
            })
          }), []),
          Hi = (0, be.useCallback)((ee => {
            fe.gameBridge.send("deleteReplayCameraKeyframes", {
              start: ee.startTick,
              end: ee.endTick
            })
          }), []),
          yi = (0, be.useCallback)((() => fe.gameBridge.lookup("replayCamera", null)), []),
          bi = (0, be.useCallback)((ee => {
            Ee(ee)
          }), []),
          Mi = (0, be.useCallback)((ee => {
            fe.gameBridge.send("setReplayPlaybackMark", {
              inTick: ee.startTick,
              outTick: ee.endTick
            })
          }), []),
          Ki = (0, be.useCallback)((() => {
            fe.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          Ui = (0, be.useCallback)((ee => {
            const ie = fe.gameBridge.latest("replay");
            if (null === ie || ee.endTick <= ee.startTick) return;
            const He = ee.startTick,
              ye = ee.endTick;
            bH.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((ee => {
              var be;
              if (!0 !== ee) return;
              if ((null === (be = fe.gameBridge.latest("replay")) || void 0 === be ? void 0 : be.id) !== ie.id) return;
              fe.gameBridge.send("cropReplay", {
                start: He,
                end: ye
              }) && (Ee(null), ze(1))
            }))
          }), []),
          Fi = (0, be.useCallback)(((ee, ie) => {
            ze(1), Ee(null), (0, dM.b)().open(ee, ie).catch(gK)
          }), []),
          Ji = (0, be.useCallback)(((ee, ie) => {
            null !== fe.gameBridge.latest("connectedGame").websocketUrl ? bH.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((He => {
              !0 === He && Fi(ee, ie)
            })) : Fi(ee, ie)
          }), [Fi]),
          oi = (0, be.useCallback)((ee => {
            var ie;
            const He = null === (ie = ee.target.files) || void 0 === ie ? void 0 : ie[0];
            if (ee.target.value = "", !He) return;
            const ye = new FileReader;
            ye.onload = () => {
              Ji(new Uint8Array(ye.result), {
                fileName: He.name
              })
            }, ye.onerror = () => {
              gK(ye.error)
            }, ye.readAsArrayBuffer(He)
          }), [Ji]),
          Ri = (0, be.useCallback)((() => {
            const ee = () => {
              null !== pe.current && (0, XK.f)(pe.current)
            };
            (0, ZM.l)() ? (0, ZM.g)().then((ee => {
              ee && Ji(ee.bytes, {
                fileHandle: ee.handle
              })
            })).catch((ie => {
              console.error(ie), bH.NotificationProvider.showPromptPopup({
                title: BK,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((ie => {
                !0 === ie && ee()
              }))
            })): ee()
          }), [Ji]),
          ki = (0, be.useCallback)((async function() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let ie;
            try {
              ie = await PM(ee, {
                files: (0, dM.b)(),
                pickerSupported: ZM.l,
                chooseFile: ZM.d,
                write: ZM.o,
                download: tM.f,
                onFallback: console.error
              })
            } catch (He) {
              return void EK("Failed to save recording", He)
            }
            "written" !== ie && "downloaded" !== ie || (() => {
              const ee = bH.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                ee.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          qi = (0, be.useCallback)((ee => {
            fe.gameBridge.send("replayAction", ee)
          }), []),
          fi = (0, be.useCallback)((ee => {
            ze((ie => vM(ie, ee)))
          }), []),
          Ti = (0, be.useCallback)((ee => {
            if (!fe.gameBridge.latest("replayVideoExporting")) switch (ee) {
              case "replayLoad":
                Ri();
                break;
              case "replaySave":
                ki(!1);
                break;
              case "replaySaveAs":
                ki(!0);
                break;
              case "replayTimelineZoomIn":
                fi("in");
                break;
              case "replayTimelineZoomOut":
                fi("out")
            }
          }), [Ri, ki, fi]);
        (0, ce.e)("replayUiActionRequested", Ti);
        const Xi = (0, be.useCallback)((ee => {
            fe.gameBridge.send("setReplayCameraMode", ee)
          }), []),
          zi = De ? mH.c : mH.m,
          Bi = je && !se ? mH.m : mH.c,
          Ei = je && se ? mH.m : mH.c;
        return (0, oe.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, oe.jsx)(JK, {
            enabled: he
          }), Ne && (0, oe.jsx)(pK, {}), (0, oe.jsx)("input", {
            ref: pe,
            type: "file",
            accept: tM.b,
            className: "ReplayViewerFileInput",
            onChange: oi
          }), (0, oe.jsxs)("div", {
            className: Ke()("ReplayViewerBar", {
              Collapsed: Oe
            }),
            children: [(0, oe.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                Oe ? We(!1) : De ? We(!0) : (0, xe.c)()
              },
              "aria-expanded": !Oe,
              "aria-label": Oe ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, oe.jsx)(de.e, {
                name: Oe ? "angle-up" : "angle-down"
              })
            }), !Oe && (0, oe.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [De && Ae > 0 && (0, oe.jsx)(FK, {
                maxTick: Ye,
                displayTick: ve,
                lV: Ce,
                cameraKeyframes: le,
                playbackMark: Se,
                onSeek: Ge,
                onPause: re,
                onScrubTickChange: bi,
                onMoveCameraKeyframe: Qe,
                onUpdateCameraKeyframe: ei,
                onDeleteCameraKeyframe: ii,
                onUseCurrentCamera: yi,
                onMarkRange: Mi,
                onCropRange: Ui,
                onDeleteKeyframesInRange: Hi,
                onClearMark: Ki,
                zoomLevel: Xe,
                onZoomLevelChange: ze
              }, Ye), (0, oe.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, oe.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, oe.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [De && (0, oe.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== ne && void 0 !== ne ? ne : "Unsaved recording", je ? " *" : ""]
                    }), (0, oe.jsxs)(zi, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Ti("replayLoad")
                      },
                      children: [(0, oe.jsx)(Qb.e, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, oe.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, oe.jsxs)(mH.c, {
                      className: "ReplayViewerActionButton",
                      onClick: xe.c,
                      children: [(0, oe.jsx)(Qb.e, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, oe.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, oe.jsxs)(Bi, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Ti("replaySave")
                      },
                      disabled: !De,
                      children: [(0, oe.jsx)(Qb.e, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, oe.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, oe.jsxs)(mH.c, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        fe.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !De,
                      children: [(0, oe.jsx)(Qb.e, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, oe.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, oe.jsxs)(Ei, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Ti("replaySaveAs")
                      },
                      disabled: !De,
                      children: [(0, oe.jsx)(Qb.e, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, oe.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, oe.jsxs)(mH.c, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        fe.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !De || 0 === Ae || Ie,
                      children: [(0, oe.jsx)(Qb.e, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, oe.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, oe.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, oe.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, oe.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, oe.jsx)(Qb.e, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, oe.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, oe.jsx)(ge.g, {
                        tooltipInner: (0, oe.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, oe.jsxs)(mH.M, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === me,
                          onClick: () => {
                            Xi("recording")
                          },
                          disabled: !De,
                          children: ["Recorded ", (0, oe.jsx)(de.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, oe.jsx)(ge.g, {
                        tooltipInner: (0, oe.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, oe.jsxs)(mH.M, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === me,
                          onClick: () => {
                            Xi("freecam")
                          },
                          disabled: !De,
                          children: ["Free ", (0, oe.jsx)(de.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, oe.jsx)(ge.g, {
                        tooltipInner: (0, oe.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, oe.jsxs)(mH.M, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === me,
                          onClick: () => {
                            Xi("keyframe")
                          },
                          disabled: !De,
                          children: ["Preview ", (0, oe.jsx)(de.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, oe.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, oe.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, oe.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, oe.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: LM(ve, Ce)
                      }), (0, oe.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, oe.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: LM(Ye, Ce)
                      })]
                    }), (0, oe.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", ve, " / ", Ye]
                    })]
                  }), (0, oe.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, oe.jsxs)(mH.c, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        qi("replaySkipBack")
                      },
                      disabled: !De,
                      children: [(0, oe.jsxs)("span", {
                        children: [" ", (0, oe.jsx)(de.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, oe.jsx)(Qb.e, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, oe.jsxs)(mH.m, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        fe.gameBridge.send("setReplayPlaying", !Ve)
                      },
                      disabled: !De,
                      children: [(0, oe.jsxs)("span", {
                        children: [" ", Ve ? (0, oe.jsx)(de.e, {
                          name: "pause"
                        }) : (0, oe.jsx)(de.e, {
                          name: "play"
                        }), " "]
                      }), (0, oe.jsx)(Qb.e, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, oe.jsxs)(mH.c, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        qi("replaySkipForward")
                      },
                      disabled: !De,
                      children: [(0, oe.jsxs)("span", {
                        children: [" ", (0, oe.jsx)(de.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, oe.jsx)(Qb.e, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, oe.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, oe.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, oe.jsxs)(mH.m, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        qi("replayRecordKeyframe")
                      },
                      disabled: !De,
                      children: [(0, oe.jsx)(Qb.e, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, oe.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, oe.jsx)(qK, {
                      disabled: !De
                    }), Se && (0, oe.jsx)(mH.M, {
                      className: "ReplayViewerActionButton",
                      onClick: Ki,
                      disabled: !De,
                      children: (0, oe.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, oe.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, oe.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, oe.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, oe.jsx)(mH.c, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          qi("replaySpeedDown")
                        },
                        disabled: !De || (0, WM.f)(Le),
                        children: (0, oe.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, oe.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [Le, "\xd7"]
                      }), (0, oe.jsx)(mH.c, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          qi("replaySpeedUp")
                        },
                        disabled: !De || (0, WM.c)(Le),
                        children: (0, oe.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, oe.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, oe.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, oe.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, oe.jsxs)(mH.c, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Ti("replayTimelineZoomOut")
                        },
                        disabled: !De || Xe <= VM[0],
                        children: [(0, oe.jsx)("span", {
                          children: " \u2212 "
                        }), (0, oe.jsx)(Qb.e, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, oe.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: CM(Xe)
                      }), (0, oe.jsxs)(mH.c, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Ti("replayTimelineZoomIn")
                        },
                        disabled: !De || Xe >= VM[VM.length - 1],
                        children: [(0, oe.jsx)("span", {
                          children: " + "
                        }), (0, oe.jsx)(Qb.e, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, oe.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !De && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var WK = He(1305);

    function tK() {
      const [, ee] = (0, be.useState)(0);
      return (0, Fe.f)("replayViewer|uiVisibilityChanged", (() => {
          ee((ee => ee + 1))
        })), (0, Fe.f)("replayViewer|replayLoaded", (() => {
          ee((ee => ee + 1))
        })),
        function() {
          if (!(0, WK.g)()) return {};
          const ee = {
              [oK.b]: "true"
            },
            ie = (0, RK.e)();
          for (const {
              group: He,
              dataAttr: ye
            }
            of oK.d) ye && !ie[He] && (ee[ye] = "true");
          return ee
        }()
    }
    var ZK = He(34863),
      wK = He(2112),
      DK = He(9476),
      PK = He(9461),
      AK = He(2123);
    const YK = (0, be.memo)((function() {
      var ee, ie, He;
      const ye = (0, Ee.i)("customButtons");
      (0, be.useEffect)((() => ye ? (fe.gameBridge.send("bindCustomButtonKeys", ye.filter(DK.g).map((ee => {
        let {
          id: ie,
          keycode: He
        } = ee;
        return {
          id: ie,
          keycode: He
        }
      }))), () => {
        fe.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [ye]);
      const Me = null !== (ee = null === ye || void 0 === ye ? void 0 : ye.filter(DK.g)) && void 0 !== ee ? ee : [],
        Ke = (0, PK.f)(),
        Ue = null !== (ie = null === (He = (0, AK.e)()) || void 0 === He ? void 0 : He.hideButtonHints) && void 0 !== ie && ie,
        Fe = "customButton" !== (null === Ke || void 0 === Ke ? void 0 : Ke.kind) || Ue ? null : Ke.id,
        Je = Me.length > 0,
        Re = (0, be.useRef)(null);
      return (0, be.useLayoutEffect)((() => {
        if (!Je) return () => {};
        const ee = Re.current,
          ie = ee.closest(".InGameUi"),
          He = () => {
            ie.style.setProperty("--custom-buttons-top", `${ee.offsetTop}px`)
          };
        He();
        const ye = new ResizeObserver(He);
        return ye.observe(ee), ye.observe(ee.parentElement), () => {
          ye.disconnect(), ie.style.removeProperty("--custom-buttons-top")
        }
      }), [Je]), (0, oe.jsx)("div", {
        ref: Re,
        className: "" + ((0, yH.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: Me.map((ee => {
          var ie, He;
          return (0, oe.jsx)(VK, {
            button: ee,
            padGlyph: ee.id === Fe && null !== (ie = null === (He = (0, we.f)()) || void 0 === He ? void 0 : He.getBoundButton("actionButton")) && void 0 !== ie ? ie : null
          }, ee.id)
        }))
      })
    }));

    function VK(ee) {
      let {
        button: ie,
        padGlyph: He
      } = ee;
      const ye = (0, be.useRef)(null),
        Me = () => {
          null !== ye.current && (ye.current = null, fe.gameBridge.send("pressCustomButton", {
            id: ie.id,
            down: !1
          }))
        };
      (0, be.useEffect)((() => Me), []);
      const Ke = Ci(Me, {
          pressesOnPointerDown: !0
        }),
        Ue = ee => {
          ye.current === ee.pointerId && Me()
        };
      return (0, oe.jsxs)("div", {
        className: "CustomIcon",
        ...Ke,
        onLostPointerCapture: Ue,
        children: [(0, oe.jsx)(wK.c, {
          icon: ie.icon,
          keyboardHint: (0, DK.c)(ie.keycode),
          padGlyph: He,
          onPointerDown: ee => {
            try {
              ee.currentTarget.setPointerCapture(ee.pointerId)
            } catch {
              return
            }
            null === ye.current && fe.gameBridge.send("pressCustomButton", {
              id: ie.id,
              down: !0
            }), ye.current = ee.pointerId
          },
          onPointerUp: Ue,
          onPointerCancel: Ue,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), ie.description && (0, oe.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: ie.description
        })]
      })
    }
    var aK = He(2509),
      cK = He(242);
    const xK = {
      frame: ee => {
        const ie = requestAnimationFrame((() => {
          ee()
        }));
        return () => {
          cancelAnimationFrame(ie)
        }
      },
      afterFrame: ee => {
        const ie = setTimeout(ee, 0);
        return () => {
          clearTimeout(ie)
        }
      }
    };
    class LK {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cK.e,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xK,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = ee, this.frames = ie, this.onHiddenMount = He, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (ee(), () => {}) : (ie ? this.waiting.unshift(ee) : this.waiting.push(ee), this.schedule(), () => {
          const ie = this.waiting.indexOf(ee);
          ie >= 0 && (this.waiting.splice(ie, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((ee => {
          for (this.cancelIdle = null; this.waiting.length > 0 && ee.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const ee = this.waiting.shift(),
          ie = !this.shown,
          He = performance.now();
        try {
          ee()
        } finally {
          ie && this.onHiddenMount(performance.now() - He), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var ee, ie, He;
        null === (ee = this.cancelIdle) || void 0 === ee || ee.call(this), this.cancelIdle = null, null === (ie = this.cancelFrame) || void 0 === ie || ie.call(this), this.cancelFrame = null, null === (He = this.cancelAfterFrame) || void 0 === He || He.call(this), this.cancelAfterFrame = null
      }
    }
    const CK = (0, be.createContext)(null);

    function vK(ee) {
      let {
        children: ie,
        first: He = !1
      } = ee;
      const ye = (0, be.useContext)(CK),
        [Me, Ke] = (0, be.useState)(null === ye);
      return (0, be.useEffect)((() => {
        if (!Me && null !== ye) return ye.request((() => {
          Ke(!0)
        }), He)
      }), [He, Me, ye]), Me ? (0, be.createElement)(be.Fragment, null, ie) : null
    }
    const uK = (0, be.memo)((function(ee) {
        let {
          shown: ie
        } = ee;
        const [He] = (0, be.useState)((() => new pe.d(ie))), [Me] = (0, be.useState)((() => ie ? null : new LK(void 0, void 0, (ee => {
          ye.c.noteWorkDuringAdmissionWait(ee)
        }))));
        return (0, be.useLayoutEffect)((() => {
          ie && (null === Me || void 0 === Me || Me.show(), He.show())
        }), [ie, He, Me]), (0, oe.jsx)(pe.c.Provider, {
          value: He,
          children: (0, oe.jsx)(CK.Provider, {
            value: Me,
            children: (0, oe.jsx)(mK, {})
          })
        })
      })),
      mK = (0, be.memo)((function() {
        const {
          isUiHidden: ee,
          isUiHiddenByCamera: ie,
          worldPanelHud: He,
          isTouchScreen: ye
        } = (0, ae.m)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), Me = (0, Bb.d)(), Ue = tK(), Fe = (0, pe.f)(), Je = (0, be.useRef)(null), Re = (0, Ee.i)("showKillfeed");
        return function() {
            const ee = (0, pe.f)();
            (0, be.useEffect)((() => ee.whenShown(Xe)), [ee])
          }(),
          function() {
            const ee = (0, Ee.i)("inventoryColourOverride");
            (0, be.useEffect)((() => {
              if (!ee) return;
              const {
                panel: ie,
                slot: He,
                slotSelected: ye,
                slotUnavailable: be
              } = Pe(ee), Me = document.documentElement.style;
              return Me.setProperty("--InventoryPanelColour", ie), Me.setProperty("--InventorySlotColour", He), Me.setProperty("--InventorySlotSelectedColour", ye), Me.setProperty("--InventorySlotUnavailableColour", be), () => {
                Me.removeProperty("--InventoryPanelColour"), Me.removeProperty("--InventorySlotColour"), Me.removeProperty("--InventorySlotSelectedColour"), Me.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [ee])
          }(), (0, be.useLayoutEffect)((() => Fe.whenShown((() => {
            var ee;
            null === (ee = Je.current) || void 0 === ee || ee.classList.remove("PreMounted")
          }))), [Fe]), (0, oe.jsxs)(oe.Fragment, {
            children: [(0, oe.jsxs)("div", {
              ref: Je,
              className: Ke()("InGameUi", {
                PreMounted: !Fe.shown,
                Hidden: ee,
                HiddenByCamera: ie,
                HiddenByWorldPanel: null !== He,
                WorldPanelTouchControl: "touchControls" === He
              }),
              ...Ue,
              children: [(0, oe.jsxs)(vK, {
                children: [(0, oe.jsx)(fy.b, {}), (0, oe.jsx)(By, {})]
              }), (0, oe.jsx)(pe.e, {
                children: (0, oe.jsx)(Ey, {})
              }), (0, oe.jsxs)(vK, {
                children: [(0, oe.jsx)(jb, {}), (0, oe.jsx)(iM, {}), ye && (0, oe.jsx)(yM, {})]
              }), (0, oe.jsxs)(vK, {
                children: [(0, oe.jsx)(YH, {}), (0, oe.jsx)(ay.c, {}), (0, oe.jsx)(ly, {})]
              }), (0, oe.jsx)(pe.e, {
                children: (0, oe.jsx)(qy, {})
              }), (0, oe.jsxs)(vK, {
                children: [(0, oe.jsx)(Nb.d, {}), (0, oe.jsx)(OK, {})]
              }), null, (0, oe.jsxs)(vK, {
                children: [(0, oe.jsx)(TM.h, {}), (0, oe.jsx)(pM.e, {})]
              }), (0, oe.jsx)(vK, {
                children: (0, oe.jsx)(aH.j, {})
              }), (0, oe.jsx)(vK, {
                children: (0, oe.jsx)(hK, {
                  showChat: Me
                })
              }), (0, oe.jsxs)(vK, {
                children: [(0, oe.jsx)(zM, {}), (0, oe.jsx)(hb, {})]
              }), (0, oe.jsxs)("div", {
                className: Ke()("RightElements", {
                  RightElementsTouchscreen: ye
                }),
                "data-camera-keeper-host": "",
                children: [(0, oe.jsxs)("div", {
                  className: Ny.g,
                  "data-holds-camera-keeper": "",
                  children: [(0, oe.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, oe.jsx)(vK, {
                      children: (0, oe.jsx)(ab.c, {})
                    }), (0, oe.jsxs)(vK, {
                      children: [(0, oe.jsx)(We, {}), (0, oe.jsx)(ib.e, {})]
                    }), yH.featureFlags.useSocialFeatures && (0, oe.jsx)(pe.e, {
                      children: (0, oe.jsx)(Hb.c, {
                        placement: "inGame"
                      })
                    }), yH.featureFlags.useSocialFeatures && (0, oe.jsx)(pe.e, {
                      children: (0, oe.jsx)(fb, {})
                    }), Re && (0, oe.jsx)(pe.e, {
                      children: (0, oe.jsx)(Vy, {})
                    }), (0, oe.jsx)(vK, {
                      children: (0, oe.jsx)(ZK.d, {})
                    })]
                  }), yH.featureFlags.useSocialFeatures && (0, oe.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, oe.jsx)(vK, {
                      children: (0, oe.jsx)(Sb.c, {})
                    })
                  })]
                }), (0, oe.jsxs)(vK, {
                  children: [(0, oe.jsx)(aH.b, {
                    placement: "topRight"
                  }), (0, oe.jsx)(NK, {})]
                })]
              }), (0, oe.jsx)("div", {
                className: "LeftCentre",
                children: (0, oe.jsx)(vK, {
                  children: (0, oe.jsx)(YK, {})
                })
              }), (0, oe.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": ye ? "" : void 0,
                children: [(0, oe.jsx)(pe.e, {
                  children: (0, oe.jsx)(Be.f, {})
                }), (0, oe.jsx)(vK, {
                  children: (0, oe.jsx)(SK, {})
                }), (0, oe.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": ye ? "" : void 0,
                  children: [(0, oe.jsx)("div", {
                    className: Ke()("BottomLeftElements", {
                      Touch: ye
                    }),
                    children: (0, oe.jsxs)(vK, {
                      children: [(0, oe.jsx)(Xb, {}), !ye && (0, oe.jsx)(aK.d, {})]
                    })
                  }), (0, oe.jsx)(vK, {
                    children: (0, oe.jsx)(IK, {})
                  }), (0, oe.jsx)(vK, {
                    children: (0, oe.jsx)(ny, {
                      isTouchScreen: ye
                    })
                  })]
                })]
              }), (0, oe.jsx)("div", {
                className: "MiddleLeft"
              }), ye && (0, oe.jsx)(vK, {
                children: (0, oe.jsx)(qH, {})
              }), (0, oe.jsx)("div", {
                className: "CameraFadeHost",
                ref: qi.p
              })]
            }), (0, oe.jsx)(pe.e, {
              children: (0, oe.jsx)(OM.c, {})
            }), (0, oe.jsx)(pe.e, {
              children: (0, oe.jsx)(qM, {})
            }), (0, oe.jsx)(vK, {
              first: !0,
              children: (0, oe.jsx)(zb.e, {})
            }), (0, oe.jsx)(pe.e, {
              children: (0, oe.jsx)(lK, {})
            })]
          })
      }));

    function lK() {
      return (0, be.useEffect)((() => {
        const ee = setTimeout((() => {
          (0, qe.g)()
        }), 0);
        return () => {
          clearTimeout(ee), qe.h.qB(!1)
        }
      }), []), null
    }
    const SK = (0, be.memo)((function() {
        const ee = (0, Fe.j)("aimingOverlay", "none");
        (0, Oe.b)();
        const ie = (0, Ee.l)("middleTextUpper"),
          He = (0, Ee.l)("middleTextLower");
        return (0, oe.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === ee ? {
            visibility: "hidden"
          } : {},
          children: [(0, oe.jsx)(sK, {
            text: ie,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: nK
          }), (0, oe.jsx)(sK, {
            text: He,
            className: "MiddleText",
            maxHeightFraction: jK
          })]
        })
      })),
      nK = .3,
      jK = .2;

    function sK(ee) {
      let {
        text: ie,
        className: He,
        maxHeightFraction: ye
      } = ee;
      const Me = (0, be.useRef)(null),
        Ke = (0, be.useRef)(null);
      return function(ee, ie, He, ye) {
        (0, be.useLayoutEffect)((() => {
          const ye = ee.current,
            be = ie.current;
          if (!ye || !be) return;
          let Me = -1,
            Ke = -1;
          const Ue = ee => (be.style.setProperty("zoom", String(ee)), ye.getBoundingClientRect().height),
            Fe = () => {
              const ee = document.documentElement.clientHeight * He;
              let ie = 1;
              if (Ue(1) > ee) {
                let He = .5,
                  ye = 1;
                for (let ie = 0; ie < 6; ie++) {
                  const ie = (He + ye) / 2;
                  Ue(ie) <= ee ? He = ie : ye = ie
                }
                ie = He
              }
              Ke = Ue(ie), Me = ye.getBoundingClientRect().width
            };
          Fe();
          let Je = 0;
          const oe = () => {
              cancelAnimationFrame(Je), Je = requestAnimationFrame(Fe)
            },
            Re = new ResizeObserver((() => {
              const {
                width: ee,
                height: ie
              } = ye.getBoundingClientRect();
              ee === Me && ie === Ke || oe()
            }));
          return Re.observe(ye), window.addEventListener("resize", oe), () => {
            Re.disconnect(), window.removeEventListener("resize", oe), cancelAnimationFrame(Je), be.style.removeProperty("zoom")
          }
        }), [ee, ie, He, ye])
      }(Me, Ke, ye, ie.content), (0, oe.jsx)("div", {
        ref: Me,
        className: "MiddleTextFit",
        children: (0, oe.jsx)(XM, {
          ref: Ke,
          text: ie,
          className: He
        })
      })
    }
    const IK = (0, be.memo)((function() {
        const ee = (0, Fe.j)("aimingOverlay", "none");
        (0, Oe.b)();
        const ie = (0, Ee.i)("useInventory");
        return (0, oe.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === ee ? {
            visibility: "hidden"
          } : {},
          children: [(0, oe.jsx)(Re, {}), (0, oe.jsx)(aH.b, {}), (0, oe.jsx)(cH, {}), (0, oe.jsx)(pe.e, {
            children: (0, oe.jsx)(mb, {})
          }), (0, oe.jsxs)("div", {
            className: "HotBarRow",
            children: [ie ? (0, oe.jsx)(Ze.b, {}) : (0, oe.jsx)(Ze.d, {}), (0, oe.jsx)(De, {})]
          })]
        })
      })),
      hK = (0, be.memo)((function(ee) {
        let {
          showChat: ie
        } = ee;
        const {
          t: He
        } = (0, Se.v)(), {
          clientEscMenuOptions: ye,
          sessionReplayRecording: Me,
          isTouchScreen: Ue
        } = (0, ae.m)(["clientEscMenuOptions", "sessionReplayRecording", "isTouchScreen"]);
        (0, Oe.b)();
        const {
          userContext: Fe,
          isUserContextUpdating: Je
        } = (0, ze.b)(), Re = (0, Ee.i)("hideCoordinates"), qe = (0, Ee.i)("customVariationTitle"), {
          requestedGameNameWithVariation: fe,
          gameNameWithVariation: Te,
          lobbyName: pe,
          shownLobbyName: Xe
        } = (0, ce.k)("connectedGame"), Be = (0, ke.c)(fe, pe, !1), [de, We] = (0, be.useState)(null), te = (0, xb.n)(Te || fe || ""), Ze = qe || te || "";
        (0, be.useEffect)((() => {
          Je || bb.b.getFavouriteLobbies(Fe).then((ee => {
            console.log("Got favourite lobbies", ee), We(ee)
          }))
        }), [Je, Fe]);
        const we = (0, be.useRef)(null);
        return (0, be.useLayoutEffect)((() => {
          const ee = we.current,
            ie = document.documentElement,
            He = new ResizeObserver((() => {
              ie.style.setProperty("--InGameHeaderRowsHeight", `${ee.offsetHeight}px`)
            }));
          return He.observe(ee), () => {
            He.disconnect(), ie.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), eb(we), (0, oe.jsxs)(oe.Fragment, {
          children: [(0, oe.jsxs)("div", {
            className: Ke()(Ny.d, {
              Touchscreen: Ue
            }),
            ref: we,
            children: [(0, oe.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, oe.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: ee => {
                  ee.stopPropagation(), ee.preventDefault()
                },
                onClick: () => {
                  ae.e.set({
                    openEverythingMenuName: Ly.r.SETTINGS
                  })
                },
                children: [(0, oe.jsx)(cb.b, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, oe.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, oe.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === Be && (0, oe.jsx)(cb.b, {}), null !== Be && (0, oe.jsxs)(oe.Fragment, {
                  children: [Be, Ze && ` ${Ze}`]
                })]
              }), (0, oe.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, oe.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: Xe
              }), (0, Lb.I)(pe) && (0, oe.jsx)(ge.g, {
                tooltipInner: (0, oe.jsx)("div", {
                  children: He(null !== de && de.includes(pe) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, oe.jsx)("div", {
                  children: (0, oe.jsx)(mH.r, {
                    isLiked: null !== de && de.includes(pe),
                    onClick: () => {
                      try {
                        if (!de) return;
                        de.includes(pe) ? (bb.b.unfavouriteLobby(Fe, pe).catch((ee => {
                          console.error("Failed to favourite lobby", ee)
                        })), We(de.filter((ee => ee !== pe)))) : (bb.b.favouriteLobby(Fe, pe).catch((ee => {
                          console.error("Failed to favourite lobby", ee)
                        })), We([...de, pe]))
                      } catch (ee) {
                        console.error("Failed to like lobby", ee)
                      }
                    },
                    isLoading: null === de
                  })
                })
              }), (0, oe.jsx)(gM, {})]
            }), (0, oe.jsx)(Db, {
              show: ye.showFPS,
              asText: Me
            }), !Re && ye.showCoordinates && (0, oe.jsx)(Yb, {}), !Re && ye.showChunkCoordinates && (0, oe.jsx)(Vb, {}), (0, oe.jsx)(BM, {})]
          }), (0, oe.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, oe.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: ie && (0, oe.jsx)(Ve.e, {})
            })
          })]
        })
      })),
      NK = (0, be.memo)((function() {
        (0, Oe.b)();
        const ee = (0, Ee.l)("RightInfoText"),
          [ie, He] = (0, be.useState)(null);
        return (0, Fi.i)(ie, ".RightElements"), ee.hasText ? (0, oe.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, oe.jsx)(XM, {
            ref: He,
            text: ee,
            className: "RightInfoDiv",
            children: (0, oe.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, oe.jsx)(Je.e, {
                text: ee.content
              })
            })
          })
        }) : null
      }))
  },
  5317: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue
    });
    var ye = He(59),
      be = He(335),
      Me = He(1970),
      Ke = He(1228);

    function Ue(ee) {
      let {
        text: ie
      } = ee;
      const He = [];
      let Ue = "";
      return (0, be.kc)(ie).forEach(((ee, ie) => {
        if ("string" === typeof ee || !(0, Me.e)(ee.icon)) return void(Ue += "string" === typeof ee ? ee : ee.icon);
        const be = Math.max(0, Ue.trimEnd().search(/\S{1,12}$/));
        He.push((0, Ke.jsxs)(ye.Fragment, {
          children: [Ue.slice(0, be), (0, Ke.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Ue.slice(be), (0, Ke.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": ee.icon,
              children: (0, Ke.jsx)(Me.c, {
                itemName: ee.icon,
                amount: 0
              })
            })]
          })]
        }, ie)), Ue = ""
      })), He.push(Ue), (0, Ke.jsx)(Ke.Fragment, {
        children: He
      })
    }
  },
  37349: (ee, ie, He) => {
    He.d(ie, {
      d: () => ke,
      g: () => oe,
      j: () => Re
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1970),
      Ue = He(1228);
    const Fe = 350;
    let Je = 0;

    function oe() {
      return Je += 1, Je
    }

    function Re(ee, ie) {
      let He = 0;
      for (const ye of ee) "ingredient" !== ye.kind && ye.RJ === ie && (He += ye.amount);
      return He > 0 ? {
        idx: ie,
        amount: He
      } : null
    }

    function ke(ee) {
      var ie, He;
      let {
        anim: be,
        onComplete: Je
      } = ee;
      const oe = null !== (ie = be.delayMs) && void 0 !== ie ? ie : 0,
        Re = null !== (He = be.durationMs) && void 0 !== He ? He : Fe,
        [ke, qe] = (0, ye.useState)(be.from),
        [fe, Te] = (0, ye.useState)(0 === oe),
        [pe, Xe] = (0, ye.useState)(!1),
        ze = (0, ye.useRef)(!1);
      return (0, ye.useEffect)((() => {
        let ee, ie;
        const He = () => {
            ze.current = !0, Te(!0), ee = requestAnimationFrame((() => {
              ie = requestAnimationFrame((() => {
                qe({
                  x: be.to.x,
                  y: be.to.y
                }), Xe(!0)
              }))
            }))
          },
          ye = ze.current ? 0 : oe;
        let Me;
        ye > 0 ? Me = setTimeout(He, ye) : He();
        const Ke = setTimeout((() => {
          Je(be.id)
        }), ye + Re + 50);
        return () => {
          clearTimeout(Me), cancelAnimationFrame(ee), cancelAnimationFrame(ie), clearTimeout(Ke)
        }
      }), [be.id, be.to.x, be.to.y, Je, oe, Re]), (0, Ue.jsx)("div", {
        className: Me()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === be.kind,
          Waiting: !fe,
          Arrived: pe
        }),
        style: {
          left: ke.x,
          top: ke.y,
          "--fly-duration": `${Re}ms`
        },
        children: (0, Ue.jsx)(Ke.c, {
          itemName: be.itemName,
          amount: be.amount
        })
      })
    }
  },
  37329: (ee, ie, He) => {
    He.d(ie, {
      b: () => xe,
      d: () => ve
    });
    var ye = He(59),
      be = He(2722),
      Me = He(7220),
      Ke = He(2112),
      Ue = He(2532),
      Fe = He(9566),
      Je = He(347),
      oe = He(27),
      Re = He(1432),
      ke = He(35),
      qe = He(1053),
      fe = He.n(qe),
      Te = He(335),
      pe = He(37337),
      Xe = He(1956),
      ze = He(2029),
      Be = He(9428),
      Ee = He(1228);

    function ge(ee) {
      var ie, He;
      let {
        slotIdx: Me
      } = ee;
      const Ke = (0, ze.g)("hotbar", (ee => {
          var ie;
          return null !== (ie = ee.items[Me]) && void 0 !== ie ? ie : null
        })),
        Fe = (0, ze.g)("hotbar", (ee => ee.ammo)),
        [oe, Re] = (0, ye.useState)(!1),
        ke = (0, ye.useRef)(null),
        [qe, Te] = (0, ye.useState)(null),
        [pe, ge] = (0, ye.useState)(null),
        Oe = (0, Ue.i)("maxAuraLevel"),
        de = (0, be.c)(),
        We = (0, ye.useCallback)((() => {
          if (clearTimeout(ke.current), Ke) {
            var ee, ie, He, ye;
            const Fe = Ke.displayName,
              oe = [],
              Re = Array.isArray(Fe) ? Fe : [Fe],
              ke = {
                fontStyle: null !== (ee = Ke.attributes.customAttributes) && void 0 !== ee && ee.author ? "italic" : "normal"
              };
            for (const ee of Re) ee.str ? oe.push(ee) : oe.push({
              str: ee,
              style: ke
            });
            if (null !== (ie = Ke.attributes.customAttributes) && void 0 !== ie && ie.enchantments) {
              oe.push(" ");
              const ee = Object.entries(Ke.attributes.customAttributes.enchantments).sort(((ee, ie) => ie[1] - ee[1])),
                ie = Ke.attributes.customAttributes.enchantmentData;
              for (const [He, ye] of ee) {
                var be, Me;
                const ee = null !== (be = null === ie || void 0 === ie || null === (Me = ie[He]) || void 0 === Me ? void 0 : Me.icon) && void 0 !== be ? be : `${He} Enchantment`;
                var Ue;
                if (ye < 4)
                  for (let ie = 0; ie < ye; ie++) oe.push({
                    icon: ee,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else oe.push({
                  icon: ee,
                  style: {
                    fontSize: "1.5em"
                  }
                }), oe.push(null !== (Ue = (0, Je.T)(ye)) && void 0 !== Ue ? Ue : ye.toString())
              }
            }
            Te(oe), ge(null !== (He = null === (ye = Ke.attributes.customAttributes) || void 0 === ye ? void 0 : ye.enchantmentTier) && void 0 !== He ? He : null)
          } else Te(null), ge(null);
          Re(!0), de();
          const Fe = null === Ke || void 0 === Ke ? void 0 : Ke.attributes.customAttributes;
          void 0 === (null === Fe || void 0 === Fe ? void 0 : Fe.shotsLeft) && (ke.current = setTimeout((() => {
            Re(!1)
          }), 2e3))
        }), [null === Ke || void 0 === Ke ? void 0 : Ke.name, Me, null === Ke || void 0 === Ke ? void 0 : Ke.instance, null === Ke || void 0 === Ke ? void 0 : Ke.displayName]);
      (0, ye.useEffect)((() => (We(), () => {
        clearTimeout(ke.current), Re(!1)
      })), [null === Ke || void 0 === Ke ? void 0 : Ke.name, Me, null === Ke || void 0 === Ke ? void 0 : Ke.instance, We]);
      const te = null === Ke || void 0 === Ke || null === (ie = Ke.attributes.customAttributes) || void 0 === ie ? void 0 : ie.shotsLeft,
        Ze = void 0 === te ? null : (0, Ee.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${te}|${Ke.requiresAmmo?`${Fe}x${Ke.clipSize}`:Ke.clipSize}`
        }),
        we = (0, Be.j)();
      return (0, Ee.jsx)(Ee.Fragment, {
        children: oe && Ke && !we.showing ? (0, Ee.jsxs)("div", {
          className: fe()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === Oe,
            Enchanted: null !== pe
          }),
          style: {
            "--enchantmentColour": null !== (He = Je.xb[pe]) && void 0 !== He ? He : Je.xb.None,
            "--duration": pe ? (0, Je.rb)(pe) + "s" : void 0
          },
          children: [pe && (0, Ee.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, Ee.jsx)(Xe.e, {
              text: qe
            }), Ze]
          }), (0, Ee.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, Ee.jsx)(Xe.e, {
              text: qe
            }), Ze]
          })]
        }) : null
      })
    }
    var Oe = He(37349),
      de = He(18),
      We = He(1983),
      te = He(610),
      Ze = He(2535),
      we = He(3752),
      De = He(3760);
    var Pe = He(1070),
      Ae = He(1062),
      Ye = He(2591);

    function Ve() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var ae = He(9654),
      ce = He(1447);
    const xe = (0, ye.memo)((function() {
      const [ee, ie] = (0, ye.useState)(0), He = (0, Ue.i)("useFullInventory"), Ke = (0, Ue.i)("highlightedHotbarSlots"), {
        isTouchScreen: Fe,
        openInGameMenuName: Je
      } = (0, de.m)(["isTouchScreen", "openInGameMenuName"]), ke = null !== Je && "inventory" !== Je, qe = (0, ze.k)("fullInventory") && "inventory" === Je, Te = function() {
        const ee = (0, Pe.k)(((ee, ie) => `${ee}:${(0,Ae.b)(ee,ie)?"portrait":"landscape"}`)),
          [ie, He] = (0, ye.useState)(Ve);
        return (0, ye.useLayoutEffect)((() => {
          He(Ve())
        }), [ee]), (0, Re.f)(Ye.f, (() => {
          He(Ve())
        })), ie
      }(), Xe = Fe && !Te;
      ! function(ee, ie, He) {
        (0, ye.useLayoutEffect)((() => {
          const ye = document.documentElement.classList;
          return ee && (ye.add("TouchHotbar"), ye.toggle("TouchHotbarKeysAbove", ie), ye.toggle("TouchHotbarHasBag", He)), (0, we.g)(), oe.h.yR(De.c), () => {
            ye.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, we.g)(), oe.h.yR(De.c)
          }
        }), [ee, ie, He])
      }(Fe, Xe, He);
      const [Be, Ze] = (0, Me.d)("changedHotbarUsingNumkeys", !0), ae = (0, ze.g)("hotbar", (ee => ee.selectedSlot)), ce = null !== ae && void 0 !== ae ? ae : ee, xe = (0, be.c)(), ue = (0, ye.useRef)(null), me = (0, Re.j)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, Re.f)("inventoryDraggedItemUpdated", (ee => {
        ue.current = ee, xe()
      })), (0, ze.e)("hotbarScrolled", (ee => {
        null === ae && ne(ee)
      })), (0, ze.e)("hotbarSlotRequested", (ee => {
        Se(ee), Ze(!1)
      })), (0, ze.e)("numberKeyPressed", (() => {
        Ze(!1)
      })), (0, ze.e)("hotbarDropRequested", (ee => {
        const ie = We.gameBridge.latest("hotbar").items[ce];
        if (ie) {
          var He;
          const ye = ee && null !== (He = ie.amount) && void 0 !== He ? He : 1;
          We.gameBridge.send("removeInventoryItem", {
            slot: ce,
            amount: ye,
            drop: !0
          })
        }
      }));
      const Se = ee => {
          We.gameBridge.send("selectHotbarSlot", ee), ie(ee)
        },
        ne = ee => {
          Se((ce + ee + te.r) % te.r)
        };
      let je, se = null,
        Ie = null,
        he = ee => ee => {},
        Ne = ee => ie => {
          Se(ee)
        },
        Ge = ee => ee => {},
        re = [];
      if (qe) {
        var Qe;
        const ee = ue.current;
        if (null === ee || void 0 === ee || !ee.setHovered) return (0, Ee.jsx)("div", {
          className: fe()("HotBarContainer", {
            Touch: Fe,
            KeysAbove: Xe
          }),
          children: (0, Ee.jsx)("div", {
            className: "HotBar"
          })
        });
        se = ee.draggedInfo, Ie = ee.specialItemInfo, he = ee.setHovered, Ne = ee.pointerDown, Ge = ee.pointerUp, je = ee.variation, re = null !== (Qe = ee.craftFlyAnims) && void 0 !== Qe ? Qe : []
      }
      return (0, Ee.jsxs)("div", {
        className: fe()("HotBarContainer", {
          Touch: Fe,
          PopupOpen: Fe && ke,
          KeysAbove: Xe
        }),
        children: [(0, Ee.jsxs)("div", {
          className: fe()("HotBar", {
            HoverDisabled: me
          }),
          children: [Fe && (0, Ee.jsxs)(Ee.Fragment, {
            children: [(0, Ee.jsx)(Ce, {
              useFullInventory: He,
              inventoryOpen: qe
            }), (0, Ee.jsx)(Le, {
              direction: "Previous",
              onPress: () => {
                ne(-1)
              }
            })]
          }), !Fe && (0, Ee.jsxs)(Ee.Fragment, {
            children: [(0, Ee.jsx)(ve, {}), (0, Ee.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, Ee.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((ee, ie) => (0, Ee.jsx)(pe.b, {
              idx: ie,
              draggedInfo: se,
              specialItemInfo: Ie,
              craftFlyHoldbackInfo: (0, Oe.j)(re, ie),
              setHovered: he(ie),
              pointerDown: Ne(ie),
              pointerUp: Ge(ie),
              variation: je,
              isSelected: ie === ce,
              hotbarHighlighted: !0 === (null === Ke || void 0 === Ke ? void 0 : Ke.includes(ie)),
              hoverDisabled: me,
              showNumber: Be && !Fe
            }, ie)))
          }), Fe && (0, Ee.jsx)(Le, {
            direction: "Next",
            onPress: () => {
              ne(1)
            }
          }), !Fe && (0, Ee.jsxs)(Ee.Fragment, {
            children: [(0, Ee.jsx)("div", {
              className: "HotBarFiller"
            }), (0, Ee.jsx)("div", {
              className: fe()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !He
              }),
              onPointerDown: () => {
                oe.h.yR("toggleMenu", "inventory")
              },
              children: (0, Ee.jsx)(le, {})
            })]
          })]
        }), (0, Ee.jsx)(ge, {
          slotIdx: ce
        })]
      })
    }));

    function Le(ee) {
      let {
        direction: ie,
        onPress: He
      } = ee;
      return (0, Ee.jsx)("div", {
        className: fe()("HotBarArrow", ie),
        ...ce.e,
        children: (0, Ee.jsx)(Ke.c, {
          icon: "Previous" === ie ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: He
        })
      })
    }
    const Ce = (0, ye.memo)((function(ee) {
        let {
          useFullInventory: ie,
          inventoryOpen: He
        } = ee;
        const be = (0, Ue.i)("maxAuraLevel"),
          Me = (0, ye.useRef)(null),
          Ke = (0, Fe.b)();
        return function(ee, ie, He) {
          (0, ye.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", ie), oe.h.yR(De.c), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [ie]), (0, ye.useLayoutEffect)((() => {
            const ie = ee.current.closest(".BottomMiddleElements");
            return ie.classList.toggle("TouchInventoryOpen", He), () => {
              ie.classList.remove("TouchInventoryOpen")
            }
          }), [ee, He])
        }(Me, Ke, He), (0, ae.h)(Me, Ke, He), (0, Ee.jsxs)("div", {
          ref: Me,
          className: fe()("TouchInventoryKeys", {
            NoAuraBar: 0 === be,
            InventoryOpen: He
          }),
          children: [(0, Ee.jsx)(ve, {
            touchKey: !0
          }), (0, Ee.jsx)("div", {
            className: fe()("TouchInventoryKey BagKey", {
              Hidden: !ie
            }),
            ...ce.e,
            children: (0, Ee.jsx)(le, {
              touchKey: !0
            })
          })]
        })
      })),
      ve = (0, ye.memo)((function(ee) {
        let {
          touchKey: ie = !1
        } = ee;
        const He = (0, Fe.b)();
        return (0, Ee.jsx)("div", {
          className: ie ? fe()("TouchInventoryKey ShopKey", {
            Hidden: !He
          }) : fe()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !He
          }),
          ...ie ? ce.e : {},
          children: (0, Ee.jsx)(Ke.c, {
            icon: (0, Je.hc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              He && de.e.set({
                openEverythingMenuName: Te.r.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function ue(ee) {
      let {
        player: ie
      } = ee;
      return ie.some((ee => null !== ee && Je.Yc.includes(ee.name)))
    }

    function me(ee) {
      ee.creative || ke.i.getItem("LogInInventoryRedDotTutorialComplete") || (ue(ee) ? (oe.h.yR("RedDotOpenInventoryIcon", !0), oe.h.yR("TouchTutorialOpenInventoryIcon", !0)) : (oe.h.yR("RedDotOpenInventoryIcon", !1), oe.h.yR("TouchTutorialOpenInventoryIcon", !1)))
    }
    const le = (0, ye.memo)((function(ee) {
      let {
        touchKey: ie = !1
      } = ee;
      (0, ye.useEffect)((() => {
        me(We.gameBridge.latest("inventory"))
      }), []), (0, ze.e)("inventory", me);
      const He = (0, Ze.f)();
      return (0, Re.f)("toggleMenu", (ee => {
        He.shown && (null !== ee && void 0 !== ee && ee.startsWith("inventory") && ue(We.gameBridge.latest("inventory")) ? (ke.i.setItem("LogInInventoryRedDotTutorialComplete", !0), oe.h.yR("RedDotOpenInventoryIcon", !1), oe.h.yR("TouchTutorialOpenInventoryIcon", !1)) : "shop" === ee && oe.h.yR("showShopTouchTutorial", !1))
      })), ie ? (0, Ee.jsx)(Ke.c, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          oe.h.yR("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, Ee.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          oe.h.yR("toggleMenu", "inventory")
        },
        children: (0, Ee.jsx)(Ke.c, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: ee => {
            oe.h.yR("toggleMenu", "inventory"), ee.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  37337: (ee, ie, He) => {
    He.d(ie, {
      b: () => pe,
      e: () => fe
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1977),
      Ue = He(1970),
      Fe = He(1983),
      Je = He(2029),
      oe = He(37340),
      Re = He(34889),
      ke = He(1385),
      qe = He(1228);
    const fe = (ee, ie, He) => {
      let ye = ie,
        be = !1;
      for (const Me of He)(null === Me || void 0 === Me ? void 0 : Me.idx) === ee && (be = !0, ye > 0 && (ye -= Me.amount));
      return {
        displayedAmt: ye,
        shown: !be || ye > 0
      }
    };
    const Te = ee => {
        let {
          idx: ie
        } = ee;
        return (0, ke.A)() ? null : (0, qe.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: ie < 9 ? ie + 1 : 0
        })
      },
      pe = (0, ye.memo)((function(ee) {
        var ie, He, ye;
        let {
          idx: be,
          setHovered: ke,
          pointerDown: pe,
          pointerUp: Xe,
          draggedInfo: ze,
          specialItemInfo: Be,
          craftFlyHoldbackInfo: Ee,
          defaultIconB64: ge = null,
          variation: Oe,
          isSelected: de = !1,
          hotbarHighlighted: We = !1,
          hoverDisabled: te = !1,
          showNumber: Ze = !1,
          showNewDot: we = !1
        } = ee;
        const De = (0, Je.g)("inventory", (ee => be === oe.e ? null : (0, Re.m)(ee, be)));
        let Pe, Ae, Ye, Ve;
        if (be === oe.e) Be && (Pe = Be.name, Ye = Be.amount, Ve = Be.attributes);
        else if (De) {
          var ae;
          Pe = De.name, Ae = De.icon, Ye = null !== (ae = De.amount) && void 0 !== ae ? ae : 0, Ve = De.attributes
        }
        const ce = null === (ie = Ve) || void 0 === ie || null === (He = ie.customAttributes) || void 0 === He ? void 0 : He.enchantmentTier,
          xe = (0, Ke.g)(Ve),
          {
            displayedAmt: Le,
            shown: Ce
          } = fe(be, Ye, [ze, Be, Ee]),
          ve = Pe && Ce,
          ue = void 0 !== Oe && function(ee, ie) {
            const {
              enchantable: He,
              salvageable: ye
            } = Fe.gameBridge.latest("stationItems");
            return "Enchanting Table" === ee ? !0 === He[ie] : "Salvaging Table" === ee && !0 === ye[ie]
          }(Oe, Pe);
        return (0, qe.jsxs)("div", {
          className: Me()("InvenItem", {
            Highlighted: ve && ue,
            Selected: de,
            HotbarHighlighted: We,
            HoverDisabled: te
          }),
          onPointerEnter: () => {
            null === ke || void 0 === ke || ke(!0)
          },
          onPointerLeave: () => {
            null === ke || void 0 === ke || ke(!1)
          },
          onPointerDown: pe,
          onPointerUp: Xe,
          "data-inven-idx": be,
          children: [ve && (0, qe.jsx)(Ue.c, {
            itemName: null !== (ye = Ae) && void 0 !== ye ? ye : Pe,
            amount: Le,
            enchantmentTier: ce,
            bar: xe
          }), ve && we && (0, qe.jsx)("div", {
            className: "InvenItemNewDot"
          }), Ze && (0, qe.jsx)(Te, {
            idx: be
          }), ge && !ve && (0, qe.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${ge})`
            }
          })]
        })
      }))
  },
  37340: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      e: () => be
    });
    const ye = -1,
      be = -2
  },
  37836: (ee, ie, He) => {
    He.d(ie, {
      e: () => te
    });
    var ye = He(59),
      be = He(37838),
      Me = He(1956),
      Ke = He(602),
      Ue = He(27),
      Fe = He(1053),
      Je = He.n(Fe),
      oe = He(37367),
      Re = He(2755),
      ke = He(2938),
      qe = He(2790),
      fe = He(2762),
      Te = He(4001),
      pe = He(37372),
      Xe = He(18),
      ze = He(2083),
      Be = He(2425),
      Ee = He(1169),
      ge = He(5390),
      Oe = He(2029),
      de = He(97),
      We = He(1228);
    const te = (0, ye.memo)((function() {
      const ee = (0, be.e)(),
        ie = (0, Oe.k)("players"),
        He = (0, Oe.k)("lobbyLeaderboardRows"),
        Ue = (0, Oe.k)("hiddenPlayerNames"),
        Fe = (0, ye.useRef)(null),
        [Je, oe] = (0, ye.useReducer)((ee => ee + 1), 0);
      return (0, ye.useEffect)((() => (0, ze.e)((() => {
        oe()
      }))), []), (0, We.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, We.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!ee) return (0, We.jsx)(We.Fragment, {});
            const ye = [...ie.ids],
              be = {},
              Je = {};
            for (const ee of ye) {
              var oe, Re;
              be[ee] = null === (oe = He[ee]) || void 0 === oe ? void 0 : oe.colour;
              const ie = null === (Re = He[ee]) || void 0 === Re ? void 0 : Re.values;
              ie && (Je[ee] = {
                ...ie
              })
            }
            const qe = Object.keys(ee);
            qe.sort(((ie, He) => ee[ie].sortPriority - ee[He].sortPriority)), ye.sort(((ie, He) => {
              if (!Je[ie] || !Je[He]) return 0;
              for (const ye of qe) {
                const be = Je[ie][ye],
                  Me = Je[He][ye];
                let Ke = 0;
                if ("string" == typeof be && "string" == typeof Me ? Ke = be.localeCompare(Me) : "number" == typeof be && "number" == typeof Me ? Ke = be - Me : "number" == typeof be && "string" == typeof Me ? Ke = 1 : "string" == typeof be && "number" == typeof Me && (Ke = -1), Ke) return Ke * ("ascending" === ee[ye].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const ee of ye) {
              var fe, Te, pe;
              const {
                name: ye,
                ranks: be,
                cosmetics: Me
              } = ie.byId[ee], Ue = [], Fe = null !== (fe = null === (Te = He[ee]) || void 0 === Te || null === (pe = Te.tags) || void 0 === pe ? void 0 : pe.flatMap((ee => 0 === ee.length ? ee : [...ee, String.fromCharCode(8198)]))) && void 0 !== fe ? fe : [];
              Ue.push(...Fe), Ue.push(...(0, Ee.B)(be, ye, (null === Me || void 0 === Me ? void 0 : Me.nameColour) === Ke.d || null === Me || void 0 === Me ? void 0 : Me.nameColour)), Je[ee] ??= {}, Je[ee].name = Ue
            }

            function Xe(ee, He) {
              if (Je[ee] && void 0 !== Je[ee][He]) {
                if ("name" === He) {
                  const {
                    name: ye,
                    cosmetics: be
                  } = ie.byId[ee];
                  return (0, We.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [be && (0, We.jsx)(Be.c, {
                      cosmetics: be
                    }), " ", (0, We.jsx)(Me.e, {
                      text: Je[ee][He],
                      friendBadgeFor: (0, ze.i)(ye, Ue) ? ye : void 0
                    })]
                  })
                }
                return (0, We.jsx)(Me.e, {
                  text: Je[ee][He]
                })
              }
              return ""
            }
            const Oe = Object.keys(ee).filter((ie => !0 !== ee[ie].hidden)).map((ie => {
              var He;
              return {
                key: ie,
                header: (0, We.jsx)(Me.e, {
                  text: null !== (He = ee[ie].displayName) && void 0 !== He ? He : ""
                })
              }
            }));
            return (0, We.jsx)("div", {
              ref: Fe,
              className: "LobbyLeaderboard",
              children: (0, We.jsx)(ge.e, {
                columns: Oe,
                rows: ye,
                getRowKey: ee => ee,
                renderRow: He => {
                  const ye = He !== ie.localId;
                  return (0, We.jsx)(Ze, {
                    playerId: He,
                    playerName: ie.byId[He].name,
                    isOtherPlayer: ye,
                    opensProfileCard: (0, ke.h)(ye, ie.byId[He].name, Ue),
                    lobbyLeaderboardInfo: ee,
                    getPlayerValue: Xe,
                    playerColors: be
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function Ze(ee) {
      let {
        playerId: ie,
        playerName: He,
        isOtherPlayer: be,
        opensProfileCard: Me,
        lobbyLeaderboardInfo: Ke,
        getPlayerValue: Fe,
        playerColors: ze
      } = ee;
      const Be = (0, ye.useRef)(null);
      (0, ye.useEffect)((() => () => {
        Re.e.closeIfOwner(Be)
      }), []);
      const Ee = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            Ue.h.yR("OpenReportMenu", {
              playerEId: ie,
              playerName: He,
              nF: null,
              serverChatMsgId: null
            })
          }
        },
        ge = () => ({
          ...(0, ke.f)(ie, He),
          showLocation: !1,
          status: null,
          extraActions: [Ee],
          moderationActions: null === He ? [] : (0, pe.d)(He),
          friendRequestSource: "leaderboard"
        });
      return (0, We.jsxs)("tr", {
        ref: Be,
        "data-pad-focusable": Me || void 0,
        [Re.i]: Me || void 0,
        onClick: Me ? () => {
          var ee;
          Re.e.toggle(Be, {
            ...ge(),
            anchor: null !== (ee = Be.current.querySelector(".PlayerPfpAndName")) && void 0 !== ee ? ee : Be.current
          })
        } : void 0,
        onContextMenu: Me ? ee => {
          (0, qe.e)(Be, ee, ge(), Xe.e.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Me ? ee => {
          (0, fe.d)(ee, (() => (0, ke.f)(ie, He).playerSocialPreview))
        } : void 0,
        children: [Object.keys(Ke).map((ee => !0 === Ke[ee].hidden ? null : (0, We.jsxs)("td", {
          className: Je()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !be
          }),
          children: [(0, We.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: Fe(ie, ee)
          }), (0, We.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: ze[ie]
            }
          })]
        }, ee))), be && !Me && (0, We.jsx)(oe.d, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: Be,
          options: [{
            icon: Ee.icon,
            text: Ee.text,
            onPointerDown: Ee.onClick
          }, ...null === He || de.featureFlags.useSocialFeatures ? [] : (0, Te.d)(null, He)]
        })]
      })
    }
  },
  37372: (ee, ie, He) => {
    He.d(ie, {
      d: () => oe
    });
    var ye = He(2018),
      be = He(2545),
      Me = He(37380);
    const Ke = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function Ue(ee, ie) {
      return async () => function(ee, ie, He) {
        return null === ie ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : ie.ok ? {
          message: {
            key: Ke[ee.type]
          },
          next: He
        } : {
          message: {
            fromServer: ie.message
          },
          next: null
        }
      }(ee, await (0, Me.h)(ee), ie())
    }

    function Fe(ee) {
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
        run: Ue({
          type: "ban",
          name: ee
        }, (() => function(ee) {
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
            run: Ue({
              type: "unban",
              name: ee
            }, (() => null))
          }
        }(ee)))
      }
    }

    function Je(ee, ie) {
      if (null === ee) return [];
      const He = [],
        ye = function(ee, ie) {
          var He, ye;
          return null !== (He = null !== (ye = ee.here.find((ee => ee.name === ie))) && void 0 !== ye ? ye : ee.away.find((ee => ee.name === ie))) && void 0 !== He ? He : null
        }(ee, ie);
      var Me, Ke;
      return null !== ye && void 0 !== ye && ye.can.kick && He.push((Me = ie, Ke = ye.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: Ue({
          type: "kick",
          name: Me
        }, (() => Ke ? Fe(Me) : null))
      })), null !== ye && void 0 !== ye && ye.can.ban && He.push(Fe(ie)), He.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, be.h)({
            page: "players",
            focusName: ie,
            source: "profile_card"
          })
        }
      }), He
    }

    function oe(ee) {
      var ie;
      return Je(null !== (ie = ye.c.get("lobbyManage")) && void 0 !== ie ? ie : null, ee)
    }
  },
  37380: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      h: () => Fe
    });
    var ye = He(1464),
      be = He(2018),
      Me = He(1983);
    const Ke = 1e4;
    let Ue = 0;

    function Fe(ee) {
      const ie = ++Ue;
      return new Promise((He => {
        const Ue = ie => {
            Fe(), clearTimeout(Je), !1 === (null === ie || void 0 === ie ? void 0 : ie.ok) && (0, ye.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: ee.type
            }), He(ie)
          },
          Fe = be.c.subscribe("lobbyManage", (ee => {
            const He = function(ee, ie) {
              var He;
              return null !== (He = null === ee || void 0 === ee ? void 0 : ee.results.find((ee => ee.requestId === ie))) && void 0 !== He ? He : null
            }(ee, ie);
            null !== He && Ue(He)
          })),
          Je = setTimeout((() => {
            Ue(null)
          }), Ke);
        Me.gameBridge.send("lobbyManage", {
          ...ee,
          requestId: ie
        })
      }))
    }
    const Je = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class oe {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fe;
        this.onChange = ee, this.sendAction = ie, this.pending = new Map, this.statuses = new Map
      }
      send(ee, ie, He) {
        var ye;
        return this.statuses.delete(ie), this.pending.set(ie, (null !== (ye = this.pending.get(ie)) && void 0 !== ye ? ye : 0) + 1), this.sendAction(ee).then((ee => {
          var ye;
          const be = null !== ee && void 0 !== ee ? ee : {
              requestId: -1,
              ok: !1,
              message: Je
            },
            Me = (null !== (ye = this.pending.get(ie)) && void 0 !== ye ? ye : 1) - 1;
          Me > 0 ? this.pending.set(ie, Me) : this.pending.delete(ie);
          const Ke = !be.ok || be.message.length > 0 ? be.message : null === He ? null : [He];
          return null !== Ke && this.statuses.set(ie, {
            ok: be.ok,
            text: Ke,
            until: Date.now() + 4e3
          }), this.onChange(), be
        }))
      }
      show(ee, ie) {
        this.statuses.set(ee, {
          ...ie,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(ee) {
        for (const [ie, He] of this.statuses) He.until <= ee && this.statuses.delete(ie)
      }
      nextDeadline() {
        let ee = null;
        for (const He of this.statuses.values()) {
          var ie;
          ee = Math.min(null !== (ie = ee) && void 0 !== ie ? ie : 1 / 0, He.until)
        }
        return ee
      }
      statusOf(ee, ie) {
        const He = this.statuses.get(ee);
        return !He || He.until <= ie ? null : {
          ok: He.ok,
          text: He.text
        }
      }
      isPending(ee) {
        return this.pending.has(ee)
      }
    }
  },
  5245: (ee, ie, He) => {
    He.d(ie, {
      h: () => ze,
      e: () => Xe
    });
    var ye = He(59),
      be = He(1432),
      Me = He(1956),
      Ke = He(5252),
      Ue = He(1228);
    const Fe = (0, ye.memo)((function(ee) {
      let {
        initialParameters: ie
      } = ee;
      const He = (0, ye.useRef)(null),
        be = (0, ye.useRef)(null),
        Fe = (0, ye.useRef)(0),
        Je = (0, ye.useRef)(null),
        oe = ie.description,
        Re = ie.Ii,
        {
          scale: ke,
          rotation: qe
        } = null !== ie && void 0 !== ie ? ie : {},
        fe = (0, Ke.e)();
      return (0, ye.useEffect)((() => {
        const ee = fe.onFrame((() => {
          const ee = fe.getState();
          if (!ee.isActive || !He.current || !be.current) return;
          const ie = ee.state;
          if (He.current.value = ie.progress, ie.clickCount > Fe.current) {
            Fe.current = ie.clickCount;
            const ee = be.current;
            ee.classList.add("pulse"), Je.current = setTimeout((() => {
              ee.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(Je.current), ee()
        }
      }), [fe]), (0, Ue.jsx)(Ue.Fragment, {
        children: (0, Ue.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== ke && {
              "--scale": ke
            },
            ...null !== qe && {
              "--rotation": `${qe}deg`
            }
          },
          children: [(0, Ue.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: He
          }), (0, Ue.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: be,
            children: (0, Ue.jsx)(Me.e, {
              text: [{
                icon: Re
              }]
            })
          }), (0, Ue.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, Ue.jsx)(Me.e, {
              text: oe
            })
          })]
        })
      })
    }));
    var Je = He(1053),
      oe = He.n(Je);
    const Re = 2 * Math.PI * 90,
      ke = (0, ye.memo)((function(ee) {
        let {
          initialParameters: ie
        } = ee;
        const He = (0, ye.useRef)(null),
          be = (0, ye.useRef)(null),
          Fe = (0, ye.useRef)(null),
          Je = ie.label,
          ke = ie.icon,
          qe = ie.ri,
          {
            scale: fe,
            rotation: Te,
            Qi: pe
          } = null !== ie && void 0 !== ie ? ie : {},
          Xe = (0, Ke.e)();
        return (0, ye.useEffect)((() => {
          const ee = Xe.onFrame((() => {
            var ee, ie;
            const ye = Xe.getState();
            if (!ye.isActive || !be.current) return;
            const Me = ye.state,
              Ke = null !== (ee = Me.timeRemaining) && void 0 !== ee ? ee : 0,
              Ue = null !== (ie = Me.Gi) && void 0 !== ie ? ie : 1,
              Je = Re * (1 - Ke / Ue);
            be.current.style.strokeDashoffset = `${Je}`, He.current && (He.current.style.opacity = Ke > 0 ? "1" : "0"), Fe.current && qe && (Fe.current.textContent = `${(Ke/1e3).toFixed(1)}s`)
          }));
          return () => {
            ee()
          }
        }), [Xe, qe]), (0, Ue.jsxs)("div", {
          className: "QTETimedClick",
          ref: He,
          style: {
            ...null !== fe && {
              "--scale": fe
            },
            ...null !== Te && {
              "--rotation": `${Te}deg`
            }
          },
          children: [(0, Ue.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, Ue.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, Ue.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, Ue.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: Re,
                ref: be
              })]
            }), (0, Ue.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, Ue.jsx)(Me.e, {
                text: [{
                  icon: ke
                }],
                className: oe()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: pe
                })
              })
            })]
          }), (0, Ue.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, Ue.jsx)(Me.e, {
              text: Je,
              className: "QTETimedClickLabelText"
            }), qe && (0, Ue.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: Fe
            })]
          })]
        })
      })),
      qe = (0, ye.memo)((function(ee) {
        let {
          initialParameters: ie
        } = ee;
        const He = (0, ye.useRef)(null),
          be = (0, ye.useRef)(null),
          Fe = (0, ye.useRef)(null),
          Je = (0, ye.useRef)(!1),
          oe = ie.description,
          Re = null === ie || void 0 === ie ? void 0 : ie.icon,
          ke = (0, Ke.e)();
        return (0, ye.useEffect)((() => {
          const ee = ke.onFrame((() => {
            const ee = ke.getState();
            if (!ee.isActive) return;
            const ie = ee.state;
            if (He.current) {
              const ee = 100 * (ie.catchZonePosition - ie.iH / 2);
              He.current.style.left = `${ee}%`, He.current.style.width = 100 * ie.iH + "%", ie.isCatching !== Je.current && (Je.current = ie.isCatching, ie.isCatching ? He.current.classList.add("catching") : He.current.classList.remove("catching"))
            }
            be.current && (be.current.style.left = 100 * ie.moverPosition + "%"), Fe.current && (Fe.current.value = ie.progress)
          }));
          return () => {
            ee()
          }
        }), [ke]), (0, Ue.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, Ue.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, Ue.jsx)(Me.e, {
              text: oe
            })
          }), (0, Ue.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: Fe
          }), (0, Ue.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, Ue.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: He
            }), (0, Ue.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: be,
              children: (0, Ue.jsx)("span", {
                children: Re && (0, Ue.jsx)(Me.e, {
                  text: [{
                    icon: Re,
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
    var fe = He(610);
    const Te = (0, ye.memo)((function(ee) {
        let {
          initialParameters: ie
        } = ee;
        const He = (0, ye.useRef)(null),
          be = ie.label,
          Fe = ie.JH,
          {
            icon: Je,
            scale: oe,
            rotation: Re
          } = null !== ie && void 0 !== ie ? ie : {},
          ke = 100 * (.5 - Fe / 2),
          qe = 100 * Fe,
          Te = (0, Ke.e)();
        return (0, ye.useEffect)((() => {
          const ee = Te.onFrame((() => {
            const ee = Te.getState();
            if (!ee.isActive || !He.current) return;
            const ie = ee.state;
            He.current.style.left = 100 * ie.markerPosition + "%"
          }));
          return () => {
            ee()
          }
        }), [Te]), (0, Ue.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, fe.P)(oe) && {
              "--scale": oe
            },
            ...!(0, fe.P)(Re) && {
              "--rotation": `${Re}deg`
            }
          },
          children: [Je && (0, Ue.jsx)(Me.e, {
            text: [{
              icon: Je
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, Ue.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, Ue.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${ke}%`,
                width: `${qe}%`
              }
            }), (0, Ue.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: He
            })]
          }), (0, Ue.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, Ue.jsx)(Me.e, {
              text: be
            })
          })]
        })
      })),
      pe = (0, ye.memo)((function(ee) {
        let {
          initialParameters: ie
        } = ee;
        const He = (0, ye.useRef)(null),
          [be, Fe] = (0, ye.useState)((() => new Array(ie.RH).fill("pending"))),
          [Je, oe] = (0, ye.useState)((() => {
            const ee = ie.fH;
            return (0, fe.P)(ee) || ee <= 0 ? [] : new Array(ee).fill("pending")
          })),
          Re = ie.label,
          {
            icon: ke
          } = ie,
          qe = (0, ye.useRef)(0),
          Te = (0, ye.useRef)(0),
          pe = (0, ye.useRef)([]),
          Xe = (0, Ke.e)();
        return (0, ye.useEffect)((() => {
          const ee = Xe.onFrame((() => {
            const ee = Xe.getState();
            if (!ee.isActive || !He.current) return;
            const ie = ee.state,
              ye = 30 + 60 * ie.outerCircleProgress;
            if (He.current.setAttribute("r", String(ye)), !0 === ie.lastClickResult && ie.successes > qe.current) {
              He.current.classList.remove("QTERhythmClickOuterCircle--miss"), He.current.classList.add("QTERhythmClickOuterCircle--hit");
              const ee = setTimeout((() => {
                var ee;
                null === (ee = He.current) || void 0 === ee || ee.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              pe.current.push(ee)
            } else if (!1 === ie.lastClickResult && ie.misses > Te.current) {
              He.current.classList.remove("QTERhythmClickOuterCircle--hit"), He.current.classList.add("QTERhythmClickOuterCircle--miss");
              const ee = setTimeout((() => {
                var ee;
                null === (ee = He.current) || void 0 === ee || ee.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              pe.current.push(ee)
            }
            ie.successes === qe.current && ie.misses === Te.current || (qe.current = ie.successes, Te.current = ie.misses, Fe((ee => {
              const He = [...ee];
              for (let ye = 0; ye < ie.RH; ye++) He[ye] = ye < ie.successes ? "success" : "pending";
              return He
            })), oe((ee => {
              if (0 === ee.length) return ee;
              const He = [...ee];
              for (let ye = 0; ye < He.length; ye++) He[ye] = ye < ie.misses ? "miss" : "pending";
              return He
            })))
          }));
          return () => {
            ee();
            for (const ee of pe.current) clearTimeout(ee);
            pe.current = []
          }
        }), [Xe]), (0, Ue.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, Ue.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: be.map(((ee, ie) => (0, Ue.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === ee ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, ie)))
          }), (0, Ue.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, Ue.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, Ue.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, Ue.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: He
              })]
            }), ke && (0, Ue.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, Ue.jsx)(Me.e, {
                text: [{
                  icon: ke
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), Je.length > 0 && (0, Ue.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Je.map(((ee, ie) => (0, Ue.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === ee ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, ie)))
          }), (0, Ue.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, Ue.jsx)(Me.e, {
              text: Re
            })
          })]
        })
      }));

    function Xe(ee) {
      let {
        qte: ie
      } = ee;
      switch (ie.type) {
        case "progressBar":
          return (0, Ue.jsx)(Fe, {
            initialParameters: ie.parameters
          });
        case "timedClick":
          return (0, Ue.jsx)(ke, {
            initialParameters: ie.parameters
          });
        case "gravityBar":
          return (0, Ue.jsx)(qe, {
            initialParameters: ie.parameters
          });
        case "precisionBar":
          return (0, Ue.jsx)(Te, {
            initialParameters: ie.parameters
          });
        case "rhythmClick":
          return (0, Ue.jsx)(pe, {
            initialParameters: ie.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const ze = (0, ye.memo)((function() {
      const [ee, ie] = (0, ye.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, be.f)("qteStateUpdated", (ee => {
        ie(ee)
      })), ee.isActive && ee.type ? (0, Ue.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, Ue.jsx)(Xe, {
          qte: ee
        })
      }) : null
    }))
  },
  5252: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      e: () => Fe
    });
    var ye = He(59),
      be = He(1260),
      Me = He(5255);
    const Ke = {
        getState: () => Me.d.getCurrentState(),
        onFrame: be.q
      },
      Ue = (0, ye.createContext)(Ke);

    function Fe() {
      return (0, ye.useContext)(Ue)
    }
  },
  37138: (ee, ie, He) => {
    He.d(ie, {
      c: () => oe,
      f: () => ke
    });
    var ye = He(59),
      be = He(1340),
      Me = He(1127),
      Ke = He(1320),
      Ue = He(3865),
      Fe = He(5407),
      Je = He(1228);

    function oe(ee) {
      let {
        loading: ie,
        schematics: He,
        onSchematicPicked: ye,
        selectedSchematicIdList: be = [],
        disableAutoExport: Fe
      } = ee;
      const {
        t: oe
      } = (0, Me.v)();
      return (0, Je.jsxs)("div", {
        className: "SchematicList",
        children: [ie && (0, Je.jsx)(Ke.b, {}), !ie && 0 === He.length && (0, Je.jsx)("div", {
          className: "NoSchematicsText",
          children: oe("worldBuilder:noSavedSchematic")
        }), !ie && He.map((ee => (0, Je.jsx)(Ue.c, {
          source: {
            type: "schematic",
            schematic: ee
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            ye(ee)
          },
          isSelected: be.includes(ee.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: ee.isAutoExported && Fe,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, ee.schematicId)))]
      })
    }

    function Re(ee) {
      let {
        ownedSchematics: ie,
        currentWorldSchematicId: He,
        onClose: be
      } = ee;
      const {
        t: Ke
      } = (0, Me.v)(), [Ue, Re] = (0, ye.useState)(null);
      return (0, Je.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Ue && (0, Je.jsxs)(Je.Fragment, {
          children: [(0, Je.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Ke("worldBuilder:schematicList")
          }), (0, Je.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Ke("worldBuilder:clickSchematicForOptions")
          }), (0, Je.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Je.jsx)(oe, {
              loading: !1,
              schematics: ie,
              onSchematicPicked: ee => {
                Re(ee)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Ue && (0, Je.jsx)(Fe.i, {
          schematic: Ue,
          inSourceWorld: Ue.schematicId === He,
          onSchematicUpdate: ee => {
            Re(ee)
          },
          onClose: () => {
            Re(null), be()
          }
        })]
      })
    }

    function ke(ee) {
      let {
        ownedSchematics: ie,
        currentWorldSchematicId: He,
        onClose: ye
      } = ee;
      be.NotificationProvider.showCustomPopup({
        body: ee => (0, Je.jsx)(Re, {
          ownedSchematics: ie,
          currentWorldSchematicId: He,
          onClose: ee
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: ye,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37761: (ee, ie, He) => {
    He.d(ie, {
      d: () => ge,
      e: () => Ee
    });
    var ye = He(4607),
      be = He(1432),
      Me = He(59),
      Ke = He(7083),
      Ue = He(4603),
      Fe = He(1246),
      Je = He(1983),
      oe = He(1956),
      Re = He(1438),
      ke = He(1127),
      qe = He(37765),
      fe = He(1053),
      Te = He.n(fe),
      pe = He(1294),
      Xe = He(1323),
      ze = He(1215),
      Be = He(1228);
    const Ee = "SleepingOverlay";

    function ge() {
      const {
        t: ee
      } = (0, ke.v)(), [ie, He] = (0, Me.useState)(!1), [fe, ge] = (0, Me.useState)(null), [de, We] = (0, Me.useState)(1), [te, Ze] = (0, Me.useState)(!1), [we, De] = (0, Me.useState)(!1), Pe = (0, Me.useRef)(0), Ae = (0, Me.useRef)(!1), Ye = (0, Me.useRef)(!1), Ve = (0, Me.useRef)(), ae = (0, Me.useRef)(null);

      function ce() {
        const ee = null !== fe && void 0 !== fe ? fe : "Rested Speed";
        Je.gameBridge.send("wakeUp", we ? ee : null), ae.current = null, He(!1), ge(null), We(1), Ze(!1), De(!1)
      }

      function xe() {
        return !te && (ce(), !0)
      }
      return (0, be.f)("PlayerPhysicsTypeUpdate", (ee => {
        ee !== ae.current && (ae.current = ee, ee === Ke.s.SLEEPING ? (Ye.current || (Pe.current = Je.gameBridge.lookup("cameraZoom", null), Ye.current = !0), Ae.current = !0, Je.gameBridge.send("setCameraZoom", 3), He(!0), We(function() {
          for (const ee of Je.gameBridge.lookup("blocksStandingOn", null)) {
            if (qe.d.leafBeds.includes(ee)) return console.log(`Found leaf bed: ${ee}`), 1;
            if (qe.d.woolBeds.includes(ee)) return console.log(`Found woold bed: ${ee}`), 2;
            if (qe.d.strongBeds.includes(ee)) return console.log(`Found strong bed ${ee}`), 3
          }
          return 1
        }())) : (Ye.current = !1, He(!1), ge(null), We(1)))
      })), (0, Me.useEffect)((() => () => {
        (0, Fe.v)(Ee)
      }), []), (0, Me.useEffect)((() => {
        ie ? (0, Fe.w)(Ee) : ((0, Fe.v)(Ee), Ae.current && (Je.gameBridge.send("setCameraZoom", Pe.current), Ae.current = !1))
      }), [ie]), (0, ze.t)("overlay", Ve, xe, ie), (0, Be.jsx)(ye.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: ie,
        timeout: 300,
        nodeRef: Ve,
        unmountOnExit: !0,
        children: (0, Be.jsx)("div", {
          ref: Ve,
          onClick: ee => {
            xe() && ee.stopPropagation()
          },
          children: (0, Be.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Be.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Ue.l.map((ie => (0, Be.jsxs)(Oe, {
                restedEffect: ie,
                XJ: fe,
                setChosenRestedEffect: ge,
                children: [(0, Be.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Be.jsx)(oe.e, {
                    text: [{
                      icon: ie
                    }]
                  }), Ue.h[ie].shortName]
                }), (0, Be.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: ee(Ue.h[ie].description, {
                    time: Ue.h[ie].effectLevelDurations[de] / 6e4
                  })
                })]
              }, ie)))
            }), (0, Be.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Be.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Be.jsxs)(Re.c, {
                className: "SleepingOverlayWakeUpButton",
                onClick: ee => {
                  we ? ce() : (Ze(!0), (0, pe.bb)((() => {
                    Ze(!1), De(!0)
                  }), !0)), ee.stopPropagation()
                },
                loading: te,
                children: [!we && (0, Be.jsxs)(Be.Fragment, {
                  children: [(0, Be.jsx)(Xe.e, {
                    name: "film"
                  }), " ", ee("classicGame:watchAdToGetRestedPerk")]
                }), we && ee("classicGame:wakeUp")]
              }), (0, Be.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Be.jsx)("div", {
                  className: Te()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === de
                  }),
                  children: (0, Be.jsx)(oe.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Be.jsx)("div", {
                  className: Te()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === de
                  }),
                  children: (0, Be.jsx)(oe.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Be.jsx)("div", {
                  className: Te()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === de
                  }),
                  children: (0, Be.jsx)(oe.e, {
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
    const Oe = (0, Me.memo)((function(ee) {
      let {
        children: ie,
        restedEffect: He,
        XJ: ye,
        setChosenRestedEffect: be
      } = ee;
      return He === ye ? (0, Be.jsx)(Re.m, {
        onClick: ee => {
          ee.stopPropagation()
        },
        children: ie
      }) : (0, Be.jsx)(Re.e, {
        onClick: ee => {
          be(He), ee.stopPropagation()
        },
        children: ie
      })
    }))
  },
  5390: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1228);

    function Ue(ee) {
      let {
        columns: ie,
        rows: He,
        getRowKey: be,
        renderRow: Ue,
        className: Fe
      } = ee;
      return (0, Ke.jsxs)("table", {
        className: Me()("Table", Fe),
        children: [(0, Ke.jsx)("thead", {
          children: (0, Ke.jsx)("tr", {
            children: ie.map((ee => (0, Ke.jsx)("th", {
              children: ee.header
            }, ee.key)))
          })
        }), (0, Ke.jsx)("tbody", {
          children: He.map((ee => (0, Ke.jsx)(ye.Fragment, {
            children: Ue(ee)
          }, be(ee))))
        })]
      })
    }
  },
  37516: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      d: () => Ke,
      g: () => Ue,
      k: () => Fe
    });
    var ye = He(59),
      be = He(3416);
    const Me = 8,
      Ke = "InGameHeaderContainer",
      Ue = "TopRightElements";

    function Fe(ee) {
      const [ie] = (0, be.b)(), [He, Fe] = (0, ye.useState)(!1);
      return (0, ye.useLayoutEffect)((() => {
        if (!ee) return;
        const ie = document.querySelector(`.${Ke}`),
          He = document.querySelector(`.${Ue}`),
          ye = () => {
            const ye = ee.getBoundingClientRect(),
              be = ie ? ie.getBoundingClientRect().right : 0,
              Ke = He ? He.getBoundingClientRect().left : window.innerWidth,
              Ue = ye.left < be + Me,
              Je = ye.right > Ke - Me;
            Fe(Ue || Je)
          };
        ye();
        const be = new ResizeObserver(ye);
        return be.observe(ee), ie && be.observe(ie), He && be.observe(He), () => {
          be.disconnect()
        }
      }), [ee, ie]), He
    }
  },
  37563: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1674),
      Ue = He(1438),
      Fe = He(1320),
      Je = He(1323),
      oe = He(1228);

    function Re(ee) {
      let {
        label: ie,
        icon: He,
        placeholder: be,
        onSubmit: Re
      } = ee;
      const ke = (0, ye.useRef)(null),
        [qe, fe] = (0, ye.useState)(""),
        [Te, pe] = (0, ye.useState)("Enter"),
        [Xe, ze] = (0, ye.useState)(null);
      (0, ye.useEffect)((() => {
        if ("Success" !== Te && "Error" !== Te) return;
        const ee = setTimeout((() => {
          "Success" === Te && ke.current && (ke.current.value = "", fe("")), pe("Enter")
        }), "Success" === Te ? 1e3 : 4e3);
        return () => {
          clearTimeout(ee)
        }
      }), [Te]);
      const Be = () => {
        const ee = qe.trim();
        "" !== ee && "Enter" === Te && (pe("Loading"), Re(ee).then((ee => {
          ke.current && ("error" in ee ? null === ee.error ? pe("Enter") : (ze(ee.error), pe("Error")) : pe("Success"))
        })))
      };
      return (0, oe.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: ee => {
          ee.target === ke.current && "Escape" !== ee.key && ee.stopPropagation()
        },
        children: [(0, oe.jsxs)("div", {
          className: Me()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Te}`),
          children: ["Loading" === Te && (0, oe.jsx)(Fe.b, {}), "Success" === Te && (0, oe.jsx)(Je.e, {
            name: "check"
          }), "Error" === Te && Xe]
        }), (0, oe.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, oe.jsx)(Ke.d, {
            className: "PlayerSearchInput",
            domRef: ke,
            maxLength: 32,
            placeholderText: be,
            ariaLabel: be,
            stopPropagation: !1,
            onValueChange: ee => {
              fe(ee)
            },
            onEnter: Be
          }), (0, oe.jsxs)(Ue.c, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Te || "" === qe.trim(),
            onClick: Be,
            children: [(0, oe.jsx)(Je.e, {
              name: He
            }), " ", ie]
          })]
        })]
      })
    }
  },
  37547: (ee, ie, He) => {
    He.d(ie, {
      b: () => Re
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1127),
      Ue = He(1323),
      Fe = He(1228);
    const Je = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      oe = ["unlisted", "public", "whitelist", "private"];

    function Re(ee) {
      let {
        visibility: ie,
        onPick: He
      } = ee;
      const {
        t: be
      } = (0, Ke.v)(), Re = (0, ye.useRef)([]);
      return (0, Fe.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": be("worldSocial:whoCanJoin"),
        children: oe.map(((ee, ye) => {
          const Ke = ee === ie;
          return (0, Fe.jsxs)("button", {
            ref: ee => {
              Re.current[ye] = ee
            },
            type: "button",
            className: Me()("WorldSocialTile", {
              WorldSocialTileSelected: Ke
            }),
            "aria-pressed": Ke,
            tabIndex: Ke ? 0 : -1,
            onKeyDown: ee => {
              ((ee, ie) => {
                const He = "ArrowRight" === ee.key || "ArrowDown" === ee.key ? 1 : "ArrowLeft" === ee.key || "ArrowUp" === ee.key ? -1 : 0;
                var ye;
                0 !== He && (ee.preventDefault(), null === (ye = Re.current[(ie + He + oe.length) % oe.length]) || void 0 === ye || ye.focus())
              })(ee, ye)
            },
            onClick: () => {
              He(ee)
            },
            children: [(0, Fe.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Fe.jsx)(Ue.e, {
                name: Je[ee]
              })
            }), (0, Fe.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Fe.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: be(`worldSocial:${ee}`)
              }), (0, Fe.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: be(`worldSocial:${ee}Description`)
              })]
            })]
          }, ee)
        }))
      })
    }
  },
  37558: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue
    });
    var ye = He(1127),
      be = He(2808),
      Me = He(4729),
      Ke = He(1228);

    function Ue(ee) {
      let {
        YR: ie,
        children: He,
        ...Ue
      } = ee;
      const {
        t: Fe
      } = (0, ye.v)();
      return (0, Ke.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          ie.onChange(!ie.on)
        },
        children: (0, Ke.jsx)(be.f, {
          ...Ue,
          opensProfileCard: !1,
          children: (0, Ke.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: ee => {
              ee.stopPropagation()
            },
            children: [He, (0, Ke.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, Ke.jsx)(Me.d, {
                checked: ie.on,
                disabled: !1,
                ariaLabel: Fe("worldSocial:letJoin", {
                  playerName: Ue.playerSocialPreview.name
                }),
                onChange: ee => {
                  ie.onChange(ee.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37540: (ee, ie, He) => {
    He.d(ie, {
      e: () => fe
    });
    var ye = He(59),
      be = He(1127),
      Me = He(1913),
      Ke = He(97),
      Ue = He(18),
      Fe = He(1464),
      Je = He(2841),
      oe = He(34767),
      Re = He(1438),
      ke = He(1323),
      qe = He(1228);

    function fe(ee) {
      let {
        worldCode: ie,
        message: He
      } = ee;
      const {
        t: fe
      } = (0, be.v)(), {
        isTouchScreen: Te
      } = (0, Ue.m)(["isTouchScreen"]), pe = Ke.featureFlags.canUseInviteLinks, Xe = (0, oe.d)(pe && null === He), [ze, Be] = (0, Je.i)(), Ee = (0, ye.useRef)(null);
      if (null !== He) return (0, qe.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, qe.jsx)(ke.e, {
          name: "lock"
        }), (0, qe.jsx)("span", {
          children: He
        })]
      });
      const ge = pe ? Xe : ie,
        Oe = Te && pe && (0, Je.b)();
      return (0, qe.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!pe && (0, qe.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: fe("worldSocial:worldCode")
        }), (0, qe.jsx)("input", {
          ref: Ee,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== ge && void 0 !== ge ? ge : "",
          "aria-label": fe(pe ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: ee => {
            ee.currentTarget.select()
          }
        }), (0, qe.jsxs)(Re.c, {
          className: "WorldSocialCopy",
          disabled: null === ge,
          onClick: () => {
            null !== ge && (0, Je.e)(ge, {
              useShareSheet: Oe,
              onOutcome: ee => {
                if ((0, Fe.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== ee || pe ? ee : "code"
                  }), "copied" === ee) Be();
                else if ("failed" === ee) {
                  var ie;
                  null === (ie = Ee.current) || void 0 === ie || ie.focus(), Me.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, qe.jsx)(ke.e, {
            name: ze ? "check" : Oe ? "up-from-bracket" : "copy"
          }), " ", fe(ze ? "general:copied" : Oe ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37550: (ee, ie, He) => {
    He.d(ie, {
      d: () => qe,
      g: () => ke,
      k: () => Re
    });
    var ye = He(602),
      be = He(1127),
      Me = He(1625),
      Ke = He(2808),
      Ue = He(2749),
      Fe = He(1438),
      Je = He(37558),
      oe = He(1228);

    function Re(ee, ie) {
      var He;
      return {
        isError: !1,
        name: ee,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== ie && void 0 !== ie ? ie : {},
        nameColour: null !== (He = null === ie || void 0 === ie ? void 0 : ie.nameColour) && void 0 !== He ? He : ye.d,
        location: {
          status: "offline"
        }
      }
    }

    function ke(ee) {
      let {
        player: ie,
        isFriend: He = !1,
        status: ye,
        showLocation: Fe = void 0 === ye,
        YR: Re,
        onSendFriendRequest: ke,
        actions: qe,
        zIndex: fe
      } = ee;
      const {
        t: Te
      } = (0, be.v)();
      let pe = ye;
      null !== Re && void 0 !== Re && Re.on && (pe = (0, oe.jsxs)(oe.Fragment, {
        children: [null !== ye && void 0 !== ye ? ye : (0, oe.jsx)(Ue.d, {
          socialPreview: ie
        }), (0, oe.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Te("worldSocial:canJoin")]
        })]
      }));
      const Xe = {
        playerSocialPreview: ie,
        isFriend: He,
        hideFriendBadge: !0,
        onFriendRemoved: He ? ee => {
          Me.b.removeFriendFromState(ee)
        } : void 0,
        status: pe,
        showLocation: Fe,
        onSendFriendRequest: ke,
        zIndex: fe
      };
      return Re ? (0, oe.jsx)(Je.e, {
        ...Xe,
        YR: Re,
        children: qe
      }) : (0, oe.jsx)(Ke.f, {
        ...Xe,
        opensProfileCard: !1,
        children: qe || void 0
      })
    }

    function qe(ee) {
      let {
        row: ie,
        YR: He,
        canInvite: ye,
        invited: Me,
        onInvite: Ke,
        zIndex: Ue
      } = ee;
      const {
        t: Je
      } = (0, be.v)(), Re = "online" === ie.place ? Fe.c : Fe.e;
      return (0, oe.jsx)(ke, {
        player: ie.friend,
        isFriend: !0,
        status: "here" === ie.place ? Je("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        YR: He,
        zIndex: Ue,
        actions: ye && (0, oe.jsx)(Re, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Me,
          onClick: Ke,
          ariaLabel: `${Je("worldSocial:invite")} ${ie.friend.name}`,
          children: Je(Me ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37535: (ee, ie, He) => {
    He.d(ie, {
      d: () => Fe,
      e: () => Ke,
      h: () => Je
    });
    var ye = He(59),
      be = He(4974),
      Me = He(1913);

    function Ke(ee) {
      const ie = {
        lobbyName: ee,
        answer: null,
        response: be.c.getSocialSettings(ee)
      };
      return ie.response.then((ee => {
        ie.answer = ee
      })), ie
    }
    const Ue = new Map;

    function Fe(ee) {
      Ue.set(ee.lobbyName, ee)
    }

    function Je(ee) {
      const [ie] = (0, ye.useState)((() => function(ee) {
        var ie;
        const He = null !== (ie = Ue.get(ee)) && void 0 !== ie ? ie : null;
        return null !== He && void 0 !== He && He.answer && "error" in He.answer ? null : He
      }(ee))), [He, Ke] = (0, ye.useState)((() => null !== ie && void 0 !== ie && ie.answer && "settings" in ie.answer ? ie.answer.settings : null)), [Fe, Je] = (0, ye.useState)(!0), [oe, Re] = (0, ye.useState)(null !== He), ke = (0, ye.useRef)(He);
      ke.current = He;
      const qe = (0, ye.useRef)(0),
        fe = (0, ye.useRef)(0),
        Te = (0, ye.useRef)(!1),
        pe = (0, ye.useRef)(!0),
        Xe = (0, ye.useCallback)((async ie => {
          const He = ++qe.current,
            ye = await (null !== ie && void 0 !== ie ? ie : be.c.getSocialSettings(ee));
          pe.current && He === qe.current && (Re(!0), Je(!1), "error" in ye || Ke(ye.settings))
        }), [ee]),
        ze = (0, ye.useCallback)((() => {
          Je(!0), Xe()
        }), [Xe]),
        Be = (0, ye.useCallback)((() => {
          fe.current > 0 ? Te.current = !0 : Xe()
        }), [Xe]);
      (0, ye.useEffect)((() => (pe.current = !0, Ue.delete(ee), Je(!0), Xe(null === ie || void 0 === ie ? void 0 : ie.response), () => {
        pe.current = !1
      })), [Xe, ee, ie]);
      const Ee = ee => {
        qe.current++, Je(!1), ke.current = ee, Ke(ee)
      };
      return {
        settings: He,
        loading: Fe,
        answered: oe,
        retry: ze,
        refresh: Be,
        change: async function(ie, He) {
          let {
            quiet: ye = !1,
            onAnswer: Ke
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const Ue = ke.current;
          if (null === Ue) return !1;
          Ee(He(Ue)), fe.current > 0 && (Te.current = !0), fe.current++;
          const Fe = await be.c.setSocialSettings(ee, ie);
          fe.current--;
          const Je = !("error" in Fe);
          if (!pe.current) return Je;
          if (null === Ke || void 0 === Ke || Ke(Fe), ye);
          else if ("error" in Fe) Me.f.showMessage({
            translationKey: Fe.error
          });
          else
            for (const ee of Fe.notFound) Me.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: ee
              }
            });
          if (fe.current > 0) return Je;
          const oe = Te.current;
          return Te.current = !1, !oe && "settings" in Fe ? Ee(Fe.settings) : (oe || Ee(Ue), Xe()), Je
        }
      }
    }
  },
  37570: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      d: () => Me
    });
    var ye = He(153);
    const be = new Map;

    function Me(ee, ie) {
      var He;
      const ye = null !== (He = be.get(ee)) && void 0 !== He ? He : new Map;
      ye.set(ie, Date.now()), be.set(ee, ye)
    }

    function Ke(ee) {
      const ie = be.get(ee);
      if (!ie) return [];
      const He = Date.now();
      for (const [be, Me] of ie) He - Me >= ye.n && ie.delete(be);
      return [...ie.keys()]
    }
  },
  37537: (ee, ie, He) => {
    function ye(ee, ie) {
      const He = ie.toLowerCase();
      for (const ye of ee)
        if (ye.toLowerCase() === He) return !0;
      return !1
    }

    function be(ee, ie, He) {
      const be = [],
        Me = [],
        Ke = [];
      for (const Ue of ee) !Ue.isError && Ue.name && ("inGame" === Ue.location.status && Ue.location.inLobbyName === ie || ye(He, Ue.name) ? Me.push({
        friend: Ue,
        place: "here"
      }) : "offline" === Ue.location.status ? Ke.push({
        friend: Ue,
        place: "offline"
      }) : be.push({
        friend: Ue,
        place: "online"
      }));
      return [...be, ...Me, ...Ke]
    }

    function Me(ee, ie, He) {
      const be = [],
        Me = ee.flatMap((ee => "here" === ee.place ? [ee.friend.name] : []));
      for (const Ke of [...Me, ...ie]) ye(be, Ke) || ye(He, Ke) || be.push(Ke);
      return be
    }

    function Ke(ee, ie) {
      return null === ee || void 0 === ee || !ee.canManage || ye(ee.whitelist, ie) ? "none" : "whitelist" === ee.visibility ? "required" : "quiet"
    }

    function Ue(ee) {
      if (null === ee) return !0;
      const {
        visibility: ie
      } = ee;
      return "public" === ie || "unlisted" === ie || "whitelist" === ie && ee.canManage
    }

    function Fe(ee, ie, He) {
      if (He) {
        const He = ie.filter((ie => !ye(ee.whitelist, ie)));
        return {
          ...ee,
          whitelist: [...ee.whitelist, ...He]
        }
      }
      return {
        ...ee,
        whitelist: ee.whitelist.filter((ee => !ye(ie, ee)))
      }
    }

    function Je(ee, ie) {
      const He = [];
      for (let ye = 0; ye < ee.length; ye += ie) He.push(ee.slice(ye, ye + ie));
      return He
    }
    He.d(ie, {
      c: () => Ue,
      d: () => Me,
      g: () => be,
      h: () => ye,
      i: () => Je,
      l: () => Ke,
      o: () => Fe
    })
  },
  9476: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      g: () => Me
    });
    var ye = He(2054);
    const be = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Me = ee => "string" === typeof ee.icon && "" !== ee.icon && "string" === typeof ee.keycode && be.test(ee.keycode),
      Ke = ee => "Space" === ee ? "_" : ye.k[ee]
  },
  9521: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(18);

    function be() {
      return !ye.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9529: (ee, ie, He) => {
    He.d(ie, {
      A: () => ke,
      E: () => qe,
      e: () => Me,
      g: () => Ue,
      i: () => Je,
      m: () => Fe,
      p: () => Ke,
      q: () => be,
      s: () => ye,
      u: () => fe,
      x: () => Re,
      z: () => oe
    });
    const ye = 14,
      be = 6,
      Me = (ye + be) / 2,
      Ke = 200,
      Ue = Ke / 2,
      Fe = Ke / 2 - 1,
      Je = be / ye * (Ke / 2),
      oe = (ee, ie) => -Math.PI / 2 + 2 * ee * Math.PI / ie,
      Re = (ee, ie, He) => {
        const ye = 2 * Math.PI / He;
        return (Math.round((Math.atan2(ie, ee) + Math.PI / 2) / ye) % He + He) % He
      },
      ke = .5,
      qe = (ee, ie, He) => Math.hypot(ee.x, ee.y) < ke ? He : Re(ee.x, ee.y, ie),
      fe = (ee, ie, He, ye, be) => {
        const Me = Math.PI / ie,
          Ke = oe(ee, ie),
          Ue = Ke - Me,
          Fe = Ke + Me,
          Je = (ee, ie) => `${He+ee*Math.cos(ie)} ${He+ee*Math.sin(ie)}`;
        return [`M ${Je(ye,Ue)}`, `L ${Je(be,Ue)}`, `A ${be} ${be} 0 0 1 ${Je(be,Fe)}`, `L ${Je(ye,Fe)}`, `A ${ye} ${ye} 0 0 0 ${Je(ye,Ue)}`, "Z"].join(" ")
      }
  },
  37739: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me
    });
    var ye = He(18),
      be = He(1294);

    function Me() {
      const {
        clientEscMenuOptions: ee
      } = (0, ye.m)(["clientEscMenuOptions"]);
      return (0, be.x)() && ee.showChat
    }
  },
  9566: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(59),
      be = He(9505),
      Me = He(2532);

    function Ke() {
      const ee = (0, Me.i)("shopInfo"),
        [, ie] = (0, ye.useReducer)((ee => ee + 1), 0);
      return (0, Me.g)("shopInfo", ie), !(0, be.b)(ee)
    }
  },
  37838: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(59),
      be = He(2532);

    function Me() {
      const ee = (0, be.i)("lobbyLeaderboardInfo");
      return (0, ye.useMemo)((() => function(ee) {
        if (null === ee) return null;
        const ie = Object.entries(ee),
          He = ie.filter((ee => {
            let [, ie] = ee;
            return void 0 !== ie
          }));
        if (He.length === ie.length) return ee;
        const ye = Object.fromEntries(He),
          be = Object.keys(ee).filter((ee => !Object.hasOwn(ye, ee)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${be.join(", ")}`), ye
      }(ee)), [ee])
    }
  },
  37657: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe
    });
    var ye = He(2969),
      be = He(4075),
      Me = He(3142);
    const Ke = ["Unable to create vertex buffer"];
    let Ue = {};

    function Fe(ee, ie) {
      const He = new Date;
      console.error(`${He.getUTCHours()}:${He.getUTCMinutes()}:${He.getUTCSeconds()}`, ee, ie, null === ie || void 0 === ie ? void 0 : ie.stack), Ke.includes(null === ie || void 0 === ie ? void 0 : ie.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, ye.e)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${ie.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, Me.logError)("warning", `${ee}\n ${ie} "\n" ${null===ie||void 0===ie?void 0:ie.stack}`);
      const be = ee + ie + (null === ie || void 0 === ie ? void 0 : ie.stack);
      be in Ue || ((0, Me.logError)("error", `${ee}\n ${ie} "\n" ${null===ie||void 0===ie?void 0:ie.stack}`), Ue[be] = !0)
    }(0, be.onGameReset)((() => {
      Ue = {}
    }))
  },
  5319: (ee, ie, He) => {
    He.d(ie, {
      e: () => ae,
      g: () => Ve
    });
    var ye = He(5326),
      be = He(335);
    const Me = 120,
      Ke = 260,
      Ue = 1.15,
      Fe = 1.2,
      Je = 2,
      oe = 1.08,
      Re = .8,
      ke = .95,
      qe = 8,
      fe = "[\"')\\]\u300d\u300f\uff09]*",
      Te = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${fe}$`),
      pe = new RegExp(`[?\uff1f]${fe}$`),
      Xe = new RegExp(`[!\uff01]${fe}$`),
      ze = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Be = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Ee = new RegExp(`[${Be}]`),
      ge = new RegExp(`[${Be}]|[^${Be}]+`, "g"),
      Oe = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function de(ee) {
      let ie = 2166136261;
      for (let He = 0; He < ee.length; He++) ie ^= ee.charCodeAt(He), ie = Math.imul(ie, 16777619);
      return (ie >>> 0) / 4294967295 * 2 - 1
    }

    function We(ee) {
      var ie;
      if (Ee.test(ee)) return 1;
      const He = ee.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        ye = He.replace(/[^0-9]/g, "");
      if (ye.length > 0 && !/\p{L}/u.test(He)) return Math.min(ye.length, 4);
      const be = null !== (ie = He.match(Oe)) && void 0 !== ie ? ie : [];
      if (0 === be.length) {
        var Me, Ke;
        const ee = null !== (Me = null === (Ke = He.match(/\p{L}/gu)) || void 0 === Ke ? void 0 : Ke.length) && void 0 !== Me ? Me : 0;
        return 0 === ee ? 0 : Math.min(Math.max(1, Math.round(ee / 2.5)), qe)
      }
      const Ue = He.replace(/[^\p{L}]/gu, ""),
        Fe = be.length > 1 && "e" === be.at(-1) && Ue.endsWith("e") && !Ue.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(ee.replace(/[^\p{L}]/gu, ""));
      return Math.min(be.length - (Fe ? 1 : 0), qe)
    }

    function te(ee) {
      return ee.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Ze(ee) {
      const ie = ee.replace(/[^\p{L}]/gu, "");
      return ie.length >= 2 && ie === ie.toUpperCase() && ie !== ie.toLowerCase()
    }

    function we(ee, ie) {
      var He;
      const qe = ie && (0, ye.l)(ie),
        fe = null !== (He = null === qe || void 0 === qe ? void 0 : qe.syllableMs) && void 0 !== He ? He : ye.d,
        Be = function(ee) {
          const ie = [];
          for (const ye of (0, be.kc)(ee))
            if ("string" === typeof ye)
              for (const ee of ye.split(/(\s+)/)) {
                if ("" === ee) continue;
                if (/^\s+$/.test(ee)) {
                  ie.push({
                    kind: "space",
                    text: ee
                  });
                  continue
                }
                if (!Ee.test(ee)) {
                  ie.push({
                    kind: "word",
                    text: ee,
                    delayMs: 0
                  });
                  continue
                }
                let ye = !0;
                for (const be of null !== (He = ee.match(ge)) && void 0 !== He ? He : []) {
                  var He;
                  const ee = ie.at(-1);
                  ye || "word" !== (null === ee || void 0 === ee ? void 0 : ee.kind) || Ee.test(be) || /[\p{L}\p{N}]/u.test(be) ? (ye || ie.push({
                    kind: "space",
                    text: "\u200b"
                  }), ie.push({
                    kind: "word",
                    text: be,
                    delayMs: 0
                  }), ye = !1) : ee.text += be
                }
              } else ie.push({
                kind: "icon",
                text: ye.icon,
                delayMs: 0
              });
          return ie
        }(ee),
        Oe = [];
      let we = [];
      for (const ye of Be) "space" !== ye.kind && (we.push(ye), Te.test(ye.text) && (Oe.push(we), we = []));
      Oe.push(we);
      const De = [];
      let Pe = 0;
      for (const ye of Oe) {
        var Ae, Ye;
        const ee = null !== (Ae = null === (Ye = ye.at(-1)) || void 0 === Ye ? void 0 : Ye.text) && void 0 !== Ae ? Ae : "",
          ie = pe.test(ee),
          He = Xe.test(ee),
          be = ye.map((ee => "word" === ee.kind ? We(ee.text) : 1)),
          Be = be.findLastIndex((ee => ee > 0));
        for (const [pe, Xe] of ye.entries()) {
          const ee = "word" === Xe.kind,
            ye = be[pe];
          Xe.delayMs = Pe;
          for (let be = 0; qe && be < ye; be++) {
            const {
              intonation: Me
            } = qe;
            let Ke = Be > 0 ? -Me.declineSemitones * (pe / Be) : 0;
            Ke += de(`${te(Xe.text)}|${be}`) * Me.variationSemitones;
            const Te = Math.min(1, Me.variationSemitones);
            let ze = qe.glideSemitones,
              Ee = 1;
            He && (Ke += Me.exclaimLiftSemitones, Ee *= Ue), ie && pe === Be && (Ke += Me.questionRiseSemitones * (ye > 1 ? .5 + .5 * be / (ye - 1) : 1), be === ye - 1 && (ze = Math.abs(ze) + Me.questionRiseSemitones / 2)), ee && Ze(Xe.text) && (Ke += Je * Te, Ee *= Fe), ye > 1 && 0 === be && (Ke += Re * Te, Ee *= oe), De.push({
              atMs: Pe + be * fe,
              semitones: Ke,
              glideSemitones: ze,
              durationMs: be < ye - 1 ? Math.min(qe.durationMs, fe * ke) : qe.durationMs,
              level: Ee
            })
          }
          Pe += ye * fe + (Te.test(Xe.text) ? Ke : ze.test(Xe.text) ? Me : 0)
        }
      }
      return {
        pieces: Be.map((ee => "space" === ee.kind ? ee : "icon" === ee.kind ? {
          kind: "icon",
          icon: ee.text,
          delayMs: ee.delayMs
        } : {
          kind: "word",
          text: ee.text,
          delayMs: ee.delayMs
        })),
        blips: De
      }
    }
    var De = He(1127),
      Pe = He(1196),
      Ae = He(1988);

    function Ye(ee) {
      if ("string" === typeof ee) return ee;
      const ie = Pe.f.get().getCurrentLanguageCode();
      return (0, De.o)(ie, ee.translationKey, (0, De.m)(ee.params, Ae.c.shown))
    }

    function Ve(ee) {
      const ie = void 0 === ee.voice ? null : (0, ye.n)(ee.voice),
        He = ie && (0, ye.l)(ie);
      return {
        plan: we(Ye(ee.line), He),
        synth: He
      }
    }

    function ae(ee) {
      const ie = [];
      let He = [];
      for (const [be, Me] of ee.entries()) {
        var ye;
        "space" === Me.kind && (" " !== Me.text || "icon" !== (null === (ye = ee[be + 1]) || void 0 === ye ? void 0 : ye.kind)) ? (He.length > 0 && ie.push(He), ie.push([Me]), He = []) : He.push(Me)
      }
      return He.length > 0 && ie.push(He), ie
    }
  },
  37509: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    const ye = [{
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

    function be(ee, ie, He) {
      const be = Math.abs(ee - ie),
        Me = Date.now() - He;
      for (const Ke of ye)
        if (ee < Ke.maxDist) return be >= Ke.hardUpdateDist || Me > Ke.timeBetweenSoftChecks && be >= Ke.softUpdateDist;
      return !1
    }
  },
  37813: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re,
      g: () => ke
    });
    var ye = He(610),
      be = He(35),
      Me = He(37775);
    const Ke = "replayFileKeptForReload",
      Ue = "replayFileKeptForReloadAt",
      Fe = "replayFileKeptForReloadTab",
      Je = 3e5,
      oe = 5e3;
    async function Re(ee, ie) {
      const He = Date.now(),
        Me = {
          at: He,
          bytes: ee,
          source: ie
        },
        Je = await Promise.race([(async () => await be.e.setItem(Ue, He) && be.e.setItem(Ke, Me))(), (0, ye.U)(oe).then((() => !1))]);
      Je || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const Re = {
        at: He,
        KR: Je
      };
      be.m.setItem(Fe, Re)
    }
    async function ke() {
      var ee;
      const ie = be.m.getItem(Fe);
      null !== ie && be.m.removeItem(Fe);
      const He = Date.now(),
        ye = await be.e.getItem(Ue),
        oe = null !== ie && He - ie.at <= Je,
        Re = null !== ie && ye === ie.at;
      let ke = null;
      if (null !== ye && (Re || ("number" !== typeof ye || He - ye > Je)) && (ke = oe && Re && ie.KR ? await be.e.getItem(Ke) : null, await Promise.all([be.e.removeItem(Ue), be.e.removeItem(Ke)])), !oe) return null;
      if ((null === (ee = ke) || void 0 === ee ? void 0 : ee.at) !== ie.at) throw new Error(Me.d.replayNotKept.text);
      return {
        bytes: ke.bytes,
        source: ke.source
      }
    }
  },
  37807: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      g: () => Me,
      j: () => be
    });
    const ye = [9];

    function be(ee) {
      return ye.includes(ee)
    }

    function Me(ee) {
      return null !== ee && ee >= 3 && ee < ye[0]
    }
  },
  37780: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      f: () => Me,
      g: () => be
    });
    const ye = [.25, .5, 1, 2, 4, 8, 16];

    function be(ee, ie) {
      const He = ye;
      let be = He.indexOf(ee);
      return -1 === be && (be = He.findIndex((ie => ie >= ee)), -1 === be && (be = He.length - 1)), "up" === ie ? He[Math.min(be + 1, He.length - 1)] : He[Math.max(be - 1, 0)]
    }

    function Me(ee) {
      return ee <= ye[0]
    }

    function Ke(ee) {
      return ee >= ye[ye.length - 1]
    }
  },
  37825: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye,
      d: () => be
    });
    const ye = "data-replay-ui-active",
      be = [{
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
  37828: (ee, ie, He) => {
    He.d(ie, {
      e: () => Je,
      h: () => Re,
      i: () => oe
    });
    var ye = He(18),
      be = He(27),
      Me = He(37825);

    function Ke() {
      const ee = {};
      for (const {
          group: ie
        }
        of Me.d) ee[ie] = !0;
      return ee
    }
    let Ue = Ke();

    function Fe() {
      be.h.yR("replayViewer|uiVisibilityChanged")
    }

    function Je() {
      return Ue
    }

    function oe(ee, ie) {
      Ue[ee] !== ie && (Ue = {
        ...Ue,
        [ee]: ie
      }, "nametag" === ee && ye.e.set({
        areNametagsHidden: !ie
      }), Fe())
    }

    function Re() {
      Ue = Ke(), ye.e.set({
        areNametagsHidden: !1
      }), Fe()
    }
  },
  9469: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      e: () => Ke,
      i: () => Ue,
      j: () => be
    });
    var ye = He(9476);
    const be = ee => {
        const ie = [];
        ee.holdingGun && ie.push({
          kind: "reload"
        }), ee.touchscreenActionButton && ie.push({
          kind: "touchButton",
          label: ee.touchscreenActionButton
        });
        for (const Me of null !== (He = null === (be = ee.customButtons) || void 0 === be ? void 0 : be.filter(ye.g)) && void 0 !== He ? He : []) {
          var He, be;
          ie.push({
            kind: "customButton",
            id: Me.id,
            icon: Me.icon,
            description: Me.description
          })
        }
        return ie
      },
      Me = ee => ee.length >= 2,
      Ke = ee => "specialAction" !== ee.kind,
      Ue = (ee, ie) => {
        if (null === ee || null === ie) return ee === ie;
        if (ee.kind !== ie.kind) return !1;
        switch (ee.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return ee.action === ie.action;
          case "customButton":
            return ee.id === ie.id && ee.icon === ie.icon;
          case "touchButton":
            return ee.label === ie.label
        }
      }
  },
  9461: (ee, ie, He) => {
    He.d(ie, {
      b: () => oe,
      c: () => qe,
      f: () => Re,
      i: () => fe
    });
    var ye = He(59),
      be = He(27),
      Me = He(1432),
      Ke = He(9469),
      Ue = He(9483);
    let Fe = null;
    const Je = () => Fe,
      oe = ee => {
        (0, Ke.i)(Fe, ee) || (Fe = ee, be.h.yR(Ue.g, Fe))
      },
      Re = () => {
        const [ee, ie] = (0, ye.useState)(Je);
        return (0, Me.f)(Ue.g, ie), ee
      };
    let ke = !1;
    const qe = ee => {
        ee !== ke && (ke = ee, be.h.yR(Ue.h, ee))
      },
      fe = () => {
        const [ee, ie] = (0, ye.useState)(ke);
        return (0, Me.f)(Ue.h, ie), ee
      }
  },
  9483: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      g: () => ye,
      h: () => be,
      k: () => Ue,
      o: () => Fe,
      q: () => Je,
      s: () => Ke
    });
    const ye = "controllerActionHintChanged",
      be = "controllerActionWheelHintChanged",
      Me = "controllerOpenChat",
      Ke = "controllerSneakToggledChanged",
      Ue = "controllerAttackLatchedChanged",
      Fe = "controllerDropStackHoldChanged",
      Je = "controllerPickBlockHintChanged"
  },
  9428: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      e: () => Me,
      h: () => Fe,
      j: () => Ue
    });
    var ye = He(1432),
      be = He(1403);
    const Me = "controllerInventoryCursorChanged",
      Ke = {
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
      Ue = () => {
        var ee, ie;
        return (0, ye.j)(Me, null !== (ee = null === (ie = (0, be.f)()) || void 0 === ie ? void 0 : ie.getInventoryCursorState()) && void 0 !== ee ? ee : Ke)
      },
      Fe = () => {
        var ee, ie;
        return null !== (ee = null === (ie = (0, be.f)()) || void 0 === ie ? void 0 : ie.isPadSteppingSlots()) && void 0 !== ee && ee
      }
  },
  9426: (ee, ie, He) => {
    He.d(ie, {
      d: () => ke,
      e: () => Ue,
      i: () => Fe,
      m: () => Ke,
      o: () => Me,
      r: () => oe,
      u: () => Re
    });
    let ye = null;
    const be = new Set,
      Me = ee => (ye = ee, () => {
        if (ye === ee) {
          ye = null;
          for (const ee of be) ee()
        }
      }),
      Ke = ee => (be.add(ee), () => {
        be.delete(ee)
      }),
      Ue = () => ye,
      Fe = () => null !== ye;
    let Je = null;
    const oe = ee => {
        Je = ee
      },
      Re = () => {
        const ee = Je;
        return Je = null, ee
      },
      ke = (ee, ie) => {
        var He, ye;
        return null !== (He = null !== (ye = ee.find((ee => ee.element === ie))) && void 0 !== ye ? ye : ee.find((ee => ee.element.contains(ie)))) && void 0 !== He ? He : null
      }
  },
  9430: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      g: () => Ke
    });
    var ye = He(59);
    const be = new WeakMap,
      Me = ee => {
        var ie, He;
        return null !== (ie = null === (He = be.get(ee)) || void 0 === He ? void 0 : He.current) && void 0 !== ie ? ie : null
      },
      Ke = (ee, ie) => {
        const He = (0, ye.useRef)(ie);
        He.current = ie;
        const Me = (0, ye.useRef)(null);
        (0, ye.useEffect)((() => {
          const ie = ee.current,
            ye = Me.current;
          ie !== ye && (ye && be.get(ye) === He && be.delete(ye), Me.current = ie, ie && be.set(ie, He))
        })), (0, ye.useEffect)((() => () => {
          const ee = Me.current;
          ee && be.get(ee) === He && be.delete(ee), Me.current = null
        }), [])
      }
  },
  9555: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      g: () => Je,
      h: () => Re,
      l: () => oe,
      m: () => Fe,
      n: () => qe
    });
    var ye = He(27),
      be = He(2068),
      Me = He(1403),
      Ke = He(1385);
    const Ue = ee => {
        var ie, He;
        return (0, Ke.n)() && null !== (ie = null === (He = (0, Me.f)()) || void 0 === He ? void 0 : He.getGlyphForNoaAction(ee)) && void 0 !== ie ? ie : null
      },
      Fe = "controllerGlyph:",
      Je = ee => {
        var ie, He;
        return null !== (ie = null === (He = (0, Me.f)()) || void 0 === He ? void 0 : He.getPadGlyphIconName(ee)) && void 0 !== ie ? ie : `${Fe}xbox/${ee}`
      },
      oe = ee => ee.startsWith(Fe),
      Re = ee => {
        var ie, He;
        return oe(ee) && null !== (ie = null === (He = (0, Me.f)()) || void 0 === He ? void 0 : He.getPadGlyphIconUrl(ee)) && void 0 !== ie ? ie : null
      },
      ke = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Ke.c, be.f, be.e],
      qe = ee => {
        const ie = ke.map((ie => ye.h.subscribe(ie, ee)));
        return () => {
          for (const ee of ie) ye.h.unsubscribe(ee)
        }
      }
  },
  9539: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      f: () => Ke,
      i: () => Me,
      m: () => ye,
      o: () => Ue,
      q: () => Je,
      u: () => oe
    });
    const ye = "controllerActionWheelOpen",
      be = "controllerActionWheelAim",
      Me = "controllerActionWheelCommit",
      Ke = "controllerActionWheelClose",
      Ue = "controllerActionWheelPick";
    let Fe = !1;
    const Je = () => Fe,
      oe = ee => {
        Fe = ee
      }
  },
  9531: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      g: () => be
    });
    let ye = 0;
    const be = () => {
        ye++
      },
      Me = () => ye
  },
  9443: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe,
      g: () => be,
      k: () => Ke,
      m: () => Me,
      o: () => ye,
      r: () => Je
    });
    const ye = "controllerQuickChatWheelOpen",
      be = "controllerQuickChatWheelAim",
      Me = "controllerQuickChatWheelCommit",
      Ke = "controllerQuickChatWheelClose";
    let Ue = !1;
    const Fe = () => Ue,
      Je = ee => {
        Ue = ee
      }
  },
  37652: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      f: () => Me
    });
    const ye = new Map;

    function be(ee) {
      var ie;
      return null === ee ? null : null !== (ie = ye.get(ee)) && void 0 !== ie ? ie : null
    }

    function Me(ee, ie) {
      return ye.set(ee, ie), () => {
        ye.get(ee) === ie && ye.delete(ee)
      }
    }
  },
  37794: (ee, ie, He) => {
    He.d(ie, {
      c: () => eH,
      e: () => Qi
    });
    var ye = He(4598),
      be = He(610),
      Me = He(4128),
      Ke = He(4146),
      Ue = He.n(Ke);
    const Fe = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      Je = "EV_boolean",
      oe = "EV_double",
      Re = "EV_string",
      ke = "EV_doubleArr",
      qe = "EV_armour",
      fe = "EV_other",
      Te = "EV_cosmetics",
      pe = "OEV_boolean",
      Xe = "OEV_int",
      ze = "OEV_double",
      Be = "OEV_string",
      Ee = "OEV_stringArr",
      ge = "OEV_meshScaling",
      Oe = "IV_int",
      de = "IV_string",
      We = "IV_doubleArr",
      te = "IV_double",
      Ze = "HV_int",
      we = "HV_slots",
      De = "EnvV_string",
      Pe = "EnvV_double",
      Ae = "EnvV_doubleArr",
      Ye = "EnvV_boolean",
      Ve = {
        type: Re,
        name: Re,
        position: ke,
        rotation: ke,
        scale: oe,
        speed: oe,
        jumping: Je,
        crouching: Je,
        cameraPitch: oe,
        armSwinging: Je,
        heldItemName: Re,
        heldItemEnchantmentTier: Re,
        pose: Re,
        followingEId: Re,
        ridingVehicleEId: Re,
        leaderboardTop: Re,
        meshKind: Re,
        meshOpts: Re,
        followingOffset: ke,
        shouldMatchFollowingEntityRotation: Je,
        meshOffset: ke,
        baseRenderHeading: oe,
        armour: qe,
        zC: fe,
        playerCustomisations: Te,
        variation: Re,
        metaInfo: Re,
        soundName: Re,
        volume: oe,
        refDistance: oe,
        maxHearDist: oe,
        rate: oe,
        aiState: Re
      },
      ae = {
        opacity: ze,
        zIndex: Xe,
        overlayColour: Be,
        canSee: pe,
        meshScaling: ge,
        nameTagInfo: Be,
        multilineTextBox: Be,
        hasPriorityNametag: pe,
        ranks: Ee,
        nameColour: Be,
        _isAlive: pe,
        _invisibleEffect: pe,
        _invincible: pe,
        killfeedColour: Be,
        hideNameSeed: Xe,
        _glowingEffect: pe,
        lockHeadToBody: pe
      },
      ce = {
        itemName: de,
        amount: Oe,
        position: We,
        size: te,
        attributes: de
      },
      xe = {
        skyBox: De,
        fogColourOverride: De,
        fogChunkDistanceOverride: Pe,
        cameraTint: Ae,
        fogOnSkybox: Ye,
        fogBlockDistanceOverride: Pe
      },
      Le = {
        type: "array",
        items: "double"
      },
      Ce = {
        type: "array",
        items: "int"
      },
      ve = {
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
      ue = {
        type: "map",
        values: Le
      };

    function me(ee, ie) {
      return {
        type: "record",
        name: ee,
        fields: [{
          name: "x",
          type: ie
        }]
      }
    }
    const le = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", me(pe, "boolean"), me(Xe, "int"), me(ze, "double"), me(Be, "string"), me(Ee, {
              type: "array",
              items: "string"
            }), me(ge, ue)]
          }]
        }
      },
      Se = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", me(Je, "boolean"), me(oe, "double"), me(Re, "string"), me(ke, Le), me(qe, ve), me(fe, le), me(Te, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      ne = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", me(Oe, "int"), me(de, "string"), me(te, "double"), me(We, Le)]
          }]
        }
      },
      je = {
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
      se = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", me(Ze, "int"), me(we, je)]
        }]
      },
      Ie = {
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
      he = {
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
      Ne = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", me(De, "string"), me(Pe, "double"), me(Ae, Le), me(Ye, "boolean")]
          }]
        }
      },
      Ge = [{
        name: "RV",
        type: "record",
        fields: [{
          name: "pos",
          type: Ce
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
          type: Ce
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
      re = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "xb",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "ub",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "mb",
              type: ["null", "string", Le],
              default: null
            }, {
              name: "lb",
              type: ["null", "double"],
              default: null
            }, {
              name: "Sb",
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
          name: "XH",
          type: "string"
        }, {
          name: "zH",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "BH",
          type: "double"
        }, {
          name: "EH",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "Cy",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: Le
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "Oy",
          type: "string"
        }, {
          name: "qb",
          type: ["null", "double"],
          default: null
        }, {
          name: "fb",
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
          name: "ge",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "Oe",
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
      Qe = [{
        name: "position",
        type: Le
      }, {
        name: "direction",
        type: Le
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

    function ei() {
      const ee = [{
        name: "entities",
        type: {
          type: "map",
          values: Se
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: ne
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: Qe
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
              items: se
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", Ie],
        default: null
      }];
      return ee.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "Oy",
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
      }), ee.push({
        name: "uiElements",
        type: he
      }, {
        name: "environment",
        type: Ne
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: Ge
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: re
        }
      }), ee
    }
    const ii = {
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
                name: "YR",
                type: "int"
              }, {
                name: "position",
                type: Le
              }, {
                name: "direction",
                type: Le
              }, {
                name: "easing",
                type: Le
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
    let Hi;

    function yi(ee) {
      if (9 === ee) return Hi ??= (ie = [{
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
            name: "lV",
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
              type: Ce
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
            fields: ei()
          }
        }
      }, ii], Ue().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: ie
      }, {
        qR: Object.create(null)
      })), Hi;
      var ie
    }
    var bi = He(3052);
    let Mi, Ki, Ui, Fi;
    const Ji = 12;
    var oi, Ri;
    const ki = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, null, 3, 2, 4, "Q", !1, !0, 16, 256, 65537, 100, 30, 102, 103, 104, 15, 99, 10, 5, 11, 9];

    function qi(ee) {
      return typeof bH !== ki[5] && bH ? (new bH).decode(new MH(ee)) : typeof KH !== ki[5] && KH ? KH.from(ee).toString("utf-8") : JH(ee)
    }

    function fi() {}

    function Ti() {
      Ti = function() {}
    }
    var Xi, zi;
    Ti(oi = {}, Ri = ["W)*4B}gf&TY1qUOfdWd]n(d+b>Mn+&$9%[5)c+rC", '5uQR.0*&fb}?u|o4YKeo~cI9wBMXQN~*@4ml,~:Ag1Dj;,Cbj(x)a!3CA"7', '8:}j=21qSVaM"KM*H>S#7c4c<th]&U,E', "=>:>OH@!Rx$]DNG*5W|>Sk^iNWh=#N", '/jE4d([9L"T:Ck4+.W~hs0?uab,GCz>4%$wWi0?l@();V$mf.F&jyu&BSx', "*[d**HYmO(WWPSF9OC", 'Pb2h?;q9D.[g($DE,O]M,]ks4VZByiL7GmtF`={sZ"VdIU#5W[:2T]TC', "mDH|eoYtMib(y;_+F|fmWZ<A4(cY.I,7|$~*(Q@:qb", "MW(*1X1v,TKi%5#Ez786r8wvGi~", "mqjFTH~vO(g.r~M9j:5k9BVfpBJ%,cC$RHo)IHWL7LPb4UsE{V<v6gw", "`b2H/]7JQL!Y&n;JOus^o17n", ",OHjd,uJ.iPh<Iv+2gC", '&BQ44hxnP1.*/T|UJBHh(Q+cCWbx3~"J>B}>#^mCfS~du|,qB[l>/g!:$i5', "W=9j`_ISVsCn>_r5^g9Wwu_C", "KJ>^9&=&BV`p!9.fZOA<30hn", '#(;ow7cqK"(4>$s~`*!oB#hn/i!O4K|5sC', "]dGAJ+XqWRE}xIWLbtwm.hmfBV*V+U,51>:][}:fN", "<)$*7!JSKs!)%dPLfH:]%8=&CzIxYS?7j[F^KQn+4V,l,c,ETH.N#]&C", "NHQN;}2J%gdxR_%Eu[$87>B%,W<k=n", "$[FAm1ISU(f", "}G3]9]48N>6}?d)=*)=#_Eaq<yg|NUUbLB,FwZ?+K", "osWv3o<=^SN}[Tg+Q7N)&[]7,J7Kfpz:h>~WO", "~VuA&#P=6sAX*XxqBg05Bt2F8xH?Vzf*O8)^^e{srbg|AoV+xuXQ72ysN", 'G$|mi]O=qi;=>$14*B"m=>w', '"Wl>U&0A%gYOc=V*2[a6*jnJ`d7(?$l', "x:;8{X/h8gs_QzA*]rYMi0N96.p*oiF", "y$<FL04nfS,tN0!U.z>|$[w", 'Z7Yl{%/9U(z."0+*i|<mcHL="J2O*d4)gqpW>Suv:"^', "I>0M&#L=ulXOU~rOTui8T0khgl{9<ISf5)c>Og|&#JAKEn", "H:3j;zTA%(4]%0()Iu=#MQ;:Sr", "apbFBEH)]V4", "kDk|P$COJTC[~n5)Xp=RNu,)ASQjEGdx>DL)cH%C", "hKGHS#{SqS.]a;I5.C", '$s>^f&.icB"rCz!4Im<vhEDARg`b35s', '2dc|?2]sM>1r+0:)dBN#92*%["2,|zY*5Hjl!!JG|TY=>$HO*Fz#P$%)A', ')u"WL24hXzx$sTs', "/lCF,<2S[W,,Yd%E%De8l(G8grVy}d|7", "`bV>I~V:YWk6Dk+9L>G4=jSvJzJ92,rE5C", '!m>A`=?SmB#z10V*Ct$*!][JCtdkdo%Oj*M*}D@=XtV#"N', "GWh#K(FlVB9", "Q[~*c~e9ig.R/Hp5p$>4|GM;mL", "*7RUU~qJUdfbMIefp7n", "1d*]v>_=;>{bT5V*e{Y#^ew", "4Te87q`q0W?RRM<*pF])G^ISozi%<_@4", "Rt@>[+n+&l:KBIY+z>@F[}(SIT+]`0I7wtx*K8w", "q(Lk?h!C#JnX_zgbjp>^,~6c8d", "fs$8F+5lax4", 't*>A1E`c*T@O4gWLiBbvEjbOD(67|I69SgOF3B`cN"+', "sP]MM}!C8V8C;pF9LFdhk8w", "ZO*NL2s9Ts>4;k97[b[Qu[DAiJni,pJ4IuXMhuB=%VP", ';(6vUBP%u1^dS${O:B92F;kJ<B8?xUN9WtD*00h"a(]c>ihUhm{UxHdn', "%mkj!H&f9xQ;^0z:Qm:<(Esn7WSAo$P5Jun", "D[uA92fLeLYdGOlJegqUa~t:pWXG!+O4Sd%l;z=iWR", "T>.4bHSq#J", 'x)Rmy8/s*JPA#N9=:[X)2o%A&sKI$Ipq"mT<c(wv~Sw$N0l', "mDB>[+HC", "v>S)6j2h*J", "axL6r;?+psiV+Hz+BWwWt8H)=B7]|i*v*s#owphh1SqclHM$]d4#3o,C", "D$zQ*>[Z](4kxpl", "wWe8T^nZ`dRKY~@4@luA#D]uoTx9C", "y>oU=&.;9xPyoOC:(Vx8P%)t(JGOi+))WBz)+17hfSC&s0@:%g!N5", 'c7X6k(qJwygckkbxS>VFT;lu9x^]KHdx5:v**=&=~"YQBk=bJ5:N', "B[_852phNLA>[g=JA|]Q&%`S`1R7pKM~`8.R{[L)LLv}w", 'r[;H>X=ibJo=G|(91VYoq%ZS$"ivn$H$wB34d;Fhw.WU(OR', "6uCU5gzS+L5RieK*Gp34$|S9jSuA(ibUnPal4cRJcsi^!Nm7[F^Wt7b=F", "k(BFBk99KsYllT({W=~*C}7nJWt1X;6+9VY53;OA&s]6EdQUS(C", '[*S6#;>ZgVrUA5DLy4U)LBx9"syu;z`LQw', ":5N#VkiOpWhgPn", '/pg6Yp?96B<VcTo4.T@mJB4"s()bS|O:HFvA28VC', "`8TWP$#C", "uP~^%~#i|yv]%5l*", "5qf>1EHCASmA10544V|FQS+SfS<", "2V!hE&Kil^PAMkbEk$xR", "FPO>]]9vidBh+U[$pw", "CB!oF;FJ8r[TEGwJAJ,Fr0uuK", 'NJS6E%!bh>I}1TjOCBl<F^Rh2t4*lK<+(p@F#8>v#rBc.k*vxB"W', "S5Hj7g2sts!z*o>7L6%#A}w", "O)i*`G*fpJ<bkT+J^DC", '!{z#$|Y=Axj?~_sLeD$hBER9FL.keT4)px"W;pt=IJH#WzH~jdlvwS{qM', "cr)*/oQ!Jzk#Lo^fX*<Uko$AVsQJTXWEmHEve0X8VTJUC", '?mCm.;2uyB"6kHG~_[U81}Gs)JYjv_eq=5nU>Gg&M', '((pFRzTAx"iVfkH$8b}hQQoS5b', "=P)^;k.;@bA}/Kv90ghQ.q!AcBG#&go7XFK", "H>ENs(/qwtDjHd]~", 'j1XM3o)Qd.QAW+&E1(wU2;4sA"57sUz:9:%MSk(uPdo', "PqlF+2rL@S?Xc=G~VWn6m10)2rwFH5l*FHbFZB]S$>ZOK~8OHw", 'rstNVzLLbz6xZ|}UQ[B>G;B&#lJ$!+WE7p$Nzu,=Bx`;}G{Ok**4T]p")g{', "8D6WE|D=WV7kro@=C>(|9BFlAiau>izfF8pj$c9Z%V?KxK", "sY!D.Iv`", "(X9v(S4`", "I=h2[UN`", "B3Zm2", 'FFvc"!7W', "8g<,<&j)", "UgV@%!.[", "II87p", "K/;KyP#6", "h6Geb&{c", "p;5wddCy", "^!f:Q_%]", "S_(3A`>]", "n:tZJ", 'I"G5', '8"(3+E/]', "$:So", 'a"{uhH<]', "9s7usC`_", "DNXs0a,_", '7*")";kM', ":iunYr[A", "cE}F", "YwSd", "DE%u8{wH", "dMVqbqk_"]), Ti(yH = function() {
      var ee, ie, He, ye = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      Ti(ee = void 0, ie = []);
      try {
        Ti(ee = Object, ie[ki[11]]("".__proto__.constructor.name))
      } catch (MH) {}
      ee: for (He = ki[0]; He < ye[ki[4]]; He++) try {
        var be;
        for (ee = ye[He](), be = ki[0]; be < ie[ki[4]]; be++)
          if (typeof ee[ie[be]] === ki[5]) continue ee;
        return ee
      } catch (MH) {}
      return ee || this
    }() || {}, bH = yH.TextDecoder, MH = yH.Uint8Array, KH = yH.bR, UH = yH.String || String, FH = yH.Array || Array, JH = function() {
      var ee, ie, He = new FH(128);
      return Ti(ee = UH[ki[8]] || UH.fromCharCode, ie = []),
        function(ye) {
          var be, Me, Ke, Ue;
          for (Ti(Me = void 0, Ke = ye[ki[4]], ie[ki[4]] = ki[0]), Ue = ki[0]; Ue < Ke;) Ti(Me = ye[Ue++], Me <= 127 ? be = Me : Me <= 223 ? be = (31 & Me) << ki[7] | ye[Ue++] & ki[6] : Me <= 239 ? be = (Me & ki[32]) << ki[10] | (ye[Ue++] & ki[6]) << ki[7] | ye[Ue++] & ki[6] : UH[ki[8]] ? be = (Me & ki[9]) << 18 | (ye[Ue++] & ki[6]) << ki[10] | (ye[Ue++] & ki[6]) << ki[7] | ye[Ue++] & ki[6] : (be = ki[6], Ue += ki[18]), ie[ki[11]](He[be] || (He[be] = ee(be))));
          return ie.join("")
        }
    }()), (() => {
      function ee(ee) {
        return typeof oi[ee] === ki[5] ? oi[ee] = function(ee) {
          var ie, He, ye, be, Me, Ke, Ue;
          for (Ti(ie = "" + (ee || ""), He = ie.length, ye = [], be = ki[0], Me = ki[0], Ke = -ki[1]), Ue = ki[0]; Ue < He; Ue++) {
            var Fe = 'by`1[L;~xD,)]#"3V84t$C5^J02?w_}BvZ&9G{.run%@/T<!|6z+7=F:H(d*N>EekYWRXUmcfIOjASpgMslhPqoQKia'.indexOf(ie[Ue]);
            if (Fe !== -ki[1])
              if (Ke < ki[0]) Ke = Fe;
              else {
                Ti(Ke += Fe * ki[12], be |= Ke << Me, Me += (Ke & ki[13]) > ki[14] ? ki[15] : ki[16]);
                do {
                  Ti(ye.push(be & ki[3]), be >>= ki[2], Me -= ki[2])
                } while (Me > ki[9]);
                Ke = -ki[1]
              }
          }
          return Ke > -ki[1] && ye.push((be | Ke << Me) & ki[3]), qi(ye)
        }(Ri[ee]) : oi[ee]
      }
      ee(ki[14]) in fi && function() {
        var ee = function(ee) {
          Ti(this.bk = ee, this.length = ki[0], this.map = {}, this.head = ki[17], this.tail = ki[17])
        };
        Ti(ee.prototype.get = function(ee) {
          var ie = this.map[ee];
          return ie ? (this.remove(ie), this.insert(ie.key, ie.val), ie.val) : -ki[1]
        }, ee.prototype.put = function(ee, ie) {
          this.map[ee] ? (this.remove(this.map[ee]), this.insert(ee, ie)) : this.length === this.bk ? (this.remove(this.head), this.insert(ee, ie)) : (this.insert(ee, ie), this.length++)
        }, ee.prototype.remove = function(ee) {
          var ie, He = ee.prev;
          (ie = ee.next) && (ie.prev = He), He && (He.next = ie), this.head === ee && (this.head = ie), this.tail === ee && (this.tail = He), delete this.map[ee.key]
        }, ee.prototype.insert = function(ee, ie) {
          var He = new List(ee, ie);
          Ti(this.tail ? (this.tail.next = He, He.prev = this.tail, this.tail = He) : (this.tail = He, this.head = He), this.map[ee] = He)
        }, console.log(ee))
      }();
      const ie = ki[24],
        He = ee(89) + ee(90) + ee(ki[12]),
        ye = [ki[0], ki[1], ki[19], ki[18]].map((ee => {
          (function(ee) {
            return typeof oi[ee] === ki[5] ? oi[ee] = function(ee) {
              var ie, He, ye, be, Me, Ke, Ue;
              for (Ti(ie = "" + (ee || ""), He = ie.length, ye = [], be = ki[0], Me = ki[0], Ke = -ki[1]), Ue = ki[0]; Ue < He; Ue++) {
                var Fe = '0GWtTCoODSXeri3*7Lg+#P@s/w2?pH>qcyBm4d`A9(<,%ulVENv8kJ$}]bMfKxF=&~^|1{z6Uh[.:a_Q)Zj5R!"Y;nI'.indexOf(ie[Ue]);
                if (Fe !== -ki[1])
                  if (Ke < ki[0]) Ke = Fe;
                  else {
                    Ti(Ke += Fe * ki[12], be |= Ke << Me, Me += (Ke & ki[13]) > ki[14] ? ki[15] : ki[16]);
                    do {
                      Ti(ye.push(be & ki[3]), be >>= ki[2], Me -= ki[2])
                    } while (Me > ki[9]);
                    Ke = -ki[1]
                  }
              }
              return Ke > -ki[1] && ye.push((be | Ke << Me) & ki[3]), qi(ye)
            }(Ri[ee]) : oi[ee]
          })(92) + ki[21] in fi && function() {
            const ee = require("big-integer");
            class ie {
              static randomPrime(ie) {
                const He = ee.one.shiftLeft(ie - ki[1]),
                  ye = ee.one.shiftLeft(ie).prev();
                for (; ki[23];) {
                  let ie = ee.randBetween(He, ye);
                  if (ie.isProbablePrime(ki[25])) return ie
                }
              }
              static generate(ie) {
                const He = ee(ki[26]);
                let ye, be, Me;
                do {
                  Ti(ye = this.randomPrime(ie / ki[19]), be = this.randomPrime(ie / ki[19]), Me = ee.lcm(ye.prev(), be.prev()))
                } while (ee.gcd(He, Me).notEquals(ki[1]) || ye.minus(be).abs().shiftRight(ie / ki[19] - ki[27]).isZero());
                return {
                  e: He,
                  n: ye.multiply(be),
                  d: He.modInv(Me)
                }
              }
              static encrypt(ie, He, ye) {
                return ee(ie).modPow(ye, He)
              }
              static decrypt(ie, He, ye) {
                return ee(ie).modPow(He, ye)
              }
              static encode(ie) {
                const He = ie.split("").map((ee => ee.charCodeAt())).join("");
                return ee(He)
              }
              static decode(ee) {
                const ie = ee.toString();
                let He = "";
                for (let ye = ki[0]; ye < ie.length; ye += ki[19]) {
                  let ee = Number(ie.substr(ye, ki[19]));
                  ee <= ki[28] ? (He += String.fromCharCode(Number(ie.substr(ye, ki[18]))), ye++) : He += String.fromCharCode(ee)
                }
                return He
              }
            }
            module.exports = ie
          }();
          let ie = ki[0];
          for (let ye = ki[18]; ye >= ki[0]; ye--) {
            function be(ee) {
              var ie, He, ye, be, Me, Ke, Ue;
              for (Ti(ie = "" + (ee || ""), He = ie.length, ye = [], be = ki[0], Me = ki[0], Ke = -ki[1]), Ue = ki[0]; Ue < He; Ue++) {
                var Fe = '3)[0]7=$,}(#?AdIkxzb2;oguZWr9pY/Bt1C&LX%.:`QRNH!aw*5V@U{+hDOE|6fqc<G8l_JmPv^K4i"FMy>~sSjTne'.indexOf(ie[Ue]);
                if (Fe !== -ki[1])
                  if (Ke < ki[0]) Ke = Fe;
                  else {
                    Ti(Ke += Fe * ki[12], be |= Ke << Me, Me += (Ke & ki[13]) > ki[14] ? ki[15] : ki[16]);
                    do {
                      Ti(ye.push(be & ki[3]), be >>= ki[2], Me -= ki[2])
                    } while (Me > ki[9]);
                    Ke = -ki[1]
                  }
              }
              return Ke > -ki[1] && ye.push((be | Ke << Me) & ki[3]), qi(ye)
            }

            function Me(ee) {
              return typeof oi[ee] === ki[5] ? oi[ee] = be(Ri[ee]) : oi[ee]
            }
            Me(93), ie = ie << ki[2] | He[Me(94) + Me(95)](ee * ki[20] + ye)
          }
          return ie >>> ki[0]
        })),
        be = (ee, ie) => (function(ee) {
          return typeof oi[ee] === ki[5] ? oi[ee] = function(ee) {
            var ie, He, ye, be, Me, Ke, Ue;
            for (Ti(ie = "" + (ee || ""), He = ie.length, ye = [], be = ki[0], Me = ki[0], Ke = -ki[1]), Ue = ki[0]; Ue < He; Ue++) {
              var Fe = ';60w^FxtuE("/JojO*79Qs%@L3IzSXKv!PDiWdp|~=C4e?+_158rn$BYURlMbc>gm:Gh.#HAZ{q&f2,`N<)kTV[]}ay'.indexOf(ie[Ue]);
              if (Fe !== -ki[1])
                if (Ke < ki[0]) Ke = Fe;
                else {
                  Ti(Ke += Fe * ki[12], be |= Ke << Me, Me += (Ke & ki[13]) > ki[14] ? ki[15] : ki[16]);
                  do {
                    Ti(ye.push(be & ki[3]), be >>= ki[2], Me -= ki[2])
                  } while (Me > ki[9]);
                  Ke = -ki[1]
                }
            }
            return Ke > -ki[1] && ye.push((be | Ke << Me) & ki[3]), qi(ye)
          }(Ri[ee]) : oi[ee]
        }(96) + "a" in fi && function() {
          var ee, ie = function(ie, He) {
            var ye, be = [];
            return Ti(ye = ie.length, ie.sort(((ee, ie) => ee - ie)), ee(be, [], ki[0], ye, ie, He)), be
          };
          Ti(ee = function(ie, He, ye, be, Me, Ke) {
            var Ue, Fe = ki[17];
            if (!(Ke < ki[0])) {
              if (Ke === ki[0]) return ie.push(He);
              for (Ue = ye; Ue < be && !(Me[Ue] > Ke); Ue++) Ue > ye && Me[Ue] === Me[Ue - ki[1]] || Ti(Fe = Array.from(He), Fe.push(Me[Ue]), ee(ie, Fe, Ue + ki[1], be, Me, Ke - Me[Ue]))
            }
          }, console.log(ie))
        }(), ee << ie | ee >>> 32 - ie),
        Me = (ee, ie, He, ye, Me) => {
          (function(ee) {
            return typeof oi[ee] === ki[5] ? oi[ee] = function(ee) {
              var ie, He, ye, be, Me, Ke, Ue;
              for (Ti(ie = "" + (ee || ""), He = ie.length, ye = [], be = ki[0], Me = ki[0], Ke = -ki[1]), Ue = ki[0]; Ue < He; Ue++) {
                var Fe = '9cAsetPWrVZLXlBNJga8%d|"0xS]F*7)$R.1}Uv#Cm`i_ID@oYTkyj[h?62<H+,uQ^z/5fb{OK(p=!3q4&wE>;GM~:n'.indexOf(ie[Ue]);
                if (Fe !== -ki[1])
                  if (Ke < ki[0]) Ke = Fe;
                  else {
                    Ti(Ke += Fe * ki[12], be |= Ke << Me, Me += (Ke & ki[13]) > ki[14] ? ki[15] : ki[16]);
                    do {
                      Ti(ye.push(be & ki[3]), be >>= ki[2], Me -= ki[2])
                    } while (Me > ki[9]);
                    Ke = -ki[1]
                  }
              }
              return Ke > -ki[1] && ye.push((be | Ke << Me) & ki[3]), qi(ye)
            }(Ri[ee]) : oi[ee]
          })(97) in fi && function() {
            var ee, ie, He, ye = function(ie) {
              var He = [];
              return (ie === ki[1] || ie >= ki[20]) && ee(He, [], ie, ki[0]), He
            };
            Ti(ee = function(ye, be, Me, Ke) {
              var Ue;
              for (Ue = Ke; Ue < Me; Ue++) {
                var Fe;
                if (be.length !== Ue) return;
                for (Fe = ki[0]; Fe < Me; Fe++) He(be, [Ue, Fe]) && (Ti(be.push([Ue, Fe]), ee(ye, be, Me, Ue + ki[1])), be.length === Me && ye.push(ie(be)), be.pop())
              }
            }, ie = function(ee) {
              var ie, He, ye = [];
              for (ie = ee.length, He = ki[0]; He < ie; He++) {
                var be;
                for (ye[He] = "", be = ki[0]; be < ie; be++) ye[He] += ee[He][ki[1]] === be ? ki[21] : "."
              }
              return ye
            }, He = function(ee, ie) {
              var He, ye = ee.length;
              for (He = ki[0]; He < ye; He++) {
                if (ee[He][ki[0]] === ie[ki[0]] || ee[He][ki[1]] === ie[ki[1]]) return ki[22];
                if (Math.abs((ee[He][ki[0]] - ie[ki[0]]) / (ee[He][ki[1]] - ie[ki[1]])) === ki[1]) return ki[22]
              }
              return ki[23]
            }, console.log(ye))
          }(), Ti(ee[ie] += ee[He], ee[Me] = be(ee[Me] ^ ee[ie], ki[24]), ee[ye] += ee[Me], ee[He] = be(ee[He] ^ ee[ye], ki[10]), ee[ie] += ee[He], ee[Me] = be(ee[Me] ^ ee[ie], ki[2]), ee[ye] += ee[Me], ee[He] = be(ee[He] ^ ee[ye], ki[9]))
        };
      Fi = (He, be, Ke, Ue) => {
        function Fe(ee) {
          return typeof oi[ee] === ki[5] ? oi[ee] = function(ee) {
            var ie, He, ye, be, Me, Ke, Ue;
            for (Ti(ie = "" + (ee || ""), He = ie.length, ye = [], be = ki[0], Me = ki[0], Ke = -ki[1]), Ue = ki[0]; Ue < He; Ue++) {
              var Fe = 'gf]zoCD+Z15x@q^"b98d{G>aB#<mQJIw3;4=6S/[eOPF|)%WXKvsn2:`7VYj!.M*yc$(rL,_~?ERAuh0lH&tkiUT}Np'.indexOf(ie[Ue]);
              if (Fe !== -ki[1])
                if (Ke < ki[0]) Ke = Fe;
                else {
                  Ti(Ke += Fe * ki[12], be |= Ke << Me, Me += (Ke & ki[13]) > ki[14] ? ki[15] : ki[16]);
                  do {
                    Ti(ye.push(be & ki[3]), be >>= ki[2], Me -= ki[2])
                  } while (Me > ki[9]);
                  Ke = -ki[1]
                }
            }
            return Ke > -ki[1] && ye.push((be | Ke << Me) & ki[3]), qi(ye)
          }(Ri[ee]) : oi[ee]
        }
        ee(98) + "D" in fi && function() {
          const ee = require("big-integer");
          class ie {
            static randomPrime(ie) {
              const He = ee.one.shiftLeft(ie - ki[1]),
                ye = ee.one.shiftLeft(ie).prev();
              for (; ki[23];) {
                let ie = ee.randBetween(He, ye);
                if (ie.isProbablePrime(ki[25])) return ie
              }
            }
            static generate(ie) {
              const He = ee(ki[26]);
              let ye, be, Me;
              do {
                Ti(ye = this.randomPrime(ie / ki[19]), be = this.randomPrime(ie / ki[19]), Me = ee.lcm(ye.prev(), be.prev()))
              } while (ee.gcd(He, Me).notEquals(ki[1]) || ye.minus(be).abs().shiftRight(ie / ki[19] - ki[27]).isZero());
              return {
                e: He,
                n: ye.multiply(be),
                d: He.modInv(Me)
              }
            }
            static encrypt(ie, He, ye) {
              return ee(ie).modPow(ye, He)
            }
            static decrypt(ie, He, ye) {
              return ee(ie).modPow(He, ye)
            }
            static encode(ie) {
              const He = ie.split("").map((ee => ee.charCodeAt())).join("");
              return ee(He)
            }
            static decode(ee) {
              const ie = ee.toString();
              let He = "";
              for (let ye = ki[0]; ye < ie.length; ye += ki[19]) {
                let ee = Number(ie.substr(ye, ki[19]));
                ee <= ki[28] ? (He += String.fromCharCode(Number(ie.substr(ye, ki[18]))), ye++) : He += String.fromCharCode(ee)
              }
              return He
            }
          }
          module.exports = ie
        }();
        const Je = new DataView(be[Fe(ki[33])], be[Fe(ki[27]) + Fe(101)], Ji),
          oe = new Uint32Array(ie);
        Ti(oe[Fe(ki[29])](ye), oe[Fe(ki[29])](He, ki[20]), oe[ki[15]] = Je[Fe(ki[30]) + Fe(ki[31])](ki[0], ki[23]), oe[ki[16]] = Je[Fe(ki[30]) + Fe(ki[31])](ki[20], ki[23]), oe[ki[32]] = Je[Fe(ki[30]) + Fe(ki[31])](ki[2], ki[23]));
        const Re = new Uint32Array(ie),
          ke = new Uint8Array(Re[Fe(ki[33])]);
        for (let qe = ki[0], fe = Ke; qe < Ue[Fe(105)]; qe += ie * ki[20], fe++) {
          function Te(ee) {
            var ie, He, ye, be, Me, Ke, Ue;
            for (Ti(ie = "" + (ee || ""), He = ie.length, ye = [], be = ki[0], Me = ki[0], Ke = -ki[1]), Ue = ki[0]; Ue < He; Ue++) {
              var Fe = 'A_HpBgsLOdFiPIKEljtZ%}zDX$w1J?cn/UVv9h6x5,;M#<GYTe2y7k=a([@b+]3.S:&"4`0fq!o*mu8C>{RWQ)^rN|~'.indexOf(ie[Ue]);
              if (Fe !== -ki[1])
                if (Ke < ki[0]) Ke = Fe;
                else {
                  Ti(Ke += Fe * ki[12], be |= Ke << Me, Me += (Ke & ki[13]) > ki[14] ? ki[15] : ki[16]);
                  do {
                    Ti(ye.push(be & ki[3]), be >>= ki[2], Me -= ki[2])
                  } while (Me > ki[9]);
                  Ke = -ki[1]
                }
            }
            return Ke > -ki[1] && ye.push((be | Ke << Me) & ki[3]), qi(ye)
          }

          function pe(ee) {
            return typeof oi[ee] === ki[5] ? oi[ee] = Te(Ri[ee]) : oi[ee]
          }

          function Xe() {
            function ee(ee) {
              return typeof oi[ee] === ki[5] ? oi[ee] = function(ee) {
                var ie, He, ye, be, Me, Ke, Ue;
                for (Ti(ie = "" + (ee || ""), He = ie.length, ye = [], be = ki[0], Me = ki[0], Ke = -ki[1]), Ue = ki[0]; Ue < He; Ue++) {
                  var Fe = '~MAqBJXg[uCvjGNSd&$UwQ{.>sPZW#%Tty*!bD(EHV`78iLka};np_Y=Oxrz62R^9I5c,]4/+Kf)1:?m@"Fhel|<30o'.indexOf(ie[Ue]);
                  if (Fe !== -ki[1])
                    if (Ke < ki[0]) Ke = Fe;
                    else {
                      Ti(Ke += Fe * ki[12], be |= Ke << Me, Me += (Ke & ki[13]) > ki[14] ? ki[15] : ki[16]);
                      do {
                        Ti(ye.push(be & ki[3]), be >>= ki[2], Me -= ki[2])
                      } while (Me > ki[9]);
                      Ke = -ki[1]
                    }
                }
                return Ke > -ki[1] && ye.push((be | Ke << Me) & ki[3]), qi(ye)
              }(Ri[ee]) : oi[ee]
            }

            function ie(ee) {
              if (!ee) return -ki[1];
              const He = ie(ee.left),
                ye = ie(ee.right),
                be = Math.abs(He - ye);
              if (He === 1 / 0 || ye === 1 / 0 || be > ki[1]) return 1 / 0;
              return Math.max(He, ye) + ki[1]
            }
            window[pe(107) + ee(108) + ee(109) + "_"] = {
              buildCharacterMap: function(ee) {
                const ie = {};
                for (let He of ee.replace(/[^w]/g, "").toLowerCase()) ie[He] = ie[He] + ki[1] || ki[1];
                return ie
              },
              isAnagrams: function(ee, ie) {
                const He = buildCharMap(ee),
                  ye = buildCharMap(ie);
                for (let be in He)
                  if (He[be] !== ye[be]) return ki[22];
                return Object.keys(He).length !== Object.keys(ye).length ? ki[22] : ki[23]
              },
              isBalanced: function(ee) {
                return ie(ee) !== 1 / 0
              },
              getHeightBalanced: ie
            }
          }
          pe(106) in fi && Xe(), Ti(oe[ki[10]] = fe, Re[pe(110)](oe));
          for (let Be = ki[0]; Be < ki[34]; Be++) Ti(Me(Re, ki[0], ki[20], ki[2], ki[10]), Me(Re, ki[1], ki[35], ki[37], ki[15]), Me(Re, ki[19], ki[7], ki[34], ki[16]), Me(Re, ki[18], ki[9], ki[36], ki[32]), Me(Re, ki[0], ki[35], ki[34], ki[32]), Me(Re, ki[1], ki[7], ki[36], ki[10]), Me(Re, ki[19], ki[9], ki[2], ki[15]), Me(Re, ki[18], ki[20], ki[37], ki[16]));
          for (let Ee = ki[0]; Ee < ie; Ee++) Re[Ee] += oe[Ee];
          const ze = Math[pe(111)](ie * ki[20], Ue[pe(112)] - qe);
          for (let ge = ki[0]; ge < ze; ge++) {
            function Oe() {
              var ee;
              Ti(ee = function(ie, He, ye, be, Me, Ke) {
                var Ue, Fe = ki[17];
                if (!(Ke < ki[0])) {
                  if (Ke === ki[0]) return ie.push(He);
                  for (Ue = ye; Ue < be && !(Me[Ue] > Ke); Ue++) Ue > ye && Me[Ue] === Me[Ue - ki[1]] || Ti(Fe = Array.from(He), Fe.push(Me[Ue]), ee(ie, Fe, Ue + ki[1], be, Me, Ke - Me[Ue]))
                }
              }, console.log((function(ie, He) {
                var ye, be = [];
                return Ti(ye = ie.length, ie.sort(((ee, ie) => ee - ie)), ee(be, [], ki[0], ye, ie, He)), be
              })))
            }
            pe(113) + "5" in fi && Oe(), Ue[qe + ge] ^= ke[ge]
          }
        }
      }
    })();
    const Bi = ["b", 0, 1, 8, "c", "a", 219, "g", 5, 6, "d", 255, "length", "e", "undefined", void 0, 2, 4, 249, 63, "fromCodePoint", 7, 12, "push", 95, 25, 58, 3, !1, 125, 9, 27, 91, 163, 30, 8191, 88, 13, 14, 127, 128, "i", 64, "f", 197, 181, 218, 110, 111, 171, 112, 179, 206, 116, "h", 208, 94, 142, 185, 44, null, 137, 155, 187, 65, 157, !0];

    function Ei(...ee) {
      return ee[Bi[12]] = Bi[2], typeof bH !== Bi[14] && bH ? (new bH).decode(new MH(ee[Bi[1]])) : typeof KH !== Bi[14] && KH ? KH.from(ee[Bi[1]]).toString("utf-8") : JH(ee[Bi[1]])
    }

    function gi() {}

    function Oi() {
      Oi = function() {}
    }
    Oi(Xi = {}, zi = ['au!k"MJ', "@Wi3aP06jeXn7on<P)EGa)a/6", 'bh{k&k~*;Rq>J<TlxR<S)vKvXhJ8s%^"284rl5b;', 'WacU&d```i$lfXeXERKpGZ0"=L!kg07u1)fmnDAvmfM?L?GE>a*kS1R;v,', "VhAE_SP=aQh:?opXSev=6w6;", "N$/kcri0;jgq*.:T|}7", "2Tv~lIv/O:`6K?Lg8Sx=%Bqk6", "iR.+|t!6ChZ&WI_`ib`O+", ")kz3yYtZg%X$4?)CHz3Ot`A=if<95/Wi[>aS]ru;", 'A(Bp?s4Mu,oj(PLCfa_e3ZWW&0L=9};}LhO*N)61Z0]t]!jGal53o.06Rh"', "U&[OcoHTleX6m7fE", "|G36r`J", "gbN8|k33D&15y?L3pkG6cZk0fpr>/!$j", "z{zt?Oa71*i12[S<}3CEco}RpiF@TcMlt},tts56[", "(h3m*f6(UD?d`NWmpTK[]r7Eyi?yra(3t)z", "/aDr6w@=0IV3MbdjlT_eJlX5)idr+7cipWN=h.JglfCd[wzE", '=z"E)ss0ODp~FPkl?ufOBS=E+D@0!d$', "r:Pb_SMCn?<6q`zmi8z[_SUlli*Tt`g+*;", '!?s~.R6!>@;dizz`O%2G`NN(ii@)I?HE:DZODl0"`0&SrCdc', "_f>kVc^T[iT0~<8", "KP+XS&9*g%.tJ?+3&aH96`?i#hR%YS5m", "_??_^RDv;(NU;KAWoP7kEZ86f&2kQfm}4I^*", '<kot0BN5%j^PWzoW+}"e#}KO":O3E[,+w%z', "(eB*RPQ6hj)tsX}El}c6MB_N;8CkG.DgyRcrLs$CU*l", '.%39fk"Nm{,n5NJgsWAeUUJC"y6|1+l}YrrkTc/CzfJY??u+<3pOa(g/58', "Yrd$hsOjJjAokc%yFlPGGcP/$", "6))bGbcCUhbP[A@+.J", "I)erT.WCE(UM8KF2lT7", ")))B9q,!1IT9b%}}fy~[5YJ", 'JfneF_@v"hfjd?)En%NUTN~C1*U;QA~!1,Xdi', "ba)mYcav0j_hn%@+#T^$EbkT<0e~^~H!<eP8ADu1gyG:Uz6}%+Pb!ITp[", "rD1>A.h0^%;);AyGj(T=!.=vs0", "(zmG!=ZZ.8N~;", "b8p9.YF5N{&MR}_}4,Y~:wiqQ0j1Tz", ")r*8jUdEtI9yMIl}@S{[r`<6,%P56c;}^h/>y", "0(xUOq{@ofg%_AMXLmz", 'Nm2="ruqzR0:n+7C.xtB]r|(2/A:@XEEaubGEYJ', ':k_>")VW~', 'fIBp+rn"L@+q2BDhCT^$$dG*lfhoa.GT"DLSi', "f:FGPsolU,)?e0X3M:|Gy", 'TkKOcrtk3D9EaNf5W+]>)O%=pize:Cx+<+ftbO^"3{3yn7', "aes$5|=j7?", "7jx9IlYVGD?:8d[C/D$UJnX3Y?3s4?&3dT7", "aW8kqqKl>Qya8dx<+vop>W}5{@m6sP6}_}]>wR61uIJdTIkl,jX>Ys{CfD]H;", "2:C$ncE={8N9`X#<#@%61aX3(pt?kc]32e8Y4I}01&rPs?*mGb.tbnJ", "u)N~XZGC_fwp}~%", "n&FSOfJ", 'BzZ6}N"5y8%D)?}i*)}~4_0"":ej)zKX)z+d1qVW"%cGOwXg(8GOIp`7', "vRq6g|66FyJE#XN+|G|6>I2*Nf%XgSa<rIE=qwi5$", "Ne<=kSw0!D2zU?2XYDQ9#k;F?Q", "z(jXDaBMLj.!v!%<GeBXjwi5G:}nAf*", '>uqm^RVviiE0T+?+VP*eStRNS@oj4b."^rO>iIBj"Dt?=I%+!:br~nlE[', '4r9XZxcEkis(e!*+le<=$q4)h?Xd!}#<(z!YCU(3L@@A5c"iy?z', "0?06`5o=Lj`", '=keszVw30D"6=?Q5UD]tpdY=Mjvm;', "!3ar;aJ", "?>drN<r6%?qMJAZ52:nr)pdj`R?$T7WcZ<NGh", "<$s~v)9`v?;7B!ZXE3JEbBPjafI(?oqi9@Q9_re/af)!!A/g,;", "*u&$R<X1[03a8Kq!", '!)WrlY>EU:#9i7VGMPAYJdx61,9aU?R"Ty8kiwz!f*WM97G5', "m89>2WJ", "}?ith=4CUhCDmBF3K%TS+Yr;mfyoHP|5orz", 'fhvGs<j*/I&I2|Vl"u}O!Y#@CyhE<+rmvkf9Lls3S{00DScj3ftm?U0!v*', "pz}9/pMCJ{L5&XU+CT7", '/axOVcMl;fC:yIZ"QRG6:f{/{@zd.IAl/I>$o.zw_(n?F%vXj}<r2Rr67iYO;', "|TKBXI:k~", 'N}h1b`M$((!y{S[iG3z3Yq6"407e^`}mtJ', "r:13k/z(M@/PNX`}E:t62Z]W:@w>;f2W/b7tTI{@ZiY(R`dirJ", "^GxsSk<;", "VG)+B1j/U,lqCIn+=R!$:s7*QL^t[[7m!;", "/a0UOc2*xQo&%|1i?+Y=G", 'plyt^rG@,D"M)C[!R:p9k16!U:)PAXlEg38$(vP$6', 'Dz~tuP#LCyvrvP!"cOtB?U9*;(%Di+@<}bZO$f06%Q=&I%"i^k*_wRJ', 'Sk"1DK&=!:ZO+7sWJey3!rM$"ylz,+cCUheUN<["NfarE[$Co:p9e&J', "Ux9>2B@`20xI;", 'W@*e/v|"78H%#z5Cp@I3a(k3/,Qyyz;`^gA$;wUO^h7|ucPcRJ', 'NyN~/vH";(9TQA]`8WC$%wz(}ibjWXLh/ayO+c36k@#%;', "iWjk{w,6_8cn%+TG4aK[pK%`Nj~e^M)C", "Ib_>Plx1kR&~wfkl,3#t%D[pw@R", "bk<ru(GL4/d,haPjxuv6$lGMv&3/$|9cmeD6oRGVI,71g/klFk<SG", 'dezB{vu5j@hh8`6ciWs=S1t"|IjnWAtXMzH>?bWEE{:tDq~uOh9>`&80h@e', "Ab@snwYj/hb?Z~]A,u&8uoC*7@Xa&.V2ijYUZR!q%{HM?N9", "(e<UtUNiK8Q/c!rm>vF8a(2=`e%)J", "_OOkbsC=vj&6;", "xTNGWNl@LjR", "ce|~MUkT0I+dBP9cd$)91RH;", "Xe=s&P{Ehfz14fz!h>n=~Ou6_jTs<%C3wJ", 'Sm13w`:"tDPM%c]3ik68nwj7', "n%SX6V*C5io[R~Cl(mAECWC=}i", "klr$ic#@yRGU![:gE:7", '4,;ETBq0HLVf"~3T', "W}9k{lKM;?U`NP2WQ(9XWS#L*yI{;Azub%ar:KW`hjVBAz3`Va;E@aJ", "B:=9(tGjf:?)c+*", '>$X3//gjMf%){qBWqa534cC71&t`>."mw$4eiR0p#IxqrC~}c+2GspUC~', "wI/pLfJC&/f", "cajd`)jLcL,nm7Dh]xitS)$CsyR", '&zo>aoA=+%aG3AHj^*H[>YOVB@msn+LCm@NG<5C=7f0E?B+"KJ', "Vl9X#|I(W/j$(PEE!;", "]r*8jU(3t&%$|`S<+eidGIe=7f#mB}[m2bCXv}R(hRR", '(){kRt?N:8Ht"~>h&)H9?s"6P0|&q`EgGfC_<|Yv+I8ayXOm:l7', "!fw*EWoWA@^tGdDCwzpO~s5ipi{jLI_}Lmz", "%bZmFU;pz@g", "]%_e[nu5u:D{uPg!k}zdjYGC((7A;", '(lI*#}zim@0yg}."O}Qm,VJ', "NbsU@U@jA{{M:~", "nh|OKUj7", "=zF8XrHREI&%[d5h(mtBc}W@BRAncc@+[+/*}&^55@l%J<Wj`fz9", "fD:k<(2=w8TU^fHEt%debB%=r%D{Yq+3J@mr6sC=LfWMN7c}m;", "<@KBfkBv@:^O&`R3", 'i+&rf<API,%|~<QWjvC1FbBjE{Yj$|tX83o*3=3RUDq?o!k""@?=jR<;6', "^<z>;ac7=8Y*,c>`83xm=PCV=eG", "lOh$AOM=],T$/|[mcuCru}F;", "wkDU?U$jf*]i_dl`T3)p/P,pxI:%~zE5_a2me}`/r/z0(cr!RbH*", "=mtOTbFhdhuqAA9mT)#9X", "h@Q9@B_iZe!C[duc^rZ6xk=/AQ|(GX>TRbt6Kc9jwfN5i%?", "he/>IdHkg,BQv!`m]xDG+WWL|,f~;K6iOm!YVxg=h?e=2[", "MPn~@qW/$i#sGXmh8R<~>)LCWh/=D!G5z+>E=t`M+yAlx~xi", "~uCS0U10ZiZ`f?Y<;R*1xSjv?Q", '4*!1)a:"oRsU.+|5t&599RN;', "~8_1nb:30D6nB0N<h;", "+v(=)dn;", "]tcd70#f", "*F,do_[A", '$.:"oR%f', "o#cdOn)f", "g5I$.|Pf", '|lLD$"A', "at[HPU^F~.,3)~", '[k/{D)Q1i?R")~', "iGDJ^P4Q~.qcPf", "DlAd@:}M5!lhN~", ",`HuYPrvcdE`8f", "#b0_HUxXj?,", "6>@Hs$[1", "M`ovs:U1", "AuGC>|iM", "k>~;HSP1", "@O?s63ju", "syr&99?o%ib", "o)n~|W.f", ",P+n/`9H", '4]Cn)sS9u1dFwD}6oz8I$$BUE3y+:%}6EZkMEo4g.@+X0fo]%]["I', "4]Cn)sS9u1dFwD}6oz8I$$BUE3y+:%}6F5qM((vHo)dt!kw|VA", "K5+nF~bgWl", "PA>pDlpa|$", "=^+|*>F%t+", "}Bd4xVUw", "]G*s", "%8Me4hjr", "vo`^DhKr", "x8<P", "88an0hbr", "h;fZS", "?8>x,Za", "?8u)kz@r", "w8,P", "I|+YZsuh", "9RG9Qw8}9o", "=QD#i_yh", "xA&W", "~R4Wu", "_ebW", "&Q,9j/D", "X|).BKyh"]), Oi(yH = function(...ee) {
        Oi(ee[Bi[12]] = Bi[1], ee[Bi[5]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], ee[Bi[2]] = Bi[15], ee[Bi[4]] = []);
        try {
          Oi(ee[Bi[2]] = Object, ee[Bi[4]][Bi[23]]("".__proto__.constructor.name))
        } catch (zi) {}
        ee: for (ee[Bi[10]] = Bi[1]; ee[Bi[10]] < ee[Bi[5]][Bi[12]]; ee[Bi[10]]++) try {
          for (ee[Bi[2]] = ee[Bi[5]][ee[Bi[10]]](), ee[Bi[13]] = Bi[1]; ee[Bi[13]] < ee[Bi[4]][Bi[12]]; ee[Bi[13]]++)
            if (typeof ee[Bi[2]][ee[Bi[4]][ee[Bi[13]]]] === Bi[14]) continue ee;
          return ee[Bi[2]]
        } catch (zi) {}
        return ee[Bi[2]] || this
      }() || {}, bH = yH.TextDecoder, MH = yH.Uint8Array, KH = yH.bR, UH = yH.String || String, FH = yH.Array || Array, JH = function(...ee) {
        return Oi(ee[Bi[12]] = Bi[1], ee[Bi[5]] = new FH(Bi[40]), ee[Bi[24]] = UH[Bi[20]] || UH.fromCharCode, ee[Bi[16]] = []),
          function(...ie) {
            for (Oi(ie[Bi[12]] = Bi[2], ie[-Bi[18]] = Bi[15], ie[Bi[16]] = Bi[15], ie[Bi[4]] = ie[Bi[1]][Bi[12]], ee[Bi[16]][Bi[12]] = Bi[1]), ie[Bi[17]] = Bi[1]; ie[Bi[17]] < ie[Bi[4]];) Oi(ie[Bi[16]] = ie[Bi[1]][ie[Bi[17]]++], ie[Bi[16]] <= Bi[39] ? ie[-Bi[18]] = ie[Bi[16]] : ie[Bi[16]] <= 223 ? ie[-Bi[18]] = (31 & ie[Bi[16]]) << Bi[9] | ie[Bi[1]][ie[Bi[17]]++] & Bi[19] : ie[Bi[16]] <= 239 ? ie[-Bi[18]] = (15 & ie[Bi[16]]) << Bi[22] | (ie[Bi[1]][ie[Bi[17]]++] & Bi[19]) << Bi[9] | ie[Bi[1]][ie[Bi[17]]++] & Bi[19] : UH[Bi[20]] ? ie[-Bi[18]] = (ie[Bi[16]] & Bi[21]) << 18 | (ie[Bi[1]][ie[Bi[17]]++] & Bi[19]) << Bi[22] | (ie[Bi[1]][ie[Bi[17]]++] & Bi[19]) << Bi[9] | ie[Bi[1]][ie[Bi[17]]++] & Bi[19] : (ie[-Bi[18]] = Bi[19], ie[Bi[17]] += Bi[27]), ee[Bi[16]][Bi[23]](ee[Bi[5]][ie[-Bi[18]]] || (ee[Bi[5]][ie[-Bi[18]]] = ee[Bi[24]](ie[-Bi[18]]))));
            return ee[Bi[16]].join("")
          }
      }()),
      function(...ee) {
        return ee[Bi[12]] = Bi[2], typeof Xi[ee[Bi[1]]] === Bi[14] ? Xi[ee[Bi[1]]] = function(...ee) {
          for (Oi(ee[Bi[12]] = Bi[2], ee[Bi[5]] = 'J;7z~[$6*89,@0%?AhjiyQ2TC!+XG3Em>_l5`}c<W"gu#xvNaSBk=pes&R/If|D(L:{H)qPbdrO1UtYnMwo.KZVF4^]', ee[Bi[0]] = "" + (ee[Bi[1]] || ""), ee[Bi[4]] = ee[Bi[0]].length, ee[Bi[10]] = [], ee[Bi[8]] = Bi[1], ee[Bi[9]] = Bi[1], ee[Bi[7]] = -Bi[2]), ee[Bi[3]] = Bi[1]; ee[Bi[3]] < ee[Bi[4]]; ee[Bi[3]]++)
            if (ee[-Bi[6]] = ee[Bi[5]].indexOf(ee[Bi[0]][ee[Bi[3]]]), ee[-Bi[6]] !== -Bi[2])
              if (ee[Bi[7]] < Bi[1]) ee[Bi[7]] = ee[-Bi[6]];
              else {
                Oi(ee[Bi[7]] += ee[-Bi[6]] * Bi[32], ee[Bi[8]] |= ee[Bi[7]] << ee[Bi[9]], ee[Bi[9]] += (ee[Bi[7]] & Bi[35]) > Bi[36] ? Bi[37] : Bi[38]);
                do {
                  Oi(ee[Bi[10]].push(ee[Bi[8]] & Bi[11]), ee[Bi[8]] >>= Bi[3], ee[Bi[9]] -= Bi[3])
                } while (ee[Bi[9]] > Bi[21]);
                ee[Bi[7]] = -Bi[2]
              } return ee[Bi[7]] > -Bi[2] && ee[Bi[10]].push((ee[Bi[8]] | ee[Bi[7]] << ee[Bi[9]]) & Bi[11]), Ei(ee[Bi[10]])
        }(zi[ee[Bi[1]]]) : Xi[ee[Bi[1]]]
      }(120) in gi && function(...ee) {
        Oi(ee[Bi[12]] = Bi[1], ee[Bi[19]] = function(...ie) {
          return Oi(ie[Bi[12]] = Bi[2], ie[-Bi[25]] = []), (ie[Bi[1]] === Bi[2] || ie[Bi[1]] >= Bi[17]) && ee[Bi[0]](ie[-Bi[25]], [], ie[Bi[1]], Bi[1]), ie[-Bi[25]]
        }, ee[Bi[0]] = function(ie, He, ye, be) {
          var Me;
          for (Me = be; Me < ye; Me++) {
            var Ke;
            if (He.length !== Me) return;
            for (Ke = Bi[1]; Ke < ye; Ke++) ee[-Bi[26]](He, [Me, Ke]) && (Oi(He.push([Me, Ke]), ee[Bi[0]](ie, He, ye, Me + Bi[2])), He.length === ye && ie.push(ee[Bi[10]](He)), He.pop())
          }
        }, ee[Bi[10]] = function(ee) {
          var ie, He, ye = [];
          for (ie = ee.length, He = Bi[1]; He < ie; He++) {
            var be;
            for (ye[He] = "", be = Bi[1]; be < ie; be++) ye[He] += ee[He][Bi[2]] === be ? "Q" : "."
          }
          return ye
        }, ee[-Bi[26]] = function(...ee) {
          for (Oi(ee[Bi[12]] = Bi[16], ee[Bi[16]] = ee[Bi[1]].length), ee[Bi[27]] = Bi[1]; ee[Bi[27]] < ee[Bi[16]]; ee[Bi[27]]++) {
            if (ee[Bi[1]][ee[Bi[27]]][Bi[1]] === ee[Bi[2]][Bi[1]] || ee[Bi[1]][ee[Bi[27]]][Bi[2]] === ee[Bi[2]][Bi[2]]) return Bi[28];
            if (Math.abs((ee[Bi[1]][ee[Bi[27]]][Bi[1]] - ee[Bi[2]][Bi[1]]) / (ee[Bi[1]][ee[Bi[27]]][Bi[2]] - ee[Bi[2]][Bi[2]])) === Bi[2]) return Bi[28]
          }
          return Bi[66]
        }, console.log(ee[Bi[19]]))
      }(), (() => {
        function ee(ee) {
          return typeof Xi[ee] === Bi[14] ? Xi[ee] = function(...ee) {
            for (Oi(ee[Bi[12]] = Bi[2], ee[Bi[5]] = 'A5fl~pkrud(Y}1t=EFMvI*ng,s{JKmozD:XQNUP8)j6>qB%7CH+`TZ.$<Sab#y?![G&L0w"_3iVOW2Rhc@|49/x^];e', ee[Bi[0]] = "" + (ee[Bi[1]] || ""), ee[-Bi[29]] = ee[Bi[0]].length, ee[Bi[10]] = [], ee[Bi[33]] = Bi[1], ee[Bi[34]] = Bi[1], ee[Bi[31]] = -Bi[2]), ee[Bi[3]] = Bi[1]; ee[Bi[3]] < ee[-Bi[29]]; ee[Bi[3]]++)
              if (ee[Bi[30]] = ee[Bi[5]].indexOf(ee[Bi[0]][ee[Bi[3]]]), ee[Bi[30]] !== -Bi[2])
                if (ee[Bi[31]] < Bi[1]) ee[Bi[31]] = ee[Bi[30]];
                else {
                  Oi(ee[Bi[31]] += ee[Bi[30]] * Bi[32], ee[Bi[33]] |= ee[Bi[31]] << ee[Bi[34]], ee[Bi[34]] += (ee[Bi[31]] & Bi[35]) > Bi[36] ? Bi[37] : Bi[38]);
                  do {
                    Oi(ee[Bi[10]].push(ee[Bi[33]] & Bi[11]), ee[Bi[33]] >>= Bi[3], ee[Bi[34]] -= Bi[3])
                  } while (ee[Bi[34]] > Bi[21]);
                  ee[Bi[31]] = -Bi[2]
                } return ee[Bi[31]] > -Bi[2] && ee[Bi[10]].push((ee[Bi[33]] | ee[Bi[31]] << ee[Bi[34]]) & Bi[11]), Ei(ee[Bi[10]])
          }(zi[ee]) : Xi[ee]
        } [][Bi[12]] = Bi[1];
        const ie = Bi[30],
          He = ee(121) + ee(122) + ee(123) + ee(124) + ee(Bi[29]) + ee(126),
          ye = {
            [Bi[30]]: ee(Bi[39]) + ee(Bi[40]) + ee(129) + ee(130) + ee(131) + ee(132)
          },
          be = (...ee) => {
            ee[Bi[12]] = Bi[2];
            const ie = ye[ee[Bi[1]]];
            if (!ie) {
              function He(...ee) {
                for (Oi(ee[Bi[12]] = Bi[2], ee[Bi[2]] = 'Mu1#`67pJ_v^Q},y8I)rUO{xzVTq!kAs;Bdf*=+(tb[>eG?Hg4P~"c/%<&LFKoRmiEDNSYX$3h]:CW@j|lZ29.50nwa', ee[Bi[16]] = "" + (ee[Bi[1]] || ""), ee[Bi[27]] = ee[Bi[16]].length, ee[-Bi[44]] = [], ee[Bi[13]] = Bi[1], ee[Bi[43]] = Bi[1], ee[Bi[42]] = -Bi[2]), ee[Bi[3]] = Bi[1]; ee[Bi[3]] < ee[Bi[27]]; ee[Bi[3]]++)
                  if (ee[Bi[41]] = ee[Bi[2]].indexOf(ee[Bi[16]][ee[Bi[3]]]), ee[Bi[41]] !== -Bi[2])
                    if (ee[Bi[42]] < Bi[1]) ee[Bi[42]] = ee[Bi[41]];
                    else {
                      Oi(ee[Bi[42]] += ee[Bi[41]] * Bi[32], ee[Bi[13]] |= ee[Bi[42]] << ee[Bi[43]], ee[Bi[43]] += (ee[Bi[42]] & Bi[35]) > Bi[36] ? Bi[37] : Bi[38]);
                      do {
                        Oi(ee[-Bi[44]].push(ee[Bi[13]] & Bi[11]), ee[Bi[13]] >>= Bi[3], ee[Bi[43]] -= Bi[3])
                      } while (ee[Bi[43]] > Bi[21]);
                      ee[Bi[42]] = -Bi[2]
                    } return ee[Bi[42]] > -Bi[2] && ee[-Bi[44]].push((ee[Bi[13]] | ee[Bi[42]] << ee[Bi[43]]) & Bi[11]), Ei(ee[-Bi[44]])
              }

              function be(...ee) {
                return ee[Bi[12]] = Bi[2], typeof Xi[ee[Bi[1]]] === Bi[14] ? Xi[ee[Bi[1]]] = He(zi[ee[Bi[1]]]) : Xi[ee[Bi[1]]]
              }
              throw new Error(be(133) + be(134) + be(135) + be(136) + " v" + ee[Bi[1]])
            }
            return [Bi[1], Bi[2], Bi[16], Bi[27], Bi[17], Bi[8], Bi[9], Bi[21]].map(((...ee) => {
              function He(...ee) {
                return ee[Bi[12]] = Bi[2], typeof Xi[ee[Bi[1]]] === Bi[14] ? Xi[ee[Bi[1]]] = function(...ee) {
                  for (Oi(ee[Bi[12]] = Bi[2], ee[Bi[2]] = 'Qu1"A)./@5HLF?Zr`B{#>*VE:Tw}p^NsKa0Pde%!Gj~O2R<v4qWb6oM]k7X_yxU3iI|DYcf8t,J=&$lz(9nShgm+[;C', ee[-Bi[45]] = "" + (ee[Bi[1]] || ""), ee[Bi[4]] = ee[-Bi[45]].length, ee[Bi[48]] = [], ee[Bi[3]] = Bi[1], ee[Bi[43]] = Bi[1], ee[Bi[7]] = -Bi[2]), ee[-Bi[46]] = Bi[1]; ee[-Bi[46]] < ee[Bi[4]]; ee[-Bi[46]]++)
                    if (ee[Bi[47]] = ee[Bi[2]].indexOf(ee[-Bi[45]][ee[-Bi[46]]]), ee[Bi[47]] !== -Bi[2])
                      if (ee[Bi[7]] < Bi[1]) ee[Bi[7]] = ee[Bi[47]];
                      else {
                        Oi(ee[Bi[7]] += ee[Bi[47]] * Bi[32], ee[Bi[3]] |= ee[Bi[7]] << ee[Bi[43]], ee[Bi[43]] += (ee[Bi[7]] & Bi[35]) > Bi[36] ? Bi[37] : Bi[38]);
                        do {
                          Oi(ee[Bi[48]].push(ee[Bi[3]] & Bi[11]), ee[Bi[3]] >>= Bi[3], ee[Bi[43]] -= Bi[3])
                        } while (ee[Bi[43]] > Bi[21]);
                        ee[Bi[7]] = -Bi[2]
                      } return ee[Bi[7]] > -Bi[2] && ee[Bi[48]].push((ee[Bi[3]] | ee[Bi[7]] << ee[Bi[43]]) & Bi[11]), Ei(ee[Bi[48]])
                }(zi[ee[Bi[1]]]) : Xi[ee[Bi[1]]]
              }
              return ee[Bi[12]] = Bi[2], He(Bi[61]) in gi && function(...ee) {
                Oi(ee[Bi[12]] = Bi[1], ee[-Bi[53]] = function(...ie) {
                  return Oi(ie[Bi[12]] = Bi[16], ie[Bi[16]] = [], ie[Bi[49]] = ie[Bi[1]].length, ie[Bi[1]].sort(((ee, ie) => ee - ie)), ee[Bi[50]](ie[Bi[16]], [], Bi[1], ie[Bi[49]], ie[Bi[1]], ie[Bi[2]])), ie[Bi[16]]
                }, ee[Bi[50]] = function(...ie) {
                  if (Oi(ie[Bi[12]] = Bi[9], ie[Bi[52]] = Bi[60]), !(ie[Bi[8]] < Bi[1])) {
                    if (ie[Bi[8]] === Bi[1]) return ie[Bi[1]].push(ie[Bi[2]]);
                    for (ie[-Bi[51]] = ie[Bi[16]]; ie[-Bi[51]] < ie[Bi[27]] && !(ie[Bi[17]][ie[-Bi[51]]] > ie[Bi[8]]); ie[-Bi[51]]++) ie[-Bi[51]] > ie[Bi[16]] && ie[Bi[17]][ie[-Bi[51]]] === ie[Bi[17]][ie[-Bi[51]] - Bi[2]] || Oi(ie[Bi[52]] = Array.from(ie[Bi[2]]), ie[Bi[52]].push(ie[Bi[17]][ie[-Bi[51]]]), ee[Bi[50]](ie[Bi[1]], ie[Bi[52]], ie[-Bi[51]] + Bi[2], ie[Bi[27]], ie[Bi[17]], ie[Bi[8]] - ie[Bi[17]][ie[-Bi[51]]]))
                  }
                }, console.log(ee[-Bi[53]]))
              }(), parseInt(ie[He(138)](ee[Bi[1]] * Bi[3], ee[Bi[1]] * Bi[3] + Bi[3]), 16)
            }))
          };
        Oi(Mi = (...He) => (He[Bi[12]] = Bi[2], ee(139) + "J" in gi && function(...ee) {
          ee[Bi[12]] = Bi[1]
        }(), He[Bi[1]] >= ie), Ki = (...ee) => {
          function ie(...ee) {
            return ee[Bi[12]] = Bi[2], typeof Xi[ee[Bi[1]]] === Bi[14] ? Xi[ee[Bi[1]]] = function(...ee) {
              for (Oi(ee[Bi[12]] = Bi[2], ee[Bi[5]] = 'a#rIAEflinPt!<J831%Wu,M?*N@vOSw~xBK7CHjm4DToF{R0_(b;9.^e}`&Qcq=+UX"[hyY|]G5dZ)kp$z2>6L/Vsg:', ee[Bi[0]] = "" + (ee[Bi[1]] || ""), ee[Bi[27]] = ee[Bi[0]].length, ee[Bi[31]] = [], ee[Bi[8]] = Bi[1], ee[-Bi[61]] = Bi[1], ee[Bi[7]] = -Bi[2]), ee[Bi[54]] = Bi[1]; ee[Bi[54]] < ee[Bi[27]]; ee[Bi[54]]++)
                if (ee[Bi[41]] = ee[Bi[5]].indexOf(ee[Bi[0]][ee[Bi[54]]]), ee[Bi[41]] !== -Bi[2])
                  if (ee[Bi[7]] < Bi[1]) ee[Bi[7]] = ee[Bi[41]];
                  else {
                    Oi(ee[Bi[7]] += ee[Bi[41]] * Bi[32], ee[Bi[8]] |= ee[Bi[7]] << ee[-Bi[61]], ee[-Bi[61]] += (ee[Bi[7]] & Bi[35]) > Bi[36] ? Bi[37] : Bi[38]);
                    do {
                      Oi(ee[Bi[31]].push(ee[Bi[8]] & Bi[11]), ee[Bi[8]] >>= Bi[3], ee[-Bi[61]] -= Bi[3])
                    } while (ee[-Bi[61]] > Bi[21]);
                    ee[Bi[7]] = -Bi[2]
                  } return ee[Bi[7]] > -Bi[2] && ee[Bi[31]].push((ee[Bi[8]] | ee[Bi[7]] << ee[-Bi[61]]) & Bi[11]), Ei(ee[Bi[31]])
            }(zi[ee[Bi[1]]]) : Xi[ee[Bi[1]]]
          }
          ee[Bi[12]] = Bi[16];
          const He = crypto[ie(148) + ie(149) + ie(150)](new Uint8Array(Ji)),
            ye = bi[Bi[0]][ie(151) + ie(152)](ee[Bi[2]], {
              [ie(153)]: Bi[2]
            });
          Fi(be(ee[Bi[1]]), He, Bi[2], ye);
          const Me = new Uint8Array(Ji + ye[ie(154)]);
          return Oi(Me[ie(Bi[62])](He), Me[ie(Bi[62])](ye, Ji)), Me
        }, Ui = (...ee) => {
          function ie(...ee) {
            return ee[Bi[12]] = Bi[2], typeof Xi[ee[Bi[1]]] === Bi[14] ? Xi[ee[Bi[1]]] = function(...ee) {
              for (Oi(ee[Bi[12]] = Bi[2], ee[Bi[2]] = 'D]h[Abxz}#W584G|*=3T+ofIkBut~X,9.cE;l@UCQgH6a&di!Sye71Lj^?<)RM0{>$%J_m/VpnNvKYZ2wsOP`rq(":F', ee[Bi[0]] = "" + (ee[Bi[1]] || ""), ee[Bi[27]] = ee[Bi[0]].length, ee[-Bi[64]] = [], ee[Bi[8]] = Bi[1], ee[Bi[63]] = Bi[1], ee[Bi[21]] = -Bi[2]), ee[Bi[54]] = Bi[1]; ee[Bi[54]] < ee[Bi[27]]; ee[Bi[54]]++)
                if (ee[Bi[41]] = ee[Bi[2]].indexOf(ee[Bi[0]][ee[Bi[54]]]), ee[Bi[41]] !== -Bi[2])
                  if (ee[Bi[21]] < Bi[1]) ee[Bi[21]] = ee[Bi[41]];
                  else {
                    Oi(ee[Bi[21]] += ee[Bi[41]] * Bi[32], ee[Bi[8]] |= ee[Bi[21]] << ee[Bi[63]], ee[Bi[63]] += (ee[Bi[21]] & Bi[35]) > Bi[36] ? Bi[37] : Bi[38]);
                    do {
                      Oi(ee[-Bi[64]].push(ee[Bi[8]] & Bi[11]), ee[Bi[8]] >>= Bi[3], ee[Bi[63]] -= Bi[3])
                    } while (ee[Bi[63]] > Bi[21]);
                    ee[Bi[21]] = -Bi[2]
                  } return ee[Bi[21]] > -Bi[2] && ee[-Bi[64]].push((ee[Bi[8]] | ee[Bi[21]] << ee[Bi[63]]) & Bi[11]), Ei(ee[-Bi[64]])
            }(zi[ee[Bi[1]]]) : Xi[ee[Bi[1]]]
          }
          if (ee[Bi[12]] = Bi[16], ee[Bi[2]][ie(156)] < Ji) throw new Error(He);
          const ye = new Uint8Array(ee[Bi[2]][ie(Bi[65])](Ji));
          Fi(be(ee[Bi[1]]), ee[Bi[2]][ie(Bi[65])](Bi[1], Ji), Bi[2], ye);
          const Me = new(bi[Bi[0]][ie(158) + Bi[13]])({
            [ie(159)]: Bi[66]
          });
          if (Me[ie(160)](ye), Me[ie(161)] || !Me[ie(162)]) throw new Error(He);
          return Me[ie(Bi[33])]
        })
      })();
    var di = He(37799),
      Wi = He(37802),
      ti = He(37807);

    function Zi(ee) {
      return Me.bR.from(Uint8Array.from(ee))
    }

    function wi(ee) {
      return Array.from(ee)
    }

    function Di(ee, ie) {
      return {
        [ee]: {
          x: ie
        }
      }
    }

    function Pi(ee) {
      if (null === ee || "object" !== typeof ee || Array.isArray(ee)) return ee;
      const ie = Object.keys(ee);
      if (1 !== ie.length) return ee;
      const He = ee[ie[0]];
      return null !== He && "object" === typeof He && !Array.isArray(He) && "x" in He ? He.x : ee
    }

    function Ai(ee, ie) {
      return void 0 === ie ? null : Fe.has(ee) ? null === ie ? null : JSON.stringify(ie) : ie
    }

    function Yi(ee, ie) {
      return null === ie && Fe.has(ee) ? null : "string" === typeof ie && Fe.has(ee) ? JSON.parse(ie) : ie
    }

    function Vi(ee, ie, He) {
      return (0, be.P)(He) ? null : Di(ee, Ai(ie, He))
    }

    function ai(ee, ie) {
      return (0, be.P)(ie) ? null : Yi(ee, Pi(ie))
    }

    function ci(ee) {
      const ie = {};
      for (const He in ee) {
        const ye = ee[He];
        ie[He] = void 0 === ye ? null : ye
      }
      return ie
    }

    function xi(ee) {
      const ie = {};
      for (const He in ee) {
        const ye = ee[He];
        null !== ye && void 0 !== ye && (ie[He] = ye)
      }
      return ie
    }

    function Li(ee, ie) {
      return Object.prototype.hasOwnProperty.call(ee, ie)
    }

    function Ci(ee, ie) {
      const He = {};
      for (const ye in ee) {
        const be = ee[ye];
        He[ye] = ie(be)
      }
      return He
    }

    function vi(ee, ie, He) {
      const ye = [];
      for (let be = 0; be < ie.length; be++) {
        const Me = ie[be];
        Li(ee, Me) && ye.push({
          i: be,
          v: He(Me, ee[Me])
        })
      }
      return ye
    }

    function ui(ee, ie, He) {
      const ye = {};
      for (const be of ee) {
        const ee = ie[be.i];
        void 0 !== ee ? ye[ee] = He(ee, be.v) : console.error(`Unknown Partial field index ${be.i}`)
      }
      return ye
    }

    function mi(ee, ie) {
      return (0, be.P)(ie) ? null : "zC" === ee ? function(ee) {
        return Di(fe, vi(ee, Wi.q, ((ee, ie) => Vi(ae[ee], ee, ie))))
      }(ie) : Vi(Ve[ee], ee, ie)
    }

    function li(ee, ie) {
      return (0, be.P)(ie) ? null : "zC" === ee ? function(ee) {
        return (0, be.P)(ee) ? null : ui(ee, Wi.q, ai)
      }(Pi(ie)) : ai(ee, ie)
    }

    function Si(ee) {
      const {
        type: ie,
        ...He
      } = ee, ye = {};
      for (const be in He) {
        const ee = He[be];
        ye[be] = Ai(be, ee)
      }
      if ("chunkAdded" === ie || "chunkRemoved" === ie) ye.rle = Zi(ye.rle);
      else if ("playSound" === ie) {
        const ee = ye.ub;
        ye.ub = (0, be.P)(ee) ? null : ci(ee)
      } else if ("customKillfeed" === ie) {
        var Me, Ke;
        ye.killer = ci(null !== (Me = ye.killer) && void 0 !== Me ? Me : {}), ye.victim = ci(null !== (Ke = ye.victim) && void 0 !== Ke ? Ke : {})
      }
      return {
        [ie]: ye
      }
    }

    function ni(ee) {
      const ie = Object.keys(ee)[0],
        He = ee[ie],
        ye = {};
      for (const be in He) {
        const ee = He[be];
        ye[be] = Yi(be, ee)
      }
      if ("chunkAdded" === ie || "chunkRemoved" === ie) ye.rle = wi(ye.rle);
      else if ("playSound" === ie) {
        const ee = ye.ub;
        ye.ub = (0, be.P)(ee) ? null : xi(ee)
      } else if ("customKillfeed" === ie) {
        var Me, Ke;
        ye.killer = xi(null !== (Me = ye.killer) && void 0 !== Me ? Me : {}), ye.victim = xi(null !== (Ke = ye.victim) && void 0 !== Ke ? Ke : {})
      } else "animateEntity" === ie && function(ee) {
        const ie = null === ee || void 0 === ee ? void 0 : ee.ZH;
        if ((0, be.P)(ie)) return;
        for (const He in ie) ie[He].scale ??= []
      }(ye.animationScript);
      return {
        type: ie,
        ...ye
      }
    }

    function ji(ee) {
      var ie, He;
      return (0, be.P)(ee) ? null : {
        name: ee.name,
        amount: null !== (ie = ee.amount) && void 0 !== ie ? ie : null,
        attributes: JSON.stringify(null !== (He = ee.attributes) && void 0 !== He ? He : {})
      }
    }

    function si(ee) {
      if ((0, be.P)(ee)) return null;
      const ie = ee;
      return {
        name: ie.name,
        amount: ie.amount,
        attributes: JSON.parse(ie.attributes)
      }
    }

    function Ii(ee) {
      if ((0, be.P)(ee)) return null;
      return {
        fullSlotsArray: Array.isArray(ee.slots),
        entries: vi(ee, Wi.j, ((ee, ie) => {
          if ((0, be.P)(ie)) return null;
          if ("slots" === ee) {
            const ee = Array.isArray(ie) ? function(ee) {
              const ie = {};
              for (let He = 0; He < ee.length; He++) ie[He] = ee[He];
              return ie
            }(ie) : ie;
            return Di(we, function(ee) {
              const ie = {};
              for (const He in ee) {
                const ye = ee[He];
                ie[He] = ji(ye)
              }
              return ie
            }(ee))
          }
          return Di(Ze, ie)
        }))
      }
    }

    function Ni(ee) {
      if ((0, be.P)(ee)) return;
      const ie = ee.fullSlotsArray;
      return ui(ee.entries, Wi.j, ((ee, He) => {
        if ((0, be.P)(He)) return null;
        if ("slots" === ee) {
          const ee = function(ee) {
            const ie = {};
            for (const He in ee) {
              const ye = ee[He];
              ie[Number(He)] = si(ye)
            }
            return ie
          }(Pi(He));
          return ie ? function(ee) {
            const ie = [];
            for (let He = 0; He < be.r; He++) ie.push(He in ee ? ee[He] : null);
            return ie
          }(ee) : ee
        }
        return Pi(He)
      }))
    }

    function Gi(ee) {
      return {
        entities: Ci(ee.entities, (ee => vi(ee, Wi.g, mi))),
        items: Ci(ee.items, (ee => vi(ee, Wi.k, ((ee, ie) => Vi(ce[ee], ee, ie))))),
        camera: ee.camera,
        hotbar: Ii(ee.hotbar),
        playerHud: (0, be.P)(ee.playerHud) ? null : vi(ee.playerHud, Wi.m, ((ee, ie) => (0, be.P)(ie) ? null : function(ee, ie) {
          return {
            [ee]: ie
          }
        }("double", ie))),
        effects: (0, be.P)(ee.effects) ? null : (0, di.q)(ee.effects),
        uiElements: vi(ee.uiElements, Wi.t, ((ee, ie) => (0, be.P)(ie) ? null : JSON.stringify(ie))),
        environment: vi(ee.environment, Wi.o, ((ee, ie) => Vi(xe[ee], ee, ie))),
        structuralEvents: ee.structuralEvents.map(Si),
        ephemeralEvents: ee.ephemeralEvents.map(Si)
      }
    }

    function ri(ee) {
      var ie;
      const He = {
          entities: Ci(ee.entities, (ee => {
            const ie = ui(ee, Wi.g, li),
              He = ie.type ? (0, ye.x)(ie.type) : null;
            return He && (ie.type = "Mesh", ie.meshKind = He.meshKind, ie.meshOpts = He.meshOpts), ie
          })),
          items: Ci(ee.items, (ee => ui(ee, Wi.k, ai))),
          camera: {
            ...ee.camera,
            charging: null !== (ie = ee.camera.charging) && void 0 !== ie && ie
          },
          uiElements: ui(ee.uiElements, Wi.t, ((ee, ie) => "string" === typeof ie ? JSON.parse(ie) : ie)),
          environment: ui(ee.environment, Wi.o, ai),
          structuralEvents: ee.structuralEvents.map((ee => {
            const ie = ni(ee);
            return "RV" === ie.type ? (ie.fromBlockData ??= null, ie.toBlockData ??= null) : "chunkAdded" !== ie.type && "chunkRemoved" !== ie.type || (ie.sharedBlockData ??= []), ie
          })),
          ephemeralEvents: ee.ephemeralEvents.map((ee => ni(ee)))
        },
        Me = Ni(ee.hotbar);
      return void 0 !== Me && (He.hotbar = Me), (0, be.P)(ee.playerHud) || (He.playerHud = ui(ee.playerHud, Wi.m, ((ee, ie) => (0, be.P)(ie) ? null : function(ee) {
        if (null === ee || "object" !== typeof ee || Array.isArray(ee)) return ee;
        const ie = Object.keys(ee);
        return 1 !== ie.length || "int" !== ie[0] && "double" !== ie[0] ? ee : ee[ie[0]]
      }(ie)))), (0, be.P)(ee.effects) || (He.effects = (0, di.j)(ee.effects)), He
    }
    let Qi, eH;
    var iH, HH, yH, bH, MH, KH, UH, FH, JH, oH, RH;
    const kH = ["b", 0, 1, 221, 2, 52, 32, 7, "e", "f", "d", 8, 255, "length", "undefined", void 0, 122, 41, "c", 187, 63, 6, "fromCodePoint", 12, "push", "a", 197, 3, null, 113, 5, 10, "h", 54, 103, 9, 91, 28, 243, 8191, 88, 13, 14, 27, 188, 61, 212, !1, 4, 204, 108, 131, "i", 181, 114, 94, "g", 18, 194, !0, 121, 196, 225, 127, 174, 246, 56, 44, 128, 16, "J", 512, 165, 39, 19, 206, 239, 15, 216, 101, 33, 83, 229, 24, 1023, 31, 142, 43, 64, 65535, 89, 144, 65, 99, 82, 146, 90, 115, 81, 236, 50, 92, ")", 192, ".", 37, 143, 11, 232, 60, 126, 141, 87, 234, 109, 70, "Q", 148, 49, 249, 185, 205, 79, 138, 193, 22, 203, "=", ";", 183, 26, 33554432, 67108864, "bR", 112, 214, 209, 1e3, "s=", "/", 166];

    function qH(...ee) {
      return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = function(...ee) {
        for (zH(ee[kH[13]] = kH[2], ee[-kH[5]] = 'wP&.osz(kERHv?2MLTc|@$9*+ON]KreAqp83dWYi^umyx`4n1[b0fB7UX,~%>/aJ:"F})Chg!j#Z6I5=S{QD<VGt;_l', ee[kH[0]] = "" + (ee[kH[1]] || ""), ee[-kH[4]] = ee[kH[0]].length, ee[kH[10]] = [], ee[kH[8]] = kH[1], ee[kH[9]] = kH[1], ee[kH[7]] = -kH[2]), ee[kH[3]] = kH[1]; ee[kH[3]] < ee[-kH[4]]; ee[kH[3]]++)
          if (ee[kH[6]] = ee[-kH[5]].indexOf(ee[kH[0]][ee[kH[3]]]), ee[kH[6]] !== -kH[2])
            if (ee[kH[7]] < kH[1]) ee[kH[7]] = ee[kH[6]];
            else {
              zH(ee[kH[7]] += ee[kH[6]] * kH[36], ee[kH[8]] |= ee[kH[7]] << ee[kH[9]], ee[kH[9]] += (ee[kH[7]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
              do {
                zH(ee[kH[10]].push(ee[kH[8]] & kH[12]), ee[kH[8]] >>= kH[11], ee[kH[9]] -= kH[11])
              } while (ee[kH[9]] > kH[7]);
              ee[kH[7]] = -kH[2]
            } return ee[kH[7]] > -kH[2] && ee[kH[10]].push((ee[kH[8]] | ee[kH[7]] << ee[kH[9]]) & kH[12]), fH(ee[kH[10]])
      }(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
    }

    function fH(...ee) {
      return ee[kH[13]] = kH[2], typeof bH !== kH[14] && bH ? (new bH).decode(new MH(ee[kH[1]])) : typeof KH !== kH[14] && KH ? KH.from(ee[kH[1]]).toString("utf-8") : JH(ee[kH[1]])
    }

    function TH(...ee) {
      if (ee[kH[13]] = kH[27], ee[kH[1]] === qH(106) + kH[70]) return ee[kH[2]] + ee[kH[4]]
    }

    function pH() {}

    function XH(ee, ie, He, ye = {}, be, Me, Ke, Ue) {
      if (Me || (Me = function(...ee) {
          return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = be(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
        }), be || (be = function(...ee) {
          for (zH(ee[kH[13]] = kH[2], ee[kH[34]] = 'dC9y|x3"@=M~,eoUBE}j!pn>Q^blOD;A`kqzh*#)w+YZK{VF(_HP<8vS[fauN2T:5rtW?mLi$&sIG.c4J0X1/]Rg7%6', ee[kH[0]] = "" + (ee[kH[1]] || ""), ee[-kH[33]] = ee[kH[0]].length, ee[kH[10]] = [], ee[-kH[37]] = kH[1], ee[kH[38]] = kH[1], ee[kH[7]] = -kH[2]), ee[kH[32]] = kH[1]; ee[kH[32]] < ee[-kH[33]]; ee[kH[32]]++)
            if (ee[kH[35]] = ee[kH[34]].indexOf(ee[kH[0]][ee[kH[32]]]), ee[kH[35]] !== -kH[2])
              if (ee[kH[7]] < kH[1]) ee[kH[7]] = ee[kH[35]];
              else {
                zH(ee[kH[7]] += ee[kH[35]] * kH[36], ee[-kH[37]] |= ee[kH[7]] << ee[kH[38]], ee[kH[38]] += (ee[kH[7]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                do {
                  zH(ee[kH[10]].push(ee[-kH[37]] & kH[12]), ee[-kH[37]] >>= kH[11], ee[kH[38]] -= kH[11])
                } while (ee[kH[38]] > kH[7]);
                ee[kH[7]] = -kH[2]
              } return ee[kH[7]] > -kH[2] && ee[kH[10]].push((ee[-kH[37]] | ee[kH[7]] << ee[kH[38]]) & kH[12]), fH(ee[kH[10]])
        }), zH(Ke = void 0, Ue = {
          [Me(kH[114])]: function(ee, ie, He) {
            He || (He = function(...ee) {
              zH(ee[kH[13]] = kH[1], ee[kH[25]] = function(ie, He, ye) {
                return ye.length !== ie.length + He.length ? kH[47] : ee[kH[0]](ie, He, ye, kH[1], kH[1], kH[1], {})
              }, ee[kH[0]] = function(...ie) {
                return zH(ie[kH[13]] = kH[7], ie[kH[49]] = kH[47]), ie[kH[30]] >= ie[kH[4]].length ? kH[59] : ie[kH[21]]["" + ie[kH[27]] + ie[kH[48]] + ie[kH[30]]] !== kH[15] ? ie[kH[21]]["" + ie[kH[27]] + ie[kH[48]] + ie[kH[30]]] : (ie[kH[4]][ie[kH[30]]] === ie[kH[1]][ie[kH[27]]] && ie[kH[4]][ie[kH[30]]] === ie[kH[2]][ie[kH[48]]] ? ie[kH[49]] = ee[kH[0]](ie[kH[1]], ie[kH[2]], ie[kH[4]], ie[kH[27]] + kH[2], ie[kH[48]], ie[kH[30]] + kH[2], ie[kH[21]]) || ee[kH[0]](ie[kH[1]], ie[kH[2]], ie[kH[4]], ie[kH[27]], ie[kH[48]] + kH[2], ie[kH[30]] + kH[2], ie[kH[21]]) : ie[kH[4]][ie[kH[30]]] === ie[kH[1]][ie[kH[27]]] ? ie[kH[49]] = ee[kH[0]](ie[kH[1]], ie[kH[2]], ie[kH[4]], ie[kH[27]] + kH[2], ie[kH[48]], ie[kH[30]] + kH[2], ie[kH[21]]) : ie[kH[4]][ie[kH[30]]] === ie[kH[2]][ie[kH[48]]] && (ie[kH[49]] = ee[kH[0]](ie[kH[1]], ie[kH[2]], ie[kH[4]], ie[kH[27]], ie[kH[48]] + kH[2], ie[kH[30]] + kH[2], ie[kH[21]])), ie[kH[21]]["" + ie[kH[27]] + ie[kH[48]] + ie[kH[30]]] = ie[kH[49]], ie[kH[49]])
              }, console.log(ee[kH[25]]))
            }), ie || (ie = function(...ie) {
              return ie[kH[13]] = kH[2], typeof iH[ie[kH[1]]] === kH[14] ? iH[ie[kH[1]]] = ee(HH[ie[kH[1]]]) : iH[ie[kH[1]]]
            }), ee || (ee = function(...ee) {
              for (zH(ee[kH[13]] = kH[2], ee[kH[44]] = '!({uUG7ME%`Fg^p+cQ894daJvW&.i<w/eB]HDf_~oVN?})2IRrmq5S>t6=1KxLjbY0:*l$Zhyz;A#[P,T"s@|3nCXkO', ee[kH[0]] = "" + (ee[kH[1]] || ""), ee[kH[27]] = ee[kH[0]].length, ee[-kH[46]] = [], ee[kH[8]] = kH[1], ee[kH[45]] = kH[1], ee[kH[7]] = -kH[2]), ee[kH[43]] = kH[1]; ee[kH[43]] < ee[kH[27]]; ee[kH[43]]++)
                if (ee[kH[35]] = ee[kH[44]].indexOf(ee[kH[0]][ee[kH[43]]]), ee[kH[35]] !== -kH[2])
                  if (ee[kH[7]] < kH[1]) ee[kH[7]] = ee[kH[35]];
                  else {
                    zH(ee[kH[7]] += ee[kH[35]] * kH[36], ee[kH[8]] |= ee[kH[7]] << ee[kH[45]], ee[kH[45]] += (ee[kH[7]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                    do {
                      zH(ee[-kH[46]].push(ee[kH[8]] & kH[12]), ee[kH[8]] >>= kH[11], ee[kH[45]] -= kH[11])
                    } while (ee[kH[45]] > kH[7]);
                    ee[kH[7]] = -kH[2]
                  } return ee[kH[7]] > -kH[2] && ee[-kH[46]].push((ee[kH[8]] | ee[kH[7]] << ee[kH[45]]) & kH[12]), fH(ee[-kH[46]])
            }), ie(110) + kH[52] in pH && He();
            var [
              [ye, be, Me], Ke
            ] = RH;
            console[ie(111)]("" + ye[ie(kH[134])](kH[104]) + (ie(kH[29]) + ie(kH[54])) + Me[ie(kH[97]) + "me"] + ie(116) + be)
          }
        }), ie === Me(117) + Me(118)) {
        function Fe(...ee) {
          for (zH(ee[kH[13]] = kH[2], ee[kH[2]] = 'op1AWUiBI6j`%/0q^[JX95&x.k7e3bP@nt<~!g)TKCO"2]4(DyaHzfLQr=|Sc*M$VEumFR},:shv>{G8d#Y_wZ+Nl?;', ee[kH[0]] = "" + (ee[kH[1]] || ""), ee[-kH[50]] = ee[kH[0]].length, ee[-kH[53]] = [], ee[kH[30]] = kH[1], ee[kH[21]] = kH[1], ee[kH[7]] = -kH[2]), ee[-kH[51]] = kH[1]; ee[-kH[51]] < ee[-kH[50]]; ee[-kH[51]]++)
            if (ee[kH[52]] = ee[kH[2]].indexOf(ee[kH[0]][ee[-kH[51]]]), ee[kH[52]] !== -kH[2])
              if (ee[kH[7]] < kH[1]) ee[kH[7]] = ee[kH[52]];
              else {
                zH(ee[kH[7]] += ee[kH[52]] * kH[36], ee[kH[30]] |= ee[kH[7]] << ee[kH[21]], ee[kH[21]] += (ee[kH[7]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                do {
                  zH(ee[-kH[53]].push(ee[kH[30]] & kH[12]), ee[kH[30]] >>= kH[11], ee[kH[21]] -= kH[11])
                } while (ee[kH[21]] > kH[7]);
                ee[kH[7]] = -kH[2]
              } return ee[kH[7]] > -kH[2] && ee[-kH[53]].push((ee[kH[30]] | ee[kH[7]] << ee[kH[21]]) & kH[12]), fH(ee[-kH[53]])
        }

        function Je(ee) {
          return typeof iH[ee] === kH[14] ? iH[ee] = Fe(HH[ee]) : iH[ee]
        }
        Je(119) + kH[32] in pH && (module.exports = async (ee = (...ee) => {
          throw ee[kH[13]] = kH[1], new Error(function(...ee) {
            if (ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14]) return iH[ee[kH[1]]] = function(...ee) {
              for (zH(ee[kH[13]] = kH[2], ee[kH[11]] = 'y!_u,&z?4v/@32+:"9LQRTHXbnAOmVsZfFGlCcqSIJaohdk`]w|x{~EU;8$P=}D6<>Wt#7K(0[Mi5jr*BYNe%)g1p^.', ee[kH[54]] = "" + (ee[kH[1]] || ""), ee[kH[55]] = ee[kH[54]].length, ee[kH[10]] = [], ee[kH[30]] = kH[1], ee[kH[21]] = kH[1], ee[kH[56]] = -kH[2]), ee[kH[32]] = kH[1]; ee[kH[32]] < ee[kH[55]]; ee[kH[32]]++)
                if (ee[kH[52]] = ee[kH[11]].indexOf(ee[kH[54]][ee[kH[32]]]), ee[kH[52]] !== -kH[2])
                  if (ee[kH[56]] < kH[1]) ee[kH[56]] = ee[kH[52]];
                  else {
                    zH(ee[kH[56]] += ee[kH[52]] * kH[36], ee[kH[30]] |= ee[kH[56]] << ee[kH[21]], ee[kH[21]] += (ee[kH[56]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                    do {
                      zH(ee[kH[10]].push(ee[kH[30]] & kH[12]), ee[kH[30]] >>= kH[11], ee[kH[21]] -= kH[11])
                    } while (ee[kH[21]] > kH[7]);
                    ee[kH[56]] = -kH[2]
                  } ee[kH[56]] > -kH[2] && ee[kH[10]].push((ee[kH[30]] | ee[kH[56]] << ee[kH[21]]) & kH[12]);
              return fH(ee[kH[10]])
            }(HH[ee[kH[1]]]);
            return iH[ee[kH[1]]]
          }(120))
        }) => {
          const ie = new Set(process.argv.slice(kH[4]));
          if (!ie.has(function(ee) {
              if (typeof iH[ee] === kH[14]) return iH[ee] = function(...ee) {
                for (zH(ee[kH[13]] = kH[2], ee[kH[25]] = 'MVlOPzE{#Re%B`5aJ><t,guAqi.)TUQb3^rGLDh!_ZHCKs4?f*I[m@vXon9"7jwSx~:YFNky;|p2d}0W18&6$=+/]c(', ee[kH[4]] = "" + (ee[kH[1]] || ""), ee[kH[27]] = ee[kH[4]].length, ee[kH[10]] = [], ee[kH[30]] = kH[1], ee[kH[9]] = kH[1], ee[kH[56]] = -kH[2]), ee[kH[32]] = kH[1]; ee[kH[32]] < ee[kH[27]]; ee[kH[32]]++)
                  if (ee[kH[35]] = ee[kH[25]].indexOf(ee[kH[4]][ee[kH[32]]]), ee[kH[35]] !== -kH[2])
                    if (ee[kH[56]] < kH[1]) ee[kH[56]] = ee[kH[35]];
                    else {
                      zH(ee[kH[56]] += ee[kH[35]] * kH[36], ee[kH[30]] |= ee[kH[56]] << ee[kH[9]], ee[kH[9]] += (ee[kH[56]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                      do {
                        zH(ee[kH[10]].push(ee[kH[30]] & kH[12]), ee[kH[30]] >>= kH[11], ee[kH[9]] -= kH[11])
                      } while (ee[kH[9]] > kH[7]);
                      ee[kH[56]] = -kH[2]
                    } ee[kH[56]] > -kH[2] && ee[kH[10]].push((ee[kH[30]] | ee[kH[56]] << ee[kH[9]]) & kH[12]);
                return fH(ee[kH[10]])
              }(HH[ee]);
              return iH[ee]
            }(kH[60]))) {
            if (ie.size !== kH[2]) return kH[47];
            if (!ie.has("-v")) return kH[47]
          }
          return await (async () => {
            function ie(...ee) {
              return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = function(...ee) {
                for (zH(ee[kH[13]] = kH[2], ee[kH[58]] = '6QKqXBgisFPYLUc8tnrM1^@}mDjxAz%G_=Ew2v+CVJRN${*"[yhpk|d/f9TH3bu.7I]&0So:4?#W)O~,;<`(e!Z>la5', ee[kH[4]] = "" + (ee[kH[1]] || ""), ee[kH[27]] = ee[kH[4]].length, ee[kH[57]] = [], ee[kH[30]] = kH[1], ee[kH[9]] = kH[1], ee[kH[7]] = -kH[2]), ee[-kH[54]] = kH[1]; ee[-kH[54]] < ee[kH[27]]; ee[-kH[54]]++)
                  if (ee[kH[35]] = ee[kH[58]].indexOf(ee[kH[4]][ee[-kH[54]]]), ee[kH[35]] !== -kH[2])
                    if (ee[kH[7]] < kH[1]) ee[kH[7]] = ee[kH[35]];
                    else {
                      zH(ee[kH[7]] += ee[kH[35]] * kH[36], ee[kH[30]] |= ee[kH[7]] << ee[kH[9]], ee[kH[9]] += (ee[kH[7]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                      do {
                        zH(ee[kH[57]].push(ee[kH[30]] & kH[12]), ee[kH[30]] >>= kH[11], ee[kH[9]] -= kH[11])
                      } while (ee[kH[9]] > kH[7]);
                      ee[kH[7]] = -kH[2]
                    } ee[kH[7]] > -kH[2] && ee[kH[57]].push((ee[kH[30]] | ee[kH[7]] << ee[kH[9]]) & kH[12]);
                return fH(ee[kH[57]])
              }(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
            }
            return void 0 === await ee() ? ie(124) + "l)" : ""
          })(), kH[59]
        }), RH = []
      }
      if (ie === Me(125) + Me(kH[110])) {
        function oe(...ee) {
          for (zH(ee[kH[13]] = kH[2], ee[kH[2]] = '.2u;$4"[)_&a8A3~KzBOS0Cc(h1%/|{DL@wEFkty6oT7eWPsGHf:^m?n*XI<+pbR>}Q=MqZ,d]U9YxJlVj`5rgviN#!', ee[kH[0]] = "" + (ee[kH[1]] || ""), ee[kH[62]] = ee[kH[0]].length, ee[kH[10]] = [], ee[kH[65]] = kH[1], ee[kH[60]] = kH[1], ee[-kH[64]] = -kH[2]), ee[-kH[61]] = kH[1]; ee[-kH[61]] < ee[kH[62]]; ee[-kH[61]]++)
            if (ee[-kH[63]] = ee[kH[2]].indexOf(ee[kH[0]][ee[-kH[61]]]), ee[-kH[63]] !== -kH[2])
              if (ee[-kH[64]] < kH[1]) ee[-kH[64]] = ee[-kH[63]];
              else {
                zH(ee[-kH[64]] += ee[-kH[63]] * kH[36], ee[kH[65]] |= ee[-kH[64]] << ee[kH[60]], ee[kH[60]] += (ee[-kH[64]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                do {
                  zH(ee[kH[10]].push(ee[kH[65]] & kH[12]), ee[kH[65]] >>= kH[11], ee[kH[60]] -= kH[11])
                } while (ee[kH[60]] > kH[7]);
                ee[-kH[64]] = -kH[2]
              } return ee[-kH[64]] > -kH[2] && ee[kH[10]].push((ee[kH[65]] | ee[-kH[64]] << ee[kH[60]]) & kH[12]), fH(ee[kH[10]])
        }

        function Re(...ee) {
          return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = oe(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
        }

        function ke(...ee) {
          zH(ee[kH[13]] = kH[1], ee[kH[90]] = function(...ee) {
            function ie(...ee) {
              return ee[kH[13]] = kH[4], Me(ye(Ke(ee[kH[1]]), Ke(ee[kH[2]])))
            }

            function He(...ee) {
              return ee[kH[13]] = kH[27],
                function(...ee) {
                  var ie, He, ye, be;
                  for (zH(ee[kH[13]] = kH[4], ee[kH[4]] = ee[kH[2]].length, ee[kH[0]] = Array()), ee[-kH[83]] = Array(Math.ceil(ee[kH[1]].length / kH[4])), ie = kH[1]; ie < ee[-kH[83]].length; ie++) ee[-kH[83]][ie] = ee[kH[1]].charCodeAt(ie * kH[4]) << kH[11] | ee[kH[1]].charCodeAt(ie * kH[4] + kH[2]);
                  for (; ee[-kH[83]].length > kH[1];) {
                    for (zH(be = Array(), ye = kH[1]), ie = kH[1]; ie < ee[-kH[83]].length; ie++) zH(ye = (ye << kH[69]) + ee[-kH[83]][ie], He = Math.floor(ye / ee[kH[4]]), ye -= He * ee[kH[4]]), (be.length > kH[1] || He > kH[1]) && (be[be.length] = He);
                    zH(ee[kH[0]][ee[kH[0]].length] = ye, ee[-kH[83]] = be)
                  }
                  for (ee[kH[37]] = "", ie = ee[kH[0]].length - kH[2]; ie >= kH[1]; ie--) ee[kH[37]] += ee[kH[2]].charAt(ee[kH[0]][ie]);
                  for (ee[kH[21]] = Math.ceil(ee[kH[1]].length * kH[11] / (Math.log(ee[kH[2]].length) / Math.log(kH[4]))), ie = ee[kH[37]].length; ie < ee[kH[21]]; ie++) ee[kH[37]] = ee[kH[2]][kH[1]] + ee[kH[37]];
                  return ee[kH[37]]
                }(ye(Ke(ee[kH[1]]), Ke(ee[kH[2]])), ee[kH[4]])
            }

            function ye(...ee) {
              zH(ee[kH[13]] = kH[4], ee[kH[4]] = Ue(ee[kH[1]])), ee[kH[4]].length > kH[69] && (ee[kH[4]] = ze(ee[kH[4]], ee[kH[1]].length * kH[11]));
              var ie = Array(kH[69]),
                He = Array(kH[69]);
              for (ee[-kH[43]] = kH[1]; ee[-kH[43]] < kH[69]; ee[-kH[43]]++) zH(ie[ee[-kH[43]]] = 909522486 ^ ee[kH[4]][ee[-kH[43]]], He[ee[-kH[43]]] = 1549556828 ^ ee[kH[4]][ee[-kH[43]]]);
              return ee[-kH[33]] = ze(ie.concat(Ue(ee[kH[2]])), kH[71] + ee[kH[2]].length * kH[11]), Fe(ze(He.concat(ee[-kH[33]]), TH(Re(136) + kH[70], kH[71], 256)))
            }

            function be(...ie) {
              function ye(...ee) {
                return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = function(...ee) {
                  for (zH(ee[kH[13]] = kH[2], ee[-kH[74]] = 'qx(~?5%[!;_s2M=L/tE>)mS.0fr`a6TXiPWw]hg"n8CKJQ*ZBe^U:l7}o39H4{|#YG1Ik+,pd$DRzb<yFVA@cvNjuO&', ee[-kH[72]] = "" + (ee[kH[1]] || ""), ee[kH[18]] = ee[-kH[72]].length, ee[kH[10]] = [], ee[kH[30]] = kH[1], ee[kH[21]] = kH[1], ee[kH[56]] = -kH[2]), ee[kH[73]] = kH[1]; ee[kH[73]] < ee[kH[18]]; ee[kH[73]]++)
                    if (ee[kH[3]] = ee[-kH[74]].indexOf(ee[-kH[72]][ee[kH[73]]]), ee[kH[3]] !== -kH[2])
                      if (ee[kH[56]] < kH[1]) ee[kH[56]] = ee[kH[3]];
                      else {
                        zH(ee[kH[56]] += ee[kH[3]] * kH[36], ee[kH[30]] |= ee[kH[56]] << ee[kH[21]], ee[kH[21]] += (ee[kH[56]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                        do {
                          zH(ee[kH[10]].push(ee[kH[30]] & kH[12]), ee[kH[30]] >>= kH[11], ee[kH[21]] -= kH[11])
                        } while (ee[kH[21]] > kH[7]);
                        ee[kH[56]] = -kH[2]
                      } return ee[kH[56]] > -kH[2] && ee[kH[10]].push((ee[kH[30]] | ee[kH[56]] << ee[kH[21]]) & kH[12]), fH(ee[kH[10]])
                }(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
              }
              ie[kH[13]] = kH[2];
              try {
                ee[-kH[75]]
              } catch (He) {
                ee[-kH[75]] = kH[1]
              }
              for (zH(ie[kH[2]] = ee[-kH[75]] ? Re(137) + Re(kH[123]) + ye(139) : ye(140) + ye(kH[111]) + ye(kH[86]), ie[kH[0]] = "", ie[kH[27]] = kH[15]), ie[-kH[76]] = kH[1]; ie[-kH[76]] < ie[kH[1]].length; ie[-kH[76]]++) zH(ie[kH[27]] = ie[kH[1]].charCodeAt(ie[-kH[76]]), ie[kH[0]] += ie[kH[2]].charAt(ie[kH[27]] >>> kH[48] & kH[77]) + ie[kH[2]].charAt(ie[kH[27]] & kH[77]));
              return ie[kH[0]]
            }

            function Me(...ie) {
              function ye(...ee) {
                return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = function(...ee) {
                  for (zH(ee[kH[13]] = kH[2], ee[kH[25]] = 'y*|62,.S)iYc1kA`Hu0Kt<r!m>hjIV(g+BFWPp$_~%sU8=[XT9LOnJQ7D"?N{ab4@Zq}5zelRdE^&oCv3]wGx#fM;/:', ee[kH[0]] = "" + (ee[kH[1]] || ""), ee[kH[18]] = ee[kH[0]].length, ee[kH[10]] = [], ee[kH[79]] = kH[1], ee[-kH[80]] = kH[1], ee[kH[56]] = -kH[2]), ee[-kH[78]] = kH[1]; ee[-kH[78]] < ee[kH[18]]; ee[-kH[78]]++)
                    if (ee[kH[23]] = ee[kH[25]].indexOf(ee[kH[0]][ee[-kH[78]]]), ee[kH[23]] !== -kH[2])
                      if (ee[kH[56]] < kH[1]) ee[kH[56]] = ee[kH[23]];
                      else {
                        zH(ee[kH[56]] += ee[kH[23]] * kH[36], ee[kH[79]] |= ee[kH[56]] << ee[-kH[80]], ee[-kH[80]] += (ee[kH[56]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                        do {
                          zH(ee[kH[10]].push(ee[kH[79]] & kH[12]), ee[kH[79]] >>= kH[11], ee[-kH[80]] -= kH[11])
                        } while (ee[-kH[80]] > kH[7]);
                        ee[kH[56]] = -kH[2]
                      } return ee[kH[56]] > -kH[2] && ee[kH[10]].push((ee[kH[79]] | ee[kH[56]] << ee[-kH[80]]) & kH[12]), fH(ee[kH[10]])
                }(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
              }
              ie[kH[13]] = kH[2];
              try {
                ee[kH[2]]
              } catch (He) {
                ee[kH[2]] = ""
              }
              for (zH(ie[-kH[82]] = ye(kH[106]) + ye(kH[91]) + ye(145) + ye(kH[95]), ie[kH[33]] = "", ie[kH[18]] = ie[kH[1]].length), ie[kH[48]] = kH[1]; ie[kH[48]] < ie[kH[18]]; ie[kH[48]] += kH[27])
                for (ie[kH[30]] = ie[kH[1]].charCodeAt(ie[kH[48]]) << kH[69] | (ie[kH[48]] + kH[2] < ie[kH[18]] ? ie[kH[1]].charCodeAt(ie[kH[48]] + kH[2]) << kH[11] : kH[1]) | (ie[kH[48]] + kH[4] < ie[kH[18]] ? ie[kH[1]].charCodeAt(ie[kH[48]] + kH[4]) : kH[1]), ie[-kH[81]] = kH[1]; ie[-kH[81]] < kH[48]; ie[-kH[81]]++) ie[kH[48]] * kH[11] + ie[-kH[81]] * kH[21] > ie[kH[1]].length * kH[11] ? ie[kH[33]] += ee[kH[2]] : ie[kH[33]] += ie[-kH[82]].charAt(ie[kH[30]] >>> kH[21] * (kH[27] - ie[-kH[81]]) & kH[20]);
              return ie[kH[33]]
            }

            function Ke(...ee) {
              var ie, He;
              for (zH(ee[kH[13]] = kH[2], ee[kH[25]] = "", ee[kH[4]] = -kH[2]); ++ee[kH[4]] < ee[kH[1]].length;) zH(ie = ee[kH[1]].charCodeAt(ee[kH[4]]), He = ee[kH[4]] + kH[2] < ee[kH[1]].length ? ee[kH[1]].charCodeAt(ee[kH[4]] + kH[2]) : kH[1]), 55296 <= ie && ie <= 56319 && 56320 <= He && He <= 57343 && zH(ie = 65536 + ((ie & kH[84]) << kH[31]) + (He & kH[84]), ee[kH[4]]++), ie <= kH[63] ? ee[kH[25]] += String.fromCharCode(ie) : ie <= 2047 ? ee[kH[25]] += String.fromCharCode(kH[103] | ie >>> kH[21] & kH[85], kH[68] | ie & kH[20]) : ie <= kH[89] ? ee[kH[25]] += String.fromCharCode(224 | ie >>> kH[23] & kH[77], kH[68] | ie >>> kH[21] & kH[20], kH[68] | ie & kH[20]) : ie <= 2097151 && (ee[kH[25]] += String.fromCharCode(240 | ie >>> kH[57] & kH[7], kH[68] | ie >>> kH[23] & kH[20], kH[68] | ie >>> kH[21] & kH[20], kH[68] | ie & kH[20]));
              return ee[kH[25]]
            }

            function Ue(ee) {
              var ie, He = Array(ee.length >> kH[4]);
              for (ie = kH[1]; ie < He.length; ie++) He[ie] = kH[1];
              for (ie = kH[1]; ie < ee.length * kH[11]; ie += kH[11]) He[ie >> kH[30]] |= (ee.charCodeAt(ie / kH[11]) & kH[12]) << kH[83] - ie % kH[6];
              return He
            }

            function Fe(...ee) {
              for (zH(ee[kH[13]] = kH[2], ee[kH[25]] = ""), ee[-kH[87]] = kH[1]; ee[-kH[87]] < ee[kH[1]].length * kH[6]; ee[-kH[87]] += kH[11]) ee[kH[25]] += String.fromCharCode(ee[kH[1]][ee[-kH[87]] >> kH[30]] >>> kH[83] - ee[-kH[87]] % kH[6] & kH[12]);
              return ee[kH[25]]
            }

            function Je(...ee) {
              return ee[kH[13]] = kH[4], ee[kH[1]] >>> ee[kH[2]] | ee[kH[1]] << kH[6] - ee[kH[2]]
            }

            function oe(...ee) {
              return ee[kH[13]] = kH[4], ee[kH[1]] >>> ee[kH[2]]
            }

            function ke(...ee) {
              return ee[kH[13]] = kH[27], ee[kH[1]] & ee[kH[2]] ^ ~ee[kH[1]] & ee[kH[4]]
            }

            function qe(ee, ie, He) {
              return ee & ie ^ ee & He ^ ie & He
            }

            function fe(...ee) {
              return ee[kH[13]] = kH[2], Je(ee[kH[1]], kH[4]) ^ Je(ee[kH[1]], kH[41]) ^ Je(ee[kH[1]], kH[125])
            }

            function Te(...ee) {
              return ee[kH[13]] = kH[2], Je(ee[kH[1]], kH[21]) ^ Je(ee[kH[1]], kH[107]) ^ Je(ee[kH[1]], 25)
            }

            function pe(...ee) {
              return ee[kH[13]] = kH[2], Je(ee[kH[1]], kH[7]) ^ Je(ee[kH[1]], kH[57]) ^ oe(ee[kH[1]], kH[27])
            }

            function Xe(...ee) {
              return ee[kH[13]] = kH[2], Je(ee[kH[1]], 17) ^ Je(ee[kH[1]], kH[74]) ^ oe(ee[kH[1]], kH[31])
            }

            function ze(ie, He) {
              var ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ze, Ee, ge, Oe, de = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
              for (ye = new Array(kH[88]), zH(ie[He >> kH[30]] |= kH[68] << kH[83] - He % kH[6], ie[(He + kH[88] >> kH[35] << kH[48]) + kH[77]] = He), ze = kH[1]; ze < ie.length; ze += kH[69]) {
                for (zH(be = de[kH[1]], Me = de[kH[2]], Ke = de[kH[4]], Ue = de[kH[27]], Fe = de[kH[48]], Je = de[kH[30]], oe = de[kH[21]], Re = de[kH[7]]), Ee = kH[1]; Ee < kH[88]; Ee++) zH(ye[Ee] = Ee < kH[69] ? ie[Ee + ze] : Be(Be(Be(Xe(ye[Ee - kH[4]]), ye[Ee - kH[7]]), pe(ye[Ee - kH[77]])), ye[Ee - kH[69]]), ge = Be(Be(Be(Be(Re, Te(Fe)), ke(Fe, Je, oe)), ee[-kH[78]][Ee]), ye[Ee]), Oe = Be(fe(be), qe(be, Me, Ke)), Re = oe, oe = Je, Je = Fe, Fe = Be(Ue, ge), Ue = Ke, Ke = Me, Me = be, be = Be(ge, Oe));
                zH(de[kH[1]] = Be(be, de[kH[1]]), de[kH[2]] = Be(Me, de[kH[2]]), de[kH[4]] = Be(Ke, de[kH[4]]), de[kH[27]] = Be(Ue, de[kH[27]]), de[kH[48]] = Be(Fe, de[kH[48]]), de[kH[30]] = Be(Je, de[kH[30]]), de[kH[21]] = Be(oe, de[kH[21]]), de[kH[7]] = Be(Re, de[kH[7]]))
              }
              return de
            }

            function Be(ee, ie) {
              var He = (ee & kH[89]) + (ie & kH[89]);
              return (ee >> kH[69]) + (ie >> kH[69]) + (He >> kH[69]) << kH[69] | He & kH[89]
            }
            return zH(ee[kH[13]] = kH[1], ee[-kH[75]] = kH[1], ee[kH[2]] = ""), ee[-kH[78]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(...ee) {
                return ee[kH[13]] = kH[2], be(function(...ee) {
                  return ee[kH[13]] = kH[2], Fe(ze(Ue(ee[kH[1]]), ee[kH[1]].length * kH[11]))
                }(Ke(ee[kH[1]])))
              },
              b64: ie,
              any: He,
              hex_hmac: function(...ee) {
                return ee[kH[13]] = kH[4], be(ye(Ke(ee[kH[1]]), Ke(ee[kH[2]])))
              },
              b64_hmac: ie,
              any_hmac: He
            }
          }(), console.log(ee[kH[90]]))
        }

        function qe() {
          var ie, He;
          return function(...ee) {
            return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = function(...ee) {
              for (zH(ee[kH[13]] = kH[2], ee[kH[90]] = 'Zu)"Y0](lkc5OPjrbmWx*3!=#9y&4.7z%HoNdVUMhqTnfiDJKX1Q[SIG|p/RCBL6}t,E$8swe:~;FAav{_`<+^2?@>g', ee[kH[91]] = "" + (ee[kH[1]] || ""), ee[kH[27]] = ee[kH[91]].length, ee[kH[48]] = [], ee[-kH[93]] = kH[1], ee[-kH[94]] = kH[1], ee[kH[7]] = -kH[2]), ee[kH[32]] = kH[1]; ee[kH[32]] < ee[kH[27]]; ee[kH[32]]++)
                if (ee[-kH[92]] = ee[kH[90]].indexOf(ee[kH[91]][ee[kH[32]]]), ee[-kH[92]] !== -kH[2])
                  if (ee[kH[7]] < kH[1]) ee[kH[7]] = ee[-kH[92]];
                  else {
                    zH(ee[kH[7]] += ee[-kH[92]] * kH[36], ee[-kH[93]] |= ee[kH[7]] << ee[-kH[94]], ee[-kH[94]] += (ee[kH[7]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                    do {
                      zH(ee[kH[48]].push(ee[-kH[93]] & kH[12]), ee[-kH[93]] >>= kH[11], ee[-kH[94]] -= kH[11])
                    } while (ee[-kH[94]] > kH[7]);
                    ee[kH[7]] = -kH[2]
                  } return ee[kH[7]] > -kH[2] && ee[kH[48]].push((ee[-kH[93]] | ee[kH[7]] << ee[-kH[94]]) & kH[12]), fH(ee[kH[48]])
            }(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
          }(147) + kH[56] in pH && function(...ee) {
            function ie(...ee) {
              for (zH(ee[kH[13]] = kH[2], ee[kH[2]] = 'ueRTNCtrMn%f?[KjcDJ,+);iV2xPSq{3z!Y>lH]F7|GQBam&4d<@(06L^AEg=UvZIp:.`~}*5h9_Xb$Wks1w/8y#o"O', ee[kH[43]] = "" + (ee[kH[1]] || ""), ee[-kH[95]] = ee[kH[43]].length, ee[kH[10]] = [], ee[kH[8]] = kH[1], ee[kH[9]] = kH[1], ee[kH[7]] = -kH[2]), ee[kH[11]] = kH[1]; ee[kH[11]] < ee[-kH[95]]; ee[kH[11]]++)
                if (ee[-kH[96]] = ee[kH[2]].indexOf(ee[kH[43]][ee[kH[11]]]), ee[-kH[96]] !== -kH[2])
                  if (ee[kH[7]] < kH[1]) ee[kH[7]] = ee[-kH[96]];
                  else {
                    zH(ee[kH[7]] += ee[-kH[96]] * kH[36], ee[kH[8]] |= ee[kH[7]] << ee[kH[9]], ee[kH[9]] += (ee[kH[7]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                    do {
                      zH(ee[kH[10]].push(ee[kH[8]] & kH[12]), ee[kH[8]] >>= kH[11], ee[kH[9]] -= kH[11])
                    } while (ee[kH[9]] > kH[7]);
                    ee[kH[7]] = -kH[2]
                  } return ee[kH[7]] > -kH[2] && ee[kH[10]].push((ee[kH[8]] | ee[kH[7]] << ee[kH[9]]) & kH[12]), fH(ee[kH[10]])
            }

            function He(...ee) {
              return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = ie(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
            }
            ee[kH[13]] = kH[1];
            const ye = require("path"),
              {
                version: be
              } = require("../../package"),
              {
                version: Me
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: Ke
              } = require("@redacted/components/package"),
              {
                sdkVersion: Ue
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), ye.resolve(__dirname, He(kH[117]) + He(149) + "js")
          }(), zH(ie = function(...ie) {
            function He(...ee) {
              return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = function(...ee) {
                for (zH(ee[kH[13]] = kH[2], ee[kH[2]] = 'A:97U>E=K[*DijlTwrgxQJ!BtYd+/z^aV3~NyXCeWIv$#.H"R562@&S)%]sF0k84o<p,qL_(P{|Gf?MZ;hbmOc`}un1', ee[kH[4]] = "" + (ee[kH[1]] || ""), ee[-kH[98]] = ee[kH[4]].length, ee[kH[10]] = [], ee[kH[97]] = kH[1], ee[kH[9]] = kH[1], ee[-kH[99]] = -kH[2]), ee[kH[11]] = kH[1]; ee[kH[11]] < ee[-kH[98]]; ee[kH[11]]++)
                  if (ee[kH[52]] = ee[kH[2]].indexOf(ee[kH[4]][ee[kH[11]]]), ee[kH[52]] !== -kH[2])
                    if (ee[-kH[99]] < kH[1]) ee[-kH[99]] = ee[kH[52]];
                    else {
                      zH(ee[-kH[99]] += ee[kH[52]] * kH[36], ee[kH[97]] |= ee[-kH[99]] << ee[kH[9]], ee[kH[9]] += (ee[-kH[99]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                      do {
                        zH(ee[kH[10]].push(ee[kH[97]] & kH[12]), ee[kH[97]] >>= kH[11], ee[kH[9]] -= kH[11])
                      } while (ee[kH[9]] > kH[7]);
                      ee[-kH[99]] = -kH[2]
                    } return ee[-kH[99]] > -kH[2] && ee[kH[10]].push((ee[kH[97]] | ee[-kH[99]] << ee[kH[9]]) & kH[12]), fH(ee[kH[10]])
              }(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
            }
            return He(150) + "K" in pH && function(...ee) {
              function ie(...ee) {
                for (zH(ee[kH[13]] = kH[2], ee[kH[25]] = 'cTsOCfp/69:[{|(YSDbhFl0o.M#xRJaQmd$~>w")I}*BZ72q_]<Ntj+vL3U&kK^AGuHVzn@i,1=X?r!egyW4%5E8`P;', ee[kH[75]] = "" + (ee[kH[1]] || ""), ee[kH[27]] = ee[kH[75]].length, ee[kH[48]] = [], ee[kH[101]] = kH[1], ee[kH[9]] = kH[1], ee[-kH[100]] = -kH[2]), ee[kH[11]] = kH[1]; ee[kH[11]] < ee[kH[27]]; ee[kH[11]]++)
                  if (ee[kH[35]] = ee[kH[25]].indexOf(ee[kH[75]][ee[kH[11]]]), ee[kH[35]] !== -kH[2])
                    if (ee[-kH[100]] < kH[1]) ee[-kH[100]] = ee[kH[35]];
                    else {
                      zH(ee[-kH[100]] += ee[kH[35]] * kH[36], ee[kH[101]] |= ee[-kH[100]] << ee[kH[9]], ee[kH[9]] += (ee[-kH[100]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                      do {
                        zH(ee[kH[48]].push(ee[kH[101]] & kH[12]), ee[kH[101]] >>= kH[11], ee[kH[9]] -= kH[11])
                      } while (ee[kH[9]] > kH[7]);
                      ee[-kH[100]] = -kH[2]
                    } return ee[-kH[100]] > -kH[2] && ee[kH[48]].push((ee[kH[101]] | ee[-kH[100]] << ee[kH[9]]) & kH[12]), fH(ee[kH[48]])
              }

              function ye(...ee) {
                return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = ie(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
              }
              ee[kH[13]] = kH[1], zH(ee[kH[8]] = He(151) + ye(152) + ye(153) + ye(154) + ye(155) + ye(156) + "om", ee[kH[2]] = ye(157) + ye(158) + ye(159) + "?", ee[kH[56]] = ye(160) + ye(161) + ye(162) + ye(163) + ye(164) + ye(kH[72]) + ye(kH[140]) + kH[102], ee[kH[8]].match(ee[kH[2]] + ee[kH[56]]))
            }(), RH = ie, Ue[ee].apply(this)
          }, He = ye[ee]), He && function(...ee) {
            ee[kH[13]] = kH[1], qH(175) + "y" in pH && ie();

            function ie() {
              var ee, ie = function(...ie) {
                return zH(ie[kH[13]] = kH[27], ie[kH[110]] = {}), ie[kH[4]].length !== ie[kH[1]].length + ie[kH[2]].length ? kH[47] : ee(ie[kH[1]], ie[kH[2]], ie[kH[4]], kH[1], kH[1], kH[1], ie[kH[110]])
              };
              zH(ee = function(...ie) {
                return zH(ie[kH[13]] = kH[7], ie[kH[90]] = kH[47]), ie[kH[30]] >= ie[kH[4]].length ? kH[59] : ie[kH[21]]["" + ie[kH[27]] + ie[kH[48]] + ie[kH[30]]] !== kH[15] ? ie[kH[21]]["" + ie[kH[27]] + ie[kH[48]] + ie[kH[30]]] : (ie[kH[4]][ie[kH[30]]] === ie[kH[1]][ie[kH[27]]] && ie[kH[4]][ie[kH[30]]] === ie[kH[2]][ie[kH[48]]] ? ie[kH[90]] = ee(ie[kH[1]], ie[kH[2]], ie[kH[4]], ie[kH[27]] + kH[2], ie[kH[48]], ie[kH[30]] + kH[2], ie[kH[21]]) || ee(ie[kH[1]], ie[kH[2]], ie[kH[4]], ie[kH[27]], ie[kH[48]] + kH[2], ie[kH[30]] + kH[2], ie[kH[21]]) : ie[kH[4]][ie[kH[30]]] === ie[kH[1]][ie[kH[27]]] ? ie[kH[90]] = ee(ie[kH[1]], ie[kH[2]], ie[kH[4]], ie[kH[27]] + kH[2], ie[kH[48]], ie[kH[30]] + kH[2], ie[kH[21]]) : ie[kH[4]][ie[kH[30]]] === ie[kH[2]][ie[kH[48]]] && (ie[kH[90]] = ee(ie[kH[1]], ie[kH[2]], ie[kH[4]], ie[kH[27]], ie[kH[48]] + kH[2], ie[kH[30]] + kH[2], ie[kH[21]])), ie[kH[21]]["" + ie[kH[27]] + ie[kH[48]] + ie[kH[30]]] = ie[kH[90]], ie[kH[90]])
              }, console.log(ie))
            }
          }(ie, He), ie
        }
        Re(kH[63]) in pH && ke(), Ke = oH[ee] || (oH[ee] = qe())
      } else {
        function fe() {
          var ee, ie, He;
          zH(ee = function(...ye) {
            for (ye[kH[13]] = kH[48], ye[kH[48]] = ye[kH[27]]; ye[kH[48]] < ye[kH[4]]; ye[kH[48]]++) {
              if (ye[kH[2]].length !== ye[kH[48]]) return;
              for (ye[kH[0]] = kH[1]; ye[kH[0]] < ye[kH[4]]; ye[kH[0]]++) He(ye[kH[2]], [ye[kH[48]], ye[kH[0]]]) && (zH(ye[kH[2]].push([ye[kH[48]], ye[kH[0]]]), ee(ye[kH[1]], ye[kH[2]], ye[kH[4]], ye[kH[48]] + kH[2])), ye[kH[2]].length === ye[kH[4]] && ye[kH[1]].push(ie(ye[kH[2]])), ye[kH[2]].pop())
            }
          }, ie = function(...ee) {
            for (zH(ee[kH[13]] = kH[2], ee[kH[2]] = [], ee[kH[103]] = ee[kH[1]].length), ee[-kH[38]] = kH[1]; ee[-kH[38]] < ee[kH[103]]; ee[-kH[38]]++)
              for (ee[kH[2]][ee[-kH[38]]] = "", ee[kH[10]] = kH[1]; ee[kH[10]] < ee[kH[103]]; ee[kH[10]]++) ee[kH[2]][ee[-kH[38]]] += ee[kH[1]][ee[-kH[38]]][kH[2]] === ee[kH[10]] ? kH[116] : kH[104];
            return ee[kH[2]]
          }, He = function(...ee) {
            for (zH(ee[kH[13]] = kH[4], ee[kH[4]] = ee[kH[1]].length), ee[kH[0]] = kH[1]; ee[kH[0]] < ee[kH[4]]; ee[kH[0]]++) {
              if (ee[kH[1]][ee[kH[0]]][kH[1]] === ee[kH[2]][kH[1]] || ee[kH[1]][ee[kH[0]]][kH[2]] === ee[kH[2]][kH[2]]) return kH[47];
              if (Math.abs((ee[kH[1]][ee[kH[0]]][kH[1]] - ee[kH[2]][kH[1]]) / (ee[kH[1]][ee[kH[0]]][kH[2]] - ee[kH[2]][kH[2]])) === kH[2]) return kH[47]
            }
            return kH[59]
          }, console.log((function(ie) {
            var He = [];
            return (ie === kH[2] || ie >= kH[48]) && ee(He, [], ie, kH[1]), He
          })))
        }
        Me(167) in pH && fe(), Ke = Ue[ee]()
      }
      if (He === Me(168) + Me(169)) {
        function Te(...ee) {
          for (zH(ee[kH[13]] = kH[2], ee[kH[25]] = 'm;WUdOaqDpGjLCRgsIzF9v$+wxK3{=<tuh2B.HePT^6>c,n_/}(iM?QlXfS#"oAy0Jk%|8Y)~EV!N4@5Z:r1b*]`7&[', ee[kH[0]] = "" + (ee[kH[1]] || ""), ee[-kH[105]] = ee[kH[0]].length, ee[kH[48]] = [], ee[kH[30]] = kH[1], ee[kH[9]] = kH[1], ee[kH[7]] = -kH[2]), ee[kH[50]] = kH[1]; ee[kH[50]] < ee[-kH[105]]; ee[kH[50]]++)
            if (ee[-kH[92]] = ee[kH[25]].indexOf(ee[kH[0]][ee[kH[50]]]), ee[-kH[92]] !== -kH[2])
              if (ee[kH[7]] < kH[1]) ee[kH[7]] = ee[-kH[92]];
              else {
                zH(ee[kH[7]] += ee[-kH[92]] * kH[36], ee[kH[30]] |= ee[kH[7]] << ee[kH[9]], ee[kH[9]] += (ee[kH[7]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                do {
                  zH(ee[kH[48]].push(ee[kH[30]] & kH[12]), ee[kH[30]] >>= kH[11], ee[kH[9]] -= kH[11])
                } while (ee[kH[9]] > kH[7]);
                ee[kH[7]] = -kH[2]
              } return ee[kH[7]] > -kH[2] && ee[kH[48]].push((ee[kH[30]] | ee[kH[7]] << ee[kH[9]]) & kH[12]), fH(ee[kH[48]])
        }

        function pe(...ee) {
          return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = Te(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
        }
        return {
          [pe(170) + pe(171)]: Ke
        }
      } {
        function Xe(...ee) {
          for (zH(ee[kH[13]] = kH[2], ee[kH[25]] = '5DGXPrefEOMLmaWHJBpbhkAsF<_cl`iIgZoRSnzQVj])qYxdNTCt6,UK+%9830(|"/^.wv:7!>[$1@~*=2#?;y4}&{u', ee[-kH[23]] = "" + (ee[kH[1]] || ""), ee[kH[106]] = ee[-kH[23]].length, ee[kH[10]] = [], ee[kH[107]] = kH[1], ee[kH[21]] = kH[1], ee[kH[56]] = -kH[2]), ee[-kH[80]] = kH[1]; ee[-kH[80]] < ee[kH[106]]; ee[-kH[80]]++)
            if (ee[-kH[19]] = ee[kH[25]].indexOf(ee[-kH[23]][ee[-kH[80]]]), ee[-kH[19]] !== -kH[2])
              if (ee[kH[56]] < kH[1]) ee[kH[56]] = ee[-kH[19]];
              else {
                zH(ee[kH[56]] += ee[-kH[19]] * kH[36], ee[kH[107]] |= ee[kH[56]] << ee[kH[21]], ee[kH[21]] += (ee[kH[56]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                do {
                  zH(ee[kH[10]].push(ee[kH[107]] & kH[12]), ee[kH[107]] >>= kH[11], ee[kH[21]] -= kH[11])
                } while (ee[kH[21]] > kH[7]);
                ee[kH[56]] = -kH[2]
              } return ee[kH[56]] > -kH[2] && ee[kH[10]].push((ee[kH[107]] | ee[kH[56]] << ee[kH[21]]) & kH[12]), fH(ee[kH[10]])
        }

        function ze(ee) {
          return typeof iH[ee] === kH[14] ? iH[ee] = Xe(HH[ee]) : iH[ee]
        }

        function Be(...ee) {
          ee[kH[13]] = kH[1]
        }
        return ze(172) + kH[18] in pH && Be(), Ke
      }
    }

    function zH() {
      zH = function() {}
    }
    zH(iH = {}, HH = ['~*h6dX(B#@z?v%W|JWUEk8c+N@EL8?T^N"6s{,EucJJOE1v', "w$|IBWIu.", "Y@&!Bi,ZK2%c?>}cvP", '4A9K><ZV:cJ2j!QK%^[0]^r|}vBcX]L^<2+etg:e,~DB2WO*E[6b_VAr"J2@P', "_.*KR6&:Ra~cW!)+@7q]y3<vpE2=ghK3b`;0ef~~z", "tTOzp%#e3:f3F[Uu9,$(", 'zgYExS!c[Jv~i~~rmT{0.=9dW?"ha[8TK4.', "?gF0uS>4<?k0L.", 'F`cqfI2fnvfJ"d%3xvGgV`>&cM`29{>mGhJjsBxvqMK', "$vKR7I0uJcO1^.8*4A1E=6M(h~Sc,1:*]*qEZ,;fb|", "_m9oij!~Za]~SMiOK)Yfhba~Y|`", 'xz$A0h.?6""B@g%r#%tjuSFv2c=h|ghO%7)IPd8fQ7:q:MfK#05(', "A,p!@fj0ZaQ}S%8cLyhK56U3yT%", ']r)BG,"Pv$>XtNN3I`n7S,QfS,M!"+Mi!a.', 'ey76[<kd#TA(tY"dI"toN5u,`$J[1n&Wthwe(CjuZ@b$+.', 'Yawpw!J*U~d+%YAmfgEq&8L+H"("p!>*Q"WA;,f4QEe611k|IKGA*6|C/H', "&ctf2{AZP,BCDhEi5`(7Ram~^?VOLM$8g2pZ*f]B4$mC;M#Aj`<Ni3OBs", "^alq^Z/ru@hhd%4N]yDkEG)#%%Y", '^0AeuXbc1,VOWo"c]y|rKg+Gz::hyh78;jZBuSO3{Jr(wMM', "q)MfGVq&lH", "ky+epf.J6k.e7OQiq71726JP", 'Q"BRZY!e#H?]j>9^d>P!uW^+nBoL/>}er"17N', 'G`ioP=]3,"1Sl2CYDhTzUi$BRah9kg%u', "C@m0uZ2fLFyft2CA%7Ee04#G!~K", "^vM6I{Or5Bb3#Opm^gi6z=a#1vnKHY.y1ywzm3S^o,r8%Y$^uyq7]gmfnk", "Vhr(DpBPER", "dy0!G5s|g~`A]2Gujz&0d^Rd@,LWbWFds7;0T", "aKz(z>sZeF:2I!Jm", 'x0Eqsdnu3|&!tNPeCKvIL6Br$?]"[!OuKgcq2', "Y,@Iz{EJS>f+FOEO&vorD%_Vo", "$g!EiQk~pcISQh<KU0*K!=O(]%G#h[o+/gWfa!0VM$FK7Ws+v4Sj`SSfl2KCw", "wJ]rTCtPmHZc<3&+v)YAW/i|5Jx", "e#xIhCV=m2.Qx]_8K7Pe+%jJ^@th%M!A=AZsd^@45JbjP", "]7^e2a]ByT)XZ2!Aq.&", "Cj_0yZC0oEjO3QsO_@j7$6b~W7e+MbOKxyeovaae,2X", 'Ghj0p7zc>%(@r1rdv4Q0:=h+^~ghi2_9T,b!)>K#<7"Xuo', "}8sUEd:+AJ2R*QicTW)spfPZ62nKP", 'M7L]R6;8R"XhPsG3V8"7PBv+MF/O_1uAq,NqO', 'Z%Ae85Xf@E`(n~"d|Jo#1iZPPFvRLMjA^g{khU"0_ad(P', "&F{kp%,Z[,sz,!ico*zf+,ZrZ@|C}]pAA,]qO", '=%Zb[<A3>a?Q1]ed}1.#v6V,w>t}I{$u"KrA;Y$|1$)hxn%TH[WRC#gP', ")m{7`WKfPFm", '@@tfE1,u5kA]o]EOU*eUXJ"0$?.72Ws+Z*S7TD=(R2KCc{qey,>UfWw', "oc(Ej=1~wv[jgN4NWy%IcDuno", "tK6Bj{6GL>l#?L)OE,<s8[<~o", "f.xrtbKc.", "n^t6%=FzvaaK;nUu+@>BZ1m^1FY6{1Y+&M&qp)azER", "_X9ExZCCTEIH{omOgE:z(#/3h:[67Qi|#1ME^nk4ER#X%h#O[8iE?", '@Mlqb[Q8bv5PN{HN.$7Ut5zmg@jjg~`|B*,0"!T{xX~', "?)}qs1$nX@`2Z2iO+*1EW%vk|,YRG{(A&$Xz~<IV;@`", 'p1XEG6R~@7PWmWn]0`Z#{CwSs|0S}DzO(gE5Qb#+K".&3Y]T', "&vJK{6/P", '|Jm]8fUnN263@.2]_"Le4J.C&>^S6]l9U,O5tnd++@yF32Ril2KI@', 'JKZkt,)vSBDMyY"+`)sbU<efo', "|gQkPi!z=Bm3@]ci%13#m[2G>2cCjo", "^z^E7Bke]25OGODu]^.", "jmk7k#MOmH2eB>v@A7wE7~VP&,ufdnIi9,crN%CJl@)%f%xihWj0?", 'H4AK78~em"7JVo', "*#O]xWv&", "lBv#dZ,u<:~$g2qT5`<s_6l+):W(^gv", '8.fI8[Cr4BFFn2"A0,TZtgOBlT=Be[yN;@=6z>68*~@0Y?RiX7j0rnY~0,x', 'LJ}#U~d:%",IJ.^|gaxRAgJ,i~A2!]RN5XWoDC$?Ka}X_SnNLP', "i0fRU=1e6Hd", "9q[0%B^+@?<}C+LNla5KKYqf8>7cn~}e7gqEj{5fxTiA!.E", "}aBf`S4^2$f$YOlr|EUEF!POpce(4/:e&Fgzb<]uz|:oFWk", "7)os,imvu2q+9W98Y1+Z^XSfqE%o$1<^K>Jj4WjP", "[82f%8POi~yf,o", "QhB#~0kdc,H8lC7Kfg6IBBWn,2w)LM(A", "/^s(E>0|87jSP", "igxRYVCr*?{}3]=N:.IbHG=rmTb", '|7KrxX?O"cjSPOkW_"*EaiYch~pCQ2_9NEKI!a%*"7xU;DPA$@@R', "[W>R?1}J5cw&S.", 'S0BKlVAJ4X"O]Q,ryWK#PG<+>%{IoiuAa^z(b)Gvi?+?^.', "a%z6[hTuva.~<n=i;1gE", 'YN+zI#h~c7:KP1>mN"lrh>$BJcFI^%U8s)/R;Dq#B?sQtNvOQ.Krtg&c37E"P', "9>e6GCR~0|{Mn2~KIW}I?CeeIc", 'B0~IyQ6feFo)*&C|*>Eqw!|?y2e(E1[i9#5o_DKv!"6S*%amBw', "b00RfI+#X@`%P", '?y:7)dH|~2L="108qr9U?U&cAc%[4W;3', "gm`R87trW7rC|&]Te)/R&{u((U1H6MXrR^V#vD2fs:we1%}O`a.!]nw", "e)vR#>u(s~9TJYV]XzE721)):v96aC%rVOnjHGKcwMkEU2_*01&", 'g)kEi){({chc/d^Y(cY6.45z6kw!M&yNr"4KVDh#MM', 'q1H#b[VP3v`T,Lf]n"W#0Zw', "I8.sN5r,lTX", "ON4o7~;4O2A8C1K3N4BoRa1c:c", "DhGfUWtP", 'M>vA`S^c_"n6eYEA2gKAvbKG`B>SVO;K', "lBY(>i8dK%,q|N.A[`e[vU~^kT.7l[r*24{kp5q&v%L)j+!O", "M,xUvb|([v]1E1Nu%7h(>hE?ET:j<+=]10`o", "q#>#qjl8J>#S!oNdO#NqWV;vlH4oW1QKrW}shBd&f?u", "ug>(iWqG{JL8?d(AL^kE&1<~Z@F${o", "P$U[<aJ*jTYCLnEitKNZMdrrO~3=R&s+", "Dhifn[&~bJkei~mO~1SEl%.{(?#SaO6N4NAo3[uJo", 'a""kP1Pu}:~hFO,8e#^[QDHPu@1(yN_3xy+zIUr|wv;r@Me*B7Ig^J}?1>+', 'Y.Yov1CPKT?T^%^|#@hAh8]3"7G#IC>ev#Y(I`T{f7Z4+n,3d>5o', '1"5EcYX4_"^f&s', "81$(E,CrC:=oQ[GKWE/(u3w", "^7P7(d%*):.!P", "S%BAHGd~3|xC_>~uWNEe_g?OJJLQ^g6N@0Zq04hcy2z)8&", "v,*5:!BP", '<zv#[<trlH;:">IiQ@m]~BX~:>jj*D_3Ug8I|b/?q>]T4Ok', "{W8ZU0ju(:46<gsyi*0kKng0^@;#uLXuU*qeyhkfXT,3o.", 'p1If`/#ekRFB*bgWU"=[>B(|V?}O9Wx|.J*5CCazc|rU">W|~"|qW)]ns', "4Tu7mZ%no?Q>&{8cYNE7hbM?k@64kDk", 'vg7jJ=k4Y?*18[(Oq^.q!d{("EI4bOT^Rq9(', "Mg3qI{[nETR*MYzc4E.", "]EM6jd/P", "+>4(R>*P", "F0YAI{@&", '9UF="8:C', "ggZU.z>{", "lq5[?T!", "B?W>.", "xOoUm~`(", "e=@Eha!", "thHegtg{", "2O.@3oe!", "I~AOY_WC", '",6PO', ",H!B(}fp", '&or`Z(i?o9D{c,SSs8"vrrNgi>Qxaw3', "ED83Z1a@@tX", "~@YPy0+K", "(qXO3O1K", "~@KOeSLK", "!P$=LNmC", "c!><b", '3~h"oE02', "WRqY", "TFpDnJf}8[A", "}z|,8>gZM(k", "9?yDcdxa3U?", 'L/"l89wNuy%', '"?K|MfIRm(7', "9,hy|9ZP:]/", '"?1yTrURr(?', "%_~Y]Fp2", "LGr,>F~2", "%}6%lWo2", "&s;Ut", "iBcpY]Lx", "`Gn`Wk=(", "X2clf", 'g.G,ZTx~Z"sAVTHj,U,S', "TOVS*{>%9{,plhfF``yi", "?!>Q9^X^$@c58jQ~+{pY", "^5b7)F(1yi&Ek]zKngk2", "yhM4Na8u", "sFKd3*JR", "mn.zL}ee", "KH>*Ym]:", ';Kb+"G;A', "f5DpjkeT", "n@ZQH`dT", "]DIxB@}T", "U$Z#d!bs", "C~)?!i2s", "~=ZQ^r^.<ARus|RB:Cf:RzQXO", "J{w<6n2pk^t@n|1FObf#Y&.{/", "2oum9eLEcb+2jk_lJ{f#x~nNs", 'JYVm7g"sP&H]@w{mvoB#FIyN$S', "[pN_yd1N~KW%P,:m{YN_>R?$_9", "@MGXinTh?DRR1g|mCr0?en2.9/", "J__x;R5AvDqA%gmbOWPOVno|9/", "d__xquc2I^{NOU#D8@[#WQ?$c9", "@MGXazlqoD|n1nZ(OW]O`RZ=.D", "._M,PRyo:tYn0sZ(hw16nQjoS9", "m!BkgF:C", "#y73:)Y9", "=Z+lQ", "z=s<TEP;", "ZXAdK", 'P^$r"9JG', "[wYE?blo", "6;#i?}zH", "!.VAyjL&", "&ptvtrF5", 'XABG@P"5', 'wwB:xd_1"r', "=.XJs>V5", "i$RXBS:", "c1L<p*$4a", "BgJf/2wG", "|/6L", ":%3ZBtTc", "csU`v!&x", "|2Jp.USc", "SoToJ", "if+4&3yc", "`I;p.", "JoV0dP3x", "Ft,Z*", "Da^X{;:", "/{nGW0|D", 'Zq=_Y"`D', ";+S9`f+5", "4iLG8Sk5", "#P$y8!J0", ";$dGd", ">Q;ICHa|", "FaE&r", "`0h?]f,~", "J!qpHHm~", "u.X1zb3~", "0vE0qB}j0/", "N|[~[", "N|[~Ja!cG9BTG"]), zH(yH = function() {
      var ee, ie, He, ye = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      zH(ee = void 0, ie = []);
      try {
        zH(ee = Object, ie[kH[24]]("".__proto__.constructor.name))
      } catch (MH) {}
      ee: for (He = kH[1]; He < ye[kH[13]]; He++) try {
        var be;
        for (ee = ye[He](), be = kH[1]; be < ie[kH[13]]; be++)
          if (typeof ee[ie[be]] === kH[14]) continue ee;
        return ee
      } catch (MH) {}
      return ee || this
    }() || {}, bH = yH.TextDecoder, MH = yH.Uint8Array, KH = yH[kH[133]], UH = yH.String || String, FH = yH.Array || Array, JH = function(...ee) {
      return zH(ee[kH[13]] = kH[1], ee[kH[25]] = new FH(kH[68]), ee[kH[26]] = UH[kH[22]] || UH.fromCharCode, ee[kH[16]] = []),
        function(...ie) {
          for (zH(ie[kH[13]] = kH[2], ie[kH[2]] = kH[15], ie[-kH[19]] = kH[15], ie[kH[18]] = ie[kH[1]][kH[13]], ee[kH[16]][kH[13]] = kH[1]), ie[-kH[17]] = kH[1]; ie[-kH[17]] < ie[kH[18]];) zH(ie[-kH[19]] = ie[kH[1]][ie[-kH[17]]++], ie[-kH[19]] <= kH[63] ? ie[kH[2]] = ie[-kH[19]] : ie[-kH[19]] <= 223 ? ie[kH[2]] = (ie[-kH[19]] & kH[85]) << kH[21] | ie[kH[1]][ie[-kH[17]]++] & kH[20] : ie[-kH[19]] <= kH[76] ? ie[kH[2]] = (ie[-kH[19]] & kH[77]) << kH[23] | (ie[kH[1]][ie[-kH[17]]++] & kH[20]) << kH[21] | ie[kH[1]][ie[-kH[17]]++] & kH[20] : UH[kH[22]] ? ie[kH[2]] = (ie[-kH[19]] & kH[7]) << kH[57] | (ie[kH[1]][ie[-kH[17]]++] & kH[20]) << kH[23] | (ie[kH[1]][ie[-kH[17]]++] & kH[20]) << kH[21] | ie[kH[1]][ie[-kH[17]]++] & kH[20] : (ie[kH[2]] = kH[20], ie[-kH[17]] += kH[27]), ee[kH[16]][kH[24]](ee[kH[25]][ie[kH[2]]] || (ee[kH[25]][ie[kH[2]]] = ee[kH[26]](ie[kH[2]]))));
          return ee[kH[16]].join("")
        }
    }()), qH(107) in pH && function(...ee) {
      function ie() {}
      ee[kH[13]] = kH[1], zH(ee[kH[25]] = function(...ee) {
        for (zH(ee[kH[13]] = kH[4], ee[-kH[29]] = kH[1], ee[kH[27]] = kH[1], ee[kH[18]] = new ie(kH[1]), ee[kH[30]] = ee[kH[18]], ee[kH[21]] = ee[kH[1]], ee[kH[7]] = ee[kH[2]]); ee[kH[21]] !== kH[28] || ee[kH[7]] !== kH[28];) zH(ee[kH[27]] = (ee[kH[21]] ? ee[kH[21]].val : kH[1]) + (ee[kH[7]] ? ee[kH[7]].val : kH[1]) + ee[-kH[29]], ee[-kH[29]] = Math.floor(ee[kH[27]] / kH[31]), ee[kH[30]].next = new ie(ee[kH[27]] % kH[31]), ee[kH[30]] = ee[kH[30]].next, ee[kH[21]] = ee[kH[21]] ? ee[kH[21]].next : kH[28], ee[kH[7]] = ee[kH[7]] ? ee[kH[7]].next : kH[28]);
        return ee[-kH[29]] && (ee[kH[30]].next = new ie(ee[-kH[29]])), ee[kH[18]].next
      }, console.log(ee[kH[25]]))
    }(), zH(oH = Object[qH(kH[50])](kH[28]), RH = void 0), (() => {
      function ee(...ee) {
        return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = function(...ee) {
          for (zH(ee[kH[13]] = kH[2], ee[kH[2]] = ':05u^`.vy2|x]1A(sh%Ikg&pjeHdN}9JG=aL"toU_b8BQPc)+qV$RTF,r4mn#/<?3OCwi;WzY!6D>XlfS~@*{7Z[KEM', ee[kH[4]] = "" + (ee[kH[1]] || ""), ee[kH[111]] = ee[kH[4]].length, ee[kH[48]] = [], ee[kH[8]] = kH[1], ee[kH[21]] = kH[1], ee[kH[56]] = -kH[2]), ee[kH[11]] = kH[1]; ee[kH[11]] < ee[kH[111]]; ee[kH[11]]++)
            if (ee[kH[35]] = ee[kH[2]].indexOf(ee[kH[4]][ee[kH[11]]]), ee[kH[35]] !== -kH[2])
              if (ee[kH[56]] < kH[1]) ee[kH[56]] = ee[kH[35]];
              else {
                zH(ee[kH[56]] += ee[kH[35]] * kH[36], ee[kH[8]] |= ee[kH[56]] << ee[kH[21]], ee[kH[21]] += (ee[kH[56]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                do {
                  zH(ee[kH[48]].push(ee[kH[8]] & kH[12]), ee[kH[8]] >>= kH[11], ee[kH[21]] -= kH[11])
                } while (ee[kH[21]] > kH[7]);
                ee[kH[56]] = -kH[2]
              } return ee[kH[56]] > -kH[2] && ee[kH[48]].push((ee[kH[8]] | ee[kH[56]] << ee[kH[21]]) & kH[12]), fH(ee[kH[48]])
        }(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
      }
      ee(176) in pH && function(...ee) {
        zH(ee[kH[13]] = kH[1], ee[-kH[118]] = function(...ie) {
          return zH(ie[kH[13]] = kH[2], ie[kH[112]] = []), (ie[kH[1]] === kH[2] || ie[kH[1]] >= kH[48]) && ee[-kH[113]](ie[kH[112]], [], ie[kH[1]], kH[1]), ie[kH[112]]
        }, ee[-kH[113]] = function(...ie) {
          for (ie[kH[13]] = kH[48], ie[-kH[114]] = ie[kH[27]]; ie[-kH[114]] < ie[kH[4]]; ie[-kH[114]]++) {
            if (ie[kH[2]].length !== ie[-kH[114]]) return;
            for (ie[kH[30]] = kH[1]; ie[kH[30]] < ie[kH[4]]; ie[kH[30]]++) ee[kH[8]](ie[kH[2]], [ie[-kH[114]], ie[kH[30]]]) && (zH(ie[kH[2]].push([ie[-kH[114]], ie[kH[30]]]), ee[-kH[113]](ie[kH[1]], ie[kH[2]], ie[kH[4]], ie[-kH[114]] + kH[2])), ie[kH[2]].length === ie[kH[4]] && ie[kH[1]].push(ee[kH[27]](ie[kH[2]])), ie[kH[2]].pop())
          }
        }, ee[kH[27]] = function(...ee) {
          for (zH(ee[kH[13]] = kH[2], ee[kH[25]] = [], ee[-kH[58]] = ee[kH[1]].length), ee[-kH[46]] = kH[1]; ee[-kH[46]] < ee[-kH[58]]; ee[-kH[46]]++)
            for (ee[kH[25]][ee[-kH[46]]] = "", ee[kH[115]] = kH[1]; ee[kH[115]] < ee[-kH[58]]; ee[kH[115]]++) ee[kH[25]][ee[-kH[46]]] += ee[kH[1]][ee[-kH[46]]][kH[2]] === ee[kH[115]] ? kH[116] : kH[104];
          return ee[kH[25]]
        }, ee[kH[8]] = function(...ee) {
          for (zH(ee[kH[13]] = kH[4], ee[kH[117]] = ee[kH[1]].length), ee[kH[27]] = kH[1]; ee[kH[27]] < ee[kH[117]]; ee[kH[27]]++) {
            if (ee[kH[1]][ee[kH[27]]][kH[1]] === ee[kH[2]][kH[1]] || ee[kH[1]][ee[kH[27]]][kH[2]] === ee[kH[2]][kH[2]]) return kH[47];
            if (Math.abs((ee[kH[1]][ee[kH[27]]][kH[1]] - ee[kH[2]][kH[1]]) / (ee[kH[1]][ee[kH[27]]][kH[2]] - ee[kH[2]][kH[2]])) === kH[2]) return kH[47]
          }
          return kH[59]
        }, console.log(ee[-kH[118]]))
      }(), zH(Qi = (...ie) => {
        function He(...ee) {
          return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = function(...ee) {
            for (zH(ee[kH[13]] = kH[2], ee[kH[2]] = 'fDiIhpJTcGAkXQHjlZBNLEednKSYsam6WU:"t8RoqF?O.5C%Mr!{$P>Vg43<(`,]21[@=*+0z~)y7_^|x9w};v/#ub&', ee[-kH[65]] = "" + (ee[kH[1]] || ""), ee[kH[18]] = ee[-kH[65]].length, ee[kH[48]] = [], ee[kH[8]] = kH[1], ee[kH[6]] = kH[1], ee[kH[7]] = -kH[2]), ee[-kH[119]] = kH[1]; ee[-kH[119]] < ee[kH[18]]; ee[-kH[119]]++)
              if (ee[kH[52]] = ee[kH[2]].indexOf(ee[-kH[65]][ee[-kH[119]]]), ee[kH[52]] !== -kH[2])
                if (ee[kH[7]] < kH[1]) ee[kH[7]] = ee[kH[52]];
                else {
                  zH(ee[kH[7]] += ee[kH[52]] * kH[36], ee[kH[8]] |= ee[kH[7]] << ee[kH[6]], ee[kH[6]] += (ee[kH[7]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                  do {
                    zH(ee[kH[48]].push(ee[kH[8]] & kH[12]), ee[kH[8]] >>= kH[11], ee[kH[6]] -= kH[11])
                  } while (ee[kH[6]] > kH[7]);
                  ee[kH[7]] = -kH[2]
                } return ee[kH[7]] > -kH[2] && ee[kH[48]].push((ee[kH[8]] | ee[kH[7]] << ee[kH[6]]) & kH[12]), fH(ee[kH[48]])
          }(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
        }
        ie[kH[13]] = kH[2];
        const ye = function(ee) {
            var ie;
            return {
              meta: {
                ...ee.meta,
                formatVersion: Wi.c,
                variation: null !== (ie = ee.meta.variation) && void 0 !== ie ? ie : null
              },
              initialChunks: ee.initialChunks.map((ee => ({
                chunkPos: ee.chunkPos,
                rle: Zi(ee.rle),
                sharedBlockData: Ai("sharedBlockData", ee.sharedBlockData)
              }))),
              ticks: ee.ticks.map(Gi),
              editState: ee.editState
            }
          }(ie[kH[1]]),
          be = yi(Wi[kH[18]]);
        ie[-kH[106]] = kH[15];
        try {
          function Fe(...ee) {
            for (zH(ee[kH[13]] = kH[2], ee[kH[121]] = 'C/Z@Gx6;T~"mP,pS0![Qr}(85viO:{1B3^_]>$t?y2%wRgMa&su#+4z)`N|W*<lEf7=q9JH.dXYnIcDAeKFLjUbhVok', ee[kH[120]] = "" + (ee[kH[1]] || ""), ee[-kH[82]] = ee[kH[120]].length, ee[kH[48]] = [], ee[kH[30]] = kH[1], ee[kH[9]] = kH[1], ee[kH[122]] = -kH[2]), ee[kH[32]] = kH[1]; ee[kH[32]] < ee[-kH[82]]; ee[kH[32]]++)
              if (ee[kH[118]] = ee[kH[121]].indexOf(ee[kH[120]][ee[kH[32]]]), ee[kH[118]] !== -kH[2])
                if (ee[kH[122]] < kH[1]) ee[kH[122]] = ee[kH[118]];
                else {
                  zH(ee[kH[122]] += ee[kH[118]] * kH[36], ee[kH[30]] |= ee[kH[122]] << ee[kH[9]], ee[kH[9]] += (ee[kH[122]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                  do {
                    zH(ee[kH[48]].push(ee[kH[30]] & kH[12]), ee[kH[30]] >>= kH[11], ee[kH[9]] -= kH[11])
                  } while (ee[kH[9]] > kH[7]);
                  ee[kH[122]] = -kH[2]
                } return ee[kH[122]] > -kH[2] && ee[kH[48]].push((ee[kH[30]] | ee[kH[122]] << ee[kH[9]]) & kH[12]), fH(ee[kH[48]])
          }

          function Je(...ee) {
            return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = Fe(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
          }

          function oe(...ee) {
            zH(ee[kH[13]] = kH[1], ee[kH[25]] = function(...ee) {
              if (zH(ee[kH[13]] = kH[2], ee[kH[2]] = ee[kH[1]].length), ee[kH[2]] < kH[4]) return kH[1];
              if (zH(ee[kH[95]] = Math.max(...ee[kH[1]]), ee[kH[18]] = Math.min(...ee[kH[1]])), ee[kH[95]] === ee[kH[18]]) return kH[1];
              for (zH(ee[kH[48]] = Array(ee[kH[2]] - kH[2]).fill(Number.MAX_SAFE_INTEGER), ee[kH[20]] = Array(ee[kH[2]] - kH[2]).fill(Number.MIN_SAFE_INTEGER), ee[-kH[123]] = Math.ceil((ee[kH[95]] - ee[kH[18]]) / (ee[kH[2]] - kH[2])), ee[-kH[124]] = kH[1]), ee[kH[11]] = kH[1]; ee[kH[11]] < ee[kH[2]]; ee[kH[11]]++) ee[kH[1]][ee[kH[11]]] !== ee[kH[18]] && ee[kH[1]][ee[kH[11]]] !== ee[kH[95]] && zH(ee[-kH[124]] = Math.floor((ee[kH[1]][ee[kH[11]]] - ee[kH[18]]) / ee[-kH[123]]), ee[kH[48]][ee[-kH[124]]] = Math.min(ee[kH[48]][ee[-kH[124]]], ee[kH[1]][ee[kH[11]]]), ee[kH[20]][ee[-kH[124]]] = Math.max(ee[kH[20]][ee[-kH[124]]], ee[kH[1]][ee[kH[11]]]));
              for (zH(ee[kH[126]] = Number.MIN_SAFE_INTEGER, ee[kH[31]] = ee[kH[18]]), ee[-kH[125]] = kH[1]; ee[-kH[125]] < ee[kH[2]] - kH[2]; ee[-kH[125]]++) ee[kH[48]][ee[-kH[125]]] === Number.MAX_SAFE_INTEGER && ee[kH[20]][ee[-kH[125]]] === Number.MIN_SAFE_INTEGER || zH(ee[kH[126]] = Math.max(ee[kH[126]], ee[kH[48]][ee[-kH[125]]] - ee[kH[31]]), ee[kH[31]] = ee[kH[20]][ee[-kH[125]]]);
              return ee[kH[126]] = Math.max(ee[kH[126]], ee[kH[95]] - ee[kH[31]]), ee[kH[126]]
            }, console.log(ee[kH[25]]))
          }
          ee(177) + "8" in pH && oe(), ie[-kH[106]] = be[Je(178)](ye)
        } catch (qH) {
          function ke(...ee) {
            for (zH(ee[kH[13]] = kH[2], ee[kH[2]] = ';GYPDZabMLjIqlRnoKQ(p[}@4v~+`^<5#ux%8?|)6",/:&7=drsgJw1cm_0OeWUX.VAyBiFHht$T*f]z2S9{>N!CEk3', ee[kH[0]] = "" + (ee[kH[1]] || ""), ee[kH[18]] = ee[kH[0]].length, ee[kH[109]] = [], ee[kH[97]] = kH[1], ee[kH[21]] = kH[1], ee[kH[32]] = -kH[2]), ee[kH[52]] = kH[1]; ee[kH[52]] < ee[kH[18]]; ee[kH[52]]++)
              if (ee[-kH[99]] = ee[kH[2]].indexOf(ee[kH[0]][ee[kH[52]]]), ee[-kH[99]] !== -kH[2])
                if (ee[kH[32]] < kH[1]) ee[kH[32]] = ee[-kH[99]];
                else {
                  zH(ee[kH[32]] += ee[-kH[99]] * kH[36], ee[kH[97]] |= ee[kH[32]] << ee[kH[21]], ee[kH[21]] += (ee[kH[32]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                  do {
                    zH(ee[kH[109]].push(ee[kH[97]] & kH[12]), ee[kH[97]] >>= kH[11], ee[kH[21]] -= kH[11])
                  } while (ee[kH[21]] > kH[7]);
                  ee[kH[32]] = -kH[2]
                } return ee[kH[32]] > -kH[2] && ee[kH[109]].push((ee[kH[97]] | ee[kH[32]] << ee[kH[21]]) & kH[12]), fH(ee[kH[109]])
          }

          function qe(...ee) {
            return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = ke(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
          }

          function fe(...ee) {
            ee[kH[13]] = kH[1]
          }
          throw ee(179) + kH[32] in pH && fe(), zH(console[ee(180)](ye), be[qe(kH[53])](ye, {
            [qe(182) + qe(kH[129])](...ee) {
              function ie(...ee) {
                return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = function(...ee) {
                  for (zH(ee[kH[13]] = kH[2], ee[kH[2]] = 'nxcfZz4vl`gaj)HsV6JA>]S|.e*p#o0@Yq=mT$i3d;yI[{QUNKLMB!b1t/5u<7,&C%(h_~:28POG?E9^FWRDXk}w+r"', ee[-kH[106]] = "" + (ee[kH[1]] || ""), ee[kH[27]] = ee[-kH[106]].length, ee[-kH[130]] = [], ee[kH[30]] = kH[1], ee[kH[9]] = kH[1], ee[kH[56]] = -kH[2]), ee[kH[32]] = kH[1]; ee[kH[32]] < ee[kH[27]]; ee[kH[32]]++)
                    if (ee[kH[129]] = ee[kH[2]].indexOf(ee[-kH[106]][ee[kH[32]]]), ee[kH[129]] !== -kH[2])
                      if (ee[kH[56]] < kH[1]) ee[kH[56]] = ee[kH[129]];
                      else {
                        zH(ee[kH[56]] += ee[kH[129]] * kH[36], ee[kH[30]] |= ee[kH[56]] << ee[kH[9]], ee[kH[9]] += (ee[kH[56]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                        do {
                          zH(ee[-kH[130]].push(ee[kH[30]] & kH[12]), ee[kH[30]] >>= kH[11], ee[kH[9]] -= kH[11])
                        } while (ee[kH[9]] > kH[7]);
                        ee[kH[56]] = -kH[2]
                      } return ee[kH[56]] > -kH[2] && ee[-kH[130]].push((ee[kH[30]] | ee[kH[56]] << ee[kH[9]]) & kH[12]), fH(ee[-kH[130]])
                }(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
              }
              return ie(184) in pH && function(...ee) {
                function ie(ee) {
                  return ee[kH[2]] * kH[132] + (ee[kH[1]] < kH[1] ? kH[131] | ee[kH[1]] : ee[kH[1]])
                }

                function He(...ee) {
                  switch (ee[kH[13]] = kH[2], ((ee[kH[1]] & kH[131]) !== kH[1]) * kH[2] + (ee[kH[1]] < kH[1]) * kH[4]) {
                    case kH[1]:
                      return [ee[kH[1]] % kH[131], Math.trunc(ee[kH[1]] / kH[132])];
                    case kH[2]:
                      return [ee[kH[1]] % kH[131] - kH[131], Math.trunc(ee[kH[1]] / kH[132]) + kH[2]];
                    case kH[4]:
                      return [((ee[kH[1]] + kH[131]) % kH[131] + kH[131]) % kH[131], Math.round(ee[kH[1]] / kH[132])];
                    case kH[27]:
                      return [ee[kH[1]] % kH[131], Math.trunc(ee[kH[1]] / kH[132])]
                  }
                }
                ee[kH[13]] = kH[1], zH(ee[kH[27]] = ie([kH[4], kH[48]]), ee[kH[2]] = ie([kH[2], kH[4]]), ee[kH[18]] = ee[kH[27]] + ee[kH[2]], ee[kH[10]] = ee[kH[18]] - ee[kH[2]], ee[kH[48]] = ee[kH[10]] * kH[4], ee[kH[30]] = ee[kH[48]] / kH[4], console.log(He(ee[kH[18]])), console.log(He(ee[kH[10]])), console.log(He(ee[kH[48]])), console.log(He(ee[kH[30]])))
              }(), RH = [ee, {}], XH(ie(kH[120]), ie(186) + ie(kH[19]), ie(kH[44]) + ie(189))[ie(190) + ie(191)]
            }
          })), qH
        }
        const Ke = Ki(Wi[kH[18]], ie[-kH[106]]),
          Ue = Me[kH[133]][ee(kH[103])](kH[48]);
        return Ue[He(kH[124]) + He(kH[58]) + "E"](Wi[kH[18]]), Me[kH[133]].concat([Ue, Ke])
      }, eH = (...ie) => {
        function He(...ee) {
          return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = function(...ee) {
            for (zH(ee[kH[13]] = kH[2], ee[kH[134]] = '7~|{1]<8?_&"9/y05NgdaEKPSjr)B`ivI*b^[>$%ZAnJY3MmqpDh}He,W!4zft.LO=C;26xQTUcu(X#olVFw+RGks@:', ee[kH[4]] = "" + (ee[kH[1]] || ""), ee[kH[18]] = ee[kH[4]].length, ee[-kH[136]] = [], ee[kH[135]] = kH[1], ee[kH[21]] = kH[1], ee[kH[56]] = -kH[2]), ee[kH[32]] = kH[1]; ee[kH[32]] < ee[kH[18]]; ee[kH[32]]++)
              if (ee[kH[52]] = ee[kH[134]].indexOf(ee[kH[4]][ee[kH[32]]]), ee[kH[52]] !== -kH[2])
                if (ee[kH[56]] < kH[1]) ee[kH[56]] = ee[kH[52]];
                else {
                  zH(ee[kH[56]] += ee[kH[52]] * kH[36], ee[kH[135]] |= ee[kH[56]] << ee[kH[21]], ee[kH[21]] += (ee[kH[56]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                  do {
                    zH(ee[-kH[136]].push(ee[kH[135]] & kH[12]), ee[kH[135]] >>= kH[11], ee[kH[21]] -= kH[11])
                  } while (ee[kH[21]] > kH[7]);
                  ee[kH[56]] = -kH[2]
                } return ee[kH[56]] > -kH[2] && ee[-kH[136]].push((ee[kH[135]] | ee[kH[56]] << ee[kH[21]]) & kH[12]), fH(ee[-kH[136]])
          }(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
        }
        ie[kH[13]] = kH[2], ee(195);
        const ye = Me[kH[133]][ee(198)](ie[kH[1]]),
          Ke = ye[He(199) + He(200)] >= kH[48] ? ye[He(201) + He(202)](kH[1]) : kH[28];
        if (Ke !== kH[28] && (0, ti.j)(Ke)) {
          function Ue(...ee) {
            for (zH(ee[kH[13]] = kH[2], ee[-kH[44]] = 'QGrXOd*;jgFt}^Ef%2uIC/Rb5nL[87!0~sU`c,{]qPeAkSaD#wZ|lMz=m$+"v4H9oJ<:YNT_13V)y&hWB?.(K>i6xp@', ee[kH[140]] = "" + (ee[kH[1]] || ""), ee[kH[27]] = ee[kH[140]].length, ee[kH[10]] = [], ee[kH[8]] = kH[1], ee[kH[21]] = kH[1], ee[kH[67]] = -kH[2]), ee[kH[107]] = kH[1]; ee[kH[107]] < ee[kH[27]]; ee[kH[107]]++)
              if (ee[kH[52]] = ee[-kH[44]].indexOf(ee[kH[140]][ee[kH[107]]]), ee[kH[52]] !== -kH[2])
                if (ee[kH[67]] < kH[1]) ee[kH[67]] = ee[kH[52]];
                else {
                  zH(ee[kH[67]] += ee[kH[52]] * kH[36], ee[kH[8]] |= ee[kH[67]] << ee[kH[21]], ee[kH[21]] += (ee[kH[67]] & kH[39]) > kH[40] ? kH[41] : kH[42]);
                  do {
                    zH(ee[kH[10]].push(ee[kH[8]] & kH[12]), ee[kH[8]] >>= kH[11], ee[kH[21]] -= kH[11])
                  } while (ee[kH[21]] > kH[7]);
                  ee[kH[67]] = -kH[2]
                } return ee[kH[67]] > -kH[2] && ee[kH[10]].push((ee[kH[8]] | ee[kH[67]] << ee[kH[21]]) & kH[12]), fH(ee[kH[10]])
          }

          function Fe(...ee) {
            return ee[kH[13]] = kH[2], typeof iH[ee[kH[1]]] === kH[14] ? iH[ee[kH[1]]] = Ue(HH[ee[kH[1]]]) : iH[ee[kH[1]]]
          }

          function Je(...ee) {
            var ie;
            zH(ee[kH[13]] = kH[1], ie = function(...ee) {
              zH(ee[kH[13]] = kH[2], this.bk = ee[kH[1]], this.length = kH[1], this.map = {}, this.head = kH[28], this.tail = kH[28])
            }, ie.prototype.get = function(...ee) {
              var ie;
              return zH(ee[kH[13]] = kH[2], ie = this.map[ee[kH[1]]]), ie ? (this.remove(ie), this.insert(ie.key, ie.val), ie.val) : -kH[2]
            }, ie.prototype.put = function(ee, ie) {
              this.map[ee] ? (this.remove(this.map[ee]), this.insert(ee, ie)) : this.length === this.bk ? (this.remove(this.head), this.insert(ee, ie)) : (this.insert(ee, ie), this.length++)
            }, ie.prototype.remove = function(ee) {
              var ie, He = ee.prev;
              (ie = ee.next) && (ie.prev = He), He && (He.next = ie), this.head === ee && (this.head = ie), this.tail === ee && (this.tail = He), delete this.map[ee.key]
            }, ie.prototype.insert = function(...ee) {
              zH(ee[kH[13]] = kH[4], ee[kH[25]] = new List(ee[kH[1]], ee[kH[2]]), this.tail ? (this.tail.next = ee[kH[25]], ee[kH[25]].prev = this.tail, this.tail = ee[kH[25]]) : (this.tail = ee[kH[25]], this.head = ee[kH[25]]), this.map[ee[kH[1]]] = ee[kH[25]])
            }, console.log(ie))
          }
          He(kH[126]) in pH && Je();
          const oe = ye[Fe(kH[49])](kH[48]),
            Re = Mi(Ke) ? Me[kH[133]][Fe(kH[121])](Ui(Ke, oe)) : oe;
          return function(ee) {
            var ie, He, ye, Me, Ke;
            const Ue = null === (ie = ee.meta) || void 0 === ie ? void 0 : ie.formatVersion;
            if (!(0, ti.j)(Ue)) throw new Error(`Unsupported recording format version: ${Ue}`);
            if (!Array.isArray(ee.initialChunks) || !Array.isArray(ee.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const be of ee.ticks)
              if (!Array.isArray(be.structuralEvents) || !Array.isArray(be.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const Fe = {
              ...ee.meta
            };
            return Fe.formatVersion = Wi.c, (0, be.P)(Fe.variation) && delete Fe.variation, {
              meta: Fe,
              initialChunks: ee.initialChunks.map((ee => {
                var ie;
                return {
                  chunkPos: ee.chunkPos,
                  rle: wi(ee.rle),
                  sharedBlockData: null !== (ie = Yi("sharedBlockData", ee.sharedBlockData)) && void 0 !== ie ? ie : []
                }
              })),
              ticks: ee.ticks.map(ri),
              editState: {
                cameraKeyframes: null !== (He = null === (ye = ee.editState) || void 0 === ye ? void 0 : ye.cameraKeyframes) && void 0 !== He ? He : [],
                playbackMark: null !== (Me = null === (Ke = ee.editState) || void 0 === Ke ? void 0 : Ke.playbackMark) && void 0 !== Me ? Me : null
              }
            }
          }(yi(Ke)[Fe(kH[75])](Re))
        }
        throw new Wi[kH[9]](Ke)
      })
    })()
  },
  37802: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      c: () => be,
      f: () => Me,
      g: () => Re,
      j: () => ke,
      k: () => Je,
      m: () => qe,
      o: () => Fe,
      q: () => oe,
      t: () => Ue
    });
    var ye = He(37807);
    const be = 9;
    class Me extends Error {
      constructor(ee) {
        super(`Unsupported recording format: header ${null!==ee&&void 0!==ee?ee:"missing"}, reading v${ye.d.join(", v")}`), this.older = void 0, this.older = (0, ye.g)(ee)
      }
    }
    const Ke = 100,
      Ue = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      Fe = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      Je = ["itemName", "amount", "position", "size", "attributes"],
      oe = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      Re = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "zC", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      ke = ["selectedSlotIndex", "slots"],
      qe = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37799: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re,
      g: () => fe,
      j: () => Fe,
      m: () => Ke,
      q: () => Ue,
      t: () => Je
    });
    var ye = He(347),
      be = He(27);

    function Me(ee) {
      return null === ee || void 0 === ee ? null : "string" === typeof ee ? ee : null
    }

    function Ke(ee, ie) {
      return JSON.stringify(ee) === JSON.stringify(ie)
    }

    function Ue(ee) {
      const ie = [];
      for (const He of Object.keys(ee)) {
        const ye = ee[He];
        for (const ee of Object.keys(ye)) ie.push({
          Oy: He,
          name: ee,
          ...ye[ee]
        })
      }
      return ie
    }

    function Fe(ee) {
      const ie = {};
      for (const Me of ee) {
        var He, ye, be;
        ie[Me.Oy] || (ie[Me.Oy] = {}), ie[Me.Oy][Me.name] = {
          icon: Me.icon,
          level: Me.level,
          displayName: null !== (He = Me.displayName) && void 0 !== He ? He : null,
          endTick: null !== (ye = Me.endTick) && void 0 !== ye ? ye : null,
          showInNametag: null === (be = Me.showInNametag) || void 0 === be || be
        }
      }
      return ie
    }

    function Je(ee, ie) {
      const He = {};
      for (const be of Object.keys(ee)) {
        const Me = {};
        for (const He of Object.keys(ee[be])) {
          const ye = ee[be][He];
          null !== ye.endTick && ye.endTick < ie || (Me[He] = {
            ...ye,
            endTick: null === ye.endTick ? null : ye.endTick - ie
          })
        }(0, ye.yc)(Me) || (He[be] = Me)
      }
      return He
    }

    function oe(ee, ie, He) {
      if (null !== ee) return Math.max(0, 1e3 * (ee - ie) / He)
    }
    class Re {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(ee, ie) {
        this.clear();
        const He = Date.now();
        for (const Ue of ee.iterateEntityIds()) {
          const Fe = ee.getEffects(Ue);
          if ((0, ye.yc)(Fe)) continue;
          const Je = ie(Ue);
          for (const ee of Object.keys(Fe)) {
            var be, Ke;
            const ie = Fe[ee];
            this.upsert(Je, ee, {
              icon: ie.icon,
              level: ie.level,
              displayName: Me(ie.displayName),
              showInNametag: null === (be = ie.showInNametag) || void 0 === be || be,
              endTime: void 0 !== ie.duration && null !== ie.duration ? (null !== (Ke = ie.appliedAt) && void 0 !== Ke ? Ke : He) + ie.duration : null
            })
          }
        }
      }
      upsert(ee, ie, He) {
        this.tracked[ee] || (this.tracked[ee] = {}), this.tracked[ee][ie] = He
      }
      remove(ee, ie) {
        const He = this.tracked[ee];
        He && (delete He[ie], (0, ye.yc)(He) && delete this.tracked[ee])
      }
      handleUpdate(ee) {
        var ie;
        0 !== ee.duration ? this.upsert(ee.Oy, ee.name, {
          icon: ee.icon,
          level: ee.level,
          displayName: Me(ee.displayName),
          showInNametag: null === (ie = ee.showInNametag) || void 0 === ie || ie,
          endTime: void 0 !== ee.duration && null !== ee.duration ? Date.now() + ee.duration : null
        }) : this.remove(ee.Oy, ee.name)
      }
      handleRemove(ee, ie) {
        this.remove(ee, ie)
      }
      sample(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const be = {},
          Me = 1e3 / ie;
        for (const Ke of Object.keys(this.tracked)) {
          const ie = this.tracked[Ke],
            Ue = {};
          for (const ye of Object.keys(ie)) {
            const be = ie[ye];
            let Fe = null;
            if (null !== be.endTime) {
              const ie = Math.max(0, be.endTime - He);
              if (0 === ie) {
                this.remove(Ke, ye);
                continue
              }
              Fe = ee + Math.ceil(ie / Me)
            }
            Ue[ye] = {
              icon: be.icon,
              level: be.level,
              displayName: be.displayName,
              endTick: Fe,
              showInNametag: be.showInNametag
            }
          }(0, ye.yc)(Ue) || (be[Ke] = Ue)
        }
        return be
      }
    }

    function ke(ee, ie, He, ye) {
      ee.hasEntity(ie) ? ee.updateEffect(ie, He, ye) : function(ee, ie, He) {
        be.h.yR("EffectUpdate", {
          Oy: ee,
          name: ie,
          ...He
        }, !0)
      }(ie, He, ye)
    }

    function qe(ee, ie, He) {
      ee.hasEntity(ie) ? ee.removeEffect(ie, He) : function(ee, ie) {
        be.h.yR("RemoveEffect", {
          Oy: ee,
          name: ie
        }, !0)
      }(ie, He)
    }

    function fe(ee, ie, He, ye, be, Me, Ke) {
      for (const oe of Object.keys(He))
        for (const Me of Object.keys(He[oe])) {
          var Ue;
          null !== (Ue = ie[oe]) && void 0 !== Ue && Ue[Me] || (qe(ee, oe, Me), ye && oe === ye && String(be) !== String(oe) && qe(ee, be, Me))
        }
      for (const Te of Object.keys(ie))
        for (const Ue of Object.keys(ie[Te])) {
          var Fe, Je;
          const pe = ie[Te][Ue],
            Xe = oe(pe.endTick, Me, Ke);
          if (0 === Xe) {
            qe(ee, Te, Ue), ye && Te === ye && String(be) !== String(Te) && qe(ee, be, Ue);
            continue
          }
          const ze = null === (Fe = He[Te]) || void 0 === Fe ? void 0 : Fe[Ue],
            Be = ze && (fe = pe, (Re = ze).icon === fe.icon && Re.level === fe.level && Re.displayName === fe.displayName && Re.endTick === fe.endTick && Re.showInNametag === fe.showInNametag),
            Ee = {
              icon: pe.icon,
              level: pe.level,
              displayName: null !== (Je = pe.displayName) && void 0 !== Je ? Je : void 0,
              duration: Xe,
              showInNametag: pe.showInNametag
            };
          Be || ke(ee, Te, Ue, Ee), ye && Te === ye && ke(ee, be, Ue, {
            ...Ee,
            showInNametag: !1
          })
        }
      var Re, fe
    }
  },
  37788: (ee, ie, He) => {
    He.d(ie, {
      d: () => oe,
      g: () => Je,
      j: () => ke,
      l: () => Ue,
      o: () => Re
    });
    var ye = He(37786),
      be = He(37794),
      Me = He(304);
    const Ke = {
      description: "Bloxd Replay",
      accept: {
        [ye.d]: ye.b
      }
    };

    function Ue() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, Me.c)()
    }

    function Fe(ee) {
      return ee instanceof DOMException && "AbortError" === ee.name
    }
    async function Je() {
      try {
        const [ee] = await window.showOpenFilePicker({
          multiple: !1,
          types: [Ke]
        }), ie = await ee.getFile();
        return {
          handle: ee,
          bytes: new Uint8Array(await ie.arrayBuffer())
        }
      } catch (ee) {
        if (Fe(ee)) return null;
        throw ee
      }
    }
    async function oe(ee) {
      if (ee && await async function(ee) {
          const ie = {
            mode: "readwrite"
          };
          return "granted" === await ee.queryPermission(ie) || "granted" === await ee.requestPermission(ie)
        }(ee)) return ee;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, ye.j)(),
          types: [Ke]
        })
      } catch (ie) {
        if (Fe(ie)) return null;
        throw ie
      }
    }
    async function Re(ee, ie) {
      const He = await ee.createWritable();
      await He.write(new Blob([ie], {
        type: ye.d
      })), await He.close()
    }

    function ke(ee) {
      return (0, ye.f)((0, be.e)(ee))
    }
  },
  37239: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re
    });
    var ye = He(18),
      be = He(97),
      Me = He(35),
      Ke = He(3977),
      Ue = He(3808),
      Fe = He(7296);
    const Je = "shaderPackListingCheckedAt",
      oe = 36e5;

    function Re() {
      const {
        canUseShaderPacks: ee
      } = be.featureFlags.settings;
      var ie, Re;
      (0, Ue.k)(ee) && !(0, Ue.j)(ee) && (ie = Me.i.getItem(Je), Re = Date.now(), "number" !== typeof ie || Re < ie || Re - ie >= oe) && (0, Ke.e)((() => {
        (async function() {
          if ("landingPage" !== ye.e.get("gameState")) return;
          const ee = await (0, Fe.h)();
          if (void 0 === (null === ee || void 0 === ee ? void 0 : ee.listing)) return;
          Me.i.setItem(Je, Date.now());
          const {
            followListingUpdates: ie
          } = await Promise.all([He.e(89), He.e(149), He.e(145)]).then((() => He(44490)));
          await ie(ee, ee.listing) || Me.i.removeItem(Je)
        })().catch((ee => {
          console.error("Failed to check the shader pack listing for an update", ee)
        }))
      }))
    }
  },
  9693: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      e: () => be,
      f: () => Me,
      i: () => Ke
    });
    let ye = null;

    function be(ee, ie) {
      return `${ie}\n${null!==ee&&void 0!==ee?ee:""}`
    }

    function Me(ee) {
      ye = ee
    }

    function Ke(ee) {
      const ie = ye;
      return ye = null, null !== ie && ie.key === ee ? ie.settled : null
    }

    function Ue(ee, ie, He, ye) {
      let be = !1;
      null !== ie && setTimeout((() => {
        ye() && !be && ie()
      }), 0), ee.then((ee => {
        be = !0, He(ee)
      }))
    }
  },
  37294: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe
    });
    var ye = He(335),
      be = He(18),
      Me = He(37301),
      Ke = He(1620),
      Ue = He(2046);

    function Fe(ee, ie) {
      var He, Fe, Je;
      if (!be.e.get("isKeydownEnabled") || ee.repeat) return;
      const oe = ee.code;
      "Escape" === ee.key ? (0, Ke.g)(ee) : null !== (He = Ue.q.OpenSettings) && void 0 !== He && He.includes(oe) ? (0, Ke.u)(ee, ye.r.SETTINGS) : null !== (Fe = Ue.q.OpenCharacterCustomization) && void 0 !== Fe && Fe.includes(oe) ? (0, Me.e)() || (0, Ke.u)(ee, ye.r.CUSTOMISATION, ie()) : null !== (Je = Ue.q.ShowDebugOverlay) && void 0 !== Je && Je.includes(oe) && be.e.set({
        showDebugOverlay: !be.e.get("showDebugOverlay")
      })
    }
  },
  37244: (ee, ie, He) => {
    He.d(ie, {
      e: () => ae,
      i: () => Ce
    });
    var ye = He(610),
      be = He(1178),
      Me = He(153);
    const Ke = "cf-";

    function Ue(ee) {
      return `${Ke}${ee}`
    }

    function Fe(ee) {
      return ee.startsWith(Ue("game-server-"))
    }

    function Je(ee) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(ee)
    }
    var oe = He(1192),
      Re = He(1169),
      ke = He(27),
      qe = He(1155),
      fe = He(1833),
      Te = He(1857),
      pe = He(3203),
      Xe = He(1294),
      ze = He(1305),
      Be = He(1490),
      Ee = He(1141),
      ge = He(37252),
      Oe = He(35),
      de = He(125),
      We = He(1862),
      te = He(37286);
    const Ze = Date.UTC(2026, 11, 8),
      we = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      De = "gameServerRoute";
    async function Pe(ee) {
      if (!ee.ok) {
        const ie = await ee.text().catch((() => ""));
        return 403 === ee.status && "ipv6_unsupported" === ie ? "ipv6Refused" : "other"
      }
      const ie = await ee.json().catch((() => null));
      return "object" === typeof ie && null !== ie && Number.isFinite(ie.version) ? "ours" : "other"
    }
    const Ae = new class {
      constructor(ee) {
        this.deps = ee, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(ee) {
        return this.deps.enabled && Je(ee) && "cloudflare" === this.heldRoute() ? Ue(ee) : ee
      }
      async afterJoinFailed(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const ye = new URL(ee).hostname;
        return Fe(ye) ? await this.afterAliasJoinFailed(ye, ie, He) : void 0 !== ie.gameServerUnreachable && this.checksJoinsTo(ye) && this.settle(await this.check(ye)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(ee) {
        const ie = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(ie, ee).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(ee) {
        this.deps.enabled && this.deps.RR("game_server_route", "cf_retry_joined", ee)
      }
      afterAutoRetryFailed(ee) {
        if (!this.deps.enabled) return;
        if (null === ee) return void this.deps.RR("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: ie
        } = ee;
        void 0 === ie ? this.deps.RR("game_server_route", "cf_retry_failed:other", 0) : "refused" === ie.at ? this.deps.RR("game_server_route", "cf_retry_failed:refused", ie.code) : this.deps.RR("game_server_route", `cf_retry_failed:${ie.at}`, ie.code)
      }
      afterMatchmade(ee) {
        var ie;
        if (!this.deps.enabled) return;
        const He = null === (ie = this.stored()) || void 0 === ie ? void 0 : ie.recoveryArm;
        if (void 0 !== He && null !== this.heldRoute() && this.reportArm(He), null === this.aliasFailedAt) return;
        const ye = Fe(new URL(ee).hostname);
        this.deps.RR("game_server_route", ye ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(ee, ie, He) {
        const ye = new URL(ee).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(ye) || !await this.deps.seatLegs.whenSlow(ie)) return null;
        const be = this.deps.seatLegs.answered,
          Me = await this.check(ye);
        return He() ? this.settle(Me) ? "blocked" : "reported" : "blocked" !== Me.outcome || ie.aborted || this.deps.seatLegs.answered !== be ? null : (this.settle(Me), "blocked")
      }
      afterAliasJoinLeft(ee) {
        this.deps.enabled && (this.reportArm(), this.deps.RR("game_server_route", "cf_join_left", ee))
      }
      afterJoined(ee) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const ie = new URL(ee).hostname,
          He = Fe(ie);
        if (He) this.reportArm(), this.deps.RR("game_server_route", "cf_join", 0);
        else if (!Je(ie) || this.deps.random() >= .01) return;
        const ye = He ? ie.slice(Ke.length) : ie;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(ye, "direct", "direct_failed"), await this.reportRtt(Ue(ye), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(ee, ie, He) {
        let {
          gameServerUnreachable: ye,
          joinFailure: be
        } = ie;
        if (void 0 === be) return null;
        if ("refused" === be.at) return this.reportArm(), this.deps.RR("game_server_route", "cf_join_refused", be.code), null;
        const Me = this.recoveryArm();
        if (this.reportArm(Me), this.deps.RR("game_server_route", `cf_join_failed:${be.at}`, be.code), null !== He && this.deps.RR("game_server_route", "cf_failed_since_route", He), this.aliasFailedAt = this.deps.now(), void 0 === ye) return null;
        const Ke = this.stored();
        return "cloudflare" !== (null === Ke || void 0 === Ke ? void 0 : Ke.route) || "on" !== Me && Ke.aliasFailedOnce || "ours" !== (await this.probeHost(ee)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === Me ? (this.store({
          ...Ke,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && we.has(be.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= Ze) return "on";
        const ee = this.stored();
        return void 0 !== (null === ee || void 0 === ee ? void 0 : ee.recoveryArm) ? ee.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== ee && this.store(ee), this.pageArm)
      }
      reportArm(ee) {
        this.armReported || this.deps.now() >= Ze || (this.armReported = !0, this.deps.RR("game_server_route", "holdout" === (null !== ee && void 0 !== ee ? ee : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(ee) {
        return Je(ee) && "direct" !== this.heldRoute()
      }
      settle(ee) {
        let {
          outcome: ie,
          cfMs: He
        } = ee;
        return this.deps.RR("game_server_route", ie, He), "blocked" === ie && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(ee) {
        const ie = this.probeHost(Ue(ee));
        if ("none" !== (await this.probeHost(ee)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: He,
          ms: ye
        } = await ie;
        return "ours" !== He && "ipv6Refused" !== He ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(ee)).answer ? {
          outcome: "direct_reachable",
          cfMs: ye
        } : {
          outcome: "ipv6Refused" === He ? "blocked_ipv6" : "blocked",
          cfMs: ye
        }
      }
      async reportRtt(ee, ie, He) {
        const ye = "ours" === (await this.probeHost(ee)).answer ? await this.probeHost(ee) : null;
        "ours" === (null === ye || void 0 === ye ? void 0 : ye.answer) ? this.deps.RR("game_server_rtt", ie, ye.ms): this.deps.RR("game_server_rtt", He, 0)
      }
      probeHost(ee) {
        return this.deps.probe(`https://${ee}/version`, 8e3)
      }
      stored() {
        return function(ee) {
          if ("object" !== typeof ee || null === ee) return null;
          const {
            route: ie,
            until: He,
            aliasFailedOnce: ye,
            recoveryArm: be
          } = ee;
          return "cloudflare" !== ie && "direct" !== ie || "number" !== typeof He ? null : {
            route: ie,
            until: He,
            ...!0 === ye ? {
              aliasFailedOnce: ye
            } : {},
            ..."on" === be || "holdout" === be ? {
              recoveryArm: be
            } : {}
          }
        }(this.deps.storage.getItem(De))
      }
      heldRoute() {
        const ee = this.stored();
        return null !== ee && ee.until > this.deps.now() ? ee.route : null
      }
      store(ee) {
        var ie, He, ye, be;
        const Me = null !== (ie = null !== (He = null !== (ye = ee.recoveryArm) && void 0 !== ye ? ye : null === (be = this.stored()) || void 0 === be ? void 0 : be.recoveryArm) && void 0 !== He ? He : this.pageArm) && void 0 !== ie ? ie : void 0;
        this.deps.storage.setItem(De, void 0 === Me ? ee : {
          ...ee,
          recoveryArm: Me
        })
      }
    }({
      storage: Oe.i,
      probe: async function(ee, ie) {
        const He = performance.now(),
          ye = await (0, qe.o)(ee, {
            cache: "no-store"
          }, ie, (async ee => {
            const ie = Math.round(performance.now() - He);
            return {
              answer: await Pe(ee),
              ms: ie
            }
          }));
        return null !== ye && void 0 !== ye ? ye : {
          answer: "none",
          ms: 0
        }
      },
      RR: fe.E,
      enabled: !(0, de.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: ee => new Promise((ie => {
        setTimeout(ie, ee)
      })),
      sleep: We.e,
      seatLegs: te.h
    });
    var Ye = He(1728),
      Ve = He(9693);

    function ae(ee) {
      return async (ie, He, Ke, Ue, Je) => {
        let Re, Be = performance.now();
        if ((0, ye.P)(Ke)) {
          if (Je.aborted) return xe();
          const ee = ie instanceof be.f ? null : (0, Ve.i)((0, Ve.e)(ie, He));
          let ye = await (null !== ee && void 0 !== ee ? ee : Ce(ie, He, Ue));
          if (null !== ee && performance.now() - ye.at > Le && !Je.aborted) {
            const ee = await Ce(ie, He, Ue);
            ee.result.isError() && !ye.result.isError() || (ye = ee)
          }
          const Me = ye.result;
          if (Be = ye.at, Je.aborted || pe.h.matchmakingEnded(Me.isError() ? null : ye.at), Me.isError()) {
            const ee = Me.asError();
            return console.log("Join room did not succeed, reason:", ee.message), ee.forward()
          }
          Re = Me.getValue(), Ae.afterMatchmade(Re.endpoint)
        } else {
          pe.h.skipPlayWait();
          const ee = ue(Ke.replace("https://", "").replace("http://", ""));
          if (ee.isError()) return ee.asError().forward();
          Re = {
            endpoint: ee.getValue(),
            gameNameWithVariation: He,
            lobbyName: ie instanceof be.f ? ie.getLobbyName() : ie
          }
        }
        if (Je.aborted) return xe();
        console.log(`Connecting to ${Re.gameNameWithVariation} in lobby ${Re.lobbyName} on game server ${Re.endpoint}`), ke.h.yR("matchmakeAndPlayStepCompleted", {
          step: Me.k.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, fe.n)(), Te.c.markGameLoadStart((0, Ye.g)()), (0, ze.v)({
          websocketUrl: Re.endpoint,
          gameNameWithVariation: Re.gameNameWithVariation,
          lobbyName: Re.lobbyName
        }), ke.h.yR("loadingScreenState", "loadingPage:loadingGame");
        const Ee = async () => {
          const ee = await async function(ee, ie, He, ye) {
            const be = await ve(ee, ie, He);
            if (!be.isError() && !ye.aborted) {
              const {
                endpoint: ee,
                gameNameWithVariation: ie,
                lobbyName: He
              } = be.getValue();
              (0, ze.v)({
                websocketUrl: ee,
                gameNameWithVariation: ie,
                lobbyName: He
              })
            }
            return be
          }(ie, He, Ue, Je);
          return ee.isError() || (Re = ee.getValue(), Be = performance.now()), ee
        }, ge = !(0, ye.P)(Ke), Oe = ie => ee({
          place: Re,
          userContext: Ue,
          direct: ge,
          matchedAt: Be,
          rematch: Ee
        }, ie), de = () => Fe(new URL(Re.endpoint).hostname), We = de() ? performance.now() : null, te = ge ? {
          result: await Oe(Je),
          blockedAt: null,
          failureChecked: !1
        } : await async function(ee, ie, He) {
          const ye = new qe.d(He),
            be = new AbortController;
          let Me = null,
            Ke = !1,
            Ue = null;
          const Fe = Ae.checkStalledJoin(ee, be.signal, (() => Ke)).then((ee => {
            Ue = ee, "blocked" === ee && (Me = performance.now(), ye.controller.abort())
          }));
          try {
            const ee = await ie(ye.signal);
            return Ke = ee.isError() && void 0 !== ee.asError().debugResult.gameServerUnreachable, be.abort(), Ke && await Fe, {
              result: ee,
              blockedAt: Me,
              failureChecked: "reported" === Ue
            }
          } finally {
            be.abort(), ye.unfollow()
          }
        }(Re.endpoint, Oe, Je);
        let Ze = null !== We && void 0 !== We ? We : te.blockedAt,
          we = te.result;
        const De = () => null === Ze ? null : performance.now() - Ze,
          Pe = we.isError() && !0 === we.asError().debugResult.rematch;
        let ae = null;
        if (!we.isError() || ge || Je.aborted || Pe || null !== te.blockedAt || te.failureChecked || (ae = await Ae.afterJoinFailed(Re.endpoint, we.asError().debugResult, De())), we.isError() && !ge && ("reroute" === ae || !Je.aborted && (Pe || null !== te.blockedAt))) {
          if (Pe || (Ze ??= performance.now(), ke.h.yR("gameServerRouteSwitched")), Je.aborted) return ce(Ze), xe();
          console.log("Matchmaking again");
          const ee = await Ee();
          if (ee.isError()) return ee.asError().forward();
          if (Je.aborted) return ce(Ze), xe();
          we = await Oe(Je), ae = null, !we.isError() || Je.aborted || Pe && !de() || (ae = await Ae.afterJoinFailed(Re.endpoint, we.asError().debugResult, De()))
        }
        if (we.isError() && "retry" === ae && !Je.aborted && Ae.takeAutoRetry()) {
          if (!await Ae.waitToRetry(Je)) return xe();
          console.log("Joining through Cloudflare again");
          const ee = await Ee();
          if (Je.aborted) return xe();
          if (ee.isError()) return Ae.afterAutoRetryFailed(null), we.asError().forward();
          if (we = await Oe(Je), we.isError() && !Je.aborted) {
            const ee = we.asError().debugResult;
            await Ae.afterJoinFailed(Re.endpoint, ee, null), Ae.afterAutoRetryFailed(ee)
          } else if (!we.isError()) {
            var me;
            Ae.afterAutoRetryJoined(null !== (me = De()) && void 0 !== me ? me : 0)
          }
        }
        return we.isError() ? (!0 === we.asError().debugResult.Ce && Je.aborted && ce(Ze), we.asError().forward()) : (Ae.afterJoined(Re.endpoint), ke.h.yR("joinedGame", {
          gameNameWithVariation: Re.gameNameWithVariation,
          lobbyName: Re.lobbyName
        }), (0, Xe.R)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), oe.e.value({
          gameNameWithVariation: Re.gameNameWithVariation,
          lobbyName: Re.lobbyName
        }))
      }
    }

    function ce(ee) {
      null !== ee && Ae.afterAliasJoinLeft(performance.now() - ee)
    }

    function xe() {
      return oe.e.errorWithCode("Left the game while it loaded", Me.k.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        Ce: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const Le = 1e4;

    function Ce(ee, ie, He) {
      return ve(ee, ie, He).then((ee => ({
        result: ee,
        at: performance.now()
      })))
    }
    async function ve(ee, ie, He) {
      return (0, ye.P)(ee) || ee instanceof be.f || !(ee.length > Re.O) ? await Be.b.matchmakePlayer(He, ee, ie, (0, ge.e)()).then((ee => {
        if (!1 === ee.succeeded) return oe.e.errorWithCode(ee.failReason, Me.k.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: ie,
          lobbyName: He,
          gameNameWithVariation: ye
        } = ee, be = ue(Ae.hostFor(ie));
        return be.isError() ? be.asError().forward() : oe.e.value({
          endpoint: be.getValue(),
          gameNameWithVariation: ye,
          lobbyName: He
        })
      })).catch((ee => (console.error("Bad response from the matchmaking server:", ee), oe.e.errorWithCode(ee.toString(), Me.k.REQUEST_TO_MATCHMAKING, {
        error: ee,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", ee), oe.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", Me.k.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function ue(ee) {
      const ie = Ee.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(ee);
      return ie.isError() ? oe.e.errorWithCode(ie.asError().message, Me.k.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : oe.e.value(ie.getValue())
    }
    window.leaveGame = () => {
      (0, ze.o)("/")
    }
  },
  37260: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      f: () => oe,
      h: () => qe,
      j: () => Re
    });
    var ye = He(347),
      be = He(656),
      Me = He(663),
      Ke = He(35);
    const Ue = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Fe = "playSessionGameNameWithVariation",
      Je = "wasMatchmakePlayer";

    function oe() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m;
      (0, Me.k)(ee, Ue)
    }

    function Re() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m).setItem(Je, !0)
    }

    function ke() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m;
      return (0, Me.e)(ee, Ue)
    }

    function qe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke.m;
      const He = (0, Me.e)(ie, Ue),
        oe = function(ee) {
          const ie = ee.getItem(Fe);
          return "string" !== typeof ie ? null : ie
        }(ie),
        Re = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m).getItem(Je)
        }(ie);
      let ke;
      return ke = null !== He && null !== oe && (0, Me.h)(ie, Ue) && function(ee, ie, He) {
          const be = (0, ye.Xb)(ee),
            Me = (0, ye.Xb)(ie),
            Ke = (0, ye.Qb)(ee),
            Ue = (0, ye.Qb)(ie);
          return !(be !== Me || !He) || be === Me && Ke === Ue
        }(oe, ee, Re) ? He : (0, be.d)(), (0, Me.m)(ie, Ue, ke), ie.setItem(Fe, ee),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m).removeItem(Je)
        }(ie), ke
    }
  },
  37252: (ee, ie, He) => {
    He.d(ie, {
      e: () => ge,
      f: () => Oe
    });
    var ye = He(1033),
      be = He(198),
      Me = He(345),
      Ke = He(618),
      Ue = He(347),
      Fe = He(1036),
      Je = He(645),
      oe = He(677),
      Re = He(4908),
      ke = He(97),
      qe = He(125),
      fe = He(1768),
      Te = He(107),
      pe = He(37260),
      Xe = He(35),
      ze = He(660),
      Be = He(627),
      Ee = He(37266);

    function ge() {
      var ee, ie;
      return [...null !== (ee = navigator.languages) && void 0 !== ee ? ee : [null !== (ie = navigator.language) && void 0 !== ie ? ie : "none"], "En-GB"]
    }

    function Oe(ee, ie, He, Oe, de) {
      const We = (0, ye.k)(ie) ? (0, ye.r)(ie) : null,
        te = ee.isLoggedIn() && void 0 !== (0, be.b)(Me.q, qe.siteUsed) ? (0, Be.e)() : null,
        Ze = {
          cookies: (0, fe.getAllCookiesForGameNameWithVariation)(ie),
          isMobile: (0, ke.isMobile)(),
          isUsingCustomGameTexturePack: null !== We && de(We),
          generalCookies: {
            joinDiscord: !!Xe.i.getItem("DiscordPressed"),
            newGo: Re.d,
            ...ee.getMetricsCookies(),
            trafficCode: Oe,
            compliance: ke.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, ke.getBrowserName)(),
            version: (0, ke.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, ke.getPlatformType)(),
            deviceType: (0, Te.b)()
          },
          isLoggedIn: ee.isLoggedIn(),
          lobbyName: He,
          languages: ge(),
          version: Ke.b,
          siteUsed: qe.siteUsed,
          subsiteUsed: qe.subsiteUsed,
          playSessionId: (0, pe.h)(ie),
          visitSessionId: (0, ze.getVisitSessionId)(),
          clientReason: Je.y.reason,
          budgetBasis: (0, Ee.k)(),
          ...null !== oe.o && {
            diagClaim: oe.o.claimId
          },
          ...null !== te && {
            webGpuLoss: te
          }
        };
      return null !== We && (0, Ue.Jc)(We) ? (Ze.lobbyName = (0, ye.g)(We, (0, ye.n)(ie), He), {
        roomName: `classic_${Fe.i}`,
        joinOptions: Ze
      }) : {
        roomName: ie,
        joinOptions: Ze
      }
    }
  },
  9505: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(9509),
      be = He(610),
      Me = He(125);

    function Ke(ee) {
      var ie, He;
      if ((0, be.P)(ee)) return !0;
      const Ke = null !== (ie = null === (He = Me.siteUsedData[Me.siteUsed]) || void 0 === He ? void 0 : He.adConfig.showRewardedAds) && void 0 !== ie && ie;
      for (const be in ee) {
        const ie = ee[be];
        if (null !== ie && void 0 !== ie && ie.items)
          for (const ee in ie.items)
            if ((0, ye.i)(ie.items[ee], Ke)) return !1
      }
      return !0
    }
  },
  37398: (ee, ie, He) => {
    function ye(ee, ie) {
      for (let He = 0; He < ee.length; He++)
        if (ee[He].identifier === ie) return ee[He];
      return null
    }

    function be(ee, ie) {
      return null !== ye(ee, ie)
    }
    He.d(ie, {
      d: () => ye,
      h: () => be
    })
  },
  37409: (ee, ie, He) => {
    He.d(ie, {
      b: () => oe,
      c: () => ke,
      g: () => Xe,
      j: () => Je
    });
    var ye = He(18),
      be = He(2492),
      Me = He(2495),
      Ke = He(2503),
      Ue = He(2591),
      Fe = He(27);

    function Je(ee, ie) {
      return (!(0, Ke.b)() || 0 === ee && 0 === ie) && (0, Me.y)(be.f.Joystick, 0, ee, ie, 0)
    }
    const oe = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Re(ee) {
      return ee.classList.contains("TouchKeyHit") && qe() ? null : ee.firstElementChild
    }

    function ke(ee) {
      return ee.classList.contains("TouchKeyHit") && !ee.classList.contains("CanvasZone") ? {
        whole: !qe(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: fe(Re(ee))
      }
    }

    function qe() {
      return document.documentElement.classList.contains(Ue.l)
    }

    function fe(ee) {
      return !(ee instanceof HTMLElement) || ee.offsetWidth <= 0 || ee.offsetHeight <= 0 ? null : {
        width: ee.offsetWidth,
        height: ee.offsetHeight
      }
    }

    function Te(ee, ie) {
      const He = ee => Math.min(65535, Math.round(4 * ee));
      return (He(ee) | He(ie) << 16) >>> 0
    }

    function pe(ee) {
      return {
        x: ee.left + ee.width / 2,
        y: ee.top + ee.height / 2,
        radius: Math.min(ee.width, ee.height) / 2
      }
    }
    const Xe = new class {
      constructor(ee) {
        this.write = ee, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        ie ? this.elements.set(ee, {
          element: ie,
          hidden: He
        }) : this.elements.delete(ee), this.measureOne(ee)
      }
      measure() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = ee.left, this.canvasTop = ee.top;
        for (const ie of this.elements.keys()) this.measureOne(ie)
      }
      hitZone(ee, ie) {
        let He = null,
          ye = 1;
        for (const be of this.elements.keys()) {
          const Me = this.shown(be);
          if (!Me) continue;
          const {
            rect: Ke,
            element: Ue
          } = Me, Fe = pe(Ke), Je = Math.max(0, Ke.width / 2 - Fe.radius), oe = Math.max(0, Ke.height / 2 - Fe.radius), ke = Math.max(0, Math.abs(ee - Fe.x) - Je), qe = Math.max(0, Math.abs(ie - Fe.y) - oe), Te = Ue.firstElementChild;
          let Xe = Math.hypot(ke, qe) / Fe.radius;
          const ze = fe(Re(Ue));
          ze && (Xe = Math.min(Xe, Math.max(2 * Math.abs(ee - Fe.x) / ze.width, 2 * Math.abs(ie - Fe.y) / ze.height))), Xe < ye && (He = {
            code: be,
            element: Ue,
            key: Te,
            ...Fe
          }, ye = Xe)
        }
        return He
      }
      measureOne(ee) {
        const ie = this.shown(ee);
        if (!ie) return void this.write(be.f.TouchZone, ee, 0, 0, 0);
        const {
          rect: He,
          element: ye
        } = ie, Me = pe(He);
        this.write(be.f.TouchZone, ee, Me.x - this.canvasLeft, Me.y - this.canvasTop, Te(He.width, He.height));
        const Ke = fe(Re(ye));
        this.write(be.f.TouchZone, 256 | ee, 0, 0, Ke ? Te(Ke.width, Ke.height) : 0)
      }
      shown(ee) {
        const ie = this.elements.get(ee),
          He = ye.e.get("worldPanelHud");
        if (!ie || ie.hidden || "none" === He) return null;
        const be = ie.element.getBoundingClientRect();
        return be.width <= 0 || be.height <= 0 ? null : {
          rect: be,
          element: ie.element
        }
      }
    }(Me.y);
    (0, Fe.j)(Ue.f, (() => {
      Xe.measure()
    }))
  },
  37731: (ee, ie, He) => {
    function ye(ee, ie) {
      return null === ee || null === ie ? ee === ie : ee[0] === ie[0] && ee[1] === ie[1] && ee[2] === ie[2]
    }

    function be(ee) {
      return [ee[0] + .5, ee[1] + .5, ee[2] + .5]
    }
    He.d(ie, {
      e: () => be,
      g: () => ye
    })
  },
  37675: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe,
      h: () => Ue
    });
    const ye = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      be = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      Me = {
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
      Ke = {
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
      Ue = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: ye.files,
          dependencies: ye.dependencies,
          bundledSource: ye.bundledSource,
          types: ye.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: be.files,
          dependencies: be.dependencies,
          bundledSource: be.bundledSource,
          types: be.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: Me.files,
          dependencies: Me.dependencies,
          bundledSource: Me.bundledSource,
          types: Me.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: Ke.files,
          dependencies: Ke.dependencies,
          bundledSource: Ke.bundledSource,
          types: Ke.types
        }
      };

    function Fe(ee) {
      const ie = [],
        He = new Set,
        ye = ee => {
          if (He.has(ee)) return;
          const be = Ue[ee];
          if (be) {
            He.add(ee);
            for (const ee of be.dependencies) ye(ee);
            ie.push(ee)
          }
        };
      for (const be of ee) ye(be);
      return ie
    }
  },
  37689: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe,
      f: () => Ue,
      i: () => Ke,
      m: () => Me,
      q: () => Je,
      s: () => oe,
      u: () => fe,
      w: () => qe,
      z: () => ke
    });
    var ye = He(1189);
    const be = ["quickjs", "ses"];

    function Me(ee) {
      return be.includes(ee)
    }

    function Ke(ee) {
      return ee === ye.j || ee === ye.k
    }

    function Ue(ee, ie) {
      return ee === ye.j && ie === ye.k || ee === ye.k && ie === ye.j
    }

    function Fe(ee) {
      const ie = ye.k in ee,
        He = ye.j in ee;
      return ie && He ? null : ie ? ye.k : He ? ye.j : null
    }

    function Je(ee, ie, He) {
      const ye = `${ie}/`;
      return ee.filter((ee => ee.startsWith(ye))).map((ee => [ee, `${He}/${ee.slice(ye.length)}`]))
    }

    function oe(ee, ie) {
      let He = 0;
      for (const [ye, be] of Object.entries(ee)) ye !== ie && (He += be.length);
      return He
    }
    const Re = "@plugins/";

    function ke(ee) {
      return `${Re}${ee}`
    }

    function qe(ee, ie) {
      return `/node_modules/@plugins/${ee}/${ie}`
    }

    function fe(ee) {
      if (!ee.startsWith(Re)) return null;
      const ie = ee.slice(Re.length);
      return function(ee) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(ee)
      }(ie) ? ie : null
    }
  },
  37696: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      f: () => be,
      i: () => Ke,
      l: () => Fe,
      m: () => Me
    });
    var ye = He(2523);
    const be = 5,
      Me = "[SCHEMATIC]",
      Ke = 1024e4;

    function Ue(ee) {
      return ee.endsWith(".bloxdschem") && (0, ye.s)(ee.slice(0, -11) + ".ts") && ee.length <= 64
    }

    function Fe(ee) {
      return Object.fromEntries(Object.keys(ee).map((ee => [ee, Me])))
    }
  },
  5326: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      h: () => ye,
      k: () => Me,
      l: () => Fe,
      n: () => Ke
    });
    const ye = ["sine", "triangle", "square", "sawtooth"],
      be = 55,
      Me = {
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

    function Ke(ee) {
      return "string" !== typeof ee ? ee : Object.hasOwn(Me, ee) ? Me[ee] : null
    }

    function Ue(ee, ie, He) {
      return Math.min(He, Math.max(ie, ee))
    }

    function Fe(ee) {
      const ie = Ue(ee.durationMs, 10, 500),
        He = Ue(ee.attackMs, 0, ie),
        {
          intonation: be
        } = ee;
      return {
        waveform: ye.includes(ee.waveform) ? ee.waveform : "sine",
        pitchHz: Ue(ee.pitchHz, 20, 4e3),
        glideSemitones: Ue(ee.glideSemitones, -24, 24),
        durationMs: ie,
        attackMs: He,
        releaseMs: Ue(ee.releaseMs, 0, ie - He),
        lowpassHz: null === ee.lowpassHz ? null : Ue(ee.lowpassHz, 20, 2e4),
        volume: Ue(ee.volume, 0, 2),
        intonation: {
          variationSemitones: Ue(be.variationSemitones, 0, 6),
          declineSemitones: Ue(be.declineSemitones, 0, 12),
          questionRiseSemitones: Ue(be.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Ue(be.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Ue(ee.syllableMs, 25, 200)
      }
    }
  },
  9548: () => {},
  10722: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18888: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20800: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20806: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20813: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20822: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20829: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);