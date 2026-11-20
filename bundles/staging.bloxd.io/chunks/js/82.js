export const id = 82;
export const ids = [82];
export const modules = {
  36377: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => zu,
      e: () => cu
    });
    var Eu = yu(64),
      Ku = yu(1855),
      Qu = yu(36381),
      mu = yu.n(Qu),
      Ju = yu(4314),
      Nu = yu(1825),
      Xu = yu(1400),
      Vu = yu(106),
      ru = yu(125),
      Bu = yu(343),
      xu = yu(1035),
      Su = yu.n(xu),
      pu = yu(27),
      Tu = yu(1043),
      Wu = yu(1583),
      ju = yu(1661),
      Hu = yu(1621),
      du = yu(1927),
      bu = yu(1362),
      Cu = yu(1992),
      ku = yu(1354),
      eu = yu(8505),
      Au = yu(36384),
      Du = yu(36399),
      Mu = yu(1419),
      Iu = yu(2337),
      Gu = yu(1170),
      Uu = yu(36414);
    var nu = yu(8984);
    var su = yu(1079);
    const tu = yu(36422),
      lu = ["enter", "t", "/"];
    let gu = !1;

    function cu() {
      return gu || (0, ju.isTextEntry)(document.activeElement)
    }

    function Lu() {
      var uu, Ru;
      (0, Cu.e)();
      const yu = null !== (uu = null === (Ru = (0, bu.f)()) || void 0 === Ru ? void 0 : Ru.getBoundButton("keyboardChannel")) && void 0 !== uu ? uu : null;
      return yu ? (0, su.jsx)(du.b, {
        className: "ChatInputChannelGlyph",
        glyph: yu
      }) : null
    }

    function zu() {
      const {
        t: uu
      } = (0, Gu.E)(), {
        isTouchScreen: Ru
      } = (0, pu.j)(["isTouchScreen"]), yu = (0, ku.n)(), [Qu, xu] = (0, Eu.useState)(!1), du = (0, Eu.useRef)(Qu), bu = (0, Eu.useRef)(null), {
        messages: Cu,
        reportedPlayers: cu,
        channel: zu
      } = (0, eu.l)(), wu = (0, Eu.useRef)(0), Zu = (0, Eu.useRef)(""), hu = (0, Eu.useRef)(null);
      var Pu;
      Pu = hu, (0, Eu.useEffect)((() => {
        if (!(0, Vu.isIOS)()) return;
        const uu = Pu.current;
        let Ru = null;
        const yu = yu => {
            const Eu = yu.changedTouches[0];
            Ru = "none" === getComputedStyle(uu).pointerEvents ? {
              id: Eu.identifier,
              y: Eu.clientY
            } : null
          },
          Eu = yu => {
            const Eu = Ru,
              Ku = Eu && (0, Uu.c)(yu.changedTouches, Eu.id);
            Ku && (yu.preventDefault(), uu.scrollBy({
              top: Eu.y - Ku.clientY,
              behavior: "instant"
            }), Eu.y = Ku.clientY)
          };
        return uu.addEventListener("touchstart", yu, {
          passive: !0
        }), uu.addEventListener("touchmove", Eu, {
          passive: !1
        }), () => {
          uu.removeEventListener("touchstart", yu), uu.removeEventListener("touchmove", Eu)
        }
      }), [Pu]);
      const [iu, Yu] = (0, Eu.useState)(!1), [ou, qu] = (0, Eu.useState)(!1), Ou = (0, Eu.useRef)(iu), vu = (0, Eu.useRef)(null), au = (0, Eu.useRef)(!1), fu = (0, Eu.useRef)(null), uR = (0, Eu.useRef)(null), RR = (0, Eu.useRef)(null), yR = (0, Eu.useRef)(mR);
      yR.current = mR;
      const ER = (0, Iu.k)();

      function KR() {
        du.current = !1, xu(!1), uR.current.blur()
      }

      function QR(uu) {
        Ou.current = uu, Yu(uu)
      }

      function mR() {
        const uu = uR.current.value;
        uR.current.value = "", JR(uu)
      }

      function JR(uu) {
        (0, eu.j)(uu), wu.current = 0, QR(!1)
      }

      function NR(uu, Ru) {
        0 === wu.current && (Zu.current = uR.current.value);
        const yu = (0, eu.g)(wu.current + uu, Ru);
        wu.current = yu.stepsBack, uR.current.value = 0 === yu.stepsBack ? Zu.current : yu.text, setTimeout((() => {
          uR.current && uR.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function XR() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        hu.current && (!uu && Ou.current || (hu.current.scrollTop = 1e5))
      }
      return (0, Ju.c)(!0, Qu, "ChatComponent"), (0, Eu.useEffect)((() => (gu = Qu, () => {
          gu = !1
        })), [Qu]), (0, Xu.e)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, Wu.t)() && xu(!1)
        })), (0, Eu.useEffect)((() => {
          uR.current.addEventListener("blur", (uu => {
            if (null === uR.current) return;
            Array.from(document.querySelectorAll(":hover")).some((uu => uu.classList.contains("ChatInputChannel") || uu.classList.contains("ChatMsgSelectWrapper"))) || ((0, Vu.isMobile)() && du.current && "" !== uR.current.value && yR.current(), xu(!1))
          }));
          const uu = uu => {
            bu.current.contains(uu.target) || (0, Hu.k)(uu.target) || xu(!1)
          };
          document.addEventListener("touchstart", uu, {
            capture: !0
          });
          const Ru = uu => {
            (0, Du.h)(uu.target) && (du.current = !1, xu(!1))
          };
          document.addEventListener("mousedown", Ru, {
            capture: !0
          });
          const yu = () => {
              clearTimeout(vu.current), QR(!0)
            },
            Eu = () => {
              clearTimeout(vu.current), vu.current = setTimeout((() => {
                QR(!1), XR()
              }), 4e3)
            },
            Qu = () => {
              document.pointerLockElement ? (xu(!1), qu(!0), au.current = !1, QR(!1), XR()) : qu(!1)
            };
          hu.current.addEventListener("pointermove", (uu => {
            "touch" === uu.pointerType || au.current || document.pointerLockElement || (au.current = !0, clearTimeout(vu.current))
          })), hu.current.addEventListener("pointerleave", (uu => {
            "touch" !== uu.pointerType && (au.current = !1, Ou.current && Eu())
          })), hu.current.addEventListener("pointerdown", (uu => {
            "touch" === uu.pointerType || document.pointerLockElement || (au.current = !0, yu())
          })), hu.current.addEventListener("wheel", (uu => {
            document.pointerLockElement || uu.deltaY >= 0 && Math.abs(hu.current.scrollTop) < 1 || (yu(), au.current || (vu.current = setTimeout((() => {
              QR(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), hu.current.addEventListener("touchstart", yu), hu.current.addEventListener("touchend", Eu), hu.current.addEventListener("touchcancel", Eu), document.addEventListener("pointerlockchange", Qu);
          const Ju = uu => {
            if (ER.shown && (du.current || ! function(uu) {
                if ((0, ju.isTypingInInput)()) return !0;
                const Ru = document.activeElement;
                return (Ru instanceof HTMLButtonElement || "button" === (null === Ru || void 0 === Ru ? void 0 : Ru.getAttribute("role"))) && ["Enter", " "].includes(uu.key)
              }(uu)) && "codeEditor" !== pu.d.get("openInGameMenuName") && "lobbyCodeEditor" !== pu.d.get("openInGameMenuName") && !Ku.gameBridge.latest("connectedGame").replay)
              if (du.current || !(0, Wu.t)()) {
                if (du.current) {
                  if ("ArrowUp" === uu.code || "ArrowDown" === uu.code) return NR("ArrowUp" === uu.code ? 1 : -1, !1), void uu.stopPropagation();
                  if ("Tab" === uu.code) return eu.c.selectNextChannel(), uu.stopPropagation(), void uu.preventDefault();
                  if (uu.ctrlKey && Fu.includes(tu[uu.keyCode])) return uu.preventDefault(), void uu.stopPropagation()
                }
                if ([...lu, "esc"].includes(mu()(uu)))
                  if ("esc" !== mu()(uu)) {
                    if (!du.current || "/" !== mu()(uu)) {
                      if ("t" === mu()(uu)) {
                        if (du.current) return void uu.stopPropagation();
                        uu.preventDefault()
                      }
                      du.current && "" !== uR.current.value && yR.current(), uu.repeat || (du.current || "/" === mu()(uu) && (uR.current.value = "/", uu.preventDefault()), xu(!du.current))
                    }
                  } else du.current && (xu(!1), uu.stopPropagation());
                else du.current && uu.stopPropagation()
              } else lu.includes(mu()(uu)) && (uu.preventDefault(), uu.stopPropagation(), (0, Wu.e)(uu))
          };
          document.addEventListener("keydown", Ju, {
            capture: !0
          });
          const Nu = hu.current;
          let Xu = !1;
          const ru = new ResizeObserver((() => {
              Xu && (Xu = !1, XR())
            })),
            Bu = () => {
              Xu = !0, ru.unobserve(Nu), ru.observe(Nu)
            };
          fu.current = Bu;
          const Su = new MutationObserver(Bu);
          return Su.observe(Nu, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", Ju, {
              capture: !0
            }), document.removeEventListener("touchstart", uu, {
              capture: !0
            }), document.removeEventListener("mousedown", Ru, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", Qu), fu.current = null, Su.disconnect(), ru.disconnect(), clearTimeout(vu.current)
          }
        }), []), (0, Hu.p)(uR, {
          open: () => {
            xu(!0)
          },
          close: () => {
            KR()
          },
          submit: () => {
            "" !== uR.current.value && mR(), KR()
          },
          stepHistory: () => {
            NR(1, !0)
          },
          sendLine: uu => {
            JR(uu), KR()
          },
          selectNextChannel: () => {
            eu.c.selectNextChannel()
          }
        }), (0, Eu.useEffect)((() => {
          var uu;
          (du.current = Qu, uR.current) && (Qu ? (wu.current = 0, uR.current.focus()) : (uR.current.blur(), null === (uu = fu.current) || void 0 === uu || uu.call(fu)))
        }), [Qu]),
        function(uu, Ru) {
          (0, Eu.useLayoutEffect)((() => {
            if (!Ru) return;
            nu.e.hold();
            const yu = uu.current.closest(".InGameHeaderAndChat"),
              Eu = window.visualViewport;
            let Ku = "";
            const Qu = () => {
              const uu = `${Eu.offsetTop+Eu.height}px`;
              uu !== Ku && (Ku = uu, yu.style.setProperty("--keyboard-top", uu))
            };
            return Qu(), Eu.addEventListener("resize", Qu), Eu.addEventListener("scroll", Qu), () => {
              Eu.removeEventListener("resize", Qu), Eu.removeEventListener("scroll", Qu), yu.style.removeProperty("--keyboard-top"), nu.e.release()
            }
          }), [uu, Ru])
        }(bu, Qu && Ru), (0, su.jsx)(su.Fragment, {
          children: (0, su.jsxs)("div", {
            ref: bu,
            className: Su()("Chat", {
              Chatting: Qu
            }),
            "data-camera-keeper": Qu ? "" : void 0,
            children: [(0, su.jsx)("div", {
              ref: hu,
              className: Su()("ChatMessages", {
                HideScrollbar: !iu && !Qu,
                NoScrolling: !(0, Vu.isMobile)() && ou
              }),
              children: (0, su.jsx)(Au.c, {
                messages: Cu,
                reportedPlayers: cu
              })
            }), Ru && !Qu && (0, su.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": uu("general:chat"),
              ...(0, Mu.d)((() => {
                xu(!0), RR.current.style.display = "flex", (0, Vu.isIOS)() && uR.current.focus()
              }), "pointerup"),
              children: (0, su.jsx)(Tu.c, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, su.jsxs)("div", {
              ref: RR,
              className: "ChatInputWrapper",
              style: {
                display: "" + (Qu ? "flex" : "none")
              },
              children: [zu && (0, su.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: zu.elementBgColor
                },
                onClick: uu => {
                  eu.c.selectNextChannel(), uR.current.focus()
                },
                children: (0, su.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, su.jsx)(Nu.d, {
                    text: zu.elementContent
                  })
                })
              }), zu && yu && (0, su.jsx)(Lu, {}), (0, su.jsx)("input", {
                className: "ChatInput",
                maxLength: Bu.kd,
                ref: uR,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": uu("general:chat"),
                placeholder: zu ? `${zu.channelName} Chat${"touchOnly"===(0,ru.c)()||yu?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const Fu = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36384: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => eu
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(8508),
      Ju = yu(34),
      Nu = yu(2285),
      Xu = yu(3398),
      Vu = yu(1952),
      ru = yu(27),
      Bu = yu(1825),
      xu = yu(36391),
      Su = yu(2066),
      pu = yu(36394),
      Tu = yu(2490),
      Wu = yu(2468),
      ju = yu(2462),
      Hu = yu(3415),
      du = yu(2896),
      bu = yu(1899),
      Cu = yu(1079);

    function ku(uu) {
      for (let yu = uu.length - 1; yu >= 0; yu--) {
        const Eu = "string" === typeof(Ru = uu[yu]) ? Ru : "str" in Ru && "string" === typeof Ru.str ? Ru.str : "";
        if ("" !== Eu.trim()) return Eu
      }
      var Ru;
      return ""
    }

    function eu(uu) {
      let {
        messages: Ru,
        reportedPlayers: yu
      } = uu;
      return (0, Cu.jsx)(Cu.Fragment, {
        children: Ru.map((uu => (0, Cu.jsx)(Au, {
          message: uu,
          reportedPlayers: yu
        }, uu.clientChatMsgId)))
      })
    }
    const Au = (0, Eu.memo)((function(uu) {
      var Ru;
      let {
        message: yu,
        reportedPlayers: Ku
      } = uu;
      const eu = (0, Eu.useRef)(null),
        [Au] = (0, Eu.useState)(du.i),
        {
          author: Du
        } = yu,
        Mu = null === Du || void 0 === Du ? void 0 : Du.id,
        Iu = null !== (Ru = null === Du || void 0 === Du ? void 0 : Du.name) && void 0 !== Ru ? Ru : void 0,
        Gu = (0, Vu.b)(Iu),
        Uu = null !== Du && void 0 !== Du && Du.profileEffect ? Su.i[Du.profileEffect] : void 0,
        nu = null !== Du && !Du.local,
        su = null === Du && null !== yu.serverChatMsgId,
        tu = (0, bu.h)("hiddenPlayerNames", (uu => (0, pu.i)(nu, Iu, uu))),
        lu = null === yu.serverChatMsgId || null === Du ? null : {
          text: ku(yu.content),
          serverChatMsgId: yu.serverChatMsgId,
          authorId: Du.id
        },
        gu = su || null !== lu && !Ku.includes(Mu),
        cu = (0, Xu.i)(nu && null !== Iu && void 0 !== Iu ? Iu : null),
        Lu = (0, ju.k)(eu);
      (0, Eu.useEffect)((() => () => {
        ju.e.closeIfOwner(eu)
      }), []);
      const zu = () => {
          su ? Ju.k.Op("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            Dm: (0, mu.d)(yu.content),
            serverChatMsgId: yu.serverChatMsgId
          }) : null !== lu ? Ju.k.Op("OpenReportMenu", {
            playerEId: Mu,
            playerName: Iu,
            Dm: lu.text,
            serverChatMsgId: lu.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        Fu = void 0 === Iu ? [] : (0, Hu.d)(cu, Iu, lu);
      return (0, Cu.jsxs)("div", {
        ref: eu,
        className: Qu()("MessageWrapper", {
          ChatMsgSelectWrapper: Mu,
          Still: Au
        }),
        onContextMenu: tu ? uu => {
          (0, Tu.f)(eu, uu, {
            ...(0, pu.e)(Mu, Iu),
            showLocation: !1,
            status: null,
            extraActions: gu ? [{
              icon: "flag",
              text: "Report",
              onClick: zu
            }] : [],
            friendRequestSource: "chat"
          }, ru.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: tu ? uu => {
          (0, Wu.c)(uu, (() => (0, pu.e)(Mu, Iu).playerSocialPreview))
        } : void 0,
        children: [Uu && (0, Cu.jsx)(Uu, {
          className: "ChatMessageBackground",
          simple: !0
        }), (nu || su) && !Lu && (0, Cu.jsx)(xu.e, {
          className: "ChatFloatingActions",
          triggerElementRef: eu,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: zu,
            show: gu
          }, ...Fu, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: uu => {
              (0, Nu.h)(Iu, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: tu && "blocked" !== cu
          }]
        }), (0, Cu.jsx)(Bu.d, {
          text: yu.content,
          friendBadgeFor: Gu ? Iu : void 0
        }, yu.clientChatMsgId)]
      }, yu.clientChatMsgId)
    }))
  },
  36436: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => xu,
      d: () => Su,
      g: () => Bu,
      h: () => ru
    });
    var Eu = yu(9048),
      Ku = yu(36445),
      Qu = yu(36449),
      mu = yu(8447),
      Ju = yu(1400),
      Nu = yu(64),
      Xu = yu(80),
      Vu = yu(1079);

    function ru() {
      var uu;
      return (0, Ju.h)(Ku.c, (0, Ku.o)()), (0, Vu.jsx)(Vu.Fragment, {
        children: null === (uu = (0, Ku.o)()) || void 0 === uu ? void 0 : uu.content
      })
    }

    function Bu(uu) {
      var Ru;
      let {
        show: yu
      } = uu;
      (0, Ju.h)(Ku.c, (0, Ku.o)());
      const Xu = null === (Ru = (0, Ku.o)()) || void 0 === Ru ? void 0 : Ru.menu;
      return (0, Nu.useEffect)((() => {
        var uu;
        yu || (null === Xu || void 0 === Xu || null === (uu = Xu.onClose) || void 0 === uu || uu.call(Xu), (0, Qu.p)())
      }), [yu, Xu]), (0, Nu.useEffect)((() => yu ? (0, mu.g)(Qu.v, Qu.d) : void 0), [yu]), (0, Vu.jsx)(Eu.c, {
        showing: yu,
        globallyUniqueKey: "clientGameMenu",
        children: null === Xu || void 0 === Xu ? void 0 : Xu.content
      })
    }

    function xu(uu) {
      let {
        placement: Ru = "bottom"
      } = uu;
      return (0, Vu.jsx)("div", {
        id: `clientGameHud-${Ru}`,
        style: {
          display: "contents"
        }
      })
    }

    function Su(uu) {
      let {
        children: Ru,
        placement: yu = "bottom"
      } = uu;
      const [Eu, Ku] = (0, Nu.useState)(null);
      return (0, Nu.useEffect)((() => {
        Ku(document.getElementById(`clientGameHud-${yu}`))
      }), [yu]), Eu ? (0, Xu.createPortal)(Ru, Eu) : null
    }
  },
  36665: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => ru,
      f: () => Vu
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(1408),
      Ju = yu(1079);
    const Nu = 200,
      Xu = 160;

    function Vu() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function ru(uu) {
      let {
        side: Ru,
        defaultSize: yu,
        covers: Ku,
        onClose: Vu,
        children: ru
      } = uu;
      const Bu = (0, Eu.useRef)(null),
        [xu, Su] = (0, Eu.useState)(null),
        [pu, Tu] = (0, Eu.useState)(yu);
      pu !== yu && (Tu(yu), Su(null));
      const Wu = (0, Eu.useRef)(null),
        ju = "top" === Ru,
        Hu = uu => ju ? uu.clientY : uu.clientX,
        du = () => {
          Wu.current = null
        };
      return (0, Ju.jsxs)("div", {
        ref: Bu,
        className: Qu()("ResizableSidePanel", Ru && `ResizableSidePanel-${Ru}`, {
          Covers: "always" === Ku,
          CoversWhenNarrow: "narrow" === Ku,
          Dragged: null !== xu
        }),
        style: {
          [ju ? "height" : "width"]: null !== xu && void 0 !== xu ? xu : yu
        },
        children: [ru, Ru && (0, Ju.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": ju ? "horizontal" : "vertical",
          onPointerDown: uu => {
            if (0 !== uu.button) return;
            uu.preventDefault();
            const Ru = Bu.current,
              yu = Array.from(Ru.parentElement.children).reduce(((uu, yu) => yu !== Ru && "0" !== getComputedStyle(yu).flexGrow ? uu + (uu => ju ? uu.clientHeight : uu.clientWidth)(yu) : uu), 0),
              Eu = ju ? Ru.offsetHeight : Ru.offsetWidth,
              Ku = Math.min(Nu, Eu),
              Qu = Math.max(Ku, Eu + Math.max(0, yu - Xu));
            Wu.current = {
              start: Hu(uu),
              startSize: Eu,
              minSize: Ku,
              maxSize: Qu
            }, uu.currentTarget.setPointerCapture(uu.pointerId)
          },
          onPointerMove: uu => {
            const yu = Wu.current;
            if (!yu) return;
            const Eu = "right" === Ru ? yu.start - uu.clientX : Hu(uu) - yu.start;
            Su(Math.min(yu.maxSize, Math.max(yu.minSize, yu.startSize + Eu)))
          },
          onPointerUp: du,
          onPointerCancel: du,
          onLostPointerCapture: du
        }), Vu && (0, Ju.jsx)(mu.h, {
          className: "ResizableSidePanelClose",
          onClick: Vu
        })]
      })
    }
  },
  36683: (uu, Ru, yu) => {
    yu.d(Ru, {
      C: () => Ku,
      G: () => ku,
      e: () => Hu,
      h: () => Tu,
      j: () => Su,
      l: () => xu,
      m: () => ju,
      q: () => Au,
      s: () => du,
      t: () => Cu,
      w: () => bu,
      y: () => eu
    });
    var Eu = yu(64);
    const Ku = 5e3,
      Qu = 500,
      mu = 3e3;
    let Ju = null,
      Nu = null,
      Xu = null;
    const Vu = new Set;

    function ru(uu) {
      Ju = uu;
      for (const Ru of Vu) Ru()
    }

    function Bu() {
      if (!Ju || void 0 !== Ju.endedAt) return;
      null !== Nu && (clearTimeout(Nu), Nu = null), ru({
        ...Ju,
        endedAt: Date.now()
      });
      const uu = Xu;
      Xu = null, null === uu || void 0 === uu || uu()
    }

    function xu(uu, Ru) {
      let {
        submit: yu,
        reopen: Eu
      } = Ru;
      null !== Nu && clearTimeout(Nu), Xu = Eu, ru({
        ...uu,
        startedAt: Date.now(),
        errors: []
      }), Nu = setTimeout(Bu, mu), yu()
    }

    function Su() {
      Ju && void 0 === Ju.endedAt && void 0 === Ju.ranAt && (null !== Nu && clearTimeout(Nu), ru({
        ...Ju,
        ranAt: Date.now()
      }), Nu = setTimeout(Bu, Ku))
    }
    const pu = 3;

    function Tu(uu) {
      if (!Ju || void 0 === Ju.ranAt || void 0 !== Ju.endedAt || Ju.errors.includes(uu) || Ju.errors.length >= pu) return;
      const Ru = 0 === Ju.errors.length;
      ru({
        ...Ju,
        errors: [...Ju.errors, uu]
      }), Ru && (null !== Nu && clearTimeout(Nu), Nu = setTimeout(Bu, Qu))
    }

    function Wu(uu) {
      var Ru;
      return (null === (Ru = Ju) || void 0 === Ru ? void 0 : Ru.chatKey) === uu ? Ju : null
    }

    function ju(uu) {
      const Ru = Wu(uu);
      return Ru && void 0 !== Ru.endedAt ? (ru(null), Ru) : null
    }

    function Hu(uu) {
      var Ru;
      (null === (Ru = Ju) || void 0 === Ru ? void 0 : Ru.chatKey) === uu && (null !== Nu && (clearTimeout(Nu), Nu = null), Xu = null, ru(null))
    }
    const du = "These changes from your last answer didn't go in. Make them again.";

    function bu(uu) {
      const Ru = [...new Set(uu)].slice(0, pu);
      return `Fix this in your change: when it ran, the world showed ${1===Ru.length?"this error":"these errors"}: ${Ru.join(" ")}`
    }

    function Cu(uu) {
      return `Your change didn't go in, because the code wouldn't run at all: ${uu.join(" ")} Send the whole change again with that fixed.`
    }

    function ku(uu) {
      return `Fix this in your change: ${uu.join(" ")}`
    }

    function eu(uu) {
      var Ru;
      if (void 0 === uu.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const yu = Math.max(1, Math.round(((null !== (Ru = uu.endedAt) && void 0 !== Ru ? Ru : uu.ranAt) - uu.ranAt) / 1e3)),
        Eu = `Your change ran in your world for ${yu} ${1===yu?"second":"seconds"}`;
      return 0 === uu.errors.length ? {
        title: "Tested: no errors",
        text: `${Eu} without an error.`
      } : {
        title: 1 === uu.errors.length ? "Tested: it showed an error" : `Tested: it showed ${uu.errors.length} errors`,
        text: `${Eu} and showed: ${uu.errors.join(" ")}`
      }
    }

    function Au(uu) {
      const [Ru, yu] = (0, Eu.useState)((() => Wu(uu)));
      return (0, Eu.useEffect)((() => {
        const Ru = () => {
          yu(Wu(uu))
        };
        return Ru(), Vu.add(Ru), () => {
          Vu.delete(Ru)
        }
      }), [uu]), Ru
    }
  },
  36687: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku,
      e: () => Eu
    });
    const Eu = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function Ku(uu, Ru, yu) {
      return {
        key: uu,
        label: `Code block at ${Ru.join(", ")}`,
        codeBlock: !0,
        pos: Ru,
        canChangePos: yu
      }
    }
  },
  36681: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      e: () => Qu,
      g: () => mu,
      i: () => Ku
    });
    const Eu = "code block",
      Ku = "World Code/";

    function Qu(uu) {
      return uu.trim().toLowerCase().startsWith(Ku.toLowerCase())
    }

    function mu(uu) {
      return uu.trim().slice(Ku.length).replace(/^\.?\//, "")
    }
  },
  36642: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => du,
      D: () => Iu,
      H: () => Du,
      K: () => Bu,
      L: () => su,
      M: () => eu,
      P: () => Au,
      R: () => nu,
      e: () => Su,
      g: () => Nu,
      k: () => pu,
      l: () => Mu,
      n: () => Ju,
      r: () => Vu,
      u: () => xu,
      y: () => Tu
    });
    var Eu = yu(36632),
      Ku = yu(36640);
    const Qu = "bloxd-world-code-directory-sync",
      mu = "handles",
      Ju = "[INVALID SCHEMATIC PLACEHOLDER]";

    function Nu(uu, Ru) {
      return `${uu}::${Ru}`
    }
    const Xu = new Set(["node_modules", ".git"]);

    function Vu() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function ru() {
      return new Promise(((uu, Ru) => {
        const yu = indexedDB.open(Qu, 1);
        yu.onupgradeneeded = () => {
          const uu = yu.result;
          uu.objectStoreNames.contains(mu) || uu.createObjectStore(mu)
        }, yu.onsuccess = () => {
          uu(yu.result)
        }, yu.onerror = () => {
          var uu;
          Ru(null !== (uu = yu.error) && void 0 !== uu ? uu : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function Bu(uu, Ru) {
      const yu = await ru();
      try {
        await new Promise(((Eu, Ku) => {
          const Qu = yu.transaction(mu, "readwrite");
          Qu.objectStore(mu).put(Ru, uu), Qu.oncomplete = () => {
            Eu()
          }, Qu.onerror = () => {
            var uu;
            Ku(null !== (uu = Qu.error) && void 0 !== uu ? uu : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        yu.close()
      }
    }
    async function xu(uu) {
      const Ru = await ru();
      try {
        return await new Promise(((yu, Eu) => {
          const Ku = Ru.transaction(mu, "readonly").objectStore(mu).get(uu);
          Ku.onsuccess = () => {
            var uu;
            yu(null !== (uu = Ku.result) && void 0 !== uu ? uu : null)
          }, Ku.onerror = () => {
            var uu;
            Eu(null !== (uu = Ku.error) && void 0 !== uu ? uu : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        Ru.close()
      }
    }
    async function Su(uu) {
      const Ru = await ru();
      try {
        await new Promise(((yu, Eu) => {
          const Ku = Ru.transaction(mu, "readwrite");
          Ku.objectStore(mu).delete(uu), Ku.oncomplete = () => {
            yu()
          }, Ku.onerror = () => {
            var uu;
            Eu(null !== (uu = Ku.error) && void 0 !== uu ? uu : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        Ru.close()
      }
    }
    async function pu(uu) {
      const Ru = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await uu.queryPermission(Ru) || "granted" === await uu.requestPermission(Ru)
    }
    async function Tu(uu) {
      if (!Vu()) return null;
      try {
        const Ru = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await Bu(uu, Ru), Ru
      } catch (Ru) {
        if (function(uu) {
            return uu instanceof DOMException && "AbortError" === uu.name
          }(Ru)) return null;
        throw Ru
      }
    }

    function Wu(uu) {
      return uu.startsWith(".") || Xu.has(uu)
    }

    function ju(uu) {
      if (!uu) return !0;
      const Ru = uu.split("/");
      for (const yu of Ru)
        if ("" === yu || "." === yu || ".." === yu) return !1;
      return !0
    }
    async function Hu(uu, Ru, yu) {
      for await (const [Qu, mu] of uu.entries()) {
        if ("directory" === mu.kind) {
          if (Wu(Qu)) continue;
          const uu = Ru ? `${Ru}/${Qu}` : Qu;
          if (!ju(uu)) continue;
          await Hu(mu, uu, yu);
          continue
        }
        const uu = Ru ? `${Ru}/${Qu}` : Qu;
        if (!(0, Eu.v)(uu) && !(0, Ku.c)(uu)) continue;
        const Ju = await mu.getFile();
        yu[uu] = (0, Ku.c)(uu) ? await Gu(Ju) : await Ju.text()
      }
    }
    async function du(uu) {
      const Ru = {};
      return await Hu(uu, "", Ru), Ru
    }

    function bu(uu) {
      return !(!uu || uu !== uu.trim() || uu.startsWith("/") || uu.includes("\\") || uu.includes("\0")) && ju(uu)
    }
    async function Cu(uu, Ru, yu) {
      const Eu = Ru.split("/"),
        Ku = Eu[Eu.length - 1];
      let Qu = uu;
      for (let mu = 0; mu < Eu.length - 1; mu++) Qu = await Qu.getDirectoryHandle(Eu[mu], {
        create: yu
      });
      return {
        dir: Qu,
        fileName: Ku
      }
    }
    async function ku(uu, Ru, yu) {
      if (!bu(Ru)) throw new Error(`Refusing to write unsafe path: ${Ru}`);
      const {
        dir: Eu,
        fileName: Ku
      } = await Cu(uu, Ru, !0), Qu = await Eu.getFileHandle(Ku, {
        create: !0
      }), mu = await Qu.createWritable();
      await mu.write(yu), await mu.close()
    }
    async function eu(uu, Ru, yu) {
      const Eu = await async function(uu, Ru) {
        if (!bu(Ru)) return null;
        try {
          const {
            dir: yu,
            fileName: Eu
          } = await Cu(uu, Ru, !1), Ku = await yu.getFileHandle(Eu), Qu = await Ku.getFile();
          return await Qu.text()
        } catch (yu) {
          if (yu instanceof DOMException && ("NotFoundError" === yu.name || "NotAllowedError" === yu.name)) return null;
          throw yu
        }
      }(uu, Ru);
      Eu !== yu && await ku(uu, Ru, yu)
    }
    async function Au(uu, Ru, yu) {
      if (!(0, Eu.v)(Ru) && !(0, Ku.c)(Ru)) throw new Error(`Refusing to write non-allowlisted path: ${Ru}`);
      if ((0, Ku.c)(Ru)) {
        if (await Uu(uu, Ru) === Ju) throw new Error(`Move the binary schematic ${Ru} outside the linked folder before syncing its placeholder`)
      }
      await ku(uu, Ru, yu)
    }
    async function Du(uu, Ru) {
      if (!bu(Ru)) throw new Error(`Refusing to remove unsafe path: ${Ru}`);
      try {
        const {
          dir: yu,
          fileName: Eu
        } = await Cu(uu, Ru, !1);
        await yu.removeEntry(Eu)
      } catch (yu) {
        if (yu instanceof DOMException && ("NotFoundError" === yu.name || "NotAllowedError" === yu.name)) return;
        throw yu
      }
    }
    async function Mu(uu, Ru) {
      if (!bu(Ru)) return null;
      try {
        const yu = Ru.split("/");
        let Eu = uu;
        for (const uu of yu) Eu = await Eu.getDirectoryHandle(uu);
        return Eu
      } catch (yu) {
        if (yu instanceof DOMException && ("NotFoundError" === yu.name || "NotAllowedError" === yu.name)) return null;
        throw yu
      }
    }
    async function Iu(uu, Ru) {
      if ((0, Eu.v)(Ru) || (0, Ku.c)(Ru)) {
        if ((0, Ku.c)(Ru)) {
          if (await Uu(uu, Ru) === Ju) throw new Error(`Refusing to remove a binary schematic: ${Ru}`)
        }
        await Du(uu, Ru)
      }
    }
    async function Gu(uu) {
      if (uu.size > 64) return Ju;
      const Ru = await uu.text();
      return Array.from(Ru).some((uu => {
        const Ru = uu.charCodeAt(0);
        return Ru < 9 || Ru > 13 && Ru < 32 || 65533 === Ru
      })) ? Ju : Ru
    }
    async function Uu(uu, Ru) {
      try {
        const {
          dir: yu,
          fileName: Eu
        } = await Cu(uu, Ru, !1);
        return await Gu(await (await yu.getFileHandle(Eu)).getFile())
      } catch (yu) {
        if (yu instanceof DOMException && "NotFoundError" === yu.name) return null;
        throw yu
      }
    }
    async function nu(uu, Ru) {
      const yu = await du(uu);
      for (const Eu of Object.keys(yu)) Eu in Ru || (0, Ku.c)(Eu) || await Iu(uu, Eu);
      for (const [Qu, mu] of Object.entries(Ru))((0, Eu.v)(Qu) || (0, Ku.c)(Qu)) && await Au(uu, Qu, mu)
    }

    function su(uu, Ru) {
      var yu, Eu;
      let Ku = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Qu = null !== (yu = Ku.debounceMs) && void 0 !== yu ? yu : 300,
        mu = null !== (Eu = Ku.pollMs) && void 0 !== Eu ? Eu : 1e3;
      let Ju = !1,
        Nu = null,
        Xu = null,
        Vu = null;
      const ru = () => {
          Ju || (Nu && clearTimeout(Nu), Nu = setTimeout((() => {
            Nu = null, Bu()
          }), Qu))
        },
        Bu = async () => {
          if (!Ju) try {
            if (!await pu(uu, "readwrite")) return;
            const yu = await du(uu);
            Ju || Ru(yu)
          } catch (yu) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", yu)
          }
        };
      Bu();
      const xu = window.FileSystemObserver;
      if (xu) try {
        Vu = new xu((() => {
          ru()
        })), Vu.observe(uu, {
          recursive: !0
        })
      } catch (Su) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", Su), Vu = null
      }
      return Vu || (Xu = setInterval((() => {
        ru()
      }), mu)), () => {
        Ju = !0, Nu && clearTimeout(Nu), Xu && clearInterval(Xu), Vu && Vu.disconnect()
      }
    }
  },
  4598: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Tu,
      e: () => Wu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(64),
      mu = yu(1170),
      Ju = yu(4604),
      Nu = yu(1825),
      Xu = yu(2335),
      Vu = yu(4611),
      ru = yu(1079);
    const Bu = new WeakMap;
    let xu = 0;

    function Su(uu) {
      let Ru = Bu.get(uu);
      return void 0 === Ru && (Ru = xu++, Bu.set(uu, Ru)), Ru
    }

    function pu(uu) {
      let {
        piece: Ru
      } = uu;
      return "space" === Ru.kind ? (0, ru.jsx)(ru.Fragment, {
        children: Ru.text
      }) : (0, ru.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Ru.delayMs}ms`
        },
        children: (0, ru.jsx)(Ju.c, {
          text: "icon" === Ru.kind ? `[[${Ru.icon}]]` : Ru.text
        })
      })
    }

    function Tu(uu) {
      let {
        display: Ru
      } = uu;
      const {
        selectedLanguage: yu
      } = (0, mu.E)(), Eu = (0, Qu.useMemo)((() => (0, Vu.d)((0, Vu.g)(Ru).plan.pieces)), [Ru, yu.code]);
      return (0, ru.jsxs)("div", {
        className: Ku()("Dialogue", {
          DialogueAnimateIn: !1 !== Ru.animateIn
        }),
        children: [Ru.speakerName && (0, ru.jsx)(Nu.d, {
          text: Ru.speakerName,
          className: "DialogueSpeaker"
        }), (0, ru.jsx)("p", {
          className: "DialogueLine",
          children: Eu.map(((uu, Ru) => 1 === uu.length && "space" === uu[0].kind ? uu[0].text : (0, ru.jsx)("span", {
            className: "DialogueGlue",
            children: uu.map(((uu, Ru) => (0, ru.jsx)(pu, {
              piece: uu
            }, Ru)))
          }, Ru)))
        })]
      })
    }
    const Wu = (0, Qu.memo)((function() {
      const uu = (0, Xu.g)("dialogue");
      return (0, ru.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: uu && (0, ru.jsx)(Tu, {
          display: uu
        }, Su(uu))
      })
    }))
  },
  36515: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => xu,
      h: () => Su
    });
    var Eu = yu(64),
      Ku = yu(2780),
      Qu = yu(1400),
      mu = yu(1899),
      Ju = yu(36459),
      Nu = yu(610),
      Xu = yu(1035),
      Vu = yu.n(Xu),
      ru = yu(1079);
    const Bu = {},
      xu = (0, Eu.memo)((function() {
        const uu = (0, Ku.c)();
        return (0, Qu.e)("damagedByOtherPlayer", (Ru => {
          let {
            vy: yu,
            direction: Eu
          } = Ru;
          const Ku = yu || "nonDirectional";
          if (Bu[Ku]) {
            const Ru = Bu[Ku];
            clearTimeout(Ru.timeout), Ru.direction = Eu, Ru.timeout = setTimeout((() => {
              delete Bu[Ku], uu()
            }), 800)
          } else Bu[Ku] = {
            direction: Eu,
            WU: null,
            timeout: setTimeout((() => {
              delete Bu[Ku], uu()
            }), 800)
          };
          uu()
        })), (0, mu.d)("kill", (Ru => {
          let {
            killer: yu,
            victim: Eu
          } = Ru;
          const Ku = Eu.id;
          yu.local && Ku && Ku in Bu && (clearTimeout(Bu[Ku].timeout), delete Bu[Ku], uu())
        })), (0, Eu.useEffect)((() => {
          const uu = (0, Ju.f)("turnDamageIndicators", Su);
          return () => {
            uu();
            for (const uu in Bu) clearTimeout(Bu[uu].timeout), delete Bu[uu]
          }
        }), []), (0, ru.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(Bu).map((uu => {
            let [Ru, yu] = uu;
            const Eu = (0, Nu.E)(yu.direction);
            return (0, ru.jsx)("div", {
              ref: uu => {
                Bu[Ru] && (Bu[Ru].WU = uu)
              },
              className: Vu()("DamageIndicator", {
                DamageIndicatorFullCircle: Eu
              })
            }, Ru)
          }))
        })
      }));

    function Su(uu) {
      for (const Ru in Bu) {
        const {
          direction: yu,
          WU: Eu
        } = Bu[Ru];
        if ((0, Nu.E)(yu)) continue;
        const Ku = yu - uu;
        Eu.style.rotate = `${Ku}rad`
      }
    }
  },
  36391: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Tu
    });
    var Eu = yu(64),
      Ku = yu(80),
      Qu = yu(1170),
      mu = yu(1035),
      Ju = yu.n(mu),
      Nu = yu(1661),
      Xu = yu(1043),
      Vu = yu(1247),
      ru = yu(1422),
      Bu = yu(1611),
      xu = yu(1419),
      Su = yu(1079);
    const pu = 14;

    function Tu(uu) {
      let {
        className: Ru,
        triggerElementRef: yu,
        options: mu
      } = uu;
      const {
        t: Tu
      } = (0, Qu.E)(), [Wu, ju] = (0, Eu.useState)(!1), [Hu, du] = (0, Eu.useState)({
        x: 0,
        y: 0
      }), bu = (0, Eu.useRef)(null);
      (0, Eu.useEffect)((() => {
        let uu = null;
        const Ru = Ru => {
            uu = {
              x: Ru.clientX,
              y: Ru.clientY
            }
          },
          Eu = Ru => {
            if (null === uu || !(0, xu.b)(uu, Ru)) return;
            uu = null;
            const yu = pu * (0, Nu.getRemInPx)();
            du({
              x: Math.min(Ru.clientX, window.innerWidth - yu - 5),
              y: Ru.clientY
            }), ju((uu => !uu))
          },
          Ku = uu => {
            var Ru;
            null !== (Ru = bu.current) && void 0 !== Ru && Ru.contains(uu.relatedTarget) || ju(!1)
          },
          Qu = yu.current;
        return Qu.addEventListener("pointerdown", Ru), Qu.addEventListener("pointerup", Eu), Qu.addEventListener("mouseleave", Ku), () => {
          Qu.removeEventListener("pointerdown", Ru), Qu.removeEventListener("pointerup", Eu), Qu.removeEventListener("mouseleave", Ku)
        }
      }), [yu]), (0, Eu.useEffect)((() => {
        if (Wu) return (0, Bu.b)("pointerdown", (uu => {
          !bu.current || bu.current.contains(uu.target) || yu.current.contains(uu.target) || ju(!1)
        }))
      }), [Wu, yu]), (0, Eu.useLayoutEffect)((() => {
        if (!Wu || !bu.current) return;
        const uu = bu.current.getBoundingClientRect().height,
          Ru = Math.max(5, window.innerHeight - uu - 5);
        Hu.y > Ru && du({
          x: Hu.x,
          y: Ru
        })
      }), [Wu, Hu]), (0, Vu.t)("popup", bu, (() => {
        ju(!1)
      }), Wu);
      const Cu = mu.filter((uu => !1 !== uu.show));
      return Wu && 0 !== Cu.length ? (0, Ku.createPortal)((0, Su.jsx)("div", {
        ref: bu,
        className: Ju()("FloatingActions", {
          [Ru]: Ru
        }),
        style: {
          width: `${pu}rem`,
          top: Hu.y,
          left: Hu.x
        },
        children: Cu.map((uu => {
          let {
            icon: Ru,
            text: yu,
            onPointerDown: Eu,
            analyticsClick: Ku
          } = uu;
          return (0, Su.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: uu => {
              void 0 !== Ku && (0, ru.reportAnalyticsClick)(Ku), Eu(uu), ju(!1), uu.stopPropagation()
            },
            children: [(0, Su.jsx)(Xu.c, {
              name: Ru
            }), (0, Su.jsx)("div", {
              children: Tu(yu)
            })]
          }, yu)
        }))
      }), function() {
        var uu;
        return null !== (uu = document.querySelector(".WholeAppWrapperInner")) && void 0 !== uu ? uu : document.body
      }()) : null
    }
  },
  36536: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => xm
    });
    var Eu = yu(36436),
      Ku = yu(64),
      Qu = yu(1987),
      mu = yu(4301),
      Ju = yu(4307),
      Nu = yu(2335),
      Xu = yu(1855),
      Vu = yu(1079);

    function ru(uu) {
      let {
        className: Ru,
        style: yu,
        vw: Eu,
        maxPx: Ku,
        children: Qu
      } = uu;
      console.assert("number" === typeof Eu && "number" === typeof Ku, "vw and maxPx passed to Text must be numbers");
      const mu = window.innerWidth * (Eu / 100) > Ku ? `${Ku}px` : `${Eu}vw`;
      return (0, Vu.jsx)("div", {
        className: Ru,
        style: {
          ...yu,
          fontSize: mu
        },
        children: Qu
      })
    }
    var Bu = yu(36539),
      xu = yu(1408),
      Su = yu(34),
      pu = yu(1878),
      Tu = yu(1043);

    function Wu(uu) {
      let {
        tasks: Ru,
        lastDisplayedTasks: yu
      } = uu;
      return (0, Vu.jsx)(Vu.Fragment, {
        children: Object.keys(Ru).map((uu => (0, Vu.jsx)(ju, {
          task: Ru[uu],
          lastDisplayedAs: yu[uu]
        }, Ru[uu].text)))
      })
    }

    function ju(uu) {
      let {
        task: Ru,
        lastDisplayedAs: yu
      } = uu;
      const [Eu, Qu] = (0, Ku.useState)(null !== yu && void 0 !== yu && yu.progress ? yu.progress / Ru.goal : 0), [mu, Ju] = (0, Ku.useState)(!1), [Nu, Xu] = (0, Ku.useState)(Ru.claimed || !1);
      return (0, Ku.useEffect)((() => {
        Qu(Ru.progress / Ru.goal)
      }), [Ru.progress, Ru.goal]), Nu ? null : (0, Vu.jsxs)("div", {
        className: "Task",
        children: [(0, Vu.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, Vu.jsx)(ru, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: Ru.text
          })
        }), Ru.progress < Ru.goal ? (0, Vu.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== Eu ? (0, Vu.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * Eu + "%"
            }
          }) : null, (0, Vu.jsx)("div", {
            className: "TaskProgressText",
            children: `${Ru.progress}/${Ru.goal}`
          })]
        }) : (0, Vu.jsx)(xu.l, {
          className: "ClaimRewardButton",
          onClick: () => {
            Ju(!0)
          },
          children: (0, Vu.jsx)(ru, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), mu ? (0, Vu.jsx)(Hu, {
          task: Ru,
          close: () => {
            Ru.claimed = !0, Xu(!0), Ju(!1)
          }
        }) : null]
      })
    }

    function Hu(uu) {
      let {
        task: Ru,
        close: yu
      } = uu;
      const [Eu, Qu] = (0, Ku.useState)({}), [mu, Ju] = (0, Ku.useState)("closed");
      (0, Ku.useEffect)((() => {
        let uu;
        return "animStart" === mu && (uu = setTimeout((() => {
          Ju("animEnd")
        }), 700)), () => {
          clearTimeout(uu)
        }
      }), [mu]), (0, Bu.b)((() => {
        Xu.gameBridge.send("completeTask", Ru.text)
      }));
      const ru = (0, Nu.g)("currencyAmounts");
      return (0, Vu.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === mu)
            if (0 === Ru.rewards.length) yu(), Xu.gameBridge.send("completeTask", Ru.text);
            else {
              const uu = {
                ...pu.b.get("currencyAmounts")
              };
              for (const Ru in Eu) uu[Ru] = {
                ...uu[Ru],
                amount: uu[Ru].amount + Eu[Ru]
              };
              pu.b.apply({
                currencyAmounts: uu
              }), Ju("closed")
            }
          else "closed" === mu && (Qu(Ru.rewards.pop()), Ju("animStart"))
        },
        children: [(0, Vu.jsx)("img", {
          className: "Chest",
          alt: "closed" !== mu ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==mu?"open":"closed"}.png`
        }), (0, Vu.jsx)("div", {
          className: "Rewards",
          children: "closed" !== mu ? Object.keys(Eu).map((uu => {
            const Ru = null === ru || void 0 === ru ? void 0 : ru[uu];
            return !Ru || Ru.hidden ? null : (0, Vu.jsxs)("div", {
              className: "Reward",
              children: [(0, Vu.jsx)(Tu.c, {
                name: Ru.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: Ru.iconColour
                }
              }), (0, Vu.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === mu ? 0 : Eu[uu]
              })]
            }, uu)
          })) : null
        }), "animStart" === mu ? (0, Vu.jsx)(du, {}) : null, (0, Vu.jsx)("div", {
          className: "ChestsLeft",
          children: Ru.rewards.length
        })]
      })
    }

    function du() {
      const [uu, Ru] = (0, Ku.useState)(0);
      (0, Ku.useEffect)((() => {
        Ru(1)
      }), []);
      return (0, Vu.jsx)(Vu.Fragment, {
        children: Array.from({
          length: 40
        }).map(((Ru, yu) => (0, Vu.jsx)(Tu.c, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * uu * Math.cos(yu / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * uu * Math.sin(yu / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === uu ? 1 : 0
          }
        }, yu)))
      })
    }
    Su.k.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const uu = new Image,
          Ru = new Image;
        uu.src = "/textures/miscImages/Treasure Chest open.png", Ru.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var bu = yu(2916),
      Cu = yu(1107),
      ku = yu(1825),
      eu = yu(1400),
      Au = yu(343),
      Du = yu(1899),
      Mu = yu(1300);

    function Iu(uu) {
      var Ru, yu;
      let {
        byId: Eu,
        localId: Ku
      } = uu;
      return null === Ku ? null : null !== (Ru = null === (yu = Eu[Ku]) || void 0 === yu ? void 0 : yu.name) && void 0 !== Ru ? Ru : null
    }

    function Gu(uu) {
      let {
        lbStats: Ru,
        storedState: yu = {}
      } = uu;
      const {
        userContext: Eu
      } = (0, Cu.d)(), Qu = (0, Du.h)("players", Iu), [mu, Ju] = (0, Ku.useState)(yu.selectedCat || (null === Ru || void 0 === Ru ? void 0 : Ru[0]) || null), [Nu, ru] = (0, Ku.useState)(yu.selectedTimeframe || "Today"), [Bu, xu] = (0, Ku.useState)(null);
      (0, Ku.useEffect)((() => {
        null === mu && null !== Ru && Ru.length > 0 && Ju(Ru[0])
      }), [Ru, mu]);
      const [Su, pu] = (0, Ku.useState)(yu.seeingTop || !1), [Tu, Wu] = (0, Ku.useState)(!1), ju = (0, Ku.useCallback)((() => {
        null !== mu && null !== Nu && (Xu.gameBridge.send("requestLeaderboard", {
          category: mu.value,
          timeframe: Nu,
          seeTop: Su
        }), du(!0), su && tu(null))
      }), [mu, Nu, yu, Su]);
      (0, Ku.useEffect)((() => {
        ju(), yu.selectedCat = mu, yu.selectedTimeframe = Nu, yu.seeingTop = Su
      }), [mu, Nu, yu, Su, ju]), (0, Ku.useEffect)((() => {
        if ((null === Bu || void 0 === Bu ? void 0 : Bu.length) > 0)
          if (Su) Su && Wu(null === Gu(Bu));
          else {
            for (const uu of Bu)
              if (1 === uu.place) return void Wu(!1);
            Wu(!0)
          }
      }), [Bu, Su]), (0, eu.e)("leaderboardResponse", (uu => {
        let {
          category: yu,
          timeframe: Eu,
          data: Ku
        } = uu;
        for (let Qu = 0; Qu < Ru; Qu++)
          if (Ru[Qu].value === yu) {
            Ju(Ru[Qu]);
            break
          } ru(Eu), xu(Ku), du(!1)
      }));
      const [Hu, du] = (0, Ku.useState)(!0);

      function Gu(uu) {
        const Ru = Iu(Xu.gameBridge.latest("players"));
        for (let yu = 0; yu < uu.length; yu++)
          if (uu[yu].name === Ru) return uu[yu].place;
        return null
      }
      const [Uu, nu] = (0, Ku.useState)(!1), [su, tu] = (0, Ku.useState)(null);
      (0, Ku.useEffect)((() => {
        if (Bu && !Uu) {
          const uu = Gu(Bu);
          uu < (yu.lastSeenPlayerPlace || 0) && tu(yu.lastSeenPlayerPlace - uu), nu(!0)
        }
      }), [Bu, yu, Uu]), (0, Ku.useEffect)((() => () => {
        Bu && (yu.lastSeenPlayerPlace = Gu(Bu))
      }), [Bu, yu]);
      const lu = (0, Ku.useRef)(null),
        [gu, cu] = (0, Ku.useState)(void 0);
      return (0, Ku.useEffect)((() => {
        var uu, Ru;
        gu !== (null === (uu = lu.current) || void 0 === uu ? void 0 : uu.offsetHeight) && cu(null === (Ru = lu.current) || void 0 === Ru ? void 0 : Ru.offsetHeight)
      })), Eu.isLoggedIn() ? (0, Vu.jsxs)(Vu.Fragment, {
        children: [(0, Vu.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, Vu.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Vu.jsx)(bu.d, {
              options: Ru.map((uu => ({
                label: uu.label,
                value: uu.value
              }))),
              value: mu,
              onChange: uu => {
                Ju(uu)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, Vu.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Vu.jsx)(bu.d, {
              options: Au.Yc.map((uu => ({
                value: uu,
                label: uu,
                className: "LBDropdownMenuItem"
              }))),
              value: Nu,
              onChange: uu => {
                ru(uu.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), Tu ? (0, Vu.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              pu(!Su)
            },
            children: Su ? "See Yourself" : "See Top"
          }) : null]
        }), (0, Vu.jsx)("div", {
          className: "LBTableWrapper",
          children: Hu ? (0, Vu.jsx)("div", {
            className: "LoaderContainer",
            children: (0, Vu.jsx)(Mu.b, {})
          }) : null === su ? (0, Vu.jsx)(Vu.Fragment, {
            children: (0, Vu.jsxs)("table", {
              className: "LBTable",
              children: [(0, Vu.jsx)("thead", {
                className: "LBTableTHead",
                ref: lu,
                children: (0, Vu.jsxs)("tr", {
                  children: [(0, Vu.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, Vu.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, Vu.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: mu.label.toUpperCase()
                  })]
                })
              }), (0, Vu.jsx)("tbody", {
                children: Bu.map((uu => (0, Vu.jsxs)("tr", {
                  className: "LBTableTR " + (uu.name === Qu ? "LBTableTRYou" : ""),
                  children: [(0, Vu.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${uu.place}`
                  }), (0, Vu.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, Vu.jsx)(ku.d, {
                      text: [{
                        entityName: uu.name
                      }]
                    })
                  }), (0, Vu.jsx)("td", {
                    className: "LBTableTD",
                    children: uu.stat
                  })]
                }, uu.name)))
              })]
            })
          }) : (0, Vu.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              tu(null)
            },
            children: (0, Vu.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, Vu.jsx)("div", {
                className: "TriangleUp"
              }), (0, Vu.jsx)("div", {
                className: "LBIncreaseText",
                children: `${su} Place${su>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, Vu.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, Vu.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, Vu.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var Uu = yu(1100),
      nu = yu(106),
      su = yu(47),
      tu = yu(3217);
    const lu = (0, Ku.memo)((function(uu) {
      let {
        show: Ru,
        onClose: yu
      } = uu;
      (0, Uu.d)();
      const Eu = (0, Nu.g)("_tasks"),
        Qu = (0, Nu.g)("_availableLeaderboards"),
        [Xu, ru] = (0, Ku.useState)({});
      Eu && Object.keys(Eu).length > 0 && 0 === Object.keys(Xu).length && ru(Eu);
      const [Bu] = (0, Ku.useState)({
        tasks: {},
        leaderboard: {}
      }), xu = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!Eu && Object.keys(Eu).length > 0,
          content: (0, Vu.jsx)(Wu, {
            tasks: Eu,
            lastDisplayedTasks: Xu
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === Qu || void 0 === Qu ? void 0 : Qu.length) > 0,
          content: (0, Vu.jsx)(Gu, {
            lbStats: Qu,
            storedState: Bu.leaderboard
          })
        }
      };

      function Su() {
        for (const uu in xu)
          if (xu[uu].getIsDefined()) return uu;
        return null
      }
      const [pu, Tu] = (0, Ku.useState)(Su());

      function ju() {
        ru({
          ...Eu
        }), yu()
      }(0, Ku.useEffect)((() => {
        pu || Tu(Su())
      }), [Su()]), (0, Ju.e)(!0, pu && Ru), (0, Ku.useEffect)((() => {
        Ru && !pu && (console.log("CLOSE"), ju())
      }), [Ru, pu]);
      const [Hu, du] = (0, Ku.useState)(!1);
      return (0, Ku.useEffect)((() => {
        Ru && pu && !Hu && du(!0)
      }), [Ru, Hu, pu]), (0, Ku.useEffect)((() => {
        !Hu && Eu && "tasks" !== pu && Tu("tasks")
      }), [Hu, Eu, pu]), (0, Vu.jsx)(Vu.Fragment, {
        children: pu ? (0, Vu.jsx)(tu.c, {
          className: "RetentionFeaturesWrapper",
          show: Ru,
          children: (0, Vu.jsxs)(mu.e, {
            close: ju,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, Vu.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, Vu.jsx)(cu, {}), (0, Vu.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, Vu.jsx)(gu, {
                  setCategory: Tu,
                  menuCategories: xu,
                  selectedCat: pu
                }), (0, Vu.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: xu[pu].content
                })]
              })]
            }), (0, Vu.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: nu.featureFlags.useDiscord && (0, Vu.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, Vu.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, Vu.jsx)(Lu, {
                    tasks: Eu
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function gu(uu) {
      let {
        selectedCat: Ru,
        setCategory: yu,
        menuCategories: Eu
      } = uu;
      return (0, Vu.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(Eu).map((uu => Eu[uu].getIsDefined() ? (0, Vu.jsx)("div", {
          className: "MenuHeaderCategory " + (uu === Ru ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            yu(uu)
          },
          children: Eu[uu].Title
        }, uu) : null))
      })
    }

    function cu() {
      const uu = (0, Nu.g)("currencyAmounts");
      return (0, Vu.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== uu && void 0 !== uu ? uu : {}).map((Ru => {
          const yu = uu[Ru];
          return yu.hidden ? null : (0, Vu.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, Vu.jsx)(Tu.c, {
              name: yu.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: yu.iconColour
              }
            }), (0, Vu.jsx)("div", {
              className: "UiCurrencyAmount",
              children: yu.amount
            })]
          }, Ru)
        }))
      })
    }

    function Lu(uu) {
      let {
        tasks: Ru
      } = uu;
      return (0, Vu.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, Vu.jsx)(Tu.c, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            su.i.setItem("DiscordPressed", !0), Xu.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in Ru && Su.k.Op("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, Vu.jsx)(Qu.e, {})]
      })
    }
    var zu = yu(27),
      Fu = yu(1583),
      wu = yu(36377),
      Zu = yu(8955),
      hu = yu(4409),
      Pu = yu(174),
      iu = yu(1191),
      Yu = yu(1325),
      ou = yu(2508),
      qu = yu(1170),
      Ou = yu(1587),
      vu = yu(2295),
      au = yu(2285),
      fu = yu(1774),
      uR = yu(1960),
      RR = yu(1232),
      yR = yu(1422),
      ER = yu(4362);

    function KR(uu) {
      const Ru = {
        lobbyName: uu,
        answer: null,
        response: ER.e.getSocialSettings(uu)
      };
      return Ru.response.then((uu => {
        Ru.answer = uu
      })), Ru
    }
    const QR = new Map;

    function mR(uu) {
      const [Ru] = (0, Ku.useState)((() => function(uu) {
        var Ru;
        const yu = null !== (Ru = QR.get(uu)) && void 0 !== Ru ? Ru : null;
        return null !== yu && void 0 !== yu && yu.answer && "error" in yu.answer ? null : yu
      }(uu))), [yu, Eu] = (0, Ku.useState)((() => null !== Ru && void 0 !== Ru && Ru.answer && "settings" in Ru.answer ? Ru.answer.settings : null)), [Qu, mu] = (0, Ku.useState)(!0), [Ju, Nu] = (0, Ku.useState)(null !== yu), Xu = (0, Ku.useRef)(yu);
      Xu.current = yu;
      const Vu = (0, Ku.useRef)(0),
        ru = (0, Ku.useRef)(0),
        Bu = (0, Ku.useRef)(!1),
        xu = (0, Ku.useRef)(!0),
        Su = (0, Ku.useCallback)((async Ru => {
          const yu = ++Vu.current,
            Ku = await (null !== Ru && void 0 !== Ru ? Ru : ER.e.getSocialSettings(uu));
          xu.current && yu === Vu.current && (Nu(!0), mu(!1), "error" in Ku || Eu(Ku.settings))
        }), [uu]),
        pu = (0, Ku.useCallback)((() => {
          mu(!0), Su()
        }), [Su]);
      (0, Ku.useEffect)((() => (xu.current = !0, QR.delete(uu), mu(!0), Su(null === Ru || void 0 === Ru ? void 0 : Ru.response), () => {
        xu.current = !1
      })), [Su, uu, Ru]);
      const Tu = uu => {
        Vu.current++, mu(!1), Xu.current = uu, Eu(uu)
      };
      return {
        settings: yu,
        loading: Qu,
        answered: Ju,
        retry: pu,
        change: async function(Ru, yu) {
          let {
            quiet: Eu = !1
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const Ku = Xu.current;
          if (null === Ku) return !1;
          Tu(yu(Ku)), ru.current > 0 && (Bu.current = !0), ru.current++;
          const Qu = await ER.e.setSocialSettings(uu, Ru);
          ru.current--;
          const mu = !("error" in Qu);
          if (!xu.current) return mu;
          if (Eu);
          else if ("error" in Qu) fu.i.showMessage({
            translationKey: Qu.error
          });
          else
            for (const uu of Qu.notFound) fu.i.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: uu
              }
            });
          if (ru.current > 0) return mu;
          const Ju = Bu.current;
          return Bu.current = !1, !Ju && "settings" in Qu ? Tu(Qu.settings) : (Ju || Tu(Ku), Su()), mu
        }
      }
    }

    function JR(uu, Ru) {
      const yu = Ru.toLowerCase();
      for (const Eu of uu)
        if (Eu.toLowerCase() === yu) return !0;
      return !1
    }

    function NR(uu) {
      if (null === uu) return !0;
      const {
        visibility: Ru
      } = uu;
      return "public" === Ru || "unlisted" === Ru || "whitelist" === Ru && uu.canManage
    }

    function XR(uu, Ru, yu) {
      if (yu) {
        const yu = Ru.filter((Ru => !JR(uu.whitelist, Ru)));
        return {
          ...uu,
          whitelist: [...uu.whitelist, ...yu]
        }
      }
      return {
        ...uu,
        whitelist: uu.whitelist.filter((uu => !JR(Ru, uu)))
      }
    }
    var VR = yu(2529);

    function rR(uu) {
      let {
        worldCode: Ru,
        message: yu
      } = uu;
      const {
        t: Eu
      } = (0, qu.E)(), {
        isTouchScreen: Qu
      } = (0, zu.j)(["isTouchScreen"]), mu = nu.featureFlags.canUseInviteLinks, Ju = (0, Zu.h)(mu && null === yu), [Nu, Xu] = (0, VR.i)(), ru = (0, Ku.useRef)(null);
      if (null !== yu) return (0, Vu.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Vu.jsx)(Tu.c, {
          name: "lock"
        }), (0, Vu.jsx)("span", {
          children: yu
        })]
      });
      const Bu = mu ? Ju : Ru,
        Su = Qu && mu && (0, VR.c)();
      return (0, Vu.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!mu && (0, Vu.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Eu("worldSocial:worldCode")
        }), (0, Vu.jsx)("input", {
          ref: ru,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Bu && void 0 !== Bu ? Bu : "",
          "aria-label": Eu(mu ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: uu => {
            uu.currentTarget.select()
          }
        }), (0, Vu.jsxs)(xu.e, {
          className: "WorldSocialCopy",
          disabled: null === Bu,
          onClick: () => {
            null !== Bu && (0, VR.f)(Bu, {
              useShareSheet: Su,
              onOutcome: uu => {
                if ((0, yR.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== uu || mu ? uu : "code"
                  }), "copied" === uu) Xu();
                else if ("failed" === uu) {
                  var Ru;
                  null === (Ru = ru.current) || void 0 === Ru || Ru.focus(), fu.i.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Vu.jsx)(Tu.c, {
            name: Nu ? "check" : Su ? "up-from-bracket" : "copy"
          }), " ", Eu(Nu ? "general:copied" : Su ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
    var BR = yu(1035),
      xR = yu.n(BR);
    const SR = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      pR = ["unlisted", "public", "whitelist", "private"];

    function TR(uu) {
      let {
        visibility: Ru,
        onPick: yu
      } = uu;
      const {
        t: Eu
      } = (0, qu.E)(), Qu = (0, Ku.useRef)([]);
      return (0, Vu.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Eu("worldSocial:whoCanJoin"),
        children: pR.map(((uu, Ku) => {
          const mu = uu === Ru;
          return (0, Vu.jsxs)("button", {
            ref: uu => {
              Qu.current[Ku] = uu
            },
            type: "button",
            className: xR()("WorldSocialTile", {
              WorldSocialTileSelected: mu
            }),
            "aria-pressed": mu,
            tabIndex: mu ? 0 : -1,
            onKeyDown: uu => {
              ((uu, Ru) => {
                const yu = "ArrowRight" === uu.key || "ArrowDown" === uu.key ? 1 : "ArrowLeft" === uu.key || "ArrowUp" === uu.key ? -1 : 0;
                var Eu;
                0 !== yu && (uu.preventDefault(), null === (Eu = Qu.current[(Ru + yu + pR.length) % pR.length]) || void 0 === Eu || Eu.focus())
              })(uu, Ku)
            },
            onClick: () => {
              yu(uu)
            },
            children: [(0, Vu.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Vu.jsx)(Tu.c, {
                name: SR[uu]
              })
            }), (0, Vu.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Vu.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Eu(`worldSocial:${uu}`)
              }), (0, Vu.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Eu(`worldSocial:${uu}Description`)
              })]
            })]
          }, uu)
        }))
      })
    }
    var WR = yu(595),
      jR = yu(2502),
      HR = yu(2457),
      dR = yu(4139);

    function bR(uu, Ru) {
      var yu;
      return {
        isError: !1,
        name: uu,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== Ru && void 0 !== Ru ? Ru : {},
        nameColour: null !== (yu = null === Ru || void 0 === Ru ? void 0 : Ru.nameColour) && void 0 !== yu ? yu : WR.b,
        location: {
          status: "offline"
        }
      }
    }

    function CR(uu) {
      let {
        player: Ru,
        isFriend: yu = !1,
        status: Eu,
        showLocation: Ku = void 0 === Eu,
        sr: Qu,
        onSendFriendRequest: mu,
        actions: Ju,
        zIndex: Nu
      } = uu;
      const {
        t: Xu
      } = (0, qu.E)();
      let ru, Bu = Eu;
      return null !== Qu && void 0 !== Qu && Qu.on && (Bu = (0, Vu.jsxs)(Vu.Fragment, {
        children: [null !== Eu && void 0 !== Eu ? Eu : (0, Vu.jsx)(HR.d, {
          socialPreview: Ru
        }), (0, Vu.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Xu("worldSocial:canJoin")]
        })]
      })), (Ju || Qu) && (ru = (0, Vu.jsxs)(Vu.Fragment, {
        children: [Ju, Qu && (0, Vu.jsx)("label", {
          className: "WorldSocialTick",
          children: (0, Vu.jsx)(dR.b, {
            checked: Qu.on,
            disabled: !1,
            ariaLabel: Xu("worldSocial:letJoin", {
              playerName: Ru.name
            }),
            onChange: uu => {
              Qu.onChange(uu.target.checked)
            }
          })
        })]
      })), (0, Vu.jsx)(jR.f, {
        playerSocialPreview: Ru,
        isFriend: yu,
        hideFriendBadge: !0,
        onFriendRemoved: yu ? uu => {
          Ou.c.removeFriendFromState(uu)
        } : void 0,
        status: Bu,
        showLocation: Ku,
        onSendFriendRequest: mu,
        opensProfileCard: !1,
        zIndex: Nu,
        children: ru
      })
    }

    function kR(uu) {
      let {
        row: Ru,
        sr: yu,
        canInvite: Eu,
        invited: Ku,
        onInvite: Qu,
        zIndex: mu
      } = uu;
      const {
        t: Ju
      } = (0, qu.E)(), Nu = "online" === Ru.place ? xu.e : xu.f;
      return (0, Vu.jsx)(CR, {
        player: Ru.friend,
        isFriend: !0,
        status: "here" === Ru.place ? Ju("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        sr: yu,
        zIndex: mu,
        actions: Eu && (0, Vu.jsx)(Nu, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Ku,
          onClick: Qu,
          ariaLabel: `${Ju("worldSocial:invite")} ${Ru.friend.name}`,
          children: Ju(Ku ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
    var eR = yu(2575);

    function AR(uu) {
      let {
        playersHere: Ru,
        exclude: yu,
        UH: Eu
      } = uu;
      const {
        t: Qu
      } = (0, qu.E)(), mu = (0, eR.k)(eR.h), [Ju, Nu] = (0, Ku.useState)([]), Xu = [], ru = (uu, Ru) => {
        const Eu = [...yu, ...Xu.map((uu => uu.player.name))];
        Xu.length < 3 && !JR(Eu, uu.name) && Xu.push({
          player: uu,
          status: Ru
        })
      };
      for (const Ku of Ru) ru(bR(Ku.name, Ku.cosmetics, Ku.ranks), Qu("worldSocial:inThisWorld"));
      if ("loaded" === mu.state.status)
        for (const Ku of mu.state.recentPlayers) Ku.preview.name && !Ku.preview.isError && ru({
          ...Ku.preview,
          location: {
            status: "offline"
          }
        }, Qu("worldSocial:playedWithYou"));
      const Bu = uu => {
        Nu((Ru => [...Ru, uu])), Eu(uu).finally((() => {
          Nu((Ru => Ru.filter((Ru => Ru !== uu))))
        }))
      };
      return (0, Vu.jsx)(Vu.Fragment, {
        children: Xu.map(((uu, Ru) => {
          let {
            player: yu,
            status: Eu
          } = uu;
          return (0, Vu.jsx)(CR, {
            zIndex: Xu.length - Ru,
            player: yu,
            status: Eu,
            onSendFriendRequest: () => {
              Bu(yu.name)
            },
            actions: (0, Vu.jsx)(Yu.i, {
              tooltipInner: (0, Vu.jsx)(Vu.Fragment, {
                children: Qu("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, Vu.jsx)(xu.e, {
                className: "FriendRequestButton",
                disabled: Ju.includes(yu.name),
                ariaLabel: `${Qu("recentPlayers:addFriend")} ${yu.name}`,
                onClick: () => {
                  Bu(yu.name)
                },
                children: (0, Vu.jsx)(Tu.c, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${yu.name}`)
        }))
      })
    }
    var DR = yu(1617);

    function MR(uu) {
      let {
        UH: Ru
      } = uu;
      const {
        t: yu
      } = (0, qu.E)(), Eu = (0, Ku.useRef)(null), [Qu, mu] = (0, Ku.useState)(""), [Ju, Nu] = (0, Ku.useState)(!1), Xu = () => {
        const uu = Qu.trim();
        "" === uu || Ju || (Nu(!0), Ru(uu).then((uu => {
          uu && Eu.current && (Eu.current.value = "", mu(""))
        })).finally((() => {
          Nu(!1)
        })))
      };
      return (0, Vu.jsxs)("div", {
        className: "WorldSocialAddFriend",
        onKeyDown: uu => {
          uu.target === Eu.current && "Escape" !== uu.key && uu.stopPropagation()
        },
        children: [(0, Vu.jsx)(DR.b, {
          className: "WorldSocialAddFriendInput",
          domRef: Eu,
          maxLength: 32,
          placeholderText: yu("worldSocial:addFriendPlaceholder"),
          ariaLabel: yu("worldSocial:addFriendPlaceholder"),
          stopPropagation: !1,
          onValueChange: uu => {
            mu(uu)
          },
          onEnter: Xu
        }), (0, Vu.jsxs)(xu.e, {
          className: "WorldSocialAddFriendButton SmallTextLight",
          disabled: Ju || "" === Qu.trim(),
          onClick: Xu,
          children: [(0, Vu.jsx)(Tu.c, {
            name: "user-plus"
          }), " ", yu("socialBar:sendRequest")]
        })]
      })
    }
    const IR = new Map;

    function GR(uu) {
      const Ru = IR.get(uu);
      if (!Ru) return [];
      const yu = Date.now();
      for (const [Eu, Ku] of Ru) yu - Ku >= Pu.s && Ru.delete(Eu);
      return [...Ru.keys()]
    }
    var UR = yu(1199),
      nR = yu(1442),
      sR = yu(4405),
      tR = yu(312),
      lR = yu(4387);
    const gR = ["auto", "auto_existing"];

    function cR(uu) {
      return gR.includes(uu)
    }

    function LR(uu, Ru) {
      const yu = (0, UR.rb)(uu);
      return null !== Ru && (0, UR.rb)(Ru) === yu || (0, lR.d)().some((uu => (0, UR.rb)(uu.name) === yu))
    }
    const zR = new Set;

    function FR(uu) {
      return `worldSocialSeen:${uu}`
    }

    function wR(uu) {
      return !uu || zR.has(uu) || !0 === su.i.getItem(FR(uu))
    }

    function ZR(uu) {
      uu && !zR.has(uu) && (zR.add(uu), su.i.setItem(FR(uu), !0))
    }

    function hR(uu) {
      let {
        show: Ru,
        onClose: yu,
        opener: Eu
      } = uu;
      const {
        lobbyName: Qu,
        shownLobbyName: Ju
      } = (0, Du.i)("connectedGame");
      return (0, Ku.useEffect)((() => {
        Ru && (0, yR.reportAnalyticsClick)({
          id: "world_social.open",
          value: Eu
        })
      }), [Ru]), (0, Vu.jsx)(mu.e, {
        show: Ru && null !== Qu,
        close: yu,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== Eu,
        children: Ru && null !== Qu && (0, Vu.jsx)(PR, {
          lobbyName: Qu,
          worldCode: null !== Ju && void 0 !== Ju ? Ju : Qu,
          onClose: yu
        }, Qu)
      })
    }

    function PR(uu) {
      var Ru;
      let {
        lobbyName: yu,
        worldCode: Eu,
        onClose: Qu
      } = uu;
      const {
        t: mu
      } = (0, qu.E)(), Ju = (0, Ku.useRef)(null), {
        settings: Nu,
        loading: Xu,
        answered: ru,
        change: Bu,
        retry: Su
      } = mR(yu), pu = (0, Ou.j)(), Wu = (0, Du.i)("players"), ju = (0, Du.i)("hiddenPlayerNames"), [Hu, du] = (0, Ku.useState)([]), [bu, ku] = (0, Ku.useState)([]), [eu, Au] = (0, Ku.useState)(!1), Iu = (0, Ku.useMemo)((() => {
        var uu, Ru;
        const yu = null === Wu.localId ? null : null !== (uu = null === (Ru = Wu.byId[Wu.localId]) || void 0 === Ru ? void 0 : Ru.name) && void 0 !== uu ? uu : null;
        return Wu.ids.flatMap((uu => {
          const Ru = Wu.byId[uu];
          return null !== Ru && void 0 !== Ru && Ru.name && Ru.name !== yu ? [{
            name: Ru.name,
            cosmetics: Ru.cosmetics,
            ranks: Ru.ranks
          }] : []
        }))
      }), [Wu]), Gu = (0, Ku.useMemo)((() => function(uu, Ru, yu) {
        const Eu = [],
          Ku = [],
          Qu = [];
        for (const mu of uu) !mu.isError && mu.name && ("inGame" === mu.location.status && mu.location.inLobbyName === Ru || JR(yu, mu.name) ? Ku.push({
          friend: mu,
          place: "here"
        }) : "offline" === mu.location.status ? Qu.push({
          friend: mu,
          place: "offline"
        }) : Eu.push({
          friend: mu,
          place: "online"
        }));
        return [...Eu, ...Ku, ...Qu]
      }(pu.friends, yu, Iu.map((uu => uu.name)))), [pu.friends, yu, Iu]), Uu = nu.featureFlags.canSeeRealPlayerNames ? Iu.filter((uu => null === (0, RR.b)(uu.name, ju))) : [], su = null !== Nu && void 0 !== Nu && Nu.canManage ? Nu : null, tu = null !== su, lu = null !== (Ru = null === Nu || void 0 === Nu ? void 0 : Nu.visibility) && void 0 !== Ru ? Ru : null, gu = "whitelist" === (null === su || void 0 === su ? void 0 : su.visibility), cu = "private" === lu || "whitelist" === lu && !tu, {
        userContext: Lu
      } = (0, Cu.d)();
      (0, Ku.useEffect)((() => {
        tu && LR(yu, Lu.getPersonalWorldLobbyName()) && ZR(Lu.whamm)
      }), [tu, yu, Lu]);
      const zu = cu ? mu("whitelist" === lu ? "socialBar:inviteWorldManagersOnly" : tu ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        Fu = null === zu;
      (0, Ku.useEffect)((() => cu ? void 0 : fu.i.quietFriendAdded()), [cu]), (0, Ku.useEffect)((() => fu.i.quietFriendRequests()), []);
      const Zu = (0, Ku.useRef)(!1);
      (0, Ku.useEffect)((() => {
        const uu = Ju.current,
          Ru = !Zu.current;
        Zu.current = !0;
        const yu = null === document.activeElement || document.activeElement === document.body;
        null !== uu && void 0 !== uu && uu.contains(document.activeElement) || !Ru && !yu || (0, wu.e)() || null === uu || void 0 === uu || uu.focus({
          preventScroll: !0
        })
      }), [Fu]), (0, Ku.useEffect)((() => {
        const uu = uu => {
          "Escape" !== uu.key || null !== document.activeElement && document.activeElement !== document.body || Qu()
        };
        return document.addEventListener("keydown", uu), () => {
          document.removeEventListener("keydown", uu)
        }
      }), [Qu]);
      const ER = null === Nu && !ru,
        KR = (Xu || pu.loading) && 0 === pu.friends.length,
        QR = pu.friends.flatMap((uu => uu.name ? [uu.name] : [])),
        VR = Hu.filter((uu => !JR(QR, uu))),
        BR = Gu.length + 3,
        xR = VR.length + BR,
        SR = eu ? pu.requests : pu.requests.slice(0, 1),
        pR = async function(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const yu of function(uu, Ru) {
              const yu = [];
              for (let Eu = 0; Eu < uu.length; Eu += Ru) yu.push(uu.slice(Eu, Eu + Ru));
              return yu
            }(uu, hu.C)) {
            if (!await Bu({
                whitelistAdd: yu
              }, (uu => XR(uu, yu, !0)), {
                quiet: Ru
              })) return !1
          }
          return !0
        }, WR = async uu => {
          if (uu === lu) return;
          (0, yR.reportAnalyticsClick)({
            id: "world_social.set_mode",
            value: uu
          });
          const Ru = [...GR(yu), ...bu],
            Eu = "whitelist" === uu && Nu ? function(uu, Ru, yu) {
              const Eu = [],
                Ku = uu.flatMap((uu => "here" === uu.place ? [uu.friend.name] : []));
              for (const Qu of [...Ku, ...Ru]) JR(Eu, Qu) || JR(yu, Qu) || Eu.push(Qu);
              return Eu
            }(Gu, Ru, Nu.whitelist) : [];
          await Bu({
            setVisibility: uu
          }, (Ru => ({
            ...Ru,
            visibility: uu
          }))) && await pR(Eu)
        }, jR = uu => {
          if (gu && su) return {
            on: JR(su.whitelist, uu),
            onChange: Ru => {
              (0, yR.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: Ru ? "on" : "off"
              }), Bu(Ru ? {
                whitelistAdd: [uu]
              } : {
                whitelistRemove: uu
              }, (yu => XR(yu, [uu], Ru)))
            }
          }
        }, HR = async uu => {
          (0, yR.reportAnalyticsClick)({
            id: "world_social.invite",
            value: "friend"
          });
          const Ru = () => {
            ku((Ru => Ru.filter((Ru => Ru !== uu))))
          };
          ku((Ru => [...Ru, uu]));
          const Eu = function(uu, Ru) {
            return null === uu || void 0 === uu || !uu.canManage || JR(uu.whitelist, Ru) ? "none" : "whitelist" === uu.visibility ? "required" : "quiet"
          }(Nu, uu);
          if ("none" !== Eu) {
            const yu = pR([uu], "quiet" === Eu);
            if ("required" === Eu && !await yu) return void Ru()
          }
          await (0, vu.i)(uu, "game", {
            announceSent: !1,
            source: "world_social"
          }) ? (! function(uu, Ru) {
            var yu;
            const Eu = null !== (yu = IR.get(uu)) && void 0 !== yu ? yu : new Map;
            Eu.set(Ru, Date.now()), IR.set(uu, Eu)
          }(yu, uu), setTimeout(Ru, Pu.t)) : Ru()
        }, dR = async (uu, Ru) => {
          (0, yR.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: Ru
          });
          const yu = await (0, au.g)(uu, "world_social");
          return (0, au.b)(yu, uu, {
            announceSent: !1
          }), "failed" !== yu.kind && ("sent" === yu.kind && du((Ru => JR(Ru, uu) ? Ru : [...Ru, uu])), gu && await pR([uu]), !0)
        };
      return (0, Vu.jsxs)("div", {
        ref: Ju,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: uu => {
          uu.target === uu.currentTarget && " " === uu.key && uu.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, Vu.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, Vu.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: mu("worldSocial:title")
          }), (0, Vu.jsx)(xu.h, {
            className: "WorldSocialClose",
            onClick: Qu
          })]
        }), ER && (0, Vu.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, Vu.jsx)(Mu.b, {})
        }), !ER && (0, Vu.jsxs)(Vu.Fragment, {
          children: [(0, Vu.jsx)(rR, {
            worldCode: Eu,
            message: zu
          }), null === Nu && !Xu && (0, Vu.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: Su,
            children: mu("worldSocial:loadFailed")
          }), tu && null !== lu && (0, Vu.jsx)(TR, {
            visibility: lu,
            onPick: uu => {
              WR(uu)
            }
          }), pu.requests.length > 0 && (0, Vu.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Vu.jsx)(ou.b, {
              label: (0, Vu.jsxs)(Vu.Fragment, {
                children: [(0, Vu.jsx)(Tu.c, {
                  name: uR.f
                }), " ", mu("socialBar:requests")]
              }),
              meta: (0, Vu.jsxs)(Vu.Fragment, {
                children: [pu.requests.length, pu.requests.length === iu.n && (0, Vu.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: mu("socialBar:limitReached")
                }), !eu && pu.requests.length > 1 && (0, Vu.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    Au(!0)
                  },
                  children: mu("worldSocial:moreRequests", {
                    count: pu.requests.length - 1
                  })
                })]
              })
            }), (0, Vu.jsx)("div", {
              className: "PlayerRows",
              children: SR.map(((uu, Ru) => (0, Vu.jsx)(CR, {
                zIndex: SR.length - Ru,
                player: uu,
                actions: (0, Vu.jsxs)(Vu.Fragment, {
                  children: [(0, Vu.jsx)(Yu.i, {
                    tooltipInner: (0, Vu.jsx)(Vu.Fragment, {
                      children: mu("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Vu.jsx)(xu.e, {
                      className: "FriendRequestButton",
                      ariaLabel: `${mu("general:accept")} ${uu.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, au.d)(uu.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, Vu.jsx)(Tu.c, {
                        name: "check"
                      })
                    })
                  }), (0, Vu.jsx)(Yu.i, {
                    tooltipInner: (0, Vu.jsx)(Vu.Fragment, {
                      children: mu("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Vu.jsx)(xu.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${mu("general:decline")} ${uu.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, au.d)(uu.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, Vu.jsx)(Tu.c, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${uu.name}`)))
            })]
          }), (0, Vu.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Vu.jsx)(ou.b, {
              label: (0, Vu.jsxs)(Vu.Fragment, {
                children: [(0, Vu.jsx)(Tu.c, {
                  name: uR.e
                }), " ", mu("socialBar:friends")]
              }),
              meta: pu.loaded && !cu ? pu.friends.length : void 0
            }), (0, Vu.jsx)(MR, {
              UH: uu => dR(uu, "field")
            }), KR && (0, Vu.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, Vu.jsx)(Mu.b, {})
            }), !KR && (0, Vu.jsxs)(Vu.Fragment, {
              children: [(0, Vu.jsxs)("div", {
                className: "PlayerRows",
                children: [VR.map(((uu, Ru) => (0, Vu.jsx)(CR, {
                  zIndex: xR - Ru,
                  player: bR(uu, null),
                  status: mu("worldSocial:requestSent"),
                  sr: jR(uu)
                }, `request:${uu}`))), !cu && Gu.map(((uu, Ru) => (0, Vu.jsx)(kR, {
                  zIndex: BR - Ru,
                  row: uu,
                  sr: jR(uu.friend.name),
                  canInvite: NR(Nu) && "here" !== uu.place,
                  invited: bu.includes(uu.friend.name),
                  onInvite: () => {
                    HR(uu.friend.name)
                  }
                }, uu.friend.name))), pu.loaded && 0 === pu.friends.length && (0, Vu.jsx)(AR, {
                  playersHere: Uu,
                  exclude: Hu,
                  UH: uu => dR(uu, "suggestion")
                })]
              }), gu && pu.loaded && 0 === pu.friends.length && 0 === VR.length && (0, Vu.jsx)("div", {
                className: "WorldSocialEmpty",
                children: mu("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        })]
      })
    }
    var iR = yu(2358),
      YR = yu(2337);

    function oR(uu) {
      let {
        show: Ru,
        onClose: yu,
        option: Eu
      } = uu;
      const Qu = (0, Du.h)("connectedGame", (uu => (0, iR.b)(uu) ? uu.lobbyName : null));
      return function(uu) {
        const {
          gameEntrySource: Ru,
          loadingOverlayVisible: yu
        } = (0, zu.j)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: Eu
        } = (0, Cu.d)(), Qu = (0, Du.i)("localPlayerAlive"), mu = (0, Du.h)("players", (uu => null !== uu.localId && void 0 !== uu.byId[uu.localId])), Ju = (0, YR.k)(), Nu = (0, Ku.useRef)(null), Xu = (0, Ku.useRef)(null), Vu = "worldCreation" === Ru, ru = Eu.whamm, Bu = Eu.getPersonalWorldLobbyName();
        (0, Ku.useEffect)((() => {
          var Ru;
          null !== uu && (null === (Ru = Xu.current) || void 0 === Ru ? void 0 : Ru.lobbyName) !== uu && null !== aR(uu, Vu, ru, Bu) && (Xu.current = KR(uu))
        }), [Vu, uu, ru, Bu]), (0, Ku.useEffect)((() => {
          if (null !== uu && (!yu && Qu && mu)) return Ju.whenShown((() => {
            var Ru;
            const yu = Nu.current === uu ? null : aR(uu, Vu, ru, Bu);
            if (null === yu) return;
            const Eu = (null === (Ru = Xu.current) || void 0 === Ru ? void 0 : Ru.lobbyName) === uu ? Xu.current : KR(uu);
            Xu.current = null, Nu.current = uu,
              function(uu, Ru, yu, Eu) {
                const {
                  lobbyName: Ku
                } = uu, Qu = () => {
                  ! function(uu, Ru) {
                    if (!Ey()) return void Ru(!0);
                    const yu = performance.now() + Ry;
                    let Eu = 0;
                    const Ku = () => {
                      Eu = Ey() ? 0 : Eu + 1, Eu >= 2 ? Ru(!0) : !yy(uu) || performance.now() > yu ? Ru(!1) : setTimeout(Ku, uy)
                    };
                    setTimeout(Ku, uy)
                  }(Ku, (Qu => {
                    Eu();
                    const mu = "auto_existing" === Ru && wR(yu);
                    Qu && yy(Ku) && !OR(Ku) && !mu && (fR(uu) ? vR(Ku) : (vR(Ku), ZR(yu), function(uu) {
                      const Ru = tR.c.world_social_popup_v1;
                      return (0, tR.n)("world_social_popup_v1"), (0, yR.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${Ru}:${(0,sR.b)()}:${uu}`
                      }), (0, nR.flushClientAnalyticsEvents)(), "auto_open" === Ru
                    }(Ru) && (! function(uu) {
                      QR.set(uu.lobbyName, uu)
                    }(uu), Su.k.Op("toggleMenu", `inviteLink|${Ru}`), "inviteLink" !== zu.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === Ru && !fR(uu)) return void Qu();
                uu.response.then((uu => {
                  if (!("error" in uu)) return uu.settings.canManage ? void Qu() : (vR(Ku), void Eu());
                  Eu()
                }))
              }(Eu, yu, ru, (() => {
                Nu.current === uu && (Nu.current = null)
              }))
          }))
        }), [Ju, Vu, yu, uu, Qu, mu, ru, Bu])
      }(Qu), (0, Ku.useEffect)((() => {
        Ru && null !== Qu && vR(Qu)
      }), [Ru, Qu]), null !== Qu ? (0, Vu.jsx)(hR, {
        show: Ru,
        onClose: yu,
        opener: cR(Eu) ? Eu : "icon"
      }) : (0, Vu.jsx)(Zu.b, {
        show: Ru,
        onClose: yu
      })
    }
    const qR = new Set;

    function OR(uu) {
      return qR.has(uu) || !!su.j.getItem(`worldSocialShown:${uu}`)
    }

    function vR(uu) {
      qR.add(uu), su.j.setItem(`worldSocialShown:${uu}`, !0)
    }

    function aR(uu, Ru, yu, Eu) {
      return OR(uu) ? null : function(uu) {
        let {
          justMade: Ru,
          playerId: yu,
          lobbyName: Eu,
          personalWorld: Ku
        } = uu;
        return Ru ? "auto" : !wR(yu) && LR(Eu, Ku) ? "auto_existing" : null
      }({
        justMade: Ru,
        playerId: yu,
        lobbyName: uu,
        personalWorld: Eu
      })
    }

    function fR(uu) {
      let {
        answer: Ru
      } = uu;
      return null !== Ru && "settings" in Ru && !Ru.settings.canManage
    }
    const uy = 500,
      Ry = 3e4;

    function yy(uu) {
      return "inGame" === zu.d.get("gameState") && Xu.gameBridge.latest("connectedGame").lobbyName === uu
    }

    function Ey() {
      return (0, wu.e)() || zu.d.get("loadingOverlayVisible") || (0, Fu.p)()
    }
    var Ky = yu(36541),
      Qy = yu(2943),
      my = yu(1915),
      Jy = yu(2936);

    function Ny(uu, Ru, yu) {
      return Jy.c.overridesTexture(uu) ? Jy.c.getTexture(uu, Ru).url : yu
    }
    var Xy = yu(9899);
    const Vy = (uu, Ru) => {
        (0, Ku.useEffect)((() => {
          setTimeout((() => {
            uu && uu.current && uu.current.focus()
          }), 1)
        }), [Ru])
      },
      ry = (0, Ku.memo)((function(uu) {
        let {
          isInputActive: Ru,
          onClose: yu,
          onChange: Eu,
          textAreaRef: Ku,
          fontSize: Qu,
          lineHeight: mu,
          currText: Ju
        } = uu;
        return (0, Vu.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, Vu.jsx)("img", {
            src: Ny("board_full", Qy.l.BLOCK, Xy),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, Vu.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: Ju,
            ref: Ku,
            style: {
              fontSize: `${Qu}rem`,
              lineHeight: `${mu}rem`
            },
            onKeyDown: uu => {
              var Ru;
              "Escape" !== uu.key && (uu.stopPropagation(), "Tab" === uu.key && function(uu) {
                uu.preventDefault();
                const Ru = uu.target,
                  {
                    value: yu
                  } = Ru;
                let Eu = Ru.selectionStart,
                  Ku = Ru.selectionEnd,
                  Qu = yu.slice(Eu, Ku);
                if (!Qu.includes("\n") && !uu.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; Eu > 0 && "\n" !== yu[Eu - 1];) Eu--;
                const mu = "\n" === yu[Ku - 1];
                mu && Ku--;
                Qu = yu.slice(Eu, Ku);
                const Ju = Qu.split("\n").map((Ru => uu.shiftKey ? Ru.replace(/^\t/, "") : "\t" + Ru)).join("\n");
                if (uu.shiftKey && yu.slice(Eu, Ku) === Ju) return;
                let {
                  selectionStart: Nu
                } = Ru;
                Ru.setSelectionRange(Eu, Ku), Nu > Eu && (!uu.shiftKey || "\t" === Qu[0]) && (Nu += uu.shiftKey ? -1 : 1);
                Ku = Eu + Ju.length + (mu ? 1 : 0), document.execCommand("insertText", !1, Ju), Ru.setSelectionRange(Nu, Ku)
              }(uu), /^F\d+$/i.test(uu.code) && null !== (Ru = my.x.OpenCodeEditor) && void 0 !== Ru && Ru.includes(uu.code) && yu())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: Eu
          })]
        })
      }));

    function By(uu) {
      return 1.3 * uu
    }
    var xy = yu(1621);
    const Sy = (0, Ku.memo)((function(uu) {
        let {
          show: Ru,
          onOpen: yu,
          onClose: Eu
        } = uu;
        const [Qu, Ju] = (0, Ku.useState)(null), [Nu, ru] = (0, Ku.useState)(""), [Bu, Su] = (0, Ku.useState)(0), [pu, Tu] = (0, Ku.useState)(null), [Wu, ju] = (0, Ku.useState)({
          text: "",
          textSize: 0
        }), Hu = (uu, Ru) => pu ? (0, Ky.r)(uu, Ru, pu.width, pu.height) : (0, Ky.g)(uu, Ru), du = uu => {
          ru(Hu(Nu, uu)), Su(uu), su.i.setItem("lastBoardTextSize", uu)
        }, bu = () => {
          Eu(), pu && Nu === Wu.text && Bu === Wu.textSize || Xu.gameBridge.send("writeOnBoard", {
            pos: Qu,
            text: Nu,
            textSize: Bu
          })
        };
        (0, Du.d)("boardEditRequested", (uu => {
          var Ku, Qu;
          if (!nu.featureFlags.canSeePlayerWrittenText) return;
          if (null === uu) return Ju(null), void(Ru && Eu());
          const {
            pos: mu,
            noticeboardSpan: Nu,
            text: Xu
          } = uu;
          Ju(mu), Tu(Nu), ru(Xu);
          const Vu = null !== (Ku = null !== (Qu = uu.textSize) && void 0 !== Qu ? Qu : su.i.getItem("lastBoardTextSize")) && void 0 !== Ku ? Ku : 0;
          Su(Vu), ju({
            text: Xu,
            textSize: Vu
          }), su.i.setItem("lastBoardTextSize", Vu), yu()
        }));
        const Cu = (0, Ku.useRef)(null);
        Vy(Cu, Ru), (0, xy.s)(Cu, {
          kind: "sign",
          submit: bu
        });
        const ku = function(uu, Ru) {
            const yu = Ky.c[uu];
            if (!Ru) return yu.uiFontSize;
            const {
              numLines: Eu,
              charsPerLine: Ku
            } = (0, Ky.A)(Ru.width, Ru.height, uu);
            return yu.uiFontSize * Math.min(yu.charsPerLine / Ku, yu.numLines / Eu)
          }(Bu, pu),
          eu = By(ku);
        return (0, Vu.jsxs)(mu.e, {
          className: "WriteOnBoardBg",
          close: bu,
          escDoesExit: !0,
          show: Ru,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Vu.jsx)(ry, {
            isInputActive: () => Ru,
            onClose: bu,
            onChange: uu => {
              ru(Hu(uu.target.value, Bu))
            },
            textAreaRef: Cu,
            fontSize: ku,
            lineHeight: eu,
            currText: Nu
          }), (0, Vu.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, Vu.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, Vu.jsx)(xu.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                du(0)
              },
              disabled: 0 === Bu,
              children: "Small"
            }), (0, Vu.jsx)(xu.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                du(1)
              },
              disabled: 1 === Bu,
              children: "Medium"
            }), (0, Vu.jsx)(xu.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                du(2)
              },
              disabled: 2 === Bu,
              children: "Large"
            })]
          })]
        })
      })),
      py = (0, Ku.memo)((function(uu) {
        let {
          show: Ru,
          onOpen: yu,
          onClose: Eu
        } = uu;
        const [Qu, Ju] = (0, Ku.useState)(""), Nu = () => {
          Eu(), Xu.gameBridge.send("writeNameTag", Qu)
        };
        (0, eu.e)("EditNameTag", (uu => {
          nu.featureFlags.canSeePlayerWrittenText && null !== uu && (Ju(uu), yu())
        }));
        const ru = (0, Ku.useRef)(null);
        Vy(ru, Ru), (0, xy.s)(ru, {
          kind: "nameTag",
          submit: Nu
        });
        const Bu = Ky.G.nameTag.uiFontSize,
          Su = By(Bu);
        return (0, Vu.jsxs)(mu.e, {
          className: "WriteOnBoardBg",
          close: Nu,
          escDoesExit: !0,
          show: Ru,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Vu.jsx)("div", {
            className: "NameTagTrim",
            children: (0, Vu.jsx)(ry, {
              isInputActive: () => Ru,
              onClose: Nu,
              onChange: uu => {
                const Ru = uu.target.value.replaceAll("\n", "");
                Ju((0, Ky.v)(Ru, "nameTag"))
              },
              textAreaRef: ru,
              fontSize: Bu,
              lineHeight: Su,
              currText: Qu
            })
          }), (0, Vu.jsx)(xu.e, {
            onClick: Nu,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var Ty = yu(18212);
    const Wy = (0, Ku.memo)((function(uu) {
      let {
        show: Ru,
        onOpen: yu,
        onClose: Eu
      } = uu;
      const [Qu, Ju] = (0, Ku.useState)(""), [Nu, ru] = (0, Ku.useState)(0), [Bu, Su] = (0, Ku.useState)(!1), [pu, Tu] = (0, Ku.useState)(["", "", "", "", "", "", "", "", "", ""]), [Wu, ju] = (0, Ku.useState)("Title"), [Hu, du] = (0, Ku.useState)(!0), [bu, Cu] = (0, Ku.useState)(!1);
      (0, eu.e)("EditBook", (uu => {
        let {
          pages: Ru,
          title: Eu,
          isPublished: Ku
        } = uu;
        var Qu;
        nu.featureFlags.canSeePlayerWrittenText && (null !== Ru ? (Tu(Ru), Ju(null !== (Qu = Ru[0]) && void 0 !== Qu ? Qu : ""), ju(Eu), ru(0), Su(!1), du(!Ku), Cu(!1), yu()) : Tu(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const ku = (0, Ku.useRef)(null),
        Au = (0, Ku.useRef)(null);
      Vy(ku, Ru), (0, xy.s)(ku, {
        kind: "book"
      }), (0, xy.s)(Au, {
        kind: "pJ"
      });
      const Du = Ky.G.book.uiFontSize,
        Mu = By(Du),
        Iu = () => {
          (Hu || bu) && Xu.gameBridge.send("writeBook", {
            pages: [...pu],
            title: Wu,
            published: !Hu && bu
          })
        },
        Gu = uu => {
          Bu && (pu[Nu] = Qu, Su(!1)), Ju(pu[uu]), ru(uu)
        };
      return (0, Vu.jsxs)(mu.e, {
        className: "WriteOnBoardBg",
        close: () => {
          Eu(), pu[Nu] = Qu, Iu()
        },
        escDoesExit: !0,
        show: Ru,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, Vu.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, Vu.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: Wu,
            ref: Au,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${Mu}rem`
            },
            onKeyDown: uu => {
              Hu && uu.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: uu => {
              let Ru = uu.target.value;
              Ru = (0, Ky.v)(Ru, "pJ"), ju(Ru)
            },
            readOnly: !Hu
          }), (0, Vu.jsx)("img", {
            src: Ny("book_page", Qy.l.ITEM, Ty),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, Vu.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, Vu.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: Qu,
              ref: ku,
              style: {
                fontSize: `${Du}rem`,
                lineHeight: `${Mu}rem`
              },
              onKeyDown: uu => {
                Hu && uu.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: uu => {
                const Ru = uu.target.value;
                Ju((0, Ky.v)(Ru, "book")), Su(!0)
              },
              readOnly: !Hu
            })
          })]
        }), (0, Vu.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, Vu.jsx)(xu.e, {
            disabled: 0 === Nu,
            onClick: () => {
              Gu(Nu - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, Vu.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Vu.jsx)(xu.e, {
            disabled: 9 === Nu,
            onClick: () => {
              Gu(Nu + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, Vu.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Vu.jsx)(xu.e, {
            onClick: () => {
              du(!Hu), Cu(!0)
            },
            className: "BookNavButton",
            children: Hu ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var jy = yu(36449),
      Hy = yu(8423),
      dy = yu(1354),
      by = yu(1841);

    function Cy(uu) {
      let {
        show: Ru,
        buttons: yu
      } = uu;
      const {
        t: Eu
      } = (0, qu.E)(), Qu = (0, Ku.useRef)(null);
      return (0, Ku.useEffect)((() => {
        var uu, yu;
        const Eu = Ru ? (0, jy.w)() : null;
        if (!Eu || !(0, dy.g)()) return;
        const Ku = (0, jy.k)().findIndex((uu => uu.id === Eu));
        (0, Hy.r)(null !== (uu = null === (yu = Qu.current) || void 0 === yu ? void 0 : yu.children[Ku]) && void 0 !== uu ? uu : null)
      }), [Ru]), 0 === yu.length ? null : (0, Vu.jsx)("div", {
        ref: Qu,
        className: "ClientGameInventoryButtons",
        onPointerDown: uu => {
          uu.stopPropagation()
        },
        onPointerUp: uu => {
          uu.stopPropagation()
        },
        children: yu.map((uu => {
          const Ru = Eu(uu.labelKey);
          return (0, Vu.jsxs)(xu.l, {
            className: uu.className,
            disabled: uu.disabled,
            onClick: () => {
              (0, jy.q)(uu)
            },
            ariaLabel: uu.iconOnly ? Ru : void 0,
            title: uu.iconOnly ? Ru : void 0,
            children: [uu.icon && (0, Vu.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === uu.icon.kind && (0, Vu.jsx)(by.c, {
                itemName: uu.icon.name,
                amount: 0
              }), "image" === uu.icon.kind && (0, Vu.jsx)("img", {
                src: uu.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === uu.icon.kind && (0, Vu.jsx)(Tu.c, {
                name: uu.icon.name
              })]
            }), !uu.iconOnly && Ru]
          }, uu.id)
        }))
      })
    }
    var ky = yu(36545),
      ey = yu(2608),
      Ay = yu(9072),
      Dy = yu(36369),
      My = yu(36364);
    let Iy = null;
    window.setShowInventoryAdsOverride = uu => {
      Iy = uu
    };
    const Gy = 24e4;
    var Uy = yu(1848);

    function ny(uu) {
      var Ru;
      let {
        draggedInfo: {
          name: yu,
          attributes: Eu,
          amount: Ku
        },
        toAddRef: Qu
      } = uu;
      return (0, Vu.jsx)("div", {
        className: "DraggedInvenItem",
        ref: Qu,
        children: (0, Vu.jsx)(by.c, {
          itemName: yu,
          amount: Ku,
          enchantmentTier: null === Eu || void 0 === Eu || null === (Ru = Eu.customAttributes) || void 0 === Ru ? void 0 : Ru.enchantmentTier,
          bar: (0, Uy.h)(Eu)
        })
      })
    }

    function sy(uu) {
      let {
        className: Ru = "",
        displayInfo: yu,
        domRef: Eu
      } = uu;
      return (0, Vu.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${Ru}`,
        ref: Eu,
        children: [(0, Vu.jsx)(ku.d, {
          text: (0, Au.xb)(yu.name, {
            fontStyle: yu.fontStyle
          })
        }), (0, Vu.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, Vu.jsx)(ku.d, {
            text: yu.desc
          })
        })]
      })
    }

    function ty(uu) {
      let {
        info: Ru,
        draggedInfo: yu
      } = uu;
      const Eu = (0, Ku.useRef)(null);
      return (0, Ku.useLayoutEffect)((() => {
        const uu = Eu.current,
          {
            left: yu,
            top: Ku
          } = function(uu, Ru, yu, Eu) {
            const Ku = Eu.left * yu.width / 100 + 4,
              Qu = yu.width - Eu.right * yu.width / 100 - 4 - Ru.width,
              mu = Eu.top * yu.height / 100 + 4,
              Ju = yu.height - 4 - Ru.height;
            return {
              left: Math.max(Ku, Math.min(uu.x - Ru.width / 2, Qu)),
              top: Math.max(mu, Math.min(uu.y - 48 - Ru.height, Ju))
            }
          }({
            x: Ru.initTouchX,
            y: Ru.initTouchY
          }, {
            width: uu.offsetWidth,
            height: uu.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, zu.d.get("notchSize"));
        uu.style.left = `${yu}px`, uu.style.top = `${Ku}px`
      }), [Ru]), (0, Vu.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: Eu,
        children: [(0, Vu.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: yu.amount / Ru.maxAmount * 100 + "%"
          }
        }), (0, Vu.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [yu.amount, "/", Ru.maxAmount]
        })]
      })
    }
    var ly = yu(212);
    const gy = (0, Ku.memo)((function(uu) {
      let {
        show: Ru,
        onOpen: yu,
        onClose: Eu
      } = uu;
      const Qu = (0, Ku.useRef)({
          pos: null
        }),
        [Ju, Nu] = (0, Ku.useState)([0, 0, 0, 0]),
        {
          userContext: ru
        } = (0, Cu.d)();
      (0, Du.d)("ironChestOpenRequested", (uu => {
        let {
          pos: Ru,
          ownerDbId: Eu,
          cachedPasskey: Ku
        } = uu;
        if (Qu.current.pos = Ru, Eu !== ru.whamm) return null !== Ku ? (Nu(Ku), void Bu(Ku)) : void yu();
        Bu(Ju)
      })), (0, Du.d)("localEffectUpdated", (uu => {
        "Thief" === uu && Eu()
      }));
      const Bu = uu => {
        const {
          pos: Ru
        } = Qu.current;
        Xu.gameBridge.send("openIronChest", {
          pos: Ru,
          SX: uu
        })
      };
      return (0, Vu.jsx)(mu.e, {
        className: "IronChestPasskeyInputScreenOuter",
        close: Eu,
        escDoesExit: !0,
        show: Ru,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, Vu.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, Vu.jsx)(cy, {
            SX: Ju,
            onPasskeyUpdated: Nu,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              Bu(Ju)
            }
          })
        })
      })
    }));

    function cy(uu) {
      let {
        className: Ru = "",
        SX: yu,
        onPasskeyUpdated: Eu,
        confirmText: Ku,
        onConfirm: Qu
      } = uu;
      const {
        t: mu
      } = (0, qu.E)();
      return (0, Vu.jsxs)("div", {
        className: `${Ru} IronChestPasskeyInput`,
        children: [(0, Vu.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: mu("ironChest:passkeyInputTitle")
        }), (0, Vu.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(ly.f.ironChestPasskeyLength).fill(0).map(((uu, Ru) => (0, Vu.jsx)(Ly, {
            digit: yu[Ru],
            onPasskeyDigitUpdated: uu => {
              const Ku = [...yu];
              Ku[Ru] = uu, Eu(Ku)
            }
          }, Ru)))
        }), (0, Vu.jsx)(xu.l, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: Qu,
          children: mu(Ku)
        })]
      })
    }

    function Ly(uu) {
      let {
        digit: Ru,
        onPasskeyDigitUpdated: yu
      } = uu;
      return (0, Vu.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, Vu.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, Vu.jsx)(xu.l, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              yu(Au.c.mod(Ru + 1, 10))
            },
            children: (0, Vu.jsx)(Tu.c, {
              name: "angle-up"
            })
          }), (0, Vu.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: Ru
          }), (0, Vu.jsx)(xu.l, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              yu(Au.c.mod(Ru - 1, 10))
            },
            children: (0, Vu.jsx)(Tu.c, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var zy = yu(9064),
      Fy = yu(36577),
      wy = yu(36361);

    function Zy(uu) {
      let {
        specialItemInfo: Ru,
        setHovered: yu,
        pointerDown: Eu,
        pointerUp: Qu,
        enchantingTablePosition: mu,
        enchantingTableBlockName: Ju
      } = uu;
      const {
        t: ru
      } = (0, qu.E)(), [Bu, Su] = (0, Ku.useState)(null), [pu, Tu] = (0, Ku.useState)(null), Wu = (0, Nu.g)("auraPerLevel"), ju = Math.floor((0, Du.i)("aura") / Wu);
      (0, Ku.useEffect)((() => {
        if (!Ru) return void Su(null);
        let uu = !0;
        return Xu.gameBridge.query("enchantingOffer", {
          slot: Ru.idx,
          name: Ru.name,
          blockName: Ju
        }).then((yu => {
          var Eu, Ku;
          let {
            perks: Qu,
            options: mu
          } = yu;
          if (!uu) return;
          const Ju = {
            isEnchantable: Qu.length > 0,
            possibleEnchantments: Qu,
            options: mu.map((uu => {
              let {
                level: Ru,
                odds: yu
              } = uu;
              return {
                level: Ru,
                possibilities: Object.fromEntries(yu.map(((uu, Ru) => [`Tier ${Ru+1}`, uu])))
              }
            })),
            isAlreadyEnchanted: Qu.length > 0 && void 0 !== (null === (Eu = Ru.attributes) || void 0 === Eu || null === (Ku = Eu.customAttributes) || void 0 === Ku ? void 0 : Ku.enchantmentTier)
          };
          Su(Ju), (uu => {
            const Ru = uu.options.map((uu => Object.entries(uu.possibilities).map((uu => {
              let [Ru, yu] = uu;
              return {
                str: `${Ru}: ${yu>0?yu<.01?yu.toPrecision(1):yu.toFixed(2):0}%\n`,
                style: {
                  color: Au.tb[Ru]
                }
              }
            }))));
            Tu(Ru)
          })(Ju)
        })), () => {
          uu = !1
        }
      }), [Ru, mu, Ju]);
      const Hu = [];
      for (let Ku = 0; Ku < Fy.d; Ku++) {
        const uu = null === Bu || void 0 === Bu ? void 0 : Bu.options[Ku],
          Eu = !uu || uu.level > ju;
        Hu.push((0, Vu.jsx)(xu.e, {
          className: "EnchantmentButton",
          onPointerEnter: uu ? uu => null === yu || void 0 === yu ? void 0 : yu()(!0, {
            name: "",
            desc: pu[Ku]
          }, uu) : void 0,
          onPointerLeave: uu ? () => null === yu || void 0 === yu ? void 0 : yu()(!1) : void 0,
          onClick: Eu ? void 0 : () => {
            Xu.gameBridge.send("enchantItem", {
              slot: Ru.idx,
              level: uu.level,
              tablePos: mu
            }), Su(null)
          },
          disabled: Eu,
          children: uu ? (0, Vu.jsxs)(Vu.Fragment, {
            children: [(0, Vu.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, Vu.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [ru("enchantments:cost"), ": "]
              }), " ", ru("enchantments:levels", {
                level: uu.level
              })]
            }), (0, Vu.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, Vu.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Vu.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: ru("enchantments:tier")
                }), Object.entries(uu.possibilities).map((uu => {
                  let [Ru, yu] = uu;
                  return 0 === yu ? null : (0, Vu.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: Au.tb[Ru]
                    },
                    children: Ru
                  }, Ru)
                }))]
              }), (0, Vu.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Vu.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: ru("enchantments:odds")
                }), Object.entries(uu.possibilities).map((uu => {
                  let [Ru, yu] = uu;
                  return 0 === yu ? null : (0, Vu.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: Au.tb[Ru]
                    },
                    children: [yu > 0 && yu < .1 ? "<0.1" : yu.toFixed(0 < yu && yu < .95 ? 1 : 0), "%"]
                  }, Ru)
                }))]
              })]
            })]
          }) : !1 === (null === Bu || void 0 === Bu ? void 0 : Bu.isEnchantable) ? (0, Vu.jsx)("h1", {
            className: "EnchantmentLevels",
            children: ru("enchantments:notEnchantable")
          }) : (0, Vu.jsx)("h1", {
            className: "EnchantmentLevels",
            children: ru("enchantments:enterItem")
          })
        }, Ku))
      }
      return (0, Vu.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, Vu.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Ju
        }), (0, Vu.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, Vu.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, Vu.jsx)(wy.c, {
              idx: My.h,
              setHovered: uu => {
                null === yu || void 0 === yu || yu(My.h)(uu)
              },
              pointerDown: Eu,
              pointerUp: Qu,
              draggedInfo: null,
              specialItemInfo: Ru,
              variation: "Enchanting Table"
            }), Bu && Bu.possibleEnchantments.length > 0 && (0, Vu.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, Vu.jsx)("h2", {
                children: "Possible Perks:"
              }), Bu.possibleEnchantments.map((uu => (0, Vu.jsxs)(Ku.Fragment, {
                children: [(0, Vu.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, Vu.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, Vu.jsx)(by.c, {
                      itemName: `${uu} Enchantment`,
                      amount: 1
                    })
                  }), (0, Vu.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: uu
                  })]
                }), (0, Vu.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: ru((0, zy.j)(uu).translationKey)
                })]
              }, uu)))]
            })]
          }), (0, Vu.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [Bu && Bu.isAlreadyEnchanted && (0, Vu.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: ru("enchantments:alreadyEnchanted")
            }), Hu]
          })]
        })]
      })
    }
    var hy = yu(36584);

    function Py(uu) {
      var Ru;
      let {
        specialItemInfo: yu,
        setSpecialItemInfo: Eu,
        setHovered: Qu,
        pointerDown: mu,
        pointerUp: Ju
      } = uu;
      const {
        t: Nu
      } = (0, qu.E)(), ru = (0, Du.h)("inventory", (uu => uu.freeSlots)), [Bu, Su] = (0, Ku.useState)(null);
      (0, Ku.useEffect)((() => {
        if (yu) {
          const uu = (0, hy.e)(yu.name, yu.amount);
          Su({
            salvageable: !!uu,
            produces: uu
          })
        } else Su(null)
      }), [yu, null === yu || void 0 === yu ? void 0 : yu.name, null === yu || void 0 === yu ? void 0 : yu.amount]);
      const pu = !!yu && !(null === Bu || void 0 === Bu || !Bu.salvageable) && !(null !== (Ru = Bu.produces) && void 0 !== Ru && Ru.some((uu => {
        let {
          amt: Ru
        } = uu;
        return Ru < 1
      })));
      return (0, Vu.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, Vu.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Nu("item:salvagingTable")
        }), (0, Vu.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, Vu.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, Vu.jsx)(wy.c, {
              idx: My.h,
              setHovered: uu => {
                null === Qu || void 0 === Qu || Qu(My.h)(uu)
              },
              pointerDown: mu,
              pointerUp: Ju,
              draggedInfo: null,
              specialItemInfo: yu,
              variation: "Salvaging Table"
            })
          }), (0, Vu.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, Vu.jsx)(xu.e, {
              className: "SalvageButton",
              onClick: pu ? () => {
                const {
                  idx: uu,
                  name: Ru,
                  amount: Ku
                } = yu;
                Xu.gameBridge.send("salvageItem", {
                  slot: uu,
                  name: Ru,
                  amount: Ku
                }) && (Su(null), Eu(null))
              } : void 0,
              disabled: !pu,
              children: Bu ? Bu.salvageable ? Bu.produces.some((uu => {
                let {
                  amt: Ru
                } = uu;
                return Ru < 1
              })) ? (0, Vu.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Vu.jsx)("div", {
                  className: "SalvageText Error",
                  children: Nu("salvagingTable:notEnoughResources")
                })
              }) : ru < Bu.produces.length ? (0, Vu.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Vu.jsx)("div", {
                  className: "SalvageText Error",
                  children: Nu("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, Vu.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, Vu.jsx)("div", {
                  className: "SalvageText",
                  children: Nu("salvagingTable:salvage")
                }), (0, Vu.jsx)("div", {
                  className: "SalvageIcons",
                  children: Bu.produces.map(((uu, Ru) => {
                    let {
                      item: yu,
                      amt: Eu
                    } = uu;
                    return (0, Vu.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, Vu.jsx)(by.c, {
                        itemName: yu,
                        amount: Math.floor(Eu)
                      })
                    }, Ru)
                  }))
                })]
              }) : (0, Vu.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Vu.jsx)("div", {
                  className: "SalvageText Error",
                  children: Nu("salvagingTable:unsalvageable")
                })
              }) : (0, Vu.jsx)(Vu.Fragment, {})
            })
          })]
        })]
      })
    }
    var iy = yu(228),
      Yy = yu(9158),
      oy = yu(2557),
      qy = yu(8434),
      Oy = yu(8425),
      vy = yu(1611),
      ay = yu(1927),
      fy = yu(1362),
      uE = yu(1992);

    function RE(uu, Ru, yu) {
      const Eu = uu.trim().toLowerCase();
      if ("" === Eu) return 0;
      let Ku = null;
      for (const Qu of Ru) {
        const uu = Qu.toLowerCase().indexOf(Eu);
        if (0 === uu) return 0;
        uu > 0 && (Ku = 1)
      }
      if (null !== Ku) return Ku;
      for (const Qu of yu)
        if (Qu.toLowerCase().includes(Eu)) return 2;
      return null
    }

    function yE(uu) {
      return uu.map((uu => {
        var Ru;
        return uu ? {
          name: uu.name,
          amount: null !== (Ru = uu.amount) && void 0 !== Ru ? Ru : 1
        } : null
      }))
    }

    function EE(uu) {
      return uu < 1e3 ? `${uu}` : uu < 1e4 ? Math.floor(uu / 100) / 10 + "k" : `${Math.floor(uu/1e3)}k`
    }
    var KE = yu(36590);
    const QE = xu.e,
      mE = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      JE = () => {
        const uu = (0, fy.f)();
        return uu ? uu.getPadRepeatTiming(mE) : mE
      };

    function NE(uu, Ru, yu) {
      var Eu, Ku;
      const Qu = (0, Ay.w)(Ru, uu);
      let mu = null === (Eu = Ru[uu]) || void 0 === Eu ? void 0 : Eu.description;
      if (yu && (null === (Ku = (0, KE.f)().get(uu)) || void 0 === Ku || !Ku.hideIngredients)) {
        mu ? (mu = (0, Au.xb)(mu), mu.push({
          str: "\n"
        })) : mu = [], mu.push({
          str: "\n"
        }), mu.push({
          str: "Can be crafted from:\n"
        });
        for (const uu of yu) "string" === typeof uu && (mu.push({
          icon: uu,
          style: {
            fontSize: "1.5em"
          }
        }), mu.push({
          str: " "
        }), mu.push(...(0, Au.xb)((0, Ay.w)(Ru, uu))), mu.push({
          str: "\n"
        }))
      }
      return {
        name: Qu,
        desc: mu
      }
    }

    function XE(uu) {
      let {
        name: Ru,
        KV: yu
      } = uu;
      return `${Ru}_${yu}`
    }

    function VE(uu) {
      var Ru;
      let {
        onClick: yu,
        itemName: Eu,
        recipeId: Qu,
        isSelected: mu,
        haveIngredients: Ju,
        craftable: Nu,
        setHovered: Xu,
        padActions: ru,
        marked: Bu,
        lock: xu,
        itemInfo: Su
      } = uu;
      const pu = (0, Ku.useRef)(null);
      return (0, qy.e)(pu, {
        press: uu => !Ju || "secondary" === uu && !Nu ? (ru.refuse(), !1) : "primary" === uu ? (ru.choose(), !0) : ru.craft(),
        release: ru.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, Vu.jsxs)("div", {
        ref: pu,
        className: xR()("InvenItem", {
          CraftableItemNotEnoughIngredients: !Ju && !xu,
          CraftableItemMarked: Bu,
          CraftableItemLocked: void 0 !== xu,
          CraftableItemLockedFar: (null !== (Ru = null === xu || void 0 === xu ? void 0 : xu.stepsAway) && void 0 !== Ru ? Ru : 1) > 1
        }),
        "data-recipe-key": Qu,
        "data-pad-inventory-default": mu ? "" : void 0,
        onClick: yu,
        style: {
          cursor: mu ? null : "pointer"
        },
        onPointerEnter: uu => {
          null === Xu || void 0 === Xu || Xu(!0, NE(Eu, Su)), !mu && (0, vy.j)(uu.nativeEvent) && (0, Oy.f)() && yu()
        },
        onPointerLeave: () => {
          null === Xu || void 0 === Xu || Xu(!1)
        },
        children: [(0, Vu.jsx)(by.c, {
          itemName: Eu,
          amount: 1
        }), Bu && (0, Vu.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), xu && (0, Vu.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, Vu.jsx)(Tu.c, {
            name: "lock"
          }), (0, Vu.jsx)(ku.d, {
            text: xu.tag
          })]
        })]
      })
    }

    function rE(uu) {
      let {
        idx: Ru,
        status: yu,
        shownItem: Eu,
        dim: Qu,
        onHoverStart: mu,
        onHoverEnd: Ju,
        onPadBack: Nu
      } = uu;
      const Xu = (0, Ku.useRef)(null);
      (0, qy.e)(Xu, {
        press: () => !1,
        back: Nu,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const ru = yu.need > 0 ? Math.min(yu.have / yu.need, 1) : 1;
      return (0, Vu.jsxs)("div", {
        ref: Xu,
        className: xR()("CupTile", {
          Short: yu.missing > 0
        }),
        style: {
          width: Qu,
          height: Qu
        },
        "data-craft-ingredient": Ru,
        onPointerEnter: mu,
        onPointerLeave: Ju,
        children: [(0, Vu.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${ru})`
          }
        }), (0, Vu.jsx)(by.c, {
          itemName: Eu,
          amount: 0
        }), (0, Vu.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [EE(yu.have), "/", EE(yu.need)]
        })]
      })
    }

    function BE(uu) {
      var Ru, yu, Eu, Qu, mu;
      let {
        show: Ju,
        recipeItem: {
          name: Nu,
          KV: ru,
          requires: Bu,
          produces: xu,
          haveIngredients: Su
        },
        detail: pu,
        onCraft: Tu,
        setHovered: Wu,
        craftButtonRef: ju,
        onPadBack: Hu,
        showPadShortcut: du,
        refusedCount: bu,
        lock: Cu,
        itemInfo: eu
      } = uu;
      const {
        t: Au
      } = (0, qu.E)(), Du = null !== pu && !pu.roomForOne, Mu = null !== (Ru = null === pu || void 0 === pu ? void 0 : pu.craftAllTimes) && void 0 !== Ru ? Ru : 0, Iu = function(uu, Ru) {
        return uu.map((uu => {
          let {
            items: yu,
            amt: Eu
          } = uu, Ku = 0;
          const Qu = [];
          for (const mu of yu) {
            const uu = Ru(mu);
            Ku += uu, uu > 0 && Qu.push(mu)
          }
          return 0 === Qu.length && Qu.push(yu[0]), {
            shownItems: Qu,
            need: Eu,
            have: Ku,
            missing: Math.max(Eu - Ku, 0)
          }
        }))
      }(Bu, (uu => {
        var Ru;
        return null !== (Ru = null === pu || void 0 === pu ? void 0 : pu.amounts[uu]) && void 0 !== Ru ? Ru : 0
      }));
      let Gu = "4rem",
        Uu = 4;
      3 === Bu.length || 4 === Bu.length ? Gu = "3.75rem" : Bu.length >= 5 && (Gu = "3rem"), 4 === Bu.length ? Uu = 2 : Bu.length <= 6 && (Uu = 3);
      const nu = `calc(${Uu} * ${Gu} + ${Uu-1} * 0.4rem + 1px)`,
        su = (0, Ku.useRef)(null),
        tu = (0, Ku.useRef)(null);
      (0, Ku.useLayoutEffect)((() => {
        su.current.scrollTop = 0
      }), [Nu, ru]);
      const lu = (0, Ku.useRef)(bu);
      (0, Ku.useEffect)((() => {
        if (bu === lu.current) return;
        lu.current = bu;
        const uu = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const Eu of null !== (Ru = null === (yu = su.current) || void 0 === yu ? void 0 : yu.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== Ru ? Ru : []) {
          var Ru, yu;
          Eu.animate(uu, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [bu]);
      const gu = (uu, Ru, yu) => {
          var Eu;
          if ((0, KE.f)().has(Nu)) return void(yu && clearInterval(cu.current));
          const Ku = null !== (Eu = null === pu || void 0 === pu ? void 0 : pu.resultStackable) && void 0 !== Eu && Eu,
            Qu = yE(Xu.gameBridge.latest("inventory").player),
            {
              QV: mu,
              nV: Ju,
              amountAddedToSlot: Vu
            } = Xu.gameBridge.send("craftRecipe", {
              name: Nu,
              KV: ru,
              times: Ru || uu && Ku ? null : 1
            });
          if (mu > 0) {
            const Ru = [],
              Eu = new Set(Bu.flatMap((uu => {
                let {
                  items: Ru
                } = uu;
                return Ru
              }))),
              mu = function(uu, Ru, yu) {
                const Eu = [];
                for (let Ku = 0; Ku < uu.length; Ku++) {
                  const Qu = uu[Ku];
                  if (!Qu || !yu.has(Qu.name)) continue;
                  const mu = Ru[Ku],
                    Ju = (null === mu || void 0 === mu ? void 0 : mu.name) === Qu.name ? mu.amount : 0;
                  Ju < Qu.amount && Eu.push({
                    idx: Ku,
                    itemName: Qu.name,
                    amount: Qu.amount - Ju
                  })
                }
                return Eu
              }(Qu, yE(Xu.gameBridge.latest("inventory").player), Eu).slice(0, 12),
              ru = yu ? 0 : Math.min(50, 400 / mu.length),
              Su = yu ? 220 : 320;
            for (const uu of mu) {
              var xu;
              const yu = Bu.findIndex((Ru => {
                  let {
                    items: yu
                  } = Ru;
                  return yu.includes(uu.itemName)
                })),
                Eu = null === (xu = su.current) || void 0 === xu ? void 0 : xu.querySelector(`[data-craft-ingredient="${yu}"]`),
                Ku = (0, Ay.e)(uu.idx);
              Eu && Ku && Ru.push({
                kind: "ingredient",
                itemName: uu.itemName,
                amount: uu.amount,
                nV: uu.idx,
                from: Ku,
                to: (0, Ay.e)(Eu),
                delayMs: Math.round(Ru.length * ru),
                durationMs: Su
              })
            }
            let pu;
            if (null !== Ju && Vu > 0 && tu.current) {
              const uu = Ru.length > 0 ? Ru[Ru.length - 1].delayMs + .6 * Su : 0;
              pu = {
                itemName: Nu,
                amount: Vu,
                nV: Ju,
                from: (0, Ay.e)(tu.current),
                delayMs: Math.round(uu)
              }
            }
            Tu(pu, uu && !Ku ? Ju : null, Ru), ky.d.play("wood1", .5).rate(1.75)
          }
        },
        cu = (0, Ku.useRef)(null);
      (0, Ku.useEffect)((() => () => {
        clearInterval(cu.current)
      }), []);
      const Lu = (uu, Ru) => {
          gu(uu, !1, !1), clearInterval(cu.current), Ru && (cu.current = setTimeout((() => {
            cu.current = setInterval((() => {
              gu(uu, !1, !0)
            }), Ru.intervalMs)
          }), Ru.initialDelayMs))
        },
        zu = () => {
          clearInterval(cu.current)
        },
        Fu = !Su || Du || Boolean(Cu),
        wu = (0, Ku.useRef)(null),
        Zu = null !== (yu = null === (Eu = (0, uE.e)()) || void 0 === Eu ? void 0 : Eu.hideButtonHints) && void 0 !== yu && yu,
        hu = null !== (Qu = null === (mu = (0, fy.f)()) || void 0 === mu ? void 0 : mu.getBoundButton("inventorySecondary")) && void 0 !== Qu ? Qu : null,
        Pu = () => !Fu && (gu(!1, !0, !1), !0);
      (0, qy.e)(ju, {
        press: uu => "secondary" === uu ? Pu() : !Fu && (Lu(!1, JE()), !0),
        release: zu,
        back: Hu,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, qy.e)(wu, {
        press: Pu,
        back: Hu,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [iu, Yu] = (0, Ku.useState)(0), [ou, Ou] = (0, Ku.useState)(null);
      (0, Ku.useEffect)((() => {
        if (!0 === Ju) {
          Yu(0);
          const uu = setInterval((() => {
            Yu((uu => uu + 1))
          }), 1e3);
          return () => {
            clearInterval(uu)
          }
        }
        return () => {}
      }), [Ju]);
      const vu = null === pu || void 0 === pu ? void 0 : pu.ingredientsCraftedFrom,
        au = (0, Ku.useRef)(Wu);
      (0, Ku.useEffect)((() => {
        au.current = Wu
      }), [Wu]);
      const fu = !(null === Cu || void 0 === Cu || !Cu.hideIngredients);
      (0, Ku.useEffect)((() => {
        var uu, Ru;
        if (!ou) return;
        if (fu) return Ou(null), void(null === (Ru = au.current) || void 0 === Ru || Ru.call(au, !1));
        const yu = ou[iu % ou.length];
        null === (uu = au.current) || void 0 === uu || uu.call(au, !0, NE(yu, eu, null === vu || void 0 === vu ? void 0 : vu[yu]))
      }), [ou, iu, eu, vu, fu]);
      const uR = !!Cu,
        RR = (0, Ku.useRef)(!1);
      (0, Ku.useEffect)((() => {
        var uu;
        uR && (clearInterval(cu.current), fu && RR.current && (RR.current = !1, null === (uu = au.current) || void 0 === uu || uu.call(au, !1)))
      }), [uR, fu]);
      const yR = (0, Ay.w)(eu, Nu);
      return (0, Vu.jsxs)("div", {
        ref: su,
        className: "CraftableInfo SmallTextBold",
        children: [(0, Vu.jsx)("div", {
          className: "CraftableHeader",
          children: (0, Vu.jsx)(ku.d, {
            text: yR
          })
        }), !fu && (0, Vu.jsx)("div", {
          className: xR()("CraftableIngredients", {
            Compact: Bu.length >= 5
          }),
          style: {
            maxWidth: nu
          },
          children: Iu.map(((uu, Ru) => {
            const yu = uu.shownItems[iu % uu.shownItems.length];
            return (0, Vu.jsx)(rE, {
              idx: Ru,
              status: uu,
              shownItem: yu,
              dim: Gu,
              onHoverStart: () => {
                Ou(uu.shownItems)
              },
              onHoverEnd: () => {
                Ou(null), null === Wu || void 0 === Wu || Wu(!1)
              },
              onPadBack: Hu
            }, Ru)
          }))
        }), Cu && (0, Vu.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, Vu.jsx)(ku.d, {
            text: Cu.reason
          })
        }), !Cu && (!Su || Du) && (0, Vu.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!Su && "Missing ingredients", (0, Vu.jsx)("br", {}), Du && "Inventory is full"]
        }), !fu && (0, Vu.jsxs)(Vu.Fragment, {
          children: [(0, Vu.jsxs)(QE, {
            ref: ju,
            className: "DoCraftButton",
            onPointerDown: uu => {
              Lu((0, Ay.y)(uu), (0, vy.j)(uu.nativeEvent) ? JE() : mE)
            },
            onPointerUp: zu,
            onPointerLeave: zu,
            disabled: Fu,
            children: [du && hu && !Fu && !Zu && (0, Vu.jsx)(ay.b, {
              className: "CraftShortcutGlyph",
              glyph: hu
            }), (0, Vu.jsx)("div", {
              ref: tu,
              className: "DoCraftItem",
              onPointerEnter: () => {
                RR.current = !0, null === Wu || void 0 === Wu || Wu(!0, NE(Nu, eu))
              },
              onPointerLeave: () => {
                RR.current = !1, null === Wu || void 0 === Wu || Wu(!1)
              },
              children: (0, Vu.jsx)(by.c, {
                itemName: Nu,
                amount: xu
              })
            })]
          }), (0, Vu.jsxs)(QE, {
            ref: wu,
            className: "DoCraftAllButton",
            onPointerDown: uu => {
              gu((0, Ay.y)(uu), !0, !1)
            },
            disabled: Fu,
            children: [(0, Vu.jsx)("span", {
              className: "CraftAllLabel",
              children: Au("general:craftAll")
            }), Mu > 0 && (0, Vu.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", EE(Mu)]
            })]
          })]
        })]
      })
    }

    function xE(uu) {
      let {
        selectedIdx: Ru,
        hidden: yu
      } = uu;
      const Eu = (0, dy.n)(),
        Qu = (0, Ku.useRef)(null);
      return (0, Ku.useLayoutEffect)((() => {
        const uu = Qu.current,
          Eu = null === uu || void 0 === uu ? void 0 : uu.parentElement;
        if (!Eu || !uu) return;
        const Ku = Eu.querySelector(".CraftableItems"),
          mu = () => {
            var Qu, mu;
            if (yu) return void(uu.style.opacity = "0");
            const Ju = null === Ku || void 0 === Ku ? void 0 : Ku.children[Ru],
              Nu = null === (Qu = null !== (mu = null === Ju || void 0 === Ju ? void 0 : Ju.querySelector(".InvenItem")) && void 0 !== mu ? mu : Ju) || void 0 === Qu ? void 0 : Qu.getBoundingClientRect();
            if (!Nu || 0 === Nu.width) return void(uu.style.opacity = "0");
            const Xu = Eu.getBoundingClientRect();
            uu.style.opacity = "1", uu.style.width = `${Nu.width}px`, uu.style.height = `${Nu.height}px`, uu.style.transform = `translate(${Nu.left-Xu.left+Eu.scrollLeft}px, ${Nu.top-Xu.top+Eu.scrollTop}px)`
          };
        mu();
        const Ju = new MutationObserver(mu),
          Nu = new ResizeObserver(mu);
        return Nu.observe(Eu), Ku && (Ju.observe(Ku, {
          childList: !0,
          subtree: !0
        }), Nu.observe(Ku)), () => {
          Ju.disconnect(), Nu.disconnect()
        }
      }), [Ru, yu]), (0, Vu.jsx)("div", {
        ref: Qu,
        className: xR()("SelectionReticle", {
          Secondary: Eu
        })
      })
    }

    function SE(uu, Ru, yu) {
      return uu ? (0, iy.b)(Yy.j, uu) ? pE(uu, Ru, yu) : uu : yu("classicGame:handCrafting")
    }

    function pE(uu, Ru, yu) {
      var Eu;
      const Ku = null === (Eu = Ru[uu]) || void 0 === Eu ? void 0 : Eu.displayName;
      if ("string" === typeof Ku) return yu(Ku);
      const Qu = Xu.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(Ku) ? Ku.map((uu => {
        if ("string" === typeof uu) return uu;
        if ("translationKey" in uu) return yu(uu.translationKey, (0, qu.o)(uu.params, Qu));
        if ("str" in uu) {
          if ("string" === typeof uu.str) return uu.str;
          if ("translationKey" in uu.str) return yu(uu.str.translationKey, (0, qu.o)(uu.str.params, Qu))
        }
        return ""
      })).join("") : Ku && "translationKey" in Ku ? yu(Ku.translationKey, (0, qu.o)(Ku.params, Qu)) : uu
    }

    function TE(uu, Ru) {
      return uu === Ru || null !== uu && null !== Ru && uu.name === Ru.name && uu.KV === Ru.KV
    }

    function WE(uu) {
      var Ru, yu, Eu;
      let {
        show: Qu,
        onCraft: mu,
        dispatchSelectedCraftable: Ju,
        selectedCraftable: Nu,
        craftingStation: ru,
        setHovered: Bu
      } = uu;
      const {
        t: xu
      } = (0, qu.E)(), [Su, pu] = (0, Ku.useState)(""), [Tu, Wu] = (0, Ku.useState)(0);
      (0, Ku.useEffect)((() => {
        Qu || (pu(""), Wu((uu => uu + 1)))
      }), [Qu]);
      const [ju, Hu] = (0, Ku.useState)(ru);
      ju !== ru && (Hu(ru), "" !== Su && (pu(""), Wu((uu => uu + 1))));
      const du = (0, Ku.useRef)(null),
        bu = (0, Ku.useRef)(null),
        Cu = (0, Oy.j)(),
        ku = Cu.showing && "recipe" === Cu.kind,
        [eu, Au] = (0, Ku.useState)(0),
        Mu = null !== ru && void 0 !== ru ? ru : null,
        Iu = (0, Ku.useRef)(null),
        Gu = uu => {
          return !((Ru = Iu.current) === (yu = uu) || null !== Ru && null !== yu && Ru.station === yu.station && TE(Ru.recipe, yu.recipe)) && (Iu.current = uu, Xu.gameBridge.send("focusCrafting", uu), !0);
          var Ru, yu
        };
      Gu(Qu ? {
        station: Mu,
        recipe: (null === (Ru = Iu.current) || void 0 === Ru ? void 0 : Ru.station) === Mu ? Iu.current.recipe : null
      } : null);
      let Uu = Xu.gameBridge.latest("crafting");
      const nu = (0, Du.i)("itemInfo"),
        su = "" !== Su.trim(),
        tu = (0, KE.E)(),
        lu = (0, KE.A)(),
        gu = (0, KE.H)(),
        cu = function(uu, Ru) {
          const [yu, Eu] = (0, Ku.useState)(!1);
          (0, Ku.useEffect)((() => {
            if (!uu) return void Eu(!1);
            const Ru = setTimeout((() => {
              Eu(!0)
            }), 0);
            return () => {
              clearTimeout(Ru)
            }
          }), [uu]);
          const Qu = uu && yu,
            mu = (0, Ku.useRef)({
              station: Ru,
              at: new Map
            });
          return (mu.current.station !== Ru || !Qu && mu.current.at.size > 0) && (mu.current = {
            station: Ru,
            at: new Map
          }), Qu ? mu.current.at : null
        }(Qu, ru);
      let Lu = Uu.recipes.filter((uu => {
        let {
          listed: Ru
        } = uu;
        return Ru
      }));
      if (su) {
        const uu = [];
        for (const Ru of Uu.recipes) {
          var zu;
          const yu = null !== (zu = lu.get(Ru.name)) && void 0 !== zu && zu.hideIngredients ? [] : Ru.requires.flatMap((uu => {
              let {
                items: Ru
              } = uu;
              return Ru.flatMap((uu => [uu, pE(uu, nu, xu)]))
            })),
            Eu = RE(Su, [Ru.name, pE(Ru.name, nu, xu)], yu);
          null !== Eu && uu.push({
            item: Ru,
            rank: Eu
          })
        }
        uu.sort(((uu, Ru) => uu.rank - Ru.rank)), Lu = uu.map((uu => {
          let {
            item: Ru
          } = uu;
          return Ru
        }))
      } else {
        if (cu && cu.size > 0) {
          const uu = Uu.recipes.filter((uu => !uu.listed && cu.has(XE(uu))));
          Lu = Lu.concat(uu)
        }
        Lu = (0, KE.j)(Lu, tu, lu, gu), cu && (Lu = (0, KE.h)(Lu, cu, XE))
      }
      const Fu = uu => Lu.find((Ru => XE(Ru) === uu)),
        wu = `${ru}|${Su}`,
        [Zu, hu] = (0, Ku.useState)(null),
        Pu = (null === Zu || void 0 === Zu ? void 0 : Zu.context) === wu ? Zu.key : null,
        iu = Nu ? XE(Nu) : null,
        Yu = null !== (yu = null !== (Eu = Fu(iu)) && void 0 !== Eu ? Eu : Fu(Pu)) && void 0 !== yu ? yu : Lu[0],
        ou = Yu ? XE(Yu) : null,
        Ou = Yu ? {
          name: Yu.name,
          KV: Yu.KV
        } : null;
      Qu && Gu({
        station: Mu,
        recipe: Ou
      }) && (Uu = Xu.gameBridge.latest("crafting")), ou !== iu && ou !== Pu && hu(ou ? {
        context: wu,
        key: ou
      } : null), (0, Ku.useEffect)((() => () => {
        Iu.current = null, Xu.gameBridge.send("focusCrafting", null)
      }), []);
      const vu = TE(Uu.detail, Ou) ? Uu.detail : null,
        au = null !== vu && !vu.roomForOne,
        fu = Lu.findIndex((uu => XE(uu) === XE(Yu))),
        uR = () => bu.current ? (0, qy.d)(bu.current) : null,
        RR = (0, Ku.useRef)(null),
        yR = (0, Ku.useRef)(0);
      yR.current++;
      const ER = yR.current;
      (0, Ku.useEffect)((() => {
        const uu = RR.current;
        if (!uu || ER <= uu.afterRender) return;
        if (RR.current = null, uu.key !== ou) return;
        const Ru = uR();
        var yu;
        null !== Ru && void 0 !== Ru && Ru.press("primary") && !uu.jJ && (null === (yu = Ru.release) || void 0 === yu || yu.call(Ru))
      }));
      const KR = uu => {
          const Ru = {
            name: uu.name,
            KV: uu.KV
          };
          return {
            choose: () => {
              Ju(Ru), (0, Hy.r)(bu.current)
            },
            craft: () => {
              var uu, yu;
              return Ju(Ru), XE(Ru) !== XE(Yu) ? (RR.current = {
                key: XE(Ru),
                jJ: !0,
                afterRender: yR.current
              }, !0) : null !== (uu = null === (yu = uR()) || void 0 === yu ? void 0 : yu.press("primary")) && void 0 !== uu && uu
            },
            stopCraft: () => {
              var uu, Ru;
              RR.current ? RR.current.jJ = !1 : null === (uu = uR()) || void 0 === uu || null === (Ru = uu.release) || void 0 === Ru || Ru.call(uu)
            },
            refuse: () => {
              XE(Ru) !== XE(Yu) && Ju(Ru), Au((uu => uu + 1))
            }
          }
        },
        QR = () => {
          var uu, Ru, yu;
          (0, Hy.r)(null !== (uu = null === (Ru = du.current) || void 0 === Ru || null === (yu = Ru.querySelector(".CraftableItems")) || void 0 === yu ? void 0 : yu.children[fu]) && void 0 !== uu ? uu : null)
        },
        mR = Lu.map(XE).join("|"),
        JR = (0, Ku.useRef)(mR);
      return (0, Ku.useEffect)((() => {
        JR.current !== mR && (JR.current = mR, ku && fu >= 0 && (0, Oy.f)() && QR())
      })), (0, Vu.jsxs)("div", {
        className: "Craftables",
        children: [(0, Vu.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: SE(ru, nu, xu)
        }), (0, Vu.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, Vu.jsx)(DR.b, {
            className: "CraftingSearch",
            placeholderText: xu("general:searchRecipes"),
            defaultValue: Su,
            maxLength: 100,
            onValueChange: uu => {
              pu(uu)
            },
            blurOnEnter: !0
          }, Tu), 0 === Lu.length && su && (0, Vu.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: xu("general:noRecipesMatchSearch")
          }), Lu.length > 0 && (0, Vu.jsxs)(Vu.Fragment, {
            children: [(0, Vu.jsxs)("div", {
              ref: du,
              className: "CraftablesLeftSide",
              children: [(0, Vu.jsx)(oy.e, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(Lu.map((uu => {
                  let {
                    name: Ru,
                    KV: yu,
                    haveIngredients: Eu
                  } = uu;
                  return {
                    name: Ru,
                    KV: yu,
                    haveIngredients: Eu
                  }
                })))],
                observing: Qu,
                children: Lu.map((uu => {
                  const {
                    name: Ru,
                    KV: yu,
                    haveIngredients: Eu
                  } = uu, Ku = XE(uu);
                  return (0, Vu.jsx)(VE, {
                    recipeId: Ku,
                    itemName: Ru,
                    onClick: () => {
                      Ju({
                        name: Ru,
                        KV: yu
                      })
                    },
                    isSelected: XE(Yu) === Ku,
                    haveIngredients: Eu,
                    craftable: Eu && !lu.has(Ru) && !(XE(Yu) === Ku && au),
                    setHovered: Bu,
                    padActions: KR(uu),
                    marked: tu.has(Ru),
                    lock: lu.get(Ru),
                    itemInfo: nu
                  }, Ku)
                }))
              }), (0, Vu.jsx)(xE, {
                selectedIdx: fu,
                hidden: ku && Cu.steppingSlots
              })]
            }), (0, Vu.jsx)(BE, {
              show: Qu,
              recipeItem: Yu,
              detail: vu,
              onCraft: mu,
              setHovered: Bu,
              craftButtonRef: bu,
              onPadBack: QR,
              showPadShortcut: ku,
              refusedCount: eu,
              lock: lu.get(Yu.name),
              itemInfo: nu
            })]
          })]
        })]
      })
    }
    var jE = yu(9079),
      HE = yu(3093),
      dE = yu(2025),
      bE = yu(8418);
    class CE {
      constructor(uu, Ru, yu) {
        this.commit = uu, this.delayMs = Ru, this.defers = yu, this.pending = null, this.timer = void 0, this.jJ = !1, this.flush = () => {
          clearTimeout(this.timer);
          const uu = this.pending;
          null !== uu && (this.pending = null, this.commit(uu))
        }
      }
      type(uu) {
        this.pending = uu, clearTimeout(this.timer), this.jJ || this.defers() ? this.jJ || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(uu) {
        var Ru;
        return null !== (Ru = this.pending) && void 0 !== Ru ? Ru : uu
      }
      isHeld() {
        return this.jJ
      }
      setHeld(uu) {
        this.jJ = uu, uu || this.flush()
      }
    }

    function kE(uu) {
      return null === uu ? "creativeInventory:all" : `creativeInventory:${uu}`
    }

    function eE(uu) {
      let {
        category: Ru
      } = uu;
      return null === Ru ? (0, Vu.jsx)(Tu.c, {
        name: "layer-group"
      }) : (0, Vu.jsx)(by.c, {
        itemName: jE.creativeItemCategoryIcons[Ru],
        amount: 0
      })
    }

    function AE(uu) {
      let {
        labelKey: Ru,
        isSelected: yu,
        onSelect: Eu,
        setHovered: Ku,
        children: Qu
      } = uu;
      return (0, Vu.jsx)("div", {
        className: xR()("CreativeCategoryTab", {
          Selected: yu
        }),
        onClick: Eu,
        onPointerEnter: uu => {
          (0, Ay.t)(uu) || Ku(!0, {
            name: {
              translationKey: Ru
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          Ku(!1)
        },
        children: Qu
      })
    }

    function DE(uu) {
      let {
        categories: Ru,
        selectedCategory: yu,
        onSelect: Eu
      } = uu;
      const {
        t: Qu
      } = (0, qu.E)(), [mu, Ju] = (0, Ku.useState)(!1), Nu = (0, Ku.useRef)(null), Xu = (0, Ku.useCallback)((() => {
        Ju(!1)
      }), []);
      return (0, dE.e)(Nu, Xu), (0, Vu.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: Nu,
        children: [(0, Vu.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            Ju(!mu)
          },
          children: [(0, Vu.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, Vu.jsx)(eE, {
              category: yu
            })
          }), (0, Vu.jsx)("span", {
            children: Qu(kE(yu))
          }), (0, Vu.jsx)(Tu.c, {
            name: mu ? "caret-up" : "caret-down"
          })]
        }), mu && (0, Vu.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: Ru.map((uu => (0, Vu.jsxs)("div", {
            className: xR()("CreativeCategoryDropdownOption", {
              Selected: yu === uu
            }),
            onClick: () => {
              Eu(uu), Ju(!1)
            },
            children: [(0, Vu.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, Vu.jsx)(eE, {
                category: uu
              })
            }), (0, Vu.jsx)("span", {
              children: Qu(kE(uu))
            })]
          }, null !== uu && void 0 !== uu ? uu : "all")))
        })]
      })
    }
    const ME = (0, Ku.memo)((function(uu) {
      let {
        creativeScrollDiv: Ru,
        playerInvenNumSlots: yu,
        getSetHoveringForIdx: Eu,
        getPointerDownForIdx: Qu,
        getPointerUpForIdx: mu,
        creativeSearchVal: Ju,
        setCreativeSearchVal: Xu,
        creativeCategory: ru,
        setCreativeCategory: Bu,
        show: xu
      } = uu;
      const {
        t: Su
      } = (0, qu.E)(), pu = (0, Du.i)("creativeVisibility"), {
        userContext: Wu
      } = (0, Cu.d)(), ju = (0, Nu.g)("canUseDevCreativeItems"), Hu = Wu.playerHasRank("developer") || !!ju, du = (0, Ku.useMemo)((() => GE("", pu, Hu)), [pu, Hu]), bu = (0, Ku.useMemo)((() => {
        const uu = (0, jE.creativeItemIds)(),
          Ru = new Set(du.map((Ru => (0, jE.creativeCategoryOf)(uu[Ru]))));
        return jE.creativeItemCategories.filter((uu => Ru.has(uu)))
      }), [du]), ku = null !== ru && bu.includes(ru) ? ru : null, Au = (0, Ku.useMemo)((() => "" === Ju ? du : GE(Ju, pu, Hu)), [du, Ju, pu, Hu]), Mu = (0, Ku.useMemo)((() => {
        const uu = (0, jE.creativeItemIds)();
        return null !== ku ? Au.filter((Ru => (0, jE.creativeCategoryOf)(uu[Ru]) === ku)) : "" === Ju ? Au.filter((Ru => !(0, jE.showOnlyInCreativeCategory)(uu[Ru]))) : Au
      }), [Au, ku, Ju]), Iu = Eu();

      function Gu(uu) {
        Bu(uu), Ru.current.scrollTop = 0
      }
      const Uu = [null, ...bu],
        {
          isTouchScreen: nu
        } = (0, zu.j)(["isTouchScreen"]),
        su = !nu,
        tu = (0, Ku.useRef)(null),
        [lu, gu] = (0, Ku.useState)(0);
      (0, Ku.useEffect)((() => {
        const uu = tu.current;
        if (!uu) return;
        const Ru = new ResizeObserver((uu => {
          gu(uu[0].contentRect.height)
        }));
        return Ru.observe(uu), () => {
          Ru.disconnect()
        }
      }), [su]);
      const cu = (0, Ku.useRef)(null),
        Lu = (0, Ku.useCallback)((function uu() {
          "up" === cu.current ? Ru.current.scrollTop -= 10 : "down" === cu.current && (Ru.current.scrollTop += 10), cu.current && requestAnimationFrame(uu)
        }), [Ru]),
        Fu = (0, Ku.useCallback)((function(uu) {
          cu.current || (cu.current = uu, Lu())
        }), [Lu]);

      function wu() {
        cu.current = null
      }
      const Zu = (0, Ku.useRef)({
        creativeSearchVal: Ju,
        setCreativeSearchVal: Xu
      });
      Zu.current = {
        creativeSearchVal: Ju,
        setCreativeSearchVal: Xu
      };
      const [hu] = (0, Ku.useState)((() => new CE((uu => {
        Zu.current.setCreativeSearchVal(uu)
      }), 250, dy.g))), Pu = uu => {
        var yu;
        null === (yu = Ru.current) || void 0 === yu || yu.classList.toggle("CreativeItemSlotsStale", uu)
      };
      (0, eu.e)(bE.d, (uu => {
        hu.setHeld(uu), uu || Pu(!1)
      })), (0, Ku.useEffect)((() => hu.flush), [hu]);
      const iu = (0, Vu.jsx)(DR.b, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: Ju,
          maxLength: 1e4,
          onValueChange: (uu, Ru) => {
            "" === hu.getTyped(Zu.current.creativeSearchVal) && "" !== uu && Bu(null), hu.type(uu), Pu(hu.isHeld())
          },
          onEnter: hu.flush,
          blurOnEnter: !0
        }),
        Yu = (0, Vu.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [nu && (0, Vu.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, Vu.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                Fu("up")
              },
              onPointerLeave: wu,
              onPointerUp: wu,
              children: (0, Vu.jsx)(Tu.c, {
                name: "arrow-up"
              })
            }), (0, Vu.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                Fu("down")
              },
              onPointerLeave: wu,
              onPointerUp: wu,
              children: (0, Vu.jsx)(Tu.c, {
                name: "arrow-up"
              })
            })]
          }), (0, Vu.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: Ru,
            children: [0 === Mu.length && "" !== Ju && (0, Vu.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: Su("general:noResults")
            }), (0, Vu.jsx)(oy.e, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [Ju, ku],
              observerRoot: "CreativeItemSlots",
              observing: xu,
              children: Mu.map((uu => {
                const Ru = yu + uu;
                return (0, Vu.jsx)(wy.c, {
                  idx: Ru,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: Eu(Ru),
                  pointerDown: Qu(Ru),
                  pointerUp: mu(Ru)
                }, Ru)
              }))
            })]
          })]
        });
      return (0, Vu.jsxs)("div", {
        className: xR()("CreativeItemSlotsWrapper", su ? "WithRail" : "WithDropdown"),
        children: [su && (0, Vu.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: tu,
          style: {
            "--rail-height": lu > 0 ? `${lu}px` : void 0,
            "--tab-rows": Math.ceil(Uu.length / 2)
          },
          children: Uu.map((uu => (0, Vu.jsx)(AE, {
            labelKey: kE(uu),
            isSelected: ku === uu,
            onSelect: () => {
              Gu(uu)
            },
            setHovered: Iu,
            children: (0, Vu.jsx)(eE, {
              category: uu
            })
          }, null !== uu && void 0 !== uu ? uu : "all")))
        }), (0, Vu.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, Vu.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [iu, !su && (0, Vu.jsx)(DE, {
              categories: Uu,
              selectedCategory: ku,
              onSelect: Gu
            })]
          }), Yu]
        })]
      })
    }));

    function IE(uu) {
      var Ru;
      return null !== (Ru = (0, HE.f)(uu)) && void 0 !== Ru ? Ru : ""
    }

    function GE(uu, Ru, yu) {
      let {
        publicLobby: Eu,
        shownInGame: Ku
      } = Ru;
      const Qu = uu.toLowerCase(),
        mu = (0, jE.creativeItemIds)(),
        Ju = uu => {
          var Ru;
          const Qu = mu[uu];
          return !(0, jE.itemIsDisabled)(Qu, Eu, null === (Ru = Ku[IE(Qu)]) || void 0 === Ru || Ru, yu)
        };
      if ("" === Qu) return mu.map(((uu, Ru) => Ru)).filter((uu => !(0, jE.showOnlyInCreativeSearch)(mu[uu]))).filter(Ju);
      const Nu = [];
      for (let Xu = 0; Xu < mu.length; Xu++) IE(mu[Xu]).toLowerCase().includes(Qu) && Nu.push(Xu);
      Nu.sort(((uu, Ru) => {
        const yu = IE(mu[uu]).toLowerCase(),
          Eu = IE(mu[Ru]).toLowerCase();
        return yu.indexOf(Qu) - Eu.indexOf(Qu)
      }));
      for (const [Xu, Vu] of(0, jE.creativeAltNames)())
        for (const uu of Vu)
          if (uu.toLowerCase().includes(Qu)) {
            const uu = mu.indexOf(Xu);
            Nu.includes(uu) || Nu.push(uu)
          } return Nu.filter(Ju)
    }
    var UE = yu(36602),
      nE = yu(610);

    function sE(uu) {
      return uu > nE.j
    }

    function tE(uu) {
      const Ru = uu / 2,
        yu = [];
      for (let Eu = 0; Eu < Ru / 6; Eu++)
        for (let uu = 0; uu < 12; uu++) {
          const Ku = uu < 6 ? 0 : Ru;
          yu.push(Ku + 6 * Eu + uu % 6)
        }
      return yu
    }

    function lE(uu) {
      let {
        numSlots: Ru,
        renderSlot: yu
      } = uu;
      const {
        t: Eu
      } = (0, qu.E)(), Qu = (0, Ku.useRef)(null);
      var mu;
      return mu = Qu, (0, Ku.useLayoutEffect)((() => {
        var uu;
        const Ru = null === (uu = mu.current) || void 0 === uu ? void 0 : uu.closest(".InvenBody");
        if (!Ru) return;
        const yu = () => {
          Ru.style.zoom = "";
          const uu = parseFloat(getComputedStyle(document.documentElement).fontSize),
            yu = window.innerWidth - 2 * uu,
            Eu = Ru.getBoundingClientRect().width;
          Eu > yu && (Ru.style.zoom = "" + yu / Eu)
        };
        return yu(), window.addEventListener("resize", yu), () => {
          window.removeEventListener("resize", yu), Ru.style.zoom = ""
        }
      }), [mu]), (0, Vu.jsxs)("div", {
        ref: Qu,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, Vu.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Eu("doubleChest:title")
        }), (0, Vu.jsx)("div", {
          className: "GridItemSlots",
          children: tE(Ru).map((uu => yu(uu)))
        })]
      })
    }

    function gE(uu) {
      let {
        zQ: Ru,
        initialPasskey: yu
      } = uu;
      const {
        t: Eu
      } = (0, qu.E)(), [Qu, mu] = (0, Ku.useState)(yu), [Ju, Nu] = (0, Ku.useState)(yu);
      (0, Ku.useEffect)((() => {
        mu(yu), Nu(yu)
      }), [...Ru]);
      return (0, Vu.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, Vu.jsx)("div", {
          className: "SmallTextBold",
          children: Eu("ironChest:currentPasskey", {
            currentPasskey: Qu.join("")
          })
        }), (0, Vu.jsx)(cy, {
          className: "IronChestPasskeyEditor",
          SX: Ju,
          onPasskeyUpdated: Nu,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            Xu.gameBridge.send("changeIronChestPasskey", {
              pos: [...Ru],
              SX: [...Ju]
            }), mu([...Ju])
          }
        })]
      })
    }

    function cE(uu) {
      let {
        variation: Ru,
        canCraft: yu,
        show: Eu,
        creativeMounted: Ku,
        specialItemRef: Qu,
        draggedInfo: mu,
        getSetHovering: Ju,
        getPointerDownForIdx: Nu,
        getPointerUpForIdx: Xu,
        enchantingTablePosition: ru,
        enchantingTableBlockName: Bu,
        selectedCraftable: xu,
        dispatchSelectedCraftable: Su,
        creativeScrollDiv: pu,
        creativeSearchVal: Tu,
        setCreativeSearchVal: Wu,
        creativeCategory: ju,
        setCreativeCategory: Hu,
        onCraft: du
      } = uu;
      const {
        userContext: bu
      } = (0, Cu.d)(), {
        t: ku
      } = (0, qu.E)(), eu = (0, Du.h)("inventory", (uu => uu.chest)), Au = (0, Du.h)("inventory", (uu => uu.player.length)), Mu = (0, Du.h)("inventory", (uu => uu.creative));
      if (0 === Au) return null;
      let Iu, Gu;
      const Uu = uu => {
          const Ru = Au + uu;
          return (0, Vu.jsx)(wy.c, {
            idx: Ru,
            draggedInfo: mu,
            specialItemInfo: Qu.current,
            setHovered: Ju(Ru),
            pointerDown: Nu(Ru),
            pointerUp: Xu(Ru)
          }, Ru)
        },
        nu = eu ? (0, UE.e)(eu.type) : null;
      if (nu) Iu = xR()("InvenLeftSideChestCustom", nu.className), Gu = (0, Vu.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: nu.render({
          zQ: eu.pos,
          renderSlot: Uu
        })
      });
      else if (eu) {
        const uu = eu.pos,
          Ru = "Iron" === eu.type || "Moonstone" === eu.type ? eu.type : "Standard";
        let yu = !1,
          Eu = null;
        "Iron" === Ru && (yu = eu.ironChest.ownerDbId === bu.whamm, Eu = eu.ironChest.SX), Iu = `InvenLeftSideChest${Ru}`;
        const Ku = sE(eu.numSlots);
        Gu = (0, Vu.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [yu && (0, Vu.jsx)(gE, {
            zQ: uu,
            initialPasskey: Eu
          }), Ku && (0, Vu.jsx)(lE, {
            numSlots: eu.numSlots,
            renderSlot: Uu
          }), !Ku && (0, Vu.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, Vu.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: ku("Moonstone" === Ru ? "item:moonstoneChest" : "Iron" === Ru ? "item:ironChest" : "item:chest")
            }), (0, Vu.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(eu.numSlots).fill(0).map(((uu, Ru) => Uu(Ru)))
            })]
          })]
        })
      } else if (!Mu || Ru && yu)
        if (yu && "Enchanting Table" === Ru) Iu = `InvenLeftSide${(null!==Bu&&void 0!==Bu?Bu:"").replace(/ /gi,"")}`, Gu = (0, Vu.jsx)(Zy, {
          specialItemInfo: Qu.current,
          setHovered: Ju,
          pointerDown: Nu(My.h),
          pointerUp: Xu(My.h),
          enchantingTablePosition: ru,
          enchantingTableBlockName: Bu
        });
        else if (yu && "Salvaging Table" === Ru) Iu = "InvenLeftSideSalvagingTable", Gu = (0, Vu.jsx)(Py, {
        specialItemInfo: Qu.current,
        setSpecialItemInfo: uu => {
          Qu.current = uu
        },
        setHovered: Ju,
        pointerDown: Nu(My.h),
        pointerUp: Xu(My.h)
      });
      else {
        if (!yu) return null;
        Iu = `InvenLeftSide${(null!==Ru&&void 0!==Ru?Ru:"HandCrafting").replace(/ /gi,"")}`, Gu = (0, Vu.jsx)(WE, {
          show: Eu,
          onCraft: du,
          craftingStation: Ru,
          selectedCraftable: xu,
          dispatchSelectedCraftable: Su,
          setHovered: Ju()
        })
      } else Iu = "InvenLeftSideCreative", Gu = Ku ? (0, Vu.jsx)(ME, {
        creativeScrollDiv: pu,
        playerInvenNumSlots: Au,
        getSetHoveringForIdx: Ju,
        getPointerDownForIdx: Nu,
        getPointerUpForIdx: Xu,
        creativeSearchVal: Tu,
        setCreativeSearchVal: Wu,
        creativeCategory: ju,
        setCreativeCategory: Hu,
        show: Eu
      }) : null;
      const su = !!eu || yu && !!Ru;
      return (0, Vu.jsx)("div", {
        className: `InvenLeftSide ${Iu}`,
        "data-pad-inventory-start": su ? "" : void 0,
        children: Gu
      })
    }
    var LE = yu(599),
      zE = yu(20134),
      FE = yu(20142),
      wE = yu(20145);
    const ZE = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: yu(20149)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: FE
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: wE
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: yu(20151)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: zE
      }
    };

    function hE(uu) {
      const {
        sprite: Ru,
        image: yu
      } = ZE[uu];
      return Ny(Ru, Qy.l.ITEM, yu)
    }

    function PE(uu) {
      let {
        draggedInfo: Ru,
        specialItemInfo: yu,
        craftFlyAnims: Eu,
        getSetHovering: Ku,
        getPointerDownForIdx: Qu,
        getPointerUpForIdx: mu,
        variation: Ju,
        canCraft: Nu,
        isNewSlot: Xu
      } = uu;
      const ru = (0, Du.h)("inventory", (uu => uu.player.length));
      return 0 === ru ? null : (0, Vu.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, Vu.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(LE.e.length).fill(0).map(((uu, Bu) => {
            const xu = ru - LE.e.length + Bu;
            return (0, Vu.jsx)(wy.c, {
              idx: xu,
              draggedInfo: Ru,
              specialItemInfo: yu,
              craftFlyHoldbackInfo: (0, Dy.h)(Eu, xu),
              setHovered: Ku(xu),
              pointerDown: Qu(xu),
              pointerUp: mu(xu),
              defaultIconB64: hE(LE.e[Bu]),
              variation: Nu ? Ju : void 0,
              showNewDot: Xu(xu)
            }, xu)
          }))
        }), (0, Vu.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(ru - 10 - LE.e.length).fill(0).map(((uu, Bu) => {
            const xu = ru - LE.e.length - Bu - 1;
            return (0, Vu.jsx)(wy.c, {
              idx: xu,
              draggedInfo: Ru,
              specialItemInfo: yu,
              craftFlyHoldbackInfo: (0, Dy.h)(Eu, xu),
              setHovered: Ku(xu),
              pointerDown: Qu(xu),
              pointerUp: mu(xu),
              variation: Nu ? Ju : void 0,
              showNewDot: Xu(xu)
            }, xu)
          }))
        })]
      })
    }
    var iE = yu(36607),
      YE = yu(36609);

    function oE(uu) {
      const {
        e: Ru,
        idx: yu
      } = uu, Eu = (0, Ay.k)(uu.readInventory(), yu), Ku = (0, Ay.p)(Ru);
      yu === My.d ? function(uu, Ru) {
        const {
          draggedInfoRef: yu,
          removeItem: Eu,
          removeDraggedInfoRef: Ku,
          close: Qu
        } = uu;
        if (yu.current) {
          const uu = Ru && yu.current.amount || 1;
          Eu(yu.current.idx, uu, !0) && (yu.current.amount -= uu, yu.current.amount <= 0 && Ku())
        } else Ru && Qu()
      }(uu, Ku) : yu === My.h ? function(uu, Ru) {
        const {
          e: yu,
          draggedInfoRef: Eu,
          specialItemRef: Ku,
          moveAmtIntoSlot: Qu,
          removeDraggedInfoRef: mu
        } = uu;
        if ((0, Ay.y)(yu) && Ku.current) Ku.current = null;
        else if (Eu.current && Ku.current && (Eu.current.idx === Ku.current.idx || (0, YE.b)(Eu.current, Ku.current)) && Eu.current.amount > 0 && Ku.current.amount > 0 && Ku.current.amount < ly.f.maxItemStackSize)
          if (Eu.current.idx === Ku.current.idx) {
            if (Ru) {
              const uu = Math.min(Eu.current.amount, ly.f.maxItemStackSize - Ku.current.amount);
              Ku.current.amount += uu, Eu.current.amount -= uu
            } else Eu.current.amount--, Ku.current.amount++;
            Eu.current.amount <= 0 && mu()
          } else if (Ru) {
          const uu = Math.min(Eu.current.amount, ly.f.maxItemStackSize - Ku.current.amount);
          Qu(Ku.current.idx, uu) && (Ku.current.amount += uu)
        } else {
          Qu(Ku.current.idx, 1) && Ku.current.amount++
        } else if (!Eu.current || Ku.current || Ru) {
          const uu = Eu.current;
          Eu.current = Ku.current, Ku.current = uu
        } else Eu.current.amount--, Ku.current = {
          idx: Eu.current.idx,
          name: Eu.current.name,
          attributes: Eu.current.attributes,
          amount: 1
        }
      }(uu, Ku) : (0, Ay.y)(Ru) ? function(uu, Ru) {
        var yu, Eu;
        const {
          idx: Ku,
          draggedInfoRef: Qu,
          specialItemRef: mu,
          canCraft: Ju,
          variation: Nu,
          swapSlots: Xu,
          moveIntoSlots: Vu
        } = uu;
        if (!Ru) return;
        let ru = Ru.amount;
        Ku === (null === (yu = Qu.current) || void 0 === yu ? void 0 : yu.idx) && (ru = Qu.current.amount <= 0 ? 0 : Ru.amount - Qu.current.amount);
        Ku === (null === (Eu = mu.current) || void 0 === Eu ? void 0 : Eu.idx) && (ru = mu.current.amount <= 0 ? 0 : Ru.amount - mu.current.amount);
        if (0 === ru) return;
        const Bu = uu.readInventory(),
          xu = Bu.player.length,
          Su = Bu.chest,
          pu = xu - LE.e.length,
          Tu = () => {
            if (!(0, dy.g)()) return void Vu(10, pu, Ku, ru);
            const uu = uu => {
              const yu = (0, Ay.k)(Bu, uu);
              return yu ? {
                amount: yu.amount,
                stacksWithMoved: (0, YE.b)(yu, Ru)
              } : null
            };
            for (const Ru of ((uu, Ru, yu, Eu, Ku) => {
                const Qu = [];
                let mu = Eu;
                if (null !== Eu) {
                  let Ju = 0;
                  for (let Eu = Ru; Eu < yu; Eu++) {
                    const Ru = uu(Eu);
                    null !== Ru && void 0 !== Ru && Ru.stacksWithMoved && null !== Ru.amount && Ru.amount > 0 && (Ju += Math.max(0, Ku - Ru.amount))
                  }
                  const Nu = Math.min(Eu, Ju);
                  if (Nu > 0 && (Qu.push({
                      start: Ru,
                      end: yu,
                      amount: Nu
                    }), mu = Eu - Nu), mu <= 0) return Qu
                }
                for (let Ju = yu - 1; Ju >= Ru; Ju--)
                  if (null === uu(Ju)) {
                    Qu.push({
                      start: Ju,
                      end: Ju + 1,
                      amount: mu
                    });
                    break
                  } return Qu
              })(uu, 10, pu, ru, ly.f.maxItemStackSize)) Vu(Ru.start, Ru.end, Ku, Ru.amount)
          };
        if (!Ju || "Enchanting Table" !== Nu && "Salvaging Table" !== Nu) {
          const yu = (0, Au.Fb)(Ru.name),
            Eu = yu ? (0, Au.Db)(yu) : null;
          if (!LE.e.includes(yu) || Ku !== Eu && (0, Ay.n)(Bu, uu.itemInfo, Eu, Ku))
            if (Su)
              if (Ku < xu) {
                var Wu, ju;
                const [uu, Ru] = null !== (Wu = null === (ju = (0, UE.e)(Su.type)) || void 0 === ju ? void 0 : ju.quickMoveRange) && void 0 !== Wu ? Wu : [0, Su.numSlots];
                Vu(xu + uu, xu + Ru, Ku, ru)
              } else Vu(0, xu - LE.e.length, Ku, ru);
          else Bu.creative ? Ku < 10 ? Tu() : Ku < xu ? Vu(0, 10, Ku, ru) : Vu(0, xu - LE.e.length, Ku, null !== Ru.amount ? ly.f.maxItemStackSize : null) : Ku < 10 ? Tu() : Vu(0, 10, Ku, ru);
          else Ku < xu - LE.e.length || Ku >= xu ? Xu(Eu, Ku) : (Vu(0, xu - LE.e.length, Eu, ru), ky.d.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else mu.current = {
          idx: Ku,
          name: Ru.name,
          attributes: Ru.attributes,
          amount: null !== Ru.amount ? ru : 0
        }
      }(uu, Eu) : uu.draggedInfoRef.current ? function(uu, Ru, yu, Eu) {
        const {
          draggedInfoRef: Ku,
          specialItemRef: Qu,
          moveAmtIntoSlot: mu,
          swapSlots: Ju,
          removeItem: Nu,
          removeDraggedInfoRef: Xu
        } = uu, Vu = uu.readInventory(), ru = Ku.current.idx;
        if (yu && (Ru === ru || (0, YE.b)(Ku.current, yu)) && Ku.current.amount > 0 && (0, Ay.d)(yu) > 0 && (yu.amount < ly.f.maxItemStackSize || Ru === ru)) Eu ? yu.amount + Ku.current.amount <= ly.f.maxItemStackSize || Ru === ru ? mu(Ru, Ku.current.amount) : mu(Ru, ly.f.maxItemStackSize - yu.amount) : mu(Ru, 1);
        else if (Ku.current.amount > 0 && !yu) mu(Ru, Eu ? Ku.current.amount : 1);
        else if (Eu || yu || 0 === Ku.current.amount)
          if (Vu.creative && !Vu.chest && Ru >= Vu.player.length) {
            const uu = 0 === Ku.current.amount ? 1 : Ku.current.amount;
            Nu(Ku.current.idx, uu, !1) && Xu()
          } else {
            var Bu;
            const yu = (null === (Bu = Qu.current) || void 0 === Bu ? void 0 : Bu.idx) === Ru;
            if (Ju(Ru, Ku.current.idx)) {
              const Eu = uu.readInventory(),
                mu = (0, Ay.k)(Eu, ru),
                Ju = !Eu.chest && Eu.creative && Ku.current.idx >= Eu.player.length;
              if (mu && Ku.current.idx !== Ru && !Ju) {
                let uu = (0, Ay.d)(mu);
                yu && (uu -= Qu.current.amount), Ku.current = yu && 0 === uu ? null : {
                  idx: Ku.current.idx,
                  name: mu.name,
                  attributes: mu.attributes,
                  amount: uu
                }
              } else Xu()
            }
          }
        else mu(Ru, 1)
      }(uu, yu, Eu, Ku) : function(uu, Ru, yu, Eu) {
        var Ku;
        const {
          draggedInfoRef: Qu,
          specialItemRef: mu
        } = uu;
        if (!yu) return;
        let Ju = (0, Ay.d)(yu);
        const Nu = (null === (Ku = mu.current) || void 0 === Ku ? void 0 : Ku.idx) === Ru;
        Nu && (Ju -= mu.current.amount);
        Eu || (Ju = Math.ceil(Ju / 2));
        Qu.current = Nu && 0 === Ju ? null : {
          idx: Ru,
          name: yu.name,
          attributes: yu.attributes,
          amount: Ju
        }
      }(uu, yu, Eu, Ku)
    }

    function qE(uu, Ru) {
      return !!Ru && Ru.name === uu.name
    }

    function OE() {
      return Xu.gameBridge.latest("inventory")
    }

    function vE(uu, Ru, yu) {
      return Xu.gameBridge.send("removeInventoryItem", {
        slot: uu,
        amount: Ru,
        drop: yu
      })
    }

    function aE(uu) {
      return (0, Ay.h)(uu, Xu.gameBridge.latest("itemInfo"), Xu.gameBridge.latest("stationItems").enchantable)
    }

    function fE(uu) {
      let {
        show: Ru,
        close: yu,
        canCraft: Eu,
        variation: Qu,
        inventoryItemsMoveable: mu,
        setCraftFlyAnims: Ju
      } = uu;
      (0, Du.i)("itemInfo");
      const [Nu, Vu] = (0, Ku.useState)(null), [ru, Bu] = (0, Ku.useState)(null), [xu, Su] = (0, Ku.useState)(!1), pu = (0, Ku.useRef)(null), Tu = (0, Ku.useRef)(null), Wu = (0, Ku.useRef)(null), ju = (0, Ku.useRef)(null), [Hu, du] = (0, Ku.useReducer)((uu => uu + 1), 0), bu = (0, Ku.useCallback)((() => {
        Ru && du()
      }), [Ru, du]), Cu = (0, Ku.useCallback)((() => {
        Tu.current = null, lu.current = null, bu()
      }), [bu]), ku = (0, Ku.useCallback)(((uu, Ru) => {
        Ju((yu => yu.map((yu => "ingredient" === yu.kind ? yu : yu.nV === uu ? {
          ...yu,
          nV: Ru,
          to: (0, Ay.e)(Ru)
        } : yu.nV === Ru ? {
          ...yu,
          nV: uu,
          to: (0, Ay.e)(uu)
        } : yu))))
      }), [Ju]), eu = (0, Ku.useCallback)(((uu, Ru) => {
        const yu = Lu.current;
        if (yu.x = uu, yu.y = Ru, pu.current) !zu.current.isTouch || zu.current.itemBeingDragged && !lu.current ? (pu.current.style.transform = `translate(${yu.x}px, ${yu.y}px)`, Su(zu.current.isTouch && !lu.current)) : (pu.current.style.transform = "translate(0.5rem, 0.5rem)", Su(!0));
        else if (ju.current) {
          const yu = ju.current;
          let Eu = uu + 10,
            Ku = Ru + 10;
          const Qu = yu.offsetWidth,
            mu = yu.offsetHeight;
          Eu + Qu > window.innerWidth && (Eu = uu - Qu - 10), Ku + mu > window.innerHeight && (Ku = Ru - mu - 10), Eu < 0 && (Eu = 0), Ku < 0 && (Ku = 0), ju.current.style.transform = `translate(${Eu}px, ${Ku}px)`
        }
      }), []), Mu = (0, Ku.useCallback)((uu => (Ru, yu, Eu) => {
        if (Vu(Ru && void 0 !== uu ? uu : null), Ru) {
          if (void 0 === uu && !yu) return void(0, iE.b)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== uu) {
            var Ku;
            const Ru = OE();
            let yu;
            if (yu = uu === My.h ? Wu.current ? (0, Ay.k)(Ru, Wu.current.idx) : null : (0, Ay.k)(Ru, uu), !yu) return void Bu(null);
            if ((null === (Ku = Wu.current) || void 0 === Ku ? void 0 : Ku.idx) === uu) {
              if (0 === (0, Ay.d)(yu) - Wu.current.amount) return void Bu(null)
            }
            Bu(aE(yu))
          } else Bu({
            name: yu.name,
            desc: yu.desc,
            fontStyle: "normal"
          })
        } else Bu(null);
        Eu && setTimeout((() => {
          eu(Eu.pageX, Eu.pageY)
        }), 0)
      }), [eu]), Iu = (0, Ku.useCallback)(((uu, Ru) => {
        const yu = Xu.gameBridge.send("moveInventoryItem", {
          from: Tu.current.idx,
          to: uu,
          amount: Ru
        });
        return yu ? (Tu.current.amount -= Ru, Tu.current.amount <= 0 && Cu()) : console.error("moveInventoryItem failed"), yu
      }), [Cu]), Gu = (0, Ku.useCallback)(((uu, Ru) => {
        const yu = Wu.current,
          Eu = null === yu || void 0 === yu ? void 0 : yu.idx;
        yu && (yu.idx = function(uu, Ru, yu) {
          return uu === Ru ? yu : uu === yu ? Ru : uu
        }(Eu, uu, Ru));
        const Ku = Xu.gameBridge.send("swapInventorySlots", {
          a: uu,
          b: Ru
        });
        return Ku ? ku(uu, Ru) : yu && (yu.idx = Eu), Ku
      }), [ku]), Uu = (0, Ku.useCallback)(((uu, Ru, yu, Eu) => {
        const Ku = Xu.gameBridge.send("quickMoveInventoryItem", {
          slot: yu,
          start: uu,
          end: Ru,
          amount: Eu
        });
        null !== Ku && ku(yu, Ku)
      }), [ku]), nu = (0, Ku.useCallback)(((uu, Ru) => {
        var Ku;
        ((uu, Ru, yu) => {
          const Eu = uu - (yu - LE.e.length);
          return !(!Ru || Eu < 0 || Eu >= LE.e.length) && (0, Au.Fb)(Ru) !== LE.e[Eu]
        })(Ru, null === (Ku = Tu.current) || void 0 === Ku ? void 0 : Ku.name, OE().player.length) || (oE({
          e: uu,
          idx: Ru,
          readInventory: OE,
          itemInfo: Xu.gameBridge.latest("itemInfo"),
          draggedInfoRef: Tu,
          specialItemRef: Wu,
          moveAmtIntoSlot: Iu,
          swapSlots: Gu,
          moveIntoSlots: Uu,
          removeItem: vE,
          removeDraggedInfoRef: Cu,
          close: yu,
          canCraft: Eu,
          variation: Qu
        }), bu())
      }), [Eu, yu, Iu, Uu, Cu, Gu, Qu, bu]), su = (0, Ku.useRef)(0), tu = (0, Ku.useRef)(null), lu = (0, Ku.useRef)(null), gu = (0, Ku.useRef)(null), cu = (0, Ku.useRef)(new Set), Lu = (0, Ku.useRef)({
        x: 0,
        y: 0
      }), zu = (0, Ku.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), Fu = (0, Ku.useCallback)((() => (gu.current = null, zu.current.itemBeingDragged = !1, clearTimeout(tu.current), !!lu.current && (lu.current = null, bu(), !0))), [bu]);
      (0, Ku.useEffect)((() => {
        Fu(), cu.current.clear()
      }), [Ru]);
      const wu = uu => void 0 !== uu && (cu.current.has(uu) || null !== gu.current && uu !== gu.current),
        Zu = uu => {
          zu.current.isTouch = (0, Ay.t)(uu)
        },
        hu = (0, Ku.useCallback)((uu => Ru => {
          const Eu = (0, Ay.t)(Ru);
          if (Eu || eu(Ru.pageX, Ru.pageY), mu)
            if (wu(Ru.pointerId)) void 0 !== Ru.pointerId && cu.current.add(Ru.pointerId);
            else {
              if (Zu(Ru), Eu) {
                su.current = Ru.timeStamp, zu.current.itemBeingDragged = !0, gu.current = Ru.pointerId;
                const yu = (0, Ay.k)(OE(), uu);
                if (yu && yu.amount && yu.amount > 0) {
                  const yu = Ru.pageX,
                    Eu = Ru.pageY,
                    Ku = Lu.current.x,
                    Qu = Lu.current.y;
                  clearTimeout(tu.current), tu.current = setTimeout((() => {
                    if (Tu.current && Tu.current.idx === uu && (Math.abs(yu - Lu.current.x) < 20 && Math.abs(Eu - Lu.current.y) < 20 || Ku === Lu.current.x && Qu === Lu.current.y) && zu.current.itemBeingDragged) {
                      const uu = OE(),
                        yu = uu.creative && !uu.chest && Tu.current.idx >= ly.f.numInvenSlots && null !== (0, Ay.k)(uu, Tu.current.idx).amount ? ly.f.maxItemStackSize : Tu.current.amount;
                      lu.current = {
                        initTouchX: Ru.pageX,
                        initTouchY: Ru.pageY,
                        maxAmount: yu
                      }, Tu.current.amount = Math.ceil(Tu.current.amount / 2), pu.current.style.transform = "translate(0.5rem, 0.5rem)", Su(!0), bu()
                    }
                  }), 500)
                }
              }
              nu(Ru, uu)
            }
          else uu === My.d && (0, Ay.p)(Ru) && yu()
        }), [eu, nu, mu, yu, bu]),
        Pu = (0, Ku.useCallback)((uu => uu => {
          if (wu(uu.pointerId)) return;
          const Ru = (0, Ay.t)(uu);
          if (Zu(uu), !Fu()) {
            if (Ru && Tu.current && uu.timeStamp - su.current > 150) {
              const Ru = document.elementFromPoint(uu.clientX, uu.clientY);
              if (null !== Ru) {
                const yu = Ru.getAttribute("data-inven-idx");
                null !== yu ? nu(uu, parseInt(yu)) : Ru.classList.contains("InventoryBackgroundScreen") && nu(uu, -1)
              }
            }
            eu(uu.pageX, uu.pageY)
          }
        }), [eu, nu, Fu]);
      (0, Ku.useEffect)((() => {
        let uu;
        const yu = ["pointerup", "pointercancel"],
          Eu = uu => {
            cu.current.has(uu.pointerId) ? setTimeout((() => {
              cu.current.delete(uu.pointerId)
            }), 0) : uu.pointerId === gu.current && setTimeout((() => {
              gu.current === uu.pointerId && Fu()
            }), 0)
          };
        if (Ru) {
          for (const uu of yu) document.addEventListener(uu, Eu, !0);
          if (!zu.current.isTouch) {
            const uu = Lu.current;
            eu(uu.x, uu.y)
          }
          uu = uu => {
            uu.preventDefault(), wu(uu.pointerId) || (Zu(uu), eu(uu.pageX, uu.pageY), lu.current && uu.pointerId === gu.current && (uu => {
              if (!Tu.current) return lu.current = null, void bu();
              const {
                initTouchX: Ru,
                maxAmount: yu
              } = lu.current, Eu = (uu.pageX - Ru) * lu.current.maxAmount / 160, Ku = Math.ceil(yu / 2) + Math.ceil(Eu);
              Tu.current.amount = Math.min(yu, Math.max(1, Ku)), bu()
            })(uu))
          }, document.addEventListener("pointermove", uu, !0)
        }
        return () => {
          document.removeEventListener("pointermove", uu, !0);
          for (const uu of yu) document.removeEventListener(uu, Eu, !0)
        }
      }));
      const iu = (0, Ku.useCallback)((() => {
          if (Tu.current) {
            const uu = (0, Ay.k)(OE(), Tu.current.idx);
            (!qE(Tu.current, uu) || uu.amount < Tu.current.amount) && Cu()
          }
        }), [Cu]),
        Yu = (0, Ku.useCallback)((() => {
          const uu = Tu.current;
          if (uu) {
            const Ru = (0, Ay.k)(OE(), uu.idx);
            qE(uu, Ru) && (uu.attributes = Ru.attributes)
          }
        }), []);
      return {
        draggedDomRef: pu,
        draggedInfoRef: Tu,
        specialItemRef: Wu,
        hoverInfoDomRef: ju,
        longHoldSplitInfoRef: lu,
        currHoveredIdx: Nu,
        currHoveredDisplayInfo: ru,
        displayDraggedItemName: xu,
        forceRerenderIfVisible: bu,
        removeDraggedInfoRef: Cu,
        checkDraggedItemConsistencyWithInven: iu,
        refreshDraggedAttributes: Yu,
        swapSlots: Gu,
        getPointerDownForIdx: hu,
        getPointerUpForIdx: Pu,
        getSetHovering: Mu,
        setCurrHoveredDisplayInfo: Bu,
        moveFollowerTo: eu
      }
    }
    class uK {
      constructor(uu) {
        this.snapshot = [], this.newSlots = new Set, this.update(uu, !1)
      }
      update(uu, Ru) {
        const yu = uu.map((uu => {
          var Ru;
          return uu ? {
            name: uu.name,
            amount: null !== (Ru = uu.amount) && void 0 !== Ru ? Ru : 1
          } : null
        }));
        yu.forEach(((uu, yu) => {
          const Eu = this.snapshot[yu],
            Ku = (null === uu || void 0 === uu ? void 0 : uu.name) !== (null === Eu || void 0 === Eu ? void 0 : Eu.name);
          (!uu || Ku || uu.amount < Eu.amount) && this.newSlots.delete(yu), Ru && uu && (Ku || uu.amount > Eu.amount) && this.newSlots.add(yu)
        })), this.snapshot = yu
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(uu) {
        return this.newSlots.has(uu)
      }
    }
    const RK = (uu, Ru, yu) => ({
      button: Ru,
      shiftKey: yu,
      pageX: uu.clientX,
      pageY: uu.clientY,
      clientX: uu.clientX,
      clientY: uu.clientY,
      pointerType: "mouse"
    });

    function yK(uu) {
      const [Ru, yu] = (0, Ku.useState)(uu);
      return uu && !Ru && yu(!0), (0, Ku.useEffect)((() => {
        if (Ru) return;
        let uu = !0;
        const Eu = () => {
            uu && (uu = !1, yu(!0))
          },
          Ku = "function" === typeof window.requestIdleCallback,
          Qu = Ku ? window.requestIdleCallback(Eu, {
            timeout: 2e3
          }) : void 0,
          mu = setTimeout(Eu, Ku ? 2e3 : 1e3);
        return () => {
          uu = !1, clearTimeout(mu), void 0 !== Qu && window.cancelIdleCallback(Qu)
        }
      }), [Ru]), Ru
    }
    const EK = (0, Ku.memo)((function(uu) {
      var Ru;
      let {
        show: yu,
        onOpen: Eu,
        onClose: Qu,
        variation: Ju
      } = uu;
      const ru = (0, Ku.useRef)(null),
        Bu = (0, Ku.useRef)(null),
        xu = function(uu) {
          const [Ru, yu] = (0, Ku.useState)(!0), [Eu, Qu] = (0, Ku.useState)(!1), mu = (0, Ku.useRef)(null), Ju = (0, Ku.useRef)(null), Xu = (0, Nu.g)("_shield"), Vu = (0, Ku.useRef)(null), ru = (0, Nu.g)("_health"), Bu = (0, Ku.useRef)(null);

          function xu(uu) {
            const Ru = Date.now() + uu;
            Ru < Ju.current || (yu(!1), clearTimeout(mu.current), Ju.current = Ru, mu.current = setTimeout((() => {
              yu(!0)
            }), uu))
          }
          return (0, Ku.useEffect)((() => {
            xu(Gy);
            const uu = Su.k.subscribe("requestingPlayVideoAd", (() => {
              xu(Gy)
            }));
            return () => {
              clearTimeout(mu.current), Su.k.unsubscribe(uu)
            }
          }), []), (0, Ku.useEffect)((() => {
            (Vu.current > Xu || Bu.current > ru) && xu(6e4), Vu.current = Xu, Bu.current = ru
          }), [Xu, ru]), (0, Ku.useEffect)((() => {
            let Ru = null;
            return uu ? Ru = setTimeout((() => {
              Qu(!0)
            }), 250) : Qu(!1), () => {
              clearTimeout(Ru)
            }
          }), [uu]), Ru && Eu
        }(yu);
      (0, eu.h)(jy.c, null);
      const pu = (0, jy.k)(),
        Tu = pu.some((uu => uu.panel)),
        Wu = (0, Du.h)("inventory", (uu => null !== uu.chest && (null !== uu.chest.ironChest || sE(uu.chest.numSlots)))),
        ju = yK(yu),
        Hu = yK(yu),
        [du, bu] = (0, Ku.useState)([]),
        Cu = (0, Ku.useCallback)((uu => {
          bu((Ru => Ru.filter((Ru => Ru.id !== uu))))
        }), []),
        ku = (0, Ku.useRef)(null),
        Mu = (0, Ku.useRef)(0),
        Iu = (0, Ku.useCallback)((() => {
          ku.current && (Mu.current = ku.current.scrollTop), Qu()
        }), [Qu]),
        Gu = (0, Nu.g)("inventoryItemsMoveable"),
        Uu = (0, Nu.g)("canCraft"),
        {
          clientEscMenuOptions: nu
        } = (0, zu.j)(["clientEscMenuOptions"]),
        su = (0, Ku.useRef)(null);
      su.current || (su.current = new uK(Xu.gameBridge.latest("inventory").player));
      const lu = su.current,
        {
          draggedDomRef: gu,
          draggedInfoRef: cu,
          specialItemRef: Lu,
          hoverInfoDomRef: Fu,
          longHoldSplitInfoRef: wu,
          currHoveredIdx: Zu,
          currHoveredDisplayInfo: hu,
          displayDraggedItemName: Pu,
          forceRerenderIfVisible: iu,
          removeDraggedInfoRef: Yu,
          checkDraggedItemConsistencyWithInven: ou,
          refreshDraggedAttributes: qu,
          swapSlots: Ou,
          getPointerDownForIdx: vu,
          getPointerUpForIdx: au,
          getSetHovering: fu,
          setCurrHoveredDisplayInfo: uR,
          moveFollowerTo: RR
        } = fE({
          show: yu,
          close: Iu,
          canCraft: Uu,
          variation: Ju,
          inventoryItemsMoveable: Gu,
          setCraftFlyAnims: bu
        });
      (0, Ku.useEffect)((() => {
        const uu = !yu && null !== Xu.gameBridge.latest("inventory").chest;
        if (uu && Xu.gameBridge.send("closeChest", null), yu || (lu.clearMarks(), fu(null)(!1)), uu) {
          ky.d.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [yu]), (0, Du.d)("chestToggled", (uu => {
        if (uu ? Eu() : yu && Iu(), uu) {
          ky.d.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const yR = (0, YR.k)();
      (0, Du.d)("inventory", (uu => {
        let {
          player: Ru
        } = uu;
        var Eu, Ku, Qu;
        (lu.update(Ru, !yu && yR.shown), Lu.current) && (Lu.current = (Ku = Lu.current, Qu = null !== (Eu = Ru[Lu.current.idx]) && void 0 !== Eu ? Eu : null, qE(Ku, Qu) ? (Ku.attributes = Qu.attributes, null !== Qu.amount && Ku.amount > Qu.amount && (Ku.amount = Qu.amount), Ku) : null));
        qu(), null !== Zu && fu(Zu)(!0), iu()
      })), (0, Ku.useEffect)((() => (Xu.gameBridge.send("setInventoryOpen", yu), () => {
        Xu.gameBridge.send("setInventoryOpen", !1)
      })), [yu]);
      const ER = (uu, Ru) => {
        if (uu === My.h) return void(uu => {
          const Ru = Lu.current;
          if (!Ru || null === (0, Ay.k)(Xu.gameBridge.latest("inventory"), Ru.idx)) return;
          const yu = uu ? Math.max(Ru.amount, 1) : 1,
            Eu = Ru.amount - yu;
          if (!Xu.gameBridge.send("removeInventoryItem", {
              slot: Ru.idx,
              amount: yu,
              drop: !0
            })) return;
          const Ku = Lu.current;
          Ku && (Ku.amount = Math.min(Ku.amount, Eu), Ku.amount <= 0 && (Lu.current = null)), iu()
        })(Ru);
        const yu = null === uu ? null : (0, Ay.k)(Xu.gameBridge.latest("inventory"), uu);
        if (null !== yu) {
          var Eu, Ku, Qu;
          const mu = Ru && null !== (Eu = yu.amount) && void 0 !== Eu ? Eu : 1;
          Xu.gameBridge.send("removeInventoryItem", {
            slot: uu,
            amount: mu,
            drop: !0
          }), uu === (null === (Ku = cu.current) || void 0 === Ku ? void 0 : Ku.idx) && (cu.current.amount -= mu, cu.current.amount <= 0 && Yu(), iu()), uu === (null === (Qu = Lu.current) || void 0 === Qu ? void 0 : Qu.idx) && (Lu.current = null, iu())
        }
      };
      (0, Du.d)("inventoryDropRequested", (uu => {
        yu && Zu !== My.h && ER(Zu, uu)
      }));
      const KR = (uu, Ru) => {
        let yu = Ru;
        if (Ru === My.h) {
          if (!Lu.current) return;
          yu = Lu.current.idx
        }
        const Eu = Ou(uu, yu);
        if (Eu && cu.current && (cu.current.idx === yu ? cu.current.idx = uu : cu.current.idx === uu && (cu.current.idx = yu)), Eu && Ru === My.h) {
          const uu = (0, Ay.k)(Xu.gameBridge.latest("inventory"), yu);
          Lu.current = uu ? {
            idx: yu,
            name: uu.name,
            attributes: uu.attributes,
            amount: uu.amount
          } : null
        }
        iu()
      };
      (0, Du.d)("numberKeyPressed", (uu => {
        null !== Zu && yu && KR(uu - 1, Zu)
      })), (0, Ku.useEffect)((() => {
        yu || (Lu.current = null, Yu(), uR(null))
      }), [yu, Yu, uR, Lu]);
      const QR = Lu.current;
      (0, Ku.useEffect)((() => {
        Zu === My.h && fu(My.h)(!0)
      }), [QR, Zu, fu]);
      const mR = () => {
        ou(), qu(), iu()
      };
      (0, Du.d)("chestRefreshed", mR), (0, Du.d)("inventorySynced", mR);
      const [JR, NR] = (0, Ku.useState)(new Map), XR = null !== (Ru = JR.get(Ju)) && void 0 !== Ru ? Ru : null, VR = (uu, Ru) => {
        NR((yu => {
          const Eu = yu.get(uu);
          return Eu && Eu.name === Ru.name && Eu.KV === Ru.KV ? yu : new Map(yu).set(uu, Ru)
        }))
      };
      (0, eu.e)("craftingRecipesEdited", (() => {
        iu()
      })), (0, eu.e)(KE.e, (uu => {
        let {
          variation: Ru,
          itemName: yu
        } = uu;
        VR(Ru, {
          name: yu,
          KV: 0
        })
      }));
      const [rR, BR] = (0, Ku.useState)(null), [SR, pR] = (0, Ku.useState)(null);
      (0, Du.d)("enchantingTableOpened", (uu => {
        let {
          position: Ru,
          blockName: yu
        } = uu;
        BR(Ru), pR(yu)
      }));
      const [TR, WR] = (0, Ku.useState)(""), [jR, HR] = (0, Ku.useState)(null);
      (0, Ku.useEffect)((() => {
        yu && ku.current && (ku.current.scrollTop = Mu.current)
      }), [yu]);
      return (uu => {
        const Ru = (0, Ku.useRef)(uu);
        Ru.current = uu, (0, Ku.useEffect)((() => {
          if (!uu.show) return;
          const yu = (uu, yu, Eu, Ku) => {
              const {
                getPointerDownForIdx: Qu,
                getPointerUpForIdx: mu
              } = Ru.current;
              Qu(uu)(RK(yu, Eu, Ku)), mu(uu)(RK(yu, Eu, Ku))
            },
            Eu = {
              primary: (uu, Ru) => {
                yu(uu, Ru, 0, !1)
              },
              secondary: (uu, Ru) => {
                yu(uu, Ru, 2, !1)
              },
              quickMove: (uu, Ru) => {
                yu(uu, Ru, 0, !0)
              },
              dropHeld: (uu, yu) => {
                Ru.current.getPointerDownForIdx(My.d)(RK(yu, uu ? 0 : 2, !1))
              },
              dropSlot: (uu, yu) => {
                Ru.current.dropFromIdx(uu, yu)
              },
              swapWithHotbar: (uu, yu) => {
                Ru.current.swapWithHotbar(uu, yu)
              },
              cancel: () => {
                Ru.current.removeDraggedInfoRef()
              },
              isHolding: () => !!Ru.current.draggedInfoRef.current,
              hasItemAt: uu => {
                const {
                  draggedInfoRef: yu,
                  specialItemRef: Eu
                } = Ru.current;
                if (uu === My.h) return !!Eu.current;
                const Ku = (0, Ay.k)(Xu.gameBridge.latest("inventory"), uu);
                return !!Ku && (0, wy.d)(uu, (0, Ay.d)(Ku), [yu.current, Eu.current]).shown
              },
              hover: (uu, yu) => {
                const {
                  moveFollowerTo: Eu,
                  getSetHovering: Ku
                } = Ru.current;
                Eu(yu.clientX, yu.clientY), Ku(null !== uu && void 0 !== uu ? uu : void 0)(null !== uu, void 0, {
                  pageX: yu.clientX,
                  pageY: yu.clientY
                })
              },
              moveTo: uu => {
                Ru.current.moveFollowerTo(uu.clientX, uu.clientY)
              },
              close: () => {
                Ru.current.close()
              }
            };
          return (0, Hy.o)(Eu)
        }), [uu.show])
      })({
        show: yu,
        close: Iu,
        draggedInfoRef: cu,
        specialItemRef: Lu,
        getPointerDownForIdx: vu,
        getPointerUpForIdx: au,
        getSetHovering: fu,
        moveFollowerTo: RR,
        removeDraggedInfoRef: Yu,
        dropFromIdx: ER,
        swapWithHotbar: KR
      }), (0, Ku.useEffect)((() => {
        Su.k.Op("inventoryDraggedItemUpdated", {
          draggedInfo: cu.current,
          specialItemInfo: Lu.current,
          setHovered: fu,
          pointerDown: vu,
          pointerUp: au,
          variation: Uu ? Ju : void 0,
          craftFlyAnims: du
        })
      })), (0, Vu.jsxs)(tu.c, {
        show: yu,
        style: {
          touchAction: yu ? "none" : void 0
        },
        children: [cu.current && (0, Vu.jsx)(ny, {
          draggedInfo: cu.current,
          toAddRef: gu
        }), cu.current && Pu && (0, Vu.jsx)(sy, {
          className: "DraggedInvenItemName",
          displayInfo: aE(cu.current),
          domRef: null
        }), !cu.current && hu && (0, Vu.jsx)(sy, {
          displayInfo: hu,
          domRef: Fu
        }), wu.current && cu.current && (0, Vu.jsx)(ty, {
          info: wu.current,
          draggedInfo: cu.current
        }), du.map((uu => (0, Vu.jsx)(Dy.b, {
          anim: uu,
          onComplete: Cu
        }, uu.id))), (0, Vu.jsx)(mu.e, {
          show: yu,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: Iu,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: vu(My.d),
          pointerUp: au(My.d),
          doGameplayStartStopOnShow: !0
        }), ju && (0, Vu.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, Vu.jsx)("div", {
            ref: ru,
            className: "InventoryAdOuter",
            children: (0, Vu.jsx)(ey.c, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: ru
              },
              verticalAlign: "start",
              showing: yu && xu,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, Vu.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, Vu.jsxs)("div", {
              className: xR()("Inventory", {
                WithPanelButtons: Tu,
                WideChestOpen: Wu
              }),
              children: [(0, Vu.jsx)("div", {
                className: "InventoryFiller"
              }), (0, Vu.jsx)(Cy, {
                show: yu,
                buttons: pu
              }), (0, Vu.jsxs)("div", {
                className: "InvenBody",
                children: [(0, Vu.jsx)(cE, {
                  variation: Ju,
                  canCraft: Uu,
                  show: yu,
                  creativeMounted: Hu,
                  specialItemRef: Lu,
                  draggedInfo: cu.current,
                  getSetHovering: fu,
                  getPointerDownForIdx: vu,
                  getPointerUpForIdx: au,
                  enchantingTablePosition: rR,
                  enchantingTableBlockName: SR,
                  selectedCraftable: XR,
                  dispatchSelectedCraftable: uu => {
                    VR(Ju, uu)
                  },
                  creativeScrollDiv: ku,
                  creativeSearchVal: TR,
                  setCreativeSearchVal: WR,
                  creativeCategory: jR,
                  setCreativeCategory: HR,
                  onCraft: function(uu, Ru) {
                    let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (ou(), (uu || yu.length > 0) && bu((Ru => {
                        const Eu = [...Ru],
                          Ku = Ru.filter((uu => "ingredient" === uu.kind)).length;
                        for (const uu of yu.slice(0, Math.max(0, 24 - Ku))) Eu.push({
                          id: (0, Dy.e)(),
                          ...uu,
                          to: uu.to
                        });
                        return uu && Eu.push({
                          id: (0, Dy.e)(),
                          ...uu,
                          to: (0, Ay.e)(uu.nV)
                        }), Eu
                      })), null !== Ru) {
                      var Eu;
                      const uu = Xu.gameBridge.latest("inventory");
                      (0, Au.Fb)(null === (Eu = (0, Ay.k)(uu, Ru)) || void 0 === Eu ? void 0 : Eu.name) ? vu(Ru)({
                        button: 0,
                        shiftKey: !0
                      }): Ou(Ru, uu.selectedSlot)
                    }
                  }
                }), (0, Vu.jsx)(PE, {
                  draggedInfo: cu.current,
                  specialItemInfo: Lu.current,
                  craftFlyAnims: du,
                  getSetHovering: fu,
                  getPointerDownForIdx: vu,
                  getPointerUpForIdx: au,
                  variation: Ju,
                  canCraft: Uu,
                  isNewSlot: uu => nu.showNewItemIndicator && lu.isNew(uu)
                })]
              })]
            }), (0, Vu.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, Vu.jsx)("div", {
                ref: Bu,
                className: "InventoryAd",
                children: (0, Vu.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var KK = yu(1389),
      QK = yu(145);
    const mK = (0, Ku.memo)((function(uu) {
      let {
        show: Ru,
        onOpen: yu,
        onClose: Eu
      } = uu;
      const Qu = (0, Ku.useRef)(0),
        Ju = () => (0, KK.g)() && !(0, KK.n)() && Qu.current <= 2;
      Ru = Ju() && Ru;
      const Nu = () => {
        Qu.current++, Eu()
      };
      (0, eu.e)("ctrlCrouchWithoutFullscreen", (() => {
        Ju() && yu()
      })), (0, eu.e)("displaymodeFullscreenChange", (uu => {
        Ru && uu && Nu()
      }));
      const Xu = "crazygames" === QK.v;
      return (0, Vu.jsx)(mu.e, {
        close: Nu,
        escDoesExit: !0,
        show: Ru,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, Vu.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, Vu.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), Xu && (0, Vu.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, Vu.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, Vu.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!Xu && (0, Vu.jsx)(xu.l, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, KK.t)(), Nu()
              },
              children: (0, Vu.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, Vu.jsx)(xu.F, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                Nu()
              },
              children: (0, Vu.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var JK = yu(3421),
      NK = yu(3448),
      XK = yu(1311),
      VK = yu(3398),
      rK = yu(1320),
      BK = yu(36394),
      xK = yu(3411),
      SK = yu(3415);

    function pK(uu, Ru) {
      return (0, BK.i)(!0, uu, Ru) ? () => {
        !async function(uu) {
          await VK.d.refresh();
          const {
            data: Ru,
            failed: yu
          } = VK.d.getState();
          if (null === Ru || yu) return;
          const Eu = VK.d.getExclusion(uu);
          if ("blocked" === Eu) return;
          const Ku = null === Eu;
          XK.NotificationProvider.showCustomPopup({
            body: Ru => {
              const yu = yu => ({
                text: xK.g[yu].text,
                onClick: () => {
                  Ru(), (0, SK.g)(yu, uu, null)
                }
              });
              return (0, Vu.jsx)(rK.i, {
                title: Ku ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: uu
                  }
                },
                secondary: Ku ? yu("ignore") : void 0,
                confirm: yu("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: Ru
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(uu)
      } : null
    }
    yu(3434);
    const TK = (0, Ku.memo)((function(uu) {
      let {
        show: Ru,
        onOpen: yu,
        onClose: Eu
      } = uu;
      const [Qu, Ju] = (0, Ku.useState)(""), [Nu, ru] = (0, Ku.useState)(""), [Bu, xu] = (0, Ku.useState)(null), [Su, pu] = (0, Ku.useState)(null), Tu = (0, Du.i)("hiddenPlayerNames"), Wu = {
        kind: "worldCodeLine",
        onSubmit: (uu, Ru) => {
          Eu(), Xu.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: Su,
            vQ: uu,
            details: Ru
          })
        }
      }, ju = {
        kind: "player",
        shownPlayerName: (0, RR.e)(Qu, Tu),
        onSubmit: (uu, Ru) => {
          Eu(), (0, NK.c)({
            playerId: Nu,
            playerName: Qu,
            chatMsgId: Su,
            policyId: uu,
            details: Ru,
            onAccepted: pK(Qu, Tu)
          })
        }
      };
      return (0, eu.e)("OpenReportMenu", (uu => {
        let {
          playerEId: Ru,
          playerName: Eu,
          Dm: Ku,
          serverChatMsgId: Qu
        } = uu;
        ru(Ru), Ju(Eu), xu(Ku), pu(Qu), yu()
      })), (0, Vu.jsx)(mu.e, {
        show: Ru,
        close: Eu,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, Vu.jsx)("div", {
          className: "ReportPanel",
          children: Ru && (0, Vu.jsx)(JK.d, {
            reported: null === Nu ? Wu : ju,
            chatMessage: Bu,
            inGame: !0,
            onCancel: Eu
          })
        })
      })
    }));
    var WK = yu(36615);
    const jK = (0, Ku.memo)((function(uu) {
      let {
        show: Ru,
        onOpen: yu,
        onClose: Eu
      } = uu;
      const {
        t: Qu
      } = (0, qu.E)(), [Ju, Nu] = (0, Ku.useState)(null), [ru, Bu] = (0, Ku.useState)(0);
      (0, eu.e)("OpenDiscordReportBox", (uu => {
        Xu.gameBridge.send("requestDiscordReportKey", uu), Bu(0), yu()
      }));
      const Su = () => {
        Eu(), Nu(null), Bu(0)
      };
      return (0, eu.e)("setDiscordReportKey", (uu => {
        Nu(uu)
      })), (0, Vu.jsx)(mu.e, {
        show: Ru,
        close: Su,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, Vu.jsx)("div", {
          className: "ReportPanel",
          children: (0, Vu.jsx)(rK.i, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(WK.c, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: Su
            },
            padStartsOn: "cancel",
            children: (0, Vu.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, Vu.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== Ju && void 0 !== Ju ? Ju : Qu("report:loadingReportKey")
              }), (0, Vu.jsx)(xu.e, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(Ju).catch((uu => {
                    console.error("Failed to copy report key:", uu)
                  })), Bu(Date.now())
                },
                disabled: Date.now() - ru < 1e3 || !Ju,
                children: Date.now() - ru < 1e3 ? Qu("general:copied") : Qu("general:copy")
              })]
            })
          })
        })
      })
    }));
    var HK = yu(1250);
    const dK = {
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
      bK = (0, Ku.memo)((function(uu) {
        let {
          show: Ru,
          onOpen: yu,
          onClose: Eu
        } = uu;
        const [Qu, Ju] = (0, Ku.useState)(null), Nu = (0, Ku.useRef)(0), ru = (0, Ku.useRef)(null), {
          t: Bu
        } = (0, qu.E)();
        (0, eu.e)("EditCustomLobbyBlock", (uu => {
          let {
            pos: Ru
          } = uu;
          Ju(Ru), null !== Ru && yu(), ru.current.scrollTo(0, Nu.current)
        }));
        const xu = uu => {
          Xu.gameBridge.send("setCustomLobbyBlock", {
            pos: Qu,
            blockName: uu
          }), Eu()
        };
        return (0, Vu.jsx)(mu.e, {
          className: "CustomLobbyBlockEditorOuter",
          close: Eu,
          escDoesExit: !0,
          show: Ru,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, Vu.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: ru,
            onScroll: () => {
              Nu.current = ru.current.scrollTop
            },
            children: (0, Vu.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(dK).map((uu => {
                let [Ru, yu] = uu;
                return (0, Vu.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, Vu.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: Bu(Ru)
                  }), (0, Vu.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(yu).map((uu => {
                      let [Ru, {
                        tooltip: yu,
                        blocks: Eu
                      }] = uu;
                      return (0, Vu.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, Vu.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [Bu(Ru), (0, Vu.jsx)(Yu.e, {
                            hoverInfo: Bu(yu),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, Vu.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: Eu.map((uu => (0, Vu.jsx)(CK, {
                            blockName: uu,
                            selectBlock: xu
                          }, uu)))
                        })]
                      }, Ru)
                    }))
                  })]
                }, Ru)
              }))
            })
          })
        })
      })),
      CK = (0, Ku.memo)((function(uu) {
        var Ru;
        let {
          blockName: yu,
          selectBlock: Eu
        } = uu;
        const Ku = (0, HE.b)(yu),
          Qu = null !== (Ru = void 0 === Ku ? void 0 : (0, jE.displayNameOf)(Ku)) && void 0 !== Ru ? Ru : yu,
          mu = void 0 === Ku ? void 0 : (0, jE.descriptionOf)(Ku);
        return (0, Vu.jsx)(Yu.i, {
          tooltipInner: (0, Vu.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, Vu.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, Vu.jsx)(ku.d, {
                text: Qu
              })
            }), mu && (0, Vu.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, Vu.jsx)(ku.d, {
                text: mu
              })
            })]
          }),
          children: (0, Vu.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => Eu(yu),
            children: (0, Vu.jsx)(by.c, {
              itemName: yu,
              amount: 1
            })
          })
        }, yu)
      }));
    var kK = yu(2780),
      eK = yu(4042),
      AK = yu(9098);

    function DK() {
      const uu = (0, Du.i)("itemInfo");
      return (0, Ku.useMemo)((() => function(uu) {
        return {
          getDefaultItemStat(Ru, yu) {
            var Eu;
            const Ku = uu[Ru];
            return "description" === yu ? null === Ku || void 0 === Ku ? void 0 : Ku.description : null !== (Eu = null === Ku || void 0 === Ku ? void 0 : Ku.displayName) && void 0 !== Eu ? Eu : Ru
          }
        }
      }(uu)), [uu])
    }
    const MK = (0, Ku.memo)((function(uu) {
        var Ru, yu, Eu, Qu, Ju, Nu, Xu, ru, Bu, xu, Su, pu, Wu, ju, Hu, du, bu, Cu, ku, Au, Du, Mu, Iu;
        let {
          togglePointerLock: Gu,
          show: Uu,
          onOpen: nu,
          onClose: su
        } = uu;
        const {
          t: tu
        } = (0, qu.E)(), lu = DK(), gu = (0, Ku.useRef)(null), cu = (0, Ku.useRef)(eK.b.MobHungerLevel.Hungry), Lu = (0, Ku.useRef)(null), zu = (0, kK.c)(), Fu = (0, Ku.useRef)(null), wu = (0, Ku.useRef)(null), Zu = gu.current;
        (0, Ku.useEffect)((() => {
          if (!Uu) return;
          const uu = AK.g.openPet(Fu.current);
          return wu.current = uu, () => {
            uu.close(), wu.current = null
          }
        }), [Uu]), (0, Ku.useEffect)((() => {
          Uu && Zu && wu.current.show(function(uu) {
            var Ru;
            let {
              mobType: yu,
              mobSettings: Eu
            } = uu;
            return {
              mobType: yu,
              variation: null !== (Ru = Eu.variation) && void 0 !== Ru ? Ru : "default",
              metaInfo: Eu.metaInfo,
              tamed: !(0, nE.E)(Eu.ownerDbId)
            }
          }(Zu))
        }), [Uu, Zu]), (0, Ku.useEffect)((() => {
          const uu = () => {
            var uu;
            const Ru = eK.b.getMobHungerLevel(null === (uu = gu.current) || void 0 === uu ? void 0 : uu.mobSettings.petInfo.lastFedAt);
            if (Ru !== cu.current && (cu.current = Ru, zu()), Lu.current) {
              var yu;
              const uu = Date.now(),
                Ru = eK.b.getNextStateAt(null === (yu = gu.current) || void 0 === yu ? void 0 : yu.mobSettings.petInfo.lastFedAt);
              let Eu = Math.floor((Ru - uu) / 1e3),
                Ku = "";
              if (Eu > 3600) {
                Ku += Math.floor(Eu / 60 / 60).toString().padStart(2, "0"), Ku += ":", Eu %= 3600
              }
              const Qu = Eu % 60;
              Ku += Math.floor(Eu / 60).toString().padStart(2, "0"), Ku += ":", Ku += Qu.toString().padStart(2, "0"), Lu.current.textContent = Ku
            }
          };
          uu();
          const Ru = setInterval(uu, 250);
          return () => {
            clearInterval(Ru)
          }
        }), [Zu, zu]), (0, eu.e)("showPetUi", (uu => {
          let {
            mobType: Ru,
            mobSettings: yu
          } = uu;
          gu.current = {
            mobType: Ru,
            mobSettings: yu
          }, Uu || nu()
        }));
        const hu = null === (Ru = gu.current) || void 0 === Ru ? void 0 : Ru.mobSettings.health,
          Pu = null === (yu = gu.current) || void 0 === yu ? void 0 : yu.mobSettings.maxHealth,
          iu = eK.b.getFriendshipLevelInfo(null !== (Eu = null === (Qu = gu.current) || void 0 === Qu ? void 0 : Qu.mobSettings.petInfo.friendshipPoints) && void 0 !== Eu ? Eu : 0);
        return (0, Vu.jsx)(mu.e, {
          className: "PetUIOuter",
          close: su,
          escDoesExit: !0,
          show: Uu,
          togglePointerLock: Gu,
          forcePointerUnlock: Uu,
          globallyUniqueKey: "PetUI",
          children: (0, Vu.jsx)("div", {
            className: "PetUI",
            children: (0, Vu.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, Vu.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, Vu.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (Ju = null === (Nu = gu.current) || void 0 === Nu ? void 0 : Nu.mobSettings.name) && void 0 !== Ju ? Ju : "Your Pet"
                }), (0, Vu.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: Fu
                })]
              }), (0, Vu.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, nE.E)(null === (Xu = gu.current) || void 0 === Xu ? void 0 : Xu.mobSettings.petInfo.friendshipPoints) && (0, Vu.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, Vu.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: tu("mobAiPlugin:friendshipTitle")
                  }), (0, Vu.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: eK.b.getIconsFromFriendshipPoints(null !== (ru = gu.current.mobSettings.petInfo.friendshipPoints) && void 0 !== ru ? ru : 0).map(((uu, Ru) => (0, Vu.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, Vu.jsx)(by.c, {
                        itemName: uu,
                        amount: 1
                      })
                    }, Ru)))
                  }), (0, Vu.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, Vu.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, Vu.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${iu.totalPointsForNextLevel>0?Math.max(iu.pointsIntoCurrentLevel/iu.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, Vu.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: iu.totalPointsForNextLevel > 0 ? ` ${Math.ceil(iu.pointsIntoCurrentLevel)}/${Math.ceil(iu.totalPointsForNextLevel)}` : Math.ceil(iu.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, Vu.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, Vu.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: tu("mobAiPlugin:hungerTitle")
                  }), (0, Vu.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: eK.b.hungerLevelIcons[cu.current].map(((uu, Ru) => (0, Vu.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, Vu.jsx)(by.c, {
                        itemName: uu,
                        amount: 1
                      })
                    }, Ru)))
                  }), (0, Vu.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [tu(eK.b.hungerLevelTranslations[cu.current].translationKey), cu.current !== eK.b.MobHungerLevel.Starving && !(0, nE.E)(null === (Bu = gu.current) || void 0 === Bu ? void 0 : Bu.mobSettings.petInfo.lastFedAt) && (0, Vu.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [tu("mobAiPlugin:nextFeedIn", {
                        state: tu(eK.b.hungerLevelTranslations[cu.current + 1].translationKey)
                      }), ":", " ", (0, Vu.jsx)("span", {
                        ref: Lu
                      })]
                    })]
                  })]
                }), (0, Vu.jsx)(Yu.i, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Vu.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: tu("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, Vu.jsxs)("div", {
                    className: xR()("PetUIQuickStatsItem", {
                      Disabled: (0, nE.E)(hu) || (0, nE.E)(Pu)
                    }),
                    children: [(0, Vu.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Vu.jsx)(by.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, Vu.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, nE.E)(hu) || (0, nE.E)(Pu) ? "" : (0, Vu.jsxs)(Vu.Fragment, {
                        children: [Math.ceil(hu), (0, Vu.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(Pu)]
                        })]
                      })
                    })]
                  })
                }), (0, Vu.jsx)(Yu.i, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Vu.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: tu("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, Vu.jsxs)("div", {
                    className: xR()("PetUIQuickStatsItem", {
                      Disabled: (0, nE.E)(null === (xu = gu.current) || void 0 === xu ? void 0 : xu.mobSettings.attackDamage) || gu.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, Vu.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Vu.jsx)(by.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, Vu.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Su = gu.current) || void 0 === Su ? void 0 : Su.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, Vu.jsx)(Yu.i, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Vu.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: tu("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, Vu.jsxs)("div", {
                    className: xR()("PetUIQuickStatsItem", {
                      Disabled: (0, nE.E)(null === (pu = gu.current) || void 0 === pu ? void 0 : pu.mobSettings.secondaryAttackDamage) || gu.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, Vu.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Vu.jsx)(by.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, Vu.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Wu = gu.current) || void 0 === Wu ? void 0 : Wu.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, Vu.jsx)(Yu.i, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Vu.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: tu("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, Vu.jsxs)("div", {
                    className: xR()("PetUIQuickStatsItem", {
                      Disabled: (0, nE.E)(null === (ju = gu.current) || void 0 === ju ? void 0 : ju.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, Vu.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Vu.jsx)(by.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, Vu.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (Hu = null === (du = gu.current) || void 0 === du || null === (bu = du.mobSettings.baseRunningSpeed) || void 0 === bu ? void 0 : bu.toFixed(2)) && void 0 !== Hu ? Hu : ""
                    })]
                  })
                }), (0, Vu.jsx)(Yu.i, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Vu.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: tu("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, Vu.jsxs)("div", {
                    className: xR()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (Cu = gu.current) || void 0 === Cu ? void 0 : Cu.mobSettings.metaInfo)
                    }),
                    children: [(0, Vu.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Vu.jsx)(by.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, Vu.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (ku = gu.current) || void 0 === ku ? void 0 : ku.mobSettings.metaInfo) ? (0, Vu.jsx)(Tu.c, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, nE.E)(null === (Au = gu.current) || void 0 === Au ? void 0 : Au.mobSettings.tameInfo) && (0, Vu.jsxs)(Vu.Fragment, {
                  children: [(0, Vu.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, Vu.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Vu.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Vu.jsx)(GK, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: eK.b.feedTextColours[eK.b.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Vu.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, Vu.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: gu.current.mobSettings.petInfo.superlikedFoodKnown ? (0, Vu.jsx)(IK, {
                            food: gu.current.mobSettings.petInfo.superlikedFood
                          }) : (0, Vu.jsx)(GK, {
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
                    }), (0, Vu.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Vu.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Vu.jsx)(GK, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: eK.b.feedTextColours[eK.b.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Vu.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Du = gu.current.mobSettings.tameInfo.likedFoods) || void 0 === Du ? void 0 : Du.filter((uu => !gu.current.mobSettings.petInfo.superlikedFoodKnown || uu !== gu.current.mobSettings.petInfo.superlikedFood)).map((uu => (0, Vu.jsx)(IK, {
                          food: uu
                        }, uu)))
                      })]
                    }), (0, Vu.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Vu.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Vu.jsx)(GK, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: eK.b.feedTextColours[eK.b.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Vu.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Mu = gu.current.mobSettings.tameInfo.neutralFoods) || void 0 === Mu ? void 0 : Mu.map((uu => (0, Vu.jsx)(IK, {
                          food: uu
                        }, uu)))
                      })]
                    }), (0, Vu.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Vu.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Vu.jsx)(GK, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: eK.b.feedTextColours[eK.b.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Vu.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Iu = gu.current.mobSettings.tameInfo.dislikedFoods) || void 0 === Iu ? void 0 : Iu.map((uu => (0, Vu.jsx)(IK, {
                          food: uu
                        }, uu)))
                      })]
                    })]
                  }), gu.current.mobSettings.tameInfo.levelUpBonuses && (0, Vu.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: eK.b.MAX_LEVEL + 1
                    }).map(((uu, Ru) => {
                      const yu = Ru;
                      if (0 === yu) return null;
                      const Eu = gu.current.mobSettings.tameInfo.levelUpBonuses[yu],
                        Ku = eK.b.getBonusDisplayInfo(lu, gu.current.mobSettings, gu.current.mobType, Eu);
                      return (0, Vu.jsxs)("div", {
                        className: xR()("PetUIFeedDropContainer", {
                          Selected: yu === eK.b.getFriendshipLevelInfo(gu.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, Vu.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: yu
                          }).map(((uu, Ru) => (0, Vu.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, Vu.jsx)(by.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${yu}-${Ru}`)))
                        }), (0, Vu.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: Ku && (0, Vu.jsx)(GK, {
                            icon: Ku.icon,
                            displayName: Ku.displayName,
                            description: Ku.description
                          })
                        })]
                      }, yu)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      IK = (0, Ku.memo)((function(uu) {
        let {
          food: Ru,
          includeDescription: yu = !1
        } = uu;
        const Eu = DK(),
          Ku = Eu.getDefaultItemStat(Ru, "displayName"),
          Qu = Eu.getDefaultItemStat(Ru, "description");
        return (0, Vu.jsx)(GK, {
          icon: Ru,
          displayName: Ku,
          description: yu ? Qu : null
        })
      })),
      GK = (0, Ku.memo)((function(uu) {
        let {
          icon: Ru,
          displayName: yu,
          description: Eu,
          tintColor: Ku,
          className: Qu = "PetUIFoodItem"
        } = uu;
        return (0, Vu.jsx)(Yu.i, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, Vu.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, Vu.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, Vu.jsx)(ku.d, {
                text: yu
              })
            }), Eu && (0, Vu.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, Vu.jsx)(ku.d, {
                text: Eu
              })
            })]
          }),
          children: (0, Vu.jsx)("div", {
            className: Qu,
            children: (0, Vu.jsx)(by.c, {
              itemName: Ru,
              amount: 1,
              tintColor: Ku
            })
          })
        })
      }));
    var UK = yu(3574),
      nK = yu(1110),
      sK = yu(1215),
      tK = yu(36632),
      lK = yu(36625),
      gK = yu(1001),
      cK = yu(2278);

    function LK(uu) {
      let {
        peers: Ru
      } = uu;
      const [yu, Eu] = (0, Ku.useState)(null), Qu = (0, Du.i)("players");
      return (0, Vu.jsx)("div", {
        className: "CodeEditorPresence",
        children: Ru.map((uu => {
          var Ru, Ku;
          const mu = null !== (Ru = null === (Ku = Qu.byId[uu.playerId]) || void 0 === Ku ? void 0 : Ku.cosmetics) && void 0 !== Ru ? Ru : {};
          return (0, Vu.jsxs)("div", {
            className: xR()("PresenceIcon", {
              Viewer: !uu.isEditor
            }),
            style: {
              backgroundColor: uu.colour
            },
            onMouseEnter: () => {
              Eu(uu.playerId)
            },
            onMouseLeave: () => {
              Eu(null)
            },
            children: [(0, Vu.jsx)(cK.b, {
              cosmetics: mu
            }), yu === uu.playerId && (0, Vu.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: uu.colour
              },
              children: uu.playerName
            })]
          }, uu.playerId)
        }))
      })
    }
    var zK = yu(631),
      FK = yu(36619),
      wK = yu(36391),
      ZK = yu(36640);

    function hK(uu) {
      const Ru = uu.split("/"),
        yu = [];
      for (let Eu = 1; Eu < Ru.length; Eu++) yu.push(Ru.slice(0, Eu).join("/"));
      return yu
    }

    function PK(uu) {
      return uu.slice(uu.lastIndexOf("/") + 1)
    }
    const iK = (0, Ku.memo)((function(uu) {
      var Ru;
      let {
        files: yu,
        activePath: Eu,
        canEdit: Qu,
        directoryLinked: mu,
        pluginNames: Ju,
        activePluginName: Nu,
        activePluginFile: Xu,
        onSelect: ru,
        onSelectPlugin: Bu,
        onCreate: Su,
        onRename: pu,
        onRenameFolder: Wu,
        onDelete: ju,
        onToggleDirectorySync: Hu,
        schematics: du,
        onManageSchematic: bu
      } = uu;
      const {
        t: Cu
      } = (0, qu.E)(), ku = null !== (Ru = (0, lK.d)(yu)) && void 0 !== Ru ? Ru : sK.k, eu = Object.keys(yu), [Au, Du] = (0, Ku.useState)((() => new Set)), Mu = function(uu, Ru, yu) {
        const Eu = {
          folders: new Map,
          files: []
        };
        for (const mu of uu) {
          if (mu === Ru) continue;
          let uu = Eu;
          for (const Ru of hK(mu)) {
            let yu = uu.folders.get(Ru);
            yu || (yu = {
              folders: new Map,
              files: []
            }, uu.folders.set(Ru, yu)), uu = yu
          }
          uu.files.push(mu)
        }
        const Ku = [];
        uu.includes(Ru) && Ku.push({
          kind: "file",
          path: Ru,
          name: PK(Ru),
          depth: 0
        });
        const Qu = (uu, Ru) => {
          const Eu = [...uu.folders.entries()].sort(((uu, Ru) => {
            let [yu] = uu, [Eu] = Ru;
            return yu.localeCompare(Eu)
          }));
          for (const [mu, Ju] of Eu) {
            const uu = yu.has(mu);
            Ku.push({
              kind: "folder",
              path: mu,
              name: PK(mu),
              depth: Ru,
              collapsed: uu
            }), uu || Qu(Ju, Ru + 1)
          }
          uu.files.sort(((uu, Ru) => uu.localeCompare(Ru)));
          for (const yu of uu.files) Ku.push({
            kind: "file",
            path: yu,
            name: PK(yu),
            depth: Ru
          })
        };
        return Qu(Eu, 0), Ku
      }(eu, ku, Au);
      (0, Ku.useEffect)((() => {
        Du((uu => {
          const Ru = new Set(uu);
          let yu = !1;
          for (const Ku of hK(Eu)) yu = Ru.delete(Ku) || yu;
          return yu ? Ru : uu
        }))
      }), [Eu]);
      const Iu = eu.length >= Ky.C,
        Gu = (uu, Ru) => {
          if (uu.length > tK.x) return `Path must be at most ${tK.x} characters`;
          if (!(0, tK.v)(uu)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === uu) return "index.d.ts cannot be the world-code entry";
          const Eu = !!Ru && (0, lK.g)(Ru, uu);
          if (Ru && (0, lK.h)(Ru) && !Eu) return `Cannot rename ${Ru} (only swapping ${sK.k} and ${sK.n} is allowed)`;
          if (uu in yu) return "A file with that path already exists";
          if ((0, lK.h)(uu) && !Eu) {
            if ((uu === sK.k ? sK.n : sK.k) in yu) return `World code cannot have both ${sK.k} and ${sK.n}`
          }
          return null
        },
        Uu = uu => {
          XK.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === uu ? void 0 : `${uu}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: uu => Gu(uu)
          }).getResult().then((uu => {
            "notificationTornDown" !== uu && null !== uu && "submit" === uu.type && Su(uu.value)
          }))
        },
        nu = uu => {
          XK.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: uu,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: Ru => Ru === uu ? "That is already the file's path" : Gu(Ru, uu)
          }).getResult().then((Ru => {
            "notificationTornDown" !== Ru && null !== Ru && "submit" === Ru.type && pu(uu, Ru.value)
          }))
        },
        su = uu => {
          const Ru = uu => uu.replace(/\/+$/, "");
          XK.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: uu,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: yu => {
              const Eu = Ru(yu);
              if (Eu === uu) return "That is already the folder's path";
              for (const [Ru, Ku] of(0, lK.l)(eu, uu, Eu)) {
                const uu = Gu(Ku, Ru);
                if (null !== uu) return uu
              }
              return null
            }
          }).getResult().then((yu => {
            "notificationTornDown" !== yu && null !== yu && "submit" === yu.type && Wu(uu, Ru(yu.value))
          }))
        },
        tu = uu => {
          XK.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: uu
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((Ru => {
            !0 === Ru && ju(uu)
          }))
        };
      return (0, Vu.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, Vu.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, Vu.jsx)("span", {
            children: "Files"
          }), Qu && !Iu && (0, Vu.jsx)(xu.n, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              Uu()
            },
            children: (0, Vu.jsx)(Tu.c, {
              name: "plus"
            })
          })]
        }), (0, Vu.jsxs)("div", {
          className: "FileTreeList",
          children: [Mu.map((uu => {
            const Ru = uu.path;
            if ("folder" === uu.kind) return (0, Vu.jsx)(qK, {
              path: Ru,
              name: uu.name,
              depth: uu.depth,
              collapsed: uu.collapsed,
              onToggle: () => {
                var uu;
                uu = Ru, Du((Ru => {
                  const yu = new Set(Ru);
                  return yu.delete(uu) || yu.add(uu), yu
                }))
              },
              canCreate: Qu && !Iu,
              canRename: Qu,
              onCreate: Uu,
              onRename: su
            }, `folder:${Ru}`);
            const Ku = (0, lK.h)(Ru),
              mu = sK.k in yu && sK.n in yu,
              Ju = !Ku || mu,
              Xu = null === Nu && Ru === Eu;
            return (0, Vu.jsx)(vK, {
              path: Ru,
              label: uu.name,
              depth: uu.depth,
              isActive: Xu,
              canRename: Qu,
              onSelect: ru,
              onRename: nu,
              onDelete: tu,
              canDelete: Ju && Qu
            }, Ru)
          })), (0, Vu.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, Vu.jsxs)("span", {
              children: ["Schematics (", Object.keys(du).length, "/", ZK.d, ")"]
            }), Qu && (0, Vu.jsx)(xu.n, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(du).length >= ZK.d,
              onClick: () => {
                bu("")
              },
              children: (0, Vu.jsx)(Tu.c, {
                name: "plus"
              })
            })]
          }), Object.keys(du).sort().map((uu => (0, Vu.jsx)(vK, {
            path: uu,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: bu
          }, uu))), Ju.length > 0 && (0, Vu.jsxs)(Vu.Fragment, {
            children: [(0, Vu.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, Vu.jsx)("span", {
                children: "Plugins"
              })
            }), Ju.map((uu => {
              var Ru;
              const yu = FK.h[uu],
                Eu = Object.keys(null !== (Ru = null === yu || void 0 === yu ? void 0 : yu.files) && void 0 !== Ru ? Ru : {
                  "index.ts": ""
                }).sort(((uu, Ru) => "index.ts" === uu ? -1 : "index.ts" === Ru ? 1 : uu.localeCompare(Ru)));
              return (0, Vu.jsxs)("div", {
                children: [(0, Vu.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, lK.z)(uu)
                }), Eu.map((Ru => (0, Vu.jsx)(vK, {
                  path: Ru,
                  nested: !0,
                  isActive: Nu === uu && Xu === Ru,
                  canRename: !1,
                  onSelect: () => {
                    Bu(uu, Ru)
                  },
                  canDelete: !1
                }, Ru)))]
              }, uu)
            }))]
          })]
        }), (0, Vu.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, Vu.jsx)(xu.e, {
            className: "FileTreeFooterButton",
            onClick: Hu,
            children: Cu(mu ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function YK(uu) {
      return uu > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": uu
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function oK(uu) {
      let {
        depth: Ru
      } = uu;
      return (0, Vu.jsx)(Vu.Fragment, {
        children: Array.from({
          length: Ru
        }, ((uu, Ru) => (0, Vu.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": Ru
          }
        }, Ru)))
      })
    }

    function qK(uu) {
      let {
        path: Ru,
        name: yu,
        depth: Eu,
        collapsed: Ku,
        onToggle: Qu,
        canCreate: mu,
        canRename: Ju,
        onCreate: Nu,
        onRename: Xu
      } = uu;
      const ru = [];
      mu && ru.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          Nu(Ru)
        }
      }), Ju && ru.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          Xu(Ru)
        }
      });
      const Bu = YK(Eu);
      return (0, Vu.jsxs)("div", {
        className: xR()("FileTreeItem FileTreeFolder", Bu.className),
        style: Bu.style,
        children: [(0, Vu.jsx)(oK, {
          depth: Eu
        }), (0, Vu.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !Ku,
          onClick: Qu,
          children: [(0, Vu.jsx)(Tu.c, {
            className: "FileTreeFolderCaret",
            name: Ku ? "caret-right" : "caret-down"
          }), (0, Vu.jsx)(Tu.c, {
            className: "FileTreeFolderIcon",
            name: Ku ? "folder" : "folder-open"
          }), yu]
        }), (0, Vu.jsx)(OK, {
          path: Ru,
          actions: ru
        })]
      })
    }

    function OK(uu) {
      let {
        path: Ru,
        actions: yu
      } = uu;
      const Eu = (0, Ku.useRef)(null);
      return 0 === yu.length ? null : (0, Vu.jsxs)("div", {
        ref: Eu,
        className: "FileTreeItemActions",
        children: [(0, Vu.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${Ru}`,
          children: (0, Vu.jsx)(Tu.c, {
            name: "ellipsis"
          })
        }), (0, Vu.jsx)(wK.e, {
          triggerElementRef: Eu,
          options: yu
        })]
      })
    }

    function vK(uu) {
      let {
        path: Ru,
        label: yu = Ru,
        depth: Eu = 0,
        isActive: Ku,
        canRename: Qu,
        onSelect: mu,
        onRename: Ju,
        onDelete: Nu,
        canDelete: Xu,
        nested: ru
      } = uu;
      const Bu = [];
      Qu && Ju && Bu.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          Ju(Ru)
        }
      }), Xu && Nu && Bu.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          Nu(Ru)
        }
      });
      const xu = YK(Eu);
      return (0, Vu.jsxs)("div", {
        className: xR()("FileTreeItem", xu.className, {
          Active: Ku,
          Nested: ru
        }),
        style: xu.style,
        children: [(0, Vu.jsx)(oK, {
          depth: Eu
        }), (0, Vu.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: yu === Ru ? void 0 : Ru,
          onClick: () => {
            mu(Ru)
          },
          children: yu
        }), (0, Vu.jsx)(OK, {
          path: Ru,
          actions: Bu
        })]
      })
    }
    async function aK(uu) {
      const Ru = (0, lK.d)(uu);
      if (!Ru || "" === uu[Ru].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: Eu
      } = await Promise.all([yu.e(289), yu.e(290)]).then((() => yu(41071)));
      return (0, FK.e)(Eu(uu))
    }
    var fK = yu(36642);

    function uQ(uu, Ru) {
      const yu = Object.keys(uu),
        Eu = Object.keys(Ru);
      if (yu.length !== Eu.length) return !1;
      for (const Ku of yu)
        if (!(Ku in Ru) || uu[Ku] !== Ru[Ku]) return !1;
      return !0
    }

    function RQ(uu, Ru) {
      const yu = [],
        Eu = [],
        Ku = [];
      for (const Qu of Object.keys(Ru)) Qu in uu ? uu[Qu] !== Ru[Qu] && Ku.push(Qu) : yu.push(Qu);
      for (const Qu of Object.keys(uu)) Qu in Ru || Eu.push(Qu);
      return yu.sort(), Eu.sort(), Ku.sort(), {
        creates: yu,
        deletes: Eu,
        updates: Ku
      }
    }

    function yQ(uu, Ru) {
      var yu;
      const Eu = {
          ...uu
        },
        Ku = (0, lK.d)(Ru),
        Qu = (0, lK.d)(Eu);
      if (sK.k in Eu && sK.n in Eu) {
        const uu = null !== Ku && void 0 !== Ku ? Ku : sK.n,
          yu = uu === sK.k ? sK.n : sK.k;
        var mu;
        if (!(uu in Eu)) Eu[uu] = null !== (mu = Ru[uu]) && void 0 !== mu ? mu : "";
        return delete Eu[yu], Eu
      }
      var Ju;
      return Ku && !(Ku in Eu) ? (Qu || (Eu[Ku] = null !== (Ju = Ru[Ku]) && void 0 !== Ju ? Ju : ""), Eu) : (Qu || Ku || (Eu[sK.k] = null !== (yu = Eu[sK.k]) && void 0 !== yu ? yu : "", delete Eu[sK.n]), Eu)
    }

    function EQ(uu, Ru) {
      const yu = (0, lK.d)(Ru),
        Eu = sK.k in Ru && sK.n in Ru;
      return uu.filter((uu => !(0, lK.h)(uu) || (!!Eu || yu !== uu)))
    }
    async function KQ(uu, Ru, Eu) {
      const Ku = uu.getLobbyFiles(),
        Qu = (0, Ky.n)(Eu, (0, lK.n)(Ku, Ru)),
        mu = await uu.ensureJoined(Ru),
        Ju = (0, tK.B)(mu.docKey);
      if (mu.doc === Qu) return;
      for (let yu = 0; yu < 100; yu++) {
        const yu = uu.getCollabSnapshot();
        if (yu && (0, tK.B)(yu.docKey) === Ju && uu.getActivePath() === Ru) {
          if (uu.replaceActiveDoc(Ju, Qu)) return;
          await (0, nE.M)(40)
        } else await (0, nE.M)(40)
      }
      const {
        ChangeSet: Nu
      } = await yu.e(285).then((() => yu(40909))), Vu = uu.getCollabSnapshot(), ru = Vu && (0, tK.B)(Vu.docKey) === Ju ? Vu : mu;
      await async function(uu, Ru, yu, Eu) {
        const Ku = uu.of({
            from: 0,
            to: yu.length,
            insert: Eu
          }, yu.length),
          Qu = JSON.stringify([{
            clientID: Ru.clientID,
            changes: Ku.toJSON()
          }]),
          mu = (0, tK.B)(Ru.docKey);
        Qu.length <= tK.j ? Xu.gameBridge.send("sendCodeCollab", {
          WR: tK.e.Push,
          jR: mu,
          HR: Ru.version,
          CR: Qu
        }) : await (0, nK.postJsonWithMetricsCookiesAndJsonResponse)(`${Ru.httpConfig.gsUrl}/code/collab-push`, UK.n["collab-push"].toBuffer({
          gameNameWithVariation: Ru.httpConfig.gameNameWithVariation,
          lobbyName: Ru.httpConfig.lobbyName,
          docKey: mu,
          version: Ru.version,
          updates: Qu
        }), {
          retries: 0
        })
      }(Nu, ru, ru.doc, Qu)
    }
    class QQ {
      constructor(uu) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = uu
      }
      async writeLobbyFiles(uu) {
        const Ru = {
            ...this.bridge.getLobbyFiles()
          },
          yu = {
            ...Ru
          };
        for (const {
            path: Qu,
            text: mu
          }
          of uu) yu[Qu] = mu;
        if (!uu.every((uu => {
            let {
              path: Ru,
              text: Eu
            } = uu;
            return (0, Ky.n)(Eu, (0, lK.n)(yu, Ru)) === Eu
          }))) return !1;
        const Eu = [];
        try {
          for (const {
              path: Ru,
              text: yu
            }
            of uu) Eu.push(Ru), Ru in this.bridge.getLobbyFiles() || (this.bridge.createFile(Ru, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(Ru, !0)), await KQ(this.bridge, Ru, yu)
        } catch (Ku) {
          for (const uu of Eu) uu in Ru ? await KQ(this.bridge, uu, Ru[uu]).catch((Ru => {
            console.error("World Code AI: couldn't put back", uu, Ru)
          })) : this.bridge.deleteFile(uu);
          throw Ku
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const uu = await (0, fK.y)(this.bridge.getStorageKey());
        return !!uu && (this.handle = uu, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(uu), !0)
      }
      async unlinkFolder() {
        const uu = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, fK.e)(uu), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const uu = this.bridge.getStorageKey(),
          Ru = await (0, fK.u)(uu);
        return !!Ru && (!!await (0, fK.k)(Ru, "readwrite") && (this.handle = Ru, this.linked = !0, await (0, fK.K)(uu, Ru), await this.scaffoldLocalTypes(Ru), !0))
      }
      scaffoldLocalTypes(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const Eu = (await aK(Ru)).map((uu => FK.h[uu])),
              Ku = Eu.map((uu => {
                var Ru;
                return `${uu.name}:${Object.keys(null!==(Ru=null===uu||void 0===uu?void 0:uu.files)&&void 0!==Ru?Ru:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === Ku) return;
            const {
              ensureLocalBloxdTypes: Qu
            } = await Promise.all([yu.e(81), yu.e(287), yu.e(292)]).then((() => yu(41073)));
            await Qu(uu, Eu), this.scaffoldedPluginNamesKey = Ku
          } catch (Eu) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", Eu)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(uu) {
        this.handle && await this.scaffoldLocalTypes(this.handle, uu), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(uu)
      }
      async onDocTextChanged(uu, Ru) {
        if (!this.handle) return;
        const yu = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [uu]: Ru
        })];
        this.running && (this.pendingDocText.set(uu, Ru), yu.push(this.flushDocTextToDisk())), await Promise.all(yu)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const uu = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const Ru = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [yu, Eu] of Ru) this.lastSynced[yu] !== Eu && (await (0, fK.P)(uu, yu, Eu), this.lastSynced = {
              ...this.lastSynced,
              [yu]: Eu
            })
          }
        } catch (Ru) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", Ru), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, fK.A)(this.handle))
          } catch (uu) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", uu)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, fK.k)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const Ru = this.bridge.getLobbyFiles(),
              yu = await (0, fK.A)(this.handle);
            for (const uu of Object.keys(Ru).filter(ZK.c)) {
              if (yu[uu] === fK.n) return void this.bridge.setMessage(`Move ${uu} outside the linked folder before syncing its placeholder.`, "warning");
              yu[uu] = ZK.i
            }
            if (uQ(yu, Ru)) {
              for (const uu of Object.keys(Ru).filter(ZK.c)) await (0, fK.P)(this.handle, uu, ZK.i);
              return this.lastSynced = {
                ...yu
              }, void this.beginWatch()
            }
            const Eu = await this.promptReconcile(function(uu) {
              return null !== (0, lK.d)(uu)
            }(yu));
            if ("unlink" === Eu) return void await this.unlinkFolder();
            if ("dismissed" === Eu) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === Eu) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(yu);
                for (const uu of Object.keys(Ru).filter(ZK.c)) await (0, fK.P)(this.handle, uu, ZK.i);
                this.lastSynced = {
                  ...await (0, fK.A)(this.handle)
                }
              } else await (0, fK.R)(this.handle, Ru), this.lastSynced = {
                ...Ru
              }
            } catch (uu) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", uu), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(uu) {
        return await new Promise((Ru => {
          const yu = [{
              choice: "local",
              Button: xu.e,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: xu.e,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: xu.e,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            Eu = (0, Vu.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, Vu.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, Vu.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: uu ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, Vu.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: yu.filter((Ru => "local" !== Ru.choice || uu)).map((uu => {
                  let {
                    choice: yu,
                    Button: Eu,
                    labelKey: Qu,
                    descriptionKey: mu
                  } = uu;
                  return (0, Vu.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, Vu.jsx)(Eu, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (uu => {
                          Ku.tearDownNotification(), Ru(uu)
                        })(yu)
                      },
                      children: this.bridge.t(`codeEditor:${Qu}`)
                    }), (0, Vu.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${mu}`)
                    })]
                  }, yu)
                }))
              })]
            }),
            Ku = XK.NotificationProvider.showCustomPopup({
              body: Eu,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          Ku.getResult().then((uu => {
            "notificationTornDown" === uu && Ru("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, fK.L)(this.handle, (uu => {
          this.onDiskFilesChanged(uu)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (uu) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", uu)
        }
      }
      async onDiskFilesChanged(uu) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const Ru = this.bridge.getLobbyFiles();
        let yu = yQ(uu, this.lastSynced);
        for (const Qu in Ru)
          if ((0, ZK.c)(Qu) && yu[Qu] === fK.n) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const Eu = Object.keys(yu).filter((uu => (0, ZK.c)(uu) && !(uu in Ru)));
        Eu.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const Qu of Object.keys(Ru).filter(ZK.c))(Qu in yu || Eu.length > 0 || !(Qu in this.lastSynced)) && (yu[Qu] = ZK.i);
        if (!uQ(yu, uu)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(uu, yu), yu = yQ(await (0, fK.A)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!uQ(yu, this.lastSynced)) {
          this.applying = !0;
          try {
            const uu = RQ(this.lastSynced, yu);
            if (await this.pushDiskDeltaToLobby(yu, Ru), null !== this.lastLobbySeen)
              for (const yu of [...uu.creates, ...uu.updates, ...uu.deletes])(0, ZK.c)(yu) || (yu in Ru ? this.lastLobbySeen[yu] = Ru[yu] : delete this.lastLobbySeen[yu]);
            this.lastSynced = {
              ...yu
            }
          } catch (Ku) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", Ku), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(uu, Ru) {
        if (this.handle) {
          for (const yu of Object.keys(uu)) yu in Ru || await (0, fK.D)(this.handle, yu);
          for (const [yu, Eu] of Object.entries(Ru)) uu[yu] !== Eu && await (0, fK.P)(this.handle, yu, Eu)
        }
      }
      async applyRemoteTreeToDisk(uu) {
        if (!this.handle) return;
        const Ru = this.lastLobbySeen;
        if (null === Ru) return void(this.lastLobbySeen = {
          ...uu
        });
        const yu = Object.keys(uu).filter((yu => Ru[yu] !== uu[yu])),
          Eu = Object.keys(Ru).filter((Ru => !(Ru in uu)));
        if (0 !== yu.length || 0 !== Eu.length) {
          this.applying = !0;
          try {
            for (const Ru of [...Eu, ...yu]) try {
              if (Ru in uu) await (0, fK.P)(this.handle, Ru, uu[Ru]), this.lastSynced = {
                ...this.lastSynced,
                [Ru]: uu[Ru]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [Ru]: uu[Ru]
              };
              else {
                await (0, fK.D)(this.handle, Ru);
                const uu = {
                  ...this.lastSynced
                };
                delete uu[Ru], this.lastSynced = uu;
                const yu = {
                  ...this.lastLobbySeen
                };
                delete yu[Ru], this.lastLobbySeen = yu
              }
            } catch (Ku) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", Ku), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(uu, Ru) {
        const yu = function(uu, Ru) {
          const yu = (0, lK.d)(uu),
            Eu = (0, lK.d)(Ru);
          return yu && Eu && yu !== Eu ? {
            from: yu,
            to: Eu
          } : null
        }(uu, Ru);
        return !!yu && (this.bridge.renameFile(yu.from, yu.to), await this.bridge.waitForLobbyPath(yu.to, !0), !0)
      }
      async applyLocalTreeToLobby(uu) {
        var Ru;
        const yu = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), uu);
        const Eu = this.bridge.getLobbyFiles(),
          Ku = RQ(Eu, uu),
          Qu = EQ(Ku.deletes, Eu);
        for (const Xu of Ku.creates)(0, ZK.c)(Xu) || (this.bridge.createFile(Xu, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Xu, !0));
        for (const Xu of Qu)(0, ZK.c)(Xu) || (this.bridge.deleteFile(Xu), await this.bridge.waitForLobbyPath(Xu, !1));
        if (!(0, lK.d)(this.bridge.getLobbyFiles()) && !(0, lK.d)(uu)) {
          if (this.bridge.createFile(sK.k, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(sK.k, !0), !this.handle) return;
          await (0, fK.P)(this.handle, sK.k, ""), uu = {
            ...uu,
            [sK.k]: ""
          }
        }
        const mu = this.bridge.getLobbyFiles();
        for (const Xu of Object.keys(uu))(0, ZK.c)(Xu) || mu[Xu] !== uu[Xu] && await KQ(this.bridge, Xu, uu[Xu]);
        const Ju = this.bridge.getLobbyFiles(),
          Nu = yu in Ju ? yu : null !== (Ru = (0, lK.d)(Ju)) && void 0 !== Ru ? Ru : sK.k;
        await this.bridge.ensureJoined(Nu)
      }
      async pushDiskDeltaToLobby(uu, Ru) {
        const yu = this.bridge.getActivePath(),
          Eu = await this.renameLobbyEntryIfSwitched(Ru, uu) ? this.bridge.getLobbyFiles() : Ru,
          Ku = RQ(this.lastSynced, uu),
          Qu = EQ(Ku.deletes, Eu).filter((uu => uu in Eu));
        for (const mu of Ku.creates)(0, ZK.c)(mu) || (mu in this.bridge.getLobbyFiles() || (this.bridge.createFile(mu, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(mu, !0)), await KQ(this.bridge, mu, uu[mu]));
        for (const mu of Qu)(0, ZK.c)(mu) ? await this.bridge.deleteSchematic(mu) : (this.bridge.deleteFile(mu), await this.bridge.waitForLobbyPath(mu, !1));
        for (const mu of Ku.updates)(0, ZK.c)(mu) || await KQ(this.bridge, mu, uu[mu]);
        yu in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== yu && await this.bridge.ensureJoined(yu)
      }
    }
    var mQ = yu(1176);

    function JQ() {
      const {
        websocketUrl: uu,
        gameNameWithVariation: Ru,
        lobbyName: yu
      } = Xu.gameBridge.latest("connectedGame");
      return {
        gsUrl: mQ.clientSideServerUrls.getHttpUrlFromWebSocketUrl(uu),
        gameNameWithVariation: Ru,
        lobbyName: yu
      }
    }
    async function NQ(uu) {
      const {
        gsUrl: Ru,
        gameNameWithVariation: yu,
        lobbyName: Eu
      } = JQ();
      return await (0, nK.postBinaryWithMetricsCookiesAndCustomResponse)(`${Ru}/code/schematics`, UK.Lj.schematics.toBuffer({
        gameNameWithVariation: yu,
        lobbyName: Eu,
        request: JSON.stringify(uu)
      }), {
        retries: 0
      }, nK.HttpPayloadType.json)
    }
    var XQ = yu(36229);

    function VQ(uu) {
      let {
        path: Ru,
        revision: yu
      } = uu;
      const [Eu, Qu] = (0, Ku.useState)(""), [mu, Ju] = (0, Ku.useState)(!1), [Nu, Xu] = (0, Ku.useState)(0);
      return (0, Ku.useEffect)((() => {
        let uu = !1;
        return Qu(""), Ju(!1), NQ({
          action: "preview",
          path: Ru
        }).then((Ru => {
          uu || Qu(`data:image/webp;base64,${Ru.previewBase64}`)
        })).catch((Ru => {
          console.error("Could not load schematic preview", Ru), uu || Ju(!0)
        })), () => {
          uu = !0
        }
      }), [Ru, yu, Nu]), (0, Vu.jsxs)("div", {
        className: "SchematicPreview",
        children: [Eu && (0, Vu.jsx)("img", {
          src: Eu,
          alt: `Preview of ${Ru}`
        }), !Eu && !mu && (0, Vu.jsx)(Mu.b, {
          loaderType: "Secondary"
        }), mu && (0, Vu.jsxs)(Vu.Fragment, {
          children: [(0, Vu.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, Vu.jsx)(xu.e, {
            onClick: () => {
              Xu(Nu + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function rQ(uu) {
      var Ru;
      let {
        initialPath: yu,
        onChanged: Eu,
        onClose: Qu
      } = uu;
      const mu = "" === yu,
        [Ju, Nu] = (0, Ku.useState)(null),
        [Xu, ru] = (0, Ku.useState)(yu),
        [Bu, Su] = (0, Ku.useState)(!1),
        [pu, Tu] = (0, Ku.useState)(!1),
        [Wu, ju] = (0, Ku.useState)(null),
        [Hu, du] = (0, Ku.useState)(!1),
        [bu, Cu] = (0, Ku.useState)(""),
        ku = (0, Ku.useRef)(null),
        eu = (0, Ku.useRef)(!1),
        Au = (0, Ku.useRef)(!0);
      (0, Ku.useEffect)((() => (Au.current = !0, NQ({
        action: "state"
      }).then((uu => {
        Au.current && Nu(uu)
      })).catch((uu => {
        console.error("Could not load schematic assets", uu), Au.current && Cu("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        Au.current = !1
      })), []);
      const Du = null === Ju || void 0 === Ju ? void 0 : Ju.assets[yu],
        Mu = Object.keys(null !== (Ru = null === Ju || void 0 === Ju ? void 0 : Ju.assets) && void 0 !== Ru ? Ru : {}).length,
        Iu = Xu.trim(),
        Gu = Iu ? (0, ZK.c)(Iu) ? null !== Ju && void 0 !== Ju && Ju.assets[Iu] && (mu || Iu !== yu) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        Uu = !!Iu && !Gu && (mu ? Mu < ZK.d : Iu !== yu),
        nu = Hu || !Ju;
      async function su(uu) {
        if (!eu.current && Au.current) {
          eu.current = !0, du(!0), Cu("");
          try {
            const Ru = await NQ({
              ...uu,
              expectedRevision: Ju.revision
            });
            Eu(Ru), Au.current && Qu()
          } catch (yu) {
            var Ru;
            if (console.error("Schematic asset operation failed", yu), Au.current) Cu(yu instanceof Pu.e ? null !== (Ru = yu.errorMessageForUser) && void 0 !== Ru ? Ru : yu.message : String(yu));
            try {
              const uu = await NQ({
                action: "state"
              });
              Eu(uu), Au.current && Nu(uu)
            } catch (Ku) {
              console.error("Could not refresh schematic assets", Ku)
            }
          } finally {
            eu.current = !1, Au.current && du(!1)
          }
        }
      }
      return (0, Vu.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, Vu.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: mu ? "New schematic" : Bu ? "Rename schematic" : "Schematic"
        }), bu && (0, Vu.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: bu
        }), !Ju && !bu && (0, Vu.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, Vu.jsxs)("fieldset", {
          disabled: nu,
          children: [mu || Bu ? (0, Vu.jsxs)("label", {
            className: "SchematicField",
            children: [(0, Vu.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, Vu.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, Vu.jsx)(DR.b, {
                className: "InputGenericPopupInput",
                defaultValue: yu,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: ru
              }, Bu ? "rename" : "create")
            })]
          }) : (0, Vu.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: yu
          }), (mu || Bu) && Gu && (0, Vu.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: Gu
          }), mu ? (0, Vu.jsxs)(Vu.Fragment, {
            children: [Mu >= ZK.d && (0, Vu.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", ZK.d, " maximum)."]
            }), pu ? (0, Vu.jsxs)(Vu.Fragment, {
              children: [(0, Vu.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, Vu.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": nu || !Uu,
                children: (0, Vu.jsx)(XQ.d, {
                  loading: null === Wu,
                  schematics: null !== Wu && void 0 !== Wu ? Wu : [],
                  disableAutoExport: !0,
                  onSchematicPicked: uu => {
                    !nu && Uu && su({
                      action: "profile",
                      path: Iu,
                      schematicId: uu.schematicId
                    })
                  }
                })
              }), (0, Vu.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, Vu.jsx)(xu.e, {
                  className: "InputGenericPopupButton",
                  disabled: nu,
                  onClick: () => {
                    Tu(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, Vu.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, Vu.jsx)(xu.e, {
                className: "InputGenericPopupButton",
                disabled: nu || !Uu,
                onClick: () => {
                  ku.current.click()
                },
                children: "Upload Schematic"
              }), (0, Vu.jsx)(xu.e, {
                className: "InputGenericPopupButton",
                disabled: nu || !Uu,
                onClick: () => {
                  !async function() {
                    if (Tu(!0), Cu(""), !Wu) try {
                      const uu = await (0, nK.postJsonWithMetricsCookiesAndJsonResponse)(`${mQ.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      Au.current && ju(uu)
                    } catch (uu) {
                      console.error("Could not load profile schematics", uu), Au.current && (Tu(!1), Cu("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, Vu.jsx)("input", {
              ref: ku,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: uu => {
                var Ru;
                const yu = null === (Ru = uu.target.files) || void 0 === Ru ? void 0 : Ru[0];
                if (uu.target.value = "", !yu) return;
                if (yu.size > ZK.f) return void Cu("The schematic file is too large.");
                const Eu = Iu;
                du(!0);
                const Ku = new FileReader;
                Ku.onload = () => {
                  su({
                    action: "upload",
                    path: Eu,
                    base64: String(Ku.result).split(",")[1]
                  })
                }, Ku.onerror = () => {
                  console.error("Could not read schematic file", Ku.error), Au.current && (du(!1), Cu("Could not read the selected file."))
                }, Ku.readAsDataURL(yu)
              }
            })]
          }) : Du ? (0, Vu.jsxs)(Vu.Fragment, {
            children: [!Bu && (0, Vu.jsx)(VQ, {
              path: yu,
              revision: Ju.revision
            }), !Bu && (0, Vu.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(Du.byteSize / 1024), " KB \xb7 ", Du.dimensions.join(" \xd7 "), " blocks"]
            }), (0, Vu.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: Bu ? (0, Vu.jsxs)(Vu.Fragment, {
                children: [(0, Vu.jsx)(xu.e, {
                  className: "InputGenericPopupButton",
                  disabled: nu || !Uu,
                  onClick: () => {
                    su({
                      action: "rename",
                      path: yu,
                      newPath: Iu
                    })
                  },
                  children: "Rename"
                }), (0, Vu.jsx)(xu.e, {
                  className: "InputGenericPopupButton",
                  disabled: nu,
                  onClick: () => {
                    Su(!1), ru(yu)
                  },
                  children: "Cancel"
                })]
              }) : (0, Vu.jsxs)(Vu.Fragment, {
                children: [(0, Vu.jsx)(xu.e, {
                  className: "InputGenericPopupButton",
                  disabled: nu,
                  onClick: () => {
                    Su(!0)
                  },
                  children: "Rename"
                }), (0, Vu.jsx)(xu.F, {
                  className: "InputGenericPopupButton",
                  disabled: nu,
                  onClick: () => {
                    su({
                      action: "remove",
                      path: yu
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : Ju && (0, Vu.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function BQ(uu) {
      if ("string" !== typeof uu) return null;
      try {
        const Ru = JSON.parse(uu);
        return (0, lK.k)(null === Ru || void 0 === Ru ? void 0 : Ru.worldCodeEngine) && "boolean" === typeof Ru.engineLocked && function(uu) {
          if (null === uu) return !0;
          const Ru = null === uu || void 0 === uu ? void 0 : uu.location;
          return "string" === typeof(null === uu || void 0 === uu ? void 0 : uu.reason) && (null === Ru || "string" === typeof(null === Ru || void 0 === Ru ? void 0 : Ru.path) && Number.isInteger(Ru.line))
        }(Ru.fallback) ? Ru : (console.error("[CodeCollab] Malformed engine settings", uu), null)
      } catch (Ru) {
        return console.error("[CodeCollab] Failed to parse engine settings", Ru), null
      }
    }

    function xQ(uu) {
      let {
        fallback: Ru,
        onGoToLine: yu
      } = uu;
      const {
        t: Eu
      } = (0, qu.E)(), {
        location: Ku
      } = Ru;
      return (0, Vu.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [Eu("codeEditorEngine:notice", {
          reason: Ru.reason
        }), Ku && (0, Vu.jsxs)(Vu.Fragment, {
          children: [" ", (0, Vu.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              yu(Ku.path, Ku.line)
            },
            children: Eu("codeEditorEngine:goToLine", {
              line: String(Ku.line)
            })
          })]
        })]
      })
    }
    var SQ = yu(4718);

    function pQ(uu) {
      let {
        label: Ru,
        hint: yu,
        checked: Eu,
        onChange: Ku
      } = uu;
      return (0, Vu.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, Vu.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, Vu.jsx)("span", {
            children: Ru
          }), (0, Vu.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: yu
          })]
        }), (0, Vu.jsx)("span", {
          className: "SwitchContainer",
          children: (0, Vu.jsx)(dR.b, {
            className: "SwitchCheckbox",
            checked: Eu,
            onChange: uu => {
              Ku(uu.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function TQ(uu) {
      let {
        engine: Ru,
        onSetEngine: yu,
        aiHints: Eu,
        variation: Ku
      } = uu;
      const {
        t: Qu
      } = (0, qu.E)();
      return (0, Vu.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, Vu.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: Qu("codeEditor:moreOptions")
        }), Ru && (0, Vu.jsx)(pQ, {
          label: Qu("codeEditorEngine:toggle"),
          hint: Qu("codeEditorEngine:toggleHint"),
          checked: "ses" === Ru,
          onChange: uu => {
            yu(uu ? "ses" : "quickjs")
          }
        }), Eu && (0, Vu.jsx)(pQ, {
          label: Qu("codeEditorAiHints:toggle"),
          hint: Qu("codeEditorAiHints:toggleHint"),
          checked: Eu.shown,
          onChange: Eu.setShown
        }), Ku && (0, Vu.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, Vu.jsx)(SQ.c, {
            label: "codeEditor:variationLabel",
            children: (0, Vu.jsx)(DR.b, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: Ku.name,
              onValueChange: Ku.setName,
              onEnter: Ku.reload
            })
          }), (0, Vu.jsx)(xu.s, {
            className: "CodeEditorButton",
            onClick: Ku.reload,
            children: Qu("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var WQ = yu(36650),
      jQ = yu(36656);

    function HQ(uu) {
      let {
        close: Ru
      } = uu;
      const {
        t: yu
      } = (0, qu.E)(), Eu = [{
        name: yu("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: yu("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: yu("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, Vu.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, Vu.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: yu("codeEditor:tutorialsTitle")
        }), (0, Vu.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: Eu.map((uu => (0, Vu.jsx)(xu.e, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              Ru(), (0, jQ.D)(uu.tutorial)
            },
            children: uu.name
          }, uu.tutorial)))
        })]
      })
    }
    var dQ = yu(125),
      bQ = yu(36384),
      CQ = yu(8505);
    const kQ = (0, Ku.forwardRef)((function(uu, Ru) {
      let {
        value: yu,
        onChange: Eu,
        onSubmit: Ku,
        placeholder: Qu,
        maxLength: mu,
        rows: Ju = 2,
        allowNewLines: Nu = !1,
        onKeyDown: Xu,
        before: ru
      } = uu;
      const {
        t: Bu
      } = (0, qu.E)(), Su = "" !== yu.trim(), pu = () => {
        Su && Ku()
      };
      return (0, Vu.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [ru, (0, Vu.jsx)("textarea", {
          ref: Ru,
          className: "PanelPromptInput",
          value: yu,
          maxLength: mu,
          rows: Ju,
          placeholder: Qu,
          spellCheck: !1,
          autoComplete: "off",
          onChange: uu => {
            Eu(Nu ? uu.target.value : uu.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: uu => {
            uu.nativeEvent.isComposing || 229 === uu.nativeEvent.keyCode ? uu.stopPropagation() : "Escape" !== uu.key && (uu.stopPropagation(), null === Xu || void 0 === Xu || Xu(uu), uu.defaultPrevented || "Enter" !== uu.key || Nu && uu.shiftKey || (uu.preventDefault(), pu()))
          }
        }), (0, Vu.jsx)(xu.e, {
          className: "PanelPromptSend",
          disabled: !Su,
          onClick: pu,
          ariaLabel: Bu("codeEditorPanels:send"),
          children: (0, Vu.jsx)(Tu.c, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function eQ(uu) {
      let {
        inputRef: Ru
      } = uu;
      const {
        t: yu
      } = (0, qu.E)(), {
        messages: Eu,
        reportedPlayers: Qu,
        channel: mu
      } = (0, CQ.l)(), [Ju, Nu] = (0, Ku.useState)(""), Xu = (0, Ku.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, Vu.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, Vu.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, Vu.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: yu("codeEditorChat:title")
          })
        }), 0 === Eu.length ? (0, Vu.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: yu("codeEditorChat:empty")
        }) : (0, Vu.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, Vu.jsx)(bQ.c, {
            messages: Eu,
            reportedPlayers: Qu
          })
        }), (0, Vu.jsx)(kQ, {
          ref: Ru,
          value: Ju,
          onChange: Nu,
          onSubmit: () => {
            (0, CQ.j)(Ju), Nu(""), Xu.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: Au.kd,
          rows: 1,
          placeholder: mu ? yu("touchOnly" === (0, dQ.c)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: mu.channelName
          }) : yu("codeEditorChat:placeholder"),
          before: mu && (0, Vu.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: mu.elementBgColor
            },
            onClick: () => {
              CQ.c.selectNextChannel(), Ru.current.focus()
            },
            children: (0, Vu.jsx)(ku.d, {
              text: mu.elementContent
            })
          }),
          onKeyDown: uu => {
            const Ru = Ju === Xu.current.text;
            if ("ArrowUp" !== uu.key && "ArrowDown" !== uu.key || !Ru && "" !== Ju) "Tab" === uu.key && !uu.shiftKey && mu && (uu.preventDefault(), CQ.c.selectNextChannel());
            else {
              uu.preventDefault();
              const yu = Ru ? Xu.current.stepsBack : 0;
              Xu.current = (0, CQ.g)(yu + ("ArrowUp" === uu.key ? 1 : -1)), Nu(Xu.current.text)
            }
          }
        })]
      })
    }
    var AQ = yu(36665);

    function DQ(uu) {
      let {
        Fr: Ru,
        worldPanel: yu,
        closeWorld: Eu,
        aiShown: Ku,
        defaultWidth: Qu,
        children: mu
      } = uu;
      const Ju = "hidden" !== Ru;
      return (0, Vu.jsx)(AQ.d, {
        side: "right",
        defaultSize: Ju ? "max(18rem, 40%)" : Qu,
        covers: "expanded" === Ru ? "always" : Ju || Ku ? "narrow" : void 0,
        children: (0, Vu.jsxs)("div", {
          className: xR()("CodeEditorRightColumn", {
            WorldExpanded: "expanded" === Ru
          }),
          children: [Ju && (0, Vu.jsx)(AQ.d, {
            side: "top",
            onClose: Eu,
            children: yu
          }), mu]
        })
      })
    }
    var MQ = yu(1908),
      IQ = yu(2003),
      GQ = yu(1257);
    class UQ {
      constructor(uu, Ru, yu) {
        this.measure = uu, this.apply = Ru, this.now = yu, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.last) || void 0 === Ru ? void 0 : Ru.rect) && void 0 !== uu ? uu : null
      }
      sync() {
        const uu = function(uu) {
          const Ru = Math.round(uu.left),
            yu = Math.round(uu.top);
          return {
            left: Ru,
            top: yu,
            width: Math.round(uu.right) - Ru,
            height: Math.round(uu.bottom) - yu
          }
        }(this.measure());
        if (uu.width <= 0 || uu.height <= 0) return;
        const Ru = this.now(),
          yu = this.last;
        let Eu = {
          width: uu.width,
          height: uu.height
        };
        null === yu || uu.width === yu.rect.width && uu.height === yu.rect.height || (this.resizing = Ru - this.resizedAt < 100, this.resizedAt = Ru);
        const Ku = null !== yu && this.resizing && Ru - this.resizedAt < 100 && (uu.width !== yu.bufferSize.width || uu.height !== yu.bufferSize.height);
        Ku && (this.stretchedAt ??= Ru), Ku && Ru - this.stretchedAt < 250 ? Eu = yu.bufferSize : this.stretchedAt = null;
        const Qu = {
          rect: uu,
          bufferSize: Eu
        };
        var mu, Ju;
        null !== yu && (Ju = Qu, (mu = yu).rect.left === Ju.rect.left && mu.rect.top === Ju.rect.top && mu.rect.width === Ju.rect.width && mu.rect.height === Ju.rect.height && mu.bufferSize.width === Ju.bufferSize.width && mu.bufferSize.height === Ju.bufferSize.height) || (this.last = Qu, this.apply(Qu))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function nQ(uu) {
      const {
        style: Ru
      } = document.documentElement;
      for (const [yu, Eu] of [
          ["--worldViewLeft", null === uu || void 0 === uu ? void 0 : uu.left],
          ["--worldViewTop", null === uu || void 0 === uu ? void 0 : uu.top],
          ["--worldViewWidth", null === uu || void 0 === uu ? void 0 : uu.width],
          ["--worldViewHeight", null === uu || void 0 === uu ? void 0 : uu.height]
        ]) void 0 === Eu ? Ru.removeProperty(yu) : Ru.setProperty(yu, `${Eu}px`)
    }
    var sQ = yu(1661),
      tQ = yu(1920);

    function lQ(uu, Ru) {
      (0, Ku.useEffect)((() => {
        if (!uu) return;
        const yu = uu => {
          var yu;
          "Escape" === uu.key ? (uu.stopPropagation(), uu.preventDefault(), Ru()) : (yu = uu.code, Object.entries(my.x).some((uu => {
            let [Ru, Eu] = uu;
            const Ku = tQ.e[Ru];
            return Ku.includes("ui") && !Ku.includes("core") && Eu.includes(yu)
          })) && !(0, sQ.isTextEntry)(uu.target) && uu.preventDefault())
        };
        window.addEventListener("keydown", yu, !0);
        const Eu = (0, Fu.o)(Ru);
        return () => {
          window.removeEventListener("keydown", yu, !0), Eu()
        }
      }), [uu, Ru])
    }

    function gQ() {
      return (0, HK.k)().some((uu => uu !== HK.b))
    }

    function cQ(uu, Ru) {
      return uu.map((uu => Ru ? String(uu) : uu.toFixed(1))).join(", ")
    }

    function LQ(uu) {
      let {
        freeCamera: Ru,
        picking: yu,
        hovered: Eu
      } = uu;
      const {
        t: Qu
      } = (0, qu.E)(), mu = (0, Ku.useRef)(null), Ju = (0, Ku.useRef)(null);
      return (0, Ku.useEffect)((() => {
        const uu = (uu, Ru) => {
            uu.textContent !== Ru && (uu.textContent = Ru)
          },
          yu = () => {
            const yu = Ru ? Xu.gameBridge.lookup("freeCameraPos", null) : null;
            uu(mu.current, cQ(null !== yu && void 0 !== yu ? yu : Xu.gameBridge.lookup("localPos", null), !1));
            const Eu = Xu.gameBridge.lookup("targetedBlockPos", null);
            uu(Ju.current, Eu ? cQ(Eu, !0) : "-")
          };
        return yu(), (0, GQ.u)(yu)
      }), [Ru]), (0, Vu.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, Vu.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Qu(Ru ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, Vu.jsx)("span", {
          ref: mu
        }), (0, Vu.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Qu("codeEditorWorld:lookingAt")
        }), (0, Vu.jsx)("span", {
          ref: Ju,
          hidden: yu
        }), yu && (0, Vu.jsxs)(Vu.Fragment, {
          children: [(0, Vu.jsx)("span", {
            children: Eu ? cQ(Eu.pos, !0) : "-"
          }), Eu && (0, Vu.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: Eu.name
          })]
        })]
      })
    }
    var zQ = yu(36670);

    function FQ(uu) {
      const Ru = uu.currentTarget.getBoundingClientRect();
      return {
        x: (uu.clientX - Ru.left) / Ru.width,
        y: (uu.clientY - Ru.top) / Ru.height
      }
    }

    function wQ(uu) {
      const [Ru, yu] = (0, Ku.useState)(!1), [Eu, Qu] = (0, Ku.useState)(null), mu = (0, Ku.useRef)(null);
      (0, Ku.useEffect)((() => {
        if (!Ru) return;
        let uu = null,
          yu = null,
          Eu = 1 / 0;
        const Ku = (0, GQ.r)((Ru => {
          Eu += Ru;
          const Ku = mu.current;
          if (Ku === yu && Eu < 100) return;
          yu = Ku, Eu = 0;
          const Ju = Ku && Xu.gameBridge.lookup("blockAtViewPoint", Ku);
          var Nu, Vu;
          (Nu = Ju) === (Vu = uu) || null !== Nu && null !== Vu && Nu.name === Vu.name && (0, zQ.f)(Nu.pos, Vu.pos) && (0, zQ.f)(Nu.normal, Vu.normal) || (uu = Ju, Qu(Ju), Xu.gameBridge.send("setBlockHighlight", Ju))
        }));
        return () => {
          Ku(), null !== uu && Xu.gameBridge.send("setBlockHighlight", null), Qu(null)
        }
      }), [Ru]);
      const Ju = (0, Ku.useCallback)((() => {
        yu(!1)
      }), []);
      lQ(Ru, Ju);
      const Nu = {
        onPointerMove: uu => {
          mu.current = FQ(uu)
        },
        onPointerLeave: () => {
          mu.current = null
        },
        onClick: Eu => {
          if (!Ru) return;
          const Ku = Xu.gameBridge.lookup("blockAtViewPoint", FQ(Eu));
          null !== Ku && (yu(!1), uu(Ku.pos))
        }
      };
      return {
        picking: Ru,
        setPicking: yu,
        hovered: Eu,
        slotHandlers: Nu
      }
    }

    function ZQ(uu) {
      Xu.gameBridge.send("setFreeCameraMovesFly", uu)
    }

    function hQ(uu) {
      let {
        shown: Ru,
        setShown: yu,
        canInsertCode: Eu
      } = uu;
      const {
        t: Qu
      } = (0, qu.E)(), {
        isTouchScreen: mu
      } = (0, zu.j)(["isTouchScreen"]), Ju = (0, Ku.useRef)(null), Xu = (0, Ku.useCallback)((() => {
        var uu;
        null === (uu = Ju.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === uu || uu.focus()
      }), []), {
        control: ru,
        take: Bu,
        release: pu,
        blocked: Wu
      } = function(uu) {
        const [Ru, yu] = (0, Ku.useState)("none"), Eu = (0, Ku.useRef)("none"), [Qu, mu] = (0, Ku.useState)(!1), Ju = uu => {
          Eu.current = uu, yu(uu)
        }, Nu = (0, Ku.useCallback)((() => {
          const Ru = Eu.current;
          "none" !== Ru && (Ju("none"), (0, HK.o)(HK.b), "mouse" === Ru && uu())
        }), [uu]), Xu = (0, Ku.useCallback)((uu => {
          gQ() ? mu(!0) : (Ju("mouse" === uu && "touchOnly" !== (0, dQ.c)() ? "mouse" : "touch"), (0, HK.m)(HK.b))
        }), []);
        return (0, eu.e)("pointerLockUpdate", (uu => {
          uu && "touch" === Eu.current && "touchOnly" !== (0, dQ.c)() ? Ju("mouse") : uu || "mouse" !== Eu.current || Nu()
        })), (0, Ku.useEffect)((() => {
          if (!Qu) return;
          const uu = () => {
            gQ() || mu(!1)
          };
          return uu(), (0, HK.c)(uu)
        }), [Qu]), lQ("none" !== Ru, Nu), (0, Ku.useEffect)((() => {
          if ("none" === Ru) return;
          const uu = uu => {
            (0, sQ.isTextEntry)(uu.target) && Nu()
          };
          return document.addEventListener("focusin", uu), () => {
            document.removeEventListener("focusin", uu)
          }
        }), [Ru, Nu]), (0, Ku.useEffect)((() => (document.addEventListener("pointerlockerror", Nu), () => {
          document.removeEventListener("pointerlockerror", Nu)
        })), [Nu]), (0, Ku.useEffect)((() => () => {
          "none" !== Eu.current && null !== zu.d.get("openInGameMenuName") && (0, HK.o)(HK.b)
        }), []), {
          control: Ru,
          take: Xu,
          release: Nu,
          blocked: Qu
        }
      }(Xu), ju = (0, IQ.d)(AQ.f);
      (0, Ku.useEffect)((() => {
        "touch" !== ru || "shown" !== Ru || ju ? "none" === ru && "expanded" === Ru && yu("shown") : yu("expanded")
      }), [ru, ju]),
      function(uu, Ru) {
        const yu = (0, Ku.useRef)(Ru);
        yu.current = Ru;
        const Eu = (0, Ku.useRef)(null);
        (0, Ku.useLayoutEffect)((() => {
          const Ru = new UQ((() => uu.current.getBoundingClientRect()), (uu => {
            var Ru;
            "none" !== yu.current && nQ(null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.rect) && void 0 !== Ru ? Ru : null), (0, GQ.C)().setGameView(uu)
          }), (() => performance.now()));
          Eu.current = Ru, Ru.sync();
          const Ku = (0, GQ.o)((() => {
            Ru.sync()
          }));
          return () => {
            Ku(), zu.d.set({
              worldPanelHud: null
            }), Ru.stop()
          }
        }), [uu]), (0, Ku.useLayoutEffect)((() => {
          Eu.current.sync(), nQ("none" === Ru ? null : Eu.current.rect), zu.d.set({
            worldPanelHud: Ru
          })
        }), [Ru])
      }(Ju, "touch" === ru ? "touchControls" : "none");
      const {
        picking: Hu,
        setPicking: du,
        hovered: bu,
        slotHandlers: Cu
      } = wQ((uu => {
        Su.k.Op("CodeEditorInsertText", {
          text: `[${uu.join(", ")}]`,
          focus: !mu
        }), (0, AQ.f)() && yu("hidden")
      })), ku = function() {
        const {
          allowed: uu,
          movesFly: Ru
        } = (0, Du.i)("freeCamera"), yu = (0, Ku.useRef)(Ru), Eu = (0, Ku.useRef)(Ru);
        return Eu.current !== Ru && (Eu.current = Ru, yu.current = Ru), (0, Ku.useEffect)((() => () => {
          yu.current && ZQ(!1)
        }), []), {
          allowed: uu,
          on: Ru,
          toggle: () => {
            yu.current = !Ru, ZQ(!Ru)
          }
        }
      }(), Au = (0, Nu.g)("hideCoordinates"), Mu = (0, Du.i)("localPlayerAlive"), Iu = !Mu || Wu;
      (0, Ku.useEffect)((() => {
        Mu || pu()
      }), [Mu, pu]), (0, Ku.useEffect)((() => {
        !Iu && Eu || du(!1)
      }), [Iu, Eu, du]);
      const Gu = ku.on ? xu.l : xu.e,
        Uu = Hu ? xu.l : xu.e;
      return (0, Vu.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, Vu.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, Vu.jsx)("span", {
            className: "WorldPanelTitle",
            children: Qu("codeEditorWorld:title")
          }), "touch" === ru && !ju && (0, Vu.jsx)(xu.e, {
            className: "WorldPanelButton",
            onClick: pu,
            children: Qu("codeEditorWorld:backToCode")
          }), !Iu && ku.allowed && !mu && (0, Vu.jsx)(Yu.i, {
            tooltipInner: Qu("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, Vu.jsx)(Gu, {
              className: "WorldPanelButton",
              ariaPressed: ku.on,
              ariaLabel: Qu("codeEditorWorld:freeCamera"),
              onClick: ku.toggle,
              children: (0, Vu.jsx)(Tu.c, {
                name: "video"
              })
            })
          }), !Iu && Eu && (0, Vu.jsx)(Yu.i, {
            tooltipInner: Qu("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, Vu.jsxs)(Uu, {
              className: "WorldPanelButton",
              ariaPressed: Hu,
              onClick: () => {
                pu(), du(!Hu)
              },
              children: [(0, Vu.jsx)(Tu.c, {
                name: "crosshairs"
              }), Qu("codeEditorWorld:pick")]
            })
          })]
        }), !Au && (0, Vu.jsx)(LQ, {
          freeCamera: ku.on,
          picking: Hu,
          hovered: bu
        }), (0, Vu.jsxs)("div", {
          ref: Ju,
          className: xR()("WorldPanelSlot", {
            TouchControl: "touch" === ru,
            Picking: Hu
          }),
          onPointerDown: uu => {
            0 !== uu.button || Iu || Hu || Bu(uu.pointerType)
          },
          ...Cu,
          children: [!Iu && !Hu && (0, Vu.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !Iu && "touch" !== ru && (0, Vu.jsxs)("div", {
            className: "WorldPanelHint",
            children: [Hu && Qu(mu ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !Hu && "none" === ru && !ku.on && Qu(mu ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !Hu && "none" === ru && ku.on && Qu("codeEditorWorld:clickToFly"), "mouse" === ru && (0, Vu.jsxs)(Vu.Fragment, {
              children: [(0, Vu.jsx)(MQ.b, {
                noaAction: "OpenLobbyLeaderboard"
              }), Qu("codeEditorWorld:backToCode")]
            })]
          }), Iu && (0, Vu.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, Vu.jsx)("span", {
              children: Qu(Mu ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, Vu.jsx)(xu.e, {
              onClick: Fu.h,
              children: Qu("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var PQ = yu(4811);

    function iQ(uu) {
      let {
        Fr: Ru,
        setWorld: yu,
        toggleWorld: Eu,
        aiShown: Ku,
        closeAi: Qu
      } = uu;
      const {
        t: mu
      } = (0, qu.E)(), Ju = Ku ? "ai" : "hidden" !== Ru ? "world" : "code", Nu = [{
        value: "code",
        label: mu("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: mu("codeEditorWorld:title")
      }];
      Ku && Nu.push({
        value: "ai",
        label: mu("codeEditorWorld:aiPane")
      });
      return (0, Vu.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, Vu.jsx)(PQ.b, {
          options: Nu,
          value: Ju,
          onChange: uu => {
            "world" !== uu ? (Ku && Qu(), yu("hidden")) : "hidden" === Ru ? Eu() : Qu()
          },
          ariaLabel: mu("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var YQ = yu(36672);
    class oQ {
      constructor(uu, Ru) {
        this.storageKey = uu, this.defaultValue = Ru, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const uu = su.i.getItem(this.storageKey);
            this.value = "boolean" === typeof uu ? uu : this.defaultValue
          }
          return this.value
        }, this.set = uu => {
          this.value = uu, su.i.setItem(this.storageKey, uu);
          for (const Ru of this.listeners) Ru(uu)
        }
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
    }
    const qQ = new oQ("codeEditorLightMode", !1),
      OQ = new oQ("codeEditorAiHints", !0);

    function vQ(uu) {
      const [Ru, yu] = (0, Ku.useState)(uu.get);
      return (0, Ku.useEffect)((() => {
        const Ru = uu.subscribe(yu);
        return yu(uu.get()), Ru
      }), [uu]), [Ru, uu.set]
    }
    var aQ = yu(36681),
      fQ = yu(36683),
      um = yu(36687);
    const Rm = (0, Ku.lazy)((() => Promise.all([yu.e(289), yu.e(285), yu.e(288), yu.e(284), yu.e(81), yu.e(287), yu.e(286), yu.e(283)]).then((() => yu(40895))))),
      ym = (0, Ku.lazy)((() => Promise.all([yu.e(76), yu.e(79), yu.e(80), yu.e(78), yu.e(291)]).then((() => yu(41063))))),
      Em = (0, Ku.lazy)((() => Promise.all([yu.e(289), yu.e(288), yu.e(81), yu.e(79), yu.e(80), yu.e(78), yu.e(287), yu.e(286), yu.e(77), yu.e(88)]).then((() => yu(41066)))));

    function Km(uu) {
      return Xu.gameBridge.query("worldCodeAiChunk", uu)
    }

    function Qm() {
      return Xu.gameBridge.query("worldCodeAiGameState", null)
    }

    function mm(uu) {
      const {
        gsUrl: Ru,
        gameNameWithVariation: yu,
        lobbyName: Eu
      } = JQ();
      return (0, nK.postJsonWithMetricsCookiesAndJsonResponse)(`${Ru}/code/get-lobby-code`, UK.Lj["get-lobby-code"].toBuffer({
        gameNameWithVariation: yu,
        lobbyName: Eu,
        path: uu
      }), {
        retries: 1
      })
    }
    let Jm = !1;
    const Nm = [],
      Xm = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      Vm = (0, Ku.memo)((function(uu) {
        var Ru, yu;
        let {
          show: Eu,
          onOpen: Qu,
          onClose: Ju,
          isLobbyCode: ru
        } = uu;
        const Bu = (0, Ku.useRef)(""),
          [pu, Wu] = (0, Ku.useState)(null),
          ju = (0, Ku.useRef)(ru),
          [Hu, du] = (0, Ku.useState)({
            message: null,
            type: null
          }),
          [bu, Cu] = (0, Ku.useState)(""),
          ku = Hu.message ? Hu : {
            message: bu,
            type: "warning"
          },
          [Iu, Gu] = (0, Ku.useState)(!0),
          [Uu, su] = vQ(qQ),
          [tu, lu] = vQ(OQ),
          [gu, cu] = (0, Ku.useState)(!1),
          [Lu, wu] = (0, Ku.useState)(!1),
          Zu = (0, Ku.useRef)(null),
          hu = (0, Ku.useRef)(!1);
        (0, Ku.useEffect)((() => {
          var uu;
          Lu && hu.current && (hu.current = !1, null === (uu = Zu.current) || void 0 === uu || uu.focus())
        }), [Lu]);
        const Pu = (0, YQ.c)(),
          iu = (0, Ku.useRef)(null),
          ou = (0, Ku.useRef)(null),
          {
            openInGameMenuName: Ou,
            openEverythingMenuName: vu
          } = (0, zu.j)(["openInGameMenuName", "openEverythingMenuName"]),
          au = uu => {
            Eu && (iu.current = uu, AR.current = !0)
          };
        (0, eu.e)("OpenReportMenu", (() => {
          au("Px")
        })), (0, eu.e)("OpenStoreFromCodeEditor", (() => {
          au("store")
        })), (0, Ku.useEffect)((() => {
          const uu = iu.current;
          null === uu || "Px" === uu && ("makeReport" === Ou || "makeDiscordReport" === Ou) || "store" === uu && null !== vu || (iu.current = null, null === Ou && null === vu ? ru ? (ou.current = Ry.current, Su.k.Op("EditLobbyCode", pu)) : Su.k.Op("EditCodeBlock", {
            pos: pu,
            canChangePos: ju.current
          }) : (0, jQ.w)())
        }), [Ou, vu, ru, pu]), (0, Ku.useEffect)((() => {
          if (Eu) return () => {
            ou.current = null
          }
        }), [Eu]);
        const [fu, uR] = function() {
          const [uu, Ru] = (0, Ku.useState)(Jm);
          return (0, eu.e)("CodeEditorAiHelperShown", (uu => {
            Ru(uu)
          })), [uu, (0, Ku.useCallback)((uu => {
            Jm = uu, Su.k.Op("CodeEditorAiHelperShown", uu)
          }), [])]
        }(), [RR, yR] = (0, Ku.useState)(null), [ER, KR] = (0, Ku.useState)([]), [QR, mR] = (0, Ku.useState)(0), [JR, NR] = (0, Ku.useState)(0), [XR, VR] = (0, Ku.useState)(""), rR = (0, Ku.useRef)(null), [BR, SR] = (0, Ku.useState)(ru ? um.e : null), pR = ru || null !== pu, TR = (0, Nu.g)("canEditCode"), WR = (0, Nu.g)("canUseDevCreativeItems"), jR = (0, WQ.l)("welcome"), HR = (0, WQ.l)("docsOverview"), dR = HR ? "docsOverview" : "welcome", bR = null !== HR && void 0 !== HR ? HR : jR, CR = (0, WQ.l)("aiHelperOverview"), kR = CR ? "aiHelperOverview" : "welcome", eR = null !== CR && void 0 !== CR ? CR : jR, AR = (0, Ku.useRef)(!1), DR = (0, Ku.useRef)(!1), MR = (0, Ku.useRef)(null), [IR, GR] = (0, Ku.useState)(""), [nR, sR] = (0, Ku.useState)(!1), [tR, lR] = (0, Ku.useState)(null), gR = (0, Du.i)("connectedGame"), cR = ru && TR && "classic" === gR.gameNameWithVariation && !(0, UR.N)(gR.lobbyName), [LR, zR] = (0, Ku.useState)(null), [FR, wR] = (0, Ku.useState)({
          [sK.k]: ""
        }), [ZR, hR] = (0, Ku.useState)({
          assets: {},
          revision: 0
        }), PR = (0, Ku.useRef)(ZR), iR = (0, Ku.useCallback)((uu => {
          var Ru;
          uu.revision < PR.current.revision || (PR.current = uu, hR(uu), Cu(uu.startupError ? `Schematics could not load: ${uu.startupError}` : ""), null === (Ru = py.current) || void 0 === Ru || Ru.onLobbyFilesChanged({
            ...Ny.current,
            ...(0, ZK.h)(uu.assets)
          }))
        }), []), [YR, oR] = (0, Ku.useState)(sK.k), [qR, OR] = (0, Ku.useState)(null), [vR, aR] = (0, Ku.useState)(null), fR = (0, Ku.useRef)(!1), uy = (0, Ku.useRef)(null), Ry = (0, Ku.useRef)(YR);
        Ry.current = YR;
        const yy = (0, Ku.useRef)(qR);
        yy.current = qR;
        const Ey = qR ? null : tR,
          Qy = Ey && !Ey.engineLocked ? Ey.worldCodeEngine : null,
          Jy = (0, Ku.useRef)(vR);
        Jy.current = vR;
        const Ny = (0, Ku.useRef)(FR);
        Ny.current = FR;
        const Xy = (0, Ku.useRef)(null),
          Vy = (0, Ku.useRef)(null),
          [ry, By] = (0, Ku.useState)(!1),
          xy = (0, fK.r)(),
          Sy = (0, Ku.useRef)([]),
          py = (0, Ku.useRef)(null),
          Ty = (0, Ku.useRef)(null),
          Wy = (0, Ku.useRef)(null);

        function jy(uu) {
          du(uu), clearTimeout(MR.current), MR.current = setTimeout((() => {
            du({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const Hy = (0, Ku.useCallback)((function() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            fR.current && uy.current && (Xu.gameBridge.send("sendCodeCollab", {
              WR: tK.e.Leave,
              jR: (0, tK.B)(uy.current),
              Cm: !!uu || null
            }), fR.current = !1, uy.current = null), zR(null)
          }), []),
          dy = (0, Ku.useCallback)((uu => {
            const Ru = {
              kind: "lobby",
              path: uu
            };
            uy.current = Ru, oR(uu), Bu.current = "", Xu.gameBridge.send("sendCodeCollab", {
              WR: tK.e.Join,
              jR: (0, tK.B)(Ru)
            }), fR.current = !0
          }), []),
          by = (0, Ku.useCallback)((uu => {
            var Ru;
            const yu = null === (Ru = Ty.current) || void 0 === Ru ? void 0 : Ru.collabState;
            return yu && "lobby" === yu.docKey.kind && yu.docKey.path === uu && Ry.current === uu ? Promise.resolve({
              doc: yu.doc,
              version: yu.version,
              clientID: yu.clientID,
              docKey: yu.docKey,
              httpConfig: yu.httpConfig
            }) : new Promise(((Ru, yu) => {
              const Eu = setTimeout((() => {
                  Sy.current = Sy.current.filter((uu => uu !== Ku)), yu(new Error(`Timed out joining ${uu}`))
                }), 15e3),
                Ku = yu => {
                  "lobby" === yu.docKey.kind && yu.docKey.path === uu && (clearTimeout(Eu), Sy.current = Sy.current.filter((uu => uu !== Ku)), Ru(yu))
                };
              Sy.current.push(Ku), Ry.current !== uu ? (Hy(!0), dy(uu)) : fR.current || dy(uu)
            }))
          }), [dy, Hy]),
          Cy = (0, Ku.useCallback)((async function(uu, Ru) {
            let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const Eu = Date.now();
            let Ku = uu in Ny.current;
            for (; Ku !== Ru;) {
              if (Date.now() - Eu > yu) throw new Error(`Timed out waiting for lobby path ${uu} present=${Ru}`);
              await (0, nE.M)(50), Ku = uu in Ny.current
            }
          }), []),
          ky = (0, Ku.useCallback)((uu => {
            const Ru = Ny.current,
              yu = sK.k in Ru && sK.n in Ru;
            if (!(0, lK.h)(uu) || yu) {
              if (Ry.current === uu) {
                var Eu;
                const Ku = yu && (0, lK.h)(uu) ? uu === sK.k ? sK.n : sK.k : null !== (Eu = (0, lK.d)(Ru)) && void 0 !== Eu ? Eu : sK.k;
                Vy.current = {
                  fromPath: uu,
                  toPath: Ku
                }, oR(Ku)
              }
              Xu.gameBridge.send("sendCodeCollab", {
                WR: tK.e.DeleteFile,
                jR: (0, tK.B)({
                  kind: "lobby",
                  path: Ry.current
                }),
                km: uu
              })
            }
          }), []),
          ey = (0, Ku.useCallback)((uu => {
            ou.current = null, OR(null), aR(null), !ru || uu === Ry.current && fR.current || (Hy(!0), dy(uu))
          }), [ru, Hy, dy]),
          Ay = (0, Ku.useCallback)(((uu, Ru) => {
            const yu = FK.h[uu],
              Eu = yu && Ru in yu.files ? Ru : "index.ts";
            if (uu !== yy.current || Eu !== Jy.current) {
              var Ku;
              if (uu !== yy.current) null === (Ku = py.current) || void 0 === Ku || Ku.stopContinuousSync(), Hy(!0);
              OR(uu), aR(Eu)
            }
          }), [Hy]),
          Dy = (0, Ku.useCallback)((uu => {
            var Ru;
            const yu = Ry.current,
              Eu = Ny.current[yu],
              Ku = fR.current && !yy.current && yu in uu && void 0 !== Eu ? {
                ...uu,
                [yu]: Eu
              } : uu;
            wR(Ku);
            const Qu = Xy.current;
            if (Qu && Qu in uu) Xy.current = null, Qu !== Ry.current && ey(Qu);
            else if (!(Ry.current in uu) && fR.current && !yy.current) {
              var mu;
              ey(null !== (mu = (0, lK.d)(uu)) && void 0 !== mu ? mu : sK.k)
            }
            null === (Ru = py.current) || void 0 === Ru || Ru.onLobbyFilesChanged({
              ...Ku,
              ...(0, ZK.h)(PR.current.assets)
            })
          }), [ey]),
          My = (0, Ku.useCallback)((() => mm(Ry.current).then((async uu => {
            if (!fR.current || !uu.files) return null;
            Dy(uu.files);
            const Ru = await NQ({
              action: "state"
            });
            return iR(Ru), {
              ...uu.files,
              ...(0, ZK.h)(Ru.assets)
            }
          })).catch((uu => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", uu), jy({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [Dy, iR]),
          Iy = () => {
            Ju()
          };
        (0, Ku.useEffect)((() => {
          if (Cu(""), !Eu || !ru) return;
          let uu = !1;
          return PR.current = {
            assets: {},
            revision: 0
          }, hR(PR.current), NQ({
            action: "state"
          }).then((Ru => {
            uu || iR(Ru)
          })).catch((Ru => {
            console.error("Could not load project schematics", Ru), uu || Cu("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            uu = !0
          }
        }), [Eu, ru, iR]);
        const Gy = (0, Ku.useCallback)((function() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            uy.current && Xu.gameBridge.send("sendCodeCollab", {
              WR: tK.e.Submit,
              jR: (0, tK.B)(uy.current),
              ...uu ? {
                CR: "keepOpen"
              } : {}
            })
          }), []),
          Uy = (0, Ku.useCallback)((() => {
            if (!uy.current || "lobby" !== uy.current.kind) return;
            const uu = IR.trim();
            (0, gK.q)(uu) ? (Xu.gameBridge.send("sendCodeCollab", {
              WR: tK.e.ReloadAsVariation,
              jR: (0, tK.B)(uy.current),
              CR: uu
            }), sR(!1)) : jy({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [IR]),
          ny = (0, Ku.useCallback)((uu => {
            Xu.gameBridge.send("sendCodeCollab", {
              WR: tK.e.SetEngine,
              jR: (0, tK.B)({
                kind: "lobby",
                path: Ry.current
              }),
              CR: uu
            })
          }), []),
          sy = (0, Ku.useCallback)((uu => {
            if (!yy.current && TR && (ju.current || ru)) {
              if (ru) {
                var Ru;
                const yu = (0, lK.n)(Ny.current, Ry.current),
                  Eu = Math.min(Ky.B, Math.max(0, Ky.D - yu)),
                  Ku = uu.slice(0, Eu);
                return Bu.current = Ku, wR((uu => ({
                  ...uu,
                  [Ry.current]: Ku
                }))), void(null === (Ru = py.current) || void 0 === Ru || Ru.onDocTextChanged(Ry.current, Ku))
              }
              Bu.current = uu, VR(uu)
            }
          }), [TR, ru]);
        (0, eu.e)("EditLobbyCode", (uu => {
          var Ru;
          nu.featureFlags.canSeePlayerWrittenText && ru && (Hy(), Wu(uu), Bu.current = "", wR({
            [sK.k]: ""
          }), lR(null), oR(sK.k), OR(null), aR(null), Xy.current = null, Vy.current = null, null === (Ru = py.current) || void 0 === Ru || Ru.stopContinuousSync(), Qu(), dy(sK.k))
        })), (0, eu.e)("EditCodeBlock", (uu => {
          let {
            pos: Ru,
            canChangePos: yu
          } = uu;
          if (nu.featureFlags.canSeePlayerWrittenText && !ru)
            if (Hy(), null !== Ru && (Ru = [...Ru]), Wu(Ru), ju.current = yu, null !== Ru) {
              Bu.current = "", VR(""), Qu();
              const uu = {
                  kind: "codeBlock",
                  pos: Ru
                },
                Eu = (0, tK.B)(uu);
              rR.current !== Eu && (rR.current = Eu, KR([]), NR(QR)), SR((0, um.b)(Eu, [Ru[0], Ru[1], Ru[2]], !!yu)), uy.current = uu, Xu.gameBridge.send("sendCodeCollab", {
                WR: tK.e.Join,
                jR: (0, tK.B)(uu)
              }), fR.current = !0
            } else Eu && Ju()
        })), (0, eu.e)("codeCollabRejoin", (uu => {
          const Ru = uy.current ? (0, tK.B)(uy.current) : null;
          Ru && uu.docKey === Ru && (Bu.current = uu.doc, ru || VR(uu.doc), zR((Ru => Ru ? {
            ...Ru,
            doc: uu.doc,
            version: uu.version,
            clientID: (0, zK.d)()
          } : Ru)))
        })), (0, eu.e)("codeCollab", (uu => {
          var Ru;
          const yu = uy.current ? (0, tK.B)(uy.current) : null;
          if (uu.type === tK.f.LobbyFilesChanged && ru) {
            if ("string" !== typeof uu.files) return void My();
            try {
              Dy(JSON.parse(uu.files))
            } catch (Xu) {
              console.error("[CodeCollab] Failed to parse lobby files", Xu), My()
            }
            return
          }
          if (uu.type === tK.f.EngineSettings && ru) return void lR(BQ(uu.engineSettings));
          const Ku = uu.type === tK.f.Joined ? (0, tK.n)(uu.docKey) : null,
            Qu = ru && "lobby" === (null === (Ru = uy.current) || void 0 === Ru ? void 0 : Ru.kind) && (0, lK.h)(uy.current.path) && "lobby" === (null === Ku || void 0 === Ku ? void 0 : Ku.kind) && (0, lK.h)(Ku.path);
          if (!yu || uu.docKey === yu || Qu)
            if (uu.type !== tK.f.ForceClose) {
              if (Eu)
                if (uu.type === tK.f.Joined) {
                  var mu;
                  const Vu = JSON.parse(uu.peers),
                    xu = uu.existingCursors ? JSON.parse(uu.existingCursors) : [],
                    Tu = (0, zK.d)(),
                    Wu = JQ(),
                    {
                      gsUrl: ju,
                      gameNameWithVariation: Hu,
                      lobbyName: bu
                    } = Wu,
                    Cu = null !== (mu = (0, tK.n)(uu.docKey)) && void 0 !== mu ? mu : uy.current;
                  Cu && (uy.current = Cu, "lobby" === Cu.kind && (oR(Cu.path), Ry.current = Cu.path));
                  const ku = Cu || (ru ? {
                    kind: "lobby",
                    path: Ry.current
                  } : {
                    kind: "codeBlock",
                    pos: pu
                  });

                  function eu(Ru) {
                    var yu, Eu;
                    if (!fR.current) return;
                    const Ku = null !== (yu = Ru.code) && void 0 !== yu ? yu : "",
                      Qu = null !== (Eu = Ru.collabVersion) && void 0 !== Eu ? Eu : 0;
                    Bu.current = Ku, ru || VR(Ku), ru && Ru.files ? wR(Ru.files) : ru && wR((uu => ({
                      ...uu,
                      [Ry.current]: Ku
                    })));
                    const mu = {
                      doc: Ku,
                      version: Qu,
                      clientID: Tu,
                      docKey: ku,
                      peers: Vu,
                      editorCount: uu.editorCount,
                      existingCursors: xu,
                      httpConfig: Wu
                    };
                    if (zR(mu), "lobby" === ku.kind) {
                      var Ju;
                      const uu = {
                        doc: Ku,
                        version: Qu,
                        clientID: Tu,
                        docKey: ku,
                        httpConfig: Wu
                      };
                      for (const Ru of [...Sy.current]) Ru(uu);
                      null === (Ju = py.current) || void 0 === Ju || Ju.startWhenReady()
                    }
                    Ru.canSeeCode ? (clearTimeout(MR.current), du({
                      message: null,
                      type: null
                    })) : function(uu) {
                      clearTimeout(MR.current), du(uu)
                    }(Xm);
                    const Nu = ou.current;
                    ou.current = null, ru && Nu && Ru.files && Nu in Ru.files && Nu !== Ry.current && ey(Nu)
                  }
                  ru ? mm(Ry.current).then(eu).catch((uu => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", uu), Hy()
                  })) : (0, nK.postJsonWithMetricsCookiesAndJsonResponse)(`${ju}/code/get-code-block`, UK.Lj["get-code-block"].toBuffer({
                    gameNameWithVariation: Hu,
                    lobbyName: bu,
                    pos: pu
                  }), {
                    retries: 1
                  }).then(eu).catch((uu => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", uu), Hy()
                  }))
                } else if (uu.type === tK.f.Presence) {
                if (!yu) return;
                const Au = JSON.parse(uu.peers);
                zR((Ru => Ru ? {
                  ...Ru,
                  peers: Au,
                  editorCount: uu.editorCount
                } : Ru))
              }
            } else {
              var Nu;
              if (!yu) return;
              Eu && ru && "keptOpen" === uu.updates && Su.k.Op("CodeEditorKeepEdits");
              const Du = uy.current;
              fR.current = !1, uy.current = null, zR(null);
              if (!ru || "close" === uu.updates) return (0, fQ.j)(), void(Eu && Ju());
              if (!Eu) return;
              const Mu = Ny.current,
                Iu = Vy.current;
              Vy.current = null;
              const Gu = "lobby" === (null === Du || void 0 === Du ? void 0 : Du.kind) && Du.path === (null === Iu || void 0 === Iu ? void 0 : Iu.fromPath),
                Uu = Iu && (Gu || Iu.toPath in Mu || (0, lK.h)(Iu.toPath)) ? Iu.toPath : Ry.current in Mu ? Ry.current : null !== (Nu = (0, lK.d)(Mu)) && void 0 !== Nu ? Nu : sK.k;
              dy(Uu)
            }
        })), (0, eu.e)("refetchCode", (() => {
          nu.featureFlags.canSeePlayerWrittenText && Eu && fR.current && (TR || (Hy(), ru ? Su.k.Op("EditLobbyCode", pu) : Su.k.Op("EditCodeBlock", {
            pos: pu,
            canChangePos: ju.current
          })))
        }));
        const ty = (0, Ku.useCallback)((() => {
            Eu && (cu(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [Eu]),
          ly = (0, Ku.useCallback)((() => {
            cu(!1)
          }), []);
        (0, Ku.useEffect)((() => {
          Eu && TR && ("docsButton" === bR && gu ? (0, jQ.e)("docsButton") : bR && jQ.g.includes(bR) && !gu && (cu(!0), uR(!1)))
        }), [Eu, TR, bR, gu, uR]);
        const gy = (0, Ku.useCallback)((() => {
          uR(!1)
        }), [uR]);
        (0, Ku.useEffect)((() => {
          Eu && TR && pR && ("aiHelperButton" === eR && fu ? (0, jQ.e)("aiHelperButton") : eR && jQ.d.includes(eR) && !fu && (uR(!0), cu(!1)))
        }), [Eu, TR, pR, eR, fu, uR]), (0, Ku.useEffect)((() => {
          if (!Eu || !TR) return;
          const uu = ru ? "worldCode" : "codeBlock";
          return (0, jQ.y)(uu, !0), () => {
            (0, jQ.y)(uu, !1)
          }
        }), [Eu, TR, ru]), (0, Ku.useEffect)((() => {
          if (Eu) return () => {
            AR.current ? AR.current = !1 : (0, jQ.w)()
          }
        }), [Eu]), (0, Ku.useEffect)((() => {
          (0, jQ.A)("exportButton", !!WR)
        }), [WR]);
        const {
          t: cy
        } = (0, qu.E)(), Ly = !fu && QR > JR, zy = Ly ? xu.F : xu.s, Fy = (0, Ku.useCallback)(((uu, Ru) => {
          Su.k.Op("CodeEditorGoToLine", {
            path: uu,
            line: Ru
          }), ey(uu)
        }), [ey]), wy = (0, Ku.useCallback)((uu => {
          Wy.current = uu
        }), []), Zy = function(uu, Ru) {
          const [yu, Eu] = (0, Ku.useState)(null);
          return (0, Ku.useEffect)((() => {
            if (!Ru) return void Eu(null);
            let yu = !1;
            return aK(uu).then((uu => {
              yu || Eu(uu)
            }), (uu => {
              console.error("[CodeEditor] could not collect the imported plugins", uu), yu || Eu(null)
            })), () => {
              yu = !0
            }
          }), [uu, Ru]), yu
        }(FR, Eu);
        (0, Ku.useEffect)((() => {
          Zy && qR && !Zy.includes(qR) && (OR(null), aR(null), ru && !fR.current && dy(Ry.current))
        }), [qR, Zy, ru, dy]), Ty.current = {
          collabState: LR,
          ensureJoinedPath: by,
          waitForLobbyPath: Cy,
          pullLobbyFiles: My,
          t: cy,
          canEditCode: !!TR
        }, py.current || (py.current = new QQ({
          getLobbyFiles: () => ({
            ...Ny.current,
            ...(0, ZK.h)(PR.current.assets)
          }),
          deleteSchematic: async uu => {
            const Ru = await NQ({
              action: "remove",
              path: uu,
              expectedRevision: PR.current.revision
            });
            iR(Ru)
          },
          getActivePath: () => Ry.current,
          getCollabSnapshot: () => {
            var uu;
            if (yy.current) return null;
            const Ru = null === (uu = Ty.current) || void 0 === uu ? void 0 : uu.collabState;
            return Ru ? {
              doc: Ru.doc,
              version: Ru.version,
              clientID: Ru.clientID,
              docKey: Ru.docKey,
              httpConfig: Ru.httpConfig
            } : null
          },
          replaceActiveDoc: (uu, Ru) => {
            var yu, Eu;
            return null !== (yu = null === (Eu = Wy.current) || void 0 === Eu ? void 0 : Eu.call(Wy, uu, Ru)) && void 0 !== yu && yu
          },
          ensureJoined: uu => Ty.current.ensureJoinedPath(uu),
          createFile: (uu, Ru) => {
            !1 !== (null === Ru || void 0 === Ru ? void 0 : Ru.focus) && (Xy.current = uu), Xu.gameBridge.send("sendCodeCollab", {
              WR: tK.e.CreateFile,
              jR: (0, tK.B)({
                kind: "lobby",
                path: Ry.current
              }),
              km: uu
            })
          },
          renameFile: (uu, Ru) => {
            const yu = (0, tK.B)({
              kind: "lobby",
              path: Ry.current
            });
            Ry.current === uu && (Vy.current = {
              fromPath: uu,
              toPath: Ru
            }, oR(Ru)), Xu.gameBridge.send("sendCodeCollab", {
              WR: tK.e.RenameFile,
              jR: yu,
              km: uu,
              Am: Ru
            })
          },
          deleteFile: uu => {
            ky(uu)
          },
          waitForLobbyPath: (uu, Ru, yu) => Ty.current.waitForLobbyPath(uu, Ru, yu),
          pullLobbyFiles: () => Ty.current.pullLobbyFiles(),
          setMessage: (uu, Ru) => {
            jy({
              message: uu,
              type: Ru
            })
          },
          onUnlinked: () => {
            By(!1)
          },
          t: uu => Ty.current.t(uu),
          canEditCode: () => Ty.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: uu,
              lobbyName: Ru
            } = Xu.gameBridge.latest("connectedGame");
            return (0, fK.g)(uu, Ru)
          }
        }));
        const hy = (0, Ku.useCallback)((async uu => {
            const Ru = py.current;
            if (!Ru) return !1;
            try {
              return await Ru.writeLobbyFiles(uu)
            } catch (yu) {
              return console.error("World Code AI: couldn't write the change", yu), !1
            }
          }), []),
          Py = (0, Ku.useCallback)((async uu => {
            var Ru, yu;
            const Eu = null === (Ru = uu.find((uu => uu.path === aQ.d))) || void 0 === Ru ? void 0 : Ru.text,
              Ku = uy.current;
            return void 0 !== Eu && "codeBlock" === (null === Ku || void 0 === Ku ? void 0 : Ku.kind) && (!(null === (yu = Wy.current) || void 0 === yu || !yu.call(Wy, (0, tK.B)(Ku), Eu)) && (Bu.current = Eu, VR(Eu), !0))
          }), []),
          iy = (0, Ku.useCallback)((async () => {
            try {
              var uu, Ru;
              const yu = await mm(sK.k);
              return !1 === yu.canSeeCode ? null : null !== (uu = yu.files) && void 0 !== uu ? uu : {
                [sK.k]: null !== (Ru = yu.code) && void 0 !== Ru ? Ru : ""
              }
            } catch (yu) {
              return console.error("World Code AI: couldn't read World Code for a code block", yu), null
            }
          }), []),
          Yy = (0, Ku.useMemo)((() => ({
            [aQ.d]: XR
          })), [XR]),
          oy = (0, Ku.useCallback)(((uu, Ru) => {
            Su.k.Op("CodeEditorGoToLine", {
              path: aQ.d,
              line: Ru
            })
          }), []);
        (0, Ku.useEffect)((() => {
          fu && Eu && NR(QR)
        }), [fu, Eu, QR]);
        const qy = (0, Ku.useCallback)((() => {
            var uu, Ru;
            Gy();
            const yu = (0, nu.isTouchscreen)() ? "open World Code again" : `press ${null!==(uu=null===(Ru=my.x.OpenCodeEditor)||void 0===Ru?void 0:Ru[0])&&void 0!==uu?uu:"F8"}`,
              Eu = ru ? `\ud83e\udd16 Try out your change, then ${yu} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            Su.k.Op("chat", {
              content: [{
                str: Eu,
                style: {
                  color: Au.L.cyanUiText
                }
              }]
            })
          }), [Gy, ru]),
          Oy = (0, Ku.useCallback)((uu => {
            const Ru = pu,
              yu = ju.current;
            ru || !Ru || Xu.gameBridge.lookup("codeBlockClickable", Ru) ? (0, fQ.l)(uu, {
              submit: () => {
                Gy(), Su.k.Op("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: Au.L.cyanUiText
                    }
                  }]
                }), !ru && Ru && setTimeout((() => {
                  Xu.gameBridge.send("clickCodeBlock", Ru)
                }), 1e3)
              },
              reopen: () => {
                (0, Fu.p)() || (ru ? Su.k.Op("EditLobbyCode", Ru) : Su.k.Op("EditCodeBlock", {
                  pos: Ru,
                  canChangePos: yu
                }))
              }
            }) : qy()
          }), [Gy, ru, pu, qy]),
          vy = (0, Ku.useCallback)((() => {
            uR(!1)
          }), [uR]),
          ay = (0, Ku.useRef)(Iy);
        ay.current = Iy;
        const fy = (0, Ku.useCallback)((function(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            Su.k.Op("WorldCodeAiDraft", {
              text: uu,
              send: Ru
            }), ay.current(), Su.k.Op("EditLobbyCode", pu)
          }), [pu]),
          uE = (0, Ku.useCallback)((uu => {
            ay.current(), uu.codeBlock ? Su.k.Op("EditCodeBlock", {
              pos: [...uu.pos],
              canChangePos: uu.canChangePos
            }) : Su.k.Op("EditLobbyCode", pu)
          }), [pu]);
        (0, eu.e)("WorldCodeAiDraft", (uu => {
          ru && (yR(uu), uR(!0))
        }));
        const RE = !!TR && !!bR && jQ.g.includes(bR),
          yE = !!TR && !!eR && jQ.d.includes(eR);
        (0, Ku.useEffect)((() => {
          Eu && fu && pR && !RE && cu(!1)
        }), [Eu, fu, pR, RE]);
        const EE = (0, Ku.useCallback)((() => {
            uR(!1), cu(!1)
          }), [uR]),
          {
            Fr: KE,
            setWorld: QE,
            toggleWorld: mE
          } = function(uu) {
            let {
              showAi: Ru,
              showDocs: yu,
              showChat: Eu,
              hideOtherRightPanels: Qu
            } = uu;
            const [mu, Ju] = (0, Ku.useState)("hidden"), Nu = (0, Ku.useRef)(null), Xu = (0, Ku.useCallback)((() => {
              Nu.current = null, Ju((uu => "hidden" === uu ? uu : (0, AQ.f)() ? "hidden" : "shown"))
            }), []);
            (0, Ku.useEffect)((() => {
              (Ru || yu) && Xu()
            }), [Ru, yu, Xu]), (0, Ku.useEffect)((() => {
              Eu && Xu()
            }), [Eu, Xu]);
            const Vu = "hidden" !== mu && (0, AQ.f)();
            (0, Ku.useLayoutEffect)((() => {
              if (Vu) {
                const uu = document.activeElement;
                uu instanceof HTMLElement && uu.closest(".cm-content") && (Nu.current = uu, uu.blur())
              } else {
                var uu;
                null === (uu = Nu.current) || void 0 === uu || uu.focus(), Nu.current = null
              }
            }), [Vu]);
            const ru = (0, Ku.useCallback)((() => {
              "hidden" === mu ? (Ju("shown"), (0, AQ.f)() && Qu()) : Ju("hidden")
            }), [mu, Qu]);
            return {
              Fr: mu,
              setWorld: Ju,
              toggleWorld: ru
            }
          }({
            showAi: fu,
            showDocs: gu,
            showChat: Lu,
            hideOtherRightPanels: EE
          }),
          JE = fu && null !== BR && pR,
          NE = (0, Ku.useCallback)((() => {
            yR(null)
          }), []),
          [XE, VE] = (0, Ku.useState)(null);
        (0, eu.e)("WorldCodeAiSelection", (uu => {
          Eu && (VE(uu), uR(!0), cu(!1))
        }));
        const rE = (0, Ku.useCallback)((() => {
          VE(null)
        }), []);
        (0, eu.e)("chat", (uu => {
          let {
            content: Ru
          } = uu;
          if (!ru && null === rR.current) return;
          const yu = Array.isArray(Ru) ? Ru : [Ru],
            Eu = yu.some((uu => {
              var Ru;
              return (null === uu || void 0 === uu || null === (Ru = uu.style) || void 0 === Ru ? void 0 : Ru.color) === Au.L.redUiText
            })),
            Ku = yu.map((uu => {
              var Ru;
              const yu = null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.str) && void 0 !== Ru ? Ru : uu;
              return "string" === typeof yu ? yu : ""
            })).join("");
          Eu && /world code|error/i.test(Ku) && (KR((uu => [...uu, Ku].slice(-10))), mR((uu => uu + 1)), (0, fQ.h)(Ku))
        })), (0, Ku.useEffect)((() => {
          if (!Eu || !ru || !xy) return;
          let uu = !1;
          return (async (Ru, yu) => {
            const Eu = await (null === (Ru = py.current) || void 0 === Ru ? void 0 : Ru.tryRestoreHandle());
            !uu && Eu && (By(!0), null === (yu = py.current) || void 0 === yu || yu.startWhenReady())
          })(), () => {
            uu = !0
          }
        }), [Eu, ru, xy]), (0, Ku.useEffect)((() => {
          var uu;
          Eu || (null === (uu = py.current) || void 0 === uu || uu.stopContinuousSync(), Hy(!1), DR.current && (DR.current = !1, Xu.gameBridge.send("sendChatMessage", {
            Dm: "//export",
            channelName: null
          })))
        }), [Eu, Hy]);
        const BE = (0, Ku.useCallback)((async () => {
            if (xy && py.current) try {
              if (!await py.current.linkFolder()) return;
              By(!0), await py.current.startWhenReady()
            } catch (uu) {
              console.error("[WorldCodeDirectorySync] Link failed", uu), jy({
                message: cy("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [xy, cy]),
          xE = (0, Ku.useCallback)((async () => {
            py.current && await py.current.unlinkFolder()
          }), []),
          SE = (0, Ku.useCallback)((() => {
            xy ? ry ? xE() : BE() : XK.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [xy, ry, BE, xE]),
          pE = ru && "hidden" !== KE;
        return (0, Vu.jsxs)(mu.e, {
          className: xR()("CodeEditorBg", {
            CodeEditorLight: Uu,
            WorldShown: "hidden" !== KE
          }),
          close: Iy,
          escDoesExit: !0,
          show: Eu,
          togglePointerLock: !1,
          globallyUniqueKey: ru ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, Vu.jsx)(WQ.c, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: cy("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!TR && !ru
          }), (0, Vu.jsx)(WQ.c, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, Vu.jsxs)(Vu.Fragment, {
              children: [(0, Vu.jsx)("p", {
                children: cy("codeEditor:tutorialWorldCodeWelcome")
              }), (0, Vu.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, Vu.jsx)("li", {
                  children: cy("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, Vu.jsx)("li", {
                  children: cy("codeEditor:tutorialWorldCodeUseReact")
                }), (0, Vu.jsx)("li", {
                  children: cy("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!TR && ru
          }), (0, Vu.jsx)("div", {
            className: "CodeEditorTitle",
            children: ru ? "World Code" : "Code Block"
          }), (0, Vu.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, Vu.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, Vu.jsx)(Yu.i, {
                tooltipInner: cy(WR ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: WR ? void 0 : 0,
                hideTooltip: "exportButton" === jR,
                children: (0, Vu.jsx)(WQ.h, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: cy("codeEditor:tutorialExport"),
                  enabled: !!TR,
                  children: (0, Vu.jsx)(xu.l, {
                    className: "CodeEditorButton",
                    disabled: !WR,
                    onClick: () => {
                      "exportButton" === jR && ((0, jQ.e)("exportButton"), AR.current = !0), DR.current = !0, Iy()
                    },
                    padDestructive: !0,
                    children: cy("codeEditor:exportWorld")
                  })
                })
              }), (0, Vu.jsx)(iQ, {
                Fr: KE,
                setWorld: QE,
                toggleWorld: mE,
                aiShown: JE,
                closeAi: vy
              })]
            }), (0, Vu.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [TR && (0, Vu.jsx)(Yu.i, {
                tooltipInner: cy("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === jR,
                children: (0, Vu.jsx)(WQ.h, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: cy("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, Vu.jsx)(xu.e, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: cy("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, jQ.e)("helpButton"), XK.NotificationProvider.showCustomPopup({
                        body: uu => (0, Vu.jsx)(HQ, {
                          close: uu
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, Vu.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, Vu.jsx)(Tu.c, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, Vu.jsx)(Yu.i, {
                tooltipInner: cy("codeEditor:closeTooltip"),
                children: (0, Vu.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    Iy()
                  },
                  children: (0, Vu.jsx)(xu.h, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, Vu.jsx)(LK, {
            peers: null !== (Ru = null === LR || void 0 === LR ? void 0 : LR.peers) && void 0 !== Ru ? Ru : []
          }), (0, Vu.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [Lu && Pu && (0, Vu.jsx)(AQ.d, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                wu(!1)
              },
              children: (0, Vu.jsx)(eQ, {
                inputRef: Zu
              })
            }), ru && (0, Vu.jsx)(iK, {
              schematics: ZR.assets,
              onManageSchematic: uu => {
                TR && XK.NotificationProvider.showCustomPopup({
                  body: Ru => (0, Vu.jsx)(rQ, {
                    initialPath: uu,
                    onChanged: iR,
                    onClose: Ru
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: FR,
              activePath: YR,
              canEdit: !!TR,
              directoryLinked: ry,
              pluginNames: null !== Zy && void 0 !== Zy ? Zy : Nm,
              activePluginName: qR,
              activePluginFile: vR,
              onSelect: ey,
              onSelectPlugin: Ay,
              onToggleDirectorySync: SE,
              onCreate: uu => {
                Xy.current = uu, Xu.gameBridge.send("sendCodeCollab", {
                  WR: tK.e.CreateFile,
                  jR: (0, tK.B)({
                    kind: "lobby",
                    path: Ry.current
                  }),
                  km: uu
                })
              },
              onRename: (uu, Ru) => {
                Ry.current === uu && (Vy.current = {
                  fromPath: uu,
                  toPath: Ru
                }, oR(Ru)), Xu.gameBridge.send("sendCodeCollab", {
                  WR: tK.e.RenameFile,
                  jR: (0, tK.B)({
                    kind: "lobby",
                    path: Ry.current
                  }),
                  km: uu,
                  Am: Ru
                })
              },
              onRenameFolder: (uu, Ru) => {
                const [yu] = (0, lK.l)([Ry.current], uu, Ru);
                yu && (Vy.current = {
                  fromPath: yu[0],
                  toPath: yu[1]
                }, oR(yu[1])), Xu.gameBridge.send("sendCodeCollab", {
                  WR: tK.e.RenameFolder,
                  jR: (0, tK.B)({
                    kind: "lobby",
                    path: Ry.current
                  }),
                  km: uu,
                  Am: Ru
                })
              },
              onDelete: ky
            }), (0, Vu.jsx)("div", {
              className: xR()("CodeEditorMessage", {
                CodeEditorMessageHidden: !ku.message,
                CodeEditorMessageSuccess: "success" === ku.type
              }),
              children: ku.message && (0, Vu.jsx)("div", {
                className: "CodeEditorMessageText",
                children: ku.message
              })
            }), (0, Vu.jsx)(Ku.Suspense, {
              fallback: (0, Vu.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, Vu.jsx)(Mu.b, {})
              }),
              children: (0, Vu.jsx)(Rm, {
                isLobbyCode: ru,
                code: LR ? LR.doc : Bu.current,
                files: ru ? FR : void 0,
                activePath: ru ? YR : void 0,
                pluginName: qR,
                pluginFile: vR,
                pluginSource: qR && vR ? null === (yu = FK.h[qR]) || void 0 === yu ? void 0 : yu.files[vR] : void 0,
                onChange: sy,
                canEditCode: TR,
                setTemporaryMessage: jy,
                close: Iy,
                showTooltips: Iu,
                lightMode: Uu,
                collabState: LR,
                setActiveDocReplacer: wy,
                showAiHints: pR && tu,
                canAiChangeCode: !!TR && (ru || !!ju.current),
                onRemoteDocChange: uu => {
                  var Ru;
                  (Bu.current = uu, ru) ? (wR((Ru => ({
                    ...Ru,
                    [Ry.current]: uu
                  }))), null === (Ru = py.current) || void 0 === Ru || Ru.onDocTextChanged(Ry.current, uu)) : VR(uu)
                }
              })
            }), (gu || JE || "hidden" !== KE) && (0, Vu.jsxs)(DQ, {
              Fr: KE,
              worldPanel: (0, Vu.jsx)(hQ, {
                shown: KE,
                setShown: QE,
                canInsertCode: !!TR && !qR
              }),
              closeWorld: () => {
                QE("hidden")
              },
              aiShown: JE,
              defaultWidth: gu ? "40%" : "max(18rem, 36%)",
              children: [gu && (0, Vu.jsx)(AQ.d, {
                onClose: RE ? void 0 : ly,
                children: (0, Vu.jsx)(Ku.Suspense, {
                  fallback: (0, Vu.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, Vu.jsx)(Mu.b, {})
                  }),
                  children: (0, Vu.jsx)(ym, {
                    popOutDocs: ty,
                    hideDocs: ly,
                    tutorialEnabled: !!TR
                  })
                })
              }), JE && (0, Vu.jsx)(AQ.d, {
                onClose: yE ? void 0 : vy,
                children: (0, Vu.jsx)(Ku.Suspense, {
                  fallback: (0, Vu.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, Vu.jsx)(Mu.b, {})
                  }),
                  children: (0, Vu.jsx)(Em, {
                    target: BR,
                    chatKey: `${gR.gameNameWithVariation}/${gR.lobbyName}/aiHelper`,
                    historyKey: `${gR.gameNameWithVariation}/${gR.lobbyName}/${BR.key}`,
                    files: BR.codeBlock ? Yy : FR,
                    activePath: BR.codeBlock ? aQ.d : YR,
                    canEdit: !!TR && (BR.codeBlock ? !!ju.current : !qR),
                    isLoaded: null !== LR,
                    errors: ER,
                    errorCount: QR,
                    applyFiles: BR.codeBlock ? Py : hy,
                    submit: qy,
                    testRun: Oy,
                    close: vy,
                    goToLine: BR.codeBlock ? oy : Fy,
                    openWorldCode: BR.codeBlock ? fy : void 0,
                    readWorldCode: BR.codeBlock ? iy : void 0,
                    viewChunk: Km,
                    viewGameState: Qm,
                    openTarget: TR ? uE : void 0,
                    draft: RR,
                    onDraftUsed: NE,
                    selection: XE,
                    onSelectionUsed: rE
                  }, BR.key)
                })
              })]
            })]
          }), (null === Ey || void 0 === Ey ? void 0 : Ey.fallback) && (0, Vu.jsx)(xQ, {
            fallback: Ey.fallback,
            onGoToLine: Fy
          }), (0, Vu.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, Vu.jsx)(Yu.i, {
              tooltipInner: cy(Uu ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, Vu.jsx)(xu.e, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: cy(Uu ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  su(!Uu)
                },
                children: (0, Vu.jsx)(Tu.c, {
                  name: Uu ? "moon" : "sun-bright"
                })
              })
            }), (0, Vu.jsx)(Yu.i, {
              tooltipInner: cy(pE ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, Vu.jsx)(xu.l, {
                className: "CodeEditorButton",
                onClick: () => {
                  Gy(pE)
                },
                padDefaultFocus: !0,
                children: cy("codeEditor:submitCode")
              })
            }), (0, Vu.jsx)(Yu.i, {
              tooltipInner: cy(gu ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === bR || "hideDocsButton" === bR,
              children: (0, Vu.jsx)(WQ.h, {
                tutorial: dR,
                step: gu ? "hideDocsButton" : "docsButton",
                text: cy(gu ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!TR,
                placement: "top",
                waitForClick: !0,
                onPrevious: gu && "welcome" === dR ? ly : void 0,
                children: (0, Vu.jsx)(xu.s, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, jQ.e)(gu ? "hideDocsButton" : "docsButton"), cu(!gu), uR(!1)
                  },
                  children: cy(gu ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), pR && (0, Vu.jsx)(WQ.h, {
              tutorial: kR,
              step: fu ? "hideAiHelperButton" : "aiHelperButton",
              text: cy(fu ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === kR ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!TR,
              placement: "top",
              waitForClick: !0,
              onPrevious: fu && "welcome" === kR ? gy : void 0,
              children: (0, Vu.jsx)(zy, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, jQ.e)(fu ? "hideAiHelperButton" : "aiHelperButton"), uR(!fu), cu(!1)
                },
                children: fu ? "Hide AI Helper" : Ly ? "Fix error with AI" : "AI Helper"
              })
            }), Pu && (0, Vu.jsx)(Yu.i, {
              tooltipInner: cy(Lu ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, Vu.jsx)(xu.s, {
                className: "CodeEditorButton",
                onClick: () => {
                  hu.current = !Lu, wu(!Lu)
                },
                children: cy(Lu ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, Vu.jsx)(Yu.i, {
              tooltipInner: cy("hidden" === KE ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, Vu.jsx)(xu.s, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: mE,
                children: cy("hidden" === KE ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, Vu.jsx)(Yu.i, {
              tooltipInner: cy("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, Vu.jsx)(xu.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  Su.k.Op("FormatCode")
                },
                children: cy("codeEditor:formatCode")
              })
            }), (0, Vu.jsx)(Yu.i, {
              tooltipInner: cy("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, Vu.jsx)(xu.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(Bu.current).then((() => {
                    jy({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    jy({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: cy("codeEditor:copyCode")
              })
            }), (0, Vu.jsx)(Yu.i, {
              tooltipInner: cy(Iu ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, Vu.jsx)(xu.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  Gu(!Iu)
                },
                children: cy(Iu ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !ru && (0, Vu.jsx)(Yu.i, {
              tooltipInner: cy("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === jR,
              children: (0, Vu.jsx)(WQ.h, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: cy("codeEditor:tutorialWorldCodeButton"),
                enabled: !!TR,
                placement: "top",
                waitForClick: !0,
                children: (0, Vu.jsx)(xu.s, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === jR && ((0, jQ.e)("worldCodeButton"), AR.current = !0), Iy(), Su.k.Op("EditLobbyCode", pu)
                  },
                  children: cy("codeEditor:worldCode")
                })
              })
            }), (cR || Qy || pR) && (0, Vu.jsx)(Yu.i, {
              tooltipInner: cy("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, Vu.jsx)(xu.e, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  sR(!0)
                },
                children: (0, Vu.jsx)(Tu.c, {
                  name: "ellipsis"
                })
              })
            })]
          }), nR && (0, Vu.jsx)(rK.c, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              sR(!1)
            },
            body: (0, Vu.jsx)(TQ, {
              engine: Qy,
              onSetEngine: ny,
              aiHints: pR ? {
                shown: tu,
                setShown: lu
              } : null,
              variation: cR ? {
                name: IR,
                setName: GR,
                reload: Uy
              } : null
            })
          })]
        })
      })),
      rm = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function Bm(uu) {
      return "inventory" === uu
    }
    const xm = (0, Ku.memo)((function() {
      const {
        openEverythingMenuName: uu,
        openInGameMenuName: Ru
      } = (0, zu.j)(["openEverythingMenuName", "openInGameMenuName"]), yu = (0, Du.i)("fullInventory"), Qu = (0, Ku.useRef)(null), mu = (0, YR.k)();
      (0, eu.e)("toggleMenu", (uu => {
        var Ru;
        if (!mu.shown) return;
        const yu = zu.d.get("openInGameMenuName");
        let Eu = uu.split("|")[0];
        const Ku = null !== (Ru = uu.split("|")[1]) && void 0 !== Ru ? Ru : null;
        ("closeCurrentMenu" === Ku && yu || Eu === yu) && (Qu.current = null, Eu = null);
        const Ju = "closeCurrentMenu" === Ku ? null : Ku;
        Qu.current !== Ju && (Qu.current = Ju), null !== Eu && (0, HK.o)(HK.b, {
          keepsMovement: Bm(Eu)
        }), zu.d.set({
          openInGameMenuName: Eu
        })
      }));
      const Ju = (0, Ku.useCallback)((uu => () => {
          Su.k.Op("toggleMenu", uu)
        }), []),
        Nu = (0, Ku.useRef)({
          cantCrouchIfNotFullscreen: Ju("cantCrouchIfNotFullscreen"),
          makeReport: Ju("makeReport"),
          makeDiscordReport: Ju("makeDiscordReport"),
          editBook: Ju("editBook"),
          editNameTag: Ju("editNameTag"),
          inventory: Ju("inventory"),
          inviteLink: Ju("inviteLink"),
          writeOnBoard: Ju("writeOnBoard"),
          codeEditor: Ju("codeEditor"),
          lobbyCodeEditor: Ju("lobbyCodeEditor"),
          customLobbyBlockEditor: Ju("customLobbyBlockEditor"),
          ironChestPasskeyInput: Ju("ironChestPasskeyInput"),
          petUi: Ju("petUi")
        }),
        Xu = (0, Ku.useCallback)((() => {
          zu.d.set({
            openInGameMenuName: null
          })
        }), []),
        ru = (0, Ku.useRef)(null);
      return (0, Ku.useEffect)((() => {
        if (Ru) {
          var uu;
          (0, HK.o)(HK.b, {
            keepsMovement: Bm(Ru)
          }), ru.current = rm.has(Ru) ? null !== (uu = zu.d.get("openEverythingMenuName")) && void 0 !== uu ? uu : ru.current : null, zu.d.set({
            openEverythingMenuName: null
          })
        } else {
          const uu = ru.current;
          ru.current = null, null !== uu && null === zu.d.get("openEverythingMenuName") && zu.d.set({
            openEverythingMenuName: uu
          }), Qu.current = null, (0, HK.m)(HK.b)
        }
      }), [Ru]), (0, Ku.useEffect)((() => {
        null !== uu && Xu()
      }), [uu, Xu]), (0, Vu.jsxs)(Vu.Fragment, {
        children: [(0, Vu.jsx)(Eu.g, {
          show: "clientGame" === Ru
        }), (0, Vu.jsx)(mK, {
          show: "cantCrouchIfNotFullscreen" === Ru,
          onOpen: Nu.current.cantCrouchIfNotFullscreen,
          onClose: Xu
        }), (0, Vu.jsx)(TK, {
          show: "makeReport" === Ru,
          onOpen: Nu.current.makeReport,
          onClose: Xu
        }), (0, Vu.jsx)(jK, {
          show: "makeDiscordReport" === Ru,
          onOpen: Nu.current.makeDiscordReport,
          onClose: Xu
        }), (0, Vu.jsx)(Wy, {
          show: "editBook" === Ru,
          onOpen: Nu.current.editBook,
          onClose: Xu
        }), (0, Vu.jsx)(py, {
          show: "editNameTag" === Ru,
          onOpen: Nu.current.editNameTag,
          onClose: Xu
        }), yu && (0, Vu.jsx)(EK, {
          show: "inventory" === Ru,
          onOpen: Nu.current.inventory,
          onClose: Xu,
          variation: Qu.current
        }), (0, Vu.jsx)(oR, {
          show: "inviteLink" === Ru,
          onClose: Xu,
          option: Qu.current
        }), (0, Vu.jsx)(lu, {
          show: "retentionFeatures" === Ru,
          onClose: Xu
        }), (0, Vu.jsx)(Sy, {
          show: "writeOnBoard" === Ru,
          onOpen: Nu.current.writeOnBoard,
          onClose: Xu
        }), (0, Vu.jsx)(Vm, {
          show: "lobbyCodeEditor" === Ru,
          onOpen: Nu.current.lobbyCodeEditor,
          onClose: Xu,
          isLobbyCode: !0
        }), (0, Vu.jsx)(Vm, {
          show: "codeEditor" === Ru,
          onOpen: Nu.current.codeEditor,
          onClose: Xu,
          isLobbyCode: !1
        }), (0, Vu.jsx)(bK, {
          show: "customLobbyBlockEditor" === Ru,
          onOpen: Nu.current.customLobbyBlockEditor,
          onClose: Xu
        }), (0, Vu.jsx)(gy, {
          show: "ironChestPasskeyInput" === Ru,
          onOpen: Nu.current.ironChestPasskeyInput,
          onClose: Xu
        }), (0, Vu.jsx)(MK, {
          togglePointerLock: !0,
          show: "petUi" === Ru,
          onOpen: Nu.current.petUi,
          onClose: Xu
        })]
      })
    }))
  },
  36344: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qm
    });
    yu(36350);
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(3543),
      Ju = yu(1400),
      Nu = yu(1825),
      Xu = yu(1079);

    function Vu() {
      const uu = 2e3,
        [Ru, yu] = (0, Eu.useState)(null),
        [Ku, Vu] = (0, Eu.useState)(null),
        ru = (0, Eu.useRef)(null);
      (0, Ju.e)("showBottomMessage", (Ru => {
        let {
          message: yu,
          timeoutLength: Eu = uu,
          type: Ku
        } = Ru;
        Vu({
          message: yu,
          type: Ku
        }), clearTimeout(ru.current), ru.current = setTimeout((() => {
          Vu(null)
        }), Eu)
      })), (0, Ju.e)("showPermanentBottomMessage", (uu => {
        yu(uu)
      })), (0, Eu.useEffect)((() => ((0, mu.e)((() => {
        yu(null)
      })), () => {
        clearTimeout(ru.current)
      })), []);
      const Bu = Ku || Ru;
      return Bu ? (0, Xu.jsx)("div", {
        className: Qu()("BottomScreenMessage", Bu.type),
        children: (0, Xu.jsx)(Nu.d, {
          text: Bu.message
        })
      }) : null
    }
    var ru = yu(2266),
      Bu = yu(1855),
      xu = yu(1467),
      Su = yu(2337);

    function pu() {
      let uu;
      const Ru = () => {
          clearTimeout(uu), uu = setTimeout((() => {
            Bu.gameBridge.latest("connectedGame").replay || (Bu.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, xu.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        yu = () => {
          clearTimeout(uu)
        };
      return window.addEventListener("focus", yu), window.addEventListener("blur", Ru), () => {
        window.removeEventListener("blur", Ru), window.removeEventListener("focus", yu), clearTimeout(uu)
      }
    }
    var Tu = yu(1107),
      Wu = yu(1100),
      ju = yu(330),
      Hu = yu(2335),
      du = yu(34),
      bu = yu(1878),
      Cu = yu(47),
      ku = yu(1899),
      eu = yu(27),
      Au = yu(1908),
      Du = yu(1354),
      Mu = yu(8563),
      Iu = yu(1935),
      Gu = yu(1170);
    const Uu = (0, Eu.memo)((function() {
      const {
        isTouchScreen: uu,
        loadingOverlayVisible: Ru,
        openInGameMenuName: yu,
        openEverythingMenuName: Ku
      } = (0, eu.j)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), mu = (0, Du.n)();
      (0, Wu.d)();
      const Ju = (0, Hu.g)("showBasicMovementControls"),
        [Nu, Vu] = (0, Eu.useState)("movement"),
        ru = "movement" === Nu,
        Bu = mu && !1 !== Ju;
      (0, Eu.useEffect)((() => {
        "padActions" !== Nu || Bu || Vu("done")
      }), [Nu, Bu]);
      const xu = Ru || null !== yu || null !== Ku,
        Su = (0, Eu.useRef)({
          step: Nu,
          ms: 0
        });
      return (0, Eu.useEffect)((() => {
        if (xu || "done" === Nu) return;
        Su.current.step !== Nu && (Su.current = {
          step: Nu,
          ms: 0
        });
        const uu = Su.current,
          Ru = performance.now(),
          yu = setTimeout((() => {
            Vu("movement" === Nu && (0, Du.g)() ? "padActions" : "done")
          }), 7e3 - uu.ms);
        return () => {
          clearTimeout(yu), uu.ms += performance.now() - Ru
        }
      }), [xu, Nu]), Cu.i.getItem(ju.Nb) > 2 ? (0, Xu.jsx)(lu, {
        showingMovementControls: !1
      }) : (0, Xu.jsxs)(Xu.Fragment, {
        children: [uu && !mu || !ru || !1 === Ju ? null : (0, Xu.jsxs)("div", {
          className: Qu()("ControlsTutorialDiv", {
            Covered: xu
          }),
          children: [(0, Xu.jsx)(nu, {}), (0, Xu.jsx)(tu, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Xu.jsx)(tu, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === Nu && Bu && (0, Xu.jsx)(su, {
          covered: xu
        }), (0, Xu.jsx)(lu, {
          showingMovementControls: "done" !== Nu
        })]
      })
    }));

    function nu() {
      const uu = (0, Du.n)();
      return (0, Xu.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Xu.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), uu && (0, Xu.jsx)(Au.b, {
          noaAction: "forward"
        }), !uu && (0, Xu.jsxs)(Xu.Fragment, {
          children: [(0, Xu.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Xu.jsx)(Au.b, {
              noaAction: "forward"
            })
          }), (0, Xu.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Xu.jsx)(Au.b, {
              noaAction: "left"
            }), (0, Xu.jsx)(Au.b, {
              noaAction: "backward"
            }), (0, Xu.jsx)(Au.b, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function su(uu) {
      let {
        covered: Ru
      } = uu;
      const {
        t: yu
      } = (0, Gu.E)(), Eu = (0, Hu.g)("useInventory");
      return (0, Xu.jsxs)("div", {
        className: Qu()("ControlsTutorialDiv", {
          Covered: Ru
        }),
        children: [(0, Xu.jsx)(tu, {
          header: yu("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Xu.jsx)(tu, {
          header: yu("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== Eu && (0, Xu.jsx)(tu, {
          header: yu("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Xu.jsx)(tu, {
          header: yu("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function tu(uu) {
      let {
        header: Ru,
        noaAction: yu
      } = uu;
      return (0, Xu.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Xu.jsx)("div", {
          className: "KeyHeader",
          children: Ru
        }), (0, Xu.jsx)(Au.b, {
          noaAction: yu
        })]
      })
    }

    function lu(uu) {
      let {
        showingMovementControls: Ru
      } = uu;
      const {
        isTouchScreen: yu
      } = (0, eu.j)(["isTouchScreen"]), Ku = (0, Du.n)(), Qu = (0, Iu.d)("OpenShop"), [mu, Ju] = (0, Eu.useState)(!1), Nu = `SeenShopControls|${(0,ku.h)("connectedGame",(uu=>uu.gameNameWithVariation))}`, Vu = () => (!(0, Du.g)() || null !== (0, Mu.c)("OpenShop")) && !Cu.i.getItem(Nu) && bu.b.get("shopInfo") && !Ru, ru = () => (Ju(!0), Cu.i.setItem(Nu, !0), (0, Du.g)() || du.k.Op("showShopTouchTutorial"), setTimeout((() => {
        Ju(!1)
      }), 7e3));
      (0, Eu.useEffect)((() => {
        let uu;
        const Ru = du.k.subscribe("showShopTutorial", (() => {
          Vu() && (uu = ru())
        }));
        return () => {
          clearTimeout(uu), du.k.unsubscribe(Ru)
        }
      }), [Ru]);
      const Bu = (0, Eu.useRef)();
      return (0, Hu.e)("currencyAmounts", (uu => {
        if (Vu()) {
          let yu = !1;
          const Eu = bu.b.get("shopInfo");
          for (const Ku in Eu) {
            for (const Qu in Eu[Ku].items) {
              var Ru;
              const mu = Eu[Ku].items[Qu];
              if (void 0 !== mu.currency && uu[mu.currency] && mu.cost <= uu[mu.currency].amount && (null === (Ru = mu.hidden) || void 0 === Ru || !Ru)) {
                yu = !0;
                break
              }
            }
            if (yu) break
          }
          yu && (Bu.current = ru())
        }
      })), (0, Eu.useEffect)((() => () => {
        clearTimeout(Bu.current)
      }), [Ru]), !mu || Ku && !Qu ? null : (0, Xu.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: yu && !Ku ? null : (0, Xu.jsx)(tu, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var gu = yu(1325),
      cu = yu(1043);
    const Lu = (0, Eu.memo)((function() {
      return (0, Wu.d)(), (0, Xu.jsx)(zu, {})
    }));
    class zu extends Eu.Component {
      constructor(uu) {
        super(uu), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = du.k.subscribe("TopRightHelper", (uu => {
          this.showQueue.push(uu), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        du.k.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(uu, Ru) {
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
        let uu, Ru, yu, Eu, Ku, Qu = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, uu = "slideIn") : "slideOut" === this.state.currState ? uu = "slideOut" : null === this.currMessage && (Qu = !1), this.currMessage) {
          const Qu = this.currMessage.color || "rgb(102, 102, 102)";
          Ru = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === uu ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, yu = {
            backgroundColor: Qu
          }, Eu = {
            animation: "2s " + ("slideOut" === uu ? "CloseNotification" : "ExpandNotification")
          }, Ku = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === uu ? "textDisappear" : "textAppear")
          }
        }
        return Qu ? (0, Xu.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...Ru
          },
          children: [(0, Xu.jsx)("div", {
            className: "LeftSide",
            style: yu,
            children: (0, Xu.jsx)(cu.c, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, Xu.jsx)("div", {
            className: "RightSide",
            style: Eu,
            children: (0, Xu.jsx)("div", {
              className: "HelperText",
              style: Ku,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var Fu = yu(36352),
      wu = yu(1362);
    const Zu = (0, wu.g)((uu => uu.PadSneakChip));

    function hu(uu) {
      const [Ru, yu, Eu] = function(uu) {
        const Ru = parseInt(uu.substring(1), 16),
          yu = (Ru >> 16) / 255,
          Eu = (Ru >> 8 & 255) / 255,
          Ku = (255 & Ru) / 255,
          Qu = Math.max(yu, Eu, Ku),
          mu = Math.min(yu, Eu, Ku),
          Ju = (Qu + mu) / 2,
          Nu = Qu - mu;
        if (0 === Nu) return [0, 0, Ju];
        const Xu = Nu / (1 - Math.abs(2 * Ju - 1));
        let Vu;
        Vu = Qu === yu ? (Eu - Ku) / Nu % 6 : Qu === Eu ? (Ku - yu) / Nu + 2 : (yu - Eu) / Nu + 4;
        return [(60 * Vu + 360) % 360, Xu, Ju]
      }(uu), Ku = 0 === yu ? 0 : Math.min(.6, yu + .03), Qu = Eu > .5 ? -1 : 1, mu = Pu(Eu + .09 * Qu);
      return {
        panel: uu,
        slot: iu(Ru, Ku, mu),
        slotSelected: iu(Ru, Ku, Pu(mu + .2 * Qu)),
        slotUnavailable: iu(Ru, Ku, Pu(Eu + -.1 * Qu))
      }
    }

    function Pu(uu) {
      return Math.min(1, Math.max(0, uu))
    }

    function iu(uu, Ru, yu) {
      const Eu = (1 - Math.abs(2 * yu - 1)) * Ru,
        Ku = Eu * (1 - Math.abs(uu / 60 % 2 - 1)),
        Qu = yu - Eu / 2;
      let mu;
      return mu = uu < 60 ? [Eu, Ku, 0] : uu < 120 ? [Ku, Eu, 0] : uu < 180 ? [0, Eu, Ku] : uu < 240 ? [0, Ku, Eu] : uu < 300 ? [Ku, 0, Eu] : [Eu, 0, Ku], "#" + mu.map((uu => function(uu) {
        return Math.round(255 * uu).toString(16).padStart(2, "0")
      }(uu + Qu))).join("")
    }
    var Yu = yu(36377),
      ou = yu(4091),
      qu = yu(2306),
      Ou = yu(2312),
      vu = yu(36431),
      au = yu(4586),
      fu = yu(1417),
      uR = yu(610);

    function RR(uu, Ru, yu, Eu) {
      uu.style.display = "";
      const Ku = uu.offsetWidth,
        Qu = uu.offsetHeight,
        mu = Math.min(Math.max((Ru.left + Ru.right) / 2 - Ku / 2, 8), window.innerWidth - 8 - Ku);
      let Ju = Ru.top - yu - Qu;
      const Nu = [...Eu].sort(((uu, Ru) => Ru.top - uu.top));
      for (const Xu of Nu) mu < Xu.right && mu + Ku > Xu.left && Ju < Xu.bottom && Ju + Qu > Xu.top && (Ju = Xu.top - 8 - Qu);
      return Ju < 8 ? (uu.style.display = "none", null) : (uu.style.transform = `translate(${mu-Ru.left}px, ${Ju-Ru.top}px)`, {
        left: mu,
        top: Ju,
        right: mu + Ku,
        bottom: Ju + Qu
      })
    }

    function yR(uu) {
      const Ru = [];
      for (const yu of document.querySelectorAll(uu)) {
        const uu = yu.getBoundingClientRect();
        uu.width > 0 && "visible" === getComputedStyle(yu).visibility && Ru.push(uu)
      }
      return Ru
    }

    function ER(uu, Ru) {
      return uu.clientX >= Ru.left - 8 && uu.clientX <= Ru.right + 8 && uu.clientY >= Ru.top - 8 && uu.clientY <= Ru.bottom + 8
    }
    var KR = yu(8631);
    class QR {
      constructor(uu) {
        this.deps = uu, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(uu) {
        uu && "armed" === this.phase ? this.setPhase("ready") : uu || "ready" !== this.phase || this.setPhase("armed")
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
      hold(uu, Ru) {
        this.suspended || (this.offered ? Ru || this.setPhase("idle") : uu && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : uu || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(uu) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const Ru = this.phase;
        this.phase = uu, this.deps.onPhase(uu, Ru)
      }
    }
    const mR = 25 * Math.PI / 180,
      JR = 45 * Math.PI / 180;
    class NR extends QR {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(uu, Ru, yu) {
        this.speed = yu;
        const Eu = Math.hypot(uu, Ru),
          Ku = Eu > 0 ? Math.acos(Math.min(1, -Ru / Eu)) : Math.PI;
        this.hold(Eu >= .8 && Ku <= mR, Eu >= .5 && Ku <= JR)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var XR = yu(1250);

    function VR(uu, Ru) {
      const yu = (0, Eu.useRef)(null),
        Ku = (0, Eu.useRef)(Ru);
      return Ku.current = Ru, (0, Eu.useEffect)((() => {
        if (!uu) return;
        const {
          create: Ru,
          elementRef: Eu,
          ringRef: Qu,
          classPrefix: mu,
          keptBehindMovementPanels: Ju,
          resizeEnds: Nu
        } = Ku.current, Xu = {
          charging: `${mu}Charging`,
          armed: `${mu}Armed`,
          ready: `${mu}Ready`,
          locked: `${mu}Locked`
        };
        let Vu = null;
        const ru = Ru({
          onPhase: (uu, Ru) => {
            const yu = Eu.current;
            if (null !== yu) {
              for (const [Ru, Eu] of Object.entries(Xu)) yu.classList.toggle(Eu, Ru === uu);
              if ("charging" === uu) Vu = Qu.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === uu) {
                var mu;
                null === (mu = Vu) || void 0 === mu || mu.cancel(), Vu = null
              }
              var Ju, Nu;
              if ("armed" === uu && "charging" === Ru && Ku.current.onArmed(), "ready" === uu && KR.d.play("lockReady"), "locked" === uu) KR.d.play("lockLocked"), null === (Ju = (Nu = Ku.current).onLocked) || void 0 === Ju || Ju.call(Nu);
              "locked" === Ru && Ku.current.onUnlocked()
            }
          }
        });
        yu.current = ru;
        const Bu = () => {
            ru.suspend()
          },
          xu = () => {
            "hidden" === document.visibilityState && Bu()
          },
          Su = () => {
            Nu ? ru.suspend() : ru.suspendArming()
          },
          pu = (0, XR.g)((uu => {
            let {
              keepsMovement: Ru
            } = uu;
            Ru && Ju ? ru.suspendArming() : Bu()
          }));
        return document.addEventListener("visibilitychange", xu), window.addEventListener("blur", Bu), window.addEventListener("resize", Su), () => {
          pu(), document.removeEventListener("visibilitychange", xu), window.removeEventListener("blur", Bu), window.removeEventListener("resize", Su), ru.cancel(), yu.current = null
        }
      }), [uu]), (0, ku.d)("localPlayerAliveSet", (() => {
        var uu;
        null === (uu = yu.current) || void 0 === uu || uu.suspend()
      })), yu
    }
    var rR = yu(2347),
      BR = yu(2360),
      xR = yu(1093),
      SR = yu(3208),
      pR = yu(2368);

    function TR(uu, Ru, yu) {
      const Eu = function(uu, Ru, yu) {
        const Eu = yu.map((yu => ({
            left: Math.max(0, yu.left),
            top: Math.max(0, yu.top),
            right: Math.min(uu, yu.right),
            bottom: Math.min(Ru, yu.bottom)
          }))).filter((uu => uu.right > uu.left && uu.bottom > uu.top)),
          Ku = [...new Set([0, Ru, ...Eu.flatMap((uu => [uu.top, uu.bottom]))])].sort(((uu, Ru) => uu - Ru)),
          Qu = [];
        for (let mu = 0; mu < Ku.length - 1; mu++) {
          const Ru = Ku[mu],
            yu = Ku[mu + 1],
            Ju = Eu.filter((uu => uu.top <= Ru && uu.bottom >= yu)).map((uu => [uu.left, uu.right])).sort(((uu, Ru) => uu[0] - Ru[0]));
          let Nu = 0;
          for (const [uu, Eu] of Ju) uu > Nu && Qu.push({
            left: Nu,
            top: Ru,
            right: uu,
            bottom: yu
          }), Nu = Math.max(Nu, Eu);
          Nu < uu && Qu.push({
            left: Nu,
            top: Ru,
            right: uu,
            bottom: yu
          })
        }
        return Qu
      }(uu, Ru, yu);
      if (0 === Eu.length) return 'path("M0 0Z")';
      if (1 === Eu.length && 0 === Eu[0].left && 0 === Eu[0].top && Eu[0].right === uu && Eu[0].bottom === Ru) return "";
      const Ku = uu => Math.round(10 * uu) / 10;
      return `path("${Eu.map((uu=>`M${Ku(uu.left)} ${Ku(uu.top)}H${Ku(uu.right)}V${Ku(uu.bottom)}H${Ku(uu.left)}Z`)).join("")}")`
    }

    function WR(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const Ku = [],
        Qu = 2 * yu / Eu;
      for (let mu = 0; mu < Eu; mu++) {
        const Eu = Ru - yu + mu * Qu,
          Ju = Eu + Qu,
          Nu = Math.min(Math.max(Ru, Eu), Ju) - Ru,
          Xu = Math.sqrt(Math.max(0, yu * yu - Nu * Nu));
        Ku.push({
          left: uu - Xu,
          top: Eu,
          right: uu + Xu,
          bottom: Ju
        })
      }
      return Ku
    }
    var jR = yu(8637),
      HR = yu(36399);

    function dR(uu) {
      const Ru = uu.getBoundingClientRect(),
        yu = {
          left: Ru.left,
          top: Ru.top,
          right: Ru.right,
          bottom: Ru.bottom
        },
        Eu = (0, vu.g)(uu);
      if (Eu.whole) return [yu];
      const Ku = function(uu) {
          const Ru = uu.right - uu.left,
            yu = uu.bottom - uu.top,
            Eu = Math.min(Ru, yu) / 2,
            Ku = (uu.left + uu.right) / 2,
            Qu = (uu.top + uu.bottom) / 2;
          return Ru >= yu ? [{
            left: uu.left + Eu,
            top: uu.top,
            right: uu.right - Eu,
            bottom: uu.bottom
          }, ...WR(uu.left + Eu, Qu, Eu), ...WR(uu.right - Eu, Qu, Eu)] : [{
            left: uu.left,
            top: uu.top + Eu,
            right: uu.right,
            bottom: uu.bottom - Eu
          }, ...WR(Ku, uu.top + Eu, Eu), ...WR(Ku, uu.bottom - Eu, Eu)]
        }(yu),
        Qu = Eu.keyBox;
      if (Qu) {
        const uu = (yu.left + yu.right) / 2,
          Ru = (yu.top + yu.bottom) / 2;
        Ku.push({
          left: uu - Qu.width / 2,
          top: Ru - Qu.height / 2,
          right: uu + Qu.width / 2,
          bottom: Ru + Qu.height / 2
        })
      }
      return Ku
    }

    function bR(uu) {
      const Ru = uu.getBoundingClientRect();
      return 0 === Ru.width && 0 === Ru.height || "visible" !== getComputedStyle(uu).visibility ? [] : [(0, jR.l)(Ru, 44)]
    }

    function CR(uu, Ru) {
      (0, Eu.useEffect)((() => {
        const yu = uu.current;
        if (!Ru || !yu) return;
        const Eu = () => {
          const uu = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            Ru = uu.find((uu => uu.classList.contains("TouchInteractHit")));
          Ru !== Ku && (Ku && Qu.unobserve(Ku), Ku = Ru, Ru && Qu.observe(Ru));
          const Eu = Array.from(document.querySelectorAll(pR.d)),
            mu = [...uu.flatMap((uu => dR(uu))), ...Eu.flatMap(bR)],
            Ju = function(uu, Ru) {
              const yu = Ru.map((Ru => ({
                left: Ru.left - uu.left,
                top: Ru.top - uu.top,
                right: Ru.right - uu.left,
                bottom: Ru.bottom - uu.top
              })));
              return TR(Math.ceil(uu.width), Math.ceil(uu.height), yu)
            }(yu.getBoundingClientRect(), mu);
          yu.style.clipPath !== Ju && (yu.style.clipPath = Ju)
        };
        let Ku;
        const Qu = new ResizeObserver((() => {
          Eu()
        }));
        Eu(), Qu.observe(yu);
        const mu = yu.closest(".InGameUi"),
          Ju = new MutationObserver(Eu);
        mu && Ju.observe(mu, {
          attributes: !0,
          attributeFilter: ["class", HR.f]
        });
        const Nu = [(0, du.n)(SR.d, Eu), (0, du.n)(pR.u, Eu), (0, du.n)(pR.e, Eu)];
        return () => {
          Qu.disconnect(), Ju.disconnect();
          for (const uu of Nu) uu();
          yu.style.clipPath = ""
        }
      }), [uu, Ru])
    }
    var kR = yu(4169);

    function eR(uu) {
      var Ru;
      let {
        onMove: yu,
        mode: Ku,
        speedCurve: Qu,
        autorun: mu = !1
      } = uu;
      const Ju = (0, Eu.useRef)(null),
        Nu = (0, Eu.useRef)(null),
        Vu = (0, Eu.useRef)(null),
        ru = (0, Eu.useRef)(null),
        xu = (0, Eu.useRef)(null),
        Su = (0, Eu.useRef)(null),
        pu = (0, Eu.useRef)(null),
        Tu = (0, Eu.useRef)(null),
        Wu = (0, Eu.useRef)(null),
        ju = (0, Eu.useRef)(!1),
        Hu = (0, Eu.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: du
        } = (0, Gu.E)(),
        bu = (0, kR.i)(Ku),
        Cu = (0, eu.j)(["notchSize"]).notchSize,
        ku = Cu.left,
        Au = (0, Eu.useRef)(16),
        Du = (0, BR.b)(),
        [Mu, Iu, Uu] = "pinned" === Ku ? rR.p : null !== (Ru = Du.hudElements.joystick) && void 0 !== Ru ? Ru : rR.p,
        nu = "pinned" === Ku ? null : Du.hudSafe,
        su = Math.max(kR.f, kR.g * Uu);
      CR(Nu, "pinned" !== Ku);
      const tu = function(uu, Ru, yu, Ku, Qu) {
        const mu = (0, Eu.useRef)(null),
          Ju = () => {
            clearInterval(mu.current), mu.current = null
          },
          Nu = VR(uu, {
            create: uu => new NR(uu),
            elementRef: Ru,
            ringRef: yu,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: Qu,
            onLocked: () => {
              mu.current = setInterval((() => {
                Bu.gameBridge.lookup("dropAhead", null) && (KR.d.play("autorunLedgeStop"), Nu.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              Ju(), Ku()
            }
          });
        return (0, Eu.useEffect)((() => Ju), []), Nu
      }(mu, Vu, pu, (() => {
        Zu(), wu()
      }), (() => {
        lu(), null === Wu.current && tu.current.suspend()
      }));

      function lu() {
        const uu = Vu.current.getBoundingClientRect();
        Wu.current = RR(Tu.current, uu, 80, yR(`.TouchInventoryKey, ${pR.d}`)), ju.current = null !== Wu.current && ER(Hu.current, Wu.current)
      }

      function gu() {
        const {
          innerWidth: uu,
          innerHeight: Ru
        } = window, yu = (0, pR.K)(nu, uu, Ru, (0, pR.M)(Cu, uu, Ru), Au.current);
        return {
          left: yu[3],
          bottom: yu[2]
        }
      }

      function Lu(uu) {
        Vu.current.style.transform = `translate(${uu.x-su}px, ${uu.y-su}px)`
      }

      function zu(uu) {
        const Ru = Vu.current;
        Ru.classList.add("Resting"), Ru.classList.toggle("Returning", uu), Ru.style.display = "fixed_hidden" === Ku ? "none" : "block", Lu(function() {
          const {
            innerWidth: uu,
            innerHeight: Ru
          } = window, yu = gu(), Eu = ku * uu / 100 + yu.left, Ku = Ju.current.offsetHeight || Ru, Qu = ((0, xR.b)(uu, Ru) ? kR.d : kR.c) + yu.bottom;
          return {
            x: Math.min(uu - su, Math.max(su, Eu + kR.e + Mu * uu)),
            y: Math.min(Ku - su, Math.max(su, Ku - Qu + Iu * Ku))
          }
        }())
      }
      const Fu = (0, Eu.useRef)({
        restFixed: zu,
        release: hu
      });

      function wu() {
        bu ? zu("fixed_shown" === Ku) : "floating" === Ku && (Vu.current.style.display = "none"), yu({
          x: 0,
          y: 0
        })
      }

      function Zu() {
        Su.current = null, xu.current = null, ru.current.style.transform = "translate(-50%, -50%)"
      }

      function hu(uu) {
        Zu();
        const Ru = tu.current;
        uu && null !== Ru && void 0 !== Ru && Ru.lift() ? yu({
          x: 0,
          y: -Ru.lockedSpeed
        }) : (null === Ru || void 0 === Ru || Ru.cancel(), wu())
      }

      function Pu(uu) {
        const Ru = Array.from(uu.touches).find((uu => uu.identifier === Su.current));
        if (null === xu.current || null === Su.current || (0, uR.E)(Ru)) return;
        const Eu = tu.current,
          Ku = Ru.clientX - xu.current.x,
          mu = Ru.clientY - xu.current.y,
          Ju = Math.hypot(Ku, mu),
          Nu = Ju > 0 ? Math.min(1, su / Ju) : 0,
          Xu = Ku * Nu,
          Vu = mu * Nu,
          Bu = Math.hypot(Xu, Vu) / su,
          pu = Qu && Bu > 0 ? Qu(Bu) / Bu : 1;
        ru.current.style.transform = `translate(calc(-50% + ${Xu}px), calc(-50% + ${Vu}px))`;
        const Tu = Xu / su,
          du = Vu / su;
        if (yu({
            x: Tu * pu,
            y: du * pu
          }), null !== Eu && null !== Wu.current) {
          Eu.move(Tu, du, Bu * pu), Hu.current = {
            clientX: Ru.clientX,
            clientY: Ru.clientY
          };
          const uu = ju.current;
          ju.current = ER(Ru, Wu.current), ju.current !== uu && Eu.target(ju.current)
        }
      }
      return Fu.current = {
        restFixed: zu,
        release: hu
      }, (0, Eu.useLayoutEffect)((() => {
        if (!bu) return;
        const uu = () => {
          Au.current = (0, pR.R)(document)
        };
        uu(), null === Su.current && Fu.current.restFixed(!1);
        const Ru = new ResizeObserver((() => {
          uu(), null === Su.current && Fu.current.restFixed(!1)
        }));
        Ru.observe(Ju.current);
        const yu = Vu.current;
        return () => {
          Ru.disconnect(), yu.classList.remove("Resting", "Returning"), null === Su.current && (yu.style.display = "", yu.style.transform = "")
        }
      }), [bu, Ku, Cu, Mu, Iu, su, nu]), (0, Eu.useEffect)((() => {
        const uu = uu => {
            const Ru = Su.current;
            null === Ru || Array.from(uu.touches).some((uu => uu.identifier === Ru)) || Fu.current.release("touchend" === uu.type && Array.from(uu.changedTouches).some((uu => uu.identifier === Ru)))
          },
          Ru = () => {
            null !== Su.current && Fu.current.release(!1)
          },
          yu = () => {
            "hidden" === document.visibilityState && Ru()
          };
        document.addEventListener("touchstart", uu, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", uu, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", uu, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", uu, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", Ru), document.addEventListener("visibilitychange", yu);
        const Eu = (0, XR.g)((uu => {
          let {
            keepsMovement: yu
          } = uu;
          yu || Ru()
        }));
        return () => {
          Eu(), document.removeEventListener("touchstart", uu, {
            capture: !0
          }), document.removeEventListener("touchmove", uu, {
            capture: !0
          }), document.removeEventListener("touchend", uu, {
            capture: !0
          }), document.removeEventListener("touchcancel", uu, {
            capture: !0
          }), window.removeEventListener("blur", Ru), document.removeEventListener("visibilitychange", yu)
        }
      }), []), (0, Eu.useEffect)((() => {
        const uu = Ju.current,
          Ru = uu => {
            uu.preventDefault()
          };
        return uu.addEventListener("touchstart", Ru, {
          passive: !1
        }), () => {
          uu.removeEventListener("touchstart", Ru)
        }
      }), []), (0, Xu.jsxs)("div", {
        ref: Ju,
        className: "JoystickZone",
        style: bu && (Mu > 0 || Uu > 1 || gu().left > 0) ? {
          width: `max(35vw, calc(${ku+100*Mu}vw + ${gu().left+kR.e+su+24}px))`
        } : void 0,
        onTouchStart: function(uu) {
          var Ru;
          if (null !== Su.current) return;
          const yu = Array.from(uu.changedTouches).find((uu => {
            var Ru;
            return null === (Ru = Ju.current) || void 0 === Ru ? void 0 : Ru.contains(uu.target)
          }));
          if (yu) {
            if (null === (Ru = tu.current) || void 0 === Ru || Ru.startTouch(), Su.current = yu.identifier, "pinned" === Ku) {
              const uu = Vu.current.getBoundingClientRect();
              xu.current = {
                x: uu.left + uu.width / 2,
                y: uu.top + uu.height / 2
              }
            } else {
              xu.current = {
                x: yu.clientX,
                y: yu.clientY
              }, Vu.current.classList.remove("Resting", "Returning"), Vu.current.style.display = "block";
              const uu = Ju.current.getBoundingClientRect();
              Lu({
                x: yu.clientX - uu.left,
                y: yu.clientY - uu.top
              }), mu && (Hu.current = {
                clientX: yu.clientX,
                clientY: yu.clientY
              }, lu())
            }
            Pu(uu)
          }
        },
        onTouchMove: Pu,
        children: [(0, Xu.jsx)("div", {
          ref: Nu,
          className: "JoystickTouchLayer"
        }), (0, Xu.jsxs)("div", {
          ref: Vu,
          className: "Joystick",
          style: {
            width: 2 * su + "px",
            height: 2 * su + "px",
            transform: "pinned" === Ku ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, Xu.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * su + "px",
              height: 2 * su + "px"
            }
          }), mu && (0, Xu.jsxs)(Xu.Fragment, {
            children: [(0, Xu.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, Xu.jsx)("circle", {
                ref: pu,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, Xu.jsxs)("div", {
              ref: Tu,
              className: "AutorunTarget",
              children: [(0, Xu.jsx)(cu.c, {
                name: "lock"
              }), du("settingsMenu:autoRun")]
            })]
          }), (0, Xu.jsx)("div", {
            ref: ru,
            className: "JoystickKnob",
            style: {
              width: `${su}px`,
              height: `${su}px`
            }
          })]
        })]
      })
    }
    const AR = .35,
      DR = .22;

    function MR(uu) {
      if (uu < .1) return 0;
      if (uu < AR) {
        const Ru = (uu - .1) / (AR - .1);
        return .06 + .16 * Ru * Ru
      }
      return uu < .85 ? DR + .78 * (uu - AR) / .5 : 1
    }

    function IR(uu, Ru) {
      const yu = (0, Eu.useRef)(null);
      return (0, Eu.useLayoutEffect)((() => (vu.k.set(uu, yu.current, Ru), () => {
        vu.k.set(uu, null)
      })), [uu, Ru]), yu
    }
    const GR = "C",
      UR = "J",
      nR = "U",
      sR = "P",
      tR = "A",
      lR = "G",
      gR = "X",
      cR = (0, Eu.forwardRef)((function(uu, Ru) {
        let {
          slot: yu,
          canvasZone: Ku = !1,
          lit: mu = !1,
          label: Ju,
          className: Nu,
          children: Vu,
          ...ru
        } = uu;
        return (0, Eu.useEffect)((() => (du.k.Op(SR.d), () => {
          du.k.Op(SR.d)
        })), []), (0, Xu.jsx)("div", {
          ref: Ru,
          className: Qu()("TouchKeyHit", `TouchSlot${yu}`, Nu, {
            CanvasZone: Ku
          }),
          ...ru,
          children: (0, Xu.jsxs)("div", {
            className: Qu()("TouchKey", {
              Lit: mu,
              Labelled: void 0 !== Ju
            }),
            children: [Vu, void 0 !== Ju && (0, Xu.jsx)("span", {
              className: "TouchKeyLabel",
              children: Ju
            })]
          })
        })
      }));

    function LR(uu, Ru) {
      (0, Eu.useEffect)((() => () => {
        Ru.current && (Ru.current = !1, (0, Ou.H)(uu, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function zR(uu, Ru) {
      const yu = Ru ? [gR] : [sR, gR];
      return uu.filter((uu => null !== uu)).slice(0, yu.length).map(((uu, Ru) => {
        const Ku = yu[Ru];
        return (0, Xu.jsx)(Eu.Fragment, {
          children: uu.render(Ku)
        }, `${uu.id}:${Ku}`)
      }))
    }
    var FR = yu(36414);
    class wR extends QR {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(uu, Ru) {
        this.start = {
          x: uu,
          y: Ru
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(uu, Ru, yu) {
        const Eu = Math.hypot(uu - this.start.x, Ru - this.start.y) <= 12;
        this.moved ||= !Eu;
        const Ku = null !== yu && Ru < this.start.y - 12 && ER({
          clientX: uu,
          clientY: Ru
        }, yu);
        this.hold(!this.moved, Eu || Ku)
      }
    }
    const ZR = new Set;

    function hR(uu) {
      const Ru = new Set(Array.from(uu.touches, (uu => uu.identifier)));
      for (const yu of ZR) {
        for (const uu of yu.ids) Ru.has(uu) || yu.ids.delete(uu);
        if (0 === yu.ids.size) {
          ZR.delete(yu);
          yu.pressesOnPointerDown && "touchstart" === uu.type && Array.from(uu.changedTouches).some((uu => uu.target instanceof Node && yu.element.contains(uu.target))) || yu.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const pm of ["touchstart", "touchmove"]) window.addEventListener(pm, hR, {
        capture: !0,
        passive: !0
      });

    function PR(uu) {
      let {
        pressesOnPointerDown: Ru = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const yu = (0, Eu.useRef)(uu);
      yu.current = uu;
      const Ku = (0, Eu.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: Ru,
        release: () => {
          yu.current()
        }
      });
      (0, Eu.useEffect)((() => {
        const uu = Ku.current;
        return () => {
          ZR.delete(uu), uu.ids.clear()
        }
      }), []);
      const Qu = uu => {
        const Ru = Ku.current;
        for (const yu of Array.from(uu.changedTouches)) Ru.ids.delete(yu.identifier);
        0 === Ru.ids.size && ZR.delete(Ru)
      };
      return {
        onTouchStart: uu => {
          const Ru = Ku.current;
          Ru.element = uu.currentTarget;
          for (const yu of Array.from(uu.changedTouches)) yu.target instanceof Node && uu.currentTarget.contains(yu.target) && Ru.ids.add(yu.identifier);
          Ru.ids.size > 0 && ZR.add(Ru)
        },
        onTouchEnd: Qu,
        onTouchCancel: Qu
      }
    }

    function iR(uu, Ru) {
      return null === Ru ? null : (0, FR.c)(uu.nativeEvent.changedTouches, Ru.id)
    }

    function YR(uu) {
      let {
        lockable: Ru
      } = uu;
      const {
        t: yu
      } = (0, Gu.E)(), Ku = "round" === (0, rR.X)().hudShape, Qu = (0, Eu.useRef)(!1);
      LR(qu.s.Jump, Qu);
      const mu = (0, Eu.useRef)(null),
        Ju = (0, Eu.useRef)(null),
        Nu = (0, Eu.useRef)(null),
        Vu = (0, Eu.useRef)(null),
        ru = (0, Eu.useRef)(null),
        Bu = (0, Eu.useRef)(null),
        xu = (0, Eu.useRef)(!1),
        Su = (uu, Ru) => {
          Qu.current = uu, (0, Ou.H)(qu.s.Jump, uu, Ru)
        },
        pu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          Qu.current && (mu.current && (0, fu.l)(mu.current, !1), Su(!1, uu))
        },
        Tu = VR(Ru, {
          create: uu => new wR(uu),
          elementRef: mu,
          ringRef: Ju,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const uu = mu.current.getBoundingClientRect(),
              Ru = Nu.current.parentElement,
              yu = Ru.getBoundingClientRect(),
              Eu = {
                left: yu.left + Ru.clientLeft,
                top: yu.top + Ru.clientTop,
                right: yu.right - Ru.clientLeft,
                bottom: yu.bottom - Ru.clientTop
              };
            if (ru.current = RR(Nu.current, Eu, 16, yR(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${pR.d}`)), null === ru.current) return void Tu.current.suspend();
            const Ku = ru.current;
            Bu.current = {
              left: Math.min(uu.left, Ku.left),
              top: Ku.top,
              right: Math.max(uu.right, Ku.right),
              bottom: uu.bottom
            }, xu.current = null !== Vu.current && ER({
              clientX: Vu.current.x,
              clientY: Vu.current.y
            }, Ku)
          },
          onUnlocked: () => {
            null === Vu.current && pu()
          }
        }),
        Wu = uu => {
          var Ru;
          Vu.current = null, null === (Ru = Tu.current) || void 0 === Ru || Ru.cancel(), pu(uu)
        },
        ju = PR((() => {
          Wu()
        })),
        Hu = uu => {
          const Ru = Vu.current;
          var yu;
          return null === Ru ? null !== (yu = Tu.current) && void 0 !== yu && yu.locked ? null : "lifted" : iR(uu, Ru) ? "lifted" : (0, FR.d)(uu.nativeEvent.touches, Ru.id) ? null : "dropped"
        };
      return (0, Xu.jsxs)(cR, {
        ref: mu,
        slot: UR,
        className: "JumpKey",
        onTouchStart: uu => {
          ju.onTouchStart(uu), (0, fu.l)(uu.currentTarget, !0), null === Vu.current || (0, FR.d)(uu.nativeEvent.touches, Vu.current.id) || Wu();
          const Ru = uu.changedTouches[0];
          var yu;
          null === Vu.current && Ru && (Vu.current = {
            id: Ru.identifier,
            x: Ru.clientX,
            y: Ru.clientY
          }, null === (yu = Tu.current) || void 0 === yu || yu.press(Ru.clientX, Ru.clientY));
          Qu.current || Su(!0, uu.nativeEvent)
        },
        onTouchMove: uu => {
          const Ru = Vu.current,
            yu = iR(uu, Ru);
          if (!yu) return;
          const Eu = Tu.current;
          if (null === Eu || void 0 === Eu || Eu.move(yu.clientX, yu.clientY, Bu.current), null !== Eu && void 0 !== Eu && Eu.offered) {
            const uu = ER(yu, ru.current);
            uu !== xu.current && (xu.current = uu, Eu.target(uu))
          }
          Ru.x = yu.clientX, Ru.y = yu.clientY
        },
        onTouchEnd: uu => {
          var Ru;
          ju.onTouchEnd(uu);
          const yu = Hu(uu);
          null !== yu && ("dropped" !== yu ? (Vu.current = null, null !== (Ru = Tu.current) && void 0 !== Ru && Ru.lift() ? (0, fu.l)(uu.currentTarget, !1) : pu(uu.nativeEvent)) : Wu(uu.nativeEvent))
        },
        onTouchCancel: uu => {
          ju.onTouchCancel(uu), null !== Hu(uu) && Wu(uu.nativeEvent)
        },
        children: [(0, Xu.jsx)(cu.c, {
          name: "arrow-up-from-line"
        }), Ru && (0, Xu.jsxs)(Xu.Fragment, {
          children: [(0, Xu.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, Xu.jsx)(cu.c, {
              name: "lock"
            })
          }), (0, Xu.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, Xu.jsx)("rect", {
              ref: Ju,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: Ku ? 48 : 0,
              pathLength: 1
            })
          }), (0, Xu.jsxs)("div", {
            ref: Nu,
            className: "JumpLockTarget",
            children: [(0, Xu.jsx)(cu.c, {
              name: "lock"
            }), yu("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const oR = new WeakMap;
    class qR {
      constructor(uu) {
        this.zones = uu, this.followed = new Map, this.onStart = uu => {
          if (this.releaseMissing(uu.touches), uu.target instanceof HTMLCanvasElement)
            for (let yu = 0; yu < uu.changedTouches.length; yu++) {
              var Ru;
              const {
                identifier: Eu,
                clientX: Ku,
                clientY: Qu
              } = uu.changedTouches[yu];
              this.release(Eu);
              const mu = this.zones.hitZone(Ku, Qu);
              if (!mu) continue;
              const {
                key: Ju
              } = mu;
              null === (Ru = oR.get(Ju)) || void 0 === Ru || Ru.cancel();
              const Nu = {
                hit: mu.element,
                key: Ju,
                x: mu.x,
                y: mu.y,
                reach: .6 * mu.radius
              };
              this.followed.set(Eu, Nu), (0, fu.l)(mu.element, !0), OR(Nu, Ku, Qu)
            }
        }, this.onMove = uu => {
          this.releaseMissing(uu.touches);
          for (let Ru = 0; Ru < uu.changedTouches.length; Ru++) {
            const {
              identifier: yu,
              clientX: Eu,
              clientY: Ku
            } = uu.changedTouches[Ru], Qu = this.followed.get(yu);
            Qu && OR(Qu, Eu, Ku)
          }
        }, this.onEnd = uu => {
          for (let Ru = 0; Ru < uu.changedTouches.length; Ru++) this.release(uu.changedTouches[Ru].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const uu = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, uu), document.addEventListener("touchmove", this.onMove, uu), document.addEventListener("touchend", this.onEnd, uu), document.addEventListener("touchcancel", this.onEnd, uu), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(uu) {
        for (const Ru of [...this.followed.keys()])(0, FR.d)(uu, Ru) || this.release(Ru)
      }
      releaseAll() {
        for (const uu of [...this.followed.keys()]) this.release(uu)
      }
      release(uu) {
        const Ru = this.followed.get(uu);
        if (!Ru) return;
        this.followed.delete(uu);
        for (const Ku of this.followed.values())
          if (Ku.key === Ru.key) return;
        (0, fu.l)(Ru.hit, !1);
        const {
          key: yu
        } = Ru, Eu = yu.style.translate;
        yu.style.translate = "", Eu && oR.set(yu, yu.animate({
          translate: [Eu, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function OR(uu, Ru, yu) {
      let {
        key: Eu,
        x: Ku,
        y: Qu,
        reach: mu
      } = uu;
      const Ju = Ru - Ku,
        Nu = yu - Qu,
        Xu = Math.min(1, mu / (Math.hypot(Ju, Nu) || 1));
      Eu.style.translate = `${Ju*Xu}px ${Nu*Xu}px`
    }
    const vR = () => {
      const uu = (0, ou.i)(),
        Ru = (0, Du.n)();
      return uu || Ru
    };

    function aR(uu) {
      (0, vu.m)(uu.x, uu.y)
    }
    const fR = (0, Eu.memo)((function() {
        const uu = vR(),
          {
            joystickMode: Ru,
            touchSpeedCurve: yu,
            autorun: Ku
          } = (0, eu.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, Eu.useEffect)((() => ((0, au.h)(qu.t.TouchControls, qu.t.TouchControls), () => {
          (0, au.h)(qu.t.TouchControls, 0), (0, vu.m)(0, 0)
        })), []), (0, Xu.jsx)("div", {
          className: Qu()("TouchMovementWrapper", {
            Hidden: uu
          }),
          "data-camera-keeper": "",
          children: (0, Xu.jsx)(eR, {
            onMove: aR,
            mode: Ru,
            speedCurve: yu ? MR : void 0,
            autorun: Ku
          })
        })
      })),
      uy = (0, Eu.memo)((function() {
        const uu = vR(),
          {
            clientEscMenuOptions: Ru
          } = (0, eu.j)(["clientEscMenuOptions"]),
          yu = Ru.touchActionButtons;
        return (0, Eu.useEffect)((() => new qR(vu.k).start()), []), (0, Eu.useEffect)((() => {
          du.k.Op(SR.d)
        }), [uu]), (0, Xu.jsxs)("div", {
          className: Qu()("TouchComponentsButtons", {
            Hidden: uu
          }),
          "data-camera-keeper": "",
          children: [(0, Xu.jsx)(YR, {
            lockable: Ru.jumpLock && !uu
          }), (0, Xu.jsx)(By, {
            hidden: uu,
            actionButtons: yu
          }), (0, Xu.jsx)(yy, {})]
        })
      }));

    function Ry(uu) {
      const Ru = Ru => yu => {
        (0, fu.l)(yu.currentTarget, Ru), uu(Ru, yu.nativeEvent)
      };
      return {
        onPointerDown: Ru(!0),
        onPointerUp: Ru(!1),
        onPointerCancel: Ru(!1)
      }
    }

    function yy() {
      const uu = (0, Hu.g)("canCrouch"),
        Ru = (0, ku.i)("crouching"),
        yu = (0, Eu.useRef)(!1);
      LR(qu.s.Crouch, yu);
      const Ku = (uu, Ru) => {
          yu.current = uu, (0, Ou.H)(qu.s.Crouch, uu, Ru)
        },
        Qu = (0, Eu.useRef)(null),
        mu = () => {
          yu.current && (Qu.current && (0, fu.l)(Qu.current, !1), Ku(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        Ju = PR(mu);
      return (0, Eu.useEffect)((() => {
        !1 === uu && mu()
      }), [uu]), !1 === uu ? null : (0, Xu.jsx)(cR, {
        ref: Qu,
        slot: GR,
        className: "CrouchKey",
        lit: Ru,
        ...Ju,
        ...Ry(Ku),
        children: (0, Xu.jsx)(cu.c, {
          name: "arrow-down-to-line"
        })
      })
    }
    const Ey = [{
        icon: "arrows-rotate"
      }],
      Ky = [{
        icon: "Arrow"
      }],
      Qy = [{
        icon: "crosshairs"
      }],
      my = [{
        icon: "swords"
      }],
      Jy = [{
        icon: "hand-back-point-up"
      }],
      Ny = [{
        icon: "Firecracker"
      }];

    function Xy(uu, Ru, yu, Eu) {
      return {
        id: JSON.stringify(Ru),
        render: Ku => (0, Xu.jsx)(xy, {
          code: uu,
          slot: Ku,
          icon: Ru,
          label: Eu,
          hidden: yu
        })
      }
    }

    function Vy(uu, Ru) {
      return {
        id: "fly",
        render: yu => (0, Xu.jsx)(ry, {
          slot: yu,
          flying: uu,
          label: Ru
        })
      }
    }

    function ry(uu) {
      let {
        slot: Ru,
        flying: yu,
        label: Eu
      } = uu;
      return (0, Xu.jsx)(cR, {
        slot: Ru,
        className: "FlyKey",
        lit: yu,
        label: Eu,
        ...Ry(((uu, Ru) => {
          (0, Ou.H)(qu.s.Fly, uu, Ru)
        })),
        children: (0, Xu.jsx)(cu.c, {
          name: "feather-pointed"
        })
      })
    }

    function By(uu) {
      var Ru, yu;
      let {
        hidden: Eu,
        actionButtons: Ku
      } = uu;
      const {
        t: Qu
      } = (0, Gu.E)(), {
        gun: mu,
        aimable: Ju,
        chargeName: Nu
      } = (0, ku.i)("heldItemAim"), Vu = (0, ku.i)("gliderBoostFuel"), {
        canFly: ru,
        flying: Bu
      } = (0, ku.i)("flight"), xu = (0, Hu.g)("touchscreenActionButton"), Su = mu ? Ey : xu, pu = Ju ? {
        icon: Ky,
        label: Qu("touchKeys:aim")
      } : null, Tu = null !== Nu ? {
        icon: [{
          icon: Nu
        }]
      } : null, Wu = null !== pu && void 0 !== pu ? pu : Tu, ju = null !== (Ru = null === (yu = mu ? pu : null !== Tu && void 0 !== Tu ? Tu : pu) || void 0 === yu ? void 0 : yu.icon) && void 0 !== Ru ? Ru : Jy, du = [!Ku && Wu ? Xy(vu.e.Action2, Wu.icon, Eu, Wu.label) : null, mu ? Xy(vu.e.Action3, Qy, Eu, Qu("touchKeys:scope")) : null, ru ? Vy(Bu, Qu("touchKeys:fly")) : null];
      return (0, Xu.jsxs)(Xu.Fragment, {
        children: [Su && (0, Xu.jsx)(xy, {
          code: vu.e.Action1,
          slot: lR,
          icon: Su,
          label: mu ? Qu("touchKeys:reload") : void 0,
          hidden: Eu
        }, JSON.stringify(Su)), Ku && (0, Xu.jsxs)(Xu.Fragment, {
          children: [(0, Xu.jsx)(xy, {
            code: vu.e.Attack,
            slot: tR,
            icon: my,
            name: Qu("touchKeys:attack"),
            hidden: Eu
          }), (0, Xu.jsx)(xy, {
            code: vu.e.Use,
            slot: nR,
            icon: ju,
            name: Qu("touchKeys:use"),
            hidden: Eu
          })]
        }), zR(du, Ku), Vu > 0 && (0, Xu.jsx)(xy, {
          code: vu.e.Boost,
          slot: gR,
          icon: Ny,
          label: Qu("touchKeys:boost", {
            fuel: Vu > 99 ? "99+" : Vu
          }),
          hidden: Eu
        })]
      })
    }

    function xy(uu) {
      let {
        code: Ru,
        slot: yu,
        icon: Eu,
        label: Ku,
        name: Qu,
        hidden: mu
      } = uu;
      const Ju = IR(Ru, mu);
      return (0, Xu.jsx)(cR, {
        ref: Ju,
        slot: yu,
        className: "TouchActionKey",
        canvasZone: !0,
        label: Ku,
        role: void 0 !== Qu ? "img" : void 0,
        "aria-label": Qu,
        children: (0, Xu.jsx)(Nu.d, {
          text: Eu
        })
      })
    }
    var Sy = yu(4066),
      py = yu(2780),
      Ty = yu(631);
    const Wy = (0, Eu.memo)((function() {
      (0, Wu.d)();
      const uu = (0, Eu.useRef)([]),
        Ru = (0, py.c)(),
        yu = (0, Eu.useRef)(0),
        Ku = (0, Eu.useRef)(0),
        Qu = (0, Eu.useRef)([]),
        mu = (0, Eu.useRef)(null);

      function Vu(yu, Eu, Ku, Qu) {
        const mu = (0, Ty.d)(),
          Ju = setTimeout((() => {
            uu.current = uu.current.filter((uu => uu.id !== mu)), Ru()
          }), Qu);
        Bu.gameBridge.send("recordFlyingMiddleText", {
          content: yu,
          IQ: Eu,
          angle: Ku,
          GQ: Qu
        }), uu.current.push({
          id: mu,
          content: yu,
          IQ: Eu,
          GQ: Qu,
          removeTimeout: Ju,
          angle: Ku
        }), Ru()
      }
      return (0, ku.d)("shotDamageToShow", (uu => {
        let {
          damage: Ru,
          wasCrit: yu,
          distance: Eu
        } = uu;
        const Ku = -Math.PI / 4 + Math.random() * Math.PI / 2;
        Vu(yu ? [{
          str: Ru.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [Ru.toString()], Eu, Ku, 1e3)
      })), (0, Ju.e)("flyingMiddleMessage", (uu => {
        let {
          content: Ru,
          IQ: Eu,
          GQ: Ju
        } = uu;
        Qu.current.push({
          content: Ru,
          IQ: Eu,
          GQ: Ju
        });
        const Nu = () => {
          const {
            content: uu,
            IQ: Ru,
            GQ: Eu
          } = Qu.current.shift(), mu = function(uu) {
            const Ru = -Math.PI / 4,
              yu = Math.PI / 4,
              Eu = yu - Ru,
              Ku = (1 + Math.sqrt(5)) / 2,
              Qu = 2 * Math.PI / (Ku * Ku);
            let mu = uu + Qu;
            for (; mu > yu;) mu -= Eu;
            for (; mu < Ru;) mu += Eu;
            const Ju = Math.PI / 6;
            if (Math.abs(mu - uu) < Ju) {
              mu = uu + (Math.sign(mu - uu) || 1) * Ju, mu > yu && (mu = uu - Ju), mu < Ru && (mu = uu + Ju)
            }
            return mu
          }(Ku.current);
          Ku.current = mu, yu.current = Date.now(), Vu(uu, Ru, mu, Eu)
        };
        if (!mu.current) {
          const uu = () => {
            Qu.current.length > 0 && Nu(), 0 === Qu.current.length && (clearInterval(mu.current), mu.current = null)
          };
          mu.current = setInterval(uu, 200), yu.current + 200 < Date.now() && uu()
        }
        for (; Qu.current.length > 4;) Nu()
      })), (0, Ju.e)("forceFlyingMiddleMessage", (uu => {
        let {
          content: Ru,
          IQ: yu,
          angle: Eu,
          GQ: Ku
        } = uu;
        Vu(Ru, yu, Eu, Ku)
      })), (0, Eu.useEffect)((() => () => {
        clearInterval(mu.current), mu.current = null;
        for (const Ru of uu.current) clearTimeout(Ru.removeTimeout)
      }), []), (0, Xu.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: uu.current.map((uu => {
          const {
            id: Ru,
            content: yu,
            IQ: Eu,
            GQ: Ku,
            angle: Qu
          } = uu;
          return uu.pos || (uu.pos = function(uu, Ru) {
            const yu = 50 / (uu ** .7 * .35);
            return {
              x: yu * Math.sin(Ru),
              y: -yu * Math.cos(Ru)
            }
          }(Eu, Qu)), (0, Xu.jsx)(jy, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: Ku,
            enterActiveStyle: {
              transform: `translate(${uu.pos.x}vw, ${uu.pos.y}vh)`,
              transition: `transform ${Ku}ms ease-out`
            },
            children: (0, Xu.jsx)("div", {
              children: (0, Xu.jsx)(Nu.d, {
                text: yu
              })
            })
          }, Ru)
        }))
      })
    }));

    function jy(uu) {
      let {
        children: Ru,
        className: yu,
        classNames: Ku,
        timeout: Qu,
        enterActiveStyle: mu
      } = uu;
      const [Ju, Nu] = (0, Eu.useState)(!1), [Vu, ru] = (0, Eu.useState)(!1), Bu = (0, Eu.useRef)(null);
      return (0, Eu.useEffect)((() => {
        Nu(!0)
      }), []), (0, Xu.jsx)(Sy.b, {
        className: yu,
        classNames: Ku || yu,
        in: Ju,
        timeout: Qu,
        nodeRef: Bu,
        onEntering: () => {
          ru(!0)
        },
        children: (0, Eu.cloneElement)(Ru, {
          ref: Bu,
          style: Vu && mu || void 0
        })
      })
    }
    var Hy = yu(36436);

    function dy() {
      const uu = (0, ku.i)("health");
      return (0, Xu.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, Xu.jsx)(Hy.c, {
          placement: "statBars"
        }), (0, Xu.jsx)(by, {
          actualValue: uu.shield,
          maxValue: uu.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, Xu.jsx)(by, {
          actualValue: uu.health,
          maxValue: uu.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function by(uu) {
      let {
        actualValue: Ru,
        maxValue: yu,
        hideAtValue: Eu,
        icon: Ku,
        className: Qu
      } = uu;
      return (0, Wu.g)(), null === Ru || null === yu || Ru === Eu || yu === Eu ? null : (0, Xu.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, Xu.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, Xu.jsx)("div", {
            className: `BottomScreenStatBar ${Qu}`,
            style: {
              transform: `scaleX(${Math.max(Ru/yu,0)})`,
              transformOrigin: "left center"
            }
          }), (0, Xu.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, Xu.jsx)(cu.c, {
              name: Ku
            }), ` ${Math.ceil(Ru)}/${yu}`]
          })]
        })
      })
    }
    var Cy = yu(9048),
      ky = yu(4301),
      ey = yu(1289),
      Ay = yu(2608),
      Dy = yu(1408),
      My = yu(1269),
      Iy = yu(3217),
      Gy = yu(3273),
      Uy = yu(3236),
      ny = yu(753),
      sy = yu(3296),
      ty = yu(145),
      ly = yu(8960),
      gy = yu(343);

    function cy(uu, Ru) {
      let {
        shownName: yu,
        lifeformType: Eu
      } = uu;
      return null !== yu ? yu : null !== Eu ? Ru(`lifeform:${(0,gy.xe)(Eu)}`) : null
    }
    var Ly = yu(3226),
      zy = yu(3229);
    const Fy = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      wy = (0, Eu.memo)((function() {
        var uu, Ru;
        const yu = (0, Wu.d)(),
          Ku = (0, xu.useNavigatePreserveSearch)(),
          {
            t: mu
          } = (0, Gu.E)(),
          {
            loadingOverlayVisible: Nu
          } = (0, eu.j)(["loadingOverlayVisible"]),
          Vu = (0, Du.n)(),
          [ru, Su] = (0, Eu.useState)(!1),
          [pu, Tu] = (0, Eu.useState)(!0),
          [ju, du] = (0, Eu.useState)(null),
          Cu = (0, py.c)(),
          Au = (0, Hu.g)("respawnButtonText"),
          Mu = (0, Hu.g)("usePlayAgainButton"),
          Iu = (0, Hu.g)("useRespawnButton"),
          {
            gameNameWithVariation: Uu
          } = (0, ku.i)("connectedGame"),
          nu = (0, Eu.useRef)(bu.b.get("secsToRespawn")),
          su = (0, Eu.useRef)(Bu.gameBridge.latest("localPlayerAlive")),
          tu = (0, Eu.useRef)(bu.b.get("secsToRespawn")),
          lu = (0, Eu.useRef)(bu.b.get("autoRespawn")),
          gu = (0, Eu.useRef)(null),
          Lu = (0, Eu.useRef)(0),
          zu = (0, Eu.useRef)(0),
          [Fu, Zu] = (0, Eu.useState)(!1),
          hu = (0, Eu.useRef)(null),
          Pu = (0, Eu.useRef)(null),
          iu = (0, Eu.useRef)(null);
        (0, Hu.e)("secsToRespawn", (uu => {
          console.log("Received new secsToRespawn with", uu, "and current canRespawn value of ", lu.current), tu.current = uu, Ou()
        })), (0, Hu.e)("autoRespawn", (uu => {
          console.log("Received autorespawn", uu, "current canRespawn value of ", nu.current), lu.current = uu, Ou()
        }));
        const Yu = uu => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", uu), uu || Lu.current++, su.current = uu, Ou()
        };
        (0, ku.d)("localPlayerAliveSet", Yu), (0, Ju.e)(Gy.n, (uu => {
          "connected" === uu && !su.current && lu.current && nu.current <= 0 && (zu.current = 0, vu())
        })), (0, Eu.useEffect)((() => {
          const uu = Bu.gameBridge.latest("localPlayerAlive");
          uu === su.current ? (console.log("Updating respawn component from initial mount"), Ou()) : Yu(uu)
        }), []), (0, Eu.useEffect)((() => {
          if (ru) {
            Zu(!1);
            const uu = setTimeout((() => {
              Zu(!0)
            }), 600);
            return (0, ly.d)(), () => {
              clearTimeout(uu)
            }
          }
          return () => {}
        }), [ru]);
        (0, ku.d)("kill", (uu => {
          let {
            killer: Ru,
            victim: yu,
            withItem: Eu
          } = uu;
          if (!yu.local) return;
          const Ku = ((uu, Ru) => {
            if (uu.local) {
              const uu = Fy[Ru];
              return uu ? mu(uu) : null
            }
            const yu = cy(uu, mu);
            return yu ? mu("respawnPage:killedBy", {
              name: yu
            }) : null
          })(Ru, Eu);
          Ku && du({
            text: Ku,
            deathCount: su.current ? Lu.current + 1 : Lu.current
          })
        }));
        const ou = () => {
            ru && lu.current && su.current && Fu && Su(!1)
          },
          qu = ru && lu.current && su.current && Fu && !Nu;
        (0, Ju.e)("usedKeyboard", (() => {
          ou()
        })), (0, zy.c)("respawn", qu, ou);
        const Ou = () => {
            Tu(tu.current >= 3 || !lu.current), su.current ? (clearInterval(gu.current), gu.current = null, lu.current ? Cu() : Su(!1)) : (Su(!0), nu.current = tu.current, Cu(), console.log("Running respawn stats updated", lu.current, nu.current), lu.current && nu.current <= 0 && vu(), clearInterval(gu.current), nu.current > 0 && (gu.current = setInterval((() => {
              nu.current = Math.max(nu.current - 1, 0), Cu(), nu.current <= 0 && (clearInterval(gu.current), gu.current = null, bu.b.get("autoRespawn") && vu())
            }), 1e3)))
          },
          vu = () => {
            if (Date.now() - zu.current > 1e3) {
              const uu = () => {
                Bu.gameBridge.send("respawn", null), zu.current = Date.now()
              };
              bu.b.get("autoRespawn") ? uu() : (0, My.lb)((() => {
                uu()
              }), "video_respawn")
            }
          },
          au = (0, Eu.useMemo)((() => {
            var uu;
            return null === (uu = (0, ny.j)(Uu)) || void 0 === uu ? void 0 : uu.otherGameLinksOnRespawnPage
          }), [Uu]),
          fu = 0 === nu.current,
          uR = (null === ju || void 0 === ju ? void 0 : ju.deathCount) === Lu.current ? ju.text : null,
          RR = ru && pu && !Nu,
          yR = Vu && qu && null !== (uu = null === (Ru = (0, wu.f)()) || void 0 === Ru ? void 0 : Ru.getBoundButton("menuConfirm")) && void 0 !== uu ? uu : null,
          ER = uu => fu ? uu : mu("respawnPage:actionInSeconds", {
            action: uu,
            seconds: nu.current
          });
        return (0, Xu.jsx)(Cy.c, {
          showing: ru,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, Xu.jsx)(Iy.c, {
            show: ru,
            "data-holds-camera-keeper": "",
            children: (0, Xu.jsxs)(ky.e, {
              close: () => {
                Su(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: lu.current || Nu ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, ty.n)() && (0, Xu.jsx)(Dy.b, {
                onClick: Uy.d,
                children: mu("homePage:backToGames")
              }), (0, Xu.jsxs)("div", {
                className: "RespawnContainer",
                onClick: ou,
                children: [(0, Xu.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, Xu.jsx)("div", {
                    ref: Pu,
                    className: "RespawnSideSquareBannerDiv",
                    children: yu[0] > 925 && (0, Xu.jsx)(Ay.c, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: Pu
                      },
                      showing: RR,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, Xu.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, Xu.jsxs)("div", {
                      className: Qu()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: Vu
                      }),
                      children: [lu.current && (0, Xu.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, Xu.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, Xu.jsx)(cu.c, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), mu("respawnPage:youDied")]
                        }), (0, Xu.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === yR && (su.current ? mu("respawnPage:pressAnywhereToContinue") : fu ? mu("respawnPage:respawning") : ER(mu("general:respawn"))), null !== yR && (0, Xu.jsx)(Ly.c, {
                            text: mu("controller:screensPressToContinue", {
                              button: Ly.d
                            }),
                            glyph: yR,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), uR && (0, Xu.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: uR
                        })]
                      }), !lu.current && (0, Xu.jsxs)(Xu.Fragment, {
                        children: [(0, Xu.jsxs)("div", {
                          className: Qu()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !au
                          }),
                          children: [Mu && (0, Xu.jsx)(Dy.l, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, My.lb)((() => {
                                (0, eu.i)("inGameReplay");
                                const uu = (0, ey.b)(Uu);
                                Ku(uu)
                              }), "video_start")
                            },
                            disabled: !fu || !Fu,
                            touchPressOn: "pointerup",
                            children: ER(mu("respawnPage:playAgain"))
                          }), Iu && (0, Xu.jsx)(Dy.e, {
                            className: "RespawnPageButton",
                            onClick: vu,
                            padDefaultFocus: !Mu,
                            padBack: "sessionBasedGame:stayInLobby" === Au,
                            disabled: !fu || !Fu,
                            touchPressOn: "pointerup",
                            children: ER(mu(Au))
                          }), !(0, ty.n)() && (0, Xu.jsx)(Dy.F, {
                            className: "RespawnPageButton",
                            onClick: Uy.d,
                            disabled: !fu || !Fu,
                            touchPressOn: "pointerup",
                            children: ER(mu("respawnPage:exitGame"))
                          })]
                        }), au && (0, Xu.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, Xu.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: mu("respawnPage:orTry")
                          }), (0, Xu.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: au.map((uu => (0, Xu.jsx)(sy.e, {
                              source: {
                                type: "game",
                                gameNameWithVariation: uu
                              },
                              disabled: !fu || !Fu,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, eu.i)("inGameReplay");
                                const Ru = (0, ey.b)(uu);
                                Ku(Ru)
                              }
                            }, uu)))
                          })]
                        })]
                      })]
                    })
                  }), (0, Xu.jsx)("div", {
                    ref: iu,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, Xu.jsx)("div", {
                  ref: hu,
                  className: "RespawnBottom",
                  children: (0, Xu.jsx)(Ay.c, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: hu
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
    var Zy = yu(36454);
    const hy = [{
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
      Py = [{
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
      iy = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      Yy = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      oy = (0, Eu.memo)((function() {
        const uu = (0, Eu.useRef)(null),
          Ru = (0, Eu.useRef)(null);

        function yu(yu) {
          var Eu;
          let {
            Ry: Ku,
            screenPos: Qu
          } = yu;
          const mu = uu.current;
          null === (Eu = Ru.current) || void 0 === Eu || Eu.cancel(), mu.classList.remove("HitmarkerCrit"), Qu ? (mu.style.left = `${Qu.x}%`, mu.style.top = `${Qu.y}%`) : (mu.style.left = "50%", mu.style.top = "50%"), mu.style.rotate = 16 * (Math.random() - .5) + "deg", Ku && mu.classList.add("HitmarkerCrit");
          const Ju = mu.animate(Ku ? Py : hy, Ku ? Yy : iy);
          Ru.current = Ju, Ju.onfinish = () => {
            mu.classList.remove("HitmarkerCrit")
          }
        }
        return (0, Ju.e)("localGunHitmarker", (uu => {
          let {
            Ry: Ru
          } = uu;
          yu({
            Ry: Ru
          })
        })), (0, Ju.e)("yourAttackHit", (uu => {
          let {
            Ry: Ru,
            screenPos: Eu
          } = uu;
          yu({
            Ry: Ru,
            screenPos: eu.d.get("isTouchScreen") ? Eu : void 0
          })
        })), (0, Ju.e)("sendHitmarker", (uu => {
          let {
            Ry: Ru,
            screenPos: Eu
          } = uu;
          yu({
            Ry: Ru,
            screenPos: Eu
          })
        })), (0, Xu.jsxs)("div", {
          ref: uu,
          className: "Hitmarker",
          children: [(0, Xu.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Xu.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Xu.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Xu.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function qy() {
      const uu = (0, Eu.useRef)(!0);
      return (0, Ju.e)("localBlockMined", (() => {
        KR.d.play("blockMined")
      })), (0, Ju.e)("yourAttackHit", (() => {
        KR.d.play("hitLanded")
      })), (0, Ju.e)("localGunHitmarker", (() => {
        KR.d.play("hitLanded")
      })), (0, Ju.e)("damagedByOtherPlayer", (() => {
        KR.d.play("damageTaken")
      })), (0, ku.d)("localPlayerAliveSet", (Ru => {
        !Ru && uu.current && KR.d.play("death"), uu.current = Ru
      })), null
    }
    var Oy = yu(1841),
      vy = yu(36466),
      ay = yu.n(vy),
      fy = yu(1955),
      uE = yu(1946),
      RE = yu(3093),
      yE = yu(9079);
    const EE = gy.oe ? 7e7 : 7e3,
      KE = ay()("#ffffff").alpha(.5).string();

    function QE(uu) {
      const Ru = (0, RE.b)(uu);
      return void 0 !== Ru && "Gun" === (0, yE.itemTypeOf)(Ru)
    }

    function mE(uu) {
      if (!uu) return console.error(`Killfeed colour was ${uu}`), KE;
      try {
        return ay()(uu).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${uu} is not a colour`), KE
      }
    }
    const JE = (0, Eu.memo)((function() {
      const {
        t: uu
      } = (0, Gu.E)(), Ru = (0, Eu.useRef)([]), yu = (0, py.c)();
      return (0, ku.d)("kill", (function(Eu) {
        var Ku, Qu;
        let {
          killer: mu,
          victim: Ju,
          withItem: Nu,
          killstreak: Xu
        } = Eu;
        const Vu = Ru.current;
        if (Vu.length >= 3) {
          const uu = Vu.shift();
          clearTimeout(uu.timeout)
        }
        const ru = Bu.gameBridge.latest("hiddenPlayerNames"),
          xu = {
            deadName: cy(Ju, uu),
            killerName: cy(mu, uu),
            isFriend: {
              killer: (0, fy.d)(mu.realName, ru),
              dead: (0, fy.d)(Ju.realName, ru)
            },
            withItem: Nu,
            wasHeadshot: !1,
            killstreak: Xu,
            timeout: setTimeout((() => {
              Vu.shift(), yu()
            }), EE),
            reactId: `${null!==(Ku=mu.id)&&void 0!==Ku?Ku:mu.shownName}|${null!==(Qu=Ju.id)&&void 0!==Qu?Qu:Ju.shownName}|${Date.now()}`,
            killerBackground: mE(mu.colour),
            deadBackground: mE(Ju.colour)
          };
        Vu.push(xu), yu()
      })), (0, Eu.useEffect)((() => {
        const uu = Ru.current;
        return () => {
          for (; uu.length > 0;) {
            const {
              timeout: Ru
            } = uu.pop();
            clearTimeout(Ru)
          }
        }
      }), []), (0, Xu.jsx)("div", {
        className: "Killfeed",
        children: Ru.current.map((uu => {
          let {
            deadName: Ru,
            killerName: yu,
            withItem: Eu,
            wasHeadshot: Ku,
            killstreak: Qu,
            killerBackground: mu,
            deadBackground: Ju,
            reactId: Nu,
            isFriend: Vu
          } = uu;
          return (0, Xu.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${mu} calc(100% - 10rem), ${Ju} 100%)`
            },
            children: [Qu >= 2 ? (0, Xu.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, gy.U)(Qu)
            }) : null, (0, Xu.jsx)("div", {
              className: "KillfeedKillerName",
              children: yu
            }), Vu.killer && (0, Xu.jsx)(uE.c, {}), (0, Xu.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: QE(Eu) ? "7.5vmin" : "5vmin"
              },
              children: (0, Xu.jsx)(Oy.c, {
                itemName: Eu,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), Ku ? (0, Xu.jsx)(cu.c, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, Xu.jsx)("div", {
              className: "KillfeedDeadName",
              children: Ru
            }), Vu.dead && (0, Xu.jsx)(uE.c, {})]
          }, Nu)
        }))
      })
    }));
    var NE = yu(36515),
      XE = yu(1114),
      VE = yu.n(XE),
      rE = yu(3199),
      BE = yu(36524),
      xE = yu(1257);
    const SE = {},
      pE = (0, Eu.memo)((function() {
        const uu = (0, Eu.useRef)({}),
          [, Ru] = (0, Eu.useReducer)((uu => uu + 1), 0);
        (0, Ju.e)("setDirectionArrow", (yu => {
          let {
            id: Eu,
            position: Ku,
            style: Qu,
            text: mu,
            uQ: Ju
          } = yu;
          const Nu = uu.current,
            Xu = Qu || SE,
            Vu = mu,
            ru = Nu[Eu];
          if (!ru) return Nu[Eu] = {
            position: Ku,
            style: Xu,
            text: Vu,
            shouldShowDistance: Ju,
            WU: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void Ru();
          const Bu = !VE()(ru.style, Xu) || !VE()(ru.text, Vu) || ru.shouldShowDistance !== Ju;
          ru.position = Ku, ru.style = Xu, ru.text = Vu, ru.shouldShowDistance = Ju, Bu && Ru()
        })), (0, Ju.e)("clearDirectionArrow", (yu => {
          let {
            id: Eu
          } = yu;
          const Ku = uu.current;
          if (null === Eu)
            for (const uu in Ku) delete Ku[uu];
          else delete Ku[Eu];
          Ru()
        })), (0, Eu.useEffect)((() => {
          const Ru = uu.current,
            yu = (0, xE.r)((() => {
              ! function(uu) {
                const Ru = Bu.gameBridge.lookup("localPos", null),
                  yu = rE.b - TE,
                  Eu = (0, rE.l)() - TE;
                for (const Ku in uu) {
                  const Qu = uu[Ku];
                  if (!Qu.WU) continue;
                  const mu = Bu.gameBridge.lookup("screenPos", Qu.position),
                    Ju = mu.x - 50,
                    Nu = mu.y - 50;
                  mu.x === Qu.lastScreenX && mu.y === Qu.lastScreenY || (Qu.lastScreenX = mu.x, Qu.lastScreenY = mu.y, Qu.WU.style.translate = `${mu.x}vw ${mu.y}vh`, Qu.chevronElement && (Qu.chevronElement.style.rotate = `${gy.c.fastATan2(Nu,Ju)}rad`));
                  const Xu = Math.abs(Ju) < yu && Math.abs(Nu) < Eu;
                  if (Xu !== Qu.onScreen && (Qu.onScreen = Xu, Qu.WU.classList.toggle("DirectionArrowOnScreen", Xu)), Qu.shouldShowDistance && Qu.distanceElement) {
                    const uu = Qu.position[0] - Ru[0],
                      yu = Qu.position[1] - Ru[1],
                      Eu = Qu.position[2] - Ru[2],
                      Ku = Math.round(Math.sqrt(uu * uu + yu * yu + Eu * Eu));
                    (-1 === Qu.lastRenderedDist || (0, BE.b)(Ku, Qu.lastRenderedDist, Qu.lastDistUpdateTime)) && (Qu.distanceElement.textContent = `${Ku}m`, Qu.lastRenderedDist = Ku, Qu.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(Ru)
            }));
          return () => {
            yu();
            for (const uu in Ru) delete Ru[uu]
          }
        }), []);
        const yu = uu.current;
        return (0, Xu.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(yu).map((uu => {
            var Ru;
            let [Eu, Ku] = uu;
            const Qu = null !== (Ru = (0, ju.$b)(Ku.style)) && void 0 !== Ru ? Ru : "#ffffff";
            return (0, Xu.jsxs)("div", {
              ref: uu => {
                yu[Eu] && (yu[Eu].WU = uu)
              },
              className: "DirectionArrow",
              style: {
                fontSize: Ku.style.fontSize,
                opacity: Ku.style.opacity
              },
              children: [(0, Xu.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: uu => {
                  yu[Eu] && (yu[Eu].chevronElement = uu)
                },
                children: [(0, Xu.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, Xu.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, Xu.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, Xu.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, Xu.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Qu
                    }
                  }), (0, Xu.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Qu
                    }
                  })]
                })]
              }), (0, Xu.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: Qu,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${Qu}`
                }
              }), Ku.text && (0, Xu.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: Qu,
                  fontWeight: Ku.style.fontWeight,
                  fontStyle: Ku.style.fontStyle
                },
                children: (0, Xu.jsx)(Nu.d, {
                  text: Ku.text
                })
              }), Ku.shouldShowDistance && (0, Xu.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: uu => {
                  yu[Eu] && (yu[Eu].distanceElement = uu)
                },
                style: {
                  color: Qu,
                  fontWeight: Ku.style.fontWeight,
                  fontStyle: Ku.style.fontStyle
                }
              })]
            }, Eu)
          }))
        })
      })),
      TE = .5;
    const WE = (0, Eu.memo)((function(uu) {
        let {
          isTouchScreen: Ru
        } = uu;
        return (0, Xu.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, Xu.jsx)(bE, {}), Ru && (0, Xu.jsx)(uy, {})]
        })
      })),
      jE = {
        readyForNext: 0,
        running: 1
      },
      HE = 50;

    function dE(uu) {
      console.assert(uu.state.current === jE.readyForNext);
      const Ru = uu.queue.current,
        yu = uu.foreground.current;
      if (Ru.length > 0 && yu) {
        const {
          toFraction: Eu,
          toDuration: Ku
        } = Ru.shift();
        uu.state.current = jE.running, yu.style.transition = `transform ${Math.max(Ku-HE,0)}ms linear`, yu.classList.remove("Complete"), uu.timeout.current = setTimeout((() => {
          yu.style.transform = `scaleX(${Eu})`, uu.timeout.current = setTimeout((() => {
            1 === Eu && yu.classList.add("Complete"), uu.state.current = jE.readyForNext, dE(uu)
          }), Math.max(Ku - HE, 0))
        }), HE)
      }
    }

    function bE() {
      const uu = (0, Eu.useRef)([]),
        Ru = (0, Eu.useRef)(jE.readyForNext),
        yu = (0, Eu.useRef)(void 0),
        Ku = (0, Eu.useRef)(null),
        Qu = (0, Eu.useRef)({
          queue: uu,
          state: Ru,
          timeout: yu,
          foreground: Ku
        }),
        mu = (0, Hu.g)("showProgressBar");
      if ((0, Eu.useLayoutEffect)((() => (mu && Ru.current === jE.readyForNext && dE(Qu.current), () => {
          Ru.current = jE.readyForNext, clearTimeout(yu.current), mu && (uu.current.length = 0)
        })), [mu]), (0, Ju.e)("progressBarUpdate", (yu => {
          let {
            toFraction: Eu,
            toDuration: Ku
          } = yu;
          uu.current.push({
            toFraction: Eu,
            toDuration: Ku
          }), Ru.current === jE.readyForNext && dE(Qu.current)
        })), !mu) return null;
      return (0, Xu.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, Xu.jsx)("div", {
          className: "ProgressBarForeground",
          ref: Ku,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var CE = yu(36532),
      kE = yu(2352);
    const eE = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function AE(uu) {
      let {
        classes: Ru,
        gone: yu
      } = uu;
      const Eu = document.documentElement;
      Eu.classList.remove(...Ru);
      for (const Ku of yu) Ku.style.display = "block";
      return () => {
        Eu.classList.add(...Ru);
        for (const uu of yu) uu.style.display = ""
      }
    }

    function DE(uu) {
      const {
        isTouchScreen: Ru
      } = (0, eu.j)(["isTouchScreen"]);
      (0, Eu.useLayoutEffect)((() => {
        if (!Ru) return;
        const yu = uu.current,
          Eu = document.querySelector(`.${CE.d}`),
          Ku = uu => {
            const Ru = () => {
              const Ru = uu.querySelector(kE.g),
                Eu = function(uu) {
                  const Ru = document.documentElement;
                  return {
                    classes: rR.C.map(pR.A).filter((uu => Ru.classList.contains(uu))),
                    gone: [...uu.querySelectorAll(`.TopRightTrayToggle.${kE.i}`)]
                  }
                }(uu);
              Ru && function(uu, Ru) {
                (0, kE.y)(uu, Ru.classes.length > 0 || Ru.gone.length > 0, (() => AE(Ru)))
              }(Ru, Eu);
              const Ku = `${Math.floor(function(uu,Ru,yu){const Eu=document.documentElement,Ku=Eu.classList.contains((0,pR.H)("menu")),Qu=Eu.style.getPropertyValue((0,pR.L)("menu"));if(!Ku&&""===Qu)return uu.getBoundingClientRect().left;const mu=Ru?(0,kE.k)(Ru):()=>{},Ju=AE(yu);Eu.classList.remove((0,pR.H)("menu")),Eu.style.removeProperty((0,pR.L)("menu"));const Nu=uu.getBoundingClientRect().left;return Ju(),mu(),Ku&&Eu.classList.add((0,pR.H)("menu")),""!==Qu&&Eu.style.setProperty((0,pR.L)("menu"),Qu),Nu}(uu,Ru,Eu)-yu.getBoundingClientRect().left-4)}px`;
              yu.style.getPropertyValue("--InGameHeaderMaxWidth") !== Ku && yu.style.setProperty("--InGameHeaderMaxWidth", Ku)
            };
            Ru();
            const Ku = new ResizeObserver(Ru);
            Ku.observe(uu), Ku.observe(Eu), window.addEventListener("resize", Ru);
            const Qu = () => eE.map((uu => document.documentElement.style.getPropertyValue(uu))).join();
            let mu = Qu();
            const Ju = new MutationObserver((() => {
              const uu = Qu();
              uu !== mu && (mu = uu, Ru())
            }));
            Ju.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const Nu = (0, du.n)(pR.e, Ru),
              Xu = new MutationObserver(Ru);
            return Xu.observe(uu, {
              childList: !0,
              subtree: !0
            }), () => {
              Ku.disconnect(), Ju.disconnect(), Xu.disconnect(), Nu(), window.removeEventListener("resize", Ru);
              const yu = uu.querySelector(kE.g);
              yu && (0, kE.k)(yu)
            }
          },
          Qu = () => Eu.querySelector(".TopRightIconsContainer"),
          mu = Qu();
        let Ju;
        if (mu) Ju = Ku(mu);
        else {
          const uu = new MutationObserver((() => {
            const Ru = Qu();
            Ru && (uu.disconnect(), Ju = Ku(Ru))
          }));
          uu.observe(Eu, {
            childList: !0,
            subtree: !0
          }), Ju = () => {
            uu.disconnect()
          }
        }
        return () => {
          Ju(), yu.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [Ru, uu])
    }
    var ME = yu(3485),
      IE = yu(3481),
      GE = yu(1583),
      UE = yu(1447),
      nE = yu(1587),
      sE = yu(1661),
      tE = yu(1774),
      lE = yu(1110),
      gE = yu(4093),
      cE = yu(1422),
      LE = yu(1320);
    const zE = 2e4,
      FE = 6e5,
      wE = new Set;

    function ZE() {
      const {
        gameEntrySource: uu,
        loadingOverlayVisible: Ru
      } = (0, eu.j)(["gameEntrySource", "loadingOverlayVisible"]), yu = (0, ku.h)("connectedGame", (uu => (0, gE.j)(uu) ? uu.lobbyName : null)), Ku = (0, ku.i)("localPlayerAlive"), Qu = (0, ku.h)("players", (uu => null !== uu.localId && void 0 !== uu.byId[uu.localId])), [mu, Ju] = (0, Eu.useState)(null);
      return !Ru && Ku && Qu && null !== yu && mu !== yu && Ju(yu), (0, Eu.useEffect)((() => {
        if (!(0, gE.k)(uu) || null === mu || mu !== yu || wE.has(mu)) return;
        const Ru = setTimeout((() => {
          wE.add(mu), async function(uu) {
            const Ru = await lE.userContextManager.getCurrentUserContext();
            let yu;
            try {
              yu = (await UE.e.getWorldOwnerFriendOffer(Ru)).owner
            } catch (Ku) {
              return void console.warn("Couldn't ask who owns this world", Ku)
            }
            if (!yu || (0, gE.o)(yu.name, Date.now())) return;
            const Eu = yu;
            ! function(uu, Ru) {
              const yu = Date.now() + FE;
              let Eu = Date.now(),
                Ku = 0;
              const Qu = () => {
                const mu = Date.now(),
                  Ju = Bu.gameBridge.latest("connectedGame");
                Ju.lobbyName !== uu || mu > yu || (null === Ju.websocketUrl ? Eu = 1 / 0 : Eu === 1 / 0 && !eu.d.get("loadingOverlayVisible") && Bu.gameBridge.latest("localPlayerAlive") && (Eu = mu + zE), Ku = mu < Eu || !Bu.gameBridge.latest("localPlayerAlive") || eu.d.get("isUiHidden") || eu.d.get("isUiHiddenByCamera") || (0, sE.isTypingInInput)() || eu.d.get("loadingOverlayVisible") || (0, GE.p)() || (0, ME.d)() || (0, LE.l)() ? 0 : Ku + 1, Ku >= 2 ? Ru() : setTimeout(Qu, 500))
              };
              Qu()
            }(uu, (() => {
              (0, gE.f)(nE.c.getSocialState().friends, Eu.name) || ((0, gE.n)(Eu.name, Date.now()), tE.i.showWorldOwnerOffer(Eu), (0, cE.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(mu).catch((uu => {
            console.error("Failed to offer the world's owner as a friend", uu)
          }))
        }), zE);
        return () => {
          clearTimeout(Ru)
        }
      }), [uu, mu, yu]), null
    }
    var hE = yu(1828);
    const PE = (0, Eu.memo)((function(uu) {
        let {
          durationMs: Ru,
          endsAtMs: yu
        } = uu;
        const [, Ku] = (0, Eu.useReducer)((uu => uu + 1), 0), Qu = null === yu ? Ru : Math.max(yu - Date.now(), 0);
        return (0, Eu.useEffect)((() => {
          if (null === yu || Qu <= 0) return;
          const uu = setTimeout(Ku, Qu - 1e3 * (Math.ceil(Qu / 1e3) - 1));
          return () => {
            clearTimeout(uu)
          }
        })), (0, Xu.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, gy.jb)(Qu)
        })
      })),
      iE = (0, Eu.memo)((function() {
        const uu = (0, ku.i)("localEffects");
        return (0, Xu.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(uu).map((uu => {
            let [Ru, {
              icon: yu,
              displayName: Eu,
              durationMs: Ku,
              endsAtMs: Qu,
              level: mu
            }] = uu;
            return (0, Xu.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, Xu.jsx)(hE.b, {
                icon: yu,
                className: "EffectInfoIcon"
              }), (0, Xu.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== Ku ? "0" : "1rem"
                },
                children: [(0, Xu.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, Xu.jsx)(Nu.d, {
                    text: null !== Eu && void 0 !== Eu ? Eu : Ru,
                    className: "EffectInfoName SmallTextBold"
                  }), mu > 1 && (0, Xu.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, gy.U)(mu)
                  })]
                }), null !== Ku && (0, Xu.jsx)(PE, {
                  durationMs: Ku,
                  endsAtMs: Qu
                })]
              })]
            }, Ru)
          }))
        })
      }));
    var YE = yu(36536),
      oE = yu(36672),
      qE = yu(212),
      OE = yu(1311),
      vE = yu(2623),
      aE = yu(2737);

    function fE(uu, Ru) {
      (0, Eu.useLayoutEffect)((() => {
        let Ru, yu;
        const Eu = requestAnimationFrame((() => {
          yu = setTimeout((() => {
            yu = void 0;
            const Eu = uu();
            Ru = "function" === typeof Eu ? Eu : void 0
          }), 0)
        }));
        return () => {
          var uu;
          cancelAnimationFrame(Eu), clearTimeout(yu), null === (uu = Ru) || void 0 === uu || uu()
        }
      }), Ru)
    }
    const uK = [5, 5, 5],
      RK = [7, 4, 4, 4];

    function yK(uu) {
      return uu.reduce(((uu, Ru) => uu + Ru), 0)
    }

    function EK(uu, Ru, yu, Eu, Ku) {
      const Qu = uu.getContext("2d");
      if (!Qu) return null;
      const mu = Ru.fontFamily,
        Ju = Ru.fontWeight;
      return uu.width = yu, uu.height = Eu, Qu.fillStyle = Ru.color, Qu.textAlign = "center", Qu.textBaseline = "middle", Qu.font = `${Ju} ${Ku}px ${mu}`, Qu
    }
    const KK = (0, Eu.memo)((function(uu) {
      let {
        show: Ru
      } = uu;
      const yu = (0, Eu.useRef)(null),
        Ku = (0, Eu.useRef)(null),
        Qu = (0, Eu.useRef)(null),
        mu = (0, Su.k)();
      return (0, Eu.useEffect)((() => mu.whenShown((() => {
        let uu = 0,
          Ru = 0,
          yu = 0,
          Eu = 0;
        const mu = (0, xE.r)((() => {
          var mu;
          uu++, Ru++;
          const Ju = performance.now();
          if (Ju - yu < 1e3) return;
          const Nu = Math.round(uu / (Ju - yu) * 1e3);
          if (Ku.current = Nu, null === (mu = Qu.current) || void 0 === mu || mu.call(Qu, Nu), uu = 0, yu = Ju, Nu < 55) {
            var Xu, Vu;
            Eu += 1;
            const uu = Cu.i.getItem("decreaseLoadDistPromptDeniedCount"),
              [Ru, yu] = bu.b.get("minChunkAddDist");
            if (Eu >= 15 && function(uu, Ru) {
                const yu = Bu.gameBridge.lookup("DH", null);
                return null !== yu && (yu.horizontal > uu || yu.vertical > Ru)
              }(Ru, yu) && (null !== (Xu = Cu.i.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== Xu ? Xu : 0) + 432e5 < Date.now() && (null !== (Vu = Cu.i.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== Vu ? Vu : 0) < 3) {
              Cu.i.setItem("lastDecreaseLoadDistPromptTime", Date.now());
              OE.NotificationProvider.showPromptPopup({
                title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                confirmText: "general:yes",
                cancelText: "general:no",
                unlockPointerKey: "chunkLoadDistanceLagPopup"
              }).getResult().then((Eu => {
                "notificationTornDown" !== Eu && (Eu ? (Bu.gameBridge.send("setChunkAddDistance", {
                  horizontal: Ru,
                  vertical: yu
                }), Cu.i.setItem("chunkHorizAddDist", Ru), Cu.i.setItem("chunkVertAddDist", yu), du.k.Op("updatedChunkLoadDist"), Cu.i.setItem("decreaseLoadDistPromptDeniedCount", 0)) : Cu.i.setItem("decreaseLoadDistPromptDeniedCount", uu + 1))
              }))
            }
          } else Eu = 0
        }));
        let Ju = performance.now();
        Ru = 0;
        let Nu = null,
          Xu = !document.hidden;

        function Vu() {
          const uu = performance.now() - Ju,
            yu = 1e3 * Ru / uu;
          Xu && (null === Nu && (Nu = yu), vE.c.setFps(yu, Nu)), Ru = 0, Ju = performance.now()
        }
        let ru = setInterval(Vu, aE.e);

        function xu() {
          const uu = Xu;
          Xu = !document.hidden, !uu && Xu && (Ru = 0, Ju = performance.now(), clearInterval(ru), ru = setInterval(Vu, aE.e))
        }
        return document.addEventListener("visibilitychange", xu), () => {
          mu(), document.removeEventListener("visibilitychange", xu), clearInterval(ru)
        }
      }))), [mu]), fE((() => {
        var uu;
        if (!Ru || Qu.current) return;
        const Eu = yu.current,
          mu = window.getComputedStyle(Eu.parentElement),
          Ju = null !== (uu = window.devicePixelRatio) && void 0 !== uu ? uu : 1,
          Nu = parseFloat(mu.fontSize) * Ju,
          Xu = Math.round(3 * Nu),
          Vu = Math.round(Nu),
          ru = EK(Eu, mu, Xu, Vu, Nu);
        if (!ru) return;
        const Bu = uu => {
          ru.clearRect(0, 0, Eu.width, Eu.height), ru.fillText(uu.toString(), Eu.width / 2, Eu.height / 2)
        };
        Qu.current = Bu, null !== Ku.current && Bu(Ku.current)
      }), [Ru]), (0, Xu.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: Ru ? "flex" : "none"
        },
        children: [(0, Xu.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, Xu.jsx)("canvas", {
          className: "FpsCanvas",
          ref: yu,
          width: 48,
          height: 16
        })]
      })
    }));

    function QK(uu) {
      return Math.sign(uu) * Math.round(100 * Math.abs(uu))
    }

    function mK(uu) {
      let {
        getCoordinates: Ru,
        showChunkCoords: yu,
        columns: Ku
      } = uu;
      const Qu = (0, Eu.useRef)(null);
      return fE((() => {
        var uu;
        const Eu = Qu.current,
          mu = window.getComputedStyle(Eu.parentElement),
          Ju = null !== (uu = window.devicePixelRatio) && void 0 !== uu ? uu : 1,
          Nu = parseFloat(mu.fontSize) * Ju,
          Xu = Math.round(Nu * yK(Ku)),
          Vu = Math.round(Nu),
          ru = EK(Eu, mu, Xu, Vu, Nu);
        if (!ru) return;
        let xu = !0,
          Su = 0,
          pu = 0,
          Tu = 0,
          Wu = 0,
          ju = 0,
          Hu = 0;
        const du = () => {
          xu = !0
        };
        document.fonts.load(ru.font).then(du, du);
        const bu = () => {
          EK(Eu, mu, Xu, Vu, Nu), du()
        };
        Eu.addEventListener("contextrestored", bu);
        const Cu = (0, xE.u)((() => {
          var uu, Qu, mu, Ju, Xu, Vu;
          const [du, bu, Cu] = Ru(), ku = QK(du), eu = QK(bu), Au = QK(Cu);
          let Du = null;
          if (yu) {
            const uu = Bu.gameBridge.lookup("localPos", null);
            Du = (0, uR.U)(uu[0], uu[1], uu[2])
          }
          const Mu = null !== (uu = null === (Qu = Du) || void 0 === Qu ? void 0 : Qu[0]) && void 0 !== uu ? uu : 0,
            Iu = null !== (mu = null === (Ju = Du) || void 0 === Ju ? void 0 : Ju[1]) && void 0 !== mu ? mu : 0,
            Gu = null !== (Xu = null === (Vu = Du) || void 0 === Vu ? void 0 : Vu[2]) && void 0 !== Xu ? Xu : 0;
          if (!xu && ku === Su && eu === pu && Au === Tu && Mu === Wu && Iu === ju && Gu === Hu) return;
          xu = !1, Su = ku, pu = eu, Tu = Au, Wu = Mu, ju = Iu, Hu = Gu;
          const Uu = [(ku / 100).toFixed(2), (eu / 100).toFixed(2), (Au / 100).toFixed(2)];
          Du && Uu.unshift(`${Mu} ${Iu} ${Gu}`), ru.clearRect(0, 0, Eu.width, Eu.height);
          const nu = Eu.height / 2;
          let su = 0;
          for (let Ru = 0; Ru < Uu.length; Ru++) {
            const uu = Nu * Ku[Ru];
            ru.fillText(Uu[Ru], su + uu / 2, nu, uu), su += uu
          }
        }));
        return () => {
          Cu(), Eu.removeEventListener("contextrestored", bu)
        }
      }), [Ru, yu, Ku]), (0, Xu.jsx)("div", {
        className: "CoordinateUI",
        children: (0, Xu.jsx)("canvas", {
          ref: Qu,
          className: "CoordinateCanvas",
          width: 16 * yK(Ku),
          height: 16
        })
      })
    }
    const JK = (0, Eu.memo)((function() {
        const uu = (0, Eu.useCallback)((() => {
          const uu = Bu.gameBridge.lookup("localPos", null);
          return [uu[0], uu[1], uu[2]]
        }), []);
        return (0, Xu.jsx)(mK, {
          getCoordinates: uu,
          showChunkCoords: !1,
          columns: uK
        })
      })),
      NK = (0, Eu.memo)((function() {
        const uu = (0, Eu.useCallback)((() => {
          const uu = Bu.gameBridge.lookup("localPos", null),
            Ru = qE.f.jS;
          let yu = uu[0] % Ru,
            Eu = uu[1] % Ru,
            Ku = uu[2] % Ru;
          return yu < 0 && (yu += Ru), Eu < 0 && (Eu += Ru), Ku < 0 && (Ku += Ru), [yu, Eu, Ku]
        }), []);
        return (0, Xu.jsx)(mK, {
          getCoordinates: uu,
          showChunkCoords: !0,
          columns: RK
        })
      }));
    var XK = yu(1980),
      VK = yu(1300),
      rK = yu(1001),
      BK = yu(1199),
      xK = yu(106),
      SK = yu(36545),
      pK = yu(1410),
      TK = yu(2936);
    const WK = (0, Eu.memo)((function() {
      const uu = (0, Hu.g)("maxAuraLevel");
      return 0 === uu ? null : (0, Xu.jsx)(jK, {
        maxLevel: uu
      })
    }));

    function jK(uu) {
      let {
        maxLevel: Ru
      } = uu;
      const yu = (0, Hu.g)("auraPerLevel"),
        [Ku, Qu] = (0, Eu.useState)((() => {
          var uu;
          return null !== (uu = Bu.gameBridge.latest("aura")) && void 0 !== uu ? uu : void 0
        })),
        [mu, Ju] = (0, Eu.useState)((() => du(Ku))),
        [Nu, Vu] = (0, Eu.useReducer)((uu => uu + 1), 0),
        ru = (0, Eu.useRef)(null),
        xu = (0, Eu.useRef)([]),
        Su = (0, Eu.useRef)({
          width: 0,
          level: 0
        }),
        pu = (0, Eu.useRef)(null),
        Tu = (0, Eu.useRef)(null);

      function ju() {
        if (null !== pu.current) return;
        if (0 === xu.current.length) return;
        const {
          width: uu,
          level: Ru
        } = xu.current.shift();
        let yu;
        if (Ru !== Su.current.level && Ru > Su.current.level !== uu > Su.current.width) {
          const Eu = Ru > Su.current.level;
          yu = Eu ? uu : 100 - uu, ru.current.style.transition = "none", ru.current.style.width = Eu ? "0%" : "100%", ru.current.offsetWidth
        } else yu = Math.abs(uu - Su.current.width);
        const Eu = 100 * yu / 20;
        ru.current.style.transition = `width ${Eu}ms linear`, Ju(uu), Su.current = {
          width: uu,
          level: Ru
        }, xu.current.length > 0 && (pu.current = setTimeout((() => {
          pu.current = null, ju()
        }), Eu))
      }

      function du(uu) {
        return Math.floor(uu / yu) === Ru ? 100 : uu % yu / yu * 100
      }
      return (0, Eu.useEffect)((() => () => {
        clearTimeout(pu.current), clearTimeout(Tu.current), pu.current = null, Tu.current = null
      }), []), (0, ku.d)("aura", (uu => {
        if (Tu.current && clearTimeout(Tu.current), null === uu) return clearTimeout(pu.current), Tu.current = null, pu.current = null, xu.current = [], Su.current = {
          width: 0,
          level: 0
        }, Qu(void 0), void Ju(0);
        Tu.current = setTimeout((() => {
          const Ru = Math.floor(Ku / yu),
            Eu = Math.floor(uu / yu),
            mu = du(uu);
          uu > Ku && SK.d.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), Eu > Ru ? (Eu % 5 === 0 && SK.d.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), Vu(), xu.current.push({
            width: 100,
            level: Ru
          })) : Eu < Ru && xu.current.push({
            width: 0,
            level: Ru
          }), uu === Ku && Eu === Ru || xu.current.push({
            width: mu,
            level: Eu
          }), Qu(uu), ju()
        }), 50)
      })), (0, Wu.g)(), (0, Xu.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, Xu.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, Xu.jsx)(pK.e, {
            showSignal: Nu,
            particleElement: (0, Xu.jsx)("img", {
              src: (0, TK.g)("glint"),
              alt: ""
            })
          }), (0, Xu.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, TK.g)("glint"),
            alt: "aura"
          }), (0, Xu.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== Ku && void 0 !== Ku ? Ku : 0) / yu)
          })]
        }), (0, Xu.jsx)("div", {
          className: "AuraBar",
          children: (0, Xu.jsx)("div", {
            ref: ru,
            className: "AuraBarBackground",
            style: {
              width: `${mu}%`
            }
          })
        })]
      })
    }
    var HK = yu(2430);

    function dK(uu) {
      uu.timed && (uu.endedAnimation = uu.timed.animation, uu.timed = null)
    }
    const bK = (0, Eu.memo)((function() {
      const uu = (0, Eu.useRef)(null),
        Ru = (0, Eu.useRef)(null),
        yu = (0, Eu.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, Ju.e)("middleScreenBarInitiate", (uu => {
        var Eu;
        let {
          duration: Ku,
          rE: Qu,
          horizBarRemOffset: mu
        } = uu;
        const Ju = yu.current;
        dK(Ju);
        const Nu = Ru.current;
        if (!(Ku >= 0) || !Nu) return;
        null === (Eu = Ju.endedAnimation) || void 0 === Eu || Eu.cancel(), Ju.endedAnimation = null;
        const Xu = Nu.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: Ku,
          fill: "forwards"
        });
        Ju.timed = {
          rE: Qu,
          horizBarRemOffset: mu,
          animation: Xu
        }
      })), (0, Ju.e)("middleScreenBarRemove", (() => {
        dK(yu.current)
      })), (0, Eu.useEffect)((() => {
        const Eu = yu.current;
        let Ku = Number.NaN,
          Qu = Number.NaN,
          mu = Number.NaN;
        return (0, xE.o)((() => {
          var yu, Ju, Nu, Xu;
          const Vu = uu.current,
            ru = Ru.current;
          if (!Vu || !ru) return;
          null !== (yu = Eu.timed) && void 0 !== yu && yu.rE && "finished" === Eu.timed.animation.playState && dK(Eu), null === (Ju = Eu.endedAnimation) || void 0 === Ju || Ju.cancel(), Eu.endedAnimation = null;
          let xu = Eu.timed ? 1 : 0;
          if (!Eu.timed) {
            const uu = Bu.gameBridge.lookup("momentumFrac", null);
            xu = uu > 0 ? 1 : 0, uu !== mu && (mu = uu, ru.style.transform = `scaleX(${uu})`)
          }
          const Su = null !== (Nu = null === (Xu = Eu.timed) || void 0 === Xu ? void 0 : Xu.horizBarRemOffset) && void 0 !== Nu ? Nu : 0;
          Su === Ku && xu === Qu || (Ku = Su, Qu = xu, Vu.style.transform = `translateX(calc(-50% + ${Su}rem)) scaleX(${xu})`)
        }))
      }), []), (0, Xu.jsx)("div", {
        className: "MiddleScreenBar",
        ref: uu,
        children: (0, Xu.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: Ru
        })
      })
    }));
    var CK = yu(4461),
      kK = yu(2605);

    function eK() {
      const {
        t: uu
      } = (0, Gu.E)(), Ru = (0, Ju.h)("serverUpdating", null), yu = (0, kK.d)(250, null !== Ru);
      return null === Ru || yu - Ru > 3e4 ? null : (0, Xu.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, Xu.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: uu("updateWaiting:updatingIn", {
            countdown: (0, CK.m)(Ru - yu)
          })
        }), (0, Xu.jsx)("div", {
          children: uu("updateWaiting:bringYouBack")
        })]
      })
    }
    var AK = yu(36693),
      DK = yu(1915);
    const MK = [{
        translationKey: "general:interact"
      }],
      IK = (0, Eu.memo)((function() {
        const uu = (0, Hu.g)("crosshairText"),
          {
            interactPrompt: Ru,
            blockText: yu,
            neededTool: Ku
          } = (0, ku.i)("crosshairTarget"),
          {
            isTouchScreen: Qu
          } = (0, eu.j)(["isTouchScreen"]),
          mu = (0, Du.n)(),
          Vu = (0, Iu.d)("alt-fire");
        (0, Eu.useEffect)((() => {
          Bu.gameBridge.send("setCrosshairInteractPrompt", !Qu || mu ? "key" : "touch")
        }), [Qu, mu]);
        const [ru, xu] = (0, Eu.useReducer)((uu => uu + 1), 0);
        (0, Ju.e)("customBindingsChanged", xu);
        var Su;
        if (null !== Ru && (mu && null !== Vu || !Qu && null !== (0, DK.r)("alt-fire"))) return (0, Xu.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, Xu.jsx)(Au.b, {
            noaAction: "alt-fire"
          }), (0, Xu.jsx)(Nu.d, {
            text: null !== (Su = Ru.label) && void 0 !== Su ? Su : MK
          })]
        });
        let pu = null;
        return null !== yu ? pu = yu : null !== uu && "" !== uu ? pu = uu : null !== Ku && (pu = [{
          icon: Ku,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), pu ? (0, Xu.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, Xu.jsx)(Nu.d, {
            text: pu
          })
        }) : null
      }));
    var GK = yu(2435);
    const UK = (0, Eu.memo)((function() {
      var uu;
      const {
        interactPrompt: Ru
      } = (0, ku.i)("crosshairTarget"), {
        openInGameMenuName: yu,
        openEverythingMenuName: Eu
      } = (0, eu.j)(["openInGameMenuName", "openEverythingMenuName"]), Ku = (0, Ju.h)("aimingOverlay", "none"), Qu = (0, ou.i)(), mu = (0, GK.e)();
      return null === Ru || null !== yu || null !== Eu || "sniper" === Ku || Qu || mu ? null : (0, Xu.jsx)(nK, {
        label: null !== (uu = Ru.label) && void 0 !== uu ? uu : MK
      })
    }));

    function nK(uu) {
      let {
        label: Ru
      } = uu;
      const yu = IR(vu.e.Interact, !1);
      return (0, Eu.useEffect)((() => (du.k.Op(pR.u), () => {
        du.k.Op(pR.u)
      })), []), (0, Xu.jsx)("div", {
        ref: yu,
        className: "TouchInteractHit",
        children: (0, Xu.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, Xu.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, Xu.jsx)(cu.c, {
              name: "hand-back-point-up"
            })
          }), (0, Xu.jsx)(Nu.d, {
            text: Ru
          })]
        })
      })
    }
    var sK = yu(4540),
      tK = yu(4598);
    const lK = (0, Eu.forwardRef)((function(uu, Ru) {
        let {
          text: yu,
          className: Eu,
          children: Ku
        } = uu;
        return yu.hasText ? (0, Xu.jsx)("div", {
          ref: Ru,
          className: Qu()("HudTextPanel", Eu, {
            NoBackground: !yu.showBackground
          }),
          children: null !== Ku && void 0 !== Ku ? Ku : (0, Xu.jsx)(Nu.d, {
            text: yu.content
          })
        }) : null
      })),
      gK = (0, Eu.memo)((function() {
        const uu = (0, Hu.j)("middleTextTop"),
          [Ru, yu] = (0, Eu.useState)(null),
          Ku = (0, CE.g)(Ru);
        return uu.hasText ? (0, Xu.jsx)("div", {
          className: Qu()("MiddleTextTopContainer", {
            MiddleTextTopBelow: Ku
          }),
          children: (0, Xu.jsx)(lK, {
            ref: yu,
            className: "MiddleTextTop",
            text: uu
          })
        }) : null
      })),
      cK = (0, Eu.memo)((function() {
        const uu = (0, Hu.c)();
        return (0, Xu.jsx)(Xu.Fragment, {
          children: uu.map(((uu, Ru) => (0, Xu.jsx)(lK, {
            className: "HeaderChip",
            text: uu
          }, Ru)))
        })
      }));
    var LK = yu(3442),
      zK = yu(4382);
    const FK = (0, Eu.memo)((function() {
      const {
        t: uu
      } = (0, Gu.E)(), [Ru, yu] = (0, Eu.useState)(!1), Ku = (0, Eu.useRef)(!1), Qu = function(uu) {
        let {
          gameNameWithVariation: Ru,
          lobbyName: yu
        } = uu;
        if ((0, rK.i)(Ru)) return wK;
        if ((0, BK.H)(yu)) return ZK;
        return null
      }((0, ku.i)("connectedGame"));
      if (!Qu || Ru) return null;
      const mu = zK.c[Qu.target];
      return (0, Xu.jsx)(gu.i, {
        tooltipInner: (0, Xu.jsx)("div", {
          children: uu(mu.reportButtonTooltip)
        }),
        children: (0, Xu.jsx)("div", {
          children: (0, Xu.jsx)(Dy.L, {
            onClick: () => {
              Ku.current || (Ku.current = !0, (0, zK.g)(Qu.reportPolicyIds, mu).then((uu => {
                null !== uu && void 0 !== uu && uu.selectedPolicyId && (Bu.gameBridge.send("reportLobbyOrGame", {
                  target: Qu.target,
                  vQ: uu.selectedPolicyId,
                  details: uu.aQ
                }), yu(!0))
              })).finally((() => {
                Ku.current = !1
              })))
            }
          })
        })
      })
    }));
    const wK = {
        target: "customGame",
        reportPolicyIds: LK.c
      },
      ZK = {
        target: "lobby",
        reportPolicyIds: LK.g
      };
    var hK = yu(8510),
      PK = yu(36712),
      iK = yu(36720),
      YK = yu(36723),
      oK = yu(36729),
      qK = yu(36755);

    function OK(uu) {
      return uu instanceof Error && vK.has(uu.message) ? uu.message : void 0
    }
    const vK = new Set([qK.d.saveBusy.text, qK.d.saveClosed.text, qK.d.cropBusy.text]);
    let aK = !1;
    async function fK(uu, Ru) {
      var yu, Eu;
      const {
        files: Ku
      } = Ru, Qu = Ku.replayKey();
      if (null === Qu) return "none";
      if (aK) throw new Error(qK.d.saveBusy.text);
      const mu = null !== (yu = null === (Eu = Ku.saveRefusal) || void 0 === Eu ? void 0 : Eu.call(Ku)) && void 0 !== yu ? yu : null;
      if (null !== mu) throw new Error(mu);
      aK = !0;
      try {
        return await async function(uu, Ru, yu) {
          const {
            files: Eu
          } = Ru, Ku = () => Eu.replayKey() === yu, Qu = (uu, Ru) => {
            Ku() && Eu.markSaved(uu, Ru)
          };
          let mu = null;
          if (Ru.pickerSupported()) {
            try {
              if (mu = await Ru.chooseFile(uu ? null : Eu.fileHandle()), null === mu) return "Ty"
            } catch (Nu) {
              Ru.onFallback(Nu)
            }
            if (!Ku()) throw new Error(qK.d.saveClosed.text)
          }
          const Ju = await Eu.encode();
          if (null === Ju) {
            if (null !== mu) throw new Error(qK.d.saveClosed.text);
            return "none"
          }
          if (null !== mu) try {
            return await Ru.write(mu, Ju), Qu(mu), "written"
          } catch (Nu) {
            Ru.onFallback(Nu)
          }
          return Qu(null, Ru.download(Ju)), "downloaded"
        }(uu, Ru, Qu)
      } finally {
        aK = !1
      }
    }
    var uQ = yu(4314),
      RQ = yu(80);
    const yQ = [1, 2, 4, 8, 16, 32, 64];

    function EQ(uu, Ru) {
      return Math.max(0, Math.min(uu, Ru))
    }

    function KQ(uu, Ru, yu) {
      return yu <= Ru ? 0 : (uu - Ru) / (yu - Ru) * 100
    }

    function QQ(uu, Ru, yu) {
      const Eu = yu - Ru;
      return Math.round(Ru + uu / 100 * Eu)
    }

    function mQ(uu, Ru) {
      const yu = Math.floor(uu / Ru / 60),
        Eu = Math.floor(uu / Ru % 60),
        Ku = uu % Ru;
      return `${yu.toString().padStart(2,"0")}:${Eu.toString().padStart(2,"0")}:${Ku.toString().padStart(2,"0")}`
    }

    function JQ(uu) {
      return Number.isInteger(uu) || yQ.includes(uu) ? `${Math.round(uu)}\xd7` : `${uu.toFixed(1)}\xd7`
    }

    function NQ(uu, Ru) {
      const yu = yQ.indexOf(uu);
      if (-1 !== yu) return "in" === Ru ? yQ[Math.min(yu + 1, yQ.length - 1)] : yQ[Math.max(yu - 1, 0)];
      if ("in" === Ru) {
        for (const Ru of yQ)
          if (Ru >= uu) return Ru;
        return uu
      }
      for (let Eu = yQ.length - 1; Eu >= 0; Eu--)
        if (yQ[Eu] <= uu) return yQ[Eu];
      return yQ[0]
    }

    function XQ(uu, Ru) {
      const yu = Ru.getBoundingClientRect();
      if (yu.width <= 0) return 0;
      const Eu = (uu - yu.left) / yu.width * 100;
      return Math.max(0, Math.min(100, Eu))
    }

    function VQ(uu, Ru) {
      return Ru <= 0 ? 0 : uu / Ru * 100
    }

    function rQ(uu, Ru, yu) {
      const Eu = [];
      let Ku = Math.ceil(uu / yu) * yu;
      for (; Ku <= Ru;) Eu.push(Ku), Ku += yu;
      return Eu
    }
    var BQ = yu(36757);
    const xQ = [{
        label: "Linear",
        easing: BQ.n
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: BQ.f
      }, {
        label: "Ease Out",
        easing: BQ.j
      }, {
        label: "Ease In Out",
        easing: BQ.c
      }],
      SQ = 200,
      pQ = 150;

    function TQ(uu) {
      const Ru = uu => Number(uu.toFixed(3)).toString();
      return `cubic-bezier(${Ru(uu[0])}, ${Ru(uu[1])}, ${Ru(uu[2])}, ${Ru(uu[3])})`
    }

    function WQ(uu, Ru) {
      return {
        cx: 25 + uu * pQ,
        cy: 25 + (1 - Ru) * pQ
      }
    }

    function jQ(uu, Ru, yu) {
      const Eu = uu - yu.left,
        Ku = Ru - yu.top;
      return {
        x: gy.c.clamp((Eu - 25) / pQ, 0, 1),
        y: gy.c.clamp(1 - (Ku - 25) / pQ, -1, 2)
      }
    }

    function HQ(uu, Ru, yu, Eu, Ku) {
      return {
        x: (0, BQ.v)(uu, yu, Ku),
        y: (0, BQ.v)(Ru, Eu, Ku)
      }
    }
    const dQ = (0, Eu.memo)((function(uu) {
      let {
        value: Ru,
        onChange: yu
      } = uu;
      const Ku = (0, Eu.useRef)(null),
        Qu = (0, Eu.useRef)(null),
        [mu, Ju] = (0, Eu.useState)(null),
        Nu = (0, Eu.useCallback)((() => {
          const uu = Ku.current;
          if (!uu) return;
          const yu = uu.getContext("2d");
          if (!yu) return;
          const Eu = window.devicePixelRatio || 1;
          uu.width = SQ * Eu, uu.height = SQ * Eu, yu.setTransform(Eu, 0, 0, Eu, 0, 0), yu.clearRect(0, 0, SQ, SQ), yu.fillStyle = "rgba(38, 52, 93, 0.85)", yu.fillRect(0, 0, SQ, SQ), yu.beginPath();
          const Qu = WQ(0, 0),
            Ju = WQ(1, 1);
          yu.moveTo(Qu.cx, Qu.cy), yu.lineTo(Ju.cx, Ju.cy), yu.strokeStyle = "rgba(164, 164, 164, 0.35)", yu.setLineDash([3, 3]), yu.stroke(), yu.setLineDash([]);
          const [Nu, Xu, Vu, ru] = Ru, Bu = WQ(Nu, Xu), xu = WQ(Vu, ru);
          yu.strokeStyle = "rgba(252, 211, 115, 0.55)", yu.lineWidth = 1.5, yu.beginPath(), yu.moveTo(Qu.cx, Qu.cy), yu.lineTo(Bu.cx, Bu.cy), yu.moveTo(Ju.cx, Ju.cy), yu.lineTo(xu.cx, xu.cy), yu.stroke(), yu.strokeStyle = "#fcd373", yu.lineWidth = 2, yu.beginPath();
          for (let Ru = 0; Ru <= 50; Ru++) {
            const uu = HQ(Nu, Xu, Vu, ru, Ru / 50),
              Eu = WQ(uu.x, uu.y);
            0 === Ru ? yu.moveTo(Eu.cx, Eu.cy) : yu.lineTo(Eu.cx, Eu.cy)
          }
          yu.stroke();
          const Su = (uu, Ru, Eu) => {
            yu.beginPath(), yu.arc(uu, Ru, Eu ? 6 : 5, 0, 2 * Math.PI), yu.fillStyle = Eu ? "#ffb914" : "#fcd373", yu.fill(), yu.strokeStyle = "#1a1f2e", yu.lineWidth = 1.5, yu.stroke()
          };
          Su(Bu.cx, Bu.cy, "p1" === mu), Su(xu.cx, xu.cy, "p2" === mu)
        }), [mu, Ru]);
      (0, Eu.useEffect)((() => {
        Nu()
      }), [Nu]);
      const Vu = (0, Eu.useCallback)(((uu, Eu) => {
          const mu = Ku.current,
            Ju = Qu.current;
          if (!mu || !Ju) return;
          const Nu = mu.getBoundingClientRect(),
            {
              x: Xu,
              y: Vu
            } = jQ(uu, Eu, Nu);
          yu("p1" === Ju ? [Xu, Vu, Ru[2], Ru[3]] : [Ru[0], Ru[1], Xu, Vu])
        }), [yu, Ru]),
        ru = (0, Eu.useCallback)((uu => {
          const yu = Ku.current;
          if (!yu) return;
          const Eu = yu.getBoundingClientRect();
          let {
            x: mu,
            y: Nu
          } = jQ(uu.clientX, uu.clientY, Eu);
          mu = gy.c.clamp(mu, 0, 1), Nu = gy.c.clamp(Nu, 0, 1);
          const [Xu, ru, Bu, xu] = Ru.map((uu => gy.c.clamp(uu, 0, 1))), Su = Math.hypot(mu - Xu, Nu - ru), pu = Math.hypot(mu - Bu, Nu - xu), Tu = Su <= pu ? "p1" : "p2";
          ("p1" === Tu ? Su : pu) > .12 || (Qu.current = Tu, Ju(Tu), yu.setPointerCapture(uu.pointerId), Vu(uu.clientX, uu.clientY))
        }), [Vu, Ru]),
        Bu = (0, Eu.useCallback)((uu => {
          Qu.current && Vu(uu.clientX, uu.clientY)
        }), [Vu]),
        xu = (0, Eu.useCallback)((uu => {
          Qu.current = null, Ju(null), uu.currentTarget.hasPointerCapture(uu.pointerId) && uu.currentTarget.releasePointerCapture(uu.pointerId)
        }), []);
      return (0, Xu.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, Xu.jsx)("canvas", {
          ref: Ku,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: SQ,
            height: SQ
          },
          onPointerDown: ru,
          onPointerMove: Bu,
          onPointerUp: xu,
          onPointerCancel: xu
        }), (0, Xu.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: TQ(Ru)
        })]
      })
    }));
    var bQ = yu(1621),
      CQ = yu(1611);
    const kQ = 12;

    function eQ(uu) {
      return {
        left: uu.left + uu.width / 2,
        top: uu.top - 8
      }
    }

    function AQ(uu, Ru) {
      const [yu, Ku] = (0, Eu.useState)(null);
      return (0, Eu.useLayoutEffect)((() => {
        const yu = uu.current;
        if (!yu) return;
        const {
          width: Eu,
          height: Qu
        } = yu.getBoundingClientRect();
        Ku(function(uu, Ru, yu) {
          const Eu = window.innerWidth,
            Ku = window.innerHeight,
            Qu = Ru / 2;
          let mu = uu.left + uu.width / 2;
          mu = Math.max(kQ + Qu, Math.min(mu, Eu - kQ - Qu));
          const Ju = uu.top - 8 - kQ,
            Nu = Ku - uu.bottom - 8 - kQ,
            Xu = Ju < yu && Nu >= Ju;
          let Vu;
          Xu ? (Vu = uu.bottom + 8, Vu + yu > Ku - kQ && (Vu = Ku - kQ - yu), Vu = Math.max(kQ, Vu)) : (Vu = uu.top - 8, Vu - yu < kQ && (Vu = kQ + yu));
          return {
            left: mu,
            top: Vu,
            placeBelow: Xu
          }
        }(Ru, Eu, Qu))
      }), [Ru, uu]), yu
    }

    function DQ(uu, Ru, yu) {
      (0, Eu.useEffect)((() => (0, CQ.b)("pointerdown", (Eu => {
        var Ku, Qu;
        const mu = Eu.target;
        mu instanceof Node && (null !== (Ku = uu.current) && void 0 !== Ku && Ku.contains(mu) || null !== yu && void 0 !== yu && null !== (Qu = yu.current) && void 0 !== Qu && Qu.contains(mu) || (0, bQ.k)(mu) || Ru())
      }))), [yu, Ru, uu])
    }

    function MQ(uu) {
      let {
        label: Ru,
        value: yu,
        onChange: Eu
      } = uu;
      return (0, Xu.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, Xu.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: Ru
        }), (0, Xu.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((uu, Ru) => (0, Xu.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, Xu.jsx)("span", {
              children: uu
            }), (0, Xu.jsx)("input", {
              type: "number",
              step: "any",
              value: yu[Ru],
              onChange: uu => {
                const Ku = Number.parseFloat(uu.target.value);
                if (Number.isNaN(Ku)) return;
                const Qu = [yu[0], yu[1], yu[2]];
                Qu[Ru] = Ku, Eu(Qu)
              }
            })]
          }, uu)))
        })]
      })
    }
    const IQ = (0, Eu.memo)((function(uu) {
        var Ru, yu, Ku;
        let {
          keyframe: mu,
          anchor: Ju,
          hasOutgoingSegment: Nu,
          onClose: Vu,
          onApply: ru,
          onDelete: Bu,
          onUseCurrentCamera: xu
        } = uu;
        const Su = (0, Eu.useRef)(null),
          pu = AQ(Su, Ju.rect),
          [Tu, Wu] = (0, Eu.useState)((() => [mu.position[0], mu.position[1], mu.position[2]])),
          [ju, Hu] = (0, Eu.useState)((() => [mu.direction[0], mu.direction[1], mu.direction[2]])),
          [du, bu] = (0, Eu.useState)((() => mu.easing));
        (0, Eu.useEffect)((() => {
          Wu([mu.position[0], mu.position[1], mu.position[2]]), Hu([mu.direction[0], mu.direction[1], mu.direction[2]]), bu(mu.easing)
        }), [mu]), DQ(Su, Vu);
        const Cu = (0, Eu.useCallback)((() => {
            ru({
              sr: mu.sr,
              position: Tu,
              direction: ju,
              easing: du
            }), Vu()
          }), [ju, du, mu.sr, ru, Vu, Tu]),
          ku = (0, Eu.useCallback)((() => {
            Bu(mu.sr), Vu()
          }), [mu.sr, Bu, Vu]),
          eu = (0, Eu.useCallback)((() => {
            const uu = xu();
            uu && (Wu([uu.position[0], uu.position[1], uu.position[2]]), Hu([uu.direction[0], uu.direction[1], uu.direction[2]]))
          }), [xu]),
          Au = eQ(Ju.rect);
        return (0, Xu.jsxs)("div", {
          ref: Su,
          className: Qu()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (Ru = null === pu || void 0 === pu ? void 0 : pu.placeBelow) && void 0 !== Ru && Ru,
            Positioned: null !== pu
          }),
          style: {
            left: `${null!==(yu=null===pu||void 0===pu?void 0:pu.left)&&void 0!==yu?yu:Au.left}px`,
            top: `${null!==(Ku=null===pu||void 0===pu?void 0:pu.top)&&void 0!==Ku?Ku:Au.top}px`
          },
          onPointerDown: uu => {
            uu.stopPropagation()
          },
          children: [(0, Xu.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, Xu.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, Xu.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", Ju.sr]
            })]
          }), (0, Xu.jsx)(MQ, {
            label: "Position",
            value: Tu,
            onChange: Wu
          }), (0, Xu.jsx)(MQ, {
            label: "Direction",
            value: ju,
            onChange: Hu
          }), Nu && (0, Xu.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, Xu.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, Xu.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: xQ.map((uu => {
                const Ru = (yu = du, Eu = uu.easing, yu[0] === Eu[0] && yu[1] === Eu[1] && yu[2] === Eu[2] && yu[3] === Eu[3]);
                var yu, Eu;
                return (0, Xu.jsx)(Dy.P, {
                  className: Qu()("ReplayKeyframePopoverPreset", {
                    Active: Ru
                  }),
                  onClick: () => {
                    bu(uu.easing)
                  },
                  children: uu.label
                }, uu.label)
              }))
            }), (0, Xu.jsx)(dQ, {
              value: du,
              onChange: bu
            })]
          }), (0, Xu.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, Xu.jsx)(Dy.e, {
              className: "ReplayViewerCompactButton",
              onClick: eu,
              children: "Use current view"
            }), (0, Xu.jsx)(Dy.l, {
              className: "ReplayViewerCompactButton",
              onClick: Cu,
              children: "Apply"
            }), (0, Xu.jsx)(Dy.F, {
              className: "ReplayViewerCompactButton",
              onClick: ku,
              children: "Delete"
            })]
          })]
        })
      })),
      GQ = (0, Eu.memo)((function(uu) {
        var Ru, yu, Ku;
        let {
          anchor: mu,
          hasPlaybackMark: Ju,
          onClose: Nu,
          onMark: Vu,
          onZoom: ru,
          onCrop: Bu,
          onDeleteKeyframes: xu,
          onClearMark: Su
        } = uu;
        const pu = (0, Eu.useRef)(null),
          Tu = AQ(pu, mu.rect),
          Wu = eQ(mu.rect),
          ju = {
            startTick: mu.startTick,
            endTick: mu.endTick
          },
          Hu = mu.endTick > mu.startTick;
        return DQ(pu, Nu), (0, Xu.jsx)("div", {
          ref: pu,
          className: Qu()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (Ru = null === Tu || void 0 === Tu ? void 0 : Tu.placeBelow) && void 0 !== Ru && Ru,
            Positioned: null !== Tu
          }),
          style: {
            left: `${null!==(yu=null===Tu||void 0===Tu?void 0:Tu.left)&&void 0!==yu?yu:Wu.left}px`,
            top: `${null!==(Ku=null===Tu||void 0===Tu?void 0:Tu.top)&&void 0!==Ku?Ku:Wu.top}px`
          },
          onPointerDown: uu => {
            uu.stopPropagation()
          },
          children: (0, Xu.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, Xu.jsx)(Dy.l, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Vu(ju)
              },
              disabled: !Hu,
              children: (0, Xu.jsx)("span", {
                children: " Play range "
              })
            }), (0, Xu.jsx)(Dy.e, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                ru(ju)
              },
              children: (0, Xu.jsx)("span", {
                children: " Zoom "
              })
            }), (0, Xu.jsx)(Dy.P, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Bu(ju)
              },
              disabled: !Hu,
              children: (0, Xu.jsx)("span", {
                children: " Crop "
              })
            }), (0, Xu.jsx)(Dy.P, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                xu(ju)
              },
              children: (0, Xu.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), Ju && (0, Xu.jsx)(Dy.P, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Su()
              },
              children: (0, Xu.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      UQ = (0, Eu.memo)((function(uu) {
        var Ru, yu;
        let {
          maxTick: Ku,
          displayTick: mu,
          eD: Ju,
          cameraKeyframes: Nu,
          playbackMark: Vu,
          onSeek: ru,
          onPause: Bu,
          onScrubTickChange: xu,
          onMoveCameraKeyframe: Su,
          onUpdateCameraKeyframe: pu,
          onDeleteCameraKeyframe: Tu,
          onUseCurrentCamera: Wu,
          onMarkRange: ju,
          onCropRange: Hu,
          onDeleteKeyframesInRange: du,
          onClearMark: bu,
          zoomLevel: Cu,
          onZoomLevelChange: ku
        } = uu;
        const eu = (0, Eu.useRef)(null),
          Au = (0, Eu.useRef)(null),
          Du = (0, Eu.useRef)(!1),
          Mu = (0, Eu.useRef)(!1),
          Iu = (0, Eu.useRef)(Cu),
          Gu = (0, Eu.useRef)(null),
          Uu = (0, Eu.useRef)(null),
          nu = (0, Eu.useRef)(null),
          su = (0, Eu.useRef)(null),
          [tu, lu] = (0, Eu.useState)(null),
          [gu, cu] = (0, Eu.useState)(mu),
          [Lu, zu] = (0, Eu.useState)(null),
          [Fu, wu] = (0, Eu.useState)(null),
          [Zu, hu] = (0, Eu.useState)(null),
          [Pu, iu] = (0, Eu.useState)(null),
          Yu = (0, Eu.useMemo)((() => Nu.map((uu => uu.sr))), [Nu]),
          ou = null !== tu && void 0 !== tu ? tu : mu,
          {
            viewStart: qu,
            viewEnd: Ou
          } = (0, Eu.useMemo)((() => function(uu) {
            const Ru = uu.maxTick + 1,
              yu = Math.max(1, Math.ceil(Ru / uu.zoomLevel)),
              Eu = Math.floor(yu / 2);
            let Ku = uu.centerTick - Eu;
            return Ku = Math.max(0, Math.min(Ku, uu.maxTick - yu + 1)), {
              viewStart: Ku,
              viewEnd: Math.min(uu.maxTick, Ku + yu - 1)
            }
          }({
            maxTick: Ku,
            zoomLevel: Cu,
            centerTick: gu
          })), [Ku, Cu, gu]);
        (0, Eu.useEffect)((() => {
          if (null !== tu || null !== Uu.current || null !== nu.current || null !== su.current) return;
          if (Du.current) return void(Du.current = !1);
          if (Mu.current) return void(Mu.current = !1);
          const uu = Iu.current !== Cu;
          Iu.current = Cu, uu && cu(mu)
        }), [Cu, mu, tu]);
        const vu = (0, Eu.useCallback)((uu => {
            let Ru = EQ(uu, Ku);
            return Vu && (Ru = Math.max(Vu.inTick, Math.min(Ru, Vu.outTick))), Ru
          }), [Ku, Vu]),
          au = (0, Eu.useCallback)(((uu, Ru) => {
            const yu = vu(uu);
            ru(yu), Ru && cu(yu)
          }), [vu, ru]),
          fu = (0, Eu.useCallback)(((uu, Ru) => {
            const yu = vu(uu);
            lu(yu), xu(yu), au(yu, Ru)
          }), [vu, au, xu]),
          uR = (0, Eu.useCallback)((() => {
            lu((uu => (null !== uu && cu(uu), null))), xu(null)
          }), [xu]),
          RR = (0, Eu.useCallback)((() => {
            hu(null), iu(null)
          }), []),
          yR = (0, Eu.useCallback)((uu => {
            const Ru = eu.current;
            if (!Ru) return 0;
            return EQ(QQ(XQ(uu, Ru), qu, Ou), Ku)
          }), [Ku, Ou, qu]),
          ER = (0, Eu.useCallback)((uu => {
            const Ru = Au.current;
            if (!Ru) return 0;
            return EQ(QQ(XQ(uu, Ru), 0, Ku), Ku)
          }), [Ku]),
          KR = (0, Eu.useMemo)((() => {
            if (!Lu) return [...Yu];
            const uu = Yu.filter((uu => uu !== Lu.fromTick));
            return uu.push(Lu.previewTick), uu.sort(((uu, Ru) => uu - Ru)), uu
          }), [Yu, Lu]),
          QR = (0, Eu.useMemo)((() => {
            var uu;
            return Fu && null !== (uu = Nu.find((uu => uu.sr === Fu.sr))) && void 0 !== uu ? uu : null
          }), [Nu, Fu]),
          mR = (0, Eu.useMemo)((() => !!QR && Nu.some((uu => uu.sr > QR.sr))), [Nu, QR]);
        (0, Eu.useEffect)((() => {
          Fu && !QR && wu(null)
        }), [Fu, QR]), (0, Eu.useEffect)((() => {
          if (!Pu) return () => {};
          const uu = uu => {
            "Escape" === uu.key && RR()
          };
          return window.addEventListener("keydown", uu), () => {
            window.removeEventListener("keydown", uu)
          }
        }), [RR, Pu]);
        const JR = (0, Eu.useCallback)(((uu, Ru) => {
            RR(), Bu(), ru(uu, {
              ignorePlaybackMark: !0
            }), wu({
              sr: uu,
              rect: Ru.getBoundingClientRect()
            })
          }), [RR, Bu, ru]),
          NR = (0, Eu.useCallback)(((uu, Ru) => yu => {
            0 === yu.button && (yu.stopPropagation(), wu(null), RR(), Bu(), Gu.current = {
              fromTick: uu,
              startX: yu.clientX,
              startY: yu.clientY,
              didDrag: !1,
              track: Ru
            }, zu({
              fromTick: uu,
              previewTick: uu,
              track: Ru
            }), yu.currentTarget.setPointerCapture(yu.pointerId))
          }), [RR, Bu]),
          XR = (0, Eu.useCallback)((uu => {
            if (!Lu) return;
            uu.stopPropagation();
            const Ru = Gu.current;
            if (Ru && !Ru.didDrag) {
              const yu = uu.clientX - Ru.startX,
                Eu = uu.clientY - Ru.startY;
              Math.hypot(yu, Eu) > 5 && (Ru.didDrag = !0)
            }
            const yu = "detail" === Lu.track ? yR(uu.clientX) : ER(uu.clientX);
            yu !== Lu.previewTick && zu({
              ...Lu,
              previewTick: yu
            })
          }), [Lu, yR, ER]),
          VR = (0, Eu.useCallback)((uu => {
            if (!Lu) return;
            uu.stopPropagation();
            const Ru = Gu.current,
              yu = "detail" === Lu.track ? yR(uu.clientX) : ER(uu.clientX);
            Ru && !Ru.didDrag ? JR(Ru.fromTick, uu.currentTarget) : yu !== Lu.fromTick && Su(Lu.fromTick, yu), zu(null), Gu.current = null, uu.currentTarget.releasePointerCapture(uu.pointerId)
          }), [Lu, Su, JR, yR, ER]),
          rR = (0, Eu.useCallback)((uu => {
            if (0 !== uu.button) return;
            wu(null), Bu();
            const Ru = yR(uu.clientX);
            Uu.current = {
              pointerId: uu.pointerId,
              startX: uu.clientX,
              startY: uu.clientY,
              startTick: Ru,
              currentTick: Ru,
              didSelect: !1
            }, hu(null), iu(null), uu.currentTarget.setPointerCapture(uu.pointerId)
          }), [Bu, yR]),
          BR = (0, Eu.useCallback)((uu => {
            const Ru = Uu.current;
            if (!Ru || Ru.pointerId !== uu.pointerId) return;
            const yu = yR(uu.clientX);
            if (Ru.currentTick = yu, !Ru.didSelect) {
              const yu = uu.clientX - Ru.startX,
                Eu = uu.clientY - Ru.startY;
              if (Math.hypot(yu, Eu) <= 5) return;
              Ru.didSelect = !0
            }
            const Eu = Math.min(Ru.startTick, yu),
              Ku = Math.max(Ru.startTick, yu);
            hu({
              startTick: Eu,
              endTick: Ku
            })
          }), [yR]),
          xR = (0, Eu.useCallback)((uu => {
            const Ru = Uu.current;
            if (!Ru || Ru.pointerId !== uu.pointerId) return;
            if (Uu.current = null, uu.currentTarget.releasePointerCapture(uu.pointerId), !Ru.didSelect) return RR(), void au(Ru.startTick, !0);
            const yu = yR(uu.clientX),
              Eu = Math.min(Ru.startTick, yu),
              Ku = Math.max(Ru.startTick, yu),
              Qu = {
                startTick: Eu,
                endTick: Ku
              };
            hu(Qu);
            const mu = eu.current;
            if (!mu) return;
            const Ju = mu.getBoundingClientRect(),
              Nu = KQ(Eu, qu, Ou) / 100,
              Xu = KQ(Ku, qu, Ou) / 100,
              Vu = Ju.left + Nu * Ju.width,
              ru = Ju.left + Xu * Ju.width;
            iu({
              ...Qu,
              rect: new DOMRect(Vu, Ju.top, Math.max(ru - Vu, 1), Ju.height)
            })
          }), [RR, au, yR, Ou, qu]),
          SR = (0, Eu.useCallback)((uu => Ru => {
            if (0 !== Ru.button) return;
            Ru.stopPropagation(), wu(null), RR(), Bu(), nu.current = {
              pointerId: Ru.pointerId,
              track: uu
            }, Ru.currentTarget.setPointerCapture(Ru.pointerId);
            const yu = "detail" === uu ? yR(Ru.clientX) : ER(Ru.clientX);
            fu(yu, !1)
          }), [RR, Bu, fu, yR, ER]),
          pR = (0, Eu.useCallback)((uu => {
            const Ru = nu.current;
            if (!Ru || Ru.pointerId !== uu.pointerId) return;
            uu.stopPropagation();
            const yu = "detail" === Ru.track ? yR(uu.clientX) : ER(uu.clientX);
            fu(yu, !1)
          }), [fu, yR, ER]),
          TR = (0, Eu.useCallback)((uu => {
            const Ru = nu.current;
            Ru && Ru.pointerId === uu.pointerId && (uu.stopPropagation(), nu.current = null, uu.currentTarget.releasePointerCapture(uu.pointerId), uR())
          }), [uR]),
          WR = (0, Eu.useCallback)((uu => {
            0 === uu.button && (RR(), Bu(), su.current = {
              pointerId: uu.pointerId
            }, uu.currentTarget.setPointerCapture(uu.pointerId), fu(ER(uu.clientX), !0))
          }), [RR, Bu, fu, ER]),
          jR = (0, Eu.useCallback)((uu => {
            const Ru = su.current;
            Ru && Ru.pointerId === uu.pointerId && fu(ER(uu.clientX), !0)
          }), [fu, ER]),
          HR = (0, Eu.useCallback)((uu => {
            const Ru = su.current;
            Ru && Ru.pointerId === uu.pointerId && (su.current = null, uu.currentTarget.releasePointerCapture(uu.pointerId), uR())
          }), [uR]),
          dR = (0, Eu.useCallback)((uu => {
            const Ru = Math.max(1, uu.endTick - uu.startTick + 1),
              yu = Ku + 1,
              Eu = yu / Ru,
              Qu = Math.max(1, Math.ceil(yu / Eu)),
              mu = uu.startTick + Math.floor((Qu - 1) / 2);
            Mu.current = !0, Iu.current = Eu, cu(EQ(mu, Ku)), ku(Eu), RR()
          }), [RR, Ku, ku]),
          bR = (0, Eu.useCallback)((uu => {
            ju(uu), RR()
          }), [RR, ju]),
          CR = (0, Eu.useCallback)((uu => {
            Hu(uu), RR()
          }), [RR, Hu]),
          kR = (0, Eu.useCallback)((uu => {
            du(uu), RR()
          }), [RR, du]),
          eR = (0, Eu.useCallback)((() => {
            bu(), RR()
          }), [RR, bu]);
        (0, Eu.useEffect)((() => {
          const uu = eu.current;
          if (!uu) return () => {};
          const Ru = Ru => {
            Ru.preventDefault();
            const yu = EQ(QQ(XQ(Ru.clientX, uu), qu, Ou), Ku),
              Eu = Ru.deltaY < 0 ? "in" : "out",
              Qu = NQ(Cu, Eu);
            Qu !== Cu && (Du.current = !0, cu(yu), ku(Qu))
          };
          return uu.addEventListener("wheel", Ru, {
            passive: !1
          }), () => {
            uu.removeEventListener("wheel", Ru)
          }
        }), [Ku, ku, Ou, qu, Cu]);
        const AR = KQ(ou, qu, Ou),
          DR = VQ(ou, Ku),
          MR = VQ(qu, Ku),
          IR = Ku > 0 ? VQ(Ou, Ku) : 100,
          GR = null !== Vu,
          UR = null !== (Ru = null === Vu || void 0 === Vu ? void 0 : Vu.inTick) && void 0 !== Ru ? Ru : 0,
          nR = null !== (yu = null === Vu || void 0 === Vu ? void 0 : Vu.outTick) && void 0 !== yu ? yu : Ku,
          sR = VQ(UR, Ku),
          tR = Math.max(VQ(nR, Ku) - sR, 0),
          lR = KQ(Math.max(UR, qu), qu, Ou),
          gR = KQ(Math.min(nR, Ou), qu, Ou),
          cR = Math.max(gR - lR, 0),
          LR = GR && nR >= qu && UR <= Ou,
          zR = KQ(UR, qu, Ou),
          FR = KQ(nR, qu, Ou),
          wR = GR && UR >= qu && UR <= Ou,
          ZR = GR && nR >= qu && nR <= Ou,
          hR = VQ(UR, Ku),
          PR = VQ(nR, Ku),
          iR = null !== Zu && void 0 !== Zu ? Zu : Pu ? {
            startTick: Pu.startTick,
            endTick: Pu.endTick
          } : null,
          YR = iR ? KQ(Math.max(iR.startTick, qu), qu, Ou) : 0,
          oR = iR ? KQ(Math.min(iR.endTick, Ou), qu, Ou) : 0,
          qR = Math.max(oR - YR, 0),
          OR = null !== iR && iR.endTick >= qu && iR.startTick <= Ou,
          vR = (0, Eu.useMemo)((() => rQ(0, Ku, Ju)), [Ku, Ju]),
          aR = (0, Eu.useMemo)((() => rQ(qu, Ou, Ju)), [qu, Ou, Ju]),
          fR = (0, Eu.useMemo)((() => KR.filter((uu => uu >= qu && uu <= Ou))), [KR, Ou, qu]),
          uy = (0, Eu.useCallback)(((uu, Ru, yu) => {
            const Eu = "detail" === Ru ? KQ(uu, qu, Ou) : VQ(uu, Ku),
              mu = null !== Lu && yu === Lu.fromTick,
              Ju = null !== Fu && Fu.sr === yu;
            return (0, Xu.jsx)("button", {
              type: "button",
              className: Qu()("ReplayTimelineCameraKeyframeMarker", "detail" === Ru ? "Detail" : "Overview", {
                Dragging: mu,
                Selected: Ju
              }),
              style: {
                left: `${Eu}%`
              },
              onPointerDown: NR(yu, Ru),
              onPointerMove: XR,
              onPointerUp: VR,
              onPointerCancel: VR,
              "aria-label": `Camera keyframe at tick ${yu}`
            }, `cam-${Ru}-${yu}`)
          }), [NR, Fu, VR, Lu, Ku, XR, Ou, qu]),
          Ry = (0, Eu.useCallback)((uu => Lu && uu === Lu.previewTick ? Lu.fromTick : uu), [Lu]);
        return Ku <= 0 ? null : (0, Xu.jsxs)("div", {
          className: "ReplayTimeline",
          children: [Fu && QR && (0, RQ.createPortal)((0, Xu.jsx)(IQ, {
            keyframe: QR,
            anchor: Fu,
            hasOutgoingSegment: mR,
            onClose: () => {
              wu(null)
            },
            onApply: pu,
            onDelete: Tu,
            onUseCurrentCamera: Wu
          }), document.body), Pu && (0, RQ.createPortal)((0, Xu.jsx)(GQ, {
            anchor: Pu,
            hasPlaybackMark: GR,
            onClose: RR,
            onMark: bR,
            onZoom: dR,
            onCrop: CR,
            onDeleteKeyframes: kR,
            onClearMark: eR
          }), document.body), (0, Xu.jsxs)("div", {
            className: Qu()("ReplayTimelineOverviewSection", {
              Hidden: Cu <= 1
            }),
            children: [(0, Xu.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, Xu.jsxs)("div", {
              ref: Au,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: WR,
              onPointerMove: jR,
              onPointerUp: HR,
              onPointerCancel: HR,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": Ku,
              "aria-valuenow": ou,
              tabIndex: 0,
              children: [vR.map((uu => {
                const Ru = VQ(uu, Ku);
                return (0, Xu.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${Ru}%`
                  }
                }, uu)
              })), GR && (0, Xu.jsxs)(Xu.Fragment, {
                children: [(0, Xu.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${sR}%`,
                    width: `${tR}%`
                  }
                }), (0, Xu.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${hR}%`
                  },
                  "aria-hidden": !0
                }), (0, Xu.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${PR}%`
                  },
                  "aria-hidden": !0
                })]
              }), KR.map((uu => uy(uu, "overview", Ry(uu)))), (0, Xu.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${MR}%`,
                  width: `${Math.max(IR-MR,.5)}%`
                }
              }), (0, Xu.jsx)("button", {
                type: "button",
                className: Qu()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== tu
                }),
                style: {
                  left: `${DR}%`
                },
                onPointerDown: SR("overview"),
                onPointerMove: pR,
                onPointerUp: TR,
                onPointerCancel: TR,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, Xu.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, Xu.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, Xu.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, Xu.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [mQ(qu, Ju), " \u2013 ", mQ(Ou, Ju), Cu > 1 && (0, Xu.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: JQ(Cu)
                })]
              })]
            }), (0, Xu.jsxs)("div", {
              ref: eu,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: rR,
              onPointerMove: BR,
              onPointerUp: xR,
              onPointerCancel: xR,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": qu,
              "aria-valuemax": Ou,
              "aria-valuenow": ou,
              tabIndex: 0,
              children: [aR.map((uu => {
                const Ru = KQ(uu, qu, Ou);
                return (0, Xu.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${Ru}%`
                  }
                }, uu)
              })), LR && (0, Xu.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${lR}%`,
                  width: `${cR}%`
                }
              }), wR && (0, Xu.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${zR}%`
                },
                "aria-label": `Play range start at tick ${UR}`
              }), ZR && (0, Xu.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${FR}%`
                },
                "aria-label": `Play range end at tick ${nR}`
              }), OR && iR && (0, Xu.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${YR}%`,
                  width: `${qR}%`
                }
              }), fR.map((uu => uy(uu, "detail", Ry(uu)))), (0, Xu.jsx)("button", {
                type: "button",
                className: Qu()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== tu
                }),
                style: {
                  left: `${AR}%`
                },
                onPointerDown: SR("detail"),
                onPointerMove: pR,
                onPointerUp: TR,
                onPointerCancel: TR,
                "aria-label": "Scrub playhead"
              })]
            }), (0, Xu.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, Xu.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      nQ = (0, Eu.memo)((function(uu) {
        let {
          enabled: Ru
        } = uu;
        const yu = (0, Eu.useRef)(!1),
          Ku = (0, Eu.useRef)(null),
          [mu, Ju] = (0, Eu.useState)(!1),
          Nu = (0, Eu.useCallback)((uu => {
            Ru && 0 === uu.button && (yu.current = !0, Ju(!0), Ku.current = {
              x: uu.clientX,
              y: uu.clientY
            }, uu.currentTarget.setPointerCapture(uu.pointerId))
          }), [Ru]),
          Vu = (0, Eu.useCallback)((uu => {
            if (!Ru || !yu.current || !Ku.current) return;
            const Eu = uu.clientX - Ku.current.x,
              Qu = uu.clientY - Ku.current.y;
            Ku.current = {
              x: uu.clientX,
              y: uu.clientY
            }, Bu.gameBridge.send("dragReplayCamera", {
              dx: Eu,
              dy: Qu
            })
          }), [Ru]),
          ru = (0, Eu.useCallback)((uu => {
            yu.current && (yu.current = !1, Ju(!1), Ku.current = null, uu.currentTarget.releasePointerCapture(uu.pointerId))
          }), []);
        return Ru ? (0, Xu.jsx)("div", {
          className: Qu()("ReplayViewerCameraDragSurface", {
            Dragging: mu
          }),
          onPointerDown: Nu,
          onPointerMove: Vu,
          onPointerUp: ru,
          onPointerCancel: ru,
          "aria-hidden": !0
        }) : null
      }));
    var sQ = yu(36760),
      tQ = yu(36762);
    const lQ = (0, Eu.memo)((function(uu) {
        var Ru, yu, Ku;
        let {
          anchorRect: mu,
          anchorRef: Nu,
          onClose: Vu
        } = uu;
        const ru = (0, Eu.useRef)(null),
          Bu = AQ(ru, mu),
          [xu, Su] = (0, Eu.useState)(tQ.c),
          pu = (0, Eu.useMemo)((() => Object.values(xu).every((uu => uu))), [xu]);
        (0, Ju.e)("replayViewer|uiVisibilityChanged", (() => {
          Su((0, tQ.c)())
        })), DQ(ru, Vu, Nu);
        const Tu = (0, Eu.useCallback)(((uu, Ru) => {
            (0, tQ.j)(uu, Ru), Su((0, tQ.c)())
          }), []),
          Wu = (0, Eu.useCallback)((uu => {
            for (const {
                group: Ru
              }
              of sQ.e)(0, tQ.j)(Ru, uu);
            Su((0, tQ.c)())
          }), []),
          ju = eQ(mu);
        return (0, RQ.createPortal)((0, Xu.jsxs)("div", {
          ref: ru,
          className: Qu()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (Ru = null === Bu || void 0 === Bu ? void 0 : Bu.placeBelow) && void 0 !== Ru && Ru,
            Positioned: null !== Bu
          }),
          style: {
            left: `${null!==(yu=null===Bu||void 0===Bu?void 0:Bu.left)&&void 0!==yu?yu:ju.left}px`,
            top: `${null!==(Ku=null===Bu||void 0===Bu?void 0:Bu.top)&&void 0!==Ku?Ku:ju.top}px`
          },
          onPointerDown: uu => {
            uu.stopPropagation()
          },
          children: [(0, Xu.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, Xu.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, Xu.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, Xu.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, Xu.jsx)("input", {
                type: "checkbox",
                checked: pu,
                onChange: uu => {
                  Wu(uu.target.checked)
                }
              }), (0, Xu.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), sQ.e.map((uu => {
              let {
                group: Ru,
                label: yu
              } = uu;
              return (0, Xu.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, Xu.jsx)("input", {
                  type: "checkbox",
                  checked: xu[Ru],
                  onChange: uu => {
                    Tu(Ru, uu.target.checked)
                  }
                }), (0, Xu.jsx)("span", {
                  children: yu
                })]
              }, Ru)
            }))]
          })]
        }), document.body)
      })),
      gQ = (0, Eu.memo)((function(uu) {
        let {
          disabled: Ru
        } = uu;
        const yu = (0, Eu.useRef)(null),
          [Ku, Qu] = (0, Eu.useState)(!1),
          [mu, Ju] = (0, Eu.useState)(null),
          Nu = (0, Eu.useCallback)((() => {
            yu.current && (Ju(yu.current.getBoundingClientRect()), Qu((uu => !uu)))
          }), []),
          Vu = (0, Eu.useCallback)((() => {
            Qu(!1)
          }), []);
        return (0, Xu.jsxs)(Xu.Fragment, {
          children: [(0, Xu.jsx)("div", {
            ref: yu,
            children: (0, Xu.jsx)(Dy.e, {
              className: "ReplayViewerActionButton",
              onClick: Nu,
              disabled: Ru,
              children: (0, Xu.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), Ku && mu && (0, Xu.jsx)(lQ, {
            anchorRect: mu,
            anchorRef: yu,
            onClose: Vu
          })]
        })
      })),
      cQ = ["freeCamUp", "freeCamDown"];

    function LQ(uu, Ru) {
      Bu.gameBridge.send("holdReplayFreecamVertical", {
        action: uu,
        jJ: Ru
      })
    }
    const zQ = (0, Eu.memo)((function() {
        (0, Eu.useEffect)((() => () => {
          ! function() {
            Bu.gameBridge.send("moveReplayFreecam", null);
            for (const uu of cQ) LQ(uu, !1)
          }()
        }), []);
        const uu = (0, Eu.useCallback)((uu => {
            Bu.gameBridge.send("moveReplayFreecam", uu)
          }), []),
          Ru = (0, Eu.useCallback)((uu => ({
            onTouchStart: Ru => {
              Ru.preventDefault(), Ru.stopPropagation(), LQ(uu, !0)
            },
            onTouchEnd: Ru => {
              Ru.preventDefault(), Ru.stopPropagation(), LQ(uu, !1)
            },
            onTouchCancel: Ru => {
              Ru.preventDefault(), Ru.stopPropagation(), LQ(uu, !1)
            }
          })), []);
        return (0, Xu.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, Xu.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, Xu.jsx)(eR, {
              onMove: uu,
              mode: "pinned"
            })
          }), (0, Xu.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, Xu.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...Ru("freeCamUp"),
              children: (0, Xu.jsx)(cu.c, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, Xu.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...Ru("freeCamDown"),
              children: (0, Xu.jsx)(cu.c, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      FQ = [],
      wQ = (0, Eu.memo)((function() {
        const uu = (0, ou.i)();
        return (0, ku.d)("replayViewerRequested", (uu => {
          (0, ou.g)("toggle" === uu ? !(0, ou.f)() : "open" === uu)
        })), uu ? (0, Xu.jsx)(ZQ, {}) : null
      })),
      ZQ = (0, Eu.memo)((function() {
        var uu, Ru, yu, Ku, mu, Ju, Nu, Vu, ru, xu, Su, pu;
        const Tu = Eu.useRef(null),
          [Wu, ju] = (0, Eu.useState)(null),
          [Hu, du] = (0, Eu.useState)(1),
          [bu, Cu] = (0, Eu.useState)(null),
          [Du, Mu] = (0, Eu.useState)(!1),
          {
            isTouchScreen: Iu
          } = (0, eu.j)(["isTouchScreen"]),
          Gu = (0, ku.i)("replay"),
          Uu = (0, ku.i)("replayEdits"),
          nu = null !== Gu,
          su = null !== (uu = null === Gu || void 0 === Gu ? void 0 : Gu.sr) && void 0 !== uu ? uu : 0,
          tu = null !== (Ru = null === Gu || void 0 === Gu ? void 0 : Gu.totalTicks) && void 0 !== Ru ? Ru : 0,
          lu = Math.max(0, tu - 1),
          Lu = null !== (yu = null === Gu || void 0 === Gu ? void 0 : Gu.playing) && void 0 !== yu && yu,
          zu = null !== (Ku = null === Gu || void 0 === Gu ? void 0 : Gu.speed) && void 0 !== Ku ? Ku : 1,
          Fu = null !== (mu = null === Gu || void 0 === Gu ? void 0 : Gu.eD) && void 0 !== mu ? mu : 20,
          wu = null !== bu && void 0 !== bu ? bu : su,
          Zu = null !== (Ju = null === Gu || void 0 === Gu ? void 0 : Gu.freecam) && void 0 !== Ju && Ju,
          hu = null !== (Nu = null === Gu || void 0 === Gu ? void 0 : Gu.cameraMode) && void 0 !== Nu ? Nu : "recording",
          Pu = null !== (Vu = null === Uu || void 0 === Uu ? void 0 : Uu.cameraKeyframes) && void 0 !== Vu ? Vu : FQ,
          iu = null !== (ru = null === Uu || void 0 === Uu ? void 0 : Uu.playbackMark) && void 0 !== ru ? ru : null,
          Yu = null !== (xu = null === Uu || void 0 === Uu ? void 0 : Uu.fileName) && void 0 !== xu ? xu : null,
          qu = null !== (Su = null === Uu || void 0 === Uu ? void 0 : Uu.unsavedChanges) && void 0 !== Su && Su,
          Ou = null !== (pu = null === Uu || void 0 === Uu ? void 0 : Uu.suggestSaveAs) && void 0 !== pu && pu,
          vu = (0, ku.i)("replayVideoExporting"),
          au = !vu && nu && ("freecam" === hu || ("recording" === hu || "keyframe" === hu) && !Lu),
          fu = Iu && nu && "freecam" === hu && !vu && !Du;
        (0, uQ.c)(!0, !0, "ReplayViewerOverlay"), (0, Eu.useEffect)((() => {
          Bu.gameBridge.send("syncReplayCameraMode", null)
        }), [Zu]);
        const uR = (0, Eu.useCallback)(((uu, Ru) => {
            Bu.gameBridge.send("seekReplay", {
              sr: uu,
              ignorePlaybackMark: null === Ru || void 0 === Ru ? void 0 : Ru.ignorePlaybackMark
            })
          }), []),
          RR = (0, Eu.useCallback)((() => {
            Bu.gameBridge.send("setReplayPlaying", !1)
          }), []),
          yR = (0, Eu.useCallback)(((uu, Ru) => {
            Bu.gameBridge.send("moveReplayCameraKeyframe", {
              from: uu,
              to: Ru
            })
          }), []),
          ER = (0, Eu.useCallback)((uu => {
            Bu.gameBridge.send("setReplayCameraKeyframe", uu)
          }), []),
          KR = (0, Eu.useCallback)((uu => {
            Bu.gameBridge.send("deleteReplayCameraKeyframes", {
              start: uu,
              end: uu
            })
          }), []),
          QR = (0, Eu.useCallback)((uu => {
            Bu.gameBridge.send("deleteReplayCameraKeyframes", {
              start: uu.startTick,
              end: uu.endTick
            })
          }), []),
          mR = (0, Eu.useCallback)((() => Bu.gameBridge.lookup("replayCamera", null)), []),
          JR = (0, Eu.useCallback)((uu => {
            Cu(uu)
          }), []),
          NR = (0, Eu.useCallback)((uu => {
            Bu.gameBridge.send("setReplayPlaybackMark", {
              inTick: uu.startTick,
              outTick: uu.endTick
            })
          }), []),
          XR = (0, Eu.useCallback)((() => {
            Bu.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          VR = (0, Eu.useCallback)((uu => {
            const Ru = Bu.gameBridge.latest("replay");
            if (null === Ru || uu.endTick <= uu.startTick) return;
            const yu = uu.startTick,
              Eu = uu.endTick;
            OE.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((uu => {
              var Ku;
              if (!0 !== uu) return;
              if ((null === (Ku = Bu.gameBridge.latest("replay")) || void 0 === Ku ? void 0 : Ku.id) !== Ru.id) return;
              Bu.gameBridge.send("cropReplay", {
                start: yu,
                end: Eu
              }) && (Cu(null), du(1))
            }))
          }), []),
          rR = (0, Eu.useCallback)(((uu, Ru) => {
            ju(null), du(1), Cu(null), (0, PK.b)().open(uu, Ru).catch((uu => {
              console.error(uu), ju(uu instanceof Error ? uu.message : "Failed to parse recording")
            }))
          }), []),
          BR = (0, Eu.useCallback)(((uu, Ru) => {
            null !== Bu.gameBridge.latest("connectedGame").websocketUrl ? OE.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((yu => {
              !0 === yu && rR(uu, Ru)
            })) : rR(uu, Ru)
          }), [rR]),
          xR = (0, Eu.useCallback)((uu => {
            var Ru;
            const yu = null === (Ru = uu.target.files) || void 0 === Ru ? void 0 : Ru[0];
            if (uu.target.value = "", !yu) return;
            const Eu = new FileReader;
            Eu.onload = () => {
              BR(new Uint8Array(Eu.result), {
                fileName: yu.name
              })
            }, Eu.onerror = () => {
              ju("Failed to read file")
            }, Eu.readAsArrayBuffer(yu)
          }), [BR]),
          SR = (0, Eu.useCallback)((() => {
            const uu = () => {
              var uu;
              null === (uu = Tu.current) || void 0 === uu || uu.click()
            };
            (0, oK.l)() ? (0, oK.h)().then((uu => {
              uu && BR(uu.bytes, {
                fileHandle: uu.handle
              })
            })).catch((Ru => {
              console.error(Ru), uu()
            })): uu()
          }), [BR]),
          pR = (0, Eu.useCallback)((async function() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let Ru;
            try {
              Ru = await fK(uu, {
                files: (0, PK.b)(),
                pickerSupported: oK.l,
                chooseFile: oK.d,
                write: oK.o,
                download: YK.i,
                onFallback: console.error
              })
            } catch (yu) {
              return void(uu => {
                console.error(uu), OE.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: OK(uu),
                  confirmText: "OK"
                })
              })(yu)
            }
            "written" !== Ru && "downloaded" !== Ru || (() => {
              const uu = OE.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                uu.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          TR = (0, Eu.useCallback)((uu => {
            Bu.gameBridge.send("replayAction", uu)
          }), []),
          WR = (0, Eu.useCallback)((uu => {
            du((Ru => NQ(Ru, uu)))
          }), []),
          jR = (0, Eu.useCallback)((uu => {
            if (!Bu.gameBridge.latest("replayVideoExporting")) switch (uu) {
              case "replayLoad":
                SR();
                break;
              case "replaySave":
                pR(!1);
                break;
              case "replaySaveAs":
                pR(!0);
                break;
              case "replayTimelineZoomIn":
                WR("in");
                break;
              case "replayTimelineZoomOut":
                WR("out")
            }
          }), [SR, pR, WR]);
        (0, ku.d)("replayUiActionRequested", jR);
        const HR = (0, Eu.useCallback)((uu => {
            Bu.gameBridge.send("setReplayCameraMode", uu)
          }), []),
          dR = nu ? Dy.e : Dy.l,
          bR = qu && !Ou ? Dy.l : Dy.e,
          CR = qu && Ou ? Dy.l : Dy.e;
        return (0, Xu.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, Xu.jsx)(nQ, {
            enabled: au
          }), fu && (0, Xu.jsx)(zQ, {}), (0, Xu.jsx)("input", {
            ref: Tu,
            type: "file",
            accept: YK.e,
            className: "ReplayViewerFileInput",
            onChange: xR
          }), (0, Xu.jsxs)("div", {
            className: Qu()("ReplayViewerBar", {
              Collapsed: Du
            }),
            children: [(0, Xu.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                Du ? Mu(!1) : nu ? Mu(!0) : (0, ou.d)()
              },
              "aria-expanded": !Du,
              "aria-label": Du ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, Xu.jsx)(cu.c, {
                name: Du ? "angle-up" : "angle-down"
              })
            }), !Du && (0, Xu.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [nu && tu > 0 && (0, Xu.jsx)(UQ, {
                maxTick: lu,
                displayTick: wu,
                eD: Fu,
                cameraKeyframes: Pu,
                playbackMark: iu,
                onSeek: uR,
                onPause: RR,
                onScrubTickChange: JR,
                onMoveCameraKeyframe: yR,
                onUpdateCameraKeyframe: ER,
                onDeleteCameraKeyframe: KR,
                onUseCurrentCamera: mR,
                onMarkRange: NR,
                onCropRange: VR,
                onDeleteKeyframesInRange: QR,
                onClearMark: XR,
                zoomLevel: Hu,
                onZoomLevelChange: du
              }, lu), (0, Xu.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, Xu.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, Xu.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [nu && (0, Xu.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== Yu && void 0 !== Yu ? Yu : "Unsaved recording", qu ? " *" : ""]
                    }), (0, Xu.jsxs)(dR, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        jR("replayLoad")
                      },
                      children: [(0, Xu.jsx)(Au.b, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, Xu.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, Xu.jsxs)(Dy.e, {
                      className: "ReplayViewerActionButton",
                      onClick: ou.d,
                      children: [(0, Xu.jsx)(Au.b, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, Xu.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, Xu.jsxs)(bR, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        jR("replaySave")
                      },
                      disabled: !nu,
                      children: [(0, Xu.jsx)(Au.b, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, Xu.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, Xu.jsxs)(Dy.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Bu.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !nu,
                      children: [(0, Xu.jsx)(Au.b, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, Xu.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, Xu.jsxs)(CR, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        jR("replaySaveAs")
                      },
                      disabled: !nu,
                      children: [(0, Xu.jsx)(Au.b, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, Xu.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, Xu.jsxs)(Dy.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Bu.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !nu || 0 === tu || vu,
                      children: [(0, Xu.jsx)(Au.b, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, Xu.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, Xu.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Xu.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, Xu.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, Xu.jsx)(Au.b, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, Xu.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, Xu.jsx)(gu.i, {
                        tooltipInner: (0, Xu.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, Xu.jsxs)(Dy.P, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === hu,
                          onClick: () => {
                            HR("recording")
                          },
                          disabled: !nu,
                          children: ["Recorded ", (0, Xu.jsx)(cu.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Xu.jsx)(gu.i, {
                        tooltipInner: (0, Xu.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, Xu.jsxs)(Dy.P, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === hu,
                          onClick: () => {
                            HR("freecam")
                          },
                          disabled: !nu,
                          children: ["Free ", (0, Xu.jsx)(cu.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Xu.jsx)(gu.i, {
                        tooltipInner: (0, Xu.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, Xu.jsxs)(Dy.P, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === hu,
                          onClick: () => {
                            HR("keyframe")
                          },
                          disabled: !nu,
                          children: ["Preview ", (0, Xu.jsx)(cu.c, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, Xu.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, Xu.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, Xu.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, Xu.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: mQ(wu, Fu)
                      }), (0, Xu.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, Xu.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: mQ(lu, Fu)
                      })]
                    }), (0, Xu.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", wu, " / ", lu]
                    })]
                  }), (0, Xu.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, Xu.jsxs)(Dy.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        TR("replaySkipBack")
                      },
                      disabled: !nu,
                      children: [(0, Xu.jsxs)("span", {
                        children: [" ", (0, Xu.jsx)(cu.c, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, Xu.jsx)(Au.b, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, Xu.jsxs)(Dy.l, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        Bu.gameBridge.send("setReplayPlaying", !Lu)
                      },
                      disabled: !nu,
                      children: [(0, Xu.jsxs)("span", {
                        children: [" ", Lu ? (0, Xu.jsx)(cu.c, {
                          name: "pause"
                        }) : (0, Xu.jsx)(cu.c, {
                          name: "play"
                        }), " "]
                      }), (0, Xu.jsx)(Au.b, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, Xu.jsxs)(Dy.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        TR("replaySkipForward")
                      },
                      disabled: !nu,
                      children: [(0, Xu.jsxs)("span", {
                        children: [" ", (0, Xu.jsx)(cu.c, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, Xu.jsx)(Au.b, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, Xu.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, Xu.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, Xu.jsxs)(Dy.l, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        TR("replayRecordKeyframe")
                      },
                      disabled: !nu,
                      children: [(0, Xu.jsx)(Au.b, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, Xu.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, Xu.jsx)(gQ, {
                      disabled: !nu
                    }), iu && (0, Xu.jsx)(Dy.P, {
                      className: "ReplayViewerActionButton",
                      onClick: XR,
                      disabled: !nu,
                      children: (0, Xu.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, Xu.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Xu.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, Xu.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Xu.jsx)(Dy.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          TR("replaySpeedDown")
                        },
                        disabled: !nu || (0, iK.h)(zu),
                        children: (0, Xu.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, Xu.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [zu, "\xd7"]
                      }), (0, Xu.jsx)(Dy.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          TR("replaySpeedUp")
                        },
                        disabled: !nu || (0, iK.e)(zu),
                        children: (0, Xu.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, Xu.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Xu.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, Xu.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Xu.jsxs)(Dy.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          jR("replayTimelineZoomOut")
                        },
                        disabled: !nu || Hu <= yQ[0],
                        children: [(0, Xu.jsx)("span", {
                          children: " \u2212 "
                        }), (0, Xu.jsx)(Au.b, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, Xu.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: JQ(Hu)
                      }), (0, Xu.jsxs)(Dy.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          jR("replayTimelineZoomIn")
                        },
                        disabled: !nu || Hu >= yQ[yQ.length - 1],
                        children: [(0, Xu.jsx)("span", {
                          children: " + "
                        }), (0, Xu.jsx)(Au.b, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, Xu.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !nu && "Load a recording to begin playback"
              }), Wu && (0, Xu.jsx)("div", {
                className: "ReplayViewerError",
                children: Wu
              })]
            })]
          })]
        })
      }));
    var hQ = yu(1280);

    function PQ() {
      const [, uu] = (0, Eu.useState)(0);
      return (0, Ju.e)("replayViewer|uiVisibilityChanged", (() => {
          uu((uu => uu + 1))
        })), (0, Ju.e)("replayViewer|replayLoaded", (() => {
          uu((uu => uu + 1))
        })),
        function() {
          if (!(0, hQ.e)()) return {};
          const uu = {
              [sQ.d]: "true"
            },
            Ru = (0, tQ.c)();
          for (const {
              group: yu,
              dataAttr: Eu
            }
            of sQ.e) Eu && !Ru[yu] && (uu[Eu] = "true");
          return uu
        }()
    }
    var iQ = yu(9045),
      YQ = yu(1983),
      oQ = yu(8470),
      qQ = yu(8456),
      OQ = yu(1992);
    const vQ = (0, Eu.memo)((function() {
      var uu, Ru, yu;
      const Ku = (0, Hu.g)("customButtons");
      (0, Eu.useEffect)((() => Ku ? (Bu.gameBridge.send("bindCustomButtonKeys", Ku.filter(oQ.h).map((uu => {
        let {
          id: Ru,
          keycode: yu
        } = uu;
        return {
          id: Ru,
          keycode: yu
        }
      }))), () => {
        Bu.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [Ku]);
      const Qu = null !== (uu = null === Ku || void 0 === Ku ? void 0 : Ku.filter(oQ.h)) && void 0 !== uu ? uu : [],
        mu = (0, qQ.j)(),
        Ju = null !== (Ru = null === (yu = (0, OQ.e)()) || void 0 === yu ? void 0 : yu.hideButtonHints) && void 0 !== Ru && Ru,
        Nu = "customButton" !== (null === mu || void 0 === mu ? void 0 : mu.kind) || Ju ? null : mu.id,
        Vu = Qu.length > 0,
        ru = (0, Eu.useRef)(null);
      return (0, Eu.useLayoutEffect)((() => {
        if (!Vu) return () => {};
        const uu = ru.current,
          Ru = uu.closest(".InGameUi"),
          yu = () => {
            Ru.style.setProperty("--custom-buttons-top", `${uu.offsetTop}px`)
          };
        yu();
        const Eu = new ResizeObserver(yu);
        return Eu.observe(uu), Eu.observe(uu.parentElement), () => {
          Eu.disconnect(), Ru.style.removeProperty("--custom-buttons-top")
        }
      }), [Vu]), (0, Xu.jsx)("div", {
        ref: ru,
        className: "" + ((0, xK.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: Qu.map((uu => {
          var Ru, yu;
          return (0, Xu.jsx)(aQ, {
            button: uu,
            padGlyph: uu.id === Nu && null !== (Ru = null === (yu = (0, wu.f)()) || void 0 === yu ? void 0 : yu.getBoundButton("actionButton")) && void 0 !== Ru ? Ru : null
          }, uu.id)
        }))
      })
    }));

    function aQ(uu) {
      let {
        button: Ru,
        padGlyph: yu
      } = uu;
      const Ku = (0, Eu.useRef)(null),
        Qu = () => {
          null !== Ku.current && (Ku.current = null, Bu.gameBridge.send("pressCustomButton", {
            id: Ru.id,
            down: !1
          }))
        };
      (0, Eu.useEffect)((() => Qu), []);
      const mu = PR(Qu, {
          pressesOnPointerDown: !0
        }),
        Ju = uu => {
          Ku.current === uu.pointerId && Qu()
        };
      return (0, Xu.jsxs)("div", {
        className: "CustomIcon",
        ...mu,
        onLostPointerCapture: Ju,
        children: [(0, Xu.jsx)(YQ.c, {
          icon: Ru.icon,
          keyboardHint: (0, oQ.e)(Ru.keycode),
          padGlyph: yu,
          onPointerDown: uu => {
            try {
              uu.currentTarget.setPointerCapture(uu.pointerId)
            } catch {
              return
            }
            null === Ku.current && Bu.gameBridge.send("pressCustomButton", {
              id: Ru.id,
              down: !0
            }), Ku.current = uu.pointerId
          },
          onPointerUp: Ju,
          onPointerCancel: Ju,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), Ru.description && (0, Xu.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: Ru.description
        })]
      })
    }
    var fQ = yu(2328),
      um = yu(281);
    const Rm = {
      frame: uu => {
        const Ru = requestAnimationFrame((() => {
          uu()
        }));
        return () => {
          cancelAnimationFrame(Ru)
        }
      },
      afterFrame: uu => {
        const Ru = setTimeout(uu, 0);
        return () => {
          clearTimeout(Ru)
        }
      }
    };
    class ym {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : um.c,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rm;
        this.idle = uu, this.frames = Ru, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (uu(), () => {}) : (Ru ? this.waiting.unshift(uu) : this.waiting.push(uu), this.schedule(), () => {
          const Ru = this.waiting.indexOf(uu);
          Ru >= 0 && (this.waiting.splice(Ru, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((uu => {
          for (this.cancelIdle = null; this.waiting.length > 0 && uu.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const uu = this.waiting.shift();
        try {
          uu()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var uu, Ru, yu;
        null === (uu = this.cancelIdle) || void 0 === uu || uu.call(this), this.cancelIdle = null, null === (Ru = this.cancelFrame) || void 0 === Ru || Ru.call(this), this.cancelFrame = null, null === (yu = this.cancelAfterFrame) || void 0 === yu || yu.call(this), this.cancelAfterFrame = null
      }
    }
    const Em = (0, Eu.createContext)(null);

    function Km(uu) {
      let {
        children: Ru,
        first: yu = !1
      } = uu;
      const Ku = (0, Eu.useContext)(Em),
        [Qu, mu] = (0, Eu.useState)(null === Ku);
      return (0, Eu.useEffect)((() => {
        if (!Qu && null !== Ku) return Ku.request((() => {
          mu(!0)
        }), yu)
      }), [yu, Qu, Ku]), Qu ? (0, Eu.createElement)(Eu.Fragment, null, Ru) : null
    }
    const Qm = (0, Eu.memo)((function(uu) {
        let {
          shown: Ru
        } = uu;
        const [yu] = (0, Eu.useState)((() => new Su.f(Ru))), [Ku] = (0, Eu.useState)((() => Ru ? null : new ym));
        return (0, Eu.useLayoutEffect)((() => {
          Ru && (null === Ku || void 0 === Ku || Ku.show(), yu.show())
        }), [Ru, yu, Ku]), (0, Xu.jsx)(Su.d.Provider, {
          value: yu,
          children: (0, Xu.jsx)(Em.Provider, {
            value: Ku,
            children: (0, Xu.jsx)(mm, {})
          })
        })
      })),
      mm = (0, Eu.memo)((function() {
        const {
          isUiHidden: uu,
          isUiHiddenByCamera: Ru,
          worldPanelHud: yu,
          isTouchScreen: Ku
        } = (0, eu.j)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), mu = (0, oE.c)(), Ju = PQ(), Nu = (0, Su.k)(), Vu = (0, Eu.useRef)(null), ru = (0, Hu.g)("showKillfeed");
        return function() {
            const uu = (0, Su.k)();
            (0, Eu.useEffect)((() => uu.whenShown(pu)), [uu])
          }(),
          function() {
            const uu = (0, Hu.g)("inventoryColourOverride");
            (0, Eu.useEffect)((() => {
              if (!uu) return;
              const {
                panel: Ru,
                slot: yu,
                slotSelected: Eu,
                slotUnavailable: Ku
              } = hu(uu), Qu = document.documentElement.style;
              return Qu.setProperty("--InventoryPanelColour", Ru), Qu.setProperty("--InventorySlotColour", yu), Qu.setProperty("--InventorySlotSelectedColour", Eu), Qu.setProperty("--InventorySlotUnavailableColour", Ku), () => {
                Qu.removeProperty("--InventoryPanelColour"), Qu.removeProperty("--InventorySlotColour"), Qu.removeProperty("--InventorySlotSelectedColour"), Qu.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [uu])
          }(), (0, Eu.useLayoutEffect)((() => Nu.whenShown((() => {
            var uu;
            null === (uu = Vu.current) || void 0 === uu || uu.classList.remove("PreMounted")
          }))), [Nu]), (0, Xu.jsxs)(Xu.Fragment, {
            children: [(0, Xu.jsxs)("div", {
              ref: Vu,
              className: Qu()("InGameUi", {
                PreMounted: !Nu.shown,
                Hidden: uu,
                HiddenByCamera: Ru,
                HiddenByWorldPanel: null !== yu,
                WorldPanelTouchControl: "touchControls" === yu
              }),
              ...Ju,
              children: [(0, Xu.jsxs)(Km, {
                children: [(0, Xu.jsx)(Zy.e, {}), (0, Xu.jsx)(oy, {})]
              }), (0, Xu.jsx)(Su.h, {
                children: (0, Xu.jsx)(qy, {})
              }), (0, Xu.jsxs)(Km, {
                children: [(0, Xu.jsx)(bK, {}), (0, Xu.jsx)(IK, {}), Ku && (0, Xu.jsx)(UK, {})]
              }), (0, Xu.jsxs)(Km, {
                children: [(0, Xu.jsx)(Wy, {}), (0, Xu.jsx)(NE.e, {}), (0, Xu.jsx)(pE, {})]
              }), (0, Xu.jsx)(Su.h, {
                children: (0, Xu.jsx)(wy, {})
              }), (0, Xu.jsxs)(Km, {
                children: [(0, Xu.jsx)(AK.d, {}), (0, Xu.jsx)(wQ, {})]
              }), (0, Xu.jsxs)(Km, {
                children: [(0, Xu.jsx)(sK.c, {}), (0, Xu.jsx)(tK.e, {})]
              }), (0, Xu.jsx)(Km, {
                children: (0, Xu.jsx)(Hy.h, {})
              }), (0, Xu.jsx)(Km, {
                children: (0, Xu.jsx)(xm, {
                  showChat: mu
                })
              }), (0, Xu.jsxs)(Km, {
                children: [(0, Xu.jsx)(gK, {}), (0, Xu.jsx)(eK, {})]
              }), (0, Xu.jsxs)("div", {
                className: Qu()("RightElements", {
                  RightElementsTouchscreen: Ku
                }),
                "data-camera-keeper-host": "",
                children: [(0, Xu.jsxs)("div", {
                  className: CE.d,
                  "data-holds-camera-keeper": "",
                  children: [(0, Xu.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, Xu.jsx)(Km, {
                      children: (0, Xu.jsx)(XK.c, {})
                    }), (0, Xu.jsxs)(Km, {
                      children: [(0, Xu.jsx)(Lu, {}), (0, Xu.jsx)(ME.c, {})]
                    }), xK.featureFlags.useSocialFeatures && (0, Xu.jsx)(Su.h, {
                      children: (0, Xu.jsx)(IE.c, {
                        placement: "inGame"
                      })
                    }), xK.featureFlags.useSocialFeatures && (0, Xu.jsx)(Su.h, {
                      children: (0, Xu.jsx)(ZE, {})
                    }), ru && (0, Xu.jsx)(Su.h, {
                      children: (0, Xu.jsx)(JE, {})
                    }), (0, Xu.jsx)(Km, {
                      children: (0, Xu.jsx)(iQ.c, {})
                    })]
                  }), xK.featureFlags.useSocialFeatures && (0, Xu.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, Xu.jsx)(Km, {
                      children: (0, Xu.jsx)(HK.b, {})
                    })
                  })]
                }), (0, Xu.jsxs)(Km, {
                  children: [(0, Xu.jsx)(Hy.c, {
                    placement: "topRight"
                  }), (0, Xu.jsx)(Sm, {})]
                })]
              }), (0, Xu.jsx)("div", {
                className: "LeftCentre",
                children: (0, Xu.jsx)(Km, {
                  children: (0, Xu.jsx)(vQ, {})
                })
              }), (0, Xu.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": Ku ? "" : void 0,
                children: [(0, Xu.jsx)(Su.h, {
                  children: (0, Xu.jsx)(Uu, {})
                }), (0, Xu.jsx)(Km, {
                  children: (0, Xu.jsx)(Nm, {})
                }), (0, Xu.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": Ku ? "" : void 0,
                  children: [(0, Xu.jsx)("div", {
                    className: Qu()("BottomLeftElements", {
                      Touch: Ku
                    }),
                    children: (0, Xu.jsxs)(Km, {
                      children: [(0, Xu.jsx)(iE, {}), !Ku && (0, Xu.jsx)(fQ.c, {})]
                    })
                  }), (0, Xu.jsx)(Km, {
                    children: (0, Xu.jsx)(Bm, {})
                  }), (0, Xu.jsx)(Km, {
                    children: (0, Xu.jsx)(WE, {
                      isTouchScreen: Ku
                    })
                  })]
                })]
              }), (0, Xu.jsx)("div", {
                className: "MiddleLeft"
              }), Ku && (0, Xu.jsx)(Km, {
                children: (0, Xu.jsx)(fR, {})
              }), (0, Xu.jsx)("div", {
                className: "CameraFadeHost",
                ref: HR.k
              })]
            }), (0, Xu.jsx)(Su.h, {
              children: (0, Xu.jsx)(hK.e, {})
            }), (0, Xu.jsx)(Km, {
              first: !0,
              children: (0, Xu.jsx)(YE.b, {})
            }), (0, Xu.jsx)(Su.h, {
              children: (0, Xu.jsx)(Jm, {})
            })]
          })
      }));

    function Jm() {
      return (0, Eu.useEffect)((() => {
        const uu = setTimeout((() => {
          (0, du.i)()
        }), 0);
        return () => {
          clearTimeout(uu), du.k.EW(!1)
        }
      }), []), null
    }
    const Nm = (0, Eu.memo)((function() {
        const uu = (0, Ju.h)("aimingOverlay", "none");
        (0, Wu.d)();
        const Ru = (0, Hu.j)("middleTextUpper"),
          yu = (0, Hu.j)("middleTextLower");
        return (0, Xu.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === uu ? {
            visibility: "hidden"
          } : {},
          children: [(0, Xu.jsx)(rm, {
            text: Ru,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: Xm
          }), (0, Xu.jsx)(rm, {
            text: yu,
            className: "MiddleText",
            maxHeightFraction: Vm
          })]
        })
      })),
      Xm = .3,
      Vm = .2;

    function rm(uu) {
      let {
        text: Ru,
        className: yu,
        maxHeightFraction: Ku
      } = uu;
      const Qu = (0, Eu.useRef)(null),
        mu = (0, Eu.useRef)(null);
      return function(uu, Ru, yu, Ku) {
        (0, Eu.useLayoutEffect)((() => {
          const Eu = uu.current,
            Ku = Ru.current;
          if (!Eu || !Ku) return;
          let Qu = -1,
            mu = -1;
          const Ju = uu => (Ku.style.setProperty("zoom", String(uu)), Eu.getBoundingClientRect().height),
            Nu = () => {
              const uu = document.documentElement.clientHeight * yu;
              let Ru = 1;
              if (Ju(1) > uu) {
                let yu = .5,
                  Eu = 1;
                for (let Ru = 0; Ru < 6; Ru++) {
                  const Ru = (yu + Eu) / 2;
                  Ju(Ru) <= uu ? yu = Ru : Eu = Ru
                }
                Ru = yu
              }
              mu = Ju(Ru), Qu = Eu.getBoundingClientRect().width
            };
          Nu();
          let Xu = 0;
          const Vu = () => {
              cancelAnimationFrame(Xu), Xu = requestAnimationFrame(Nu)
            },
            ru = new ResizeObserver((() => {
              const {
                width: uu,
                height: Ru
              } = Eu.getBoundingClientRect();
              uu === Qu && Ru === mu || Vu()
            }));
          return ru.observe(Eu), window.addEventListener("resize", Vu), () => {
            ru.disconnect(), window.removeEventListener("resize", Vu), cancelAnimationFrame(Xu), Ku.style.removeProperty("zoom")
          }
        }), [uu, Ru, yu, Ku])
      }(Qu, mu, Ku, Ru.content), (0, Xu.jsx)("div", {
        ref: Qu,
        className: "MiddleTextFit",
        children: (0, Xu.jsx)(lK, {
          ref: mu,
          text: Ru,
          className: yu
        })
      })
    }
    const Bm = (0, Eu.memo)((function() {
        const uu = (0, Ju.h)("aimingOverlay", "none");
        (0, Wu.d)();
        const Ru = (0, Hu.g)("useInventory");
        return (0, Xu.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === uu ? {
            visibility: "hidden"
          } : {},
          children: [(0, Xu.jsx)(Vu, {}), (0, Xu.jsx)(Hy.c, {}), (0, Xu.jsx)(dy, {}), (0, Xu.jsx)(Su.h, {
            children: (0, Xu.jsx)(WK, {})
          }), (0, Xu.jsxs)("div", {
            className: "HotBarRow",
            children: [Ru ? (0, Xu.jsx)(Fu.b, {}) : (0, Xu.jsx)(Fu.d, {}), (0, Xu.jsx)(Zu, {})]
          })]
        })
      })),
      xm = (0, Eu.memo)((function(uu) {
        let {
          showChat: Ru
        } = uu;
        const {
          t: yu
        } = (0, Gu.E)(), {
          clientEscMenuOptions: Ku,
          isTouchScreen: mu
        } = (0, eu.j)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, Wu.d)();
        const {
          userContext: Ju,
          isUserContextUpdating: Nu
        } = (0, Tu.d)(), Vu = (0, Hu.g)("hideCoordinates"), Bu = (0, Hu.g)("customVariationTitle"), {
          requestedGameNameWithVariation: xu,
          gameNameWithVariation: Su,
          lobbyName: pu,
          shownLobbyName: du
        } = (0, ku.i)("connectedGame"), bu = (0, ru.d)(xu, pu, !1), [Cu, Au] = (0, Eu.useState)(null), Du = (0, rK.m)(Su || xu || ""), Mu = Bu || Du || "";
        (0, Eu.useEffect)((() => {
          Nu || UE.e.getFavouriteLobbies(Ju).then((uu => {
            console.log("Got favourite lobbies", uu), Au(uu)
          }))
        }), [Nu, Ju]);
        const Iu = (0, Eu.useRef)(null);
        return (0, Eu.useLayoutEffect)((() => {
          const uu = Iu.current,
            Ru = document.documentElement,
            yu = new ResizeObserver((() => {
              Ru.style.setProperty("--InGameHeaderRowsHeight", `${uu.offsetHeight}px`)
            }));
          return yu.observe(uu), () => {
            yu.disconnect(), Ru.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), DE(Iu), (0, Xu.jsxs)(Xu.Fragment, {
          children: [(0, Xu.jsxs)("div", {
            className: Qu()(CE.c, {
              Touchscreen: mu
            }),
            ref: Iu,
            children: [(0, Xu.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, Xu.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: uu => {
                  uu.stopPropagation(), uu.preventDefault()
                },
                onClick: () => {
                  eu.d.set({
                    openEverythingMenuName: ju.s.SETTINGS
                  })
                },
                children: [(0, Xu.jsx)(VK.b, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, Xu.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Xu.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === bu && (0, Xu.jsx)(VK.b, {}), null !== bu && (0, Xu.jsxs)(Xu.Fragment, {
                  children: [bu, Mu && ` ${Mu}`]
                })]
              }), (0, Xu.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Xu.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: du
              }), (0, BK.H)(pu) && (0, Xu.jsx)(gu.i, {
                tooltipInner: (0, Xu.jsx)("div", {
                  children: yu(null !== Cu && Cu.includes(pu) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, Xu.jsx)("div", {
                  children: (0, Xu.jsx)(Dy.q, {
                    isLiked: null !== Cu && Cu.includes(pu),
                    onClick: () => {
                      try {
                        if (!Cu) return;
                        Cu.includes(pu) ? (UE.e.unfavouriteLobby(Ju, pu).catch((uu => {
                          console.error("Failed to favourite lobby", uu)
                        })), Au(Cu.filter((uu => uu !== pu)))) : (UE.e.favouriteLobby(Ju, pu).catch((uu => {
                          console.error("Failed to favourite lobby", uu)
                        })), Au([...Cu, pu]))
                      } catch (uu) {
                        console.error("Failed to like lobby", uu)
                      }
                    },
                    isLoading: null === Cu
                  })
                })
              }), (0, Xu.jsx)(FK, {})]
            }), (0, Xu.jsx)(KK, {
              show: Ku.showFPS
            }), !Vu && Ku.showCoordinates && (0, Xu.jsx)(JK, {}), !Vu && Ku.showChunkCoordinates && (0, Xu.jsx)(NK, {}), (0, Xu.jsx)(cK, {})]
          }), (0, Xu.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, Xu.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: Ru && (0, Xu.jsx)(Yu.d, {})
            })
          })]
        })
      })),
      Sm = (0, Eu.memo)((function() {
        (0, Wu.d)();
        const uu = (0, Hu.j)("RightInfoText"),
          [Ru, yu] = (0, Eu.useState)(null);
        return (0, SR.g)(Ru, ".RightElements"), uu.hasText ? (0, Xu.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, Xu.jsx)(lK, {
            ref: yu,
            text: uu,
            className: "RightInfoDiv",
            children: (0, Xu.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, Xu.jsx)(Nu.d, {
                text: uu.content
              })
            })
          })
        }) : null
      }))
  },
  4604: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju
    });
    var Eu = yu(64),
      Ku = yu(330),
      Qu = yu(1841),
      mu = yu(1079);

    function Ju(uu) {
      let {
        text: Ru
      } = uu;
      const yu = [];
      let Ju = "";
      return (0, Ku.ic)(Ru).forEach(((uu, Ru) => {
        if ("string" === typeof uu || !(0, Qu.d)(uu.icon)) return void(Ju += "string" === typeof uu ? uu : uu.icon);
        const Ku = Math.max(0, Ju.trimEnd().search(/\S{1,12}$/));
        yu.push((0, mu.jsxs)(Eu.Fragment, {
          children: [Ju.slice(0, Ku), (0, mu.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Ju.slice(Ku), (0, mu.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": uu.icon,
              children: (0, mu.jsx)(Qu.c, {
                itemName: uu.icon,
                amount: 0
              })
            })]
          })]
        }, Ru)), Ju = ""
      })), yu.push(Ju), (0, mu.jsx)(mu.Fragment, {
        children: yu
      })
    }
  },
  36369: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Bu,
      e: () => Vu,
      h: () => ru
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(1841),
      Ju = yu(1079);
    const Nu = 350;
    let Xu = 0;

    function Vu() {
      return Xu += 1, Xu
    }

    function ru(uu, Ru) {
      let yu = 0;
      for (const Eu of uu) "ingredient" !== Eu.kind && Eu.nV === Ru && (yu += Eu.amount);
      return yu > 0 ? {
        idx: Ru,
        amount: yu
      } : null
    }

    function Bu(uu) {
      var Ru, yu;
      let {
        anim: Ku,
        onComplete: Xu
      } = uu;
      const Vu = null !== (Ru = Ku.delayMs) && void 0 !== Ru ? Ru : 0,
        ru = null !== (yu = Ku.durationMs) && void 0 !== yu ? yu : Nu,
        [Bu, xu] = (0, Eu.useState)(Ku.from),
        [Su, pu] = (0, Eu.useState)(0 === Vu),
        [Tu, Wu] = (0, Eu.useState)(!1),
        ju = (0, Eu.useRef)(!1);
      return (0, Eu.useEffect)((() => {
        let uu, Ru;
        const yu = () => {
            ju.current = !0, pu(!0), uu = requestAnimationFrame((() => {
              Ru = requestAnimationFrame((() => {
                xu({
                  x: Ku.to.x,
                  y: Ku.to.y
                }), Wu(!0)
              }))
            }))
          },
          Eu = ju.current ? 0 : Vu;
        let Qu;
        Eu > 0 ? Qu = setTimeout(yu, Eu) : yu();
        const mu = setTimeout((() => {
          Xu(Ku.id)
        }), Eu + ru + 50);
        return () => {
          clearTimeout(Qu), cancelAnimationFrame(uu), cancelAnimationFrame(Ru), clearTimeout(mu)
        }
      }), [Ku.id, Ku.to.x, Ku.to.y, Xu, Vu, ru]), (0, Ju.jsx)("div", {
        className: Qu()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === Ku.kind,
          Waiting: !Su,
          Arrived: Tu
        }),
        style: {
          left: Bu.x,
          top: Bu.y,
          "--fly-duration": `${ru}ms`
        },
        children: (0, Ju.jsx)(mu.c, {
          itemName: Ku.itemName,
          amount: Ku.amount
        })
      })
    }
  },
  36352: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => lu,
      d: () => Lu
    });
    var Eu = yu(64),
      Ku = yu(2780),
      Qu = yu(6336),
      mu = yu(1983),
      Ju = yu(2335),
      Nu = yu(8573),
      Xu = yu(343),
      Vu = yu(34),
      ru = yu(1400),
      Bu = yu(47),
      xu = yu(1035),
      Su = yu.n(xu),
      pu = yu(330),
      Tu = yu(36361),
      Wu = yu(1825),
      ju = yu(1899),
      Hu = yu(8425),
      du = yu(1079);

    function bu(uu) {
      var Ru, yu;
      let {
        slotIdx: Qu
      } = uu;
      const mu = (0, ju.h)("hotbar", (uu => {
          var Ru;
          return null !== (Ru = uu.items[Qu]) && void 0 !== Ru ? Ru : null
        })),
        Nu = (0, ju.h)("hotbar", (uu => uu.ammo)),
        [Vu, ru] = (0, Eu.useState)(!1),
        Bu = (0, Eu.useRef)(null),
        [xu, pu] = (0, Eu.useState)(null),
        [Tu, bu] = (0, Eu.useState)(null),
        Cu = (0, Ju.g)("maxAuraLevel"),
        ku = (0, Ku.c)(),
        eu = (0, Eu.useCallback)((() => {
          if (clearTimeout(Bu.current), mu) {
            var uu, Ru, yu, Eu;
            const Nu = mu.displayName,
              Vu = [],
              ru = Array.isArray(Nu) ? Nu : [Nu],
              Bu = {
                fontStyle: null !== (uu = mu.attributes.customAttributes) && void 0 !== uu && uu.author ? "italic" : "normal"
              };
            for (const uu of ru) uu.str ? Vu.push(uu) : Vu.push({
              str: uu,
              style: Bu
            });
            if (null !== (Ru = mu.attributes.customAttributes) && void 0 !== Ru && Ru.enchantments) {
              Vu.push(" ");
              const uu = Object.entries(mu.attributes.customAttributes.enchantments).sort(((uu, Ru) => Ru[1] - uu[1])),
                Ru = mu.attributes.customAttributes.enchantmentData;
              for (const [yu, Eu] of uu) {
                var Ku, Qu;
                const uu = null !== (Ku = null === Ru || void 0 === Ru || null === (Qu = Ru[yu]) || void 0 === Qu ? void 0 : Qu.icon) && void 0 !== Ku ? Ku : `${yu} Enchantment`;
                var Ju;
                if (Eu < 4)
                  for (let Ru = 0; Ru < Eu; Ru++) Vu.push({
                    icon: uu,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else Vu.push({
                  icon: uu,
                  style: {
                    fontSize: "1.5em"
                  }
                }), Vu.push(null !== (Ju = (0, Xu.U)(Eu)) && void 0 !== Ju ? Ju : Eu.toString())
              }
            }
            pu(Vu), bu(null !== (yu = null === (Eu = mu.attributes.customAttributes) || void 0 === Eu ? void 0 : Eu.enchantmentTier) && void 0 !== yu ? yu : null)
          } else pu(null), bu(null);
          ru(!0), ku();
          const Nu = null === mu || void 0 === mu ? void 0 : mu.attributes.customAttributes;
          void 0 === (null === Nu || void 0 === Nu ? void 0 : Nu.shotsLeft) && (Bu.current = setTimeout((() => {
            ru(!1)
          }), 2e3))
        }), [null === mu || void 0 === mu ? void 0 : mu.name, Qu, null === mu || void 0 === mu ? void 0 : mu.instance, null === mu || void 0 === mu ? void 0 : mu.displayName]);
      (0, Eu.useEffect)((() => (eu(), () => {
        clearTimeout(Bu.current), ru(!1)
      })), [null === mu || void 0 === mu ? void 0 : mu.name, Qu, null === mu || void 0 === mu ? void 0 : mu.instance, eu]);
      const Au = null === mu || void 0 === mu || null === (Ru = mu.attributes.customAttributes) || void 0 === Ru ? void 0 : Ru.shotsLeft,
        Du = void 0 === Au ? null : (0, du.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${Au}|${mu.requiresAmmo?`${Nu}x${mu.clipSize}`:mu.clipSize}`
        }),
        Mu = (0, Hu.j)();
      return (0, du.jsx)(du.Fragment, {
        children: Vu && mu && !Mu.showing ? (0, du.jsxs)("div", {
          className: Su()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === Cu,
            Enchanted: null !== Tu
          }),
          style: {
            "--enchantmentColour": null !== (yu = Xu.tb[Tu]) && void 0 !== yu ? yu : Xu.tb.None,
            "--duration": Tu ? (0, Xu.nb)(Tu) + "s" : void 0
          },
          children: [Tu && (0, du.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, du.jsx)(Wu.d, {
              text: xu
            }), Du]
          }), (0, du.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, du.jsx)(Wu.d, {
              text: xu
            }), Du]
          })]
        }) : null
      })
    }
    var Cu = yu(36369),
      ku = yu(27),
      eu = yu(1855),
      Au = yu(610),
      Du = yu(2337),
      Mu = yu(3199),
      Iu = yu(3208);
    var Gu = yu(2003),
      Uu = yu(1093),
      nu = yu(2368);

    function su() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var tu = yu(1417);
    const lu = (0, Eu.memo)((function() {
      const [uu, Ru] = (0, Eu.useState)(0), yu = (0, Ju.g)("useFullInventory"), mu = (0, Ju.g)("highlightedHotbarSlots"), {
        isTouchScreen: Nu,
        openInGameMenuName: Xu
      } = (0, ku.j)(["isTouchScreen", "openInGameMenuName"]), Bu = null !== Xu && "inventory" !== Xu, xu = (0, ju.i)("fullInventory") && "inventory" === Xu, pu = function() {
        const uu = (0, Gu.d)(((uu, Ru) => `${uu}:${(0,Uu.b)(uu,Ru)?"portrait":"landscape"}`)),
          [Ru, yu] = (0, Eu.useState)(su);
        return (0, Eu.useLayoutEffect)((() => {
          yu(su())
        }), [uu]), (0, ru.e)(nu.e, (() => {
          yu(su())
        })), Ru
      }(), Wu = Nu && !pu;
      ! function(uu, Ru, yu) {
        (0, Eu.useLayoutEffect)((() => {
          const Eu = document.documentElement.classList;
          return uu && (Eu.add("TouchHotbar"), Eu.toggle("TouchHotbarKeysAbove", Ru), Eu.toggle("TouchHotbarHasBag", yu)), (0, Mu.h)(), Vu.k.Op(Iu.d), () => {
            Eu.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, Mu.h)(), Vu.k.Op(Iu.d)
          }
        }), [uu, Ru, yu])
      }(Nu, Wu, yu);
      const [Hu, Du] = (0, Qu.d)("changedHotbarUsingNumkeys", !0), tu = (0, ju.h)("hotbar", (uu => uu.selectedSlot)), lu = null !== tu && void 0 !== tu ? tu : uu, zu = (0, Ku.c)(), Fu = (0, Eu.useRef)(null), Zu = (0, ru.h)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, ru.e)("inventoryDraggedItemUpdated", (uu => {
        Fu.current = uu, zu()
      })), (0, ju.d)("hotbarScrolled", (uu => {
        null === tu && Pu(uu)
      })), (0, ju.d)("hotbarSlotRequested", (uu => {
        hu(uu), Du(!1)
      })), (0, ju.d)("numberKeyPressed", (() => {
        Du(!1)
      })), (0, ju.d)("hotbarDropRequested", (uu => {
        const Ru = eu.gameBridge.latest("hotbar").items[lu];
        if (Ru) {
          var yu;
          const Eu = uu && null !== (yu = Ru.amount) && void 0 !== yu ? yu : 1;
          eu.gameBridge.send("removeInventoryItem", {
            slot: lu,
            amount: Eu,
            drop: !0
          })
        }
      }));
      const hu = uu => {
          eu.gameBridge.send("selectHotbarSlot", uu), Ru(uu)
        },
        Pu = uu => {
          hu((lu + uu + Au.n) % Au.n)
        };
      let iu, Yu = null,
        ou = null,
        qu = uu => uu => {},
        Ou = uu => Ru => {
          hu(uu)
        },
        vu = uu => uu => {},
        au = [];
      if (xu) {
        var fu;
        const uu = Fu.current;
        if (null === uu || void 0 === uu || !uu.setHovered) return (0, du.jsx)("div", {
          className: Su()("HotBarContainer", {
            Touch: Nu,
            KeysAbove: Wu
          }),
          children: (0, du.jsx)("div", {
            className: "HotBar"
          })
        });
        Yu = uu.draggedInfo, ou = uu.specialItemInfo, qu = uu.setHovered, Ou = uu.pointerDown, vu = uu.pointerUp, iu = uu.variation, au = null !== (fu = uu.craftFlyAnims) && void 0 !== fu ? fu : []
      }
      return (0, du.jsxs)("div", {
        className: Su()("HotBarContainer", {
          Touch: Nu,
          PopupOpen: Nu && Bu,
          KeysAbove: Wu
        }),
        children: [(0, du.jsxs)("div", {
          className: Su()("HotBar", {
            HoverDisabled: Zu
          }),
          children: [Nu && (0, du.jsxs)(du.Fragment, {
            children: [(0, du.jsx)(cu, {
              useFullInventory: yu,
              inventoryOpen: xu
            }), (0, du.jsx)(gu, {
              direction: "Previous",
              onPress: () => {
                Pu(-1)
              }
            })]
          }), !Nu && (0, du.jsxs)(du.Fragment, {
            children: [(0, du.jsx)(Lu, {}), (0, du.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, du.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((uu, Ru) => (0, du.jsx)(Tu.c, {
              idx: Ru,
              draggedInfo: Yu,
              specialItemInfo: ou,
              craftFlyHoldbackInfo: (0, Cu.h)(au, Ru),
              setHovered: qu(Ru),
              pointerDown: Ou(Ru),
              pointerUp: vu(Ru),
              variation: iu,
              isSelected: Ru === lu,
              hotbarHighlighted: !0 === (null === mu || void 0 === mu ? void 0 : mu.includes(Ru)),
              hoverDisabled: Zu,
              showNumber: Hu && !Nu
            }, Ru)))
          }), Nu && (0, du.jsx)(gu, {
            direction: "Next",
            onPress: () => {
              Pu(1)
            }
          }), !Nu && (0, du.jsxs)(du.Fragment, {
            children: [(0, du.jsx)("div", {
              className: "HotBarFiller"
            }), (0, du.jsx)("div", {
              className: Su()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !yu
              }),
              onPointerDown: () => {
                Vu.k.Op("toggleMenu", "inventory")
              },
              children: (0, du.jsx)(wu, {})
            })]
          })]
        }), (0, du.jsx)(bu, {
          slotIdx: lu
        })]
      })
    }));

    function gu(uu) {
      let {
        direction: Ru,
        onPress: yu
      } = uu;
      return (0, du.jsx)("div", {
        className: Su()("HotBarArrow", Ru),
        ...tu.h,
        children: (0, du.jsx)(mu.c, {
          icon: "Previous" === Ru ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: yu
        })
      })
    }
    const cu = (0, Eu.memo)((function(uu) {
        let {
          useFullInventory: Ru,
          inventoryOpen: yu
        } = uu;
        const Ku = (0, Ju.g)("maxAuraLevel"),
          Qu = (0, Eu.useRef)(null);
        return function(uu, Ru, yu) {
          (0, Eu.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", Ru), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [Ru]), (0, Eu.useLayoutEffect)((() => {
            const Ru = uu.current.closest(".BottomMiddleElements");
            return Ru.classList.toggle("TouchInventoryOpen", yu), () => {
              Ru.classList.remove("TouchInventoryOpen")
            }
          }), [uu, yu])
        }(Qu, (0, Nu.b)(), yu), (0, du.jsxs)("div", {
          ref: Qu,
          className: Su()("TouchInventoryKeys", {
            NoAuraBar: 0 === Ku,
            InventoryOpen: yu
          }),
          children: [(0, du.jsx)(Lu, {
            touchKey: !0
          }), (0, du.jsx)("div", {
            className: Su()("TouchInventoryKey BagKey", {
              Hidden: !Ru
            }),
            ...tu.h,
            children: (0, du.jsx)(wu, {
              touchKey: !0
            })
          })]
        })
      })),
      Lu = (0, Eu.memo)((function(uu) {
        let {
          touchKey: Ru = !1
        } = uu;
        const yu = (0, Nu.b)();
        return (0, du.jsx)("div", {
          className: Ru ? Su()("TouchInventoryKey ShopKey", {
            Hidden: !yu
          }) : Su()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !yu
          }),
          ...Ru ? tu.h : {},
          children: (0, du.jsx)(mu.c, {
            icon: (0, Xu.pc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              yu && ku.d.set({
                openEverythingMenuName: pu.s.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function zu(uu) {
      let {
        player: Ru
      } = uu;
      return Ru.some((uu => null !== uu && Xu.cd.includes(uu.name)))
    }

    function Fu(uu) {
      uu.creative || Bu.i.getItem("LogInInventoryRedDotTutorialComplete") || (zu(uu) ? (Vu.k.Op("RedDotOpenInventoryIcon", !0), Vu.k.Op("TouchTutorialOpenInventoryIcon", !0)) : (Vu.k.Op("RedDotOpenInventoryIcon", !1), Vu.k.Op("TouchTutorialOpenInventoryIcon", !1)))
    }
    const wu = (0, Eu.memo)((function(uu) {
      let {
        touchKey: Ru = !1
      } = uu;
      const {
        backpackPointerRequested: yu
      } = (0, ku.j)(["backpackPointerRequested"]);
      (0, Eu.useEffect)((() => {
        Fu(eu.gameBridge.latest("inventory"))
      }), []), (0, ju.d)("inventory", Fu);
      const Ku = (0, Du.k)();
      return (0, ru.e)("toggleMenu", (uu => {
        Ku.shown && (null !== uu && void 0 !== uu && uu.startsWith("inventory") && zu(eu.gameBridge.latest("inventory")) ? (Bu.i.setItem("LogInInventoryRedDotTutorialComplete", !0), Vu.k.Op("RedDotOpenInventoryIcon", !1), Vu.k.Op("TouchTutorialOpenInventoryIcon", !1)) : "shop" === uu && Vu.k.Op("showShopTouchTutorial", !1))
      })), Ru ? (0, du.jsx)(mu.c, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          Vu.k.Op("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: yu,
        touchIconPosition: "topleft"
      }) : (0, du.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          Vu.k.Op("toggleMenu", "inventory")
        },
        children: (0, du.jsx)(mu.c, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: uu => {
            Vu.k.Op("toggleMenu", "inventory"), uu.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: yu,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36361: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Tu,
      d: () => Su
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(1848),
      Ju = yu(1841),
      Nu = yu(1855),
      Xu = yu(1899),
      Vu = yu(36364),
      ru = yu(9072),
      Bu = yu(1354),
      xu = yu(1079);
    const Su = (uu, Ru, yu) => {
      let Eu = Ru,
        Ku = !1;
      for (const Qu of yu)(null === Qu || void 0 === Qu ? void 0 : Qu.idx) === uu && (Ku = !0, Eu > 0 && (Eu -= Qu.amount));
      return {
        displayedAmt: Eu,
        shown: !Ku || Eu > 0
      }
    };
    const pu = uu => {
        let {
          idx: Ru
        } = uu;
        return (0, Bu.n)() ? null : (0, xu.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: Ru < 9 ? Ru + 1 : 0
        })
      },
      Tu = (0, Eu.memo)((function(uu) {
        var Ru, yu, Eu;
        let {
          idx: Ku,
          setHovered: Bu,
          pointerDown: Tu,
          pointerUp: Wu,
          draggedInfo: ju,
          specialItemInfo: Hu,
          craftFlyHoldbackInfo: du,
          defaultIconB64: bu = null,
          variation: Cu,
          isSelected: ku = !1,
          hotbarHighlighted: eu = !1,
          hoverDisabled: Au = !1,
          showNumber: Du = !1,
          showNewDot: Mu = !1
        } = uu;
        const Iu = (0, Xu.h)("inventory", (uu => Ku === Vu.h ? null : (0, ru.k)(uu, Ku)));
        let Gu, Uu, nu, su;
        if (Ku === Vu.h) Hu && (Gu = Hu.name, nu = Hu.amount, su = Hu.attributes);
        else if (Iu) {
          var tu;
          Gu = Iu.name, Uu = Iu.icon, nu = null !== (tu = Iu.amount) && void 0 !== tu ? tu : 0, su = Iu.attributes
        }
        const lu = null === (Ru = su) || void 0 === Ru || null === (yu = Ru.customAttributes) || void 0 === yu ? void 0 : yu.enchantmentTier,
          gu = (0, mu.h)(su),
          {
            displayedAmt: cu,
            shown: Lu
          } = Su(Ku, nu, [ju, Hu, du]),
          zu = Gu && Lu,
          Fu = void 0 !== Cu && function(uu, Ru) {
            const {
              enchantable: yu,
              salvageable: Eu
            } = Nu.gameBridge.latest("stationItems");
            return "Enchanting Table" === uu ? !0 === yu[Ru] : "Salvaging Table" === uu && !0 === Eu[Ru]
          }(Cu, Gu);
        return (0, xu.jsxs)("div", {
          className: Qu()("InvenItem", {
            Highlighted: zu && Fu,
            Selected: ku,
            HotbarHighlighted: eu,
            HoverDisabled: Au
          }),
          onPointerEnter: () => {
            null === Bu || void 0 === Bu || Bu(!0)
          },
          onPointerLeave: () => {
            null === Bu || void 0 === Bu || Bu(!1)
          },
          onPointerDown: Tu,
          onPointerUp: Wu,
          "data-inven-idx": Ku,
          children: [zu && (0, xu.jsx)(Ju.c, {
            itemName: null !== (Eu = Uu) && void 0 !== Eu ? Eu : Gu,
            amount: cu,
            enchantmentTier: lu,
            bar: gu
          }), zu && Mu && (0, xu.jsx)("div", {
            className: "InvenItemNewDot"
          }), Du && (0, xu.jsx)(pu, {
            idx: Ku
          }), bu && !zu && (0, xu.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${bu})`
            }
          })]
        })
      }))
  },
  9057: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = yu(343),
      Ku = yu(9064);

    function Qu(uu, Ru, yu) {
      const Qu = Object.entries(Ru).sort(((uu, Ru) => Ru[1] - uu[1])),
        mu = (0, Eu.xb)(uu);
      mu.push(uu ? "\n\n" : "\n");
      for (const [Ku, Su] of Qu) {
        var Ju, Nu, Xu;
        const uu = null !== (Ju = null === yu || void 0 === yu || null === (Nu = yu[Ku]) || void 0 === Nu ? void 0 : Nu.icon) && void 0 !== Ju ? Ju : `${Ku} Enchantment`;
        mu.push({
          icon: uu,
          style: {
            fontSize: "1.5rem"
          }
        }), mu.push({
          str: `${Ku} ${null!==(Xu=(0,Eu.U)(Su))&&void 0!==Xu?Xu:Su}\n`
        })
      }
      mu.push({
        str: "\n"
      });
      for (const [Eu, Su] of Qu) {
        var Vu, ru, Bu, xu;
        const uu = null !== (Vu = null === yu || void 0 === yu || null === (ru = yu[Eu]) || void 0 === ru ? void 0 : ru.icon) && void 0 !== Vu ? Vu : `${Eu} Enchantment`,
          Ru = null !== (Bu = null === yu || void 0 === yu || null === (xu = yu[Eu]) || void 0 === xu ? void 0 : xu.description) && void 0 !== Bu ? Bu : (0, Ku.j)(Eu);
        mu.push({
          icon: uu,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), mu.push({
          str: Ru,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), mu.push({
          str: "\n"
        })
      }
      return mu
    }
  },
  36364: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      h: () => Ku
    });
    const Eu = -1,
      Ku = -2
  },
  9072: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Xu,
      e: () => ju,
      h: () => Tu,
      k: () => Nu,
      n: () => Wu,
      p: () => Vu,
      t: () => Bu,
      w: () => pu,
      y: () => ru
    });
    var Eu = yu(330),
      Ku = yu(610),
      Qu = yu(343),
      mu = yu(4042),
      Ju = yu(9057);

    function Nu(uu, Ru) {
      var yu;
      let {
        player: Eu,
        chestOrCreative: Ku
      } = uu;
      var Qu;
      return Ru < Eu.length ? null !== (Qu = Eu[Ru]) && void 0 !== Qu ? Qu : null : null !== (yu = Ku[Ru - Eu.length]) && void 0 !== yu ? yu : null
    }

    function Xu(uu) {
      var Ru;
      return null !== (Ru = uu.amount) && void 0 !== Ru ? Ru : 0
    }

    function Vu(uu) {
      return 0 === uu.button || void 0 === uu.button
    }

    function ru(uu) {
      return !!uu.shiftKey
    }

    function Bu(uu) {
      return "touches" in uu || "touch" === uu.pointerType || "pen" === uu.pointerType
    }
    const xu = new Set,
      Su = 50;

    function pu(uu, Ru) {
      var yu;
      const Eu = null === (yu = uu[Ru]) || void 0 === yu ? void 0 : yu.displayName;
      return (0, Ku.E)(Eu) ? "string" !== typeof Ru ? "" : (!xu.has(Ru) && xu.size < Su && (xu.add(Ru), console.warn(`No item called "${Ru}", so its hover shows the name as given`)), Ru) : Eu
    }

    function Tu(uu, Ru, yu) {
      var Nu, Xu, Vu, ru, Bu, xu, Su, Tu, Wu, ju, Hu, du, bu, Cu;
      const ku = uu.attributes,
        eu = null !== (Nu = null === (Xu = Ru[uu.name]) || void 0 === Xu ? void 0 : Xu.rootName) && void 0 !== Nu ? Nu : uu.name,
        Au = null !== (Vu = null !== (ru = ku.customDisplayName) && void 0 !== ru ? ru : null === (Bu = Ru[uu.name]) || void 0 === Bu ? void 0 : Bu.displayName) && void 0 !== Vu ? Vu : pu(Ru, eu);
      let Du = Au;
      const Mu = null === (xu = ku.customAttributes) || void 0 === xu ? void 0 : xu.enchantmentTier;
      Mu && (Du = (0, Qu.xb)(Au, {
        colour: Qu.tb[Mu]
      }));
      const Iu = null !== (Su = null !== (Tu = null !== (Wu = function(uu, Ru) {
        var yu;
        if (void 0 === uu || null !== (yu = Ru.customAttributes) && void 0 !== yu && yu.author) return uu;
        const Ku = (0, Eu.ic)(uu);
        return Ku.every((uu => "string" === typeof uu)) ? uu : Ku.map((uu => "string" === typeof uu ? uu : {
          icon: uu.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(ku.customDescription, ku)) && void 0 !== Wu ? Wu : null === (ju = Ru[uu.name]) || void 0 === ju ? void 0 : ju.description) && void 0 !== Tu ? Tu : null === (Hu = Ru[eu]) || void 0 === Hu ? void 0 : Hu.description) && void 0 !== Su ? Su : "";
      let Gu = Iu;
      if (null !== (du = ku.customAttributes) && void 0 !== du && du.enchantments) Gu = (0, Ju.d)(Iu, ku.customAttributes.enchantments, ku.customAttributes.enchantmentData);
      else if (yu[eu]) Gu = (0, Qu.xb)(Iu), Gu.push({
        str: "\n"
      }), Gu.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (bu = ku.customAttributes) && void 0 !== bu && bu.mobSettings) {
        var Uu, nu;
        const uu = ku.customAttributes.mobSettings;
        var su, tu;
        if (Gu = [], (0, Ku.E)(ku.customAttributes.health) || (Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Gu.push({
            str: " "
          }), Gu.push({
            str: ku.customAttributes.health.toString()
          }), (0, Ku.E)(uu.maxHealth) || (Gu.push({
            str: "/"
          }), Gu.push({
            str: uu.maxHealth.toString()
          }))), !(0, Ku.E)(uu.attackDamage) && uu.attackDamage > 0 && (Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Gu.push({
            str: " "
          }), Gu.push({
            str: uu.attackDamage.toString()
          })), !(0, Ku.E)(uu.secondaryAttackDamage) && uu.secondaryAttackDamage > 0 && (Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Gu.push({
            str: " "
          }), Gu.push({
            str: uu.secondaryAttackDamage.toString()
          })), (0, Ku.E)(uu.baseRunningSpeed) || (Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Gu.push({
            str: " "
          }), Gu.push({
            str: uu.baseRunningSpeed.toFixed(2)
          })), "Saddled" === uu.metaInfo) Gu.push({
          str: "\n"
        }), Gu.push({
          str: {
            translationKey: "general:has"
          }
        }), Gu.push({
          str: " "
        }), Gu.push({
          icon: null !== (su = null === (tu = uu.tameInfo) || void 0 === tu ? void 0 : tu.saddleItemName) && void 0 !== su ? su : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Gu.push({
            str: "\n"
          }), Gu.push({
            str: "\n"
          }), uu.petInfo && null !== (Uu = uu.tameInfo) && void 0 !== Uu && Uu.supportsFriendship) {
          const Ru = mu.b.getIconsFromFriendshipPoints(uu.petInfo.friendshipPoints);
          for (const uu of Ru) Gu.push({
            icon: uu,
            style: {
              fontSize: "1.5em"
            }
          });
          Gu.push({
            str: "\n"
          });
          const yu = mu.b.getMobHungerLevel(uu.petInfo.lastFedAt);
          for (const uu of mu.b.hungerLevelIcons[yu]) Gu.push({
            icon: uu,
            style: {
              fontSize: "1.5em"
            }
          });
          Gu.push({
            str: " "
          }), Gu.push({
            str: mu.b.hungerLevelTranslations[yu],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (uu.tameInfo && null !== (nu = uu.tameInfo) && void 0 !== nu && nu.supportsFriendship) {
          var lu, gu;
          let Ru = null !== (lu = uu.tameInfo.likedFoods) && void 0 !== lu ? lu : [];
          Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mu.b.feedTextColours[mu.b.MobFoodType.Superliked]
            }
          }), Gu.push({
            str: " "
          }), null !== (gu = uu.petInfo) && void 0 !== gu && gu.superlikedFoodKnown ? (Gu.push({
            icon: uu.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Ru = Ru.filter((Ru => Ru !== uu.petInfo.superlikedFood))) : Gu.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mu.b.feedTextColours[mu.b.MobFoodType.Liked]
            }
          }), Gu.push({
            str: " "
          });
          for (const uu of Ru) Gu.push({
            icon: uu,
            style: {
              fontSize: "1.5em"
            }
          });
          Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mu.b.feedTextColours[mu.b.MobFoodType.Neutral]
            }
          }), Gu.push({
            str: " "
          });
          for (const yu of null !== (cu = uu.tameInfo.neutralFoods) && void 0 !== cu ? cu : []) {
            var cu;
            Gu.push({
              icon: yu,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mu.b.feedTextColours[mu.b.MobFoodType.Disliked]
            }
          }), Gu.push({
            str: " "
          });
          for (const yu of null !== (Lu = uu.tameInfo.dislikedFoods) && void 0 !== Lu ? Lu : []) {
            var Lu;
            Gu.push({
              icon: yu,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Gu.length > 0 ? (Gu.shift(), Gu.unshift(...(0, Qu.xb)(Iu))) : Gu = (0, Qu.xb)(Iu)
      }
      return {
        name: Du,
        desc: Gu,
        fontStyle: null !== (Cu = ku.customAttributes) && void 0 !== Cu && Cu.author ? "italic" : "normal"
      }
    }

    function Wu(uu, Ru, yu, Eu) {
      const Ku = Nu(uu, yu),
        Qu = Nu(uu, Eu);
      if (!Ku) return !1;
      const mu = Ru[Ku.name].armourReduction,
        Ju = Ru[Qu.name].armourReduction;
      if (Ju === mu) {
        var Xu, Vu, ru, Bu;
        const uu = null !== (Xu = null === (Vu = Ku.attributes.customAttributes) || void 0 === Vu ? void 0 : Vu.enchantmentTier) && void 0 !== Xu ? Xu : "Tier 0",
          Ru = null !== (ru = null === (Bu = Qu.attributes.customAttributes) || void 0 === Bu ? void 0 : Bu.enchantmentTier) && void 0 !== ru ? ru : "Tier 0";
        return parseInt(uu.replace("Tier ", "")) >= parseInt(Ru.replace("Tier ", ""))
      }
      return mu > Ju
    }

    function ju(uu) {
      let Ru;
      if ("number" === typeof uu) {
        const yu = document.querySelector(`[data-inven-idx="${uu}"]`);
        if (!yu) return null;
        Ru = yu.getBoundingClientRect()
      } else Ru = uu.getBoundingClientRect();
      return {
        x: Ru.left + Ru.width / 2,
        y: Ru.top + Ru.height / 2
      }
    }
  },
  8955: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => xu,
      e: () => Su,
      h: () => pu
    });
    var Eu = yu(1408),
      Ku = yu(64),
      Qu = yu(1269),
      mu = yu(4301),
      Ju = yu(2266),
      Nu = yu(1170),
      Xu = yu(106),
      Vu = yu(1899),
      ru = yu(1300),
      Bu = yu(1079);

    function xu(uu) {
      let {
        show: Ru,
        onClose: yu
      } = uu;
      const {
        requestedGameNameWithVariation: Eu,
        lobbyName: Ku,
        shownLobbyName: Qu
      } = (0, Vu.i)("connectedGame"), Nu = (0, Ju.d)(Eu, Ku, !1);
      return Xu.featureFlags.canUseInviteLinks && (0, Bu.jsx)(mu.e, {
        show: Ru,
        close: yu,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Bu.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Bu.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Bu.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Bu.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Nu ? (0, Bu.jsx)(ru.b, {}) : Nu, (0, Bu.jsx)("br", {}), "Lobby Name: ", Qu, (0, Bu.jsx)("br", {}), (0, Bu.jsx)("br", {}), (0, Bu.jsx)("br", {}), (0, Bu.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Bu.jsx)(Su, {})]
        })
      })
    }

    function Su() {
      var uu;
      const {
        t: Ru
      } = (0, Nu.E)(), yu = null !== (uu = pu(Xu.featureFlags.canUseInviteLinks)) && void 0 !== uu ? uu : "Loading Link...", [Qu, mu] = (0, Ku.useState)(0), [Ju, Vu] = (0, Ku.useReducer)((uu => uu + 1), 0);
      return (0, Ku.useEffect)((() => {
        const uu = setTimeout((() => {
          Vu()
        }), 1100);
        return () => {
          clearTimeout(uu)
        }
      }), [Qu]), Xu.featureFlags.canUseInviteLinks && (0, Bu.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Bu.jsx)("div", {
          className: "InviteLinkInner",
          children: yu
        }), (0, Bu.jsx)(Eu.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(yu).catch((uu => {
              console.error("Failed to copy invite link:", uu)
            })), mu(Date.now())
          },
          disabled: Date.now() - Qu < 1e3,
          children: Date.now() - Qu < 1e3 ? Ru("general:copied") : Ru("general:copy")
        })]
      })
    }

    function pu(uu) {
      const [Ru, yu] = (0, Ku.useState)(null);
      return (0, Ku.useEffect)((() => {
        if (!uu) return;
        let Ru = !0;
        return (0, Qu.K)().then((uu => {
          Ru && yu(uu)
        })).catch((uu => {
          console.error("Failed to get invite link:", uu)
        })), () => {
          Ru = !1
        }
      }), [uu]), Ru
    }
  },
  36766: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => eu
    });
    var Eu = yu(64),
      Ku = yu(2335),
      Qu = yu(1825),
      mu = yu(595),
      Ju = yu(34),
      Nu = yu(1035),
      Xu = yu.n(Nu),
      Vu = yu(36391),
      ru = yu(2462),
      Bu = yu(36394),
      xu = yu(2490),
      Su = yu(2468),
      pu = yu(3415),
      Tu = yu(27),
      Wu = yu(1955),
      ju = yu(2278),
      Hu = yu(1199),
      du = yu(4689),
      bu = yu(1899),
      Cu = yu(106),
      ku = yu(1079);
    const eu = (0, Eu.memo)((function() {
      const uu = (0, Ku.g)("lobbyLeaderboardInfo"),
        Ru = (0, bu.i)("players"),
        yu = (0, bu.i)("lobbyLeaderboardRows"),
        Ju = (0, bu.i)("hiddenPlayerNames"),
        Nu = (0, Eu.useRef)(null),
        [Xu, Vu] = (0, Eu.useReducer)((uu => uu + 1), 0);
      return (0, Eu.useEffect)((() => (0, Wu.b)((() => {
        Vu()
      }))), []), (0, ku.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, ku.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!uu) return (0, ku.jsx)(ku.Fragment, {});
            const Eu = JSON.parse(JSON.stringify(uu)),
              Ku = [...Ru.ids],
              Xu = {},
              Vu = {};
            for (const uu of Ku) {
              var ru, xu;
              Xu[uu] = null === (ru = yu[uu]) || void 0 === ru ? void 0 : ru.colour;
              const Ru = null === (xu = yu[uu]) || void 0 === xu ? void 0 : xu.values;
              Ru && (Vu[uu] = {
                ...Ru
              })
            }
            const Su = Object.keys(Eu);
            Su.sort(((uu, Ru) => Eu[uu].sortPriority - Eu[Ru].sortPriority)), Ku.sort(((uu, Ru) => {
              if (!Vu[uu] || !Vu[Ru]) return 0;
              for (const yu of Su) {
                const Ku = Vu[uu][yu],
                  Qu = Vu[Ru][yu];
                let mu = 0;
                if ("string" == typeof Ku && "string" == typeof Qu ? mu = Ku.localeCompare(Qu) : "number" == typeof Ku && "number" == typeof Qu ? mu = Ku - Qu : "number" == typeof Ku && "string" == typeof Qu ? mu = 1 : "string" == typeof Ku && "number" == typeof Qu && (mu = -1), mu) return mu * ("ascending" === Eu[yu].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const uu of Ku) {
              var pu, Tu, bu;
              const {
                name: Eu,
                ranks: Ku,
                cosmetics: Qu
              } = Ru.byId[uu], Ju = [], Nu = null !== (pu = null === (Tu = yu[uu]) || void 0 === Tu || null === (bu = Tu.tags) || void 0 === bu ? void 0 : bu.flatMap((uu => 0 === uu.length ? uu : [...uu, String.fromCharCode(8198)]))) && void 0 !== pu ? pu : [];
              Ju.push(...Nu), Ju.push(...(0, Hu.v)(Ku, Eu, (null === Qu || void 0 === Qu ? void 0 : Qu.nameColour) === mu.b || null === Qu || void 0 === Qu ? void 0 : Qu.nameColour)), Vu[uu] ??= {}, Vu[uu].name = Ju
            }

            function Cu(uu, yu) {
              if (Vu[uu] && void 0 !== Vu[uu][yu]) {
                if ("name" === yu) {
                  const {
                    name: Eu,
                    cosmetics: Ku
                  } = Ru.byId[uu];
                  return (0, ku.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [Ku && (0, ku.jsx)(ju.b, {
                      cosmetics: Ku
                    }), " ", (0, ku.jsx)(Qu.d, {
                      text: Vu[uu][yu],
                      friendBadgeFor: (0, Wu.d)(Eu, Ju) ? Eu : void 0
                    })]
                  })
                }
                return (0, ku.jsx)(Qu.d, {
                  text: Vu[uu][yu]
                })
              }
              return ""
            }
            const eu = Object.keys(Eu).filter((uu => !0 !== Eu[uu].hidden)).map((uu => {
              var Ru;
              return {
                key: uu,
                header: (0, ku.jsx)(Qu.d, {
                  text: null !== (Ru = Eu[uu].displayName) && void 0 !== Ru ? Ru : ""
                })
              }
            }));
            return (0, ku.jsx)("div", {
              ref: Nu,
              className: "LobbyLeaderboard",
              children: (0, ku.jsx)(du.e, {
                columns: eu,
                rows: Ku,
                getRowKey: uu => uu,
                renderRow: uu => {
                  const yu = uu !== Ru.localId;
                  return (0, ku.jsx)(Au, {
                    playerId: uu,
                    playerName: Ru.byId[uu].name,
                    isOtherPlayer: yu,
                    opensProfileCard: (0, Bu.i)(yu, Ru.byId[uu].name, Ju),
                    lobbyLeaderboardInfo: Eu,
                    getPlayerValue: Cu,
                    playerColors: Xu
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function Au(uu) {
      let {
        playerId: Ru,
        playerName: yu,
        isOtherPlayer: Ku,
        opensProfileCard: Qu,
        lobbyLeaderboardInfo: mu,
        getPlayerValue: Nu,
        playerColors: Wu
      } = uu;
      const ju = (0, Eu.useRef)(null);
      (0, Eu.useEffect)((() => () => {
        ru.e.closeIfOwner(ju)
      }), []);
      const Hu = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            Ju.k.Op("OpenReportMenu", {
              playerEId: Ru,
              playerName: yu,
              Dm: null,
              serverChatMsgId: null
            })
          }
        },
        du = () => ({
          ...(0, Bu.e)(Ru, yu),
          showLocation: !1,
          status: null,
          extraActions: [Hu],
          friendRequestSource: "leaderboard"
        });
      return (0, ku.jsxs)("tr", {
        ref: ju,
        "data-pad-focusable": Qu || void 0,
        [ru.g]: Qu || void 0,
        onClick: Qu ? () => {
          var uu;
          ru.e.toggle(ju, {
            ...du(),
            anchor: null !== (uu = ju.current.querySelector(".PlayerPfpAndName")) && void 0 !== uu ? uu : ju.current
          })
        } : void 0,
        onContextMenu: Qu ? uu => {
          (0, xu.f)(ju, uu, du(), Tu.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Qu ? uu => {
          (0, Su.c)(uu, (() => (0, Bu.e)(Ru, yu).playerSocialPreview))
        } : void 0,
        children: [Object.keys(mu).map((uu => !0 === mu[uu].hidden ? null : (0, ku.jsxs)("td", {
          className: Xu()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !Ku
          }),
          children: [(0, ku.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: Nu(Ru, uu)
          }), (0, ku.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: Wu[Ru]
            }
          })]
        }, uu))), Ku && !Qu && (0, ku.jsx)(Vu.e, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: ju,
          options: [{
            icon: Hu.icon,
            text: Hu.text,
            onPointerDown: Hu.onClick
          }, ...null === yu || Cu.featureFlags.useSocialFeatures ? [] : (0, pu.d)(null, yu)]
        })]
      })
    }
  },
  4540: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => ju,
      b: () => Wu
    });
    var Eu = yu(64),
      Ku = yu(1400),
      Qu = yu(1825),
      mu = yu(4544),
      Ju = yu(1079);
    const Nu = (0, Eu.memo)((function(uu) {
      let {
        initialParameters: Ru
      } = uu;
      const yu = (0, Eu.useRef)(null),
        Ku = (0, Eu.useRef)(null),
        Nu = (0, Eu.useRef)(0),
        Xu = (0, Eu.useRef)(null),
        Vu = Ru.description,
        ru = Ru.zu,
        {
          scale: Bu,
          rotation: xu
        } = null !== Ru && void 0 !== Ru ? Ru : {},
        Su = (0, mu.f)();
      return (0, Eu.useEffect)((() => {
        const uu = Su.onFrame((() => {
          const uu = Su.getState();
          if (!uu.isActive || !yu.current || !Ku.current) return;
          const Ru = uu.state;
          if (yu.current.value = Ru.progress, Ru.clickCount > Nu.current) {
            Nu.current = Ru.clickCount;
            const uu = Ku.current;
            uu.classList.add("pulse"), Xu.current = setTimeout((() => {
              uu.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(Xu.current), uu()
        }
      }), [Su]), (0, Ju.jsx)(Ju.Fragment, {
        children: (0, Ju.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== Bu && {
              "--scale": Bu
            },
            ...null !== xu && {
              "--rotation": `${xu}deg`
            }
          },
          children: [(0, Ju.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: yu
          }), (0, Ju.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: Ku,
            children: (0, Ju.jsx)(Qu.d, {
              text: [{
                icon: ru
              }]
            })
          }), (0, Ju.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, Ju.jsx)(Qu.d, {
              text: Vu
            })
          })]
        })
      })
    }));
    var Xu = yu(1035),
      Vu = yu.n(Xu);
    const ru = 2 * Math.PI * 90,
      Bu = (0, Eu.memo)((function(uu) {
        let {
          initialParameters: Ru
        } = uu;
        const yu = (0, Eu.useRef)(null),
          Ku = (0, Eu.useRef)(null),
          Nu = (0, Eu.useRef)(null),
          Xu = Ru.label,
          Bu = Ru.icon,
          xu = Ru.Zu,
          {
            scale: Su,
            rotation: pu,
            Pu: Tu
          } = null !== Ru && void 0 !== Ru ? Ru : {},
          Wu = (0, mu.f)();
        return (0, Eu.useEffect)((() => {
          const uu = Wu.onFrame((() => {
            var uu, Ru;
            const Eu = Wu.getState();
            if (!Eu.isActive || !Ku.current) return;
            const Qu = Eu.state,
              mu = null !== (uu = Qu.timeRemaining) && void 0 !== uu ? uu : 0,
              Ju = null !== (Ru = Qu.wu) && void 0 !== Ru ? Ru : 1,
              Xu = ru * (1 - mu / Ju);
            Ku.current.style.strokeDashoffset = `${Xu}`, yu.current && (yu.current.style.opacity = mu > 0 ? "1" : "0"), Nu.current && xu && (Nu.current.textContent = `${(mu/1e3).toFixed(1)}s`)
          }));
          return () => {
            uu()
          }
        }), [Wu, xu]), (0, Ju.jsxs)("div", {
          className: "QTETimedClick",
          ref: yu,
          style: {
            ...null !== Su && {
              "--scale": Su
            },
            ...null !== pu && {
              "--rotation": `${pu}deg`
            }
          },
          children: [(0, Ju.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, Ju.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, Ju.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, Ju.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: ru,
                ref: Ku
              })]
            }), (0, Ju.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, Ju.jsx)(Qu.d, {
                text: [{
                  icon: Bu
                }],
                className: Vu()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: Tu
                })
              })
            })]
          }), (0, Ju.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, Ju.jsx)(Qu.d, {
              text: Xu,
              className: "QTETimedClickLabelText"
            }), xu && (0, Ju.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: Nu
            })]
          })]
        })
      })),
      xu = (0, Eu.memo)((function(uu) {
        let {
          initialParameters: Ru
        } = uu;
        const yu = (0, Eu.useRef)(null),
          Ku = (0, Eu.useRef)(null),
          Nu = (0, Eu.useRef)(null),
          Xu = (0, Eu.useRef)(!1),
          Vu = Ru.description,
          ru = null === Ru || void 0 === Ru ? void 0 : Ru.icon,
          Bu = (0, mu.f)();
        return (0, Eu.useEffect)((() => {
          const uu = Bu.onFrame((() => {
            const uu = Bu.getState();
            if (!uu.isActive) return;
            const Ru = uu.state;
            if (yu.current) {
              const uu = 100 * (Ru.catchZonePosition - Ru.Yu / 2);
              yu.current.style.left = `${uu}%`, yu.current.style.width = 100 * Ru.Yu + "%", Ru.isCatching !== Xu.current && (Xu.current = Ru.isCatching, Ru.isCatching ? yu.current.classList.add("catching") : yu.current.classList.remove("catching"))
            }
            Ku.current && (Ku.current.style.left = 100 * Ru.moverPosition + "%"), Nu.current && (Nu.current.value = Ru.progress)
          }));
          return () => {
            uu()
          }
        }), [Bu]), (0, Ju.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, Ju.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, Ju.jsx)(Qu.d, {
              text: Vu
            })
          }), (0, Ju.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: Nu
          }), (0, Ju.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, Ju.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: yu
            }), (0, Ju.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: Ku,
              children: (0, Ju.jsx)("span", {
                children: ru && (0, Ju.jsx)(Qu.d, {
                  text: [{
                    icon: ru,
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
    var Su = yu(610);
    const pu = (0, Eu.memo)((function(uu) {
        let {
          initialParameters: Ru
        } = uu;
        const yu = (0, Eu.useRef)(null),
          Ku = Ru.label,
          Nu = Ru.uR,
          {
            icon: Xu,
            scale: Vu,
            rotation: ru
          } = null !== Ru && void 0 !== Ru ? Ru : {},
          Bu = 100 * (.5 - Nu / 2),
          xu = 100 * Nu,
          pu = (0, mu.f)();
        return (0, Eu.useEffect)((() => {
          const uu = pu.onFrame((() => {
            const uu = pu.getState();
            if (!uu.isActive || !yu.current) return;
            const Ru = uu.state;
            yu.current.style.left = 100 * Ru.markerPosition + "%"
          }));
          return () => {
            uu()
          }
        }), [pu]), (0, Ju.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, Su.E)(Vu) && {
              "--scale": Vu
            },
            ...!(0, Su.E)(ru) && {
              "--rotation": `${ru}deg`
            }
          },
          children: [Xu && (0, Ju.jsx)(Qu.d, {
            text: [{
              icon: Xu
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, Ju.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, Ju.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${Bu}%`,
                width: `${xu}%`
              }
            }), (0, Ju.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: yu
            })]
          }), (0, Ju.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, Ju.jsx)(Qu.d, {
              text: Ku
            })
          })]
        })
      })),
      Tu = (0, Eu.memo)((function(uu) {
        let {
          initialParameters: Ru
        } = uu;
        const yu = (0, Eu.useRef)(null),
          [Ku, Nu] = (0, Eu.useState)((() => new Array(Ru.yR).fill("pending"))),
          [Xu, Vu] = (0, Eu.useState)((() => {
            const uu = Ru.QR;
            return (0, Su.E)(uu) || uu <= 0 ? [] : new Array(uu).fill("pending")
          })),
          ru = Ru.label,
          {
            icon: Bu
          } = Ru,
          xu = (0, Eu.useRef)(0),
          pu = (0, Eu.useRef)(0),
          Tu = (0, Eu.useRef)([]),
          Wu = (0, mu.f)();
        return (0, Eu.useEffect)((() => {
          const uu = Wu.onFrame((() => {
            const uu = Wu.getState();
            if (!uu.isActive || !yu.current) return;
            const Ru = uu.state,
              Eu = 30 + 60 * Ru.outerCircleProgress;
            if (yu.current.setAttribute("r", String(Eu)), !0 === Ru.lastClickResult && Ru.successes > xu.current) {
              yu.current.classList.remove("QTERhythmClickOuterCircle--miss"), yu.current.classList.add("QTERhythmClickOuterCircle--hit");
              const uu = setTimeout((() => {
                var uu;
                null === (uu = yu.current) || void 0 === uu || uu.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              Tu.current.push(uu)
            } else if (!1 === Ru.lastClickResult && Ru.misses > pu.current) {
              yu.current.classList.remove("QTERhythmClickOuterCircle--hit"), yu.current.classList.add("QTERhythmClickOuterCircle--miss");
              const uu = setTimeout((() => {
                var uu;
                null === (uu = yu.current) || void 0 === uu || uu.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              Tu.current.push(uu)
            }
            Ru.successes === xu.current && Ru.misses === pu.current || (xu.current = Ru.successes, pu.current = Ru.misses, Nu((uu => {
              const yu = [...uu];
              for (let Eu = 0; Eu < Ru.yR; Eu++) yu[Eu] = Eu < Ru.successes ? "success" : "pending";
              return yu
            })), Vu((uu => {
              if (0 === uu.length) return uu;
              const yu = [...uu];
              for (let Eu = 0; Eu < yu.length; Eu++) yu[Eu] = Eu < Ru.misses ? "miss" : "pending";
              return yu
            })))
          }));
          return () => {
            uu();
            for (const uu of Tu.current) clearTimeout(uu);
            Tu.current = []
          }
        }), [Wu]), (0, Ju.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, Ju.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Ku.map(((uu, Ru) => (0, Ju.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === uu ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, Ru)))
          }), (0, Ju.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, Ju.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, Ju.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, Ju.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: yu
              })]
            }), Bu && (0, Ju.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, Ju.jsx)(Qu.d, {
                text: [{
                  icon: Bu
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), Xu.length > 0 && (0, Ju.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Xu.map(((uu, Ru) => (0, Ju.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === uu ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, Ru)))
          }), (0, Ju.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, Ju.jsx)(Qu.d, {
              text: ru
            })
          })]
        })
      }));

    function Wu(uu) {
      let {
        qte: Ru
      } = uu;
      switch (Ru.type) {
        case "progressBar":
          return (0, Ju.jsx)(Nu, {
            initialParameters: Ru.parameters
          });
        case "timedClick":
          return (0, Ju.jsx)(Bu, {
            initialParameters: Ru.parameters
          });
        case "gravityBar":
          return (0, Ju.jsx)(xu, {
            initialParameters: Ru.parameters
          });
        case "precisionBar":
          return (0, Ju.jsx)(pu, {
            initialParameters: Ru.parameters
          });
        case "rhythmClick":
          return (0, Ju.jsx)(Tu, {
            initialParameters: Ru.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const ju = (0, Eu.memo)((function() {
      const [uu, Ru] = (0, Eu.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, Ku.e)("qteStateUpdated", (uu => {
        Ru(uu)
      })), uu.isActive && uu.type ? (0, Ju.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, Ju.jsx)(Wu, {
          qte: uu
        })
      }) : null
    }))
  },
  4544: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ju,
      f: () => Nu
    });
    var Eu = yu(64),
      Ku = yu(1257),
      Qu = yu(4546);
    const mu = {
        getState: () => Qu.d.getCurrentState(),
        onFrame: Ku.o
      },
      Ju = (0, Eu.createContext)(mu);

    function Nu() {
      return (0, Eu.useContext)(Ju)
    }
  },
  9045: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(1899),
      Ju = yu(1079);

    function Nu(uu) {
      const Ru = Math.floor(uu / 3600),
        yu = Math.floor(uu % 3600 / 60),
        Eu = Math.floor(uu % 60),
        Ku = `${yu.toString().padStart(2,"0")}:${Eu.toString().padStart(2,"0")}`;
      return Ru > 0 ? `${Ru}:${Ku}` : Ku
    }
    const Xu = (0, Eu.memo)((function(uu) {
      let {
        className: Ru
      } = uu;
      const {
        recording: yu,
        seconds: Eu
      } = (0, mu.i)("replayRecorder");
      return yu ? (0, Ju.jsxs)("div", {
        className: Qu()("RecordingIndicator", Ru),
        children: [(0, Ju.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Ju.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, Ju.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Nu(Eu)
        })]
      }) : null
    }))
  },
  36229: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Vu,
      f: () => Bu
    });
    var Eu = yu(64),
      Ku = yu(1311),
      Qu = yu(1170),
      mu = yu(1300),
      Ju = yu(3296),
      Nu = yu(4709),
      Xu = yu(1079);

    function Vu(uu) {
      let {
        loading: Ru,
        schematics: yu,
        onSchematicPicked: Eu,
        selectedSchematicIdList: Ku = [],
        disableAutoExport: Nu
      } = uu;
      const {
        t: Vu
      } = (0, Qu.E)();
      return (0, Xu.jsxs)("div", {
        className: "SchematicList",
        children: [Ru && (0, Xu.jsx)(mu.b, {}), !Ru && 0 === yu.length && (0, Xu.jsx)("div", {
          className: "NoSchematicsText",
          children: Vu("worldBuilder:noSavedSchematic")
        }), !Ru && yu.map((uu => (0, Xu.jsx)(Ju.e, {
          source: {
            type: "schematic",
            schematic: uu
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Eu(uu)
          },
          isSelected: Ku.includes(uu.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: uu.isAutoExported && Nu,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, uu.schematicId)))]
      })
    }

    function ru(uu) {
      let {
        ownedSchematics: Ru,
        currentWorldSchematicId: yu,
        onClose: Ku
      } = uu;
      const {
        t: mu
      } = (0, Qu.E)(), [Ju, ru] = (0, Eu.useState)(null);
      return (0, Xu.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Ju && (0, Xu.jsxs)(Xu.Fragment, {
          children: [(0, Xu.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: mu("worldBuilder:schematicList")
          }), (0, Xu.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: mu("worldBuilder:clickSchematicForOptions")
          }), (0, Xu.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Xu.jsx)(Vu, {
              loading: !1,
              schematics: Ru,
              onSchematicPicked: uu => {
                ru(uu)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Ju && (0, Xu.jsx)(Nu.g, {
          schematic: Ju,
          inSourceWorld: Ju.schematicId === yu,
          onSchematicUpdate: uu => {
            ru(uu)
          },
          onClose: () => {
            ru(null), Ku()
          }
        })]
      })
    }

    function Bu(uu) {
      let {
        ownedSchematics: Ru,
        currentWorldSchematicId: yu,
        onClose: Eu
      } = uu;
      Ku.NotificationProvider.showCustomPopup({
        body: uu => (0, Xu.jsx)(ru, {
          ownedSchematics: Ru,
          currentWorldSchematicId: yu,
          onClose: uu
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Eu,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36693: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => bu,
      g: () => du
    });
    var Eu = yu(4066),
      Ku = yu(1400),
      Qu = yu(64),
      mu = yu(6268),
      Ju = yu(4061),
      Nu = yu(1250),
      Xu = yu(1855),
      Vu = yu(1825),
      ru = yu(1408),
      Bu = yu(1170),
      xu = yu(36702),
      Su = yu(1035),
      pu = yu.n(Su),
      Tu = yu(1269),
      Wu = yu(1043),
      ju = yu(1247),
      Hu = yu(1079);
    const du = "SleepingOverlay";

    function bu() {
      const {
        t: uu
      } = (0, Bu.E)(), [Ru, yu] = (0, Qu.useState)(!1), [Su, bu] = (0, Qu.useState)(null), [ku, eu] = (0, Qu.useState)(1), [Au, Du] = (0, Qu.useState)(!1), [Mu, Iu] = (0, Qu.useState)(!1), Gu = (0, Qu.useRef)(0), Uu = (0, Qu.useRef)(!1), nu = (0, Qu.useRef)(!1), su = (0, Qu.useRef)(), tu = (0, Qu.useRef)(null);

      function lu() {
        const uu = null !== Su && void 0 !== Su ? Su : "Rested Speed";
        Xu.gameBridge.send("wakeUp", Mu ? uu : null), tu.current = null, yu(!1), bu(null), eu(1), Du(!1), Iu(!1)
      }

      function gu() {
        return !Au && (lu(), !0)
      }
      return (0, Ku.e)("PlayerPhysicsTypeUpdate", (uu => {
        uu !== tu.current && (tu.current = uu, uu === mu.n.SLEEPING ? (nu.current || (Gu.current = Xu.gameBridge.lookup("cameraZoom", null), nu.current = !0), Uu.current = !0, Xu.gameBridge.send("setCameraZoom", 3), yu(!0), eu(function() {
          for (const uu of Xu.gameBridge.lookup("blocksStandingOn", null)) {
            if (xu.d.leafBeds.includes(uu)) return console.log(`Found leaf bed: ${uu}`), 1;
            if (xu.d.woolBeds.includes(uu)) return console.log(`Found woold bed: ${uu}`), 2;
            if (xu.d.strongBeds.includes(uu)) return console.log(`Found strong bed ${uu}`), 3
          }
          return 1
        }())) : (nu.current = !1, yu(!1), bu(null), eu(1)))
      })), (0, Qu.useEffect)((() => () => {
        (0, Nu.m)(du)
      }), []), (0, Qu.useEffect)((() => {
        Ru ? (0, Nu.o)(du) : ((0, Nu.m)(du), Uu.current && (Xu.gameBridge.send("setCameraZoom", Gu.current), Uu.current = !1))
      }), [Ru]), (0, ju.t)("overlay", su, gu, Ru), (0, Hu.jsx)(Eu.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Ru,
        timeout: 300,
        nodeRef: su,
        unmountOnExit: !0,
        children: (0, Hu.jsx)("div", {
          ref: su,
          onClick: uu => {
            gu() && uu.stopPropagation()
          },
          children: (0, Hu.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Hu.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Ju.g.map((Ru => (0, Hu.jsxs)(Cu, {
                restedEffect: Ru,
                BJ: Su,
                setChosenRestedEffect: bu,
                children: [(0, Hu.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Hu.jsx)(Vu.d, {
                    text: [{
                      icon: Ru
                    }]
                  }), Ju.f[Ru].shortName]
                }), (0, Hu.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: uu(Ju.f[Ru].description, {
                    time: Ju.f[Ru].effectLevelDurations[ku] / 6e4
                  })
                })]
              }, Ru)))
            }), (0, Hu.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Hu.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Hu.jsxs)(ru.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: uu => {
                  Mu ? lu() : (Du(!0), (0, Tu.jb)((() => {
                    Du(!1), Iu(!0)
                  }), !0)), uu.stopPropagation()
                },
                loading: Au,
                children: [!Mu && (0, Hu.jsxs)(Hu.Fragment, {
                  children: [(0, Hu.jsx)(Wu.c, {
                    name: "film"
                  }), " ", uu("classicGame:watchAdToGetRestedPerk")]
                }), Mu && uu("classicGame:wakeUp")]
              }), (0, Hu.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Hu.jsx)("div", {
                  className: pu()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === ku
                  }),
                  children: (0, Hu.jsx)(Vu.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Hu.jsx)("div", {
                  className: pu()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === ku
                  }),
                  children: (0, Hu.jsx)(Vu.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Hu.jsx)("div", {
                  className: pu()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === ku
                  }),
                  children: (0, Hu.jsx)(Vu.d, {
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
    const Cu = (0, Qu.memo)((function(uu) {
      let {
        children: Ru,
        restedEffect: yu,
        BJ: Eu,
        setChosenRestedEffect: Ku
      } = uu;
      return yu === Eu ? (0, Hu.jsx)(ru.l, {
        onClick: uu => {
          uu.stopPropagation()
        },
        children: Ru
      }) : (0, Hu.jsx)(ru.f, {
        onClick: uu => {
          Ku(yu), uu.stopPropagation()
        },
        children: Ru
      })
    }))
  },
  36394: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Xu,
      i: () => Nu
    });
    var Eu = yu(595),
      Ku = yu(1855),
      Qu = yu(1587),
      mu = yu(106),
      Ju = yu(1232);

    function Nu(uu, Ru, yu) {
      return mu.featureFlags.useSocialFeatures && uu && null === (0, Ju.b)(Ru, yu)
    }

    function Xu(uu, Ru) {
      var yu, mu;
      const Ju = Qu.c.getSocialState().friends.find((uu => uu.name.toLowerCase() === Ru.toLowerCase())),
        Nu = Ku.gameBridge.latest("players").byId[uu],
        Xu = void 0 !== Nu && Nu.name === Ru,
        Vu = Xu && null !== (yu = Nu.cosmetics) && void 0 !== yu ? yu : void 0,
        ru = Ju && Vu ? {
          ...Ju,
          cosmetics: Vu
        } : Ju;
      return {
        playerSocialPreview: null !== ru && void 0 !== ru ? ru : {
          isError: !1,
          name: Ru,
          ranks: Xu ? [...Nu.ranks] : [],
          cosmetics: null !== Vu && void 0 !== Vu ? Vu : {},
          nameColour: null !== (mu = null === Vu || void 0 === Vu ? void 0 : Vu.nameColour) && void 0 !== mu ? mu : Eu.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== Ju
      }
    }
  },
  9048: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(4307),
      Ku = yu(4314);

    function Qu(uu) {
      let {
        children: Ru,
        showing: yu,
        globallyUniqueKey: Qu,
        alwaysMountChildren: mu = !1,
        doGameplayStartStopOnShow: Ju = !0,
        keepsMovement: Nu = !1
      } = uu;
      return (0, Ku.c)(!0, yu, Qu, Nu), (0, Eu.e)(Ju, yu), yu || mu ? Ru : null
    }
  },
  4689: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(1079);

    function Ju(uu) {
      let {
        columns: Ru,
        rows: yu,
        getRowKey: Ku,
        renderRow: Ju,
        className: Nu
      } = uu;
      return (0, mu.jsxs)("table", {
        className: Qu()("Table", Nu),
        children: [(0, mu.jsx)("thead", {
          children: (0, mu.jsx)("tr", {
            children: Ru.map((uu => (0, mu.jsx)("th", {
              children: uu.header
            }, uu.key)))
          })
        }), (0, mu.jsx)("tbody", {
          children: yu.map((uu => (0, mu.jsx)(Eu.Fragment, {
            children: Ju(uu)
          }, Ku(uu))))
        })]
      })
    }
  },
  36650: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => eu,
      f: () => Cu,
      h: () => ku,
      l: () => Su
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(64),
      mu = yu(80),
      Ju = yu(1328),
      Nu = yu(1408),
      Xu = yu(1325),
      Vu = yu(1247),
      ru = yu(1170),
      Bu = yu(36656),
      xu = yu(1079);

    function Su(uu) {
      const [Ru, yu] = (0, Qu.useState)((() => (0, Bu.n)(uu)));
      return (0, Qu.useEffect)((() => (yu((0, Bu.n)(uu)), (0, Bu.F)((() => {
        yu((0, Bu.n)(uu))
      })))), [uu]), Ru
    }

    function pu(uu, Ru) {
      "function" === typeof uu ? uu(Ru) : uu && (uu.current = Ru)
    }

    function Tu(uu) {
      let {
        tutorial: Ru,
        step: yu,
        enabled: Eu = !0
      } = uu;
      const Ku = Su(Ru);
      return Eu && Ku === yu
    }

    function Wu(uu, Ru) {
      const yu = (0, Bu.p)(uu),
        Eu = yu.indexOf(Ru);
      return !yu.slice(Eu + 1).some((Ru => (0, Bu.t)(uu, Ru)))
    }

    function ju(uu, Ru, yu, Eu) {
      let {
        tutorial: Ku,
        step: Qu,
        waitForClick: mu = !1,
        onPrevious: Ju
      } = uu;
      const Nu = Ru && (0, Bu.s)(Ku, Qu),
        Xu = Ru && !Wu(Ku, Qu),
        ru = mu ? Eu : yu;
      let xu = null;
      Nu ? xu = () => {
        null === Ju || void 0 === Ju || Ju(), (0, Bu.r)(Ku, Qu)
      } : Xu && (xu = () => {
        (0, Bu.j)(Ku)
      }), (0, Vu.t)("popup", null !== ru && void 0 !== ru ? ru : yu, xu, Ru && null !== ru, null, Nu ? void 0 : "controller:menusSkipTutorial")
    }

    function Hu(uu) {
      let {
        tutorial: Ru,
        step: yu,
        text: Eu,
        waitForClick: Ku = !1,
        onPrevious: Qu
      } = uu;
      const {
        t: mu
      } = (0, ru.E)(), Ju = Wu(Ru, yu);
      return (0, xu.jsxs)(xu.Fragment, {
        children: [(0, xu.jsx)("div", {
          className: "TutorialStepText",
          children: Eu
        }), (0, xu.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Bu.s)(Ru, yu) && (0, xu.jsx)(Nu.f, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Qu || void 0 === Qu || Qu(), (0, Bu.r)(Ru, yu)
            },
            children: mu("tutorial:back")
          }), !Ku && (0, xu.jsx)(Nu.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Bu.e)(yu)
            },
            padDefaultFocus: !0,
            children: mu(Ju ? "tutorial:done" : "tutorial:next")
          }), !Ju && (0, xu.jsx)(Nu.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Bu.j)(Ru)
            },
            children: mu("tutorial:skip")
          })]
        })]
      })
    }
    const du = 6;

    function bu(uu) {
      let {
        rect: Ru,
        margin: yu
      } = uu;
      const Eu = Math.max(0, Ru.top - yu),
        Ku = Ru.bottom + yu,
        Qu = Math.max(0, Ru.left - yu),
        mu = Ru.right + yu;
      return (0, xu.jsxs)(xu.Fragment, {
        children: [(0, xu.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Eu
          }
        }), (0, xu.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ku,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, xu.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Eu,
            left: 0,
            width: Qu,
            height: Ku - Eu
          }
        }), (0, xu.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Eu,
            left: mu,
            right: 0,
            height: Ku - Eu
          }
        })]
      })
    }

    function Cu(uu) {
      let {
        target: Ru,
        placement: yu,
        boxRef: Eu,
        className: Nu,
        spotlightMargin: Vu = du,
        children: ru
      } = uu;
      const {
        getArrowProps: Bu,
        getTooltipProps: Su,
        setTooltipRef: pu,
        setTriggerRef: Tu
      } = (0, Ju.c)({
        placement: yu,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Vu]
      });
      (0, Qu.useLayoutEffect)((() => {
        Tu(Ru)
      }), [Ru, Tu]);
      const Wu = function(uu, Ru) {
        const [yu, Eu] = (0, Qu.useState)(null);
        return (0, Qu.useEffect)((() => {
          if (!Ru || !uu) return void Eu(null);
          let yu = 0,
            Ku = null;
          const Qu = () => {
            const Ru = uu.getBoundingClientRect();
            Ku && Ru.left === Ku.left && Ru.top === Ku.top && Ru.width === Ku.width && Ru.height === Ku.height || (Ku = Ru, Eu(Ru)), yu = requestAnimationFrame(Qu)
          };
          return Qu(), () => {
            cancelAnimationFrame(yu)
          }
        }), [uu, Ru]), yu
      }(Ru, !0);
      (0, Qu.useEffect)((() => {
        null === Ru || void 0 === Ru || Ru.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [Ru]);
      const ju = (0, Qu.useCallback)((uu => {
        pu(uu), Eu && (Eu.current = uu)
      }), [pu, Eu]);
      return (0, mu.createPortal)((0, xu.jsxs)(xu.Fragment, {
        children: [Wu && (0, xu.jsx)(bu, {
          rect: Wu,
          margin: Vu
        }), (0, xu.jsxs)("div", {
          ref: ju,
          ...Su({
            className: Ku()("tooltip-container SmallTextLight TutorialStep", Nu)
          }),
          children: [ru, (0, xu.jsx)("div", {
            ...Bu({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Xu.m)())
    }
    const ku = (0, Qu.forwardRef)((function(uu, Ru) {
      let {
        placement: yu = "right",
        children: Eu,
        ...Ku
      } = uu;
      const mu = Tu(Ku),
        Ju = (0, Qu.useRef)(null),
        Nu = (0, Qu.useRef)(null);
      ju(Ku, mu, Ju, Nu);
      const [Xu, Vu] = (0, Qu.useState)(null), ru = Eu.ref, Bu = (0, Qu.useCallback)((uu => {
        Nu.current = uu, Vu(uu), pu(Ru, uu), pu(ru, uu)
      }), [Ru, ru]);
      return (0, xu.jsxs)(xu.Fragment, {
        children: [(0, Qu.cloneElement)(Eu, {
          ref: Bu
        }), mu && (0, xu.jsx)(Cu, {
          target: Xu,
          placement: yu,
          boxRef: Ju,
          children: (0, xu.jsx)(Hu, {
            ...Ku
          })
        })]
      })
    }));

    function eu(uu) {
      const Ru = Tu(uu),
        yu = (0, Qu.useRef)(null);
      return ju(uu, Ru, yu, null), Ru ? (0, mu.createPortal)((0, xu.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, xu.jsx)("div", {
          ref: yu,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, xu.jsx)(Hu, {
            ...uu
          })
        })
      }), (0, Xu.m)()) : null
    }
  },
  36532: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      c: () => mu,
      d: () => Ju,
      g: () => Nu
    });
    var Eu = yu(64),
      Ku = yu(1100);
    const Qu = 8,
      mu = "InGameHeaderContainer",
      Ju = "TopRightElements";

    function Nu(uu) {
      const [Ru] = (0, Ku.d)(), [yu, Nu] = (0, Eu.useState)(!1);
      return (0, Eu.useLayoutEffect)((() => {
        if (!uu) return;
        const Ru = document.querySelector(`.${mu}`),
          yu = document.querySelector(`.${Ju}`),
          Eu = () => {
            const Eu = uu.getBoundingClientRect(),
              Ku = Ru ? Ru.getBoundingClientRect().right : 0,
              mu = yu ? yu.getBoundingClientRect().left : window.innerWidth,
              Ju = Eu.left < Ku + Qu,
              Xu = Eu.right > mu - Qu;
            Nu(Ju || Xu)
          };
        Eu();
        const Ku = new ResizeObserver(Eu);
        return Ku.observe(uu), Ru && Ku.observe(Ru), yu && Ku.observe(yu), () => {
          Ku.disconnect()
        }
      }), [uu, Ru]), yu
    }
  },
  6336: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = yu(64),
      Ku = yu(47);

    function Qu(uu, Ru) {
      var yu;
      const [Qu, mu] = (0, Eu.useState)(null !== (yu = Ku.i.getItem(uu)) && void 0 !== yu ? yu : Ru);
      return [Qu, Ru => {
        Ku.i.setItem(uu, Ru), mu(Ru)
      }]
    }
  },
  36672: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(27),
      Ku = yu(1269);

    function Qu() {
      const {
        clientEscMenuOptions: uu
      } = (0, Eu.j)(["clientEscMenuOptions"]);
      return (0, Ku.G)() && uu.showChat
    }
  },
  36607: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Nu
    });
    var Eu = yu(2632),
      Ku = yu(3490),
      Qu = yu(2719);
    const mu = ["Unable to create vertex buffer"];
    let Ju = {};

    function Nu(uu, Ru) {
      const yu = new Date;
      console.error(`${yu.getUTCHours()}:${yu.getUTCMinutes()}:${yu.getUTCSeconds()}`, uu, Ru, null === Ru || void 0 === Ru ? void 0 : Ru.stack), mu.includes(null === Ru || void 0 === Ru ? void 0 : Ru.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, Eu.e)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${Ru.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, Qu.logError)("warning", `${uu}\n ${Ru} "\n" ${null===Ru||void 0===Ru?void 0:Ru.stack}`);
      const Ku = uu + Ru + (null === Ru || void 0 === Ru ? void 0 : Ru.stack);
      Ku in Ju || ((0, Qu.logError)("error", `${uu}\n ${Ru} "\n" ${null===Ru||void 0===Ru?void 0:Ru.stack}`), Ju[Ku] = !0)
    }(0, Ku.onGameReset)((() => {
      Ju = {}
    }))
  },
  4611: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => tu,
      g: () => su
    });
    var Eu = yu(4617),
      Ku = yu(330);
    const Qu = 120,
      mu = 260,
      Ju = 1.15,
      Nu = 1.2,
      Xu = 2,
      Vu = 1.08,
      ru = .8,
      Bu = .95,
      xu = 8,
      Su = "[\"')\\]\u300d\u300f\uff09]*",
      pu = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Su}$`),
      Tu = new RegExp(`[?\uff1f]${Su}$`),
      Wu = new RegExp(`[!\uff01]${Su}$`),
      ju = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Hu = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      du = new RegExp(`[${Hu}]`),
      bu = new RegExp(`[${Hu}]|[^${Hu}]+`, "g"),
      Cu = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function ku(uu) {
      let Ru = 2166136261;
      for (let yu = 0; yu < uu.length; yu++) Ru ^= uu.charCodeAt(yu), Ru = Math.imul(Ru, 16777619);
      return (Ru >>> 0) / 4294967295 * 2 - 1
    }

    function eu(uu) {
      var Ru;
      if (du.test(uu)) return 1;
      const yu = uu.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Eu = yu.replace(/[^0-9]/g, "");
      if (Eu.length > 0 && !/\p{L}/u.test(yu)) return Math.min(Eu.length, 4);
      const Ku = null !== (Ru = yu.match(Cu)) && void 0 !== Ru ? Ru : [];
      if (0 === Ku.length) {
        var Qu, mu;
        const uu = null !== (Qu = null === (mu = yu.match(/\p{L}/gu)) || void 0 === mu ? void 0 : mu.length) && void 0 !== Qu ? Qu : 0;
        return 0 === uu ? 0 : Math.min(Math.max(1, Math.round(uu / 2.5)), xu)
      }
      const Ju = yu.replace(/[^\p{L}]/gu, ""),
        Nu = Ku.length > 1 && "e" === Ku.at(-1) && Ju.endsWith("e") && !Ju.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(uu.replace(/[^\p{L}]/gu, ""));
      return Math.min(Ku.length - (Nu ? 1 : 0), xu)
    }

    function Au(uu) {
      return uu.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Du(uu) {
      const Ru = uu.replace(/[^\p{L}]/gu, "");
      return Ru.length >= 2 && Ru === Ru.toUpperCase() && Ru !== Ru.toLowerCase()
    }

    function Mu(uu, Ru) {
      var yu;
      const xu = Ru && (0, Eu.k)(Ru),
        Su = null !== (yu = null === xu || void 0 === xu ? void 0 : xu.syllableMs) && void 0 !== yu ? yu : Eu.c,
        Hu = function(uu) {
          const Ru = [];
          for (const Eu of (0, Ku.ic)(uu))
            if ("string" === typeof Eu)
              for (const uu of Eu.split(/(\s+)/)) {
                if ("" === uu) continue;
                if (/^\s+$/.test(uu)) {
                  Ru.push({
                    kind: "space",
                    text: uu
                  });
                  continue
                }
                if (!du.test(uu)) {
                  Ru.push({
                    kind: "word",
                    text: uu,
                    delayMs: 0
                  });
                  continue
                }
                let Eu = !0;
                for (const Ku of null !== (yu = uu.match(bu)) && void 0 !== yu ? yu : []) {
                  var yu;
                  const uu = Ru.at(-1);
                  Eu || "word" !== (null === uu || void 0 === uu ? void 0 : uu.kind) || du.test(Ku) || /[\p{L}\p{N}]/u.test(Ku) ? (Eu || Ru.push({
                    kind: "space",
                    text: "\u200b"
                  }), Ru.push({
                    kind: "word",
                    text: Ku,
                    delayMs: 0
                  }), Eu = !1) : uu.text += Ku
                }
              } else Ru.push({
                kind: "icon",
                text: Eu.icon,
                delayMs: 0
              });
          return Ru
        }(uu),
        Cu = [];
      let Mu = [];
      for (const Eu of Hu) "space" !== Eu.kind && (Mu.push(Eu), pu.test(Eu.text) && (Cu.push(Mu), Mu = []));
      Cu.push(Mu);
      const Iu = [];
      let Gu = 0;
      for (const Eu of Cu) {
        var Uu, nu;
        const uu = null !== (Uu = null === (nu = Eu.at(-1)) || void 0 === nu ? void 0 : nu.text) && void 0 !== Uu ? Uu : "",
          Ru = Tu.test(uu),
          yu = Wu.test(uu),
          Ku = Eu.map((uu => "word" === uu.kind ? eu(uu.text) : 1)),
          Hu = Ku.findLastIndex((uu => uu > 0));
        for (const [Tu, Wu] of Eu.entries()) {
          const uu = "word" === Wu.kind,
            Eu = Ku[Tu];
          Wu.delayMs = Gu;
          for (let Ku = 0; xu && Ku < Eu; Ku++) {
            const {
              intonation: Qu
            } = xu;
            let mu = Hu > 0 ? -Qu.declineSemitones * (Tu / Hu) : 0;
            mu += ku(`${Au(Wu.text)}|${Ku}`) * Qu.variationSemitones;
            const pu = Math.min(1, Qu.variationSemitones);
            let ju = xu.glideSemitones,
              du = 1;
            yu && (mu += Qu.exclaimLiftSemitones, du *= Ju), Ru && Tu === Hu && (mu += Qu.questionRiseSemitones * (Eu > 1 ? .5 + .5 * Ku / (Eu - 1) : 1), Ku === Eu - 1 && (ju = Math.abs(ju) + Qu.questionRiseSemitones / 2)), uu && Du(Wu.text) && (mu += Xu * pu, du *= Nu), Eu > 1 && 0 === Ku && (mu += ru * pu, du *= Vu), Iu.push({
              atMs: Gu + Ku * Su,
              semitones: mu,
              glideSemitones: ju,
              durationMs: Ku < Eu - 1 ? Math.min(xu.durationMs, Su * Bu) : xu.durationMs,
              level: du
            })
          }
          Gu += Eu * Su + (pu.test(Wu.text) ? mu : ju.test(Wu.text) ? Qu : 0)
        }
      }
      return {
        pieces: Hu.map((uu => "space" === uu.kind ? uu : "icon" === uu.kind ? {
          kind: "icon",
          icon: uu.text,
          delayMs: uu.delayMs
        } : {
          kind: "word",
          text: uu.text,
          delayMs: uu.delayMs
        })),
        blips: Iu
      }
    }
    var Iu = yu(1170),
      Gu = yu(1224),
      Uu = yu(1862);

    function nu(uu) {
      if ("string" === typeof uu) return uu;
      const Ru = Gu.f.get().getCurrentLanguageCode();
      return (0, Iu.q)(Ru, uu.translationKey, (0, Iu.o)(uu.params, Uu.d.shown))
    }

    function su(uu) {
      const Ru = void 0 === uu.voice ? null : (0, Eu.m)(uu.voice),
        yu = Ru && (0, Eu.k)(Ru);
      return {
        plan: Mu(nu(uu.line), yu),
        synth: yu
      }
    }

    function tu(uu) {
      const Ru = [];
      let yu = [];
      for (const [Ku, Qu] of uu.entries()) {
        var Eu;
        "space" === Qu.kind && (" " !== Qu.text || "icon" !== (null === (Eu = uu[Ku + 1]) || void 0 === Eu ? void 0 : Eu.kind)) ? (yu.length > 0 && Ru.push(yu), Ru.push([Qu]), yu = []) : yu.push(Qu)
      }
      return yu.length > 0 && Ru.push(yu), Ru
    }
  },
  36524: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku
    });
    const Eu = [{
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

    function Ku(uu, Ru, yu) {
      const Ku = Math.abs(uu - Ru),
        Qu = Date.now() - yu;
      for (const mu of Eu)
        if (uu < mu.maxDist) return Ku >= mu.hardUpdateDist || Qu > mu.timeBetweenSoftChecks && Ku >= mu.softUpdateDist;
      return !1
    }
  },
  36720: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      h: () => Qu,
      i: () => Ku
    });
    const Eu = [.25, .5, 1, 2, 4, 8, 16];

    function Ku(uu, Ru) {
      const yu = Eu;
      let Ku = yu.indexOf(uu);
      return -1 === Ku && (Ku = yu.findIndex((Ru => Ru >= uu)), -1 === Ku && (Ku = yu.length - 1)), "up" === Ru ? yu[Math.min(Ku + 1, yu.length - 1)] : yu[Math.max(Ku - 1, 0)]
    }

    function Qu(uu) {
      return uu <= Eu[0]
    }

    function mu(uu) {
      return uu >= Eu[Eu.length - 1]
    }
  },
  36760: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      e: () => Ku
    });
    const Eu = "data-replay-ui-active",
      Ku = [{
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
  36762: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu,
      f: () => ru,
      j: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(36760);

    function mu() {
      const uu = {};
      for (const {
          group: Ru
        }
        of Qu.e) uu[Ru] = !0;
      return uu
    }
    let Ju = mu();

    function Nu() {
      Ku.k.Op("replayViewer|uiVisibilityChanged")
    }

    function Xu() {
      return Ju
    }

    function Vu(uu, Ru) {
      Ju[uu] !== Ru && (Ju = {
        ...Ju,
        [uu]: Ru
      }, "nametag" === uu && Eu.d.set({
        areNametagsHidden: !Ru
      }), Nu())
    }

    function ru() {
      Ju = mu(), Eu.d.set({
        areNametagsHidden: !1
      }), Nu()
    }
  },
  9100: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      c: () => Ku,
      e: () => Vu
    });
    var Eu = yu(1517);

    function Ku(uu) {
      var Ru;
      return {
        ...mu.store,
        yaw: mu.store.yaw + (null !== (Ru = Eu.b[uu].previewYaw) && void 0 !== Ru ? Ru : 0)
      }
    }
    const Qu = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mu = {
        player: Qu,
        store: {
          ...Qu,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ju(uu, Ru) {
      uu instanceof Promise ? uu.then(Ru).catch((uu => {
        console.error("Couldn't open the preview", uu)
      })) : Ru(uu)
    }
    class Nu {
      constructor(uu) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ju(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height), null !== this.view && uu.show(this.view))
        }))
      }
      show(uu) {
        var Ru;
        this.view = uu, null === (Ru = this.opened) || void 0 === Ru || Ru.show(uu)
      }
      resize(uu, Ru) {
        var yu;
        this.size = {
          width: uu,
          height: Ru
        }, null === (yu = this.opened) || void 0 === yu || yu.resize(uu, Ru)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    class Xu {
      constructor(uu) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(uu).then((uu => uu.ready)), Ju(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.opened) || void 0 === Ru ? void 0 : Ru.isReady()) && void 0 !== uu && uu
      }
      setCosmetic(uu, Ru) {
        var yu;
        null === (yu = this.opened) || void 0 === yu || yu.setCosmetic(uu, Ru)
      }
      playEmote(uu) {
        var Ru;
        null === (Ru = this.opened) || void 0 === Ru || Ru.playEmote(uu)
      }
      setOrbit(uu) {
        var Ru;
        null === (Ru = this.opened) || void 0 === Ru || Ru.setOrbit(uu)
      }
      resetCamera() {
        var uu;
        null === (uu = this.opened) || void 0 === uu || uu.resetCamera()
      }
      async untilDrawn(uu) {
        var Ru;
        await this.ready, await (null === (Ru = this.opened) || void 0 === Ru ? void 0 : Ru.untilDrawn(uu))
      }
      resize(uu, Ru) {
        var yu;
        this.size = {
          width: uu,
          height: Ru
        }, null === (yu = this.opened) || void 0 === yu || yu.resize(uu, Ru)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    const Vu = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(uu) {
        this.host = uu
      }
      setDefaultHost(uu) {
        this.makeDefault = uu
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(uu) {
        return new Nu(this.current().openMob(uu))
      }
      openPet(uu) {
        return new Nu(this.current().openPet(uu))
      }
      openMobLineup(uu) {
        return new Nu(this.current().openMobLineup(uu))
      }
      openCharacter(uu, Ru) {
        return new Xu(this.current().openCharacter(uu, Ru))
      }
    }
  },
  9098: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.b,
      f: () => Eu.c,
      g: () => Eu.e
    });
    var Eu = yu(9100);
    class Ku {
      constructor(uu) {
        this.load = uu, this.loaded = null, this.loading = null
      }
      run(uu) {
        return null !== this.loaded ? uu(this.loaded) : (this.loading ??= this.load().then((uu => (this.loaded = uu, uu)), (uu => {
          throw this.loading = null, uu
        })), this.loading.then(uu))
      }
    }
    class Qu {
      constructor() {
        this.mobScene = new Ku((() => Promise.all([yu.e(69), yu.e(226), yu.e(225), yu.e(244), yu.e(94), yu.e(245), yu.e(72), yu.e(71), yu.e(242), yu.e(70), yu.e(252), yu.e(246), yu.e(251), yu.e(249), yu.e(241), yu.e(218), yu.e(264), yu.e(222), yu.e(236), yu.e(247), yu.e(250), yu.e(74), yu.e(196), yu.e(215), yu.e(219), yu.e(93), yu.e(113), yu.e(234), yu.e(73), yu.e(112), yu.e(153)]).then((() => yu(40647))))), this.characterScene = new Ku((() => Promise.all([yu.e(69), yu.e(226), yu.e(225), yu.e(244), yu.e(94), yu.e(245), yu.e(72), yu.e(71), yu.e(242), yu.e(70), yu.e(252), yu.e(246), yu.e(251), yu.e(249), yu.e(241), yu.e(218), yu.e(264), yu.e(222), yu.e(236), yu.e(247), yu.e(250), yu.e(74), yu.e(196), yu.e(215), yu.e(219), yu.e(93), yu.e(113), yu.e(234), yu.e(73), yu.e(112), yu.e(152)]).then((() => yu(40755)))))
      }
      openMob(uu) {
        return this.mobScene.run((Ru => Ru.openMobPreview(uu)))
      }
      openPet(uu) {
        return this.mobScene.run((Ru => Ru.openPetPreview(uu)))
      }
      openMobLineup(uu) {
        return this.mobScene.run((Ru => Ru.openMobLineupPreview(uu)))
      }
      openCharacter(uu, Ru) {
        return this.characterScene.run((yu => yu.openCharacterPreview(uu, Ru)))
      }
    }
    Eu.e.setDefaultHost((() => new Qu))
  },
  36602: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      i: () => Qu
    });
    const Eu = new Map;

    function Ku(uu) {
      var Ru;
      return null === uu ? null : null !== (Ru = Eu.get(uu)) && void 0 !== Ru ? Ru : null
    }

    function Qu(uu, Ru) {
      return Eu.set(uu, Ru), () => {
        Eu.get(uu) === Ru && Eu.delete(uu)
      }
    }
  },
  36449: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      d: () => pu,
      h: () => Tu,
      k: () => Ju,
      o: () => Bu,
      p: () => Wu,
      q: () => ru,
      u: () => Hu,
      v: () => Su,
      w: () => ju
    });
    var Eu = yu(27),
      Ku = yu(34);
    const Qu = "clientGameInventoryButtonsChanged",
      mu = new Map;

    function Ju() {
      return [...mu.values()].sort(((uu, Ru) => {
        var yu, Eu;
        return (null !== (yu = uu.order) && void 0 !== yu ? yu : 0) - (null !== (Eu = Ru.order) && void 0 !== Eu ? Eu : 0)
      }))
    }
    let Nu = null;

    function Xu(uu) {
      Nu = uu
    }
    let Vu = !1;

    function ru(uu) {
      Vu = !0;
      try {
        uu.onClick()
      } finally {
        Vu = !1
      }
      uu.panel && "clientGame" === Eu.d.get("openInGameMenuName") && Xu(uu.id)
    }

    function Bu() {
      return Vu
    }

    function xu() {
      return Ju().filter((uu => uu.panel && !uu.disabled))
    }

    function Su(uu) {
      const Ru = xu(),
        yu = Ru.findIndex((uu => uu.id === Nu));
      return !(yu < 0 || Ru.length < 2) && (ru(Ru[(yu + uu + Ru.length) % Ru.length]), !0)
    }

    function pu() {
      return null !== Nu && xu().length > 1
    }

    function Tu() {
      Xu(null)
    }

    function Wu() {
      "inventory" !== Eu.d.get("openInGameMenuName") && Xu(null)
    }

    function ju() {
      const uu = Nu;
      return Xu(null), uu
    }

    function Hu(uu) {
      return mu.set(uu.id, uu), Ku.k.Op(Qu, Ju(), !0), () => {
        mu.get(uu.id) === uu && (mu.delete(uu.id), Ku.k.Op(Qu, Ju()))
      }
    }
  },
  36445: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      f: () => Tu,
      i: () => Wu,
      m: () => Bu,
      o: () => Xu,
      q: () => pu,
      u: () => xu,
      w: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(36449);
    const Ju = "clientGameUiChanged";
    let Nu = null;

    function Xu() {
      return Nu
    }

    function Vu(uu, Ru) {
      const yu = {
        content: uu,
        menu: Ru
      };
      return Nu = yu, Ku.k.Op(Ju, Nu, !0), () => {
        Nu === yu && (Nu = null, Su = !1, Tu(), Ku.k.Op(Ju, null))
      }
    }
    let ru = null;

    function Bu() {
      return ru
    }

    function xu(uu) {
      return ru = uu, () => {
        ru === uu && (ru = null)
      }
    }
    let Su = !1;

    function pu() {
      const uu = Eu.d.get("openInGameMenuName");
      "clientGame" !== uu && (Su = "inventory" === uu), (0, mu.o)() || (0, mu.h)(), (0, Qu.o)(Qu.b), Eu.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Tu() {
      ju(!1)
    }

    function Wu() {
      ju(Su)
    }

    function ju(uu) {
      "clientGame" === Eu.d.get("openInGameMenuName") && Eu.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, mu.h)(), Su = !1
    }
  },
  36736: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => fR,
      c: () => aR
    });
    var Eu = yu(4053),
      Ku = yu(610),
      Qu = yu(3548),
      mu = yu(3576),
      Ju = yu.n(mu);
    const Nu = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      Xu = "EV_boolean",
      Vu = "EV_double",
      ru = "EV_string",
      Bu = "EV_doubleArr",
      xu = "EV_armour",
      Su = "EV_other",
      pu = "EV_cosmetics",
      Tu = "OEV_boolean",
      Wu = "OEV_int",
      ju = "OEV_double",
      Hu = "OEV_string",
      du = "OEV_stringArr",
      bu = "OEV_meshScaling",
      Cu = "IV_int",
      ku = "IV_string",
      eu = "IV_doubleArr",
      Au = "IV_double",
      Du = "HV_int",
      Mu = "HV_slots",
      Iu = "EnvV_string",
      Gu = "EnvV_double",
      Uu = "EnvV_doubleArr",
      nu = "EnvV_boolean",
      su = {
        type: ru,
        name: ru,
        position: Bu,
        rotation: Bu,
        scale: Vu,
        speed: Vu,
        jumping: Xu,
        crouching: Xu,
        cameraPitch: Vu,
        armSwinging: Xu,
        heldItemName: ru,
        heldItemEnchantmentTier: ru,
        pose: ru,
        followingEId: ru,
        ridingVehicleEId: ru,
        leaderboardTop: ru,
        meshKind: ru,
        meshOpts: ru,
        followingOffset: Bu,
        shouldMatchFollowingEntityRotation: Xu,
        meshOffset: Bu,
        baseRenderHeading: Vu,
        armour: xu,
        MI: Su,
        playerCustomisations: pu,
        variation: ru,
        metaInfo: ru,
        soundName: ru,
        volume: Vu,
        refDistance: Vu,
        maxHearDist: Vu,
        rate: Vu,
        aiState: ru
      },
      tu = {
        opacity: ju,
        zIndex: Wu,
        overlayColour: Hu,
        canSee: Tu,
        meshScaling: bu,
        nameTagInfo: Hu,
        multilineTextBox: Hu,
        hasPriorityNametag: Tu,
        ranks: du,
        nameColour: Hu,
        _isAlive: Tu,
        _invisibleEffect: Tu,
        _invincible: Tu,
        killfeedColour: Hu,
        hideNameSeed: Wu,
        _glowingEffect: Tu,
        lockHeadToBody: Tu
      },
      lu = {
        itemName: ku,
        amount: Cu,
        position: eu,
        size: Au,
        attributes: ku
      },
      gu = {
        skyBox: Iu,
        fogColourOverride: Iu,
        fogChunkDistanceOverride: Gu,
        cameraTint: Uu,
        fogOnSkybox: nu,
        fogBlockDistanceOverride: Gu
      },
      cu = {
        type: "array",
        items: "double"
      },
      Lu = {
        type: "array",
        items: "int"
      },
      zu = {
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
      Fu = {
        type: "map",
        values: cu
      };

    function wu(uu, Ru) {
      return {
        type: "record",
        name: uu,
        fields: [{
          name: "x",
          type: Ru
        }]
      }
    }
    const Zu = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", wu(Tu, "boolean"), wu(Wu, "int"), wu(ju, "double"), wu(Hu, "string"), wu(du, {
              type: "array",
              items: "string"
            }), wu(bu, Fu)]
          }]
        }
      },
      hu = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", wu(Xu, "boolean"), wu(Vu, "double"), wu(ru, "string"), wu(Bu, cu), wu(xu, zu), wu(Su, Zu), wu(pu, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      Pu = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", wu(Cu, "int"), wu(ku, "string"), wu(Au, "double"), wu(eu, cu)]
          }]
        }
      },
      iu = {
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
      Yu = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", wu(Du, "int"), wu(Mu, iu)]
        }]
      },
      ou = {
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
      qu = {
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
      Ou = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", wu(Iu, "string"), wu(Gu, "double"), wu(Uu, cu), wu(nu, "boolean")]
          }]
        }
      },
      vu = [{
        name: "sA",
        type: "record",
        fields: [{
          name: "pos",
          type: Lu
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
          type: Lu
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
      au = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "AK",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "IK",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "GK",
              type: ["null", "string", cu],
              default: null
            }, {
              name: "UK",
              type: ["null", "double"],
              default: null
            }, {
              name: "nK",
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
          name: "XQ",
          type: "string"
        }, {
          name: "VQ",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "rQ",
          type: "double"
        }, {
          name: "BQ",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "vy",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: cu
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "mR",
          type: "string"
        }, {
          name: "sR",
          type: ["null", "double"],
          default: null
        }, {
          name: "tR",
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
          name: "IQ",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "GQ",
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
      fu = [{
        name: "position",
        type: cu
      }, {
        name: "direction",
        type: cu
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

    function uR() {
      const uu = [{
        name: "entities",
        type: {
          type: "map",
          values: hu
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: Pu
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: fu
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
              items: Yu
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", ou],
        default: null
      }];
      return uu.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "mR",
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
      }), uu.push({
        name: "uiElements",
        type: qu
      }, {
        name: "environment",
        type: Ou
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: vu
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: au
        }
      }), uu
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
                name: "sr",
                type: "int"
              }, {
                name: "position",
                type: cu
              }, {
                name: "direction",
                type: cu
              }, {
                name: "easing",
                type: cu
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
    let yR;

    function ER(uu) {
      if (9 === uu) return yR ??= (Ru = [{
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
            name: "eD",
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
              type: Lu
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
            fields: uR()
          }
        }
      }, RR], Ju().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: Ru
      }, {
        YB: Object.create(null)
      })), yR;
      var Ru
    }
    var KR = yu(36743);
    let QR, mR, JR, NR;
    const XR = 12;
    var VR, rR;
    const BR = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, !1, 3, 16, 512, 15, 2, 4, 1023, 127, 31, 128, 18, 32, 5, 24, 10, 19, 64, 65535, 111, !0, 112, 113, 108, null, 9, 11];

    function xR(uu) {
      return typeof VR[uu] === BR[5] ? VR[uu] = function(uu) {
        var Ru, yu, Eu, Ku, Qu, mu, Ju;
        for (TR(Ru = "" + (uu || ""), yu = Ru.length, Eu = [], Ku = BR[0], Qu = BR[0], mu = -BR[1]), Ju = BR[0]; Ju < yu; Ju++) {
          var Nu = '*0~Jh?mF%K&4qbZ;YT`k|NEpOg2Ge,1}]vWiIM_/oVSD+#H8L{C=awlnx"c)fU$QX>9(.Bu[:^!357PjRdAz<y@6rst'.indexOf(Ru[Ju]);
          if (Nu !== -BR[1])
            if (mu < BR[0]) mu = Nu;
            else {
              TR(mu += Nu * BR[12], Ku |= mu << Qu, Qu += (mu & BR[13]) > BR[14] ? BR[15] : BR[16]);
              do {
                TR(Eu.push(Ku & BR[3]), Ku >>= BR[2], Qu -= BR[2])
              } while (Qu > BR[9]);
              mu = -BR[1]
            }
        }
        return mu > -BR[1] && Eu.push((Ku | mu << Qu) & BR[3]), SR(Eu)
      }(rR[uu]) : VR[uu]
    }

    function SR(uu) {
      return typeof Ey !== BR[5] && Ey ? (new Ey).decode(new Ky(uu)) : typeof Qy !== BR[5] && Qy ? Qy.from(uu).toString("utf-8") : Ny(uu)
    }

    function pR() {}

    function TR() {
      TR = function() {}
    }
    var WR, jR;
    TR(VR = {}, rR = ["qqh,|a4kgZ()4~nVtx0", '4[9]>I80FcOOLGI1G|]K])c`/|Da6_>O7T<w&"UbUx/^>OtVhle7xQ["|KS', "Q^J]j5Kw+whKriGi*lE5#.Q8Af}BuZyESp>=y[Xc#4TJW{|G[#~", "F.N5z)RoD|j;CMm`)Z~]`abwifa^:;V}if6K", 'fLBF}am1s$97/282(=%K*jqOal"^2_xi9=]{mL("KT', "[lA?aHbwucn5izqk?!,F", 'f|Q{TnzVklP;8Z@VI[J&nWmu)4xiWU),RJ1h"f,i`k', "3|NnsyA@Il60N:okD$$aQnmOkkU", "Q)7!rz1~?", 'IKN&nQvk:T,j$MJTY]C]:LRHHNVi<[h1%,=7[$3Fkfkcfz$1~]5,"<JQU)W', '>lfnu!iFzK*vyhxW|HBh*!`OzKBi"LLW?fmK|)WOzlLxz2ok7Z<?6v_qKn/', 'mlRlTn2a`Q%Y|G%}!4xm{.p8K&ELeGu`|Qm54Ln,,Nru_UJ1L"FK', 'Y2Pa%LLH(l5!*L}MBMHeN"4FQxaBrLD2zJB!{.U0', "LMD]t^aH4T{N[_W1*lh,mw7jXfC5<8nW]D.&", 'vp:mY!y0ob{{"Y~OI"o3f/wVwXR%]J/O3.%38{2Ij%na>O6ex2~', 'sZp{3!WaubWL_UzGh[L{VUH~~"0G|[QSWKJ', "[mle>w#b~fG>TLhDh;pv~w5ad;VL?:*S=o@eC<B0", "GW$FJ@co8Nz;whhTD>0", "bDB!Bn<a)Z", "uST3.If1%b", 'n>nmRz;B+%KL,hC/#|Ol8/acd"R(DGmO;{9,+=Nk"TQ^/GQSIMC]_{*', 'P>bFJ@?Q<lAHq;Mk`lI}qn[38N08sL4_!|6aWUOO(f~c7I,p{"anv8z0J', 'P>~GN"?VW"9H^h^/]K@F)=u`{q_5j;o`Tl6h%5L`AfK.vY<G)[!,P!*', '|`J]"/v8H`z?e[3k@u1{e', 'aL47`C|%;Q:uJA"i.Mx{2P"b=kr,BI,i=K:l[I^0', '%]0PJ$(=$).R:O;|!Lz2QWv8|lBwuB]Os$K1*!sTyc(7?IQp_D*m6"B3h', '&[YKhjPWh"LT!BOW82T1zB0wIX7`(Amg1HB!Uc#F2T', "a[(!PC<@_cDRKM[gFl^lSl@qWQai6uVko,~", "Z203;_oI`KBhMhoM6$@{<#>bQq;.UgF}uK0lP$Difw43}z%}q]j5/QRmOTT.0", 't4U}_A@H:T)7ZUtEEqQaE"pFL`}5,:b', 'P)?a;I8k5wd;nAGV74l5d"E%.kB7Nf}SppueP":mW;60G_kG9=[l[I/0', "wLenGomShk)hjuAo1WFvyaQ,tZNndIY2!$weZ", '091e,oK37)3{{Y"p>$e7[ftOP`KbCM#/f.eF5CP`jweTvhko#m"m', "&D!%HQco2)HOubI`6SM}|", "iLdmCuMF+4iNIJ._sJz%N", 'M|n^VMk8"Tg&aG3kseKGP5MFWk', "KQf}0LLH*;=5t2`W", "yZVlQ/SaH`[R~_aWW;Vm", "QZZnSiMk<bd%?L*S#>i,Hu=0", "E[i]<$l~v9$g/c~O*Hi]%@@oPxF8/c)V_|5,Hxwb9fHN0", ",,/aioXq?kUa9bvM^.Q{}^G8Oc1c!B4_BM>l|", ">T*Pdz*", '<Ls%wwq%d"6!H_QMU[.2ea>"~q#N9{3/|0', 'O25w/i2I(K+}0L,,X.BeH7/iXK"xh/%`qH0', 'r4a!voocQ;Y.dRYG1"~?!f5at$&JnZJ`=#j^1loo7x|A"hZGl"QK,ob0', '#m,}a:5cRwx5Qz[MR)*G!52O"Z_BFCPo+qY1J!Kbh', 'H"]K%!NF,9F3YI&_vLa}ZnNdEcd7F/EW~!j^.j]q*qb&bYP2YH|,A#gi[b', "pme&Mo{iD>aF/2XT.Te,q$0bOcK1M:i1HmnhR!AWmk3x4~b", "[L{]l<#88w$0g:RWAub!KI`%TQ.hV:JTj423nc}V3$b:*", "yWt%E[/0", '3WI7a=gF>Kd{8_f1se{GQ7;g"ZVJTf<W?"J', 'b"mFrvnF]9nhaG=G_20l55?FJ', "Pe%KC.*", "TQT=Ad*", "9##5H74FCK&3D~aWTl@{,UI1$4?Mw:wio,>m", 'q"yCFw@oQ`eGcMok+|G7T5`@P`u`(AJ`@mHFL/*', "g2+&Ad5!Aq/", "&[HKhLMb^ZI&Vh>}Eqf&$wIcQ`Cicdi`hh]K,", 'k[gG"H;wdl6!0', "LDa&N5<c?", 'k2OK^"8i0;v5cZCG$>/h', "(=@alW&``;nRPure</i,,", "y>R{MxZ~", '[.S=dvjQ;NskK<2I*{AwvRGwH)F.cUtYA)*l1y|HH`"i.J', "5xi!Zn{FsZ2J4A,T!L}h", 'O."]#MSRpbuNkCmOX.H^^5/"q$vjfIbk*qV3l<^",Z1|BOZ/+pp5f/W~', "9Ki7qnIId;E=r8eiD|_eP$sT$QwRUM0I&pEhQf.ODx6I8c)V", 'j=zwyCwF|"^(Qui}{2S]mLl1zll', 'QJ[atzUV>"6E2UWM/>|!r[>3))M}+JlG6Tsm', 'tJn5UcQ=RK!4Y[BgWf&3=Hn3,)fN:GQphpl}{.aaf%vJ8ch1".U}Y', "h][eAI]q0lwgS{b", "d)_KZdh%Mc`JF_%k3Ma,`Paa{;n}+GD/N=p1?f.OiKA]0", "}p:K~IjVgcpn{Lb", 'G|o1+R/8IKg:J2"e4hu}r)qI$4DRSgWOh.PKXH(3EXUFhJGI=Lp1T"p0', "LD.7ez|O{K|jk[__DqBF.n~%IK^iH{(g(lJ]BW*Oe$L", 'n>{GdvkkW;BQlMrY&HVG`z"0]Q.7*YnimK]Kt#qHm', 'I[0mS.P`:|"hJ_nWN!YP/Q)pz"+$r)#k:.<[f=Lc|X"', "bqW=]o(0", "I8%qI14}", ">:gi@d^}", "9Vh6i", "LVsfJ,W*", '"o(J', "7U_bNd|O.S!8dq&d", "cH1J@d<oVB^j9~h[", "OH|Y{[dOKJ.eQqVd", "7<T{mkuoB@Mzjq0V", ".S4{_vBa/8mmnYO", "P:xL#ip*", "M$0M=7E*", "(NK<@", "|EH+g6vO", "FSMF$eZ]", "TlH%A", "H6(d$:x0$T}V@m", "88c_a(0u=p}y@0", "a#Ik~#0tiK}{D%", "~w$jgjMOhtDsvA", "!3yT7Qfh!;Zs/v", "5(KD5b$HTk&", "r!cRe90]", "ppsdf", "Baz];F;}", "aIpqm1*}", "0~gqy<2*kTP.h?%NbVFoEEZj+B/p($%N+3z]+b0:Y&p`Ssb~$~W9o", "ZV(gO`!S>#|tQGaUez5s))*%^;qliPaUt9,$ww4TeO|3r@QfFH", '|;vXP"(SlW1fU_~EE;%VNrP[<n3p)PBN67Fp!', "0f~[", "+&|.5n@}", "qnA)m:P}", "U.{$t", "KEsx", "REA)vi^}", "B.q_", "ZE96aYp}", '1$6HMg"/', "7i#`", "7RjHQ9*[", "|oQR", "Ai>xbDo["]), TR(yy = function() {
      var uu, Ru, yu, Eu = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      TR(uu = void 0, Ru = []);
      try {
        TR(uu = Object, Ru[BR[11]]("".__proto__.constructor.name))
      } catch (Ky) {}
      uu: for (yu = BR[0]; yu < Eu[BR[4]]; yu++) try {
        var Ku;
        for (uu = Eu[yu](), Ku = BR[0]; Ku < Ru[BR[4]]; Ku++)
          if (typeof uu[Ru[Ku]] === BR[5]) continue uu;
        return uu
      } catch (Ky) {}
      return uu || this
    }() || {}, Ey = yy.TextDecoder, Ky = yy.Uint8Array, Qy = yy.XS, my = yy.String || String, Jy = yy.Array || Array, Ny = function() {
      var uu, Ru, yu = new Jy(BR[27]);
      return TR(uu = my[BR[8]] || my.fromCharCode, Ru = []),
        function(Eu) {
          var Ku, Qu, mu, Ju;
          for (TR(Qu = void 0, mu = Eu[BR[4]], Ru[BR[4]] = BR[0]), Ju = BR[0]; Ju < mu;) TR(Qu = Eu[Ju++], Qu <= BR[25] ? Ku = Qu : Qu <= 223 ? Ku = (Qu & BR[26]) << BR[7] | Eu[Ju++] & BR[6] : Qu <= 239 ? Ku = (Qu & BR[21]) << BR[10] | (Eu[Ju++] & BR[6]) << BR[7] | Eu[Ju++] & BR[6] : my[BR[8]] ? Ku = (Qu & BR[9]) << BR[28] | (Eu[Ju++] & BR[6]) << BR[10] | (Eu[Ju++] & BR[6]) << BR[7] | Eu[Ju++] & BR[6] : (Ku = BR[6], Ju += BR[18]), Ru[BR[11]](yu[Ku] || (yu[Ku] = uu(Ku))));
          return Ru.join("")
        }
    }()), (() => {
      function uu(uu) {
        return typeof VR[uu] === BR[5] ? VR[uu] = function(uu) {
          var Ru, yu, Eu, Ku, Qu, mu, Ju;
          for (TR(Ru = "" + (uu || ""), yu = Ru.length, Eu = [], Ku = BR[0], Qu = BR[0], mu = -BR[1]), Ju = BR[0]; Ju < yu; Ju++) {
            var Nu = 'K"}_@TSx5]oNMe)V?04/y,bu*liDvnL9qh#%X!;3~7([U`.Ra$spw:WACI=m^FQk&B|{8d6Yz>2+<1ErHGZgOJjcPft'.indexOf(Ru[Ju]);
            if (Nu !== -BR[1])
              if (mu < BR[0]) mu = Nu;
              else {
                TR(mu += Nu * BR[12], Ku |= mu << Qu, Qu += (mu & BR[13]) > BR[14] ? BR[15] : BR[16]);
                do {
                  TR(Eu.push(Ku & BR[3]), Ku >>= BR[2], Qu -= BR[2])
                } while (Qu > BR[9]);
                mu = -BR[1]
              }
          }
          return mu > -BR[1] && Eu.push((Ku | mu << Qu) & BR[3]), SR(Eu)
        }(rR[uu]) : VR[uu]
      }
      xR(77) in pR && function() {
        var uu, Ru = function(Ru, yu, Eu) {
          var Ku = {};
          return Eu.length !== Ru.length + yu.length ? BR[17] : uu(Ru, yu, Eu, BR[0], BR[0], BR[0], Ku)
        };
        TR(uu = function(Ru, yu, Eu, Ku, Qu, mu, Ju) {
          var Nu = BR[17];
          return mu >= Eu.length ? BR[37] : void 0 !== Ju["" + Ku + Qu + mu] ? Ju["" + Ku + Qu + mu] : (Eu[mu] === Ru[Ku] && Eu[mu] === yu[Qu] ? Nu = uu(Ru, yu, Eu, Ku + BR[1], Qu, mu + BR[1], Ju) || uu(Ru, yu, Eu, Ku, Qu + BR[1], mu + BR[1], Ju) : Eu[mu] === Ru[Ku] ? Nu = uu(Ru, yu, Eu, Ku + BR[1], Qu, mu + BR[1], Ju) : Eu[mu] === yu[Qu] && (Nu = uu(Ru, yu, Eu, Ku, Qu + BR[1], mu + BR[1], Ju)), Ju["" + Ku + Qu + mu] = Nu, Nu)
        }, console.log(Ru))
      }();
      const Ru = BR[19],
        yu = uu(78) + uu(79) + uu(80),
        Eu = [BR[0], BR[1], BR[22], BR[18]].map((uu => {
          let Ru = BR[0];
          for (let Eu = BR[18]; Eu >= BR[0]; Eu--) {
            function Ku(uu) {
              var Ru, yu, Eu, Ku, Qu, mu, Ju;
              for (TR(Ru = "" + (uu || ""), yu = Ru.length, Eu = [], Ku = BR[0], Qu = BR[0], mu = -BR[1]), Ju = BR[0]; Ju < yu; Ju++) {
                var Nu = 'a*]mtd6XuASYDKVp3ZbU?J1!FklM@f<HPqGBi.oe0E}Q_7>9:&v^cRrICTy,425|#$z~sw[L/")W8On=hN+(xj%{;`g'.indexOf(Ru[Ju]);
                if (Nu !== -BR[1])
                  if (mu < BR[0]) mu = Nu;
                  else {
                    TR(mu += Nu * BR[12], Ku |= mu << Qu, Qu += (mu & BR[13]) > BR[14] ? BR[15] : BR[16]);
                    do {
                      TR(Eu.push(Ku & BR[3]), Ku >>= BR[2], Qu -= BR[2])
                    } while (Qu > BR[9]);
                    mu = -BR[1]
                  }
              }
              return mu > -BR[1] && Eu.push((Ku | mu << Qu) & BR[3]), SR(Eu)
            }

            function Qu(uu) {
              return typeof VR[uu] === BR[5] ? VR[uu] = Ku(rR[uu]) : VR[uu]
            }

            function mu() {
              var uu = function() {
                var uu, Ru, yu = BR[0];

                function Eu(uu, Ru) {
                  return Nu(mu(Xu(uu), Xu(Ru)))
                }

                function Ku(uu, Ru, yu) {
                  return function(uu, Ru) {
                    var yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu = Ru.length;
                    for (yu = Array(), Eu = Array(Math.ceil(uu.length / BR[22])), mu = BR[0]; mu < Eu.length; mu++) Eu[mu] = uu.charCodeAt(mu * BR[22]) << BR[2] | uu.charCodeAt(mu * BR[22] + BR[1]);
                    for (; Eu.length > BR[0];) {
                      for (TR(Xu = Array(), Nu = BR[0]), mu = BR[0]; mu < Eu.length; mu++) TR(Nu = (Nu << BR[19]) + Eu[mu], Ju = Math.floor(Nu / Vu), Nu -= Ju * Vu), (Xu.length > BR[0] || Ju > BR[0]) && (Xu[Xu.length] = Ju);
                      TR(yu[yu.length] = Nu, Eu = Xu)
                    }
                    for (Ku = "", mu = yu.length - BR[1]; mu >= BR[0]; mu--) Ku += Ru.charAt(yu[mu]);
                    for (Qu = Math.ceil(uu.length * BR[2] / (Math.log(Ru.length) / Math.log(BR[22]))), mu = Ku.length; mu < Qu; mu++) Ku = Ru[BR[0]] + Ku;
                    return Ku
                  }(mu(Xu(uu), Xu(Ru)), yu)
                }

                function mu(uu, Ru) {
                  var yu, Eu, Ku = Vu(uu);
                  Ku.length > BR[19] && (Ku = du(Ku, uu.length * BR[2]));
                  var Qu = Array(BR[19]),
                    mu = Array(BR[19]);
                  for (yu = BR[0]; yu < BR[19]; yu++) TR(Qu[yu] = 909522486 ^ Ku[yu], mu[yu] = 1549556828 ^ Ku[yu]);
                  return Eu = du(Qu.concat(Vu(Ru)), BR[20] + Ru.length * BR[2]), ru(du(mu.concat(Eu), BR[20] + 256))
                }

                function Ju(uu) {
                  var Ru, Eu, Ku, mu;

                  function Ju(uu) {
                    return typeof VR[uu] === BR[5] ? VR[uu] = function(uu) {
                      var Ru, yu, Eu, Ku, Qu, mu, Ju;
                      for (TR(Ru = "" + (uu || ""), yu = Ru.length, Eu = [], Ku = BR[0], Qu = BR[0], mu = -BR[1]), Ju = BR[0]; Ju < yu; Ju++) {
                        var Nu = 'dO]zxrBWhKfNlRZv2@73,/uIiA{Fk.GT|[$`651_M8?YU&m}EL9<*%tna^pDq~"PgS>QeJw+:0XsV)!bjc#;H4=Cyo('.indexOf(Ru[Ju]);
                        if (Nu !== -BR[1])
                          if (mu < BR[0]) mu = Nu;
                          else {
                            TR(mu += Nu * BR[12], Ku |= mu << Qu, Qu += (mu & BR[13]) > BR[14] ? BR[15] : BR[16]);
                            do {
                              TR(Eu.push(Ku & BR[3]), Ku >>= BR[2], Qu -= BR[2])
                            } while (Qu > BR[9]);
                            mu = -BR[1]
                          }
                      }
                      return mu > -BR[1] && Eu.push((Ku | mu << Qu) & BR[3]), SR(Eu)
                    }(rR[uu]) : VR[uu]
                  }
                  for (TR(Ru = yu ? Qu(BR[14]) + Qu(89) + Ju(90) : Ju(BR[12]) + Ju(92) + Ju(93), Eu = "", Ku = void 0), mu = BR[0]; mu < uu.length; mu++) TR(Ku = uu.charCodeAt(mu), Eu += Ru.charAt(Ku >>> BR[23] & BR[21]) + Ru.charAt(Ku & BR[21]));
                  return Eu
                }

                function Nu(Ru) {
                  var yu, Eu, Ku, mu;

                  function Ju(uu) {
                    return typeof VR[uu] === BR[5] ? VR[uu] = function(uu) {
                      var Ru, yu, Eu, Ku, Qu, mu, Ju;
                      for (TR(Ru = "" + (uu || ""), yu = Ru.length, Eu = [], Ku = BR[0], Qu = BR[0], mu = -BR[1]), Ju = BR[0]; Ju < yu; Ju++) {
                        var Nu = '}7v0%AB,).6WmupMRZ/t<;g&LfwEl2yr>"P[c8bC+?~aYUGX!D1Hkh{T(3F=i]KezV9S#s:n@4_5jNI$`OJ^Qoqx*|d'.indexOf(Ru[Ju]);
                        if (Nu !== -BR[1])
                          if (mu < BR[0]) mu = Nu;
                          else {
                            TR(mu += Nu * BR[12], Ku |= mu << Qu, Qu += (mu & BR[13]) > BR[14] ? BR[15] : BR[16]);
                            do {
                              TR(Eu.push(Ku & BR[3]), Ku >>= BR[2], Qu -= BR[2])
                            } while (Qu > BR[9]);
                            mu = -BR[1]
                          }
                      }
                      return mu > -BR[1] && Eu.push((Ku | mu << Qu) & BR[3]), SR(Eu)
                    }(rR[uu]) : VR[uu]
                  }
                  for (TR(yu = Qu(94) + Ju(95) + Ju(96) + Ju(97) + Ju(98) + Ju(99), Eu = "", Ku = Ru.length), mu = BR[0]; mu < Ku; mu += BR[18]) {
                    var Nu, Xu = Ru.charCodeAt(mu) << BR[19] | (mu + BR[1] < Ku ? Ru.charCodeAt(mu + BR[1]) << BR[2] : BR[0]) | (mu + BR[22] < Ku ? Ru.charCodeAt(mu + BR[22]) : BR[0]);
                    for (Nu = BR[0]; Nu < BR[23]; Nu++) mu * BR[2] + Nu * BR[7] > Ru.length * BR[2] ? Eu += uu : Eu += yu.charAt(Xu >>> BR[7] * (BR[18] - Nu) & BR[6])
                  }
                  return Eu
                }

                function Xu(uu) {
                  var Ru, yu, Eu, Ku = "";
                  for (Ru = -BR[1]; ++Ru < uu.length;) TR(yu = uu.charCodeAt(Ru), Eu = Ru + BR[1] < uu.length ? uu.charCodeAt(Ru + BR[1]) : BR[0]), 55296 <= yu && yu <= 56319 && 56320 <= Eu && Eu <= 57343 && TR(yu = 65536 + ((yu & BR[24]) << BR[32]) + (Eu & BR[24]), Ru++), yu <= BR[25] ? Ku += String.fromCharCode(yu) : yu <= 2047 ? Ku += String.fromCharCode(192 | yu >>> BR[7] & BR[26], BR[27] | yu & BR[6]) : yu <= BR[35] ? Ku += String.fromCharCode(224 | yu >>> BR[10] & BR[21], BR[27] | yu >>> BR[7] & BR[6], BR[27] | yu & BR[6]) : yu <= 2097151 && (Ku += String.fromCharCode(240 | yu >>> BR[28] & BR[9], BR[27] | yu >>> BR[10] & BR[6], BR[27] | yu >>> BR[7] & BR[6], BR[27] | yu & BR[6]));
                  return Ku
                }

                function Vu(uu) {
                  var Ru, yu = Array(uu.length >> BR[22]);
                  for (Ru = BR[0]; Ru < yu.length; Ru++) yu[Ru] = BR[0];
                  for (Ru = BR[0]; Ru < uu.length * BR[2]; Ru += BR[2]) yu[Ru >> BR[30]] |= (uu.charCodeAt(Ru / BR[2]) & BR[3]) << BR[31] - Ru % BR[29];
                  return yu
                }

                function ru(uu) {
                  var Ru, yu = "";
                  for (Ru = BR[0]; Ru < uu.length * BR[29]; Ru += BR[2]) yu += String.fromCharCode(uu[Ru >> BR[30]] >>> BR[31] - Ru % BR[29] & BR[3]);
                  return yu
                }

                function Bu(uu, Ru) {
                  return uu >>> Ru | uu << BR[29] - Ru
                }

                function xu(uu, Ru) {
                  return uu >>> Ru
                }

                function Su(uu, Ru, yu) {
                  return uu & Ru ^ ~uu & yu
                }

                function pu(uu, Ru, yu) {
                  return uu & Ru ^ uu & yu ^ Ru & yu
                }

                function Tu(uu) {
                  return Bu(uu, BR[22]) ^ Bu(uu, BR[15]) ^ Bu(uu, 22)
                }

                function Wu(uu) {
                  return Bu(uu, BR[7]) ^ Bu(uu, BR[43]) ^ Bu(uu, 25)
                }

                function ju(uu) {
                  return Bu(uu, BR[9]) ^ Bu(uu, BR[28]) ^ xu(uu, BR[18])
                }

                function Hu(uu) {
                  return Bu(uu, 17) ^ Bu(uu, BR[33]) ^ xu(uu, BR[32])
                }

                function du(uu, yu) {
                  var Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, du, Cu, ku = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
                  for (Eu = new Array(BR[34]), TR(uu[yu >> BR[30]] |= BR[27] << BR[31] - yu % BR[29], uu[(yu + BR[34] >> BR[42] << BR[23]) + BR[21]] = yu), Bu = BR[0]; Bu < uu.length; Bu += BR[19]) {
                    for (TR(Ku = ku[BR[0]], Qu = ku[BR[1]], mu = ku[BR[22]], Ju = ku[BR[18]], Nu = ku[BR[23]], Xu = ku[BR[30]], Vu = ku[BR[7]], ru = ku[BR[9]]), xu = BR[0]; xu < BR[34]; xu++) TR(xu < BR[19] ? Eu[xu] = uu[xu + Bu] : Eu[xu] = bu(bu(bu(Hu(Eu[xu - BR[22]]), Eu[xu - BR[9]]), ju(Eu[xu - BR[21]])), Eu[xu - BR[19]]), du = bu(bu(bu(bu(ru, Wu(Nu)), Su(Nu, Xu, Vu)), Ru[xu]), Eu[xu]), Cu = bu(Tu(Ku), pu(Ku, Qu, mu)), ru = Vu, Vu = Xu, Xu = Nu, Nu = bu(Ju, du), Ju = mu, mu = Qu, Qu = Ku, Ku = bu(du, Cu));
                    TR(ku[BR[0]] = bu(Ku, ku[BR[0]]), ku[BR[1]] = bu(Qu, ku[BR[1]]), ku[BR[22]] = bu(mu, ku[BR[22]]), ku[BR[18]] = bu(Ju, ku[BR[18]]), ku[BR[23]] = bu(Nu, ku[BR[23]]), ku[BR[30]] = bu(Xu, ku[BR[30]]), ku[BR[7]] = bu(Vu, ku[BR[7]]), ku[BR[9]] = bu(ru, ku[BR[9]]))
                  }
                  return ku
                }

                function bu(uu, Ru) {
                  var yu = (uu & BR[35]) + (Ru & BR[35]);
                  return (uu >> BR[19]) + (Ru >> BR[19]) + (yu >> BR[19]) << BR[19] | yu & BR[35]
                }
                return uu = "", Ru = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                  hex: function(uu) {
                    return Ju(function(uu) {
                      return ru(du(Vu(uu), uu.length * BR[2]))
                    }(Xu(uu)))
                  },
                  b64: Eu,
                  any: Ku,
                  hex_hmac: function(uu, Ru) {
                    return Ju(mu(Xu(uu), Xu(Ru)))
                  },
                  b64_hmac: Eu,
                  any_hmac: Ku
                }
              }();
              console.log(uu)
            }
            Qu(81) in pR && mu(), Ru = Ru << BR[2] | yu[Qu(100) + Qu(101)](uu * BR[23] + Eu)
          }
          return Ru >>> BR[0]
        })),
        Ku = (uu, Ru) => uu << Ru | uu >>> BR[29] - Ru,
        Qu = (uu, Ru, yu, Eu, Qu) => {
          TR(uu[Ru] += uu[yu], uu[Qu] = Ku(uu[Qu] ^ uu[Ru], BR[19]), uu[Eu] += uu[Qu], uu[yu] = Ku(uu[yu] ^ uu[Eu], BR[10]), uu[Ru] += uu[yu], uu[Qu] = Ku(uu[Qu] ^ uu[Ru], BR[2]), uu[Eu] += uu[Qu], uu[yu] = Ku(uu[yu] ^ uu[Eu], BR[9]))
        };
      NR = (yu, Ku, mu, Ju) => {
        function Nu(uu) {
          return typeof VR[uu] === BR[5] ? VR[uu] = function(uu) {
            var Ru, yu, Eu, Ku, Qu, mu, Ju;
            for (TR(Ru = "" + (uu || ""), yu = Ru.length, Eu = [], Ku = BR[0], Qu = BR[0], mu = -BR[1]), Ju = BR[0]; Ju < yu; Ju++) {
              var Nu = 'y|}/_]*v$?xW3<+EXGR>9sPZr2pl5tKC)!0Idq^8beF4;~@wQ=ONUM.:,o[D&1uLzSBAhc7nHJijm6a#"Y%{fV(gTk`'.indexOf(Ru[Ju]);
              if (Nu !== -BR[1])
                if (mu < BR[0]) mu = Nu;
                else {
                  TR(mu += Nu * BR[12], Ku |= mu << Qu, Qu += (mu & BR[13]) > BR[14] ? BR[15] : BR[16]);
                  do {
                    TR(Eu.push(Ku & BR[3]), Ku >>= BR[2], Qu -= BR[2])
                  } while (Qu > BR[9]);
                  mu = -BR[1]
                }
            }
            return mu > -BR[1] && Eu.push((Ku | mu << Qu) & BR[3]), SR(Eu)
          }(rR[uu]) : VR[uu]
        }
        uu(102);
        const Xu = new DataView(Ku[Nu(BR[40])], Ku[Nu(109) + Nu(110)], XR),
          Vu = new Uint32Array(Ru);
        TR(Vu[Nu(BR[36])](Eu), Vu[Nu(BR[36])](yu, BR[23]), Vu[BR[15]] = Xu[Nu(BR[38]) + Nu(BR[39])](BR[0], BR[37]), Vu[BR[16]] = Xu[Nu(BR[38]) + Nu(BR[39])](BR[23], BR[37]), Vu[BR[21]] = Xu[Nu(BR[38]) + Nu(BR[39])](BR[2], BR[37]));
        const ru = new Uint32Array(Ru),
          Bu = new Uint8Array(ru[Nu(BR[40])]);
        for (let xu = BR[0], Su = mu; xu < Ju[Nu(114)]; xu += Ru * BR[23], Su++) {
          function pu(uu) {
            var Ru, yu, Eu, Ku, Qu, mu, Ju;
            for (TR(Ru = "" + (uu || ""), yu = Ru.length, Eu = [], Ku = BR[0], Qu = BR[0], mu = -BR[1]), Ju = BR[0]; Ju < yu; Ju++) {
              var Nu = '</[^2~0uIR`,{}Pi18M">#)AV:ovOL7e;?p+WBg9l=GXFd(|mtZz_@Kf*yn5$!wUQ&chaY6rs4%THxbCSDJE3.jkNq]'.indexOf(Ru[Ju]);
              if (Nu !== -BR[1])
                if (mu < BR[0]) mu = Nu;
                else {
                  TR(mu += Nu * BR[12], Ku |= mu << Qu, Qu += (mu & BR[13]) > BR[14] ? BR[15] : BR[16]);
                  do {
                    TR(Eu.push(Ku & BR[3]), Ku >>= BR[2], Qu -= BR[2])
                  } while (Qu > BR[9]);
                  mu = -BR[1]
                }
            }
            return mu > -BR[1] && Eu.push((Ku | mu << Qu) & BR[3]), SR(Eu)
          }

          function Tu(uu) {
            return typeof VR[uu] === BR[5] ? VR[uu] = pu(rR[uu]) : VR[uu]
          }

          function Wu() {
            var uu;

            function Ru() {}
            TR(uu = function(uu, yu) {
              var Eu, Ku, Qu, mu, Ju, Nu = BR[0];
              for (TR(Eu = BR[0], Ku = new Ru(BR[0]), Qu = Ku, mu = uu, Ju = yu); mu !== BR[41] || Ju !== BR[41];) TR(Eu = (mu ? mu.val : BR[0]) + (Ju ? Ju.val : BR[0]) + Nu, Nu = Math.floor(Eu / BR[32]), Qu.next = new Ru(Eu % BR[32]), Qu = Qu.next, mu = mu ? mu.next : BR[41], Ju = Ju ? Ju.next : BR[41]);
              return Nu && (Qu.next = new Ru(Nu)), Ku.next
            }, console.log(uu))
          }
          Tu(115) in pR && Wu(), TR(Vu[BR[10]] = Su, ru[Tu(116)](Vu));
          for (let Hu = BR[0]; Hu < BR[32]; Hu++) TR(Qu(ru, BR[0], BR[23], BR[2], BR[10]), Qu(ru, BR[1], BR[30], BR[42], BR[15]), Qu(ru, BR[22], BR[7], BR[32], BR[16]), Qu(ru, BR[18], BR[9], BR[43], BR[21]), Qu(ru, BR[0], BR[30], BR[32], BR[21]), Qu(ru, BR[1], BR[7], BR[43], BR[10]), Qu(ru, BR[22], BR[9], BR[2], BR[15]), Qu(ru, BR[18], BR[23], BR[42], BR[16]));
          for (let du = BR[0]; du < Ru; du++) {
            function bu() {
              var uu;
              TR(uu = function(Ru, yu, Eu, Ku, Qu, mu) {
                var Ju, Nu = BR[41];
                if (!(mu < BR[0])) {
                  if (mu === BR[0]) return Ru.push(yu);
                  for (Ju = Eu; Ju < Ku && !(Qu[Ju] > mu); Ju++) Ju > Eu && Qu[Ju] === Qu[Ju - BR[1]] || TR(Nu = Array.from(yu), Nu.push(Qu[Ju]), uu(Ru, Nu, Ju + BR[1], Ku, Qu, mu - Qu[Ju]))
                }
              }, console.log((function(Ru, yu) {
                var Eu, Ku = [];
                return TR(Eu = Ru.length, Ru.sort(((uu, Ru) => uu - Ru)), uu(Ku, [], BR[0], Eu, Ru, yu)), Ku
              })))
            }
            Tu(117) + "J" in pR && bu(), ru[du] += Vu[du]
          }
          const ju = Math[Tu(118)](Ru * BR[23], Ju[Tu(119)] - xu);
          for (let Cu = BR[0]; Cu < ju; Cu++) Ju[xu + Cu] ^= Bu[Cu]
        }
      }
    })();
    const HR = [55, 0, 1, 8, "c", "a", "i", 7, 5, 6, 4, 255, "length", 213, "d", 3, 84, "f", "undefined", void 0, 138, 63, "fromCodePoint", 12, "push", 91, 8191, 88, 13, 14, 2, 178, "g", 162, 64, 150, 9, "e", 16, 11, 97, "C", 512, 172, "b", 159, 15, 185, 34, 78, 70, 242, 168, 1023, 127, 31, 128, 18, 221, 32, 24, 10, 19, 65535, 157, 33554432, 67108864, 225, 223, "h", 148, 80, 245, 69, 38, 44, 147, 123, 155];

    function dR(...uu) {
      return uu[HR[12]] = HR[2], typeof Ey !== HR[18] && Ey ? (new Ey).decode(new Ky(uu[HR[1]])) : typeof Qy !== HR[18] && Qy ? Qy.from(uu[HR[1]]).toString("utf-8") : Ny(uu[HR[1]])
    }

    function bR(...uu) {
      if (uu[HR[12]] = HR[15], uu[HR[1]] === function(...uu) {
          return uu[HR[12]] = HR[2], typeof WR[uu[HR[1]]] === HR[18] ? WR[uu[HR[1]]] = function(uu) {
            var Ru, yu, Eu, Ku, Qu, mu, Ju;
            for (kR(Ru = "" + (uu || ""), yu = Ru.length, Eu = [], Ku = HR[1], Qu = HR[1], mu = -HR[2]), Ju = HR[1]; Ju < yu; Ju++) {
              var Nu = 'eH3q0u&^t6d,ak:T$s|+RrF28ZE}Wy@7n/DLoIN%<PM.)(i1~>!wXxKj"zUCcB[bhl9_4mp#vOgA]=JG;*5?SV{fYQ`'.indexOf(Ru[Ju]);
              if (Nu !== -HR[2])
                if (mu < HR[1]) mu = Nu;
                else {
                  kR(mu += Nu * HR[25], Ku |= mu << Qu, Qu += (mu & HR[26]) > HR[27] ? HR[28] : HR[29]);
                  do {
                    kR(Eu.push(Ku & HR[11]), Ku >>= HR[3], Qu -= HR[3])
                  } while (Qu > HR[7]);
                  mu = -HR[2]
                }
            }
            return mu > -HR[2] && Eu.push((Ku | mu << Qu) & HR[11]), dR(Eu)
          }(jR[uu[HR[1]]]) : WR[uu[HR[1]]]
        }(100) + HR[41]) return uu[HR[2]] + uu[HR[30]]
    }

    function CR() {}

    function kR() {
      kR = function() {}
    }
    kR(WR = {}, jR = [";j}s0$9kQFg*L)", 'wD!s{gjALz/G=BL7H"R7di7LRt0eU{wh8}o?', "9M~72|hu1!k6F}0*iB_E>qnvOj/Y|d8+H+liD>k<fN/s1KxIwg0])/_", ")aign6gCxEZ|%5z2~2drt}p@HIUUv}fHAy+:Xc?b1!_x_lE7^<j)", "=7~YqM@65,UfD6cK2WFmBrMLMfIg$q+L@RY7s[i&caoeq/k", 'E3/E`rbA3uDI#/8O%Y+i&"8L1Fy<xK@Y?Ea@n}n+)Z3/uM]', "xE%:E}lLBM<i<Fv7Dzt&om7|rzUMv", "A3]Jkq<:xu6", "v&y?xbbSsEK6=dIW><v/KMEA9uFw#}#[8;4@9MPF~]g3@;v+lf)?1._", ")0#)emJ888)EWa<2AZF@pcW~6WTYrMbhQgJh:{_", "qa4YJslgJ0/|>$_*iM{b4d8C!3E/86;D", "|U~)U@a.nbY", "Flv/%r?v?", '_"PY_U}"Xz0t7Kx3tkl@Ly^*7a', 'sDdYQ2"qcMj;)a2dy+eT+5ZFF3^4v', "2,xhy~^yRjD|q5d3=iFmw", 'tk)&2"/~duT8*lQL', "?|wJRn/:ca}Ne;", "1z&Qlm3~3Zb8aKRK8y`p[SB~}0&*qhIWjEOromsCI3", "2k8)udbv:FX$;>22Ckk#nUZ&2T.b[BVKY~K//qaF;", '+&&7Y@2FeZ>,Y;m7Qg%gj"SA0EkQz}A2R+eT9lg&(BZ#R/hH|+o?4l<@lF', '8T$pi,ckHt6#td"Kl:Ni(m|$XB"BC<6L+Ko?tfAL"F_W,M036B2Q3', "$i_ctd~6A", '4lNi<{"@|TUr";fI`Wf@,UCZ#fJrS}`Y1gdsJ|q@G6H;KnvI~k;', "wgp:2n+&EQR)Z/B", "Rz|/T#*~HWJ", "^zLo+@~kA67rG)7qNUP)RnGu,bz<bF6H;&vT8Q!*737*v", 'cGIg69Dv4uT<?$KqB,zT_/V"A(,0M6GY?lk#Z~k@Pk', "y}pg|MzLsEOIN5f&~E~)wrbLxk`49CI[z2BQz/Cv6t#~H2^U0ET7@[zZJ3", "CE3p>$#Zsah", "@ggbQ>.L7,5#q)4h<:^ry/$g%FOQjq+&+zg(1@Gb%Fy|1<(d", "L&9bf,[.jFT|3$zI~lcl*rO@e,:z+{)O0ibmT28Fw8b8msXH)p<@f#_", '07pE6#,Oz3i=WhluYKvOdTS&Jk{fdsEuVZ7@Eq1&AW"', '~K9mJ"abCNEy~n?GDg(hQPk^Lz(hC<>"WEvc}[EA2!G', "5U+rDN:]Uk!ikh+|#YF(i,?.mfSm})", '3&ig(qTO}0|r!*nHS}fsJi)OEWD;uB5"i}8TT2Ev', "_0;/iflZYIg.:>ahI2*:kdA./6*F_[?Gn7^AG", "gllT{<IC7jaI4n4U3g8E5$eU_0U./*eUsEo&:^h&eEOU0$V[x|Y#pek@yF", "!irKRn|F!bK/[<3U1Y*sj{Wm=ZO6][h+(+*s1C630k9p]hJ*X_", "%z+YT#c6iIdP#.kdXM?(I$U*pa6<ka!+Qzi:T2j$mW", "i}aEFru|T!v/p50q@:Lh,6_", "fWrmBd}eGIe3QdF", "Ey+);fB6Q!y]7BNU!}&@..bL<u]Wk;", '8"l@J@MCLzlitBfHx0G/[oLC1Wr&6FQUj"N:c{Y!)', "n7T722<k.6;n?wY&", 'H"QE$ri&.!=N0Gouu,;', 'kmV#efvbJ0A;5B^"TI"s{2eU2uW.%5K&rN;?Ry<3[Fq', "kKl@)/ZL$k_lc</dlTx", '9B<@y~}6Cj{B*hYq&2C)lb[FUTZ|RwXwh"OrGcO@<uNM4n1LI3nm:Qvb:', "`]1E%rUktIfs0$mKEm;", ":sq&Xr,63E`pF}8&PYPiPdd@*F", ':DnmB.)Hj!S#9,!3Q"~7Xc:^pk0e1lpO+~L/*coAXz$#v', "LgYA$q=&qF!<g;z+Fv", "Qgop>{KOtW6B?//d}lQ@aZ~6_,i&L)", "=T+O1.m3>8>3GqTU%i{//$Nyc]6B[<Ad:Tr7x$T6.!w*v", "jZn7B}_", '8}Jpg<T"{EwyoBqO]&3/.q_', 'x)~rod"O^6[@DBaWA~&QI@X"`zOrcd5h+~u/D|2uo]mmJF9L]8Io"TB<GIY', '"KUhkqm6"W]E!;N|9UZgLNSPjus*";MY4zlid21Ll6yN(2T"Igs:', 'k26]+d.8JE(o9q4"+:k&_,]@$aqY%;.OoMF(C6|.&j;o"/q7.YY#}s&uiB', "sz,mKMGA/WYP$..G/R;", "8i^)C6dk3uY;z/cKF8xo/$N^T!E2b}(", "DDOY2MB!ZIS&[6i[cyfA`@GC$Z@rLG#hd,RAlb5v", 'f"v:)}|&gE|', "nYcr,UgS](~i,atWFa!EFQPL70F+6Gn|Xb,QQ6y:0Eg.U6JqVl}T^Z4qyF", "~gCs<,1|}8mtK2y7fi(p)~4x", "#MIpQ[:q@Ene~<829Big!Pu|UE", ":pymn}+u?!^Zx2>Y{7fAj{8g;", "Z+TrErUk&ffGV;>Y87D#PQ0e}k_ld6pOF8vp8,DS:", 'V7I:!6v8r]"P_', 'FKRAC[!OO0YWS}4L!g!:]rhoJa+;DB"7_T%sS{Xf(Wb)oBf*Dg=?x/_', "OajQLsz+?!NBK$hHF)PY]Q[vg,1$B2=ISM~YvPuv", ';p4A]m*x]F2QeM%U"m[Ex/UOUky<CM`L52FAdCIF,BD', "Gl6gKT4x", "PM}Em.k^&jQrqC;D>RTrUe~3Vt", '"k)(*Z~x', "8;7@],Eo1FeqB?(WrIar_9ILv3Pbn/:d@z:Q@6AAxErs#}U3`Uxhj", "Gm?Qa{Sv&fWrQdp*,;OYvqDAGf3*O2td>W9KLi,O@!(FN;", 'Zy"gn#;F,B!3lK]', "fEymYluCyZ!0)l*|7+<raq>^8bDe1|_DrN,mo{igyE{", "hyZp,~&utzDIv", "?KyKul`Z$k9m2F`L2lT)?q[ZUk:PHsv*", 'L}vg5c<:~j:T"5PK$Wxp2oXePb~A4ngUuK_Jzqdqek!i#..2E3x', 'O"QE;m:3Cj>NZ/OHH:{pk{?GC8e)XG]K};R(KSV~WEb@w5XHKp}Tw{x6HI,', "1Bh#3c}@GB4F<$td%I+iI", '=i":}o3*sZFO~Fg"TT<E', "5:{pF$4e8b6#XG+&.f(h%J_", 'Jgz:I5{@KBI2|{mdT"c7bbp3I0ob[B(dD:eE=f28EI>GIw]3"gU#SJUx', "0H6p^c_", 'qlnA#{hAtzFza>%w>WB@VgdOoI/s6Fm[>7T)iP7oRj0es)^"', '+gx&?P%U"WGF0G8Hr7Kh69OqjuX#~B)GO,,m($UqjF^=oK}h|Tb)', 'a8[Yg6T"?', "!IfQI.9m|E=0i/wW&,n7*", ".TV&ymUxz3qPP;qOdyv", "JaFm&i]]dF", ".}~)EQe@;ZL", "jyJ:lfk3V]P4F}]u", "{l&7{<l&5Z)y;{TLhD#ApyUq|,5p;>`+El3piZQS:", "[l#7z}e:0TahEqGL6}*:TN#gJaHMUnv*RlQ@2|,~Hfo)cs8+b_", 'N;AELs?LP,f)@h:3;sTr),"x/FtWv', "o4gt,!_H", "?|6raVaB", "2W8p", ";oHAa}5]cIs`Be", "?p&zkg4W(LrK!e", "OO2Akg>={p9@XA", ":k&:S}9Vu!Ts<e", "<ow@(s4W>p9L%e", "<(mA;qVMp(F", "@Xmt/l$N", "gW]DJ[fB", "LHTLU|{B", "65xFj", "L1dXcQNT", '+M"+f.*p', "EedkH", "1cG]2Y(L2Zw<@Yi6", "]Fd@KZOv$5kHj5n1", "=cDMr*ZN8=&&|QF+", "%F^HV4:_&0/9QicF", "HY(*X,(?XeV4`4]", "6qQ^pS:.", "9$Z^zDJA", ")Cd,zOI.", "z:Q^}iT.", "jB<)Cn;.", "nvYg),A", "!qJr;X@$oCW", "+q:(>=,mK$s", "]va&),CT7yL", "@$.LiTVFK$E", "r|rkAkKI+ye", "dvtr1,uIZ$*", "yw3oMM]/rCr", "G5PBq<fy", "G/,bdD$V", "UZYjdOpV", "@y+4/i=U", "B/h5b~?V", "3,]<||P=F+?", ">j~K?YP8", "v+DC9YE8", "tj!4", "jjFrbYT8", "Y:o0J", "Wj.tA0F", "WjVn)i=8", "ljA4", ">Hr8Q)tO", "wP5WGlTF", "%;2WvLjTfM?s_u}R#J4pVV=.{1*5/g}R{tYa{#%o&~5eDK#;g;|mp", "%;2WvLjTfM?s_u}R#J4pVV=.{1*5/g}Rsn]a$$xF#v?zEY_,<c", ".`{;1CPIhy6G4&Y((`Mw[N1Tx]>7}1z[lDS7k", "iGYT", "@JvlV$HF", "mxnm;6Qbmd", "%;caCyKF", "Diep", ":xEpH", "y5Mp", "e;^m)zc", "kJGWrLKF"]), kR(yy = function(...uu) {
      kR(uu[HR[12]] = HR[1], uu[-HR[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], uu[-HR[13]] = HR[19], uu[HR[14]] = []);
      try {
        kR(uu[-HR[13]] = Object, uu[HR[14]][HR[24]]("".__proto__.constructor.name))
      } catch (jR) {}
      uu: for (uu[HR[15]] = HR[1]; uu[HR[15]] < uu[-HR[16]][HR[12]]; uu[HR[15]]++) try {
        for (uu[-HR[13]] = uu[-HR[16]][uu[HR[15]]](), uu[HR[17]] = HR[1]; uu[HR[17]] < uu[HR[14]][HR[12]]; uu[HR[17]]++)
          if (typeof uu[-HR[13]][uu[HR[14]][uu[HR[17]]]] === HR[18]) continue uu;
        return uu[-HR[13]]
      } catch (jR) {}
      return uu[-HR[13]] || this
    }() || {}, Ey = yy.TextDecoder, Ky = yy.Uint8Array, Qy = yy.XS, my = yy.String || String, Jy = yy.Array || Array, Ny = function() {
      var uu, Ru, yu = new Jy(HR[56]);
      return kR(uu = my[HR[22]] || my.fromCharCode, Ru = []),
        function(...Eu) {
          for (kR(Eu[HR[12]] = HR[2], Eu[HR[5]] = HR[19], Eu[HR[20]] = HR[19], Eu[HR[15]] = Eu[HR[1]][HR[12]], Ru[HR[12]] = HR[1]), Eu[HR[14]] = HR[1]; Eu[HR[14]] < Eu[HR[15]];) kR(Eu[HR[20]] = Eu[HR[1]][Eu[HR[14]]++], Eu[HR[20]] <= HR[54] ? Eu[HR[5]] = Eu[HR[20]] : Eu[HR[20]] <= HR[68] ? Eu[HR[5]] = (Eu[HR[20]] & HR[55]) << HR[9] | Eu[HR[1]][Eu[HR[14]]++] & HR[21] : Eu[HR[20]] <= 239 ? Eu[HR[5]] = (Eu[HR[20]] & HR[46]) << HR[23] | (Eu[HR[1]][Eu[HR[14]]++] & HR[21]) << HR[9] | Eu[HR[1]][Eu[HR[14]]++] & HR[21] : my[HR[22]] ? Eu[HR[5]] = (Eu[HR[20]] & HR[7]) << HR[57] | (Eu[HR[1]][Eu[HR[14]]++] & HR[21]) << HR[23] | (Eu[HR[1]][Eu[HR[14]]++] & HR[21]) << HR[9] | Eu[HR[1]][Eu[HR[14]]++] & HR[21] : (Eu[HR[5]] = HR[21], Eu[HR[14]] += HR[15]), Ru[HR[24]](yu[Eu[HR[5]]] || (yu[Eu[HR[5]]] = uu(Eu[HR[5]]))));
          return Ru.join("")
        }
    }()), (() => {
      function uu(...uu) {
        return uu[HR[12]] = HR[2], typeof WR[uu[HR[1]]] === HR[18] ? WR[uu[HR[1]]] = function(...uu) {
          for (kR(uu[HR[12]] = HR[2], uu[HR[2]] = 'AB.vo4F`K^~GuRqf5$2x<9ijZs&Le#zcgd/=[X;>T{h18|IpWr*Em(C)t+!w:3yPJH%YSM,Dk7N}V0OUQ?nl]a"@6_b', uu[HR[30]] = "" + (uu[HR[1]] || ""), uu[HR[15]] = uu[HR[30]].length, uu[HR[33]] = [], uu[HR[8]] = HR[1], uu[HR[17]] = HR[1], uu[HR[32]] = -HR[2]), uu[HR[31]] = HR[1]; uu[HR[31]] < uu[HR[15]]; uu[HR[31]]++)
            if (uu[HR[6]] = uu[HR[2]].indexOf(uu[HR[30]][uu[HR[31]]]), uu[HR[6]] !== -HR[2])
              if (uu[HR[32]] < HR[1]) uu[HR[32]] = uu[HR[6]];
              else {
                kR(uu[HR[32]] += uu[HR[6]] * HR[25], uu[HR[8]] |= uu[HR[32]] << uu[HR[17]], uu[HR[17]] += (uu[HR[32]] & HR[26]) > HR[27] ? HR[28] : HR[29]);
                do {
                  kR(uu[HR[33]].push(uu[HR[8]] & HR[11]), uu[HR[8]] >>= HR[3], uu[HR[17]] -= HR[3])
                } while (uu[HR[17]] > HR[7]);
                uu[HR[32]] = -HR[2]
              } return uu[HR[32]] > -HR[2] && uu[HR[33]].push((uu[HR[8]] | uu[HR[32]] << uu[HR[17]]) & HR[11]), dR(uu[HR[33]])
        }(jR[uu[HR[1]]]) : WR[uu[HR[1]]]
      } [][HR[12]] = HR[1], uu(101) in CR && function(...Ru) {
        kR(Ru[HR[12]] = HR[1], Ru[HR[5]] = function(...Ru) {
          function yu(...uu) {
            return uu[HR[12]] = HR[2], Nu(mu(ru(uu[HR[1]])))
          }

          function Eu(...uu) {
            return uu[HR[12]] = HR[30], Nu(Ju(ru(uu[HR[1]]), ru(uu[HR[2]])))
          }

          function Ku(uu, Ru) {
            return Xu(Ju(ru(uu), ru(Ru)))
          }

          function Qu(...uu) {
            return uu[HR[12]] = HR[15], Vu(Ju(ru(uu[HR[1]]), ru(uu[HR[2]])), uu[HR[30]])
          }

          function mu(...uu) {
            return uu[HR[12]] = HR[2], xu(Cu(Bu(uu[HR[1]]), uu[HR[1]].length * HR[3]))
          }

          function Ju(...uu) {
            function Ru(...uu) {
              for (kR(uu[HR[12]] = HR[2], uu[HR[5]] = '=NbqkCjTt0*/iu!>Mn]do#IcUL?Y[O_5HSP<@Q&ZK~J"sF43Ezl1xG`,+|}BaD2R:y^$X;v.WrmeA)Vghf%p{(9w867', uu[HR[30]] = "" + (uu[HR[1]] || ""), uu[HR[15]] = uu[HR[30]].length, uu[HR[10]] = [], uu[HR[40]] = HR[1], uu[HR[17]] = HR[1], uu[HR[7]] = -HR[2]), uu[-HR[39]] = HR[1]; uu[-HR[39]] < uu[HR[15]]; uu[-HR[39]]++)
                if (uu[HR[36]] = uu[HR[5]].indexOf(uu[HR[30]][uu[-HR[39]]]), uu[HR[36]] !== -HR[2])
                  if (uu[HR[7]] < HR[1]) uu[HR[7]] = uu[HR[36]];
                  else {
                    kR(uu[HR[7]] += uu[HR[36]] * HR[25], uu[HR[40]] |= uu[HR[7]] << uu[HR[17]], uu[HR[17]] += (uu[HR[7]] & HR[26]) > HR[27] ? HR[28] : HR[29]);
                    do {
                      kR(uu[HR[10]].push(uu[HR[40]] & HR[11]), uu[HR[40]] >>= HR[3], uu[HR[17]] -= HR[3])
                    } while (uu[HR[17]] > HR[7]);
                    uu[HR[7]] = -HR[2]
                  } return uu[HR[7]] > -HR[2] && uu[HR[10]].push((uu[HR[40]] | uu[HR[7]] << uu[HR[17]]) & HR[11]), dR(uu[HR[10]])
            }

            function yu(uu) {
              return typeof WR[uu] === HR[18] ? WR[uu] = Ru(jR[uu]) : WR[uu]
            }
            uu[HR[12]] = HR[30], uu[HR[5]] = Bu(uu[HR[1]]), uu[HR[5]].length > HR[38] && (uu[HR[5]] = Cu(uu[HR[5]], uu[HR[1]].length * HR[3]));
            var Eu = Array(HR[38]),
              Ku = Array(HR[38]);
            for (uu[HR[15]] = HR[1]; uu[HR[15]] < HR[38]; uu[HR[15]]++) kR(Eu[uu[HR[15]]] = 909522486 ^ uu[HR[5]][uu[HR[15]]], Ku[uu[HR[15]]] = 1549556828 ^ uu[HR[5]][uu[HR[15]]]);
            return uu[HR[10]] = Cu(Eu.concat(Bu(uu[HR[2]])), HR[42] + uu[HR[2]].length * HR[3]), xu(Cu(Ku.concat(uu[HR[10]]), bR(yu(109) + HR[41], HR[42], 256)))
          }

          function Nu(...yu) {
            function Eu(...uu) {
              for (kR(uu[HR[12]] = HR[2], uu[HR[2]] = 'lTp(%0=?_xY5e7*N<j:zb]DKAH^+m28EL;f!QqWO"#ZSG,}~1wRFak>|9rtnB[{@cMys.gUXihI$PV3J)ovCdu/&`46', uu[HR[30]] = "" + (uu[HR[1]] || ""), uu[-HR[43]] = uu[HR[30]].length, uu[HR[14]] = [], uu[HR[37]] = HR[1], uu[HR[9]] = HR[1], uu[HR[7]] = -HR[2]), uu[-HR[20]] = HR[1]; uu[-HR[20]] < uu[-HR[43]]; uu[-HR[20]]++)
                if (uu[HR[36]] = uu[HR[2]].indexOf(uu[HR[30]][uu[-HR[20]]]), uu[HR[36]] !== -HR[2])
                  if (uu[HR[7]] < HR[1]) uu[HR[7]] = uu[HR[36]];
                  else {
                    kR(uu[HR[7]] += uu[HR[36]] * HR[25], uu[HR[37]] |= uu[HR[7]] << uu[HR[9]], uu[HR[9]] += (uu[HR[7]] & HR[26]) > HR[27] ? HR[28] : HR[29]);
                    do {
                      kR(uu[HR[14]].push(uu[HR[37]] & HR[11]), uu[HR[37]] >>= HR[3], uu[HR[9]] -= HR[3])
                    } while (uu[HR[9]] > HR[7]);
                    uu[HR[7]] = -HR[2]
                  } return uu[HR[7]] > -HR[2] && uu[HR[14]].push((uu[HR[37]] | uu[HR[7]] << uu[HR[9]]) & HR[11]), dR(uu[HR[14]])
            }

            function Ku(...uu) {
              return uu[HR[12]] = HR[2], typeof WR[uu[HR[1]]] === HR[18] ? WR[uu[HR[1]]] = Eu(jR[uu[HR[1]]]) : WR[uu[HR[1]]]
            }
            yu[HR[12]] = HR[2];
            try {
              Ru[HR[44]]
            } catch (Qu) {
              Ru[HR[44]] = HR[1]
            }
            for (kR(yu[HR[5]] = Ru[HR[44]] ? uu(110) + uu(111) + Ku(112) : Ku(113) + Ku(114) + Ku(115), yu[HR[45]] = "", yu[HR[4]] = HR[19]), yu[HR[14]] = HR[1]; yu[HR[14]] < yu[HR[1]].length; yu[HR[14]]++) kR(yu[HR[4]] = yu[HR[1]].charCodeAt(yu[HR[14]]), yu[HR[45]] += yu[HR[5]].charAt(yu[HR[4]] >>> HR[10] & HR[46]) + yu[HR[5]].charAt(yu[HR[4]] & HR[46]));
            return yu[HR[45]]
          }

          function Xu(...uu) {
            function yu(...uu) {
              for (kR(uu[HR[12]] = HR[2], uu[HR[5]] = '$/x:A]caMeu"j!<5it};0P3qv_p6r@O1H8?^,%+bLNwFVgTIYQsdoySf{ZW&`C~=X2|DzBn*J.#k>E9[4KlG(R)7mhU', uu[HR[47]] = "" + (uu[HR[1]] || ""), uu[HR[4]] = uu[HR[47]].length, uu[HR[10]] = [], uu[HR[8]] = HR[1], uu[HR[9]] = HR[1], uu[HR[7]] = -HR[2]), uu[HR[3]] = HR[1]; uu[HR[3]] < uu[HR[4]]; uu[HR[3]]++)
                if (uu[HR[36]] = uu[HR[5]].indexOf(uu[HR[47]][uu[HR[3]]]), uu[HR[36]] !== -HR[2])
                  if (uu[HR[7]] < HR[1]) uu[HR[7]] = uu[HR[36]];
                  else {
                    kR(uu[HR[7]] += uu[HR[36]] * HR[25], uu[HR[8]] |= uu[HR[7]] << uu[HR[9]], uu[HR[9]] += (uu[HR[7]] & HR[26]) > HR[27] ? HR[28] : HR[29]);
                    do {
                      kR(uu[HR[10]].push(uu[HR[8]] & HR[11]), uu[HR[8]] >>= HR[3], uu[HR[9]] -= HR[3])
                    } while (uu[HR[9]] > HR[7]);
                    uu[HR[7]] = -HR[2]
                  } return uu[HR[7]] > -HR[2] && uu[HR[10]].push((uu[HR[8]] | uu[HR[7]] << uu[HR[9]]) & HR[11]), dR(uu[HR[10]])
            }

            function Eu(...uu) {
              return uu[HR[12]] = HR[2], typeof WR[uu[HR[1]]] === HR[18] ? WR[uu[HR[1]]] = yu(jR[uu[HR[1]]]) : WR[uu[HR[1]]]
            }
            uu[HR[12]] = HR[2];
            try {
              Ru[HR[48]]
            } catch (Qu) {
              Ru[HR[48]] = ""
            }
            for (kR(uu[HR[49]] = Eu(116) + Eu(117) + Eu(118) + Eu(119) + Eu(120), uu[HR[44]] = "", uu[HR[15]] = uu[HR[1]].length), uu[HR[14]] = HR[1]; uu[HR[14]] < uu[HR[15]]; uu[HR[14]] += HR[15])
              for (uu[HR[50]] = uu[HR[1]].charCodeAt(uu[HR[14]]) << HR[38] | (uu[HR[14]] + HR[2] < uu[HR[15]] ? uu[HR[1]].charCodeAt(uu[HR[14]] + HR[2]) << HR[3] : HR[1]) | (uu[HR[14]] + HR[30] < uu[HR[15]] ? uu[HR[1]].charCodeAt(uu[HR[14]] + HR[30]) : HR[1]), uu[HR[9]] = HR[1]; uu[HR[9]] < HR[10]; uu[HR[9]]++) uu[HR[14]] * HR[3] + uu[HR[9]] * HR[9] > uu[HR[1]].length * HR[3] ? uu[HR[44]] += Ru[HR[48]] : uu[HR[44]] += uu[HR[49]].charAt(uu[HR[50]] >>> HR[9] * (HR[15] - uu[HR[9]]) & HR[21]);
            return uu[HR[44]]
          }

          function Vu(...uu) {
            var Ru, yu, Eu, Ku;
            for (kR(uu[HR[12]] = HR[30], uu[-HR[51]] = uu[HR[2]].length, uu[HR[15]] = Array()), uu[HR[10]] = Array(Math.ceil(uu[HR[1]].length / HR[30])), Ru = HR[1]; Ru < uu[HR[10]].length; Ru++) uu[HR[10]][Ru] = uu[HR[1]].charCodeAt(Ru * HR[30]) << HR[3] | uu[HR[1]].charCodeAt(Ru * HR[30] + HR[2]);
            for (; uu[HR[10]].length > HR[1];) {
              for (kR(Ku = Array(), Eu = HR[1]), Ru = HR[1]; Ru < uu[HR[10]].length; Ru++) kR(Eu = (Eu << HR[38]) + uu[HR[10]][Ru], yu = Math.floor(Eu / uu[-HR[51]]), Eu -= yu * uu[-HR[51]]), (Ku.length > HR[1] || yu > HR[1]) && (Ku[Ku.length] = yu);
              kR(uu[HR[15]][uu[HR[15]].length] = Eu, uu[HR[10]] = Ku)
            }
            for (uu[-HR[52]] = "", Ru = uu[HR[15]].length - HR[2]; Ru >= HR[1]; Ru--) uu[-HR[52]] += uu[HR[2]].charAt(uu[HR[15]][Ru]);
            for (uu[HR[9]] = Math.ceil(uu[HR[1]].length * HR[3] / (Math.log(uu[HR[2]].length) / Math.log(HR[30]))), Ru = uu[-HR[52]].length; Ru < uu[HR[9]]; Ru++) uu[-HR[52]] = uu[HR[2]][HR[1]] + uu[-HR[52]];
            return uu[-HR[52]]
          }

          function ru(...uu) {
            var Ru, yu;
            for (kR(uu[HR[12]] = HR[2], uu[HR[5]] = "", uu[HR[30]] = -HR[2]); ++uu[HR[30]] < uu[HR[1]].length;) kR(Ru = uu[HR[1]].charCodeAt(uu[HR[30]]), yu = uu[HR[30]] + HR[2] < uu[HR[1]].length ? uu[HR[1]].charCodeAt(uu[HR[30]] + HR[2]) : HR[1]), 55296 <= Ru && Ru <= 56319 && 56320 <= yu && yu <= 57343 && kR(Ru = 65536 + ((Ru & HR[53]) << HR[61]) + (yu & HR[53]), uu[HR[30]]++), Ru <= HR[54] ? uu[HR[5]] += String.fromCharCode(Ru) : Ru <= 2047 ? uu[HR[5]] += String.fromCharCode(192 | Ru >>> HR[9] & HR[55], HR[56] | Ru & HR[21]) : Ru <= HR[63] ? uu[HR[5]] += String.fromCharCode(224 | Ru >>> HR[23] & HR[46], HR[56] | Ru >>> HR[9] & HR[21], HR[56] | Ru & HR[21]) : Ru <= 2097151 && (uu[HR[5]] += String.fromCharCode(240 | Ru >>> HR[57] & HR[7], HR[56] | Ru >>> HR[23] & HR[21], HR[56] | Ru >>> HR[9] & HR[21], HR[56] | Ru & HR[21]));
            return uu[HR[5]]
          }

          function Bu(...uu) {
            for (kR(uu[HR[12]] = HR[2], uu[HR[5]] = Array(uu[HR[1]].length >> HR[30])), uu[HR[58]] = HR[1]; uu[HR[58]] < uu[HR[5]].length; uu[HR[58]]++) uu[HR[5]][uu[HR[58]]] = HR[1];
            for (uu[HR[58]] = HR[1]; uu[HR[58]] < uu[HR[1]].length * HR[3]; uu[HR[58]] += HR[3]) uu[HR[5]][uu[HR[58]] >> HR[8]] |= (uu[HR[1]].charCodeAt(uu[HR[58]] / HR[3]) & HR[11]) << HR[60] - uu[HR[58]] % HR[59];
            return uu[HR[5]]
          }

          function xu(...uu) {
            for (kR(uu[HR[12]] = HR[2], uu[HR[2]] = ""), uu[HR[30]] = HR[1]; uu[HR[30]] < uu[HR[1]].length * HR[59]; uu[HR[30]] += HR[3]) uu[HR[2]] += String.fromCharCode(uu[HR[1]][uu[HR[30]] >> HR[8]] >>> HR[60] - uu[HR[30]] % HR[59] & HR[11]);
            return uu[HR[2]]
          }

          function Su(...uu) {
            return uu[HR[12]] = HR[30], uu[HR[1]] >>> uu[HR[2]] | uu[HR[1]] << HR[59] - uu[HR[2]]
          }

          function pu(uu, Ru) {
            return uu >>> Ru
          }

          function Tu(...uu) {
            return uu[HR[12]] = HR[15], uu[HR[1]] & uu[HR[2]] ^ ~uu[HR[1]] & uu[HR[30]]
          }

          function Wu(...uu) {
            return uu[HR[12]] = HR[15], uu[HR[1]] & uu[HR[2]] ^ uu[HR[1]] & uu[HR[30]] ^ uu[HR[2]] & uu[HR[30]]
          }

          function ju(...uu) {
            return uu[HR[12]] = HR[2], Su(uu[HR[1]], HR[30]) ^ Su(uu[HR[1]], HR[28]) ^ Su(uu[HR[1]], 22)
          }

          function Hu(...uu) {
            return uu[HR[12]] = HR[2], Su(uu[HR[1]], HR[9]) ^ Su(uu[HR[1]], HR[39]) ^ Su(uu[HR[1]], 25)
          }

          function du(...uu) {
            return uu[HR[12]] = HR[2], Su(uu[HR[1]], HR[7]) ^ Su(uu[HR[1]], HR[57]) ^ pu(uu[HR[1]], HR[15])
          }

          function bu(uu) {
            return Su(uu, 17) ^ Su(uu, HR[62]) ^ pu(uu, HR[61])
          }

          function Cu(...uu) {
            var yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu;
            for (kR(uu[HR[12]] = HR[30], uu[-HR[15]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), uu[HR[15]] = new Array(HR[34])), kR(uu[HR[1]][uu[HR[2]] >> HR[8]] |= HR[56] << HR[60] - uu[HR[2]] % HR[59], uu[HR[1]][(uu[HR[2]] + HR[34] >> HR[36] << HR[10]) + HR[46]] = uu[HR[2]]), Vu = HR[1]; Vu < uu[HR[1]].length; Vu += HR[38]) {
              for (kR(yu = uu[-HR[15]][HR[1]], Eu = uu[-HR[15]][HR[2]], Ku = uu[-HR[15]][HR[30]], Qu = uu[-HR[15]][HR[15]], mu = uu[-HR[15]][HR[10]], Ju = uu[-HR[15]][HR[8]], Nu = uu[-HR[15]][HR[9]], Xu = uu[-HR[15]][HR[7]]), ru = HR[1]; ru < HR[34]; ru++) kR(ru < HR[38] ? uu[HR[15]][ru] = uu[HR[1]][ru + Vu] : uu[HR[15]][ru] = ku(ku(ku(bu(uu[HR[15]][ru - HR[30]]), uu[HR[15]][ru - HR[7]]), du(uu[HR[15]][ru - HR[46]])), uu[HR[15]][ru - HR[38]]), Bu = ku(ku(ku(ku(Xu, Hu(mu)), Tu(mu, Ju, Nu)), Ru[HR[14]][ru]), uu[HR[15]][ru]), xu = ku(ju(yu), Wu(yu, Eu, Ku)), Xu = Nu, Nu = Ju, Ju = mu, mu = ku(Qu, Bu), Qu = Ku, Ku = Eu, Eu = yu, yu = ku(Bu, xu));
              kR(uu[-HR[15]][HR[1]] = ku(yu, uu[-HR[15]][HR[1]]), uu[-HR[15]][HR[2]] = ku(Eu, uu[-HR[15]][HR[2]]), uu[-HR[15]][HR[30]] = ku(Ku, uu[-HR[15]][HR[30]]), uu[-HR[15]][HR[15]] = ku(Qu, uu[-HR[15]][HR[15]]), uu[-HR[15]][HR[10]] = ku(mu, uu[-HR[15]][HR[10]]), uu[-HR[15]][HR[8]] = ku(Ju, uu[-HR[15]][HR[8]]), uu[-HR[15]][HR[9]] = ku(Nu, uu[-HR[15]][HR[9]]), uu[-HR[15]][HR[7]] = ku(Xu, uu[-HR[15]][HR[7]]))
            }
            return uu[-HR[15]]
          }

          function ku(...uu) {
            return kR(uu[HR[12]] = HR[30], uu[-HR[50]] = (uu[HR[1]] & HR[63]) + (uu[HR[2]] & HR[63]), uu[HR[15]] = (uu[HR[1]] >> HR[38]) + (uu[HR[2]] >> HR[38]) + (uu[-HR[50]] >> HR[38])), uu[HR[15]] << HR[38] | uu[-HR[50]] & HR[63]
          }
          return kR(Ru[HR[12]] = HR[1], Ru[HR[44]] = HR[1], Ru[HR[48]] = ""), Ru[HR[14]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
            hex: yu,
            b64: Ku,
            any: Qu,
            hex_hmac: Eu,
            b64_hmac: Ku,
            any_hmac: Qu
          }
        }(), console.log(Ru[HR[5]]))
      }();
      const Ru = HR[36],
        yu = uu(121) + uu(122) + uu(HR[77]) + uu(124) + uu(125) + uu(126),
        Eu = {
          [HR[36]]: uu(HR[54]) + uu(HR[56]) + uu(129) + uu(130) + uu(131) + uu(132) + uu(133) + "1"
        },
        Ku = (...uu) => {
          uu[HR[12]] = HR[2];
          const Ru = Eu[uu[HR[1]]];
          if (!Ru) {
            function yu(...uu) {
              for (kR(uu[HR[12]] = HR[2], uu[HR[2]] = 'UyVmZGt"_zj[#N^{EfF)p9cA2.0QJB@d5xI3>H7Lrq$/P+RbS<?h1X}w&8C`6Y:v=aoT~%;Dek|O4M,liWKng!s*(u]', uu[HR[30]] = "" + (uu[HR[1]] || ""), uu[HR[15]] = uu[HR[30]].length, uu[HR[10]] = [], uu[-HR[64]] = HR[1], uu[HR[9]] = HR[1], uu[HR[7]] = -HR[2]), uu[HR[3]] = HR[1]; uu[HR[3]] < uu[HR[15]]; uu[HR[3]]++)
                if (uu[HR[6]] = uu[HR[2]].indexOf(uu[HR[30]][uu[HR[3]]]), uu[HR[6]] !== -HR[2])
                  if (uu[HR[7]] < HR[1]) uu[HR[7]] = uu[HR[6]];
                  else {
                    kR(uu[HR[7]] += uu[HR[6]] * HR[25], uu[-HR[64]] |= uu[HR[7]] << uu[HR[9]], uu[HR[9]] += (uu[HR[7]] & HR[26]) > HR[27] ? HR[28] : HR[29]);
                    do {
                      kR(uu[HR[10]].push(uu[-HR[64]] & HR[11]), uu[-HR[64]] >>= HR[3], uu[HR[9]] -= HR[3])
                    } while (uu[HR[9]] > HR[7]);
                    uu[HR[7]] = -HR[2]
                  } return uu[HR[7]] > -HR[2] && uu[HR[10]].push((uu[-HR[64]] | uu[HR[7]] << uu[HR[9]]) & HR[11]), dR(uu[HR[10]])
            }

            function Ku(...uu) {
              return uu[HR[12]] = HR[2], typeof WR[uu[HR[1]]] === HR[18] ? WR[uu[HR[1]]] = yu(jR[uu[HR[1]]]) : WR[uu[HR[1]]]
            }

            function Qu(...uu) {
              function Ru(uu) {
                return uu[HR[2]] * HR[66] + (uu[HR[1]] < HR[1] ? HR[65] | uu[HR[1]] : uu[HR[1]])
              }

              function yu(...uu) {
                switch (uu[HR[12]] = HR[2], ((uu[HR[1]] & HR[65]) !== HR[1]) * HR[2] + (uu[HR[1]] < HR[1]) * HR[30]) {
                  case HR[1]:
                    return [uu[HR[1]] % HR[65], Math.trunc(uu[HR[1]] / HR[66])];
                  case HR[2]:
                    return [uu[HR[1]] % HR[65] - HR[65], Math.trunc(uu[HR[1]] / HR[66]) + HR[2]];
                  case HR[30]:
                    return [((uu[HR[1]] + HR[65]) % HR[65] + HR[65]) % HR[65], Math.round(uu[HR[1]] / HR[66])];
                  case HR[15]:
                    return [uu[HR[1]] % HR[65], Math.trunc(uu[HR[1]] / HR[66])]
                }
              }
              uu[HR[12]] = HR[1], kR(uu[HR[5]] = Ru([HR[30], HR[10]]), uu[HR[2]] = Ru([HR[2], HR[30]]), uu[-HR[67]] = uu[HR[5]] + uu[HR[2]], uu[HR[15]] = uu[-HR[67]] - uu[HR[2]], uu[HR[37]] = uu[HR[15]] * HR[30], uu[HR[17]] = uu[HR[37]] / HR[30], console.log(yu(uu[-HR[67]])), console.log(yu(uu[HR[15]])), console.log(yu(uu[HR[37]])), console.log(yu(uu[HR[17]])))
            }
            throw Ku(134) + "n" in CR && Qu(), new Error(Ku(135) + Ku(136) + Ku(137) + Ku(HR[20]) + " v" + uu[HR[1]])
          }
          return [HR[1], HR[2], HR[30], HR[15], HR[10], HR[8], HR[9], HR[7]].map(((...uu) => (uu[HR[12]] = HR[2], parseInt(Ru[function(...uu) {
            return uu[HR[12]] = HR[2], typeof WR[uu[HR[1]]] === HR[18] ? WR[uu[HR[1]]] = function(...uu) {
              for (kR(uu[HR[12]] = HR[2], uu[HR[68]] = 'wnQLojSWiZlKbP0]cdqV!${/)vCgRzB36O(2>4FG*JxhY_%yID"?N=UraX~},7t:+[M^&5H8fA@1<9mp.|kEeu`s#;T', uu[HR[30]] = "" + (uu[HR[1]] || ""), uu[HR[15]] = uu[HR[30]].length, uu[-HR[72]] = [], uu[HR[71]] = HR[1], uu[HR[9]] = HR[1], uu[HR[32]] = -HR[2]), uu[HR[69]] = HR[1]; uu[HR[69]] < uu[HR[15]]; uu[HR[69]]++)
                if (uu[-HR[70]] = uu[HR[68]].indexOf(uu[HR[30]][uu[HR[69]]]), uu[-HR[70]] !== -HR[2])
                  if (uu[HR[32]] < HR[1]) uu[HR[32]] = uu[-HR[70]];
                  else {
                    kR(uu[HR[32]] += uu[-HR[70]] * HR[25], uu[HR[71]] |= uu[HR[32]] << uu[HR[9]], uu[HR[9]] += (uu[HR[32]] & HR[26]) > HR[27] ? HR[28] : HR[29]);
                    do {
                      kR(uu[-HR[72]].push(uu[HR[71]] & HR[11]), uu[HR[71]] >>= HR[3], uu[HR[9]] -= HR[3])
                    } while (uu[HR[9]] > HR[7]);
                    uu[HR[32]] = -HR[2]
                  } return uu[HR[32]] > -HR[2] && uu[-HR[72]].push((uu[HR[71]] | uu[HR[32]] << uu[HR[9]]) & HR[11]), dR(uu[-HR[72]])
            }(jR[uu[HR[1]]]) : WR[uu[HR[1]]]
          }(139)](uu[HR[1]] * HR[3], uu[HR[1]] * HR[3] + HR[3]), HR[38]))))
        };
      kR(QR = (...uu) => (uu[HR[12]] = HR[2], uu[HR[1]] >= Ru), mR = (...uu) => {
        function Ru(...uu) {
          return uu[HR[12]] = HR[2], typeof WR[uu[HR[1]]] === HR[18] ? WR[uu[HR[1]]] = function(...uu) {
            for (kR(uu[HR[12]] = HR[2], uu[HR[74]] = 'FN8meMo{&r4*_!5jLG>hVA~W7U=vQJl}tyEc2fP6?9w+IkXbR]T:x[CKBD#S,Z3gzd$uYHO(|s@q0n)p1i`.<"a^;%/', uu[HR[44]] = "" + (uu[HR[1]] || ""), uu[-HR[73]] = uu[HR[44]].length, uu[-HR[10]] = [], uu[HR[8]] = HR[1], uu[HR[9]] = HR[1], uu[HR[7]] = -HR[2]), uu[HR[69]] = HR[1]; uu[HR[69]] < uu[-HR[73]]; uu[HR[69]]++)
              if (uu[-HR[75]] = uu[HR[74]].indexOf(uu[HR[44]][uu[HR[69]]]), uu[-HR[75]] !== -HR[2])
                if (uu[HR[7]] < HR[1]) uu[HR[7]] = uu[-HR[75]];
                else {
                  kR(uu[HR[7]] += uu[-HR[75]] * HR[25], uu[HR[8]] |= uu[HR[7]] << uu[HR[9]], uu[HR[9]] += (uu[HR[7]] & HR[26]) > HR[27] ? HR[28] : HR[29]);
                  do {
                    kR(uu[-HR[10]].push(uu[HR[8]] & HR[11]), uu[HR[8]] >>= HR[3], uu[HR[9]] -= HR[3])
                  } while (uu[HR[9]] > HR[7]);
                  uu[HR[7]] = -HR[2]
                } return uu[HR[7]] > -HR[2] && uu[-HR[10]].push((uu[HR[8]] | uu[HR[7]] << uu[HR[9]]) & HR[11]), dR(uu[-HR[10]])
          }(jR[uu[HR[1]]]) : WR[uu[HR[1]]]
        }
        uu[HR[12]] = HR[30];
        const yu = crypto[Ru(140) + Ru(141) + Ru(142)](new Uint8Array(XR)),
          Eu = KR[HR[14]][Ru(143) + Ru(144)](uu[HR[2]], {
            [Ru(145)]: HR[2]
          });
        NR(Ku(uu[HR[1]]), yu, HR[2], Eu);
        const Qu = new Uint8Array(XR + Eu[Ru(146)]);
        return kR(Qu[Ru(HR[76])](yu), Qu[Ru(HR[76])](Eu, XR)), Qu
      }, JR = (...uu) => {
        function Ru(...uu) {
          return uu[HR[12]] = HR[2], typeof WR[uu[HR[1]]] === HR[18] ? WR[uu[HR[1]]] = function(...uu) {
            for (kR(uu[HR[12]] = HR[2], uu[HR[2]] = 'cOFXiMDAbapRQEnJu%B*vd#@TrH8:k^mW_I},Z>t;</+SesCwgK59o|)]P"Gx40f~1!hyUz&YNj{LlV(6$=2[3.7?q`', uu[HR[44]] = "" + (uu[HR[1]] || ""), uu[HR[15]] = uu[HR[44]].length, uu[HR[10]] = [], uu[HR[8]] = HR[1], uu[HR[17]] = HR[1], uu[HR[7]] = -HR[2]), uu[HR[3]] = HR[1]; uu[HR[3]] < uu[HR[15]]; uu[HR[3]]++)
              if (uu[HR[6]] = uu[HR[2]].indexOf(uu[HR[44]][uu[HR[3]]]), uu[HR[6]] !== -HR[2])
                if (uu[HR[7]] < HR[1]) uu[HR[7]] = uu[HR[6]];
                else {
                  kR(uu[HR[7]] += uu[HR[6]] * HR[25], uu[HR[8]] |= uu[HR[7]] << uu[HR[17]], uu[HR[17]] += (uu[HR[7]] & HR[26]) > HR[27] ? HR[28] : HR[29]);
                  do {
                    kR(uu[HR[10]].push(uu[HR[8]] & HR[11]), uu[HR[8]] >>= HR[3], uu[HR[17]] -= HR[3])
                  } while (uu[HR[17]] > HR[7]);
                  uu[HR[7]] = -HR[2]
                } return uu[HR[7]] > -HR[2] && uu[HR[10]].push((uu[HR[8]] | uu[HR[7]] << uu[HR[17]]) & HR[11]), dR(uu[HR[10]])
          }(jR[uu[HR[1]]]) : WR[uu[HR[1]]]
        }
        if (uu[HR[12]] = HR[30], Ru(HR[70]) + "y" in CR && function(...uu) {
            uu[HR[12]] = HR[1]
          }(), uu[HR[2]][Ru(154)] < XR) throw new Error(yu);
        const Eu = new Uint8Array(uu[HR[2]][Ru(HR[78])](XR));
        NR(Ku(uu[HR[1]]), uu[HR[2]][Ru(HR[78])](HR[1], XR), HR[2], Eu);
        const Qu = new(KR[HR[14]][Ru(156) + HR[37]])({
          [Ru(HR[64])]: !0
        });
        if (Qu[Ru(158)](Eu), Qu[Ru(HR[45])] || !Qu[Ru(160)]) throw new Error(yu);
        return Qu[Ru(161)]
      })
    })();
    var eR = yu(36750),
      AR = yu(36753);

    function DR(uu) {
      return Qu.XS.from(Uint8Array.from(uu))
    }

    function MR(uu) {
      return Array.from(uu)
    }

    function IR(uu, Ru) {
      return {
        [uu]: {
          x: Ru
        }
      }
    }

    function GR(uu) {
      if (null === uu || "object" !== typeof uu || Array.isArray(uu)) return uu;
      const Ru = Object.keys(uu);
      if (1 !== Ru.length) return uu;
      const yu = uu[Ru[0]];
      return null !== yu && "object" === typeof yu && !Array.isArray(yu) && "x" in yu ? yu.x : uu
    }

    function UR(uu, Ru) {
      return void 0 === Ru ? null : Nu.has(uu) ? null === Ru ? null : JSON.stringify(Ru) : Ru
    }

    function nR(uu, Ru) {
      return null === Ru && Nu.has(uu) ? null : "string" === typeof Ru && Nu.has(uu) ? JSON.parse(Ru) : Ru
    }

    function sR(uu, Ru, yu) {
      return (0, Ku.E)(yu) ? null : IR(uu, UR(Ru, yu))
    }

    function tR(uu, Ru) {
      return (0, Ku.E)(Ru) ? null : nR(uu, GR(Ru))
    }

    function lR(uu) {
      const Ru = {};
      for (const yu in uu) {
        const Eu = uu[yu];
        Ru[yu] = void 0 === Eu ? null : Eu
      }
      return Ru
    }

    function gR(uu) {
      const Ru = {};
      for (const yu in uu) {
        const Eu = uu[yu];
        null !== Eu && void 0 !== Eu && (Ru[yu] = Eu)
      }
      return Ru
    }

    function cR(uu, Ru) {
      return Object.prototype.hasOwnProperty.call(uu, Ru)
    }

    function LR(uu, Ru) {
      const yu = {};
      for (const Eu in uu) {
        const Ku = uu[Eu];
        yu[Eu] = Ru(Ku)
      }
      return yu
    }

    function zR(uu, Ru, yu) {
      const Eu = [];
      for (let Ku = 0; Ku < Ru.length; Ku++) {
        const Qu = Ru[Ku];
        cR(uu, Qu) && Eu.push({
          i: Ku,
          v: yu(Qu, uu[Qu])
        })
      }
      return Eu
    }

    function FR(uu, Ru, yu) {
      const Eu = {};
      for (const Ku of uu) {
        const uu = Ru[Ku.i];
        void 0 !== uu ? Eu[uu] = yu(uu, Ku.v) : console.error(`Unknown Partial field index ${Ku.i}`)
      }
      return Eu
    }

    function wR(uu, Ru) {
      return (0, Ku.E)(Ru) ? null : "MI" === uu ? function(uu) {
        return IR(Su, zR(uu, AR.w, ((uu, Ru) => sR(tu[uu], uu, Ru))))
      }(Ru) : sR(su[uu], uu, Ru)
    }

    function ZR(uu, Ru) {
      return (0, Ku.E)(Ru) ? null : "MI" === uu ? function(uu) {
        return (0, Ku.E)(uu) ? null : FR(uu, AR.w, tR)
      }(GR(Ru)) : tR(uu, Ru)
    }

    function hR(uu) {
      const {
        type: Ru,
        ...yu
      } = uu, Eu = {};
      for (const Ku in yu) {
        const uu = yu[Ku];
        Eu[Ku] = UR(Ku, uu)
      }
      if ("chunkAdded" === Ru || "chunkRemoved" === Ru) Eu.rle = DR(Eu.rle);
      else if ("playSound" === Ru) {
        const uu = Eu.IK;
        Eu.IK = (0, Ku.E)(uu) ? null : lR(uu)
      } else if ("customKillfeed" === Ru) {
        var Qu, mu;
        Eu.killer = lR(null !== (Qu = Eu.killer) && void 0 !== Qu ? Qu : {}), Eu.victim = lR(null !== (mu = Eu.victim) && void 0 !== mu ? mu : {})
      }
      return {
        [Ru]: Eu
      }
    }

    function PR(uu) {
      const Ru = Object.keys(uu)[0],
        yu = uu[Ru],
        Eu = {};
      for (const Ku in yu) {
        const uu = yu[Ku];
        Eu[Ku] = nR(Ku, uu)
      }
      if ("chunkAdded" === Ru || "chunkRemoved" === Ru) Eu.rle = MR(Eu.rle);
      else if ("playSound" === Ru) {
        const uu = Eu.IK;
        Eu.IK = (0, Ku.E)(uu) ? null : gR(uu)
      } else if ("customKillfeed" === Ru) {
        var Qu, mu;
        Eu.killer = gR(null !== (Qu = Eu.killer) && void 0 !== Qu ? Qu : {}), Eu.victim = gR(null !== (mu = Eu.victim) && void 0 !== mu ? mu : {})
      }
      return {
        type: Ru,
        ...Eu
      }
    }

    function iR(uu) {
      var Ru, yu;
      return (0, Ku.E)(uu) ? null : {
        name: uu.name,
        amount: null !== (Ru = uu.amount) && void 0 !== Ru ? Ru : null,
        attributes: JSON.stringify(null !== (yu = uu.attributes) && void 0 !== yu ? yu : {})
      }
    }

    function YR(uu) {
      if ((0, Ku.E)(uu)) return null;
      const Ru = uu;
      return {
        name: Ru.name,
        amount: Ru.amount,
        attributes: JSON.parse(Ru.attributes)
      }
    }

    function oR(uu) {
      if ((0, Ku.E)(uu)) return null;
      return {
        fullSlotsArray: Array.isArray(uu.slots),
        entries: zR(uu, AR.k, ((uu, Ru) => {
          if ((0, Ku.E)(Ru)) return null;
          if ("slots" === uu) {
            const uu = Array.isArray(Ru) ? function(uu) {
              const Ru = {};
              for (let yu = 0; yu < uu.length; yu++) Ru[yu] = uu[yu];
              return Ru
            }(Ru) : Ru;
            return IR(Mu, function(uu) {
              const Ru = {};
              for (const yu in uu) {
                const Eu = uu[yu];
                Ru[yu] = iR(Eu)
              }
              return Ru
            }(uu))
          }
          return IR(Du, Ru)
        }))
      }
    }

    function qR(uu) {
      if ((0, Ku.E)(uu)) return;
      const Ru = uu.fullSlotsArray;
      return FR(uu.entries, AR.k, ((uu, yu) => {
        if ((0, Ku.E)(yu)) return null;
        if ("slots" === uu) {
          const uu = function(uu) {
            const Ru = {};
            for (const yu in uu) {
              const Eu = uu[yu];
              Ru[Number(yu)] = YR(Eu)
            }
            return Ru
          }(GR(yu));
          return Ru ? function(uu) {
            const Ru = [];
            for (let yu = 0; yu < Ku.n; yu++) Ru.push(yu in uu ? uu[yu] : null);
            return Ru
          }(uu) : uu
        }
        return GR(yu)
      }))
    }

    function OR(uu) {
      return {
        entities: LR(uu.entities, (uu => zR(uu, AR.i, wR))),
        items: LR(uu.items, (uu => zR(uu, AR.n, ((uu, Ru) => sR(lu[uu], uu, Ru))))),
        camera: uu.camera,
        hotbar: oR(uu.hotbar),
        playerHud: (0, Ku.E)(uu.playerHud) ? null : zR(uu.playerHud, AR.p, ((uu, Ru) => (0, Ku.E)(Ru) ? null : function(uu, Ru) {
          return {
            [uu]: Ru
          }
        }("double", Ru))),
        effects: (0, Ku.E)(uu.effects) ? null : (0, eR.s)(uu.effects),
        uiElements: zR(uu.uiElements, AR.y, ((uu, Ru) => (0, Ku.E)(Ru) ? null : JSON.stringify(Ru))),
        environment: zR(uu.environment, AR.s, ((uu, Ru) => sR(gu[uu], uu, Ru))),
        structuralEvents: uu.structuralEvents.map(hR),
        ephemeralEvents: uu.ephemeralEvents.map(hR)
      }
    }

    function vR(uu) {
      var Ru;
      const yu = {
          entities: LR(uu.entities, (uu => {
            const Ru = FR(uu, AR.i, ZR),
              yu = Ru.type ? (0, Eu.x)(Ru.type) : null;
            return yu && (Ru.type = "Mesh", Ru.meshKind = yu.meshKind, Ru.meshOpts = yu.meshOpts), Ru
          })),
          items: LR(uu.items, (uu => FR(uu, AR.n, tR))),
          camera: {
            ...uu.camera,
            charging: null !== (Ru = uu.camera.charging) && void 0 !== Ru && Ru
          },
          uiElements: FR(uu.uiElements, AR.y, ((uu, Ru) => "string" === typeof Ru ? JSON.parse(Ru) : Ru)),
          environment: FR(uu.environment, AR.s, tR),
          structuralEvents: uu.structuralEvents.map((uu => {
            const Ru = PR(uu);
            return "sA" === Ru.type ? (Ru.fromBlockData ??= null, Ru.toBlockData ??= null) : "chunkAdded" !== Ru.type && "chunkRemoved" !== Ru.type || (Ru.sharedBlockData ??= []), Ru
          })),
          ephemeralEvents: uu.ephemeralEvents.map((uu => PR(uu)))
        },
        Qu = qR(uu.hotbar);
      return void 0 !== Qu && (yu.hotbar = Qu), (0, Ku.E)(uu.playerHud) || (yu.playerHud = FR(uu.playerHud, AR.p, ((uu, Ru) => (0, Ku.E)(Ru) ? null : function(uu) {
        if (null === uu || "object" !== typeof uu || Array.isArray(uu)) return uu;
        const Ru = Object.keys(uu);
        return 1 !== Ru.length || "int" !== Ru[0] && "double" !== Ru[0] ? uu : uu[Ru[0]]
      }(Ru)))), (0, Ku.E)(uu.effects) || (yu.effects = (0, eR.k)(uu.effects)), yu
    }
    let aR, fR;
    var uy, Ry, yy, Ey, Ky, Qy, my, Jy, Ny, Xy, Vy;
    const ry = [1, 2, 0, "h", 56, 162, "g", 151, "f", 4, 8, 255, "length", "e", 198, 225, "undefined", void 0, 216, "d", 90, 63, 6, "fromCodePoint", 7, 12, "push", 152, "b", 3, 5, "a", 38, "c", 60, 231, 91, 8191, 88, 13, 14, 191, 100, 85, 220, 9, 170, 165, 189, 214, !1, !0, "join", 25, 16, 256, 65537, 30, 144, 69, 68, 66, 128, 106, 78, 175, 228, 54, 236, 181, 125, 150, 84, 215, 71, 76, "i", 55, null, 127, 234, 161, 80, "XS", 117, 219, 142, 172, "l", 44, 116, 33, 232, 206];

    function By(...uu) {
      return uu[ry[12]] = ry[0], typeof uy[uu[ry[2]]] === ry[16] ? uy[uu[ry[2]]] = function(...uu) {
        for (Ty(uu[ry[12]] = ry[0], uu[ry[0]] = 'D9y?@w%h~zix|,WF.1vR3`S+TbQk:AJp^n8H"IVZX[]NeM$B*P)cjLsm!of27Y<_&udEKt{=(;ga}r460G>UO5qlC#/', uu[ry[1]] = "" + (uu[ry[2]] || ""), uu[ry[4]] = uu[ry[1]].length, uu[ry[9]] = [], uu[ry[7]] = ry[2], uu[ry[8]] = ry[2], uu[ry[6]] = -ry[0]), uu[ry[3]] = ry[2]; uu[ry[3]] < uu[ry[4]]; uu[ry[3]]++)
          if (uu[-ry[5]] = uu[ry[0]].indexOf(uu[ry[1]][uu[ry[3]]]), uu[-ry[5]] !== -ry[0])
            if (uu[ry[6]] < ry[2]) uu[ry[6]] = uu[-ry[5]];
            else {
              Ty(uu[ry[6]] += uu[-ry[5]] * ry[36], uu[ry[7]] |= uu[ry[6]] << uu[ry[8]], uu[ry[8]] += (uu[ry[6]] & ry[37]) > ry[38] ? ry[39] : ry[40]);
              do {
                Ty(uu[ry[9]].push(uu[ry[7]] & ry[11]), uu[ry[7]] >>= ry[10], uu[ry[8]] -= ry[10])
              } while (uu[ry[8]] > ry[24]);
              uu[ry[6]] = -ry[0]
            } return uu[ry[6]] > -ry[0] && uu[ry[9]].push((uu[ry[7]] | uu[ry[6]] << uu[ry[8]]) & ry[11]), xy(uu[ry[9]])
      }(Ry[uu[ry[2]]]) : uy[uu[ry[2]]]
    }

    function xy(...uu) {
      return uu[ry[12]] = ry[0], typeof Ey !== ry[16] && Ey ? (new Ey).decode(new Ky(uu[ry[2]])) : typeof Qy !== ry[16] && Qy ? Qy.from(uu[ry[2]]).toString("utf-8") : Ny(uu[ry[2]])
    }

    function Sy() {}

    function py(uu, Ru, yu, Eu = {}, Ku, Qu, mu, Ju, Nu) {
      if (mu || (mu = function(...uu) {
          uu[ry[12]] = ry[2];
          const Ru = require("big-integer");
          Ty(uu[-ry[44]] = class {
            static randomPrime(...uu) {
              uu[ry[12]] = ry[0];
              const yu = Ru.one.shiftLeft(uu[ry[2]] - ry[0]),
                Eu = Ru.one.shiftLeft(uu[ry[2]]).prev();
              for (; ry[51];) {
                let uu = Ru.randBetween(yu, Eu);
                if (uu.isProbablePrime(ry[55])) return uu
              }
            }
            static generate(...uu) {
              uu[ry[12]] = ry[0];
              const yu = Ru(ry[56]);
              let Eu, Ku;
              uu[-ry[41]] = ry[17];
              do {
                Ty(Eu = this.randomPrime(uu[ry[2]] / ry[1]), Ku = this.randomPrime(uu[ry[2]] / ry[1]), uu[-ry[41]] = Ru.lcm(Eu.prev(), Ku.prev()))
              } while (Ru.gcd(yu, uu[-ry[41]]).notEquals(ry[0]) || Eu.minus(Ku).abs().shiftRight(uu[ry[2]] / ry[1] - ry[42]).isZero());
              return {
                e: yu,
                n: Eu.multiply(Ku),
                d: yu.modInv(uu[-ry[41]])
              }
            }
            static encrypt(...uu) {
              return uu[ry[12]] = ry[29], Ru(uu[ry[2]]).modPow(uu[ry[1]], uu[ry[0]])
            }
            static decrypt(...uu) {
              return uu[ry[12]] = ry[29], Ru(uu[ry[2]]).modPow(uu[ry[0]], uu[ry[1]])
            }
            static encode(...uu) {
              uu[ry[12]] = ry[0];
              const yu = uu[ry[2]].split("").map((uu => uu.charCodeAt())).join("");
              return Ru(yu)
            }
            static decode(...uu) {
              uu[ry[12]] = ry[0];
              const Ru = uu[ry[2]].toString();
              uu[-ry[43]] = "";
              for (let yu = ry[2]; yu < Ru.length; yu += ry[1]) {
                let Eu = Number(Ru.substr(yu, ry[1]));
                Eu <= ry[57] ? (uu[-ry[43]] += String.fromCharCode(Number(Ru.substr(yu, ry[29]))), yu++) : uu[-ry[43]] += String.fromCharCode(Eu)
              }
              return uu[-ry[43]]
            }
          }, module.exports = uu[-ry[44]])
        }), Qu || (Qu = function(...uu) {
          return uu[ry[12]] = ry[0], typeof uy[uu[ry[2]]] === ry[16] ? uy[uu[ry[2]]] = Ku(Ry[uu[ry[2]]]) : uy[uu[ry[2]]]
        }), Ku || (Ku = function(...uu) {
          for (Ty(uu[ry[12]] = ry[0], uu[-ry[34]] = 'AGacm84SKunH]od#zr2Jlpf36BI`^WvUsX19Y"TL=wP+_.V%EM!e~R$bjN<t;h[)5Fy,Cgi}{>@k*Z?D7qxO:0&|(/Q', uu[ry[1]] = "" + (uu[ry[2]] || ""), uu[ry[33]] = uu[ry[1]].length, uu[ry[19]] = [], uu[ry[30]] = ry[2], uu[ry[5]] = ry[2], uu[ry[6]] = -ry[0]), uu[-ry[32]] = ry[2]; uu[-ry[32]] < uu[ry[33]]; uu[-ry[32]]++)
            if (uu[-ry[35]] = uu[-ry[34]].indexOf(uu[ry[1]][uu[-ry[32]]]), uu[-ry[35]] !== -ry[0])
              if (uu[ry[6]] < ry[2]) uu[ry[6]] = uu[-ry[35]];
              else {
                Ty(uu[ry[6]] += uu[-ry[35]] * ry[36], uu[ry[30]] |= uu[ry[6]] << uu[ry[5]], uu[ry[5]] += (uu[ry[6]] & ry[37]) > ry[38] ? ry[39] : ry[40]);
                do {
                  Ty(uu[ry[19]].push(uu[ry[30]] & ry[11]), uu[ry[30]] >>= ry[10], uu[ry[5]] -= ry[10])
                } while (uu[ry[5]] > ry[24]);
                uu[ry[6]] = -ry[0]
              } return uu[ry[6]] > -ry[0] && uu[ry[19]].push((uu[ry[30]] | uu[ry[6]] << uu[ry[5]]) & ry[11]), xy(uu[ry[19]])
        }), By(ry[42]) in Sy && mu(), Ty(Ju = void 0, Nu = {
          [Qu(101)]: function(...uu) {
            function Ru(...uu) {
              return uu[ry[12]] = ry[0], typeof uy[uu[ry[2]]] === ry[16] ? uy[uu[ry[2]]] = function(...uu) {
                for (Ty(uu[ry[12]] = ry[0], uu[ry[31]] = '=8!5,6xTF#]L9g%ckO/.>KhpjufZ(`@ewRN;oPntGiUy)AMJ?Ba34C+VvSb:r[~^m*dl70I"YDE_$z{H<&Q2WX1q|s}', uu[ry[28]] = "" + (uu[ry[2]] || ""), uu[ry[33]] = uu[ry[28]].length, uu[-ry[47]] = [], uu[ry[46]] = ry[2], uu[ry[22]] = ry[2], uu[ry[6]] = -ry[0]), uu[ry[10]] = ry[2]; uu[ry[10]] < uu[ry[33]]; uu[ry[10]]++)
                  if (uu[ry[45]] = uu[ry[31]].indexOf(uu[ry[28]][uu[ry[10]]]), uu[ry[45]] !== -ry[0])
                    if (uu[ry[6]] < ry[2]) uu[ry[6]] = uu[ry[45]];
                    else {
                      Ty(uu[ry[6]] += uu[ry[45]] * ry[36], uu[ry[46]] |= uu[ry[6]] << uu[ry[22]], uu[ry[22]] += (uu[ry[6]] & ry[37]) > ry[38] ? ry[39] : ry[40]);
                      do {
                        Ty(uu[-ry[47]].push(uu[ry[46]] & ry[11]), uu[ry[46]] >>= ry[10], uu[ry[22]] -= ry[10])
                      } while (uu[ry[22]] > ry[24]);
                      uu[ry[6]] = -ry[0]
                    } return uu[ry[6]] > -ry[0] && uu[-ry[47]].push((uu[ry[46]] | uu[ry[6]] << uu[ry[22]]) & ry[11]), xy(uu[-ry[47]])
              }(Ry[uu[ry[2]]]) : uy[uu[ry[2]]]
            }
            Qu(102) + "t" in Sy && function(...uu) {
              Ty(uu[ry[12]] = ry[2], uu[ry[31]] = function(...Ru) {
                return Ty(Ru[ry[12]] = ry[29], Ru[-ry[48]] = {}), Ru[ry[1]].length !== Ru[ry[2]].length + Ru[ry[0]].length ? ry[50] : uu[ry[49]](Ru[ry[2]], Ru[ry[0]], Ru[ry[1]], ry[2], ry[2], ry[2], Ru[-ry[48]])
              }, uu[ry[49]] = function(...Ru) {
                return Ty(Ru[ry[12]] = ry[24], Ru[ry[31]] = ry[50]), Ru[ry[30]] >= Ru[ry[1]].length ? ry[51] : Ru[ry[22]]["" + Ru[ry[29]] + Ru[ry[9]] + Ru[ry[30]]] !== ry[17] ? Ru[ry[22]]["" + Ru[ry[29]] + Ru[ry[9]] + Ru[ry[30]]] : (Ru[ry[1]][Ru[ry[30]]] === Ru[ry[2]][Ru[ry[29]]] && Ru[ry[1]][Ru[ry[30]]] === Ru[ry[0]][Ru[ry[9]]] ? Ru[ry[31]] = uu[ry[49]](Ru[ry[2]], Ru[ry[0]], Ru[ry[1]], Ru[ry[29]] + ry[0], Ru[ry[9]], Ru[ry[30]] + ry[0], Ru[ry[22]]) || uu[ry[49]](Ru[ry[2]], Ru[ry[0]], Ru[ry[1]], Ru[ry[29]], Ru[ry[9]] + ry[0], Ru[ry[30]] + ry[0], Ru[ry[22]]) : Ru[ry[1]][Ru[ry[30]]] === Ru[ry[2]][Ru[ry[29]]] ? Ru[ry[31]] = uu[ry[49]](Ru[ry[2]], Ru[ry[0]], Ru[ry[1]], Ru[ry[29]] + ry[0], Ru[ry[9]], Ru[ry[30]] + ry[0], Ru[ry[22]]) : Ru[ry[1]][Ru[ry[30]]] === Ru[ry[0]][Ru[ry[9]]] && (Ru[ry[31]] = uu[ry[49]](Ru[ry[2]], Ru[ry[0]], Ru[ry[1]], Ru[ry[29]], Ru[ry[9]] + ry[0], Ru[ry[30]] + ry[0], Ru[ry[22]])), Ru[ry[22]]["" + Ru[ry[29]] + Ru[ry[9]] + Ru[ry[30]]] = Ru[ry[31]], Ru[ry[31]])
              }, console.log(uu[ry[31]]))
            }(), Ty([
              [uu[ry[31]], uu[ry[0]], uu[-ry[43]]], uu[ry[19]]
            ] = Vy, console[Ru(103)]("" + uu[ry[31]][ry[52]](".") + (Ru(104) + Ru(105)) + uu[-ry[43]][Ru(ry[63]) + "me"] + Ru(107) + uu[ry[0]]))
          }
        }), Ru === Qu(108) + Qu(109) && (Vy = []), Ru === Qu(110) + Qu(111)) {
        function Xu(...Ru) {
          var yu;
          if (Ty(Ru[ry[12]] = ry[2], yu = function(...Ru) {
              return Vy = Ru, Nu[uu].apply(this)
            }, Ru[-ry[53]] = Eu[uu]), Ru[-ry[53]]) {
            function Ku(...uu) {
              uu[ry[12]] = ry[2]
            }
            Qu(112) + "B" in Sy && Ku(), Ru[-ry[53]]
          }
          return yu
        }
        Ju = Xy[uu] || (Xy[uu] = Xu())
      } else {
        function Vu(...uu) {
          for (Ty(uu[ry[12]] = ry[0], uu[ry[31]] = 'kVBvY>xPhuTy6(J#/r^Zn2w<fcOpR=:;$jlSX.8s*FEU0!AL")K|Qe[%93&id]Cg+,H4?I7DM~_WNz51atmoqG`@{}b', uu[ry[1]] = "" + (uu[ry[2]] || ""), uu[ry[33]] = uu[ry[1]].length, uu[ry[19]] = [], uu[ry[13]] = ry[2], uu[-ry[54]] = ry[2], uu[ry[24]] = -ry[0]), uu[ry[10]] = ry[2]; uu[ry[10]] < uu[ry[33]]; uu[ry[10]]++)
            if (uu[ry[45]] = uu[ry[31]].indexOf(uu[ry[1]][uu[ry[10]]]), uu[ry[45]] !== -ry[0])
              if (uu[ry[24]] < ry[2]) uu[ry[24]] = uu[ry[45]];
              else {
                Ty(uu[ry[24]] += uu[ry[45]] * ry[36], uu[ry[13]] |= uu[ry[24]] << uu[-ry[54]], uu[-ry[54]] += (uu[ry[24]] & ry[37]) > ry[38] ? ry[39] : ry[40]);
                do {
                  Ty(uu[ry[19]].push(uu[ry[13]] & ry[11]), uu[ry[13]] >>= ry[10], uu[-ry[54]] -= ry[10])
                } while (uu[-ry[54]] > ry[24]);
                uu[ry[24]] = -ry[0]
              } return uu[ry[24]] > -ry[0] && uu[ry[19]].push((uu[ry[13]] | uu[ry[24]] << uu[-ry[54]]) & ry[11]), xy(uu[ry[19]])
        }

        function ru(...uu) {
          return uu[ry[12]] = ry[0], typeof uy[uu[ry[2]]] === ry[16] ? uy[uu[ry[2]]] = Vu(Ry[uu[ry[2]]]) : uy[uu[ry[2]]]
        }

        function Bu(...uu) {
          uu[ry[12]] = ry[2];
          const Ru = require("big-integer");
          Ty(uu[ry[58]] = class {
            static randomPrime(...uu) {
              uu[ry[12]] = ry[0];
              const yu = Ru.one.shiftLeft(uu[ry[2]] - ry[0]),
                Eu = Ru.one.shiftLeft(uu[ry[2]]).prev();
              for (; ry[51];) {
                let uu = Ru.randBetween(yu, Eu);
                if (uu.isProbablePrime(ry[55])) return uu
              }
            }
            static generate(...uu) {
              uu[ry[12]] = ry[0];
              const yu = Ru(ry[56]);
              let Eu, Ku;
              uu[ry[31]] = ry[17];
              do {
                Ty(Eu = this.randomPrime(uu[ry[2]] / ry[1]), Ku = this.randomPrime(uu[ry[2]] / ry[1]), uu[ry[31]] = Ru.lcm(Eu.prev(), Ku.prev()))
              } while (Ru.gcd(yu, uu[ry[31]]).notEquals(ry[0]) || Eu.minus(Ku).abs().shiftRight(uu[ry[2]] / ry[1] - ry[42]).isZero());
              return {
                e: yu,
                n: Eu.multiply(Ku),
                d: yu.modInv(uu[ry[31]])
              }
            }
            static encrypt(...uu) {
              return uu[ry[12]] = ry[29], Ru(uu[ry[2]]).modPow(uu[ry[1]], uu[ry[0]])
            }
            static decrypt(...uu) {
              return uu[ry[12]] = ry[29], Ru(uu[ry[2]]).modPow(uu[ry[0]], uu[ry[1]])
            }
            static encode(...uu) {
              uu[ry[12]] = ry[0];
              const yu = uu[ry[2]].split("").map((uu => uu.charCodeAt())).join("");
              return Ru(yu)
            }
            static decode(...uu) {
              uu[ry[12]] = ry[0];
              const Ru = uu[ry[2]].toString();
              uu[ry[31]] = "";
              for (let yu = ry[2]; yu < Ru.length; yu += ry[1]) {
                let Eu = Number(Ru.substr(yu, ry[1]));
                Eu <= ry[57] ? (uu[ry[31]] += String.fromCharCode(Number(Ru.substr(yu, ry[29]))), yu++) : uu[ry[31]] += String.fromCharCode(Eu)
              }
              return uu[ry[31]]
            }
          }, module.exports = uu[ry[58]])
        }
        ru(113) + "Z" in Sy && Bu(), Ju = Nu[uu]()
      }
      if (yu === Qu(114) + Qu(115)) {
        function xu(...uu) {
          for (Ty(uu[ry[12]] = ry[0], uu[ry[59]] = '#slpLWe%a=8oAUrGwXdNKbh1[J$_<];IY0)3E{(9n.HVBj6!>5+C~DiRPmct^"*7&z/FT}M|k4Z,S?Qu@2v:xqyfg`O', uu[ry[1]] = "" + (uu[ry[2]] || ""), uu[ry[33]] = uu[ry[1]].length, uu[-ry[61]] = [], uu[ry[13]] = ry[2], uu[ry[60]] = ry[2], uu[ry[24]] = -ry[0]), uu[ry[3]] = ry[2]; uu[ry[3]] < uu[ry[33]]; uu[ry[3]]++)
            if (uu[ry[45]] = uu[ry[59]].indexOf(uu[ry[1]][uu[ry[3]]]), uu[ry[45]] !== -ry[0])
              if (uu[ry[24]] < ry[2]) uu[ry[24]] = uu[ry[45]];
              else {
                Ty(uu[ry[24]] += uu[ry[45]] * ry[36], uu[ry[13]] |= uu[ry[24]] << uu[ry[60]], uu[ry[60]] += (uu[ry[24]] & ry[37]) > ry[38] ? ry[39] : ry[40]);
                do {
                  Ty(uu[-ry[61]].push(uu[ry[13]] & ry[11]), uu[ry[13]] >>= ry[10], uu[ry[60]] -= ry[10])
                } while (uu[ry[60]] > ry[24]);
                uu[ry[24]] = -ry[0]
              } return uu[ry[24]] > -ry[0] && uu[-ry[61]].push((uu[ry[13]] | uu[ry[24]] << uu[ry[60]]) & ry[11]), xy(uu[-ry[61]])
        }

        function Su(...uu) {
          return uu[ry[12]] = ry[0], typeof uy[uu[ry[2]]] === ry[16] ? uy[uu[ry[2]]] = xu(Ry[uu[ry[2]]]) : uy[uu[ry[2]]]
        }
        return {
          [Su(ry[90]) + Su(ry[84])]: Ju
        }
      }
      return Ju
    }

    function Ty() {
      Ty = function() {}
    }
    Ty(uy = {}, Ry = ['1Ikr84V"e257.k|V!=Dz`Xac>oEr<I6Q&%`p#oMHS,F6Lb.k', "F$szt(t,<!$@!?):hPjg6ov$[1i,$,3kmKIh_Lyf}<Fc~U7HsD", "rME^YZ8|vsxf/PVInzJ:.<Sgco)T3Fo]0?PcLaqTi3qGpQ?T3+sjVI$yh", '_89axtq|.dJWY(~RIcS@y<8"4~c<%GwNY<>L.)o_`,nkiI*8=p!;K8i&e~', "8NgcEm`9", "wzGs4t.jouV*fPb[zNRA>tucu_[?o.6XKcpJA5Vy", "Q8$m%G%f1|k(1w", "e<Qk+Vw[_|sP={~vx_1c^KWT^zl9>PDJ@__;Q", "8?r=o$d%RoO^r*AAW_0z", "U{KmNs5[9zh%vGNba+B@AYCT}W?(9(LHM8f^!OsJbuDac?.k<;?", "JK+sB_C8e<BWDZU[g%]^k4)j2!,KWG%V8NcrkBrh$~JtW)21ioFso_m+}x:", 'z@Ai6"E[/xPd"2AH1oVh(8D', '(!|A28uA!3>~FVBZmQ94FG6ctR#"HV:J>c.k^;FB9FC9F>n"K1?', 'g<=%XBF,4x5oxW)XT^"AAj#AP|Mte(,', "2KYpO2}v$!hKkk;RIQeA%)Xf?s{H=f_JzHKLh)qXh,", '&<_:ec__OsX*+WEb4:=zV>,L_74$ZWQ"1=?', "n?s:78/T^`;0j(8J", "<2DzPaU5i3l_B{]VIo%n]!!X0_(Ew.18iN.s,G0%v_^p_V,RJg4=c_7$?", '87"iu"V"HR(7FVRk=%nJ.', "QK:iMc:y", "fQ:AK7ey,d0Ldts8", "B8Mi^sc5Ks{03.n+C8/~z<U9", "qZ0%s_LHy_O~/bq[BQKr<rEoO&[h:=0XKsMj26$$9|%sb@ZbS9", "}W+zHPg$x<P!/G}VWNImj!T&UzY9@F#[!swgn4G55R%Kn*}ZrxMh", 'Vsb%F"a59_vJb.s[9Anc7LoAdRY_jUDJ~Q2r:Xx_$v', 'vv1a4"*Xh', 'Rg[%Q;ejkW)xm{d""c/~}t"f7<7vkV2H8*L:<8,9', '<uNgY7ZhFFG_u"T:4xzk]!]j9z]*7k~R<Xq@', "/M(Px*KTCfd~|Z+AksXs:UXj]3Im7?$RVg[a1tG[I&|3Zy&+sD", "|_{=?**Xp`=;uI5koWlzloij(1#&6WSk|KVmN>@~?", '?7Kwc{Z9.`F>=Wy1aI[kc$RRJ_F%6W?T[=>~^K=9T16"0Bzp@K%h{89R@', "L%UL*{wL$xF(Hy38Ep%m$Pej?", "1X8a85gjH7A,@ZxVI%y", 'Gch}("Ty', 'aM/w96~v8FejvI7"zQuc2(F,f2J6m20Qm*A:q4;A^`k(:(L[lcOp+5D', "x^ljFm|$[fdri)8Jt?N(VP7q]<d0hUMk~K`h", "Aua^3<!v@oM}cUIp$cIjy8`L6~F6^.yTp8r)8YKT~iF<^UXQ*z?", "]ALi$IVTnsQ(k)5[fMvriqhR_v~uJI&]dzSpc_:qJdLj9", ")ob(,Gv$M!$;(FqSqZdcABbH_~", "b$>r7Z`BO,y%17m[Nc:mnXN,.FE0.F7+%ssz6=paV&xKywdpEI*%", "_*dL]!BBp7m{>bgpVu6z:Xt+Po%KN?k1f<tmdL>j7!^(>V/A|K8kk", 'U;"gUMXJF|<_sb>kI1naBPp_[1dP5TlXfMDa_gDvXu^', "(M@r$rmA+3={[.%T?PZjp;r_QW9a%IdI", "FQKr}g9HQ1o{NfY1d+a^OUy]4~_P17/SAIosYO4TVRm_kVab^cB}HHW$72Lh9", "lW$jwmEaWdu~L(W", "iPTJSX%vF|+}SyL8K:B:ygthuo=FL*upNQ{@C=G6;1b", "W=p;7L8vl,Bx>b.ZO?V@f(jJ`&%3[(2+>;<mp2o,2u~JBy", "pN3glnAHsRsb|Fab(<TJ*P3Tno{^w(21?@aw", "/xyc1tsfHs(037KpoD", "42Y:box95s5)@U=v", "j8ic,}NBXfmHFy", 'Ec5:hq`ho17rP.D"`u#~MIM,r!s;"2eVPI?r!{D', "usE)[0v~IfFkgbJ]+7<zKLD", "@Q_}kUXTeuCbo.HJo3OwlM:Jz3v<XB6ky7>wAjbR<F*:(k0k", 'HKaL@*<%C,et@Ob+72Fsz<Aa/W>S|B(Rg3UrpH|"}1+6YTo+8K;%vo>feWc', '._r:%6"|3,NjtT<+muagPOx[)Fa00UD]hKvc+4oB*v', 'JI]^DfvjZ&]*yI~RU3:g=)2_ds.6Y*D"v_]ATUzLjzObZQVvdsT%', '7u0z<LSfrWP!M@KV;!KQGnz[_|H(+yZTK<"gvoHhK&HtGT8J(KIh', "|X&s4*kGe~;S#@KJOphj%6t[3oOL+>JTos:rHsjgfW/ATk[b*D", '|_^kg)D"#<,Kz./.J+K)7c?R)FNT/t):#u[s1G2Aex/L{bnTzX6:T=7y', "ss*sRVv{qfY@r@wv:s3g=8FBL&KvL(zp#x9%@(D", "zXw)yqUAy7}^Ny", '@zUwr*@ToWicw"):u*tgZa#1bukklVkHtMx(wGq$ysM29', '{?^Ju"cRa2aE]y/[|+RrgtXvF7A<oTIRHN.%eYh9', '=<Vpz<(fV&C&@k"pouq;G}yf7xr0Ry', "Dzq=E(cH{f?,$IJJ@oB@N>69", "C</ce0D", "g+Kr{gHArW5rTko8apVh~mXy", "Au5}]{g%J2.%|?F3^|^s2(pa5R8*_fd19g]a3tFRGs)t&@v38I=jJ4iJ?", '[ui^j{|v[uA}G"4X$cEQea_cGs@%pyc88I?', "/2Lm$fO|>oN1w7ibd:2LB{no9Fs", '_X"gGjd%9vn(d,hp[|[s9(_cBFDK>G9"d%J:,toA{&e', "0IJ}YLIt5Rf0>y0Z234=LfDfE|H6uGoHRzX%Z>lh?&u~UWs:9AOg{L|y", '++:A"4SjYvm;=?l8bA`h`}f$noHk%GIbPXLm%LK0Rov,xyxQ_:?', '+K*k&*E,1sbf}F&1%H<pS5gJO&iu(=8"', "DP+Py7JvSR4@]P,3`$wi!c}%T,T3r*kAd:1%=G6o}Wm", "EKBzLc+A[16F9", "Z<pP:2669zu:CU=pE;~s+23$?oZ}3.BQ", '17TJyGr_9o}g777"u14:}g{K4v0EaW:]E84p(GZ9', "&cEg1tE,p_[?EV;R", "N=&z[!Ya@", '.X^J/jd|+f!;),,V6x~zM>%$.`}"ky21eQjg.og|eW,Y9', "e1*siVsvLRjT!F!AksKpe!T$A<;Et,#:2s,mWt|jb<W6U?OS]uei!{}T~37r9", "!16@M_iv8_k", '^$>wW"PH1o@KrGwR~@`mGoBo<vRf#"T]e8pza)*JVRP;xy8p_XaAr"<0RRL', "22tips}TE|g^<b,QZs!c:=,,csI;l?", 'DgQcPc.jp|lG8,Sk>cDsYZKva3"po@F', '$=KwTo~jz<BtBW2HyzG%zq|"7L^', "A++P@g&%*L(r)P!8u1bcJ4*J/<DKI.JT+o<m5jz,9ow82{ZV", "[g+jk=CXAd7_6Vf]R$UL&*pBr~", 'os0zH5Kv5RH})PzRR^napsuo#1$h,"OX(u#cD*GH8R/9o@l8g3?', "Gp@g:jgvO,(@9", "8%@rl2m+6~WiDFXp@gDz@*|~Dv8txQy122{;I5x9", ")=Tk7OYBhiK2~Uf[cX?wkH?[vzyz2{DJFNy^g}D", 'I19aYf/$o1Rt!7o+W=Sh,".jk2}xN{8JoK#cK".y?so', "}3:r=<{$F_n", "pXD%uOnRtRL:|kskL+ya@gu[zW[*(F>kz9", "Bc~4+VxbfW|IpW>k4bSp%g]y", '^A"rV>[9', "dcVprG3y", 'rWc^g"59', "}c8U1C6a", "j3vSmDTa", "734zy<=", "r}G,at]8", 'wS2F"h=', 'V";w9V9!', "M}Z2XGw=", "6}M{rOYa", "Dl%m`", ".C+n@qFG", "}[4U6", "UV$mpO^a", "),CQzNtV", "Qtb45VOG", ".ISuv", "hT@=/^bs", "d^(%h", "NNp:w(8Ji3", "ST/n:zSm", "w*SB/0Lu", '6e01fU;Y#hp^8C@PEmSi77:~n/3.tc@Pn+gonE6l(}.$j"Eece,vi', 'Um]6Jw"s2A{n`ONgZo&rxx80>9qvu%NgnISb))[PZJ{!h<`l(M', "4q1u%FCWp5:H]9!yyqGnkY%o&}gA>%,k;jQA[", "ZH!o", "Y,%*Lr9", "5Veng{f}s", "Y,%*Lrbd", "tLce", "~BkhEY}m", ";$1O.ECA", "5,%g(", "]hct!n96", "ksdO(", "N0^O`4K6", "i4QdN", "a8@rOtD", "qcTz^=69", "%ZaYc^x2", "tck^k", "M|%^vj[Z", ".[/Gg", "Q/XR(/|a", "wI@cNFn+", "S<MQPPv+", "g)Wg{!HFgt", "yflTl", "yflTuBAJz5!xz", "rf!^SFs$G[P*MXmfGU", "g9AGq#u42A_vg_;pVU", "C6R7qyQUl^C`<Q=Nn", "R|hG,=.)2Aj*];_(eU"]), Ty(yy = function(...uu) {
      Ty(uu[ry[12]] = ry[2], uu[-ry[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], uu[ry[0]] = ry[17], uu[ry[13]] = []);
      try {
        Ty(uu[ry[0]] = Object, uu[ry[13]][ry[26]]("".__proto__.constructor.name))
      } catch (Ry) {}
      uu: for (uu[ry[8]] = ry[2]; uu[ry[8]] < uu[-ry[14]][ry[12]]; uu[ry[8]]++) try {
        for (uu[ry[0]] = uu[-ry[14]][uu[ry[8]]](), uu[-ry[15]] = ry[2]; uu[-ry[15]] < uu[ry[13]][ry[12]]; uu[-ry[15]]++)
          if (typeof uu[ry[0]][uu[ry[13]][uu[-ry[15]]]] === ry[16]) continue uu;
        return uu[ry[0]]
      } catch (Ry) {}
      return uu[ry[0]] || this
    }() || {}, Ey = yy.TextDecoder, Ky = yy.Uint8Array, Qy = yy[ry[83]], my = yy.String || String, Jy = yy.Array || Array, Ny = function(...uu) {
      return Ty(uu[ry[12]] = ry[2], uu[ry[27]] = new Jy(ry[62]), uu[ry[28]] = my[ry[23]] || my.fromCharCode, uu[ry[18]] = []),
        function(...Ru) {
          for (Ty(Ru[ry[12]] = ry[0], Ru[ry[0]] = ry[17], Ru[ry[1]] = ry[17], Ru[ry[20]] = Ru[ry[2]][ry[12]], uu[ry[18]][ry[12]] = ry[2]), Ru[ry[19]] = ry[2]; Ru[ry[19]] < Ru[ry[20]];) Ty(Ru[ry[1]] = Ru[ry[2]][Ru[ry[19]]++], Ru[ry[1]] <= ry[79] ? Ru[ry[0]] = Ru[ry[1]] : Ru[ry[1]] <= 223 ? Ru[ry[0]] = (31 & Ru[ry[1]]) << ry[22] | Ru[ry[2]][Ru[ry[19]]++] & ry[21] : Ru[ry[1]] <= 239 ? Ru[ry[0]] = (15 & Ru[ry[1]]) << ry[25] | (Ru[ry[2]][Ru[ry[19]]++] & ry[21]) << ry[22] | Ru[ry[2]][Ru[ry[19]]++] & ry[21] : my[ry[23]] ? Ru[ry[0]] = (Ru[ry[1]] & ry[24]) << 18 | (Ru[ry[2]][Ru[ry[19]]++] & ry[21]) << ry[25] | (Ru[ry[2]][Ru[ry[19]]++] & ry[21]) << ry[22] | Ru[ry[2]][Ru[ry[19]]++] & ry[21] : (Ru[ry[0]] = ry[21], Ru[ry[19]] += ry[29]), uu[ry[18]][ry[26]](uu[ry[27]][Ru[ry[0]]] || (uu[ry[27]][Ru[ry[0]]] = uu[ry[28]](Ru[ry[0]]))));
          return uu[ry[18]][ry[52]]("")
        }
    }()), By(98) in Sy && function(...uu) {
      uu[ry[12]] = ry[2]
    }(), Ty(Xy = Object[By(99)](ry[78]), Vy = void 0), Ty(aR = (...uu) => {
      uu[ry[12]] = ry[0];
      const Ru = function(uu) {
          var Ru;
          return {
            meta: {
              ...uu.meta,
              formatVersion: AR.e,
              variation: null !== (Ru = uu.meta.variation) && void 0 !== Ru ? Ru : null
            },
            initialChunks: uu.initialChunks.map((uu => ({
              chunkPos: uu.chunkPos,
              rle: DR(uu.rle),
              sharedBlockData: UR("sharedBlockData", uu.sharedBlockData)
            }))),
            ticks: uu.ticks.map(OR),
            editState: uu.editState
          }
        }(uu[ry[2]]),
        yu = ER(AR[ry[13]]);
      uu[-ry[64]] = ry[17];
      try {
        uu[-ry[64]] = yu[By(118)](Ru)
      } catch (Jy) {
        function Ju(...uu) {
          for (Ty(uu[ry[12]] = ry[0], uu[ry[0]] = '9dmBaksqDeNjWv#o"/$1gG>=}@p8S?nh:+EA|utPc]FLX[(zZCI,%bV5O0UiT)KwQ.!4YJy~2&fx{*`<r;36^_RlHM7', uu[ry[65]] = "" + (uu[ry[2]] || ""), uu[-ry[66]] = uu[ry[65]].length, uu[ry[19]] = [], uu[ry[13]] = ry[2], uu[ry[22]] = ry[2], uu[ry[24]] = -ry[0]), uu[ry[3]] = ry[2]; uu[ry[3]] < uu[-ry[66]]; uu[ry[3]]++)
            if (uu[ry[67]] = uu[ry[0]].indexOf(uu[ry[65]][uu[ry[3]]]), uu[ry[67]] !== -ry[0])
              if (uu[ry[24]] < ry[2]) uu[ry[24]] = uu[ry[67]];
              else {
                Ty(uu[ry[24]] += uu[ry[67]] * ry[36], uu[ry[13]] |= uu[ry[24]] << uu[ry[22]], uu[ry[22]] += (uu[ry[24]] & ry[37]) > ry[38] ? ry[39] : ry[40]);
                do {
                  Ty(uu[ry[19]].push(uu[ry[13]] & ry[11]), uu[ry[13]] >>= ry[10], uu[ry[22]] -= ry[10])
                } while (uu[ry[22]] > ry[24]);
                uu[ry[24]] = -ry[0]
              } return uu[ry[24]] > -ry[0] && uu[ry[19]].push((uu[ry[13]] | uu[ry[24]] << uu[ry[22]]) & ry[11]), xy(uu[ry[19]])
        }

        function Nu(...uu) {
          return uu[ry[12]] = ry[0], typeof uy[uu[ry[2]]] === ry[16] ? uy[uu[ry[2]]] = Ju(Ry[uu[ry[2]]]) : uy[uu[ry[2]]]
        }

        function Xu(...uu) {
          uu[ry[12]] = ry[2]
        }
        throw Nu(119) + ry[88] in Sy && Xu(), Ty(console[Nu(ry[70])](Ru), yu[Nu(126)](Ru, {
          [Nu(ry[79]) + Nu(ry[62])](...uu) {
            function Ru(...uu) {
              return uu[ry[12]] = ry[0], typeof uy[uu[ry[2]]] === ry[16] ? uy[uu[ry[2]]] = function(...uu) {
                for (Ty(uu[ry[12]] = ry[0], uu[ry[0]] = 'J6ArVltdGOgBpoLPZ.iX8KNMTFs*qD({=f,HU$Q#IuY&Ckn5aR)|ESWc<mjh4y?b!e`v0%"~3@;xw}7_^/>9z:2[1+]', uu[ry[80]] = "" + (uu[ry[2]] || ""), uu[ry[33]] = uu[ry[80]].length, uu[ry[82]] = [], uu[ry[30]] = ry[2], uu[-ry[81]] = ry[2], uu[ry[6]] = -ry[0]), uu[ry[3]] = ry[2]; uu[ry[3]] < uu[ry[33]]; uu[ry[3]]++)
                  if (uu[ry[76]] = uu[ry[0]].indexOf(uu[ry[80]][uu[ry[3]]]), uu[ry[76]] !== -ry[0])
                    if (uu[ry[6]] < ry[2]) uu[ry[6]] = uu[ry[76]];
                    else {
                      Ty(uu[ry[6]] += uu[ry[76]] * ry[36], uu[ry[30]] |= uu[ry[6]] << uu[-ry[81]], uu[-ry[81]] += (uu[ry[6]] & ry[37]) > ry[38] ? ry[39] : ry[40]);
                      do {
                        Ty(uu[ry[82]].push(uu[ry[30]] & ry[11]), uu[ry[30]] >>= ry[10], uu[-ry[81]] -= ry[10])
                      } while (uu[-ry[81]] > ry[24]);
                      uu[ry[6]] = -ry[0]
                    } return uu[ry[6]] > -ry[0] && uu[ry[82]].push((uu[ry[30]] | uu[ry[6]] << uu[-ry[81]]) & ry[11]), xy(uu[ry[82]])
              }(Ry[uu[ry[2]]]) : uy[uu[ry[2]]]
            }
            return Vy = [uu, {}], py(Nu(129), Ru(130) + Ru(131), Ru(132) + Ru(133))[Ru(134) + Ru(135)]
          }
        })), Jy
      }
      const Eu = mR(AR[ry[13]], uu[-ry[64]]),
        Ku = Qu[ry[83]][By(136)](ry[9]);
      return Ku[By(137) + function(...uu) {
        return uu[ry[12]] = ry[0], typeof uy[uu[ry[2]]] === ry[16] ? uy[uu[ry[2]]] = function(...uu) {
          for (Ty(uu[ry[12]] = ry[0], uu[ry[0]] = 'M2!1{kOTs_APgLS9z%eB"qCG3D&cX/urhH*^6fV>Z~d[;Q@]pR}boi,Nw:jEvxy<$+mIaFl?Kt.UWY0Jn(#`4=)758|', uu[-ry[62]] = "" + (uu[ry[2]] || ""), uu[ry[33]] = uu[-ry[62]].length, uu[ry[19]] = [], uu[ry[13]] = ry[2], uu[ry[8]] = ry[2], uu[ry[6]] = -ry[0]), uu[ry[3]] = ry[2]; uu[ry[3]] < uu[ry[33]]; uu[ry[3]]++)
            if (uu[ry[63]] = uu[ry[0]].indexOf(uu[-ry[62]][uu[ry[3]]]), uu[ry[63]] !== -ry[0])
              if (uu[ry[6]] < ry[2]) uu[ry[6]] = uu[ry[63]];
              else {
                Ty(uu[ry[6]] += uu[ry[63]] * ry[36], uu[ry[13]] |= uu[ry[6]] << uu[ry[8]], uu[ry[8]] += (uu[ry[6]] & ry[37]) > ry[38] ? ry[39] : ry[40]);
                do {
                  Ty(uu[ry[19]].push(uu[ry[13]] & ry[11]), uu[ry[13]] >>= ry[10], uu[ry[8]] -= ry[10])
                } while (uu[ry[8]] > ry[24]);
                uu[ry[6]] = -ry[0]
              } return uu[ry[6]] > -ry[0] && uu[ry[19]].push((uu[ry[13]] | uu[ry[6]] << uu[ry[8]]) & ry[11]), xy(uu[ry[19]])
        }(Ry[uu[ry[2]]]) : uy[uu[ry[2]]]
      }(138) + "E"](AR[ry[13]]), Qu[ry[83]].concat([Ku, Eu])
    }, fR = (...uu) => {
      function Ru(...uu) {
        return uu[ry[12]] = ry[0], typeof uy[uu[ry[2]]] === ry[16] ? uy[uu[ry[2]]] = function(...uu) {
          for (Ty(uu[ry[12]] = ry[0], uu[ry[31]] = '3UZDXAeKSoGqmhIEtT0N[/`;&Vg1xrQ"^}p(RMy>f4b9L?+~aHwz*jnkO8<!C_P2:,v%W=J|7u#YB5sF)l.@]i${cd6', uu[-ry[5]] = "" + (uu[ry[2]] || ""), uu[ry[29]] = uu[-ry[5]].length, uu[ry[9]] = [], uu[-ry[84]] = ry[2], uu[-ry[85]] = ry[2], uu[ry[24]] = -ry[0]), uu[ry[10]] = ry[2]; uu[ry[10]] < uu[ry[29]]; uu[ry[10]]++)
            if (uu[ry[76]] = uu[ry[31]].indexOf(uu[-ry[5]][uu[ry[10]]]), uu[ry[76]] !== -ry[0])
              if (uu[ry[24]] < ry[2]) uu[ry[24]] = uu[ry[76]];
              else {
                Ty(uu[ry[24]] += uu[ry[76]] * ry[36], uu[-ry[84]] |= uu[ry[24]] << uu[-ry[85]], uu[-ry[85]] += (uu[ry[24]] & ry[37]) > ry[38] ? ry[39] : ry[40]);
                do {
                  Ty(uu[ry[9]].push(uu[-ry[84]] & ry[11]), uu[-ry[84]] >>= ry[10], uu[-ry[85]] -= ry[10])
                } while (uu[-ry[85]] > ry[24]);
                uu[ry[24]] = -ry[0]
              } return uu[ry[24]] > -ry[0] && uu[ry[9]].push((uu[-ry[84]] | uu[ry[24]] << uu[-ry[85]]) & ry[11]), xy(uu[ry[9]])
        }(Ry[uu[ry[2]]]) : uy[uu[ry[2]]]
      }
      uu[ry[12]] = ry[0];
      const yu = Qu[ry[83]][By(139)](uu[ry[2]]);
      if (yu[Ru(140) + Ru(141)] >= ry[9]) {
        function Eu(...uu) {
          for (Ty(uu[ry[12]] = ry[0], uu[ry[0]] = ';+aejNihcOWAgTBIYD7k8Z]xXC?d|wL`z(fb["s>V4&S=p1vMQ$@EP/n_<.!F*0,{J%6uHo395qRry)}tG:#2lm^U~K', uu[-ry[86]] = "" + (uu[ry[2]] || ""), uu[ry[33]] = uu[-ry[86]].length, uu[ry[9]] = [], uu[ry[13]] = ry[2], uu[ry[22]] = ry[2], uu[ry[24]] = -ry[0]), uu[ry[10]] = ry[2]; uu[ry[10]] < uu[ry[33]]; uu[ry[10]]++)
            if (uu[ry[45]] = uu[ry[0]].indexOf(uu[-ry[86]][uu[ry[10]]]), uu[ry[45]] !== -ry[0])
              if (uu[ry[24]] < ry[2]) uu[ry[24]] = uu[ry[45]];
              else {
                Ty(uu[ry[24]] += uu[ry[45]] * ry[36], uu[ry[13]] |= uu[ry[24]] << uu[ry[22]], uu[ry[22]] += (uu[ry[24]] & ry[37]) > ry[38] ? ry[39] : ry[40]);
                do {
                  Ty(uu[ry[9]].push(uu[ry[13]] & ry[11]), uu[ry[13]] >>= ry[10], uu[ry[22]] -= ry[10])
                } while (uu[ry[22]] > ry[24]);
                uu[ry[24]] = -ry[0]
              } return uu[ry[24]] > -ry[0] && uu[ry[9]].push((uu[ry[13]] | uu[ry[24]] << uu[ry[22]]) & ry[11]), xy(uu[ry[9]])
        }

        function mu(...uu) {
          return uu[ry[12]] = ry[0], typeof uy[uu[ry[2]]] === ry[16] ? uy[uu[ry[2]]] = Eu(Ry[uu[ry[2]]]) : uy[uu[ry[2]]]
        }

        function Ju(...uu) {
          Ty(uu[ry[12]] = ry[2], uu[ry[87]] = function(...Ru) {
            return Ty(Ru[ry[12]] = ry[1], Ru[ry[31]] = [], Ru[ry[60]] = Ru[ry[2]].length, Ru[ry[2]].sort(((uu, Ru) => uu - Ru)), uu[ry[28]](Ru[ry[31]], [], ry[2], Ru[ry[60]], Ru[ry[2]], Ru[ry[0]])), Ru[ry[31]]
          }, uu[ry[28]] = function(Ru, yu, Eu, Ku, Qu, mu) {
            var Ju, Nu = ry[78];
            if (!(mu < ry[2])) {
              if (mu === ry[2]) return Ru.push(yu);
              for (Ju = Eu; Ju < Ku && !(Qu[Ju] > mu); Ju++) Ju > Eu && Qu[Ju] === Qu[Ju - ry[0]] || Ty(Nu = Array.from(yu), Nu.push(Qu[Ju]), uu[ry[28]](Ru, Nu, Ju + ry[0], Ku, Qu, mu - Qu[Ju]))
            }
          }, console.log(uu[ry[87]]))
        }
        mu(ry[86]) + "s" in Sy && Ju();
        const Nu = yu[mu(143) + mu(ry[58])](ry[2]);
        if ((ry[2], AR[ry[88]])(Nu)) {
          function Xu(...uu) {
            for (Ty(uu[ry[12]] = ry[0], uu[ry[31]] = 'dznEKaSNFiGYHPWXDkZmotRMIrQlVOAgTjqcJUs3{&h4evB>#,=fp.b6CLw~)^75/u01*yx%(9"}8[]|!@?_:$2;+<`', uu[-ry[89]] = "" + (uu[ry[2]] || ""), uu[ry[29]] = uu[-ry[89]].length, uu[-ry[68]] = [], uu[ry[92]] = ry[2], uu[-ry[93]] = ry[2], uu[ry[91]] = -ry[0]), uu[ry[90]] = ry[2]; uu[ry[90]] < uu[ry[29]]; uu[ry[90]]++)
              if (uu[ry[76]] = uu[ry[31]].indexOf(uu[-ry[89]][uu[ry[90]]]), uu[ry[76]] !== -ry[0])
                if (uu[ry[91]] < ry[2]) uu[ry[91]] = uu[ry[76]];
                else {
                  Ty(uu[ry[91]] += uu[ry[76]] * ry[36], uu[ry[92]] |= uu[ry[91]] << uu[-ry[93]], uu[-ry[93]] += (uu[ry[91]] & ry[37]) > ry[38] ? ry[39] : ry[40]);
                  do {
                    Ty(uu[-ry[68]].push(uu[ry[92]] & ry[11]), uu[ry[92]] >>= ry[10], uu[-ry[93]] -= ry[10])
                  } while (uu[-ry[93]] > ry[24]);
                  uu[ry[91]] = -ry[0]
                } return uu[ry[91]] > -ry[0] && uu[-ry[68]].push((uu[ry[92]] | uu[ry[91]] << uu[-ry[93]]) & ry[11]), xy(uu[-ry[68]])
          }

          function Vu(...uu) {
            return uu[ry[12]] = ry[0], typeof uy[uu[ry[2]]] === ry[16] ? uy[uu[ry[2]]] = Xu(Ry[uu[ry[2]]]) : uy[uu[ry[2]]]
          }
          const ru = yu[Vu(145)](ry[9]),
            Bu = QR(Nu) ? Qu[ry[83]][Vu(146)](JR(Nu, ru)) : ru;
          return function(uu) {
            var Ru, yu, Eu, Qu, mu;
            const Ju = null === (Ru = uu.meta) || void 0 === Ru ? void 0 : Ru.formatVersion;
            if (!(0, AR.l)(Ju)) throw new Error(`Unsupported recording format version: ${Ju}`);
            if (!Array.isArray(uu.initialChunks) || !Array.isArray(uu.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const Ku of uu.ticks)
              if (!Array.isArray(Ku.structuralEvents) || !Array.isArray(Ku.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const Nu = {
              ...uu.meta
            };
            return Nu.formatVersion = AR.e, (0, Ku.E)(Nu.variation) && delete Nu.variation, {
              meta: Nu,
              initialChunks: uu.initialChunks.map((uu => {
                var Ru;
                return {
                  chunkPos: uu.chunkPos,
                  rle: MR(uu.rle),
                  sharedBlockData: null !== (Ru = nR("sharedBlockData", uu.sharedBlockData)) && void 0 !== Ru ? Ru : []
                }
              })),
              ticks: uu.ticks.map(vR),
              editState: {
                cameraKeyframes: null !== (yu = null === (Eu = uu.editState) || void 0 === Eu ? void 0 : Eu.cameraKeyframes) && void 0 !== yu ? yu : [],
                playbackMark: null !== (Qu = null === (mu = uu.editState) || void 0 === mu ? void 0 : mu.playbackMark) && void 0 !== Qu ? Qu : null
              }
            }
          }(ER(Nu)[Vu(147)](Bu))
        }
      }
      throw new Error(Ru(148) + Ru(149) + Ru(ry[71]) + Ru(ry[7]) + ry[19])
    })
  },
  36753: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu,
      e: () => Eu,
      i: () => ru,
      k: () => Bu,
      l: () => Qu,
      n: () => Xu,
      p: () => xu,
      s: () => Nu,
      w: () => Vu,
      y: () => Ju
    });
    const Eu = 9,
      Ku = [9];

    function Qu(uu) {
      return Ku.includes(uu)
    }
    const mu = 100,
      Ju = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      Nu = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      Xu = ["itemName", "amount", "position", "size", "attributes"],
      Vu = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      ru = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "MI", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      Bu = ["selectedSlotIndex", "slots"],
      xu = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36750: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => ru,
      h: () => Su,
      k: () => Nu,
      o: () => mu,
      s: () => Ju,
      v: () => Xu
    });
    var Eu = yu(343),
      Ku = yu(34);

    function Qu(uu) {
      return null === uu || void 0 === uu ? null : "string" === typeof uu ? uu : null
    }

    function mu(uu, Ru) {
      return JSON.stringify(uu) === JSON.stringify(Ru)
    }

    function Ju(uu) {
      const Ru = [];
      for (const yu of Object.keys(uu)) {
        const Eu = uu[yu];
        for (const uu of Object.keys(Eu)) Ru.push({
          mR: yu,
          name: uu,
          ...Eu[uu]
        })
      }
      return Ru
    }

    function Nu(uu) {
      const Ru = {};
      for (const Qu of uu) {
        var yu, Eu, Ku;
        Ru[Qu.mR] || (Ru[Qu.mR] = {}), Ru[Qu.mR][Qu.name] = {
          icon: Qu.icon,
          level: Qu.level,
          displayName: null !== (yu = Qu.displayName) && void 0 !== yu ? yu : null,
          endTick: null !== (Eu = Qu.endTick) && void 0 !== Eu ? Eu : null,
          showInNametag: null === (Ku = Qu.showInNametag) || void 0 === Ku || Ku
        }
      }
      return Ru
    }

    function Xu(uu, Ru) {
      const yu = {};
      for (const Ku of Object.keys(uu)) {
        const Qu = {};
        for (const yu of Object.keys(uu[Ku])) {
          const Eu = uu[Ku][yu];
          null !== Eu.endTick && Eu.endTick < Ru || (Qu[yu] = {
            ...Eu,
            endTick: null === Eu.endTick ? null : Eu.endTick - Ru
          })
        }(0, Eu.Ic)(Qu) || (yu[Ku] = Qu)
      }
      return yu
    }

    function Vu(uu, Ru, yu) {
      if (null !== uu) return Math.max(0, 1e3 * (uu - Ru) / yu)
    }
    class ru {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(uu, Ru) {
        this.clear();
        const yu = Date.now();
        for (const Ju of uu.iterateEntityIds()) {
          const Nu = uu.getEffects(Ju);
          if ((0, Eu.Ic)(Nu)) continue;
          const Xu = Ru(Ju);
          for (const uu of Object.keys(Nu)) {
            var Ku, mu;
            const Ru = Nu[uu];
            this.upsert(Xu, uu, {
              icon: Ru.icon,
              level: Ru.level,
              displayName: Qu(Ru.displayName),
              showInNametag: null === (Ku = Ru.showInNametag) || void 0 === Ku || Ku,
              endTime: void 0 !== Ru.duration && null !== Ru.duration ? (null !== (mu = Ru.appliedAt) && void 0 !== mu ? mu : yu) + Ru.duration : null
            })
          }
        }
      }
      upsert(uu, Ru, yu) {
        this.tracked[uu] || (this.tracked[uu] = {}), this.tracked[uu][Ru] = yu
      }
      remove(uu, Ru) {
        const yu = this.tracked[uu];
        yu && (delete yu[Ru], (0, Eu.Ic)(yu) && delete this.tracked[uu])
      }
      handleUpdate(uu) {
        var Ru;
        0 !== uu.duration ? this.upsert(uu.mR, uu.name, {
          icon: uu.icon,
          level: uu.level,
          displayName: Qu(uu.displayName),
          showInNametag: null === (Ru = uu.showInNametag) || void 0 === Ru || Ru,
          endTime: void 0 !== uu.duration && null !== uu.duration ? Date.now() + uu.duration : null
        }) : this.remove(uu.mR, uu.name)
      }
      handleRemove(uu, Ru) {
        this.remove(uu, Ru)
      }
      sample(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const Ku = {},
          Qu = 1e3 / Ru;
        for (const mu of Object.keys(this.tracked)) {
          const Ru = this.tracked[mu],
            Ju = {};
          for (const Eu of Object.keys(Ru)) {
            const Ku = Ru[Eu];
            let Nu = null;
            if (null !== Ku.endTime) {
              const Ru = Math.max(0, Ku.endTime - yu);
              if (0 === Ru) {
                this.remove(mu, Eu);
                continue
              }
              Nu = uu + Math.ceil(Ru / Qu)
            }
            Ju[Eu] = {
              icon: Ku.icon,
              level: Ku.level,
              displayName: Ku.displayName,
              endTick: Nu,
              showInNametag: Ku.showInNametag
            }
          }(0, Eu.Ic)(Ju) || (Ku[mu] = Ju)
        }
        return Ku
      }
    }

    function Bu(uu, Ru, yu, Eu) {
      uu.hasEntity(Ru) ? uu.updateEffect(Ru, yu, Eu) : function(uu, Ru, yu) {
        Ku.k.Op("EffectUpdate", {
          mR: uu,
          name: Ru,
          ...yu
        }, !0)
      }(Ru, yu, Eu)
    }

    function xu(uu, Ru, yu) {
      uu.hasEntity(Ru) ? uu.removeEffect(Ru, yu) : function(uu, Ru) {
        Ku.k.Op("RemoveEffect", {
          mR: uu,
          name: Ru
        }, !0)
      }(Ru, yu)
    }

    function Su(uu, Ru, yu, Eu, Ku, Qu, mu) {
      for (const Vu of Object.keys(yu))
        for (const Qu of Object.keys(yu[Vu])) {
          var Ju;
          null !== (Ju = Ru[Vu]) && void 0 !== Ju && Ju[Qu] || (xu(uu, Vu, Qu), Eu && Vu === Eu && String(Ku) !== String(Vu) && xu(uu, Ku, Qu))
        }
      for (const pu of Object.keys(Ru))
        for (const Ju of Object.keys(Ru[pu])) {
          var Nu, Xu;
          const Tu = Ru[pu][Ju],
            Wu = Vu(Tu.endTick, Qu, mu);
          if (0 === Wu) {
            xu(uu, pu, Ju), Eu && pu === Eu && String(Ku) !== String(pu) && xu(uu, Ku, Ju);
            continue
          }
          const ju = null === (Nu = yu[pu]) || void 0 === Nu ? void 0 : Nu[Ju],
            Hu = ju && (Su = Tu, (ru = ju).icon === Su.icon && ru.level === Su.level && ru.displayName === Su.displayName && ru.endTick === Su.endTick && ru.showInNametag === Su.showInNametag),
            du = {
              icon: Tu.icon,
              level: Tu.level,
              displayName: null !== (Xu = Tu.displayName) && void 0 !== Xu ? Xu : void 0,
              duration: Wu,
              showInNametag: Tu.showInNametag
            };
          Hu || Bu(uu, pu, Ju, du), Eu && pu === Eu && Bu(uu, Ku, Ju, {
            ...du,
            showInNametag: !1
          })
        }
      var ru, Su
    }
  },
  36729: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Xu,
      h: () => Nu,
      j: () => ru,
      l: () => mu,
      o: () => Vu
    });
    var Eu = yu(36723),
      Ku = yu(36736);
    const Qu = {
      description: "Bloxd Replay",
      accept: {
        [Eu.f]: Eu.e
      }
    };

    function mu() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function Ju(uu) {
      return uu instanceof DOMException && "AbortError" === uu.name
    }
    async function Nu() {
      try {
        const [uu] = await window.showOpenFilePicker({
          multiple: !1,
          types: [Qu]
        }), Ru = await uu.getFile();
        return {
          handle: uu,
          bytes: new Uint8Array(await Ru.arrayBuffer())
        }
      } catch (uu) {
        if (Ju(uu)) return null;
        throw uu
      }
    }
    async function Xu(uu) {
      if (uu && await async function(uu) {
          const Ru = {
            mode: "readwrite"
          };
          return "granted" === await uu.queryPermission(Ru) || "granted" === await uu.requestPermission(Ru)
        }(uu)) return uu;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, Eu.k)(),
          types: [Qu]
        })
      } catch (Ru) {
        if (Ju(Ru)) return null;
        throw Ru
      }
    }
    async function Vu(uu, Ru) {
      const yu = await uu.createWritable();
      await yu.write(new Blob([Ru], {
        type: Eu.f
      })), await yu.close()
    }

    function ru(uu) {
      return (0, Eu.i)((0, Ku.c)(uu))
    }
  },
  36304: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => ru
    });
    var Eu = yu(27),
      Ku = yu(106),
      Qu = yu(47),
      mu = yu(684),
      Ju = yu(3255),
      Nu = yu(6436);
    const Xu = "shaderPackListingCheckedAt",
      Vu = 36e5;

    function ru() {
      const {
        canUseShaderPacks: uu
      } = Ku.featureFlags.settings;
      var Ru, ru;
      (0, Ju.m)(uu) && !(0, Ju.l)(uu) && (Ru = Qu.i.getItem(Xu), ru = Date.now(), "number" !== typeof Ru || ru < Ru || ru - Ru >= Vu) && (0, mu.c)((() => {
        (async function() {
          if ("landingPage" !== Eu.d.get("gameState")) return;
          const uu = await (0, Nu.h)();
          if (void 0 === (null === uu || void 0 === uu ? void 0 : uu.listing)) return;
          Qu.i.setItem(Xu, Date.now());
          const {
            followListingUpdates: Ru
          } = await Promise.all([yu.e(74), yu.e(131), yu.e(123)]).then((() => yu(40891)));
          await Ru(uu, uu.listing) || Qu.i.removeItem(Xu)
        })().catch((uu => {
          console.error("Failed to check the shader pack listing for an update", uu)
        }))
      }))
    }
  },
  36332: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Nu
    });
    var Eu = yu(330),
      Ku = yu(27),
      Qu = yu(36341),
      mu = yu(1583),
      Ju = yu(1915);

    function Nu(uu, Ru) {
      var yu, Nu, Xu;
      if (!Ku.d.get("isKeydownEnabled") || uu.repeat) return;
      const Vu = uu.code;
      "Escape" === uu.key ? (0, mu.k)(uu) : null !== (yu = Ju.x.OpenSettings) && void 0 !== yu && yu.includes(Vu) ? (0, mu.u)(uu, Eu.s.SETTINGS) : null !== (Nu = Ju.x.OpenCharacterCustomization) && void 0 !== Nu && Nu.includes(Vu) ? (0, Qu.e)() || (0, mu.u)(uu, Eu.s.CUSTOMISATION, Ru()) : null !== (Xu = Ju.x.ShowDebugOverlay) && void 0 !== Xu && Xu.includes(Vu) && Ku.d.set({
        showDebugOverlay: !Ku.d.get("showDebugOverlay")
      })
    }
  },
  36312: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Gu
    });
    var Eu = yu(610),
      Ku = yu(1207),
      Qu = yu(174);
    const mu = "cf-";

    function Ju(uu) {
      return `${mu}${uu}`
    }

    function Nu(uu) {
      return uu.startsWith(Ju("game-server-"))
    }

    function Xu(uu) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(uu)
    }
    var Vu = yu(1217),
      ru = yu(1199),
      Bu = yu(34),
      xu = yu(1688),
      Su = yu(1711),
      pu = yu(2751),
      Tu = yu(1269),
      Wu = yu(1280),
      ju = yu(1447),
      Hu = yu(1176),
      du = yu(36316),
      bu = yu(47),
      Cu = yu(145),
      ku = yu(1739);
    const eu = Date.UTC(2026, 10, 25),
      Au = 1728e5,
      Du = "gameServerRoute";
    async function Mu(uu) {
      if (!uu.ok) {
        const Ru = await uu.text().catch((() => ""));
        return 403 === uu.status && "ipv6_unsupported" === Ru ? "ipv6Refused" : "other"
      }
      const Ru = await uu.json().catch((() => null));
      return "object" === typeof Ru && null !== Ru && Number.isFinite(Ru.version) ? "ours" : "other"
    }
    const Iu = new class {
      constructor(uu) {
        this.deps = uu
      }
      hostFor(uu) {
        return this.deps.enabled && Xu(uu) && "cloudflare" === this.heldRoute() ? Ju(uu) : uu
      }
      async afterJoinFailed(uu, Ru) {
        var yu;
        if (!this.deps.enabled || void 0 === Ru) return !1;
        const Eu = new URL(uu).hostname,
          Ku = this.stored();
        if (Nu(Eu)) {
          var Qu;
          if (this.deps.Px("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === Ku || void 0 === Ku ? void 0 : Ku.route) || Ku.aliasFailedOnce || "ours" !== (await this.probeHost(Eu)).answer) this.store({
            arm: null !== (Qu = null === Ku || void 0 === Ku ? void 0 : Ku.arm) && void 0 !== Qu ? Qu : "cloudflare",
            route: "direct",
            until: this.deps.now() + 36e5
          });
          else this.store({
            ...Ku,
            aliasFailedOnce: !0
          });
          return !1
        }
        if (!Xu(Eu) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: mu,
          cfMs: Ju
        } = await this.check(Eu);
        if ("blocked" !== mu) return this.deps.Px("game_server_route", mu, Ju), !1;
        const Vu = this.deps.now() >= eu ? "cloudflare" : null !== (yu = null === Ku || void 0 === Ku ? void 0 : Ku.arm) && void 0 !== yu ? yu : 100 * this.deps.random() < 20 ? "holdout" : "cloudflare";
        return "holdout" === Vu ? (this.store({
          arm: Vu,
          route: "direct",
          until: Math.min(this.deps.now() + Au, eu)
        }), this.deps.Px("game_server_route", "blocked_holdout", Ju), !1) : (this.store({
          arm: Vu,
          route: "cloudflare",
          until: this.deps.now() + Au
        }), this.deps.Px("game_server_route", "blocked", Ju), !0)
      }
      afterJoined(uu) {
        if (!this.deps.enabled) return;
        const Ru = new URL(uu).hostname,
          yu = Nu(Ru);
        if (yu) this.deps.Px("game_server_route", "cf_join", 0);
        else if (!Xu(Ru) || this.deps.random() >= .01) return;
        const Eu = yu ? Ru.slice(mu.length) : Ru;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(Eu, "direct", "direct_failed"), await this.reportRtt(Ju(Eu), "cf", "cf_failed")
        }))
      }
      async check(uu) {
        const Ru = this.probeHost(Ju(uu));
        if ("none" !== (await this.probeHost(uu)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: yu,
          ms: Eu
        } = await Ru;
        return "ours" !== yu && "ipv6Refused" !== yu ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(uu)).answer ? {
          outcome: "direct_reachable",
          cfMs: Eu
        } : {
          outcome: "ipv6Refused" === yu ? "blocked_ipv6" : "blocked",
          cfMs: Eu
        }
      }
      async reportRtt(uu, Ru, yu) {
        const Eu = "ours" === (await this.probeHost(uu)).answer ? await this.probeHost(uu) : null;
        "ours" === (null === Eu || void 0 === Eu ? void 0 : Eu.answer) ? this.deps.Px("game_server_rtt", Ru, Eu.ms): this.deps.Px("game_server_rtt", yu, 0)
      }
      probeHost(uu) {
        return this.deps.probe(`https://${uu}/version`, 8e3)
      }
      stored() {
        return function(uu) {
          if ("object" !== typeof uu || null === uu) return null;
          const {
            arm: Ru,
            route: yu,
            until: Eu,
            aliasFailedOnce: Ku
          } = uu;
          return "cloudflare" !== Ru && "holdout" !== Ru || "cloudflare" !== yu && "direct" !== yu || "number" !== typeof Eu ? null : !0 === Ku ? {
            arm: Ru,
            route: yu,
            until: Eu,
            aliasFailedOnce: Ku
          } : {
            arm: Ru,
            route: yu,
            until: Eu
          }
        }(this.deps.storage.getItem(Du))
      }
      heldRoute() {
        const uu = this.stored();
        return null !== uu && uu.until > this.deps.now() ? uu.route : null
      }
      store(uu) {
        this.deps.storage.setItem(Du, uu)
      }
    }({
      storage: bu.i,
      probe: async function(uu, Ru) {
        const yu = performance.now(),
          Eu = await (0, ku.l)(uu, {
            cache: "no-store"
          }, Ru, (async uu => {
            const Ru = Math.round(performance.now() - yu);
            return {
              answer: await Mu(uu),
              ms: Ru
            }
          }));
        return null !== Eu && void 0 !== Eu ? Eu : {
          answer: "none",
          ms: 0
        }
      },
      Px: xu.r,
      enabled: !(0, Cu.c)(),
      now: Date.now,
      random: Math.random,
      delay: uu => new Promise((Ru => {
        setTimeout(Ru, uu)
      }))
    });

    function Gu(uu) {
      return async (Ru, yu, mu, Ju, Xu) => {
        let ru;
        if ((0, Eu.E)(mu)) {
          if (Xu.aborted) return Uu();
          const uu = await nu(Ru, yu, Ju);
          if (Xu.aborted || pu.g.matchmakingEnded(uu.isError() ? null : performance.now()), uu.isError()) {
            const Ru = uu.asError();
            return console.log("Join room did not succeed, reason:", Ru.message), Ru.forward()
          }
          ru = uu.getValue()
        } else {
          pu.g.skipPlayWait();
          const uu = su(mu.replace("https://", "").replace("http://", ""));
          if (uu.isError()) return uu.asError().forward();
          ru = {
            endpoint: uu.getValue(),
            gameNameWithVariation: yu,
            lobbyName: Ru instanceof Ku.e ? Ru.getLobbyName() : Ru
          }
        }
        if (Xu.aborted) return Uu();
        console.log(`Connecting to ${ru.gameNameWithVariation} in lobby ${ru.lobbyName} on game server ${ru.endpoint}`), Bu.k.Op("matchmakeAndPlayStepCompleted", {
          step: Qu.p.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, xu.j)(), Su.b.markGameLoadStart(), (0, Wu.n)({
          websocketUrl: ru.endpoint,
          gameNameWithVariation: ru.gameNameWithVariation,
          lobbyName: ru.lobbyName
        }), Bu.k.Op("loadingScreenState", "loadingPage:loadingGame");
        const ju = async () => {
          const uu = await async function(uu, Ru, yu, Eu) {
            const Ku = await nu(uu, Ru, yu);
            if (!Ku.isError() && !Eu.aborted) {
              const {
                endpoint: uu,
                gameNameWithVariation: Ru,
                lobbyName: yu
              } = Ku.getValue();
              (0, Wu.n)({
                websocketUrl: uu,
                gameNameWithVariation: Ru,
                lobbyName: yu
              })
            }
            return Ku
          }(Ru, yu, Ju, Xu);
          return uu.isError() || (ru = uu.getValue()), uu
        }, Hu = !(0, Eu.E)(mu), du = () => uu({
          place: ru,
          userContext: Ju,
          direct: Hu,
          rematch: ju
        }, Xu);
        let bu = await du();
        const Cu = bu.isError() && !0 === bu.asError().debugResult.rematch;
        if (bu.isError() && !Hu && !Xu.aborted && (Cu || await Iu.afterJoinFailed(ru.endpoint, bu.asError().debugResult.gameServerUnreachable))) {
          if (Xu.aborted) return Uu();
          console.log("Matchmaking again");
          const uu = await ju();
          if (uu.isError()) return uu.asError().forward();
          if (Xu.aborted) return Uu();
          bu = await du(), !bu.isError() || Cu && !Nu(new URL(ru.endpoint).hostname) || await Iu.afterJoinFailed(ru.endpoint, bu.asError().debugResult.gameServerUnreachable)
        }
        return bu.isError() ? bu.asError().forward() : (Iu.afterJoined(ru.endpoint), (0, Tu.$)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), Vu.c.value({
          gameNameWithVariation: ru.gameNameWithVariation,
          lobbyName: ru.lobbyName,
          addLobbyToRecentlyPlayed: !(Ru instanceof Ku.e)
        }))
      }
    }

    function Uu() {
      return Vu.c.errorWithCode("Left the game while it loaded", Qu.p.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        Ty: !0
      })
    }
    async function nu(uu, Ru, yu) {
      return (0, Eu.E)(uu) || uu instanceof Ku.e || !(uu.length > ru.O) ? await ju.e.matchmakePlayer(yu, uu, Ru, (0, du.b)()).then((uu => {
        if (!1 === uu.succeeded) return Vu.c.errorWithCode(uu.failReason, Qu.p.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: Ru,
          lobbyName: yu,
          gameNameWithVariation: Eu
        } = uu, Ku = su(Iu.hostFor(Ru));
        return Ku.isError() ? Ku.asError().forward() : Vu.c.value({
          endpoint: Ku.getValue(),
          gameNameWithVariation: Eu,
          lobbyName: yu
        })
      })).catch((uu => (console.error("Bad response from the matchmaking server:", uu), Vu.c.errorWithCode(uu.toString(), Qu.p.REQUEST_TO_MATCHMAKING, {
        error: uu,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", uu), Vu.c.errorWithCode("This lobby link's name is too long. Ask for a new link.", Qu.p.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function su(uu) {
      const Ru = Hu.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(uu);
      return Ru.isError() ? Vu.c.errorWithCode(Ru.asError().message, Qu.p.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : Vu.c.value(Ru.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, Wu.j)("/")
    }
  },
  8960: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => xu,
      d: () => Bu
    });
    var Eu = yu(27),
      Ku = yu(1626),
      Qu = yu(47),
      mu = yu(1311),
      Ju = yu(3475),
      Nu = yu(1422),
      Xu = yu(1354);
    const Vu = 2592e5,
      ru = "notificationOptInLastPromptedAt";
    async function Bu() {
      var uu;
      const Ru = await xu();
      if (null === Ru) return;
      const yu = null !== (uu = Qu.i.getItem(ru)) && void 0 !== uu ? uu : 0;
      if (Date.now() - yu < Vu) return;
      if ((0, Xu.g)()) return;
      const Eu = await mu.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Ku.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Eu && (Qu.i.setItem(ru, Date.now()), (0, Nu.reportAnalyticsClick)({
        id: !0 === Eu ? "push.allow" : "push.deny",
        value: Ku.d.supports("notifications") ? "app" : "browser"
      }), !0 === Eu && Ru().catch((uu => {
        console.error("Failed to ask for push notifications:", uu)
      })))
    }
    async function xu() {
      return await Ku.d.ready, Ku.d.supports("notifications") ? Eu.d.get("mobilePushNotificationsCanAsk") ? async () => {
        Ku.d.request("notifications.requestPermission", {}).then((uu => {
          let {
            canAsk: Ru
          } = uu;
          Eu.d.set({
            mobilePushNotificationsCanAsk: Ru
          })
        }), (uu => {
          console.error("The app couldn't ask for push notifications:", uu)
        }))
      }: null: await Ju.b.canAsk() ? () => Ju.b.requestPermission() : null
    }
  },
  36322: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Bu,
      h: () => Vu,
      l: () => xu,
      n: () => ru
    });
    var Eu = yu(343),
      Ku = yu(631),
      Qu = yu(642),
      mu = yu(47);
    const Ju = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Nu = "playSessionGameNameWithVariation",
      Xu = "wasMatchmakePlayer";

    function Vu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j;
      (0, Qu.h)(uu, Ju)
    }

    function ru() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j).setItem(Xu, !0)
    }

    function Bu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j;
      return (0, Qu.c)(uu, Ju)
    }

    function xu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mu.j;
      const yu = (0, Qu.c)(Ru, Ju),
        Vu = function(uu) {
          const Ru = uu.getItem(Nu);
          return "string" !== typeof Ru ? null : Ru
        }(Ru),
        ru = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j).getItem(Xu)
        }(Ru);
      let Bu;
      return Bu = null !== yu && null !== Vu && (0, Qu.e)(Ru, Ju) && function(uu, Ru, yu) {
          const Ku = (0, Eu.cc)(uu),
            Qu = (0, Eu.cc)(Ru),
            mu = (0, Eu.Wb)(uu),
            Ju = (0, Eu.Wb)(Ru);
          return !(Ku !== Qu || !yu) || Ku === Qu && mu === Ju
        }(Vu, uu, ru) ? yu : (0, Ku.d)(), (0, Qu.i)(Ru, Ju, Bu), Ru.setItem(Nu, uu),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j).removeItem(Xu)
        }(Ru), Bu
    }
  },
  36316: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ju,
      c: () => Hu
    });
    var Eu = yu(1001),
      Ku = yu(614),
      Qu = yu(343),
      mu = yu(1008),
      Ju = yu(624),
      Nu = yu(654),
      Xu = yu(4291),
      Vu = yu(106),
      ru = yu(145),
      Bu = yu(1661),
      xu = yu(125),
      Su = yu(36322),
      pu = yu(47),
      Tu = yu(640),
      Wu = yu(36324);

    function ju() {
      var uu, Ru;
      return [...null !== (uu = navigator.languages) && void 0 !== uu ? uu : [null !== (Ru = navigator.language) && void 0 !== Ru ? Ru : "none"], "en-Gb"]
    }

    function Hu(uu, Ru, yu, Hu, du) {
      const bu = (0, Eu.i)(Ru) ? (0, Eu.n)(Ru) : null,
        Cu = {
          cookies: (0, Bu.getAllCookiesForGameNameWithVariation)(Ru),
          isMobile: (0, Vu.isMobile)(),
          isUsingCustomGameTexturePack: null !== bu && du(bu),
          generalCookies: {
            joinDiscord: !!pu.i.getItem("DiscordPressed"),
            newGo: Xu.b,
            ...uu.getMetricsCookies(),
            trafficCode: Hu,
            compliance: Vu.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Vu.getBrowserName)(),
            version: (0, Vu.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Vu.getPlatformType)(),
            deviceType: (0, xu.c)()
          },
          isLoggedIn: uu.isLoggedIn(),
          lobbyName: yu,
          languages: ju(),
          version: Ku.c,
          siteUsed: ru.v,
          subsiteUsed: ru.C,
          playSessionId: (0, Su.l)(Ru),
          visitSessionId: (0, Tu.e)(),
          clientReason: Ju.i.reason,
          budgetBasis: (0, Wu.f)(),
          ...null !== Nu.n && {
            diagClaim: Nu.n.claimId
          }
        };
      return null !== bu && (0, Qu.Qc)(bu) ? (Cu.lobbyName = (0, Eu.h)(bu, (0, Eu.m)(Ru), yu), {
        roomName: `classic_${mu.e}`,
        joinOptions: Cu
      }) : {
        roomName: Ru,
        joinOptions: Cu
      }
    }
  },
  36414: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      for (let yu = 0; yu < uu.length; yu++)
        if (uu[yu].identifier === Ru) return uu[yu];
      return null
    }

    function Ku(uu, Ru) {
      return null !== Eu(uu, Ru)
    }
    yu.d(Ru, {
      c: () => Eu,
      d: () => Ku
    })
  },
  36656: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => cu,
      D: () => tu,
      F: () => Lu,
      d: () => Nu,
      e: () => Iu,
      g: () => Ju,
      j: () => su,
      n: () => Du,
      p: () => Cu,
      r: () => nu,
      s: () => Uu,
      t: () => Au,
      w: () => lu,
      y: () => gu
    });
    var Eu = yu(47);
    const Ku = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Qu = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      mu = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Ju = Qu.filter((uu => "docsButton" !== uu)),
      Nu = mu.filter((uu => "aiHelperButton" !== uu)),
      Xu = "codeEditorTutorials",
      Vu = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      ru = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Bu = null,
      xu = null;
    const Su = new Set,
      pu = new Set;
    let Tu = null;
    const Wu = new Set,
      ju = new Set;

    function Hu() {
      ju.forEach((uu => {
        uu()
      }))
    }

    function du() {
      if (!Bu) {
        const uu = Eu.i.getItem(Xu);
        Bu = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof uu && null !== uu ? uu : {}
        }
      }
      return Bu
    }

    function bu(uu) {
      const Ru = du();
      Ru[uu] || (Bu = {
        ...Ru,
        [uu]: !0
      }, Eu.i.setItem(Xu, Bu))
    }

    function Cu(uu) {
      return "docsOverview" === uu ? Qu : "aiHelperOverview" === uu ? mu : xu ? Ku[xu] : []
    }

    function ku(uu) {
      return ("worldCodeButton" !== uu || !du().worldCodeIntroShown) && !Wu.has(uu)
    }

    function eu(uu) {
      var Ru;
      return (null === (Ru = Tu) || void 0 === Ru ? void 0 : Ru.name) === uu ? Tu.stepsDone : Su
    }

    function Au(uu, Ru) {
      if (! function(uu) {
          return Tu ? Tu.name === uu : "welcome" === uu
        }(uu) || !ku(Ru) || eu(uu).has(Ru)) return !1;
      if (Tu) return !0;
      const yu = Vu[Ru];
      return yu ? !du()[yu] || pu.has(Ru) : !du()[ru[uu]]
    }

    function Du(uu) {
      var Ru;
      return null !== (Ru = Cu(uu).find((Ru => Au(uu, Ru)))) && void 0 !== Ru ? Ru : null
    }

    function Mu(uu) {
      var Ru;
      bu(ru[uu]), (null === (Ru = Tu) || void 0 === Ru ? void 0 : Ru.name) === uu && (Tu = null)
    }

    function Iu(uu) {
      const Ru = (Tu ? [Tu.name] : ["welcome", "docsOverview"]).find((Ru => Du(Ru) === uu));
      if (!Ru) return;
      eu(Ru).add(uu);
      const yu = Vu[uu];
      yu && (bu(yu), Tu || pu.add(uu)), null === Du(Ru) && Mu(Ru), Hu()
    }

    function Gu(uu, Ru) {
      const yu = Cu(uu),
        Eu = eu(uu);
      for (let Ku = yu.indexOf(Ru) - 1; Ku >= 0; Ku--)
        if (Eu.has(yu[Ku]) && ku(yu[Ku])) return yu[Ku];
      return null
    }

    function Uu(uu, Ru) {
      return null !== Gu(uu, Ru)
    }

    function nu(uu, Ru) {
      const yu = Gu(uu, Ru);
      yu && (eu(uu).delete(yu), Hu())
    }

    function su(uu) {
      Mu(uu), "welcome" === uu && Cu("welcome").forEach((uu => {
        const Ru = Vu[uu];
        Ru && bu(Ru)
      })), Hu()
    }

    function tu(uu) {
      Tu = {
        name: uu,
        stepsDone: new Set
      }, Hu()
    }

    function lu() {
      (Tu || 0 !== Su.size || 0 !== pu.size) && (Tu = null, Su.clear(), pu.clear(), Hu())
    }

    function gu(uu, Ru) {
      const yu = Ru ? uu : xu === uu ? null : xu;
      yu !== xu && (xu = yu, Hu())
    }

    function cu(uu, Ru) {
      Wu.has(uu) === Ru && (Ru ? Wu.delete(uu) : Wu.add(uu), Hu())
    }

    function Lu(uu) {
      return ju.add(uu), () => {
        ju.delete(uu)
      }
    }
  },
  36330: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      g: () => Ku,
      h: () => Qu
    });
    const Eu = 1024,
      Ku = 1024 * Eu;

    function Qu(uu) {
      return (uu / Ku).toFixed(1)
    }
  },
  36328: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      g: () => Ju,
      i: () => mu,
      j: () => Nu,
      l: () => Xu
    });
    var Eu = yu(212);
    const Ku = 32 * yu(36330).g,
      Qu = 6144,
      mu = 4608,
      Ju = 512;

    function Nu(uu) {
      return Math.floor(Ku * uu / Qu)
    }

    function Xu(uu) {
      const Ru = uu - Math.floor(uu / 6);
      let yu = Eu.f.maxChunkHorizAddDistance,
        Ku = Eu.f.maxChunkVertAddDistance;
      if (Vu(yu + 1, Ku + 1) <= Ru) return null;
      for (; Vu(yu + 1, Ku + 1) > Ru && (yu > 0 || Ku > 0);) yu > Ku ? yu-- : Ku--;
      return {
        horizontal: yu,
        vertical: Ku
      }
    }

    function Vu(uu, Ru) {
      const yu = Math.max(uu, Ru);
      let Eu = 0;
      for (let Ku = -yu; Ku <= yu; Ku++)
        for (let Qu = -yu; Qu <= yu; Qu++)
          for (let mu = -yu; mu <= yu; mu++) ru(uu, Ru, Ku, Qu, mu) && Eu++;
      return Eu
    }

    function ru(uu, Ru, yu, Eu, Ku) {
      const Qu = yu * yu + Ku * Ku;
      return uu === Ru ? Qu + Eu * Eu <= uu * uu : uu > Ru ? Math.abs(Eu) <= Ru && Qu + Eu * Eu <= uu * uu : Qu <= uu * uu && Qu + Eu * Eu <= Ru * Ru
    }
  },
  36324: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Cu,
      f: () => bu,
      g: () => du
    });
    var Eu = yu(212),
      Ku = yu(106),
      Qu = yu(2716),
      mu = yu(4164),
      Ju = yu(629),
      Nu = yu(36328);
    const Xu = 1048576,
      Vu = 1024 * Xu,
      ru = 400 * Xu,
      Bu = 147456,
      xu = .5,
      Su = 1.5 * Vu,
      pu = 768 * Xu;

    function Tu(uu) {
      return ru + uu * Bu
    }

    function Wu(uu, Ru, yu) {
      var Ku, mu;
      let {
        footprintBytes: Ju,
        basis: Xu,
        namesLimit: Wu
      } = function(uu) {
        const {
          os: Ru,
          deviceMemory: yu
        } = uu;
        if ("ios" === Ru) switch ((0, Qu.f)(uu)) {
          case "ipad_m":
            return {
              footprintBytes: Tu(Nu.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: pu, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Su, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: pu, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof yu && Number.isFinite(yu) && yu > 0 ? {
          footprintBytes: yu * Vu * xu,
          basis: `memory-${yu}`,
          namesLimit: !0
        } : "android" === Ru ? {
          footprintBytes: pu,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: Tu(Nu.i),
          basis: "unreported",
          namesLimit: !1
        }
      }(uu);
      if (yu) {
        const uu = Math.min(Ju, Tu(Nu.e));
        Ju = ru + Math.max(0, uu - ru) / 2, Xu += "+killed", Wu = !0
      }
      null !== Ru && Tu(Ru) < Ju && (Ju = Tu(Ru), Xu += "+learned", Wu = !0);
      const ju = function(uu) {
          const Ru = Math.floor((uu - ru) / Bu);
          return Math.min(Nu.e, Math.max(Nu.g, Ru))
        }(Ju),
        Hu = (0, Nu.l)(ju);
      return {
        footprintBytes: Ju,
        shedFootprintBytes: Wu ? Math.max(Ju, Tu(ju)) : null,
        chunkCap: ju,
        maxHorizDistance: null !== (Ku = null === Hu || void 0 === Hu ? void 0 : Hu.horizontal) && void 0 !== Ku ? Ku : Eu.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (mu = null === Hu || void 0 === Hu ? void 0 : Hu.vertical) && void 0 !== mu ? mu : Eu.f.maxChunkVertAddDistance,
        basis: Xu
      }
    }
    let ju = null;

    function Hu() {
      return Wu({
        os: (0, Ku.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Qu.i)()
      }, (0, mu.g)(), (0, Ju.F)("wasm").length > 0)
    }

    function du() {
      return ju ??= Hu(), ju
    }

    function bu() {
      var uu;
      return (null !== (uu = ju) && void 0 !== uu ? uu : Hu()).basis
    }

    function Cu(uu, Ru) {
      return uu.setChunkCap(Ru.chunkCap)
    }
  },
  36431: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Vu,
      g: () => Bu,
      k: () => Wu,
      m: () => Xu
    });
    var Eu = yu(27),
      Ku = yu(2306),
      Qu = yu(2312),
      mu = yu(2320),
      Ju = yu(2368),
      Nu = yu(34);

    function Xu(uu, Ru) {
      return (!(0, mu.b)() || 0 === uu && 0 === Ru) && (0, Qu.D)(Ku.f.Joystick, 0, uu, Ru, 0)
    }
    const Vu = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function ru(uu) {
      return uu.classList.contains("TouchKeyHit") && xu() ? null : uu.firstElementChild
    }

    function Bu(uu) {
      return uu.classList.contains("TouchKeyHit") && !uu.classList.contains("CanvasZone") ? {
        whole: !xu(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Su(ru(uu))
      }
    }

    function xu() {
      return document.documentElement.classList.contains(Ju.k)
    }

    function Su(uu) {
      return !(uu instanceof HTMLElement) || uu.offsetWidth <= 0 || uu.offsetHeight <= 0 ? null : {
        width: uu.offsetWidth,
        height: uu.offsetHeight
      }
    }

    function pu(uu, Ru) {
      const yu = uu => Math.min(65535, Math.round(4 * uu));
      return (yu(uu) | yu(Ru) << 16) >>> 0
    }

    function Tu(uu) {
      return {
        x: uu.left + uu.width / 2,
        y: uu.top + uu.height / 2,
        radius: Math.min(uu.width, uu.height) / 2
      }
    }
    const Wu = new class {
      constructor(uu) {
        this.write = uu, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Ru ? this.elements.set(uu, {
          element: Ru,
          hidden: yu
        }) : this.elements.delete(uu), this.measureOne(uu)
      }
      measure() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = uu.left, this.canvasTop = uu.top;
        for (const Ru of this.elements.keys()) this.measureOne(Ru)
      }
      hitZone(uu, Ru) {
        let yu = null,
          Eu = 1;
        for (const Ku of this.elements.keys()) {
          const Qu = this.shown(Ku);
          if (!Qu) continue;
          const {
            rect: mu,
            element: Ju
          } = Qu, Nu = Tu(mu), Xu = Math.max(0, mu.width / 2 - Nu.radius), Vu = Math.max(0, mu.height / 2 - Nu.radius), Bu = Math.max(0, Math.abs(uu - Nu.x) - Xu), xu = Math.max(0, Math.abs(Ru - Nu.y) - Vu), pu = Ju.firstElementChild;
          let Wu = Math.hypot(Bu, xu) / Nu.radius;
          const ju = Su(ru(Ju));
          ju && (Wu = Math.min(Wu, Math.max(2 * Math.abs(uu - Nu.x) / ju.width, 2 * Math.abs(Ru - Nu.y) / ju.height))), Wu < Eu && (yu = {
            code: Ku,
            element: Ju,
            key: pu,
            ...Nu
          }, Eu = Wu)
        }
        return yu
      }
      measureOne(uu) {
        const Ru = this.shown(uu);
        if (!Ru) return void this.write(Ku.f.TouchZone, uu, 0, 0, 0);
        const {
          rect: yu,
          element: Eu
        } = Ru, Qu = Tu(yu);
        this.write(Ku.f.TouchZone, uu, Qu.x - this.canvasLeft, Qu.y - this.canvasTop, pu(yu.width, yu.height));
        const mu = Su(ru(Eu));
        this.write(Ku.f.TouchZone, 256 | uu, 0, 0, mu ? pu(mu.width, mu.height) : 0)
      }
      shown(uu) {
        const Ru = this.elements.get(uu),
          yu = Eu.d.get("worldPanelHud");
        if (!Ru || Ru.hidden || "none" === yu) return null;
        const Ku = Ru.element.getBoundingClientRect();
        return Ku.width <= 0 || Ku.height <= 0 ? null : {
          rect: Ku,
          element: Ru.element
        }
      }
    }(Qu.D);
    (0, Nu.n)(Ju.e, (() => {
      Wu.measure()
    }))
  },
  36615: (uu, Ru, yu) => {
    function Eu(uu) {
      return "fetch" === uu || "timeout" === uu || "integrity" === uu ? "download" : "browser"
    }
    yu.d(Ru, {
      c: () => Ku,
      g: () => mu,
      i: () => Nu,
      k: () => Ju,
      o: () => Eu,
      r: () => Qu
    });
    const Ku = "https://discord.gg/playbloxd";

    function Qu(uu) {
      return "download" === uu ? {
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

    function mu(uu, Ru) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Ru ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: uu.code
        },
        discordLink: Ru,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Ju() {
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

    function Nu(uu, Ru, yu) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: yu ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: uu.reason
        },
        discordLink: null === uu.name,
        confirm: Ru ? "general:reconnect" : uu.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36670: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return null === uu || null === Ru ? uu === Ru : uu[0] === Ru[0] && uu[1] === Ru[1] && uu[2] === Ru[2]
    }

    function Ku(uu) {
      return [uu[0] + .5, uu[1] + .5, uu[2] + .5]
    }
    yu.d(Ru, {
      b: () => Ku,
      f: () => Eu
    })
  },
  36619: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Nu,
      h: () => Ju
    });
    const Eu = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      Ku = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      Qu = {
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
      mu = {
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
      Ju = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: Eu.files,
          dependencies: Eu.dependencies,
          bundledSource: Eu.bundledSource,
          types: Eu.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: Ku.files,
          dependencies: Ku.dependencies,
          bundledSource: Ku.bundledSource,
          types: Ku.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: Qu.files,
          dependencies: Qu.dependencies,
          bundledSource: Qu.bundledSource,
          types: Qu.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: mu.files,
          dependencies: mu.dependencies,
          bundledSource: mu.bundledSource,
          types: mu.types
        }
      };

    function Nu(uu) {
      const Ru = [],
        yu = new Set,
        Eu = uu => {
          if (yu.has(uu)) return;
          const Ku = Ju[uu];
          if (Ku) {
            yu.add(uu);
            for (const uu of Ku.dependencies) Eu(uu);
            Ru.push(uu)
          }
        };
      for (const Ku of uu) Eu(Ku);
      return Ru
    }
  },
  36625: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Nu,
      g: () => Ju,
      h: () => mu,
      k: () => Qu,
      l: () => Xu,
      n: () => Vu,
      r: () => Su,
      v: () => xu,
      z: () => Bu
    });
    var Eu = yu(1215);
    const Ku = ["quickjs", "ses"];

    function Qu(uu) {
      return Ku.includes(uu)
    }

    function mu(uu) {
      return uu === Eu.k || uu === Eu.n
    }

    function Ju(uu, Ru) {
      return uu === Eu.k && Ru === Eu.n || uu === Eu.n && Ru === Eu.k
    }

    function Nu(uu) {
      const Ru = Eu.n in uu,
        yu = Eu.k in uu;
      return Ru && yu ? null : Ru ? Eu.n : yu ? Eu.k : null
    }

    function Xu(uu, Ru, yu) {
      const Eu = `${Ru}/`;
      return uu.filter((uu => uu.startsWith(Eu))).map((uu => [uu, `${yu}/${uu.slice(Eu.length)}`]))
    }

    function Vu(uu, Ru) {
      let yu = 0;
      for (const [Eu, Ku] of Object.entries(uu)) Eu !== Ru && (yu += Ku.length);
      return yu
    }
    const ru = "@plugins/";

    function Bu(uu) {
      return `${ru}${uu}`
    }

    function xu(uu, Ru) {
      return `/node_modules/@plugins/${uu}/${Ru}`
    }

    function Su(uu) {
      if (!uu.startsWith(ru)) return null;
      const Ru = uu.slice(ru.length);
      return function(uu) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(uu)
      }(Ru) ? Ru : null
    }
  },
  36640: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      d: () => Ku,
      f: () => mu,
      h: () => Nu,
      i: () => Qu
    });
    var Eu = yu(36632);
    const Ku = 5,
      Qu = "[SCHEMATIC]",
      mu = 1024e4;

    function Ju(uu) {
      return uu.endsWith(".bloxdschem") && (0, Eu.v)(uu.slice(0, -11) + ".ts") && uu.length <= 64
    }

    function Nu(uu) {
      return Object.fromEntries(Object.keys(uu).map((uu => [uu, Qu])))
    }
  },
  36632: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => mu,
      e: () => Ku,
      f: () => Qu,
      j: () => Bu,
      n: () => Ju,
      p: () => Nu,
      s: () => Xu,
      v: () => ru,
      x: () => Vu
    });
    var Eu = yu(1215);
    let Ku = function(uu) {
        return uu[uu.Join = 0] = "Join", uu[uu.Leave = 1] = "Leave", uu[uu.Push = 2] = "Push", uu[uu.Cursor = 3] = "Cursor", uu[uu.Submit = 4] = "Submit", uu[uu.ReloadAsVariation = 5] = "ReloadAsVariation", uu[uu.CreateFile = 6] = "CreateFile", uu[uu.RenameFile = 7] = "RenameFile", uu[uu.DeleteFile = 8] = "DeleteFile", uu[uu.SetEngine = 9] = "SetEngine", uu[uu.RenameFolder = 10] = "RenameFolder", uu
      }({}),
      Qu = function(uu) {
        return uu[uu.Joined = 0] = "Joined", uu[uu.Updates = 1] = "Updates", uu[uu.Presence = 2] = "Presence", uu[uu.RemoteCursor = 3] = "RemoteCursor", uu[uu.ForceClose = 4] = "ForceClose", uu[uu.LobbyFilesChanged = 5] = "LobbyFilesChanged", uu[uu.EngineSettings = 6] = "EngineSettings", uu
      }({});

    function mu(uu) {
      return "lobby" === uu.kind ? `lobby:${uu.path}` : `codeBlock:${uu.pos[0]},${uu.pos[1]},${uu.pos[2]}`
    }

    function Ju(uu) {
      if ("lobby" === uu) return {
        kind: "lobby",
        path: Eu.k
      };
      if (uu.startsWith("lobby:")) {
        const Ru = uu.slice(6);
        return ru(Ru) ? {
          kind: "lobby",
          path: Ru
        } : null
      }
      const Ru = uu.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Ru ? {
        kind: "codeBlock",
        pos: [parseInt(Ru[1]), parseInt(Ru[2]), parseInt(Ru[3])]
      } : null
    }

    function Nu(uu) {
      return uu.endsWith(".d.ts")
    }

    function Xu(uu) {
      return uu.endsWith(".ts") && !Nu(uu)
    }
    const Vu = 64;

    function ru(uu) {
      if (!uu || uu !== uu.trim()) return !1;
      if (uu.length > Vu) return !1;
      if (uu.startsWith("/") || uu.includes("\\") || uu.includes("\0")) return !1;
      if (!Nu(uu) && !Xu(uu) && ! function(uu) {
          return uu.endsWith(".js") && !uu.endsWith(".min.js") && !uu.endsWith(".bundle.js")
        }(uu)) return !1;
      const Ru = uu.split("/");
      for (const yu of Ru)
        if ("" === yu || "." === yu || ".." === yu) return !1;
      return !0
    }
    const Bu = 14e3
  },
  4617: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      d: () => Eu,
      g: () => Qu,
      k: () => Nu,
      m: () => mu
    });
    const Eu = ["sine", "triangle", "square", "sawtooth"],
      Ku = 55,
      Qu = {
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

    function mu(uu) {
      return "string" !== typeof uu ? uu : Object.hasOwn(Qu, uu) ? Qu[uu] : null
    }

    function Ju(uu, Ru, yu) {
      return Math.min(yu, Math.max(Ru, uu))
    }

    function Nu(uu) {
      const Ru = Ju(uu.durationMs, 10, 500),
        yu = Ju(uu.attackMs, 0, Ru),
        {
          intonation: Ku
        } = uu;
      return {
        waveform: Eu.includes(uu.waveform) ? uu.waveform : "sine",
        pitchHz: Ju(uu.pitchHz, 20, 4e3),
        glideSemitones: Ju(uu.glideSemitones, -24, 24),
        durationMs: Ru,
        attackMs: yu,
        releaseMs: Ju(uu.releaseMs, 0, Ru - yu),
        lowpassHz: null === uu.lowpassHz ? null : Ju(uu.lowpassHz, 20, 2e4),
        volume: Ju(uu.volume, 0, 2),
        intonation: {
          variationSemitones: Ju(Ku.variationSemitones, 0, 6),
          declineSemitones: Ju(Ku.declineSemitones, 0, 12),
          questionRiseSemitones: Ju(Ku.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Ju(Ku.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Ju(uu.syllableMs, 25, 200)
      }
    }
  },
  9899: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18212: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20134: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20142: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20145: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20149: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20151: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);